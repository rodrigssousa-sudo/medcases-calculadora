#!/usr/bin/env node
/**
 * MedCases — Fase 4B: Enrichment-Preserving Export — Teste de integração
 *
 * Executa o export corrigido em cópias isoladas (/tmp) e valida os gates:
 *  baseline dinâmico preservado · hash parity integral · idempotência
 *  root/public parity · invalid enrichment ABORT · wrong drug ABORT
 *  novo drug sem JSON → comportamento normal
 *
 * Não toca no worktree real (usa sandbox temporário).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const REPO = path.resolve(__dirname, '..');
const results = [];
function check(name, cond, detail = '') {
  results.push({ name, pass: !!cond });
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '  :: ' + detail : ''}`);
}
function canon(o) {
  if (Array.isArray(o)) return '[' + o.map(canon).join(',') + ']';
  if (o && typeof o === 'object') return '{' + Object.keys(o).sort().map(k => JSON.stringify(k) + ':' + canon(o[k])).join(',') + '}';
  return JSON.stringify(o);
}
function h(o) { return crypto.createHash('sha256').update(canon(o)).digest('hex').slice(0, 16); }

function fileDigest(filePath) {
  return crypto
    .createHash('sha256')
    .update(fs.readFileSync(filePath))
    .digest('hex');
}

function treeDigest(root) {
  if (!fs.existsSync(root)) return 'MISSING';

  const rows = [];

  function walk(dir, base) {
    const entries = fs
      .readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {
      const absolute = path.join(dir, entry.name);
      const relative = path
        .relative(base, absolute)
        .split(path.sep)
        .join('/');

      if (entry.isDirectory()) {
        walk(absolute, base);
      } else if (entry.isFile()) {
        rows.push(
          relative + '\0' + fileDigest(absolute)
        );
      } else {
        throw new Error(
          `TEST_TREE_ENTRY_INVALID: ${absolute}`
        );
      }
    }
  }

  walk(root, root);

  return crypto
    .createHash('sha256')
    .update(rows.join('\n'))
    .digest('hex');
}

function managedParity(sb) {
  const data = path.join(sb, 'data');
  const pub = path.join(sb, 'public', 'data');

  return (
    treeDigest(path.join(data, 'drugs')) ===
      treeDigest(path.join(pub, 'drugs')) &&
    fileDigest(path.join(data, 'drugs_index.json')) ===
      fileDigest(path.join(pub, 'drugs_index.json')) &&
    fileDigest(path.join(data, 'manifest.json')) ===
      fileDigest(path.join(pub, 'manifest.json'))
  );
}
function makeSandbox() {
  const sb = fs.mkdtempSync(path.join(os.tmpdir(), 'mc-preserve-test-'));
  for (const d of ['database', 'config', 'scripts', 'data', 'public']) {
    fs.cpSync(path.join(REPO, d), path.join(sb, d), { recursive: true });
  }
  fs.copyFileSync(path.join(REPO, 'package.json'), path.join(sb, 'package.json'));
  return sb;
}
function runExport(sb) { return execFileSync('node', ['scripts/export-clinical-data.js'], { cwd: sb, stdio: 'pipe' }).toString(); }
function runExportExpectFail(sb) {
  try { runExport(sb); return null; }
  catch (e) { return (e.stdout || '').toString() + (e.stderr || '').toString(); }
}

// ── TEST 1/2/3: sandbox principal, baseline de enrichments dinâmico ──
const sb = makeSandbox();

const clinicalKnowledgePath =
  path.join(sb, 'data', 'clinical-knowledge');
const aiRootPath =
  path.join(sb, 'data', 'ai-drug-data');
const aiPublicPath =
  path.join(sb, 'public', 'data', 'ai-drug-data');

const clinicalKnowledgeBefore =
  treeDigest(clinicalKnowledgePath);
const aiRootBefore =
  treeDigest(aiRootPath);
const aiPublicBefore =
  treeDigest(aiPublicPath);

const rootOnlySentinel =
  path.join(
    sb,
    'data',
    '__unmanaged-root-only__',
    'sentinel.txt'
  );

const publicOnlySentinel =
  path.join(
    sb,
    'public',
    'data',
    '__unmanaged-public-only__',
    'sentinel.txt'
  );

fs.mkdirSync(
  path.dirname(rootOnlySentinel),
  { recursive: true }
);
fs.mkdirSync(
  path.dirname(publicOnlySentinel),
  { recursive: true }
);

fs.writeFileSync(
  rootOnlySentinel,
  'ROOT_ONLY_SENTINEL_V1',
  'utf8'
);
fs.writeFileSync(
  publicOnlySentinel,
  'PUBLIC_ONLY_SENTINEL_V1',
  'utf8'
);

const drugsDir = path.join(sb, 'data', 'drugs');
const drugFiles = fs.readdirSync(drugsDir).filter(f => f.endsWith('.json'));
const pre = new Map();
for (const f of drugFiles) {
  const j = JSON.parse(fs.readFileSync(path.join(drugsDir, f), 'utf8'));
  if (j.mc_clinical_enrichment_v1) pre.set(f, h(j.mc_clinical_enrichment_v1));
}
check(`PRE_ENRICHMENT_COUNT=${pre.size}`, pre.size > 0, String(pre.size));
runExport(sb);
let post = 0, lost = 0, newE = 0, mismatch = 0, parity = 0;
for (const f of fs.readdirSync(drugsDir).filter(x => x.endsWith('.json'))) {
  const j = JSON.parse(fs.readFileSync(path.join(drugsDir, f), 'utf8'));
  const e = j.mc_clinical_enrichment_v1;
  if (e !== undefined) {
    post++;
    const hh = h(e);
    if (pre.has(f)) { if (pre.get(f) === hh) parity++; else mismatch++; }
    else newE++;
  } else if (pre.has(f)) { lost++; }
}
check('POST_ENRICHMENT_COUNT_MATCHES_PRE', post === pre.size, post + '/' + pre.size);
check('LOST_ENRICHMENTS=0', lost === 0, String(lost));
check('UNEXPECTED_NEW_ENRICHMENTS=0', newE === 0, String(newE));
check('MISMATCHED_ENRICHMENTS=0', mismatch === 0, String(mismatch));
check('ENRICHMENT_HASH_PARITY=ALL_PRE', parity === pre.size, parity + '/' + pre.size);
check('NEW_SYNTHETIC_ENRICHMENTS=0', newE === 0);

check(
  'CLINICAL_KNOWLEDGE_PRESERVED=PASS',
  treeDigest(clinicalKnowledgePath) ===
    clinicalKnowledgeBefore
);

check(
  'CLINICAL_KNOWLEDGE_NOT_PUBLISHED=PASS',
  !fs.existsSync(
    path.join(
      sb,
      'public',
      'data',
      'clinical-knowledge'
    )
  )
);

check(
  'AI_DRUG_DATA_ROOT_PRESERVED=PASS',
  treeDigest(aiRootPath) === aiRootBefore
);

check(
  'AI_DRUG_DATA_PUBLIC_PRESERVED=PASS',
  treeDigest(aiPublicPath) === aiPublicBefore
);

check(
  'ROOT_ONLY_UNMANAGED_PRESERVED=PASS',
  fs.existsSync(rootOnlySentinel) &&
    fs.readFileSync(rootOnlySentinel, 'utf8') ===
      'ROOT_ONLY_SENTINEL_V1' &&
    !fs.existsSync(
      path.join(
        sb,
        'public',
        'data',
        '__unmanaged-root-only__'
      )
    )
);

check(
  'PUBLIC_ONLY_UNMANAGED_PRESERVED=PASS',
  fs.existsSync(publicOnlySentinel) &&
    fs.readFileSync(publicOnlySentinel, 'utf8') ===
      'PUBLIC_ONLY_SENTINEL_V1' &&
    !fs.existsSync(
      path.join(
        sb,
        'data',
        '__unmanaged-public-only__'
      )
    )
);

// ── TEST 4: idempotência ──
fs.cpSync(path.join(sb, 'data'), path.join(sb, 'data_run1'), { recursive: true });
runExport(sb);
const idemOut = execFileSync('diff', ['-rq', path.join(sb, 'data_run1'), path.join(sb, 'data')], { stdio: 'pipe' }).toString();
check('IDEMPOTENCE=RUN2_ZERO_DIFF', idemOut === '', idemOut.slice(0, 200));

// ── TEST 5: exporter-owned root/public parity only ──
check(
  'MANAGED_ROOT_PUBLIC_PARITY=PASS',
  managedParity(sb)
);

// ── TEST 7: invalid enrichment → ABORT (sandbox fresco, corrompe data+public) ──
const sb7 = makeSandbox();
const vPath7 = path.join(sb7, 'data', 'drugs', 'vancomicina.json');
const vPub7 = path.join(sb7, 'public', 'data', 'drugs', 'vancomicina.json');
const vOrig7 = fs.readFileSync(vPath7, 'utf8');
const vBad7 = JSON.parse(vOrig7);
vBad7.mc_clinical_enrichment_v1.sections = 'corrupt';
fs.writeFileSync(vPath7, JSON.stringify(vBad7));
fs.writeFileSync(vPub7, JSON.stringify(vBad7));
const abort7 = runExportExpectFail(sb7);
check('INVALID_ENRICHMENT_BLOCK=PASS', abort7 !== null && /CLINICAL_ENRICHMENT_PRESERVATION_ABORT/.test(abort7), (abort7 || '').slice(-160));

// ── TEST 8: wrong drug → ABORT (sandbox fresco) ──
const sb8 = makeSandbox();
const vPath8 = path.join(sb8, 'data', 'drugs', 'vancomicina.json');
const vPub8 = path.join(sb8, 'public', 'data', 'drugs', 'vancomicina.json');
const vOrig8 = fs.readFileSync(vPath8, 'utf8');
const vBad8 = JSON.parse(vOrig8);
vBad8.id = 'outromedicamento';
fs.writeFileSync(vPath8, JSON.stringify(vBad8));
fs.writeFileSync(vPub8, JSON.stringify(vBad8));
const abort8 = runExportExpectFail(sb8);
check('WRONG_DRUG_BLOCK=PASS', abort8 !== null && /CLINICAL_ENRICHMENT_PRESERVATION_ABORT/.test(abort8), (abort8 || '').slice(-160));

// ── TEST 9: novo drug sem JSON → normal (sandbox fresco) ──
const sb9 = makeSandbox();
const d9 = path.join(sb9, 'data', 'drugs');
const files9 = fs.readdirSync(d9).filter(f => f.endsWith('.json'));
const pre9 = new Set();
for (const f of files9) {
  const j = JSON.parse(fs.readFileSync(path.join(d9, f), 'utf8'));
  if (j.mc_clinical_enrichment_v1) pre9.add(f);
}
const noEnrich = files9.find(f => !pre9.has(f));
check('FOUND_DRUG_WITHOUT_ENRICHMENT', !!noEnrich, noEnrich);
if (noEnrich) {
  fs.rmSync(path.join(d9, noEnrich));
  fs.rmSync(path.join(sb9, 'public', 'data', 'drugs', noEnrich));
  runExport(sb9);
  const regen = JSON.parse(fs.readFileSync(path.join(d9, noEnrich), 'utf8'));
  check('NEW_DRUG_NO_ENRICHMENT=PASS', regen.mc_clinical_enrichment_v1 === undefined);
}

// ── resumo ──
const fails = results.filter(r => !r.pass);
console.log(`\nRESULTADO: ${fails.length === 0 ? 'TODOS_PASS' : 'HOUVE_FALHAS'} (${results.length - fails.length}/${results.length} PASS)`);
process.exit(fails.length === 0 ? 0 : 1);
