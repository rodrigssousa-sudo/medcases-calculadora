/* ================================================================
   MedCases Pro — BUILD 272 — REACTIVE ENGINE (Pilares 2 e 3)
   BUILD 274 — Performance Audit: Debounce + MutationObserver restrito
   BUILD 276.1 — HOTFIX: Loop infinito eliminado
   ----------------------------------------------------------------
   Regra de Ouro: "Cálculo em Tempo Real (Atrito Zero) + Tematização
   Contextual". Este módulo:

   PILAR 2 — fecha o gap de reatividade dos inputs primários de
             Dados do Paciente (peso/idade/altura/creatinina) e da
             Fluidoterapia, disparando os motores de cálculo já
             existentes via input/change (sem esperar um botão).

   PILAR 3 — implementa o Live Dashboard do card ClCr na Home:
             grid 2x2 (ClCr · IMC · Peso Ideal · BSA) sempre visível,
             mesmo com o card colapsado, escutando window.patientData
             e os pills #hm-pv-* já calculados pelo motor renal.

   BUILD 274 — PERFORMANCE AUDIT:
   ─────────────────────────────────────────────────────────────
   PROBLEMA 1 (UI Thread Blocking):
     O MutationObserver observava document.body com { subtree: true },
     varrendo as 24k linhas do DOM a cada mutação qualquer (scroll,
     hover, classList toggle, etc.). Em dispositivos com pouca RAM,
     o callback era chamado centenas de vezes por segundo, bloqueando
     a UI thread e causando lag perceptível.

   SOLUÇÃO 1 — Observer Cirúrgico:
     Target restrito a #hub-cards-container (o wrapper dos cards do
     Hub Accordion), que é o único nó onde o lazy-mount realmente
     ocorre (hub-accordion.js injeta conteúdo aqui). Se o elemento
     ainda não existir no DOMContentLoaded, um retry com setTimeout
     aguarda seu surgimento — sem observar o body inteiro.
     Configuração: { childList: true, subtree: false } — NÃO
     observa subtree, apenas filhos diretos do container de cards,
     que é suficiente para detectar a injeção dos card bodies.

   PROBLEMA 2 (UI Thread Blocking nos inputs):
     Os listeners de 'input' disparavam _reactivePatientTick() e
     calcFluids() SINCRONAMENTE a cada tecla digitada, incluindo
     chamadas pesadas como hmCalcCockcroft() e _hmComputeDerived().
     Em dispositivos lentos, cada keystroke gerava 80-120ms de
     blocking time na main thread.

   SOLUÇÃO 2 — Debounce 280ms:
     Função utilitária _debounce(fn, delay) envolve todos os
     handlers de 'input' pesados. Delay de 280ms: suficientemente
     curto para parecer reativo (limiar de percepção ~300ms) e
     suficientemente longo para eliminar cálculos intermediários
     durante digitação rápida.
     Os listeners de 'change' (selects, toggles) NÃO são debounced
     — são eventos únicos, não contínuos; o overhead é mínimo.

   NÃO reimplementa fórmulas — reutiliza:
     - window.hmCalcCockcroft()   (Cockcroft-Gault / Ur24h)
     - window._hmComputeDerived() (IMC / Peso Ideal / BSA)
     - window.calcFluids()        (Fluidoterapia)
     - updateScoreResult()/scoreChange() (Scores — já reativos)
================================================================ */
(function () {
  'use strict';

  /* ============================================================
     §A — HELPERS
  ============================================================ */
  function $(id) { return document.getElementById(id); }

  function _fmt(val, dec) {
    if (val === null || val === undefined || isNaN(val)) return null;
    return (+val).toFixed(dec);
  }

  /* ────────────────────────────────────────────────────────────
     BUILD 274 — §A2 DEBOUNCE
     Retarda a execução de fn por `delay` ms após o último call.
     Elimina cálculos intermediários durante digitação rápida,
     protegendo a UI thread de bloqueios por keystroke.

     Uso:
       el.addEventListener('input', _debounce(handler, 280));

     O delay de 280ms foi escolhido por:
       • < 300ms → limiar de percepção humana (parecer instantâneo)
       • > 150ms → elimina 3-5 keystrokes intermediários em
                   digitação normal (4-6 chars/s)
  ──────────────────────────────────────────────────────────── */
  function _debounce(fn, delay) {
    var timer = null;
    return function () {
      var ctx  = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = null;
        fn.apply(ctx, args);
      }, delay);
    };
  }

  var DEBOUNCE_MS = 280; /* ms — ajustar aqui se necessário */

  /* ============================================================
     §B — LIVE DASHBOARD (Pilar 3)
     Atualiza os 4 quadrantes do card ClCr na Home a partir de
     window.patientData + _hmComputeDerived(). Roda sempre que os
     dados do paciente mudam — independente do card estar aberto
     ou fechado.
  ============================================================ */
  /* ── BUILD 306: syncClcrLiveDashboard atualizado para IDs home-live-* ──
     IDs anteriores (clcr-live-val-*) substituídos por (home-live-*) no HTML.
     Atualização direta via getElementById — sem observer, sem cascade.       */
  function syncClcrLiveDashboard() {
    var pd = window.patientData || {};

    var derived = (typeof window._hmComputeDerived === 'function')
      ? window._hmComputeDerived(pd)
      : {};

    var vals = {
      clcr: pd.clcr != null ? _fmt(pd.clcr, 0) : null,
      imc:  derived.imc  != null ? _fmt(derived.imc, 1)  : (pd.imc  != null ? _fmt(pd.imc, 1)  : null),
      peso: derived.pesoIdeal != null ? _fmt(derived.pesoIdeal, 1) : (pd.pesoIdeal != null ? _fmt(pd.pesoIdeal, 1) : null),
      bsa:  derived.bsa  != null ? _fmt(derived.bsa, 2)  : (pd.bsa  != null ? _fmt(pd.bsa, 2)  : null)
    };

    /* BUILD 306: IDs mapeados para home-live-* */
    var idMap = { clcr: 'home-live-clcr', imc: 'home-live-imc', peso: 'home-live-peso', bsa: 'home-live-bsa' };
    ['clcr', 'imc', 'peso', 'bsa'].forEach(function (key) {
      var el = document.getElementById(idMap[key]);
      if (!el) return;
      var v = vals[key];
      el.innerText = v || '---';
    });
  }

  /* Expõe globalmente — reutilizado por hmFixarDados()/hmLoadPatient()/hmClearPatient() */
  window._clcrLiveDashboardSync = syncClcrLiveDashboard;

  /* ============================================================
     §C — PATCH: hmClearPatient() também deve limpar o Live Dashboard
     (monkey-patch não-destrutivo — preserva comportamento original)
     BUILD 276.1 — LOOP INFINITO CORRIGIDO:
       Antes: setTimeout(_patchClearPatient, 200) sem limite → loop eterno
       se hmClearPatient nunca for definida (ex: falha de carga do módulo).
       Agora: máximo de 20 tentativas (4s total), depois desiste silenciosamente.
  ============================================================ */
  var _patchClearRetries = 0;
  var _patchClearMaxRetries = 20; /* 20 × 200ms = 4s máximo */

  function _patchClearPatient() {
    if (typeof window.hmClearPatient !== 'function') {
      _patchClearRetries++;
      if (_patchClearRetries < _patchClearMaxRetries) {
        setTimeout(_patchClearPatient, 200);
      } else {
        console.warn('[BUILD 276.1] _patchClearPatient: hmClearPatient não encontrada após 4s — patch ignorado.');
      }
      return;
    }
    /* Garante que o patch só é aplicado uma vez */
    if (window.hmClearPatient._liveDashPatched) return;
    var _origClear = window.hmClearPatient;
    window.hmClearPatient = function () {
      _origClear.apply(this, arguments);
      syncClcrLiveDashboard();
    };
    window.hmClearPatient._liveDashPatched = true;
  }

  /* ============================================================
     §D — REATIVIDADE DOS INPUTS PRIMÁRIOS (Pilar 2)
     BUILD 274: listener de 'input' envolto em _debounce(280ms)
     para proteger a UI thread de cálculos síncronos por keystroke.
     Listener de 'change' permanece direto (evento único, sem burst).
  ============================================================ */
  /* BUILD 304: hm-clcr adicionado — garante que o hidden input do CG
     (preenchido por hmCalcCockcroft via dispatchEvent) aciona o sync
     do Live Dashboard imediatamente após cada cálculo.               */
  var PATIENT_FIELDS = ['hm-weight', 'hm-age', 'hm-height', 'hm-creatinina', 'hm-clcr'];

  function _liveVal(id) {
    var el = $(id);
    if (!el) return null;
    var v = parseFloat((el.value || '').replace(',', '.'));
    return (isNaN(v) || v <= 0) ? null : v;
  }

  function _reactivePatientTick() {
    /* 1) Recalcula ClCr (Cockcroft-Gault / Ur24h) se o motor estiver pronto */
    if (typeof window.hmCalcCockcroft === 'function') {
      window.hmCalcCockcroft();
    }

    /* 2) Atualiza window.patientData com os valores brutos (sem exigir "Fixar") */
    var data = {
      weight: _liveVal('hm-weight'),
      age:    _liveVal('hm-age'),
      height: _liveVal('hm-height'),
      creatinine: _liveVal('hm-creatinina'),
      clcr: (function () {
        var hid = $('hm-clcr');
        var v = hid ? parseFloat(hid.value) : NaN;
        return isNaN(v) ? null : v;
      })()
    };

    var derived = (typeof window._hmComputeDerived === 'function') ? window._hmComputeDerived(data) : {};

    window.patientData = Object.assign(window.patientData || {}, {
      weight: data.weight,
      age:    data.age,
      height: data.height,
      creatinine: data.creatinine,
      clcr:   data.clcr,
      imc:       derived.imc       != null ? derived.imc       : (window.patientData ? window.patientData.imc : null),
      pesoIdeal: derived.pesoIdeal != null ? derived.pesoIdeal : (window.patientData ? window.patientData.pesoIdeal : null),
      bsa:       derived.bsa       != null ? derived.bsa       : (window.patientData ? window.patientData.bsa : null)
    });

    /* 3) Atualiza as pills inline do card "Dados do Paciente" */
    if (typeof window._hmUpdatePills === 'function') {
      window._hmUpdatePills(window.patientData);
    }

    /* 4) Live Dashboard da Home — Pilar 3 */
    syncClcrLiveDashboard();
  }

  /* BUILD 274: versão debounced do tick — usada nos listeners de 'input' */
  var _reactivePatientTickDebounced = _debounce(_reactivePatientTick, DEBOUNCE_MS);

  function _wirePatientReactivity() {
    PATIENT_FIELDS.forEach(function (id) {
      var el = $(id);
      if (!el || el.dataset.univReactive === '1') return;
      el.dataset.univReactive = '1';
      /* BUILD 274: 'input' → debounced (protege keystroke burst)
                   'change' → direto (evento único, sem burst) */
      el.addEventListener('input',  _reactivePatientTickDebounced);
      el.addEventListener('change', _reactivePatientTick);
    });
  }

  /* ============================================================
     §E — FLUIDOTERAPIA — Reactive Engine (Pilar 2)
     BUILD 274: listener de 'input' do fluid-temp envolto em
     _debounce(280ms). Os listeners de 'change' (selects) permanecem
     diretos — eventos únicos sem burst de keystrokes.
  ============================================================ */
  function _wireFluidReactivity() {
    var typeEl = $('fluid-type');
    var dehyEl = $('fluid-dehy');
    var tempEl = $('fluid-temp');

    if (typeEl && !typeEl.dataset.univReactive) {
      typeEl.dataset.univReactive = '1';
      /* 'change' em select — evento único, sem debounce */
      typeEl.addEventListener('change', function () {
        if (typeof window.fluidModeChange === 'function') window.fluidModeChange();
        if (typeof window.calcFluids === 'function') window.calcFluids();
      });
    }
    if (dehyEl && !dehyEl.dataset.univReactive) {
      dehyEl.dataset.univReactive = '1';
      /* 'change' em select — evento único, sem debounce */
      dehyEl.addEventListener('change', function () {
        if (typeof window.calcFluids === 'function') window.calcFluids();
      });
    }
    if (tempEl && !tempEl.dataset.univReactive) {
      tempEl.dataset.univReactive = '1';
      /* BUILD 274: 'input' em campo numérico → debounced */
      tempEl.addEventListener('input', _debounce(function () {
        if (typeof window.calcFluids === 'function') window.calcFluids();
      }, DEBOUNCE_MS));
    }

    /* Toggle de taquipneia já chama fluidToggleTaqui() via onclick — faz patch
       para também recalcular instantaneamente após a troca de estado. */
    if (typeof window.fluidToggleTaqui === 'function' && !window._univFluidTaquiPatched) {
      window._univFluidTaquiPatched = true;
      var _origTaqui = window.fluidToggleTaqui;
      window.fluidToggleTaqui = function () {
        _origTaqui.apply(this, arguments);
        if (typeof window.calcFluids === 'function') window.calcFluids();
      };
    }
  }

  /* ============================================================
     §F — MUTATIONOBSERVER — BUILD 274: ALVO CIRÚRGICO
                             BUILD 276.1: LOOP INFINITO ELIMINADO
     ─────────────────────────────────────────────────────────────
     ANTES (BUILD 272):
       mo.observe(document.body, { childList: true, subtree: true })
       → Observava o body inteiro (24k linhas de DOM) com subtree.
         Qualquer mutação em qualquer nó disparava o callback,
         incluindo classList toggles de hover, focus, scroll, etc.
         Em dispositivos lentos: centenas de callbacks/segundo.

     BUILD 274:
       Target: #hub-cards-container (container dos cards do Hub)
         → Único nó onde o lazy-mount real ocorre.
       { childList: true, subtree: false }
         → Só monitora filhos DIRETOS do container.

     BUILD 276.1 — CORREÇÕES DE LOOP:
       1. _moMaxRetries reduzido: 10 → 3 (máx 900ms, não 3s).
          O body do HTML está sempre disponível no DOMContentLoaded;
          se o container não existe em 3 tentativas, não vai existir.
       2. Fallback no body: NÃO dispara _wireAll() no boot.
          O callback verifica window._appBootComplete antes de agir,
          eliminando o risco de mutações fantasmas abrindo accordions.
       3. _wireAll() removido do caminho de inicialização do observer —
          só é chamado por mutações REAIS após boot completo.
  ============================================================ */
  function _wireAll() {
    _wirePatientReactivity();
    _wireFluidReactivity();
    /* BUILD 276.1: syncClcrLiveDashboard só no boot se appBootComplete;
       caso contrário a chamada pode gerar mutação no DOM que realimenta
       o observer antes do boot terminar. */
    if (window._appBootComplete) {
      syncClcrLiveDashboard();
    }
  }

  var _moRetryCount = 0;
  var _moMaxRetries = 3;  /* BUILD 276.1: reduzido de 10 → 3 (máx 900ms) */
  var _mo = null;         /* referência ao MutationObserver ativo */

  function _setupObserver() {
    /* Destrói observer anterior se já existia (evita duplicatas em retry) */
    if (_mo) { _mo.disconnect(); _mo = null; }

    /* Alvo preferencial: container dos cards do Hub Accordion */
    var target = document.getElementById('hub-cards-container');

    if (!target) {
      _moRetryCount++;
      if (_moRetryCount <= _moMaxRetries) {
        /* Container ainda não montado — aguarda e tenta novamente */
        setTimeout(_setupObserver, 300);
        return;
      }
      /* BUILD 276.1 — FALLBACK SEGURO: após 3 tentativas (900ms),
         registra aviso e NÃO instala observer em nenhum alvo alternativo.
         Isso evita que o body inteiro seja observado e gere mutações
         fantasmas que acionem _wireAll() durante o boot, potencialmente
         abrindo o card "Dados do Paciente" via chain calcFluids/hubOpen.
         O re-wire manual de inputs (patient + fluids) já foi feito em
         _init() via _wireAll() direto — o observer serve apenas para
         capturar lazy-mounts futuros, que não ocorrem se o container
         nunca existiu. */
      console.warn('[BUILD 276.1] #hub-cards-container não encontrado após 3 tentativas. ' +
                   'Observer NÃO instalado (fail-safe ativo). ' +
                   'Re-wire de inputs já aplicado via _wireAll() no init.');
      return; /* ← PARA AQUI — sem observer em fallback */
    }

    _mo = new MutationObserver(function (mutations) {
      /* BUILD 276.1: BOOT GUARD no callback do observer.
         Se o boot ainda não completou, ignora mutações completamente —
         evita que lazy-mounts do hub-accordion.js no init disparem
         _wireAll() → syncClcrLiveDashboard() → calcFluids() → hubOpen('patient'). */
      if (!window._appBootComplete) return;

      /* Filtra: só re-wira se alguma mutação adicionou nós novos
         (lazy-mount real). Mutações de atributos/characterData são ignoradas. */
      var hasNewNodes = mutations.some(function (m) {
        return m.addedNodes.length > 0;
      });
      if (hasNewNodes) { _wireAll(); }
    });

    /* BUILD 274: subtree: false — não varre árvore interna dos cards */
    _mo.observe(target, { childList: true, subtree: false });

    console.log('[BUILD 274/276.1] MutationObserver ativo — target: ' +
                '#' + target.id +
                ' | subtree: false | debounce: ' + DEBOUNCE_MS + 'ms' +
                ' | boot-guard: ativo');
  }

  /* ============================================================
     §G — INIT
     BUILD 276.1: _wireAll() no init só conecta listeners de input
     (patient + fluids). syncClcrLiveDashboard() é adiado para após
     o boot para não disparar mutações fantasmas durante a init.
  ============================================================ */
  function _init() {
    /* Conecta listeners de input imediatamente (sem cálculos) */
    _wirePatientReactivity();
    _wireFluidReactivity();

    /* Patch do hmClearPatient — limitado a 20 tentativas (4s) */
    _patchClearPatient();

    /* Instala MutationObserver — limitado a 3 retries (900ms), sem fallback body */
    _setupObserver();

    /* BUILD 276.1: Live Dashboard inicial adiado para após boot completo.
       Evita que syncClcrLiveDashboard() no boot, com patientData vazio,
       gere mutação no DOM que realimente o observer antes de _appBootComplete. */
    var _dashInitAttempts = 0;
    var _dashInitTimer = setInterval(function() {
      _dashInitAttempts++;
      if (window._appBootComplete) {
        clearInterval(_dashInitTimer);
        syncClcrLiveDashboard();
        console.log('[BUILD 276.1] Live Dashboard sincronizado após boot completo.');
      } else if (_dashInitAttempts > 25) { /* máx 5s (25 × 200ms) */
        clearInterval(_dashInitTimer);
        console.warn('[BUILD 276.1] Live Dashboard: boot não completou em 5s — sync ignorado.');
      }
    }, 200);

    console.log('[BUILD 272/274/276.1] Reactive Engine ativo — ' +
                'Pilar 2 (zero-friction + debounce ' + DEBOUNCE_MS + 'ms) + ' +
                'Pilar 3 (Live Dashboard ClCr) + ' +
                'Observer cirúrgico (#hub-cards-container) + ' +
                'Loop infinito eliminado (retries: 3×300ms / patch: 20×200ms).');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }
})();
