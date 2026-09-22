'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
test('surface manifest is declarative, immutable and free of clinical payloads',()=>{
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'js/clinical-commercial-surfaces.js'),'utf8'),ctx);
 const rows=ctx.window.MedCasesCommercialSurfaces;assert.ok(Object.isFrozen(rows));assert.equal(new Set(rows.map(r=>r.surfaceId)).size,rows.length);
 const classes=new Set(['FREE_GENERAL','FREE_REFERENCE','FREE_SAFETY','PREMIUM_WEIGHT','PREMIUM_RENAL','PREMIUM_HEPATIC','PREMIUM_PREPARATION','PREMIUM_INFUSION']);
 for(const row of rows){assert.ok(classes.has(row.class));assert.equal(Boolean(row.capability),row.class.startsWith('PREMIUM_'));assert.ok(Array.isArray(row.resultSelectors));assert.equal(row.dose,undefined);}
 assert.ok(rows.some(r=>r.class==='FREE_SAFETY'));
 for(const name of ['clinical-commercial-surfaces.js','clinical-action-authorization.js'])assert.equal(fs.readFileSync(path.join(root,'js',name),'utf8'),fs.readFileSync(path.join(root,'public/js',name),'utf8'));
});
test('both owner resources load before legacy handlers and offline publishes matching hashes',()=>{
 const html=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
 assert.ok(html.indexOf('js/clinical-commercial-surfaces.js')<html.indexOf('js/clinical-action-authorization.js'));
 assert.ok(html.indexOf('js/clinical-action-authorization.js')<html.indexOf('mc-r8-5-early-premium-paywall-capture'));
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'public/manifest-offline.json')));
 for(const name of ['js/clinical-commercial-surfaces.js','js/clinical-action-authorization.js','index.html']){
  assert.ok(manifest.files.includes(name));assert.equal(manifest.fileSha256[name],crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'public',name))).digest('hex'));
 }
 assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),html);
});
