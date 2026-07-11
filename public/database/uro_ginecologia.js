/* =====================================================================
   MÓDULO DE EMERGÊNCIAS OBSTÉTRICAS E UROLOGIA (database/uro_ginecologia.js)

   BUILD 454 — Lote 1 (Inauguração Oficial do Módulo)
   ocitocina, carbetocina, misoprostol, metilergometrina, atosibana,
   tamsulosina, finasterida_urologia, oxibutinina, mirabegrona
   ── EMERGÊNCIAS OBSTÉTRICAS E UROLOGIA FUNCIONAL ──
   ===================================================================== */

(function () {
  'use strict';
  if (typeof window.URO_GINECOLOGIA_DRUGS_DB !== 'object' || window.URO_GINECOLOGIA_DRUGS_DB === null || Array.isArray(window.URO_GINECOLOGIA_DRUGS_DB)) {
    window.URO_GINECOLOGIA_DRUGS_DB = {};
  }
  if (typeof window.URO_GINECOLOGIA_DRUGS_DB !== 'object' || window.URO_GINECOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.URO_GINECOLOGIA_DRUGS_DB, {

  // ── EMERGÊNCIAS OBSTÉTRICAS E UROLOGIA FUNCIONAL ──

/* ── OCITOCINA (Uterotônico de Escolha) ──────────────────────────────── */
    "ocitocina": {
      name: { pt: 'Ocitocina', es: 'Ocitocina' },
      category: 'uro_ginecologia',
      class: { pt: 'Hormônio Uterotônico Sintético / Agonista do Receptor de Ocitocina', es: 'Hormona Uterotónica Sintética / Agonista del Receptor de Ocitocina' },
      indications: {
        pt: [
          'Prevenção sistemática da Hemorragia Pós-Parto (HPP) em todos os partos',
          'Tratamento da atonia uterina e hemorragia pós-parto estabelecida',
          'Indução ou condução médica do trabalho de parto por indicação clínica'
        ],
        es: [
          'Prevención activa de la Hemorragia Postparto (HPP)',
          'Tratamiento de la atonía uterina postparto',
          'Inducción o conducción del trabajo de parto'
        ]
      },
      commercialNames: { br: ['Syntocinon', 'Ocitocina (SUS)'], ar: ['Syntocinon', 'Ocitocina Richmond'] },
      presentation: {
        pt: ['Ampolas injetáveis IV/IM de 5 UI/mL e 10 UI/mL'],
        es: ['Ampollas inyectables IV/IM de 5 UI/1 mL y 10 UI/1 mL']
      },
      mechanism: {
        pt: 'O Indutor de Contração de Resgate. É o nonapeptídeo sintético idêntico ao hormônio liberado pela neuro-hipófise. Ele se liga aos receptores acoplados à proteína Gq nas células do miométrio (músculo do útero). Essa ligação dispara a abertura dos canais de Cálcio e força a liberação de cálcio intracelular, mimetizando contrações uterinas rítmicas e coordenadas, ideais para esmagar os vasos sanguíneos abertos do sítio placentário e estancar o sangramento.',
        es: 'Hormona sintética idéntica a la oxitocina endógena. Se une de forma selectiva a los receptores de oxitocina del miometrio acoplados a proteína Gq, incrementando los niveles de calcio intracelular. Esto desencadena contracciones uterinas rítmicas y sostenidas que colapsan los vasos sanguíneos del lecho placentario (ligaduras vivas de Pinard).'
      },
      dose: {
        adult: {
          pt: 'Prevenção de HPP: 10 UI via INTRAMUSCULAR imediata após a saída do bebê; ou 20 a 40 UI diluídas em 1.000 mL de Soro Fisiológico running IV a 150 mL/h. Tratamento de Atonia Uterina (Urgência): 5 UI via IV LENTA (3-5 min), seguido por manutenção de 20-40 UI em infusão contínua.',
          es: 'Prevención de HPP: 10 UI vía INTRAMUSCULAR post-salida del neonato, o 20-40 UI diluidas en 1.000 mL de solución fisiológica IV. Atonía Uterina Aguda: 5 UI vía IV LENTA (3-5 min) seguido de goteo continuo de mantenimiento.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['CRÍTICO: NUNCA ADMINISTRE OCITOCINA EM BOLUS INTRAVENOSO RÁPIDO. O bolus rápido causa relaxamento muscular liso vascular violento, jogando a paciente em hipotensão profunda severa, colapso cardiovascular com choque e parada cardíaca na mesa. Sempre infundir de forma lenta ou diluída.'],
        es: ['¡PROHIBIDO ADMINISTRAR EN BOLO INTRAVENOSO RÁPIDO! Provoca vasodilatación periférica masiva fulminante, hipotensión severa profunda, shock y paro cardíaco. Infundir lento o diluido.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, metabolizada por ocitocinases teciduais.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: {
        pt: ['Náuseas e vômitos imediatos', 'Cefaleia e rubor facial transitório', 'Taquicardia ou arritmia sinusal transitória'],
        es: ['Náuseas y vómitos', 'Cefalea y rubor facial', 'Taquicardia transitoria']
      },
      dangerousAdverseEffects: {
        pt: [
          'INTOXICAÇÃO POR ÁGUA COM HIPONATREMIA CONVULSIVA (devido ao seu efeito antidiurético idêntico à vasopressina se infundida em altas doses com soro glicosado por muitas horas)',
          'Hipotensão profunda fatal com choque cardiológico',
          'Ruptura uterina mecânica'
        ],
        es: [
          'INTOXICACIÓN POR AGUA / HIPONATREMIA DILUCIONAL (Efecto ADH-like con convulsiones y coma por sobrecarga de fluidos libres)',
          'Ruptura uterina'
        ]
      },
      contraindications: {
        absolute: {
          pt: ['Desproporção cefalopélvica severa, sofrimento fetal agudo antes do parto, hipertonia uterina mecânica, placenta prévia oclusiva total'],
          es: ['Desproporción cefalopélvica, sufrimiento fetal agudo anteparto, placenta previa total']
        },
        relative: { pt: ['Histórico de cesárea prévia múltipla ou cirurgia uterina reconstrutiva (alto risco de ruptura)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O PERIGO DO COMPRIMIDO DE SORO GLICOSADO (A CONVULSÃO DA OCITOCINA): A Ocitocina em altas doses imita o hormônio ADH e proíbe o corpo de urinar a água livre. Se o médico mantiver o gotejamento de Syntocinon por 12 horas seguidas usando Soro Glicosado 5% (sem sal), o cérebro da paciente "incha" por edema cerebral líquido. A paciente entra em convulsões severas por hiponatremia dilucional aguda na enfermaria. Monitore os eletrólitos.',
          es: 'ALERTA DE HIPONATREMIA AGUDA POR EFECTO ANTIDIURÉTICO: La oxitocina a dosis altas posee actividad agonista cruzada con los receptores V2 de vasopresina, induciendo retención masiva de agua. Evite su infusión prolongada en sueros hipotónicos (Glucosados sin sodio) ante riesgo de edema cerebral y convulsiones.'
        }
      },
      references: {
        pt: 'Diretrizes de Manejo da Hemorragia Pós-Parto da FEBRASGO / OMS; Manual de Obstetrícia de Emergência da Williams.',
        es: 'Guías de Manejo de la Hemorragia Postparto de la OMS; Directrices de la Sociedad Argentina de Ginecología y Obstetricia (SAGO).'
      }
    },

/* ── CARBETOCINA (Uterotônico de Longa Duração) ─────────────────────── */
    "carbetocina": {
      name: { pt: 'Carbetocina', es: 'Carbetocina' },
      category: 'uro_ginecologia',
      class: { pt: 'Análogo Sintético de Ocitocina de Longa Ação / Uterotônico de Alta Estabilidade', es: 'Análogo Sintético de Oxitocina de Larga Acción / Uterotónico de Alta Estabilidad' },
      indications: {
        pt: ['Prevenção da atonia uterina e da hemorragia pós-parto em mulheres submetidas a parto cesárea eletivo sob anestesia regional ou parto vaginal de alto risco'],
        es: ['Prevención de la atonía uterina post-cesárea programada bajo anestesia regional o parto vaginal de alto riesgo']
      },
      commercialNames: { br: ['Duratocin'], ar: ['Duratocin'] },
      presentation: {
        pt: ['Solução injetável IV/IM 100 mcg/mL (ampola com 1 mL)'],
        es: ['Ampollas inyectables IV/IM 100 mcg/1 mL']
      },
      mechanism: {
        pt: 'O Prolongador de Contrações. É um análogo sintético de longa duração da ocitocina. Sua modificação estrutural impede a clivagem pelas ocitocinases plasmáticas, aumentando sua meia-vida biológica em até 10 vezes em comparação com a ocitocina comum. Uma única injeção na veia promove contrações uterinas potentes imediatas que duram mais de 1 hora inteira, dispensando a necessidade de bombas de infusão contínua lentas no pós-operatório.',
        es: 'Agonista de larga acción del receptor de oxitocina miometrial. Su modificación estructural peptídica la blinda contra la degradación enzimática por oxitocinasas basales, prolongando su vida media. Una única dosis inyectada induce contracciones uterinas sostenidas por más de 60 minutos, eliminando la necesidad de goteos continuos.'
      },
      dose: {
        adult: {
          pt: 'Dose Única: 100 mcg (1 mL) via INTRAVENOSA lenta ao longo de exatamente 1 minuto, administrada imediatamente após a extração do bebê, preferencialmente antes da remoção da placenta na cesárea.',
          es: 'Dosis Única: 100 mcg (1 mL) vía INTRAVENOSA lenta en 1 minuto completo, inyectada inmediatamente tras el nacimiento del neonato.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['EXCLUSIVAMENTE INTRAVENOSA HOSPITALAR LENTA (Passar em 60 segundos cravados) ou Intramuscular profunda. É proibido fazer em bolus rápido devido ao risco de colapso circulatório idêntico ao da ocitocina comum.'],
        es: ['Inyección Intravenosa hospitalaria lenta en 1 minuto completo o IM profunda. Prohibido bolo rápido.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estruturado de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: {
        pt: ['Náuseas e eructações', 'Rubor facial com sensação de calor intenso', 'Hipotensão leve transitória e cefaleia', 'Tremor'],
        es: ['Náuseas y vómitos', 'Sofocos y rubor con calor cutáneo', 'Hipotensión transitoria y cefalea']
      },
      dangerousAdverseEffects: {
        pt: ['Hipotensão profunda severa com colapso miocárdico se injetado de forma rápida', 'Taquicardia sinusal excessiva arritmogênica'],
        es: ['Hipotensión severa refractaria por bolo veloz', 'Taquicardia severa']
      },
      contraindications: {
        absolute: {
          pt: [
            'Doenças cardiovasculares graves instáveis (Insuficiência coronariana crônica ativa, choque cardiogênico)',
            'Indução ou condução do parto antes da saída do bebê (PROIBIDO ANTES DO NASCIMENTO)'
          ],
          es: [
            'Enfermedades cardiovasculares graves previas',
            'Uso antes del nacimiento del bebé (Prohibido inducir parto con carbetocina)'
          ]
        },
        relative: { pt: ['Pacientes com distúrbios neurológicos com epilepsia ativa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A PROIBIÇÃO MÁXIMA ANTES DO PARTO: O Duratocin foi desenhado com potência prolongada EXCLUSIVAMENTE para o pós-parto (útero vazio). É terminantemente PROIBIDO injetar Carbetocina com o bebê ainda dentro do útero da mãe. Como o remédio trava o útero contraído por 1 hora sem parar, ele corta o oxigênio da placenta, causando morte e asfixia imediata do feto e ruptura uterina total.',
          es: 'CONTRAINDICACIÓN ABSOLUTA ANTES DEL PARTO: Queda terminantemente prohibido su uso para inducir o conducir el trabajo de parto con feto in utero. Su larga duración de acción provocaría una hipertonía uterina tetânica continua cortando el flujo placentario, causando muerte fetal y ruptura uterina.'
        }
      },
      references: {
        pt: 'CHAMPION Trial (Carbetocin vs Oxytocin in vaginal delivery - NEJM 2018); Manual de HPP da Federação Internacional de Ginecologia (FIGO).',
        es: 'CHAMPION Trial (NEJM 2018); Guías de la Federación Internacional de Ginecología y Obstetricia (FIGO).'
      }
    },

/* ── MISOPROSTOL (Prostaglandina Uterotônica) ───────────────────────── */
    "misoprostol": {
      name: { pt: 'Misoprostol', es: 'Misoprostol' },
      category: 'uro_ginecologia',
      class: { pt: 'Agonista Sintético de Prostaglandina E1 (PGE1) / Uterotônico e Indutor de Parto', es: 'Agonista Sintético de la Prostaglandina E1 (PGE1) / Uterotónico e Inductor' },
      indications: {
        pt: [
          'Tratamento de segunda linha da Hemorragia Pós-Parto por atonia uterina resistente à ocitocina',
          'Indução do parto em fetos vivos com colo uterino desfavorável (escore de Bishop baixo)',
          'Esvaziamento uterino em abortamento retido ou óbito fetal intrauterino'
        ],
        es: [
          'Tratamiento de rescate de la Hemorragia Postparto por atonía uterina resistente',
          'Inducción del parto con feto vivo y cuello desfavorable',
          'Maduración cervical y evacuación uterina en aborto retenido'
        ]
      },
      commercialNames: { br: ['Prostokos (Uso hospitalar restrito)', 'Cytotec (Uso restrito regulado)'], ar: ['Vagiprost', 'Misoprostol Beta', 'Oxaprost'] },
      presentation: {
        pt: ['Comprimidos vaginais ou orais de 25 mcg, 100 mcg e 200 mcg'],
        es: ['Comprimidos vaginales u orales de 25 mcg, 100 mcg y 200 mcg']
      },
      mechanism: {
        pt: 'O Amaciante de Colo e Ativador de Espasmo. É um análogo estável sintético da prostaglandina E1. Ele interage diretamente com os receptores prostanoides EP2 e EP3 do útero. Na indução do parto, ele degrada as redes de colágeno do colo do útero, "amaciando" e apagando o colo. No corpo do útero, ele abre as portas de cálcio das células miometrais provocando contrações potentes que expulsam o conteúdo ou comprimem vasos sangrantes na hemorragia.',
        es: 'Análogo sintético de la prostaglandina E1. Se une a los receptores prostanoides EP3 del miometrio, estimulando contracciones uterinas intensas, y a los receptores EP2 cervicales, activando las colagenasas que despolimerizan el tejido conectivo del cuello uterino, logrando su maduración ("ablandamiento") folicular.'
      },
      dose: {
        adult: {
          pt: 'Hemorragia Pós-Parto (Crise de Atonia): 800 mcg (4 comprimidos de 200 mcg) administrados por via RETAL profunda em dose única. Indução de Parto (Feto Vivo): 25 mcg via VAGINAL profunda a cada 4 a 6 horas (Dose máxima de 200 mcg/24h). Aborto Retido: 200 a 400 mcg via vaginal a cada 6h.',
          es: 'Hemorragia Postparto (Atonía): 800 mcg (4 comprimidos de 200 mcg) vía RECTAL profunda en dosis única de rescate. Inducción de Parto (Feto Vivo): 25 mcg vía VAGINAL profunda cada 4-6 horas.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['Uso hospitalar restrito com retenção de receita rígida. Na HPP, a via RETAL é a de escolha porque evita o vômito da paciente chocada e possui absorção rápida e contínua. Na indução de parto, os microcomprimidos são colocados no fundo de saco vaginal posterior sem lubrificantes que quebrem a pílula.'],
        es: ['Uso intrahospitalario estricto. En HPP, la vía RECTAL es preferida para evitar la emesis en la paciente en shock y asegurar absorción prolongada.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, eliminado na forma de metabólitos ácidos degradados.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sofre metabolismo de oxidação de ácidos graxos, sem ajuste estrito.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: {
        pt: [
          'CALAFRIOS VIOLENTOS E TREMORES DE CORPO INTEIRO (afeta > 60% das grávidas na dose de HPP)',
          'Febre alta transitória (hipertermia medicamentosa de até 39°C)',
          'Diarreia e vômitos'
        ],
        es: [
          'ESCALOFRÍOS INTENSOS Y TEMBLORES (Efecto térmico central muy frecuente)',
          'Fiebre alta medicamentosa transitoria (< 39°C)',
          'Diarrea'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'SÍNDROME DA HIPERESTIMULAÇÃO UTERINA (Taquisistolia uterina violenta com sofrimento fetal e parada cardíaca do bebê por asfixia)',
          'Ruptura uterina completa catastrófica com hemorragia interna abdominal'
        ],
        es: [
          'TAQUISISTOLIA UTERINA SEVERA (Hiperestimulación con hipoxia fetal y asfixia)',
          'Ruptura uterina completa con shock hipovolémico'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'Indução de parto em paciente com histórico de cicatriz de Cesárea Prévia ou miomectomia (risco extremo de rasgar o útero na cicatriz)',
            'Sofrimento fetal agudo em curso antes do parto'
          ],
          es: [
            'Inducción con feto vivo en pacientes con antecedente de CESÁREA PREVIA o cirugía uterina (Riesgo crítico de ruptura)',
            'Sufrimiento fetal'
          ]
        },
        relative: { pt: ['Multiparidade extrema (> 5 partos anteriores)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O SUSTO DOS CALAFRIOS E DA FEBRE DO MINUTO POSTERIOR: A aplicação de 800 mcg de Misoprostol retal na hemorragia pós-parto dispara o termostato do cérebro da paciente. Em 15 minutos, a paciente começa a tremer o corpo inteiro de forma violenta na cama e bate os dentes de frio, seguido de febre de 39°C. Não se assuste e acalme a enfermagem: não é infecção/sepse, é apenas um efeito colateral benigno térmico do remédio que some em poucas horas.',
          es: 'ALERTA DE HIPERTERMIA Y ESCALOFRÍOS: La dosis de 800 mcg rectal induce escalofríos intensos sacudidas y picos febriles de hasta 39,5°C en la primera hora debido al estímulo de prostaglandinas sobre el centro termorregulador hipotalámico. Es un cuadro BENIGNO transitorio; no lo confunda con sepsis puerperal.'
        }
      },
      references: {
        pt: 'ACOG Practice Bulletin on Postpartum Hemorrhage; Protocolo Nacional de Indução de Parto Ministério da Saúde do Brasil; FIGO Guide.',
        es: 'ACOG Practice Bulletin; Guías de Inducción del Parto de la Federación Argentina de Sociedades de Ginecología y Obstetricia (FASGO).'
      }
    },

/* ── METILERGOMETRINA (Alcaloide do Ergot HPP) ──────────────────────── */
    "metilergometrina": {
      name: { pt: 'Metilergometrina (Maleato de)', es: 'Metilergometrina (Maleato de)' },
      category: 'uro_ginecologia',
      class: { pt: 'Alcaloide do Ergot Uterotônico / Agonista Alfa-Adrenérgico e Serotoninérgico', es: 'Alcaloide del Ergot Uterotónico / Agonista Alfa-Adrenérgico y Serotoninérgico' },
      indications: {
        pt: [
          'Tratamento de terceira linha de hemorragia pós-parto por atonia uterina grave que falhou à ocitocina',
          'Manejo de hemorragia secundária após curetagem por aborto'
        ],
        es: [
          'Tratamiento de rescate en hemorragia postparto por atonía uterina resistente a oxitocina',
          'Subinvolución uterina post-aborto'
        ]
      },
      commercialNames: { br: ['Ergotrate'], ar: ['Metilergobasina', 'Ergonovina Beta'] },
      presentation: {
        pt: ['Ampolas injetáveis IM 0,2 mg/mL', 'Comprimidos orais 0,2 mg'],
        es: ['Ampollas inyectables IM 0,2 mg/1 mL', 'Comprimidos 0,2 mg']
      },
      mechanism: {
        pt: 'O Grampeador de Útero Adrenérgico. É um derivado semissintético do ergot. Ele atua ligando-se fortemente aos receptores Alfa-1 adrenérgicos e serotoninérgicos (5-HT2) do útero. Ele induz uma contração tetânica violenta, contínua e sem pausas (o útero vira uma pedra dura). Como o útero fica espremido sem relaxar, os vasos sangrantes são mecanicamente grampeados. Paralelamente, ele causa vasoconstrição em todas as artérias do corpo.',
        es: 'Derivado del cornezuelo de centeno. Incrementa el tono, frecuencia y amplitud de las contracciones uterinas mediante el agonismo de receptores alfa-1 adrenérgicos y serotoninérgicos 5-HT2. Induce una contracción tetánica sostenida (útero de madera) que ocluye mecánicamente los vasos sangrantes, provocando además vasoconstricción arterial periférica.'
      },
      dose: {
        adult: {
          pt: 'Crise de Hemorragia Hospitalar: 0,2 mg (1 ampola) via INTRAMUSCULAR profunda imediata. Pode repetir uma nova dose IM após 2 a 4 horas se necessário (máximo de 5 ampolas ao dia). Transição oral: 0,2 mg via oral, de 8/8 horas por no máximo 2 a 5 dias.',
          es: 'Urgencia Hemorrágica: 0,2 mg (1 ampolla) vía INTRAMUSCULAR profunda de inmediato. Puede repetirse cada 2-4 horas (Máx 5 dosis/día). Vía Oral: 0,2 mg cada 8 horas por 3 días.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['EXCLUSIVAMENTE VIA INTRAMUSCULAR PROFUNDA NA MATERNIDADE. É ABSOLUTAMENTE PROIBIDO APLICAR METILERGOMETRINA VIA INTRAVENOSA (IV) DIRETA DE ROTINA. A injeção na veia causa uma vasoconstrição cerebral e coronariana abrupta violenta, jogando a paciente em crise hipertensiva maligna e AVC na mesa de parto.'],
        es: ['EXCLUSIVAMENTE VÍA INTRAMUSCULAR PROFUNDA. ¡PROHIBIDA LA VÍA INTRAVENOSA DIRECTA! Su administración IV rápida gatilla vasoconstricción coronaria y cerebral masiva, provocando crisis hipertensiva maligna, infarto o ACV inmediato.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, mas monitorar eliminação em renais crônicos severos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado. Usar com muita cautela e monitorar em cirróticas devido ao risco aumentado de ergotismo vascular periférico.', es: 'Precaución en insuficiencia hepática por retraso metabólico.' } },
      commonAdverseEffects: {
        pt: ['AUMENTO DA PRESSÃO ARTERIAL (efeito vasoconstritor adrenérgico secundário)', 'Náuseas, vômitos e cefaleia pulsátil', 'Dor abdominal em cólica uterina severa'],
        es: ['ELEVACIÓN DE LA PRESIÓN ARTERIAL', 'Náuseas, vómitos y cefalea pulsátil', 'Dolor tipo cólico uterino intenso']
      },
      dangerousAdverseEffects: {
        pt: [
          'CRISE HIPERTENSIVA MALIGNA com edema agudo de pulmão',
          'Infarto Agudo do Miocárdio por espasmo de artéria coronária na mesa',
          'Ergotismo gangrenoso (isquemia e perda de dedos das mãos ou pés se uso prolongado)'
        ],
        es: [
          'CRISIS HIPERTENSIVA MALIGNA con edema pulmonar',
          'Espasmo coronario agudo con IAM',
          'Ergotismo gangrenoso periférico por vasoespasmo sostenido'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'PRÉ-ECLÂMPSIA, ECLÂMPSIA OU HIPERTENSÃO ARTERIAL CRÔNICA (Risco proibitivo de derrame/AVC e morte da mãe)',
            'Doença vascular coronariana ou arterial periférica obstrutiva severa',
            'Gravidez antes da saída do bebê'
          ],
          es: [
            'PREECLAMPSIA, ECLAMPSIA O HIPERTENSIÓN ARTERIAL (Contraindicación absoluta por riesgo de ACV hemorrágico)',
            'Enfermedad coronaria u oclusiva periférica'
          ]
        },
        relative: { pt: ['Uso associado com inibidores potentes de CYP3A4 (Claritromicina — dispara a toxicidade do ergot)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A CONTRAINDICAÇÃO MÁXIMA NA PRÉ-ECLÂMPSIA (NUNCA DÊ SE A PRESSÃO TIVER ALTA): O Ergotrate é um veneno para as artérias de mulheres hipertensas ou com pré-eclâmpsia de parto. Se a paciente estiver sangrando após o parto, mas a pressão dela estiver em 160x100 mmHg, risque a metilergometrina. Dar essa injeção joga a pressão para acima de 240 mmHg, fazendo a paciente sofrer convulsões, AVC hemorrágico ou infarto. Use Misoprostol.',
          es: 'CONTRAINDICACIÓN CRÍTICA EN HIPERTENSIÓN / PREECLAMPSIA: Jamás administre ergonovina a pacientes preeclámpticas o hipertensas crónicas. El potente efecto vasoconstrictor alfa-adrenérgico periférico dispara las cifras tensionales induciendo encefalopatía hipertensiva, hemorragia intracraneal letal o eclampsia.'
        }
      },
      references: {
        pt: 'WHO Recommendations for Prevention and Treatment of Postpartum Hemorrhage; Diretrizes de Emergências Obstétricas FEBRASGO; Manual de Cardiologia da Mulher.',
        es: 'Guías de Hemorragia Postparto de la OMS; Manual de Obstetricia de Williams; Ficha Técnica Ergotrate.'
      }
    },

/* ── ATOSIBANA (Tocolítico Antagonista de Ocitocina) ────────────────── */
    "atosibana": {
      name: { pt: 'Atosibana (Acetato de)', es: 'Atosibán (Acetato de)' },
      category: 'uro_ginecologia',
      class: { pt: 'Inibidor de Contração Uterina (Tocólitico) / Antagonista dos Receptores de Ocitocina', es: 'Inhibidor de la Contracción Uterina (Tocolítico) / Antagonista del Receptor de Oxitocina' },
      indications: {
        pt: ['Adiamento do parto prematuro iminente em mulheres grávidas que apresentem contrações coordenadas regulares com idade gestacional entre 24 e 33 semanas completas (Estratégia para ganhar tempo para maturação pulmonar com corticoide)'],
        es: ['Tocolisis / Retraso del parto prematuro inminente en gestantes entre las semanas 24 y 33 de gestación para permitir la maduración pulmonar fetal con corticoides']
      },
      commercialNames: { br: ['Tractocile'], ar: ['Tractocile', 'Atosiban Richmond'] },
      presentation: {
        pt: ['Frasco-ampola IV solução injetável de ataque 6,75 mg/0,9 mL', 'Frasco-ampola IV solução concentrada para infusão de manutenção 37,5 mg/5 mL'],
        es: ['Vial IV bolo de ataque 6,75 mg', 'Vial IV concentrado para infusión de mantenimiento 37,5 mg/5 mL']
      },
      mechanism: {
        pt: 'O Desligador de Contrações Cirúrgico. É um peptídeo sintético que atua como um antagonista competitivo seletivo dos receptores de ocitocina no miométrio. Ao se ligar nesse receptor, ele impede que a ocitocina endógena abra os canais de cálcio. A musculatura uterina relaxa de forma imediata e as contrações param de acontecer. Como foca apenas no útero, ele não mexe nos vasos do pulmão ou coração (diferença vital sobre o antigo Salbutamol ou Nifedipino), sendo o tocolítico mais seguro.',
        es: 'Peptido sintético que actúa como antagonista competitivo específico de los receptores de oxitocina en el miometrio y en el tejido mamario. Bloquea la liberación de calcio intracelular mediada por oxitocina, induciendo la relajación miometrial inmediata y deteniendo la dinámica uterina del parto prematuro sin efectos vasodilatadores sistémicos.'
      },
      dose: {
        adult: {
          pt: 'Protocolo Hospitalar de Três Etapas IV Infusão:\n- Etapa 1 (Bolo de Ataque): 6,75 mg via IV DIRETO lento em 1 minuto (usar o frasco de 0,9 mL).\n- Etapa 2 (Manutenção de Alta Dose): Infusão IV contínua na dose de 300 mcg/minuto (18 mg/h) por bomba de infusão ao longo de 3 horas consecutivas.\n- Etapa 3 (Manutenção de Baixa Dose): Reduzir o gotejamento na bomba para 100 mcg/minuto (6 mg/h) por até 45 horas adicionais. Curso total não deve passar de 48h.',
          es: 'Protocolo de Infusión IV en Tres Etapas (UTI Obstétrica):\n- Etapa 1 (Bolo Inicial): 6,75 mg IV directo en 1 minuto.\n- Etapa 2 (Carga continua): Infusión por bomba a razón de 300 mcg/minuto (18 mg/h) durante 3 horas.\n- Etapa 3 (Mantenimiento prolongado): Reducir a 100 mcg/minuto (6 mg/h) por bomba hasta completar un máximo de 45 horas.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['EXCLUSIVAMENTE INFUSÃO INTRAVENOSA HOSPITALAR CONTÍNUA EM MATERNIDADE DE ALTO RISCO. O bolo inicial de 6,75 mg é puro. A manutenção de 37,5 mg deve ser diluída retirando 10 mL de uma bolsa de 100 mL de Soro Fisiológico (SF) ou Ringer Lactato e injetando as duas ampolas concentradas de Tractocile dentro da bolsa antes de ligar o gotejamento na bomba de infusão contínua.'],
        es: ['Vía IV continua hospitalaria. Diluir el concentrado de mantenimiento de 37,5 mg en 100 mL de solución fisiológica e infundir mediante bomba automatizada. Duración total máxima del ciclo: 48 horas.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, eliminado por depuração metabólica tecidual.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: {
        pt: ['Náuseas leves pós-infusão', 'Cefaleia e tontura leve', 'Rubor facial localizado', 'Hiperglicemia discreta materna'],
        es: ['Náuseas', 'Cefalea y mareo', 'Rubor facial focal', 'Hiperglucemia transitoria']
      },
      dangerousAdverseEffects: {
        pt: [
          'Taquicardia materna severa reflexa (raro)',
          'Reação de hipersensibilidade infusional anafilática',
          'Atonia uterina de rebote sangrante imediato pós-parto caso o parto ocorra logo após a infusão'
        ],
        es: [
          'Edema pulmonar agudo (muy raro)',
          'Hipotensión o shock por hipersensibilidad infusional'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'Idade gestacional menor que 24 semanas ou maior que 33 semanas completas',
            'Ruptura prematura de membranas com infecção intrauterina ativa (Corioamnionite — o parto deve acontecer de urgência)',
            'Hemorragia uterina anteparto que exija parto imediato por descolamento de placenta'
          ],
          es: [
            'Edad gestacional < 24 semanas o > 33 semanas',
            'Corioamnionitis activa (Infección amniótica exige el nacimiento)',
            'Desprendimiento prematuro de placenta con hemorragia'
          ]
        },
        relative: { pt: ['Gestação múltipla (Gêmeos ou trigêmeos — exige vigilância estrita pulmonar)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O TOCOLÍTICO QUE PROTEGE O PULMÃO DA MÃE: Antigamente, usava-se o Salbutamol IV para parar contrações, mas ele causava arritmias violentas e Edema Agudo de Pulmão na grávida. O Tractocile (Atosibana) revolucionou a obstetrícia porque age feito um bisturi: desliga apenas os receptores do útero, mantendo o pulmão, os vasos e o coração da mãe 100% protegidos e limpos de efeitos colaterais cardiovasculares.',
          es: 'EL BENEFICIO BIOSEGURIDAD MATERNA: A diferencia de los agonistas beta-adrenérgicos (Salbutamol) o los bloqueantes de calcio (Nifedipina), el Atosibán carece de impacto hemodinámico sistémico. No provoca taquicardia severa ni riesgo de edema agudo de pulmón no cardiogénico, siendo el tocolítico más seguro en embarazos múltiples.'
        }
      },
      references: {
        pt: 'TREASURE Study (Atosiban efficacy in European preterm labor); Diretrizes de Parto Prematuro da FEBRASGO; Manual Williams Obstetrícia.',
        es: 'Worldwide Atosiban Study Group (TREASURE Trial); Guías de Amenaza de Parto Pretérmino de la FASGO.'
      }
    },

/* ── TAMSULOSINA (Alfa-1a Bloqueador Antiprostático) ────────────────── */
    "tamsulosina": {
      name: { pt: 'Tamsulosina (Cloridrato de)', es: 'Tamsulosina (Clorhidrato de)' },
      category: 'uro_ginecologia',
      class: { pt: 'Antagonista Seletivo dos Receptores Alfa-1a Adrenérgicos / Relaxante do Colo da Bexiga', es: 'Antagonista Selectivo de los Receptores Alfa-1a Adrenérgicos / Relajante del Cuello Vesical' },
      indications: {
        pt: [
          'Tratamento de sintomas urinários da Hiperplasia Prostática Benigna (HPB - jato urinário fraco, gotejamento, polaciúria)',
          'Tratamento auxiliar off-label para expulsão mecânica de cálculos renais ureterais distais menores de 10 mm (Terapia de Expulsão Médica)'
        ],
        es: [
          'Tratamiento de los síntomas obstructivos de la Hiperplasia Prostática Benigna (HPB)',
          'Terapia médica expulsiva de cálculos ureterales distales < 10 mm'
        ]
      },
      commercialNames: { br: ['Secotex', 'Combodart (Assoc)', 'Tansulon'], ar: ['Secotex', 'Omnic', 'Tamsulosina Beta'] },
      presentation: {
        pt: ['Cápsulas duras de liberação prolongada 0,4 mg'],
        es: ['Cápsulas de liberación prolongada 0,4 mg']
      },
      mechanism: {
        pt: 'O Abre-Portas da Uretra. Bloqueia de forma altamente competitiva e seletiva os receptores adrenérgicos tipo Alfa-1a (e Alfa-1d), que estão concentrados especificamente na próstata, no colo da bexiga e na uretra humana. Ao travar esses receptores, ele relaxa a musculatura lisa do canal urinário. O espaço abre, a uretra desentope e a urina desce livremente de forma imediata, sem causar a vasodilatação sistêmica violenta das artérias que causava o desmaio clássico com a doxazosina comum.',
        es: 'Antagonista selectivo postsináptico de los receptores alfa-1a adrenérgicos localizados en el músculo liso del cuello vesical, uretra prostática y cápsula de la próstata. Induce la relajación de la zona de salida de la vejiga, disminuyendo la resistencia al flujo urinario y mejorando el vaciamiento miccional de forma rápida.'
      },
      dose: {
        adult: {
          pt: '0,4 mg via oral, UMA VEZ ao dia, administrado obrigatoriamente cerca de 30 minutos após a mesma refeição todos os dias (geralmente após o café da manhã ou jantar). Uso contínuo crônico.',
          es: '0,4 mg vía oral, UNA VEZ al día, administrado obligatoriamente 30 minutos después de la misma comida del día de forma continua.'
        },
        pediatric: { pt: 'Uso contraindicado e não estabelecido na rotina pediátrica.', es: 'No recomendado en niños.' }
      },
      administration: {
        pt: ['Uso oral diário. As cápsulas de liberação controlada DEVEM ser engolidas INTEIRAS com água. É expressamente PROIBIDO abrir a cápsula, quebrar ou mastigar os microgrânulos internos. Destruir a cápsula joga a dose total de 0,4 mg de forma imediata na corrente sanguínea, causando hipotensão ortostática severa com síncope e tonturas violentas.'],
        es: ['Uso oral. Tragar las cápsulas enteras con agua tras el desayuno. ¡PROHIBIDO MASTICAR O ABRIR LA CÁPSULA! Rompe la matriz de liberación provocando una absorción masiva rápida con riesgo de síncope por caída tensional.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em insuficiência renal crônica leve ou moderada. Usar com cautela em ClCr < 10 mL/min.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado. Não requer ajuste em insuficiência leve ou moderada. Contraindicado em pacientes com cirrose hepática descompensada grave Child-Pugh C.', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C) por acumulación plasmática.' } },
      commonAdverseEffects: {
        pt: [
          'EJACULAÇÃO RETRÓGRADA (orgasmo seco: o sêmen volta para dentro da bexiga devido ao relaxamento do colo, afeta ~10% dos homens)',
          'Tontura leve postural e fadiga',
          'Congestão nasal (nariz entupido)',
          'Cefaleia'
        ],
        es: [
          'EYACULACIÓN RETRÓGRADA (Orgasmo seco por relajación del esfínter interno en el 10% de los varones)',
          'Mareo postural',
          'Congestión nasal'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'SÍNDROME DA ÍRIS FLÁCIDA INTRAOPERATÓRIA (IFIS: complicação cirúrgica grave durante a cirurgia de catarata ocular)',
          'Hipotensão ortostática profunda com síncope (desmaio ao levantar)'
        ],
        es: [
          'SÍNDROME DE IRIS FLÁCIDO INTRAOPERATORIO (IFIS - Riesgo crítico ciego durante la cirugía de catarata)',
          'Síncope ortostático'
        ]
      },
      contraindications: {
        absolute: {
          pt: ['Histórico de hipotensão ortostática documentada ou síncope vaso-vagal severa', 'Insuficiência hepática grave Child C'],
          es: ['Antecedente de hipotensión ortostática severa', 'Insuficiencia hepática grave']
        },
        relative: { pt: ['Uso associado com inibidores potentes de CYP3A4 (Cetoconazol dispara os níveis de tamsulosina — evitar)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'O PERIGO DA CIRURGIA DE CATARATA E O ORGASMO SECO: A Tamsulosina possui dois alertas importantes. Primeiro: ela relaxa tanto o colo da bexiga que na hora da ejaculação o sêmen vai para dentro da bexiga (Ejaculação retrógrada — inofensivo). Segundo: se o paciente for operar Catarata, DEVE avisar o oftalmologista. A íris do olho pode murchar e flutuar na cirurgia (Síndrome da Íris Flácida), podendo rasgar o cristalino.',
          es: 'ALERTA DE SÍNDROME DE IRIS FLÁCIDO (IFIS) Y ORGASMO SECO: El fármaco relaja el esfínter interno provocando eyaculación retrógrada (inofensivo). Además, si el paciente se va a operar de Cataratas, DEBE suspender el fármaco e informar al cirujano por riesgo de iris flácido intraoperatorio con ceguera quirúrgica.'
        }
      },
      references: {
        pt: 'MTOPS Trial (Medical Therapy of Prostatic Symptoms); FDA Ophthalmologic Safety Alerts on Tamsulosin; Diretrizes de HPB da Sociedade Brasileira de Urologia (SBU).',
        es: 'MTOPS Trial; Ficha Técnica Omnic CIMA; Guías de Tratamiento de la Hiperplasia Prostática Benigna de la Sociedad Argentina de Urología (SAU).'
      }
    },

/* ── FINASTERIDA (Inibidor 5-Alfa-Redutase) ─────────────────────────── */
    "finasterida_urologia": {
      name: { pt: 'Finasterida (Uso na Urologia)', es: 'Finasterida (Uso en Urología)' },
      category: 'uro_ginecologia',
      class: { pt: 'Inibidor de 5-Alfa-Redutase Tipo II / Agente Redutor de Volume Prostático', es: 'Inhibidor de la 5-Alfa-Reductasa Tipo II / Agente Reductor de Volumen Prostático' },
      indications: {
        pt: ['Tratamento e controle da Hiperplasia Prostática Benigna (HPB) em homens com próstata aumentada para reduzir o tamanho do órgão, melhorar o fluxo miccional e diminuir o risco de retenção urinária aguda e necessidade de cirurgia (Dose de 5 mg)'],
        es: ['Tratamiento de la Hiperplasia Prostática Benigna (HPB) con próstata aumentada para reducir el tamaño glandular, mejorar el flujo y prevenir retención aguda (Dosis 5 mg)']
      },
      commercialNames: { br: ['Proscar', 'Finasterida 5mg (SUS)', 'Propecia (Dose 1mg para calvície)'], ar: ['Proscar', 'Chibro-Proscar', 'Finasterina DOSA'] },
      presentation: {
        pt: ['Comprimidos revestidos de 5 mg (uso urológico) e 1 mg (uso capilar/alopecia)'],
        es: ['Comprimidos revestidos de 5 mg y 1 mg']
      },
      mechanism: {
        pt: 'O Encolhedor de Próstata Genético. A Finasterida é um composto 4-azasteroide sintético. Ela inibe de forma competitiva e específica a enzima intracelular 5-Alfa-Redutase Tipo II. Esta enzima é a responsável por transformar a Testosterona comum no hormônio super-potente Di-hidrotestosterona (DHT) dentro da próstata. Ao cortar o DHT em mais de 70%, o estímulo de crescimento da glândula cessa. A próstata começa a atrofiar e encolhe em até 25% do seu tamanho real, liberando a uretra espremida a longo prazo.',
        es: 'Inhibidor competitivo específico de la enzima intracelular 5-alfa-reductasa tipo II, la cual metaboliza la testosterona circulante hacia su andrógeno activo tisular más potente, la Dihidrotestosterona (DHT). Al bloquear la síntesis de DHT intraprostática, induce la atrofia del tejido epitelial glandular, reduciendo el volumen prostático global un 25%.'
      },
      dose: {
        adult: {
          pt: 'Dose Urológica Padrão: 5 mg via oral, UMA VEZ ao dia, a qualquer hora do dia, independente das refeições. O tratamento deve ser contínuo por pelo menos 6 meses para que a próstata comece a encolher de forma clinicamente visível.',
          es: 'Dosis urológica: 5 mg vía oral, UNA VEZ al día de forma continua e indefinida. Requiere un mínimo de 6 meses de toma continua para manifestar reducción del tamaño prostático.'
        },
        pediatric: { pt: 'Uso contraindicado e proscrito em pediatria.', es: 'Contraindicado.' }
      },
      administration: {
        pt: ['Uso oral diário. Pode ser tomado com ou sem alimentos. ATENÇÃO MÁXIMA PARA MULHERES GRÁVIDAS: Elas não devem sequer MANIPULAR ou tocar em comprimidos esmagados ou partidos de Finasterida, devido ao risco crítico de absorção percutânea do pó do esteroide.'],
        es: ['Uso oral. Las mujeres embarazadas o en edad fértil NO deben manipular ni tocar comprimidos partidos o triturados por riesgo de absorción transdérmica androgénica fetal.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose em renais crônicos ou em hemodiálise.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizada intensamente no fígado. Usar com cautela em pacientes com insuficiência hepática leve ou moderada.', es: 'Precaución en insuficiencia hepática por alto aclaramiento esteroideo.' } },
      commonAdverseEffects: {
        pt: [
          'DISFUNÇÃO ERÉTIL E PERDA DE LIBIDO (afeta ~8% dos homens devido à queda de andrógenos)',
          'Diminuição do volume do sêmen ejaculado',
          'Ginecomastia e sensibilidade dolorosa nas mamas masculinas'
        ],
        es: [
          'DISFUNCIÓN ERÉCTIL Y DISMINUCIÓN DE LA LIBIDO (~8% de los pacientes)',
          'Disminución del volumen eyaculado',
          'Ginecomastia y dolor mamario masculino'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'Aumento discreto do risco estatístico de câncer de próstata de alto grau (Gleason 8-10) — vigiar laboratório',
          'Depressão persistente exógena profunda (Síndrome Pós-Finasterida)'
        ],
        es: [
          'Riesgo teórico aumentado de cáncer de próstata de alto grado (Gleason 8-10)',
          'Síndrome Post-Finasteride (depresión y disfunción eréctil persistente al suspender)'
        ]
      },
      contraindications: {
        absolute: {
          pt: ['Mulheres grávidas ou em idade fértil com risco de gestação ativa', 'Hipersensibilidade conhecida à finasterida'],
          es: ['EMBARAZO (Contraindicación absoluta por feminización del feto varón)', 'Hipersensibilidad conocida al fármaco']
        },
        relative: { pt: ['Pacientes com sintomas obstrutivos urinários severos com resíduo miccional imenso (exige cirurgia rápida desobstrutiva, não remédios lentos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'A GRAVIDEZ DA ESPOSA E O FETO MASCULINO DEFORMADO: A Finasterida é um bloqueador de hormônios masculinos potente. Se a esposa grávida de um paciente tocar em um comprimido de finasterida partido e o pó entrar na pele dela, a droga invade o sangue e impede os órgãos genitais de um feto masculino de crescerem. O menino nasce com malformações genitais severas (Pseudo-hermafroditismo / feminilização fetal). Avise o paciente.',
          es: 'ALERTA DE TERATOGENICIDAD EXTREMA POR CONTACTO: Si una mujer embarazada entra en contacto percutáneo con el polvo de comprimidos partidos de finasterida, el fármaco bloquea el desarrollo de los genitales externos del feto varón (induce pseudohermafroditismo o feminización fetal). Mantener fuera del alcance de mujeres.'
        }
      },
      references: {
        pt: 'PLESS Trial (Proscar Long-Term Urological Sequelea Study - NEJM 1998); FDA Alerts on PSA masking and High-grade Prostate Cancer; Diretrizes SBU.',
        es: 'PLESS Landmark Trial (NEJM 1998); FDA Clinical Warnings; Guías de Hiperplasia Prostática de la Sociedad Argentina de Urología.'
      }
    },

/* ── OXIBUTININA (Anticolinérgico Urinário) ─────────────────────────── */
    "oxibutinina": {
      name: { pt: 'Oxibutinina (Cloridrato de)', es: 'Oxibutinina (Clorhidrato de)' },
      category: 'uro_ginecologia',
      class: { pt: 'Antiespasmódico Urinário / Antagonista dos Receptores Muscarínicos Não-Seletivo', es: 'Antiespasmódico Urinario / Antagonista de los Receptores Muscarínicos No Selectivo' },
      indications: {
        pt: [
          'Tratamento da Bexiga Hiperativa com sintomas de incontinência urinária de urgência, urgência miccional e polaciúria em adultos',
          'Hiperidrose palmar ou axilar off-label (controle do suor excessivo)',
          'Bexiga neurogênica espástica'
        ],
        es: [
          'Tratamiento de la Vejiga Hiperactiva (Incontinencia de urgencia, tenesmo vesical y frecuencia aumentada)',
          'Hiperhidrosis severa palmar o axilar (Uso off-label)'
        ]
      },
      commercialNames: { br: ['Retemic', 'Retemic UD (Liberação prolongada)'], ar: ['Retemic', 'Deluran', 'Mutum'] },
      presentation: {
        pt: ['Comprimidos simples 5 mg', 'Comprimidos de liberação prolongada 10 mg (Retemic UD)', 'Xarope / Solução oral 1 mg/mL'],
        es: ['Comprimidos 5 mg', 'Comprimidos de liberación prolongada 10 mg', 'Jarabe 1 mg/mL']
      },
      mechanism: {
        pt: 'O Paralisador do Músculo Detrusor. É um agente anticolinérgico potente de ação direta. Ele atua bloqueando de forma competitiva os receptores muscarínicos colinérgicos tipo M1, M2 e M3 localizados na musculatura lisa do músculo detrusor da bexiga. Ao travar a acetilcolina ali, ele paralisa os espasmos e as contrações involuntárias da bexiga, aumentando a capacidade física de armazenamento de urina do órgão e eliminando a urgência miccional desesperada.',
        es: 'Antagonista competitivo no selectivo de los receptores colinérgicos muscarínicos (M1, M2 y M3). Ejerce un efecto espasmolítico directo sobre el músculo detrusor de la vejiga, bloqueando las contracciones involuntarias vesicales prematuras, aumentando la capacidad de retención y disminuyendo el tenesmo.'
      },
      dose: {
        adult: {
          pt: 'Comprimidos convencionais: 5 mg via oral, DUAS a TRÊS vezes ao dia (de 12/12h ou 8/8h). Versão de liberação prolongada (UD): 10 mg via oral, UMA VEZ ao dia, pela manhã. Titular com cautela em idosos (máximo de 20 mg/dia).',
          es: 'Comprimidos estándar: 5 mg vía oral, DOS o TRES VECES al día. Liberación prolongada (UD): 10 mg vía oral, UNA VEZ al día por la mañana. Máx 20 mg/día.'
        },
        pediatric: {
          pt: 'Crianças > 5 anos (Bexiga Neurogênica / Enurese noturna rebelde): 5 mg via oral, duas vezes ao dia (de 12/12h).',
          es: 'Niños > 5 años con vejiga neurogénica o enuresis nocturna refractaria: 5 mg vía oral cada 12 horas.'
        }
      },
      administration: {
        pt: ['Uso oral. Os comprimidos normais podem ser partidos. As formulações de liberação prolongada (UD) devem ser engolidas inteiras, sem mastigar. Pode ser administrado com ou sem comida.'],
        es: ['Uso oral. Las presentaciones UD de liberación prolongada no deben partirse ni masticarse bajo ningún concepto.']
      },
      renalAdjustment: { required: false, message: { pt: 'Mínima eliminação renal de droga inalterada, sem necessidade de ajuste estrito, monitorar tolerabilidade anticolinérgica.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado pela via CYP3A4 em metabólito ativo desetiloxibutinina (responsável pela alta taxa de boca seca). Usar com cautela em hepatopatias graves.', es: 'Precaución en insuficiencia hepática grave por metabolismo de primer paso.' } },
      commonAdverseEffects: {
        pt: [
          'BOCA SECA EXTREMA (efeito colateral master que afeta > 75% dos usuários, levando muitos a abandonarem o tratamento)',
          'Constipação intestinal marcada (trava o intestino)',
          'Visão borrada para perto (cicloplegia/midríase)',
          'Retenção urinária leve e sonolência'
        ],
        es: [
          'BOCA SECA EXTREMA (Efecto adverso limitante muy frecuente en el 75% de los casos)',
          'Estreñimiento severo',
          'Visión borrosa por falta de acomodación ocular',
          'Somnolencia'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'DELÍRIO E CONFUSÃO MENTAL AGUDA EM IDOSOS (Síndrome Anticolinérgica Central com perda de memória, alucinações e risco de quedas)',
          'Crise de Glaucoma de Ângulo Fechado Agudo (urgência oftalmológica com cegueira por pico de pressão no olho)'
        ],
        es: [
          'DELIRIO Y CONFUSIÓN MENTAL AGUDA EN ANCIANOS (Demencia reversible anticolinérgica central con alucinaciones)',
          'Crisis de Glaucoma de Ángulo Cerrado Agudo'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'GLAUCOMA DE ÂNGULO FECHADO NÃO TRATADO (Veto absoluto, causa cegueira imediata por pico de pressão ocular)',
            'Retenção urinária mecânica completa ativa (bexiga cheia travada)',
            'Megacólon tóxico ou íleo paralítico'
          ],
          es: [
            'GLAUCOMA DE ÁNGULO CERRADO NO CONTROLADO (Prohibido por riesgo de ceguera por hipertensión ocular)',
            'Retención urinaria obstructiva completa',
            'Atonía intestinal'
          ]
        },
        relative: { pt: ['Idosos com comprometimento cognitivo leve ou demência de Alzheimer estabelecida'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'O DESENCADEAMENTO DE DEMÊNCIA APARENTE EM IDOSOS: A Oxibutinina atravessa a barreira hematoencefálica com facilidade e bloqueia a acetilcolina no cérebro de idosos. Se você prescrever Retemic para uma vovó tratar incontinência urinária, em poucos dias ela pode começar a esquecer as coisas, ver bichos na parede (alucinação) e ficar confusa. O clínico confunde isso com Alzheimer. Suspenda o Retemic e mude para a Mirabegrona.',
          es: 'EL PELIGRO DEL DELIRIO ANTICOLINÉRGICO EN ANCIANOS: Cruza la barrera hematoencefálica y bloquea los receptores colinérgicos centrales indispensables para la memoria. Su uso en adultos mayores gatilla cuadros de confusión mental aguda, pérdida de memoria y alucinaciones que simulan demencia. Evite su uso en geriatría.'
        }
      },
      references: {
        pt: 'Beer Criteria for Potentially Inappropriate Medication Use in Older Adults; Guidelines de Incontinência Urinária SBU; Manual Lexicomp.',
        es: 'Criterios de Beers para medicamentos inapropiados en ancianos; Ficha Técnica CIMA Oxibutinina; Guías de la Sociedad Argentina de Urología.'
      }
    },

/* ── MIRABEGRONA (Agonista Beta-3 Bexiga) ───────────────────────────── */
    "mirabegrona": {
      name: { pt: 'Mirabegrona', es: 'Mirabegrón' },
      category: 'uro_ginecologia',
      class: { pt: 'Antiespasmódico Urinário / Agonista Seletivo dos Receptores Beta-3 Adrenérgicos', es: 'Antiespasmódico Urinario / Agonista Selectivo de los Receptores Beta-3 Adrenérgicos' },
      indications: {
        pt: ['Tratamento da Síndrome da Bexiga Hiperativa em adultos (Droga moderna preferida de escolha para idosos porque NÃO causa boca seca e NÃO afeta o cérebro / zero delírio)'],
        es: ['Tratamiento de la Vejiga Hiperactiva en adultos (Fármaco de elección en geriatría por carecer de efectos secundarios anticolinérgicos centrales)']
      },
      commercialNames: { br: ['Betmiga'], ar: ['Betmiga', 'Mirabegrón Beta'] },
      presentation: {
        pt: ['Comprimidos de liberação prolongada 25 mg e 50 mg'],
        es: ['Comprimidos de liberación prolongada 25 mg y 50 mg']
      },
      mechanism: {
        pt: 'O Relaxador Adrenérgico da Bexiga. Diferente da Oxibutinina (que paralisa travando a acetilcolina), a Mirabegrona atua ativando de forma potente e seletiva os receptores Beta-3 adrenérgicos presentes nas células do músculo detrusor da bexiga. O estímulo Beta-3 relaxa o músculo detrusor de forma fisiológica durante a fase de enchimento. A bexiga estica mais, cabe mais urina e as contrações involuntárias somem sem tocar em nenhuma via colinérgica.',
        es: 'Agonista potente y altamente selectivo de los receptores adrenérgicos Beta-3 en el músculo detrusor vesical. La activación Beta-3 mimetiza la relajación simpática normal de la vejiga durante la fase de llenado, aumentando la capacidad vesical y espaciando las micciones involuntarias sin efectos adversos anticolinérgicos.'
      },
      dose: {
        adult: {
          pt: 'Dose Padrão: 50 mg via oral, UMA VEZ ao dia, a qualquer hora do dia, com ou sem alimentos. Pacientes com insuficiência renal ou hepática moderada devem usar a dose reduzida de 25 mg ao dia.',
          es: 'Dosis estándar: 50 mg vía oral, UNA VEZ al día. En insuficiencia renal o hepática moderada, la dosis máxima permitida es de 25 mg al día.'
        },
        pediatric: { pt: 'Uso não recomendado ou aprovado em menores de 18 anos.', es: 'No recomendado en niños.' }
      },
      administration: {
        pt: ['Uso oral de tomada única diária. Os comprimidos devem ser engolidos INTEIROS com um copo de água. É proibido mastigar, quebrar ou triturar o comprimido Betmiga, pois destrói o sistema de matriz de liberação controlada de 24 horas. OBRIGATÓRIO aferir a pressão arterial antes de iniciar.'],
        es: ['Uso oral diario. Tragar entero sin masticar ni triturar. Es MANDATORIO controlar la presión arterial antes y durante el tratamiento.']
      },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr entre 15-29 mL/min, a dose máxima permitida é de 25 mg via oral ao dia. Se ClCr < 15 mL/min ou diálise: ABSOLUTAMENTE CONTRAINDICADA por falta de dados de segurança.', es: 'Si ClCr 15-29 mL/min, dosis máxima de 25 mg al día. Contraindicado si ClCr < 15 o diálisis.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Se insuficiência hepática moderada (Child-Pugh B), dose máxima restrita a 25 mg ao dia. ABSOLUTAMENTE CONTRAINDICADA na insuficiência grave Child-Pugh C.', es: 'Dosis máxima de 25 mg/día en Child-Pugh B. Contraindicado en insuficiencia hepática grave Child C.' } },
      commonAdverseEffects: {
        pt: [
          'AUMENTO DA PRESSÃO ARTERIAL SISTÊMICA (pode subir a PA de forma crônica por estímulo adrenérgico periférico secundário)',
          'Taquicardia sinusal e palpitações',
          'Cefaleia e nasofaringite',
          'Constipação leve'
        ],
        es: [
          'ELEVACIÓN DE LA PRESIÓN ARTERIAL CRÓNICA',
          'Taquicardia sinusal y palpitaciones',
          'Cefalea',
          'Estreñimiento leve'
        ]
      },
      dangerousAdverseEffects: {
        pt: [
          'CRISE HIPERTENSIVA AGUDA SEVERA (emergência médica em hipertensos graves não controlados)',
          'Fibrilação Atrial e arritmias cardíacas supraventriculares (raro)'
        ],
        es: [
          'CRISIS HIPERTENSIVA AGUDA (Emergencia médica cardiovascular)',
          'Desencadenamiento de Fibrilación Auricular'
        ]
      },
      contraindications: {
        absolute: {
          pt: [
            'HIPERTENSÃO ARTERIAL SEVERA NÃO CONTROLADA (Pressão Sistólica >= 180 mmHg ou Diastólica >= 110 mmHg — Risco proibitivo de pico e AVC)',
            'Insuficiência hepática grave Child C ou renal terminal sem diálise'
          ],
          es: [
            'HIPERTENSIÓN ARTERIAL SEVERA NO CONTROLADA (PA >= 180/110 mmHg por riesgo inminente de evento cerebrovascular)',
            'Falla hepática Child C'
          ]
        },
        relative: { pt: ['Uso associado com Digoxina (a mirabegrona eleva os níveis de digoxina no sangue — exige reduzir dose da digoxina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'O ESPASMO ADRENÉRGICO VASCULAR (O ALERTA DA PRESSÃO ALTA): A Mirabegrona é maravilhosa para tratar a bexiga do idoso sem secar a boca ou causar confusão mental. Porém, como ela é um estimulante adrenérgico, ela pode subir a pressão das artérias de forma severa. É PROIBIDO prescrever Betmiga se o paciente estiver com a hipertensão descontrolada (PA acima de 180x110 mmHg); risco de induzir um AVC hemorrágico agudo.',
          es: 'CONTRAINDICACIÓN CRÍTICA EN HIPERTENSIÓN DESCONTROLADA: Debido a que ejerce un estímulo simpaticomimético adrenérgico secundario en vasos periféricos, puede elevar severamente la presión arterial. Queda contraindicado su uso si las cifras basales superan los 180/110 mmHg ante riesgo de desatar un accidente cerebrovascular hemorrágico.'
        }
      },
      references: {
        pt: 'SCORPIO Trial (Mirabegron vs Tolterodine in Overactive Bladder); Efficacy and Safety Reports of European Urology; Bula Betmiga.',
        es: 'SCORPIO Trial (European Urology 2013); Ficha Técnica Betmiga (Agencia Europea de Medicamentos); Guías de la SAU.'
      }
    }

  }); /* fim Object.assign URO_GINECOLOGIA_DRUGS_DB — BUILD 454 (ocitocina + carbetocina + misoprostol + metilergometrina + atosibana + tamsulosina + finasterida_urologia + oxibutinina + mirabegrona — Emergências Obstétricas e Urologia Funcional) */
})();
