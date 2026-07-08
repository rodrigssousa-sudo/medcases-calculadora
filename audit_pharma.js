#!/usr/bin/env node
/**
 * MedCases Pro — Pharmacopoeia Audit Script
 * Parses all database/ files, counts drugs, extracts names,
 * flags renal adjustment and interactions.
 */

const fs   = require('fs');
const path = require('path');

// ─── Load interacoes.js to build interaction index ───────────────────────────
const interacoesRaw = fs.readFileSync(path.join(__dirname, 'database/interacoes.js'), 'utf8');
// Extract all drug pairs mentioned  (drug1/drug2 fields)
const interacoesDrugSet = new Set();
const pairMatches = interacoesRaw.matchAll(/drug[12]:\s*["']([^"']+)["']/g);
for (const m of pairMatches) {
  interacoesDrugSet.add(m[1].toLowerCase().trim());
}
// Also match keys like "amiodarona_digoxina" at top level
const keyMatches = interacoesRaw.matchAll(/["']([a-z][a-z0-9_]+)["']\s*:\s*\{/g);
for (const m of keyMatches) {
  const parts = m[1].split('_');
  parts.forEach(p => interacoesDrugSet.add(p.toLowerCase().trim()));
}

function hasInteraction(drugId) {
  const id = drugId.toLowerCase().trim();
  if (interacoesDrugSet.has(id)) return true;
  // partial match (e.g. "nora_250" → "nora")
  for (const d of interacoesDrugSet) {
    if (id.startsWith(d) || d.startsWith(id)) return true;
  }
  return false;
}

// ─── Results container ────────────────────────────────────────────────────────
const results = {};   // { moduleName: { count, drugs: [ {id, name, category, renal, interaction} ] } }
let grandTotal = 0;

// ─── Helper: safe name extraction ────────────────────────────────────────────
function extractName(drugId, src) {
  // Try: name: { pt: "...", es: "..." }
  const mPt = src.match(new RegExp(`${escRe(drugId)}[^{]*\\{[^}]*name\\s*:\\s*\\{[^}]*pt\\s*:\\s*["'\`]([^"'\`]+)["'\`]`, 's'));
  if (mPt) return mPt[1].trim();
  return drugId; // fallback to ID
}

function escRe(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

// ─── MODULE 1: CARDIO (object-map schema) ─────────────────────────────────────
(function parseCardio() {
  const src = fs.readFileSync(path.join(__dirname, 'database/cardio.js'), 'utf8');
  // Keys of Object.assign(window.CARDIO_DRUGS_DB, { KEY: { ... } })
  // Pattern: starts at column 0-4, word chars, followed by `: {`
  const drugEntries = [];

  // Find all top-level keys: lines like "  keyName: {"
  // but NOT nested keys. Strategy: find Object.assign block, then extract top-level keys
  const assignStart = src.indexOf('Object.assign(window.CARDIO_DRUGS_DB,');
  if (assignStart < 0) { console.error('CARDIO: Object.assign not found'); return; }

  // Extract all  \n    drugKey: { patterns — 2/4 space indent at top of entry
  const keyRe = /\n {2,4}(\w+)\s*:\s*\{/g;
  let m;
  // We'll collect keys and their approximate positions
  const keys = [];
  const slice = src.slice(assignStart);
  while ((m = keyRe.exec(slice)) !== null) {
    keys.push({ key: m[1], pos: assignStart + m.index });
  }

  // Filter out likely nested keys by checking indent level
  // Use a simpler approach: scan for lines matching /^    \w+: \{/ (exactly 4 spaces) within the CARDIO_DRUGS_DB block
  const lines = src.split('\n');
  let inAssign = false;
  let braceDepth = 0;
  let entryId = null;
  let entryStart = -1;
  let entryLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inAssign && line.includes('Object.assign(window.CARDIO_DRUGS_DB,')) {
      inAssign = true;
      braceDepth = 1; // the outer { of Object.assign
      continue;
    }

    if (!inAssign) continue;

    // Track brace depth
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    // Top-level drug entry: depth=2 means we're directly inside Object.assign's object
    if (braceDepth === 2) {
      // look for a new key
      const keyMatch = line.match(/^\s{2,6}(\w+)\s*:\s*\{/);
      if (keyMatch) {
        if (entryId) {
          // finalize previous entry
          const src_entry = entryLines.join('\n');
          drugEntries.push({ id: entryId, src: src_entry });
        }
        entryId = keyMatch[1];
        entryLines = [line];
      }
    } else if (entryId) {
      entryLines.push(line);
    }

    if (braceDepth <= 1 && entryId) {
      const src_entry = entryLines.join('\n');
      drugEntries.push({ id: entryId, src: src_entry });
      entryId = null;
      entryLines = [];
    }

    if (braceDepth <= 0) { inAssign = false; break; }
  }

  const drugs = [];
  for (const entry of drugEntries) {
    // Extract name.pt
    const namePtMatch = entry.src.match(/name\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    const namePt = namePtMatch ? namePtMatch[1].trim() : entry.id;

    // Renal: check for renalAdj, renalNote, renal:, insuficienciaRenal, fg <, clcr <
    const renalKeywords = /renalAdj|renalNote|renal\s*:|insuficienciaRenal|clcr\s*<|fg\s*<|ajuste\s+renal|clearance|CrCl/i;
    const hasRenal = renalKeywords.test(entry.src);

    // Category
    const catMatch = entry.src.match(/category\s*:\s*['"`]([^'"`]+)['"`]/);
    const category = catMatch ? catMatch[1].trim() : 'cardio';

    drugs.push({
      id:          entry.id,
      name:        namePt,
      category,
      renal:       hasRenal,
      interaction: hasInteraction(entry.id)
    });
  }

  results['cardio.js'] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
})();

// ─── MODULE 2: ANTIMICROBIANOS (object-map schema) ────────────────────────────
(function parseAntimicro() {
  const src = fs.readFileSync(path.join(__dirname, 'database/antimicrobianos.js'), 'utf8');
  const assignStart = src.indexOf('Object.assign(window.ANTIMICROBIANOS_DRUGS_DB,');
  if (assignStart < 0) { console.error('ANTIMICRO: Object.assign not found'); return; }

  const lines = src.split('\n');
  let inAssign = false;
  let braceDepth = 0;
  let entryId = null;
  let entryLines = [];
  const drugEntries = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inAssign && line.includes('Object.assign(window.ANTIMICROBIANOS_DRUGS_DB,')) {
      inAssign = true;
      braceDepth = 1;
      continue;
    }

    if (!inAssign) continue;

    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    if (braceDepth === 2) {
      const keyMatch = line.match(/^\s{2,6}(\w+)\s*:\s*\{/);
      if (keyMatch) {
        if (entryId) drugEntries.push({ id: entryId, src: entryLines.join('\n') });
        entryId = keyMatch[1];
        entryLines = [line];
      }
    } else if (entryId) {
      entryLines.push(line);
    }

    if (braceDepth <= 1 && entryId) {
      drugEntries.push({ id: entryId, src: entryLines.join('\n') });
      entryId = null; entryLines = [];
    }
    if (braceDepth <= 0) { inAssign = false; break; }
  }

  const drugs = [];
  for (const entry of drugEntries) {
    const namePtMatch = entry.src.match(/name\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    const namePt = namePtMatch ? namePtMatch[1].trim() : entry.id;
    const renalKeywords = /renalAdj|renalNote|renal\s*:|insuficienciaRenal|clcr\s*<|fg\s*<|ajuste\s+renal|clearance|CrCl|renalDose|renalGroup/i;
    const hasRenal = renalKeywords.test(entry.src);
    const catMatch = entry.src.match(/category\s*:\s*['"`]([^'"`]+)['"`]/);
    const category = catMatch ? catMatch[1].trim() : 'atb';

    drugs.push({ id: entry.id, name: namePt, category, renal: hasRenal, interaction: hasInteraction(entry.id) });
  }

  results['antimicrobianos.js'] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
})();

// ─── MODULE 3: PSICOFARMACOS (object-map schema) ──────────────────────────────
(function parsePsico() {
  const src = fs.readFileSync(path.join(__dirname, 'database/psicofarmacos.js'), 'utf8');
  const assignStart = src.indexOf('Object.assign(window.PSICOFARMACOS_DRUGS_DB,');
  if (assignStart < 0) { console.error('PSICO: Object.assign not found'); return; }

  const lines = src.split('\n');
  let inAssign = false;
  let braceDepth = 0;
  let entryId = null;
  let entryLines = [];
  const drugEntries = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inAssign && line.includes('Object.assign(window.PSICOFARMACOS_DRUGS_DB,')) {
      inAssign = true;
      braceDepth = 1;
      continue;
    }

    if (!inAssign) continue;

    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    if (braceDepth === 2) {
      const keyMatch = line.match(/^\s{2,6}(\w+)\s*:\s*\{/);
      if (keyMatch) {
        if (entryId) drugEntries.push({ id: entryId, src: entryLines.join('\n') });
        entryId = keyMatch[1];
        entryLines = [line];
      }
    } else if (entryId) {
      entryLines.push(line);
    }

    if (braceDepth <= 1 && entryId) {
      drugEntries.push({ id: entryId, src: entryLines.join('\n') });
      entryId = null; entryLines = [];
    }
    if (braceDepth <= 0) { inAssign = false; break; }
  }

  const drugs = [];
  for (const entry of drugEntries) {
    const namePtMatch = entry.src.match(/name\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    const namePt = namePtMatch ? namePtMatch[1].trim() : entry.id;
    const renalKeywords = /renalAdj|renalNote|renal\s*:|insuficienciaRenal|clcr\s*<|fg\s*<|ajuste\s+renal|clearance|CrCl/i;
    const hasRenal = renalKeywords.test(entry.src);
    const catMatch = entry.src.match(/category\s*:\s*['"`]([^'"`]+)['"`]/);
    const category = catMatch ? catMatch[1].trim() : 'psicofarmacos';

    drugs.push({ id: entry.id, name: namePt, category, renal: hasRenal, interaction: hasInteraction(entry.id) });
  }

  results['psicofarmacos.js'] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
})();

// ─── MODULE 4: ANALGESICOS (object-map schema) ────────────────────────────────
(function parseAnalgesicos() {
  const src = fs.readFileSync(path.join(__dirname, 'database/analgesicos.js'), 'utf8');

  // Could be Object.assign OR window.ANALGESICOS_DRUGS_DB = { ... }
  let assignStart = src.indexOf('Object.assign(window.ANALGESICOS_DRUGS_DB,');
  const directAssign = src.indexOf('window.ANALGESICOS_DRUGS_DB =');

  const lines = src.split('\n');
  let inAssign = false;
  let braceDepth = 0;
  let entryId = null;
  let entryLines = [];
  const drugEntries = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inAssign && (
      line.includes('Object.assign(window.ANALGESICOS_DRUGS_DB,') ||
      (line.includes('window.ANALGESICOS_DRUGS_DB') && line.includes('= {'))
    )) {
      inAssign = true;
      braceDepth = 1;
      continue;
    }

    if (!inAssign) continue;

    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    if (braceDepth === 2) {
      const keyMatch = line.match(/^\s{2,6}(\w+)\s*:\s*\{/);
      if (keyMatch) {
        if (entryId) drugEntries.push({ id: entryId, src: entryLines.join('\n') });
        entryId = keyMatch[1];
        entryLines = [line];
      }
    } else if (entryId) {
      entryLines.push(line);
    }

    if (braceDepth <= 1 && entryId) {
      drugEntries.push({ id: entryId, src: entryLines.join('\n') });
      entryId = null; entryLines = [];
    }
    if (braceDepth <= 0) { inAssign = false; break; }
  }

  const drugs = [];
  for (const entry of drugEntries) {
    const namePtMatch = entry.src.match(/name\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    const namePt = namePtMatch ? namePtMatch[1].trim() : entry.id;
    const renalKeywords = /renalAdj|renalNote|renal\s*:|insuficienciaRenal|clcr\s*<|fg\s*<|ajuste\s+renal|clearance|CrCl|renalAdjustment/i;
    const hasRenal = renalKeywords.test(entry.src);
    const catMatch = entry.src.match(/category\s*:\s*['"`]([^'"`]+)['"`]/);
    const category = catMatch ? catMatch[1].trim() : 'analgesico';

    drugs.push({ id: entry.id, name: namePt, category, renal: hasRenal, interaction: hasInteraction(entry.id) });
  }

  results['analgesicos.js'] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
})();

// ─── ARRAY-SCHEMA MODULES ─────────────────────────────────────────────────────
function parseArrayModule(filename, dbVarName) {
  const src = fs.readFileSync(path.join(__dirname, 'database', filename), 'utf8');
  const lines = src.split('\n');
  const drugEntries = [];
  let inArray = false;
  let braceDepth = 0;
  let arrayBraceDepth = 0;
  let entryLines = [];
  let inEntry = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inArray && line.includes(`window.${dbVarName} = [`)) {
      inArray = true;
      continue;
    }
    if (!inArray) continue;

    // Track entry objects (depth 1 = array element)
    for (const ch of line) {
      if (ch === '{') braceDepth++;
      if (ch === '}') braceDepth--;
    }

    if (!inEntry && braceDepth === 1) {
      const openMatch = line.match(/^\s*\{/);
      if (openMatch) {
        inEntry = true;
        entryLines = [line];
      }
    } else if (inEntry) {
      entryLines.push(line);
      if (braceDepth === 0) {
        drugEntries.push(entryLines.join('\n'));
        inEntry = false;
        entryLines = [];
      }
    }

    if (!inEntry && line.trim() === '];') break;
  }

  const drugs = [];
  for (const entrySrc of drugEntries) {
    // Extract id
    const idMatch = entrySrc.match(/\bid\s*:\s*['"`]([^'"`]+)['"`]/);
    if (!idMatch) continue;
    const id = idMatch[1].trim();

    // Extract name.pt
    const namePtMatch = entrySrc.match(/name\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    // Fallback: name: 'Octreotide' (string)
    const nameStrMatch = entrySrc.match(/name\s*:\s*['"`]([^'"`]+)['"`]/);
    const namePt = namePtMatch ? namePtMatch[1].trim() : (nameStrMatch ? nameStrMatch[1].trim() : id);

    // Category
    const catMatch = entrySrc.match(/category\s*:\s*['"`]([^'"`]+)['"`]/);
    const catObjMatch = entrySrc.match(/category\s*:\s*\{[^}]*pt\s*:\s*['"`]([^'"`]+)['"`]/s);
    const category = catObjMatch ? catObjMatch[1].trim() : (catMatch ? catMatch[1].trim() : 'unknown');

    // Renal
    const renalKeywords = /renalAdj|renalNote|renal\s*:|insuficienciaRenal|clcr\s*<|fg\s*<|ajuste\s+renal|clearance|CrCl|renalAdjustment|renalTable/i;
    const hasRenal = renalKeywords.test(entrySrc);

    drugs.push({ id, name: namePt, category, renal: hasRenal, interaction: hasInteraction(id) });
  }

  results[filename] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
}

// ─── INFUSOES — special format ────────────────────────────────────────────────
(function parseInfusoes() {
  const src = fs.readFileSync(path.join(__dirname, 'database/infusoes.js'), 'utf8');
  // Format: 'DrugName': [ { id: 'xxx', ...}, {...} ]
  const keyRe = /^\s{0,4}'([^']+)'\s*:\s*\[/gm;
  let m;
  const drugNames = [];
  while ((m = keyRe.exec(src)) !== null) {
    drugNames.push(m[1]);
  }

  const drugs = [];
  for (const name of drugNames) {
    // Check renal notes inside the drug block
    // Find the block
    const blockStart = src.indexOf(`'${name}': [`);
    const blockEnd   = src.indexOf('\n  ]', blockStart);
    const block      = blockStart >= 0 ? src.slice(blockStart, blockEnd + 5) : '';
    const hasRenal   = /renalNote|renal\s*:|ajuste\s+renal|clearance/i.test(block);
    const id         = name.toLowerCase().replace(/\s+/g, '_');

    drugs.push({ id, name, category: 'infusao_vasoativa', renal: hasRenal, interaction: hasInteraction(id) });
  }

  results['infusoes.js'] = { count: drugs.length, drugs };
  grandTotal += drugs.length;
})();

// Parse array modules
parseArrayModule('gastro.js',          'GASTRO_DRUGS_DB');
parseArrayModule('gastro_imuno.js',    'GASTRO_IMUNO_DRUGS_DB');
parseArrayModule('imuno_corticoide.js','IMUNO_CORTICOIDE_DRUGS_DB');
parseArrayModule('endocrino_glp1.js',  'ENDOCRINO_GLP1_DRUGS_DB');

// ─── STUB MODULES (confirmed empty) ──────────────────────────────────────────
const stubs = ['anticoag.js','endocrino.js','nefro.js','neuro.js','obesidade.js','pneumo.js','psiquiatria.js','reumatologia.js'];
for (const s of stubs) {
  results[s] = { count: 0, drugs: [], stub: true };
}

// ─── PRESCRICOES — prescription templates (not drug entries) ─────────────────
results['prescricoes.js'] = { count: 0, drugs: [], note: 'Prescription templates — not a drug database' };
results['interacoes.js']  = { count: 0, drugs: [], note: 'Interaction pairs database — not a drug list' };

// ─── OUTPUT ───────────────────────────────────────────────────────────────────
console.log(JSON.stringify({ grandTotal, results }, null, 2));
