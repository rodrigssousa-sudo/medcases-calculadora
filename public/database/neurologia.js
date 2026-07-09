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
    }

  }); /* fim Object.assign NEUROLOGIA_DRUGS_DB — BUILD 396
         BUILD 396 — Triptanos (Antimigranosos):
                     Sumatriptana (Imigran/Sumax) — Pioneiro, 5-HT1B/1D
                     Zolmitriptana (Zomig) — 2ª Geração, lipofílico, ODT
                     Rizatriptana (Maxalt) — Ultra-Rápido, ODT, ⚠ Propranolol
                     Naratriptana (Naramig) — Ação Lenta, Gentil, Menstrual
                     Eletriptana (Relpax) — Potente, ⚠ CYP3A4, refratários */
})();
