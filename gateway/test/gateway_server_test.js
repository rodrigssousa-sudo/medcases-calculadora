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

  const aiBundleId = 'clinical-data-v1-test-ai-test';
  const aiBundleDir = path.join(root, 'data', 'ai-drug-data', 'bundles', aiBundleId);
  fs.mkdirSync(path.join(aiBundleDir, 'drugs'), { recursive: true });
  const aiFiles = {
    'manifest.json': JSON.stringify({ projection: { drugCount: 2, typedRegimenCount: 0 } }),
    'index.json': JSON.stringify([{ drugId: 'amoxicilina' }, { drugId: 'premium_only' }]),
    'drugs/amoxicilina.json': JSON.stringify({ drugId: 'amoxicilina', typedRegimens: [], typedRegimenInferenceUsed: false, publishableForDeterministicDosing: false }),
  };
  const publicationFiles = {};
  for (const [relative, content] of Object.entries(aiFiles)) {
    const target = path.join(aiBundleDir, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
    publicationFiles[relative] = { sha256: crypto.createHash('sha256').update(content).digest('hex'), bytes: Buffer.byteLength(content) };
  }
  const aiBundleSha = 'a'.repeat(64);
  fs.writeFileSync(path.join(aiBundleDir, 'publication.json'), JSON.stringify({ bundleId: aiBundleId, bundleSha256: aiBundleSha, immutableBundle: true, files: publicationFiles }));
  fs.writeFileSync(path.join(root, 'data', 'ai-drug-data', 'current.json'), JSON.stringify({ bundleId: aiBundleId, bundleSha256: aiBundleSha, drugCount: 2, typedRegimenCount: 0 }));

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
      CAP.AI_DRUG_DATA,
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

    const aiNoToken = await request(server, { pathname: '/api/ai-drug-data/current' });
    assert.equal(aiNoToken.status, 401);
    const aiFreeDenied = await request(server, { pathname: '/api/ai-drug-data/current', token: freeToken });
    assert.equal(aiFreeDenied.status, 403);
    const aiCurrent = await request(server, { pathname: '/api/ai-drug-data/current', token: premiumToken });
    assert.equal(aiCurrent.status, 200);
    assert.equal(aiCurrent.body.bundleId, aiBundleId);
    const currentPath = path.join(root, 'data', 'ai-drug-data', 'current.json');
    fs.writeFileSync(currentPath, JSON.stringify({ bundleId: aiBundleId, bundleSha256: 'b'.repeat(64) }));
    const aiWrongSha = await request(server, { pathname: '/api/ai-drug-data/current.json', token: premiumToken });
    assert.equal(aiWrongSha.status, 409);
    assert.equal(aiWrongSha.body.error, 'AI_CURRENT_SHA_MISMATCH');
    fs.writeFileSync(currentPath, JSON.stringify({ bundleId: 'missing-bundle', bundleSha256: aiBundleSha }));
    const aiMissingBundle = await request(server, { pathname: '/api/ai-drug-data/current', token: premiumToken });
    assert.equal(aiMissingBundle.status, 409);
    assert.equal(aiMissingBundle.body.error, 'AI_CURRENT_BUNDLE_MISSING');
    fs.writeFileSync(currentPath, JSON.stringify({ bundleId: aiBundleId, bundleSha256: aiBundleSha, drugCount: 2, typedRegimenCount: 0 }));
    const aiDrug = await request(server, { pathname: `/api/ai-drug-data/bundles/${aiBundleId}/drugs/amoxicilina.json`, token: premiumToken });
    assert.equal(aiDrug.status, 200);
    assert.deepEqual(aiDrug.body.typedRegimens, []);
    fs.writeFileSync(path.join(aiBundleDir, 'drugs', 'amoxicilina.json'), '{}');
    const aiTampered = await request(server, { pathname: `/api/ai-drug-data/bundles/${aiBundleId}/drugs/amoxicilina.json`, token: premiumToken });
    assert.equal(aiTampered.status, 409);
    assert.equal(aiTampered.body.error, 'AI_BUNDLE_FILE_TAMPERED');

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
    console.log('PRIVATE_AI_CHANNEL_AUTH=PASS');
    console.log('PRIVATE_AI_BUNDLE_TAMPER_DETECTION=PASS');
    console.log('PRIVATE_AI_CURRENT_SHA_AND_EXISTENCE=PASS');
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
