const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const exporter=fs.readFileSync(path.join(root,'scripts/export-clinical-data.js'),'utf8');
const modules=vm.runInNewContext(exporter.match(/const DB_MODULES = (\[[\s\S]*?\n\]);/)[1]);
const html=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
const dynamic=[...html.matchAll(/_loadScript\('database\/([^?'\/]+\.js)/g)].map(x=>x[1]);
const order=[...dynamic,...[...html.matchAll(/<script[^>]*src="database\/([^?"/]+\.js)/g)].map(x=>x[1])];
const s={console:{log(){},warn(){},error(){}}};for(const m of modules)Object.assign(s,m.preseed||{});s.window=s;s.self=s;s.globalThis=s;const ctx=vm.createContext(s);let total=0,errors=[],verified=0;
for(const file of order.filter(f=>modules.some(m=>m.file===f))){try{vm.runInContext(fs.readFileSync(path.join(root,'database',file),'utf8'),ctx,{timeout:3000});total++;}catch(e){errors.push([file,e.message]);}}
const norm=v=>String(v).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9_-]/g,'_').replace(/__+/g,'_').replace(/^_|_$/g,'');
for(const f of fs.readdirSync(path.join(root,'data/drugs'))){const d=JSON.parse(fs.readFileSync(path.join(root,'data/drugs',f),'utf8')),meta=d.mc_gold_standard_v1;if(!meta?.lote)continue;const mod=modules.find(m=>'database/'+m.file===meta.sourceOwner);let db=d.id==='alisquireno'?s.CARDIOLOGIA_DRUGS_DB:s[mod?.globalVar];let drugs=Array.isArray(db)?db.filter(x=>norm(x.id)===d.id):Object.entries(db||{}).filter(([k])=>norm(k)===d.id).map(([,v])=>v);drugs=[...new Set(drugs)];if(drugs.length!==1||!drugs[0]?.mcGoldClinicalV1){errors.push([d.id,'RUNTIME_GOLD33_COUNT',drugs.length]);continue;}const drug=drugs[0];for(const lang of ['pt','es'])for(const [k,val] of Object.entries(drug.mcGoldClinicalV1[lang])){try{assert.deepStrictEqual(JSON.parse(JSON.stringify(val)),d[lang][k]);}catch(e){errors.push([d.id,lang,k]);}}assert.equal(drug.mcGoldClinicalV1.meta.calculationAuthorized,false);assert.equal(drug.mcGoldClinicalV1.meta.approvedSha256,meta.approvedSha256);assert.equal(drug.mcGoldClinicalV1.meta.lote,meta.lote);verified++;}
assert.equal(total,modules.length,'all source modules must load');
const result={modulesLoaded:total,recordsVerified:verified,errors};console.log(JSON.stringify(result));if(errors.length)process.exitCode=1;
