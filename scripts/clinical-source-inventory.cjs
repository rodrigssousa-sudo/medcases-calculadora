'use strict';
// This is the existing exporter registry, shared with source identity validation.
// A declaration establishes inventory membership, never medical authority.
const fs = require('node:fs');
const path = require('node:path');

const DB_MODULES = [
  {
    file: 'gold33_novo_093.js',
    globalVar: 'GOLD33_NOVO_093_DRUGS_DB',
    type: 'object',
    label: 'Gold33 Novo 093',
    privateReferenceOnly: true,
  },
  {
    file: 'gold33_nova_lista.js',
    globalVar: 'GOLD33_NOVA_LISTA_DRUGS_DB',
    type: 'object',
    label: 'Gold33 Nova Lista',
    privateReferenceOnly: true,
  },
  {
    file: 'alergia_imunologia.js',
    globalVar: 'ALERGIA_IMUNOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Alergia e Imunologia',
  },
  {
    file: 'analgesia_opioides.js',
    globalVar: 'ANALGESIA_OPIOIDES_DRUGS_DB',
    type: 'object',
    label: 'Analgesia e Opioides',
  },
  {
    file: 'analgesicos.js',
    globalVar: 'ANALGESICOS_DRUGS_DB',
    type: 'object',
    label: 'Analgésicos',
  },
  {
    file: 'anticoag.js',
    globalVar: 'ANTICOAG_DRUGS_DB',
    type: 'object',
    label: 'Anticoagulação',
  },
  {
    file: 'antimicrobianos.js',
    globalVar: 'ANTIMICROBIANOS_DRUGS_DB',
    type: 'object',
    label: 'Antimicrobianos',
  },
  {
    file: 'cardio.js',
    globalVar: 'CARDIO_DRUGS_DB',
    type: 'object',
    label: 'Cardiovascular',
  },
  {
    file: 'cardiologia.js',
    globalVar: 'CARDIOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Cardiologia',
  },
  {
    file: 'emergencia.js',
    globalVar: 'EMERGENCIA_DRUGS_DB',
    type: 'object',
    label: 'Emergência',
  },
  {
    file: 'endocrino.js',
    globalVar: 'ENDOCRINO_DRUGS_DB',
    type: 'object',
    label: 'Endocrinologia',
  },
  {
    file: 'endocrino_glp1.js',
    globalVar: 'ENDOCRINO_GLP1_DRUGS_DB',
    type: 'array',
    label: 'Endocrinologia GLP-1',
  },
  {
    file: 'gastro.js',
    globalVar: 'GASTRO_DRUGS_DB',
    type: 'array',
    label: 'Gastroenterologia — Legado',
  },
  {
    file: 'gastro_imuno.js',
    globalVar: 'GASTRO_IMUNO_DRUGS_DB',
    type: 'array',
    label: 'Gastro e Imunologia',
  },
  {
    file: 'gastroenterologia.js',
    globalVar: 'GASTROENTEROLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Gastroenterologia',
  },
  {
    file: 'ginecologia.js',
    globalVar: 'GINECOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Ginecologia',
  },
  {
    file: 'hematologia.js',
    globalVar: 'HEMATOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Hematologia',
  },
  {
    file: 'imuno_corticoide.js',
    globalVar: 'IMUNO_CORTICOIDE_DRUGS_DB',
    type: 'array',
    label: 'Imunologia e Corticoides',
  },
  {
    file: 'infectologia.js',
    globalVar: 'INFECTOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Infectologia',
  },
  {
    file: 'nefro.js',
    globalVar: 'NEFRO_DRUGS_DB',
    type: 'object',
    label: 'Nefrologia',
  },
  {
    file: 'neurologia.js',
    globalVar: 'NEUROLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Neurologia',
    preseed: {
      NEUROLOGIA_DRUGS_DB: {},
      NEURO_DRUGS_DB: {},

      /*
       * Helper bilíngue exigido pelos registros migrados
       * de psicofarmacos.js para neurologia.js.
       */
      t: (lang, pt, es) => lang === 'pt' ? pt : es,
    },
  },
  {
    file: 'obesidade.js',
    globalVar: 'OBESIDADE_DRUGS_DB',
    type: 'object',
    label: 'Obesidade',
  },
  {
    file: 'oftalmologia.js',
    globalVar: 'OFTALMOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Oftalmologia',
  },
  {
    file: 'pneumologia.js',
    globalVar: 'PNEUMOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Pneumologia',
  },
  {
    file: 'pneumologia_otorrino.js',
    globalVar: 'PNEUMOLOGIA_OTORRINO_DRUGS_DB',
    type: 'object',
    label: 'Pneumologia e Otorrinolaringologia',
  },
  {
    file: 'psicofarmacos.js',
    globalVar: 'PSICOFARMACOS_DRUGS_DB',
    type: 'object',
    label: 'Psicofármacos',
  },
  {
    file: 'psiquiatria.js',
    globalVar: 'PSIQUIATRIA_DRUGS_DB',
    type: 'object',
    label: 'Psiquiatria',
  },
  {
    file: 'reumatologia.js',
    globalVar: 'REUMATOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Reumatologia',
  },
  {
    file: 'sedacao.js',
    globalVar: 'SEDACAO_DRUGS_DB',
    type: 'object',
    label: 'Sedação',
  },
  {
    file: 'toxicologia.js',
    globalVar: 'TOXICOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Toxicologia',
  },
  {
    file: 'uro_ginecologia.js',
    globalVar: 'URO_GINECOLOGIA_DRUGS_DB',
    type: 'object',
    label: 'Urologia e Ginecologia',
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


// These files already participated in the source hash, but were never drug
// export modules. Preserve that distinction: do not execute them as Gold input.
const IDENTITY_ONLY_FILES = Object.freeze([
  'infusoes.js', 'neuro.js', 'pneumo.js', 'prescricoes.js',
]);

function validateCanonicalInventory(databaseRoot, {
  modules = DB_MODULES,
  interactions = INTERACOES_MODULE,
  identityOnlyFiles = IDENTITY_ONLY_FILES,
} = {}) {
  const declared = [...modules.map(module => module.file), interactions.file, ...identityOnlyFiles];
  if (declared.some(file => typeof file !== 'string' || !/^[a-z0-9_]+\.js$/.test(file))) {
    throw new Error('CLINICAL_INVENTORY_INVALID_DECLARATION');
  }
  const seen = new Set();
  const duplicates = declared.filter(file => { const duplicate = seen.has(file); seen.add(file); return duplicate; });
  const entries = fs.readdirSync(databaseRoot, {withFileTypes: true}).filter(entry => entry.name.endsWith('.js'));
  const actual = new Set(entries.map(entry => entry.name));
  const missing = declared.filter(file => !actual.has(file));
  const unexpected = [...actual].filter(file => !seen.has(file));
  const nonRegular = entries.filter(entry => !entry.isFile()).map(entry => entry.name);
  if (missing.length || unexpected.length || duplicates.length || nonRegular.length) {
    throw new Error('CLINICAL_INVENTORY_MISMATCH: ' + JSON.stringify({
      missing: missing.sort(), unexpected: unexpected.sort(),
      duplicates: duplicates.sort(), nonRegular: nonRegular.sort(),
    }));
  }
  return declared.sort((a, b) => Buffer.compare(Buffer.from(a), Buffer.from(b)))
    .map(file => path.join(databaseRoot, file));
}

module.exports = {DB_MODULES, INTERACOES_MODULE, IDENTITY_ONLY_FILES, validateCanonicalInventory};
