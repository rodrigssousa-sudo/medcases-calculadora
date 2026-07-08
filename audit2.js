#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const DB_DIR = path.join(__dirname, 'database');

// ── Interaction index from interacoes.js ─────────────────────────────────────
const interacoesRaw = fs.readFileSync(path.join(DB_DIR,'interacoes.js'),'utf8');
const interacoesDrugSet = new Set();
for (const m of interacoesRaw.matchAll(/drug[12]\s*:\s*["']([^"']+)["']/g))
  interacoesDrugSet.add(m[1].toLowerCase().trim());
for (const m of interacoesRaw.matchAll(/["']([a-z][a-z0-9_]+)["']\s*:\s*\{/g))
  m[1].split('_').forEach(p => interacoesDrugSet.add(p.toLowerCase().trim()));

function hasInteraction(id) {
  const lo = id.toLowerCase().trim();
  if (interacoesDrugSet.has(lo)) return true;
  for (const d of interacoesDrugSet)
    if (lo.startsWith(d) || d.startsWith(lo)) return true;
  return false;
}

// ── Parse object-map module (cardio, psico, analg; 4-space indent) ────────────
// ── Parse object-map module (antimicro; 2-space indent) ──────────────────────
function parseObjectMap(filename, indentSpaces) {
  const src = fs.readFileSync(path.join(DB_DIR, filename), 'utf8');
  const lines = src.split('\n');
  const SKIP = new Set(['name','category','class','calculate','dose','doseKg',
    'commercialNames','presentation','mechanism','indications','administration',
    'renalAdjustment','hepaticAdjustment','commonAdverseEffects',
    'dangerousAdverseEffects','contraindications','safetyFlags','interactions',
    'safety','dilution','renalTable','pharmacokinetics','monitoring','pearls',
    'drugInteractions','pediatric','renal','hepatic','pregnancy','lactation',
    'doseAdulto','dosePediatrico','adulto','pediatrica','pediatricaMeningite',
    'adultoGrave','adultoPadrao','pediatricaPadrao','pediatricaGrave']);

  const prefix = ' '.repeat(indentSpaces);
  const drugs = [];
  let capturing = false, drugId = null, buffer = [], depth = 0;

  for (const line of lines) {
    if (!capturing) {
      // Match exactly: <indent><word_or_quoted_word>: {
      const m = line.match(/^(\s+)([\w"]+)\s*:\s*\{/);
      if (m && m[1] === prefix) {
        const id = m[2].replace(/"/g,'');
        if (!SKIP.has(id)) {
          capturing = true;
          drugId = id;
          buffer = [line];
          depth = 1 + (line.match(/\{/g)||[]).length - 1
                    - (line.match(/\}/g)||[]).length;
          continue;
        }
      }
    } else {
      buffer.push(line);
      depth += (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
      if (depth <= 0) {
        const blk = buffer.join('\n');
        // name.pt
        let name = drugId;
        const nm = blk.match(/name\s*:\s*\{[^}]*?pt\s*:\s*["'`]([^"'`\n]+)["'`]/s);
        if (nm) name = nm[1].trim();
        // category
        const cm = blk.match(/category\s*:\s*["'`]([^"'`]+)["'`]/);
        const cat = cm ? cm[1].trim() : 'unknown';
        // renal
        const renal = /renalAdj|renalNote_pt|renal\s*:|insuficienciaRenal|clcr\s*[<>]|fg\s*[<>]|clearance\s+\w|CrCl|renalAdjustment|renalTable/i.test(blk);

        drugs.push({ id: drugId, name, category: cat, renal, interaction: hasInteraction(drugId) });
        capturing = false; drugId = null; buffer = []; depth = 0;
      }
    }
  }
  return drugs;
}

// ── Parse array module ────────────────────────────────────────────────────────
function parseArray(filename) {
  const src = fs.readFileSync(path.join(DB_DIR, filename), 'utf8');
  const lines = src.split('\n');
  const drugs = [];
  let capturing = false, buffer = [], depth = 0;

  for (const line of lines) {
    if (!capturing) {
      if (/^\s*\{/.test(line) && !/window\./.test(line)) {
        capturing = true;
        buffer = [line];
        depth = (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
      }
    } else {
      buffer.push(line);
      depth += (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
      if (depth <= 0) {
        const blk = buffer.join('\n');
        const idm = blk.match(/\bid\s*:\s*["'`]([^"'`]+)["'`]/);
        if (idm) {
          const id = idm[1].trim();
          let name = id;
          const nm = blk.match(/name\s*:\s*\{[^}]*?pt\s*:\s*["'`]([^"'`\n]+)["'`]/s);
          if (nm) name = nm[1].trim();
          else {
            const ns = blk.match(/name\s*:\s*["'`]([^"'`\n]+)["'`]/);
            if (ns) name = ns[1].trim();
          }
          const cm = blk.match(/category\s*:\s*["'`]([^"'`]+)["'`]/);
          const catPtM = blk.match(/category\s*:\s*\{[^}]*?pt\s*:\s*["'`]([^"'`\n]+)["'`]/s);
          const cat = catPtM ? catPtM[1].trim() : (cm ? cm[1].trim() : 'unknown');
          const renal = /renalAdj|renalNote_pt|renal\s*:|insuficienciaRenal|clcr\s*[<>]|fg\s*[<>]|clearance\s+\w|CrCl|renalAdjustment|renalTable/i.test(blk);
          drugs.push({ id, name, category: cat, renal, interaction: hasInteraction(id) });
        }
        capturing = false; buffer = []; depth = 0;
      }
    }
  }
  return drugs;
}

// ── Parse infusoes (special key-array format) ─────────────────────────────────
function parseInfusoes() {
  const src = fs.readFileSync(path.join(DB_DIR,'infusoes.js'), 'utf8');
  const drugs = [];
  const seen = new Set();
  // Match: '  'DrugName': ['
  for (const m of src.matchAll(/^  '([^']+)':\s*\[/gm)) {
    const name = m[1].trim();
    if (seen.has(name)) continue;
    seen.add(name);
    const id = name.toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,'');
    const blockStart = src.indexOf(`'${name}': [`);
    const blockEnd   = src.indexOf("\n  ]", blockStart);
    const blk = blockStart >= 0 ? src.slice(blockStart, blockEnd + 10) : '';
    const renal = /renalNote_pt|renal\s*:/i.test(blk);
    drugs.push({ id, name, category: 'infusao_vasoativa', renal, interaction: hasInteraction(id) });
  }
  return drugs;
}

// ── Run all modules ───────────────────────────────────────────────────────────
const modules = {};

const cardioRaw = parseObjectMap('cardio.js', 4);
// Deduplicate cardio
const cardioDrugs = [];
const seenCardio = new Set();
for (const d of cardioRaw) {
  if (!seenCardio.has(d.id)) { seenCardio.add(d.id); cardioDrugs.push(d); }
}
modules['cardio.js'] = cardioDrugs;

modules['antimicrobianos.js'] = parseObjectMap('antimicrobianos.js', 2);
modules['psicofarmacos.js']   = parseObjectMap('psicofarmacos.js', 4);
modules['analgesicos.js']     = parseObjectMap('analgesicos.js', 4);
modules['infusoes.js']        = parseInfusoes();
modules['gastro.js']          = parseArray('gastro.js');
modules['gastro_imuno.js']    = parseArray('gastro_imuno.js');
modules['imuno_corticoide.js']= parseArray('imuno_corticoide.js');
modules['endocrino_glp1.js']  = parseArray('endocrino_glp1.js');

// Stubs
for (const s of ['anticoag.js','endocrino.js','nefro.js','neuro.js','obesidade.js','pneumo.js','psiquiatria.js','reumatologia.js'])
  modules[s] = [];

let total = 0;
for (const [f, arr] of Object.entries(modules)) total += arr.length;

// ── Output JSON ───────────────────────────────────────────────────────────────
const out = { grandTotal: total, modules: {} };
for (const [f, arr] of Object.entries(modules)) {
  out.modules[f] = { count: arr.length, drugs: arr };
}
fs.writeFileSync(path.join(__dirname, 'audit_result.json'), JSON.stringify(out, null, 2));
console.log('Written audit_result.json');
console.log('\n=== SUMMARY ===');
for (const [f, arr] of Object.entries(modules)) {
  console.log(`  ${f.padEnd(28)} → ${String(arr.length).padStart(3)} fármacos`);
}
console.log(`  ${'TOTAL GERAL'.padEnd(28)} → ${String(total).padStart(3)} fármacos`);
