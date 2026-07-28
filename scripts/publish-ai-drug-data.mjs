import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repositoryRoot = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  '..',
);
const generatedRoot = path.join(
  repositoryRoot,
  'generated',
  'ai-drug-data',
);
const publicRoot = path.join(
  repositoryRoot,
  'data',
  'ai-drug-data',
);
const bundlesRoot = path.join(publicRoot, 'bundles');
const currentPath = path.join(publicRoot, 'current.json');

function fail(message) {
  throw new Error(message);
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function ensureSafeBundleId(value) {
  if (
    typeof value !== 'string' ||
    value.length === 0 ||
    !/^[a-z0-9._-]+$/.test(value)
  ) {
    fail(`Unsafe bundle ID: ${String(value)}`);
  }
}

function ensureSafeDrugId(value) {
  if (
    typeof value !== 'string' ||
    value.length === 0 ||
    !/^[a-z0-9_-]+$/.test(value)
  ) {
    fail(`Unsafe drug ID: ${String(value)}`);
  }
}

function writeFileAtomically(filePath, content) {
  const temporaryPath = `${filePath}.tmp-${process.pid}`;
  fs.writeFileSync(temporaryPath, content, 'utf8');
  fs.renameSync(temporaryPath, filePath);
}

function copyFileVerified(sourcePath, destinationPath) {
  const content = fs.readFileSync(sourcePath);
  fs.writeFileSync(destinationPath, content);
  const copied = fs.readFileSync(destinationPath);
  if (sha256(content) !== sha256(copied)) {
    fail(`Copy verification failed: ${sourcePath}`);
  }
  return {
    bytes: content.length,
    sha256: sha256(content),
  };
}

if (!fs.existsSync(generatedRoot)) {
  fail(`Generated root missing: ${generatedRoot}`);
}

const sourceManifestPath = path.join(generatedRoot, 'manifest.json');
const sourceIndexPath = path.join(generatedRoot, 'index.json');
const sourceDrugsRoot = path.join(generatedRoot, 'drugs');

const manifest = readJson(sourceManifestPath);
const index = readJson(sourceIndexPath);

const source = manifest.source ?? {};
const projection = manifest.projection ?? {};

if (typeof source.bundleVersion !== 'string') {
  fail('Source bundle version missing');
}
if (
  typeof source.bundleSha256 !== 'string' ||
  !/^[a-f0-9]{64}$/.test(source.bundleSha256)
) {
  fail('Source bundle SHA-256 invalid');
}

const generatedManifestSha256 = sha256(
  fs.readFileSync(sourceManifestPath),
);
const generatedIndexSha256 = sha256(
  fs.readFileSync(sourceIndexPath),
);

const projectionIdentityPayload = {
  schemaVersion: 'medcases-ai-drug-data-projection-identity-v1',
  sourceBundleVersion: source.bundleVersion,
  sourceBundleSha256: source.bundleSha256,
  generatedManifestSha256,
  generatedIndexSha256,
  documents: Array.isArray(manifest.documents)
    ? manifest.documents.map((entry) => ({
        drugId: entry.drugId,
        sourceDocumentSha256: entry.sourceDocumentSha256,
        projectionSha256: entry.projectionSha256,
      }))
    : [],
};

const projectionBundleSha256 = sha256(
  Buffer.from(stableJson(projectionIdentityPayload), 'utf8'),
);
const bundleId =
  `${source.bundleVersion}-ai-${projectionBundleSha256.slice(0, 16)}`;

ensureSafeBundleId(bundleId);

if (!Array.isArray(index)) fail('Generated index must be an array');
if (source.drugCount !== index.length) {
  fail(`Source drug count mismatch: ${source.drugCount} != ${index.length}`);
}
if (projection.drugCount !== index.length) {
  fail(
    `Projection drug count mismatch: ${projection.drugCount} != ${index.length}`,
  );
}
if (projection.typedRegimenCount !== 0) {
  fail('typedRegimenCount must remain zero');
}
if (projection.deterministicDosingPublishableCount !== 0) {
  fail('deterministicDosingPublishableCount must remain zero');
}
if (projection.textToRegimenInferenceUsed !== false) {
  fail('textToRegimenInferenceUsed must remain false');
}

const ids = index.map((entry) => {
  const drugId = entry?.drugId;
  ensureSafeDrugId(drugId);
  return drugId;
});
if (new Set(ids).size !== ids.length) {
  fail('Generated index contains duplicate drug IDs');
}

fs.mkdirSync(bundlesRoot, { recursive: true });

const finalBundleRoot = path.join(bundlesRoot, bundleId);
const temporaryBundleRoot = path.join(
  bundlesRoot,
  `.tmp-${bundleId}-${process.pid}`,
);

fs.rmSync(temporaryBundleRoot, { recursive: true, force: true });
fs.mkdirSync(path.join(temporaryBundleRoot, 'drugs'), { recursive: true });

const publishedFiles = {};
publishedFiles['manifest.json'] = copyFileVerified(
  sourceManifestPath,
  path.join(temporaryBundleRoot, 'manifest.json'),
);
publishedFiles['index.json'] = copyFileVerified(
  sourceIndexPath,
  path.join(temporaryBundleRoot, 'index.json'),
);

for (const drugId of ids) {
  const sourcePath = path.join(sourceDrugsRoot, `${drugId}.json`);
  if (!fs.existsSync(sourcePath)) {
    fail(`Generated document missing: ${drugId}`);
  }
  const payload = readJson(sourcePath);
  if (payload.drugId !== drugId) {
    fail(`Generated document ID mismatch: ${drugId}`);
  }
  if (
    !Array.isArray(payload.typedRegimens) ||
    payload.typedRegimens.length !== 0 ||
    payload.typedRegimenInferenceUsed !== false ||
    payload.publishableForDeterministicDosing !== false
  ) {
    fail(`Unsafe generated document: ${drugId}`);
  }
  publishedFiles[`drugs/${drugId}.json`] = copyFileVerified(
    sourcePath,
    path.join(temporaryBundleRoot, 'drugs', `${drugId}.json`),
  );
}

const publicationManifest = {
  schemaVersion: 'medcases-ai-drug-data-publication-v2',
  bundleId,
  bundleVersion: bundleId,
  bundleSha256: projectionBundleSha256,
  sourceBundleVersion: source.bundleVersion,
  sourceBundleSha256: source.bundleSha256,
  projectionIdentitySchema:
    projectionIdentityPayload.schemaVersion,
  generatedManifestSha256:
    publishedFiles['manifest.json'].sha256,
  generatedIndexSha256:
    publishedFiles['index.json'].sha256,
  drugCount: ids.length,
  typedRegimenCount: 0,
  deterministicDosingPublishableCount: 0,
  textToRegimenInferenceUsed: false,
  immutableBundle: true,
  paths: {
    manifest: 'manifest.json',
    index: 'index.json',
    drugTemplate: 'drugs/{id}.json',
  },
  files: publishedFiles,
};

fs.writeFileSync(
  path.join(temporaryBundleRoot, 'publication.json'),
  stableJson(publicationManifest),
  'utf8',
);

if (fs.existsSync(finalBundleRoot)) {
  const existingPublicationPath = path.join(
    finalBundleRoot,
    'publication.json',
  );
  if (!fs.existsSync(existingPublicationPath)) {
    fail(`Existing immutable bundle is incomplete: ${bundleId}`);
  }
  const existing = readJson(existingPublicationPath);
  if (
    existing.bundleSha256 !== publicationManifest.bundleSha256 ||
    existing.generatedManifestSha256 !==
      publicationManifest.generatedManifestSha256 ||
    existing.generatedIndexSha256 !==
      publicationManifest.generatedIndexSha256 ||
    existing.drugCount !== publicationManifest.drugCount
  ) {
    fail(`Immutable bundle collision: ${bundleId}`);
  }
  fs.rmSync(temporaryBundleRoot, { recursive: true, force: true });
} else {
  fs.renameSync(temporaryBundleRoot, finalBundleRoot);
}

const current = {
  schemaVersion: 'medcases-ai-drug-data-current-v1',
  bundleId,
  bundleVersion: bundleId,
  bundleSha256: projectionBundleSha256,
  sourceBundleVersion: source.bundleVersion,
  sourceBundleSha256: source.bundleSha256,
  publicationPath: `bundles/${bundleId}/publication.json`,
  manifestPath: `bundles/${bundleId}/manifest.json`,
  indexPath: `bundles/${bundleId}/index.json`,
  drugPathTemplate: `bundles/${bundleId}/drugs/{id}.json`,
  drugCount: ids.length,
  typedRegimenCount: 0,
  deterministicDosingPublishableCount: 0,
  textToRegimenInferenceUsed: false,
};

writeFileAtomically(currentPath, stableJson(current));

const currentVerification = readJson(currentPath);
if (
  currentVerification.bundleId !== bundleId ||
  currentVerification.bundleVersion !== bundleId ||
  currentVerification.bundleSha256 !== projectionBundleSha256 ||
  currentVerification.sourceBundleSha256 !== source.bundleSha256
) {
  fail('Atomic current pointer verification failed');
}

console.log('AI_DRUG_DATA_PUBLICATION_PASS');
console.log(`bundleId=${bundleId}`);
console.log(`drugCount=${ids.length}`);
console.log(`publicRoot=${publicRoot}`);
console.log('atomicPointer=current.json');
console.log('typedRegimenCount=0');
console.log('deterministicDosingPublishableCount=0');
