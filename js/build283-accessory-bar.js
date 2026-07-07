/* ================================================================
   MedCases Pro — BUILD 283 — MOBILE ACCESSORY BAR
   ----------------------------------------------------------------
   Implementa uma barra acessória fixa (Sticky Accessory Bar) que
   aparece acima do teclado virtual quando qualquer campo de dados
   do paciente recebe foco em WebView iOS/Android.

   COMPORTAMENTO:
   - Aparece ao focar um input do formulário de dados do paciente
   - Botões "‹ Anterior" e "Próximo ›" avançam/retrocedem o foco
     entre os campos SEM fechar o teclado
   - Botão "✓ Feito" chama blur() + fecha a barra
   - Posição: fixed na parte inferior da visualViewport (acima do teclado)
   - Suporta visualViewport API (iOS ≥ 13, Android Chrome ≥ 62)
     com fallback para window.innerHeight

   CAMPOS COBERTOS: hm-weight, hm-age, hm-height, hm-creatinina

   ZERO impacto em lógica clínica — apenas UI de navegação.
================================================================ */
;(function (window) {
  'use strict';

  /* ── Configuração ── */
  var INPUT_IDS = ['hm-weight', 'hm-age', 'hm-height', 'hm-creatinina'];
  var BAR_ID    = 'mc-accessory-bar';

  /* ── Estado ── */
  var _currentIndex = -1;
  var _bar          = null;
  var _visible      = false;

  /* ────────────────────────────────────────────────────────────────
     CRIAÇÃO DA BARRA
  ──────────────────────────────────────────────────────────────── */
  function _createBar() {
    if (document.getElementById(BAR_ID)) return;

    var bar = document.createElement('div');
    bar.id = BAR_ID;
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', 'Navegação entre campos');

    /* Estilos inline — independentes de qualquer CSS do app */
    bar.style.cssText = [
      'position: fixed',
      'left: 0',
      'right: 0',
      'bottom: 0',
      'z-index: 99999',
      'display: none',          /* começa oculta */
      'align-items: center',
      'justify-content: space-between',
      'padding: 6px 12px',
      'background: #1a2035',
      'border-top: 1px solid rgba(56,189,248,0.25)',
      'box-shadow: 0 -2px 12px rgba(0,0,0,0.45)',
      'gap: 8px',
      /* Evita que o iOS encolha a barra sob o safe-area */
      'padding-bottom: calc(6px + env(safe-area-inset-bottom, 0px))',
      'box-sizing: border-box',
      '-webkit-tap-highlight-color: transparent'
    ].join(';');

    /* Botões */
    var btnPrev = _mkBtn('‹ Anterior', 'mc-acc-prev', _focusPrev);
    var btnNext = _mkBtn('Próximo ›',  'mc-acc-next', _focusNext);
    var btnDone = _mkBtn('✓ Feito',    'mc-acc-done', _dismiss,  true);

    var navGroup = document.createElement('div');
    navGroup.style.cssText = 'display:flex;gap:6px;';
    navGroup.appendChild(btnPrev);
    navGroup.appendChild(btnNext);

    bar.appendChild(navGroup);
    bar.appendChild(btnDone);

    document.body.appendChild(bar);
    _bar = bar;

    /* Posiciona acima do teclado via visualViewport */
    _bindViewport();

    console.log('[ACCESSORY_BAR] BUILD 283: barra criada e montada no DOM');
  }

  /* ────────────────────────────────────────────────────────────────
     HELPER: cria botão da barra
  ──────────────────────────────────────────────────────────────── */
  function _mkBtn(label, id, handler, isDone) {
    var btn = document.createElement('button');
    btn.id   = id;
    btn.type = 'button';
    btn.textContent = label;
    btn.style.cssText = [
      'border: none',
      'border-radius: 8px',
      'padding: 8px 16px',
      'font-size: 14px',
      'font-weight: 700',
      'cursor: pointer',
      'min-height: 36px',
      'min-width: 80px',
      '-webkit-tap-highlight-color: transparent',
      isDone
        ? 'background:#38bdf8;color:#0a0e1a;'
        : 'background:rgba(255,255,255,0.09);color:rgba(255,255,255,0.85);'
    ].join(';');

    /* touchstart para resposta imediata no iOS */
    btn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      handler();
    }, { passive: false });

    /* mousedown fallback para desktop/Android */
    btn.addEventListener('mousedown', function (e) {
      e.preventDefault();
      handler();
    });

    return btn;
  }

  /* ────────────────────────────────────────────────────────────────
     POSICIONAMENTO: visualViewport mantém barra acima do teclado
  ──────────────────────────────────────────────────────────────── */
  function _updateBarPosition() {
    if (!_bar || !_visible) return;

    if (window.visualViewport) {
      /* Viewport visual = área visível acima do teclado */
      var vvTop    = window.visualViewport.offsetTop  || 0;
      var vvHeight = window.visualViewport.height;
      var bottom   = window.innerHeight - (vvTop + vvHeight);
      /* bottom é o espaço ocupado pelo teclado; posiciona barra exatamente acima */
      _bar.style.bottom = Math.max(0, bottom) + 'px';
    } else {
      _bar.style.bottom = '0px';
    }
  }

  function _bindViewport() {
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', _updateBarPosition, { passive: true });
      window.visualViewport.addEventListener('scroll', _updateBarPosition, { passive: true });
    } else {
      window.addEventListener('resize', _updateBarPosition, { passive: true });
    }
  }

  /* ────────────────────────────────────────────────────────────────
     SHOW / HIDE
  ──────────────────────────────────────────────────────────────── */
  function _show(index) {
    if (!_bar) return;
    _currentIndex = index;
    _visible      = true;
    _bar.style.display = 'flex';
    _updateBarPosition();
    _updateBtnState();
  }

  function _hide() {
    if (!_bar) return;
    _visible = false;
    _bar.style.display = 'none';
    _currentIndex = -1;
  }

  function _dismiss() {
    /* Fecha teclado e barra */
    var el = _getInputAt(_currentIndex);
    if (el) el.blur();
    _hide();
  }

  /* ────────────────────────────────────────────────────────────────
     NAVEGAÇÃO ENTRE CAMPOS
  ──────────────────────────────────────────────────────────────── */
  function _getInputAt(idx) {
    if (idx < 0 || idx >= INPUT_IDS.length) return null;
    return document.getElementById(INPUT_IDS[idx]);
  }

  function _focusNext() {
    var next = _currentIndex + 1;
    if (next >= INPUT_IDS.length) {
      /* Último campo: dismiss */
      _dismiss();
      return;
    }
    var el = _getInputAt(next);
    if (el) {
      _currentIndex = next;
      el.focus();
      /* Seleciona todo o texto para facilitar re-digitação */
      try { el.select(); } catch (e) {}
      _updateBtnState();
    }
  }

  function _focusPrev() {
    var prev = _currentIndex - 1;
    if (prev < 0) return;
    var el = _getInputAt(prev);
    if (el) {
      _currentIndex = prev;
      el.focus();
      try { el.select(); } catch (e) {}
      _updateBtnState();
    }
  }

  /* Atualiza estado visual dos botões prev/next */
  function _updateBtnState() {
    var btnPrev = document.getElementById('mc-acc-prev');
    var btnNext = document.getElementById('mc-acc-next');
    if (btnPrev) {
      btnPrev.style.opacity  = _currentIndex <= 0 ? '0.35' : '1';
      btnPrev.style.pointerEvents = _currentIndex <= 0 ? 'none' : 'auto';
    }
    if (btnNext) {
      var isLast = _currentIndex >= INPUT_IDS.length - 1;
      btnNext.textContent = isLast ? '✓ Feito' : 'Próximo ›';
    }
  }

  /* ────────────────────────────────────────────────────────────────
     LISTENERS DE FOCO / BLUR
  ──────────────────────────────────────────────────────────────── */
  function _onFocus(e) {
    var el = e.target;
    if (!el || el.tagName !== 'INPUT') return;
    var idx = INPUT_IDS.indexOf(el.id);
    if (idx === -1) return;
    /* Pequeno delay para iOS terminar de reposicionar viewport */
    setTimeout(function () { _show(idx); }, 80);
  }

  function _onBlur(e) {
    var el = e.target;
    if (!el || el.tagName !== 'INPUT') return;
    if (INPUT_IDS.indexOf(el.id) === -1) return;

    /* Oculta barra somente se o novo foco NÃO for outro campo da lista
       e NÃO for um botão da própria barra. */
    setTimeout(function () {
      var active = document.activeElement;
      if (!active) { _hide(); return; }

      /* Mantém barra se foco foi para outro input da lista */
      if (active.tagName === 'INPUT' && INPUT_IDS.indexOf(active.id) !== -1) return;

      /* Mantém barra se foco foi para um dos botões da barra */
      if (_bar && _bar.contains(active)) return;

      _hide();
    }, 150);
  }

  /* ────────────────────────────────────────────────────────────────
     INICIALIZAÇÃO
  ──────────────────────────────────────────────────────────────── */
  function _init() {
    _createBar();

    /* Escuta foco/blur em capture phase (pega todos os inputs) */
    document.addEventListener('focus', _onFocus, true);
    document.addEventListener('blur',  _onBlur,  true);

    console.log('[ACCESSORY_BAR] BUILD 283: Sticky Accessory Bar ativa — campos: ' + INPUT_IDS.join(', '));
  }

  /* Boot */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

})(window);
