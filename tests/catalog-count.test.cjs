const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const rows=JSON.parse(fs.readFileSync('data/drugs_index.json'));
for(const file of ['index.html','public/index.html']){
 const elements={'hm-drug-count':{dataset:{}},'farmacos-total-count':{}};
 const c={window:{DRUG_DB:Array(5000),ALL_DRUGS_DB:{legacy:{}}},currentLang:'pt',document:{getElementById:id=>elements[id]}};
 vm.createContext(c);vm.runInContext(fs.readFileSync('public/js/catalog-summary.js','utf8'),c);
 const html=fs.readFileSync(file,'utf8'),start=html.indexOf('function _fdUpdateCount(foundCount)'),end=html.indexOf('/* BUILD 392 — exposição',start);
 vm.runInContext(html.slice(start,end),c);vm.runInContext('_fdUpdateCount()',c);
 assert.equal(elements['hm-drug-count'].dataset.catalogTotal,String(rows.length));assert.match(elements['hm-drug-count'].textContent,/1\.018 fármacos no catálogo/);
 vm.runInContext('_fdUpdateCount(3)',c);assert.match(elements['hm-drug-count'].textContent,/3 encontrados · 1\.018/);
 vm.runInContext("currentLang='es';_fdUpdateCount()",c);assert.match(elements['hm-drug-count'].textContent,/en el catálogo/);
}
const lines=fs.readFileSync('docs/LISTA_CONTINUA_FARMACOS.txt','utf8').trim().split('\n');
assert.equal(lines.length,rows.length);assert.deepEqual(new Set(lines.map(x=>x.split(' — ID: ')[1])),new Set(rows.map(x=>x.id)));
console.log('CATALOG_COUNT=PASS; LAZY_LOAD_ALIASES_IGNORED; SEARCH_AND_PT_ES=PASS; CONTINUOUS_LIST=1018/1018');
