'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const tier = require('../scripts/clinical-tier-contract.cjs');
const root = path.resolve(__dirname, '..');
const policy = tier.policy(root);
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
function fixture(t) {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'tier-contract-'));
  t.after(() => fs.rmSync(temp, { recursive: true, force: true }));
  const a = path.join(temp, 'data'), b = path.join(temp, 'public/data');
  for (const [src, dst] of [[path.join(root, 'data'), a], [path.join(root, 'public/data'), b]]) {
    fs.mkdirSync(dst, { recursive: true });
    for (const name of ['drugs', 'drugs_index.json', 'manifest.json']) fs.cpSync(path.join(src, name), path.join(dst, name), { recursive: true });
  }
  const p = structuredClone(policy);
  const check = () => tier.assertClinicalOutputsConsistentByTier(a, b, p);
  const sign = (dir, kind) => write(path.join(dir, 'manifest.json'), tier.makeManifest(dir, kind, p));
  const add = (dir, id) => {
    const s = tier.inspect(dir);
    write(path.join(dir, 'drugs', id + '.json'), { id, dataVersion: s.manifest.version, clinicalContentSha256: s.manifest.contentSha256, fixtureOnly: true });
    write(path.join(dir, 'drugs_index.json'), [...s.index, { id, fixtureOnly: true }]);
  };
  return { a, b, p, check, sign, add, temp };
}
test('A: actual full catalog and exact declared public set', () => {
  assert.equal(tier.inspect(path.join(root, 'data')).ids.length, policy.catalogCount);
  assert.equal(tier.inspect(path.join(root, 'public/data')).ids.length, policy.freeCount);
  assert.ok(tier.assertClinicalOutputsConsistentByTier(path.join(root, 'data'), path.join(root, 'public/data'), policy));
});
test('B: missing Free document fails closed', t => {
  const f = fixture(t); fs.unlinkSync(path.join(f.b, 'drugs', policy.ids[0] + '.json'));
  assert.throws(f.check, /INDEX_DOCUMENT_SET_MISMATCH/);
});
test('C: Premium leak fails even with self-consistent public hashes', t => {
  const f = fixture(t), privateState = tier.inspect(f.a), publicState = tier.inspect(f.b);
  const id = privateState.ids.find(id => !policy.ids.includes(id));
  fs.copyFileSync(path.join(f.a, 'drugs', id + '.json'), path.join(f.b, 'drugs', id + '.json'));
  write(path.join(f.b, 'drugs_index.json'), [...publicState.index, privateState.index.find(x => x.id === id)]);
  // Deliberately construct an internally hashed, but unauthorized public tier.
  const m = tier.makeManifest(f.b, 'private-full', f.p); m.tierIntegrity.tier = 'public-free';
  delete m.tierIntegrity.manifestSha256; m.tierIntegrity.manifestSha256 = tier.hash(m);
  write(path.join(f.b, 'manifest.json'), m);
  assert.throws(f.check, /FREE_SET_MISMATCH/);
});
test('D: public ID missing from otherwise consistent private snapshot fails', t => {
  const f = fixture(t), id = policy.ids[0], s = tier.inspect(f.a);
  fs.unlinkSync(path.join(f.a, 'drugs', id + '.json'));
  write(path.join(f.a, 'drugs_index.json'), s.index.filter(x => x.id !== id));
  f.sign(f.a, 'private-full'); assert.throws(f.check, /PUBLIC_NOT_PRIVATE/);
});
test('E: shared clinical divergence rejected despite valid individual hashes', t => {
  const f = fixture(t), id = policy.ids[0], doc = tier.inspect(f.b).docs[id];
  doc.fixtureClinicalDivergence = true; write(path.join(f.b, 'drugs', id + '.json'), doc);
  f.sign(f.b, 'public-free'); assert.throws(f.check, /SHARED_CLINICAL_MISMATCH/);
});
for (const [label, key] of [['F', 'b'], ['G', 'a']]) test(label + ': incorrect manifest count rejected', t => {
  const f = fixture(t), m = tier.inspect(f[key]).manifest; m.drugCount++;
  write(path.join(f[key], 'manifest.json'), m); assert.throws(f.check, /MANIFEST_COUNT_OR_IDS/);
});
test('H: one new Premium item grows full catalog without growing public', t => {
  const f = fixture(t), before = tier.inspect(f.a).ids.length;
  f.add(f.a, 'synthetic_future_premium'); f.sign(f.a, 'private-full');
  assert.ok(f.check()); assert.equal(tier.inspect(f.a).ids.length, before + 1);
  assert.equal(tier.inspect(f.b).ids.length, policy.ids.length);
});
test('I: explicit future Free policy projects the newly declared item', t => {
  const f = fixture(t), id = 'synthetic_future_free'; f.add(f.a, id);
  f.p.ids.push(id); f.p.freeCount++; f.p.idsSha256 = tier.hash(f.p.ids.join('\n') + '\n');
  fs.rmSync(path.join(f.b, 'drugs'), { recursive: true });
  tier.projectPublic(f.a, f.b, f.p);
  assert.ok(f.check()); assert.ok(fs.existsSync(path.join(f.b, 'drugs', id + '.json')));
  assert.equal(tier.inspect(f.b).ids.length, policy.ids.length + 1);
});
test('payload hash tampering is rejected', t => {
  const f = fixture(t), id = policy.ids[0], doc = tier.inspect(f.b).docs[id]; doc.changed = true;
  write(path.join(f.b, 'drugs', id + '.json'), doc); assert.throws(f.check, /PAYLOAD_HASH_MISMATCH/);
});
test('manifest metadata tampering is rejected', t => {
  const f = fixture(t), m = tier.inspect(f.b).manifest; m.version = 'wrong';
  write(path.join(f.b, 'manifest.json'), m); assert.throws(f.check, /MANIFEST_HASH_MISMATCH/);
});
test('duplicate public index rejected', t => {
  const f = fixture(t), s = tier.inspect(f.b); write(path.join(f.b, 'drugs_index.json'), [...s.index, s.index[0]]);
  assert.throws(f.check, /INDEX_DOCUMENT_SET_MISMATCH/);
});
test('semantic comparison ignores JSON object key order only', t => {
  const f = fixture(t), id = policy.ids[0], doc = tier.inspect(f.b).docs[id];
  write(path.join(f.b, 'drugs', id + '.json'), Object.fromEntries(Object.entries(doc).reverse()));
  assert.ok(f.check());
});
test('invalid policy hash and inferred Free membership rejected', () => {
  assert.throws(() => tier.validatePolicy({ ...policy, ids: [...policy.ids, 'inferred'] }), /POLICY_INVALID/);
});
function recoveryFixture(t) {
  const f = fixture(t);
  fs.mkdirSync(path.join(f.temp, 'scripts'));
  for (const name of ['export-clinical-data.js', 'clinical-tier-contract.cjs', 'clinical-source-inventory.cjs', 'gold33-source-contract.cjs']) fs.copyFileSync(path.join(root, 'scripts', name), path.join(f.temp, 'scripts', name));
  fs.mkdirSync(path.join(f.temp, 'gateway/data'), { recursive: true });
  write(path.join(f.temp, 'gateway/data/free60_allowlist.v2.json'), policy);
  const exporter = require(path.join(f.temp, 'scripts/export-clinical-data.js'));
  return { ...f, exporter };
}
test('real recovery accepts deliberate 1018/60 outputs', t => {
  const f = recoveryFixture(t); f.exporter.recoverInterruptedPublication(); assert.ok(f.check());
});
test('real recovery rejects partial output with no journal', t => {
  const f = recoveryFixture(t); fs.unlinkSync(path.join(f.b, 'drugs', policy.ids[0] + '.json'));
  assert.throws(() => f.exporter.recoverInterruptedPublication(), /INDEX_DOCUMENT_SET_MISMATCH/);
});
test('real interrupted publication restores last valid pair', t => {
  const f = recoveryFixture(t), pid = process.pid;
  fs.cpSync(f.a, path.join(f.temp, '.clinical-data-backup-' + pid), { recursive: true });
  fs.cpSync(f.b, path.join(f.temp, '.clinical-public-data-backup-' + pid), { recursive: true });
  fs.unlinkSync(path.join(f.b, 'drugs', policy.ids[0] + '.json'));
  write(path.join(f.temp, '.clinical-data-publication.json'), { schema: 'clinical-dual-publication-v1', phase: 'public_published', pid, token: 'test', hadExistingData: true, hadExistingPublic: true });
  f.exporter.recoverInterruptedPublication(); assert.ok(f.check());
  assert.equal(fs.existsSync(path.join(f.temp, '.clinical-data-publication.json')), false);
});
test('real public staging preserves unmanaged siblings and excludes Premium', t => {
  const f = recoveryFixture(t), staging = path.join(f.temp, '.clinical-data-staging-' + process.pid);
  fs.cpSync(f.a, staging, { recursive: true });
  fs.writeFileSync(path.join(f.b, 'unmanaged-sentinel.txt'), 'preserve');
  f.exporter.preparePublicStagingOutput();
  const publicStage = path.join(f.temp, '.clinical-public-data-staging-' + process.pid);
  assert.equal(fs.readFileSync(path.join(publicStage, 'unmanaged-sentinel.txt'), 'utf8'), 'preserve');
  assert.ok(tier.assertClinicalOutputsConsistentByTier(staging, publicStage, policy));
});
test('recovery does not accept an invalid rollback snapshot', t => {
  const f = recoveryFixture(t), pid = process.pid;
  fs.unlinkSync(path.join(f.b, 'drugs', policy.ids[0] + '.json'));
  write(path.join(f.temp, '.clinical-data-publication.json'), { schema: 'clinical-dual-publication-v1', phase: 'publishing_data', pid, token: 'test', hadExistingData: true, hadExistingPublic: true });
  assert.throws(() => f.exporter.recoverInterruptedPublication(), /INDEX_DOCUMENT_SET_MISMATCH/);
  assert.ok(fs.existsSync(path.join(f.temp, '.clinical-data-publication.json')), 'retain recovery evidence');
});
test('transactional metadata refresh validates pending document versions', t => {
  const f = recoveryFixture(t), outputs = new Map(), contentHash = tier.hash('synthetic new source version');
  for (const dir of [f.a, f.b]) {
    const s = tier.inspect(dir), version = 'clinical-data-v1-' + contentHash.slice(0, 16);
    for (const [id, doc] of Object.entries(s.docs)) outputs.set(path.join(dir, 'drugs', id + '.json'), Buffer.from(JSON.stringify({ ...doc, dataVersion: version, clinicalContentSha256: contentHash })));
    outputs.set(path.join(dir, 'manifest.json'), Buffer.from(JSON.stringify({ ...s.manifest, version, contentSha256: contentHash })));
  }
  tier.stageTierManifests(f.temp, outputs);
  assert.ok(tier.assertClinicalOutputsConsistentByTier(f.a, f.b, policy, outputs));
  assert.ok(f.check(), 'on-disk source remains valid before transaction commit');
});
