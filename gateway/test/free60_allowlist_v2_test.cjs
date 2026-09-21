'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const gatewayRoot = path.resolve(__dirname, '..');
const calcRoot = path.resolve(gatewayRoot, '..');
const allowlistPath = path.join(gatewayRoot, 'data', 'free60_allowlist.v2.json');
const policyPath = path.join(gatewayRoot, 'data', 'free60_policy.v2.json');
const catalogPath = path.join(calcRoot, 'data', 'drugs_index.json');
const canonicalDrugDir = path.join(calcRoot, 'data', 'drugs');
const publicDrugDir = path.join(calcRoot, 'public', 'data', 'drugs');

const allowlist = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const policy = JSON.parse(fs.readFileSync(policyPath, 'utf8'));
const rawCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const rows = Array.isArray(rawCatalog)
  ? rawCatalog
  : (Array.isArray(rawCatalog.drugs) ? rawCatalog.drugs
    : (Array.isArray(rawCatalog.items) ? rawCatalog.items
      : (Array.isArray(rawCatalog.data) ? rawCatalog.data : [])));

const catalogIds = new Set(
  rows.map((item) => String(
    item?.id ?? item?.slug ?? item?.drugId ?? item?.drug_id ?? item?.key ?? ''
  ).trim()).filter(Boolean)
);

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

const ids = allowlist.ids;
assert(Array.isArray(ids), 'allowlist ids must be array');
assert(ids.length === 60, `allowlist count expected 60, got ${ids.length}`);
assert(new Set(ids).size === 60, 'allowlist ids must be unique');
assert(catalogIds.size === 1018, `catalog count expected 1018, got ${catalogIds.size}`);

const sorted = [...ids].sort();
assert(JSON.stringify(ids) === JSON.stringify(sorted), 'allowlist ids must be sorted');

const idsText = `${ids.join('\n')}\n`;
const sha = crypto.createHash('sha256').update(idsText, 'utf8').digest('hex');
assert(allowlist.idsSha256 === sha, 'allowlist metadata SHA mismatch');
assert(policy.allowlistIdsSha256 === sha, 'policy SHA mismatch');

assert(allowlist.schema === 'medcases.free60.allowlist.v2', 'allowlist schema mismatch');
assert(allowlist.version === 'free60-2026-09-15-v2', 'allowlist version mismatch');
assert(allowlist.status === 'frozen', 'allowlist must be frozen');
assert(allowlist.catalogCount === catalogIds.size, 'catalogCount metadata mismatch');
assert(allowlist.freeCount === 60, 'freeCount metadata mismatch');
assert(allowlist.premiumOnlyCount === catalogIds.size - 60, 'premiumOnlyCount metadata mismatch');
assert(allowlist.indexHtmlCurationAuthority === false, 'index.html must not be curation authority');
assert(allowlist.defaultAccessForUnlistedDrug === 'premium', 'unlisted drugs must default to premium');

assert(policy.policyId === 'free60-zero-antimicrobial-default-premium-v2', 'policy id mismatch');
assert(policy.status === 'approved', 'policy must be approved');
assert(policy.principles?.explicitFreeAllowlistOnly === true, 'explicit allowlist principle missing');
assert(policy.principles?.defaultPremiumForUnlistedAndNewDrugs === true, 'default Premium principle missing');
assert(policy.principles?.freeCountFixed === 60, 'fixed Free count mismatch');
assert(policy.principles?.zeroAntimicrobialsInFree === true, 'zero antimicrobial principle missing');
assert(policy.principles?.gatewayRemainsFinalAuthorizationAuthority === true, 'gateway authority principle missing');

for (const id of ids) {
  assert(catalogIds.has(id), `allowlist ID missing from catalog: ${id}`);
  assert(fs.existsSync(path.join(canonicalDrugDir, `${id}.json`)), `canonical drug JSON missing: ${id}`);
  assert(fs.existsSync(path.join(publicDrugDir, `${id}.json`)), `public Free drug JSON missing: ${id}`);
}

const forbiddenCategories = new Set(
  (policy.forbiddenFreeCategories || []).map((x) => String(x).trim().toLowerCase())
);
const forbiddenTerms = (policy.forbiddenAntimicrobialClassTerms || [])
  .map((x) => String(x).trim().toLowerCase())
  .filter(Boolean);

const violations = [];
for (const id of ids) {
  const drug = JSON.parse(fs.readFileSync(path.join(canonicalDrugDir, `${id}.json`), 'utf8'));
  const pt = drug.pt || {};
  const es = drug.es || {};
  const category = String(drug.category || '').trim().toLowerCase();
  const signal = [
    id,
    category,
    pt.name || '',
    pt.class || '',
    es.name || '',
    es.class || '',
  ].join(' ').toLowerCase();

  if (forbiddenCategories.has(category)) {
    violations.push(`${id}:forbidden-category:${category}`);
    continue;
  }

  // A clinical class may explicitly state that a sulfonamide is *not*
  // antibacterial.  Negated occurrences are not positive antimicrobial
  // classification signals.
  const term = forbiddenTerms.find((x) => {
    const positiveSignal = signal
      .replace(/sulfonamid\S*\s+(?:não|nao|no)\s+antibacter\S*/g, '')
      .replaceAll(`não ${x}`, '')
      .replaceAll(`nao ${x}`, '')
      .replaceAll(`no ${x}`, '');
    return positiveSignal.includes(x);
  });
  if (term) violations.push(`${id}:forbidden-term:${term}`);
}
assert(violations.length === 0, `Free antimicrobial violations: ${violations.join(', ')}`);

const premiumOnly = [...catalogIds].filter((id) => !new Set(ids).has(id));
assert(premiumOnly.length === 958, `premium-only count expected 958, got ${premiumOnly.length}`);

console.log('FREE60_ALLOWLIST_V2_TEST=PASS');
console.log(`FREE60_IDS_SHA256=${sha}`);
console.log(`CATALOG_COUNT=${catalogIds.size}`);
console.log(`FREE_COUNT=${ids.length}`);
console.log(`PREMIUM_ONLY_COUNT=${premiumOnly.length}`);
console.log('FREE60_ZERO_ANTIMICROBIAL_GATE=PASS');
console.log('DEFAULT_NEW_DRUG_ACCESS=PREMIUM');
