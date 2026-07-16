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
const crypto = require('crypto');

/* ── Caminhos ── */
const ROOT        = path.resolve(__dirname, '..');
const DB_DIR      = path.join(ROOT, 'database');
const CLINICAL_COLLISION_POLICY_PATH = path.join(
  ROOT,
  'config',
  'clinical-collision-policy.proposed.json'
);

const CLINICAL_COLLISION_POLICY_SHA256 =
  '54ab771c13833ef15626eed228be0a46db6443a43d52bb68d4f1dbe1468f8eaf';

const FINAL_OUT_DIR = path.join(
  ROOT,
  'data'
);

const PUBLIC_FINAL_OUT_DIR = path.join(
  ROOT,
  'public',
  'data'
);

/*
 * Clinical Safety Core — Atomic Output
 *
 * O bundle clínico continua sendo construído primeiro em staging.
 * A próxima etapa conectará a mesma publicação validada aos dois
 * destinos:
 *
 *   data/
 *   public/data/
 */
const OUT_DIR = path.join(
  ROOT,
  `.clinical-data-staging-${process.pid}`
);

const PUBLIC_OUT_DIR = path.join(
  ROOT,
  `.clinical-public-data-staging-${process.pid}`
);

const OUT_DRUGS = path.join(
  OUT_DIR,
  'drugs'
);

const BACKUP_DIR_PREFIX =
  '.clinical-data-backup-';

const PUBLIC_BACKUP_DIR_PREFIX =
  '.clinical-public-data-backup-';

const BACKUP_OUT_DIR = path.join(
  ROOT,
  `${BACKUP_DIR_PREFIX}${process.pid}`
);

const PUBLIC_BACKUP_OUT_DIR = path.join(
  ROOT,
  `${PUBLIC_BACKUP_DIR_PREFIX}${process.pid}`
);


const CLINICAL_DUAL_PUBLICATION_SCHEMA =
  'clinical-dual-publication-v1';

const PUBLICATION_JOURNAL_PATH = path.join(
  ROOT,
  '.clinical-data-publication.json'
);

const PUBLICATION_JOURNAL_TEMP_PATH = path.join(
  ROOT,
  `.clinical-data-publication-${process.pid}.tmp`
);

/*
 * Clinical Safety Core — lock exclusivo de exportação.
 *
 * Impede dois processos de:
 * - recuperar ou remover o mesmo backup;
 * - escrever no mesmo staging;
 * - publicar bundles concorrentes.
 */
const EXPORT_LOCK_DIR = path.join(
  ROOT,
  '.clinical-data-export.lock'
);

const EXPORT_LOCK_METADATA_PATH = path.join(
  EXPORT_LOCK_DIR,
  'owner.json'
);

/*
 * Serializa exclusivamente a recuperação de locks obsoletos.
 * Nunca remover um lock principal sem possuir este diretório.
 */
const EXPORT_LOCK_RECOVERY_DIR = path.join(
  ROOT,
  '.clinical-data-export-lock-recovery'
);

const EXPORT_LOCK_TOKEN = [
  process.pid,
  Date.now(),
  Math.random().toString(16).slice(2),
].join('-');

let exportLockHeld = false;

function readClinicalExportLock() {
  let raw;

  try {
    raw = fs.readFileSync(
      EXPORT_LOCK_METADATA_PATH,
      'utf8'
    );
  } catch (error) {
    const detail =
      error && error.code
        ? error.code
        : String(error);

    throw new Error(
      `CLINICAL_EXPORT_LOCK_INVALID: metadata indisponível ` +
      `(${detail})`
    );
  }

  let metadata;

  try {
    metadata = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      'CLINICAL_EXPORT_LOCK_INVALID: owner.json não é JSON válido'
    );
  }

  if (
    !metadata ||
    !Number.isInteger(metadata.pid) ||
    metadata.pid <= 0 ||
    typeof metadata.token !== 'string' ||
    metadata.token.length === 0
  ) {
    throw new Error(
      'CLINICAL_EXPORT_LOCK_INVALID: proprietário incompleto'
    );
  }

  return metadata;
}

function isClinicalExportProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (
      error &&
      error.code === 'ESRCH'
    ) {
      return false;
    }

    if (
      error &&
      error.code === 'EPERM'
    ) {
      throw new Error(
        `CLINICAL_EXPORT_LOCK_PROCESS_UNVERIFIABLE: ` +
        `sem permissão para verificar PID ${pid}`
      );
    }

    const detail =
      error && error.code
        ? error.code
        : String(error);

    throw new Error(
      `CLINICAL_EXPORT_LOCK_PROCESS_CHECK_FAILURE: ` +
      `PID ${pid} (${detail})`
    );
  }
}

function acquireClinicalExportLock() {
  /*
   * Até três tentativas permitem:
   * 1. detectar lock obsoleto;
   * 2. recuperá-lo sob exclusão;
   * 3. adquirir o lock principal.
   */
  for (
    let attempt = 0;
    attempt < 3;
    attempt++
  ) {
    try {
      fs.mkdirSync(EXPORT_LOCK_DIR);
    } catch (error) {
      if (
        !error ||
        error.code !== 'EEXIST'
      ) {
        const detail =
          error && error.code
            ? error.code
            : String(error);

        throw new Error(
          `CLINICAL_EXPORT_LOCK_ACQUIRE_FAILURE: ${detail}`
        );
      }

      const observedOwner =
        readClinicalExportLock();

      if (
        isClinicalExportProcessAlive(
          observedOwner.pid
        )
      ) {
        throw new Error(
          `CLINICAL_EXPORT_ALREADY_RUNNING: ` +
          `PID ${observedOwner.pid}, iniciado em ` +
          `${observedOwner.startedAt || 'horário desconhecido'}`
        );
      }

      /*
       * Apenas um processo pode verificar e remover o lock
       * obsoleto. Isso evita que dois candidatos removam o
       * lock recém-adquirido um do outro.
       */
      let recoveryLockHeld = false;

      try {
        try {
          fs.mkdirSync(
            EXPORT_LOCK_RECOVERY_DIR
          );

          recoveryLockHeld = true;
        } catch (recoveryError) {
          if (
            recoveryError &&
            recoveryError.code === 'EEXIST'
          ) {
            throw new Error(
              'CLINICAL_EXPORT_LOCK_RECOVERY_BUSY: ' +
              'outro processo está verificando um lock obsoleto'
            );
          }

          const detail =
            recoveryError &&
            recoveryError.code
              ? recoveryError.code
              : String(recoveryError);

          throw new Error(
            `CLINICAL_EXPORT_LOCK_RECOVERY_FAILURE: ${detail}`
          );
        }

        /*
         * Revalidar dentro da exclusão. O proprietário pode
         * ter mudado desde a primeira leitura.
         */
        if (
          fs.existsSync(EXPORT_LOCK_DIR)
        ) {
          const currentOwner =
            readClinicalExportLock();

          if (
            isClinicalExportProcessAlive(
              currentOwner.pid
            )
          ) {
            throw new Error(
              `CLINICAL_EXPORT_ALREADY_RUNNING: ` +
              `PID ${currentOwner.pid}, iniciado em ` +
              `${currentOwner.startedAt || 'horário desconhecido'}`
            );
          }

          fs.rmSync(
            EXPORT_LOCK_DIR,
            {
              recursive: true,
              force: false,
            }
          );

          console.warn(
            `⚠️ Lock obsoleto removido: PID ${currentOwner.pid}.`
          );
        }
      } finally {
        if (
          recoveryLockHeld &&
          fs.existsSync(
            EXPORT_LOCK_RECOVERY_DIR
          )
        ) {
          fs.rmSync(
            EXPORT_LOCK_RECOVERY_DIR,
            {
              recursive: true,
              force: true,
            }
          );
        }
      }

      continue;
    }

    const metadata = {
      pid: process.pid,
      token: EXPORT_LOCK_TOKEN,
      startedAt: new Date().toISOString(),
    };

    try {
      fs.writeFileSync(
        EXPORT_LOCK_METADATA_PATH,
        JSON.stringify(
          metadata,
          null,
          2
        ),
        'utf8'
      );
    } catch (error) {
      fs.rmSync(
        EXPORT_LOCK_DIR,
        {
          recursive: true,
          force: true,
        }
      );

      const detail =
        error && error.code
          ? error.code
          : String(error);

      throw new Error(
        `CLINICAL_EXPORT_LOCK_METADATA_FAILURE: ${detail}`
      );
    }

    exportLockHeld = true;

    console.log(
      `🔒 Lock clínico adquirido pelo PID ${process.pid}.`
    );

    return;
  }

  throw new Error(
    'CLINICAL_EXPORT_LOCK_ACQUIRE_FAILURE: ' +
    'limite de tentativas excedido'
  );
}

function releaseClinicalExportLock(
  {
    suppressErrors = false,
  } = {}
) {
  if (!exportLockHeld) {
    return;
  }

  try {
    if (!fs.existsSync(EXPORT_LOCK_DIR)) {
      exportLockHeld = false;
      return;
    }

    const owner = readClinicalExportLock();

    if (
      owner.pid !== process.pid ||
      owner.token !== EXPORT_LOCK_TOKEN
    ) {
      throw new Error(
        `CLINICAL_EXPORT_LOCK_OWNERSHIP_LOST: ` +
        `o lock pertence ao PID ${owner.pid}`
      );
    }

    fs.rmSync(
      EXPORT_LOCK_DIR,
      {
        recursive: true,
        force: false,
      }
    );

    exportLockHeld = false;
  } catch (error) {
    if (suppressErrors) {
      return;
    }

    throw error;
  }
}

function terminateClinicalExport(exitCode) {
  if (exportLockHeld) {
    try {
      cleanupStagingOutput();
    } catch (_) {
      /*
       * O lock continua protegendo o processo até a liberação.
       * A recuperação transacional tratará eventual staging.
       */
    }

    releaseClinicalExportLock({
      suppressErrors: true,
    });
  }

  process.exit(exitCode);
}

process.once(
  'exit',
  () => {
    releaseClinicalExportLock({
      suppressErrors: true,
    });
  }
);

process.once(
  'SIGINT',
  () => terminateClinicalExport(130)
);

process.once(
  'SIGTERM',
  () => terminateClinicalExport(143)
);


/*
 * Descobre backups deixados por processos anteriores.
 * O PID do processo que criou o backup não será reutilizado
 * como referência obrigatória durante a recuperação.
 */
function listBackupOutputDirs(
  prefix
) {
  return fs
    .readdirSync(
      ROOT,
      {
        withFileTypes: true,
      }
    )
    .filter(
      entry =>
        entry.isDirectory() &&
        entry.name.startsWith(prefix)
    )
    .map(
      entry =>
        path.join(ROOT, entry.name)
    )
    .sort(
      (left, right) =>
        compareStableText(left, right)
    );
}

function removeDirectoryIfExists(
  directory
) {
  if (!fs.existsSync(directory)) {
    return;
  }

  fs.rmSync(
    directory,
    {
      recursive: true,
      force: true,
    }
  );
}

function cleanupStagingOutput() {
  removeDirectoryIfExists(
    OUT_DIR
  );

  removeDirectoryIfExists(
    PUBLIC_OUT_DIR
  );

  if (
    fs.existsSync(
      PUBLICATION_JOURNAL_TEMP_PATH
    )
  ) {
    fs.rmSync(
      PUBLICATION_JOURNAL_TEMP_PATH,
      {
        force: true,
      }
    );
  }
}

function listClinicalOutputFiles(
  directory,
  baseDirectory = directory
) {
  if (!fs.existsSync(directory)) {
    throw new Error(
      `CLINICAL_OUTPUT_DIRECTORY_MISSING: ${directory}`
    );
  }

  const files = [];

  const entries = fs
    .readdirSync(
      directory,
      {
        withFileTypes: true,
      }
    )
    .sort(
      (left, right) =>
        compareStableText(
          left.name,
          right.name
        )
    );

  for (const entry of entries) {
    const absolutePath = path.join(
      directory,
      entry.name
    );

    if (entry.isDirectory()) {
      files.push(
        ...listClinicalOutputFiles(
          absolutePath,
          baseDirectory
        )
      );

      continue;
    }

    if (!entry.isFile()) {
      throw new Error(
        `CLINICAL_OUTPUT_ENTRY_INVALID: ${absolutePath}`
      );
    }

    files.push({
      absolutePath,
      relativePath: path
        .relative(
          baseDirectory,
          absolutePath
        )
        .split(path.sep)
        .join('/'),
    });
  }

  return files;
}

function hashClinicalOutputFile(
  filePath
) {
  return crypto
    .createHash('sha256')
    .update(
      fs.readFileSync(filePath)
    )
    .digest('hex');
}

function assertClinicalOutputsByteIdentical(
  firstDirectory,
  secondDirectory
) {
  const firstFiles =
    listClinicalOutputFiles(
      firstDirectory
    );

  const secondFiles =
    listClinicalOutputFiles(
      secondDirectory
    );

  if (
    firstFiles.length !==
    secondFiles.length
  ) {
    throw new Error(
      `CLINICAL_DUAL_OUTPUT_FILE_COUNT_MISMATCH: ` +
      `${firstFiles.length} != ${secondFiles.length}`
    );
  }

  for (
    let index = 0;
    index < firstFiles.length;
    index++
  ) {
    const first =
      firstFiles[index];

    const second =
      secondFiles[index];

    if (
      first.relativePath !==
      second.relativePath
    ) {
      throw new Error(
        `CLINICAL_DUAL_OUTPUT_PATH_MISMATCH: ` +
        `${first.relativePath} != ${second.relativePath}`
      );
    }

    if (
      hashClinicalOutputFile(
        first.absolutePath
      ) !==
      hashClinicalOutputFile(
        second.absolutePath
      )
    ) {
      throw new Error(
        `CLINICAL_DUAL_OUTPUT_CONTENT_MISMATCH: ` +
        `${first.relativePath}`
      );
    }
  }

  return firstFiles.length;
}

function preparePublicStagingOutput() {
  if (!fs.existsSync(OUT_DIR)) {
    throw new Error(
      'CLINICAL_PUBLIC_STAGING_SOURCE_MISSING'
    );
  }

  removeDirectoryIfExists(
    PUBLIC_OUT_DIR
  );

  try {
    fs.cpSync(
      OUT_DIR,
      PUBLIC_OUT_DIR,
      {
        recursive: true,
        force: false,
        errorOnExist: true,
      }
    );
  } catch (error) {
    removeDirectoryIfExists(
      PUBLIC_OUT_DIR
    );

    throw new Error(
      `CLINICAL_PUBLIC_STAGING_COPY_FAILURE: ` +
      `${error.message}`
    );
  }

  const fileCount =
    assertClinicalOutputsByteIdentical(
      OUT_DIR,
      PUBLIC_OUT_DIR
    );

  console.log(
    `🪞 Staging público validado: ` +
    `${fileCount} arquivos byte a byte idênticos`
  );

  return fileCount;
}

const VALID_PUBLICATION_PHASES =
  new Set([
    'prepared',
    'moving_backups',
    'backed_up',
    'publishing_data',
    'data_published',
    'publishing_public',
    'public_published',
  ]);

function writePublicationJournal(
  phase,
  state
) {
  if (
    !VALID_PUBLICATION_PHASES.has(
      phase
    )
  ) {
    throw new Error(
      `CLINICAL_ATOMIC_JOURNAL_PHASE_INVALID: ${phase}`
    );
  }

  if (
    !state ||
    typeof state.hadExistingData !==
      'boolean' ||
    typeof state.hadExistingPublic !==
      'boolean'
  ) {
    throw new Error(
      'CLINICAL_ATOMIC_JOURNAL_STATE_INVALID'
    );
  }

  const payload = {
    schema:
      CLINICAL_DUAL_PUBLICATION_SCHEMA,
    phase,
    pid:
      process.pid,
    token:
      EXPORT_LOCK_TOKEN,
    hadExistingData:
      state.hadExistingData,
    hadExistingPublic:
      state.hadExistingPublic,
    updatedAt:
      new Date().toISOString(),
  };

  try {
    fs.writeFileSync(
      PUBLICATION_JOURNAL_TEMP_PATH,
      JSON.stringify(
        payload,
        null,
        2
      ),
      'utf8'
    );

    fs.renameSync(
      PUBLICATION_JOURNAL_TEMP_PATH,
      PUBLICATION_JOURNAL_PATH
    );
  } catch (error) {
    if (
      fs.existsSync(
        PUBLICATION_JOURNAL_TEMP_PATH
      )
    ) {
      fs.rmSync(
        PUBLICATION_JOURNAL_TEMP_PATH,
        {
          force: true,
        }
      );
    }

    throw new Error(
      `CLINICAL_ATOMIC_JOURNAL_WRITE_FAILURE: ` +
      `${error.message}`
    );
  }

  return payload;
}

function readPublicationJournal() {
  let raw;

  try {
    raw = fs.readFileSync(
      PUBLICATION_JOURNAL_PATH,
      'utf8'
    );
  } catch (error) {
    throw new Error(
      `CLINICAL_ATOMIC_JOURNAL_READ_FAILURE: ` +
      `${error.message}`
    );
  }

  let journal;

  try {
    journal = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      'CLINICAL_ATOMIC_JOURNAL_INVALID_JSON'
    );
  }

  const valid =
    journal &&
    journal.schema ===
      CLINICAL_DUAL_PUBLICATION_SCHEMA &&
    VALID_PUBLICATION_PHASES.has(
      journal.phase
    ) &&
    Number.isInteger(
      journal.pid
    ) &&
    typeof journal.token ===
      'string' &&
    journal.token.length > 0 &&
    typeof journal.hadExistingData ===
      'boolean' &&
    typeof journal.hadExistingPublic ===
      'boolean';

  if (!valid) {
    throw new Error(
      'CLINICAL_ATOMIC_JOURNAL_INVALID'
    );
  }

  return journal;
}

function removePublicationJournal() {
  if (
    fs.existsSync(
      PUBLICATION_JOURNAL_PATH
    )
  ) {
    fs.rmSync(
      PUBLICATION_JOURNAL_PATH,
      {
        force: false,
      }
    );
  }

  if (
    fs.existsSync(
      PUBLICATION_JOURNAL_TEMP_PATH
    )
  ) {
    fs.rmSync(
      PUBLICATION_JOURNAL_TEMP_PATH,
      {
        force: true,
      }
    );
  }
}


function interruptedArtifactPath(
  prefix,
  pid
) {
  return path.join(
    ROOT,
    `${prefix}${pid}`
  );
}

function removeFileIfExists(
  filePath
) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  fs.rmSync(
    filePath,
    {
      force: true,
    }
  );
}

function cleanupInterruptedArtifacts(
  journal
) {
  removeDirectoryIfExists(
    interruptedArtifactPath(
      '.clinical-data-staging-',
      journal.pid
    )
  );

  removeDirectoryIfExists(
    interruptedArtifactPath(
      '.clinical-public-data-staging-',
      journal.pid
    )
  );

  removeFileIfExists(
    interruptedArtifactPath(
      '.clinical-data-publication-',
      journal.pid
    ) + '.tmp'
  );
}

function rollbackPublicationTarget({
  hadExisting,
  finalDirectory,
  backupDirectory,
  label,
}) {
  const finalExists =
    fs.existsSync(finalDirectory);

  const backupExists =
    fs.existsSync(backupDirectory);

  if (!hadExisting) {
    removeDirectoryIfExists(
      finalDirectory
    );

    removeDirectoryIfExists(
      backupDirectory
    );

    return;
  }

  if (backupExists) {
    removeDirectoryIfExists(
      finalDirectory
    );

    fs.mkdirSync(
      path.dirname(finalDirectory),
      {
        recursive: true,
      }
    );

    fs.renameSync(
      backupDirectory,
      finalDirectory
    );

    return;
  }

  if (finalExists) {
    /*
     * O destino antigo ainda não havia sido movido.
     */
    return;
  }

  throw new Error(
    `CLINICAL_ATOMIC_RECOVERY_TARGET_MISSING: ${label}`
  );
}

function rollbackInterruptedPublication(
  journal
) {
  const dataBackup =
    interruptedArtifactPath(
      BACKUP_DIR_PREFIX,
      journal.pid
    );

  const publicBackup =
    interruptedArtifactPath(
      PUBLIC_BACKUP_DIR_PREFIX,
      journal.pid
    );

  rollbackPublicationTarget({
    hadExisting:
      journal.hadExistingData,
    finalDirectory:
      FINAL_OUT_DIR,
    backupDirectory:
      dataBackup,
    label:
      'data',
  });

  rollbackPublicationTarget({
    hadExisting:
      journal.hadExistingPublic,
    finalDirectory:
      PUBLIC_FINAL_OUT_DIR,
    backupDirectory:
      publicBackup,
    label:
      'public/data',
  });

  cleanupInterruptedArtifacts(
    journal
  );

  removePublicationJournal();

  console.warn(
    `⚠️ Publicação interrompida revertida ` +
    `a partir da fase ${journal.phase}.`
  );
}

function finalizeInterruptedPublication(
  journal
) {
  assertClinicalOutputsByteIdentical(
    FINAL_OUT_DIR,
    PUBLIC_FINAL_OUT_DIR
  );

  removeDirectoryIfExists(
    interruptedArtifactPath(
      BACKUP_DIR_PREFIX,
      journal.pid
    )
  );

  removeDirectoryIfExists(
    interruptedArtifactPath(
      PUBLIC_BACKUP_DIR_PREFIX,
      journal.pid
    )
  );

  cleanupInterruptedArtifacts(
    journal
  );

  removePublicationJournal();

  console.warn(
    '⚠️ Publicação dupla previamente concluída foi finalizada.'
  );
}

function recoverLegacyTarget({
  finalDirectory,
  backupPrefix,
  label,
}) {
  const backups =
    listBackupOutputDirs(
      backupPrefix
    );

  if (backups.length === 0) {
    return;
  }

  if (!fs.existsSync(finalDirectory)) {
    if (backups.length !== 1) {
      throw new Error(
        `CLINICAL_ATOMIC_RECOVERY_AMBIGUOUS: ` +
        `${label} ausente e ` +
        `${backups.length} backups encontrados`
      );
    }

    fs.mkdirSync(
      path.dirname(finalDirectory),
      {
        recursive: true,
      }
    );

    fs.renameSync(
      backups[0],
      finalDirectory
    );

    console.warn(
      `⚠️ Bundle anterior restaurado em ${label}.`
    );

    return;
  }

  for (const backupDirectory of backups) {
    removeDirectoryIfExists(
      backupDirectory
    );
  }
}

function recoverInterruptedPublication() {
  if (
    fs.existsSync(
      PUBLICATION_JOURNAL_PATH
    )
  ) {
    const journal =
      readPublicationJournal();

    if (
      journal.phase ===
      'public_published'
    ) {
      try {
        finalizeInterruptedPublication(
          journal
        );

        return;
      } catch (error) {
        console.warn(
          `⚠️ Publicação concluída inconsistente; ` +
          `iniciando rollback: ${error.message}`
        );
      }
    }

    rollbackInterruptedPublication(
      journal
    );

    return;
  }

  recoverLegacyTarget({
    finalDirectory:
      FINAL_OUT_DIR,
    backupPrefix:
      BACKUP_DIR_PREFIX,
    label:
      'data',
  });

  recoverLegacyTarget({
    finalDirectory:
      PUBLIC_FINAL_OUT_DIR,
    backupPrefix:
      PUBLIC_BACKUP_DIR_PREFIX,
    label:
      'public/data',
  });

  const dataExists =
    fs.existsSync(FINAL_OUT_DIR);

  const publicExists =
    fs.existsSync(
      PUBLIC_FINAL_OUT_DIR
    );

  if (dataExists !== publicExists) {
    throw new Error(
      'CLINICAL_DUAL_OUTPUT_LEGACY_TARGET_MISMATCH'
    );
  }

  if (dataExists && publicExists) {
    assertClinicalOutputsByteIdentical(
      FINAL_OUT_DIR,
      PUBLIC_FINAL_OUT_DIR
    );
  }
}

function publishStagedOutput() {
  if (!fs.existsSync(OUT_DIR)) {
    throw new Error(
      'CLINICAL_ATOMIC_PUBLISH_FAILURE: ' +
      'staging data ausente'
    );
  }

  if (!fs.existsSync(PUBLIC_OUT_DIR)) {
    throw new Error(
      'CLINICAL_ATOMIC_PUBLISH_FAILURE: ' +
      'staging public/data ausente'
    );
  }

  assertClinicalOutputsByteIdentical(
    OUT_DIR,
    PUBLIC_OUT_DIR
  );

  recoverInterruptedPublication();

  if (
    fs.existsSync(BACKUP_OUT_DIR) ||
    fs.existsSync(PUBLIC_BACKUP_OUT_DIR)
  ) {
    throw new Error(
      'CLINICAL_ATOMIC_PUBLISH_FAILURE: ' +
      'backup do processo atual já existe'
    );
  }

  const state = {
    hadExistingData:
      fs.existsSync(FINAL_OUT_DIR),
    hadExistingPublic:
      fs.existsSync(
        PUBLIC_FINAL_OUT_DIR
      ),
  };

  try {
    writePublicationJournal(
      'prepared',
      state
    );

    writePublicationJournal(
      'moving_backups',
      state
    );

    if (state.hadExistingData) {
      fs.renameSync(
        FINAL_OUT_DIR,
        BACKUP_OUT_DIR
      );
    }

    if (state.hadExistingPublic) {
      fs.renameSync(
        PUBLIC_FINAL_OUT_DIR,
        PUBLIC_BACKUP_OUT_DIR
      );
    }

    writePublicationJournal(
      'backed_up',
      state
    );

    writePublicationJournal(
      'publishing_data',
      state
    );

    fs.renameSync(
      OUT_DIR,
      FINAL_OUT_DIR
    );

    writePublicationJournal(
      'data_published',
      state
    );

    writePublicationJournal(
      'publishing_public',
      state
    );

    fs.mkdirSync(
      path.dirname(
        PUBLIC_FINAL_OUT_DIR
      ),
      {
        recursive: true,
      }
    );

    fs.renameSync(
      PUBLIC_OUT_DIR,
      PUBLIC_FINAL_OUT_DIR
    );

    writePublicationJournal(
      'public_published',
      state
    );
  } catch (error) {
    let rollbackMessage = '';

    if (
      fs.existsSync(
        PUBLICATION_JOURNAL_PATH
      )
    ) {
      try {
        rollbackInterruptedPublication(
          readPublicationJournal()
        );
      } catch (rollbackError) {
        rollbackMessage =
          `; rollback falhou: ` +
          `${rollbackError.message}`;
      }
    } else {
      cleanupStagingOutput();
    }

    throw new Error(
      `CLINICAL_ATOMIC_PUBLISH_FAILURE: ` +
      `${error.message}` +
      rollbackMessage
    );
  }

  /*
   * A partir de public_published, os dois destinos já contêm
   * o novo bundle. Falhas de limpeza deixam o journal para a
   * recuperação segura na próxima execução.
   */
  try {
    const fileCount =
      assertClinicalOutputsByteIdentical(
        FINAL_OUT_DIR,
        PUBLIC_FINAL_OUT_DIR
      );

    removeDirectoryIfExists(
      BACKUP_OUT_DIR
    );

    removeDirectoryIfExists(
      PUBLIC_BACKUP_OUT_DIR
    );

    cleanupStagingOutput();
    removePublicationJournal();

    console.log(
      `🚀 Publicação dupla concluída: ` +
      `${fileCount} arquivos idênticos em ` +
      `data/ e public/data/`
    );
  } catch (error) {
    throw new Error(
      `CLINICAL_ATOMIC_FINALIZATION_FAILURE: ` +
      `${error.message}`
    );
  }
}

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

/* ================================================================
   UTIL: carregar um database/*.js em contexto vm isolado
   Retorna o objeto window simulado após execução do script.
   Cada arquivo usa `window.X = ...`, então simulamos window.
================================================================ */
function loadDatabaseFile(filePath, preseed = {}) {
  const src = fs.readFileSync(filePath, 'utf8');

  /*
   * Clinical Safety Core — VM Loader fail-closed
   *
   * O preseed inicializa namespaces exigidos por módulos legados.
   * Qualquer erro de sintaxe, dependência ou timeout interrompe o
   * pipeline, em vez de devolver um banco vazio ou incompleto.
   */
  const sandbox = {
    ...preseed,
    console,
  };

  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;

  const script = new vm.Script(src, {
    filename: path.basename(filePath),
  });

  const context = vm.createContext(sandbox);

  script.runInContext(context, {
    timeout: 3000,
  });

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

  /*
   * Clinical Safety Core — calculate() fail-closed
   *
   * Nenhum registro com idioma ausente, retorno nulo ou cálculo
   * quebrado pode entrar no bundle clínico.
   */
  const runCalculate = (lang) => {
    try {
      const result = drug.calculate(PACIENTE_ADULTO, lang);

      if (
        !result ||
        typeof result !== 'object' ||
        Array.isArray(result)
      ) {
        throw new TypeError(
          'calculate não retornou objeto clínico válido'
        );
      }

      return result;
    } catch (error) {
      const message =
        error && error.message
          ? error.message
          : String(error);

      throw new Error(
        `CLINICAL_CALCULATE_FAILURE: "${id}" [${lang}] em ` +
        `${moduleMeta.file}: ${message}`
      );
    }
  };

  const resultPT = runCalculate('pt');
  const resultES = runCalculate('es');

  /* Extrai keywords do nome + commercialNames */
  const keywords = buildKeywords(id, drug, resultPT);

  return {
    id,
    category:   drug.category  || moduleMeta.label.toLowerCase(),
    icon:       drug.icon       || '💊',
    color:      drug.color      || null,
    colorTxt:   drug.colorTxt   || null,

    /* Dados bilíngues completos */
    pt: sanitizeResult(resultPT),
    es: sanitizeResult(resultES),

    /* Nome canônico bilíngue (para índice) */
    name: {
      pt: (drug.name && drug.name.pt) || (resultPT && resultPT.name) || id,
      es: (drug.name && drug.name.es) || (resultES && resultES.name) || id,
    },

    keywords,
    dataVersion:
      requireClinicalIdentity().version,
    clinicalContentSha256:
      requireClinicalIdentity().sha256,
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
    dataVersion:
      requireClinicalIdentity().version,
    clinicalContentSha256:
      requireClinicalIdentity().sha256,
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
  const contextVariantCount =
    Array.isArray(
      drugJson.clinicalContextVariants
    )
      ? drugJson
          .clinicalContextVariants
          .length
      : 0;

  return {
    id:
      drugJson.id,
    name:
      drugJson.name,
    category:
      drugJson.category,
    icon:
      drugJson.icon,
    keywords:
      drugJson.keywords || [],
    schema:
      drugJson.schema,
    sourceModule:
      drugJson.sourceModule,
    hasContextVariants:
      contextVariantCount > 0,
    contextVariantCount,
    canonicalOwner:
      drugJson.clinicalCollision
        ? drugJson
            .clinicalCollision
            .canonicalOwner
        : drugJson.sourceModule,
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
   CLINICAL SAFETY CORE — PREFLIGHT GLOBAL
================================================================ */

/*
 * Clinical Safety Core — política de colisões ancorada.
 *
 * Nesta etapa a política é apenas carregada e validada.
 * A resolução das colisões continua fail-closed até o patch
 * específico de integração das variantes contextuais.
 */
function loadClinicalCollisionPolicy() {
  if (
    !fs.existsSync(
      CLINICAL_COLLISION_POLICY_PATH
    )
  ) {
    throw new Error(
      'CLINICAL_COLLISION_POLICY_MISSING: ' +
      CLINICAL_COLLISION_POLICY_PATH
    );
  }

  const raw = fs.readFileSync(
    CLINICAL_COLLISION_POLICY_PATH
  );

  const actualHash = crypto
    .createHash('sha256')
    .update(raw)
    .digest('hex');

  if (
    actualHash !==
    CLINICAL_COLLISION_POLICY_SHA256
  ) {
    throw new Error(
      `CLINICAL_COLLISION_POLICY_HASH_MISMATCH: ` +
      `esperado ${CLINICAL_COLLISION_POLICY_SHA256}; ` +
      `recebido ${actualHash}`
    );
  }

  let policy;

  try {
    policy = JSON.parse(
      raw.toString('utf8')
    );
  } catch (error) {
    throw new Error(
      'CLINICAL_COLLISION_POLICY_INVALID_JSON'
    );
  }

  if (
    policy.schema !==
    'clinical-collision-policy-v1'
  ) {
    throw new Error(
      'CLINICAL_COLLISION_POLICY_SCHEMA_INVALID'
    );
  }

  if (policy.status !== 'proposed') {
    throw new Error(
      `CLINICAL_COLLISION_POLICY_STATUS_INVALID: ` +
      `${String(policy.status)}`
    );
  }

  if (
    !Array.isArray(policy.entries) ||
    policy.entries.length !== 43
  ) {
    throw new Error(
      'CLINICAL_COLLISION_POLICY_COUNT_INVALID'
    );
  }

  const safetyRules =
    policy.safetyRules || {};

  const validSafetyRules =
    safetyRules.oneCanonicalBasePerId === true &&
    safetyRules.preserveAllDivergentVariants === true &&
    safetyRules.automaticFieldMerge === false &&
    safetyRules.discardSecondaryRecords === false &&
    safetyRules.unknownCollisionFailsClosed === true &&
    safetyRules.variantMustExposeSourceModule === true;

  if (!validSafetyRules) {
    throw new Error(
      'CLINICAL_COLLISION_POLICY_SAFETY_RULES_INVALID'
    );
  }

  const registeredModules = new Set(
    DB_MODULES.map(
      moduleMeta => moduleMeta.file
    )
  );

  const ids = new Set();

  for (const entry of policy.entries) {
    if (
      !entry ||
      typeof entry !== 'object' ||
      Array.isArray(entry)
    ) {
      throw new Error(
        'CLINICAL_COLLISION_POLICY_ENTRY_INVALID'
      );
    }

    if (
      typeof entry.id !== 'string' ||
      entry.id.length === 0
    ) {
      throw new Error(
        'CLINICAL_COLLISION_POLICY_ID_INVALID'
      );
    }

    if (ids.has(entry.id)) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_DUPLICATE_ID: ` +
        `"${entry.id}"`
      );
    }

    ids.add(entry.id);

    if (
      typeof entry.canonicalOwner !== 'string' ||
      !registeredModules.has(
        entry.canonicalOwner
      )
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_OWNER_INVALID: ` +
        `"${entry.id}"`
      );
    }

    if (
      !Array.isArray(
        entry.contextVariants
      ) ||
      entry.contextVariants.length !== 1
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_VARIANT_COUNT_INVALID: ` +
        `"${entry.id}"`
      );
    }

    const variant =
      entry.contextVariants[0];

    if (
      !variant ||
      typeof variant.module !== 'string' ||
      !registeredModules.has(
        variant.module
      ) ||
      variant.module ===
        entry.canonicalOwner ||
      typeof variant.context !== 'string' ||
      variant.context.length === 0
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_VARIANT_INVALID: ` +
        `"${entry.id}"`
      );
    }

    if (
      entry.automaticFieldMerge !== false ||
      entry.discardSecondaryRecord !== false
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_UNSAFE_ACTION: ` +
        `"${entry.id}"`
      );
    }

    if (
      entry.exportPolicy !==
      'canonical_base_with_context_variants'
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_EXPORT_MODE_INVALID: ` +
        `"${entry.id}"`
      );
    }
  }

  return {
    ...policy,
    sha256: actualHash,
  };
}

/*
 * Clinical Safety Core — identidade determinística do bundle.
 *
 * A identidade depende somente de:
 * - todos os arquivos database/*.js;
 * - política clínica ancorada.
 *
 * Timestamps, PID, locale e ordem do sistema de arquivos não
 * participam do conteúdo exportado.
 */
let activeClinicalIdentity = null;

function compareStableText(left, right) {
  return Buffer.compare(
    Buffer.from(
      String(left),
      'utf8'
    ),
    Buffer.from(
      String(right),
      'utf8'
    )
  );
}

function computeClinicalIdentity() {
  const databaseFiles = fs
    .readdirSync(
      DB_DIR,
      {
        withFileTypes: true,
      }
    )
    .filter(
      entry =>
        entry.isFile() &&
        entry.name.endsWith('.js')
    )
    .map(
      entry =>
        path.join(
          DB_DIR,
          entry.name
        )
    );

  if (databaseFiles.length !== 34) {
    throw new Error(
      `CLINICAL_IDENTITY_DATABASE_COUNT_INVALID: ` +
      `esperados 34 arquivos; encontrados ` +
      `${databaseFiles.length}`
    );
  }

  const identityFiles = [
    ...databaseFiles,
    CLINICAL_COLLISION_POLICY_PATH,
  ].sort(
    (left, right) =>
      compareStableText(
        path
          .relative(ROOT, left)
          .split(path.sep)
          .join('/'),
        path
          .relative(ROOT, right)
          .split(path.sep)
          .join('/')
      )
  );

  const aggregate =
    crypto.createHash('sha256');

  const files = [];

  for (const filePath of identityFiles) {
    if (!fs.existsSync(filePath)) {
      throw new Error(
        `CLINICAL_IDENTITY_FILE_MISSING: ${filePath}`
      );
    }

    const relativePath = path
      .relative(
        ROOT,
        filePath
      )
      .split(path.sep)
      .join('/');

    const fileHash = crypto
      .createHash('sha256')
      .update(
        fs.readFileSync(filePath)
      )
      .digest('hex');

    aggregate.update(
      relativePath,
      'utf8'
    );

    aggregate.update(
      Buffer.from([0])
    );

    aggregate.update(
      fileHash,
      'ascii'
    );

    aggregate.update(
      '\n',
      'utf8'
    );

    files.push({
      path: relativePath,
      sha256: fileHash,
    });
  }

  const sha256 =
    aggregate.digest('hex');

  return {
    schema:
      'clinical-source-content-v1',
    version:
      `clinical-data-v1-${sha256.slice(0, 16)}`,
    sha256,
    fileCount:
      files.length,
    databaseFileCount:
      databaseFiles.length,
    files,
  };
}

function requireClinicalIdentity() {
  if (!activeClinicalIdentity) {
    throw new Error(
      'CLINICAL_IDENTITY_NOT_INITIALIZED'
    );
  }

  return activeClinicalIdentity;
}

/*
 * Normaliza o ID exatamente uma vez, antes de qualquer escrita.
 */
function normalizeClinicalId(id, moduleMeta) {
  if (
    typeof id !== 'string' &&
    typeof id !== 'number'
  ) {
    throw new Error(
      `CLINICAL_INVALID_ID: tipo inválido em ${moduleMeta.file}`
    );
  }

  const safeId = String(id)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9_-]/g, '_')
    .replace(/__+/g, '_')
    .replace(/^_|_$/g, '');

  if (!safeId) {
    throw new Error(
      `CLINICAL_INVALID_ID: ID vazio após normalização em ` +
      `${moduleMeta.file}`
    );
  }

  return safeId;
}

/*
 * Converte cada módulo para uma lista uniforme sem alterar
 * os objetos clínicos originais.
 */
function buildModuleEntries(mod, rawDB) {
  if (mod.type === 'object') {
    if (
      !rawDB ||
      typeof rawDB !== 'object' ||
      Array.isArray(rawDB)
    ) {
      throw new Error(
        `CLINICAL_MODULE_TYPE_FAILURE: ${mod.file} deveria ` +
        `expor objeto em ${mod.globalVar}`
      );
    }

    return Object.entries(rawDB).map(
      ([id, drug]) => ({
        id,
        drug,
      })
    );
  }

  if (mod.type === 'array') {
    if (!Array.isArray(rawDB)) {
      throw new Error(
        `CLINICAL_MODULE_TYPE_FAILURE: ${mod.file} deveria ` +
        `expor array em ${mod.globalVar}`
      );
    }

    return rawDB.map((drug, index) => {
      if (
        !drug ||
        typeof drug !== 'object' ||
        Array.isArray(drug)
      ) {
        throw new Error(
          `CLINICAL_DRUG_RECORD_INVALID: ${mod.file} ` +
          `posição ${index}`
        );
      }

      const generatedId =
        drug.id ||
        (
          drug.name &&
          typeof drug.name === 'string'
            ? drug.name
                .toLowerCase()
                .replace(/\s+/g, '_')
            : `${mod.globalVar.toLowerCase()}_${index}`
        );

      return {
        id: generatedId,
        drug,
      };
    });
  }

  throw new Error(
    `CLINICAL_MODULE_CONFIG_FAILURE: tipo "${mod.type}" ` +
    `inválido em ${mod.file}`
  );
}

/*
 * Anexa a resolução explícita de uma colisão ao registro
 * canônico. Cada variante é exportada integralmente e mantém
 * seu módulo de origem.
 *
 * Nenhum campo é mesclado automaticamente.
 */
function attachClinicalCollisionResolution(
  drugJson,
  preparedEntry,
  collisionPolicy
) {
  drugJson.sourceModule =
    preparedEntry.moduleMeta.file;

  if (!preparedEntry.collision) {
    return 0;
  }

  const collision =
    preparedEntry.collision;

  const variants =
    collision.variants.map(
      variant => {
        const variantJson = extractDrug(
          preparedEntry.safeId,
          variant.drug,
          variant.moduleMeta
        );

        variantJson.sourceModule =
          variant.moduleMeta.file;

        return {
          context:
            variant.context,
          sourceModule:
            variant.moduleMeta.file,
          record:
            variantJson,
        };
      }
    );

  drugJson.clinicalCollision = {
    policySchema:
      collisionPolicy.schema,
    policyStatus:
      collisionPolicy.status,
    policySha256:
      collisionPolicy.sha256,
    canonicalOwner:
      collision.canonicalOwner,
    decisionBasis:
      collision.decisionBasis,
    exportPolicy:
      collision.exportPolicy,
    automaticFieldMerge: false,
    discardSecondaryRecord: false,
  };

  drugJson.clinicalContextVariants =
    variants;

  return variants.length;
}

/*
 * Carrega e valida integralmente os 29 módulos antes de:
 * - criar staging;
 * - executar calculate();
 * - escrever qualquer JSON.
 */
function preflightClinicalModules(
  collisionPolicy
) {
  const policyById = new Map(
    collisionPolicy.entries.map(
      entry => [
        entry.id,
        entry,
      ]
    )
  );

  const candidateRegistry = new Map();
  const observedCollisions = new Set();

  /*
   * Primeira passagem:
   * - carrega os 29 módulos;
   * - valida todos os registros;
   * - agrupa candidatos pelo ID normalizado;
   * - não executa calculate();
   * - não cria staging;
   * - não escreve arquivos.
   */
  for (const mod of DB_MODULES) {
    const filePath = path.join(
      DB_DIR,
      mod.file
    );

    if (!fs.existsSync(filePath)) {
      throw new Error(
        `CLINICAL_MODULE_FILE_MISSING: ${mod.file}`
      );
    }

    const sandbox = loadDatabaseFile(
      filePath,
      mod.preseed || {}
    );

    const rawDB = sandbox[mod.globalVar];

    if (
      rawDB === undefined ||
      rawDB === null
    ) {
      throw new Error(
        `CLINICAL_MODULE_GLOBAL_MISSING: ` +
        `${mod.globalVar} não encontrado em ${mod.file}`
      );
    }

    const entries = buildModuleEntries(
      mod,
      rawDB
    );

    if (entries.length === 0) {
      throw new Error(
        `CLINICAL_MODULE_EMPTY: ${mod.file} ` +
        `não possui registros`
      );
    }

    for (
      let index = 0;
      index < entries.length;
      index++
    ) {
      const {
        id,
        drug,
      } = entries[index];

      if (
        !drug ||
        typeof drug !== 'object' ||
        Array.isArray(drug)
      ) {
        throw new Error(
          `CLINICAL_DRUG_RECORD_INVALID: ${mod.file} ` +
          `registro ${String(id || index)}`
        );
      }

      const safeId = normalizeClinicalId(
        id,
        mod
      );

      const candidate = {
        id,
        safeId,
        drug,
        moduleMeta: mod,
      };

      const group =
        candidateRegistry.get(safeId);

      if (!group) {
        candidateRegistry.set(
          safeId,
          {
            safeId,
            candidates: [
              candidate,
            ],
            policyEntry: null,
          }
        );

        continue;
      }

      if (group.candidates.length >= 2) {
        throw new Error(
          `CLINICAL_ID_MULTIPLE_OCCURRENCES: ` +
          `"${safeId}" possui mais de dois registros`
        );
      }

      const policyEntry =
        policyById.get(safeId);

      if (!policyEntry) {
        throw new Error(
          `CLINICAL_ID_COLLISION_UNDECLARED: ` +
          `"${safeId}" entre ` +
          `${group.candidates[0].moduleMeta.file} e ` +
          `${mod.file}`
        );
      }

      const variantPolicy =
        policyEntry.contextVariants[0];

      const actualModules = new Set([
        group.candidates[0]
          .moduleMeta.file,
        mod.file,
      ]);

      const expectedModules = new Set([
        policyEntry.canonicalOwner,
        variantPolicy.module,
      ]);

      const modulePairMatches =
        actualModules.size === 2 &&
        expectedModules.size === 2 &&
        [...expectedModules].every(
          moduleName =>
            actualModules.has(moduleName)
        );

      if (!modulePairMatches) {
        throw new Error(
          `CLINICAL_COLLISION_POLICY_PAIR_MISMATCH: ` +
          `"${safeId}" esperado entre ` +
          `${policyEntry.canonicalOwner} e ` +
          `${variantPolicy.module}; encontrado entre ` +
          `${[...actualModules].join(' e ')}`
        );
      }

      group.candidates.push(
        candidate
      );

      group.policyEntry =
        policyEntry;

      observedCollisions.add(
        safeId
      );
    }
  }

  /*
   * Toda entrada da política deve corresponder a uma colisão
   * realmente observada na base atual.
   */
  for (const policyEntry of collisionPolicy.entries) {
    if (
      !observedCollisions.has(
        policyEntry.id
      )
    ) {
      throw new Error(
        `CLINICAL_COLLISION_POLICY_UNUSED_ENTRY: ` +
        `"${policyEntry.id}"`
      );
    }
  }

  if (
    observedCollisions.size !==
    collisionPolicy.entries.length
  ) {
    throw new Error(
      `CLINICAL_COLLISION_POLICY_COVERAGE_FAILURE: ` +
      `${observedCollisions.size} colisões observadas para ` +
      `${collisionPolicy.entries.length} entradas`
    );
  }

  /*
   * Segunda passagem:
   * - escolhe exatamente um proprietário canônico;
   * - preserva o outro registro como variante;
   * - não mistura campos;
   * - não descarta nenhum registro.
   */
  const moduleBuckets = new Map(
    DB_MODULES.map(
      mod => [
        mod.file,
        [],
      ]
    )
  );

  const idRegistry = new Map();

  const sortedGroups = [
    ...candidateRegistry.values(),
  ].sort(
    (left, right) =>
      compareStableText(
        left.safeId,
        right.safeId
      )
  );

  for (const group of sortedGroups) {
    let canonicalCandidate;
    let collision = null;

    if (group.candidates.length === 1) {
      canonicalCandidate =
        group.candidates[0];

      if (
        policyById.has(group.safeId)
      ) {
        throw new Error(
          `CLINICAL_COLLISION_POLICY_EXPECTED_DUPLICATE_MISSING: ` +
          `"${group.safeId}"`
        );
      }
    } else {
      const policyEntry =
        group.policyEntry;

      if (!policyEntry) {
        throw new Error(
          `CLINICAL_COLLISION_POLICY_INTERNAL_FAILURE: ` +
          `"${group.safeId}"`
        );
      }

      canonicalCandidate =
        group.candidates.find(
          candidate =>
            candidate.moduleMeta.file ===
            policyEntry.canonicalOwner
        );

      const variantPolicy =
        policyEntry.contextVariants[0];

      const variantCandidate =
        group.candidates.find(
          candidate =>
            candidate.moduleMeta.file ===
            variantPolicy.module
        );

      if (
        !canonicalCandidate ||
        !variantCandidate
      ) {
        throw new Error(
          `CLINICAL_COLLISION_POLICY_OWNER_NOT_FOUND: ` +
          `"${group.safeId}"`
        );
      }

      collision = {
        policyId: policyEntry.id,
        canonicalOwner:
          policyEntry.canonicalOwner,
        decisionBasis:
          policyEntry.decisionBasis,
        exportPolicy:
          policyEntry.exportPolicy,
        automaticFieldMerge: false,
        discardSecondaryRecord: false,
        variants: [
          {
            context:
              variantPolicy.context,
            moduleMeta:
              variantCandidate.moduleMeta,
            drug:
              variantCandidate.drug,
          },
        ],
      };
    }

    const preparedEntry = {
      id: canonicalCandidate.id,
      safeId: group.safeId,
      drug: canonicalCandidate.drug,
      moduleMeta:
        canonicalCandidate.moduleMeta,
      collision,
    };

    moduleBuckets
      .get(
        canonicalCandidate.moduleMeta.file
      )
      .push(
        preparedEntry
      );

    idRegistry.set(
      group.safeId,
      {
        file:
          canonicalCandidate.moduleMeta.file,
        label:
          canonicalCandidate.moduleMeta.label,
        originalId:
          String(canonicalCandidate.id),
        hasContextVariants:
          collision !== null,
      }
    );
  }

  const preparedModules =
    DB_MODULES.map(
      mod => ({
        mod,
        entries:
          moduleBuckets
            .get(mod.file)
            .sort(
              (left, right) =>
                compareStableText(
        left.safeId,
        right.safeId
      )
            ),
      })
    );

  const sourceRecordCount = [
    ...candidateRegistry.values(),
  ].reduce(
    (
      total,
      group
    ) =>
      total +
      group.candidates.length,
    0
  );

  return {
    preparedModules,
    idRegistry,
    collisionCount:
      observedCollisions.size,
    sourceRecordCount,
  };
}

/* ================================================================
   MAIN — pipeline principal de exportação
================================================================ */
async function main() {
  acquireClinicalExportLock();

  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log('║  MedCases Pro — Clinical Data Export Pipeline v1.0  ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');

  const startTime = Date.now();

  const collisionPolicy =
    loadClinicalCollisionPolicy();

  const clinicalIdentity =
    computeClinicalIdentity();

  activeClinicalIdentity =
    clinicalIdentity;

  console.log(
    `🔐 Identidade clínica: ` +
    `${clinicalIdentity.version}, ` +
    `SHA-256 ${clinicalIdentity.sha256.slice(0, 12)}…`
  );

  console.log(
    `🛡️ Política de colisões validada: ` +
    `${collisionPolicy.entries.length} IDs, ` +
    `SHA-256 ${collisionPolicy.sha256.slice(0, 12)}…`
  );

  /*
   * ── 1. Recuperação e preflight clínico ──
   *
   * A recuperação transacional ocorre primeiro. Depois, todos
   * os módulos e IDs são validados antes de criar o staging.
   */
  recoverInterruptedPublication();

  console.log(
    '🔎 Executando preflight global dos módulos clínicos...'
  );

  const {
    preparedModules,
    idRegistry,
    collisionCount,
    sourceRecordCount,
  } = preflightClinicalModules(
    collisionPolicy
  );

  console.log(
    `✅ Preflight concluído: ${preparedModules.length} módulos, ` +
    `${sourceRecordCount} registros-fonte, ` +
    `${idRegistry.size} IDs canônicos e ` +
    `${collisionCount} variantes`
  );

  /*
   * ── 2. Criar staging somente após o preflight ──
   */
  cleanupStagingOutput();

  fs.mkdirSync(OUT_DIR, {
    recursive: true,
  });

  fs.mkdirSync(OUT_DRUGS, {
    recursive: true,
  });

  console.log(
    `📁 Diretório temporário de saída: ${OUT_DIR}`
  );

  const drugsIndex = [];
  const emittedIds = new Set();

  let totalDrugs = 0;
  let totalErrors = 0;
  let totalContextVariants = 0;

  const moduleStats = [];

  /*
   * Todos os módulos abaixo já foram carregados, tipados,
   * normalizados e verificados contra colisões.
   */
  for (const preparedModule of preparedModules) {
    const {
      mod,
      entries,
    } = preparedModule;

    process.stdout.write(
      `\n📦 Exportando: ${mod.label} (${mod.file})... ` +
      `${entries.length} fármacos\n`
    );

    let modCount = 0;
    let modErrors = 0;

    for (const preparedEntry of entries) {
      const {
        safeId,
        drug,
        moduleMeta,
      } = preparedEntry;
      try {
        /*
         * Guarda defensiva de runtime. O preflight já garante
         * unicidade, mas nenhuma escrita duplicada é permitida.
         */
        if (emittedIds.has(safeId)) {
          throw new Error(
            `CLINICAL_RUNTIME_DUPLICATE_WRITE: "${safeId}"`
          );
        }

        const drugJson = extractDrug(
          safeId,
          drug,
          moduleMeta
        );

        const variantCount =
          attachClinicalCollisionResolution(
            drugJson,
            preparedEntry,
            collisionPolicy
          );

        const outPath = path.join(
          OUT_DRUGS,
          `${safeId}.json`
        );

        fs.writeFileSync(
          outPath,
          JSON.stringify(drugJson, null, 2),
          'utf8'
        );

        emittedIds.add(safeId);

        totalContextVariants +=
          variantCount;

        drugsIndex.push(
          buildIndexEntry(drugJson)
        );

        modCount++;
        totalDrugs++;

        process.stdout.write('.');
      } catch (err) {
        /*
         * Qualquer erro do Clinical Safety Core é fatal.
         */
        if (
          err &&
          typeof err.message === 'string' &&
          err.message.startsWith('CLINICAL_')
        ) {
          throw err;
        }

        console.warn(
          `\n    ❌ Erro ao exportar ${safeId}: ${err.message}`
        );

        modErrors++;
        totalErrors++;
      }
    }

    console.log(
      `\n   ✅ ${modCount} exportados` +
      (
        modErrors > 0
          ? `, ${modErrors} erros`
          : ''
      )
    );

    moduleStats.push({
      module: mod.label,
      count: modCount,
      errors: modErrors,
      status:
        modErrors === 0
          ? 'ok'
          : 'partial',
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
    return compareStableText(nameA, nameB);
  });

  const indexPath = path.join(OUT_DIR, 'drugs_index.json');
  fs.writeFileSync(indexPath, JSON.stringify(drugsIndex, null, 2), 'utf8');
  console.log(`\n📋 Índice gerado: drugs_index.json (${drugsIndex.length} entradas)`);

  /* ── 5. Escrever manifest.json ── */
  const manifest = {
    version:
      clinicalIdentity.version,
    contentSha256:
      clinicalIdentity.sha256,
    identitySchema:
      clinicalIdentity.schema,
    identityFileCount:
      clinicalIdentity.fileCount,
    databaseFileCount:
      clinicalIdentity.databaseFileCount,
    generatedBy:
      'scripts/export-clinical-data.js',
    drugCount:     totalDrugs,
    sourceRecordCount,
    collisionCount,
    contextVariantCount:
      totalContextVariants,
    interactionCount: interacoes.count,
    exportErrors:  totalErrors,
    modules:       moduleStats,
    collisionPolicy: {
      schema:
        collisionPolicy.schema,
      status:
        collisionPolicy.status,
      sha256:
        collisionPolicy.sha256,
      canonicalOwners:
        collisionPolicy.entries.length,
      preservedContextVariants:
        totalContextVariants,
      automaticFieldMerge: false,
      discardedRecords: 0,
    },
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
        'dataVersion', 'clinicalContentSha256',
        'source', 'sourceModule',
      ],
      optionalFields: [
        'clinicalCollision',
        'clinicalContextVariants',
      ],
    },
  };

  const manifestPath = path.join(OUT_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`📄 Manifest gerado: manifest.json`);

  /*
   * Não publicar bundles com erros recuperáveis acumulados.
   */
  if (totalErrors > 0) {
    cleanupStagingOutput();

    console.warn(
      `\n⚠️ ${totalErrors} erro(s) durante a exportação.`
    );

    process.exit(1);
  }

  preparePublicStagingOutput();

  publishStagedOutput();

  console.log(
    `\n🚀 Publicação atômica dupla concluída: ` +
    `${FINAL_OUT_DIR} e ${PUBLIC_FINAL_OUT_DIR}`
  );

  /* ── 6. Relatório final ── */
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log('║                  RELATÓRIO FINAL                    ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  ✅ Fármacos exportados : ${String(totalDrugs).padStart(6)}                    ║`);
  console.log(`║  🧬 Variantes preservadas: ${String(totalContextVariants).padStart(6)}                    ║`);
  console.log(`║  🔗 Interações mapeadas : ${String(interacoes.count).padStart(6)}                    ║`);
  console.log(`║  ❌ Erros encontrados   : ${String(totalErrors).padStart(6)}                    ║`);
  console.log(`║  ⏱️  Tempo de execução  : ${String(elapsed + 's').padStart(6)}                    ║`);
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  📁 Saída: ${FINAL_OUT_DIR.replace(ROOT, '.').padEnd(43)}║`);
  console.log('╚══════════════════════════════════════════════════════╝');

  console.log('\n📌 Arquivos gerados:');
  console.log(`   ./data/manifest.json`);
  console.log(`   ./data/drugs_index.json`);
  console.log(`   ./data/drugs/ (${totalDrugs} arquivos JSON)`);

  console.log('\n🔍 Verificação rápida (após deploy):');
  console.log('   https://medcasescalcu.com/data/manifest.json');
  console.log('   https://medcasescalcu.com/data/drugs_index.json');
  console.log('   https://medcasescalcu.com/data/drugs/metoprolol.json');

  releaseClinicalExportLock();

  console.log(
    '\n✅ Exportação concluída sem erros.\n'
  );
}

/* ── Executar ── */
main().catch(err => {
  /*
   * Falha antes da publicação: remove somente staging.
   * Um backup de recuperação nunca é apagado neste ponto.
   */
  /*
   * Somente o processo que adquiriu o lock pode remover
   * staging ou executar a liberação.
   *
   * Um processo rejeitado por concorrência não pode tocar
   * nos arquivos temporários do proprietário ativo.
   */
  if (exportLockHeld) {
    try {
      cleanupStagingOutput();
    } catch (cleanupError) {
      console.error(
        '⚠️ Falha ao limpar staging após erro fatal:',
        cleanupError
      );
    }

    releaseClinicalExportLock({
      suppressErrors: true,
    });
  }

  console.error(
    '\n❌ Erro fatal no pipeline:',
    err
  );

  process.exit(1);
});
