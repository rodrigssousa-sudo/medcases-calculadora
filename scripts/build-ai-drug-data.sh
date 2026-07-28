#!/bin/bash
set -Eeuo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO"

[ -f "scripts/export-clinical-data.js" ] || {
  echo "ERRO: scripts/export-clinical-data.js ausente." >&2
  exit 1
}

PRESERVE_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/medcases-ai-drug-data-preserve.XXXXXX")"
cleanup_preserve() {
  rm -rf "$PRESERVE_ROOT"
}
trap cleanup_preserve EXIT

if [ -d "data/ai-drug-data" ]; then
  mv "data/ai-drug-data" "$PRESERVE_ROOT/data-ai-drug-data"
fi
if [ -d "public/data/ai-drug-data" ]; then
  mv "public/data/ai-drug-data" "$PRESERVE_ROOT/public-ai-drug-data"
fi

restore_preserved_ai_drug_data() {
  if [ -d "$PRESERVE_ROOT/data-ai-drug-data" ]; then
    mkdir -p "data"
    rm -rf "data/ai-drug-data"
    mv "$PRESERVE_ROOT/data-ai-drug-data" "data/ai-drug-data"
  fi
  if [ -d "$PRESERVE_ROOT/public-ai-drug-data" ]; then
    mkdir -p "public/data"
    rm -rf "public/data/ai-drug-data"
    mv "$PRESERVE_ROOT/public-ai-drug-data" "public/data/ai-drug-data"
  fi
}

if ! node scripts/export-clinical-data.js; then
  restore_preserved_ai_drug_data
  exit 1
fi

restore_preserved_ai_drug_data

echo "Gerando projeção farmacológica para a IA..."
node scripts/generate-ai-drug-data.mjs

echo "Validando projeção gerada..."
python3 - "$REPO/generated/ai-drug-data" <<'PY'
import hashlib
import json
import pathlib
import sys

root = pathlib.Path(sys.argv[1])
manifest = json.loads((root / 'manifest.json').read_text(encoding='utf-8'))
index = json.loads((root / 'index.json').read_text(encoding='utf-8'))
documents = sorted((root / 'drugs').glob('*.json'))

errors = []
source = manifest.get('source') or {}
projection = manifest.get('projection') or {}

if source.get('exportErrors') != 0:
    errors.append('source_export_errors')
if source.get('drugCount') != len(index):
    errors.append('source_index_count_mismatch')
if projection.get('drugCount') != len(index):
    errors.append('projection_index_count_mismatch')
if len(documents) != len(index):
    errors.append('projection_document_count_mismatch')
if projection.get('typedRegimenCount') != 0:
    errors.append('typed_regimen_count_not_zero')
if projection.get('deterministicDosingPublishableCount') != 0:
    errors.append('deterministic_publishable_count_not_zero')
if projection.get('textToRegimenInferenceUsed') is not False:
    errors.append('text_inference_enabled')
if projection.get('calculatorLogicDependencyAdded') is not False:
    errors.append('calculator_logic_dependency_added')

index_by_id = {entry.get('drugId'): entry for entry in index}
if len(index_by_id) != len(index):
    errors.append('duplicate_index_id')

for path in documents:
    payload = json.loads(path.read_text(encoding='utf-8'))
    drug_id = payload.get('drugId')
    if path.stem != drug_id:
        errors.append(f'filename_id_mismatch:{path.name}')
        continue
    if drug_id not in index_by_id:
        errors.append(f'document_not_indexed:{drug_id}')
    if payload.get('typedRegimens') != []:
        errors.append(f'typed_regimens_not_empty:{drug_id}')
    if payload.get('typedRegimenInferenceUsed') is not False:
        errors.append(f'inference_enabled:{drug_id}')
    if payload.get('publishableForDeterministicDosing') is not False:
        errors.append(f'deterministic_publishable:{drug_id}')
    calculator_document = (
        payload.get('sourceEvidence') or {}
    ).get('calculatorDocument')
    if not isinstance(calculator_document, dict):
        errors.append(f'calculator_document_missing:{drug_id}')
    elif calculator_document.get('id') != drug_id:
        errors.append(f'calculator_document_id_mismatch:{drug_id}')

if errors:
    for error in errors:
        print(error, file=sys.stderr)
    raise SystemExit(1)

print('AI_DRUG_DATA_VALIDATION_PASS')
print(f'generatedDrugCount={len(index)}')
print('typedRegimenCount=0')
print('deterministicDosingPublishableCount=0')
PY

echo "BUILD_AI_DRUG_DATA_PASS"

echo "Publicando projeção farmacológica versionada..."
node scripts/publish-ai-drug-data.mjs

echo "PUBLICATION_AI_DRUG_DATA_PASS"
