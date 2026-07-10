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
