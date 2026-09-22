'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

// Objects are order-independent; array order and every clinical field are kept.
function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]));
  }
  return value;
}
const encode = value => JSON.stringify(canonical(value));
const hash = value => crypto.createHash('sha256')
  .update(typeof value === 'string' ? value : encode(value)).digest('hex');
const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const fail = code => { throw new Error('CLINICAL_TIER_' + code); };

function policy(root) {
  return validatePolicy(read(path.join(root, 'gateway/data/free60_allowlist.v2.json')));
}

function validatePolicy(value) {
  if (!value || value.schema !== 'medcases.free60.allowlist.v2' ||
      value.defaultAccessForUnlistedDrug !== 'premium' ||
      !Array.isArray(value.ids) || value.freeCount !== value.ids.length ||
      !value.ids.length || value.ids.some(id => typeof id !== 'string' || !/^[a-z0-9_]+$/.test(id)) ||
      new Set(value.ids).size !== value.ids.length ||
      hash(value.ids.join('\n') + '\n') !== value.idsSha256) fail('POLICY_INVALID');
  return value;
}

function inspect(dir, overrides = new Map()) {
  const load = relative => {
    const file = path.join(dir, relative);
    return overrides.has(file) ? JSON.parse(overrides.get(file).toString()) : read(file);
  };
  const entries = fs.readdirSync(path.join(dir, 'drugs'), { withFileTypes: true });
  if (entries.some(entry => !entry.isFile() || !entry.name.endsWith('.json'))) fail('DOCUMENT_ENTRY_INVALID');
  const ids = entries.map(entry => entry.name.slice(0, -5)).sort();
  if (ids.some(id => !/^[a-z0-9_]+$/.test(id)) || new Set(ids).size !== ids.length) fail('IDS_INVALID');
  const docs = Object.fromEntries(ids.map(id => {
    const doc = load('drugs/' + id + '.json');
    if (!doc || doc.id !== id) fail('IDENTITY_MISMATCH:' + id);
    return [id, doc];
  }));
  const index = load('drugs_index.json');
  const manifest = load('manifest.json');
  if (!Array.isArray(index) || index.some(row => !row || typeof row.id !== 'string') ||
      new Set(index.map(row => row.id)).size !== index.length ||
      encode(index.map(row => row.id).sort()) !== encode(ids)) fail('INDEX_DOCUMENT_SET_MISMATCH');
  return { ids, docs, index, manifest };
}

// contentSha256 retains source provenance. tierIntegrity hashes the actual
// projected snapshot, including its IDs, index, documents and technical envelope.
function makeManifest(dir, tier, p, overrides = new Map()) {
  validatePolicy(p);
  const state = inspect(dir, overrides);
  if (tier !== 'private-full' && tier !== 'public-free') fail('TIER_INVALID');
  if (tier === 'public-free' && encode(state.ids) !== encode([...p.ids].sort())) fail('FREE_SET_MISMATCH');
  const manifest = { ...state.manifest, drugCount: state.ids.length };
  manifest.tierIntegrity = {
    schema: 'medcases.tier-integrity.v1', tier, ids: state.ids,
    indexSha256: hash(state.index), documentsSha256: hash(state.docs),
    allowlistSha256: p.idsSha256,
  };
  manifest.tierIntegrity.manifestSha256 = hash(manifest);
  return manifest;
}

function validateTier(dir, tier, p, overrides = new Map()) {
  const state = inspect(dir, overrides);
  const manifest = state.manifest;
  const integrity = manifest?.tierIntegrity;
  if (!integrity || integrity.schema !== 'medcases.tier-integrity.v1' ||
      integrity.tier !== tier || integrity.allowlistSha256 !== p.idsSha256) fail('MANIFEST_TIER_INVALID');
  if (manifest.drugCount !== state.ids.length || encode(integrity.ids) !== encode(state.ids)) fail('MANIFEST_COUNT_OR_IDS');
  if (integrity.indexSha256 !== hash(state.index) || integrity.documentsSha256 !== hash(state.docs)) fail('PAYLOAD_HASH_MISMATCH');
  const copy = structuredClone(manifest);
  delete copy.tierIntegrity.manifestSha256;
  if (integrity.manifestSha256 !== hash(copy)) fail('MANIFEST_HASH_MISMATCH');
  if (!/^[a-f0-9]{64}$/.test(manifest.contentSha256) ||
      manifest.version !== 'clinical-data-v1-' + manifest.contentSha256.slice(0, 16)) fail('VERSION_INVALID');
  for (const doc of Object.values(state.docs)) {
    if (doc.dataVersion !== manifest.version || doc.clinicalContentSha256 !== manifest.contentSha256) fail('DOCUMENT_VERSION_MISMATCH');
  }
  return state;
}

function assertClinicalOutputsConsistentByTier(privateDir, publicDir, p, overrides = new Map()) {
  validatePolicy(p);
  const full = validateTier(privateDir, 'private-full', p, overrides);
  const free = validateTier(publicDir, 'public-free', p, overrides);
  if (encode(free.ids) !== encode([...p.ids].sort())) fail('FREE_SET_MISMATCH');
  if (full.manifest.version !== free.manifest.version) fail('TIER_VERSION_MISMATCH');
  const privateIndex = new Map(full.index.map(row => [row.id, row]));
  for (const id of free.ids) {
    if (!full.docs[id]) fail('PUBLIC_NOT_PRIVATE:' + id);
    if (encode(full.docs[id]) !== encode(free.docs[id])) fail('SHARED_CLINICAL_MISMATCH:' + id);
  }
  for (const row of free.index) {
    if (encode(row) !== encode(privateIndex.get(row.id))) fail('SHARED_INDEX_MISMATCH:' + row.id);
  }
  return full.ids.length + free.ids.length + 4;
}

// Caller removes managed public staging entries first. Unmanaged siblings stay.
function projectPublic(privateDir, publicDir, p) {
  validatePolicy(p);
  const full = inspect(privateDir);
  for (const id of p.ids) if (!full.docs[id]) fail('FREE_NOT_PRIVATE:' + id);
  fs.mkdirSync(path.join(publicDir, 'drugs'), { recursive: true });
  for (const id of p.ids) {
    fs.copyFileSync(path.join(privateDir, 'drugs', id + '.json'), path.join(publicDir, 'drugs', id + '.json'));
  }
  const write = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
  write(path.join(publicDir, 'drugs_index.json'), full.index.filter(row => p.ids.includes(row.id)));
  write(path.join(publicDir, 'manifest.json'), full.manifest);
  write(path.join(privateDir, 'manifest.json'), makeManifest(privateDir, 'private-full', p));
  write(path.join(publicDir, 'manifest.json'), makeManifest(publicDir, 'public-free', p));
  return assertClinicalOutputsConsistentByTier(privateDir, publicDir, p);
}

// Existing writers include these technical manifests in their own transaction.
// Source-only workflows with neither published manifest have no snapshot yet.
function stageTierManifests(root, outputs) {
  const full = path.join(root, 'data'), free = path.join(root, 'public/data');
  const exists = [full, free].map(dir => fs.existsSync(path.join(dir, 'manifest.json')));
  if (!exists.some(Boolean)) return;
  if (!exists.every(Boolean)) fail('MANIFEST_PAIR_INCOMPLETE');
  const p = policy(root);
  assertClinicalOutputsConsistentByTier(full, free, p);
  for (const [dir, tier] of [[full, 'private-full'], [free, 'public-free']]) {
    outputs.set(path.join(dir, 'manifest.json'), Buffer.from(JSON.stringify(makeManifest(dir, tier, p, outputs), null, 2) + '\n'));
  }
  assertClinicalOutputsConsistentByTier(full, free, p, outputs);
}

module.exports = {
  policy, validatePolicy, inspect, makeManifest, validateTier,
  assertClinicalOutputsConsistentByTier, projectPublic, stageTierManifests, hash, encode,
};
