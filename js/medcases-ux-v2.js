/* ================================================================
   MedCases UX v2 — Módulo JavaScript Complementar
   ----------------------------------------------------------------
   Diretriz 3: Motor de arredondamento por formulação comercial
               snapToFormulation(rawMg, formulations)
               Injetado no inline result de hmShowInlineResult()

   Diretriz 6: Botão "Copiar Prescrição" formatado para WhatsApp
               buildPrescriptionString(drugId, hero, snapResult)
               hmCopyPrescription(drugId)

   ❗ Este módulo NÃO redefine funções já existentes.
      Ele *estende* hmShowInlineResult via monkey-patch após
      DOMContentLoaded para adicionar os 2 blocos de UI.
================================================================ */

(function() {
  'use strict';

  /* ============================================================
     §A — BANCO DE FORMULAÇÕES COMERCIAIS
     availableFormulations: mapa drugId → { vo: [], ev: [] }
     Valores em mg (dose unitária mais comum por comprimido/ampola).
     Cobertura inicial dos fármacos mais consultados.
  ============================================================ */
  window.AVAILABLE_FORMULATIONS = {
    /* ── Penicilinas / Aminopenicilinas ── */
    'amoxicilina': {
      vo: [250, 500, 875],
      ev: []
    },
    'amoxicilina_clavulanato': {
      vo: [250, 400, 500, 625, 875],
      ev: [1000, 2000]
    },
    'ampicilina': {
      vo: [250, 500],
      ev: [500, 1000, 2000]
    },
    'ampicilina_sulbactam': {
      vo: [],
      ev: [1500, 3000]       /* ampicilina 1g/2g + sulbactam 500mg/1g */
    },
    'piperacilina_tazobactam': {
      vo: [],
      ev: [2250, 3375, 4500] /* pip/tazo 2g/0,25g | 3g/0,375g | 4g/0,5g */
    },
    /* ── Cefalosporinas ── */
    'cefalexina': {
      vo: [250, 500],
      ev: []
    },
    'cefazolina': {
      vo: [],
      ev: [1000, 2000]
    },
    'cefuroxima': {
      vo: [250, 500],
      ev: [750, 1500]
    },
    'ceftriaxona': {
      vo: [],
      ev: [500, 1000, 2000]
    },
    'cefepime': {
      vo: [],
      ev: [500, 1000, 2000]
    },
    'ceftazidima': {
      vo: [],
      ev: [500, 1000, 2000]
    },
    'ceftazidima_avibactam': {
      vo: [],
      ev: [2000]             /* 2g ceftazidima + 0,5g avibactam */
    },
    'ceftolozano_tazobactam': {
      vo: [],
      ev: [1000]             /* 1g + 0,5g por frasco */
    },
    /* ── Carbapenêmicos ── */
    'meropenem': {
      vo: [],
      ev: [500, 1000]
    },
    'imipenem_cilastatina': {
      vo: [],
      ev: [250, 500]
    },
    'ertapenem': {
      vo: [],
      ev: [1000]
    },
    /* ── Glicopeptídeos / Lipopeptídeos ── */
    'vancomicina': {
      vo: [125, 250],
      ev: [500, 750, 1000]
    },
    'teicoplanina': {
      vo: [],
      ev: [200, 400]
    },
    'daptomicina': {
      vo: [],
      ev: [350, 500]
    },
    /* ── Oxazolidinonas ── */
    'linezolida': {
      vo: [600],
      ev: [600]
    },
    /* ── Fluoroquinolonas ── */
    'ciprofloxacino': {
      vo: [250, 500, 750],
      ev: [200, 400]
    },
    'levofloxacino': {
      vo: [250, 500, 750],
      ev: [250, 500, 750]
    },
    'moxifloxacino': {
      vo: [400],
      ev: [400]
    },
    /* ── Macrolídeos ── */
    'azitromicina': {
      vo: [250, 500],
      ev: [500]
    },
    'claritromicina': {
      vo: [250, 500],
      ev: [500]
    },
    /* ── Tetraciclinas ── */
    'doxiciclina': {
      vo: [100],
      ev: [100]
    },
    'tigeciclina': {
      vo: [],
      ev: [50]
    },
    /* ── Aminoglicosídeos ── */
    'amicacina': {
      vo: [],
      ev: [100, 250, 500]
    },
    'gentamicina': {
      vo: [],
      ev: [10, 40, 80]      /* mg/mL → frascos típicos */
    },
    'tobramicina': {
      vo: [],
      ev: [80]
    },
    /* ── Polimixinas ── */
    'colistina': {
      vo: [],
      ev: [150]             /* 150mg base (2MUI) */
    },
    'polimixina_b': {
      vo: [],
      ev: [500000]          /* 500.000 UI */
    },
    /* ── Sulfonamidas / Trimetoprima ── */
    'sulfametoxazol_trimetoprima': {
      vo: [400, 800],       /* SMX/TMP 400/80 ou 800/160 */
      ev: [400, 800]
    },
    /* ── Nitroimidazóis ── */
    'metronidazol': {
      vo: [250, 400, 500],
      ev: [500]
    },
    /* ── Antifúngicos ── */
    'fluconazol': {
      vo: [50, 100, 150, 200],
      ev: [200, 400]
    },
    'voriconazol': {
      vo: [50, 200],
      ev: [200]
    },
    'caspofungina': {
      vo: [],
      ev: [50, 70]
    },
    'micafungina': {
      vo: [],
      ev: [50, 100]
    },
    'anfotericina_b_lipossomal': {
      vo: [],
      ev: [50]
    }
  };

  /* ============================================================
     §B — snapToFormulation(rawMg, formulationsArr)
     Dado um valor bruto (mg) calculado por peso, retorna o valor
     comercial disponível mais próximo.

     Retorna:
       {
         snapped:     number  — valor comercial ajustado (mg)
         original:    number  — valor original calculado
         wasAdjusted: bool    — true se houve ajuste
         delta:       number  — diferença em mg
         pct:         number  — % de variação
       }
     ou null se formulationsArr for vazio/inválido.
  ============================================================ */
  window.snapToFormulation = function(rawMg, formulationsArr) {
    if (!Array.isArray(formulationsArr) || !formulationsArr.length) return null;
    if (typeof rawMg !== 'number' || isNaN(rawMg) || rawMg <= 0) return null;

    const sorted = [...formulationsArr].sort((a, b) => a - b);

    /* Encontra o valor mais próximo */
    let closest = sorted[0];
    let minDist = Math.abs(rawMg - sorted[0]);
    for (const v of sorted) {
      const d = Math.abs(rawMg - v);
      if (d < minDist) { minDist = d; closest = v; }
    }

    const delta = closest - rawMg;
    const pct   = Math.abs((delta / rawMg) * 100);
    const wasAdjusted = Math.abs(delta) > 0.01; /* < 0.01 mg = mesmo valor */

    return {
      snapped:     closest,
      original:    rawMg,
      wasAdjusted: wasAdjusted,
      delta:       Math.round(delta * 10) / 10,
      pct:         Math.round(pct * 10) / 10
    };
  };

  /* ============================================================
     §C — buildPrescriptionString(drugName, hero, snapResult, lang)
     Monta string formatada para WhatsApp com quebras \n
     e marcadores bold (*texto*).
  ============================================================ */
  window.buildPrescriptionString = function(drugName, hero, snapResult, lang) {
    const isES = (lang === 'es');
    const now  = new Date();
    const dateStr = now.toLocaleDateString(isES ? 'es' : 'pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });
    const timeStr = now.toLocaleTimeString(isES ? 'es' : 'pt-BR', {
      hour: '2-digit', minute: '2-digit'
    });

    /* Linha do paciente */
    const ageLbl    = hero.age    != null ? `${hero.age} ${isES ? 'años' : 'anos'}` : '';
    const weightLbl = hero.weight != null ? `${hero.weight} kg` : '';
    const clcrLbl   = hero.clcr   != null
      ? `ClCr ${hero.clcr} mL/min`
      : (isES ? 'ClCr não informado' : 'ClCr não informado');
    const sexLbl    = hero.isFemale
      ? (isES ? 'Fem.' : 'Fem.')
      : (isES ? 'Masc.' : 'Masc.');
    const pregLbl   = hero.isPregnant
      ? (isES ? ' | Gestante' : ' | Gestante')
      : '';

    const patientParts = [ageLbl, weightLbl, clcrLbl, sexLbl].filter(Boolean);
    const patientLine  = patientParts.join(' | ') + pregLbl;

    /* Dose principal (usa snap se disponível) */
    let doseLbl;
    if (snapResult && snapResult.wasAdjusted) {
      doseLbl = `${snapResult.snapped} mg${hero.heroVia ? ' ' + hero.heroVia : ''}${hero.heroFreq ? ' — ' + hero.heroFreq : ''}`;
    } else {
      doseLbl = [hero.heroDose, hero.heroVia, hero.heroFreq ? `— ${hero.heroFreq}` : ''].filter(Boolean).join(' ');
    }
    if (!doseLbl || doseLbl.trim() === '') doseLbl = '—';

    /* Obs clínica da faixa atual */
    let obsLbl = '';
    if (hero.renalDados) {
      const rd = hero.renalDados;
      if (rd.obs && typeof rd.obs === 'string') {
        obsLbl = rd.obs.replace(/<[^>]*>/g, '').substring(0, 200);
      }
    }

    /* Alerta gestante */
    const pregAlert = hero.pregAlert || '';

    /* Faixa renal */
    const renalLbl = hero.renalFaixa
      ? `${isES ? 'Ajuste Renal:' : 'Ajuste Renal:'} ${hero.renalFaixa}`
      : '';

    /* === Monta string === */
    const lines = [];
    lines.push(`*MEDCASES — ${drugName.toUpperCase()}*`);
    lines.push('----------------------------------');
    lines.push(`👤 *${isES ? 'Paciente:' : 'Paciente:'}* ${patientLine}`);
    lines.push('----------------------------------');
    lines.push(`🎯 *${isES ? 'Dosis recomendada:' : 'Dose Recomendada:'}* ${doseLbl}`);

    if (snapResult && snapResult.wasAdjusted) {
      lines.push(`   _(${isES ? 'Calculado:' : 'Calculado:'} ${snapResult.original.toFixed(0)} mg → ${isES ? 'Ajustado:' : 'Ajustado:'} ${snapResult.snapped} mg — formulação comercial)_`);
    }

    if (renalLbl) {
      lines.push(`🫘 *${renalLbl}*`);
    }

    if (obsLbl) {
      lines.push(`📌 *${isES ? 'Conducta/Alerta:' : 'Conduta/Alerta:'}* ${obsLbl}`);
    }

    if (pregAlert) {
      lines.push(`⚠️ *${isES ? 'Embarazo:' : 'Gestação:'}* ${pregAlert.replace(/<[^>]*>/g, '')}`);
    }

    lines.push('----------------------------------');
    lines.push(`_${isES ? 'Prescripción generada vía Central MedCases' : 'Prescrição gerada via Central MedCases'}_`);
    lines.push(`_${dateStr} ${timeStr}_`);

    return lines.join('\n');
  };

  /* ============================================================
     §D — _buildSnapHtml(hero, drugId, lang)
     Constrói o bloco HTML de formulação comercial para injeção
     no inline result. Retorna string HTML ou '' se inaplicável.
  ============================================================ */
  function _buildSnapHtml(hero, drugId, lang) {
    const isES = (lang === 'es');

    /* Só exibe se tiver dose hero numérica (pediátrico ou adulto com peso) */
    if (!hero || !hero.heroDose) return '';

    /* Tenta extrair valor numérico da dose hero */
    const rawMatch = String(hero.heroDose).match(/[\d,]+\.?\d*/);
    if (!rawMatch) return '';
    const rawMg = parseFloat(rawMatch[0].replace(',', '.'));
    if (isNaN(rawMg) || rawMg <= 0) return '';

    /* Detecta via da dose (VO ou EV) */
    const viaKey = (hero.heroVia || '').toLowerCase().includes('ev') ? 'ev'
                 : (hero.heroVia || '').toLowerCase().includes('vo') ? 'vo'
                 : 'vo'; /* default VO */

    /* Busca formulações: por id do drug ou tenta match parcial de nome */
    const allForms = window.AVAILABLE_FORMULATIONS || {};
    let forms = allForms[drugId];

    /* Fallback: match parcial por substring do drugId */
    if (!forms) {
      const keys = Object.keys(allForms);
      const match = keys.find(k => drugId.includes(k) || k.includes(drugId));
      if (match) forms = allForms[match];
    }

    if (!forms) return '';
    const arr = forms[viaKey] || forms.vo || forms.ev || [];
    if (!arr.length) return '';

    const snap = window.snapToFormulation(rawMg, arr);
    if (!snap) return '';

    /* Armazena snap no estado global para o buildPrescriptionString */
    window._lastSnapResult = snap;

    const viaLabel = (hero.heroVia || 'VO').toUpperCase();

    if (!snap.wasAdjusted) {
      /* Dose exata disponível comercialmente */
      return `
        <div class="hm-snap-formulation hm-snap-exact">
          <span class="hm-snap-badge">
            <i class="fa-solid fa-check-circle"></i>
            ${snap.snapped} mg
            <span class="hm-snap-via">${viaLabel}</span>
          </span>
          <span class="hm-snap-info">
            <i class="fa-solid fa-circle-check"></i>
            ${isES ? 'Formulación comercial disponible exacta.' : 'Formulação comercial exata disponível.'}
          </span>
        </div>`;
    }

    /* Dose ajustada */
    const direction = snap.delta > 0
      ? (isES ? '↑ arredondado para cima' : '↑ arredondado p/ cima')
      : (isES ? '↓ arredondado para baixo' : '↓ arredondado p/ baixo');

    return `
      <div class="hm-snap-formulation">
        <span class="hm-snap-badge">
          <i class="fa-solid fa-tablets"></i>
          ${snap.snapped} mg
          <span class="hm-snap-via">${viaLabel}</span>
        </span>
        <span class="hm-snap-info">
          <i class="fa-solid fa-circle-info"></i>
          <span>
            ${isES ? 'Calculado:' : 'Calculado:'} <strong>${snap.original.toFixed(0)} mg</strong>
            → ${isES ? 'Ajustado:' : 'Ajustado:'} <strong>${snap.snapped} mg</strong>
            (${direction}, ${snap.pct}%)
          </span>
        </span>
      </div>`;
  }

  /* ============================================================
     §E — _buildCopyBtnHtml(drugId)
     Retorna o HTML do botão de copiar prescrição.
  ============================================================ */
  function _buildCopyBtnHtml(drugId, lang) {
    const isES = (lang === 'es');
    return `
      <div class="hm-copy-rx-wrap">
        <button class="hm-copy-rx-btn" onclick="hmCopyPrescription('${drugId}')" aria-label="${isES ? 'Copiar prescripción' : 'Copiar prescrição'}">
          <i class="fa-brands fa-whatsapp"></i>
          ${isES ? 'Copiar Prescrição' : 'Copiar Prescrição'}
        </button>
      </div>`;
  }

  /* ============================================================
     §F — hmCopyPrescription(drugId)
     Copiado via navigator.clipboard.writeText.
     Feedback visual imediato no botão (1.8s).
  ============================================================ */
  window.hmCopyPrescription = function(drugId) {
    const lang  = window.currentLang || 'pt';
    const isES  = (lang === 'es');
    const db    = window.DRUG_DB || [];
    const drug  = db.find(d => d.id === drugId);
    if (!drug) return;

    const pd   = window.patientData || null;
    const hero = (pd && typeof _fdResolveHeroPatient === 'function')
      ? _fdResolveHeroPatient(drug, pd, lang)
      : {
          heroDose: '—', heroFreq: '', heroVia: '',
          age: null, weight: null, clcr: null,
          isFemale: false, isPregnant: false,
          renalFaixa: null, renalDados: null, pregAlert: null
        };

    /* Nome do fármaco */
    const dName = (drug.name && typeof drug.name === 'object')
      ? (drug.name[lang] || drug.name.pt || drugId)
      : (drug.name || drugId);

    /* Usa o último snap calculado (gerado por _buildSnapHtml) */
    const snap = window._lastSnapResult || null;

    const text = window.buildPrescriptionString(dName, hero, snap, lang);

    /* Copia para clipboard */
    const btn = document.querySelector(`.hm-copy-rx-btn[onclick*="${drugId}"]`);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => _hmCopyFeedback(btn, isES))
        .catch(() => _hmCopyFallback(text, btn, isES));
    } else {
      _hmCopyFallback(text, btn, isES);
    }
  };

  /* Feedback visual no botão após cópia bem-sucedida */
  function _hmCopyFeedback(btn, isES) {
    if (!btn) return;
    const original = btn.innerHTML;
    btn.classList.add('is-copied');
    btn.innerHTML = `<i class="fa-solid fa-check"></i> ${isES ? '¡Copiado!' : 'Copiado!'}`;
    setTimeout(() => {
      btn.classList.remove('is-copied');
      btn.innerHTML = original;
    }, 1800);
  }

  /* Fallback: seleciona texto num textarea oculto */
  function _hmCopyFallback(text, btn, isES) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      _hmCopyFeedback(btn, isES);
    } catch(e) {
      /* silencia */
    }
  }

  /* ============================================================
     §G — MONKEY-PATCH DE hmShowInlineResult
     Após DOMContentLoaded (ou imediatamente se já disparou),
     estende a função existente para injetar os blocos de:
       • Formulação comercial (§D)  → após .hm-inline-dose-hero
       • Botão copiar (§E)          → antes de .hm-inline-detail-btn
  ============================================================ */
  function _patchHmShowInlineResult() {
    if (typeof window.hmShowInlineResult !== 'function') {
      /* Ainda não definida — tenta novamente em 200ms */
      setTimeout(_patchHmShowInlineResult, 200);
      return;
    }

    const _original = window.hmShowInlineResult;

    window.hmShowInlineResult = function(drugId) {
      /* Limpa snap anterior */
      window._lastSnapResult = null;

      /* Chama implementação original */
      _original.call(this, drugId);

      /* Aguarda o DOM ser injetado (a função original é síncrona,
         então o DOM já está pronto aqui) */
      const resultEl = document.getElementById('hm-drug-result');
      if (!resultEl || resultEl.style.display === 'none') return;

      const lang  = window.currentLang || 'pt';
      const pd    = window.patientData || null;
      const db    = window.DRUG_DB || [];
      const drug  = db.find(d => d.id === drugId);
      if (!drug) return;

      const hasPatient = pd && (pd.weight != null || pd.age != null || pd.clcr != null);

      /* ── Botão copiar ── sempre presente */
      const copyHtml = _buildCopyBtnHtml(drugId, lang);

      if (hasPatient && typeof _fdResolveHeroPatient === 'function') {
        const hero = _fdResolveHeroPatient(drug, pd, lang);

        /* ── Snap de formulação ── */
        const snapHtml = _buildSnapHtml(hero, drugId, lang);

        if (snapHtml) {
          /* Injeta após .hm-inline-dose-hero (e após calcHtml se presente) */
          const doseHeroEl = resultEl.querySelector('.hm-inline-dose-hero');
          const calcRowEl  = resultEl.querySelector('.hm-inline-calc-row');
          const insertAfter = calcRowEl || doseHeroEl;

          if (insertAfter) {
            const snapDiv = document.createElement('div');
            snapDiv.innerHTML = snapHtml;
            /* Insere antes do elemento seguinte */
            insertAfter.insertAdjacentHTML('afterend', snapHtml);
          }
        }
      }

      /* ── Injeta botão copiar antes do .hm-inline-detail-btn ── */
      const detailBtn = resultEl.querySelector('.hm-inline-detail-btn');
      if (detailBtn) {
        detailBtn.insertAdjacentHTML('beforebegin', copyHtml);
      } else {
        /* Fallback: appenda ao container */
        const container = resultEl.querySelector('.hm-inline-result');
        if (container) container.insertAdjacentHTML('beforeend', copyHtml);
      }
    };
  }

  /* ============================================================
     §H — COCKCROFT-GAULT: delegado ao index.html (inline)
     A função window.hmCalcCockcroft é definida diretamente no
     DOMContentLoaded do index.html para garantir execução
     independente de ordem de carregamento de scripts externos.
     Este módulo apenas garante que os listeners estão ativos.
  ============================================================ */

  /* ============================================================
     §J — PULL-TO-REFRESH (gestos touch)
     Detecta arrastar para baixo no topo do scroll-content e
     executa window.location.reload() após threshold de 80px.
     Um indicador visual sobe do topo durante o gesto.
  ============================================================ */
  function _initPullToRefresh() {
    /* REQ-6: Pull-to-Refresh SILENCIOSO — sem banner "Atualizando..."
       O indicador visual foi removido. O reload ocorre em segundo plano
       após threshold de 80px de arraste, com haptic feedback mantido. */
    const scrollEl = document.getElementById('scroll-content') || document.body;

    /* Elemento PTR mínimo (invisível — só para manter estrutura) */
    const ptr = document.createElement('div');
    ptr.id = 'ptr-indicator';
    ptr.style.cssText = 'display:none!important;height:0!important;overflow:hidden!important;pointer-events:none!important;';
    document.body.appendChild(ptr);

    const THRESHOLD = 80;
    let _startY    = 0;
    let _pulling   = false;
    let _triggered = false;

    function _isAtTop() {
      if (scrollEl === document.body) {
        return (window.scrollY || document.documentElement.scrollTop) <= 2;
      }
      return scrollEl.scrollTop <= 2;
    }

    scrollEl.addEventListener('touchstart', function(e) {
      if (!_isAtTop()) return;
      _startY    = e.touches[0].clientY;
      _pulling   = true;
      _triggered = false;
    }, { passive: true });

    scrollEl.addEventListener('touchmove', function(e) {
      if (!_pulling) return;
      const dy = e.touches[0].clientY - _startY;
      if (dy <= 0) { _pulling = false; return; }

      if (dy >= THRESHOLD && !_triggered) {
        _triggered = true;
        if (navigator.vibrate) navigator.vibrate(30); /* haptic silencioso */
      }
    }, { passive: true });

    scrollEl.addEventListener('touchend', function() {
      if (!_pulling) return;
      _pulling = false;
      if (_triggered) {
        /* Reload imediato e silencioso */
        setTimeout(function() { window.location.reload(); }, 80);
      }
    }, { passive: true });

    scrollEl.addEventListener('touchcancel', function() {
      _pulling   = false;
      _triggered = false;
    }, { passive: true });
  }

  /* ============================================================
     §I — INICIALIZAÇÃO
  ============================================================ */
  let _initDone = false;

  function _init() {
    if (_initDone) return;
    _initDone = true;
    _patchHmShowInlineResult();
    _initPullToRefresh();
    console.log('[MedCases UX v2] Módulo iniciado: Diretriz 3 (formulações) + Diretriz 6 (copiar Rx) + Pull-to-Refresh');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    setTimeout(_init, 0);
  }
  window.addEventListener('load', _init);

  console.log('[MedCases UX v2] Módulo carregado: CG-motor (inline) + Diretriz 3 + Diretriz 6 + PTR');

})();

