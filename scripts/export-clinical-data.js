#!/usr/bin/env node
/* ================================================================
   MedCases Pro — Clinical Data Export Pipeline v1.0
   ----------------------------------------------------------------
   RESPONSABILIDADE:
     Lê a base farmacológica real (database/*.js), executa
     calculate(paciente, lang) para PT e ES, e gera JSONs
     estruturados bilíngues em /data/.

   SAÍDA:
     /data/drugs/{id}.json       — dados completos por fármaco
     /data/drugs_index.json      — índice leve (id, nome, cat, icon, keywords)
     /data/manifest.json         — meta: versão, contagens, endpoints

   EXECUÇÃO:
     node scripts/export-clinical-data.js
     npm run export:data

   IMPORTANTE:
     - Não altera NENHUM arquivo do app (index.html, css, js)
     - Não roda no navegador do usuário
     - Apenas lê e gera — zero side-effects na UI
     - Os arquivos database/*.js usam window.X → simulamos window
       via vm.Script + contexto isolado

   PACIENTES PADRÃO USADOS:
     adulto    → peso:70 idade:40 clcr:90
     pediatria → peso:25 idade:8  clcr:110
     gestante  → peso:68 idade:28 gestante:true clcr:105
     idoso     → peso:65 idade:72 clcr:45
     renal     → peso:70 idade:55 clcr:18

   v1.0: apenas paciente adulto padrão (futuros via --profile flag)
================================================================ */

'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

/* ── Caminhos ── */
const ROOT        = path.resolve(__dirname, '..');
const DB_DIR      = path.join(ROOT, 'database');
const OUT_DIR     = path.join(ROOT, 'data');
const OUT_DRUGS   = path.join(OUT_DIR, 'drugs');

/* ── Paciente padrão adulto ── */
const PACIENTE_ADULTO = {
  peso:       70,
  idade:      40,
  gestante:   false,
  lactante:   false,
  clcr:       90,
  fg:         90,
  sexo:       'M',
  altura:     170,
  hepatopatia: false,
  qtLongo:    false,
  miastenia:  false,
};

/* ── Pacientes futuros (v2) — exportados mas não usados nesta versão ── */
const PACIENTE_PEDIATRIA = {
  peso: 25, idade: 8, gestante: false, lactante: false,
  clcr: 110, fg: 110, sexo: 'M', altura: 128,
  hepatopatia: false, qtLongo: false, miastenia: false,
};
const PACIENTE_GESTANTE = {
  peso: 68, idade: 28, gestante: true, lactante: false,
  clcr: 105, fg: 105, sexo: 'F', altura: 163,
  hepatopatia: false, qtLongo: false, miastenia: false,
};
const PACIENTE_IDOSO = {
  peso: 65, idade: 72, gestante: false, lactante: false,
  clcr: 45, fg: 45, sexo: 'M', altura: 168,
  hepatopatia: false, qtLongo: false, miastenia: false,
};
const PACIENTE_RENAL = {
  peso: 70, idade: 55, gestante: false, lactante: false,
  clcr: 18, fg: 18, sexo: 'M', altura: 172,
  hepatopatia: false, qtLongo: false, miastenia: false,
};

/* ================================================================
   MAPA DE MÓDULOS DA BASE
   Cada entrada define:
     file      → arquivo em database/
     globalVar → variável que o arquivo injeta em window
     type      → 'object' (chave:drug) | 'array' (lista de drugs)
================================================================ */
const DB_MODULES = [
  {
    file:      'cardio.js',
    globalVar: 'CARDIO_DRUGS_DB',
    type:      'object',
    label:     'Cardiovascular',
  },
  {
    file:      'antimicrobianos.js',
    globalVar: 'ANTIMICROBIANOS_DRUGS_DB',
    type:      'object',
    label:     'Antimicrobianos',
  },
  {
    file:      'psicofarmacos.js',
    globalVar: 'PSICOFARMACOS_DRUGS_DB',
    type:      'object',
    label:     'Psicofármacos',
  },
  {
    file:      'analgesicos.js',
    globalVar: 'ANALGESICOS_DRUGS_DB',
    type:      'array',
    label:     'Analgésicos',
  },
  {
    file:      'anticoag.js',
    globalVar: 'ANTICOAG_DRUGS_DB',
    type:      'array',
    label:     'Anticoagulantes',
  },
  {
    file:      'endocrino.js',
    globalVar: 'ENDOCRINO_DRUGS_DB',
    type:      'array',
    label:     'Endocrinologia',
  },
  {
    file:      'gastro.js',
    globalVar: 'GASTRO_DRUGS_DB',
    type:      'array',
    label:     'Gastroenterologia',
  },
  {
    file:      'infusoes.js',
    globalVar: 'INFUSOES_DRUGS_DB',
    type:      'array',
    label:     'Infusões',
  },
  {
    file:      'nefro.js',
    globalVar: 'NEFRO_DRUGS_DB',
    type:      'array',
    label:     'Nefrologia',
  },
  {
    file:      'neuro.js',
    globalVar: 'NEURO_DRUGS_DB',
    type:      'array',
    label:     'Neurologia',
  },
  {
    file:      'obesidade.js',
    globalVar: 'OBESIDADE_DRUGS_DB',
    type:      'array',
    label:     'Obesidade',
  },
  {
    file:      'pneumo.js',
    globalVar: 'PNEUMO_DRUGS_DB',
    type:      'array',
    label:     'Pneumologia',
  },
  {
    file:      'reumatologia.js',
    globalVar: 'REUMATOLOGIA_DRUGS_DB',
    type:      'array',
    label:     'Reumatologia',
  },
  {
    file:      'psiquiatria.js',
    globalVar: 'PSIQUIATRIA_DRUGS_DB',
    type:      'array',
    label:     'Psiquiatria',
  },
];

/* ================================================================
   MÓDULO DE INTERAÇÕES — tratado separadamente
================================================================ */
const INTERACOES_MODULE = {
  file:      'interacoes.js',
  globalVar: 'INTERACOES_DB',
  label:     'Interações',
};

/* ================================================================
   UTIL: carregar um database/*.js em contexto vm isolado
   Retorna o objeto window simulado após execução do script.
   Cada arquivo usa `window.X = ...`, então simulamos window.
================================================================ */
function loadDatabaseFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');

  /* Contexto sandbox: window aponta para o próprio sandbox,
     assim window.FOO = x fica acessível como sandbox.FOO */
  const sandbox = { window: {}, console };
  sandbox.window = sandbox; /* window.X === sandbox.X */

  try {
    const script = new vm.Script(src, { filename: path.basename(filePath) });
    const ctx    = vm.createContext(sandbox);
    script.runInContext(ctx);
  } catch (err) {
    /* Erros de sintaxe ou referências a globals do browser */
    console.error(`  ⚠️  Erro ao carregar ${path.basename(filePath)}: ${err.message}`);
  }

  return sandbox;
}

/* ================================================================
   UTIL: extrair dados de um fármaco com schema PREMIUM
   (calculate(paciente, lang) → objeto de resultado)
================================================================ */
function extractDrug(id, drug, moduleMeta) {
  /* Garante que o fármaco tem a função calculate */
  if (typeof drug.calculate !== 'function') {
    /* Schema legado (array-based) — retorna estrutura básica */
    return buildLegacyDrug(id, drug, moduleMeta);
  }

  let resultPT, resultES;

  try {
    resultPT = drug.calculate(PACIENTE_ADULTO, 'pt');
  } catch (e) {
    console.warn(`    ⚠️  calculate('pt') falhou para ${id}: ${e.message}`);
    resultPT = null;
  }

  try {
    resultES = drug.calculate(PACIENTE_ADULTO, 'es');
  } catch (e) {
    console.warn(`    ⚠️  calculate('es') falhou para ${id}: ${e.message}`);
    resultES = null;
  }

  /* Extrai keywords do nome + commercialNames */
  const keywords = buildKeywords(id, drug, resultPT);

  return {
    id,
    category:   drug.category  || moduleMeta.label.toLowerCase(),
    icon:       drug.icon       || '💊',
    color:      drug.color      || null,
    colorTxt:   drug.colorTxt   || null,

    /* Dados bilíngues completos */
    pt: resultPT ? sanitizeResult(resultPT) : null,
    es: resultES ? sanitizeResult(resultES) : null,

    /* Nome canônico bilíngue (para índice) */
    name: {
      pt: (drug.name && drug.name.pt) || (resultPT && resultPT.name) || id,
      es: (drug.name && drug.name.es) || (resultES && resultES.name) || id,
    },

    keywords,
    updatedAt: new Date().toISOString(),
    source:    'medcases-calculadora',
    schema:    'premium-v1',
  };
}

/* ================================================================
   UTIL: fármacos com schema legado (sem calculate())
   Tenta normalizar para o formato de saída esperado.
================================================================ */
function buildLegacyDrug(id, drug, moduleMeta) {
  /* Schema legado usa dose() em vez de calculate() */
  let dosePT = null, doseES = null;
  if (typeof drug.dose === 'function') {
    try { dosePT = drug.dose(PACIENTE_ADULTO, 'pt'); } catch (e) {}
    try { doseES = drug.dose(PACIENTE_ADULTO, 'es'); } catch (e) {}
  }

  const namePT = (drug.name && (typeof drug.name === 'string' ? drug.name : drug.name.pt)) || id;
  const nameES = (drug.name && (typeof drug.name === 'object' && drug.name.es)) || namePT;

  const keywords = buildKeywordsLegacy(id, drug);

  return {
    id,
    category:  drug.category  || moduleMeta.label.toLowerCase(),
    icon:      drug.icon       || '💊',
    color:     drug.color      || null,
    colorTxt:  drug.colorTxt   || null,

    pt: dosePT ? { name: namePT, doseResult: dosePT } : { name: namePT },
    es: doseES ? { name: nameES, doseResult: doseES } : { name: nameES },

    name: { pt: namePT, es: nameES },

    keywords,
    updatedAt: new Date().toISOString(),
    source:    'medcases-calculadora',
    schema:    'legacy-v1',
  };
}

/* ================================================================
   UTIL: sanitizar resultado do calculate() — remove funções,
   converte undefined → null, circular refs → string.
   Garante JSON.stringify seguro.
================================================================ */
function sanitizeResult(obj) {
  if (obj === null || obj === undefined) return null;

  try {
    /* JSON.stringify + parse é o método mais robusto para:
       - remover funções
       - detectar circular refs (vai lançar erro)
       - converter undefined → remove a chave */
    return JSON.parse(JSON.stringify(obj, replacer));
  } catch (e) {
    /* Fallback: iterar manualmente */
    const out = {};
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      if (typeof val === 'function') continue;
      if (typeof val === 'object' && val !== null) {
        try {
          out[key] = JSON.parse(JSON.stringify(val, replacer));
        } catch {
          out[key] = String(val);
        }
      } else {
        out[key] = val;
      }
    }
    return out;
  }
}

/* Replacer: remove funções, converte undefined → null */
function replacer(key, val) {
  if (typeof val === 'function') return undefined;
  if (typeof val === 'undefined') return null;
  return val;
}

/* ================================================================
   UTIL: construir array de keywords para busca full-text
================================================================ */
function buildKeywords(id, drug, resultPT) {
  const kw = new Set();

  /* ID normalizado */
  kw.add(id.toLowerCase());

  /* Nome */
  if (drug.name) {
    if (drug.name.pt) kw.add(drug.name.pt.toLowerCase());
    if (drug.name.es) kw.add(drug.name.es.toLowerCase());
  }

  /* commercialNames do resultado PT */
  if (resultPT && resultPT.commercialNames) {
    const cn = resultPT.commercialNames;
    if (Array.isArray(cn.br)) cn.br.forEach(n => kw.add(n.toLowerCase()));
    if (Array.isArray(cn.ar)) cn.ar.forEach(n => kw.add(n.toLowerCase()));
    if (Array.isArray(cn.us)) cn.us.forEach(n => kw.add(n.toLowerCase()));
  }

  /* Classe farmacológica */
  if (resultPT && resultPT.class) {
    kw.add(resultPT.class.toLowerCase());
  }

  /* Remove keywords muito curtas (< 2 chars) ou com caracteres estranhos */
  return [...kw]
    .filter(k => k.length >= 2)
    .map(k => k.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim())
    .filter(Boolean)
    .slice(0, 20); /* limite de 20 keywords por fármaco */
}

function buildKeywordsLegacy(id, drug) {
  const kw = new Set();
  kw.add(id.toLowerCase());
  if (drug.name) {
    const n = typeof drug.name === 'string' ? drug.name : drug.name.pt || '';
    if (n) kw.add(n.toLowerCase());
  }
  return [...kw].filter(k => k.length >= 2);
}

/* ================================================================
   UTIL: construir entrada do índice leve (drugs_index)
================================================================ */
function buildIndexEntry(drugJson) {
  return {
    id:       drugJson.id,
    name:     drugJson.name,
    category: drugJson.category,
    icon:     drugJson.icon,
    keywords: drugJson.keywords || [],
    schema:   drugJson.schema,
  };
}

/* ================================================================
   CARREGAR INTERAÇÕES — conta pares registrados
================================================================ */
function loadInteracoes() {
  const filePath = path.join(DB_DIR, INTERACOES_MODULE.file);
  if (!fs.existsSync(filePath)) return { count: 0 };

  const sandbox = loadDatabaseFile(filePath);
  const db = sandbox.INTERACOES_DB || sandbox[INTERACOES_MODULE.globalVar];

  if (!db || typeof db !== 'object') return { count: 0 };

  /* Contar pares de interações */
  let count = 0;
  for (const drugA of Object.keys(db)) {
    const targets = db[drugA];
    if (targets && typeof targets === 'object') {
      count += Object.keys(targets).length;
    }
  }

  return { count };
}

/* ================================================================
   MAIN — pipeline principal de exportação
================================================================ */
async function main() {
  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log('║  MedCases Pro — Clinical Data Export Pipeline v1.0  ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');

  const startTime = Date.now();

  /* ── 1. Criar diretórios de saída ── */
  if (!fs.existsSync(OUT_DIR))   fs.mkdirSync(OUT_DIR,   { recursive: true });
  if (!fs.existsSync(OUT_DRUGS)) fs.mkdirSync(OUT_DRUGS, { recursive: true });
  console.log(`📁 Diretórios de saída: ${OUT_DIR}`);

  /* ── 2. Processar cada módulo ── */
  const drugsIndex  = [];   /* índice leve */
  const allIds      = [];   /* todos os IDs processados */
  let totalDrugs    = 0;
  let totalErrors   = 0;
  const moduleStats = [];

  for (const mod of DB_MODULES) {
    const filePath = path.join(DB_DIR, mod.file);

    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠️  Arquivo não encontrado: ${mod.file} — pulando`);
      continue;
    }

    process.stdout.write(`\n📦 Processando: ${mod.label} (${mod.file})...`);

    /* Carregar o arquivo no contexto vm */
    const sandbox = loadDatabaseFile(filePath);
    const rawDB   = sandbox[mod.globalVar];

    if (!rawDB) {
      console.log(` ❌ ${mod.globalVar} não encontrado no contexto`);
      totalErrors++;
      continue;
    }

    /* Converter para lista de entries {id, drug} */
    let entries = [];

    if (mod.type === 'object') {
      /* { metoprolol: {...}, atenolol: {...}, ... } */
      if (typeof rawDB === 'object' && !Array.isArray(rawDB)) {
        entries = Object.entries(rawDB).map(([id, drug]) => ({ id, drug }));
      }
    } else {
      /* Array de objetos com .id ou .name */
      if (Array.isArray(rawDB) && rawDB.length > 0) {
        entries = rawDB.map((drug, i) => ({
          id:   drug.id || (drug.name && typeof drug.name === 'string'
                  ? drug.name.toLowerCase().replace(/\s+/g, '_')
                  : `${mod.globalVar.toLowerCase()}_${i}`),
          drug,
        }));
      } else {
        /* Array vazio — módulo ainda não implementado */
        console.log(` ⏭️  Array vazio (módulo em desenvolvimento)`);
        moduleStats.push({ module: mod.label, count: 0, status: 'empty' });
        continue;
      }
    }

    if (entries.length === 0) {
      console.log(` ⏭️  Nenhuma entrada encontrada`);
      moduleStats.push({ module: mod.label, count: 0, status: 'empty' });
      continue;
    }

    console.log(` ${entries.length} fármacos`);

    /* Processar cada fármaco */
    let modCount = 0;
    let modErrors = 0;

    for (const { id, drug } of entries) {
      /* Sanitizar ID: só letras, números, underscore, hífen */
      const safeId = id
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9_-]/g, '_')
        .replace(/__+/g, '_')
        .replace(/^_|_$/g, '');

      if (!safeId) {
        console.warn(`    ⚠️  ID inválido para fármaco em ${mod.file}, pulando`);
        modErrors++;
        continue;
      }

      try {
        const drugJson = extractDrug(safeId, drug, mod);

        /* Escrever /data/drugs/{id}.json */
        const outPath = path.join(OUT_DRUGS, `${safeId}.json`);
        fs.writeFileSync(outPath, JSON.stringify(drugJson, null, 2), 'utf8');

        /* Adicionar ao índice leve */
        drugsIndex.push(buildIndexEntry(drugJson));
        allIds.push(safeId);
        modCount++;
        totalDrugs++;

        process.stdout.write('.');
      } catch (err) {
        console.warn(`\n    ❌ Erro ao exportar ${safeId}: ${err.message}`);
        modErrors++;
        totalErrors++;
      }
    }

    console.log(`\n   ✅ ${modCount} exportados${modErrors > 0 ? `, ${modErrors} erros` : ''}`);
    moduleStats.push({
      module: mod.label,
      count:  modCount,
      errors: modErrors,
      status: modErrors === 0 ? 'ok' : 'partial',
    });
  }

  /* ── 3. Carregar contagem de interações ── */
  process.stdout.write('\n📊 Contando interações...');
  const interacoes = loadInteracoes();
  console.log(` ${interacoes.count} pares registrados`);

  /* ── 4. Escrever drugs_index.json ── */
  /* Ordenar por categoria depois por nome PT */
  drugsIndex.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return  1;
    const nameA = (a.name && a.name.pt) || a.id;
    const nameB = (b.name && b.name.pt) || b.id;
    return nameA.localeCompare(nameB, 'pt-BR');
  });

  const indexPath = path.join(OUT_DIR, 'drugs_index.json');
  fs.writeFileSync(indexPath, JSON.stringify(drugsIndex, null, 2), 'utf8');
  console.log(`\n📋 Índice gerado: drugs_index.json (${drugsIndex.length} entradas)`);

  /* ── 5. Escrever manifest.json ── */
  const manifest = {
    version:      'clinical-data-v1',
    generatedAt:  new Date().toISOString(),
    generatedBy:  'scripts/export-clinical-data.js',
    drugCount:     totalDrugs,
    interactionCount: interacoes.count,
    exportErrors:  totalErrors,
    modules:       moduleStats,
    pacientesPadrao: {
      adulto:    PACIENTE_ADULTO,
      pediatria: PACIENTE_PEDIATRIA,
      gestante:  PACIENTE_GESTANTE,
      idoso:     PACIENTE_IDOSO,
      renal:     PACIENTE_RENAL,
    },
    endpoints: {
      drugsIndex:  '/data/drugs_index.json',
      drugById:    '/data/drugs/{id}.json',
      manifest:    '/data/manifest.json',
    },
    schema: {
      version:     'premium-v1',
      langs:       ['pt', 'es'],
      requiredFields: [
        'id', 'category', 'icon', 'pt', 'es', 'name', 'keywords',
        'updatedAt', 'source',
      ],
    },
  };

  const manifestPath = path.join(OUT_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`📄 Manifest gerado: manifest.json`);

  /* ── 6. Relatório final ── */
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log('║                  RELATÓRIO FINAL                    ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  ✅ Fármacos exportados : ${String(totalDrugs).padStart(6)}                    ║`);
  console.log(`║  🔗 Interações mapeadas : ${String(interacoes.count).padStart(6)}                    ║`);
  console.log(`║  ❌ Erros encontrados   : ${String(totalErrors).padStart(6)}                    ║`);
  console.log(`║  ⏱️  Tempo de execução  : ${String(elapsed + 's').padStart(6)}                    ║`);
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  📁 Saída: ${OUT_DIR.replace(ROOT, '.').padEnd(43)}║`);
  console.log('╚══════════════════════════════════════════════════════╝');

  console.log('\n📌 Arquivos gerados:');
  console.log(`   ./data/manifest.json`);
  console.log(`   ./data/drugs_index.json`);
  console.log(`   ./data/drugs/ (${totalDrugs} arquivos JSON)`);

  console.log('\n🔍 Verificação rápida (após deploy):');
  console.log('   https://medcasescalcu.com/data/manifest.json');
  console.log('   https://medcasescalcu.com/data/drugs_index.json');
  console.log('   https://medcasescalcu.com/data/drugs/metoprolol.json');

  if (totalErrors > 0) {
    console.warn(`\n⚠️  ${totalErrors} erro(s) durante a exportação. Verifique o log acima.`);
    process.exit(1);
  } else {
    console.log('\n✅ Exportação concluída sem erros.\n');
    process.exit(0);
  }
}

/* ── Executar ── */
main().catch(err => {
  console.error('\n❌ Erro fatal no pipeline:', err);
  process.exit(1);
});

