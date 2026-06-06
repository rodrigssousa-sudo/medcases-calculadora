# 🏥 MedCases Pro

**PWA de Calculadoras Clínicas Bilíngues (PT/ES)**  
Calculadora médica avançada para profissionais de saúde — totalmente offline, mobile-first, sem backend.

---

## ✅ Task 8 — Módulo de Prescrições Guiadas Hospitalares

### Navegação 3-Botões
- Bottom nav expandido: `nav-home` · `nav-calculators` · `nav-prescriptions`
- `navigate('prescriptions')` chama `renderPrescriptions('')` automático

### `PRESCRIPTION_DB[]` — 10 Protocolos Bilíngues PT/ES
| Especialidade | Protocolos |
|---|---|
| 🚨 Emergência | Sepse Bundle 1h, Anafilaxia, PCR-ACLS |
| 🫀 Cardiologia | SCA c/ Supra-ST, IC Aguda |
| 🦠 Infectologia | PAC/Pneumonia, ITU Complicada |
| 🟡 Gastro | Hemorragia Digestiva Alta, Pancreatite Aguda |
| 💨 Pneumo | Asma Aguda |
| 🧠 Neurologia | AVC Isquêmico < 4,5h |

### Sistema de Renderização
- `renderPrescriptions(filter)` — agrupa por especialidade, filtra por título+tags+preview
- `filterPrescriptions(v)` — chamada pelo `oninput` da barra de busca `#search-prescriptions`
- Cada card exibe: título com ícone, tags coloridas por especialidade, preview truncado, 2 botões

### Clipboard & Modal
- `copyPrescription(id)` → `navigator.clipboard.writeText()` com fallback `execCommand`
- Toast `#rx-copied-toast` com animação spring após cópia bem-sucedida
- `openRxModal(id)` → bottom-sheet animado com texto completo em `<pre>` + botão copiar
- `closeRxModal()` — fecha com transição `translateY(100%)` + overlay fade

### CSS Design Tokens por Especialidade
6 classes `.rx-emerg/.rx-cardio/.rx-infecto/.rx-gastro/.rx-pneumo/.rx-neuro` com:
- `::before` lateral colorida no card
- Cores de `.rx-tag.type-tag` e `.rx-btn-copy` consistentes
- Separadores `.rx-specialty-sep` com ícone + label colorido

### i18n Completo
- 12 novas chaves PT+ES: `nav_prescriptions`, `rx_title`, `rx_subtitle`, `rx_search_ph`, `rx_btn_copy`, `rx_btn_expand`, `rx_copied`, `rx_empty`, `rx_disclaimer`, `rx_sp_*` (6 especialidades)
- `applyTranslations()` atualiza placeholder do search + re-renderiza lista ao trocar PT↔ES

---

## ✅ Task 7 — Rodada Final de UX/Mobile (7 Fixes Críticos de WebView)

### Fix 1 — Pop-up Modal Sob Demanda (jamais automático)
- `_checkRenalAlert()` removida do fluxo automático de `recalculate()`
- Criado `_updateDiagnosticoBtn(tfg)` que exibe/oculta e colore o botão `#btn-diagnostico`
- `openDiagnosticoModal()` chamado **apenas** pelo clique do botão — nunca durante digitação
- Botão pulsa com animação `pulse-diag` em vermelho (G4/G5) ou âmbar (G3b)

### Fix 2 — Scroll automático para inputs no teclado virtual (WebView)
- `focus` listener em todos os `.input-field` e `.drug-search`: `scrollIntoView({behavior:'smooth',block:'center'})`
- `paddingBottom` do `#scroll-content` sobe para `40vh` ao focar → cai para `90px` ao desfocar
- `MutationObserver` aplica o mesmo listener em inputs adicionados dinamicamente

### Fix 3 — Cards slim/horizontais
- `.calc-hub-grid` → `flex-direction:column` (1 coluna)
- `.calc-hub-card` → `flex-direction:row`, `padding:12px`, `border-radius:14px` (retângulo horizontal)
- `.adult-cmd-card` → `padding:14px`, `min-height:0`, ícones de 40px

### Fix 4 — Card Paciente dinâmico por sexo
- Masculino → `.patient-banner-m` (azul `#0F2530`, borda `rgba(66,168,212,0.32)`)
- Feminino → `.patient-banner-f` (rosa `#2A0F22`, borda `rgba(232,112,180,0.32)`)
- ClCr exibido sem truncamento com método (Cockcroft-Gault / Urina 24h) em linha separada
- BSA e IMC adicionados ao banner

### Fix 5 — Botão Voltar global
- Sub-views `drugs/fluids/hemo/scores` → `backToCalculators()` (fecha painel + navega à Central)
- Seções legadas `page-ped/ob/infusion/atb/elec` → header com botão `navigate('calculators')`

### Fix 6 — Tela de fármacos: só busca
- `renderDrugList('')` retorna tela vazia com prompt (sem cards iniciais)
- Ao digitar: lista vertical `.drug-list-row` (1 coluna, `border-radius:10px`, `padding:9px`)
- Filtro ampliado: nome + classe + categoria

### Fix 7 — i18n 100% síncrono
- `applyTranslations()` re-renderiza lista de fármacos, botão diagnóstico e banner do paciente
- `setLang()` chama `_updateDiagnosticoBtn` para texto do botão mudar em tempo real

---

## ✅ Task 6 — Concluída (Navegação 2-Botões + Central de Calculadoras + Slim Cards + i18n)

### Navegação Inferior Reestruturada
- **2 botões mestres**: `nav-home` (Início) e `nav-calculators` (Calculadoras) — substituem os 7 botões antigos
- Touch targets maiores (14px border-radius, padding confortável) com active state verde `rgba(34,200,122,0.10)`
- `navigate()` atualizado: mapeia `adult/ped/ob/infusion/atb/elec` → `nav-calculators` ativo

### Central de Calculadoras (`#page-calculators`)
- Grid 2×3 premium com 6 módulos coloridos: Adulto, Pediatria, Gestante, Infusão, Antimicrobianos, Eletrólitos
- Cada card: `.calc-hub-card` com ícone, título `data-i18n`, descrição `data-i18n` e seta de acesso
- Antimicrobianos → navega para `adult` + chama `showAdultPanel('drugs')` automaticamente

### Cards de Resultado Slim
- Layout slim horizontal: `rd-label` (topo) + `rd-row-main` (valor + unidade inline) + `rd-badge-row` (badge de estágio)
- Sem barra de IMC visual (removida do HTML; `imc-thumb` mantido oculto para compat. com renderResults)
- Padding reduzido de 14px → 9px; border-top colorida fina (2.5px) por métrica

### Motor de Tradução PT↔ES Corrigido
- `renderResults()` persiste payload em `window._lastResults`
- `setLang()` chama `renderResults(window._lastResults)` quando há dados calculados → labels, unidades e classificações mudam em tempo real sem F5
- Todos os textos dos cards e da Central via `data-i18n`

---

## ✅ Funcionalidades Implementadas

### 🏠 Aba Início — Dados do Paciente
- Cálculo de **BSA** (Mosteller), **IMC**, **Peso Ideal** e **ClCr** (Cockcroft-Gault + Real 24h)
- **TFG** com estadiamento **CKD G1–G5** em badge colorido
- **Motor ClCr bilíngue** com textos PT/ES automáticos
- **Modal de alerta crítico global** por grau de risco renal (CKD G3b, G4, G5)
- Barra visual de IMC com ponteiro dinâmico
- Chips de resumo rápido (BSA, ClCr, IMC, TFG)
- Acordeão de fórmulas com LaTeX visual

### 💊 Aba Adulto — Dashboard Grid 2×2 (Nova Arquitetura)

#### Painel de Controle (`.adult-dashboard-grid`)
- **4 Cards de Ação Rápida** em grid CSS 2×2 — visual nativo iOS/Android premium
- **Card 1 — Fármacos** (`.card-btn-drugs`): verde esmeralda, ícone `fa-pills`
- **Card 2 — Fluidos** (`.card-btn-fluids`): azul ciano, ícone `fa-droplet`
- **Card 3 — Hemodinâmica** (`.card-btn-hemo`): vermelho alerta, ícone `fa-heart-pulse`
- **Card 4 — Scores** (`.card-btn-scores`): roxo/info, ícone `fa-chart-bar`
- Ao clicar: grid colapsa para **barra compacta horizontal** (`.compact-grid` com 4 colunas) e abre a sub-view correspondente abaixo
- Card ativo recebe `.active-panel` com borda colorida reforçada; inativos ficam 50% opacidade
- Botão **← Voltar** em cada sub-view chama `closeAdultPanel()` e restaura o grid expandido
- `showAdultPanel(panel)` / `closeAdultPanel()` — funções JS com `_activeAdultPanel` para controle de estado
- `showSubTab(tab)` mantido como **alias legado** → `showAdultPanel(tab)` (compatibilidade total)
- Responsividade: `max-width:360px` → compact-grid vira 2 colunas; `min-width:500px` → cards maiores

#### Sub-view: Fármacos (`#subview-drugs`) — UI 4-Block
- **Guard Card** `.drug-await-patient` — bloqueia e orienta se dados do paciente ausentes
- **🟢 Bloco 1 — Painel de Dose** (`.dose-panel`): dose em 26px bold + frequência em verde + chips de via/duração + tag contextual com peso/ClCr/idade
- **📊 Bloco 2 — Tabela Renal Dinâmica** (`.renal-panel` + `.renal-adj-table`): destaque automático da linha `.current-renal-tier` baseado no ClCr real do paciente; suporte a `drug.renalTable` customizado por fármaco
- **⚠️ Bloco 3 — Safety Alert Box** (`.safety-alert-box`): lista bilíngue de alertas de toxicidade, diluição e riscos clínicos com ícones contextuais (`warn`, `info`, `ok`, `danger`)
- **🔴 Bloco 4 — Interações Críticas** (`.interactions-alert-box`): grid split em 🔴 Críticas/Contraindicadas e 🟡 Graves/Monitorar; exibe `.interactions-empty` quando sem interações registradas
- **Touch targets** mínimo 44–52px; sem scroll horizontal em mobile

#### Sub-view: Hemodinâmica (`#subview-hemo`)
- Cálculo de **PAM** e **Pressão de Pulso**
- **NEWS2 Rápido** com score numérico e classificação colorida
- Alertas bilíngues para: choque, taquicardia, hipoxemia, febre

#### Sub-view: Fluidos (`#subview-fluids`)
- **Holliday-Segar** — manutenção hídrica diária + gotejamento (gts/min)
- **Ressuscitação** — 30 mL/kg em 30 min com taxa de infusão calculada
- **Déficit hídrico** — por grau de desidratação com protocolo sugerido
- Todos os textos bilíngues via `isES` flag

### 🧮 Aba Scores
- **SOFA**, **qSOFA**, **Wells TEP**, **Wells TVP**, **CURB-65**, **Glasgow**, **Rankin**
- Motor de seleção único/múltiplo, cálculo automático e interpretação por faixas
- Resultado com badge de gravidade colorido

### 🔬 Aba Pediatria
- Peso estimado por idade (Fórmulas Bestbriar/Nelson)
- Dose pediátrica de antipiréticos
- Dose de atropina e adrenalina para PCR pediátrico

### 🌐 Bilinguismo PT/ES
- Troca instantânea sem reload via `currentLang` global
- Função `t(key)` com dicionário embutido
- `applyTranslations()` percorre `data-i18n` do DOM
- `applySelectTranslations()` atualiza options de `<select>`
- Todos os motores de cálculo aceitam `lang` como parâmetro

---

## 📁 Estrutura de Arquivos

```
index.html               ← App principal (SPA)
database/
  antimicrobianos.js     ← window.ANTIMICROBIANOS_DRUGS_DB
  cardio.js              ← window.CARDIO_DRUGS_DB
  analgesicos.js         ← window.ANALGESICOS_DRUGS_DB
  endocrino.js           ← window.ENDOCRINO_DRUGS_DB
  gastro.js              ← window.GASTRO_DRUGS_DB
  anticoag.js            ← window.ANTICOAG_DRUGS_DB
README.md
```

---

## 🗄️ Arquitetura de Dados de Fármacos

### `DRUG_DB` — Array global vazio em `index.html`
Populado no `DOMContentLoaded` pelos módulos externos:
```js
if (window.ANTIMICROBIANOS_DRUGS_DB) DRUG_DB.push(...window.ANTIMICROBIANOS_DRUGS_DB);
if (window.CARDIO_DRUGS_DB)          DRUG_DB.push(...window.CARDIO_DRUGS_DB);
// ... etc
```

### Formato de cada entrada no módulo:
```js
{
  id:       'amox',                        // String único
  name:     'Amoxicilina',
  class:    'Antibiótico β-lactâmico',
  category: { pt: 'Antimicrobianos', es: 'Antimicrobianos' }, // bilíngue
  color:    'rgba(34,200,122,0.15)',        // bg do ícone
  colorTxt: '#22C87A',                     // cor do ícone
  icon:     '💊',
  dose(patientData, lang = 'pt') {
    // → { dose, freq, via, adj, duration, note }
    // adj com '⚠️' para alertas graves
  }
}
```

### `patientData` disponível:
```js
{ age, sex, weight, height, creatinine, bsa, clcr, imc, pesoIdeal, tfg }
```

---

## 🌐 Cobertura i18n — Chaves Implementadas

| Grupo | Chaves PT/ES |
|---|---|
| UI geral | `topbar_subtitle`, `badge_premium`, `welcome_title`, `welcome_desc`, `label_patient`, `label_age`, `label_sex`, `label_weight`, `label_height`, `label_creatinine`, `btn_clear`, `btn_calc`, `label_results`, `results_title`, `status_waiting`, `status_ready`, `label_classification`, `label_ideal_weight`, `label_ckd_stage`, `btn_formulas`, `disclaimer` |
| IMC | `imc_under`, `imc_normal`, `imc_over`, `imc_ob1`, `imc_ob2`, `imc_ob3` |
| CKD | `ckd_g1`–`ckd_g5` |
| Fármacos | `drug_not_found`, `drug_no_patient`, `drug_based_on`, `txt_age_years`, `txt_masc`, `txt_fem`, `label_dose`, `label_freq`, `label_via`, `label_duration`, `label_obs` |
| Tabela renal | `label_renal_adj_title`, `th_renal_func`, `th_clcr`, `th_adj`, `td_dose_std`, `td_monitor`, `td_dose_low`, `td_dose_vlow`, `renal_table_warn` |
| Banner adulto | `banner_patient_name`, `banner_anos`, `banner_edit` |
| Select fluidos | `fluid_opt_maint`, `fluid_opt_resus`, `fluid_opt_deficit`, `fluid_dehy_leve`, `fluid_dehy_mod`, `fluid_dehy_grave` |
| Toast / misc | `toast_cleared`, `no_patient` |

## 🚧 Funcionalidades Não Implementadas / Próximos Passos

- [ ] **Módulos database/** — expandir com mais fármacos por especialidade
- [ ] **Sub-tab Pediátrico de fármacos** com DRUG_DB infantil separado
- [ ] **Scores adicionais**: APACHE II, Killip, NIHSS, DAS28
- [ ] **Export/Share** de resultado em PDF via `window.print()`
- [ ] **Histórico de pacientes** com localStorage
- [ ] **Manifesto PWA** (`manifest.json` + service worker) para instalação offline

---

## ⚙️ Como Adicionar Fármacos

1. Abrir (ou criar) o arquivo correspondente em `/database/`
2. Adicionar entrada no array seguindo o formato acima
3. O app detecta automaticamente no próximo `DOMContentLoaded`

---

## 🛠️ Tecnologias

- HTML5 / CSS3 / JavaScript ES2022 (sem framework)
- Google Fonts (Inter)
- Font Awesome 6 Free (CDN)
- Sem backend, sem banco de dados externo

---

*Última atualização: Parte 6B + i18n completo — 100% bilíngue PT/ES, `applySelectTranslations()` implementada, banner do paciente bilíngue, re-render automático na troca de idioma.*
