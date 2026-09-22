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
  {
    "nome": "Noradrenalina",
    "nome_es": "Noradrenalina",
    "ampolaMg": 4,
    "diluenteMl": 250,
    "diluente": "NaCl 0,9% ready-to-use",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "Nao usar 0.01 mcg/kg/min como limite inferior do esquema weight-based sem fonte especifica. Calculation authority permanece false ate\nhomologacao + QA tecnico. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Nao usar 0.01 mcg/kg/min como limite inferior do esquema weight-based sem fonte especifica. Calculation authority permanece false ate\nhomologacao + QA tecnico. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "noradrenalina",
    "bindingId": "prep_0",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Adrenalina",
    "nome_es": "Adrenalina",
    "ampolaMg": 4,
    "diluenteMl": 250,
    "diluente": "NaCl 0,9% ready-to-use",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "Nao reutilizar esta bomba para anafilaxia ou PCR. Calculation authority false ate homologacao + QA. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Nao reutilizar esta bomba para anafilaxia ou PCR. Calculation authority false ate homologacao + QA. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "adrenalina",
    "bindingId": "prep_1",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Dobutamina",
    "nome_es": "Dobutamina",
    "ampolaMg": 250,
    "diluenteMl": 250,
    "diluente": "SG 5% ou NaCl 0,9%",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "Faixas acima de 20 exigem contexto/monitorizacao; nenhum valor pediatrico liberado. Pediatria: calculo bloqueado; nenhuma dose\nadulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Faixas acima de 20 exigem contexto/monitorizacao; nenhum valor pediatrico liberado. Pediatria: calculo bloqueado; nenhuma dose\nadulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "dobutamina",
    "bindingId": "prep_2",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Dopamina",
    "nome_es": "Dopamina",
    "ampolaMg": 200,
    "diluenteMl": 250,
    "diluente": "Solução compatível conforme produto",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "O antigo 20 mcg/kg/min nao deve ser hard max. Pediatria continua bloqueada por contrato do PATCH3S. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: O antigo 20 mcg/kg/min nao deve ser hard max. Pediatria continua bloqueada por contrato do PATCH3S. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "dopamina",
    "bindingId": "prep_3",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Milrinona",
    "nome_es": "Milrinona",
    "ampolaMg": 20,
    "diluenteMl": 100,
    "diluente": "Conforme produto; binding bloqueado",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "BLOQUEIO ABSOLUTO DE BINDING: nenhum canonical ID comprovado no pacote local. Nao criar alias/ID. Clinica pode ser revisada,\nmas software permanece fail-closed. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.",
    "obs_es": "Parecer original em português: BLOQUEIO ABSOLUTO DE BINDING: nenhum canonical ID comprovado no pacote local. Nao criar alias/ID. Clinica pode ser revisada,\nmas software permanece fail-closed. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.",
    "amountUnit": "mg",
    "canonicalDrugId": null,
    "bindingId": "prep_4",
    "infusionMode": "continuous",
    "calculationBlock": "CANONICAL_ID_MISSING"
  },
  {
    "nome": "Vasopressina",
    "nome_es": "Vasopresina",
    "ampolaMg": 20,
    "diluenteMl": 100,
    "diluente": "Ready-to-use; conforme produto",
    "doseInicial": null,
    "unidade": "UI/min",
    "obs_pt": "Remover hard max universal 0.04 e a regra \"0.06 resgate off-label\" como se fossem regulatórias. Se 0.04 for politica local, rotular como\npolitica local. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Remover hard max universal 0.04 e a regra \"0.06 resgate off-label\" como se fossem regulatórias. Se 0.04 for politica local, rotular como\npolitica local. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "UI",
    "canonicalDrugId": "vasopressina",
    "bindingId": "prep_5",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Nitroprussiato",
    "nome_es": "Nitroprussiato",
    "ampolaMg": 50,
    "diluenteMl": 250,
    "diluente": "SG 5%",
    "doseInicial": null,
    "unidade": "mcg/kg/min",
    "obs_pt": "Corrigir alerta: acima de 2 mcg/kg/min o risco de cianeto ja aumenta; nao condicionar monitorizacao a 48-72 h. Duplicidade de IDs\ncontinua assunto tecnico separado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Corrigir alerta: acima de 2 mcg/kg/min o risco de cianeto ja aumenta; nao condicionar monitorizacao a 48-72 h. Duplicidade de IDs\ncontinua assunto tecnico separado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": null,
    "bindingId": "prep_6",
    "infusionMode": "continuous",
    "calculationBlock": "CANONICAL_DUPLICATE_RECONCILIATION_REQUIRED"
  },
  {
    "nome": "Nitroglicerina",
    "nome_es": "Nitroglicerina",
    "ampolaMg": 50,
    "diluenteMl": 250,
    "diluente": "SG 5%",
    "doseInicial": null,
    "unidade": "mcg/min",
    "obs_pt": "Remover hard max universal 200 mcg/min. A fonte documenta grande variabilidade de necessidade; limites locais devem ser politicas\nexplicitas. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Remover hard max universal 200 mcg/min. A fonte documenta grande variabilidade de necessidade; limites locais devem ser politicas\nexplicitas. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "nitroglicerinaiv",
    "bindingId": "prep_7",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Amiodarona",
    "nome_es": "Amiodarona",
    "ampolaMg": 150,
    "diluenteMl": 100,
    "diluente": "Premix conforme produto",
    "doseInicial": null,
    "unidade": "mg/min",
    "obs_pt": "Nao presumir que 900/500 seja automaticamente equivalente a produto premixado; exige protocolo local se usado. Pediatria: calculo\nbloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Nao presumir que 900/500 seja automaticamente equivalente a produto premixado; exige protocolo local se usado. Pediatria: calculo\nbloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "amiodarona",
    "bindingId": "prep_8",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Heparina",
    "nome_es": "Heparina",
    "ampolaMg": 25000,
    "diluenteMl": 250,
    "diluente": "SG 5%",
    "doseInicial": null,
    "unidade": "UI/kg/h",
    "obs_pt": "Binding pode ser homologado; calculadora deve exigir \"indicacao/nomograma\" e dose prescrita. Nada de dose-padrao universal.\nPediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Binding pode ser homologado; calculadora deve exigir \"indicacao/nomograma\" e dose prescrita. Nada de dose-padrao universal.\nPediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "UI",
    "canonicalDrugId": "heparina_hnf",
    "bindingId": "prep_9",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Propofol",
    "nome_es": "Propofol",
    "ampolaMg": 200,
    "diluenteMl": 20,
    "diluente": "Emulsão pronta; não diluir",
    "doseInicial": null,
    "unidade": "mg/kg/h",
    "obs_pt": "Trocar \"tipica 0.3-4\" por \"usual 0.3-3; 4 como limite excepcional\". Linhas/frasco: descarte/troca em 12 h. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Trocar \"tipica 0.3-4\" por \"usual 0.3-3; 4 como limite excepcional\". Linhas/frasco: descarte/troca em 12 h. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "propofol",
    "bindingId": "prep_10",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Midazolam",
    "nome_es": "Midazolam",
    "ampolaMg": 50,
    "diluenteMl": 100,
    "diluente": "NaCl 0,9% ou SG 5%",
    "doseInicial": null,
    "unidade": "mg/kg/h",
    "obs_pt": "Substituir 0.15 mg/mL e range ate 0.2 como padrao. Retirar estado de mal epileptico deste preset se nao houver protocolo independente\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Substituir 0.15 mg/mL e range ate 0.2 como padrao. Retirar estado de mal epileptico deste preset se nao houver protocolo independente\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "midazolam",
    "bindingId": "prep_11",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Morfina",
    "nome_es": "Morfina",
    "ampolaMg": 10,
    "diluenteMl": 100,
    "diluente": "Concentração local não autorizada",
    "doseInicial": null,
    "unidade": "mg/h",
    "obs_pt": "CALCULO BLOQUEADO: concentracao final e politica institucional nao validadas. O medico nao precisa preencher nada; basta aceitar o\nbloqueio ou solicitar outro protocolo. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.",
    "obs_es": "Parecer original em português: CALCULO BLOQUEADO: concentracao final e politica institucional nao validadas. O medico nao precisa preencher nada; basta aceitar o\nbloqueio ou solicitar outro protocolo. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "morfina",
    "bindingId": "prep_12",
    "infusionMode": "continuous",
    "calculationBlock": "INSTITUTIONAL_CONCENTRATION_MISSING"
  },
  {
    "nome": "Fentanil",
    "nome_es": "Fentanil",
    "ampolaMg": 0.5,
    "diluenteMl": 100,
    "diluente": "Preparo contínuo não autorizado",
    "doseInicial": null,
    "unidade": "mcg/kg/h",
    "obs_pt": "CALCULO BLOQUEADO: identidade e stock comprovados, mas regime continuo e diluicao final do preset exigem protocolo institucional\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: CALCULO BLOQUEADO: identidade e stock comprovados, mas regime continuo e diluicao final do preset exigem protocolo institucional\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "fentanil",
    "bindingId": "prep_13",
    "infusionMode": "continuous",
    "calculationBlock": "INSTITUTIONAL_REGIMEN_MISSING"
  },
  {
    "nome": "Insulina Regular",
    "nome_es": "Insulina Regular",
    "ampolaMg": 100,
    "diluenteMl": 100,
    "diluente": "NaCl 0,9% ready-to-use",
    "doseInicial": null,
    "unidade": "UI/kg/h",
    "obs_pt": "Adotar limiar K 3.5, nao 3.3. Nao usar este preset para \"pos-operatorio\" sem protocolo separado. Pediatria: calculo bloqueado; nenhuma\ndose adulta pode ser reutilizada ou convertida para criancas.",
    "obs_es": "Parecer original em português: Adotar limiar K 3.5, nao 3.3. Nao usar este preset para \"pos-operatorio\" sem protocolo separado. Pediatria: calculo bloqueado; nenhuma\ndose adulta pode ser reutilizada ou convertida para criancas.",
    "amountUnit": "UI",
    "canonicalDrugId": "insulina_regular",
    "bindingId": "prep_14",
    "infusionMode": "continuous",
    "calculationBlock": null
  },
  {
    "nome": "Vancomicina",
    "nome_es": "Vancomicina",
    "ampolaMg": 500,
    "diluenteMl": 100,
    "diluente": "SF 0,9% ou SG 5% conforme produto",
    "doseInicial": null,
    "unidade": "ml/h",
    "obs_pt": "INFUSAO CONTINUA BLOQUEADA. O preparo 500/100 e validavel como intermitente, nao como protocolo continuo. Se desejar continua,\ncriar ficha separada com carga, concentracao, alvo e TDM. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou\nconvertida para criancas.",
    "obs_es": "Parecer original em português: INFUSAO CONTINUA BLOQUEADA. O preparo 500/100 e validavel como intermitente, nao como protocolo continuo. Se desejar continua,\ncriar ficha separada com carga, concentracao, alvo e TDM. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou\nconvertida para criancas.",
    "amountUnit": "mg",
    "canonicalDrugId": "vancomicina",
    "bindingId": "prep_15",
    "infusionMode": "intermittent",
    "calculationBlock": null
  }
];

const INFUSION_REVIEW = {
  "Noradrenalina": {
    "section": 1,
    "range": [
      0.05,
      1.5
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nHipotensao aguda grave/choque apos correcao adequada da hipovolemia; titular a alvo hemodinamico.\n\nProposta V2:\nPadrao verificavel: 4 mg / 250 mL = 16 mcg/mL em NaCl 0,9% ready-to-use. Se SG5% for mantido, exigir\nbula/protocolo especifico do concentrado usado localmente.\n\nDose / titulacao:\nInicio 0.05-0.15 mcg/kg/min; manutencao 0.05-1.5 mcg/kg/min; titular em passos de 0.05-0.1 conforme efeito pressor.\n\nFormula de bomba:\nmL/h = dose (mcg/kg/min) x peso (kg) x 60 / 16.\n\nMonitorizacao critica:\nPA continua/invasiva quando indicado, perfusao, ritmo, sitio de infusao; corrigir hipovolemia.\n\nRenal / organica:\nSem tabela numerica universal no escopo desta revisao; titular a resposta.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nNao usar 0.01 mcg/kg/min como limite inferior do esquema weight-based sem fonte especifica. Calculation authority permanece false ate\nhomologacao + QA tecnico. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] eMC - Noradrenaline 0.16 mg/mL solution for infusion, SmPC (updated 13 May 2026)\nDose weight-based: initial 0.05-0.15 mcg/kg/min; maintenance 0.05-1.5 mcg/kg/min.\nhttps://www.medicines.org.uk/emc/product/102170/smpc\nAcesso: 2026-09-21\n[2] DailyMed - Norepinephrine in Sodium Chloride Injection, 4 mg/250 mL (16 mcg/mL)\nReady-to-use 4 mg/250 mL normal saline concentration.\nhttps://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1f112215-cef7-46a0-b838-ba0542a99d2c\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "noradrenalina",
    "reviewPage": 3
  },
  "Adrenalina": {
    "section": 2,
    "range": [
      0.05,
      2
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nEste binding deve ficar restrito a hipotensao associada a choque septico em adultos. Anafilaxia IM/SC e PCR sao\nfluxos/formulacoes distintos.\n\nProposta V2:\nPadrao regulatorio atual verificavel: 4 mg / 250 mL NaCl 0,9% = 16 mcg/mL, ready-to-use.\n\nDose / titulacao:\n0.05-2 mcg/kg/min, titulada a MAP; ajustes a cada 10-15 min; usar peso ideal (IBW) na rotulagem consultada.\n\nFormula de bomba:\nmL/h = dose (mcg/kg/min) x IBW (kg) x 60 / 16.\n\nMonitorizacao critica:\nPA, FC/ritmo, perfusao, extravasamento, isquemia, edema pulmonar; desmame gradual apos estabilizacao.\n\nRenal / organica:\nMonitorar funcao renal/oliguria; sem tabela numerica de ajuste para este uso.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nNao reutilizar esta bomba para anafilaxia ou PCR. Calculation authority false ate homologacao + QA. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed/FDA - Epinephrine in 0.9% Sodium Chloride Injection, revised 03/2026\nAdult septic shock: 0.05-2 mcg/kg/min; IBW; 4 mg/250 mL = 16 mcg/mL.\nhttps://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=60efd409-3555-4182-a68d-1cd7bc0d1bfc&type=display\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "adrenalina",
    "reviewPage": 4
  },
  "Dobutamina": {
    "section": 3,
    "range": [
      2,
      20
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nSuporte inotropico de curto prazo em baixo debito/descompensacao cardiaca.\n\nProposta V2:\n250 mg / 250 mL = 1000 mcg/mL; SG5% ou NaCl 0,9% sao diluentes compativeis na bula consultada; usar em ate 24\nh.\n\nDose / titulacao:\nIniciar 0.5-1 mcg/kg/min; usual 2-20; raramente podem ser necessarias taxas ate 40 mcg/kg/min. Nao transformar 20\nem hard max universal.\n\nFormula de bomba:\nmL/h = dose (mcg/kg/min) x peso x 60 / 1000.\n\nMonitorizacao critica:\nPA, FC/ECG, ectopias, diurese, debito cardiaco quando disponivel, perfusao e sitio de infusao.\n\nRenal / organica:\nSem ajuste fixo; titular por hemodinamica.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nFaixas acima de 20 exigem contexto/monitorizacao; nenhum valor pediatrico liberado. Pediatria: calculo bloqueado; nenhuma dose\nadulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Dobutamine Injection USP\nStart 0.5-1; usual 2-20 mcg/kg/min; rarely up to 40; 1000 mcg/mL table; compatible diluents.\nhttps://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=74ba9408-17d3-48ac-be0b-a4fee9e7a1a5\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "dobutamina",
    "reviewPage": 5
  },
  "Dopamina": {
    "section": 4,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nSuporte hemodinamico em choque distributivo ou baixo debito apos corrigir hipovolemia, acidose e hipoxia.\n\nProposta V2:\n200 mg / 250 mL = 800 mcg/mL, diluido em solucao compativel; IV por bomba e veia calibrosa.\n\nDose / titulacao:\nInicio 2-5 mcg/kg/min; titular em incrementos de 5-10 conforme resposta; nao exceder 50 mcg/kg/min.\n\nFormula de bomba:\nmL/h = dose x peso x 60 / 800.\n\nMonitorizacao critica:\nPA/ECG, perfusao, diurese, resposta hemodinamica e extravasamento; nao misturar com bicarbonato/solucoes\nalcalinas.\n\nRenal / organica:\nSem ajuste fixo; titular.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nO antigo 20 mcg/kg/min nao deve ser hard max. Pediatria continua bloqueada por contrato do PATCH3S. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Dopamine Hydrochloride Injection\nStart 2-5 mcg/kg/min; titrate 5-10; max 50; 200 mg/250 mL = 800 mcg/mL example.\nhttps://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38431050-007e-41b2-e063-6394a90a1d64\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "dopamina",
    "reviewPage": 6
  },
  "Milrinona": {
    "section": 5,
    "range": [
      0.375,
      0.75
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nInsuficiencia cardiaca aguda/descompensada com necessidade de suporte inotropico, conforme indicacao do produto.\n\nProposta V2:\nConcentracao de manutencao verificavel: 200 mcg/mL. Ex.: 20 mL de 1 mg/mL + 80 mL diluente = 100 mL; ou 10 mL +\n40 mL = 50 mL.\n\nDose / titulacao:\nManutencao 0.375-0.75 mcg/kg/min (padrao 0.5). Bula inclui carga 50 mcg/kg/10 min, cuja utilizacao deve ser decisao\nclinica especifica.\n\nFormula de bomba:\nCom 200 mcg/mL: mL/h = dose x peso x 60 / 200.\n\nMonitorizacao critica:\nPA, ritmo, resposta hemodinamica, eletrólitos e funcao renal.\n\nRenal / organica:\nAjustar taxa por ClCr: 5->0.20; 10->0.23; 20->0.28; 30->0.33; 40->0.38; 50->0.43 mcg/kg/min (tabela da bula).\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nBLOQUEIO ABSOLUTO DE BINDING: nenhum canonical ID comprovado no pacote local. Nao criar alias/ID. Clinica pode ser revisada,\nmas software permanece fail-closed. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Milrinone Lactate Injection\nMaintenance 0.375-0.75; recommended dilution 200 mcg/mL; renal-rate table.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07dddead-22ed-004c-e063-6294a90a76fc\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": null,
    "reviewPage": 7
  },
  "Vasopressina": {
    "section": 6,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nAdultos com choque vasodilatador persistente apesar de fluidos e catecolaminas; separar choque septico de\npos-cardiotomia.\n\nProposta V2:\n20 U / 100 mL = 0.2 U/mL e uma apresentacao ready-to-use documentada. Concentrados tambem podem ser diluidos\nem NS ou D5W conforme produto.\n\nDose / titulacao:\nChoque septico: iniciar 0.01 U/min, +0.005 U/min a cada 10-15 min; dados limitados acima de 0.07 U/min.\nPos-cardiotomia: iniciar 0.03; dados limitados acima de 0.1.\n\nFormula de bomba:\nmL/h = dose (U/min) x 60 / 0.2.\n\nMonitorizacao critica:\nPA, perfusao/isquemia, FC/ritmo, debito cardiaco, sodio; titular a menor dose eficaz.\n\nRenal / organica:\nSem tabela numerica de ajuste na fonte principal deste binding.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nRemover hard max universal 0.04 e a regra \"0.06 resgate off-label\" como se fossem regulatórias. Se 0.04 for politica local, rotular como\npolitica local. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - VASOSTRICT (vasopressin) Injection\nSeptic shock start 0.01 U/min, titrate by 0.005 q10-15 min; limited data above 0.07; premix 20 U/100 mL.\nhttps://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b1147beb-743e-4c62-8927-91192447f8b8\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "vasopressina",
    "reviewPage": 8
  },
  "Nitroprussiato": {
    "section": 7,
    "range": [
      0.3,
      10
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nReducao imediata de PA em crise hipertensiva; hipotensao controlada cirurgica; IC aguda conforme indicacao da bula.\n\nProposta V2:\n50 mg / 250 mL D5W = 200 mcg/mL; bomba obrigatoria; proteger solucao da luz conforme rotulagem.\n\nDose / titulacao:\nIniciar 0.3 mcg/kg/min; titular a cada poucos minutos; maximo 10 mcg/kg/min e essa taxa nao deve ser mantida >10\nmin.\n\nFormula de bomba:\nmL/h = dose x peso x 60 / 200.\n\nMonitorizacao critica:\nPA continua (preferencialmente invasiva), perfusao, acidose/lactato conforme contexto, funcao renal/hepatica; risco de\ncianeto/tiocianato.\n\nRenal / organica:\nCautela reforcada em disfuncao renal para toxicidade por tiocianato; nao inventar tabela de dose se nao houver no\nproduto.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nCorrigir alerta: acima de 2 mcg/kg/min o risco de cianeto ja aumenta; nao condicionar monitorizacao a 48-72 h. Duplicidade de IDs\ncontinua assunto tecnico separado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Sodium Nitroprusside Injection, concentrate (updated 06/2026)\nStart 0.3 mcg/kg/min; max 10; 50 mg/250 mL = 200 mcg/mL; pump, continuous BP; cyanide risk >2.\nhttps://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2122b9c1-0af4-493b-82cc-63eee02f987f\nAcesso: 2026-09-21\nEvidencia interna adicional de identidade: Gold33 Lote 056 homologado clinicamente contem os IDs nitroprussiato_sodio e nitroglicerinaiv. Essa evidencia nao substitui a bula para\ndose/preparo.\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": null,
    "reviewPage": 9
  },
  "Nitroglicerina": {
    "section": 8,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nVasodilatacao IV titulada conforme indicacao hemodinamica; nao reutilizar para formulações sublinguais/transdermicas.\n\nProposta V2:\n50 mg / 250 mL D5W = 200 mcg/mL e apresentacao regulatoria documentada. Usar tubing nao adsorptivo e recipiente\ncompativel com o produto; nao impor \"vidro\" a toda formulacao.\n\nDose / titulacao:\nCom tubing nao adsorptivo: iniciar 5 mcg/min; +5 mcg/min a cada 3-5 min; se sem resposta a 20, incrementos de 10-20\npodem ser usados; titular individualmente.\n\nFormula de bomba:\nmL/h = dose (mcg/min) x 60 / 200.\n\nMonitorizacao critica:\nPA e FC continuas; resposta hemodinamica; cefaleia/hipotensao; avaliar necessidade de monitorizacao invasiva.\n\nRenal / organica:\nSem ajuste numerico universal; carga de fluido pode limitar concentracao/volume.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nRemover hard max universal 200 mcg/min. A fonte documenta grande variabilidade de necessidade; limites locais devem ser politicas\nexplicitas. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Nitroglycerin in 5% Dextrose Injection\n50 mg/250 mL = 200 mcg/mL; nonadsorptive tubing; start 5 mcg/min; +5 q3-5 min initially; no universal hard max stated.\nhttps://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=457a026c-ebce-4701-9deb-2d7652759a99\nAcesso: 2026-09-21\nEvidencia interna adicional de identidade: Gold33 Lote 056 homologado clinicamente contem os IDs nitroprussiato_sodio e nitroglicerinaiv. Essa evidencia nao substitui a bula para\ndose/preparo.\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "nitroglicerinaiv",
    "reviewPage": 10
  },
  "Amiodarona": {
    "section": 9,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nFV recorrente/TV hemodinamicamente instavel refratarias conforme rotulagem IV; outros usos exigem protocolo\nespecifico.\n\nProposta V2:\nRegulatorio: 150 mg/100 mL (1.5 mg/mL) para carga e 360 mg/200 mL (1.8 mg/mL) para fase lenta/manutencao. O\nlocal 900/500 tem a mesma concentracao 1.8, mas precisa fonte institucional de preparo se mantido.\n\nDose / titulacao:\n150 mg em 10 min; depois 1 mg/min por 6 h; depois 0.5 mg/min; apos 24 h manter 0.5 mg/min. Recorrencia: 150 mg\nem 10 min.\n\nFormula de bomba:\nPara 1.5 mg/mL: mL/h = dose (mg/min) x 60 / 1.5. Para 1.8 mg/mL: dividir por 1.8.\n\nMonitorizacao critica:\nECG/QTc, FC/PA, K/Mg, hepatica; hipotensao/bradicardia e sitio de infusao.\n\nRenal / organica:\nSem ajuste renal especifico; monitorar toxicidade/eletrolitos.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nNao presumir que 900/500 seja automaticamente equivalente a produto premixado; exige protocolo local se usado. Pediatria: calculo\nbloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - NEXTERONE (amiodarone) premixed injection\n150 mg/100 mL over 10 min; then 1 mg/min x6 h; 0.5 mg/min thereafter; 1.5 and 1.8 mg/mL premixes.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9108958-b8d7-4fba-87c3-9a32990de551\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "amiodarona",
    "reviewPage": 11
  },
  "Heparina": {
    "section": 10,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nAnticoagulacao com HNF IV; selecionar indicacao/nomograma antes de sugerir dose. Nao usar um unico esquema\npara SCA, TEP e TVP.\n\nProposta V2:\n25,000 U / 250 mL D5W = 100 U/mL, concentracao regulatoria verificavel.\n\nDose / titulacao:\nA taxa deve vir do nomograma da indicacao. O esquema 80 U/kg bolus + 18 U/kg/h e apropriado apenas quando o\nprotocolo VTE escolhido o define; nao universalizar para SCA.\n\nFormula de bomba:\nCom 100 U/mL: mL/h = dose (U/kg/h) x peso / 100.\n\nMonitorizacao critica:\naPTT ou anti-Xa conforme protocolo, hemograma/plaquetas, sangramento, sinais de HIT e funcao renal conforme\ncontexto.\n\nRenal / organica:\nHNF costuma ser preferida quando eliminacao renal de alternativas preocupa; ajuste deve seguir\nnomograma/monitorizacao, nao uma tabela inventada.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nBinding pode ser homologado; calculadora deve exigir \"indicacao/nomograma\" e dose prescrita. Nada de dose-padrao universal.\nPediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Heparin Sodium in 5% Dextrose Injection\n25,000 U/250 mL = 100 U/mL; IV; bleeding/HIT precautions.\nhttps://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=eede8a0c-5ae6-4166-84b3-12081405f08e\nAcesso: 2026-09-21\nEvidencia interna adicional de identidade: Gold33 Lote 040 homologado clinicamente contem heparina_hnf. Essa evidencia nao substitui a bula para dose/preparo.\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "heparina_hnf",
    "reviewPage": 12
  },
  "Propofol": {
    "section": 11,
    "range": [
      0.3,
      3
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nSedacao em UTI de adultos intubados e mecanicamente ventilados.\n\nProposta V2:\nEmulsao pronta 10 mg/mL; nao diluir fora de instrucao especifica. Manter tecnica asseptica estrita.\n\nDose / titulacao:\nIniciar 0.3 mg/kg/h; titular em incrementos de 0.3-0.6 a cada 5-10 min. Usual 0.3-3 mg/kg/h. Nao exceder 4 mg/kg/h\nsalvo beneficio > risco.\n\nFormula de bomba:\nmL/h = dose (mg/kg/h) x peso / 10.\n\nMonitorizacao critica:\nHemodinamica, respiracao, nivel de sedacao, triglicerideos/lipemia em uso prolongado, acidose/rabdomiolise/arrítmias\nquando suspeita PRIS.\n\nRenal / organica:\nSem algoritmo de ajuste no escopo desta ficha; titular clinicamente.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nTrocar \"tipica 0.3-4\" por \"usual 0.3-3; 4 como limite excepcional\". Linhas/frasco: descarte/troca em 12 h. Pediatria: calculo bloqueado;\nnenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Propofol Injectable Emulsion\nICU adult sedation: start 0.3 mg/kg/h; usual 0.3-3; >4 only if benefit outweighs risk; discard/change at 12 h.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa93f173-7858-4d88-860e-76ab97e65c2f\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "propofol",
    "reviewPage": 13
  },
  "Midazolam": {
    "section": 12,
    "range": [
      0.02,
      0.1
    ],
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nSedacao continua em paciente intubado/ventilado. Estado de mal epileptico deve ter protocolo proprio separado.\n\nProposta V2:\nFonte regulatoria recomenda, para infusao continua, diluir formulacao 5 mg/mL para 0.5 mg/mL em NaCl 0,9% ou D5W.\nEx.: 50 mg em volume final 100 mL.\n\nDose / titulacao:\nSe carga necessaria: 0.01-0.05 mg/kg lenta; manutencao usual inicial 0.02-0.1 mg/kg/h, titulada ao efeito. Doses\nmaiores podem ocorrer, mas nao sao range-padrao.\n\nFormula de bomba:\nCom 0.5 mg/mL: mL/h = dose (mg/kg/h) x peso / 0.5.\n\nMonitorizacao critica:\nSedacao, respiracao/ventilacao, PA, FC, interacoes com opioides e inibidores CYP3A4; acumulacao em infusoes\nprolongadas.\n\nRenal / organica:\nTitular e vigiar acumulacao/metabolitos em disfuncao renal/criticos; sem tabela simples universal.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nSubstituir 0.15 mg/mL e range ate 0.2 como padrao. Retirar estado de mal epileptico deste preset se nao houver protocolo independente\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Midazolam Injection USP\nContinuous infusion: dilute 5 mg/mL stock to 0.5 mg/mL in NS/D5W; usual 0.02-0.1 mg/kg/h.\nhttps://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b95415fa-17c2-42ab-a6b0-e628d01c94ed\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "midazolam",
    "reviewPage": 14
  },
  "Morfina": {
    "section": 13,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nAnalgesia continua/paliacao em adultos conforme contexto e tolerancia opioide.\n\nProposta V2:\nA concentracao 0.1 mg/mL permanece como dado local do preset, mas NAO foi encontrada nesta rodada uma\npadronizacao regulatoria que a transforme em concentracao universal de bomba.\n\nDose / titulacao:\nFonte regulatoria: infusao IV adulta inicial 0.02-0.1 mg/kg/h. Em paciente opioid-naive, taxa total geralmente nao deve\nexceder 10 mg/h; tolerantes podem exigir mais.\n\nFormula de bomba:\nSo autorizar mL/h depois de a instituicao aprovar a concentracao final. Se C mg/mL: mL/h = dose (mg/h) / C.\n\nMonitorizacao critica:\nFR/SpO2/ventilacao, sedacao, PA, dor, funcao renal; disponibilidade de naloxona e vigilancia de depressao\nrespiratoria.\n\nRenal / organica:\nExposicao e metabolitos aumentam na insuficiencia renal; individualizar/considerar alternativa conforme contexto.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nCALCULO BLOQUEADO: concentracao final e politica institucional nao validadas. O medico nao precisa preencher nada; basta aceitar o\nbloqueio ou solicitar outro protocolo. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para\ncriancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Morphine Sulfate Injection\nAdult continuous IV: initial 0.02-0.1 mg/kg/h; opioid-naive total rate generally <=10 mg/h; renal impairment changes exposure.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee8057d1-ed12-4e18-9efa-d83504abf612\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "morfina",
    "reviewPage": 15
  },
  "Fentanil": {
    "section": 14,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nAnalgesia/sedoanalgesia em ambiente monitorizado. O rotulo de injecao confirma formulacao, mas nao o esquema\ncontinuo local completo.\n\nProposta V2:\nStock regulatorio atual: 50 mcg/mL. O preparo final 5 mcg/mL e o range 0.5-3 mcg/kg/h devem ser ancorados a\nprotocolo institucional de UTI antes de automatizar.\n\nDose / titulacao:\nNenhuma faixa continua de UTI foi promovida a regra automatica nesta V2 por falta de fonte primaria diretamente\naplicavel ao preset completo.\n\nFormula de bomba:\nBLOQUEADA ate validar dose + concentracao final. Formula matematica seria mL/h = dose (mcg/kg/h) x peso / C\n(mcg/mL), mas nao ativa regra clinica.\n\nMonitorizacao critica:\nVentilacao/FR, sedacao, PA, rigidez toracica em doses/administracao rapida, interacoes com outros depressores SNC.\n\nRenal / organica:\nIndividualizar em criticamente enfermos; nao criar ajuste numerico sem fonte do protocolo escolhido.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nCALCULO BLOQUEADO: identidade e stock comprovados, mas regime continuo e diluicao final do preset exigem protocolo institucional\nvalidado. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Fentanyl Citrate Injection\nCurrent injectable formulation; 50 mcg/mL stock. Does not establish the local ICU continuous 0.5-3 mcg/kg/h / 5 mcg/mL preset.\nhttps://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bfa8018a-4cbc-434b-e09e-782872b0340a\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "fentanil",
    "reviewPage": 16
  },
  "Insulina Regular": {
    "section": 15,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV continua\n\nEscopo / indicacao:\nCrises hiperglicemicas: DKA/HHS conforme criterio diagnostico. Pos-operatorio deve ter protocolo separado.\n\nProposta V2:\n100 U / 100 mL NaCl 0,9% = 1 U/mL e uma apresentacao IV premixada regulatoria verificavel.\n\nDose / titulacao:\nDKA: 0.1 U/kg/h IV. HHS sem cetose/acidoses significativas: 0.05 U/kg/h; HHS misto com DKA: 0.1 U/kg/h. Ajustar\nquando glicose cai conforme consenso.\n\nFormula de bomba:\nDose U/h = U/kg/h x peso. Como 1 U/mL, mL/h = U/h.\n\nMonitorizacao critica:\nGlicemia frequente, potassio, anion gap/beta-hidroxibutirato e estado clinico. Se K <3.5 mmol/L, repor K antes de iniciar\ninsulina.\n\nRenal / organica:\nMaior risco de hipoglicemia em disfuncao renal; titrar pelo protocolo e monitorizacao.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nAdotar limiar K 3.5, nao 3.3. Nao usar este preset para \"pos-operatorio\" sem protocolo separado. Pediatria: calculo bloqueado; nenhuma\ndose adulta pode ser reutilizada ou convertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - MYXREDLIN (insulin human) in sodium chloride injection\n100 U/100 mL = 1 U/mL IV premix; monitor glucose and potassium.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=afca6e80-a802-49fb-a978-5fe28a173001\nAcesso: 2026-09-21\n[2] ADA/EASD/JBDS/AACE/DTS - Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (2024)\nDKA IV insulin 0.1 U/kg/h; selected HHS 0.05; potassium <3.5 mmol/L -> replace potassium before insulin.\nhttps://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "insulina_regular",
    "reviewPage": 17
  },
  "Vancomicina": {
    "section": 16,
    "range": null,
    "text": "Parecer aprovado - Dra Eugenia Marques - 21/09/2026\n\nVia:\nIV intermitente para o preparo atual; continua permanece bloqueada\n\nEscopo / indicacao:\nInfecoes graves por Gram-positivos/MRSA conforme indicacao e microbiologia; TDM orientado por AUC em infeccoes\ngraves.\n\nProposta V2:\n500 mg / pelo menos 100 mL = 5 mg/mL e preparo regulatorio para infusao INTERMITENTE; administrar ao longo de\npelo menos 60 min.\n\nDose / titulacao:\nNao converter \"mg/dia/24 = mg/h\" em protocolo continuo universal. Dose deve ser individualizada por peso, funcao\nrenal e TDM; em MRSA grave, alvo AUC/MIC 400-600 conforme guideline.\n\nFormula de bomba:\nPara preparo intermitente atual, velocidade minima de tempo: 500 mg/100 mL em >=60 min -> <=100 mL/h. Nao ativar\nformula continua.\n\nMonitorizacao critica:\nFuncao renal, niveis/AUC quando indicado, resposta clinica, flebite e reacao relacionada a infusao.\n\nRenal / organica:\nAjuste e intervalo dependem de funcao renal/TDM; nao usar tabela fixa sem protocolo completo.\n\nPediatria:\nSEM ESQUEMA PEDIATRICO NESTE PACOTE. CALCULO PEDIATRICO BLOQUEADO por ausencia de um\nconjunto completo e validado de parametros para cada medicamento/indicacao (idade, peso quando aplicavel, via,\ndose e unidade, mg/kg/dose versus mg/kg/dia quando aplicavel, frequencia, maximo por dose/dia,\nformulacao/concentracao, preparo e fonte diretamente aplicavel). E PROIBIDO reutilizar, escalar, adaptar ou inferir a\ndose adulta para pediatria.\n\nRestricao / gate que permanece:\nINFUSAO CONTINUA BLOQUEADA. O preparo 500/100 e validavel como intermitente, nao como protocolo continuo. Se desejar continua,\ncriar ficha separada com carga, concentracao, alvo e TDM. Pediatria: calculo bloqueado; nenhuma dose adulta pode ser reutilizada ou\nconvertida para criancas.\n\nReferencias verificadas para esta pagina:\n[1] DailyMed - Vancomycin Hydrochloride for Injection\n500 mg diluted in at least 100 mL; concentration 5 mg/mL; intermittent infusion at least 60 min.\nhttps://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=033efc76-11d5-4a93-91de-56ed41bab9c3\nAcesso: 2026-09-21\n[2] IDSA/ASHP/PIDS/SIDP - Therapeutic Monitoring of Vancomycin for Serious MRSA Infections\nAUC/MIC target 400-600 for serious MRSA; monitoring and individualized dosing.\nhttps://www.idsociety.org/practice-guideline/vancomycin/\nAcesso: 2026-09-21\n\nPEDIATRIA: o parecer V2.1 aprovado mantém os 16 cálculos bloqueados. Proibido reutilizar, escalar, adaptar ou inferir doses adultas.",
    "canonicalDrugId": "vancomicina",
    "reviewPage": 18
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
BIC_PRESETS.Amiodarona.push({id:'amio_maintenance_360_200',label:'360 mg / 200 mL · manutenção',
  totalMg:360,volMl:200,solvent:'Premix conforme produto',amountUnit:'mg',unitDefault:'mg/min',
  obs_pt:'Premix 1,8 mg/mL do parecer aprovado. Dose prescrita e fase confirmadas separadamente.',
  obs_es:'Premix 1,8 mg/mL del dictamen aprobado. Dosis prescrita y fase confirmadas por separado.'});

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
  ['inf-scope-confirm','inf-benefit-confirm','inf-adult-confirm'].forEach(id => { const el=document.getElementById(id); if(el) el.checked=false; });
  const duration=document.getElementById('inf-duration-hours'); if(duration) duration.value='';
  ['inf-indication','inf-ideal-weight','inf-nomogram','inf-intermittent-minutes'].forEach(id => {const el=document.getElementById(id);if(el)el.value='';});
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
      title="${String(lang === 'es' ? (p.obs_es || p.obs_pt) : p.obs_pt).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')}">
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
    const db = Array.isArray(window.DRUG_DB) ? window.DRUG_DB : [];
    const matched = drug.canonicalDrugId ? db.find(d => d.id === drug.canonicalDrugId) : null;
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
// Medically reviewed V2.1, user attestation: Dra Eugenia Marques, 2026-09-21.
// Authorization is scoped to the exact preparation, indication and adult gates.
// No canonical document/global calculation flag is promoted by this module.
// Clinical approval: source package. Separate explicit user authorization: AUTORIZO A ATIVAÇAO.
// Activation is scoped to this local candidate; publication remains unauthorized.
// No UI/remote feature flag can override this source-level release gate.
// Patch 3S-R1: immutable user-attested V1 approval; existing V2.1 gates remain independent.
function _freezeInfusionApproval(value) {
  if (value && typeof value === 'object') { Object.values(value).forEach(_freezeInfusionApproval); Object.freeze(value); }
  return value;
}
const INFUSION_MEDICAL_APPROVAL_R1 = _freezeInfusionApproval({"schemaVersion":"medcases.medical.approval.1","reviewerName":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewScope":"PATCH3S_16_INFUSION_BINDINGS","approvedBindingCount":16,"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","reviewManifest":"MEDCASES_PATCH3S_16_INFUSOES_REVIEW_MANIFEST_V1.json","reviewManifestSha256":"2ebcb09c506e1b902a42b25b046a365e2a0c1e79d091524ab6d2bbc0722cb93e","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","canonicalIndexSha256":"dcf6df3306a10cdb5fb96b6e13c3416981cbccb8fcb0ca6ce7b2184c8cbb1378","attestation":"Explicit user approval in this conversation; no signature, CRM or time supplied","publicationAuthorized":false,"bindings":[{"presetId":"prep_0","drugName":"Noradrenalina","canonicalDrugId":"noradrenalina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_0","canonicalDrugId":"noradrenalina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[0].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[0].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[0].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[0].currentFields.originalReview","bindings[0].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_0","canonicalDrugId":"noradrenalina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_1","drugName":"Adrenalina","canonicalDrugId":"adrenalina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_1","canonicalDrugId":"adrenalina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[1].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[1].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[1].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[1].currentFields.originalReview","bindings[1].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_1","canonicalDrugId":"adrenalina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_2","drugName":"Dobutamina","canonicalDrugId":"dobutamina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_2","canonicalDrugId":"dobutamina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[2].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[2].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[2].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[2].currentFields.originalReview","bindings[2].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_2","canonicalDrugId":"dobutamina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_3","drugName":"Dopamina","canonicalDrugId":"dopamina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_3","canonicalDrugId":"dopamina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[3].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[3].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[3].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[3].currentFields.originalReview","bindings[3].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_3","canonicalDrugId":"dopamina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_4","drugName":"Milrinona","canonicalDrugId":null,"MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_4","canonicalDrugId":null,"sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":false,"status":"TECHNICAL_BLOCKED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[4].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[4].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[4].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[4].currentFields.originalReview","bindings[4].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_4","canonicalDrugId":null,"authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":"CANONICAL_ID_MISSING"},{"presetId":"prep_5","drugName":"Vasopressina","canonicalDrugId":"vasopressina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_5","canonicalDrugId":"vasopressina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[5].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[5].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[5].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[5].currentFields.originalReview","bindings[5].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_5","canonicalDrugId":"vasopressina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_6","drugName":"Nitroprussiato","canonicalDrugId":null,"MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_6","canonicalDrugId":null,"sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":false,"status":"TECHNICAL_BLOCKED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[6].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[6].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[6].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[6].currentFields.originalReview","bindings[6].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_6","canonicalDrugId":null,"authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":"CANONICAL_DUPLICATE_RECONCILIATION_REQUIRED"},{"presetId":"prep_7","drugName":"Nitroglicerina","canonicalDrugId":"nitroglicerinaiv","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_7","canonicalDrugId":"nitroglicerinaiv","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[7].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[7].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[7].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[7].currentFields.originalReview","bindings[7].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_7","canonicalDrugId":"nitroglicerinaiv","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_8","drugName":"Amiodarona","canonicalDrugId":"amiodarona","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_8","canonicalDrugId":"amiodarona","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[8].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[8].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[8].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[8].currentFields.originalReview","bindings[8].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_8","canonicalDrugId":"amiodarona","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_9","drugName":"Heparina","canonicalDrugId":"heparina_hnf","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_9","canonicalDrugId":"heparina_hnf","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[9].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[9].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[9].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[9].currentFields.originalReview","bindings[9].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_9","canonicalDrugId":"heparina_hnf","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_10","drugName":"Propofol","canonicalDrugId":"propofol","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_10","canonicalDrugId":"propofol","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[10].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[10].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[10].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[10].currentFields.originalReview","bindings[10].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_10","canonicalDrugId":"propofol","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_11","drugName":"Midazolam","canonicalDrugId":"midazolam","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_11","canonicalDrugId":"midazolam","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[11].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[11].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[11].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[11].currentFields.originalReview","bindings[11].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_11","canonicalDrugId":"midazolam","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_12","drugName":"Morfina","canonicalDrugId":"morfina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_12","canonicalDrugId":"morfina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[12].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[12].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[12].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[12].currentFields.originalReview","bindings[12].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_12","canonicalDrugId":"morfina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":"INSTITUTIONAL_CONCENTRATION_MISSING"},{"presetId":"prep_13","drugName":"Fentanil","canonicalDrugId":"fentanil","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_13","canonicalDrugId":"fentanil","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[13].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[13].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[13].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[13].currentFields.originalReview","bindings[13].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_13","canonicalDrugId":"fentanil","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":"INSTITUTIONAL_REGIMEN_MISSING"},{"presetId":"prep_14","drugName":"Insulina Regular","canonicalDrugId":"insulina_regular","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_14","canonicalDrugId":"insulina_regular","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[14].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[14].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[14].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[14].currentFields.originalReview","bindings[14].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":"PT_ES_EMPTY:guidelineRecommendations","existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_14","canonicalDrugId":"insulina_regular","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null},{"presetId":"prep_15","drugName":"Vancomicina","canonicalDrugId":"vancomicina","MEDICAL_REVIEW_STATUS":"APPROVED_IN_FULL","MEDICAL_REVIEWER":"Dra Eugenia Marques","MEDICAL_REVIEW_DATE":"2026-09-21","provenance":{"reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APPROVED_IN_FULL","reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V1.pdf","reviewArtifactSha256":"eabbc36c5df5a897440b0717fb4ffc263a4484186bfdf65b59b89462ae26532f","presetId":"prep_15","canonicalDrugId":"vancomicina","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5"},"fieldCapabilities":{"drugIdentityAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"canonicalIdentityEvidence"},"routeAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"formulationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"concentrationAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"doseAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":"bindings[15].currentFields.fallback.doseInicial"},"frequencyAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"dilutionAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[15].currentFields.preparations"},"preparationAuthorized":{"authorized":true,"status":"APPROVED","sourcePath":"bindings[15].currentFields.preparations"},"infusionRateAuthorized":{"authorized":false,"status":"NOT_PROVIDED","sourcePath":null},"calculationAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"infusionAuthorized":{"authorized":false,"status":"TECHNICAL_VALIDATION_REQUIRED","sourcePath":null},"pediatricAuthorized":{"authorized":false,"status":"NOT_APPROVED","sourcePath":null}},"referenceOnlyPaths":["bindings[15].currentFields.originalReview","bindings[15].canonicalFields"],"fieldPolicy":"NOT_PROVIDED means absent as a structured operational assertion in V1; reference prose remains approved reference, never parsed into an executable regimen.","pediatricAuthority":"NOT_APPROVED","remoteSchemaIssue":null,"existingOperationalProvenance":{"reviewArtifact":"MEDCASES_PATCH3S_16_INFUSOES_REVISAO_CLINICA_V2_1_PREENCHIDO_REFERENCIADO.pdf","reviewArtifactSha256":"0650f35b487f0a625064f881ace9ce684d4f5976d1b94850bd0b75490ca999d7","reviewer":"Dra Eugenia Marques","reviewDate":"2026-09-21","reviewResult":"APROVADO_INTEGRALMENTE","sourceVersion":"6b5a79cec541362a9dd98ebb8130b7c2657ca7f5","presetId":"prep_15","canonicalDrugId":"vancomicina","authorityArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","basis":"Existing separately approved V2.1 and local activation; V1 approval does not authorize V2.1-only fields"},"existingTechnicalBlocker":null}],"canonicalIdentityEvidence":[{"presetId":"prep_0","query":"Noradrenalina","existingNormalizedId":"noradrenalina","exactCandidates":["noradrenalina"],"previouslyProvenCanonicalDrugId":"noradrenalina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_1","query":"Adrenalina","existingNormalizedId":"adrenalina","exactCandidates":["adrenalina"],"previouslyProvenCanonicalDrugId":"adrenalina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_2","query":"Dobutamina","existingNormalizedId":"dobutamina","exactCandidates":["dobutamina"],"previouslyProvenCanonicalDrugId":"dobutamina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_3","query":"Dopamina","existingNormalizedId":"dopamina","exactCandidates":["dopamina"],"previouslyProvenCanonicalDrugId":"dopamina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_4","query":"Milrinona","existingNormalizedId":"milrinona","exactCandidates":[],"previouslyProvenCanonicalDrugId":null,"proof":"UNRESOLVED","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_5","query":"Vasopressina","existingNormalizedId":"vasopressina","exactCandidates":["vasopressina"],"previouslyProvenCanonicalDrugId":"vasopressina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_6","query":"Nitroprussiato","existingNormalizedId":"nitroprussiato","exactCandidates":[],"previouslyProvenCanonicalDrugId":null,"proof":"UNRESOLVED","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":["nitroprussiatosodio","nitroprussiato_sodio"],"fuzzy":false,"inferred":false},{"presetId":"prep_7","query":"Nitroglicerina","existingNormalizedId":"isossorbida","exactCandidates":["nitroglicerina"],"previouslyProvenCanonicalDrugId":"nitroglicerinaiv","proof":"EXISTING_V2_1_BINDING","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":"isossorbida","ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_8","query":"Amiodarona","existingNormalizedId":"amiodarona","exactCandidates":["amiodarona"],"previouslyProvenCanonicalDrugId":"amiodarona","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_9","query":"Heparina","existingNormalizedId":"heparina","exactCandidates":[],"previouslyProvenCanonicalDrugId":"heparina_hnf","proof":"EXISTING_V2_1_BINDING","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_10","query":"Propofol","existingNormalizedId":"propofol","exactCandidates":["propofol"],"previouslyProvenCanonicalDrugId":"propofol","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_11","query":"Midazolam","existingNormalizedId":"midazolam","exactCandidates":["midazolam"],"previouslyProvenCanonicalDrugId":"midazolam","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_12","query":"Morfina","existingNormalizedId":"morfina","exactCandidates":["morfina"],"previouslyProvenCanonicalDrugId":"morfina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_13","query":"Fentanil","existingNormalizedId":"fentanil","exactCandidates":["fentanil"],"previouslyProvenCanonicalDrugId":"fentanil","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_14","query":"Insulina Regular","existingNormalizedId":"insulina_regular","exactCandidates":["insulina_regular"],"previouslyProvenCanonicalDrugId":"insulina_regular","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false},{"presetId":"prep_15","query":"Vancomicina","existingNormalizedId":"vancomicina","exactCandidates":["vancomicina"],"previouslyProvenCanonicalDrugId":"vancomicina","proof":"V1_NORMALIZED_EXACT_ID","provenBindingArtifact":".dart_tool/patch3s_approved_evidence/calculadora/docs/clinical-updates/patch3s-v2_1-approval.json","provenBindingArtifactSha256":"29f5980249cc860f480339a5a8f00677ffb81db3235b6b4fe92d493cb5cf4df3","rejectedAlias":null,"ambiguityCandidates":[],"fuzzy":false,"inferred":false}]});
const INFUSION_RELEASE_AUTHORITY = Object.freeze({
  calculationAuthorized:true, infusionAuthority:true, publicationAuthorized:false,
  technicalIntegrationAuthorized:true, pediatricAuthority:false
});
const InfusionReviewSafety = Object.freeze({
  intermittent(values, minutes) {
    if (!Number.isFinite(minutes) || minutes < 60) return {error:'duration'};
    return InfusionMath.calculate({...values, unit:'ml/h', direction:'dose', dose:values.volume * 60 / minutes});
  },
  evaluate({drug, canonicalId, canonicalDocument, dose, age, adultConfirmed,
    potassium, hours, scopeConfirmed, indication, nomogram, idealWeight,
    benefitConfirmed, amount, volume, unit, amountUnit, preparationId, minutes, weight}) {
    const errors=[], warnings=[];
    if (!drug) return {errors,warnings}; // Free dimensional arithmetic, never clinical authority.
    const record=INFUSION_FALLBACK_DB.find(d=>d.nome===drug);
    if (!record) return {errors:['binding'],warnings};
    if (!record.canonicalDrugId || canonicalId !== record.canonicalDrugId ||
        !canonicalDocument || canonicalDocument.id !== canonicalId ||
        (canonicalDocument.publicationStatus && canonicalDocument.publicationStatus !== 'PRODUCTION') || canonicalDocument.enabled === false || canonicalDocument.status === 'REVOKED') errors.push('binding');
    if (record.calculationBlock) errors.push('blocked');
    if (!(Number.isFinite(dose)&&dose>0)) errors.push('input');
    // Approved V2.1 explicitly prohibits adult-to-pediatric reuse for every binding.
    if ((Number.isFinite(age) && age < 18) || (!Number.isFinite(age) && !adultConfirmed)) errors.push('adult');
    if (!scopeConfirmed) errors.push('scope');
    const choices=this.indications[drug] || ['reviewed'];
    if (!choices.includes(indication)) errors.push('indication');
    const prep=BIC_PRESETS[drug]?.find(p=>p.id===preparationId);
    if (!prep || amountUnit !== prep.amountUnit || unit !== prep.unitDefault ||
        amount !== prep.totalMg || (drug === 'Vancomicina' ? !(Number.isFinite(volume)&&volume>=100) : volume !== prep.volMl)) errors.push('preparationScope');
    const range=INFUSION_REVIEW[drug]?.range;
    if(range && Number.isFinite(dose) && (dose<range[0] || dose>range[1])) warnings.push('range');
    if (drug==='Adrenalina' && !(Number.isFinite(idealWeight)&&idealWeight>0)) errors.push('idealWeight');
    if (drug==='Dopamina' && dose>50) errors.push('dopamineMax');
    if (drug==='Vasopressina' && dose>(indication==='post_cardiotomy'?.1:.07)) warnings.push('vasopressinData');
    if (drug==='Nitroprussiato') {
      if (dose>10) errors.push('nitroMax');
      if (!(Number.isFinite(hours)&&hours>0)) errors.push('duration');
      if (dose>=10&&hours>1/6) errors.push('nitroTime');
      if (dose>2) warnings.push('cyanide');
      warnings.push('light');
    }
    if (drug==='Heparina' && !(typeof nomogram==='string'&&nomogram.trim())) errors.push('nomogram');
    if (drug==='Propofol') {
      if (dose>4&&!benefitConfirmed) errors.push('propofolBenefit');
      warnings.push('propofol');
    }
    if (drug==='Amiodarona') {
      const required=indication==='loading'?'prep_8':'amio_maintenance_360_200';
      if(preparationId!==required) errors.push('amiodaronePhase');
      const phaseDose=indication==='loading'?15:indication==='slow_6h'?1:.5;
      if (Math.abs(dose-phaseDose)>1e-9*Math.max(1,phaseDose)) errors.push('amiodaroneDose');
    }
    if (drug==='Insulina Regular') {
      // Retain the existing conservative equality boundary; never lower to 3.3.
      if (!(Number.isFinite(potassium)&&potassium>3.5)) errors.push('potassium');
      const initial=indication==='hhs_without_acidosis'?.05:.1;
      if(Number.isFinite(dose)&&dose!==initial) warnings.push('insulinTitration');
      warnings.push('insulin');
    }
    if (drug==='Vancomicina') {
      if (!(Number.isFinite(minutes)&&minutes>=60)) errors.push('intermittent');
      warnings.push('vancoIntermittent');
    }
    const medicalApproval=INFUSION_MEDICAL_APPROVAL_R1.bindings.find(b=>b.drugName===drug);
    if (!medicalApproval || medicalApproval.MEDICAL_REVIEW_STATUS !== 'APPROVED_IN_FULL' || medicalApproval.canonicalDrugId !== record.canonicalDrugId) errors.push('approvalRecord');
    // Grant authority only after executing the same deterministic engine as the UI.
    const mathValues={amount,volume,amountUnit,unit,dose,weight:drug==='Adrenalina'?idealWeight:weight};
    const arithmetic=record.infusionMode==='intermittent'
      ? this.intermittent(mathValues,minutes) : InfusionMath.calculate(mathValues);
    if (arithmetic.error || !Number.isFinite(arithmetic.rate) || arithmetic.rate<=0) errors.push('arithmetic');
    const clinicalScopeValidated=errors.length===0;
    if (!INFUSION_RELEASE_AUTHORITY.calculationAuthorized || !INFUSION_RELEASE_AUTHORITY.technicalIntegrationAuthorized) errors.push('activation');
    return {errors:[...new Set(errors)],warnings,clinicalScopeValidated,
      medicalApproval,
      medicalReviewStatus:medicalApproval?.MEDICAL_REVIEW_STATUS,
      fieldCapabilities:medicalApproval?.fieldCapabilities,
      authorityProvenance:medicalApproval ? {medical:medicalApproval.provenance,operational:medicalApproval.existingOperationalProvenance} : null,
      canonicalDrugId:record.canonicalDrugId,
      calculationAuthorized:errors.length===0,
      infusionAuthority:errors.length===0&&record.infusionMode==='continuous',
      intermittentCalculationAuthorized:errors.length===0&&record.infusionMode==='intermittent',
      pediatricAuthority:false};
  },
  indications:Object.freeze({
    'Adrenalina':['septic_shock'], 'Vasopressina':['septic_shock','post_cardiotomy'],
    'Amiodarona':['loading','slow_6h','maintenance'], 'Heparina':['vte','acs','other_prescribed'],
    'Propofol':['adult_ventilated_icu'], 'Midazolam':['ventilated_sedation'],
    'Insulina Regular':['dka','hhs_without_acidosis','mixed_hhs_dka'],
    'Vancomicina':['intermittent']
  })
});
window.InfusionReviewSafety=InfusionReviewSafety;
const INF_REVIEW_MESSAGES = {
 approvalRecord:['Registro de aprovação técnica ausente ou divergente.','Registro de aprobación técnica ausente o diferente.'],
 arithmetic:['Parâmetros ausentes, inválidos ou incompatíveis com o cálculo determinístico.','Parámetros ausentes, no válidos o incompatibles con el cálculo determinista.'],
 activation:['Dados homologados; ativação operacional pendente de integração e validação técnica. Cálculo por fármaco bloqueado.','Datos homologados; activación operativa pendiente de integración y validación técnica. Cálculo por fármaco bloqueado.'],
 input:['Informe dose/taxa prescrita válida e positiva.','Introduzca dosis/caudal prescrito válido y positivo.'],
 binding:['ID canônico ausente, divergente, indisponível ou revogado. Cálculo bloqueado.','ID canónico ausente, diferente, no disponible o revocado. Cálculo bloqueado.'],
 blocked:['O parecer mantém este cálculo bloqueado: falta identidade ou protocolo/concentração institucional.','El dictamen mantiene este cálculo bloqueado: falta identidad o protocolo/concentración institucional.'],
 adult:['Parâmetros pediátricos revisados não fornecidos. Este cálculo exige paciente adulto confirmado.','Parámetros pediátricos revisados no disponibles. Este cálculo exige paciente adulto confirmado.'],
 scope:['Confirme indicação, via, produto e monitorização do parecer.','Confirme indicación, vía, producto y monitorización del dictamen.'],
 indication:['Selecione a indicação/fase compatível com o parecer.','Seleccione la indicación/fase compatible con el dictamen.'],
 preparationScope:['Preparo ou unidade fora do escopo aprovado. Não inferir equivalência.','Preparación o unidad fuera del alcance aprobado. No inferir equivalencia.'],
 range:['Dose fora da faixa usual de manutenção. Conferir fase e prescrição; faixa usual não é teto universal.','Dosis fuera del rango usual de mantenimiento. Verificar fase y prescripción; rango usual no es máximo universal.'],
 idealWeight:['Informe peso IDEAL (IBW) prescrito para adrenalina. Não será calculado ou substituído pelo peso atual.','Introduzca peso IDEAL (IBW) prescrito para adrenalina. No se calcula ni sustituye por peso actual.'],
 dopamineMax:['Dopamina: não exceder 50 mcg/kg/min no parecer aprovado.','Dopamina: no superar 50 mcg/kg/min en el dictamen aprobado.'],
 vasopressinData:['Dados limitados acima da faixa da indicação. Conferir prescrição e monitorização.','Datos limitados por encima del rango de la indicación. Verificar prescripción y monitorización.'],
 nitroMax:['Nitroprussiato: máximo 10 mcg/kg/min.','Nitroprusiato: máximo 10 mcg/kg/min.'],
 duration:['Informe duração total, incluindo tempo já infundido.','Introduzca duración total, incluido tiempo ya infundido.'],
 nitroTime:['Nitroprussiato: 10 mcg/kg/min por mais de 10 minutos bloqueado.','Nitroprusiato: 10 mcg/kg/min durante más de 10 minutos bloqueado.'],
 cyanide:['Risco de cianeto acima de 2 mcg/kg/min; não aguardar 48-72 h para monitorizar.','Riesgo de cianuro por encima de 2 mcg/kg/min; no esperar 48-72 h para monitorizar.'],
 light:['Fotoproteção, bomba e PA contínua; atenção renal/hepática conforme parecer.','Fotoprotección, bomba y PA continua; atención renal/hepática según dictamen.'],
 nomogram:['Heparina exige nomograma da indicação e dose prescrita; não há dose-padrão universal.','Heparina exige nomograma de la indicación y dosis prescrita; no existe dosis universal.'],
 propofolBenefit:['Acima de 4 mg/kg/h exige avaliação explícita de benefício superior ao risco.','Por encima de 4 mg/kg/h exige evaluación explícita de beneficio superior al riesgo.'],
 propofol:['Adulto intubado/ventilado; assepsia, troca em 12 h e monitorização de PRIS conforme parecer.','Adulto intubado/ventilado; asepsia, cambio a las 12 h y vigilancia de PRIS según dictamen.'],
 amiodaroneDose:['Dose incompatível com a fase homologada: carga 150 mg/10 min; 1 mg/min por 6 h; depois 0,5 mg/min.','Dosis incompatible con la fase homologada: carga 150 mg/10 min; 1 mg/min durante 6 h; después 0,5 mg/min.'],
 amiodaronePhase:['Confirme preparo de carga 150/100 ou manutenção premix 360/200 e fase prescrita.','Confirme preparación de carga 150/100 o mantenimiento premix 360/200 y fase prescrita.'],
 potassium:['Insulina bloqueada: K+ ausente, inválido ou ≤3,5. Reavaliar antes de iniciar.','Insulina bloqueada: K+ ausente, no válido o ≤3,5. Reevaluar antes de iniciar.'],
 insulin:['Dose em UI/kg/h exige peso; conversão UI/h determinística. Monitorizar glicemia e potássio.','Dosis en UI/kg/h exige peso; conversión UI/h determinista. Monitorizar glucemia y potasio.'],
 insulinTitration:['Dose difere do início descrito para a indicação; confirmar titulação prescrita e protocolo.','Dosis distinta al inicio descrito para la indicación; confirmar titulación prescrita y protocolo.'],
 intermittent:['Vancomicina: infusão INTERMITENTE em pelo menos 60 minutos. Contínua não autorizada.','Vancomicina: infusión INTERMITENTE durante al menos 60 minutos. Continua no autorizada.'],
 vancoIntermittent:['Preparo intermitente de 500 mg, volume ≥100 mL. Dose clínica/intervalo exigem prescrição e TDM.','Preparación intermitente de 500 mg, volumen ≥100 mL. Dosis clínica/intervalo requieren prescripción y TDM.']
};
const INF_INDICATION_LABELS={reviewed:'Indicação do parecer / Indicación del dictamen',septic_shock:'Choque séptico',post_cardiotomy:'Pós-cardiotomia / Poscardiotomía',loading:'Carga',slow_6h:'Fase lenta 6 h',maintenance:'Manutenção / Mantenimiento',vte:'TEV / VTE',acs:'SCA',other_prescribed:'Outra indicação prescrita / Otra indicación prescrita',adult_ventilated_icu:'UTI adulto intubado e ventilado / UCI adulto intubado y ventilado',ventilated_sedation:'Sedação em ventilação / Sedación en ventilación',dka:'CAD / DKA',hhs_without_acidosis:'HHS sem acidose significativa / HHS sin acidosis significativa',mixed_hhs_dka:'HHS misto com CAD / HHS mixto con DKA',intermittent:'Intermitente'};
function _infClinicalState(mathResult, values) {
 const get=id=>document.getElementById(id),show=(id,on)=>{const el=get(id);if(el)el.style.display=on?'block':'none';};
 const selected=_infusionMode==='drug'?_bicSelectedDrug:null,drug=selected?.nome;
 show('inf-review-controls',!!drug);show('inf-potassium-wrap',drug==='Insulina Regular');
 show('inf-duration-wrap',drug==='Nitroprussiato');show('inf-ideal-weight-wrap',drug==='Adrenalina');
 show('inf-nomogram-wrap',drug==='Heparina');show('inf-benefit-wrap',drug==='Propofol');show('inf-intermittent-wrap',drug==='Vancomicina');
 ['inf-dose','inf-current-rate'].forEach(id=>{const el=get(id);if(el)el.disabled=selected?.infusionMode==='intermittent';});
 const choices=InfusionReviewSafety.indications[drug]||['reviewed'],select=get('inf-indication');
 if(select&&select.dataset.drug!==drug){select.replaceChildren();const blank=document.createElement('option');blank.value='';blank.textContent='Selecione / Seleccione';select.appendChild(blank);choices.forEach(value=>{const option=document.createElement('option');option.value=value;option.textContent=INF_INDICATION_LABELS[value];select.appendChild(option);});select.dataset.drug=drug||'';}
 const db=Array.isArray(window.DRUG_DB)?window.DRUG_DB:[],canonicalId=selected?.canonicalDrugId;
 const state=InfusionReviewSafety.evaluate({drug,canonicalId,canonicalDocument:db.find(d=>d.id===canonicalId),dose:mathResult.dose,
 age:InfusionMath.number((window.patientData||{}).age),adultConfirmed:!!get('inf-adult-confirm')?.checked,
 potassium:_infValue('inf-potassium'),hours:_infValue('inf-duration-hours'),scopeConfirmed:!!get('inf-scope-confirm')?.checked,
 indication:select?.value,nomogram:get('inf-nomogram')?.value,idealWeight:_infValue('inf-ideal-weight'),benefitConfirmed:!!get('inf-benefit-confirm')?.checked,
 amount:values.amount,volume:values.volume,amountUnit:values.amountUnit,unit:values.unit,weight:values.weight,
 preparationId:_bicGetActivePreset()?.id,minutes:_infValue('inf-intermittent-minutes')});
 const box=get('inf-clinical-alerts');if(box){box.replaceChildren();[...state.errors,...state.warnings].forEach(code=>{const row=document.createElement('p');row.textContent=INF_REVIEW_MESSAGES[code][currentLang==='es'?1:0];box.append(row);});box.style.display=box.childElementCount?'block':'none';}
 return state;
}

// Canonical discovery can arrive after selection. Re-evaluate; never grant from an alias.
window.addEventListener?.('medcases:catalog-ready', () => {
  if (_infusionMode === 'drug' && _bicSelectedDrug && document.getElementById('inf-dose')) calculateInfusion();
});

function calculateInfusion() {
  const get = id => document.getElementById(id);
  const text = (id,value) => { if(get(id)) get(id).textContent = value; };
  const es = typeof currentLang !== 'undefined' && currentLang === 'es';
  const weight = _infusionMode === 'drug' && _bicSelectedDrug?.nome === 'Adrenalina' ? _infValue('inf-ideal-weight') : InfusionMath.number((window.patientData || {}).weight);
  const amountUnit = get('inf-amount-unit')?.value || 'mg';
  const unit = get('inf-dose-unit')?.value || 'mcg/kg/min';
  const values = {amount:_infValue('inf-amp-mg'), volume:_infValue('inf-vol-ml'), weight,
    dose:_infValue('inf-dose'), rate:_infValue('inf-current-rate'), unit, amountUnit, direction:_infDirection};
  _infResult = _infusionMode === 'drug' && _bicSelectedDrug?.infusionMode === 'intermittent'
    ? InfusionReviewSafety.intermittent(values, _infValue('inf-intermittent-minutes'))
    : InfusionMath.calculate(values);
  if (_infusionMode === 'drug' && !_bicSelectedDrug) _infResult = {error:'selection'};
  const clinical = _infClinicalState(_infResult, values);
  if (!_infResult.error && clinical.errors.length) _infResult.error='clinical';
  const valid = !_infResult.error;
  const concentration = _infResult.concentration;
  const concUnit = amountUnit === 'UI' ? 'UI/mL' : 'mcg/mL';
  const conc = concentration * (amountUnit === 'mg' ? 1000 : 1);
  const errors = es ? {
    duration:'Introduzca un tiempo de infusión de al menos 60 minutos.',
    preparation:'Introduzca la cantidad total y el volumen final, mayores que cero.',
    weight:'Introduzca y confirme el peso utilizado en la prescripción.',
    input:'Introduzca una dosis o un caudal mayor que cero. Se admite coma decimal.',
    selection:'Seleccione un fármaco de la lista.', unit:'Las unidades de preparación y dosis no son compatibles.',
    range:'Valores fuera del rango numérico. Revise los parámetros.'
  } : {
    duration:'Informe tempo de infusão de pelo menos 60 minutos.',
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
  const peso = _infusionMode === 'drug' && _bicSelectedDrug?.nome === 'Adrenalina' ? document.getElementById('inf-ideal-weight')?.value || '' : pd.weight || '';
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
  if (_infusionMode === 'drug' && _bicSelectedDrug) {
    lines.push('Parecer: Dra Eugenia Marques - 21/09/2026');
    lines.push('Canonical ID: ' + _bicSelectedDrug.canonicalDrugId);
    lines.push('Contexto: ' + (document.getElementById('inf-indication')?.value || ''));
    if (_bicSelectedDrug.nome === 'Adrenalina') lines.push('Peso utilizado: IDEAL (IBW), informado pelo profissional');
    if (_bicSelectedDrug.infusionMode === 'intermittent') lines.push('INTERMITENTE - duração (min): ' + document.getElementById('inf-intermittent-minutes').value);
    if (_bicSelectedDrug.nome === 'Insulina Regular') lines.push('Taxa de insulina (UI/h): ' + _infResult.totalPerHour);
  }

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
