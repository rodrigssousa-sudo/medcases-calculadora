#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptPath = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(scriptPath), '..');
const publicDataRoot = path.join(repoRoot, 'public', 'data');
const manifestPath = path.join(publicDataRoot, 'manifest.json');
const outputRoot = path.join(repoRoot, 'generated', 'ai-drug-data');
const temporaryRoot = `${outputRoot}.tmp-${process.pid}`;

function fail(message) {
  console.error(`ERRO: ${message}`);
  process.exit(1);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`JSON inválido ou ausente: ${filePath}: ${error.message}`);
  }
}

function stableSort(value) {
  if (Array.isArray(value)) {
    return value.map(stableSort);
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stableSort(value[key])]),
    );
  }
  return value;
}

function stableJson(value) {
  return `${JSON.stringify(stableSort(value), null, 2)}\n`;
}

function sha256Text(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}

function sha256File(filePath) {
  return crypto
    .createHash('sha256')
    .update(fs.readFileSync(filePath))
    .digest('hex');
}

function resolveEndpoint(siteRoot, endpoint) {
  if (typeof endpoint !== 'string' || !endpoint.startsWith('/')) {
    fail(`Endpoint inválido: ${String(endpoint)}`);
  }
  return path.join(siteRoot, endpoint.slice(1));
}

function extractDoseText(document, language) {
  const localized = document?.[language];
  if (!localized || typeof localized !== 'object') return null;

  const candidates = [
    ['dose', localized.dose],
    ['dosage', localized.dosage],
    ['posology', localized.posology],
  ];

  const parts = [];
  for (const [field, value] of candidates) {
    if (typeof value === 'string' && value.trim()) {
      parts.push({ field, text: value.trim() });
    } else if (Array.isArray(value) && value.length > 0) {
      const textItems = value
        .filter((item) => typeof item === 'string' && item.trim())
        .map((item) => item.trim());
      if (textItems.length > 0) {
        parts.push({ field, text: textItems });
      }
    } else if (value && typeof value === 'object') {
      parts.push({ field, text: value });
    }
  }
  return parts.length > 0 ? parts : null;
}

if (!fs.existsSync(manifestPath)) {
  fail(`Manifesto clínico ausente: ${manifestPath}`);
}

const sourceManifest = readJson(manifestPath);
const endpoints = sourceManifest.endpoints;
if (!endpoints || typeof endpoints !== 'object') {
  fail('Manifesto sem endpoints.');
}
if (typeof endpoints.drugById !== 'string' || !endpoints.drugById.includes('{id}')) {
  fail('Endpoint drugById inválido.');
}

const siteRoot = path.resolve(publicDataRoot, '..');
const indexPath = resolveEndpoint(siteRoot, endpoints.drugsIndex);
const sourceIndex = readJson(indexPath);

if (!Array.isArray(sourceIndex)) {
  fail('Índice farmacológico não é uma lista.');
}
if (sourceIndex.length !== sourceManifest.drugCount) {
  fail(
    `Contagem do índice (${sourceIndex.length}) difere do manifesto (${sourceManifest.drugCount}).`,
  );
}

const seenIds = new Set();
const generatedIndex = [];
const generatedDocuments = [];

fs.rmSync(temporaryRoot, { recursive: true, force: true });
fs.mkdirSync(path.join(temporaryRoot, 'drugs'), { recursive: true });

for (const entry of sourceIndex) {
  const drugId = entry?.id;
  if (typeof drugId !== 'string' || !/^[a-z0-9_-]+$/.test(drugId)) {
    fail(`ID farmacológico inválido: ${String(drugId)}`);
  }
  if (seenIds.has(drugId)) {
    fail(`ID duplicado: ${drugId}`);
  }
  seenIds.add(drugId);

  const documentEndpoint = endpoints.drugById.replace('{id}', drugId);
  const documentPath = resolveEndpoint(siteRoot, documentEndpoint);
  const calculatorDocument = readJson(documentPath);

  if (calculatorDocument.id !== drugId) {
    fail(`Documento ${drugId} possui identidade divergente.`);
  }
  if (calculatorDocument.dataVersion !== sourceManifest.version) {
    fail(`Documento ${drugId} possui versão divergente.`);
  }
  if (
    calculatorDocument.clinicalContentSha256 !== sourceManifest.contentSha256
  ) {
    fail(`Documento ${drugId} possui SHA clínico divergente.`);
  }

  const sourceDocumentSha256 = sha256File(documentPath);
  const projection = {
    schemaVersion: 'medcases-ai-drug-data-v1',
    drugId,
    calculatorBinding: {
      bundleVersion: sourceManifest.version,
      bundleSha256: sourceManifest.contentSha256,
      identitySchema: sourceManifest.identitySchema ?? null,
      sourceDocumentSha256,
      sourceModule:
        calculatorDocument.sourceModule ?? entry.sourceModule ?? null,
      calculatorSchema:
        calculatorDocument.schema ?? entry.schema ?? null,
    },
    identity: {
      name: entry.name ?? calculatorDocument.name ?? null,
      category: entry.category ?? calculatorDocument.category ?? null,
      keywords: Array.isArray(entry.keywords) ? entry.keywords : [],
      canonicalOwner: entry.canonicalOwner ?? null,
      hasContextVariants: Boolean(entry.hasContextVariants),
      contextVariantCount: Number(entry.contextVariantCount ?? 0),
    },
    sourceEvidence: {
      doseText: {
        pt: extractDoseText(calculatorDocument, 'pt'),
        es: extractDoseText(calculatorDocument, 'es'),
      },
      calculatorDocument,
    },
    typedRegimens: [],
    typedRegimenStatus: 'not_available',
    typedRegimenInferenceUsed: false,
    publishableForDeterministicDosing: false,
  };

  const projectionText = stableJson(projection);
  const projectionSha256 = sha256Text(projectionText);
  const outputPath = path.join(temporaryRoot, 'drugs', `${drugId}.json`);
  fs.writeFileSync(outputPath, projectionText, 'utf8');

  generatedIndex.push({
    drugId,
    name: projection.identity.name,
    category: projection.identity.category,
    keywords: projection.identity.keywords,
    canonicalOwner: projection.identity.canonicalOwner,
    hasContextVariants: projection.identity.hasContextVariants,
    contextVariantCount: projection.identity.contextVariantCount,
    sourceModule: projection.calculatorBinding.sourceModule,
    calculatorSchema: projection.calculatorBinding.calculatorSchema,
    sourceDocumentSha256,
    projectionSha256,
    typedRegimenCount: 0,
    publishableForDeterministicDosing: false,
  });
  generatedDocuments.push({
    drugId,
    sourceDocumentSha256,
    projectionSha256,
  });
}

generatedIndex.sort((a, b) => a.drugId.localeCompare(b.drugId));
generatedDocuments.sort((a, b) => a.drugId.localeCompare(b.drugId));

const generatedIndexText = stableJson(generatedIndex);
fs.writeFileSync(
  path.join(temporaryRoot, 'index.json'),
  generatedIndexText,
  'utf8',
);

const generatedManifest = {
  schemaVersion: 'medcases-ai-drug-data-manifest-v1',
  generatedBy: 'scripts/generate-ai-drug-data.mjs',
  source: {
    calculatorRepository: 'medcases-calculadora',
    calculatorGeneratedBy: sourceManifest.generatedBy ?? null,
    bundleVersion: sourceManifest.version,
    bundleSha256: sourceManifest.contentSha256,
    identitySchema: sourceManifest.identitySchema ?? null,
    drugCount: sourceManifest.drugCount,
    interactionCount: sourceManifest.interactionCount,
    collisionCount: sourceManifest.collisionCount ?? 0,
    contextVariantCount: sourceManifest.contextVariantCount ?? 0,
    exportErrors: sourceManifest.exportErrors ?? null,
  },
  projection: {
    drugCount: generatedIndex.length,
    typedRegimenCount: 0,
    deterministicDosingPublishableCount: 0,
    textToRegimenInferenceUsed: false,
    calculatorLogicDependencyAdded: false,
  },
  indexSha256: sha256Text(generatedIndexText),
  documents: generatedDocuments,
};

fs.writeFileSync(
  path.join(temporaryRoot, 'manifest.json'),
  stableJson(generatedManifest),
  'utf8',
);

const readme = [
  '# Generated AI Drug Data',
  '',
  'Artefato derivado automaticamente do export canônico da calculadora.',
  '',
  'Não editar manualmente.',
  '',
  'Atualização:',
  '',
  '```bash',
  './scripts/build-ai-drug-data.sh',
  '```',
  '',
  'Garantias:',
  '',
  '- a calculadora continua independente da IA;',
  '- o documento farmacológico original é preservado dentro de cada projeção;',
  '- doses existentes permanecem como texto de evidência;',
  '- `typedRegimens` não é inferido de texto;',
  '- nenhum documento é publicável para dose determinística sem contrato tipado futuro.',
  '',
].join('\n');

fs.writeFileSync(path.join(temporaryRoot, 'README.md'), readme, 'utf8');

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.renameSync(temporaryRoot, outputRoot);

console.log('AI_DRUG_DATA_GENERATION_PASS');
console.log(`sourceBundleVersion=${sourceManifest.version}`);
console.log(`sourceBundleSha256=${sourceManifest.contentSha256}`);
console.log(`generatedDrugCount=${generatedIndex.length}`);
console.log('typedRegimenCount=0');
console.log('textToRegimenInferenceUsed=false');
