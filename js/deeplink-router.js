/* ================================================================
   MedCases Pro — Deep Link Router v2.0
   ----------------------------------------------------------------
   Lê URLSearchParams ao carregar a página e abre o card accordion
   correto na Home Hub sem alterar design, banco de dados ou
   subdomínios.

   NOVA ARQUITETURA (v2.0 — Hub Accordion):
     Todos os módulos são cards na Home.
     O router usa window.HubAccordion.open(id, opts) para expandir
     o card correto. Não há mais navigate() para páginas separadas.

   PARÂMETROS SUPORTADOS:
     ?lang=pt|es                → aplica idioma ANTES de abrir o card
     ?tab=<modulo>              → abre o card do módulo
     ?tab=<modulo>&q=<busca>    → abre e filtra a busca
     ?tab=interacoes&drug1=X&drug2=Y → preenche dois fármacos + checa

   ORDEM DE EXECUÇÃO GARANTIDA:
     1. ler lang   → aplicar idioma (setLang + HubAccordion.syncLang)
     2. ler tab    → abrir card accordion correto
     3. ler q      → preencher busca / score / droga de infusão
     4. ler drug1/drug2 → preencher interações + checar

   MAPA DE TABS → CARD:
     home                → fecha todos os cards (home limpa)
     calculadoras        → fecha todos (home limpa)
     farmacos            → hub-card-farmacos + q opcional
     interacoes          → hub-card-interacoes + drug1/drug2
     scores              → hub-card-scores + selectScore(q)
     renal / clcr        → hub-card-clcr
     pediatria           → hub-card-pediatria
     gestante/ob         → hub-card-gestante
     infusao             → hub-card-infusao + q (modo droga)
     eletrolitos         → hub-card-eletrolitos + scroll por íon
     hemodinamica        → hub-card-hemodinamica + scroll por q
     fluidos             → hub-card-fluidos

   ALIASES DE SCORES (q=):
     wells-tep / wells-pe → wells-pe
     sofa                 → sofa
     glasgow              → glasgow
     curb-65 / curb65     → curb65
     cha2ds2vasc / chads2 → chads2
     has-bled / hasbled   → hasbled
     timi                 → timi
     news2                → news2

   ALIASES DE ELETRÓLITOS (q=):
     potassio / k         → elec-card-k
     sodio / na           → elec-card-na
     magnesio / mg        → elec-card-mg
     calcio / ca          → elec-card-ca

   ALIASES DE HEMODINÂMICA (q=):
     pam / map            → hemo-card-pam
     choque               → hemo-card-choque

   RETROCOMPATIBILIDADE:
     Links antigos (tab=adult, tab=calculadoras, tab=calculators)
     continuam funcionando — são mapeados para a home limpa ou
     para o card mais próximo.

================================================================ */

(function () {
  'use strict';

  /* ── Aguarda o DOM + todas as funções do app estarem prontas ── */
  function _ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  /* ── Normaliza string: minúsculas, sem acentos ── */
  function _norm(s) {
    return String(s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  /* ── Scroll suave até elemento por ID ── */
  function _scrollTo(id, delay) {
    setTimeout(function () {
      const el = document.getElementById(id);
      const sc = document.getElementById('scroll-content');
      if (el && sc) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay || 300);
  }

  /* ── Aguarda função ficar disponível no window (max 3s) ── */
  function _waitFor(fnName, cb, attempts) {
    attempts = attempts || 0;
    if (typeof window[fnName] === 'function') {
      cb();
      return;
    }
    if (attempts > 30) {
      console.warn('[DeepLink] Timeout aguardando window.' + fnName);
      return;
    }
    setTimeout(function () { _waitFor(fnName, cb, attempts + 1); }, 100);
  }

  /* ================================================================
     MAPA DE SCORES — alias → id interno do selectScore()
  ================================================================ */
  var SCORE_ALIASES = {
    'wells-tep':    'wells-pe',
    'wells-pe':     'wells-pe',
    'wells-dvt':    'wells-dvt',
    'wells-tvp':    'wells-dvt',
    'sofa':         'sofa',
    'glasgow':      'glasgow',
    'curb-65':      'curb65',
    'curb65':       'curb65',
    'cha2ds2vasc':  'chads2',
    'cha2ds2-vasc': 'chads2',
    'chads2':       'chads2',
    'has-bled':     'hasbled',
    'hasbled':      'hasbled',
    'timi':         'timi',
    'news2':        'news2',
    'child':        'child',
    'child-pugh':   'child',
  };

  /* ================================================================
     MAPA DE ELETRÓLITOS — alias → id do card na página
  ================================================================ */
  var ELEC_CARD_ALIASES = {
    'sodio':     'elec-card-na',
    'na':        'elec-card-na',
    'potassio':  'elec-card-k',
    'k':         'elec-card-k',
    'magnesio':  'elec-card-mg',
    'mg':        'elec-card-mg',
    'calcio':    'elec-card-ca',
    'ca':        'elec-card-ca',
    'fosforo':   'elec-card-p',
    'p':         'elec-card-p',
  };

  /* ================================================================
     MAPA DE HEMODINÂMICA — alias → id do card
  ================================================================ */
  var HEMO_CARD_ALIASES = {
    'pam':    'hemo-card-pam',
    'map':    'hemo-card-pam',
    'choque': 'hemo-card-choque',
    'shock':  'hemo-card-choque',
  };

  /* ================================================================
     MAPA DE INFUSÃO — alias → nome canônico no _infusionDrugs
     (bicHandleDrugInput faz a busca por texto — apenas normaliza)
  ================================================================ */
  var INFUSION_ALIASES = {
    'norepinefrina':  'norepinefrina',
    'noradrenaline':  'norepinefrina',
    'noradrenalin':   'norepinefrina',
    'dopamina':       'dopamina',
    'dobutamina':     'dobutamina',
    'dobutamine':     'dobutamina',
    'nitroglicerina': 'nitroglicerina',
    'nitro':          'nitroglicerina',
    'epinefrina':     'epinefrina',
    'adrenalina':     'epinefrina',
    'vasopressina':   'vasopressina',
    'midazolam':      'midazolam',
    'fentanil':       'fentanil',
    'morfina':        'morfina',
    'propofol':       'propofol',
    'dexmedetomidina':'dexmedetomidina',
    'amiodarona':     'amiodarona',
    'lidocaina':      'lidocaina',
    'insulina':       'insulina',
    'heparina':       'heparina',
    'furosemida':     'furosemida',
    'nicardipino':    'nicardipino',
    'labetalol':      'labetalol',
  };

  /* ================================================================
     UTIL: aguarda HubAccordion estar disponível (max 3s)
  ================================================================ */
  function _waitForHub(cb, attempts) {
    attempts = attempts || 0;
    if (window.HubAccordion && typeof window.HubAccordion.open === 'function') {
      cb();
      return;
    }
    if (attempts > 30) {
      console.warn('[DeepLink] Timeout aguardando HubAccordion.');
      /* Fallback: tenta mesmo assim */
      if (typeof navigate === 'function') navigate('home');
      return;
    }
    setTimeout(function () { _waitForHub(cb, attempts + 1); }, 100);
  }

  /* ================================================================
     MAPA DE TABS v2.0 — tab param → handler Hub Accordion
  ================================================================ */
  var TAB_HANDLERS = {

    /* ── HOME (fecha todos os cards) ── */
    'home': function (q) {
      _waitForHub(function () {
        if (typeof navigate === 'function') navigate('home');
        window.HubAccordion.closeAll();
      });
    },

    /* ── CALCULADORAS (retrocompat → home limpa) ── */
    'calculadoras': function (q) {
      _waitForHub(function () {
        if (typeof navigate === 'function') navigate('home');
        /* q=clcr → abre card ClCr */
        if (q && _norm(q) === 'clcr') {
          window.HubAccordion.open('clcr');
        } else {
          window.HubAccordion.closeAll();
        }
      });
    },

    /* ── FÁRMACOS ── */
    'farmacos': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('farmacos', { q: q });
      });
    },

    /* ── INTERAÇÕES ── */
    'interacoes': function (q, drug1, drug2) {
      _waitForHub(function () {
        window.HubAccordion.open('interacoes', {
          q:     q,
          drug1: drug1,
          drug2: drug2
        });
      });
    },

    /* ── SCORES ── */
    'scores': function (q) {
      _waitForHub(function () {
        var scoreKey = q ? (SCORE_ALIASES[_norm(q)] || _norm(q)) : null;
        window.HubAccordion.open('scores', { scoreKey: scoreKey });
      });
    },

    /* ── RENAL / ClCr ── */
    'renal': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('clcr');
      });
    },

    /* ── PEDIATRIA ── */
    'pediatria': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('pediatria');
      });
    },

    /* ── GESTANTE / OBSTETRÍCIA ── */
    'gestante': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('gestante');
      });
    },

    /* ── INFUSÃO ── */
    'infusao': function (q) {
      _waitForHub(function () {
        var drugName = q ? (INFUSION_ALIASES[_norm(q)] || q) : null;
        window.HubAccordion.open('infusao', { q: drugName });
      });
    },

    /* ── ELETRÓLITOS ── */
    'eletrolitos': function (q) {
      _waitForHub(function () {
        var cardId = q ? ELEC_CARD_ALIASES[_norm(q)] : null;
        window.HubAccordion.open('eletrolitos', { scrollEl: cardId });
      });
    },

    /* ── ANTIMICROBIANOS (retrocompat → home limpa, módulo em breve) ── */
    'antimicrobianos': function (q) {
      _waitForHub(function () {
        if (typeof navigate === 'function') navigate('home');
        window.HubAccordion.closeAll();
      });
    },

    /* ── HEMODINÂMICA ── */
    'hemodinamica': function (q) {
      _waitForHub(function () {
        var cardId = q ? HEMO_CARD_ALIASES[_norm(q)] : null;
        window.HubAccordion.open('hemodinamica', { scrollEl: cardId });
      });
    },

    /* ── FLUIDOS ── */
    'fluidos': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('fluidos');
      });
    },

    /* ── DADOS DO PACIENTE ── */
    'paciente': function (q) {
      _waitForHub(function () {
        window.HubAccordion.open('patient');
      });
    },

  };

  /* Aliases adicionais de tab → handler existente */
  TAB_HANDLERS['interacoes_medicamentosas'] = TAB_HANDLERS['interacoes'];
  TAB_HANDLERS['interactions']              = TAB_HANDLERS['interacoes'];
  TAB_HANDLERS['drugs']                     = TAB_HANDLERS['farmacos'];
  TAB_HANDLERS['farmacos_adulto']           = TAB_HANDLERS['farmacos'];
  TAB_HANDLERS['calculators']               = TAB_HANDLERS['calculadoras'];
  TAB_HANDLERS['infusion']                  = TAB_HANDLERS['infusao'];
  TAB_HANDLERS['electrolytes']              = TAB_HANDLERS['eletrolitos'];
  TAB_HANDLERS['hemodynamics']              = TAB_HANDLERS['hemodinamica'];
  TAB_HANDLERS['fluids']                    = TAB_HANDLERS['fluidos'];
  TAB_HANDLERS['pediatrics']                = TAB_HANDLERS['pediatria'];
  TAB_HANDLERS['obstetrics']                = TAB_HANDLERS['gestante'];
  TAB_HANDLERS['ob']                        = TAB_HANDLERS['gestante'];
  TAB_HANDLERS['obstetricia']               = TAB_HANDLERS['gestante'];
  TAB_HANDLERS['gestantes']                 = TAB_HANDLERS['gestante'];
  TAB_HANDLERS['ped']                       = TAB_HANDLERS['pediatria'];
  TAB_HANDLERS['renal']                     = TAB_HANDLERS['renal'];
  TAB_HANDLERS['clcr']                      = TAB_HANDLERS['renal'];
  TAB_HANDLERS['atb']                       = TAB_HANDLERS['antimicrobianos'];
  TAB_HANDLERS['elec']                      = TAB_HANDLERS['eletrolitos'];
  TAB_HANDLERS['electrolitos']              = TAB_HANDLERS['eletrolitos'];
  TAB_HANDLERS['hemo']                      = TAB_HANDLERS['hemodinamica'];
  TAB_HANDLERS['hemodynamica']              = TAB_HANDLERS['hemodinamica'];
  /* adult → retrocompat: abre home */
  TAB_HANDLERS['adult']                     = TAB_HANDLERS['calculadoras'];
  TAB_HANDLERS['scores_clinicos']           = TAB_HANDLERS['scores'];
  TAB_HANDLERS['patient']                   = TAB_HANDLERS['paciente'];

  /* ── Capitaliza a primeira letra (para nomes de fármacos) ── */
  function _capitalize(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* ================================================================
     APLICAR IDIOMA — etapa 1 do pipeline, sempre antes da aba
     Estratégia:
       1. Valida 'pt' | 'es' (rejeita qualquer outro valor)
       2. Seta window.currentLang e window._autoLang imediatamente
          (acessíveis por _isES() antes de setLang() existir)
       3. Persiste em localStorage['lang'] (chave lida por _isES())
       4. Chama window.setLang() quando disponível para propagar
          traduções na UI (applyTranslations, módulos, chips etc.)
  ================================================================ */
  function _applyLang(lang) {
    var l = _norm(lang);
    /* Normaliza variantes: 'es-ar', 'es_co', 'pt-br', 'pt_pt' → 'pt'|'es' */
    if (l.startsWith('es')) l = 'es';
    else if (l.startsWith('pt')) l = 'pt';
    else return false; /* valor inválido — não aplica nada */

    /* 1. Seta imediatamente no window (antes de qualquer função existir) */
    window.currentLang  = l;
    window._autoLang    = l;

    /* 2. Persiste — chave 'lang' é a mesma lida por _isES() no motor de interações */
    try { localStorage.setItem('lang', l); } catch (e) { /* private browsing */ }

    /* 3. Chama setLang() para propagar traduções na UI,
          com retry porque pode ser chamado antes do DOM estar pronto */
    _waitFor('setLang', function () {
      if (typeof setLang === 'function') setLang(l);
    });

    console.log('[DeepLink] Idioma aplicado → "' + l + '"');
    return true;
  }

  /* ================================================================
     ENTRY POINT — lê params e despacha
     ORDEM GARANTIDA: lang → tab → q → drug1/drug2
  ================================================================ */
  function _dispatch() {
    var params = new URLSearchParams(window.location.search);
    var langParam = params.get('lang') || '';
    var tab       = _norm(params.get('tab') || '');
    var q         = params.get('q')     || '';
    var drug1     = params.get('drug1') || '';
    var drug2     = params.get('drug2') || '';

    /* ── ETAPA 1: Idioma (sempre primeiro) ── */
    var langApplied = false;
    if (langParam) {
      langApplied = _applyLang(langParam);
      if (!langApplied) {
        console.warn('[DeepLink] Valor de lang inválido: "' + langParam + '" — ignorado.');
      }
    }

    /* ── ETAPA 2–4: Roteamento de aba (sem parâmetros → home) ── */
    if (!tab) {
      if (langApplied) {
        console.log('[DeepLink] Apenas lang= detectado — idioma aplicado, aba: Home.');
      } else {
        console.log('[DeepLink] Sem parâmetros — abrindo Home normalmente.');
      }
      return;
    }

    console.log(
      '[MedCases DeepLink] Roteando →'
      + (langParam ? ' lang=' + _norm(langParam) : '')
      + ' tab=' + tab
      + (q     ? ' q='     + q     : '')
      + (drug1 ? ' drug1=' + drug1 : '')
      + (drug2 ? ' drug2=' + drug2 : '')
    );

    var handler = TAB_HANDLERS[tab];

    if (typeof handler === 'function') {
      /* Se o idioma foi aplicado, aguarda setLang() propagar antes de abrir a aba.
         O _waitFor interno de cada handler já cuida da ordem correta. */
      handler(q, drug1, drug2);
    } else {
      console.warn('[DeepLink] Tab desconhecida: "' + tab + '". Abrindo Home.');
      _waitFor('navigate', function () { navigate('home'); });
    }
  }

  /* ================================================================
     EXPÕE API PÚBLICA — permite que o app ou IA chame o router
     diretamente sem recarregar a página:
       window.MedCasesRouter.go('farmacos', { q: 'ceftriaxona' })
       window.MedCasesRouter.go('interacoes', { drug1: 'amiodarona', drug2: 'ciprofloxacino' })
  ================================================================ */
  window.MedCasesRouter = {

    /**
     * Navega programaticamente para uma aba com opções.
     * @param {string} tab   - nome da aba (ex: 'farmacos', 'interacoes')
     * @param {object} opts  - { q, drug1, drug2, lang }
     *
     * Exemplos:
     *   window.MedCasesRouter.go('farmacos', { q: 'ceftriaxona', lang: 'es' })
     *   window.MedCasesRouter.go('interacoes', { drug1: 'amiodarona', drug2: 'ciprofloxacino', lang: 'pt' })
     */
    go: function (tab, opts) {
      opts = opts || {};
      /* Aplica idioma antes de abrir a aba, se fornecido */
      if (opts.lang) _applyLang(opts.lang);
      var handler = TAB_HANDLERS[_norm(tab)];
      if (typeof handler === 'function') {
        handler(opts.q || '', opts.drug1 || '', opts.drug2 || '');
      } else {
        console.warn('[DeepLink] Tab desconhecida: "' + tab + '"');
      }
    },

    /**
     * Aplica apenas o idioma sem navegar.
     * @param {string} lang - 'pt' | 'es'
     */
    setLang: function (lang) {
      return _applyLang(lang);
    },

    /**
     * Gera a URL canônica para um deep link.
     * @param {string} tab
     * @param {object} opts - { q, drug1, drug2, lang }
     * @returns {string} URL completa
     *
     * Exemplo:
     *   window.MedCasesRouter.buildUrl('scores', { q: 'sofa', lang: 'es' })
     *   → "https://medcasescalcu.com/?lang=es&tab=scores&q=sofa"
     */
    buildUrl: function (tab, opts) {
      opts = opts || {};
      var base = window.location.origin + window.location.pathname;
      var p = new URLSearchParams();
      /* lang sempre primeiro na URL (legibilidade + ordem de execução) */
      if (opts.lang) p.set('lang', _norm(opts.lang).startsWith('es') ? 'es' : 'pt');
      if (tab)       p.set('tab',   tab);
      if (opts.q)    p.set('q',     opts.q);
      if (opts.drug1) p.set('drug1', opts.drug1);
      if (opts.drug2) p.set('drug2', opts.drug2);
      return base + (p.toString() ? '?' + p.toString() : '');
    },

    /** Lista todos os tabs suportados */
    tabs: function () {
      return Object.keys(TAB_HANDLERS);
    }
  };

  /* ── Executa após DOM pronto ── */
  _ready(function () {
    /* Delay pequeno para garantir que navigate() e demais funções
       do app já foram declaradas (estão no mesmo index.html, mas
       carregadas em script inline — sem garantia de ordem exata) */
    setTimeout(_dispatch, 120);
  });

  console.log('[MedCases DeepLink] Router v2.0 carregado. API: window.MedCasesRouter | Hub Accordion | ?lang=pt|es suportado');

})();

