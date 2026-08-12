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
