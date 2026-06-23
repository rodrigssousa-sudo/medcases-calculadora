/* ================================================================
   MedCases Pro — Hub Accordion v2.0
   ----------------------------------------------------------------
   Motor do novo layout Home Hub: cards expansíveis com todos os
   módulos clínicos na tela inicial, sem navegação multi-clique.

   RESPONSABILIDADES:
     1. hubToggle(id)         — abre/fecha card; accordion (fecha anterior)
     2. hubOpen(id, opts)     — abre programaticamente (usado pelo router)
     3. hubClose(id)          — fecha card
     4. hubCloseAll()         — fecha todos os cards
     5. _lazyMount(id)        — monta conteúdo de slot na primeira abertura
     6. _syncLang(lang)       — sincroniza labels PT/ES nos triggers
     7. _moveInteractions()   — move #card-interactions-container ao wrapper
     8. _scrollToCard(id)     — scroll suave até o card

   MAPA DE SLOTS (lazy mount):
     clcr        → clona subview ClCr do #page-adult ou usa hub-clcr-slot
     infusao     → move .infusion-module do #page-infusion
     hemodinamica→ move #subview-hemo content
     scores      → move #subview-scores content
     fluidos     → move #subview-fluids content
     eletrolitos → move .elec-card content from #page-elec

   API PÚBLICA:
     window.HubAccordion.open(id, opts)   — abre card e executa opts
     window.HubAccordion.close(id)        — fecha card
     window.HubAccordion.toggle(id)       — alterna
     window.HubAccordion.closeAll()       — fecha todos
     window.HubAccordion.syncLang(lang)   — sincroniza idioma

================================================================ */

(function () {
  'use strict';

  /* ── Estado interno ── */
  var _mounted   = {};   /* slots já montados */
  var _openCard  = null; /* ID do card atualmente aberto */

  /* ── Delay padrão para scroll ── */
  var SCROLL_DELAY = 180;

  /* ────────────────────────────────────────────────────────────────
     UTIL: scroll suave até o card no #scroll-content
  ──────────────────────────────────────────────────────────────── */
  function _scrollToCard(cardId, delay) {
    setTimeout(function () {
      var card = document.getElementById(cardId);
      var sc   = document.getElementById('scroll-content');
      if (!card) return;
      if (sc) {
        var top = card.offsetTop - 8;
        sc.scrollTo({ top: top, behavior: 'smooth' });
      } else {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay || SCROLL_DELAY);
  }

  /* ────────────────────────────────────────────────────────────────
     UTIL: scroll até elemento específico dentro do scroll-content
  ──────────────────────────────────────────────────────────────── */
  function _scrollToEl(elId, delay) {
    setTimeout(function () {
      var el = document.getElementById(elId);
      var sc = document.getElementById('scroll-content');
      if (!el) return;
      if (sc) {
        sc.scrollTo({ top: el.offsetTop - 10, behavior: 'smooth' });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay || 350);
  }

  /* ────────────────────────────────────────────────────────────────
     MOVER BLOCO: transplanta children de um elemento para outro
     sem quebrar event listeners (move o nó real, não clona)
  ──────────────────────────────────────────────────────────────── */
  function _moveChildren(fromId, toId) {
    var from = document.getElementById(fromId);
    var to   = document.getElementById(toId);
    if (!from || !to) return false;
    while (from.firstChild) {
      to.appendChild(from.firstChild);
    }
    return true;
  }

  /* Versão que move o próprio nó (não os filhos) */
  function _moveNode(nodeId, toId) {
    var node = document.getElementById(nodeId);
    var to   = document.getElementById(toId);
    if (!node || !to) return false;
    to.appendChild(node);
    return true;
  }

  /* ────────────────────────────────────────────────────────────────
     MOVER INTERAÇÕES
     #card-interactions-container (oculto) → #card-interactions-container-wrapper

     NOTAS DE SEGURANÇA (fix 2026-06-23):
     - Após remoção do container legado duplicado (que era o primeiro no DOM
       e causava getElementById() pegar o container errado/inativo), agora
       existe apenas UM único #card-interactions-container — o container v3.
     - _mounted['interacoes'] garante que o move só ocorre uma vez.
     - Se wrapper ainda não estiver no DOM (race condition de init), retentar.
  ──────────────────────────────────────────────────────────────── */
  function _moveInteractions(attempt) {
    if (_mounted['interacoes']) return;
    attempt = attempt || 0;
    var src     = document.getElementById('card-interactions-container');
    var wrapper = document.getElementById('card-interactions-container-wrapper');
    if (src && wrapper) {
      src.style.display = '';
      wrapper.appendChild(src);
      _mounted['interacoes'] = true;
      console.log('[HubAccordion] _moveInteractions() OK — container v3 movido para wrapper.');
    } else if (attempt < 15) {
      /* Retry: wrapper pode não estar no DOM ainda (lazy render) */
      setTimeout(function () { _moveInteractions(attempt + 1); }, 100);
    } else {
      console.warn('[HubAccordion] _moveInteractions() falhou após 15 tentativas. src=', !!src, 'wrapper=', !!wrapper);
    }
  }

  /* ────────────────────────────────────────────────────────────────
     LAZY MOUNT — monta o conteúdo do slot na primeira abertura
  ──────────────────────────────────────────────────────────────── */
  function _lazyMount(id) {
    if (_mounted[id]) return;

    switch (id) {

      /* ── ClCr Renal ────────────────────────────────────────── */
      case 'clcr': {
        var slot = document.getElementById('hub-clcr-slot');
        if (!slot) break;
        /* O card de ClCr no hub mostra o resultado-dashboard real
           e permite calcular direto pela home */
        slot.innerHTML =
          '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:10px;">' +
            '<i class="fa-solid fa-circle-info" style="color:var(--cyan);margin-right:5px;"></i>' +
            '<span data-i18n="hub_clcr_hint">Preencha Dados do Paciente acima e clique em Fixar Dados para calcular o ClCr automaticamente.</span>' +
          '</div>' +
          '<div id="hub-clcr-result-area"></div>' +
          '<div style="margin-top:14px;">' +
            '<button class="hm-btn hm-btn--primary" style="width:100%;" onclick="hubOpen(\'patient\')">' +
              '<i class="fa-solid fa-user-injured"></i> ' +
              '<span data-i18n="hub_clcr_btn">Abrir Dados do Paciente</span>' +
            '</button>' +
          '</div>';

        /* Se já há resultado calculado, injetar pills de resultado */
        _syncClcrResult();
        _mounted['clcr'] = true;
        break;
      }

      /* ── Interações ─────────────────────────────────────────── */
      case 'interacoes': {
        _moveInteractions();
        break;
      }

      /* ── Infusão ────────────────────────────────────────────── */
      case 'infusao': {
        var slot = document.getElementById('hub-infusao-slot');
        if (!slot) break;
        /* Move o .infusion-module inteiro do #page-infusion para o slot.
           Estratégia: mover é mais seguro que clonar — preserva todos os
           event handlers e IDs originais sem remapeamento.
           O #page-infusion fica como shell e ao ser chamado via navigate()
           legado, o hub-accordion intercepta e expande o card correto. */
        var infModule = document.querySelector('#page-infusion .infusion-module');
        var infPage   = document.getElementById('page-infusion');
        if (infModule) {
          slot.appendChild(infModule);
        } else {
          slot.innerHTML = '<p style="color:var(--text-secondary);font-size:12px;">Módulo de infusão não encontrado.</p>';
        }
        /* Deixa um redirect em #page-infusion para redirecionar para o hub */
        if (infPage) {
          var redirect = document.createElement('div');
          redirect.style.cssText = 'padding:20px;text-align:center;';
          redirect.innerHTML =
            '<p style="color:var(--text-secondary);font-size:13px;margin-bottom:12px;">' +
              '<i class="fa-solid fa-arrow-up-left" style="margin-right:6px;color:var(--cyan)"></i>' +
              'Módulo movido para o Hub da página inicial.' +
            '</p>' +
            '<button class="btn-primary" onclick="hubOpen(\'infusao\')" style="margin:0 auto;display:block;">' +
              '<i class="fa-solid fa-syringe"></i> Abrir Infusão no Hub' +
            '</button>';
          var backBar = infPage.querySelector('.section-back-bar');
          if (backBar) {
            infPage.insertBefore(redirect, backBar.nextSibling);
          } else {
            infPage.appendChild(redirect);
          }
        }
        _mounted['infusao'] = true;
        break;
      }

      /* ── Hemodinâmica ───────────────────────────────────────── */
      case 'hemodinamica': {
        var slot = document.getElementById('hub-hemo-slot');
        if (!slot) break;
        /* Move o conteúdo do #subview-hemo para o slot.
           Estratégia: mover preserva os IDs originais (h-pas, h-pad etc.)
           que calcHemo() usa. O subview-hemo fica como shell vazio em page-adult. */
        var hemoView = document.getElementById('subview-hemo');
        if (hemoView) {
          var bb = hemoView.querySelector('.section-back-bar');
          if (bb) bb.remove();
          while (hemoView.firstChild) {
            slot.appendChild(hemoView.firstChild);
          }
          /* Injeta redirect em subview-hemo */
          hemoView.innerHTML =
            '<div style="padding:16px;text-align:center;">' +
              '<button class="btn-primary" onclick="hubOpen(\'hemodinamica\')" style="margin:0 auto;display:block;">' +
                '<i class="fa-solid fa-heart-pulse"></i> Abrir Hemodinâmica no Hub' +
              '</button></div>';
        } else {
          slot.innerHTML = '<p style="color:var(--text-secondary);font-size:12px;">Módulo hemodinâmica não encontrado.</p>';
        }
        _mounted['hemodinamica'] = true;
        break;
      }

      /* ── Scores ─────────────────────────────────────────────── */
      case 'scores': {
        var slot = document.getElementById('hub-scores-slot');
        if (!slot) break;
        /* Move o conteúdo do #subview-scores para o slot.
           Estratégia: mover preserva os IDs (scard-sofa etc.) e
           a área de resultado #score-calc-area. O subview-scores
           fica como shell com redirect. */
        var scoresView = document.getElementById('subview-scores');
        if (scoresView) {
          var bb = scoresView.querySelector('.section-back-bar');
          if (bb) bb.remove();
          while (scoresView.firstChild) {
            slot.appendChild(scoresView.firstChild);
          }
          scoresView.innerHTML =
            '<div style="padding:16px;text-align:center;">' +
              '<button class="btn-primary" onclick="hubOpen(\'scores\')" style="margin:0 auto;display:block;">' +
                '<i class="fa-solid fa-chart-bar"></i> Abrir Scores no Hub' +
              '</button></div>';
        } else {
          slot.innerHTML = '<p style="color:var(--text-secondary);font-size:12px;">Módulo scores não encontrado.</p>';
        }
        _mounted['scores'] = true;
        break;
      }

      /* ── Fluidos ────────────────────────────────────────────── */
      case 'fluidos': {
        var slot = document.getElementById('hub-fluidos-slot');
        if (!slot) break;
        /* Move o conteúdo do #subview-fluids para o slot. */
        var fluidsView = document.getElementById('subview-fluids');
        if (fluidsView) {
          var bb = fluidsView.querySelector('.section-back-bar');
          if (bb) bb.remove();
          while (fluidsView.firstChild) {
            slot.appendChild(fluidsView.firstChild);
          }
          fluidsView.innerHTML =
            '<div style="padding:16px;text-align:center;">' +
              '<button class="btn-primary" onclick="hubOpen(\'fluidos\')" style="margin:0 auto;display:block;">' +
                '<i class="fa-solid fa-droplet"></i> Abrir Fluidos no Hub' +
              '</button></div>';
        } else {
          slot.innerHTML = '<p style="color:var(--text-secondary);font-size:12px;">Módulo fluidos não encontrado.</p>';
        }
        _mounted['fluidos'] = true;
        break;
      }

      /* ── Eletrólitos v3.0 — Calculadora button-driven ────────── */
      case 'eletrolitos': {
        var slot = document.getElementById('hub-elec-slot');
        if (!slot) break;
        /* Usar a nova calculadora ElecCalc se disponível */
        if (window.ElecCalc && typeof window.ElecCalc.render === 'function') {
          window.ElecCalc.render();
        } else {
          /* Fallback: mover conteúdo do #page-elec legado */
          var elecPage = document.getElementById('page-elec');
          if (elecPage) {
            var bb = elecPage.querySelector('.section-back-bar');
            if (bb) bb.remove();
            while (elecPage.firstChild) {
              slot.appendChild(elecPage.firstChild);
            }
          } else {
            slot.innerHTML = '<p style="color:var(--text-secondary);font-size:12px;padding:12px;">Calculadora de Eletrólitos carregando...</p>';
          }
        }
        _mounted['eletrolitos'] = true;
        break;
      }

      /* ── Patient / Farmacos / Gestante / Pediatria ──────────── */
      /* Esses cards têm conteúdo embutido diretamente no HTML — nada a montar */
      default:
        _mounted[id] = true;
        break;
    }
  }

  /* ────────────────────────────────────────────────────────────────
     SINCRONIZAR ClCr no slot (preenche resultado se já calculado)
  ──────────────────────────────────────────────────────────────── */
  function _syncClcrResult() {
    var area = document.getElementById('hub-clcr-result-area');
    if (!area) return;
    var clcr   = document.getElementById('hm-pv-clcr');
    var clcrSrc= document.getElementById('hm-pv-clcr-src');
    var imc    = document.getElementById('hm-pv-imc');
    var bsa    = document.getElementById('hm-pv-bsa');
    var peso   = document.getElementById('hm-pv-peso');
    if (!clcr || clcr.textContent === '—') {
      area.innerHTML = '<p style="font-size:12px;color:var(--text-muted);text-align:center;padding:10px 0;">' +
        '<i class="fa-solid fa-calculator" style="margin-right:6px;opacity:0.5;"></i>' +
        'Nenhum cálculo realizado ainda</p>';
      return;
    }
    area.innerHTML =
      '<div class="hm-result-pills" style="display:flex;flex-wrap:wrap;gap:8px;">' +
        '<div class="hm-pill"><span class="hm-pill-val" id="hub-clcr-val">' + (clcr ? clcr.textContent : '—') + '</span><span class="hm-pill-lbl">ClCr</span><span class="hm-pill-lbl" style="font-size:7.5px;opacity:0.55;">' + (clcrSrc ? clcrSrc.textContent : 'CG') + '</span></div>' +
        '<div class="hm-pill"><span class="hm-pill-val">' + (imc ? imc.textContent : '—') + '</span><span class="hm-pill-lbl">IMC</span></div>' +
        '<div class="hm-pill"><span class="hm-pill-val">' + (peso ? peso.textContent : '—') + '</span><span class="hm-pill-lbl">Peso Ideal</span></div>' +
        '<div class="hm-pill"><span class="hm-pill-val">' + (bsa ? bsa.textContent : '—') + '</span><span class="hm-pill-lbl">BSA m²</span></div>' +
      '</div>';
  }

  /* ────────────────────────────────────────────────────────────────
     ACCORDION CORE: toggle, open, close
  ──────────────────────────────────────────────────────────────── */

  /**
   * Abre ou fecha o card. Fecha o card anteriormente aberto (accordion).
   * @param {string} id - data-hub do card (ex: 'farmacos', 'interacoes')
   */
  function hubToggle(id) {
    var card = document.getElementById('hub-card-' + id);
    if (!card) return;
    var isOpen = card.classList.contains('is-open');
    if (isOpen) {
      _closeCard(id);
    } else {
      /* Fecha o card anterior antes de abrir o novo */
      if (_openCard && _openCard !== id) {
        _closeCard(_openCard);
      }
      _openCard = id;
      _openCard_fn(id);
    }
  }

  /* ────────────────────────────────────────────────────────────────
     FALLBACK :has() — browsers sem suporte (Firefox < 121)
     Adiciona/remove .hub-accordion--expanded no container
     para que o CSS de fallback funcione corretamente.
  ──────────────────────────────────────────────────────────────── */
  function _updateAccordionState(hasOpen) {
    var nav = document.getElementById('hub-accordion');
    if (!nav) return;
    if (hasOpen) {
      nav.classList.add('hub-accordion--expanded');
    } else {
      nav.classList.remove('hub-accordion--expanded');
    }
  }

  function _openCard_fn(id) {
    /* Lazy mount: monta conteúdo se ainda não montado */
    _lazyMount(id);

    var card    = document.getElementById('hub-card-' + id);
    var body    = document.getElementById('hub-body-' + id);
    var trigger = card && card.querySelector('.hub-card-trigger');

    if (!card || !body) return;

    card.classList.add('is-open');
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'true');
    }

    /* Fallback para browsers sem :has() */
    _updateAccordionState(true);

    /* Scroll até o card após abrir */
    _scrollToCard('hub-card-' + id, SCROLL_DELAY);
  }

  function _closeCard(id) {
    var card    = document.getElementById('hub-card-' + id);
    var trigger = card && card.querySelector('.hub-card-trigger');

    if (!card) return;

    card.classList.remove('is-open');
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }

    if (_openCard === id) _openCard = null;

    /* Verifica se ainda há algum card aberto */
    var stillOpen = document.querySelector('.hub-card.is-open');
    _updateAccordionState(!!stillOpen);
  }

  function hubCloseAll() {
    var cards = document.querySelectorAll('.hub-card.is-open');
    cards.forEach(function (c) {
      var id = c.getAttribute('data-hub');
      if (id) {
        c.classList.remove('is-open');
        var trigger = c.querySelector('.hub-card-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
    _openCard = null;
    _updateAccordionState(false);
  }

  /* ────────────────────────────────────────────────────────────────
     ABERTURA PROGRAMÁTICA (usada pelo deep link router)
     @param {string} id   - data-hub do card
     @param {object} opts - { scrollEl, q, drug1, drug2, scoreKey, ionKey }
  ──────────────────────────────────────────────────────────────── */
  function hubOpen(id, opts) {
    opts = opts || {};

    /* Navega para home se não estiver nela */
    if (typeof navigate === 'function') {
      navigate('home');
    }

    /* Pequeno delay para garantir que a page-home esteja visível */
    setTimeout(function () {
      /* Fecha todos antes de abrir o novo */
      hubCloseAll();

      /* Abre o card */
      _openCard = id;
      _openCard_fn(id);

      /* Ações pós-abertura */
      if (opts.after && typeof opts.after === 'function') {
        setTimeout(opts.after, 350);
      }

      /* Scroll até elemento específico dentro do card */
      if (opts.scrollEl) {
        _scrollToEl(opts.scrollEl, 450);
      }

      /* Módulo-específico: q de busca no card farmacos */
      if (id === 'farmacos' && opts.q) {
        setTimeout(function () {
          var inp = document.getElementById('hm-drug-search');
          if (inp) {
            inp.value = opts.q;
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            if (typeof hmFilterDrugs === 'function') hmFilterDrugs(opts.q);
          }
        }, 300);
      }

      /* Módulo-específico: interações */
      if (id === 'interacoes') {
        setTimeout(function () {
          if (opts.drug1 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(opts.drug1));
          }
          if (opts.drug2 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(opts.drug2));
          }
          if (opts.q && !opts.drug1 && typeof adicionarChipInteracao === 'function') {
            adicionarChipInteracao(_capitalize(opts.q));
          }
          if (opts.drug1 && opts.drug2) {
            setTimeout(function () {
              if (typeof executarChecagemInteracoes === 'function') {
                executarChecagemInteracoes();
              }
            }, 400);
          }
        }, 350);
      }

      /* Módulo-específico: scores */
      if (id === 'scores' && opts.scoreKey) {
        setTimeout(function () {
          if (typeof selectScore === 'function') {
            selectScore(opts.scoreKey);
          }
        }, 350);
      }

      /* Módulo-específico: infusão com q → modo Selecionar Droga */
      if (id === 'infusao' && opts.q) {
        setTimeout(function () {
          if (typeof setInfusionMode === 'function') {
            setInfusionMode('drug');
          }
          setTimeout(function () {
            var inp = document.getElementById('inf-drug-search');
            if (inp) {
              inp.value = opts.q;
              inp.dispatchEvent(new Event('input', { bubbles: true }));
            }
            if (typeof bicHandleDrugInput === 'function') {
              bicHandleDrugInput(opts.q);
            }
          }, 200);
        }, 350);
      }

      /* Módulo-específico: eletrólito → seleciona íon via nova API ElecCalc */
      if (id === 'eletrolitos') {
        setTimeout(function () {
          /* opts.elecKey: chave do eletrólito (k, na, mg, etc.) — deep link */
          if (opts.elecKey && window.ElecCalc && typeof window.ElecCalc.selectElectrolyte === 'function') {
            window.ElecCalc.selectElectrolyte(opts.elecKey);
          }
          /* Fallback legado: scrollEl com ID antigo */
          if (opts.scrollEl) {
            _scrollToEl(opts.scrollEl, 250);
          }
        }, 350);
      }

    }, 80);
  }

  /* ────────────────────────────────────────────────────────────────
     SINCRONIZAR IDIOMA nos triggers do hub
  ──────────────────────────────────────────────────────────────── */
  function _syncLang(lang) {
    var l = (lang || 'pt').toLowerCase().startsWith('es') ? 'es' : 'pt';
    document.body.setAttribute('data-lang', l);
  }

  /* ────────────────────────────────────────────────────────────────
     HOOK na função setLang do app para manter hub em sincronia
  ──────────────────────────────────────────────────────────────── */
  function _hookSetLang() {
    var orig = window.setLang;
    if (typeof orig === 'function') {
      window.setLang = function (lang) {
        orig.call(this, lang);
        _syncLang(lang);
      };
    }
  }

  /* ────────────────────────────────────────────────────────────────
     INIT: configura o accordion ao carregar o DOM
  ──────────────────────────────────────────────────────────────── */
  function _init() {
    /* Monta as interações imediatamente (o motor JS pode precisar do DOM) */
    _moveInteractions();

    /* Lê idioma atual e sincroniza */
    var currentLang = window.currentLang ||
                      (localStorage && localStorage.getItem('lang')) ||
                      'pt';
    _syncLang(currentLang);

    /* Hook no setLang para manter lang-hub-pt/es em sincronia */
    var hookAttempts = 0;
    var hookInterval = setInterval(function () {
      hookAttempts++;
      if (typeof window.setLang === 'function') {
        clearInterval(hookInterval);
        _hookSetLang();
      }
      if (hookAttempts > 50) clearInterval(hookInterval);
    }, 100);

    /* Expõe API pública */
    window.HubAccordion = {
      open:     hubOpen,
      close:    _closeCard,
      toggle:   hubToggle,
      closeAll: hubCloseAll,
      syncLang: _syncLang,
    };

    /* Expõe hubToggle e hubOpen globalmente (usados por onclick= no HTML) */
    window.hubToggle = hubToggle;
    window.hubOpen   = hubOpen;

    console.log('[HubAccordion] v2.0 pronto. Cards: patient, clcr, farmacos, interacoes, pediatria, gestante, infusao, hemodinamica, scores, fluidos, eletrolitos');
  }

  /* ── Capitaliza a primeira letra ── */
  function _capitalize(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* ── Aguarda DOM estar pronto ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

})();

