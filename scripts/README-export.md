# MedCases Pro — Pipeline de Exportação de Dados Clínicos

## O que é

`export-clinical-data.js` é um script Node.js que lê a base farmacológica real
(`database/*.js`) e gera arquivos JSON estruturados bilíngues (PT/ES) em `/data/`.

**Objetivo:** permitir que o app — e futuros consumidores da API — carreguem
dados de fármacos sob demanda (lazy loading) sem precisar baixar toda a base
de uma vez.

---

## Como executar

```bash
# Requisito: Node.js >= 18
node --version

# Executar o pipeline
npm run export:data

# Ou diretamente
node scripts/export-clinical-data.js
```

---

## Saída gerada

```
data/
├── manifest.json         ← meta: versão, contagens, endpoints
├── drugs_index.json      ← índice leve (id, nome, cat, icon, keywords)
└── drugs/
    ├── metoprolol.json
    ├── azitromicina.json
    ├── fluoxetina.json
    └── ...               ← 1 arquivo por fármaco
```

### `manifest.json`

```json
{
  "version": "clinical-data-v1",
  "generatedAt": "2026-06-23T...",
  "drugCount": 1000,
  "interactionCount": 3200,
  "endpoints": {
    "drugsIndex": "/data/drugs_index.json",
    "drugById":   "/data/drugs/{id}.json",
    "manifest":   "/data/manifest.json"
  }
}
```

### `drugs_index.json` — índice leve

```json
[
  {
    "id": "metoprolol",
    "name": { "pt": "Metoprolol", "es": "Metoprolol" },
    "category": "cardio",
    "icon": "🫀",
    "keywords": ["metoprolol", "seloken", "selozok", "lopresor", "betabloqueador"],
    "schema": "premium-v1"
  }
]
```

### `drugs/{id}.json` — dados completos

```json
{
  "id": "metoprolol",
  "category": "cardio",
  "icon": "🫀",
  "name": { "pt": "Metoprolol", "es": "Metoprolol" },
  "pt": {
    "name": "Succinato / Tartarato de Metoprolol",
    "class": "Betabloqueador beta-1 seletivo",
    "commercialNames": { "br": ["Seloken", "Selozok"], "ar": ["Lopresor"] },
    "presentation": [...],
    "dose": { "adultoPadrao": "...", "adultoGrave": "..." },
    "doseKg": { "padrao": "...", "grave": "...", "doseMaxima": "..." },
    "therapeuticRange": "...",
    "dilution": "...",
    "speed": "...",
    "commonAdverseEffects": [...],
    "dangerousAdverseEffects": [...],
    "risksByPatient": [...],
    "alerts": [...],
    "renalDose": { "fgMaior50": {...}, "fg30a50": {...}, ... },
    "safetyFlags": { "bradycardiaRisk": true, "warning": "..." },
    "auditNotes": { "status": "excellent_after_review", ... },
    "ref": "AHA/ACC 2022 · ESC 2021 · ..."
  },
  "es": { ... },
  "updatedAt": "2026-06-23T...",
  "source": "medcases-calculadora",
  "schema": "premium-v1"
}
```

---

## Paciente padrão (adulto)

Usado para executar `calculate(paciente, lang)` na exportação:

```js
{
  peso:       70,    // kg
  idade:      40,    // anos
  gestante:   false,
  lactante:   false,
  clcr:       90,    // mL/min (função renal normal)
  fg:         90,
  sexo:       'M',
  altura:     170,   // cm
  hepatopatia: false,
  qtLongo:    false,
  miastenia:  false
}
```

**Perfis futuros** (v2 — já definidos no script, não exportados nesta versão):
| Perfil      | peso | idade | clcr | especial            |
|-------------|------|-------|------|---------------------|
| adulto      | 70   | 40    | 90   | padrão              |
| pediatria   | 25   | 8     | 110  | —                   |
| gestante    | 68   | 28    | 105  | `gestante: true`    |
| idoso       | 65   | 72    | 45   | —                   |
| renal grave | 70   | 55    | 18   | insuficiência grave |

---

## Automatização via CI/CD

O script roda automaticamente **antes de cada deploy** via GitHub Actions:

```yaml
# .github/workflows/deploy.yml
- name: 💊 Exportar dados clínicos
  run: node scripts/export-clinical-data.js
```

Os arquivos `/data/*.json` são gerados no runner e incluídos no artefato
do GitHub Pages — ou seja, estão disponíveis em produção sem commit manual.

---

## Execução manual (antes do git push)

Se não houver pipeline ativo:

```bash
# 1. Executar o export
npm run export:data

# 2. Adicionar os arquivos gerados ao commit
git add data/
git commit -m "data: regenerar JSONs clínicos"
git push
```

---

## Arquitetura técnica

### Por que `vm.Script` e não `require()`?

Os arquivos `database/*.js` foram escritos para o **browser**:
- Usam `window.X = ...` para expor dados
- Usam `const t = (lang, pt, es) => ...` em IIFE local
- Não usam `module.exports`

O módulo `vm` do Node permite executar esses scripts em um **contexto isolado**
onde `window` é simulado, sem modificar os arquivos originais.

```js
const sandbox = { window: {}, console };
sandbox.window = sandbox;            // window.FOO === sandbox.FOO
const script = new vm.Script(src);
const ctx = vm.createContext(sandbox);
script.runInContext(ctx);
// sandbox.CARDIO_DRUGS_DB agora está disponível
```

### Schemas suportados

| Schema        | Módulos                    | Função principal     |
|---------------|----------------------------|----------------------|
| `premium-v1`  | cardio, antimicrobianos, psicofarmacos | `calculate(paciente, lang)` |
| `legacy-v1`   | analgesicos, anticoag, etc. (arrays)  | `dose(paciente, lang)` ou sem função |

### Regra de não interferência

O script:
- ✅ **LÊ** `database/*.js` via `vm` (sem require, sem modificação)
- ✅ **GERA** arquivos em `data/`
- ❌ **NÃO** modifica `index.html`, `css/`, `js/`
- ❌ **NÃO** roda no browser
- ❌ **NÃO** altera fórmulas, interações, deep links ou UI

---

## Verificação após deploy

```bash
# Endpoints públicos
curl https://medcasescalcu.com/data/manifest.json
curl https://medcasescalcu.com/data/drugs_index.json
curl https://medcasescalcu.com/data/drugs/metoprolol.json

# Verificar campos obrigatórios (requer jq)
curl -s https://medcasescalcu.com/data/drugs/metoprolol.json \
  | jq '{id, category, icon, ptName: .pt.name, esName: .es.name, hasRenalDose: (.pt.renalDose != null), hasSafetyFlags: (.pt.safetyFlags != null)}'
```

---

## Roadmap

| Versão | Feature |
|--------|---------|
| v1.0   | ✅ Export adulto padrão, PT + ES, manifest, index |
| v1.1   | Perfis pediátrico, gestante, idoso, renal |
| v1.2   | Export de interações por fármaco |
| v2.0   | Cache strategy no app + lazy loading por ID |
| v2.1   | Versioning semântico por fármaco (hash do conteúdo) |

