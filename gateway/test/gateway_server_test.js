'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');

const {
  CAP,
} = require('../medcases_entitlement_gate');

const {
  createGatewayHandler,
} = require('../server');

const SECRET =
  'test-only-medcases-calculator-session-secret-0123456789abcdef';
const NOW = 2_000_000_000;

function issue({ uid, tier, cap } = {}) {
  const payload = {
    v: 1,
    sub: uid,
    tier,
    cap,
    aud: 'medcases-calculator',
    iat: NOW,
    exp: NOW + 600,
    jti: crypto.randomUUID(),
  };

  const encoded = Buffer
    .from(JSON.stringify(payload), 'utf8')
    .toString('base64url');

  const signature = crypto
    .createHmac('sha256', SECRET)
    .update(encoded)
    .digest('base64url');

  return `mcc1.${encoded}.${signature}`;
}

function request(server, {
  method = 'GET',
  pathname = '/',
  token = '',
} = {}) {
  return new Promise((resolve, reject) => {
    const address = server.address();

    const req = http.request(
      {
        hostname: '127.0.0.1',
        port: address.port,
        path: pathname,
        method,
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : {},
      },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: JSON.parse(body),
          });
        });
      },
    );

    req.on('error', reject);
    req.end();
  });
}

async function run() {
  const root = fs.mkdtempSync(
    path.join(os.tmpdir(), 'mcc-gateway-test-'),
  );

  const drugsDir = path.join(root, 'data', 'drugs');
  fs.mkdirSync(drugsDir, { recursive: true });

  fs.writeFileSync(
    path.join(drugsDir, 'amoxicilina.json'),
    JSON.stringify({
      id: 'amoxicilina',
      name: 'Amoxicilina',
    }),
  );

  fs.writeFileSync(
    path.join(drugsDir, 'premium_only.json'),
    JSON.stringify({
      id: 'premium_only',
      name: 'Premium Only',
    }),
  );

  const freeToken = issue({
    uid: 'free-uid',
    tier: 'free',
    cap: [
      CAP.SCORES,
      CAP.DRUG_CATALOG_FREE,
    ],
  });

  const premiumToken = issue({
    uid: 'premium-uid',
    tier: 'premium',
    cap: [
      CAP.SCORES,
      CAP.DRUG_CATALOG_FREE,
      CAP.DRUG_CATALOG_FULL,
      CAP.DOSE_BY_WEIGHT,
      CAP.RENAL_ADJUSTMENT,
    ],
  });

  const handler = createGatewayHandler({
    secret: SECRET,
    rootDir: root,
    freeDrugIds: new Set(['amoxicilina']),
    nowEpochProvider: () => NOW + 10,
  });

  const server = http.createServer(handler);

  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  try {
    const health = await request(server, {
      pathname: '/health',
    });
    assert.equal(health.status, 200);
    assert.equal(health.body.freeDrugCount, 1);
    assert.equal(health.body.productionReady, false);

    const freeAllowed = await request(server, {
      pathname: '/api/drugs/amoxicilina',
      token: freeToken,
    });
    assert.equal(freeAllowed.status, 200);
    assert.equal(
      freeAllowed.body.drug.id,
      'amoxicilina',
    );

    const freeDenied = await request(server, {
      pathname: '/api/drugs/premium_only',
      token: freeToken,
    });
    assert.equal(freeDenied.status, 403);
    assert.equal(
      freeDenied.body.error,
      'PREMIUM_REQUIRED',
    );

    const premiumAllowed = await request(server, {
      pathname: '/api/drugs/premium_only',
      token: premiumToken,
    });
    assert.equal(premiumAllowed.status, 200);
    assert.equal(
      premiumAllowed.body.drug.id,
      'premium_only',
    );

    const freeWeight = await request(server, {
      method: 'POST',
      pathname: '/api/premium/dose-by-weight',
      token: freeToken,
    });
    assert.equal(freeWeight.status, 403);

    const premiumWeight = await request(server, {
      method: 'POST',
      pathname: '/api/premium/dose-by-weight',
      token: premiumToken,
    });
    assert.equal(premiumWeight.status, 501);
    assert.equal(
      premiumWeight.body.error,
      'AUTHORIZED_RUNTIME_NOT_YET_WIRED',
    );

    const freeRenal = await request(server, {
      method: 'POST',
      pathname: '/api/premium/renal-adjustment',
      token: freeToken,
    });
    assert.equal(freeRenal.status, 403);

    const premiumRenal = await request(server, {
      method: 'POST',
      pathname: '/api/premium/renal-adjustment',
      token: premiumToken,
    });
    assert.equal(premiumRenal.status, 501);

    const noToken = await request(server, {
      pathname: '/api/session',
    });
    assert.equal(noToken.status, 401);

    const forged =
      premiumToken.slice(0, -1) +
      (premiumToken.endsWith('A') ? 'B' : 'A');

    const forgedRes = await request(server, {
      pathname: '/api/session',
      token: forged,
    });
    assert.equal(forgedRes.status, 401);

    const session = await request(server, {
      pathname: '/api/session',
      token: premiumToken,
    });
    assert.equal(session.status, 200);
    assert.equal(session.body.tier, 'premium');
    assert.equal(
      session.headers['cache-control'],
      'private, no-store',
    );

    console.log('CALCULATOR_GATEWAY_RUNTIME_TEST=PASS');
    console.log('FREE_ALLOWLIST_DRUG_ALLOWED=PASS');
    console.log('FREE_NON_ALLOWLIST_DRUG_DENIED=PASS');
    console.log('PREMIUM_FULL_CATALOG_AUTHORIZED=PASS');
    console.log('FREE_WEIGHT_DOSE_DENIED=PASS');
    console.log('FREE_RENAL_DENIED=PASS');
    console.log('PREMIUM_WEIGHT_CAPABILITY_AUTHORIZED=PASS');
    console.log('PREMIUM_RENAL_CAPABILITY_AUTHORIZED=PASS');
    console.log('MISSING_TOKEN_DENIED=PASS');
    console.log('FORGED_TOKEN_DENIED=PASS');
    console.log('GATEWAY_NO_STORE_HEADER=PASS');
  } finally {
    await new Promise((resolve) => {
      server.close(resolve);
    });
    fs.rmSync(root, {
      recursive: true,
      force: true,
    });
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
