/* ================================================================
   MedCases Pro — BUILD 272 — REACTIVE ENGINE (Pilares 2 e 3)
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

  /* ============================================================
     §B — LIVE DASHBOARD (Pilar 3)
     Atualiza os 4 quadrantes do card ClCr na Home a partir de
     window.patientData + _hmComputeDerived(). Roda sempre que os
     dados do paciente mudam — independente do card estar aberto
     ou fechado.
  ============================================================ */
  function syncClcrLiveDashboard() {
    var pd = window.patientData || {};

    var quads = [
      { val: pd.weight && pd.height ? pd.clcr : pd.clcr, id: 'clcr', dec: 0 },
    ];

    var derived = (typeof window._hmComputeDerived === 'function')
      ? window._hmComputeDerived(pd)
      : {};

    var vals = {
      clcr: pd.clcr != null ? _fmt(pd.clcr, 0) : null,
      imc:  derived.imc  != null ? _fmt(derived.imc, 1)  : (pd.imc  != null ? _fmt(pd.imc, 1)  : null),
      peso: derived.pesoIdeal != null ? _fmt(derived.pesoIdeal, 1) : (pd.pesoIdeal != null ? _fmt(pd.pesoIdeal, 1) : null),
      bsa:  derived.bsa  != null ? _fmt(derived.bsa, 2)  : (pd.bsa  != null ? _fmt(pd.bsa, 2)  : null)
    };

    ['clcr', 'imc', 'peso', 'bsa'].forEach(function (key) {
      var el = $('clcr-live-v-' + key);
      if (!el) return;
      var v = vals[key];
      if (v) {
        el.textContent = v;
        el.classList.remove('is-empty');
      } else {
        el.textContent = '---';
        el.classList.add('is-empty');
      }
    });
  }

  /* Expõe globalmente — reutilizado por hmFixarDados()/hmLoadPatient()/hmClearPatient() */
  window._clcrLiveDashboardSync = syncClcrLiveDashboard;

  /* ============================================================
     §C — PATCH: hmClearPatient() também deve limpar o Live Dashboard
     (monkey-patch não-destrutivo — preserva comportamento original)
  ============================================================ */
  function _patchClearPatient() {
    if (typeof window.hmClearPatient !== 'function') {
      return setTimeout(_patchClearPatient, 200);
    }
    var _origClear = window.hmClearPatient;
    window.hmClearPatient = function () {
      _origClear.apply(this, arguments);
      syncClcrLiveDashboard();
    };
  }

  /* ============================================================
     §D — REATIVIDADE DOS INPUTS PRIMÁRIOS (Pilar 2)
     hm-weight / hm-age / hm-height / hm-creatinina hoje só chamam
     hmUpdatePatientCardColor() (cosmético). Passamos a também:
       1) Disparar hmCalcCockcroft() (ClCr em tempo real)
       2) Atualizar window.patientData + as pills (_hmUpdatePills)
       3) Sincronizar o Live Dashboard da Home
     Sem precisar clicar em "Calcular / Fixar".
  ============================================================ */
  var PATIENT_FIELDS = ['hm-weight', 'hm-age', 'hm-height', 'hm-creatinina'];

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

  function _wirePatientReactivity() {
    PATIENT_FIELDS.forEach(function (id) {
      var el = $(id);
      if (!el || el.dataset.univReactive === '1') return;
      el.dataset.univReactive = '1';
      el.addEventListener('input', _reactivePatientTick);
      el.addEventListener('change', _reactivePatientTick);
    });
  }

  /* ============================================================
     §E — FLUIDOTERAPIA — Reactive Engine (Pilar 2)
     Remove a dependência do botão "Calcular Fluidos": dispara
     calcFluids() a cada input/change relevante, com fade-in via
     CSS (#fluid-result:not(:empty) — ver build272 CSS §7).
  ============================================================ */
  function _wireFluidReactivity() {
    var typeEl = $('fluid-type');
    var dehyEl = $('fluid-dehy');
    var tempEl = $('fluid-temp');

    if (typeEl && !typeEl.dataset.univReactive) {
      typeEl.dataset.univReactive = '1';
      typeEl.addEventListener('change', function () {
        if (typeof window.fluidModeChange === 'function') window.fluidModeChange();
        if (typeof window.calcFluids === 'function') window.calcFluids();
      });
    }
    if (dehyEl && !dehyEl.dataset.univReactive) {
      dehyEl.dataset.univReactive = '1';
      dehyEl.addEventListener('change', function () {
        if (typeof window.calcFluids === 'function') window.calcFluids();
      });
    }
    if (tempEl && !tempEl.dataset.univReactive) {
      tempEl.dataset.univReactive = '1';
      tempEl.addEventListener('input', function () {
        if (typeof window.calcFluids === 'function') window.calcFluids();
      });
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
     §F — MUTATIONOBSERVER
     Os campos de paciente/fluidoterapia são montados via lazy-mount
     (hub-accordion.js) — podem não existir no DOMContentLoaded.
     Observamos o body e re-tentamos o wiring sempre que o DOM muda.
  ============================================================ */
  function _wireAll() {
    _wirePatientReactivity();
    _wireFluidReactivity();
    syncClcrLiveDashboard();
  }

  function _init() {
    _wireAll();
    _patchClearPatient();

    var mo = new MutationObserver(function () { _wireAll(); });
    mo.observe(document.body, { childList: true, subtree: true });

    console.log('[BUILD 272] Reactive Engine ativo — Pilar 2 (zero-friction) + Pilar 3 (Live Dashboard ClCr).');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }
})();
