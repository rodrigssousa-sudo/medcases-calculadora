'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { encode } = require('./clinical-tier-contract.cjs');
const FIELDS = Object.freeze('name class pharmacologicClass mechanism pharmacodynamics pharmacokinetics indications commercialNames presentation presentations dose pediatricDose renalDose hepaticDose commonAdverseEffects dangerousAdverseEffects adverseEffects contraindications interactions monitoring administration preparation infusionProtocol pregnancy lactation specialPopulations patientEducation clinicalPearls guidelineRecommendations safetyFlags alerts references ref'.split(' '));
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const meaningful = value => value !== null && value !== undefined &&
  (typeof value === 'string' ? value.trim().length > 0 :
    Array.isArray(value) ? value.length > 0 : typeof value === 'object' ? Object.keys(value).length > 0 : true);
const fail = detail => { throw new Error('GOLD_EXPORT_SOURCE_ABORT: ' + detail); };
const FIELD_STATE = Object.freeze({ VALUE_PRESENT: 'VALUE_PRESENT', APPROVED_EMPTY: 'APPROVED_EMPTY', MISSING_UNREVIEWED: 'MISSING_UNREVIEWED', NOT_APPLICABLE_EXPLICIT: 'NOT_APPLICABLE_EXPLICIT', INVALID: 'INVALID' });

// This registry is evidence metadata, never a second clinical content source.
// Package bytes are pinned by the existing release contract. Nothing is fetched.
function createFieldValidator(root) {
  const registry = JSON.parse(fs.readFileSync(path.join(root, 'config/gold33-approved-empty.json')));
  const release = JSON.parse(fs.readFileSync(path.join(root, 'config/gold33-nova-lista-084-106.json')));
  if (registry.schema !== 'medcases.gold33.approved-empty.v1') fail('APPROVED_EMPTY_REGISTRY_SCHEMA');
  const records = new Map();
  for (const record of registry.records) {
    if (records.has(record.canonicalDrugId)) fail('APPROVED_EMPTY_DUPLICATE_ID');
    records.set(record.canonicalDrugId, record);
  }
  // Cache only immutable bytes verified within this synchronous export process.
  const packages = new Map();
  function proof(id, gold) {
    const r = records.get(id);
    if (!r) return null;
    if (!r.reviewer || !r.reviewDate || r.reviewResult !== 'APPROVED_IN_FULL' ||
        !r.reviewArtifact || !r.reviewArtifactHash || !r.reviewRecord || !r.reviewRecordHash ||
        !r.approvedPayloadHash || !r.owner) fail('APPROVED_EMPTY_PROVENANCE_INVALID:' + id);
    const file = path.resolve(root, r.packagePath);
    if (!file.startsWith(path.resolve(root) + path.sep) || fs.lstatSync(file).isSymbolicLink()) fail('APPROVED_EMPTY_ARTIFACT_PATH');
    const spec = [...release.lots, ...(registry.recoveredArtifacts || [])].find(x => x.file === path.basename(file) && x.lot === r.sourceVersion);
    if (!spec || spec.sha256 !== r.packageHash) fail('APPROVED_EMPTY_RELEASE_HASH:' + id);
    let pkg = packages.get(file);
    if (!pkg) {
      if (sha(fs.readFileSync(file)) !== r.packageHash) fail('APPROVED_EMPTY_PACKAGE_HASH:' + id);
      const member = name => {
        if (typeof name !== 'string' || !/^[A-Za-z0-9_.-]+$/.test(name)) fail('APPROVED_EMPTY_MEMBER_PATH');
        return execFileSync('unzip', ['-p', file, name], { maxBuffer: 32 * 1024 * 1024 });
      };
      const payload = member(r.payloadMember), artifact = member(r.reviewArtifact), review = member(r.reviewRecord);
      if (sha(payload) !== r.approvedPayloadHash || sha(artifact) !== r.reviewArtifactHash ||
          sha(review) !== r.reviewRecordHash || !artifact.subarray(0, 5).equals(Buffer.from('%PDF-'))) fail('APPROVED_EMPTY_ARTIFACT_HASH:' + id);
      pkg = { payloadHash: sha(payload), artifactHash: sha(artifact), reviewHash: sha(review), rows: JSON.parse(payload), review: review.toString('utf8'), members: [r.payloadMember, r.reviewArtifact, r.reviewRecord] };
      packages.set(file, pkg);
    }
    if (pkg.payloadHash !== r.approvedPayloadHash || pkg.artifactHash !== r.reviewArtifactHash ||
        pkg.reviewHash !== r.reviewRecordHash || encode(pkg.members) !== encode([r.payloadMember, r.reviewArtifact, r.reviewRecord])) fail('APPROVED_EMPTY_PROOF_MISMATCH:' + id);
    const text = pkg.review.replaceAll('*', '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (!text.includes(r.reviewer.normalize('NFD').replace(/[\u0300-\u036f]/g, '')) || !text.includes(r.reviewDate) || !/aprovado integralmente/i.test(text)) fail('APPROVED_EMPTY_REVIEW_IDENTITY:' + id);
    const rows = Array.isArray(pkg.rows) ? pkg.rows.filter(row => row.ID === id) : [];
    if (rows.length !== 1 || gold.meta?.approvedSha256 !== r.approvedPayloadHash || gold.meta?.lote !== r.sourceVersion) fail('APPROVED_EMPTY_CURRENT_PAYLOAD:' + id);
    const approved = rows[0].CAMPOS_33;
    if (!approved || Object.keys(approved).length !== FIELDS.length) fail('APPROVED_EMPTY_FIELD_SCHEMA:' + id);
    for (const lang of ['pt', 'es']) for (const field of FIELDS) {
      const expected = field === 'references' ? approved[field] : approved[field]?.[lang];
      if (!Object.hasOwn(gold[lang] || {}, field) || encode(gold[lang][field]) !== encode(expected)) fail('APPROVED_EMPTY_CLINICAL_PAYLOAD_MISMATCH:' + id + '/' + lang + '/' + field);
    }
    return r;
  }
  function states(id, gold) {
    const results = [], hasEmpty = ['pt', 'es'].some(lang => FIELDS.some(field => !meaningful(gold?.[lang]?.[field])));
    const r = hasEmpty ? proof(id, gold) : null;
    for (const language of ['pt', 'es']) for (const field of FIELDS) {
      const locale = gold?.[language], fieldPath = language + '.' + field;
      const present = locale && typeof locale === 'object' && !Array.isArray(locale) && Object.hasOwn(locale, field);
      const value = present ? locale[field] : undefined;
      let state = present && meaningful(value) ? FIELD_STATE.VALUE_PRESENT : FIELD_STATE.MISSING_UNREVIEWED;
      if (present && value !== '' && !meaningful(value)) state = FIELD_STATE.INVALID;
      if (present && value === '' && r?.fields.some(x => x.fieldPath === fieldPath && x.language === language && x.state === FIELD_STATE.APPROVED_EMPTY)) state = FIELD_STATE.APPROVED_EMPTY;
      results.push({ canonicalDrugId: id, fieldPath, language, state });
    }
    return results;
  }
  function validate(id, gold) {
    const result = states(id, gold), blocked = result.filter(x => ![FIELD_STATE.VALUE_PRESENT, FIELD_STATE.APPROVED_EMPTY].includes(x.state));
    if (blocked.length) fail(id + '/' + blocked[0].fieldPath + ':' + blocked[0].state);
    return result;
  }
  return { states, validate };
}

// Context variants remain separate. Never search module preseed registries for
// another drug's Gold block. Published provenance identifies the current owner;
// preflight's canonical collision policy must agree with that owner.
function resolveSourceGold(entry, existing) {
  const id = entry.safeId, candidates = [], seen = new Set();
  function walk(value, location, owner, depth = 0) {
    if (!value || typeof value !== 'object' || depth > 10 || seen.has(value)) return;
    seen.add(value);
    if (Object.hasOwn(value, 'mcGoldClinicalV1')) {
      const gold = value.mcGoldClinicalV1;
      if (!gold || typeof gold !== 'object' || Array.isArray(gold)) fail('INVALID_GOLD_BLOCK:' + id);
      candidates.push({ gold, path: location + '.mcGoldClinicalV1', owner, contentHash: sha(encode(gold)), approvedHash: gold.meta?.approvedSha256 || null, version: gold.meta?.lote || null });
    }
    for (const key of Object.keys(value)) if (key !== 'mcGoldClinicalV1') walk(value[key], location + '.' + key, owner, depth + 1);
  }
  walk(entry.drug, 'preparedEntry.drug', 'database/' + entry.moduleMeta.file);
  for (const [i, variant] of (entry.collision?.variants || []).entries()) walk(variant.drug, 'preparedEntry.collision.variants.' + i + '.drug', 'database/' + variant.moduleMeta.file);
  const meta = existing?.mc_gold_standard_v1;
  const audit = { drugId: id, candidateCount: candidates.length, candidates: candidates.map(({ gold, ...c }) => ({ ...c, canonicalDrugId: id, reviewStatus: gold.meta?.approvedSha256 ? 'HASH_CLAIM_NOT_NEW_REVIEW' : 'UNPROVEN', publicationState: gold.meta?.clinicalPackagePublicationState || null })), selectedOwner: null, selectionReason: null, result: 'NO_AUTHORITATIVE_OWNER' };
  if (!candidates.length) return { gold: null, audit };
  const canonicalOwner = 'database/' + entry.moduleMeta.file;
  if (existing?.id !== id || (entry.collision && 'database/' + entry.collision.canonicalOwner !== canonicalOwner)) return { gold: null, audit };
  // Gold text ownership can explicitly belong to a preserved context variant;
  // this does not change the canonical calculation/collision owner.
  const owner = meta?.sourceOwner || canonicalOwner;
  let current;
  if (meta) {
    if (meta.sourceField !== id + '.mcGoldClinicalV1' || !meta.approvedSha256) return { gold: null, audit };
    current = candidates.filter(c => c.owner === owner && c.approvedHash === meta.approvedSha256 && c.version === meta.lote);
  } else {
    // Legacy complete Gold has no approval claim. Exact canonical source and
    // published payload parity can establish structural ownership only.
    current = candidates.length === 1 && candidates[0].owner === canonicalOwner && candidates[0].path.startsWith('preparedEntry.drug.') ? candidates : [];
  }
  const distinct = new Map(current.map(c => [c.contentHash, c]));
  if (distinct.size > 1) return { gold: null, audit: { ...audit, result: 'STRUCTURAL_CONFLICT_REVIEW_REQUIRED' } };
  const selected = [...distinct.values()][0];
  if (!selected) return { gold: null, audit };
  for (const lang of ['pt', 'es']) for (const field of FIELDS) {
    if (encode(selected.gold[lang]?.[field]) !== encode(existing[lang]?.[field])) return { gold: null, audit: { ...audit, result: 'STRUCTURAL_CONFLICT_REVIEW_REQUIRED' } };
  }
  return { gold: selected.gold, audit: { ...audit, selectedOwner: owner, selectionReason: 'Exact declared sourceOwner/sourceField, current approved hash/version, canonical collision owner and 33-field payload parity. No new clinical authority.', result: 'RESOLVED_EXACT_OWNER' } };
}
module.exports = { FIELD_STATE, FIELDS, meaningful, createFieldValidator, resolveSourceGold };
