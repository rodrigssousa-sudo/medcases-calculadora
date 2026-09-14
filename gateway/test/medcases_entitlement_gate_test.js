'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');

const {
  CAP,
  verifySignedSession,
  hasCapability,
  requireCapability,
  authorizeDrugId,
} = require('../medcases_entitlement_gate');

const SECRET =
  'test-only-medcases-calculator-session-secret-0123456789abcdef';

const NOW = 2_000_000_000;

function issue({
  uid,
  tier,
  cap,
  exp = NOW + 600,
} = {}) {
  const payload = {
    v: 1,
    sub: uid,
    tier,
    cap,
    aud: 'medcases-calculator',
    iat: NOW,
    exp,
    jti: crypto.randomUUID(),
  };

  const encoded = Buffer
    .from(
      JSON.stringify(payload),
      'utf8',
    )
    .toString('base64url');

  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(encoded)
    .digest('base64url');

  return `mcc1.${encoded}.${signature}`;
}

function expectThrow(fn, message) {
  assert.throws(fn, (err) => {
    assert.equal(err.message, message);
    return true;
  });
}

const freeClaims = verifySignedSession(
  issue({
    uid: 'free-uid',
    tier: 'free',
    cap: [
      CAP.SCORES,
      CAP.DRUG_CATALOG_FREE,
    ],
  }),
  {
    secret: SECRET,
    nowEpoch: NOW + 10,
  },
);

assert.equal(
  hasCapability(
    freeClaims,
    CAP.SCORES,
  ),
  true,
);

assert.equal(
  hasCapability(
    freeClaims,
    CAP.DRUG_CATALOG_FULL,
  ),
  false,
);

assert.equal(
  hasCapability(
    freeClaims,
    CAP.DOSE_BY_WEIGHT,
  ),
  false,
);

assert.equal(
  hasCapability(
    freeClaims,
    CAP.RENAL_ADJUSTMENT,
  ),
  false,
);

const freeIds = new Set([
  'amoxicilina',
  'losartana',
]);

assert.equal(
  authorizeDrugId({
    claims: freeClaims,
    drugId: 'amoxicilina',
    freeDrugIds: freeIds,
  }).allowed,
  true,
);

assert.equal(
  authorizeDrugId({
    claims: freeClaims,
    drugId: 'premium-only-drug',
    freeDrugIds: freeIds,
  }).allowed,
  false,
);

expectThrow(
  () =>
    requireCapability(
      freeClaims,
      CAP.DOSE_BY_WEIGHT,
    ),
  'PREMIUM_REQUIRED',
);

expectThrow(
  () =>
    requireCapability(
      freeClaims,
      CAP.RENAL_ADJUSTMENT,
    ),
  'PREMIUM_REQUIRED',
);

const premiumClaims = verifySignedSession(
  issue({
    uid: 'premium-uid',
    tier: 'premium',
    cap: [
      CAP.SCORES,
      CAP.DRUG_CATALOG_FREE,
      CAP.DRUG_CATALOG_FULL,
      CAP.DOSE_BY_WEIGHT,
      CAP.RENAL_ADJUSTMENT,
    ],
  }),
  {
    secret: SECRET,
    nowEpoch: NOW + 10,
  },
);

assert.equal(
  authorizeDrugId({
    claims: premiumClaims,
    drugId: 'anything',
    freeDrugIds: new Set(),
  }).allowed,
  true,
);

assert.equal(
  requireCapability(
    premiumClaims,
    CAP.DOSE_BY_WEIGHT,
  ),
  true,
);

assert.equal(
  requireCapability(
    premiumClaims,
    CAP.RENAL_ADJUSTMENT,
  ),
  true,
);

const forged = issue({
  uid: 'premium-uid',
  tier: 'premium',
  cap: [CAP.DRUG_CATALOG_FULL],
});

const forged2 =
  forged.slice(0, -1) +
  (forged.endsWith('A') ? 'B' : 'A');

expectThrow(
  () =>
    verifySignedSession(
      forged2,
      {
        secret: SECRET,
        nowEpoch: NOW + 10,
      },
    ),
  'CALCULATOR_GATE_BAD_SIGNATURE',
);

console.log('CALCULATOR_GATE_CONTRACT_TEST=PASS');
console.log('FREE_SCORES_ALLOWED=PASS');
console.log('FREE_400_ALLOWLIST_MODEL=PASS');
console.log('FREE_FULL_CATALOG_DENIED=PASS');
console.log('FREE_WEIGHT_DOSE_DENIED=PASS');
console.log('FREE_RENAL_DENIED=PASS');
console.log('PREMIUM_CAPABILITIES_ALLOWED=PASS');
console.log('FORGED_TOKEN_REJECTED=PASS');
