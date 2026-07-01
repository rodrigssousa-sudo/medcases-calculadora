/* ================================================================
   MedCases Pro — BUILD 244: Navegação por Categorias Clínicas
   ----------------------------------------------------------------
   Upgrade "Apple-style" da busca de fármacos: vitrine horizontal
   de pills de categoria (Cardiologia, Psicofármacos, Antibióticos
   etc.) inserida entre a barra de busca (#hm-drug-search) e a
   área de resultados (#hm-drug-list) do card "Fármacos" do Hub.

   REGRAS DE NÃO-DESTRUIÇÃO:
   - NÃO substitui/reescreve hmFilterDrugs(), hmClearSearch() ou o
     motor de busca textual — apenas os ENVOLVE (monkey-patch leve)
     ou escuta o evento 'input' adicionalmente (addEventListener,
     nunca sobrescrevendo o atributo oninput já existente no HTML).
   - Usa a mesma fonte de verdade (_getMasterDB()) e os mesmos
     resolvers já existentes (_fdResolveCat, _fdResolveClass,
     _fdResolveName) para 100% de consistência de dados.
   - Renderiza no mesmo container #hm-drug-list com o MESMO padrão
     de markup (.hm-drug-item / .hm-drug-sep) já usado por
     hmFilterDrugs(), garantindo estilo visual idêntico e clique
     funcional via hmShowInlineResult(id).

   API PÚBLICA:
     window.CategoryPills.refresh() — força reconstrução das pills
     window.CategoryPills.clearSelection() — desmarca categoria ativa
================================================================ */

(function () {
  'use strict';

  var _activeCat   = null;  /* chave (key) da categoria selecionada */
  var _built       = false; /* pills já construídas nesta sessão */

  /* ────────────────────────────────────────────────────────────
     Mapa de ícones por categoria (chave normalizada → FA icon)
     Fallback genérico garante que categorias futuras nunca
     apareçam sem ícone.
  ──────────────────────────────────────────────────────────── */
  var ICON_MAP = {
    cardio:            'fa-heart-pulse',
    cardiovascular:     'fa-heart-pulse',
    atb:                'fa-bacterium',
    antimicrobiano:     'fa-bacterium',
    antibiotico:        'fa-bacterium',
    antidepressivo:      'fa-brain',
    ansiolitico:         'fa-brain',
    estabilizador:              'fa-brain',
    estabilizador_humor:        'fa-brain',
    anticonvulsivante:          'fa-brain',
    antiparkinsoniano:          'fa-brain',
    antipsicotico:       'fa-brain',
    psicofarmaco:        'fa-brain',
    endocrino:           'fa-syringe',
    endocrinologia:      'fa-syringe',
    nefro:               'fa-kidneys',
    nefrologia:          'fa-kidneys',
    gastro:              'fa-pills',
    gastroenterologia:   'fa-pills',
    infusao:             'fa-droplet',
    infusoes:            'fa-droplet',
    anticoagulante:      'fa-droplet',
    anticoag:            'fa-droplet',
    pneumo:              'fa-lungs',
    pneumologia:         'fa-lungs',
    neuro:               'fa-brain',
    neurologia:          'fa-brain',
    obesidade:           'fa-weight-scale',
    reumatologia:        'fa-bone',
    analgesico:          'fa-pills',
    analgesicos:         'fa-pills',
    default:             'fa-layer-group'
  };

  function _iconFor(key) {
    var k = (key || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
    return ICON_MAP[k] || ICON_MAP.default;
  }

  /* ────────────────────────────────────────────────────────────
     Chave estável de categoria (independe de idioma).
     - string direta (ex: 'atb', 'cardio', 'antidepressivo')
     - objeto {pt,es} → usa .pt como chave estável
  ──────────────────────────────────────────────────────────── */
  function _catKey(d) {
    if (!d || !d.category) return 'outros';
    if (typeof d.category === 'object') return (d.category.pt || d.category.es || 'outros');
    return d.category;
  }

  /* ────────────────────────────────────────────────────────────
     Constrói a lista de categorias disponíveis a partir do
     Objeto Mestre Global (_getMasterDB), com label localizado
     e contagem de fármacos.
  ──────────────────────────────────────────────────────────── */
  function _buildCategories() {
    if (typeof window._getMasterDB !== 'function') return [];
    var db = window._getMasterDB();
    var map = {};
    var order = [];

    db.forEach(function (d) {
      if (!d) return;
      var key = _catKey(d);
      if (!map[key]) {
        map[key] = { key: key, count: 0, sample: d };
        order.push(key);
      }
      map[key].count++;
    });

    return order.map(function (key) {
      var entry = map[key];
      var label = (typeof window._fdResolveCat === 'function')
        ? (window._fdResolveCat(entry.sample) || key)
        : key;
      return { key: key, label: label, count: entry.count, icon: _iconFor(key) };
    }).sort(function (a, b) { return b.count - a.count; }); /* categorias maiores primeiro */
  }

  /* ────────────────────────────────────────────────────────────
     Renderiza os itens de fármacos de UMA categoria dentro de
     #hm-drug-list, reaproveitando exatamente o markup usado por
     hmFilterDrugs() para consistência visual e de comportamento.
  ──────────────────────────────────────────────────────────── */
  function _renderCategoryResults(catKey, catLabel) {
    var listEl = document.getElementById('hm-drug-list');
    if (!listEl) return;

    var db = window._getMasterDB ? window._getMasterDB() : [];
    var results = db.filter(function (d) { return _catKey(d) === catKey; });

    if (!results.length) {
      listEl.innerHTML =
        '<div class="hm-drug-empty">' +
          '<i class="fa-solid fa-layer-group" style="font-size:24px;opacity:0.18;margin-bottom:8px;"></i>' +
          '<p>Nenhum fármaco cadastrado em <strong>' + catLabel + '</strong> ainda</p>' +
        '</div>';
      return;
    }

    var html = '<div class="hm-drug-sep">' + catLabel + ' · ' + results.length + ' fármaco' + (results.length > 1 ? 's' : '') + '</div>';
    results.forEach(function (d) {
      var colorTxt  = d.colorTxt || '#38BDF8';
      var dispName  = window._fdResolveName  ? window._fdResolveName(d)  : (d.name || d.id);
      var dispClass = window._fdResolveClass ? window._fdResolveClass(d) : '';
      var safeId    = (d.id || '').replace(/'/g, "\\'");
      html +=
        '<div class="hm-drug-item" onclick="hmShowInlineResult(\'' + safeId + '\')" role="button" aria-label="' + dispName + '">' +
          '<div class="hm-drug-dot" style="background:' + colorTxt + '"></div>' +
          '<div class="hm-drug-info">' +
            '<div class="hm-drug-name">' + dispName + '</div>' +
            '<div class="hm-drug-class">' + dispClass + '</div>' +
          '</div>' +
          '<i class="fa-solid fa-chevron-right hm-drug-arrow"></i>' +
        '</div>';
    });

    listEl.innerHTML = html;
  }

  /* ────────────────────────────────────────────────────────────
     Toggle de seleção de categoria (clique na pill)
  ──────────────────────────────────────────────────────────── */
  function _selectCategory(key, label) {
    var wrap = document.getElementById('hm-category-pills');
    if (!wrap) return;

    if (_activeCat === key) {
      /* Clique na mesma categoria → desmarca e restaura estado vazio */
      _activeCat = null;
      wrap.querySelectorAll('.hm-cat-pill').forEach(function (p) { p.classList.remove('is-active'); });
      if (typeof window.hmFilterDrugs === 'function') window.hmFilterDrugs('');
      return;
    }

    _activeCat = key;
    wrap.querySelectorAll('.hm-cat-pill').forEach(function (p) {
      p.classList.toggle('is-active', p.getAttribute('data-cat-key') === key);
    });

    _renderCategoryResults(key, label);

    /* Esconde o botão "limpar busca" nativo pois não há texto digitado */
    var clearBtn = document.getElementById('hm-search-clear');
    if (clearBtn) clearBtn.style.display = 'none';
  }

  /* ────────────────────────────────────────────────────────────
     Mostra/esconde a vitrine de pills (fade suave via CSS)
  ──────────────────────────────────────────────────────────── */
  function _setPillsVisible(visible) {
    var wrap = document.getElementById('hm-category-pills-wrap');
    if (!wrap) return;
    wrap.classList.toggle('hm-cat-pills--hidden', !visible);
  }

  /* ────────────────────────────────────────────────────────────
     Constrói e injeta o HTML da vitrine de categorias.
     Posição: dentro de #hub-card-farmacos, logo após
     .hm-search-wrap e antes de #hm-drug-count / #hm-drug-list.
  ──────────────────────────────────────────────────────────── */
  function _renderPillsMarkup(categories) {
    if (!categories.length) return false;

    var searchInput = document.getElementById('hm-drug-search');
    var searchWrap  = searchInput ? searchInput.closest('.hm-search-wrap') : null;
    if (!searchWrap || !searchWrap.parentNode) return false;

    /* Evita duplicar se já existe (idempotência) */
    var existing = document.getElementById('hm-category-pills-wrap');
    if (existing) existing.remove();

    var wrap = document.createElement('div');
    wrap.className = 'hm-category-pills-wrap';
    wrap.id = 'hm-category-pills-wrap';

    var inner = document.createElement('div');
    inner.className = 'hm-category-pills';
    inner.id = 'hm-category-pills';

    categories.forEach(function (cat) {
      var pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'hm-cat-pill';
      pill.setAttribute('data-cat-key', cat.key);
      pill.setAttribute('aria-label', cat.label);
      pill.innerHTML =
        '<i class="fa-solid ' + cat.icon + '"></i>' +
        '<span>' + cat.label + '</span>' +
        '<span class="hm-cat-pill-count">' + cat.count + '</span>';
      pill.addEventListener('click', function () {
        _selectCategory(cat.key, cat.label);
      });
      inner.appendChild(pill);
    });

    wrap.appendChild(inner);
    searchWrap.parentNode.insertBefore(wrap, searchWrap.nextSibling);
    return true;
  }

  /* ────────────────────────────────────────────────────────────
     Wire do input de busca: some com as pills ao digitar,
     reaparece ao esvaziar. Não substitui o oninput já existente
     no HTML (hmFilterDrugs) — apenas ADICIONA um listener extra.
  ──────────────────────────────────────────────────────────── */
  function _wireSearchInput() {
    var input = document.getElementById('hm-drug-search');
    if (!input || input.__catPillsWired) return;
    input.__catPillsWired = true;

    input.addEventListener('input', function () {
      if (this.value.length > 0) {
        _setPillsVisible(false);
      } else {
        _setPillsVisible(true);
        _activeCat = null;
        var wrap = document.getElementById('hm-category-pills');
        if (wrap) wrap.querySelectorAll('.hm-cat-pill').forEach(function (p) { p.classList.remove('is-active'); });
      }
    });
  }

  /* ────────────────────────────────────────────────────────────
     PATCH: hmClearSearch() — botão "X" não dispara 'input' pois
     limpa o valor programaticamente. Garantimos que as pills
     reaparecem também neste caminho.
  ──────────────────────────────────────────────────────────── */
  function _patchClearSearch() {
    if (typeof window.hmClearSearch !== 'function' || window.hmClearSearch.__catPillsPatched) return;
    var _orig = window.hmClearSearch;
    window.hmClearSearch = function () {
      _orig();
      _setPillsVisible(true);
      _activeCat = null;
      var wrap = document.getElementById('hm-category-pills');
      if (wrap) wrap.querySelectorAll('.hm-cat-pill').forEach(function (p) { p.classList.remove('is-active'); });
    };
    window.hmClearSearch.__catPillsPatched = true;
  }

  /* ────────────────────────────────────────────────────────────
     INIT — aguarda DRUG_DB estar populado (até 5s) antes de
     construir a vitrine, depois observa/reforça o wiring.
  ──────────────────────────────────────────────────────────── */
  function _tryBuild() {
    if (_built) return true;
    var db = (typeof window._getMasterDB === 'function') ? window._getMasterDB() : [];
    if (!db || !db.length) return false;

    var categories = _buildCategories();
    if (!_renderPillsMarkup(categories)) return false;

    _wireSearchInput();
    _patchClearSearch();
    _built = true;
    console.log('[CategoryPills] v1.0 pronto — ' + categories.length + ' categorias clínicas navegáveis (Apple-style pills).');
    return true;
  }

  function _init() {
    if (_tryBuild()) return;
    var tries = 0;
    var retry = setInterval(function () {
      tries++;
      if (_tryBuild() || tries > 60) clearInterval(retry); /* até ~6s */
    }, 100);
  }

  window.CategoryPills = {
    refresh: function () { _built = false; _tryBuild(); },
    clearSelection: function () { _activeCat = null; }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }
  window.addEventListener('load', _init);

})();
