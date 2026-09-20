import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync, spawnSync} from 'node:child_process';
const root = path.resolve(import.meta.dirname, '..');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'gold33-reviewed-'));
const fields = ['name','class','pharmacologicClass','commercialNames','presentation','presentations','mechanism','pharmacodynamics','pharmacokinetics','indications','dose','pediatricDose','renalDose','hepaticDose','commonAdverseEffects','dangerousAdverseEffects','adverseEffects','contraindications','interactions','monitoring','administration','preparation','infusionProtocol','pregnancy','lactation','specialPopulations','patientEducation','clinicalPearls','guidelineRecommendations','safetyFlags','alerts','references','ref'];
const hash = x => crypto.createHash('sha256').update(x).digest('hex');
const rows = Array.from({length:9},(_,i)=>({ID:`test_${i}`,CAMPOS_33:Object.fromEntries(fields.map(f=>[f,f==='references'?['source']:{pt:'PT',es:'ES'}])),METADADOS_HANDOFF:{states:{AUTORIZACAO_CALCULO:'NAO_AUTORIZADA',PUBLICACAO:'BLOQUEADA'}}}));
const opinion = {lote:'test',resultado:'APROVADO_INTEGRALMENTE',medico_revisor:'Fixture',excecoes:[],ids_efetivamente_revisados:rows.map(r=>r.ID),sha256_arquivo_homologado:hash('PDF fixture')};
function run(mutate, error) {
 const docs = {'01_DADOS_HOMOLOGADOS.json':JSON.stringify(rows),'04_PARECER_CLINICO.json':JSON.stringify(opinion),'05_RESTRICOES_E_PENDENCIAS.json':JSON.stringify({restricoes_granulares_preservadas:['No calculation']}),'08_REVISAO_MEDICA.pdf':'PDF fixture'};
 mutate?.(docs);
 for(const [n,v] of Object.entries(docs)) fs.writeFileSync(path.join(temp,n),v);
 fs.writeFileSync(path.join(temp,'06_MANIFESTO_SHA256.txt'),Object.entries(docs).map(([n,v])=>`${hash(v)}  ${n}`).join('\n'));
 const zip=path.join(temp,'package.zip'); fs.rmSync(zip,{force:true});
 execFileSync('zip',['-q',zip,...Object.keys(docs),'06_MANIFESTO_SHA256.txt'],{cwd:temp});
 const p=spawnSync(process.execPath,['scripts/gold33-package-gate.mjs',zip],{cwd:root,encoding:'utf8',env:{...process.env,GOLD33_SYNTHETIC_TEST:'0'}});
 if(error){assert.notEqual(p.status,0);assert.match(p.stderr,error);}else assert.equal(p.status,0,p.stderr);
}
try {
 run();
 run(d=>{d['05_RESTRICOES_E_PENDENCIAS.json']='{}';},/RESTRICTIONS_INCOMPLETE/);
 run(d=>{const o=JSON.parse(d['04_PARECER_CLINICO.json']);o.ids_efetivamente_revisados.pop();d['04_PARECER_CLINICO.json']=JSON.stringify(o);},/EXPECTED_UNIQUE_IDS/);
 run(d=>{const a=JSON.parse(d['01_DADOS_HOMOLOGADOS.json']);a[0].ID=a[1].ID;d['01_DADOS_HOMOLOGADOS.json']=JSON.stringify(a);},/EXPECTED_UNIQUE_IDS/);
 run(d=>{const o=JSON.parse(d['04_PARECER_CLINICO.json']);o.ids_efetivamente_revisados[0]='unapproved';d['04_PARECER_CLINICO.json']=JSON.stringify(o);},/APPROVED_IDS_MISMATCH/);
 run(d=>{const o=JSON.parse(d['04_PARECER_CLINICO.json']);o.resultado='PENDENTE';d['04_PARECER_CLINICO.json']=JSON.stringify(o);},/HOMOLOGATION_MISSING/);
 run(d=>{d['08_REVISAO_MEDICA.pdf']='other PDF';},/APPROVED_PDF_MISMATCH/);
 // Exercise the reviewed envelope through the real transactional synchronizer.
 for (const dir of ['scripts','database','data/drugs','public/data/drugs','gateway/data']) fs.mkdirSync(path.join(temp,dir),{recursive:true});
 for (const file of ['gold33-package-gate.mjs','gold33-selective-sync.mjs']) fs.copyFileSync(path.join(root,'scripts',file),path.join(temp,'scripts',file));
 const free=['test_0',...Array.from({length:59},(_,i)=>`free_${i}`)];
 fs.writeFileSync(path.join(temp,'gateway/data/free60_allowlist.v2.json'),JSON.stringify({ids:free}));
 for(const id of free) fs.writeFileSync(path.join(temp,`public/data/drugs/${id}.json`),'{}');
 fs.writeFileSync(path.join(temp,'database/test.js'),'window.TEST_DRUGS_DB={};\n');
 for(const row of rows) {
  row.METADADOS_HANDOFF={...row.METADADOS_HANDOFF,source_executavel:'database/test.js',owner_canonico:'test.js',derived_private_json:`data/drugs/${row.ID}.json`,classification_free_premium:free.includes(row.ID)?'FREE60':'PREMIUM'};
  fs.writeFileSync(path.join(temp,`data/drugs/${row.ID}.json`),'{}');
 }
 run();
 const sync=(auth=true)=>spawnSync(process.execPath,[path.join(root,'scripts/gold33-selective-sync.mjs'),'--root',temp,'--zip',path.join(temp,'package.zip'),'--apply',...(auth?['--owner-publication-authorization','lote002-owner-confirmed']:[])],{encoding:'utf8'});
 assert.match(sync(false).stderr,/INTEGRATION_NOT_RELEASED/);
 assert.equal(sync().status,0);
 const output=JSON.parse(fs.readFileSync(path.join(temp,'data/drugs/test_0.json')));
 assert.equal(output.mc_gold_standard_v1.calculationAuthorized,false);
 assert.deepEqual(output.mc_gold_standard_v1.packageRestrictions,{restricoes_granulares_preservadas:['No calculation']});
 assert.ok(!fs.existsSync(path.join(temp,'public/data/drugs/test_1.json')));
 assert.deepEqual(JSON.parse(sync().stdout).changed,[]);
 rows[0].METADADOS_HANDOFF.classification_free_premium='PREMIUM';run();assert.match(sync().stderr,/REVIEWED_MAPPING_INVALID/);
 console.log('PASS reviewed envelope: nine IDs, scope, duplicates, approval, PDF identity');
} finally {fs.rmSync(temp,{recursive:true,force:true});}
