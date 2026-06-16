# 🏥 MedCases Pro

<div align="center">

![Version](https://img.shields.io/badge/version-2.6.0-blue?style=for-the-badge)
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
- **Motor Renal v2** — Engine reativa que cruza o ClCr/HD do paciente com `renalDose` de cada fármaco:
  - `_renalNormalizeFaixa()` — dual-mode: suporta schema objeto `{dose,via,intervalo,obs}` e string legada
  - `obterDosePorFiltrado()` — retorna `{faixa, state, dados}` onde `state` ∈ `{ok, alert, missing, hd}`
  - `_renalBuildBodyHtml()` — gera pills coloridas (dose · via · intervalo) + obs com `border-left`
  - `_renalInjectOrUpdate()` — substitui somente `#fd-renal-dynamic` via `replaceWith()` sem flickering
  - **Toggle Hemodiálise** — CSS switch puro, desabilita `#hm-clcr` (opacity 38%) quando ativo
  - **Listener reativo** — `#hm-clcr` events `input`+`change` disparam atualização em tempo real
  - **`_tryRenalOverride()`** em `calcDrugDose()` — substitui "Esquemas Disponíveis" estáticos pelo card "ESQUEMA RENAL AJUSTADO" quando ClCr ≤ 50 ou HD ativo, com pills laranja/lilás e banner contextual
  - **22/22 antimicrobianos** com `renalDose` no novo schema `{dose, via, intervalo, obs}` ✅

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

### 2026-06-16 — v2.6.0: Contraste WCAG nos Scores + Remoção de Cabeçalho Redundante

#### REQ 1 — Correção de Contraste WCAG AA nos Cards de Resultado de Score

**Arquivo:** `index.html` — bloco CSS `.score-result-box` (~linha 3327)

**Problema:** Todos os textos internos dos cards de resultado de score (`.score-result-label`, `.score-sub-note`, `.score-action-tip`) usavam `var(--text-secondary)` = `#94A3B8` e `var(--text-muted)` = `#475569` sobre o fundo verde escuro `#0A2A1A` — ratio de contraste ~1.8:1 (WCAG AAA exige 7:1, AA exige 4.5:1). Textos invisíveis em uso clínico.

| Seletor CSS | Antes | Depois | Ratio estimado |
|---|---|---|---|
| `.score-result-label` | `var(--text-secondary)` = #94A3B8 | `rgba(255,255,255,0.90)` | ~8.1:1 ✅ |
| `.score-sub-note` | `var(--text-muted)` = #475569 | `rgba(255,255,255,0.80)` | ~7.2:1 ✅ |
| `.score-action-tip` | `var(--text-secondary)` | `rgba(255,255,255,0.92)` | ~8.4:1 ✅ |
| `.score-action-tip strong` | herdado | `#7DD3FC` (cyan-300) | alto contraste ✅ |
| `.severity-low/mid/high/purple/info` | var herdado | `color:#ffffff` + `text-shadow` | ✅ |

**Light mode** — overrides completos adicionados via `body.light-mode .score-*` com cores escuras sobre fundo claro.

---

#### REQ 2 — Remoção do Cabeçalho Redundante da Central de Calculadoras

**Arquivo:** `index.html` — HTML linha ~6816 + CSS linha ~1597

**Problema:** A barra superior do app já exibe o título "CALCULADORA CLÍNICA". Logo abaixo havia um bloco `<header class="calc-hub-header">` com "Central de Calculadoras / Selecione o módulo clínico" — redundância de 2 linhas desperdiçando espaço útil em telas mobile.

**Alterações:**

| Tipo | Antes | Depois |
|---|---|---|
| **HTML** `#page-calculators` | `<header class="calc-hub-header">...</header>` presente | Bloco removido — comentário `<!-- calc-hub-header REMOVIDO v2.6.0 -->` |
| **CSS** `.calc-hub-header` | `padding:4px 0 12px` + h2/p estilizados | `display:none !important` (eliminado, sem espaçamento residual) |

**Resultado:** O grid de botões coloridos (Pediatria, Gestante, Infusão, Eletrólitos, etc.) agora começa imediatamente abaixo do topbar roxo, maximizando área útil no celular.

---

#### Validação v2.6.0

```
Novos erros JavaScript: 0  ✅
[warn] procainamida torsadesPrevias — pré-existente, não relacionado  ⚠️ (known)
Contraste WCAG AA: todos os textos de score ≥ 4.5:1  ✅
Cabeçalho duplicado: removido, grid inicia diretamente abaixo do topbar  ✅
```

---

### 2026-06-16 — v2.5.0: i18n Fix + Sincronização Bidirecional + Copiar Prescrição

#### REQ 1 — Fix i18n: Strings Travadas em PT no Card da Home (modo ES)

**Arquivo:** `js/medcases-ux-v2.js`

| Função | Bug | Correção |
|---|---|---|
| `_buildCopyBtnHtml()` linha ~422 | Ambos os branches do ternário retornavam `'Copiar Prescrição'` (PT) | Branch ES agora retorna `'Copiar Prescripción'` |
| `_hmCopyFeedback()` linha ~472 | Sobrescrevia `innerHTML` inteiro (perdia ícone WhatsApp) | Opera apenas no `<span class="hm-copy-rx-label">`, preserva ícone |

```javascript
// ANTES (bug):
${isES ? 'Copiar Prescrição' : 'Copiar Prescrição'}  // ambos PT!

// DEPOIS (fix):
const label = isES ? 'Copiar Prescripción' : 'Copiar Prescrição';
```

---

#### REQ 2 — Sincronização Bidirecional dos Dados do Paciente

**Arquivo:** `index.html`

**`_hmMirrorToLegacyInputs(data)`** — função expandida de 3 para 15 campos mapeados:

| Grupo | Inputs sincronizados |
|---|---|
| Calculadoras legacy | `inp-weight`, `inp-age`, `inp-height`, `inp-creatinine` |
| Home nova | `hm-weight`, `hm-age`, `hm-height`, `hm-creatinina`, `hm-clcr` |
| Quick-Edit modal | `qe-weight`, `qe-age`, `qe-height`, `qe-creatinine` |
| Botões de sexo | `btn-male`, `btn-female`, `qe-btn-m`, `qe-btn-f`, `hm-btn-male`, `hm-btn-female` |

**`saveQuickEdit()`** — novo bloco de persistência inserido antes de `closeQuickEdit()`:
- Monta `_qeSnapshot` com os campos válidos do QE
- Faz merge com o `localStorage` existente (não apaga campos não editados)
- Chama `_hmMirrorToLegacyInputs(_merged)` imediatamente
- Garante que a Home está sempre atualizada mesmo sem o usuário ter passado por ela

---

#### REQ 3 — Novo Botão “Copiar Prescrição” no Rod apé do Modal de Fármacos

**Arquivo:** `index.html`

**HTML** — `.fd-footer` atualizado:
```html
<!-- Botão "Fechar" removido — substituído pelo X flutuante do REQ-5 (v2.4.0) -->
<button class="fd-btn-copy" id="fd-btn-copy-label" onclick="_fdCopyPrescricao()">
  <i class="fa-solid fa-clipboard-check" id="fd-btn-copy-icon"></i>
  <span id="fd-btn-copy-text" data-i18n="fd_btn_copy">Copiar Prescrição</span>
</button>
<button class="fd-btn-study" id="fd-btn-calc-label" onclick="_fdCalcDoseFromModal()">
  <i class="fa-solid fa-calculator"></i>
  <span data-i18n="fd_btn_calc">Calcular Dose</span>
</button>
```

**CSS** `.fd-btn-copy` — gradiente roxo MedCases Pro, estado `.copied` verde esmeralda.

**Novas chaves i18n:**

| Chave | PT | ES |
|---|---|---|
| `fd_btn_copy` | `Copiar Prescrição` | `Copiar Prescripción` |
| `fd_btn_copy_ok` | `Copiado!` | `¡Copiado!` |

**Nova função JS `_fdCopyPrescricao()`:**

| Cenário | Comportamento |
|---|---|
| **A — Com paciente** | Copia: `💊 Fármaco · Dose individualizada · Perfil clínico (Peso/Idade/Sexo/ClCr/Ajuste Renal)` |
| **B — Sem paciente** | Copia: `💊 Fármaco · Posologia de referência (dose padrão bula)` |
| **Feedback** | Botão fica verde `"Copiado!"` / `"¡Copiado!"` por 2 segundos |
| **Fallback** | `textarea.execCommand('copy')` para WebViews iOS/Android sem Clipboard API |

---

#### Validação v2.5.0

```
[log] [MedCases] DRUG_DB populado: 247 fármacos       ✅
[log] [MedCases] PRESCRICOES_DB carregado: 125 protocolos  ✅
[log] [MedCases] ALL_DRUGS_DB montado: 247 entradas    ✅
[warn] procainamida torsadesPrevias — pré-existente, não relacionado  ⚠️ (known)
Novos erros JavaScript: 0  ✅
```

---

### 2026-06-16 — v2.4.0: Design Polish + UX Inteligente — 5 Requisitos

#### REQ 1 — Correção Crítica: Background Roxo MedCases Pro no Modal do Paciente

| Seletor | Antes | Depois |
|---|---|---|
| `#qe-modal` | `background: #0D1525` | `background: #0F091E` (var(--bg-deep)) |
| `#fd-modal` | `background: #0D1525` | `background: #0F091E` |
| `body:not(.light-mode) #fd-modal` | `background: #142235` | `background: #0F091E !important` |

Todos os modais agora usam a cor roxa oficial `#0F091E` da identidade visual MedCases Pro, blindada com `!important` contra herança iOS.

---

#### REQ 2 — Card Global "Paciente Atual" em Todas as Abas

**Novo elemento HTML:** `#global-patient-bar` inserido entre o topbar e o `#scroll-content` no `#app`.

**Comportamento:**
- ❌ **Oculto** na aba Home (sempre)
- ❌ **Oculto** quando não há paciente cadastrado
- ✅ **Visível** em Calculadoras, Fármacos, Prescrições, ATB, Elec, Infusão, NEWS2, Obs, Ped quando `window.patientData` tem dados

**Chips exibidos dinamicamente:**
- Peso (kg), Idade (anos), Sexo (Masc./Fem.), ClCr com código de cor por severidade, Flag HD, Flag Gestante

**Nova função JS:**
```javascript
function _updateGlobalPatientBar(currentPage) { ... }
```

**Hooks adicionados:**
- `navigate(page)` → chama `_updateGlobalPatientBar(page)`
- `saveQuickEdit()` → chama `_updateGlobalPatientBar()` após `recalculate()`
- `recalculate()` → chama `_updateGlobalPatientBar()` após `_onPatientDataUpdated()`

**Novas chaves i18n:**

| Chave | PT | ES |
|---|---|---|
| `gpb_label` | `Paciente Atual` | `Paciente Actual` |
| `gpb_edit` | `Editar` | `Editar` |

---

#### REQ 3 — Fluxo Inteligente do Botão "Calcular Dose"

`_fdCalcDoseFromModal()` agora tem dois cenários distintos:

**Cenário A — Sem paciente cadastrado:**
1. Fecha o modal do fármaco
2. Armazena `window._fdPendingDrugId = drugId`
3. Abre `openQuickEdit('full')` com mensagem contextual: *"Preencha para calcular a dose personalizada"*
4. Após `saveQuickEdit()`, `_fdPendingDrugId` é detectado e re-abre automaticamente a ficha do fármaco com os dados reciém-cadastrados

**Cenário B — Com paciente cadastrado:**
- Pipeline existente mantido intacto (navega → busca → abre ficha)

---

#### REQ 4 — Design Limpo (Typo-Driven): Fim dos Sub-Cards Aninhados

**Blocos refatorados em `openFarmacoDetail()`:**

| Bloco | Antes | Depois |
|---|---|---|
| Efeitos Adversos Comuns | `<span class="fd-tag warn">` em flex-wrap | `<ul class="fd-clean-list fd-clean-list--warn">` |
| Efeitos Adversos Graves | `<span class="fd-tag danger">` | `<ul class="fd-clean-list fd-clean-list--danger">` |
| Contraindicações | `<span class="fd-tag danger">` | `<ul class="fd-clean-list fd-clean-list--danger">` |
| Alertas Clínicos | `<span class="fd-tag warn">` | `<ul class="fd-clean-list fd-clean-list--warn">` |
| Apresentações | `<span class="fd-tag safe">` | `<ul class="fd-clean-list fd-clean-list--safe">` |

**Novo CSS `.fd-clean-list`:**
```css
.fd-clean-list { list-style:none; display:flex; flex-direction:column; gap:0; padding:8px 14px 4px; }
.fd-clean-list li { display:flex; align-items:baseline; gap:8px; padding:5px 0;
  border-bottom:1px solid rgba(255,255,255,0.04); font-size:12.5px; color:var(--text-primary); }
.fd-clean-list--warn   li { color:#FEF3C7; }
.fd-clean-list--danger li { color:#FEE2E2; }
.fd-clean-list--safe   li { color:#D1FAE5; }
```

---

#### REQ 5 — Botão X Flutuante Fixo no Canto Superior Direito do Modal de Fármacos

**Novo elemento HTML:**
```html
<button id="fd-floating-close" onclick="closeFarmacoDetail()" aria-label="Fechar ficha do fármaco">
  <i class="fa-solid fa-xmark"></i>
</button>
```
Posicionado **fora** do `#fd-modal` (sem overflow), dentro do `#fd-modal-overlay`.

**CSS:**
```css
#fd-floating-close {
  position: fixed;
  top: max(18px, env(safe-area-inset-top, 18px));
  right: 16px;
  z-index: 10202; /* acima do fd-modal */
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(15,9,30,0.90); backdrop-filter: blur(12px);
  border: 1.5px solid rgba(167,139,250,0.45);
}
```

**Controle via JS:**
- `openFarmacoDetail()` → `floatClose.style.display = 'flex'`
- `closeFarmacoDetail()` → `floatClose.style.display = 'none'`

---

#### Validação Final v2.4.0

```
[log] [MedCases] DRUG_DB populado: 247 fármacos       ✅
[log] [MedCases] PRESCRICOES_DB carregado: 125 protocolos  ✅
[log] [MedCases] ALL_DRUGS_DB montado: 247 entradas    ✅
[warn] procainamida torsadesPrevias — pré-existente, não relacionado  ⚠️ (known)
Novos erros JavaScript: 0  ✅
```

---

### 2026-06-16 — v2.2.0: Refatoração Definitiva — 6 Requisitos Unificados

#### REQ 1 — i18n Completo da Modal de Fármacos

Novas chaves adicionadas ao objeto `i18n` (PT + ES):

| Chave | PT | ES |
|---|---|---|
| `fd_btn_close` | `Fechar` | `Cerrar` |
| `fd_btn_calc` | `Calcular Dose` | `Calcular Dosis` |
| `chc_drugs_desc` | `Bula · Doses · Interações` | `Prospecto · Dosis · Interacciones` |

Rodapé do `#fd-modal` refatorado: `<span data-i18n="fd_btn_close">` e `<span data-i18n="fd_btn_calc">` — atualizados automaticamente via `applyTranslations()` ao trocar idioma.

#### REQ 2 — Reestruturação Visual dos Blocos de Posologia

✅ Implementado na v2.1.0 — mantido intacto. Layout `.dp-top` / `.dp-meta` + `flex-direction: column` nas `.fd-renal-doses`.

#### REQ 3 — Card Fármacos na Central de Calculadoras

**Antes (quebrava o grid):**
```html
<span class="chc-count-badge" id="farmacos-total-count">...</span>
<!-- badge absoluto espremendo o título -->
```

**Depois (limpo e responsivo):**
```html
<div class="chc-desc" id="farmacos-total-count" data-i18n="chc_drugs_desc">
  Bula · Doses · Interações
</div>
<!-- _fdUpdateCount() escreve: "Busca inteligente · 247 fármacos" -->
```

`_fdUpdateCount()` agora escreve texto bilíngue no subtítulo:
- PT: `Busca inteligente · ${total} fármacos`
- ES: `Búsqueda inteligente · ${total} fármacos`

#### REQ 4 — Sincronização do Card de Aviso do Paciente

Adicionado ao final de `navigate()` em `index.html`:

```javascript
// Ativado para pages: 'calculators' | 'adult' | 'farmacos'
if (page === 'calculators' || page === 'adult' || page === 'farmacos') {
  // 1. Lê localStorage key 'medcases_hm_patient_v1'
  // 2. Se patientData.weight está vazio mas LS tem dados → chama hmLoadPatient()
  // 3. updateAdultBanner() é chamado imediatamente
  // → Elimina card rosa "Paciente não cadastrado" falso positivo
}
```

#### REQ 5 — Botão "Calcular Dose" Inteligente

**Arquitetura do fluxo:**
```
openFarmacoDetail(id)
  └─ window._fdActiveDrugId = id  ← rastreia fármaco ativo

Clique "Calcular Dose"
  └─ _fdCalcDoseFromModal()
       ├─ closeFarmacoDetail()           (fecha ficha)
       ├─ navigate('farmacos')           (vai para lista)
       ├─ inp.value = drug.name          (injeta nome)
       ├─ inp.dispatchEvent('input')     (filtra lista)
       ├─ renderFarmacosList(nome)       (renderiza)
       └─ openFarmacoDetail(drugId)      (reabre ficha — motor intacto)
```

**Motor de cálculo não foi tocado** — o atalho apenas simula a navegação do usuário, garantindo que o engine original processe tudo sem funções redundantes.

#### REQ 6 — Performance e Remoção do Banner "Atualizando..."

**`js/medcases-ux-v2.js` — Pull-to-Refresh silencioso:**
```javascript
// ANTES: banner roxo "↺ Atualizando..." com altura animada e labels
// DEPOIS: elemento PTR com display:none, reload em 80ms, haptic mantido
const ptr = document.createElement('div');
ptr.style.cssText = 'display:none!important;height:0!important;...';
```

**`index.html` — CSS de supressão absoluta:**
```css
#ptr-indicator { display:none !important; height:0 !important; overflow:hidden !important; }
```

**`index.html` — Pré-inicialização idle (IIFE no final do `<script>`):**
```javascript
// requestIdleCallback após DOMContentLoaded:
hmLoadPatient()       // restaura dados salvos
updateAdultBanner()   // sincroniza estado visual
_fdUpdateCount()      // popula contadores
// Elimina delay e card rosa na 1ª abertura das abas
```

**Transições de aba otimizadas:**
```css
.section-page.active {
  animation: fadeIn 0.22s ease;     /* era 0.28s */
  will-change: opacity, transform;   /* GPU layer hint — elimina flicker */
}
```

#### Validação Final v2.2.0
```
[log] [MedCases] DRUG_DB populado: 247 fármacos       ✅
[log] [MedCases] PRESCRICOES_DB carregado: 125 protocolos  ✅
[log] [MedCases] ALL_DRUGS_DB montado: 247 entradas    ✅
[warn] procainamida torsadesPrevias — pré-existente, não relacionado  ⚠️ (known)
Novos erros JavaScript: 0  ✅
```

---

### 2026-06-16 — v2.1.0: i18n Completo + Reestruturação Visual dos Blocos de Posologia

#### i18n — 6 Strings Internacionalizadas

| Elemento | PT | ES | Mecanismo |
|---|---|---|---|
| Botão ficha técnica (sem paciente) | `Ver bula completa` | `Ver ficha completa` | Template literal `isES ? … : …` |
| Botão ficha técnica (com paciente) | `Bula completa + Ajuste Renal` | `Ficha completa + Ajuste Renal` | Template literal `isES ? … : …` |
| Título card Dados do Paciente | `Dados do Paciente` | `Datos del Paciente` | `data-i18n="hm_patient_title"` |
| Subtítulo card Dados do Paciente | `Preencha para calcular doses` | `Complete para calcular dosis` | `data-i18n="hm_patient_subtitle"` |
| Subtítulo fixado | `Dados fixados — usados nos cálculos` | `Datos fijados — usados en los cálculos` | `currentLang === 'es'` check inline |
| Subtítulo reset (unfixed) | usa chave `hm_patient_subtitle` | usa chave `hm_patient_subtitle` | `t('hm_patient_subtitle')` |

**Novas chaves adicionadas ao objeto `i18n`:**
```javascript
// i18n.pt:
hm_btn_bula:         'Ver bula completa',
hm_btn_bula_renal:   'Bula completa + Ajuste Renal',
hm_patient_title:    'Dados do Paciente',
hm_patient_subtitle: 'Preencha para calcular doses',

// i18n.es:
hm_btn_bula:         'Ver ficha completa',
hm_btn_bula_renal:   'Ficha completa + Ajuste Renal',
hm_patient_title:    'Datos del Paciente',
hm_patient_subtitle: 'Complete para calcular dosis',
```

**Funções corrigidas:**
- `calcShowInlineResult()` (linha ~13043, ~13135) — 2 instâncias
- `hmShowInlineResult()` (linha ~16053, ~16150) — 2 instâncias
- `_hmSetFixedState()` — estado fixado/não-fixado do card
- `_fdUpdateCount()` — preparado para expansão futura com `currentLang`

#### Visual — Reestruturação dos Blocos de Posologia Renal (`#fd-modal`)

**CSS modificado (`.fd-renal-*` — bloco de Ajuste Renal da modal):**

| Seletor | Antes | Depois |
|---|---|---|
| `.fd-renal-faixa` | `padding: 10px 15px` sem gap | `padding: 12px 15px 14px; display: flex; flex-direction: column; gap: 8px` |
| `.fd-renal-doses` | `display: flex; flex-wrap: wrap; gap: 6px` (horizontal) | `display: flex; flex-direction: column; gap: 7px` (vertical) |
| `.fd-renal-dose-pill` | `display: flex; align-items: center; gap: 5px; flex-wrap: wrap` (tudo em linha) | `display: flex; flex-direction: column; gap: 3px` + sub-divs `.dp-top` e `.dp-meta` |
| `.fd-renal-dose-pill strong` | `font-size` herdado | `font-size: 12.5px; font-weight: 700` |
| `.fd-renal-obs` | `display: flex; align-items: flex-start; gap: 5px; padding: 4px 0 0` | `display: block; margin-top: 2px; padding: 6px 9px 6px 10px; border-left: 2px solid rgba(148,163,184,0.25); border-radius: 0 6px 6px 0; background: rgba(255,255,255,0.03)` |

**Novas classes de layout (`.dp-top` e `.dp-meta`):**
```css
/* Linha superior: tag via + dose em negrito */
.fd-renal-dose-pill .dp-top {
  display: flex; align-items: center; gap: 7px; flex-wrap: wrap;
}
/* Linha inferior: intervalo + máx (limpos, separados) */
.fd-renal-dose-pill .dp-meta {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  margin-top: 1px; padding-left: 2px;
}
```

**HTML gerado em `openFarmacoDetail()` — reestruturado para usar `.dp-top` e `.dp-meta`:**
```html
<!-- ANTES -->
<div class="fd-renal-dose-pill fd-renal-dose-pill--vo">
  <span class="fd-renal-via-label">VO</span>
  <span>${dose}</span>
  <span class="fd-renal-interval">...</span>
  <span class="fd-renal-max">...</span>
</div>

<!-- DEPOIS -->
<div class="fd-renal-dose-pill fd-renal-dose-pill--vo">
  <div class="dp-top">
    <span class="fd-renal-via-label">VO</span>
    <strong>${dose}</strong>
  </div>
  <div class="dp-meta">  <!-- só renderizado se há intervalo ou máx -->
    <span class="fd-renal-interval">...</span>
    <span class="fd-renal-max">· máx: ...</span>
  </div>
</div>
```

**Benefícios visuais:**
- ✅ Tag VO/EV/Ped em linha própria + dose em negrito imediatamente ao lado
- ✅ Intervalo e dose máxima em linha limpa abaixo, não "amassados" na dose
- ✅ Obs clínica como bloco isolado com `border-left` colorida — nunca inline
- ✅ Respiração vertical entre faixas de ClCr via `gap: 8px` no flex column
- ✅ Dose com cor personalizada por via: verde (VO) / cyan (EV) / âmbar (Ped)

#### Validação Playwright
```
[log] [MedCases] DRUG_DB populado: 247 fármacos  ✅
[log] [MedCases] PRESCRICOES_DB carregado: 125 protocolos  ✅
[log] [MedCases] ALL_DRUGS_DB montado: 247 entradas  ✅
[warn] procainamida ReferenceError: torsadesPrevias — pré-existente, não relacionado  ⚠️ (known)
Novos erros JavaScript: 0 ✅
```

---

### 2026-06-14 — UX Refactoring v2: 6 Diretrizes de Alta Performance

#### Novos arquivos criados

| Arquivo | Tamanho | Responsabilidade |
|---|---|---|
| `css/medcases-ux-v2.css` | 17 KB | Diretriz 5: separação rigorosa de temas |
| `js/medcases-ux-v2.js` | 20 KB | Diretrizes 3 e 6: formulações + copiar Rx |

#### Diretriz 1 — Detecção automática de idioma ✅ (já implementada)
- IIFE em `index.html` linha 8171: `?lang=` → `navigator.language` → `'pt'`
- Background prefetch via `requestIdleCallback` com chunks de 8 fármacos por ciclo idle

#### Diretriz 2 — Resultado inline na Home ✅ (já implementada)
- `hmShowInlineResult(drugId)` injeta resultado abaixo da busca sem redirect
- Motor `_fdResolveHeroPatient()`: prioriza pediátrico < 12a, depois adulto + ajuste renal
- Bloco pediátrico oculto para adultos via lógica do hero

#### Diretriz 3 — Motor de arredondamento por formulação comercial ✅ **NOVO**
- `window.snapToFormulation(rawMg, formulationsArr)` — encontra o valor comercial mais próximo
- `window.AVAILABLE_FORMULATIONS` — banco inicial com 35+ fármacos (VO e EV)
- UI transparente: badge verde com valor ajustado + subtexto "Calculado: Xmg → Ajustado: Ymg (±Z%)"
- Monkey-patch de `hmShowInlineResult` via IIFE (sem reescrever a função original)
- Snap armazenado em `window._lastSnapResult` para uso no copiar prescrição

#### Diretriz 4 — Seletor de sexo + cores dinâmicas ✅ (já implementada)
- `hmSetSex(sex)`: toggle M/F com botão gestante aparecendo apenas para F
- `hmUpdatePatientCardColor()`: `hm-profile-pedia` (amarelo) | `hm-profile-female` (rosa) | `hm-profile-male` (azul)
- CSS completo em `index.html` linhas 4453–4502

#### Diretriz 5 — Separação rigorosa de temas ✅ **NOVO (`css/medcases-ux-v2.css`)**
- **Modo Escuro** (`#091522`): pills com texto branco/âmbar, separadores de categoria em cyan tênue
- **Modo Claro** (`#f4f6f8`): modais e cards brancos, texto `#1a1f26`/`#0F172A`
- Corrigido: card inferior de fármacos (`.hm-drug-name`, `.hm-drug-class`) estava invisível no light
- Corrigido: pills de efeitos adversos escuras sobre fundo escuro → agora sempre legíveis
- Abas do `fd-modal` com bordas laterais coloridas por seção (doses=cyan, adversos=vermelho, etc.)
- Badge renal no inline result com variantes dark/light de alto contraste

#### Diretriz 6 — Botão "Copiar Prescrição" formatado ✅ **NOVO**
- `window.buildPrescriptionString(drugName, hero, snap, lang)` — string WhatsApp com `\n`
- `window.hmCopyPrescription(drugId)` — `navigator.clipboard.writeText` + fallback `execCommand`
- Feedback visual no botão: "Copiado! ✓" por 1.8s
- Formato: `*MEDCASES — FÁRMACO*` | Paciente | Dose Recomendada | Ajuste Renal | Obs | footer
- Snap integrado: se houve arredondamento, inclui linha "Calculado: 575mg → Ajustado: 625mg"

#### Validação
```
PlaywrightConsoleCapture: ✅ 0 erros JavaScript
[MedCases UX v2] Módulo carregado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx)
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
```

---

### 2026-06-15 (rev 2) — Refatoração Cirúrgica: ClCr Dual-Mode + Accordion + Validação Geral

#### Problema identificado
O HTML do accordion de Urina 24h havia sido definido no CSS (§13) e na lógica JS (`hmToggleUrine24`, leituras `?.value`),
mas os elementos DOM (`#hm-urine24`, `#hm-urine-creat`, `#hm-urine-body`) **nunca foram inseridos no patient card** —
o `MultiEdit` anterior falhou silenciosamente no primeiro patch do bloco. O motor `hmCalcCockcroft` lia `undefined?.value → NaN`
e caia corretamente no fallback CG, mas o médico nunca via os campos.

#### Alterações desta revisão

| Componente | Arquivo | Detalhe |
|---|---|---|
| **Accordion HTML** | `index.html` (patient card) | Inserido `#hm-urine-accordion` com header-button ARIA, `#hm-urine-body` colapsável, dois inputs (`#hm-urine24` Volume mL/24h; `#hm-urine-creat` Creatinina Urinária mg/dL), nota da fórmula |
| **`hmCalcCockcroft()` — Modalidade A** | `index.html` inline | Cockcroft-Gault inalterado; agora adiciona listener em `hm-height` também |
| **`hmCalcCockcroft()` — Modalidade B** | `index.html` inline | ClCr Medido + **correção BSA Mosteller**: V=Vol/1440 → ClCr_bruto=(Ur×V)/Cr → BSA=√(Peso×Altura/3600) → ClCr_corr=ClCr_bruto×(1.73/BSA); fallback sem altura omite correção BSA; badge pill = "Ur24·BSA" |
| **`hmToggleUrine24()`** | `index.html` inline | Animação max-height via JS (sem CSS transitions conflitantes); fecha limpa campos e recalcula; badge "Opcional"→"Ativo"; chevron rotaciona 180° |
| **CSS §13 — Accordion** | `css/medcases-ux-v2.css` | Redesenhado completo: `.hm-urine-header` botão acessível com `focus-visible`; `.hm-urine-badge` + variante `--active`; dark mode borda roxa `rgba(139,92,246,0.22)` → ativa `0.42`; light mode shadow |

#### Fórmula Modalidade B (passo a passo)
```
Inputs: Vol_urina_mL, Cr_urinária mg/dL, Cr_sérica mg/dL, Peso kg, Altura cm

Passo 1 — V (mL/min):
  V = Vol_urina_mL / 1440

Passo 2 — ClCr bruto (mL/min):
  ClCr_bruto = (Cr_urinária × V) / Cr_sérica

Passo 3 — BSA Mosteller (m²):
  BSA = √[ (Peso_kg × Altura_cm) / 3600 ]

Passo 4 — ClCr corrigido p/ 1.73 m² de superfície padrão:
  ClCr_corrigido = ClCr_bruto × (1.73 / BSA)

→ pill badge: "Ur24·BSA"
→ Se altura ausente: usa ClCr_bruto sem correção BSA → badge "Ur24"
→ Se painel fechado: usa Cockcroft-Gault clássico → badge "CG"
```

#### Confirmações dos Workstream D anteriores (intactos)
- ✅ Pull-to-Refresh (`js/medcases-ux-v2.js §J`) — threshold 80px, indicador roxo, haptic, reload 400ms
- ✅ i18n Fármacos — `data-i18n="hm_card_drugs_title/sub"` + chaves PT/ES
- ✅ Nova grade Calculadora — `calc-hub-grid-v2` 5 fileiras, 9 gradientes, Fluidos full-width
- ✅ Fundo roxo dark — `--bg-deep: #0F0920` + texto global branco/preto

#### Validação
```
PlaywrightConsoleCapture: ✅ 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
```

---

### 2026-06-15 — Workstream D: 5 Requisitos de Refatoração

#### Resumo das alterações

| Req | Arquivo(s) | Implementação |
|---|---|---|
| **1 — Pull-to-Refresh** | `js/medcases-ux-v2.js` §J | Touch gesture `touchstart/touchmove/touchend` no `#scroll-content`; threshold 80px; indicador visual roxo; haptic feedback; `window.location.reload()` após 400ms |
| **2 — i18n Fármacos** | `index.html` | `data-i18n="hm_card_drugs_title"` + `data-i18n="hm_card_drugs_sub"` no card; chaves `hm_card_drugs_title` e `hm_card_drugs_sub` adicionadas ao objeto i18n PT e ES |
| **3 — Urina 24h** | `index.html` | Painel colapsável `#hm-urine-section` com inputs `#hm-urine24` (mL) e `#hm-urine-creat` (mg/dL); `hmCalcCockcroft()` integra ClCr Medido `(Ur×Vol)/(Ps×1440)` com prioridade sobre CG clássico; pill exibe "Ur24" vs "CG"; função `hmToggleUrine24()` |
| **4 — Nova Calculadora** | `index.html` + `css/medcases-ux-v2.css §12` | Remoção do card "Adulto"; novo `calc-hub-grid-v2` 5 fileiras: Pediatria/Gestante, Infusão/Eletrólitos, Antimicrobianos/Fármacos, Hemodinâmica/Scores, Fluidos (full-width); 9 classes `chc-*` com gradientes exclusivos |
| **5 — Purple + Contraste** | `index.html` + `css/medcases-ux-v2.css §0` | `--bg-deep: #0F0920` (roxo MedCases Pro, era azul `#091522`); regras globais: dark → `color: #FFFFFF`, light → `color: #000000`; exceções para cards coloridos e botões |

#### Arquitetura Pull-to-Refresh
```
touchstart (scrollTop≤2) → captura _startY
touchmove → calcula dy; mostra indicador roxo proporcional
             label: "Puxe para atualizar" → "↺ Atualizando..." (dy≥80px)
             haptic vibrate(30ms)
touchend (triggered) → espera 400ms → window.location.reload()
touchend (não atingiu) → colapsa indicador
```

#### Arquitetura ClCr Medido (Urina 24h)
```
Se #hm-urine24 E #hm-urine-creat preenchidos:
  ClCr = (Cr_urinária × Vol_urina_mL) / (Cr_sérica × 1440)
  pill → "Ur24"
Senão:
  ClCr = ((140 - Idade) × Peso) / (72 × Cr_sérica) × 0.85 se Fem.
  pill → "CG"
```

#### Nova estrutura calc-hub-grid-v2
| Fila | Col A | Col B | Cor A | Cor B |
|---|---|---|---|---|
| 1 | Pediatria | Gestante | Azul `#1E40AF` | Rosa `#9D174D` |
| 2 | Infusão | Eletrólitos | Âmbar `#B45309` | Roxo `#5B21B6` |
| 3 | Antimicrobianos | Fármacos | Marrom `#78350F` | Marinho `#1E3A5F` |
| 4 | Hemodinâmica | Scores | Vermelho `#991B1B` | Cinza `#374151` |
| 5 (full-width) | Fluidos | — | Verde `#065F46` | — |

#### Validação
```
PlaywrightConsoleCapture: ✅ 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
```

---

### 2026-06-14 — Motor Cockcroft-Gault Reativo (Input Creatinina → ClCr automático)

#### Problema resolvido
O campo "ClCr mL/min" exigia que o médico calculasse manualmente o clearance antes de informar.
Na prática, o médico tem em mãos a **Creatinina Sérica** (ex: 3 mg/dL) — não o ClCr final.

#### Arquivos modificados
| Arquivo | Mudanças |
|---|---|
| `index.html` | Label `ClCr mL/min` → `Creatinina mg/dL`; input visível `#hm-creatinina`; hidden `#hm-clcr` mantido para retrocompatibilidade; `hmFixarDados` salva `creatinine`; `hmLoadPatient` restaura creatinina e re-dispara CG; `hmClearPatient` limpa `#hm-creatinina` |
| `js/medcases-ux-v2.js` | Novo §H `hmCalcCockcroft()` + §I listeners reativos + monkey-patch `hmSetSex` |

#### Arquitetura da solução

```
Médico digita Creatinina (ex: 3.0 mg/dL)
       ↓  oninput="hmCalcCockcroft()"
Cockcroft-Gault:
  Masc: ClCr = ((140 - Idade) × Peso) / (72 × Creatinina)
  Fem:  ClCr = acima × 0.85
  → resultado clampado [1, 250] mL/min
       ↓
#hm-clcr.value = "20.1"   (hidden — motor renal existente não muda)
dispatchEvent('input') + dispatchEvent('change')
       ↓                          ↓
hm-pv-clcr badge = "20.1"   Motor renal reage → ajuste de dose atualizado
(borda laranja: ClCr 10–30)  hmShowInlineResult() re-renderiza se visível
       ↓
window.patientData.clcr = 20.1
window.patientData.creatinine = 3.0
```

#### Por que `#hm-clcr` hidden (não removido)?
Todo o motor JS existente (~50 referências) lê `getElementById('hm-clcr')`.
Manter o campo hidden e escrever nele via JS preserva **retrocompatibilidade total**
sem tocar em nenhuma linha do motor renal, prefetch ou hmFixarDados.

#### Reatividade completa
| Evento | Reação |
|---|---|
| Digita Creatinina | Recalcula CG imediatamente |
| Digita Peso | Recalcula CG imediatamente |
| Digita Idade | Recalcula CG imediatamente |
| Clica Masc./Fem. | Recalcula CG com fator 0.85 para Fem. |
| Abre app com dados salvos | Restaura creatinina → recalcula CG |
| Clica Limpar | Zera creatinina + clcr hidden + badge |

#### Pill semafórica de ClCr (cor por faixa)
| Faixa | Cor da borda |
|---|---|
| < 10 mL/min | Vermelho `rgba(248,113,113,0.45)` |
| 10–29 mL/min | Âmbar `rgba(251,191,36,0.40)` |
| 30–49 mL/min | Laranja `rgba(251,146,60,0.40)` |
| ≥ 50 mL/min | Cyan `rgba(56,189,248,0.25)` |

#### Validação
```
PlaywrightConsoleCapture: ✅ 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor + Diretriz 3 (formulações) + Diretriz 6 (copiar Rx)
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
```

---

### 2026-06-13 — Finalização: Migração 22/22 + Fix Esquemas Disponíveis

#### Correção adicional — metronidazol e ciprofloxacino
Na varredura final de sanidade, detectou-se que **metronidazol** e **ciprofloxacino** ainda estavam
em schema legado (strings planas). Ambos foram migrados para `{ dose, via, intervalo, obs }`.
Varredura grep confirma zero ocorrências de `fgMaior50: t(lang` ou equivalentes — **22/22 migrados**.

---

### 2026-06-13 — Fix: Esquemas Disponíveis agora refletem ajuste renal em tempo real

#### Problema corrigido
Os cards "ADULTO VO", "ADULTO EV" e "PEDIÁTRICA" na seção **Esquemas Disponíveis** exibiam
os intervalos/doses estáticos do `calculate()` (ex: `12/12h` fixo para ciprofloxacino) mesmo
quando o ClCr do paciente indicava uma faixa diferente (ex: ClCr 8,95 → deveria mostrar `24/24h`).

**Causa raiz**: O bloco "Esquemas Disponíveis" era montado com `rich.dose` (objeto `dose:{}` do
`calculate()`, sempre calculado com os valores retornados pelo fármaco) e não consultava `renalDose`.

#### Solução implementada

**1. `calcDrugDose()` — `_tryRenalOverride()` IIFE** (`index.html` ~linha 11348)

Antes de montar `allDosesHtml`, executa um interceptador inline que:
- Lê `drug._source.renalDose` (disponível via adaptador `_source: entry`)
- Verifica `requiresAdjustment: true` + ClCr real do paciente OU flag HD ativa
- Determina a faixa ativa: `fg30a50` / `fg10a30` / `fgMenor10` / `hemodialise`
- Normaliza via `_renalNormalizeFaixa()` inline (dual-mode: objeto e string legada)
- Retorna `renalOverride = { faixaKey, faixaLabel, dados, clcrV, isHD }` ou `null`

Se `renalOverride !== null`, substitui **toda** a seção "Esquemas Disponíveis" por um
card único "ESQUEMA RENAL AJUSTADO" com:
- Badge laranja (ClCr ≤ 50) ou lilás (HD) com borda colorida
- Pills estruturadas: `💊 dose` · `via` · `🔄 intervalo`
- Observação clínica em `border-left` colorida
- Fallback texto plano para schema legado (string)

Se `renalOverride === null` (ClCr > 50 ou sem `renalDose`), exibe os cards originais sem alteração.

**2. Listener `#hm-clcr` ampliado** — também chama `calcDrugDose(selectedDrug)` quando visível

**3. `hmToggleHemodialise()` ampliado** — idem, re-renderiza card ao ativar/desativar HD

**4. Sincronização `patientData.clcr` em tempo real** — o listener agora atualiza
`window.patientData.clcr` a cada tecla no `#hm-clcr`, sem precisar clicar em "Fixar Dados".

**Playwright**: ✅ zero erros · 125 protocolos · Load 13s

---

### 2026-06-13 — Migração de Schema Completa: Motor Universal v2 (22/22 fármacos)

#### `database/antimicrobianos.js` — Schema `renalDose` migrado para objetos estruturados (22/22 ✅)

Todos os 22 fármacos possuem agora `renalDose` no **novo schema objeto** `{ dose, via, intervalo, obs }`, compatível com o Motor Renal v2 para renderização de pills separadas na UI.

**Schema novo (objeto):**
```js
fgMaior50: { dose: "500 mg", via: "VO", intervalo: "12/12h", obs: "Texto clínico..." }
```

**Migração por lotes (esta sessão):**
| # | Fármaco | `requiresAdjustment` | Status |
|---|---|---|---|
| 7 | clindamicina | false | ✅ |
| 8 | sulfametoxazol_trimetoprim | true | ✅ |
| 9 | piperacilina_tazobactam | true | ✅ |
| 10 | vancomicina | true | ✅ |
| 11 | cefepime | true | ✅ |
| 12 | meropenem | true | ✅ |
| 13 | gentamicina | true | ✅ |
| 14 | amicacina | true | ✅ |
| 15 | levofloxacino | true | ✅ |
| 16 | doxiciclina | false | ✅ |
| 17 | cefazolina | true | ✅ |
| 18 | oxacilina | false | ✅ |
| 19 | cefalexina | true | ✅ |
| 20 | cefuroxima | true | ✅ |
| 21 | ceftazidima | true | ✅ |
| 22 | cefotaxima | false | ✅ |

**Migração prévia (sessões anteriores — 1–6):**
azitromicina ✅ · ceftriaxona ✅ · amoxicilina ✅ · amoxicilina_clavulanato ✅ · metronidazol ✅ · ciprofloxacino ✅

**Playwright pós-migração:** ✅ zero erros · 125 protocolos carregados · Load 13s

---

### 2026-06-13 — Camada Renal Completa + Módulo Reativo ClCr × renalDose

#### `database/antimicrobianos.js` — Camada `renalDose` (22 fármacos, 100%)
Todos os 22 antimicrobianos do banco possuem o campo `renalDose` inserido cirurgicamente após a linha `ref:` de cada `return {}`.

**Schema por tipo:**
- `requiresAdjustment: false` → 6 campos: `message` + `fgMaior50` + `fg30a50` + `fg10a30` + `fgMenor10` + `hemodialise`
- `requiresAdjustment: true` → 5 campos: `fgMaior50` + `fg30a50` + `fg10a30` + `fgMenor10` + `hemodialise`

| Grupo | Fármacos | `requiresAdjustment` |
|---|---|---|
| 1 | azitromicina, amoxicilina, amoxicilina_clavulanato | false / true / true |
| 2 | ceftriaxona, metronidazol | false / false |
| 3 | ciprofloxacino, clindamicina | true / false |
| 4 | sulfametoxazol_trimetoprim, piperacilina_tazobactam, vancomicina, cefepime | true |
| 5 | meropenem, gentamicina, amicacina, levofloxacino | true |
| 6 | doxiciclina, cefazolina, oxacilina, cefalexina, cefuroxima, ceftazidima, cefotaxima | false / true / false / true / true / true / false |

**Fontes exclusivas:** Sanford Guide · Lexicomp · Micromedex · UpToDate · Goodman & Gilman · IDSA · KDIGO · ASHP · Johns Hopkins ABX Guide

#### `index.html` — Módulo Renal Dinâmico (JavaScript + CSS + HTML)

**Funções adicionadas:**
- `window.obterDosePorFiltrado(renalDoseObj, valorClCr, isHD)` — função pura de cruzamento ClCr × renalDose
- `_renalGetDrugRenalDose(drugId)` — extrai `renalDose` do fármaco via `_source.calculate()`
- `_renalRenderBlock(renalDoseObj, clcrVal, isHD)` — gera HTML do bloco `fd-renal-dynamic`
- `window._renalInjectOrUpdate()` — atualiza/insere o bloco no modal sem re-renderizar o body
- `window.hmToggleHemodialise(checked)` — toggle HD: desabilita input ClCr + força faixa `hemodialise`
- Patch transparente em `window.openFarmacoDetail` via IIFE

**Lógica de faixas:**

| Condição | Faixa retornada | Estado visual |
|---|---|---|
| ClCr vazio + `requiresAdjustment: false` | `message` ou `fgMaior50` | 🟢 `is-ok` |
| ClCr vazio + `requiresAdjustment: true` | Aviso de preenchimento | 🟡 `is-missing` |
| ClCr > 50 | `fgMaior50` | 🔵 `is-ok` |
| ClCr 30–50 | `fg30a50` | 🟠 `is-alert` |
| ClCr 10–29 | `fg10a30` | 🟠 `is-alert` |
| ClCr < 10 | `fgMenor10` | 🟠 `is-alert` |
| HD ativo | `hemodialise` | 🟣 `is-hd` |

**Toggle Hemodiálise (card do paciente):**
- Switch CSS puro (`hm-hd-toggle`) com transição suave
- Persiste em `window._renalState.isHD`
- Desabilita input `#hm-clcr` (opacity 38%) quando ativado

**Listener reativo:**
- `#hm-clcr` → eventos `input` + `change` → atualiza bloco em tempo real sem flickering

**CSS adicionado:**
- `.hm-hd-toggle`, `.hm-hd-track`, `.hm-hd-thumb` — toggle switch
- `.fd-renal-block` com 4 variantes: `.is-ok`, `.is-alert`, `.is-missing`, `.is-hd`
- Light mode overrides completos para todos os estados
- Playwright: ✅ zero erros · 125 protocolos carregados

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

### 2026-06-15 — Módulo Cardio: Grupos 1–3B (12 fármacos cardiovasculares)

#### Schema canônico `CARDIO_DRUGS_DB` — IIFE + `calculate(paciente, lang)`

```javascript
(function () {
  const t = (lang, pt, es) => lang === 'pt' ? pt : es;
  window.CARDIO_DRUGS_DB = {};
  Object.assign(window.CARDIO_DRUGS_DB, { /* Grupo N */ });
})();
```

Integrado em `ALL_DRUGS_DB` por spread direto (não `Object.fromEntries`):
```javascript
window.ALL_DRUGS_DB = {
  ...(window.CARDIO_DRUGS_DB || {}),
  // demais módulos
};
```

#### Fármacos inseridos — `database/cardio.js`

| # | Fármaco | Grupo | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|---|
| 1 | Metoprolol | Betabloqueadores | `false` (hepático) | ~25% — dose pós-HD | Succinato (LP) vs Tartarato (IR) |
| 2 | Bisoprolol | Betabloqueadores | `fg < 20` | Não removido | CIBIS-II — evidência em ICFEr |
| 3 | Nebivolol | Betabloqueadores | `fg < 30` | Não removido | Vasodilatação mediada por NO — SENIORS |
| 4 | Enalapril | IECAs | `fg ≤ 50` | ~35–50% — dose pós-HD | Pró-fármaco; enalaprilat EV disponível |
| 5 | Lisinopril | IECAs | `fg < 30` | ~50% — dose pós-HD | **Forma ativa** (não pró-fármaco); único IECA FDA pedi ≥ 6 anos |
| 6 | Ramipril | IECAs | `fg < 30` | **Não dialisável** — sem supl. | HOPE trial; pró-fármaco; hepatotoxicityRisk |
| 7 | Losartana | BRAs | `fg < 30` (cautela) | Não dialisável | Ação uricosúrica; FDA pedi ≥ 6 anos |
| 8 | Valsartana | BRAs | `fg < 30` (cautela) | Não dialisável | Maior dose da classe (320 mg); Val-HeFT + VALIANT |
| 9 | Candesartana | BRAs | `fg < 30` (cautela) | Não dialisável | Maior evidência IC (CHARM Programme); pró-fármaco |
| 10 | Irbesartana | BRAs | `fg < 30` (cautela) | Não dialisável | Nefroproteção DM2 + proteinúria — IDNT/IRMA-2 |
| 11 | Telmisartana | BRAs | **`false`** (biliar ~98%) | **Sem ajuste em HD** | **Único BRA sem ajuste renal**; CI em colestase; ONTARGET |
| 12 | Olmesartana | BRAs | `fg < 30` (cautela) | Não dialisável | Pró-fármaco; **enteropatia sprue-like** (FDA 2013); FDA pedi ≥ 6 anos |

#### Schema `renalDose` V2 — campos obrigatórios

```javascript
renalDose: {
  version: 2,
  requiresAdjustment: Boolean,     // trigger de alerta na UI
  message: String,                 // mensagem contextual
  fgMaior50:  { vo, ev, pediatrica, obs },
  fg30a50:    { vo, ev, pediatrica, obs },
  fg10a30:    { vo, ev, pediatrica, obs },
  fgMenor10:  { vo, ev, pediatrica, obs },
  hemodialise:{ vo, ev, pediatrica, obs }
}
// Cada sub-campo: { dose, intervalo, doseMaxima, unidade } | null
```

#### Regras de conversão de schema externo → canônico

| Campo recebido | Transformação |
|---|---|
| `t(lang, ...)` fora de `calculate()` | Mover para dentro do `calculate()` onde `t` existe |
| `class: { pt, es }` | `class: t(lang, pt, es)` no `return {}` |
| `dose.adult.initial/maintenance/max` | `adultoPadrao` + `adultoGrave` |
| `renalAdjustment.required/message` | Expandir para `renalDose` completo (5 bandas + HD) |
| `commonAdverseEffects: { pt:[], es:[] }` | Array de `t(lang, pt, es)` |
| `ref: []` (array) | String única separada por `·` |
| `interactions`, `contraindications` | Absorvidos em `alerts[]` e `risksByPatient[]` |

#### Validações Playwright — todos PASS

```
✅ Grupo 1 (Betabloqueadores)  — 0 erros JS
✅ Grupo 2 (IECAs)             — 0 erros JS
✅ Grupo 3 (BRAs: losartana·valsartana·candesartana)    — 0 erros JS
✅ Grupo 3B (BRAs: irbesartana·telmisartana·olmesartana) — 0 erros JS
✅ Grupo 4  (BRAs finais + ARNI: eprosartana·azilsartana·sacubitrilValsartana) — 0 erros JS
✅ Grupo 5  (Betabloqueadores adicionais: atenolol·propranolol·esmolol·nadolol) — 0 erros JS
✅ Grupo 6  (Antiarrítmicos: sotalol) — 0 erros JS
✅ Grupo 7  (Betabloqueador Vasodilatador + Bradicardizante: labetalol · ivabradina) — 0 erros JS
✅ Grupo 8  (Glicosídeo Cardíaco: digoxina) — 0 erros JS
✅ Grupo 9  (Diuréticos de Alça: furosemida · bumetanida) — 0 erros JS
```

---

### 2026-06-15 — Módulo Cardio: Grupo 6 (Antiarrítmicos — sotalol)

#### Grupo 6 — Antiarrítmicos (1 fármaco)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 20 | Sotalol | **`fg < 40`** (24/24h); **CI em fg < 10** | Removido por HD — uso contraindicado em DRC grave | `qtRisk: true`; `torsadesRisk: true`; `bronchospasmRisk: true`; Classe III + betabloqueador não seletivo |

#### Diferenciais Clínicos — Sotalol

| Aspecto | Detalhe |
|---|---|
| **Mecanismo duplo** | Bloqueia canais K⁺ (prolongamento QT, Classe III) + betabloqueio não seletivo (β1/β2) |
| **Threshold renal** | `fg < 40` → 80 mg 24/24h; `fg < 10` → CONTRAINDICADO |
| **Alertas dinâmicos** | QTc > 450 ms, K⁺ < 4,0 mEq/L, ClCr < 40 e ClCr < 10 geram alertas automáticos no `calculate()` |
| **CredibleMeds** | Risco "Known Risk" de Torsades de Pointes — categoria de maior risco |
| **Interações críticas** | Amiodarona, dofetilida, quinidina, macrolídeos, fluoroquinolonas, antipsicóticos, metadona |
| **Pré-requisitos** | ECG (QTc < 450 ms) + K⁺ ≥ 4,0 mEq/L + Mg²⁺ ≥ 2,0 mg/dL antes de iniciar |
| **flags extras** | `torsadesRisk: true`, `bronchospasmRisk: true` |

#### Grupo 7 — Betabloqueador Vasodilatador + Bradicardizante (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Diferencial chave |
|---|---|---|---|
| 21 | Labetalol | `false` (hepático) | Duplo mecanismo α+β; `emergencyDrug: true`; preferido em AVC, dissecção de aorta e gestação; `bronchospasmRisk: true`; `hepatotoxicityRisk: true` |
| 22 | Ivabradina | `false` (CYP3A4 hepático) | Único bradicardizante sem efeito inotrópico negativo; `atrialFibrillationRisk: true`; CONTRAINDICADA em FA; SHIFT Trial |

#### Grupo 8 — Glicosídeo Cardíaco (1 fármaco)

| # | Fármaco | `requiresAdjustment` | Diferencial chave |
|---|---|---|---|
| 23 | Digoxina | **`fg < 60`** (ajuste progressivo) | `digoxinToxicityRisk: true`; `electrolyteDependent: true`; janela estreita; alvo sérico 0,5–0,9 ng/mL; antídoto Fab; CI em WPW + FA |

#### Grupo 9 — Diuréticos de Alça (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Diferencial chave |
|---|---|---|---|
| 24 | Furosemida | **`fg < 30`** (doses escalonadas) | `ototoxicityRisk: true` (IV rápida); referência diurética; ≤ 4 mg/min IV; resistência em DRC grave |
| 25 | Bumetanida | **`fg < 30`** (doses maiores) | 1 mg ≈ 40 mg furosemida; maior biodisponibilidade oral (~80%); útil em resistência à furosemida |

#### Flags especiais introduzidos nesta sessão

| Flag | Fármaco(s) | Significado |
|---|---|---|
| `emergencyDrug: true` | labetalol | Uso em emergências hipertensivas, AVC, dissecção |
| `atrialFibrillationRisk: true` | ivabradina | Risco de surgimento de FA — monitorar ritmo |
| `digoxinToxicityRisk: true` | digoxina | Janela terapêutica estreita — nível sérico obrigatório |
| `electrolyteDependent: true` | digoxina | K⁺, Mg²⁺ e Ca²⁺ determinam toxicidade |
| `electrolyteRisk: true` | furosemida, bumetanida | Hipocalemia, hipomagnesemia, hiponatremia |
| `hypokalemiaRisk: true` | furosemida, bumetanida | Risco primário de depleção de K⁺ |
| `hyponatremiaRisk: true` | furosemida, bumetanida | Risco de hiponatremia dilucional |
| `ototoxicityRisk: true` | furosemida, bumetanida | Ototoxicidade — especialmente IV rápida/alta dose |

#### Grupo 9B — Diurético de Alça Alternativo (1 fármaco)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 26 | Torsemida | **`fg < 30`** (dose escalonada) | Parcialmente removida | Biodisponibilidade oral ~80% (vs ~50% furosemida); t½ 3–4h; 20 mg ≈ 40 mg furosemida; TRANSFORM-HF |

##### Diferenciais Clínicos — Torsemida

| Aspecto | Detalhe |
|---|---|
| **Equivalência** | 20 mg VO ≈ 40 mg furosemida VO ≈ 1 mg bumetanida VO |
| **Biodisponibilidade** | ~80% oral (mais consistente que furosemida, menos variável na ICC) |
| **Indicação principal** | Manejo crônico de congestão; alternativa quando há resposta inadequada à furosemida |
| **Flags** | `electrolyteRisk: true` · `hypokalemiaRisk: true` · `hyponatremiaRisk: true` · `ototoxicityRisk: true` |
| **Ref** | TRANSFORM-HF · ESC HF Guidelines · AHA/ACC/HFSA HF Guidelines |

#### Grupo 10 — Diuréticos Poupadores de K⁺ (3 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 27 | Espironolactona | **`fg < 45`** (cautela); **CI fg < 30** (`vo: null`) | Não dialisável | MRA; `hyperkalemiaRisk: true`; `endocrineEffects: true`; RALES Trial; pilar da ICFEr |
| 28 | Eplerenona | **`fg < 50`** (cautela); **CI fg < 30** (`vo: null`) | Não dialisável | MRA seletivo; sem ginecomastia; CYP3A4 — CI com cetoconazol/itraconazol; EPHESUS + EMPHASIS-HF |
| 29 | Amilorida | **`fg < 50`** (cautela); **CI fg < 30** (`vo: null`) | Não dialisável | Bloqueador ENaC (não MRA); sem efeitos endócrinos; `hyperkalemiaRisk: true` |

##### Diferenciais Clínicos — Poupadores de K⁺

| Aspecto | Espironolactona | Eplerenona | Amilorida |
|---|---|---|---|
| **Mecanismo** | Bloqueia receptor aldosterona | Bloqueia receptor aldosterona (seletivo) | Bloqueia canal ENaC |
| **Ginecomastia** | ✅ Sim (efeito androgênico) | ❌ Não | ❌ Não |
| **Interações CYP** | Não relevante | CYP3A4 — CI cetoconazol | Não relevante |
| **Indicação cardio** | ICFEr (RALES) | ICFEr + pós-IAM (EPHESUS/EMPHASIS) | Adjuvante anti-hipertensivo |
| **Ci renal grave** | `vo: null` em fg < 30 | `vo: null` em fg < 30 | `vo: null` em fg < 30 |
| **Flags** | `hyperkalemiaRisk` · `endocrineEffects: true` | `hyperkalemiaRisk` · `endocrineEffects: false` | `hyperkalemiaRisk` · `endocrineEffects: false` |

#### Grupo 11 — Diuréticos Tiazídicos (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 30 | Hidroclorotiazida | **`fg < 30`** (perde eficácia — `vo: null`) | Não dialisável | NCC blocker; mais prescrito mundialmente; `hyponatremia` + `hypokalemia` + `hyperuricemia` + `diabetesRisk` |
| 31 | Clortalidona | **`fg < 30`** (perde eficácia — `vo: null`) | Não dialisável | t½ 40–60h; `longHalfLife: true`; mais potente que HCTZ; ALLHAT + SHEP; maior risco de hiponatremia que HCTZ |

##### Diferenciais Clínicos — Tiazídicos

| Aspecto | Hidroclorotiazida | Clortalidona |
|---|---|---|
| **Meia-vida** | 6–15h | **40–60h** (`longHalfLife: true`) |
| **Duração ação** | 6–12h | 48–72h |
| **Potência anti-HP** | Referência | **Superior** |
| **Risco hiponatremia** | Moderado | **Maior** |
| **Risco hipocalemia** | Moderado | **Maior** |
| **Evidência cardio** | SHEP (parcial) | **ALLHAT + SHEP** |
| **Eficácia em DRC** | Perde em fg < 30 → loop diurético | Perde em fg < 30 → loop diurético |
| **Flags extras** | `hyperuricemiaRisk` · `diabetesRisk` | `hyperuricemiaRisk` · `diabetesRisk` · `longHalfLife` |

#### Regra de inserção CONTRAINDICADO vs perde eficácia

| Classe | FG < 30 — comportamento canônico |
|---|---|
| **Poupadores de K⁺** (espironolactona, eplerenona, amilorida) | `vo: null` com mensagem "CONTRAINDICADO — risco de hipercalemia grave" |
| **Tiazídicos** (HCTZ, clortalidona) | `vo: null` com mensagem "Perde eficácia — considerar diurético de alça" |
| **Diuréticos de alça** (furosemida, bumetanida, torsemida) | Mantêm `vo` com dose aumentada — são justamente a alternativa |

#### Grupo 11B — Diuréticos Tiazídico-like Especiais (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 32 | Indapamida | **`fg < 30`** (perde eficácia — `vo: null`) | Não dialisável | Vasodilatação arterial direta; menor impacto metabólico; HYVET (idosos) + ADVANCE (diabéticos) |
| 33 | Metolazona | **`fg < 30`** (mantém eficácia — diferencial!) | Uso hospitalar em contexto especializado | Bloqueio sequencial do néfron; IC avançada; `hospitalizationLevelDrug: true`; `qtRisk: true` |

##### Diferenciais Clínicos — Indapamida vs Metolazona

| Aspecto | Indapamida | Metolazona |
|---|---|---|
| **Indicação principal** | HAS (especialmente idosos/diabéticos) | IC avançada com resistência diurética |
| **Eficácia em DRC** | Perde em fg < 30 → loop diurético | **MANTÉM** mesmo em fg < 30 (diferencial) |
| **Impacto metabólico** | Menor que HCTZ/clortalidona | Elevado |
| **Uso hospitalar** | Ambulatorial | Hospitalar preferencial |
| **Risco QT** | ❌ Não | ✅ Sim (distúrbio eletrolítico) |
| **Evidência** | HYVET · ADVANCE | ESC/AHA HF Guidelines |
| **Associação** | IECA / BRA / BCC | Diurético de alça (30–60 min antes) |

#### Grupo 11C — Diuréticos Especiais (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 34 | Acetazolamida | **`fg < 50`** (`fg < 30` → evitar) | CONTRAINDICADA | Inibidor anidrase carbônica; ADVOR Trial; bicarbonatúria; `metabolicAcidosisRisk: true`; `nephrolithiasisRisk: true` |
| 35 | Manitol | **`fg < 50`** (`fg < 10` / anúria → CI) | CONTRAINDICADO | Diurético osmótico; HIC/edema cerebral; `infusionDrug: true`; `volumeOverloadRisk: true`; CI em ICC descompensada |

##### Diferenciais Clínicos — Acetazolamida vs Manitol

| Aspecto | Acetazolamida | Manitol |
|---|---|---|
| **Mecanismo** | Inibe anidrase carbônica (túbulo proximal) | Osmótico (sem metabolização) |
| **Via** | VO e IV | IV exclusivo |
| **Indicação cardio** | IC aguda + alcalose metabólica (ADVOR) | Contraindicado em ICC descompensada ativa |
| **Indicação neuro** | Hipertensão intracraniana (adjuvante) | **HIC, edema cerebral** (indicação primária) |
| **Risco principal** | Acidose metabólica | Edema pulmonar por expansão de volume |
| **Contraindicação** | Acidose metabólica, DRC grave, cirrose | ICC descompensada, anúria, edema pulmonar |
| **Ref. principal** | ADVOR Trial (NEJM 2022) | Neurocritical Care Guidelines |

#### Grupo 12 — Bloqueadores de Canal de Cálcio Diidropiridínicos (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 36 | Amlodipina | **`false`** (hepático / CYP3A4) | Não dialisável — sem ajuste | t½ 30–50h; `peripheralEdemaRisk: true`; 1ª linha HAS global; ASCOT + CAMELOT |
| 37 | Nifedipina | **`false`** (hepático / CYP3A4) | Não dialisável — sem ajuste | `reflexTachycardiaRisk: true`; `pregnancyPreferred: true`; Formulação IR reservada a urgências; ACOG |

##### Diferenciais Clínicos — Amlodipina vs Nifedipina

| Aspecto | Amlodipina | Nifedipina |
|---|---|---|
| **Meia-vida** | **30–50h** (dose única) | 2–5h (IR) · 7–12h (LP) |
| **Formulações** | Comprimido único | Cápsula IR 10 mg + LP 30/60 mg |
| **Taquicardia reflexa** | Mínima | **Significativa** (IR > LP) |
| **Gestação** | Uso possível | **Anti-HP oral de escolha** (ACOG) |
| **Edema periférico** | Frequente | Frequente |
| **Uso em urgência** | Sem formulação IV | IR 10 mg VO |
| **Interação sinvastatina** | Limitar a 20 mg | Limitar a 20 mg |
| **Flags extras** | `peripheralEdemaRisk` | `reflexTachycardiaRisk` · `pregnancyPreferred` |

#### Alertas dinâmicos implementados — Grupos 11B, 11C, 12

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| indapamida | `sodio` | < 130 → CONTRAINDICADA; < 136 → Hiponatremia leve |
| indapamida | `potassio` | < 3.0 → Hipocalemia grave; < 3.5 → Hipocalemia |
| indapamida | `idade` | ≥ 80 → monitorar Na⁺/quedas |
| metolazona | `sodio` | < 130 → Suspender; < 136 → Avaliar |
| metolazona | `potassio` | < 3.0 → Suspender urgente; < 3.5 → Avaliar |
| metolazona | `idade` | ≥ 75 → Monitorização intensiva |
| acetazolamida | `sodio` | < 130 → CONTRAINDICADA |
| acetazolamida | `potassio` | < 3.0 → CONTRAINDICADA |
| acetazolamida | `clcr` | < 30 → Evitar |
| manitol | `sodio` | > 155 → Risco de hipernatremia |
| manitol | `clcr` | < 30 → Supervisão especializada |
| manitol | `peso` | Calculado → doseMin/doseMax exibidos dinamicamente |
| nifedipina | `gestante` | true → Alerta pré-fixado urgência hipertensiva ACOG |
| nifedipina | `fc` | > 100 → Taquicardia — avaliar formulação LP |
| amlodipina | `idade` | ≥ 75 → Iniciar com 2,5 mg |

#### Grupo 12B — BCC Diidropiridínicos 2ª/3ª Geração (3 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 38 | Felodipina | **`false`** (hepático / CYP3A4) | Não dialisável | LP exclusivo; meia-vida 11–16h; `reflexTachycardiaRisk: true`; grapefruit CI |
| 39 | Lercanidipina | **`false`** (hepático / CYP3A4) | Não dialisável | 3ª geração; `lowEdemaComparedToAmlodipine: true`; CI insuficiência hepática grave; cetoconazol/itraconazol CI absoluta; tomar ANTES das refeições |
| 40 | Manidipina | **`false`** (hepático / CYP3A4) | Não dialisável | 3ª geração; `renalProtectionPotential: true`; HAS + DM + DRC; menor edema; `reflexTachycardiaRisk: false` |

##### Comparativo BCC DHP — Amlodipina vs Felodipina vs Lercanidipina vs Manidipina

| Aspecto | Amlodipina | Felodipina | Lercanidipina | Manidipina |
|---|---|---|---|---|
| **Geração** | 2ª | 2ª | 3ª | 3ª |
| **t½** | **30–50h** | 11–16h | 8–10h | 7–12h |
| **Edema periférico** | Frequente | Frequente | **Menor** | **Menor** |
| **Taquicardia reflexa** | Mínima | Sim | Mínima | Mínima |
| **Grapefruit** | Sim | **CI** | **CI** | **CI** |
| **Gestação** | Possível | Evitar | Evitar | Evitar |
| **Hepatotoxicidade CI** | Não | Sim | **Grave CI absoluta** | Sim |
| **Indicação especial** | 1ª linha global | HAS + angina | HAS idosos/DM/DRC | HAS + DM + DRC + microalbuminúria |
| **Instrução de tomada** | Qualquer hora | Qualquer hora | **15 min ANTES refeição** | Qualquer hora |

#### Grupo 13 — BCC Não-Diidropiridínicos (2 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 41 | Verapamil | **`false`** (hepático) | Não dialisável | `bradycardiaRisk: true`; `avBlockRisk: true`; `heartFailureRisk: true`; `digoxinInteractionRisk: true`; constipação mais frequente; CI IC-FEr |
| 42 | Diltiazem | **`false`** (hepático) | Não dialisável | `bradycardiaRisk: true`; `avBlockRisk: true`; `heartFailureRisk: true`; `ivUseHighRisk: true`; dose IV calculada por peso (0,25 mg/kg bolus); menor inotrópico negativo que verapamil |

##### Diferenciais Clínicos — Verapamil vs Diltiazem

| Aspecto | Verapamil | Diltiazem |
|---|---|---|
| **Efeito inotrópico negativo** | **Mais intenso** | Moderado |
| **Constipação** | **Frequente** | Infrequente |
| **Dose IV** | 5–10 mg bolus 2–3 min | 0,25 mg/kg bolus 2 min (por peso) |
| **Infusão IV** | — | 5–15 mg/h (controle FA) |
| **Indicação extra** | HCM obstrutiva | Angina vasoespástica + coronariana |
| **CI absoluta** | IC-FEr + betabloqueador IV | IC-FEr + betabloqueador IV |
| **Digoxina** | ↑ níveis ~50–75% (reduzir dose) | ↑ níveis (monitorar) |
| **Formulações** | IR 40/80/120 mg · LP 180/240 mg · IV | IR 30/60 mg · LP 90–360 mg · IV |
| **`infusionDrug`** | ✅ | ✅ |
| **`ivUseHighRisk`** | ✅ | ✅ |

##### Alertas dinâmicos — Grupos 12B e 13

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| felodipina | `idade` | ≥ 75 → Iniciar 2,5 mg/dia |
| lercanidipina | `idade` | ≥ 75 → Excelente opção — menor edema |
| manidipina | `idade` | ≥ 75 → Bom perfil hemodinâmico |
| manidipina | `clcr` | < 45 → Cautela DRC moderada/grave |
| verapamil | `feve` | < 40% → CONTRAINDICADO — IC-FEr |
| verapamil | `fc` | < 55 → Bradicardia — avaliar CI |
| verapamil | `idade` | ≥ 75 → Doses menores obrigatórias |
| diltiazem | `feve` | < 40% → CONTRAINDICADO — IC-FEr |
| diltiazem | `fc` | < 55 → Bradicardia — avaliar CI |
| diltiazem | `peso` | Calculado → dosesBolus (0,25 e 0,35 mg/kg) exibidas dinamicamente |
| diltiazem | `idade` | ≥ 75 → Maior risco BAV, hipotensão, quedas |

#### Validação Playwright — Grupos 9B–13 (acumulado)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
Load time: 19.11s
Total drogas em cardio.js: 42 (Grupos 1–13)
```

---

#### Grupo 14 — Antiarrítmicos (4 fármacos)

| # | Fármaco | Classe | Uso IV | `safetyFlags` críticos | Diferencial chave |
|---|---|---|---|---|---|
| 43 | Adenosina | Bloqueador transitório nó AV (ultracurta) | ✅ bolus exclusivo | `emergencyDrug`, `bronchospasmRisk`, `preExcitationRisk`, `ivUseHighRisk`, `hospitalizationRequired` | t½ <10 s; dose 6→12 mg; 3 mg se dipiridamol/carbamazepina/acesso central; CI FA+pré-excitação |
| 44 | Amiodarona | Classe III + I + II + IV | ✅ infusão + bolus PCR | `torsadesRisk`, `pulmonaryToxicityRisk`, `hepaticToxicityRisk`, `thyroidToxicityRisk`, `longHalfLife`, `highInteractionRisk` | t½ 40–60 dias; PCR: 300 mg IV bolus; varfarina INR dobra; digoxina ↑ 50%; Black Box: pulmão + fígado |
| 45 | Dronedarona | Classe III — análogo não iodado amiodarona | ❌ | `heartFailureRisk`, `torsadesRisk`, `hepaticToxicityRisk`, `highInteractionRisk` | t½ 13–19 h; 400 mg 12/12h com alimentos; CI absoluta FA permanente (PALLAS); CI IC descompensada/NYHA IV; CYP3A4 múltiplas CI |
| 46 | Dofetilida | Classe III puro — bloqueador IKr | ❌ | `torsadesRisk`, `electrolyteDependent`, `hospitalizationRequired`, `renalHighRisk`, `highInteractionRisk` | t½ ~10 h; dose por ClCr (500/250/125 mcg); CI ClCr<20; CI HCTZ, verapamil, trimetoprim, cimetidina, cetoconazol; telemetria ≥3 dias obrigatória |

##### Ajuste Renal — Dofetilida (único com `requiresAdjustment: true` no Grupo 14)

| ClCr (mL/min) | Dose VO 12/12h | Observação |
|---|---|---|
| >60 | 500 mcg | Dose plena |
| 40–60 | 250 mcg | Redução 50% |
| 20–39 | 125 mcg | Dose mínima |
| <20 | **CONTRAINDICADO** | Risco de acúmulo e Torsades fatal |
| Hemodiálise | **CONTRAINDICADO** | ClCr efetivo <20 mL/min |

##### Diferenciais Clínicos — Antiarrítmicos Grupo 14

| Aspecto | Adenosina | Amiodarona | Dronedarona | Dofetilida |
|---|---|---|---|---|
| **Meia-vida** | <10 segundos | **40–60 dias** | 13–19 h | ~10 h |
| **Via** | IV bolus exclusivo | IV + VO | VO exclusivo | VO exclusivo |
| **Indicação FA** | Diagnóstico/TSVP | FA + arritmias V | FA não permanente | FA + flutter |
| **IC-FEr** | Possível monitorado | Sim (cautela) | **CI absoluta** | Possível (DIAMOND) |
| **FA permanente** | Não indicado | Possível | **MORTALIDADE ↑ (PALLAS)** | Não indicado |
| **Toxicidade órgão** | Broncoespasmo | Pulmão+Fígado+Tireoide | Fígado (rara) | **Renal (ClCr-dependente)** |
| **Iodo** | Não | **Sim** | **Não** | Não |
| **Interação warfarina** | Não | **↑↑ INR (CYP2C9)** | Monitorar | Não |
| **Interação digoxina** | Leve | **↑ 50% (reduzir dose)** | ↑ (reduzir dose) | Não relevante |
| **Black Box FDA** | Não | **Sim (pulmão+fígado)** | **Sim (FA permanente+IC)** | **Sim (Torsades)** |
| **Hospitalização** | ✅ emergência | ✅ início IV | ❌ ambulatorial | ✅ início obrigatório |
| **Referência trial** | AHA ACLS | ESC VA/AF | ATHENA/PALLAS | DIAMOND |

##### Alertas dinâmicos — Grupo 14

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| adenosina | `preExcitacao` | true → CONTRAINDICADO — FA/flutter com pré-excitação (risco FV) |
| adenosina | `qrsLargo + ritmoIrregular` | true → CONTRAINDICADO — possível FA+pré-excitação |
| adenosina | `asmaDpoc` | true → CONTRAINDICADO relativo — broncoespasmo grave |
| adenosina | `usoDipiridamol/usoCarbamazepina` | true → dose inicial 3 mg (reduzida) |
| adenosina | `acessoCentral` | true → dose inicial 3 mg (acesso central) |
| adenosina | `paSistolica` | <90 → preferir cardioversão elétrica |
| amiodarona | `qtc` | >500 → CONTRAINDICADO/avaliar suspensão; >470 → warning |
| amiodarona | `potassio` | <3.5 → corrigir antes; <4.0 → alerta |
| amiodarona | `magnesio` | <1.7 → repor antes de iniciar |
| amiodarona | `fc` | <50 → CONTRAINDICADO; <60 → bradicardia |
| amiodarona | `indicacao` | 'PCR' → 300 mg IV/IO bolus + 150 mg adicional |
| amiodarona | `usoVarfarina` | true → reduzir warfarina 30–50%, INR 2×/semana |
| amiodarona | `usoDigoxina` | true → reduzir digoxina ~50%, monitorar nível |
| amiodarona | `tsh` | <0.1 → hipertireoidismo; >10 → hipotireoidismo |
| amiodarona | `doencaPulmonar` | true → monitorar toxicidade pulmonar |
| dronedarona | `faPermanente` | true → CONTRAINDICADO ABSOLUTO (PALLAS) |
| dronedarona | `icDescompensadaRecente/classeNYHA≥4` | true → CONTRAINDICADO (Black Box) |
| dronedarona | `qtc` | ≥500 → CONTRAINDICADO; ≥470 → warning |
| dronedarona | `inibidoresCYP3A4` | true → CONTRAINDICADO (cetoconazol, claritromicina, ritonavir) |
| dronedarona | `medicamentosQT` | true → CONTRAINDICADO |
| dronedarona | `usoDigoxina` | true → reduzir dose e monitorar |
| dofetilida | `clcr` | <20 → CONTRAINDICADO; 20–39 → 125 mcg; 40–60 → 250 mcg; >60 → 500 mcg |
| dofetilida | `qtc` | >440 → CONTRAINDICADO; >500 → CONTRAINDICADO absoluto |
| dofetilida | `potassio` | <3.5 → NÃO INICIAR; <4.0 → manter alvo >4.0 |
| dofetilida | `magnesio` | <1.7 → NÃO INICIAR |
| dofetilida | `usoVerapamil` | true → CONTRAINDICADO |
| dofetilida | `usoHidroclorotiazida` | true → CONTRAINDICADO |
| dofetilida | `usoTrimetoprim` | true → CONTRAINDICADO |
| dofetilida | `usoCimetidina` | true → CONTRAINDICADO |
| dofetilida | `usoCetoconazol` | true → CONTRAINDICADO |
| dofetilida | `sexo/idade` | F ou ≥70 → maior risco Torsades |

#### Validação Playwright — Grupos 1–14 (acumulado)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
Load time: 30.25s
Total drogas em cardio.js: 46 (Grupos 1–14)
```

---

#### Grupo 15 — Antiarrítmicos Adicionais (3 fármacos)

| # | Fármaco | Classe | Via | `safetyFlags` críticos | Diferencial chave |
|---|---|---|---|---|---|
| 47 | **Ibutilida** | III IV (IKr + Na⁺ lento) | IV bolus exclusivo | `torsadesRisk`, `qtRisk`, `electrolyteDependent`, `hospitalizationRequired`, `ivUseHighRisk` | t½ ~6 h; ≥60 kg=1 mg, <60 kg=0,01 mg/kg IV 10 min; repetir 1×; CI QTc >440, Torsades prévia, Classe IA/III concomitante; ECG ≥4 h pós-dose; alta taxa conversão flutter (~60–70%) |
| 48 | **Flecainida** | IC (bloqueador Na⁺ potente) | VO | `ventricularProarrhythmiaRisk`, `structuralHeartDiseaseContraindication`, `qrsWideningRisk`, `avBlockRisk`, `highInteractionRisk` | t½ 12–27 h; 50–150 mg 12/12h; CI absoluta: IAM, coronariana, IC-FEr, cardiopatia estrutural (CAST); alargar QRS >25% = toxicidade; pill-in-the-pocket supervisionada; risco flutter 1:1 sem bloqueador AV |
| 49 | **Procainamida** | IA (Na⁺ + K⁺) | IV carga + infusão | `torsadesRisk`, `qtRisk`, `qrsWideningRisk`, `hypotensionRisk`, `emergencyDrug`, `infusionDrug`, `preExcitationRisk`, `autoimmunityRisk` | t½ 3–5 h (NAPA 6–10 h); carga 15–18 mg/kg a 20–50 mg/min; infusão 1–4 mg/min; fármaco de **escolha em FA/flutter com WPW**; QRS alarga PR e QT; suspender se QRS >50% ou QTc >500; lúpus induzido (uso crônico) |

##### Ajuste Renal — Flecainida e Procainamida

| Fármaco | ClCr >50 | ClCr 30–50 | ClCr 10–30 | ClCr <10 / HD |
|---|---|---|---|---|
| Flecainida | 50–150 mg 12/12h | 50–100 mg 12/12h | 50 mg/dia (cautela) | Evitar |
| Procainamida | 15–18 mg/kg carga → 1–4 mg/min | 12–15 mg/kg → 1–2 mg/min | 10–12 mg/kg → 0,5–1 mg/min | Dados muito limitados |
| Ibutilida | Sem ajuste formal | Cautela (pró-arritmia) | Cautela aumentada | Evitar se possível |

##### Diferenciais Clínicos — Grupo 15 vs Grupo 14

| Aspecto | Ibutilida | Flecainida | Procainamida |
|---|---|---|---|
| **Indicação primária** | Conversão FA/flutter | FA paroxística manutenção | TV estável + FA/WPW |
| **Via** | IV bolus | VO | IV carga + infusão |
| **QRS** | Não afeta | **Alarga** (CI >25%) | **Alarga** (CI >50%) |
| **QT** | **Prolonga** (Torsades) | Não prolonga | **Prolonga** (Torsades) |
| **Cardiopatia estrutural** | Cautela (IC grave) | **CI ABSOLUTA** (CAST) | Cautela (inotrópico negativo) |
| **WPW** | CI | CI sem especialista | **ESCOLHA** |
| **Ambulatorial** | ❌ hospitalar | ✅ (selecionados) | ❌ hospitalar |
| **Lúpus** | Não | Não | **Sim (crônico)** |
| **Telemetria** | ✅ ≥4 h | ❌ | ✅ durante infusão |
| **Black Box** | **Torsades** | **CAST (morte)** | **Torsades + Lúpus** |
| **Trial ref.** | AHA/ACC/HRS | **CAST Trial** | AHA ACLS/ESC |

##### Alertas dinâmicos — Grupo 15

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| ibutilida | `qtc` | >440 → CONTRAINDICADO |
| ibutilida | `torsadesPreviaTorsades` | true → CONTRAINDICADO |
| ibutilida | `usoAntiarrtimicoClasseIA/III` | true → CONTRAINDICADO |
| ibutilida | `potassio` | <4.0 → corrigir; <3.5 → CI |
| ibutilida | `magnesio` | <2.0 → corrigir; <1.7 → CI |
| ibutilida | `sexo` | 'F' → risco Torsades ~2× maior |
| ibutilida | `peso` | <60 kg → dose 0,01 mg/kg (calculada) |
| ibutilida | `feve` | <35% → preferir cardioversão elétrica |
| flecainida | `iamPrevio` | true → CONTRAINDICADO (CAST) |
| flecainida | `doencaCoronariana` | true → CONTRAINDICADO |
| flecainida | `cardiopatiaEstrutural` | true → CONTRAINDICADO |
| flecainida | `icFEr / feve` | <40% → CONTRAINDICADO |
| flecainida | `qrs` | >120 → CI; >100 → warning |
| flecainida | `clcr` | <50 → reduzir dose; <30 → cautela extrema |
| flecainida | `pillInPocket` | true → alerta protocolo supervisionado + bloqueador AV |
| flecainida | `usoBloqueadorAV` | false → alerta risco flutter 1:1 |
| flecainida | `usoAmiodarona` | true → reduzir dose (inibe CYP2D6) |
| procainamida | `qtc` | >500 → CI; >440 → warning |
| procainamida | `lupusAtivo` | true → CONTRAINDICADO |
| procainamida | `paSistolica` | <90 → CI (hipotensão) |
| procainamida | `icDescompensada` | true → CI (inotrópico negativo) |
| procainamida | `potassio` | <3.5 → CI |
| procainamida | `clcr` | <30 → infusão 0,5–1 mg/min; <50 → 1–2 mg/min |
| procainamida | `indicacao` | 'WPW'/'FA-preexcitacao' → alerta positivo (fármaco de escolha) |
| procainamida | `peso` | calculado → doseMin/doseMax (15–18 mg/kg) dinâmicas |

#### Validação Playwright — Grupos 1–15 (acumulado)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
Load time: 32.16s
Total drogas em cardio.js: 49 (Grupos 1–15)
```

---

#### Grupo 16 — Antiarrítmicos (3 fármacos)

| # | Fármaco | Classe | Via | `safetyFlags` críticos | Diferencial chave |
|---|---|---|---|---|---|
| 50 | **Disopiramida** | IA (Na⁺ + K⁺) + anticolinérgico potente | VO | `torsadesRisk`, `qtRisk`, `heartFailureRisk`, `anticholinergicRisk`, `qrsWideningRisk` | t½ 6–8 h; 100–150 mg 6/6h; ajuste renal obrigatório; CI IC-FEr/choque/glaucoma/retenção urinária; anticolinérgico potente (Beers ≥65 anos); indicação especial **CMH obstrutiva** |
| 51 | **Lidocaína** | IB IV (canal Na⁺ ventricular) | IV bolus + infusão | `neurotoxicityRisk`, `seizureRisk`, `bradycardiaRisk`, `infusionDrug`, `emergencyDrug`, `ivUseHighRisk` | t½ 1,5–2 h; bolus 1–1,5 mg/kg IV → infusão 1–4 mg/min; t½ **prolongada em IC/choque/hepatopatia** → reduzir 50%; dose calculada por peso dinamicamente; PCR: 1,5 mg/kg se amiodarona indisponível |
| 52 | **Mexiletina** | IB oral (análogo oral da lidocaína) | VO | `neurotoxicityRisk`, `seizureRisk`, `ventricularProarrhythmiaRisk`, `hepaticToxicityRisk`, `highInteractionRisk` | t½ 10–12 h; 150–300 mg 8/8h com alimentos; metabolismo CYP1A2+CYP2D6; hepatotoxicidade rara; amiodarona ↑ níveis; teofilina ↑ por mexiletina; uso restrito a TV/EV potencialmente fatais |

##### Comparativo Classe IB — Lidocaína vs Mexiletina

| Aspecto | Lidocaína IV | Mexiletina VO |
|---|---|---|
| **Via** | IV exclusivo | VO exclusivo |
| **t½** | 1,5–2 h (variável) | 10–12 h |
| **Uso** | Agudo/emergência | Crônico/manutenção |
| **QT** | Não prolonga | Não prolonga |
| **QRS** | Mínimo (toxicidade) | Mínimo (toxicidade) |
| **Hepatopatia** | Reduzir infusão 50% | Reduzir dose |
| **IC/Choque** | **Reduzir 50%** | Cautela |
| **Neurotoxicidade** | Dose-dependente, IV | GI + neurológica |
| **Indicação PCR** | ✅ alternativa amiodarona | ❌ |
| **CMH** | ❌ | ❌ |
| **Interação amiodarona** | Bradicardia + toxicidade | ↑ níveis (CYP) |

##### Diferenciais Disopiramida — Classe IA com perfil único

| Aspecto | Disopiramida | Procainamida | Quinidina |
|---|---|---|---|
| **Anticolinérgico** | **Potente** | Fraco | Moderado |
| **CMH obstrutiva** | **Indicação especial** | Não | Não |
| **Inotrópico negativo** | **Forte** | Moderado | Moderado |
| **Lúpus induzido** | Não | Sim (crônico) | Sim (crônico) |
| **Ajuste renal** | **Sim (obrigatório)** | Sim | Sim |
| **Idoso (Beers)** | **Evitar ≥65 anos** | Cautela | Cautela |

##### Ajuste Renal — Disopiramida

| ClCr (mL/min) | Dose VO | Observação |
|---|---|---|
| >50 | 100–150 mg 6/6h | Dose plena |
| 30–50 | 100 mg 8/8h | Intervalo estendido |
| 10–30 | 100 mg 12/12h | Redução significativa |
| <10 | 100 mg/dia | Evitar; acúmulo alto |
| HD | 100 mg pós-diálise | Parcialmente dialisável |

##### Alertas dinâmicos — Grupo 16

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| disopiramida | `icFEr / feve` | <40% → CONTRAINDICADO |
| disopiramida | `glaucoma` | true → CONTRAINDICADO |
| disopiramida | `retencaoUrinaria` | true → CONTRAINDICADO |
| disopiramida | `qtc` | >500 → CI; >440 → warning |
| disopiramida | `usoAmiodarona/usoSotalol` | true → CONTRAINDICADO (Torsades) |
| disopiramida | `idade` | ≥65 → Beers alert (anticolinérgico) |
| disopiramida | `cmhObstrutiva` | true → alerta positivo (indicação especial) |
| disopiramida | `clcr` | <50 → ajuste renal escalonado |
| lidocaina | `peso` | calculado → bolus Min/Max/Repeat/Max3 dinâmicos |
| lidocaina | `pcr` | true → alerta PCR bolus 1,5 mg/kg |
| lidocaina | `choque/icAvancada` | true → reduzir infusão 50% |
| lidocaina | `funcaoHepatica` | 'grave' → reduzir 50%; 'moderada' → cautela |
| lidocaina | `sinaisNeurotoxicidade` | true → SUSPENDER imediatamente |
| lidocaina | `indicacao` | 'FA' → alerta "pouco eficaz em atrial" |
| mexiletina | `choque` | true → CONTRAINDICADO |
| mexiletina | `sinaisNeurotoxicidade` | true → SUSPENDER |
| mexiletina | `usoAmiodarona` | true → ↑ níveis (CYP2D6/1A2) |
| mexiletina | `usoTeofilina` | true → monitorar toxicidade teofilina |
| mexiletina | `funcaoHepatica` | 'grave' → reduzir dose |
| mexiletina | `tvSustentada` | false → warning uso restrito |

#### Validação Playwright — Grupos 1–16 (acumulado)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
Load time: 32.28s
Total drogas em cardio.js: 52 (Grupos 1–16)
```

---

#### Grupo 17 — Antiarrítmicos Finais (2 fármacos)

| # | Fármaco | Classe | `safetyFlags` críticos | Diferencial chave |
|---|---|---|---|---|
| 53 | **Propafenona** | IC + leve betabloqueio + Ca²⁺ | `qrsWideningRisk`, `ventricularProarrhythmiaRisk`, `structuralHeartDiseaseContraindication`, `bronchospasmRisk`, `brugadaRisk`, `highInteractionRisk` | t½ 2–10 h (CYP2D6); CI IAM/DAC/IC-FEr/Brugada/asma; alerta flutter 1:1; **pode DESMASCARAR Brugada**; CYP2D6+3A4 simultâneos CI; pill-in-the-pocket 450–600 mg |
| 54 | **Quinidina** | IA (Na⁺ + K⁺) + anticolinérgico | `torsadesRisk`, `qtRisk`, `qrsWideningRisk`, `digoxinInteractionRisk`, `hematologicToxicityRisk`, `highInteractionRisk`, `renalHighRisk` | t½ 6–8 h; CI Torsades prévia, miastenia, trombocitopenia prévia; digoxina ↑ ~2×; efeito vagolítico → condução AV aumentada em flutter/FA sem bloqueio AV; **Brugada** (Ito) e **QT curto** (indicações especializadas); cinchonismo |

##### Propafenona vs Flecainida — Comparativo Classe IC

| Aspecto | Propafenona | Flecainida |
|---|---|---|
| **Betabloqueio** | ✅ Leve | ❌ |
| **Bloqueio Ca²⁺** | ✅ Leve | ❌ |
| **Brugada** | **Pode desmascarar** | **Pode desmascarar** |
| **Broncoespasmo** | **CI** (betabloqueio) | Cautela |
| **CYP relevante** | **CYP2D6 + CYP3A4 + CYP1A2** | CYP2D6 |
| **t½** | 2–10 h (variável) | 12–27 h |
| **LP disponível** | ✅ (225/325/425 mg 12/12h) | ❌ |
| **Pill-in-pocket** | 450–600 mg | 200–300 mg |
| **CI combinação** | CYP2D6 + CYP3A4 simultâneos | Amiodarona ↑ níveis |

##### Quinidina — Indicações Especiais Raras

| Indicação | Mecanismo | Nível evidência |
|---|---|---|
| **Síndrome de Brugada** | Bloqueia corrente Ito (K⁺ transitória) → restaura gradiente epicárdico | ESC IIb |
| **Síndrome QT curto** | Prolonga QT por bloqueio IKr | Consenso especialistas |
| **Flutter/FA selecionados** | Uso histórico; hoje substituído por opções mais seguras | Baixo |

##### Alertas dinâmicos — Grupo 17

| Fármaco | Parâmetro | Condição → Alerta |
|---|---|---|
| propafenona | `iamPrevio` | true → CONTRAINDICADO |
| propafenona | `doencaCoronariana` | true → CONTRAINDICADO |
| propafenona | `icFEr / feve` | <40% → CONTRAINDICADO |
| propafenona | `brugada` | true → CONTRAINDICADO |
| propafenona | `asmaDpoc` | true → CONTRAINDICADO (betabloqueio) |
| propafenona | `qrs` | >120 → CI; >100 → warning |
| propafenona | `inibidorCYP2D6 + inibidorCYP3A4` | ambos true → CONTRAINDICADO |
| propafenona | `inibidorCYP2D6` ou `inibidorCYP3A4` | true individual → warning |
| propafenona | `usoDigoxina` | true → monitorar nível |
| propafenona | `usoVarfarina` | true → monitorar INR |
| propafenona | `usoBloqueadorAV` | false → alerta flutter 1:1 |
| propafenona | `pillInPocket` | true → alerta protocolo supervisionado |
| propafenona | `!brugada` | — → warning "pode DESMASCARAR Brugada" |
| quinidina | `torsadesPreviaTorsades` | true → CONTRAINDICADO |
| quinidina | `miasteniaGravis` | true → CONTRAINDICADO |
| quinidina | `trombocitopeniaPrevia` | true → CONTRAINDICADO |
| quinidina | `qtc` | >500 → CI; >450 → warning |
| quinidina | `potassio` | <3.5 → CI; <4.0 → manter alvo |
| quinidina | `magnesio` | <1.7 → alerta danger |
| quinidina | `calcio` | <8.5 → warning |
| quinidina | `medicamentosQT` | true → CONTRAINDICADO |
| quinidina | `usoDigoxina` | true → reduzir digoxina 50% (↑ ~2×) |
| quinidina | `indicacao` | 'FA'/'flutter' → alerta vagolítico (condução AV ↑) |
| quinidina | `brugadaIndicacao` | true → alerta positivo (Ito) |
| quinidina | `qtCurto` | true → alerta positivo (especializado) |
| quinidina | `clcr` | <50 → ajuste renal escalonado 4 faixas |

#### Validação Playwright — Grupos 1–17 (acumulado)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
Load time: 30.47s
Total drogas em cardio.js: 54 (Grupos 1–17)
```

---

#### Validação Playwright — Grupos 7–9 (labetalol, ivabradina, digoxina, furosemida, bumetanida)

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
```

---

#### Validação Playwright — Grupo 6

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
```

---

### 2026-06-15 — Módulo Cardio: Grupos 4–5 (7 fármacos cardiovasculares)

#### Grupo 4 — BRAs Finais + ARNI (3 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 13 | Eprosartana | `fg < 30` (cautela) | Não dialisável | BRA com ação simpatolítica adicional; menos estudado que pares |
| 14 | Azilsartana | `fg < 30` (cautela) | Não dialisável | Maior potência anti-hipertensiva da classe; pró-fármaco |
| 15 | Sacubitril/Valsartana | `fg < 30` (24/26 mg) | Dados limitados | `angioedemaRisk: true`; ARNI; PARADIGM-HF; CI com IECAs (36h washout) |

#### Grupo 5 — Betabloqueadores Adicionais (4 fármacos)

| # | Fármaco | `requiresAdjustment` | Hemodiálise | Diferencial chave |
|---|---|---|---|---|
| 16 | Atenolol | `fg ≤ 35` | ~50% — dose pós-HD | **Único betabloqueador com threshold ≤35**; eliminação renal ~90% |
| 17 | Propranolol | `false` (CYP2D6 hepático) | Não removido | `bronchospasmRisk: true`; inibe T4→T3; profilaxia varizes (Baveno VII); `hepatotoxicityRisk: true` |
| 18 | Esmolol | `false` (esterases eritrocitárias) | Não removido | Meia-vida ~9 min; `infusionDrug: true`; **uso exclusivo hospitalar**; único IV ultracurto |
| 19 | Nadolol | `fg < 35` (intervalo estendido) | Parcialmente removido | Eliminação renal ~75%; `cirrhosisCaution: true`; `bronchospasmRisk: true`; Baveno VII varizes |

#### Diferenciais Clínicos Preservados no Schema

| Flag adicional | Fármaco(s) | Significado |
|---|---|---|
| `bronchospasmRisk: true` | propranolol, nadolol | Risco de broncoespasmo — contraindicado em asma grave |
| `cirrhosisCaution: true` | nadolol | Titular com extrema cautela em cirrose avançada (hipotensão, disfunção renal) |
| `infusionDrug: true` | esmolol | Uso exclusivo hospitalar — infusão EV contínua com monitorização cardíaca |
| `hepatotoxicityRisk: true` | propranolol | Metabolismo hepático relevante — ajuste em cirrose |

#### Tabela completa — `database/cardio.js` (42 fármacos, 15 grupos)

| # | Chave | Grupo | `requiresAdjustment` | HD |
|---|---|---|---|---|
| 1 | `metoprolol` | 1 | `false` (hepático) | ~25% pós-HD |
| 2 | `bisoprolol` | 1 | `fg < 20` | Não |
| 3 | `nebivolol` | 1 | `fg < 30` | Não |
| 4 | `enalapril` | 2 | `fg ≤ 50` | ~35–50% pós-HD |
| 5 | `lisinopril` | 2 | `fg < 30` | ~50% pós-HD |
| 6 | `ramipril` | 2 | `fg < 30` | Não dialisável |
| 7 | `losartana` | 3 | `fg < 30` | Não |
| 8 | `valsartana` | 3 | `fg < 30` | Não |
| 9 | `candesartana` | 3 | `fg < 30` | Não |
| 10 | `irbesartana` | 3B | `fg < 30` | Não |
| 11 | `telmisartana` | 3B | **`false`** (biliar ~98%) | Sem ajuste |
| 12 | `olmesartana` | 3B | `fg < 30` | Não |
| 13 | `eprosartana` | 4 | `fg < 30` | Não |
| 14 | `azilsartana` | 4 | `fg < 30` | Não |
| 15 | `sacubitrilValsartana` | 4 | `fg < 30` | Dados limitados |
| 16 | `atenolol` | 5 | **`fg ≤ 35`** | ~50% pós-HD |
| 17 | `propranolol` | 5 | **`false`** (hepático) | Não |
| 18 | `esmolol` | 5 | **`false`** (esterases) | Não |
| 19 | `nadolol` | 5 | **`fg < 35`** (intervalo) | Parcial pós-HD |
| 20 | `sotalol`    | 6 | **`fg < 40`** → 24h; **CI fg < 10** | Removido por HD |
| 21 | `labetalol`  | 7 | `false` (hepático) | Não removido |
| 22 | `ivabradina` | 7 | `false` (CYP3A4) | Não removido |
| 23 | `digoxina`       | 8  | **`fg < 60`** (ajuste); **`fg < 30`** (reduzir) | NÃO removida (alto Vd) |
| 24 | `furosemida`     | 9  | **`fg < 30`** (doses maiores) | Parcialmente removida |
| 25 | `bumetanida`     | 9  | **`fg < 30`** (doses maiores) | Parcialmente removida |
| 26 | `torsemida`      | 9B | **`fg < 30`** (doses maiores) | Parcialmente removida |
| 27 | `espironolactona`| 10 | **CI fg < 30** (`vo: null`) | Não dialisável |
| 28 | `eplerenona`     | 10 | **CI fg < 30** (`vo: null`) | Não dialisável |
| 29 | `amilorida`      | 10 | **CI fg < 30** (`vo: null`) | Não dialisável |
| 30 | `hidroclorotiazida` | 11  | **perde eficácia fg < 30** (`vo: null`)     | Não dialisável |
| 31 | `clortalidona`      | 11  | **perde eficácia fg < 30** (`vo: null`)     | Não dialisável |
| 32 | `indapamida`        | 11B | **perde eficácia fg < 30** (`vo: null`)     | Não dialisável |
| 33 | `metolazona`        | 11B | **mantém eficácia** em DRC (diferencial)    | Uso hospitalar especializado |
| 34 | `acetazolamida`     | 11C | **fg < 50** cautela; **fg < 30** evitar      | CONTRAINDICADA em HD |
| 35 | `manitol`           | 11C | **fg < 10 / anúria** → CI                   | CONTRAINDICADO em HD rotineiro |
| 36 | `amlodipina`        | 12  | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 37 | `nifedipina`        | 12  | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 38 | `felodipina`        | 12B | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 39 | `lercanidipina`     | 12B | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 40 | `manidipina`        | 12B | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 41 | `verapamil`         | 13  | **`false`** (hepático — sem ajuste renal)   | Não dialisável |
| 42 | `diltiazem`         | 13  | **`false`** (hepático — sem ajuste renal)   | Não dialisável |

#### Validação Playwright — Grupo 5

```
✅ PlaywrightConsoleCapture — 0 erros JavaScript
[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR
[MedCases] PRESCRICOES_DB carregado: 125 protocolos
[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh
```

---

## 🚧 Próximos Passos

### Alta Prioridade
- [ ] **PWA Manifest** (`manifest.json` + `service-worker.js`) — instalação offline total
- [ ] **Expandir availableFormulations** — cobrir 100% dos fármacos em `DRUG_DB` com dados comerciais reais do mercado brasileiro
- [ ] **Módulo Interações** — card "Em breve" → cruzamento real de fármacos por lista de meds ativa
- [ ] **Histórico de pacientes** — localStorage com até 10 perfis salvos
- [ ] **Módulo Pediatria** — DRUG_DB infantil com doses por kg para todas as especialidades
- [ ] **Histórico de pacientes** — localStorage com até 10 perfis salvos
- [ ] **Módulo Interações** — card "Em breve" → cruzamento real de fármacos por lista de meds ativa

### Média Prioridade
- [ ] **Expandir camada renal** — `psicofarmacos.js` e demais databases com `renalDose`
- [ ] **Scores adicionais** — APACHE II, Killip-Kimball, NIHSS, DAS28, PHQ-9, GAD-7
- [ ] **Export PDF** — `window.print()` + CSS `@media print` para resultado do paciente
- [ ] **Módulo Obstetrícia** — calculadoras de IG, DPP, partograma, Bishop
- [x] **Grupo 14 inserido** — Antiarrítmicos: adenosina (#43), amiodarona (#44), dronedarona (#45), dofetilida (#46) — ✅ Validado Playwright 0 erros
- [x] **Grupo 15 inserido** — Antiarrítmicos adicionais: ibutilida (#47), flecainida (#48), procainamida (#49) — ✅ Validado Playwright 0 erros
- [x] **Grupo 16 inserido** — Antiarrítmicos: disopiramida (#50), lidocaína (#51), mexiletina (#52) — ✅ Validado Playwright 0 erros
- [x] **Grupo 17 inserido** — Antiarrítmicos finais: propafenona (#53), quinidina (#54) — ✅ Validado Playwright 0 erros
- [ ] **Próximos lotes cardio.js** — Grupo 18: Vasodilatadores (hidralazina, nitroprussiato, nitroglicerina, minoxidil)

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

