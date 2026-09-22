'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {DB_MODULES,INTERACOES_MODULE,IDENTITY_ONLY_FILES,validateCanonicalInventory}=require('../scripts/clinical-source-inventory.cjs');
const root=path.resolve(__dirname,'..');
const declared=[...DB_MODULES.map(m=>m.file),INTERACOES_MODULE.file,...IDENTITY_ONLY_FILES];
function fixture(fn){const dir=fs.mkdtempSync(path.join(os.tmpdir(),'mc-inventory-'));try{for(const name of declared)fs.writeFileSync(path.join(dir,name),'// synthetic inventory fixture\n');fn(dir);}finally{fs.rmSync(dir,{recursive:true,force:true});}}
test('current declared set exactly equals actual source, count is derived',()=>{
 const actual=validateCanonicalInventory(path.join(root,'database')).map(p=>path.basename(p));assert.deepEqual(actual,[...declared].sort());
 for(const file of ['gold33_nova_lista.js','gold33_novo_093.js'])assert.equal(DB_MODULES.find(m=>m.file===file).privateReferenceOnly,true);
 for(const file of IDENTITY_ONLY_FILES)assert.equal(DB_MODULES.some(m=>m.file===file),false);
});
test('missing canonical file fails',()=>fixture(dir=>{fs.unlinkSync(path.join(dir,declared[0]));assert.throws(()=>validateCanonicalInventory(dir),/missing.*gold33_novo_093/);}));
test('unexpected JS cannot silently enter identity or Gold export',()=>fixture(dir=>{fs.writeFileSync(path.join(dir,'temporary.js'),'');assert.throws(()=>validateCanonicalInventory(dir),/unexpected.*temporary.js/);}));
test('duplicate declaration fails even when actual filesystem set is unique',()=>fixture(dir=>{assert.throws(()=>validateCanonicalInventory(dir,{modules:[...DB_MODULES,DB_MODULES[0]]}),/duplicates.*gold33_novo_093/);}));
test('future declared module passes, same undeclared file fails',()=>fixture(dir=>{fs.writeFileSync(path.join(dir,'future_canonical.js'),'');assert.throws(()=>validateCanonicalInventory(dir),/unexpected/);const files=validateCanonicalInventory(dir,{modules:[...DB_MODULES,{file:'future_canonical.js',globalVar:'SYNTHETIC_DB',type:'object'}]});assert.equal(files.length,declared.length+1);assert.ok(files.includes(path.join(dir,'future_canonical.js')));}));
test('path escape declaration rejected',()=>fixture(dir=>{assert.throws(()=>validateCanonicalInventory(dir,{identityOnlyFiles:[...IDENTITY_ONLY_FILES,'../outside.js']}),/INVALID_DECLARATION/);}));
test('symlink cannot masquerade as registered source',()=>fixture(dir=>{const file=path.join(dir,declared[0]);fs.unlinkSync(file);fs.symlinkSync(path.join(dir,declared[1]),file);assert.throws(()=>validateCanonicalInventory(dir),/nonRegular/);}));
test('directory cannot masquerade as JS file',()=>fixture(dir=>{fs.unlinkSync(path.join(dir,declared[0]));fs.mkdirSync(path.join(dir,declared[0]));assert.throws(()=>validateCanonicalInventory(dir),/nonRegular/);}));
