'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const gatewayRoot = path.resolve(__dirname, '..');
const calcRoot = path.resolve(gatewayRoot, '..');

const allowlistPath = path.join(gatewayRoot, 'data', 'free400_allowlist.v1.json');
const policyPath = path.join(gatewayRoot, 'data', 'free400_policy.v1.json');
const catalogPath = path.join(calcRoot, 'data', 'drugs_index.json');

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
assert(ids.length === 400, `allowlist count expected 400, got ${ids.length}`);
assert(new Set(ids).size === 400, 'allowlist ids must be unique');
assert(catalogIds.size === 1018, `catalog count expected 1018, got ${catalogIds.size}`);

const sorted = [...ids].sort();
assert(JSON.stringify(ids) === JSON.stringify(sorted), 'allowlist ids must be sorted');

const idsText = `${ids.join('\n')}\n`;
const sha = crypto.createHash('sha256').update(idsText, 'utf8').digest('hex');
const expectedSha = 'def935ca0786a3f68e0c18c4ab0f0ded9049bfdc317287ae83a1160313296232';

assert(sha === expectedSha, `ids SHA mismatch: ${sha}`);
assert(allowlist.idsSha256 === expectedSha, 'allowlist metadata SHA mismatch');
assert(allowlist.catalogCount === 1018, 'catalogCount metadata mismatch');
assert(allowlist.freeCount === 400, 'freeCount metadata mismatch');
assert(allowlist.premiumOnlyCount === 618, 'premiumOnlyCount metadata mismatch');
assert(allowlist.indexHtmlCurationAuthority === false, 'index.html must not be curation authority');

for (const id of ids) {
  assert(catalogIds.has(id), `allowlist ID missing from catalog: ${id}`);
}

const premiumOnly = [...catalogIds].filter((id) => !new Set(ids).has(id));
assert(premiumOnly.length === 618, `premium-only count expected 618, got ${premiumOnly.length}`);

assert(policy.policyId === 'free400-concept-bucket-uniqueness-v1', 'policy id mismatch');
assert(policy.status === 'approved', 'policy must be approved');
assert(policy.principles?.preserveConceptBucketUniqueness === true, 'concept bucket uniqueness must be preserved');
assert(policy.principles?.exactFamilyQuotasSecondary === true, 'exact family quotas must be secondary');
assert(policy.principles?.acceptedFamilyVariance === 1, 'accepted family variance must be ±1');
assert(policy.principles?.initialFree400ContextVariantExceptionGranted === false, 'context-variant exception must be false');
assert(policy.allowlistIdsSha256 === expectedSha, 'policy SHA mismatch');

const variance = policy.acceptedInitialVariance || [];
assert(variance.length === 2, 'expected exactly two accepted variance rows');
const byFamily = Object.fromEntries(variance.map((row) => [row.family, row]));
assert(byFamily.obesidade?.quota === 2 && byFamily.obesidade?.selected === 1 && byFamily.obesidade?.delta === -1, 'obesidade variance mismatch');
assert(byFamily.antidepressivo?.quota === 13 && byFamily.antidepressivo?.selected === 14 && byFamily.antidepressivo?.delta === 1, 'antidepressivo variance mismatch');

console.log('FREE400_ALLOWLIST_V1_TEST=PASS');
console.log(`FREE400_IDS_SHA256=${sha}`);
console.log(`CATALOG_COUNT=${catalogIds.size}`);
console.log(`FREE_COUNT=${ids.length}`);
console.log(`PREMIUM_ONLY_COUNT=${premiumOnly.length}`);
console.log('CONCEPT_BUCKET_POLICY=PASS');
