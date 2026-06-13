# 🏥 MedCases Pro

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)
![Platform](https://img.shields.io/badge/platform-PWA%20%7C%20WebView-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-Proprietary-red?style=for-the-badge)
![Languages](https://img.shields.io/badge/i18n-PT%20%7C%20ES-yellow?style=for-the-badge)
![WCAG](https://img.shields.io/badge/WCAG-AA-success?style=for-the-badge)

**Motor de Cálculo Clínico — PWA Offline · Mobile-First · Bilíngue PT/ES**

*Calculadora médica avançada para profissionais de saúde*  
*Sem backend · Sem banco de dados externo · 100% offline-capable*

</div>

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Demo & Deploy](#-demo--deploy)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Base de Dados Clínicos](#-base-de-dados-clínicos)
- [Design System & WCAG](#-design-system--wcag)
- [i18n — Bilinguismo PT/ES](#-i18n--bilinguismo-ptes)
- [Como Adicionar Fármacos](#-como-adicionar-fármacos)
- [Deploy Manual](#-deploy-manual)
- [Changelog por Sessão](#-changelog-por-sessão)
- [Próximos Passos](#-próximos-passos)

---

## 🌟 Visão Geral

**MedCases Pro** é uma Progressive Web App (PWA) de calculadoras clínicas bilíngues (PT/ES), desenvolvida para profissionais de saúde que precisam de apoio à decisão médica em tempo real — especialmente em ambiente de WebView embarcada em apps nativos iOS/Android.

### Características Principais

| Característica | Detalhe |
|---|---|
| **Tipo** | SPA (Single-Page Application) estática |
| **Arquivo principal** | `index.html` (~613 KB, tudo embutido) |
| **Frameworks** | Zero — Vanilla HTML5/CSS3/JS ES2022 |
| **Backend** | Nenhum |
| **Banco de dados** | Nenhum externo — dados em JS local |
| **Idiomas** | Português (PT-BR) e Espanhol (ES) |
| **Modo offline** | Total — nenhuma chamada de rede |
| **Integração nativa** | `window.MedCasesBridge` (iOS/Android WebView) |
| **Design** | Midnight Blue + Cyan `#38BDF8` — Dark/Light Mode |
| **Conformidade** | WCAG 2.1 AA (contraste mínimo 4.5:1) |

---

## 🚀 Demo & Deploy

### Produção (GitHub Pages)
```
https://rodrigssousa-sudo.github.io/medcases-calculadora/
```

### Deploy Local (desenvolvimento)
```bash
# Opção 1 — Python 3 (sem instalação)
python3 -m http.server 8080
# Acesse: http://localhost:8080

# Opção 2 — Node.js com npx
npx serve .
# Acesse: http://localhost:3000

# Opção 3 — VS Code Live Server
# Clique em "Go Live" na barra de status
```

### GitHub Pages (automático via CI/CD)
```bash
# Push para main → deploy automático em ~60s
git push origin main
# Pipeline: .github/workflows/deploy.yml
```

---

## ✅ Funcionalidades

### 🏠 Aba Início — Perfil do Paciente

Preencha os dados do paciente uma vez e todos os módulos consomem automaticamente:

| Cálculo | Fórmula | Saída |
|---|---|---|
| **BSA** | Mosteller | m² |
| **IMC** | Peso/Altura² | kg/m² + classificação |
| **Peso Ideal** | Devine | kg (M/F) |
| **ClCr** | Cockcroft-Gault + Urina 24h | mL/min |
| **TFG / CKD** | CKD-EPI | G1–G5 com badge colorido |

- Modal de alerta crítico automático para CKD G3b/G4/G5
- Chips de resumo rápido (BSA, ClCr, IMC, TFG) sempre visíveis
- Acordeão de fórmulas com visualização estilo LaTeX

---

### 💊 Aba Adulto — Central de Calculadoras

Grid 2×2 com 4 sub-módulos acessíveis por tap:

#### 💊 Sub-view: Fármacos
- Busca em tempo real por nome/classe/categoria
- **Dose personalizada** calculada pelo perfil do paciente (peso, ClCr, idade, sexo)
- **Tabela Renal Dinâmica** — linha atual destacada automaticamente pelo ClCr real
- **Safety Alert Box** — alertas de toxicidade, diluição e riscos clínicos
- **Interações Críticas** — grid split: 🔴 Contraindicadas / 🟡 Monitorar
- **`_fdFormatKey()`** — formata chaves camelCase com dígitos: `pediatrica3Dias` → `Pediátrica — 3 Dias`

#### 💧 Sub-view: Fluidos
| Modo | Fórmula |
|---|---|
| Manutenção Basal | 30 mL/kg/dia (cap 2500 mL) |
| Ressuscitação Volêmica | Bolus 30 mL/kg SF/RL em 30 min |
| Correção de Déficit | 30/60/90 mL/kg por grau de desidratação |
| Perdas Insensíveis | Basal + 150 mL/°C febre + 250 mL taquipneia |

#### ❤️ Sub-view: Hemodinâmica
- PAM e Pressão de Pulso
- NEWS2 Rápido com score numérico e classificação
- Alertas de choque, taquicardia, hipoxemia, febre

#### 📊 Sub-view: Scores Clínicos
9 scores validados e bilíngues:

| Score | Indicação |
|---|---|
| **SOFA** | Disfunção de órgãos em UTI |
| **Glasgow** | Nível de consciência |
| **Wells DVT** | Probabilidade de TVP |
| **Wells TEP** | Probabilidade de TEP |
| **CURB-65** | Gravidade de pneumonia |
| **CHA₂DS₂-VASc** | Risco tromboembólico na FA |
| **HAS-BLED** | Risco de sangramento na anticoagulação |
| **Child-Pugh** | Gravidade da hepatopatia |
| **TIMI NSTEMI** | Estratificação de risco em SCA |

---

### 💉 Aba Infusão — Bombas de Infusão Contínua (BIC)

#### Modo Cálculo Livre
- Inputs: diluição total, volume, dose desejada, peso
- Unidades suportadas: `mcg/kg/min`, `mcg/min`, `mg/kg/h`, `mL/h`
- Cálculo reverso: mL/h atual → dose em mcg/kg/min
- **Botão "Copiar como Prescrição"** — gera texto estruturado para clipboard

#### Modo Selecionar Droga
- 15+ drogas com presets de protocolo padrão-ouro (AMIB/SBC/UpToDate)
- **ActionChips** de preset com auto-apply para drogas com preset único
- **Inteligência Contextual** por perfil do paciente:
  - Alertas de gestante por categoria de risco
  - Ajuste renal dinâmico (ClCr <60 / <30)
  - Peso real vs ideal para obesos (IMC ≥ 30)

**Drogas cobertas:**
> Noradrenalina · Adrenalina · Dobutamina · Dopamina · Milrinona · Nitroprussiato · Nitroglicerina · Amiodarona · Propofol · Midazolam · Fentanil · Morfina · Heparina · Vasopressina · Insulina Regular · Vancomicina

---

### 📋 Aba Prescrições — Protocolos Guiados

**125 protocolos bilíngues PT/ES** organizados por especialidade:

| Especialidade | Cor da Barra | Quantidade |
|---|---|---|
| 🚨 Emergência | Vermelho | ~20 |
| 🫀 Cardiologia | Âmbar | ~25 |
| 🦠 Infectologia | Verde | ~15 |
| 🟡 Gastroenterologia | Laranja | ~15 |
| 💨 Pneumologia | Ciano | ~12 |
| 🧠 Neurologia | Roxo | ~18 |
| + Cirurgia/Ortopedia/Dermatologia/etc. | Variado | ~20 |

Funcionalidades:
- Busca por título, tags e preview
- Modal bottom-sheet com texto completo
- Cópia para clipboard com feedback visual
- Troca de idioma PT↔ES em tempo real mesmo com modal aberto
- Inteligência de busca: `SCA` = `IAM` = `Infarto`

---

### 📊 NEWS2 — Calculadora de Risco em Tempo Real

Visível diretamente na aba Calculadoras, sem navegação extra:

| Score | Nível | Conduta |
|---|---|---|
| 0–4 pts (sem parâmetro=3) | 🟢 Baixo | Monitorização padrão |
| <5 + qualquer parâmetro=3 | 🟡 Baixo-Médio | Avaliação médica urgente |
| 5–6 pts | 🟠 Médio | Revisão urgente + equipe sênior |
| ≥7 pts | 🔴 Alto | Cuidados críticos imediatos |

- Escala SpO₂ padrão (Geral) e Escala 2 (DPOC/Hipercapnia)
- Conduta clínica dinâmica atualizada em tempo real
- Progress-bar animada por nível de risco

---

### ⚗️ Calculadora de Eletrólitos

8 cálculos com alertas por severidade:

| Cálculo | Fórmula | Referência |
|---|---|---|
| Na⁺ Corrigido | Katz 1973 | `Na + 1.6 × (Glic-100)/100` |
| Déficit de Na⁺ | Adrogue-Madias | `(140-Na) × (peso × ACT)` |
| Osmolaridade Plasmática | Padrão | `2×Na + Glic/18` |
| Déficit de K⁺ | Estimativa clínica | `(4.0-K) × 100 mEq` |
| Ca²⁺ Corrigido | Albumina | `Ca + 0.8 × (4.0-Alb)` |
| Reposição MgSO₄ | Por peso + ClCr | 50% se ClCr <30 |
| Ânion Gap | Padrão | `Na - (Cl + HCO₃)` |
| AG Corrigido | Figge | `AG + 2.5 × (4.0-Alb)` |

Alertas em 4 severidades: 🔴 RED · 🟡 YELLOW · 🟢 GREEN · 🔵 INFO

---

## 🏗️ Arquitetura Técnica

### Stack

```
Frontend Only (Zero Backend)
├── HTML5 Semântico
├── CSS3 (Custom Properties / Design Tokens)
├── JavaScript ES2022 (Vanilla — sem frameworks)
├── Font Awesome 6 Free (CDN)
├── Google Fonts — Inter (CDN)
└── PWA-ready (manifest + service worker — pendente)
```

### Padrão SPA — Navegação por Página

```javascript
// Páginas principais
navigate('home')          // Dados do paciente
navigate('calculators')   // Hub central de calculadoras
navigate('prescriptions') // Protocolos guiados

// Sub-módulos adulto
showAdultPanel('drugs')   // Fármacos
showAdultPanel('fluids')  // Fluidos
showAdultPanel('hemo')    // Hemodinâmica
showAdultPanel('scores')  // Scores clínicos

// Calculadoras especializadas
navigate('infusion')      // BIC / Bombas de infusão
navigate('news2')         // NEWS2 Score
navigate('elec')          // Eletrólitos
navigate('ped')           // Pediatria
navigate('ob')            // Obstetrícia
navigate('atb')           // Antimicrobianos
```

### Integração WebView (Bridge Nativa)

```javascript
// API pública exposta para apps nativos iOS/Android
window.MedCasesBridge = {
  setLanguage(lang),  // 'pt' | 'es'
  setTheme(theme),    // 'dark' | 'light'
  getState()          // retorna { lang, theme, patientData }
};
```

### Dados do Paciente (Estado Global)

```javascript
window.patientData = {
  age,          // número (anos)
  sex,          // 'M' | 'F'
  weight,       // kg
  height,       // cm
  creatinine,   // mg/dL
  clcr,         // mL/min (Cockcroft-Gault)
  bsa,          // m² (Mosteller)
  imc,          // kg/m²
  pesoIdeal,    // kg (Devine)
  tfg,          // mL/min/1.73m²
  pregnant,     // boolean
  hepatopatia   // boolean
};
```

---

## 📁 Estrutura de Arquivos

```
medcases-calculadora/
│
├── index.html                   ← App principal (SPA completa, ~613 KB)
│
├── database/
│   ├── psicofarmacos.js         ← window.PSICOFARMACOS_DRUGS_DB
│   │                               75+ fármacos psiquiátricos e neurológicos
│   │                               (Antidepressivos · Ansiolíticos · Antipsicóticos ·
│   │                                Anticonvulsivantes · Antiparkinsonianos)
│   │
│   ├── prescricoes.js           ← window.PRESCRICOES_DB
│   │                               125 protocolos clínicos bilíngues PT/ES
│   │
│   ├── antimicrobianos.js       ← window.ANTIMICROBIANOS_DRUGS_DB
│   ├── cardio.js                ← window.CARDIO_DRUGS_DB
│   ├── analgesicos.js           ← window.ANALGESICOS_DRUGS_DB
│   ├── endocrino.js             ← window.ENDOCRINO_DRUGS_DB
│   ├── gastro.js                ← window.GASTRO_DRUGS_DB
│   ├── anticoag.js              ← window.ANTICOAG_DRUGS_DB
│   ├── infusoes.js              ← (placeholder — BIC presets embutidos no index.html)
│   ├── nefro.js                 ← (placeholder — expansão futura)
│   ├── neuro.js                 ← (placeholder — expansão futura)
│   ├── obesidade.js             ← (placeholder — expansão futura)
│   ├── pneumo.js                ← (placeholder — expansão futura)
│   ├── psiquiatria.js           ← (placeholder — expansão futura)
│   └── reumatologia.js          ← (placeholder — expansão futura)
│
├── .github/
│   └── workflows/
│       └── deploy.yml           ← CI/CD — GitHub Actions → GitHub Pages
│
├── deploy.sh                    ← Script de deploy manual (sem credenciais)
└── README.md                    ← Este arquivo
```

---

## 🗄️ Base de Dados Clínicos

### `window.PSICOFARMACOS_DRUGS_DB` — 75+ Fármacos

#### Antidepressivos (27)
| Classe | Fármacos |
|---|---|
| ISRS | fluoxetina, sertralina, paroxetina, escitalopram, citalopram, fluvoxamina |
| IRSN | venlafaxina, desvenlafaxina, duloxetina, milnaciprana, levomilnaciprana |
| Tricíclicos | imipramina, amitriptilina, nortriptilina, clomipramina, doxepina, trimipramina |
| Atípicos | mirtazapina, bupropiona, trazodona, agomelatina, vortioxetina, vilazodona, reboxetina |
| IMAOs | fenelzina, tranilcipromina, moclobemida |

#### Ansiolíticos / BZD / Hipnóticos (19)
| Classe | Fármacos |
|---|---|
| Benzodiazepínicos | clonazepam, alprazolam, diazepam, lorazepam, bromazepam, midazolam, oxazepam, temazepam, nitrazepam, clordiazepoxido, flurazepam, triazolam |
| Hipnóticos Z | zolpidem, zopiclona, eszopiclona |
| Não-BZD | buspirona, hidroxizina, pregabalina, gabapentina |

#### Antipsicóticos (27)
| Classe | Fármacos |
|---|---|
| Típicos 1ª geração | haloperidol, clorpromazina, levomepromazina, periciazina, flufenazina, zuclopentixol, tiotixeno, pimozida, sulpirida |
| Atípicos 2ª geração | risperidona, olanzapina, quetiapina, clozapina, aripiprazol, ziprasidona, paliperidona, asenapina, lurasidona, cariprazina, brexpiprazol, amisulprida |
| LAI (Longa Ação) | paliperidona_trimestral, paliperidona_mensal, risperidona_lai, aripiprazol_lai, olanzapina_lai |

#### Estabilizadores de Humor (6)
`litio · acido_valproico · valproato_de_sodio · lamotrigina · carbamazepina · oxcarbazepina`

#### Anticonvulsivantes (10)
`levetiracetam · topiramato · fenitoina · fenobarbital · etossuximida · lacosamida · brivaracetam · vigabatrina · rufinamida · primidona`

#### Antiparkinsonianos (11)
`levodopa_carbidopa · levodopa_benserazida · pramipexol · ropinirol · rotigotina · apomorfina · amantadina · selegilina · rasagilina · entacapona · biperideno`

---

### Schema de Fármaco

```javascript
{
  id:               'sertralina',
  name:             'Sertralina',
  class:            'ISRS — Inibidor Seletivo da Recaptação de Serotonina',
  category:         'antidepressivo',
  commercialNames:  ['Zoloft', 'Assert', 'Tolrest'],
  presentation:     '50 mg · 100 mg comprimidos',
  dose: {
    adulto:         '50–200 mg/dia',
    idoso:          '25–100 mg/dia',
    depressao:      '50–200 mg/dia',
    ansiedade:      '25–200 mg/dia'
  },
  doseKg: {
    // Campos calculados por peso: pediatrica3Dias → "Pediátrica — 3 Dias"
    pediatricaMg: '1–3 mg/kg/dia'
  },
  indications:      ['Depressão maior', 'TAG', 'TOC', 'TEPT', 'Pânico'],
  renalAdjustment:  (clcr) => { /* retorna string de ajuste */ },
  hepaticAdjustment: '⚠️ Usar com cautela em hepatopatia grave',
  mechanism:        'Bloqueia o transportador SERT...',
  onset:            '2–4 semanas',
  halfLife:         '26 horas (desmetilsertralina: 62–104h)',
  commonAdverseEffects:  ['Náusea', 'Insônia', 'Cefaleia', ...],
  dangerousAdverseEffects: ['Síndrome serotoninérgica', ...],
  risksByPatient: {
    pregnant:  'Categoria C — Risco moderado',
    lactating: '⚠️ Excretado no leite materno',
    elderly:   'Iniciar com 25 mg; risco de hiponatremia'
  },
  contraindications: ['IMAO nos últimos 14 dias', ...],
  interactions:      ['tramadol — risco serotonérgico', ...],
  alerts:            ['Monitorar ideação suicida nas primeiras semanas', ...],
  ref:               ['UpToDate 2024', 'Micromedex', ...]
}
```

---

### `window.PRESCRICOES_DB` — 125 Protocolos

```javascript
{
  id:        'sepse-bundle',
  specialty: 'emerg',
  icon:      '',
  tags:      ['Sepse', 'Bundle', 'Antibiótico', 'UTI'],
  pt: {
    title:   'Sepse — Bundle 1 Hora',
    via:     'Intravenosa',
    preview: 'Coleta de hemocultura + ATB em 1h + ...',
    text:    '/* texto completo do protocolo */'
  },
  es: {
    title:   'Sepsis — Bundle 1 Hora',
    via:     'Intravenosa',
    preview: '...',
    text:    '...'
  }
}
```

---

## 🎨 Design System & WCAG

### Tokens de Cor (Dark Mode — Padrão)

```css
:root {
  /* Fundos */
  --bg-deep:      #0F091E;   /* Midnight purple — fundo principal */
  --bg-card:      #131B2E;   /* Azul-noite — cards */
  --bg-input:     #1A2535;   /* Input fields */

  /* Texto */
  --text-primary:   #E2E8F0; /* Branco suave — texto principal */
  --text-secondary: #94A3B8; /* Cinza médio — texto secundário */
  --text-muted:     #475569; /* Cinza escuro — NÃO usar em fundos escuros */

  /* Accent */
  --accent-cyan:  #38BDF8;   /* Cyan Sky — cor de destaque principal */
  --accent-blue:  #0EA5E9;   /* Sky 500 — links e interações */

  /* Semântico */
  --danger:       #EF4444;   /* Vermelho — alertas críticos */
  --warning:      #F59E0B;   /* Âmbar — alertas moderados */
  --success:      #22C55E;   /* Verde — resultados normais */
  --info:         #38BDF8;   /* Cyan — informações */
}
```

### Regras WCAG AA Implementadas

| Problema | Solução |
|---|---|
| `var(--text-muted)` em subtítulos de cards (ratio ~2.2:1 ❌) | `rgba(255,255,255,0.52)` → ratio ≥4.6:1 ✅ |
| Textos brancos no Light Mode (invisíveis) | Overrides `body.light-mode` com `#1E293B` |
| Bottom Nav — border-box excessivo no estado ativo | Pill indicator 18×3px (padrão Material 3) |
| `.fd-dose-subkey` em rótulos de dose | Classes semânticas com contraste garantido |

### Técnica Alpha-over-White

Para subtítulos em fundos escuros saturados de qualquer hue:
```css
/* Ratio garantido ≥4.6:1 sobre qualquer fundo escuro */
color: rgba(255, 255, 255, 0.52);
/* Equivalente iOS Dark Mode — adapta-se à hue do fundo */
```

---

## 🌐 i18n — Bilinguismo PT/ES

### Função Principal

```javascript
// t(key) — retorna string no idioma atual
t('nav_prescriptions') // → 'Prescrições' | 'Prescripciones'

// _sl(pt, es) — inline para textos hardcoded
_sl('Dose Adulto', 'Dosis Adulto')

// setLang('es') — troca idioma globalmente
// Atualiza: DOM data-i18n, selects, renders ativos, modal aberto
```

### Cobertura de Chaves

| Grupo | Qtd de chaves |
|---|---|
| UI Geral | ~40 |
| IMC / CKD | 11 |
| Fármacos | ~15 |
| Tabela Renal | 8 |
| Fluidos | ~30 |
| BIC / Infusão | ~25 |
| NEWS2 | 80+ |
| Eletrólitos | 28 |
| Prescrições | 12 |
| Total | **~250 chaves** |

---

## 🔧 Como Adicionar Fármacos

### 1. Identificar o arquivo de banco de dados correto

```
database/
  psicofarmacos.js    ← Psiquiatria / Neurologia
  antimicrobianos.js  ← ATB, Antifúngicos, Antivirais
  cardio.js           ← Cardiologia
  gastro.js           ← Gastroenterologia
  endocrino.js        ← Endocrinologia
  anticoag.js         ← Anticoagulantes / Antiagregantes
  analgesicos.js      ← Analgésicos / AINEs / Opioides
```

### 2. Estrutura mínima de um novo fármaco

```javascript
// Dentro do Object.assign de PSICOFARMACOS_DRUGS_DB:
novo_farmaco: {
  id:               'novo_farmaco',
  name:             'Nome Completo',
  class:            'Classe Farmacológica',
  category:         'categoria_existente', // ver colorMap em index.html
  commercialNames:  ['NomeMarca1', 'NomeMarca2'],
  presentation:     'X mg comprimidos; Y mg/mL ampola',
  dose: {
    adulto:   '100–400 mg/dia VO',
    idoso:    '50–200 mg/dia'
  },
  indications:     ['Indicação 1', 'Indicação 2'],
  renalAdjustment: (clcr) => {
    if (clcr < 30) return '⚠️ Reduzir 50%';
    if (clcr < 60) return 'Monitorar';
    return 'Sem ajuste';
  },
  hepaticAdjustment: 'Sem ajuste / Usar com cautela',
  mechanism:        'Mecanismo de ação...',
  onset:            'X–Y dias',
  halfLife:         'X horas',
  commonAdverseEffects:    ['EA1', 'EA2'],
  dangerousAdverseEffects: ['EA grave 1'],
  contraindications:       ['CI 1'],
  interactions:            ['farmaco_interagente — descrição'],
  alerts:                  ['Alerta clínico importante'],
  ref:                     ['UpToDate 2024', 'Micromedex 2024']
}
// IMPORTANTE: sem vírgula após o último entry antes de });
```

### 3. Validar após inserção

```bash
# Executar via Playwright ou abrir no navegador e verificar:
# - Console: zero erros
# - App carrega normalmente
# - PRESCRICOES_DB: 125 protocolos (log no console)
```

### 4. Registrar nova categoria (se necessária)

```javascript
// Em index.html — objeto colorMap (função openFarmacoDetail):
nova_categoria: {
  bg:  'rgba(R, G, B, 0.15)',
  txt: '#HEXCOLOR'
}
```

---

## 🚢 Deploy Manual

### Pré-requisitos

```bash
git --version   # >= 2.x
# PAT (Personal Access Token) do GitHub com scope: repo
# NUNCA exponha seu PAT em arquivos do repositório!
```

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/rodrigssousa-sudo/medcases-calculadora.git
cd medcases-calculadora

# 2. Copie os arquivos do Genspark (export manual)
# - index.html
# - README.md
# - database/ (pasta completa)
# - .github/workflows/deploy.yml

# 3. Configure identidade Git
git config user.email "seu@email.com"
git config user.name  "Seu Nome"

# 4. Commit e push
git add .
git commit -m "feat: descrição das mudanças"
git push origin main
# Quando solicitado senha: use seu PAT (não sua senha do GitHub)
```

### GitHub Pages — Configuração Única

```
GitHub → Repository Settings → Pages
→ Source: GitHub Actions
→ Salvar
```

A partir daí, cada push para `main` dispara o pipeline automaticamente.

---

## 🔄 Changelog por Sessão

### 2026-06-13 — JS Formatter Fix + WCAG Refactoring (Aba Calculadoras)

**JS String Formatter:**
- Implementado `_fdFormatKey(k)` — converte `pediatrica3Dias` → `Pediátrica — 3 Dias`
  - Pipeline: split camelCase → em-dash antes de dígitos → espaço após dígitos → Title Case → dicionário PT-BR
- Substituídos 2 formatters inline bugados em `openFarmacoDetail()`
- Bloco "Dose por Peso" refatorado: classes `.fd-dose-subheader` / `.fd-dose-subval` / `.fd-dose-subkey`

**WCAG UI Refactoring — Aba Calculadoras:**
- Fix WCAG AA: `.cmd-card-subtitle` e `.calc-hub-desc` → `rgba(255,255,255,0.52)` (ratio ≥4.6:1)
- Espaçamento cards: padding 11→13px, gap 7→9px, ícone 34→36px
- Tipografia: font-size 12→12.5px, letter-spacing -0.15px
- Botão FARMÁCOS: removido emoji, Title Case, classes CSS semânticas
- Bottom Nav estado ativo: pill indicator 18×3px (Material 3 / iOS)
- Playwright: ✅ zero erros · 125 protocolos carregados

### 2026-06-12 — Modal QE + Cabeçalho HOME + Fix Prescrições

- Modal "Editar Dados do Paciente" corrigido (drift horizontal no teclado virtual)
- `database/prescricoes.js` commitado (estava ausente no GitHub → 404 silent)
- Cabeçalho HOME refatorado: header redundante removido, ícones Sol/Lua SVG, visibilidade condicional por aba

### 2026-06-10 — Calculadora de Eletrólitos + 6 Batches de Fármacos

- Calculadora de Eletrólitos completa (`page-elec`) — 8 cálculos + 4 severidades de alerta
- Psicofármacos Batches 2–9: 75+ fármacos (anticonvulsivantes, antiparkinsonianos, IMAO-B, etc.)
- BIC: campo "Droga" no cálculo livre + botão "Copiar como Prescrição"

### 2026-06-09 — Redesign Visual + BIC Presets + Light Mode WCAG

- Paleta verde genérica → Midnight Blue + Cyan `#38BDF8`
- BIC Presets com ActionChips e inteligência contextual
- Light Mode: 15+ componentes com overrides WCAG AA
- `--bg-deep: #0F091E` (purple-midnight oficial)

### 2026-06-07 — Botão Voltar Global + UX Prescrições

- 11 botões "← Voltar" inseridos em todas as sub-views
- Prescrições: busca SCA=IAM, reordenação TOP CARDIO, redesign premium compacto

### 2026-06-06 — Scores Bilíngues + BIC Completo + NEWS2

- 9 scores 100% bilíngues PT/ES com `_sl()` helper
- NEWS2 Score Calculator completo na aba Calculadoras
- Módulo de Infusão/BIC completo (16 drogas, cálculo reverso, i18n)

---

## 🚧 Próximos Passos

### Alta Prioridade
- [ ] **PWA Manifest** (`manifest.json` + `service-worker.js`) — instalação offline total
- [ ] **Módulo Pediatria** — DRUG_DB infantil com doses por kg para todas as especialidades
- [ ] **Histórico de pacientes** — localStorage com até 10 perfis salvos

### Média Prioridade
- [ ] **Scores adicionais** — APACHE II, Killip-Kimball, NIHSS, DAS28, PHQ-9, GAD-7
- [ ] **Export PDF** — `window.print()` + CSS `@media print` para resultado do paciente
- [ ] **Módulo Obstetrícia** — calculadoras de IG, DPP, partograma, Bishop
- [ ] **Populator de Database** — expandir `cardio.js`, `gastro.js`, `endocrino.js` com fármacos completos

### Baixa Prioridade
- [ ] **Tema personalizado** — seletor de paleta de cores
- [ ] **Modo apresentação** — fonte maior para uso em conferências
- [ ] **Compartilhamento** — Web Share API para resultados de cálculo

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica |
| CSS3 | — | Design System + Custom Properties |
| JavaScript | ES2022 | Toda a lógica — zero frameworks |
| Font Awesome | 6.4.0 | Ícones via CDN |
| Inter (Google Fonts) | — | Tipografia principal |

---

## ⚠️ Aviso Legal

Este aplicativo é uma ferramenta de apoio à decisão clínica destinada **exclusivamente a profissionais de saúde habilitados**. As informações fornecidas não substituem o julgamento clínico, diretrizes institucionais ou a bula oficial dos medicamentos. Sempre confirme doses, diluições e protocolos com as fontes primárias antes de prescrever.

**Referências primárias utilizadas:**
- UpToDate® 2024
- Micromedex® DrugDex 2024
- Goodman & Gilman — As Bases Farmacológicas da Terapêutica, 14ª ed.
- Stahl's Essential Psychopharmacology, 5th ed.
- AMIB Diretrizes UTI 2023
- SBC — Diretrizes de Cardiologia 2021–2024
- Lexicomp® 2024
- AHA/ACC Guidelines 2023

---

<div align="center">

**MedCases Pro** — Desenvolvido para médicos, por médicos.  
`v2.0.0` · `index.html` monolítico · `~613 KB` · `WCAG AA` · `PT/ES`

*© 2026 MedCases Pro — Todos os direitos reservados.*

</div>
