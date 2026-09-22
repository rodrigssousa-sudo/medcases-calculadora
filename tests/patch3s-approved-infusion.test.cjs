'use strict';
// Execute the delivered runtime, not a second implementation of its formulas.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = {window:{}, document:{addEventListener(){}}};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root,'database/infusoes.js'),'utf8'),context);
const {fallback,presets} = JSON.parse(vm.runInContext('JSON.stringify({fallback:INFUSION_FALLBACK_DB,presets:BIC_PRESETS})',context));
const gate = context.window.InfusionReviewSafety, math = context.window.InfusionMath;
const approval = JSON.parse(fs.readFileSync(process.env.PATCH3S_V2_APPROVAL_RECORD || path.join(root,'docs/clinical-updates/patch3s-v2_1-approval.json')));
const canonical = JSON.parse(fs.readFileSync(path.join(root,'data/drugs_index.json')));
const docs = Object.fromEntries(fallback.filter(d=>d.canonicalDrugId).map(d=>[d.canonicalDrugId, JSON.parse(fs.readFileSync(path.join(root,'data/drugs',d.canonicalDrugId+'.json')))]));
function input(i, overrides={}) {
 const row=fallback[i], prep=presets[row.nome][0];
 return {drug:row.nome, canonicalId:row.canonicalDrugId, canonicalDocument:docs[row.canonicalDrugId],
 age:40, weight:70, adultConfirmed:false, dose: i===8?15:i===14?.1:i===5?.03:i===6?1:1, potassium:4, hours:.1,
 scopeConfirmed:true, indication:gate.indications[row.nome]?.[0]||'reviewed', nomogram:'Explicit prescribed protocol',
 idealWeight:60, benefitConfirmed:false, amount:prep.totalMg, volume:prep.volMl,
 unit:prep.unitDefault, amountUnit:prep.amountUnit, preparationId:prep.id, minutes:60,...overrides};
}
function result(i, overrides={}){return gate.evaluate(input(i,overrides));}
function has(i, overrides, code){assert.ok(result(i,overrides).errors.includes(code),`${i}: ${code}`);assert.equal(result(i,overrides).calculationAuthorized,false);}
const blocked=new Set([4,6,12,13]);
for(let i=0;i<fallback.length;i++){
 test(`${i} ${fallback[i].nome}: exact identity, adult scope and approved disposition`,()=>{
  assert.equal(fallback[i].doseInicial,null);
  assert.equal(approval.bindings[i].pediatricAuthority,false);
  assert.match(approval.bindings[i].reviewedFields.Pediatria,/CALCULO PEDIATRICO BLOQUEADO/);
  assert.match(approval.bindings[i].reviewedFields.Pediatria,/PROIBIDO reutilizar, escalar, adaptar ou inferir/);
  if(i===4||i===6)assert.equal(fallback[i].canonicalDrugId,null);
  else assert.ok(canonical.some(d=>d.id===fallback[i].canonicalDrugId));
  const value=result(i);assert.equal(value.clinicalScopeValidated,!blocked.has(i));
  assert.equal(value.calculationAuthorized,!blocked.has(i));assert.equal(value.infusionAuthority,!blocked.has(i)&&i!==15);
  assert.equal(value.intermittentCalculationAuthorized,i===15);assert.equal(value.errors.includes('activation'),false);
 });
 test(`${i}: child/unknown age cannot inherit adult regimen`,()=>{
  for(const age of [0,1,12,17,17.99])for(const adultConfirmed of [true,false])has(i,{age,adultConfirmed},'adult');
  has(i,{age:NaN,adultConfirmed:false},'adult');
 });
 test(`${i}: identity, preparation, indication and scope cannot be inferred`,()=>{
  has(i,{canonicalId:'similar_alias'},'binding');has(i,{canonicalDocument:undefined},'binding');
  for(const status of ['REVOKED','DRAFT','REVIEWED','CANARY'])has(i,{canonicalDocument:{id:fallback[i].canonicalDrugId,publicationStatus:status}},'binding');
  has(i,{canonicalDocument:{id:fallback[i].canonicalDrugId,enabled:false}},'binding');
  has(i,{scopeConfirmed:false},'scope');has(i,{indication:'unapproved'},'indication');
  has(i,{amount:123456},'preparationScope');has(i,{unit:'invented'},'preparationScope');
  has(i,{preparationId:'similar_prep'},'preparationScope');
 });
}
test('approval provenance and counts are derived; no Milrinona invented',()=>{
 assert.equal(approval.sourcePdfSha256,'0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7');
 assert.equal(approval.reviewer,'Dra Eugenia Marques');assert.equal(approval.reviewedAt,'2026-09-21');
 assert.equal(approval.bindings.length,fallback.length);assert.equal(fallback.filter(d=>d.canonicalDrugId).length,14);
 assert.equal(approval.pediatricRuntimeAuthorized,false);assert.equal(approval.globalCalculationAuthorityChanged,false);
 assert.equal(canonical.some(d=>d.id==='milrinona'||d.id==='milrinone'),false);
 assert.equal(fallback[15].canonicalDrugId,'vancomicina');assert.notEqual(fallback[15].canonicalDrugId,'vancomicina_oral');
});
test('IBW must be explicitly provided; actual body weight is not a substitute',()=>{for(const v of [undefined,0,-1,NaN,Infinity])has(1,{idealWeight:v},'idealWeight');});
test('Dopamine corrected maximum and vasopressin indication-specific limited data',()=>{
 assert.equal(result(3,{dose:50}).clinicalScopeValidated,true);has(3,{dose:50.01},'dopamineMax');
 assert.equal(result(5,{dose:.06}).clinicalScopeValidated,true);assert.equal(result(5,{dose:.08}).warnings.includes('vasopressinData'),true);
 assert.equal(result(5,{dose:.08,indication:'post_cardiotomy'}).warnings.includes('vasopressinData'),false);
});
test('Nitroprusside checks total duration and immediate cyanide risk',()=>{
 has(6,{dose:10.01},'nitroMax');has(6,{dose:10,hours:1/6+.001},'nitroTime');has(6,{hours:NaN},'duration');
 assert.equal(result(6,{dose:10,hours:1/6}).errors.includes('nitroTime'),false);assert.equal(result(6).clinicalScopeValidated,false);assert.ok(result(6,{dose:3}).warnings.includes('cyanide'));
});
test('Nitroglycerin has no unreviewed universal 200 cap',()=>assert.equal(result(7,{dose:201}).clinicalScopeValidated,true));
test('Heparin requires explicit nomogram; Propofol >4 requires benefit confirmation',()=>{
 has(9,{nomogram:''},'nomogram');has(10,{dose:4.01},'propofolBenefit');assert.equal(result(10,{dose:4.01,benefitConfirmed:true}).clinicalScopeValidated,true);
});
test('Amiodarone exact preparation must match phase; unapproved local 900/500 rejected',()=>{
 has(8,{indication:'maintenance'},'amiodaronePhase');
 assert.equal(result(8,{indication:'maintenance',dose:.5,preparationId:'amio_maintenance_360_200',amount:360,volume:200}).clinicalScopeValidated,true);
 has(8,{indication:'maintenance',preparationId:'amio_maintenance_900_500',amount:900,volume:500},'preparationScope');
});
test('Insulin potassium gate and deterministic prescribed UI/kg/h conversion',()=>{
 for(const potassium of [undefined,NaN,3.3,3.5])has(14,{potassium},'potassium');
 const r=math.calculate({amount:100,volume:100,amountUnit:'UI',unit:'UI/kg/h',dose:.1,weight:70});
 assert.equal(r.rate,7);assert.equal(r.totalPerHour,7);assert.equal(r.dose,.1);
 assert.equal(result(14,{indication:'postoperative'}).calculationAuthorized,false);
});
test('Vancomycin is intermittent only: prescribed volume/time, not daily dose /24',()=>{
 assert.equal(result(15).infusionAuthority,false);assert.equal(result(15).intermittentCalculationAuthorized,true);assert.equal(result(15).clinicalScopeValidated,true);
 has(15,{minutes:59},'intermittent');has(15,{volume:99},'preparationScope');has(15,{unit:'mg/h'},'preparationScope');
 const p={amount:500,volume:100,unit:'ml/h',amountUnit:'mg'};
 assert.equal(gate.intermittent(p,60).rate,100);assert.equal(gate.intermittent(p,120).rate,50);
 assert.equal(gate.intermittent({...p,volume:200},60).rate,200);
 for(const v of [NaN,Infinity,0,59])assert.equal(gate.intermittent(p,v).error,'duration');
});
for(const [unit,expected] of [['mcg/kg/min',.06],['mcg/min',.06],['mg/h',1],['mg/kg/h',1],['mcg/kg/h',.001],['mg/min',60],['ml/h',1],['UI/kg/h',1],['UI/min',60]]){
 test(`actual dimensional engine ${unit} and inverse`,()=>{
  const p={amount:1,volume:1,weight:1,dose:1,unit,amountUnit:unit.startsWith('UI')?'UI':'mg'};
  const r=math.calculate(p);assert.equal(r.rate,expected);
  assert.ok(Math.abs(math.calculate({...p,direction:'rate',rate:r.rate}).dose-1)<1e-12);
 });
}
test('invalid operands, overflow and 1000x unit mismatch cannot produce valid rates',()=>{
 const p={amount:1,volume:1,weight:1,dose:1,unit:'mcg/kg/min',amountUnit:'mg'};
 for(const value of [undefined,0,-1,NaN,Infinity])for(const field of ['amount','volume','weight','dose'])assert.ok(math.calculate({...p,[field]:value}).error);
 assert.equal(math.calculate({...p,amountUnit:'UI'}).error,'unit');
 assert.equal(math.calculate({...p,dose:Number.MAX_VALUE,unit:'mg/min'}).error,'range');
 const a=math.calculate({...p,unit:'mg/h'}),b=math.calculate({...p,unit:'mcg/h'});assert.equal(a.rate/b.rate,1000);
});
test('unknown names are never matched by substring/fuzzy promotion',()=>{
 for(const drug of ['NORADRENALINA','noradrenalina','Noradrena','unknown'])assert.ok(gate.evaluate({...input(0),drug}).errors.includes('binding'));
});

test('user authorization is separate from package; no publication, pediatrics or duplicate promotion',()=>{
 assert.equal(vm.runInContext('Object.isFrozen(INFUSION_RELEASE_AUTHORITY)',context),true);
 assert.equal(approval.sourcePackageAuthority.technicalIntegrationAuthorized,false);
 assert.equal(approval.sourcePackageAuthority.calculationAuthorized,false);
 assert.equal(fallback[6].canonicalDrugId,null);
 assert.equal(fallback[6].calculationBlock,'CANONICAL_DUPLICATE_RECONCILIATION_REQUIRED');
 assert.equal(approval.localTechnicalActivation.authorized,true);assert.equal(approval.localTechnicalActivation.publicationAuthorized,false);
 for(let i=0;i<fallback.length;i++)assert.equal(result(i).calculationAuthorized,!blocked.has(i));
});

test('Amiodarone reviewed phase-specific doses; no inference from bag size',()=>{has(8,{dose:1},'amiodaroneDose');has(8,{dose:.500001,indication:'maintenance',preparationId:'amio_maintenance_360_200',amount:360,volume:200},'amiodaroneDose');});
