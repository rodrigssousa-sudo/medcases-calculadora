/* ============================================================
   MedCases Pro — Módulo: INFUSÕES CONTÍNUAS / DROGAS VASOATIVAS
   Expõe: window.INFUSOES_DRUGS_DB
   BUILD 284 — REFACTOR: Motor de cálculo de infusão migrado do
   index.html para este módulo. Todas as funções públicas ficam
   expostas em window.* para manter compatibilidade com chamadas
   inline do HTML (onclick, oninput, etc.).
   Schema completo (4-Block UI):
   {
     id, name, class, category:{pt,es}, color, colorTxt, icon,
     safetyLevel: 'warn' | 'danger'
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
     renalTable?: [ { labelPt, labelEs, range, cls, adjPt, adjEs } ]
     safety: {
       pregnancy: { grade, notePt, noteEs },
       lactation:  { safe, notePt, noteEs },
       renal:      { notePt, noteEs },
       hepatic:    { notePt, noteEs }
     }
     interactions?: [ { drug, effectPt, effectEs, severity:'low'|'mod'|'high' } ]
     dilution?: { volumePt, volumeEs, timePt, timeEs, notePt, noteEs }
   }
============================================================ */

window.INFUSOES_DRUGS_DB = [];

/* ============================================================
   INFUSÕES E BOMBAS — Motor de Cálculo Completo
   Dual Mode (Livre / Droga DB) | 4 Unidades | Conversor Reverso
============================================================ */

/* ── Estado interno do módulo ── */
let _infusionMode  = 'free';   /* 'free' | 'drug' */
let _infusionDrugs = [];       /* Array normalizado de drogas */
let _infusionFiltered = [];    /* Lista filtrada atual */

/* ── Base fallback de drogas vasoativas e infusão contínua ── */
/* ── Mapa de risco gestacional FDA ──────────────────────────────────────
   X = Contraindicado (teratogênico/letal fetal)
   D = Evidência positiva de risco — benefício pode superar risco
   C = Risco não pode ser descartado — usar com cautela
   ─────────────────────────────────────────────────────────────────── */
const BIC_PREG_RISK = {
  /* X — Contraindicados */
  'Nitroprussiato':  { cat:'X', label:'Cat. X — CONTRAINDICADO',
    alert_pt:'Nitroprussiato libera cianeto (CN⁻) que atravessa a placenta. Causa hipóxia fetal grave, acidose metabólica e óbito fetal. CONTRAINDICADO na gestação.',
    alert_es:'Nitroprussiato libera cianuro (CN⁻) que atraviesa la placenta. Causa hipoxia fetal grave, acidosis metabólica y óbito fetal. CONTRAINDICADO en el embarazo.' },
  /* D — Alto risco, uso com cautela extrema */
  'Fentanil':        { cat:'D', label:'Cat. D — Alto Risco Fetal',
    alert_pt:'Fentanil atravessa a placenta e pode causar depressão respiratória neonatal grave e síndrome de abstinência se uso prolongado. Avaliar rigorosamente o benefício/risco.',
    alert_es:'El fentanil atraviesa la placenta y puede causar depresión respiratoria neonatal grave y síndrome de abstinencia. Evaluar estrictamente beneficio/riesgo.' },
  'Midazolam':       { cat:'D', label:'Cat. D — Alto Risco Fetal',
    alert_pt:'Benzodiazepínico com travessia placentária. Risco de depressão do SNC neonatal e síndrome de abstinência. Evitar especialmente no 1º trimestre.',
    alert_es:'Benzodiazepina con paso placentario. Riesgo de depresión del SNC neonatal y síndrome de abstinencia. Evitar especialmente en el 1.er trimestre.' },
  'Amiodarona':      { cat:'D', label:'Cat. D — Alto Risco Fetal',
    alert_pt:'Amiodarona causa hipotiroidismo fetal e neonatal, bradicardia e atraso de crescimento. Uso apenas em arritmias com risco de vida sem alternativa mais segura.',
    alert_es:'La amiodarona causa hipotiroidismo fetal y neonatal, bradicardia y retraso del crecimiento. Usar solo en arritmias con riesgo vital sin alternativa más segura.' },
  'Propofol':        { cat:'D', label:'Cat. D — Alto Risco Fetal',
    alert_pt:'Propofol atravessa a placenta rapidamente. Pode causar depressão neonatal. Segurança para uso prolongado na gestação não estabelecida. Evitar infusão contínua.',
    alert_es:'El propofol cruza la placenta rápidamente. Puede causar depresión neonatal. Seguridad para uso prolongado en el embarazo no establecida. Evitar infusión continua.' },
  /* C — Usar com cautela */
  'Vasopressina':    { cat:'C', label:'Cat. C — Cautela',
    alert_pt:'Vasopressina/ADH pode reduzir fluxo uteroplacentário em doses elevadas. Usar a menor dose eficaz e monitorar bem-estar fetal continuamente.',
    alert_es:'La vasopresina/ADH puede reducir el flujo uteroplacentario en dosis altas. Usar la menor dosis eficaz y monitorear bienestar fetal continuamente.' },
  'Dopamina':        { cat:'C', label:'Cat. C — Cautela',
    alert_pt:'Dopamina em doses vasopressoras (>10 mcg/kg/min) pode causar vasoconstricção uteroplacentária e bradicardia fetal. Preferir Noradrenalina neste contexto.',
    alert_es:'La dopamina en dosis vasopresoras (>10 mcg/kg/min) puede causar vasoconstricción uteroplacentaria y bradicardia fetal. Preferir Noradrenalina en este contexto.' },
  'Morfina':         { cat:'C', label:'Cat. C — Cautela',
    alert_pt:'Opioide com travessia placentária. Risco de depressão respiratória neonatal ao nascimento e síndrome neonatal de abstinência se uso prolongado. Monitorar.',
    alert_es:'Opioide con paso placentario. Riesgo de depresión respiratoria neonatal al nacer y síndrome neonatal de abstinencia si uso prolongado. Monitorar.' },
};

/* ── Drogas que ATIVAM alerta obrigatório (X ou D) ── */
const BIC_PREG_BLOCK_CATS = new Set(['X','D']);

/* ═══════════════════════════════════════════════════════════════════════
   BIC_PRESETS — Protocolos Padrão-Ouro de Diluição
   Modelo: BaseDrugPreset { id, label, icon, ampoles, ampMg, totalMg,
           solvent, volMl, unitDefault, doseDefault, concFinal,
           obs_pt, obs_es, renalNote_pt, renalNote_es,
           weightNote_pt, weightNote_es, altDrug_pt, altDrug_es }
   ─────────────────────────────────────────────────────────────────────
   Baseado em: AMIB Diretrizes UTI 2023, SBC Choque Cardiogênico 2021,
   Micromedex DrugDex, UpToDate Continuous Infusion Protocols
═══════════════════════════════════════════════════════════════════════ */
const BIC_PRESETS = {

  /* ── VASOATIVOS ── */
  'Noradrenalina': [
    {
      id: 'nora_250',
      label: '4 amp / 250 mL',
      icon: 'fa-droplet',
      ampoles: 4, ampMg: 4, totalMg: 16,
      solvent: 'SG 5% ou SF 0,9%', volMl: 250,
      unitDefault: 'mcg/kg/min', doseDefault: 0.05,
      concFinal: '64 mcg/mL',
      obs_pt: '4 ampolas (4 mg cada) → 16 mg em 250 mL → 64 mcg/mL. Protocolo AMIB padrão UTI. Iniciar 0,05 mcg/kg/min e titular até PAM ≥65 mmHg.',
      obs_es: '4 ampollas (4 mg c/u) → 16 mg en 250 mL → 64 mcg/mL. Protocolo AMIB UCI estándar. Iniciar 0,05 mcg/kg/min y titular hasta PAM ≥65 mmHg.',
      renalNote_pt: 'Sem acúmulo renal significativo. Metabolização hepática e tecidual. Ajuste de dose pelo efeito hemodinâmico.',
      renalNote_es: 'Sin acumulación renal significativa. Metabolización hepática y tisular. Ajuste de dosis por efecto hemodinámico.',
      weightNote_pt: null, weightNote_es: null,
    },
    {
      id: 'nora_100',
      label: '4 amp / 100 mL',
      icon: 'fa-droplet',
      ampoles: 4, ampMg: 4, totalMg: 16,
      solvent: 'SG 5%', volMl: 100,
      unitDefault: 'mcg/kg/min', doseDefault: 0.05,
      concFinal: '160 mcg/mL',
      obs_pt: '4 ampolas → 16 mg em 100 mL → 160 mcg/mL (dupla concentração). Usar quando necessário restringir volume (SDRA, ICA).',
      obs_es: '4 ampollas → 16 mg en 100 mL → 160 mcg/mL (doble concentración). Usar en restricción de volumen (SDRA, ICA).',
      renalNote_pt: 'Sem acúmulo renal. Ajuste pelo efeito.',
      renalNote_es: 'Sin acumulación renal. Ajuste por efecto.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Adrenalina': [
    {
      id: 'adre_250',
      label: '4 amp / 250 mL',
      icon: 'fa-heart-pulse',
      ampoles: 4, ampMg: 1, totalMg: 4,
      solvent: 'SG 5%', volMl: 250,
      unitDefault: 'mcg/kg/min', doseDefault: 0.05,
      concFinal: '16 mcg/mL',
      obs_pt: '4 ampolas (1 mg cada) → 4 mg em 250 mL → 16 mcg/mL. Dose vasopressora: 0,1–1 mcg/kg/min. Monitorar FC, arritmias e lactato.',
      obs_es: '4 ampollas (1 mg c/u) → 4 mg en 250 mL → 16 mcg/mL. Dosis vasopresora: 0,1–1 mcg/kg/min. Monitorear FC, arritmias y lactato.',
      renalNote_pt: 'Metabolização enzimática (MAO/COMT). Sem ajuste renal necessário.',
      renalNote_es: 'Metabolización enzimática (MAO/COMT). Sin ajuste renal necesario.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Dobutamina': [
    {
      id: 'dobu_250',
      label: '1 amp / 250 mL',
      icon: 'fa-heart',
      ampoles: 1, ampMg: 250, totalMg: 250,
      solvent: 'SG 5% ou SF 0,9%', volMl: 250,
      unitDefault: 'mcg/kg/min', doseDefault: 5,
      concFinal: '1000 mcg/mL',
      obs_pt: '1 ampola (250 mg) → 250 mg em 250 mL → 1000 mcg/mL. Dose usual 2–20 mcg/kg/min. Titular pelo índice cardíaco e pressão de enchimento.',
      obs_es: '1 ampolla (250 mg) → 250 mg en 250 mL → 1000 mcg/mL. Dosis habitual 2–20 mcg/kg/min. Titular por índice cardíaco y presión de llenado.',
      renalNote_pt: 'Sem acúmulo renal. Metabolização hepática rápida (meia-vida ~2 min). Ajuste pelo efeito hemodinâmico.',
      renalNote_es: 'Sin acumulación renal. Metabolización hepática rápida (vida media ~2 min). Ajuste por efecto hemodinámico.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Dopamina': [
    {
      id: 'dopa_250',
      label: '1 amp / 250 mL',
      icon: 'fa-droplet',
      ampoles: 1, ampMg: 200, totalMg: 200,
      solvent: 'SG 5% ou SF 0,9%', volMl: 250,
      unitDefault: 'mcg/kg/min', doseDefault: 5,
      concFinal: '800 mcg/mL',
      obs_pt: '1 ampola (200 mg) → 200 mg em 250 mL → 800 mcg/mL. Efeitos dose-dependentes: 2–5 dopaminérgico / 5–10 β1 inotrópico / >10 α1 vasopressor.',
      obs_es: '1 ampolla (200 mg) → 200 mg en 250 mL → 800 mcg/mL. Efectos dosis-dependientes: 2–5 dopaminérgico / 5–10 β1 inotrópico / >10 α1 vasopresor.',
      renalNote_pt: '⚠️ Em insuficiência renal grave (ClCr <30), acúmulo de metabólitos ativos. Reduzir dose e monitorar. Não usar "dose renal" profilática — evidência insuficiente.',
      renalNote_es: '⚠️ En insuficiencia renal grave (ClCr <30), acumulación de metabolitos activos. Reducir dosis y monitorear. No usar "dosis renal" profiláctica — evidencia insuficiente.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Milrinona': [
    {
      id: 'milri_100',
      label: '1 amp / 100 mL',
      icon: 'fa-heart-pulse',
      ampoles: 1, ampMg: 10, totalMg: 10,
      solvent: 'SF 0,9%', volMl: 100,
      unitDefault: 'mcg/kg/min', doseDefault: 0.375,
      concFinal: '100 mcg/mL',
      obs_pt: '1 ampola (10 mg) em 100 mL SF → 100 mcg/mL. Manutenção: 0,375–0,75 mcg/kg/min. Sem ataque em UTI (hipotensão). Usar em IC com baixo DC.',
      obs_es: '1 ampolla (10 mg) en 100 mL SF → 100 mcg/mL. Mantenimiento: 0,375–0,75 mcg/kg/min. Sin carga en UCI (hipotensión). Usar en IC con bajo GC.',
      renalNote_pt: '🚨 AJUSTE RENAL OBRIGATÓRIO: Milrinona é ~85% excretada inalterada na urina. ClCr 20–50: reduzir para 0,2 mcg/kg/min. ClCr <20: reduzir para 0,1–0,2 mcg/kg/min. Risco de acúmulo e toxicidade (arritmias, hipotensão).',
      renalNote_es: '🚨 AJUSTE RENAL OBLIGATORIO: Milrinona es ~85% excretada sin cambios en orina. ClCr 20–50: reducir a 0,2 mcg/kg/min. ClCr <20: reducir a 0,1–0,2 mcg/kg/min. Riesgo de acumulación y toxicidad (arritmias, hipotensión).',
      weightNote_pt: '⚠️ Usar Peso Corporal Ideal (PCI) em pacientes obesos para evitar superdosagem. PCI homem ≈ 50 + 2,3 × (altura cm − 152)/2,54. PCI mulher ≈ 45,5 + 2,3 × (altura cm − 152)/2,54.',
      weightNote_es: '⚠️ Usar Peso Corporal Ideal (PCI) en pacientes obesos para evitar sobredosis. PCI hombre ≈ 50 + 2,3 × (talla cm − 152)/2,54. PCI mujer ≈ 45,5 + 2,3 × (talla cm − 152)/2,54.',
    }
  ],

  'Nitroprussiato': [
    {
      id: 'nitro_250',
      label: '1 amp / 250 mL',
      icon: 'fa-shield-halved',
      ampoles: 1, ampMg: 50, totalMg: 50,
      solvent: 'SG 5%', volMl: 250,
      unitDefault: 'mcg/kg/min', doseDefault: 0.5,
      concFinal: '200 mcg/mL',
      obs_pt: '50 mg em 250 mL SG 5% → 200 mcg/mL. PROTEGER DA LUZ (folha aluminizada). Iniciar 0,5 mcg/kg/min. Limite absoluto: 10 mcg/kg/min / 72h. Monitorar tiocianato se >72h.',
      obs_es: '50 mg en 250 mL SG 5% → 200 mcg/mL. PROTEGER DE LA LUZ (papel aluminio). Iniciar 0,5 mcg/kg/min. Límite absoluto: 10 mcg/kg/min / 72h. Monitorear tiocianato si >72h.',
      renalNote_pt: '⚠️ Metabólito tiocianato acumula em IR. Em ClCr <30 ou hemodiálise: usar dose mínima eficaz (<3 mcg/kg/min) e monitorar nível sérico de tiocianato (limite: 100 mcg/mL).',
      renalNote_es: '⚠️ El metabolito tiocianato se acumula en IR. En ClCr <30 o hemodiálisis: usar dosis mínima eficaz (<3 mcg/kg/min) y monitorizar tiocianato sérico (límite: 100 mcg/mL).',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Nitroglicerina': [
    {
      id: 'nitrog_250',
      label: '1 amp / 250 mL',
      icon: 'fa-heart',
      ampoles: 1, ampMg: 50, totalMg: 50,
      solvent: 'SG 5%', volMl: 250,
      unitDefault: 'mcg/min', doseDefault: 10,
      concFinal: '200 mcg/mL',
      obs_pt: '50 mg em 250 mL SG 5% → 200 mcg/mL. Iniciar 5–10 mcg/min. Incrementar 5–10 mcg/min a cada 3–5 min até alívio de angina/congestão. Usar equipo não-adsorvente.',
      obs_es: '50 mg en 250 mL SG 5% → 200 mcg/mL. Iniciar 5–10 mcg/min. Incrementar 5–10 mcg/min cada 3–5 min hasta alivio de angina/congestión. Usar equipo no adsorbente.',
      renalNote_pt: 'Sem ajuste renal necessário. Metabolização hepática/vascular rápida.',
      renalNote_es: 'Sin ajuste renal necesario. Metabolización hepática/vascular rápida.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Amiodarona': [
    {
      id: 'amio_maint',
      label: 'Manutenção 900mg/24h',
      icon: 'fa-wave-square',
      ampoles: 6, ampMg: 150, totalMg: 900,
      solvent: 'SG 5%', volMl: 500,
      unitDefault: 'mg/kg/h', doseDefault: 0.5,
      concFinal: '1,8 mg/mL',
      obs_pt: '6 ampolas (900 mg) em 500 mL SG 5% → 1,8 mg/mL. Manutenção: 0,5 mg/kg/h por 18h após ataque. Monitorar QTc >500ms, TSH, TGO/TGP, fotossensibilidade. Usar equipo opaco.',
      obs_es: '6 ampollas (900 mg) en 500 mL SG 5% → 1,8 mg/mL. Mantenimiento: 0,5 mg/kg/h por 18h tras carga. Monitorar QTc >500ms, TSH, TGO/TGP, fotosensibilidad. Usar equipo opaco.',
      renalNote_pt: 'Sem ajuste renal. Excreção biliar/fecal predominante. Acúmulo tecidual (meia-vida 40–55 dias).',
      renalNote_es: 'Sin ajuste renal. Excreción biliar/fecal predominante. Acumulación tisular (vida media 40–55 días).',
      weightNote_pt: null, weightNote_es: null,
    },
    {
      id: 'amio_attack',
      label: 'Ataque 300mg rápido',
      icon: 'fa-bolt',
      ampoles: 2, ampMg: 150, totalMg: 300,
      solvent: 'SG 5%', volMl: 100,
      unitDefault: 'mg/kg/h', doseDefault: 1,
      concFinal: '3 mg/mL',
      obs_pt: '2 ampolas (300 mg) em 100 mL SG 5% → 3 mg/mL. Ataque: infundir em 60 min. Somente em FV/TV sem pulso refratária (protocolo ACLS). Não usar via periférica.',
      obs_es: '2 ampollas (300 mg) en 100 mL SG 5% → 3 mg/mL. Carga: infundir en 60 min. Solo en FV/TV sin pulso refractaria (protocolo ACLS). No usar vía periférica.',
      renalNote_pt: 'Sem ajuste renal.',
      renalNote_es: 'Sin ajuste renal.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Propofol': [
    {
      id: 'prop_sedacao',
      label: '200mg pronto / 20mL',
      icon: 'fa-moon',
      ampoles: 1, ampMg: 200, totalMg: 200,
      solvent: '(emulsão pronta — não diluir)', volMl: 20,
      unitDefault: 'mg/kg/h', doseDefault: 1,
      concFinal: '10 mg/mL',
      obs_pt: '1 ampola 200 mg/20 mL (10 mg/mL) — emulsão pronta, não diluir. Sedação leve: 0,5–1 mg/kg/h. Sedação profunda: 1–4 mg/kg/h. Limite ABSOLUTO: 4 mg/kg/h — risco de SIP (Síndrome de Infusão de Propofol).',
      obs_es: '1 ampolla 200 mg/20 mL (10 mg/mL) — emulsión lista, no diluir. Sedación leve: 0,5–1 mg/kg/h. Sedación profunda: 1–4 mg/kg/h. Límite ABSOLUTO: 4 mg/kg/h — riesgo de SIP (Síndrome de Infusión de Propofol).',
      renalNote_pt: 'Sem ajuste renal para o propofol. Monitorar triglicerídeos (lipídio do excipiente) em infusões >48h. Considerar trocar para Midazolam se SIP.',
      renalNote_es: 'Sin ajuste renal para el propofol. Monitorar triglicéridos (lípido excipiente) en infusiones >48h. Considerar cambio a Midazolam si SIP.',
      weightNote_pt: '⚠️ Usar Peso Corporal Ideal (PCI) em obesos para cálculo da dose de propofol — risco de SIP aumenta exponencialmente com superdosagem. PCI: homem 50 + 2,3×(pol>60); mulher 45,5 + 2,3×(pol>60).',
      weightNote_es: '⚠️ Usar Peso Corporal Ideal (PCI) en obesos para calcular la dosis de propofol — riesgo de SIP aumenta exponencialmente con sobredosis.',
    }
  ],

  'Midazolam': [
    {
      id: 'mida_uti',
      label: '15mg / 100mL SF',
      icon: 'fa-moon',
      ampoles: 1, ampMg: 15, totalMg: 15,
      solvent: 'SF 0,9%', volMl: 100,
      unitDefault: 'mg/kg/h', doseDefault: 0.04,
      concFinal: '0,15 mg/mL',
      obs_pt: '1 ampola (15 mg) em 100 mL SF 0,9% → 0,15 mg/mL. Manutenção: 0,02–0,1 mg/kg/h. RASS alvo –2 a –1. Atenção em acúmulo renal e hepático (metabólito ativo 1-OH-midazolam).',
      obs_es: '1 ampolla (15 mg) en 100 mL SF 0,9% → 0,15 mg/mL. Mantenimiento: 0,02–0,1 mg/kg/h. RASS objetivo –2 a –1. Atención en acumulación renal y hepática (metabolito activo 1-OH-midazolam).',
      renalNote_pt: '🚨 ATENÇÃO RENAL: Metabólito ativo 1-OH-midazolam acumula em IR. Em ClCr <30: reduzir dose em 50% e prolongar intervalo de avaliação do RASS. Considerar trocar para Propofol (sem acúmulo renal).',
      renalNote_es: '🚨 ATENCIÓN RENAL: El metabolito activo 1-OH-midazolam se acumula en IR. En ClCr <30: reducir dosis 50% y prolongar intervalo de evaluación del RASS. Considerar cambio a Propofol (sin acumulación renal).',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Fentanil': [
    {
      id: 'fent_uti',
      label: '0,5mg / 100mL SF',
      icon: 'fa-droplet',
      ampoles: 1, ampMg: 0.5, totalMg: 0.5,
      solvent: 'SF 0,9%', volMl: 100,
      unitDefault: 'mcg/kg/h', doseDefault: 1,
      concFinal: '5 mcg/mL',
      obs_pt: '1 ampola (0,5 mg / 500 mcg) em 100 mL SF → 5 mcg/mL. Analgesia UTI: 0,7–10 mcg/kg/h. Preferível à Morfina em IR (sem acúmulo significativo de metabólitos ativos).',
      obs_es: '1 ampolla (0,5 mg / 500 mcg) en 100 mL SF → 5 mcg/mL. Analgesia UCI: 0,7–10 mcg/kg/h. Preferible a Morfina en IR (sin acumulación significativa de metabolitos activos).',
      renalNote_pt: '✅ Fentanil é o opioide preferido em IR: seus metabólitos (norfentanil) têm pouca atividade farmacológica. Em ClCr <30: iniciar na dose mínima e monitorar sedação/depressão respiratória. Ajuste pelo efeito.',
      renalNote_es: '✅ Fentanil es el opioide preferido en IR: sus metabolitos (norfentanil) tienen escasa actividad farmacológica. En ClCr <30: iniciar en dosis mínima y monitorear sedación/depresión respiratoria.',
      weightNote_pt: '⚠️ Em obesos, usar Peso Corporal Ajustado (PCA) para opioides: PCA = PCI + 0,4 × (Peso Real − PCI). Evitar uso do peso real — risco de superdosagem e depressão respiratória.',
      weightNote_es: '⚠️ En obesos, usar Peso Corporal Ajustado (PCA) para opioides: PCA = PCI + 0,4 × (Peso Real − PCI). Evitar peso real — riesgo de sobredosis y depresión respiratoria.',
    }
  ],

  'Morfina': [
    {
      id: 'morf_uti',
      label: '10mg / 100mL SF',
      icon: 'fa-droplet',
      ampoles: 1, ampMg: 10, totalMg: 10,
      solvent: 'SF 0,9%', volMl: 100,
      unitDefault: 'mg/kg/h', doseDefault: 0.02,
      concFinal: '0,1 mg/mL',
      obs_pt: '1 ampola (10 mg) em 100 mL SF → 0,1 mg/mL. Dose usual: 1–5 mg/h. Titular pela escala de dor (NRS/BPS). Monitorar rigidez torácica em bolos.',
      obs_es: '1 ampolla (10 mg) en 100 mL SF → 0,1 mg/mL. Dosis habitual: 1–5 mg/h. Titular por escala de dolor (NRS/BPS). Monitorar rigidez torácica en bolos.',
      renalNote_pt: '🚨 CONTRAINDICADO EM IR GRAVE: Metabólito morfina-6-glucuronídeo (M6G) é 4-10× mais potente que a morfina e acumula em ClCr <30. Causa sedação prolongada, mioclonias e depressão respiratória. SUBSTITUIR por Fentanil.',
      renalNote_es: '🚨 CONTRAINDICADO EN IR GRAVE: El metabolito morfina-6-glucurónido (M6G) es 4–10× más potente que la morfina y se acumula en ClCr <30. Causa sedación prolongada, mioclonías y depresión respiratoria. SUSTITUIR por Fentanil.',
      weightNote_pt: '⚠️ Usar Peso Corporal Ajustado em obesos. Evitar peso real.',
      weightNote_es: '⚠️ Usar Peso Corporal Ajustado en obesos. Evitar peso real.',
    }
  ],

  'Heparina': [
    {
      id: 'hep_250',
      label: '25.000 UI / 250mL SF',
      icon: 'fa-tint-slash',
      ampoles: 1, ampMg: 25000, totalMg: 25000,
      solvent: 'SF 0,9%', volMl: 250,
      unitDefault: 'mcg/kg/h', doseDefault: 18,
      concFinal: '100 UI/mL',
      obs_pt: '25.000 UI em 250 mL SF → 100 UI/mL. Dose inicial: 18 UI/kg/h. Ajustar pelo TTPa (alvo 60–100s) a cada 6h nas primeiras 24h. Monitorar contagem de plaquetas (HITT).',
      obs_es: '25.000 UI en 250 mL SF → 100 UI/mL. Dosis inicial: 18 UI/kg/h. Ajustar por TTPa (objetivo 60–100s) cada 6h en las primeras 24h. Monitorar plaquetas (HITT).',
      renalNote_pt: 'Heparina não é excretada renalmente (metabolização reticuloendotelial). Sem ajuste de dose por ClCr. Monitorar TTPa com maior frequência em IR (possível alteração na coagulação).',
      renalNote_es: 'La heparina no se excreta renalmente (metabolización reticuloendotelial). Sin ajuste de dosis por ClCr. Monitorar TTPa con mayor frecuencia en IR.',
      weightNote_pt: '⚠️ Em obesos, usar Peso Corporal Real com limite de 165 kg para cálculo da dose de ataque. Para manutenção, usar Peso Ajustado. Consultar protocolo institucional.',
      weightNote_es: '⚠️ En obesos, usar Peso Corporal Real con límite de 165 kg para dosis de carga. Para mantenimiento, usar Peso Ajustado. Consultar protocolo institucional.',
    }
  ],

  'Vasopressina': [
    {
      id: 'vaso_100',
      label: '20 UI / 100mL SG5%',
      icon: 'fa-droplet',
      ampoles: 1, ampMg: 20, totalMg: 20,
      solvent: 'SG 5%', volMl: 100,
      unitDefault: 'mcg/min', doseDefault: 0.03,
      concFinal: '0,2 UI/mL',
      obs_pt: '20 UI em 100 mL SG 5% → 0,2 UI/mL. Dose fixa: 0,03–0,04 UI/min (NÃO titular pelo efeito). Usar como segundo vasopressor em choque séptico refratário à noradrenalina. Não ultrapassar 0,04 UI/min.',
      obs_es: '20 UI en 100 mL SG 5% → 0,2 UI/mL. Dosis fija: 0,03–0,04 UI/min (NO titular por efecto). Usar como segundo vasopresor en choque séptico refractario a noradrenalina. No superar 0,04 UI/min.',
      renalNote_pt: 'Vasopressina pode reduzir fluxo renal em doses elevadas. Em IR, não há ajuste necessário, mas monitorar oligúria e pressão de perfusão renal.',
      renalNote_es: 'La vasopresina puede reducir el flujo renal en dosis altas. En IR, no hay ajuste necesario, pero monitorear oliguria y presión de perfusión renal.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Insulina Regular': [
    {
      id: 'ins_iti',
      label: '100 UI / 100mL SF',
      icon: 'fa-syringe',
      ampoles: 1, ampMg: 100, totalMg: 100,
      solvent: 'SF 0,9%', volMl: 100,
      unitDefault: 'ml/h', doseDefault: 2,
      concFinal: '1 UI/mL',
      obs_pt: '100 UI de insulina regular em 100 mL SF → 1 UI/mL. Iniciar conforme protocolo de insulinoterapia intensiva. Alvo glicêmico UTI: 140–180 mg/dL. Monitorar glicemia horária nas primeiras 6h.',
      obs_es: '100 UI de insulina regular en 100 mL SF → 1 UI/mL. Iniciar según protocolo de insulinoterapia intensiva. Objetivo glucémico UCI: 140–180 mg/dL. Monitorar glucemia horaria en las primeras 6h.',
      renalNote_pt: '⚠️ Em IR, a insulina tem meia-vida prolongada (rim é responsável por ~30–40% da degradação). Risco elevado de hipoglicemia. Monitorar glicemia a cada 30–60 min e reduzir taxa de infusão conforme resposta.',
      renalNote_es: '⚠️ En IR, la insulina tiene vida media prolongada (riñón es responsable de ~30–40% de la degradación). Riesgo elevado de hipoglucemia. Monitorar glucemia cada 30–60 min.',
      weightNote_pt: null, weightNote_es: null,
    }
  ],

  'Vancomicina': [
    {
      id: 'vanco_500',
      label: '500mg / 100mL SF',
      icon: 'fa-bacterium',
      ampoles: 1, ampMg: 500, totalMg: 500,
      solvent: 'SF 0,9% ou SG 5%', volMl: 100,
      unitDefault: 'mg/kg/h', doseDefault: 0.5,
      concFinal: '5 mg/mL',
      obs_pt: '500 mg em 100 mL SF → 5 mg/mL. Infundir em ≥60 min (síndrome do homem vermelho se rápido). Dose alvo: AUC/MIC 400–600. Monitorar vancocinemia (meta: 15–20 mcg/mL ou AUC).',
      obs_es: '500 mg en 100 mL SF → 5 mg/mL. Infundir en ≥60 min (síndrome del hombre rojo si rápido). Dosis objetivo: AUC/MIC 400–600. Monitorar vancocinemia (meta: 15–20 mcg/mL o AUC).',
      renalNote_pt: '🚨 AJUSTE RENAL CRÍTICO: Vancomicina é ~90% excretada pelos rins. ClCr 30–50: estender intervalo para 24–36h. ClCr 10–29: 48–72h. Hemodiálise: dose após cada sessão. Monitorar nefrotoxicidade e ototoxicidade.',
      renalNote_es: '🚨 AJUSTE RENAL CRÍTICO: Vancomicina es ~90% excretada por riñones. ClCr 30–50: extender intervalo a 24–36h. ClCr 10–29: 48–72h. Hemodiálisis: dosis después de cada sesión.',
      weightNote_pt: '⚠️ Usar Peso Real para dose de ataque (15 mg/kg). Para manutenção em obesos, usar Peso Ajustado para evitar toxicidade. Consultar farmacêutico clínico.',
      weightNote_es: '⚠️ Usar Peso Real para dosis de carga (15 mg/kg). Para mantenimiento en obesos, usar Peso Ajustado para evitar toxicidad. Consultar farmacéutico clínico.',
    }
  ],
};

/* ─── Dados de inteligência contextual por droga ────────────────────────
   Notas de PESO IDEAL, contexto de gestação (além do BIC_PREG_RISK),
   e flags de categoria renal por droga (extractados acima dos presets)
─────────────────────────────────────────────────────────────────────── */

/** Retorna o preset ativo para a droga corrente, ou null */
function _bicGetActivePreset() {
  if (!_bicSelectedDrug) return null;
  const presets = BIC_PRESETS[_bicSelectedDrug.nome];
  if (!presets || !presets.length) return null;
  /* Retorna o preset atualmente selecionado (via _bicActivePresetId) ou o primeiro */
  if (_bicActivePresetId) {
    const found = presets.find(p => p.id === _bicActivePresetId);
    if (found) return found;
  }
  return presets[0];
}

/** ID do preset atualmente ativo */
let _bicActivePresetId = null;

const INFUSION_FALLBACK_DB = [
  { nome:'Noradrenalina',   nome_es:'Noradrenalina',   ampolaMg:4,   diluenteMl:250, diluente:'SG 5%',
    doseInicial:0.05, unidade:'mcg/kg/min',
    obs_pt:'Dose usual: 0,05–1 mcg/kg/min. Titular até PAM alvo (≥65 mmHg).',
    obs_es:'Dosis habitual: 0,05–1 mcg/kg/min. Titular hasta PAM objetivo (≥65 mmHg).' },
  { nome:'Adrenalina',      nome_es:'Adrenalina',      ampolaMg:1,   diluenteMl:250, diluente:'SG 5%',
    doseInicial:0.05, unidade:'mcg/kg/min',
    obs_pt:'Vasoconstrição + inotropismo. Monitorar FC, ECG e lactato.',
    obs_es:'Vasoconstricción + inotropismo. Monitorar FC, ECG y lactato.' },
  { nome:'Dobutamina',      nome_es:'Dobutamina',      ampolaMg:250, diluenteMl:250, diluente:'SG 5% ou SF 0,9%',
    doseInicial:5,    unidade:'mcg/kg/min',
    obs_pt:'Dose usual: 2–20 mcg/kg/min. Titular conforme DC e PA.',
    obs_es:'Dosis habitual: 2–20 mcg/kg/min. Titular según GC y PA.' },
  { nome:'Dopamina',        nome_es:'Dopamina',        ampolaMg:200, diluenteMl:250, diluente:'SG 5% ou SF 0,9%',
    doseInicial:5,    unidade:'mcg/kg/min',
    obs_pt:'2–5: renal/dopaminérgico. 5–10: β1 (inotrópico). >10: α1 (vasopressor).',
    obs_es:'2–5: renal/dopaminérgico. 5–10: β1 (inotrópico). >10: α1 (vasopresor).' },
  { nome:'Milrinona',       nome_es:'Milrinona',       ampolaMg:10,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:0.375, unidade:'mcg/kg/min',
    obs_pt:'Dose manutenção: 0,375–0,75 mcg/kg/min. Atenção em insuficiência renal.',
    obs_es:'Dosis mantenimiento: 0,375–0,75 mcg/kg/min. Precaución en insuficiencia renal.' },
  { nome:'Vasopressina',    nome_es:'Vasopresina',     ampolaMg:20,  diluenteMl:100, diluente:'SG 5%',
    doseInicial:0.04, unidade:'mcg/min',
    obs_pt:'Dose fixa: 0,03–0,04 U/min (não titular por PA). Uso em choque refratário.',
    obs_es:'Dosis fija: 0,03–0,04 U/min (no titular por PA). Uso en choque refractario.' },
  { nome:'Nitroprussiato',  nome_es:'Nitroprussiato',  ampolaMg:50,  diluenteMl:250, diluente:'SG 5%',
    doseInicial:0.5,  unidade:'mcg/kg/min',
    obs_pt:'Iniciar 0,5 mcg/kg/min. Proteger da luz. Limite: 10 mcg/kg/min / 72h (toxicidade CN⁻).',
    obs_es:'Iniciar 0,5 mcg/kg/min. Proteger de la luz. Límite: 10 mcg/kg/min / 72h (toxicidad CN⁻).' },
  { nome:'Nitroglicerina',  nome_es:'Nitroglicerina',  ampolaMg:50,  diluenteMl:250, diluente:'SG 5%',
    doseInicial:5,    unidade:'mcg/min',
    obs_pt:'Iniciar 5–10 mcg/min. Aumentar 5 mcg/min a cada 3–5 min conforme PA.',
    obs_es:'Iniciar 5–10 mcg/min. Aumentar 5 mcg/min cada 3–5 min según PA.' },
  { nome:'Amiodarona',      nome_es:'Amiodarona',      ampolaMg:150, diluenteMl:100, diluente:'SG 5%',
    doseInicial:1,    unidade:'mg/kg/h',
    obs_pt:'Manutenção: 0,5 mg/kg/h por 18h. Monitorar QTc, TSH, TGO, TGP.',
    obs_es:'Mantenimiento: 0,5 mg/kg/h por 18h. Monitorar QTc, TSH, TGO, TGP.' },
  { nome:'Heparina',        nome_es:'Heparina',        ampolaMg:250, diluenteMl:250, diluente:'SF 0,9%',
    doseInicial:18,   unidade:'mcg/kg/h',
    obs_pt:'18 UI/kg/h. Ajustar conforme TTPa alvo 60–100s. Monitorar PTTR.',
    obs_es:'18 UI/kg/h. Ajustar según TTPa objetivo 60–100s. Monitorar PTTR.' },
  { nome:'Propofol',        nome_es:'Propofol',        ampolaMg:200, diluenteMl:20,  diluente:'(emulsão pronta)',
    doseInicial:0.5,  unidade:'mg/kg/h',
    obs_pt:'Sedação leve: 0,5–1 mg/kg/h. Sedação profunda: 1–4 mg/kg/h. Limite: 4 mg/kg/h (SIP).',
    obs_es:'Sedación leve: 0,5–1 mg/kg/h. Sedación profunda: 1–4 mg/kg/h. Límite: 4 mg/kg/h (SIP).' },
  { nome:'Midazolam',       nome_es:'Midazolam',       ampolaMg:15,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:0.02, unidade:'mg/kg/h',
    obs_pt:'Manutenção: 0,02–0,1 mg/kg/h. RASS alvo. Atenção em acúmulo renal/hepático.',
    obs_es:'Mantenimiento: 0,02–0,1 mg/kg/h. RASS objetivo. Atención en acumulación renal/hepática.' },
  { nome:'Morfina',         nome_es:'Morfina',         ampolaMg:10,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:1,    unidade:'mg/kg/h',
    obs_pt:'Analgesia em UTI: 1–5 mg/h. Titular conforme escala de dor. Monitorar depressão respiratória.',
    obs_es:'Analgesia en UCI: 1–5 mg/h. Titular según escala de dolor. Monitorar depresión respiratoria.' },
  { nome:'Fentanil',        nome_es:'Fentanil',        ampolaMg:0.5, diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:0.7,  unidade:'mcg/kg/h',
    obs_pt:'Dose usual: 0,7–10 mcg/kg/h. Preferível em insuficiência renal.',
    obs_es:'Dosis habitual: 0,7–10 mcg/kg/h. Preferible en insuficiencia renal.' },
  { nome:'Insulina Regular',nome_es:'Insulina Regular',ampolaMg:100, diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:1,    unidade:'ml/h',
    obs_pt:'Protocolo de insulina IV: 1 UI/mL. Ajustar conforme glicemia horária.',
    obs_es:'Protocolo de insulina IV: 1 UI/mL. Ajustar según glucemia horaria.' },
  { nome:'Vancomicina',     nome_es:'Vancomicina',     ampolaMg:500, diluenteMl:100, diluente:'SF 0,9% ou SG 5%',
    doseInicial:15,   unidade:'mg/kg/h',
    obs_pt:'15 mg/kg 8–12/12h. Infundir ≥60 min. AUC/MIC alvo 400–600.',
    obs_es:'15 mg/kg 8–12/12h. Infundir ≥60 min. AUC/MIC objetivo 400–600.' },
];

/* ═══════════════════════════════════════════════════════════════════════
   AUTOCOMPLETE BIC — campo interativo de seleção de droga
   Estado: _bicSelectedDrug (objeto da droga selecionada ou null)
           _bicDropdownIdx  (índice destacado no dropdown)
═══════════════════════════════════════════════════════════════════════ */
let _bicSelectedDrug = null;
let _bicDropdownIdx  = -1;
let _bicPendingDrug  = null;   /* droga aguardando confirmação do alerta */

/** Abre o dropdown com a lista filtrada */
function bicOpenDropdown() {
  const inp = document.getElementById('inf-drug-search');
  bicHandleDrugInput(inp ? inp.value : '');
}

/** Trata digitação no autocomplete */
function bicHandleDrugInput(val) {
  const clearBtn = document.getElementById('inf-drug-clear');
  if (clearBtn) clearBtn.classList.toggle('show', val.length > 0);

  const q = val.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const list = !q
    ? [..._infusionDrugs]
    : _infusionDrugs.filter(d => {
        const n  = d.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        const ne = d.nome_es.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
        return n.includes(q) || ne.includes(q);
      });
  _infusionFiltered = list;
  _bicDropdownIdx = -1;
  _bicRenderDropdown(list, q);
}

/** Renderiza os itens do dropdown */
function _bicRenderDropdown(list, highlight) {
  const box = document.getElementById('inf-drug-dropdown');
  const inp = document.getElementById('inf-drug-search');
  if (!box) return;

  if (!list.length) {
    box.innerHTML = '<div style="padding:12px 14px;font-size:12px;color:var(--text-muted);">Nenhuma droga encontrada</div>';
    box.classList.add('open');
    if (inp) inp.setAttribute('aria-expanded','true');
    return;
  }

  const isPreg = window.patientData && window.patientData.pregnant === true;
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';

  box.innerHTML = list.map((drug, i) => {
    const nome = lang === 'es' ? drug.nome_es : drug.nome;
    const risk = BIC_PREG_RISK[drug.nome];
    const riskBadge = risk
      ? `<span class="inf-dropdown-item-risk risk-${risk.cat.toLowerCase()}" title="${risk.label}">${risk.cat}</span>`
      : '';
    const pregWarn = (isPreg && risk && BIC_PREG_BLOCK_CATS.has(risk.cat))
      ? `<i class="fa-solid fa-person-pregnant" style="color:#F87171;font-size:10px;" title="Risco gestacional"></i>`
      : '';

    /* Destaca o match da busca */
    let nomeHl = nome;
    if (highlight) {
      const re = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
      nomeHl = nome.replace(re, '<em>$1</em>');
    }
    const meta = `${drug.ampolaMg || '?'}mg / ${drug.diluenteMl || '?'}mL`;
    return `<div class="inf-dropdown-item" role="option" data-idx="${i}"
      onclick="bicSelectDrug(${i})" onmouseenter="bicHoverItem(${i})">
      <div class="inf-dropdown-item-name">${nomeHl} ${pregWarn}</div>
      <div class="inf-dropdown-item-meta">${meta}</div>
      ${riskBadge}
    </div>`;
  }).join('');

  box.classList.add('open');
  if (inp) inp.setAttribute('aria-expanded','true');
}

/** Hover item */
function bicHoverItem(idx) { _bicDropdownIdx = idx; }

/** Seleção de droga pelo índice */
function bicSelectDrug(idx) {
  const drug = _infusionFiltered[idx];
  if (!drug) return;

  bicCloseDropdown();

  /* Verifica risco gestacional ANTES de aplicar */
  const isPreg = window.patientData && window.patientData.pregnant === true;
  const risk   = BIC_PREG_RISK[drug.nome];

  if (isPreg && risk && BIC_PREG_BLOCK_CATS.has(risk.cat)) {
    _bicPendingDrug = drug;
    bicShowAlert(drug, risk);
    return; /* Aguarda decisão do médico */
  }

  /* Sem alerta — aplica direto */
  _bicApplyDrug(drug);
}

/** Aplica a droga selecionada nos campos */
function _bicApplyDrug(drug) {
  _bicSelectedDrug   = drug;
  _bicActivePresetId = null; /* Reset preset ao trocar de droga */

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  const nome = lang === 'es' ? drug.nome_es : drug.nome;

  /* Atualiza input visual */
  const inp = document.getElementById('inf-drug-search');
  if (inp) {
    inp.value = nome;
    inp.setAttribute('aria-expanded','false');
  }
  const clearBtn = document.getElementById('inf-drug-clear');
  if (clearBtn) clearBtn.classList.add('show');

  /* Sincroniza select oculto para compatibilidade com applyInfusionDrug() */
  const sel = document.getElementById('inf-drug-select');
  if (sel) {
    sel.innerHTML = `<option value="0">${nome}</option>`;
    sel.value = '0';
  }
  _infusionFiltered = [drug];

  /* ── Aplica campos base da droga ── */
  applyInfusionDrug();

  /* ── Renderiza presets de protocolo para esta droga ── */
  bicRenderPresets(drug);

  /* ── Renderiza contexto clínico com preset padrão ── */
  const firstPreset = BIC_PRESETS[drug.nome] ? BIC_PRESETS[drug.nome][0] : null;
  bicRenderClinicalContext(drug, firstPreset);

  /* Se houver preset único, aplica automaticamente para dar mais contexto */
  const presets = BIC_PRESETS[drug.nome];
  if (presets && presets.length === 1) {
    /* Apenas pré-seleciona visualmente, não sobrescreve campos (usuário decide) */
    /* Aplicamos só após 50ms para não conflitar com applyInfusionDrug() */
    setTimeout(() => bicApplyPreset(drug.nome, presets[0].id), 50);
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   BIC PRESETS — Renderização e Aplicação de Protocolos
═══════════════════════════════════════════════════════════════════════ */

/**
 * Renderiza os ActionChips de presets para a droga selecionada.
 * Chamado por _bicApplyDrug() sempre que uma droga é escolhida.
 */
function bicRenderPresets(drug) {
  const section   = document.getElementById('bic-preset-section');
  const chipsWrap = document.getElementById('bic-preset-chips');
  const badge     = document.getElementById('bic-preset-badge');
  if (!section || !chipsWrap) return;

  const presets = BIC_PRESETS[drug.nome];

  /* Oculta se não há presets para esta droga */
  if (!presets || !presets.length) {
    section.classList.remove('show');
    return;
  }

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';

  /* Monta os chips */
  chipsWrap.innerHTML = presets.map(p => `
    <button class="bic-preset-chip" id="bic-chip-${p.id}"
      onclick="bicApplyPreset('${drug.nome}','${p.id}')"
      title="${lang === 'es' ? (p.obs_es || p.obs_pt) : p.obs_pt}">
      <i class="fa-solid ${p.icon || 'fa-flask-vial'}"></i>
      ${p.label}
    </button>
  `).join('');

  /* Esconde badge de "aplicado" */
  if (badge) badge.classList.remove('show');

  section.classList.add('show');
}

/**
 * Aplica um preset específico nos campos de entrada.
 * Modelo de dados limpo: apenas atualiza os TextEditingControllers
 * dos inputs sem re-render da árvore inteira.
 */
function bicApplyPreset(drugName, presetId) {
  const presets = BIC_PRESETS[drugName];
  if (!presets) return;
  const preset = presets.find(p => p.id === presetId);
  if (!preset) return;

  _bicActivePresetId = presetId;

  /* ── Atualiza inputs (equivalente ao TextEditingController.text = ...) ── */
  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el && v !== null && v !== undefined) {
      el.value = v;
      /* Dispara evento input para acionar cálculo reativo */
      el.dispatchEvent(new Event('input', { bubbles: false }));
    }
  };

  /* Concentração total da solução (mg) */
  setVal('inf-amp-mg', preset.totalMg);
  /* Volume do diluente (mL) */
  setVal('inf-vol-ml', preset.volMl);
  /* Dose inicial sugerida */
  setVal('inf-dose', preset.doseDefault);

  /* Unidade de dose */
  const unitSel = document.getElementById('inf-dose-unit');
  if (unitSel && preset.unitDefault) {
    const match = [...unitSel.options].find(o => o.value === preset.unitDefault);
    if (match) unitSel.value = preset.unitDefault;
  }

  /* ── Atualiza caixa de diluição com dados ricos do preset ── */
  const dilBox = document.getElementById('inf-dilution-box');
  if (dilBox) {
    const lang  = typeof currentLang !== 'undefined' ? currentLang : 'pt';
    const obs   = lang === 'es' ? (preset.obs_es || preset.obs_pt) : preset.obs_pt;
    const label = t('infusion_dilution_label') || 'Diluição:';
    dilBox.innerHTML = `
      <strong>${label} ${preset.ampoles} amp → ${preset.totalMg} mg em ${preset.volMl} mL de ${preset.solvent}</strong>
      ${obs ? `<small>${obs}</small>` : ''}
    `;
    dilBox.classList.add('show');
  }

  /* ── Marca chip como ativo e exibe badge ── */
  document.querySelectorAll('.bic-preset-chip').forEach(c => c.classList.remove('active'));
  const activeChip = document.getElementById(`bic-chip-${presetId}`);
  if (activeChip) activeChip.classList.add('active');

  const badge = document.getElementById('bic-preset-badge');
  if (badge) {
    badge.classList.remove('show');
    /* Força reflow para reiniciar a animação */
    void badge.offsetWidth;
    badge.classList.add('show');
    /* Remove após 2,5s */
    setTimeout(() => badge && badge.classList.remove('show'), 2500);
  }

  /* ── Atualiza card de contexto clínico com dados do preset ── */
  bicRenderClinicalContext(_bicSelectedDrug, preset);

  /* ── Recalcula ── */
  calculateInfusion();
}

/* ═══════════════════════════════════════════════════════════════════════
   BIC CLINICAL CONTEXT — Recomendação Inteligente Baseada no Paciente
   Consome: window.patientData { weight, age, clcr, pregnant }
            _bicSelectedDrug  (droga corrente)
            preset            (preset ativo — contém renalNote, weightNote)
═══════════════════════════════════════════════════════════════════════ */

/**
 * Avalia o perfil do paciente atual e gera o card de contexto clínico.
 * Lógica pura isolada — sem side-effects além de atualizar o DOM do card.
 */
function bicRenderClinicalContext(drug, preset) {
  const card = document.getElementById('bic-context-card');
  if (!card) return;

  /* Sem droga selecionada → oculta */
  if (!drug) {
    card.className = 'bic-context-card';
    card.innerHTML = '';
    return;
  }

  const pd   = window.patientData || {};
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';

  /* ── Coleta metadados do paciente ── */
  const peso      = pd.weight   || 0;
  const idade     = pd.age      || 0;
  const clcr      = pd.clcr     || pd.cr_clearance || 0;  /* ClCr em mL/min */
  const isPreg    = pd.pregnant === true;
  const isObese   = peso > 0 && pd.height > 0
                    ? _bicCalcBMI(peso, pd.height) >= 30
                    : false;
  const hasIR     = clcr > 0 && clcr < 60;  /* Clearance <60 = IR moderada/grave */
  const hasIRSev  = clcr > 0 && clcr < 30;  /* Clearance <30 = IR grave */

  /* ── Funções auxiliares de cálculo de peso ── */
  const sex = pd.sex || 'M';

  /* ── Coleta notas contextuais do preset ativo ── */
  const renalNote = preset
    ? (lang === 'es' ? (preset.renalNote_es || preset.renalNote_pt) : preset.renalNote_pt)
    : null;
  const weightNote = preset
    ? (lang === 'es' ? (preset.weightNote_es || preset.weightNote_pt) : preset.weightNote_pt)
    : null;

  /* ── Risco gestacional da droga ── */
  const pregRisk = BIC_PREG_RISK[drug.nome];

  /* ── Monta os itens contextuais ── */
  const items = [];
  let ctxLevel = 'info'; /* info | warn | danger */

  /* 1. Gestante */
  if (isPreg && pregRisk) {
    if (pregRisk.cat === 'X') {
      ctxLevel = 'danger';
      const msg = lang === 'es' ? (pregRisk.alert_es || pregRisk.alert_pt) : pregRisk.alert_pt;
      items.push({
        icon: 'fa-ban', iconColor: '#F87171',
        html: `<b>${lang === 'es' ? '🤰 GESTANTE — CONTRAINDICADO' : '🤰 GESTANTE — CONTRAINDICADO'}</b><br>${msg}`
      });
    } else if (pregRisk.cat === 'D') {
      ctxLevel = ctxLevel === 'danger' ? 'danger' : 'warn';
      const msg = lang === 'es' ? (pregRisk.alert_es || pregRisk.alert_pt) : pregRisk.alert_pt;
      items.push({
        icon: 'fa-triangle-exclamation', iconColor: '#FBBF24',
        html: `<b>${lang === 'es' ? '🤰 GESTANTE — Alto Risco Fetal' : '🤰 GESTANTE — Alto Risco Fetal'}</b><br>${msg}`
      });
    } else if (pregRisk.cat === 'C') {
      items.push({
        icon: 'fa-circle-exclamation', iconColor: '#38BDF8',
        html: `<b>${lang === 'es' ? '🤰 GESTANTE — Cautela' : '🤰 GESTANTE — Cautela'}</b><br>${lang === 'es' ? (pregRisk.alert_es||pregRisk.alert_pt) : pregRisk.alert_pt}`
      });
    }
  }

  /* 2. Insuficiência Renal */
  if (renalNote && (hasIR || hasIRSev)) {
    const severity = hasIRSev
      ? (lang === 'es' ? `IR Grave — ClCr ${clcr} mL/min` : `IR Grave — ClCr ${clcr} mL/min`)
      : (lang === 'es' ? `IR Moderada — ClCr ${clcr} mL/min` : `IR Moderada — ClCr ${clcr} mL/min`);

    /* Classifica a nota (contém 🚨 = danger, ⚠️ = warn, ✅ = info) */
    if (renalNote.includes('🚨') || renalNote.includes('CONTRAINDICADO')) {
      ctxLevel = ctxLevel === 'danger' ? 'danger' : 'danger';
    } else if (renalNote.includes('⚠️') || renalNote.includes('ATENÇÃO')) {
      ctxLevel = ctxLevel === 'danger' ? 'danger' : 'warn';
    }

    items.push({
      icon: 'fa-kidneys',
      iconColor: hasIRSev ? '#F87171' : '#FBBF24',
      html: `<b>${lang === 'es' ? '🫘 Función Renal:' : '🫘 Função Renal:'} <span class="bic-ctx-value-pill">${severity}</span></b><br>${renalNote}`
    });
  } else if (renalNote && !hasIR) {
    /* ClCr não informado — alerta sobre a nota renal disponível */
    if (renalNote.includes('🚨') || renalNote.includes('AJUSTE')) {
      items.push({
        icon: 'fa-circle-info', iconColor: '#38BDF8',
        html: `<b>${lang === 'es' ? '🫘 ClCr não informado' : '🫘 ClCr não informado'}</b><br>${lang === 'es'
          ? 'Esta droga requer ajuste em insuficiência renal. Informe o ClCr na aba Início para avaliação contextual automática.'
          : 'Esta droga requer ajuste em insuficiência renal. Informe o ClCr na aba Início para avaliação contextual automática.'}`
      });
    }
  }

  /* 3. Peso Ideal vs Real */
  if (weightNote && (isObese || peso > 0)) {
    items.push({
      icon: 'fa-weight-scale', iconColor: '#38BDF8',
      html: `<b>${lang === 'es' ? '⚖️ Atenção ao Peso de Cálculo:' : '⚖️ Atenção ao Peso de Cálculo:'}</b><br>${weightNote}`
        + (peso > 0 ? `<br><span class="bic-ctx-value-pill"><i class="fa-solid fa-weight-scale" style="font-size:9px"></i> Peso Atual: ${peso} kg</span>` : '')
    });
  }

  /* 4. Droga sem contexto negativo — exibe nota positiva de segurança */
  if (items.length === 0 && (hasIR || isPreg || isObese)) {
    items.push({
      icon: 'fa-circle-check', iconColor: '#34D399',
      html: lang === 'es'
        ? `<b>Sin ajustes especiales detectados</b> para el perfil actual del paciente con esta droga.`
        : `<b>Sem ajustes especiais detectados</b> para o perfil atual do paciente com esta droga.`
    });
  }

  /* Sem paciente configurado e sem items — oculta o card */
  if (items.length === 0) {
    card.className = 'bic-context-card';
    card.innerHTML = '';
    return;
  }

  /* ── Monta título do card ── */
  const titleMap = {
    info:   lang === 'es' ? 'Contexto Clínico' : 'Contexto Clínico',
    warn:   lang === 'es' ? 'Atenção Clínica'  : 'Atenção Clínica',
    danger: lang === 'es' ? 'Alerta Clínico'   : 'Alerta Clínico',
  };
  const iconMap  = { info:'fa-stethoscope', warn:'fa-triangle-exclamation', danger:'fa-shield-virus' };
  const badgeTxt = peso > 0 ? `${peso} kg` : (isPreg ? '🤰' : (hasIR ? `ClCr ${clcr}` : ''));

  /* ── Renderiza o card ── */
  card.className = `bic-context-card ctx-${ctxLevel} show`;
  card.innerHTML = `
    <div class="bic-ctx-header">
      <i class="fa-solid ${iconMap[ctxLevel]} bic-ctx-icon"></i>
      <span class="bic-ctx-title">${titleMap[ctxLevel]}</span>
      ${badgeTxt ? `<span class="bic-ctx-badge">${badgeTxt}</span>` : ''}
    </div>
    <div class="bic-ctx-body">
      ${items.map((item, i) => `
        ${i > 0 ? '<div class="bic-ctx-divider"></div>' : ''}
        <div class="bic-ctx-item">
          <i class="fa-solid ${item.icon}" style="color:${item.iconColor}"></i>
          <span>${item.html}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/** Calcula IMC */
function _bicCalcBMI(pesoKg, alturaCm) {
  if (!pesoKg || !alturaCm) return 0;
  const altM = alturaCm / 100;
  return pesoKg / (altM * altM);
}

/** Limpa o autocomplete */
function bicClearDrug() {
  _bicSelectedDrug  = null;
  _bicActivePresetId = null;
  const inp = document.getElementById('inf-drug-search');
  if (inp) { inp.value = ''; inp.focus(); }
  const clearBtn = document.getElementById('inf-drug-clear');
  if (clearBtn) clearBtn.classList.remove('show');
  const dilBox = document.getElementById('inf-dilution-box');
  if (dilBox) dilBox.classList.remove('show');
  /* Oculta presets e card de contexto */
  const presetSec = document.getElementById('bic-preset-section');
  if (presetSec) presetSec.classList.remove('show');
  const ctxCard = document.getElementById('bic-context-card');
  if (ctxCard) { ctxCard.className = 'bic-context-card'; ctxCard.innerHTML = ''; }
  bicHandleDrugInput('');
}

/** Fecha o dropdown */
function bicCloseDropdown() {
  const box = document.getElementById('inf-drug-dropdown');
  const inp = document.getElementById('inf-drug-search');
  if (box) box.classList.remove('open');
  if (inp) inp.setAttribute('aria-expanded','false');
}

/** Navegação por teclado ↑↓ Enter Esc */
function bicKeyNav(e) {
  const box = document.getElementById('inf-drug-dropdown');
  if (!box || !box.classList.contains('open')) return;
  const items = box.querySelectorAll('.inf-dropdown-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _bicDropdownIdx = Math.min(_bicDropdownIdx + 1, items.length - 1);
    _bicHighlightItem(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _bicDropdownIdx = Math.max(_bicDropdownIdx - 1, 0);
    _bicHighlightItem(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (_bicDropdownIdx >= 0) bicSelectDrug(_bicDropdownIdx);
    else if (_infusionFiltered.length === 1) bicSelectDrug(0);
  } else if (e.key === 'Escape') {
    bicCloseDropdown();
  }
}

function _bicHighlightItem(items) {
  items.forEach((el, i) => el.classList.toggle('selected', i === _bicDropdownIdx));
  if (items[_bicDropdownIdx]) items[_bicDropdownIdx].scrollIntoView({ block:'nearest' });
}

/* Fecha dropdown ao clicar fora */
document.addEventListener('click', function(e) {
  const wrap = document.getElementById('inf-autocomplete-wrap');
  if (wrap && !wrap.contains(e.target)) bicCloseDropdown();
});

/* ═══════════════════════════════════════════════════════════════════════
   MODAL ALERTA GESTANTE — BIC Safety Gate
═══════════════════════════════════════════════════════════════════════ */
function bicShowAlert(drug, risk) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  const nome = lang === 'es' ? drug.nome_es : drug.nome;
  const msg  = lang === 'es' ? (risk.alert_es || risk.alert_pt) : risk.alert_pt;

  /* Preenche conteúdo dinâmico */
  const nameEl  = document.getElementById('bic-alert-drug-name');
  const badgeEl = document.getElementById('bic-alert-risk-badge');
  const msgEl   = document.getElementById('bic-alert-msg');
  if (nameEl)  nameEl.textContent  = nome;
  if (badgeEl) {
    badgeEl.textContent = risk.label;
    badgeEl.className   = `inf-dropdown-item-risk risk-${risk.cat.toLowerCase()}`;
  }
  if (msgEl)   msgEl.innerHTML = msg ? msg.replace(/\n/g,'<br>') : '';

  /* Exibe modal */
  const overlay = document.getElementById('bic-alert-overlay');
  const modal   = document.getElementById('bic-alert-modal');
  if (overlay) overlay.style.display = 'block';
  if (modal)   modal.style.display   = 'block';
  document.body.style.overflow = 'hidden';
}

/** Médico escolhe cancelar — limpa campo */
function bicAbortDrug() {
  _bicPendingDrug = null;
  bicDismissAlert();
  bicClearDrug();
}

/** Médico decide continuar mesmo assim */
function bicProceedAnyway() {
  const drug = _bicPendingDrug;
  _bicPendingDrug = null;
  bicDismissAlert();
  if (drug) _bicApplyDrug(drug);
}

/** Fecha o modal de alerta */
function bicDismissAlert() {
  const overlay = document.getElementById('bic-alert-overlay');
  const modal   = document.getElementById('bic-alert-modal');
  if (overlay) overlay.style.display = 'none';
  if (modal)   modal.style.display   = 'none';
  document.body.style.overflow = '';
}

/**
 * Normaliza uma droga da DRUG_DB para o formato interno do módulo de infusão.
 * Tenta extrair campos de infusão se existirem, senão retorna null.
 */
function _normalizeInfusionDrug(drug) {
  /* Só inclui drogas que tenham campo de infusão explícito */
  if (!drug.infusion) return null;
  const inf = drug.infusion;
  return {
    nome:       drug.name || drug.nome || 'Droga',
    nome_es:    drug.name_es || drug.name || drug.nome || 'Droga',
    ampolaMg:   Number(inf.ampolaMg  || inf.concentracaoMg || 0),
    diluenteMl: Number(inf.diluenteMl || inf.volumeMl || 0),
    diluente:   inf.diluente || 'SF 0,9%',
    doseInicial:Number(inf.doseInicial || 0),
    unidade:    inf.unidade || 'mcg/kg/min',
    obs_pt:     inf.obs_pt || inf.obs || '',
    obs_es:     inf.obs_es || inf.obs || '',
  };
}

/**
 * Inicializa a base de drogas do módulo de infusão:
 * 1) Tenta extrair drogas com campo .infusion da DRUG_DB global
 * 2) Injeta fallback hardcoded se nenhum encontrado
 * 3) Mescla sem duplicatas por nome
 */
function initInfusionDatabase() {
  const fromDB = [];
  if (typeof DRUG_DB !== 'undefined' && Array.isArray(DRUG_DB)) {
    DRUG_DB.forEach(d => {
      const norm = _normalizeInfusionDrug(d);
      if (norm) fromDB.push(norm);
    });
  }

  /* Mescla: fallback primeiro, DB sobrescreve se mesmo nome */
  const merged = [...INFUSION_FALLBACK_DB];
  fromDB.forEach(d => {
    const idx = merged.findIndex(m => m.nome.toLowerCase() === d.nome.toLowerCase());
    if (idx >= 0) merged[idx] = { ...merged[idx], ...d };
    else merged.push(d);
  });

  _infusionDrugs    = merged;
  _infusionFiltered = [...merged];
  _renderInfusionDrugSelect(_infusionFiltered);
}

/**
 * Renderiza as <option> do select de drogas
 */
function _renderInfusionDrugSelect(list) {
  const sel = document.getElementById('inf-drug-select');
  if (!sel) return;
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';

  sel.innerHTML = '';
  if (!list || !list.length) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = t('infusion_no_drugs');
    sel.appendChild(opt);
    return;
  }

  list.forEach((drug, i) => {
    const opt = document.createElement('option');
    opt.value = i; /* índice em _infusionFiltered */
    opt.textContent = lang === 'es' ? drug.nome_es : drug.nome;
    sel.appendChild(opt);
  });

  /* Aplica automaticamente a primeira droga se panel estiver aberto */
  if (_infusionMode === 'drug') applyInfusionDrug();
}

/**
 * Filtra drogas pelo texto digitado na busca
 */
function filterInfusionDrugs(term) {
  /* Redireciona para o novo autocomplete */
  bicHandleDrugInput(term || '');
}

/**
 * Aplica os dados da droga selecionada nos campos de entrada
 */
function applyInfusionDrug() {
  const sel = document.getElementById('inf-drug-select');
  if (!sel || sel.value === '') return;

  const drug = _infusionFiltered[Number(sel.value)];
  if (!drug) return;

  /* Preenche os campos */
  const setVal = (id, v) => { const el=document.getElementById(id); if(el && v) el.value = v; };
  setVal('inf-amp-mg',  drug.ampolaMg || '');
  setVal('inf-vol-ml',  drug.diluenteMl || '');
  setVal('inf-dose',    drug.doseInicial || '');
  const unitSel = document.getElementById('inf-dose-unit');
  if (unitSel && drug.unidade) {
    const match = [...unitSel.options].find(o => o.value === drug.unidade);
    if (match) unitSel.value = drug.unidade;
  }

  /* Exibe caixa de diluição padrão */
  const dilBox = document.getElementById('inf-dilution-box');
  if (dilBox) {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
    const obs = lang === 'es' ? (drug.obs_es || drug.obs_pt) : drug.obs_pt;
    const label = t('infusion_dilution_label');
    dilBox.innerHTML = `<strong>${label} ${drug.ampolaMg || '--'} mg em ${drug.diluenteMl || '--'} mL de ${drug.diluente}</strong>${obs ? `<small>${obs}</small>` : ''}`;
    dilBox.classList.add('show');
  }

  /* ── Verifica interações com fármacos em uso ── */
  const infInteractEl = document.getElementById('inf-interaction-alert');
  if (infInteractEl && typeof checkInteractions === 'function') {
    const drugName = (drug.nome || '').toLowerCase().split(' ')[0];
    const db = typeof DRUG_DB !== 'undefined' ? DRUG_DB : [];
    /* BUILD 405 REFAT 2B: d.name pode ser {pt,es} objeto (_adaptExternalDB).
       Usa String() safe: extrai campo de idioma → force String → toLowerCase */
    const matched = db.find(d => {
      const nameRaw = d.name && typeof d.name === 'object'
        ? (d.name[currentLang || 'pt'] || d.name.pt || '')
        : (d.name || '');
      const searchStr = String(nameRaw).toLowerCase();
      return searchStr.startsWith(drugName);
    });
    infInteractEl.innerHTML = matched ? checkInteractions(matched.id) : '';
  }

  calculateInfusion();
}

/**
 * Alterna entre modo Livre e modo Droga
 */
function setInfusionMode(mode) {
  _infusionMode = mode;
  document.getElementById('inf-mode-free')?.classList.toggle('active', mode === 'free');
  document.getElementById('inf-mode-drug')?.classList.toggle('active', mode === 'drug');

  const panel = document.getElementById('inf-drug-panel');
  if (panel) panel.classList.toggle('show', mode === 'drug');

  const dilBox = document.getElementById('inf-dilution-box');
  if (mode === 'free') {
    /* Limpa a caixa de diluição em modo livre */
    if (dilBox) dilBox.classList.remove('show');
  } else {
    /* Modo droga: aplica a droga selecionada */
    applyInfusionDrug();
  }

  /* Atualiza campo de droga livre e botão copiar */
  _infUpdateFreeDrugField();
  _infUpdateCopyBtn();
}

/**
 * Motor de cálculo principal — chamado em todo oninput/onchange
 */
function calculateInfusion() {
  /* BUILD 405 REFAT 2C: peso via parseFloat explícito para garantir número mesmo
     quando patientData.weight vem como string do formulário de entrada */
  const pd       = window.patientData || {};
  const pesoKg   = parseFloat(pd.weight) > 0 ? parseFloat(pd.weight) : 0;

  /* Atualiza visibilidade do chip / guard de peso */
  const chip    = document.getElementById('inf-weight-chip');
  const missing = document.getElementById('inf-weight-missing');
  const chipVal = document.getElementById('inf-weight-chip-val');
  if (chip && missing) {
    if (pesoKg > 0) {
      chip.style.display    = 'flex';
      missing.style.display = 'none';
      if (chipVal) chipVal.textContent = pesoKg;
    } else {
      chip.style.display    = 'none';
      missing.style.display = 'flex';
    }
  }
  const ampolaMg = parseFloat(document.getElementById('inf-amp-mg')?.value)    || 0;
  const volumeMl = parseFloat(document.getElementById('inf-vol-ml')?.value)    || 0;
  const dose     = parseFloat(document.getElementById('inf-dose')?.value)      || 0;
  const unidade  = document.getElementById('inf-dose-unit')?.value || 'mcg/kg/min';
  const rateAtual= parseFloat(document.getElementById('inf-current-rate')?.value) || 0;

  const resultArea  = document.getElementById('inf-result-area');
  const emptyHint   = document.getElementById('inf-empty-hint');
  const rateEl      = document.getElementById('inf-rate-result');
  const concEl      = document.getElementById('inf-conc-result');
  const concInline  = document.getElementById('inf-conc-inline');
  const doseSec     = document.getElementById('inf-dose-sec-result');
  const doseSecUnit = document.getElementById('inf-dose-sec-unit');
  const doseSecLbl  = document.getElementById('inf-dose-label-sec');
  const revCard     = document.getElementById('inf-reverse-card');
  const revResult   = document.getElementById('inf-reverse-result');
  const revUnit     = document.getElementById('inf-reverse-unit');

  /* Sem ampola e volume → mostra hint */
  if (!ampolaMg || !volumeMl) {
    if (resultArea)  resultArea.classList.remove('show');
    if (emptyHint)   emptyHint.style.display = 'flex';
    return;
  }

  /* ── Concentração da solução ── */
  const mgPorMl  = ampolaMg / volumeMl;
  const mcgPorMl = mgPorMl * 1000;

  /* ── Cálculo da vazão ── */
  let mlHora = NaN;

  if (dose > 0) {
    if (unidade === 'mcg/kg/min') {
      if (pesoKg > 0) {
        mlHora = (dose * pesoKg * 60) / mcgPorMl;
      }
    } else if (unidade === 'mcg/min') {
      mlHora = (dose * 60) / mcgPorMl;
    } else if (unidade === 'mg/kg/h') {
      if (pesoKg > 0) {
        mlHora = (dose * pesoKg) / mgPorMl;
      }
    } else if (unidade === 'ml/h') {
      mlHora = dose;
    }
  }

  /* ── Calculo da dose secundária (doses por minuto) ── */
  let doseSec_val = NaN, doseSec_lbl = 'Dose / min', doseSec_unt = 'mcg/min';
  if (Number.isFinite(mlHora) && mlHora > 0) {
    if (unidade === 'mcg/kg/min') {
      doseSec_val = dose * pesoKg;
      doseSec_lbl = 'Dose Total / min';
      doseSec_unt = 'mcg/min';
    } else if (unidade === 'mcg/min') {
      doseSec_val = dose / pesoKg / 60 * 1000;
      doseSec_lbl = pesoKg > 0 ? 'Dose / kg / min' : 'Dose / min';
      doseSec_unt = pesoKg > 0 ? 'mcg/kg/min' : 'mcg/min';
    } else if (unidade === 'mg/kg/h') {
      doseSec_val = dose * pesoKg;
      doseSec_lbl = 'Dose Total / h';
      doseSec_unt = 'mg/h';
    } else if (unidade === 'ml/h') {
      doseSec_val = mlHora * mcgPorMl / 60;
      doseSec_lbl = 'Dose Entregue / min';
      doseSec_unt = 'mcg/min';
    }
  }

  /* ── Conversor reverso ── */
  let revVal = NaN, revUnitTxt = 'mcg/kg/min';
  if (rateAtual > 0) {
    const mcgHoraRev = rateAtual * mcgPorMl;
    const mcgMinRev  = mcgHoraRev / 60;
    if (pesoKg > 0) {
      revVal    = mcgMinRev / pesoKg;
      revUnitTxt = 'mcg/kg/min';
    } else {
      revVal    = mcgMinRev;
      revUnitTxt = 'mcg/min';
    }
  }

  /* ── Atualiza DOM ── */
  if (emptyHint)  emptyHint.style.display = 'none';
  if (resultArea) resultArea.classList.add('show');

  /* Vazão principal
     Nota visual (Refatoração Premium Minimalista): quando a dose depende do
     peso (mcg/kg/min ou mg/kg/h) e o peso não está cadastrado, o valor
     numérico não pode ser calculado. Antes exibia-se o emoji "⚠️" em 48px
     (visualmente pesado/"triângulo gigante"); agora exibe-se um traço "—"
     discreto no valor, com uma etiqueta de aviso sutil abaixo (sem alterar
     nenhum cálculo/matemática — apenas apresentação). */
  const needsWeightNote = dose > 0 && (unidade === 'mcg/kg/min' || unidade === 'mg/kg/h') && !pesoKg;
  if (rateEl) {
    rateEl.classList.toggle('infusion-result-value--warn', !!needsWeightNote);
    rateEl.textContent = Number.isFinite(mlHora) && mlHora > 0
      ? mlHora.toFixed(2)
      : (needsWeightNote ? '—' : '--');
  }
  const weightNoteEl = document.getElementById('inf-weight-note');
  if (weightNoteEl) weightNoteEl.classList.toggle('show', !!needsWeightNote);

  /* Concentração */
  const concStr = `${mcgPorMl.toFixed(2)} mcg/mL`;
  if (concEl)     concEl.textContent     = mcgPorMl.toFixed(2);
  if (concInline) concInline.textContent = `Concentração: ${concStr}`;

  /* Dose secundária */
  if (doseSec)     doseSec.textContent    = Number.isFinite(doseSec_val) ? doseSec_val.toFixed(3) : '--';
  if (doseSecUnit) doseSecUnit.textContent = doseSec_unt;
  if (doseSecLbl)  doseSecLbl.textContent  = doseSec_lbl;

  /* Reverso */
  if (revCard) revCard.style.display = rateAtual > 0 ? 'block' : 'none';
  if (revResult) revResult.textContent = Number.isFinite(revVal) ? revVal.toFixed(4) : '--';
  if (revUnit)   revUnit.textContent   = revUnitTxt;

  /* Botão Copiar — exibe quando resultado está visível */
  _infUpdateCopyBtn();
}

/* ═══════════════════════════════════════════════════════════════════════
   BIC — CAMPO DROGA LIVRE: visibilidade conforme modo
   BIC — BOTÃO COPIAR PRESCRIÇÃO: mostra após resultado calculado
═══════════════════════════════════════════════════════════════════════ */

/**
 * Controla visibilidade do campo de droga livre.
 * Chamado pelo setInfusionMode() e pelo próprio calculateInfusion().
 */
function _infUpdateFreeDrugField() {
  const wrap = document.getElementById('inf-free-drug-wrap');
  if (wrap) wrap.style.display = (_infusionMode === 'free') ? 'block' : 'none';
}

/**
 * Mostra o botão "Copiar como Prescrição" apenas quando
 * o resultado estiver visível (inf-result-area com classe show).
 */
function _infUpdateCopyBtn() {
  const btn       = document.getElementById('inf-copy-rx-btn');
  const resultArea= document.getElementById('inf-result-area');
  if (!btn || !resultArea) return;
  const hasResult = resultArea.classList.contains('show');
  btn.style.display = hasResult ? 'flex' : 'none';
}

/**
 * Gera e copia o texto da prescrição de infusão.
 * Funciona em ambos os modos (livre e droga).
 */
function infCopyPrescription() {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pt';
  const pd   = window.patientData || {};

  /* ── Coleta valores dos campos ── */
  const ampolaMg   = document.getElementById('inf-amp-mg')?.value     || '';
  const volumeMl   = document.getElementById('inf-vol-ml')?.value     || '';
  const dose       = document.getElementById('inf-dose')?.value       || '';
  const unidade    = document.getElementById('inf-dose-unit')?.value  || '';
  const rateAtual  = document.getElementById('inf-current-rate')?.value || '';

  /* ── Resultados calculados ── */
  const vazao      = document.getElementById('inf-rate-result')?.textContent   || '--';
  const conc       = document.getElementById('inf-conc-result')?.textContent   || '--';
  const doseSec    = document.getElementById('inf-dose-sec-result')?.textContent || '--';
  const doseSecUnt = document.getElementById('inf-dose-sec-unit')?.textContent  || '';
  const doseSecLbl = document.getElementById('inf-dose-label-sec')?.textContent  || '';
  const revResult  = document.getElementById('inf-reverse-result')?.textContent || '';
  const revUnit    = document.getElementById('inf-reverse-unit')?.textContent   || '';

  /* ── Nome da droga ── */
  let drugName = '';
  if (_infusionMode === 'drug' && _bicSelectedDrug) {
    drugName = lang === 'es' ? (_bicSelectedDrug.nome_es || _bicSelectedDrug.nome) : _bicSelectedDrug.nome;
  } else {
    drugName = document.getElementById('inf-free-drug-name')?.value?.trim() || '';
  }

  /* ── Dados do paciente ── */
  const peso  = pd.weight || '';
  const idade = pd.age    || '';

  /* ── Monta texto da prescrição ── */
  const sep = '─────────────────────────────';
  const now = new Date();
  const dataHora = now.toLocaleString(lang === 'es' ? 'es-AR' : 'pt-BR', {
    day:'2-digit', month:'2-digit', year:'numeric',
    hour:'2-digit', minute:'2-digit'
  });

  const isES = lang === 'es';
  const lDrug   = isES ? 'Fármaco'           : 'Fármaco';
  const lConc   = isES ? 'Dilución'          : 'Diluição';
  const lDose   = isES ? 'Dosis deseada'     : 'Dose desejada';
  const lVazao  = isES ? 'Velocidad calculada':'Vazão calculada';
  const lConcFin= isES ? 'Concentración final':'Concentração final';
  const lPeso   = isES ? 'Peso'              : 'Peso';
  const lPac    = isES ? 'PACIENTE'          : 'PACIENTE';
  const lInf    = isES ? 'PRESCRIÇÃO DE INFUSÃO' : 'PRESCRIÇÃO DE INFUSÃO';
  const lData   = isES ? 'Fecha/hora'        : 'Data/hora';
  const lWarn   = isES
    ? '⚠️ Confirmar dose, diluição e protocolo institucional antes de administrar.'
    : '⚠️ Confirmar dose, diluição e protocolo institucional antes de administrar.';
  const lConv   = isES ? 'Conversión inversa' : 'Conversor reverso';

  let lines = [];
  lines.push(lInf);
  lines.push(sep);

  if (peso || idade) {
    lines.push(`${lPac}: ${peso ? lPeso + ' ' + peso + ' kg' : ''}${peso && idade ? ' | ' : ''}${idade ? (isES ? 'Edad ' : 'Idade ') + idade + (isES ? ' años' : ' anos') : ''}`);
  }

  if (drugName) lines.push(`${lDrug}: ${drugName}`);

  lines.push('');
  lines.push(`${lConc}: ${ampolaMg} mg em ${volumeMl} mL`);
  if (dose) lines.push(`${lDose}: ${dose} ${unidade}`);
  lines.push('');
  lines.push(`${lVazao}: ${vazao} mL/h`);
  lines.push(`${lConcFin}: ${conc} mcg/mL`);
  if (doseSec && doseSec !== '--') lines.push(`${doseSecLbl}: ${doseSec} ${doseSecUnt}`);

  if (rateAtual && revResult && revResult !== '--') {
    lines.push('');
    lines.push(`${lConv}: ${rateAtual} mL/h → ${revResult} ${revUnit}`);
  }

  /* Nota do preset (se houver) */
  const dilBoxText = document.getElementById('inf-dilution-box')?.innerText?.trim() || '';
  if (dilBoxText) {
    lines.push('');
    lines.push(dilBoxText);
  }

  lines.push('');
  lines.push(sep);
  lines.push(lWarn);
  lines.push(`${lData}: ${dataHora}`);

  const text = lines.join('\n');

  /* ── Copia para clipboard ── */
  const btn = document.getElementById('inf-copy-rx-btn');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      _infShowCopyFeedback(btn, isES);
    }).catch(() => {
      _infFallbackCopy(text, btn, isES);
    });
  } else {
    _infFallbackCopy(text, btn, isES);
  }
}

/** Fallback para browsers sem Clipboard API */
function _infFallbackCopy(text, btn, isES) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    _infShowCopyFeedback(btn, isES);
  } catch(e) {
    /* Silencia erro de clipboard em contexto seguro */
  }
}

/** Exibe feedback visual após copiar */
function _infShowCopyFeedback(btn, isES) {
  /* Botão */
  if (btn) {
    btn.classList.add('copied');
    const btnSpan = btn.querySelector('span');
    const origText = btnSpan ? btnSpan.textContent : '';
    if (btnSpan) btnSpan.textContent = isES ? '¡Copiado!' : 'Copiado!';
    setTimeout(() => {
      btn.classList.remove('copied');
      if (btnSpan) btnSpan.textContent = origText;
    }, 2200);
  }
  /* Toast */
  const toast = document.getElementById('inf-copy-toast');
  const toastText = document.getElementById('inf-copy-toast-text');
  if (toast) {
    if (toastText) toastText.textContent = isES ? '✓ Prescrição copiada!' : '✓ Prescrição copiada!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
}

/**
 * Hook chamado pelo setLang() para re-renderizar labels e textos traduzidos
 */
function _infusionOnLangChange() {
  /* Re-renderiza o select de drogas com o nome no idioma correto */
  _renderInfusionDrugSelect(_infusionFiltered);
  /* Se uma droga estiver selecionada, re-aplica a caixa de diluição traduzida */
  if (_infusionMode === 'drug') applyInfusionDrug();
  /* Re-renderiza presets e contexto clínico com o novo idioma */
  if (_bicSelectedDrug) {
    bicRenderPresets(_bicSelectedDrug);
    const preset = _bicGetActivePreset();
    bicRenderClinicalContext(_bicSelectedDrug, preset);
    /* Restaura chip ativo visualmente */
    if (_bicActivePresetId) {
      const chip = document.getElementById(`bic-chip-${_bicActivePresetId}`);
      if (chip) chip.classList.add('active');
    }
  }
}


/* ============================================================
   BUILD 284 — EXPOSIÇÕES WINDOW.*
   Todas as funções públicas do motor de infusão são explicitamente
   anexadas ao objeto window para garantir acesso global em WebView
   iOS/Android e no contexto de módulos carregados com defer.
   Funções privadas (prefixo _) NÃO são expostas.
============================================================ */
window.bicOpenDropdown          = bicOpenDropdown;
window.bicHandleDrugInput       = bicHandleDrugInput;
window.bicHoverItem             = bicHoverItem;
window.bicSelectDrug            = bicSelectDrug;
window.bicApplyPreset           = bicApplyPreset;
window.bicRenderPresets         = bicRenderPresets;
window.bicRenderClinicalContext = bicRenderClinicalContext;
window.bicClearDrug             = bicClearDrug;
window.bicCloseDropdown         = bicCloseDropdown;
window.bicKeyNav                = bicKeyNav;
window.bicShowAlert             = bicShowAlert;
window.bicAbortDrug             = bicAbortDrug;
window.bicProceedAnyway         = bicProceedAnyway;
window.bicDismissAlert          = bicDismissAlert;
window.initInfusionDatabase     = initInfusionDatabase;
window.filterInfusionDrugs      = filterInfusionDrugs;
window.applyInfusionDrug        = applyInfusionDrug;
window.setInfusionMode          = setInfusionMode;
window.calculateInfusion        = calculateInfusion;
window.infCopyPrescription      = infCopyPrescription;
window._infusionOnLangChange    = _infusionOnLangChange;
