# MedCases Pro

Aplicativo web de referência clínica para prescrição, cálculo de doses, scores
de gravidade, eletrólitos, fluidoterapia e função renal — voltado a
médicos/estudantes de medicina, em PT-BR e ES.

**Versão atual: BUILD 273 — UX Polish (Refatoração Nativa)**

## ⚙️ BUILD 273 — UX POLISH (Refatoração Nativa)

Continuação direta do BUILD 272: elimina a dívida técnica documentada nas
"Pendências conhecidas" daquela build, abandonando de vez o HTML/CSS legado
e as pontes de compatibilidade em favor do markup nativo do Universal Design
System.

### ✅ Missão 1 — HTML Nativo para Scores
- `renderScoreCalc()` (`index.html`) reescrita para gerar nativamente
  `.univ-toggle-btn` / `.is-active` (checkboxes/radios de HAS-BLED, SOFA,
  Wells, CURB-65, CHA₂DS₂-VASc, Child-Pugh, TIMI, NEWS2) e o novo stepper
  `.univ-stepper`/`.univ-stepper-btn` (Glasgow), substituindo por completo
  `.score-row`, `.score-check` e `.stepper-btn`.
- O box de resultado agora é um `.univ-result-card is-visible` real, com
  `.univ-result-card-inner` → `.univ-result-header` (ícone + nome do score) →
  `.univ-result-number` (pontuação) → `.univ-result-sub` (interpretação,
  ainda usando os badges `.severity-*`) → `.univ-result-conduct` (nota +
  conduta), tematizado via `--theme-accent`/`--theme-bg` herdado de
  `.theme-scores`/`.theme-hemo`/`.theme-renal` no `#subview-scores` pai.
- `scoreChange()` e `stepperChange()` atualizados para operar sobre o novo
  markup (`.closest('.univ-toggle-btn')`, `#sv-desc-{key}-{stepKey}`) —
  preservando 100% da reatividade "Atrito Zero" do BUILD 272.
- `updateScoreResult()` reescrita para regenerar apenas o
  `.univ-result-card-inner` dentro do `.univ-result-card` já existente.
- CSS legado removido de `index.html` (`.score-section`, `.score-group-title`,
  `.score-row*`, `.score-check*`, `.stepper*`, `.score-result-box*`,
  `.score-sub-note`, `.score-action-tip*` + overrides de `light-mode`).
  Mantidos apenas os badges `.severity-low/mid/high/purple/info`, reutilizados
  dentro de `.univ-result-sub`.
- Novo CSS nativo adicionado a `css/build272-universal-design-system.css`
  (§3b): `.univ-score-section`, `.univ-score-group-title`,
  `.univ-toggle-btn--stepper`, `.univ-stepper`/`.univ-stepper-btn`/
  `.univ-stepper-val`.

### ✅ Missão 2 — Card Universal em Eletrólitos
- `ElecUI.renderResultContent()` (`js/elec-calc.js`) reescrita para ejetar
  `.univ-result-card is-visible` → `.univ-result-card-inner` com:
  - `.univ-result-header` — ícone + nome do eletrólito selecionado;
  - `.univ-result-number` — valor sérico digitado + unidade (mEq/L, mg/dL...);
  - `.univ-result-sub` — interpretação clínica (linha de destaque);
  - `.univ-result-conduct` — bloco com o pipeline clínico completo (Estado +
    Opções terapêuticas 1-3 + Alertas + Recontrole), reaproveitando
    `ElecRender._bloco/_opCard/_estadoBloco` sem alterar a lógica clínica —
    apenas a casca visual externa mudou.
  - Ações "Copiar/Limpar" preservadas dentro do card.
- Tematização `.theme-eletro` (azul/roxo, `--theme-accent:#A78BFA`) herdada
  automaticamente de `#hub-card-eletrolitos`, já aplicada desde o BUILD 272 —
  nenhuma alteração adicional necessária no HTML.
- Arquitetura **"Input Estável e Não-Destrutivo"** (BUILD 242) 100%
  preservada: a nova função só é chamada por `_updateResult()`, que continua
  tocando exclusivamente `#elec2-result-area` — os inputs (`ZONA A`) nunca são
  re-renderizados.

### 🚀 Validação
- `PlaywrightConsoleCapture` executado após as duas migrações: **zero erros
  de console**, todos os módulos carregam normalmente (`[BUILD 272] Reactive
  Engine ativo`, `DRUG_DB populado: 406 fármacos`, Hub Accordion, etc.) — a
  reatividade dos scores e da calculadora de eletrólitos não foi quebrada
  pela migração de markup.

### 📄 Arquivos alterados nesta build
- **Alterado:** `index.html` — `renderScoreCalc()`, `scoreChange()`,
  `stepperChange()`, `updateScoreResult()` migradas para markup nativo; bloco
  de CSS legado de scores removido.
- **Alterado:** `css/build272-universal-design-system.css` — nova seção §3b
  com `.univ-score-section`/`.univ-stepper*`.
- **Alterado:** `js/elec-calc.js` — `ElecUI.renderResultContent()` reescrita
  para `.univ-result-card`.

### ⚠️ Pendências resolvidas do BUILD 272
- ~~Item 1 (HAS-BLED/SOFA/Glasgow/Wells/etc. com markup legado)~~ → **resolvido**
  nesta build (Missão 1).
- ~~Item 2 (result-box de Eletrólitos sem `.univ-result-card`)~~ → **resolvido**
  nesta build (Missão 2).
- Itens 3 e 4 do BUILD 272 (teste de `MutationObserver` em sessão longa e
  validação visual em telas <380px/light-mode) seguem como próximos passos
  recomendados.

## ⚙️ BUILD 272 — UX/UI Overhaul (Universal Design System & Reactive Engine)

**Regra de Ouro:** *Cálculo em Tempo Real (Atrito Zero) + Tematização Contextual.*

### ✅ Entregue nesta build

**PILAR 1 — Universal Design System (CSS)**
Novo arquivo `css/build272-universal-design-system.css` (carregado por último no
`<head>`, depois de `build254-critical-fixes.css`), contendo:
- `--theme-accent` / `--theme-bg` (+ `--theme-accent-rgb`) com 5 temas prontos:
  `.theme-renal` (verde), `.theme-hemo` (rosa/vermelho), `.theme-eletro`
  (azul/roxo), `.theme-fluidos` (ciano), `.theme-scores` (âmbar). Basta aplicar
  a classe no card/section pai para toda a árvore (inputs, toggles, result-card)
  herdar a cor do módulo.
- `.univ-input-group` / `.univ-input` / `.univ-input-unit` — input com unidade
  fixa à direita e outline de foco tematizado.
- `.univ-toggle-btn` (+ `.is-active`) — padrão para toggles de score "+1pt".
- `.univ-result-card` / `.univ-result-card-inner` / `.univ-result-header` /
  `.univ-result-number` / `.univ-result-sub` / `.univ-result-conduct` — card de
  resultado único (cabeçalho sutil + número gigante + bloco de Conduta/Diretriz),
  com estado oculto por padrão (`max-height:0;opacity:0`) e classe `.is-visible`
  para o fade-in.
- Pontes de compatibilidade: `.score-row.selected`, `.score-check:checked`,
  `.score-result-box.theme-*` e o foco de `.hm-input`/`.input-field` agora
  herdam `--theme-accent` sem precisar reescrever o HTML legado.
- `#fluid-result` e `.score-result-box` ganham fade-in automático
  (`@keyframes univFadeIn`) assim que o JS injeta o resultado.

**PILAR 2 — Reactive Engine (JS)**
Novo arquivo `js/build272-reactive-engine.js` (carregado após
`deeplink-router.js`):
- Remove o botão **"Calcular Fluidos"** (`index.html`, sub-view Fluidoterapia) —
  `#fluid-type`, `#fluid-dehy`, `#fluid-temp` e o toggle de taquipneia agora
  chamam `calcFluids()` instantaneamente via `input`/`change` (com patch
  não-destrutivo de `fluidToggleTaqui()`).
- Remove o botão **"Recalcular"** dos Scores (HAS-BLED/SOFA/Glasgow/CURB-65/
  Child-Pugh/etc. — `renderScoreCalc()` em `index.html`) — os toggles/steppers
  já disparavam `updateScoreResult()`/`scoreChange()`/`stepperChange()` via
  `onchange`/`onclick`; o botão era redundante e foi eliminado.
- Fecha o gap de reatividade identificado nos campos **Peso/Idade/Altura/
  Creatinina** (`#hm-weight`, `#hm-age`, `#hm-height`, `#hm-creatinina`), que
  antes só chamavam `hmUpdatePatientCardColor()` (cosmético). Agora, a cada
  `input`/`change`, o motor:
  1. chama `window.hmCalcCockcroft()` (Cockcroft-Gault / Ur24h);
  2. atualiza `window.patientData` e as pills via `window._hmUpdatePills()`
     (função existente, agora exposta em `window`);
  3. sincroniza o Live Dashboard do Pilar 3.
- Usa `MutationObserver` para re-conectar os listeners sempre que o
  Hub Accordion faz lazy-mount dos cards (Dados do Paciente / Fluidoterapia
  só existem no DOM após o primeiro `hubToggle`).

**PILAR 3 — Live Dashboard ClCr (fim da fricção "abrir modal")**
- HTML: `index.html`, card `#hub-card-clcr` — adicionado bloco
  `.clcr-live-dashboard` com grid 2×2 (`ClCr · IMC · Peso Ideal · BSA`),
  **sempre visível mesmo com o card colapsado** (fica entre o trigger e o
  `.hub-card-body`, fora da lógica de accordion).
- Cada quadrante mostra `---` (`.is-empty`) quando não há dado e o valor
  formatado assim que `window.patientData` é preenchido — sem precisar clicar
  em "Calcular/Fixar" nem abrir "Dados do Paciente".
- `js/build272-reactive-engine.js` expõe `window._clcrLiveDashboardSync()`,
  chamada: (a) a cada tick reativo dos inputs de paciente, (b) via patch de
  `hmClearPatient()`, e (c) na inicialização/MutationObserver.
- O botão "Abrir Dados do Paciente" dentro do card expandido **foi mantido**
  como atalho de edição (não é mais a única forma de ver os valores — o
  dashboard 2×2 já os expõe permanentemente); a categoria renal/conduta
  detalhada continua sendo renderizada por `_syncClcrResult()`
  (`js/hub-accordion.js`) apenas quando o card é expandido, sem bloquear a
  visibilidade dos números no estado colapsado.
- Tematização: `#hub-card-clcr` recebeu `.theme-renal`; `#hub-card-eletrolitos`
  → `.theme-eletro`; `#hub-card-fluidos`/`#subview-fluids` → `.theme-fluidos`;
  `#hub-card-hemodinamica` → `.theme-hemo`; `#hub-card-scores`/`#subview-scores`
  → `.theme-scores`.

### 📄 Arquivos novos/alterados nesta build
- **Novo:** `css/build272-universal-design-system.css`
- **Novo:** `js/build272-reactive-engine.js`
- **Alterado:** `index.html`
  - `<link>` do novo CSS adicionado ao final do `<head>`.
  - `<script defer>` do novo JS adicionado após `js/deeplink-router.js`.
  - Card `#hub-card-clcr`: novo bloco `.clcr-live-dashboard` (grid 2×2) +
    classe `.theme-renal`.
  - Classes `.theme-eletro`, `.theme-fluidos`, `.theme-hemo`, `.theme-scores`
    aplicadas aos cards/sub-views correspondentes.
  - Botão "Calcular Fluidos" removido de `#subview-fluids`.
  - Botão "Recalcular" removido de `renderScoreCalc()` (scores clínicos).
  - `_hmComputeDerived` e `_hmUpdatePills` expostos em `window.*` para reuso
    pelo Reactive Engine.

### ⚠️ Pendências conhecidas / próximos passos recomendados
1. **HAS-BLED/SOFA/Glasgow/Wells/etc.** ainda usam o markup `.score-row` /
   `.score-check` / `.stepper-btn` original (agora tematizado via ponte CSS no
   Pilar 1), em vez de serem migrados 1:1 para o markup `.univ-toggle-btn`.
   Uma migração completa exigiria reescrever `renderScoreCalc()` para gerar
   `.univ-toggle-btn` diretamente — recomendado como próxima iteração, módulo
   a módulo, para não quebrar `scoreChange()`/`stepperChange()`.
2. **Calculadora de Eletrólitos** (`js/elec-calc.js`) é 100% button-driven por
   design (`ElecCalc.selectElectrolyte/setState/setField`) e já não possui um
   botão "Calcular" explícito — os campos usam `oninput`/`onblur` próprios.
   Não foi necessária alteração aqui para o Pilar 2, mas o result-box dessa
   calculadora ainda não foi migrado visualmente para `.univ-result-card`
   (ficou fora do escopo desta rodada por não ter sido localizado um botão a
   remover).
3. Testar em dispositivo real/emulador o comportamento do
   `MutationObserver` do Reactive Engine em sessões longas (garantir que não
   há vazamento de listeners duplicados — já mitigado via
   `dataset.univReactive`).
4. Validar visualmente (Playwright/manual) o Live Dashboard 2×2 em telas
   muito pequenas (<380px) e em `light-mode`.

## Stack técnica
- HTML5 + CSS3 + JavaScript vanilla (sem framework/bundler).
- Fonte: Inter (Google Fonts). Ícones: Font Awesome 6 (CDN jsDelivr).
- PWA com Service Worker (`sw.js`) para uso offline.
- Sem backend — todos os dados de paciente ficam em `localStorage`
  (`medcases_hm_patient_v1`) e nunca saem do dispositivo.

## Estrutura de dados (client-side)
- `window.patientData` — estado global do paciente (peso, idade, altura, ClCr,
  creatinina, IMC, peso ideal, BSA, sexo, gestante).
- `window.DRUG_DB` — array mestre de fármacos, populado em runtime por
  `database/*.js`.
- `SCORES` (objeto em `index.html`) — definição de todos os scores clínicos.
- `FORMULATIONS_DB` / `ELECTROLYTES` (`js/elec-calc.js`) — banco de eletrólitos
  e formulações comerciais.

## Deploy
Para publicar o site, use a aba **Publish** da plataforma — ela cuida de todo
o processo de deploy e fornece a URL pública.
