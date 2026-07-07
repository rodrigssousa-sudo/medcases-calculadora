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
        /* Card premium — sem hint longo. Resultado direto ou mensagem curta. */
        slot.innerHTML =
          '<div id="hub-clcr-result-area"></div>' +
          '<div style="margin-top:12px;">' +
            '<button class="hm-btn hm-btn--primary" style="width:100%;" onclick="hubOpen(\'patient\')">' +
              '<i class="fa-solid fa-user-injured"></i> ' +
              '<span class="lang-hub-pt">Abrir Dados do Paciente</span>' +
              '<span class="lang-hub-es">Abrir Datos del Paciente</span>' +
            '</button>' +
          '</div>';

        /* Injeta resultado se já calculado */
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
     HELPER — Classificação de IMC (sem alterar cálculo)
  ──────────────────────────────────────────────────────────────── */
  function _imcCategory(imcVal, isES) {
    var v = parseFloat(imcVal);
    if (isNaN(v)) return '';
    if      (v <  18.5) return isES ? 'Bajo peso'    : 'Abaixo do peso';
    else if (v <  25.0) return isES ? 'Normal'        : 'Normal';
    else if (v <  30.0) return isES ? 'Sobrepeso'     : 'Sobrepeso';
    else if (v <  35.0) return isES ? 'Obesidad I'    : 'Obesidade I';
    else if (v <  40.0) return isES ? 'Obesidad II'   : 'Obesidade II';
    else                return isES ? 'Obesidad III'  : 'Obesidade III';
  }

  /* ────────────────────────────────────────────────────────────────
     HELPER — Gera HTML premium dos 3 mini-cards (Build 227)
     Reutilizado por _syncClcrResult() e hmFixarDados() via window
  ──────────────────────────────────────────────────────────────── */
  function _buildMiniCards(imcVal, pesoVal, bsaVal, isES) {
    if (!imcVal && !pesoVal && !bsaVal) return '';

    var imcCat  = imcVal  ? _imcCategory(imcVal, isES)  : '';
    var pesoLbl = isES ? 'Peso Ideal' : 'Peso Ideal';
    var bsaLbl  = isES ? 'Área Corporal' : 'Área Corporal';

    var imcCard = imcVal
      ? '<div class="clcr-mini-card clcr-mini-card--imc">' +
          '<div class="clcr-mini-number clcr-num-updated">' + imcVal + '</div>' +
          '<div class="clcr-mini-unit">kg/m²</div>' +
          '<div class="clcr-mini-title">IMC</div>' +
          (imcCat ? '<div class="clcr-mini-sub">' + imcCat + '</div>' : '') +
        '</div>'
      : '';

    var pesoCard = pesoVal
      ? '<div class="clcr-mini-card clcr-mini-card--peso">' +
          '<div class="clcr-mini-number clcr-num-updated">' + pesoVal + '</div>' +
          '<div class="clcr-mini-unit">kg</div>' +
          '<div class="clcr-mini-title">' + pesoLbl + '</div>' +
          '<div class="clcr-mini-sub">Devine</div>' +
        '</div>'
      : '';

    var bsaCard = bsaVal
      ? '<div class="clcr-mini-card clcr-mini-card--bsa">' +
          '<div class="clcr-mini-number clcr-num-updated">' + bsaVal + '</div>' +
          '<div class="clcr-mini-unit">m²</div>' +
          '<div class="clcr-mini-title">' + bsaLbl + '</div>' +
          '<div class="clcr-mini-sub">Mosteller</div>' +
        '</div>'
      : '';

    return '<div class="clcr-mini-grid">' + imcCard + pesoCard + bsaCard + '</div>';
  }

  /* Expõe helper para uso no hmFixarDados() em index.html */
  window._buildMiniCards   = _buildMiniCards;
  window._imcCategory      = _imcCategory;

  /* ────────────────────────────────────────────────────────────────
     SINCRONIZAR ClCr no slot (preenche resultado se já calculado)
  ──────────────────────────────────────────────────────────────── */
  function _syncClcrResult() {
    var area = document.getElementById('hub-clcr-result-area');
    if (!area) return;

    var clcr    = document.getElementById('hm-pv-clcr');
    var clcrSrc = document.getElementById('hm-pv-clcr-src');
    var imc     = document.getElementById('hm-pv-imc');
    var bsa     = document.getElementById('hm-pv-bsa');
    var peso    = document.getElementById('hm-pv-peso');

    var lang      = (typeof currentLang !== 'undefined' ? currentLang : 'pt');
    var isES      = (lang === 'es');
    var hasResult = clcr && clcr.textContent && clcr.textContent !== '—';

    console.log('[CLCR_CARD] hasResult=' + hasResult +
      ' clcr=' + (clcr ? clcr.textContent : 'null') +
      ' lang=' + lang);

    if (!hasResult) {
      area.innerHTML =
        '<p style="font-size:12px;color:var(--text-secondary);text-align:center;padding:12px 0;">' +
          '<i class="fa-solid fa-syringe" style="margin-right:6px;opacity:0.6;"></i>' +
          (isES
            ? 'Ingrese la creatinina en Datos del Paciente para calcular.'
            : 'Informe a creatinina nos Dados do Paciente para calcular.') +
        '</p>';
      return;
    }

    /* ── Categoria renal (lógica inalterada) ── */
    var v = parseFloat(clcr.textContent);
    var cat, rec, catColor;

    if      (v >= 90) { cat = isES ? 'Función renal preservada'       : 'Função renal preservada';          catColor = '#10b981'; rec = isES ? 'Sin ajuste necesario.'                                   : 'Sem ajuste necessário.'; }
    else if (v >= 60) { cat = isES ? 'Reducción leve'                 : 'Redução leve';                     catColor = '#34d399'; rec = isES ? 'Verificar ajuste en fármacos de eliminación renal.'      : 'Verificar ajuste em fármacos de eliminação renal.'; }
    else if (v >= 30) { cat = isES ? 'Reducción moderada'             : 'Redução moderada';                 catColor = '#f59e0b'; rec = isES ? 'Ajustar dosis de nefrotóxicos y eliminación renal.'     : 'Ajustar dose de nefrotóxicos e eliminação renal.'; }
    else if (v >= 15) { cat = isES ? 'Reducción grave'                : 'Redução grave';                    catColor = '#f87171'; rec = isES ? 'Ajuste significativo en la mayoría de fármacos renales.' : 'Ajuste significativo na maioria dos fármacos renais.'; }
    else              { cat = isES ? 'Falla renal / evaluar diálisis' : 'Falência renal / avaliar diálise';  catColor = '#ef4444'; rec = isES ? 'Evitar nefrotóxicos. Evaluar diálisis.'                : 'Evitar nefrotóxicos. Avaliar diálise.'; }

    console.log('[CLCR_CARD] hasResult=true clcr=' + v + ' category=' + cat);

    var imcVal  = (imc  && imc.textContent  && imc.textContent  !== '—') ? imc.textContent  : null;
    var pesoVal = (peso && peso.textContent && peso.textContent !== '—') ? peso.textContent : null;
    var bsaVal  = (bsa  && bsa.textContent  && bsa.textContent  !== '—') ? bsa.textContent  : null;
    var srcVal  = (clcrSrc && clcrSrc.textContent) ? clcrSrc.textContent : 'CG';

    area.innerHTML =
      /* ── Bloco hero: ClCr principal ── */
      '<div class="clcr-hero">' +
        '<div class="clcr-hero-value">' +
          '<div class="clcr-hero-number clcr-num-updated" style="color:' + catColor + ';">' + v + '</div>' +
          '<div class="clcr-hero-unit">mL/min · ' + srcVal + '</div>' +
        '</div>' +
        '<div class="clcr-hero-info">' +
          '<div class="clcr-hero-cat" style="color:' + catColor + ';">' + cat + '</div>' +
          '<div class="clcr-hero-rec">' + rec + '</div>' +
        '</div>' +
      '</div>' +
      /* ── Mini-cards premium: IMC · Peso Ideal · BSA ── */
      _buildMiniCards(imcVal, pesoVal, bsaVal, isES);
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

    /* BUILD 275 — RESET DE ESTADO AO FECHAR SCORES
       Quando o card de Scores é fechado, limpa todos os inputs
       (textos, rádios, checkboxes) dentro do painel, e reseta o
       estado interno do motor de scores (activeScore, scoreSelections).
       Garante formulário zerado para o próximo paciente, sem
       persistência de dados anteriores entre atendimentos.
       ─────────────────────────────────────────────────────────────
       Execução defensiva: wrapped em try/catch para não bloquear
       o fechamento se algum seletor inesperado falhar. */
    if (id === 'scores') {
      try {
        var scoreBody = document.getElementById('hub-body-scores');
        if (scoreBody) {
          /* Limpa todos os inputs de texto e number */
          scoreBody.querySelectorAll('input[type="text"], input[type="number"]').forEach(function (el) {
            el.value = '';
          });
          /* Desmarca todos os rádios e checkboxes */
          scoreBody.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(function (el) {
            el.checked = false;
          });
          /* Remove classe is-active dos toggle-buttons (univ-toggle-btn e score-check) */
          scoreBody.querySelectorAll('.is-active, .selected').forEach(function (el) {
            el.classList.remove('is-active', 'selected');
          });
          /* Remove seleção dos score-cards (scard-*) */
          scoreBody.querySelectorAll('[id^="scard-"]').forEach(function (el) {
            el.classList.remove('selected');
          });
          /* Oculta o result-card se estiver visível */
          scoreBody.querySelectorAll('.univ-result-card').forEach(function (el) {
            el.classList.remove('is-visible');
          });
          /* Limpa textarea do result legado, se existir */
          scoreBody.querySelectorAll('textarea').forEach(function (el) {
            el.value = '';
          });
        }
        /* Reseta variáveis globais do motor de scores.
           scoreSelections é um objeto mutado inline (não reatribuído),
           então limpamos suas chaves em vez de reatribuir a referência
           — isso garante que o scoreChange() local veja o objeto zerado. */
        if (typeof window.activeScore !== 'undefined') window.activeScore = null;
        if (typeof window.scoreSelections !== 'undefined') {
          Object.keys(window.scoreSelections).forEach(function (k) {
            delete window.scoreSelections[k];
          });
        }
        /* Limpa a área de cálculo do score (bloco renderizado pelo JS) */
        var calcArea = document.getElementById('score-calc-area');
        if (calcArea) calcArea.innerHTML = '';
      } catch (e) {
        /* Reset silencioso — não bloqueia o fechamento do card */
        console.warn('[HubAccordion] Aviso: reset de scores falhou parcialmente.', e);
      }
    }

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

    /* Expõe hubToggle e hubOpen globalmente (usados por onclick= no HTML) */
    window.hubToggle = hubToggle;
    window.hubOpen   = hubOpen;

    /* HOTFIX (Engenharia — DeepLink/Overlay): HubAccordion.open/toggle
       NÃO podem capturar hubOpen/hubToggle por valor aqui — calculator-
       overlay.js faz monkey-patch em window.hubOpen/window.hubToggle
       DEPOIS deste init, e uma captura direta (open: hubOpen) ficaria
       "congelada" na função ORIGINAL, ignorando o patch. Isso fazia
       com que aberturas via window.HubAccordion.open() (usado pelo
       deeplink-router.js para ?tab=farmacos etc.) NUNCA passassem por
       openInOverlay() — a sub-tela full-screen nunca era acionada para
       deep links, deixando qualquer conteúdo anteriormente movido para
       #calculator-overlay-container (ex.: "Dados do Paciente" de uma
       interação prévia na mesma sessão) visível por cima da resposta
       do fármaco. Fix: delega em runtime para window.hubOpen/hubToggle
       (sempre a versão mais recente, patched ou não). */
    window.HubAccordion = {
      open:     function (id, opts) { return window.hubOpen(id, opts); },
      close:    _closeCard,
      toggle:   function (id) { return window.hubToggle(id); },
      closeAll: hubCloseAll,
      syncLang: _syncLang,
    };

    /* BUILD 275 — ZERO AUTO-OPEN GUARD
       Garante tela 100% colapsada no boot, independente de qualquer
       classe is-open que possa ter sido persistida no DOM (ex: cache
       do browser, SSR, ou qualquer outro mecanismo não identificado).
       Executa DEPOIS de expor window.HubAccordion para que o deeplink-
       router.js, que roda 120ms após, ainda possa abrir sua aba alvo
       normalmente via ?tab=. Este guard apenas limpa o estado inicial. */
    var _bootCards = document.querySelectorAll('.hub-card.is-open');
    if (_bootCards.length > 0) {
      _bootCards.forEach(function (c) {
        c.classList.remove('is-open');
        var t = c.querySelector('.hub-card-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      _openCard = null;
      _updateAccordionState(false);
      console.log('[HubAccordion] BUILD 275: ' + _bootCards.length + ' card(s) forçado(s) fechado(s) no boot (zero auto-open).');
    }

    console.log('[HubAccordion] v2.1 (BUILD 275) pronto. Cards: patient, clcr, farmacos, interacoes, pediatria, gestante, infusao, hemodinamica, scores, fluidos, eletrolitos');
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
