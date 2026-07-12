/* ================================================================
   MedCases Pro — Clinical Support Router (medcases-router.js)
   BUILD 456-WEB-CONDUTAS | Receptor de Deeplinks Apple-Compliant
   ----------------------------------------------------------------
   Motor de interceptação para links de suporte clínico enviados
   pelo app nativo iOS/Android via Apple-approved web bridging.

   ENDPOINTS SUPORTADOS (dois formatos):
     URL Path (SPA fallback):
       /condutas/nefrologia
       /condutas/cardiologia
       /condutas/eletrolitos-gasometria
       /condutas/hepatologia

     Query String (universal — funciona em qualquer host):
       ?modulo=nefrologia
       ?modulo=cardiologia
       ?modulo=eletrolitos
       ?modulo=hepatologia

   INTEGRAÇÃO COM BANCOS MODULARIZADOS:
     Nefrologia   → window.NEFRO_DRUGS_DB      (database/nefro.js)
     Hepatologia  → window.ALL_DRUGS_DB         (filtro hepaticCaution:true)
     Cardiologia  → window.ALL_DRUGS_DB         (filtro category:'cardiologia')
     Eletrólitos  → HubAccordion.open('eletrolitos')

   API PÚBLICA:
     window.ClinicalSupportRouter.open('nefrologia')
     window.ClinicalSupportRouter.close()
     window.ClinicalSupportRouter.getModulo()

   COMPATIBILIDADE:
     Coexiste com deeplink-router.js v2.0 (HubAccordion).
     Prioridade: se ?modulo= ou /condutas/ detectados → ativa
     #clinical-support-view em TELA CHEIA antes do HubAccordion.
================================================================ */
(function () {
  'use strict';

  /* ── Normaliza string (lowercase + trim + remove acentos básicos) ── */
  function _norm(s) {
    if (!s) return '';
    return s.toLowerCase().trim()
      .replace(/[àáâãä]/g, 'a')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i')
      .replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[-_\s]+/g, '-');
  }

  /* ── Aguarda elemento DOM existir ── */
  function _waitEl(id, cb, attempts) {
    attempts = attempts || 0;
    var el = document.getElementById(id);
    if (el) { cb(el); return; }
    if (attempts > 40) { console.warn('[CSR] Timeout aguardando #' + id); return; }
    setTimeout(function () { _waitEl(id, cb, attempts + 1); }, 80);
  }

  /* ── Aguarda prop global existir ── */
  function _waitGlobal(prop, cb, attempts) {
    attempts = attempts || 0;
    if (window[prop] !== undefined) { cb(window[prop]); return; }
    if (attempts > 50) { return; }
    setTimeout(function () { _waitGlobal(prop, cb, attempts + 1); }, 100);
  }

  /* ─────────────────────────────────────────────────────────────────
     MAPA DE MÓDULOS
     Cada entrada define: banner, emoji, cor temática e gerador de
     conteúdo que consulta os bancos de dados modularizados.
  ───────────────────────────────────────────────────────────────── */
  var MODULE_MAP = {

    /* ── NEFROLOGIA ── */
    'nefrologia': {
      label:   { pt: 'Nefrologia / Terapêutica Renal', es: 'Nefrología / Terapéutica Renal' },
      emoji:   '🫘',
      color:   '#3B82F6',
      accent:  '#1D4ED8',
      intro: {
        pt: 'Diretrizes de alto risco renal selecionadas da base NEFRO. Identifique medicamentos com ajuste de dose obrigatório, drogas nefrotóxicas e protocolos de diálise.',
        es: 'Directrices de alto riesgo renal seleccionadas de la base NEFRO. Identifique medicamentos con ajuste de dosis obligatorio, drogas nefrotóxicas y protocolos de diálisis.'
      },
      /* Puxa drogas de NEFRO_DRUGS_DB + filtra renalHighRisk */
      buildContent: function (lang) {
        var db = window.NEFRO_DRUGS_DB || {};
        var allDb = window.ALL_DRUGS_DB || {};
        /* Mescla: prefire NEFRO_DRUGS_DB, complementa com ALL_DRUGS_DB categoria nefro */
        var merged = Object.assign({}, allDb, db);
        var highRisk = [], adjusted = [];
        Object.keys(merged).forEach(function (k) {
          var d = merged[k];
          if (!d || typeof d !== 'object') return;
          if (d.category !== 'nefrologia' && d.category !== 'nefro' && !(window.NEFRO_DRUGS_DB && window.NEFRO_DRUGS_DB[k])) return;
          var sf = d.safetyFlags || {};
          if (sf.renalHighRisk === true) {
            highRisk.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, warning: (sf.warning && (sf.warning[lang] || sf.warning.pt)) || '' });
          } else if (d.renalAdjustment && d.renalAdjustment.required === true) {
            var msg = (d.renalAdjustment.message && (d.renalAdjustment.message[lang] || d.renalAdjustment.message.pt)) || '';
            adjusted.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, msg: msg });
          }
        });
        return { highRisk: highRisk, adjusted: adjusted };
      }
    },

    /* ── CARDIOLOGIA ── */
    'cardiologia': {
      label:   { pt: 'Cardiologia / Terapêutica Cardiovascular', es: 'Cardiología / Terapéutica Cardiovascular' },
      emoji:   '❤️',
      color:   '#EF4444',
      accent:  '#B91C1C',
      intro: {
        pt: 'Medicamentos cardiovasculares de alto risco. Drogas com potencial de arritmia, bradicardia, hipotensão grave e Torsades de Pointes catalogadas para triagem rápida no plantão.',
        es: 'Medicamentos cardiovasculares de alto riesgo. Drogas con potencial arritmogénico, bradicardia, hipotensión grave y Torsades de Pointes catalogadas para triaje rápido de guardia.'
      },
      buildContent: function (lang) {
        var allDb = window.ALL_DRUGS_DB || {};
        var highRisk = [], adjusted = [];
        Object.keys(allDb).forEach(function (k) {
          var d = allDb[k];
          if (!d || typeof d !== 'object') return;
          var cat = (d.category || '').toLowerCase();
          if (cat !== 'cardiologia' && cat !== 'cardiovascular' && cat !== 'antiarritmico' && cat !== 'antihipertensivo') return;
          var sf = d.safetyFlags || {};
          if (sf.highAlertMedication === true) {
            highRisk.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, warning: (sf.warning && (sf.warning[lang] || sf.warning.pt)) || '' });
          } else {
            adjusted.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, msg: '' });
          }
        });
        return { highRisk: highRisk, adjusted: adjusted };
      }
    },

    /* ── ELETRÓLITOS / GASOMETRIA ── */
    'eletrolitos': {
      label:   { pt: 'Eletrólitos & Gasometria / Distúrbios Ácido-Base', es: 'Electrolitos & Gasometría / Trastornos Ácido-Base' },
      emoji:   '⚗️',
      color:   '#10B981',
      accent:  '#065F46',
      intro: {
        pt: 'Protocolos de correção de distúrbios eletrolíticos e gasométricos. Este módulo redireciona para a calculadora interativa de eletrólitos integrada.',
        es: 'Protocolos de corrección de trastornos electrolíticos y gasométricos. Este módulo redirige a la calculadora interactiva de electrolitos integrada.'
      },
      buildContent: function (lang) {
        /* Eletrólitos → usa a calculadora interna; retorna flag para redirect */
        return { redirect: 'eletrolitos', highRisk: [], adjusted: [] };
      }
    },

    /* ── HEPATOLOGIA ── */
    'hepatologia': {
      label:   { pt: 'Hepatologia / Toxicidade Hepática', es: 'Hepatología / Toxicidad Hepática' },
      emoji:   '🫀',
      color:   '#F59E0B',
      accent:  '#92400E',
      intro: {
        pt: 'Mapeamento de hepatotóxicos e drogas com ajuste obrigatório em insuficiência hepática. Banco cruzado em tempo real com toda a base de fármacos da calculadora.',
        es: 'Mapeo de hepatotóxicos y drogas con ajuste obligatorio en insuficiencia hepática. Base cruzada en tiempo real con toda la base de fármacos de la calculadora.'
      },
      buildContent: function (lang) {
        var allDb = window.ALL_DRUGS_DB || {};
        var highRisk = [], adjusted = [];
        Object.keys(allDb).forEach(function (k) {
          var d = allDb[k];
          if (!d || typeof d !== 'object') return;
          var sf = d.safetyFlags || {};
          var ha = d.hepaticAdjustment || {};
          if (sf.hepaticCaution === true && sf.highAlertMedication === true) {
            highRisk.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, warning: (sf.warning && (sf.warning[lang] || sf.warning.pt)) || '' });
          } else if (ha.required === true) {
            var msg = (ha.message && (ha.message[lang] || ha.message.pt)) || '';
            adjusted.push({ key: k, name: (d.name && (d.name[lang] || d.name.pt)) || k, msg: msg });
          }
        });
        return { highRisk: highRisk, adjusted: adjusted };
      }
    }

  };

  /* Aliases de path/param → chave canônica do MODULE_MAP */
  var MODULE_ALIASES = {
    'nefrologia':          'nefrologia',
    'nefro':               'nefrologia',
    'renal':               'nefrologia',
    'cardiologia':         'cardiologia',
    'cardio':              'cardiologia',
    'cardiovascular':      'cardiologia',
    'eletrolitos':         'eletrolitos',
    'eletrolitos-gasometria': 'eletrolitos',
    'electrolitos':        'eletrolitos',
    'electrolytes':        'eletrolitos',
    'gasometria':          'eletrolitos',
    'hepatologia':         'hepatologia',
    'hepato':              'hepatologia',
    'hepatic':             'hepatologia',
    'hepatology':          'hepatologia'
  };

  /* ─────────────────────────────────────────────────────────────────
     DETECÇÃO DE ROTA
     Suporta dois formatos:
       1. Path:  /condutas/<modulo>   (SPA com history pushState)
       2. Query: ?modulo=<modulo>     (universal, iOS Safari compliant)
  ───────────────────────────────────────────────────────────────── */
  function _detectModulo() {
    var modulo = null;

    /* 1. Tenta via pathname */
    var path = (window.location.pathname || '').toLowerCase();
    var pathMatch = path.match(/\/condutas\/([a-z0-9\-]+)/);
    if (pathMatch && pathMatch[1]) {
      modulo = MODULE_ALIASES[_norm(pathMatch[1])] || null;
      if (modulo) console.log('[CSR] Módulo detectado via PATH: /' + pathMatch[1] + ' → ' + modulo);
    }

    /* 2. Se não encontrou, tenta via query string (?modulo=) */
    if (!modulo) {
      var params = new URLSearchParams(window.location.search);
      var moduloParam = _norm(params.get('modulo') || '');
      if (moduloParam) {
        modulo = MODULE_ALIASES[moduloParam] || null;
        if (modulo) console.log('[CSR] Módulo detectado via QUERY: ?modulo=' + moduloParam + ' → ' + modulo);
      }
    }

    return modulo;
  }

  /* ─────────────────────────────────────────────────────────────────
     RENDERER DE CONTEÚDO CLÍNICO
     Gera HTML semântico a partir dos dados do banco modularizado.
  ───────────────────────────────────────────────────────────────── */
  function _renderContent(moduloKey, container) {
    var lang = (window.currentLang || localStorage.getItem('lang') || 'pt');
    var mod = MODULE_MAP[moduloKey];
    if (!mod) return;

    /* Se o banco de dados ainda não carregou, aguarda e retry */
    var allDbReady = window.ALL_DRUGS_DB && Object.keys(window.ALL_DRUGS_DB).length > 0;
    if (!allDbReady) {
      container.innerHTML = '<div class="csr-loading"><div class="csr-spinner"></div><p>' +
        (lang === 'es' ? 'Cargando base de datos clínica...' : 'Carregando base de dados clínica...') +
        '</p></div>';
      setTimeout(function () { _renderContent(moduloKey, container); }, 400);
      return;
    }

    var data = mod.buildContent(lang);

    /* Eletrólitos → redirect para hub-card */
    if (data.redirect) {
      _waitGlobal('HubAccordion', function (hub) {
        if (typeof hub.open === 'function') {
          hub.open('eletrolitos');
          /* Esconde a view de condutas e vai para o hub */
          var view = document.getElementById('clinical-support-view');
          if (view) view.style.display = 'none';
          var appRoot = document.getElementById('app-root') || document.getElementById('main-app') || document.querySelector('.hub-container');
          if (appRoot) appRoot.style.display = '';
        }
      });
      container.innerHTML = '<div class="csr-redirect-msg">' +
        (lang === 'es' ? '⚗️ Redirigiendo a la Calculadora de Electrolitos…' : '⚗️ Redirecionando para a Calculadora de Eletrólitos…') +
        '</div>';
      return;
    }

    var highRisk = data.highRisk || [];
    var adjusted = data.adjusted || [];

    var labelStr = lang === 'es' ? (mod.label.es || mod.label.pt) : mod.label.pt;
    var introStr = lang === 'es' ? (mod.intro.es || mod.intro.pt) : mod.intro.pt;

    var html = '<div class="csr-intro">' + introStr + '</div>';

    /* Seção: Drogas de ALTO RISCO */
    if (highRisk.length > 0) {
      var hrTitle = lang === 'es' ? '🔴 Medicamentos de Alto Riesgo Identificados (' + highRisk.length + ')' : '🔴 Medicamentos de Alto Risco Identificados (' + highRisk.length + ')';
      html += '<div class="csr-section csr-high-risk"><h3>' + hrTitle + '</h3><div class="csr-drug-list">';
      highRisk.forEach(function (item) {
        var shortWarning = item.warning ? item.warning.slice(0, 220) + (item.warning.length > 220 ? '…' : '') : '';
        html += '<div class="csr-drug-card csr-card-danger">' +
          '<div class="csr-drug-name">⚠️ ' + _escHtml(item.name) + '</div>' +
          (shortWarning ? '<div class="csr-drug-warning">' + _escHtml(shortWarning) + '</div>' : '') +
          '<button class="csr-lookup-btn" data-drug="' + _escHtml(item.key) + '">' +
          (lang === 'es' ? 'Ver en Calculadora →' : 'Ver na Calculadora →') +
          '</button></div>';
      });
      html += '</div></div>';
    }

    /* Seção: Drogas com ajuste de dose */
    if (adjusted.length > 0) {
      var adjMax = Math.min(adjusted.length, 12);
      var adjTitle = lang === 'es'
        ? '🟡 Requieren Ajuste de Dosis (' + adjusted.length + ' detectadas, mostrando ' + adjMax + ')'
        : '🟡 Requerem Ajuste de Dose (' + adjusted.length + ' detectadas, exibindo ' + adjMax + ')';
      html += '<div class="csr-section csr-adjusted"><h3>' + adjTitle + '</h3><div class="csr-drug-list">';
      adjusted.slice(0, adjMax).forEach(function (item) {
        var shortMsg = item.msg ? item.msg.slice(0, 180) + (item.msg.length > 180 ? '…' : '') : '';
        html += '<div class="csr-drug-card csr-card-warn">' +
          '<div class="csr-drug-name">🟡 ' + _escHtml(item.name) + '</div>' +
          (shortMsg ? '<div class="csr-drug-adjust">' + _escHtml(shortMsg) + '</div>' : '') +
          '<button class="csr-lookup-btn" data-drug="' + _escHtml(item.key) + '">' +
          (lang === 'es' ? 'Ver detalle →' : 'Ver detalhe →') +
          '</button></div>';
      });
      html += '</div></div>';
    }

    if (highRisk.length === 0 && adjusted.length === 0) {
      html += '<div class="csr-empty">' +
        (lang === 'es' ? 'No se encontraron medicamentos en la base para este módulo.' : 'Nenhum medicamento encontrado na base para este módulo.') +
        '</div>';
    }

    /* Rodapé informativo */
    html += '<div class="csr-footer-note">' +
      (lang === 'es'
        ? '📚 Base de datos actualizada con las directrices internacionales: KDIGO, AHA/ACC, AASLD, SEBRAE. Versión v464.'
        : '📚 Base de dados atualizada com diretrizes internacionais: KDIGO, AHA/ACC, AASLD, FEBRASGO. Versão v464.') +
      '</div>';

    container.innerHTML = html;

    /* Bind: clique em "Ver na Calculadora" → abre fármaco no hub */
    container.querySelectorAll('.csr-lookup-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var drugKey = this.getAttribute('data-drug');
        if (!drugKey) return;
        _waitGlobal('HubAccordion', function (hub) {
          if (typeof hub.open === 'function') {
            hub.open('farmacos', { q: drugKey });
            /* Minimiza a view de condutas temporariamente */
            var view = document.getElementById('clinical-support-view');
            if (view) {
              view.classList.add('csr-minimized');
            }
          }
        });
      });
    });
  }

  /* Escapa HTML para prevenir XSS */
  function _escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ─────────────────────────────────────────────────────────────────
     ABRIR A VIEW DE CONDUTAS
  ───────────────────────────────────────────────────────────────── */
  var _activeModulo = null;

  function _openView(moduloKey) {
    _activeModulo = moduloKey;
    var mod = MODULE_MAP[moduloKey];
    if (!mod) { console.warn('[CSR] Módulo desconhecido: ' + moduloKey); return; }

    var lang = (window.currentLang || localStorage.getItem('lang') || 'pt');

    _waitEl('clinical-support-view', function (view) {
      /* ── CSS ABSOLUTO INVIOLÁVEL: sobrepõe acordeões e preenche janela ── */
      view.style.cssText = [
        'position:fixed',
        'top:0',
        'left:0',
        'width:100vw',
        'height:100vh',
        'background:#111827',
        'z-index:9999999',
        'overflow-y:auto',
        'padding:20px',
        'box-sizing:border-box',
        'color:#fff',
        'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        'display:flex',
        'flex-direction:column'
      ].join(';') + ';';

      /* Cor temática dinâmica via CSS var (complementa o cssText) */
      view.style.setProperty('--csr-color', mod.color);
      view.style.setProperty('--csr-accent', mod.accent);

      /* Banner: título do módulo */
      var bannerEl = document.getElementById('csr-banner-title');
      if (bannerEl) {
        bannerEl.textContent = mod.emoji + '  Suporte de Decisão Médica — ' + (lang === 'es' ? mod.label.es : mod.label.pt);
      }

      /* Botão Fechar: injeta handler direto no DOM para resposta imediata */
      var closeBtn = document.getElementById('csr-close-btn');
      if (closeBtn) {
        closeBtn.onclick = function () {
          document.getElementById('clinical-support-view').style.display = 'none';
          window.scrollTo(0, 0);
          /* Restaura o hub principal */
          var hub = document.getElementById('hub-root') || document.querySelector('.hub-wrapper') || document.getElementById('app');
          if (hub) hub.style.display = '';
          document.body.classList.remove('csr-active');
          try {
            var p = new URLSearchParams(window.location.search);
            p.delete('modulo');
            history.replaceState(null, '', window.location.pathname + (p.toString() ? '?' + p.toString() : ''));
          } catch (e) { /* iOS Safari private */ }
        };
      }

      view.classList.remove('csr-minimized');
      document.body.classList.add('csr-active');

      /* Oculta o app principal (Hub) enquanto a view está aberta */
      var hubRoot = document.getElementById('hub-root') || document.querySelector('.hub-wrapper') || document.getElementById('app');
      if (hubRoot) hubRoot.style.display = 'none';

      /* Renderiza conteúdo clínico */
      var contentEl = document.getElementById('csr-content-body');
      if (contentEl) _renderContent(moduloKey, contentEl);
    });

    console.log('[CSR] Módulo aberto: ' + moduloKey);
  }

  /* ─────────────────────────────────────────────────────────────────
     FECHAR A VIEW — retorna à calculadora
  ───────────────────────────────────────────────────────────────── */
  function _closeView() {
    var view = document.getElementById('clinical-support-view');
    if (view) {
      view.style.display = 'none';
      view.classList.remove('csr-minimized');
    }
    document.body.classList.remove('csr-active');

    /* Restaura o app principal */
    var hubRoot = document.getElementById('hub-root') || document.querySelector('.hub-wrapper') || document.getElementById('app');
    if (hubRoot) hubRoot.style.display = '';

    /* Limpa o parâmetro ?modulo= da URL sem recarregar */
    try {
      var params = new URLSearchParams(window.location.search);
      params.delete('modulo');
      var newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
      history.replaceState(null, '', newUrl);
    } catch (e) { /* iOS Safari private mode */ }

    _activeModulo = null;
    console.log('[CSR] View de condutas fechada. Calculadora restaurada.');
  }

  /* ─────────────────────────────────────────────────────────────────
     INGESTÃO AUTOMÁTICA DE PAYLOAD DO PACIENTE
     Captura ?peso=&idade=&creatinina=&clcr=&kdigo=&child_pugh= da URL
     e popula window.patientData, disparando _onPatientDataUpdated().
  ───────────────────────────────────────────────────────────────── */
  function _ingestPatientPayload(params) {
    if (!params) return;
    window.patientData = window.patientData || {};
    var fields = ['peso', 'idade', 'creatinina', 'clcr', 'kdigo', 'child_pugh'];
    var updated = false;
    fields.forEach(function (f) {
      var v = params.get(f);
      if (v !== null && v !== '') {
        window.patientData[f] = v;
        updated = true;
      }
    });
    if (updated) {
      console.log('[CSR] patientData ingerido da URL:', JSON.stringify(window.patientData));
      if (typeof window._onPatientDataUpdated === 'function') {
        try { window._onPatientDataUpdated(window.patientData); }
        catch (e) { console.warn('[CSR] _onPatientDataUpdated lançou erro:', e); }
      }
    }
  }

  /* ─────────────────────────────────────────────────────────────────
     INICIALIZAÇÃO — executa cedo, antes do HubAccordion
  ───────────────────────────────────────────────────────────────── */
  function _init() {
    var params;
    try { params = new URLSearchParams(window.location.search); } catch (e) { params = null; }

    /* PASSO 2 — Ingere payload do paciente (campos médicos da query string) */
    _ingestPatientPayload(params);

    var moduloKey = _detectModulo();
    if (!moduloKey) {
      console.log('[CSR] Sem parâmetro ?modulo= ou /condutas/ — modo passivo.');
      return;
    }

    /* Aguarda DOM para injetar a view */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { _openView(moduloKey); });
    } else {
      /* DOM já pronto — pequeno delay para garantir que o index.html
         inseriu o #clinical-support-view no DOM */
      setTimeout(function () { _openView(moduloKey); }, 80);
    }
  }

  /* ─────────────────────────────────────────────────────────────────
     API PÚBLICA — window.ClinicalSupportRouter
  ───────────────────────────────────────────────────────────────── */
  window.ClinicalSupportRouter = {

    /** Abre o painel de suporte clínico para um módulo.
     *  @param {string} modulo - 'nefrologia'|'cardiologia'|'eletrolitos'|'hepatologia'
     */
    open: function (modulo) {
      var key = MODULE_ALIASES[_norm(modulo)] || null;
      if (!key) { console.warn('[CSR] Módulo inválido: ' + modulo); return; }
      _openView(key);
    },

    /** Fecha o painel e restaura a calculadora */
    close: function () { _closeView(); },

    /** Retorna a chave do módulo ativo (null se nenhum) */
    getModulo: function () { return _activeModulo; },

    /** Gera URL canônica para o deeplink de um módulo
     *  @param {string} modulo
     *  @param {string} [lang] - 'pt'|'es'
     *  @returns {string} URL completa
     */
    buildUrl: function (modulo, lang) {
      var base = window.location.origin + window.location.pathname;
      var p = new URLSearchParams();
      if (lang) p.set('lang', lang);
      p.set('modulo', _norm(modulo));
      return base + '?' + p.toString();
    },

    /** Lista módulos disponíveis */
    modules: function () { return Object.keys(MODULE_MAP); }
  };

  /* ── Executa imediatamente (intercepta antes do HubAccordion) ── */
  _init();

  console.log('[MedCases CSR] Clinical Support Router v1.0 carregado. API: window.ClinicalSupportRouter | Módulos: ' + Object.keys(MODULE_MAP).join(', '));

})();
