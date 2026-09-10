#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const os=require('os');
const {execFileSync}=require('child_process');

const REPO=path.resolve(__dirname,'..');
const GOLD=new Set(['verapamil','procainamida','atenolol','bisoprolol','carvedilol','dapagliflozina','acetazolamida','bumetanida','amilorida','candesartana','disopiramida','angiotensinaii','azilsartana','canagliflozina','clonidina','lidocaina','mexiletina','clopidogrel','prasugrel','ticagrelor','cangrelor','alteplase','tenecteplase','amiodarona','adenosina','metoprolol','nebivolol','enalapril','lisinopril','ramipril','losartana','valsartana','irbesartana','telmisartana','olmesartana','eprosartana','propranolol','esmolol','nadolol','sotalol','labetalol','ivabradina','digoxina','furosemida','torsemida','espironolactona','eplerenona','hidroclorotiazida','clortalidona','indapamida','metolazona','manitol','anlodipino','nifedipina','felodipina','lercanidipina','manidipina','diltiazem','dofetilida','ibutilida','flecainida','propafenona','quinidina','bosentana','ambrisentana','macitentana','riociguate','treprostinil','iloprosta','selexipague']);
const REQUIRED=[
  'name','class','pharmacologicClass','mechanism','pharmacodynamics',
  'pharmacokinetics','indications','commercialNames','presentation',
  'presentations','dose','pediatricDose','renalDose','hepaticDose',
  'commonAdverseEffects','dangerousAdverseEffects','adverseEffects',
  'contraindications','interactions','monitoring','administration',
  'preparation','infusionProtocol','pregnancy','lactation',
  'specialPopulations','patientEducation','clinicalPearls',
  'guidelineRecommendations','safetyFlags','alerts','references','ref'
];

function canon(v){return JSON.stringify(v);}
function die(msg){console.error(`FAIL ${msg}`);process.exit(1);}
function copyDir(src,dst){fs.cpSync(src,dst,{recursive:true});}
function run(sb){execFileSync('node',['scripts/export-clinical-data.js'],{cwd:sb,stdio:'pipe'});}

const before=new Map();
for(const id of GOLD){
  const p=path.join(REPO,'data','drugs',`${id}.json`);
  if(!fs.existsSync(p))die(`missing baseline ${id}`);
  before.set(id,JSON.parse(fs.readFileSync(p,'utf8')));
}

const sb=fs.mkdtempSync(path.join(os.tmpdir(),'mc-gold-export-test-'));
for(const d of ['database','config','scripts','data','public']){
  copyDir(path.join(REPO,d),path.join(sb,d));
}
if(fs.existsSync(path.join(REPO,'package.json'))){
  fs.copyFileSync(path.join(REPO,'package.json'),path.join(sb,'package.json'));
}

run(sb);

let pass=0;
for(const id of GOLD){
  const a=before.get(id);
  const p=path.join(sb,'data','drugs',`${id}.json`);
  const q=path.join(sb,'public','data','drugs',`${id}.json`);
  if(!fs.existsSync(p)||!fs.existsSync(q))die(`missing after ${id}`);
  const rawP=fs.readFileSync(p);
  const rawQ=fs.readFileSync(q);
  if(!rawP.equals(rawQ))die(`root/public mismatch ${id}`);

  const b=JSON.parse(rawP.toString('utf8'));

  for(const lang of ['pt','es']){
    if(!b[lang]||typeof b[lang]!=='object')die(`${id}/${lang} missing`);
    for(const f of REQUIRED){
      if(canon(a[lang][f])!==canon(b[lang][f])){
        die(`${id}/${lang}/${f} drift`);
      }
    }

    for(const k of Object.keys(a[lang])){
      if(!REQUIRED.includes(k) && canon(a[lang][k])!==canon(b[lang][k])){
        die(`${id}/${lang}/legacy-extra ${k} drift`);
      }
    }
  }

  if(canon(a.name)!==canon(b.name))die(`${id}/name drift`);
  if(canon(a.icon)!==canon(b.icon))die(`${id}/icon drift`);

  if(a.mc_gold_standard_v1!==undefined &&
     canon(a.mc_gold_standard_v1)!==canon(b.mc_gold_standard_v1)){
    die(`${id}/mc_gold_standard_v1 drift`);
  }

  pass++;
}

const run1=new Map();
for(const id of GOLD){
  run1.set(
    id,
    fs.readFileSync(path.join(sb,'data','drugs',`${id}.json`))
  );
}

run(sb);

for(const id of GOLD){
  const run2=fs.readFileSync(path.join(sb,'data','drugs',`${id}.json`));
  if(!run1.get(id).equals(run2))die(`${id}/idempotence drift`);
}

fs.rmSync(sb,{recursive:true,force:true});
console.log(`GOLD70_EXPORTER_PERSISTENCE=${pass}/70`);
console.log('GOLD70_ROOT_PUBLIC_PARITY=PASS');
console.log('GOLD70_IDEMPOTENCE=PASS');
console.log('RESULT=PASS_GOLD70_EXPORTER_PERSISTENCE_TEST');
