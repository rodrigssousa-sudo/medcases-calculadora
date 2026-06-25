#!/usr/bin/env node
/* ================================================================
   MedCases Pro — Offline Manifest Generator v1.0
   ----------------------------------------------------------------
   RESPONSABILIDADE:
     Varre recursivamente a árvore do projeto e gera
     manifest-offline.json — a lista canônica de todos os arquivos
     que o Flutter Smart Offline Engine deve cachear.

   SAÍDA:
     /manifest-offline.json

   FORMATO:
     {
       "version": "240",
       "updatedAt": "2025-...",
       "baseUrl": "https://medcasescalcu.com/",
       "files": [
         "index.html",
         "sw.js",
         "css/medcases-ux-v2.css",
         "js/medcases-ux-v2.js",
         "database/cardio.js",
         ...
       ]
     }

   REGRAS DE INCLUSÃO / EXCLUSÃO:
     ✅ INCLUÍDOS:
       - index.html (raiz)
       - sw.js (raiz)
       - css/**  (todos os arquivos CSS)
       - js/**   (todos os arquivos JS)
       - database/** (banco de dados clínico — COMPLETO)
       - data/**  (JSONs gerados por export-clinical-data.js)
       - assets/** (se existir)
       - images/** (se existir)
       - icons/**  (se existir)
       - fonts/**  (se existir)

     ❌ EXCLUÍDOS:
       - .git/
       - node_modules/
       - public/
       - scripts/      (ferramentas de build — não necessário offline)
       - *.md          (documentação)
       - *.sh          (deploy scripts)
       - package.json  (metadado npm)
       - package-lock.json
       - .DS_Store
       - .gitkeep
       - .gitignore
       - Thumbs.db
       - manifest-offline.json (auto-referência)
       - deploy.sh

   PATHS:
     CORRETO:   "css/arquivo.css"
     CORRETO:   "js/arquivo.js"
     CORRETO:   "database/arquivo.js"
     INCORRETO: "/css/arquivo.css"
     INCORRETO: "https://medcasescalcu.com/css/arquivo.css"

   EXECUÇÃO:
     node scripts/generate-offline-manifest.js

   NÃO ALTERA:
     - Lógica clínica
     - Doses / fórmulas
     - Banco de fármacos
     - Interações
     - index.html
     - qualquer arquivo do app

================================================================ */

'use strict';

const fs   = require('fs');
const path = require('path');

/* ── Configuração ── */
const ROOT        = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT, 'manifest-offline.json');
const BASE_URL    = 'https://medcasescalcu.com/';
const VERSION     = '240';

/* ── Diretórios varridos recursivamente ── */
const SCAN_DIRS = [
  'css',
  'js',
  'database',
  'data',
  'assets',
  'images',
  'icons',
  'fonts',
];

/* ── Arquivos raiz incluídos diretamente ── */
const ROOT_FILES = [
  'index.html',
  'sw.js',
];

/* ── Extensões de arquivo aceitas ── */
const ALLOWED_EXTENSIONS = new Set([
  '.html', '.css', '.js', '.json',
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif',
  '.woff', '.woff2', '.ttf', '.otf', '.eot',
  '.ico', '.xml', '.txt',
]);

/* ── Padrões de arquivo/diretório excluídos ── */
const EXCLUDED_NAMES = new Set([
  '.git',
  '.github',
  'node_modules',
  'public',
  'scripts',
  '.DS_Store',
  'Thumbs.db',
  '.gitkeep',
  '.gitignore',
  'package.json',
  'package-lock.json',
  'deploy.sh',
  'README.md',
  'README-export.md',
  'manifest-offline.json',
]);

const EXCLUDED_EXTENSIONS = new Set([
  '.md',
  '.sh',
  '.lock',
  '.log',
  '.map',
  '.ts',
  '.tsx',
  '.bak',
  '.tmp',
]);

/* ================================================================
   UTIL: Varre diretório recursivamente e retorna paths relativos
================================================================ */
function scanDir(dirPath, baseRoot) {
  const results = [];

  /* Diretório pode não existir (ex: assets/, icons/ opcionais) */
  if (!fs.existsSync(dirPath)) {
    return results;
  }

  const stat = fs.statSync(dirPath);
  if (!stat.isDirectory()) {
    return results;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath    = path.join(dirPath, entry.name);
    const relativePath = path.relative(baseRoot, fullPath).replace(/\\/g, '/');

    /* Pula nomes excluídos */
    if (EXCLUDED_NAMES.has(entry.name)) {
      continue;
    }

    /* Pula extensões excluídas */
    const ext = path.extname(entry.name).toLowerCase();
    if (EXCLUDED_EXTENSIONS.has(ext)) {
      continue;
    }

    /* Pula arquivos ocultos (.algo) */
    if (entry.name.startsWith('.')) {
      continue;
    }

    if (entry.isDirectory()) {
      /* Recursão */
      const subResults = scanDir(fullPath, baseRoot);
      results.push(...subResults);
    } else if (entry.isFile()) {
      /* Verifica extensão permitida */
      if (ext === '' || ALLOWED_EXTENSIONS.has(ext)) {
        results.push(relativePath);
      }
    }
  }

  return results;
}

/* ================================================================
   UTIL: Audita paths em string para detectar absolutos indevidos
================================================================ */
function auditForAbsolutePaths(files) {
  const warnings = [];

  for (const f of files) {
    if (f.startsWith('/') || f.startsWith('http://') || f.startsWith('https://')) {
      warnings.push(`⚠️  PATH ABSOLUTO detectado: "${f}"`);
    }
  }

  return warnings;
}

/* ================================================================
   MAIN
================================================================ */
function main() {
  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   MedCases Pro — Offline Manifest Generator v1.0        ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`  Root:    ${ROOT}`);
  console.log(`  Output:  ${OUTPUT_FILE}`);
  console.log(`  BaseURL: ${BASE_URL}`);
  console.log('');

  const allFiles = [];

  /* ── 1. Arquivos raiz essenciais ── */
  console.log('── Arquivos raiz ──────────────────────────────────────────');
  for (const fname of ROOT_FILES) {
    const fpath = path.join(ROOT, fname);
    if (fs.existsSync(fpath)) {
      allFiles.push(fname);
      console.log(`  ✅  ${fname}`);
    } else {
      console.log(`  ❌  ${fname}  (não encontrado — AVISO)`);
    }
  }
  console.log('');

  /* ── 2. Diretórios ── */
  const stats = {};

  for (const dir of SCAN_DIRS) {
    const dirPath = path.join(ROOT, dir);
    const exists  = fs.existsSync(dirPath);

    if (!exists) {
      console.log(`── ${dir}/  (não existe — pulado)`);
      stats[dir] = { count: 0, skipped: true };
      continue;
    }

    const files = scanDir(dirPath, ROOT);

    /* Filtra .gitkeep e outros marcadores de diretório vazio */
    const realFiles = files.filter(f => !f.endsWith('.gitkeep') && !f.endsWith('.gitignore'));

    console.log(`── ${dir}/  (${realFiles.length} arquivo${realFiles.length !== 1 ? 's' : ''})`);

    for (const f of realFiles) {
      allFiles.push(f);
      const size = fs.statSync(path.join(ROOT, f)).size;
      const sizeStr = size > 1024 * 1024
        ? `${(size / 1024 / 1024).toFixed(1)} MB`
        : `${(size / 1024).toFixed(1)} KB`;
      console.log(`  ✅  ${f}  (${sizeStr})`);
    }

    stats[dir] = { count: realFiles.length, skipped: false };

    if (realFiles.length === 0) {
      console.log(`  ℹ️   (diretório existe mas está vazio ou só tem .gitkeep)`);
    }

    console.log('');
  }

  /* ── 3. Ordenação determinística ── */
  allFiles.sort((a, b) => {
    /* Prioridade: arquivos raiz primeiro, depois por pasta, depois por nome */
    const aIsRoot = !a.includes('/');
    const bIsRoot = !b.includes('/');
    if (aIsRoot && !bIsRoot) return -1;
    if (!aIsRoot && bIsRoot)  return 1;
    return a.localeCompare(b);
  });

  /* Remove duplicatas (improvável mas seguro) */
  const unique = [...new Set(allFiles)];

  /* ── 4. Auditoria de paths absolutos ── */
  const warnings = auditForAbsolutePaths(unique);
  if (warnings.length > 0) {
    console.log('── ⚠️  AUDITORIA DE PATHS ──────────────────────────────────');
    warnings.forEach(w => console.log(`  ${w}`));
    console.log('');
  } else {
    console.log('── Auditoria de paths: ✅ TODOS OS PATHS SÃO RELATIVOS ────');
    console.log('');
  }

  /* ── 5. Monta o manifest ── */
  const manifest = {
    version:   VERSION,
    updatedAt: new Date().toISOString(),
    baseUrl:   BASE_URL,
    totalFiles: unique.length,
    breakdown: {
      root:     ROOT_FILES.filter(f => fs.existsSync(path.join(ROOT, f))).length,
      css:      stats['css']      ? stats['css'].count      : 0,
      js:       stats['js']       ? stats['js'].count       : 0,
      database: stats['database'] ? stats['database'].count : 0,
      data:     stats['data']     ? stats['data'].count     : 0,
      assets:   stats['assets']   ? stats['assets'].count   : 0,
      images:   stats['images']   ? stats['images'].count   : 0,
      icons:    stats['icons']    ? stats['icons'].count    : 0,
      fonts:    stats['fonts']    ? stats['fonts'].count    : 0,
    },
    files: unique,
  };

  /* ── 6. Escreve o arquivo ── */
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), 'utf8');

  /* ── 7. Relatório final ── */
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   RELATÓRIO FINAL                                        ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║   Total de arquivos no manifest : ${String(unique.length).padEnd(22)}║`);
  console.log(`║   database/  : ${String(manifest.breakdown.database).padEnd(40)}║`);
  console.log(`║   js/        : ${String(manifest.breakdown.js).padEnd(40)}║`);
  console.log(`║   css/       : ${String(manifest.breakdown.css).padEnd(40)}║`);
  console.log(`║   data/      : ${String(manifest.breakdown.data).padEnd(40)}║`);
  console.log(`║   assets/    : ${String(manifest.breakdown.assets).padEnd(40)}║`);
  console.log(`║   images/    : ${String(manifest.breakdown.images).padEnd(40)}║`);
  console.log(`║   icons/     : ${String(manifest.breakdown.icons).padEnd(40)}║`);
  console.log(`║   fonts/     : ${String(manifest.breakdown.fonts).padEnd(40)}║`);
  console.log(`║   Paths absolutos detectados    : ${String(warnings.length).padEnd(22)}║`);
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║   ✅  manifest-offline.json criado com sucesso           ║`);
  console.log(`║   📂  ${OUTPUT_FILE.replace(ROOT + '/', '').padEnd(50)}║`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  /* ── 8. Verificação de cobertura database ── */
  const dbFiles = unique.filter(f => f.startsWith('database/'));
  if (dbFiles.length > 0) {
    console.log('── Cobertura database/ ────────────────────────────────────');
    dbFiles.forEach(f => console.log(`  ✅  ${f}`));
    console.log('');
  }

  /* ── 9. Aviso se database/ estiver vazio ── */
  if (manifest.breakdown.database === 0) {
    console.log('╔══════════════════════════════════════════════════════════╗');
    console.log('║   ⚠️  AVISO: database/ não contém arquivos              ║');
    console.log('║   Verifique se o diretório existe e está populado.       ║');
    console.log('╚══════════════════════════════════════════════════════════╝');
  }

  return manifest;
}

/* ── Execução ── */
const result = main();
process.exit(0);
