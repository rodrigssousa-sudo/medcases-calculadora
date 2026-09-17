#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const zip = process.argv[2];
if (!zip || path.extname(zip).toLowerCase() !== '.zip') throw new Error('GOLD33_ZIP_REQUIRED');
const read = (name) => execFileSync('unzip', ['-p', zip, name], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
const entries = execFileSync('zipinfo', ['-1', zip], { encoding: 'utf8' }).trim().split(/\r?\n/).filter(Boolean);
for (const entry of entries) if (entry.startsWith('/') || entry.includes('..') || entry.includes('\\')) throw new Error(`GOLD33_UNSAFE_ZIP_PATH:${entry}`);

const manifestName = entries.find((x) => /^06_MANIFESTO_SHA256\.txt$/.test(x));
if (!manifestName) throw new Error('GOLD33_MANIFEST_MISSING');
const hashes = new Map();
for (const line of read(manifestName).split(/\r?\n/)) {
  const m = /^([a-f0-9]{64})  ([A-Za-z0-9_.-]+)$/.exec(line);
  if (m) hashes.set(m[2], m[1]);
}
for (const [name, expected] of hashes) {
  if (!entries.includes(name)) throw new Error(`GOLD33_MANIFEST_FILE_MISSING:${name}`);
  if (createHash('sha256').update(read(name)).digest('hex') !== expected) throw new Error(`GOLD33_HASH_MISMATCH:${name}`);
}

const opinion = JSON.parse(read('04_PARECER_CLINICO.json'));
const restrictions = JSON.parse(read('05_RESTRICOES_E_PENDENCIAS.json'));
const dataText = read('01_DADOS_HOMOLOGADOS.json');
const data = JSON.parse(dataText);
if (opinion.homologation?.REVISAO_CLINICA !== 'HOMOLOGADA' || opinion.homologation?.STATUS_DADOS !== 'APROVADOS_CLINICAMENTE') throw new Error('GOLD33_CLINICAL_HOMOLOGATION_MISSING');
if (createHash('sha256').update(dataText).digest('hex') !== opinion.final_consolidation?.final_sha256) throw new Error('GOLD33_APPROVED_VERSION_MISMATCH');
const ids = data.map((row) => row.ID);
const expectedSize = process.env.GOLD33_SYNTHETIC_TEST === '1' ? data.length : 10;
if (data.length < 1 || data.length !== expectedSize || new Set(ids).size !== expectedSize) throw new Error('GOLD33_BATCH_MUST_HAVE_EXPECTED_UNIQUE_IDS');
if (JSON.stringify([...ids].sort()) !== JSON.stringify([...(opinion.scope?.ids || [])].sort())) throw new Error('GOLD33_APPROVED_IDS_MISMATCH');
const required = opinion.scope?.canonical_fields || [];
if (required.length !== 33) throw new Error('GOLD33_CONTRACT_FIELD_COUNT');
for (const row of data) {
  const fields = row.CAMPOS_33;
  if (!fields || Object.keys(fields).length !== 33 || required.some((k) => !Object.hasOwn(fields, k))) throw new Error(`GOLD33_FIELD_COUNT:${row.ID}`);
  for (const [field, value] of Object.entries(fields)) {
    if (field === 'references' ? !Array.isArray(value) : (!value || !Object.hasOwn(value, 'pt') || !Object.hasOwn(value, 'es'))) throw new Error(`GOLD33_PT_ES_INVALID:${row.ID}:${field}`);
  }
}
const restrictedIds = new Set((restrictions.items || []).map((item) => item.id));
if (ids.some((id) => !restrictedIds.has(id))) throw new Error('GOLD33_RESTRICTIONS_INCOMPLETE');
console.log(JSON.stringify({ result: 'PASS', lote: opinion.lote, ids, finalSha256: opinion.final_consolidation.final_sha256, calculation: restrictions.global.AUTORIZACAO_DE_CALCULO, publication: restrictions.global.PUBLICACAO }, null, 2));
