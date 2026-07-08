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
    id: 'ondansetrona',
    name:     { pt: 'Ondansetrona', es: 'Ondansetrón' },
    category: 'gastro',
    class:    { pt: 'Antiemético (Antagonista do Receptor 5-HT3)', es: 'Antiemético (Antagonista del Receptor 5-HT3)' },
    icon: '🤢',
    color:    'rgba(168,85,247,0.12)',
    colorTxt: '#7C3AED',

    indications: {
      pt: ['Prevenção e tratamento de Náuseas e Vômitos Induzidos por Quimioterapia (NVIQ) ou Radioterapia', 'Náuseas e vômitos agudos no Pós-Operatório (NVPO)', 'Vômitos incontroláveis na emergência clínica e pediatria'],
      es: ['Prevención y tratamiento de Náuseas y Vómitos Inducidos por Quimioterapia (NVIQ) o Radioterapia', 'Náuseas y vómitos agudos en el Posoperatorio (NVPO)', 'Vómitos incontrolables en urgencias clínica y pediatría']
    },

    commercialNames: { br: ['Vonau', 'Nausedron', 'Zofran'], ar: ['Zofran', 'Ondansetron'] },

    presentation: {
      pt: ['Ampolas IV/IM 2 mg/mL (2 e 4 mL)', 'Comprimidos ODT (Orodispersíveis) 4 mg e 8 mg'],
      es: ['Ampollas IV/IM 2 mg/mL (2 y 4 mL)', 'Comprimidos ODT (Orodispersables) 4 mg y 8 mg']
    },

    mechanism: {
      pt: 'Bloqueador altamente seletivo dos receptores de serotonina 5-HT3 localizados nas terminações nervosas do nervo vago (trato gastrointestinal) e na Zona de Gatilho Quimiorreceptora (tronco cerebral). Desliga quase inteiramente a via química do vômito gerada por lesão gástrica, radiação ou toxinas. Não afeta receptores de dopamina — por isso não causa sintomas extrapiramidais como a metoclopramida.',
      es: 'Bloqueador altamente selectivo de los receptores de serotonina 5-HT3 localizados en las terminaciones nerviosas del nervio vago (tracto gastrointestinal) y en la Zona Gatillo Quimiorreceptora (tronco cerebral). Apaga casi por completo la vía química del vómito generada por lesión gástrica, radiación o toxinas. No afecta receptores de dopamina — por eso no causa síntomas extrapiramidales como la metoclopramida.'
    },

    dose: {
      adult: {
        pt: 'Geral: 4 a 8 mg IV, IM ou VO (podendo repetir a cada 8 horas). Quimioterapia altamente emetogênica: até 16 a 24 mg em infusão profilática.',
        es: 'General: 4 a 8 mg IV, IM o VO (pudiendo repetir cada 8 horas). Quimioterapia altamente emetogénica: hasta 16 a 24 mg en infusión profiláctica.'
      },
      pediatric: {
        pt: 'Gastroenterite com vômitos: peso 8-15 kg → 2 mg ODT; 15-30 kg → 4 mg ODT. Dose IV: 0,15 mg/kg.',
        es: 'Gastroenteritis con vómitos: peso 8-15 kg → 2 mg ODT; 15-30 kg → 4 mg ODT. Dosis IV: 0,15 mg/kg.'
      }
    },

    administration: {
      pt: ['Comprimidos ODT devem derreter sobre a língua (não engolir com água — ideal para quem está vomitando).', 'Injeção IV deve ser lenta (em pelo menos 2 a 5 minutos) para evitar cefaleia intensa vascular.'],
      es: ['Comprimidos ODT deben derretirse sobre la lengua (no tragar con agua — ideal para quien está vomitando).', 'Inyección IV debe ser lenta (en al menos 2 a 5 minutos) para evitar cefalea intensa vascular.']
    },

    renalAdjustment: {
      required: false,
      message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' }
    },

    hepaticAdjustment: {
      required: true,
      message: { pt: 'Pacientes com falência hepática grave (Child-Pugh C) não devem ultrapassar 8 mg/dia (droga se acumula).', es: 'Pacientes con falla hepática grave (Child-Pugh C) no deben superar 8 mg/día (la droga se acumula).' }
    },

    commonAdverseEffects: {
      pt: ['Cefaleia marcante e calor facial', 'Constipação intestinal intensa (retarda o trânsito gastrointestinal)'],
      es: ['Cefalea marcada y calor facial', 'Constipación intestinal intensa (retarda el tránsito gastrointestinal)']
    },

    dangerousAdverseEffects: {
      pt: ['Prolongamento do intervalo QT (arritmias tipo Torsades de Pointes)', 'Síndrome Serotoninérgica em associação com ISRSs'],
      es: ['Prolongación del intervalo QT (arritmias tipo Torsades de Pointes)', 'Síndrome Serotoninérgico en asociación con ISRSs']
    },

    contraindications: {
      absolute: { pt: ['Uso associado de Apomorfina (causa perda de consciência abrupta)', 'Síndrome do QT Longo congênito'], es: ['Uso asociado de Apomorfina (causa pérdida de consciencia abrupta)', 'Síndrome del QT Largo congénito'] },
      relative: { pt: ['Primeiro trimestre de gravidez (possível associação com fenda palatina em alguns protocolos)'], es: ['Primer trimestre de embarazo (posible asociación con paladar hendido en algunos protocolos)'] }
    },

    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Evite administrar 8 mg em bolus rápido no pronto-socorro para náusea simples sem eletrocardiograma prévio. O risco de arritmia é real. 4 mg são frequentemente suficientes.', es: 'Evite administrar 8 mg en bolo rápido en urgencias para náusea simple sin electrocardiograma previo. El riesgo de arritmia es real. 4 mg son frecuentemente suficientes.' }
    },

    ref: 'Rojas C & Bhavsar JD. Curr Opin Support Palliat Care 2014 · FDA Label Zofran · Janicki PK et al. Anesth Analg 2011 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     METOCLOPRAMIDA — BUILD 344 Lote Antieméticos
     Antagonista D2 / Pró-cinético · Gastroparesia · NVPO
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'metoclopramida',
    name:     { pt: 'Metoclopramida', es: 'Metoclopramida' },
    category: 'gastro',
    class:    { pt: 'Antiemético / Pró-Cinético (Antagonista Dopaminérgico D2)', es: 'Antiemético / Procinético (Antagonista Dopaminérgico D2)' },
    icon: '🔄',
    color:    'rgba(249,115,22,0.12)',
    colorTxt: '#C2410C',

    indications: {
      pt: ['Náuseas e vômitos generalizados e na enxaqueca', 'Gastroparesia diabética (esvaziamento gástrico muito lento)', 'Refluxo gastroesofágico e facilitação de intubação gástrica e endoscopias'],
      es: ['Náuseas y vómitos generalizados y en la migraña', 'Gastroparesia diabética (vaciamiento gástrico muy lento)', 'Reflujo gastroesofágico y facilitación de intubación gástrica y endoscopias']
    },

    commercialNames: { br: ['Plasil'], ar: ['Reliveran'] },

    presentation: {
      pt: ['Ampolas IV/IM 5 mg/mL (2 mL = 10 mg)', 'Comprimidos 10 mg', 'Gotas orais'],
      es: ['Ampollas IV/IM 5 mg/mL (2 mL = 10 mg)', 'Comprimidos 10 mg', 'Gotas orales']
    },

    mechanism: {
      pt: 'Ação dupla. Central: bloqueia os receptores de dopamina D2 na zona de gatilho do cérebro, suprimindo a náusea (mecanismo semelhante ao haloperidol). Periférica: sensibiliza o trato gastrointestinal à acetilcolina, aumentando o tônus do esfíncter esofágico e acelerando o esvaziamento gástrico em direção ao intestino delgado. É um pró-cinético, ao contrário da ondansetrona que retarda o trânsito.',
      es: 'Acción doble. Central: bloquea los receptores de dopamina D2 en la zona gatillo del cerebro, suprimiendo la náusea (mecanismo similar al haloperidol). Periférica: sensibiliza el tracto gastrointestinal a la acetilcolina, aumentando el tono del esfínter esofágico y acelerando el vaciamiento gástrico hacia el intestino delgado. Es un procinético, a diferencia del ondansetrón que retarda el tránsito.'
    },

    dose: {
      adult: {
        pt: '10 mg IV, IM ou VO a cada 8 horas (30 minutos antes das refeições na gastroparesia).',
        es: '10 mg IV, IM o VO cada 8 horas (30 minutos antes de las comidas en la gastroparesia).'
      },
      pediatric: {
        pt: '0,1 a 0,15 mg/kg por dose. Máximo de 0,5 mg/kg/dia (alto risco de distonia em crianças).',
        es: '0,1 a 0,15 mg/kg por dosis. Máximo de 0,5 mg/kg/día (alto riesgo de distonía en niños).'
      }
    },

    administration: {
      pt: ['INJEÇÃO VENOSA MUITO LENTA. A ampola pura em bolus imediato gera acatisia (desespero neurológico incontrolável). Dilua em 10 mL de soro e empurre devagar em 3 a 5 minutos.'],
      es: ['INYECCIÓN VENOSA MUY LENTA. La ampolla pura en bolo inmediato genera acatisia (desesperación neurológica incontrolable). Diluya en 10 mL de suero y empuje despacio en 3 a 5 minutos.']
    },

    renalAdjustment: {
      required: true,
      message: { pt: 'Depurado pelos rins. ClCr < 40 mL/min: cortar a dose pela metade (5 mg) para evitar neurotoxicidade e parkinsonismo iatrogênico.', es: 'Depurado por los riñones. ClCr < 40 mL/min: cortar la dosis a la mitad (5 mg) para evitar neurotoxicidad y parkinsonismo iatrogénico.' }
    },

    hepaticAdjustment: {
      required: true,
      message: { pt: 'Uso cauteloso. Reduzir dose em cirrose severa pela metabolização parcial hepática.', es: 'Uso cauteloso. Reducir dosis en cirrosis severa por la metabolización parcial hepática.' }
    },

    commonAdverseEffects: {
      pt: ['Sonolência e fadiga profundas', 'Diarreia (pelo aumento do trânsito gastrointestinal)'],
      es: ['Somnolencia y fatiga profundas', 'Diarrea (por el aumento del tránsito gastrointestinal)']
    },

    dangerousAdverseEffects: {
      pt: ['Reações extrapiramidais (distonia cervical, acatisia, parkinsonismo medicamentoso)', 'Discinesia tardia (danos no SNC por uso prolongado acima de 12 semanas — pode ser IRREVERSÍVEL)', 'Aumento de prolactina e galactorreia'],
      es: ['Reacciones extrapiramidales (distonía cervical, acatisia, parkinsonismo medicamentoso)', 'Discinesia tardía (daños en el SNC por uso prolongado superior a 12 semanas — puede ser IRREVERSIBLE)', 'Aumento de prolactina y galactorrea']
    },

    contraindications: {
      absolute: { pt: ['Obstrução mecânica, perfuração ou hemorragia gastrointestinal', 'Doença de Parkinson ou história de convulsão', 'Feocromocitoma'], es: ['Obstrucción mecánica, perforación o hemorragia gastrointestinal', 'Enfermedad de Parkinson o historia de convulsión', 'Feocromocitoma'] },
      relative: { pt: ['Crianças menores de 1 ano', 'Uso concomitante com antipsicóticos'], es: ['Niños menores de 1 año', 'Uso concomitante con antipsicóticos'] }
    },

    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: false,
      warning: { pt: 'RESGATE DA DISTONIA: se o paciente torcer o pescoço e a mandíbula de forma involuntária (crise distônica) após o Plasil, não é convulsão. Administre prometazina (Fenergan) ou biperideno intramuscular para reverter imediatamente.', es: 'RESCATE DE LA DISTONÍA: si el paciente tuerce el cuello y la mandíbula de forma involuntaria (crisis distónica) tras el Plasil, no es convulsión. Administre prometazina (Fenergan) o biperideno intramuscular para revertir inmediatamente.' }
    },

    ref: 'FDA Drug Safety Communication Metoclopramide 2009 · Bateman DN. Aliment Pharmacol Ther 1999 · Pasricha PJ et al. Gastroenterology 2015 · Lexicomp 2026'
  }

]; /* fim window.GASTRO_DRUGS_DB */
