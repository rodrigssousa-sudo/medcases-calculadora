const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

async function run(file, referenceOnly, existing = '') {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)];
  const code = scripts.find(m => m[1].includes("const BUILD='MEDCASES_GLOBAL_DOSE_ENGINE_STANDARD_FALLBACK_AND_PEDIATRIC_REAL_CALC_V1_B_R0'"))[1];
  const out = {textContent:existing, innerHTML:''};
  const result = {dataset:{}, setAttribute(){}};
  const fields = {
    '.mcd-patient .mcd-field:nth-child(1) input':{value:'8'},
    '.mcd-patient .mcd-field:nth-child(2) input':{value:'20'},
    '.mcd-name':{textContent:'testdrug'},
    '.mcd-result':result, '.mcd-result-text':out,
  };
  const page = {dataset:{open:'true',mcDrugId:'testdrug',mcLang:'pt'}, querySelector:s=>fields[s]||null};
  const data = {id:'testdrug',name:{pt:'testdrug',es:'testdrug'}, pt:{name:'testdrug',pediatricDose:'2 mg/kg/dia'},
                mc_gold_standard_v1:{referenceOnly, calculationAuthorized:!referenceOnly}};
  const context = {console:{info(){},warn(){},log(){}}, setTimeout(){},
    document:{getElementById:id=>id==='mc-drug-detail-page-v21'?page:null,
              documentElement:{lang:'pt'}, body:{dataset:{}}, addEventListener(){}},
    performance:{getEntriesByType:()=>[]},
    fetch:async()=>({ok:true,json:async()=>data}),
  };
  context.window = context;
  vm.runInNewContext(code, context);
  await context.__mcGlobalDoseR8.apply();
  return {out,page};
}

(async()=>{
  for(const file of ['index.html','public/index.html']) {
    for(const existing of ['', 'Dose calculada: 40 mg/dia']) {
      const r = await run(file, true, existing);
      assert.equal(r.page.dataset.mcGlobalDoseR8, 'reference-only');
      assert.match(r.out.innerHTML, /cálculo automático não autorizado/);
      assert.doesNotMatch(r.out.innerHTML, /Dose calculada:|40 mg/);
      assert.match(r.out.innerHTML, /2 mg\/kg\/dia/);
    }
    const normal = await run(file, false);
    assert.equal(normal.page.dataset.mcGlobalDoseR8, 'pediatric-calculated');
    assert.match(normal.out.innerHTML, /40 mg/);
  }
  console.log('GOLD33_REFERENCE_ONLY_UI=PASS; TEXT_ARITHMETIC_BLOCKED; STALE_RESULT_REPLACED; LEGACY_REGRESSION=PASS');
})().catch(e=>{console.error(e);process.exitCode=1});
