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
    }

  }); /* fim Object.assign NEUROLOGIA_DRUGS_DB — BUILD 399
         BUILD 396 — Triptanos: Sumatriptana, Zolmitriptana, Rizatriptana, Naratriptana, Eletriptana
         BUILD 397 — Triptanos+Ergot: Almotriptana, Frovatriptana, Ergotamina, DHE, Erenumabe
         BUILD 398 — Anti-CGRP+Gepantos: Fremanezumabe, Galcanezumabe, Eptinezumabe, Ubrogepanta, Rimegepanta
         BUILD 399 — Gepantos+Ditano+Demência:
                     Atogepanta (Qulipta) — Gepanto profilático oral diário
                     Zavegepanta (Zavzpret) — Gepanto nasal ultrarrápido, Disgeusia
                     Lasmiditana (Reyvow) — Ditano 5-HT1F, ⚠ Regra 8h, highAlert
                     Donepezila (Eranz) — AChE-I Alzheimer, ⚠ highAlert
                     Rivastigmina (Exelon/Patch) — AChE-I duplo, Parkinson+Alzheimer, ⚠ highAlert */
})();
