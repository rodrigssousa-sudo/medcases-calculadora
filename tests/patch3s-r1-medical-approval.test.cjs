'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const code=fs.readFileSync(path.join(root,'database/infusoes.js'),'utf8');
const record=JSON.parse(fs.readFileSync(path.join(root,'docs/clinical-updates/patch3s-r1-medical-approval.json')));
function boot(){const c={window:{},document:{addEventListener(){}}};vm.createContext(c);vm.runInContext(code,c);return c;}
const c=boot(),gate=c.window.InfusionReviewSafety;
const fallback=JSON.parse(vm.runInContext('JSON.stringify(INFUSION_FALLBACK_DB)',c));
const presets=JSON.parse(vm.runInContext('JSON.stringify(BIC_PRESETS)',c));
function input(i,extra={}){const r=fallback[i],p=presets[r.nome][0];return {drug:r.nome,canonicalId:r.canonicalDrugId,canonicalDocument:r.canonicalDrugId?JSON.parse(fs.readFileSync(path.join(root,'data/drugs',r.canonicalDrugId+'.json'))):undefined,age:40,weight:70,adultConfirmed:false,dose:i===8?15:i===14?.1:i===5?.03:1,potassium:4,hours:.1,scopeConfirmed:true,indication:gate.indications[r.nome]?.[0]||'reviewed',nomogram:'explicit prescribed protocol',idealWeight:60,benefitConfirmed:false,amount:p.totalMg,volume:p.volMl,unit:p.unitDefault,amountUnit:p.amountUnit,preparationId:p.id,minutes:60,...extra};}
const blocked=new Set([4,6,12,13]);
for(let i=0;i<16;i++)test(`R1 ${record.bindings[i].presetId}: approval, identity, field provenance and independent operational gates`,()=>{
 const r=gate.evaluate(input(i)),b=r.medicalApproval;
 assert.equal(b.MEDICAL_REVIEW_STATUS,'APPROVED_IN_FULL');assert.equal(b.MEDICAL_REVIEWER,'Dra Eugenia Marques');assert.equal(b.MEDICAL_REVIEW_DATE,'2026-09-21');
 assert.equal(b.provenance.reviewArtifactSha256,'eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f');
 assert.equal(b.canonicalDrugId,record.bindings[i].canonicalDrugId);
 assert.equal(r.fieldCapabilities.preparationAuthorized.authorized,true);
 for(const k of ['routeAuthorized','formulationAuthorized','concentrationAuthorized','doseAuthorized','frequencyAuthorized','infusionRateAuthorized']){assert.equal(r.fieldCapabilities[k].status,'NOT_PROVIDED');assert.equal(r.fieldCapabilities[k].authorized,false);}
 assert.equal(r.calculationAuthorized,!blocked.has(i));assert.equal(r.infusionAuthority,!blocked.has(i)&&i!==15);assert.equal(r.pediatricAuthority,false);
 assert.equal(gate.evaluate(input(i,{age:12,adultConfirmed:true})).calculationAuthorized,false);
 assert.equal(r.authorityProvenance.operational.reviewArtifactSha256,'0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7');
 assert.ok(Object.isFrozen(b));assert.ok(Object.isFrozen(b.fieldCapabilities));assert.throws(()=>{b.fieldCapabilities.preparationAuthorized.authorized=false;},TypeError);
});
test('embedded approval equals immutable delivered record; no invented signature or time',()=>{
 assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(INFUSION_MEDICAL_APPROVAL_R1)',c)),record);
 assert.equal(record.approvedBindingCount,16);for(const key of ['crm','signature','reviewTime'])assert.equal(record[key],undefined);
 const artifact=process.env.PATCH3S_V1_REVIEW_PDF || path.resolve(root,'../../../output/pdf',record.reviewArtifact);
 assert.equal(crypto.createHash('sha256').update(fs.readFileSync(artifact)).digest('hex'),record.reviewArtifactSha256);
});
test('missing identity, invalid alias, revocation and remote authority flags never bypass gates',()=>{
 for(const patch of [{canonicalId:null},{canonicalId:'isossorbida'},{canonicalId:'nitroglicerina'},{canonicalDocument:{id:'nitroglicerinaiv',status:'REVOKED'}},{canonicalDocument:{id:'nitroglicerinaiv',publicationStatus:'REVOKED',calculationAuthorized:true}},{canonicalDocument:{id:'other',calculationAuthorized:true}}])assert.equal(gate.evaluate(input(7,patch)).calculationAuthorized,false);
 assert.equal(gate.evaluate(input(7)).canonicalDrugId,'nitroglicerinaiv');
});
test('numeric authority rejects missing concentration operands, denominator, weight, unit and overflow',()=>{
 for(const patch of [{amount:undefined},{volume:undefined},{amount:0},{volume:0},{weight:undefined},{weight:NaN},{weight:Infinity},{weight:-1},{dose:Infinity},{dose:Number.MAX_VALUE},{unit:'UI/kg/h'},{amountUnit:'UI'}]){const r=gate.evaluate(input(0,patch));assert.equal(r.calculationAuthorized,false);assert.ok(r.errors.includes('arithmetic')||r.errors.includes('preparationScope'));assert.equal(r.medicalReviewStatus,'APPROVED_IN_FULL');}
});
test('restart reproduces approval and restrictions without promoting cached flags',()=>{
 const fresh=boot().window.InfusionReviewSafety;
 for(let i=0;i<16;i++){const before=gate.evaluate(input(i)),after=fresh.evaluate(input(i));assert.equal(JSON.stringify(after),JSON.stringify(before));}
 const revoked={id:'noradrenalina',status:'REVOKED',calculationAuthorized:true};assert.equal(fresh.evaluate(input(0,{canonicalDocument:revoked})).calculationAuthorized,false);
});
test('insulin schema issue stays independent of approval and pediatric restriction',()=>{
 const b=gate.evaluate(input(14)).medicalApproval;assert.equal(b.remoteSchemaIssue,'PT_ES_EMPTY:guidelineRecommendations');assert.equal(b.MEDICAL_REVIEW_STATUS,'APPROVED_IN_FULL');assert.equal(b.pediatricAuthority,'NOT_APPROVED');
});
if(process.env.PATCH3S_R1_MAP){
 const rows=record.bindings.map((b,i)=>{const r=gate.evaluate(input(i));return {...b,canonicalIdStatus:b.canonicalDrugId?'RESOLVED':'BLOCKED',calculationAuthorized:r.calculationAuthorized,infusionAuthorized:r.infusionAuthority,intermittentCalculationAuthorized:r.intermittentCalculationAuthorized,pediatricAuthorized:false,state:!b.canonicalDrugId?'APPROVED_TECHNICAL_BINDING_PENDING':r.calculationAuthorized?'APPROVED_AND_OPERATIONALLY_AUTHORIZED':'APPROVED_BUT_UNSUPPORTED_BY_ENGINE',technicalBlockers:b.canonicalDrugId?(b.existingTechnicalBlocker?[b.existingTechnicalBlocker]:[]):[i===4?'CANONICAL_ID_NOT_FOUND':'CANONICAL_DUPLICATE_RECONCILIATION_REQUIRED'],evaluationScope:'Representative valid adult prescribed inputs; permission revalidated on every actual call. Existing V2.1 operational approval retained independently.'};});
 fs.writeFileSync(process.env.PATCH3S_R1_MAP,JSON.stringify(rows,null,2)+'\n');
}
