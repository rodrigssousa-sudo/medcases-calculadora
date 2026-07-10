/* ============================================================
   MedCases Pro — Módulo: NEUROLOGIA — Antimigranosos (Triptanos)
   Expõe: window.NEUROLOGIA_DRUGS_DB
   Schema: Object-DB {chave: {name, dose, mechanism, safetyFlags, ...}}
   BUILD 396 — Lote 1: Sumatriptana · Zolmitriptana · Rizatriptana
                        Naratriptana · Eletriptana
   Categoria: neurologia
   Motor lógico: "Regra das 24 Horas" (ergotaminas × triptanos)
                 Espasmo coronariano (highAlertMedication)
                 Rizatriptana × Propranolol (dose obrigatória de 5 mg)
============================================================ */
(function () {
  if (typeof window.NEUROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) {
    window.NEUROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── SUMATRIPTANA ───────────────────────────────────────────────────── */
    "sumatriptana": {
      name: { pt: 'Sumatriptana', es: 'Sumatriptán' },
      category: 'neurologia',
      class: { pt: 'Agonista do Receptor de Serotonina 5-HT1B/1D (Triptano)', es: 'Agonista del Receptor de Serotonina 5-HT1B/1D (Triptano)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Tratamento AGUDO de crises de Enxaqueca (com ou sem aura)', 'Cefaleia em Salvas agudizada (uso subcutâneo)'],
        es: ['Tratamiento AGUDO de crisis de Migraña (con o sin aura)', 'Cefalea en Racimos agudizada (uso subcutáneo)']
      },
      commercialNames: { br: ['Sumax', 'Imigran'], ar: ['Imigran'] },
      presentation: {
        pt: ['Comprimidos 50 mg e 100 mg', 'Injeção Subcutânea 6 mg/0,5mL', 'Spray Nasal 20 mg/dose'],
        es: ['Comprimidos 50 mg y 100 mg', 'Inyección Subcutánea 6 mg/0,5mL', 'Spray Nasal 20 mg/dosis']
      },
      mechanism: {
        pt: 'O Pioneiro. Durante a enxaqueca, os vasos sanguíneos do cérebro dilatam e o nervo trigêmeo inflama. A Sumatriptana imita a serotonina e ativa apenas os receptores 5-HT1B/1D cranianos. Isso causa uma VASOCONSTRIÇÃO forte das artérias cerebrais (apertando o vaso) e bloqueia a liberação de neuropeptídeos da dor (CGRP e Substância P). O sangue volta a fluir normal e a dor some.',
        es: 'El Pionero. Durante la migraña, los vasos cerebrales se dilatan y el nervio trigémino se inflama. El Sumatriptán imita a la serotonina y activa los receptores 5-HT1B/1D craneales. Esto causa una VASOCONSTRICCIÓN fuerte de las arterias (apretando el vaso) y bloquea la liberación de neuropéptidos de dolor. La sangre vuelve a fluir normal.'
      },
      dose: {
        adult: {
          pt: 'Oral: 50 a 100 mg logo no início da dor (Pode repetir em 2h se a dor voltar, Máx 200mg/dia). Subcutânea: 6 mg (Ação fulminante em 10 min).',
          es: 'Oral: 50 a 100 mg al inicio del dolor (Puede repetir en 2h si el dolor vuelve, Máx 200mg/día). Subcutánea: 6 mg (Acción fulminante en 10 min).'
        },
        pediatric: {
          pt: 'Uso oral geralmente não recomendado < 18 anos, mas o Spray Nasal pode ser usado off-label em adolescentes severos.',
          es: 'Uso oral generalmente no recomendado < 18 años, pero el Spray Nasal puede usarse off-label en adolescentes.'
        }
      },
      administration: {
        pt: ['Quanto mais cedo tomar na crise, melhor. Não serve para "prevenir" a enxaqueca.'],
        es: ['Cuanto más temprano tome en la crisis, mejor. No sirve para "prevenir" la migraña.']
      },
      renalAdjustment: {
        required: false,
        message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' }
      },
      hepaticAdjustment: {
        required: true,
        message: {
          pt: 'Em insuficiência hepática leve a moderada, não ultrapassar 50 mg via oral. Contraindicado na insuficiência grave.',
          es: 'En insuficiencia hepática leve a moderada, no superar 50 mg vía oral. Contraindicado en grave.'
        }
      },
      commonAdverseEffects: {
        pt: ['"Sensação de Triptano" (aperto, pressão, peso e formigamento no pescoço, mandíbula e peito logo após tomar)', 'Rubor facial (calorão) e tontura'],
        es: ['"Sensación de Triptano" (apriete, presión, peso y hormigueo en el cuello, mandíbula y pecho)', 'Rubor facial (calor) y mareo']
      },
      dangerousAdverseEffects: {
        pt: ['VASOESPASMO CORONARIANO (Infarto agudo do miocárdio causado pela contração das artérias do coração)', 'Acidente Vascular Cerebral isquêmico (Raro)'],
        es: ['VASOESPASMO CORONARIO (Infarto agudo de miocardio causado por la contracción de arterias del corazón)', 'Accidente Cerebrovascular isquémico (Raro)']
      },
      contraindications: {
        absolute: {
          pt: ['Doença Isquêmica do Coração (Infarto prévio, Angina)', 'Hipertensão Arterial não controlada', 'Enxaqueca Hemiplégica ou Basilar'],
          es: ['Enfermedad Isquémica del Corazón (Infarto previo, Angina)', 'Hipertensión Arterial no controlada', 'Migraña Hemipléjica o Basilar']
        },
        relative: {
          pt: ['Tabagistas pesados ou mulheres > 40 anos com múltiplos fatores de risco cardiovascular'],
          es: ['Fumadores pesados o mujeres > 40 años con múltiples factores de riesgo cardiovascular']
        }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
        antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O SUSTO NO PEITO: Alerte o paciente de que, 20 minutos após tomar o remédio, ele pode sentir um aperto assustador na garganta e no peito (A Triptan Sensation). Se ele não for cardiopata, explique que isso é apenas um espasmo muscular passageiro e inofensivo no esôfago, não um infarto.',
          es: 'EL SUSTO EN EL PECHO: Alerte al paciente que puede sentir un apriete aterrador en la garganta y pecho. Si no es cardiópata, explique que es solo un espasmo muscular pasajero e inofensivo en el esófago, no un infarto.'
        }
      }
    },

    /* ── ZOLMITRIPTANA ──────────────────────────────────────────────────── */
    "zolmitriptana": {
      name: { pt: 'Zolmitriptana', es: 'Zolmitriptán' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano de 2ª Geração)', es: 'Agonista 5-HT1B/1D (Triptano de 2ª Generación)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Tratamento agudo de Enxaqueca com ou sem aura'],
        es: ['Tratamiento agudo de Migraña con o sin aura']
      },
      commercialNames: { br: ['Zomig'], ar: ['Zomig'] },
      presentation: {
        pt: ['Comprimidos revestidos 2,5 mg', 'Comprimidos ODT (Desintegração Oral rápida) 2,5 mg'],
        es: ['Comprimidos recubiertos 2,5 mg', 'Comprimidos ODT (Desintegración Oral rápida) 2,5 mg']
      },
      mechanism: {
        pt: 'Triptano de segunda geração. É muito mais lipofílico (solúvel em gordura) que a Sumatriptana. Por isso, a Zolmitriptana atravessa a Barreira Hematoencefálica com incrível facilidade e rapidez, atingindo os nervos do trigêmeo diretamente no cérebro e promovendo o fim da dor muito mais rápido via oral.',
        es: 'Triptano de segunda generación. Es mucho más lipofílico (soluble en grasa) que el Sumatriptán. Por eso, el Zolmitriptán atraviesa la Barrera Hematoencefálica con increíble facilidad, alcanzando los nervios del trigémino directamente en el cerebro.'
      },
      dose: {
        adult: {
          pt: '2,5 mg assim que iniciar a dor. Se a enxaqueca retornar, pode tomar mais 2,5 mg após 2 horas. Máximo de 10 mg/dia.',
          es: '2,5 mg tan pronto inicie el dolor. Si la migraña vuelve, puede tomar más 2,5 mg tras 2 horas. Máximo de 10 mg/día.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Os comprimidos ODT derretem na língua e são excelentes para pacientes que vomitam muito durante a crise (evita ter que engolir água).'],
        es: ['Los comprimidos ODT se derriten en la lengua y son excelentes para pacientes que vomitan mucho durante la crisis (evita tener que tragar agua).']
      },
      renalAdjustment: {
        required: false,
        message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' }
      },
      hepaticAdjustment: {
        required: true,
        message: {
          pt: 'Se insuficiência hepática moderada/grave, dose máxima reduzida para 5 mg/dia.',
          es: 'Si insuficiencia hepática moderada/grave, dosis máxima reducida a 5 mg/día.'
        }
      },
      commonAdverseEffects: {
        pt: ['Aperto leve no pescoço/mandíbula', 'Sonolência (mais pronunciada que a sumatriptana)', 'Boca seca'],
        es: ['Apriete leve en el cuello/mandíbula', 'Somnolencia (más pronunciada que sumatriptán)', 'Boca seca']
      },
      dangerousAdverseEffects: {
        pt: ['Vasoespasmo coronariano em doentes isquêmicos', 'Isquemia intestinal ou mesentérica (Raro)'],
        es: ['Vasoespasmo coronario en enfermos isquémicos', 'Isquemia intestinal o mesentérica (Raro)']
      },
      contraindications: {
        absolute: {
          pt: ['Histórico de Infarto, Angina ou AVC/AIT', 'Uso concomitante com inibidores da MAO'],
          es: ['Historial de Infarto, Angina o ACV/AIT', 'Uso concomitante con inhibidores de la MAO']
        },
        relative: {
          pt: ['Idosos (> 65 anos) por maior risco vascular'],
          es: ['Ancianos (> 65 años) por mayor riesgo vascular']
        }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
        antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'ALODÍNIA E ATRASO: Triptanos funcionam melhor se tomados logo que a dor começa. Se o paciente esperar horas, a pele da cabeça dele vai ficar dolorida ao toque (Alodínia) por sensibilização central. Quando a alodínia se instala, o triptano falha absurdamente em cortar a dor.',
          es: 'ALODINIA Y RETRASO: Los triptanos funcionan mejor si se toman apenas empieza el dolor. Si el paciente espera horas, la piel de la cabeza le dolerá al tacto (Alodinia). Cuando la alodinia se instala, el triptano falla absurdamente.'
        }
      }
    },

    /* ── RIZATRIPTANA ───────────────────────────────────────────────────── */
    "rizatriptana": {
      name: { pt: 'Rizatriptana (Benzoato de)', es: 'Rizatriptán (Benzoato de)' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano Ultra-Rápido)', es: 'Agonista 5-HT1B/1D (Triptano Ultra-Rápido)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Crises agudas de enxaqueca que exigem alívio fulminante', 'Ideal para enxaquecas que sobem ao pico de dor muito rapidamente'],
        es: ['Crisis agudas de migraña que exigen alivio fulminante', 'Ideal para migrañas que suben al pico de dolor muy rápidamente']
      },
      commercialNames: { br: ['Maxalt', 'Rizatriptana'], ar: ['Maxalt'] },
      presentation: {
        pt: ['Comprimidos 10 mg', 'Comprimidos ODT (Disco de desintegração oral) 10 mg'],
        es: ['Comprimidos 10 mg', 'Comprimidos ODT (Disco de desintegración oral) 10 mg']
      },
      mechanism: {
        pt: 'Triptano altamente absorvível e ultra-rápido. Atinge o cérebro muito antes de seus concorrentes, proporcionando alívio em cerca de 30 a 60 minutos (a ação oral mais rápida da classe). Aperta os vasos cranianos e paralisa o trigêmeo eficientemente.',
        es: 'Triptano altamente absorbible y ultra-rápido. Alcanza el cerebro mucho antes que sus competidores, proporcionando alivio en unos 30 a 60 minutos (la acción oral más rápida). Aprieta los vasos craneales y paraliza el trigémino.'
      },
      dose: {
        adult: {
          pt: '10 mg via oral no início da dor (Pode repetir em 2h. Máx 30 mg/dia). ⚠️ Se usa Propranolol diário: dose máxima de 5 mg por crise (Máx 15 mg/dia).',
          es: '10 mg vía oral al inicio del dolor (Puede repetir en 2h. Máx 30 mg/día). ⚠️ Si usa Propranolol diario: dosis máxima de 5 mg por crisis (Máx 15 mg/día).'
        },
        pediatric: {
          pt: 'Uso não indicado < 18 anos.',
          es: 'Uso no indicado < 18 años.'
        }
      },
      administration: {
        pt: ['Pode ser tomado com água (comum) ou derreter na boca (ODT).', 'Se paciente usa PROPRANOLOL, a dose deve ser cortada para 5 mg!'],
        es: ['Puede tomarse con agua (común) o derretirse en la boca (ODT).', '¡Si el paciente usa PROPRANOLOL, la dosis debe cortarse a 5 mg!']
      },
      renalAdjustment: {
        required: false,
        message: { pt: 'Sem necessidade rigorosa de ajuste.', es: 'Sin necesidad rigurosa de ajuste.' }
      },
      hepaticAdjustment: {
        required: true,
        message: {
          pt: 'Contraindicado em falência hepática severa.',
          es: 'Contraindicado en falla hepática severa.'
        }
      },
      commonAdverseEffects: {
        pt: ['Astenia intensa e sonolência forte', 'Tontura', 'Parestesia (formigamento nos dedos)'],
        es: ['Astenia intensa y somnolencia fuerte', 'Mareo', 'Parestesia (hormigueo en los dedos)']
      },
      dangerousAdverseEffects: {
        pt: ['Espasmo coronariano fatal (Raro)', 'Taquicardia ventricular'],
        es: ['Espasmo coronario fatal (Raro)', 'Taquicardia ventricular']
      },
      contraindications: {
        absolute: {
          pt: ['HAS descompensada, coronariopatias isquêmicas', 'Uso simultâneo com derivados do ergot ou IMAO'],
          es: ['HTA descompensada, coronariopatías isquémicas', 'Uso simultáneo con derivados del ergot o IMAO']
        },
        relative: {
          pt: ['Pacientes obesos fumantes ou com hipercolesterolemia (Risco isquêmico oculto)'],
          es: ['Pacientes obesos fumadores o con hipercolesterolemia (Riesgo isquémico oculto)']
        }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false,
        antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'A "Cura" Pode Cansar: A Rizatriptana corta a dor rapidamente, mas frequentemente deixa o paciente com uma sonolência profunda ou sensação de "ressaca pesada" logo em seguida, dificultando o retorno imediato ao trabalho.',
          es: 'La "Cura" Puede Cansar: El Rizatriptán corta el dolor rápido, pero frecuentemente deja al paciente con una somnolencia profunda o sensación de "resaca pesada" luego, dificultando el retorno al trabajo.'
        }
      }
    },

    /* ── NARATRIPTANA ───────────────────────────────────────────────────── */
    "naratriptana": {
      name: { pt: 'Naratriptana (Cloridrato de)', es: 'Naratriptán (Clorhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano de Ação Lenta)', es: 'Agonista 5-HT1B/1D (Triptano de Acción Lenta)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Enxaqueca aguda persistente ou menstruacional', 'Ideal para pacientes cujas crises demoram muito a passar ou a dor volta no dia seguinte (Recorrência)'],
        es: ['Migraña aguda persistente o menstrual', 'Ideal para pacientes cuyas crisis tardan mucho en pasar o el dolor vuelve al día siguiente (Recurrencia)']
      },
      commercialNames: { br: ['Naramig', 'Naratrin'], ar: ['Naramig'] },
      presentation: {
        pt: ['Comprimidos revestidos 2,5 mg'],
        es: ['Comprimidos recubiertos 2,5 mg']
      },
      mechanism: {
        pt: 'Conhecida na literatura como "The Gentle Triptan" (O Triptano Gentil). A Naratriptana tem a mais alta afinidade vascular, mas sua absorção e início de ação são LENTOS (pode demorar 4 horas para fazer efeito total). Em compensação, sua meia-vida no sangue é o dobro das outras. Isso gera menos efeitos colaterais (quase não dá aperto no peito) e impede que a enxaqueca "volte amanhã".',
        es: 'Conocida como "The Gentle Triptan" (El Triptano Gentil). Tiene la más alta afinidad vascular, pero su absorción e inicio son LENTOS (puede tardar 4 horas). A cambio, su vida media es el doble de las otras. Esto genera menos efectos colaterales (casi no da apriete en el pecho) e impide que la migraña "vuelva mañana".'
      },
      dose: {
        adult: {
          pt: '2,5 mg via oral. Se o alívio não for completo ou a dor voltar, PODE TOMAR DE NOVO SÓ APÓS 4 HORAS (Máx 5 mg/dia).',
          es: '2,5 mg vía oral. Si el alivio no es completo o vuelve, PUEDE TOMAR DE NUEVO SOLO TRAS 4 HORAS (Máx 5 mg/día).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Engolir inteiro. O paciente DEVE ser avisado de que esse remédio demora para fazer efeito, para que não tome outra cartela por desespero.'],
        es: ['Tragar entero. El paciente DEBE ser avisado que este remedio tarda en hacer efecto, para que no tome otra caja por desesperación.']
      },
      renalAdjustment: {
        required: true,
        message: {
          pt: 'Evitar ou reduzir dose (Máx 2,5 mg/dia) se ClCr < 40 mL/min (metabolismo misto prolongado).',
          es: 'Evitar o reducir dosis (Máx 2,5 mg/día) si ClCr < 40 mL/min (metabolismo mixto prolongado).'
        }
      },
      hepaticAdjustment: {
        required: true,
        message: {
          pt: 'Contraindicado em insuficiência hepática grave.',
          es: 'Contraindicado en insuficiencia hepática grave.'
        }
      },
      commonAdverseEffects: {
        pt: ['MUITO BEM TOLERADA. Rara náusea ou sonolência leve.', 'Formigamento leve.'],
        es: ['MUY BIEN TOLERADA. Rara náusea o somnolencia leve.', 'Hormigueo leve.']
      },
      dangerousAdverseEffects: {
        pt: ['Eventos isquêmicos cardíacos (Risco presente em toda a classe, mas menor incidência de espasmo reportada com naratriptana)'],
        es: ['Eventos isquémicos cardíacos (Riesgo presente en toda la clase, pero menor incidencia con naratriptán)']
      },
      contraindications: {
        absolute: {
          pt: ['Isquemia coronariana, AVC/AIT prévio', 'Hipertensão descontrolada'],
          es: ['Isquemia coronaria, ACV/AIT previo', 'Hipertensión descontrolada']
        },
        relative: {
          pt: ['Uso associado a anticoncepcionais hormonais e tabagismo (Somação de risco pró-trombótico)'],
          es: ['Uso asociado a anticonceptivos hormonales y tabaquismo (Suma de riesgo protrombótico)']
        }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true,
        antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'PROFILAXIA MENSTRUAL: Devido à sua longa duração, ginecologistas e neurologistas prescrevem Naratriptana off-label como "mini-profilaxia" para mulheres que sempre têm crises destrutivas no período pré-menstrual (Inicia-se a pílula 2 dias antes de menstruar).',
          es: 'PROFILAXIS MENSTRUAL: Debido a su larga duración, médicos prescriben Naratriptán off-label como "mini-profilaxis" para mujeres que siempre tienen crisis destructivas en el periodo premenstrual (Inicia 2 días antes de menstruar).'
        }
      }
    },

    /* ── ELETRIPTANA ────────────────────────────────────────────────────── */
    "eletriptana": {
      name: { pt: 'Eletriptana (Bromidrato de)', es: 'Eletriptán (Bromhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano Potente)', es: 'Agonista 5-HT1B/1D (Triptano Potente)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Crises graves de Enxaqueca com ou sem aura, especialmente as refratárias a outros triptanos'],
        es: ['Crisis graves de Migraña con o sin aura, especialmente las refractarias a otros triptanos']
      },
      commercialNames: { br: ['Relpax'], ar: ['Relpax'] },
      presentation: {
        pt: ['Comprimidos revestidos 40 mg', 'Comprimidos 80 mg'],
        es: ['Comprimidos recubiertos 40 mg', 'Comprimidos 80 mg']
      },
      mechanism: {
        pt: 'Fármaco de "Artilharia Pesada". A eletriptana tem uma das mais altas afinidades pelos receptores 5-HT1B e 1D do cérebro, aliada a uma absorção incrivelmente sólida. Nos ensaios clínicos, tem taxas de sucesso (paciente ficar completamente sem dor em 2 horas) superiores às da Sumatriptana. É a droga para o paciente que diz "nada mais funciona na minha crise".',
        es: 'Fármaco de "Artillería Pesada". El eletriptán tiene una de las afinidades más altas por los receptores del cerebro, unida a una absorción sólida. En ensayos, tiene tasas de éxito (paciente queda sin dolor en 2 horas) superiores a las del Sumatriptán. Es la droga para el paciente que dice "nada más funciona".'
      },
      dose: {
        adult: {
          pt: '40 mg via oral no início da dor. (Se não passar em 2h, pode repetir mais 40mg. Máximo 80 mg/dia).',
          es: '40 mg vía oral al inicio del dolor. (Si no pasa en 2h, puede repetir más 40mg. Máximo 80 mg/día).'
        },
        pediatric: {
          pt: 'Contraindicado em < 18 anos.',
          es: 'Contraindicado en < 18 años.'
        }
      },
      administration: {
        pt: ['Uso oral com líquidos. Não mastigar.'],
        es: ['Uso oral con líquidos. No masticar.']
      },
      renalAdjustment: {
        required: false,
        message: {
          pt: 'Metabolismo quase puramente hepático, sem ajuste renal agressivo.',
          es: 'Metabolismo casi puramente hepático, sin ajuste renal agresivo.'
        }
      },
      hepaticAdjustment: {
        required: true,
        message: {
          pt: 'Altamente metabolizado pelo CYP3A4. Contraindicado em insuficiência hepática severa.',
          es: 'Altamente metabolizado por CYP3A4. Contraindicado en insuficiencia hepática severa.'
        }
      },
      commonAdverseEffects: {
        pt: ['Tontura e vertigem passageira', 'Astenia muscular (fraqueza)', 'Aperto faríngeo (Comum, sem gravidade cardíaca)'],
        es: ['Mareo y vértigo pasajero', 'Astenia muscular (debilidad)', 'Apriete faríngeo (Común, sin gravedad cardíaca)']
      },
      dangerousAdverseEffects: {
        pt: ['Acidente Vascular Cerebral Hemorrágico e Isquemia Miocárdica (em pacientes com defeitos vasculares prévios)'],
        es: ['Accidente Cerebrovascular Hemorrágico e Isquemia Miocárdica (en pacientes con defectos vasculares previos)']
      },
      contraindications: {
        absolute: {
          pt: ['Uso concomitante com inibidores fortíssimos do CYP3A4 (Cetoconazol, Ritonavir, Claritromicina) dentro das últimas 72 horas!', 'Coronariopatias e HAS descontrolada'],
          es: ['¡Uso concomitante con inhibidores fuertísimos del CYP3A4 (Ketoconazol) dentro de las últimas 72 horas!', 'Coronariopatías y HTA descontrolada']
        },
        relative: {
          pt: ['Nenhuma relevante fora da classe.'],
          es: ['Ninguna relevante fuera de la clase.']
        }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
        antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A REGRA DO CETOCONAZOL: A Eletriptana depende VITALMENTE do CYP3A4 para ser destruída. Se o paciente usar remédios para fungos sistêmicos ou antibióticos macrolídeos, o nível de eletriptana no cérebro explode, gerando uma onda vasoespástica que pode causar um AVC. Banir o uso conjunto.',
          es: 'LA REGLA DEL KETOCONAZOL: El Eletriptán depende VITALMENTE del CYP3A4. Si el paciente usa remedios para hongos o macrólidos, el nivel de eletriptán explota, generando una onda vasoespástica que puede causar ACV.'
        }
      }
    },

    /* ── BUILD 397 — Adições: Almotriptana, Frovatriptana, Ergotamina, DHE, Erenumabe ── */

    /* ── ALMOTRIPTANA ───────────────────────────────────────────────────── */
    "almotriptana": {
      id: 'almotriptana',
      name: { pt: 'Almotriptana', es: 'Almotriptán' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano de 2ª Geração)', es: 'Agonista 5-HT1B/1D (Triptano de 2ª Generación)' },
      indications: {
        pt: ['Tratamento agudo da enxaqueca (Fase de crise, não profilático)'],
        es: ['Tratamiento agudo de la migraña (Fase de crisis, no profiláctico)']
      },
      commercialNames: { br: ['Almogran'], ar: ['Almotriptan'] },
      presentation: { pt: ['Comprimidos 12,5 mg'], es: ['Comprimidos 12,5 mg'] },
      mechanism: {
        pt: 'Triptano altamente biodisponível (quase 70% da pílula atinge o sangue, contra apenas 15% da sumatriptana oral). Atua apertando os vasos intracranianos e bloqueando neuropeptídeos. Seu grande diferencial: Tem a maior "taxa de ausência de efeitos colaterais" entre os triptanos rápidos. Os pacientes relatam muito menos aperto no peito ou letargia severa com esta molécula.',
        es: 'Triptano altamente biodisponible (casi 70% alcanza la sangre). Actúa apretando los vasos intracraneales y bloqueando neuropéptidos. Su gran diferencial: Tiene la mayor "tasa de ausencia de efectos colaterales" entre los triptanos rápidos. Los pacientes relatan mucho menos apriete en el pecho.'
      },
      dose: {
        adult: {
          pt: '12,5 mg via oral no início da dor (Pode repetir 1 dose após 2 horas. Máximo 25 mg/dia).',
          es: '12,5 mg vía oral al inicio del dolor (Puede repetir 1 dosis tras 2 horas. Máximo 25 mg/día).'
        },
        pediatric: {
          pt: 'Liberado pelo FDA para adolescentes (12 a 17 anos) em dose única de 6,25 mg ou 12,5 mg.',
          es: 'Liberado por la FDA para adolescentes (12 a 17 años) en dosis única de 6,25 mg o 12,5 mg.'
        }
      },
      administration: { pt: ['Via oral. Pode ser ingerida independentemente das refeições.'], es: ['Vía oral. Puede ser ingerida independientemente de las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'Dose deve ser reduzida pela METADE (Máximo 12,5 mg no DIA) se o paciente tiver falência renal grave (ClCr < 30).', es: 'La dosis debe reducirse a la MITAD (Máximo 12,5 mg al DÍA) si el paciente tiene falla renal grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em doença hepática grave, reduzir a dose máxima para 12,5 mg ao dia.', es: 'En enfermedad hepática grave, reducir la dosis máxima a 12,5 mg al día.' } },
      commonAdverseEffects: { pt: ['Boca seca leve', 'Náusea branda', 'Sonolência mínima comparada aos outros triptanos'], es: ['Boca seca leve', 'Náusea leve', 'Somnolencia mínima comparada a los otros triptanos'] },
      dangerousAdverseEffects: { pt: ['Isquemia miocárdica em pacientes não-diagnosticados precocemente'], es: ['Isquemia miocárdica en pacientes no diagnosticados precozmente'] },
      contraindications: {
        absolute: { pt: ['Doença isquêmica coronariana, AVC/AIT prévio', 'Tratamento profilático contínuo'], es: ['Enfermedad isquémica coronaria, ACV/AIT previo', 'Tratamiento profiláctico continuo'] },
        relative: { pt: ['Alergia a sulfonamidas (A Almotriptana contém um grupo sulfamoil, embora reações cruzadas sejam raríssimas)'], es: ['Alergia a sulfonamidas (El Almotriptán contiene un grupo sulfamoil, aunque las reacciones cruzadas son rarísimas)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O REMÉDIO DE TRANSIÇÃO: A Almotriptana é ideal para aquele paciente que precisa voltar a trabalhar e relata que "a Sumatriptana tira a dor mas me deixa dopado/zumbi a tarde inteira".', es: 'EL REMEDIO DE TRANSICIÓN: El Almotriptán es ideal para aquel paciente que necesita volver a trabajar y relata que "el Sumatriptán quita el dolor pero me deja zombi la tarde entera".' }
      }
    },

    /* ── FROVATRIPTANA ──────────────────────────────────────────────────── */
    "frovatriptana": {
      id: 'frovatriptana',
      name: { pt: 'Frovatriptana', es: 'Frovatriptán' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1B/1D (Triptano de Ação Ultra-Longa)', es: 'Agonista 5-HT1B/1D (Triptano de Acción Ultra Larga)' },
      indications: {
        pt: ['Crises de Enxaqueca aguda', 'Mini-profilaxia da Enxaqueca Menstrual (off-label muito comum e apoiado em diretrizes)'],
        es: ['Crisis de Migraña aguda', 'Mini-profilaxis de la Migraña Menstrual (off-label muy común y apoyado en directrices)']
      },
      commercialNames: { br: ['Frovatriptana (Geralmente importada)'], ar: ['Frovatriptan'] },
      presentation: { pt: ['Comprimidos 2,5 mg'], es: ['Comprimidos 2,5 mg'] },
      mechanism: {
        pt: 'A Tartaruga da Neurologia, que vence a corrida da recorrência. A Frovatriptana tem um início de ação desesperadoramente lento (demora de 2 a 3 horas para tirar a dor). PORÉM, possui uma meia-vida cavalar de 26 HORAS no corpo humano (contra 2h da sumatriptana). A dor demora para ir embora, mas quando vai, ELA NUNCA MAIS VOLTA no dia seguinte.',
        es: 'La Tortuga de la Neurología, que vence la carrera de la recurrencia. El Frovatriptán tiene un inicio de acción desesperantemente lento. PERO posee una vida media de 26 HORAS en el cuerpo. El dolor tarda en irse, pero cuando se va, NUNCA MÁS VUELVE al día siguiente.'
      },
      dose: {
        adult: {
          pt: '2,5 mg via oral. (Pode repetir após longo período. Máximo de 7,5 mg/dia). Na profilaxia menstrual: 2,5 mg 2x/dia começando 2 dias antes da menstruação.',
          es: '2,5 mg vía oral. (Puede repetir tras largo período. Máximo de 7,5 mg/día). En profilaxis menstrual: 2,5 mg 2x/día empezando 2 días antes de la menstruación.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Nunca associar com outro Triptano rápido na esperança de "acelerar" a cura.'], es: ['Nunca asociar con otro Triptano rápido en la esperanza de "acelerar" la cura.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não requer ajuste na cirrose leve/moderada, mas é contraindicado na severa.', es: 'No requiere ajuste en cirrosis leve/moderada, pero es contraindicado en severa.' } },
      commonAdverseEffects: { pt: ['Fadiga prolongada leve', 'Rubor quente facial', 'Boca seca'], es: ['Fatiga prolongada leve', 'Rubor caliente facial', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Vasoespasmo e infarto (Se o paciente não suportar a demora do remédio e tomar mais pílulas de triptano em cima da Frovatriptana)'], es: ['Vasoespasmo e infarto (Si el paciente no soporta la demora del remedio y toma más píldoras encima del Frovatriptán)'] },
      contraindications: {
        absolute: { pt: ['Uso como droga de salvamento no "pico" desesperador da dor', 'Doença arterial isquêmica crônica'], es: ['Uso como droga de salvamento en el "pico" desesperante del dolor', 'Enfermedad arterial isquémica crónica'] },
        relative: { pt: ['HAS não controlada'], es: ['HTA no controlada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O OURO DA MENSTRUAÇÃO: Para mulheres cuja enxaqueca menstrual as paralisa mensalmente durante os sangramentos e é imune a analgésicos. Tomar Frovatriptana de 12/12h como prevenção (dois dias antes até o fim do sangramento) bloqueia o caos hormonal.', es: 'EL ORO DE LA MENSTRUACIÓN: Para mujeres cuya migraña menstrual las paraliza mensualmente. Tomar Frovatriptán de 12/12h como prevención (dos días antes hasta el fin del sangrado) bloquea el caos hormonal.' }
      }
    },

    /* ── ERGOTAMINA ─────────────────────────────────────────────────────── */
    "ergotamina": {
      id: 'ergotamina',
      name: { pt: 'Ergotamina (Tartarato de)', es: 'Ergotamina (Tartrato de)' },
      category: 'neurologia',
      class: { pt: 'Alcaloide do Ergot (Vasoconstritor Arterial Não-Seletivo)', es: 'Alcaloide del Ergot (Vasoconstrictor Arterial No Selectivo)' },
      indications: {
        pt: ['Aborto de crise de enxaqueca grave e de longa duração (Drogas de resgate arcaicas)'],
        es: ['Aborto de crisis de migraña grave y de larga duración (Drogas de rescate arcaicas)']
      },
      commercialNames: { br: ['Cefalium (Assoc)', 'Tonopan (Assoc)'], ar: ['Cafergot', 'Migral'] },
      presentation: { pt: ['Comprimidos (quase sempre associada à Cafeína e Dipirona/Paracetamol)', 'Supositórios'], es: ['Comprimidos (casi siempre asociada a Cafeína)', 'Supositorios'] },
      mechanism: {
        pt: 'Força bruta química antiga (fungo do centeio). A Ergotamina estimula de forma caótica os receptores Serotoninérgicos (5-HT1), Dopaminérgicos e Alfa-Adrenérgicos de TODO o corpo (não só da cabeça). Ocorre uma vasoconstrição extrema de longo prazo nas veias e artérias sistêmicas. Ao esmagar o vaso craniano, a dor latejante para.',
        es: 'Fuerza bruta química antigua. La Ergotamina estimula de forma caótica los receptores Serotoninérgicos, Dopaminérgicos y Alfa-Adrenérgicos de TODO el cuerpo. Ocurre una vasoconstricción extrema a largo plazo. Al aplastar el vaso craneal, el dolor para.'
      },
      dose: {
        adult: {
          pt: 'Geralmente 1 a 2 mg de ergotamina no início da dor (Apresentações contêm 1mg/comp). Máximo de 6 mg POR ATAQUE ou 10 mg POR SEMANA.',
          es: 'Generalmente 1 a 2 mg de ergotamina al inicio del dolor. Máximo de 6 mg POR ATAQUE o 10 mg POR SEMANA.'
        },
        pediatric: {
          pt: 'Totalmente contraindicada.',
          es: 'Totalmente contraindicada.'
        }
      },
      administration: { pt: ['Deve ser tomada idealmente no PRÓDROMO da enxaqueca. O paciente NÃO DEVE ultrapassar o limite semanal, sob pena de gangrena isquêmica.'], es: ['Debe ser tomada idealmente en el PRÓDROMO de la migraña. El paciente NO DEBE superar el límite semanal, so pena de gangrena isquémica.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em doença renal grave por acúmulo isquêmico.', es: 'Evitar en enfermedad renal grave por acúmulo isquémico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática (metabolismo de primeira passagem maciço).', es: 'Contraindicado en insuficiencia hepática (metabolismo de primera pasada masivo).' } },
      commonAdverseEffects: { pt: ['Náuseas violentas e Vômitos (Efeito dopaminérgico direto da droga que obriga a associar plasil/bromoprida nos comp.)', 'Pernas frias e amortecidas', 'Dores musculares e câimbras'], es: ['Náuseas violentas y Vómitos (Efecto dopaminérgico directo que obliga a asociar antieméticos)', 'Piernas frías y adormecidas', 'Dolores musculares y calambres'] },
      dangerousAdverseEffects: { pt: ['FOGO DE SANTO ANTÔNIO / ERGOTISMO (Gangrena isquêmica dos dedos e membros que necessita amputação)', 'Infarto Agudo do Miocárdio', 'Fibrose pleural e retroperitoneal (Uso diário)'], es: ['FUEGO DE SAN ANTONIO / ERGOTISMO (Gangrena isquémica de los dedos que necesita amputación)', 'Infarto Agudo de Miocardio', 'Fibrosis pleural y retroperitoneal'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (É uma das drogas mais abortivas conhecidas na farmácia)', 'Hipertensão Severa, Doença Arterial Periférica, Infarto Prévio', 'Mistura com Triptanos'], es: ['EMBARAZO (Es una de las drogas más abortivas conocidas)', 'Hipertensión Severa, Enfermedad Arterial Periférica', 'Mezcla con Triptanos'] },
        relative: { pt: ['Idosos', 'Uso como prevenção'], es: ['Ancianos', 'Uso como prevención'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O CICLO DA DOR VICIADA (Cefaleia de Rebote): O Cefalium/Tonopan é o rei da dor de cabeça por abuso de analgésicos. Como a ergotamina faz o vaso sanguíneo "contrair à força", quando a droga sai do corpo o vaso se expande de forma raivosa, gerando uma dor 10x pior no dia seguinte.', es: 'EL CICLO DEL DOLOR ADICTO (Cefalea de Rebote): Cefalium es el rey del dolor de cabeza por abuso. Como la ergotamina contrae el vaso a la fuerza, al salir del cuerpo el vaso se expande con furia, generando un dolor 10x peor.' }
      }
    },

    /* ── DI-HIDROERGOTAMINA (DHE) ───────────────────────────────────────── */
    "di_hidroergotamina": {
      id: 'di_hidroergotamina',
      name: { pt: 'Di-hidroergotamina (Mesilato de)', es: 'Dihidroergotamina (Mesilato de)' },
      category: 'neurologia',
      class: { pt: 'Alcaloide do Ergot (Venoconstritor / Agonista 5-HT)', es: 'Alcaloide del Ergot (Venoconstrictor / Agonista 5-HT)' },
      indications: {
        pt: ['"Status Migrainosus" na sala de emergência (Enxaqueca que dura mais de 72 horas e não responde a nada)', 'Prevenção aguda de Cefaleia em Salvas no PA'],
        es: ['"Status Migrainosus" en la sala de emergencias (Migraña que dura más de 72 horas y no responde a nada)', 'Prevención aguda de Cefalea en Racimos en PA']
      },
      commercialNames: { br: ['Cefalium (Como componente)', 'Migranette', 'Ampolas DHE (Hospitalar)'], ar: ['Dihidergot', 'Tonopan (Assoc)'] },
      presentation: { pt: ['Ampolas IV/IM/SC 1 mg/mL', 'Spray Nasal (Migranal nos EUA)'], es: ['Ampollas IV/IM/SC 1 mg/mL', 'Spray Nasal'] },
      mechanism: {
        pt: 'Versão injetável modificada (hidrogenada) da Ergotamina. A DHE perdeu muito da sua capacidade de esmagar as artérias sistêmicas, atuando muito mais contraindo VEIAS e os vasos cerebrais. Ela "quebra" imediatamente o Status Migrainosus no hospital, sem causar as náuseas violentas da ergotamina clássica oral e com muito menos risco de isquemia.',
        es: 'Versión inyectable modificada de la Ergotamina. La DHE perdió mucho de su capacidad de aplastar las arterias sistémicas, actuando mucho más contrayendo VENAS y vasos cerebrales. "Rompe" inmediatamente el Status Migrainosus en el hospital, con menos riesgo de isquemia.'
      },
      dose: {
        adult: {
          pt: 'IV (Emergência): 0,5 a 1 mg na veia, repetido em 1 hora (Junto com um antiemético IV preventivo, ex: Metoclopramida). IM/SC: 1 mg.',
          es: 'IV (Emergencia): 0,5 a 1 mg en vena, repetido en 1 hora (Junto con un antiemético IV preventivo). IM/SC: 1 mg.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Na emergência (IV), é frequentemente feita junto com Plasil, Dexametasona e Dipirona para o "Coquetel" do Status Migrainosus.'], es: ['En la emergencia (IV), frecuentemente se hace junto con Plasil, Dexametasona y Dipirona para el "Cóctel" del Status Migrainosus.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 30 mL/min.', es: 'Evitar en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em falência hepática.', es: 'Contraindicado en falla hepática.' } },
      commonAdverseEffects: { pt: ['Aumento temporário da dor de cabeça logo após a injeção IV antes do alívio profundo', 'Desconforto torácico', 'Tontura'], es: ['Aumento temporal del dolor de cabeza tras la inyección IV antes del alivio profundo', 'Malestar torácico', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['Vasoespasmo periférico letal (Se combinado erradamente com Macrolídeos/Inibidores de Protease)', 'Picos de hipertensão'], es: ['Vasoespasmo periférico letal (Si combinado erróneamente con Macrólidos/Inhibidores de Proteasa)', 'Picos de hipertensión'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Categoria X - Abortivo)', 'Sepsis (O corpo chocado não aguenta o fechamento venoso da DHE)', 'Uso de Triptanos nas últimas 24h'], es: ['Embarazo (Categoría X - Abortivo)', 'Sepsis (El cuerpo chocado no aguanta el cierre venoso)', 'Uso de Triptanos en las últimas 24h'] },
        relative: { pt: ['Histórico forte de infartos ou isquemia de MMII'], es: ['Historial fuerte de infartos o isquemia de MMII'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A EXCEÇÃO DA REGRA DO REBOTE: Diferente da Ergotamina oral (Cefalium) que vicia e causa rebote infernal, a DHE venosa praticamente NÃO GERA CEFALEIA DE REBOTE. O paciente toma a injeção no hospital e acorda no dia seguinte curado e limpo.', es: 'LA EXCEPCIÓN DEL REBOTE: A diferencia de la Ergotamina oral que vicia y causa rebote, la DHE venosa prácticamente NO GENERA CEFALEA DE REBOTE. El paciente recibe la inyección y amanece curado.' }
      }
    },

    /* ── ERENUMABE ──────────────────────────────────────────────────────── */
    "erenumabe": {
      id: 'erenumabe',
      name: { pt: 'Erenumabe', es: 'Erenumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal (Antagonista do Receptor do CGRP)', es: 'Anticuerpo Monoclonal (Antagonista del Receptor del CGRP)' },
      indications: {
        pt: ['Profilaxia (Prevenção) da Enxaqueca crônica e episódica em adultos que falharam ou não toleram tratamentos orais antigos (Amitriptilina, Topiramato)'],
        es: ['Profilaxis (Prevención) de la Migraña crónica y episódica en adultos que fallaron o no toleran tratamientos orales antiguos']
      },
      commercialNames: { br: ['Pasurta'], ar: ['Aimovig'] },
      presentation: { pt: ['Seringa/Caneta preenchida SC 70 mg ou 140 mg'], es: ['Jeringa/Pluma prellenada SC 70 mg o 140 mg'] },
      mechanism: {
        pt: 'A maior revolução na enxaqueca moderna. Quando o nervo trigêmeo inflama para gerar a enxaqueca, ele solta CGRP (Peptídeo Relacionado ao Gene da Calcitonina), que é a principal molécula "sinalizadora de dor" do cérebro. O Erenumabe não bloqueia o cérebro; ele "senta e tampa" fisicamente o RECEPTOR de CGRP, como uma tampa de ralo. O cérebro produz o CGRP, mas a molécula não consegue se encaixar no receptor. Sem encaixe, não tem dilatação e NÃO TEM DOR.',
        es: 'La mayor revolución en la migraña. Cuando el nervio trigémino inflama, suelta CGRP, la principal molécula "señalizadora de dolor". El Erenumab "tapa" físicamente el RECEPTOR de CGRP. El cerebro produce el CGRP, pero la molécula no logra encajar. Sin encaje, NO HAY DOLOR.'
      },
      dose: {
        adult: {
          pt: '70 mg ou 140 mg (Injeção Subcutânea) UMA VEZ AO MÊS.',
          es: '70 mg o 140 mg (Inyección Subcutánea) UNA VEZ AL MES.'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Injeção Subcutânea na coxa, braço ou abdome (Aplicada pelo próprio paciente em casa com a caneta).'], es: ['Inyección Subcutánea en muslo, brazo o abdomen (Aplicada por el propio paciente en casa con la pluma).'] },
      renalAdjustment: { required: false, message: { pt: 'Degradado em peptídeos pequenos, sem alteração em DRC.', es: 'Degradado en péptidos pequeños, sin alteración en ERC.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Constipação INTESTINAL (O intestino humano tem muitos receptores CGRP para peristaltismo, a injeção trava o movimento)', 'Dor no local da injeção', 'Erupção cutânea e Prurido'], es: ['Constipación INTESTINAL (El intestino tiene receptores CGRP, la inyección traba el movimiento)', 'Dolor en el lugar de inyección', 'Erupción cutánea'] },
      dangerousAdverseEffects: { pt: ['Constipação Intestinal Severa com complicação (Obstrução intestinal necessitando cirurgia/internação - Raro, mas possível)', 'Crises agudas de hipertensão'], es: ['Constipación Intestinal Severa con complicación (Obstrucción intestinal necesitando cirugía)', 'Crisis agudas de hipertensión'] },
      contraindications: {
        absolute: { pt: ['Reação de hipersensibilidade ativa no momento do uso', 'Tratamento de Cefaleia em Salvas (O mecanismo não funcionou para salvas)'], es: ['Reacción de hipersensibilidad activa en el momento del uso', 'Tratamiento de Cefalea en Racimos (El mecanismo no funcionó)'] },
        relative: { pt: ['Constipação intestinal crônica e mega cólon (A droga pode paralisar totalmente as fezes do doente)'], es: ['Constipación intestinal crónica y mega colon (La droga puede paralizar totalmente las heces)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'NÃO PREVINE TODAS, MAS ABORTA: O Erenumabe não é um analgésico e pode demorar 2 a 3 meses de injeções para reduzir a inflamação de base do cérebro. Mas os pacientes migram de 15 dias de dor para 2 dias de dor ao mês. E, diferente dos Triptanos, o Erenumabe NÃO CONTRAI artérias e NUNCA CAUSA ISQUEMIA, sendo maravilhoso para idosos com enxaqueca.', es: 'NO PREVIENE TODAS: Puede tardar 2 a 3 meses en reducir la inflamación de base del cerebro. Pero los pacientes migran de 15 días de dolor a 2 días al mes. Y a diferencia de Triptanos, NO CONTRAE arterias y NUNCA CAUSA ISQUEMIA.' }
      }
    },

    /* ── BUILD 398 — Anti-CGRP Monoclonais adicionais + Gepantos Orais ── */

    /* ── FREMANEZUMABE ──────────────────────────────────────────────────── */
    "fremanezumabe": {
      id: 'fremanezumabe',
      name: { pt: 'Fremanezumabe', es: 'Fremanezumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal (Antagonista do Ligante CGRP)', es: 'Anticuerpo Monoclonal (Antagonista del Ligando CGRP)' },
      indications: {
        pt: ['Profilaxia da enxaqueca (crônica e episódica) em adultos com 4 ou mais dias de dor por mês'],
        es: ['Profilaxis de la migraña (crónica y episódica) en adultos con 4 o más días de dolor al mes']
      },
      commercialNames: { br: ['Ajovy'], ar: ['Ajovy'] },
      presentation: { pt: ['Seringa ou caneta preenchida SC 225 mg/1,5 mL'], es: ['Jeringa o pluma prellenada SC 225 mg/1,5 mL'] },
      mechanism: {
        pt: 'Diferente do Erenumabe (que tampa o receptor no cérebro), o Fremanezumabe é um "caçador". Ele patrulha o sangue e se liga fisicamente à própria molécula do CGRP (o peptídeo que causa a dor) antes que ela consiga alcançar o receptor. Neutraliza a inflamação e a dilatação craniana sem contrair ativamente nenhum vaso sanguíneo, evitando isquemia cardíaca.',
        es: 'A diferencia del Erenumab (que tapa el receptor), el Fremanezumab es un "cazador". Patrulla la sangre y se une físicamente a la propia molécula del CGRP antes de que alcance el receptor. Neutraliza la inflamación sin contraer ningún vaso sanguíneo.'
      },
      dose: {
        adult: {
          pt: 'Regime Mensal: 225 mg Subcutâneo 1 vez ao mês. Regime Trimestral: 675 mg (3 injeções de 225 mg simultâneas no mesmo dia) a cada 3 meses.',
          es: 'Régimen Mensual: 225 mg Subcutáneo 1 vez al mes. Régimen Trimestral: 675 mg (3 inyecciones simultáneas) cada 3 meses.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Injeção Subcutânea no abdome, coxa ou braço. O diferencial Trimestral permite que o paciente esqueça o tratamento por 90 dias.'], es: ['Inyección Subcutánea en abdomen, muslo o brazo. El diferencial Trimestral permite 90 días sin pensar en el tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Degradação proteolítica, não sofre acúmulo renal.', es: 'Degradación proteolítica, no sufre acúmulo renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste (não passa pelo sistema citocromo P450).', es: 'No requiere ajuste (no pasa por sistema citocromo P450).' } },
      commonAdverseEffects: { pt: ['Reação no local da injeção (eritema, dor, inchaço — em até 40% dos pacientes)'], es: ['Reacción en el sitio de inyección (eritema, dolor, hinchazón — en hasta 40% de los pacientes)'] },
      dangerousAdverseEffects: { pt: ['Reações de hipersensibilidade sistêmica (Anafilaxia rara)'], es: ['Reacciones de hipersensibilidad sistémica (Anafilaxia rara)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao fremanezumabe'], es: ['Hipersensibilidad conocida al fremanezumab'] },
        relative: { pt: ['Gravidez (evitar — CGRP regula vasodilatação feto-placentária)'], es: ['Embarazo (evitar — CGRP regula vasodilatación feto-placentaria)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A IMUNIDADE DO FÍGADO: O maior triunfo dos imunobiológicos como o Ajovy é que são proteínas, não compostos químicos. O paciente pode tomar antibióticos, anticonvulsivantes ou pílulas de câncer sem que nenhum deles interfira no preventivo da enxaqueca.', es: 'LA INMUNIDAD DEL HÍGADO: Son proteínas, no compuestos químicos. El paciente puede tomar antibióticos o anticonvulsivantes sin que interfieran con el preventivo de la migraña.' }
      }
    },

    /* ── GALCANEZUMABE ──────────────────────────────────────────────────── */
    "galcanezumabe": {
      id: 'galcanezumabe',
      name: { pt: 'Galcanezumabe', es: 'Galcanezumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal (Antagonista do Ligante CGRP)', es: 'Anticuerpo Monoclonal (Antagonista del Ligando CGRP)' },
      indications: {
        pt: ['Profilaxia da Enxaqueca (crônica e episódica)', 'Profilaxia da Cefaleia em Salvas Episódica (Cluster Headache)'],
        es: ['Profilaxis de la Migraña (crónica y episódica)', 'Profilaxis de la Cefalea en Racimos Episódica (Cluster Headache)']
      },
      commercialNames: { br: ['Emgality'], ar: ['Emgality'] },
      presentation: { pt: ['Caneta/Seringa preenchida SC 120 mg', 'Seringa preenchida SC 100 mg (específica para Cefaleia em Salvas)'], es: ['Pluma/Jeringa prellenada SC 120 mg', 'Jeringa prellenada SC 100 mg (para Racimos)'] },
      mechanism: {
        pt: 'Igual ao Fremanezumabe: captura e inativa a molécula de CGRP circulante. Seu grande destaque em estudos foi a aprovação como a primeira droga focada na Cefaleia em Salvas (a "Dor do Suicídio"), que é mediada por altíssimas cargas de CGRP liberadas pelo trigêmeo atrás dos olhos.',
        es: 'Al igual que el Fremanezumab, captura e inactiva la molécula de CGRP. Su gran destaque fue la aprobación como la primera droga enfocada en la Cefalea en Racimos ("Dolor del Suicidio"), mediada por altísimas cargas de CGRP detrás del ojo.'
      },
      dose: {
        adult: {
          pt: 'Enxaqueca: Dose de ataque 240 mg (2 injeções de 120 mg) no mês 1, depois 120 mg SC/mês. Cefaleia em Salvas: 300 mg (3 injeções de 100 mg) no início do período, repetindo mensalmente.',
          es: 'Migraña: Dosis de ataque 240 mg (2 inyecciones) en mes 1, luego 120 mg SC/mes. Racimos: 300 mg (3 inyecciones de 100 mg) al inicio, repitiendo mensualmente.'
        },
        pediatric: { pt: 'Uso não recomendado.', es: 'Uso no recomendado.' }
      },
      administration: { pt: ['As injeções de ataque (quando mais de 1 for necessária) devem ser aplicadas em locais anatômicos diferentes.'], es: ['Las inyecciones de ataque deben aplicarse en lugares anatómicos diferentes.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dor local, vermelhidão e nódulo na área da injeção', 'Vertigem leve'], es: ['Dolor local, enrojecimiento y nódulo en el área', 'Vértigo leve'] },
      dangerousAdverseEffects: { pt: ['Reação anafilática ou angioedema (Raro)'], es: ['Reacción anafiláctica o angioedema (Raro)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave ao galcanezumabe'], es: ['Hipersensibilidad grave al galcanezumab'] },
        relative: { pt: ['Sem contraindicações relevantes fora alergias'], es: ['Sin contraindicaciones relevantes fuera de alergias'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ATAQUE INTENSO: Não esqueça que o Galcanezumabe para enxaqueca exige 2 injeções de uma vez só no primeiro mês (Dose de ataque). Se o paciente tomar apenas uma de 120 mg, a droga demorará 3 meses para atingir o nível preventivo eficaz.', es: 'EL ATAQUE INTENSO: El Galcanezumab exige 2 inyecciones de una sola vez en el primer mes. Si toma solo una, tardará 3 meses en alcanzar nivel preventivo eficaz.' }
      }
    },

    /* ── EPTINEZUMABE ───────────────────────────────────────────────────── */
    "eptinezumabe": {
      id: 'eptinezumabe',
      name: { pt: 'Eptinezumabe', es: 'Eptinezumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal (Antagonista do Ligante CGRP Endovenoso)', es: 'Anticuerpo Monoclonal (Antagonista del Ligando CGRP Endovenoso)' },
      indications: {
        pt: ['Prevenção de enxaqueca episódica e crônica em adultos (especialmente quando os subcutâneos falharam ou quando alívio imediato é crítico)'],
        es: ['Prevención de migraña episódica y crónica en adultos (especialmente cuando los subcutáneos fallaron o el alivio inmediato es crítico)']
      },
      commercialNames: { br: ['Vyepti'], ar: ['Vyepti'] },
      presentation: { pt: ['Frasco-ampola IV 100 mg/mL'], es: ['Vial IV 100 mg/mL'] },
      mechanism: {
        pt: 'A versão endovenosa dos caçadores de CGRP. Por ser aplicado diretamente na veia, sua biodisponibilidade é 100% imediata (os subcutâneos demoram até 10 dias para distribuir-se pelo sangue). Isso significa que, no mesmo dia da infusão, a prevenção da enxaqueca já está ativada. Liga-se ao ligante de CGRP bloqueando a dor.',
        es: 'La versión endovenosa de los cazadores de CGRP. Al ser aplicado en vena, biodisponibilidad 100% inmediata (los subcutáneos tardan hasta 10 días). El mismo día de la infusión, la prevención ya está activada.'
      },
      dose: {
        adult: {
          pt: '100 mg por infusão IV a cada 12 SEMANAS (Trimestral). Em casos refratários: 300 mg a cada 12 semanas.',
          es: '100 mg por infusión IV cada 12 SEMANAS (Trimestral). En casos refractarios: 300 mg cada 12 semanas.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Uso estritamente hospitalar ou em clínica de infusão. Diluído em 100 mL de SF e infundido em 30 minutos.'], es: ['Uso estrictamente hospitalario o en clínica de infusión. Diluido en 100 mL de SF e infundido en 30 minutos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Nasofaringite e reações de infusão locais', 'Fadiga no dia da infusão'], es: ['Nasofaringitis y reacciones de infusión locales', 'Fatiga el día de la infusión'] },
      dangerousAdverseEffects: { pt: ['Reação severa infusional anafilática (como ocorre com qualquer anticorpo humanizado IV)'], es: ['Reacción severa infusional anafiláctica'] },
      contraindications: {
        absolute: { pt: ['Histórico de hipersensibilidade ao eptinezumabe'], es: ['Historial de hipersensibilidad al eptinezumab'] },
        relative: { pt: ['Uso durante a gravidez não estabelecido (segurança feto-vascular incerta)'], es: ['Uso durante el embarazo no establecido'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ESCOLHA DO DESESPERO: Quando o paciente com enxaqueca crônica diária está prestes a perder o emprego porque não consegue esperar 3 meses para o Erenumabe/Ajovy agir, a infusão IV de Eptinezumabe é a cartada mestra para um efeito protetor no dia seguinte.', es: 'LA ELECCIÓN DEL DESESPERO: Cuando el paciente no puede esperar 3 meses, la infusión IV es la carta maestra para un efecto protector al día siguiente.' }
      }
    },

    /* ── UBROGEPANTA ────────────────────────────────────────────────────── */
    "ubrogepanta": {
      id: 'ubrogepanta',
      name: { pt: 'Ubrogepanta', es: 'Ubrogepant' },
      category: 'neurologia',
      class: { pt: 'Antagonista Oral do Receptor de CGRP (Gepanto)', es: 'Antagonista Oral del Receptor de CGRP (Gepanto)' },
      indications: {
        pt: ['Tratamento AGUDO de crises de Enxaqueca com ou sem aura (Para abortar a dor, não prevenir)'],
        es: ['Tratamiento AGUDO de crisis de Migraña con o sin aura (Para abortar el dolor, no prevenir)']
      },
      commercialNames: { br: ['Ubrelvy'], ar: ['Ubrelvy'] },
      presentation: { pt: ['Comprimidos 50 mg e 100 mg'], es: ['Comprimidos 50 mg y 100 mg'] },
      mechanism: {
        pt: 'A Revolução Oral "Sem Isquemia". O Ubrogepanta é um inibidor do receptor de CGRP em versão comprimido (pequena molécula, não é anticorpo). Interrompe a cascata de inflamação e dor neurogênica na mesma hora. A glória desta droga: ELA NÃO CAUSA VASOCONSTRIÇÃO. Pacientes que já infartaram ou tiveram AVC e não podiam usar Triptanos, agora podem usar Gepantos com segurança.',
        es: 'La Revolución Oral "Sin Isquemia". Inhibidor del receptor CGRP en comprimido. NO CAUSA VASOCONSTRICCIÓN. Pacientes infartados o con ACV que no podían usar Triptanos, ahora pueden usar Gepantos con seguridad.'
      },
      dose: {
        adult: {
          pt: '50 mg a 100 mg via oral no início da crise. Segunda dose possível 2 horas depois (Máximo 200 mg/dia).',
          es: '50 mg a 100 mg vía oral al inicio de la crisis. Segunda dosis posible tras 2 horas (Máximo 200 mg/día).'
        },
        pediatric: { pt: 'Não aprovado para uso pediátrico.', es: 'No aprobado para uso pediátrico.' }
      },
      administration: { pt: ['Uso oral sob demanda. Diferente dos triptanos, preserva a segurança coronariana.'], es: ['Uso oral a demanda. A diferencia de los triptanos, preserva la seguridad coronaria.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr < 30 mL/min: dose máxima 50 mg.', es: 'ClCr < 30 mL/min: dosis máxima 50 mg.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Child-Pugh C (cirrose grave): dose máxima 50 mg.', es: 'Child-Pugh C (cirrosis grave): dosis máxima 50 mg.' } },
      commonAdverseEffects: { pt: ['Náuseas', 'Sonolência e Boca Seca'], es: ['Náuseas', 'Somnolencia y Boca Seca'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade em raros casos (problema de classe dos gepantos antigos, em observação contínua)'], es: ['Hepatotoxicidad en raros casos (problema de los gepantos antiguos, en observación continua)'] },
      contraindications: {
        absolute: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Cetoconazol, Claritromicina, Ritonavir)'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Ketoconazol, Claritromicina, Ritonavir)'] },
        relative: { pt: ['Uso frequente (mais de 8 vezes ao mês — não serve para profilaxia e pode sobrecarregar o fígado)'], es: ['Uso frecuente (más de 8 veces al mes — no sirve para profilaxis y puede sobrecargar el hígado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O RETORNO DO FÍGADO: Diferente dos anticorpos monoclonais de CGRP (Ajovy/Emgality) que são imunes a interações, os Gepantos em pílula VOLTAM a depender fortemente da via CYP3A4 do fígado e interagem com dezenas de outros remédios.', es: 'EL RETORNO DEL HÍGADO: A diferencia de los anticuerpos monoclonales, los Gepantos en píldora VUELVEN a depender del CYP3A4 e interactúan con decenas de remedios.' }
      }
    },

    /* ── RIMEGEPANTA ────────────────────────────────────────────────────── */
    "rimegepanta": {
      id: 'rimegepanta',
      name: { pt: 'Rimegepanta', es: 'Rimegepant' },
      category: 'neurologia',
      class: { pt: 'Antagonista Oral do Receptor de CGRP (Gepanto — Dupla Função)', es: 'Antagonista Oral del Receptor de CGRP (Gepanto — Doble Función)' },
      indications: {
        pt: ['Tratamento AGUDO da enxaqueca (aborto de crise)', 'Profilaxia (PREVENÇÃO) da enxaqueca episódica (dias alternados)'],
        es: ['Tratamiento AGUDO de la migraña (aborto de crisis)', 'Profilaxis (PREVENCIÓN) de la migraña episódica (días alternos)']
      },
      commercialNames: { br: ['Nurtec ODT', 'Vydura'], ar: ['Nurtec ODT'] },
      presentation: { pt: ['Comprimidos de desintegração oral (ODT) 75 mg'], es: ['Comprimidos de desintegración oral (ODT) 75 mg'] },
      mechanism: {
        pt: 'O "Coringa" moderno. Primeiro medicamento oral do mundo aprovado TANTO para tratar a dor na hora da crise QUANTO para tomar em dias alternados para evitar que a dor aconteça. Bloqueia o receptor de CGRP, não restringe os vasos sanguíneos (Zero isquemia) e desfaz a neuroinflamação meníngea imediatamente.',
        es: 'El "Comodín" moderno. Primer medicamento oral aprobado TANTO para tratar la crisis COMO para tomar a días alternos para prevenir. Bloquea el receptor CGRP, no restringe vasos (Cero isquemia) y deshace la neuroinflamación.'
      },
      dose: {
        adult: {
          pt: 'Tratamento Agudo (Crise): 75 mg (1 comprimido ODT) dose ÚNICA em 24h. Profilaxia: 75 mg a CADA 48 HORAS (dia sim, dia não).',
          es: 'Tratamiento Agudo (Crisis): 75 mg (1 comprimido ODT) dosis ÚNICA en 24h. Profilaxis: 75 mg CADA 48 HORAS (día sí, día no).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Comprimido ODT: colocar sobre a língua e deixar derreter, sem precisar beber água. Facilita uso imediato no trânsito ou no trabalho.'], es: ['Comprimido ODT: colocar sobre la lengua y dejar derretir, sin necesidad de beber agua.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em doença renal terminal (ClCr < 15 mL/min).', es: 'Evitar en enfermedad renal terminal (ClCr < 15 mL/min).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em insuficiência hepática grave (Child-Pugh C).', es: 'Evitar en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Náuseas', 'Dor abdominal e queimação', 'Infecção urinária (relatada em ensaios de uso contínuo)'], es: ['Náuseas', 'Dolor abdominal y quemazón', 'Infección urinaria (relatada en ensayos de uso continuo)'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade grave (erupção cutânea, dispneia) — pode ocorrer até dias após a dose'], es: ['Hipersensibilidad grave (erupción cutánea, disnea) — puede ocurrir hasta días después de la dosis'] },
      contraindications: {
        absolute: { pt: ['Associação com inibidores fortes do CYP3A4', 'Uso como prevenção em pacientes que já tomam inibidores de CGRP injetáveis (saturação de alvo)'], es: ['Asociación con inhibidores fuertes del CYP3A4', 'Uso como prevención en pacientes que ya usan inyectables de CGRP (saturación de blanco)'] },
        relative: { pt: ['Indutores fortes do CYP3A4 (Rifampicina/Carbamazepina farão o Nurtec falhar completamente)'], es: ['Inductores fuertes del CYP3A4 (Rifampicina/Carbamazepina harán fallar el Nurtec completamente)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O FIM DOS TRIPTANOS? Para pacientes com alto risco cardiovascular, o Nurtec ODT e o Ubrelvy substituíram os Triptanos como primeira linha, eliminando o medo de "ter um infarto tratando a dor de cabeça".', es: '¿EL FIN DE LOS TRIPTANOS? Para pacientes con alto riesgo cardiovascular, Nurtec y Ubrelvy sustituyeron a los Triptanos, eliminando el miedo de sufrir infarto tratando el dolor.' }
      }
    },

    /* ── BUILD 399 — Gepantos adicionais + Ditanos + Demência (Alzheimer/Parkinson) ── */

    /* ── ATOGEPANTA ─────────────────────────────────────────────────────── */
    "atogepanta": {
      id: 'atogepanta',
      name: { pt: 'Atogepanta', es: 'Atogepant' },
      category: 'neurologia',
      class: { pt: 'Antagonista Oral do Receptor de CGRP (Gepanto Profilático)', es: 'Antagonista Oral del Receptor de CGRP (Gepanto Profiláctico)' },
      indications: {
        pt: ['Profilaxia (prevenção contínua) da enxaqueca episódica e crônica em adultos'],
        es: ['Profilaxis (prevención continua) de la migraña episódica y crónica en adultos']
      },
      commercialNames: { br: ['Qulipta'], ar: ['Aquipta'] },
      presentation: { pt: ['Comprimidos 10 mg, 30 mg e 60 mg'], es: ['Comprimidos 10 mg, 30 mg y 60 mg'] },
      mechanism: {
        pt: 'Enquanto o Ubrogepanta serve para resgatar a crise, a Atogepanta foi desenhada especificamente para uso DIÁRIO. Ela bloqueia os receptores de CGRP continuamente, impedindo que a inflamação trigeminal aconteça. A ausência de efeito vasoconstritor a torna o substituto moderno para o Topiramato ou Amitriptilina na prevenção em pacientes cardiovasculares ou que não toleram sedação.',
        es: 'Mientras el Ubrogepant sirve para rescatar la crisis, el Atogepant fue diseñado para uso DIARIO. Bloquea los receptores de CGRP continuamente, impidiendo la inflamación trigeminal. Su ausencia de efecto vasoconstrictor lo hace el sustituto moderno del Topiramato en prevención.'
      },
      dose: {
        adult: {
          pt: 'Episódica: 10 mg, 30 mg ou 60 mg via oral UMA VEZ ao dia. Crônica: 60 mg 1x/dia.',
          es: 'Episódica: 10 mg, 30 mg o 60 mg vía oral UNA VEZ al día. Crónica: 60 mg 1x/día.'
        },
        pediatric: { pt: 'Uso não indicado.', es: 'Uso no indicado.' }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos.'], es: ['Puede ser tomado con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr < 30 mL/min ou diálise: dose máxima 10 mg/dia.', es: 'ClCr < 30 mL/min o diálisis: dosis máxima 10 mg/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática severa.', es: 'Contraindicado en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['Constipação intestinal', 'Náusea leve', 'Fadiga e perda de peso leve'], es: ['Constipación intestinal', 'Náusea leve', 'Fatiga y pérdida de peso leve'] },
      dangerousAdverseEffects: { pt: ['Elevação de transaminases hepáticas (raro, mas documentado)'], es: ['Elevación de transaminasas hepáticas (raro, pero documentado)'] },
      contraindications: {
        absolute: { pt: ['Uso associado a inibidores ou indutores potentes do CYP3A4'], es: ['Uso asociado a inhibidores o inductores potentes del CYP3A4'] },
        relative: { pt: ['Gravidez (risco não esclarecido, mecanicamente indesejado na formação vascular fetal)'], es: ['Embarazo (riesgo no aclarado, mecánicamente indeseable)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A VANTAGEM DO PESO: Diferente da Amitriptilina ou Valproato, que engordam os pacientes assustadoramente, a Atogepanta frequentemente induz uma leve perda de peso, o que melhora a adesão ao tratamento diário.', es: 'LA VENTAJA DEL PESO: A diferencia de la Amitriptilina, que engorda a los pacientes, el Atogepant frecuentemente induce una leve pérdida de peso, lo que mejora la adhesión al tratamiento diario.' }
      }
    },

    /* ── ZAVEGEPANTA ────────────────────────────────────────────────────── */
    "zavegepanta": {
      id: 'zavegepanta',
      name: { pt: 'Zavegepanta', es: 'Zavegepant' },
      category: 'neurologia',
      class: { pt: 'Antagonista do Receptor de CGRP (Gepanto Nasal)', es: 'Antagonista del Receptor de CGRP (Gepanto Nasal)' },
      indications: {
        pt: ['Tratamento agudo da enxaqueca (aprovada para crises de ação ultrarrápida)'],
        es: ['Tratamiento agudo de la migraña (aprobada para crisis de acción ultrarrápida)']
      },
      commercialNames: { br: ['Zavzpret'], ar: ['Zavzpret'] },
      presentation: { pt: ['Spray Nasal 10 mg/dose'], es: ['Spray Nasal 10 mg/dosis'] },
      mechanism: {
        pt: 'O "Gepanto do Vômito". Durante uma crise grave de enxaqueca, o estômago paralisa (gastroparesia) e o paciente vomita qualquer comprimido que engole (Triptanos orais, Nurtec, Ubrelvy falham). A Zavegepanta é borrifada no nariz, entra direto na corrente sanguínea em 15 minutos e desliga o receptor de CGRP, abortando a dor sem precisar passar pelo sistema digestivo e sem causar isquemia.',
        es: 'El "Gepanto del Vómito". Durante una crisis grave, el estómago se paraliza y el paciente vomita cualquier comprimido. El Zavegepant se rocía en la nariz, entra a la sangre en 15 minutos y apaga el receptor CGRP sin pasar por el sistema digestivo ni causar isquemia.'
      },
      dose: {
        adult: {
          pt: '1 jato de 10 mg em UMA única narina sob demanda na crise (máximo de 1 jato a cada 24 horas).',
          es: '1 puff de 10 mg en UNA sola fosa nasal a demanda (máximo 1 puff cada 24 horas).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Via estritamente nasal. Não usar descongestionantes nasais junto — a vasoconstrição impede a absorção do Gepanto.'], es: ['Vía estrictamente nasal. No usar descongestionantes nasales junto — la vasoconstricción impedirá la absorción.'] },
      renalAdjustment: { required: false, message: { pt: 'Segura em disfunção moderada; evitar em ClCr < 30 mL/min.', es: 'Segura en disfunción moderada; evitar en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose Child-Pugh C.', es: 'Evitar en cirrosis Child-Pugh C.' } },
      commonAdverseEffects: { pt: ['Disgeusia — gosto amargo/metálico na boca que desce do nariz (afeta ~20% dos usuários)', 'Desconforto nasal'], es: ['Disgeusia — sabor amargo/metálico en la boca (afecta ~20% de los usuarios)', 'Malestar nasal'] },
      dangerousAdverseEffects: { pt: ['Reações alérgicas sistêmicas (urticária facial)'], es: ['Reacciones alérgicas sistémicas (urticaria facial)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes da bomba nasal'], es: ['Hipersensibilidad grave a los componentes de la bomba nasal'] },
        relative: { pt: ['Uso associado com inibidores de transporte OATP1B3 (ex: Rifampicina)'], es: ['Uso asociado con inhibidores de transporte OATP1B3 (ej: Rifampicina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CUIDADO COM O GATILHO DO GOSTO: A Disgeusia forte (gosto metálico no fundo da garganta) pode paradoxalmente piorar a náusea num paciente que já está com o estômago revirado pela enxaqueca.', es: 'CUIDADO CON EL GATILLO DEL GUSTO: La Disgeusia fuerte (sabor metálico en la garganta) puede paradójicamente empeorar la náusea del paciente.' }
      }
    },

    /* ── LASMIDITANA ────────────────────────────────────────────────────── */
    "lasmiditana": {
      id: 'lasmiditana',
      name: { pt: 'Lasmiditana', es: 'Lasmiditán' },
      category: 'neurologia',
      class: { pt: 'Agonista 5-HT1F Seletivo (Ditano)', es: 'Agonista 5-HT1F Selectivo (Ditano)' },
      indications: {
        pt: ['Tratamento agudo da enxaqueca com ou sem aura em adultos (particularmente útil em pacientes cardiovasculares proibidos de usar Triptanos)'],
        es: ['Tratamiento agudo de la migraña con o sin aura en adultos (útil en pacientes cardiovasculares prohibidos de usar Triptanos)']
      },
      commercialNames: { br: ['Reyvow'], ar: ['Reyvow'] },
      presentation: { pt: ['Comprimidos 50 mg e 100 mg'], es: ['Comprimidos 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Uma nova classe (os "Ditanos"). Os triptanos estimulam os receptores 1B (no vaso sanguíneo, causando contração isquêmica) e 1D (no nervo). A Lasmiditana ignora os vasos sanguíneos e age EXCLUSIVAMENTE no receptor 5-HT1F, que fica isolado dentro dos neurônios cerebrais. Ela desliga o nervo trigêmeo "no cérebro", bloqueando a dor sem contrair nem 1 milímetro de artéria.',
        es: 'Una nueva clase ("Ditanos"). Los triptanos estimulan receptores 1B (en el vaso, causando isquemia) y 1D. El Lasmiditán ignora los vasos y actúa EXCLUSIVAMENTE en el receptor 5-HT1F, dentro de neuronas. Apaga el trigémino sin contraer ni 1 milímetro de arteria.'
      },
      dose: {
        adult: {
          pt: '50 mg, 100 mg ou 200 mg via oral no início da dor. NÃO repetir segunda dose em 24h.',
          es: '50 mg, 100 mg o 200 mg vía oral al inicio del dolor. NO repetir segunda dosis en 24h.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Uso restrito. Não repetir a dose na mesma crise.'], es: ['Uso restringido. No repetir la dosis en la misma crisis.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Evitar apenas na falência hepática severa.', es: 'Evitar solo en falla hepática severa.' } },
      commonAdverseEffects: { pt: ['Tontura intensa e vertigem (principal fator limitante)', 'Fadiga extrema e sonolência (sensação de embriaguez)', 'Parestesias'], es: ['Mareo intenso y vértigo (principal factor limitante)', 'Fatiga extrema y somnolencia (sensación de embriaguez)', 'Parestesias'] },
      dangerousAdverseEffects: { pt: ['Depressão profunda do SNC', 'Síndrome Serotoninérgica (risco maior que triptanos)'], es: ['Depresión profunda del SNC', 'Síndrome Serotoninérgico (riesgo mayor que triptanos)'] },
      contraindications: {
        absolute: { pt: ['Uso simultâneo com depressores centrais (álcool, benzodiazepínicos)', 'Pacientes que precisam dirigir imediatamente'], es: ['Uso simultáneo con depresores centrales (alcohol, benzodiacepinas)', 'Pacientes que necesitan conducir inmediatamente'] },
        relative: { pt: ['Idosos suscetíveis a quedas e delírios'], es: ['Ancianos susceptibles a caídas y delirios'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DAS 8 HORAS: O FDA determinou uma proibição legal — o paciente está estritamente proibido de dirigir veículos ou operar máquinas por no mínimo 8 HORAS após tomar a Lasmiditana, mesmo que "se sinta bem".', es: 'LA REGLA DE LAS 8 HORAS: La FDA determinó una prohibición legal — el paciente está estrictamente prohibido de conducir vehículos por al menos 8 HORAS tras tomar el Lasmiditán, incluso si "se siente bien".' }
      }
    },

    /* ── DONEPEZILA ─────────────────────────────────────────────────────── */
    "donepezila": {
      id: 'donepezila',
      name: { pt: 'Donepezila (Cloridrato de)', es: 'Donepezilo (Clorhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Inibidor da Acetilcolinesterase Central', es: 'Inhibidor de la Acetilcolinesterasa Central' },
      indications: {
        pt: ['Tratamento sintomático da demência na Doença de Alzheimer (leve a grave)'],
        es: ['Tratamiento sintomático de la demencia en la Enfermedad de Alzheimer (leve a grave)']
      },
      commercialNames: { br: ['Eranz', 'Donepezila'], ar: ['Memorex', 'Donepezilo'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg e 10 mg', 'Comprimidos orodispersíveis'], es: ['Comprimidos recubiertos 5 mg y 10 mg', 'Comprimidos orodispersables'] },
      mechanism: {
        pt: 'O cérebro com Alzheimer destrói os neurônios que produzem Acetilcolina (o neurotransmissor da memória). A Donepezila bloqueia a enzima (acetilcolinesterase) que reciclaria e destruiria a acetilcolina restante. Resultado: a pouca acetilcolina que o idoso ainda tem acumula-se nas fendas sinápticas, melhorando transitoriamente a memória, a clareza e as atividades diárias.',
        es: 'El cerebro con Alzheimer destruye las neuronas que producen Acetilcolina. El Donepezilo bloquea la enzima que reciclaría la acetilcolina restante. Resultado: la poca acetilcolina que el anciano aún tiene se acumula en las sinapsis, mejorando transitoriamente la memoria.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 5 mg UMA VEZ ao dia (à noite, antes de dormir) por 4 a 6 semanas. Se bem tolerado, subir para 10 mg/dia.',
          es: 'Iniciar con 5 mg UNA VEZ al día (a la noche) por 4 a 6 semanas. Si bien tolerado, subir a 10 mg/día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Tomada noturna preferida — a droga causa náuseas e síncope; dormindo, o paciente sente menos esses efeitos.'], es: ['Toma nocturna preferida — la droga causa náuseas y síncope; durmiendo, el paciente siente menos estos efectos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar ou reduzir na cirrose severa — acúmulo plasmático.', es: 'Evitar o reducir en cirrosis severa — acúmulo plasmático.' } },
      commonAdverseEffects: { pt: ['Náuseas, Vômitos e Diarreia severa (excesso de acetilcolina sistêmica)', 'Pesadelos vívidos e sonhos anormais', 'Cãibras musculares'], es: ['Náuseas, Vómitos y Diarrea severa (exceso de acetilcolina sistémica)', 'Pesadillas vívidas y sueños anormales', 'Calambres musculares'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa e Bloqueio Atrioventricular (síncope)', 'Úlceras gastrointestinais (excesso de ácido induzido por acetilcolina)'], es: ['Bradicardia severa y Bloqueo Auriculoventricular (síncope)', 'Úlceras gastrointestinales (exceso de ácido)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade a derivados de piperidina', 'Bloqueio Atrioventricular de alto grau sem marcapasso'], es: ['Hipersensibilidad a derivados de piperidina', 'Bloqueo Auriculoventricular de alto grado sin marcapasos'] },
        relative: { pt: ['Asma grave ou DPOC (acetilcolina contrai brônquios)', 'Histórico de úlceras', 'Epilepsia'], es: ['Asma grave o EPOC (acetilcolina contrae bronquios)', 'Historial de úlceras', 'Epilepsia'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ENGANO DA CURA: A família deve ser avisada de que a Donepezila NÃO PARA a destruição do cérebro. Ela apenas age como um "óleo no motor quebrado", mascarando os sintomas. A doença continua a progredir e, após alguns anos, o remédio perderá o efeito.', es: 'EL ENGAÑO DE LA CURA: La familia debe ser avisada que el Donepezilo NO DETIENE la destrucción del cerebro. Solo actúa como "aceite en el motor roto". La enfermedad continúa y tras años el remedio perderá el efecto.' }
      }
    },

    /* ── RIVASTIGMINA ───────────────────────────────────────────────────── */
    "rivastigmina": {
      id: 'rivastigmina',
      name: { pt: 'Rivastigmina', es: 'Rivastigmina' },
      category: 'neurologia',
      class: { pt: 'Inibidor da Acetilcolinesterase e Butirilcolinesterase Central', es: 'Inhibidor de la Acetilcolinesterasa y Butirilcolinesterasa Central' },
      indications: {
        pt: ['Demência da Doença de Alzheimer', 'Demência associada à Doença de Parkinson (única da classe formalmente aprovada para isso)'],
        es: ['Demencia de la Enfermedad de Alzheimer', 'Demencia asociada a la Enfermedad de Parkinson (única formalmente aprobada para esto)']
      },
      commercialNames: { br: ['Exelon', 'Exelon Patch'], ar: ['Exelon'] },
      presentation: { pt: ['Cápsulas 1,5 mg, 3 mg, 4,5 mg e 6 mg', 'Adesivos Transdérmicos (Patch) 4,6 mg/24h, 9,5 mg/24h, 13,3 mg/24h', 'Solução Oral'], es: ['Cápsulas 1,5 mg, 3 mg, 4,5 mg y 6 mg', 'Parches Transdérmicos (Patch) 4,6 mg/24h, 9,5 mg/24h, 13,3 mg/24h', 'Solución Oral'] },
      mechanism: {
        pt: 'Diferente da donepezila (que inibe apenas a acetilcolinesterase), a Rivastigmina é um inibidor DUPLO: inibe também a Butirilcolinesterase, tornando-a formidável para o Parkinson com demência. As cápsulas orais causavam tanto vômito que os pacientes desistiam. A genialidade foi criar o ADESIVO (Patch), que infunde a droga pela pele, pulando o estômago e zerando o vômito.',
        es: 'A diferencia del donepezilo, la Rivastigmina es un inhibidor DOBLE: también inhibe la Butirilcolinesterasa, haciéndola formidable para Parkinson con demencia. La genialidad fue crear el PARCHE (Patch), que infunde la droga por la piel, saltando el estómago y eliminando el vómito.'
      },
      dose: {
        adult: {
          pt: 'Oral: Iniciar com 1,5 mg 2x/dia; aumentar lentamente até máx. 6 mg 2x/dia. Patch: Iniciar com 4,6 mg/24h; após 4 semanas, trocar para 9,5 mg/24h (dose alvo).',
          es: 'Oral: Iniciar con 1,5 mg 2x/día; aumentar lentamente hasta 6 mg 2x/día. Parche: Iniciar con 4,6 mg/24h; tras 4 semanas, cambiar al de 9,5 mg/24h (dosis objetivo).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['O Adesivo deve ser colado nas costas, peito ou braço e TROCADO A CADA 24 HORAS. Nunca usar dois adesivos simultâneos.'], es: ['El Parche debe ser pegado en la espalda, pecho o brazo y CAMBIADO CADA 24 HORAS. Nunca usar dos parches simultáneos.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em DRC.', es: 'No requiere ajuste en ERC.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose em insuficiência hepática moderada/severa.', es: 'Reducir dosis en insuficiencia hepática moderada/severa.' } },
      commonAdverseEffects: { pt: ['Reação cutânea no local do adesivo (eritema, coceira)', 'Perda de peso intensa e anorexia (monitorar peso mensal)', 'Tremores agravados (no Parkinson)'], es: ['Reacción cutánea en el lugar del parche (eritema, picazón)', 'Pérdida de peso intensa y anorexia (monitorear peso mensual)', 'Temblores agravados (en Parkinson)'] },
      dangerousAdverseEffects: { pt: ['Síncope por bradicardia profunda', 'Convulsões e úlcera perfurada'], es: ['Síncope por bradicardia profunda', 'Convulsiones y úlcera perforada'] },
      contraindications: {
        absolute: { pt: ['Alergia de contato grave aos adesivos de carbamatato', 'Bloqueio cardíaco avançado'], es: ['Alergia de contacto grave a los parches', 'Bloqueo cardíaco avanzado'] },
        relative: { pt: ['Doença de úlcera péptica ativa', 'Asma brônquica severa'], es: ['Enfermedad de úlcera péptica activa', 'Asma bronquial severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO IATROGÊNICO DO ADESIVO: Idosos dementes frequentemente colam um novo adesivo sem tirar o velho. Ao acumular 2, 3 ou 4 adesivos no corpo, o paciente sofre um envenenamento colinérgico letal (salivação maciça, parada cardíaca, coma). SEMPRE TIRE O VELHO ANTES DE COLAR O NOVO.', es: 'ERROR IATROGÉNICO DEL PARCHE: Ancianos dementes frecuentemente pegan un nuevo parche sin quitar el viejo. Al acumular 3 o 4 parches, sufren un envenenamiento colinérgico letal. SIEMPRE QUITE EL VIEJO ANTES DE PEGAR EL NUEVO.' }
      }
    },

    /* ── BUILD 400 — Demência avançada + Esclerose Múltipla ── */

    /* ── GALANTAMINA ────────────────────────────────────────────────────── */
    "galantamina": {
      id: 'galantamina',
      name: { pt: 'Galantamina (Bromidrato de)', es: 'Galantamina (Bromhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Inibidor da Acetilcolinesterase / Modulador Nicotínico', es: 'Inhibidor de la Acetilcolinesterasa / Modulador Nicotínico' },
      indications: {
        pt: ['Demência da Doença de Alzheimer (leve a moderadamente grave)'],
        es: ['Demencia de la Enfermedad de Alzheimer (leve a moderadamente grave)']
      },
      commercialNames: { br: ['Reminyl', 'Cogmed'], ar: ['Reminyl'] },
      presentation: { pt: ['Cápsulas de liberação prolongada (ER) 8 mg, 16 mg e 24 mg', 'Comprimidos convencionais 4 mg, 8 mg e 12 mg'], es: ['Cápsulas de liberación prolongada (ER) 8 mg, 16 mg y 24 mg', 'Comprimidos convencionales 4 mg, 8 mg y 12 mg'] },
      mechanism: {
        pt: 'Ação DUPLA e exclusiva. Como a Donepezila, inibe a acetilcolinesterase. Mas o seu grande diferencial é agir como "Modulador Alostérico Positivo" nos receptores Nicotínicos: ela se liga no receptor e faz com que ele abra mais facilmente, turbinando a transmissão colinérgica pré e pós-sináptica na memória.',
        es: 'Acción DOBLE y exclusiva. Como el Donepezilo, inhibe la acetilcolinesterasa. Pero su gran diferencial es actuar como "Modulador Alostérico Positivo" en los receptores Nicotínicos: hace que el receptor se abra más fácilmente, turbinando la transmisión colinérgica.'
      },
      dose: {
        adult: {
          pt: 'Cápsulas ER: Iniciar com 8 mg UMA VEZ ao dia (de manhã) por 4 semanas. Se bem tolerado, subir para 16 mg/dia. Dose máxima de 24 mg/dia.',
          es: 'Cápsulas ER: Iniciar con 8 mg UNA VEZ al día (por la mañana) por 4 semanas. Si se tolera bien, subir a 16 mg/día. Dosis máxima 24 mg/día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Administrar de preferência com o café da manhã (cápsula ER). Monitorar perda de apetite e peso mensal.'], es: ['Administrar de preferencia con el desayuno (cápsula ER). Monitorizar pérdida de apetito y peso mensual.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose máx. para 16 mg/dia se ClCr entre 9-59 mL/min. Contraindicado em ClCr < 9.', es: 'Reducir dosis máx. a 16 mg/día si ClCr entre 9-59 mL/min. Contraindicado en ClCr < 9.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Máximo 16 mg/dia em insuficiência moderada. Contraindicado em Child-Pugh C.', es: 'Máximo 16 mg/día en insuficiencia moderada. Contraindicado en Child-Pugh C.' } },
      commonAdverseEffects: { pt: ['Náuseas e vômitos (principal motivo de abandono)', 'Perda de peso involuntária e anorexia', 'Tontura e tremor'], es: ['Náuseas y vómitos (principal motivo de abandono)', 'Pérdida de peso involuntaria y anorexia', 'Mareo y temblor'] },
      dangerousAdverseEffects: { pt: ['Síncope por bradicardia severa', 'Síndrome de Stevens-Johnson (raro)'], es: ['Síncope por bradicardia severa', 'Síndrome de Stevens-Johnson (raro)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Insuficiência renal e hepática severas simultâneas'], es: ['Hipersensibilidad', 'Insuficiencia renal y hepática severas simultáneas'] },
        relative: { pt: ['Uso associado com betabloqueadores (risco de parada sinusal)'], es: ['Uso asociado con betabloqueantes (riesgo de parada sinusal)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'CUIDADO COM A DOENÇA CARDÍACA: A Galantamina força o sistema parassimpático e o nervo vago "freia" o coração intensamente. Em idosos com doença no Nó Sinusal, isso pode causar bloqueio total e parada cardíaca transitória.', es: 'CUIDADO CON LA ENFERMEDAD CARDÍACA: La Galantamina fuerza el sistema parasimpático. En ancianos con enfermedad en el Nodo Sinusal, puede causar bloqueo total y parada cardíaca transitoria.' }
      }
    },

    /* ── MEMANTINA ──────────────────────────────────────────────────────── */
    "memantina": {
      id: 'memantina',
      name: { pt: 'Memantina (Cloridrato de)', es: 'Memantina (Clorhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Antagonista do Receptor NMDA (Neuroprotetor)', es: 'Antagonista del Receptor NMDA (Neuroprotector)' },
      indications: {
        pt: ['Doença de Alzheimer moderada a GRAVE (frequentemente associada à Donepezila)'],
        es: ['Enfermedad de Alzheimer moderada a GRAVE (frecuentemente asociada a Donepezilo)']
      },
      commercialNames: { br: ['Alois', 'Ebix', 'Heimer'], ar: ['Akatinol'] },
      presentation: { pt: ['Comprimidos 10 mg e 20 mg', 'Solução oral 10 mg/mL'], es: ['Comprimidos 10 mg y 20 mg', 'Solución oral 10 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo revolucionário não-colinérgico. No Alzheimer, células doentes vazam glutamato sem parar. O excesso mantém os receptores NMDA sempre abertos, permitindo entrada excessiva de cálcio nos neurônios sadios — "excitotoxicidade" (neurônio queima e morre). A Memantina funciona como uma "rolha de baixa afinidade" no canal: bloqueia o vazamento letal de fundo, mas sai quando o cérebro precisa criar uma memória real. Salva neurônios sem sedar.',
        es: 'Mecanismo no colinérgico. En el Alzheimer, células enfermas gotean glutamato. El exceso mantiene receptores NMDA abiertos, quemando neuronas (excitotoxicidad). La Memantina funciona como un "tapón": bloquea el goteo letal de fondo, pero cede cuando el cerebro necesita crear una memoria. Salva neuronas.'
      },
      dose: {
        adult: {
          pt: 'Titulação LENTA obrigatória: 5 mg/dia na Semana 1 → 10 mg/dia Semana 2 → 15 mg/dia Semana 3 → 20 mg/dia Semana 4 (dose-alvo: 10 mg 2x/dia).',
          es: 'Titulación LENTA obligatoria: 5 mg/día Semana 1 → 10 mg/día Semana 2 → 15 mg/día Semana 3 → 20 mg/día Semana 4 (dosis objetivo: 10 mg 2x/día).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Com ou sem alimentos. Titulação gradual é OBRIGATÓRIA para evitar surtos de confusão/tontura.'], es: ['Con o sin alimentos. Titulación gradual es OBLIGATORIA para evitar brotes de confusión/mareo.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr < 30 mL/min: dose MÁXIMA 10 mg/dia (eliminação quase puramente renal).', es: 'ClCr < 30 mL/min: dosis MÁXIMA 10 mg/día (eliminación puramente renal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico na cirrose.', es: 'Sin necesidad de ajuste clínico en cirrosis.' } },
      commonAdverseEffects: { pt: ['Tontura e cefaleia', 'Constipação', 'Confusão mental nos primeiros dias da introdução'], es: ['Mareo y cefalea', 'Constipación', 'Confusión mental en los primeros días'] },
      dangerousAdverseEffects: { pt: ['Alucinações e delírios intensos (se a dose for aumentada muito rapidamente)'], es: ['Alucinaciones y delirios intensos (si la dosis se aumenta muy rápido)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Epilepsia ou histórico de convulsões', 'ITU por bactérias desdobradoras de ureia (alcalinizam urina — ver interações)'], es: ['Epilepsia o historial de convulsiones', 'ITU por bacterias que alcalinizan orina (ver interacciones)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'TERAPIA COMBINADA OBRIGATÓRIA NA FASE GRAVE: A diretriz moderna dita que o Alzheimer severo deve usar Donepezila E Memantina juntas. Uma droga dá mais acetilcolina (combustível) e a outra protege contra o glutamato (tóxico). A união estabiliza a agressividade e retarda o declínio.', es: 'TERAPIA COMBINADA EN FASE GRAVE: La directriz moderna dicta usar Donepezilo Y Memantina juntos. Una da acetilcolina y la otra protege del glutamato. Estabiliza la agresividad y retrasa el declive.' }
      }
    },

    /* ── LECANEMABE ─────────────────────────────────────────────────────── */
    "lecanemabe": {
      id: 'lecanemabe',
      name: { pt: 'Lecanemabe', es: 'Lecanemab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-Amiloide (Antiamiloide — Ligante de Protofibrila)', es: 'Anticuerpo Monoclonal Anti-Amiloide (Antiamiloide — Ligante de Protofibrila)' },
      indications: {
        pt: ['Doença de Alzheimer precoce (Comprometimento Cognitivo Leve ou Demência Leve) com PRESENÇA CONFIRMADA de placas beta-amiloide'],
        es: ['Enfermedad de Alzheimer precoz (Deterioro Cognitivo Leve o Demencia Leve) con PRESENCIA CONFIRMADA de placas beta-amiloide']
      },
      commercialNames: { br: ['Leqembi'], ar: ['Leqembi'] },
      presentation: { pt: ['Frasco-ampola IV 500 mg/5 mL'], es: ['Vial IV 500 mg/5 mL'] },
      mechanism: {
        pt: 'A Droga que Muda a Doença. O Alzheimer é causado pelo acúmulo de proteínas beta-amiloide que formam placas e esmagam neurônios. O Lecanemabe identifica as protofibrilas amiloides (a fase mais tóxica antes de virar placa), liga-se a elas e sinaliza aos macrófagos cerebrais para "comer e limpar" o lixo. Remove as placas, retardando o declínio cognitivo em 27% — pela primeira vez na história.',
        es: 'La Droga que Cambia la Enfermedad. El Lecanemab identifica las protofibrillas amiloides (la fase más tóxica antes de volverse placa), se une a ellas y señaliza a los macrófagos para "comer y limpiar". Remueve las placas, retrasando el declive cognitivo en 27%.'
      },
      dose: {
        adult: {
          pt: '10 mg/kg de peso corporal via Infusão Intravenosa a cada 2 SEMANAS.',
          es: '10 mg/kg de peso corporal vía Infusión Intravenosa cada 2 SEMANAS.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Infusão IV em 1 hora. Requer PET-Scan amiloide positivo ou LCR positivo antes de iniciar — sem confirmação, o remédio é inútil. RM obrigatória antes da 5ª, 7ª e 14ª doses para rastrear ARIA.'], es: ['Infusión IV en 1 hora. Requiere PET-Scan amiloide positivo o LCR positivo antes de iniciar. RM obligatoria antes de la 5ª, 7ª y 14ª dosis para rastrear ARIA.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Reação à infusão (febre, calafrios, dores no corpo)', 'Cefaleia', 'Tosse e diarreia'], es: ['Reacción a la infusión (fiebre, escalofríos)', 'Cefalea', 'Tos y diarrea'] },
      dangerousAdverseEffects: { pt: ['ARIA-E (edema cerebral visível na RM — confusão aguda)', 'ARIA-H (hemorragia cerebral severa e micro-sangramentos)'], es: ['ARIA-E (edema cerebral visible en RM)', 'ARIA-H (hemorragia cerebral severa y microsangramientos)'] },
      contraindications: {
        absolute: { pt: ['Anticoagulantes orais ou sistêmicos (risco de hemorragia cerebral fatal)', 'Micro-hemorragias severas prévias na RM basal'], es: ['Anticoagulantes orales o sistémicos (riesgo de hemorragia cerebral fatal)', 'Microhemorragias severas previas en RM basal'] },
        relative: { pt: ['Portadores homozigotos do gene APOE4 (risco altíssimo de ARIA)'], es: ['Portadores homocigotos del gen APOE4 (riesgo altísimo de ARIA)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DAS HEMORRAGIAS: Limpar a placa amiloide é perigoso porque a placa muitas vezes está grudada na parede das veias cerebrais. Ao "arrancar" a placa, o vaso rasga e o paciente tem sangramento (ARIA-H). RM é OBRIGATÓRIA antes de iniciar e em datas fixas durante o tratamento.', es: 'LA CAJA NEGRA DE HEMORRAGIAS: Limpiar la placa es peligroso porque muchas veces está pegada en la pared de las venas cerebrales. Al "arrancar" la placa, el vaso se rasga. RM es OBLIGATORIA antes de iniciar y en fechas fijas durante el tratamiento.' }
      }
    },

    /* ── DONANEMABE ─────────────────────────────────────────────────────── */
    "donanemabe": {
      id: 'donanemabe',
      name: { pt: 'Donanemabe', es: 'Donanemab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-Amiloide (Alvo N3pG-Amiloide)', es: 'Anticuerpo Monoclonal Anti-Amiloide (Blanco N3pG-Amiloide)' },
      indications: {
        pt: ['Doença de Alzheimer precoce e Comprometimento Cognitivo Leve com presença patológica comprovada de placas beta-amiloide'],
        es: ['Enfermedad de Alzheimer precoz y Deterioro Cognitivo Leve con presencia comprobada de placas beta-amiloide']
      },
      commercialNames: { br: ['Kisunla'], ar: ['Kisunla'] },
      presentation: { pt: ['Frasco-ampola IV para infusão'], es: ['Vial IV para infusión'] },
      mechanism: {
        pt: 'Diferente do Lecanemabe (que mira na protofibrila flutuante), o Donanemabe é ultra-específico: mira APENAS nas placas maduras e endurecidas já estabelecidas (resíduo N3pG). Induz varredura maciça por fagocitose microglial. Seu grande diferencial clínico é a "Terapia com Prazo Final": limpa a placa tão agressivamente que, se o PET-Scan mostrar que o cérebro "limpou", o tratamento PODE SER PARADO — diferente de outros que são para o resto da vida.',
        es: 'A diferencia del Lecanemab, apunta SOLO a las placas maduras y endurecidas (N3pG). Induce un barrido masivo por fagocitosis microglial. Su gran diferencial es la "Terapia con Plazo Final": limpia la placa tan rápido que, si el PET-Scan muestra el cerebro "limpio", el tratamiento PUEDE SER DETENIDO.'
      },
      dose: {
        adult: {
          pt: 'IV a CADA 4 SEMANAS (mensal): 700 mg nas 3 primeiras infusões → 1400 mg nas seguintes.',
          es: 'IV CADA 4 SEMANAS (mensual): 700 mg en las 3 primeras infusiones → 1400 mg en las siguientes.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Infusão IV ao longo de 30 minutos a cada 4 semanas. RM obrigatória para rastreamento de ARIA antes de iniciar e periodicamente.'], es: ['Infusión IV en 30 minutos cada 4 semanas. RM obligatoria para rastreo de ARIA antes de iniciar y periódicamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Reação sistêmica à infusão', 'Dores de cabeça', 'Náuseas'], es: ['Reacción sistémica a la infusión', 'Dolores de cabeza', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['ARIA-E (edema e inchaço cerebral sintomático, confusão mental aguda)', 'ARIA-H (hemorragia cerebral franca com risco de morte)'], es: ['ARIA-E (edema cerebral sintomático, confusión mental aguda)', 'ARIA-H (hemorragia cerebral franca con riesgo de muerte)'] },
      contraindications: {
        absolute: { pt: ['Anticoagulantes, histórico de AVC hemorrágico', 'Múltiplas anormalidades isquêmicas na RM basal'], es: ['Anticoagulantes, historial de ACV hemorrágico', 'Múltiples anormalidades isquémicas en la RM basal'] },
        relative: { pt: ['Ausência de triagem genética para APOE ε4 (portadores têm risco monstruoso de edema cerebral)'], es: ['Ausencia de triaje genético para APOE ε4 (portadores tienen riesgo enorme de edema cerebral)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O CHOQUE DE REALIDADE: Lecanemabe e Donanemabe NÃO CURAM a memória já perdida e NÃO SÃO para pacientes graves (acamados). Só funcionam no Alzheimer inicial para evitar que o quadro piore. Usar na fase grave só arrisca causar hemorragia fatal num cérebro já frágil.', es: 'EL CHOQUE DE REALIDAD: No curan la memoria perdida y NO SON para pacientes graves (postrados). Solo funcionan en el Alzheimer inicial. Usarlos en fase grave solo arriesga causar hemorragia fatal.' }
      }
    },

    /* ── INTERFERON BETA-1A ─────────────────────────────────────────────── */
    "interferon_beta_1a": {
      id: 'interferon_beta_1a',
      name: { pt: 'Interferon beta-1a', es: 'Interferón beta-1a' },
      category: 'neurologia',
      class: { pt: 'Imunomodulador do Sistema Nervoso Central', es: 'Inmunomodulador del Sistema Nervioso Central' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente (tratamento modificador — reduz número e severidade dos surtos)', 'Primeiro evento desmielinizante isolado com risco de EM'],
        es: ['Esclerosis Múltiple Recurrente-Remitente (tratamiento modificador)', 'Primer evento desmielinizante aislado con riesgo de EM']
      },
      commercialNames: { br: ['Avonex', 'Rebif'], ar: ['Avonex', 'Rebif'] },
      presentation: { pt: ['Seringa/Caneta IM 30 mcg (Avonex — 1x/semana)', 'Seringa SC 22 mcg e 44 mcg (Rebif — 3x/semana)'], es: ['Jeringa/Pluma IM 30 mcg (Avonex — 1x/semana)', 'Jeringa SC 22 mcg y 44 mcg (Rebif — 3x/semana)'] },
      mechanism: {
        pt: 'A EM ocorre quando células T autoimunes invadem o cérebro e destroem a mielina. O Interferon Beta-1a é uma proteína natural que modula o sistema imune: diminui a apresentação de antígenos, bloqueia as células T no sangue e fortifica a barreira hematoencefálica, "trancando as portas" do cérebro para impedir que leucócitos entrem e ataquem a mielina.',
        es: 'La EM ocurre cuando células T autoinmunes invaden el cerebro y destruyen la mielina. El Interferón Beta-1a modula el sistema inmune: bloquea las células T en sangre y fortifica la barrera hematoencefálica, "cerrando las puertas" para impedir que ataquen la mielina.'
      },
      dose: {
        adult: {
          pt: 'Avonex (IM): 30 mcg UMA VEZ POR SEMANA. Rebif (SC): 44 mcg TRÊS VEZES POR SEMANA (dias não consecutivos).',
          es: 'Avonex (IM): 30 mcg UNA VEZ POR SEMANA. Rebif (SC): 44 mcg TRES VECES POR SEMANA (días no consecutivos).'
        },
        pediatric: { pt: 'Pode ser usado em adolescentes em casos selecionados (ajuste especializado).', es: 'Puede usarse en adolescentes en casos seleccionados.' }
      },
      administration: { pt: ['No dia da injeção, OBRIGATÓRIO prescrever Paracetamol ou Ibuprofeno preventivo para cortar a Síndrome Gripal induzida pela droga.'], es: ['El día de la inyección, OBLIGATORIO prescribir Paracetamol o Ibuprofeno para cortar el Síndrome Gripal inducido.'] },
      renalAdjustment: { required: false, message: { pt: 'Precaução em DRC severa (monitorar albuminúria).', es: 'Precaución en ERC severa (monitorizar albuminuria).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Monitoramento hepático rigoroso — risco de hepatotoxicidade autoimune e medicamentosa.', es: 'Monitorización hepática rigurosa — riesgo de hepatotoxicidad autoinmune y medicamentosa.' } },
      commonAdverseEffects: { pt: ['SÍNDROME GRIPAL SEVERA (febre 39°C, calafrios, dores intensas 2-6h após CADA injeção)', 'Reação cutânea no local da injeção', 'Depressão'], es: ['SÍNDROME GRIPAL SEVERA (fiebre, escalofríos, dolores intensos 2-6h tras CADA inyección)', 'Reacción cutánea', 'Depresión'] },
      dangerousAdverseEffects: { pt: ['Ideação suicida e suicídio consumado (efeito colateral psiquiátrico negro da medicação)', 'Lesão hepática grave e falência hepática', 'Leucopenia sistêmica'], es: ['Ideación suicida y suicidio consumado', 'Lesión hepática grave', 'Leucopenia sistémica'] },
      contraindications: {
        absolute: { pt: ['Depressão ativa severa e ideação suicida prévia', 'Doença hepática descompensada'], es: ['Depresión activa severa e ideación suicida previa', 'Enfermedad hepática descompensada'] },
        relative: { pt: ['Epilepsia com convulsões não controladas'], es: ['Epilepsia con convulsiones no controladas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DEPRESSÃO DA ESCLEROSE: O paciente com EM já sofre alta taxa de depressão e fadiga. O Interferon injetável destrói o humor com síndrome gripal crônica e pode induzir surto suicida violento. Monitoramento psiquiátrico mensal é inegociável.', es: 'DEPRESIÓN DE LA ESCLEROSIS: El paciente con EM ya sufre alta tasa de depresión. El Interferón injetável destruye el humor y puede inducir un brote suicida. Monitoreo psiquiátrico mensual es innegociable.' }
      }
    },

    /* ── BUILD 401 — Imunomoduladores EM: Interferons + S1P ── */

    /* ── INTERFERON BETA-1B ─────────────────────────────────────────────── */
    "interferon_beta_1b": {
      id: 'interferon_beta_1b',
      name: { pt: 'Interferon beta-1b', es: 'Interferón beta-1b' },
      category: 'neurologia',
      class: { pt: 'Imunomodulador do Sistema Nervoso Central', es: 'Inmunomodulador del Sistema Nervioso Central' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente', 'Síndrome Clinicamente Isolada (primeiro ataque de EM)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente', 'Síndrome Clínicamente Aislado (primer ataque de EM)']
      },
      commercialNames: { br: ['Betaferon', 'Extavia'], ar: ['Betaferon'] },
      presentation: { pt: ['Frasco-ampola com pó liofilizado para injeção SC 0,3 mg (250 mcg ou 8 milhões de UI)'], es: ['Vial con polvo liofilizado para inyección SC 0,3 mg (250 mcg)'] },
      mechanism: {
        pt: 'Mecanismo imunorregulador idêntico ao do interferon beta-1a, inibindo a expressão de moléculas inflamatórias e bloqueando a migração de linfócitos T reativos para dentro do cérebro. A principal diferença farmacológica é a posologia e a estrutura proteica ligeiramente alterada (produzida em bactérias E. coli em vez de células de mamíferos), o que exige aplicações mais frequentes.',
        es: 'Mecanismo inmunorregulador idéntico al interferón beta-1a. La principal diferencia farmacológica es la posología y la estructura proteica (producida en bacterias E. coli en vez de células de mamíferos), lo que exige aplicaciones más frecuentes.'
      },
      dose: {
        adult: {
          pt: '250 mcg (1 injeção completa) por via Subcutânea em DIAS ALTERNADOS (Dia sim, Dia não).',
          es: '250 mcg (1 inyección) por vía Subcutánea en DÍAS ALTERNOS (Día sí, Día no).'
        },
        pediatric: {
          pt: 'Uso aprovado a partir de 12 anos em casos severos.',
          es: 'Uso aprobado a partir de 12 años en casos severos.'
        }
      },
      administration: { pt: ['Injeção Subcutânea. DEVE-SE rodiziar estritamente os locais de injeção (coxa, abdome, braço, nádegas) para evitar necrose severa da pele. Tomar analgésico preventivo.'], es: ['Inyección Subcutánea. SE DEBE rotar estrictamente los lugares de inyección para evitar necrosis de piel. Tomar analgésico preventivo.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Avaliar transaminases rotineiramente. Risco de injúria hepática medicamentosa.', es: 'Evaluar transaminasas rutinariamente. Riesgo de injuria hepática.' } },
      commonAdverseEffects: { pt: ['Síndrome Flu-like (Febre, mialgia, calafrios - ocorre em quase 60% dos pacientes nos primeiros meses)', 'Reação local (Vermelhidão e dor)'], es: ['Síndrome Flu-like (Fiebre, mialgia, escalofríos - en casi 60% de pacientes)', 'Reacción local (Enrojecimiento y dolor)'] },
      dangerousAdverseEffects: { pt: ['Necrose profunda no local da injeção (O tecido morre e escurece, exigindo desbridamento)', 'Depressão maior e Suicídio'], es: ['Necrosis profunda en el lugar de la inyección (El tejido muere y oscurece)', 'Depresión mayor y Suicidio'] },
      contraindications: {
        absolute: { pt: ['Depressão grave ou ideação suicida', 'Hipersensibilidade', 'Insuficiência hepática descompensada'], es: ['Depresión grave o ideación suicida', 'Hipersensibilidad', 'Insuficiencia hepática descompensada'] },
        relative: { pt: ['Doenças autoimunes da tireoide (Pode deflagrar hipotireoidismo agudo)'], es: ['Enfermedades autoinmunes de la tiroides'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA DE NECROSE: O Interferon beta-1b tem a perigosa capacidade de causar microtromboses na pele onde é injetado. O paciente NÃO DEVE injetar em locais que estejam doloridos, com hematomas ou nós duros. Se a pele ficar preta, a injeção deve ser imediatamente transferida de área.', es: 'ALERTA DE NECROSIS: El Interferón beta-1b puede causar microtrombosis en la piel. El paciente NO DEBE inyectar en lugares con hematomas o nódulos. Si la piel se pone negra, transferir de área inmediatamente.' }
      }
    },

    /* ── ACETATO DE GLATIRÂMER ──────────────────────────────────────────── */
    "glatiramer": {
      id: 'glatiramer',
      name: { pt: 'Acetato de Glatirâmer', es: 'Acetato de Glatirámero' },
      category: 'neurologia',
      class: { pt: 'Polipeptídeo Sintético Imunomodulador (Falso-Alvo)', es: 'Polipéptido Sintético Inmunomodulador (Falso Blanco)' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente (Excelente opção de 1ª linha de baixíssimo risco sistêmico)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente (Excelente opción de 1ª línea de bajísimo riesgo sistémico)']
      },
      commercialNames: { br: ['Copaxone'], ar: ['Copaxone'] },
      presentation: { pt: ['Seringas preenchidas SC 20 mg/mL e 40 mg/mL'], es: ['Jeringas prellenadas SC 20 mg/mL y 40 mg/mL'] },
      mechanism: {
        pt: 'Um mecanismo genial de distração imunológica. É uma proteína sintética que "imita" a Proteína Básica de Mielina (o tecido que os leucócitos do paciente com EM estão atacando no cérebro). Quando injetada sob a pele, os linfócitos T do corpo são atraídos por esse "falso-alvo" e atacam a droga na perna/braço, esquecendo de atacar a mielina verdadeira no cérebro. Reduz em 30% os surtos de EM sem ser imunossupressor real.',
        es: 'Un mecanismo genial de distracción inmunológica. Proteína sintética que "imita" la Proteína Básica de Mielina. Al inyectarse bajo la piel, los linfocitos T son atraídos por este "falso blanco" en la pierna, olvidando atacar la mielina en el cerebro. Reduce en 30% los brotes sin ser inmunosupresor real.'
      },
      dose: {
        adult: {
          pt: '20 mg SC UMA VEZ AO DIA (Diário) OU 40 mg SC TRÊS VEZES NA SEMANA (A formulação de 40mg melhorou imensamente a qualidade de vida).',
          es: '20 mg SC UNA VEZ AL DÍA (Diario) O 40 mg SC TRES VECES A LA SEMANA.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Injeção subcutânea. Devido ao mecanismo, reações locais severas (Lipoatrofia - buracos na pele) são extremamente comuns se não rodiziar.'], es: ['Inyección subcutánea. Reacciones locales severas (Lipoatrofia - agujeros en la piel) son muy comunes si no se rota el lugar.'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente degradado por hidrólise enzimática local em aminoácidos. Sem ajuste.', es: 'Degradado por hidrólisis local. Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Lipoatrofia (A gordura embaixo da injeção derrete, formando "covas" na pele)', 'Vermelhidão e dor crônica no braço/perna'], es: ['Lipoatrofia (La grasa bajo la inyección se derrite, formando "hoyos")', 'Enrojecimiento y dolor crónico en el brazo/pierna'] },
      dangerousAdverseEffects: { pt: ['REAÇÃO PÓS-INJEÇÃO IMEDIATA (Efeito vasoespástico transitório e aterrorizante)'], es: ['REACCIÓN POSINYECCIÓN INMEDIATA (Efecto vasoespástico transitorio y aterrador)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave à droga ou ao manitol'], es: ['Hipersensibilidad grave a la droga o al manitol'] },
        relative: { pt: ['Nenhuma relevante clinicamente. É a droga mais segura de toda a classe de Esclerose Múltipla, inclusive frequentemente mantida na gravidez.'], es: ['Es la droga más segura de toda la clase de EM, frecuentemente mantenida en el embarazo.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O FALSO INFARTO: O paciente DEVE ser avisado de que, logo após aplicar a injeção, ele pode ter um espasmo vascular sistêmico. Ele sentirá o peito apertar violentamente, falta de ar, taquicardia e pânico de morte iminente. Isso DURA 15 MINUTOS e some sozinho sem deixar sequelas. Se não for avisado, ele correrá para a emergência achando que infartou.', es: 'EL FALSO INFARTO: El paciente DEBE saber que, tras aplicar la inyección, puede sentir que el pecho se aprieta violentamente, falta de aire y pánico de muerte. Esto DURA 15 MINUTOS y desaparece solo sin secuelas. Si no se avisa, correrá a Urgencias creyendo que infartó.' }
      }
    },

    /* ── FINGOLIMODE ────────────────────────────────────────────────────── */
    "fingolimode": {
      id: 'fingolimode',
      name: { pt: 'Fingolimode', es: 'Fingolimod' },
      category: 'neurologia',
      class: { pt: 'Modulador do Receptor de Esfingosina 1-Fosfato (S1P)', es: 'Modulador del Receptor de Esfingosina 1-Fosfato (S1P)' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente altamente ativa (A primeira pílula oral da história contra a EM, para quem odeia ou falhou nas injeções)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente altamente activa (La primera píldora oral de la historia contra la EM)']
      },
      commercialNames: { br: ['Gilenya'], ar: ['Gilenya'] },
      presentation: { pt: ['Cápsulas duras 0,5 mg'], es: ['Cápsulas duras 0,5 mg'] },
      mechanism: {
        pt: 'A "Prisão de Linfócitos". O Fingolimode liga-se aos receptores S1P nos linfonodos (gânglios). Ao fazer isso, ele impede fisicamente que os linfócitos T saiam dos gânglios linfáticos para o sangue. Os leucócitos doentes ficam "presos e trancados" nos gânglios e nunca conseguem chegar ao cérebro para atacar a mielina. A inflamação cerebral desaba, mas o paciente fica imensamente imunossuprimido no sangue periférico.',
        es: 'La "Prisión de Linfocitos". El Fingolimod se une a receptores S1P en los ganglios. Al hacerlo, impide físicamente que los linfocitos T salgan a la sangre. Los leucocitos enfermos quedan "presos y encerrados" en los ganglios y nunca logran llegar al cerebro para atacar la mielina.'
      },
      dose: {
        adult: {
          pt: '0,5 mg via oral UMA VEZ ao dia, continuamente.',
          es: '0,5 mg vía oral UNA VEZ al día, continuamente.'
        },
        pediatric: {
          pt: 'Aprovado para crianças/adolescentes (> 10 anos): 0,25 mg ou 0,5 mg conforme peso corporal.',
          es: 'Aprobado para niños/adolescentes (> 10 años): 0,25 mg o 0,5 mg según peso corporal.'
        }
      },
      administration: { pt: ['A PRIMEIRA DOSE do paciente deve obrigatoriamente ser tomada no Hospital com monitoramento contínuo por 6 horas!'], es: ['LA PRIMERA DOSIS del paciente debe obligatoriamente ser tomada en el Hospital con monitorización continua por 6 horas!'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste clínico necessário.', es: 'Sin ajuste clínico necesario.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não recomendado na insuficiência hepática grave (Child-Pugh C). Risco grave ao fígado basal.', es: 'No recomendado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Gripes severas de repetição, diarreia, dor nas costas', 'Linfopenia severa (Queda agressiva dos leucócitos na contagem sanguínea - esperado)'], es: ['Gripes severas de repetición, diarrea, dolor de espalda', 'Linfopenia severa (Caída agresiva de leucocitos - esperado)'] },
      dangerousAdverseEffects: { pt: ['BRADICARDIA FATAL e Bloqueio Atrioventricular (Principalmente nas primeiras doses)', 'Edema Macular (Cegueira central no olho)', 'Leucoencefalopatia Multifocal Progressiva (PML) e Herpes Zoster disseminado'], es: ['BRADICARDIA FATAL y Bloqueo AV (Principalmente en las primeras dosis)', 'Edema Macular (Ceguera central)', 'Leucoencefalopatía Multifocal Progresiva (PML)'] },
      contraindications: {
        absolute: { pt: ['Histórico de Infarto, Insuficiência Cardíaca, ou Arritmias/Bloqueios nos últimos 6 meses', 'Uso prolongado de medicamentos bloqueadores de nódulo sinusal (Beta-bloqueadores)'], es: ['Historial de Infarto, Insuficiencia Cardíaca o Arritmias en los últimos 6 meses', 'Uso prolongado de betabloqueantes'] },
        relative: { pt: ['Pacientes sem vacinação contra o vírus Varicela Zoster (Cata-Pora) - a droga pode causar encefalite viral fatal por Zoster'], es: ['Pacientes sin vacunación contra el virus Varicela Zoster - la droga puede causar encefalitis viral fatal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O RITUAL DE 6 HORAS: Os receptores S1P também existem no coração. Ao tomar a 1ª cápsula, o coração do paciente desacelera assustadoramente. Por lei, a primeira dose de Fingolimode tem que ser dada sob ECG contínuo por 6 horas. Se o paciente parar de tomar a droga por 2 semanas, ele tem que FAZER O RITUAL DE ECG TUDO DE NOVO.', es: 'EL RITUAL DE 6 HORAS: Los receptores S1P existen en el corazón. Al tomar la 1ª cápsula, el corazón desacelera asustadoramente. Por ley, la primera dosis debe darse bajo ECG por 6 horas. Si pausa por 2 semanas, DEBE REPETIR EL RITUAL.' }
      }
    },

    /* ── SIPONIMODE ─────────────────────────────────────────────────────── */
    "siponimode": {
      id: 'siponimode',
      name: { pt: 'Siponimode', es: 'Siponimod' },
      category: 'neurologia',
      class: { pt: 'Modulador Seletivo do Receptor de S1P (Foco nos subtipos 1 e 5)', es: 'Modulador Selectivo del Receptor de S1P (Foco en subtipos 1 y 5)' },
      indications: {
        pt: ['Esclerose Múltipla SECUNDARIAMENTE PROGRESSIVA (A primeira droga aprovada para pacientes que pararam de ter surtos e começaram a paralisar progressivamente)', 'Esclerose Múltipla Recorrente-Remitente'],
        es: ['Esclerosis Múltiple SECUNDARIAMENTE PROGRESIVA (La primera droga aprobada para pacientes que empezaron a paralizar progresivamente)', 'Esclerosis Múltiple Recurrente-Remitente']
      },
      commercialNames: { br: ['Mayzent'], ar: ['Mayzent'] },
      presentation: { pt: ['Comprimidos revestidos 0,25 mg e 2 mg'], es: ['Comprimidos recubiertos 0,25 mg y 2 mg'] },
      mechanism: {
        pt: 'A evolução do Fingolimode. O Siponimode mira APENAS os receptores S1P tipo 1 e 5 (ignorando o tipo 3). Isso tranca os linfócitos doentes nos gânglios (como a droga antiga), MAS minimiza muito os danos ao coração. Além disso, ele cruza perfeitamente a barreira hematoencefálica e se liga aos oligodendrócitos, forçando-os a reconstruir parte da mielina destruída.',
        es: 'La evolución del Fingolimod. Apunta SOLO a los receptores S1P tipo 1 y 5. Esto encierra los linfocitos enfermos, PERO minimiza mucho los daños al corazón. Además, cruza al cerebro y fuerza a los oligodendrocitos a reconstruir la mielina.'
      },
      dose: {
        adult: {
          pt: 'Escalonamento obrigatório (Dias 1 e 2: 0,25mg; Dia 3: 0,5mg; Dia 4: 0,75mg; Dia 5: 1,25mg). Manutenção a partir do dia 6: 2 mg/dia ou 1 mg/dia (A DOSE DEPENDE EXATAMENTE DO GENÉTICA DO PACIENTE).',
          es: 'Escalonamiento obligatorio (Días 1 y 2: 0,25mg; Día 3: 0,5mg...). Mantenimiento: 2 mg/día o 1 mg/día (LA DOSIS DEPENDE DE LA GENÉTICA DEL PACIENTE).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['O paciente NÃO precisa do ritual de 6 horas de ECG do Fingolimode, *desde que* não tenha doença cardíaca prévia grave.'], es: ['El paciente NO necesita el ritual de 6 horas de ECG del Fingolimod, *siempre que* no tenga enfermedad cardíaca previa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática severa (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['Edema de mácula no olho', 'Hipertensão leve', 'Aumento de transaminases hepáticas'], es: ['Edema de mácula en el ojo', 'Hipertensión leve', 'Aumento de transaminasas hepáticas'] },
      dangerousAdverseEffects: { pt: ['Infecções fúngicas criptocócicas no cérebro (Meningite) devido à imunossupressão profunda', 'Leucoencefalopatia Multifocal Progressiva (PML)'], es: ['Infecciones fúngicas criptocócicas en cerebro (Meningitis) debido a inmunosupresión profunda', 'Leucoencefalopatía Multifocal Progresiva (PML)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com o Genótipo CYP2C9 *3/*3 (Mutação genética grave)', 'Infarto, AVC ou Arritmias severas nos últimos 6 meses'], es: ['Pacientes con el Genotipo CYP2C9 *3/*3 (Mutación genética grave)', 'Infarto, ACV o Arritmias severas en los últimos 6 meses'] },
        relative: { pt: ['Uso associado de imunossupressores oncológicos'], es: ['Uso asociado de inmunosupresores oncológicos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O REMÉDIO DE DNA: É proibido por lei iniciar Siponimode sem antes colher o exame de Genotipagem Hepática do paciente. Se o paciente for CYP2C9 *1/*3 ou *2/*3, a dose máxima é 1mg (reduzida). Se ele for *3/*3 (metabolizador pobre), o remédio é CONTRAINDICADO e letal.', es: 'EL REMEDIO DE ADN: Está prohibido iniciar Siponimod sin antes recolectar el examen de Genotipificación Hepática del paciente. Si es *3/*3, el remedio es CONTRAINDICADO y letal.' }
      }
    },

    /* ── OZANIMODE ──────────────────────────────────────────────────────── */
    "ozanimode": {
      id: 'ozanimode',
      name: { pt: 'Ozanimode', es: 'Ozanimod' },
      category: 'neurologia',
      class: { pt: 'Modulador Seletivo do Receptor de S1P (Foco subtipos 1 e 5)', es: 'Modulador Selectivo del Receptor de S1P (Foco subtipos 1 y 5)' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente', 'Retocolite Ulcerativa moderada a grave (Aprovações gastrointestinais pela forte inibição de linfócitos no intestino)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente', 'Colitis Ulcerosa moderada a grave (Aprobaciones gastrointestinales por fuerte inhibición de linfocitos en el intestino)']
      },
      commercialNames: { br: ['Zeposia'], ar: ['Zeposia'] },
      presentation: { pt: ['Cápsulas 0,23 mg (início), 0,46 mg (titulação) e 0,92 mg (manutenção)'], es: ['Cápsulas 0,23 mg, 0,46 mg y 0,92 mg'] },
      mechanism: {
        pt: 'Age exatamente como o Siponimode (S1P seletivo 1 e 5), trancando as células autoimunes nos gânglios. Seu grande triunfo comercial: Tem uma meia-vida incrivelmente curta comparado ao fingolimode. Se o paciente com EM tiver uma infecção cerebral mortal, o médico suspende o Ozanimode e em poucos dias os leucócitos do corpo voltam ao normal para combater a bactéria (com o Fingolimode demoraria meses).',
        es: 'Actúa como el Siponimod, encerrando células autoinmunes. Su triunfo: Tiene una vida media increíblemente corta comparado al fingolimod. Si el paciente tiene una infección cerebral mortal, se suspende y en pocos días los leucocitos vuelven a la normalidad para combatir.'
      },
      dose: {
        adult: {
          pt: 'Kit de Titulação: Dias 1 a 4 (0,23 mg); Dias 5 a 7 (0,46 mg); A partir do Dia 8: Manutenção de 0,92 mg UMA VEZ ao dia.',
          es: 'Kit de Titulación: Días 1 a 4 (0,23 mg); Días 5 a 7 (0,46 mg); Desde Día 8: 0,92 mg UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Tomar inteiro com ou sem alimentos. Assim como o Siponimode, o escalonamento previne a bradicardia grave da primeira dose.'], es: ['Tomar entero con o sin alimentos. El escalonamiento previene la bradicardia grave.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar ou contraindicar em insuficiência hepática severa.', es: 'Evitar o contraindicar en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['Infecções respiratórias superiores', 'Aumento do risco de herpes zoster', 'Cefaleia e lombalgia'], es: ['Infecciones respiratorias superiores', 'Aumento de riesgo de herpes zoster', 'Cefalea y lumbalgia'] },
      dangerousAdverseEffects: { pt: ['Encefalopatia Posterior Reversível (PRES)', 'Bradicardia sintomática na dose inicial se mal titulado'], es: ['Encefalopatía Posterior Reversible (PRES)', 'Bradicardia sintomática en dosis inicial si es mal titulado'] },
      contraindications: {
        absolute: { pt: ['Infarto/Arritmias severas em 6 meses', 'Uso concomitante com inibidores da MAO (Tranilcipromina, Linezolida)'], es: ['Infarto/Arritmias severas en 6 meses', 'Uso concomitante con inhibidores de la MAO'] },
        relative: { pt: ['Pacientes com Síndrome de Apneia do Sono grave sem suporte'], es: ['Pacientes con Síndrome de Apnea del Sueño grave sin soporte'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O FATOR TIRAMINA: Diferente dos outros S1Ps, o Ozanimode possui metabólitos ativos que inibem fracamente a MAO no corpo humano. O paciente NÃO DEVE consumir queijos muito envelhecidos, vinhos tintos fermentados ou carnes curadas (alimentos com tiramina > 150mg) em grandes quantidades, sob risco de crise hipertensiva severa.', es: 'EL FACTOR TIRAMINA: El Ozanimod posee metabolitos que inhiben débilmente la MAO. El paciente NO DEBE consumir quesos muy añejados, vinos o carnes curadas (alimentos con tiramina) en grandes cantidades, bajo riesgo de crisis hipertensiva.' }
      }
    },

    /* ── BUILD 402 — Neuroimunologia EM: Ponesimode + Fumaratos + Natalizumabe ── */

    /* ── PONESIMODE ─────────────────────────────────────────────────────── */
    "ponesimode": {
      id: 'ponesimode',
      name: { pt: 'Ponesimode', es: 'Ponesimod' },
      category: 'neurologia',
      class: { pt: 'Modulador Selecionado do Receptor de Esfingosina 1-Fosfato (S1P1)', es: 'Modulador Seleccionado del Receptor de Esfingosina 1-Fosfato (S1P1)' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente ativa em adultos'],
        es: ['Esclerosis Múltiple Recurrente-Remitente activa en adultos']
      },
      commercialNames: { br: ['Ponvory'], ar: ['Ponvory'] },
      presentation: { pt: ['Comprimidos revestidos 20 mg', 'Kit de início para escalonamento gradual (2 mg a 10 mg)'], es: ['Comprimidos recubiertos 20 mg', 'Kit de inicio para escalonamiento gradual (2 mg a 10 mg)'] },
      mechanism: {
        pt: 'Atua como um bloqueador seletivo e específico do receptor S1P tipo 1. Ele sequestra os linfócitos agressores dentro dos linfonodos, impedindo-os de circular no sangue e invadir o cérebro. Seu diferencial supremo em relação ao Fingolimode é a eliminação rápida do corpo: se o paciente tiver uma infecção severa e parar o remédio, em apenas 1 SEMANA o sistema imune volta ao normal (no Fingolimode demoraria 2 meses).',
        es: 'Actúa como bloqueador selectivo del receptor S1P tipo 1. Secuestra los linfocitos agresores dentro de los linfonodos, impidiéndoles invadir el cerebro. Su diferencial supremo es la eliminación rápida: si el paciente tiene una infección severa y para el remedio, en solo 1 SEMANA el sistema imune vuelve a la normalidad.'
      },
      dose: {
        adult: {
          pt: 'Kit de Escalonamento de 14 dias (iniciando com 2 mg e subindo até 10 mg). A partir do Dia 15: Manutenção fixa de 20 mg VO UMA VEZ ao dia.',
          es: 'Kit de Escalonamiento de 14 días (iniciando con 2 mg y subiendo a 10 mg). Desde el Día 15: Mantenimiento fijo de 20 mg VO UNA VEZ al día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Via oral pura com ou sem alimentos. Exige monitoramento por ECG na primeira dose APENAS se o paciente tiver histórico prévio de bradicardia ou infarto.'], es: ['Vía oral pura con o sin alimentos. Exige monitoreo por ECG en la primera dosis SOLO si el paciente tiene historial previo de bradicardia.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste na insuficiência renal crônica.', es: 'No requiere ajuste en insuficiencia renal crónica.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática moderada a grave (Child-Pugh B e C).', es: 'Contraindicado en insuficiencia hepática moderada a grave (Child-Pugh B y C).' } },
      commonAdverseEffects: { pt: ['Elevação de transaminases (TGO/TGP)', 'Nasofaringite e infecções respiratórias', 'Alopecia leve (queda de cabelo)'], es: ['Elevación de transaminasas (AST/ALT)', 'Nasofaringitis e infecciones respiratorias', 'Alopecia leve (caída de cabello)'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa inicial (se não for feito o escalonamento correto)', 'Hipertensão arterial severa', 'Edema Macular (cegueira em borrão central)'], es: ['Bradicardia severa inicial', 'Hipertensión arterial severa', 'Edema Macular (ceguera en borrón central)'] },
      contraindications: {
        absolute: { pt: ['Bloqueio AV de 2º ou 3º grau ou doença do nó sinusal sem marcapasso funcional', 'Infarto ou AVC nos últimos 6 meses'], es: ['Bloqueo AV de 2º o 3º grado o enfermedad del nodo sinusal sin marcapasos', 'Infarto o ACV en los últimos 6 meses'] },
        relative: { pt: ['Pacientes asmáticos graves (pode causar leve broncoconstrição mecânica nas primeiras doses)'], es: ['Pacientes asmáticos graves (puede causar leve broncocontricción)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O RETORNO DA FERTILIDADE: Como o Ponesimode limpa do sangue em apenas 7 dias, ele é o S1P de escolha para mulheres jovens com Esclerose Múltipla agressiva que planejam engravidar em breve, pois o tempo de espera pós-suspensão é mínimo se comparado aos outros.', es: 'EL RETORNO DE LA FERTILIDAD: Como el Ponesimod limpia de la sangre en solo 7 días, es el S1P de elección para mujeres jóvenes que planean quedar embarazadas pronto, pues el tiempo de espera tras suspenderlo es mínimo.' }
      }
    },

    /* ── DIMETILFUMARATO ────────────────────────────────────────────────── */
    "dimetilfumarato": {
      id: 'dimetilfumarato',
      name: { pt: 'Dimetilfumarato', es: 'Dimetilfumarato' },
      category: 'neurologia',
      class: { pt: 'Ativador da Via Nrf2 / Imunomodulador Oral', es: 'Activador de la Vía Nrf2 / Inmunomodulador Oral' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente (Excelente eficácia oral com perfil de segurança de longo prazo estabelecido)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente (Excelente eficacia oral con perfil de seguridad establecido)']
      },
      commercialNames: { br: ['Tecfidera'], ar: ['Tecfidera'] },
      presentation: { pt: ['Cápsulas gastro-resistentes 120 mg e 240 mg'], es: ['Cápsulas gastrorresistentes 120 mg y 240 mg'] },
      mechanism: {
        pt: 'Mecanismo citoprotetor avançado. Ao entrar no corpo, ele se converte em Monometilfumarato e ativa a via de transcrição celular Nrf2 (o sensor mestre de estresse do corpo). Isso força as células do cérebro a produzirem antioxidantes maciços, blindando os oligodendrócitos e neurônios contra os ataques inflamatórios do sistema imune e reduzindo a perda de mielina.',
        es: 'Mecanismo citoprotector avanzado. Se convierte en Monometilfumarato y activa la vía Nrf2 (el sensor maestro de estrés). Esto fuerza a las células del cerebro a producir antioxidantes masivos, blindando neuronas contra ataques inflamatorios.'
      },
      dose: {
        adult: {
          pt: 'Semana 1: 120 mg via oral a cada 12 horas (2x ao dia). A partir da Semana 2: Manutenção fixa de 240 mg VO a cada 12 horas.',
          es: 'Semana 1: 120 mg vía oral cada 12 horas (2x al día). Desde la Semana 2: Mantenimiento fijo de 240 mg VO cada 12 horas.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['MANDATÓRIO: Ingerir sempre JUNTO COM ALIMENTOS (Idealmente uma refeição rica em gordura, como queijo ou carne). Isso reduz drasticamente o terrível efeito de Fogacho (vermelhidão com calor) e cólicas gástricas.'], es: ['OBLIGATORIO: Ingerir siempre JUNTO CON ALIMENTOS (Idealmente una comida rica en grasa). Esto reduce drásticamente el terrible efecto de Sofoco (enrojecimiento con calor) y cólicos gástricos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (Eliminação predominantemente respiratória exalada como CO2).', es: 'Sin necesidad de ajuste (Eliminación predominantemente respiratoria exhalada como CO2).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['FLUSHING / FOGACHO (A pele do rosto, pescoço e peito fica vermelho-brasa e queima com coceira intensa 30 min após a dose)', 'Diarreia e dor abdominal severa nos primeiros dias'], es: ['FLUSHING / SOFOCO (La piel del rostro queda rojo brasa y quema con picor intenso 30 min tras la dosis)', 'Diarrea y dolor abdominal severo'] },
      dangerousAdverseEffects: { pt: ['Linfopenia Progressiva Severa (Se os linfócitos caírem abaixo de 500 por > 6 meses, o paciente corre risco imenso de contrair PML - infecção cerebral oportunista fatal)'], es: ['Linfopenia Progresiva Severa (Si los linfocitos caen bajo 500 por > 6 meses, corre riesgo de PML - infección cerebral oportunista fatal)'] },
      contraindications: {
        absolute: { pt: ['Suspeita ou diagnóstico de Leucoencefalopatia Multifocal Progressiva (PML) ativa'], es: ['Sospecha o diagnóstico de Leucoencefalopatía Multifocal Progresiva (PML) activa'] },
        relative: { pt: ['Contagem basal de Linfócitos < 500 células/mcL (Risco iminente de infecção cerebral por vírus JC)'], es: ['Conteo basal de Linfocitos < 500 células/mcL'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O TRUQUE DA ASPIRINA: Se o seu paciente com EM está abandonando o Tecfidera porque o rosto fica vermelho e "queimando", oriente-o a tomar 1 comprimido de AAS (Aspirina 100mg) 30 minutos antes do Dimetilfumarato. A aspirina bloqueia as prostaglandinas da pele e corta o flushing.', es: 'EL TRUCO DE LA ASPIRINA: Si el paciente abandona el Tecfidera porque el rostro queda rojo y quemando, oriéntelo a tomar 1 comprimido de AAS (Aspirina 100mg) 30 minutos antes del Dimetilfumarato. La aspirina bloquea las prostaglandinas y corta el sofoco.' }
      }
    },

    /* ── DIROXIMEL FUMARATO ─────────────────────────────────────────────── */
    "diroximel_fumarato": {
      id: 'diroximel_fumarato',
      name: { pt: 'Diroximel fumarato', es: 'Diroximel fumarato' },
      category: 'neurologia',
      class: { pt: 'Ativador da Via Nrf2 / Imunomodulador Oral', es: 'Activador de la Vía Nrf2 / Inmunomodulador Oral' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente (Formulada especificamente para pacientes com intolerância gastrointestinal ao dimetilfumarato)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente (Formulada específicamente para pacientes con intolerancia gastrointestinal al dimetilfumarato)']
      },
      commercialNames: { br: ['Vumerity'], ar: ['Vumerity'] },
      presentation: { pt: ['Cápsulas duras gastro-resistentes 231 mg'], es: ['Cápsulas duras gastrorresistentes 231 mg'] },
      mechanism: {
        pt: 'É um pró-fármaco de segunda geração de fumarato. Na veia e no cérebro, ele se quebra e libera EXATAMENTE o mesmo princípio ativo do medicamento antigo (o Monometilfumarato), ativando a via de proteção celular Nrf2. PORÉM, a sua estrutura química estrutural estomacal foi modificada para produzir metabólitos menos irritantes na mucosa do estômago, reduzindo a diarreia e as cólicas em 50%.',
        es: 'Es un profármaco de segunda generación de fumarato. En vena y cerebro, libera EXACTAMENTE el mismo principio activo del medicamento antiguo, activando la vía Nrf2. PERO, su estructura estomacal fue modificada para producir metabolitos menos irritantes en el estómago, reduciendo la diarrea y cólicos al 50%.'
      },
      dose: {
        adult: {
          pt: 'Semana 1: 231 mg via oral 2 vezes ao dia (a cada 12h). A partir da Semana 2: Manutenção fixa de 462 mg VO (2 cápsulas de 231mg juntas) 2 vezes ao dia (Total: 4 cápsulas/dia).',
          es: 'Semana 1: 231 mg vía oral 2 veces al día. Desde la Semana 2: Mantenimiento fijo de 462 mg VO (2 cápsulas juntas) 2 veces al día (Total: 4 cápsulas/día).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Uso oral. Embora seja muito mais leve no estômago que a Tecfidera, ainda se recomenda ingerir junto com alimentos leves para mitigar qualquer risco de flushing cutâneo.'], es: ['Uso oral. Aunque es mucho más leve en el estómago que Tecfidera, aún se recomienda ingerir junto con alimentos ligeros para mitigar el sofoco cutáneo.'] },
      renalAdjustment: { required: true, message: { pt: 'DIFERENCIAL: Diferente do antigo, o Diroximel possui um excipiente que se acumula no rim. USO NÃO RECOMENDADO em Insuficiência Renal Crônica grave (ClCr < 30 mL/min).', es: 'DIFERENCIAL: A diferencia del antiguo, el Diroximel posee un excipiente que se acumula en el riñón. USO NO RECOMENDADO en Insuficiencia Renal Crónica grave (ClCr < 30 mL/min).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste de dosis.' } },
      commonAdverseEffects: { pt: ['Flushing / Vermelhidão facial (mais leve que o dimetilfumarato)', 'Náuseas leves'], es: ['Flushing / Enrojecimiento facial (más leve que el dimetilfumarato)', 'Náuseas leves'] },
      dangerousAdverseEffects: { pt: ['Linfopenia progressiva crônica com risco de infecção oportunista cerebral (PML)'], es: ['Linfopenia progresiva crónica con riesgo de infección oportunista cerebral (PML)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Renal Crônica severa (ClCr < 30 mL/min)', 'PML suspeita ou ativa'], es: ['Insuficiencia Renal Crónica severa (ClCr < 30 mL/min)', 'PML sospechosa o activa'] },
        relative: { pt: ['Linfócitos basais baixos'], es: ['Linfocitos basales bajos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O PREÇO DO CONFORTO: O Vumerity resolveu a dor de estômago dos pacientes com Esclerose Múltipla, mas o monitoramento do sangue CONTRA A LEUCOENCEFALOPATIA (PML) continua idêntico. O clínico deve colher Hemograma com contagem de linfócitos a cada 6 meses obrigatoriamente.', es: 'EL PRECIO DEL CONFORT: Vumerity resolvió el dolor de estómago, pero el monitoreo de sangre CONTRA LA LEUCOENCEFALOPATÍA (PML) sigue idéntico. El clínico debe extraer Hemograma con conteo de linfocitos cada 6 meses.' }
      }
    },

    /* ── TERIFLUNOMIDA ──────────────────────────────────────────────────── */
    "teriflunomida": {
      id: 'teriflunomida',
      name: { pt: 'Teriflunomida', es: 'Teriflunomida' },
      category: 'neurologia',
      class: { pt: 'Inibidor da Síntese de Pirimidina / Imunomodulador Oral', es: 'Inhibidor de la Síntesis de Pirimidina / Inmunomodulador Oral' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente em adultos (Droga oral de dose única diária muito cômoda)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente en adultos (Droga oral de dosis única diaria muy cómoda)']
      },
      commercialNames: { br: ['Aubagio'], ar: ['Aubagio'] },
      presentation: { pt: ['Comprimidos revestidos 14 mg'], es: ['Comprimidos recubiertos 14 mg'] },
      mechanism: {
        pt: 'O bloqueio metabólico de defesa. É o metabólito ativo da Leflunomida (droga da artrite). A Teriflunomida bloqueia especificamente a enzima mitocondrial DHODH. Esta enzima é a única chave que os linfócitos T e B ativados possuem para fabricar "Pirimidina" (um bloco de construção do DNA). Sem pirimidina, os linfócitos autoimunes não conseguem se multiplicar aos milhões para invadir o cérebro, parando a doença.',
        es: 'El bloqueo metabólico de defensa. Es el metabolito activo de la Leflunomida. La Teriflunomida bloquea específicamente la enzima mitocondrial DHODH. Esta enzima es la única llave que los linfocitos T y B activados poseen para fabricar "Pirimidina" (un bloque de ADN). Sin pirimidina, los linfocitos no logran multiplicarse.'
      },
      dose: {
        adult: {
          pt: '14 mg via oral UMA VEZ ao dia, continuamente.',
          es: '14 mg vía oral UNA VEZ al día, continuamente.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Via oral pura com ou sem alimentos.'], es: ['Vía oral pura con o sin alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na DRC leve a moderada.', es: 'Sin necesidad de ajuste en ERC leve a moderada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em insuficiência hepática grave (Child-Pugh C). Monitoramento de TGO/TGP deve ser quinzenal nos primeiros 6 meses!', es: 'CONTRAINDICADO en insuficiencia hepática grave (Child-Pugh C). ¡Monitoreo de AST/ALT debe ser quincenal en los primeros 6 meses!' } },
      commonAdverseEffects: { pt: ['Alopecia marcante (O cabelo afina e cai em mechas nos primeiros 3 meses, depois estabiliza)', 'Diarreia e Náuseas', 'Aumento de Transaminases'], es: ['Alopecia marcada (El cabello afina y cae en mechones los primeros 3 meses)', 'Diarrea y Náuseas', 'Aumento de Transaminasas'] },
      dangerousAdverseEffects: { pt: ['TERATOGENICIDADE EXTREMA (Má-formação fetal severa incompatível com a vida)', 'Hepatotoxicidade fulminante com necrose hepática aguda', 'Hipertensão severa aguda'], es: ['TERATOGENICIDAD EXTREMA (Malformación fetal severa)', 'Hepatotoxicidad fulminante con necrosis hepática', 'Hipertensión severa aguda'] },
      contraindications: {
        absolute: { pt: ['Mulheres grávidas ou em idade fértil que NÃO usem métodos anticoncepcionais altamente eficazes duplos', 'Insuficiência hepática grave'], es: ['Mujeres embarazadas o en edad fértil que NO usen métodos anticonceptivos altamente eficaces dobles', 'Insuficiencia hepática grave'] },
        relative: { pt: ['Pacientes com neuropatia periférica preexistente grave'], es: ['Pacientes con neuropatía periférica preexistente grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A BOMBA RELÓGIO DE 2 ANOS: A Teriflunomida gruda tão intensamente nas proteínas do sangue que, se a paciente parar de tomar o remédio hoje, a droga DEMORA ATÉ 2 ANOS para sair do corpo naturalmente. Se uma paciente engravidar por acidente nesse período, o bebê nascerá com deformidades. Requer o PROCEDIMENTO DE LAVADO RÁPIDO (Washout) com Colestiramina para arrancar o remédio em 11 dias.', es: 'LA BOMBA DE TIEMPO DE 2 AÑOS: La Teriflunomida se pega tanto a las proteínas que, si la paciente para el remedio hoy, TARDA HASTA 2 AÑOS en salir del cuerpo. Si queda embarazada, el bebé nacerá con deformidades. Requiere el PROCEDIMIENTO DE LAVADO RÁPIDO con Colestiramina para arrancar el remedio en 11 días.' }
      }
    },

    /* ── NATALIZUMABE ───────────────────────────────────────────────────── */
    "natalizumabe": {
      id: 'natalizumabe',
      name: { pt: 'Natalizumabe', es: 'Natalizumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-Alfa-4 Integrina (Inibidor de Tráfego Leucocitário)', es: 'Anticuerpo Monoclonal Anti-Alfa-4 Integrina (Inhibidor de Tráfico Leucocitario)' },
      indications: {
        pt: ['Esclerose Múltipla Recorrente-Remitente ALTAMENTE AGRESSIVA e rapidamente progressiva (Droga de alta eficácia de 2ª linha)'],
        es: ['Esclerosis Múltiple Recurrente-Remitente ALTAMENTE AGRESIVA y rápidamente progresiva (Droga de alta eficacia de 2ª línea)']
      },
      commercialNames: { br: ['Tysabri'], ar: ['Tysabri'] },
      presentation: { pt: ['Frasco-ampola para infusão IV 300 mg/15 mL'], es: ['Vial para infusión IV 300 mg/15 mL'] },
      mechanism: {
        pt: 'A "Blindagem Total" do cérebro. Para que os linfócitos doentes ataquem o cérebro, eles precisam usar uma "garra" chamada Alfa-4-Integrina para se agarrarem na parede do vaso e atravessarem a Barreira Hematoencefálica. O Natalizumabe é um anticorpo que gruda e "encapa" essa garra. O linfócito passa direto pelo vaso sanguíneo e não consegue entrar no cérebro. A Esclerose Múltipla simplesmente PARA de progredir instantaneamente. O preço: o cérebro fica 100% sem nenhuma defesa imunológica de vigília.',
        es: 'El "Blindaje Total" del cerebro. Para que los linfocitos ataquen el cerebro, usan una "garra" llamada Alfa-4-Integrina para cruzar la Barrera Hematoencefálica. El Natalizumab "encapucha" esa garra. El linfocito pasa de largo y no logra entrar. La EM simplemente SE DETIENE al instante. El precio: el cerebro se queda 100% sin defensas.'
      },
      dose: {
        adult: {
          pt: '300 mg via Infusão Intravenosa (IV) a CADA 4 SEMANAS (Mensal).',
          es: '300 mg vía Infusión Intravenosa (IV) CADA 4 SEMANAS (Mensal).'
        },
        pediatric: { pt: 'Uso não recomendado em crianças de rotina.', es: 'Uso no recomendado en niños de rutina.' }
      },
      administration: { pt: ['Uso estritamente hospitalar/clínico. Infundido em 1 hora em bomba. O paciente deve ser observado por mais 1 hora após o fim da infusão pelo alto risco de anafilaxia biológica.'], es: ['Uso estrictamente hospitalario. Infundido en 1 hora. Debe observarse por 1 hora más tras la infusión por el alto riesgo de anafilaxia biológica.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Fadiga extrema nos dias pós-infusão', 'Infecção urinária e dor de garganta', 'Tontura e náuseas'], es: ['Fatiga extrema en los días posinfusión', 'Infección urinaria y dolor de garganta', 'Mareo y náuseas'] },
      dangerousAdverseEffects: { pt: ['LEUCOENCEFALOPATIA MULTIFOCAL PROGRESSIVA / PML (Infecção oportunista cerebral letal e incurável causada pela ativação do Vírus JC no cérebro sem defesas)', 'Hepatotoxicidade severa', 'Anafilaxia de choque no gotejamento'], es: ['LEUCOENCEFALOPATÍA MULTIFOCAL PROGRESIVA / PML (Infección oportunista cerebral letal e incurable causada por la activación del Virus JC)', 'Hepatotoxicidad severa', 'Anafilaxia de choque'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Diagnóstico ou suspeita de PML ativa', 'Uso associado com outros imunossupressores sistêmicos (Azatioprina, Ciclofosfamida)'], es: ['Pacientes con Diagnóstico o sospecha de PML activa', 'Uso asociado con otros inmunosupresores sistémicos'] },
        relative: { pt: ['Pacientes Soropositivos para o VÍRUS JC com alto índice de anticorpos (> 0.9 ou > 1.5 - Risco estratosférico de morte por PML)'], es: ['Pacientes Seropositivos para el VIRUS JC con alto índice de anticuerpos (> 0.9 - Riesgo estratosférico de muerte por PML)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O PACTO COM O VÍRUS JC: O Tysabri é a droga mais eficaz da neurologia, mas exige a dosagem do Vírus JC (exame de sangue) a cada 6 meses. Se o índice do paciente for negativo, o risco de PML é zero. Se o vírus acordar e o índice subir acima de 1.5 após 2 anos de uso, a droga deve ser SUSPENSA IMEDIATAMENTE, ou o vírus JC vai derreter o cérebro do paciente letalmente.', es: 'EL PACTO CON EL VIRUS JC: Tysabri exige la dosificación del Virus JC cada 6 meses. Si el virus despierta y el índice sube arriba de 1.5 tras 2 años de uso, la droga debe SUSPENDERSE INMEDIATAMENTE, o el virus JC derretirá el cerebro del paciente de forma letal.' }
      }
    },

    /* ── OCRELIZUMABE ───────────────────────────────────────────────────── */
    "ocrelizumabe": {
      name: { pt: 'Ocrelizumabe', es: 'Ocrelizumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-CD20 (Depletor de Células B)', es: 'Anticuerpo Monoclonal Anti-CD20 (Depletor de Células B)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Esclerose Múltipla Recorrente (EMR)', 'Esclerose Múltipla Primariamente Progressiva (EMPP - O primeiro e único remédio aprovado para esta forma devastadora)'],
        es: ['Esclerosis Múltiple Recurrente (EMR)', 'Esclerosis Múltiple Primariamente Progresiva (EMPP - El primer y único remedio aprobado para esta forma)']
      },
      commercialNames: { br: ['Ocrevus'], ar: ['Ocrevus'] },
      presentation: { pt: ['Frasco-ampola IV 300 mg/10 mL'], es: ['Vial IV 300 mg/10 mL'] },
      mechanism: {
        pt: 'Uma mudança de paradigma na Esclerose Múltipla. Historicamente, achava-se que apenas os Linfócitos T atacavam o cérebro. O Ocrelizumabe mira no receptor CD20, que só existe nos Linfócitos B. Ao se ligar, ele destrói seletivamente as células B da memória no sangue, provando que elas também orquestram o ataque. Reduz atrofia cerebral e retarda o uso de cadeira de rodas.',
        es: 'Un cambio de paradigma. Históricamente se creía que solo los Linfocitos T atacaban el cerebro. El Ocrelizumab apunta al CD20, presente solo en Linfocitos B. Al unirse, destruye selectivamente las células B de memoria en sangre. Reduce la atrofia cerebral y retrasa el uso de silla de ruedas.'
      },
      dose: {
        adult: {
          pt: 'Dose inicial: 300 mg IV, repetida em 2 semanas. Manutenção: 600 mg IV a CADA 6 MESES (Semestral).',
          es: 'Dosis inicial: 300 mg IV, repetida en 2 semanas. Mantenimiento: 600 mg IV CADA 6 MESES (Semestral).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Infusão IV hospitalar longa. EXIGE pré-medicação com Metilprednisolona, Difenidramina e Paracetamol 30 minutos antes para evitar reações ao gotejamento.'],
        es: ['Infusión IV hospitalaria larga. EXIGE premedicación con Metilprednisolona, Difenhidramina y Paracetamol 30 min antes.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: {
        pt: ['Reação à infusão (prurido, erupção, febre)', 'Infecções do Trato Respiratório Superior (Falta de células B baixa os anticorpos nas mucosas)'],
        es: ['Reacción a la infusión (prurito, erupción, fiebre)', 'Infecciones del Tracto Respiratorio Superior (La falta de células B baja los anticuerpos)']
      },
      dangerousAdverseEffects: {
        pt: ['Reativação fulminante do Vírus da Hepatite B', 'Maior risco de câncer de mama', 'PML (Raro)'],
        es: ['Reactivación fulminante del Virus de la Hepatitis B', 'Mayor riesgo de cáncer de mama', 'PML (Raro)']
      },
      contraindications: {
        absolute: { pt: ['Infecção ativa por Hepatite B', 'Infecções ativas severas'], es: ['Infección activa por Hepatitis B', 'Infecciones activas severas'] },
        relative: { pt: ['Hipogamaglobulinemia grave (Baixo nível de imunoglobulinas no sangue)'], es: ['Hipogammaglobulinemia grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O VETO DA HEPATITE B: A droga varre do sangue as células que fabricam anticorpos. Se o paciente for portador inativo do vírus da Hepatite B, o vírus percebe a queda da imunidade, acorda e destrói o fígado em semanas. Sorologia HBsAg e Anti-HBc são OBRIGATÓRIAS antes da primeira infusão.',
          es: 'EL VETO DE LA HEPATITIS B: La droga barre las células que fabrican anticuerpos. Si el paciente es portador inactivo de Hepatitis B, el virus despierta y destruye el hígado. Serología HBsAg y Anti-HBc es OBLIGATORIA antes de la infusión.'
        }
      }
    },

    /* ── OFATUMUMABE ────────────────────────────────────────────────────── */
    "ofatumumabe": {
      name: { pt: 'Ofatumumabe', es: 'Ofatumumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-CD20 (Subcutâneo)', es: 'Anticuerpo Monoclonal Anti-CD20 (Subcutáneo)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Esclerose Múltipla Recorrente (EMR)'],
        es: ['Esclerosis Múltiple Recurrente (EMR)']
      },
      commercialNames: { br: ['Kesimpta'], ar: ['Kesimpta'] },
      presentation: { pt: ['Caneta preenchida SC 20 mg/0,4 mL'], es: ['Pluma prellenada SC 20 mg/0,4 mL'] },
      mechanism: {
        pt: 'Tem o mesmo alvo que o Ocrelizumabe (CD20 para destruir células B), mas se liga em uma parte diferente da molécula e possui uma formulação humana avançada. Sua revolução é logística: em vez do paciente ficar internado recebendo injeção na veia com corticoides a cada 6 meses, o Ofatumumabe permite que o próprio paciente aplique uma injeção de caneta na barriga mensalmente em casa.',
        es: 'Tiene el mismo blanco que Ocrelizumab (CD20), pero se une a una parte diferente y es una formulación humana. Su revolución es logística: en vez de internarse para inyección venosa cada 6 meses, el paciente se aplica una pluma en el abdomen mensualmente en casa.'
      },
      dose: {
        adult: {
          pt: 'Iniciação: 20 mg SC nas Semanas 0, 1 e 2. Manutenção: 20 mg SC UMA VEZ AO MÊS, a partir da Semana 4.',
          es: 'Iniciación: 20 mg SC en Semanas 0, 1 y 2. Mantenimiento: 20 mg SC UNA VEZ AL MES, a partir de la Semana 4.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Aplicação subcutânea. A primeira injeção exige supervisão médica.'],
        es: ['Aplicación subcutánea. La primera inyección exige supervisión médica.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: {
        pt: ['Reação sistêmica após a 1ª injeção (Febre, calafrios, cefaleia)', 'Diminuição da imunoglobulina IgM'],
        es: ['Reacción sistémica tras la 1ª inyección (Fiebre, escalofríos)', 'Disminución de la inmunoglobulina IgM']
      },
      dangerousAdverseEffects: {
        pt: ['Reativação de Hepatite B', 'PML'],
        es: ['Reactivación de Hepatitis B', 'PML']
      },
      contraindications: {
        absolute: { pt: ['Infecção ativa por Hepatite B'], es: ['Infección activa por Hepatitis B'] },
        relative: { pt: ['Gravidez (Lactentes nascem sem células B, precisam de monitoramento)'], es: ['Embarazo (Lactantes nacen sin células B, necesitan monitoreo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'CUIDADO COM AS VACINAS DO BEBÊ: Se uma mulher usar Ofatumumabe (ou Ocrelizumabe) perto do parto, o bebê nascerá sem linfócitos B. ESSE BEBÊ NÃO PODE TOMAR VACINAS DE VÍRUS VIVO (como a BCG da maternidade) até que os linfócitos B dele reapareçam, sob risco de morte por BCG disseminada.',
          es: 'CUIDADO CON LAS VACUNAS DEL BEBÉ: Si una mujer usa la droga cerca del parto, el bebé nacerá sin linfocitos B. ESE BEBÉ NO PUEDE TOMAR VACUNAS DE VIRUS VIVO (como BCG) hasta que sus células B reaparezcan.'
        }
      }
    },

    /* ── ALEMTUZUMABE ───────────────────────────────────────────────────── */
    "alemtuzumabe": {
      name: { pt: 'Alemtuzumabe', es: 'Alemtuzumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Anti-CD52 (Depletor T e B Massivo)', es: 'Anticuerpo Monoclonal Anti-CD52 (Depletor T y B Masivo)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Esclerose Múltipla Recorrente de alta atividade REFRATÁRIA (Usado quando o paciente já falhou em 2 ou mais drogas).'],
        es: ['Esclerosis Múltiple Recurrente de alta actividad REFRACTARIA (Usado cuando el paciente ya falló en 2 o más drogas).']
      },
      commercialNames: { br: ['Lemtrada'], ar: ['Lemtrada'] },
      presentation: { pt: ['Frasco-ampola IV 12 mg/1,2 mL'], es: ['Vial IV 12 mg/1,2 mL'] },
      mechanism: {
        pt: 'O "Botão de Reiniciar" (Reset Imunológico). É a droga mais agressiva para EM. O Alemtuzumabe ataca a proteína CD52, presente em LINFÓCITOS B E LINFÓCITOS T. A infusão dizima quase 100% dos linfócitos do sangue do paciente em dias. Nos anos seguintes, o corpo reconstrói um sistema imune "novo", e muitas vezes esse novo sistema esquece de atacar o cérebro.',
        es: 'El "Botón de Reiniciar" (Reset Inmunológico). Es la droga más agresiva. Ataca la proteína CD52, en LINFOCITOS B Y T. La infusión diezma casi 100% de los linfocitos del paciente. Luego, el cuerpo reconstruye un sistema inmune "nuevo" que olvida atacar el cerebro.'
      },
      dose: {
        adult: {
          pt: 'Ano 1: 12 mg/dia IV por 5 dias SEGUIDOS. Ano 2: 12 mg/dia IV por 3 dias SEGUIDOS. Fim do tratamento (A eficácia dura anos).',
          es: 'Año 1: 12 mg/día IV por 5 días SEGUIDOS. Año 2: 12 mg/día IV por 3 días SEGUIDOS. Fin del tratamiento.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Uso hospitalar sob monitoramento cardíaco. Obrigatório Aciclovir (para evitar Herpes) e Sulfametoxazol-Trimetoprima (para evitar Pneumocystis) no primeiro mês.'],
        es: ['Uso hospitalario bajo monitoreo. Obligatorio Aciclovir y Sulfametoxazol-Trimetoprima preventivos el primer mes.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: {
        pt: ['Síndrome de liberação de citocinas (febre alta, tremores)', 'Infecções herpéticas e fúngicas'],
        es: ['Síndrome de liberación de citocinas (fiebre alta)', 'Infecciones herpéticas y fúngicas']
      },
      dangerousAdverseEffects: {
        pt: ['DOENÇAS AUTOIMUNES SECUNDÁRIAS (A nova imunidade ataca a tireoide ou plaquetas - PTI mortal)', 'AVC Isquêmico/Hemorrágico nas 48h após a infusão'],
        es: ['ENFERMEDADES AUTOINMUNES SECUNDARIAS (La nueva inmunidad ataca la tiroides o plaquetas - PTI)', 'ACV Isquémico/Hemorrágico a las 48h']
      },
      contraindications: {
        absolute: { pt: ['Pacientes com HIV (CD4 cai a zero)', 'Doenças autoimunes ativas não-EM'], es: ['Pacientes con VIH (CD4 cae a cero)', 'Enfermedades autoinmunes activas no-EM'] },
        relative: { pt: ['Idosos, devido ao alto risco isquêmico infusional'], es: ['Ancianos, debido al alto riesgo isquémico'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A MALDIÇÃO AUTOIMUNE: Curiosamente, ao reiniciar a imunidade, cerca de 30% dos pacientes desenvolvem uma NOVA doença autoimune grave (Doença de Graves na tireoide ou Púrpura Trombocitopênica Idiopática - sangramento fatal). Exige monitoramento mensal do sangue por 4 ANOS após a última dose.',
          es: 'LA MALDICIÓN AUTOINMUNE: Al reiniciar la inmunidad, 30% de los pacientes desarrollan una NUEVA enfermedad autoinmune grave (Graves o Púrpura Trombocitopénica). Exige monitoreo mensual de sangre por 4 AÑOS tras la última dosis.'
        }
      }
    },

    /* ── CLADRIBINA ─────────────────────────────────────────────────────── */
    "cladribina": {
      name: { pt: 'Cladribina', es: 'Cladribina' },
      category: 'neurologia',
      class: { pt: 'Análogo de Purina / Imunossupressor Oral', es: 'Análogo de Purina / Inmunosupresor Oral' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Esclerose Múltipla Recorrente altamente ativa (Tratamento de pulso curto com longa duração)'],
        es: ['Esclerosis Múltiple Recurrente altamente activa (Tratamiento de pulso corto con larga duración)']
      },
      commercialNames: { br: ['Mavenclad'], ar: ['Mavenclad'] },
      presentation: { pt: ['Comprimidos 10 mg'], es: ['Comprimidos 10 mg'] },
      mechanism: {
        pt: 'Um quimioterápico disfarçado de pílula. A Cladribina é um "falso bloco" de DNA (purina). Quando os linfócitos agressores T e B tentam se multiplicar, eles usam a Cladribina para construir o DNA. O DNA quebra por dentro e o linfócito morre. Atinge seletivamente os linfócitos porque eles não têm a enzima que os outros órgãos usam para desarmar a droga.',
        es: 'Un quimioterápico disfrazado de píldora. Es un "falso bloque" de ADN. Cuando los linfocitos intentan multiplicarse, usan Cladribina. El ADN se rompe y el linfocito muere. Alcanza selectivamente los linfocitos porque no tienen la enzima para desarmar la droga.'
      },
      dose: {
        adult: {
          pt: 'Terapia por pulso em 2 anos (Máx 3,5 mg/kg ao todo). Ano 1: Toma pílulas por apenas 5 dias no Mês 1 e mais 5 dias no Mês 2. Ano 2: Repete a mesma coisa. (O paciente engole comprimidos apenas 20 dias na vida e fica protegido por anos).',
          es: 'Terapia por pulso en 2 años. Año 1: Toma píldoras por solo 5 días en Mes 1 y 5 días en Mes 2. Año 2: Repite. (El paciente traga comprimidos solo 20 días en su vida y queda protegido por años).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: {
        pt: ['Evitar manuseio de pele nua nos comprimidos. Tomar com água, espaçando 3 horas de qualquer outro remédio oral.'],
        es: ['Evitar manejo con piel desnuda. Tomar con agua, espaciando 3 horas de cualquier otro remedio oral.']
      },
      renalAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência renal moderada a grave (ClCr < 60 mL/min), acumula toxinas purínicas.', es: 'Contraindicado en insuficiencia renal moderada a grave (ClCr < 60), acumula toxinas purínicas.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose classe Child-Pugh C.', es: 'Evitar en cirrosis clase Child-Pugh C.' } },
      commonAdverseEffects: {
        pt: ['Linfopenia transitória intensa (Esperada para o efeito)', 'Infecção por Herpes Zoster'],
        es: ['Linfopenia transitoria intensa (Esperada)', 'Infección por Herpes Zoster']
      },
      dangerousAdverseEffects: {
        pt: ['Aumento de risco de câncer (Malignidades cutâneas e hematológicas em longo prazo)'],
        es: ['Aumento de riesgo de cáncer (Malignidades cutáneas y hematológicas a largo plazo)']
      },
      contraindications: {
        absolute: { pt: ['Gravidez (Droga teratogênica grau quimioterápico, abortiva)', 'Pacientes HIV+', 'Neoplasias ativas'], es: ['Embarazo (Droga teratogénica, abortiva)', 'Pacientes VIH+', 'Neoplasias activas'] },
        relative: { pt: ['Uso associado a imunossupressores contínuos'], es: ['Uso asociado a inmunosupresores continuos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'PROIBIÇÃO DE MATERNIDADE/PATERNIDADE: Mulheres e HOMENS não podem tentar ter filhos durante o uso de Cladribina e por pelo menos 6 MESES após o último comprimido. Como ataca o DNA, espermatozoides afetados podem gerar fetos malformados.',
          es: 'PROHIBICIÓN DE MATERNIDAD/PATERNIDAD: Mujeres y HOMBRES no pueden intentar tener hijos durante el uso de Cladribina y por al menos 6 MESES tras la última dosis. Espermatozoides afectados pueden generar fetos malformados.'
        }
      }
    },

    /* ── PIRIDOSTIGMINA ─────────────────────────────────────────────────── */
    "piridostigmina": {
      name: { pt: 'Piridostigmina (Brometo de)', es: 'Piridostigmina (Bromuro de)' },
      category: 'neurologia',
      class: { pt: 'Inibidor da Acetilcolinesterase Periférica', es: 'Inhibidor de la Acetilcolinesterasa Periférica' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Miastenia Gravis (Droga âncora para fraqueza muscular)', 'Reversão de bloqueadores neuromusculares não-despolarizantes na anestesia'],
        es: ['Miastenia Gravis (Droga ancla para debilidad muscular)', 'Reversión de bloqueadores neuromusculares no despolarizantes en anestesia']
      },
      commercialNames: { br: ['Mestinon'], ar: ['Mestinon'] },
      presentation: { pt: ['Comprimidos 60 mg'], es: ['Comprimidos 60 mg'] },
      mechanism: {
        pt: 'A Salvação da Força Muscular. Na Miastenia Gravis, os anticorpos do paciente destroem os receptores de acetilcolina no músculo, deixando-o com fraqueza letal (incapaz de mastigar ou respirar). A Piridostigmina bloqueia a enzima que destrói a acetilcolina na placa motora. A acetilcolina inunda a musculatura, forçando os poucos receptores que restaram a dispararem sem parar, devolvendo a força física ao paciente.',
        es: 'La Salvación de la Fuerza Muscular. En la Miastenia, los anticuerpos destruyen los receptores musculares de acetilcolina, dejando debilidad letal. La Piridostigmina bloquea la enzima que destruye la acetilcolina. Esta inunda el músculo, forzando a los receptores restantes a disparar y devolviendo la fuerza.'
      },
      dose: {
        adult: {
          pt: '60 mg a 120 mg via oral a cada 4 a 6 horas durante o dia. (A dose depende da resposta e horário de pico da fadiga do paciente).',
          es: '60 mg a 120 mg vía oral cada 4 a 6 horas durante el día. (La dosis depende de la respuesta y horario de pico de fatiga).'
        },
        pediatric: {
          pt: 'Miastenia (Crianças): 7 mg/kg/dia divididos em 5 a 6 tomadas diárias.',
          es: 'Miastenia (Niños): 7 mg/kg/día divididos en 5 a 6 tomas diarias.'
        }
      },
      administration: {
        pt: ['Tomar 30 a 60 minutos ANTES das refeições (Para garantir que o músculo da mastigação e deglutição estará forte na hora de engolir, evitando engasgos).'],
        es: ['Tomar 30 a 60 minutos ANTES de las comidas (Para garantizar que el músculo de masticación esté fuerte, evitando ahogos).']
      },
      renalAdjustment: { required: true, message: { pt: 'Metade da droga sai intacta pela urina. Em DRC, doses mais baixas são exigidas para não intoxicar.', es: 'Mitad de la droga sale intacta por orina. En ERC, se exigen dosis más bajas para no intoxicar.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: {
        pt: ['Cãibras e contrações musculares fasciculares (músculo "pulando")', 'Hipersalivação e dor de barriga (cólicas/diarreia)'],
        es: ['Calambres y contracciones musculares (músculo "saltando")', 'Hipersalivación y dolor de barriga (cólicos/diarrea)']
      },
      dangerousAdverseEffects: {
        pt: ['CRISE COLINÉRGICA (Paralisia muscular paradoxal por excesso de acetilcolina, bradicardia extrema, sufocamento no próprio catarro)'],
        es: ['CRISIS COLINÉRGICA (Parálisis muscular paradójica por exceso de acetilcolina, bradicardia extrema, asfixia en el propio moco)']
      },
      contraindications: {
        absolute: { pt: ['Obstrução mecânica intestinal ou urinária (As cólicas induzidas rompem a parede)'], es: ['Obstrucción mecánica intestinal o urinaria (Los cólicos inducidos rompen la pared)'] },
        relative: { pt: ['Asma grave, bradicardia não controlada'], es: ['Asma grave, bradicardia no controlada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: {
          pt: 'CRISE COLINÉRGICA VS MIASTÊNICA: Se o paciente com Miastenia chegar à UTI sem conseguir respirar, o desafio é saber se ele tomou POUCO remédio (Crise Miastênica) ou MUITO remédio (Crise Colinérgica). Pupilas minúsculas (miose), diarreia maciça e baba indicam Crise Colinérgica: A CONDUTA É INTUBAR E DAR ATROPINA, SUSPENDENDO A PIRIDOSTIGMINA.',
          es: 'CRISIS COLINÉRGICA VS MIASTÉNICA: Si el paciente llega a UCI sin poder respirar, el reto es saber si tomó POCO (Crisis Miasténica) o MUCHO remedio (Crisis Colinérgica). Pupilas minúsculas, diarrea y baba indican Crisis Colinérgica: LA CONDUCTA ES INTUBAR, DAR ATROPINA Y SUSPENDER LA DROGA.'
        }
      }
    }

  }); /* fim Object.assign NEUROLOGIA_DRUGS_DB — BUILD 407
         BUILD 396 — Triptanos: Sumatriptana, Zolmitriptana, Rizatriptana, Naratriptana, Eletriptana
         BUILD 397 — Triptanos+Ergot: Almotriptana, Frovatriptana, Ergotamina, DHE, Erenumabe
         BUILD 398 — Anti-CGRP+Gepantos: Fremanezumabe, Galcanezumabe, Eptinezumabe, Ubrogepanta, Rimegepanta
         BUILD 399 — Gepantos+Ditano+Demência: Atogepanta, Zavegepanta, Lasmiditana, Donepezila, Rivastigmina
         BUILD 400 — Demência avançada + Esclerose Múltipla:
                     Galantamina, Memantina, Lecanemabe, Donanemabe, Interferon beta-1a
         BUILD 401 — Imunomoduladores EM (Interferons + S1P):
                     Interferon beta-1b, Glatirâmer, Fingolimode, Siponimode, Ozanimode
         BUILD 402 — Neuroimunologia EM (S1P + Fumaratos + Monoclonal):
                     Ponesimode (Ponvory) — S1P1 seletivo meia-vida 7d, ⚠ hepaticCaution, highAlert
                     Dimetilfumarato (Tecfidera) — Nrf2 oral, ⚠ PML linfopenia, highAlert
                     Diroximel fumarato (Vumerity) — Nrf2 GI-safe, ⚠ PML/renal, renalHighRisk, highAlert
                     Teriflunomida (Aubagio) — DHODH oral, ⚠ Washout 2anos, teratogênica, highAlert
                     Natalizumabe (Tysabri) — Anti-integrina IV mensal, ⚠ PML VírusJC, highAlert
         BUILD 407 — Anticorpos Anti-CD20/CD52 + Piridostigmina:
                     Ocrelizumabe (Ocrevus) — Anti-CD20 IV semestral, ⚠ HepB reativação, highAlert
                     Ofatumumabe (Kesimpta) — Anti-CD20 SC mensal, ⚠ vacinas vírus vivo, highAlert
                     Alemtuzumabe (Lemtrada) — Anti-CD52 reset imune, ⚠ autoimune 30%, highAlert
                     Cladribina (Mavenclad) — Análogo purina oral pulso, ⚠ teratogênica, renalHighRisk
                     Piridostigmina (Mestinon) — AChE-I Miastenia Gravis, ⚠ Crise Colinérgica, antidote
         BUILD 408 — Anti-FcRn Miastenia + Relaxantes Musculares Centrais:
                     Efgartigimode alfa (Vyvgart) — Anti-FcRn IV/SC ciclo 4sem, ⚠ janela IgG zero, highAlert
                     Rozanolixizumabe (Rystiggo) — Anti-FcRn SC anti-AChR+MuSK, ⚠ meningite asséptica, highAlert
                     Baclofeno (Lioresal) — GABA-B oral/intratecal espasticidade, ⚠ abstinência letal, renalHighRisk
                     Tizanidina (Sirdalud) — alfa-2 CYP1A2, ⚠ síncope hipotensiva + veto Cipro/Fluvoxamina, hepaticCaution
                     Ciclobenzaprina (Miosan) — tricíclico central espasmo agudo, ⚠ anticolinérgico + IMAOs */
})();

/* ── BUILD 408 APPEND — Anti-FcRn + Relaxantes Musculares ────────────── */
(function () {
  if (typeof window.NEUROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) {
    window.NEUROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── EFGARTIGIMODE ALFA ─────────────────────────────────────────────── */
    "efgartigimode_alfa": {
      name: { pt: 'Efgartigimode alfa', es: 'Efgartigimod alfa' },
      category: 'neurologia',
      class: { pt: 'Antagonista do Receptor Fc Neonatal (FcRn) / Fragmento de IgG1', es: 'Antagonista del Receptor Fc Neonatal (FcRn) / Fragmento de IgG1' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Miastenia Gravis Generalizada em pacientes adultos positivos para anticorpos antirreceptor de acetilcolina (AChR)'],
        es: ['Miastenia Gravis Generalizada en pacientes adultos positivos para anticuerpos antirreceptor de acetilcolina (AChR)']
      },
      commercialNames: { br: ['Vyvgart'], ar: ['Vyvgart'] },
      presentation: { pt: ['Frasco-ampola IV 400 mg/20 mL', 'Formulação Subcutânea (associada com hialuronidase)'], es: ['Vial IV 400 mg/20 mL', 'Formulación Subcutánea (asociada con hialuronidasa)'] },
      mechanism: {
        pt: 'Uma obra-prima da biotecnologia. No corpo humano, o receptor FcRn age como um "salva-vidas", impedindo que os anticorpos IgG sejam destruídos e reciclando-os de volta para o sangue. Na Miastenia, os anticorpos IgG atacam o próprio músculo. O Efgartigimode bloqueia o receptor FcRn. Sem o salva-vidas, o corpo destrói todos os anticorpos IgG (bons e ruins) rapidamente nos lisossomos, fazendo o nível de autoanticorpos despencar e devolvendo a força ao paciente em dias.',
        es: 'Una obra maestra. En el cuerpo, el receptor FcRn actúa como "salvavidas", impidiendo que los anticuerpos IgG sean destruidos. En la Miastenia, los IgG atacan el músculo. El Efgartigimod bloquea el receptor FcRn. Sin el salvavidas, el cuerpo destruye todos los anticuerpos rápidamente, haciendo que el nivel de autoanticuerpos caiga y devolviendo la fuerza en días.'
      },
      dose: {
        adult: {
          pt: '10 mg/kg via Infusão Intravenosa, UMA VEZ POR SEMANA, durante 4 semanas (1 ciclo). Novos ciclos são iniciados com base na avaliação clínica.',
          es: '10 mg/kg vía Infusión Intravenosa, UNA VEZ POR SEMANA, durante 4 semanas (1 ciclo). Nuevos ciclos se inician basados en la clínica.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['Infusão IV durante 1 hora. Monitorar sinais de hipersensibilidade. A formulação SC pode ser aplicada no abdome.'],
        es: ['Infusión IV durante 1 hora. Monitorizar signos de hipersensibilidad. La formulación SC puede aplicarse en abdomen.']
      },
      renalAdjustment: { required: false, message: { pt: 'Degradado em aminoácidos, sem ajuste renal.', es: 'Degradado en aminoácidos, sin ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não metabolizado pelo fígado.', es: 'No metabolizado por el hígado.' } },
      commonAdverseEffects: {
        pt: ['Infecções do trato respiratório e urinário (O corpo fica sem IgG para se defender)', 'Cefaleia (muito comum)', 'Mialgia'],
        es: ['Infecciones del tracto respiratorio y urinario (El cuerpo queda sin IgG)', 'Cefalea (muy común)', 'Mialgia']
      },
      dangerousAdverseEffects: {
        pt: ['Infecções oportunistas graves', 'Reações alérgicas severas (angioedema)'],
        es: ['Infecciones oportunistas graves', 'Reacciones alérgicas severas (angioedema)']
      },
      contraindications: {
        absolute: { pt: ['Infecções ativas clinicamente significativas', 'Hipersensibilidade grave'], es: ['Infecciones activas clínicamente significativas', 'Hipersensibilidad grave'] },
        relative: { pt: ['Pacientes sem vacinação atualizada (A imunoglobulina despenca)'], es: ['Pacientes sin vacunación actualizada (La inmunoglobulina cae)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A JANELA DE VULNERABILIDADE: O tratamento literalmente "zera" os anticorpos IgG do paciente circulantes no sangue para salvar o músculo. Durante as 4 semanas do ciclo, o paciente está severamente imunossuprimido e não deve entrar em contato com pessoas doentes.',
          es: 'LA VENTANA DE VULNERABILIDAD: El tratamiento literalmente "pone a cero" los anticuerpos IgG del paciente para salvar el músculo. Durante las 4 semanas, el paciente está severamente inmunosuprimido.'
        }
      }
    },

    /* ── ROZANOLIXIZUMABE ───────────────────────────────────────────────── */
    "rozanolixizumabe": {
      name: { pt: 'Rozanolixizumabe', es: 'Rozanolixizumab' },
      category: 'neurologia',
      class: { pt: 'Anticorpo Monoclonal Humanizado Anti-FcRn', es: 'Anticuerpo Monoclonal Humanizado Anti-FcRn' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Miastenia Gravis Generalizada em adultos (Tanto para anticorpos anti-AChR quanto anti-MuSK)'],
        es: ['Miastenia Gravis Generalizada en adultos (Tanto para anticuerpos anti-AChR como anti-MuSK)']
      },
      commercialNames: { br: ['Rystiggo'], ar: ['Rystiggo'] },
      presentation: { pt: ['Solução para infusão Subcutânea 140 mg/mL'], es: ['Solución para infusión Subcutánea 140 mg/mL'] },
      mechanism: {
        pt: 'Atua pelo mesmo mecanismo revolucionário que o Efgartigimode: bloqueia o receptor Fc neonatal (FcRn). O diferencial clínico é que o Rozanolixizumabe demonstrou eficácia não só contra os autoanticorpos clássicos (Anti-AChR), mas também contra a forma mais agressiva e resistente de Miastenia mediada por anticorpos anti-MuSK. Além disso, é puramente subcutâneo por bomba de infusão em casa.',
        es: 'Actúa por el mismo mecanismo que Efgartigimod: bloquea el receptor FcRn. El diferencial es que demostró eficacia contra la forma más agresiva y resistente mediada por anticuerpos anti-MuSK. Además, es puramente subcutáneo.'
      },
      dose: {
        adult: {
          pt: 'A dose depende do PESO (Ex: <50kg: 420mg; 50-100kg: 560mg; >100kg: 840mg). Administrado via Infusão Subcutânea 1 vez por semana durante 6 semanas.',
          es: 'La dosis depende del PESO. Administrado vía Infusión Subcutánea 1 vez por semana durante 6 semanas.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: {
        pt: ['Infusão subcutânea no abdome utilizando uma bomba de infusão portátil. Não agitar o frasco.'],
        es: ['Infusión subcutánea en abdomen utilizando una bomba de infusión portátil. No agitar el vial.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: {
        pt: ['Cefaleia intensa (MUITO COMUM, a dor de cabeça é o maior queixa na infusão)', 'Diarreia e pirexia (febre)', 'Reação local da injeção'],
        es: ['Cefalea intensa (MUY COMÚN, la queja mayor en la infusión)', 'Diarrea y pirexia (fiebre)', 'Reacción local']
      },
      dangerousAdverseEffects: {
        pt: ['Meningite Asséptica (O paciente desenvolve rigidez de nuca e febre, mas o líquor não tem bactéria)', 'Infecções graves'],
        es: ['Meningitis Aséptica (Desarrolla rigidez de nuca y fiebre, pero el LCR no tiene bacteria)', 'Infecciones graves']
      },
      contraindications: {
        absolute: { pt: ['Infecções ativas severas', 'Hipersensibilidade'], es: ['Infecciones activas severas', 'Hipersensibilidad'] },
        relative: { pt: ['Uso associado de vacinas vivas atenuadas'], es: ['Uso asociado de vacunas vivas atenuadas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A DOR DE CABEÇA DO LÍQUOR: Uma complicação intrigante da droga é o alto índice de dores de cabeça latejantes e até meningite inflamatória. Se o paciente reclamar de dor de cabeça insuportável no dia seguinte à infusão, pode ser necessário administrar analgesia pesada e reavaliar o tratamento.',
          es: 'EL DOLOR DE CABEZA DEL LÍQUIDO: Una complicación intrigante es el alto índice de dolores de cabeza latientes y hasta meningitis. Si el paciente se queja de dolor insoportable, puede necesitar analgesia pesada.'
        }
      }
    },

    /* ── BACLOFENO ──────────────────────────────────────────────────────── */
    "baclofeno": {
      name: { pt: 'Baclofeno', es: 'Baclofeno' },
      category: 'neurologia',
      class: { pt: 'Relaxante Muscular de Ação Central (Agonista GABA-B)', es: 'Relajante Muscular de Acción Central (Agonista GABA-B)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Espasticidade muscular grave (Esclerose Múltipla, Lesões Medulares, Paralisia Cerebral)', 'Soluços intratáveis (uso off-label)'],
        es: ['Espasticidad muscular grave (Esclerosis Múltiple, Lesiones Medulares, Parálisis Cerebral)', 'Hipo intratable (uso off-label)']
      },
      commercialNames: { br: ['Lioresal', 'Baclon'], ar: ['Lioresal'] },
      presentation: { pt: ['Comprimidos 10 mg', 'Solução Injetável Intratecal 0,05 mg/mL, 2 mg/mL (Para bomba espinhal)'], es: ['Comprimidos 10 mg', 'Solución Inyectable Intratecal 0,05 mg/mL, 2 mg/mL (Para bomba espinal)'] },
      mechanism: {
        pt: 'A "Calmaria da Medula". Nos pacientes com lesão medular, os reflexos musculares ficam hiperativos, causando espasmos dolorosos que quebram ossos. O Baclofeno atua exclusivamente nos receptores GABA-B da medula espinhal, hiperpolarizando o nervo e bloqueando a liberação de cálcio. Isso desliga a atividade dos reflexos polissinápticos, soltando a musculatura "dura" do paciente.',
        es: 'La "Calma de la Médula". El Baclofeno actúa en los receptores GABA-B de la médula, hiperpolarizando el nervio y bloqueando la liberación de calcio. Esto apaga la actividad de los reflejos, soltando la musculatura "dura".'
      },
      dose: {
        adult: {
          pt: 'Via Oral: Iniciar com 5 mg, 3 vezes ao dia. Aumentar gradualmente a cada 3 dias. Dose máxima de 80 mg/dia. Bomba Intratecal (Ajuste por neurocirurgião).',
          es: 'Vía Oral: Iniciar con 5 mg, 3 veces al día. Aumentar gradualmente cada 3 días. Dosis máxima 80 mg/día. Bomba Intratecal (ajuste especializado).'
        },
        pediatric: {
          pt: 'Uso intenso em paralisia cerebral: 10 a 15 mg/dia iniciais, divididos. Titular até 40-60 mg/dia dependendo da idade.',
          es: 'Uso en parálisis cerebral: 10-15 mg/día iniciales, divididos. Titular hasta 40-60 mg/día según edad.'
        }
      },
      administration: {
        pt: ['Ingerir com as refeições. NUNCA SUSPENDER ABRUPTAMENTE.'],
        es: ['Ingerir con las comidas. NUNCA SUSPENDER ABRUPTAMENTE.']
      },
      renalAdjustment: { required: true, message: { pt: 'Altamente excretado intacto pela urina. Em DRC severa, acumula rápido e causa coma profundo. Reduzir a dose para o mínimo necessário.', es: 'Altamente excretado intacto por orina. En ERC severa, acumula y causa coma. Reducir dosis al mínimo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico rigoroso.', es: 'Sin necesidad de ajuste clínico riguroso.' } },
      commonAdverseEffects: {
        pt: ['Sonolência intensa (piora em associação com outros relaxantes)', 'Fraqueza muscular generalizada (o paciente pode perder força para ficar em pé)', 'Tontura e confusão em idosos'],
        es: ['Somnolencia intensa', 'Debilidad muscular generalizada (puede perder fuerza para estar de pie)', 'Mareo y confusión en ancianos']
      },
      dangerousAdverseEffects: {
        pt: ['Coma e depressão respiratória (em superdosagem ou acúmulo renal)', 'Síndrome de Abstinência Aguda (Convulsões e hipertermia na parada brusca)'],
        es: ['Coma y depresión respiratoria (en sobredosis o acúmulo renal)', 'Síndrome de Abstinencia Aguda (Convulsiones e hipertermia en la parada brusca)']
      },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Pacientes que dependem da espasticidade para se manterem de pé e caminharem', 'Epilepsia prévia (a droga reduz o limiar convulsivo)'], es: ['Pacientes que dependen de la espasticidad para estar de pie', 'Epilepsia previa (reduce el umbral convulsivo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'O DESMAIO MUSCULAR: Na Paralisia Cerebral ou Pós-AVC, muitos pacientes só conseguem se apoiar em pé POR CAUSA da perna espástica (dura). Se você errar a mão no Baclofeno e soltar o músculo demais, as pernas viram "gelatina" e o paciente perde completamente a capacidade de ficar em pé ou transferir para a cadeira de rodas.',
          es: 'EL DESMAYO MUSCULAR: Si te excedes con el Baclofeno, las piernas se vuelven "gelatina" y el paciente pierde la capacidad de estar de pie o transferir a la silla.'
        }
      }
    },

    /* ── TIZANIDINA ─────────────────────────────────────────────────────── */
    "tizanidina": {
      name: { pt: 'Tizanidina', es: 'Tizanidina' },
      category: 'neurologia',
      class: { pt: 'Relaxante Muscular de Ação Central (Agonista Alfa-2 Adrenérgico)', es: 'Relajante Muscular de Acción Central (Agonista Alfa-2 Adrenérgico)' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Espasmos musculares dolorosos agudos e crônicos', 'Espasticidade decorrente de Esclerose Múltipla ou Lesão Medular'],
        es: ['Espasmos musculares dolorosos agudos y crónicos', 'Espasticidad derivada de Esclerosis Múltiple o Lesión Medular']
      },
      commercialNames: { br: ['Sirdalud'], ar: ['Sirdalud'] },
      presentation: { pt: ['Comprimidos 2 mg e 4 mg'], es: ['Comprimidos 2 mg y 4 mg'] },
      mechanism: {
        pt: 'Age no cérebro de forma muito parecida com o anti-hipertensivo Clonidina. A Tizanidina estimula os receptores Alfa-2 pré-sinápticos nas vias motoras da medula espinhal. Isso inibe brutalmente a liberação de aminoácidos excitatórios, soltando os músculos travados do corpo inteiro. Seu "efeito indesejado" intrínseco é que, por agir como a clonidina, também causa vasodilatação e queda maciça de pressão arterial.',
        es: 'Actúa parecido a la Clonidina. Estimula los receptores Alfa-2 presinápticos. Inhibe la liberación de aminoácidos excitatorios. Su efecto intrínseco es que causa vasodilatación y caída masiva de presión arterial.'
      },
      dose: {
        adult: {
          pt: 'Espasmo: 2 a 4 mg via oral, 3 vezes ao dia. Espasticidade neurológica severa: Aumento gradual até 24 mg/dia a 36 mg/dia (em 3 ou 4 tomadas).',
          es: 'Espasmo: 2-4 mg vía oral, 3 veces al día. Espasticidad severa: hasta 24-36 mg/día en 3-4 tomas.'
        },
        pediatric: { pt: 'Não indicado (Segurança não estabelecida).', es: 'No indicado.' }
      },
      administration: {
        pt: ['Evitar trocar entre tomar em jejum e tomar com comida. Manter consistência, pois a comida altera a absorção em 20%.', 'Nunca levantar rapidamente da cama após tomar.'],
        es: ['Evitar cambiar entre ayunas y con comida. Mantener consistencia. Nunca levantarse rápido de la cama.']
      },
      renalAdjustment: { required: true, message: { pt: 'Em ClCr < 25 mL/min, iniciar com apenas 2 mg UMA VEZ ao dia. O clearance cai 50% no doente renal.', es: 'En ClCr < 25 mL/min, iniciar con solo 2 mg UNA VEZ al día. El clearance cae 50% en el enfermo renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo maciço via CYP1A2. Contraindicado em insuficiência hepática grave.', es: 'Metabolismo masivo vía CYP1A2. Contraindicado en insuficiencia hepática grave.' } },
      commonAdverseEffects: {
        pt: ['Hipotensão postural severa e síncope', 'Boca muito seca', 'Sonolência e astenia profunda'],
        es: ['Hipotensión postural severa y síncope', 'Boca muy seca', 'Somnolencia y astenia profunda']
      },
      dangerousAdverseEffects: {
        pt: ['Lesão Hepática Aguda (Pode ocorrer hepatite medicamentosa fatal, TGO/TGP devem ser vigiadas)', 'Alucinações'],
        es: ['Lesión Hepática Aguda (Puede ocurrir hepatitis medicamentosa fatal)', 'Alucinaciones']
      },
      contraindications: {
        absolute: { pt: ['Uso associado de Inibidores Potentes do CYP1A2 (Ciprofloxacino ou Fluvoxamina - Risco de choque vasoplégico fatal)', 'Hepatopatia grave'], es: ['Uso asociado de Inhibidores Potentes de CYP1A2 (Ciprofloxacino o Fluvoxamina)', 'Hepatopatía grave'] },
        relative: { pt: ['Idosos usuários de múltiplos anti-hipertensivos'], es: ['Ancianos usuarios de múltiples antihipertensivos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: {
          pt: 'A SÍNCOPE DO VASO ABERTO: Ao contrário do Baclofeno, o grande risco da Tizanidina não é o acúmulo no rim, mas o colapso da pressão. Se você prescrever 4mg para uma senhora magra com espasmo muscular, ela pode levantar de madrugada para urinar, desmaiar de hipotensão por alfa-bloqueio, bater a cabeça e sangrar no cérebro.',
          es: 'EL SÍNCOPE DEL VASO ABIERTO: Si prescribe 4mg para una señora anciana, puede desmayarse de hipotensión, golpear la cabeza y sangrar en el cerebro.'
        }
      }
    },

    /* ── CICLOBENZAPRINA ────────────────────────────────────────────────── */
    "ciclobenzaprina": {
      name: { pt: 'Ciclobenzaprina (Cloridrato de)', es: 'Ciclobenzaprina (Clorhidrato de)' },
      category: 'neurologia',
      class: { pt: 'Relaxante Muscular de Ação Central', es: 'Relajante Muscular de Acción Central' },
      icon: '🧠', color: 'rgba(139,92,246,0.15)', colorTxt: '#8B5CF6',
      indications: {
        pt: ['Espasmos musculares dolorosos agudos (Torcicolo, Lombalgia aguda)', 'Coadjuvante em fibromialgia (off-label comum)'],
        es: ['Espasmos musculares dolorosos agudos (Tortícolis, Lumbalgia aguda)', 'Coadyuvante en fibromialgia (off-label común)']
      },
      commercialNames: { br: ['Miosan', 'Musculare', 'Mirtax'], ar: ['Yuredol'] },
      presentation: { pt: ['Comprimidos 5 mg e 10 mg'], es: ['Comprimidos 5 mg y 10 mg'] },
      mechanism: {
        pt: 'É estruturalmente quase idêntica à Amitriptilina (um antidepressivo tricíclico). Ela atua no Tronco Encefálico (não na medula) deprimindo os neurônios motores alfa e gama. Ela reduz o reflexo tônico do músculo somático. Como é filha dos tricíclicos, tem EFEITO ANTICOLINÉRGICO pesado. ATENÇÃO: NÃO FUNCIONA para tratar espasticidade de lesão medular ou paralisia cerebral, apenas para contraturas musculares agudas periféricas.',
        es: 'Estructuralmente casi idéntica a la Amitriptilina. Actúa en el Tronco Encefálico. Reduce el reflejo tónico. Tiene PESADO EFECTO ANTICOLINÉRGICO. No funciona para espasticidad de lesión medular, solo para contracturas agudas.'
      },
      dose: {
        adult: {
          pt: '5 mg a 10 mg via oral, de 2 a 3 vezes ao dia. O tratamento NÃO DEVE exceder 2 a 3 semanas.',
          es: '5-10 mg vía oral, 2-3 veces al día. El tratamiento NO DEBE exceder 2-3 semanas.'
        },
        pediatric: {
          pt: 'Aprovado > 15 anos nas doses de adulto. Não recomendado em crianças pequenas.',
          es: 'Aprobado > 15 años en dosis de adulto. No recomendado en niños.'
        }
      },
      administration: {
        pt: ['Se causar muita sonolência diurna, alterar para uso exclusivo de uma dose de 10 mg ao deitar.'],
        es: ['Si causa mucha somnolencia diurna, alterar para uso exclusivo de 10 mg al acostarse.']
      },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose moderada a grave. Usar 5mg e com muito espaçamento em disfunções leves.', es: 'Evitar en cirrosis moderada a grave. Usar 5mg y espaciado en disfunción leve.' } },
      commonAdverseEffects: {
        pt: ['Sonolência extrema e sedação ("Apaga" o paciente)', 'Boca e garganta secas como lixa (efeito anticolinérgico)', 'Tontura e fadiga'],
        es: ['Somnolencia extrema y sedación', 'Boca y garganta secas como lija', 'Mareo y fatiga']
      },
      dangerousAdverseEffects: {
        pt: ['Arritmias cardíacas e taquicardia severa', 'Retenção urinária aguda e glaucoma em idosos', 'Síndrome Serotoninérgica'],
        es: ['Arritmias cardíacas y taquicardia severa', 'Retención urinaria aguda y glaucoma en ancianos', 'Síndrome Serotoninérgico']
      },
      contraindications: {
        absolute: { pt: ['Uso associado com Inibidores da MAO ou na fase aguda pós-Infarto do Miocárdio', 'Arritmias cardíacas ativas e insuficiência cardíaca grave'], es: ['Uso asociado con IMAOs o fase aguda posinfarto', 'Arritmias activas e insuficiencia cardíaca grave'] },
        relative: { pt: ['Idosos > 65 anos (Lista de Beers - causa demência aguda por bloqueio colinérgico)', 'Glaucoma e Hiperplasia Prostática'], es: ['Ancianos > 65 años (Criterios de Beers)', 'Glaucoma e Hiperplasia Prostática'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: {
          pt: 'A ILUSÃO DO RELAXANTE: O Miosan é o "rei da lombalgia" no PS, mas os estudos mostram que a dor nas costas melhora muito mais porque a Ciclobenzaprina FAZ O PACIENTE DORMIR PROFUNDAMENTE (efeito sedativo tricíclico) do que pela ação direta no espasmo muscular. Não prescreva se o paciente vai dirigir em seguida.',
          es: 'LA ILUSIÓN DEL RELAJANTE: La Ciclobenzaprina alivia el dolor de espalda más porque HACE QUE EL PACIENTE DUERMA PROFUNDAMENTE que por la acción directa en el espasmo. No prescriba si el paciente va a conducir.'
        }
      }
    }

  }); /* fim Object.assign BUILD 408 append */
})();

/* ── BUILD 409 APPEND — Relaxantes Orais Perigosos + Zonisamida ──────── */
(function () {
  if (typeof window.NEUROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) {
    window.NEUROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── METOCARBAMOL ───────────────────────────────────────────────────── */
    "metocarbamol": {
      name: { pt: 'Metocarbamol', es: 'Metocarbamol' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Relaxante Muscular de Ação Central', es: 'Relajante Muscular de Acción Central' },
      indications: {
        pt: ['Espasmos musculares agudos e dolorosos (Coadjuvante a repouso e fisioterapia)', 'Tétano (historicamente usado em altas doses IV para controlar os espasmos tetânicos)'],
        es: ['Espasmos musculares agudos y dolorosos (Coadyuvante al reposo y fisioterapia)', 'Tétanos (históricamente usado en altas dosis IV para controlar espasmos)']
      },
      commercialNames: { br: ['Robaxin (Importado/Associações)'], ar: ['Robaxin'] },
      presentation: { pt: ['Comprimidos 500 mg e 750 mg', 'Ampolas IV/IM 100 mg/mL'], es: ['Comprimidos 500 mg y 750 mg', 'Ampollas IV/IM 100 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo exato desconhecido. Acredita-se que atue puramente por depressão geral do Sistema Nervoso Central (sedação profunda). Ele não tem efeito direto na placa motora ou no músculo esquelético. O paciente relaxa porque o cérebro "apaga" a tensão neurológica basal.',
        es: 'Mecanismo exacto desconocido. Se cree que actúa puramente por depresión general del SNC (sedación profunda). No tiene efecto directo en la placa motora. El paciente se relaja porque el cerebro "apaga" la tensión neurológica basal.'
      },
      dose: {
        adult: {
          pt: 'Oral: Iniciar com 1.500 mg, 4 vezes ao dia por 2 a 3 dias. Depois, reduzir para 1.000 mg 4 vezes ao dia. IV/IM: Casos severos (Tétano).',
          es: 'Oral: Iniciar con 1.500 mg, 4 veces al día por 2 a 3 días. Luego, reducir a 1.000 mg 4 veces al día. IV/IM: Casos severos (Tétanos).'
        },
        pediatric: {
          pt: 'Não recomendado (exceto no tétano pediátrico IV).',
          es: 'No recomendado (excepto en tétanos pediátrico IV).'
        }
      },
      administration: { pt: ['Pode escurecer a urina (cor preta, marrom ou verde), o que é inofensivo. Injeção IV deve ser lenta (Máx 300 mg/min) para evitar síncope.'], es: ['Puede oscurecer la orina (color negro, marrón o verde), lo que es inofensivo. Inyección IV debe ser lenta para evitar síncope.'] },
      renalAdjustment: { required: true, message: { pt: 'As ampolas IV contêm polietilenoglicol (PEG). O PEG acumula em nefropatas, sendo CONTRAINDICADO o uso IV na insuficiência renal grave.', es: 'Las ampollas IV contienen polietilenglicol (PEG). El PEG acumula en nefrópatas, siendo CONTRAINDICADO el uso IV en insuficiencia renal grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Evitar ou reduzir dose na cirrose devido a meia-vida prolongada.', es: 'Evitar o reducir dosis en cirrosis debido a vida media prolongada.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa, vertigem e letargia', 'Urina escura/esverdeada', 'Visão dupla (diplopia)'], es: ['Somnolencia intensa, vértigo y letargo', 'Orina oscura/verdosa', 'Visión doble (diplopía)'] },
      dangerousAdverseEffects: { pt: ['Convulsões (Ocorre na injeção IV muito rápida)', 'Anafilaxia'], es: ['Convulsiones (Ocurre en inyección IV muy rápida)', 'Anafilaxia'] },
      contraindications: {
        absolute: { pt: ['Uso Intravenoso em pacientes com Insuficiência Renal (Devido ao veículo PEG)'], es: ['Uso Intravenoso en pacientes con Insuficiencia Renal (Por el vehículo PEG)'] },
        relative: { pt: ['Miastenia Gravis (Especialmente se o paciente estiver usando inibidores de colinesterase)'], es: ['Miastenia Gravis (Especialmente si el paciente usa inhibidores de colinesterasa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SUSTO NO BANHEIRO: O paciente deve ser ativamente avisado de que o Metocarbamol vai deixar a urina dele completamente preta, verde ou marrom. Sem esse aviso, ele vai ao pronto-socorro em pânico achando que os rins falharam ou que está sangrando.', es: 'EL SUSTO EN EL BAÑO: El paciente debe ser avisado de que el Metocarbamol dejará su orina negra, verde o marrón. Sin este aviso, irá a urgencias en pánico creyendo que sus riñones fallaron.' }
      }
    },

    /* ── CARISOPRODOL ───────────────────────────────────────────────────── */
    "carisoprodol": {
      name: { pt: 'Carisoprodol', es: 'Carisoprodol' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Relaxante Muscular de Ação Central (Pró-fármaco de Barbitúrico)', es: 'Relajante Muscular de Acción Central (Profármaco de Barbitúrico)' },
      indications: {
        pt: ['Alívio sintomático de dores musculoesqueléticas agudas (Geralmente associado a Diclofenaco/Meloxicam em formulações brasileiras/latinas)'],
        es: ['Alivio sintomático de dolores musculoesqueléticos agudos (Generalmente asociado a Diclofenac en formulaciones latinas)']
      },
      commercialNames: { br: ['Torsilax (Assoc)', 'Tandrilax (Assoc)', 'Beserol (Assoc)'], ar: ['Dioxaflex (Assoc)'] },
      presentation: { pt: ['Comprimidos (Em mono-droga 350 mg EUA, ou 125mg nas associações brasileiras)'], es: ['Comprimidos (En mono-droga 350 mg EE.UU., o 125mg en asociaciones latinas)'] },
      mechanism: {
        pt: 'O Relaxante Muscular que causa Dependência. Ele interrompe a comunicação dos neurônios na medula espinhal e na formação reticular do cérebro. O GRANDE PROBLEMA: O Carisoprodol é rapidamente transformado no fígado em MEPROBAMATO. O Meprobamato atua como um BARBITÚRICO (um calmante altamente viciante e perigoso). O paciente sente uma euforia leve, sedação pesada e relaxamento brutal.',
        es: 'El Relajante Muscular que causa Dependencia. Interrumpe la comunicación en la médula y el cerebro. EL GRAN PROBLEMA: El Carisoprodol se transforma en el hígado en MEPROBAMATO. El Meprobamato actúa como un BARBITÚRICO (calmante altamente adictivo). El paciente siente euforia, sedación pesada y relajación brutal.'
      },
      dose: {
        adult: {
          pt: '250 mg a 350 mg via oral, 3 vezes ao dia e ao deitar. O USO NÃO DEVE ULTRAPASSAR 2 A 3 SEMANAS!',
          es: '250 mg a 350 mg vía oral, 3 veces al día y al acostarse. ¡EL USO NO DEBE SUPERAR 2 A 3 SEMANAS!'
        },
        pediatric: {
          pt: 'Não indicado em menores de 16 anos.',
          es: 'No indicado en menores de 16 años.'
        }
      },
      administration: { pt: ['Uso oral. No Brasil, pacientes frequentemente abusam tomando múltiplos comprimidos de Tandrilax/Torsilax por dia, viciando no meprobamato oculto.'], es: ['Uso oral. Pacientes frecuentemente abusan tomando múltiples comprimidos al día, volviéndose adictos al meprobamato oculto.'] },
      renalAdjustment: { required: false, message: { pt: 'Cuidado no acúmulo de meprobamato em falência renal.', es: 'Cuidado en la acumulación de meprobamato en falla renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em disfunção hepática, metabolismo de CYP2C19 alterado gera picos do fármaco mãe.', es: 'Evitar en disfunción hepática, metabolismo alterado genera picos del fármaco madre.' } },
      commonAdverseEffects: { pt: ['Sonolência avassaladora e tontura', 'Cefaleia', 'Sensação de embriaguez / Vertigem'], es: ['Somnolencia avasalladora y mareo', 'Cefalea', 'Sensación de embriaguez / Vértigo'] },
      dangerousAdverseEffects: { pt: ['DEPRESSÃO RESPIRATÓRIA FATAL (Se overdose)', 'Síndrome de Abstinência Aguda (Ansiedade, tremores, insônia e convulsões após parar uso crônico)'], es: ['DEPRESIÓN RESPIRATORIA FATAL (Si sobredosis)', 'Síndrome de Abstinencia Aguda (Ansiedad, temblores, insomnio y convulsiones)'] },
      contraindications: {
        absolute: { pt: ['Porfiria Aguda Intermitente (Meprobamato deflagra crise fatal)', 'Histórico de Abuso de Drogas/Álcool'], es: ['Porfiria Aguda Intermitente (Meprobamato desencadena crisis fatal)', 'Historial de Abuso de Drogas/Alcohol'] },
        relative: { pt: ['Idosos (Risco brutal de queda e delírio)'], es: ['Ancianos (Riesgo brutal de caída y delirio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O VÍCIO SILENCIOSO DA FARMÁCIA: Nos EUA, o Carisoprodol é uma droga controlada rigorosamente (Schedule IV) por ser altamente viciante. Na América Latina, pacientes tomam "Tandrilax" por anos para dor nas costas. Quando tentam parar, têm crises de pânico, taquicardia e insônia (abstinência de barbitúrico).', es: 'EL VICIO SILENCIOSO DE LA FARMACIA: En EE.UU., es una droga controlada rigurosamente por ser altamente adictiva. En América Latina, pacientes toman esto por años. Al intentar parar, tienen pánico, taquicardia e insomnio (abstinencia de barbitúrico).' }
      }
    },

    /* ── ORFENADRINA ────────────────────────────────────────────────────── */
    "orfenadrina": {
      name: { pt: 'Orfenadrina', es: 'Orfenadrina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Relaxante Muscular de Ação Central / Anticolinérgico', es: 'Relajante Muscular de Acción Central / Anticolinérgico' },
      indications: {
        pt: ['Alívio de espasmos musculares severos e dor (Componente base do famoso "Dorflex")', 'Tratamento de tremores e rigidez do Mal de Parkinson (histórico)'],
        es: ['Alivio de espasmos musculares severos y dolor', 'Tratamiento de temblores y rigidez del Parkinson (histórico)']
      },
      commercialNames: { br: ['Dorflex (Assoc)', 'Lisador (Assoc)', 'Norflex'], ar: ['Norflex'] },
      presentation: { pt: ['Comprimidos 35 mg (Nas associações), 100 mg (Puro)', 'Ampolas IV/IM 60 mg/2 mL'], es: ['Comprimidos 35 mg (asociaciones), 100 mg (Puro)', 'Ampollas IV/IM 60 mg/2 mL'] },
      mechanism: {
        pt: 'A Orfenadrina não atua na medula. Ela foi originalmente desenvolvida como uma medicação para Doença de Parkinson! Ela tem forte ação ANTICOLINÉRGICA (bloqueia muscarínicos) e também antagoniza os receptores NMDA no cérebro. Essa tempestade central induz um relaxamento motor pesado, mas "seca" o paciente inteiro no processo.',
        es: 'La Orfenadrina no actúa en la médula. Fue originalmente desarrollada para Parkinson. Tiene fuerte acción ANTICOLINÉRGICA y antagoniza receptores NMDA. Esta tormenta central induce relajación motora, pero "seca" al paciente entero en el proceso.'
      },
      dose: {
        adult: {
          pt: 'Comprimidos com Dipirona (Dorflex): 1 a 2 comp, 3 a 4 vezes ao dia. Cápsula pura (100mg): 1 cap de 12/12h. (Uso curto de no máximo 15 dias).',
          es: 'Comprimidos asociados: 1 a 2 comp, 3 a 4 veces al día. (Uso corto de máximo 15 días).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral rotineiro. Via intravenosa na emergência deve ser feita diluída e lentamente para evitar colapso de pressão e taquicardia paroxística.'], es: ['Uso oral rutinario. Vía IV en urgencias debe hacerse diluida y lenta para evitar colapso de presión.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade estrita.', es: 'Sin necesidad estricta.' } },
      commonAdverseEffects: { pt: ['Taquicardia (O coração acelera assustadoramente)', 'Boca seca intensa, constipação e visão borrada', 'Euforia ou Sonolência'], es: ['Taquicardia (El corazón acelera asustadoramente)', 'Boca seca intensa, constipación y visión borrosa', 'Euforia o Somnolencia'] },
      dangerousAdverseEffects: { pt: ['DELIRIUM ANTICOLINÉRGICO EM IDOSOS (Agitação, alucinação, febre)', 'Retenção urinária aguda (O paciente não consegue urinar)'], es: ['DELIRIUM ANTICOLINÉRGICO EN ANCIANOS (Agitación, alucinación, fiebre)', 'Retención urinaria aguda'] },
      contraindications: {
        absolute: { pt: ['Glaucoma', 'Hiperplasia Prostática Benigna (Retenção aguda)', 'Miastenia Gravis'], es: ['Glaucoma', 'Hiperplasia Prostática Benigna (Retención aguda)', 'Miastenia Gravis'] },
        relative: { pt: ['Taquiarritmias e insuficiência cardíaca coronariana (O aumento do batimento pode infartar o paciente)'], es: ['Taquiarritmias e insuficiencia cardíaca coronaria'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A BATERIA DO CORAÇÃO: Ao prescrever "Dorflex" no pronto-socorro para o paciente que chegou com torcicolo, cuidado! Como tem orfenadrina, o remédio é vagolítico. Se o paciente for um infartado ou tiver arritmia de base, a frequência cardíaca dele vai pular de 70 para 110 bpm sentado na cadeira, induzindo dor no peito.', es: 'LA BATERÍA DEL CORAZÓN: Al prescribir Orfenadrina en urgencias, cuidado. Es vagolítico. Si el paciente tiene arritmia base, su frecuencia cardíaca saltará de 70 a 110 lpm, induciendo isquemia.' }
      }
    },

    /* ── CLORZOXAZONA ───────────────────────────────────────────────────── */
    "clorzoxazona": {
      name: { pt: 'Clorzoxazona', es: 'Clorzoxazona' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Relaxante Muscular de Ação Central', es: 'Relajante Muscular de Acción Central' },
      indications: {
        pt: ['Espasmos musculares dolorosos (Associado a entorses e traumas lombares)'],
        es: ['Espasmos musculares dolorosos (Asociado a esguinces y traumas lumbares)']
      },
      commercialNames: { br: ['Parafon Forte (Histórico/Algumas formulações antigas)'], ar: ['Flexicamin (Assoc)'] },
      presentation: { pt: ['Comprimidos 250 mg e 500 mg'], es: ['Comprimidos 250 mg y 500 mg'] },
      mechanism: {
        pt: 'Atua diretamente na medula espinhal e nas áreas subcorticais do cérebro, deprimindo os reflexos polissinápticos envolvidos na produção e manutenção do espasmo do músculo esquelético. Provoca forte sedação generalizada que contribui para o efeito clínico de relaxamento.',
        es: 'Actúa directamente en la médula espinal y áreas subcorticales del cerebro, deprimiendo los reflejos polisinápticos del espasmo muscular. Provoca fuerte sedación que contribuye al efecto clínico.'
      },
      dose: {
        adult: {
          pt: '250 a 500 mg via oral, 3 a 4 vezes ao dia. Em dores extremas, pode-se usar até 750 mg de 8/8h.',
          es: '250 a 500 mg vía oral, 3 a 4 veces al día. En dolores extremos, hasta 750 mg cada 8h.'
        },
        pediatric: {
          pt: 'Não recomendado o uso pediátrico.',
          es: 'No recomendado el uso pediátrico.'
        }
      },
      administration: { pt: ['Ingerir com alimentos se ocorrer irritação gástrica. Evitar misturar com álcool.'], es: ['Ingerir con alimentos si ocurre irritación gástrica. Evitar mezclar con alcohol.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADA EM DOENÇA HEPÁTICA (Droga com histórico de hepatotoxicidade idiopática severa).', es: 'CONTRAINDICADA EN ENFERMEDAD HEPÁTICA (Historial de hepatotoxicidad severa).' } },
      commonAdverseEffects: { pt: ['Tontura e sonolência marcante', 'Urina com coloração alaranjada, vermelha ou roxa (Metabólitos inofensivos)', 'Mal-estar gástrico'], es: ['Mareo y somnolencia', 'Orina de color naranja, rojo o púrpura (Metabolitos inofensivos)', 'Malestar gástrico'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade idiossincrática fatal (Necrose hepática rara mas documentada)'], es: ['Hepatotoxicidad idiosincrásica fatal (Necrosis hepática rara pero documentada)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com qualquer grau de disfunção hepática basal'], es: ['Pacientes con cualquier grado de disfunción hepática basal'] },
        relative: { pt: ['Pacientes cujo trabalho exija vigilância mental total'], es: ['Pacientes cuyo trabajo exija vigilancia mental total'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DO FÍGADO: A Clorzoxazona caiu em desuso em muitos países de primeiro mundo porque pode destruir o fígado de forma imprevisível (necrose letal). Se o paciente usando a droga apresentar náusea crônica, urina muito escura não explicada, ou olhos amarelos (icterícia), a droga deve ser suspensa na hora.', es: 'ALERTA DEL HÍGADO: Ha caído en desuso porque puede destruir el hígado de forma imprevisible. Si el paciente presenta náusea crónica, orina oscura o ictericia, la droga debe suspenderse al instante.' }
      }
    },

    /* ── ZONISAMIDA ─────────────────────────────────────────────────────── */
    "zonisamida": {
      name: { pt: 'Zonisamida', es: 'Zonisamida' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante (Derivado Sulfonamídico)', es: 'Anticonvulsivante (Derivado Sulfonamídico)' },
      indications: {
        pt: ['Terapia adjuvante para convulsões parciais (focais) em adultos', 'Tratamento de tremores essenciais ou Parkinson (Off-label em alguns países)', 'Perda de peso em clínicas estéticas (Off-label)'],
        es: ['Terapia adyuvante para convulsiones parciales (focales) en adultos', 'Tratamiento de temblores esenciales o Parkinson (Off-label)', 'Pérdida de peso en clínicas estéticas (Off-label)']
      },
      commercialNames: { br: ['Zonegran', 'Zonisamida'], ar: ['Zonegran'] },
      presentation: { pt: ['Cápsulas 25 mg, 50 mg e 100 mg'], es: ['Cápsulas 25 mg, 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Uma droga complexa derivada da Sulfonamida (antibióticos de Sulfa). Ela bloqueia os canais de Sódio dependentes de voltagem (impedindo que o neurônio dispare loucamente) e bloqueia os canais de Cálcio tipo T. Como efeito colateral de classe, ela também é uma inibidora fraca da anidrase carbônica (o que desregula o ácido do sangue e forma pedras nos rins).',
        es: 'Una droga compleja derivada de la Sulfonamida. Bloquea los canales de Sodio (impidiendo que la neurona dispare locamente) y bloquea los canales de Calcio tipo T. Como efecto de clase, también es inhibidora débil de la anhidrasa carbónica (lo que desregula el ácido y forma piedras en riñones).'
      },
      dose: {
        adult: {
          pt: 'Início Lento: 100 mg/dia via oral, aumentando 100 mg a cada 2 semanas. Dose de manutenção: 200 a 400 mg/dia. (Pode chegar a 600 mg em casos extremos).',
          es: 'Inicio Lento: 100 mg/día vía oral, aumentando 100 mg cada 2 semanas. Mantenimiento: 200 a 400 mg/día.'
        },
        pediatric: {
          pt: 'Aprovada > 16 anos na dose de adulto. Usos off-label baseados no peso.',
          es: 'Aprobada > 16 años en dosis de adulto. Usos off-label basados en peso.'
        }
      },
      administration: { pt: ['É OBRIGATÓRIO o paciente beber de 2 a 3 litros de água por dia durante a terapia para evitar as famosas pedras no rim da zonisamida.'], es: ['ES OBLIGATORIO que el paciente beba de 2 a 3 litros de agua al día para evitar las piedras en el riñón.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 50 mL/min (Devido ao acúmulo da droga e risco de formação crônica de cálculos renais).', es: 'Evitar en ClCr < 50 mL/min (Debido a la acumulación y riesgo crónico de cálculos renales).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Titulação deve ser ainda mais lenta na disfunção hepática.', es: 'Titulación debe ser aún más lenta en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Sedação e confusão mental grave (A famosa "lentidão de raciocínio" induzida pela droga)', 'Nefrolitíase (Pedra no rim)', 'Anorexia com emagrecimento severo'], es: ['Sedación y confusión mental grave (La famosa "lentitud de pensamiento")', 'Nefrolitiasis (Piedra en el riñón)', 'Anorexia con adelgazamiento severo'] },
      dangerousAdverseEffects: { pt: ['OLIGIDROSE E HIPERTERMIA (A droga impede que o paciente sue. O corpo frita no calor, causando choque térmico, especialmente fatal em crianças)', 'Acidose Metabólica Crônica', 'Síndrome de Stevens-Johnson (Reação da sulfa)'], es: ['OLIGOHIDROSIS E HIPERTERMIA (La droga impide sudar. El cuerpo se fríe, causando choque térmico en niños)', 'Acidosis Metabólica Crónica', 'Síndrome de Stevens-Johnson (Reacción a sulfa)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave a drogas com SULFA (Sulfametoxazol, Furosemida)', 'Pacientes com histórico de pedras renais repetidas'], es: ['Hipersensibilidad grave a drogas con SULFA', 'Pacientes con historial de cálculos renales'] },
        relative: { pt: ['Crianças expostas a calor intenso no verão'], es: ['Niños expuestos a calor intenso en verano'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'PROIBIÇÃO DE SOL E PRAIA: O aviso mais importante para pais de crianças em uso de Zonisamida é que a droga desliga a capacidade das glândulas sudoríparas. Se a criança for brincar no sol no verão, ela não vai suar uma gota. A temperatura do corpo explodirá para 42°C, resultando em coma, dano cerebral ou morte por insolação farmacológica.', es: 'PROHIBICIÓN DE SOL Y PLAYA: La droga apaga la capacidad de sudar. Si el niño juega al sol en verano, no sudará una gota. La temperatura subirá a 42°C, resultando en coma o muerte por insolación farmacológica.' }
      }
    }

  }); /* fim Object.assign BUILD 409 append */
})();

/* ── BUILD 410 APPEND — Alta Epilepsia: AMPA/Dravet/Lennox/Focais Resistentes ── */
(function () {
  if (typeof window.NEUROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) {
    window.NEUROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── PERAMPANEL ─────────────────────────────────────────────────────── */
    "perampanel": {
      name: { pt: 'Perampanel', es: 'Perampanel' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista Não-Competitivo do Receptor AMPA (Glutamato)', es: 'Antagonista No Competitivo del Receptor AMPA (Glutamato)' },
      indications: {
        pt: ['Terapia adjuvante para convulsões focais (com ou sem generalização secundária)', 'Convulsões tônico-clônicas generalizadas primárias em pacientes > 12 anos'],
        es: ['Terapia adyuvante para convulsiones focales (con o sin generalización secundaria)', 'Convulsiones tónico-clónicas generalizadas primarias en > 12 años']
      },
      commercialNames: { br: ['Fycompa'], ar: ['Fycompa'] },
      presentation: { pt: ['Comprimidos revestidos 2 mg, 4 mg, 6 mg, 8 mg, 10 mg e 12 mg'], es: ['Comprimidos recubiertos 2 mg, 4 mg, 6 mg, 8 mg, 10 mg y 12 mg'] },
      mechanism: {
        pt: 'Primeiro da sua classe. Enquanto a maioria das drogas foca nos canais de Sódio ou GABA, o Perampanel mira diretamente no "acelerador" do cérebro: o Glutamato. Ele atua de forma não-competitiva nos receptores AMPA, impedindo que o glutamato gere sinais elétricos rápidos. Ele "corta a fiação" das tempestades elétricas agudas que causam a convulsão.',
        es: 'Primero de su clase. Mientras la mayoría se enfoca en Sodio o GABA, el Perampanel apunta al "acelerador": el Glutamato. Actúa de forma no competitiva en receptores AMPA, impidiendo que el glutamato genere señales eléctricas. "Corta el cableado" de las tormentas eléctricas.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 2 mg via oral, UMA VEZ ao dia, sempre ao deitar. Aumentar 2 mg a cada 1 ou 2 semanas (Titulação lenta). Dose máxima de 12 mg/dia.',
          es: 'Iniciar con 2 mg vía oral, UNA VEZ al día, siempre al acostarse. Aumentar 2 mg cada 1 o 2 semanas. Dosis máxima de 12 mg/día.'
        },
        pediatric: {
          pt: 'Uso a partir de 4 anos de idade (ajuste estrito por peso).',
          es: 'Uso a partir de 4 años (ajuste estricto por peso).'
        }
      },
      administration: { pt: ['Tomar à noite ao deitar para minimizar a vertigem intensa e os distúrbios de marcha durante o dia.'], es: ['Tomar de noche al acostarse para minimizar el vértigo intenso y los disturbios de marcha de día.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em disfunção renal grave (ClCr < 30 mL/min) por falta de dados.', es: 'Evitar en disfunción renal grave (ClCr < 30 mL/min) por falta de datos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Dose máxima de 8 mg em insuficiência hepática leve a moderada. Contraindicado na grave.', es: 'Dosis máxima de 8 mg en insuficiencia hepática leve/moderada. Contraindicado en grave.' } },
      commonAdverseEffects: { pt: ['Tontura e distúrbio da marcha (ataxia/quedas freqüentes)', 'Ganho de peso', 'Sonolência e fadiga'], es: ['Mareo y disturbio de la marcha (ataxia/caídas)', 'Aumento de peso', 'Somnolencia y fatiga'] },
      dangerousAdverseEffects: { pt: ['REAÇÕES PSIQUIÁTRICAS SEVERAS (Hostilidade extrema, delírios e ideação homicida)', 'Risco aumentado de suicídio'], es: ['REACCIONES PSIQUIÁTRICAS SEVERAS (Hostilidad extrema, delirios e ideación homicida)', 'Riesgo aumentado de suicidio'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave ao princípio ativo'], es: ['Hipersensibilidad grave al principio activo'] },
        relative: { pt: ['Pacientes com transtornos de personalidade prévios, esquizofrenia ou histórico de agressividade'], es: ['Pacientes con trastornos de personalidad, esquizofrenia o historial de agresividad'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA AGRESSIVIDADE: O Perampanel possui uma "Black Box" do FDA inusitada. A droga altera o sistema límbico do paciente de tal forma que ele pode desenvolver, subitamente, episódios de hostilidade incontrolável, raiva assassina, paranoia e agitação severa, mesmo sem histórico psiquiátrico prévio. A família deve ser avisada para vigiar mudanças de humor.', es: 'LA ALERTA DE AGRESIVIDAD: Posee una "Caja Negra" inusual. Altera el sistema límbico de tal forma que el paciente puede desarrollar hostilidad incontrolable, rabia homicida y paranoia, incluso sin historial. La familia debe vigilar cambios de humor.' }
      }
    },

    /* ── ESTIRIPENTOL ───────────────────────────────────────────────────── */
    "estiripentol": {
      name: { pt: 'Estiripentol', es: 'Estiripentol' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante (Inibidor Enzimático e Modulador GABA)', es: 'Anticonvulsivante (Inhibidor Enzimático y Modulador GABA)' },
      indications: {
        pt: ['Síndrome de Dravet (Epilepsia Mioclônica Severa da Infância) — SEMPRE associado ao Clobazam e Valproato'],
        es: ['Síndrome de Dravet (Epilepsia Mioclónica Severa de la Infancia) — SIEMPRE asociado a Clobazam y Valproato']
      },
      commercialNames: { br: ['Diacomit'], ar: ['Diacomit'] },
      presentation: { pt: ['Cápsulas 250 mg e 500 mg', 'Sachês com pó oral 250 mg e 500 mg'], es: ['Cápsulas 250 mg y 500 mg', 'Sobres con polvo oral 250 mg y 500 mg'] },
      mechanism: {
        pt: 'Mecanismo duplo fascinante. Sozinho, o Estiripentol potencializa o receptor GABA-A prolongando o tempo que o canal fica aberto. Porém, a sua MÁGICA acontece no fígado: ele é um potentíssimo "Destruidor de Enzimas" (inibe CYP1A2, CYP2C19, CYP3A4). Quando dado junto com Clobazam (que é a regra da Síndrome de Dravet), o fígado para de destruir o Clobazam. Os níveis do anticonvulsivante no sangue da criança disparam em até 5 vezes, paralisando os ataques epilépticos refratários.',
        es: 'Mecanismo doble. Solo, potencia el receptor GABA-A. Pero su MAGIA ocurre en el hígado: es un potentísimo inhibidor enzimático (CYP1A2, CYP2C19, CYP3A4). Cuando se da con Clobazam (regla en Dravet), el hígado deja de destruirlo. Los niveles del anticonvulsivante se disparan, paralizando los ataques refractarios.'
      },
      dose: {
        adult: {
          pt: '50 mg/kg/dia divididos em 2 a 3 tomadas diárias (As doses são pesadas e tituladas gradualmente).',
          es: '50 mg/kg/día divididos en 2 a 3 tomas diarias (Dosis tituladas gradualmente).'
        },
        pediatric: {
          pt: '50 mg/kg/dia dividido em 2 a 3 administrações, junto à alimentação.',
          es: '50 mg/kg/día dividido en 2 a 3 administraciones, junto a la alimentación.'
        }
      },
      administration: { pt: ['OBRIGATÓRIO tomar junto com alimentos para garantir a absorção e não causar irritação gástrica ácida. O pó (sachê) pode ser misturado em iogurte ou purê de maçã.'], es: ['OBLIGATORIO tomar junto con alimentos. El polvo puede mezclarse en yogur o puré de manzana.'] },
      renalAdjustment: { required: true, message: { pt: 'A evitar em caso de disfunção renal grave.', es: 'A evitar en caso de disfunción renal grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática severa.', es: 'Contraindicado en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['Sonolência extrema (efeito do acúmulo das outras drogas)', 'Perda de apetite marcante e perda de peso na criança', 'Hipotonia (Fraqueza muscular)'], es: ['Somnolencia extrema (efecto del acúmulo de las otras drogas)', 'Pérdida de apetito y peso en el niño', 'Hipotonía (Debilidad muscular)'] },
      dangerousAdverseEffects: { pt: ['Neutropenia grave (Queda das defesas do sangue)'], es: ['Neutropenia grave (Caída de defensas en sangre)'] },
      contraindications: {
        absolute: { pt: ['Histórico de delírio severo', 'Uso como monoterapia (Sozinho ele é fraco, precisa do Clobazam)'], es: ['Historial de delirio severo', 'Uso como monoterapia (Solo es débil, necesita Clobazam)'] },
        relative: { pt: ['Pacientes subnutridos (A anorexia do remédio agrava a inanição)'], es: ['Pacientes desnutridos (La anorexia del remedio agrava la inanición)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A "INTOXICAÇÃO PROPOSITAL": Na Síndrome de Dravet, o médico usa o Estiripentol justamente para "intoxicar" beneficamente a criança com o Clobazam que ela já tomava. O clínico é OBRIGADO a reduzir a dose de Clobazam pela metade no dia em que iniciar o Estiripentol, senão a criança pode entrar em coma medicamentoso em 48 horas.', es: 'LA "INTOXICACIÓN PROPOSITIVA": En Dravet, se usa Estiripentol justamente para acumular el Clobazam que el niño ya tomaba. El clínico está OBLIGADO a reducir la dosis de Clobazam a la mitad al iniciar Estiripentol, de lo contrario el niño puede entrar en coma.' }
      }
    },

    /* ── CANABIDIOL ─────────────────────────────────────────────────────── */
    "canabidiol": {
      name: { pt: 'Canabidiol (CBD Purificado)', es: 'Cannabidiol (CBD Purificado)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Modulador de Canais de Cálcio (Derivado Canabinoide Não-Psicoativo)', es: 'Modulador de Canales de Calcio (Derivado Cannabinoide No Psicoactivo)' },
      indications: {
        pt: ['Convulsões associadas à Síndrome de Lennox-Gastaut', 'Convulsões associadas à Síndrome de Dravet', 'Esclerose Tuberosa'],
        es: ['Convulsiones asociadas al Síndrome de Lennox-Gastaut', 'Convulsiones asociadas al Síndrome de Dravet', 'Esclerosis Tuberosa']
      },
      commercialNames: { br: ['Epidiolex', 'Mevatyl (Outra formulação)', 'Prati-Donaduzzi'], ar: ['Epidiolex'] },
      presentation: { pt: ['Solução Oral 100 mg/mL (Óleo puro, grau farmacêutico, 0% THC)'], es: ['Solución Oral 100 mg/mL (Aceite puro, grado farmacéutico, 0% THC)'] },
      mechanism: {
        pt: 'Diferente da maconha fumada, o Epidiolex é o extrato farmacêutico 100% puro do CBD, sem NENHUM THC (não causa "barato" ou alucinações). Seu mecanismo exato não envolve os receptores canabinoides (CB1/CB2) do cérebro. Ele bloqueia o receptor GPR55 e os canais TRPV1 (canais de cálcio excessivamente ativos nos neurônios doentes), acalmando a eletricidade cerebral aberrante nas síndromes catastróficas da infância.',
        es: 'A diferencia de la marihuana, el Epidiolex es extracto farmacéutico 100% puro de CBD, sin THC (no causa "viaje" ni alucinaciones). No involucra los receptores CB1/CB2. Bloquea el receptor GPR55 y los canales TRPV1, calmando la electricidad cerebral en síndromes catastróficos infantiles.'
      },
      dose: {
        adult: {
          pt: 'Início com 2,5 mg/kg duas vezes ao dia. Manutenção: 5 a 10 mg/kg duas vezes ao dia. Máximo de 20 a 25 mg/kg/dia.',
          es: 'Inicio con 2,5 mg/kg dos veces al día. Mantenimiento: 5 a 10 mg/kg dos veces al día. Máximo de 20 a 25 mg/kg/día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 1 ano de idade nas mesmas doses de ajuste por peso corporo-baseado.',
          es: 'Aprobado a partir de 1 año de edad en las mismas dosis de ajuste por peso.'
        }
      },
      administration: { pt: ['O óleo deve ser administrado de forma consistente em relação às refeições. Refeições ricas em GORDURA multiplicam a absorção do CBD em 5 vezes, causando risco de overdose ou sonolência extrema se for tomado aleatoriamente.'], es: ['El aceite debe administrarse de forma consistente respecto a las comidas. Comidas ricas en GRASA multiplican la absorción 5 veces, causando riesgo de sobredosis si se toma aleatoriamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade em disfunção renal.', es: 'Sin necesidad en disfunción renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Requer dose muito mais baixa e lenta em insuficiência hepática moderada ou grave.', es: 'Requiere dosis mucho más baja en insuficiencia hepática moderada/grave.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa (Letargia marcante nas primeiras semanas)', 'Diarreia grave (Muitas vezes causada pelo óleo de sésamo do veículo, não pelo remédio)', 'Diminuição do apetite e vômitos'], es: ['Somnolencia intensa (Letargo marcado las primeras semanas)', 'Diarrea grave (A menudo causada por el aceite del vehículo)', 'Disminución del apetito y vómitos'] },
      dangerousAdverseEffects: { pt: ['Aumento agressivo de Enzimas Hepáticas (TGO/TGP subindo 3 a 5 vezes o limite normal)', 'Comportamento suicida agudo'], es: ['Aumento agresivo de Enzimas Hepáticas (AST/ALT subiendo 3 a 5 veces lo normal)', 'Comportamiento suicida agudo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade severa ao CBD ou óleo de sésamo'], es: ['Hipersensibilidad severa al CBD o aceite de sésamo'] },
        relative: { pt: ['Doença hepática pré-existente (sem ajuste adequado)', 'Uso cruzado sem monitoramento com Valproato de Sódio'], es: ['Enfermedad hepática preexistente', 'Uso cruzado sin monitoreo con Valproato de Sodio'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CHOQUE DE FICAR ACORDADO: Um fenômeno intrigante do uso de Canabidiol é que, embora cause muito sono de dia nas crianças com Lennox-Gastaut, ele PODE CAUSAR INSÔNIA SEVERA se dado logo antes de dormir. O cérebro fica confuso com o "relaxamento" elétrico. Recomenda-se dar a última dose do dia no final da tarde, não na hora do travesseiro.', es: 'EL CHOQUE DE ESTAR DESPIERTO: Un fenómeno intrigante es que, aunque causa mucho sueño de día, PUEDE CAUSAR INSOMNIO SEVERO si se da justo antes de dormir. Se recomienda dar la última dosis a final de la tarde, no a la hora de acostarse.' }
      }
    },

    /* ── CENOBAMATO ─────────────────────────────────────────────────────── */
    "cenobamato": {
      name: { pt: 'Cenobamato', es: 'Cenobamato' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante Duplo (Bloqueador Na+ e Modulador GABA)', es: 'Anticonvulsivante Doble (Bloqueador Na+ y Modulador GABA)' },
      indications: {
        pt: ['Crises epilépticas focais (com ou sem generalização secundária) em pacientes adultos REFRATÁRIOS'],
        es: ['Crisis epilépticas focales (con o sin generalización) en pacientes adultos REFRACTARIOS']
      },
      commercialNames: { br: ['Xcopri (Em aprovação)'], ar: ['Ontozry', 'Xcopri'] },
      presentation: { pt: ['Comprimidos de titulação 12,5 mg, 25 mg, 50 mg, 100 mg, 150 mg, 200 mg'], es: ['Comprimidos de titulación 12,5 mg, 25 mg, 50 mg, 100 mg, 150 mg, 200 mg'] },
      mechanism: {
        pt: 'Uma nova "bomba nuclear" contra convulsões focais. Ele combina os dois mecanismos mais fortes da neurologia em uma pílula só. Primeiro: inibe a "corrente persistente" de Sódio (impedindo a descarga repetitiva e veloz da convulsão). Segundo: ele se liga de forma não-benzodiazepínica ao receptor GABA-A, aumentando massivamente a entrada de cloreto inibitório. Em ensaios clínicos, zerou as convulsões em quase 20% dos pacientes que não respondiam a NADA.',
        es: 'Una nueva "bomba" contra convulsiones focales. Combina los dos mecanismos más fuertes. Primero: inhibe la "corriente persistente" de Sodio. Segundo: se une de forma no benzodiazepínica al GABA-A, aumentando masivamente el cloruro inhibitorio. En ensayos, dejó sin convulsiones al 20% de pacientes que no respondían a NADA.'
      },
      dose: {
        adult: {
          pt: 'Regime Ultra-Lento: 12,5 mg/dia nas 2 primeiras semanas. 25 mg/dia nas semanas 3 e 4. Até atingir a manutenção de 200 mg a 400 mg ao dia. (Pressa mata o paciente).',
          es: 'Régimen Ultra Lento: 12,5 mg/día las 2 primeras semanas. 25 mg/día en semanas 3 y 4. Hasta mantenimiento de 200 a 400 mg. (La prisa mata al paciente).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Tomar inteiro com ou sem comida.'], es: ['Tomar entero con o sin comida.'] },
      renalAdjustment: { required: true, message: { pt: 'Usar com cautela, dose máxima reduzida em insuficiência renal (ClCr < 90 já requer atenção moderada).', es: 'Usar con cautela, dosis máxima reducida en insuficiencia renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Máximo de 200 mg/dia em disfunção hepática leve/moderada.', es: 'Máximo de 200 mg/día en disfunción hepática leve/moderada.' } },
      commonAdverseEffects: { pt: ['Sonolência avassaladora e fadiga motora', 'Tontura extrema (Ataxia e Diplopia — visão dupla)', 'Dor de cabeça'], es: ['Somnolencia avasalladora y fatiga motora', 'Mareo extremo (Ataxia y Visión doble)', 'Dolor de cabeza'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE DRESS (Reação com eosinofilia e sintomas sistêmicos — A alergia que derrete órgãos internos e a pele, podendo ser letal)', 'Encurtamento do intervalo QT no eletrocardiograma'], es: ['SÍNDROME DE DRESS (Reacción con eosinofilia — Alergia que derrite órganos y piel, letal)', 'Acortamiento del intervalo QT en el ECG'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Síndrome do QT Curto Familiar (Risco de parada cardíaca súbita)'], es: ['Pacientes con Síndrome de QT Corto Familiar (Riesgo de parada cardíaca)'] },
        relative: { pt: ['Vício prévio em benzodiazepínicos'], es: ['Vicio previo en benzodiazepinas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A PACIÊNCIA CONTRA A SÍNDROME DE DRESS: O Cenobamato é excelente, mas só pode ser dado de forma quase homeopática no começo. Aumentar a dose rápido para cortar a convulsão resultará na Síndrome de DRESS nas primeiras semanas, onde o fígado inflama, os rins param e o paciente desenvolve erupções em brasa fatais. Siga a tabela!', es: 'LA PACIENCIA CONTRA EL SÍNDROME DE DRESS: El Cenobamato es excelente, pero aumentar la dosis rápido resultará en el Síndrome de DRESS. ¡Siga la tabla!' }
      }
    },

    /* ── FELBAMATO ──────────────────────────────────────────────────────── */
    "felbamato": {
      name: { pt: 'Felbamato', es: 'Felbamato' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante Misto (Modulador NMDA / Potenciador GABA)', es: 'Anticonvulsivante Mixto (Modulador NMDA / Potenciador GABA)' },
      indications: {
        pt: ['A Última Fronteira: Tratamento de convulsões refratárias extremas (Lennox-Gastaut e focais graves) APENAS quando o risco do paciente morrer pela convulsão é maior que o risco de morrer pela medicação.'],
        es: ['La Última Frontera: Tratamiento de convulsiones refractarias extremas (Lennox-Gastaut) SOLO cuando el riesgo de morir por la convulsión es mayor que por la medicación.']
      },
      commercialNames: { br: ['Taloxa', 'Felbatol (Importado)'], ar: ['Felbamato'] },
      presentation: { pt: ['Comprimidos 400 mg e 600 mg', 'Suspensão Oral'], es: ['Comprimidos 400 mg y 600 mg', 'Suspensión Oral'] },
      mechanism: {
        pt: 'Uma droga de poder absoluto. O Felbamato bloqueia especificamente o "sítio da glicina" no receptor NMDA de glutamato, cortando pela raiz a hiperexcitabilidade de tempestades elétricas cerebrais que não respondem a mais nada. É capaz de zerar Lennox-Gastaut, mas foi restrito mundialmente em 1994 por seus efeitos fatais e idiossincráticos na medula e no fígado.',
        es: 'Una droga de poder absoluto. Bloquea el "sitio de la glicina" en el receptor NMDA, cortando de raíz la hiperexcitabilidad. Es capaz de detener Lennox-Gastaut, pero fue restringido en 1994 por sus efectos fatales en la médula ósea y el hígado.'
      },
      dose: {
        adult: {
          pt: 'Oral: Iniciar com 1200 mg/dia, divididos em 3 a 4 tomadas. Subir gradativamente até o máximo de 3600 mg/dia.',
          es: 'Oral: Iniciar con 1200 mg/día, divididos en 3 a 4 tomas. Subir hasta 3600 mg/día.'
        },
        pediatric: {
          pt: 'Síndrome de Lennox-Gastaut (crianças de 2 a 14 anos): Iniciar com 15 mg/kg/dia, subir até 45 mg/kg/dia.',
          es: 'Síndrome de Lennox-Gastaut: Iniciar con 15 mg/kg/día, subir hasta 45 mg/kg/día.'
        }
      },
      administration: { pt: ['Obrigatório dividir as doses rigorosamente durante o dia para manter o nível sérico.'], es: ['Obligatorio dividir las dosis rigurosamente para mantener el nivel sérico.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir a dose inicial pela METADE e fazer titulação ultra-lenta em ClCr < 50 mL/min.', es: 'Reducir dosis inicial a la MITAD y hacer titulación ultra lenta en ClCr < 50 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO formalmente na disfunção hepática, independentemente do grau.', es: 'CONTRAINDICADO formalmente en disfunción hepática, independientemente del grado.' } },
      commonAdverseEffects: { pt: ['Insônia bizarra e anorexia brutal', 'Vômitos incontroláveis nas primeiras semanas', 'Visão dupla (Diplopia)'], es: ['Insomnio bizarro y anorexia brutal', 'Vómitos incontrolables en las primeras semanas', 'Visión doble (Diplopía)'] },
      dangerousAdverseEffects: { pt: ['ANEMIA APLÁSTICA LETAL (A medula óssea do paciente simplesmente para de fabricar sangue, levando à morte por sangramento ou infecção em 30% dos afetados)', 'FALÊNCIA HEPÁTICA FULMINANTE'], es: ['ANEMIA APLÁSTICA LETAL (La médula ósea deja de fabricar sangre, llevando a la muerte en 30% de los afectados)', 'FALLA HEPÁTICA FULMINANTE'] },
      contraindications: {
        absolute: { pt: ['Histórico de discrasias sanguíneas (Anemia, neutropenia prévia)', 'Doença hepática anterior', 'Qualquer paciente cujas convulsões possam ser controladas com OUTRO medicamento seguro'], es: ['Historial de discrasias sanguíneas (Anemia, neutropenia)', 'Enfermedad hepática', 'Cualquier paciente cuyas convulsiones puedan controlarse con OTRO medicamento seguro'] },
        relative: { pt: ['Uso associado com Carbamazepina ou Valproato (risco massivo de overdose hepática e medular)'], es: ['Uso asociado con Carbamazepina o Valproato'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O TERMO DE RESPONSABILIDADE: Prescrever Felbamato não é uma simples canetada. O médico é legalmente obrigado (sob FDA e diretrizes mundiais) a fazer o paciente e a família ASSINAREM UM TERMO reconhecendo que entenderam que a medicação pode matar o paciente de Anemia Aplástica (incidência 1 em 3.000) e aceitam o risco.', es: 'EL CONSENTIMIENTO INFORMADO: El médico está legalmente obligado a hacer que el paciente y la familia FIRMEN UN DOCUMENTO reconociendo que la medicación puede matar al paciente de Anemia Aplástica (incidencia 1 en 3.000) y aceptan el riesgo.' }
      }
    }

  }); /* fim Object.assign BUILD 410 append */
})();

/* ── BUILD 411 APPEND — Anticonvulsivantes Finais + Doença de Parkinson (Tolcapona) ── */
(function () {
  if (typeof window.NEUROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) {
    window.NEUROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── TIAGABINA ──────────────────────────────────────────────────────── */
    "tiagabina": {
      name: { pt: 'Tiagabina', es: 'Tiagabina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante (Inibidor da Recaptação do GABA)', es: 'Anticonvulsivante (Inhibidor de la Recaptación del GABA)' },
      indications: {
        pt: ['Terapia adjuvante para convulsões focais (parciais) em adultos e adolescentes (>12 anos)'],
        es: ['Terapia adyuvante para convulsiones focales (parciales) en adultos y adolescentes (>12 años)']
      },
      commercialNames: { br: ['Gabitril (Importado)'], ar: ['Gabitril'] },
      presentation: { pt: ['Comprimidos 2 mg, 4 mg, 12 mg e 16 mg'], es: ['Comprimidos 2 mg, 4 mg, 12 mg y 16 mg'] },
      mechanism: {
        pt: 'Uma armadilha para o transportador. O cérebro usa a proteína GAT-1 para "limpar" o GABA (o freio do cérebro) das sinapses depois que ele é usado. A Tiagabina inibe a GAT-1. Como o GABA não é limpo, ele se acumula na fenda sináptica, freando continuamente os disparos elétricos anormais.',
        es: 'Una trampa para el transportador. El cerebro usa la proteína GAT-1 para "limpiar" el GABA de las sinapsis. La Tiagabina inhibe la GAT-1. Como el GABA no es limpiado, se acumula, frenando continuamente los disparos eléctricos anormales.'
      },
      dose: {
        adult: {
          pt: 'Início: 4 mg 1x ao dia. Aumentar de 4 a 8 mg/semana. Manutenção: 32 mg a 56 mg/dia (divididos em 2 a 4 tomadas).',
          es: 'Inicio: 4 mg 1x al día. Aumentar de 4 a 8 mg/semana. Mantenimiento: 32 mg a 56 mg/día (divididos en 2 a 4 tomas).'
        },
        pediatric: {
          pt: '12 a 18 anos: Iniciar com 4 mg. Manutenção até 32 mg/dia.',
          es: '12 a 18 años: Iniciar con 4 mg. Mantenimiento hasta 32 mg/día.'
        }
      },
      administration: { pt: ['Deve ser tomada COM ALIMENTOS para atrasar o pico no sangue, minimizando reações neurológicas.'], es: ['Debe tomarse CON ALIMENTOS para retrasar el pico en sangre, minimizando reacciones neurológicas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade (metabolismo hepático CYP3A4 predominante).', es: 'Sin necesidad (metabolismo hepático predominante).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose ou espaçar tomadas em insuficiência hepática.', es: 'Reducir dosis o espaciar tomas en insuficiencia hepática.' } },
      commonAdverseEffects: { pt: ['Tontura marcante e nervosismo', 'Fadiga e confusão', 'Tremores'], es: ['Mareo marcado y nerviosismo', 'Fatiga y confusión', 'Temblores'] },
      dangerousAdverseEffects: { pt: ['Estado de Mal Epiléptico não convulsivo (O paciente fica preso num "transe" elétrico mudo)', 'Convulsões de Novo (Em pacientes sem epilepsia que tomam a droga para outros fins)'], es: ['Estado de Mal Epiléptico no convulsivo (El paciente queda en un "trance" eléctrico mudo)', 'Convulsiones de Novo (En pacientes sin epilepsia)'] },
      contraindications: {
        absolute: { pt: ['Uso OFF-LABEL (Para dormir ou transtorno bipolar) — Causa convulsões no cérebro sadio'], es: ['Uso OFF-LABEL (Para dormir o trastorno bipolar) — Causa convulsiones en el cerebro sano'] },
        relative: { pt: ['Crises de ausência generalizadas (Pode piorá-las dramaticamente)'], es: ['Crisis de ausencia generalizadas (Puede empeorarlas dramáticamente)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A SÍNDROME DO "OFF-LABEL": A Tiagabina tem um alerta terrível. Nos anos 2000, psiquiatras a prescreviam fora da bula como calmante/para insônia em pessoas normais. O resultado: essas pessoas começaram a ter convulsões violentas no meio da rua. É uma droga EXCLUSIVA para epiléticos.', es: 'LA SÍNDROME DEL "OFF-LABEL": Psiquiatras la prescribían como calmante en personas normales. El resultado: estas personas comenzaron a tener convulsiones violentas. Es una droga EXCLUSIVA para epilépticos.' }
      }
    },

    /* ── CLOBAZAM ───────────────────────────────────────────────────────── */
    "clobazam": {
      name: { pt: 'Clobazam', es: 'Clobazam' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Benzodiazepínico 1,5 (Anticonvulsivante)', es: 'Benzodiazepínico 1,5 (Anticonvulsivante)' },
      indications: {
        pt: ['Terapia coadjuvante na Síndrome de Lennox-Gastaut e Dravet', 'Epilepsia parcial ou generalizada refratária', 'Prevenção de crises catameniais (ligadas à menstruação)'],
        es: ['Terapia coadyuvante en el Síndrome de Lennox-Gastaut y Dravet', 'Epilepsia parcial o generalizada refractaria', 'Prevención de crisis catameniales (ligadas a la menstruación)']
      },
      commercialNames: { br: ['Urbanil', 'Frisium'], ar: ['Karidium', 'Urbadan'] },
      presentation: { pt: ['Comprimidos 10 mg e 20 mg', 'Suspensão oral 2,5 mg/mL (Em alguns países)'], es: ['Comprimidos 10 mg y 20 mg', 'Suspensión oral 2,5 mg/mL'] },
      mechanism: {
        pt: 'Diferente de TODOS os outros benzodiazepínicos clássicos (Diazepam, Rivotril, Alprazolam) que têm os átomos de nitrogênio nas posições 1 e 4 do anel químico, o Clobazam possui nitrogênios nas posições 1 e 5. Essa minúscula mudança química faz com que ele se ligue seletivamente a receptores GABA-A diferentes no cérebro. O resultado: ele é um anticonvulsivante violento, mas produz MUITO MENOS sedação profunda e desenvolve muito menos tolerância ("vício") que os outros benzos.',
        es: 'A diferencia de TODOS los otros benzodiazepínicos clásicos que tienen los nitrógenos en las posiciones 1 y 4, el Clobazam posee nitrógenos en 1 y 5. Esta minúscula diferencia hace que sea un anticonvulsivante violento, pero produce MUCHO MENOS sedación profunda y desarrolla mucho menos tolerancia.'
      },
      dose: {
        adult: {
          pt: '20 mg a 30 mg/dia via oral, podendo chegar a 60 mg/dia em epilepsias graves.',
          es: '20 mg a 30 mg/día vía oral, pudiendo llegar a 60 mg/día en epilepsias graves.'
        },
        pediatric: {
          pt: 'Lennox-Gastaut (>2 anos): 5 mg/dia (se peso <30kg); titular conforme eficácia, máx 20 a 40 mg/dia.',
          es: 'Lennox-Gastaut (>2 años): 5 mg/día (si peso <30kg); titular según eficacia.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. Os comprimidos costumam ser sulcados para facilitar a partição pediátrica.'], es: ['Puede tomarse con o sin alimentos. Los comprimidos suelen tener ranuras para facilitar partición pediátrica.'] },
      renalAdjustment: { required: false, message: { pt: 'Uso com precaução em insuficiência renal, mas não exige ajuste rígido inicial.', es: 'Uso con precaución en insuficiencia renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado integralmente no fígado (Metabólito ativo Norclobazam). Reduzir dose em hepatopatias.', es: 'Metabolizado integralmente en hígado (Metabolito activo Norclobazam). Reducir dosis en hepatopatías.' } },
      commonAdverseEffects: { pt: ['Sonolência e letargia', 'Sialorreia (Criança baba muito)', 'Ataxia e perda de coordenação motora'], es: ['Somnolencia y letargo', 'Sialorrea (El niño babea mucho)', 'Ataxia y pérdida de coordinación'] },
      dangerousAdverseEffects: { pt: ['Reação cutânea letal (Síndrome de Stevens-Johnson)', 'Depressão Respiratória (Se somado a opioides)'], es: ['Reacción cutánea letal (Síndrome de Stevens-Johnson)', 'Depresión Respiratoria (Si se suma a opioides)'] },
      contraindications: {
        absolute: { pt: ['Miastenia Gravis descompensada', 'Síndrome da Apneia Severa do Sono'], es: ['Miastenia Gravis descompensada', 'Síndrome de la Apnea Severa del Sueño'] },
        relative: { pt: ['Histórico de abuso de substâncias (Apesar de tolerância menor, ainda é um benzodiazepínico)'], es: ['Historial de abuso de sustancias (Aunque tiene menor tolerancia, aún es un benzodiazepínico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O RISCO DA AGRESSÃO PARADOXAL: Em crianças com cérebro severamente lesionado (Lennox-Gastaut), o Clobazam às vezes faz o efeito reverso. Em vez de acalmar, a criança fica agressiva, hiperativa, grita e bate nos pais (Reação Paradoxal do Benzo). Suspenda e reporte ao neuro.', es: 'EL RIESGO DE LA AGRESIÓN PARADÓJICA: En niños con cerebro lesionado, el Clobazam a veces hace el efecto reverso. En vez de calmar, el niño queda agresivo, hiperactivo y golpea a los padres. Suspenda y reporte.' }
      }
    },

    /* ── ESLICARBAZEPINA ────────────────────────────────────────────────── */
    "eslicarbazepina": {
      name: { pt: 'Eslicarbazepina (Acetato de)', es: 'Eslicarbazepina (Acetato de)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante (Bloqueador de Canais de Sódio dependente de voltagem)', es: 'Anticonvulsivante (Bloqueador de Canales de Sodio)' },
      indications: {
        pt: ['Convulsões de início parcial (focal) em adultos e crianças (>4 anos)'],
        es: ['Convulsiones de inicio parcial (focal) en adultos y niños (>4 años)']
      },
      commercialNames: { br: ['Zebinix', 'Aptiom'], ar: ['Zebinix'] },
      presentation: { pt: ['Comprimidos 200 mg, 400 mg, 600 mg e 800 mg'], es: ['Comprimidos 200 mg, 400 mg, 600 mg y 800 mg'] },
      mechanism: {
        pt: 'É a "Terceira Geração" da Carbamazepina. A Carbamazepina original era tóxica. A Oxcarbazepina melhorou, mas precisava ser tomada de 12/12h e baixava muito o sódio. A Eslicarbazepina é um pró-fármaco que o fígado quebra APENAS no componente mais purificado possível. Resultado: Ele entra e tranca os canais de sódio do cérebro com uma vida média tão longa que o paciente SÓ PRECISA TOMAR 1 VEZ AO DIA, facilitando a adesão.',
        es: 'La "Tercera Generación" de la Carbamazepina. La Eslicarbazepina es un profármaco que el hígado rompe SOLO en el componente más purificado. Resultado: Entra y bloquea los canales de sodio con una vida media tan larga que el paciente SOLO NECESITA TOMAR 1 VEZ AL DÍA.'
      },
      dose: {
        adult: {
          pt: 'Início com 400 mg UMA VEZ ao dia. Após 1 a 2 semanas, subir para 800 mg/dia (dose de manutenção mais comum). Pode chegar a 1.200 mg/dia.',
          es: 'Inicio con 400 mg UNA VEZ al día. Tras 1-2 semanas, subir a 800 mg/día. Puede llegar a 1.200 mg/día.'
        },
        pediatric: {
          pt: 'Uso a partir de 4 anos com titulação rigorosa por peso (ex: 10 a 30 mg/kg/dia).',
          es: 'Uso a partir de 4 años con titulación rigurosa por peso.'
        }
      },
      administration: { pt: ['Uso oral diário (dose única). Não necessita fracionamento.'], es: ['Uso oral diario (dosis única). No necesita fraccionamiento.'] },
      renalAdjustment: { required: true, message: { pt: 'Em ClCr < 50 mL/min, a dose DEVE SER REDUZIDA PELA METADE (Metabólitos acumulam pesadamente).', es: 'En ClCr < 50 mL/min, la dosis DEBE REDUCIRSE A LA MITAD.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Disfunção hepática grave não possui dados para liberação segura.', es: 'Disfunción hepática grave no posee datos para liberación segura.' } },
      commonAdverseEffects: { pt: ['Tontura intensa e sonolência', 'Diplopia (Visão dupla transitória no pico da dose)', 'Náuseas e dor de cabeça'], es: ['Mareo intenso y somnolencia', 'Diplopía (Visión doble transitoria)', 'Náuseas y dolor de cabeza'] },
      dangerousAdverseEffects: { pt: ['HIPONATREMIA GRAVE (O sódio do sangue despenca abaixo de 125 mEq/L, causando coma)', 'DRESS e Síndrome de Stevens-Johnson', 'Prolongamento do Intervalo PR (Risco de Bloqueio AV)'], es: ['HIPONATREMIA GRAVE (El sodio cae, causando coma)', 'DRESS y Síndrome de Stevens-Johnson', 'Prolongación del Intervalo PR'] },
      contraindications: {
        absolute: { pt: ['Bloqueio Atrioventricular (AV) de 2º ou 3º grau prévio', 'Alergia prévia à Carbamazepina ou Oxcarbazepina (Reação cruzada quase certa)'], es: ['Bloqueo AV de 2º o 3º grado previo', 'Alergia previa a Carbamazepina (Reacción cruzada casi segura)'] },
        relative: { pt: ['Pacientes em uso crônico de diuréticos tiazídicos (Risco brutal de Hiponatremia)'], es: ['Pacientes en uso crónico de diuréticos (Riesgo brutal de Hiponatremia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ROUBO DO SÓDIO NO IDOSO: Assim como suas irmãs, a Eslicarbazepina faz o paciente perder Sódio pela urina. Se você prescreve isso para uma avó de 70 anos que também toma Hidroclorotiazida para pressão, em duas semanas ela chegará no PS convulsionando de novo, mas não por epilepsia, e sim porque o sódio do sangue dela caiu para 118 mEq/L (Hiponatremia severa).', es: 'EL ROBO DEL SODIO EN EL ANCIANO: Si la prescribe para una abuela que también toma Hidroclorotiazida, en dos semanas llegará al hospital convulsionando por Hiponatremia severa (Sodio en 118).' }
      }
    },

    /* ── FOSFENITOÍNA ───────────────────────────────────────────────────── */
    "fosfenitoina": {
      name: { pt: 'Fosfenitoína (Sódica)', es: 'Fosfenitoína (Sódica)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticonvulsivante de Resgate (Pró-fármaco da Fenitoína)', es: 'Anticonvulsivante de Rescate (Profármaco de la Fenitoína)' },
      indications: {
        pt: ['Estado de Mal Epiléptico (Status Epilepticus)', 'Prevenção e tratamento de convulsões pós-neurocirurgia (Quando a via oral é impossível)'],
        es: ['Estado de Mal Epiléptico (Status Epilepticus)', 'Prevención y tratamiento de convulsiones posneurocirugía']
      },
      commercialNames: { br: ['Cerebyx (Importado)', 'Dantalin'], ar: ['Fosfenitoina'] },
      presentation: { pt: ['Ampolas IV/IM contendo 50 mg de Equivalentes de Fenitoína (PE) por mL'], es: ['Ampollas IV/IM con 50 mg de Equivalentes de Fenitoína (PE) por mL'] },
      mechanism: {
        pt: 'A correção de um desastre químico. A Fenitoína pura (Hidantal) em ampola é dissolvida em Propilenoglicol, o que a torna caústica e exige injeção lenta (senão para o coração e necrosa o braço). A Fosfenitoína foi inventada como um pró-fármaco 100% SOLÚVEL EM ÁGUA (Não tem propilenoglicol). No sangue humano, enzimas (fosfatases) quebram ela e liberam a fenitoína em 15 minutos. Resultado: você pode injetá-la MUITO MAIS RÁPIDO na emergência sem causar parada cardíaca ou gangrena roxa no membro.',
        es: 'La corrección de un desastre químico. La Fenitoína pura exige inyección lenta para no necrosar el brazo. La Fosfenitoína es un profármaco 100% SOLUBLE EN AGUA. En la sangre, se rompe y libera fenitoína. Puede inyectarse MUCHO MÁS RÁPIDO sin parada cardíaca.'
      },
      dose: {
        adult: {
          pt: 'Status Epilepticus (Dose de Ataque): 15 a 20 mg PE/kg Intravenoso (Taxa de infusão pode ser até 150 mg PE/minuto — TRÊS VEZES MAIS RÁPIDO que o Hidantal).',
          es: 'Status Epilepticus (Ataque): 15 a 20 mg PE/kg Intravenoso (Tasa de infusión hasta 150 mg PE/minuto).'
        },
        pediatric: {
          pt: 'Ataque: 15 a 20 mg PE/kg IV (Velocidade máx 2 a 3 mg PE/kg/min).',
          es: 'Ataque: 15 a 20 mg PE/kg IV (Velocidad máx 2 a 3 mg PE/kg/min).'
        }
      },
      administration: { pt: ['SEMPRE prescrita e dosada em "mg PE" (Equivalentes de Fenitoína). DIFERENCIAL BRUTAL: Por ser hidrossolúvel, a Fosfenitoína PODE ser feita Intramuscular (IM) nos glúteos de um paciente se a veia não for achada.'], es: ['SIEMPRE prescrita en "mg PE". DIFERENCIAL: Por ser hidrosoluble, la Fosfenitoína PUEDE hacerse Intramuscular (IM) si no se halla la vena.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com doença renal em estágio final não desdobram a fosfenitoína perfeitamente. Alteração de fração livre ocorre.', es: 'Pacientes con enfermedad renal final no desdoblan bien la fosfenitoína.' } },
      hepaticAdjustment: { required: true, message: { pt: 'A fenitoína liberada é de metabolismo hepático saturável. Exige ajuste em falência severa.', es: 'La fenitoína liberada es de metabolismo hepático saturable. Exige ajuste.' } },
      commonAdverseEffects: { pt: ['PRURIDO GENITAL E PÉLVICO (Coceira profunda e formigamento na virilha durante a infusão venosa rápida — exclusividade do fosfato da droga)', 'Nistagmo e Tontura'], es: ['PRURITO GENITAL Y PÉLVICO (Picazón profunda y hormigueo en la ingle durante la infusión IV rápida)', 'Nistagmo y Mareo'] },
      dangerousAdverseEffects: { pt: ['Hipotensão e Arritmia (Ainda existe, mas é muito menor que o Hidantal tradicional)', 'Síndrome da Luva Púrpura (Purple Glove Syndrome — Ocorre rarissimamente)'], es: ['Hipotensión y Arritmia (Menor que Fenitoína tradicional)', 'Síndrome del Guante Púrpura (Raro pero posible)'] },
      contraindications: {
        absolute: { pt: ['Bradicardia sinusal, Bloqueio AV de 2º ou 3º Grau', 'Síndrome de Adams-Stokes'], es: ['Bradicardia sinusal, Bloqueo AV de 2º o 3º Grado', 'Síndrome de Adams-Stokes'] },
        relative: { pt: ['Porfiria'], es: ['Porfiria'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A COCEIRA DA MORTE FINGIDA: Durante o ataque de Fosfenitoína IV na UTI, pacientes acordados vão desesperadamente coçar a virilha, as costas e a região genital, relatando calor intenso. Muitos médicos acham que é uma anafilaxia brutal e pausam a droga. Não é! É apenas uma liberação fosfatada transitória. Pode continuar a infusão.', es: 'LA PICAZÓN ATERRADORA: Pacientes despiertos se rascarán desesperadamente la ingle y zona genital, relatando calor. Muchos creen que es anafilaxia y pausan la droga. ¡No lo es! Es solo una liberación fosfatada transitoria. Puede continuar.' }
      }
    },

    /* ── TOLCAPONA ──────────────────────────────────────────────────────── */
    "tolcapona": {
      name: { pt: 'Tolcapona', es: 'Tolcapona' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor da COMT (Catecol-O-metiltransferase)', es: 'Inhibidor de la COMT (Catecol-O-metiltransferasa)' },
      indications: {
        pt: ['Doença de Parkinson avançada e idiopática com flutuação motora severa (Fenômeno "Wearing-Off" ou Fim de Dose) SEMPRE como terapia adjunta à Levodopa.'],
        es: ['Enfermedad de Parkinson avanzada e idiopática con fluctuación motora severa ("Wearing-Off") SIEMPRE como terapia adjunta a la Levodopa.']
      },
      commercialNames: { br: ['Tasmar (Uso estritamente restrito)'], ar: ['Tasmar'] },
      presentation: { pt: ['Comprimidos 100 mg e 200 mg'], es: ['Comprimidos 100 mg y 200 mg'] },
      mechanism: {
        pt: 'A "Guarda-Costas Central e Periférica". A Levodopa é o remédio principal do Parkinson, mas a enzima COMT do corpo destrói a Levodopa antes que ela alcance o cérebro, e destrói a dopamina no cérebro. A Tolcapona é a droga mais potente: cruza a barreira do cérebro e inibe a COMT DENTRO E FORA da cabeça. O paciente que ficava paralisado (Off) volta a se mexer e ter controle muscular fluido por muitas horas.',
        es: 'El "Guardaespaldas Central y Periférico". La enzima COMT destruye la Levodopa antes de alcanzar el cerebro. La Tolcapona cruza la barrera e inhibe la COMT DENTRO Y FUERA. El paciente paralizado (Off) vuelve a moverse por horas.'
      },
      dose: {
        adult: {
          pt: '100 mg via oral, 3 vezes ao dia (geralmente acompanhando as doses de levodopa/carbidopa). Máximo de 200 mg 3x/dia.',
          es: '100 mg vía oral, 3 veces al día. Máximo de 200 mg 3x/día.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['A Levodopa deve obrigatoriamente ter a sua dose reduzida em até 30% quando a Tolcapona for iniciada, para evitar sobrecarga cerebral de dopamina (Discinesias incontroláveis).'], es: ['La Levodopa debe obligatoriamente reducir su dosis hasta un 30% al iniciar Tolcapona, para evitar sobrecarga cerebral.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste em disfunção renal leve/moderada.', es: 'Sin ajuste en disfunción renal leve/moderada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO formalmente na insuficiência hepática, seja leve, moderada ou grave.', es: 'CONTRAINDICADO formalmente en insuficiencia hepática.' } },
      commonAdverseEffects: { pt: ['Diarreia explosiva severa (Pode ocorrer semanas após o início)', 'Urina alaranjada forte', 'Discinesias intensas (Movimentos corporais anormais de contorção)'], es: ['Diarrea explosiva severa (Puede ocurrir semanas tras el inicio)', 'Orina naranja fuerte', 'Discinesias intensas (Movimientos de contorsión)'] },
      dangerousAdverseEffects: { pt: ['FALÊNCIA HEPÁTICA FULMINANTE LETAL (Pode matar o paciente em dias)', 'Síndrome Neuroléptica Maligna (Se descontinuado bruscamente)'], es: ['FALLA HEPÁTICA FULMINANTE LETAL (Puede matar al paciente en días)', 'Síndrome Neuroléptico Maligno (Si se suspende bruscamente)'] },
      contraindications: {
        absolute: { pt: ['Histórico prévio de transaminases alteradas', 'Uso concomitante com inibidores da MAO não-seletivos'], es: ['Historial previo de transaminasas alteradas', 'Uso concomitante con inhibidores de la MAO no selectivos'] },
        relative: { pt: ['Surtos psicóticos ativos ou esquizofrenia (O aumento da dopamina causa alucinações terríveis)'], es: ['Brotes psicóticos activos (El aumento de dopamina causa alucinaciones)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A ÚLTIMA CARTADA DO PARKINSON: Devido a relatos de morte por destruição total do fígado, a Tolcapona tem CAIXA PRETA do FDA. Ela SÓ PODE SER PRESCRITA se o paciente for refratário a todos os outros remédios. O médico é obrigado a coletar exames do fígado (TGO/TGP) A CADA 2 SEMANAS no primeiro ano. Se não fizer isso, comete má prática.', es: 'LA ÚLTIMA CARTA DEL PARKINSON: Tiene CAJA NEGRA. SOLO PUEDE PRESCRIBIRSE si es refractario a todo lo demás. Obliga a exámenes de hígado CADA 2 SEMANAS en el primer año.' }
      }
    }

  }); /* fim Object.assign BUILD 411 append */
})();

/* ═══════════════════════════════════════════════════════════════
   BUILD 412 APPEND — Anticolinérgicos Parkinson + Pimavanserina
   Safinamida | Opicapona | Triexifenidil | Benztropina | Pimavanserina
═══════════════════════════════════════════════════════════════ */
(function(){
  if (!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB))
    window.NEUROLOGIA_DRUGS_DB = {};

  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── SAFINAMIDA ─────────────────────────────────────────────────────── */
    "safinamida": {
      name: { pt: 'Safinamida (Metanosulfonato de)', es: 'Safinamida (Metanosulfonato de)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor Reversível da MAO-B / Bloqueador de Canais de Sódio', es: 'Inhibidor Reversible de la MAO-B / Bloqueador de Canales de Sodio' },
      indications: {
        pt: ['Tratamento da Doença de Parkinson idiopática em pacientes com flutuações motoras (fases "Off") em associação com Levodopa/Carbidopa'],
        es: ['Tratamiento de la Enfermedad de Parkinson idiopática en pacientes con fluctuaciones motoras (fases "Off") en asociación con Levodopa']
      },
      commercialNames: { br: ['Xadago'], ar: ['Xadago'] },
      presentation: { pt: ['Comprimidos revestidos 50 mg e 100 mg'], es: ['Comprimidos recubiertos 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Mecanismo duplo e brilhante. De forma dopaminérgica, ela inibe altamente e de forma REVERSÍVEL a enzima MAO-B, bloqueando a destruição da dopamina no cérebro. De forma não-dopaminérgica, bloqueia os canais de Sódio dependentes de voltagem e modula a liberação excessiva de Glutamato. Isso protege os neurônios da toxicidade e ajuda a suavizar as flutuações motoras sem causar as crises hipertensivas dos IMAOs antigos.',
        es: 'Mecanismo doble y brillante. De forma dopaminérgica, inhibe altamente y de forma REVERSIBLE la enzima MAO-B, bloqueando la destrucción de dopamina. De forma no dopaminérgica, bloquea canales de Sodio y modula la liberación excesiva de Glutamato. Esto protege las neuronas de la toxicidad y suaviza las fluctuaciones motoras.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 50 mg via oral UMA VEZ ao dia (de manhã). Após duas semanas, com base na resposta, a dose pode ser aumentada para 100 mg/dia.',
          es: 'Iniciar con 50 mg vía oral UNA VEZ al día (por la mañana). Tras dos semanas, según la respuesta, la dosis puede aumentarse a 100 mg/día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Uso oral diário matinal, obrigatoriamente deglutido inteiro com água. Não exige restrição dietética drástica de tiramina nas doses recomendadas.'], es: ['Uso oral diario matutino, obligatoriamente tragado entero con agua. No exige restricción dietética drástica de tiramina a dosis normales.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico na insuficiência renal crônica.', es: 'Sin necesidad de ajuste clínico en la insuficiencia renal crónica.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada (Child-Pugh B), a dose não deve ultrapassar 50 mg/dia. CONTRAINDICADA na insuficiência hepática grave.', es: 'En insuficiencia hepática moderada (Child-Pugh B), la dosis no debe superar 50 mg/día. CONTRAINDICADA en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Discinesias (movimentos involuntários bruscos exacerbados pela Levodopa)', 'Insônia e ansiedade', 'Náuseas'], es: ['Discinesias (movimientos involuntarios bruscos exacerbados por la Levodopa)', 'Insomnio y ansiedad', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Síndrome Serotoninérgica fatal (se misturada com antidepressivos errados)', 'Agravamento de comportamentos compulsivos (jogo, compras, hipersexualidade)'], es: ['Síndrome Serotoninérgico fatal (si se mezcla con antidepresivos erróneos)', 'Agravamiento de comportamientos compulsivos'] },
      contraindications: {
        absolute: { pt: ['Uso associado de outros IMAOs (Selegilina, Rasagilina) ou Linezolida', 'Insuficiência hepática grave', 'Histórico de degeneração da retina'], es: ['Uso asociado de otros IMAO (Selegilina, Rasagilina) o Linezolida', 'Insuficiencia hepática grave', 'Historial de degeneración de la retina'] },
        relative: { pt: ['Uso concomitante com inibidores de recaptação de serotonina (ISRS/Dual)'], es: ['Uso concomitante con inhibidores de la recaptación de serotonina'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CONTROLE DO IMPULSO DOPAMINÉRGICO: Avise a família de que o acúmulo de dopamina gerado pela Safinamida pode ligar o "modo vício" no cérebro do idoso. Ele pode começar a gastar fortunas no jogo, ter desejos sexuais bizarros e inapropriados ou ficar limpando a casa obsessivamente de madrugada.', es: 'EL CONTROL DEL IMPULSO: Avise a la familia que el acúmulo de dopamina por Safinamida puede encender el "modo vicio" en el anciano. Puede empezar a gastar fortunas en juegos, tener deseos sexuales inapropiados o limpiar obsesivamente de madrugada.' }
      }
    },

    /* ── OPICAPONA ──────────────────────────────────────────────────────── */
    "opicapona": {
      name: { pt: 'Opicapona', es: 'Opicapona' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor Periférico Altamente Seletivo da COMT', es: 'Inhibidor Periférico Altamente Selectivo de la COMT' },
      indications: {
        pt: ['Doença de Parkinson avançada com flutuações motoras de fim de dose ("Wearing-Off"), como terapia adjuvante à Levodopa'],
        es: ['Enfermedad de Parkinson avanzada con fluctuaciones motoras de fin de dosis ("Wearing-Off"), como terapia adyuvante a la Levodopa']
      },
      commercialNames: { br: ['Ongentys'], ar: ['Ongentys'] },
      presentation: { pt: ['Cápsulas duras 50 mg'], es: ['Cápsulas duras 50 mg'] },
      mechanism: {
        pt: 'A Terceira Geração de inibidores da COMT. A Opicapona tem uma afinidade de ligação absurdamente longa com a enzima COMT na periferia do corpo (sangue), durando mais de 24 horas. Ela blinda a Levodopa no sangue de forma avassaladora, fazendo com que muito mais remédio entre no cérebro. A glória desta droga é que ela NÃO CRUZA a barreira hematoencefálica (diferente da antiga Tolcapona), anulando totalmente o risco de destruição fulminante do fígado.',
        es: 'La tercera generación de inhibidores de la COMT. La Opicapona tiene una afinidad de unión larguísima con la enzima COMT periférica, durando más de 24 horas. Blinda la Levodopa en sangre de forma avasalladora. La gloria de esta droga es que NO CRUZA al cerebro, anulando el riesgo de destrucción del hígado.'
      },
      dose: {
        adult: {
          pt: '50 mg via oral UMA VEZ ao dia, obrigatoriamente administrada à noite, antes de dormir.',
          es: '50 mg vía oral UNA VEZ al día, obligatoriamente administrada a la noche, antes de dormir.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['REGRA RÍGIDA DE TOMADA: Deve ser ingerida de estômago vazio, pelo menos 1 hora ANTES ou 1 hora DEPOIS de qualquer dose de Levodopa do dia. A comida e a própria levodopa esmagam a sua absorção intestinal.'], es: ['REGLA RÍGIDA DE TOMA: Debe ingerirse con estómago vacío, al menos 1 hora ANTES o 1 hora DESPUÉS de cualquier dosis de Levodopa. La comida y la propia levodopa aplastan su absorción intestinal.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste direto.', es: 'Sin necesidad de ajuste directo.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Uso não recomendado em insuficiência hepática grave devido à ausência de dados clínicos de clearance.', es: 'Uso no recomendado en insuficiencia hepática grave debido a la ausencia de datos.' } },
      commonAdverseEffects: { pt: ['Discinesias violentas (exige reduzir a dose da Levodopa diária)', 'Constipação intestinal', 'Tontura e boca seca'], es: ['Discinesias violentas (exige reducir la dosis de Levodopa)', 'Constipación intestinal', 'Mareo y boca seca'] },
      dangerousAdverseEffects: { pt: ['Alucinações psicóticas agudas', 'Hipotensão ortostática severa (risco de queda e fratura de fêmur)'], es: ['Alucinaciones psicóticas agudas', 'Hipotensión postural severa (riesgo de caída y fractura de fémur)'] },
      contraindications: {
        absolute: { pt: ['Histórico de Feocromocitoma ou Paraganglioma (risco de pico de noradrenalina fatal)', 'Histórico de Síndrome Neuroléptica Maligna'], es: ['Historial de Feocromocitoma o Paraganglioma (riesgo de pico de noradrenalina fatal)', 'Historial de Síndrome Neuroléptico Maligno'] },
        relative: { pt: ['Uso conjunto com antidepressivos IMAO não-seletivos'], es: ['Uso conjunto con antidepresivos IMAO no selectivos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A COMODIDADE VENCEDORA: A Opicapona destronou a antiga Entacapona e Tolcapona porque é tomada apenas 1 vez ao dia antes de deitar, limpando o paciente parkinsoniano da obrigação de tomar pílulas associadas a cada 4 horas durante o dia.', es: 'LA COMODIDAD GANADORA: La Opicapona destronó a la antigua Entacapona porque se toma solo 1 vez al día antes de acostarse, limpiando al parkinsoniano de la obligación de tomar píldoras asociadas cada 4 horas.' }
      }
    },

    /* ── TRIEXIFENIDIL ──────────────────────────────────────────────────── */
    "triexifenidil": {
      name: { pt: 'Triexifenidil (Cloridrato de)', es: 'Trihexifenidilo (Clorhidrato de)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticolinérgico Central (Antagonista Muscarínico)', es: 'Anticolinérgico Central (Antagonista Muscarínico)' },
      indications: {
        pt: ['Controle do Tremor de repouso severo na Doença de Parkinson (especialmente em pacientes jovens)', 'Tratamento de Sintomas Extraparamidais e Distonias Agudas causadas por Antipsicóticos (Haldol) ou Antieméticos (Plasil)'],
        es: ['Control del Tremor de reposo severo en la Enfermedad de Parkinson (en jóvenes)', 'Tratamiento de Síntomas Extrapiramidales y Distonías Agudas causadas por Antipsicóticos o Antieméticos']
      },
      commercialNames: { br: ['Artane'], ar: ['Artane'] },
      presentation: { pt: ['Comprimidos 2 mg e 5 mg'], es: ['Comprimidos 2 mg y 5 mg'] },
      mechanism: {
        pt: 'O cérebro parkinsoniano perde dopamina. Quando a dopamina cai, a ACETILCOLINA sobe de forma descontrolada nos gânglios da base, provocando aquele tremor característico de "contar moedas". O Triexifenidil entra no cérebro e bloqueia diretamente os receptores muscarínicos, derrubando a acetilcolina e parando o tremor por força anticolinérgica direta.',
        es: 'El cerebro parkinsoniano pierde dopamina. Cuando la dopamina cae, la ACETILCOLINA sube de forma descontrolada, provocando el temblor característico de "contar monedas". El Trihexifenidilo bloquea los receptores muscarínicos cerebrales, apagando el temblor.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 1 mg via oral no dia 1. Subir para 2 mg divididos em doses diárias. Dose de manutenção: 5 mg a 15 mg/dia, divididos em 3 tomadas junto às refeições.',
          es: 'Iniciar con 1 mg vía oral el día 1. Subir a 2 mg divididos. Dosis de mantenimiento: 5 mg a 15 mg/día, divididos en 3 tomas junto a las comidas.'
        },
        pediatric: { pt: 'Uso restrito off-label para distonias graves induzidas por paralisia cerebral.', es: 'Uso restringido off-label para distonías graves inducidas por parálisis cerebral.' }
      },
      administration: { pt: ['Deve ser tomado junto com as refeições para evitar irritação gástrica. Causa boca seca imediata, o que exige pastilhas ou gomas de mascar para aliviar.'], es: ['Debe tomarse junto con las comidas para evitar irritación gástrica. Causa boca seca inmediata, lo que exige caramelos o gomas de mascar para aliviar.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar sintomas.', es: 'Sin necesidad de ajuste estricto, monitorizar síntomas.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado no fígado, precaução em cirróticos.', es: 'Metabolizado en hígado, precaución en cirróticos.' } },
      commonAdverseEffects: { pt: ['Boca seca extrema (xerostomia)', 'Visão borrada (cicloplegia / paralisia da pupila)', 'Constipação e Taquicardia'], es: ['Boca seca extrema (xerostomía)', 'Visión borrosa (cicloplejía / parálisis de la pupila)', 'Constipación y Taquicardia'] },
      dangerousAdverseEffects: { pt: ['DELÍRIO ANTICOLINÉRGICO EM IDOSOS (Alucinações terroríficas, confusão mental profunda e agitação psicomotora)', 'Glaucoma agudo de ângulo fechado precipitado', 'Retenção urinária aguda com globo vesical'], es: ['DELIRIUM ANTICOLINÉRGICO EN ANCIANOS (Alucinaciones terroríficas, confusión y agitación)', 'Glaucoma agudo de ángulo cerrado', 'Retención urinaria aguda con globo vesical'] },
      contraindications: {
        absolute: { pt: ['Glaucoma de ângulo fechado', 'Hiperplasia Prostática Benigna obstrutiva', 'Idosos dementes (Lista de Beers - Droga altamente inapropriada)'], es: ['Glaucoma de ángulo cerrado', 'Hiperplasia Prostática Benigna obstructiva', 'Ancianos dementes (Criterios de Beers - Altamente inapropiada)'] },
        relative: { pt: ['Pacientes com taquiarritmias ou coronariopatias graves'], es: ['Pacientes con taquiarritmias o coronariopatías graves'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A DROGA DA DEMÊNCIA AGUDA: Nunca prescreva Triexifenidil para um idoso de 75 anos para tratar tremor. Ele vai parar de tremer, mas vai ter um surto psicótico anticolinérgico na mesma noite, deixando de reconhecer a família e gritando de pânico. É uma droga maravilhosa apenas para parkinsonianos JOVENS.', es: 'LA DROGA DE LA DEMENCIA AGUDA: Nunca prescriba Trihexifenidilo a un anciano de 75 años. Dejará de temblar, pero tendrá un brote psicótico anticolinérgico esa misma noche, desconociendo a la familia. Es una droga maravillosa solo para parkinsonianos JÓVENES.' }
      }
    },

    /* ── BENZTROPINA ────────────────────────────────────────────────────── */
    "benztropina": {
      name: { pt: 'Benztropina (Mesilato de)', es: 'Benzatropina (Mesilato de)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Anticolinérgico Central e Anti-histamínico', es: 'Anticolinérgico Central y Antihistamínico' },
      indications: {
        pt: ['Tratamento de emergência de Reações Distônicas Agudas induzidas por drogas (crise oculógira, torcicolo traumático por antipsicóticos)', 'Parkinsonismo secundário a neurolépticos'],
        es: ['Tratamiento de emergencia de Reacciones Distónicas Agudas inducidas por drogas (crisis oculógira por antipsicóticos)', 'Parkinsonismo secundario a neurolépticos']
      },
      commercialNames: { br: ['Cogentin (Importado/Uso hospitalar)'], ar: ['Cogentin'] },
      presentation: { pt: ['Ampolas IV/IM 1 mg/mL', 'Comprimidos 0,5 mg, 1 mg e 2 mg'], es: ['Ampollas IV/IM 1 mg/mL', 'Comprimidos 0,5 mg, 1 mg y 2 mg'] },
      mechanism: {
        pt: 'Uma fusão química molecular de Atropina com Difenidramina. A Benztropina possui um bloqueio muscarínico central extremamente potente combinado com um bloqueio histamínico H1. Ao ser injetada na veia de um paciente travado por efeito colateral de antipsicóticos, ela desliga instantaneamente o espasmo colinérgico do tronco cerebral, relaxando o corpo em minutos.',
        es: 'Una fusión química molecular de Atropina con Difenhidramina. Posee un bloqueo muscarínico central extremadamente potente combinado con un bloqueo histamínico H1. Al inyectarse en vena, apaga instantáneamente el espasmo colinérgico del tronco cerebral, relajando el cuerpo en minutos.'
      },
      dose: {
        adult: {
          pt: 'Crise Distônica Oral/Emergência: 1 a 2 mg via Intramuscular (IM) ou Intravenosa (IV) imediata. Pode repetir se o espasmo persistir. Manutenção oral: 1 a 4 mg/dia divididos.',
          es: 'Crisis Distónica de Emergencia: 1 a 2 mg vía Intramuscular (IM) o Intravenosa (IV) inmediata. Puede repetir si el espasmo persiste. Mantenimiento oral: 1 a 4 mg/día.'
        },
        pediatric: { pt: 'Não recomendado em menores de 3 anos; maiores de 3 anos sob rigoroso cálculo e indicação neurológica.', es: 'No recomendado en menores de 3 años.' }
      },
      administration: { pt: ['Injeção IV deve ser lenta. O efeito IM é altamente confiável e mais seguro contra picos de taquicardia em pronto-socorro.'], es: ['Inyección IV debe ser lenta. El efecto IM es altamente confiable y más seguro contra picos de taquicardia en urgencias.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estrito.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em cirróticos.', es: 'Usar con cautela en cirróticos.' } },
      commonAdverseEffects: { pt: ['Retenção urinária leve', 'Boca seca e visão borrada', 'Sedação leve (pelo componente histamínico)'], es: ['Retención urinaria leve', 'Boca seca y visión borrosa', 'Sedación leve (por el componente histamínico)'] },
      dangerousAdverseEffects: { pt: ['Toxidrome Anticolinérgica completa com hipertermia severa', 'Íleo paralítico (parada do intestino com obstrução fecal)'], es: ['Toxídrome Anticolinérgica completa con hipertermia severa', 'Íleo paralítico (parada del intestino con obstrucción fecal)'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 3 anos', 'Glaucoma de ângulo fechado', 'Megacólon tóxico'], es: ['Niños menores de 3 años', 'Glaucoma de ángulo cerrado', 'Megacolon tóxico'] },
        relative: { pt: ['Idosos frágeis (Risco extremo de delírio e retenção oculta de urina)'], es: ['Ancianos frágiles (Riesgo extremo de delirium y retención oculta de orina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O BALANÇO DO ANTIPSICÓTICO: A Benztropina limpa a distonia do Haldol, mas o uso contínuo oral em pacientes psiquiátricos crônicos pode mascarar e, pior, AGRAVAR a temida Discinesia Tardia (movimentos involuntários de lamber e mastigar da boca) que é irreversível. Monitore.', es: 'EL BALANCE DEL ANTIPSICÓTICO: La Benzatropina limpia la distonía por Haldol, pero el uso continuo oral en pacientes psiquiátricos crónicos puede enmascarar y AGRAVAR la temida Discinesia Tardía, que es irreversible. Monitoree.' }
      }
    },

    /* ── PIMAVANSERINA ──────────────────────────────────────────────────── */
    "pimavanserina": {
      name: { pt: 'Pimavanserina', es: 'Pimavanserina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Antipsicótico Atípico (Agonista Inverso do Receptor 5-HT2A)', es: 'Antipsicótico Atípico (Agonista Inverso del Receptor 5-HT2A)' },
      indications: {
        pt: ['Tratamento de Alucinações e Delírios associados à Psicose da Doença de Parkinson (O único fármaco aprovado que trata a loucura sem estragar o movimento)'],
        es: ['Tratamiento de Alucinaciones y Delirios asociados a la Psicosis de la Enfermedad de Parkinson (El único fármaco que trata la locura sin dañar el movimiento)']
      },
      commercialNames: { br: ['Nuplazid (Importação especializada)'], ar: ['Nuplazid'] },
      presentation: { pt: ['Comprimidos 34 mg (Equivalente a 40 mg de tartarato)'], es: ['Comprimidos 34 mg'] },
      mechanism: {
        pt: 'A Joia da Coroa da Neuropsiquiatria. Todos os antipsicóticos do mundo (Haldol, Risperidona, Olanzapina) curam alucinações bloqueando os receptores D2 de Dopamina. Se você der isso para um parkinsoniano, ele para de ver fantasmas, mas trava os músculos completamente e fica estátua. A Pimavanserina tem ZERO afinidade por receptores D2. Ela age como agonista inverso EXCLUSIVAMENTE nos receptores de Serotonina 5-HT2A. Ela desliga as alucinações de forma limpa, mantendo a dopamina motora intacta.',
        es: 'La Joya de la Neuropsiquiatría. Todos los antipsicóticos curan alucinaciones bloqueando receptores D2 de Dopamina. Si das eso a un parkinsoniano, deja de ver fantasmas, pero se congela por completo. Pimavanserina tiene CERO afinidad por D2. Actúa EXCLUSIVAMENTE en receptores de Serotonina 5-HT2A. Apaga las alucinaciones manteniendo la dopamina motora intacta.'
      },
      dose: {
        adult: {
          pt: '34 mg via oral, UMA VEZ ao dia, continuamente.',
          es: '34 mg vía oral, UNA VEZ al día, continuamente.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. O efeito terapêutico real pode demorar de 4 a 6 semanas de tomadas diárias para se consolidar no cérebro.'], es: ['Puede tomarse con o sin alimentos. El efecto terapéutico real puede tardar de 4 a 6 semanas de tomas diarias para consolidarse en el cerebro.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na insuficiência renal leve a moderada.', es: 'Sin necesidad de ajuste en insuficiencia renal leve a moderada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Uso não recomendado em insuficiência hepática grave devido ao metabolismo extensivo por CYP3A4.', es: 'Uso no recomendado en insuficiencia hepática grave debido al metabolismo extensivo por CYP3A4.' } },
      commonAdverseEffects: { pt: ['Edema periférico (inchaço nas pernas)', 'Confusão mental transitória inicial', 'Constipação e náuseas'], es: ['Edema periférico (hinchazón en las piernas)', 'Confusión mental transitoria inicial', 'Constipación y náuseas'] },
      dangerousAdverseEffects: { pt: ['PROLONGAMENTO DO INTERVALO QT (Risco de arritmia ventricular fatal Torsades de Pointes)', 'Aumento de mortalidade em idosos com psicose associada à demência (Alerta Black Box)'], es: ['PROLONGACIÓN DEL INTERVALO QT (Riesgo de arritmia fatal Torsades de Pointes)', 'Aumento de mortalidad en ancianos con psicosis por demencia (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com histórico de QT longo congênito ou arritmias cardíacas ativas', 'Uso conjunto com outras drogas que prolongam o QT (Amiodarona, Haloperidol)'], es: ['Pacientes con historial de QT largo congénito o arritmias activas', 'Uso conjunto con otras drogas que prolongan el QT (Amiodarona)'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Cetoconazol), exige reduzir a dose pela metade'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Ketoconazol), exige reducir la dosis a la mitad'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING DE MORTALIDADE: Embora seja a única droga que salva o parkinsoniano com surto psicótico, ela carrega o terrível alerta de classe de todos os antipsicóticos: aumenta o risco de morte súbita ou AVC em idosos dementes. O uso deve ser pesado com extrema seriedade pela família.', es: 'BLACK BOX WARNING DE MORTALIDAD: Aunque es la única droga que salva al parkinsoniano con psicosis, carga el terrible alerta de clase: aumenta el riesgo de muerte súbita o ACV en ancianos dementes. El uso debe ser sopesado con extrema seriedad.' }
      }
    }

  }); /* fim Object.assign BUILD 412 append */
})();

/* ═══════════════════════════════════════════════════════════════
   BUILD 413 APPEND — ELA (Riluzol/Edaravona) + Inibidores VMAT2 (Huntington)
   Riluzol | Edaravona | Tetrabenazina | Deutetrabenazina | Valbenazina
═══════════════════════════════════════════════════════════════ */
(function(){
  if (!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB))
    window.NEUROLOGIA_DRUGS_DB = {};

  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── RILUZOL ────────────────────────────────────────────────────────── */
    "riluzol": {
      name: { pt: 'Riluzol', es: 'Riluzol' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Neuroprotetor (Inibidor da Liberação de Glutamato)', es: 'Neuroprotector (Inhibidor de la Liberación de Glutamato)' },
      indications: {
        pt: ['Esclerose Lateral Amiotrófica (ELA) - Prolonga a sobrevida e retarda a necessidade de traqueostomia/ventilação mecânica'],
        es: ['Esclerosis Lateral Amiotrófica (ELA) - Prolonga la sobrevida y retrasa la necesidad de traqueotomía/ventilación mecánica']
      },
      commercialNames: { br: ['Rilutek', 'Riluzol'], ar: ['Rilutek'] },
      presentation: { pt: ['Comprimidos revestidos 50 mg'], es: ['Comprimidos recubiertos 50 mg'] },
      mechanism: {
        pt: 'A "Rolha do Glutamato". Na ELA, os neurônios motores que controlam a respiração e os músculos morrem por "excitotoxicidade" (excesso de glutamato os faz disparar até morrerem fritos). O Riluzol bloqueia os canais de sódio voltagem-dependentes e inibe a liberação de glutamato na fenda sináptica. Ele não cura a doença e não recupera os músculos perdidos, mas ganha meses preciosos de vida para o paciente.',
        es: 'El "Tapón del Glutamato". En la ELA, las neuronas motoras mueren por "excitotoxicidad" (el exceso de glutamato las hace disparar hasta morir). El Riluzol bloquea los canales de sodio e inhibe la liberación de glutamato. No cura la enfermedad, pero gana meses preciosos de vida para el paciente.'
      },
      dose: {
        adult: { pt: '50 mg via oral a cada 12 horas (Total de 100 mg/dia).', es: '50 mg vía oral cada 12 horas (Total de 100 mg/día).' },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['REGRA VITAL: Deve ser tomado de ESTÔMAGO VAZIO (1 hora antes ou 2 horas depois das refeições). Refeições com alto teor de gordura reduzem a absorção da droga pela metade, tornando-a inútil.'], es: ['REGLA VITAL: Debe tomarse con ESTÓMAGO VACÍO (1 hora antes o 2 horas después de las comidas). Comidas grasas reducen la absorción a la mitad.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Aumentos de TGP/TGO são muito comuns. Contraindicado em insuficiência hepática grave ou se transaminases > 5x o limite superior.', es: 'Contraindicado en insuficiencia hepática grave o si transaminasas > 5x el límite superior.' } },
      commonAdverseEffects: { pt: ['Astenia e fadiga extremas', 'Náuseas e dor abdominal', 'Aumento de transaminases hepáticas (TGP/ALAT)'], es: ['Astenia y fatiga extremas', 'Náuseas y dolor abdominal', 'Aumento de transaminasas hepáticas (ALT)'] },
      dangerousAdverseEffects: { pt: ['Hepatite medicamentosa fulminante', 'Neutropenia severa (Queda dos glóbulos brancos, risco de infecção fatal)'], es: ['Hepatitis medicamentosa fulminante', 'Neutropenia severa (Caída de glóbulos blancos, riesgo de infección fatal)'] },
      contraindications: {
        absolute: { pt: ['Hepatopatias ativas pré-existentes'], es: ['Hepatopatías activas preexistentes'] },
        relative: { pt: ['Tabagismo pesado ativo (O cigarro "queima" o remédio no fígado)'], es: ['Tabaquismo pesado activo (El cigarro "quema" el remedio en el hígado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O INIMIGO DO CIGARRO: O Riluzol é metabolizado pela enzima hepática CYP1A2. Fumar cigarros é um dos indutores mais potentes desta enzima no mundo. Se o paciente com ELA for fumante ativo, a fumaça acelera o fígado e destrói o Riluzol no sangue tão rápido que a droga falha em proteger o cérebro.', es: 'EL ENEMIGO DEL CIGARRO: Riluzol es metabolizado por la enzima hepática CYP1A2. Fumar induce esta enzima. Si el paciente con ELA es fumador, el hígado destruye el Riluzol tan rápido que la droga falla en proteger el cerebro.' }
      }
    },

    /* ── EDARAVONA ──────────────────────────────────────────────────────── */
    "edaravona": {
      name: { pt: 'Edaravona', es: 'Edaravona' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Antioxidante / Varredor de Radicais Livres', es: 'Antioxidante / Barredor de Radicales Libres' },
      indications: {
        pt: ['Esclerose Lateral Amiotrófica (ELA) - Reduz o declínio funcional físico no dia a dia'],
        es: ['Esclerosis Lateral Amiotrófica (ELA) - Reduce el declive funcional físico en el día a día']
      },
      commercialNames: { br: ['Radicava (Importado)'], ar: ['Radicava'] },
      presentation: { pt: ['Bolsa para infusão IV 30 mg/100 mL', 'Suspensão Oral (Aprovada recentemente no FDA)'], es: ['Bolsa para infusión IV 30 mg/100 mL', 'Suspensión Oral'] },
      mechanism: {
        pt: 'A "Esponja de Toxinas". Na ELA, o estresse oxidativo severo inunda os neurônios motores com radicais livres e peroxinitrito, destruindo-os. A Edaravona é um caçador de radicais livres projetado especificamente para limpar as neurotoxinas oxidativas do cérebro, protegendo as células motoras do "ferrugem" neurológico que as paralisa.',
        es: 'La "Esponja de Toxinas". En la ELA, el estrés oxidativo inunda las neuronas motoras con radicales libres. La Edaravona es un barredor diseñado para limpiar las neurotoxinas del cerebro, protegiendo las células motoras del "óxido" neurológico.'
      },
      dose: {
        adult: {
          pt: 'Regime de Ciclos IV: 60 mg por infusão Intravenosa ao longo de 60 min. Ciclo 1: Administrar por 14 dias diários seguidos de 14 dias de descanso. Ciclos subsequentes: 10 dias de medicação dentro de um período de 14 dias, seguidos de 14 dias de descanso.',
          es: 'Régimen de Ciclos IV: 60 mg por infusión IV por 60 min. Ciclo 1: Administrar 14 días seguidos, luego 14 días de descanso. Ciclos posteriores: 10 días de medicación en un período de 14 días, seguidos de 14 días de descanso.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['As infusões hospitalares ou em clínica exigem acesso venoso confiável. A rotina intermitente pode ser extenuante para pacientes imobilizados.'], es: ['Las infusiones exigen acceso venoso confiable. La rutina intermitente puede ser extenuante para pacientes inmovilizados.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem dados para ajuste.', es: 'Sin datos para ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste inicial necessário.', es: 'Sin ajuste inicial necesario.' } },
      commonAdverseEffects: { pt: ['Distúrbios da marcha (Contusões, hematomas e quedas frequentes)', 'Dor de cabeça e fadiga', 'Dermatite no local da infusão'], es: ['Disturbios de la marcha (Contusiones y caídas frecuentes)', 'Dolor de cabeza y fatiga', 'Dermatitis en el sitio de infusión'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia sistêmica grave', 'Reações asmáticas severas devido aos sulfitos da fórmula'], es: ['Anafilaxia sistémica grave', 'Reacciones asmáticas severas debido a los sulfitos de la fórmula'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos excipientes', 'Alergia severa a BISSULFITO DE SÓDIO'], es: ['Hipersensibilidad grave a los excipientes', 'Alergia severa a BISULFITO DE SODIO'] },
        relative: { pt: ['Pacientes com ELA em estágio terminal (Sem evidência de benefício quando a função respiratória já foi perdida)'], es: ['Pacientes con ELA en etapa terminal (Sin evidencia de beneficio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA ASMA E DO BISSULFITO: A formulação intravenosa da Edaravona contém bissulfito de sódio (um conservante). Se o paciente com ELA for asmático com alergia a sulfitos, a injeção fechará as vias aéreas dele na hora, causando broncoespasmo letal e choque anafilático.', es: 'LA ALERTA DEL ASMA Y EL BISULFITO: La formulación IV contiene bisulfito de sodio. Si el paciente con ELA es asmático con alergia a sulfitos, la inyección cerrará sus vías aéreas al instante, causando broncoespasmo letal.' }
      }
    },

    /* ── TETRABENAZINA ──────────────────────────────────────────────────── */
    "tetrabenazina": {
      name: { pt: 'Tetrabenazina', es: 'Tetrabenazina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor do Transportador Vesicular de Monoaminas Tipo 2 (VMAT2)', es: 'Inhibidor del Transportador Vesicular de Monoaminas Tipo 2 (VMAT2)' },
      indications: {
        pt: ['Doença de Huntington (Controle dos movimentos hipercinéticos coreicos - a "dança" incontrolável)'],
        es: ['Enfermedad de Huntington (Control de los movimientos hipercinéticos coreicos - la "danza" incontrolable)']
      },
      commercialNames: { br: ['Xenazine (Importado)', 'Tetina'], ar: ['Xenazine'] },
      presentation: { pt: ['Comprimidos 12,5 mg e 25 mg'], es: ['Comprimidos 12,5 mg y 25 mg'] },
      mechanism: {
        pt: 'O "Esvaziador de Vesículas". Na Doença de Huntington, há um excesso de atividade da dopamina que faz o corpo do paciente se contorcer sem parar (Coreia). A Tetrabenazina bloqueia o VMAT2, a proteína que "empacota" a dopamina dentro das vesículas nos neurônios. Como a dopamina fica fora da vesícula, a enzima MAO a destrói no citoplasma. O cérebro fica sem dopamina e o paciente para de se contorcer. O lado sombrio: o cérebro sem dopamina/serotonina entra em depressão profunda.',
        es: 'El "Vaciador de Vesículas". En Huntington, el exceso de dopamina hace que el cuerpo se contorsione (Corea). La Tetrabenazina bloquea el VMAT2, que "empaqueta" la dopamina. La enzima MAO destruye la dopamina en el citoplasma. El cerebro se queda sin dopamina y el paciente deja de contorsionarse. El lado oscuro: el cerebro sin dopamina entra en depresión profunda.'
      },
      dose: {
        adult: {
          pt: 'Início Lento: 12,5 mg/dia pela manhã. Aumentar gradualmente até 25 mg de 8/8h ou 12/12h. (Doses > 50 mg/dia exigem genotipagem do fígado).',
          es: 'Inicio Lento: 12,5 mg/día. Aumentar gradualmente hasta 25 mg cada 8 o 12h. (Dosis > 50 mg/día exigen genotipificación del hígado).'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['A droga tem meia-vida muito curta, o que gera picos e quedas (Exige tomadas de 3 a 4 vezes ao dia), piorando o cansaço do paciente.'], es: ['La droga tiene vida media muy corta, generando picos y caídas (Exige tomas 3 a 4 veces al día), empeorando el cansancio.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADA em insuficiência hepática. Metabolismo intensivo.', es: 'CONTRAINDICADA en insuficiencia hepática. Metabolismo intensivo.' } },
      commonAdverseEffects: { pt: ['Depressão profunda e letargia', 'Parkinsonismo iatrogênico (Como a dopamina é sugada, o paciente de Huntington fica "travado" como um paciente de Parkinson)', 'Acatisia (inquietude) e fadiga'], es: ['Depresión profunda y letargo', 'Parkinsonismo iatrogénico (El paciente queda "trabado" como uno de Parkinson)', 'Acatisia (inquietud) y fatiga'] },
      dangerousAdverseEffects: { pt: ['SUICÍDIO (Alerta Máximo de Caixa Preta)', 'Síndrome Neuroléptica Maligna (Rigidez, hipertermia, morte)'], es: ['SUICIDIO (Alerta Máxima de Caja Negra)', 'Síndrome Neuroléptico Maligno (Rigidez, hipertermia, muerte)'] },
      contraindications: {
        absolute: { pt: ['Depressão não tratada ou ativamente suicida (A doença de Huntington já tem risco gigante de suicídio, o remédio triplica isso)', 'Uso com Inibidores da MAO ou Reserpina'], es: ['Depresión no tratada o activamente suicida', 'Uso con Inhibidores de la MAO o Reserpina'] },
        relative: { pt: ['Uso associado com inibidores de CYP2D6 (Fluoxetina, Paroxetina - O fígado para e o remédio intoxica)'], es: ['Uso asociado con inhibidores de CYP2D6'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING DE SUICÍDIO: A Tetrabenazina esvazia a serotonina e dopamina. Isso cria um vazio neuroquímico brutal que joga o paciente em ideação suicida irreversível. Você é OBRIGADO a perguntar ao paciente em todas as consultas se ele tem vontade de se matar ou se machucar.', es: 'BLACK BOX WARNING DE SUICIDIO: Vacía la serotonina y dopamina, creando un vacío neuroquímico que lanza al paciente a la ideación suicida. Está OBLIGADO a preguntar al paciente si tiene deseos de matarse.' }
      }
    },

    /* ── DEUTETRABENAZINA ───────────────────────────────────────────────── */
    "deutetrabenazina": {
      name: { pt: 'Deutetrabenazina', es: 'Deutetrabenazina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor do VMAT2 (Variante Isótopo-Deuterada)', es: 'Inhibidor del VMAT2 (Variante Isótopo-Deuterada)' },
      indications: {
        pt: ['Doença de Huntington (Controle da Coreia)', 'Discinesia Tardia (Movimentos da boca e rosto causados pelo uso de psiquiátricos crônicos)'],
        es: ['Enfermedad de Huntington (Control de la Corea)', 'Discinesia Tardía (Movimientos de boca y rostro causados por psiquiátricos)']
      },
      commercialNames: { br: ['Austedo'], ar: ['Austedo'] },
      presentation: { pt: ['Comprimidos 6 mg, 9 mg e 12 mg'], es: ['Comprimidos 6 mg, 9 mg y 12 mg'] },
      mechanism: {
        pt: 'A "Mágica Nuclear". É EXATAMENTE a mesma molécula da Tetrabenazina, mas os átomos de hidrogênio normais foram trocados por DEUTÉRIO (hidrogênio pesado). Essa troca molecular faz com que o fígado demore mais para quebrar a droga. Com a quebra mais lenta, os níveis no sangue ficam estáveis o dia todo, eliminando os "picos tóxicos" no cérebro. O controle do movimento é mantido e a depressão despenca.',
        es: 'La "Magia Nuclear". Es EXACTAMENTE la misma molécula de Tetrabenazina, pero los átomos de hidrógeno fueron cambiados por DEUTERIO (hidrógeno pesado). El hígado tarda más en romper la droga, dejando niveles estables todo el día, eliminando los "picos tóxicos" en el cerebro. La depresión se desploma.'
      },
      dose: {
        adult: {
          pt: 'Huntington/Discinesia: Iniciar com 6 mg DUAS vezes ao dia. Titular gradualmente semanalmente. Máximo de 48 mg/dia.',
          es: 'Huntington/Discinesia: Iniciar con 6 mg DOS veces al día. Titular gradualmente. Máximo de 48 mg/día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Administrar JUNTO COM ALIMENTOS para atrasar a absorção e garantir o perfil de liberação contínua.'], es: ['Administrar JUNTO CON ALIMENTOS para retrasar la absorción y garantizar la liberación continua.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade estrita.', es: 'Sin necesidad estricta.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado na disfunção hepática.', es: 'Contraindicado en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Sonolência, fadiga, diarreia e boca seca', 'Acatisia (Desespero para mover as pernas)'], es: ['Somnolencia, fatiga, diarrea y boca seca', 'Acatisia (Desespero por mover las piernas)'] },
      dangerousAdverseEffects: { pt: ['Aumento de intervalo QT (Torsades de Pointes)', 'Depressão e Suicídio (O risco existe, mas é visivelmente menor que a tetrabenazina antiga)'], es: ['Aumento del intervalo QT (Torsades de Pointes)', 'Depresión y Suicidio (El riesgo existe, pero es menor que la antigua tetrabenazina)'] },
      contraindications: {
        absolute: { pt: ['Depressão grave, uso com IMAOs, ideação suicida', 'Uso simultâneo com Tetrabenazina pura ou Valbenazina'], es: ['Depresión grave, uso con IMAOs, ideación suicida', 'Uso simultáneo con Tetrabenazina pura o Valbenazina'] },
        relative: { pt: ['Uso associado de Inibidores Fortes do CYP2D6 (Bupropiona, Fluoxetina)'], es: ['Uso asociado de Inhibidores Fuertes de CYP2D6'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A TRANSIÇÃO SEGURA: Embora tenha menos efeitos colaterais, a Deutetrabenazina NÃO curará a depressão se o paciente já a desenvolveu com o remédio antigo. Qualquer transição de drogas deve vir acompanhada de vigilância psiquiátrica armada.', es: 'LA TRANSICIÓN SEGURA: Aunque tiene menos efectos colaterales, NO curará la depresión si el paciente ya la desarrolló con el remedio antiguo. La transición exige vigilancia psiquiátrica armada.' }
      }
    },

    /* ── VALBENAZINA ────────────────────────────────────────────────────── */
    "valbenazina": {
      name: { pt: 'Valbenazina', es: 'Valbenazina' },
      category: 'neurologia',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor Altamente Seletivo do VMAT2', es: 'Inhibidor Altamente Selectivo del VMAT2' },
      indications: {
        pt: ['Tratamento exclusivo da Discinesia Tardia (Movimentos bizarros orofaciais e corporais incontroláveis, complicação clássica de pacientes psiquiátricos usando Haldol/Risperidona por anos)'],
        es: ['Tratamiento exclusivo de la Discinesia Tardía (Movimientos bizarros orofaciales incontrolables causados por el uso crónico de Haldol/Risperidona)']
      },
      commercialNames: { br: ['Ingrezza (Importado)'], ar: ['Ingrezza'] },
      presentation: { pt: ['Cápsulas 40 mg, 60 mg e 80 mg'], es: ['Cápsulas 40 mg, 60 mg y 80 mg'] },
      mechanism: {
        pt: 'O ápice da seletividade. O VMAT tem 2 tipos: VMAT1 (Coração/Periferia) e VMAT2 (Cérebro). A Valbenazina inibe APENAS o VMAT2 do cérebro, sem tocar na periferia, minimizando quedas de pressão severas. Ela suprime o excesso de dopamina focado nos gânglios da base que faz o esquizofrênico lamber a boca, mastigar em vazio e contorcer as mãos.',
        es: 'El ápice de la selectividad. Valbenazina inhibe SOLO el VMAT2 del cerebro, sin tocar la periferia, minimizando caídas de presión. Suprime el exceso de dopamina que hace que el esquizofrénico lama la boca, mastique en vacío y contorsione las manos.'
      },
      dose: {
        adult: {
          pt: 'Início: 40 mg UMA VEZ ao dia. Após 1 semana, subir para 80 mg UMA VEZ ao dia.',
          es: 'Inicio: 40 mg UNA VEZ al día. Tras 1 semana, subir a 80 mg UNA VEZ al día.'
        },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['A dose única diária (diferente das 3 a 4x da Tetrabenazina) mudou o jogo para pacientes psiquiátricos graves com baixa adesão ao tratamento.'], es: ['La dosis única diaria cambió el juego para pacientes psiquiátricos graves con baja adhesión al tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em disfunção hepática moderada a severa (Child-Pugh B/C), a dose máxima absoluta é 40 mg/dia.', es: 'En disfunción hepática moderada a severa, la dosis máxima absoluta es 40 mg/día.' } },
      commonAdverseEffects: { pt: ['Sonolência extrema (afeta 11% dos pacientes)', 'Boca seca e tontura', 'Acatisia (inquietação)'], es: ['Somnolencia extrema (afecta 11% de pacientes)', 'Boca seca y mareo', 'Acatisia (inquietud)'] },
      dangerousAdverseEffects: { pt: ['Prolongamento letal do Intervalo QT no coração', 'Parkinsonismo Iatrogênico (A dopamina cai tanto que o paciente fica rígido)'], es: ['Prolongación letal del Intervalo QT en el corazón', 'Parkinsonismo Iatrogénico (La dopamina cae tanto que el paciente queda rígido)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com QT longo congênito', 'Uso com inibidores potentes e simultâneos de CYP3A4 e CYP2D6'], es: ['Pacientes con QT largo congénito', 'Uso con inhibidores potentes y simultáneos de CYP3A4 y CYP2D6'] },
        relative: { pt: ['Associação com outros antipsicóticos que prolongam muito o QT (Clorpromazina, Tioridazina)'], es: ['Asociación con otros antipsicóticos que prolongan mucho el QT'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SEM BLACK BOX DE SUICÍDIO: Devido ao seu bloqueio incrivelmente seletivo, a Valbenazina conseguiu aprovação do FDA SEM a terrível tarja preta de risco suicida imposta às suas irmãs (Tetrabenazinas). É muito mais segura para os esquizofrênicos e depressivos.', es: 'SIN BLACK BOX DE SUICIDIO: Debido a su bloqueo selectivo, la Valbenazina logró la aprobación SIN la terrible caja negra de riesgo suicida de sus hermanas. Es mucho más segura para deprimidos y esquizofrénicos.' }
      }
    }

  }); /* fim Object.assign BUILD 413 append */
})();

/* ═══════════════════════════════════════════════════════════════
   BUILD 414 APPEND — TDAH e Narcolepsia (Estimulantes e Eugeroicos)
   Metilfenidato | Lisdexanfetamina | Atomoxetina | Guanfacina | Modafinila
═══════════════════════════════════════════════════════════════ */
(function(){
  if (!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB))
    window.NEUROLOGIA_DRUGS_DB = {};

  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── METILFENIDATO ──────────────────────────────────────────────────── */
    "metilfenidato": {
      name: { pt: 'Metilfenidato (Cloridrato de)', es: 'Metilfenidato (Clorhidrato de)' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Estimulante do Sistema Nervoso Central (Bloqueador DAT/NET)', es: 'Estimulante del Sistema Nervioso Central (Bloqueador DAT/NET)' },
      indications: {
        pt: ['Transtorno de Déficit de Atenção e Hiperatividade (TDAH) em crianças e adultos', 'Narcolepsia (Episódios incontroláveis de sono)'],
        es: ['Trastorno por Déficit de Atención e Hiperactividad (TDAH) en niños y adultos', 'Narcolepsia (Episodios incontrolables de sueño)']
      },
      commercialNames: { br: ['Ritalina', 'Ritalina LA', 'Concerta'], ar: ['Ritalina', 'Concerta'] },
      presentation: { pt: ['Comprimidos de Liberação Imediata 10 mg', 'Cápsulas de Liberação Modificada (LA/Concerta) 18, 20, 30, 36, 40 e 54 mg'], es: ['Comprimidos de Liberación Inmediata 10 mg', 'Cápsulas de Liberación Modificada 18, 20, 30, 36, 40 y 54 mg'] },
      mechanism: {
        pt: 'O cérebro com TDAH é um motor subestimulado no Córtex Pré-Frontal (o CEO do cérebro não tem Dopamina e Noradrenalina para organizar as tarefas). O Metilfenidato bloqueia diretamente os transportadores DAT e NET. As bombas param de "aspirar" a dopamina, inundando as sinapses do cérebro. O paciente de repente ganha "freios" e "foco a laser", conseguindo inibir a agitação motora.',
        es: 'El cerebro con TDAH es un motor subestimulado en el Córtex Prefrontal. El Metilfenidato bloquea los transportadores DAT y NET. Las bombas dejan de "aspirar" la dopamina, inundando las sinapsis. El paciente gana "frenos" y "foco láser", logrando inhibir la agitación.'
      },
      dose: {
        adult: {
          pt: 'Liberação Imediata: 10 mg, 2 a 3 vezes ao dia (Última dose até às 16h para evitar insônia). Liberação Prolongada (Concerta/LA): 18 a 54 mg de manhã UMA VEZ ao dia.',
          es: 'Liberación Inmediata: 10 mg, 2 a 3 veces al día. Liberación Prolongada (Concerta/LA): 18 a 54 mg por la mañana UNA VEZ al día.'
        },
        pediatric: { pt: 'TDAH (> 6 anos): Início com 5 mg de 12/12h (Imediata). Titular rigorosamente.', es: 'TDAH (> 6 años): Inicio con 5 mg de 12/12h (Inmediata). Titular rigurosamente.' }
      },
      administration: { pt: ['Cápsulas de Liberação Modificada (Concerta/LA) NUNCA podem ser esmagadas ou mastigadas. Se mastigadas, as 12 horas de dopamina explodem na cabeça do paciente em 1 hora (overdose).'], es: ['Cápsulas de Liberación Modificada NUNCA pueden ser aplastadas o masticadas. Si se mastican, las 12 horas de dopamina explotan en 1 hora (sobredosis).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado predominantemente no fígado. Usar com cautela na disfunção grave.', es: 'Metabolizado predominantemente en hígado. Usar con cautela en disfunción grave.' } },
      commonAdverseEffects: { pt: ['Insônia terminal', 'Anorexia e perda de peso (As crianças param de comer)', 'Taquicardia, boca seca e ansiedade aguda no pico do remédio'], es: ['Insomnio terminal', 'Anorexia y pérdida de peso (Los niños dejan de comer)', 'Taquicardia, boca seca y ansiedad'] },
      dangerousAdverseEffects: { pt: ['Crescimento atrofiado em crianças (Retarda o ganho de altura)', 'Morte Súbita Cardíaca em pacientes com anomalias congênitas (Efeito estimulante violento)', 'Surto Psicótico / Mania (A dopamina alta induz alucinação)'], es: ['Crecimiento atrofiado en niños (Retrasa el aumento de altura)', 'Muerte Súbita Cardíaca en pacientes con anomalías congénitas', 'Brote Psicótico / Manía'] },
      contraindications: {
        absolute: { pt: ['Uso associado com IMAOs', 'Glaucoma, Hipertireoidismo severo, Arritmias cardíacas'], es: ['Uso asociado con IMAOs', 'Glaucoma, Hipertiroidismo severo, Arritmias cardíacas'] },
        relative: { pt: ['Transtorno de Ansiedade Generalizada severo e Síndrome de Tourette (Piora os tics)'], es: ['Trastorno de Ansiedad Generalizada severo y Síndrome de Tourette (Empeora los tics)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA DE ABUSO RECREATIVO E ACADÊMICO: Classificado como substância controlada de alto risco (Schedule II). É brutalmente desviado por universitários (que não têm TDAH) para varar noites estudando, o que resulta em colapso de burnout, taquicardia severa e vício comportamental avassalador em dopamina.', es: 'ALERTA DE ABUSO RECREATIVO Y ACADÉMICO: Sustancia controlada de alto riesgo. Brutalmente desviado por universitarios para estudiar noches enteras, resultando en colapso de burnout, taquicardia severa y vicio a dopamina.' }
      }
    },

    /* ── LISDEXANFETAMINA ───────────────────────────────────────────────── */
    "lisdexanfetamina": {
      name: { pt: 'Lisdexanfetamina (Dimesilato de)', es: 'Lisdexanfetamina (Dimesilato de)' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Pró-fármaco Estimulante do Sistema Nervoso Central (Derivado Anfetamínico)', es: 'Profármaco Estimulante del Sistema Nervioso Central (Derivado Anfetamínico)' },
      indications: {
        pt: ['TDAH em crianças e adultos (Cobertura longa para o dia inteiro)', 'Transtorno da Compulsão Alimentar Periódica em adultos (Binge Eating - É a única droga do mundo aprovada oficialmente para isso)'],
        es: ['TDAH en niños y adultos (Cobertura larga para todo el día)', 'Trastorno por Atracón en adultos (Binge Eating - La única droga aprobada oficialmente para esto)']
      },
      commercialNames: { br: ['Venvanse', 'Juneve'], ar: ['Vyvanse'] },
      presentation: { pt: ['Cápsulas duras 30 mg, 50 mg e 70 mg'], es: ['Cápsulas duras 30 mg, 50 mg y 70 mg'] },
      mechanism: {
        pt: 'Uma engenharia molecular genial contra o vício. A Lisdexanfetamina entra no corpo como uma molécula cega e INATIVA. Ela só se transforma em Dextroanfetamina (o super estimulante) quando encontra as Enzimas dos Glóbulos Vermelhos no sangue, que quebram a ponte de Lisina lentamente. O truque: Se o adolescente abrir a cápsula e "cheirar" o pó ou injetar na veia, a droga NÃO FAZ EFEITO NENHUM, porque não passa pelas hemácias. A liberação no sangue é constante, mantendo foco brutal por 12-14 horas sem picos eufóricos.',
        es: 'Ingeniería molecular contra el vicio. Entra en el cuerpo CIEGA E INACTIVA. Solo se transforma en Dextroanfetamina al encontrar las Enzimas de los Glóbulos Rojos. Si el adolescente aspira el polvo o lo inyecta, NO HACE EFECTO. La liberación es constante por 12-14 horas.'
      },
      dose: {
        adult: {
          pt: 'TDAH / Compulsão: Início com 30 mg via oral, UMA VEZ ao dia (Obrigatoriamente pela manhã). Titular até 50 mg ou 70 mg/dia dependendo do foco.',
          es: 'TDAH / Atracón: Inicio con 30 mg vía oral, UNA VEZ al día (Obligatoriamente por la mañana). Titular hasta 50 mg o 70 mg/día.'
        },
        pediatric: { pt: 'Aprovado > 6 anos. Início 30 mg pela manhã. O conteúdo da cápsula pode ser diluído em iogurte/água, MAS DEVE SER ENGOLIDO LOGO.', es: 'Aprobado > 6 años. Inicio 30 mg por la mañana. El contenido puede diluirse en yogur, PERO DEBE TRAGARSE PRONTO.' }
      },
      administration: { pt: ['Nunca administrar à tarde ou à noite (Insônia garantida de 12 horas).'], es: ['Nunca administrar a la tarde o noche (Insomnio garantizado de 12 horas).'] },
      renalAdjustment: { required: true, message: { pt: 'Dose MÁXIMA de 50 mg/dia se insuficiência renal grave (ClCr < 30 mL/min).', es: 'Dosis MÁXIMA de 50 mg/día si insuficiencia renal grave (ClCr < 30 mL/min).' } },
      hepaticAdjustment: { required: false, message: { pt: 'As hemácias quebram a droga, não o fígado. Sem ajuste drástico.', es: 'Los hematíes rompen la droga, no el hígado. Sin ajuste drástico.' } },
      commonAdverseEffects: { pt: ['Perda drástica de apetite (O paciente simplesmente "esquece" de comer o dia todo)', 'Boca excessivamente seca e Ranger de dentes (bruxismo)', 'Irritabilidade e "Crateramento" (Efeito crash no fim da tarde)'], es: ['Pérdida drástica de apetito (El paciente "olvida" comer)', 'Boca seca y Rechinar de dientes', 'Irritabilidad y "Crash" al atardecer'] },
      dangerousAdverseEffects: { pt: ['Cardiotoxicidade aguda, Infarto e AVC em pacientes com sopro/doença valvar', 'Desencadeamento de Psicose, Mania e Comportamento Agressivo', 'Síndrome de Raynaud medicamentosa (vasoespasmo de dedos)'], es: ['Cardiotoxicidad aguda, Infarto y ACV en pacientes con anomalía cardíaca', 'Desencadenamiento de Psicosis, Manía y Agresividad', 'Síndrome de Raynaud'] },
      contraindications: {
        absolute: { pt: ['Uso associado de Inibidores da MAO nos últimos 14 dias', 'Arteriosclerose avançada, hipertensão moderada a grave', 'Hipertireoidismo sintomático'], es: ['Uso asociado de Inhibidores de la MAO en últimos 14 días', 'Arteriosclerosis avanzada, hipertensión moderada a grave', 'Hipertiroidismo sintomático'] },
        relative: { pt: ['Histórico pessoal de psicose bipolar'], es: ['Historial personal de psicosis bipolar'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DESAFIO DOS PAIS (CRASH DO FIM DE TARDE): Como a Lisdexanfetamina dura muito tempo, quando o nível da anfetamina cai repentinamente no final do dia (18h), a criança com TDAH sofre o "Crash": uma abstinência dopaminérgica aguda. Ela fica extremamente chorosa, irritada e dá ataques de birra, deixando os pais desesperados todo fim de tarde.', es: 'EL "CRASH" DEL ATARDECER: Cuando el nivel cae de repente al final del día (18h), el niño sufre el "Crash". Se pone llorón, irritado y tiene berrinches, desesperando a los padres cada atardecer.' }
      }
    },

    /* ── ATOMOXETINA ────────────────────────────────────────────────────── */
    "atomoxetina": {
      name: { pt: 'Atomoxetina', es: 'Atomoxetina' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor Seletivo da Recaptação de Noradrenalina (Não-Estimulante)', es: 'Inhibidor Selectivo de la Recaptación de Noradrenalina (No Estimulante)' },
      indications: {
        pt: ['TDAH em crianças, adolescentes e adultos (Primeira escolha quando o paciente tem histórico de vício, uso abusivo de drogas ou transtornos de ansiedade severa que a anfetamina pioraria)'],
        es: ['TDAH en niños, adolescentes y adultos (Primera elección cuando el paciente tiene historial de vicio, abuso de drogas o ansiedad severa)']
      },
      commercialNames: { br: ['Atentah', 'Strattera'], ar: ['Strattera'] },
      presentation: { pt: ['Cápsulas duras 10 mg, 18 mg, 25 mg, 40 mg, 60 mg, 80 mg e 100 mg'], es: ['Cápsulas duras 10 mg, 18 mg, 25 mg, 40 mg, 60 mg, 80 mg y 100 mg'] },
      mechanism: {
        pt: 'A "Cura Silenciosa" do TDAH. Não é um estimulante e não tem potencial de abuso. A Atomoxetina bloqueia APENAS a bomba de noradrenalina (NET). O truque fisiológico: No córtex pré-frontal (área da atenção), quase não existe bomba de dopamina. A dopamina local é "sugada" por engano pela bomba de noradrenalina. Ao bloquear a NET, a Atomoxetina aumenta a noradrenalina no cérebro todo, mas aumenta a dopamina APENAS NO CÓRTEX PRÉ-FRONTAL, evitando a enxurrada de dopamina nos núcleos da base (o que vicia).',
        es: 'La "Cura Silenciosa". No es un estimulante. Bloquea SOLO la bomba de noradrenalina (NET). Al bloquearla, aumenta la dopamina SOLO EN EL CÓRTEX PREFRONTAL, evitando la inundación en el núcleo accumbens (que vicia).'
      },
      dose: {
        adult: {
          pt: 'Início: 40 mg/dia de manhã. Aumentar após 3 dias para a dose alvo de 80 mg/dia. Pode chegar a 100 mg/dia em casos refratários.',
          es: 'Inicio: 40 mg/día por la mañana. Aumentar tras 3 días a 80 mg/día. Puede llegar a 100 mg/día.'
        },
        pediatric: { pt: 'Crianças (< 70 kg): Início 0,5 mg/kg/dia. Dose alvo de 1,2 mg/kg/dia.', es: 'Niños (< 70 kg): Inicio 0,5 mg/kg/día. Dosis objetivo de 1,2 mg/kg/día.' }
      },
      administration: { pt: ['O efeito não é imediato como a Ritalina. O paciente e a família devem ser avisados que a melhora no TDAH DEMORA de 2 a 4 SEMANAS contínuas para aparecer.'], es: ['El efecto no es inmediato. La mejora en el TDAH TARDA de 2 a 4 SEMANAS continuas en aparecer.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose pela metade em insuficiência hepática moderada (Child-Pugh B), e para um quarto na severa (Child-Pugh C).', es: 'Reducir dosis a la mitad en insuficiencia hepática moderada, y a un cuarto en la severa.' } },
      commonAdverseEffects: { pt: ['Fadiga profunda (Muitos relatam extrema letargia inicial)', 'Disfunção erétil severa e dor geniturinária / disúria em homens adultos (Efeito prostático)', 'Boca seca e tontura'], es: ['Fatiga profunda (Muchos relatan letargo extremo inicial)', 'Disfunción eréctil severa y dolor genitourinario en hombres adultos', 'Boca seca y mareo'] },
      dangerousAdverseEffects: { pt: ['Lesão Hepática Aguda Grave (Falência hepática foi reportada, exigindo transplante)', 'Ideação Suicida em crianças e adolescentes (Alerta Caixa Preta)'], es: ['Lesión Hepática Aguda Grave (Falla hepática exigiendo trasplante)', 'Ideación Suicida en niños y adolescentes (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['Uso associado com IMAOs', 'Glaucoma de ângulo fechado restrito', 'Feocromocitoma'], es: ['Uso asociado con IMAOs', 'Glaucoma de ángulo cerrado', 'Feocromocitoma'] },
        relative: { pt: ['Pacientes com hipertrofia prostática (piora o bloqueio urinário)'], es: ['Pacientes con hipertrofia prostática'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CHOQUE DE PERSONALIDADE: O FDA emitiu um Black Box Warning obrigatório. Em crianças com TDAH que iniciam Atomoxetina, uma minoria desenvolve alterações bruscas de comportamento, hostilidade incomum e pensamentos suicidas intensos nos primeiros meses. A vigilância parental deve ser estrita.', es: 'EL CHOQUE DE PERSONALIDAD: Black Box Warning. En niños que inician Atomoxetina, una minoría desarrolla cambios bruscos de comportamiento, hostilidad y pensamientos suicidas. Vigilancia estricta.' }
      }
    },

    /* ── GUANFACINA ─────────────────────────────────────────────────────── */
    "guanfacina": {
      name: { pt: 'Guanfacina', es: 'Guanfacina' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Agonista do Receptor Alfa-2A Adrenérgico Central (Não-Estimulante)', es: 'Agonista del Receptor Alfa-2A Adrenérgico Central (No Estimulante)' },
      indications: {
        pt: ['TDAH em crianças e adolescentes (Frequentemente adicionada à Ritalina/Venvanse para "acalmar a hiperatividade e os tics" quando o estimulante só resolveu a desatenção)'],
        es: ['TDAH en niños y adolescentes (Añadida frecuentemente a Ritalina para "calmar la hiperactividad y los tics" cuando el estimulante solo resolvió la inatención)']
      },
      commercialNames: { br: ['Intuniv'], ar: ['Intuniv'] },
      presentation: { pt: ['Comprimidos de Liberação Prolongada (ER) 1 mg, 2 mg, 3 mg e 4 mg'], es: ['Comprimidos de Liberación Prolongada (ER) 1 mg, 2 mg, 3 mg y 4 mg'] },
      mechanism: {
        pt: 'A "Cola Neural" do TDAH. Estimula ativamente os receptores Alfa-2A pós-sinápticos especificamente no córtex pré-frontal. Ao fechar os canais iônicos no cérebro, ela fortalece o sinal e elimina os "ruídos e distrações". Resultado: melhora a memória de trabalho, reduz a hiperatividade impulsiva e a oposição desafiadora sem tocar na dopamina. Como efeito fisiológico, reduz o simpático, diminuindo a pressão arterial.',
        es: 'El "Pegamento Neural". Estimula los receptores Alfa-2A postsinápticos en el córtex prefrontal, fortaleciendo la señal y eliminando el "ruido". Mejora la memoria de trabajo y reduce la hiperactividad impulsiva sin tocar la dopamina. Disminuye la presión arterial.'
      },
      dose: {
        adult: {
          pt: 'Uso adulto não é a indicação primária, mas inicia-se com 1 mg à noite, titulando a cada semana até 4 mg/dia.',
          es: 'Uso adulto no es indicación primaria. Inicia con 1 mg a la noche, titulando semanalmente hasta 4 mg/día.'
        },
        pediatric: { pt: 'Crianças 6 a 17 anos: Início com 1 mg/dia via oral. Aumentar em 1 mg semanalmente baseando-se no peso (Dose máxima de 4 mg para < 45kg, ou 7mg para mais pesados).', es: 'Niños 6 a 17 años: Inicio con 1 mg/día. Aumentar 1 mg semanalmente basado en el peso.' }
      },
      administration: { pt: ['Não deve ser ingerida com refeições muito ricas em gorduras (isso acelera a liberação da droga). NUNCA mastigar a pílula ER.', 'Nunca suspenda abruptamente.'], es: ['No ingerir con comidas muy ricas en grasas. NUNCA masticar la píldora ER. Nunca suspender abruptamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade rigorosa, monitorar PA.', es: 'Sin necesidad rigurosa, monitorizar PA.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado por CYP3A4, usar com cautela se disfunção grave.', es: 'Metabolizado por CYP3A4, usar con cautela.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa e letargia inicial (Muitas vezes é tomada à noite por isso)', 'Hipotensão e bradicardia (o batimento cardíaco da criança cai significativamente)', 'Boca seca e dor abdominal'], es: ['Somnolencia intensa y letargo inicial (Por eso se toma a la noche)', 'Hipotensión y bradicardia (el latido cae significativamente)', 'Boca seca y dolor abdominal'] },
      dangerousAdverseEffects: { pt: ['Hipotensão Ortostática Severa com Síncope (Desmaio)', 'CRISE HIPERTENSIVA DE REBOTE (Se o remédio for parado repentinamente)'], es: ['Hipotensión Ortostática Severa con Síncope (Desmayo)', 'CRISIS HIPERTENSIVA DE REBOTE (Si se para repentinamente)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Uso sem monitoramento rigoroso de pressão arterial e pulso (O coração bate mais lento e fraco)'], es: ['Hipersensibilidad', 'Uso sin monitoreo riguroso de presión y pulso'] },
        relative: { pt: ['Crianças com bloqueio AV ou história familiar de síncope inexplicada'], es: ['Niños con bloqueo AV o historia de síncope inexplicado'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O PERIGO DA PARADA BRUSCA: A Guanfacina suprime os impulsos cardiovasculares do cérebro. Se os pais acharem que a droga não está funcionando e a interromperem abruptamente de um dia para o outro, o corpo sofre uma chuva de adrenalina compensatória de REBOTE. A pressão arterial da criança pode explodir (Emergência Hipertensiva) levando a sangramento ou arritmia.', es: 'EL PELIGRO DE LA PARADA BRUSCA: Si los padres cortan la droga abruptamente, el cuerpo sufre una lluvia de adrenalina de REBOTE. La presión del niño puede explotar (Emergencia Hipertensiva).' }
      }
    },

    /* ── MODAFINILA ─────────────────────────────────────────────────────── */
    "modafinila": {
      name: { pt: 'Modafinila', es: 'Modafinilo' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Promotor da Vigília (Eugeroico / Estimulante Atípico)', es: 'Agente Promotor de la Vigilia (Eugeroico / Estimulante Atípico)' },
      indications: {
        pt: ['Narcolepsia grave', 'Síndrome da Apneia Obstrutiva do Sono (sonolência residual)', 'Distúrbio do Sono do Trabalho em Turnos (Vigias noturnos, médicos plantonistas)'],
        es: ['Narcolepsia grave', 'Síndrome de Apnea Obstructiva del Sueño', 'Trastorno del Sueño por Trabajo de Turnos (Vigilantes, médicos en guardia)']
      },
      commercialNames: { br: ['Stavigile', 'Provigil'], ar: ['Vigicer', 'Provigil'] },
      presentation: { pt: ['Comprimidos 100 mg e 200 mg'], es: ['Comprimidos 100 mg y 200 mg'] },
      mechanism: {
        pt: 'O Despertador Perfeito. Diferente da Ritalina, a Modafinila não inunda o cérebro com uma "bomba" de dopamina que vicia. Ela ativa seletivamente o hipotálamo, liberando HISTAMINA e OREXINA (os dois transmissores mestres do cérebro para "ficar acordado"). O resultado: o paciente fica clara, serena e invariavelmente "ligado" e acordado, sem sentir tremores, euforia psicótica ou taquicardia severa.',
        es: 'El Despertador Perfecto. No inunda el cerebro con dopamina que vicia. Activa el hipotálamo, liberando HISTAMINA y OREXINA. El paciente queda sereno e invariablemente "encendido", sin tremores ni taquicardia severa.'
      },
      dose: {
        adult: {
          pt: 'Narcolepsia: 200 mg via oral, UMA VEZ ao dia, sempre de manhã. Trabalho em turno noturno: 200 mg uma hora ANTES do início do turno.',
          es: 'Narcolepsia: 200 mg vía oral, UNA VEZ al día, siempre de mañana. Trabajo en turno: 200 mg una hora ANTES del turno.'
        },
        pediatric: { pt: 'Não recomendado (risco elevado de reações de pele raras em pediatria).', es: 'No recomendado (riesgo elevado de reacciones de piel raras en pediatría).' }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. Não tomar à tarde, exceto se a intenção for não dormir à noite inteira.'], es: ['Puede tomarse con o sin alimentos. No tomar a la tarde, excepto si la intención es no dormir en la noche.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste, apenas eliminação de metabólitos inativos.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir a dose para 100 mg em pacientes com insuficiência hepática grave.', es: 'Reducir a 100 mg en pacientes con insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante (Muito comum, até 34% dos usuários sentem forte dor de cabeça inicial)', 'Náuseas e diarreia', 'Ansiedade, nervosismo, e palpitação'], es: ['Cefalea marcada (Muy común, hasta 34% siente fuerte dolor de cabeza)', 'Náuseas y diarrea', 'Ansiedad, nerviosismo, palpitación'] },
      dangerousAdverseEffects: { pt: ['Reações Cutâneas Letais (Síndrome de Stevens-Johnson, Necrose Epidérmica Tóxica - Aparece nos primeiros meses)', 'Surtos maníacos agudos e ideação psicótica'], es: ['Reacciones Cutáneas Letales (Síndrome de Stevens-Johnson - Aparece en los primeros meses)', 'Brotes maníacos agudos e ideación psicótica'] },
      contraindications: {
        absolute: { pt: ['Histórico de reações alérgicas graves (Erupção) com modafinila', 'Hipertrofia ventricular esquerda ou alterações de valvas cardíacas'], es: ['Historial de reacciones alérgicas cutáneas con modafinilo', 'Hipertrofia ventricular izquierda'] },
        relative: { pt: ['Mulheres usando pílula anticoncepcional (Ver Interações)'], es: ['Mujeres usando píldora anticonceptiva (Ver Interacciones)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O REMÉDIO DO PLANTONISTA E O "HACKER" ACADÊMICO: É a medicação mais "hackeada" por pilotos militares, cirurgiões no CTI e estudantes ("Smart Drug"). Permite ao indivíduo varar até 40 horas seguidas acordado com total cognição. Mas o sono não é cancelado, é adiado: quando o remédio sai do corpo, ocorre a "dívida de sono" com apagão total neuroquímico.', es: 'EL REMEDIO DEL PLANTONISTA: "Smart Drug" de pilotos y estudiantes. Permite 40 horas despierto con cognición. Pero el sueño no se cancela, se pospone: cuando el remedio sale, ocurre la "deuda de sueño" con apagón total.' }
      }
    }

  }); /* fim Object.assign BUILD 414 append */
})();

/* ══════════════════════════════════════════════════════════════════════════════
   BUILD 415 — Promotores de Vigília / Otoneurologia
   Fármacos: armodafinila, pitolisanto, solriamfetol, betaistina, meclizina
   Categorias: psiquiatria (3) · otorrinolaringologia (2)
   Namespace: NEUROLOGIA_DRUGS_DB  (9º bloco IIFE)
══════════════════════════════════════════════════════════════════════════════ */
(function(){
  if (!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB))
    window.NEUROLOGIA_DRUGS_DB = {};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── ARMODAFINILA ─────────────────────────────────────────────────── */
    "armodafinila": {
      name: { pt: 'Armodafinila', es: 'Armodafinilo' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Promotor da Vigília (Isômero R-purificado da Modafinila)', es: 'Agente Promotor de la Vigilia (Isómero R-purificado del Modafinilo)' },
      indications: {
        pt: ['Narcolepsia', 'Sonolência excessiva associada à Apneia Obstrutiva do Sono', 'Distúrbio do Sono do Trabalho em Turnos'],
        es: ['Narcolepsia', 'Somnolencia excesiva asociada a Apnea Obstructiva del Sueño', 'Trastorno del Sueño por Trabajo de Turnos']
      },
      commercialNames: { br: ['Nuvigil (Importado)'], ar: ['Nuvigil'] },
      presentation: { pt: ['Comprimidos 50 mg, 150 mg, 200 mg e 250 mg'], es: ['Comprimidos 50 mg, 150 mg, 200 mg y 250 mg'] },
      mechanism: {
        pt: 'A "Versão Longa" da Modafinila. A modafinila comum é uma mistura de duas moléculas espelhadas (R e S). A Armodafinila isola apenas a molécula "R" (o lado direito do espelho), que é a que dura muito mais tempo no sangue. O mecanismo é o mesmo (liberação central de histamina e orexina sem pico de dopamina), mas o paciente não sofre a "queda de energia" no meio da tarde que ocorre com a modafinila antiga.',
        es: 'La "Versión Larga" del Modafinilo. Aísla solo la molécula "R" (el lado derecho del espejo), que dura mucho más en la sangre. El mecanismo es el mismo (liberación de histamina y orexina), pero el paciente no sufre la "caída de energía" a media tarde.'
      },
      dose: {
        adult: {
          pt: 'Narcolepsia/Apneia: 150 mg a 250 mg via oral UMA VEZ ao dia pela manhã. Turnos: 150 mg 1 hora antes do plantão noturno.',
          es: 'Narcolepsia/Apnea: 150 mg a 250 mg vía oral UNA VEZ al día por la mañana. Turnos: 150 mg 1 hora antes de la guardia.'
        },
        pediatric: {
          pt: 'Não recomendado rotineiramente para crianças.',
          es: 'No recomendado rutinariamente en niños.'
        }
      },
      administration: { pt: ['Administrar no mesmo horário. Retarda o sono profundamente.'], es: ['Administrar en el mismo horario. Retrasa el sueño profundamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade em disfunção renal leve/moderada.', es: 'Sin necesidad en disfunción renal leve/moderada.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir a dose para pacientes com insuficiência hepática grave.', es: 'Reducir la dosis para pacientes con insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante', 'Náuseas e tontura', 'Insônia e ansiedade intensa'], es: ['Cefalea marcada', 'Náuseas y mareo', 'Insomnio y ansiedad intensa'] },
      dangerousAdverseEffects: { pt: ['Reações Cutâneas Graves (Síndrome de Stevens-Johnson)', 'Surtos psiquiátricos/maníacos (especialmente em bipolares)'], es: ['Reacciones Cutáneas Graves (Síndrome de Stevens-Johnson)', 'Brotes psiquiátricos/maníacos (especialmente en bipolares)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ou histórico de rash cutâneo grave com modafinila'], es: ['Hipersensibilidad conocida o historial de rash cutáneo grave con modafinilo'] },
        relative: { pt: ['Mulheres férteis utilizando pílula anticoncepcional (Reduz a eficácia da pílula)'], es: ['Mujeres fértiles utilizando píldora anticonceptiva (Reduce la eficacia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'RISCO TERATOGÊNICO: Assim como a Modafinila, há suspeitas recentes de que o uso no início da gravidez aumenta o risco de malformações congênitas graves. Requer teste de gravidez negativo antes de iniciar.', es: 'RIESGO TERATOGÉNICO: Como el Modafinilo, hay sospechas de que el uso en el inicio del embarazo aumenta malformaciones. Requiere test de embarazo negativo antes de iniciar.' }
      }
    },

    /* ── PITOLISANTO ──────────────────────────────────────────────────── */
    "pitolisanto": {
      name: { pt: 'Pitolisanto', es: 'Pitolisant' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista / Agonista Inverso do Receptor Histamínico H3', es: 'Antagonista / Agonista Inverso del Receptor Histamínico H3' },
      indications: {
        pt: ['Narcolepsia com ou sem Cataplexia em adultos (O único não-estimulante aprovado para Cataplexia - a perda súbita de tônus muscular)'],
        es: ['Narcolepsia con o sin Cataplejía en adultos (El único no estimulante aprobado para Cataplejía)']
      },
      commercialNames: { br: ['Wakix (Importado)'], ar: ['Wakix'] },
      presentation: { pt: ['Comprimidos revestidos 4,45 mg e 17,8 mg'], es: ['Comprimidos recubiertos 4,45 mg y 17,8 mg'] },
      mechanism: {
        pt: 'Primeiro da sua classe no mundo. Os receptores H3 são "autofreios" no cérebro que dizem para o neurônio PARAR de liberar histamina (que nos mantém acordados). O Pitolisanto bloqueia esse "freio" H3. Como o neurônio perde o freio, ele começa a liberar HISTAMINA massivamente no cérebro. O cérebro desperta de forma natural e constante, o que ajuda não só a manter o paciente alerta, mas impede os ataques de cataplexia.',
        es: 'Primero de su clase. Los receptores H3 son "frenos" que dicen al cerebro PARAR de liberar histamina. El Pitolisant bloquea este "freno". El cerebro comienza a liberar HISTAMINA masivamente. Despierta de forma natural y constante, impidiendo la cataplejía.'
      },
      dose: {
        adult: {
          pt: 'Início: 8,9 mg/dia na primeira semana. Titular gradualmente até um máximo de 35,6 mg/dia (administrado em dose única pela manhã).',
          es: 'Inicio: 8,9 mg/día en la primera semana. Titular gradualmente hasta un máximo de 35,6 mg/día (dosis única por la mañana).'
        },
        pediatric: {
          pt: 'Não indicado para menores de 18 anos.',
          es: 'No indicado para menores de 18 años.'
        }
      },
      administration: { pt: ['Tomar pela manhã com o café da manhã. Como demora semanas para os níveis no cérebro se consolidarem, o efeito pleno não é imediato.'], es: ['Tomar por la mañana con el desayuno. Como tarda semanas en consolidarse, el efecto pleno no es inmediato.'] },
      renalAdjustment: { required: true, message: { pt: 'Dose máxima reduzida a 17,8 mg/dia em disfunção renal moderada/grave.', es: 'Dosis máxima reducida a 17,8 mg/día en disfunción renal moderada/grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Dose máxima reduzida a 17,8 mg/dia em disfunção hepática moderada (Child-Pugh B). Contraindicado na grave.', es: 'Dosis máxima reducida a 17,8 mg/día en disfunción hepática moderada. Contraindicado en grave.' } },
      commonAdverseEffects: { pt: ['Insônia severa', 'Cefaleia e náuseas', 'Ansiedade e irritabilidade'], es: ['Insomnio severo', 'Cefalea y náuseas', 'Ansiedad e irritabilidad'] },
      dangerousAdverseEffects: { pt: ['PROLONGAMENTO DO INTERVALO QT (Risco de arritmia no coração)'], es: ['PROLONGACIÓN DEL INTERVALO QT (Riesgo de arritmia)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com insuficiência hepática severa (Child-Pugh C)', 'Uso associado de anti-histamínicos clássicos de 1ª geração'], es: ['Pacientes con insuficiencia hepática severa (Child-Pugh C)', 'Uso asociado de antihistamínicos clásicos de 1ª generación'] },
        relative: { pt: ['Uso concomitante de drogas que prolongam o QT (Ex: Azitromicina, Haloperidol)'], es: ['Uso concomitante de drogas que prolongan el QT'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CONFLITO DO ALÉRGICO: Como a droga força o cérebro a ficar acordado através da Histamina, se o paciente tomar um antialérgico que cruze a barreira (como Polaramine/Prometazina), o antialérgico vai bloquear a histamina e ANULAR 100% O EFEITO DO PITOLISANTO. Se ele tiver alergia, deve usar Loratadina ou Fexofenadina (que não cruzam para o cérebro).', es: 'EL CONFLICTO DEL ALÉRGICO: Como la droga usa Histamina para despertar, si el paciente toma un antialérgico clásico (Clorfenamina), este ANULARÁ 100% EL EFECTO DEL PITOLISANT. Si tiene alergia, debe usar Loratadina (no cruza al cerebro).' }
      }
    },

    /* ── SOLRIAMFETOL ─────────────────────────────────────────────────── */
    "solriamfetol": {
      name: { pt: 'Solriamfetol', es: 'Solriamfetol' },
      category: 'psiquiatria',
      icon: '🧠',
      color: '#8B5CF6',
      colorTxt: '#ffffff',
      class: { pt: 'Inibidor da Recaptação de Dopamina e Noradrenalina (NDRI)', es: 'Inhibidor de la Recaptación de Dopamina y Noradrenalina (NDRI)' },
      indications: {
        pt: ['Sonolência diurna excessiva associada à Narcolepsia ou Apneia Obstrutiva do Sono (Como terapia para mantê-lo acordado, não substitui o CPAP na apneia)'],
        es: ['Somnolencia diurna excesiva asociada a Narcolepsia o Apnea Obstructiva del Sueño (No sustituye el CPAP)']
      },
      commercialNames: { br: ['Sunosi (Em aprovação)'], ar: ['Sunosi'] },
      presentation: { pt: ['Comprimidos 75 mg e 150 mg'], es: ['Comprimidos 75 mg y 150 mg'] },
      mechanism: {
        pt: 'Atua exatamente nas mesmas bombas que o Metilfenidato (Bloqueando o DAT da dopamina e o NET da noradrenalina), inundando as fendas sinápticas. Contudo, ao contrário das anfetaminas, ele não força a liberação massiva estocada, agindo puramente na recaptação de forma muito refinada. O paciente fica super alerta o dia todo, mas sem o pico e o "crash" abrupto dos estimulantes de TDAH.',
        es: 'Actúa en las mismas bombas que el Metilfenidato (Bloqueando DAT y NET). Sin embargo, a diferencia de las anfetaminas, no fuerza la liberación masiva almacenada, actuando puramente en la recaptación. El paciente está super alerta, pero sin el "crash" abrupto.'
      },
      dose: {
        adult: {
          pt: 'Narcolepsia: Início com 75 mg pela manhã, podendo subir até 150 mg. Apneia: Início com 37,5 mg, podendo subir até 150 mg.',
          es: 'Narcolepsia: Inicio con 75 mg por la mañana, pudiendo subir a 150 mg. Apnea: Inicio con 37,5 mg, pudiendo subir a 150 mg.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Não deve ser tomado menos de 9 horas antes de dormir, caso contrário o paciente terá insônia implacável.'], es: ['No debe ser tomado menos de 9 horas antes de dormir, o el paciente tendrá insomnio implacable.'] },
      renalAdjustment: { required: true, message: { pt: 'Excreção quase 100% renal INTACTA. Se ClCr entre 30 e 59: máx 75 mg. Se ClCr entre 15 e 29: máx 37,5 mg. Se Diálise: PROIBIDO.', es: 'Excreción casi 100% renal INTACTA. Si ClCr entre 30-59: máx 75 mg. Si Diálisis: PROHIBIDO.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não é metabolizado pelo fígado. Sem necessidade de ajuste.', es: 'No es metabolizado por el hígado. Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dor de cabeça intensa', 'Aumento da Pressão Arterial e da Frequência Cardíaca (Efeito noradrenérgico periférico)', 'Náuseas e Insônia'], es: ['Dolor de cabeza intenso', 'Aumento de la Presión Arterial y Frecuencia Cardíaca (Efecto noradrenérgico)', 'Náuseas e Insomnio'] },
      dangerousAdverseEffects: { pt: ['Crise hipertensiva e eventos isquêmicos cardíacos em pacientes de risco', 'Surtos de ansiedade, irritabilidade e agressividade'], es: ['Crisis hipertensiva y eventos isquémicos en pacientes de riesgo', 'Brotes de ansiedad, irritabilidad y agresividad'] },
      contraindications: {
        absolute: { pt: ['Uso associado com IMAOs nos últimos 14 dias', 'Doença Renal em Estágio Terminal (Diálise)'], es: ['Uso asociado con IMAOs en últimos 14 días', 'Enfermedad Renal en Etapa Terminal (Diálisis)'] },
        relative: { pt: ['Hipertensão arterial não controlada, arritmias graves'], es: ['Hipertensión arterial no controlada, arritmias graves'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA APNEIA: O Solriamfetol é maravilhoso para o cansaço da Apneia, mas NUNCA substitui o CPAP. Se o paciente parar de usar a máscara e depender só da pílula, o coração dele (que já sofre de noite por falta de oxigênio) vai sofrer de dia com a taquicardia da droga, gerando infarto maciço.', es: 'LA ALERTA DE LA APNEA: El Solriamfetol es maravilloso para el cansancio de la Apnea, pero NUNCA sustituye el CPAP. Si el paciente deja la máscara y usa solo la píldora, el corazón sufrirá de día con la taquicardia de la droga, generando infarto masivo.' }
      }
    },

    /* ── BETAISTINA ───────────────────────────────────────────────────── */
    "betaistina": {
      name: { pt: 'Betaistina (Dicloridrato de)', es: 'Betahistina (Diclorhidrato de)' },
      category: 'otorrinolaringologia',
      icon: '👂',
      color: '#0D9488',
      colorTxt: '#ffffff',
      class: { pt: 'Análogo da Histamina (Agonista H1 fraco / Antagonista H3 forte)', es: 'Análogo de la Histamina (Agonista H1 débil / Antagonista H3 fuerte)' },
      indications: {
        pt: ['Síndrome de Ménière (Vertigem grave, zumbido no ouvido e perda auditiva)', 'Vertigem e tontura de origem vestibular'],
        es: ['Síndrome de Ménière (Vértigo grave, zumbido en el oído y pérdida auditiva)', 'Vértigo y mareo de origen vestibular']
      },
      commercialNames: { br: ['Betaserc', 'Labirin'], ar: ['Betaserc', 'Menietol'] },
      presentation: { pt: ['Comprimidos 8 mg, 16 mg e 24 mg'], es: ['Comprimidos 8 mg, 16 mg y 24 mg'] },
      mechanism: {
        pt: 'Atua diretamente nos receptores de histamina do ouvido interno (Labirinto). Como agonista H1, ela dilata ferozmente os capilares sanguíneos da "estria vascular" do ouvido, drenando e diminuindo a pressão excessiva da endolinfa que causa a tontura do Ménière. Como antagonista H3 central, inibe os impulsos errados do nervo vestibular no cérebro. É a principal arma para "despressurizar" o labirinto doente.',
        es: 'Actúa directamente en los receptores de histamina del oído interno (Laberinto). Como agonista H1, dilata ferozmente los capilares sanguíneos del oído, drenando la presión excesiva de la endolinfa que causa el vértigo. Como antagonista H3, inhibe los impulsos erróneos del nervio.'
      },
      dose: {
        adult: {
          pt: '24 a 48 mg ao dia, divididos em 2 a 3 tomadas. Geralmente 1 comp de 16 mg de 8/8h ou 24 mg de 12/12h.',
          es: '24 a 48 mg al día, divididos en 2 a 3 tomas. Generalmente 1 comp de 16 mg cada 8h o 24 mg cada 12h.'
        },
        pediatric: {
          pt: 'Não recomendado (Eficácia e segurança não comprovadas em crianças).',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Deve ser tomado SEMPRE junto ou logo após as refeições para evitar o efeito histamínico ácido (dor de estômago e úlcera).'], es: ['Debe ser tomado SIEMPRE junto o después de las comidas para evitar el efecto histamínico ácido (dolor de estómago).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Dispepsia, dor gástrica e azia (O estômago é cheio de receptores histamínicos ativados por ela)', 'Cefaleia', 'Ondas de calor / Rash cutâneo leve'], es: ['Dispepsia, dolor gástrico y acidez', 'Cefalea', 'Sofocos / Rash cutáneo leve'] },
      dangerousAdverseEffects: { pt: ['Crise de Feocromocitoma (Pode causar pico hipertensivo agudo)', 'Sangramento por reativação de Úlcera Péptica'], es: ['Crisis de Feocromocitoma (Puede causar pico hipertensivo)', 'Sangrado por reactivación de Úlcera Péptica'] },
      contraindications: {
        absolute: { pt: ['Feocromocitoma pré-existente (O tumor supra-renal vai liberar adrenalina em níveis fatais ao ser ativado por histamina)'], es: ['Feocromocitoma preexistente (El tumor liberará adrenalina en niveles fatales)'] },
        relative: { pt: ['Asma brônquica (O efeito H1 fraco pode deflagrar broncoespasmo brando)', 'Úlcera péptica ativa'], es: ['Asma bronquial (El efecto H1 puede desencadenar broncoespasmo)', 'Úlcera péptica activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'NÃO CURA TONTURA IMEDIATAMENTE: O paciente deve ser informado de que a Betaistina não é uma "pílula de resgate mágico" como o Dramin. Ela é para tratamento estrutural de longo prazo, levando de 2 semanas a meses para despressurizar o ouvido e cessar as crises de Ménière.', es: 'NO CURA EL MAREO DE INMEDIATO: El paciente debe ser informado que la Betahistina no es rescate mágico. Es para tratamiento estructural a largo plazo, llevando semanas o meses para despresurizar el oído.' }
      }
    },

    /* ── MECLIZINA ────────────────────────────────────────────────────── */
    "meclizina": {
      name: { pt: 'Meclizina', es: 'Meclozina' },
      category: 'otorrinolaringologia',
      icon: '👂',
      color: '#0D9488',
      colorTxt: '#ffffff',
      class: { pt: 'Anti-histamínico H1 com atividade Anticolinérgica', es: 'Antihistamínico H1 con actividad Anticolinérgica' },
      indications: {
        pt: ['Cinetose (Enjoo de movimento ao viajar de barco, carro ou avião)', 'Tratamento profilático e sintomático da Vertigem aguda (Labirintites)'],
        es: ['Cinetosis (Mareo por movimiento al viajar en barco, coche o avión)', 'Tratamiento profiláctico y sintomático del Vértigo agudo (Laberintitis)']
      },
      commercialNames: { br: ['Meclin', 'Navicalm'], ar: ['Bonamine (Histórico)'] },
      presentation: { pt: ['Comprimidos 25 mg e 50 mg'], es: ['Comprimidos 25 mg y 50 mg'] },
      mechanism: {
        pt: 'O "Isolador de Enjoo". Como um anti-histamínico de primeira geração com potentes propriedades anticolinérgicas, a Meclizina atua diminuindo a excitabilidade do labirinto no ouvido interno e bloqueando a condução nas vias do nervo vestibular-cerebelar. Ela literalmente "desconecta" a comunicação entre o ouvido (que sente o balanço do barco) e o centro do vômito no cérebro.',
        es: 'El "Aislador de Mareo". Es un antihistamínico con potentes propiedades anticolinérgicas. Actúa disminuyendo la excitabilidad del laberinto en el oído interno y bloqueando la conducción nerviosa vestibular. Literalmente "desconecta" la comunicación entre el oído (que siente el balanceo) y el centro del vómito.'
      },
      dose: {
        adult: {
          pt: 'Vertigem/Labirintite: 25 a 100 mg ao dia (divididos a cada 12 ou 24 horas). Cinetose (Viagem): 25 mg, tomar 1 hora ANTES da viagem (Pode repetir a cada 24h).',
          es: 'Vértigo/Laberintitis: 25 a 100 mg al día (divididos cada 12 o 24 horas). Cinetosis (Viaje): 25 mg, tomar 1 hora ANTES del viaje (Puede repetir cada 24h).'
        },
        pediatric: {
          pt: 'Não é rotineiramente aprovada para crianças < 12 anos. O Dramin (Dimenidrinato) é preferido na pediatria.',
          es: 'No es rutinariamente aprobada para niños < 12 años.'
        }
      },
      administration: { pt: ['Pode ser tomado com leite ou alimentos para evitar desconforto gástrico.'], es: ['Puede tomarse con leche o alimentos para evitar malestar gástrico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Usar com grande cautela. Metabolização massiva hepática.', es: 'Usar con gran cautela. Metabolización masiva hepática.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa (Embora menor que o Dimenidrinato, ainda dá muito sono)', 'Boca e mucosas extremamente secas', 'Visão turva temporária'], es: ['Somnolencia intensa (Aunque menor que el Dimenhidrinato, aún da sueño)', 'Boca y mucosas extremadamente secas', 'Visión borrosa temporal'] },
      dangerousAdverseEffects: { pt: ['Retenção Urinária Aguda (Globo vesical) em Idosos', 'Delirium anticolinérgico'], es: ['Retención Urinaria Aguda (Globo vesical) en Ancianos', 'Delirium anticolinérgico'] },
      contraindications: {
        absolute: { pt: ['Idosos com demência e quadro agudo de delirium', 'Crise aguda de asma brônquica'], es: ['Ancianos con demencia y cuadro agudo de delirium', 'Crisis aguda de asma bronquial'] },
        relative: { pt: ['Glaucoma de ângulo fechado', 'Hiperplasia benigna da próstata (Risco de travar a urina)'], es: ['Glaucoma de ángulo cerrado', 'Hiperplasia benigna de próstata'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A DEMORA DA VIAGEM: O maior erro dos pacientes é tomar a Meclizina quando JÁ ESTÃO no barco passando mal e vomitando. A droga leva 1 hora para fazer efeito profilático. Deve ser engolida enquanto o paciente ainda está em solo firme, antes de embarcar.', es: 'LA DEMORA DEL VIAJE: El mayor error de los pacientes es tomarla cuando YA ESTÁN en el barco vomitando. La droga lleva 1 hora para hacer efecto. Debe ser tragada estando aún en suelo firme, antes de embarcar.' }
      }
    }

  }); /* fim Object.assign BUILD 415 append */
})();

/* ══════════════════════════════════════════════════════════════════════════════
   BUILD 416 — Quelantes de Fósforo / Nefrologia
   Fármacos: sevelamer, acetato_de_calcio, carbonato_de_calcio,
             carbonato_de_lantanio, oxihidroxido_sucroferrico
   Categorias: nefrologia (4) · multi_especialidade (1)
   Namespace: NEUROLOGIA_DRUGS_DB  (10º bloco IIFE)
══════════════════════════════════════════════════════════════════════════════ */
(function(){
  if (!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB))
    window.NEUROLOGIA_DRUGS_DB = {};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── SEVELÂMER ────────────────────────────────────────────────────── */
    "sevelamer": {
      name: { pt: 'Sevelâmer (Cloridrato / Carbonato de)', es: 'Sevelámero (Clorhidrato / Carbonato de)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Quelante de Fósforo (Polímero Não-Cálcico e Não-Metálico)', es: 'Quelante de Fósforo (Polímero No Cálcico y No Metálico)' },
      indications: {
        pt: ['Hiperfosfatemia em pacientes com Doença Renal Crônica (DRC) em diálise ou fase avançada'],
        es: ['Hiperfosfatemia en pacientes con Enfermedad Renal Crónica (ERC) en diálisis o fase avanzada']
      },
      commercialNames: { br: ['Renagel', 'Renvela'], ar: ['Renagel', 'Renvela'] },
      presentation: { pt: ['Comprimidos revestidos 800 mg', 'Sachês com pó para suspensão 800 mg e 2,4 g'], es: ['Comprimidos recubiertos 800 mg', 'Sobres con polvo para suspensión 800 mg y 2,4 g'] },
      mechanism: {
        pt: 'O "Plástico Imã de Fósforo". O Sevelâmer é uma resina polimérica que não é absorvida pelo intestino. Quando engolido junto com a comida, ele agarra fisicamente as moléculas de fósforo do alimento dentro do estômago/intestino e não solta mais. O fósforo sai nas fezes em vez de ir para o sangue. Sua glória é não conter cálcio, evitando que os vasos sanguíneos do renal crônico virem pedra (calcificação vascular).',
        es: 'El "Plástico Imán de Fósforo". El Sevelámero es una resina que no se absorbe. Al tragarlo con comida, agarra físicamente el fósforo del alimento en el intestino y no lo suelta. El fósforo sale en las heces en vez de ir a la sangre. Su gloria es no contener calcio, evitando la calcificación vascular.'
      },
      dose: {
        adult: {
          pt: '800 a 1600 mg via oral, 3 vezes ao dia, ESTRITAMENTE JUNTO COM AS REFEIÇÕES. (A dose é ajustada pelo nível de fósforo no sangue).',
          es: '800 a 1600 mg vía oral, 3 veces al día, ESTRICTAMENTE JUNTO A LAS COMIDAS. (La dosis se ajusta por el nivel de fósforo).'
        },
        pediatric: {
          pt: 'Uso aprovado com base na Área de Superfície Corporal (Ex: 800 mg a cada refeição para ASC > 1,2 m²).',
          es: 'Uso aprobado basado en Área de Superficie Corporal.'
        }
      },
      administration: { pt: ['NUNCA tomar de estômago vazio (Não serve para nada, pois não há fósforo alimentar para quelar).', 'Engolir inteiro. O pó em sachê é para quem não consegue engolir a pílula gigante.'], es: ['NUNCA tomar con estómago vacío (No sirve de nada).', 'Tragar entero.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica, seguro e feito para falência renal.', es: 'Sin absorción sistémica, seguro y hecho para falla renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica.', es: 'Sin absorción sistémica.' } },
      commonAdverseEffects: { pt: ['Constipação severa e fecaloma', 'Náuseas, dispepsia e flatulência', 'Diarreia (menos comum que constipação)'], es: ['Constipación severa y fecaloma', 'Náuseas, dispepsia y flatulencia', 'Diarrea'] },
      dangerousAdverseEffects: { pt: ['Obstrução intestinal, perfuração e íleo paralítico (O polímero endurece nas fezes)', 'Cristalização polimérica na mucosa gástrica (Raro)'], es: ['Obstrucción intestinal, perforación e íleo paralítico', 'Cristalización polimérica en mucosa gástrica'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal ativa', 'Hipofosfatemia severa'], es: ['Obstrucción intestinal activa', 'Hipofosfatemia severa'] },
        relative: { pt: ['Disfagia severa ou distúrbios de deglutição severos (O comprimido pode entalar e inchar no esôfago)'], es: ['Disfagia severa o trastornos de deglución'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ROUBO DOS REMÉDIOS: Como o Sevelâmer é um "super ímã" no intestino, ele não gruda só no fósforo, gruda em outras pílulas também. Se o paciente tomar o Sevelâmer junto com remédio para tireoide (Levotiroxina) ou antibióticos, eles não farão efeito. Deve-se espaçar no mínimo 2 horas.', es: 'EL ROBO DE LOS REMEDIOS: Si el paciente toma Sevelámero con tiroides o antibióticos, no harán efecto. Espaciar mínimo 2 horas.' }
      }
    },

    /* ── ACETATO DE CÁLCIO ────────────────────────────────────────────── */
    "acetato_de_calcio": {
      name: { pt: 'Acetato de Cálcio', es: 'Acetato de Calcio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Quelante de Fósforo (À base de Cálcio)', es: 'Quelante de Fósforo (A base de Calcio)' },
      indications: {
        pt: ['Hiperfosfatemia em DRC terminal / Pacientes em Hemodiálise'],
        es: ['Hiperfosfatemia en ERC terminal / Pacientes en Hemodiálisis']
      },
      commercialNames: { br: ['Phoslo (Histórico)', 'Acetato de Cálcio'], ar: ['Royen'] },
      presentation: { pt: ['Comprimidos ou cápsulas 667 mg (equivale a ~169 mg de cálcio elementar)'], es: ['Comprimidos o cápsulas 667 mg'] },
      mechanism: {
        pt: 'O Quelante Clássico. Ao ser ingerido com os alimentos, os íons de cálcio do acetato se ligam fortemente aos íons de fosfato da comida, formando "Fosfato de Cálcio", um cimento insolúvel que o intestino humano não absorve e sai nas fezes. É preferido sobre o Carbonato de Cálcio porque precisa de MENOS doses de cálcio elementar para atingir o mesmo efeito quelante, reduzindo o risco de o cálcio ir para o sangue.',
        es: 'El Quelante Clásico. El calcio se une al fosfato formando un cemento insoluble. Se prefiere al Carbonato porque necesita MENOS calcio elemental para lograr el mismo efecto quelante.'
      },
      dose: {
        adult: {
          pt: '2 a 4 comprimidos via oral, COM CADA REFEIÇÃO (Café, almoço e jantar).',
          es: '2 a 4 comprimidos vía oral, CON CADA COMIDA.'
        },
        pediatric: {
          pt: 'Ajuste estrito pelo nível sérico de cálcio e fósforo.',
          es: 'Ajuste estricto por nivel sérico de calcio y fósforo.'
        }
      },
      administration: { pt: ['Tomar EXATAMENTE na hora das refeições. Se tomar em jejum, ele não quela o fósforo e o paciente absorverá todo o cálcio para a corrente sanguínea, intoxicando-se.'], es: ['Tomar EXACTAMENTE en la hora de las comidas. En ayunas el calcio se absorbe y el paciente se intoxica.'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro em uremia, mas a carga de cálcio deve ser estritamente vigiada.', es: 'Seguro en uremia, pero la carga de calcio debe vigilarse.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Náuseas leves e obstipação (intestino preso)', 'Irritação gástrica'], es: ['Náuseas leves y constipación', 'Irritación gástrica'] },
      dangerousAdverseEffects: { pt: ['Hipercalcemia severa (Cálcio sobe, causando coma, arritmia e confusão)', 'Calcificação Vascular e Valvular (As artérias do rim doente viram pedra)'], es: ['Hipercalcemia severa (coma y arritmia)', 'Calcificación Vascular y Valvular'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia pré-existente (Cálcio > 10.5 mg/dL)', 'Presença confirmada de calcificação severa nas artérias do coração'], es: ['Hipercalcemia preexistente', 'Calcificación severa confirmada en arterias'] },
        relative: { pt: ['Uso associado de Vitamina D ativa (Calcitriol), que multiplica a absorção desse cálcio'], es: ['Uso asociado de Vitamina D activa (Calcitriol)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DILEMA DO OSSO DE PEDRA: O uso prolongado e abusivo de quelantes à base de cálcio em renais crônicos pode fazer com que o excesso de cálcio não vá para os ossos, mas para a parede das veias e do coração, causando "Calcifilaxia" (gangrena química e morte). Por isso a medicina migrou muito para o Sevelâmer.', es: 'EL DILEMA DEL HUESO DE PIEDRA: El exceso de calcio puede ir a las venas causando "Calcifilaxia" (gangrena química letal). Por eso la medicina migró al Sevelámero.' }
      }
    },

    /* ── CARBONATO DE CÁLCIO ──────────────────────────────────────────── */
    "carbonato_de_calcio": {
      name: { pt: 'Carbonato de Cálcio', es: 'Carbonato de Calcio' },
      category: 'multi_especialidade',
      icon: '💊',
      color: '#6B7280',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Mineral / Antiácido / Quelante de Fósforo', es: 'Suplemento Mineral / Antiácido / Quelante de Fósforo' },
      indications: {
        pt: ['Prevenção e tratamento da osteoporose/osteopenia', 'Azia e dispepsia ácida (como antiácido)', 'Hiperfosfatemia em DRC (como quelante)'],
        es: ['Prevención y tratamiento de osteoporosis', 'Acidez y dispepsia ácida', 'Hiperfosfatemia en ERC']
      },
      commercialNames: { br: ['Os-Cal', 'Tums', 'Calcium'], ar: ['Calcium Sandoz'] },
      presentation: { pt: ['Comprimidos 500 mg, 600 mg e 1250 mg', 'Comprimidos Mastigáveis (Antiácidos)'], es: ['Comprimidos 500 mg, 600 mg y 1250 mg', 'Comprimidos Masticables'] },
      mechanism: {
        pt: 'Uma droga de múltiplos propósitos dependendo do horário da tomada. Se tomado EM JEJUM: Age como suplemento ósseo ou antiácido (neutraliza o ácido do estômago virando cloreto de cálcio e vai para o sangue). Se tomado JUNTO COM A COMIDA por um renal crônico: Ele age no intestino ligando-se ao fósforo da dieta e sai nas fezes.',
        es: 'En AYUNAS: Suplemento óseo o antiácido (va a la sangre). CON LA COMIDA: Se une al fósforo de la dieta y sale en las heces.'
      },
      dose: {
        adult: {
          pt: 'Suplemento: 500 a 1000 mg/dia, longe das refeições (para absorver). Quelante: 1 a 2 comprimidos junto com almoço e jantar (para não absorver e excretar o fósforo).',
          es: 'Suplemento: 500 a 1000 mg/día, lejos de comidas. Quelante: 1 a 2 comprimidos junto con comida.'
        },
        pediatric: {
          pt: 'Suplementação conforme ingestão diária recomendada (RDA) da faixa etária.',
          es: 'Según ingesta diaria recomendada de la franja etaria.'
        }
      },
      administration: { pt: ['Precisa de ÁCIDO GÁSTRICO para quebrar o comprimido. Pacientes tomando Omeprazol/Pantoprazol em altas doses NÃO conseguem absorver carbonato de cálcio (devem usar Citrato de Cálcio no lugar).'], es: ['Necesita ÁCIDO GÁSTRICO. Pacientes con Omeprazol NO logran absorber carbonato (deben usar Citrato de Calcio).'] },
      renalAdjustment: { required: false, message: { pt: 'Evitar sobrecarga em renais crônicos severos pelo risco vascular.', es: 'Evitar sobrecarga en renales crónicos por riesgo vascular.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Constipação persistente (Fezes brancas ou muito duras)', 'Flatulência e eructação (arroto de gás carbônico)'], es: ['Constipación persistente', 'Flatulencia y eructos'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE BURNETT (Síndrome Leite-Álcali - Ocorre se o paciente beber muito leite e tomar muito cálcio: Alcalose metabólica aguda, falência renal e calcificação do cérebro)'], es: ['SÍNDROME DE BURNETT (Síndrome Leche-Álcali: Alcalosis metabólica aguda y falla renal)'] },
      contraindications: {
        absolute: { pt: ['Fibrilação ventricular, hipercalcemia, hipercalciúria severa (Pedras de cálcio no rim ativas)'], es: ['Fibrilación ventricular, hipercalcemia, hipercalciuria severa'] },
        relative: { pt: ['Acloridria (Falta de ácido no estômago)'], es: ['Aclorhidria (Falta de ácido en estómago)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ENGANO DA OSTEOPOROSE NO RENAL: O cálcio é vital para os ossos de uma pessoa normal. Porém, em um paciente em diálise, as glândulas paratireoides estão loucas, então dar cálcio em excesso para tentar "melhorar o osso" vai apenas precipitar pedras nas válvulas do coração. A regra para renal é diferente da regra ortopédica.', es: 'EL ENGAÑO EN RENAL: En un paciente en diálisis, dar exceso de calcio solo precipita piedras en el corazón. La regla renal es diferente de la ortopédica.' }
      }
    },

    /* ── CARBONATO DE LANTÂNIO ────────────────────────────────────────── */
    "carbonato_de_lantanio": {
      name: { pt: 'Carbonato de Lantânio', es: 'Carbonato de Lantano' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Quelante de Fósforo (Não-Cálcico Metálico)', es: 'Quelante de Fósforo (No Cálcico Metálico)' },
      indications: {
        pt: ['Controle avançado da Hiperfosfatemia em pacientes com DRC (Indicado quando sevelâmer falha ou o cálcio do paciente já está muito alto)'],
        es: ['Control avanzado de la Hiperfosfatemia en ERC (Indicado cuando sevelámero falla o el calcio ya está muy alto)']
      },
      commercialNames: { br: ['Fosrenol'], ar: ['Fosrenol'] },
      presentation: { pt: ['Comprimidos MASTIGÁVEIS 500 mg, 750 mg e 1000 mg', 'Pó oral'], es: ['Comprimidos MASTICABLES 500 mg, 750 mg y 1000 mg', 'Polvo oral'] },
      mechanism: {
        pt: 'O "Metal Pesado Salvador". O lantânio é um elemento químico do grupo das terras raras (metal). Ele tem uma afinidade absurdamente alta pelo fosfato dietético. No ambiente ácido do estômago, o carbonato de lantânio libera o íon lantânio, que se liga fortemente ao fósforo da comida formando fosfato de lantânio impermeável. Ele sai pelas fezes com zero carga de cálcio no processo.',
        es: 'El "Metal Pesado Salvador". El lantano tiene afinidad absurdamente alta por el fosfato. Libera el ion lantano en el estómago, que se une al fósforo formando fosfato de lantano impermeable. Sale por las heces con cero carga de calcio.'
      },
      dose: {
        adult: {
          pt: 'Início: 500 mg, 3 vezes ao dia COM AS REFEIÇÕES. Pode ser titulado até 3.000 mg/dia divididos nas refeições.',
          es: 'Inicio: 500 mg, 3 veces al día CON LAS COMIDAS. Puede titularse hasta 3.000 mg/día.'
        },
        pediatric: {
          pt: 'Segurança não comprovada em crianças.',
          es: 'Seguridad no comprobada en niños.'
        }
      },
      administration: { pt: ['O COMPRIMIDO DEVE SER MASTIGADO COMPLETAMENTE ANTES DE ENGOLIR. Jamais engolir inteiro (ver Alerta).'], es: ['EL COMPRIMIDO DEBE SER MASTICADO COMPLETAMENTE. Jamás tragar entero (ver Alerta).'] },
      renalAdjustment: { required: false, message: { pt: 'Absorção < 0,002%. Seguro para falência renal.', es: 'Absorción < 0,002%. Seguro para falla renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'A minúscula porção que é absorvida é excretada pela bile. Evitar uso a longo prazo em obstrução biliar grave.', es: 'La minúscula porción absorbida se excreta por bilis. Evitar en obstrucción biliar grave.' } },
      commonAdverseEffects: { pt: ['Náusea e Vômito intensos (O gosto do metal é muito ruim)', 'Dor abdominal e constipação', 'Dentes escurecidos temporariamente'], es: ['Náusea y Vómito intensos (El sabor del metal es muy malo)', 'Dolor abdominal y constipación', 'Dientes oscurecidos temporalmente'] },
      dangerousAdverseEffects: { pt: ['PERFURAÇÃO GASTROINTESTINAL E OBSTRUÇÃO (Se engolido inteiro)', 'Fecaloma radiopaco severo'], es: ['PERFORACIÓN GASTROINTESTINAL Y OBSTRUCCIÓN (Si se traga entero)', 'Fecaloma radiopaco severo'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal, íleo paralítico ou impactação fecal prévia', 'Hipofosfatemia'], es: ['Obstrucción intestinal, íleo paralítico o impactación fecal', 'Hipofosfatemia'] },
        relative: { pt: ['Ulcerações gástricas ativas ou Doença de Crohn severa'], es: ['Ulceraciones gástricas activas o Enfermedad de Crohn'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA PEDRA E DO RAIO-X: Se o paciente com dentes fracos tentar ENGOLIR o comprimido de Fosrenol INTEIRO, o remédio agirá como uma verdadeira pedra no estômago, podendo rasgar e perfurar o intestino causando morte por sepse. Além disso, no Raio-X, o Lantânio brilha como metal e parece contraste bário ou moeda engolida, assustando radiologistas desavisados.', es: 'LA PIEDRA Y EL RAYO-X: Tragado ENTERO puede perforar el intestino y matar. Además en el Rayo-X el Lantano brilla como metal, asustando radiólogos.' }
      }
    },

    /* ── OXIHIDRÓXIDO SUCROFÉRRICO ────────────────────────────────────── */
    "oxihidroxido_sucroferrico": {
      name: { pt: 'Oxihidróxido Sucroférrico', es: 'Oxihidróxido Sucroférrico' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Quelante de Fósforo (À base de Ferro não-absorvível)', es: 'Quelante de Fósforo (A base de Hierro no absorbible)' },
      indications: {
        pt: ['Controle rigoroso da Hiperfosfatemia em Doença Renal Crônica (DRC) dialítica'],
        es: ['Control riguroso de la Hiperfosfatemia en Enfermedad Renal Crónica (ERC) dialítica']
      },
      commercialNames: { br: ['Velphoro'], ar: ['Velphoro'] },
      presentation: { pt: ['Comprimidos mastigáveis 500 mg (Quantidade baseada em ferro elementar)'], es: ['Comprimidos masticables 500 mg'] },
      mechanism: {
        pt: 'A mais recente tecnologia de quelação. É um complexo polinuclear férrico formulado para NÃO liberar seu ferro para o sangue. Dentro do tubo digestivo, o complexo troca seus íons "hidroxila" por íons "fosfato" do alimento mastigado. Ele prende quantidades brutais de fósforo em um volume físico menor de medicamento (reduz a carga de comprimidos do paciente - a "pill burden").',
        es: 'La tecnología más reciente de quelación. Complejo férrico que NO libera hierro a la sangre. En el tubo digestivo, cambia iones "hidroxilo" por "fosfato". Atrapa cantidades brutales de fósforo en menor volumen de medicamento (reduce la "pill burden").'
      },
      dose: {
        adult: {
          pt: 'Início: 500 mg (1 comp), 3 vezes ao dia com as refeições. Titular conforme o nível de fósforo (Máx 3.000 mg/dia).',
          es: 'Inicio: 500 mg (1 comp), 3 veces al día con las comidas. Titular según nivel de fósforo (Máx 3.000 mg/día).'
        },
        pediatric: {
          pt: 'Não indicado. O ferro não absorvido pode causar irritação local grave.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['DEVE SER MASTIGADO antes de engolir (O comprimido é castanho escuro, pode manchar a língua/dentes temporariamente).'], es: ['DEBE SER MASTICADO antes de tragar (puede manchar la lengua/dientes temporalmente).'] },
      renalAdjustment: { required: false, message: { pt: 'O complexo de ferro é insolúvel e não acumula na urina.', es: 'El complejo de hierro es insoluble y no acumula en orina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não há sobrecarga hepática de ferro (Diferente da injeção de ferro).', es: 'No hay sobrecarga hepática de hierro.' } },
      commonAdverseEffects: { pt: ['Fezes Negras/Escuras (Quase 100% dos pacientes relatam, é inofensivo mas assustador)', 'Diarreia (No primeiro mês de uso)'], es: ['Heces Negras/Oscuras (Casi 100% lo relatan, es inofensivo)', 'Diarrea (En el primer mes)'] },
      dangerousAdverseEffects: { pt: ['Obstrução intestinal', 'Irritação grave de focos hemorrágicos gastrointestinais pré-existentes'], es: ['Obstrucción intestinal', 'Irritación grave de focos hemorrágicos gastrointestinales'] },
      contraindications: {
        absolute: { pt: ['Hemocromatose ou doenças de acúmulo de ferro prévias', 'Íleo paralítico ativo'], es: ['Hemocromatosis o enfermedades de acumulación de hierro', 'Íleo paralítico activo'] },
        relative: { pt: ['Pacientes com Doença Ulcerosa Péptica grave ou Doença Inflamatória Intestinal ativa'], es: ['Enfermedad Ulcerosa Péptica grave o EII activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A CAMUFLAGEM DO SANGRAMENTO: Como este remédio deixa as fezes do paciente diálise completamente pretas (melena-like), o médico pode ter extrema dificuldade para identificar se o paciente está com um sangramento de úlcera estomacal ativo ou se é apenas a cor do remédio. Pode exigir testes laboratoriais focados.', es: 'EL CAMUFLAJE DEL SANGRADO: Las heces negras hacen imposible distinguir si el paciente sangra de úlcera o es solo el remedio. Puede exigir pruebas fecales especiales.' }
      }
    }

  }); /* fim Object.assign BUILD 416 append */
})();

/* ─────────────────────────────────────────────────────────────────────────
   BUILD 417 APPEND — Nefrologia: Hipercalemia & Citrato Férrico
   IDs: citrato_ferrico | patiromer | ciclossilicato_de_zirconio_sodico
        poliestirenossulfonato_de_sodio | poliestirenossulfonato_de_calcio
   ───────────────────────────────────────────────────────────────────────── */
(function(){
  if(!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) window.NEUROLOGIA_DRUGS_DB={};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    "citrato_ferrico": {
      name: { pt: 'Citrato Férrico', es: 'Citrato Férrico' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Quelante de Fósforo / Suplemento de Ferro Oral', es: 'Quelante de Fósforo / Suplemento de Hierro Oral' },
      indications: {
        pt: ['Hiperfosfatemia em pacientes com DRC em diálise', 'Anemia por deficiência de ferro em adultos com DRC não dependente de diálise'],
        es: ['Hiperfosfatemia en pacientes con ERC en diálisis', 'Anemia por deficiencia de hierro en adultos con ERC no dependiente de diálisis']
      },
      commercialNames: { br: ['Auryxia'], ar: ['Auryxia'] },
      presentation: { pt: ['Comprimidos 1 g (equivalente a 210 mg de ferro férrico)'], es: ['Comprimidos 1 g (equivalente a 210 mg de hierro férrico)'] },
      mechanism: {
        pt: 'A "Pílula de Dupla Função". O Citrato Férrico se liga ao fósforo do alimento no trato GI, formando fosfato férrico insolúvel (excretado nas fezes). O GRANDE DIFERENCIAL: Diferente do Velphoro (que prende o ferro), o citrato férrico PERMITE que uma quantidade substancial de ferro seja absorvida para o sangue. Ele baixa o fósforo E cura a anemia do renal crônico ao mesmo tempo.',
        es: 'La "Píldora de Doble Función". Se une al fósforo del alimento en el tracto GI. EL GRAN DIFERENCIAL: A diferencia del Velphoro, el citrato férrico PERMITE que se absorba una cantidad sustancial de hierro a la sangre. Baja el fósforo Y cura la anemia del renal crónico al mismo tiempo.'
      },
      dose: {
        adult: {
          pt: 'Hiperfosfatemia: 2 comprimidos (2 g), via oral, 3 vezes ao dia COM AS REFEIÇÕES. Titular conforme fósforo sérico.',
          es: 'Hiperfosfatemia: 2 comprimidos (2 g), vía oral, 3 veces al día CON LAS COMIDAS.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Obrigatório tomar com as refeições. Não triturar ou mastigar.'], es: ['Obligatorio tomar con las comidas. No triturar o masticar.'] },
      renalAdjustment: { required: false, message: { pt: 'Desejado para uso em DRC. Monitorar Ferritina para evitar acúmulo sistêmico.', es: 'Deseado para uso en ERC. Monitorear Ferritina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em doenças de depósito de ferro no fígado.', es: 'Cuidado en enfermedades de depósito de hierro.' } },
      commonAdverseEffects: { pt: ['Fezes muito escuras ou negras (inofensivo)', 'Diarreia e constipação', 'Dor abdominal'], es: ['Heces muy oscuras o negras (inofensivo)', 'Diarrea y constipación', 'Dolor abdominal'] },
      dangerousAdverseEffects: { pt: ['SOBRECARGA DE FERRO (Hemocromatose iatrogênica - Ferritina > 2000 ng/mL, depositando ferro no fígado e coração)'], es: ['SOBRECARGA DE HIERRO (Hemocromatosis iatrogénica - depositando hierro en hígado y corazón)'] },
      contraindications: {
        absolute: { pt: ['Hemocromatose, Hemossiderose ou qualquer distúrbio de sobrecarga de ferro'], es: ['Hemocromatosis, Hemosiderosis o cualquier trastorno de sobrecarga de hierro'] },
        relative: { pt: ['Sangramento gastrointestinal ativo agudo'], es: ['Sangrado gastrointestinal activo agudo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O EXCESSO SILENCIOSO: Como ele doa ferro para o sangue, o médico é OBRIGADO a cortar a dose do "ferro na veia" que o paciente recebe na diálise. Se esquecer de suspender o ferro IV, o paciente sofre um envenenamento lento por ferro que destrói o coração e o pâncreas.', es: 'EL EXCESO SILENCIOSO: Como dona hierro a la sangre, el médico está OBLIGADO a cortar la dosis del "hierro en vena" en la diálisis. Si olvida suspenderlo, el paciente sufre envenenamiento lento por hierro que destruye el corazón.' }
      }
    },

    "patiromer": {
      name: { pt: 'Patiromer (Sorbitex Cálcico)', es: 'Patiromer' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Resina de Troca Iônica Não-Absorvível (Quelante de Potássio)', es: 'Resina de Intercambio Iónico No Absorbible (Quelante de Potasio)' },
      indications: {
        pt: ['Tratamento da HIPERCALEMIA crônica ou recorrente em pacientes com DRC ou usuários de inibidores da SRAA (Losartana/Enalapril)'],
        es: ['Tratamiento de la HIPERPOTASEMIA crónica o recurrente en pacientes con ERC o usuarios de inhibidores SRAA']
      },
      commercialNames: { br: ['Veltassa'], ar: ['Veltassa'] },
      presentation: { pt: ['Pó para suspensão oral 8,4 g, 16,8 g e 25,2 g (Sachês)'], es: ['Polvo para suspensión oral 8,4 g, 16,8 g y 25,2 g (Sobres)'] },
      mechanism: {
        pt: 'Um polímero em forma de pó que atua principalmente no lúmen do cólon. Ele prende o POTÁSSIO livre que está no intestino e, em troca, solta uma molécula de CÁLCIO. O potássio fica preso na resina e vai para o vaso sanitário, baixando o potássio no sangue. Vantagem: Não tem sódio na composição, protegendo o coração do paciente renal.',
        es: 'Un polímero en polvo que actúa en el colon. Atrapa el POTASIO libre en el intestino y, a cambio, suelta una molécula de CALCIO. Ventaja: No tiene sodio, protegiendo el corazón.'
      },
      dose: {
        adult: {
          pt: 'Início: 8,4 g, via oral, UMA VEZ ao dia. Titular em incrementos semanais. Máximo de 25,2 g/dia.',
          es: 'Inicio: 8,4 g, vía oral, UNA VEZ al día. Titular en incrementos semanales. Máximo de 25,2 g/día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 12 anos de idade, ajuste conforme peso/idade.',
          es: 'Aprobado a partir de 12 años.'
        }
      },
      administration: { pt: ['Misturar o pó em 1/3 de copo de água (nunca engolir a seco). Tomar sempre JUNTO com alimentos.'], es: ['Mezclar el polvo en 1/3 de vaso de agua. Tomar siempre JUNTO a alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Específico para pacientes com falência renal. Não é absorvido.', es: 'Específico para pacientes con falla renal. No se absorbe.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Constipação (Muito comum)', 'Hipomagnesemia (O polímero rouba magnésio por engano)', 'Diarreia e dor abdominal leve'], es: ['Constipación (Muy común)', 'Hipomagnesemia (El polímero roba magnesio por error)', 'Diarrea y dolor leve'] },
      dangerousAdverseEffects: { pt: ['Hipocalemia severa (Se a dose for excessiva)', 'Obstrução intestinal'], es: ['Hipopotasemia severa (Si la dosis es excesiva)', 'Obstrucción intestinal'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal, impactação fecal aguda'], es: ['Obstrucción intestinal, impactación fecal aguda'] },
        relative: { pt: ['Hipomagnesemia severa prévia (< 1.2 mg/dL)'], es: ['Hipomagnesemia severa previa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O AVISO DE EMERGÊNCIA: O Patiromer demora de 7 a 48 HORAS para começar a baixar o potássio no sangue. Ele É INÚTIL para um paciente na UTI com Potássio = 8.0 mEq/L tendo arritmia. Para emergência usa-se Insulina+Glicose ou Diálise.', es: 'EL AVISO DE EMERGENCIA: Patiromer tarda de 7 a 48 HORAS en bajar el potasio. ES INÚTIL en la UCI para un paciente con Potasio = 8.0 y arritmia. Para emergencia se usa Insulina+Glucosa o Diálisis.' }
      }
    },

    "ciclossilicato_de_zirconio_sodico": {
      name: { pt: 'Ciclossilicato de Zircônio Sódico', es: 'Ciclosilicato de Zirconio y Sodio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Capturador de Potássio (Matriz Cristalina Inorgânica)', es: 'Capturador de Potasio (Matriz Cristalina Inorgánica)' },
      indications: {
        pt: ['Tratamento da Hipercalemia leve a moderada (Age muito mais rápido que o Patiromer — início em 1 hora)'],
        es: ['Tratamiento de la Hiperpotasemia leve a moderada (Actúa mucho más rápido que el Patiromer — inicio en 1 hora)']
      },
      commercialNames: { br: ['Lokelma'], ar: ['Lokelma'] },
      presentation: { pt: ['Pó para suspensão oral em sachês de 5 g e 10 g'], es: ['Polvo para suspensión oral en sobres de 5 g y 10 g'] },
      mechanism: {
        pt: 'A "Armadilha de Cristal". Não é uma resina plástica, mas um cristal inorgânico projetado com microporos exatos do tamanho do íon de Potássio. Ele engole o Potássio e joga fora SÓDIO e HIDROGÊNIO em todo o trato GI (não só no cólon). Por iniciar o roubo de potássio já no estômago, ele começa a agir em apenas 1 HORA.',
        es: 'La "Trampa de Cristal". Es un cristal inorgánico con microporos exactos del tamaño del ion de Potasio. Traga el Potasio y tira SODIO e HIDRÓGENO en todo el tracto GI. Por iniciar en el estómago, comienza a actuar en solo 1 HORA.'
      },
      dose: {
        adult: {
          pt: 'Fase de Correção: 10 g, via oral, 3 vezes ao dia por 48 horas. Fase de Manutenção: 5 a 10 g, UMA VEZ ao dia.',
          es: 'Fase de Corrección: 10 g, vía oral, 3 veces al día por 48 horas. Fase de Mantenimiento: 5 a 10 g, UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Não estabelecido em menores de 18 anos.',
          es: 'No establecido en menores de 18 años.'
        }
      },
      administration: { pt: ['Misturar o pó em 45 mL de água. A suspensão fica turva — tomar imediatamente antes que o pó assente. Pode ser tomado com ou sem alimentos.'], es: ['Mezclar el polvo en 45 mL de agua. La suspensión queda turbia, tomar de inmediato.'] },
      renalAdjustment: { required: false, message: { pt: 'Desenvolvido para renais crônicos. Sem ajuste.', es: 'Desarrollado para renales crónicos. Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Edema periférico (Pés e pernas inchados) — Devido à sobrecarga de sódio', 'Hipocalemia (Baixa excessiva de potássio)'], es: ['Edema periférico (Pies y piernas hinchados) — Por sobrecarga de sodio', 'Hipopotasemia'] },
      dangerousAdverseEffects: { pt: ['Descompensação de Insuficiência Cardíaca Congestiva (O corpo inunda de sódio e líquido)'], es: ['Descompensación de Insuficiencia Cardíaca Congestiva (El cuerpo se inunda de sodio y líquido)'] },
      contraindications: {
        absolute: { pt: ['Hipocalemia grave ativa'], es: ['Hipopotasemia grave activa'] },
        relative: { pt: ['Insuficiência Cardíaca não controlada e Hipertensão Grave', 'Constipação crônica'], es: ['Insuficiencia Cardíaca no controlada e Hipertensión Grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A BOMBA DE SÓDIO: Como o Zircônio troca Potássio por Sódio, cada 10 g de pó entregam 800 mg de sódio livre para o corpo do paciente. Se ele tomar a dose de ataque, receberá quase o dobro do sal permitido por dia. Para um paciente com falência cardíaca e edema pulmonar, isso pode ser catastrófico.', es: 'LA BOMBA DE SODIO: El Zirconio cambia Potasio por Sodio, entregando 800 mg de sodio libre en cada sobre. En la dosis de ataque, el paciente recibe el doble de sal permitida. Para un paciente con falla cardíaca, esto puede ser catastrófico.' }
      }
    },

    "poliestirenossulfonato_de_sodio": {
      name: { pt: 'Poliestirenossulfonato de Sódio', es: 'Poliestirenosulfonato de Sodio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Resina de Troca Iônica de Primeira Geração', es: 'Resina de Intercambio Iónico de Primera Generación' },
      indications: {
        pt: ['Hipercalemia (Antigamente muito usado na emergência, hoje substituído sempre que possível devido ao risco de gangrena colônica)'],
        es: ['Hiperpotasemia (Antiguamente muy usado en urgencias, hoy sustituido por riesgo de gangrena colónica)']
      },
      commercialNames: { br: ['Sorcal', 'Kayexalate'], ar: ['Resical'] },
      presentation: { pt: ['Pó oral/retal em potes de 30 g a 900 g'], es: ['Polvo oral/rectal en botes de 30 g a 900 g'] },
      mechanism: {
        pt: 'A "Resina Primitiva". Quando administrada via oral ou retal, ela atinge o intestino grosso, onde libera 1 íon de Sódio e captura 1 íon de Potássio. O potássio é excretado nas fezes. É extremamente agressivo para a mucosa do intestino, gerando constipação pétrea se não usar laxante.',
        es: 'La "Resina Primitiva". Altera el colon liberando 1 ion de Sodio y capturando 1 de Potasio. Es extremadamente agresivo para la mucosa.'
      },
      dose: {
        adult: {
          pt: 'Via oral: 15 a 30 g por dose, 1 a 4 vezes ao dia. Via Retal (Enema): 30 a 50 g retido no cólon por horas.',
          es: 'Vía oral: 15 a 30 g por dosis. Vía Rectal (Enema): 30 a 50 g retenido en colon por horas.'
        },
        pediatric: {
          pt: '1 g/kg/dose oral ou retal.',
          es: '1 g/kg/dosis oral o rectal.'
        }
      },
      administration: { pt: ['Oralmente misturado em água. NUNCA misturar com Sorbitol concentrado!'], es: ['Oral mezclado en agua. ¡NUNCA mezclar con Sorbitol concentrado!'] },
      renalAdjustment: { required: false, message: { pt: 'Para hipercalemia renal, sem ajuste sistêmico.', es: 'Para hiperpotasemia renal, sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Constipação ou compactação fecal severa', 'Edema por retenção de sódio', 'Náuseas e perda de apetite extrema'], es: ['Constipación o compactación fecal severa', 'Edema por retención de sodio', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['NECROSE COLÔNICA FATAL (O intestino gangrena, perfura e o paciente morre de sepse peritoneal)', 'Pneumonite por broncoaspiração em crianças'], es: ['NECROSIS COLÓNICA FATAL (El intestino se gangrena, perfora y el paciente muere de sepsis)', 'Neumonitis por broncoaspiración'] },
      contraindications: {
        absolute: { pt: ['Pós-operatório de cirurgias intestinais', 'Íleo paralítico (Redução da motilidade gastrointestinal)'], es: ['Posoperatorio de cirugías intestinales', 'Íleo paralítico'] },
        relative: { pt: ['Cardiopatas descompensados (Devido à carga de sódio)'], es: ['Cardiópatas descompensados (Por la carga de sodio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A ROLETA RUSSA DO SORBITOL: Antigamente, os hospitais misturavam o Sorcal com o laxante Sorbitol para evitar o intestino preso. Descobriu-se que essa combinação é um gatilho direto para Necrose Intestinal Isquêmica Fatal. O FDA emitiu um Black Box proibindo a mistura das duas drogas.', es: 'LA RULETA RUSA DEL SORBITOL: Se mezclaba con laxante Sorbitol. Se descubrió que esta combinación desencadena Necrosis Intestinal Isquémica Fatal. La FDA prohibió la mezcla con Caja Negra.' }
      }
    },

    "poliestirenossulfonato_de_calcio": {
      name: { pt: 'Poliestirenossulfonato de Cálcio', es: 'Poliestirenosulfonato de Calcio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Resina de Troca Iônica de Primeira Geração (Versão Cálcica)', es: 'Resina de Intercambio Iónico de Primera Generación (Versión Cálcica)' },
      indications: {
        pt: ['Hipercalemia em pacientes renais — usada quando se deseja evitar a sobrecarga de SÓDIO do Poliestirenossulfonato de Sódio'],
        es: ['Hiperpotasemia en pacientes renales — usada para evitar la sobrecarga de SODIO del Poliestirenosulfonato de Sodio']
      },
      commercialNames: { br: ['Kalimate', 'Resical'], ar: ['Resical'] },
      presentation: { pt: ['Pó oral para suspensão (Sachês de 5 g ou potes maiores)'], es: ['Polvo oral para suspensión (Sobres de 5 g)'] },
      mechanism: {
        pt: 'Idêntico ao Sorcal de sódio, atuando no lúmen do cólon, MAS ele troca íons de Potássio por íons de CÁLCIO. Salva o paciente da sobrecarga de sal, mas carrega o perigo de entregar cálcio demais para um paciente em diálise, aumentando o risco de calcificação vascular.',
        es: 'Idéntico al Sorcal de sodio, PERO cambia Potasio por CALCIO. Salva de la sobrecarga de sal, pero entrega mucho calcio, aumentando el riesgo de calcificación vascular.'
      },
      dose: {
        adult: {
          pt: '15 g via oral, 3 a 4 vezes ao dia. Ou via retal 30 g como enema.',
          es: '15 g vía oral, 3 a 4 veces al día. O vía rectal 30 g como enema.'
        },
        pediatric: {
          pt: 'Geralmente 1 g/kg/dose oral.',
          es: 'Generalmente 1 g/kg/dosis oral.'
        }
      },
      administration: { pt: ['Oral ou Retal. Jamais administrar junto com Sorbitol.'], es: ['Oral o Rectal. Jamás con Sorbitol.'] },
      renalAdjustment: { required: false, message: { pt: 'Acompanhar risco de hipercalcemia em anúricos.', es: 'Acompañar riesgo de hipercalcemia en anúricos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Constipação cimentante severa (Pior que a versão sódica)', 'Anorexia e Vômitos'], es: ['Constipación cimentante severa (Peor que la versión sódica)', 'Anorexia y Vómitos'] },
      dangerousAdverseEffects: { pt: ['Necrose de cólon (risco clássico das resinas poliestireno)', 'Hipercalcemia aguda perigosa'], es: ['Necrosis de colon (riesgo clásico de las resinas poliestireno)', 'Hipercalcemia aguda peligrosa'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia basal prévia', 'Mieloma Múltiplo (Piora crise de cálcio)'], es: ['Hipercalcemia basal previa', 'Mieloma Múltiple'] },
        relative: { pt: ['Uso associado com digitálicos (Digoxina): a hipercalcemia desencadeia arritmia letal'], es: ['Uso asociado con digitálicos (Digoxina): la hipercalcemia desencadena arritmia letal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ENGANO DA PRESCRIÇÃO: É comum na UTI o médico escrever apenas "Sorcal" achando que é o de cálcio, ou pedir o de cálcio e a farmácia mandar o de sódio. Um erro de troca dessas resinas condena o paciente renal a um edema agudo de pulmão (se receber sódio) ou a uma crise arrítmica de cálcio (se receber cálcio erradamente).', es: 'EL ERROR DE PRESCRIPCIÓN: Un error de intercambio de estas resinas condena al paciente renal a un edema pulmonar (si recibe sodio) o crisis de calcio. Sea exacto.' }
      }
    }

  }); /* fim Object.assign BUILD 417 append */
})();

/* ─────────────────────────────────────────────────────────────────────────
   BUILD 418 APPEND — Nefrologia: ESAs (Eritropoiese) & Calcitriol
   IDs: epoetina_alfa | epoetina_beta | darbepoetina_alfa | mircera | calcitriol
   ───────────────────────────────────────────────────────────────────────── */
(function(){
  if(!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) window.NEUROLOGIA_DRUGS_DB={};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    "epoetina_alfa": {
      name: { pt: 'Epoetina alfa', es: 'Epoetina alfa' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Estimulador da Eritropoiese (ESA)', es: 'Agente Estimulador de la Eritropoyesis (ESA)' },
      indications: {
        pt: ['Anemia grave associada à Doença Renal Crônica (DRC)', 'Anemia induzida por quimioterapia no câncer não-mieloide', 'Prevenção de transfusões em cirurgias de grande porte'],
        es: ['Anemia grave asociada a la Enfermedad Renal Crónica (ERC)', 'Anemia inducida por quimioterapia en cáncer no mieloide', 'Prevención de transfusiones en cirugías mayores']
      },
      commercialNames: { br: ['Hemax', 'Eprex', 'Eritromax'], ar: ['Hemax', 'Eprex'] },
      presentation: { pt: ['Seringas preenchidas ou frasco-ampola SC/IV (2.000, 4.000, 10.000, 40.000 UI)'], es: ['Jeringas prellenadas o vial SC/IV (2.000, 4.000, 10.000, 40.000 UI)'] },
      mechanism: {
        pt: 'A "Ordem para a Medula". O rim saudável produz eritropoietina, o hormônio que manda a medula óssea fabricar glóbulos vermelhos (hemácias). Quando o rim morre, a produção de sangue para e o paciente fica com anemia profunda. A Epoetina Alfa é a cópia sintética idêntica (recombinante) desse hormônio. Injetada no sangue, ela viaja até a medula e reinicia a fabricação de hemácias, curando a anemia e evitando transfusões.',
        es: 'La "Orden para la Médula". El riñón sano produce eritropoyetina. Al fallar el riñón, la producción de sangre para. La Epoetina Alfa es la copia sintética de esta hormona. Viaja a la médula y reinicia la fabricación de glóbulos rojos, curando la anemia.'
      },
      dose: {
        adult: {
          pt: 'DRC em Diálise: Iniciar com 50 UI/kg, 3 vezes por semana (IV ou SC). Titular a dose para manter a Hemoglobina (Hb) entre 10 e 11,5 g/dL — NUNCA acima de 12 g/dL.',
          es: 'ERC en Diálisis: Iniciar con 50 UI/kg, 3 veces por semana (IV o SC). Titular para mantener Hemoglobina (Hb) entre 10 y 11,5 g/dL — NUNCA arriba de 12 g/dL.'
        },
        pediatric: {
          pt: '50 UI/kg, 3 vezes na semana (Crianças frequentemente requerem doses proporcionais maiores que adultos para resposta).',
          es: '50 UI/kg, 3 veces a la semana (Niños requieren dosis proporcionales mayores).'
        }
      },
      administration: { pt: ['A via Subcutânea (SC) dói mais, mas economiza 30% da dose porque o corpo absorve melhor que na via intravenosa (IV).'], es: ['La vía Subcutánea (SC) duele más, pero ahorra 30% de la dosis porque el cuerpo la absorbe mejor que IV.'] },
      renalAdjustment: { required: false, message: { pt: 'Feita para falência renal. Sem ajuste sistêmico.', es: 'Hecha para falla renal. Sin ajuste sistémico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['HIPERTENSÃO ARTERIAL (A pressão sobe violentamente nas primeiras semanas porque o sangue "engrossa" com novas hemácias)', 'Dor nos ossos (a medula trabalhando)', 'Cefaleia'], es: ['HIPERTENSIÓN ARTERIAL (La presión sube violentamente porque la sangre se "espesa")', 'Dolor de huesos (la médula trabajando)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['TROMBOSE E INFARTO MACIÇO (Se o sangue ficar grosso demais)', 'Aplasia Pura de Células Vermelhas (O corpo cria anticorpos contra o remédio e destrói o próprio sangue — letal)'], es: ['TROMBOSIS E INFARTO MASIVO (Si la sangre se espesa demasiado)', 'Aplasia Pura de Células Rojas (El cuerpo crea anticuerpos contra la droga — letal)'] },
      contraindications: {
        absolute: { pt: ['Hipertensão arterial severa não controlada', 'Aplasia Pura de Células Vermelhas (PRCA) associada ao uso prévio de eritropoietina'], es: ['Hipertensión arterial severa no controlada', 'Aplasia Pura de Células Rojas (PRCA) previa'] },
        relative: { pt: ['Pacientes com câncer cujo objetivo do tratamento é a cura (A epoetina pode fazer os tumores crescerem mais rápido)'], es: ['Pacientes con cáncer cuyo objetivo es la cura (La epoetina puede hacer crecer los tumores)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA HEMOGLOBINA DE 12: Anos atrás, os médicos tentavam usar a Epoetina para deixar a hemoglobina do renal igual a de uma pessoa normal (13 ou 14 g/dL). O resultado foi um banho de sangue: milhares de pacientes morreram de AVC e Infarto porque o sangue virou "gelatina". O limite estrito atual é manter a Hb em, no máximo, 11 a 11,5 g/dL.', es: 'LA ALERTA DE LA HEMOGLOBINA DE 12: Antes se intentaba normalizar la hemoglobina (13 o 14). El resultado: muertes masivas por ACV porque la sangre se volvió "gelatina". El límite estricto actual es 11 a 11,5 g/dL máximo.' }
      }
    },

    "epoetina_beta": {
      name: { pt: 'Epoetina beta', es: 'Epoetina beta' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Estimulador da Eritropoiese (ESA)', es: 'Agente Estimulador de la Eritropoyesis (ESA)' },
      indications: {
        pt: ['Anemia renal (DRC) e Anemia oncológica'],
        es: ['Anemia renal (ERC) y Anemia oncológica']
      },
      commercialNames: { br: ['Recormon'], ar: ['Recormon'] },
      presentation: { pt: ['Seringas preenchidas SC/IV (2.000, 4.000, 30.000 UI e outras dosagens)'], es: ['Jeringas prellenadas SC/IV'] },
      mechanism: {
        pt: 'Quimicamente quase idêntica à Epoetina alfa, sendo também uma eritropoietina recombinante humana (rHuEPO), mas produzida usando células de ovário de hamster chinês com um perfil de glicosilação levemente diferente. Na prática clínica, funciona exatamente igual: estimula a diferenciação e maturação dos precursores eritroides na medula óssea.',
        es: 'Químicamente casi idéntica a la Epoetina alfa, con un perfil de glicosilación levemente diferente. En la práctica, funciona igual: estimula la maduración de los glóbulos rojos en la médula ósea.'
      },
      dose: {
        adult: {
          pt: 'Início: 20 UI/kg SC 3 vezes por semana, ou 40 UI/kg IV 3 vezes por semana. Titulação dependente do Hemograma.',
          es: 'Inicio: 20 UI/kg SC 3 veces por semana, o 40 UI/kg IV 3 veces por semana. Titulación dependiente del Hemograma.'
        },
        pediatric: {
          pt: 'Mesmas diretrizes de peso da Epoetina alfa.',
          es: 'Mismas directrices que Epoetina alfa.'
        }
      },
      administration: { pt: ['Geralmente administrada pela enfermagem da clínica de diálise nas fístulas arteriovenosas ou vias subcutâneas ao fim da sessão.'], es: ['Generalmente administrada en la clínica de diálisis en las fístulas o vía subcutánea al final de la sesión.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Pico hipertensivo', 'Reação no local da injeção', 'Cefaleia e dores articulares'], es: ['Pico hipertensivo', 'Reacción en el sitio de inyección', 'Cefalea y dolores articulares'] },
      dangerousAdverseEffects: { pt: ['Risco trombótico (Trombose da fístula de diálise)', 'Aplasia Pura de Células Vermelhas (PRCA)'], es: ['Riesgo trombótico (Trombosis de la fístula de diálisis)', 'Aplasia Pura de Células Rojas (PRCA)'] },
      contraindications: {
        absolute: { pt: ['Hipertensão severa não tratada'], es: ['Hipertensión severa no tratada'] },
        relative: { pt: ['Pacientes com níveis basais muito altos de ferro e vitaminas, mas que não respondem à droga (Sinal de falência medular)'], es: ['Pacientes con altos niveles de hierro que no responden a la droga'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DO FERRO: O paciente JAMAIS produzirá sangue com Epoetina se não tiver os "tijolos" para construir a hemácia. Se a Ferritina estiver < 100 ou Saturação de Transferrina < 20%, a injeção da Epoetina é puro desperdício de dinheiro. Tem que dar Ferro Intravenoso primeiro.', es: 'LA REGLA DEL HIERRO: El paciente JAMÁS producirá sangre con Epoetina si no tiene los "ladrillos". Si la Ferritina es < 100 o Saturación < 20%, la inyección es desperdicio de dinero. Debe dar Hierro Intravenoso primero.' }
      }
    },

    "darbepoetina_alfa": {
      name: { pt: 'Darbepoetina alfa', es: 'Darbepoetina alfa' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Estimulador da Eritropoiese (Ação Prolongada)', es: 'Agente Estimulador de la Eritropoyesis (Acción Prolongada)' },
      indications: {
        pt: ['Anemia da DRC (Dialítica ou Não-dialítica)', 'Anemia secundária à quimioterapia'],
        es: ['Anemia de la ERC (Dialítica o No dialítica)', 'Anemia secundaria a la quimioterapia']
      },
      commercialNames: { br: ['Aranesp'], ar: ['Aranesp'] },
      presentation: { pt: ['Seringas preenchidas (10 mcg, 20 mcg, 40 mcg, 60 mcg, até 500 mcg)'], es: ['Jeringas prellenadas (10 a 500 mcg)'] },
      mechanism: {
        pt: 'A "Epoetina de Fim de Semana". Os cientistas adicionaram duas cadeias de carboidratos extras (glicosilação) à molécula de epoetina original. Essa "armadura de açúcar" torna a Darbepoetina resistente à destruição no sangue. O resultado é uma meia-vida TRÊS VEZES maior que a da Epoetina Alfa, permitindo que o paciente tome muito menos injeções.',
        es: 'La "Epoetina de Fin de Semana". Los científicos añadieron cadenas de carbohidratos extras a la molécula. Esta "armadura" la hace resistente a la destrucción. El resultado es una vida media TRES VECES mayor, permitiendo menos inyecciones.'
      },
      dose: {
        adult: {
          pt: 'Conversão: Se o paciente tomava Epoetina Alfa 3 vezes na semana, a Darbepoetina é dada apenas UMA VEZ por semana, ou a cada 2 semanas na fase de manutenção (Dose média 0,45 mcg/kg 1×/semana).',
          es: 'Si el paciente tomaba Epoetina Alfa 3 veces a la semana, la Darbepoetina se da solo UNA VEZ a la semana, o cada 2 semanas (Dosis media 0,45 mcg/kg).'
        },
        pediatric: {
          pt: '0,45 mcg/kg SC ou IV uma vez por semana.',
          es: '0,45 mcg/kg SC o IV una vez por semana.'
        }
      },
      administration: { pt: ['Subcutânea ou Intravenosa. Evita as 12 picadas mensais da epoetina comum, reduzindo para 2 a 4 picadas mensais.'], es: ['Subcutánea o Intravenosa. Evita los 12 pinchazos mensuales de la epoetina común, reduciendo a 2 o 4.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Picos de Hipertensão Arterial', 'Edema periférico', 'Cefaleia e tosse'], es: ['Picos de Hipertensión Arterial', 'Edema periférico', 'Cefalea y tos'] },
      dangerousAdverseEffects: { pt: ['Eventos Tromboembólicos (AVC, Infarto) se a hemoglobina passar de 11 g/dL', 'Convulsões de início recente (Raro, documentado na fase inicial)'], es: ['Eventos Tromboembólicos (ACV, Infarto) si la hemoglobina pasa de 11 g/dL', 'Convulsiones de inicio reciente'] },
      contraindications: {
        absolute: { pt: ['Hipertensão grave e descontrolada'], es: ['Hipertensión grave y descontrolada'] },
        relative: { pt: ['Déficit absoluto de ferro (Droga será ineficaz)'], es: ['Déficit absoluto de hierro (Droga será ineficaz)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'CÁLCULO DE CONVERSÃO: Na troca de medicações, 200 UI de Epoetina Alfa antiga equivalem a aproximadamente 1 micrograma (mcg) de Darbepoetina. A regra clínica é dividir a dose semanal velha por 200.', es: 'CÁLCULO DE CONVERSIÓN: En el cambio, 200 UI de Epoetina Alfa antigua equivalen a 1 microgramo (mcg) de Darbepoetina. La regla clínica es dividir la dosis semanal vieja por 200.' }
      }
    },

    "mircera": {
      name: { pt: 'Metoxipolietilenoglicol-epoetina beta (CERA)', es: 'Metoxipolietilenglicol-epoetina beta (CERA)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Ativador Contínuo do Receptor de Eritropoietina (Ação Ultra Longa)', es: 'Activador Continuo del Receptor de Eritropoyetina (Acción Ultra Larga)' },
      indications: {
        pt: ['Anemia secundária à Doença Renal Crônica (DRC)'],
        es: ['Anemia secundaria a la Enfermedad Renal Crónica (ERC)']
      },
      commercialNames: { br: ['Mircera'], ar: ['Mircera'] },
      presentation: { pt: ['Seringas preenchidas prontas para uso (30 mcg a 360 mcg)'], es: ['Jeringas prellenadas (30 a 360 mcg)'] },
      mechanism: {
        pt: 'A "Epoetina Mensal". A tecnologia CERA (Continuous Erythropoietin Receptor Activator) pegou a epoetina beta e a "grudou" quimicamente a um polímero gigante de Polietilenoglicol (PEG). Essa molécula monstruosa não consegue ser destruída pelos rins ou fígado rapidamente. Ela liga e desliga do receptor da medula repetidamente por semanas. Tem uma meia-vida colossal de 130 HORAS, permitindo controle da anemia com apenas uma injeção por mês.',
        es: 'La "Epoetina Mensual". La tecnología CERA adhiere la epoetina a un polímero gigante de PEG. Tiene una vida media colosal de 130 HORAS, permitiendo inyectar una vez al mes.'
      },
      dose: {
        adult: {
          pt: 'Fase de correção: 0,6 mcg/kg a CADA 2 SEMANAS. Manutenção (Quando o alvo for atingido): Dose administrada UMA ÚNICA VEZ AO MÊS (A cada 4 semanas, dobrando a dose quinzenal anterior).',
          es: 'Fase de corrección: 0,6 mcg/kg CADA 2 SEMANAS. Mantenimiento: Dosis administrada UNA SOLA VEZ AL MES (Cada 4 semanas).'
        },
        pediatric: {
          pt: 'Não rotineiramente recomendado para crianças < 18 anos.',
          es: 'No recomendado rutinariamente en < 18 años.'
        }
      },
      administration: { pt: ['Injeção IV (preferida para paciente em hemodiálise) ou SC (preferida para DRC conservador).'], es: ['Inyección IV (preferida en diálisis) o SC.'] },
      renalAdjustment: { required: false, message: { pt: 'Criada para o paciente renal.', es: 'Creada para el paciente renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Pico Hipertensivo imediato e crônico', 'Diarreia e cefaleia', 'Nasofaringite'], es: ['Pico Hipertensivo inmediato y crónico', 'Diarrea y cefalea', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Encefalopatia Hipertensiva (Se a pressão sair do controle)', 'Trombose aguda da fístula'], es: ['Encefalopatía Hipertensiva (Si la presión se descontrola)', 'Trombosis aguda de la fístula'] },
      contraindications: {
        absolute: { pt: ['Hipertensão Arterial Maligna ou Severa não medicada'], es: ['Hipertensión Arterial Maligna o Severa no medicada'] },
        relative: { pt: ['Pacientes com histórico de AVC isquêmico severo e Hb já limítrofe'], es: ['Pacientes con historial de ACV isquémico severo y Hb limítrofe'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'PERIGO DA AÇÃO PROLONGADA: A maior vantagem do Mircera é também o seu maior perigo. Se o médico errar a mão na dose e a hemoglobina do paciente "estourar" para 13 g/dL com risco de trombose, não adianta só suspender o remédio. A medicação continuará forçando a medula do paciente a fazer sangue por um mês inteiro, exigindo até sangria terapêutica (flebotomia) para salvar o paciente.', es: 'PELIGRO DE LA ACCIÓN PROLONGADA: Si la hemoglobina "explota" a 13 g/dL, suspender no basta. Continuará forzando la médula por un mes entero, exigiendo hasta sangría terapéutica.' }
      }
    },

    "calcitriol": {
      name: { pt: 'Calcitriol', es: 'Calcitriol' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Vitamina D Ativa (1,25-di-hidroxicolecalciferol)', es: 'Vitamina D Activa (1,25-dihidroxicolecalciferol)' },
      indications: {
        pt: ['Hiperparatireoidismo secundário em Doença Renal Crônica avançada', 'Hipocalcemia crônica associada à diálise ou hipoparatireoidismo', 'Osteodistrofia renal'],
        es: ['Hiperparatiroidismo secundario en Enfermedad Renal Crónica avanzada', 'Hipocalcemia crónica asociada a diálisis o hipoparatiroidismo', 'Osteodistrofia renal']
      },
      commercialNames: { br: ['Rocaltrol', 'Sigmacalcidiol'], ar: ['Rocaltrol'] },
      presentation: { pt: ['Cápsulas moles 0,25 mcg'], es: ['Cápsulas blandas 0,25 mcg'] },
      mechanism: {
        pt: 'O Fim da Linha da Vitamina D. O corpo produz a Vitamina D3 (Colecalciferol), que precisa ser processada pelo fígado e ATIVADA PELO RIM. Quando o rim do paciente para de funcionar, a Vitamina D nunca é ativada. O cálcio no sangue cai. A paratireoide entra em pânico e começa a dissolver o osso do paciente (Hiperparatireoidismo). O Calcitriol é a vitamina JÁ ATIVADA. Quando o paciente a engole, ela inibe o PTH imediatamente e obriga o intestino a absorver o máximo de cálcio possível da comida.',
        es: 'El Fin de la Línea de la Vitamina D. Cuando el riñón falla, la Vitamina D nunca se activa. El Calcitriol es la vitamina YA ACTIVADA. Inhibe la PTH de inmediato y obliga al intestino a absorber calcio.'
      },
      dose: {
        adult: {
          pt: 'DRC Diálise: 0,25 mcg/dia ou em dias alternados via oral. Subir de 0,25 em 0,25 a cada 4 semanas guiado pelo PTH e Cálcio.',
          es: 'ERC Diálisis: 0,25 mcg/día o en días alternos. Subir de 0,25 en 0,25 cada 4 semanas guiado por PTH y Calcio.'
        },
        pediatric: {
          pt: '0,25 mcg diários para crianças com hipoparatireoidismo (Titulação rígida).',
          es: '0,25 mcg diarios en niños con hipoparatiroidismo.'
        }
      },
      administration: { pt: ['A dose é em MICROGRAMAS (mcg). Não confundir com Unidades Internacionais de Vit D normal (Um erro de prescrição mata o paciente de coma hipercalcêmico).'], es: ['La dosis es en MICROGRAMOS (mcg). No confundir con Unidades Internacionales de Vit D normal.'] },
      renalAdjustment: { required: false, message: { pt: 'Criado para pacientes sem rim funcional.', es: 'Creado para pacientes sin riñón funcional.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ao contrário dos análogos inativos, não precisa de ativação hepática. Útil no cirrótico com lesão renal.', es: 'No necesita activación hepática. Útil en el cirrótico con lesión renal.' } },
      commonAdverseEffects: { pt: ['Secura na boca e sede excessiva (Primeiros sinais de cálcio subindo)', 'Náusea leve, constipação'], es: ['Sequedad de boca y sed excesiva (Signos de calcio subiendo)', 'Náusea leve, constipación'] },
      dangerousAdverseEffects: { pt: ['HIPERCALCEMIA SEVERA (Fraqueza muscular letal, confusão, parada cardíaca em diástole)', 'Aumento letal do produto Cálcio × Fósforo (Calcificação em órgãos internos e veias)'], es: ['HIPERCALCEMIA SEVERA (Debilidad muscular, confusión, parada cardíaca)', 'Calcificación en órganos y venas'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia pré-existente (Cálcio sérico elevado)', 'Toxicidade prévia por vitamina D'], es: ['Hipercalcemia preexistente (Calcio sérico elevado)', 'Toxicidad previa por vitamina D'] },
        relative: { pt: ['Níveis de fósforo descontrolados (Deve-se controlar o fósforo com quelantes antes de dar calcitriol, senão ambos cristalizam no sangue)'], es: ['Niveles de fósforo descontrolados (Debe controlarse con quelantes antes de dar calcitriol)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ENGANO DA FARMÁCIA: Nunca diga a um paciente em diálise para "comprar vitamina D na farmácia". Se ele comprar Colecalciferol (Addera 50.000 UI) será absolutamente INÚTIL, pois o rim dele não a ativará. Ele PRECISA especificamente de Calcitriol em Microgramas. O inverso também é mortal: dar Calcitriol para quem só tem falta de vitamina de sol causará coma por excesso de cálcio.', es: 'EL ENGAÑO DE LA FARMACIA: Si compra Colecalciferol normal será INÚTIL. NECESITA Calcitriol en Microgramos. A la inversa, dar Calcitriol a quien solo le falta sol causará coma hipercalcémico.' }
      }
    }

  }); /* fim Object.assign BUILD 418 append */
})();

/* ─────────────────────────────────────────────────────────────────────────
   BUILD 419 APPEND — Nefrologia: Vitaminas D Análogas, Calcimiméticos & Aquarético
   IDs: alfacalcidol | paricalcitol | cinacalcete | etelcalcetida | tolvaptana
   ───────────────────────────────────────────────────────────────────────── */
(function(){
  if(!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) window.NEUROLOGIA_DRUGS_DB={};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    "alfacalcidol": {
      name: { pt: 'Alfacalcidol', es: 'Alfacalcidol' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Análogo da Vitamina D (Pró-fármaco 1-alfa-hidroxilado)', es: 'Análogo de la Vitamina D (Profármaco 1-alfa-hidroxilado)' },
      indications: {
        pt: ['Osteodistrofia renal (em pacientes sem rim mas com fígado bom)', 'Raquitismo e osteomalácia', 'Hipoparatireoidismo crônico'],
        es: ['Osteodistrofia renal (en pacientes sin riñón pero con buen hígado)', 'Raquitismo y osteomalacia', 'Hipoparatiroidismo crónico']
      },
      commercialNames: { br: ['Alpha D3', 'Sigmacalcidiol'], ar: ['Alpha D3'] },
      presentation: { pt: ['Cápsulas 0,25 mcg e 1 mcg'], es: ['Cápsulas 0,25 mcg y 1 mcg'] },
      mechanism: {
        pt: 'A "Vitamina que Pula o Rim". Normalmente, a Vitamina D é ativada no fígado e depois no rim. Quando o paciente perde a função renal, ele não consegue dar esse segundo passo. O Alfacalcidol já vem com o "passo renal" (a hidroxilação na posição 1-alfa) feito na fábrica! O paciente o engole, a droga vai para o fígado, que dá o último passo, transformando-a em Calcitriol ativo.',
        es: 'La "Vitamina que Salta el Riñón". Normalmente la Vitamina D se activa en hígado y riñón. El Alfacalcidol ya viene con el "paso renal" hecho de fábrica. El hígado da el último paso, transformándolo en Calcitriol activo.'
      },
      dose: {
        adult: {
          pt: 'Geralmente iniciar com 0,5 a 1 mcg via oral ao dia. A dose é guiada rigidamente pelos níveis de Cálcio, Fósforo e PTH.',
          es: 'Generalmente iniciar con 0,5 a 1 mcg vía oral al día. Guiado por niveles de Calcio, Fósforo y PTH.'
        },
        pediatric: {
          pt: 'Ajuste rígido por peso (ex: 0,01 a 0,05 mcg/kg/dia).',
          es: 'Ajuste rígido por peso (ej: 0,01 a 0,05 mcg/kg/día).'
        }
      },
      administration: { pt: ['Uso oral contínuo. Não confundir microgramas (mcg) com unidades internacionais (UI).'], es: ['Uso oral continuo. No confundir microgramos (mcg) con unidades internacionales (UI).'] },
      renalAdjustment: { required: false, message: { pt: 'Feito para pacientes renais.', es: 'Hecho para pacientes renales.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em disfunção hepática grave. A droga é um pró-fármaco que depende 100% do fígado para funcionar. Se o fígado falhar, vira pílula inútil.', es: 'CONTRAINDICADO en disfunción hepática grave. Si el hígado falla, se vuelve una píldora inútil.' } },
      commonAdverseEffects: { pt: ['Náusea, boca seca', 'Sede extrema (sinal de elevação de cálcio)'], es: ['Náusea, boca seca', 'Sed extrema (signo de elevación de calcio)'] },
      dangerousAdverseEffects: { pt: ['Hipercalcemia grave e arritmia secundária', 'Calcificação de tecidos moles e artérias (quando produto Ca × P > 55)'], es: ['Hipercalcemia grave y arritmia secundaria', 'Calcificación de tejidos blandos y arterias (Ca × P > 55)'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia atestada por exames', 'Intoxicação prévia por Vitamina D'], es: ['Hipercalcemia comprobada', 'Intoxicación previa por Vitamina D'] },
        relative: { pt: ['Níveis de fósforo não controlados', 'Disfunção hepática grave'], es: ['Niveles de fósforo no controlados', 'Disfunción hepática grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O AVISO DE CLASSE: Assim como o Calcitriol, o Alfacalcidol vai forçar o intestino a sugar cálcio. A maior tragédia é associá-lo a antiácidos contendo Magnésio ou Alumínio. Ele forçará a entrada desses metais no corpo de um renal, causando demência por alumínio fatal.', es: 'EL AVISO DE CLASE: Como el Calcitriol, el Alfacalcidol forzará al intestino a absorber calcio. Asociarlo con antiácidos de Aluminio forzará su entrada, causando demencia por aluminio.' }
      }
    },

    "paricalcitol": {
      name: { pt: 'Paricalcitol', es: 'Paricalcitol' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Ativador Seletivo do Receptor da Vitamina D (VDR)', es: 'Activador Selectivo del Receptor de la Vitamina D (VDR)' },
      indications: {
        pt: ['Prevenção e tratamento do Hiperparatireoidismo Secundário em Doença Renal Crônica (Estágios 3 a 5 e Diálise)'],
        es: ['Prevención y tratamiento del Hiperparatiroidismo Secundario en ERC (Etapas 3 a 5 y Diálisis)']
      },
      commercialNames: { br: ['Zemplar'], ar: ['Zemplar'] },
      presentation: { pt: ['Cápsulas moles 1 mcg, 2 mcg e 4 mcg', 'Ampolas IV 5 mcg/mL'], es: ['Cápsulas blandas 1 mcg, 2 mcg y 4 mcg', 'Ampollas IV 5 mcg/mL'] },
      mechanism: {
        pt: 'A "Vitamina D Inteligente". O Calcitriol clássico desliga o PTH, mas absorve muito cálcio e fósforo no intestino (causando pedras nas veias). O Paricalcitol foi sintetizado para ser SELETIVO. Ele se liga de forma esmagadora nos receptores da Glândula Paratireoide (desligando o hormônio ósseo destrutivo), mas "ignora" largamente os receptores do intestino. O paciente abaixa o PTH sem sofrer com surtos de Hipercalcemia e Hiperfosfatemia.',
        es: 'La "Vitamina D Inteligente". El Paricalcitol es SELECTIVO. Se une a los receptores de la Paratiroides pero "ignora" los del intestino. El paciente baja el PTH sin sufrir Hipercalcemia.'
      },
      dose: {
        adult: {
          pt: 'IV: Geralmente 0,04 a 0,1 mcg/kg aplicado no acesso venoso no final da sessão de hemodiálise. Oral: 1 a 2 mcg diários (ou três vezes na semana).',
          es: 'IV: 0,04 a 0,1 mcg/kg al final de la diálisis. Oral: 1 a 2 mcg diarios.'
        },
        pediatric: {
          pt: 'Doses guiadas por peso e níveis basais de PTH em crianças > 10 anos.',
          es: 'Dosis guiadas por peso y PTH basal en niños > 10 años.'
        }
      },
      administration: { pt: ['As cápsulas orais podem ser tomadas com ou sem alimentos. Ampolas IV ao final da diálise.'], es: ['Las cápsulas orales pueden tomarse con o sin alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Criado especificamente para pacientes renais.', es: 'Creado específicamente para pacientes renales.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste prévio.', es: 'Sin necesidad de ajuste previo.' } },
      commonAdverseEffects: { pt: ['Gosto metálico na boca (na injeção IV)', 'Edema leve, fadiga', 'Pequenas elevações de Cálcio (muito menos frequentes que o calcitriol)'], es: ['Gusto metálico en la boca (IV)', 'Edema leve, fatiga', 'Pequeñas elevaciones de Calcio'] },
      dangerousAdverseEffects: { pt: ['Supressão excessiva do PTH (Doença Óssea Adinâmica — o osso para de se renovar completamente e quebra fácil)'], es: ['Supresión excesiva del PTH (Enfermedad Ósea Adinámica — el hueso deja de renovarse y se rompe)'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia documentada ou intoxicação por vitamina D'], es: ['Hipercalcemia documentada o intoxicación vitamínica D'] },
        relative: { pt: ['Uso associado de digitálicos sem rigorosa monitorização eletrocardiográfica'], es: ['Uso asociado de digitálicos sin rigurosa monitorización'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CUIDADO COM O "OSSO PARADO": Se o médico exagerar e abaixar o PTH para menos de 100 pg/mL, o corpo sofre de "Doença Óssea Adinâmica". O osso vira uma escultura estática sem remodelamento de cálcio, tornando-se mais frágil e quebradiço do que sem tratamento.', es: 'EL CUIDADO DEL "HUESO PARADO": Si el PTH baja de 100 pg/mL, el cuerpo sufre "Enfermedad Ósea Adinámica". El hueso se vuelve estático, frágil y quebradizo.' }
      }
    },

    "cinacalcete": {
      name: { pt: 'Cinacalcete (Cloridrato de)', es: 'Cinacalcet (Clorhidrato de)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Calcimimético (Modulador Alostérico do Receptor de Cálcio — CaSR)', es: 'Calcimimético (Modulador Alostérico del Receptor de Calcio — CaSR)' },
      indications: {
        pt: ['Hiperparatireoidismo Secundário em pacientes com DRC em DIÁLISE (Onde a vitamina D não funcionou)', 'Carcinoma da Paratireoide (para tentar abaixar o cálcio fatal)'],
        es: ['Hiperparatiroidismo Secundario en ERC en DIÁLISIS', 'Carcinoma de la Paratiroides']
      },
      commercialNames: { br: ['Mimpara'], ar: ['Mimpara'] },
      presentation: { pt: ['Comprimidos revestidos 30 mg, 60 mg e 90 mg'], es: ['Comprimidos recubiertos 30 mg, 60 mg y 90 mg'] },
      mechanism: {
        pt: 'A "Mentira do Cálcio". O Cinacalcete age diretamente na glândula paratireoide. Ele modula o receptor CaSR (Sensor de Cálcio), tornando-o HIPERSENSÍVEL a qualquer restinho de cálcio que o renal tenha no sangue. A glândula é "enganada" e pensa: "Uau, tem muito cálcio no corpo, vou parar de produzir PTH!". O hormônio PTH despenca brutalmente. Por não usar vitamina D, ele EVITA o aumento de cálcio e fósforo.',
        es: 'La "Mentira del Calcio". Modula el receptor CaSR, haciéndolo HIPERSENSIBLE al calcio residual. La paratiroides es "engañada" y para de producir PTH. Al no usar vitamina D, EVITA el aumento de calcio y fósforo.'
      },
      dose: {
        adult: {
          pt: 'Início: 30 mg via oral UMA VEZ ao dia. Titular a cada 2 a 4 semanas (30, 60, 90 até 180 mg).',
          es: 'Inicio: 30 mg vía oral UNA VEZ al día. Titular cada 2 a 4 semanas (hasta 180 mg).'
        },
        pediatric: {
          pt: 'Indicado em > 3 anos com hiperparatireoidismo grave; dose baseada em peso (< ou > 0,20 mg/kg).',
          es: 'Indicado en > 3 años con hiperparatiroidismo grave.'
        }
      },
      administration: { pt: ['DEVE SER TOMADO com alimentos ou logo após a refeição, para aumentar a absorção e reduzir intolerância gástrica. Engolir inteiro — não triturar.'], es: ['DEBE SER TOMADO con alimentos o tras la comida. Tragar entero, no triturar.'] },
      renalAdjustment: { required: false, message: { pt: 'Feito para pacientes em diálise.', es: 'Hecho para pacientes en diálisis.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado por CYP3A4, CYP2D6 e CYP1A2. Monitorar rigorosamente na disfunção hepática moderada/grave.', es: 'Metabolizado por CYP3A4/2D6. Monitorizar en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Náuseas e Vômitos intensos (Mais de 30% dos pacientes, piora a adesão)', 'Cefaleia', 'Parestesia (Formigamento nas mãos/boca)'], es: ['Náuseas y Vómitos intensos (> 30%)', 'Cefalea', 'Parestesia (Hormigueo en manos/boca)'] },
      dangerousAdverseEffects: { pt: ['HIPOCALCEMIA SEVERA (O remédio "gasta" o cálcio, podendo causar convulsões e prolongamento de QT)', 'Hemorragia gastrointestinal alta'], es: ['HIPOCALCEMIA SEVERA (Puede causar convulsiones y prolongación del QT)', 'Hemorragia gastrointestinal alta'] },
      contraindications: {
        absolute: { pt: ['Hipocalcemia basal (Cálcio < 8,4 mg/dL) ANTES de iniciar a terapia'], es: ['Hipocalcemia basal (Calcio < 8,4) ANTES de iniciar'] },
        relative: { pt: ['Pacientes com QT longo no ECG (A hipocalcemia piora o QT para arritmia fatal)'], es: ['Pacientes con QT largo en el ECG'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA TETANIA (HIPOCALCEMIA): Diferente da Vitamina D (que aumenta o cálcio), o Cinacalcete é famoso por despencar o cálcio do sangue. Se o cálcio cair demais, o paciente sofre TETANIA: espasmo severo da face (Sinal de Chvostek), as mãos travam em formato de garra (Sinal de Trousseau) e a laringe pode fechar, asfixiando o paciente. Suspenda e aplique Gluconato de Cálcio IV imediatamente.', es: 'EL ALERTA DE TETANIA (HIPOCALCEMIA): El Cinacalcet desploma el calcio. Si cae mucho, el paciente sufre TETANIA: espasmo facial (Chvostek), manos en garra (Trousseau), laringoespasmo. Aplique Gluconato de Calcio IV.' }
      }
    },

    "etelcalcetida": {
      name: { pt: 'Etelcalcetida', es: 'Etelcalcetida' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Calcimimético (Peptídeo de Ação Direta Intravenosa)', es: 'Calcimimético (Péptido de Acción Directa Intravenosa)' },
      indications: {
        pt: ['Hiperparatireoidismo Secundário em pacientes com DRC exclusivamente em HEMODIÁLISE'],
        es: ['Hiperparatiroidismo Secundario en ERC exclusivamente en HEMODIÁLISIS']
      },
      commercialNames: { br: ['Parsabiv'], ar: ['Parsabiv'] },
      presentation: { pt: ['Frasco-ampola com solução injetável 2,5 mg, 5 mg e 10 mg'], es: ['Vial con solución inyectable 2,5 mg, 5 mg y 10 mg'] },
      mechanism: {
        pt: 'A evolução "injetável" dos calcimiméticos. É um pequeno peptídeo sintético (cadeia de aminoácidos) que gruda fisicamente no receptor CaSR da glândula paratireoide, suprimindo o PTH como o Cinacalcete. A grande jogada: Como ela é aplicada na veia do paciente pela enfermeira no final de cada sessão de hemodiálise, o médico GARANTE 100% de adesão (o paciente para de sofrer das terríveis náuseas diárias do comprimido de Cinacalcete).',
        es: 'La evolución "inyectable". Es un péptido que gruda al receptor CaSR suprimiendo el PTH. La gran jugada: Al aplicarse en la vena al final de la hemodiálisis, GARANTIZA 100% de adhesión, evitando las náuseas diarias de la pastilla.'
      },
      dose: {
        adult: {
          pt: 'Início: 5 mg via Intravenosa (Bolus) ao final da sessão de Hemodiálise (3 vezes por semana). Titular de 2,5 em 2,5 mg guiado por PTH/Cálcio.',
          es: 'Inicio: 5 mg IV (Bolus) al final de la Hemodiálisis (3 veces/semana). Titular de 2,5 en 2,5 mg.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Administrar SEMPRE na linha venosa do circuito de diálise no FINAL da sessão (após o sangue ser enxaguado de volta). Nunca aplicar nos dias sem diálise.'], es: ['Administrar SIEMPRE en la línea venosa al FINAL de la sesión. Nunca en días sin diálisis.'] },
      renalAdjustment: { required: false, message: { pt: 'Uso exclusivo para quem já não urina (Hemodiálise).', es: 'Uso exclusivo para quien ya no orina (Hemodiálisis).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Degradada por hidrólise plasmática de peptídeos. Fígado não é crucial.', es: 'Degradada por hidrólisis plasmática.' } },
      commonAdverseEffects: { pt: ['Hipocalcemia (Mais de 60% dos pacientes terão redução substancial de cálcio)', 'Espasmos musculares (câimbras) e parestesia', 'Vômito e diarreia (menos intensos que a forma oral)'], es: ['Hipocalcemia (> 60% tendrán reducción de calcio)', 'Espasmos musculares y parestesia', 'Vómito y diarrea'] },
      dangerousAdverseEffects: { pt: ['Hipocalcemia sintomática letal (Tetania, convulsão, arritmia QT)', 'Piora súbita da Insuficiência Cardíaca Congestiva (Raro)', 'Reação de anafilaxia'], es: ['Hipocalcemia sintomática letal (Tetania, convulsión, QT)', 'Empeoramiento de ICC (Raro)', 'Anafilaxia'] },
      contraindications: {
        absolute: { pt: ['Uso CONCOMITANTE com Cinacalcete oral (Parada cardíaca por hipocalcemia dupla)', 'Cálcio sérico pré-diálise < 8,3 mg/dL'], es: ['Uso CONCOMITANTE con Cinacalcet oral (parada cardíaca)', 'Calcio < 8,3 pre-diálisis'] },
        relative: { pt: ['Pacientes com ICC severa não compensada'], es: ['Pacientes con ICC severa no compensada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DESMAME DA TROCA (WASHOUT): Se for transferir o paciente do Cinacalcete (Comprimido) para a Etelcalcetida (Injeção), é OBRIGATÓRIO suspender o comprimido por no mínimo 7 DIAS "de respiro" antes de aplicar a injeção na clínica de diálise. Misturar os dois levará a uma tetania muscular gravíssima e parada cardíaca.', es: 'EL DESTETE (WASHOUT): Para transferir de Cinacalcet a Etelcalcetida, es OBLIGATORIO suspender la pastilla por 7 DÍAS antes de inyectar. Mezclar los dos lleva a tetania gravísima y parada cardíaca.' }
      }
    },

    "tolvaptana": {
      name: { pt: 'Tolvaptana', es: 'Tolvaptán' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista do Receptor de Vasopressina (V2) / Aquarético', es: 'Antagonista del Receptor de Vasopresina (V2) / Acuarético' },
      indications: {
        pt: ['Hiponatremia euvolêmica ou hipervolêmica severa (Sódio < 125) resistente associada a Insuficiência Cardíaca ou SIADH', 'Doença Renal Policística Autossômica Dominante (Atrasa a destruição dos rins cheios de cistos)'],
        es: ['Hiponatremia euvolémica o hipervolémica severa (Sodio < 125) resistente', 'Enfermedad Renal Poliquística Autosómica Dominante']
      },
      commercialNames: { br: ['Jinarc', 'Samsca'], ar: ['Jinarc', 'Samsca'] },
      presentation: { pt: ['Comprimidos 15 mg e 30 mg'], es: ['Comprimidos 15 mg y 30 mg'] },
      mechanism: {
        pt: 'O "Aquarético" Mágico. O corpo humano tem o Hormônio Antidiurético (Vasopressina), que avisa o rim para não deixar a ÁGUA ir para a urina. Na doença cardíaca ou SIADH, o corpo afoga em água, diluindo o Sódio. A Tolvaptana bloqueia diretamente o receptor V2 da vasopressina nos túbulos do rim. Resultado: O rim abre as comportas e o paciente urina LITROS de "água livre" PURA, enquanto o Sódio fica guardado no corpo. O sangue "concentra" de volta e a hiponatremia é curada sem usar pílulas de sal.',
        es: 'El "Acuarético" Mágico. Bloquea el receptor V2 en los túbulos. El riñón abre compuertas y el paciente orina LITROS de "agua libre" PURA, mientras el Sodio queda en el cuerpo. La hiponatremia se cura sin pastillas de sal.'
      },
      dose: {
        adult: {
          pt: 'Hiponatremia: Iniciar 15 mg UMA VEZ ao dia. Pode subir para 30 a 60 mg. Duração MÁXIMA de 30 dias na hiponatremia para evitar necrose hepática. (Na Doença Policística as doses chegam a 90/30mg em esquema bi-diário).',
          es: 'Hiponatremia: 15 mg UNA VEZ al día. Máximo 30 días. (Poliquística: esquemas mayores hasta 90/30 mg).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['É OBRIGATÓRIO internar o paciente no hospital na primeira dose (para vigiar o nível de sódio a cada poucas horas).', 'O paciente deve poder beber água livremente devido à sede intensa.'], es: ['OBLIGATORIO internar en el hospital en la primera dosis. El paciente debe poder beber agua libremente por la sed intensa.'] },
      renalAdjustment: { required: true, message: { pt: 'Não possui eficácia em paciente anúrico ou com ClCr < 10 mL/min (precisa do túbulo funcionante).', es: 'No eficaz en anuria o ClCr < 10 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADA EM DOENÇA HEPÁTICA SEVERA (Black Box FDA de Hepatotoxicidade Grave — risco de falência hepática irreversível).', es: 'CONTRAINDICADA EN ENFERMEDAD HEPÁTICA SEVERA (Caja Negra FDA — riesgo de falla hepática irreversible).' } },
      commonAdverseEffects: { pt: ['Sede absurdamente violenta (Polidipsia)', 'Poliúria extrema (urina galões por dia)', 'Boca seca e astenia'], es: ['Sed absurdamente violenta (Polidipsia)', 'Poliuria extrema (galones al día)', 'Boca seca y astenia'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE DESMIELINIZAÇÃO OSMÓTICA / MIELINÓLISE PONTINA CENTRAL (Se o sódio subir muito rápido > 8 mEq/L em 24h, o cérebro do paciente murcha e ele fica tetraplégico para sempre — Síndrome de Encarceramento)', 'Falência Hepática Aguda (Black Box)'], es: ['SÍNDROME DE DESMIELINIZACIÓN OSMÓTICA / MIELINOLISIS PONTINA CENTRAL (Sodio sube > 8 mEq en 24h, el cerebro se marchita — Síndrome de Cautiverio)', 'Falla Hepática Aguda (Caja Negra)'] },
      contraindications: {
        absolute: { pt: ['Hiponatremia hipovolêmica (O paciente já está seco)', 'Anúria, Hipernatremia', 'Paciente incapaz de sentir sede ou pedir água', 'Doença Hepática grave (Cirrose)'], es: ['Hiponatremia hipovolémica', 'Anuria, Hipernatremia', 'Paciente incapaz de sentir sed', 'Hepatopatía grave (Cirrosis)'] },
        relative: { pt: ['Uso associado de Inibidores Potentes do CYP3A4 (multiplica a dose 5×)'], es: ['Uso asociado de Inhibidores Potentes de CYP3A4 (multiplica dosis 5×)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A TELA DA TETRAPLEGIA: Um paciente com hiponatremia (ex: Sódio = 118) tem o cérebro inchado de água. O bloqueio com Tolvaptana é tão eficaz que o Sódio pode voltar para 135 mEq/L em 1 dia. Se a correção ultrapassar "8 mEq em 24h", as bainhas de mielina na base do cérebro racham e rasgam (Mielinólise Pontina Central). O paciente fica em Síndrome do Encarceramento: Lúcido, vivo, mas tetraplégico e mudo (Locked-in).', es: 'LA PANTALLA DE LA TETRAPLEJIA: Si la corrección supera "8 mEq en 24h", la mielina de la base del cerebro se raja (Mielinolisis Pontina). El paciente queda Síndrome de Cautiverio: Lúcido, pero tetrapléjico y mudo.' }
      }
    }

  }); /* fim Object.assign BUILD 419 append */
})();

/* ══════════════════════════════════════════════════════════════════════════
   BUILD 420 — Nefrologia: Engenharia da Água Hospitalar e a Forja do Sangue
   +5 drogas: Conivaptana | Citrato de Potássio | Citrato Sódio+Ác.Cítrico
              Sacarato de Hidróxido Férrico | Carboximaltose Férrica
   category: nefrologia (×4) | urologia (×1: citrato_de_potassio)
   icon: 🫘 color: #0369A1 colorTxt: #ffffff (nefrologia)
   icon: 💧 color: #0891B2 colorTxt: #ffffff (urologia — definido neste build)
══════════════════════════════════════════════════════════════════════════ */
(function(){
  if(!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) window.NEUROLOGIA_DRUGS_DB={};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── CONIVAPTANA ────────────────────────────────────────────────────── */
    "conivaptana": {
      name: { pt: 'Conivaptana (Cloridrato de)', es: 'Conivaptán (Clorhidrato de)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista Misto dos Receptores de Vasopressina (V1a e V2) / Aquarético IV', es: 'Antagonista Mixto de los Receptores de Vasopresina (V1a y V2) / Acuarético IV' },
      indications: {
        pt: ['Tratamento agudo de Hiponatremia euvolêmica e hipervolêmica em pacientes hospitalizados (ex: SIADH, Insuficiência Cardíaca)'],
        es: ['Tratamiento agudo de Hiponatremia euvolémica e hipervolémica en pacientes hospitalizados (ej: SIADH, Insuficiencia Cardíaca)']
      },
      commercialNames: { br: ['Vaprisol (Importação hospitalar)'], ar: ['Vaprisol'] },
      presentation: { pt: ['Ampolas IV 20 mg/100 mL para infusão'], es: ['Ampollas IV 20 mg/100 mL para infusión'] },
      mechanism: {
        pt: 'A "Torneira Venosa". Diferente da Tolvaptana (oral, apenas V2), a Conivaptana é estritamente intravenosa e bloqueia simultaneamente dois receptores: o V2 nos rins (abrindo as comportas de água livre, fazendo o paciente urinar litros sem perder sódio) e o V1a nas artérias (causando vasodilatação periférica). Isso abaixa a pressão do coração enquanto concentra o sódio do sangue, tirando o cérebro do risco de edema.',
        es: 'El "Grifo Venoso". A diferencia del Tolvaptán, el Conivaptán es intravenoso y bloquea dos receptores: el V2 en el riñón (eliminando agua libre sin perder sodio) y el V1a en las arterias (causando vasodilatación periférica). Baja la presión del corazón mientras concentra el sodio.'
      },
      dose: {
        adult: {
          pt: 'Dose de ataque: 20 mg IV administrados ao longo de 30 minutos. Manutenção: Infusão contínua de 20 mg a 40 mg ao longo de 24 horas. O uso MÁXIMO não deve exceder 4 dias.',
          es: 'Ataque: 20 mg IV en 30 minutos. Mantenimiento: Infusión continua de 20 a 40 mg por 24 horas. El uso MÁXIMO no debe exceder 4 días.'
        },
        pediatric: {
          pt: 'Não indicado e não testado na pediatria.',
          es: 'No indicado y no probado en pediatría.'
        }
      },
      administration: { pt: ['APENAS via intravenosa em veias de grosso calibre. Trocar o local da infusão a cada 24h pelo alto risco de flebite necrótica (a droga é muito irritante para o vaso).'], es: ['SOLO vía intravenosa en venas de gran calibre. Cambiar el sitio de infusión cada 24h por alto riesgo de flebitis necrótica.'] },
      renalAdjustment: { required: true, message: { pt: 'Não usar se o paciente for anúrico. Efeito inútil sem o túbulo.', es: 'No usar si el paciente es anúrico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose em insuficiência hepática moderada a grave. O limite é 20mg/dia máximo.', es: 'Reducir dosis en insuficiencia hepática moderada a grave.' } },
      commonAdverseEffects: { pt: ['Reação no local de infusão (Dor crônica na veia e tromboflebite)', 'Sede insaciável e boca seca', 'Hipocalemia (baixa de potássio)'], es: ['Reacción en el sitio de infusión (Dolor en la vena y flebitis)', 'Sed insaciable y boca seca', 'Hipopotasemia'] },
      dangerousAdverseEffects: { pt: ['Mielinólise Pontina Central (Se o sódio subir mais que 12 mEq em 24h, rompendo a ponte cerebral)', 'Hipotensão aguda severa (Pelo efeito V1a vasodilatador)'], es: ['Mielinolisis Pontina Central (Si el sodio sube muy rápido)', 'Hipotensión aguda severa'] },
      contraindications: {
        absolute: { pt: ['Hiponatremia hipovolêmica (Choque hemorrágico/Desidratação)', 'Alergia a proteínas do milho (o excipiente contém derivado de milho)'], es: ['Hiponatremia hipovolémica', 'Alergia a proteínas del maíz'] },
        relative: { pt: ['Insuficiência cardíaca grave com choque hipotensivo'], es: ['Insuficiencia cardíaca grave con choque hipotensivo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DOS 4 DIAS: O FDA proibiu o uso contínuo de Conivaptana por mais de 4 dias. A inibição prolongada bloqueia as vias de metabolização hepática de forma tão agressiva que transforma a droga em um veneno iatrogênico se usada cronicamente.', es: 'LA REGLA DE LOS 4 DÍAS: La FDA prohibió el uso continuo por más de 4 días. La inhibición prolongada bloquea el hígado de forma agresiva transformando la droga en veneno.' }
      },
      references: {
        pt: 'FDA Label (Vaprisol); Diretrizes AHA/ACC para Insuficiência Cardíaca; Micromedex Renal Dosing.',
        es: 'FDA Label (Vaprisol); Directrices AHA/ACC para Insuficiencia Cardíaca; Micromedex.'
      }
    },

    /* ── CITRATO DE POTÁSSIO ────────────────────────────────────────────── */
    "citrato_de_potassio": {
      name: { pt: 'Citrato de Potássio', es: 'Citrato de Potasio' },
      category: 'urologia',
      icon: '💧',
      color: '#0891B2',
      colorTxt: '#ffffff',
      class: { pt: 'Alcalinizante Urinário / Suplemento Eletrolítico', es: 'Alcalinizante Urinario / Suplemento Electrolítico' },
      indications: {
        pt: ['Prevenção da formação de cálculos renais (Pedras de oxalato de cálcio, ácido úrico e cistina)', 'Acidose Tubular Renal com nefrolitíase por cálcio', 'Hipocalemia (Repositor de potássio)'],
        es: ['Prevención de la formación de cálculos renales (Piedras de oxalato de calcio, ácido úrico y cistina)', 'Acidosis Tubular Renal', 'Hipopotasemia']
      },
      commercialNames: { br: ['Urocit-K', 'Litocit'], ar: ['Urocit-K'] },
      presentation: { pt: ['Comprimidos de Liberação Prolongada (Wax-matrix) 5 mEq, 10 mEq e 15 mEq'], es: ['Comprimidos de Liberación Prolongada 5 mEq, 10 mEq y 15 mEq'] },
      mechanism: {
        pt: 'O "Anticristalizante". O corpo metaboliza o citrato no fígado e gera Bicarbonato. O bicarbonato alcaliniza o sangue e, consequentemente, a urina. Uma urina alcalina IMPEDE que os cristais de ácido úrico e oxalato de cálcio se unam para formar pedras (cálculos). Além disso, a presença direta de citrato na urina age como um escudo químico ao redor do cálcio, não deixando a pedra se formar.',
        es: 'El "Anticristalizante". El cuerpo metaboliza el citrato generando Bicarbonato, que alcaliniza la orina. Una orina alcalina IMPIDE que los cristales se unan para formar piedras. Además, el citrato en la orina actúa como un escudo químico.'
      },
      dose: {
        adult: {
          pt: 'Geralmente 30 a 60 mEq por dia, divididos em 2 a 3 tomadas junto com as refeições (Máximo de 100 mEq/dia).',
          es: 'Generalmente 30 a 60 mEq por día, divididos en 2 a 3 tomas con las comidas.'
        },
        pediatric: {
          pt: 'Uso ajustado por especialista baseado em mEq/kg e monitoramento urinário.',
          es: 'Uso ajustado por especialista basado en mEq/kg.'
        }
      },
      administration: { pt: ['OBRIGATÓRIO ENGOLIR INTEIRO COM UM COPO CHEIO DE ÁGUA E JUNTO COM A COMIDA. Não amassar ou chupar a pílula. A matriz de cera (wax-matrix) costuma sair intacta nas fezes, avisar o paciente (a droga de dentro foi absorvida).'], es: ['OBLIGATORIO TRAGAR ENTERO CON AGUA Y JUNTO A LA COMIDA. La matriz de cera suele salir intacta en las heces, avisar al paciente.'] },
      renalAdjustment: { required: true, message: { pt: 'CONTRAINDICADO formalmente em insuficiência renal crônica grave (Risco altíssimo de parada cardíaca por acúmulo de potássio livre).', es: 'CONTRAINDICADO formalmente en insuficiencia renal crónica grave (Riesgo de parada cardíaca).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade rigorosa.', es: 'Sin necesidad rigurosa.' } },
      commonAdverseEffects: { pt: ['Desconforto gástrico leve', 'Náuseas e flatulência', 'Visualização do "fantasma" do comprimido nas fezes'], es: ['Malestar gástrico leve', 'Náuseas y flatulencia', 'Visualización del "fantasma" del comprimido en heces'] },
      dangerousAdverseEffects: { pt: ['HIPERCALEMIA LETAL (Se os rins não filtrarem, o potássio sobe e o coração para em diástole)', 'Ulceração gastrointestinal perfurante (Se o comprimido de cera ficar parado/travado no esôfago)'], es: ['HIPERPOTASEMIA LETAL (Si los riñones no filtran)', 'Ulceración gastrointestinal perforante (Si el comprimido se atasca)'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Doença de Addison não tratada, Insuficiência Renal, hipercalemia basal', 'Atraso no esvaziamento gástrico ou estenose esofágica (risco de úlcera)'], es: ['Pacientes con Enfermedad de Addison, Insuficiencia Renal, hiperpotasemia basal', 'Retraso en el vaciado gástrico o estenosis esofágica'] },
        relative: { pt: ['Infecção do trato urinário ativa por germes que desdobram ureia (A urina já é alcalina pela infecção)'], es: ['Infección del tracto urinario activa por gérmenes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A QUEIMADURA DE POTÁSSIO: Os comprimidos de Urocit-K são feitos de matriz de cera. Se um paciente com o trânsito intestinal muito lento tomar isso e for deitar, a pílula pode parar no esôfago ou estômago, liberando sal de potássio puro no mesmo ponto por 8 horas, queimando e perfurando o órgão como um ácido.', es: 'LA QUEMADURA DE POTASIO: Los comprimidos son de matriz de cera. Si un paciente los toma y se acuesta, la píldora puede detenerse en el esófago, liberando sal de potasio y perforando el órgano como ácido.' }
      },
      references: {
        pt: 'Diretrizes da EAU/AUA (European Association of Urology); Bula Urocit-K FDA; Tratado de Nefrologia de Brenner & Rector.',
        es: 'Directrices de EAU/AUA; Prospecto Urocit-K FDA; Tratado de Nefrología de Brenner & Rector.'
      }
    },

    /* ── CITRATO DE SÓDIO + ÁCIDO CÍTRICO ───────────────────────────────── */
    "citrato_sodio_acido_citrico": {
      name: { pt: 'Citrato de Sódio + Ácido Cítrico (Solução de Shohl)', es: 'Citrato de Sodio + Ácido Cítrico (Solución de Shohl)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Alcalinizante Sistêmico e Urinário', es: 'Alcalinizante Sistémico y Urinario' },
      indications: {
        pt: ['Manejo da Acidose Metabólica crônica na Doença Renal Crônica', 'Alcalinização urinária prolongada (Prevenção de pedras de ácido úrico)'],
        es: ['Manejo de la Acidosis Metabólica crónica en la Enfermedad Renal Crónica', 'Alcalinización urinaria prolongada (Prevención de piedras de ácido úrico)']
      },
      commercialNames: { br: ['Bicitra', 'Solução de Shohl (Manipulada)'], ar: ['Bicitra'] },
      presentation: { pt: ['Solução Oral líquida (Cada 1 mL contém tipicamente 1 mEq de Sódio e 1 mEq de Bicarbonato potencial)'], es: ['Solución Oral líquida'] },
      mechanism: {
        pt: 'O "Bicarbonato Sem Gás". Na insuficiência renal, o sangue do paciente fica altamente ÁCIDO. A Solução de Shohl fornece íons citrato que são metabolizados pelo ciclo de Krebs no fígado, resultando na geração maciça de BICARBONATO de sódio de forma sistêmica. A enorme vantagem é que, por ser citrato e não "Bicarbonato de Sódio" puro, ela não solta gás carbônico no estômago do paciente, não causando inchaço e dor gástrica.',
        es: 'El "Bicarbonato Sin Gas". En insuficiencia renal, la sangre se vuelve ÁCIDA. La Solución de Shohl proporciona citrato que se metaboliza en el hígado, generando BICARBONATO de sodio. La ventaja es que no libera gas carbónico en el estómago, no causando hinchazón.'
      },
      dose: {
        adult: {
          pt: '10 a 30 mL diluídos em água, 3 a 4 vezes ao dia APÓS as refeições e ao deitar.',
          es: '10 a 30 mL diluidos en agua, 3 a 4 veces al día TRAS las comidas y al acostarse.'
        },
        pediatric: {
          pt: '5 a 15 mL diluídos em água, 3 a 4 vezes ao dia.',
          es: '5 a 15 mL diluidos en agua, 3 a 4 veces al día.'
        }
      },
      administration: { pt: ['É absolutamente crucial DILUIR BEM em um copo de água ou suco antes de ingerir (para prevenir a diarreia osmótica da solução super concentrada).'], es: ['Es absolutamente crucial DILUIR BIEN en un vaso de agua o jugo antes de ingerir (para prevenir la diarrea osmótica).'] },
      renalAdjustment: { required: true, message: { pt: 'Uso guiado pela gasometria. Cuidado extremo com a CARGA DE SÓDIO em pacientes renais oligoanúricos.', es: 'Uso guiado por gasometría. Cuidado extremo con la CARGA DE SODIO en renales anúricos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Requer função hepática intacta (Se o fígado falhar, ele não transforma o citrato em bicarbonato, tornando a droga inútil).', es: 'Requiere función hepática intacta (Si el hígado falla, no transforma el citrato en bicarbonato).' } },
      commonAdverseEffects: { pt: ['Diarreia e ação laxativa osmótica', 'Edema leve nos tornozelos (Sobrecarga de sódio)'], es: ['Diarrea y acción laxante osmótica', 'Edema leve en los tobillos (Sobrecarga de sodio)'] },
      dangerousAdverseEffects: { pt: ['Alcalose Metabólica severa (Causa tremores, tetania e convulsões)', 'Edema Agudo de Pulmão em cardiopatas'], es: ['Alcalosis Metabólica severa (Causa temblores, tetania y convulsiones)', 'Edema Agudo de Pulmón en cardiópatas'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Cardíaca severa com restrição total de sódio', 'Alcalose metabólica/respiratória prévia'], es: ['Insuficiencia Cardíaca severa con restricción total de sodio', 'Alcalosis metabólica/respiratoria previa'] },
        relative: { pt: ['Pacientes que recebem diuréticos poupadores de potássio podem sofrer desbalanço de eletrólitos'], es: ['Pacientes con diuréticos ahorradores de potasio pueden sufrir desbalance de electrolitos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A INTOXICAÇÃO PELO SAL: O Bicitra resolve a acidez renal perfeitamente, mas injeta grandes quantidades de SÓDIO. Se o paciente for um idoso hipertenso, de coração fraco, a acidez vai passar, mas ele irá morrer afogado nos próprios fluidos por insuficiência cardíaca hipervolêmica.', es: 'LA INTOXICACIÓN POR SAL: El Bicitra resuelve la acidez renal, pero inyecta grandes cantidades de SODIO. Si el paciente es anciano hipertenso, la acidez pasará, pero morirá ahogado en sus propios fluidos por insuficiencia cardíaca.' }
      },
      references: {
        pt: 'FDA Label (Bicitra / Shohl Solution); KDIGO Guidelines for CKD Management.',
        es: 'FDA Label (Bicitra); KDIGO Guidelines for CKD Management.'
      }
    },

    /* ── SACARATO DE HIDRÓXIDO FÉRRICO ──────────────────────────────────── */
    "sacarato_hidroxido_ferrico": {
      name: { pt: 'Sacarato de Hidróxido Férrico (Ferro Sacarato)', es: 'Sacarato de Hidróxido Férrico (Hierro Sacarato)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso de Ferro', es: 'Suplemento Intravenoso de Hierro' },
      indications: {
        pt: ['Anemia ferropriva severa em pacientes com DRC (Em hemodiálise ou fase conservadora)', 'Sangramento maciço crônico intolerante a ferro oral'],
        es: ['Anemia ferropénica severa en pacientes con ERC (En hemodiálisis o fase conservadora)', 'Sangrado masivo crónico intolerante a hierro oral']
      },
      commercialNames: { br: ['Venofer', 'Noripurum IV'], ar: ['Venofer', 'Intrafer'] },
      presentation: { pt: ['Ampolas IV contendo 100 mg de ferro elementar em 5 mL (20 mg/mL)'], es: ['Ampollas IV conteniendo 100 mg de hierro elemental en 5 mL'] },
      mechanism: {
        pt: 'A "Injeção de Vida" da Hemodiálise. Como as pílulas de ferro não são absorvidas direito pelo renal crônico, o Ferro Sacarato burla o intestino. A molécula é injetada na veia como um complexo ligado à sacarose. As células de defesa (macrófagos do sistema reticuloendotelial) "comem" esse complexo, soltam o açúcar e doam o Ferro PURO imediatamente para a medula fabricar novas hemácias junto com a Epoetina.',
        es: 'La "Inyección de Vida" de la Hemodiálisis. Como las píldoras no se absorben bien, el Hierro Sacarato burla el intestino. Se inyecta en vena ligado a la sacarosa. Los macrófagos "comen" el complejo y donan el Hierro PURO a la médula para fabricar glóbulos rojos junto con Epoetina.'
      },
      dose: {
        adult: {
          pt: 'DRC Hemodiálise: 100 mg IV de forma lenta ao final de CADA UMA das sessões de diálise contínuas (ex: por 10 dias) até totalizar a dose de reposição (ex: 1.000 mg totais).',
          es: 'ERC Hemodiálisis: 100 mg IV lento al final de CADA sesión de diálisis hasta totalizar la dosis de reposición (ej: 1.000 mg totales).'
        },
        pediatric: {
          pt: '0,5 mg/kg (MÁXIMO de 100 mg/dose) por infusão na diálise.',
          es: '0,5 mg/kg (MÁXIMO de 100 mg/dosis) por infusión en diálisis.'
        }
      },
      administration: { pt: ['A injeção IV NUNCA PODE SER FEITA RÁPIDA (Bolus mínimo 5 min para 100mg, ou infusão em 15-30 min diluída em SF 0,9%). Injetar ferro rápido causa choque anafilactoide severo.'], es: ['La inyección IV NUNCA DEBE SER RÁPIDA. Inyectar hierro rápido causa choque anafilactoide severo.'] },
      renalAdjustment: { required: false, message: { pt: 'Criado especificamente para suprir o renal crônico.', es: 'Creado específicamente para suplir al renal crónico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em doença hepática severa, pois o excesso de ferro ficará aprisionado no fígado doente.', es: 'Evitar en enfermedad hepática severa.' } },
      commonAdverseEffects: { pt: ['Gosto metálico horrível na boca de forma imediata na infusão', 'Queda transitória e leve de pressão arterial intradialítica', 'Cefaleia e dores musculares (costas)'], es: ['Gusto metálico horrible en la boca inmediato en la infusión', 'Caída transitoria de presión arterial', 'Cefalea y dolores musculares'] },
      dangerousAdverseEffects: { pt: ['Choque anafilático e asma letal (Embora 10x mais seguro que o ferro dextrano antigo)', 'Hemocromatose secundária (Destruição do pâncreas e fígado por excesso crônico)'], es: ['Choque anafiláctico (Aunque 10x más seguro que el dextrano)', 'Hemocromatosis secundaria (Destrucción de órganos por exceso)'] },
      contraindications: {
        absolute: { pt: ['Anemias não causadas por falta de ferro (ex: Anemia megaloblástica por vitamina B12)', 'Sobrecarga de ferro comprovada (Ferritina > 1000)'], es: ['Anemias no causadas por falta de hierro', 'Sobrecarga de hierro comprobada'] },
        relative: { pt: ['Pacientes com infecção sistêmica ativa grave ou Sepse (O ferro é a "comida" das bactérias, piorando a infecção)'], es: ['Pacientes con infección sistémica activa o Sepsis (El hierro alimenta a las bacterias)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A COMIDA DO BACTÉRIA: É estritamente proibido administrar Ferro Intravenoso num paciente da UTI que esteja passando por um choque séptico ativo ou bacteremia (infecção no sangue). Bactérias dependem de íons férricos livres para se reproduzir; aplicar Venofer nelas é como jogar gasolina no incêndio.', es: 'LA COMIDA DE LA BACTERIA: Está estrictamente prohibido administrar Hierro Intravenoso a un paciente en la UCI con choque séptico. Las bacterias dependen del hierro para reproducirse; aplicar Venofer es echar gasolina al fuego.' }
      },
      references: {
        pt: 'FDA Label (Venofer); KDIGO Anemia Management; Protocolos da Sociedade Brasileira de Nefrologia.',
        es: 'FDA Label (Venofer); KDIGO Anemia Management; Protocolos Internacionales.'
      }
    },

    /* ── CARBOXIMALTOSE FÉRRICA ─────────────────────────────────────────── */
    "carboximaltose_ferrica": {
      name: { pt: 'Carboximaltose Férrica', es: 'Carboximaltosa Férrica' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso Férrico de Alta Capacidade', es: 'Suplemento Intravenoso Férrico de Alta Capacidad' },
      indications: {
        pt: ['Anemia ferropriva grave onde o ferro oral é ineficaz ou não suportado', 'Pacientes com Insuficiência Cardíaca Sistólica com falta de ferro (Melhora dramática do cansaço independentemente da hemoglobina)', 'Doença Renal Crônica conservadora'],
        es: ['Anemia ferropénica grave donde el hierro oral es ineficaz', 'Pacientes con Insuficiencia Cardíaca Sistólica con falta de hierro', 'Enfermedad Renal Crónica conservadora']
      },
      commercialNames: { br: ['Ferinject', 'Injectafer'], ar: ['Ferinject'] },
      presentation: { pt: ['Frasco-ampola contendo 500 mg ou 1.000 mg de ferro elementar por frasco'], es: ['Vial conteniendo 500 mg o 1.000 mg de hierro elemental por frasco'] },
      mechanism: {
        pt: 'O "Tanque de Guerra do Ferro". O grande problema do Noripurum/Venofer é que não se pode injetar mais que 200mg por dia na veia (libera íons letais na circulação). A Carboximaltose Férrica blindou o ferro dentro de um carboidrato macromolecular super estável. Isso permite ao médico INJETAR MIL MILIGRAMAS (1.000 mg) EM APENAS 15 MINUTOS, enchendo o depósito de ferro do corpo para o ano todo de uma única vez, sem intoxicar o sangue.',
        es: 'El "Tanque de Guerra del Hierro". La Carboximaltosa Férrica blindó el hierro dentro de un carbohidrato macromolecular super estable. Esto permite INYECTAR MIL MILIGRAMOS (1.000 mg) EN SOLO 15 MINUTOS, llenando el depósito para todo el año de una vez, sin intoxicar.'
      },
      dose: {
        adult: {
          pt: 'Peso > 50kg: Infusão Única Intravenosa de 1.000 mg (em 15 minutos). Se necessário, repete a mesma dose em 1 semana. Peso < 50kg: 15 mg/kg em dose única.',
          es: 'Peso > 50kg: Infusión Única Intravenosa de 1.000 mg (en 15 minutos). Peso < 50kg: 15 mg/kg en dosis única.'
        },
        pediatric: {
          pt: 'Limitado e ajustado rigidamente (ex: 15 mg/kg para maiores de 1 ano até o teto estrito do peso).',
          es: 'Limitado y ajustado rígidamente por peso (15 mg/kg).'
        }
      },
      administration: { pt: ['Deve ser diluída exclusivamente em SF 0,9%. Jamais administrar por via intramuscular. O tempo de infusão para 1.000mg é super curto (15 minutos), revolucionando a experiência ambulatorial.'], es: ['Diluir exclusivamente en SF 0,9%. Jamás intramuscular. Tiempo de infusión super corto (15 minutos), revolucionando la atención.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Acompanhar enzimas hepáticas; o fígado absorve boa parte da reserva massiva injetada.', es: 'Acompañar enzimas hepáticas; el hígado absorbe la reserva masiva inyectada.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante e tontura', 'Aumento de pressão arterial transitório', 'Reação escura PERMANENTE na pele se o medicamento vazar da veia durante a aplicação'], es: ['Cefalea marcada y mareo', 'Aumento de presión arterial transitorio', 'Reacción oscura PERMANENTE en piel si el líquido gotea de la vena'] },
      dangerousAdverseEffects: { pt: ['HIPOFOSFATEMIA SEVERA E PROLONGADA (Um perigo exclusivo desta formulação)', 'Anafilaxia letal'], es: ['HIPOFOSFATEMIA SEVERA Y PROLONGADA (Peligro exclusivo de esta formulación)', 'Anafilaxia letal'] },
      contraindications: {
        absolute: { pt: ['Alergia anterior a compostos de ferro parenterais', 'Hemocromatose'], es: ['Alergia anterior a compuestos de hierro parenterales', 'Hemocromatosis'] },
        relative: { pt: ['Pacientes com níveis basais muito baixos de Fósforo'], es: ['Pacientes con niveles basales muy bajos de Fósforo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A PARALISIA PELA FALTA DE FÓSFORO: Diferente dos outros ferros, o Ferinject sequestra violentamente uma proteína chamada FGF23. O resultado bizarro: o rim começa a jogar todo o FÓSFORO do corpo fora na urina de forma incontrolável semanas após a injeção. O paciente pode entrar na emergência em choque de fraqueza e fraturas pela hipofosfatemia massiva. Monitore o fósforo pós-infusão.', es: 'LA PARÁLISIS POR FALTA DE FÓSFORO: A diferencia de otros hierros, Ferinject secuestra violentamente la proteína FGF23. El riñón comienza a expulsar todo el FÓSFORO en la orina de forma incontrolable. El paciente puede entrar en choque por hipofosfatemia masiva. Monitorice.' }
      },
      references: {
        pt: 'FDA Label (Injectafer); Diretrizes da ESC/AHA para Insuficiência Cardíaca com déficit de ferro; Publicações de segurança do FGF23.',
        es: 'FDA Label (Injectafer); Directrices de ESC/AHA para Insuficiencia Cardíaca; Publicaciones de seguridad del FGF23.'
      }
    }

  }); /* fim Object.assign BUILD 420 append */
})();

/* ══════════════════════════════════════════════════════════════════════════
   BUILD 421 — Nefrologia: Ferro IV Pesado e os Protetores Renais Modernos
   +5 drogas: Derisomaltose Férrica | Dextrana Férrica | Gluconato Férrico
              Finerenona | Voclosporina
   category: nefrologia (×5)
   icon: 🫘 color: #0369A1 colorTxt: #ffffff (nefrologia)
══════════════════════════════════════════════════════════════════════════ */
(function(){
  if(!window.NEUROLOGIA_DRUGS_DB || Array.isArray(window.NEUROLOGIA_DRUGS_DB)) window.NEUROLOGIA_DRUGS_DB={};
  Object.assign(window.NEUROLOGIA_DRUGS_DB, {

    /* ── DERISOMALTOSE FÉRRICA ──────────────────────────────────────────── */
    "derisomaltose_ferrica": {
      name: { pt: 'Derisomaltose Férrica', es: 'Derisomaltosa Férrica' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso Férrico de Alta Capacidade', es: 'Suplemento Intravenoso Férrico de Alta Capacidad' },
      indications: {
        pt: ['Anemia ferropriva severa onde o ferro oral é ineficaz ou mal tolerado', 'Necessidade clínica de reposição rápida e massiva de ferro (Alternativa à Carboximaltose)'],
        es: ['Anemia ferropénica severa donde el hierro oral es ineficaz', 'Necesidad clínica de reposición rápida y masiva de hierro']
      },
      commercialNames: { br: ['Monofer'], ar: ['Monofer'] },
      presentation: { pt: ['Ampolas IV contendo 100 mg/mL de ferro elementar (Frascos de 100mg, 500mg, 1000mg)'], es: ['Ampollas IV conteniendo 100 mg/mL de hierro elemental'] },
      mechanism: {
        pt: 'A Evolução Macromolecular. Assim como a Carboximaltose, a Derisomaltose Férrica é um complexo onde o ferro está preso firmemente dentro de uma matriz de carboidrato (isomaltosídeo 1000). A ligação é tão forte que não vaza ferro livre tóxico no sangue. O macrófago "engole" o complexo inteiro. Vantagem biológica: a matriz de carboidrato tem um potencial imunogênico menor, reduzindo o risco de reações alérgicas severas, e causa menos "roubo de fósforo" (FGF23) que a Carboximaltose.',
        es: 'La Evolución Macromolecular. El hierro está atrapado firmemente en una matriz de carbohidrato (isomaltósido 1000). La unión es tan fuerte que no filtra hierro libre tóxico. El macrófago "traga" el complejo. Ventaja: menor riesgo de alergias y causa menos "robo de fósforo" (FGF23) que la Carboximaltosa.'
      },
      dose: {
        adult: {
          pt: 'Injeção única de até 20 mg/kg de peso corporal (Máximo de 1.000 mg em uma única infusão de 15 a 30 minutos).',
          es: 'Inyección única de hasta 20 mg/kg de peso (Máximo de 1.000 mg en una sola infusión de 15 a 30 minutos).'
        },
        pediatric: {
          pt: 'Uso não estabelecido com segurança em menores de 18 anos na maioria das diretrizes.',
          es: 'Uso no establecido con seguridad en menores de 18 años.'
        }
      },
      administration: { pt: ['Infusão IV diluída em SF 0,9%. Não administrar como injeção intramuscular rápida.'], es: ['Infusión IV diluida en SF 0,9%. No administrar como inyección intramuscular.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em doenças hepáticas crônicas graves (como cirrose descompensada), para evitar acúmulo de ferro no parênquima.', es: 'Contraindicado en enfermedades hepáticas crónicas graves.' } },
      commonAdverseEffects: { pt: ['Gosto metálico transitório', 'Rubor facial e dor de cabeça durante a infusão', 'Dor lombar aguda (Reação de Fishbane)'], es: ['Gusto metálico transitorio', 'Rubor facial y dolor de cabeza', 'Dolor lumbar agudo (Reacción de Fishbane)'] },
      dangerousAdverseEffects: { pt: ['Reação anafilactoide / Hipersensibilidade grave (Apesar de menor incidência, ainda possível)', 'Hipofosfatemia (Ocorre, mas em menor grau que Ferinject)'], es: ['Reacción anafilactoide / Hipersensibilidad grave', 'Hipofosfatemia'] },
      contraindications: {
        absolute: { pt: ['Sobrecarga de ferro (Hemocromatose)', 'Bacteremia aguda ou sepse'], es: ['Sobrecarga de hierro', 'Bacteriemia aguda o sepsis'] },
        relative: { pt: ['Pacientes com lúpus eritematoso sistêmico ou artrite reumatoide ativa (Pode exacerbar a inflamação articular aguda)'], es: ['Pacientes con lupus o artritis reumatoide activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A REAÇÃO DE FISHBANE: Durante a infusão, o paciente pode apresentar subitamente dor severa nas costas/peito associada a rubor, sem alteração de pressão (não é anafilaxia!). É uma reação peculiar aos ferros IV (Reação de Fishbane). A conduta é PAUSAR a infusão por 15 minutos até a dor passar, e depois retomar mais devagar.', es: 'LA REACCIÓN DE FISHBANE: Durante la infusión, el paciente puede sentir dolor severo en la espalda sin baja de presión (¡no es anafilaxia!). La conducta es PAUSAR la infusión 15 min y retomar más lento.' }
      },
      references: {
        pt: 'FDA Label (Monoferric); KDIGO Anemia Guidelines; Artigos de Fishbane S. et al. sobre segurança do ferro IV.',
        es: 'FDA Label (Monoferric); KDIGO Anemia Guidelines; Artículos de Fishbane S. sobre hierro IV.'
      }
    },

    /* ── DEXTRANA FÉRRICA ───────────────────────────────────────────────── */
    "dextrana_ferrica": {
      name: { pt: 'Dextrana Férrica (Ferro Dextrano)', es: 'Dextrano Férrico (Hierro Dextrano)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso Férrico de Primeira Geração', es: 'Suplemento Intravenoso Férrico de Primera Generación' },
      indications: {
        pt: ['Anemia ferropriva documentada em pacientes intolerantes ao ferro oral (Medicamento histórico, de uso cada vez mais restrito devido aos riscos)'],
        es: ['Anemia ferropénica en pacientes intolerantes al hierro oral (Medicamento histórico, uso restringido por riesgos)']
      },
      commercialNames: { br: ['Dexfer', 'CosmoFer (Histórico)'], ar: ['Hierro Dextran'] },
      presentation: { pt: ['Ampolas IV/IM contendo 50 mg/mL de ferro elementar'], es: ['Ampollas IV/IM conteniendo 50 mg/mL de hierro elemental'] },
      mechanism: {
        pt: 'O "Avô dos Ferros Venosos". O ferro é ligado a moléculas poliméricas de dextrano (um tipo de carboidrato que o corpo humano estranha muito). O complexo é muito grande e exige que os macrófagos o fagocitem para quebrar a ligação lentamente e liberar o ferro. Por ser muito estranho ao sistema imune, anticorpos anti-dextrano pré-existentes na circulação do paciente podem atacar a medicação instantes após ela entrar na veia.',
        es: 'El "Abuelo de los Hierros Venosos". El hierro se une a moléculas de dextrano. El complejo es muy grande y exige que los macrófagos lo rompan. Al ser extraño al sistema inmune, anticuerpos anti-dextrano pueden atacar la medicación instantes tras entrar en vena.'
      },
      dose: {
        adult: {
          pt: 'DOSE TESTE DE 25 mg (0,5 mL) É ABSOLUTAMENTE OBRIGATÓRIA. Se não houver reação em 1 hora, administra-se o restante da dose estipulada.',
          es: 'DOSIS PRUEBA DE 25 mg (0,5 mL) ES ABSOLUTAMENTE OBLIGATORIA. Si no hay reacción en 1 hora, se administra el resto.'
        },
        pediatric: {
          pt: 'Dose teste obrigatória. Cálculo conforme fórmula de deficiência de ferro no peso magro.',
          es: 'Dosis prueba obligatoria. Cálculo según fórmula de déficit de hierro.'
        }
      },
      administration: { pt: ['Infusão IV lenta sob monitoramento contínuo em ambiente hospitalar com carrinho de parada (adrenalina) do lado. Pode ser feito IM (técnica em Z profunda), mas dói brutalmente e mancha a pele para sempre.'], es: ['Infusión IV lenta bajo monitoreo en ambiente con carro de paro. Puede hacerse IM (técnica Z), pero duele brutalmente y mancha la piel para siempre.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Precaução em doença hepática (Sobrecarga).', es: 'Precaución en enfermedad hepática.' } },
      commonAdverseEffects: { pt: ['Artralgia, mialgia e febre (doença do soro-símile nos dias seguintes)', 'Sabor metálico', 'Mancha marrom escura e permanente se injetado errado (IM/SC)'], es: ['Artralgia, mialgia y fiebre', 'Sabor metálico', 'Mancha marrón oscura permanente si se inyecta mal'] },
      dangerousAdverseEffects: { pt: ['ANAFILAXIA FULMINANTE LETAL (Choque imediato com asfixia e parada cardíaca nos primeiros mililitros da droga)'], es: ['ANAFILAXIA FULMINANTE LETAL (Choque inmediato con asfixia y parada en los primeros mililitros)'] },
      contraindications: {
        absolute: { pt: ['Alergia a Dextrano', 'Fase aguda de doenças infecciosas'], es: ['Alergia a Dextrano', 'Fase aguda de enfermedades infecciosas'] },
        relative: { pt: ['Asma grave, eczema crônico (Pacientes atópicos têm muito mais chance de morrer na infusão)'], es: ['Asma grave, eccema crónico (Mayor riesgo de morir en la infusión)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'BLACK BOX DO CHOQUE (DOSE TESTE): A Dextrana Férrica CARREGA O MAIOR AVISO DE MORTE SÚBITA entre as formulações de ferro. É ILEGAL e antiético realizar a infusão sem aplicar a DOSE TESTE de 25 mg primeiro e esperar 60 minutos observando o paciente respirar. E atenção: passar na dose teste não impede anafilaxia na dose completa, vigie sempre.', es: 'BLACK BOX DEL CHOQUE: Es ILEGAL realizar la infusión sin aplicar la DOSIS PRUEBA de 25 mg primero y esperar 60 min. Pasar la prueba no impide anafilaxia después, vigile.' }
      },
      references: {
        pt: 'FDA Black Box Warning (Iron Dextran); Guidelines de infusão de ferro da Hematology Association.',
        es: 'FDA Black Box Warning (Iron Dextran); Guidelines de infusión de la Hematology Association.'
      }
    },

    /* ── GLUCONATO FÉRRICO ──────────────────────────────────────────────── */
    "gluconato_ferrico": {
      name: { pt: 'Gluconato Férrico Sódico', es: 'Gluconato Férrico de Sodio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso Férrico (Complexo de Peso Molecular Médio)', es: 'Suplemento Intravenoso Férrico (Complejo de Peso Molecular Medio)' },
      indications: {
        pt: ['Anemia por deficiência de ferro em pacientes adultos e pediátricos com DRC crônica, frequentemente em hemodiálise (junto a Epoetina)'],
        es: ['Anemia por deficiencia de hierro en pacientes con ERC, frecuentemente en hemodiálisis (junto a Epoetina)']
      },
      commercialNames: { br: ['Ferrlecit'], ar: ['Ferrlecit'] },
      presentation: { pt: ['Ampolas IV 62,5 mg de ferro elementar por 5 mL'], es: ['Ampollas IV 62,5 mg de hierro elemental por 5 mL'] },
      mechanism: {
        pt: 'O "Tratamento Fracionado". O Gluconato Férrico é um complexo onde o ferro está preso ao ácido glucônico. É mais seguro imunologicamente que o Dextrano, porém a sua estrutura é menos estável que o Ferro Sacarato. Devido a essa "fragilidade" estrutural, ele não pode ser injetado em altas doses (como o Ferinject), ou soltaria ferro livre no sangue causando intoxicação. A sua vocação é a administração seriada de pequenas doses.',
        es: 'El "Tratamiento Fraccionado". El hierro está unido al ácido glucónico. Es más seguro que el Dextrano, pero menos estable que el Hierro Sacarato. Por esa "fragilidad", no puede inyectarse en altas dosis. Su vocación son pequeñas dosis seriadas.'
      },
      dose: {
        adult: {
          pt: 'Hemodiálise: 125 mg via Intravenosa (infusão lenta) por sessão consecutiva de diálise (ex: 8 sessões consecutivas até totalizar 1.000 mg).',
          es: 'Hemodiálisis: 125 mg IV por sesión de diálisis (ej: 8 sesiones consecutivas hasta 1.000 mg).'
        },
        pediatric: {
          pt: '1,5 mg/kg (MÁXIMO de 125 mg/dose) diluídos e infundidos em 1 hora.',
          es: '1,5 mg/kg (MÁXIMO 125 mg/dosis) diluidos en 1 hora.'
        }
      },
      administration: { pt: ['A infusão deve ser feita durante a sessão de hemodiálise (na linha venosa extracorpórea) de forma lenta, ou injetada ao longo de no mínimo 10 minutos (NUNCA empurrar rápido).'], es: ['Infusión en la línea de hemodiálisis mínimo 10 minutos. ¡NUNCA empujar rápido!'] },
      renalAdjustment: { required: false, message: { pt: 'Feito para DRC.', es: 'Hecho para ERC.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Monitorar TGO/TGP; fígado é o reservatório natural do ferro.', es: 'Monitorear transaminasas; el hígado es el reservorio natural.' } },
      commonAdverseEffects: { pt: ['Cãibras nas pernas durante a diálise', 'Hipotensão transitória', 'Náusea e dor abdominal'], es: ['Calambres en piernas en diálisis', 'Hipotensión transitoria', 'Náusea y dolor abdominal'] },
      dangerousAdverseEffects: { pt: ['Reação de hipersensibilidade fatal (Rara, mas não exige dose-teste pelo FDA, requerendo vigilância)'], es: ['Reacción de hipersensibilidad fatal (Rara, no exige dosis de prueba, pero requiere vigilancia)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao gluconato de sódio ou complexo de ferro', 'Anemia não-ferropriva'], es: ['Hipersensibilidad al gluconato o al complejo de hierro', 'Anemia no ferropénica'] },
        relative: { pt: ['Infecção ativa (bacteriana)'], es: ['Infección activa bacteriana'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'HIPOTENSÃO DO FERRO LIVRE: Se o Gluconato for injetado em "Bolus rápido" pelo enfermeiro apressado, a molécula quebra no sangue. O ferro livre atinge o coração causando vasodilatação sistêmica maciça, e a pressão do paciente em diálise despenca perigosamente (Síncope Induzida por Ferro).', es: 'HIPOTENSIÓN POR HIERRO LIBRE: Si el Gluconato se inyecta rápido, la molécula se rompe. El hierro libre causa vasodilatación masiva y la presión del paciente se desploma (Síncope Inducido por Hierro).' }
      },
      references: {
        pt: 'FDA Label (Ferrlecit); Protocolo de Anemia da National Kidney Foundation.',
        es: 'FDA Label (Ferrlecit); Protocolo de Anemia de National Kidney Foundation.'
      }
    },

    /* ── FINERENONA ─────────────────────────────────────────────────────── */
    "finerenona": {
      name: { pt: 'Finerenona', es: 'Finerenona' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista Não-Esteroide do Receptor Mineralocorticoide (nsMRA)', es: 'Antagonista No Esteroideo del Receptor Mineralocorticoide (nsMRA)' },
      indications: {
        pt: ['Doença Renal Crônica associada a Diabetes Tipo 2 (Com albuminúria) - Retarda a perda da função renal, insuficiência cardíaca e risco de morte cardiovascular'],
        es: ['Enfermedad Renal Crónica asociada a Diabetes Tipo 2 (Con albuminuria) - Retrasa pérdida de función renal y muerte CV']
      },
      commercialNames: { br: ['Kerendia'], ar: ['Kerendia'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg'], es: ['Comprimidos recubiertos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'A "Defesa Cega da Aldosterona". Espironolactona é ótima para o coração, mas age com uma estrutura esteroide (causa ginecomastia) e sobe o potássio violentamente. A Finerenona é um bloqueador do receptor de aldosterona NÃO-ESTEROIDEO. Ela se encaixa de forma mais equilibrada entre o coração e os rins, cortando a sinalização inflamatória e fibrótica (cicatrizes) que o Diabetes faz no rim, reduzindo a perda de proteína (albuminúria) com um risco ligeiramente menor de hipercalemia fatal.',
        es: 'La "Defensa Ciega de la Aldosterona". La Espironolactona causa ginecomastia y sube el potasio violentamente. La Finerenona es un bloqueador NO ESTEROIDEO. Corta la señalización inflamatoria y fibrótica que la Diabetes hace en el riñón, bajando la proteína en orina con menor riesgo de hiperpotasemia fatal.'
      },
      dose: {
        adult: {
          pt: 'Depende da Taxa de Filtração Glomerular (eGFR). Se eGFR > 60: 20 mg UMA VEZ ao dia. Se eGFR entre 25-60: 10 mg ao dia. (Ajuste ditado também pelo nível de Potássio sérico).',
          es: 'Depende del filtrado glomerular (eGFR). Si eGFR > 60: 20 mg UNA VEZ al día. Si eGFR 25-60: 10 mg. (Ajuste también por nivel de Potasio).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário. O nível de potássio no sangue DEVE ser medido 4 semanas após iniciar ou aumentar a dose.'], es: ['Uso oral diario. El nivel de potasio DEBE medirse 4 semanas tras iniciar o aumentar dosis.'] },
      renalAdjustment: { required: true, message: { pt: 'Não iniciar se eGFR < 25 mL/min/1.73m². Descontinuar se eGFR cair para menos de 15.', es: 'No iniciar si eGFR < 25. Descontinuar si eGFR cae a menos de 15.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não recomendado em insuficiência hepática grave (Child-Pugh C).', es: 'No recomendado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Hipercalemia (Potássio elevado, o mais crítico)', 'Hipotensão', 'Hiponatremia leve'], es: ['Hiperpotasemia (Potasio elevado, el más crítico)', 'Hipotensión', 'Hiponatremia leve'] },
      dangerousAdverseEffects: { pt: ['Arritmia por hipercalemia fatal (Se o potássio sérico passar de 5,5 mEq/L)'], es: ['Arritmia por hiperpotasemia fatal (Si el potasio pasa de 5,5 mEq/L)'] },
      contraindications: {
        absolute: { pt: ['Potássio basal > 5,0 mEq/L antes de iniciar', 'Uso concomitante com inibidores potentes do CYP3A4'], es: ['Potasio basal > 5,0 mEq/L antes de iniciar', 'Uso con inhibidores potentes de CYP3A4'] },
        relative: { pt: ['Pacientes que não conseguem fazer exames de sangue rotineiros para checar eletrólitos'], es: ['Pacientes que no pueden hacerse análisis de sangre rutinarios'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A GINÁSTICA DO POTÁSSIO: A droga salva o rim diabético da falência, mas a margem de segurança é estreita. O paciente geralmente JÁ TOMA Losartana/Enalapril (que sobem o potássio). Adicionar Finerenona eleva o potássio ainda mais. Se o potássio bater 5.6 mEq/L, a droga DEVE ser pausada até voltar para menos de 5.0.', es: 'LA GIMNASIA DEL POTASIO: El paciente YA TOMA Losartán (que sube el potasio). Añadir Finerenona lo eleva más. Si el potasio llega a 5.6 mEq/L, la droga DEBE ser pausada hasta bajar a menos de 5.0.' }
      },
      references: {
        pt: 'FDA Label (Kerendia); FIDELIO-DKD e FIGARO-DKD Trials; Diretrizes ADA/KDIGO 2022 para DRC em Diabetes.',
        es: 'FDA Label (Kerendia); FIDELIO-DKD Trial; Directrices ADA/KDIGO 2022 para ERC en Diabetes.'
      }
    },

    /* ── VOCLOSPORINA ───────────────────────────────────────────────────── */
    "voclosporina": {
      name: { pt: 'Voclosporina', es: 'Voclosporina' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Imunossupressor (Inibidor de Calcineurina de 2ª Geração)', es: 'Inmunosupresor (Inhibidor de Calcineurina de 2ª Generación)' },
      indications: {
        pt: ['Nefrite Lúpica Ativa (Inflamação destrutiva dos rins pelo Lúpus) - Sempre associada a Micofenolato de Mofetila e Corticoides'],
        es: ['Nefritis Lúpica Activa (Inflamación destructiva del riñón por Lupus) - Siempre asociada a Micofenolato y Corticoides']
      },
      commercialNames: { br: ['Lupkynis (Importação especializada)'], ar: ['Lupkynis'] },
      presentation: { pt: ['Cápsulas 7,9 mg'], es: ['Cápsulas 7,9 mg'] },
      mechanism: {
        pt: 'A "Blindagem do Podócito". Como um derivado potente da Ciclosporina, ela entra nos linfócitos T e bloqueia a calcineurina, impedindo a produção de IL-2 (parando o ataque autoimune do Lúpus). O efeito FANTÁSTICO renal: Ela atua diretamente nos podócitos (as células do "ralo" do filtro renal), estabilizando o citoesqueleto deles. O ralo do rim para de vazar proteína (Proteinúria) quase que instantaneamente, salvando o órgão da fibrose lúpica.',
        es: 'El "Blindaje del Podocito". Bloquea la calcineurina en Linfocitos T, parando el ataque del Lupus. El efecto FANTÁSTICO renal: Actúa en los podocitos, estabilizando su esqueleto. El riñón deja de fugar proteína casi al instante.'
      },
      dose: {
        adult: {
          pt: '23,7 mg (3 cápsulas de 7,9 mg) DUAS VEZES ao dia (Total: 6 cápsulas diárias).',
          es: '23,7 mg (3 cápsulas de 7,9 mg) DOS VECES al día (Total: 6 cápsulas al día).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Tomar as doses com 12 horas de intervalo. Engolir inteira. Não abrir nem mastigar.'], es: ['Tomar dosis cada 12 horas. Tragar entera.'] },
      renalAdjustment: { required: true, message: { pt: 'Paradoxo: A droga salva o rim lúpico, mas causa contração arterial que machuca o rim. Se o eGFR cair > 20% do basal, a dose DEVE ser reduzida para 15,8 mg 2x/dia.', es: 'Paradoja: Si eGFR cae > 20%, la dosis DEBE reducirse a 15,8 mg 2x/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir para 15,8 mg 2x/dia na insuficiência hepática leve/moderada. Evitar na grave.', es: 'Reducir a 15,8 mg 2x/día en insuficiencia hepática leve/moderada. Evitar en grave.' } },
      commonAdverseEffects: { pt: ['HIPERTENSÃO (Efeito colateral crítico de classe)', 'Declínio da taxa de filtração glomerular (eGFR) nos primeiros dias', 'Diarreia, dor de cabeça e tosse'], es: ['HIPERTENSIÓN (Efecto colateral crítico de clase)', 'Declive del eGFR en los primeros días', 'Diarrea, dolor de cabeza'] },
      dangerousAdverseEffects: { pt: ['NEFROTOXICIDADE AGUDA (Isquemia do filtro renal)', 'Infecções oportunistas graves e reativação viral (Herpes, CMV)', 'Malignidade induzida por imunossupressão (Linfoma)'], es: ['NEFROTOXICIDAD AGUDA (Isquemia del filtro renal)', 'Infecciones oportunistas graves y reactivación viral', 'Malignidad por inmunosupresión'] },
      contraindications: {
        absolute: { pt: ['Uso associado de Inibidores Potentes do CYP3A4 (Cetoconazol, Claritromicina)', 'Pressão Arterial > 165/105 mmHg antes de iniciar'], es: ['Uso con Inhibidores Potentes del CYP3A4', 'Presión Arterial > 165/105 mmHg antes de iniciar'] },
        relative: { pt: ['Uso concomitante com Ciclofosfamida não foi estudado e é desencorajado no protocolo'], es: ['Uso con Ciclofosfamida es desalentado en el protocolo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A DROGA QUE ESTRANGULA A ARTÉRIA: Inibidores de calcineurina (como Voclosporina e Tacrolimo) curam a imunidade, mas fazem a artéria AFERENTE do rim (o cano de entrada de sangue) sofrer um vasoespasmo violento. Isso faz o rim "secar" temporariamente, elevando a Creatinina do paciente no sangue assustadoramente nas primeiras semanas. É preciso diferenciar toxicidade da medicação vs falência do Lúpus.', es: 'LA DROGA QUE ESTRANGULA LA ARTERIA: Causan vasoespasmo violento en la arteria del riñón. La Creatinina sube asustadoramente las primeras semanas. Hay que diferenciar toxicidad vs falla por Lupus.' }
      },
      references: {
        pt: 'FDA Label (Lupkynis); AURORA 1 Trial; Diretrizes KDIGO 2024 para Nefrite Lúpica.',
        es: 'FDA Label (Lupkynis); AURORA 1 Trial; Directrices KDIGO 2024 para Nefritis Lúpica.'
      }
    }

  }); /* fim Object.assign BUILD 421 append */
})();
