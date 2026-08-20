#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repo = path.resolve(__dirname, '..');

function fail(msg) {
  console.error(`ERRO: ${msg}`);
  process.exit(1);
}

function scanBalanced(text, start) {
  let depth = 0;
  let state = 'code';
  let quote = null;
  let esc = false;

  for (let i = start; i < text.length; i += 1) {
    const c = text[i];
    const n = text[i + 1] ?? '';

    if (state === 'line') {
      if (c === '\n') state = 'code';
      continue;
    }
    if (state === 'block') {
      if (c === '*' && n === '/') {
        state = 'code';
        i += 1;
      }
      continue;
    }
    if (state === 'string') {
      if (esc) {
        esc = false;
        continue;
      }
      if (c === '\\') {
        esc = true;
        continue;
      }
      if (c === quote) {
        state = 'code';
        quote = null;
      }
      continue;
    }

    if (c === '/' && n === '/') {
      state = 'line';
      i += 1;
      continue;
    }
    if (c === '/' && n === '*') {
      state = 'block';
      i += 1;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') {
      state = 'string';
      quote = c;
      continue;
    }

    if (c === '{') depth += 1;
    if (c === '}') {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }

  fail('registro clínico não balanceado');
}

function extractRecord(source) {
  const re = /["']ciclofosfamida["']\s*:\s*\{/gi;
  const candidates = [];

  for (const match of source.matchAll(re)) {
    const brace = source.indexOf('{', match.index);
    const end = scanBalanced(source, brace);
    const body = source.slice(brace, end);

    if (
      /\bname\s*:/.test(body) &&
      /\bdose\s*:/.test(body) &&
      /\brenalAdjustment\s*:/.test(body)
    ) {
      candidates.push(body);
    }
  }

  if (candidates.length !== 1) {
    fail(`registro Ciclofosfamida ambíguo: ${candidates.length}`);
  }

  return candidates[0];
}

const sourcePath = path.join(repo, 'database', 'analgesicos.js');
const drugPath = path.join(repo, 'data', 'drugs', 'ciclofosfamida.json');
const publicDrugPath = path.join(repo, 'public', 'data', 'drugs', 'ciclofosfamida.json');

if (!fs.existsSync(sourcePath)) fail('database/analgesicos.js ausente');
if (!fs.existsSync(drugPath)) fail('data/drugs/ciclofosfamida.json ausente');

const source = fs.readFileSync(sourcePath, 'utf8');
const recordExpr = extractRecord(source);

let rich;
try {
  rich = vm.runInNewContext(`(${recordExpr})`, Object.create(null), { timeout: 1000 });
} catch (error) {
  fail(`não foi possível avaliar registro Ciclofosfamida: ${error.message}`);
}

const doc = JSON.parse(fs.readFileSync(drugPath, 'utf8'));

if (doc.id !== 'ciclofosfamida') fail('id canônico divergente');
if (doc.sourceModule !== 'analgesicos.js') fail('sourceModule canônico divergente');
if (doc.schema !== 'legacy-v1') fail(`schema inesperado: ${doc.schema}`);

const mirroredFields = [
  'class',
  'indications',
  'commercialNames',
  'presentation',
  'mechanism',
  'dose',
  'administration',
  'renalAdjustment',
  'hepaticAdjustment',
  'commonAdverseEffects',
  'dangerousAdverseEffects',
  'contraindications',
  'safetyFlags',
];

for (const field of mirroredFields) {
  if (!(field in rich)) fail(`campo fonte ausente: ${field}`);
  doc[field] = JSON.parse(JSON.stringify(rich[field]));
}

doc.clinicalEnrichment = {
  status: 'enriched-from-source-module',
  sourceModule: 'analgesicos.js',
  doseOwnerPath: 'dose.adult.standard',
  references: [
    'KDIGO 2024 Lupus Nephritis',
    'KDIGO 2024 ANCA-Associated Vasculitis',
    'KDIGO 2021 Glomerular Diseases — anti-GBM',
  ],
};

const serialized = `${JSON.stringify(doc, null, 2)}\n`;

for (const token of [
  'Euro-Lupus',
  '500 a 1000 mg/m² IV 1 vez ao mês por 6 meses',
  '15 mg/kg nas semanas 0, 2, 4, 7, 10 e 13',
  'Doença anti-MBG (Goodpasture)',
  'Enfermedad anti-MBG (Goodpasture)',
]) {
  if (!serialized.includes(token)) fail(`token clínico ausente após mirror: ${token}`);
}

fs.writeFileSync(drugPath, serialized, 'utf8');
fs.mkdirSync(path.dirname(publicDrugPath), { recursive: true });
fs.writeFileSync(publicDrugPath, serialized, 'utf8');

const digest = crypto.createHash('sha256').update(serialized).digest('hex');
console.log('CLINICAL_SOURCE_MIRROR=PASS');
console.log('MIRRORED_DRUG=ciclofosfamida');
console.log(`MIRRORED_FIELDS=${mirroredFields.join(',')}`);
console.log(`CANONICAL_CICLOFOSFAMIDA_SHA256=${digest}`);
