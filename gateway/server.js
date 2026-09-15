'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const {
  CAP,
  verifySignedSession,
  requireCapability,
  authorizeDrugId,
  extractBearerToken,
} = require('./medcases_entitlement_gate');

const DEFAULT_PORT = 8080;
const REQUIRED_FREE_DRUG_COUNT = 400;

function json(res, status, payload) {
  const body = Buffer.from(JSON.stringify(payload), 'utf8');

  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Length', String(body.length));
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(body);
}

function cleanDrugId(value) {
  const id = String(value || '').trim();
  if (!/^[a-z0-9_]+$/.test(id)) {
    return '';
  }
  return id;
}

function loadFreeDrugIds(filePath, {
  requireExactCount = false,
} = {}) {
  const raw = JSON.parse(
    fs.readFileSync(filePath, 'utf8'),
  );

  const list = Array.isArray(raw)
    ? raw
    : raw?.drugIds ?? raw?.ids;

  if (!Array.isArray(list)) {
    throw new Error('FREE_DRUG_ALLOWLIST_INVALID');
  }

  const ids = list.map(cleanDrugId);

  if (ids.some((id) => !id)) {
    throw new Error('FREE_DRUG_ALLOWLIST_INVALID_ID');
  }

  const unique = new Set(ids);

  if (unique.size !== ids.length) {
    throw new Error('FREE_DRUG_ALLOWLIST_DUPLICATE_ID');
  }

  if (
    requireExactCount &&
    unique.size !== REQUIRED_FREE_DRUG_COUNT
  ) {
    throw new Error(
      `FREE_DRUG_ALLOWLIST_COUNT_${unique.size}_EXPECTED_${REQUIRED_FREE_DRUG_COUNT}`,
    );
  }

  return unique;
}

function createGatewayHandler({
  secret,
  rootDir,
  freeDrugIds,
  nowEpochProvider = () => Math.floor(Date.now() / 1000),
} = {}) {
  const safeRoot = path.resolve(
    rootDir || path.join(__dirname, '..'),
  );

  const allowlist =
    freeDrugIds instanceof Set
      ? freeDrugIds
      : new Set(freeDrugIds || []);

  function authenticate(req) {
    const token = extractBearerToken(
      req.headers?.authorization,
    );

    if (!token) {
      const error = new Error('SESSION_TOKEN_REQUIRED');
      error.statusCode = 401;
      throw error;
    }

    try {
      return verifySignedSession(token, {
        secret,
        nowEpoch: nowEpochProvider(),
      });
    } catch (_) {
      const error = new Error('SESSION_TOKEN_INVALID');
      error.statusCode = 401;
      throw error;
    }
  }

  return async function gatewayHandler(req, res) {
    const url = new URL(
      req.url || '/',
      'http://medcases-calculator.local',
    );

    if (req.method === 'GET' && url.pathname === '/health') {
      return json(res, 200, {
        ok: true,
        service: 'medcases-calculator-gateway',
        freeDrugCount: allowlist.size,
        productionReady:
          allowlist.size === REQUIRED_FREE_DRUG_COUNT,
      });
    }

    if (
      req.method === 'GET' &&
      url.pathname === '/api/session'
    ) {
      try {
        const claims = authenticate(req);
        return json(res, 200, {
          ok: true,
          tier: claims.tier,
          capabilities: claims.cap,
          expiresAtEpoch: claims.exp,
        });
      } catch (err) {
        return json(
          res,
          err.statusCode || 401,
          { ok: false, error: err.message },
        );
      }
    }

    const drugMatch =
      /^\/api\/drugs\/([a-z0-9_]+)$/.exec(
        url.pathname,
      );

    if (req.method === 'GET' && drugMatch) {
      let claims;
      try {
        claims = authenticate(req);
      } catch (err) {
        return json(
          res,
          err.statusCode || 401,
          { ok: false, error: err.message },
        );
      }

      const drugId = cleanDrugId(drugMatch[1]);
      const authz = authorizeDrugId({
        claims,
        drugId,
        freeDrugIds: allowlist,
      });

      if (!authz.allowed) {
        return json(res, 403, {
          ok: false,
          error: 'PREMIUM_REQUIRED',
          capability: CAP.DRUG_CATALOG_FULL,
        });
      }

      const filePath = path.join(
        safeRoot,
        'data',
        'drugs',
        `${drugId}.json`,
      );

      const resolved = path.resolve(filePath);
      const expectedPrefix =
        path.join(safeRoot, 'data', 'drugs') +
        path.sep;

      if (!resolved.startsWith(expectedPrefix)) {
        return json(res, 400, {
          ok: false,
          error: 'DRUG_ID_INVALID',
        });
      }

      if (!fs.existsSync(resolved)) {
        return json(res, 404, {
          ok: false,
          error: 'DRUG_NOT_FOUND',
        });
      }

      let payload;
      try {
        payload = JSON.parse(
          fs.readFileSync(resolved, 'utf8'),
        );
      } catch (_) {
        return json(res, 500, {
          ok: false,
          error: 'DRUG_PAYLOAD_INVALID',
        });
      }

      return json(res, 200, {
        ok: true,
        tier: authz.tier,
        drug: payload,
      });
    }

    if (
      req.method === 'POST' &&
      url.pathname === '/api/premium/dose-by-weight'
    ) {
      let claims;
      try {
        claims = authenticate(req);
        requireCapability(
          claims,
          CAP.DOSE_BY_WEIGHT,
        );
      } catch (err) {
        return json(
          res,
          err.code === 'PREMIUM_REQUIRED' ? 403 : 401,
          {
            ok: false,
            error:
              err.code === 'PREMIUM_REQUIRED'
                ? 'PREMIUM_REQUIRED'
                : 'SESSION_TOKEN_INVALID',
            capability: CAP.DOSE_BY_WEIGHT,
          },
        );
      }

      return json(res, 501, {
        ok: false,
        error: 'AUTHORIZED_RUNTIME_NOT_YET_WIRED',
        capability: CAP.DOSE_BY_WEIGHT,
      });
    }

    if (
      req.method === 'POST' &&
      url.pathname === '/api/premium/renal-adjustment'
    ) {
      let claims;
      try {
        claims = authenticate(req);
        requireCapability(
          claims,
          CAP.RENAL_ADJUSTMENT,
        );
      } catch (err) {
        return json(
          res,
          err.code === 'PREMIUM_REQUIRED' ? 403 : 401,
          {
            ok: false,
            error:
              err.code === 'PREMIUM_REQUIRED'
                ? 'PREMIUM_REQUIRED'
                : 'SESSION_TOKEN_INVALID',
            capability: CAP.RENAL_ADJUSTMENT,
          },
        );
      }

      return json(res, 501, {
        ok: false,
        error: 'AUTHORIZED_RUNTIME_NOT_YET_WIRED',
        capability: CAP.RENAL_ADJUSTMENT,
      });
    }

    return json(res, 404, {
      ok: false,
      error: 'NOT_FOUND',
    });
  };
}

function startGateway({
  port = Number(process.env.PORT || DEFAULT_PORT),
  secret = process.env.MEDCASES_CALCULATOR_SESSION_SECRET,
  rootDir = path.join(__dirname, '..'),
  allowlistPath = process.env.MEDCASES_FREE_DRUG_ALLOWLIST ||
    path.join(__dirname, 'data', 'free400_allowlist.v1.json'),
  production =
    process.env.NODE_ENV === 'production',
} = {}) {
  const normalizedSecret = String(secret || '').trim();

  if (Buffer.byteLength(normalizedSecret, 'utf8') < 32) {
    throw new Error('CALCULATOR_GATEWAY_SECRET_UNAVAILABLE');
  }

  if (!fs.existsSync(allowlistPath)) {
    throw new Error('FREE_DRUG_ALLOWLIST_MISSING');
  }

  const freeDrugIds = loadFreeDrugIds(
    allowlistPath,
    {
      requireExactCount: production,
    },
  );

  const handler = createGatewayHandler({
    secret: normalizedSecret,
    rootDir,
    freeDrugIds,
  });

  const server = http.createServer(handler);

  server.listen(port, '0.0.0.0', () => {
    const address = server.address();
    const actualPort =
      typeof address === 'object' && address
        ? address.port
        : port;

    console.log(
      `MEDCASES_CALCULATOR_GATEWAY_LISTENING=${actualPort}`,
    );
    console.log(
      `MEDCASES_CALCULATOR_FREE_DRUG_COUNT=${freeDrugIds.size}`,
    );
  });

  return server;
}

if (require.main === module) {
  startGateway();
}

module.exports = {
  DEFAULT_PORT,
  REQUIRED_FREE_DRUG_COUNT,
  cleanDrugId,
  loadFreeDrugIds,
  createGatewayHandler,
  startGateway,
};
