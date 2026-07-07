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
  }

]; /* fim window.GASTRO_DRUGS_DB */
