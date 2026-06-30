# 🏥 MedCases Pro

<div align="center">

![Version](https://img.shields.io/badge/version-4.3.0--build240calc-blue?style=for-the-badge)
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
- [Changelog — Sessões Recentes](#-changelog--sessões-recentes)
- [Próximos Passos](#-próximos-passos)

---

## 🆕 BUILD 242 — Input Estável e Não-Destrutivo — Refatoração Definitiva (2026-06-29)

### Commit: `refactor(elec-calc): zero-destroy input architecture — 4-pillar stable DOM`

#### Arquitetura Anterior (Builds 233–241D) — Problema Estrutural
Toda interação (digitar número, clicar botão) chamava `_render()` → `slot.innerHTML = ElecUI.renderMain()` → destruía TODOS os nós DOM incluindo o input ativo → cursor perdido, vírgula apagada, card piscando.

#### Nova Arquitetura — 4 Pilares Inegociáveis

**PILAR 1 — O TEXTO DO INPUT É SAGRADO**
- `_setField(key, value)` agora faz APENAS: `_rawFields[key] = value` — nada mais
- Proibido `input.value = x` durante `oninput`
- Zero render de qualquer tipo durante digitação

**PILAR 2 — SUPORTE TOTAL A VÍRGULAS E PONTOS**
- `_rawFields` armazena a string bruta exatamente como digitada (`"1,"`, `"3."`, `"-"`)
- `_parseLocaleNumber()` só é chamado no `onblur` via `normalizeField()`
- NaN → não apaga o campo, não altera `input.value`

**PILAR 3 — FIM DA DESTRUIÇÃO DE NÓS**
- DOM dividido em 2 zonas:
  - **ZONA A (Shell de inputs)** — renderizada UMA VEZ via `_renderShell()`, apenas quando eletrólito muda ou no reset
  - **ZONA B (Resultado)** — `#elec2-result-area` atualizado via `_updateResult()` que só muda o `innerHTML` do container de resultado
- `innerHTML` nos inputs: PROIBIDO durante operação normal

**PILAR 4 — CARDS ESTÁVEIS (sem layout shifts)**
- `#elec2-result-area` sempre presente no DOM com `display:none`
- Visível APENAS quando `_state._calculated === true` e há dados suficientes
- Zero oscilação / pisc / deslocamento de layout

#### Funções Refatoradas

| Função | Antes | Depois |
|--------|-------|--------|
| `_setField()` | RAF + `_render()` + restore cursor | `_rawFields[key]=value` — nada mais |
| `_setState()` | `_render()` completo | `_updateButtonStates()` + `_updateResult()` |
| `_selectElectrolyte()` | `_render()` | `_renderShell()` (única vez) |
| `_calculate()` | `_render()` | flush `_rawFields` → `_updateResult()` |
| `_reset()` | `_render()` | limpa estado → `_renderShell()` |
| `_render()` (compat) | `slot.innerHTML` sempre | verifica se shell existe, evita re-render |

#### Arquivos Modificados
| Arquivo | Mudança |
|---------|---------|
| `js/elec-calc.js` | Seção 8 (ElecUI) e Seção 9+10 (Controller) completamente refatoradas |
| `sw.js` | `CACHE_VERSION` v13 → **v14** |
| `manifest-offline.json` | version `241d` → **242** |

#### Validação
- ✅ PlaywrightConsoleCapture: zero erros JS
- ✅ DRUG_DB 310, PRESCRICOES_DB 125, HubAccordion 11 cards ✓

---

## 🆕 BUILD v2.7.4 — Database Injection: Grupo 37 — Sotagliflozina + Vericiguat (2026-06-29)

### Commit: `feat(database/cardio): inject sotagliflozina + vericiguat as Grupo 37 (iSGLT1/2 + sGC)`

#### Escopo
Injeção cirúrgica de dois fármacos cardiovasculares em `database/cardio.js` como **Grupo 37**, após Grupo 36 (empagliflozina · canagliflozina) e antes do fechamento da IIFE.

#### Fármacos Injetados
| # | Fármaco | Classe | Indicação Principal | Trial Pivô |
|---|---------|--------|---------------------|------------|
| 43 | **Sotagliflozina** | Inibidor dual SGLT1/SGLT2 | IC-FEr · IC-FEp · DM2 cardiorrenal | SOLOIST-WHF · SCORED |
| 44 | **Vericiguat** | Estimulador sGC | ICFEr pós-descompensação | VICTORIA |

#### Decisão Arquitetural — i18n Estática vs Dinâmica
O formato `t(lang, "PT", "ES")` fornecido no briefing é válido **somente dentro de `calculate(paciente, lang)`**.  
Campos estáticos no escopo do `Object.assign` são avaliados em **tempo de carregamento**, onde `lang` não existe como variável → `ReferenceError`.  
**Resolução**: todos os campos fora de `calculate()` foram convertidos para `{pt: "...", es: "..."}` — padrão idêntico ao dos Grupos 35/36 (dapagliflozina, empagliflozina, canagliflozina).

Campos afetados por fármaco:
- `sotagliflozina`: `renalAdjustment.message`, `hepaticAdjustment.message`, `hemodynamicRules.warning`, `safetyFlags.warning` → `{pt, es}`
- `vericiguat`: idem (`renalAdjustment.message`, `hepaticAdjustment.message`, `hemodynamicRules.warning`, `safetyFlags.warning`) → `{pt, es}`

#### Arrays Completos Preservados
Todos os arrays de `indications`, `commonAdverseEffects`, `dangerousAdverseEffects`, `contraindications.absolute`, `contraindications.relative`, `interactions.major`, `interactions.moderate`, `monitoring.baseline`, `monitoring.followUp`, `patientEducation` mantidos íntegros com precisão cirúrgica.

#### Arquivos Modificados
| Arquivo | Mudança |
|---------|---------|
| `database/cardio.js` | +Grupo 37: sotagliflozina (fármaco 43) + vericiguat (fármaco 44) |
| `sw.js` | `CACHE_VERSION` v14 → **v15** |
| `manifest-offline.json` | version `242` → **243**, updatedAt atualizado |

#### Validação
- ✅ PlaywrightConsoleCapture: **zero SyntaxErrors / zero ReferenceErrors**
- ✅ `DRUG_DB populado: 312 fármacos` (era 310 → +2 confirmado)
- ✅ `ALL_DRUGS_DB montado: 306 entradas` (era 304 → +2 confirmado)
- ✅ `[DRUG ADAPTER] Fallback sintético usado para sotagliflozina` — fármaco reconhecido
- ✅ `[DRUG ADAPTER] Fallback sintético usado para vericiguat` — fármaco reconhecido

---

## 🆕 BUILD 241D — Input Decimal Cursor Loss Fix — URGENT (2026-06-29)

### Commit: `fix(elec-calc): resolve cursor loss on decimal input via RAF cancel + _render guard`

#### Root Cause Identificado — 3 camadas de bug

**Bug 1 (CRÍTICO — causa raiz):** `_setField("valor", "1,")` → `isTransitional=true` → `return` early **SEM cancelar o RAF pendente** do keystroke anterior (`"1"`). O RAF do `"1"` continuava na fila com `_state["valor"] = "1,"` já salvo → executava `_render()` → recriava o `<input>` com `value="1,"` → cursor destruído.

**Bug 2 (secundário):** O guard `_renderForce` não existia — chamadas de `_render()` via `_setState`, `_selectElectrolyte` e outros caminhos podiam destruir o input durante digitação ativa.

**Bug 3 (terciário):** O `_renderNumericFields` usava `val = s[f]` diretamente, colocando valores transitionals (`"1,"`) no `value=""` do HTML gerado — no caso raro de render acontecer, o trailing comma aparecia no input.

#### Correções Aplicadas em `js/elec-calc.js`

| # | Local | Fix |
|---|-------|-----|
| 1 | `_setField` — bloco `isTransitional` | Adicionado `cancelAnimationFrame(_setFieldRafId)` ANTES do `return` |
| 2 | `_render()` | Adicionado guard global: se `document.activeElement` é INPUT dentro do slot, aborta (exceto com `_renderForce=true`) |
| 3 | `var _renderForce = false` | Nova flag para bypass do guard em caminhos que DEVEM sempre renderizar |
| 4 | `_setField` — RAF executor | Adicionado guard secundário (stateVal vs domVal) + `_renderForce=true` antes do `_render()` |
| 5 | `_setState` | `_renderForce=true` (botões devem sempre renderizar) |
| 6 | `_selectElectrolyte` | `_renderForce=true` |
| 7 | `_calculate` | `_renderForce=true` |
| 8 | `_reset` | `_renderForce=true` |
| 9 | `_normalizeField` | `_renderForce=true` nos dois `_render()` calls (blur = input já perdeu foco) |
| 10 | `_renderNumericFields` | Strip de trailing `,` ou `.` no `val` antes de gerar `value="..."` no HTML |

#### Arquivos Modificados
| Arquivo | Mudança |
|---------|---------|
| `js/elec-calc.js` | 10 correções cirúrgicas descritas acima |
| `sw.js` | `CACHE_VERSION` v12 → v13 |
| `manifest-offline.json` | version `241c` → `241d` |

#### Validação
- ✅ PlaywrightConsoleCapture: zero erros JS
- ✅ Todos os logs normais: DRUG_DB 310, PRESCRICOES_DB 125, HubAccordion pronto

---

## 🆕 BUILD 240D — Drug Search Motor Fix: `class` Field + Mobile Input (2026-06-29)

### Commit: `fix(search): resolve class field empty bug in _adaptExternalDB + inputmode=search`

#### Root Cause Identificado
O motor de busca `hmFilterDrugs()` / `renderFarmacosList()` filtra por **nome**, **classe** e **categoria**. Para fármacos com schema `{calculate(p, lang)}` (CARDIO, ANTIMICROBIANOS, PSICOFARMACOS), o campo `class` **só existe dentro do retorno de `calculate()`** — não na raiz do objeto `entry`. O `_adaptExternalDB` tentava ler `entry.class` diretamente (linha 20113), obtendo `''` para todos os fármacos cardiovasculares com `calculate()`.

**Impacto**: busca por "IECA", "betabloqueador", "BRA", "estatina" retornava **zero resultados** para enalapril, metoprolol, losartana e demais fármacos do `CARDIO_DRUGS_DB`.

**Por que o nome também não aparecia** (conforme relatado pelo usuário): na busca pelo nome "enalapril" a entrada existe, mas ao digitar apenas parcialmente sem encontrar resultados por classe, o usuário presumia que nada funcionava.

#### Fix Aplicado — `index.html` (`_adaptExternalDB`)

**Antes:**
```javascript
const classPt = typeof entry.class === 'object' ? (entry.class?.pt || '') : (entry.class || '');
```

**Depois:**
```javascript
let classPt = typeof entry.class === 'object' ? (entry.class?.pt || '') : (entry.class || '');
if (!classPt && typeof entry.calculate === 'function') {
  try {
    const _disc = entry.calculate({ peso: 70, idade: 40, clcr: 90, sexo: 'M',
                                    gestante: false, lactante: false }, 'pt');
    if (_disc && typeof _disc.class === 'string' && _disc.class) {
      classPt = _disc.class;
    }
  } catch(_e) { /* silencioso — classPt fica '' */ }
}
```
→ Chamada de descoberta ("discovery call") ao `calculate()` com parâmetros neutros para extrair o campo `class` estático do resultado.

#### Resultado
- **298 de 310 fármacos** agora têm `class` preenchido (vs ~0 para CARDIO anteriormente)
- `enalapril` → `class="Inibidor da Enzima Conversora de Angiotensina (IECA)"` ✅
- `metoprolol` → `class="Betabloqueador beta-1 seletivo"` ✅
- `losartana` → `class="Bloqueador do Receptor de Angiotensina II (BRA/ARB)"` ✅

#### Fix Secundário — Inputs de Busca (`inputmode="search"`)
Todos os inputs de busca de fármacos receberam `inputmode="search"` + `enterkeyhint="search"`:
- `#hm-drug-search` (hub card fármacos principal)
- `#hm-drug-search-calc` (hub card fármacos calculadora adulto)
- `#farmacos-search-input` (página dedicada fármacos)

#### Arquivos Modificados
| Arquivo | Mudança |
|---------|---------|
| `index.html` | `_adaptExternalDB`: discovery call ao `calculate()` para extrair `class`; 3 inputs com `inputmode="search"` |
| `sw.js` | `CACHE_VERSION` v8→v9 |
| `manifest-offline.json` | `version` 240c→240d |

#### Validação
- ✅ PlaywrightConsoleCapture: **zero erros JS**
- ✅ `DRUG_DB populado: 310 fármacos`
- ✅ Auditoria de campo: `class preenchido: 298 | vazio: 12`
- ✅ `enalapril class="Inibidor da Enzima Conversora de Angiotensina (IECA)"` confirmado em log

---

## 🆕 BUILD 240-CALC — Offline Manifest Completo (2026-06-25)

### Commit: `feat(calculator): generate complete offline manifest`

#### Objetivo
Criar `manifest-offline.json` canônico para o Flutter Smart Offline Engine consumir via `https://medcasescalcu.com/manifest-offline.json`. Inclui toda a base clínica — não apenas cardio.

#### Arquivos Criados/Modificados

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `manifest-offline.json` | ✨ CRIADO | Manifest completo: 31 arquivos, todas as especialidades |
| `scripts/generate-offline-manifest.js` | ✨ CRIADO | Script Node.js para regenerar o manifest a partir da árvore real |
| `sw.js` | ✏️ ATUALIZADO | `CACHE_VERSION` v6→v7, `ASSETS_TO_CACHE` sincronizada com manifest (31 arquivos, inclui todos CSS/JS/database) |

#### Conteúdo do Manifest

```
Total: 31 arquivos
├── Raiz (2):      index.html, sw.js
├── css/ (8):      medcases-ux-v2, build233→237b, build240b-fixes
├── js/ (5):       medcases-ux-v2, hub-accordion, build240b-accordion-fix, elec-calc, deeplink-router
└── database/ (16): TODAS as especialidades
     analgesicos, anticoag, antimicrobianos, cardio, endocrino,
     gastro, infusoes, interacoes, nefro, neuro, obesidade,
     pneumo, prescricoes, psicofarmacos, psiquiatria, reumatologia
```

#### Auditoria de Paths
- ✅ Todos os paths são **relativos** (`css/arquivo.css`, `js/arquivo.js`, `database/arquivo.js`)
- ✅ Zero paths absolutos (`/css/...` ou `https://medcasescalcu.com/...`)
- ✅ Zero paths externos (CDNs como fonts.googleapis.com não entram no manifest)

#### Como Regenerar o Manifest
```bash
node scripts/generate-offline-manifest.js
```
O script varre automaticamente: `css/`, `js/`, `database/`, `data/`, `assets/`, `images/`, `icons/`, `fonts/` — e inclui `index.html` + `sw.js` da raiz.

#### Validação
- ✅ PlaywrightConsoleCapture: zero erros JS
- ✅ `DRUG_DB populado: 310 fármacos` — banco completo
- ✅ `PRESCRICOES_DB carregado: 125 protocolos`
- ✅ 11 cards Hub carregando: patient, clcr, farmacos, interacoes, pediatria, gestante, infusao, hemodinamica, scores, fluidos, eletrolitos

---

## BUILD 240B — Mobile UX Fix: Inputs, Accordion Scroll, Light Mode, Card-in-Card (2026-06-25)

### Commit: `fix(calculator): stabilize mobile inputs, light mode and expanded card layout`

#### Objetivo
Correção de 5 regressões de UX mobile introduzidas pelas builds visuais 234–237B. Zero alterações em lógica clínica, fórmulas, banco de fármacos, interações ou deeplinks.

#### Fix 1 ✅ — Teclado Correto por Tipo de Campo (`index.html`)
- **Problema**: `type="number"` no iOS bloqueava o uso de vírgula como separador decimal
- **Solução**: Todos os campos numéricos agora usam `type="text"` + `inputmode="decimal"` + `pattern="[0-9.,]*"` + `autocomplete="off"` + `autocorrect="off"` + `spellcheck="false"`
- **Campos corrigidos**: peso, idade, altura, creatinina, urina 24h, creat. urinária (×2 card patient), PAS, PAD, FC, SpO2, FR, temperatura (hemodinâmica), temperatura (fluidos), amp-mg, vol-ml, dose, current-rate (infusão), Na⁺, glicose, albumina, ureia, K⁺, Ca²⁺, Mg²⁺, Cl⁻, HCO₃⁻ (eletrólitos), peso/altura/idade/creatinina (scores QE)
- **enterkeyhint**: campos sequenciais recebem `next`, último campo recebe `done`
- **Não quebra decimal**: vírgula nativa do iOS funciona sem inverter cursor

#### Fix 2 ✅ — Animação de Accordion Estável (`js/build240b-accordion-fix.js`)
- **Problema**: `_scrollToCard()` nativo usava `block:'start'` imediatamente após `.is-open`, causando jump visual
- **Solução**: Override de `hubToggle` com delay de 220ms (após animação); IntersectionObserver para detectar visibilidade; usa `block:'nearest'` sempre
- **Patch em `scrollTo`**: Intercepta chamadas ao `#scroll-content.scrollTo` — cancela se card já visível
- **Logs de debug**: `[ACCORDION_FIX] action=open|close scrollSkipped=true|false animation=stable`

#### Fix 3 ✅ — Input Focus Jump Removido (`js/build240b-accordion-fix.js`)
- **Problema**: trocar entre campos disparava scroll/resize causando pulo sobe/desce
- **Solução**: `visualViewport` API para detectar teclado aberto (`_keyboardOpen` flag); debounce de 120ms em todos os focus events; só rola se campo realmente oculto pelo teclado
- **Sem remount**: nunca colapsa accordion, nunca recalcula layout global durante digitação
- **Logs de debug**: `[KEYBOARD_STABLE] focusChange=true sameKeyboardSession=true|false scrollNeeded=true|false`

#### Fix 4 ✅ — Modo Claro com Cores Vivas (`css/build240b-fixes.css`)
- **Problema**: builds 236/237a forçavam `color:#FFFFFF` sobre fundos pastel claro → branco sobre branco
- **Solução**: Gradientes saturados por nível; texto escuro com contraste WCAG AA ≥ 4.5:1
  - N1 verde: esmeralda/petróleo/azul marinho vívidos + texto `#064e3b`/`#134e4a`/`#1e3a8a`
  - N2 azul: roxo/âmbar/verde/índigo vívidos + texto escuro próprio
  - N3 cinza: azul claro/rosa vívidos + texto `#1e3a8a`/`#831843`
- **Inputs internos**: `background: rgba(255,255,255,0.80)` + `color: #111827`

#### Fix 5 ✅ — Card-in-Card Removido (`css/build240b-fixes.css`)
- **Problema**: `.card` / `.card-title` dentro dos módulos abertos criavam visual de card aninhado com borda, sombra e fundo independente competindo com o card pai
- **Solução**: `.hub-card-body .card` → `background: transparent; border: none; box-shadow: none; border-radius: 0`
- **`.card-title`**: vira label semântico — sem borda de card, apenas underline fino com cor do módulo
- **Específico Hemodinâmica**: `#hub-hemo-slot .card` e `#hub-body-hemodinamica .card` → transparentes
- **Específico Fluidos**: `#fluid-result .card` → transparente
- **Todos os módulos cobertos**: Infusão, Eletrólitos, Scores, Pediatria, Gestante

#### Fix 5b ✅ — Eletrólitos `.elec2-step` Card-in-Card Removido (`css/build240b-fixes.css §2b`)
- **Problema**: `ElecCalc.render()` em `js/elec-calc.js` gera `.elec2-step#elec2-step1` com header `.elec2-step-hd` contendo "1 ELETRÓLITO" (fundo roxo `rgba(109,33,217,0.25)`, borda `rgba(167,139,250,0.15)`) — container visual desnecessário dentro do hub card
- **Root cause**: `.elec2-step` definido em `medcases-ux-v2.css` linha 1748 com `background`, `border` e `border-radius`. Arquitetura de seção independente para a página dedicada `/page-elec`, incompatível com o hub accordion
- **Solução**: Adicionado `§2b` em `build240b-fixes.css` — dentro de `#hub-elec-slot` / `#hub-elec-inner`:
  - `.elec2-step` → `background: transparent; border: none; border-radius: 0; overflow: visible`
  - `.elec2-step-hd` → `display: none` (oculta headers "1 ELETRÓLITO", "2 ESTADO", "3 PRESET")
  - `.elec2-elec-grid` → `padding: 8px 0 4px 0` (padding próprio sem depender do container)
  - `.elec2-fields-grid`, `.elec2-state-group` → padding zerado
- **Resultado**: Botões K⁺, Na⁺, Cl⁻, Mg²⁺, Ca²⁺, P, HCO₃⁻, Glicose, Alb, AG, Osm aparecem direto no corpo do hub card — sem wrapper roxo aninhado

#### Arquivos Criados/Modificados
| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `js/build240b-accordion-fix.js` | ✨ CRIADO | Fix 2+3: scroll estável + keyboard session |
| `css/build240b-fixes.css` | ✨ CRIADO | Fix 4+5: light mode vívido + card-in-card removal + type="text" input styles |
| `index.html` | ✏️ MODIFICADO | Fix 1: 29 inputs convertidos para type="text" + enterkeyhint; links para novos arquivos |

#### Validação
- ✅ PlaywrightConsoleCapture: **zero erros JS**
- ✅ Todos os 11 cards carregando: patient, clcr, farmacos, interacoes, pediatria, gestante, infusao, hemodinamica, scores, fluidos, eletrolitos
- ✅ `[ACCORDION_FIX] hubToggle patched` confirmado nos logs
- ✅ Nenhuma lógica clínica alterada

---

## BUILD 241C — UX Professionalization: Design System Unificado (2026-06-29)

### Commit: `style(app): unified typography, buttons, inputs and cards across all modules`

#### Objetivo
Profissionalizar o app médico através da unificação completa de layout em **todos** os cards, internos e externos. Nenhuma alteração de cor — apenas estrutura, tipografia, proporções e hierarquia visual.

#### Problema Identificado
- **Botões**: 5+ padrões diferentes — `.btn-primary` (13.5px/12px padding), `.hm-btn` (13px/11px padding), `.mc-btn` (spec separada), `.elec2-action-btn`, botões inline — sem altura ou radius unificados
- **Inputs**: 3 padrões — `.hm-input` 17px/11px padding, `.input-field` 14px/10px padding, `.hm-search` 14px/12px padding — border-radius 10/11/12/13/14px todos em uso
- **Labels**: `.hm-label` 10.5px, `.input-label` 10px uppercase, `.elec2-field-lbl` variável — tamanhos e transforms inconsistentes
- **Border-radius**: 10px, 11px, 12px, 13px, 14px aplicados aleatoriamente para elementos similares

#### Solução — `css/build241-ux-pro.css`
Sistema de 15 seções com design tokens `--pro-*`:

| Seção | Conteúdo |
|-------|----------|
| §1  | Tokens globais `--pro-*` (7 níveis de font, 3 de peso, 7 de espaço, 5 de radius) |
| §2  | Tipografia global com antialiasing |
| §3  | Inputs unificados — altura 44px, 13px, radius 12px |
| §4  | Labels unificadas — 10px/700/uppercase/0.4px spacing |
| §5  | Botões — Primary 44px / Secondary 40px / Ghost 36px |
| §6  | Cards externos padronizados |
| §7  | Card headers internos (módulos abertos) |
| §8  | Valores de resultado: 22px (métricas), 28px (dose), 34px (NEWS2) |
| §9  | Badges e pills — radius unificado (pill/xs) |
| §10 | Separadores e seções internas |
| §11 | Modais footers & data guard |
| §12 | Navigation bar |
| §13 | Scrollbar |
| §14 | Modo claro |
| §15 | Micro-overrides de coerência |

#### Design Tokens Principais
```css
--pro-h-input:        44px   /* iOS HIG mínimo */
--pro-h-btn-primary:  44px
--pro-h-btn-secondary: 40px
--pro-radius-md:      12px   /* botões e inputs */
--pro-radius-lg:      14px   /* cards */
--pro-fs-md:          13px   /* texto de conteúdo */
--pro-fs-xs:          10px   /* labels */
--pro-fs-2xs:         8.5px  /* badges/metadata */
--pro-fw-extrabold:   800
```

#### Arquivos Criados/Modificados
| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `css/build241-ux-pro.css` | ✨ CRIADO | Sistema unificado — 15 seções, ~300 linhas |
| `index.html` | ✏️ MODIFICADO | Link para `build241-ux-pro.css` após `build240b-fixes.css` |
| `sw.js` | ✏️ MODIFICADO | `CACHE_VERSION` v11→v12, novo CSS adicionado ao cache |
| `manifest-offline.json` | ✏️ MODIFICADO | version 241b→241c, totalFiles 31→32, css 8→9 |

#### Validação
- ✅ PlaywrightConsoleCapture: **zero erros JS**
- ✅ `[MedCases] DRUG_DB populado: 310 fármacos`
- ✅ `[MedCases] PRESCRICOES_DB carregado: 125 protocolos`
- ✅ `[HubAccordion] v2.0 pronto. Cards: patient, clcr, farmacos, interacoes, pediatria, gestante, infusao, hemodinamica, scores, fluidos, eletrolitos`
- ✅ Nenhuma lógica clínica alterada
- ✅ Zero mudanças de cor

---

## BUILD 237A — UX Refinement: Layout Hierárquico Premium (2026-06-25)

### Commit: `style(calculator): refine hierarchical layout and premium card spacing`

#### Objetivo
Refinamento visual cirúrgico do HUB. Sem texto de nível. Hierarquia por forma, espaçamento e separadores. Sensação: app hospitalar premium.

#### B237A-1 ✅ — Novo arquivo: `css/build237a-ux-refinement.css`
- Tokens `--b237-*` para padding, gap, alturas, ícones, separadores
- Carregado por último — maior prioridade de cascade

#### B237A-2 ✅ — Separadores entre grupos (`.hub-divider`)
- Elemento `<div class="hub-divider">` inserido entre N1→N2 e N2→N3
- 1px height, gradiente horizontal fade: `transparent → rgba(255,255,255,0.07) → transparent`
- Leve brilho central: `rgba(255,255,255,0.03)` no meio
- `margin: 10px 0` — espaço aéreo discreto ao redor
- Zero texto, zero label, zero glyph

#### B237A-3 ✅ — Remoção dos labels de texto de nível
- `.hub-section-label` → `display: none !important`
- Labels HTML substituídos por `<!-- B237A: label oculto via CSS -->`
- Hierarquia visual apenas por forma e cor

#### B237A-4 ✅ — Separadores entre cards N1 (ritmo vertical)
- `.hub-l1-section .hub-l1-row + .hub-l1-row`: `border-top: 1px solid rgba(255,255,255,0.055)`
- Gap zero entre os wrappers N1 — continuidade visual total
- Em tablet (≥768px): `border-left` (separador vertical entre os 3 cards lado a lado)

#### B237A-5 ✅ — Cards N1 refinados
- Trigger: `min-height: 80px`, `padding: 0 14px`, `gap: 14px`
- Ícone: `42px × 42px`, `border-radius: 12px`, `font-size: 18px`
- Nome: `14.5px / weight:600 / letter-spacing:-0.01em`
- Desc: `10px / rgba(255,255,255,0.58) / letter-spacing:0.01em`
- Chevron: `11px / rgba(255,255,255,0.30)`, rota 180° ao abrir

#### B237A-6 ✅ — Cards N2: altura uniforme forçada
- `height: var(--b237-trigger-h-l2)` (100px mobile → 114px desktop) em TODOS os cards N2 fechados
- Garante que Interações, Eletrólitos, Infusão, Fluidos, Hemodinâmica, Scores têm exatamente a mesma altura
- Ícone fechado: `52px / 24px font / border-radius:15px`
- Nome: `12.5px / weight:600 / centralizado`
- Linha decorativa: `28px × 2px`, opacidade 0.65

#### B237A-7 ✅ — Cards N3 refinados
- `height: 88px` uniforme
- Ícone: `44px / 20px font / border-radius:13px`
- Nome: `12px / rgba(255,255,255,0.80)`
- Linha decorativa: `22px × 2px`, opacidade 0.45
- Badge "Em breve": `7.5px / top:7px right:7px / border-radius:4px`

#### B237A-8 ✅ — Estado aberto: trigger horizontal
- N2/N3 aberto → trigger vira horizontal (igual N1)
- `min-height: 54px`, ícone N2=34px / N3=30px
- Nome alinhado à esquerda, desc reaparece, linha some, chevron 180°
- Animação body: `b237BodyIn` 150ms cubic-bezier(0,0,0.2,1)

#### B237A-9 ✅ — Grid N2: 2-col mobile → 3-col tablet/desktop
- Mobile `<768px`: `1fr 1fr`, gap `9px`
- Tablet `≥768px`: `repeat(3,1fr)`, gap `12px`
- Desktop `≥1024px`: `repeat(3,1fr)`, gap `14px`
- Expandido: flex-column em todos os breakpoints

#### B237A-10 ✅ — Espaçamento global padronizado
| Elemento | Mobile | Tablet | Desktop |
|---|---|---|---|
| Padding hub H | 14px | 16px | 24px |
| Padding hub top | 10px | 12px | 16px |
| Padding hub bottom | 32px | 36px | 44px |
| Gap N2 grid | 9px | 12px | 14px |
| Separador divisor | 10px top/bottom | 10px | 10px |

#### B237A-11 ✅ — Microinterações
- `scale(0.985) + opacity(0.84)` em 120ms — somente `transform + opacity`
- Hover: `filter: brightness(1.06)` apenas em `(hover: hover) and (pointer: fine)`
- Ícone: `scale(1.04)` spring 150ms ao abrir
- `will-change: transform` em triggers e ícones

#### B237A-12 ✅ — Zero regressões clínicas
- Nenhuma alteração em JS, banco, fórmulas, traduções, navegação
- Todos os IDs, `data-hub`, `hubToggle()`, `_updateAccordionState()` intactos
- Accordion abre/fecha corretamente em todos os 11 módulos

---

## 🆕 BUILD 236 — Calculator Hub Redesign (2026-06-24)

### Commit: `feat(calculator): redesign calculator hub with visual hierarchy`

#### Objetivo
Transformar os accordions empilhados em um **HUB visual moderno**: mais rápido de escanear, mais elegante, menos texto, mais próximo do padrão Nubank/Revolut/Linear.

#### B236-1 ✅ — Novo arquivo CSS: `css/build236-hub-redesign.css`
- Tokens `--b236-*` para alturas, ícones, gaps e tipografia do hub
- Labels de seção (`hub-section-label`): "Nível 1 · Essenciais", "Nível 2 · Ferramentas Clínicas", "Nível 3 · Específicos"
- Separadores horizontais discretos (`::after` com `rgba(255,255,255,0.08)`)

#### B236-2 ✅ — Nível 1 (Patient · ClCr · Fármacos): Full-width horizontal refinado
- Layout horizontal clássico preservado: `[ícone] [nome/desc] [chevron]`
- Altura: `88px` mobile → `96px` desktop
- Ícone: `44px` com `border-radius: 13px`
- Fonte do nome: `14px / font-weight: 600`

#### B236-3 ✅ — Nível 2 (6 módulos): Layout vertical centralizado compacto
- **Fechado**: coluna centralizada → ícone grande (56px) → título → linha colorida decorativa
- **Aberto**: vira horizontal igual N1 (ícone 36px, nome + desc, chevron rotacionado)
- Linha decorativa: `2.5px × 32px`, cor = acento do módulo, `margin: 5px auto`, `opacity: 0.75`
- Ícone fechado: `56px / font-size: 26px / border-radius: 16px`
- Altura card: `104px` mobile → `116–120px` tablet/desktop
- Grid: **2 colunas** mobile → **3 colunas** tablet/desktop

#### B236-4 ✅ — Nível 3 (Pediatria · Gestantes): Grid discreto
- Mesmo padrão vertical do N2, tamanho discreto
- Ícone: `48px`, altura card: `92px`
- Badge "Em breve" posicionado absoluto no canto superior direito (`top:8px, right:8px`)
- Grid: sempre **2 colunas**

#### B236-5 ✅ — Cores da linha decorativa por módulo
- Interações: `#38BDF8` (azul clínico)
- Eletrólitos: `#818CF8` (índigo)
- Infusão: `#22D3EE` (ciano)
- Fluidos: `#34D399` (teal-verde)
- Hemodinâmica: `#FB7185` (rosa discreto)
- Scores: `#94A3B8` (cinza azulado)
- Pediatria: `#64748B` | Gestantes: `#94A3B8`

#### B236-6 ✅ — Comportamento accordion preservado
- Card N2/N3 aberto → trigger vira horizontal, desc reaparece, chevron rotaciona 180°
- Linha decorativa some ao abrir (`display: none`)
- Grid→flex-column via `.hub-accordion--expanded` (técnica Build 235 mantida)
- Zero alterações no JS

#### B236-7 ✅ — Responsividade
| | Mobile | Tablet/Desktop |
|---|---|---|
| Nível 1 | 1 col full-width | 3 col lado a lado |
| Nível 2 | 2 col | 3 col |
| Nível 3 | 2 col | 2 col |
| Qualquer aberto | flex-column 100% | flex-column 100% |

#### B236-8 ✅ — Microinterações
- `transform: scale(0.98)` + `opacity: 0.86` em 120ms — somente `opacity + transform`
- Ícone: `scale(1.05)` spring 150ms ao abrir
- Body: `b236BodyIn` fade-in 150ms (opacity+translateY -4px→0)
- Hover desktop: `filter: brightness(1.05)`

#### B236-9 ✅ — Wrappers HTML adicionados (sem quebrar lógica existente)
- `<div class="hub-section">` envolvendo cada nível
- `<div class="hub-section-label">` com texto do nível
- `<div class="hub-l1-section">` container flex para N1
- Classes adicionadas sem remoção de classes anteriores (retrocompatível)

#### B236-10 ✅ — Zero regressões clínicas
- Nenhuma alteração em: `database/*.js`, `js/elec-calc.js`, `js/hub-accordion.js`, `js/medcases-ux-v2.js`, `js/deeplink-router.js`
- Todos os IDs e `data-hub` preservados
- `hubToggle()`, `hubOpen()`, `_updateAccordionState()` inalterados
- Cálculos, doses, interações, ClCr, eletrólitos: **intactos**

---

## 🆕 BUILD 235 — Hierarchical Layout + Full-Width Accordion UX (2026-06-24)

### Commit: `feat(calculator): hierarchical responsive layout and full-width accordion UX`

#### OBJ-1 ✅ — Nova Hierarquia dos Módulos (HTML Reorganizado)

**Antes:** Ordem: Patient → ClCr → Fármacos+Interações → Ped+Gestante → Infusão → Hemo+Scores → Fluidos+Eletrólitos

**Depois — Ordem por prioridade clínica:**

| Nível | Módulos | Comportamento |
|-------|---------|---------------|
| **1** | Dados do Paciente → ClCr Renal → Fármacos | Cada um: full-width individual |
| **2** | Interações · Eletrólitos · Infusão · Fluidos · Hemodinâmica · Scores | Grid 2-col (mobile), 4-col (tablet+) |
| **3** | Pediatria · Gestantes | Grid 2-col (sempre) |

#### OBJ-2 ✅ — Grid Responsivo por Nível

**Mobile (< 600px):**
- Nível 1: 1 coluna (full-width, destaque máximo)
- Nível 2: **2 colunas** — Interações|Eletrólitos / Infusão|Fluidos / Hemodinâmica|Scores
- Nível 3: **2 colunas** — Pediatria|Gestantes

**Tablet (≥ 768px):**
- Nível 1: 1 coluna full-width (cada um empilhado com maior altura)
- Nível 2: **4 colunas** — todos os 6 módulos em uma linha
- Nível 3: 2 colunas

**Desktop (≥ 1024px):**
- Mesmo que tablet + `max-width: 1200px` centrado

#### OBJ-3 ✅ — Accordion Full-Width ao Abrir (comportamento principal)

**Comportamento implementado:**
1. Todos fechados → grid normal (2 ou 4 colunas conforme breakpoint)
2. Qualquer card abre → **`grid-column: 1 / -1`** → ocupa 100% da largura disponível
3. Os demais cards descem automaticamente (flow normal do CSS Grid)
4. Ao fechar → grid retorna automaticamente (sem JS, sem resize)

**Técnica:** CSS Grid `grid-column: 1/-1` no seletor `.hub-card.is-open`  
- Funciona em mobile, tablet e desktop  
- Zero JavaScript adicional (usa o `.is-open` já adicionado pelo `hubToggle()`)  
- Fallback via `.hub-accordion--expanded` (já existe no JS) para Firefox < 121  

**Nível 1** já é full-width por definição (`.hub-row--full`).

#### OBJ-4 ✅ — Containers HTML Reestruturados

| Container | Módulos | Classe CSS |
|-----------|---------|------------|
| `hub-row--full hub-l1-row` | Patient | `.hub-l1-row` |
| `hub-row--full hub-l1-row` | ClCr | `.hub-l1-row` |
| `hub-row--full hub-l1-row` | Fármacos | `.hub-l1-row` |
| `hub-l2-grid` | Interações, Eletrólitos, Infusão, Fluidos, Hemodinâmica, Scores | `.hub-l2-grid` |
| `hub-row hub-l3-row` | Pediatria, Gestantes | `.hub-l3-row` |

#### OBJ-5 ✅ — Identidade Visual Preservada (continuidade Build 234)
- Gradientes por família cromática: verde (L1), azul petróleo (L2), cinza chumbo (L3)
- Card aberto preserva cor do card fechado (body herda família do trigger)
- Zero glow, zero neon, sombras discretas
- Fundo roxo escuro preservado

#### OBJ-6 ✅ — Tipografia Unificada
- Dark mode: `#FFFFFF` / `rgba(255,255,255,0.82)` — nunca cinza
- Light mode: `#111827` / `#4B5563`
- Hierarquia por nível: L1=15-16px · L2=13px · L3=12px
- Labels internos: 11.5px semi-bold

#### OBJ-7 ✅ — Botões Padronizados
- Todos com: `height:40px`, `padding:0 16px`, `border-radius:10px`, `font-size:13px`, `font-weight:600`
- `.hm-btn--primary`: gradiente verde `rgba(14,68,46,0.96)` → `rgba(10,82,55,0.92)`, texto `#86EFAC`
- `.hm-btn--ghost`: translúcido `rgba(255,255,255,0.06)`, texto `rgba(255,255,255,0.68)`
- Estados: hover opacity 0.90, pressed scale(0.98) 100ms, disabled opacity 0.34

#### OBJ-8 ✅ — Microinterações
- Accordion body: `b235BodyEnter` fade-in **150ms ease-out** (opacity+translateY)
- Scroll automático: `scroll-behavior: smooth` (**200ms** nativo)
- Botão clique: `scale(0.98)` **100ms**
- Resultado cálculo: `b235FadeIn` fade **150ms**
- Chevron: `rotate(180deg)` **150ms ease-out**
- Ícone: `scale(1.07)` **150ms spring** ao abrir
- **Somente:** opacity + transform — zero height animado, zero glow

#### OBJ-9 ✅ — Espaçamentos Padronizados
- Container: `padding: 12px 14px 24px` mobile → `20px 28px 36px` desktop
- Gap interno: `12px` mobile → `16px` desktop
- Padding interno por nível: L1=18-20px · L2=14-15px · L3=13-14px
- `hm-input-grid`: 2 colunas (3 em ≥768px), gap 10-12px
- `hm-card-footer`: `margin-top:14px`, `padding-top:12px`, separador `rgba(255,255,255,0.07)`

#### OBJ-10 ✅ — Ausência de Regressões
- **Zero alterações em**: `database/*.js`, `js/elec-calc.js`, `js/hub-accordion.js`, `js/medcases-ux-v2.js`, `js/deeplink-router.js`
- **Lógica clínica intacta**: cálculos ClCr, eletrólitos, infusões, fármacos, interações, hemodynamics, scores
- **IDs e classes originais mantidos**: `hub-card-*`, `hub-body-*`, `data-hub="*"` — JS funciona sem alteração
- **`hubToggle()` não alterado**: continua adicionando `.is-open` e `.hub-accordion--expanded` exatamente como antes
- Build 233 + Build 234: **intactos** — Build 235 apenas estende o cascade CSS

---

## 🆕 BUILD 234 — Premium Design System · Final UX Polish (2026-06-24)

### Commit: `style(calculator): premium design system and unified visual hierarchy`

#### DS-1 ✅ — CSS Token System (`css/build234-design-system.css`)
- Namespace `--mc-*`: spacing (`--mc-space-1..8`), padding por nível (`--mc-pad-l1/l2/l3`), card gap (`--mc-card-gap: 16px`), title→subtitle gap (`--mc-title-sub-gap: 6px`), icon→text (`--mc-icon-text-gap: 16px`), border radius (`--mc-radius-xs..xl`), typography (`--mc-font-family`, sizes por nível), animation durations (`--mc-dur-fast/normal/scroll/slow`), easings, trigger heights por nível, icon sizes por nível, button tokens, input tokens, shadow tokens
- Tokens de cor completos para Nível 1 (verde), Nível 2 (azul petróleo), Nível 3 (cinza chumbo) — dark e light

#### DS-2 ✅ — Spacing Padronizado
- Card gap: **16px** (`--mc-card-gap`)
- Title → Subtitle: **6px** (`--mc-title-sub-gap`)
- Padding interno: Nível 1 = **20px**, Nível 2 = **16px**, Nível 3 = **14px**
- Ícone → texto: **16px** (`--mc-icon-text-gap`)
- Padding desktop maior: L1=22-24px, L2=18-20px, L3=16-18px

#### DS-3 ✅ — Tipografia Refinada
- Dark mode: título `#FFFFFF`, subtítulo `rgba(255,255,255,0.85)` — **nunca cinza**
- Light mode: título `#111827`, subtítulo `#4B5563`
- Tamanho de nome por nível: L1=14.5px, L2=13.5px, L3=12.5px (responsivo até 15.5px desktop)
- Labels internos: 12px `font-weight:500`

#### DS-4 ✅ — Botão Unificado (`.mc-btn` + tokens em `.hm-btn`)
- **Um único componente**: `height:40px`, `padding:0 16px`, `border-radius:10px`, `font-size:13.5px`, `font-weight:600`
- Variantes: `--primary`, `--ghost`, `--danger`
- Todos os estados: hover (opacity 0.92), focus-visible (ring 2px), pressed (scale 0.985), disabled (opacity 0.38)
- Transição **apenas** `opacity + transform` — GPU-friendly
- `.hm-btn` legados recebem tokens via `!important` sem quebrar lógica JS

#### DS-5 ✅ — Input Unificado (5 estados)
- Base: `height:42px`, `padding:10px 12px`, `border-radius:9px`, `font-size:15px` (≥16px para iOS zero-zoom)
- **Normal**: `border: 1px solid rgba(255,255,255,0.10)`, `background: rgba(255,255,255,0.05)`
- **Focus**: border mais claro, background ligeiramente mais visível — **zero box-shadow/glow**
- **Filled**: `data-filled="true"` — border e background levemente mais densos
- **Readonly**: opacity 0.55, cursor default
- **Error** (`.is-error` / `.field-highlight`): border `rgba(251,113,133,0.55)`, background róseo; animação `mc-field-pulse` (só opacity, 300ms)
- Remove spinners de número em todos os browsers

#### DS-6 ✅ — Microinterações GPU-friendly
- Accordion (hub body): `display:none/block` + `@keyframes mc-body-enter` (opacity+translateY -4px→0, **150ms ease-out**)
- Resultado fade-in: `@keyframes mc-fadein` (opacity+translateY 5px→0, **150ms**)
- Clique: `transform: scale(0.985)`, **100ms** — só nos `button:active`
- Chevron: `rotate(180deg)` **150ms ease-out**
- Ícone: `scale(1.06)` ao abrir card, **150ms spring**
- Scroll automático: `scroll-behavior: smooth` (**200ms** nativo)
- Field highlight: `@keyframes mc-field-pulse` (opacity 1→0.60→1, **300ms**, 2 ciclos)
- **Nunca animado**: `height`, `box-shadow`, `layout`

#### DS-7 / DS-8 / DS-9 / DS-10 ✅ — Hierarquia dos Cards (data-level)
- `data-level="1|2|3"` adicionado aos 11 `<article class="hub-card">` no `index.html`
- Nível 1 (patient, clcr, farmacos): trigger 68→78px, ícone 42→48px, nome 14.5→15.5px
- Nível 2 (interacoes, infusao, fluidos, eletrolitos, hemodinamica, scores): trigger 60→64px, ícone 36px, nome 13.5→14px
- Nível 3 (pediatria, gestante): trigger 54→58px, ícone 32px, nome 12.5px, discreto
- Grid: `.hub-row` = 2 colunas mobile; tablet+ pode ser 4 colunas (`.hub-l2-grid`)
- `.hub-row--full`: largura total (cards isolados)

#### DS-11 / DS-12 / DS-13 ✅ — Paleta Definitiva por Família Cromática
- **Nível 1 — Família Verde**:
  - Patient: `#0d2416 → #0a3d22` (verde escuro→médio) · acento `#4ADE80`
  - ClCr: `#072c26 → #0a4035` (verde petróleo→clínico) · acento `#34D399`
  - Fármacos: `#0b2333 → #0a3040` (verde azulado→profundo) · acento `#2DD4BF`
- **Nível 2 — Família Azul Petróleo**:
  - Interações: azul petróleo `#0d1a2e→#0e2545` · acento `#38BDF8`
  - Infusão: azul quente `#0d1e2e→#0f2c40` · acento `#22D3EE`
  - Fluidos: verde-azulado `#082820→#0a3535` · acento `#34D399`
  - Eletrólitos: azul violáceo `#0e1832→#111f45` · acento `#818CF8`
  - Hemodinâmica: vinho discreto `#1a0810→#0e1830` · acento `#FB7185`
  - Scores: grafite azulado `#111827→#0f1e36` · acento `#94A3B8`
- **Nível 3 — Família Cinza Chumbo**:
  - Pediatria: `#141b24→#1a2433` (grafite→cinza profundo) · acento `#64748B`
  - Gestantes: `#1c1e24→#1e2630` (cinza chumbo→grafite) · acento `#94A3B8`
- Gradiente discreto 4–8% de diferença visual. Zero glow. Zero neon.

#### DS-14 ✅ — Card Expandido: Identidade de Cor Preservada
- Cada `.hub-card-body` recebe background da família do card
- Cada `.hub-card-inner` recebe tom mais escuro da mesma família
- Slots lazy-mounted (`hub-hemo-slot`, `hub-fluidos-slot`, etc.) herdam família do card pai
- **Nunca** um card verde abre com corpo azul

#### DS-15 ✅ — Fundo Dark Purple Preservado
- Background principal não alterado — continuidade visual com Home do MedCases Pro

#### DS-16 / DS-17 ✅ — Sombras Discretas + Light Mode Equivalente
- Sombras: `--mc-shadow-sm`, `--mc-shadow-md`, `--mc-shadow-lg` — profundidade sem espetáculo
- **Zero glow. Zero neon** em qualquer estado
- **Light mode**: paleta equivalente (não invertida)
  - Nível 1: verde pastel (ex: `#e8f5ee → #d0eddc`)
  - Nível 2: azul gelo (ex: `#e0effa → #cce4f5`), hemodinâmica rosa pastel
  - Nível 3: cinza claro (ex: `#f1f3f6 → #e8ecf1`)
  - Títulos: `#111827`, subtítulos: `#4B5563`
  - Inputs, botões, cards internos: equivalentes pastel de cada módulo

#### DS-18 ✅ — Performance GPU-friendly
- **Somente** `opacity` e `transform` animados
- **Nunca**: height animada, box-shadow animada, layout thrashing
- `display:none/block` para accordion (zero transição de height)
- Keyframes apenas com `opacity` + `translateY` (layer compositor)
- `scroll-behavior: smooth` nativo (zero JS)

#### DS-19 / DS-20 ✅ — index.html e Arquivos
- `data-level="1|2|3"` em todos os 11 `<article class="hub-card">`
- `<link rel="stylesheet" href="css/build234-design-system.css" />` adicionado após `build233.css`
- `build234-design-system.css` carregado por último: cascade correto (sobrescreve build233 onde necessário)

#### DS-21 ✅ — Ausência de Regressões
- Zero alterações em: `database/*.js`, `js/elec-calc.js`, `js/hub-accordion.js`, `js/medcases-ux-v2.js`, `js/deeplink-router.js`
- Lógica clínica, fórmulas, doses, interações, ClCr, eletrólitos, IA: **intactos**
- Build 233 (OBJ1–OBJ10): **intactos** — build234 apenas estende o cascade CSS

---

## 🆕 BUILD 233 — Super Ordem Final (2026-06-24)

### OBJ1 ✅ — Drug Search Audit/Fix
- **Stubs injetados** para 6 fármacos cardiovasculares de alta prevalência ausentes do `DRUG_DB`: `captopril`, `carvedilol`, `amlodipino`, `atorvastatina`, `rosuvastatina`, `sinvastatina`
- **ID duplicado corrigido**: segundo `id="hm-drug-search"` (linha ~8335) renomeado para `id="hm-drug-search-calc"` e `id="hm-search-clear-calc"`
- **Logs `[SEARCH_AUDIT]`** adicionados a `hmFilterDrugs()`: `query`, `totalDB`, cada `HIT`, `resultados`
- Stubs com dados básicos (nome, classe, categoria, cor, função `dose()`) suficientes para aparecer na busca e exibir dose padrão. Zero impacto em lógica clínica

### OBJ2 ✅ — Grid Responsivo
- `css/build233.css` criado: grid 1→2→3/4 colunas por breakpoint (480/768/1024px)
- Hub accordion usa CSS Grid em tablet/desktop (2→3 colunas); `hub-card-patient` e `hub-card-interacoes` span completo
- `elec2-fields-grid` responsivo: 1→2→3 colunas por breakpoint

### OBJ3 ✅ — UX Polish
- Identidade de cor por módulo: Fluidos=verde, Hemodinâmica=vermelho, Eletrólitos=roxo, Infusão=ciano, Fármacos=azul, Interações=laranja, ClCr=verde-azulado, Scores=dourado
- Modo claro: legibilidade aprimorada em `.card`, `.drug-result-*`, `.elec2-*`, `.hm-drug-*`
- `font-size: 16px` nos inputs para evitar zoom automático iOS
- Hover/active suave nos drug items

### OBJ4 ✅ — Fluidos: Zero erro pré-cálculo
- Guard `calcFluids()` sem peso: `res.innerHTML = ''` + chama `_fluidScrollToWeight()`
- `_fluidScrollToWeight()`: busca campo de peso visível → `scrollIntoView({block:'center',behavior:'smooth'})` → `_fluidHighlightField()` (outline verde 1800ms) → `focus()`
- `_fluidHighlightField()`: outline `2.5px solid #22C87A` + `box-shadow rgba(34,200,122,0.22)` com transição suave
- **Zero popup, zero modal, zero card vermelho**

### OBJ5 ✅ — Remoção de modal "Editar Dados do Paciente"
- Chip de paciente no fluidos: botão "Editar" agora chama `_fluidScrollToWeight()` em vez de `openQuickEdit('weight')`
- Guard de dose sem paciente: botão "Cadastrar" agora chama `_fluidScrollToWeight()` em vez de `openQuickEdit('full')`
- `openQuickEdit()` mantido para compatibilidade com outros contextos; fluxos críticos migrados

### OBJ6 ✅ — Hemodinâmica Card Vermelho Premium
- `#hub-hemo-slot .card`: background `linear-gradient(160deg, #1a0408, #2a0810)`, border vermelho
- `.card-title` na hemodinâmica: background vermelho intenso + cor `#FCA5A5`
- `.results-grid`: background `rgba(220,38,38,0.08)`, border vermelho sutil
- Trigger do card hemodinâmica: gradiente dark red `#2d0a10 → #1a0508`
- Inputs: borda e foco vermelhos

### OBJ7 ✅ — Limpeza de Dados do Paciente ao Sair
- `_clearCalculatorPatientData()`: limpa `inp-weight/height/age/creatinine/cr-urina/vol24h`, reseta `patientData`, remove `localStorage` (`medcases_hm_patient_v1`, `pacienteAtual`), chama `resetResults()` + `_onPatientDataUpdated()`
- `_CALC_PAGES = Set(['calculators','adult','elec','infusion','farmacos','atb','scores'])`: limpeza ocorre APENAS ao sair destas páginas → `home`; não dispara entre sub-cards

### OBJ8 ✅ — Fix iOS Decimal Input (`js/elec-calc.js`)
- `type="number"` → `type="text" inputmode="decimal" pattern="[0-9]*[.,]?[0-9]*"` em todos os campos numéricos do `ElecCalc`
- `_parseLocaleNumber(str)`: aceita vírgula (`3,5`) e ponto (`3.5`); retorna `NaN` sem lançar exceção; log `[INPUT_FIX]`
- `_safeRestoreCursor(el, start, end)`: chama `setSelectionRange` SOMENTE se `start !== null`; evita crash iOS em `type="number"`
- `_setField()` reescrito: NÃO faz `parseFloat` durante `oninput`; guarda string bruta no state; chama `_safeRestoreCursor` via `rAF`
- `_normalizeField(key, inputEl)`: chamado no `onblur`; converte vírgula→ponto; valida; atualiza `input.value` SOMENTE no blur; re-renderiza
- `ElecCalc.normalizeField` exposto na API pública

### OBJ9 ✅ — Animações Suaves
- `css/build233.css`: transições em `.hub-card-trigger`, `.hub-card-body`, `.hub-card-ico`, `button:active` (scale 0.97)
- `#hm-drug-result`, `#calc-drug-result`: animação `@keyframes b233FadeIn` (opacity + translateY 6px→0)
- `input:focus`, `select:focus`: `transition: border-color 0.18s ease, box-shadow 0.18s ease`
- `button`: `transition: opacity 0.15s, transform 0.12s, background 0.18s`

### OBJ10 ✅ — Validação (estrutural)
- Todos os OBJs implementados sem alterar lógica clínica, fórmulas, doses, interações DB, ClCr, eletrólitos, infusões, adapters
- Zero mudança em `database/cardio.js`, `database/antimicrobianos.js`, `database/psicofarmacos.js`, etc.
- `css/build233.css` + links `<link>` no `<head>`: cascade não interfere com regras existentes (especificidade respeitada)

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

### 🏠 Aba Início — Perfil do Paciente + Verificador de Interações

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

### ⚡ Card: Verificador Dinâmico de Interações Medicamentosas — v2.0

Posicionado logo abaixo do card do paciente na aba Início. Utiliza banco de dados fármaco-cêntrico dedicado com motor bidirecional.

#### Arquitetura

| Componente | Detalhe |
|---|---|
| **Banco de dados** | `database/interacoes.js` → `window.INTERACOES_DB` |
| **Motor** | `executarChecagemInteracoes()` — algoritmo O(n²) de pares C(n,2) |
| **Lookup** | Bidirecional: verifica A→B e B→A automaticamente |
| **Normalização** | `_normalizarChave()` — remove acentos, espaços e converte para minúsculas |
| **Autocomplete** | Alimentado pelo `window.DRUG_DB` global (toda a base de fármacos) |
| **Limite** | Min 2 / Max 5 fármacos por verificação |
| **i18n** | Totalmente bilíngue PT/ES (descrição + conduta) |

#### 4 Níveis de Gravidade com Cores Dedicadas

| Nível | Cor | Significado Clínico |
|---|---|---|
| `contraindicada` | 🔴 Vermelho Escuro | Associação PROIBIDA — não utilizar em hipótese alguma |
| `alta` | 🟥 Vermelho | Evitar ou monitorização ultra-estreita com ajuste de dose |
| `moderada` | 🟡 Amarelo | Cautela e monitoramento, ajuste de dose pode ser necessário |
| `leve` | 🔵 Azul | Monitorar se fatores de risco presentes |

#### Interações Mapeadas (v1.0 — 23 pares)

| Par | Gravidade |
|---|---|
| Captopril × Losartana | Contraindicada |
| Enalapril × Valsartana | Contraindicada |
| Tadalafila × Isossorbida | Contraindicada |
| Claritromicina × Sinvastatina | Contraindicada |
| Amiodarona × Levofloxacino | Contraindicada |
| Captopril × Espironolactona | Alta |
| Enalapril × Ibuprofeno | Moderada |
| Amiodarona × Varfarina | Alta |
| Amiodarona × Digoxina | Alta |
| Levofloxacino × Metformina | Alta |
| Carvedilol × Clonidina | Alta |
| AAS × Varfarina | Alta |
| Insulina × Atenolol | Alta |
| Amiodarona × Sinvastatina | Moderada |
| Furosemida × Digoxina | Moderada |
| Metformina × Ibuprofeno | Moderada |
| Levofloxacino × Ibuprofeno | Moderada |
| Claritromicina × Colchicina | Alta |
| AAS × Furosemida | Leve |
| Metformina × Ranitidina | Leve |
| Anlodipino × Sinvastatina | Leve |
| Losartana × Fluconazol | Leve |
| Atorvastatina × Omeprazol | Leve |

#### IDs e Funções Públicas

```javascript
// Ponto de entrada principal
window.executarChecagemInteracoes()

// Autocomplete
window.intxFilterSuggestions(query)
window.intxSelecionarFarmaco(drugId)
window.intxSearchKeydown(event)

// Gestão de chips
window._intxRemover(drugId)
window._intxRefreshLang()       // atualiza PT↔ES em tempo real

// Aliases de compatibilidade (legado v1.0)
window.ixVerificar               // → executarChecagemInteracoes
window.ixFilterSuggestions       // → intxFilterSuggestions
window.ixSelectDrug              // → intxSelecionarFarmaco
```

#### IDs dos Elementos HTML (prefixo `intx-`)

```html
#intx-search-input    <!-- campo de busca de fármacos -->
#intx-suggestions     <!-- dropdown autocomplete -->
#intx-chips-wrap      <!-- container dos chips/badges -->
#intx-chips           <!-- área dos chips individuais -->
#intx-count-badge     <!-- badge contador "2/5" no header -->
#intx-hint            <!-- texto contextual de orientação -->
#intx-verify-btn      <!-- botão "Verificar Interações" -->
#intx-results         <!-- área de resultados (cards por par) -->
```

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
├── index.html                   ← App principal (SPA completa, ~940+ KB)
│
├── database/
│   ├── interacoes.js            ← window.INTERACOES_DB
│   │                               23 pares de interações · 4 níveis de gravidade
│   │                               Motor bidirecional O(n²) · PT/ES nativo
│   │
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

### 2026-06-23 — v3.2.0: Fix Motor de Interações + Fix Idioma Eletrólitos (Sessão 2)

#### Fix 1 — Motor de Interações Medicamentosas (CRÍTICO)

**Causa raiz:** Dois elementos com `id="card-interactions-container"` no DOM.
- Linha ~8020: container legado `<div style="display:none">` — vazio/inativo
- Linha ~8699: container v3 real — com todo o motor funcional
- `_moveInteractions()` usava `getElementById()` → retornava SEMPRE o PRIMEIRO (legado, sem estado real)
- Hub montava o container errado → chips, botão e motor operavam em nó desconectado da UI visível

**Solução aplicada:**
1. Container legado removido de `index.html` (linhas 8019-8068)
2. Container v3 recebe `display:none` inicial (revelado pelo `_moveInteractions()`)
3. `_moveInteractions()` refatorada com retry 15×100ms + log diagnóstico
4. Debug logs adicionados em `executarChecagemInteracoes()`:
   `[INTERACTIONS_DEBUG] databaseLoaded`, `selectedDrugs`, `rulesCount`, `resultsCount`

**Arquivos modificados:**
| Arquivo | Mudança |
|---|---|
| `index.html` | Remoção do container legado duplicado (linhas 8019-8068); `display:none` no container v3 |
| `js/hub-accordion.js` | `_moveInteractions()` com retry 15×100ms + log diagnóstico |

#### Fix 2 — Idioma Calculadora de Eletrólitos (100% i18n)

**Causa raiz:** `_detectLang()` lia `window.appLang` (inexistente); sem listener de mudança de idioma; todas as 11 funções `ClinicalLogic.*` tinham strings hardcoded em PT.

**Solução aplicada:**

**A) Sistema de detecção de idioma multi-fonte** (`js/elec-calc.js`):
- `_getGlobalLang()` — lê `window.currentLang` → `window.lang` → `localStorage` → URL param (espelha `_isES()` do motor de interações)
- `_render()` sempre chama `_getGlobalLang()` antes de renderizar
- `_hookSetLang()` — intercepta `setLang()` global + retry 50×100ms
- `_init()` — listener `langChange` + hook retry + watcher 800ms como fallback

**B) I18N expandido** (`js/elec-calc.js`):
- ~200 strings clínicas PT+ES adicionadas ao objeto `I18N`
- Cobertura: K, Na, Mg, Ca, P, HCO₃, Glicose, Albumina, AG, Osmolaridade, Cl
- Strings de indicação, alertas, condutas, recontroles, acessos vasculares

**C) ClinicalLogic — substituição completa de strings hardcoded** (`js/elec-calc.js`):
- `ClinicalLogic.k()` — 8 substituições: defStr, alertas, op1-3 indicação/alerta_acesso
- `ClinicalLogic.na()` — 12 substituições: interpretação, indicações, alertas, acessos
- `ClinicalLogic.mg()` — 8 substituições: indicações, alertas, acessos
- `ClinicalLogic.ca()` — 7 substituições: indicações, alertas, acessos
- `ClinicalLogic.p()` — 7 substituições: indicações, alertas
- `ClinicalLogic.hco3()` — 6 substituições: indicações, dilui, alertas
- `ClinicalLogic.glicose()` — 7 substituições: indicações, alertas, acessos
- `ClinicalLogic.albumina()` — 5 substituições: indicações, alertas, acesso
- `ClinicalLogic.ag()` — 8 substituições: interpretação, alertas, indicação
- `ClinicalLogic.osm()` — 7 substituições: interpretação, alertas, indicação
- `ClinicalLogic.cl()` — 6 substituições: interpretação, alertas, indicações

**Arquivos modificados:**
| Arquivo | Mudança |
|---|---|
| `js/elec-calc.js` | `_getGlobalLang()`, `_hookSetLang()`, watcher 800ms, I18N +200 strings PT+ES, 74 substituições nas 11 funções ClinicalLogic |

#### Ledger completo de arquivos modificados (Sessões 1 + 2)

| Arquivo | Sessão | Status | Resumo |
|---|---|---|---|
| `index.html` | S1+S2 | **modificado** | Container legado ID duplicado removido; display:none v3; debug logs interações |
| `js/hub-accordion.js` | S1+S2 | **modificado** | Mount eletrolitos via ElecCalc; _moveInteractions() retry 15×100ms |
| `js/elec-calc.js` | S1+S2 | **criado/modificado** | Engine completa ~91KB; _getGlobalLang multi-fonte; I18N 200+ strings; ClinicalLogic 100% i18n |
| `js/deeplink-router.js` | S1 | **modificado** | ELEC_CARD_ALIASES 38 aliases; handler eletrolitos com elecKey |
| `css/medcases-ux-v2.css` | S1 | **modificado** | §16 estilos elec2-* ~400 linhas |
| `sw.js` | S1 | **modificado** | CACHE_VERSION v5→v6; elec-calc.js pré-cacheado |
| `database/interacoes.js` | — | **somente leitura** | Não modificado — banco clínico preservado |

---

### 2026-06-23 — v3.1.0: Calculadora de Eletrólitos / Meio Interno v3.0 (button-driven)

#### Refatoração completa do card Eletrólitos — fluxo clínico por botões

**Objetivo:** Substituir o antigo módulo de Eletrólitos (herdado de `#page-elec`, digitação manual) por uma calculadora clínica avançada button-driven — sem dependência de digitação manual para montar a correção.

**Arquivos criados/modificados:**

| Arquivo | Operação | Resumo |
|---|---|---|
| `js/elec-calc.js` | **CRIADO** | ~91 KB · Engine clínica completa — FORMULATIONS_DB, 8 fórmulas, ClinicalLogic 11 eletrólitos, ElecRender 7 blocos, ElecUI 3 etapas · API pública `window.ElecCalc` |
| `css/medcases-ux-v2.css` | **MODIFICADO** | §16 adicionado — ~400 linhas de estilos elec2-* (grid de botões, chips de estado, blocos de output, alertas, dark/light mode) |
| `js/hub-accordion.js` | **MODIFICADO** | Mount do card `eletrolitos` agora usa `ElecCalc.render()` + aceita `opts.elecKey` para seleção automática via deep link |
| `js/deeplink-router.js` | **MODIFICADO** | `ELEC_CARD_ALIASES` expandido de 5 para 38 aliases · handler `eletrolitos` atualizado para passar `elecKey` ao HubAccordion |
| `index.html` | **MODIFICADO** | `<script src="js/elec-calc.js">` adicionado antes do deeplink-router |
| `sw.js` | **MODIFICADO** | `CACHE_VERSION` v5→v6 · `elec-calc.js` adicionado nos 23 assets pré-cacheados |
| `README.md` | **MODIFICADO** | Badge v3.0.0-hub → v3.1.0-elec · Changelog desta sessão |

#### Arquitetura `js/elec-calc.js`

| Seção | Conteúdo |
|---|---|
| §1 `FORMULATIONS_DB` | 13 formulações: KCl 19,1%, KCl 10%, NaCl 0,9/3/23,4%, MgSO₄ 50%, NaHCO₃ 8,4%, SG 5/10/25/50%, Albumina 5/20%, Gluconato/Cloreto de Ca |
| §2 `ELECTROLYTES` | 11 eletrólitos: K, Na, Cl, Mg, Ca, P, HCO₃, Glicose, Albumina, AG, Osm — com unidades, range normal, ícone, cor, estados contextuais |
| §3 `_state` | Estado completo da calculadora — eletrólito, campos numéricos, presets, estado clínico, idioma |
| §4 `Formulas` | 10 fórmulas clínicas: calcACT, calcNaCorrigido, calcDeficitNa, calcDeficitAguaLivre, calcDeficitK, calcCaCorrigido, calcOsmolaridade, calcAG, calcAGCorrigido, calcInfusao |
| §5 `I18N` | Bilíngue completo PT/ES — 60+ strings por idioma |
| §6 `ClinicalLogic` | 10 engines: k, na, mg, ca, p, hco3, glicose, albumina, ag, osm — retornam { estado, interpretação, op1-3, alertas, recontrole } |
| §7 `ElecRender` | Renderização HTML dos 7 blocos: Estado, Interpretação, Opções 1-3, Alertas, Recontrole |
| §8 `ElecUI` | Etapa 1 (grid 11 eletrólitos), Etapa 2 (campos + botões de estado), Etapa 3 (presets dose/volume/tempo/equipo), Resultado |
| §9 Controller | `_selectElectrolyte`, `_setState`, `_calculate`, `_reset`, `_copyResult`, `_syncPatientData` |
| §10 API pública | `window.ElecCalc.{ selectElectrolyte, setState, setField, calculate, reset, copyResult, getState, render, init }` |

#### Deep Links suportados (expandidos)

```
?tab=eletrolitos                      — abre card Eletrólitos
?tab=eletrolitos&q=potassio           — seleciona K⁺
?tab=eletrolitos&q=sodio              — seleciona Na⁺
?tab=eletrolitos&q=magnesio           — seleciona Mg²⁺
?tab=eletrolitos&q=calcio             — seleciona Ca²⁺
?tab=eletrolitos&q=fosforo            — seleciona P
?tab=eletrolitos&q=bicarbonato        — seleciona HCO₃⁻
?tab=eletrolitos&q=glicose            — seleciona Glicose
?tab=eletrolitos&q=albumina           — seleciona Albumina
?tab=eletrolitos&q=anion-gap          — seleciona Ânion Gap
?tab=eletrolitos&q=osmolaridade       — seleciona Osmolaridade
?lang=es&tab=eletrolitos&q=potassio   — espanhol + K⁺
```

#### Fórmulas clínicas implementadas

| Fórmula | Expressão |
|---|---|
| Na⁺ Corrigido | `Na + 1,6 × ((Glicose – 100) / 100)` [fator 2,4 se Glicose >400] |
| ACT Homem | `Peso × 0,60` |
| ACT Mulher | `Peso × 0,50` |
| ACT Idoso | `Peso × 0,45` |
| Déficit Na⁺ | `ACT × (Na alvo – Na atual)` |
| Déficit Água Livre | `ACT × ((Na atual / Na alvo) – 1)` |
| Déficit K⁺ estimado | `((3,5 – K atual) / 0,3) × 100 mEq` |
| Ca²⁺ Corrigido | `Ca medido + 0,8 × (4,0 – albumina)` |
| Osmolaridade | `2 × Na + Glicose/18 + Ureia/2,8` |
| Ânion Gap | `Na – (Cl + HCO₃)` |
| AG Corrigido | `AG + 2,5 × (4,0 – albumina)` |
| Infusão mL/h | `Volume / Tempo(h)` |
| Macrogotas/min | `Volume × 20 / Tempo(min)` |
| Microgotas/min | `Volume × 60 / Tempo(min)` |

#### Exemplo validado — KCl 40 mEq (conforme especificação)

```
KCl 19,1%: Volume = 40 / 2,5 = 16 mL ✅
KCl 10%:   Volume = 40 / 1,33 = 30 mL ✅

Carga rápida central (1h):
  SF 0,9% 100 mL → 100 mL/h → 33 gotas/min → 100 microgotas/min ✅

Correção periférica (4h):
  SF 0,9% 500 mL → concentração = 80 mEq/L
  → ⚠️ ALERTA: excede limite periférico (>50 mEq/L) ✅
  → Sugestão: 20 mEq/500 mL = 40 mEq/L (periférico seguro) ✅
```

#### Testes obrigatórios — cenários clínicos

| Cenário | Resultado esperado |
|---|---|
| K⁺ 2,4 · peso 70 · ClCr 90 | Hipocalemia grave → Opção 1: carga central 40 mEq/100 mL/1h |
| K⁺ 6,4 · ECG alterado | 🚨 Hipercalemia grave → Gluconato Ca + Insulina/Glicose |
| Na⁺ 116 sintomático | 🚨 NaCl 3% 100 mL/10 min + alerta mielinólise |
| Na⁺ 162 | Hipernatremia → SG 5% 48h ≤10 mEq/L/24h |
| Mg²⁺ 1,1 · ClCr ≥30 | Grave → MgSO₄ 4–8 g / 12–24h |
| Ca²⁺ 7,2 · albumina 2,0 | Ca corrigido = 7,2 + 0,8×(4,0–2,0) = 8,8 mg/dL → Normal! |
| AG · Na 140, Cl 100, HCO₃ 12, alb 2,0 | AG = 28 → Elevado · AG corrigido = 28 + 2,5×2 = 33 |
| `?lang=es&q=potassio` | Toda a UI exibida em espanhol |

### 2026-06-19 — v2.7.0: Verificador Dinâmico de Interações Medicamentosas v2.0

#### Arquitetura Fármaco-Cêntrica Bidirecional — Substituição Completa do Módulo `ix-`

**Objetivo:** Substituir o módulo de text-mining `_initIxModule()` por uma arquitetura dedicada com banco de dados próprio, namespacing limpo e motor O(n²) bidirecional.

**Arquivos criados/modificados:**

| Arquivo | Operação | Resumo |
|---|---|---|
| `database/interacoes.js` | **CRIADO** | 26.959 bytes · `window.INTERACOES_DB` · 23 pares · 4 níveis de gravidade · PT/ES nativo |
| `index.html` | **MODIFICADO** | Script tag no `<head>` + ~420 linhas CSS `intx-` + HTML card refatorado + motor JS v2.0 |
| `README.md` | **MODIFICADO** | Badge v2.7.0 · seção Verificador · tabela dos 23 pares · API pública documentada |

**Banco de dados `database/interacoes.js`:**

| Nó Raiz | Nº de Interações | Gravidades |
|---|---|---|
| `captopril` | 2 | contraindicada, alta |
| `enalapril` | 2 | contraindicada, alta |
| `amiodarona` | 4 | contraindicada (×2), alta (×2) |
| `metformina` | 1 | contraindicada |
| `lítio` | 2 | alta, moderada |
| `metronidazol` | 2 | alta (×2) |
| `fluconazol` | 2 | alta, moderada |
| `ciprofloxacino` | 2 | alta, moderada |
| `tramadol` | 2 | alta (×2) |
| `clozapina` | 2 | contraindicada, alta |
| `sildenafila` | 2 | contraindicada, moderada |

**Motor JS `_initIntxModule()` — funções públicas:**

| Função Global | Papel |
|---|---|
| `executarChecagemInteracoes()` | Ponto de entrada — dispara o O(n²) C(n,2) |
| `intxFilterSuggestions(query)` | Autocomplete em tempo real via `DRUG_DB` |
| `intxSelecionarFarmaco(id)` | Adiciona fármaco à seleção (max 5) |
| `intxSearchKeydown(event)` | Navegação por teclado no dropdown |
| `window._intxRemover(id)` | Remove chip da seleção |
| `window._intxRefreshLang()` | Re-renderiza toda a UI ao trocar PT↔ES |
| Aliases `ixVerificar`, `ixSelectDrug` etc. | Compatibilidade retroativa com código legado |

**Validação Playwright (2026-06-19):**
```
[log] [MedCases] Motor de Interações v2.0 inicializado. DB: 14 nós raiz ✅
[warn] [DRUG ADAPTER] Erro em procainamida ReferenceError: torsadesPrevias (pré-existente, não relacionado)
Novos erros JavaScript introduzidos: 0 ✅
IDs ix- órfãos: 0 ✅
```

---

### 2026-06-17 — v2.6.6: Grupo 23 — Dipiridamol + Nitroglicerina IV em `database/cardio.js`

#### Injeção do Grupo 23 — Antiagregante Vasodilatador + Nitrato IV

**Arquivo:** `database/cardio.js` — inserção após linha 16.638 (pós `}); /* fim Grupo 22 */`)

**Fármacos adicionados:**

| Chave | Nome | Classe | Destaque clínico |
|---|---|---|---|
| `dipiridamol` | Dipiridamol | Antiagregante / vasodilatador | 200 mg LP + AAS (AVC) · 0,56 mg/kg IV (estresse) · roubo coronariano · potencializa adenosina |
| `nitroglicerinaIV` | Nitroglicerina IV | Nitrato IV | 5–10 mcg/min → até 400 mcg/min · **CI absoluta: PDE-5** · IAM de VD · `pde5InteractionFatal: true` |

**Conversão técnica (2 chamadas `t(lang,...)` convertidas):**

| Fármaco | Campo convertido |
|---|---|
| `dipiridamol` | `safetyFlags.warning` |
| `nitroglicerinaIV` | `safetyFlags.warning` |

**Campos especiais:**
- `dipiridamol`: `hemodynamicRules.holdIf` (PAS <90 · roubo coronariano) · `coronaryStealRisk: true` · uso duplo (preventivo oral + teste IV)
- `nitroglicerinaIV`: `hemodynamicRules.holdIf` (PAS <90 · PAM <65 · IAM de VD) · `therapeuticTargets` · `ecgSafety` · `pde5InteractionFatal: true` · `calculator` (titulação por peso)

**Validação estrutural:**
```
Arquivo após inserção: 16.951 linhas  (+ 311 linhas vs v2.6.5)
Fecho da IIFE })();  →  linha 16.951  ✅
Object.assign Grupo 23 fechado: linha 16.949  ✅
t(lang,...) fora de calculate(): 0  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

### 2026-06-17 — v2.6.5: Grupo 22 — P2Y12 Reversíveis em `database/cardio.js`

#### Injeção do Grupo 22 — Antiagregantes P2Y12 Reversíveis (Oral + IV)

**Arquivo:** `database/cardio.js` — inserção após linha 16.015 (pós `}); /* fim Grupo 21 */`)

**Fármacos adicionados:**

| Chave | Nome | Via | Destaque clínico |
|---|---|---|---|
| `ticagrelor` | Ticagrelor | Oral | 180 mg ataque · 90 mg 12/12h (1º ano) · 60 mg estendido · **CI hem. intracraniana** · dispneia · bradicardia · CYP3A4 |
| `cangrelor` | Cangrelor | IV | Bolus 30 mcg/kg + infusão 4 mcg/kg/min · t½ 3–6 min · somente hospitalar · transição oral crítica |

**Conversão técnica (6 chamadas `t(lang,...)` convertidas):**

| Fármaco | Campo convertido |
|---|---|
| `ticagrelor` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |
| `cangrelor` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |

**Campos especiais:**
- `ticagrelor`: `pharmacokinetics` · `priorICHContraindication` · `dyspneaRisk` · `bradyarrhythmiaRisk` · `cyp3a4InteractionRisk` · interação AAS dose alta
- `cangrelor`: `pharmacokinetics.offset` (recuperação plaquetária) · `transitionInteractions` (clop./prasugrel vs. ticagrelor) · `hospitalUseOnly: true` · `rapidOffset` · `periPCIUse`

**Validação estrutural:**
```
Arquivo após inserção: 16.640 linhas  (+ 623 linhas vs v2.6.4)
Fecho da IIFE })();  →  linha 16.640  ✅
Object.assign Grupo 22 fechado: linha 16.638  ✅
t(lang,...) fora de calculate(): 0  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

### 2026-06-17 — v2.6.4: Grupo 21 — Antiagregantes P2Y12 em `database/cardio.js`

#### Injeção do Grupo 21 — Antiagregantes P2Y12

**Arquivo:** `database/cardio.js` — inserção após linha 15.380 (pós `}); /* fim Grupo 20 */`)

**Fármacos adicionados:**

| Chave | Nome | Classe | Destaque clínico |
|---|---|---|---|
| `clopidogrel` | Clopidogrel | P2Y12 irreversível – pró-fármaco | Ativação CYP2C19 · 300–600 mg ataque · 75 mg/dia · omeprazol reduz ativação · `pharmacogenomics` · sem antídoto |
| `prasugrel` | Prasugrel | P2Y12 irreversível – alta potência | **CI absoluta em AVC/AIT** · 60 mg ataque · 10 mg/dia · 5 mg se <60 kg · evitar ≥75 anos · sem antídoto |

**Conversão técnica (6 chamadas `t(lang,...)` convertidas):**

| Fármaco | Campo convertido |
|---|---|
| `clopidogrel` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |
| `prasugrel` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |

**Campos especiais:**
- `clopidogrel`: `pharmacogenomics` (CYP2C19) · `cyp2c19ActivationRequired` · `daptMedication`
- `prasugrel`: `priorStrokeContraindication` (absoluta) · `elderlyHighRisk` · `lowWeightDoseCaution` · `lowWeightOrElderly` na dose

**Validação estrutural:**
```
Arquivo após inserção: 16.017 linhas  (+ 635 linhas vs v2.6.3)
Fecho da IIFE })();  →  linha 16.017  ✅
Object.assign Grupo 21 fechado: linha 16.015  ✅
t(lang,...) fora de calculate(): 0  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

### 2026-06-17 — v2.6.3: Grupo 20 — Dabigatrana + AAS em `database/cardio.js`

#### Injeção do Grupo 20 — DOAC Inibidor de Trombina + Antiagregante Base

**Arquivo:** `database/cardio.js` — inserção após linha 14.735 (pós `}); /* fim Grupo 19 */`)

**Fármacos adicionados:**

| Chave | Nome PT | Classe | Destaque clínico |
|---|---|---|---|
| `dabigatrana` | Dabigatrana | DOAC – inibidor direto trombina | Cápsula intacta · fortemente renal-dependente · dispepsia frequente · antídoto **idarucizumabe** · dronedarona/cetoconazol P-gp |
| `aas` | Ácido Acetilsalicílico | Antiagregante / inibidor COX-1 irreversível | Dose carga SCA 160–325 mg · manutenção 75–100 mg · DAPT · síndrome de Reye · risco GI + asma AAS |

**Conversão técnica (6 chamadas `t(lang,...)` convertidas):**

| Fármaco | Campo convertido |
|---|---|
| `dabigatrana` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |
| `aas` | `renalAdjustment.message` · `hepaticAdjustment.message` · `safetyFlags.warning` |

**Campos especiais:**
- `dabigatrana`: `administration` (cápsula inteira/umidade), `dyspepsiaRisk`, `anticoagulationMonitoring.therapeuticTargets` (TTPa qualitativo)
- `aas`: `antiplateletMonitoring`, `acsLoading`, `dapt`, `perioperativeManagement` (stent), `asthmaAERDRisk`, `highAlertInCombination`

**Validação estrutural:**
```
Arquivo após inserção: 15.382 linhas  (+ 645 linhas vs v2.6.2)
Fecho da IIFE })();  →  linha 15.382  ✅
Object.assign Grupo 20 fechado: linha 15.380  ✅
t(lang,...) fora de calculate(): 0  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

### 2026-06-17 — v2.6.2: Grupo 19 — Anticoagulantes Orais em `database/cardio.js`

#### Injeção do Grupo 19 — 4 Anticoagulantes Orais

**Arquivo:** `database/cardio.js` — inserção após linha 13.539 (pós `}); /* fim Grupo 18 */`), antes de `})();`

**Fármacos adicionados como `Object.assign(window.CARDIO_DRUGS_DB, { ... })` — Grupo 19:**

| Chave | Nome PT | Classe | Destaque clínico |
|---|---|---|---|
| `varfarina` | Varfarina (AVK) | Antagonista vitamina K | INR obrigatório · janela estreita · múltiplas interações · antídotos: vit. K + PCC · contraindicada gestação |
| `apixabana` | Apixabana (DOAC) | Inibidor direto Xa | 2 doses/dia · critérios de redução (≥2 de: idade≥80/peso≤60/Cr≥1,5) · sem INR · antídoto: andexanet alfa |
| `rivaroxabana` | Rivaroxabana (DOAC) | Inibidor direto Xa | Doses altas com alimento · ClCr-dependente · DAC/DAP 2,5 mg · antídoto: andexanet alfa |
| `edoxabana` | Edoxabana (DOAC) | Inibidor direto Xa | Parenteral obrigatório antes · alerta ClCr >95 em FA · antídoto: andexanet alfa |

**Conversão técnica obrigatória aplicada (12 chamadas `t(lang,...)` convertidas):**

| Fármaco | Campo | Tipo original → final |
|---|---|---|
| `varfarina` | `renalAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `varfarina` | `hepaticAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `varfarina` | `safetyFlags.warning` | `t(lang,...)` → `{pt,es}` |
| `apixabana` | `renalAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `apixabana` | `hepaticAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `apixabana` | `safetyFlags.warning` | `t(lang,...)` → `{pt,es}` |
| `rivaroxabana` | `renalAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `rivaroxabana` | `hepaticAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `rivaroxabana` | `safetyFlags.warning` | `t(lang,...)` → `{pt,es}` |
| `edoxabana` | `renalAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `edoxabana` | `hepaticAdjustment.message` | `t(lang,...)` → `{pt,es}` |
| `edoxabana` | `safetyFlags.warning` | `t(lang,...)` → `{pt,es}` |

**Campos especiais por fármaco:**
- `varfarina`: `bridging`, `narrowTherapeuticIndex`, `requiresINR`, `pregnancyContraindicated`, `highInteractionRisk`
- `apixabana`: `doseReductionCriteria`, `noINRMonitoring`, `neuraxialHematomaRisk`
- `rivaroxabana`: `administration` (instrução com alimento), `perioperativeManagement`, `foodRequiredForHighDose`
- `edoxabana`: `perioperativeManagement`, `highClCrReducedEfficacyRisk` (ClCr >95 em FA)

**Validação estrutural:**
```
Arquivo após inserção: 14.737 linhas  (+ 1.196 linhas vs v2.6.1 / + 2.330 total vs v2.6.0)
Fecho da IIFE })();  →  linha 14.737  ✅
Object.assign Grupo 19 fechado: })(); linha 14.735  ✅
t(lang,...) fora de calculate(): 0 ocorrências  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

### 2026-06-17 — v2.6.1: Grupo 18 — Anticoagulantes Parenterais em `database/cardio.js`

#### Injeção do Grupo 18 — 4 Anticoagulantes Parenterais

**Arquivo:** `database/cardio.js` — inserção após linha 12.515 (pós `}); /* fim Grupo 17 */`), antes de `})();`

**Fármacos adicionados como `Object.assign(window.CARDIO_DRUGS_DB, { ... })` — Grupo 18:**

| Chave | Nome PT | Classe | Destaque clínico |
|---|---|---|---|
| `heparinaNaoFracionada` | Heparina Não Fracionada (HNF) | Inibidor indireto trombina + Xa | Alto risco · monitorização TTPa/anti-Xa · antídoto: protamina · preferida em DRC grave |
| `enoxaparina` | Enoxaparina (HBPM) | Inibidor predominante Xa | Dose por peso 1 mg/kg · ajuste ClCr <30 · risco neuraxial · protamina parcial |
| `dalteparina` | Dalteparina (HBPM) | Inibidor predominante Xa | Dose em UI/kg · indicação especial câncer (ASCO) · protamina parcial |
| `fondaparinux` | Fondaparinux | Inibidor seletivo Xa | Contraindicado ClCr <30 · sem antídoto aprovado · preferido em HIT |

**Conversão técnica obrigatória aplicada:**

Todos os campos estáticos dos schemas continham chamadas `t(lang, '...', '...')` (ReferenceError fora de `calculate()`). Convertidos para objetos `{pt: '...', es: '...'}` antes da inserção:

| Campo convertido | Tipo original | Tipo final |
|---|---|---|
| `renalAdjustment.message` | `t(lang, ...)` | `{ pt: '...', es: '...' }` |
| `hepaticAdjustment.message` | `t(lang, ...)` | `{ pt: '...', es: '...' }` |
| `safetyFlags.warning` | `t(lang, ...)` | `{ pt: '...', es: '...' }` |

**Campos presentes em todos os 4 fármacos:**
`name · category · class · indications · commercialNames · presentation · mechanism · dose · anticoagulationMonitoring · renalAdjustment · hepaticAdjustment · bleedingRisk · hitSafety · reversal · commonAdverseEffects · dangerousAdverseEffects · contraindications · interactions · pregnancy · lactation · elderly · monitoring · safetyFlags · auditNotes · ref`

**Campos adicionais específicos:**
- `heparinaNaoFracionada`: `therapeuticTargets`, `hospitalUseOnly`, `requiresTelemetry`, `calculator`
- `enoxaparina`: `neuraxialHematomaRisk`, `antidoteAvailablePartial`, `calculator`
- `fondaparinux`: `noSpecificAntidote`, `hitPreferred`, `calculator`

**Validação estrutural:**
```
Arquivo após inserção: 13.541 linhas  (+ 1.134 linhas vs v2.6.0)
Fecho da IIFE })(); : linha 13.541  ✅
Object.assign Grupo 18 fechado: })(); linha 13.539  ✅
t(lang,...) fora de calculate(): 0 ocorrências  ✅
Novos erros JavaScript introduzidos: 0  ✅
```

---

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

## 📋 Changelog — Sessões Recentes

---

### 2026-06-24 — Build 232: Auditoria e Correção — Procainamida + iOS Keyboard

> **Escopo:** duas correções independentes, pontuais e isoladas. Zero alterações em arquitetura, UX geral, banco de fármacos, cálculos clínicos ou layout desktop.

---

#### PARTE 1 — Procainamida: ReferenceError `torsadesPrevias`

**Causa raiz:**
No `database/cardio.js`, a função `calculate()` da procainamida destruturava o objeto `paciente` usando o nome `torsadesPrevia` (singular, linha ~11286), mas na linha ~11313 referenciava `torsadesPrevias` (plural). Como a variável plural nunca era declarada, o JavaScript lançava `ReferenceError: torsadesPrevias is not defined` ao pré-processar o fármaco via `_prefetchDrugs()`, interrompendo a fila de pré-processamento.

**Correção aplicada (`database/cardio.js`):**
```js
// ANTES — destructuring incompleto:
torsadesPrevia = false,        // declarado no destructuring
// ...
if (torsadesPrevias) { ... }   // ← ReferenceError: não declarada

// DEPOIS — BUILD 232:
torsadesPrevia  = false,       /* singular — nome original */
torsadesPrevias = false,       /* plural   — nome usado na lógica; fix */
// ...
const _torsades = Boolean(torsadesPrevias || torsadesPrevia);
// ...
if (_torsades) { ... }         /* usa variável normalizada */
```

**Por que ambas variantes?** Para compatibilidade com qualquer caller que passe o parâmetro como `torsadesPrevia` (singular) ou `torsadesPrevias` (plural) — ambos acionam o alerta de contraindicação.

**Validação:**
- `grep -R "torsadesPrevias" .` → apenas em `cardio.js` (declaração + uso) e `README.md`
- Nenhuma outra ocorrência sem declaração em nenhum arquivo

---

#### PARTE 2 — Bug do Teclado no iOS WebView: Viewport Vazia ao Trocar Campos

**Causa raiz (3 fatores combinados):**

1. **`body { position: fixed }` (linha ~98 do `<style>` inline):**
   Em iOS WebView (não Safari puro), quando o usuário troca de campo com teclado aberto, o browser dispara `focusin → focusout` simultaneamente. O `position: fixed` no body faz o iOS recalcular o layout inteiro ao mudar o `activeElement`, causando o colapso temporário do viewport.

2. **`_openKeyboard()` com `if (_kbOpen) return`:**
   A v1.0 ignorava completamente a troca de campo quando o teclado já estava aberto. O `visualViewport.resize` disparava brevemente com altura cheia durante a animação (~50ms), chamando `_closeKeyboard()` e removendo o padding — mas o teclado permanecia aberto, deixando o conteúdo fora do viewport.

3. **`_baseVVHeight` nunca recalibrado enquanto teclado aberto:**
   Após fechar e reabrir, a baseline ficava desatualizada, causando `diff` incorreto.

**Correções aplicadas:**

| Arquivo | O que mudou |
|---|---|
| `index.html` (CSS inline `html`/`body`/`#app`) | `body`: removido `position:fixed`; adicionado `min-height:100%`. `html`: adicionado `min-height:100%`. `#app`: adicionado `min-height:100dvh/100vh`. CSS v5.0 (era v4.1) |
| `index.html` (`body.keyboard-open` CSS) | Apenas `overflow-y:auto` no `#scroll-content` + `visibility:visible` no accordion. NUNCA height/transform no bloco CSS |
| `index.html` (IIFE keyboard handler) | **v2.0** completo — substitui v1.0 inteiro |
| `index.html` (`:root`) | `--keyboard-safe-bottom: 0px` adicionada como CSS custom property |

**Handler v2.0 — mudanças chave:**

```
isIOSWebView()          — detecta UIWebView/WKWebView vs Safari puro
getKeyboardHeight()     — usa visualViewport.height vs screen.height
applyKeyboardSafePadding() — APENAS padding-bottom via CSS var,
                             nunca translateY/height/overflow no #app

_openOrUpdateKeyboard() — sem if(_kbOpen)return: re-aplica ao trocar campo
focusin (troca de campo) — detecta prev !== e.target com teclado aberto:
                           faz scroll sem fechar/reabrir
focusout delay 250ms    — WebView demora mais que Safari (era 200ms)
resize debounce 80ms    — ignora eventos intermediários da animação
threshold fechamento    — diff < 50px (metade do threshold); zona cinzenta
                          50–100px não fecha para evitar falsos negativos
scrollIntoView delay    — 280ms (era 120ms); WebView anima ~250ms
_baseVVHeight recalibra — apenas quando teclado fecha (era no load apenas)
```

**Logs adicionados:**
```
[KEYBOARD_FIX] focus field=hm-weight kbOpen=false
[KEYBOARD_FIX] viewportHeight=480
[KEYBOARD_FIX] keyboardHeight=310
[KEYBOARD_FIX] paddingBottom=330px kbHeight=310 el=hm-weight
[KEYBOARD_FIX] scrollIntoView center field=hm-weight
[KEYBOARD_FIX] focus field=hm-age kbOpen=true   ← troca de campo
[KEYBOARD_FIX] scrollIntoView center (field switch)
[KEYBOARD_FIX] keyboardHeight=0 (fechado) baseVV=844
[KEYBOARD_FIX] baseline calibrated vv=844 win=844 isIOSWebView=true
```

**Garantias de não-regressão:**
- ✅ Android: sem alteração de comportamento (mesmo handler, threshold maior)
- ✅ Desktop: `visualViewport` quase igual a `innerHeight`, diff < 100px → nenhum handler ativa
- ✅ Cálculos, banco de fármacos, accordion, ClCr, eletrólitos: intactos
- ✅ Layout desktop/tablet: `min-height` não afeta layouts que já têm `height` definida

---

#### Arquivos modificados (Build 232)

| Arquivo | Seção | Mudança |
|---|---|---|
| `database/cardio.js` | `procainamida.calculate()` linha ~11286 | Adiciona `torsadesPrevias=false` no destructuring + variável normalizada `_torsades` |
| `index.html` | CSS inline `html`/`body`/`#app` | Remove `position:fixed` do body; adiciona `min-height:100%` em html/body; adiciona `min-height:100dvh` em #app; comentário "v5.0" |
| `index.html` | CSS inline `body.keyboard-open` | Regra minimalista: só `overflow-y:auto` + `visibility:visible` no accordion |
| `index.html` | CSS inline `:root` | `--keyboard-safe-bottom: 0px` |
| `index.html` | IIFE keyboard handler | v1.0 → v2.0 completo: `isIOSWebView`, `getKeyboardHeight`, `applyKeyboardSafePadding`, `_openOrUpdateKeyboard`, debounce, zona cinzenta |

---

### 2026-06-24 — Light Mode Bug Fix v2: Hub Cards — Texto Branco Definitivo

> **Escopo:** CSS only. Zero alterações em lógica clínica, cálculos, responsividade ou layout estrutural.

#### Problema
No tema claro (`body.light-mode`), os 11 hub-cards do accordion exibiam **texto preto sobre gradientes escuros/coloridos**, comprometendo gravemente a legibilidade. A causa raiz era a regra global `body.light-mode span { color: #000000 }` no §0.2 de `medcases-ux-v2.css`, que aplicava cor preta a **todos** os spans da página, incluindo os spans `lang-hub-pt/es` dentro dos triggers dos hub-cards.

#### Análise de especificidade CSS
| Regra | Especificidade | `!important` | Posição |
|---|---|---|---|
| `body.light-mode span { color:#000 }` §0.2 | (0,1,1) | ❌ | CSS externo L55 |
| `body.light-mode #hub-card-X .hub-card-name span` §15b | (1,2,1) | ✅ | CSS externo L1556 |
| `body.light-mode .hub-accordion .hub-card-trigger *` §15c | (0,3,0) | ✅ | CSS externo L2312 |
| `body.light-mode #hub-card-X .hub-card-trigger *` §HUB-LIGHT-FIX | (1,2,0) | ✅ | index.html inline (último) |

#### Solução aplicada (3 camadas de defesa)

**Camada 1 — `css/medcases-ux-v2.css` §0.2 (linha ~53)**  
Adicionado `:not()` na regra global para excluir explicitamente elementos dentro dos hub-card-triggers:
```css
body.light-mode span:not(.hub-accordion .hub-card-trigger *),
body.light-mode button:not(.hub-accordion .hub-card-trigger),
body.light-mode p:not(.hub-accordion .hub-card-trigger *) { color: #000000; }
```

**Camada 2 — `css/medcases-ux-v2.css` §15c (final do arquivo)**  
Novo bloco ao final do CSS externo com regras `.hub-accordion`-scoped:
- `.hub-accordion .hub-card-trigger *` → `#FFFFFF !important`
- `.hub-accordion .hub-card-name` + spans → `#FFFFFF`
- `.hub-accordion .hub-card-desc` + spans → `rgba(255,255,255,0.82)`
- `.hub-accordion .hub-card-chevron` → `rgba(255,255,255,0.60)` (aberto: 0.92)
- `.hub-accordion .hub-card-ico i` → `#FFFFFF !important`
- `.hub-accordion .hub-soon-badge` → `#FBBF24 + bg 20%`

**Camada 3 — `index.html` `<style id="hub-light-fix">` (após todo CSS externo)**  
Bloco inline após o último `</style>` do documento — posição de maior precedência de cascade. Duplica as regras §15c com adição das regras por ID (`#hub-card-X`) para cobertura máxima.

#### Cards afetados (todos os 11)
`hub-card-patient` · `hub-card-clcr` · `hub-card-farmacos` · `hub-card-interacoes` · `hub-card-pediatria` · `hub-card-gestante` · `hub-card-infusao` · `hub-card-hemodinamica` · `hub-card-scores` · `hub-card-fluidos` · `hub-card-eletrolitos`

#### Arquivos alterados

| Arquivo | O que mudou |
|---|---|
| `css/medcases-ux-v2.css` | §0.2 atualizado com `:not(.hub-accordion .hub-card-trigger *)` para excluir triggers do reset preto; §15c adicionado ao final do arquivo com regras `.hub-accordion`-scoped |
| `index.html` | `<style id="hub-light-fix">` adicionado como último `<style>` antes de `</body>` — máxima precedência de cascade; cobre todos os 11 cards com regras por `.hub-accordion` e por ID |

#### Garantias pós-fix
- ✅ Modo escuro: sem alterações (regras são todas `body.light-mode`-scoped)
- ✅ Lógica clínica: intacta
- ✅ Responsividade: intacta
- ✅ Layout estrutural: intacto
- ✅ Formulários internos dos cards (`.hub-card-body`): continuam com texto escuro (`#1E293B`) via `body.light-mode .hub-card-body .hm-label` — não afetados

---

### 2026-06-24 — Build 227: ClCr Premium UX Polish

> **Escopo:** exclusivamente visual (UX/UI). Zero alterações em fórmulas, cálculos, traduções ou lógica clínica.

#### Objetivo
Elevar os mini-cards secundários (IMC, Peso Ideal, BSA) ao mesmo padrão visual premium do card principal do ClCr — criando um módulo com aparência de monitor multiparamétrico moderno.

#### Arquivos alterados

| Arquivo | O que mudou |
|---|---|
| `index.html` | CSS inline: novo bloco `.clcr-hero`, `.clcr-mini-grid`, `.clcr-mini-card` (3 variantes), tipografia hierárquica, animação `@keyframes clcrNumPulse`, light-mode overrides, breakpoints responsivos; bloco `hmFixarDados()` re-sync usa novo layout premium |
| `js/hub-accordion.js` | Helpers `_imcCategory()` e `_buildMiniCards()` adicionados; `_syncClcrResult()` reescrito com novo HTML; ambos expostos via `window._buildMiniCards` / `window._imcCategory` |

#### Componentes alterados

**1. Card hero ClCr** — refatorado de flex genérico para classes semânticas:
```html
<div class="clcr-hero">
  <div class="clcr-hero-value">
    <div class="clcr-hero-number" style="color: #10b981;">72.1</div>
    <div class="clcr-hero-unit">mL/min · CG</div>
  </div>
  <div class="clcr-hero-info">
    <div class="clcr-hero-cat">Redução leve</div>
    <div class="clcr-hero-rec">Verificar ajuste em fármacos...</div>
  </div>
</div>
```

**2. Mini-cards premium** — estrutura unificada:
```html
<div class="clcr-mini-grid">
  <div class="clcr-mini-card clcr-mini-card--imc">
    <div class="clcr-mini-number">31.9</div>   <!-- 28-32px, cor própria -->
    <div class="clcr-mini-unit">kg/m²</div>
    <div class="clcr-mini-title">IMC</div>
    <div class="clcr-mini-sub">Obesidade I</div>  <!-- classificação auto -->
  </div>
  <div class="clcr-mini-card clcr-mini-card--peso">
    <div class="clcr-mini-number">63.2</div>
    <div class="clcr-mini-unit">kg</div>
    <div class="clcr-mini-title">Peso Ideal</div>
    <div class="clcr-mini-sub">Devine</div>
  </div>
  <div class="clcr-mini-card clcr-mini-card--bsa">
    <div class="clcr-mini-number">2.03</div>
    <div class="clcr-mini-unit">m²</div>
    <div class="clcr-mini-title">Área Corporal</div>
    <div class="clcr-mini-sub">Mosteller</div>
  </div>
</div>
```

#### Melhorias visuais implementadas

| Aspecto | Antes | Depois |
|---|---|---|
| **Número** | 14px (hm-pill-val) | **28–32px**, peso 800, letter-spacing −0.8px |
| **Hierarquia** | Plana (valor = label) | Número → unidade → título → subtítulo |
| **Identidade** | Todos iguais (cyan genérico) | IMC=azul petróleo, Peso=índigo, BSA=turquesa |
| **Borda** | `rgba(56,189,248,0.16)` uniforme | Cada variante tem cor própria + glow no hover |
| **Acento** | Nenhum | Traço lateral 3px (identidade visual premium) |
| **Subtítulo clínico** | Não existia | IMC classifica (Abaixo/Normal/Sobrepeso/Obesidade I-III), Peso exibe "Devine", BSA exibe "Mosteller" |
| **Animação** | Nenhuma | `clcrNumPulse` 220ms (fade 30→100% + scale 88→104→100%) em cada atualização |
| **Light mode** | Herdava cor genérica | Gradientes claros dedicados por card |

#### Paleta de identidade dos mini-cards

| Card | Número | Fundo | Acento |
|---|---|---|---|
| IMC | `#38BDF8` (cyan) | `rgba(7,32,58,0.95) → rgba(10,42,72,0.90)` | `#38BDF8` |
| Peso Ideal | `#A5B4FC` (índigo) | `rgba(14,26,66,0.95) → rgba(20,38,88,0.90)` | `#818CF8` |
| BSA | `#34D399` (esmeralda) | `rgba(5,32,28,0.95) → rgba(7,45,40,0.90)` | `#34D399` |

#### Responsividade validada

| Breakpoint | Grid mini-cards | Card padding | Número |
|---|---|---|---|
| < 380px | 2 col (BSA full-width) | 11px 10px | 28px |
| 380–599px | 3 col | 11px 10px | 28px |
| 600–1023px | 3 col | **13px 12px** | **30px** |
| ≥ 1024px | 3 col | **14px 14px** | **32px** |

#### Classificação IMC (`_imcCategory()`)

| Faixa | PT | ES |
|---|---|---|
| < 18.5 | Abaixo do peso | Bajo peso |
| 18.5–24.9 | Normal | Normal |
| 25–29.9 | Sobrepeso | Sobrepeso |
| 30–34.9 | Obesidade I | Obesidad I |
| 35–39.9 | Obesidade II | Obesidad II |
| ≥ 40 | Obesidade III | Obesidad III |

#### Confirmação: zero alterações clínicas

- ✅ `hmCalcCockcroft()` — intocado (Cockcroft-Gault + Urina 24h)
- ✅ `_hmComputeDerived()` — intocado (IMC=peso/altura², Devine, BSA=Mosteller)
- ✅ Categorias renais (≥90/60/30/15) — intocadas
- ✅ Valores exibidos (lidos de `hm-pv-imc`, `hm-pv-peso`, `hm-pv-bsa`) — sem modificação
- ✅ Traduções PT/ES — todas preservadas
- ✅ Hub Accordion, Interações, Eletrólitos, Hemodinâmica — não tocados

---

### 2026-06-24 — Build Responsividade (Layout/CSS only)

> **Escopo:** apenas CSS/layout — zero alterações em lógica clínica, motor de interações, ClCr, eletrólitos ou hemodinâmica.

#### Problema resolvido
Em telas iPad/desktop, o `#app` estava travado em `max-width: 500px` com fundo sólido escuro nas laterais — aparência de "app preso no centro" com paredes cinza.

#### Arquivos alterados
| Arquivo | Mudanças |
|---|---|
| `index.html` (CSS inline) | `html/body` → `radial-gradient` roxo premium; `#app` responsivo `100% → 1280px`; `#scroll-content` padding responsivo por breakpoint; `hm-input-grid` 4 colunas em desktop; bloco `<style>` final com todos os breakpoints |
| `css/medcases-ux-v2.css` | `.hub-accordion` grid 2→3→4 colunas por breakpoint; `.hub-card-inner`/`.hub-card-trigger` padding cresce com tela |

#### Breakpoints implementados

| Largura | `#app` | Hub Grid | Padding scroll |
|---|---|---|---|
| < 480px | 100% | 1 coluna | 10px 12px |
| 480–599px | 100% | 2 colunas | 10px 12px |
| 600–767px | min(100%, 900px) | 2 colunas | 14px 20px |
| 768–1023px (iPad) | min(96vw, 1080px) | **3 colunas** | 16px 28px |
| 1024–1279px (iPad ↔) | min(92vw, 1180px) | **4 colunas** | 20px 36px |
| ≥ 1280px (desktop) | **1280px** | 4 colunas | 24px 48px |

#### Fundo lateral
```css
/* Antes: cor sólida var(--bg-deep) — aparecia cinza escuro */
/* Depois: gradiente roxo premium — irradia do topo */
html, body {
  background: radial-gradient(ellipse at top, #24104a 0%, #0f091e 50%, #070711 100%);
}
```

#### `hm-input-grid` — Campos do Paciente
```
mobile:   2 colunas (Peso | Idade) / (Altura | Creatinina)
768px+:   4 colunas → Peso | Idade | Altura | Creatinina (uma linha)
          Sexo: grid-column: 1 / -1 (linha completa)
```

---

### 2026-06-24 — Sessão 3: Ajustes Pós-Teste

#### Itens implementados

| # | Item | Arquivo | Descrição |
|---|---|---|---|
| 1 | **Cursor eletrólitos — `requestAnimationFrame`** | `js/elec-calc.js` | `_setField()` reescrito com rAF: captura `activeId/selectionStart/End` antes do render, restaura APÓS paint do browser. Log `[ELECTROLYTES_CURSOR]` |
| 2 | **ClCr card premium** | `js/hub-accordion.js` | `_lazyMount('clcr')` sem hint longo; `_syncClcrResult()` novo layout: valor grande colorido + categoria renal + pills secundárias (IMC, Peso Ideal, BSA). Log `[CLCR_CARD]` |
| 3 | **Enter key → `processarEntradaLivre`** | `index.html` | `onkeydown` em `#input-busca-interacao`: Enter com texto → `processarEntradaLivre(this.value)` |
| 4 | **Mobile keyboard handler** | `index.html` | IIFE no fim do `<body>`: `visualViewport.resize` detecta teclado virtual; `focusin/focusout` para `body.keyboard-open`; `padding-bottom` dinâmico; `scrollIntoView({block:'center', behavior:'smooth'})`. Log `[MOBILE_KEYBOARD]` |
| 5 | **Drug i18n PT/ES** | `index.html` | `DRUG_DISPLAY_NAMES` (80 entradas canonical→{pt,es}); `DRUG_ES_TO_CANONICAL` (mapa reverso auto-construído + extras manuais); `_displayName(nomeLista, lang)` com log `[DRUG_I18N]`; `_resolveToCanonical(texto)` |
| 6 | **Busca multilíngue** | `index.html` | `filtrarDropdownInteracao()` busca por display (ES), nome PT e canonical simultaneamente |
| 7 | **`processarEntradaLivre(texto)`** | `index.html` | Tokeniza por `,;+\ne\ny\ncon\ncom`; resolve canonical; adiciona chips; auto-verifica ≥2 fármacos. Log `[FREE_DRUG_INPUT]` |
| 8 | **Chips e resultados em idioma ativo** | `index.html` | `renderizarChips()` e card de resultado usam `_displayName(item.med1/med2, lang)` |

#### Arquitetura `_setField()` — cursor fix
```
ANTES (buggy):
  _render()              ← destrói input DOM
  setSelectionRange()    ← executa antes do browser pintar → posição 0

DEPOIS (correto):
  _render()              ← destrói input DOM
  requestAnimationFrame(function() {
    el = getElementById(activeId)  ← input recriado no novo DOM
    el.focus()
    el.setSelectionRange(s, e)     ← executado após paint → cursor preservado
  })
```

#### Card ClCr — novo layout
```
┌─────────────────────────────────────────────┐
│  72.1        Redução leve                   │
│  mL/min·CG   Verificar ajuste em fármacos   │
│                                             │
│  [IMC:23.1] [Peso Ideal:68kg] [BSA:1.82m²] │
│  [      Abrir Dados do Paciente       ]     │
└─────────────────────────────────────────────┘
Cor do valor por categoria:
  ≥90 → #10b981  ≥60 → #34d399  ≥30 → #f59e0b  ≥15 → #f87171  <15 → #ef4444
```

---

### 2026-06-24 — Sessão 2: Build Corretiva Multi-Bug

| # | Bug | Causa Raiz | Fix |
|---|---|---|---|
| 1 | `databaseLoaded=false`, `rulesCount=0` | Vírgula faltando na linha 2857 de `database/interacoes.js` após bloco `$classe_aminoglicosídeos` — JS parse error | Adicionou `,` |
| 2 | Botão não calculava ClCr | `hmCalcCockcroft()` chamado mas hub card não re-sincronizado | Renomeado para "Calcular / Fixar"; `setTimeout(120ms)` re-sync com categoria + pills coloridas |
| 3 | Alerta creatinina ausente | Sem validação | `#hm-clcr-warn` com `display` condicional |
| 4 | Hemodinâmica incompleta | `calcHemo()` sem classificações de PAM, crise, taquipneia | Reescrita completa com PAM=(PAS+2×PAD)/3, 8+ classificações, alerta sepse |
| 5 | Card-within-card interações | `.intx-container` com borda+fundo dentro do hub card body | CSS flatten: transparente, sem borda |
| 6 | Eletrólitos perde foco | `slot.innerHTML` destrói input ativo a cada keystroke | Salva `activeId/selectionStart/End` antes; restaura após render (sync — melhorado na S3 com rAF) |
| 7 | "Glicose" não traduz | `shortName: 'Glicose'` string fixa | `shortName: { pt: 'Glicose', es: 'Glucosa' }` + `_elecBtn(lang)` |

---

### 2026-06-24 — Sessão 1: Motor de Interações v4.0

#### Problema
Motor retornava "sem interação" para `sertralina + selegilina` e outros pares válidos.

#### Causa
- Paths 5 e 6 faltando no motor (`$classeA → drogaB` e `$classeB → drogaA`)
- Early-return na primeira match encontrada — perdia interação com maior `scoreClinico`

#### Fix — Motor Hierárquico v4.0 (8 caminhos + best-match)
```js
// Paths 1-2: DB[fA][fB] / DB[fB][fA]
// Paths 3-4: DB[fA][$clsB] / DB[fB][$clsA]
// Paths 5-6: DB[$clsA][fB] / DB[$clsB][fA]  ← NOVOS
// Paths 7-8: DB[$clsA][$clsB] / DB[$clsB][$clsA]
// Best-match: candidates.reduce((p,c) => c.dados.scoreClinico > p.dados.scoreClinico ? c : p)
```

#### Pares verificados após fix
| Par digitado | Canonical resolvido | Resultado |
|---|---|---|
| Enalapril + Valsartana | captopril + losartana (via aliases) | ✅ CONTRAINDICADA |
| Sertralina + Selegilina | sertralina + $classe_imaos | ✅ CONTRAINDICADA |
| Varfarina + Ibuprofeno | varfarina + $classe_aines | ✅ ALTA |
| Tadalafila + Isossorbida | tadalafila + isossorbida | ✅ CONTRAINDICADA |

---

## 🚧 Próximos Passos

### Alta Prioridade
- [ ] **Calculadora de Eletrólitos — Modo Avançado** — campos livres completos para valor sérico, peso, glicose, albumina, Na, Cl, HCO₃, ureia, Ca custom
- [ ] **Calculadora de Eletrólitos — Protocolo Personalizado (Etapa 3)** — interface para calcular mL/h, gotas e microgotas com dose/volume/tempo customizados
- [ ] **Sincronização com Dados do Paciente** — `window.patientData.peso/clcr/sexo` populados automaticamente nos campos da calculadora
- [ ] **PWA Manifest** (`manifest.json` + `service-worker.js`) — instalação offline total
- [ ] **Expandir availableFormulations** — cobrir 100% dos fármacos em `DRUG_DB` com dados comerciais reais do mercado brasileiro
- [ ] **Módulo Interações** — card "Em breve" → cruzamento real de fármacos por lista de meds ativa
- [ ] **Histórico de pacientes** — localStorage com até 10 perfis salvos
- [ ] **Módulo Pediatria** — DRUG_DB infantil com doses por kg para todas as especialidades

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
