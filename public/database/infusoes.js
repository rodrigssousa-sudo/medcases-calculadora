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
const BIC_PREG_RISK = {};
const BIC_PREG_BLOCK_CATS = new Set();
const BIC_PRESETS = {};

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
    doseInicial:null, unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Adrenalina',      nome_es:'Adrenalina',      ampolaMg:1,   diluenteMl:250, diluente:'SG 5%',
    doseInicial:null, unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Dobutamina',      nome_es:'Dobutamina',      ampolaMg:250, diluenteMl:250, diluente:'SG 5% ou SF 0,9%',
    doseInicial:null,    unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Dopamina',        nome_es:'Dopamina',        ampolaMg:200, diluenteMl:250, diluente:'SG 5% ou SF 0,9%',
    doseInicial:null,    unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Milrinona',       nome_es:'Milrinona',       ampolaMg:10,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:null, unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Vasopressina',    nome_es:'Vasopresina',     ampolaMg:20,  diluenteMl:100, diluente:'SG 5%',
    doseInicial:null, unidade:'UI/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Nitroprussiato',  nome_es:'Nitroprussiato',  ampolaMg:50,  diluenteMl:250, diluente:'SG 5%',
    doseInicial:null,  unidade:'mcg/kg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Nitroglicerina',  nome_es:'Nitroglicerina',  ampolaMg:50,  diluenteMl:250, diluente:'SG 5%',
    doseInicial:null,    unidade:'mcg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Amiodarona',      nome_es:'Amiodarona',      ampolaMg:150, diluenteMl:100, diluente:'SG 5%',
    doseInicial:null,    unidade:'mg/min',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Heparina',        nome_es:'Heparina',        ampolaMg:25000, diluenteMl:250, diluente:'SG 5%',
    doseInicial:null,   unidade:'UI/kg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Propofol',        nome_es:'Propofol',        ampolaMg:200, diluenteMl:20,  diluente:'(emulsão pronta)',
    doseInicial:null,  unidade:'mg/kg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Midazolam',       nome_es:'Midazolam',       ampolaMg:15,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:null, unidade:'mg/kg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Morfina',         nome_es:'Morfina',         ampolaMg:10,  diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:null,    unidade:'mg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Fentanil',        nome_es:'Fentanil',        ampolaMg:0.5, diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:null,  unidade:'mcg/kg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Insulina Regular',nome_es:'Insulina Regular',ampolaMg:100, diluenteMl:100, diluente:'SF 0,9%',
    doseInicial:null,    unidade:'UI/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
  { nome:'Vancomicina',     nome_es:'Vancomicina',     ampolaMg:500, diluenteMl:100, diluente:'SF 0,9% ou SG 5%',
    doseInicial:null,   unidade:'mg/h',
    obs_pt:'Informe a dose prescrita e confirme o preparo para a apresentação utilizada.',
    obs_es:'Introduzca la dosis prescrita y confirme la preparación para la presentación utilizada.' },
];

const INFUSION_REVIEW = {
  "Vasopressina": {
    "section": 1,
    "range": [
      0.01,
      0.04
    ],
    "text": "- Indicação e População: Choque vasodilatador/séptico refratário a catecolaminas. Adultos.\n- Preparo: 20 UI em Volume Final de 100 mL. (Concentração: 0,2 UI/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,01 a 0,04 UI/min. Máxima: 0,04 UI/min (0,06 UI/min em resgate off-label). Sem dose de ataque.\n- Ajustes: Não utiliza peso. Sem ajuste para disfunção renal/hepática.\n- Cálculos:\n  - Dose → mL/h: (Dose [UI/min] × 60) / 0,2\n  - mL/h → Dose: (mL/h × 0,2) / 60\n- Alerta: Alta prioridade por utilizar Unidades Internacionais. Extravasamento causa necrose isquêmica severa (preferir acesso central)."
  },
  "Heparina": {
    "section": 2,
    "range": null,
    "text": "- Indicação e População: Anticoagulação plena contínua (SCA, TEP, TVP). Adultos.\n- Preparo: 25.000 UI em Volume Final de 250 mL. (Concentração: 100 UI/mL).\n- Doses: Bolus de ataque em linha separada (~80 UI/kg). Infusão inicial: Preenchimento obrigatório (geralmente 18 UI/kg/h). Titulação guiada por TTPA.\n- Ajustes: Utiliza peso atual. Em obesos extremos, limitar dose máxima do bolus e da infusão. Em disfunção renal, exige controle rigoroso de TTPA.\n- Cálculos:\n  - Dose → mL/h: (Dose [UI/kg/h] × Peso) / 100\n  - mL/h → Dose: (mL/h × 100) / Peso\n- Alerta: Alta prioridade. Risco de sangramento e Trombocitopenia Induzida por Heparina (HIT)."
  },
  "Insulina Regular": {
    "section": 3,
    "range": null,
    "text": "- Indicação e População: Controle glicêmico no paciente crítico (CAD, EHH, pós-operatório). Adultos.\n- Preparo: 100 UI em Volume Final de 100 mL. (Concentração: 1 UI/mL). Solução 1:1. Purgação do equipo mandatória.\n- Doses: Inicial: Preenchimento obrigatório (ex: 0,1 UI/kg/h, mas inserida como UI/h fixa). Titulação guiada por HGT horário. Sem ataque em CAD convencional.\n- Ajustes: Não utiliza peso no cálculo da bomba. Ajuste rigoroso para insuficiência renal (risco de hipoglicemia prolongada).\n- Cálculos:\n  - Dose → mL/h: Dose [UI/h] / 1 (1 mL/h = 1 UI/h)\n  - mL/h → Dose: mL/h × 1\n- Alerta: Alta prioridade. Bloqueio sistêmico: Exigir potássio sérico (K+) > 3,3 mEq/L antes do início da infusão."
  },
  "Amiodarona": {
    "section": 4,
    "range": null,
    "text": "- Indicação e População: Reversão/controle de taquiarritmias supraventriculares e ventriculares. Adultos.\n- Preparo: 150 mg em Volume Final de 100 mL SG5%. (Concentração: 1,5 mg/mL). Evitar diluição em Soro Fisiológico (precipitação).\n- Doses: Inicial: Preenchimento obrigatório.\n- Ajustes: Não utiliza peso. Sem ajuste de dose renal.\n- Cálculos:\n  - Dose → mL/h: (Dose [mg/min] × 60) / 1,5\n  - mL/h → Dose: (mL/h × 1,5) / 60\n- Alerta: Este preparo (150mg/100mL) esgota em ~1-2 horas sob taxa de 1 mg/min. É ideal para Ataque. O sistema deve sugerir um segundo preparo padronizado (ex: 900mg/500mL) para a manutenção de 24h."
  },
  "Morfina": {
    "section": 5,
    "range": [
      2,
      10
    ],
    "text": "- Indicação e População: Analgesia de resgate contínua, sedoanalgesia em VM, paliação. Adultos.\n- Preparo: 10 mg em Volume Final de 100 mL. (Concentração: 0,1 mg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Faixa típica: 2 a 10 mg/h.\n- Ajustes: Não utiliza peso no cálculo da bomba. Ajuste renal: Exige redução de dose ou aumento de intervalo em DRC devido ao acúmulo de metabólitos ativos (neurotoxicidade/depressão respiratória).\n- Cálculos:\n  - Dose → mL/h: Dose [mg/h] / 0,1\n  - mL/h → Dose: mL/h × 0,1\n- Alerta: Preparo muito diluído para infusão contínua rotineira (ex: dose de 5 mg/h exige fluxo de 50 mL/h, encharcando o paciente). Avaliar com farmácia criação de preparo 50mg/100mL."
  },
  "Fentanil": {
    "section": 6,
    "range": [
      0.5,
      3
    ],
    "text": "- Indicação e População: Analgesia profunda contínua em UTI. Adultos.\n- Preparo: 0,5 mg (500 mcg) em Volume Final de 100 mL. (Concentração: 5 mcg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,5 a 3 mcg/kg/h.\n- Ajustes: Utiliza peso. Sem ajuste renal específico. Em obesos ou uso prolongado, o fármaco acumula (alta lipofilicidade), prolongando o despertar.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/h] × Peso) / 5\n  - mL/h → Dose: (mL/h × 5) / Peso"
  },
  "Nitroprussiato": {
    "section": 7,
    "range": null,
    "text": "- Indicação e População: Emergência hipertensiva. Adultos.\n- Preparo: 50 mg em Volume Final de 250 mL SG5%. (Concentração: 200 mcg/mL). Equipo/bolsa obrigatoriamente fotoprotetores.\n- Doses: Inicial: Preenchimento obrigatório (ex: 0,3 a 0,5 mcg/kg/min). Máxima: 10 mcg/kg/min.\n- Ajustes: Utiliza peso. Cautela em disfunção renal/hepática.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 200\n  - mL/h → Dose: (mL/h × 200) / (Peso × 60)\n- Alerta: Duração máxima. Emitir alerta de toxicidade (cianeto/tiocianato) em infusões > 2 mcg/kg/min que ultrapassem 48-72h."
  },
  "Vancomicina": {
    "section": 8,
    "range": null,
    "text": "- Indicação e População: Infecções graves por Gram-positivos (SARM). Adultos.\n- Preparo: 500 mg em Volume Final de 100 mL. (Concentração: 5 mg/mL). Concentração máxima permitida em acesso periférico para evitar flebite química.\n- Doses: Para infusão contínua: Dose em mg/dia dividida por 24h = mg/h. Preenchimento obrigatório.\n- Ajustes: Utiliza peso corporal (real) para cálculo da dose total. Ajuste renal obrigatório (fármaco nefrotóxico).\n- Cálculos:\n  - Dose → mL/h: Dose [mg/h] / 5\n  - mL/h → Dose: mL/h × 5\n- Alerta: Como infusão contínua, uma bolsa de 500 mg acaba rápido. Validar se este preparo não pertence ao uso intermitente (onde correr 500mg em 1h significa bomba a 100 mL/h) e exigir protocolo de Vancocinemia."
  },
  "Noradrenalina": {
    "section": 9,
    "range": [
      0.01,
      1.5
    ],
    "text": "- Indicação e População: Choque com hipotensão severa (vasopressor de 1ª linha). Adultos.\n- Preparo: 4 mg em Volume Final de 250 mL SG5% ou SF. (Concentração: 16 mcg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,01 a 1,5 mcg/kg/min. (Bloqueio rígido do sistema sugerido em > 2,0 a 3,0 mcg/kg/min).\n- Ajustes: Utiliza peso (real ou ideal, a depender da política local). Sem ajuste renal/hepático.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 16\n  - mL/h → Dose: (mL/h × 16) / (Peso × 60)"
  },
  "Adrenalina": {
    "section": 10,
    "range": [
      0.01,
      1
    ],
    "text": "- Indicação e População: Choque cardiogênico, anafilaxia, PCR. Adultos.\n- Preparo: 1 mg em Volume Final de 250 mL. (Concentração: 4 mcg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,01 a 1,0 mcg/kg/min.\n- Ajustes: Utiliza peso. Sem ajuste renal/hepático.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 4\n  - mL/h → Dose: (mL/h × 4) / (Peso × 60)"
  },
  "Dobutamina": {
    "section": 11,
    "range": [
      2,
      20
    ],
    "text": "- Indicação e População: Choque cardiogênico, baixo débito cardíaco. Adultos.\n- Preparo: 250 mg em Volume Final de 250 mL. (Concentração: 1.000 mcg/mL ou 1 mg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Faixa de titulação: 2 a 20 mcg/kg/min.\n- Ajustes: Utiliza peso. Sem ajuste renal/hepático estrito.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 1000\n  - mL/h → Dose: (mL/h × 1000) / (Peso × 60)"
  },
  "Dopamina": {
    "section": 12,
    "range": [
      2,
      20
    ],
    "text": "- Indicação e População: Hipotensão sintomática, bradicardia refratária. Adultos.\n- Preparo: 200 mg em Volume Final de 250 mL. (Concentração: 800 mcg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Faixa de titulação: 2 a 20 mcg/kg/min.\n- Ajustes: Utiliza peso.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 800\n  - mL/h → Dose: (mL/h × 800) / (Peso × 60)"
  },
  "Milrinona": {
    "section": 13,
    "range": [
      0.375,
      0.75
    ],
    "text": "- Indicação e População: Insuficiência cardíaca descompensada (inodilatador). Adultos.\n- Preparo: 10 mg em Volume Final de 100 mL. (Concentração: 100 mcg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,375 a 0,75 mcg/kg/min. Ataque (bolus) é opcional e perigoso em hipotensos crônicos.\n- Ajustes: Utiliza peso. Ajuste renal obrigatório (reduzir dose e omitir bolus em ClCr < 50 mL/min).\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/kg/min] × Peso × 60) / 100\n  - mL/h → Dose: (mL/h × 100) / (Peso × 60)"
  },
  "Nitroglicerina": {
    "section": 14,
    "range": null,
    "text": "- Indicação e População: Edema Agudo de Pulmão (EAP), Síndrome Coronariana Aguda. Adultos.\n- Preparo: 50 mg em Volume Final de 250 mL. (Concentração: 200 mcg/mL). Exige frasco de vidro e equipo de polietileno/sem PVC (fármaco adsorve no plástico comum).\n- Doses: Inicial: Preenchimento obrigatório (ex: 5-10 mcg/min). Máxima: 200 mcg/min. Titular a cada 3-5 minutos.\n- Ajustes: Não utiliza peso. Sem ajuste renal/hepático.\n- Cálculos:\n  - Dose → mL/h: (Dose [mcg/min] × 60) / 200\n  - mL/h → Dose: (mL/h × 200) / 60"
  },
  "Propofol": {
    "section": 15,
    "range": [
      0.3,
      4
    ],
    "text": "- Indicação e População: Sedação profunda em VM. Adultos.\n- Preparo: 200 mg em Volume Final de 20 mL. (Concentração: 10 mg/mL). Solução lipídica.\n- Doses: Inicial: Preenchimento obrigatório. Manutenção típica VM: 0,3 a 4,0 mg/kg/h.\n- Ajustes: Utiliza peso. Em obesos, considerar uso do peso ideal (evita sobredosagem).\n- Cálculos:\n  - Dose → mL/h: (Dose [mg/kg/h] × Peso) / 10\n  - mL/h → Dose: (mL/h × 10) / Peso\n- Alerta: Risco da Síndrome de Infusão do Propofol (PRIS). Sistema deve alertar doses sustentadas > 4 mg/kg/h por mais de 48h. Seringas devem ser trocadas a cada 12h devido ao risco de contaminação."
  },
  "Midazolam": {
    "section": 16,
    "range": [
      0.02,
      0.2
    ],
    "text": "- Indicação e População: Sedação contínua em UTI, controle de estado de mal epiléptico. Adultos.\n- Preparo: 15 mg em Volume Final de 100 mL. (Concentração: 0,15 mg/mL).\n- Doses: Inicial: Preenchimento obrigatório. Manutenção: 0,02 a 0,2 mg/kg/h.\n- Ajustes: Utiliza peso. Exige cautela/redução em idosos e insuficiência hepática/renal severa (acúmulo do metabólito ativo 1-hidroximidazolam prolonga o coma).\n- Cálculos:\n  - Dose → mL/h: (Dose [mg/kg/h] × Peso) / 0,15\n  - mL/h → Dose: (mL/h × 0,15) / Peso\n- Alerta: Concentração do preparo está excessivamente diluída (uma pessoa de 70kg recebendo 0,1 mg/kg/h demandaria fluxo de 46,6 mL/h). Validar com a farmácia se este não é um equívoco de cadastro (o preparo habitual em UTI costuma ser mais concentrado, como 150 mg / 100 mL = 1,5 mg/mL)."
  }
};

INFUSION_FALLBACK_DB.forEach(drug => {
  drug.amountUnit = drug.unidade.startsWith('UI/') ? 'UI' : 'mg';
  BIC_PRESETS[drug.nome] = [{id: 'prep_' + INFUSION_FALLBACK_DB.indexOf(drug),
    label: `${drug.ampolaMg} ${drug.amountUnit} / ${drug.diluenteMl} mL`,
    totalMg: drug.ampolaMg, volMl: drug.diluenteMl, solvent: drug.diluente,
    unitDefault: drug.unidade, amountUnit: drug.amountUnit,
    obs_pt: drug.obs_pt, obs_es: drug.obs_es}];
});

/* ═══════════════════════════════════════════════════════════════════════
   AUTOCOMPLETE BIC — campo interativo de seleção de droga
   Estado: _bicSelectedDrug (objeto da droga selecionada ou null)
           _bicDropdownIdx  (índice destacado no dropdown)
═══════════════════════════════════════════════════════════════════════ */
BIC_PRESETS.Amiodarona.push({id:'amio_maintenance_900_500',label:'900 mg / 500 mL · manutenção',
  totalMg:900,volMl:500,solvent:'SG 5%',amountUnit:'mg',unitDefault:'mg/min',
  obs_pt:'Preparo alternativo para manutenção. Dose e duração prescritas separadamente; esta bolsa não implica automaticamente 24 horas.',
  obs_es:'Preparación alternativa de mantenimiento. Dosis y duración prescritas por separado; esta bolsa no implica automáticamente 24 horas.'});

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
  if (_bicSelectedDrug && val !== _bicSelectedDrug.nome && val !== _bicSelectedDrug.nome_es) {
    _bicSelectedDrug = null;
    document.getElementById('inf-dose').value = '';
    document.getElementById('inf-current-rate').value = '';
    document.getElementById('inf-dilution-box')?.classList.remove('show');
    document.getElementById('bic-preset-section')?.classList.remove('show');
    calculateInfusion();
  }
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
    box.textContent = typeof currentLang !== 'undefined' && currentLang === 'es' ? 'Ningún fármaco encontrado' : 'Nenhum fármaco encontrado';
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
    const meta = `${drug.ampolaMg || '?'} ${drug.amountUnit} / ${drug.diluenteMl || '?'}mL`;
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
  ['inf-rescue-confirm','inf-vanco-confirm'].forEach(id => { const el=document.getElementById(id); if(el) el.checked=false; });
  const duration=document.getElementById('inf-duration-hours'); if(duration) duration.value='';
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
  const firstPreset = null;
  bicRenderClinicalContext(drug, firstPreset);


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
  if (!_bicSelectedDrug || _bicSelectedDrug.nome !== drugName) return;
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
      // Atomic preparation update; calculate once after both fields change.
    }
  };

  /* Concentração total da solução (mg) */
  setVal('inf-amp-mg', preset.totalMg);
  /* Volume do diluente (mL) */
  setVal('inf-vol-ml', preset.volMl);
  /* Dose inicial sugerida */
  // Applying a preparation must not prescribe or overwrite the dose.

  /* ── Atualiza caixa de diluição com dados ricos do preset ── */
  const dilBox = document.getElementById('inf-dilution-box');
  if (dilBox) {
    const lang  = typeof currentLang !== 'undefined' ? currentLang : 'pt';
    const obs   = lang === 'es' ? (preset.obs_es || preset.obs_pt) : preset.obs_pt;
    const label = t('infusion_dilution_label') || 'Diluição:';
    dilBox.innerHTML = `
      <strong>${label} ${preset.totalMg} ${preset.amountUnit} ${lang === 'es' ? 'en' : 'em'} ${preset.volMl} mL de ${preset.solvent}</strong>
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
function bicRenderClinicalContext(drug) {
  const card = document.getElementById('bic-context-card');
  if (!card) return;
  card.className = 'bic-context-card'; card.replaceChildren();
  if (!drug || _infusionMode !== 'drug') return;
  const record = INFUSION_REVIEW[drug.nome];
  if (!record) return;
  card.classList.add('show');
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = currentLang === 'es' ? 'Protocolo revisado · adultos (original en portugués)' : 'Protocolo revisado · adultos';
  const content = document.createElement('div');
  content.className = 'inf-reviewed-text';
  let reviewedText = record.text;
  if (drug.nome === 'Insulina Regular') reviewedText = reviewedText.replace('> 3,3 mEq/L', '> 3,5 mEq/L');
  if (drug.nome === 'Amiodarona') reviewedText = reviewedText.replace('~1-2 horas', '2,5 horas');
  if (drug.nome === 'Nitroprussiato') reviewedText += '\nComplemento de segurança: taxa de 10 mcg/kg/min por no máximo 10 minutos; monitorar toxicidade acima de 2 mcg/kg/min sem aguardar 48 h.';
  content.textContent = reviewedText;
  details.append(summary, content); card.append(details);
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
  ['inf-amp-mg','inf-vol-ml','inf-dose','inf-current-rate'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  _infDirection = 'dose';
  calculateInfusion();
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
  const merged = INFUSION_FALLBACK_DB.map(d => ({...d}));

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
  // Rendering options must never change a prescribed dose.
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

  _infDirection = 'dose';
  document.getElementById('inf-amount-unit').value = drug.amountUnit;
  _infConfigureUnits(drug.unidade);
  /* Preenche os campos */
  const setVal = (id, v) => { const el=document.getElementById(id); if(el) el.value = v == null ? '' : v; };
  setVal('inf-amp-mg',  drug.ampolaMg || '');
  setVal('inf-vol-ml',  drug.diluenteMl || '');
  setVal('inf-dose', '');
  setVal('inf-current-rate', '');
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
    dilBox.innerHTML = `<strong>${label} ${drug.ampolaMg || '--'} ${drug.amountUnit} ${lang === 'es' ? 'en' : 'em'} ${drug.diluenteMl || '--'} mL de ${drug.diluente}</strong>${obs ? `<small>${obs}</small>` : ''}`;
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
  if (mode !== 'free' && mode !== 'drug') return;
  const changed = _infusionMode !== mode;
  _infusionMode = mode;
  if (changed) { bicClearDrug(); bicCloseDropdown(); }
  ['free','drug'].forEach(m => document.getElementById('inf-mode-'+m)?.setAttribute('aria-pressed', String(m === mode)));
  document.getElementById('inf-amount-unit').disabled = mode === 'drug';
  _infConfigureUnits();
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
    bicOpenDropdown();
  }
  calculateInfusion();

  /* Atualiza campo de droga livre e botão copiar */
  _infUpdateFreeDrugField();
  _infUpdateCopyBtn();
}

/* ══════════════════════════════════════════════════════════════════════
   BUILD 407-UX PASSO 1 — _infWeightInlineUpdate()
   Handler do campo de peso inline no banner "Peso não cadastrado".
   ─────────────────────────────────────────────────────────────────────
   Contrato:
     1. Atualiza campo hidden #inf-weight (compat interna do motor).
     2. Persiste window.patientData.weight + localStorage (mesmas chaves
        que updateInlinePatientData() usa — compatibilidade total).
     3. Chama _onPatientDataUpdated() → atualiza chip de peso, recalcula.
     4. Auto-dismiss: quando peso ≥ 1, some com o banner e exibe o chip.
        (O dismiss visual já é feito pelo _onPatientDataUpdated via
         _onPatientDataUpdated → calculateInfusion → chip/missing toggle.)
   Segurança: parseFloat garante que vírgula decimal (teclado BR) funcione.
══════════════════════════════════════════════════════════════════════ */
function _infWeightInlineUpdate(rawVal) {
  const weight = InfusionMath.number(rawVal);
  window.patientData = Object.assign(window.patientData || {}, {weight: weight > 0 ? weight : null});
  try { localStorage.setItem('medcases_hm_patient_v1', JSON.stringify(window.patientData)); } catch(e) {}
  if (typeof _onPatientDataUpdated === 'function') _onPatientDataUpdated();
  calculateInfusion();
}

/**
 * Motor de cálculo principal — chamado em todo oninput/onchange
 */
/* Dimensional engine: no rounding until presentation, no mass/UI conversion. */
const InfusionMath = Object.freeze({
  number(raw) {
    const text = String(raw == null ? '' : raw).trim();
    if (!/^(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(text)) return NaN;
    const value = Number(text.replace(',', '.'));
    return Number.isFinite(value) ? value : NaN;
  },
  units: Object.freeze({
    'mcg/kg/min': ['mg', 0.001, 60, true],
    'mcg/min': ['mg', 0.001, 60, false],
    'mcg/kg/h': ['mg', 0.001, 1, true],
    'mcg/h': ['mg', 0.001, 1, false],
    'mg/kg/h': ['mg', 1, 1, true],
    'mg/h': ['mg', 1, 1, false],
    'mg/min': ['mg', 1, 60, false],
    'UI/min': ['UI', 1, 60, false],
    'UI/h': ['UI', 1, 1, false],
    'UI/kg/h': ['UI', 1, 1, true],
    'ml/h': [null, 1, 1, false]
  }),
  calculate({amount, volume, weight, dose, rate, unit, amountUnit, direction = 'dose'}) {
    const u = this.units[unit];
    if (!['mg','UI'].includes(amountUnit) || !u || (u[0] && u[0] !== amountUnit)) return {error: 'unit'};
    if (![amount,volume].every(v => Number.isFinite(v) && v > 0)) return {error: 'preparation'};
    const concentration = amount / volume;
    if (u[3] && !(Number.isFinite(weight) && weight > 0)) return {error:'weight', concentration};
    const input = direction === 'rate' ? rate : dose;
    if (!(Number.isFinite(input) && input > 0)) return {error:'input', concentration};
    const factor = u[1] * u[2] * (u[3] ? weight : 1);
    const flow = direction === 'rate' ? rate : unit === 'ml/h' ? dose : dose * factor / concentration;
    const delivered = unit === 'ml/h' ? flow : flow * concentration / factor;
    if (![concentration,flow,delivered,flow * concentration].every(v => Number.isFinite(v) && v > 0)) return {error:'range'};
    return {concentration, rate:flow, dose:delivered, totalPerHour:flow * concentration};
  }
});
window.InfusionMath = InfusionMath;
let _infDirection = 'dose';
let _infResult = null;
function _infValue(id) { return InfusionMath.number(document.getElementById(id)?.value); }
function _infFormat(value, digits = 4) {
  if (!Number.isFinite(value)) return '—';
  // Never render a positive infusion as zero; preserve small rates explicitly.
  if (value > 0 && value < 0.0001) return value.toExponential(4);
  return value.toLocaleString(typeof currentLang !== 'undefined' && currentLang === 'es' ? 'es-AR' : 'pt-BR',
    {maximumFractionDigits:digits, useGrouping:false});
}
function _infConfigureUnits(preferred) {
  const amountUnit = document.getElementById('inf-amount-unit')?.value || 'mg';
  const select = document.getElementById('inf-dose-unit');
  if (!select) return;
  const old = preferred || select.value;
  select.innerHTML = '';
  Object.entries(InfusionMath.units).forEach(([name,definition]) => {
    if (definition[0] && definition[0] !== amountUnit) return;
    if (_infusionMode === 'drug' && _bicSelectedDrug && name !== _bicSelectedDrug.unidade) return;
    const opt = document.createElement('option'); opt.value = name;
    opt.textContent = name === 'ml/h' ? 'mL/h' : name;
    select.appendChild(opt);
  });
  if ([...select.options].some(o => o.value === old)) select.value = old;
}
function _infAmountUnitChange() {
  _infConfigureUnits();
  document.getElementById('inf-dose').value = '';
  document.getElementById('inf-current-rate').value = '';
  _infDirection = 'dose';
  calculateInfusion();
}
const InfusionReviewSafety = Object.freeze({
  evaluate({drug, dose, age, adultConfirmed, potassium, hours, rescueConfirmed, vancoConfirmed}) {
    const errors = [], warnings = [];
    if (!drug) return {errors,warnings};
    if ((Number.isFinite(age) && age < 18) || (!Number.isFinite(age) && !adultConfirmed)) errors.push('adult');
    const range = INFUSION_REVIEW[drug]?.range;
    if (range && Number.isFinite(dose) && (dose < range[0] || dose > range[1])) warnings.push('range');
    if (drug === 'Vasopressina' && (dose > .06 || (dose > .04 && !rescueConfirmed))) errors.push('vasopressin');
    if (drug === 'Vasopressina' && dose > .04 && dose <= .06 && rescueConfirmed) warnings.push('rescue');
    if (drug === 'Insulina Regular') {
      if (!(potassium > 3.5)) errors.push('potassium');
      // User approved the >3.5 update; original review remains in the handoff.
      warnings.push('insulin');
    }
    if (drug === 'Nitroprussiato') {
      if (dose > 10) errors.push('nitroMax');
      if (!(Number.isFinite(hours) && hours > 0)) errors.push('duration');
      if (dose >= 10 && hours > 1/6) errors.push('nitroTime');
      if (dose > 2) warnings.push(hours > 48 ? 'cyanideProlonged' : 'cyanide');
      warnings.push('light');
    }
    if (drug === 'Nitroglicerina' && dose > 200) errors.push('nitroglycerin');
    if (drug === 'Propofol') {
      if (!(Number.isFinite(hours) && hours > 0)) errors.push('duration');
      if (dose > 4 && hours > 48) warnings.push('pris');
      warnings.push('propofol');
    }
    if (drug === 'Vancomicina') {
      if (!vancoConfirmed) errors.push('vancomycin');
      warnings.push('vanco');
    }
    if (drug === 'Noradrenalina' && dose > 2) warnings.push('norepinephrine');
    if (drug === 'Heparina') warnings.push('heparin');
    if (drug === 'Amiodarona') warnings.push('amiodarone');
    if (drug === 'Morfina' || drug === 'Midazolam') warnings.push('dilute');
    return {errors,warnings};
  }
});
window.InfusionReviewSafety = InfusionReviewSafety;
const INF_REVIEW_MESSAGES = {
 adult:['Protocolo exclusivo para adultos. Informe idade ≥18 anos na Home ou confirme que o paciente é adulto.','Protocolo exclusivo para adultos. Introduzca edad ≥18 años en Inicio o confirme que es adulto.'],
 range:['Dose fora da faixa de manutenção descrita no parecer. Conferir indicação e prescrição.','Dosis fuera del intervalo de mantenimiento del informe. Revise indicación y prescripción.'],
 vasopressin:['Limite usual: 0,04 UI/min. Resgate exige confirmação explícita e não pode ultrapassar 0,06 UI/min.','Límite habitual: 0,04 UI/min. Rescate requiere confirmación explícita y no puede superar 0,06 UI/min.'],
 rescue:['Resgate off-label confirmado. Monitorização e prescrição específica obrigatórias.','Rescate fuera de indicación confirmado. Requiere monitorización y prescripción específica.'],
 potassium:['Insulina bloqueada: informe potássio atual >3,5 mEq/L.','Insulina bloqueada: introduzca potasio actual >3,5 mEq/L.'],
 insulin:['Purgar equipo e seguir protocolo de HGT e potássio. Insuficiência renal aumenta risco de hipoglicemia.','Purgar el equipo y seguir protocolo de glucemia y potasio. Insuficiencia renal aumenta riesgo de hipoglucemia.'],
 duration:['Informe a duração total planejada, incluindo o tempo já infundido, em horas.','Introduzca duración total prevista, incluido tiempo ya infundido, en horas.'],
 nitroMax:['Nitroprussiato: dose máxima 10 mcg/kg/min.','Nitroprusiato: dosis máxima 10 mcg/kg/min.'],
 nitroTime:['Nitroprussiato: 10 mcg/kg/min por mais de 10 minutos bloqueado.','Nitroprusiato: 10 mcg/kg/min durante más de 10 minutos bloqueado.'],
 cyanide:['Acima de 2 mcg/kg/min: risco de toxicidade por cianeto; não aguardar 48 h para monitorizar.','Por encima de 2 mcg/kg/min: riesgo de toxicidad por cianuro; no esperar 48 h para monitorizar.'],
 cyanideProlonged:['Dose >2 mcg/kg/min por >48 h: alerta de toxicidade por cianeto/tiocianato. Revisar imediatamente.','Dosis >2 mcg/kg/min durante >48 h: alerta de toxicidad por cianuro/tiocianato. Revisión inmediata.'],
 light:['Nitroprussiato: fotoproteção e cautela renal/hepática.','Nitroprusiato: fotoprotección y precaución renal/hepática.'],
 nitroglycerin:['Nitroglicerina: limite do parecer de 200 mcg/min excedido.','Nitroglicerina: límite del informe de 200 mcg/min superado.'],
 pris:['Propofol >4 mg/kg/h por >48 h: risco de PRIS. Revisar prescrição imediatamente.','Propofol >4 mg/kg/h durante >48 h: riesgo de PRIS. Revisión inmediata de la prescripción.'],
 propofol:['Propofol: conferir troca da seringa conforme apresentação e protocolo; parecer indica 12 h.','Propofol: verificar cambio de jeringa según presentación y protocolo; el informe indica 12 h.'],
 vancomycin:['Confirme infusão contínua e protocolo de monitorização de vancomicina. Uso intermitente requer prescrição de dose e tempo em fluxo separado.','Confirme infusión continua y protocolo de monitorización de vancomicina. Uso intermitente requiere dosis y tiempo en flujo separado.'],
 vanco:['Vancomicina: inserir mg/h prescritos (mg/dia ÷24), ajustar à função renal e programar reposição da bolsa.','Vancomicina: introducir mg/h prescritos (mg/día ÷24), ajustar a función renal y programar recambio de bolsa.'],
 norepinephrine:['Noradrenalina >2 mcg/kg/min: parecer sugere bloqueio entre 2–3; limiar exato depende da política local e ainda não foi definido.','Noradrenalina >2 mcg/kg/min: informe propone bloqueo entre 2–3; el umbral exacto depende de la política local y no está definido.'],
 heparin:['Ataque separado. Conferir TTPA, plaquetas, sangramento e limites locais para obesidade extrema.','Carga por separado. Verificar TTPA, plaquetas, sangrado y límites locales en obesidad extrema.'],
 amiodarone:['SG 5%. Confirmar duração e volume de manutenção; 150 mg a 1 mg/min duram 2,5 h.','SG 5%. Confirmar duración y volumen de mantenimiento; 150 mg a 1 mg/min duran 2,5 h.'],
 dilute:['Preparo diluído sinalizado no parecer. Conferir carga hídrica com a farmácia; concentração alternativa não foi aplicada automaticamente.','Preparación diluida señalada en el informe. Revisar carga de volumen con farmacia; no se aplicó concentración alternativa automáticamente.']
};
function _infClinicalState(mathResult) {
  const get=id=>document.getElementById(id);
  const drug=_infusionMode === 'drug' ? _bicSelectedDrug?.nome : null;
  const show=(id,on)=>{ const el=get(id); if(el) el.style.display=on?'block':'none'; };
  show('inf-review-controls',!!drug);
  show('inf-potassium-wrap',drug==='Insulina Regular');
  show('inf-duration-wrap',['Nitroprussiato','Propofol'].includes(drug));
  show('inf-rescue-wrap',drug==='Vasopressina');
  show('inf-vanco-wrap',drug==='Vancomicina');
  const state=InfusionReviewSafety.evaluate({drug,dose:mathResult.dose,
    age:InfusionMath.number((window.patientData||{}).age),adultConfirmed:!!get('inf-adult-confirm')?.checked,
    potassium:_infValue('inf-potassium'),hours:_infValue('inf-duration-hours'),
    rescueConfirmed:!!get('inf-rescue-confirm')?.checked,vancoConfirmed:!!get('inf-vanco-confirm')?.checked});
  const box=get('inf-clinical-alerts');
  if(box) {
    box.replaceChildren();
    [...state.errors,...state.warnings].forEach(code=>{const row=document.createElement('p');row.textContent=INF_REVIEW_MESSAGES[code][currentLang==='es'?1:0];box.append(row);});
    box.style.display=box.childElementCount?'block':'none';
  }
  return state;
}

function calculateInfusion() {
  const get = id => document.getElementById(id);
  const text = (id,value) => { if(get(id)) get(id).textContent = value; };
  const es = typeof currentLang !== 'undefined' && currentLang === 'es';
  const weight = InfusionMath.number((window.patientData || {}).weight);
  const amountUnit = get('inf-amount-unit')?.value || 'mg';
  const unit = get('inf-dose-unit')?.value || 'mcg/kg/min';
  const values = {amount:_infValue('inf-amp-mg'), volume:_infValue('inf-vol-ml'), weight,
    dose:_infValue('inf-dose'), rate:_infValue('inf-current-rate'), unit, amountUnit, direction:_infDirection};
  _infResult = InfusionMath.calculate(values);
  if (_infusionMode === 'drug' && !_bicSelectedDrug) _infResult = {error:'selection'};
  const clinical = _infClinicalState(_infResult);
  if (!_infResult.error && clinical.errors.length) _infResult.error='clinical';
  const valid = !_infResult.error;
  const concentration = _infResult.concentration;
  const concUnit = amountUnit === 'UI' ? 'UI/mL' : 'mcg/mL';
  const conc = concentration * (amountUnit === 'mg' ? 1000 : 1);
  const errors = es ? {
    preparation:'Introduzca la cantidad total y el volumen final, mayores que cero.',
    weight:'Introduzca y confirme el peso utilizado en la prescripción.',
    input:'Introduzca una dosis o un caudal mayor que cero. Se admite coma decimal.',
    selection:'Seleccione un fármaco de la lista.', unit:'Las unidades de preparación y dosis no son compatibles.',
    range:'Valores fuera del rango numérico. Revise los parámetros.'
  } : {
    preparation:'Informe a quantidade total e o volume final, maiores que zero.',
    weight:'Informe e confirme o peso utilizado na prescrição.',
    input:'Informe uma dose ou vazão maior que zero. Vírgula decimal é aceita.',
    selection:'Selecione um fármaco da lista.', unit:'As unidades do preparo e da dose não são compatíveis.',
    range:'Valores fora do intervalo numérico. Revise os parâmetros.'
  };
  get('inf-weight-chip').style.display = weight > 0 ? 'flex' : 'none';
  get('inf-weight-missing').style.display = weight > 0 ? 'none' : 'flex';
  text('inf-weight-chip-val', _infFormat(weight));
  text('inf-amount-label', es ? 'Cantidad total del fármaco' : 'Quantidade total do fármaco');
  get('inf-result-area').classList.toggle('show', valid);
  get('inf-empty-hint').style.display = valid ? 'none' : 'flex';
  const hint = get('inf-empty-hint').querySelector('p');
  if (hint) hint.textContent = valid ? '' : _infResult.error === 'clinical' ? INF_REVIEW_MESSAGES[clinical.errors[0]][es?1:0] : errors[_infResult.error];
  text('inf-rate-result', valid ? _infFormat(_infResult.rate) : '—');
  text('inf-conc-result', valid ? _infFormat(conc) : '—');
  text('inf-conc-unit', concUnit);
  text('inf-bag-duration', valid ? `${es ? 'Consumo del volumen' : 'Consumo do volume'}: ${_infFormat(values.volume / _infResult.rate,2)} h · ${es ? 'respetar estabilidad y recambio' : 'respeitar estabilidade e troca'}` : '');
  text('inf-conc-inline', valid ? `${values.amount} ${amountUnit} / ${values.volume} mL = ${_infFormat(conc)} ${concUnit}` : '');
  text('inf-dose-label-sec', es ? 'Dosis administrada' : 'Dose administrada');
  text('inf-dose-sec-result', valid ? _infFormat(_infResult.dose,6) : '—');
  text('inf-dose-sec-unit', unit === 'ml/h' ? 'mL/h' : unit);
  get('inf-reverse-card').style.display = 'none';
  get('inf-weight-note').classList.remove('show');
  // Synchronize only the derived field, retaining the exact source input.
  const derived = get(_infDirection === 'rate' ? 'inf-dose' : 'inf-current-rate');
  if (derived) derived.value = valid ? String(Number((_infDirection === 'rate' ? _infResult.dose : _infResult.rate).toPrecision(12))) : '';
  const btn = get('inf-copy-rx-btn');
  btn.disabled = !valid; btn.style.display = valid ? 'flex' : 'none';
  bicRenderClinicalContext(_bicSelectedDrug);
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
  const btn = document.getElementById('inf-copy-rx-btn');
  if(btn) { btn.disabled = !_infResult || !!_infResult.error; btn.style.display = btn.disabled ? 'none' : 'flex'; }
}

/**
 * Gera e copia o texto da prescrição de infusão.
 * Funciona em ambos os modos (livre e droga).
 */
function infCopyPrescription() {
  calculateInfusion();
  if (!_infResult || _infResult.error) return;
  const amountUnit = document.getElementById('inf-amount-unit').value;
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
  const lInf    = isES ? 'CÁLCULO DE INFUSIÓN' : 'CÁLCULO DE INFUSÃO';
  const lData   = isES ? 'Fecha/hora'        : 'Data/hora';
  const lWarn   = isES
    ? 'Confirmar dosis, preparación y protocolo institucional antes de administrar.'
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
  lines.push(`${lConc}: ${ampolaMg} ${amountUnit} ${isES ? 'en' : 'em'} ${volumeMl} mL`);
  if (dose) lines.push(`${lDose}: ${dose} ${unidade}`);
  lines.push('');
  lines.push(`${lVazao}: ${vazao} mL/h`);
  lines.push(`${lConcFin}: ${conc} ${amountUnit === 'UI' ? 'UI/mL' : 'mcg/mL'}`);
  if (doseSec && doseSec !== '--') lines.push(`${doseSecLbl}: ${doseSec} ${doseSecUnt}`);

  if (false) {
    lines.push('');
    lines.push(`${lConv}: ${rateAtual} mL/h → ${revResult} ${revUnit}`);
  }

  /* Nota do preset (se houver) */
  const dilBoxText = document.getElementById('inf-dilution-box')?.innerText?.trim() || '';
  if (false) { // Preparation fields above are authoritative; omit obsolete preset text.
    lines.push('');
    lines.push(dilBoxText);
  }

  lines.push('');
  lines.push(sep);
  const clinicalNotes = document.getElementById('inf-clinical-alerts')?.innerText?.trim();
  if (clinicalNotes) lines.push(clinicalNotes);
  if (_infusionMode === 'free') lines.push(isES ? 'Cálculo libre: sin validación del protocolo de un fármaco.' : 'Cálculo livre: sem validação de protocolo de um fármaco.');
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
  if (_bicSelectedDrug) {
    const es = currentLang === 'es';
    document.getElementById('inf-drug-search').value = es ? _bicSelectedDrug.nome_es : _bicSelectedDrug.nome;
    bicRenderPresets(_bicSelectedDrug);
    bicRenderClinicalContext(_bicSelectedDrug);
  }
  calculateInfusion();
}


/* ============================================================
   BUILD 284 — EXPOSIÇÕES WINDOW.*
   Todas as funções públicas do motor de infusão são explicitamente
   anexadas ao objeto window para garantir acesso global em WebView
   iOS/Android e no contexto de módulos carregados com defer.
   Funções privadas (prefixo _) NÃO são expostas.
============================================================ */
window.bicOpenDropdown          = bicOpenDropdown;
/* ══════════════════════════════════════════════════════════════════════
   BUILD 407-UX PASSO 2 — _infBidir(source)
   Motor Bidirecional "Vasos Comunicantes" — Dose ⇔ Vazão (mL/h)
   ─────────────────────────────────────────────────────────────────────
   source: 'dose' | 'rate' | 'unit'
     'dose' → calcula mL/h e escreve em #inf-current-rate
     'rate' → calcula dose e escreve em #inf-dose
     'unit' → mudança de unidade recalcula tudo a partir da dose

   LOCK ANTI-LOOP: variável _infBidirLock garante que a escrita
   programática de um campo não re-dispare o cálculo do outro.
   Pattern: lock=true → escrever → lock=false — protegido por try/finally.

   MATH (inversa de calculateInfusion):
     mcgPorMl = (ampMg / volMl) * 1000
     mcg/kg/min: mlH = (dose * peso * 60) / mcgPorMl
     mcg/min:    mlH = (dose * 60)         / mcgPorMl
     mg/kg/h:    mlH = (dose * peso)       / mgPorMl
     ml/h:       mlH = dose

   Reversa:
     mcg/kg/min: dose = (mlH * mcgPorMl) / (peso * 60)
     mcg/min:    dose = (mlH * mcgPorMl) / 60
     mg/kg/h:    dose = (mlH * mgPorMl)  / peso
     ml/h:       dose = mlH
══════════════════════════════════════════════════════════════════════ */
function _infBidir(source) {
  if (source === 'rate' || source === 'dose') _infDirection = source;
  // Unit changes convert the currently delivered rate rather than reinterpreting the number.
  if (source === 'unit' && _infResult && !_infResult.error) {
    document.getElementById('inf-current-rate').value = String(_infResult.rate);
    _infDirection = 'rate';
  }
  calculateInfusion();
}
window._infAmountUnitChange = _infAmountUnitChange;

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
window._infWeightInlineUpdate   = _infWeightInlineUpdate;
window._infBidir                = _infBidir;
