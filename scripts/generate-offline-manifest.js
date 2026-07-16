#!/usr/bin/env node
'use strict';

/**
 * MedCases Pro — Offline Manifest Generator v2
 *
 * Fonte publicada:
 *   public/
 *
 * Saídas idênticas:
 *   manifest-offline.json
 *   public/manifest-offline.json
 *
 * A versão é derivada do conteúdo real de todos os arquivos publicados.
 * Qualquer alteração em HTML, CSS, JS, database/ ou data/ muda a versão
 * automaticamente e força o aplicativo a atualizar o cache offline.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_ROOT = path.join(ROOT, 'public');

const ROOT_OUTPUT = path.join(ROOT, 'manifest-offline.json');
const PUBLIC_OUTPUT = path.join(PUBLIC_ROOT, 'manifest-offline.json');

const BASE_URL = 'https://medcasescalcu.com/';
const SCHEMA = 'medcases-offline-manifest-v2';

const EXCLUDED_NAMES = new Set([
  '.DS_Store',
  'Thumbs.db',
  '.gitkeep',
  'manifest-offline.json',
]);

const REQUIRED_FILES = [
  'index.html',
  'sw.js',
  'js/deeplink-router.js',
  'database/interacoes.js',
  'data/manifest.json',
  'data/drugs_index.json',
];

function compareUtf8(a, b) {
  return Buffer.compare(
    Buffer.from(a, 'utf8'),
    Buffer.from(b, 'utf8'),
  );
}

function sha256Buffer(buffer) {
  return crypto
    .createHash('sha256')
    .update(buffer)
    .digest('hex');
}

function scanDirectory(directory, baseDirectory) {
  const results = [];

  const entries = fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => compareUtf8(a.name, b.name));

  for (const entry of entries) {
    if (
      entry.name.startsWith('.') ||
      EXCLUDED_NAMES.has(entry.name)
    ) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    const relativePath = path
      .relative(baseDirectory, absolutePath)
      .split(path.sep)
      .join('/');

    const stat = fs.lstatSync(absolutePath);

    if (stat.isSymbolicLink()) {
      throw new Error(
        `Link simbólico não permitido no pacote offline: ${relativePath}`,
      );
    }

    if (stat.isDirectory()) {
      results.push(
        ...scanDirectory(absolutePath, baseDirectory),
      );
      continue;
    }

    if (!stat.isFile()) {
      continue;
    }

    results.push(relativePath);
  }

  return results;
}

function buildBreakdown(files) {
  const breakdown = {
    root: 0,
    css: 0,
    js: 0,
    database: 0,
    data: 0,
    assets: 0,
    images: 0,
    icons: 0,
    fonts: 0,
    other: 0,
  };

  for (const file of files) {
    if (!file.includes('/')) {
      breakdown.root += 1;
      continue;
    }

    const topLevel = file.split('/')[0];

    if (Object.prototype.hasOwnProperty.call(
      breakdown,
      topLevel,
    )) {
      breakdown[topLevel] += 1;
    } else {
      breakdown.other += 1;
    }
  }

  return breakdown;
}

function calculateContentIdentity(files) {
  const aggregate = crypto.createHash('sha256');
  const fileSha256 = {};

  for (const relativePath of files) {
    const absolutePath = path.join(
      PUBLIC_ROOT,
      relativePath,
    );

    const bytes = fs.readFileSync(absolutePath);
    const digest = sha256Buffer(bytes);

    fileSha256[relativePath] = digest;

    aggregate.update(relativePath, 'utf8');
    aggregate.update('\0');
    aggregate.update(String(bytes.length), 'utf8');
    aggregate.update('\0');
    aggregate.update(digest, 'utf8');
    aggregate.update('\n');
  }

  return {
    contentSha256: aggregate.digest('hex'),
    fileSha256,
  };
}

function writeAtomic(outputPath, content) {
  const temporaryPath =
    `${outputPath}.${process.pid}.tmp`;

  try {
    fs.writeFileSync(
      temporaryPath,
      content,
      { encoding: 'utf8', mode: 0o644 },
    );

    fs.renameSync(temporaryPath, outputPath);
  } finally {
    if (fs.existsSync(temporaryPath)) {
      fs.rmSync(temporaryPath, { force: true });
    }
  }
}

function main() {
  if (!fs.existsSync(PUBLIC_ROOT)) {
    throw new Error(
      `Diretório publicado não encontrado: ${PUBLIC_ROOT}`,
    );
  }

  const files = scanDirectory(
    PUBLIC_ROOT,
    PUBLIC_ROOT,
  ).sort(compareUtf8);

  if (files.length === 0) {
    throw new Error(
      'public/ não contém arquivos publicáveis.',
    );
  }

  const duplicateCount =
    files.length - new Set(files).size;

  if (duplicateCount !== 0) {
    throw new Error(
      `Paths duplicados detectados: ${duplicateCount}`,
    );
  }

  for (const relativePath of files) {
    if (
      relativePath.startsWith('/') ||
      relativePath.includes('..') ||
      relativePath.startsWith('http://') ||
      relativePath.startsWith('https://')
    ) {
      throw new Error(
        `Path offline inválido: ${relativePath}`,
      );
    }
  }

  for (const requiredFile of REQUIRED_FILES) {
    if (!files.includes(requiredFile)) {
      throw new Error(
        `Arquivo essencial ausente: ${requiredFile}`,
      );
    }
  }

  const {
    contentSha256,
    fileSha256,
  } = calculateContentIdentity(files);

  const manifest = {
    schema: SCHEMA,
    version: `offline-v2-${contentSha256}`,
    baseUrl: BASE_URL,
    totalFiles: files.length,
    contentSha256,
    breakdown: buildBreakdown(files),
    files,
    fileSha256,
  };

  const serialized =
    `${JSON.stringify(manifest, null, 2)}\n`;

  writeAtomic(ROOT_OUTPUT, serialized);
  writeAtomic(PUBLIC_OUTPUT, serialized);

  const rootBytes = fs.readFileSync(ROOT_OUTPUT);
  const publicBytes = fs.readFileSync(PUBLIC_OUTPUT);

  if (!rootBytes.equals(publicBytes)) {
    throw new Error(
      'Os manifestos raiz e público não são idênticos.',
    );
  }

  console.log('===== OFFLINE MANIFEST V2 =====');
  console.log(`version=${manifest.version}`);
  console.log(
    `contentSha256=${manifest.contentSha256}`,
  );
  console.log(`totalFiles=${manifest.totalFiles}`);

  for (
    const [category, count]
    of Object.entries(manifest.breakdown)
  ) {
    console.log(`${category}=${count}`);
  }

  console.log('MANIFESTO_OFFLINE_V2_OK');
}

try {
  main();
} catch (error) {
  console.error(
    `MANIFESTO_OFFLINE_V2_FALHOU: ${error.message}`,
  );
  process.exitCode = 1;
}
