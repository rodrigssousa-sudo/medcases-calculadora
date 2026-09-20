/* ============================================================
   MedCases Pro — Módulo: GASTROINTESTINAL & HEPATOLOGIA
   Expõe: window.GASTRO_DRUGS_DB
   Schema: array [] — compatível com _injectArrayDB() do index.html
   BUILD 278 — Lote 1: Octreotide · Terlipressina · Lactulose · Omeprazol IV
   ─────────────────────────────────────────────────────────────
   Fármacos das grandes emergências hemorrágicas e cirrose:
     1. Octreotide    — análogo somatostatina · HDA varicosa
     2. Terlipressina — análogo vasopressina  · HDA + SHR tipo 1
     3. Lactulose     — laxante osmótico      · encefalopatia hepática
     4. Omeprazol IV  — IBP                   · HDA não varicosa / úlcera péptica
============================================================ */

window.GASTRO_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. OCTREOTIDE
     Análogo Sintético da Somatostatina — HDA Varicosa · NET · Acromegalia
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'octreotide',
    name:     { pt: 'Octreotide', es: 'Octreotida' },
    category: 'gastro',
    class:    { pt: 'Análogo Sintético da Somatostatina', es: 'Análogo Sintético de la Somatostatina' },
    icon: '🩸',
    color:    'rgba(239,68,68,0.13)',
    colorTxt: '#DC2626',

    indications: {
      pt: [
        'Hemorragia Digestiva Alta (HDA) varicosa (rompimento de varizes esofágicas)',
        'Tumores neuroendócrinos (carcinoide, VIPoma)',
        'Acromegalia'
      ],
      es: [
        'Hemorragia Digestiva Alta (HDA) varicosa (rotura de várices esofágicas)',
        'Tumores neuroendocrinos (carcinoide, VIPoma)',
        'Acromegalia'
      ]
    },

    commercialNames: { br: ['Sandostatin'], ar: ['Sandostatin'] },

    presentation: {
      pt: ['Ampolas IV/SC 0,05 mg/mL, 0,1 mg/mL, 0,5 mg/mL', 'Suspensão injetável LAR (ação prolongada) 10 mg, 20 mg, 30 mg'],
      es: ['Ampollas IV/SC 0,05 mg/mL, 0,1 mg/mL, 0,5 mg/mL', 'Suspensión inyectable LAR (acción prolongada) 10 mg, 20 mg, 30 mg']
    },

    mechanism: {
      pt: 'Mimetiza a somatostatina endógena, mas com meia-vida mais longa. No contexto da HDA varicosa, inibe a liberação de peptídeos vasodilatadores (como o glucagon), causando vasoconstrição esplâncnica seletiva. Isso reduz drasticamente o fluxo sanguíneo portal e a pressão nas varizes esofágicas, facilitando a hemostasia.',
      es: 'Mimetiza la somatostatina endógena, pero con vida media más larga. En el contexto de HDA varicosa, inhibe la liberación de péptidos vasodilatadores (como el glucagón), causando vasoconstricción esplácnica selectiva. Esto reduce drásticamente el flujo sanguíneo portal y la presión en las várices esofágicas, facilitando la hemostasia.'
    },

    dose: {
      adult: {
        pt: 'HDA Varicosa: Bolus IV de 50 mcg, seguido de infusão contínua de 50 mcg/h por 2 a 5 dias.',
        es: 'HDA Varicosa: Bolo IV de 50 mcg, seguido de infusión continua de 50 mcg/h por 2 a 5 días.'
      },
      pediatric: {
        pt: 'HDA Varicosa: Bolus IV de 1 a 2 mcg/kg, seguido de infusão de 1 a 2 mcg/kg/h.',
        es: 'HDA Varicosa: Bolo IV de 1 a 2 mcg/kg, seguido de infusión de 1 a 2 mcg/kg/h.'
      }
    },

    administration: {
      pt: ['Infusão contínua em bomba infusora é mandatória na HDA.', 'Soluções diluídas em SF 0,9% são estáveis por 24h.'],
      es: ['La infusión continua en bomba de infusión es obligatoria en HDA.', 'Soluciones diluidas en SF 0,9% son estables por 24h.']
    },

    renalAdjustment: {
      required: true,
      message: {
        pt: 'Pacientes em diálise podem requerer redução de dose (meia-vida prolongada).',
        es: 'Pacientes en diálisis pueden requerir reducción de dosis (vida media prolongada).'
      }
    },

    hepaticAdjustment: {
      required: true,
      message: {
        pt: 'Em cirróticos graves (Child-Pugh C), a meia-vida é estendida; monitorar para evitar toxicidade excessiva, embora a dose padrão de HDA seja geralmente mantida pela gravidade.',
        es: 'En cirróticos graves (Child-Pugh C), la vida media se extiende; monitorizar para evitar toxicidad excesiva, aunque la dosis estándar de HDA se mantiene generalmente por la gravedad.'
      }
    },

    commonAdverseEffects: {
      pt: ['Bradicardia sinusal', 'Hiperglicemia ou hipoglicemia', 'Dor abdominal e diarreia'],
      es: ['Bradicardia sinusal', 'Hiperglucemia o hipoglucemia', 'Dolor abdominal y diarrea']
    },

    dangerousAdverseEffects: {
      pt: ['Colelitíase / Colecistite aguda (em uso crônico)', 'Arritmias cardíacas severas (bloqueio AV)', 'Íleo paralítico'],
      es: ['Colelitiasis / Colecistitis aguda (en uso crónico)', 'Arritmias cardíacas severas (bloqueo AV)', 'Íleo paralítico']
    },

    contraindications: {
      absolute: {
        pt: ['Hipersensibilidade à droga'],
        es: ['Hipersensibilidad a la droga']
      },
      relative: {
        pt: ['Bradicardia grave pré-existente sem marcapasso', 'Colelitíase sintomática não tratada (para uso crônico)'],
        es: ['Bradicardia grave preexistente sin marcapasos', 'Colelitiasis sintomática no tratada (para uso crónico)']
      }
    },

    safetyFlags: {
      bleedingRisk: false,
      renalHighRisk: false,
      hepaticCaution: true,
      antidoteAvailable: false,
      highAlertMedication: true,
      warning: {
        pt: 'Altera o metabolismo da glicose (inibe secreção de insulina e glucagon). Monitoramento intensivo de glicemia capilar é obrigatório na UTI. Requer ECG basal (risco de bradicardia/prolongamento QT).',
        es: 'Altera el metabolismo de la glucosa (inhibe secreción de insulina y glucagón). La monitorización intensiva de glucemia capilar es obligatoria en la UCI. Requiere ECG basal (riesgo de bradicardia/prolongación QT).'
      }
    },

    ref: 'Garcia-Tsao G et al. Hepatology 2017 · AASLD Practice Guidelines · Tripathi D et al. Gut 2015 · Goodman & Gilman 14ª ed. · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     2. TERLIPRESSINA
     Análogo Sintético da Vasopressina — HDA Varicosa · Síndrome Hepatorrenal
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'terlipressina',
    name:     { pt: 'Terlipressina', es: 'Terlipresina' },
    category: 'gastro',
    class:    { pt: 'Análogo Sintético da Vasopressina', es: 'Análogo Sintético de la Vasopresina' },
    icon: '🫀',
    color:    'rgba(239,68,68,0.16)',
    colorTxt: '#B91C1C',

    indications: {
      pt: [
        'Síndrome Hepatorrenal tipo 1 (em associação com albumina)',
        'Hemorragia Digestiva Alta varicosa aguda (sangramento de varizes esofágicas)'
      ],
      es: [
        'Síndrome Hepatorrenal tipo 1 (en asociación con albúmina)',
        'Hemorragia Digestiva Alta varicosa aguda (sangrado de várices esofágicas)'
      ]
    },

    commercialNames: { br: ['Glypressin'], ar: ['Glypressin'] },

    presentation: {
      pt: ['Frasco-ampola liofilizado 1 mg'],
      es: ['Vial liofilizado 1 mg']
    },

    mechanism: {
      pt: 'Pró-fármaco convertido lentamente em lisina-vasopressina. Atua nos receptores V1 da musculatura lisa vascular, promovendo intensa vasoconstrição esplâncnica. Isso reduz o fluxo portal (controlando a HDA) e redistribui o volume sanguíneo para a circulação sistêmica, melhorando a perfusão arterial renal na Síndrome Hepatorrenal.',
      es: 'Profármaco convertido lentamente en lisina-vasopresina. Actúa en los receptores V1 de la musculatura lisa vascular, promoviendo intensa vasoconstricción esplácnica. Esto reduce el flujo portal (controlando la HDA) y redistribuye el volumen sanguíneo hacia la circulación sistémica, mejorando la perfusión arterial renal en el Síndrome Hepatorrenal.'
    },

    dose: {
      adult: {
        pt: 'HDA: 2 mg IV em bolus, seguido de 1 a 2 mg IV a cada 4 horas. Síndrome Hepatorrenal: 1 mg IV a cada 4-6h (podendo chegar a 2 mg a cada 4h se não houver queda da creatinina).',
        es: 'HDA: 2 mg IV en bolo, seguido de 1 a 2 mg IV cada 4 horas. Síndrome Hepatorrenal: 1 mg IV cada 4-6h (pudiendo llegar a 2 mg cada 4h si no hay caída de creatinina).'
      },
      pediatric: {
        pt: 'Uso pediátrico off-label em emergências (geralmente 20 mcg/kg a cada 4h).',
        es: 'Uso pediátrico off-label en emergencias (generalmente 20 mcg/kg cada 4h).'
      }
    },

    administration: {
      pt: ['Bolus IV lento (ao longo de 1 minuto).', 'Uso contínuo máximo geralmente limitado a 5-14 dias dependendo da indicação.'],
      es: ['Bolo IV lento (a lo largo de 1 minuto).', 'Uso continuo máximo generalmente limitado a 5-14 días dependiendo de la indicación.']
    },

    renalAdjustment: {
      required: false,
      message: {
        pt: 'Usado primariamente para tratar disfunção renal (Síndrome Hepatorrenal). Sem ajuste necessário.',
        es: 'Usado primariamente para tratar disfunción renal (Síndrome Hepatorrenal). Sin ajuste necesario.'
      }
    },

    hepaticAdjustment: {
      required: false,
      message: {
        pt: 'Sem necessidade de ajuste (fármaco de escolha para cirróticos graves).',
        es: 'Sin necesidad de ajuste (fármaco de elección para cirróticos graves).'
      }
    },

    commonAdverseEffects: {
      pt: ['Cólicas abdominais / Náuseas (efeito isquêmico intestinal leve)', 'Palidez cutânea extrema', 'Cefaleia', 'Bradicardia'],
      es: ['Cólicos abdominales / Náuseas (efecto isquémico intestinal leve)', 'Palidez cutánea extrema', 'Cefalea', 'Bradicardia']
    },

    dangerousAdverseEffects: {
      pt: ['Isquemia miocárdica (Infarto)', 'Isquemia mesentérica / necrose intestinal', 'Isquemia periférica (necrose de extremidades)', 'Sobrecarga hídrica / Edema Agudo de Pulmão'],
      es: ['Isquemia miocárdica (Infarto)', 'Isquemia mesentérica / necrosis intestinal', 'Isquemia periférica (necrosis de extremidades)', 'Sobrecarga hídrica / Edema Agudo de Pulmón']
    },

    contraindications: {
      absolute: {
        pt: ['Choque séptico associado com baixo débito cardíaco', 'Gravidez'],
        es: ['Choque séptico asociado con bajo gasto cardíaco', 'Embarazo']
      },
      relative: {
        pt: ['Doença isquêmica coronariana crônica', 'Doença arterial periférica severa'],
        es: ['Enfermedad isquémica coronaria crónica', 'Enfermedad arterial periférica severa']
      }
    },

    safetyFlags: {
      bleedingRisk: false,
      renalHighRisk: false,
      hepaticCaution: false,
      antidoteAvailable: false,
      highAlertMedication: true,
      warning: {
        pt: 'RISCO ISQUÊMICO SEVERO. A vasoconstrição não é 100% seletiva. Avaliar ativamente sinais de isquemia miocárdica (ECG diário) e cianose/necrose de dedos das mãos e pés.',
        es: 'RIESGO ISQUÉMICO SEVERO. La vasoconstricción no es 100% selectiva. Evaluar activamente signos de isquemia miocárdica (ECG diario) y cianosis/necrosis de dedos de manos y pies.'
      }
    },

    ref: 'Runyon BA — AASLD HRS Guidelines 2021 · Salerno F et al. Gut 2007 · Martín-Llahí M NEJM 2008 · Goodman & Gilman 14ª ed. · EMA/SmPC Glypressin'
  },

  /* ══════════════════════════════════════════════════════════════
     3. LACTULOSE
     Laxante Osmótico / Redutor de Amônia — Encefalopatia Hepática
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'lactulose',
    name:     { pt: 'Lactulose', es: 'Lactulosa' },
    category: 'gastro',
    class:    { pt: 'Laxante Osmótico / Redutor de Amônia', es: 'Laxante Osmótico / Reductor de Amoníaco' },
    icon: '🧪',
    color:    'rgba(251,191,36,0.13)',
    colorTxt: '#B45309',

    indications: {
      pt: ['Encefalopatia Hepática (tratamento e prevenção)', 'Constipação crônica'],
      es: ['Encefalopatía Hepática (tratamiento y prevención)', 'Constipación crónica']
    },

    commercialNames: { br: ['Farlac', 'Lactulona', 'Pentalac'], ar: ['Lactulón'] },

    presentation: {
      pt: ['Xarope 667 mg/mL (Frascos de 120 mL a 500 mL)'],
      es: ['Jarabe 667 mg/mL (Frascos de 120 mL a 500 mL)']
    },

    mechanism: {
      pt: 'Dissacarídeo sintético não absorvível. No cólon, é degradado por bactérias em ácido lático e acético, acidificando o pH luminal. Esse ambiente ácido converte a amônia (NH3) livre e tóxica no íon amônio (NH4+), que não consegue cruzar a parede intestinal para o sangue e é excretado nas fezes. Além disso, tem efeito laxante osmótico, expulsando a amônia fecal.',
      es: 'Disacárido sintético no absorbible. En el colon, es degradado por bacterias en ácido láctico y acético, acidificando el pH luminal. Este ambiente ácido convierte el amoníaco (NH3) libre y tóxico en ión amonio (NH4+), que no puede cruzar la pared intestinal hacia la sangre y es excretado en las heces. Además, tiene efecto laxante osmótico, expulsando el amoníaco fecal.'
    },

    dose: {
      adult: {
        pt: 'Encefalopatia Hepática: 15 a 30 mL VO a cada 6-8 horas. Titular a dose para garantir de 2 a 3 evacuações pastosas ao dia. Em coma hepático, pode ser feito por enema (300 mL em 700 mL de água retido por 30-60 min).',
        es: 'Encefalopatía Hepática: 15 a 30 mL VO cada 6-8 horas. Titular la dosis para garantizar de 2 a 3 evacuaciones pastosas al día. En coma hepático, se puede administrar por enema (300 mL en 700 mL de agua retenido por 30-60 min).'
      },
      pediatric: {
        pt: 'Constipação: 1 a 3 mL/kg/dia divididos em 1 ou 2 doses.',
        es: 'Constipación: 1 a 3 mL/kg/día divididos en 1 o 2 dosis.'
      }
    },

    administration: {
      pt: ['Via oral pura ou misturada em sucos/água.', 'Não deve ser administrada concomitantemente com antiácidos.'],
      es: ['Vía oral pura o mezclada en jugos/agua.', 'No debe administrarse concomitantemente con antiácidos.']
    },

    renalAdjustment: {
      required: false,
      message: {
        pt: 'Ação unicamente local no TGI, absorção sistêmica quase nula.',
        es: 'Acción únicamente local en el TGI, absorción sistémica casi nula.'
      }
    },

    hepaticAdjustment: {
      required: false,
      message: {
        pt: 'Fármaco de escolha na insuficiência hepática severa. Sem necessidade de ajuste.',
        es: 'Fármaco de elección en insuficiencia hepática severa. Sin necesidad de ajuste.'
      }
    },

    commonAdverseEffects: {
      pt: ['Meteorismo / Flatulência severa (especialmente no início)', 'Cólicas abdominais', 'Diarreia (se dose excessiva)'],
      es: ['Meteorismo / Flatulencia severa (especialmente al inicio)', 'Cólicos abdominales', 'Diarrea (si dosis excesiva)']
    },

    dangerousAdverseEffects: {
      pt: ['Desidratação grave e Hipernatremia (pela perda hídrica fecal excessiva)', 'Hipocalemia (que paradoxalmente agrava a encefalopatia hepática)'],
      es: ['Deshidratación grave e Hipernatremia (por pérdida hídrica fecal excesiva)', 'Hipopotasemia (que paradójicamente agrava la encefalopatía hepática)']
    },

    contraindications: {
      absolute: {
        pt: ['Galactosemia', 'Obstrução gastrointestinal'],
        es: ['Galactosemia', 'Obstrucción gastrointestinal']
      },
      relative: {
        pt: ['Intolerância grave à lactose'],
        es: ['Intolerancia grave a la lactosa']
      }
    },

    safetyFlags: {
      bleedingRisk: false,
      renalHighRisk: false,
      hepaticCaution: false,
      antidoteAvailable: false,
      highAlertMedication: false,
      warning: {
        pt: 'CUIDADO: Dose excessiva gerando diarreia aquosa profusa causa hipocalemia. A hipocalemia aumenta a produção renal de amônia, agravando o coma hepático que o fármaco pretendia tratar.',
        es: 'CUIDADO: Dosis excesiva generando diarrea acuosa profusa causa hipopotasemia. La hipopotasemia aumenta la producción renal de amoníaco, agravando el coma hepático que el fármaco pretendía tratar.'
      }
    },

    ref: 'EASL Clinical Practice Guidelines on HE 2022 · Vilstrup H et al. Hepatology 2014 · Sharma BC et al. Hepatology 2013 · Goodman & Gilman 14ª ed.'
  },

  /* ══════════════════════════════════════════════════════════════
     4. OMEPRAZOL IV
     Inibidor da Bomba de Prótons — HDA Não Varicosa · Profilaxia UTI
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'omeprazol_iv',
    name:     { pt: 'Omeprazol IV', es: 'Omeprazol IV' },
    category: 'gastro',
    class:    { pt: 'Inibidor da Bomba de Prótons (IBP)', es: 'Inhibidor de la Bomba de Protones (IBP)' },
    icon: '💊',
    color:    'rgba(16,185,129,0.12)',
    colorTxt: '#065F46',

    indications: {
      pt: [
        'Hemorragia Digestiva Alta (HDA) não varicosa (ex: úlcera péptica sangrante)',
        'Profilaxia de úlcera de estresse em UTI (pacientes intubados ou coagulopatas)',
        'Síndrome de Zollinger-Ellison'
      ],
      es: [
        'Hemorragia Digestiva Alta (HDA) no varicosa (ej: úlcera péptica sangrante)',
        'Profilaxis de úlcera de estrés en UCI (pacientes intubados o coagulópatas)',
        'Síndrome de Zollinger-Ellison'
      ]
    },

    commercialNames: { br: ['Losec IV', 'Omeprazol Sódico'], ar: ['Losec IV', 'Omeprazol'] },

    presentation: {
      pt: ['Frasco-ampola liofilizado 40 mg (com diluente específico)'],
      es: ['Vial liofilizado 40 mg (con diluyente específico)']
    },

    mechanism: {
      pt: 'Pró-fármaco ativado em ambiente ácido. Inibe de forma IRREVERSÍVEL a enzima H+/K+ ATPase (bomba de prótons) na superfície secretora das células parietais gástricas. A infusão IV contínua mantém o pH gástrico > 6,0 de forma sustentada, o que estabiliza o coágulo de fibrina sobre a úlcera sangrante, impedindo sua degradação pela pepsina.',
      es: 'Profármaco activado en ambiente ácido. Inhibe de forma IRREVERSIBLE la enzima H+/K+ ATPase (bomba de protones) en la superficie secretora de las células parietales gástricas. La infusión IV continua mantiene el pH gástrico > 6,0 de forma sostenida, lo que estabiliza el coágulo de fibrina sobre la úlcera sangrante, impidiendo su degradación por la pepsina.'
    },

    dose: {
      adult: {
        pt: 'HDA Úlcera Péptica Sangrante (após EDA com hemostasia): Bolus IV de 80 mg (2 ampolas), seguido imediatamente de infusão contínua de 8 mg/h por 72 horas. Profilaxia UTI: 40 mg IV 1x/dia.',
        es: 'HDA Úlcera Péptica Sangrante (tras EDA con hemostasia): Bolo IV de 80 mg (2 ampollas), seguido inmediatamente de infusión continua de 8 mg/h por 72 horas. Profilaxis UCI: 40 mg IV 1 vez/día.'
      },
      pediatric: {
        pt: 'Uso hospitalar sob demanda (1 a 2 mg/kg/dia IV).',
        es: 'Uso hospitalario bajo demanda (1 a 2 mg/kg/día IV).'
      }
    },

    administration: {
      pt: [
        'O bolus deve ser administrado lentamente (em 5 a 15 minutos).',
        'Para infusão contínua, diluir 80 mg em 100 mL de SF 0,9% e correr a 10 mL/h.',
        'Incompatível com muitos fármacos em Y (pH elevado da solução).'
      ],
      es: [
        'El bolo debe administrarse lentamente (en 5 a 15 minutos).',
        'Para infusión continua, diluir 80 mg en 100 mL de SF 0,9% y pasar a 10 mL/h.',
        'Incompatible con muchos fármacos en Y (pH elevado de la solución).'
      ]
    },

    renalAdjustment: {
      required: false,
      message: {
        pt: 'Sem necessidade de ajuste em insuficiência renal.',
        es: 'Sin necesidad de ajuste en insuficiencia renal.'
      }
    },

    hepaticAdjustment: {
      required: true,
      message: {
        pt: 'Metabolismo extensivo (CYP2C19). Na insuficiência hepática grave, considerar reduzir a dose diária (máx 20 mg/dia após a fase aguda sangrante).',
        es: 'Metabolismo extensivo (CYP2C19). En insuficiencia hepática grave, considerar reducir la dosis diaria (máx 20 mg/día tras la fase aguda sangrante).'
      }
    },

    commonAdverseEffects: {
      pt: ['Cefaleia', 'Diarreia ou Constipação', 'Flebite no local da infusão IV'],
      es: ['Cefalea', 'Diarrea o Constipación', 'Flebitis en el sitio de infusión IV']
    },

    dangerousAdverseEffects: {
      pt: [
        'Aumento do risco de pneumonia associada à ventilação (PAV) em UTI',
        'Aumento do risco de infecção por Clostridium difficile',
        'Hipomagnesemia severa (uso prolongado)'
      ],
      es: [
        'Aumento del riesgo de neumonía asociada a la ventilación (NAV) en UCI',
        'Aumento del riesgo de infección por Clostridium difficile',
        'Hipomagnesemia severa (uso prolongado)'
      ]
    },

    contraindications: {
      absolute: {
        pt: ['Hipersensibilidade conhecida (anafilaxia prévia a IBPs)'],
        es: ['Hipersensibilidad conocida (anafilaxia previa a IBPs)']
      },
      relative: {
        pt: [
          'Uso concomitante de clopidogrel (relativo na emergência, considerar pantoprazol)',
          'Pacientes com risco basal alto de infecções hospitalares (usar apenas se indicação precisa)'
        ],
        es: [
          'Uso concomitante de clopidogrel (relativo en emergencia, considerar pantoprazol)',
          'Pacientes con riesgo basal alto de infecciones hospitalarias (usar solo si indicación precisa)'
        ]
      }
    },

    safetyFlags: {
      bleedingRisk: false,
      renalHighRisk: false,
      hepaticCaution: true,
      antidoteAvailable: false,
      highAlertMedication: false,
      warning: {
        pt: 'O omeprazol IV NÃO substitui a Endoscopia Digestiva Alta (EDA) no tratamento da HDA; ele estabiliza o coágulo APÓS o tratamento endoscópico ou atua como ponte até o procedimento.',
        es: 'El omeprazol IV NO sustituye la Endoscopia Digestiva Alta (EDA) en el tratamiento de HDA; estabiliza el coágulo TRAS el tratamiento endoscópico o actúa como puente hasta el procedimiento.'
      }
    },

    ref: 'Barkun AN et al. Ann Intern Med 2019 · Laine L et al. Gut 2021 · ASGE Standards of Practice 2020 · FDA Prilosec IV label · Lexicomp 2026'
  },

  /* ── BUILD 278 Lote 2 ──────────────────────────────────────────────── */

  {
    id: 'pantoprazol_iv',
    name: { pt: 'Pantoprazol IV', es: 'Pantoprazol IV' },
    category: 'gastro',
    class: { pt: 'Inibidor da Bomba de Prótons (IBP)', es: 'Inhibidor de la Bomba de Protones (IBP)' },
    indications: {
      pt: ['Hemorragia Digestiva Alta (HDA) não varicosa', 'Profilaxia de úlcera de estresse em pacientes críticos', 'Pacientes coronariopatas com sangramento TGI (alternativa ao Omeprazol)'],
      es: ['Hemorragia Digestiva Alta (HDA) no varicosa', 'Profilaxis de úlcera de estrés en pacientes críticos', 'Pacientes coronariópatas con sangrado TGI (alternativa al Omeprazol)']
    },
    commercialNames: { br: ['Pantocal IV', 'Zurcal IV'], ar: ['Pantus IV', 'Zurcal'] },
    presentation: { pt: ['Frasco-ampola liofilizado 40 mg'], es: ['Vial liofilizado 40 mg'] },
    mechanism: {
      pt: 'Pró-fármaco ativado em meio ácido. Liga-se covalentemente à H+/K+ ATPase na célula parietal gástrica. A grande vantagem do pantoprazol sobre o omeprazol é sua menor afinidade pelo citocromo CYP2C19, causando muito menos interações medicamentosas sistêmicas, especialmente com antiagregantes plaquetários.',
      es: 'Profármaco activado en medio ácido. Se une covalentemente a la H+/K+ ATPase en la célula parietal gástrica. La gran ventaja del pantoprazol sobre el omeprazol es su menor afinidad por el citocromo CYP2C19, causando mucho menos interacciones medicamentosas sistémicas, especialmente con antiagregantes plaquetarios.'
    },
    dose: {
      adult: {
        pt: 'HDA Úlcera Péptica Sangrante: Bolus IV de 80 mg (2 ampolas), seguido de infusão contínua de 8 mg/h por 72 horas. Profilaxia UTI: 40 mg IV 1x/dia.',
        es: 'HDA Úlcera Péptica Sangrante: Bolo IV de 80 mg (2 ampollas), seguido de infusión continua de 8 mg/h por 72 horas. Profilaxis UCI: 40 mg IV 1 vez/día.'
      },
      pediatric: {
        pt: 'Uso hospitalar: 1 a 2 mg/kg/dia IV (máx 40 mg).',
        es: 'Uso hospitalario: 1 a 2 mg/kg/día IV (máx 40 mg).'
      }
    },
    administration: {
      pt: ['Bolus IV direto deve ser lento (mínimo 2 minutos).', 'Infusão contínua: diluir 80 mg em 100 mL de SF 0,9%.'],
      es: ['El bolo IV directo debe ser lento (mínimo 2 minutos).', 'Infusión continua: diluir 80 mg en 100 mL de SF 0,9%.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em falência renal.', es: 'Sin necesidad de ajuste en falla renal.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Na insuficiência hepática grave (Child-Pugh C), reduzir dose diária ou usar em dias alternados (ex: 20 mg/dia) após fase aguda de HDA.', es: 'En insuficiencia hepática grave (Child-Pugh C), reducir dosis diaria o usar en días alternos (ej: 20 mg/día) tras fase aguda de HDA.' } },
    commonAdverseEffects: { pt: ['Cefaleia', 'Tromboflebite (via IV)', 'Diarreia'], es: ['Cefalea', 'Tromboflebitis (vía IV)', 'Diarrea'] },
    dangerousAdverseEffects: { pt: ['Pneumonia associada à ventilação mecânica (PAV)', 'Infecção por Clostridium difficile', 'Hipomagnesemia severa'], es: ['Neumonía asociada a la ventilación mecánica (NAV)', 'Infección por Clostridium difficile', 'Hipomagnesemia severa'] },
    contraindications: {
      absolute: { pt: ['Anafilaxia ou hipersensibilidade a derivados benzimidazólicos'], es: ['Anafilaxia o hipersensibilidad a derivados benzimidazólicos'] },
      relative: { pt: ['Risco elevado de infecções hospitalares oportunistas'], es: ['Riesgo elevado de infecciones hospitalarias oportunistas'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'É o IBP DE ESCOLHA em pacientes com síndrome coronariana aguda ou recém-estentados em uso de Clopidogrel, pois não inibe a ativação do antiagregante.', es: 'Es el IBP DE ELECCIÓN en pacientes con síndrome coronario agudo o recién estentados en uso de Clopidogrel, pues no inhibe la activación del antiagregante.' }
    },
    ref: 'Barkun AN et al. Ann Intern Med 2019 · Lanza FL et al. Am J Gastroenterol 2009 · Focks JJ et al. BMJ 2013 · AHA/ACC Focused Update 2016 · Lexicomp 2026'
  },

  {
    id: 'somatostatina',
    name: { pt: 'Somatostatina', es: 'Somatostatina' },
    category: 'gastro',
    class: { pt: 'Hormônio Peptídico / Inibidor de Secreção', es: 'Hormona Peptídica / Inhibidor de Secreción' },
    indications: {
      pt: ['Hemorragia Digestiva Alta varicosa severa', 'Fístulas pancreáticas e intestinais (reduz secreção)', 'Prevenção de complicações pós-CPRE'],
      es: ['Hemorragia Digestiva Alta varicosa severa', 'Fístulas pancreáticas e intestinales (reduce secreción)', 'Prevención de complicaciones pos-CPRE']
    },
    commercialNames: { br: ['Stilamin'], ar: ['Somatostatina'] },
    presentation: { pt: ['Frasco-ampola liofilizado 3 mg'], es: ['Vial liofilizado 3 mg'] },
    mechanism: {
      pt: 'Hormônio endógeno com efeitos inibitórios massivos. Reduz a secreção de ácido gástrico, pepsina, suco pancreático e fluxo sanguíneo esplâncnico (via inibição da vasodilatação local). Essa potente vasoconstrição local diminui rapidamente a pressão portal e cessa o sangramento varicoso.',
      es: 'Hormona endógena con efectos inhibitorios masivos. Reduce la secreción de ácido gástrico, pepsina, jugo pancreático y flujo sanguíneo esplácnico (vía inhibición de la vasodilatación local). Esta potente vasoconstricción local disminuye rápidamente la presión portal y cesa el sangrado varicoso.'
    },
    dose: {
      adult: {
        pt: 'HDA Varicosa: Bolus IV de 250 mcg, seguido de infusão contínua ININTERRUPTA de 250 mcg/hora por 3 a 5 dias.',
        es: 'HDA Varicosa: Bolo IV de 250 mcg, seguido de infusión continua ININTERRUMPIDA de 250 mcg/hora por 3 a 5 días.'
      },
      pediatric: {
        pt: 'Uso restrito. Geralmente infusão de 3,5 a 5 mcg/kg/hora.',
        es: 'Uso restringido. Generalmente infusión de 3,5 a 5 mcg/kg/hora.'
      }
    },
    administration: {
      pt: ['A meia-vida da somatostatina é ULTRA CURTA (1 a 3 minutos). Se a bomba de infusão parar por apenas 3 minutos, a pressão portal sobe subitamente e a variz volta a sangrar em jato. Exige equipo de bomba perfeito.'],
      es: ['La vida media de la somatostatina es ULTRA CORTA (1 a 3 minutos). Si la bomba de infusión se detiene por solo 3 minutos, la presión portal sube súbitamente y la várice vuelve a sangrar en chorro. Exige equipo de bomba perfecto.']
    },
    renalAdjustment: { required: true, message: { pt: 'Pacientes com ClCr < 30 mL/min podem requerer redução de dose (metabolismo plasmático e renal).', es: 'Pacientes con ClCr < 30 mL/min pueden requerir reducción de dosis (metabolismo plasmático y renal).' } },
    hepaticAdjustment: { required: false, message: { pt: 'Seguro e indicado na insuficiência hepática aguda/cirrose.', es: 'Seguro e indicado en insuficiencia hepática aguda/cirrosis.' } },
    commonAdverseEffects: { pt: ['Náuseas / Vômitos', 'Flushing (rubor facial)', 'Dor abdominal'], es: ['Náuseas / Vómitos', 'Flushing (rubor facial)', 'Dolor abdominal'] },
    dangerousAdverseEffects: { pt: ['Hiperglicemia severa ou hipoglicemia aguda', 'Bradicardia', 'Arritmias'], es: ['Hiperglucemia severa o hipoglucemia aguda', 'Bradicardia', 'Arritmias'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
      relative: { pt: ['Gravidez (risco de espasmo uterino e asfixia fetal)', 'Diabetes lábil não monitorada'], es: ['Embarazo (riesgo de espasmo uterino y asfixia fetal)', 'Diabetes lábil no monitorizada'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'FALHA DE BOMBA É FATAL: O paciente NUNCA pode ficar sem a infusão. Uma nova ampola/seringa deve estar pronta antes que a atual termine. Monitorar glicemia a cada 4h.', es: 'FALLO DE BOMBA ES FATAL: El paciente NUNCA puede quedarse sin la infusión. Una nueva ampolla/jeringa debe estar lista antes de que la actual termine. Monitorizar glucemia cada 4h.' }
    },
    ref: 'García-Pagán JC et al. N Engl J Med 2010 · Ioannou GN et al. Hepatology 2003 · de Franchis R (Baveno VI) J Hepatol 2015 · Lexicomp 2026'
  },

  {
    id: 'rifaximina',
    name: { pt: 'Rifaximina', es: 'Rifaximina' },
    category: 'gastro',
    class: { pt: 'Antibiótico não-absorvível (Derivado Rifamicina)', es: 'Antibiótico no absorbible (Derivado Rifamicina)' },
    indications: {
      pt: ['Prevenção e Tratamento da Encefalopatia Hepática (redução de recaídas)', 'Diarreia do Viajante (E. coli não invasiva)', 'Síndrome de Supercrescimento Bacteriano do Intestino Delgado (SIBO)'],
      es: ['Prevención y Tratamiento de la Encefalopatía Hepática (reducción de recaídas)', 'Diarrea del Viajero (E. coli no invasiva)', 'Síndrome de Sobrecrecimiento Bacteriano del Intestino Delgado (SIBO)']
    },
    commercialNames: { br: ['Flonorm'], ar: ['Lumen', 'Rifaximina'] },
    presentation: { pt: ['Comprimidos 200 mg', 'Comprimidos 550 mg'], es: ['Comprimidos 200 mg', 'Comprimidos 550 mg'] },
    mechanism: {
      pt: 'Liga-se irreversivelmente à subunidade beta da RNA polimerase dependente de DNA das bactérias entéricas, inibindo a síntese de RNA. No cirrótico, erradica as bactérias do cólon produtoras de amônia. Sua absorção sistêmica é inferior a 1%, agindo exclusivamente dentro da luz intestinal com baixíssimo risco sistêmico.',
      es: 'Se une irreversiblemente a la subunidad beta de la ARN polimerasa dependiente de ADN de las bacterias entéricas, inhibiendo la síntesis de ARN. En el cirrótico, erradica las bacterias del colon productoras de amoníaco. Su absorción sistémica es inferior al 1%, actuando exclusivamente dentro de la luz intestinal con bajísimo riesgo sistémico.'
    },
    dose: {
      adult: {
        pt: 'Encefalopatia Hepática: 550 mg VO a cada 12 horas (uso contínuo associado ou não à lactulose). SIBO/Diarreia: 400 mg 8/8h por 14 dias.',
        es: 'Encefalopatía Hepática: 550 mg VO cada 12 horas (uso continuo asociado o no a la lactulosa). SIBO/Diarrea: 400 mg cada 8h por 14 días.'
      },
      pediatric: {
        pt: 'Uso não rotineiro em crianças (na diarreia do viajante > 12 anos: 200 mg 8/8h).',
        es: 'Uso no rutinario en niños (en diarrea del viajero > 12 años: 200 mg cada 8h).'
      }
    },
    administration: {
      pt: ['Via oral, com ou sem alimentos.'],
      es: ['Vía oral, con o sin alimentos.']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica relevante, não requer ajuste.', es: 'Sin absorción sistémica relevante, no requiere ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Desenvolvido especificamente para pacientes com cirrose avançada. Sem ajuste.', es: 'Desarrollado específicamente para pacientes con cirrosis avanzada. Sin ajuste.' } },
    commonAdverseEffects: { pt: ['Edema periférico', 'Náusea', 'Flatulência', 'Tontura leve'], es: ['Edema periférico', 'Náusea', 'Flatulencia', 'Mareo leve'] },
    dangerousAdverseEffects: { pt: ['Infecção por Clostridium difficile (C. diff)', 'Reações de hipersensibilidade'], es: ['Infección por Clostridium difficile (C. diff)', 'Reacciones de hipersensibilidad'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade a qualquer derivado da rifamicina (Rifampicina)'], es: ['Hipersensibilidad a cualquier derivado de la rifamicina (Rifampicina)'] },
      relative: { pt: ['Diarreia invasiva (com febre ou sangue oculto — falha terapêutica)', 'Obstrução intestinal'], es: ['Diarrea invasiva (con fiebre o sangre oculta — fallo terapéutico)', 'Obstrucción intestinal'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Diferente da Rifampicina, a Rifaximina não induz o CYP450 de forma clinicamente relevante in vivo devido à sua não absorção. Tratamento de alto custo.', es: 'A diferencia de la Rifampicina, la Rifaximina no induce el CYP450 de forma clínicamente relevante in vivo debido a su no absorción. Tratamiento de alto costo.' }
    },
    ref: 'Bass NM et al. N Engl J Med 2010 · Mullen KD et al. Clin Gastroenterol Hepatol 2014 · Dupont HL et al. Ann Intern Med 2001 · Lexicomp 2026'
  },

  {
    id: 'racecadotril',
    name: { pt: 'Racecadotril', es: 'Racecadotrilo' },
    category: 'gastro',
    class: { pt: 'Antidiarreico / Inibidor da Encefalinase', es: 'Antidiarreico / Inhibidor de la Encefalinasa' },
    indications: {
      pt: ['Tratamento sintomático da diarreia aguda aquosa (em adultos e crianças)'],
      es: ['Tratamiento sintomático de la diarrea aguda acuosa (en adultos y niños)']
    },
    commercialNames: { br: ['Tiorfan', 'Avide'], ar: ['Tiorfan'] },
    presentation: { pt: ['Cápsulas 100 mg', 'Granulado pediátrico 10 mg', 'Granulado pediátrico 30 mg'], es: ['Cápsulas 100 mg', 'Granulado pediátrico 10 mg', 'Granulado pediátrico 30 mg'] },
    mechanism: {
      pt: 'Pró-fármaco (tiorfano). Inibe a enzima encefalinase periférica (localizada no epitélio do intestino delgado). Isso impede a degradação das encefalinas endógenas, que reduzem ativamente a hipersecreção de água e eletrólitos induzida por toxinas virais/bacterianas. A grande vantagem é ser PURAMENTE antissecretor, não afetando a motilidade intestinal basal (não causa distensão nem constipação rebote, diferentemente da Loperamida).',
      es: 'Profármaco (tiorfano). Inhibe la enzima encefalinasa periférica (localizada en el epitelio del intestino delgado). Esto impide la degradación de las encefalinas endógenas, que reducen activamente la hipersecreción de agua y electrolitos inducida por toxinas virales/bacterianas. La gran ventaja es ser PURAMENTE antisecretor, no afectando la motilidad intestinal basal (no causa distensión ni constipación rebote, a diferencia de la Loperamida).'
    },
    dose: {
      adult: {
        pt: '100 mg VO 3x/dia, idealmente antes das refeições principais. O tratamento não deve ultrapassar 7 dias.',
        es: '100 mg VO 3 veces/día, idealmente antes de las comidas principales. El tratamiento no debe superar los 7 días.'
      },
      pediatric: {
        pt: '1,5 mg/kg/dose VO 3x/dia (usar as formulações em sachê/granulado de 10 mg/30 mg).',
        es: '1,5 mg/kg/dosis VO 3 veces/día (usar las formulaciones en sobre/granulado de 10 mg/30 mg).'
      }
    },
    administration: {
      pt: ['O primeiro comprimido pode ser tomado em qualquer momento, os subsequentes antes das refeições.', 'Interromper o uso assim que as fezes voltarem à consistência normal ou houver 2 evacuações normais.'],
      es: ['El primer comprimido puede tomarse en cualquier momento, los subsecuentes antes de las comidas.', 'Interrumpir el uso una vez que las heces vuelvan a consistencia normal o haya 2 evacuaciones normales.']
    },
    renalAdjustment: { required: false, message: { pt: 'Falta de dados em insuficiência renal grave; recomenda-se cautela.', es: 'Falta de datos en insuficiencia renal grave; se recomienda precaución.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Falta de dados em disfunção hepática grave; usar com cautela.', es: 'Falta de datos en disfunción hepática grave; usar con precaución.' } },
    commonAdverseEffects: { pt: ['Cefaleia', 'Eritema cutâneo (rash)'], es: ['Cefalea', 'Eritema cutáneo (rash)'] },
    dangerousAdverseEffects: { pt: ['Angioedema (raro, mas potencialmente fatal)', 'Reações anafiláticas'], es: ['Angioedema (raro, pero potencialmente fatal)', 'Reacciones anafilácticas'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade ao fármaco', 'Diarreia sanguinolenta ou purulenta com febre alta (invasiva)', 'Diarreia induzida por antibióticos (colite pseudomembranosa)'], es: ['Hipersensibilidad al fármaco', 'Diarrea sanguinolenta o purulenta con fiebre alta (invasiva)', 'Diarrea inducida por antibióticos (colitis pseudomembranosa)'] },
      relative: { pt: ['Uso concomitante com inibidores da ECA'], es: ['Uso concomitante con inhibidores de la ECA'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Sempre prescrever o Racecadotril JUNTO COM Sais de Reidratação Oral (SRO). O fármaco é adjuvante, e não substitui a reidratação.', es: 'Siempre prescribir el Racecadotrilo JUNTO CON Sales de Rehidratación Oral (SRO). El fármaco es adyuvante, y no sustituye la rehidratación.' }
    },
    ref: 'Lehert P et al. Acta Paediatr 2011 · Salazar-Lindo E et al. N Engl J Med 2000 · Lehert P et al. BMC Gastroenterol 2011 · ANSM France · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     ONDANSETRONA — BUILD 344 Lote Antieméticos
     Antagonista 5-HT3 · NVIQ · NVPO · Emergência
  ══════════════════════════════════════════════════════════════ */
  {
    "id": "ondansetrona",
    "name": {
      "pt": "Ondansetrona",
      "es": "Ondansetrón"
    },
    "category": "gastro",
    "class": {
      "pt": "Antagonista seletivo 5-HT3",
      "es": "Antagonista selectivo 5-HT3"
    },
    "indications": {
      "pt": [
        "Prevenção de náuseas e vômitos por quimioterapia emetogênica",
        "Prevenção de náuseas e vômitos pós-operatórios"
      ],
      "es": [
        "Prevención de náuseas y vómitos por quimioterapia emetógena",
        "Prevención de náuseas y vómitos posoperatorios"
      ]
    },
    "mechanism": {
      "pt": "Bloqueia receptores 5-HT3 periféricos e centrais envolvidos no reflexo emético.",
      "es": "Bloquea receptores 5-HT3 periféricos y centrales implicados en el reflejo emético."
    },
    "dose": {
      "adult": {
        "pt": "CINV IV: 0,15 mg/kg por dose (máx. 16 mg/dose) em 3 doses; PONV adulto: dose única de 4 mg IV/IM conforme rotulagem.",
        "es": "CINV IV: 0,15 mg/kg por dosis (máx. 16 mg/dosis) en 3 dosis; PONV adulto: dosis única de 4 mg IV/IM según rotulado."
      },
      "pediatric": {
        "pt": "CINV ≥6 meses: 0,15 mg/kg IV por dose (máx. 16 mg/dose) em 3 doses. PONV ≥1 mês: dose única conforme peso/rotulagem.",
        "es": "CINV ≥6 meses: 0,15 mg/kg IV por dosis (máx. 16 mg/dosis) en 3 dosis. PONV ≥1 mes: dosis única según peso/rotulado."
      }
    },
    "administration": {
      "pt": [
        "CINV: infundir em 15 min; iniciar 30 min antes da quimioterapia",
        "Corrigir hipocalemia/hipomagnesemia quando possível antes de usar em pacientes de risco para QT"
      ],
      "es": [
        "CINV: infundir en 15 min; iniciar 30 min antes de la quimioterapia",
        "Corregir hipopotasemia/hipomagnesemia cuando sea posible antes de usar en pacientes con riesgo de QT"
      ]
    },
    "renalAdjustment": {
      "required": false,
      "message": {
        "pt": "Sem ajuste renal rotineiro.",
        "es": "Sin ajuste renal rutinario."
      }
    },
    "hepaticAdjustment": {
      "required": true,
      "message": {
        "pt": "Insuficiência hepática grave (Child-Pugh ≥10): não exceder 8 mg/dia.",
        "es": "Insuficiencia hepática grave (Child-Pugh ≥10): no exceder 8 mg/día."
      }
    },
    "commonAdverseEffects": {
      "pt": [
        "Cefaleia",
        "Constipação"
      ],
      "es": [
        "Cefalea",
        "Estreñimiento"
      ]
    },
    "dangerousAdverseEffects": {
      "pt": [
        "Prolongamento de QT/Torsades",
        "Síndrome serotoninérgica rara",
        "Isquemia miocárdica rara associada à administração"
      ],
      "es": [
        "Prolongación de QT/Torsades",
        "Síndrome serotoninérgico raro",
        "Isquemia miocárdica rara asociada a la administración"
      ]
    },
    "contraindications": {
      "absolute": {
        "pt": [
          "Uso concomitante de apomorfina",
          "Hipersensibilidade"
        ],
        "es": [
          "Uso concomitante de apomorfina",
          "Hipersensibilidad"
        ]
      },
      "relative": {
        "pt": [
          "QT longo, bradiarritmia, IC, distúrbios eletrolíticos"
        ],
        "es": [
          "QT largo, bradiarritmia, IC, trastornos electrolíticos"
        ]
      }
    },
    "safetyFlags": {
      "bleedingRisk": false,
      "renalHighRisk": false,
      "hepaticCaution": true,
      "antidoteAvailable": false,
      "highAlertMedication": false,
      "warning": {
        "pt": "Ondansetrona prolonga QT de forma dose-dependente; ECG é recomendado em pacientes com fatores de risco.",
        "es": "Ondansetrón prolonga QT de forma dependiente de la dosis; se recomienda ECG en pacientes con factores de riesgo."
      }
    }
  },

  /* ══════════════════════════════════════════════════════════════
     METOCLOPRAMIDA — BUILD 344 Lote Antieméticos
     Antagonista D2 / Pró-cinético · Gastroparesia · NVPO
  ══════════════════════════════════════════════════════════════ */
  {
    "id": "metoclopramida",
    "name": {
      "pt": "Metoclopramida",
      "es": "Metoclopramida"
    },
    "category": "gastro",
    "class": {
      "pt": "Antagonista dopaminérgico D2; agonismo 5-HT4 procinético",
      "es": "Antagonista dopaminérgico D2; agonismo 5-HT4 procinético"
    },
    "indications": {
      "pt": [
        "Gastroparesia diabética aguda/recorrente em adultos",
        "DRGE sintomática documentada refratária em adultos",
        "Uso antiemético agudo em contextos selecionados conforme protocolo"
      ],
      "es": [
        "Gastroparesia diabética aguda/recurrente en adultos",
        "ERGE sintomática documentada refractaria en adultos",
        "Uso antiemético agudo en contextos seleccionados según protocolo"
      ]
    },
    "mechanism": {
      "pt": "Antagonismo D2 na zona gatilho quimiorreceptora e aumento da motilidade gastrointestinal proximal por ação procinética.",
      "es": "Antagonismo D2 en la zona gatillo quimiorreceptora y aumento de la motilidad gastrointestinal proximal por acción procinética."
    },
    "dose": {
      "adult": {
        "pt": "Gastroparesia diabética: 10 mg VO 30 min antes de cada refeição e ao deitar, máx. 40 mg/dia por 2–8 semanas. DRGE: 10–15 mg VO 4x/dia, máx. 60 mg/dia, até 12 semanas.",
        "es": "Gastroparesia diabética: 10 mg VO 30 min antes de cada comida y al acostarse, máx. 40 mg/día por 2–8 semanas. ERGE: 10–15 mg VO 4x/día, máx. 60 mg/día, hasta 12 semanas."
      },
      "pediatric": {
        "pt": "Rotulagem oral atual dos EUA não recomenda uso pediátrico devido a discinesia tardia/EPS e risco de metemoglobinemia em neonatos.",
        "es": "El rotulado oral actual de EE. UU. no recomienda uso pediátrico por discinesia tardía/EPS y riesgo de metahemoglobinemia en neonatos."
      }
    },
    "administration": {
      "pt": [
        "Usar pelo menor tempo possível",
        "Evitar duração >12 semanas",
        "Suspender imediatamente diante de discinesia tardia"
      ],
      "es": [
        "Usar durante el menor tiempo posible",
        "Evitar duración >12 semanas",
        "Suspender inmediatamente ante discinesia tardía"
      ]
    },
    "renalAdjustment": {
      "required": true,
      "message": {
        "pt": "Reduzir dose em insuficiência renal moderada/grave conforme indicação e ClCr; maior exposição aumenta risco de reações neurológicas.",
        "es": "Reducir dosis en insuficiencia renal moderada/grave según indicación y ClCr; mayor exposición aumenta riesgo de reacciones neurológicas."
      }
    },
    "hepaticAdjustment": {
      "required": true,
      "message": {
        "pt": "Reduzir dose em insuficiência hepática moderada/grave conforme rotulagem.",
        "es": "Reducir dosis en insuficiencia hepática moderada/grave según rotulado."
      }
    },
    "commonAdverseEffects": {
      "pt": [
        "Sonolência",
        "Inquietação",
        "Fadiga",
        "Diarreia"
      ],
      "es": [
        "Somnolencia",
        "Inquietud",
        "Fatiga",
        "Diarrea"
      ]
    },
    "dangerousAdverseEffects": {
      "pt": [
        "Discinesia tardia",
        "Distonia/EPS",
        "Síndrome neuroléptica maligna",
        "Depressão"
      ],
      "es": [
        "Discinesia tardía",
        "Distonía/EPS",
        "Síndrome neuroléptico maligno",
        "Depresión"
      ]
    },
    "contraindications": {
      "absolute": {
        "pt": [
          "História de discinesia tardia/distonia por metoclopramida",
          "Obstrução, perfuração ou hemorragia GI quando estimulação da motilidade é perigosa",
          "Feocromocitoma",
          "Epilepsia"
        ],
        "es": [
          "Antecedente de discinesia tardía/distonía por metoclopramida",
          "Obstrucción, perforación o hemorragia GI cuando estimular la motilidad sea peligroso",
          "Feocromocitoma",
          "Epilepsia"
        ]
      },
      "relative": {
        "pt": [
          "Parkinsonismo, uso de antipsicóticos, idosos"
        ],
        "es": [
          "Parkinsonismo, uso de antipsicóticos, adultos mayores"
        ]
      }
    },
    "safetyFlags": {
      "bleedingRisk": false,
      "renalHighRisk": true,
      "hepaticCaution": true,
      "antidoteAvailable": false,
      "highAlertMedication": false,
      "warning": {
        "pt": "Discinesia tardia pode ser irreversível; o risco aumenta com duração e dose cumulativa. Evitar >12 semanas.",
        "es": "La discinesia tardía puede ser irreversible; el riesgo aumenta con duración y dosis acumulada. Evitar >12 semanas."
      }
    }
  }

]; /* fim window.GASTRO_DRUGS_DB */
/* GOLD33_SELECTIVE:lactulose:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="lactulose";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:lactulose:"+matches.length);drug=matches[0];}else{drug=db&&db["lactulose"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:lactulose");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "044",
    "requiredFieldCount": 33,
    "approvedSha256": "6d95f5fc4782c229c9c433e337fe9613e8ff98ebb066423dc2da4d1f2057e546",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Lactulose",
    "class": "Laxativo osmótico; redutor de amônia",
    "pharmacologicClass": "Dissacarídeo sintético não absorvível",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Solução oral geralmente 10 g/15 mL; concentração deve ser confirmada no produto.",
    "presentations": "Solução oral geralmente 10 g/15 mL; concentração deve ser confirmada no produto.",
    "mechanism": "É fermentada no cólon, acidifica o conteúdo, retém água e converte amônia em amônio menos absorvível; o efeito laxativo surge em 24-48 h.",
    "pharmacodynamics": "É fermentada no cólon, acidifica o conteúdo, retém água e converte amônia em amônio menos absorvível; o efeito laxativo surge em 24-48 h.",
    "pharmacokinetics": "Absorção sistêmica mínima; metabolizada por bactérias colônicas e eliminada nas fezes.",
    "indications": "Constipação; prevenção/tratamento de encefalopatia portossistêmica conforme produto.",
    "dose": "Constipação adulta: 15-30 mL/dia, ajustar. Encefalopatia: 30-45 mL 3-4 vezes/dia, titular para 2-3 evacuações amolecidas/dia; na fase aguda podem ser usados regimes intensivos sob monitorização.",
    "pediatricDose": "Regimes variam por idade/indicação; sem tabela completa e formulação local confirmada, automação pediátrica permanece BLOQUEADA.",
    "renalDose": "Sem ajuste específico; monitorar eletrólitos e hidratação.",
    "hepaticDose": "Sem ajuste específico; na encefalopatia titular pelo efeito clínico e evacuações.",
    "commonAdverseEffects": "Flatulência, distensão, cólica, diarreia e náusea.",
    "dangerousAdverseEffects": "Desidratação, hipernatremia/hipocalemia e aspiração em administração inadequada.",
    "adverseEffects": "Flatulência, distensão, cólica, diarreia e náusea.; Desidratação, hipernatremia/hipocalemia e aspiração em administração inadequada.",
    "contraindications": "Hipersensibilidade; dieta estrita sem galactose; cautela/evitar em obstrução GI.",
    "interactions": "Outros laxativos aumentam diarreia; antiácidos podem alterar acidificação colônica; monitorar fármacos sensíveis a eletrólitos.",
    "monitoring": "Frequência/consistência das fezes, estado mental na encefalopatia, hidratação e eletrólitos em uso intenso.",
    "administration": "VO; pode misturar com água, suco ou leite. Via retal somente por protocolo/formulação apropriada.",
    "preparation": "Medir com dispositivo; confirmar concentração. Enema exige protocolo institucional e não deve ser inferido da solução oral.",
    "infusionProtocol": "Não é infusão IV. Administração enteral/retal conforme indicação.",
    "pregnancy": "Absorção mínima; geralmente aceitável quando indicada.",
    "lactation": "Absorção mínima; geralmente compatível, com avaliação clínica.",
    "specialPopulations": "Diabetes: pequena carga de açúcares; idosos e debilitados: maior risco hidroeletrolítico.",
    "patientEducation": "Titular para efeito, não para diarreia; manter hidratação e relatar dor intensa/vômitos.",
    "clinicalPearls": "Na encefalopatia, alvo é 2-3 evacuações amolecidas/dia; excesso causa desidratação e pode piorar estado clínico.",
    "guidelineRecommendations": "Diretrizes de encefalopatia hepática usam lactulose como terapia central para episódios manifestos e prevenção secundária.",
    "safetyFlags": "Eletrólitos; desidratação; concentração; risco de aspiração.",
    "alerts": "Titular por evacuações; confirmar 10 g/15 mL; pediatria bloqueada.",
    "references": [
      "Fonte oficial/primária - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a8af7389-3699-4873-b05a-509af7e8eaab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a8af7389-3699-4873-b05a-509af7e8eaab"
  },
  "es": {
    "name": "Lactulosa",
    "class": "Laxativo osmótico; redutor de amônia",
    "pharmacologicClass": "Dissacarídeo sintético no absorvível",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Solução oral geralmente 10 g/15 mL; concentração deve ser confirmada no produto.",
    "presentations": "Solução oral geralmente 10 g/15 mL; concentração deve ser confirmada no produto.",
    "mechanism": "É fermentada no cólon, acidifica o conteúdo, retém água y converte amônia em amônio menos absorvível; o efeito laxativo surge em 24-48 h.",
    "pharmacodynamics": "É fermentada no cólon, acidifica o conteúdo, retém água y converte amônia em amônio menos absorvível; o efeito laxativo surge em 24-48 h.",
    "pharmacokinetics": "Absorção sistêmica mínima; metabolizada por bactérias colônicas y eliminada nas fezes.",
    "indications": "Constipação; prevenção/tratamiento de encefalopatia portossistêmica según produto.",
    "dose": "Constipação adulta: 15-30 mL/dia, ajustar. Encefalopatia: 30-45 mL 3-4 vezes/dia, titular para 2-3 evacuações amolecidas/dia; na fase aguda podem ser usados regimes intensivos sob monitorización.",
    "pediatricDose": "Regimes variam por idade/indicación; sin tabela completa y formulación local confirmada, automação pediátrica permanece BLOQUEADA.",
    "renalDose": "Sem ajuste específico; monitorar eletrólitos y hidratação.",
    "hepaticDose": "Sem ajuste específico; na encefalopatia titular pelo efeito clínico y evacuações.",
    "commonAdverseEffects": "Flatulência, distensão, cólica, diarreia y náusea.",
    "dangerousAdverseEffects": "Desidratação, hipernatremia/hipocalemia y aspiração em administración inadequada.",
    "adverseEffects": "Flatulência, distensão, cólica, diarreia y náusea.; Desidratação, hipernatremia/hipocalemia y aspiração em administración inadequada.",
    "contraindications": "Hipersensibilidade; dieta estrita sin galactose; cautela/evitar em obstrução GI.",
    "interactions": "Outros laxativos aumentam diarreia; antiácidos podem alterar acidificação colônica; monitorar fármacos sensíveis a eletrólitos.",
    "monitoring": "Frequência/consistência das fezes, estado mental na encefalopatia, hidratação y eletrólitos em uso intenso.",
    "administration": "VO; pode misturar con água, suco ou leite. Via retal somente por protocolo/formulación apropriada.",
    "preparation": "Medir con dispositivo; confirmar concentração. Enema exige protocolo institucional y no deve ser inferido da solución oral.",
    "infusionProtocol": "No é infusão IV. Administração enteral/retal según indicación.",
    "pregnancy": "Absorção mínima; geralmente aceitável quando indicada.",
    "lactation": "Absorção mínima; geralmente compatível, con evaluación clínica.",
    "specialPopulations": "Diabetes: pequena carga de açúcares; idosos y debilitados: maior riesgo hidroeletrolítico.",
    "patientEducation": "Titular para efeito, no para diarreia; manter hidratação y relatar dor intensa/vômitos.",
    "clinicalPearls": "Na encefalopatia, alvo é 2-3 evacuações amolecidas/dia; excesso causa desidratação y pode piorar estado clínico.",
    "guidelineRecommendations": "Diretrizes de encefalopatia hepática usam lactulose como terapia central para episódios manifestos y prevenção secundária.",
    "safetyFlags": "Eletrólitos; desidratação; concentração; riesgo de aspiração.",
    "alerts": "Titular por evacuações; confirmar 10 g/15 mL; pediatría bloqueada.",
    "references": [
      "Fonte oficial/primária - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a8af7389-3699-4873-b05a-509af7e8eaab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a8af7389-3699-4873-b05a-509af7e8eaab"
  }
};})();
/* GOLD33_SELECTIVE:lactulose:END */
/* GOLD33_SELECTIVE:metoclopramida:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="metoclopramida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:metoclopramida:"+matches.length);drug=matches[0];}else{drug=db&&db["metoclopramida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:metoclopramida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "051",
    "requiredFieldCount": 33,
    "approvedSha256": "e8a21d5e56a67f4cd6ffebc889de4b4f030ae14b8459ad80ac2ba035cf141544",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Metoclopramida",
    "class": "Antagonista dopaminérgico D2; procinético e antiemético",
    "pharmacologicClass": "Antagonista dopaminérgico D2; procinético e antiemético",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 e 10 mg; solução oral e injetável em concentrações específicas.",
    "presentations": "Comprimidos 5 e 10 mg; solução oral e injetável em concentrações específicas.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Gastroparesia diabética e refluxo gastroesofágico refratário conforme produto; usos antieméticos dependem da formulação e jurisdição.",
    "dose": "Gastroparesia adulta: 10 mg VO 30 minutos antes das refeições e ao deitar por 2-8 semanas; reduzir em insuficiência renal. Evitar tratamento além de 12 semanas salvo situação rara justificada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Sonolência, fadiga, inquietação e diarreia.",
    "dangerousAdverseEffects": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão e metemoglobinemia.",
    "adverseEffects": "Sonolência, fadiga, inquietação e diarreia.; Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão e metemoglobinemia.",
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
    "safetyFlags": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão e metemoglobinemia.",
    "alerts": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão e metemoglobinemia.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metoclopramide",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/017854s062lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metoclopramide"
  },
  "es": {
    "name": "Metoclopramida",
    "class": "Antagonista dopaminérgico D2; procinético y antiemético",
    "pharmacologicClass": "Antagonista dopaminérgico D2; procinético y antiemético",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 y 10 mg; solución oral y injetável em concentrações específicas.",
    "presentations": "Comprimidos 5 y 10 mg; solución oral y injetável em concentrações específicas.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Gastroparesia diabética y refluxo gastroesofágico refratário conforme produto; usos antieméticos dependem da formulação y jurisdição.",
    "dose": "Gastroparesia adulta: 10 mg VO 30 minutos antes das refeições y ao deitar por 2-8 semanas; reduzir em insuficiência renal. Evitar tratamento além de 12 semanas salvo situação rara justificada.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Sonolência, fadiga, inquietação y diarreia.",
    "dangerousAdverseEffects": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão y metemoglobinemia.",
    "adverseEffects": "Sonolência, fadiga, inquietação y diarreia.; Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão y metemoglobinemia.",
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
    "safetyFlags": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão y metemoglobinemia.",
    "alerts": "Discinesia tardia, distonia, parkinsonismo, síndrome neuroléptica maligna, depressão y metemoglobinemia.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metoclopramide",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/017854s062lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metoclopramide"
  }
};})();
/* GOLD33_SELECTIVE:metoclopramida:END */
/* GOLD33_SELECTIVE:octreotide:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="octreotide";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:octreotide:"+matches.length);drug=matches[0];}else{drug=db&&db["octreotide"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:octreotide");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "057",
    "requiredFieldCount": 33,
    "approvedSha256": "10e4153c730685e713321ea7b52895190ead372a4456ac2d3d58ef2b2e090bf2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Octreotida",
    "class": "Análogo da somatostatina",
    "pharmacologicClass": "Análogo da somatostatina",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução injetável de ação imediata e microesferas de depósito IM em forças específicas.",
    "presentations": "Solução injetável de ação imediata e microesferas de depósito IM em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Acromegalia e controle sintomático de tumores carcinoides/VIPomas conforme formulação.",
    "dose": "Formulação imediata SC/IV e depósito IM possuem esquemas distintos. Na acromegalia, iniciar frequentemente 50 microgramas SC três vezes/dia e titular; LAR somente após tolerabilidade e conforme rótulo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia, dor abdominal, náusea, flatulência e reação no local.",
    "dangerousAdverseEffects": "Bradicardia, alterações de glicemia, colelitíase, pancreatite e distúrbios de condução.",
    "adverseEffects": "Diarreia, dor abdominal, náusea, flatulência e reação no local.; Bradicardia, alterações de glicemia, colelitíase, pancreatite e distúrbios de condução.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Bradicardia, alterações de glicemia, colelitíase, pancreatite e distúrbios de condução.",
    "alerts": "Bradicardia, alterações de glicemia, colelitíase, pancreatite e distúrbios de condução.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=octreotide",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=octreotide"
  },
  "es": {
    "name": "Octreotida",
    "class": "Análogo da somatostatina",
    "pharmacologicClass": "Análogo da somatostatina",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Solução injetável de ação imediata y microesferas de depósito IM em forças específicas.",
    "presentations": "Solução injetável de ação imediata y microesferas de depósito IM em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Acromegalia y controle sintomático de tumores carcinoides/VIPomas conforme formulação.",
    "dose": "Formulação imediata SC/IV y depósito IM possuem esquemas distintos. Na acromegalia, iniciar frequentemente 50 microgramas SC três vezes/dia y titular; LAR somente após tolerabilidade y conforme rótulo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia, dor abdominal, náusea, flatulência y reação no local.",
    "dangerousAdverseEffects": "Bradicardia, alterações de glicemia, colelitíase, pancreatite y distúrbios de condução.",
    "adverseEffects": "Diarreia, dor abdominal, náusea, flatulência y reação no local.; Bradicardia, alterações de glicemia, colelitíase, pancreatite y distúrbios de condução.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Bradicardia, alterações de glicemia, colelitíase, pancreatite y distúrbios de condução.",
    "alerts": "Bradicardia, alterações de glicemia, colelitíase, pancreatite y distúrbios de condução.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=octreotide",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=octreotide"
  }
};})();
/* GOLD33_SELECTIVE:octreotide:END */
/* GOLD33_SELECTIVE:omeprazol_iv:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="omeprazol_iv";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:omeprazol_iv:"+matches.length);drug=matches[0];}else{drug=db&&db["omeprazol_iv"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:omeprazol_iv");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "058",
    "requiredFieldCount": 33,
    "approvedSha256": "6e58c284fb1c35a866278fa4a287e2b803d49457886bb22f4efbdb5f2ee41410",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Omeprazol intravenoso",
    "class": "Inibidor da bomba de prótons intravenoso",
    "pharmacologicClass": "Inibidor da bomba de prótons intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado IV em forças específicas; confirmar diluente e estabilidade.",
    "presentations": "Frasco liofilizado IV em forças específicas; confirmar diluente e estabilidade.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Indicações dependem do produto e jurisdição, incluindo substituição temporária da via oral ou protocolos hospitalares específicos.",
    "dose": "Dose, reconstituição, diluente, concentração e velocidade são específicas do produto. Não converter automaticamente do esquema oral nem habilitar infusão sem bula local completa.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, dor abdominal e reação no local.",
    "dangerousAdverseEffects": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "adverseEffects": "Cefaleia, náusea, dor abdominal e reação no local.; Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "alerts": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol+iv",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol+iv"
  },
  "es": {
    "name": "Omeprazol intravenoso",
    "class": "Inibidor da bomba de prótons intravenoso",
    "pharmacologicClass": "Inibidor da bomba de prótons intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado IV em forças específicas; confirmar diluente y estabilidade.",
    "presentations": "Frasco liofilizado IV em forças específicas; confirmar diluente y estabilidade.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Indicações dependem do produto y jurisdição, incluindo substituição temporária da via oral ou protocolos hospitalares específicos.",
    "dose": "Dose, reconstituição, diluente, concentração y velocidade são específicas do produto. No converter automaticamente do esquema oral nem habilitar infusão sem bula local completa.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, dor abdominal y reação no local.",
    "dangerousAdverseEffects": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "adverseEffects": "Cefaleia, náusea, dor abdominal y reação no local.; Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "alerts": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol+iv",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol+iv"
  }
};})();
/* GOLD33_SELECTIVE:omeprazol_iv:END */
/* GOLD33_SELECTIVE:ondansetrona:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="ondansetrona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:ondansetrona:"+matches.length);drug=matches[0];}else{drug=db&&db["ondansetrona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:ondansetrona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "058",
    "requiredFieldCount": 33,
    "approvedSha256": "6e58c284fb1c35a866278fa4a287e2b803d49457886bb22f4efbdb5f2ee41410",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Ondansetrona",
    "class": "Antagonista seletivo 5-HT3",
    "pharmacologicClass": "Antagonista seletivo 5-HT3",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, orodispersíveis, solução oral e injetável em várias forças.",
    "presentations": "Comprimidos, orodispersíveis, solução oral e injetável em várias forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Prevenção de náuseas e vômitos associados a quimioterapia, radioterapia e pós-operatório conforme via e idade.",
    "dose": "Esquema depende da indicação, emetogenicidade, idade e via. Limites IV devem considerar prolongamento de QT; não usar uma dose universal para todos os cenários.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, constipação, diarreia e fadiga.",
    "dangerousAdverseEffects": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade e isquemia miocárdica.",
    "adverseEffects": "Cefaleia, constipação, diarreia e fadiga.; Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade e isquemia miocárdica.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade e isquemia miocárdica.",
    "alerts": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade e isquemia miocárdica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetrona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetrona"
  },
  "es": {
    "name": "Ondansetrona",
    "class": "Antagonista seletivo 5-HT3",
    "pharmacologicClass": "Antagonista seletivo 5-HT3",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, orodispersíveis, solución oral y injetável em várias forças.",
    "presentations": "Comprimidos, orodispersíveis, solución oral y injetável em várias forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Prevenção de náuseas y vômitos associados a quimioterapia, radioterapia y pós-operatório conforme via y idade.",
    "dose": "Esquema depende da indicação, emetogenicidade, idade y via. Limites IV devem considerar prolongamento de QT; no usar uma dosis universal para todos os cenários.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, constipação, diarreia y fadiga.",
    "dangerousAdverseEffects": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade y isquemia miocárdica.",
    "adverseEffects": "Cefaleia, constipação, diarreia y fadiga.; Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade y isquemia miocárdica.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade y isquemia miocárdica.",
    "alerts": "Prolongamento de QT/torsades, síndrome serotoninérgica, hipersensibilidade y isquemia miocárdica.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetrona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetrona"
  }
};})();
/* GOLD33_SELECTIVE:ondansetrona:END */
/* GOLD33_SELECTIVE:pantoprazol_iv:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="pantoprazol_iv";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:pantoprazol_iv:"+matches.length);drug=matches[0];}else{drug=db&&db["pantoprazol_iv"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:pantoprazol_iv");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "060",
    "requiredFieldCount": 33,
    "approvedSha256": "6777d951b60768ad775b47ac152241bd9b37057d90fcf3c5784894d7c4d507e4",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Pantoprazol intravenoso",
    "class": "Inibidor da bomba de prótons intravenoso",
    "pharmacologicClass": "Inibidor da bomba de prótons intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado 40 mg para uso IV conforme produto.",
    "presentations": "Frasco liofilizado 40 mg para uso IV conforme produto.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento IV de condições ácido-pépticas quando indicado e protocolos hospitalares específicos.",
    "dose": "Dose, reconstituição, diluente e velocidade dependem da indicação e produto. Não transpor automaticamente do oral nem habilitar infusão sem protocolo completo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, reação no local e náusea.",
    "dangerousAdverseEffects": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "adverseEffects": "Cefaleia, diarreia, reação no local e náusea.; Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.",
    "alerts": "Nefrite intersticial, hipomagnesemia, C. difficile e erro de preparo/administração.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol+iv",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol+iv"
  },
  "es": {
    "name": "Pantoprazol intravenoso",
    "class": "Inibidor da bomba de prótons intravenoso",
    "pharmacologicClass": "Inibidor da bomba de prótons intravenoso",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco liofilizado 40 mg para uso IV conforme produto.",
    "presentations": "Frasco liofilizado 40 mg para uso IV conforme produto.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento IV de condições ácido-pépticas quando indicado y protocolos hospitalares específicos.",
    "dose": "Dose, reconstituição, diluente y velocidade dependem da indicação y produto. No transpor automaticamente do oral nem habilitar infusão sem protocolo completo.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, reação no local y náusea.",
    "dangerousAdverseEffects": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "adverseEffects": "Cefaleia, diarreia, reação no local y náusea.; Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.",
    "alerts": "Nefrite intersticial, hipomagnesemia, C. difficile y erro de preparo/administração.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol+iv",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol+iv"
  }
};})();
/* GOLD33_SELECTIVE:pantoprazol_iv:END */
/* GOLD33_SELECTIVE:racecadotril:START */
;(function(){var db=window.GASTRO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="racecadotril";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:racecadotril:"+matches.length);drug=matches[0];}else{drug=db&&db["racecadotril"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:racecadotril");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "066",
    "requiredFieldCount": 33,
    "approvedSha256": "bc4a2f74a71f4210ae66618c848d36a28722e9fead8cb93c0dc91f0629254307",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Racecadotril",
    "class": "Antissecretor intestinal inibidor da encefalinase",
    "pharmacologicClass": "Antissecretor intestinal inibidor da encefalinase",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas e sachês/granulados pediátricos em forças específicas.",
    "presentations": "Cápsulas e sachês/granulados pediátricos em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento sintomático adjuvante da diarreia aguda conforme idade e jurisdição, sempre com reidratação.",
    "dose": "Dose depende de idade/peso e formulação. Não substitui solução de reidratação oral nem avaliação de sangue nas fezes, febre, desidratação ou diarreia persistente.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, constipação, cefaleia e rash.",
    "dangerousAdverseEffects": "Angioedema, reação cutânea grave e atraso no tratamento de desidratação ou infecção invasiva.",
    "adverseEffects": "Náusea, constipação, cefaleia e rash.; Angioedema, reação cutânea grave e atraso no tratamento de desidratação ou infecção invasiva.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Angioedema, reação cutânea grave e atraso no tratamento de desidratação ou infecção invasiva.",
    "alerts": "Angioedema, reação cutânea grave e atraso no tratamento de desidratação ou infecção invasiva.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=racecadotril",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=racecadotril"
  },
  "es": {
    "name": "Racecadotril",
    "class": "Antissecretor intestinal inibidor da encefalinase",
    "pharmacologicClass": "Antissecretor intestinal inibidor da encefalinase",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas y sachês/granulados pediátricos em forças específicas.",
    "presentations": "Cápsulas y sachês/granulados pediátricos em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento sintomático adjuvante da diarreia aguda conforme idade y jurisdição, sempre con reidratação.",
    "dose": "Dose depende de idade/peso y formulação. No substitui solución de reidratação oral nem avaliação de sangue nas fezes, febre, desidratação ou diarreia persistente.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Náusea, constipação, cefaleia y rash.",
    "dangerousAdverseEffects": "Angioedema, reação cutânea grave y atraso no tratamento de desidratação ou infecção invasiva.",
    "adverseEffects": "Náusea, constipação, cefaleia y rash.; Angioedema, reação cutânea grave y atraso no tratamento de desidratação ou infecção invasiva.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Angioedema, reação cutânea grave y atraso no tratamento de desidratação ou infecção invasiva.",
    "alerts": "Angioedema, reação cutânea grave y atraso no tratamento de desidratação ou infecção invasiva.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=racecadotril",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=racecadotril"
  }
};})();
/* GOLD33_SELECTIVE:racecadotril:END */
