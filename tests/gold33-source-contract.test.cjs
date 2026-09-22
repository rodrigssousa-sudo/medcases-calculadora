'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), os = require('node:os');
const contract = require('../scripts/gold33-source-contract.cjs');
const root = path.resolve(__dirname, '..');
function gold(id) { const d = JSON.parse(fs.readFileSync(path.join(root, 'data/drugs', id + '.json'))); return { meta: { ...d.mc_gold_standard_v1 }, pt: d.pt, es: d.es }; }
function fixture(t) {
 const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gold33-proof-'));
 t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
 for (const name of ['config','generated/gold33-nova-lista/packages','docs/clinical-updates/gold33-evidence']) fs.cpSync(path.join(root,name),path.join(dir,name),{recursive:true});
 return dir;
}
test('A approved exact empty passes with complete immutable proof', () => {
 const g = gold('insulina_regular'), before = JSON.stringify(g);
 const states = contract.createFieldValidator(root).validate('insulina_regular',g);
 assert.equal(states.find(x=>x.fieldPath==='pt.guidelineRecommendations').state,'APPROVED_EMPTY');
 assert.equal(JSON.stringify(g),before);
});
test('B empty without review evidence fails', () => {
 const g=gold('abacavir'); g.pt.commercialNames=''; // Explicit unreviewed-empty fixture, independent of catalog completion.
 assert.throws(()=>contract.createFieldValidator(root).validate('abacavir',g),/MISSING_UNREVIEWED/);
});
test('C changed approved hash fails', () => {
 const g=gold('insulina_regular');g.meta.approvedSha256='0'.repeat(64);
 assert.throws(()=>contract.createFieldValidator(root).validate('insulina_regular',g),/CURRENT_PAYLOAD/);
});
test('D reviewer without artifact fails', t => {
 const dir=fixture(t),file=path.join(dir,'config/gold33-approved-empty.json'),r=JSON.parse(fs.readFileSync(file));
 delete r.records.find(x=>x.canonicalDrugId==='insulina_regular').reviewArtifact;
 fs.writeFileSync(file,JSON.stringify(r));
 assert.throws(()=>contract.createFieldValidator(dir).validate('insulina_regular',gold('insulina_regular')),/PROVENANCE_INVALID/);
});
test('E superseded artifact never fills current empty', () => {
 const g=gold('fenoterol_gotas'),before=JSON.stringify(g);
 const result=contract.createFieldValidator(root).validate('fenoterol_gotas',g);
 assert.ok(result.some(x=>x.state==='APPROVED_EMPTY'));assert.equal(JSON.stringify(g),before);
 g.meta.lote='088';assert.throws(()=>contract.createFieldValidator(root).validate('fenoterol_gotas',g),/CURRENT_PAYLOAD/);
});
function ownerFixture() {
 const g=gold('insulina_regular'),d=JSON.parse(fs.readFileSync(path.join(root,'data/drugs/insulina_regular.json')));
 return { g,d,e:{safeId:d.id,moduleMeta:{file:'gold33_nova_lista.js'},drug:{id:d.id,mcGoldClinicalV1:g}} };
}
test('F unique declared current owner selected',()=>{
 const {e,d,g}=ownerFixture();const r=contract.resolveSourceGold(e,d);assert.equal(r.audit.result,'RESOLVED_EXACT_OWNER');assert.equal(r.gold,g);
});
test('G divergent candidates claiming same current owner/hash fail',()=>{
 const {e,d,g}=ownerFixture();e.drug.other={mcGoldClinicalV1:structuredClone(g)};e.drug.other.mcGoldClinicalV1.pt.name='SYNTHETIC DIVERGENCE';
 assert.equal(contract.resolveSourceGold(e,d).audit.result,'STRUCTURAL_CONFLICT_REVIEW_REQUIRED');
});
test('H explicit current hash wins over historical candidate without merging',()=>{
 const {e,d,g}=ownerFixture();e.drug.history={mcGoldClinicalV1:structuredClone(g)};e.drug.history.mcGoldClinicalV1.meta.approvedSha256='historical';e.drug.history.mcGoldClinicalV1.meta.lote='old';
 const r=contract.resolveSourceGold(e,d);assert.equal(r.gold,g);assert.equal(r.gold.pt.guidelineRecommendations,'');
});
test('I approved empty never grants operational authority',()=>{
 const g=gold('insulina_regular');contract.createFieldValidator(root).validate('insulina_regular',g);
 assert.equal(g.meta.calculationAuthorized,false);for(const k of ['doseAuthority','infusionAuthority','pediatricAuthority'])assert.equal(g.meta[k],undefined);
});
test('J approved empty is not N/A',()=>{
 const g=gold('insulina_regular'),result=contract.createFieldValidator(root).validate('insulina_regular',g);
 assert.equal(g.pt.guidelineRecommendations,'');assert.equal(result.some(x=>x.state==='NOT_APPLICABLE_EXPLICIT'),false);
});
test('changed clinical value with unchanged approved hash fails',()=>{
 const g=gold('insulina_regular');g.pt.name='TAMPERED';assert.throws(()=>contract.createFieldValidator(root).validate('insulina_regular',g),/CLINICAL_PAYLOAD_MISMATCH/);
});
test('changed package bytes fail cryptographic proof',t=>{
 const dir=fixture(t),r=JSON.parse(fs.readFileSync(path.join(dir,'config/gold33-approved-empty.json'))).records.find(x=>x.canonicalDrugId==='insulina_regular');
 fs.appendFileSync(path.join(dir,r.packagePath),'tamper');assert.throws(()=>contract.createFieldValidator(dir).validate('insulina_regular',gold('insulina_regular')),/PACKAGE_HASH/);
});
test('preseed other drug never competes with exact current owner',()=>{
 const {e,d,g}=ownerFixture();e.moduleMeta.preseed={other:{mcGoldClinicalV1:{pt:{name:'other'}}}};
 assert.equal(contract.resolveSourceGold(e,d).gold,g);
});
test('recovered ketamina proof preserves PT and approved ES empty',()=>{
 const g=gold('ketamina'),before=JSON.stringify(g);const result=contract.createFieldValidator(root).validate('ketamina',g);
 assert.equal(result.find(x=>x.fieldPath==='es.pediatricDose').state,'APPROVED_EMPTY');assert.equal(JSON.stringify(g),before);
});
