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
    "id": "dexametasona",
    "name": {
      "pt": "Dexametasona",
      "es": "Dexametasona"
    },
    "category": "imunologia",
    "class": {
      "pt": "Corticosteroide glicocorticoide de longa ação",
      "es": "Corticosteroide glucocorticoide de acción prolongada"
    },
    "indications": {
      "pt": [
        "Componente de profilaxia antiemética em quimioterapia conforme risco emetogênico",
        "Múltiplas indicações inflamatórias/imunológicas conforme rotulagem"
      ],
      "es": [
        "Componente de profilaxis antiemética en quimioterapia según riesgo emetógeno",
        "Múltiples indicaciones inflamatorias/inmunológicas según rotulado"
      ]
    },
    "mechanism": {
      "pt": "Agonista do receptor glicocorticoide. O mecanismo antiemético é multifatorial e não completamente definido.",
      "es": "Agonista del receptor glucocorticoide. El mecanismo antiemético es multifactorial y no está completamente definido."
    },
    "dose": {
      "adult": {
        "pt": "Como antiemético em oncologia, a dose depende do risco emetogênico e dos fármacos associados (5-HT3/NK1/olanzapina). Seguir protocolo ASCO/MASCC-ESMO; não existe dose universal.",
        "es": "Como antiemético en oncología, la dosis depende del riesgo emetógeno y de los fármacos asociados (5-HT3/NK1/olanzapina). Seguir protocolo ASCO/MASCC-ESMO; no existe dosis universal."
      },
      "pediatric": {
        "pt": "Posologia antiemética pediátrica depende do protocolo oncológico e do esquema quimioterápico.",
        "es": "La posología antiemética pediátrica depende del protocolo oncológico y del esquema de quimioterapia."
      }
    },
    "administration": {
      "pt": [
        "Na profilaxia antiemética, ajustar duração ao risco e protocolo; evitar prolongamento desnecessário",
        "Monitorar glicemia, infecção e efeitos psiquiátricos quando doses repetidas"
      ],
      "es": [
        "En profilaxis antiemética, ajustar duración al riesgo y protocolo; evitar prolongación innecesaria",
        "Monitorizar glucemia, infección y efectos psiquiátricos cuando se usan dosis repetidas"
      ]
    },
    "renalAdjustment": {
      "required": false,
      "message": {
        "pt": "Sem ajuste renal rotineiro específico.",
        "es": "Sin ajuste renal rutinario específico."
      }
    },
    "hepaticAdjustment": {
      "required": false,
      "message": {
        "pt": "Sem fator fixo universal; monitorar efeitos sistêmicos em hepatopatia.",
        "es": "Sin factor fijo universal; monitorizar efectos sistémicos en hepatopatía."
      }
    },
    "commonAdverseEffects": {
      "pt": [
        "Hiperglicemia",
        "Insônia",
        "Dispepsia",
        "Alteração de humor"
      ],
      "es": [
        "Hiperglucemia",
        "Insomnio",
        "Dispepsia",
        "Cambio de ánimo"
      ]
    },
    "dangerousAdverseEffects": {
      "pt": [
        "Infecção",
        "Psicose/mania",
        "Sangramento GI em contexto de risco",
        "Supressão adrenal com uso prolongado"
      ],
      "es": [
        "Infección",
        "Psicosis/manía",
        "Sangrado GI en contexto de riesgo",
        "Supresión adrenal con uso prolongado"
      ]
    },
    "contraindications": {
      "absolute": {
        "pt": [
          "Infecção fúngica sistêmica sem tratamento apropriado",
          "Hipersensibilidade"
        ],
        "es": [
          "Infección fúngica sistémica sin tratamiento apropiado",
          "Hipersensibilidad"
        ]
      },
      "relative": {
        "pt": [
          "Diabetes, infecção ativa, psicose/mania, úlcera"
        ],
        "es": [
          "Diabetes, infección activa, psicosis/manía, úlcera"
        ]
      }
    },
    "safetyFlags": {
      "bleedingRisk": false,
      "renalHighRisk": false,
      "hepaticCaution": false,
      "antidoteAvailable": false,
      "highAlertMedication": false,
      "warning": {
        "pt": "Na antiemese oncológica, dexametasona é componente do esquema; dose e número de dias devem seguir risco emetogênico e combinação usada.",
        "es": "En antiemesis oncológica, dexametasona es componente del esquema; dosis y número de días deben seguir riesgo emetógeno y combinación utilizada."
      }
    }
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
  },

  /* ══════════════════════════════════════════════════════════════
     BUILD 427 — LACUNAS CRÍTICAS: Corticoides IV de Resgate
     Hidrocortisona · Metilprednisolona
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'hidrocortisona',
    name: { pt: 'Hidrocortisona (Succinato Sódico de)', es: 'Hidrocortisona (Succinato Sódico de)' },
    category: 'emergencia',
    class: { pt: 'Corticosteroide Sistêmico de Ação Curta (Glucocorticoide)', es: 'Corticosteroide Sistémico de Acción Corta (Glucocorticoide)' },
    indications: {
      pt: ['Insuficiência Adrenal Aguda (Crise Addisoniana)', 'Choque Séptico refratário a vasopressores (Protocolo Surviving Sepsis)', 'Status Asthmaticus e exacerbação grave de DPOC', 'Reações anafiláticas graves (Adjuvante)'],
      es: ['Insuficiencia Adrenal Aguda (Crisis Addisoniana)', 'Choque Séptico refractario a vasopresores', 'Status Asthmaticus y exacerbación de EPOC', 'Reacciones anafilácticas graves']
    },
    commercialNames: { br: ['Solu-Cortef', 'Hidrocortisona IV'], ar: ['Solu-Cortef', 'Flebocortid'] },
    presentation: { pt: ['Frasco-ampola com pó liofilizado para injeção 100 mg e 500 mg + diluente'], es: ['Frasco-ampolla con polvo liofilizado para inyección 100 mg y 500 mg'] },
    mechanism: {
      pt: 'O Corticoide Fisiológico de Resgate. É a cópia sintética do cortisol humano. Age ligando-se aos receptores citoplasmáticos de glucocorticoide, migrando para o núcleo celular onde bloqueia a transcrição de citocinas pró-inflamatórias (IL-1, IL-6, TNF-alfa) e inibe a fosfolipase A2. Possui um potente efeito mineralocorticoide intrínseco (retém sódio e puxa água para dentro do vaso), o que ajuda a restaurar a pressão arterial no choque.',
      es: 'El Corticoide Fisiológico de Rescate. Copia sintética del cortisol. Bloquea la transcripción de citocinas proinflamatorias e inhibe la fosfolipasa A2. Posee un potente efecto mineralocorticoide intrínseco (retiene sodio y agua), restaurando la presión arterial en el choque.'
    },
    dose: {
      adult: {
        pt: 'Choque Séptico: 200 mg/dia administrados em infusão contínua ou doses divididas de 50 mg IV a cada 6 horas. Crise Adrenal: 100 mg IV em bolus imediato, seguido de 100–200 mg nas próximas 24h.',
        es: 'Choque Séptico: 200 mg/día en infusión continua o dosis divididas de 50 mg IV cada 6 horas. Crisis Adrenal: 100 mg IV en bolo.'
      },
      pediatric: {
        pt: 'Ataque de insuficiência adrenal: 1 a 2 mg/kg/dose IV bolus, seguido de 25 a 150 mg/dia divididos.',
        es: 'Crisis adrenal pediátrica: 1 a 2 mg/kg/dosis IV bolo.'
      }
    },
    administration: { pt: ['Pode ser administrado via IV direta (bolus lento de 1 a 5 minutos) ou diluído em SF 0,9% ou SG 5% para infusão contínua.'], es: ['Vía IV directa (bolo lento de 1 a 5 minutos) o diluido en SF o SG 5% para infusión continua.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste prévio.', es: 'Sin necesidad de ajuste previo.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Metabolização hepática; monitorar retenção de fluidos se cirrose grave.', es: 'Monitorear retención de fluidos si hay cirrosis grave.' } },
    commonAdverseEffects: { pt: ['Hiperglicemia aguda (requer insulina)', 'Hipocalemia', 'Retenção hídrica com edema e hipertensão transitória'], es: ['Hiperglucemia aguda', 'Hipopotasemia', 'Retención hídrica con edema'] },
    dangerousAdverseEffects: { pt: ['Psicose induzida por corticoide (Delirium agudo de UTI)', 'Imunossupressão severa com mascaramento de focos infecciosos', 'Miopatia aguda'], es: ['Psicosis por corticoide (Delirium en UCI)', 'Infecciones oportunistas por inmunosupresión'] },
    contraindications: {
      absolute: { pt: ['Infecções fúngicas sistêmicas generalizadas sem tratamento fúngico ativo'], es: ['Infecciones fúngicas sistémicas sin tratamiento activo'] },
      relative: { pt: ['Diabetes Mellitus descompensado severo', 'Úlcera péptica ativa sangrante'], es: ['Diabetes Mellitus descompensado', 'Úlcera péptica activa'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'O PERIGO DA PARADA BRUSCA: O uso prolongado de hidrocortisona por mais de 7–14 dias atrofia as glândulas adrenais. Se suspenso abruptamente, o corpo entra em Choque Addisoniano Iatrogênico por falta de cortisol, podendo levar ao óbito. Faça sempre o desmame gradual.', es: 'EL PELIGRO DE LA PARADA BRUSCA: El uso por más de 7–14 días atrofia las glándulas adrenales. Si se suspende abruptamente, el cuerpo entra en Choque Addisoniano Iatrogénico. Realice siempre desmame gradual.' }
    },
    ref: 'Surviving Sepsis Campaign Guidelines 2021 · Corticus Trial · ADRENAL Trial (NEJM 2018) · Lexicomp 2026'
  },

  {
    id: 'metilprednisolona',
    name: { pt: 'Metilprednisolona (Succinato Sódico de)', es: 'Metilprednisolona (Succinato Sódico de)' },
    category: 'emergencia',
    class: { pt: 'Corticosteroide Sistêmico de Ação Intermediária (Alta Potência Anti-inflamatória)', es: 'Corticosteroide Sistémico de Acción Intermedia (Alta Potencia Antiinflamatoria)' },
    indications: {
      pt: ['Pulsoterapia em crises reumatológicas (Lúpus, Artrite Reumatoide)', 'Rejeição aguda de órgãos transplantados', 'Exacerbação grave de Esclerose Múltipla', 'Lesão medular traumática aguda (uso controverso conforme protocolo)'],
      es: ['Pulsoterapia en crisis reumatológicas (Lupus, AR)', 'Rechazo agudo de órganos trasplantados', 'Exacerbación de Esclerosis Múltiple']
    },
    commercialNames: { br: ['Solu-Medrol', 'Unimedrol'], ar: ['Solu-Medrol', 'Metilprednisolona'] },
    presentation: { pt: ['Frasco-ampola pó liofilizado IV 40 mg, 125 mg, 500 mg e 1.000 mg + diluente'], es: ['Frasco-ampolla polvo liofilizado IV 40 mg a 1.000 mg'] },
    mechanism: {
      pt: 'O Aríete da Imunossupressão. Possui potência anti-inflamatória 5 vezes MAIOR que a Hidrocortisona, com a enorme vantagem de quase NÃO ter efeito mineralocorticoide (não retém sódio). Em altas doses (Pulsoterapia), penetra diretamente no núcleo dos linfócitos doentes e induz apoptose, paralisando o ataque autoimune em 24 horas.',
      es: 'El Ariete de la Inmunosupresión. Potencia antiinflamatoria 5 veces MAYOR que la Hidrocortisona, casi SIN efecto mineralocorticoide. En altas dosis (Pulsoterapia), induce la apoptosis de los linfocitos enfermos, parando el ataque autoinmune en 24 horas.'
    },
    dose: {
      adult: {
        pt: 'Pulsoterapia Reumatológica/Transplante: 500 mg a 1.000 mg IV, UMA VEZ ao dia, infundido em 30 a 60 minutos, geralmente por 3 dias consecutivos.',
        es: 'Pulsoterapia: 500 mg a 1.000 mg IV, UNA VEZ al día, infundido en 30 a 60 minutos, por 3 días.'
      },
      pediatric: {
        pt: 'Anti-inflamatório padrão: 1 a 2 mg/kg/dia IV divididos a cada 6 ou 12 horas.',
        es: 'Antiinflamatorio estándar: 1 a 2 mg/kg/día IV.'
      }
    },
    administration: { pt: ['A PULSOTERAPIA NUNCA PODE SER DADA EM BOLUS RÁPIDO. Deve correr em bomba de infusão em pelo menos 30–60 minutos, sob risco de parada cardíaca por arritmia eletrolítica severa.'], es: ['LA PULSOTERAPIA NUNCA EN BOLO RÁPIDO. Debe correr en bomba de infusión en mínimo 30–60 minutos, bajo riesgo de parada cardíaca.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Metabolizado no fígado. Monitorar enzimas em hepatopatias graves.', es: 'Metabolizado en hígado. Monitorear enzimas en hepatopatías graves.' } },
    commonAdverseEffects: { pt: ['Disparada glicêmica severa', 'Sabor metálico durante a infusão', 'Insônia profunda e irritabilidade extrema'], es: ['Pico glucémico severo', 'Sabor metálico durante la infusión', 'Insomnio profundo e irritabilidad'] },
    dangerousAdverseEffects: { pt: ['Necrose Asséptica da Cabeça do Fêmur (uso crônico ou pulsoterapia repetida)', 'Arritmias cardíacas letais se infundido rapidamente', 'Perfuração de úlcera gástrica silenciosa'], es: ['Necrosis Avascular de la Cabeza del Fémur', 'Arritmias cardíacas letales si se infunde rápido', 'Perforación de úlcera gástrica'] },
    contraindications: {
      absolute: { pt: ['Infecções bacterianas ou fúngicas sistêmicas ativas sem cobertura antimicrobiana adequada'], es: ['Infecciones sistémicas activas sin cobertura'] },
      relative: { pt: ['Hipertensão arterial maligna', 'Histórico de psicose bipolar'], es: ['Hipertensión arterial maligna', 'Historial de psicosis bipolar'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'O ALERTA DO INFARTO DA CABEÇA DO FÊMUR: O uso de altas doses pode causar microembolias de gordura que entopem as artérias do quadril. Meses após a pulsoterapia, a cabeça do fêmur pode morrer (Necrose Avascular), exigindo prótese total de quadril em pacientes jovens.', es: 'EL ALERTA DEL INFARTO DE LA CABEZA DEL FÉMUR: El uso de altas dosis puede causar microembolias que tapan las arterias de la cadera. Meses después, la cabeza del fémur puede morir (Necrosis Avascular), exigiendo prótesis.' }
    },
    ref: 'SBR Guidelines · NASCIS III Trial · ADRENAL Trial · Lexicomp 2026'
  }

]; /* fim window.IMUNO_CORTICOIDE_DRUGS_DB — BUILD 427 */
/* GOLD33_SELECTIVE:betametasona:START */
;(function(){var db=window.IMUNO_CORTICOIDE_DRUGS_DB;var drug=Array.isArray(db)?db.find(function(item){return item&&item.id==="betametasona";}):db&&db["betametasona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:betametasona");drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "010",
    "requiredFieldCount": 33,
    "approvedSha256": "f3d905f789b704e06b68dc3e394b05b58bc2a0f9b68ae6180e4ebb22ad653e12",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Betametasona sistêmica",
    "class": "Corticosteroide glicocorticoide",
    "pharmacologicClass": "Agonista do receptor glicocorticoide com potente efeito anti-inflamatório",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos/solução; fosfato solúvel; acetato depot e combinações; produtos tópicos são distintos.",
    "presentations": "Comprimidos/solução; fosfato solúvel; acetato depot e combinações; produtos tópicos são distintos.",
    "mechanism": "Agonista do receptor glicocorticoide com potente efeito anti-inflamatório. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Longa duração biológica; metabolismo hepático CYP3A4; eliminação renal de metabólitos.",
    "indications": "Múltiplas condições inflamatórias e imunológicas; maturação fetal antenatal é uma indicação específica. Formulações não são intercambiáveis.",
    "dose": "Dose sistêmica é altamente dependente da indicação/produto. Maturação fetal: 12 mg IM a cada 24 h por 2 doses, em protocolo obstétrico. Não extrapolar para outras indicações.",
    "pediatricDose": "Doses dependem de doença, peso e formulação; usar menor dose eficaz. AUTOMATABLE=NO.",
    "renalDose": "Geralmente sem ajuste formal; monitorar retenção, eletrólitos e efeitos sistêmicos.",
    "hepaticDose": "Pode exigir cautela/redução em doença grave; risco metabólico aumentado.",
    "commonAdverseEffects": "Hiperglicemia, dispepsia, insônia, alteração de humor, retenção e aumento de apetite.",
    "dangerousAdverseEffects": "Infecção, psicose, sangramento GI, osteonecrose, glaucoma, miopatia e crise adrenal após retirada abrupta.",
    "adverseEffects": "Hiperglicemia, dispepsia, insônia, alteração de humor, retenção e aumento de apetite. Graves: Infecção, psicose, sangramento GI, osteonecrose, glaucoma, miopatia e crise adrenal após retirada abrupta.",
    "contraindications": "Hipersensibilidade e infecção fúngica sistêmica; vacinas vivas com doses imunossupressoras.",
    "interactions": "Indutores/inibidores CYP3A, AINE, anticoagulantes, antidiabéticos, diuréticos e vacinas; revisar amplamente.",
    "monitoring": "Glicemia, PA, peso/edema, eletrólitos, infecção, humor, olhos, osso, crescimento e eixo adrenal.",
    "administration": "VO/IM/IV/intra-articular conforme formulação. Nunca administrar suspensão depot por via IV.",
    "preparation": "Confirmar sal, concentração, via e compatibilidade. Suspensões devem ser homogeneizadas conforme bula.",
    "infusionProtocol": "Somente formulações IV autorizadas; velocidade e diluição dependem do produto/indicação.",
    "pregnancy": "Uso antenatal somente no cenário/tempo gestacional indicado; exposição prolongada requer avaliação materno-fetal.",
    "lactation": "Passa ao leite; doses altas/prolongadas podem afetar lactente ou produção. Individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Infecção, psicose, sangramento GI, osteonecrose, glaucoma, miopatia e crise adrenal após retirada abrupta. Toda dose/preparo bloqueados sem indicação, sal, concentração, via, duração e comorbidades; formulações não intercambiáveis.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=betamethasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/antenatal-corticosteroid-therapy-for-fetal-maturation"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=betamethasone"
  },
  "es": {
    "name": "Betametasona sistémica",
    "class": "Corticosteroide glucocorticoide",
    "pharmacologicClass": "Agonista del receptor glucocorticoide con potente efecto antiinflamatorio",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos/solución; fosfato soluble; acetato depot y combinaciones; tópicos son distintos.",
    "presentations": "Comprimidos/solución; fosfato soluble; acetato depot y combinaciones; tópicos son distintos.",
    "mechanism": "Agonista del receptor glucocorticoide con potente efecto antiinflamatorio. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Larga duración biológica; metabolismo hepático CYP3A4; eliminación renal de metabolitos.",
    "indications": "Múltiples afecciones inflamatorias e inmunológicas; maduración fetal antenatal es indicación específica. Formulaciones no intercambiables.",
    "dose": "Dosis sistémica depende de indicación/producto. Maduración fetal: 12 mg IM cada 24 h por 2 dosis, en protocolo obstétrico. No extrapolar.",
    "pediatricDose": "Dosis dependen de enfermedad, peso y formulación; usar mínima eficaz. AUTOMATABLE=NO.",
    "renalDose": "Generalmente sin ajuste formal; vigilar retención, electrolitos y efectos sistémicos.",
    "hepaticDose": "Puede requerir precaución/reducción en enfermedad grave; mayor riesgo metabólico.",
    "commonAdverseEffects": "Hiperglucemia, dispepsia, insomnio, cambio de ánimo, retención y aumento de apetito.",
    "dangerousAdverseEffects": "Infección, psicosis, sangrado GI, osteonecrosis, glaucoma, miopatía y crisis suprarrenal tras retirada brusca.",
    "adverseEffects": "Hiperglucemia, dispepsia, insomnio, cambio de ánimo, retención y aumento de apetito. Graves: Infección, psicosis, sangrado GI, osteonecrosis, glaucoma, miopatía y crisis suprarrenal tras retirada brusca.",
    "contraindications": "Hipersensibilidad e infección fúngica sistémica; vacunas vivas con dosis inmunosupresoras.",
    "interactions": "Inductores/inhibidores CYP3A, AINE, anticoagulantes, antidiabéticos, diuréticos y vacunas; revisión amplia.",
    "monitoring": "Glucemia, PA, peso/edema, electrolitos, infección, ánimo, ojos, hueso, crecimiento y eje suprarrenal.",
    "administration": "VO/IM/IV/intraarticular según formulación. Nunca administrar suspensión depot por vía IV.",
    "preparation": "Confirmar sal, concentración, vía y compatibilidad. Suspensiones deben homogeneizarse según ficha.",
    "infusionProtocol": "Solo formulaciones IV autorizadas; velocidad y dilución dependen de producto/indicación.",
    "pregnancy": "Uso antenatal solo en escenario/edad gestacional indicados; exposición prolongada requiere evaluación materno-fetal.",
    "lactation": "Pasa a leche; dosis altas/prolongadas pueden afectar lactante o producción. Individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Infección, psicosis, sangrado GI, osteonecrosis, glaucoma, miopatía y crisis suprarrenal tras retirada brusca. Toda dose/preparo bloqueados sem indicação, sal, concentração, via, duração e comorbidades; formulações não intercambiáveis.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=betamethasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/08/antenatal-corticosteroid-therapy-for-fetal-maturation"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=betamethasone"
  }
};})();
/* GOLD33_SELECTIVE:betametasona:END */
/* GOLD33_SELECTIVE:deflazacorte:START */
;(function(){var db=window.IMUNO_CORTICOIDE_DRUGS_DB;var drug=Array.isArray(db)?db.find(function(item){return item&&item.id==="deflazacorte";}):db&&db["deflazacorte"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:deflazacorte");drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "023",
    "requiredFieldCount": 33,
    "approvedSha256": "ddd43232bffb6d2fdf6447f4d98a9bfbf2223ee2bd963eb5420620e5362f6de6",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Deflazacorte",
    "class": "Corticosteroide sistêmico",
    "pharmacologicClass": "Agonista do receptor glicocorticoide",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 6/18/30/36 mg e suspensão 22,75 mg/mL.",
    "presentations": "Comprimidos 6/18/30/36 mg e suspensão 22,75 mg/mL.",
    "mechanism": "Agonista do receptor glicocorticoide. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco convertido em 21-desacetil-deflazacorte; metabolismo CYP3A4.",
    "indications": "Distrofia muscular de Duchenne em pacientes ≥2 anos no rótulo EUA.",
    "dose": "0,9 mg/kg VO 1x/dia; arredondar conforme apresentação. Não interromper abruptamente após uso prolongado.",
    "pediatricDose": "≥2 anos: 0,9 mg/kg/dia. AUTOMATABLE=NO sem peso, formulação e plano de arredondamento.",
    "renalDose": "Sem ajuste específico; cautela com efeitos metabólicos.",
    "hepaticDose": "Cautela; exposição pode aumentar.",
    "commonAdverseEffects": "Ganho de peso, Cushing, acne, irritabilidade, aumento de apetite.",
    "dangerousAdverseEffects": "Crise adrenal, infecção grave, osteonecrose, catarata/glaucoma e perfuração GI.",
    "adverseEffects": "Ganho de peso, Cushing, acne, irritabilidade, aumento de apetite. Graves: Crise adrenal, infecção grave, osteonecrose, catarata/glaucoma e perfuração GI.",
    "contraindications": "Hipersensibilidade; vacinas vivas em doses imunossupressoras.",
    "interactions": "CYP3A4 fortes exigem ajuste; AINE, anticoagulantes, diuréticos, antidiabéticos e vacinas.",
    "monitoring": "Crescimento, peso, PA, glicemia, osso, olhos, infecção e eixo adrenal.",
    "administration": "VO com ou sem alimento; evitar grapefruit. Agitar suspensão.",
    "preparation": "Medir suspensão; não misturar com suco de grapefruit.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Risco fetal de classe; usar se benefício justificar.",
    "lactation": "Pode passar ao leite; monitorar lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Crise adrenal, infecção grave, osteonecrose, catarata/glaucoma e perfuração GI. Dose bloqueada sem diagnóstico, idade/peso, formulação, CYP3A4, vacinação, infecção e plano de desmame/monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=deflazacort",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=deflazacort"
  },
  "es": {
    "name": "Deflazacort",
    "class": "Corticosteroide sistémico",
    "pharmacologicClass": "Agonista del receptor glucocorticoide",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 6/18/30/36 mg y suspensión 22,75 mg/mL.",
    "presentations": "Comprimidos 6/18/30/36 mg y suspensión 22,75 mg/mL.",
    "mechanism": "Agonista del receptor glucocorticoide. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco convertido en 21-desacetil-deflazacort; metabolismo CYP3A4.",
    "indications": "Distrofia muscular de Duchenne en pacientes ≥2 años en ficha EE.UU.",
    "dose": "0,9 mg/kg VO 1 vez/día; redondear según presentación. No suspender bruscamente tras uso prolongado.",
    "pediatricDose": "≥2 años: 0,9 mg/kg/día. AUTOMATABLE=NO sin peso, formulación y plan de redondeo.",
    "renalDose": "Sin ajuste específico; precaución con efectos metabólicos.",
    "hepaticDose": "Precaución; puede aumentar exposición.",
    "commonAdverseEffects": "Aumento de peso, Cushing, acné, irritabilidad, aumento de apetito.",
    "dangerousAdverseEffects": "Crisis suprarrenal, infección grave, osteonecrosis, catarata/glaucoma y perforación GI.",
    "adverseEffects": "Aumento de peso, Cushing, acné, irritabilidad, aumento de apetito. Graves: Crisis suprarrenal, infección grave, osteonecrosis, catarata/glaucoma y perforación GI.",
    "contraindications": "Hipersensibilidad; vacunas vivas con dosis inmunosupresoras.",
    "interactions": "CYP3A4 fuertes requieren ajuste; AINE, anticoagulantes, diuréticos, antidiabéticos y vacunas.",
    "monitoring": "Crecimiento, peso, PA, glucemia, hueso, ojos, infección y eje suprarrenal.",
    "administration": "VO con o sin comida; evitar pomelo. Agitar suspensión.",
    "preparation": "Medir suspensión; no mezclar con jugo de pomelo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Riesgo fetal de clase; usar si beneficio justifica.",
    "lactation": "Puede pasar a leche; controlar lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Crisis suprarrenal, infección grave, osteonecrosis, catarata/glaucoma y perforación GI. Dose bloqueada sem diagnóstico, idade/peso, formulação, CYP3A4, vacinação, infecção e plano de desmame/monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=deflazacort",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=deflazacort"
  }
};})();
/* GOLD33_SELECTIVE:deflazacorte:END */
/* GOLD33_SELECTIVE:dexametasona:START */
;(function(){var db=window.IMUNO_CORTICOIDE_DRUGS_DB;var drug=Array.isArray(db)?db.find(function(item){return item&&item.id==="dexametasona";}):db&&db["dexametasona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:dexametasona");drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "024",
    "requiredFieldCount": 33,
    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Dexametasona",
    "class": "Corticosteroide sistêmico",
    "pharmacologicClass": "Agonista glicocorticoide potente",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos, solução oral e formas IV/IM em várias concentrações.",
    "presentations": "Comprimidos, solução oral e formas IV/IM em várias concentrações.",
    "mechanism": "Agonista glicocorticoide potente. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Longa duração biológica, metabolismo hepático e excreção renal de metabólitos.",
    "indications": "Condições inflamatórias, alérgicas, autoimunes, edema cerebral, oncologia e outras indicações específicas.",
    "dose": "Dose sistêmica altamente dependente da indicação; faixa oral usual 0,75–9 mg/dia. Edema cerebral pode usar 10 mg IV inicial e 4 mg a cada 6 h em protocolo específico.",
    "pediatricDose": "Croup: 0,15–0,6 mg/kg em dose única (máx. usual 10 mg) em protocolos; demais indicações variam. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste rotineiro, mas retenção, glicemia e infecção exigem monitorização.",
    "hepaticDose": "Sem tabela fixa; cautela em hepatopatia.",
    "commonAdverseEffects": "Hiperglicemia, insônia, dispepsia, alterações de humor e retenção.",
    "dangerousAdverseEffects": "Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.",
    "adverseEffects": "Hiperglicemia, insônia, dispepsia, alterações de humor e retenção. Graves: Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.",
    "contraindications": "Infecção fúngica sistêmica; vacina viva em dose imunossupressora; hipersensibilidade.",
    "interactions": "CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos e vacinas.",
    "monitoring": "Glicemia, PA, eletrólitos, infecção, humor, olho, osso e eixo adrenal.",
    "administration": "VO com alimento; IV/IM conforme produto; desmamar após uso prolongado.",
    "preparation": "Concentração/diluente e compatibilidade dependem do sal/produto.",
    "infusionProtocol": "Taxa IV conforme produto e indicação; evitar administração rápida indevida.",
    "pregnancy": "Usar menor dose eficaz; risco fetal/neonatal depende de exposição.",
    "lactation": "Passa ao leite; altas doses podem reduzir produção.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone"
  },
  "es": {
    "name": "Dexametasona",
    "class": "Corticosteroide sistémico",
    "pharmacologicClass": "Agonista glucocorticoide potente",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos, solución oral y formas IV/IM en varias concentraciones.",
    "presentations": "Comprimidos, solución oral y formas IV/IM en varias concentraciones.",
    "mechanism": "Agonista glucocorticoide potente. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Larga duración biológica, metabolismo hepático y excreción renal de metabolitos.",
    "indications": "Enfermedades inflamatorias, alérgicas, autoinmunes, edema cerebral, oncología y otras indicaciones específicas.",
    "dose": "Dosis sistémica depende mucho de indicación; rango oral habitual 0,75–9 mg/día. Edema cerebral puede usar 10 mg IV inicial y 4 mg cada 6 h en protocolo específico.",
    "pediatricDose": "Crup: 0,15–0,6 mg/kg dosis única (máx. habitual 10 mg) en protocolos; otras indicaciones varían. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste rutinario, pero retención, glucemia e infección requieren control.",
    "hepaticDose": "Sin tabla fija; precaución en hepatopatía.",
    "commonAdverseEffects": "Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención.",
    "dangerousAdverseEffects": "Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.",
    "adverseEffects": "Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención. Graves: Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.",
    "contraindications": "Infección fúngica sistémica; vacuna viva con dosis inmunosupresora; hipersensibilidad.",
    "interactions": "CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos y vacunas.",
    "monitoring": "Glucemia, PA, electrolitos, infección, ánimo, ojo, hueso y eje suprarrenal.",
    "administration": "VO con comida; IV/IM según producto; retirar gradualmente tras uso prolongado.",
    "preparation": "Concentración/diluyente y compatibilidad dependen de sal/producto.",
    "infusionProtocol": "Velocidad IV según producto e indicación; evitar administración rápida indebida.",
    "pregnancy": "Usar mínima dosis eficaz; riesgo fetal/neonatal depende de exposición.",
    "lactation": "Pasa a leche; dosis altas pueden reducir producción.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone"
  }
};})();
/* GOLD33_SELECTIVE:dexametasona:END */
/* GOLD33_SELECTIVE:hidrocortisona:START */
;(function(){var db=window.IMUNO_CORTICOIDE_DRUGS_DB;if(!db||!db["hidrocortisona"])throw new Error("GOLD33_MISSING_CANONICAL:hidrocortisona");db["hidrocortisona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "040",
    "requiredFieldCount": 33,
    "approvedSha256": "461b5b71a16a2584ab55b1880ab4907b74bc2aba957e3419c18eab849cdac855",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Hidrocortisona sistêmica",
    "class": "Corticosteroide",
    "pharmacologicClass": "Agonista do receptor glicocorticoide com atividade mineralocorticoide",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 5-20 mg; pó injetável 100 mg e outras forças.",
    "presentations": "Comprimidos 5-20 mg; pó injetável 100 mg e outras forças.",
    "mechanism": "Agonista do receptor glicocorticoide com atividade mineralocorticoide. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Meia-vida plasmática curta, efeito biológico 8-12 h; metabolismo hepático.",
    "indications": "Reposição na insuficiência adrenal e tratamento anti-inflamatório/imunossupressor; emergência conforme formulação IV.",
    "dose": "Crise adrenal: 100 mg IV imediato, depois 200 mg/24 h ou 50 mg a cada 6 h, com fluidos. Outras indicações exigem regime específico.",
    "pediatricDose": "Crise adrenal: 50-100 mg/m² IV inicial conforme idade/protocolo; especialista. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste fixo; monitorar retenção e eletrólitos.",
    "hepaticDose": "Cautela; exposição pode aumentar.",
    "commonAdverseEffects": "Hiperglicemia, retenção, dispepsia, insônia e alteração de humor.",
    "dangerousAdverseEffects": "Infecção grave, sangramento GI, psicose, crise adrenal na retirada e osteonecrose.",
    "adverseEffects": "Hiperglicemia, retenção, dispepsia, insônia e alteração de humor. Graves: Infecção grave, sangramento GI, psicose, crise adrenal na retirada e osteonecrose.",
    "contraindications": "Hipersensibilidade; infecção fúngica sistêmica para uso imunossupressor.",
    "interactions": "CYP3A4, vacinas vivas, AINE, anticoagulantes, diuréticos e antidiabéticos.",
    "monitoring": "PA, glicose, eletrólitos, infecção, peso, osso/olhos e eixo adrenal.",
    "administration": "VO com alimento; IV/IM apenas formulação apropriada; não suspender cronicamente de forma abrupta.",
    "preparation": "Reconstituir injetável conforme fabricante.",
    "infusionProtocol": "IV lenta ou infusão conforme emergência e produto.",
    "pregnancy": "Pode ser usada quando indicada; monitorar exposição prolongada.",
    "lactation": "Compatível em doses usuais; observar lactente em doses altas.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "HOMOLOGADO CLINICAMENTE por Dr Guilherme em 19-09-2026, aprovação integral sem exceções. Integração técnica liberada com preservação obrigatória das restrições granulares.",
    "alerts": "Infecção grave, sangramento GI, psicose, crise adrenal na retirada e osteonecrose. Regime bloqueado sem indicação, formulação, idade/SC/peso, gravidade, infecção, glicemia, eletrólitos e plano de desmame.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=hydrocortisone+sodium+succinate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=hydrocortisone+sodium+succinate"
  },
  "es": {
    "name": "Hidrocortisona sistémica",
    "class": "Corticoide",
    "pharmacologicClass": "Agonista del receptor glucocorticoide con actividad mineralocorticoide",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 5-20 mg; polvo inyectable 100 mg y otras dosis.",
    "presentations": "Comprimidos 5-20 mg; polvo inyectable 100 mg y otras dosis.",
    "mechanism": "Agonista del receptor glucocorticoide con actividad mineralocorticoide. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Semivida plasmática corta, efecto biológico 8-12 h; metabolismo hepático.",
    "indications": "Reposición en insuficiencia suprarrenal y tratamiento antiinflamatorio/inmunosupresor; emergencia según formulación IV.",
    "dose": "Crisis suprarrenal: 100 mg IV inmediata, luego 200 mg/24 h o 50 mg cada 6 h, con fluidos. Otras indicaciones requieren pauta específica.",
    "pediatricDose": "Crisis suprarrenal: 50-100 mg/m² IV inicial según edad/protocolo; especialista. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste fijo; vigilar retención y electrolitos.",
    "hepaticDose": "Precaución; exposición puede aumentar.",
    "commonAdverseEffects": "Hiperglucemia, retención, dispepsia, insomnio y cambio de ánimo.",
    "dangerousAdverseEffects": "Infección grave, sangrado GI, psicosis, crisis suprarrenal por retirada y osteonecrosis.",
    "adverseEffects": "Hiperglucemia, retención, dispepsia, insomnio y cambio de ánimo. Graves: Infección grave, sangrado GI, psicosis, crisis suprarrenal por retirada y osteonecrosis.",
    "contraindications": "Hipersensibilidad; infección fúngica sistémica para uso inmunosupresor.",
    "interactions": "CYP3A4, vacunas vivas, AINE, anticoagulantes, diuréticos y antidiabéticos.",
    "monitoring": "PA, glucosa, electrolitos, infección, peso, hueso/ojos y eje suprarrenal.",
    "administration": "VO con alimento; IV/IM solo formulación apropiada; no suspender crónicamente de forma brusca.",
    "preparation": "Reconstituir inyectable según fabricante.",
    "infusionProtocol": "IV lenta o infusión según emergencia y producto.",
    "pregnancy": "Puede usarse cuando está indicada; vigilar exposición prolongada.",
    "lactation": "Compatible en dosis habituales; observar lactante con dosis altas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "HOMOLOGADO CLÍNICAMENTE por Dr Guilherme el 19-09-2026, aprobación integral sin excepciones. Integración técnica habilitada con preservación obligatoria de las restricciones granulares.",
    "alerts": "Infección grave, sangrado GI, psicosis, crisis suprarrenal por retirada y osteonecrosis. Regime bloqueado sem indicação, formulação, idade/SC/peso, gravidade, infecção, glicemia, eletrólitos e plano de desmame.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=hydrocortisone+sodium+succinate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=hydrocortisone+sodium+succinate"
  }
};})();
/* GOLD33_SELECTIVE:hidrocortisona:END */
/* GOLD33_SELECTIVE:metilprednisolona:START */
;(function(){var db=window.IMUNO_CORTICOIDE_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="metilprednisolona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:metilprednisolona:"+matches.length);drug=matches[0];}else{drug=db&&db["metilprednisolona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:metilprednisolona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "050",
    "requiredFieldCount": 33,
    "approvedSha256": "05f711b06c165ab09da3326a0a672735b3efd2c46bd3e881bcfe3ec6606ae4a0",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Metilprednisolona",
    "class": "Corticosteroide glicocorticoide",
    "pharmacologicClass": "Corticosteroide glicocorticoide",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos; succinato sódico IV/IM; acetato depot IM/intra-articular, com forças diversas.",
    "presentations": "Comprimidos; succinato sódico IV/IM; acetato depot IM/intra-articular, com forças diversas.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Doenças inflamatórias, alérgicas, autoimunes e outras indicações conforme via e protocolo.",
    "dose": "Dose varia amplamente por indicação, gravidade, via e duração. Pulsoterapia IV, doses orais e formulações depot não são intercambiáveis; automação global bloqueada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Hiperglicemia, insônia, dispepsia, alteração de humor e retenção hídrica.",
    "dangerousAdverseEffects": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose e reações anafiláticas.",
    "adverseEffects": "Hiperglicemia, insônia, dispepsia, alteração de humor e retenção hídrica.; Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose e reações anafiláticas.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose e reações anafiláticas.",
    "alerts": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose e reações anafiláticas.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methylprednisolone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/011856s110lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methylprednisolone"
  },
  "es": {
    "name": "Metilprednisolona",
    "class": "Corticosteroide glicocorticoide",
    "pharmacologicClass": "Corticosteroide glicocorticoide",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos; succinato sódico IV/IM; acetato depot IM/intra-articular, con forças diversas.",
    "presentations": "Comprimidos; succinato sódico IV/IM; acetato depot IM/intra-articular, con forças diversas.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Doenças inflamatórias, alérgicas, autoimunes y outras indicações conforme via y protocolo.",
    "dose": "Dose varia amplamente por indicação, gravidade, via y duração. Pulsoterapia IV, dosiss orais y formulações depot no são intercambiáveis; automação global bloqueada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Hiperglicemia, insônia, dispepsia, alteração de humor y retenção hídrica.",
    "dangerousAdverseEffects": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose y reações anafiláticas.",
    "adverseEffects": "Hiperglicemia, insônia, dispepsia, alteração de humor y retenção hídrica.; Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose y reações anafiláticas.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose y reações anafiláticas.",
    "alerts": "Infecção grave, supressão adrenal, psicose, sangramento GI, osteonecrose y reações anafiláticas.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methylprednisolone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/011856s110lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methylprednisolone"
  }
};})();
/* GOLD33_SELECTIVE:metilprednisolona:END */
