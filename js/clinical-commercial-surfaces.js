/* Commercial UI boundaries only. No formulas, clinical content or provider rewrites. */
(() => {
  'use strict';
  const surfaces = [
    {surfaceId:'protocol-patient-dose',selector:'[data-mc-surface="protocol-patient-dose"]',capability:'dose_by_weight',action:'weight',class:'PREMIUM_WEIGHT',programmaticEntries:['ClinicalSupportRouter.open','ClinicalSupportRouter.injectPatient'],maskSelectors:[],resultSelectors:['[data-mc-surface="protocol-patient-dose"] .csr-dose-list']},
    {surfaceId:'modal-dose',selector:'#fd-btn-calc-label',capability:'dose_by_weight',action:'weight',class:'PREMIUM_WEIGHT',resultSelectors:['.mcd-result-text .mcd-r6-result-dose strong','.mcd-result-text .mcd-r7-dose strong','.mcd-result-text .mcd-r8-dose strong']},
    {surfaceId:'canonical-dose',selector:'[data-mc-surface="canonical-dose"],[data-mc-surface="canonical-dose-input"]',capability:'dose_by_weight',action:'weight',class:'PREMIUM_WEIGHT',resultSelectors:['.mcd-result-text .mcd-r6-result-dose strong','.mcd-result-text .mcd-r7-dose strong','.mcd-result-text .mcd-r8-dose strong']},
    {surfaceId:'calculator-drug-selection',selector:'#drug-list-container [onclick^="selectDrug("]',capability:'dose_by_weight',action:'weight',class:'PREMIUM_WEIGHT',resultSelectors:['.calc-drug-inline-card .hm-inline-calc-row strong']},
    {surfaceId:'infusion-parameters',selector:'#inf-dose,#inf-dose-unit,#inf-current-rate,#inf-weight-inline-input',capability:'dose_by_weight',action:'infusion',class:'PREMIUM_INFUSION',resultSelectors:['#inf-rate-result','#inf-dose-sec-result','#inf-reverse-result']},
    {surfaceId:'infusion-preparation',selector:'#inf-amp-mg,#inf-vol-ml,#inf-amount-unit,#bic-preset-chips button',capability:'dose_by_weight',action:'preparation',class:'PREMIUM_PREPARATION',maskSelectors:['#inf-conc-result','#inf-conc-inline'],resultSelectors:['#inf-conc-result','#inf-conc-inline','#inf-bag-duration']},
    {surfaceId:'infusion-confirmation',selector:'#inf-review-controls input,#inf-review-controls select',capability:'dose_by_weight',action:'infusion',class:'PREMIUM_INFUSION',resultSelectors:['#inf-rate-result','#inf-dose-sec-result']},
    {surfaceId:'infusion-copy',selector:'[onclick="infCopyPrescription()"]',capability:'dose_by_weight',action:'infusion',class:'PREMIUM_INFUSION',resultSelectors:[]},
    {surfaceId:'patient-dose-copy',selector:'[data-mc-surface="patient-dose-copy"]',capability:'dose_by_weight',action:'weight',class:'PREMIUM_WEIGHT',resultSelectors:[]},
    {surfaceId:'general-patient',selector:'#hub-card-patient,#qe-modal,#global-patient-bar',capability:null,class:'FREE_GENERAL',resultSelectors:[]},
    {surfaceId:'drug-reference',selector:'#farmacos-search-input,#hm-drug-search,#fd-modal,#rx-modal,#clinical-support-view',capability:null,class:'FREE_REFERENCE',resultSelectors:[]},
    {surfaceId:'infusion-reference',selector:'#inf-drug-search,#inf-drug-select,#bic-context-card,#inf-dilution-box',capability:null,class:'FREE_REFERENCE',resultSelectors:[]},
    {surfaceId:'clinical-safety',selector:'#inf-clinical-alerts,#inf-interaction-alert,#bic-alert-overlay,#risk-modal-overlay,[data-mc-category="contraindications"],[data-mc-category="adverse"],[data-mc-category="interactions"]',capability:null,class:'FREE_SAFETY',resultSelectors:[]},
    {surfaceId:'navigation',selector:'nav,.section-back-bar,[onclick^="navigate("],[onclick^="hubToggle("],[onclick^="closeFarmacoDetail("],[onclick^="closeQuickEdit("],[onclick^="closeRiskModal("]',capability:null,class:'FREE_GENERAL',resultSelectors:[]},
    {surfaceId:'general-calculators',selector:'#page-elec,#subview-hemo,#subview-fluids',capability:null,class:'FREE_GENERAL',resultSelectors:[]},
  ].map(row=>Object.freeze({...row,resultSelectors:Object.freeze(row.resultSelectors),maskSelectors:row.maskSelectors?Object.freeze(row.maskSelectors):undefined,programmaticEntries:row.programmaticEntries?Object.freeze(row.programmaticEntries):undefined}));
  Object.defineProperty(window,'MedCasesCommercialSurfaces',{value:Object.freeze(surfaces),writable:false,configurable:false});
})();
