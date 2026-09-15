'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const gatewayRoot = path.resolve(__dirname, '..');
const calcRoot = path.resolve(gatewayRoot, '..');
const rootIndex = path.join(calcRoot, 'index.html');
const publicIndex = path.join(calcRoot, 'public', 'index.html');
const sourceAllowlist = path.join(gatewayRoot, 'data', 'free60_allowlist.v2.json');
const rootManifest = path.join(calcRoot, 'data', 'drug_access_free60.v2.json');
const publicManifest = path.join(calcRoot, 'public', 'data', 'drug_access_free60.v2.json');
const markerStart = '<!-- MEDCASES_PREMIUM_R8_2_FREE60_LOCK_NATIVE_PAYWALL_V1_B_R0:start -->';
const markerEnd = '<!-- MEDCASES_PREMIUM_R8_2_FREE60_LOCK_NATIVE_PAYWALL_V1_B_R0:end -->';
const expectedSha = '481e329baf9496ab43b41772e9ec4b0958bbb6326b49be4c7cd5bd11ac30fde0';

function fail(msg) {
  console.error('FAIL: ' + msg);
  process.exit(1);
}
function assert(cond, msg) { if (!cond) fail(msg); }
function shaFile(p) {
  return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
}

const index = fs.readFileSync(rootIndex, 'utf8');
const source = JSON.parse(fs.readFileSync(sourceAllowlist, 'utf8'));
const manifest = JSON.parse(fs.readFileSync(rootManifest, 'utf8'));
const publicManifestJson = JSON.parse(fs.readFileSync(publicManifest, 'utf8'));

assert(index.split(markerStart).length - 1 === 1, 'R8.2 start marker count');
assert(index.split(markerEnd).length - 1 === 1, 'R8.2 end marker count');
assert(shaFile(rootIndex) === shaFile(publicIndex), 'root/public index parity');
assert(shaFile(rootManifest) === shaFile(publicManifest), 'root/public manifest parity');

const ids = source.ids;
assert(Array.isArray(ids) && ids.length === 60, 'source Free60 count');
assert(new Set(ids).size === 60, 'source Free60 uniqueness');
const idsSha = crypto.createHash('sha256').update(ids.join('\n') + '\n', 'utf8').digest('hex');
assert(idsSha === expectedSha, 'source ids SHA');

assert(manifest.schema === 'medcases.drug-access.free60.v2', 'manifest schema');
assert(manifest.freeCount === 60, 'manifest freeCount');
assert(manifest.premiumOnlyCount === 778, 'manifest premiumOnlyCount');
assert(manifest.defaultAccess === 'premium', 'manifest default premium');
assert(manifest.idsSha256 === expectedSha, 'manifest SHA');
assert(JSON.stringify(manifest.freeIds) === JSON.stringify(ids), 'manifest/source ids parity');
assert(JSON.stringify(publicManifestJson) === JSON.stringify(manifest), 'public manifest JSON parity');

const start = index.indexOf(markerStart);
const end = index.indexOf(markerEnd, start);
assert(start >= 0 && end > start, 'R8.2 block boundaries');
const block = index.slice(start, end + markerEnd.length);

[
  '.hm-drug-item[data-drug-id]',
  '.mc-fnav-drug-row[data-drug-id]',
  '.mc-pharm-drug-row[data-drug-id]',
  '[data-mc-farm-canonical-drug]'
].forEach((selector) => assert(block.includes(selector), 'missing lock selector: ' + selector));

['pointerdown', 'touchstart', 'mousedown', 'click', 'keydown'].forEach((event) =>
  assert(block.includes("'" + event + "'"), 'missing capture event: ' + event)
);

assert(block.includes('stopImmediatePropagation'), 'capture stopImmediatePropagation missing');
assert(block.includes('window.hmOpenDrug = guardedHmOpenDrug'), 'hmOpenDrug guard missing');
assert(block.includes('window.MCUpgrade.postMessage(lang)'), 'native paywall bridge missing');
assert(block.includes("window.addEventListener('medcases:mcc1-ready'"), 'MCC1-ready tier refresh missing');
assert(block.includes("defaultAccess: 'premium'"), 'frontend default premium contract missing');
assert(block.includes('/data/drug_access_free60.v2.json?ids='), 'manifest fetch missing');
assert(!block.includes('/api/drugs/'), 'lock owner must not fetch clinical API');
assert(!block.includes("fetch('data/drugs/"), 'lock owner must not fetch clinical JSON');
assert(block.includes('fa-solid fa-lock'), 'lock icon contract missing');

console.log('R8_2_FREE60_LOCK_PAYWALL_TEST=PASS');
console.log('FREE60_MANIFEST_COUNT=60');
console.log('PREMIUM_LOCKED_COUNT_CONTRACT=778');
console.log('DEFAULT_NEW_DRUG_ACCESS=PREMIUM');
console.log('LOCK_SURFACE_FAMILIES=4');
console.log('PREMIUM_CAPTURE_EVENTS=5');
console.log('ZERO_CLINICAL_FETCH_IN_LOCK_OWNER=PASS');
console.log('NATIVE_PAYWALL_BRIDGE_CONTRACT=PASS');
