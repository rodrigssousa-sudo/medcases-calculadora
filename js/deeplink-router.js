/* ================================================================
   MedCases Pro — Deep Link Router v1.1
   ----------------------------------------------------------------
   Lê URLSearchParams ao carregar a página e redireciona o app
   para o módulo correto sem alterar design, banco de dados ou
   subdomínios.

   PARÂMETROS SUPORTADOS:
     ?lang=pt|es                → aplica idioma ANTES de abrir a aba
     ?tab=<modulo>              → abre a aba/módulo
     ?tab=<modulo>&q=<busca>    → abre e filtra a busca
     ?tab=interacoes&drug1=X&drug2=Y → preenche dois fármacos

   ORDEM DE EXECUÇÃO GARANTIDA:
     1. ler lang   → aplicar idioma (setLang)
     2. ler tab    → abrir módulo correto
     3. ler q      → preencher busca
     4. ler drug1/drug2 → preencher interações + checar

   REGRAS DE IDIOMA:
     - Aceita apenas 'pt' e 'es' (case-insensitive)
     - Persiste em localStorage['lang'] (chave lida por _isES())
     - Se ausente: mantém localStorage ou fallback do sistema
     - Retrocompatível: URLs sem ?lang continuam funcionando

   MAPA DE TABS:
     home                → navigate('home')
     calculadoras        → navigate('calculators')
     farmacos            → navigate('farmacos')  + busca opcional
     interacoes          → scroll #card-interactions-container + drug1/drug2
     scores              → showAdultPanel('scores') + selectScore()
     renal / clcr        → navigate('calculators') + rola até ClCr
     pediatria           → navigate('ped')
     gestante            → navigate('ob')
     infusao             → navigate('infusion') + bicHandleDrugInput()
     eletrolitos         → navigate('elec')    + foco por ion
     antimicrobianos     → navigate('atb')
     hemodinamica        → showAdultPanel('hemo')
     fluidos             → showAdultPanel('fluids')

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
     potassio / k         → rola até card de K⁺
     sodio / na           → rola até card de Na⁺
     magnesio / mg        → rola até card de Mg²⁺

   ALIASES DE HEMODINÂMICA (q=):
     pam / map            → rola até card PAM
     choque               → rola até card de choque

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
     MAPA DE TABS — tab param → handler
  ================================================================ */
  var TAB_HANDLERS = {

    /* ── HOME ── */
    'home': function (q) {
      _waitFor('navigate', function () {
        navigate('home');
      });
    },

    /* ── CALCULADORAS (hub) ── */
    'calculadoras': function (q) {
      _waitFor('navigate', function () {
        navigate('calculators');
        /* q=clcr → rola até seção ClCr dentro do hub */
        if (q && _norm(q) === 'clcr') {
          _scrollTo('calc-clcr-card', 500);
        }
      });
    },

    /* ── FÁRMACOS (página dedicada) ── */
    'farmacos': function (q) {
      _waitFor('navigate', function () {
        navigate('farmacos');
        if (q) {
          setTimeout(function () {
            var inp = document.getElementById('farmacos-search-input');
            if (inp) {
              inp.value = q;
              inp.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (typeof renderFarmacosList === 'function') {
              renderFarmacosList(q);
            }
          }, 250);
        }
      });
    },

    /* ── INTERAÇÕES (card na Home) ── */
    'interacoes': function (q, drug1, drug2) {
      _waitFor('navigate', function () {
        /* Garante que estamos na home onde o card vive */
        navigate('home');

        setTimeout(function () {
          /* Scroll até o card de interações */
          var card = document.getElementById('card-interactions-container');
          var sc   = document.getElementById('scroll-content');
          if (card && sc) {
            sc.scrollTo({ top: card.offsetTop - 60, behavior: 'smooth' });
          }

          /* drug1 e drug2 — preenche os dois campos */
          if (drug1 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(drug1));
          }
          if (drug2 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(drug2));
          }

          /* q simples → adiciona como drug1 */
          if (q && !drug1 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(q));
          }

          /* Se os dois campos foram preenchidos, executa checagem automaticamente */
          if (drug1 && drug2) {
            setTimeout(function () {
              if (typeof executarChecagemInteracoes === 'function') {
                executarChecagemInteracoes();
              }
            }, 400);
          }
        }, 350);
      });
    },

    /* ── SCORES (sub-view do adulto) ── */
    'scores': function (q) {
      _waitFor('showAdultPanel', function () {
        navigate('adult');
        setTimeout(function () {
          showAdultPanel('scores');
          if (q) {
            var scoreKey = SCORE_ALIASES[_norm(q)] || _norm(q);
            setTimeout(function () {
              if (typeof selectScore === 'function') {
                selectScore(scoreKey);
              }
            }, 200);
          }
        }, 150);
      });
    },

    /* ── RENAL / ClCr ── */
    'renal': function (q) {
      _waitFor('navigate', function () {
        navigate('calculators');
        _scrollTo('calc-clcr-card', 500);
      });
    },

    /* ── PEDIATRIA ── */
    'pediatria': function (q) {
      _waitFor('navigate', function () {
        navigate('ped');
      });
    },

    /* ── GESTANTE / OBSTETRÍCIA ── */
    'gestante': function (q) {
      _waitFor('navigate', function () {
        navigate('ob');
      });
    },

    /* ── INFUSÃO ── */
    'infusao': function (q) {
      _waitFor('navigate', function () {
        navigate('infusion');
        if (q) {
          var drugName = INFUSION_ALIASES[_norm(q)] || q;
          setTimeout(function () {
            var inp = document.getElementById('inf-drug-search');
            if (inp) {
              inp.value = drugName;
              inp.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (typeof bicHandleDrugInput === 'function') {
              bicHandleDrugInput(drugName);
            }
          }, 350);
        }
      });
    },

    /* ── ELETRÓLITOS ── */
    'eletrolitos': function (q) {
      _waitFor('navigate', function () {
        navigate('elec');
        if (q) {
          var cardId = ELEC_CARD_ALIASES[_norm(q)];
          if (cardId) {
            _scrollTo(cardId, 500);
          }
        }
      });
    },

    /* ── ANTIMICROBIANOS ── */
    'antimicrobianos': function (q) {
      _waitFor('navigate', function () {
        navigate('atb');
        /* atb é "em breve" — q é ignorado mas aceito para compatibilidade */
      });
    },

    /* ── HEMODINÂMICA (sub-view do adulto) ── */
    'hemodinamica': function (q) {
      _waitFor('showAdultPanel', function () {
        navigate('adult');
        setTimeout(function () {
          showAdultPanel('hemo');
          if (q) {
            var cardId = HEMO_CARD_ALIASES[_norm(q)];
            if (cardId) _scrollTo(cardId, 400);
          }
        }, 150);
      });
    },

    /* ── FLUIDOS (sub-view do adulto) ── */
    'fluidos': function (q) {
      _waitFor('showAdultPanel', function () {
        navigate('adult');
        setTimeout(function () {
          showAdultPanel('fluids');
        }, 150);
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
  TAB_HANDLERS['ped']                       = TAB_HANDLERS['pediatria'];
  TAB_HANDLERS['renal']                     = TAB_HANDLERS['renal'];
  TAB_HANDLERS['clcr']                      = TAB_HANDLERS['renal'];
  TAB_HANDLERS['atb']                       = TAB_HANDLERS['antimicrobianos'];
  TAB_HANDLERS['elec']                      = TAB_HANDLERS['eletrolitos'];
  TAB_HANDLERS['hemo']                      = TAB_HANDLERS['hemodinamica'];
  TAB_HANDLERS['adult']                     = TAB_HANDLERS['calculadoras'];
  TAB_HANDLERS['scores_clinicos']           = TAB_HANDLERS['scores'];

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

  console.log('[MedCases DeepLink] Router v1.1 carregado. API: window.MedCasesRouter | ?lang=pt|es suportado');

})();
