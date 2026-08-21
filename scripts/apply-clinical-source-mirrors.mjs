#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function fail(message) {
  console.error(`ERRO: ${message}`);
  process.exit(1);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value).sort().map((key) => [key, stable(value[key])]),
    );
  }
  return value;
}

function serialize(value) {
  return `${JSON.stringify(stable(value), null, 2)}\n`;
}

function scanBalanced(source, start) {
  let depth = 0;
  let state = 'code';
  let quote = null;
  let escaped = false;

  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    const next = source[i + 1] ?? '';

    if (state === 'line') {
      if (ch === '\n') state = 'code';
      continue;
    }
    if (state === 'block') {
      if (ch === '*' && next === '/') {
        state = 'code';
        i += 1;
      }
      continue;
    }
    if (state === 'string') {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        continue;
      }
      if (ch === quote) {
        state = 'code';
        quote = null;
      }
      continue;
    }

    if (ch === '/' && next === '/') {
      state = 'line';
      i += 1;
      continue;
    }
    if (ch === '/' && next === '*') {
      state = 'block';
      i += 1;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      state = 'string';
      quote = ch;
      continue;
    }
    if (ch === '{') depth += 1;
    if (ch === '}') {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }

  fail('registro clínico não balanceado');
}

function extractRecord(source, id, mode) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`["']?${escaped}["']?\\s*:\\s*\\{`, 'gi');
  const candidates = [];

  for (const match of source.matchAll(re)) {
    const brace = source.indexOf('{', match.index);
    const end = scanBalanced(source, brace);
    const body = source.slice(brace, end);
    const hasName = /\bname\s*:/.test(body);
    const hasClinicalOwner =
      mode === 'legacy'
        ? /\b(?:dose|indications|contraindications|mechanism)\s*:/.test(body)
        : /\bcalculate\s*(?::|\()/.test(body) && /\bclinicalEnrichment\s*:/.test(body);

    if (hasName && hasClinicalOwner) candidates.push(body);
  }

  if (candidates.length !== 1) {
    fail(`${id}: owner_count=${candidates.length}`);
  }
  return candidates[0];
}

function evaluateRecord(expr, id) {
  const context = {
    Math,
    Number,
    String,
    Boolean,
    Array,
    Object,
    JSON,
    Date,
    RegExp,
    parseFloat,
    parseInt,
    isNaN,
    Infinity,
    NaN,
    t: (lang, pt, es) =>
      String(lang ?? 'pt').toLowerCase().startsWith('es') ? es : pt,
    console: { log() {}, warn() {}, error() {} },
  };

  try {
    return vm.runInNewContext(`(${expr})`, context, { timeout: 1500 });
  } catch (error) {
    fail(`${id}: não foi possível avaliar owner: ${error.message}`);
  }
}

const specs = [
  {
    id: 'ciclofosfamida',
    source: 'database/analgesicos.js',
    sourceModule: 'analgesicos.js',
    schema: 'legacy-v1',
    mode: 'legacy',
  },
  {
    id: 'procainamida',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'atenolol',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'bisoprolol',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'carvedilol',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'dapagliflozina',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'acetazolamida',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'bumetanida',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'amilorida',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'candesartana',
    source: 'database/cardio.js',
    sourceModule: 'cardio.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
  {
    id: 'carbamazepina',
    source: 'database/neurologia.js',
    sourceModule: 'neurologia.js',
    schema: 'premium-v1',
    mode: 'enrichment',
  },
];

const legacyFields = [
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

const batchMirroredTopLevel = [
  'doseByIndication',
  'indications',
  'commonAdverseEffects',
  'dangerousAdverseEffects',
  'contraindications',
  'references',
  'doseOverride',
];

const mirrored = [];

for (const spec of specs) {
  const sourcePath = path.join(repo, spec.source);
  const drugPath = path.join(repo, 'data', 'drugs', `${spec.id}.json`);
  const publicDrugPath = path.join(repo, 'public', 'data', 'drugs', `${spec.id}.json`);

  if (!fs.existsSync(sourcePath)) fail(`${spec.id}: source ausente`);
  if (!fs.existsSync(drugPath)) fail(`${spec.id}: canonical ausente`);

  const source = fs.readFileSync(sourcePath, 'utf8');
  const expr = extractRecord(source, spec.id, spec.mode);
  const rich = evaluateRecord(expr, spec.id);
  const doc = JSON.parse(fs.readFileSync(drugPath, 'utf8'));

  if (doc.id !== spec.id) fail(`${spec.id}: id canônico divergente`);
  if (doc.sourceModule !== spec.sourceModule) {
    fail(`${spec.id}: sourceModule divergente: ${String(doc.sourceModule)}`);
  }
  if (doc.schema !== spec.schema) {
    fail(`${spec.id}: schema inesperado: ${String(doc.schema)}`);
  }

  if (spec.mode === 'legacy') {
    for (const field of legacyFields) {
      if (!(field in rich)) fail(`${spec.id}: campo fonte ausente: ${field}`);
      doc[field] = clone(rich[field]);
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
  } else {
    const ce = rich.clinicalEnrichment;
    if (!ce || typeof ce !== 'object') {
      fail(`${spec.id}: clinicalEnrichment ausente no owner`);
    }
    if (!ce.doseByIndication) {
      fail(`${spec.id}: clinicalEnrichment.doseByIndication ausente`);
    }

    doc.clinicalEnrichment = clone(ce);

    for (const field of batchMirroredTopLevel) {
      if (ce[field] !== undefined) {
        doc[field] = clone(ce[field]);
      } else if (field === 'indications' && rich.indications !== undefined) {
        doc[field] = clone(rich.indications);
      }
    }
  }

  const text = serialize(doc);
  fs.writeFileSync(drugPath, text, 'utf8');
  fs.mkdirSync(path.dirname(publicDrugPath), { recursive: true });
  fs.writeFileSync(publicDrugPath, text, 'utf8');

  const digest = crypto.createHash('sha256').update(text).digest('hex');
  mirrored.push({ id: spec.id, schema: spec.schema, sourceModule: spec.sourceModule, sha256: digest });
  console.log(`MIRRORED_DRUG=${spec.id}`);
  console.log(`MIRRORED_SCHEMA=${spec.schema}`);
  console.log(`MIRRORED_SHA256=${digest}`);
}

console.log('CLINICAL_SOURCE_MIRROR=PASS');
console.log(`MIRRORED_DRUG_COUNT=${mirrored.length}`);
console.log(`BATCH1_MIRRORED_COUNT=${mirrored.filter((x) => x.schema === 'premium-v1').length}`);
