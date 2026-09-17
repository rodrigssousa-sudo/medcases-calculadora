#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const aiRoot = path.join(root, 'data', 'ai-drug-data');
const currentPath = path.join(aiRoot, 'current.json');
const requested = process.argv[2];

function fail(message) { throw new Error(message); }
function safeId(value) { return typeof value === 'string' && /^[a-z0-9._-]+$/.test(value); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function atomicWrite(file, value) {
  const temporary = `${file}.tmp-${process.pid}`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  fs.renameSync(temporary, file);
}

if (!fs.existsSync(currentPath)) fail('AI_CURRENT_MISSING');
const current = readJson(currentPath);
const targetId = requested || current.previousBundleId;
if (!safeId(targetId)) fail('AI_ROLLBACK_TARGET_INVALID');
const publicationPath = path.join(aiRoot, 'bundles', targetId, 'publication.json');
if (!fs.existsSync(publicationPath)) fail('AI_ROLLBACK_BUNDLE_MISSING');
const publication = readJson(publicationPath);
if (publication.bundleId !== targetId || publication.immutableBundle !== true) {
  fail('AI_ROLLBACK_BUNDLE_INVALID');
}
const next = {
  schemaVersion: 'medcases-ai-drug-data-current-v1',
  bundleId: targetId,
  bundleVersion: targetId,
  bundleSha256: publication.bundleSha256,
  sourceBundleVersion: publication.sourceBundleVersion,
  sourceBundleSha256: publication.sourceBundleSha256,
  publicationPath: `bundles/${targetId}/publication.json`,
  manifestPath: `bundles/${targetId}/manifest.json`,
  indexPath: `bundles/${targetId}/index.json`,
  drugPathTemplate: `bundles/${targetId}/drugs/{id}.json`,
  drugCount: publication.drugCount,
  typedRegimenCount: 0,
  deterministicDosingPublishableCount: 0,
  textToRegimenInferenceUsed: false,
  generatedAtUtc: publication.generatedAtUtc ??
    fs.statSync(path.dirname(publicationPath)).birthtime.toISOString(),
  clinicalBaseline: {
    version: publication.sourceBundleVersion,
    sha256: publication.sourceBundleSha256,
  },
  previousBundleId: current.bundleId,
};
atomicWrite(currentPath, next);
if (readJson(currentPath).bundleId !== targetId) fail('AI_ROLLBACK_ATOMIC_VERIFY_FAILED');
console.log('AI_DRUG_DATA_ROLLBACK_PASS');
console.log(`bundleId=${targetId}`);
