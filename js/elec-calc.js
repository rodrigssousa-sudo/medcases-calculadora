/* ================================================================
   MedCases Pro — Calculadora de Eletrólitos / Medio Interno v3.0
   ----------------------------------------------------------------
   Calculadora clínica avançada baseada em botões.
   Fluxo em 4 etapas: Eletrólito → Estado → Protocolo → Presets
   
   RESPONSABILIDADES:
     - FORMULATIONS_DB: tabela interna de formulações e concentrações
     - ElecState: estado da calculadora (eletrólito, gravidade, acesso...)
     - Fórmulas clínicas: Na corr, ACT, déficits, Ca corr, Osm, AG, infusão
     - ElecRender: gera output em 7 blocos visuais
     - ElecInit: inicializa e expõe API pública window.ElecCalc
   
   API PÚBLICA:
     window.ElecCalc.selectElectrolyte(key)  — seleciona eletrólito (deep link)
     window.ElecCalc.reset()                 — reinicia calculadora
     window.ElecCalc.getState()              — retorna estado atual
   
   DEEP LINKS suportados:
     ?tab=eletrolitos&q=potassio|sodio|magnesio|calcio|fosforo|
                        bicarbonato|glicose|albumina|anion-gap|osmolaridade
================================================================ */

(function () {
  'use strict';

  /* ================================================================
     SEÇÃO 1 — BANCO DE FORMULAÇÕES (FORMULATIONS_DB)
  ================================================================ */
  var FORMULATIONS_DB = {
    'kcl191': {
      name: { pt: 'KCl 19,1%', es: 'KCl 19,1%' },
      concMeqPerMl: 2.5,
      concDesc: { pt: '2,5 mEq/mL', es: '2,5 mEq/mL' },
      ampVol: 10,
      ampMeq: 25,
      unit: 'mEq',
      maxPeriph: 50,  /* mEq/L máximo periférico */
      maxCentral: 80,
      alerts: {
        pt: ['⚠️ NUNCA administrar EV push — risco de PCR imediato',
             'Periférico: concentração máxima 40–50 mEq/L',
             'Central com monitorização: até 60–80 mEq/L'],
        es: ['⚠️ NUNCA administrar IV push — riesgo de PCR inmediato',
             'Periférico: concentración máxima 40–50 mEq/L',
             'Central con monitorización: hasta 60–80 mEq/L']
      }
    },
    'kcl10': {
      name: { pt: 'KCl 10%', es: 'KCl 10%' },
      concMeqPerMl: 1.33,
      concDesc: { pt: '≈1,3 mEq/mL', es: '≈1,3 mEq/mL' },
      ampVol: 10,
      ampMeq: 13.3,
      unit: 'mEq',
      maxPeriph: 50,
      maxCentral: 80,
      alerts: {
        pt: ['⚠️ NUNCA administrar EV push',
             'Periférico: concentração máxima 40–50 mEq/L'],
        es: ['⚠️ NUNCA administrar IV push',
             'Periférico: concentración máxima 40–50 mEq/L']
      }
    },
    'nacl09': {
      name: { pt: 'NaCl 0,9% (SF)', es: 'NaCl 0,9% (SF)' },
      concMeqPerL: 154,
      concDesc: { pt: '154 mEq/L (Na e Cl)', es: '154 mEq/L (Na y Cl)' },
      unit: 'mEq',
      alerts: { pt: [], es: [] }
    },
    'nacl3': {
      name: { pt: 'NaCl 3%', es: 'NaCl 3%' },
      concMeqPerL: 513,
      concDesc: { pt: '513 mEq/L (Na e Cl)', es: '513 mEq/L (Na y Cl)' },
      unit: 'mEq',
      alerts: {
        pt: ['⚠️ Preferencialmente acesso central',
             'Hiponatremia grave sintomática: 100 mL em 10 min — repetir conforme resposta',
             'Correção segura: ≤8–10 mEq/L/24h (alto risco: ≤6–8 mEq/L/24h)',
             '⚠️ Risco de mielinólise pontina central se correção rápida demais'],
        es: ['⚠️ Preferentemente acceso central',
             'Hiponatremia grave sintomática: 100 mL en 10 min — repetir según respuesta',
             'Corrección segura: ≤8–10 mEq/L/24h (alto riesgo: ≤6–8 mEq/L/24h)',
             '⚠️ Riesgo de mielinólisis pontina central si corrección demasiado rápida']
      }
    },
    'nacl234': {
      name: { pt: 'NaCl 23,4%', es: 'NaCl 23,4%' },
      concMeqPerMl: 4.0,
      concDesc: { pt: '4 mEq/mL — uso especializado', es: '4 mEq/mL — uso especializado' },
      unit: 'mEq',
      alerts: {
        pt: ['⚠️ Apenas acesso central — uso exclusivamente após diluição por especialista',
             '⚠️ Risco extremo se erro de diluição'],
        es: ['⚠️ Solo acceso central — uso exclusivamente tras dilución por especialista',
             '⚠️ Riesgo extremo ante error de dilución']
      }
    },
    'mgso450': {
      name: { pt: 'MgSO₄ 50%', es: 'MgSO₄ 50%' },
      concMgPerMl: 500,  /* mg/mL */
      concMmolPerMl: 2.0,
      concDesc: { pt: '500 mg/mL ≈ 2 mmol/mL', es: '500 mg/mL ≈ 2 mmol/mL' },
      ampVol: 10,
      ampMg: 5000,
      unit: 'g',
      alerts: {
        pt: ['⚠️ Monitorar reflexos patelares, FR e PA durante infusão',
             '⚠️ Antídoto da toxicidade: gluconato de cálcio 10% 1 g IV lento',
             'Toxicidade: hiporreflexia, depressão respiratória, bloqueio cardíaco',
             'Reduzir dose em ClCr <30 mL/min'],
        es: ['⚠️ Monitorear reflejos patelares, FR y PA durante infusión',
             '⚠️ Antídoto de toxicidad: gluconato de calcio 10% 1 g IV lento',
             'Toxicidad: hiporreflexia, depresión respiratoria, bloqueo cardíaco',
             'Reducir dosis con ClCr <30 mL/min']
      }
    },
    'bicarb84': {
      name: { pt: 'NaHCO₃ 8,4%', es: 'NaHCO₃ 8,4%' },
      concMeqPerMl: 1.0,
      concDesc: { pt: '1 mEq/mL (Na e HCO₃)', es: '1 mEq/mL (Na y HCO₃)' },
      ampVol10: 10,
      ampVol50: 50,
      unit: 'mEq',
      alerts: {
        pt: ['⚠️ Evitar correção excessiva — risco de alcalose metabólica',
             '⚠️ Hipernatremia e sobrecarga de sódio',
             'Indicações selecionadas: acidose grave (pH <7,1), hipercalemia com instabilidade, intoxicações'],
        es: ['⚠️ Evitar corrección excesiva — riesgo de alcalosis metabólica',
             '⚠️ Hipernatremia y sobrecarga de sodio',
             'Indicaciones seleccionadas: acidosis grave (pH <7,1), hiperpotasemia inestable, intoxicaciones']
      }
    },
    'sg5': {
      name: { pt: 'SG 5%', es: 'SG 5%' },
      concGPerMl: 0.05,
      concDesc: { pt: '50 mg/mL — 5 g/100 mL', es: '50 mg/mL — 5 g/100 mL' },
      unit: 'g',
      alerts: { pt: [], es: [] }
    },
    'sg10': {
      name: { pt: 'SG 10%', es: 'SG 10%' },
      concGPerMl: 0.10,
      concDesc: { pt: '100 mg/mL — 10 g/100 mL', es: '100 mg/mL — 10 g/100 mL' },
      unit: 'g',
      alerts: { pt: [], es: [] }
    },
    'sg25': {
      name: { pt: 'SG 25%', es: 'SG 25%' },
      concGPerMl: 0.25,
      concDesc: { pt: '250 mg/mL — 25 g/100 mL', es: '250 mg/mL — 25 g/100 mL' },
      unit: 'g',
      alerts: { pt: [], es: [] }
    },
    'sg50': {
      name: { pt: 'SG 50%', es: 'SG 50%' },
      concGPerMl: 0.50,
      concDesc: { pt: '500 mg/mL — 50 g/100 mL', es: '500 mg/mL — 50 g/100 mL' },
      unit: 'g',
      alerts: {
        pt: ['SG 50%: 25 g = 50 mL | 50 g = 100 mL'],
        es: ['SG 50%: 25 g = 50 mL | 50 g = 100 mL']
      }
    },
    'alb5': {
      name: { pt: 'Albumina 5%', es: 'Albúmina 5%' },
      concGPer100ml: 5,
      concDesc: { pt: '5 g/100 mL', es: '5 g/100 mL' },
      unit: 'g',
      alerts: {
        pt: ['Albumina usada como dado laboratorial para correção de Ca²⁺ e AG',
             'Reposição apenas com indicação clínica específica'],
        es: ['Albúmina usada como dato laboratorial para corrección de Ca²⁺ y AG',
             'Reposición solo con indicación clínica específica']
      }
    },
    'alb20': {
      name: { pt: 'Albumina 20%', es: 'Albúmina 20%' },
      concGPer100ml: 20,
      concDesc: { pt: '20 g/100 mL', es: '20 g/100 mL' },
      unit: 'g',
      alerts: {
        pt: ['Albumina 20%: expansor oncótico concentrado',
             'Reposição apenas com indicação clínica específica'],
        es: ['Albúmina 20%: expansor oncótico concentrado',
             'Reposición solo con indicación clínica específica']
      }
    },
    'gluconatoca': {
      name: { pt: 'Gluconato de Ca 10%', es: 'Gluconato de Ca 10%' },
      concMgPerMl: 100,
      concDesc: { pt: '100 mg/mL — 1 g/ampola 10 mL', es: '100 mg/mL — 1 g/ampolla 10 mL' },
      ampVol: 10,
      unit: 'g',
      alerts: {
        pt: ['⚠️ Preferir acesso central ou veia calibrosa — risco de necrose por extravasamento',
             'Administrar lentamente (10 mL em 2–5 min) com monitorização cardíaca'],
        es: ['⚠️ Preferir acceso central o vena calibrosa — riesgo de necrosis por extravasación',
             'Administrar lentamente (10 mL en 2–5 min) con monitorización cardíaca']
      }
    },
    'cloretoca': {
      name: { pt: 'Cloreto de Ca 10%', es: 'Cloreto de Ca 10%' },
      concMgPerMl: 100,
      concDesc: { pt: '100 mg/mL — Ca elementar 3× > gluconato', es: '100 mg/mL — Ca elemental 3× > gluconato' },
      unit: 'g',
      alerts: {
        pt: ['⚠️ Preferencialmente acesso CENTRAL — alto risco de necrose tecidual',
             'Cálcio elementar ~3× superior ao gluconato de cálcio'],
        es: ['⚠️ Preferentemente acceso CENTRAL — alto riesgo de necrosis tisular',
             'Calcio elemental ~3× superior al gluconato de calcio']
      }
    }
  };

  /* ================================================================
     SEÇÃO 2 — ELETRÓLITOS (11 itens com metadados clínicos)
  ================================================================ */
  var ELECTROLYTES = {
    'k': {
      key: 'k',
      name: { pt: 'Potássio (K⁺)', es: 'Potasio (K⁺)' },
      shortName: 'K⁺',
      unit: 'mEq/L',
      normal: { min: 3.5, max: 5.0 },
      refLow: 3.5, refHigh: 5.0,
      icon: 'fa-bolt',
      color: '#A78BFA',
      fields: ['valor', 'peso', 'clcr'],
      defaultFormulations: ['kcl191', 'kcl10'],
      states: ['nivel', 'gravidade', 'ecg', 'clcr', 'acesso']
    },
    'na': {
      key: 'na',
      name: { pt: 'Sódio (Na⁺)', es: 'Sodio (Na⁺)' },
      shortName: 'Na⁺',
      unit: 'mEq/L',
      normal: { min: 135, max: 145 },
      refLow: 135, refHigh: 145,
      icon: 'fa-wave-square',
      color: '#38BDF8',
      fields: ['valor', 'peso', 'sexo', 'glicose', 'ureia'],
      defaultFormulations: ['nacl09', 'nacl3'],
      states: ['nivel', 'gravidade', 'sintomas', 'acesso']
    },
    'cl': {
      key: 'cl',
      name: { pt: 'Cloro (Cl⁻)', es: 'Cloro (Cl⁻)' },
      shortName: 'Cl⁻',
      unit: 'mEq/L',
      normal: { min: 98, max: 106 },
      refLow: 98, refHigh: 106,
      icon: 'fa-circle-minus',
      color: '#34D399',
      fields: ['valor', 'na', 'hco3'],
      defaultFormulations: ['nacl09', 'nacl3', 'kcl191'],
      states: ['nivel', 'acidbase']
    },
    'mg': {
      key: 'mg',
      name: { pt: 'Magnésio (Mg²⁺)', es: 'Magnesio (Mg²⁺)' },
      shortName: 'Mg²⁺',
      unit: 'mg/dL',
      unitAlt: 'mEq/L',
      normal: { min: 1.6, max: 2.6 },
      refLow: 1.6, refHigh: 2.6,
      icon: 'fa-atom',
      color: '#FCD34D',
      fields: ['valor', 'peso', 'clcr'],
      defaultFormulations: ['mgso450'],
      states: ['nivel', 'gravidade', 'clcr', 'acesso']
    },
    'ca': {
      key: 'ca',
      name: { pt: 'Cálcio (Ca²⁺)', es: 'Calcio (Ca²⁺)' },
      shortName: 'Ca²⁺',
      unit: 'mg/dL',
      normal: { min: 8.5, max: 10.5 },
      refLow: 8.5, refHigh: 10.5,
      icon: 'fa-bone',
      color: '#F9A8D4',
      fields: ['valor', 'albumina', 'peso'],
      defaultFormulations: ['gluconatoca', 'cloretoca'],
      states: ['nivel', 'gravidade', 'sintomas', 'ecg', 'acesso']
    },
    'p': {
      key: 'p',
      name: { pt: 'Fósforo (P)', es: 'Fósforo (P)' },
      shortName: 'P',
      unit: 'mg/dL',
      normal: { min: 2.5, max: 4.5 },
      refLow: 2.5, refHigh: 4.5,
      icon: 'fa-circle-dot',
      color: '#6EE7B7',
      fields: ['valor', 'peso', 'clcr'],
      defaultFormulations: [],
      states: ['nivel', 'gravidade', 'clcr']
    },
    'hco3': {
      key: 'hco3',
      name: { pt: 'Bicarbonato (HCO₃⁻)', es: 'Bicarbonato (HCO₃⁻)' },
      shortName: 'HCO₃⁻',
      unit: 'mEq/L',
      normal: { min: 22, max: 26 },
      refLow: 22, refHigh: 26,
      icon: 'fa-flask',
      color: '#93C5FD',
      fields: ['valor', 'ph', 'pco2'],
      defaultFormulations: ['bicarb84'],
      states: ['nivel', 'gravidade', 'acidbase']
    },
    'glicose': {
      key: 'glicose',
      name: { pt: 'Glicose', es: 'Glucosa' },
      shortName: { pt: 'Glicose', es: 'Glucosa' },
      unit: 'mg/dL',
      normal: { min: 70, max: 180 },
      refLow: 70, refHigh: 180,
      icon: 'fa-droplet',
      color: '#FDBA74',
      fields: ['valor', 'peso'],
      defaultFormulations: ['sg50', 'sg25', 'sg10', 'sg5'],
      states: ['nivel', 'gravidade', 'sintomas']
    },
    'albumina': {
      key: 'albumina',
      name: { pt: 'Albumina', es: 'Albúmina' },
      shortName: 'Alb',
      unit: 'g/dL',
      normal: { min: 3.5, max: 5.0 },
      refLow: 3.5, refHigh: 5.0,
      icon: 'fa-vial',
      color: '#C4B5FD',
      fields: ['valor', 'ca'],
      defaultFormulations: ['alb5', 'alb20'],
      states: ['nivel', 'gravidade']
    },
    'ag': {
      key: 'ag',
      name: { pt: 'Ânion Gap', es: 'Anión Gap' },
      shortName: 'AG',
      unit: 'mEq/L',
      normal: { min: 8, max: 12 },
      refLow: 8, refHigh: 12,
      icon: 'fa-calculator',
      color: '#FCA5A5',
      fields: ['na', 'cl', 'hco3', 'albumina'],
      defaultFormulations: [],
      states: ['acidbase']
    },
    'osm': {
      key: 'osm',
      name: { pt: 'Osmolaridade', es: 'Osmolaridad' },
      shortName: 'Osm',
      unit: 'mOsm/L',
      normal: { min: 275, max: 295 },
      refLow: 275, refHigh: 295,
      icon: 'fa-gauge',
      color: '#A5F3FC',
      fields: ['na', 'glicose', 'ureia'],
      defaultFormulations: [],
      states: ['nivel']
    }
  };

  /* ================================================================
     SEÇÃO 3 — ESTADO DA CALCULADORA
  ================================================================ */
  var _state = {
    step: 1,
    electrolyte: null,      /* key do eletrólito */
    /* Campos numéricos */
    valor: null,
    peso: null,
    sexo: 'M',             /* M / F / idoso / crianca */
    clcr: null,
    glicose: null,
    albumina: null,
    na: null,
    cl: null,
    hco3: null,
    ureia: null,
    ca: null,
    /* Estado clínico */
    nivel: null,            /* baixo / normal / alto */
    gravidade: null,        /* leve / moderado / grave */
    sintomas: null,         /* sintomat / assintomat */
    ecg: null,              /* ecg_alt / ecg_ok */
    clcrFiltro: null,       /* lt30 / gte30 */
    acesso: 'periph',       /* periph / central */
    acidbase: null,
    /* Protocolo */
    protocolo: null,        /* rapida / correcao / personalizado */
    /* Presets */
    dose: null,
    formulacao: null,
    volume: null,
    tempo: null,            /* em minutos */
    equipo: 'bomba',        /* bomba / macro / micro */
    /* Idioma */
    lang: 'pt'
  };

  /* ================================================================
     SEÇÃO 4 — FÓRMULAS CLÍNICAS
  ================================================================ */
  var Formulas = {

    /* ── ACT: Água Corporal Total ── */
    calcACT: function (peso, sexo) {
      if (!peso || peso <= 0) return null;
      var fator = sexo === 'F' ? 0.5 : (sexo === 'idoso' ? 0.45 : (sexo === 'crianca' ? 0.6 : 0.6));
      return peso * fator;
    },

    /* ── Sódio corrigido por glicose ── */
    calcNaCorrigido: function (na, glicose) {
      if (na == null || glicose == null) return null;
      var fator = glicose > 400 ? 2.4 : 1.6;
      return na + fator * ((glicose - 100) / 100);
    },

    /* ── Déficit de sódio ── */
    calcDeficitNa: function (peso, sexo, naAtual, naAlvo) {
      var act = this.calcACT(peso, sexo);
      if (!act || naAtual == null || naAlvo == null) return null;
      return act * (naAlvo - naAtual);
    },

    /* ── Déficit de água livre ── */
    calcDeficitAguaLivre: function (peso, sexo, naAtual, naAlvo) {
      var act = this.calcACT(peso, sexo);
      if (!act || naAtual == null || naAlvo == null || naAlvo === 0) return null;
      return act * ((naAtual / naAlvo) - 1);
    },

    /* ── Déficit estimado de potássio ── */
    calcDeficitK: function (kAtual) {
      if (kAtual == null) return null;
      if (kAtual >= 3.5) return 0;
      return ((3.5 - kAtual) / 0.3) * 100;
    },

    /* ── Cálcio corrigido por albumina ── */
    calcCaCorrigido: function (ca, alb) {
      if (ca == null || alb == null) return null;
      return ca + 0.8 * (4.0 - alb);
    },

    /* ── Osmolaridade calculada ── */
    calcOsmolaridade: function (na, glicose, ureia) {
      if (na == null) return null;
      var glicParte = (glicose != null) ? (glicose / 18) : 0;
      var ureiaParte = 0;
      if (ureia != null) ureiaParte = ureia / 2.8;
      return 2 * na + glicParte + ureiaParte;
    },

    /* ── Ânion Gap ── */
    calcAG: function (na, cl, hco3) {
      if (na == null || cl == null || hco3 == null) return null;
      return na - (cl + hco3);
    },

    /* ── Ânion Gap corrigido por albumina ── */
    calcAGCorrigido: function (ag, alb) {
      if (ag == null || alb == null) return null;
      return ag + 2.5 * (4.0 - alb);
    },

    /* ── Taxa de infusão ── */
    calcInfusao: function (volumeMl, tempoMin, equipo) {
      var tempoH = tempoMin / 60;
      var mlPorH = (tempoH > 0) ? (volumeMl / tempoH) : null;
      var gotasPorMin = null, microgotasPorMin = null;
      if (equipo === 'macro' || equipo === 'bomba') {
        gotasPorMin = (tempoMin > 0) ? (volumeMl * 20 / tempoMin) : null;
        /* Atalho: volume / (horas × 3) */
      }
      if (equipo === 'micro' || equipo === 'bomba') {
        microgotasPorMin = (tempoMin > 0) ? (volumeMl * 60 / tempoMin) : null;
        /* Atalho: volume / horas */
      }
      return {
        mlPorH: mlPorH ? Math.round(mlPorH * 10) / 10 : null,
        gotasPorMin: gotasPorMin ? Math.round(gotasPorMin * 10) / 10 : null,
        microgotasPorMin: microgotasPorMin ? Math.round(microgotasPorMin * 10) / 10 : null
      };
    },

    /* ── Volume a aspirar de KCl 19,1% para dose em mEq ── */
    calcVolKCl191: function (meq) {
      return meq != null ? meq / 2.5 : null;
    },

    /* ── Volume a aspirar de KCl 10% para dose em mEq ── */
    calcVolKCl10: function (meq) {
      return meq != null ? meq / 1.33 : null;
    },

    /* ── mL de MgSO4 50% para dose em gramas ── */
    calcVolMgSO4: function (g) {
      return g != null ? g / 0.5 : null;  /* 500 mg/mL = 0,5 g/mL */
    },

    /* ── Concentração de K em solução ── */
    calcConcK: function (meq, volumeMl) {
      if (!meq || !volumeMl) return null;
      return (meq / volumeMl) * 1000;  /* mEq/L */
    },

    /* ── Volume de NaCl 3% para bolus ── */
    calcVolNaCl3Bolus: function (meqAlvo, meqAtual, volumeMl) {
      /* Retorna mL de NaCl 3% necessários para elevar Na em delta */
      /* NaCl 3% = 513 mEq/L = 0,513 mEq/mL */
      if (meqAlvo == null) return null;
      return meqAlvo / 0.513;
    }
  };

  /* ================================================================
     SEÇÃO 5 — TEXTOS BILÍNGUES
  ================================================================ */
  var I18N = {
    pt: {
      step1_title: 'Eletrólito',
      step2_title: 'Estado Clínico',
      step3_title: 'Protocolo',
      step4_title: 'Parâmetros',
      lbl_nivel: 'Nível',
      lbl_baixo: 'Baixo', lbl_normal: 'Normal', lbl_alto: 'Alto',
      lbl_gravidade: 'Gravidade',
      lbl_leve: 'Leve', lbl_moderado: 'Moderado', lbl_grave: 'Grave',
      lbl_sintomas: 'Sintomas',
      lbl_sintomat: 'Sintomático', lbl_assintomat: 'Assintomático',
      lbl_ecg: 'ECG',
      lbl_ecg_alt: 'ECG Alterado', lbl_ecg_ok: 'ECG s/ Alteração',
      lbl_clcr: 'ClCr',
      lbl_lt30: 'ClCr <30', lbl_gte30: 'ClCr ≥30',
      lbl_acesso: 'Acesso',
      lbl_periph: 'Periférico', lbl_central: 'Central',
      lbl_valor: 'Valor Sérico', lbl_peso: 'Peso (kg)',
      lbl_glicose: 'Glicose (mg/dL)', lbl_albumina: 'Albumina (g/dL)',
      lbl_na: 'Na⁺ (mEq/L)', lbl_cl: 'Cl⁻ (mEq/L)',
      lbl_hco3: 'HCO₃⁻ (mEq/L)', lbl_ureia: 'Ureia (mg/dL)',
      lbl_ca_input: 'Ca²⁺ (mg/dL)',
      lbl_sexo: 'Sexo/Idade',
      opt_m: 'Masculino', opt_f: 'Feminino', opt_idoso: 'Idoso', opt_crianca: 'Criança',
      proto_rapida: 'Carga Rápida',
      proto_correcao: 'Infusão / Correção',
      proto_custom: 'Cálculo Personalizado',
      lbl_dose: 'Dose', lbl_formulacao: 'Formulação',
      lbl_volume: 'Volume Final', lbl_tempo: 'Tempo',
      lbl_equipo: 'Equipo',
      eq_bomba: 'Bomba', eq_macro: 'Macrogotas (20 gt/mL)', eq_micro: 'Microgotas (60 gt/mL)',
      lbl_personalizado: 'Personalizado',
      blk_estado: 'ESTADO',
      blk_interpretacao: 'INTERPRETAÇÃO',
      blk_op1: 'OPÇÃO 1 — Carga Rápida',
      blk_op2: 'OPÇÃO 2 — Infusão / Correção',
      blk_op3: 'OPÇÃO 3 — Cálculo Personalizado',
      blk_alertas: 'ALERTAS CRÍTICOS',
      blk_recontrole: 'RECONTROLE',
      lbl_indicacao: 'Indicação',
      lbl_dose_r: 'Dose', lbl_form: 'Formulação',
      lbl_asp: 'Volume a Aspirar', lbl_dilui: 'Diluir em',
      lbl_volfinal: 'Volume Final', lbl_tempo_inf: 'Tempo',
      lbl_mlh: 'Bomba (mL/h)', lbl_gtas: 'Macrogotas (gt/min)', lbl_micro: 'Microgotas (µgt/min)',
      lbl_alerta_acesso: 'Alerta de Acesso',
      lbl_conc: 'Concentração na Solução',
      recontrole_k: '1–2h após infusão (renal estável), 30 min após carga (hipercalemia)',
      recontrole_na: '2h após bolus de NaCl 3%; 6–12h na correção lenta; meta ≤8–10 mEq/L/24h',
      recontrole_mg: '4–6h após reposição; monitorar reflexos e FR durante infusão',
      recontrole_ca: '1–2h após reposição; repetir ECG se instabilidade',
      recontrole_p: '4–6h após reposição IV; monitorar Ca²⁺ e função renal concomitante',
      recontrole_hco3: 'Gasometria 30–60 min após; meta pH 7,20–7,25 (não normalizar)',
      recontrole_glicose: '15–30 min após administração; meta glicemia ≥70 mg/dL',
      recontrole_ag: 'Reavaliação após tratamento da causa; Delta-delta se AG elevado',
      recontrole_osm: 'Correlacionar com osmolaridade medida; gap osmolar >10 investigar',
      recontrole_default: 'Controle laboratorial conforme evolução clínica',
      no_electrolyte: 'Selecione um eletrólito acima para iniciar',
      calcular: 'Calcular',
      limpar: 'Limpar',
      voltar: 'Voltar',
      avancar: 'Avançar',
      titulo_calc: 'Calculadora de Eletrólitos',
      subtitulo_calc: 'Fluxo clínico por botões — sem digitação manual',
      modo_avancado: 'Modo Avançado (campos livres)',
      fechar_avancado: 'Fechar Modo Avançado',
      copy_result: 'Copiar Resultado',
      copied: 'Copiado!',
      normal_range: 'Referência',
      alerta_concentracao: '⚠️ Concentração excede limite periférico recomendado!',
      sugestao_periph: 'Sugestão para periférico',
      /* ── Clínico: Potássio ── */
      hip_k_grave: 'Hipocalemia Grave',
      hip_k_mod: 'Hipocalemia Moderada',
      hip_k_leve: 'Hipocalemia Leve',
      hip_k_sintomat: 'Hipocalemia Sintomática',
      hiper_k: 'Hipercalemia',
      k_estabilizacao: '🚨 Estabilização de Membrana (ECG Alterado)',
      k_redistrib: 'Redistribuição intracelular — insulina + glicose',
      k_eliminacao: 'Eliminação renal/diálise — furosemida ± diálise',
      k_deficit_formula: 'Déficit estimado',
      k_clcr_alerta: 'ClCr <30: reduzir velocidade de infusão; monitorar K⁺ a cada 30–60 min',
      k_central_ok: ' — concentração segura para acesso central',
      k_periph_ok: 'Periférico OK',
      k_vo: 'Reposição oral (KCl líquido ou comprimidos)',
      k_vo_dose: '40–60 mEq/dia',
      k_vo_tempo: 'Via oral',
      k_suspender: '⚠️ Suspender todo suplemento de K⁺ e medicamentos hipercalemiantes',
      k_clcr_dialise: 'ClCr <30: risco aumentado de hipercalemia refratária — considerar diálise precoce',
      k_ecg_emergencia: '🚨 EMERGÊNCIA: ECG alterado / K⁺ grave — estabilização de membrana IMEDIATA',
      k_insulin_glicose: 'Insulina Regular 10 UI + Glicose 25 g (50 mL de SG 50%)',
      k_insulin_monitor: 'Monitorar glicemia 15/15 min por 2h — risco hipoglicemia',
      k_furosemida: 'Furosemida 40–80 mg IV (se diurese preservada)',
      k_dialise: 'Avaliar diálise se K⁺ refratário ou oligúria',
      k_dialise_monitor: 'Monitorar K⁺ e função renal',
      k_bicarb: 'Bicarbonato de sódio: considerar se acidose metabólica concomitante',
      k_salbutamol: 'Salbutamol inalatório: 10–20 mg nebulizado — efeito em 30 min',
      /* ── Clínico: Sódio ── */
      hip_na_grave: '🚨 Hiponatremia',
      hip_na_sintomat: 'Sintomática',
      hip_na_assint: 'assintomática',
      hip_na_bolus: 'Hiponatremia grave/sintomática — elevação IMEDIATA',
      hip_na_lenta: 'Após estabilização — correção lenta (≤8 mEq/L/24h)',
      hip_na_nacl3_acess: '⚠️ NaCl 3% — preferir acesso central. Se periférico: veia calibrosa, máx 100 mL',
      hip_na_nacl3_central: '✅ Central — concentração adequada para este acesso',
      hip_na_urgencia: '🚨 URGÊNCIA: risco de herniação cerebral',
      hip_na_lenta_meta: 'Meta: elevar Na⁺ 1–2 mEq/L/h por 2–3h, depois lento',
      hip_na_mielinolise: '⚠️ Mielinólise pontina central se correção rápida demais — MONITORAR',
      hip_na_assint_op: 'Assintomática — correção lenta',
      hip_na_sf09: 'SF 0,9% EV ou restrição hídrica conforme etiologia',
      hip_na_max: '⚠️ Correção máxima segura: 8–10 mEq/L/24h (alto risco: 6–8 mEq/L/24h)',
      hip_na_mielinolise2: '⚠️ Mielinólise pontina central: risco se correção rápida, especialmente alcoolistas, desnutridos, hipocalemia',
      hiper_na: 'Hipernatremia',
      hiper_na_agua: 'Reposição de água livre — SG 5% ou água oral',
      hiper_na_sg5: 'SG 5% ou água VO',
      hiper_na_tempo: '24–48h (correção lenta: ≤10–12 mEq/L/24h)',
      hiper_na_edema: '⚠️ Correção rápida causa edema cerebral — máx 10–12 mEq/L/24h',
      hiper_na_causa: 'Identificar e tratar causa (diabetes insipidus, perdas, restrição de acesso a água)',
      /* ── Clínico: Magnésio ── */
      hip_mg: 'Hipomagnesemia',
      hip_mg_grave_alerta: '🚨 Hipomagnesemia grave — risco de arritmias e convulsões',
      hip_mg_torsades: 'Torsades / Eclâmpsia — dose de ataque',
      hip_mg_torsades2: '⚠️ Monitorar PA, FR, reflexos patelares · Antídoto: gluconato de Ca 10% 1 g IV',
      hip_mg_clcr: '⚠️ ClCr <30: reduzir dose em 50% — acúmulo e risco de toxicidade aumentados',
      hiper_mg: 'Hipermagnesemia',
      hiper_mg_suspender: '⚠️ Suspender toda fonte de magnésio',
      hiper_mg_antidoto: 'Antagoniza efeitos cardíacos do Mg²⁺ — efeito imediato porém temporário',
      hiper_mg_dialise: 'Hemodiálise se grave com insuficiência renal',
      mg_central: 'Central preferencial para concentrações altas',
      mg_periph_ok: 'Periférico com cuidado — diluído OK',
      mg_clcr_dil: '(ClCr <30)',
      /* ── Clínico: Cálcio ── */
      hip_ca: 'Hipocalcemia',
      hip_ca_grave_alerta: '🚨 Hipocalcemia sintomática — estabilização imediata',
      hip_ca_grave_ind: 'Grave / Sintomática / ECG alterado',
      hip_ca_manut: 'Manutenção após estabilização',
      hip_ca_leve: ' — assintomático',
      hip_ca_leve_vo: 'Suplementação VO: carbonato de Ca 1–3 g/dia',
      hip_ca_leve_form: 'Carbonato de Cálcio VO',
      hip_ca_leve_obs: 'Verificar PTH, vitamina D e Mg²⁺ (hipomagnesemia causa hipocalcemia refratária)',
      hip_ca_veia: '⚠️ Veia calibrosa — risco de flebite/necrose. Preferir central se disponível',
      hip_ca_manut_monitor: 'Central ou veia de grosso calibre — monitorar Ca²⁺ a cada 4–6h',
      hiper_ca: 'Hipercalcemia',
      hiper_ca_hidrat: 'Hipercalcemia — hidratação vigorosa',
      hiper_ca_bal: 'Monitorar balanço hídrico e eletrólitos',
      hiper_ca_furo: 'Furosemida apenas após hidratação adequada',
      hiper_ca_bifosf: 'Considerar bifosfonatos, calcitonina, diálise se grave',
      /* ── Clínico: Fósforo ── */
      hip_p: 'Hipofosfatemia',
      hip_p_grave_alerta: '🚨 Hipofosfatemia grave — risco de insuficiência respiratória, hemólise, rhabdomiólise',
      hip_p_grave_ind: 'Grave (<1,0 mg/dL) — reposição IV',
      hip_p_mod: 'Moderado — reposição VO ou IV',
      hip_p_leve: 'Leve — suplementação VO',
      hip_p_leve_dose: 'Fosfato VO 250–500 mg 2–3×/dia',
      hip_p_leve_tempo: 'VO fracionado',
      hip_p_clcr: '⚠️ ClCr <30: monitorar hiperfosfatemia rebote — reduzir dose IV',
      hip_p_ca: 'Monitorar Ca²⁺ durante reposição de P — risco de hipocalcemia aguda',
      hip_p_monitor: '⚠️ Monitorar cálcio, fósforo e função renal durante reposição IV',
      hiper_p: 'Hiperfosfatemia',
      hiper_p_dieta: 'Restringir fósforo na dieta',
      hiper_p_quelantes: 'Quelantes de fósforo (carbonato de Ca, sevelamer) conforme protocolo',
      p_clcr_dialise: 'ClCr <30: avaliar diálise',
      p_causa: 'Tratar causa base',
      p_clcr_red: '⚠️ Reduzir dose e aumentar intervalo (ClCr <30)',
      /* ── Clínico: Bicarbonato ── */
      acid_met: 'Acidose Metabólica',
      acid_grave_alerta: '🚨 Acidose grave — indicação selecionada de NaHCO₃ (pH <7,1 ou HCO₃⁻ <8–10)',
      acid_grave_ind: 'Acidose grave (pH <7,1) selecionada',
      acid_mod: 'Acidose moderada — tratar causa base',
      acid_mod_cond: 'Tratar causa + avaliar necessidade de NaHCO₃',
      acid_mod_form: 'NaHCO₃ 8,4% se necessário',
      acid_bicarb_dilui: 'SG 5% 250–500 mL (NUNCA SF — incompatibilidade)',
      acid_bicarb_alert: '⚠️ Não misturar com Ca²⁺ — precipitação · Monitorar pH e K⁺ (alcalose desloca K para intracelular)',
      alc_met: 'Alcalose Metabólica',
      alc_causa: 'Tratar causa: vômitos, diuréticos, hipocalemia, hipovolemia',
      alc_repor: 'Repor Cl⁻ (SF 0,9%), K⁺ se hipocalemia associada',
      /* ── Clínico: Glicose ── */
      hipoglicemia: 'Hipoglicemia',
      hipoglicemia_alerta: '🚨 Hipoglicemia grave — corrigir imediatamente',
      hipoglicemia_grave: 'Grave / Sintomática',
      hipoglicemia_sg50: '⚠️ SG 50%: apenas em veia calibrosa — alto risco de flebite periférica',
      hipoglicemia_manut: 'Manutenção após bolo',
      hipoglicemia_equiv: 'Equivalências: 25 g = 50 mL SG50% = 100 mL SG25% = 250 mL SG10% = 500 mL SG5%',
      hipoglicemia_periph: 'Periférico — monitorar glicemia 15/15 min após correção',
      hipoglicemia_leve: 'Leve / Assintomático',
      hipoglicemia_regra: 'Regra 15-15: 15 g VO, checar em 15 min',
      hiperglicemia: 'Hiperglicemia',
      hiperglicemia_insulina: 'Protocolo insulinização — verificar protocolo institucional',
      hiperglicemia_monitor: 'Monitorar glicemia horária',
      hiperglicemia_na: 'Verificar Na⁺ corrigido — hiperglicemia causa pseudo-hiponatremia',
      glicose_ind_grave: 'Grave / Sintomática',
      glicose_ind_manut: 'Manutenção após bolo',
      glicose_ind_leve: 'Leve / Assintomático',
      /* ── Clínico: Albumina ── */
      hip_alb: 'Hipoalbuminemia',
      alb_marcador: 'Albumina como marcador — tratar a causa da hipoalbuminemia',
      alb_ca_formula: 'Ca²⁺ corrigido: Ca medido + 0,8 × (4,0 – albumina)',
      alb_ag_formula: 'AG corrigido: AG + 2,5 × (4,0 – albumina)',
      alb_indicacao: 'Reposição de albumina exige indicação clínica específica',
      alb_dose_desc: 'Albumina 20%: 25–50 g conforme protocolo (PBE, síndrome hepatorrenal, paracentese volumosa)',
      alb_acesso: 'Central ou veia calibrosa periférica',
      /* ── Clínico: AG ── */
      ag_elevado: '⚠️ AG Elevado',
      ag_normal: 'AG Normal',
      ag_baixo: 'AG Baixo',
      ag_mudpiles: 'AG elevado: pensar MUDPILES — Metanol, Uremia, DKA, Propileno, Isoniazida, Lactato, Etanol, Salicilatos',
      ag_corr_elevado: 'AG corrigido pela albumina: %s — AG verdadeiramente elevado',
      ag_delta_menor1: 'Delta/Delta <1: possível acidose metabólica mista (normal + AG)',
      ag_delta_maior2: 'Delta/Delta >2: possível alcalose metabólica ou acidose respiratória crônica sobreposta',
      ag_delta_ok: 'Delta/Delta 1–2: provável acidose com AG pura',
      ag_baixo_causas: 'AG baixo: hipoalbuminemia, paraproteinemia, hipercalcemia/hipermagnesemia, intoxicação por Lítio',
      ag_form_indicacao: 'Interpretação do AG',
      ag_form: 'Fórmula',
      ag_correlacionar: 'Correlacionar com osmolaridade medida para calcular Gap osmolar',
      ag_sem_dados: 'Informe Na⁺, Cl⁻ e HCO₃⁻ para calcular AG',
      /* ── Clínico: Osmolaridade ── */
      osm_hipo: 'Hipoosmolaridade',
      osm_hiper: 'Hiperosmolaridade',
      osm_normal: 'Osmolaridade Normal',
      osm_hipo_causa: 'Provável hiponatremia hipotônica — investigar causa',
      osm_hiper_grave: '🚨 Hiperosmolaridade grave (>320) — risco de AVC/coma',
      osm_hiper_causas: 'Causas: hipernatremia, hiperglicemia, uremia, álcool',
      osm_gap: 'Gap osmolar >10: sugere substância osmolar não mensurável (álcool, metanol, etilenoglicol)',
      osm_form_indicacao: 'Osmolaridade calculada',
      osm_correlacionar: 'Correlacionar com osmolaridade medida para calcular Gap osmolar',
      osm_sem_dados: 'Informe Na⁺ para calcular Osmolaridade',
      /* ── Clínico: Cloro ── */
      hip_cl: 'Hipocloremia',
      hip_cl_causa: 'Hipocloremia: associada a alcalose metabólica, vômitos, uso de diuréticos',
      hip_cl_repor: 'Repor com SF 0,9% (154 mEq/L Cl⁻) ou NaCl 3% se grave',
      hip_cl_ind: 'Alcalose hipoclorêmica — repor Cl⁻',
      hip_cl_dose: 'SF 0,9% 500–1000 mL + KCl se hipocalemia associada',
      hiper_cl: 'Hipercloremia',
      hiper_cl_causa: 'Hipercloremia: causa acidose metabólica hiperclorêmica (AG normal)',
      hiper_cl_bicarb: 'Avaliar fluido EV administrado (SF em excesso), HCO₃⁻ como complemento se pH <7,2',
      hiper_cl_ind: 'Acidose hiperclorêmica — avaliar bicarbonato',
      hiper_cl_cond: 'Tratar causa + avaliar NaHCO₃ se pH <7,2',
      /* ── Genérico ── */
      acesso_periph_ok: 'Periférico — OK',
      acesso_central_ok: 'Central — OK',
      vo_fracionado: 'VO fracionado',
      monitorar_clcr: 'Monitorar K⁺ e função renal',
      conforme_protocolo: 'Conforme protocolo',
      nao_documentado: '—'
    },
    es: {
      step1_title: 'Electrolito',
      step2_title: 'Estado Clínico',
      step3_title: 'Protocolo',
      step4_title: 'Parámetros',
      lbl_nivel: 'Nivel',
      lbl_baixo: 'Bajo', lbl_normal: 'Normal', lbl_alto: 'Alto',
      lbl_gravidade: 'Gravedad',
      lbl_leve: 'Leve', lbl_moderado: 'Moderado', lbl_grave: 'Grave',
      lbl_sintomas: 'Síntomas',
      lbl_sintomat: 'Sintomático', lbl_assintomat: 'Asintomático',
      lbl_ecg: 'ECG',
      lbl_ecg_alt: 'ECG Alterado', lbl_ecg_ok: 'ECG sin Alteración',
      lbl_clcr: 'ClCr',
      lbl_lt30: 'ClCr <30', lbl_gte30: 'ClCr ≥30',
      lbl_acesso: 'Acceso',
      lbl_periph: 'Periférico', lbl_central: 'Central',
      lbl_valor: 'Valor Sérico', lbl_peso: 'Peso (kg)',
      lbl_glicose: 'Glucosa (mg/dL)', lbl_albumina: 'Albúmina (g/dL)',
      lbl_na: 'Na⁺ (mEq/L)', lbl_cl: 'Cl⁻ (mEq/L)',
      lbl_hco3: 'HCO₃⁻ (mEq/L)', lbl_ureia: 'Urea (mg/dL)',
      lbl_ca_input: 'Ca²⁺ (mg/dL)',
      lbl_sexo: 'Sexo/Edad',
      opt_m: 'Masculino', opt_f: 'Femenino', opt_idoso: 'Anciano', opt_crianca: 'Niño',
      proto_rapida: 'Carga Rápida',
      proto_correcao: 'Infusión / Corrección',
      proto_custom: 'Cálculo Personalizado',
      lbl_dose: 'Dosis', lbl_formulacao: 'Formulación',
      lbl_volume: 'Volumen Final', lbl_tempo: 'Tiempo',
      lbl_equipo: 'Equipo',
      eq_bomba: 'Bomba', eq_macro: 'Macrogotas (20 gt/mL)', eq_micro: 'Microgotas (60 gt/mL)',
      lbl_personalizado: 'Personalizado',
      blk_estado: 'ESTADO',
      blk_interpretacao: 'INTERPRETACIÓN',
      blk_op1: 'OPCIÓN 1 — Carga Rápida',
      blk_op2: 'OPCIÓN 2 — Infusión / Corrección',
      blk_op3: 'OPCIÓN 3 — Cálculo Personalizado',
      blk_alertas: 'ALERTAS CRÍTICOS',
      blk_recontrole: 'RECONTROL',
      lbl_indicacao: 'Indicación',
      lbl_dose_r: 'Dosis', lbl_form: 'Formulación',
      lbl_asp: 'Volumen a Aspirar', lbl_dilui: 'Diluir en',
      lbl_volfinal: 'Volumen Final', lbl_tempo_inf: 'Tiempo',
      lbl_mlh: 'Bomba (mL/h)', lbl_gtas: 'Macrogotas (gt/min)', lbl_micro: 'Microgotas (µgt/min)',
      lbl_alerta_acesso: 'Alerta de Acceso',
      lbl_conc: 'Concentración en Solución',
      recontrole_k: '1–2h tras infusión (renal estable), 30 min tras carga (hiperpotasemia)',
      recontrole_na: '2h tras bolo de NaCl 3%; 6–12h en corrección lenta; meta ≤8–10 mEq/L/24h',
      recontrole_mg: '4–6h tras reposición; monitorear reflejos y FR durante infusión',
      recontrole_ca: '1–2h tras reposición; repetir ECG si inestabilidad',
      recontrole_p: '4–6h tras reposición IV; monitorear Ca²⁺ y función renal concomitante',
      recontrole_hco3: 'Gasometría 30–60 min tras; meta pH 7,20–7,25 (no normalizar)',
      recontrole_glicose: '15–30 min tras administración; meta glucemia ≥70 mg/dL',
      recontrole_ag: 'Reevaluación tras tratamiento de la causa; Delta-delta si AG elevado',
      recontrole_osm: 'Correlacionar con osmolaridad medida; gap osmolar >10 investigar',
      recontrole_default: 'Control laboratorial según evolución clínica',
      no_electrolyte: 'Seleccione un electrolito arriba para comenzar',
      calcular: 'Calcular',
      limpar: 'Limpiar',
      voltar: 'Volver',
      avancar: 'Avanzar',
      titulo_calc: 'Calculadora de Electrolitos',
      subtitulo_calc: 'Flujo clínico por botones — sin escritura manual',
      modo_avancado: 'Modo Avanzado (campos libres)',
      fechar_avancado: 'Cerrar Modo Avanzado',
      copy_result: 'Copiar Resultado',
      copied: '¡Copiado!',
      normal_range: 'Referencia',
      alerta_concentracao: '⚠️ ¡Concentración excede límite periférico recomendado!',
      sugestao_periph: 'Sugerencia para periférico',
      /* ── Clínico: Potássio ── */
      hip_k_grave: 'Hipopotasemia Grave',
      hip_k_mod: 'Hipopotasemia Moderada',
      hip_k_leve: 'Hipopotasemia Leve',
      hip_k_sintomat: 'Hipopotasemia Sintomática',
      hiper_k: 'Hiperpotasemia',
      k_estabilizacao: '🚨 Estabilización de Membrana (ECG Alterado)',
      k_redistrib: 'Redistribución intracelular — insulina + glucosa',
      k_eliminacao: 'Eliminación renal/diálisis — furosemida ± diálisis',
      k_deficit_formula: 'Déficit estimado',
      k_clcr_alerta: 'ClCr <30: reducir velocidad de infusión; monitorear K⁺ cada 30–60 min',
      k_central_ok: ' — concentración segura para acceso central',
      k_periph_ok: 'Periférico OK',
      k_vo: 'Reposición oral (KCl líquido o comprimidos)',
      k_vo_dose: '40–60 mEq/día',
      k_vo_tempo: 'Vía oral',
      k_suspender: '⚠️ Suspender todo suplemento de K⁺ y medicamentos hiperpotasemiantes',
      k_clcr_dialise: 'ClCr <30: riesgo aumentado de hiperpotasemia refractaria — considerar diálisis precoz',
      k_ecg_emergencia: '🚨 EMERGENCIA: ECG alterado / K⁺ grave — estabilización de membrana INMEDIATA',
      k_insulin_glicose: 'Insulina Regular 10 UI + Glucosa 25 g (50 mL de SG 50%)',
      k_insulin_monitor: 'Monitorear glucemia 15/15 min por 2h — riesgo hipoglucemia',
      k_furosemida: 'Furosemida 40–80 mg IV (si diuresis preservada)',
      k_dialise: 'Evaluar diálisis si K⁺ refractario u oliguria',
      k_dialise_monitor: 'Monitorear K⁺ y función renal',
      k_bicarb: 'Bicarbonato de sodio: considerar si acidosis metabólica concomitante',
      k_salbutamol: 'Salbutamol inhalado: 10–20 mg nebulizado — efecto en 30 min',
      /* ── Clínico: Sódio ── */
      hip_na_grave: '🚨 Hiponatremia',
      hip_na_sintomat: 'Sintomática',
      hip_na_assint: 'asintomática',
      hip_na_bolus: 'Hiponatremia grave/sintomática — elevación INMEDIATA',
      hip_na_lenta: 'Tras estabilización — corrección lenta (≤8 mEq/L/24h)',
      hip_na_nacl3_acess: '⚠️ NaCl 3% — preferir acceso central. Si periférico: vena calibrosa, máx 100 mL',
      hip_na_nacl3_central: '✅ Central — concentración adecuada para este acceso',
      hip_na_urgencia: '🚨 URGENCIA: riesgo de herniación cerebral',
      hip_na_lenta_meta: 'Meta: elevar Na⁺ 1–2 mEq/L/h por 2–3h, luego lento',
      hip_na_mielinolise: '⚠️ Mielinólisis pontina central si corrección demasiado rápida — MONITORAR',
      hip_na_assint_op: 'Asintomática — corrección lenta',
      hip_na_sf09: 'SF 0,9% IV o restricción hídrica según etiología',
      hip_na_max: '⚠️ Corrección máxima segura: 8–10 mEq/L/24h (alto riesgo: 6–8 mEq/L/24h)',
      hip_na_mielinolise2: '⚠️ Mielinólisis pontina central: riesgo si corrección rápida, especialmente alcohólicos, desnutridos, hipopotasemia',
      hiper_na: 'Hipernatremia',
      hiper_na_agua: 'Reposición de agua libre — SG 5% o agua oral',
      hiper_na_sg5: 'SG 5% o agua VO',
      hiper_na_tempo: '24–48h (corrección lenta: ≤10–12 mEq/L/24h)',
      hiper_na_edema: '⚠️ Corrección rápida causa edema cerebral — máx 10–12 mEq/L/24h',
      hiper_na_causa: 'Identificar y tratar causa (diabetes insípida, pérdidas, restricción de acceso al agua)',
      /* ── Clínico: Magnésio ── */
      hip_mg: 'Hipomagnesemia',
      hip_mg_grave_alerta: '🚨 Hipomagnesemia grave — riesgo de arritmias y convulsiones',
      hip_mg_torsades: 'Torsades / Eclampsia — dosis de ataque',
      hip_mg_torsades2: '⚠️ Monitorear PA, FR, reflejos patelares · Antídoto: gluconato de Ca 10% 1 g IV',
      hip_mg_clcr: '⚠️ ClCr <30: reducir dosis en 50% — acúmulo y riesgo de toxicidad aumentados',
      hiper_mg: 'Hipermagnesemia',
      hiper_mg_suspender: '⚠️ Suspender toda fuente de magnesio',
      hiper_mg_antidoto: 'Antagoniza efectos cardíacos del Mg²⁺ — efecto inmediato pero temporal',
      hiper_mg_dialise: 'Hemodiálisis si grave con insuficiencia renal',
      mg_central: 'Central preferencial para concentraciones altas',
      mg_periph_ok: 'Periférico con cuidado — diluido OK',
      mg_clcr_dil: '(ClCr <30)',
      /* ── Clínico: Cálcio ── */
      hip_ca: 'Hipocalcemia',
      hip_ca_grave_alerta: '🚨 Hipocalcemia sintomática — estabilización inmediata',
      hip_ca_grave_ind: 'Grave / Sintomática / ECG alterado',
      hip_ca_manut: 'Mantenimiento tras estabilización',
      hip_ca_leve: ' — asintomático',
      hip_ca_leve_vo: 'Suplementación VO: carbonato de Ca 1–3 g/día',
      hip_ca_leve_form: 'Carbonato de Calcio VO',
      hip_ca_leve_obs: 'Verificar PTH, vitamina D y Mg²⁺ (hipomagnesemia causa hipocalcemia refractaria)',
      hip_ca_veia: '⚠️ Vena calibrosa — riesgo de flebitis/necrosis. Preferir central si disponible',
      hip_ca_manut_monitor: 'Central o vena de grueso calibre — monitorear Ca²⁺ cada 4–6h',
      hiper_ca: 'Hipercalcemia',
      hiper_ca_hidrat: 'Hipercalcemia — hidratación vigorosa',
      hiper_ca_bal: 'Monitorear balance hídrico y electrolitos',
      hiper_ca_furo: 'Furosemida solo tras hidratación adecuada',
      hiper_ca_bifosf: 'Considerar bifosfonatos, calcitonina, diálisis si grave',
      /* ── Clínico: Fósforo ── */
      hip_p: 'Hipofosfatemia',
      hip_p_grave_alerta: '🚨 Hipofosfatemia grave — riesgo de insuficiencia respiratoria, hemólisis, rabdomiólisis',
      hip_p_grave_ind: 'Grave (<1,0 mg/dL) — reposición IV',
      hip_p_mod: 'Moderado — reposición VO o IV',
      hip_p_leve: 'Leve — suplementación VO',
      hip_p_leve_dose: 'Fosfato VO 250–500 mg 2–3×/día',
      hip_p_leve_tempo: 'VO fraccionado',
      hip_p_clcr: '⚠️ ClCr <30: monitorear hiperfosfatemia rebote — reducir dosis IV',
      hip_p_ca: 'Monitorear Ca²⁺ durante reposición de P — riesgo de hipocalcemia aguda',
      hip_p_monitor: '⚠️ Monitorear calcio, fósforo y función renal durante reposición IV',
      hiper_p: 'Hiperfosfatemia',
      hiper_p_dieta: 'Restringir fósforo en la dieta',
      hiper_p_quelantes: 'Quelantes de fósforo (carbonato de Ca, sevelamer) según protocolo',
      p_clcr_dialise: 'ClCr <30: evaluar diálisis',
      p_causa: 'Tratar causa base',
      p_clcr_red: '⚠️ Reducir dosis y aumentar intervalo (ClCr <30)',
      /* ── Clínico: Bicarbonato ── */
      acid_met: 'Acidosis Metabólica',
      acid_grave_alerta: '🚨 Acidosis grave — indicación seleccionada de NaHCO₃ (pH <7,1 o HCO₃⁻ <8–10)',
      acid_grave_ind: 'Acidosis grave (pH <7,1) seleccionada',
      acid_mod: 'Acidosis moderada — tratar causa base',
      acid_mod_cond: 'Tratar causa + evaluar necesidad de NaHCO₃',
      acid_mod_form: 'NaHCO₃ 8,4% si necesario',
      acid_bicarb_dilui: 'SG 5% 250–500 mL (NUNCA SF — incompatibilidad)',
      acid_bicarb_alert: '⚠️ No mezclar con Ca²⁺ — precipitación · Monitorear pH y K⁺ (alcalosis desplaza K al intracelular)',
      alc_met: 'Alcalosis Metabólica',
      alc_causa: 'Tratar causa: vómitos, diuréticos, hipopotasemia, hipovolemia',
      alc_repor: 'Reponer Cl⁻ (SF 0,9%), K⁺ si hipopotasemia asociada',
      /* ── Clínico: Glicose ── */
      hipoglicemia: 'Hipoglucemia',
      hipoglicemia_alerta: '🚨 Hipoglucemia grave — corregir inmediatamente',
      hipoglicemia_grave: 'Grave / Sintomática',
      hipoglicemia_sg50: '⚠️ SG 50%: solo en vena calibrosa — alto riesgo de flebitis periférica',
      hipoglicemia_manut: 'Mantenimiento tras bolo',
      hipoglicemia_equiv: 'Equivalencias: 25 g = 50 mL SG50% = 100 mL SG25% = 250 mL SG10% = 500 mL SG5%',
      hipoglicemia_periph: 'Periférico — monitorear glucemia 15/15 min tras corrección',
      hipoglicemia_leve: 'Leve / Asintomático',
      hipoglicemia_regra: 'Regla 15-15: 15 g VO, verificar en 15 min',
      hiperglicemia: 'Hiperglucemia',
      hiperglicemia_insulina: 'Protocolo insulinización — verificar protocolo institucional',
      hiperglicemia_monitor: 'Monitorear glucemia horaria',
      hiperglicemia_na: 'Verificar Na⁺ corregido — hiperglucemia causa pseudo-hiponatremia',
      glicose_ind_grave: 'Grave / Sintomática',
      glicose_ind_manut: 'Mantenimiento tras bolo',
      glicose_ind_leve: 'Leve / Asintomático',
      /* ── Clínico: Albumina ── */
      hip_alb: 'Hipoalbuminemia',
      alb_marcador: 'Albúmina como marcador — tratar la causa de la hipoalbuminemia',
      alb_ca_formula: 'Ca²⁺ corregido: Ca medido + 0,8 × (4,0 – albúmina)',
      alb_ag_formula: 'AG corregido: AG + 2,5 × (4,0 – albúmina)',
      alb_indicacao: 'Reposición de albúmina requiere indicación clínica específica',
      alb_dose_desc: 'Albúmina 20%: 25–50 g según protocolo (PBE, síndrome hepatorrenal, paracentesis)',
      alb_acesso: 'Central o vena calibrosa periférica',
      /* ── Clínico: AG ── */
      ag_elevado: '⚠️ AG Elevado',
      ag_normal: 'AG Normal',
      ag_baixo: 'AG Bajo',
      ag_mudpiles: 'AG elevado: pensar MUDPILES — Metanol, Uremia, DKA, Propilenoglicol, Isoniacida, Lactato, Etanol, Salicilatos',
      ag_corr_elevado: 'AG corregido por albúmina: %s — AG verdaderamente elevado',
      ag_delta_menor1: 'Delta/Delta <1: posible acidosis metabólica mixta (normal + AG)',
      ag_delta_maior2: 'Delta/Delta >2: posible alcalosis metabólica o acidosis respiratoria crónica solapada',
      ag_delta_ok: 'Delta/Delta 1–2: probable acidosis con AG pura',
      ag_baixo_causas: 'AG bajo: hipoalbuminemia, paraproteinemia, hipercalcemia/hipermagnesemia, intoxicación por Litio',
      ag_form_indicacao: 'Interpretación del AG',
      ag_form: 'Fórmula',
      ag_correlacionar: 'Correlacionar con osmolaridad medida para calcular Gap osmolar',
      ag_sem_dados: 'Informe Na⁺, Cl⁻ y HCO₃⁻ para calcular AG',
      /* ── Clínico: Osmolaridade ── */
      osm_hipo: 'Hipoosmolaridad',
      osm_hiper: 'Hiperosmolaridad',
      osm_normal: 'Osmolaridad Normal',
      osm_hipo_causa: 'Probable hiponatremia hipotónica — investigar causa',
      osm_hiper_grave: '🚨 Hiperosmolaridad grave (>320) — riesgo de ACV/coma',
      osm_hiper_causas: 'Causas: hipernatremia, hiperglucemia, uremia, alcohol',
      osm_gap: 'Gap osmolar >10: sugiere sustancia osmolar no mensurable (alcohol, metanol, etilenoglicol)',
      osm_form_indicacao: 'Osmolaridad calculada',
      osm_correlacionar: 'Correlacionar con osmolaridad medida para calcular Gap osmolar',
      osm_sem_dados: 'Informe Na⁺ para calcular Osmolaridad',
      /* ── Clínico: Cloro ── */
      hip_cl: 'Hipocloremia',
      hip_cl_causa: 'Hipocloremia: asociada a alcalosis metabólica, vómitos, uso de diuréticos',
      hip_cl_repor: 'Reponer con SF 0,9% (154 mEq/L Cl⁻) o NaCl 3% si grave',
      hip_cl_ind: 'Alcalosis hipoclorémica — reponer Cl⁻',
      hip_cl_dose: 'SF 0,9% 500–1000 mL + KCl si hipopotasemia asociada',
      hiper_cl: 'Hipercloremia',
      hiper_cl_causa: 'Hipercloremia: causa acidosis metabólica hiperclorémica (AG normal)',
      hiper_cl_bicarb: 'Evaluar fluido IV administrado (SF en exceso), HCO₃⁻ como complemento si pH <7,2',
      hiper_cl_ind: 'Acidosis hiperclorémica — evaluar bicarbonato',
      hiper_cl_cond: 'Tratar causa + evaluar NaHCO₃ si pH <7,2',
      /* ── Genérico ── */
      acesso_periph_ok: 'Periférico — OK',
      acesso_central_ok: 'Central — OK',
      vo_fracionado: 'VO fraccionado',
      monitorar_clcr: 'Monitorear K⁺ y función renal',
      conforme_protocolo: 'Según protocolo',
      nao_documentado: '—'
    }
  };

  /* ================================================================
     SEÇÃO 6 — LÓGICA CLÍNICA POR ELETRÓLITO
  ================================================================ */
  var ClinicalLogic = {

    /* ── POTÁSSIO ── */
    k: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      var isReduced = s.clcrFiltro === 'lt30';

      /* Estado */
      out.estado.valor = v != null ? v + ' mEq/L' : '—';
      out.estado.nivel = s.nivel;
      out.estado.gravidade = s.gravidade;
      out.estado.ecg = s.ecg;
      out.estado.acesso = s.acesso;
      out.estado.clcr = s.clcrFiltro;

      /* Recontrole */
      out.recontrole = t.recontrole_k;

      /* Hipocalemia */
      if (s.nivel === 'baixo') {
        var defK = Formulas.calcDeficitK(v);
        var defStr = defK != null ? Math.round(defK) + ' ' + t.k_deficit_formula : '—';

        if (s.gravidade === 'grave' || (v != null && v < 2.5)) {
          out.interpretacao = t.lbl_grave + (v ? ' — K⁺ ' + v + ' mEq/L' : '') +
            (defK ? ' · ' + t.lbl_dose_r + ' estimada: ' + Math.round(defK) + ' mEq' : '');

          /* Opção 1: carga rápida central */
          var dose1 = Math.min(40, defK ? Math.ceil(defK / 40) * 40 : 40);
          var vol1KCl = Formulas.calcVolKCl191(dose1);
          var inf1 = Formulas.calcInfusao(100, 60, 'bomba');
          out.op1 = {
            indicacao: t.lbl_grave + ' · ' + (s.ecg === 'ecg_alt' ? t.lbl_ecg_alt : '') +
              (isReduced ? ' · ' + t.lbl_lt30 : ''),
            dose: dose1 + ' mEq',
            form: 'KCl 19,1%',
            asp: Math.round(vol1KCl * 10) / 10 + ' mL de KCl 19,1%',
            dilui: 'SF 0,9% 100 mL',
            volfinal: '100 mL (concentração: ' + Math.round(Formulas.calcConcK(dose1, 100)) + ' mEq/L)',
            tempo: '60 min',
            mlh: inf1.mlH || 100,
            gtas: inf1.gotasPorMin || 33,
            micro: inf1.microgotasPorMin || 100,
            alerta_acesso: s.acesso === 'periph'
              ? '⚠️ ' + t.alerta_concentracao + ' (' + Math.round(Formulas.calcConcK(dose1, 100)) + ' mEq/L > 50 mEq/L). ' + t.lbl_central + ' recomendado.'
              : t.lbl_central + t.k_central_ok
          };
          if (isReduced) out.alertas.push(t.k_clcr_alerta);

        } else if (s.gravidade === 'moderado' || (v != null && v >= 2.5 && v < 3.0)) {
          out.interpretacao = t.lbl_moderado + ' — K⁺ ' + (v || '?') + ' mEq/L · ' + defStr;
          var dose2 = 40;
          var vol2KCl = Formulas.calcVolKCl191(dose2);
          var inf2 = Formulas.calcInfusao(250, 120, 'bomba');
          out.op1 = {
            indicacao: t.lbl_moderado,
            dose: dose2 + ' mEq',
            form: 'KCl 19,1%',
            asp: Math.round(vol2KCl * 10) / 10 + ' mL de KCl 19,1%',
            dilui: 'SF 0,9% 250 mL',
            volfinal: '250 mL',
            conc: Math.round(Formulas.calcConcK(dose2, 250)) + ' mEq/L',
            tempo: '2h',
            mlh: Math.round(250/2),
            gtas: Math.round(250 * 20 / 120),
            micro: Math.round(250 * 60 / 120),
            alerta_acesso: s.acesso === 'central'
              ? t.lbl_central + ' — OK'
              : Math.round(Formulas.calcConcK(dose2, 250)) + ' mEq/L — ' + (Formulas.calcConcK(dose2, 250) <= 50 ? t.k_periph_ok : '⚠️ ' + t.alerta_concentracao)
          };
          /* Opção 2: periférico diluído */
          var dose2b = 40;
          var inf2b = Formulas.calcInfusao(500, 240, 'bomba');
          out.op2 = {
            indicacao: t.lbl_periph + ' · ' + t.lbl_moderado,
            dose: dose2b + ' mEq',
            form: 'KCl 19,1%',
            asp: Math.round(Formulas.calcVolKCl191(dose2b) * 10) / 10 + ' mL',
            dilui: 'SF 0,9% 500 mL',
            volfinal: '500 mL',
            conc: Math.round(Formulas.calcConcK(dose2b, 500)) + ' mEq/L',
            tempo: '4h',
            mlh: Math.round(500/4),
            gtas: Math.round(500 * 20 / 240),
            micro: Math.round(500 * 60 / 240),
            alerta_acesso: Formulas.calcConcK(dose2b, 500) <= 50
              ? '✅ ' + t.k_periph_ok + ' (' + Math.round(Formulas.calcConcK(dose2b, 500)) + ' mEq/L ≤ 50 mEq/L)'
              : '⚠️ ' + t.alerta_concentracao
          };

        } else {
          out.interpretacao = t.lbl_leve + ' — K⁺ ' + (v || '?') + ' mEq/L';
          out.op1 = {
            indicacao: t.lbl_leve + ' · ' + t.lbl_periph,
            dose: '20 mEq',
            form: 'KCl 19,1%',
            asp: Math.round(Formulas.calcVolKCl191(20) * 10) / 10 + ' mL de KCl 19,1%',
            dilui: 'SF 0,9% 500 mL',
            volfinal: '500 mL',
            conc: Math.round(Formulas.calcConcK(20, 500)) + ' mEq/L',
            tempo: '4h',
            mlh: Math.round(500/4),
            gtas: Math.round(500 * 20 / 240),
            micro: Math.round(500 * 60 / 240),
            alerta_acesso: '✅ ' + t.k_periph_ok
          };
          out.op2 = {
            indicacao: t.lbl_leve + ' — ' + t.k_vo_tempo,
            dose: t.k_vo_dose,
            form: t.k_vo,
            asp: '—', dilui: '—', volfinal: '—',
            tempo: 'Via oral', mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: '—'
          };
        }
        if (defK) out.alertas.push(t.k_deficit_formula + ': ' + Math.round(defK) + ' mEq (fórmula: [(3,5−K)/0,3]×100)');

      /* Hipercalemia */
      } else if (s.nivel === 'alto') {
        out.interpretacao = (s.gravidade === 'grave' ? t.lbl_grave : (s.gravidade === 'moderado' ? t.lbl_moderado : t.lbl_leve)) +
          ' — K⁺ ' + (v || '?') + ' mEq/L';

        if (s.ecg === 'ecg_alt' || s.gravidade === 'grave') {
          out.alertas.push(t.k_ecg_emergencia);
          out.op1 = {
            indicacao: t.k_estabilizacao,
            dose: '1–2 g (10–20 mL de gluconato de Ca 10%)',
            form: 'Gluconato de Cálcio 10%',
            asp: '10–20 mL',
            dilui: 'Direto ou diluir em SF/SG 50 mL',
            volfinal: '50–100 mL',
            tempo: '2–5 min (monitorização contínua)',
            mlh: '—',
            gtas: '—',
            micro: '—',
            alerta_acesso: '⚠️ Acesso calibroso — risco de necrose por extravasamento'
          };
          out.op2 = {
            indicacao: t.k_redistrib,
            dose: t.k_insulin_glicose,
            form: 'Insulina Regular + SG 50%',
            asp: '50 mL de SG 50% + 10 UI de insulina',
            dilui: '—',
            volfinal: '50 mL',
            tempo: 'EV em 5–15 min',
            mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.k_insulin_monitor
          };
          out.op3 = {
            indicacao: t.k_eliminacao,
            dose: t.k_furosemida,
            form: 'Furosemida',
            asp: '—', dilui: '—', volfinal: '—',
            tempo: t.conforme_protocolo, mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.k_dialise
          };
          out.alertas.push(t.k_bicarb);
          out.alertas.push(t.k_salbutamol);
        } else {
          out.op1 = {
            indicacao: t.lbl_moderado + ' · sem ECG alterado',
            dose: 'Furosemida 40 mg IV + restrição dietética',
            form: 'Furosemida',
            asp: '—', dilui: '—', volfinal: '—',
            tempo: t.conforme_protocolo, mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.k_dialise_monitor
          };
        }
        out.alertas.push(t.k_suspender);
        if (isReduced) out.alertas.push(t.k_clcr_dialise);

      } else {
        out.interpretacao = t.lbl_normal + ' — K⁺ ' + (v || '?') + ' mEq/L';
      }
      return out;
    },

    /* ── SÓDIO ── */
    na: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_na;
      out.estado.valor = v != null ? v + ' mEq/L' : '—';
      out.estado.nivel = s.nivel;
      out.estado.gravidade = s.gravidade;
      out.estado.acesso = s.acesso;

      /* Sódio corrigido */
      var naCorr = s.glicose != null ? Formulas.calcNaCorrigido(v, s.glicose) : null;
      if (naCorr) out.estado.naCorrigido = Math.round(naCorr * 10) / 10 + ' mEq/L';

      /* Déficits */
      var act = Formulas.calcACT(s.peso, s.sexo);
      if (act) {
        var defNa = Formulas.calcDeficitNa(s.peso, s.sexo, v, 140);
        var defAgua = Formulas.calcDeficitAguaLivre(s.peso, s.sexo, v, 140);
        out.estado.act = Math.round(act * 10) / 10 + ' L';
        if (defNa != null) out.estado.deficitNa = Math.round(defNa) + ' mEq';
        if (defAgua != null) out.estado.deficitAgua = Math.round(Math.abs(defAgua) * 10) / 10 + ' L';
      }

      /* Hiponatremia */
      if (s.nivel === 'baixo') {
        if (s.gravidade === 'grave' || s.sintomas === 'sintomat' || (v != null && v < 125)) {
          out.interpretacao = t.hip_na_grave + ' ' + (s.sintomas === 'sintomat' ? t.hip_na_sintomat : t.lbl_grave) +
            ' — Na⁺ ' + (v || '?') + ' mEq/L';
          out.alertas.push(t.hip_na_urgencia);
          out.op1 = {
            indicacao: t.hip_na_bolus,
            dose: 'NaCl 3% 100–150 mL',
            form: 'NaCl 3%',
            asp: '—',
            dilui: 'Pronto para infusão (bolsa 100 mL)',
            volfinal: '100 mL',
            tempo: '10–20 min (pode repetir 1–2×)',
            mlh: 300,
            gtas: '—',
            micro: '—',
            alerta_acesso: s.acesso === 'periph'
              ? t.hip_na_nacl3_acess
              : t.hip_na_nacl3_central
          };
          out.op2 = {
            indicacao: t.hip_na_lenta,
            dose: t.hip_na_lenta_meta,
            form: 'NaCl 3% + SF 0,9% conforme cálculo',
            asp: defNa ? Math.round(Math.abs(defNa) / 0.513) + ' mL de NaCl 3% (total 24h)' : '—',
            dilui: '—',
            volfinal: '—',
            tempo: '24h (≤8–10 mEq/L/24h; alto risco ≤6–8)',
            mlh: defNa && act ? Math.round(Math.abs(defNa) / 0.513 / 24 * 10) / 10 : '—',
            gtas: '—', micro: '—',
            alerta_acesso: t.hip_na_mielinolise
          };
        } else {
          out.interpretacao = t.hip_na_grave + ' ' + (s.gravidade || t.lbl_leve) + ' ' + t.hip_na_assint + ' — Na⁺ ' + (v || '?') + ' mEq/L';
          out.op1 = {
            indicacao: t.hip_na_assint_op,
            dose: t.hip_na_sf09,
            form: 'SF 0,9%',
            asp: '—', dilui: '—',
            volfinal: '500–1000 mL/24h (individualizar)',
            tempo: '24h', mlh: '21–42',
            gtas: '—', micro: '—',
            alerta_acesso: t.acesso_periph_ok
          };
        }
        out.alertas.push(t.hip_na_max);
        out.alertas.push(t.hip_na_mielinolise2);

      /* Hipernatremia */
      } else if (s.nivel === 'alto') {
        out.interpretacao = t.hiper_na + ' ' + (s.gravidade || '') + ' — Na⁺ ' + (v || '?') + ' mEq/L';
        var defAguaHiper = defAgua ? Math.abs(defAgua) : null;
        out.op1 = {
          indicacao: t.hiper_na_agua,
          dose: defAguaHiper ? Math.round(defAguaHiper * 10) / 10 + ' L de déficit hídrico (fórmula ACT)' : '—',
          form: t.hiper_na_sg5,
          asp: '—',
          dilui: '—',
          volfinal: defAguaHiper ? Math.round(defAguaHiper * 1000) + ' mL' : '—',
          tempo: t.hiper_na_tempo,
          mlh: defAguaHiper ? Math.round(defAguaHiper * 1000 / 24 * 10) / 10 : '—',
          gtas: '—', micro: '—',
          alerta_acesso: t.acesso_periph_ok
        };
        out.alertas.push(t.hiper_na_edema);
        out.alertas.push(t.hiper_na_causa);

      } else {
        out.interpretacao = t.lbl_normal + ' — Na⁺ ' + (v || '?') + ' mEq/L';
      }

      /* Osmolaridade */
      if (s.glicose != null && s.ureia != null) {
        var osm = Formulas.calcOsmolaridade(v, s.glicose, s.ureia);
        if (osm) out.estado.osmolaridade = Math.round(osm) + ' mOsm/L';
      }
      return out;
    },

    /* ── MAGNÉSIO ── */
    mg: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_mg;
      out.estado.valor = v != null ? v + ' mg/dL' : '—';
      out.estado.nivel = s.nivel;
      out.estado.gravidade = s.gravidade;
      out.estado.acesso = s.acesso;
      var isReduced = s.clcrFiltro === 'lt30';

      if (s.nivel === 'baixo') {
        out.interpretacao = t.hip_mg + ' ' + (s.gravidade || '') + ' — Mg²⁺ ' + (v || '?') + ' mg/dL';

        if (s.gravidade === 'grave' || (v != null && v < 1.0)) {
          out.alertas.push(t.hip_mg_grave_alerta);
          out.op1 = {
            indicacao: t.lbl_grave + ' · ' + (s.ecg === 'ecg_alt' ? t.lbl_ecg_alt : t.lbl_sintomat),
            dose: '4–8 g (80–160 mEq)',
            form: 'MgSO₄ 50%',
            asp: '8–16 mL de MgSO₄ 50%',
            dilui: 'SF 0,9% 250–500 mL',
            volfinal: '250–500 mL',
            tempo: isReduced ? '12–24h (ClCr <30)' : '12–24h',
            mlh: isReduced ? '10–20' : '20–40',
            gtas: '—', micro: '—',
            alerta_acesso: t.mg_central
          };
          out.op2 = {
            indicacao: t.hip_mg_torsades,
            dose: '2 g em 10–20 min',
            form: 'MgSO₄ 50%',
            asp: '4 mL de MgSO₄ 50%',
            dilui: 'SF 0,9% 50–100 mL',
            volfinal: '50–100 mL',
            tempo: '10–20 min',
            mlh: 300, gtas: Math.round(100*20/15), micro: Math.round(100*60/15),
            alerta_acesso: t.hip_mg_torsades2
          };
        } else if (s.gravidade === 'moderado') {
          out.op1 = {
            indicacao: t.lbl_moderado,
            dose: '2 g IV',
            form: 'MgSO₄ 50%',
            asp: '4 mL de MgSO₄ 50%',
            dilui: 'SF 0,9% 100 mL',
            volfinal: '100 mL',
            tempo: isReduced ? '2h (ClCr <30)' : '1–2h',
            mlh: isReduced ? 50 : 100,
            gtas: Math.round(100*20/120), micro: Math.round(100*60/60),
            alerta_acesso: t.mg_periph_ok
          };
        } else {
          out.op1 = {
            indicacao: t.lbl_leve,
            dose: '2 g IV (ou VO se tolerado)',
            form: 'MgSO₄ 50% ou óxido de Mg VO',
            asp: '4 mL de MgSO₄ 50%',
            dilui: 'SF 0,9% 250 mL',
            volfinal: '250 mL',
            tempo: isReduced ? '4h (ClCr <30)' : '2h',
            mlh: isReduced ? 63 : 125,
            gtas: '—', micro: '—',
            alerta_acesso: 'Periférico — OK'
          };
        }
        if (isReduced) {
          out.alertas.push(t.hip_mg_clcr);
        }
        out.alertas.push(...FORMULATIONS_DB.mgso450.alerts[s.lang || 'pt']);

      } else if (s.nivel === 'alto') {
        out.interpretacao = t.hiper_mg + ' — Mg²⁺ ' + (v || '?') + ' mg/dL';
        out.alertas.push(t.hiper_mg_suspender);
        out.op1 = {
          indicacao: t.lbl_grave + ' / ' + t.lbl_sintomat,
          dose: 'Gluconato de Cálcio 10% 1 g IV',
          form: 'Gluconato de Cálcio 10%',
          asp: '10 mL', dilui: '—', volfinal: '10 mL',
          tempo: '2–5 min monitorado',
          mlh: '—', gtas: '—', micro: '—',
          alerta_acesso: t.hiper_mg_antidoto
        };
        out.alertas.push(t.hiper_mg_dialise);
      } else {
        out.interpretacao = t.lbl_normal + ' — Mg²⁺ ' + (v || '?') + ' mg/dL';
      }
      return out;
    },

    /* ── CÁLCIO ── */
    ca: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      var alb = s.albumina;
      out.recontrole = t.recontrole_ca;
      out.estado.valor = v != null ? v + ' mg/dL' : '—';

      /* Cálcio corrigido */
      if (v != null && alb != null) {
        var caCorr = Formulas.calcCaCorrigido(v, alb);
        out.estado.caCorrigido = Math.round(caCorr * 10) / 10 + ' mg/dL';
        out.estado.albumina = alb + ' g/dL';
        /* Usar Ca corrigido para a lógica */
        v = caCorr;
      }

      if (s.nivel === 'baixo' || (v != null && v < 8.5)) {
        out.interpretacao = t.hip_ca + ' ' + (s.gravidade || '') + ' — Ca corr. ' + (v ? Math.round(v*10)/10 : '?') + ' mg/dL';
        if (s.gravidade === 'grave' || s.sintomas === 'sintomat' || s.ecg === 'ecg_alt' || (v != null && v < 7.0)) {
          out.alertas.push(t.hip_ca_grave_alerta);
          out.op1 = {
            indicacao: t.hip_ca_grave_ind,
            dose: '10–20 mL de gluconato Ca 10% (1–2 g)',
            form: 'Gluconato de Cálcio 10%',
            asp: '10–20 mL',
            dilui: 'SF 0,9% ou SG 5% 50–100 mL',
            volfinal: '50–100 mL',
            tempo: '10–20 min (monitoração cardíaca)',
            mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.hip_ca_veia
          };
          out.op2 = {
            indicacao: t.hip_ca_manut,
            dose: 'Gluconato Ca 10% 60–90 mL em 500 mL',
            form: 'Gluconato de Cálcio 10%',
            asp: '60–90 mL', dilui: 'SF 0,9% 500 mL', volfinal: '500 mL',
            tempo: '8–12h', mlh: '42–62',
            gtas: '—', micro: '—',
            alerta_acesso: t.hip_ca_manut_monitor
          };
        } else {
          out.op1 = {
            indicacao: t.lbl_leve + '/' + t.lbl_moderado + t.hip_ca_leve,
            dose: t.hip_ca_leve_vo,
            form: t.hip_ca_leve_form,
            asp: '—', dilui: '—', volfinal: '—',
            tempo: t.vo_fracionado, mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.hip_ca_leve_obs
          };
        }
      } else if (s.nivel === 'alto' || (v != null && v > 10.5)) {
        out.interpretacao = t.hiper_ca + ' — Ca ' + (v ? Math.round(v*10)/10 : '?') + ' mg/dL';
        out.op1 = {
          indicacao: t.hiper_ca_hidrat,
          dose: 'SF 0,9% 200–300 mL/h',
          form: 'SF 0,9%', asp: '—', dilui: '—',
          volfinal: '2–4 L/24h', tempo: '24h',
          mlh: '200–300', gtas: '—', micro: '—',
          alerta_acesso: t.hiper_ca_bal
        };
        out.alertas.push(t.hiper_ca_furo);
        out.alertas.push(t.hiper_ca_bifosf);
      } else {
        out.interpretacao = t.lbl_normal + ' — Ca²⁺ ' + (v ? Math.round(v*10)/10 : '?') + ' mg/dL';
      }
      return out;
    },

    /* ── FÓSFORO ── */
    p: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_p;
      out.estado.valor = v != null ? v + ' mg/dL' : '—';
      var peso = s.peso || 70;
      var isReduced = s.clcrFiltro === 'lt30';

      if (s.nivel === 'baixo') {
        out.interpretacao = t.hip_p + ' ' + (s.gravidade || '') + ' — P ' + (v || '?') + ' mg/dL';
        if (s.gravidade === 'grave' || (v != null && v < 1.0)) {
          out.alertas.push(t.hip_p_grave_alerta);
          out.op1 = {
            indicacao: t.hip_p_grave_ind,
            dose: Math.round(peso * 0.2 * 10) / 10 + ' mmol (' + Math.round(0.16 * peso * 10) / 10 + '–' + Math.round(0.32 * peso * 10) / 10 + ' mmol/kg)',
            form: 'Fosfato de Potássio IV (1 mmol/mL)',
            asp: Math.round(peso * 0.2) + ' mL de fosfato de potássio IV',
            dilui: 'SF 0,9% 250–500 mL',
            volfinal: '250–500 mL',
            tempo: isReduced ? '6–12h (ClCr <30)' : '4–6h',
            mlh: isReduced ? Math.round(350/9) : Math.round(350/5),
            gtas: '—', micro: '—',
            alerta_acesso: t.hip_p_monitor
          };
        } else if (s.gravidade === 'moderado') {
          out.op1 = {
            indicacao: t.hip_p_mod,
            dose: Math.round(0.08 * peso * 10) / 10 + '–' + Math.round(0.16 * peso * 10) / 10 + ' mmol/kg',
            form: 'Fosfato VO ou IV',
            asp: '—', dilui: 'SF 0,9% 250 mL', volfinal: '250 mL',
            tempo: '4–6h', mlh: '50', gtas: '—', micro: '—',
            alerta_acesso: isReduced ? t.p_clcr_red : '—'
          };
        } else {
          out.op1 = {
            indicacao: t.hip_p_leve,
            dose: t.hip_p_leve_dose,
            form: 'Fosfato VO', asp: '—', dilui: '—', volfinal: '—',
            tempo: t.hip_p_leve_tempo, mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: '—'
          };
        }
        if (isReduced) out.alertas.push(t.hip_p_clcr);
        out.alertas.push(t.hip_p_ca);
      } else if (s.nivel === 'alto') {
        out.interpretacao = t.hiper_p + ' — P ' + (v || '?') + ' mg/dL';
        out.alertas.push(t.hiper_p_dieta);
        out.alertas.push(t.hiper_p_quelantes);
        out.alertas.push(isReduced ? t.p_clcr_dialise : t.p_causa);
      } else {
        out.interpretacao = t.lbl_normal + ' — P ' + (v || '?') + ' mg/dL';
      }
      return out;
    },

    /* ── BICARBONATO ── */
    hco3: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_hco3;
      out.estado.valor = v != null ? v + ' mEq/L' : '—';

      if (s.nivel === 'baixo') {
        out.interpretacao = t.acid_met + ' — HCO₃⁻ ' + (v || '?') + ' mEq/L';
        var peso = s.peso || 70;
        /* BE estimado: (24 - HCO3) */
        var be = v != null ? (24 - v) : null;
        var doseTotal = be != null ? Math.round(be * peso * 0.3) : null;
        if (s.gravidade === 'grave' || (v != null && v < 10)) {
          out.alertas.push(t.acid_grave_alerta);
          out.op1 = {
            indicacao: t.acid_grave_ind,
            dose: doseTotal ? Math.round(doseTotal / 2) + ' mEq (metade da reposição calculada)' : '50–100 mEq',
            form: 'NaHCO₃ 8,4%',
            asp: doseTotal ? Math.round(doseTotal / 2) + ' mL de NaHCO₃ 8,4% (1 mEq/mL)' : '50–100 mL',
            dilui: t.acid_bicarb_dilui,
            volfinal: '250–500 mL',
            tempo: '30–60 min',
            mlh: '250–500', gtas: '—', micro: '—',
            alerta_acesso: t.acid_bicarb_alert
          };
          out.alertas.push(...FORMULATIONS_DB.bicarb84.alerts[s.lang || 'pt']);
        } else {
          out.op1 = {
            indicacao: t.acid_mod,
            dose: t.acid_mod_cond,
            form: t.acid_mod_form,
            asp: doseTotal ? doseTotal + ' mEq (0,3 × peso × BE)' : '—',
            dilui: '—', volfinal: '—', tempo: 'Individualizar',
            mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: '—'
          };
        }
      } else if (s.nivel === 'alto') {
        out.interpretacao = t.alc_met + ' — HCO₃⁻ ' + (v || '?') + ' mEq/L';
        out.alertas.push(t.alc_causa);
        out.alertas.push(t.alc_repor);
      } else {
        out.interpretacao = t.lbl_normal + ' — HCO₃⁻ ' + (v || '?') + ' mEq/L';
      }
      return out;
    },

    /* ── GLICOSE ── */
    glicose: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_glicose;
      out.estado.valor = v != null ? v + ' mg/dL' : '—';

      if (s.nivel === 'baixo' || (v != null && v < 70)) {
        out.interpretacao = t.hipoglicemia + ' — Glicose ' + (v || '?') + ' mg/dL';
        if (s.gravidade === 'grave' || (v != null && v < 50) || s.sintomas === 'sintomat') {
          out.alertas.push(t.hipoglicemia_alerta);
          out.op1 = {
            indicacao: t.hipoglicemia_grave,
            dose: '25 g de glicose IV (50 mL de SG 50%)',
            form: 'SG 50%',
            asp: '50 mL de SG 50%',
            dilui: '—',
            volfinal: '50 mL',
            tempo: '1–3 min (EV rápido)',
            mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.hipoglicemia_sg50
          };
          out.op2 = {
            indicacao: t.hipoglicemia_manut,
            dose: 'SG 10% 500 mL',
            form: 'SG 10%',
            asp: '—', dilui: '—', volfinal: '500 mL',
            tempo: '4–6h', mlh: '83–125',
            gtas: Math.round(500*20/300), micro: Math.round(500*60/300),
            alerta_acesso: t.hipoglicemia_periph
          };
          out.alertas.push(t.hipoglicemia_equiv);
        } else {
          out.op1 = {
            indicacao: t.hipoglicemia_leve,
            dose: '15–20 g VO (suco, glicose VO)',
            form: 'Glicose VO ou SG 10%/5%',
            asp: '—', dilui: '—', volfinal: '150–200 mL',
            tempo: '15 min e reavaliação', mlh: '—', gtas: '—', micro: '—',
            alerta_acesso: t.hipoglicemia_regra
          };
        }
      } else if (s.nivel === 'alto' || (v != null && v > 180)) {
        out.interpretacao = t.hiperglicemia + ' — Glicose ' + (v || '?') + ' mg/dL';
        out.op1 = {
          indicacao: t.hiperglicemia_insulina,
          dose: 'Insulina Regular: dose conforme glicemia e protocolo',
          form: 'Insulina Regular',
          asp: '—', dilui: '—', volfinal: '—',
          tempo: t.conforme_protocolo, mlh: '—', gtas: '—', micro: '—',
          alerta_acesso: t.hiperglicemia_monitor
        };
        out.alertas.push(t.hiperglicemia_na);
      } else {
        out.interpretacao = t.lbl_normal + ' — Glicose ' + (v || '?') + ' mg/dL';
      }
      return out;
    },

    /* ── ALBUMINA ── */
    albumina: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      var ca = s.ca;
      out.recontrole = t.recontrole_default;
      out.estado.valor = v != null ? v + ' g/dL' : '—';

      /* Ca corrigido */
      if (v != null && ca != null) {
        var caCorr = Formulas.calcCaCorrigido(ca, v);
        out.estado.caCorrigido = Math.round(caCorr * 10) / 10 + ' mg/dL (Ca corrigido)';
      }

      /* AG corrigido */
      var ag = s.na != null && s.cl != null && s.hco3 != null
        ? Formulas.calcAG(s.na, s.cl, s.hco3) : null;
      if (ag != null && v != null) {
        var agCorr = Formulas.calcAGCorrigido(ag, v);
        out.estado.agCorrigido = Math.round(agCorr * 10) / 10 + ' mEq/L (AG corrigido)';
      }

      if (s.nivel === 'baixo') {
        out.interpretacao = t.hip_alb + ' — Alb ' + (v || '?') + ' g/dL';
        out.alertas.push(t.alb_marcador);
        out.alertas.push(t.alb_ca_formula);
        out.alertas.push(t.alb_ag_formula);
        out.op1 = {
          indicacao: t.alb_indicacao,
          dose: t.alb_dose_desc,
          form: 'Albumina 20%',
          asp: '125–250 mL de albumina 20%', dilui: '—',
          volfinal: '125–250 mL',
          tempo: '2–4h', mlh: '31–125',
          gtas: '—', micro: '—',
          alerta_acesso: t.alb_acesso
        };
        out.alertas.push(...FORMULATIONS_DB.alb20.alerts[s.lang || 'pt']);
      } else {
        out.interpretacao = (v != null && v >= 3.5 ? t.lbl_normal : t.lbl_baixo) + ' — Alb ' + (v || '?') + ' g/dL';
      }
      return out;
    },

    /* ── ÂNION GAP ── */
    ag: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      out.recontrole = t.recontrole_ag;

      var na = s.na || s.valor_na;
      var cl = s.cl;
      var hco3 = s.hco3;
      var alb = s.albumina;

      var ag = Formulas.calcAG(na, cl, hco3);
      var agCorr = (ag != null && alb != null) ? Formulas.calcAGCorrigido(ag, alb) : null;

      out.estado.ag = ag != null ? Math.round(ag * 10) / 10 + ' mEq/L' : '—';
      out.estado.agCorrigido = agCorr != null ? Math.round(agCorr * 10) / 10 + ' mEq/L' : '—';
      out.estado.formula = 'AG = Na – (Cl + HCO₃)';

      if (ag != null) {
        if (ag > 12) {
          out.interpretacao = t.ag_elevado + ' — AG ' + Math.round(ag*10)/10 + ' mEq/L';
          out.alertas.push(t.ag_mudpiles);
          if (agCorr != null && agCorr > 14) {
            out.alertas.push(t.ag_corr_elevado.replace('%s', Math.round(agCorr*10)/10));
          }
          /* Delta-Delta */
          if (hco3 != null) {
            var deltaAG = ag - 12;
            var deltaHCO3 = 24 - hco3;
            var deltaDelta = deltaAG / deltaHCO3;
            out.estado.deltaDelta = Math.round(deltaDelta * 100) / 100;
            if (deltaDelta < 1) out.alertas.push(t.ag_delta_menor1);
            else if (deltaDelta > 2) out.alertas.push(t.ag_delta_maior2);
            else out.alertas.push(t.ag_delta_ok);
          }
        } else if (ag < 8) {
          out.interpretacao = t.ag_baixo + ' — AG ' + Math.round(ag*10)/10 + ' mEq/L';
          out.alertas.push(t.ag_baixo_causas);
        } else {
          out.interpretacao = t.ag_normal + ' — ' + Math.round(ag*10)/10 + ' mEq/L (ref: 8–12)';
        }
      } else {
        out.interpretacao = t.ag_sem_dados;
      }
      out.op1 = {
        indicacao: t.ag_form_indicacao,
        dose: 'AG = ' + (na || '?') + ' – (' + (cl || '?') + ' + ' + (hco3 || '?') + ') = ' + (ag != null ? Math.round(ag*10)/10 : '?') + ' mEq/L',
        form: t.ag_form,
        asp: agCorr != null ? 'AG corrigido = ' + Math.round(agCorr*10)/10 + ' mEq/L' : '—',
        dilui: '—', volfinal: '—', tempo: '—',
        mlh: '—', gtas: '—', micro: '—',
        alerta_acesso: '—'
      };
      return out;
    },

    /* ── OSMOLARIDADE ── */
    osm: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      out.recontrole = t.recontrole_osm;

      var na = s.na || s.valor;
      var glicose = s.glicose;
      var ureia = s.ureia;
      var osm = Formulas.calcOsmolaridade(na, glicose, ureia);

      out.estado.osmCalculada = osm != null ? Math.round(osm) + ' mOsm/L' : '—';
      out.estado.formula = 'Osm = 2×Na + Glicose/18 + Ureia/2,8';
      out.estado.componentes = na != null ?
        '2×' + na + ' + ' + (glicose != null ? Math.round(glicose/18) : '?') + ' + ' + (ureia != null ? Math.round(ureia/2.8) : '?')
        : '—';

      if (osm != null) {
        if (osm < 275) {
          out.interpretacao = t.osm_hipo + ' — ' + Math.round(osm) + ' mOsm/L';
          out.alertas.push(t.osm_hipo_causa);
        } else if (osm > 295) {
          out.interpretacao = t.osm_hiper + ' — ' + Math.round(osm) + ' mOsm/L';
          if (osm > 320) out.alertas.push(t.osm_hiper_grave);
          out.alertas.push(t.osm_hiper_causas);
          out.alertas.push(t.osm_gap);
        } else {
          out.interpretacao = t.osm_normal + ' — ' + Math.round(osm) + ' mOsm/L';
        }
      } else {
        out.interpretacao = t.osm_sem_dados;
      }
      out.op1 = {
        indicacao: t.osm_form_indicacao,
        dose: osm != null ? Math.round(osm) + ' mOsm/L' : '—',
        form: '2×Na + Glicose/18 + Ureia/2,8',
        asp: '—', dilui: '—', volfinal: '—', tempo: '—',
        mlh: '—', gtas: '—', micro: '—',
        alerta_acesso: t.osm_correlacionar
      };
      return out;
    },

    /* ── CLORO ── */
    cl: function (s, t) {
      var out = { estado: {}, interpretacao: '', op1: null, op2: null, op3: null, alertas: [], recontrole: '' };
      var v = s.valor;
      out.recontrole = t.recontrole_default;
      out.estado.valor = v != null ? v + ' mEq/L' : '—';

      if (s.nivel === 'baixo') {
        out.interpretacao = t.hip_cl + ' — Cl⁻ ' + (v || '?') + ' mEq/L';
        out.alertas.push(t.hip_cl_causa);
        out.alertas.push(t.hip_cl_repor);
        out.op1 = {
          indicacao: t.hip_cl_ind,
          dose: t.hip_cl_dose,
          form: 'NaCl 0,9%', asp: '—', dilui: '—',
          volfinal: '500–1000 mL', tempo: '4–8h',
          mlh: '125', gtas: '—', micro: '—',
          alerta_acesso: t.acesso_periph_ok
        };
      } else if (s.nivel === 'alto') {
        out.interpretacao = t.hiper_cl + ' — Cl⁻ ' + (v || '?') + ' mEq/L';
        out.alertas.push(t.hiper_cl_causa);
        out.alertas.push(t.hiper_cl_bicarb);
        out.op1 = {
          indicacao: t.hiper_cl_ind,
          dose: t.hiper_cl_cond,
          form: '—', asp: '—', dilui: '—', volfinal: '—', tempo: '—',
          mlh: '—', gtas: '—', micro: '—',
          alerta_acesso: '—'
        };
      } else {
        out.interpretacao = t.lbl_normal + ' — Cl⁻ ' + (v || '?') + ' mEq/L';
      }
      return out;
    }
  };

  /* ================================================================
     SEÇÃO 7 — RENDERIZAÇÃO HTML
  ================================================================ */
  var ElecRender = {

    /* ── Bloco de resultado ── */
    _bloco: function (titulo, cor, conteudo, icone) {
      return '<div class="elec2-bloco" style="--bloco-cor:' + cor + '">' +
        '<div class="elec2-bloco-hd"><i class="fa-solid ' + (icone || 'fa-circle') + '"></i> ' + titulo + '</div>' +
        '<div class="elec2-bloco-bd">' + conteudo + '</div>' +
        '</div>';
    },

    /* ── Linha de detalhe ── */
    _row: function (lbl, val) {
      if (!val || val === '—' || val === null) return '';
      return '<div class="elec2-row"><span class="elec2-row-lbl">' + lbl + '</span><span class="elec2-row-val">' + val + '</span></div>';
    },

    /* ── Card de opção terapêutica ── */
    _opCard: function (titulo, op, t, cor) {
      if (!op) return '';
      var rows = '';
      if (op.indicacao) rows += this._row(t.lbl_indicacao, op.indicacao);
      if (op.dose)      rows += this._row(t.lbl_dose_r, op.dose);
      if (op.form)      rows += this._row(t.lbl_form, op.form);
      if (op.asp)       rows += this._row(t.lbl_asp, op.asp);
      if (op.conc)      rows += this._row(t.lbl_conc, op.conc);
      if (op.dilui)     rows += this._row(t.lbl_dilui, op.dilui);
      if (op.volfinal)  rows += this._row(t.lbl_volfinal, op.volfinal);
      if (op.tempo)     rows += this._row(t.lbl_tempo_inf, op.tempo);
      if (op.mlh && op.mlh !== '—') rows += this._row(t.lbl_mlh, op.mlh + (typeof op.mlh === 'number' ? ' mL/h' : ''));
      if (op.gtas && op.gtas !== '—') rows += this._row(t.lbl_gtas, op.gtas + (typeof op.gtas === 'number' ? ' gt/min' : ''));
      if (op.micro && op.micro !== '—') rows += this._row(t.lbl_micro, op.micro + (typeof op.micro === 'number' ? ' µgt/min' : ''));
      if (op.alerta_acesso && op.alerta_acesso !== '—') {
        rows += '<div class="elec2-acesso-alert">' + op.alerta_acesso + '</div>';
      }
      if (!rows) return '';
      return this._bloco(titulo, cor, rows, 'fa-syringe');
    },

    /* ── Bloco de estado ── */
    _estadoBloco: function (estado, elec, t, lang) {
      var rows = '';
      if (estado.valor) rows += this._row(t.lbl_valor, estado.valor);
      if (estado.naCorrigido) rows += this._row('Na⁺ Corrigido', estado.naCorrigido);
      if (estado.caCorrigido) rows += this._row('Ca²⁺ Corrigido', estado.caCorrigido);
      if (estado.act) rows += this._row('ACT (Água Corporal Total)', estado.act);
      if (estado.deficitNa) rows += this._row('Déficit Na⁺', estado.deficitNa);
      if (estado.deficitAgua) rows += this._row('Déficit Água Livre', estado.deficitAgua);
      if (estado.osmolaridade) rows += this._row('Osmolaridade', estado.osmolaridade);
      if (estado.ag) rows += this._row('Ânion Gap', estado.ag);
      if (estado.agCorrigido) rows += this._row('AG Corrigido (albumina)', estado.agCorrigido);
      if (estado.osmCalculada) rows += this._row('Osm Calculada', estado.osmCalculada);
      if (estado.componentes) rows += this._row('Componentes', estado.componentes);
      if (estado.albumina) rows += this._row('Albumina', estado.albumina);
      if (estado.deltaDelta) rows += this._row('Delta/Delta', estado.deltaDelta);
      if (estado.formula) rows += this._row('Fórmula', estado.formula);
      /* Chips de estado */
      var chips = '';
      var nivelMap = { baixo: t.lbl_baixo, normal: t.lbl_normal, alto: t.lbl_alto };
      var gravMap = { leve: t.lbl_leve, moderado: t.lbl_moderado, grave: t.lbl_grave };
      var sintMap = { sintomat: t.lbl_sintomat, assintomat: t.lbl_assintomat };
      var ecgMap = { ecg_alt: t.lbl_ecg_alt, ecg_ok: t.lbl_ecg_ok };
      var clcrMap = { lt30: t.lbl_lt30, gte30: t.lbl_gte30 };
      var acMap = { periph: t.lbl_periph, central: t.lbl_central };
      if (estado.nivel && nivelMap[estado.nivel]) chips += '<span class="elec2-chip elec2-chip--' + estado.nivel + '">' + nivelMap[estado.nivel] + '</span>';
      if (estado.gravidade && gravMap[estado.gravidade]) chips += '<span class="elec2-chip elec2-chip--grav-' + estado.gravidade + '">' + gravMap[estado.gravidade] + '</span>';
      if (estado.ecg && ecgMap[estado.ecg]) chips += '<span class="elec2-chip ' + (estado.ecg === 'ecg_alt' ? 'elec2-chip--danger' : 'elec2-chip--ok') + '">' + ecgMap[estado.ecg] + '</span>';
      if (estado.clcr && clcrMap[estado.clcr]) chips += '<span class="elec2-chip ' + (estado.clcr === 'lt30' ? 'elec2-chip--warn' : 'elec2-chip--ok') + '">' + clcrMap[estado.clcr] + '</span>';
      if (estado.acesso && acMap[estado.acesso]) chips += '<span class="elec2-chip elec2-chip--acesso-' + estado.acesso + '">' + acMap[estado.acesso] + '</span>';
      if (chips) rows = '<div class="elec2-chips">' + chips + '</div>' + rows;
      return rows || '<span style="opacity:0.5">—</span>';
    },

    /* ── Renderiza output completo ── */
    renderOutput: function (elecKey, s) {
      var lang = s.lang || 'pt';
      var t = I18N[lang] || I18N.pt;
      var elec = ELECTROLYTES[elecKey];
      if (!elec) return '';

      /* Executar lógica clínica */
      var logic = ClinicalLogic[elecKey];
      if (!logic) return '<p style="color:var(--text-secondary)">Módulo em desenvolvimento</p>';

      var out = logic(s, t);

      var html = '';

      /* BLOCO 1: Estado */
      var estadoContent = this._estadoBloco(out.estado, elec, t, lang);
      html += this._bloco(t.blk_estado, elec.color, estadoContent, 'fa-chart-line');

      /* BLOCO 2: Interpretação */
      if (out.interpretacao) {
        var interpClass = out.interpretacao.indexOf('🚨') >= 0 ? 'elec2-interpretacao--danger' : '';
        html += this._bloco(t.blk_interpretacao, elec.color,
          '<div class="elec2-interpretacao ' + interpClass + '">' + out.interpretacao + '</div>',
          'fa-stethoscope');
      }

      /* BLOCOS 3-5: Opções terapêuticas */
      if (out.op1) html += this._opCard(t.blk_op1, out.op1, t, elec.color);
      if (out.op2) html += this._opCard(t.blk_op2, out.op2, t, elec.color);
      if (out.op3) html += this._opCard(t.blk_op3, out.op3, t, elec.color);

      /* BLOCO 6: Alertas críticos */
      if (out.alertas && out.alertas.length > 0) {
        var alertContent = out.alertas.map(function (a) {
          var cls = a.indexOf('🚨') >= 0 ? 'elec2-alert--critical' : (a.indexOf('⚠️') >= 0 ? 'elec2-alert--warn' : 'elec2-alert--info');
          return '<div class="elec2-alert ' + cls + '">' + a + '</div>';
        }).join('');
        html += this._bloco(t.blk_alertas, '#EF4444', alertContent, 'fa-triangle-exclamation');
      }

      /* BLOCO 7: Recontrole */
      if (out.recontrole) {
        html += this._bloco(t.blk_recontrole, '#34D399',
          '<div class="elec2-recontrole">' + out.recontrole + '</div>',
          'fa-clock-rotate-left');
      }

      return html;
    }
  };

  /* ================================================================
     SEÇÃO 8 — CONSTRUÇÃO DO HTML DA CALCULADORA
  ================================================================ */
  var ElecUI = {

    /* ── Botão de eletrólito ── */
    _elecBtn: function (key, elec, selected, lang) {
      var isSelected = selected === key;
      return '<button class="elec2-elec-btn' + (isSelected ? ' elec2-elec-btn--active' : '') + '" ' +
        'onclick="ElecCalc.selectElectrolyte(\'' + key + '\')" ' +
        'style="--btn-color:' + elec.color + '" ' +
        'data-elec="' + key + '">' +
        '<i class="fa-solid ' + elec.icon + '"></i>' +
        '<span>' + (typeof elec.shortName === 'object' ? (elec.shortName[lang] || elec.shortName.pt) : elec.shortName) + '</span>' +
        '</button>';
    },

    /* ── Grid de eletrólitos (etapa 1) ── */
    renderStep1: function (lang, selected) {
      var t = I18N[lang] || I18N.pt;
      var btns = Object.keys(ELECTROLYTES).map(function (k) {
        return ElecUI._elecBtn(k, ELECTROLYTES[k], selected, lang);
      }).join('');
      return '<div class="elec2-step" id="elec2-step1">' +
        '<div class="elec2-step-hd"><span class="elec2-step-num">1</span>' + t.step1_title + '</div>' +
        '<div class="elec2-elec-grid">' + btns + '</div>' +
        '</div>';
    },

    /* ── Etapa 2: Estado clínico (botões contextuais por eletrólito) ── */
    renderStep2: function (lang, elecKey, s) {
      if (!elecKey) return '';
      var t = I18N[lang] || I18N.pt;
      var elec = ELECTROLYTES[elecKey];
      var states = elec ? elec.states : ['nivel'];
      var html = '<div class="elec2-step" id="elec2-step2">';
      html += '<div class="elec2-step-hd"><span class="elec2-step-num">2</span>' + t.step2_title + '</div>';

      /* Campos numéricos do eletrólito selecionado */
      html += ElecUI._renderNumericFields(lang, elecKey, s, t);

      /* Grupos de botões de estado */
      states.forEach(function (stateType) {
        html += ElecUI._renderStateGroup(stateType, lang, s, t);
      });

      html += '</div>';
      return html;
    },

    /* ── Campos numéricos ── */
    _renderNumericFields: function (lang, elecKey, s, t) {
      var elec = ELECTROLYTES[elecKey];
      var fields = elec ? elec.fields : [];
      if (!fields.length) return '';

      var html = '<div class="elec2-fields-grid">';
      fields.forEach(function (f) {
        var lbl, id, ph, step = '0.1', min = '0', max = '9999';
        switch (f) {
          case 'valor':  lbl = t.lbl_valor + ' (' + elec.unit + ')'; id = 'elec2-in-valor'; ph = elec.refLow + '–' + elec.refHigh; break;
          case 'peso':   lbl = t.lbl_peso; id = 'elec2-in-peso'; ph = '70'; step = '1'; break;
          case 'glicose': lbl = t.lbl_glicose; id = 'elec2-in-glicose'; ph = '100'; step = '1'; break;
          case 'albumina': lbl = t.lbl_albumina; id = 'elec2-in-albumina'; ph = '4.0'; break;
          case 'na':     lbl = t.lbl_na; id = 'elec2-in-na'; ph = '140'; step = '1'; break;
          case 'cl':     lbl = t.lbl_cl; id = 'elec2-in-cl'; ph = '102'; step = '1'; break;
          case 'hco3':   lbl = t.lbl_hco3; id = 'elec2-in-hco3'; ph = '24'; step = '1'; break;
          case 'ureia':  lbl = t.lbl_ureia; id = 'elec2-in-ureia'; ph = '40'; step = '1'; break;
          case 'ca':     lbl = t.lbl_ca_input; id = 'elec2-in-ca'; ph = '9.0'; break;
          case 'clcr':   lbl = 'ClCr (mL/min)'; id = 'elec2-in-clcr'; ph = '90'; step = '1'; break;
          default: lbl = f; id = 'elec2-in-' + f; ph = '';
        }
        var val = s[f] != null ? s[f] : '';
        html += '<div class="elec2-field">' +
          '<label class="elec2-field-lbl" for="' + id + '">' + lbl + '</label>' +
          '<input class="elec2-field-input" type="number" id="' + id + '" ' +
          'placeholder="' + ph + '" value="' + val + '" step="' + step + '" min="' + min + '" max="' + max + '"' +
          ' oninput="ElecCalc.setField(\'' + f + '\', this.value)"/>' +
          '</div>';
      });

      /* Sexo/Idade se peso estiver nos campos */
      if (fields.indexOf('peso') >= 0) {
        html += '<div class="elec2-field elec2-field--full">' +
          '<label class="elec2-field-lbl">' + t.lbl_sexo + '</label>' +
          '<div class="elec2-btn-row">' +
          ['M', 'F', 'idoso', 'crianca'].map(function (sv) {
            var lbl2 = sv === 'M' ? t.opt_m : sv === 'F' ? t.opt_f : sv === 'idoso' ? t.opt_idoso : t.opt_crianca;
            return '<button class="elec2-state-btn' + (s.sexo === sv ? ' active' : '') + '" onclick="ElecCalc.setState(\'sexo\',\'' + sv + '\')">' + lbl2 + '</button>';
          }).join('') +
          '</div></div>';
      }
      html += '</div>';
      return html;
    },

    /* ── Grupos de botões de estado ── */
    _renderStateGroup: function (stateType, lang, s, t) {
      var html = '';
      switch (stateType) {
        case 'nivel':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_nivel + '</div>' +
            '<div class="elec2-btn-row">' +
            ['baixo','normal','alto'].map(function (v) {
              return '<button class="elec2-state-btn elec2-state-btn--nivel-' + v + (s.nivel === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'nivel\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        case 'gravidade':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_gravidade + '</div>' +
            '<div class="elec2-btn-row">' +
            ['leve','moderado','grave'].map(function (v) {
              return '<button class="elec2-state-btn elec2-state-btn--grav-' + v + (s.gravidade === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'gravidade\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        case 'sintomas':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_sintomas + '</div>' +
            '<div class="elec2-btn-row">' +
            ['sintomat','assintomat'].map(function (v) {
              return '<button class="elec2-state-btn' + (s.sintomas === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'sintomas\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        case 'ecg':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_ecg + '</div>' +
            '<div class="elec2-btn-row">' +
            ['ecg_alt','ecg_ok'].map(function (v) {
              return '<button class="elec2-state-btn' + (v === 'ecg_alt' ? ' elec2-state-btn--ecg-danger' : '') + (s.ecg === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'ecg\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        case 'clcr':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_clcr + '</div>' +
            '<div class="elec2-btn-row">' +
            ['lt30','gte30'].map(function (v) {
              return '<button class="elec2-state-btn' + (s.clcrFiltro === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'clcrFiltro\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        case 'acesso':
          html += '<div class="elec2-state-group">' +
            '<div class="elec2-state-lbl">' + t.lbl_acesso + '</div>' +
            '<div class="elec2-btn-row">' +
            ['periph','central'].map(function (v) {
              return '<button class="elec2-state-btn' + (s.acesso === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'acesso\',\'' + v + '\')">' + t['lbl_' + v] + '</button>';
            }).join('') +
            '</div></div>';
          break;
        default: break;
      }
      return html;
    },

    /* ── Etapa 3: Presets rápidos (dose/volume/tempo/equipo) ── */
    renderStep3: function (lang, elecKey, s) {
      if (!elecKey) return '';
      var t = I18N[lang] || I18N.pt;
      var elec = ELECTROLYTES[elecKey];
      var html = '<div class="elec2-step" id="elec2-step3">';
      html += '<div class="elec2-step-hd"><span class="elec2-step-num">3</span>' + t.step4_title + '</div>';

      /* Formulação */
      var forms = elec ? elec.defaultFormulations : [];
      if (forms.length) {
        html += '<div class="elec2-state-group">';
        html += '<div class="elec2-state-lbl">' + t.lbl_formulacao + '</div>';
        html += '<div class="elec2-btn-row elec2-btn-row--wrap">';
        forms.forEach(function (fk) {
          var fm = FORMULATIONS_DB[fk];
          if (!fm) return;
          html += '<button class="elec2-preset-btn' + (s.formulacao === fk ? ' active' : '') + '" onclick="ElecCalc.setState(\'formulacao\',\'' + fk + '\')">' + fm.name[lang] + '</button>';
        });
        html += '</div></div>';
      }

      /* Dose (para K, Na, Mg) */
      if (elec && elec.unit === 'mEq/L' && elecKey !== 'na' && elecKey !== 'cl') {
        html += '<div class="elec2-state-group">';
        html += '<div class="elec2-state-lbl">' + t.lbl_dose + '</div>';
        html += '<div class="elec2-btn-row elec2-btn-row--wrap">';
        [10, 20, 40, 80].forEach(function (d) {
          html += '<button class="elec2-preset-btn' + (s.dose === d ? ' active' : '') + '" onclick="ElecCalc.setState(\'dose\',' + d + ')">' + d + ' mEq</button>';
        });
        html += '</div></div>';
      }

      /* Dose Mg em gramas */
      if (elecKey === 'mg') {
        html += '<div class="elec2-state-group">';
        html += '<div class="elec2-state-lbl">' + t.lbl_dose + '</div>';
        html += '<div class="elec2-btn-row elec2-btn-row--wrap">';
        [1, 2, 4, 6, 8].forEach(function (d) {
          html += '<button class="elec2-preset-btn' + (s.dose === d ? ' active' : '') + '" onclick="ElecCalc.setState(\'dose\',' + d + ')">' + d + ' g</button>';
        });
        html += '</div></div>';
      }

      /* Volume */
      html += '<div class="elec2-state-group">';
      html += '<div class="elec2-state-lbl">' + t.lbl_volume + '</div>';
      html += '<div class="elec2-btn-row elec2-btn-row--wrap">';
      [50, 100, 250, 500, 1000].forEach(function (v) {
        html += '<button class="elec2-preset-btn' + (s.volume === v ? ' active' : '') + '" onclick="ElecCalc.setState(\'volume\',' + v + ')">' + v + ' mL</button>';
      });
      html += '</div></div>';

      /* Tempo */
      html += '<div class="elec2-state-group">';
      html += '<div class="elec2-state-lbl">' + t.lbl_tempo + '</div>';
      html += '<div class="elec2-btn-row elec2-btn-row--wrap">';
      var tempos = [
        {min: 10, lbl: '10 min'}, {min: 15, lbl: '15 min'}, {min: 20, lbl: '20 min'},
        {min: 30, lbl: '30 min'}, {min: 60, lbl: '1h'}, {min: 120, lbl: '2h'},
        {min: 240, lbl: '4h'}, {min: 360, lbl: '6h'}, {min: 720, lbl: '12h'}, {min: 1440, lbl: '24h'}
      ];
      tempos.forEach(function (tv) {
        html += '<button class="elec2-preset-btn' + (s.tempo === tv.min ? ' active' : '') + '" onclick="ElecCalc.setState(\'tempo\',' + tv.min + ')">' + tv.lbl + '</button>';
      });
      html += '</div></div>';

      /* Equipo */
      html += '<div class="elec2-state-group">';
      html += '<div class="elec2-state-lbl">' + t.lbl_equipo + '</div>';
      html += '<div class="elec2-btn-row">';
      [['bomba',t.eq_bomba],['macro',t.eq_macro],['micro',t.eq_micro]].forEach(function (eq) {
        html += '<button class="elec2-preset-btn' + (s.equipo === eq[0] ? ' active' : '') + '" onclick="ElecCalc.setState(\'equipo\',\'' + eq[0] + '\')">' + eq[1] + '</button>';
      });
      html += '</div></div>';

      /* Acesso (redundante mas importante) */
      html += '<div class="elec2-state-group">';
      html += '<div class="elec2-state-lbl">' + t.lbl_acesso + '</div>';
      html += '<div class="elec2-btn-row">';
      [['periph',t.lbl_periph],['central',t.lbl_central]].forEach(function (ac) {
        html += '<button class="elec2-state-btn' + (s.acesso === ac[0] ? ' active' : '') + '" onclick="ElecCalc.setState(\'acesso\',\'' + ac[0] + '\')">' + ac[1] + '</button>';
      });
      html += '</div></div>';

      /* Botão calcular */
      html += '<button class="elec2-calc-btn" onclick="ElecCalc.calculate()">' +
        '<i class="fa-solid fa-flask-vial"></i> ' + t.calcular + '</button>';

      html += '</div>';
      return html;
    },

    /* ── Área de resultado ── */
    renderResult: function (lang, elecKey, s) {
      if (!elecKey) return '';
      var html = ElecRender.renderOutput(elecKey, s);
      if (!html) return '';
      var t = I18N[lang] || I18N.pt;
      return '<div id="elec2-result-area" class="elec2-result">' +
        '<div class="elec2-result-actions">' +
        '<button class="elec2-action-btn" onclick="ElecCalc.copyResult()">' +
        '<i class="fa-solid fa-copy"></i> ' + t.copy_result + '</button>' +
        '<button class="elec2-action-btn elec2-action-btn--secondary" onclick="ElecCalc.reset()">' +
        '<i class="fa-solid fa-rotate-left"></i> ' + t.limpar + '</button>' +
        '</div>' +
        html +
        '</div>';
    },

    /* ── Estrutura principal ── */
    renderMain: function () {
      var lang = _state.lang;
      var t = I18N[lang] || I18N.pt;
      var ek = _state.electrolyte;

      var html = '<div class="elec2-calc" id="elec2-calc">';
      /* Etapa 1 */
      html += ElecUI.renderStep1(lang, ek);
      /* Etapa 2 */
      if (ek) html += ElecUI.renderStep2(lang, ek, _state);
      /* Etapa 3: presets */
      if (ek) html += ElecUI.renderStep3(lang, ek, _state);
      /* Resultado */
      if (_state._calculated) {
        html += ElecUI.renderResult(lang, ek, _state);
      }
      html += '</div>';
      return html;
    }
  };

  /* ================================================================
     SEÇÃO 9 — CONTROLLER PRINCIPAL
  ================================================================ */

  /* ── Leitura canônica do idioma global — multi-fonte, sempre fresco ──
     Usa exatamente o mesmo sistema que o motor de Interações (_isES()).
     Prioridade: window.currentLang → window.lang → localStorage → URL → 'pt' */
  function _getGlobalLang () {
    /* 1. window.currentLang (gravado por setLang()) */
    if (typeof window.currentLang !== 'undefined' && window.currentLang) {
      return String(window.currentLang).trim().toLowerCase().startsWith('es') ? 'es' : 'pt';
    }
    /* 2. window.lang */
    if (typeof window.lang !== 'undefined' && window.lang) {
      return String(window.lang).trim().toLowerCase().startsWith('es') ? 'es' : 'pt';
    }
    /* 3. localStorage */
    try {
      var ls = localStorage.getItem('lang') || localStorage.getItem('idioma');
      if (ls) return String(ls).trim().toLowerCase().startsWith('es') ? 'es' : 'pt';
    } catch (e) {}
    /* 4. URL param */
    try {
      var params = new URLSearchParams(window.location.search);
      var l = params.get('lang');
      if (l) return String(l).trim().toLowerCase().startsWith('es') ? 'es' : 'pt';
    } catch (e) {}
    return 'pt';
  }

  function _detectLang () {
    return _getGlobalLang();
  }

  function _render () {
    var slot = document.getElementById('hub-elec-slot');
    if (!slot) return;
    /* Sempre garantir que o idioma está atualizado antes de renderizar */
    _state.lang = _getGlobalLang();
    slot.innerHTML = ElecUI.renderMain();
  }

  function _selectElectrolyte (key) {
    if (!ELECTROLYTES[key]) return;
    _state.electrolyte = key;
    _state._calculated = false;
    /* Auto-inferir nível de paciente global */
    _syncPatientData();
    _render();
    /* Scroll para etapa 2 */
    setTimeout(function () {
      var step2 = document.getElementById('elec2-step2');
      if (step2) step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function _syncPatientData () {
    /* Tenta ler peso e ClCr do estado global do app */
    try {
      if (window.patientData) {
        if (window.patientData.peso) _state.peso = parseFloat(window.patientData.peso);
        if (window.patientData.clcr) _state.clcr = parseFloat(window.patientData.clcr);
        if (window.patientData.sexo) _state.sexo = window.patientData.sexo;
        /* Auto-classificar ClCr */
        if (_state.clcr != null) {
          _state.clcrFiltro = _state.clcr < 30 ? 'lt30' : 'gte30';
        }
      }
    } catch (e) {}
  }

  function _setState (key, value) {
    /* Converte para número se apropriado */
    var numKeys = ['dose', 'volume', 'tempo', 'valor', 'peso', 'glicose', 'albumina',
                   'na', 'cl', 'hco3', 'ureia', 'ca', 'clcr'];
    if (numKeys.indexOf(key) >= 0 && value !== '' && value !== null) {
      value = parseFloat(value);
    }
    _state[key] = value;
    /* Re-renderizar sem limpar resultado */
    _render();
  }

  function _setField (key, value) {
    /* Bug-fix v2: preservar foco E cursor com requestAnimationFrame.
       slot.innerHTML mata o elemento ativo a cada keystroke.
       setSelectionRange síncrono falha porque o browser ainda não pintou o novo DOM.
       Solução: capturar antes do render, restaurar APÓS paint via rAF. */
    var activeId    = document.activeElement ? document.activeElement.id            : null;
    var activeStart = document.activeElement ? document.activeElement.selectionStart : null;
    var activeEnd   = document.activeElement ? document.activeElement.selectionEnd   : null;

    /* Atualiza estado (mantém string durante digitação — NÃO parsear aqui) */
    _state[key] = value;

    /* Log estruturado */
    console.log('[ELECTROLYTES_CURSOR] field=' + key +
      ' value=' + value +
      ' selectionStart=' + activeStart +
      ' selectionEnd='   + activeEnd   +
      ' restored=true');

    /* Re-renderiza */
    _render();

    /* Restaura foco + cursor APÓS o browser pintar o novo DOM */
    if (activeId) {
      requestAnimationFrame(function () {
        var el = document.getElementById(activeId);
        if (el && el.tagName === 'INPUT') {
          el.focus();
          var newLen = el.value ? el.value.length : 0;
          var s = (activeStart !== null && activeStart !== undefined)
                    ? Math.min(activeStart, newLen) : newLen;
          var e = (activeEnd   !== null && activeEnd   !== undefined)
                    ? Math.min(activeEnd,   newLen) : newLen;
          try { el.setSelectionRange(s, e); } catch (ex) {}
        }
      });
    }
  }

  function _calculate () {
    if (!_state.electrolyte) return;
    _state._calculated = true;
    _render();
    /* Scroll para resultado */
    setTimeout(function () {
      var res = document.getElementById('elec2-result-area');
      if (res) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function _reset () {
    var lang = _state.lang;
    _state = {
      step: 1, electrolyte: null,
      valor: null, peso: null, sexo: 'M', clcr: null,
      glicose: null, albumina: null, na: null, cl: null,
      hco3: null, ureia: null, ca: null,
      nivel: null, gravidade: null, sintomas: null, ecg: null,
      clcrFiltro: null, acesso: 'periph', acidbase: null,
      protocolo: null,
      dose: null, formulacao: null, volume: null, tempo: null, equipo: 'bomba',
      lang: lang, _calculated: false
    };
    _render();
  }

  function _copyResult () {
    var area = document.getElementById('elec2-result-area');
    if (!area) return;
    var text = area.innerText || area.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        _showCopied();
      });
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      _showCopied();
    }
  }

  function _showCopied () {
    var btn = document.querySelector('.elec2-action-btn');
    if (!btn) return;
    var t = I18N[_state.lang] || I18N.pt;
    var orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + t.copied;
    btn.classList.add('elec2-action-btn--copied');
    setTimeout(function () {
      btn.innerHTML = orig;
      btn.classList.remove('elec2-action-btn--copied');
    }, 2000);
  }

  /* ================================================================
     SEÇÃO 10 — INICIALIZAÇÃO E API PÚBLICA
  ================================================================ */

  /* ── Sincronizar idioma e re-renderizar ── */
  function _syncLangAndRender () {
    var newLang = _getGlobalLang();
    if (newLang !== _state.lang) {
      _state.lang = newLang;
      _render();
    }
  }

  /* ── Hook no setLang() global do app ──
     Aguarda setLang estar disponível e o intercepta para
     sincronizar o idioma da calculadora em tempo real. */
  function _hookSetLang () {
    var orig = window.setLang;
    if (typeof orig !== 'function') return false;
    window.setLang = function (lang) {
      orig.call(this, lang);
      /* Sync ElecCalc após setLang() propagar */
      setTimeout(function () { _syncLangAndRender(); }, 50);
    };
    return true;
  }

  function _init () {
    _state.lang = _detectLang();

    /* Ouvir evento customizado 'langChange' (emitido por alguns módulos) */
    document.addEventListener('langChange', function (e) {
      var l = (e && e.detail) ? String(e.detail).toLowerCase() : _getGlobalLang();
      _state.lang = l.startsWith('es') ? 'es' : 'pt';
      _render();
    });

    /* Hook no setLang() global — com retry se ainda não carregou */
    var hookAttempts = 0;
    var hookInterval = setInterval(function () {
      hookAttempts++;
      if (_hookSetLang()) {
        clearInterval(hookInterval);
      }
      if (hookAttempts > 50) clearInterval(hookInterval); /* max 5s */
    }, 100);

    /* Watcher de idioma — fallback para mudanças não capturadas pelo hook */
    setInterval(function _elecLangWatcher () {
      _syncLangAndRender();
    }, 800);
  }

  /* API pública exposta globalmente */
  window.ElecCalc = {
    selectElectrolyte: _selectElectrolyte,
    setState: _setState,
    setField: _setField,
    calculate: _calculate,
    reset: _reset,
    copyResult: _copyResult,
    getState: function () { return _state; },
    render: _render,
    init: _init,
    /* Expor constantes para testes */
    ELECTROLYTES: ELECTROLYTES,
    FORMULATIONS_DB: FORMULATIONS_DB,
    Formulas: Formulas,
    I18N: I18N
  };

  /* Inicializar quando DOM estiver pronto */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init();
  }

})();
