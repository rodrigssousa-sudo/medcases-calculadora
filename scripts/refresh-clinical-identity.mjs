#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const databaseRoot = path.join(root, 'database');
const policyPath = path.join(root, 'config', 'clinical-collision-policy.proposed.json');
const databaseFiles = fs.readdirSync(databaseRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.js'))
  .map((entry) => path.join(databaseRoot, entry.name));
if (databaseFiles.length !== 34) throw new Error(`CLINICAL_IDENTITY_DATABASE_COUNT_INVALID:${databaseFiles.length}`);

const identityFiles = [...databaseFiles, policyPath].sort((a, b) =>
  Buffer.compare(Buffer.from(path.relative(root, a)), Buffer.from(path.relative(root, b))));
const aggregate = crypto.createHash('sha256');
for (const file of identityFiles) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  const fileHash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  aggregate.update(relative, 'utf8');
  aggregate.update(Buffer.from([0]));
  aggregate.update(fileHash, 'ascii');
  aggregate.update('\n', 'utf8');
}
const sha256 = aggregate.digest('hex');
const version = `clinical-data-v1-${sha256.slice(0, 16)}`;

const targets = [];
for (const directory of [path.join(root, 'data', 'drugs'), path.join(root, 'public', 'data', 'drugs')]) {
  for (const name of fs.readdirSync(directory).filter((value) => value.endsWith('.json'))) {
    targets.push(path.join(directory, name));
  }
}
for (const manifest of [path.join(root, 'data', 'manifest.json'), path.join(root, 'public', 'data', 'manifest.json')]) {
  targets.push(manifest);
}

const outputs = new Map();
for (const target of targets) {
  const document = JSON.parse(fs.readFileSync(target, 'utf8'));
  if (path.basename(target) === 'manifest.json') {
    document.version = version;
    document.contentSha256 = sha256;
    document.identitySchema = 'clinical-source-content-v1';
    document.identityFileCount = identityFiles.length;
    document.databaseFileCount = databaseFiles.length;
  } else {
    document.dataVersion = version;
    document.clinicalContentSha256 = sha256;
  }
  outputs.set(target, Buffer.from(`${JSON.stringify(document, null, 2)}\n`));
}

const originals = new Map();
const staged = [];
try {
  for (const [target, bytes] of outputs) {
    const original = fs.readFileSync(target);
    if (original.equals(bytes)) continue;
    originals.set(target, original);
    const temporary = path.join(path.dirname(target), `.identity-${path.basename(target)}-${process.pid}.tmp`);
    fs.writeFileSync(temporary, bytes);
    staged.push([temporary, target]);
  }
  for (const [temporary, target] of staged) fs.renameSync(temporary, target);
} catch (error) {
  for (const [temporary] of staged) if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  for (const [target, bytes] of originals) fs.writeFileSync(target, bytes);
  throw error;
}

console.log('CLINICAL_IDENTITY_REFRESH_PASS');
console.log(`version=${version}`);
console.log(`contentSha256=${sha256}`);
console.log(`privateDrugCount=${fs.readdirSync(path.join(root, 'data', 'drugs')).filter((x) => x.endsWith('.json')).length}`);
console.log(`publicDrugCount=${fs.readdirSync(path.join(root, 'public', 'data', 'drugs')).filter((x) => x.endsWith('.json')).length}`);
