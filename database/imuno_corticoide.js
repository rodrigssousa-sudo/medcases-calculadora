/* ============================================================
   MedCases Pro — Módulo: CORTICOIDES SISTÊMICOS
   Expõe: window.IMUNO_CORTICOIDE_DRUGS_DB
   Schema: array [] — compatível com _injectArrayDB() do index.html
   BUILD 280 — Lote 4:
     Dexametasona      — Corticoide ação longa, zero mineralocorticoide
     Prednisona        — Pró-fármaco ação intermediária (oral)
     Prednisolona      — Forma ativa ação intermediária (pediátrica/hepatopata)
     Deflazacorte      — Derivado oxazolínico, menor osteoporose/hiperglicemia
   ─────────────────────────────────────────────────────────────
   Categorias: imuno_corticoide
============================================================ */

window.IMUNO_CORTICOIDE_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. DEXAMETASONA
     Corticoide Ação Longa / Alta Potência — Edema Cerebral · COVID-19 · Crupe
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'dexametasona',
    name: { pt: 'Dexametasona', es: 'Dexametasona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Longa / Alta Potência)', es: 'Corticosteroide Sistémico (Acción Larga / Alta Potencia)' },
    indications: {
      pt: ['Edema cerebral secundário a tumores', 'COVID-19 grave (pacientes necessitando de O2)', 'Profilaxia de náuseas e vômitos induzidos por quimioterapia', 'Crupe / Laringite estridulosa pediátrica aguda'],
      es: ['Edema cerebral secundario a tumores', 'COVID-19 grave (pacientes necesitando O2)', 'Profilaxis de náuseas y vómitos inducidos por quimioterapia', 'Crup / Laringitis estridulosa pediátrica aguda']
    },
    commercialNames: { br: ['Decadron'], ar: ['Decadron', 'Dexametasona'] },
    presentation: {
      pt: ['Comprimidos 0,5 mg, 0,75 mg, 4 mg', 'Elixir 0,1 mg/mL', 'Ampolas IV/IM/IA 4 mg/mL, 2 mg/mL'],
      es: ['Comprimidos 0,5 mg, 0,75 mg, 4 mg', 'Elixir 0,1 mg/mL', 'Ampollas IV/IM/IA 4 mg/mL, 2 mg/mL']
    },
    mechanism: {
      pt: 'Glicocorticoide sintético de ação longa e altíssima potência (25 a 30 vezes mais anti-inflamatório que a hidrocortisona). Sua principal característica é ter ZERO atividade mineralocorticoide (não retém sódio/água), sendo o esteroide de escolha para tratar edema cerebral e neurocirurgias. Suprime profundamente o eixo HPA.',
      es: 'Glucocorticoide sintético de acción larga y altísima potencia (25 a 30 veces más antiinflamatorio que la hidrocortisona). Su principal característica es tener CERO actividad mineralocorticoide (no retiene sodio/agua), siendo el esteroide de elección para tratar edema cerebral y neurocirugías. Suprime profundamente el eje HPA.'
    },
    dose: {
      adult: {
        pt: 'Edema Cerebral: Bolus IV inicial de 10 mg, seguido de 4 mg IV a cada 6h. COVID-19 grave: 6 mg IV/VO 1x/dia por 10 dias. Antiemético: 4 a 8 mg IV.',
        es: 'Edema Cerebral: Bolo IV inicial de 10 mg, seguido de 4 mg IV cada 6h. COVID-19 grave: 6 mg IV/VO 1 vez/día por 10 días. Antiemético: 4 a 8 mg IV.'
      },
      pediatric: {
        pt: 'Crupe: 0,15 a 0,6 mg/kg (máx 16 mg) dose ÚNICA oral ou IM.',
        es: 'Crup: 0,15 a 0,6 mg/kg (máx 16 mg) dosis ÚNICA oral o IM.'
      }
    },
    administration: {
      pt: ['Administrar a dose oral preferencialmente de manhã (para mimetizar ciclo circadiano e evitar insônia).'],
      es: ['Administrar la dosis oral preferentemente por la mañana (para mimetizar ciclo circadiano y evitar insomnio).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em falência renal.', es: 'Sin necesidad de ajuste en falla renal.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático. Efeito pode estar aumentado na cirrose severa.', es: 'Metabolismo hepático. Efecto puede estar aumentado en cirrosis severa.' } },
    commonAdverseEffects: {
      pt: ['Insônia e hiperatividade (agitação)', 'Aumento abrupto do apetite', 'Hiperglicemia'],
      es: ['Insomnio e hiperactividad (agitación)', 'Aumento abrupto del apetito', 'Hiperglucemia']
    },
    dangerousAdverseEffects: {
      pt: ['Miopatia esteroide proximal', 'Psicose esteroide grave', 'Supressão prolongada do eixo HPA'],
      es: ['Miopatía esteroidea proximal', 'Psicosis esteroidea grave', 'Supresión prolongada del eje HPA']
    },
    contraindications: {
      absolute: { pt: ['Infecções fúngicas sistêmicas não tratadas', 'Malária cerebral (comprovado aumento de mortalidade)'], es: ['Infecciones fúngicas sistémicas no tratadas', 'Malaria cerebral (comprobado aumento de mortalidad)'] },
      relative: { pt: ['Glaucoma de ângulo aberto', 'Diabetes lábil'], es: ['Glaucoma de ángulo abierto', 'Diabetes lábil'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'A dexametasona é um INDUTOR leve a moderado do citocromo CYP3A4, podendo reduzir a eficácia de medicamentos dependentes desta via. Não causa edema/retenção de líquidos.', es: 'La dexametasona es un INDUCTOR leve a moderado del citocromo CYP3A4, pudiendo reducir la eficacia de medicamentos dependientes de esta vía. No causa edema/retención de líquidos.' }
    },
    ref: 'RECOVERY Collaborative Group. N Engl J Med 2021 · Kaal EC & Vecht CJ. Curr Opin Oncol 2004 · Cetinkaya F et al. Pediatr Pulmonol 2004 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     2. PREDNISONA
     Corticoide Oral Ação Intermediária — Pró-fármaco (requer ativação hepática)
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'prednisona',
    name: { pt: 'Prednisona', es: 'Prednisona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Intermediária)', es: 'Corticosteroide Sistémico (Acción Intermedia)' },
    indications: {
      pt: ['Doenças reumatológicas e autoimunes (Lúpus, Artrite Reumatoide)', 'Asma brônquica e DPOC exacerbados (uso ambulatorial)', 'Imunossupressão basal (Pênfigo, Púrpura)'],
      es: ['Enfermedades reumatológicas y autoinmunes (Lupus, Artritis Reumatoide)', 'Asma bronquial y EPOC exacerbados (uso ambulatorio)', 'Inmunosupresión basal (Pénfigo, Púrpura)']
    },
    commercialNames: { br: ['Meticorten', 'Predsim'], ar: ['Meticorten', 'Corticorten'] },
    presentation: {
      pt: ['Comprimidos 5 mg, 20 mg'],
      es: ['Comprimidos 5 mg, 20 mg']
    },
    mechanism: {
      pt: 'Pró-fármaco. Precisa ser ativado no fígado pela enzima 11-beta-hidroxiesteroide desidrogenase tipo 1 (11β-HSD1) para converter-se em prednisolona (a forma ativa). Possui 4 vezes mais potência anti-inflamatória que o cortisol natural e leve atividade mineralocorticoide.',
      es: 'Profármaco. Necesita ser activado en el hígado por la enzima 11-beta-hidroxiesteroide deshidrogenasa tipo 1 (11β-HSD1) para convertirse en prednisolona (la forma activa). Posee 4 veces más potencia antiinflamatoria que el cortisol natural y leve actividad mineralocorticoide.'
    },
    dose: {
      adult: {
        pt: 'Crises Agudas/Asma: 40 a 60 mg/dia VO por 5 a 7 dias. Doenças Reumatológicas: 0,5 a 1 mg/kg/dia VO com desmame lento.',
        es: 'Crisis Agudas/Asma: 40 a 60 mg/día VO por 5 a 7 días. Enfermedades Reumatológicas: 0,5 a 1 mg/kg/día VO con destete lento.'
      },
      pediatric: {
        pt: '1 a 2 mg/kg/dia VO (em crianças geralmente prefere-se a prednisolona líquida).',
        es: '1 a 2 mg/kg/día VO (en niños generalmente se prefiere la prednisolona líquida).'
      }
    },
    administration: {
      pt: ['Dose diária deve ser tomada inteiramente pela manhã (entre 7h e 9h) com o estômago cheio.', 'Tratamentos > 14 dias exigem desmame gradual (tapering).'],
      es: ['Dosis diaria debe tomarse enteramente por la mañana (entre 7h y 9h) con el estómago lleno.', 'Tratamientos > 14 días exigen destete gradual (tapering).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Na falência hepática grave, a conversão de prednisona para prednisolona pode falhar, tornando a droga ineficaz. Preferir uso direto de prednisolona ou metilprednisolona.', es: 'En falla hepática grave, la conversión de prednisona a prednisolona puede fallar, haciendo la droga ineficaz. Preferir uso directo de prednisolona o metilprednisolona.' } },
    commonAdverseEffects: {
      pt: ['Aumento de peso / Retenção hídrica', 'Fome excessiva', 'Insônia e labilidade emocional', 'Acne e pele fina'],
      es: ['Aumento de peso / Retención hídrica', 'Hambre excesiva', 'Insomnio y labilidad emocional', 'Acné y piel fina']
    },
    dangerousAdverseEffects: {
      pt: ['Síndrome de Cushing Iatrogênica', 'Osteoporose severa induzida por esteroides', 'Glaucoma e Catarata', 'Supressão adrenal secundária (falência aguda no desmame rápido)'],
      es: ['Síndrome de Cushing Iatrogénica', 'Osteoporosis severa inducida por esteroides', 'Glaucoma y Catarata', 'Supresión adrenal secundaria (falla aguda en destete rápido)']
    },
    contraindications: {
      absolute: { pt: ['Infecções sistêmicas ativas (sem cobertura antimicrobiana)'], es: ['Infecciones sistémicas activas (sin cobertura antimicrobiana)'] },
      relative: { pt: ['Hipertensão não controlada', 'Osteoporose severa', 'Diabetes lábil'], es: ['Hipertensión no controlada', 'Osteoporosis severa', 'Diabetes lábil'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'REGRAS DE DESMAME: O uso contínuo de doses > 20mg/dia por mais de 2 a 3 semanas suprime o eixo adrenal. A interrupção abrupta pode causar Choque Adrenal fatal.', es: 'REGLAS DE DESTETE: El uso continuo de dosis > 20mg/día por más de 2 a 3 semanas suprime el eje adrenal. La interrupción abrupta puede causar Choque Adrenal fatal.' }
    },
    ref: 'Rhen T & Cidlowski JA. N Engl J Med 2005 · Brozek JL et al. (GINA) 2023 · Imboden JB. JAMA 2020 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     3. PREDNISOLONA
     Corticoide Oral Ativo — Pediátrica · Hepatopatas · DII
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'prednisolona',
    name: { pt: 'Prednisolona', es: 'Prednisolona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Intermediária)', es: 'Corticosteroide Sistémico (Acción Intermedia)' },
    indications: {
      pt: ['Asma brônquica aguda (pediatria)', 'Alergias severas', 'Doenças inflamatórias intestinais e hepáticas'],
      es: ['Asma bronquial aguda (pediatría)', 'Alergias severas', 'Enfermedades inflamatorias intestinales y hepáticas']
    },
    commercialNames: { br: ['Prelone', 'Predsim (Solução)'], ar: ['Cortipyren'] },
    presentation: {
      pt: ['Solução oral 3 mg/mL', 'Comprimidos 5 mg, 20 mg', 'Colírio 1%'],
      es: ['Solución oral 3 mg/mL', 'Comprimidos 5 mg, 20 mg', 'Colirio 1%']
    },
    mechanism: {
      pt: 'Glicocorticoide ativo (não requer conversão hepática). Possui exatamente o mesmo mecanismo anti-inflamatório da prednisona. Por estar disponível em solução oral palatável (líquido), é o corticoide mais utilizado e prescrito mundialmente na prática pediátrica.',
      es: 'Glucocorticoide activo (no requiere conversión hepática). Posee exactamente el mismo mecanismo antiinflamatorio que la prednisona. Por estar disponible en solución oral palatable (líquido), es el corticoide más utilizado y prescrito mundialmente en la práctica pediátrica.'
    },
    dose: {
      adult: {
        pt: 'Oral: 5 a 60 mg/dia. Hepatite Alcoólica grave (índice de Maddrey >32): 40 mg/dia VO por 28 dias.',
        es: 'Oral: 5 a 60 mg/día. Hepatitis Alcohólica grave (índice de Maddrey >32): 40 mg/día VO por 28 días.'
      },
      pediatric: {
        pt: 'Crise Asmática: 1 a 2 mg/kg/dia VO por 3 a 5 dias (máximo 40 a 60 mg/dia).',
        es: 'Crisis Asmática: 1 a 2 mg/kg/día VO por 3 a 5 días (máximo 40 a 60 mg/día).'
      }
    },
    administration: {
      pt: ['Tomar com alimentos para minimizar irritação gástrica.', 'Preferencialmente em dose única matinal.'],
      es: ['Tomar con alimentos para minimizar irritación gástrica.', 'Preferentemente en dosis única matutina.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Diferente da prednisona, a prednisolona JÁ ESTÁ ATIVA, sendo o corticoide oral de escolha para pacientes com insuficiência hepática (ex: Hepatite Alcoólica).', es: 'A diferencia de la prednisona, la prednisolona YA ESTÁ ACTIVA, siendo el corticoide oral de elección para pacientes con insuficiencia hepática (ej: Hepatitis Alcohólica).' } },
    commonAdverseEffects: {
      pt: ['Agitação/Choro constante (em crianças pequenas)', 'Aumento do apetite', 'Candidíase oral (se em uso contínuo)'],
      es: ['Agitación/Llanto constante (en niños pequeños)', 'Aumento del apetito', 'Candidiasis oral (si en uso continuo)']
    },
    dangerousAdverseEffects: {
      pt: ['Retardo do crescimento estatural (uso crônico em pediatria)', 'Imunossupressão grave', 'Mascaramento de infecções bacterianas'],
      es: ['Retraso del crecimiento estatural (uso crónico en pediatría)', 'Inmunosupresión grave', 'Enmascaramiento de infecciones bacterianas']
    },
    contraindications: {
      absolute: { pt: ['Herpes ocular ativo', 'Varicela (Catapora) ativa - risco de evolução fatal disseminada se receber corticoide sistêmico'], es: ['Herpes ocular activo', 'Varicela activa - riesgo de evolución fatal diseminada si recibe corticoide sistémico'] },
      relative: { pt: ['Gastrite ou úlcera gástrica ativa'], es: ['Gastritis o úlcera gástrica activa'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'ALERTA PEDIÁTRICO: O uso repetitivo de cursos curtos (várias vezes ao ano) pode ter efeito cumulativo no atraso do crescimento infantil. Prescrever apenas quando estritamente indicado.', es: 'ALERTA PEDIÁTRICA: El uso repetitivo de cursos cortos (varias veces al año) puede tener efecto acumulativo en el retraso del crecimiento infantil. Prescribir solo cuando esté estrictamente indicado.' }
    },
    ref: 'Manson SC et al. Eur Respir J 2009 · Carithers RL Jr et al. Ann Intern Med 1989 · Guilbert TW et al. J Allergy Clin Immunol 2015 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     4. DEFLAZACORTE
     Corticoide Oral Derivado Oxazolínico — Menor Osteoporose/Hiperglicemia
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'deflazacorte',
    name: { pt: 'Deflazacorte', es: 'Deflazacort' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Derivado Oxazolínico)', es: 'Corticosteroide Sistémico (Derivado Oxazolínico)' },
    indications: {
      pt: ['Doenças reumatológicas em pacientes idosos ou diabéticos', 'Distrofia Muscular de Duchenne', 'Tratamentos esteroides de longo prazo que requerem poupança óssea'],
      es: ['Enfermedades reumatológicas en pacientes ancianos o diabéticos', 'Distrofia Muscular de Duchenne', 'Tratamientos esteroideos de largo plazo que requieren preservación ósea']
    },
    commercialNames: { br: ['Calcort', 'Deflaimmun'], ar: ['Azacortid'] },
    presentation: {
      pt: ['Comprimidos 6 mg, 30 mg', 'Suspensão oral 22,75 mg/mL'],
      es: ['Comprimidos 6 mg, 30 mg', 'Suspensión oral 22,75 mg/mL']
    },
    mechanism: {
      pt: 'Pró-fármaco glicocorticoide. Derivado oxazolínico da prednisolona. A principal vantagem farmacológica é o seu MENOR impacto no metabolismo dos carboidratos (menor hiperglicemia) e MENOR depleção de cálcio ósseo (menor osteoporose induzida) quando comparado a doses equivalentes de prednisona.',
      es: 'Profármaco glucocorticoide. Derivado oxazolínico de la prednisolona. La principal ventaja farmacológica es su MENOR impacto en el metabolismo de los carbohidratos (menor hiperglucemia) y MENOR depleción de calcio óseo (menor osteoporosis inducida) al compararlo con dosis equivalentes de prednisona.'
    },
    dose: {
      adult: {
        pt: 'Uso anti-inflamatório comum: 6 a 30 mg/dia VO (Equivalência: 6mg de deflazacorte = 5mg de prednisona).',
        es: 'Uso antiinflamatorio común: 6 a 30 mg/día VO (Equivalencia: 6mg de deflazacort = 5mg de prednisona).'
      },
      pediatric: {
        pt: 'Distrofia de Duchenne: 0,9 mg/kg/dia VO (uso crônico para preservar força muscular e prolongar marcha).',
        es: 'Distrofia de Duchenne: 0,9 mg/kg/día VO (uso crónico para preservar fuerza muscular y prolongar marcha).'
      }
    },
    administration: {
      pt: ['Comprimidos podem ser tomados com ou sem alimentos, de preferência de manhã.'],
      es: ['Los comprimidos pueden tomarse con o sin alimentos, de preferencia por la mañana.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Pró-fármaco ativado no fígado (esterases hepáticas). Na insuficiência hepática, os níveis da droga ativa aumentam; reduzir dose.', es: 'Profármaco activado en el hígado (esterasas hepáticas). En insuficiencia hepática, los niveles de la droga activa aumentan; reducir dosis.' } },
    commonAdverseEffects: {
      pt: ['Aumento de peso (forma cushingoide)', 'Aumento do apetite', 'Hirsutismo'],
      es: ['Aumento de peso (forma cushingoide)', 'Aumento del apetito', 'Hirsutismo']
    },
    dangerousAdverseEffects: {
      pt: ['Catarata subcapsular posterior', 'Supressão adrenal prolongada', 'Aumento de infecções e alterações imunológicas severas'],
      es: ['Catarata subcapsular posterior', 'Supresión adrenal prolongada', 'Aumento de infecciones y alteraciones inmunológicas severas']
    },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade ao fármaco', 'Infecções sistêmicas ativas (fúngicas, TB descontrolada)'], es: ['Hipersensibilidad al fármaco', 'Infecciones sistémicas activas (fúngicas, TB descontrolada)'] },
      relative: { pt: ['Pacientes em uso concomitante de imunossupressores biológicos severos sem cobertura profilática'], es: ['Pacientes en uso concomitante de inmunosupresores biológicos severos sin cobertura profiláctica'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Substituto excelente da prednisona para pacientes que precisam de corticoide crônico, mas que possuem osteoporose avançada ou diabetes melitus de difícil controle.', es: 'Sustituto excelente de la prednisona para pacientes que necesitan corticoide crónico, pero que poseen osteoporosis avanzada o diabetes mellitus de difícil control.' }
    },
    ref: 'Biggar WD et al. Ann Neurol 2006 · Bello L et al. Neurology 2015 · Reeves JD et al. Clin Rheumatol 1999 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     5. BETAMETASONA
     Corticoide Ação Longa / Depósito — Maturação Pulmonar Fetal · Infiltração
     BUILD 281 — Lote 5
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'betametasona',
    name: { pt: 'Betametasona', es: 'Betametasona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Longa / Alta Potência)', es: 'Corticosteroide Sistémico (Acción Larga / Alta Potencia)' },
    indications: {
      pt: ['Maturação pulmonar fetal na iminência de parto prematuro', 'Alergias graves e reações anafiláticas', 'Infiltração intra-articular'],
      es: ['Maduración pulmonar fetal en inminencia de parto prematuro', 'Alergias graves y reacciones anafilácticas', 'Infiltración intraarticular']
    },
    commercialNames: { br: ['Celestone', 'Diprospan (Injetável de Depósito)'], ar: ['Celestone', 'Cronocorteroid'] },
    presentation: {
      pt: ['Ampolas IM/IV 4 mg/mL', 'Suspensão de depósito IM (Dipropionato + Fosfato) 5mg+2mg/mL', 'Comprimidos 2 mg', 'Gotas 0,5 mg/mL'],
      es: ['Ampollas IM/IV 4 mg/mL', 'Suspensión de depósito IM (Dipropionato + Fosfato) 5mg+2mg/mL', 'Comprimidos 2 mg', 'Gotas 0,5 mg/mL']
    },
    mechanism: {
      pt: 'Glicocorticoide sintético de ação prolongada, isômero da dexametasona. Não possui atividade mineralocorticoide. A formulação de depósito (Diprospan) combina um éster de absorção imediata com outro de absorção ultra-lenta, garantindo efeito por até 3 a 4 semanas com uma única injeção IM. Na obstetrícia, cruza a barreira placentária para induzir a produção de surfactante nos pulmões fetais.',
      es: 'Glucocorticoide sintético de acción prolongada, isómero de la dexametasona. No posee actividad mineralocorticoide. La formulación de depósito combina un éster de absorción inmediata con otro de absorción ultralenta, garantizando efecto por hasta 3 a 4 semanas con una sola inyección IM. En obstetricia, cruza la barrera placentaria para inducir la producción de surfactante en los pulmones fetales.'
    },
    dose: {
      adult: {
        pt: 'Maturação Pulmonar Fetal: 12 mg IM profundo a cada 24 horas (total de 2 doses). Anti-inflamatório (Diprospan): 1 a 2 mL IM profundo, dose única.',
        es: 'Maduración Pulmonar Fetal: 12 mg IM profundo cada 24 horas (total de 2 dosis). Antiinflamatorio (Depósito): 1 a 2 mL IM profundo, dosis única.'
      },
      pediatric: {
        pt: 'Geralmente 0,02 a 0,3 mg/kg/dia (fracionado ou dose única). Evitar formulações de depósito em crianças pequenas.',
        es: 'Generalmente 0,02 a 0,3 mg/kg/día (fraccionado o dosis única). Evitar formulaciones de depósito en niños pequeños.'
      }
    },
    administration: {
      pt: ['A formulação de depósito (Diprospan/Duoflam) NUNCA deve ser aplicada por via IV (risco de embolia e morte). Apenas IM profunda ou intra-articular.'],
      es: ['La formulación de depósito NUNCA debe aplicarse por vía IV (riesgo de embolia y muerte). Solo IM profunda o intraarticular.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Metabolizado no fígado; efeito pode ser prolongado na insuficiência hepática.', es: 'Metabolizado en el hígado; el efecto puede ser prolongado en insuficiencia hepática.' } },
    commonAdverseEffects: {
      pt: ['Irregularidade menstrual', 'Insônia transitória', 'Aumento da glicemia (persistente por semanas na forma de depósito)'],
      es: ['Irregularidad menstrual', 'Insomnio transitorio', 'Aumento de la glucemia (persistente por semanas en la forma de depósito)']
    },
    dangerousAdverseEffects: {
      pt: ['Atrofia muscular e cutânea', 'Supressão prolongada do eixo HPA (com uso de depósito)', 'Infecções oportunistas', 'Osteonecrose'],
      es: ['Atrofia muscular y cutánea', 'Supresión prolongada del eje HPA (con uso de depósito)', 'Infecciones oportunistas', 'Osteonecrosis']
    },
    contraindications: {
      absolute: { pt: ['Infecções sistêmicas ativas', 'Administração IV de formulações leitosas (suspensão de depósito)'], es: ['Infecciones sistémicas activas', 'Administración IV de formulaciones lechosas (suspensión de depósito)'] },
      relative: { pt: ['Diabetes Mellitus descompensada', 'Hipertensão grave'], es: ['Diabetes Mellitus descompensada', 'Hipertensión grave'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'CUIDADO ENDÓCRINO: A aplicação de 1 ampola de corticoide de depósito descompensa o diabetes por semanas, exigindo reajuste prolongado da insulina. Não banalizar o uso para dores simples.', es: 'CUIDADO ENDOCRINO: La aplicación de 1 ampolla de corticoide de depósito descompensa la diabetes por semanas, exigiendo reajuste prolongado de la insulina. No banalizar el uso para dolores simples.' }
    },
    ref: 'Roberts D et al. (ACTORDS) Cochrane 2017 · Crowther CA & Harding JE. N Engl J Med 2011 · ACR Guidelines 2022 · Lexicomp 2026'
  }

]; /* fim window.IMUNO_CORTICOIDE_DRUGS_DB */
