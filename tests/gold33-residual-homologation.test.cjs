'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),zip=path.join(root,'docs/clinical-updates/gold33-evidence/MEDCASES_GOLD33_FINAL_RESIDUAL_HOMOLOGADO_CLINICAMENTE.zip');
const member=n=>execFileSync('unzip',['-p',zip,n],{maxBuffer:4*1024*1024}),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const data=JSON.parse(member('01_DADOS_HOMOLOGADOS.json')),free=new Set(JSON.parse(fs.readFileSync(path.join(root,'gateway/data/free60_allowlist.v2.json'))).ids);
test('residual evidence manifest, exact review artifact and 11/75/150 scope',()=>{
 for(const line of member('06_MANIFESTO_SHA256.txt').toString().trim().split('\n')){const [hash,name]=line.split(/\s+/);assert.equal(sha(member(name)),hash);}
 const review=JSON.parse(member('04_PARECER_CLINICO.json'));assert.equal(sha(member('08_REVISAO_MEDICA.pdf')),review.review_artifact.sha256);
 assert.equal(data.items.length,11);assert.equal(new Set(data.items.map(r=>r.ID)).size,11);assert.equal(data.items.reduce((n,r)=>n+Object.keys(r.PATCH_CAMPOS_33).length,0),75);
});
for(const row of data.items)test('exact approved residual and authority preserved: '+row.ID,()=>{
 const doc=JSON.parse(fs.readFileSync(path.join(root,'data/drugs',row.ID+'.json'))),m=doc.mc_gold_standard_v1,s=fs.readFileSync(path.join(root,m.sourceOwner),'utf8');
 const block=s.split('/* GOLD33_SELECTIVE:'+row.ID+':START */')[1].split('/* GOLD33_SELECTIVE:'+row.ID+':END */')[0];
 const gold=JSON.parse(block.slice(block.indexOf('.mcGoldClinicalV1=')+'.mcGoldClinicalV1='.length,block.lastIndexOf(';})();')));
 for(const [field,values]of Object.entries(row.PATCH_CAMPOS_33))for(const lang of ['pt','es']){assert.equal(doc[lang][field],values[lang]);assert.equal(gold[lang][field],values[lang]);}
 assert.equal(m.calculationAuthorized,false);assert.equal(gold.meta.calculationAuthorized,false);
 assert.equal(m.residualClinicalReview.approvedPatchSha256,sha(member('01_DADOS_HOMOLOGADOS.json')));
 assert.deepEqual(m.residualClinicalReview,gold.meta.residualClinicalReview);
 const pub=path.join(root,'public/data/drugs',row.ID+'.json');if(free.has(row.ID))assert.deepEqual(JSON.parse(fs.readFileSync(pub)),doc);else assert.equal(fs.existsSync(pub),false);
});
