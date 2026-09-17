'use strict';

const crypto = require('node:crypto');

const TOKEN_PREFIX = 'mcc1';
const EXPECTED_AUDIENCE = 'medcases-calculator';
const MAX_TTL_SECONDS = 900;

const CAP = Object.freeze({
  SCORES: 'scores',
  DRUG_CATALOG_FREE: 'drug_catalog_free',
  DRUG_CATALOG_FULL: 'drug_catalog_full',
  DOSE_BY_WEIGHT: 'dose_by_weight',
  RENAL_ADJUSTMENT: 'renal_adjustment',
});

function clean(value) {
  return String(value ?? '').trim();
}

function requireSecret(secret) {
  const value = clean(secret);
  if (Buffer.byteLength(value, 'utf8') < 32) {
    throw new Error('CALCULATOR_GATE_SECRET_TOO_SHORT');
  }
  return value;
}

function safeEqual(left, right) {
  let a;
  let b;

  try {
    a = Buffer.from(String(left), 'base64url');
    b = Buffer.from(String(right), 'base64url');
  } catch (_) {
    return false;
  }

  // Reject alternate base64url encodings of the same HMAC bytes.
  // A SHA-256 signature must use the single canonical 43-character encoding.
  const l = String(left);
  const r = String(right);
  return /^[A-Za-z0-9_-]{43}$/.test(l) &&
    /^[A-Za-z0-9_-]{43}$/.test(r) &&
    a.length === 32 &&
    b.length === 32 &&
    a.toString('base64url') === l &&
    b.toString('base64url') === r &&
    crypto.timingSafeEqual(a, b);
}

function verifySignedSession(
  token,
  {
    secret,
    nowEpoch = Math.floor(Date.now() / 1000),
    audience = EXPECTED_AUDIENCE,
  } = {},
) {
  const parts = clean(token).split('.');

  if (parts.length !== 3 || parts[0] !== TOKEN_PREFIX) {
    throw new Error('CALCULATOR_GATE_TOKEN_MALFORMED');
  }

  const [, encoded, signature] = parts;

  const expected = crypto
    .createHmac('sha256', requireSecret(secret))
    .update(encoded)
    .digest('base64url');

  if (!safeEqual(signature, expected)) {
    throw new Error('CALCULATOR_GATE_BAD_SIGNATURE');
  }

  let claims;

  try {
    claims = JSON.parse(
      Buffer.from(encoded, 'base64url').toString('utf8'),
    );
  } catch (_) {
    throw new Error('CALCULATOR_GATE_INVALID_PAYLOAD');
  }

  const now = Number(nowEpoch);

  if (
    claims.v !== 1 ||
    typeof claims.sub !== 'string' ||
    !claims.sub.trim() ||
    (claims.tier !== 'free' &&
      claims.tier !== 'premium') ||
    !Array.isArray(claims.cap) ||
    typeof claims.aud !== 'string' ||
    !Number.isInteger(claims.iat) ||
    !Number.isInteger(claims.exp) ||
    typeof claims.jti !== 'string' ||
    !claims.jti.trim()
  ) {
    throw new Error('CALCULATOR_GATE_INVALID_CLAIMS');
  }

  if (claims.aud !== clean(audience)) {
    throw new Error('CALCULATOR_GATE_WRONG_AUDIENCE');
  }

  if (claims.exp <= now) {
    throw new Error('CALCULATOR_GATE_TOKEN_EXPIRED');
  }

  if (claims.iat > now + 30) {
    throw new Error('CALCULATOR_GATE_IAT_IN_FUTURE');
  }

  if (
    claims.exp <= claims.iat ||
    claims.exp - claims.iat > MAX_TTL_SECONDS
  ) {
    throw new Error('CALCULATOR_GATE_TTL_INVALID');
  }

  return Object.freeze({
    ...claims,
    cap: Object.freeze([...claims.cap]),
  });
}

function hasCapability(claims, capability) {
  return Boolean(
    claims &&
    Array.isArray(claims.cap) &&
    claims.cap.includes(capability),
  );
}

function requireCapability(claims, capability) {
  if (!hasCapability(claims, capability)) {
    const error = new Error('PREMIUM_REQUIRED');
    error.code = 'PREMIUM_REQUIRED';
    error.capability = capability;
    throw error;
  }

  return true;
}

function authorizeDrugId({
  claims,
  drugId,
  freeDrugIds,
} = {}) {
  const id = clean(drugId);

  if (!id) {
    throw new Error('DRUG_ID_REQUIRED');
  }

  if (
    hasCapability(
      claims,
      CAP.DRUG_CATALOG_FULL,
    )
  ) {
    return Object.freeze({
      allowed: true,
      reason: 'premium_full_catalog',
      tier: 'premium',
    });
  }

  const allowlist =
    freeDrugIds instanceof Set
      ? freeDrugIds
      : new Set(
          Array.isArray(freeDrugIds)
            ? freeDrugIds
            : [],
        );

  if (
    hasCapability(
      claims,
      CAP.DRUG_CATALOG_FREE,
    ) &&
    allowlist.has(id)
  ) {
    return Object.freeze({
      allowed: true,
      reason: 'free_allowlist',
      tier: 'free',
    });
  }

  return Object.freeze({
    allowed: false,
    reason: 'premium_required',
    tier:
      claims?.tier === 'premium'
        ? 'premium'
        : 'free',
  });
}

function extractBearerToken(headerValue) {
  const match =
    /^Bearer\s+(.+)$/i.exec(
      clean(headerValue),
    );

  return match
    ? match[1].trim()
    : '';
}

module.exports = {
  CAP,
  EXPECTED_AUDIENCE,
  verifySignedSession,
  hasCapability,
  requireCapability,
  authorizeDrugId,
  extractBearerToken,
};
