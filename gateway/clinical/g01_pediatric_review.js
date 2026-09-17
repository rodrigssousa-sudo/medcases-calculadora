
'use strict';

const G01_REVIEW_VERSION = 'G01_R32_REVIEW_V1';
const RISPERDAL_SOURCE = 'https://boletin.anmat.gob.ar/mayo_2019/Dispo_MSYDS_4586-19.pdf';
const LEMIDAL_SOURCE = 'https://boletin.anmat.gob.ar/Marzo_2024/Dispo_2758-24.pdf';

const STATUS_ONLY = Object.freeze([
  'amisulprida','aripiprazol_lai','asenapina','brexpiprazol','cariprazina','clorpromazina',
  'clozapina','flufenazina','haloperidol','levomepromazina','lurasidona','olanzapina',
  'olanzapina_lai','paliperidona','paliperidona_mensal','paliperidona_trimestral','periciazina',
  'pimozida','quetiapina','risperidona_lai','sulpirida','tiotixeno','ziprasidona','zuclopentixol'
]);

function finiteNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function blocked(drugId, code, message, extra = {}) {
  return {
    ok: false,
    reviewOnly: true,
    clinicalSignoff: false,
    version: G01_REVIEW_VERSION,
    drugId,
    status: code,
    message,
    ...extra,
  };
}

function evaluateG01PediatricReview(input = {}) {
  const drugId = String(input.drugId || '').trim().toLowerCase();
  if (!drugId) return blocked('', 'DRUG_ID_REQUIRED', 'drugId is required');
  if (input.clinicalReview !== true) {
    return blocked(drugId, 'CLINICAL_REVIEW_MODE_REQUIRED', 'Explicit clinicalReview=true is required.');
  }
  if (STATUS_ONLY.includes(drugId)) {
    return blocked(drugId, 'PEDIATRIC_DOSE_NOT_VALIDATED', 'No pediatric automatic dose is validated for this product/indication in the current G01 review dataset.');
  }
  if (drugId !== 'risperidona' && drugId !== 'aripiprazol') {
    return blocked(drugId, 'DRUG_NOT_SUPPORTED_BY_G01_REVIEW_ENGINE', 'Drug is outside the current G01 pediatric review engine.');
  }

  const age = finiteNumber(input.ageYears);
  const weight = finiteNumber(input.weightKg);
  const day = finiteNumber(input.dayOfTreatment);
  const commonOk = input.indication === 'autism_irritability' && input.jurisdiction === 'AR' &&
    input.renalStatus === 'normal' && input.hepaticStatus === 'normal' && input.interactionsReviewed === true;

  if (!commonOk) {
    return blocked(drugId, 'CONTEXT_OR_SAFETY_GATE_FAILED', 'Indication, jurisdiction, renal/hepatic status and interaction review must match the reviewed source context.');
  }
  if (age === null || weight === null || weight <= 0) {
    return blocked(drugId, 'AGE_WEIGHT_REQUIRED', 'Valid ageYears and weightKg are required.');
  }

  if (drugId === 'aripiprazol') {
    if (input.product !== 'LEMIDAL' || input.formulation !== 'oral_tablet' || age < 6 || age > 17) {
      return blocked(drugId, 'PRODUCT_OR_PATIENT_OUTSIDE_REVIEW_SCOPE', 'LEMIDAL oral tablet, age 6–17 years, is required for this reviewed label context.', {sources:[LEMIDAL_SOURCE]});
    }
    return blocked(
      drugId,
      'FORMULATION_BLOCKED',
      'The reviewed label contains a 2 mg/day initial step, while the reviewed LEMIDAL strengths are 5/10/15/20 mg. Automatic dispensing, tablet splitting and dose conversion remain blocked.',
      {
        sourceBackedReference: {
          initialMgPerDay: 2,
          recommendedRangeMgPerDay: [5, 15],
          minimumEscalationIntervalDays: 7,
          strengthsReviewedMg: [5, 10, 15, 20],
        },
        sources:[LEMIDAL_SOURCE],
      }
    );
  }

  if (input.product !== 'RISPERDAL' || input.formulation !== 'oral_solution_1mg_ml' || age < 5 || age > 17 || weight < 15) {
    return blocked(drugId, 'PRODUCT_OR_PATIENT_OUTSIDE_REVIEW_SCOPE', 'RISPERDAL oral solution 1 mg/mL, age 5–17 years and weight >=15 kg are required for this reviewed context.', {sources:[RISPERDAL_SOURCE]});
  }
  if (!Number.isInteger(day) || day < 1 || day > 4) {
    return blocked(drugId, 'INITIAL_PHASE_ONLY', 'Only days 1–4 are calculated. Titration and maintenance remain non-automatic.', {sources:[RISPERDAL_SOURCE]});
  }

  const mgPerDay = weight < 20 ? 0.25 : 0.5;
  const mlPerDay = mgPerDay; // reviewed product concentration: 1 mg/mL
  return {
    ok: true,
    reviewOnly: true,
    clinicalSignoff: false,
    version: G01_REVIEW_VERSION,
    drugId,
    status: 'INITIAL_DOSE_REVIEW_ONLY',
    phase: 'initial_days_1_to_4',
    dose: {
      mgPerDay,
      mlPerDay,
      concentrationMgPerMl: 1,
      frequency: 'daily',
      automaticTitration: false,
      automaticMaintenance: false,
    },
    patientScope: {ageYears: age, weightKg: weight, dayOfTreatment: day},
    sources: [RISPERDAL_SOURCE],
    warning: 'CLINICAL REVIEW ONLY — NOT INDEPENDENTLY SIGNED OFF. Do not use as a final prescribing recommendation until physician validation is completed.',
  };
}

module.exports = { G01_REVIEW_VERSION, STATUS_ONLY, evaluateG01PediatricReview };
