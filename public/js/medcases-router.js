/* ================================================================
   MedCases Pro — Clinical Support Router v2.0
   BUILD 460-CLINICAL-STEPS
   ----------------------------------------------------------------
   Motor de condutas clínicas sequenciais (1ª / 2ª / 3ª Linha e
   Refratários) com dosagem reativa integrada ao payload do paciente.

   ENDPOINTS SUPORTADOS:
     ?modulo=nefrologia&peso=70&clcr=48&kdigo=2
     ?modulo=cardiologia&peso=80&chads_vasc=3&has_bled=2
     /condutas/<modulo>   (SPA path routing)

   API PÚBLICA:
     window.ClinicalSupportRouter.open('nefrologia')
     window.ClinicalSupportRouter.close()
     window.ClinicalSupportRouter.getModulo()

   ARQUITETURA:
     ┌─ _init()
     │   ├─ _ingestPatientPayload()   ← popula window.patientData
     │   └─ _openView(moduloKey)
     │       └─ _renderConductas()    ← engine de linhas sequenciais
     │           └─ _buildLineCards() ← accordion de dosagem reativa
================================================================ */
(function () {
  'use strict';

  /* ───────────────────────────────────────────────────────────────
     HELPERS UTILITÁRIOS
  ─────────────────────────────────────────────────────────────── */
  function _norm(s) {
    if (!s) return '';
    return s.toLowerCase().trim()
      .replace(/[àáâãä]/g, 'a').replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
      .replace(/[ùúûü]/g, 'u').replace(/[ç]/g, 'c')
      .replace(/[-_\s]+/g, '-');
  }

  function _esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ── Locale persistente no escopo da IIFE ── */
  var _activeLang = 'pt'; /* default; sobrescrito por _resolveLang() em _init() */

  /**
   * _resolveLang(params)
   * Prioridade de resolução do idioma (BUILD 461-I18N-FIX):
   *   1. ?lang=   ou ?idioma=  na URL (parâmetro explícito do app nativo)
   *   2. window.currentLang   (variável do HubAccordion / app shell)
   *   3. localStorage.getItem('lang')
   *   4. 'pt'  (fallback)
   * Normaliza para lowercase e aceita variantes 'es-AR', 'es-MX', 'pt-BR'.
   */
  function _resolveLang(params) {
    var raw = '';
    if (params) {
      raw = params.get('lang') || params.get('idioma') || '';
    }
    if (!raw) raw = (window.currentLang || localStorage.getItem('lang') || '');
    raw = (raw + '').toLowerCase().trim();
    /* Normaliza: 'es-ar', 'es-mx', 'es-419' → 'es' | 'pt-br', 'pt-pt' → 'pt' */
    if (raw.startsWith('es')) return 'es';
    if (raw.startsWith('pt')) return 'pt';
    return 'pt'; /* fallback */
  }

  function _waitEl(id, cb, n) {
    n = n || 0;
    var el = document.getElementById(id);
    if (el) { cb(el); return; }
    if (n > 40) { console.warn('[CSR] timeout #' + id); return; }
    setTimeout(function () { _waitEl(id, cb, n + 1); }, 80);
  }

  function _waitGlobal(prop, cb, n) {
    n = n || 0;
    if (window[prop] !== undefined) { cb(window[prop]); return; }
    if (n > 50) return;
    setTimeout(function () { _waitGlobal(prop, cb, n + 1); }, 100);
  }

  /* Resolve nome bilíngue de um entry de DB */
  function _name(d, lang) {
    if (!d) return '';
    var n = d.name;
    if (!n) return '';
    if (typeof n === 'string') return n;
    return n[lang] || n.pt || n.es || '';
  }

  /* Resolve texto bilíngue de string ou {pt,es} */
  function _txt(v, lang) {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[lang] || v.pt || v.es || '';
  }

  /* ───────────────────────────────────────────────────────────────
     ENGINE DE INGESTÃO DE PAYLOAD DO PACIENTE (PASSO 2)
     Lê ?peso=&idade=&creatinina=&clcr=&kdigo=&child_pugh=
     &chads_vasc=&has_bled=&ascvd= da URL → window.patientData
  ─────────────────────────────────────────────────────────────── */
  function _ingestPatientPayload(params) {
    if (!params) return;
    window.patientData = window.patientData || {};
    var fields = [
      'peso', 'idade', 'creatinina', 'clcr',
      'kdigo', 'child_pugh', 'chads_vasc', 'has_bled', 'ascvd',
      'hco3', 'na', 'k', 'mg', 'sexo'
    ];
    var updated = false;
    fields.forEach(function (f) {
      var v = params.get(f);
      if (v !== null && v !== '') { window.patientData[f] = v; updated = true; }
    });
    if (updated) {
      console.log('[CSR v2] patientData:', JSON.stringify(window.patientData));
      if (typeof window._onPatientDataUpdated === 'function') {
        try { window._onPatientDataUpdated(window.patientData); } catch (e) { /* noop */ }
      }
    }
  }

  /* ───────────────────────────────────────────────────────────────
     DEFINIÇÃO DE MÓDULOS — LABELS, CORES, INTRO
  ─────────────────────────────────────────────────────────────── */
  var MODULE_META = {
    nefrologia: {
      label:  { pt: 'Nefrologia / Terapêutica Renal', es: 'Nefrología / Terapéutica Renal' },
      emoji:  '🫘', color: '#3B82F6', accent: '#1D4ED8'
    },
    cardiologia: {
      label:  { pt: 'Cardiologia / FA & Prevenção CV', es: 'Cardiología / FA & Prevención CV' },
      emoji:  '❤️', color: '#EF4444', accent: '#B91C1C'
    },
    eletrolitos: {
      label:  { pt: 'Eletrólitos & Gasometria', es: 'Electrolitos & Gasometría' },
      emoji:  '⚗️', color: '#10B981', accent: '#065F46'
    },
    hepatologia: {
      label:  { pt: 'Hepatologia / Toxicidade Hepática', es: 'Hepatología / Toxicidad Hepática' },
      emoji:  '🫀', color: '#F59E0B', accent: '#92400E'
    }
  };

  var MODULE_ALIASES = {
    'nefrologia':'nefrologia','nefro':'nefrologia','renal':'nefrologia',
    'cardiologia':'cardiologia','cardio':'cardiologia','cardiovascular':'cardiologia',
    'eletrolitos':'eletrolitos','eletrolitos-gasometria':'eletrolitos',
    'electrolitos':'eletrolitos','gasometria':'eletrolitos',
    'hepatologia':'hepatologia','hepato':'hepatologia','figado':'hepatologia'
  };

  /* ───────────────────────────────────────────────────────────────
     ENGINE DE CONDUTAS SEQUENCIAIS — DEFINIÇÃO DAS LINHAS
     Cada "line" define:
       tier   : '1a'|'2a'|'3a'|'refratario'
       label  : texto do badge de linha
       drugs  : array de { key, dbGlobal, fallbackName, indicacao,
                            mecanismo[], ea[], riscos[], ci[] }
       guard  : função (patientData) → boolean (mostra linha se true)
       alert  : { cond(pd), html(pd, lang) } — bloco de alerta superior
  ─────────────────────────────────────────────────────────────── */
  var THERAPY_LINES = {

    /* ════════════════════════════════════════════════════════════
       CARDIOLOGIA — Fibrilação Atrial, Controle de Frequência
       e Prevenção Cardiovascular
    ════════════════════════════════════════════════════════════ */
    cardiologia: {
      alertBlock: function (pd, lang) {
        var chads = Number(pd.chads_vasc || 0);
        var bled  = Number(pd.has_bled  || 0);
        if (chads < 2 && bled < 3) return '';
        var risk = (chads >= 2 && bled >= 3)
          ? (lang === 'es'
            ? '⚠️ <strong>CHA₂DS₂-VASc ≥ 2 + HAS-BLED ≥ 3 simultâneos:</strong> Risco trombótico ELEVADO E Risco hemorrágico ELEVADO. Priorize anticoagulação com DOAC de menor janela terapêutica (Apixabana), controle rigoroso de HAS, suspenda AINEs/álcool e corrija HAS-BLED modificáveis antes de iniciar anticoagulação.'
            : '⚠️ <strong>CHA₂DS₂-VASc ≥ 2 + HAS-BLED ≥ 3 simultâneos:</strong> Risco trombótico ELEVADO E Risco hemorrágico ELEVADO. Priorize anticoagulação com DOAC de menor risco de sangramento (Apixabana), controle rigoroso de HAS, suspenda AINEs/álcool e corrija fatores modificáveis do HAS-BLED antes de iniciar.')
          : (chads >= 2
            ? (lang === 'es'
              ? '🔴 CHA₂DS₂-VASc ≥ 2 — Anticoagulação indicada. Prefira DOAC (Apixabana/Rivaroxabana) sobre Warfarina.'
              : '🔴 CHA₂DS₂-VASc ≥ 2 — Anticoagulação indicada. Prefira DOAC (Apixabana/Rivaroxabana) sobre Varfarina.')
            : (lang === 'es'
              ? '🟡 HAS-BLED ≥ 3 — Risco hemorrágico elevado. Corrija fatores reversíveis (HAS, AINEs, álcool) antes de anticoagular.'
              : '🟡 HAS-BLED ≥ 3 — Risco hemorrágico elevado. Corrija fatores reversíveis (HAS, AINEs, álcool) antes de anticoagular.'));
        return '<div class="csr-alert-block">' + risk + '</div>';
      },
      lines: [
        /* ── 1ª LINHA: DOACs ── */
        {
          tier: '1a',
          label: { pt: '1ª LINHA — DOACs (FA + Prevenção Trombótica)', es: '1ª LÍNEA — DOACs (FA + Prevención Trombótica)' },
          guard: function (pd) { return Number(pd.chads_vasc || 0) >= 1 || !pd.chads_vasc; },
          drugs: [
            {
              key: 'apixabana',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Apixabana (Eliquis)',
              indicacao: {
                pt: 'FA não-valvar: redução de AVC/êmbolo sistêmico (CHA₂DS₂-VASc ≥ 2♂ / ≥ 3♀). TVP/TEP: tratamento agudo e prevenção de recorrência. Escolha preferencial quando HAS-BLED elevado pelo menor risco de sangramento maior.',
                es: 'FA no valvular: reducción de ACV/embolismo sistémico. TVP/TEP: tratamiento agudo y prevención de recurrencia. Preferida con HAS-BLED elevado.'
              },
              mecanismo: {
                pt: ['Inibidor direto e reversível do Fator Xa livre, ligado a coágulo e complexo protrombinase', 'Não requer monitorização de INR; inibição previsível dose-dependente'],
                es: ['Inhibidor directo y reversible del Factor Xa libre y ligado al coágulo', 'Sin necesidad de monitorización de INR']
              },
              ea: {
                pt: ['Sangramento (gengival, equimoses, hematoma)', 'Anemia (perda oculta GI)', 'Náuseas (1–3%)'],
                es: ['Sangrado (gingival, equimosis)', 'Anemia por pérdida GI oculta', 'Náuseas (1–3%)']
              },
              riscos: {
                pt: ['HEMORRAGIA GRAVE GI/INTRACRANIANA — antídoto: Andexanet Alfa (se disponível) ou CCP4F 50 U/kg', 'Elevação discreta de TGO/TGP — monitorar se hepatopatia'],
                es: ['HEMORRAGIA GRAVE GI/INTRACRANEAL — antídoto: Andexanet Alfa o CCP4F 50 U/kg', 'Elevación leve de transaminasas — monitorizar en hepatopatía']
              },
              ci: {
                pt: ['Sangramento ativo clinicamente significativo', 'Lesão/condição de risco de sangramento maior', 'ClCr < 15 mL/min (não recomendado)', 'Prótese valvar mecânica (DOAC contraindicado nesta indicação)'],
                es: ['Sangrado activo clínicamente significativo', 'ClCr < 15 mL/min', 'Prótesis valvular mecánica']
              }
            },
            {
              key: 'rivaroxabana',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Rivaroxabana (Xarelto)',
              indicacao: {
                pt: 'FA não-valvar, TVP/TEP e prevenção cardiovascular (COMPASS: 2,5 mg 2x/dia + AAS em DAC/DAP estável). Dose única diária facilita adesão.',
                es: 'FA no valvular, TVP/TEP y prevención cardiovascular (protocolo COMPASS). Dosis única diaria mejora adherencia.'
              },
              mecanismo: {
                pt: ['Inibidor direto do Fator Xa (IC₅₀ ~0,4 nM)', 'Pico em 2–4 h; meia-vida 5–9 h (jovens) e 11–13 h (idosos)'],
                es: ['Inhibidor directo del Factor Xa (IC₅₀ ~0,4 nM)', 'Pico en 2–4 h; semivida 5–9 h (jóvenes) y 11–13 h (mayores)']
              },
              ea: {
                pt: ['Sangramento GI (maior que Apixabana — preferir Apixabana em alto risco GI)', 'Elevação de GGT/TGP transitória', 'Síncope (rara)'],
                es: ['Sangrado GI (mayor que Apixabán — preferir Apixabán en alto riesgo GI)', 'Elevación transitoria de GGT/TGP']
              },
              riscos: {
                pt: ['Hemorragia maior (1–3%/ano FA) — mesmo antídoto Andexanet Alfa', 'Ajuste de dose obrigatório se ClCr 15–50 mL/min (usar 15 mg/dia FA)'],
                es: ['Hemorragia mayor — mismo antídoto Andexanet Alfa', 'Ajuste obligatorio si ClCr 15–50 mL/min (15 mg/día en FA)']
              },
              ci: {
                pt: ['ClCr < 15 mL/min', 'Prótese valvar mecânica', 'Gestação', 'Uso concomitante de azólicos sistêmicos + inibidores de P-gp fortes'],
                es: ['ClCr < 15 mL/min', 'Prótesis valvular mecánica', 'Embarazo', 'Azólicos sistémicos + inhibidores fuertes de P-gp']
              }
            }
          ]
        },

        /* ── 2ª LINHA: Ajustes finos / Dabigatrana / Warfarina ── */
        {
          tier: '2a',
          label: { pt: '2ª LINHA — Inibidores Diretos / Ajustes Finos', es: '2ª LÍNEA — Inhibidores Directos / Ajuste Fino' },
          guard: function (pd) { return true; },
          drugs: [
            {
              key: 'dabigatrana',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Dabigatrana (Pradaxa)',
              indicacao: {
                pt: 'Alternativa aos anti-Xa quando ClCr > 30 mL/min e sem gastropatia prévia. Antídoto disponível (Idarucizumabe) — vantagem em cirurgia de urgência.',
                es: 'Alternativa a los anti-Xa con ClCr > 30 mL/min y sin gastropatía previa. Antídoto disponible (Idarucizumab).'
              },
              mecanismo: {
                pt: ['Inibidor direto e reversível da trombina (IIa)', 'Pró-fármaco: dabigatrana etexilato → dabigatrana ativa por esterases intestinais'],
                es: ['Inhibidor directo y reversible de la trombina (IIa)', 'Profármaco activado por esterasas intestinales']
              },
              ea: {
                pt: ['Dispepsia / dor epigástrica (20–35% — dar com alimento ou IBP)', 'Sangramento GI (maior que Apixabana)'],
                es: ['Dispepsia/dolor epigástrico (20–35% — administrar con alimento o IBP)', 'Sangrado GI']
              },
              riscos: {
                pt: ['Acúmulo fatal em ClCr < 30 mL/min (renalmente eliminado 80%)', 'Antídoto: Idarucizumabe 5 g EV em 2 infusões (único DOAC com anticorpo monoclonal antídoto)'],
                es: ['Acumulación fatal si ClCr < 30 mL/min', 'Antídoto: Idarucizumab 5 g EV (único DOAC con anticuerpo monoclonal antídoto)']
              },
              ci: {
                pt: ['ClCr < 30 mL/min (FA)', 'Gastropatia ulcerosa ativa', 'Prótese valvar mecânica'],
                es: ['ClCr < 30 mL/min (FA)', 'Gastropatía ulcerosa activa', 'Prótesis valvular mecánica']
              }
            },
            {
              key: 'varfarina',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Varfarina / Acenocumarol',
              indicacao: {
                pt: 'Reserva para: prótese valvar mecânica (única indicação onde DOAC é contraindicado), estenose mitral reumática moderada-grave, ClCr < 15 mL/min com FA (dados limitados de DOAC). Monitorização semanal de INR alvo 2–3.',
                es: 'Reservar para: prótesis valvular mecánica, estenosis mitral reumática, ClCr < 15 mL/min con FA. INR objetivo 2–3.'
              },
              mecanismo: {
                pt: ['Antagonista da vitamina K: inibe VKOR → bloqueia carboxilação dos fatores II, VII, IX, X, proteínas C e S', 'Efeito anticoagulante retardado 72–96 h após início'],
                es: ['Antagonista de vitamina K: inhibe VKOR → bloquea carboxilación de factores II, VII, IX, X, proteínas C y S']
              },
              ea: {
                pt: ['Sangramento (risco 1–3%/ano maior; 0,5%/ano intracraniano)', 'Necrose cutânea (deficiência proteína C — primeiros dias)', 'Alopecia, nefropatia por varfarina (raros)'],
                es: ['Sangrado (riesgo 1–3%/año mayor)', 'Necrosis cutánea (deficiencia proteína C)', 'Alopecia, nefropatía por warfarina']
              },
              riscos: {
                pt: ['Antídoto: Vitamina K1 EV + CCP 4 fatores 25–50 U/kg se sangramento grave/INR > 10', 'Múltiplas interações (>200 fármacos alteram INR)'],
                es: ['Antídoto: Vitamina K1 EV + CCP4F si sangrado grave/INR > 10', 'Múltiples interacciones (>200 fármacos)']
              },
              ci: {
                pt: ['Gestação (1º e 3º trimestres — teratogênica)', 'Sangramento ativo', 'Hipertensão não controlada (>180/110)'],
                es: ['Embarazo (1º y 3er trimestre)', 'Sangrado activo', 'HAS no controlada (>180/110)']
              }
            }
          ]
        },

        /* ── 3ª LINHA: Controle de frequência ── */
        {
          tier: '3a',
          label: { pt: '3ª LINHA — Controle de Frequência (FA com alta FC)', es: '3ª LÍNEA — Control de Frecuencia (FA con alta FC)' },
          guard: function (pd) { return true; },
          drugs: [
            {
              key: 'metoprolol',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Metoprolol IV/VO',
              indicacao: {
                pt: 'FA com resposta ventricular rápida (FC > 110 bpm): controle agudo EV 2,5–5 mg em 2 min (repetir até 3x) ou VO 25–100 mg 2x/dia (succinato LP). Meta: FC repouso 60–80 bpm.',
                es: 'FA con respuesta ventricular rápida: control agudo EV 2,5–5 mg en 2 min (repetir hasta 3x) o VO 25–100 mg 2x/día. Meta: FC reposo 60–80 lpm.'
              },
              mecanismo: {
                pt: ['Betabloqueador β₁-seletivo: reduz automatismo sinusal e velocidade de condução AV', 'Prolonga período refratário AV → reduz resposta ventricular em FA'],
                es: ['Betabloqueante β₁-selectivo: reduce automatismo sinusal y conducción AV', 'Prolonga periodo refractario AV → reduce respuesta ventricular en FA']
              },
              ea: {
                pt: ['Bradicardia (monitorar ECG contínuo EV)', 'Fadiga, extremidades frias, disfunção erétil', 'Broncoespasmo (evitar em asma/DPOC grave)'],
                es: ['Bradicardia (monitorización ECG continua EV)', 'Fatiga, extremidades frías, disfunción eréctil', 'Broncoespasmo (evitar en asma/EPOC grave)']
              },
              riscos: {
                pt: ['Bloqueio AV 2º/3º grau', 'Descompensação de ICC aguda (cautela; usar com monitorização intensiva)', 'Vasoespasmo coronário (preferir CCB em angina vasoespástica)'],
                es: ['Bloqueo AV 2º/3er grado', 'Descompensación de ICC aguda', 'Vasoespasmo coronario']
              },
              ci: {
                pt: ['Bloqueio AV > 1º grau sem MP', 'Bradicardia sintomática (FC < 50 bpm)', 'Choque cardiogênico', 'Asma brônquica (risco de broncoespasmo fatal)'],
                es: ['Bloqueo AV > 1er grado sin MP', 'Bradicardia sintomática', 'Shock cardiogénico', 'Asma bronquial']
              }
            },
            {
              key: 'esmolol',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Esmolol IV (uso UTI)',
              indicacao: {
                pt: 'FA perioperatória ou hipertensão pós-cirúrgica com taquicardia: infusão IV com meia-vida ultracurta (~9 min) — titulação rápida e retirada sem efeito residual. Dose: 500 mcg/kg bolus → 50–300 mcg/kg/min manutenção.',
                es: 'FA perioperatoria o HAS posquirúrgica con taquicardia: infusión IV de vida media ultracorta (~9 min). Dosis: 500 mcg/kg bolo → 50–300 mcg/kg/min mantenimiento.'
              },
              mecanismo: {
                pt: ['β₁-bloqueador cardioseletivo ultrarrápido (metabolização por esterases eritrocitárias)', 'Onset < 2 min; offset completo ~20–30 min após infusão'],
                es: ['β₁-bloqueante cardioselectivo ultrarrápido (metabolismo por esterasas eritrocitarias)', 'Onset < 2 min; offset completo ~20–30 min']
              },
              ea: {
                pt: ['Hipotensão (frequente — monitorar PA contínua)', 'Náuseas, tontura', 'Dor/eritema no local de infusão (solução ácida)'],
                es: ['Hipotensión (frecuente — monitorización PA continua)', 'Náuseas, mareos', 'Dolor/eritema en sitio de infusión']
              },
              riscos: {
                pt: ['Bradicardia profunda e bloqueio AV', 'Broncospasmo (menos que propranolol)', 'Hipoglicemia mascarada em diabéticos'],
                es: ['Bradicardia profunda y bloqueo AV', 'Broncoespasmo (menos que propranolol)', 'Hipoglucemia enmascarada en diabéticos']
              },
              ci: {
                pt: ['Bloqueio AV > 1º grau', 'Bradicardia sinusal < 60 bpm', 'Hipotensão (PAS < 90 mmHg)', 'Insuficiência cardíaca descompensada'],
                es: ['Bloqueo AV > 1er grado', 'Bradicardia sinusal < 60 lpm', 'Hipotensión (PAS < 90 mmHg)', 'ICC descompensada']
              }
            }
          ]
        },

        /* ── REFRATÁRIO: Controle de ritmo avançado ── */
        {
          tier: 'refratario',
          label: { pt: 'REFRATÁRIO — Controle de Ritmo Avançado', es: 'REFRACTARIO — Control de Ritmo Avanzado' },
          guard: function (pd) { return true; },
          drugs: [
            {
              key: 'amiodarona',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Amiodarona (Ancoron)',
              indicacao: {
                pt: 'FA refratária com ICC grave (única classe III segura em IC sistólica), choque cardiogênico com FA/taquicardia, TV/FV refratária. Cardioversão farmacológica se CVES contraindicada. Dose aguda: 300 mg EV 20–60 min → 1,2 g/24 h.',
                es: 'FA refractaria con ICC grave, shock cardiogénico con FA/taquicardia, TV/FV refractaria. Dosis aguda: 300 mg EV 20–60 min → 1,2 g/24 h.'
              },
              mecanismo: {
                pt: ['Antiarrítmico classe III (Vaughan-Williams): bloqueia canais de K⁺ → prolonga potencial de ação e período refratário', 'Também bloqueia canais de Na⁺ (classe I), Ca²⁺ (classe IV) e adrenoceptores (classe II) — ação multimodal'],
                es: ['Antiarrítmico clase III: bloquea canales K⁺ → prolonga potencial de acción', 'También bloquea Na⁺, Ca²⁺ y adrenoreceptores — acción multimodal']
              },
              ea: {
                pt: ['Flebite (EV periférico — usar acesso central sempre que possível)', 'Fotossensibilidade, deposição corneana (reversível)', 'Disfunção tireoidiana (hipo ou hipertireoidismo — 5–15%)', 'Neuropatia periférica, ataxia cerebelar (uso crônico)'],
                es: ['Flebitis (EV periférica — usar acceso central)', 'Fotosensibilidad, depósito corneal (reversible)', 'Disfunción tiroidea (hipo o hipertiroidismo 5–15%)', 'Neuropatía periférica (uso crónico)']
              },
              riscos: {
                pt: ['TOXICIDADE PULMONAR (pneumonite / fibrose) — 2–17%, potencialmente fatal, monitorar Rx 6/6 meses', 'HEPATOTOXICIDADE — TGO/TGP monitorar mensal no primeiro semestre', 'Prolongamento de QTc → risco de Torsades de Pointes (paradoxal — menor que outros classe III)', 'Múltiplas interações: aumenta INR com Varfarina, aumenta nível de Digoxina, potencializa betabloqueadores'],
                es: ['TOXICIDAD PULMONAR — 2–17%, potencialmente fatal, monitorar Rx c/6 meses', 'HEPATOTOXICIDAD — transaminasas mensuales el primer semestre', 'Prolongación de QTc (paradójicamente menor que otros clase III)', 'Múltiples interacciones: aumenta INR, niveles de Digoxina, potencia betabloqueadores']
              },
              ci: {
                pt: ['QTc > 500 ms basal', 'Tireoidopatia não controlada (hipo ou hipertireoidismo ativo)', 'Gestação e lactação', 'Bloqueio AV 2º/3º grau sem MP'],
                es: ['QTc > 500 ms basal', 'Tiropatía no controlada', 'Embarazo y lactancia', 'Bloqueo AV 2º/3er grado sin MP']
              }
            },
            {
              key: 'cardioversao_eletrica',
              dbGlobal: null,
              fallbackName: 'Cardioversão Elétrica Sincronizada (CVES)',
              indicacao: {
                pt: 'FA refratária com instabilidade hemodinâmica (PAS < 90, angina, edema pulmonar agudo): CVES imediata 200 J (bifásico). FA estável com sintomas refratários a controle de frequência e ritmo farmacológico: CVES eletiva após 3 semanas de anticoagulação eficaz.',
                es: 'FA refractaria con inestabilidad hemodinámica: CVES inmediata 200 J (bifásico). FA estable refractaria: CVES electiva tras 3 semanas de anticoagulación eficaz.'
              },
              mecanismo: {
                pt: ['Corrente elétrica sincronizada com QRS despolariza simultaneamente toda a massa miocárdica → interrompe circuitos de reentrada → permite retomada do ritmo sinusal pelo nó sinoatrial'],
                es: ['Corriente eléctrica sincronizada con QRS despolariza toda la masa miocárdica → interrumpe circuitos de reentrada → permite recuperación del ritmo sinusal']
              },
              ea: {
                pt: ['Queimadura cutânea (gel condutor insuficiente)', 'Arritmias transitórias pós-CVES (bradicardia, BAV transitório)', 'Dor muscular (fasciculações)', 'Embolização sistêmica (< 1% com anticoagulação adequada)'],
                es: ['Quemadura cutánea (gel conductor insuficiente)', 'Arritmias transitorias post-CVES', 'Dolor muscular', 'Embolización sistémica (< 1% con anticoagulación adecuada)']
              },
              riscos: {
                pt: ['Embolização de trombo atrial — anticoagular 3 semanas antes OU ETE para excluir trombo', 'Lesão miocárdica (CK elevada — autolimitada)', 'Falha de reversão em FA de longa data ou átrio muito dilatado'],
                es: ['Embolización de trombo atrial — anticoagular 3 semanas o ETE para descartar trombo', 'Lesión miocárdica transitoria (CK elevada)', 'Fallo de reversión en FA de larga data']
              },
              ci: {
                pt: ['Intoxicação digitálica (aumenta risco de FV pós-CVES)', 'Trombo atrial confirmado em ETE sem anticoagulação eficaz prévia', 'Hipocalemia grave (< 3,0 mEq/L) — corrigir antes'],
                es: ['Intoxicación digitálica', 'Trombo auricular en ETE sin anticoagulación previa eficaz', 'Hipocalemia grave (< 3,0 mEq/L)']
              }
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       NEFROLOGIA — DRC, Proteção Renal, Preparo para TRS
    ════════════════════════════════════════════════════════════ */
    nefrologia: {
      alertBlock: function (pd, lang) {
        var clcr = Number(pd.clcr || 90);
        var kdigo = Number(pd.kdigo || 0);
        if (kdigo < 4 && clcr >= 30) return '';
        var html = '<div class="csr-alert-block">';
        if (kdigo >= 5 || clcr < 15) {
          html += (lang === 'es'
            ? '🔴 <strong>DRC Estágio 5 / ClCr < 15 mL/min:</strong> Referenciar para nefrologia. Avaliar critérios de urgência para TRS (uremia, hipercalemia refratária, sobrecarga hídrica, acidose grave).'
            : '🔴 <strong>DRC Estágio 5 / ClCr < 15 mL/min:</strong> Referenciar para nefrologia. Avaliar critérios de urgência para TRS (uremia, hipercalemia refratária, sobrecarga hídrica, acidose grave).');
        } else if (kdigo >= 4 || clcr < 30) {
          html += (lang === 'es'
            ? '🟠 <strong>DRC Estágio 4 / ClCr 15–29 mL/min:</strong> Ajuste rigoroso de doses. iSGLT2 contraindicado (eficácia reduzida). IECA/BRA: monitorar K⁺ e Cr semanalmente ao iniciar.'
            : '🟠 <strong>DRC Estágio 4 / ClCr 15–29 mL/min:</strong> Ajuste rigoroso de doses obrigatório. iSGLT2 contraindicado (eficácia reduzida abaixo de ClCr < 25). IECA/BRA: monitorar K⁺ e Cr semanalmente ao iniciar.');
        }
        return html + '</div>';
      },
      lines: [
        /* ── 1ª LINHA: iSGLT2 + IECA/BRA ── */
        {
          tier: '1a',
          label: { pt: '1ª LINHA — Otimização Hemodinâmica & Nefroproteção', es: '1ª LÍNEA — Optimización Hemodinámica & Nefroprotección' },
          guard: function (pd) { return Number(pd.clcr || 90) >= 25; },
          drugs: [
            {
              key: 'dapagliflozina',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Dapagliflozina (Forxiga) 10 mg/dia',
              indicacao: {
                pt: 'DRC com albuminúria (RAAm > 200 mg/g) com ou sem DM2: redução de 44% no desfecho composto de progressão renal (DAPA-CKD). Indicado se ClCr ≥ 25 mL/min. Também reduz internação por ICC e mortalidade CV.',
                es: 'DRC con albuminuria (RAAm > 200 mg/g) con o sin DM2: reducción del 44% en el desenlace compuesto de progresión renal (DAPA-CKD). Indicado si ClCr ≥ 25 mL/min.'
              },
              mecanismo: {
                pt: ['Inibe SGLT2 renal (cotransportador sódio-glicose tipo 2) no túbulo proximal → glicosúria + natriurese + redução da pressão intraglomerular via vasoconstrição da arteríola aferente', 'Efeitos renoprotetores independentes do controle glicêmico (via AMPK, pericyte loss, inflamação intersticial)'],
                es: ['Inhibe SGLT2 renal → glucosuria + natriuresis + reducción de presión intraglomerular', 'Efectos renoprotectores independientes del control glucémico']
              },
              ea: {
                pt: ['Infecções genitais fúngicas (candidíase vulvovaginal/balanopostite — 5–10%)', 'ITU não complicada (leve aumento)', 'Poliúria suave (osmótica)', 'Hipoglicemia (rara — apenas se uso concomitante de SU/insulina)'],
                es: ['Infecciones genitales fúngicas (candidiasis 5–10%)', 'ITU no complicada (leve aumento)', 'Poliuria suave (osmótica)']
              },
              riscos: {
                pt: ['Cetoacidose diabética euglicêmica (DM1 ou pré-cirúrgico — suspender 3 dias antes de cirurgia de grande porte)', 'Amputação/Gangrena de Fournier (rara — < 0,1%; vigilância em diabéticos com doença vascular periférica)', 'Hipovolemia se diurético + iSGLT2 sem ajuste'],
                es: ['Cetoacidosis diabética euglucémica (DM1 o pre-quirúrgico — suspender 3 días antes de cirugía mayor)', 'Gangrena de Fournier (rara < 0,1%)', 'Hipovolemia si diurético + iSGLT2 sin ajuste']
              },
              ci: {
                pt: ['ClCr < 25 mL/min (sem benefício + risco de infecção)', 'DM1', 'Infecção genital ativa recorrente', 'Dieta muito hipocalórica (< 800 kcal/dia)'],
                es: ['ClCr < 25 mL/min', 'DM1', 'Infección genital activa recurrente', 'Dieta muy hipocalórica']
              }
            },
            {
              key: 'empagliflozina',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Empagliflozina (Jardiance) 10–25 mg/dia',
              indicacao: {
                pt: 'DRC com ou sem DM2 (EMPA-KIDNEY: 28% redução de progressão renal). Benefício cardíaco adicional em ICC-FEr (EMPEROR): redução de 25% internação por IC. Indicado se ClCr ≥ 20 mL/min (via EMA/ANVISA).',
                es: 'DRC con o sin DM2 (EMPA-KIDNEY: 28% reducción de progresión renal). Beneficio cardíaco adicional en ICC-FEr (EMPEROR). Indicado si ClCr ≥ 20 mL/min.'
              },
              mecanismo: {
                pt: ['Mesmo mecanismo SGLT2 que Dapagliflozina com perfil ligeiramente diferente em desfechos de IC', 'EMPA-KIDNEY: efeito renopretetor independente da albuminúria basal (inclusive em DRC não-albuminúrica)'],
                es: ['Mismo mecanismo SGLT2 con perfil ligeramente diferente en desenlaces de IC', 'EMPA-KIDNEY: efecto renoprotector independiente de la albuminuria basal']
              },
              ea: {
                pt: ['Candidíase genital (5–10%)', 'Infecção urinária alta (leve aumento em mulheres > 65 anos)', 'Poliúria osmótica inicial'],
                es: ['Candidiasis genital (5–10%)', 'Infección urinaria alta (leve aumento en mujeres > 65 años)', 'Poliuria osmótica inicial']
              },
              riscos: {
                pt: ['Cetoacidose diabética euglicêmica (mesmo perfil que Dapagliflozina — suspender antes de cirurgia)', 'Desidratação/hipovolemia em idosos com baixa ingestão hídrica'],
                es: ['Cetoacidosis diabética euglucémica', 'Deshidratación/hipovolemia en ancianos con baja ingesta hídrica']
              },
              ci: {
                pt: ['ClCr < 20 mL/min', 'DM1', 'Cetoacidose ativa'],
                es: ['ClCr < 20 mL/min', 'DM1', 'Cetoacidosis activa']
              }
            },
            {
              key: 'enalapril',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Enalapril / Ramipril (IECA)',
              indicacao: {
                pt: 'Nefroproteção em DRC + DM com albuminúria: reduz progressão para macroalbuminúria e declínio de TFGe (REIN, RENAAL). Dose inicial baixa (2,5–5 mg/dia) com monitoração K⁺ e Cr em 7–14 dias. Alvo: redução de albuminúria > 50%.',
                es: 'Nefroprotección en DRC + DM con albuminuria: reduce progresión a macroalbuminuria. Dosis inicial baja (2,5–5 mg/día) con monitoreo K⁺ y Cr en 7–14 días.'
              },
              mecanismo: {
                pt: ['Inibe a ECA → impede conversão de angiotensina I em angiotensina II → vasodilatação preferencial da arteríola eferente glomerular → redução da pressão intraglomerular', 'Reduz proteinúria e fibrose intersticial via inibição de TGF-β1 (efeito anti-fibrótico independente da PA)'],
                es: ['Inhibe ECA → vasodilatación preferencial de arteríola eferente glomerular → reducción de presión intraglomerular', 'Reduce proteinuria y fibrosis intersticial vía inhibición de TGF-β1']
              },
              ea: {
                pt: ['Tosse seca persistente (10–20% — troca por BRA se intolerante)', 'Hipercalemia (monitorar se DRC + K > 5,0)', 'Angioedema (0,1–0,7% — grave se idiossincrassia — contraindicar definitivamente)'],
                es: ['Tos seca persistente (10–20% — cambiar a BRA si intolerante)', 'Hiperpotasemia', 'Angioedema (0,1–0,7%)']
              },
              riscos: {
                pt: ['Elevação aguda de Cr > 30% nos 2 meses iniciais (aceitável — sinaliza ação hemodinâmica eficaz; suspender se > 30% ou Cr > 3 mg/dL)', 'Hipercalemia refratária (K > 6,0 mEq/L) — suspender e avaliar Patiromer/Ciclossilicato', 'Hipotensão de primeira dose em hipovolêmicos'],
                es: ['Elevación de Cr > 30% (aceptable — indica efecto hemodinámico; suspender si > 30% o Cr > 3 mg/dL)', 'Hiperpotasemia refractaria — suspender y evaluar Patiromer/Ciclosilicato', 'Hipotensión de primera dosis en hipovolemia']
              },
              ci: {
                pt: ['Gestação (fetotóxico — categoria D/X)', 'Angioedema prévio por IECA', 'Estenose bilateral de artéria renal', 'K > 5,5 mEq/L basal sem quelante'],
                es: ['Embarazo (fetotóxico)', 'Angioedema previo por IECA', 'Estenosis bilateral de arteria renal', 'K > 5,5 mEq/L basal sin quelante']
              }
            }
          ]
        },

        /* ── 2ª LINHA: Controle de hipervolemia ── */
        {
          tier: '2a',
          label: { pt: '2ª LINHA — Controle de Hipervolemia Adjunta', es: '2ª LÍNEA — Control de Hipervolemia Adjunta' },
          guard: function (pd) { return true; },
          drugs: [
            {
              key: 'furosemida',
              dbGlobal: 'CARDIO_DRUGS_DB',
              fallbackName: 'Furosemida (Lasix) — dose titulada por TFGe',
              indicacao: {
                pt: 'Hipervolemia sintomática em DRC (edema, congestão pulmonar, HAS refratária a volume). Doses tituladas por função renal: DRC G1-G2: 40 mg/dia; DRC G3: 80–120 mg/dia; DRC G4-G5 pré-diálise: 120–240 mg/dia (até 500 mg/dia EV em crises). Meta: diurese 0,5–1 mL/kg/h.',
                es: 'Hipervolemia sintomática en DRC. Dosis tituladas por función renal: DRC G1-G2: 40 mg/día; DRC G3: 80–120 mg/día; DRC G4-G5: 120–240 mg/día. Meta: diuresis 0,5–1 mL/kg/h.'
              },
              mecanismo: {
                pt: ['Inibe cotransportador NKCC2 na alça de Henle → bloqueia reabsorção de Na⁺, K⁺ e Cl⁻ → diurese de alto volume', 'Em DRC: necessita de doses maiores para atingir concentração tubular eficaz (competição com toxinas urêmicas na secreção proximal)'],
                es: ['Inhibe cotransportador NKCC2 en asa de Henle → bloquea reabsorción de Na⁺, K⁺ y Cl⁻', 'En DRC: requiere dosis más altas para alcanzar concentración tubular eficaz']
              },
              ea: {
                pt: ['Hipocalemia (monitorar K⁺ — risco de arritmias em DRC), hipomagnesemia', 'Hiponatremia, alcalose metabólica (perda de H⁺ e Cl⁻)', 'Ototoxicidade (raro — doses EV altas rápidas > 4–5 mg/min)', 'Hiperuricemia → gota'],
                es: ['Hipopotasemia (monitorar K⁺)', 'Hiponatremia, alcalosis metabólica', 'Ototoxicidad (rara — dosis EV altas rápidas > 4–5 mg/min)', 'Hiperuricemia → gota']
              },
              riscos: {
                pt: ['Depleção de volume → IRA pré-renal superposta à DRC (monitorar ureia/Cr seriados)', 'Hipocalemia + Digoxina → risco de toxicidade digitálica', 'Resistência ao diurético (DRC avançada — considerar associação com Metolazona 2,5–5 mg antes da furosemida)'],
                es: ['Depleción de volumen → IRA prerrenal', 'Hipopotasemia + Digoxina → toxicidad digitálica', 'Resistencia al diurético (DRC avanzada — considerar asociación con Metolazona)']
              },
              ci: {
                pt: ['Hipovolemia/desidratação grave', 'Anúria (em DRC terminal — furosemida ineficaz sem fluxo tubular residual)', 'Hipocalemia grave (< 3,0 mEq/L) — corrigir antes'],
                es: ['Hipovolemia/deshidratación grave', 'Anuria (DRC terminal)', 'Hipopotasemia grave (< 3,0 mEq/L) — corregir antes']
              }
            }
          ]
        },

        /* ── 3ª LINHA: Acidose / Eletrólitos ── */
        {
          tier: '3a',
          label: { pt: '3ª LINHA — Correção de Acidose & Distúrbios Eletrolíticos', es: '3ª LÍNEA — Corrección de Acidosis & Disturbios Electrolíticos' },
          guard: function (pd) { return true; },
          drugs: [
            {
              key: 'bicarbonato_de_sodio',
              dbGlobal: null,
              fallbackName: 'Bicarbonato de Sódio VO (500–1000 mg 2–3x/dia)',
              indicacao: {
                pt: 'Acidose metabólica da DRC com HCO₃⁻ < 22 mEq/L: suplementação oral retarda progressão renal (BICARB trial: redução de 36% na TFGe). Iniciar: 500 mg 2x/dia; ajustar até HCO₃⁻ = 24 mEq/L. Indicação EV: acidose grave (pH < 7,1) ou sintomática (Kussmaul).',
                es: 'Acidosis metabólica de DRC con HCO₃⁻ < 22 mEq/L: la suplementación oral retarda la progresión renal. Iniciar: 500 mg 2x/día; ajustar hasta HCO₃⁻ = 24 mEq/L.'
              },
              mecanismo: {
                pt: ['Tampão extracelular: HCO₃⁻ + H⁺ → H₂CO₃ → H₂O + CO₂ (exalado) — eleva pH plasmático', 'Redução de H⁺ livre → diminui ativação de vias catabolizantes proteicas (ubiquitina-proteassoma) → preserva massa muscular e desacelera fibrose renal'],
                es: ['Tampón extracelular: HCO₃⁻ + H⁺ → H₂CO₃ → H₂O + CO₂ (exhalado) — eleva pH plasmático', 'Reduce activación de vías catabólicas proteicas → preserva masa muscular y desacelera fibrosis renal']
              },
              ea: {
                pt: ['Sobrecarga de sódio → edema, HAS, congestão (atenção em DRC avançada)', 'Alcalose metabólica de rebote se correção excessiva', 'Tetania hipocalcêmica (aguda EV — hipocalcemia ionizada relativa)'],
                es: ['Sobrecarga de sodio → edema, HAS, congestión', 'Alcalosis metabólica de rebote', 'Tetania hipocalcémica (corrección EV rápida)']
              },
              riscos: {
                pt: ['Hipocalemia de diluição (administração EV rápida)', 'Alcalose pós-correção → desvio da curva de dissociação da Hb → hipóxia tecidual (corrigir lentamente)'],
                es: ['Hipopotasemia de dilución (infusión EV rápida)', 'Alcalosis post-corrección → hipoxia tisular (corregir lentamente)']
              },
              ci: {
                pt: ['HCO₃⁻ > 24 mEq/L (não corrigir alcalose com bicarbonato)', 'Insuficiência respiratória hipercápnica (retentor de CO₂ — pode precipitar coma hipercápnico EV)', 'Hipocalemia não corrigida (EV)'],
                es: ['HCO₃⁻ > 24 mEq/L', 'Insuficiencia respiratoria hipercápnica', 'Hipopotasemia no corregida (EV)']
              }
            },
            {
              key: 'patiromer',
              dbGlobal: 'NEFRO_DRUGS_DB',
              fallbackName: 'Patiromer (Veltassa) — Quelante K⁺ oral',
              indicacao: {
                pt: 'Hipercalemia crônica em DRC (K⁺ > 5,0–5,5 mEq/L) para permitir manutenção de IECA/BRA/ARM (OPAL-HK trial). Dose: 8,4 g oral 1x/dia longe das refeições → ajustar até 25,2 g/dia conforme K⁺ sérico.',
                es: 'Hiperpotasemia crónica en DRC para permitir mantenimiento de IECA/BRA/ARM (OPAL-HK trial). Dosis: 8,4 g oral 1x/día → ajustar hasta 25,2 g/día.'
              },
              mecanismo: {
                pt: ['Resina fluoracrilato-co-divinilbenzeno com grupos carboxilato: troca K⁺ por Ca²⁺ no cólon', 'Elimina K⁺ pelas fezes — ação não sistêmica, início 7 h, efeito máximo 48 h'],
                es: ['Resina fluoracrilato-co-divinilbenzeno con grupos carboxilato: intercambia K⁺ por Ca²⁺ en el colon', 'Elimina K⁺ por heces — inicio 7 h, efecto máximo 48 h']
              },
              ea: {
                pt: ['Constipação (8%)', 'Diarreia (5%)', 'Hipocalemia (meta K⁺ 3,8–5,0 mEq/L — reduzir dose se K⁺ < 3,8)', 'Hipomagnesemia (monitorar Mg²⁺)'],
                es: ['Constipación (8%)', 'Diarrea (5%)', 'Hipopotasemia — reducir dosis si K⁺ < 3,8', 'Hipomagnesemia']
              },
              riscos: {
                pt: ['Administrar 3 h antes ou depois de outros fármacos orais (adsorve outros medicamentos)', 'Monitorar K⁺ e Mg²⁺ semanalmente no primeiro mês'],
                es: ['Administrar 3 h antes o después de otros fármacos orales', 'Monitorar K⁺ y Mg²⁺ semanalmente el primer mes']
              },
              ci: {
                pt: ['Hipocalemia (K⁺ < 3,5 mEq/L)', 'Obstrução intestinal', 'Hipersensibilidade ao patiromer'],
                es: ['Hipopotasemia (K⁺ < 3,5 mEq/L)', 'Obstrucción intestinal', 'Hipersensibilidad al patiromer']
              }
            }
          ]
        },

        /* ── REFRATÁRIO: Preparo TRS ── */
        {
          tier: 'refratario',
          label: { pt: 'REFRATÁRIO / ESTÁGIO 5 — Terapia de Substituição Renal', es: 'REFRACTARIO / ESTADIO 5 — Terapia de Sustitución Renal' },
          guard: function (pd) { return Number(pd.kdigo || 0) >= 4 || Number(pd.clcr || 90) < 20; },
          drugs: [
            {
              key: 'hemodialise_urgencia',
              dbGlobal: null,
              fallbackName: 'Hemodiálise de Urgência (Indicações Absolutas)',
              indicacao: {
                pt: 'Critérios AEIOU de urgência dialítica: (A) Acidose metabólica grave pH < 7,1 refratária a bicarbonato; (E) Encefalopatia urêmica (asterixis, confusão, coma); (I) Hipercalemia K⁺ > 6,5 mEq/L refratária a tratamento clínico; (O) Sobrecarga hídrica com edema pulmonar refratário a diurético; (U) Uremia sintomática (pericardite, sangramento, prurido intratável).',
                es: 'Criterios AEIOU de urgencia dialítica: (A) Acidosis grave pH < 7,1 refractaria; (E) Encefalopatía urémica; (I) Hiperpotasemia K⁺ > 6,5 refractaria; (O) Sobrecarga hídrica con EAP refractario; (U) Uremia sintomática (pericarditis, sangrado).'
              },
              mecanismo: {
                pt: ['Depuração extracorpórea por difusão através de membrana semipermeável (dialisador) usando gradiente de concentração contra dialisato', 'Remove ureia, creatinina, K⁺, fosfato, toxinas urêmicas, correção de acidose e excesso de volume'],
                es: ['Depuración extracorpórea por difusión a través de membrana semipermeable contra dializante', 'Elimina urea, creatinina, K⁺, fosfato, toxinas urémicas y exceso de volumen']
              },
              ea: {
                pt: ['Hipotensão intradialítica (20–30% das sessões)', 'Câimbras musculares (remoção rápida de líquido)', 'Infecção do acesso vascular (cateter > FAV)', 'Desequilíbrio de diálise (cefaleia, náuseas — 1ª sessão em uremia grave)'],
                es: ['Hipotensión intradialítica (20–30% de sesiones)', 'Calambres musculares', 'Infección del acceso vascular', 'Síndrome de desequilibrio (cefalea, náuseas — 1ª sesión en uremia grave)']
              },
              riscos: {
                pt: ['Acesso vascular inadequado — cateter duplo lúmen femoral ou jugular interno (nunca subclávia — risco de estenose da veia)', 'Anticoagulação do circuito: heparina padrão 500–2000 U/h (ajustar em sangramento ativo — TCAR sem anticoagulante ou citrato regional)'],
                es: ['Acceso vascular inadecuado — catéter doble lumen femoral o yugular (nunca subclavia — riesgo estenosis venosa)', 'Anticoagulación del circuito: heparina 500–2000 U/h']
              },
              ci: {
                pt: ['Instabilidade hemodinâmica grave (PAS < 80 mmHg) — considerar TRRC (Terapia Renal de Substituição Contínua)', 'Acesso vascular impossível (considerar diálise peritoneal)'],
                es: ['Inestabilidad hemodinámica grave (PAS < 80 mmHg) — considerar TRRC', 'Acceso vascular imposible (considerar diálisis peritoneal)']
              }
            }
          ]
        }
      ]
    },

    /* ════════════════════════════════════════════════════════════
       ELETRÓLITOS — Redireciona para calculadora interna
    ════════════════════════════════════════════════════════════ */
    eletrolitos: {
      alertBlock: function () { return ''; },
      lines: []  /* handled by redirect logic */
    },

    /* ════════════════════════════════════════════════════════════
       HEPATOLOGIA — Estratificação Child-Pugh + Drogas Hepáticas
    ════════════════════════════════════════════════════════════ */
    hepatologia: {
      alertBlock: function (pd, lang) {
        var cp = (pd.child_pugh || '').toUpperCase();
        if (!cp) return '';
        var msg = cp === 'C'
          ? (lang === 'es'
            ? '🔴 <strong>Child-Pugh C:</strong> Insuficiência hepática grave. Evite hepatotóxicos, NSAIDs, acetaminofeno > 2 g/dia, benzodiazepínicos não puroados e opioides de longa duração. Considere encaminhamento para centro de transplante hepático.'
            : '🔴 <strong>Child-Pugh C:</strong> Insuficiência hepática grave. Evite hepatotóxicos, AINEs, paracetamol > 2 g/dia, benzodiazepínicos não puros e opioides de longa duração. Considere encaminhamento para centro de transplante hepático.')
          : (cp === 'B'
            ? (lang === 'es'
              ? '🟠 <strong>Child-Pugh B:</strong> Insuficiência hepática moderada. Reduza doses de fármacos de alta extração hepática, monitore encefalopatia e evite sedantes não titráveis.'
              : '🟠 <strong>Child-Pugh B:</strong> Insuficiência hepática moderada. Reduza doses de fármacos de alta extração hepática, monitore encefalopatia e evite sedantes não titráveis.')
            : '');
        return msg ? '<div class="csr-alert-block">' + msg + '</div>' : '';
      },
      lines: [
        {
          tier: '1a',
          label: { pt: '1ª LINHA — Rastreio de Hepatotóxicos na Medicação Atual', es: '1ª LÍNEA — Rastreo de Hepatotóxicos en Medicación Actual' },
          guard: function () { return true; },
          drugs: [
            {
              key: 'isoniazida',
              dbGlobal: 'ALL_DRUGS_DB',
              fallbackName: 'Isoniazida — Monitorar TGO/TGP mensal',
              indicacao: {
                pt: 'Tratamento de tuberculose ativa e latente. Hepatotoxicidade em 0,1–1% (hepatite clínica franca). Suspender imediatamente se TGO/TGP > 3× LSN sintomático ou > 5× LSN assintomático.',
                es: 'Tratamiento de tuberculosis activa y latente. Hepatotoxicidad en 0,1–1%. Suspender si TGO/TGP > 3× LSN sintomático o > 5× LSN asintomático.'
              },
              mecanismo: {
                pt: ['Pró-fármaco ativado por catalase-peroxidase bacteriana (KatG) → metabólitos reativos de hidrazina + acetilisoniazida', 'Metabólito hidrazina: haptenização proteica hepática → resposta imune idiossincrática'],
                es: ['Profármaco activado por catalasa-peroxidasa bacteriana → metabolitos reactivos de hidrazina', 'Metabolito hidrazina: haptenización proteica hepática → respuesta inmune idiosincrática']
              },
              ea: {
                pt: ['Hepatotoxicidade (monitorar TGO/TGP mensal)', 'Neuropatia periférica (prevenir com Piridoxina 25–50 mg/dia)', 'Hiperuricemia, lupus-like síndrome'],
                es: ['Hepatotoxicidad (monitorar TGO/TGP mensual)', 'Neuropatía periférica (prevenir con Piridoxina 25–50 mg/día)', 'Hiperuricemia, síndrome lupus-like']
              },
              riscos: {
                pt: ['Hepatite fulminante rara (<0,1%) — suspensão imediata salva vidas', 'Interação com Fenitoína: aumenta nível sérico (risco de intoxicação)', 'Potencializa hepatotoxicidade do Álcool e do Rifampicina'],
                es: ['Hepatitis fulminante rara (<0,1%) — suspensión inmediata es clave', 'Interacción con Fenitoína: aumenta niveles séricos', 'Potencia hepatotoxicidad del Alcohol y Rifampicina']
              },
              ci: {
                pt: ['Hepatite ativa (TGO/TGP > 3× LSN basal)', 'Hepatotoxicidade prévia por isoniazida', 'Hepatopatia crônica Child-Pugh C (evitar)'],
                es: ['Hepatitis activa (TGO/TGP > 3× LSN basal)', 'Hepatotoxicidad previa por isoniazida', 'Hepatopatía crónica Child-Pugh C (evitar)']
              }
            }
          ]
        }
      ]
    }
  };

  /* ───────────────────────────────────────────────────────────────
     DETECÇÃO DO MÓDULO (pathname /condutas/* ou ?modulo=)
  ─────────────────────────────────────────────────────────────── */
  function _detectModulo() {
    /* 1. Pathname */
    var mPath = window.location.pathname.match(/\/condutas\/([a-z0-9\-]+)/i);
    if (mPath) {
      var k = MODULE_ALIASES[_norm(mPath[1])];
      if (k) return k;
    }
    /* 2. Query string */
    try {
      var p = new URLSearchParams(window.location.search);
      var q = p.get('modulo');
      if (q) { var k2 = MODULE_ALIASES[_norm(q)]; if (k2) return k2; }
    } catch (e) { /* noop */ }
    return null;
  }

  /* ───────────────────────────────────────────────────────────────
     RENDERIZAÇÃO DE CONDUTAS SEQUENCIAIS — ENGINE PRINCIPAL
  ─────────────────────────────────────────────────────────────── */

  /* Badge de tier */
  var TIER_CONFIG = {
    '1a':        { label: '1ª LINHA', cls: 'csr-tier-1', icon: '🟢' },
    '2a':        { label: '2ª LINHA', cls: 'csr-tier-2', icon: '🔵' },
    '3a':        { label: '3ª LINHA', cls: 'csr-tier-3', icon: '🟡' },
    'refratario':{ label: 'REFRATÁRIO', cls: 'csr-tier-r', icon: '🔴' }
  };

  function _buildDrugCard(drug, moduloKey, pd, lang) {
    var tc = TIER_CONFIG['1a']; /* fallback */
    var drugDb = null;

    /* Tenta resolver fármaco do DB global */
    if (drug.dbGlobal && window[drug.dbGlobal]) {
      drugDb = window[drug.dbGlobal][drug.key] || null;
    }
    if (!drugDb && window.ALL_DRUGS_DB) {
      drugDb = window.ALL_DRUGS_DB[drug.key] || null;
    }

    /* ── Dicionário dose/indicação (BUILD 461-I18N-FIX) ── */
    var DOSE_I18N = {
      calcTitle:   lang === 'es' ? '💊 DOSIS CALCULADA EN SU GUARDIA'  : '💊 DOSE CALCULADA NO SEU PLANTÃO',
      calcLblPad:  lang === 'es' ? 'Estándar'                           : 'Padrão',
      calcLblGrav: lang === 'es' ? 'Grave/ICC'                          : 'Grave/ICC',
      patLabel:    lang === 'es' ? '📋 Paciente'                        : '📋 Paciente',
      weightLbl:   lang === 'es' ? 'Peso'                               : 'Peso',
      ageLbl:      lang === 'es' ? 'años'                               : 'anos',
      indTitle:    lang === 'es' ? '📋 INDICACIÓN & DOSIS'              : '📋 INDICAÇÃO & DOSE'
    };

    /* Dose calculada via calculate(pd, lang) — PASSO 3 garante lang explícito */
    var doseHtml = '';
    if (drugDb && typeof drugDb.calculate === 'function') {
      try {
        var calc = drugDb.calculate(pd || {}, lang);   /* ← lang passado explicitamente */
        if (calc) {
          var doseText = '';
          if (calc.dose) {
            var d = calc.dose;
            if (d.adultoPadrao) doseText += '<li><strong>' + DOSE_I18N.calcLblPad  + ':</strong> ' + _esc(d.adultoPadrao) + '</li>';
            if (d.adultoGrave)  doseText += '<li><strong>' + DOSE_I18N.calcLblGrav + ':</strong> ' + _esc(d.adultoGrave)  + '</li>';
          }
          if (doseText) {
            doseHtml = '<div class="csr-dose-block">' +
              '<div class="csr-dose-title">' + DOSE_I18N.calcTitle + '</div>' +
              '<ul class="csr-dose-list">' + doseText + '</ul>' +
              (pd.peso ? '<div class="csr-dose-patient">' + DOSE_I18N.patLabel + ': ' +
                DOSE_I18N.weightLbl + ' ' + _esc(pd.peso) + ' kg' +
                (pd.clcr  ? ' · ClCr '  + _esc(pd.clcr)  + ' mL/min' : '') +
                (pd.idade ? ' · '       + _esc(pd.idade) + ' ' + DOSE_I18N.ageLbl : '') +
                '</div>' : '') +
              '</div>';
          }
        }
      } catch (e) { /* calculate() falhou — sem dados do paciente */ }
    } else if (!doseHtml) {
      /* Fallback: dose estática do drug definition */
      if (drug.indicacao) {
        doseHtml = '<div class="csr-dose-block">' +
          '<div class="csr-dose-title">' + DOSE_I18N.indTitle + '</div>' +
          '<p class="csr-dose-static">' + _esc(_txt(drug.indicacao, lang)) + '</p>' +
          '</div>';
      }
    }

    /* Mini-bula */
    var mecHtml = '';
    var mecArr = drug.mecanismo ? (Array.isArray(_txt(drug.mecanismo, lang)) ? drug.mecanismo[lang] || drug.mecanismo.pt || drug.mecanismo : [_txt(drug.mecanismo, lang)]) : [];
    if (typeof drug.mecanismo === 'object' && !Array.isArray(drug.mecanismo)) {
      mecArr = drug.mecanismo[lang] || drug.mecanismo.pt || [];
    }
    if (mecArr && mecArr.length) {
      mecHtml = '<div class="csr-minibula-section"><strong>⚙️ Mecanismo</strong><ul>' +
        mecArr.map(function (m) { return '<li>' + _esc(m) + '</li>'; }).join('') + '</ul></div>';
    }

    function _listSection(icon, title, arr) {
      if (!arr) return '';
      var items = (typeof arr === 'object' && !Array.isArray(arr)) ? (arr[lang] || arr.pt || []) : arr;
      if (!items || !items.length) return '';
      return '<div class="csr-minibula-section"><strong>' + icon + ' ' + title + '</strong><ul>' +
        items.map(function (i) { return '<li>' + _esc(i) + '</li>'; }).join('') + '</ul></div>';
    }

    var miniBula = '<div class="csr-minibula">' +
      mecHtml +
      _listSection('⚠️', lang === 'es' ? 'Efectos Adversos' : 'Efeitos Adversos', drug.ea) +
      _listSection('🚨', lang === 'es' ? 'Riesgos Críticos' : 'Riscos Críticos', drug.riscos) +
      _listSection('🚫', lang === 'es' ? 'Contraindicaciones' : 'Contraindicações', drug.ci) +
      '</div>';

    var drugName = _name(drugDb, lang) || drug.fallbackName;
    var cardId = 'csr-card-' + drug.key + '-' + Math.random().toString(36).slice(2, 7);

    return '<div class="csr-drug-card-v2" id="' + cardId + '">' +
      '<div class="csr-card-header" onclick="' +
        'var b=document.getElementById(\'' + cardId + '\').querySelector(\'.csr-card-body\');' +
        'var a=document.getElementById(\'' + cardId + '\').querySelector(\'.csr-card-arrow\');' +
        'if(b.style.display===\'none\'||!b.style.display){b.style.display=\'block\';a.textContent=\'▲\';}' +
        'else{b.style.display=\'none\';a.textContent=\'▼\';}' +
      '">' +
        '<div class="csr-card-name">💊 ' + _esc(drugName) + '</div>' +
        '<span class="csr-card-arrow">▼</span>' +
      '</div>' +
      '<div class="csr-card-body" style="display:none">' +
        doseHtml +
        miniBula +
        '<button class="csr-full-btn" data-drug="' + _esc(drug.key) + '">' +
          '🔍 ' + (lang === 'es' ? 'Ver Ficha Completa en la Calculadora' : 'Ver Ficha Completa na Calculadora') +
        '</button>' +
      '</div>' +
    '</div>';
  }

  function _renderConductas(moduloKey, container, pd, lang) {
    var therapy = THERAPY_LINES[moduloKey];

    /* Eletrólitos: redirect */
    if (moduloKey === 'eletrolitos') {
      container.innerHTML = '<div class="csr-redirect-msg">⚗️ ' +
        (lang === 'es' ? 'Redirigiendo a la Calculadora de Electrolitos…' : 'Redirecionando para a Calculadora de Eletrólitos…') +
        '</div>';
      _waitGlobal('HubAccordion', function (hub) {
        if (typeof hub.open === 'function') {
          hub.open('eletrolitos');
          var view = document.getElementById('clinical-support-view');
          if (view) view.style.display = 'none';
        }
      });
      return;
    }

    if (!therapy) {
      container.innerHTML = '<div class="csr-empty">Módulo não configurado.</div>';
      return;
    }

    /* Verificar se ALL_DRUGS_DB carregou; retry se não */
    if (!window.ALL_DRUGS_DB || Object.keys(window.ALL_DRUGS_DB).length === 0) {
      container.innerHTML = '<div class="csr-loading"><div class="csr-spinner"></div><p>' +
        (lang === 'es' ? 'Cargando base de datos clínica…' : 'Carregando base de dados clínica…') + '</p></div>';
      setTimeout(function () { _renderConductas(moduloKey, container, pd, lang); }, 400);
      return;
    }

    var html = '';

    /* Bloco de alerta cruzado (CHA₂DS₂-VASc × HAS-BLED, KDIGO, Child-Pugh) */
    if (typeof therapy.alertBlock === 'function') {
      html += therapy.alertBlock(pd, lang);
    }

    /* Linhas terapêuticas */
    therapy.lines.forEach(function (line) {
      if (typeof line.guard === 'function' && !line.guard(pd)) return;

      var tc = TIER_CONFIG[line.tier] || TIER_CONFIG['1a'];
      var lineLabel = _txt(line.label, lang);

      html += '<div class="csr-therapy-line">' +
        '<div class="csr-line-header">' +
          '<span class="csr-tier-badge ' + tc.cls + '">' + tc.icon + ' ' + tc.label + '</span>' +
          '<span class="csr-line-label">' + _esc(lineLabel) + '</span>' +
        '</div>' +
        '<div class="csr-line-drugs">';

      line.drugs.forEach(function (drug) {
        html += _buildDrugCard(drug, moduloKey, pd, lang);
      });

      html += '</div></div>';
    });

    /* Rodapé — I18N PT/ES (BUILD 461-I18N-FIX) */
    html += '<div class="csr-footer-note">📚 ' +
      (lang === 'es'
        ? 'Basado en: AHA/ACC 2023, ESC 2023 (FA/ICC), KDIGO 2024, AASLD 2023, FEBRASGO 2023. Versión v470.'
        : 'Baseado em: AHA/ACC 2023, ESC 2023 (FA/ICC), KDIGO 2024, AASLD 2023, FEBRASGO 2023. Versão v470.') +
      '</div>';

    container.innerHTML = html;

    /* Bind: botão "Ver Ficha Completa" → fecha view + abre hub */
    container.querySelectorAll('.csr-full-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dk = this.getAttribute('data-drug');
        if (!dk) return;
        _closeView();
        setTimeout(function () {
          _waitGlobal('HubAccordion', function (hub) {
            if (typeof hub.open === 'function') hub.open('farmacos', { q: dk });
          });
        }, 200);
      });
    });
  }

  /* ───────────────────────────────────────────────────────────────
     ABRIR / FECHAR A VIEW
  ─────────────────────────────────────────────────────────────── */
  var _activeModulo = null;

  function _openView(moduloKey) {
    _activeModulo = moduloKey;
    var meta = MODULE_META[moduloKey];
    if (!meta) { console.warn('[CSR] Módulo desconhecido: ' + moduloKey); return; }

    /* ── BUILD 461-I18N-FIX: usa _activeLang persistido por _init() ── */
    var lang = _activeLang;
    var pd   = window.patientData || {};

    /* Dicionário de UI — PT / ES */
    var I18N = {
      bannerTitle: lang === 'es' ? 'Soporte de Decisión Médica' : 'Suporte de Decisão Médica',
      closeBtnTxt: lang === 'es' ? '← Volver a la Calculadora'  : '← Voltar para a Calculadora'
    };

    _waitEl('clinical-support-view', function (view) {
      /* ── CSS ABSOLUTO INVIOLÁVEL (z-index:9999999) ── */
      view.style.cssText = [
        'position:fixed', 'top:0', 'left:0',
        'width:100vw', 'height:100vh',
        'background:#111827', 'z-index:9999999',
        'overflow-y:auto', 'padding:20px',
        'box-sizing:border-box', 'color:#fff',
        'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        'display:flex', 'flex-direction:column'
      ].join(';') + ';';

      view.style.setProperty('--csr-color', meta.color);
      view.style.setProperty('--csr-accent', meta.accent);

      /* Banner — I18N completo PT/ES */
      var bannerEl = document.getElementById('csr-banner-title');
      if (bannerEl) {
        bannerEl.textContent = meta.emoji + '  ' + I18N.bannerTitle + ' — ' +
          (lang === 'es' ? meta.label.es : meta.label.pt);
      }

      /* Botão Fechar — handler DOM direto com texto I18N */
      var closeBtn = document.getElementById('csr-close-btn');
      if (closeBtn) {
        closeBtn.textContent = I18N.closeBtnTxt;
        closeBtn.onclick = function () {
          document.getElementById('clinical-support-view').style.display = 'none';
          window.scrollTo(0, 0);
          var hub = document.getElementById('hub-root') ||
            document.querySelector('.hub-wrapper') || document.getElementById('app');
          if (hub) hub.style.display = '';
          document.body.classList.remove('csr-active');
          try {
            var p = new URLSearchParams(window.location.search);
            p.delete('modulo');
            history.replaceState(null, '', window.location.pathname + (p.toString() ? '?' + p.toString() : ''));
          } catch (e) { /* noop */ }
        };
      }

      view.classList.remove('csr-minimized');
      document.body.classList.add('csr-active');

      var hubRoot = document.getElementById('hub-root') ||
        document.querySelector('.hub-wrapper') || document.getElementById('app');
      if (hubRoot) hubRoot.style.display = 'none';

      /* Renderiza condutas sequenciais */
      var contentEl = document.getElementById('csr-content-body');
      if (contentEl) _renderConductas(moduloKey, contentEl, pd, lang);
    });

    console.log('[CSR v2] Módulo aberto: ' + moduloKey);
  }

  function _closeView() {
    var view = document.getElementById('clinical-support-view');
    if (view) {
      view.style.display = 'none';
      view.classList.remove('csr-minimized');
    }
    document.body.classList.remove('csr-active');
    var hubRoot = document.getElementById('hub-root') ||
      document.querySelector('.hub-wrapper') || document.getElementById('app');
    if (hubRoot) hubRoot.style.display = '';
    try {
      var params = new URLSearchParams(window.location.search);
      params.delete('modulo');
      var newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
      history.replaceState(null, '', newUrl);
    } catch (e) { /* noop */ }
    _activeModulo = null;
    console.log('[CSR v2] View fechada. Calculadora restaurada.');
  }

  /* ───────────────────────────────────────────────────────────────
     CSS DAS LINHAS TERAPÊUTICAS (injetado dinamicamente)
  ─────────────────────────────────────────────────────────────── */
  function _injectTherapyCSS() {
    if (document.getElementById('csr-therapy-styles')) return;
    var style = document.createElement('style');
    style.id = 'csr-therapy-styles';
    style.textContent = [
      /* Alert block */
      '.csr-alert-block{background:rgba(251,191,36,.15);border-left:4px solid #FBBF24;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:14px;line-height:1.5;color:#FEF3C7;}',
      /* Therapy line */
      '.csr-therapy-line{margin-bottom:18px;}',
      '.csr-line-header{display:flex;align-items:center;gap:10px;margin-bottom:8px;}',
      '.csr-tier-badge{font-size:11px;font-weight:700;letter-spacing:.5px;padding:3px 10px;border-radius:20px;white-space:nowrap;}',
      '.csr-tier-1{background:rgba(16,185,129,.25);color:#6EE7B7;}',
      '.csr-tier-2{background:rgba(59,130,246,.25);color:#93C5FD;}',
      '.csr-tier-3{background:rgba(251,191,36,.25);color:#FDE68A;}',
      '.csr-tier-r{background:rgba(239,68,68,.25);color:#FCA5A5;}',
      '.csr-line-label{font-size:13px;font-weight:600;color:#CBD5E1;flex:1;}',
      '.csr-line-drugs{display:flex;flex-direction:column;gap:8px;}',
      /* Drug card v2 */
      '.csr-drug-card-v2{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;}',
      '.csr-card-header{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;cursor:pointer;user-select:none;transition:background .15s;}',
      '.csr-card-header:hover{background:rgba(255,255,255,.09);}',
      '.csr-card-name{font-size:14px;font-weight:600;color:#F1F5F9;}',
      '.csr-card-arrow{font-size:12px;color:#64748B;margin-left:8px;}',
      '.csr-card-body{padding:14px;border-top:1px solid rgba(255,255,255,.08);}',
      /* Dose block */
      '.csr-dose-block{background:rgba(16,185,129,.12);border-left:3px solid #10B981;border-radius:6px;padding:10px 12px;margin-bottom:10px;}',
      '.csr-dose-title{font-size:11px;font-weight:700;color:#6EE7B7;letter-spacing:.5px;margin-bottom:6px;}',
      '.csr-dose-list{margin:0;padding-left:18px;font-size:13px;color:#D1FAE5;line-height:1.6;}',
      '.csr-dose-list li{margin-bottom:3px;}',
      '.csr-dose-static{font-size:13px;color:#D1FAE5;line-height:1.6;margin:0;}',
      '.csr-dose-patient{font-size:11px;color:#6EE7B7;margin-top:6px;opacity:.8;}',
      /* Mini-bula */
      '.csr-minibula{display:flex;flex-direction:column;gap:8px;}',
      '.csr-minibula-section{font-size:12px;color:#CBD5E1;line-height:1.5;}',
      '.csr-minibula-section strong{display:block;color:#94A3B8;margin-bottom:3px;font-size:11px;letter-spacing:.3px;}',
      '.csr-minibula-section ul{margin:0;padding-left:16px;}',
      '.csr-minibula-section li{margin-bottom:2px;}',
      /* Full btn */
      '.csr-full-btn{display:block;width:100%;margin-top:12px;padding:9px 14px;background:rgba(59,130,246,.2);border:1px solid rgba(59,130,246,.4);border-radius:8px;color:#93C5FD;font-size:13px;font-weight:600;cursor:pointer;text-align:center;transition:background .15s;}',
      '.csr-full-btn:hover{background:rgba(59,130,246,.35);}',
      /* Footer */
      '.csr-footer-note{font-size:11px;color:#475569;margin-top:20px;padding:10px;border-top:1px solid rgba(255,255,255,.07);text-align:center;}',
      /* Loading/redirect */
      '.csr-loading{display:flex;flex-direction:column;align-items:center;gap:14px;padding:40px;color:#94A3B8;}',
      '.csr-spinner{width:32px;height:32px;border:3px solid rgba(255,255,255,.1);border-top-color:#3B82F6;border-radius:50%;animation:csrSpin .8s linear infinite;}',
      '@keyframes csrSpin{to{transform:rotate(360deg)}}',
      '.csr-redirect-msg{padding:20px;color:#6EE7B7;font-size:15px;}'
    ].join('\n');
    (document.head || document.documentElement).appendChild(style);
  }

  /* ───────────────────────────────────────────────────────────────
     INICIALIZAÇÃO
  ─────────────────────────────────────────────────────────────── */
  function _init() {
    var params;
    try { params = new URLSearchParams(window.location.search); } catch (e) { params = null; }

    /* ── PASSO 1 (BUILD 461-I18N-FIX): resolve e persiste o idioma da URL ── */
    _activeLang = _resolveLang(params);
    /* Propaga para o app shell se ele ainda não definiu */
    if (!window.currentLang) window.currentLang = _activeLang;
    console.log('[CSR v2] locale resolvido: ' + _activeLang +
      (params && (params.get('lang') || params.get('idioma'))
        ? ' (URL param: ' + (params.get('lang') || params.get('idioma')) + ')'
        : ' (fallback)'));

    /* Ingere payload do paciente (síncrono) */
    _ingestPatientPayload(params);

    /* Injeta CSS de linhas terapêuticas */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _injectTherapyCSS);
    } else {
      _injectTherapyCSS();
    }

    var moduloKey = _detectModulo();
    if (!moduloKey) {
      console.log('[CSR v2] Sem ?modulo= ou /condutas/ — modo passivo.');
      return;
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { _openView(moduloKey); });
    } else {
      setTimeout(function () { _openView(moduloKey); }, 80);
    }
  }

  /* ───────────────────────────────────────────────────────────────
     API PÚBLICA
  ─────────────────────────────────────────────────────────────── */
  window.ClinicalSupportRouter = {
    open: function (modulo) {
      var key = MODULE_ALIASES[_norm(modulo)] || null;
      if (!key) { console.warn('[CSR] Módulo inválido: ' + modulo); return; }
      _openView(key);
    },
    close:     function () { _closeView(); },
    getModulo: function () { return _activeModulo; },
    buildUrl: function (modulo, lang, patientData) {
      var base = window.location.origin + window.location.pathname;
      var p = new URLSearchParams();
      if (lang) p.set('lang', lang);
      p.set('modulo', _norm(modulo));
      if (patientData) {
        ['peso','idade','clcr','kdigo','child_pugh','chads_vasc','has_bled','creatinina'].forEach(function (f) {
          if (patientData[f] != null) p.set(f, patientData[f]);
        });
      }
      return base + '?' + p.toString();
    },
    modules: function () { return Object.keys(MODULE_META); }
  };

  /* ── Executa imediatamente ── */
  _init();

  console.log('[MedCases CSR v2.1] BUILD 461-I18N-FIX | Locale: ' + _activeLang +
    ' | Módulos: ' + Object.keys(MODULE_META).join(', ') + ' | API: window.ClinicalSupportRouter');

})();
