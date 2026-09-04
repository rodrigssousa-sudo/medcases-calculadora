#!/bin/bash
# =============================================================
# deploy.sh — MedCases Pro | Push para GitHub
#
# USO:
#   ./deploy.sh "mensagem do commit"
#
# AUTENTICAÇÃO:
#   Quando solicitado senha, use seu PAT (Personal Access Token).
#   NUNCA armazene o PAT diretamente neste arquivo.
#   Para evitar digitar a cada push, configure o git credential helper:
#     git config --global credential.helper store
#   (O token ficará em ~/.git-credentials — proteja esse arquivo)
#
# CONFIGURAR REMOTE (uma vez só):
#   git remote add origin https://github.com/rodrigssousa-sudo/medcases-calculadora.git
# =============================================================

set -e

REPO="https://github.com/rodrigssousa-sudo/medcases-calculadora.git"
BRANCH="main"

# Mensagem de commit: argumento $1 ou mensagem padrão
if [ -n "$1" ]; then
  MSG="$1"
else
  MSG="chore: atualização automática — $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "🏥 MedCases Pro — Deploy para GitHub"
echo "====================================="
echo "📌 Repositório : $REPO"
echo "🌿 Branch      : $BRANCH"
echo "📝 Mensagem    : $MSG"
echo ""

# Verifica se já existe um remote origin configurado
if git remote get-url origin &>/dev/null; then
  echo "✅ Remote 'origin' já configurado: $(git remote get-url origin)"
else
  echo "⚙️  Configurando remote origin..."
  git remote add origin "$REPO"
  echo "✅ Remote adicionado."
fi

# Configura identidade (se não estiver configurada globalmente)
if [ -z "$(git config user.email)" ]; then
  git config user.email "deploy@medcasespro.app"
  git config user.name  "MedCases Pro"
fi

# Puxa possíveis mudanças remotas (ex: CNAME do GitHub Pages)
echo "📥 Sincronizando com remoto..."
git fetch origin "$BRANCH" 2>/dev/null || true
git merge "origin/$BRANCH" --allow-unrelated-histories --no-edit 2>/dev/null || true
echo "✅ Sincronização concluída."

# Stage e commit
# MEDCASES AUTO OFFLINE MANIFEST START

# CALC-PUBLIC-CLINICAL-KNOWLEDGE-EXCLUSION-V1
# data/clinical-knowledge é canônico/protegido e nunca deve ser publicado.
MC_REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
MC_PUBLIC_CLINICAL="$MC_REPO_ROOT/public/data/clinical-knowledge"

if [ -e "$MC_PUBLIC_CLINICAL" ]; then
  echo "🛡️ Removendo cópia pública não-canônica de clinical-knowledge..."
  rm -rf "$MC_PUBLIC_CLINICAL"
fi

if [ -e "$MC_PUBLIC_CLINICAL" ]; then
  echo "❌ ERRO: public/data/clinical-knowledge ainda existe."
  exit 1
fi

echo "✅ public/data/clinical-knowledge excluído do deploy."

# CALC-DEPLOY-EPHEMERAL-CLINICAL-PROVENANCE-GATE-V1
echo "🧬 Validando proveniência clínica canônica..."

if ! (
  set -Eeuo pipefail

  _MC_CALC_MANIFEST="data/manifest.json"
  _MC_CLINICAL_MANIFEST="data/clinical-knowledge/manifest.json"
  _MC_CLINICAL_BACKUP="$(mktemp "${TMPDIR:-/tmp}/medcases-clinical-manifest.XXXXXX.json")"
  _MC_RESTORED=0

  _mc_restore_clinical_provenance() {
    set +e
    if [ "${_MC_RESTORED:-0}" = "0" ] && [ -f "${_MC_CLINICAL_BACKUP:-}" ]; then
      cp -p "$_MC_CLINICAL_BACKUP" "$_MC_CLINICAL_MANIFEST"
      _MC_RESTORED=1
    fi
  }

  trap '_mc_restore_clinical_provenance' EXIT HUP INT TERM

  [ -f "$_MC_CALC_MANIFEST" ]
  [ -f "$_MC_CLINICAL_MANIFEST" ]

  if git ls-files --error-unmatch "$_MC_CLINICAL_MANIFEST" >/dev/null 2>&1; then
    echo "CLINICAL_MANIFEST_MUST_REMAIN_UNTRACKED"
    exit 1
  fi

  git check-ignore -q "$_MC_CLINICAL_MANIFEST"

  cp -p "$_MC_CLINICAL_MANIFEST" "$_MC_CLINICAL_BACKUP"
  _MC_CLINICAL_PRE_SHA="$(shasum -a 256 "$_MC_CLINICAL_MANIFEST" | awk '{print $1}')"

  python3 - "$_MC_CALC_MANIFEST" "$_MC_CLINICAL_MANIFEST" <<'PY_MEDCASES_PROVENANCE'
import json
import re
import sys
from pathlib import Path

calc_path = Path(sys.argv[1])
clinical_path = Path(sys.argv[2])

calc = json.loads(calc_path.read_text(encoding="utf-8"))
text = clinical_path.read_text(encoding="utf-8")
clinical = json.loads(text)

source_sha = calc.get("contentSha256")
drug_count = calc.get("drugCount")
created = clinical.get("createdFrom") or {}
pinned_sha = created.get("calculatorClinicalDataSha256")
pinned_count = created.get("calculatorCanonicalDrugCount")

if not isinstance(source_sha, str) or len(source_sha) != 64:
    raise SystemExit("INVALID_CALCULATOR_CONTENT_SHA")

if drug_count != 838:
    raise SystemExit(f"CALCULATOR_DRUG_COUNT_NOT_838:{drug_count}")

if pinned_count != drug_count:
    raise SystemExit(
        f"CALCULATOR_DRUG_COUNT_DRIFT:{pinned_count}!={drug_count}"
    )

print(f"CALCULATOR_CONTENT_SHA={source_sha}")
print(f"CLINICAL_PROVENANCE_PIN_BEFORE={pinned_sha}")
print(f"CALCULATOR_DRUG_COUNT={drug_count}")

if pinned_sha == source_sha:
    print("PROVENANCE_PATCH_REQUIRED=NO")
    raise SystemExit(0)

if not isinstance(pinned_sha, str) or len(pinned_sha) != 64:
    raise SystemExit("INVALID_EXISTING_PROVENANCE_PIN")

pattern = re.compile(
    r'("calculatorClinicalDataSha256"\s*:\s*")'
    + re.escape(pinned_sha)
    + r'(")'
)

matches = list(pattern.finditer(text))
if len(matches) != 1:
    raise SystemExit(f"PROVENANCE_PIN_ANCHOR_COUNT:{len(matches)}")

patched = pattern.sub(
    lambda m: m.group(1) + source_sha + m.group(2),
    text,
    count=1,
)

clinical_path.write_text(patched, encoding="utf-8")

after = json.loads(clinical_path.read_text(encoding="utf-8"))
expected = json.loads(json.dumps(clinical))
expected["createdFrom"]["calculatorClinicalDataSha256"] = source_sha

if after != expected:
    raise SystemExit("UNAUTHORIZED_CLINICAL_MANIFEST_CHANGE")

print("PROVENANCE_PATCH_REQUIRED=YES")
print("PROVENANCE_PATCH_SCOPE=calculatorClinicalDataSha256_ONLY")
PY_MEDCASES_PROVENANCE

  python3 scripts/validate-clinical-knowledge.py
  python3 scripts/validate-clinical-reconciliation.py

  [ ! -e public/data/clinical-knowledge ]

  _mc_restore_clinical_provenance

  _MC_CLINICAL_POST_SHA="$(shasum -a 256 "$_MC_CLINICAL_MANIFEST" | awk '{print $1}')"
  [ "$_MC_CLINICAL_PRE_SHA" = "$_MC_CLINICAL_POST_SHA" ]

  rm -f "$_MC_CLINICAL_BACKUP"
  trap - EXIT HUP INT TERM

  echo "DEPLOY_PROVENANCE_GATE=PASS"
  echo "CLINICAL_KNOWLEDGE_VALIDATION=PASS"
  echo "CLINICAL_RECONCILIATION_VALIDATION=PASS"
  echo "EPHEMERAL_PROVENANCE_RESTORED=YES"
); then
  echo "❌ DEPLOY_PROVENANCE_GATE=FAIL"
  exit 1
fi

echo "✅ Proveniência clínica validada e restaurada."
echo "✅ public/data/clinical-knowledge permanece excluído."


echo "🧭 Atualizando manifesto offline canônico..."
if [ ! -f "scripts/generate-offline-manifest.js" ]; then
  echo "❌ ERRO: gerador offline ausente."
  exit 1
fi
node scripts/generate-offline-manifest.js
cmp -s manifest-offline.json public/manifest-offline.json || {
  echo "❌ ERRO: manifestos offline root/public divergentes."
  exit 1
}
echo "✅ Manifesto offline atualizado."
# MEDCASES AUTO OFFLINE MANIFEST END

git add .

if git diff --cached --quiet; then
  echo "ℹ️  Nenhuma mudança para commitar."
else
  git commit -m "$MSG"
  echo "✅ Commit criado."
fi

# Garante branch main
git branch -M "$BRANCH"

# Push
echo "📤 Enviando para GitHub..."
git push -u origin "$BRANCH"

echo ""
echo "====================================="
echo "✅ Deploy concluído com sucesso!"
echo "🔗 https://github.com/rodrigssousa-sudo/medcases-calculadora"
echo "🌐 GitHub Pages: https://rodrigssousa-sudo.github.io/medcases-calculadora/"
echo "====================================="
