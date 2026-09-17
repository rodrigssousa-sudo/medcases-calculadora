#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),pub=path.join(root,'public');
const read=(p)=>JSON.parse(fs.readFileSync(p,'utf8'));
function fail(m){throw Error('R30_PUBLIC_BOUNDARY_'+m)}
const a=read(path.join(root,'gateway/data/free60_allowlist.v2.json')).ids;
if(!Array.isArray(a)||a.length!==60||new Set(a).size!==60)fail('FREE60_COUNT');
const free=new Set(a),policy=read(path.join(pub,'data/drug_access_free60.v2.json'));
if(new Set(policy.freeIds).size!==60||policy.freeIds.some(i=>!free.has(i)))fail('POLICY');
const drugDir=path.join(pub,'data/drugs');
const ids=fs.readdirSync(drugDir).filter(x=>x.endsWith('.json')).map(x=>x.slice(0,-5));
if(ids.length!==60||ids.some(i=>!free.has(i)))fail('DIRECT_JSON_EXPOSURE');
if(fs.existsSync(path.join(pub,'data/ai-drug-data')))fail('PUBLIC_AI_BUNDLE_EXPOSURE');
let w={PSICOFARMACOS_DRUGS_DB:{}};
vm.runInNewContext(fs.readFileSync(path.join(pub,'database/psicofarmacos.js'),'utf8'),{window:w},{timeout:3000});
let exposed=Object.keys(w.PSICOFARMACOS_DRUGS_DB);
if(exposed.length!==1||exposed[0]!=='clorpromazina'||!free.has(exposed[0]))fail('G01_PREMIUM_JS_EXPOSURE');
let m=read(path.join(pub,'manifest-offline.json'));
if(!Array.isArray(m.files)||m.files.some(s=>s.startsWith('data/ai-drug-data/')||
 /^data\/drugs\/[a-z0-9_]+\.json$/.test(s)&&!free.has(path.basename(s,'.json'))))fail('OFFLINE_MANIFEST');
const html=fs.readFileSync(path.join(pub,'index.html'),'utf8');
if(html.includes('MEDCASES_G01_R28_PEDIATRIC_UI_BRIDGE_V1'))fail('UNREVIEWED_R28_ENABLED');
if(!html.includes('database/psicofarmacos.js?v=r30-free60-security-20260916'))fail('HTML_CACHE_VERSION');
const pkg=read(path.join(root,'package.json'));
if(!pkg.scripts.build.includes('verify-public-boundary.cjs')||pkg.scripts.build.includes('export:ai'))fail('BUILD_POLICY');
console.log('RESULT=PASS_R30_PUBLIC_BOUNDARY | FREE=60 | PUBLIC_G01=1 | AI_PUBLIC=0 | R28_CLINICAL=DISABLED');

/* MEDCASES_R33_FREE60_INDEX_PERMANENT_GATE: build and predeploy enforce public metadata boundary. */
;(() => {
  const fs = require('node:fs');
  const path = require('node:path');
  const root = path.resolve(__dirname, '..');
  const base = path.join(root, 'public');
  const free = JSON.parse(fs.readFileSync(path.join(root, 'gateway/data/free60_allowlist.v2.json'), 'utf8')).ids;
  const rows = JSON.parse(fs.readFileSync(path.join(base, 'data/drugs_index.json'), 'utf8'));
  if (!Array.isArray(free) || free.length !== 60 || new Set(free).size !== 60 ||
      !Array.isArray(rows) || rows.length !== 60 ||
      rows.some(r => !r || typeof r.id !== 'string') ||
      new Set(rows.map(r => r.id)).size !== 60 ||
      rows.some(r => !free.includes(r.id))) {
    throw Error('R33_PUBLIC_INDEX_MUST_EQUAL_FREE60');
  }
  console.log('R33_PUBLIC_INDEX_FREE60=PASS');
})();
