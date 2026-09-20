#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const argv = process.argv.slice(2);
const args = {};
for (let i = 0; i < argv.length; i++) {
  if (!argv[i].startsWith('--')) continue;
  const key = argv[i].slice(2);
  const next = argv[i + 1];
  args[key] = next && !next.startsWith('--') ? next : true;
  if (args[key] !== true) i++;
}
const root = path.resolve(args.root || path.resolve(import.meta.dirname, '..'));
const zip = path.resolve(String(args.zip || ''));
const apply = args.apply === true;
const ownerAuthorization = String(args['owner-publication-authorization'] || '');
const ownerAuthorized = new Set([
  'mission10-owner-confirmed',
  'lote002-owner-confirmed',
]).has(ownerAuthorization);
const failAfter = Number(process.env.GOLD33_FAIL_AFTER_WRITES || 0);
const required = ['name','class','pharmacologicClass','commercialNames','presentation','presentations','mechanism','pharmacodynamics','pharmacokinetics','indications','dose','pediatricDose','renalDose','hepaticDose','commonAdverseEffects','dangerousAdverseEffects','adverseEffects','contraindications','interactions','monitoring','administration','preparation','infusionProtocol','pregnancy','lactation','specialPopulations','patientEducation','clinicalPearls','guidelineRecommendations','safetyFlags','alerts','references','ref'];
const die = (message) => { throw new Error(message); };
const readZip = (name) => execFileSync('unzip', ['-p', zip, name], { encoding:'utf8', maxBuffer:32*1024*1024 });
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');
const safe = (relative) => {
  if (!relative || path.isAbsolute(relative) || relative.includes('..') || relative.includes('\\')) die(`UNSAFE_PATH:${relative}`);
  const absolute = path.resolve(root, relative);
  if (!absolute.startsWith(root + path.sep)) die(`PATH_ESCAPE:${relative}`);
  return absolute;
};
const executableOwner = (restriction, sourceRel) => {
  const declared = String(restriction.owner_canonico || '');
  if (/^[A-Z][A-Z0-9_]*_DRUGS_DB$/.test(declared)) return declared;
  const sourceName = path.basename(sourceRel);
  if (declared !== sourceName || !/^[a-z0-9_]+\.js$/.test(sourceName)) {
    die(`CANONICAL_OWNER_INVALID:${restriction.id}:${declared}`);
  }
  return `${path.basename(sourceName, '.js').toUpperCase()}_DRUGS_DB`;
};

if (!zip.endsWith('.zip') || !fs.existsSync(zip)) die('GOLD33_ZIP_REQUIRED');
execFileSync(process.execPath, [path.join(root,'scripts/gold33-package-gate.mjs'), zip], { cwd:root, stdio:'pipe' });
const dataDocument = JSON.parse(readZip('01_DADOS_HOMOLOGADOS.json'));
const opinionDocument = JSON.parse(readZip('04_PARECER_CLINICO.json'));
const restrictionsDocument = JSON.parse(readZip('05_RESTRICOES_E_PENDENCIAS.json'));
const v4 = dataDocument?.schema === 'MEDCASES_GOLD33_HOMOLOGATED_V4';
const data = v4 ? dataDocument.medications : dataDocument;
const restrictionItems = v4 ? (restrictionsDocument.medications || restrictionsDocument.items) : restrictionsDocument.items;
if (!Array.isArray(restrictionItems)) die('RESTRICTIONS_ITEMS_REQUIRED');
const opinion = v4 ? {
  lote: dataDocument.lot,
  scope: { ids: data.map((row) => row.ID) },
  final_consolidation: { final_sha256: dataDocument.clinical_content_sha256 },
} : opinionDocument;
const integrationReleased = v4
  ? restrictionItems.every((item) => item.states?.INTEGRACAO_TECNICA === 'LIBERADA')
  : restrictionsDocument.global?.INTEGRACAO_TECNICA === 'LIBERADA';
if (!integrationReleased && !ownerAuthorized) die('INTEGRATION_NOT_RELEASED');
const restrictionById = new Map(restrictionItems.map((item) => [item.id,item]));
const allow = JSON.parse(fs.readFileSync(safe('gateway/data/free60_allowlist.v2.json'),'utf8'));
const free = new Set(allow.ids);
if (free.size !== 60) die('FREE60_COUNT_INVALID');
const publicIds = new Set(fs.readdirSync(safe('public/data/drugs')).filter((x)=>x.endsWith('.json')).map((x)=>x.slice(0,-5)));
if (publicIds.size !== 60 || [...publicIds].some((id)=>!free.has(id))) die('R30_PUBLIC_BOUNDARY_INVALID');

const outputs = new Map();
const touchedIds = new Set();
for (const row of data) {
  const id = row.ID, restriction = restrictionById.get(id);
  if (!restriction || !opinion.scope.ids.includes(id)) die(`UNAUTHORIZED_ID:${id}`);
  if (Object.keys(row.CAMPOS_33||{}).length !== 33 || required.some((field)=>!Object.hasOwn(row.CAMPOS_33,field))) die(`FIELD_SCOPE_INVALID:${id}`);
  const sourceRel = restriction.source_executavel;
  const owner = executableOwner(restriction, sourceRel);
  const sourcePath = safe(sourceRel);
  const source = outputs.get(sourcePath)?.toString('utf8') ?? fs.readFileSync(sourcePath,'utf8');
  const start = `/* GOLD33_SELECTIVE:${id}:START */`, end = `/* GOLD33_SELECTIVE:${id}:END */`;
  const re = new RegExp(`${start.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}[\\s\\S]*?${end.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}\\n?`,'g');
  const pt={},es={}; for (const field of required) { const value=row.CAMPOS_33[field]; pt[field]=field==='references'?value:value.pt; es[field]=field==='references'?value:value.es; }
  const publicationAuthorized = restriction.states.PUBLICACAO === 'LIBERADA' || ownerAuthorized;
  const payload = { meta:{schema:'mc-gold-clinical-v1',lote:opinion.lote,requiredFieldCount:33,approvedSha256:opinion.final_consolidation.final_sha256,calculationAuthorized:false,publicationAuthorized,clinicalPackagePublicationState:restriction.states.PUBLICACAO,ownerPublicationAuthorization:ownerAuthorized?ownerAuthorization:null}, pt, es };
  const block = `${start}\n;(function(){var db=window.${owner},drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id===${JSON.stringify(id)};});if(matches.length!==1)throw new Error(${JSON.stringify(`GOLD33_CANONICAL_CARDINALITY:${id}:`)}+matches.length);drug=matches[0];}else{drug=db&&db[${JSON.stringify(id)}];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()===${JSON.stringify(id)};});if(keys.length>1)throw new Error(${JSON.stringify(`GOLD33_CANONICAL_CARDINALITY:${id}:`)}+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error(${JSON.stringify(`GOLD33_MISSING_CANONICAL:${id}`)});}drug.mcGoldClinicalV1=${JSON.stringify(payload,null,2)};})();\n${end}\n`;
  outputs.set(sourcePath, Buffer.from(source.replace(re,'').replace(/\s*$/,'\n') + block));

  const derivedPath=safe(restriction.derived_private_json), derived=JSON.parse(fs.readFileSync(derivedPath,'utf8'));
  derived.pt={...(derived.pt||{}),...pt}; derived.es={...(derived.es||{}),...es}; derived.name={pt:pt.name,es:es.name};
  derived.mc_gold_standard_v1={status:'PASS_CLINICAL_HOMOLOGATION',sourceOwner:sourceRel,sourceField:`${id}.mcGoldClinicalV1`,lote:opinion.lote,requiredFields:33,approvedSha256:opinion.final_consolidation.final_sha256,calculationAuthorized:false,publicationAuthorized,clinicalPackagePublicationState:restriction.states.PUBLICACAO,ownerPublicationAuthorization:ownerAuthorized?ownerAuthorization:null};
  const bytes=Buffer.from(JSON.stringify(derived,null,2)+'\n'); outputs.set(derivedPath,bytes);
  const shouldPublic=free.has(id)&&publicationAuthorized;
  if (shouldPublic) outputs.set(safe(`public/data/drugs/${id}.json`),bytes);
  if (!free.has(id) && fs.existsSync(safe(`public/data/drugs/${id}.json`))) die(`PREMIUM_PUBLIC_EXPOSURE:${id}`);
  touchedIds.add(id);
}

const plan=[...outputs].map(([file,bytes])=>({path:path.relative(root,file),sha256:sha(bytes),changed:!fs.existsSync(file)||!fs.readFileSync(file).equals(bytes)}));
if (!apply) { console.log(JSON.stringify({result:'DRY_RUN_PASS',ids:[...touchedIds],plan},null,2)); process.exit(0); }
if (!ownerAuthorized && !fs.existsSync(safe('.gold33-architecture-approved'))) die('ARCHITECTURE_REVIEW_REQUIRED');
const changed=plan.filter((x)=>x.changed), originals=new Map(), staged=[]; let writes=0;
try {
  for (const item of changed) { const target=safe(item.path); originals.set(target,fs.existsSync(target)?fs.readFileSync(target):null); const temp=path.join(path.dirname(target),`.gold33-${path.basename(target)}-${process.pid}.tmp`); fs.writeFileSync(temp,outputs.get(target)); staged.push([temp,target]); }
  for (const [temp,target] of staged) { fs.renameSync(temp,target); writes++; if(failAfter&&writes>=failAfter) throw new Error('SYNTHETIC_TRANSACTION_FAILURE'); }
} catch (error) {
  for (const [temp] of staged) if(fs.existsSync(temp)) fs.unlinkSync(temp);
  for (const [target,bytes] of originals) bytes===null ? (fs.existsSync(target)&&fs.unlinkSync(target)) : fs.writeFileSync(target,bytes);
  throw error;
}
console.log(JSON.stringify({result:'APPLY_PASS',ids:[...touchedIds],changed:changed.map((x)=>x.path)},null,2));
