#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const zip = process.argv[2];
if (!zip || path.extname(zip).toLowerCase() !== '.zip') throw new Error('GOLD33_ZIP_REQUIRED');
const read = (name) => execFileSync('unzip', ['-p', zip, name], { maxBuffer: 32 * 1024 * 1024 });
const readText = (name) => read(name).toString('utf8');
const entries = execFileSync('zipinfo', ['-1', zip], { encoding: 'utf8' }).trim().split(/\r?\n/).filter(Boolean);
for (const entry of entries) if (entry.startsWith('/') || entry.includes('..') || entry.includes('\\')) throw new Error(`GOLD33_UNSAFE_ZIP_PATH:${entry}`);

const manifestName = entries.find((x) => /^06_MANIFESTO_SHA256\.txt$/.test(x));
if (!manifestName) throw new Error('GOLD33_MANIFEST_MISSING');
const hashes = new Map();
for (const line of readText(manifestName).split(/\r?\n/)) {
  const m = /^([a-f0-9]{64})  ([A-Za-z0-9_.-]+)$/.exec(line);
  if (m) hashes.set(m[2], m[1]);
}
for (const [name, expected] of hashes) {
  if (!entries.includes(name)) throw new Error(`GOLD33_MANIFEST_FILE_MISSING:${name}`);
  if (createHash('sha256').update(read(name)).digest('hex') !== expected) throw new Error(`GOLD33_HASH_MISMATCH:${name}`);
}

const opinion = JSON.parse(readText('04_PARECER_CLINICO.json'));
const restrictions = JSON.parse(readText('05_RESTRICOES_E_PENDENCIAS.json'));
const dataText = readText('01_DADOS_HOMOLOGADOS.json');
const dataDocument = JSON.parse(dataText);
const v4 = dataDocument?.schema === 'MEDCASES_GOLD33_HOMOLOGATED_V4';
const data = v4 ? dataDocument.medications : dataDocument;
const reviewed = !v4 && Array.isArray(opinion.ids_efetivamente_revisados);
if (reviewed) {
  if (opinion.resultado !== 'APROVADO_INTEGRALMENTE' || !opinion.medico_revisor || !Array.isArray(opinion.excecoes) || opinion.excecoes.length) throw new Error('GOLD33_CLINICAL_HOMOLOGATION_MISSING');
  if (!hashes.has('08_REVISAO_MEDICA.pdf') || createHash('sha256').update(read('08_REVISAO_MEDICA.pdf')).digest('hex') !== opinion.sha256_arquivo_homologado) throw new Error('GOLD33_APPROVED_PDF_MISMATCH');
  if (!Array.isArray(restrictions.restricoes_granulares_preservadas) || !restrictions.restricoes_granulares_preservadas.length || data.some((row) => !row.METADADOS_HANDOFF?.states || row.METADADOS_HANDOFF.states.AUTORIZACAO_CALCULO !== 'NAO_AUTORIZADA')) throw new Error('GOLD33_RESTRICTIONS_INCOMPLETE');
  if (entries.some((name) => name !== manifestName && !hashes.has(name))) throw new Error('GOLD33_MANIFEST_COVERAGE_INCOMPLETE');
}
if (v4) {
  const changes = JSON.parse(readText('02_ALTERACOES_APROVADAS.json'));
  const audit = JSON.parse(readText('08_AUDITORIA_PRE_CODEX.json'));
  if (opinion.result !== 'APROVADO INTEGRALMENTE' || dataDocument.approval?.result !== 'APROVADO INTEGRALMENTE' || dataDocument.gates?.human_approved !== true || dataDocument.gates?.status !== 'HOMOLOGADO_CLINICAMENTE') throw new Error('GOLD33_CLINICAL_HOMOLOGATION_MISSING');
  if (!dataDocument.clinical_content_sha256 || dataDocument.clinical_content_sha256 !== changes.clinical_content_sha256) throw new Error('GOLD33_APPROVED_VERSION_MISMATCH');
  if (audit.checks?.MANIFESTO_SHA256 !== 'PASS' || dataDocument.gates?.technical_mapping !== 'PASS' || audit.PACOTE_CODEX !== 'PRONTO') throw new Error('GOLD33_V4_AUDIT_INVALID');
} else if (!reviewed) {
  if (opinion.homologation?.REVISAO_CLINICA !== 'HOMOLOGADA' || opinion.homologation?.STATUS_DADOS !== 'APROVADOS_CLINICAMENTE') throw new Error('GOLD33_CLINICAL_HOMOLOGATION_MISSING');
  if (createHash('sha256').update(dataText).digest('hex') !== opinion.final_consolidation?.final_sha256) throw new Error('GOLD33_APPROVED_VERSION_MISMATCH');
}
const ids = data.map((row) => row.ID);
const expectedSize = reviewed ? opinion.ids_efetivamente_revisados.length : (process.env.GOLD33_SYNTHETIC_TEST === '1' ? data.length : 10);
if (data.length < 1 || data.length !== expectedSize || new Set(ids).size !== expectedSize) throw new Error('GOLD33_BATCH_MUST_HAVE_EXPECTED_UNIQUE_IDS');
const approvedIds = v4 ? data.map((row) => row.ID) : (reviewed ? opinion.ids_efetivamente_revisados : (opinion.scope?.ids || []));
if (reviewed && JSON.stringify(ids) !== JSON.stringify(approvedIds)) throw new Error('GOLD33_APPROVED_IDS_MISMATCH');
if (JSON.stringify([...ids].sort()) !== JSON.stringify([...approvedIds].sort())) throw new Error('GOLD33_APPROVED_IDS_MISMATCH');
const required = (v4 || reviewed)
  ? ['name','class','pharmacologicClass','commercialNames','presentation','presentations','mechanism','pharmacodynamics','pharmacokinetics','indications','dose','pediatricDose','renalDose','hepaticDose','commonAdverseEffects','dangerousAdverseEffects','adverseEffects','contraindications','interactions','monitoring','administration','preparation','infusionProtocol','pregnancy','lactation','specialPopulations','patientEducation','clinicalPearls','guidelineRecommendations','safetyFlags','alerts','references','ref']
  : (opinion.scope?.canonical_fields || []);
if (required.length !== 33) throw new Error('GOLD33_CONTRACT_FIELD_COUNT');
for (const row of data) {
  const fields = row.CAMPOS_33;
  if (!fields || Object.keys(fields).length !== 33 || required.some((k) => !Object.hasOwn(fields, k))) throw new Error(`GOLD33_FIELD_COUNT:${row.ID}`);
  for (const [field, value] of Object.entries(fields)) {
    if (field === 'references' ? !Array.isArray(value) : (!value || !Object.hasOwn(value, 'pt') || !Object.hasOwn(value, 'es'))) throw new Error(`GOLD33_PT_ES_INVALID:${row.ID}:${field}`);
  }
}
const restrictionItems = reviewed ? data.map((row) => ({id: row.ID, ...row.METADADOS_HANDOFF})) : v4 ? (restrictions.medications || restrictions.items || []) : (restrictions.items || []);
const restrictedIds = new Set(restrictionItems.map((item) => item.id));
if (ids.some((id) => !restrictedIds.has(id))) throw new Error('GOLD33_RESTRICTIONS_INCOMPLETE');
console.log(JSON.stringify({
  result: 'PASS',
  lote: v4 ? dataDocument.lot : opinion.lote,
  ids,
  finalSha256: reviewed ? createHash('sha256').update(dataText).digest('hex') : v4 ? dataDocument.clinical_content_sha256 : opinion.final_consolidation.final_sha256,
  calculation: reviewed ? data.map((row) => row.METADADOS_HANDOFF?.states?.AUTORIZACAO_CALCULO) : v4 ? 'GRANULAR_CONFORME_RESTRICOES' : restrictions.global.AUTORIZACAO_DE_CALCULO,
  publication: reviewed ? data.map((row) => row.METADADOS_HANDOFF?.states?.PUBLICACAO) : v4 ? dataDocument.gates.publication : restrictions.global.PUBLICACAO
}, null, 2));
