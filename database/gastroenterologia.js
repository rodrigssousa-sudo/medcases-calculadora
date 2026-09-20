(function () {
  'use strict';
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.GASTROENTEROLOGIA_DRUGS_DB)) {
    window.GASTROENTEROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

    /* ── BUILD 403 — Regulação Gástrica ── */

    /* ── TRIMEBUTINA ────────────────────────────────────────────────────── */
    "trimebutina": {
      id: 'trimebutina',
      name: { pt: 'Trimebutina', es: 'Trimebutina' },
      category: 'gastroenterologia',
      class: { pt: 'Modulador da Motilidade Intestinal (Agonista Encefalinérgico)', es: 'Modulador de la Motilidad Intestinal (Agonista Encefalinérgico)' },
      indications: {
        pt: ['Síndrome do Intestino Irritável (IBS)', 'Espasmos e cólicas gastrointestinais', 'Transtornos do trânsito biliar'],
        es: ['Síndrome del Intestino Irritable (SII)', 'Espasmos y cólicos gastrointestinales', 'Trastornos del tránsito biliar']
      },
      commercialNames: { br: ['Digedrat', 'Trimeb'], ar: ['Miopropan', 'Muvett'] },
      presentation: { pt: ['Comprimidos 200 mg', 'Suspensão oral', 'Cápsulas de liberação prolongada 300 mg'], es: ['Comprimidos 200 mg', 'Suspensión oral', 'Cápsulas de liberación prolongada 300 mg'] },
      mechanism: {
        pt: 'Um "Regulador Inteligente". Diferente dos antiespasmódicos puros que apenas paralisam o intestino, a Trimebutina atua nos receptores opioides periféricos (Mu, Kappa e Delta) da parede intestinal. Se o intestino está acelerado (diarreia/cólica), ela freia. Se o intestino está paralisado (constipação), ela estimula. Ela "afina os instrumentos" do trato digestivo devolvendo o ritmo normal.',
        es: 'Un "Regulador Inteligente". A diferencia de los antiespasmódicos que solo paralizan el intestino, la Trimebutina actúa en los receptores opioides periféricos (Mu, Kappa y Delta). Si el intestino está acelerado, frena. Si está paralizado, estimula. "Afina" el tracto digestivo devolviendo el ritmo.'
      },
      dose: {
        adult: { pt: '200 mg via oral, 2 a 3 vezes ao dia (geralmente antes das refeições).', es: '200 mg vía oral, 2 a 3 veces al día (generalmente antes de las comidas).' },
        pediatric: { pt: 'Uso pediátrico sob supervisão (Suspensão): 4,8 mg/kg/dia divididos em 3 doses.', es: 'Uso pediátrico bajo supervisión (Suspensión): 4,8 mg/kg/día divididos en 3 dosis.' }
      },
      administration: { pt: ['Tomar preferencialmente 20 a 30 minutos ANTES das principais refeições para preparar o intestino.'], es: ['Tomar preferentemente 20 a 30 minutos ANTES de las principales comidas para preparar el intestino.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolismo de primeira passagem, mas seguro em hepatopatias leves a moderadas.', es: 'Metabolismo de primera pasada, pero seguro en hepatopatías leves a moderadas.' } },
      commonAdverseEffects: { pt: ['Boca seca leve', 'Sonolência ou fadiga passageira (em até 3% dos pacientes)', 'Gosto amargo'], es: ['Boca seca leve', 'Somnolencia o fatiga pasajera (en hasta 3%)', 'Sabor amargo'] },
      dangerousAdverseEffects: { pt: ['Síncope vasovagal (raríssimo)'], es: ['Síncope vasovagal (rarísimo)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade à trimebutina'], es: ['Hipersensibilidad a la trimebutina'] },
        relative: { pt: ['Gravidez (Primeiro Trimestre) por falta de estudos de segurança absoluta'], es: ['Embarazo (Primer Trimestre) por falta de estudios de seguridad'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O TOQUE NA PELE: Muitas vezes o paciente acha que a trimebutina não funciona, mas o efeito de reparo na Síndrome do Intestino Irritável leva de 2 a 4 semanas para alterar a hipersensibilidade visceral (a "dor fantasma" na barriga).', es: 'EL EFECTO A LARGO PLAZO: A menudo el paciente cree que no funciona, pero el efecto de reparación en el SII lleva de 2 a 4 semanas para alterar la hipersensibilidad visceral (el "dolor fantasma").' }
      }
    },

    /* ── SIMETICONA ─────────────────────────────────────────────────────── */
    "simeticona": {
      id: 'simeticona',
      name: { pt: 'Simeticona (Dimeticona)', es: 'Simeticona (Dimeticona)' },
      category: 'gastroenterologia',
      class: { pt: 'Antiflatulento (Agente Antiespumante)', es: 'Antiflatulento (Agente Antiespumante)' },
      indications: {
        pt: ['Alívio sintomático do excesso de gases no trato gastrointestinal (Meteorismo, flatulência)', 'Preparo intestinal para Endoscopia, Colonoscopia ou Ultrassom Abdominal'],
        es: ['Alivio sintomático del exceso de gases en el tracto gastrointestinal (Meteorismo, flatulencia)', 'Preparación intestinal para Endoscopia, Colonoscopia o Ecografía Abdominal']
      },
      commercialNames: { br: ['Luftal', 'Flagass'], ar: ['Mylanta Gas', 'Factor AG'] },
      presentation: { pt: ['Comprimidos 40 mg, Cápsulas gelatinosas 125 mg, Gotas 75 mg/mL'], es: ['Comprimidos 40 mg, Cápsulas gelatinosas 125 mg, Gotas 75 mg/mL'] },
      mechanism: {
        pt: 'Pura física, zero biologia. A Simeticona é um silicone inerte que NÃO É ABSORVIDO pelo corpo. Ela age alterando a "tensão superficial" das pequenas bolhas de ar presas no muco do estômago e intestino. Ao romper a tensão, as bolhas pequenas se unem (coalescem) formando bolhas gigantes, que são facilmente arrotadas ou eliminadas como flatos, desinchando a barriga.',
        es: 'Física pura, cero biología. Es un silicón inerte que NO ES ABSORBIDO. Altera la "tensión superficial" de las pequeñas burbujas de aire atrapadas en el moco. Las burbujas pequeñas se unen formando burbujas gigantes, que son fácilmente eructadas o expulsadas, desinflando la barriga.'
      },
      dose: {
        adult: { pt: '40 a 125 mg via oral, 3 a 4 vezes ao dia (após as refeições e ao deitar). Máximo 500 mg/dia.', es: '40 a 125 mg vía oral, 3 a 4 veces al día (tras las comidas y al acostarse). Máximo 500 mg/día.' },
        pediatric: { pt: 'Bebês (Cólica gasosa): 3 a 5 gotas (dependendo da concentração) misturadas no leite ou direto na boca, 3 a 4x/dia.', es: 'Bebés (Cólico de gases): 3 a 5 gotas mezcladas en la leche o directo en la boca, 3 a 4x/día.' }
      },
      administration: { pt: ['Tomar APÓS as refeições. As cápsulas gelatinosas (125mg) costumam ter efeito mais rápido.'], es: ['Tomar TRAS las comidas. Las cápsulas gelatinosas (125mg) suelen tener efecto más rápido.'] },
      renalAdjustment: { required: false, message: { pt: 'Não há absorção sistêmica. Sai intacta nas fezes.', es: 'No hay absorción sistémica. Sale intacta en heces.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não passa pelo fígado.', es: 'No pasa por el hígado.' } },
      commonAdverseEffects: { pt: ['Basicamente nenhum efeito colateral sistêmico. Pode amolecer levemente as fezes.'], es: ['Básicamente ningún efecto colateral sistémico. Puede ablandar levemente las heces.'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade extrema aos excipientes (corantes das cápsulas)'], es: ['Hipersensibilidad extrema a los excipientes (colorantes de las cápsulas)'] },
      contraindications: {
        absolute: { pt: ['Perfuração ou obstrução intestinal mecânica ativa'], es: ['Perforación u obstrucción intestinal mecánica activa'] },
        relative: { pt: ['Nenhuma relevante clinicamente.'], es: ['Ninguna relevante clínicamente.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O REMÉDIO DO ULTRASSOM: A Simeticona é essencial antes do ultrassom de abdome. O som do ultrassom não atravessa o ar. Se o intestino estiver cheio de espuma e gases, o médico não consegue ver a vesícula ou o pâncreas ("Borrado por interposição gasosa").', es: 'EL REMEDIO DE LA ECOGRAFÍA: La Simeticona es esencial antes de la ecografía abdominal. El sonido no atraviesa el aire. Si el intestino está lleno de espuma, el médico no logra ver la vesícula o el páncreas.' }
      }
    },

    /* ── PROCLORPERAZINA ────────────────────────────────────────────────── */
    "proclorperazina": {
      "name": {
        "pt": "Proclorperazina",
        "es": "Proclorperazina"
      },
      "category": "gastro",
      "class": {
        "pt": "Fenotiazina antagonista D2",
        "es": "Fenotiazina antagonista D2"
      },
      "indications": {
        "pt": [
          "Náuseas e vômitos graves"
        ],
        "es": [
          "Náuseas y vómitos graves"
        ]
      },
      "mechanism": {
        "pt": "Antagoniza receptores dopaminérgicos D2 na zona gatilho quimiorreceptora, com atividade antiemética e risco de EPS.",
        "es": "Antagoniza receptores dopaminérgicos D2 en la zona gatillo quimiorreceptora, con actividad antiemética y riesgo de EPS."
      },
      "dose": {
        "adult": {
          "pt": "VO para náuseas/vômitos graves: 5–10 mg 3–4x/dia conforme resposta e produto; usar a menor dose efetiva.",
          "es": "VO para náuseas/vómitos graves: 5–10 mg 3–4x/día según respuesta y producto; usar la menor dosis efectiva."
        },
        "pediatric": {
          "pt": "Uso pediátrico antiemético exige dose por peso/idade e cautela elevada para EPS; não extrapolar esquema adulto.",
          "es": "El uso pediátrico antiemético exige dosis por peso/edad y gran precaución por EPS; no extrapolar el esquema adulto."
        }
      },
      "administration": {
        "pt": [
          "Usar pelo menor tempo necessário",
          "Monitorar distonia, acatisia e sedação"
        ],
        "es": [
          "Usar durante el menor tiempo necesario",
          "Monitorizar distonía, acatisia y sedación"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal fixo bem estabelecido; titular com cautela.",
          "es": "Sin ajuste renal fijo bien establecido; titular con precaución."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela em hepatopatia; fenotiazinas podem causar lesão hepática/colestase.",
          "es": "Usar precaución en hepatopatía; las fenotiazinas pueden causar lesión hepática/colestasis."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sonolência",
          "Hipotensão",
          "Boca seca",
          "Acatisia"
        ],
        "es": [
          "Somnolencia",
          "Hipotensión",
          "Boca seca",
          "Acatisia"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Distonia/EPS",
          "Síndrome neuroléptica maligna",
          "Discinesia tardia",
          "Prolongamento de QT"
        ],
        "es": [
          "Distonía/EPS",
          "Síndrome neuroléptico maligno",
          "Discinesia tardía",
          "Prolongación de QT"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Coma/depressão importante do SNC",
            "Hipersensibilidade a fenotiazinas"
          ],
          "es": [
            "Coma/depresión importante del SNC",
            "Hipersensibilidad a fenotiazinas"
          ]
        },
        "relative": {
          "pt": [
            "Parkinsonismo, idosos, QT longo, antipsicóticos concomitantes"
          ],
          "es": [
            "Parkinsonismo, adultos mayores, QT largo, antipsicóticos concomitantes"
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
          "pt": "Fenotiazina antiemética: vigiar EPS, sedação, hipotensão e QT; evitar duplicação com outros antagonistas dopaminérgicos sem indicação clara.",
          "es": "Fenotiazina antiemética: vigilar EPS, sedación, hipotensión y QT; evitar duplicación con otros antagonistas dopaminérgicos sin indicación clara."
        }
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 403 (Regulação gástrica: trimebutina + simeticona + proclorperazina) */

/* ═══════════════════════════════════════════════════════════════════════════
   BUILD 430 — Inibidores da Bomba de Prótons (IBPs) VO
   omeprazol · pantoprazol · esomeprazol · lansoprazol
═══════════════════════════════════════════════════════════════════════════ */
Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

  "omeprazol": {
    name: { pt: 'Omeprazol (Via Oral)', es: 'Omeprazol (Vía Oral)' },
    category: 'gastroenterologia',
    class: { pt: 'Inibidor da Bomba de Prótons (IBP) / Antissecretor Gástrico', es: 'Inhibidor de la Bomba de Protones (IBP) / Antisecretor Gástrico' },
    indications: {
      pt: ['Tratamento de Úlcera Gástrica e Duodenal', 'Esofagite de refluxo e Doença do Refluxo Gastroesofágico (DRGE)', 'Erradicação de Helicobacter pylori (em associação com antibióticos)', 'Tratamento da Síndrome de Zollinger-Ellison'],
      es: ['Tratamiento de Úlcera Gástrica y Duodenal', 'Esofagitis por reflujo y ERGE', 'Erradicación de Helicobacter pylori', 'Síndrome de Zollinger-Ellison']
    },
    commercialNames: { br: ['Losec', 'Peprazol', 'Gastrium'], ar: ['Losec', 'Gastrozole', 'Danlox'] },
    presentation: { pt: ['Cápsulas duras com microgrânulos gastrorresistentes 10 mg, 20 mg e 40 mg'], es: ['Cápsulas con microgránulos gastrorresistentes 10 mg, 20 mg y 40 mg'] },
    mechanism: {
      pt: 'O Cadeado do Ácido. O Omeprazol é uma base fraca lipofílica inativa. Ele atravessa o estômago protegido por microgrânulos e é absorvido no intestino. Pelo sangue, ele viaja até as células parietais do estômago e entra nos canalículos ácidos, onde é convertido em sua forma ativa. Lá, liga-se de forma IRREVERSÍVEL (ligação covalente) à enzima H+/K+-ATPase (a bomba de prótons), paralisando a secreção de ácido clorídrico até que novas bombas sejam fabricadas.',
      es: 'Inhibidor irreversible de la bomba de protones (H+/K+-ATPase). Es un profármaco que requiere activarse en el medio ácido de los canalículos de la célula parietal. Al bloquear la vía final común de secreción de ácido, reduce drásticamente la acidez gástrica.'
    },
    dose: {
      adult: {
        pt: 'DRGE e Úlceras: 20 mg via oral, UMA VEZ ao dia, pela manhã. Casos graves ou refratários: 40 mg ao dia. Erradicação de H. pylori: 20 mg de 12/12h por 7 a 14 dias (associado ao esquema antibiótico).',
        es: 'ERGE y Úlceras: 20 mg vía oral, UNA VEZ al día por la mañana. Casos graves: 40 mg al día. Erradicación de H. pylori: 20 mg cada 12h.'
      },
      pediatric: {
        pt: 'Maiores de 1 ano (Refluxo erosivo): 5 a 10 kg: 5 mg/dia; 10 a 20 kg: 10 mg/dia; > 20 kg: 20 mg/dia.',
        es: 'Niños > 1 año: 0,7 a 1 mg/kg/día base.'
      }
    },
    administration: { pt: ['DEVE SER ADMINISTRADO EM JEJUM, 30 A 60 MINUTOS ANTES DO CAFÉ DA MANHÃ. As cápsulas não devem ser abertas ou mastigadas, pois o ácido do estômago destrói o remédio se os microgrânulos forem rompidos.'], es: ['DEBE SER ADMINISTRADO EN AYUNAS, 30 A 60 MINUTOS ANTES DEL DESAYUNO. No abrir ni masticar las cápsulas.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de alteração de dose na insuficiência renal.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente pelo fígado. Em cirróticos graves, considerar dose máxima de 20 mg/dia.', es: 'En cirrosis severa, no exceder los 20 mg/día.' } },
    commonAdverseEffects: { pt: ['Cefaleia leve', 'Diarreia ou constipação transitória', 'Dor abdominal e flatulência'], es: ['Cefalea leve', 'Diarrea o estreñimiento transitorio', 'Dolor abdominal'] },
    dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda (Lesão renal alérgica oculta)', 'Hipomagnesemia severa (Uso crônico por mais de 1 ano)', 'Fraturas ósseas por má absorção de cálcio', 'Diarreia por Clostridioides difficile'], es: ['Nefritis Intersticial Aguda', 'Hipomagnesemia severa (uso crónico)', 'Mayor riesgo de fracturas por malabsorción de calcio', 'Infección por Clostridioides difficile'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade conhecida ao omeprazol ou a outros benzimidazóis substituídos'], es: ['Hipersensibilidad conocida al fármaco'] },
      relative: { pt: ['Uso crônico injustificado (Risco de superpopulação bacteriana intestinal)', 'Uso concomitante com Clopidogrel (inibe CYP2C19, risco de trombose de stent)'], es: ['Uso crónico sin indicación real', 'Uso concomitante con Clopidogrel'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'A ARMADILHA DO USO AD ETERNUM: O uso crônico indiscriminado de Omeprazol por anos desacidifica o estômago permanentemente. Isso bloqueia a absorção de Vitamina B12 e Cálcio, levando a demência reversível, anemia megaloblástica e osteoporose severa com fratura de quadril em idosos. Além disso, abre as portas do intestino para infecções bacterianas graves.', es: 'EL PELIGRO DEL USO PROLONGADO: El uso crónico por años anula el ácido, bloqueando la absorción de Vitamina B12 y Calcio. Provoca anemia megaloblástica, demencia reversible y osteoporosis con alto riesgo de fracturas en ancianos.' }
    },
    references: {
      pt: 'Diretrizes da Federação Brasileira de Gastroenterologia (FBG); FDA Prescribing Information Losec; UpToDate Chronics.',
      es: 'Directrices de la Organización Mundial de Gastroenterología; FDA Prescribing Information; Manual de Farmacología de Goodman & Gilman.'
    }
  },

  "pantoprazol": {
    name: { pt: 'Pantoprazol (Via Oral)', es: 'Pantoprazol (Vía Oral)' },
    category: 'gastroenterologia',
    class: { pt: 'Inibidor da Bomba de Prótons (IBP) / Baixa Interação Hepática', es: 'Inhibidor de la Bomba de Protones (IBP) / Baja Interacción Hepática' },
    indications: {
      pt: ['Doença do Refluxo Gastroesofágico', 'Gastrite e Duodenite agudas ou crônicas', 'Profilaxia de úlceras de estresse em pacientes de alto risco', 'Escolha padrão em pacientes polifarmácia que usam Clopidogrel'],
      es: ['Enfermedad por Reflujo Gastroesofágico', 'Gastritis y Duodenitis', 'Elección estándar en pacientes polifarmacia que toman Clopidogrel']
    },
    commercialNames: { br: ['Pantozol', 'Panto', 'Pantocal'], ar: ['Gastromax', 'Pantus', 'Panto-Gas'] },
    presentation: { pt: ['Comprimidos gastrorresistentes 20 mg e 40 mg'], es: ['Comprimidos gastrorresistentes 20 mg y 40 mg'] },
    mechanism: {
      pt: 'Inibe irreversivelmente a bomba H+/K+-ATPase parietal gástrica. O seu GRANDE DIFERENCIAL farmacológico é possuir uma afinidade muito menor pelo citocromo CYP2C19 do fígado em comparação ao Omeprazol. Ele desce de forma limpa pelo fígado sem travar o metabolismo de outras drogas cruciais, sendo o IBP de escolha em pacientes em uso de antiagregantes plaquetários.',
      es: 'Inhibidor irreversible de la bomba de protones. Su gran ventaja clínica es que posee una afinidad significativamente menor por el citocromo CYP2C19 hepático. No bloquea el metabolismo de otros fármacos críticos, siendo el IBP de elección en pacientes con antiagregantes plaquetarios.'
    },
    dose: {
      adult: {
        pt: 'DRGE leve: 20 mg via oral ao dia antes do café da manhã. DRGE moderada a grave e Úlceras: 40 mg via oral ao dia.',
        es: 'ERGE leve: 20 mg vía oral al día antes del desayuno. Casos moderados a severos: 40 mg al día.'
      },
      pediatric: {
        pt: 'Segurança estabelecida a partir de 5 anos de idade para DRGE: 20 mg a 40 mg baseado na faixa de peso (> 40 kg usa 40 mg).',
        es: 'Aprobado en > 5 años con dosis según peso corporal.'
      }
    },
    administration: { pt: ['Engolir o comprimido inteiro com um copo de água, 1 hora antes do café da manhã. Não pode ser partido, quebrado ou mastigado.'], es: ['Tragar entero con agua, 1 hora antes del desayuno. No partir ni masticar.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose na falência renal.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Em pacientes com insuficiência hepática grave (Child-Pugh C), a dose máxima deve ser restrita a 20 mg ao dia ou administração em dias alternados.', es: 'En insuficiencia hepática grave, no exceder los 20 mg al día.' } },
    commonAdverseEffects: { pt: ['Dispepsia leve e náuseas', 'Cefaleia', 'Diarreia episódica'], es: ['Dispepsia leve y náuseas', 'Cefalea', 'Diarrea episódica'] },
    dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda imunomediada', 'Aumento do risco de fraturas por osteopenia crônica', 'Hipomagnesemia sintomática'], es: ['Nefritis Intersticial Aguda', 'Riesgo de osteoporosis a largo plazo', 'Hipomagnesemia'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade ao pantoprazol'], es: ['Hipersensibilidad al pantoprazol'] },
      relative: { pt: ['Coadministração com atazanavir (zera o efeito do antiviral)'], es: ['Coadministración con atazanavir'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'O AMIGO DO INFARTADO: O Pantoprazol é o IBP preferido de escolha unânime por cardiologistas mundiais quando o paciente precisa tomar antiplaquetários como o Clopidogrel. Enquanto o Omeprazol anula o Clopidogrel e causa reinfarto, o Pantoprazol protege o estômago sem tocar na plaqueta do doente.', es: 'EL RELEVO DEL CARDIÓLOGO: El Pantoprazol es el IBP de elección cuando el paciente toma Clopidogrel. Mientras que el Omeprazol inactiva al Clopidogrel provocando trombosis de Stent, el Pantoprazol protege la mucosa sin alterar el efecto antiagregante.' }
    },
    references: {
      pt: 'Consenso de Polifarmácia e Interações da FBG; FDA Prescribing Information Protonix; JCC Guidelines.',
      es: 'FDA Prescribing Information (Protonix); Guías de Consenso de la Sociedad Española de Patología Digestiva.'
    }
  },

  "esomeprazol": {
    name: { pt: 'Esomeprazol Magnésico', es: 'Esomeprazol Magnésico' },
    category: 'gastroenterologia',
    class: { pt: 'Inibidor da Bomba de Prótons / Isômero Ativo Purificado', es: 'Inhibidor de la Bomba de Protones / Isómero Activo Purificado' },
    indications: {
      pt: ['Doença do Refluxo Gastroesofágico com esofagite erosiva severa cicatrizante', 'Cura e prevenção de úlceras induzidas por AINEs', 'Hipersecreção patológica crônica'],
      es: ['ERGE con esofagitis erosiva severa cicatrizante', 'Curación y prevención de úlceras inducidas por AINEs']
    },
    commercialNames: { br: ['Nexium', 'Ezobloc', 'Esogastro'], ar: ['Nexium', 'Nexium Argentina', 'Axagon'] },
    presentation: { pt: ['Comprimidos revestidos gastrorresistentes 20 mg e 40 mg'], es: ['Comprimidos gastrorresistentes 20 mg y 40 mg'] },
    mechanism: {
      pt: 'O Isômero Refinado. O Omeprazol comum é uma mistura de duas moléculas espelhadas (isômeros R e S). O Esomeprazol isolou puramente o Isômero S-omeprazol. Esta modificação cirúrgica faz com que ele sofra menos destruição de primeira passagem pelo fígado. Uma quantidade muito maior de remédio atinge as bombas de prótons do estômago, oferecendo um bloqueio ácido mais potente e duradouro nas primeiras 24 horas.',
      es: 'Es el S-isómero puro del omeprazol. Ofrece una menor tasa de aclaramiento metabólico hepático de primera pasada. Logra concentraciones plasmáticas más elevadas y sostenidas, logrando un control del pH gástrico superior y más rápido.'
    },
    dose: {
      adult: {
        pt: 'Esofagite Erosiva: 40 mg via oral, UMA VEZ ao dia, por 4 a 8 semanas. Manutenção e DRGE sem esofagite: 20 mg ao dia.',
        es: 'Esofagitis Erosiva: 40 mg vía oral, UNA VEZ al día por 4 a 8 semanas. Mantenimiento: 20 mg al día.'
      },
      pediatric: {
        pt: 'Crianças 1-11 anos: 10 mg a 20 mg uma vez ao dia dependendo do peso, por no máximo 8 semanas.',
        es: 'Niños 1-11 años: 10 a 20 mg una vez al día.'
      }
    },
    administration: { pt: ['Tomar 1 hora antes da refeição da manhã. Os comprimidos Nexium usam tecnologia MUPS (múltiplas unidades de pelotas), podendo ser dispersados em um copo de água sem gás se o paciente não conseguir engolir, mas os grânulos nunca devem ser mastigados.'], es: ['Tomar 1 hora antes del desayuno. Los comprimidos pueden dispersarse en agua si hay disfagia, pero sin masticar los gránulos.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática grave (Child-Pugh C), não exceder o teto de 20 mg ao dia.', es: 'En insuficiencia hepática grave, no exceder los 20 mg al día.' } },
    commonAdverseEffects: { pt: ['Cefaleia', 'Diarreia e boca seca', 'Náusea e flatulência'], es: ['Cefalea', 'Diarrea y boca seca', 'Náusea y flatulencia'] },
    dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda', 'Hipomagnesemia profunda induzida por bloqueio de transporte mucosal', 'Diarreia por superpopulação de Clostridioides'], es: ['Nefritis Intersticial Aguda', 'Hipomagnesemia profunda', 'Diarrea por Clostridioides'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade ao esomeprazol'], es: ['Hipersensibilidad al esomeprazol'] },
      relative: { pt: ['Uso concomitante com Clopidogrel (Inibe a CYP2C19 de forma similar ao omeprazol clássico)'], es: ['Uso concomitante con Clopidogrel'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'A EQUIVOCAÇÃO DO STENT: Embora seja o IBP mais potente para cicatrizar o refluxo severo, o Esomeprazol herda o mesmo problema do Omeprazol: ele inibe a CYP2C19. Se o seu paciente acabou de colocar um Stent no coração e está usando Clopidogrel, mude o Nexium para Pantoprazol para não aumentar as chances de uma trombose coronariana.', es: 'LA EQUIVOCACIÓN DEL STENT: Al ser el isómero puro, hereda la alta inhibición de CYP2C19. Si el paciente usa Clopidogrel por un Stent reciente, evite el Esomeprazol y use Pantoprazol para evitar trombosis de Stent.' }
    },
    references: {
      pt: 'EXPO Study (Esomeprazole vs Omeprazole); FDA Prescribing Information Nexium; Directivas ESC Gastro-Cardio.',
      es: 'EXPO Study; FDA Prescribing Information (Nexium); Directivas de Consenso de la SEPD.'
    }
  },

  "lansoprazol": {
    name: { pt: 'Lansoprazol', es: 'Lansoprazol' },
    category: 'gastroenterologia',
    class: { pt: 'Inibidor da Bomba de Prótons de Segunda Geração', es: 'Inhibidor de la Bomba de Protones de Segunda Generación' },
    indications: {
      pt: ['Cicatrização de Úlcera Duodenal e Gástrica', 'Tratamento de esofagite de refluxo', 'Coadjuvante na erradicação de H. pylori'],
      es: ['Cicatrización de Úlcera Duodenal y Gástrica', 'Tratamiento de esofagitis por reflujo', 'Erradicación de H. pylori']
    },
    commercialNames: { br: ['Ogastro', 'Prazol', 'Lanzol'], ar: ['Ogastro', 'Lanzopral', 'Gastroland'] },
    presentation: { pt: ['Cápsulas duras com microgrânulos liberação retardada 15 mg e 30 mg'], es: ['Cápsulas con microgránulos de liberación retardada 15 mg y 30 mg'] },
    mechanism: {
      pt: 'Atua bloqueando a bomba de prótons H+/K+-ATPase de forma irreversível e duradoura. Possui uma biodisponibilidade inicial extremamente alta nas primeiras tomadas (absorção rápida) e uma taxa de depuração plasmática constante, controlando as crises de azia noturna com excelente eficácia clínica.',
      es: 'Inhibidor irreversible de la enzima H+/K+-ATPase de la célula parietal gástrica. Se destaca por una absorción inicial muy veloz y alta biodisponibilidad desde la primera dosis, controlando la acidez nocturna eficazmente.'
    },
    dose: {
      adult: {
        pt: 'Úlcera Duodenal: 30 mg VO ao dia por 4 semanas. DRGE e esofagite: 30 mg ao dia antes do café da manhã por até 8 semanas.',
        es: 'Úlcera Duodenal: 30 mg VO al día por 4 semanas. ERGE: 30 mg al día antes del desayuno.'
      },
      pediatric: {
        pt: 'Crianças de 1 a 11 anos para DRGE curto prazo: Peso <= 30 kg: 15 mg/dia; Peso > 30 kg: 30 mg/dia.',
        es: 'Niños 1-11 años: Dosificación establecida según peso corporal.'
      }
    },
    administration: { pt: ['Tomar pela manhã em jejum seco. Para pacientes idosos com sonda nasogástrica, as cápsulas de Ogastro podem ser abertas e os microgrânulos misturados em suco de maçã (nunca em água pura ou bicarbonato, pois entope a sonda).'], es: ['Tomar por la mañana en ayunas. No masticar los microgránulos.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada a grave, reduzir a dose máxima para 15 mg ao dia.', es: 'En insuficiencia hepática moderada a severa, reducir la dosis máxima a 15 mg al día.' } },
    commonAdverseEffects: { pt: ['Diarreia e náuseas', 'Cefaleia episódica', 'Artralgia (dor nas articulações, mais descrita neste IBP)'], es: ['Diarrea y náuseas', 'Cefalea', 'Artralgia (más descrita en este IBP)'] },
    dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda funcional', 'Hipomagnesemia crônica letal', 'Colite colagenosa (diarreia crônica aquosa por inflamação do intestino)'], es: ['Nefritis Intersticial Aguda', 'Hipomagnesemia', 'Colitis colágena'] },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade ao lansoprazol'], es: ['Hipersensibilidad al lansoprazol'] },
      relative: { pt: ['Uso associado com inibidores de protease de HIV dependentes de acidez'], es: ['Uso asociado con inhibidores de proteasa del VIH dependientes de acidez'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'A DIARREIA QUE NÃO PASSA (COLITE): O Lansoprazol é o IBP mais associado ao desenvolvimento de Colite Microscópica/Colagenosa. Se o paciente idoso começar a ter uma diarreia aquosa crônica que dura meses após iniciar o Ogastro, não dê antibiótico; suspenda o Lansoprazol e o intestino voltará ao normal.', es: 'LA DIARREA CRÓNICA (COLITIS): Es el IBP más asociado a Colitis Microscópica. Si el paciente inicia una diarrea acuosa que dura meses tras usar Ogastro, suspenda el Lansoprazol y el cuadro remitirá.' }
    },
    references: {
      pt: 'FDA Label (Prevacid / Ogastro); Diretrizes Clínicas da FBG 2023.',
      es: 'FDA Label (Prevacid); Guías de Consenso Multicéntrico de la Sociedad Argentina de Gastroenterología (SAGE).'
    }
  }

}); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 430 (IBPs VO: omeprazol + pantoprazol + esomeprazol + lansoprazol) */

/* BUILD 431 — Imunobiológicos Gastroenterológicos (Anticorpos Monoclonais) */
Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

  "infliximabe": {
    name: { pt: 'Infliximabe', es: 'Infliximab' },
    category: 'gastroenterologia',
    class: { pt: 'Anticorpo Monoclonal Quimérico Anti-TNF-alfa / Imunobiológico', es: 'Anticuerpo Monoclonal Quimérico Anti-TNF-alfa / Inmunobiológico' },
    indications: {
      pt: ['Doença de Crohn moderada a grave ativa (inclusive fistulizante) refratária a corticoides e imunomoduladores', 'Retocolite Ulcerativa (RCU) severa', 'Artrite Reumatóide moderada a grave', 'Espondilite Anquilosante', 'Artrite Psoriásica', 'Psoríase em placas grave'],
      es: ['Enfermedad de Crohn moderada a severa activa (fistulizante) refractaria', 'Colitis Ulcerosa (CU) severa', 'Artritis Reumatoide moderada a severa', 'Espondilitis Anquilosante', 'Artritis Psoriásica', 'Psoriasis en placas grave']
    },
    commercialNames: { br: ['Remicade', 'Remsima (biossimilar)', 'Flixabi (biossimilar)'], ar: ['Remicade', 'Remsima'] },
    presentation: { pt: ['Frasco-ampola com pó liofilizado para infusão IV 100 mg (reconstituir em SF 0,9%)'], es: ['Vial con polvo liofilizado IV 100 mg (reconstituir en SF 0,9%)'] },
    mechanism: {
      pt: 'O Neutralizador do TNF — Destrutor do Granuloma. Anticorpo monoclonal quimérico (componente murino + humano) que se liga com altíssima afinidade às formas solúvel e transmembrana do Fator de Necrose Tumoral alfa (TNF-alfa) — o principal mediador inflamatório destrutivo no intestino e nas articulações. Ao sequestrar o TNF, interrompe a cascata inflamatória, permitindo cicatrização mucosa. RISCO CRÍTICO: o TNF-alfa também organiza o granuloma que aprisiona o Mycobacterium tuberculosis nos pulmões. Ao desligar o TNF, o granuloma se dissolve e o bacilo acorda.',
      es: 'Anticuerpo monoclonal quimérico que neutraliza el TNF-alfa soluble y transmembranal — principal mediador inflamatorio en intestino y articulaciones. Al secuestrar el TNF, interrumpe la cascada inflamatoria permitiendo la cicatrización mucosa. RIESGO CRÍTICO: el TNF-alfa mantiene el granuloma que encarcela al Mycobacterium tuberculosis. Al bloquearlo, el granuloma se disuelve y el bacilo despierta.'
    },
    dose: {
      adult: {
        pt: 'Indução: 5 mg/kg IV (infusão lenta de 2h) nas semanas 0, 2 e 6. Manutenção: 5 mg/kg IV a cada 8 semanas. Escalonamento por perda de resposta (Crohn): até 10 mg/kg a cada 8 semanas.',
        es: 'Inducción: 5 mg/kg IV (infusión de 2h) en las semanas 0, 2 y 6. Mantenimiento: 5 mg/kg IV cada 8 semanas. Escalada por pérdida de respuesta (Crohn): hasta 10 mg/kg cada 8 semanas.'
      },
      pediatric: {
        pt: 'Aprovado em > 6 anos para Doença de Crohn e RCU graves: 5 mg/kg IV — mesmo esquema de indução e manutenção do adulto.',
        es: 'Aprobado en niños > 6 años con Crohn y CU graves: 5 mg/kg IV — mismo esquema de inducción y mantenimiento.'
      }
    },
    administration: { pt: ['EXCLUSIVAMENTE INFUSÃO INTRAVENOSA HOSPITALAR LENTA (mínimo 2 horas de gotejamento). Monitoramento contínuo de sinais vitais por enfermagem durante toda a infusão pelo risco de reações infusionais agudas. Nunca administrar em bolus.'], es: ['EXCLUSIVAMENTE INFUSIÓN INTRAVENOSA HOSPITALARIA LENTA (mínimo 2 horas). Monitoreo continuo de signos vitales. Nunca en bolo.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste — molécula eliminada por catabolismo proteico celular, não por depuração renal.', es: 'Sin ajuste necesario — eliminación por catabolismo proteico celular.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Não estudado sistematicamente em hepatopatias graves. Monitorar enzimas hepáticas.', es: 'No estudiado en hepatopatías graves. Monitorear enzimas hepáticas.' } },
    commonAdverseEffects: { pt: ['Infecções respiratórias altas recorrentes (sinusite, faringite)', 'Reação infusional febril leve (calafrios, prurido, urticária durante a infusão)', 'Cefaleia', 'Dor abdominal'], es: ['Infecciones respiratorias altas recurrentes', 'Reacción infusional febril leve (escalofríos, prurito, urticaria)', 'Cefalea', 'Dolor abdominal'] },
    dangerousAdverseEffects: { pt: ['REATIVAÇÃO DE TUBERCULOSE LATENTE — disseminação pulmonar (miliar), pleural ou extrapulmonar fatal', 'Choque anafilático grave durante a infusão', 'Insuficiência Cardíaca Congestiva nova ou agravada (raro, dose-dependente > 5 mg/kg)', 'Síndrome Lúpus-like induzida por droga', 'Linfoma (risco aumentado em longo prazo)'], es: ['REACTIVACIÓN DE TUBERCULOSIS LATENTE — miliar, pleural o extrapulmonar fatal', 'Choque anafiláctico durante la infusión', 'Insuficiencia Cardíaca Congestiva agravada', 'Síndrome Lupus-like', 'Linfoma (riesgo aumentado a largo plazo)'] },
    contraindications: {
      absolute: { pt: ['Tuberculose ativa não tratada ou outras infecções graves sistêmicas (Sepse, Abscesso)', 'Insuficiência Cardíaca Congestiva moderada a grave (NYHA III/IV)', 'Hipersensibilidade documentada ao infliximabe'], es: ['Tuberculosis activa no tratada o infecciones graves no controladas', 'ICC moderada/severa NYHA III/IV', 'Hipersensibilidad documentada al infliximab'] },
      relative: { pt: ['Histórico de residência em áreas endêmicas de TB sem rastreio prévio completo (PPD/IGRA + RX tórax obrigatórios)', 'Infecções crônicas ativas (hepatite B — risco de reativação viral)', 'Desmielinização do SNC (esclerose múltipla)'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'O DESPERTAR DA TUBERCULOSE (PPD/IGRA OBRIGATÓRIO): O TNF-alfa é a proteína que o organismo usa para construir o "granuloma" — a gaiola celular que mantém o bacilo de Koch preso e dormente no pulmão. Quando o Remicade desliga o TNF, a gaiola quebra. O bacilo acorda e causa Tuberculose Miliar explosiva e fatal. É OBRIGATÓRIO por protocolo clínico e legal realizar teste PPD/IGRA E Raio-X de tórax ANTES da primeira dose. Se IGRA positivo → tratamento profilático com Isoniazida por 9 meses antes de iniciar o biológico.', es: 'EL DESPERTAR DE LA TUBERCULOSIS (PPD/IGRA OBLIGATORIO): El TNF-alfa mantiene el granuloma que encarcela al bacilo de Koch en el pulmón. Al bloquearlo, el granuloma se rompe y el bacilo causa Tuberculosis Miliar letal. ES OBLIGATORIO realizar PPD/IGRA Y Radiografía de tórax ANTES de la primera dosis. IGRA positivo → profilaxis con Isoniazida 9 meses antes del inicio.' }
    },
    references: {
      pt: 'ACCENT I Trial (Crohn fistulizante - NEJM 2002); ACT 1 e 2 Trials (Colite Ulcerosa); Diretrizes ECCO (European Crohn\'s and Colitis Organisation); Protocolo do Ministério da Saúde do Brasil para uso de biológicos em DII.',
      es: 'ACCENT I Trial (NEJM 2002); ACT 1 & 2 Trials; Directrices ECCO; Protocolo Ministerio de Salud Argentina/Brasil para biológicos en EII.'
    }
  },

  "vedolizumabe": {
    name: { pt: 'Vedolizumabe', es: 'Vedolizumab' },
    category: 'gastroenterologia',
    class: { pt: 'Anticorpo Monoclonal Integrina-Antagonista / Imunobiológico Gut-Specific (Seletivo Gastrointestinal)', es: 'Anticuerpo Monoclonal Integrina-Antagonista / Inmunobiológico Gut-Specific (Selectivo Gastrointestinal)' },
    indications: {
      pt: ['Doença de Crohn moderada a grave ativa em adultos que falharam ou foram intolerantes a terapia convencional (corticoides, imunomoduladores) ou a anti-TNF', 'Retocolite Ulcerativa (RCU) moderada a grave com falha ou intolerância à terapia convencional ou anti-TNF'],
      es: ['Enfermedad de Crohn moderada a severa activa refractaria a terapia convencional o anti-TNF', 'Colitis Ulcerosa (CU) moderada a severa refractaria a terapia convencional o anti-TNF']
    },
    commercialNames: { br: ['Entyvio'], ar: ['Entyvio'] },
    presentation: { pt: ['Frasco-ampola com pó liofilizado IV 300 mg', 'Caneta injetável Subcutânea 108 mg (manutenção após indução IV)'], es: ['Vial con polvo liofilizado IV 300 mg', 'Pluma Subcutánea 108 mg (mantenimiento tras inducción IV)'] },
    mechanism: {
      pt: 'O Guarda de Trânsito do Intestino — Segurança Sistêmica Total. Anticorpo monoclonal humanizado "gut-specific". Liga-se especificamente à integrina alfa4-beta7 (α4β7) na superfície dos linfócitos T inflamatórios ativados. Ao bloquear essa integrina, os linfócitos não conseguem ler o "endereço" da parede intestinal (MAdCAM-1) e ficam proibidos de entrar no trato gastrointestinal. A inflamação para NO INTESTINO sem desligar a imunidade sistêmica (pulmão, cérebro, rim permanecem totalmente protegidos). Taxa de infecções oportunistas = placebo.',
      es: 'Anticuerpo monoclonal humanizado "gut-specific". Se une específicamente a la integrina α4β7 en la superficie de los linfocitos T inflamatorios, bloqueando su unión con MAdCAM-1 del endotelio intestinal. Impide mecánicamente que los linfocitos infiltren la mucosa gastrointestinal sin afectar la inmunidad sistémica. Tasa de infecciones oportunistas = placebo.'
    },
    dose: {
      adult: {
        pt: 'Indução IV: 300 mg via intravenosa (infusão em 30 minutos) nas semanas 0, 2 e 6. Manutenção IV: 300 mg IV a cada 8 semanas. Alternativa de manutenção subcutânea: 108 mg SC a cada 2 semanas (após completar pelo menos as 2 primeiras infusões IV).',
        es: 'Inducción IV: 300 mg IV (infusión en 30 minutos) en las semanas 0, 2 y 6. Mantenimiento IV: 300 mg IV cada 8 semanas. Mantenimiento SC alternativo: 108 mg SC cada 2 semanas (tras las 2 primeras infusiones IV).'
      },
      pediatric: {
        pt: 'Não indicado em menores de 18 anos (sem aprovação regulatória).',
        es: 'No indicado en menores de 18 años.'
      }
    },
    administration: { pt: ['Infusão IV: reconstituída e diluída em SF 0,9%, infundida em 30 minutos em ambiente clínico controlado. Não administrar em bolus. Via subcutânea: autoaplicação após treinamento, alternando locais (abdômen, coxa, braço).'], es: ['Infusión IV: diluida en SF 0,9%, administrada en 30 minutos en ambiente clínico. No en bolo. Subcutáneo: autoinyección tras entrenamiento.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose — eliminação por catabolismo proteico, independente da função renal.', es: 'Sin ajuste necesario.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin ajuste necesario.' } },
    commonAdverseEffects: { pt: ['Nasofaringite leve', 'Cefaleia', 'Artralgia (dor nas articulações)', 'Náusea', 'Reação no local da injeção (SC)'], es: ['Nasofaringitis leve', 'Cefalea', 'Artralgia', 'Náusea', 'Reacción en el sitio de inyección (SC)'] },
    dangerousAdverseEffects: { pt: ['Reação de hipersensibilidade infusional anafilática (raro)', 'Infecções oportunistas gastrointestinais (Clostridium difficile)', 'Risco teórico de Leucoencefalopatia Multifocal Progressiva (PML) — sem casos confirmados com vedolizumabe'], es: ['Reacción de hipersensibilidad infusional anafiláctica (raro)', 'Infecciones oportunistas gastrointestinales', 'Riesgo teórico de LMP — sin casos confirmados con vedolizumab'] },
    contraindications: {
      absolute: { pt: ['Infecções sistêmicas graves ativas e não controladas (Sepse, tuberculose ativa)'], es: ['Infecciones sistémicas graves activas no controladas'] },
      relative: { pt: ['Histórico de Leucoencefalopatia Multifocal Progressiva (LMP) — risco teórico por relação com classe integrina-antagonista (natalizumabe)', 'Tuberculose latente não tratada (menor risco que anti-TNF, mas rastreio recomendado)'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'A SEGURANÇA DO BIOLÓGICO FOCADO (GUT-SPECIFIC): Enquanto o Infliximabe desliga a imunidade do corpo inteiro e provoca reativação de tuberculose, o Vedolizumabe atua como um bisturi de alvo: bloqueia a inflamação APENAS no intestino. A taxa de infecções oportunistas pulmonares e sistêmicas com o Entyvio é estatisticamente igual à de um placebo. É o biológico de escolha para idosos frágeis, imunossuprimidos ou em regiões de alta prevalência de tuberculose.', es: 'LA SEGURIDAD DEL BIOLÓGICO ENFOCADO (GUT-SPECIFIC): A diferencia del infliximab que suprime toda la inmunidad, vedolizumab actúa solo en el intestino. La tasa de infecciones pulmonares y sistémicas es estadísticamente igual a la del placebo. Es el biológico de elección para ancianos frágiles o en zonas de alta prevalencia de tuberculosis.' }
    },
    references: {
      pt: 'GEMINI I Trial (RCU - NEJM 2013); GEMINI II Trial (Crohn - NEJM 2013); VISIBLE 1 e 2 Trials (formulação subcutânea); Diretrizes ECCO 2023; FBG/GEDIIB Consenso Biológicos em DII.',
      es: 'GEMINI I & II Trials (NEJM 2013); VISIBLE 1 & 2 Trials; Directrices ECCO 2023; SAGE Consenso Biológicos en EII.'
    }
  }

}); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 431 (Imunobiológicos: infliximabe + vedolizumabe) */

/* BUILD 432 — Imunobiológico Anti-IL-12/IL-23: Ustekinumabe */
Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

  "ustekinumabe": {
    name: { pt: 'Ustekinumabe', es: 'Ustekinumab' },
    category: 'gastroenterologia',
    class: { pt: 'Anticorpo Monoclonal Humano Anti-IL-12/IL-23 / Imunobiológico Dual-Via', es: 'Anticuerpo Monoclonal Humano Anti-IL-12/IL-23 / Inmunobiológico Dual' },
    indications: {
      pt: ['Doença de Crohn ativa moderada a grave em adultos que falharam ou foram intolerantes a corticoides, imunomoduladores ou anti-TNF (infliximabe/adalimumabe)', 'Retocolite Ulcerativa moderada a grave com falha a terapia convencional ou anti-TNF', 'Psoríase em placas moderada a grave'],
      es: ['Enfermedad de Crohn activa moderada a severa refractaria a corticoides, inmunomoduladores o anti-TNF', 'Colitis Ulcerosa moderada a severa refractaria', 'Psoriasis en placas moderada a grave']
    },
    commercialNames: { br: ['Stelara'], ar: ['Stelara'] },
    presentation: { pt: ['Frasco-ampola IV 130 mg/26 mL (5 mg/mL — indução hospitalar)', 'Seringa preenchida SC 90 mg/1 mL (manutenção ambulatorial)'], es: ['Vial IV 130 mg/26 mL (inducción hospitalaria)', 'Jeringa prellenada SC 90 mg/1 mL (mantenimiento ambulatorial)'] },
    mechanism: {
      pt: 'O Bloqueador das Interleucinas Duplas. É um anticorpo IgG1κ totalmente humano que se liga especificamente à subunidade proteica p40 — compartilhada pelas interleucinas IL-12 e IL-23. Ao neutralizar ambas simultaneamente, bloqueia: (1) a IL-12 que ativa os linfócitos Th1 (produtores de INF-γ — pró-inflamatório intestinal); (2) a IL-23 que sustenta os linfócitos Th17 (produtores de IL-17 — responsáveis pela inflamação cutânea e intestinal crônica). Ao travar essas duas vias, desliga a cascata autoimune de forma upstream — antes mesmo do TNF-alfa ser produzido.',
      es: 'Anticuerpo IgG1κ totalmente humano que se une a la subunidad p40 compartida por las interleucinas IL-12 e IL-23. Al neutralizarlas simultáneamente bloquea: (1) IL-12 → activación de linfocitos Th1 (IFN-γ inflamatorio intestinal); (2) IL-23 → sustento de linfocitos Th17 (IL-17 — inflamación cutánea e intestinal crónica). Actúa upstream del TNF-alfa, desactivando la cascada antes de que se generen los mediadores terminales.'
    },
    dose: {
      adult: {
        pt: 'Indução (Fase Hospitalar): Dose ÚNICA IV baseada em peso — ≤ 55 kg: 260 mg; 55–85 kg: 390 mg; > 85 kg: 520 mg (infusão lenta de 1 hora). Manutenção (a partir da semana 8): 90 mg SC a cada 8 semanas.',
        es: 'Inducción (Hospitalar): Dosis ÚNICA IV por peso — ≤ 55 kg: 260 mg; 55–85 kg: 390 mg; > 85 kg: 520 mg (infusión 1 hora). Mantenimiento (desde semana 8): 90 mg SC cada 8 semanas.'
      },
      pediatric: {
        pt: 'Aprovado ≥ 6 anos apenas para psoríase em placas grave com ajuste rígido por peso corporal.',
        es: 'Aprobado ≥ 6 años solo para psoriasis en placas grave, con ajuste estricto por peso.'
      }
    },
    administration: { pt: ['Indução: INFUSÃO INTRAVENOSA hospitalar lenta de 1 hora, em ambiente controlado com monitoramento de sinais vitais. Manutenção: SUBCUTÂNEA ambulatorial (coxa, abdômen ou braço). Autoaplicação permitida após treinamento adequado.'], es: ['Inducción: INFUSIÓN INTRAVENOSA lenta hospitalaria de 1 hora con monitoreo de signos vitales. Mantenimiento: SUBCUTÁNEA ambulatoria. Autoinyección permitida tras entrenamiento.'] },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste — eliminação por catabolismo proteico biológico.', es: 'Sin necesidad de ajuste — eliminación por catabolismo proteico.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Não estudado sistematicamente em hepatopatias graves. Monitorar enzimas hepáticas periodicamente.', es: 'No estudiado en hepatopatías graves. Monitorear enzimas hepáticas.' } },
    commonAdverseEffects: { pt: ['Nasofaringite e infecções respiratórias altas leves', 'Cefaleia e tontura', 'Artralgia (dor articular localizada)', 'Reação local na aplicação SC'], es: ['Nasofaringitis e infecciones respiratorias altas leves', 'Cefalea y mareo', 'Artralgia', 'Reacción local en el sitio SC'] },
    dangerousAdverseEffects: { pt: ['Reativação de Tuberculose Latente (risco menor que anti-TNF, mas rastreio obrigatório)', 'Infecções oportunistas graves (fúngicas, bacterianas)', 'Leucoencefalopatia Multifocal Progressiva (PML — risco teórico de classe, sem casos confirmados)'], es: ['Reactivación de Tuberculosis Latente (riesgo menor que anti-TNF; rastreo obligatorio)', 'Infecciones oportunistas graves', 'LMP — riesgo teórico de clase, sin casos confirmados'] },
    contraindications: {
      absolute: { pt: ['Infecção sistêmica ativa grave não controlada (Sepse, abscessos)', 'Tuberculose ativa'], es: ['Infección sistémica activa grave no controlada', 'Tuberculosis activa'] },
      relative: { pt: ['Histórico de infecções recorrentes graves sem causa identificada; tuberculose latente não tratada (realizar profilaxia antes de iniciar)'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'A VANTAGEM SOBRE O REMICADE (QUANDO ELE FALHA): O Stelara é a grande arma da gastroenterologia quando o Infliximabe (Remicade) perde eficácia por formação de anticorpos neutralizantes (fenômeno de "escape imunológico"). Ao bloquear as IL-12/IL-23 ao invés do TNF-alfa diretamente, o Ustekinumabe possui: (1) taxa muito menor de reações alérgicas infusionais; (2) menor incidência de formação de anticorpos antidrug ao longo do tempo; (3) perfil de segurança infecciosa sistêmica significativamente superior ao anti-TNF.', es: 'LA VENTAJA CUANDO EL REMICADE FALLA: El Stelara es la herramienta clave cuando el Infliximab pierde eficacia por anticuerpos neutralizantes ("escape inmunológico"). Al bloquear IL-12/IL-23 en lugar del TNF-alfa directo: (1) menor tasa de alergias infusionales; (2) menor formación de anticuerpos antidrug; (3) perfil de seguridad infecciosa sistémica superior al anti-TNF.' }
    },
    references: {
      pt: 'UNITI-1 e UNITI-2 Trials (Crohn — NEJM 2016, Feagan BG et al.); UNIFI Trial (RCU — NEJM 2019); Diretrizes ECCO para DII 2023; GEDIIB — Consenso Biológicos em DII 2024.',
      es: 'UNITI-1 y UNITI-2 Trials (Crohn — NEJM 2016, Feagan BG et al.); UNIFI Trial (CU — NEJM 2019); Directrices ECCO 2023; Consenso SAGE Biológicos en EII.'
    }
  }

}); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 432 (ustekinumabe — Anti-IL-12/IL-23 UNITI/UNIFI) */

  /* ── BUILD 434 — Procinético Seguro no Parkinson ── */
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

/* ── DOMPERIDONA ────────────────────────────────────────────────────── */
    "domperidona": {
      "name": {
        "pt": "Domperidona",
        "es": "Domperidona"
      },
      "category": "gastro",
      "class": {
        "pt": "Antagonista dopaminérgico D2 periférico/procinético",
        "es": "Antagonista dopaminérgico D2 periférico/procinético"
      },
      "indications": {
        "pt": [
          "Alívio de náuseas e vômitos onde autorizada"
        ],
        "es": [
          "Alivio de náuseas y vómitos donde esté autorizada"
        ]
      },
      "mechanism": {
        "pt": "Antagoniza receptores D2 predominantemente periféricos e aumenta motilidade gastrointestinal; menor penetração no SNC que metoclopramida.",
        "es": "Antagoniza receptores D2 predominantemente periféricos y aumenta motilidad gastrointestinal; menor penetración al SNC que metoclopramida."
      },
      "dose": {
        "adult": {
          "pt": "EMA: 10 mg VO até 3x/dia; máximo 30 mg/dia. Em geral, não usar por mais de 1 semana.",
          "es": "EMA: 10 mg VO hasta 3x/día; máximo 30 mg/día. En general, no usar por más de 1 semana."
        },
        "pediatric": {
          "pt": "Onde produto pediátrico é autorizado: 0,25 mg/kg VO até 3x/dia, com dispositivo de medida apropriado.",
          "es": "Donde el producto pediátrico esté autorizado: 0,25 mg/kg VO hasta 3x/día, con dispositivo de medición apropiado."
        }
      },
      "administration": {
        "pt": [
          "Usar menor dose efetiva pelo menor tempo",
          "Evitar combinação com fármacos que prolongam QT ou inibidores potentes de CYP3A4"
        ],
        "es": [
          "Usar la menor dosis efectiva durante el menor tiempo",
          "Evitar combinación con fármacos que prolongan QT o inhibidores potentes de CYP3A4"
        ]
      },
      "renalAdjustment": {
        "required": true,
        "message": {
          "pt": "Em insuficiência renal grave, reduzir frequência de administração em uso repetido conforme resposta clínica.",
          "es": "En insuficiencia renal grave, reducir frecuencia de administración en uso repetido según respuesta clínica."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Contraindicada em insuficiência hepática moderada ou grave segundo EMA.",
          "es": "Contraindicada en insuficiencia hepática moderada o grave según EMA."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Boca seca",
          "Cefaleia"
        ],
        "es": [
          "Boca seca",
          "Cefalea"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Prolongamento de QT",
          "Torsades/arrítmia ventricular",
          "Morte súbita cardíaca rara"
        ],
        "es": [
          "Prolongación de QT",
          "Torsades/arritmia ventricular",
          "Muerte súbita cardíaca rara"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "QT prolongado/distúrbio de condução significativo",
            "Doença cardíaca subjacente relevante como IC",
            "Distúrbios eletrolíticos importantes/bradicardia",
            "Insuficiência hepática moderada/grave",
            "Uso de fármacos que prolongam QT ou inibidores potentes de CYP3A4"
          ],
          "es": [
            "QT prolongado/trastorno de conducción significativo",
            "Cardiopatía subyacente relevante como IC",
            "Trastornos electrolíticos importantes/bradicardia",
            "Insuficiencia hepática moderada/grave",
            "Uso de fármacos que prolongan QT o inhibidores potentes de CYP3A4"
          ]
        },
        "relative": {
          "pt": [
            ">60 anos",
            "Dose >30 mg/dia"
          ],
          "es": [
            ">60 años",
            "Dosis >30 mg/día"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "O risco cardíaco aumenta com >60 anos, doses >30 mg/dia, QT-prolongadores e inibidores CYP3A4.",
          "es": "El riesgo cardíaco aumenta con >60 años, dosis >30 mg/día, prolongadores de QT e inhibidores CYP3A4."
        }
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 434 (domperidona — Procinético Seguro no Parkinson / Gastroparesia) */

  /* ── BUILD 435 — Encerramento Histórico: Bloqueadores H2 + Protetores Mucosais ── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

/* ── FAMOTIDINA ──────────────────────────────────────────────────────── */
    "famotidina": {
      name: { pt: 'Famotidina', es: 'Famotidina' },
      category: 'gastroenterologia',
      class: { pt: 'Antagonista do Receptor H2 de Histamina / Antissecretor Gástrico', es: 'Antagonista del Receptor H2 de Histamina / Antisecretor Gástrico' },
      indications: {
        pt: ['Tratamento e prevenção de Úlcera Gástrica e Duodenal ativa', 'Doença do Refluxo Gastroesofágico (DRGE) leve a moderada', 'Profilaxia de aspiração ácida peri-operatória (Síndrome de Mendelson)', 'Alternativa segura aos IBPs em pacientes em uso de Clopidogrel (sem interferência no metabolismo hepático do antiagregante)'],
        es: ['Tratamiento y prevención de Úlcera Gástrica y Duodenal', 'Enfermedad por Reflujo Gastroesofágico (ERGE) leve a moderada', 'Profilaxis de aspiración ácida perioperatoria', 'Alternativa segura a los IBP en pacientes con Clopidogrel']
      },
      commercialNames: { br: ['Famox', 'Famotadina EMS', 'Pepcid (Importado)'], ar: ['Famotidina', 'Taural', 'Gastrosedol'] },
      presentation: { pt: ['Comprimidos revestidos 20 mg e 40 mg', 'Ampolas IV 20 mg/2 mL'], es: ['Comprimidos 20 mg y 40 mg', 'Ampollas IV 20 mg/2 mL'] },
      mechanism: {
        pt: 'O Bloqueador H2 Potente sem Interferência Hepática. Bloqueia competitivamente e de forma altamente seletiva os receptores de histamina H2 nas células parietais do estômago, suprimindo a secreção basal e estimulada de ácido clorídrico. É 20 a 50 vezes mais potente que a Cimetidina de primeira geração. Vantagem farmacológica crítica: NÃO inibe enzimas do citocromo P450 hepático, sendo isento das interações medicamentosas devastadoras da Cimetidina.',
        es: 'Antagonista competitivo y reversible de los receptores H2 en las células parietales gástricas. Inhibe la secreción de ácido clorhídrico basal y estimulada. Posee una potencia 20-50 veces superior a la cimetidina sin sus efectos antiandrogénicos ni inhibición del citocromo P450.'
      },
      dose: {
        adult: {
          pt: 'Úlcera ativa / DRGE: 40 mg via oral ou IV UMA VEZ ao dia, à noite antes de deitar (ou 20 mg 12/12h). Manutenção: 20 mg à noite. Via IV: infundir lentamente em 2 min ou diluído em 50 mL SF em 15 min.',
          es: 'Úlcera activa / ERGE: 40 mg vía oral o IV UNA VEZ al día por la noche (o 20 mg c/12h). Mantenimiento: 20 mg por la noche. IV: infundir lentamente en 2 min o diluido en 50 mL SF en 15 min.'
        },
        pediatric: {
          pt: 'Refluxo / úlcera pediátrica: 0,5 mg a 1 mg/kg/dia dividido em 1 a 2 doses (máximo 40 mg/dia).',
          es: '0,5 a 1 mg/kg/día dividido cada 12 horas (máximo 40 mg/día).'
        }
      },
      administration: { pt: ['Via oral ou Intravenosa lenta. Bolus IV de 2 minutos ou infusão em 15 min diluído em SF 0,9%. Pode ser tomado com ou sem alimentos.'], es: ['Vía oral o IV lenta (bolo en 2 min o infusión de 15 min diluido en SF 0,9%).'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 50 mL/min: reduzir à metade (20 mg/noite) ou espaçar para a cada 48 horas. Se ClCr < 10: risco alto de acúmulo com delirium e psicose medicamentosa — use somente 20 mg a cada 72h com monitoramento.', es: 'Si ClCr < 50 mL/min: reducir a la mitad (20 mg/noche) o espaciar a cada 48h por riesgo de delirium y psicosis medicamentosa.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cefaleia e tontura', 'Diarreia ou constipação leve', 'Boca seca'], es: ['Cefalea y mareo', 'Diarrea o estreñimiento leve', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['DELIRIUM AGUDO e confusão mental (idosos com insuficiência renal — receptor H2 cerebral)', 'Arritmias e bradicardia severa (infusão IV rápida demais)', 'Agranulocitose (raríssimo)'], es: ['DELIRIUM AGUDO y confusión mental (ancianos con falla renal)', 'Bradicardia y arritmia por infusión IV rápida', 'Agranulocitosis'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à famotidina ou outros antagonistas H2'], es: ['Hipersensibilidad al fármaco o a otros antagonistas H2'] },
        relative: { pt: ['Insuficiência renal grave sem monitoramento de dose (risco de psicose medicamentosa)'], es: ['Insuficiencia renal grave sin ajuste de dosis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A PSICOSE DO IDOSO POR RECEPTOR H2 CEREBRAL: Receptores H2 existem em pequenas quantidades no SNC. Em idosos com insuficiência renal que recebem doses plenas de Famotidina sem ajuste, a droga se acumula, atravessa a BHE e causa Delirium agressivo (o paciente arranca acessos e alucina). AJUSTE SEMPRE A DOSE PARA A FUNÇÃO RENAL.', es: 'PSICOSIS POR RECEPTOR H2 CEREBRAL EN ANCIANOS: Los receptores H2 también están en el SNC. En ancianos con falla renal que reciben dosis completas sin ajuste, la Famotidina se acumula y provoca Delirium agresivo. SIEMPRE ajustar por función renal.' }
      },
      references: {
        pt: 'FDA Prescribing Information Pepcid (famotidina); Diretrizes FBG de Úlcera Péptica; Micromedex Drug Interactions; UpToDate H2 Antagonists.',
        es: 'FDA Prescribing Information (Pepcid); Ficha Técnica CIMA Famotidina; Guías SAGE Gastroenterología; UpToDate H2 Antagonists.'
      }
    },

/* ── CIMETIDINA ──────────────────────────────────────────────────────── */
    "cimetidina": {
      name: { pt: 'Cimetidina', es: 'Cimetidina' },
      category: 'gastroenterologia',
      class: { pt: 'Antagonista do Receptor H2 de Histamina (1ª Geração) / Inibidor Enzimático Multidroga', es: 'Antagonista del Receptor H2 de Histamina (1ª Generación) / Inhibidor Enzimático Multidroga' },
      indications: {
        pt: ['Úlcera gástrica ou duodenal e refluxo gastroesofágico (Medicamento histórico — hoje em desuso nos grandes centros devido ao perfil imenso de interações e efeitos androgênicos)', 'Síndrome de Zollinger-Ellison (uso histórico antes dos IBPs)'],
        es: ['Úlcera péptica y reflujo (Fármaco histórico — hoy en desuso por sus interacciones y efectos antiandrogénicos)', 'Síndrome de Zollinger-Ellison (uso histórico previo a los IBP)']
      },
      commercialNames: { br: ['Tagamet', 'Cimetidina Genérico'], ar: ['Tagamet', 'Cimetin'] },
      presentation: { pt: ['Comprimidos 200 mg, 300 mg e 400 mg', 'Ampolas IV 300 mg/2 mL'], es: ['Comprimidos 200 mg y 400 mg', 'Ampollas IV 300 mg/2 mL'] },
      mechanism: {
        pt: 'Antagonista clássico de primeira geração do receptor H2 gástrico — bloqueia a secreção ácida parietal. Seu grande problema farmacológico: é inibidor inespecífico e potente de praticamente todos os citocromos hepáticos (CYP1A2, CYP2C9, CYP2D6, CYP3A4), paralisando o metabolismo de dezenas de outros fármacos. Além disso, bloqueia competitivamente os receptores de andrógenos e eleva a prolactina — efeitos antiandrogênicos ausentes na Famotidina e Ranitidina.',
        es: 'Antagonista H2 de primera generación. Además de reducir la acidez gástrica, es un potente inhibidor inespecífico del citocromo P450 hepático (CYP1A2, CYP2C9, CYP2D6, CYP3A4). Posee efectos antiandrogénicos directos por unión a receptores de testosterona y elevación de prolactina.'
      },
      dose: {
        adult: {
          pt: 'Histórica: 300 mg a 400 mg via oral ou IV, 2 a 4 vezes ao dia (esquema pesado de tomadas repetidas). Hoje raramente prescrita.',
          es: 'Histórica: 300 a 400 mg vía oral o IV, 2 a 4 veces al día. Rara vez prescrita actualmente.'
        },
        pediatric: {
          pt: '20 a 40 mg/kg/dia divididos a cada 6 horas (evitada na pediatria moderna).',
          es: '20 a 40 mg/kg/día dividido cada 6 horas (evitada en pediatría moderna).'
        }
      },
      administration: { pt: ['Uso oral (junto às refeições) ou Intravenoso lento hospitalar. Administrar com alimentos para reduzir efeitos GI.'], es: ['Uso oral con alimentos o IV lento. Administrar junto a las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr 10-50 mL/min: reduzir dose em 50%. ClCr < 10 mL/min: reduzir em 75% pelo altíssimo risco de psicose e encefalopatia medicamentosa.', es: 'ClCr 10-50 mL/min: reducir dosis al 50%. ClCr < 10: reducir al 25% por alto riesgo de encefalopatía.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar ou monitorar rigorosamente em hepatopatias graves — a inibição do CYP hepático pela própria droga agrava o colapso de depuração enzimática.', es: 'Evitar en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['GINECOMASTIA SEVERA e dolorosa em homens no uso crônico (efeito antiandrogênico)', 'Disfunção erétil e perda de libido', 'Diarreia e mialgia'], es: ['GINECOMASTIA severa y dolorosa en hombres con uso crónico', 'Disfunción eréctil y pérdida de libido', 'Diarrea'] },
      dangerousAdverseEffects: { pt: ['Delirium e alucinações severas em idosos com insuficiência renal', 'Toxicidade cruzada fatal de outros fármacos por travamento completo do CYP hepático (Varfarina→hemorragia; Fenitoína→coma; Teofilina→convulsão)'], es: ['Delirium y alucinaciones en ancianos', 'Toxicidad cruzada fatal por bloqueo del CYP (Warfarina→hemorragia; Fenitoína→coma; Teofilina→convulsión)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade à cimetidina', 'Uso concomitante com drogas de estreita janela terapêutica (Varfarina, Fenitoína, Teofilina, Lidocaína, Metoprolol)'], es: ['Hipersensibilidad al fármaco', 'Uso concomitante con Warfarina, Fenitoína o Teofilina'] },
        relative: { pt: ['Idosos em polifarmácia (risco crítico de iatrogenia por inibição enzimática)'], es: ['Ancianos polifarmacia (riesgo crítico de yatrogenia enzimática)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O PESADELO DOS HOMENS E DA FARMÁCIA HOSPITALAR: A Cimetidina bloqueia os receptores de testosterona → ginecomastia real e dolorosa + disfunção erétil. E bloqueia o fígado inteiro → qualquer droga de janela estreita explode (Varfarina vira hemorrhagia; Fenitoína vira coma). Se precisar de bloqueador H2, mude para Famotidina. Se precisar de antiácido superior, use IBP.', es: 'LA PESADILLA DE LOS HOMBRES Y DE LA FARMACIA HOSPITALARIA: Bloquea receptores de testosterona → ginecomastia real y dolorosa + disfunción eréctil. Y bloquea el hígado entero → Warfarina provoca hemorragia; Fenitoína provoca coma. Use Famotidina o IBP en su lugar.' }
      },
      references: {
        pt: 'FDA Historical Data Tagamet; Rendic S & Di Carlo FJ Drug Metab Rev 1997 (CYP450 inhibition profile); Tratado de Gastroenterologia USP; Goodman & Gilman Farmacologia.',
        es: 'FDA Historical Data (Tagamet); Rendic S & Di Carlo FJ, Drug Metab Rev 1997; Goodman & Gilman Farmacología; Ficha Técnica CIMA Cimetidina.'
      }
    },

/* ── SUCRALFATO ──────────────────────────────────────────────────────── */
    "sucralfato": {
      name: { pt: 'Sucralfato', es: 'Sucralfato' },
      category: 'gastroenterologia',
      class: { pt: 'Protetor de Mucosa Gástrica / Complexo de Sacarose Sulfatada e Hidróxido de Alumínio', es: 'Protector de la Mucosa Gástrica / Complejo de Sacarosa Sulfatada e Hidróxido de Aluminio' },
      indications: {
        pt: ['Tratamento a curto prazo de Úlcera Duodenal e Gástrica ativa', 'Gastrite de refluxo biliar', 'Profilaxia de úlceras de estresse em pacientes críticos intubados na UTI (vantagem: não eleva o pH gástrico — menor risco de pneumonia associada à ventilação vs IBPs)'],
        es: ['Tratamiento a corto plazo de Úlcera Duodenal y Gástrica', 'Gastritis por reflujo biliar', 'Profilaxis de úlceras de estrés en pacientes críticos (ventaja: no eleva el pH — menor riesgo de neumonía vs IBP)']
      },
      commercialNames: { br: ['Sucrafilm', 'Sucralfato Medley'], ar: ['Netun', 'Sucralfato Beta'] },
      presentation: { pt: ['Comprimidos mastigáveis 1 g', 'Suspensão oral 1 g/10 mL e 2 g/10 mL'], es: ['Comprimidos masticables 1 g', 'Suspensión oral 1 g/10 mL'] },
      mechanism: {
        pt: 'O Cimento da Úlcera. É um complexo de sacarose sulfatada ligada ao hidróxido de alumínio — não absorvido sistemicamente (ação puramente local). Em contato com o ácido gástrico (pH < 4,0), polimeriza-se em um gel viscoso e pegajoso com forte carga negativa. Esse gel adere seletivamente às proteínas de carga positiva expostas na base da ferida ulcerosa, criando uma barreira física protetora que impede o ácido e a pepsina de atingirem o tecido lesado — efetivamente "cimentando" a úlcera.',
        es: 'Complejo de sacarosa sulfatada e hidróxido de aluminio, no absorbido sistémicamente (acción local exclusiva). En medio ácido (pH < 4), polimeriza en un gel viscoso con carga negativa que se adhiere selectivamente a las proteínas con carga positiva en el cráter ulceroso, formando una barrera física protectora contra el ácido y la pepsina.'
      },
      dose: {
        adult: {
          pt: 'Úlcera ativa: 1 g via oral QUATRO vezes ao dia — 1h antes das três principais refeições e ao deitar. Curso de 4 a 8 semanas. Profilaxia UTI: 1 g via sonda 6/6h.',
          es: 'Úlcera activa: 1 g vía oral CUATRO veces al día — 1h antes de cada comida principal y al acostarse. Duración 4-8 semanas. Profilaxis UCI: 1 g por sonda c/6h.'
        },
        pediatric: {
          pt: 'Segurança formal não estabelecida em menores de 12 anos — uso off-label supervisionado.',
          es: 'No recomendado en menores de 12 años (uso off-label supervisado).'
        }
      },
      administration: { pt: ['TOMAR RIGOROSAMENTE COM ESTÔMAGO VAZIO — 1 HORA ANTES DAS REFEIÇÕES. O meio ácido livre de alimentos é imprescindível para a polimerização e aderência do gel na úlcera. Não engolir o comprimido inteiro — mastigar completamente ou dissolver em água antes de ingerir.'], es: ['TOMAR CON ESTÓMAGO VACÍO — 1 HORA ANTES DE LAS COMIDAS. El medio ácido sin alimentos es imprescindible para la polimerización del gel. No tragar el comprimido entero — masticar completamente o disolver en agua.'] },
      renalAdjustment: { required: true, message: { pt: 'Contém Alumínio. Em DRC terminal (ClCr < 30 mL/min) ou em diálise: uso crônico pode causar absorção e acúmulo de Alumínio com encefalopatia e osteomalacia. Usar com cautela extrema e por tempo mínimo necessário.', es: 'Contiene Aluminio. En ERC terminal (ClCr < 30) o diálisis: el uso crónico puede provocar acumulación de Aluminio con encefalopatía y osteomalacia. Usar con máxima cautela.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente — sem necessidade de ajuste hepático.', es: 'Sin absorción sistémica — sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Constipação intestinal marcada (o alumínio retarda o trânsito — afeta ~2% dos usuários)', 'Boca seca', 'Náusea leve'], es: ['Estreñimiento marcado (el aluminio enlentece el tránsito)', 'Boca seca', 'Náusea leve'] },
      dangerousAdverseEffects: { pt: ['Formação de Bezoar gástrico (massa de gel solidificado que obstrui o estômago em pacientes com gastroparesia ou sonda enteral obstruída)', 'Encefalopatia por Alumínio em pacientes renais crônicos (uso prolongado)'], es: ['Bezoar gástrico (masa sólida de gel que obstruye el estómago en gastroparesia o sonda enteral)', 'Encefalopatía por Aluminio en ERC crónica con uso prolongado'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada ao sucralfato ou alumínio'], es: ['Hipersensibilidad al sucralfato o aluminio'] },
        relative: { pt: ['Gastroparesia severa ou sonda enteral com motilidade lenta (risco de bezoar e obstrução)'], es: ['Gastroparesia severa o sonda enteral con motilidad lenta'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ESCUDO QUE SEQUESTRA OUTROS REMÉDIOS: O gel do Sucralfato protege a úlcera do ácido, mas também capta e adsorve qualquer outro fármaco ingerido no mesmo horário (Digoxina, Varfarina, Levotiroxina, Quinolonas, Tetraciclinas). As moléculas sequestradas saem intactas nas fezes sem nenhum efeito terapêutico. REGRA OURO: tome qualquer outro medicamento pelo menos 2 horas ANTES do Sucralfato.', es: 'EL ESCUDO QUE SECUESTRA OTROS FÁRMACOS: El gel del Sucralfato atrapa cualquier fármaco ingerido al mismo tiempo (Digoxina, Warfarina, Levotiroxina, Quinolonas, Tetraciclinas). Las moléculas salen en las heces sin efecto terapéutico. REGLA DE ORO: tome cualquier medicamento al menos 2 horas ANTES del Sucralfato.' }
      },
      references: {
        pt: 'FDA Label Carafate (sucralfato); Cook DJ et al., N Engl J Med 1998;338:791-7 (SUP Trial — Sucralfate vs Ranitidina em UTI); Diretrizes WGO Úlcera Péptica; Bula Sucrafilm Anvisa.',
        es: 'FDA Label Carafate; Cook DJ et al., N Engl J Med 1998;338:791-7 (SUP Trial UCI); Guías WGO Úlcera Péptica; Ficha Técnica CIMA Sucralfato.'
      }
    },

/* ── SUBSALICILATO DE BISMUTO ────────────────────────────────────────── */
    "subsalicilato_de_bismuto": {
      name: { pt: 'Subsalicilato de Bismuto', es: 'Subsalicilato de Bismuto' },
      category: 'gastroenterologia',
      class: { pt: 'Agente Antidiarreico e Antiemético Mucosal / Antimicrobiano e Antissecretor Local', es: 'Agente Antidiarreico y Antiemético Mucosal / Antimicrobiano y Antisecretor Local' },
      indications: {
        pt: ['Alívio de diarreia aguda inespecífica e Diarreia do Viajante', 'Tratamento adjuvante de dispepsia (azia, queimação, náuseas)', 'Componente do esquema quádruplo de resgate para erradicação de Helicobacter pylori resistente (Bismuto + IBP + Metronidazol + Tetraciclina)'],
        es: ['Diarrea aguda inespecífica y Diarrea del Viajero', 'Dispepsia (acidez, náuseas)', 'Esquema cuádruple de rescate para erradicación de H. pylori resistente']
      },
      commercialNames: { br: ['Pepto-Bismol (importado)', 'Bismu-Jet (Assoc)'], ar: ['Pepto-Bismol', 'Bismuto Bisil'] },
      presentation: { pt: ['Suspensão oral 17,6 mg/mL (262 mg/15 mL)', 'Comprimidos mastigáveis 262 mg'], es: ['Suspensión oral 17,6 mg/mL', 'Comprimidos masticables 262 mg'] },
      mechanism: {
        pt: 'Duplo Ataque Mucosal. O ácido gástrico cliva a molécula em dois componentes ativos: (1) Oxicloreto de Bismuto — bactericida direto contra H. pylori e adsorção de enterotoxinas bacterianas (ETEC, etc.); (2) Ácido Salicílico — inibe a COX intestinal, reduzindo síntese de prostaglandinas inflamatórias e secreção de fluidos no lúmen intestinal, "secando" a diarreia rapidamente.',
        es: 'El ácido gástrico disocia la molécula en: (1) Oxicloruro de Bismuto — bactericida contra H. pylori y adsorción de enterotoxinas; (2) Ácido Salicílico — inhibe COX intestinal, reduciendo prostaglandinas inflamatorias y secreción luminal de fluidos, "secando" la diarrea.'
      },
      dose: {
        adult: {
          pt: 'Diarreia/Azia: 524 mg (2 comprimidos mastigáveis ou 30 mL de suspensão) via oral a cada 30–60 min conforme necessidade. TETO ABSOLUTO: 8 doses (4,2 g) ao dia, por no máximo 2 dias consecutivos.',
          es: 'Diarrea/Acidez: 524 mg vía oral cada 30-60 min según necesidad. TECHO ABSOLUTO: 8 dosis (4,2 g) al día, máximo 2 días consecutivos.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADO em menores de 12 anos (componente salicilato → Síndrome de Reye fatal).',
          es: 'ABSOLUTAMENTE CONTRAINDICADO en menores de 12 años (componente salicilato → Síndrome de Reye fatal).'
        }
      },
      administration: { pt: ['Comprimidos: mastigar completamente antes de engolir. Suspensão: agitar bem antes de usar. Uso estritamente oral — para uso a curto prazo (máximo 2 dias consecutivos na diarreia aguda).'], es: ['Comprimidos: masticar completamente. Suspensión: agitar bien antes de usar. Uso estrictamente oral a corto plazo.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar uso crônico ou em altas doses em insuficiência renal avançada — risco de absorção sistêmica de Bismuto com neurotoxicidade (encefalopatia pelo bismuto).', es: 'Evitar uso crónico en insuficiencia renal avanzada por riesgo de absorción sistémica de Bismuto y encefalopatía.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['LÍNGUA NEGRA (reação inofensiva do Bismuto com enxofre da saliva — Sulfeto de Bismuto)', 'FEZES NEGRAS e endurecidas (idem)', 'Constipação transitória'], es: ['LENGUA NEGRA (reacción del Bismuto con el azufre salival — inocua)', 'HECES NEGRAS (ídem)', 'Estreñimiento transitorio'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE REYE em crianças com infecção viral (encefalopatia hepática fulminante)', 'Salicilismo por superdose (zumbido no ouvido, surdez, acidose respiratória)', 'Encefalopatia pelo Bismuto (uso crônico em renais — alucinações, convulsões)'], es: ['SÍNDROME DE REYE en niños con infección viral', 'Salicilismo por sobredosis (zumbido en oídos, acidosis respiratoria)', 'Encefalopatía por Bismuto (uso crónico en ERC)'] },
      contraindications: {
        absolute: { pt: ['Menores de 12 anos com gripe, varicela ou outros vírus (risco de morte por Síndrome de Reye)', 'Alergia grave ao AAS ou qualquer salicilato', 'Sangramento gastrointestinal ativo'], es: ['Menores de 12 años con gripe, varicela u otras infecciones virales (Síndrome de Reye)', 'Alergia grave al AAS o salicilatos', 'Sangrado digestivo activo'] },
        relative: { pt: ['Uso concomitante com anticoagulantes (Varfarina) ou antiplaquetários — somação de efeito antiplaquetário do salicilato'], es: ['Uso con anticoagulantes (Warfarina) o antiplaquetarios — potenciación del efecto antiagregante'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SUSTO DA LÍNGUA E FEZES PRETAS (NUNCA CONFUNDIR COM HEMORRAGIA): Ao tomar Pepto-Bismol, o Bismuto reage com o enxofre da saliva e das bactérias do cólon formando Sulfeto de Bismuto preto como carvão. A língua fica preta e as fezes viram carvão escuro. Muitos pacientes correm ao pronto-socorro convictos de estar tendo uma hemorragia digestiva alta. É um efeito cosmético totalmente INOFENSIVO que desaparece ao cessar o uso. Orienta o paciente antes.', es: 'EL SUSTO DE LA LENGUA Y HECES NEGRAS (NUNCA CONFUNDIR CON HEMORRAGIA): El Bismuto reacciona con el azufre salival y del colon, formando Sulfuro de Bismuto (negro como carbón). La lengua se tiñe de negro y las heces se oscurecen. Pacientes acuden urgencias creyendo sufrir una hemorragia masiva. Es un efecto INOFENSIVO que desaparece al suspender el uso.' }
      },
      references: {
        pt: 'FDA Prescribing Data Pepto-Bismol; Chey WD et al., ACG Guidelines H. pylori 2017; CDC Yellow Book Chapter Travelers Diarrhea; Gorbach SL, Rev Infect Dis 1990 (bismuto na diarreia do viajante).',
        es: 'FDA Prescribing Data (Pepto-Bismol); Chey WD et al., ACG Guidelines H. pylori 2017; CDC Yellow Book; Gorbach SL, Rev Infect Dis 1990.'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 435 (famotidina + cimetidina + sucralfato + subsalicilato_de_bismuto — Encerramento Histórico Módulo Gastro) */

  /* ── BUILD 436 — Protetores Físicos + Laxantes Salinos/Tensoativos ── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

/* ── ALGINATO DE SÓDIO ───────────────────────────────────────────────── */
    "alginato_de_sodio": {
      name: { pt: 'Alginato de Sódio', es: 'Alginato de Sodio' },
      category: 'gastroenterologia',
      class: { pt: 'Agente de Barreira Antirrefluxo Mecânica / Polissacarídeo Natural', es: 'Agente de Barrera Antirreflujo Mecánica / Polisacárido Natural' },
      indications: {
        pt: ['Alívio imediato dos sintomas de refluxo gastroesofágico (pirose, queimação, regurgitação ácida) especialmente pós-prandial', 'Gestação — 1ª linha para sintomas de refluxo na gravidez (segurança comprovada, não absorvido)', 'Esofagite por refluxo leve em alternativa ou complemento ao IBP'],
        es: ['Alivio inmediato de síntomas de reflujo gastroesofágico (pirosis, regurgitación ácida) especialmente posprandial', 'Embarazo — 1ª línea para reflujo gestacional (seguro, no absorbido)', 'Esofagitis por reflujo leve']
      },
      commercialNames: { br: ['Gaviscon'], ar: ['Gaviscon', 'Algiscon'] },
      presentation: { pt: ['Suspensão oral em frasco 150 mL (Alginato de Sódio + Bicarbonato de Sódio/Potássio)', 'Comprimidos mastigáveis'], es: ['Suspensión oral en frasco', 'Comprimidos masticables'] },
      mechanism: {
        pt: 'A Balsa Física do Estômago. Ao entrar em contato com o ácido clorídrico gástrico, o alginato precipita-se formando instantaneamente um gel de ácido algínico de pH neutro. O bicarbonato presente na fórmula reage com o HCl liberando CO₂, cujas bolhas ficam aprisionadas dentro do gel — fazendo-o flutuar como uma "balsa" bem na junção esofagogástrica. Essa balsa bloqueia fisicamente o refluxo ácido, atuando como um tampão mecânico sem suprimir a secreção ácida global.',
        es: 'Al contacto con el HCl gástrico, precipita formando un gel de ácido algínico pH neutro. El bicarbonato libera CO₂, cuyas burbujas quedan atrapadas en el gel, haciéndolo flotar como una "balsa" en la unión gastroesofágica. Esta barrera mecánica bloquea físicamente el reflujo sin suprimir la secreción ácida global.'
      },
      dose: {
        adult: {
          pt: '10 mL a 20 mL da suspensão oral (ou 2 a 4 comprimidos mastigáveis) após as principais refeições e antes de deitar. Máximo 4 doses ao dia.',
          es: '10 a 20 mL de la suspensión oral (o 2-4 comprimidos masticables) tras las comidas principales y antes de acostarse. Máximo 4 dosis al día.'
        },
        pediatric: {
          pt: 'Crianças > 12 anos: mesma dose do adulto. Menores de 12 anos: apenas sob prescrição médica e formulação pediátrica específica.',
          es: 'Niños > 12 años: dosis de adulto. < 12 años: solo con prescripción médica.'
        }
      },
      administration: { pt: ['Administrar estritamente APÓS as refeições ou no momento exato da crise de queimação. Comprimidos DEVEM ser mastigados completamente — engolir inteiro impede a formação da balsa. Não beber grande volume de água logo após para não diluir e afundar o gel. Manter-se sentado ou com cabeceira elevada ≥ 30 min após a tomada.'], es: ['Administrar estrictamente DESPUÉS de las comidas o en plena crisis de pirosis. Los comprimidos DEBEN masticarse por completo. No beber abundante agua inmediatamente después. Permanecer sentado o con cabecera elevada ≥ 30 min.'] },
      renalAdjustment: { required: true, message: { pt: 'Contém Sódio e Potássio na co-formulação. Usar com cautela em insuficiência renal terminal (ClCr < 30 mL/min) — risco de sobrecarga eletrolítica.', es: 'Contiene Sodio y Potasio. Precaución en insuficiencia renal terminal (ClCr < 30) por sobrecarga electrolítica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente — sem necessidade de ajuste.', es: 'No se absorbe sistémicamente — sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Flatulência e eructação (arrotos por liberação de CO₂ do gel)', 'Constipação leve'], es: ['Flatulencia y eructos (por liberación de CO₂)', 'Estreñimiento leve'] },
      dangerousAdverseEffects: { pt: ['Sobrecarga de sódio com descompensação de Insuficiência Cardíaca Congestiva em uso abusivo e massivo'], es: ['Descompensación de insuficiencia cardíaca por sobrecarga de sodio en uso abusivo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada ao alginato ou componentes da formulação'], es: ['Hipersensibilidad al alginato o excipientes'] },
        relative: { pt: ['Dieta restrita de sódio estrita ou cardiopatia descompensada com anasarca (pela carga de Na⁺ e K⁺)'], es: ['Dieta estricta en sodio o cardiopatía descompensada con anasarca'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A BALSA QUE NÃO FUNCIONA DEITADO: O alginato funciona de modo puramente físico por flutuação. Se o paciente tomar o Gaviscon e deitar horizontalmente logo em seguida, a balsa se desloca lateralmente e o ácido escapa pelos lados, anulando o efeito. Oriente: manter-se sentado ou com cabeceira elevada a 30–45° por pelo menos 30 minutos após a dose.', es: 'LA BALSA QUE NO FUNCIONA ACOSTADO: El alginato actúa flotando. Si el paciente se acuesta enseguida, la balsa se desplaza y el ácido escapa. Instrucción obligatoria: permanecer sentado o con la cabecera elevada 30-45° durante al menos 30 minutos.' }
      },
      references: {
        pt: 'Mandel KG et al., Aliment Pharmacol Ther 2000;14:669-90 (mecanismo balsa); Diretrizes FBG para DRGE 2022; Bula Gaviscon Reckitt Benckiser Brasil 2024.',
        es: 'Mandel KG et al., Aliment Pharmacol Ther 2000;14:669-90; Guías de la SAGE para ERGE 2022; Ficha Técnica CIMA Gaviscon.'
      }
    },

/* ── PICOSSULFATO DE SÓDIO ───────────────────────────────────────────── */
    "picossulfato_de_sodio": {
      name: { pt: 'Picossulfato de Sódio', es: 'Picosulfato de Sodio' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Catártico Estimulante / Pró-fármaco de Ativação Cólica por Microbiota', es: 'Laxante Catártico Estimulante / Profármaco de Activación Cólica por Microbiota' },
      indications: {
        pt: ['Tratamento a curto prazo da constipação intestinal aguda ou crônica refratária', 'Preparo de cólon para colonoscopia e cirurgias colorretais (formulações em envelopes associadas ao óxido de magnésio)'],
        es: ['Tratamiento a corto plazo de la constipación intestinal', 'Preparación de colon para colonoscopia y cirugías colorrectales']
      },
      commercialNames: { br: ['Guttalax', 'Dulcolax Gotas', 'Picoprep (Assoc Óxido Mg)'], ar: ['Rapilax', 'Guttalax Argentina'] },
      presentation: { pt: ['Solução oral em gotas 7,5 mg/mL', 'Pó para solução oral em envelopes (associado a óxido de magnésio e ácido cítrico — Picoprep)'], es: ['Solución oral (gotas) 7,5 mg/mL', 'Polvo en sobres (asociado a óxido de magnesio — Picoprep)'] },
      mechanism: {
        pt: 'O Laxante Robô do Cólon. O picossulfato ingerido é totalmente inativo no estômago e intestino delgado — passa inalterado até o cólon. Lá, bactérias da microbiota colônica hidrolisam a molécula por sulfatases, liberando o metabólito ativo (BHPM — bis-(p-hydroxyphenyl)-pyridyl-2-methane). O BHPM estimula diretamente os plexos mientéricos da parede cólica, disparando contrações peristálticas violentas e inibindo a reabsorção de água e eletrólitos — liquefazendo as fezes e expulsando-as em 6 a 12 horas.',
        es: 'Profármaco laxante estimulante. Inactivo en estómago e intestino delgado; llega inalterado al colon. Allí, las bacterias de la microbiota lo hidrolizan mediante sulfatasas, liberando el metabolito activo BHPM. Este estimula los plexos mientéricos disparando contracciones peristálticas violentas e inhibiendo la reabsorción de agua y electrolitos.'
      },
      dose: {
        adult: {
          pt: 'Constipação: 5 a 10 mg (10 a 20 gotas) via oral em dose única à noite antes de dormir. Efeito em 6–12 horas. Preparo colonoscopia: esquema Picoprep conforme protocolo (2 envelopes com intervalo).',
          es: 'Constipación: 5 a 10 mg (10 a 20 gotas) en dosis única por la noche. Efecto en 6-12 horas. Preparación colonoscopia: esquema Picoprep en 2 sobres según protocolo.'
        },
        pediatric: {
          pt: 'Crianças 4–10 anos: 2,5 a 5 mg (5–10 gotas) à noite. Menores de 4 anos: 0,1 mg/kg à noite.',
          es: 'Niños 4-10 años: 2,5 a 5 mg (5-10 gotas) por la noche. < 4 años: 0,1 mg/kg.'
        }
      },
      administration: { pt: ['Administrar à noite para que a evacuação ocorra pela manhã. Pode ser diluído em água ou suco. Para o preparo de colonoscopia com Picoprep: ingerir cada envelope diluído em 150 mL de água fria, seguido de volumes extras de líquidos claros (mínimo 1,5 L adicionais) para evitar desidratação.'], es: ['Administrar por la noche. Puede diluirse en agua o jugo. Para Picoprep: disolver en 150 mL de agua fría y completar con 1,5 L adicionales de líquidos claros.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose, mas o preparo de cólon com Picoprep exige hipervigilância hídrica e eletrolítica — monitorar K⁺ e Mg²⁺.', es: 'Sin ajuste de dosis, pero la preparación con Picoprep requiere vigilancia estricta de hidratación y electrolitos (K⁺, Mg²⁺).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cólicas abdominais intensas e espasmos (estimulação do plexo mientérico)', 'Diarreia aquosa volumosa', 'Desidratação leve a moderada'], es: ['Cólicos abdominales intensos', 'Diarrea acuosa abundante', 'Deshidratación leve a moderada'] },
      dangerousAdverseEffects: { pt: ['ESPOLIAÇÃO CRÍTICA DE ELETRÓLITOS — hipocalemia severa (K⁺ < 2,5 mEq/L) por perda diarreica → risco de arritmia letal', 'Atonia cólica crônica (cólon catártico) por uso abusivo prolongado — destruição dos neurônios do plexo mientérico', 'Choque hipovolêmico em preparo de colonoscopia sem reposição hídrica adequada'], es: ['PÉRDIDA CRÍTICA DE ELECTROLITOS — hipopotasemia severa por diarrea → arritmia letal', 'Colon catártico / Atonía cólica crónica por abuso prolongado', 'Choque hipovolémico en preparación de colonoscopia sin hidratación adecuada'] },
      contraindications: {
        absolute: { pt: ['Abdome agudo cirúrgico, obstrução intestinal mecânica ou perfuração', 'Desidratação severa, megacólon tóxico ou íleo paralítico'], es: ['Abdomen agudo quirúrgico, obstrucción intestinal mecánica', 'Deshidratación severa, megacolon tóxico o íleo paralítico'] },
        relative: { pt: ['Uso contínuo > 7 dias sem supervisão médica (risco de dependência intestinal e cólon catártico)'], es: ['Uso continuo > 7 días sin supervisión médica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O INTESTINO VICIADO (CÓLON CATÁRTICO): O uso diário por meses de Guttalax destrói progressivamente os neurônios do plexo mientérico do intestino grosso. O cólon "esquece" de contrair sozinho e se torna atônico de forma irreversível — o paciente desenvolve constipação intratável que às vezes exige colectomia. Use no MÁXIMO 5 a 7 dias consecutivos.', es: 'EL INTESTINO ADICTO (COLON CATÁRTICO): El uso diario por meses destruye progresivamente las neuronas del plexo mientérico del colon. El colon pierde su motilidad autónoma de forma irreversible. Limite el uso a máximo 5-7 días consecutivos.' }
      },
      references: {
        pt: 'Kienzle-Horn S et al., Aliment Pharmacol Ther 2006;23:1439-48 (eficácia picossulfato vs lactulose); Diretrizes FBG para Constipação 2018; Bula Guttalax Boehringer Ingelheim Brasil 2024.',
        es: 'Kienzle-Horn S et al., Aliment Pharmacol Ther 2006;23:1439-48; Guías de Constipación SAGE; Ficha Técnica CIMA Picosulfato de Sodio.'
      }
    },

/* ── DOCUSATO DE SÓDIO ───────────────────────────────────────────────── */
    "docusato_de_sodio": {
      name: { pt: 'Docusato de Sódio', es: 'Docusato de Sodio' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Tensoativo / Amaciante e Emoliente de Fezes por Quebra de Tensão Superficial', es: 'Laxante Tensoactivo / Ablandador y Emoliente de Heces por Reducción de Tensión Superficial' },
      indications: {
        pt: ['Prevenção e tratamento da constipação com fezes excessivamente duras e ressecadas', 'Profilaxia do esforço evacuatório (Manobra de Valsalva) em pacientes de alto risco: pós-IAM, pós-cirurgia cardíaca, aneurisma cerebral, pós-operatório de hemorroidas', 'Facilitação evacuatória em pacientes acamados ou com mobilidade reduzida'],
        es: ['Prevención y tratamiento de constipación con heces endurecidas', 'Profilaxis del esfuerzo evacuatorio (Valsalva) en postinfarto, poscirugía cardíaca, aneurisma cerebral, posoperatorio de hemorroides', 'Facilitación evacuatoria en pacientes encamados']
      },
      commercialNames: { br: ['Humactil', 'Docusato Sódio Medley'], ar: ['Docusato Sodio', 'Modaton (Assoc)'] },
      presentation: { pt: ['Cápsulas moles 100 mg', 'Solução oral gotas 50 mg/mL'], es: ['Cápsulas blandas 100 mg', 'Solución oral gotas'] },
      mechanism: {
        pt: 'O Detergente do Intestino. O Docusato de Sódio é um surfactante aniônico (detergente biológico). Ele quebra a tensão superficial que separa os componentes aquosos e lipídicos da massa fecal, forçando a água do próprio lúmen intestinal a penetrar no interior das fezes endurecidas e se misturar com a gordura fecal. As fezes "murcham" e amolecem como uma esponja embebida — deslizando facilmente pelo reto sem necessidade de qualquer esforço de pujo.',
        es: 'Surfactante aniónico (detergente biológico). Rompe la tensión superficial de la masa fecal, forzando la penetración de agua del lumen en el interior de las heces endurecidas. Las heces se ablandan y se desplazan fácilmente por el recto sin esfuerzo de pujo.'
      },
      dose: {
        adult: {
          pt: '100 mg a 200 mg via oral uma vez ao dia, preferencialmente à noite com copo cheio de água (250 mL). Efeito amaciante em 24 a 72 horas.',
          es: '100 a 200 mg vía oral una vez al día, preferentemente por la noche con vaso lleno de agua (250 mL). Efecto en 24-72 horas.'
        },
        pediatric: {
          pt: 'Crianças 6–12 anos: 50 mg a 100 mg ao dia via oral.',
          es: 'Niños 6-12 años: 50 a 100 mg al día.'
        }
      },
      administration: { pt: ['Tomar com copo cheio de água (250 mL mínimo). O efeito amaciante leva 24 a 72 horas para se estabelecer completamente no bolo fecal — não esperar efeito catártico imediato. PROIBIDO combinar com óleo mineral (risco de hepatotoxicidade por absorção forçada — ver interações).'], es: ['Tomar con vaso lleno de agua. El efecto tarda 24-72 horas en completarse. PROHIBIDO combinar con aceite mineral (riesgo de hepatotoxicidad por absorción forzada).'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima absorção sistêmica — sem necessidade de ajuste.', es: 'Absorción sistémica mínima — sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cólicas abdominais leves', 'Sabor amargo na boca ou irritação faríngea (solução em gotas)', 'Náusea'], es: ['Cólicos abdominales leves', 'Sabor amargo o irritación faríngea (gotas)', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE SEVERA E GRANULOMATOSE se combinado com óleo mineral (absorção forçada do óleo para o fígado e linfonodos)', 'Desidratação e distúrbios eletrolíticos por superdosagem'], es: ['HEPATOTOXICIDAD SEVERA Y GRANULOMATOSIS si combinado con aceite mineral', 'Deshidratación y trastornos electrolíticos por sobredosis'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal ativa, apendicite aguda ou dor abdominal de causa desconhecida', 'USO CONCOMITANTE COM ÓLEO MINERAL (absoluta — hepatotoxicidade fatal)'], es: ['Obstrucción intestinal, apendicitis aguda', 'USO CONCOMITANTE CON ACEITE MINERAL (absoluta — hepatotoxicidad)'] },
        relative: { pt: ['Dependência psicológica de laxantes (avaliar causa subjacente da constipação)'], es: ['Dependencia psicológica de laxantes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ESCUDO DO CORAÇÃO PÓS-INFARTO: O Docusato é o queridinho das UTIs cardíacas. Um paciente que acabou de infartar ou fez cirurgia cardíaca e faz esforço extremo de pujo (Manobra de Valsalva) pode ter um pico de pressão intracraniana que rompe a artéria ou causa arritmia fatal. O Docusato garante que as fezes saiam sozinhas e suavemente — protegendo a coronária recém-tratada. NUNCA combinar com óleo mineral: o Docusato força a absorção hepática do óleo, causando granulomas hepáticos permanentes.', es: 'EL ESCUDO CARDÍACO POSINFARTO: El Docusato protege al paciente postinfarto del esfuerzo de pujo (Valsalva) que puede romper la coronaria recién tratada. NUNCA combinar con Aceite Mineral: el Docusato fuerza la absorción hepática del aceite, provocando granulomas hepáticos permanentes.' }
      },
      references: {
        pt: 'FDA Prescribing Data Colace (docusato de sódio); Diretrizes AHA/SBC pós-IAM (profilaxia esforço evacuatório); Goodman & Gilman Farmacologia; Bula Humactil Anvisa 2024.',
        es: 'FDA Prescribing Data (Colace); Guías AHA postinfarto; Goodman & Gilman Farmacología; Ficha Técnica CIMA Docusato de Sodio.'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 436 (alginato_de_sodio + picossulfato_de_sodio + docusato_de_sodio — Protetores Físicos e Laxantes Tensoativos) */

  /* ── BUILD 438 guard ─────────────────────────────────────────────── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

/* ── RABEPRAZOL ─────────────────────────────────────────────────────── */
    "rabeprazol": {
      name: { pt: 'Rabeprazol Sódico', es: 'Rabeprazol Sódico' },
      category: 'gastroenterologia',
      class: { pt: 'Inibidor da Bomba de Prótons (IBP) de Ação Rápida', es: 'Inhibidor de la Bomba de Protones (IBP) de Acción Rápida' },
      indications: {
        pt: ['Doença do Refluxo Gastroesofágico (DRGE) erosiva ou ulcerativa', 'Tratamento de Úlcera Duodenal e Gástrica ativa', 'Erradicação de Helicobacter pylori', 'Condições hipersecretórias patológicas (Síndrome de Zollinger-Ellison)'],
        es: ['Enfermedad por Reflujo Gastroesofágico (ERGE) erosiva', 'Úlcera Duodenal y Gástrica activa', 'Erradicación de Helicobacter pylori', 'Síndrome de Zollinger-Ellison']
      },
      commercialNames: { br: ['Pariet'], ar: ['Pariet', 'Rabec'] },
      presentation: { pt: ['Comprimidos gastrorresistentes 10 mg e 20 mg'], es: ['Comprimidos gastrorresistentes 10 mg y 20 mg'] },
      mechanism: {
        pt: 'O Mais Rápido dos IBPs. Assim como os outros membros da classe, ele inibe de forma irreversível a enzima $H^+/K^+-ATPase$ nas células parietais. O seu grande trunfo molecular: ele possui um pKa mais elevado, o que significa que ele se ativa muito mais rápido nos canalículos ácidos do estômago. Alcança o bloqueio ácido máximo logo no primeiro dia de tomada, enquanto o omeprazol pode levar até 3 dias para estabilizar.',
        es: 'Inhibidor irreversible de la bomba de protones ($H^+/K^+-ATPase$). Debido a un pKa más elevado en comparación con otros IBP, se activa de forma significativamente más veloz en los canalículos de la célula parietal, logrando un control del pH gástrico óptimo desde la primera dosis.'
      },
      dose: {
        adult: {
          pt: 'DRGE e Úlceras: 20 mg via oral, UMA VEZ ao dia, pela manhã. Casos leves podem iniciar com 10 mg ao dia. Curso usual de 4 a 8 semanas.',
          es: 'ERGE y Úlceras: 20 mg vía oral, UNA VEZ al día por la mañana. Casos leves: 10 mg al día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 12 anos para DRGE na dose de 20 mg uma vez ao dia por até 8 semanas.',
          es: 'Aprobado en niños > 12 años: 20 mg una vez al día.'
        }
      },
      administration: { pt: ['Deve ser tomado pela manhã, preferencialmente 30 minutos antes do café da manhã. O comprimido deve ser engolido inteiro, sem mastigar, quebrar ou triturar.'], es: ['Tomar por la mañana en ayunas, 30 minutos antes del desayuno. Tragar entero sin masticar.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose em pacientes com disfunção renal.', es: 'Sin necesidad de ajuste en insuficiencia renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado pelo fígado. Em pacientes com cirrose hepática severa, monitorar rigidamente; evitar o uso de doses elevadas crônicas.', es: 'Precaución en insuficiencia hepática grave por metabolismo prolongado.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Diarreia leve ou dor abdominal episódica', 'Faringite e astenia'], es: ['Cefalea', 'Diarrea leve o dolor abdominal', 'Faringitis'] },
      dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda (reação alérgica renal)', 'Hipomagnesemia severa se uso por mais de 1 ano', 'Aumento do risco de infecções por Clostridioides difficile'], es: ['Nefritis Intersticial Aguda', 'Hipomagnesemia severa por uso prolongado', 'Infección por Clostridioides difficile'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao rabeprazol ou a qualquer benzimidazol substituído'], es: ['Hipersensibilidad conocida al fármaco'] },
        relative: { pt: ['Uso concomitante com atazanavir ou rilpivirina (reduz a eficácia do tratamento do HIV)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A VANTAGEM DO METABOLISMO LIMPO: Ao contrário do Omeprazol, o Rabeprazol é metabolizado principalmente por uma via não-enzimática (redução química) e tem baixíssima dependência do citocromo CYP2C19. Por isso, ele quase não interage com o Clopidogrel, sendo uma excelente opção para o paciente cardiopata.', es: 'BAJA INTERACCIÓN HEPÁTICA: A diferencia del omeprazol, su metabolismo es predominantemente no enzimático. Presenta una afinidad mínima por la enzima CYP2C19, lo que minimiza el riesgo de interacciones con el antiagregante Clopidogrel.' }
      },
      references: {
        pt: 'FDA Prescribing Information Aciphex/Pariet; Diretrizes de DRGE da Federação Brasileira de Gastroenterologia; Am J Gastroenterol.',
        es: 'FDA Prescribing Information; Ficha Técnica CIMA Rabeprazol; Guías de Consenso de la SEPD.'
      }
    },

/* ── DEXLANSOPRAZOL ─────────────────────────────────────────────────── */
    "dexlansoprazol": {
      name: { pt: 'Dexlansoprazol', es: 'Dexlansoprazol' },
      category: 'gastroenterologia',
      class: { pt: 'Inibidor da Bomba de Prótons de Liberação Dupla Retardada', es: 'Inhibidor de la Bomba de Protones de Liberación Dual Retardada' },
      indications: {
        pt: ['Cicatrização de todos os graus de esofagite erosiva', 'Manutenção da cicatrização da esofagite e alívio da azia', 'Tratamento da azia associada à DRGE não-erosiva'],
        es: ['Cicatrización de todos los grados de esofagitis erosiva', 'Mantenimiento de la esofagitis cicatrizada', 'Tratamiento de ERGE no erosiva']
      },
      commercialNames: { br: ['Dexilant'], ar: ['Dexilant'] },
      presentation: { pt: ['Cápsulas de liberação modificada 30 mg e 60 mg'], es: ['Cápsulas de liberación modificada 30 mg y 60 mg'] },
      mechanism: {
        pt: 'A Tecnologia de Dois Picos. É o enantiômero R puro do lansoprazol. Sua cápsula possui uma engenharia de liberação modificada dupla exclusiva (DDR). Ela libera dois tipos de grânulos em momentos diferentes: os primeiros 25% dos grânulos abrem no duodeno logo após a ingestão; os outros 75% abrem horas depois no intestino delgado proximal. Isso cria dois picos de remédio no sangue, estendendo o bloqueio do ácido por até 24 horas reais.',
        es: 'Es el enantiómero R activo del lansoprazol. Utiliza una tecnología de Liberación Dual Retardada (DDR) con dos tipos de gránulos que se activan a diferentes pH intestinales. El primer pico ocurre 1-2 horas tras la ingesta; el segundo ocurre 4-5 horas después, prolongando la supresión ácida durante todo el día.'
      },
      dose: {
        adult: {
          pt: 'Cicatrização de Esofagite: 60 mg via oral, UMA VEZ ao dia, por até 8 semanas. Manutenção e DRGE não-erosiva: 30 mg via oral ao dia.',
          es: 'Cicatrización de Esofagitis: 60 mg vía oral, UNA VEZ al día por 8 semanas. Mantenimiento: 30 mg al día.'
        },
        pediatric: {
          pt: 'Aprovado para adolescentes a partir de 12 anos nas mesmas doses do adulto.',
          es: 'Aprobado en pacientes >= 12 años.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. As cápsulas devem ser engolidas inteiras. Para pacientes com disfagia, a cápsula pode ser aberta e os microgrânulos salpicados em uma colher de purê de maçã.'], es: ['Puede tomarse con o sin alimentos. No masticar los microgránulos internos al abrir la cápsula.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose em renais crônicos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada (Child-Pugh B), a dose máxima permitida é de 30 mg ao dia. Contraindicado na insuficiência grave.', es: 'En insuficiencia hepática moderada, dosis máxima de 30 mg/día. Evitar en falla grave.' } },
      commonAdverseEffects: { pt: ['Diarreia leve', 'Dor abdominal e flatulência', 'Náuseas', 'Sintomas de resfriado (infecção do trato respiratório superior)'], es: ['Diarrea leve', 'Dolor abdominal y flatulencia', 'Náuseas', 'Infección respiratoria superior'] },
      dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda', 'Fraturas ósseas por osteopenia em uso crônico abusivo', 'Hipomagnesemia grave e espasmos musculares'], es: ['Nefritis Intersticial Aguda', 'Riesgo de fracturas óseas a largo plazo', 'Hipomagnesemia profunda'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao dexlansoprazol ou componentes da fórmula'], es: ['Hipersensibilidad conocida al dexlansoprazol'] },
        relative: { pt: ['Uso associado crônico com anti-inflamatórios sem indicação profilática estrita'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A LIBERDADE DO HORÁRIO: Enquanto todos os outros IBPs do mercado forçam o paciente a ser escravo do jejum matinal estrito de 30 minutos, a liberação dupla do Dexlansoprazol quebra essa regra. Ele pode ser tomado a qualquer hora do dia, com ou sem comida, sem perder sua capacidade de blindagem ácida.', es: 'LA LIBERTAD DEL AYUNO: A diferencia de los IBP clásicos que exigen un ayuno estricto prandial, la tecnología de liberación dual modificada permite que Dexlansoprazol sea administrado a cualquier hora del día, con o sin alimentos, manteniendo el mismo perfil de eficacia.' }
      },
      references: {
        pt: 'FDA Approval Data Dexilant; Estudo Clínico de Eficácia DDR de dexlansoprazol; Consenso de DRGE da FBG.',
        es: 'FDA Prescribing Information (Dexilant); Guías Clínicas de la Organización Mundial de Gastroenterología.'
      }
    },

/* ── SUBCITRATO DE BISMUTO ──────────────────────────────────────────── */
    "subcitrato_de_bismuto": {
      name: { pt: 'Subcitrato de Bismuto Coloidal', es: 'Subcitrato de Bismuto Coloidal' },
      category: 'gastroenterologia',
      class: { pt: 'Protetor de Mucosa / Agente Antibacteriano Anti-H. pylori', es: 'Protector de la Mucosa / Agente Antibacteriano Anti-H. pylori' },
      indications: {
        pt: ['Componente essencial do esquema quádruplo de resgate para erradicação de Helicobacter pylori (associado a Tetraciclina, Metronidazol e um IBP)', 'Tratamento de Úlceras pépticas ativas'],
        es: ['Componente del esquema cuádruple clásico de erradicación de Helicobacter pylori', 'Tratamiento de Úlceras pépticas']
      },
      commercialNames: { br: ['Pylera (Dose combinada importada)'], ar: ['Biscoloid', 'Bismuto Coloidal'] },
      presentation: { pt: ['Cápsulas ou comprimidos contendo equivalência de sal de bismuto coloidal (geralmente 120 mg)'], es: ['Comprimidos de 120 mg de bismuto coloidal'] },
      mechanism: {
        pt: 'O Verniz Estomacal Antibacteriano. No estômago, ele se solubiliza formando um quelato coloidal que se precipita seletivamente sobre o cráter da úlcera, criando um verniz protetor contra a pepsina. Adicionalmente, ele penetra na parede celular da bactéria *Helicobacter pylori*, rompendo sua membrana e inibindo suas enzimas vitais, levando à lise bacteriana sem induzir resistência genética.',
        es: 'Se precipita selectivamente en el medio ácido del cráter ulceroso, uniéndose a las proteínas de la mucosa para formar una capa protectora. Ejerce además una acción bactericida directa contra Helicobacter pylori mediante la degradación de su pared celular y la inhibición de sus sistemas enzimáticos.'
      },
      dose: {
        adult: {
          pt: 'Erradicação de H. pylori: 120 mg via oral, QUATRO vezes ao dia (geralmente tomado como 120mg antes das 3 refeições e antes de dormir), por 10 a 14 dias associado ao combo antimicrobiano.',
          es: 'Erradicación de H. pylori: 120 mg vía oral, CUATRO veces al día (antes de las comidas y al acostarse) por 10-14 días en terapia cuádruple.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou estabelecido na rotina pediátrica.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Tomar os comprimidos com um copo cheio de água de estômago vazio antes das refeições. Não tomar junto com leite ou antiácidos simples, pois necessita de acidez inicial para precipitar.'], es: ['Tomar antes de las comidas con agua. Evitar lácteos o antiácidos simples simultáneos.'] },
      renalAdjustment: { required: true, message: { pt: 'Uma pequena fração de bismuto é absorvida. Absolutamente CONTRAINDICADO na insuficiência renal grave (ClCr < 30 mL/min) devido ao risco crítico de acúmulo e Encefalopatia por Bismuto.', es: 'Absolutamente CONTRAINDICADO si ClCr < 30 mL/min por riesgo de neurotoxicidad y Encefalopatía por Bismuto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Escurecimento da língua (aspecto negro inofensivo)', 'Fezes pretas pastosas (pode mimetizar melena/sangramento)', 'Constipação'], es: ['Coloración oscura de la lengua', 'Heces negras (puede confundirse con melena)', 'Estreñimiento'] },
      dangerousAdverseEffects: { pt: ['ENCEFALOPATIA POR BISMUTO (quadro de confusão mental, tremores, mioclonias e convulsões por intoxicação - uso prolongado ou renal crônico)'], es: ['ENCEFALOPATÍA POR BISMUTO (Neurotoxicidad grave con mioclonías y confusión por acumulación)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência renal grave (ClCr < 30 mL/min)', 'Gravidez e lactação'], es: ['Insuficiencia renal grave (ClCr < 30)', 'Embarazo y lactancia'] },
        relative: { pt: ['Uso concomitante com outras pílulas contendo salicilatos ou metais'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A FALSA HEMORRAGIA (O SUSTO DAS FEZES): O subcitrato de bismuto reage com o enxofre no trato gastrointestinal e transforma as fezes em uma cor preta escura como carvão. O paciente corre apavorado para o hospital achando que está tendo uma hemorragia digestiva alta (melena). Avise preventivamente o paciente para evitar pânico.', es: 'ALERTA DE LA FALSA MELENA: El bismuto reacciona con los sulfuros intestinales tiñendo las heces de un color negro intenso. Esto simula perfectamente una melena (sangrado digestivo alto), generando pánico en el paciente. Es mandatorio advertir al paciente antes de iniciar el esquema.' }
      },
      references: {
        pt: 'Maastricht VI/Florence Consensus Report (H. pylori); ACG Clinical Guideline; Manual de Infectologia Hospitalar.',
        es: 'Maastricht VI Consensus Report; Guías de Erradicación de H. pylori de la SAGE.'
      }
    },

/* ── ITOPRIDA ───────────────────────────────────────────────────────── */
    "itoprida": {
      name: { pt: 'Itoprida (Cloridrato de)', es: 'Itoprida (Clorhidrato de)' },
      category: 'gastroenterologia',
      class: { pt: 'Procinético Gastrointestinal / Antagonista D2 e Inibidor da Acetilcolinesterase', es: 'Proquinético Gastrointestinal / Antagonista D2 e Inhibidor de la Acetilcolinesterasa' },
      indications: {
        pt: ['Tratamento de sintomas de Dispepsia Não-Ulcerosa (empachamento, saciedade precoce, dor ou desconforto epigástrico)', 'Gastroparesia diabética leve a moderada'],
        es: ['Tratamiento de Dispepsia No Ulcerosa', 'Gastroparesia diabética leve o moderada']
      },
      commercialNames: { br: ['Promotil'], ar: ['Itoprid', 'Dispep', 'Yurex'] },
      presentation: { pt: ['Comprimidos revestidos 50 mg'], es: ['Comprimidos 50 mg'] },
      mechanism: {
        pt: 'O Duplo Motor do Estômago. A Itoprida atua por dois caminhos no estômago. Primeiro, ela bloqueia os receptores de dopamina D2 (que travam a motilidade). Segundo, ela inibe a enzima acetilcolinesterase, impedindo que a acetilcolina seja destruída na parede gástrica. Com mais acetilcolina ativa, o estômago ganha força e acelera o esvaziamento de forma coordenada. Não cruza a barreira hematoencefálica e não afeta o intervalo QT.',
        es: 'Antagonista selectivo de los receptores dopaminérgicos D2 periféricos e inhibe la acetilcolinesterasa en el músculo liso gastrointestinal. Esto incrementa de forma sostenida los niveles de acetilcolina, estimulando el vaciamiento gástrico y el peristaltismo antral sin efectos sobre el sistema nervioso central.'
      },
      dose: {
        adult: {
          pt: '50 mg via oral, TRÊS vezes ao dia, antes das principais refeições (Dose diária máxima de 150 mg). Reduzir conforme melhora dos sintomas.',
          es: '50 mg vía oral, TRES veces al día, antes de las comidas principales (Dosis máxima de 150 mg/día).'
        },
        pediatric: {
          pt: 'Uso não recomendado ou estabelecido em menores de 16 anos por falta de dados de segurança.',
          es: 'No recomendado en menores de 16 años.'
        }
      },
      administration: { pt: ['Deve ser tomado estritamente de estômago vazio, de 15 a 30 minutos ANTES do café da manhã, almoço e jantar.'], es: ['Administrar 15 a 30 minutos ANTES de las comidas principales con agua.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, mas monitorar em renais crônicos terminais pelo clearance periférico.', es: 'Usar con precaución en falla renal por excreción biliar predominante.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado por flavina monooxigenase (FMO3) e não pelo CYP450, o que reduz o risco de hepatotoxicidade comum.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hiperprolactinemia leve (ginecomastia ou galactorreia por bloqueio D2 periférico hipofisário)', 'Dor abdominal leve ou diarreia transitória', 'Cefaleia'], es: ['Hiperprolactinemia leve', 'Dolor abdominal o diarrea transitoria', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Leucopenia severa (Raríssimo efeito idiossincrásico de medula, exige interrupção se febre)'], es: ['Leucopenia (Extremadamente raro, suspender si hay fiebre o infección)'] },
      contraindications: {
        absolute: { pt: ['Sangramento gastrointestinal ativo, obstrução mecânica ou perfuração intestinal'], es: ['Hemorragia digestiva activa, obstrucción mecánica o perforación'] },
        relative: { pt: ['Pacientes com distúrbios de prolactina elevados pré-existentes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O PROCINÉTICO SEGURO PARA O CORAÇÃO: Diferente da antiga Cisaprida ou da Domperidona, a Itoprida NÃO bloqueia os canais hERG do coração e não prolonga o intervalo QT. Pode ser usada em idosos cardiopatas crônicos polifarmácia com total segurança cardiovascular.', es: 'EL PROCINÉTICO CARDIOSEGURO: A diferencia de la domperidona o la cisaprida, la Itoprida NO bloquea los canales de potasio cardíacos hERG ni prolonga el intervalo QT, lo que la convierte en el proquinético de elección para ancianos polimedicados.' }
      },
      references: {
        pt: 'Itopride Dyspepsia Study Group; Diretrizes de Dispepsia Funcional da Federação Brasileira de Gastroenterologia; J Gastroenterol Hepatol.',
        es: 'Guías Clínicas de Dispepsia de la Organización Mundial de Gastroenterología; Ficha Técnica Autorizada de Itopride.'
      }
    },

/* ── MOSAPRIDA ──────────────────────────────────────────────────────── */
    "mosaprida": {
      name: { pt: 'Mosaprida (Citrato de)', es: 'Mosaprida (Citrato de)' },
      category: 'gastroenterologia',
      class: { pt: 'Procinético Gastrointestinal / Agonista Seletivo dos Receptores 5-HT4', es: 'Proquinético Gastrointestinal / Agonista Selectivo de los Receptores 5-HT4' },
      indications: {
        pt: ['Sintomas gastrointestinais associados à dispepsia funcional (azia, náuseas, vômitos)', 'Gastroparesia e esofagite de refluxo crônica'],
        es: ['Síntomas digestivos asociados a dispepsia funcional', 'Gastroparesia y esofagitis por reflujo']
      },
      commercialNames: { br: ['Mosaprida (Importação)'], ar: ['Mosar', 'Vizerul', 'Gastrosedol Pro'] },
      presentation: { pt: ['Comprimidos de 5 mg'], es: ['Comprimidos de 5 mg'] },
      mechanism: {
        pt: 'O Ativador de Serotonina Gástrico. A Mosaprida atua estimulando seletivamente os receptores de serotonina tipo 4 (5-HT4) localizados nos plexos nervosos internos do estômago. Esse estímulo força a liberação natural de acetilcolina na musculatura do trato gastrointestinal superior, aumentando a força e o esvaziamento do estômago sem tocar nos receptores de dopamina D2 (zero risco de vazamento de leite ou ginecomastia).',
        es: 'Agonista selectivo de los receptores serotoninérgicos 5-HT4 en el plexo mientérico digestivo. Estimula la liberación de acetilcolina endógena, lo que incrementa la motilidad del estómago y el duodeno, facilitando el vaciamiento gástrico sin bloquear los receptores D2.'
      },
      dose: {
        adult: {
          pt: '5 mg via oral, TRÊS vezes ao dia, administrado antes ou após as refeições principais.',
          es: '5 mg vía oral, TRES veces al día, antes o después de las comidas principales.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em crianças e adolescentes.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral. Os comprimidos podem ser engolidos com água. Diferente de outros procinéticos, a comida não altera significativamente sua taxa total de absorção.'], es: ['Uso oral. Puede administrarse con o sin alimentos de manera indiferente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste habitual em disfunção leve ou moderada.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizada intensamente pelo fígado. Em pacientes idosos ou hepatopatas, monitorar transaminases e usar com cautela se insuficiência grave.', es: 'Usar con precaución y bajo monitoreo de transaminasas en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Diarreia leve ou fezes amolecidas', 'Boca seca', 'Náusea episódica e cefaleia'], es: ['Diarrea leve o heces blandas', 'Boca seca', 'Náusea y cefalea'] },
      dangerousAdverseEffects: { pt: ['Aumento marcado de transaminases com hepatite medicamentosa aguda (Raro e reversível ao suspender)'], es: ['Hepatitis medicamentosa aguda por hipersensibilidad (Raro, remite al suspender el fármaco)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia gastrointestinal ativa, obstrução intestinal mecânica ou perfuração de alça'], es: ['Hemorragia digestiva activa, obstrucción mecánica o perforación de asa'] },
        relative: { pt: ['Histórico de doença hepática inflamatória crônica ativa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ZERO RISCO EXTRAPIRAMIDAL OU MAMÁRIO: Como a Mosaprida ignora completamente os receptores D2 de dopamina e foca apenas na Serotonina 5-HT4, ela é o procinético perfeito para pacientes que não toleram o Citoneurin/Motilium. Não causa tremores de Parkinson e não faz a mama vazar leite ou crescer.', es: 'SEGURIDAD ENDOCRINA Y NEUROLÓGICA: Al carecer de actividad antagonista dopaminérgica D2, posee un riesgo de cero de inducir hiperprolactinemia, galactorrea o síntomas extrapiramidales, siendo altamente segura frente a la metoclopramida.' }
      },
      references: {
        pt: 'Mosapride Clinical Trial Registry; Manual de Gastroenterologia do Hospital de Clínicas de Buenos Aires; J Clin Gastroenterol.',
        es: 'Mosapride Clinical Trials; Guías de Dispepsia de la Sociedad Argentina de Gastroenterología (SAGE).'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 442 (rabeprazol + dexlansoprazol + subcitrato_de_bismuto — enrich/consolidação Padrão Ouro ala 719-723) | BUILD 438 (rabeprazol + dexlansoprazol + subcitrato_de_bismuto + itoprida + mosaprida — IBPs Avançados + Protetor de Mucosa + Procinéticos) */

  /* ── BUILD 443 GUARD ─────────────────────────────────────────── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

    /* ── PRUCALOPRIDA (728) ─────────────────────────────────────────────── */
    "prucaloprida": {
      name: { pt: 'Prucaloprida (Succinato de)', es: 'Prucaloprida (Succinato de)' },
      category: 'gastroenterologia',
      class: { pt: 'Agonista Altamente Seletivo dos Receptores de Serotonina 5-HT4 / Procinético Cólico', es: 'Agonista Altamente Selectivo de los Receptores de Serotonina 5-HT4 / Proquinético Cólico' },
      indications: {
        pt: ['Tratamento da constipação intestinal crônica em adultos nos quais os laxantes clássicos falharam em fornecer alívio adequado'],
        es: ['Tratamiento de la constipación intestinal crónica en adultos cuando los laxantes convencionales fallan']
      },
      commercialNames: { br: ['Resolor'], ar: ['Resolor', 'Prucalox'] },
      presentation: { pt: ['Comprimidos revestidos 1 mg e 2 mg'], es: ['Comprimidos revestidos 1 mg y 2 mg'] },
      mechanism: {
        pt: 'O Ativador de Peristaltismo do Cólon. É um agonista di-hidrobenzofuranocarboxamida com afinidade ultra-elevada e estritamente seletiva pelos receptores 5-HT4 do intestino grosso. Ele estimula o reflexo peristáltico proximal e a secreção de fluidos intestinais, induzindo contrações propulsivas gigantes (HAPCs) no cólon, que empurram mecanicamente as fezes travadas há dias.',
        es: 'Agonista selectivo de alta afinidad de los receptores serotoninérgicos 5-HT4. Estimula la motilidad colónica proximal desencadenando contracciones propulsivas de gran amplitud (HAPCs) y acelera el tránsito del intestino grueso sin afectar los canales hERG cardíacos.'
      },
      dose: {
        adult: {
          pt: '2 mg via oral, UMA VEZ ao dia, a qualquer hora do dia. Em idosos (> 65 anos), iniciar preventivamente com 1 mg ao dia.',
          es: '2 mg vía oral, UNA VEZ al día. En pacientes ancianos (> 65 años), iniciar con 1 mg al día.'
        },
        pediatric: {
          pt: 'Não indicado ou aprovado para menores de 18 anos.',
          es: 'No recomendado en menores de 18 años.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser administrado com ou sem alimentos. Se não houver efeito após 4 semanas de uso contínuo, o tratamento deve ser reavaliado.'], es: ['Uso oral diario, con o sin alimentos de manera indiferente.'] },
      renalAdjustment: { required: true, message: { pt: 'Se insuficiência renal grave (ClCr < 30 mL/min), a dose máxima deve ser restrita obrigatoriamente a 1 mg ao dia.', es: 'En insuficiencia renal grave (ClCr < 30 mL/min), disminuir la dosis a 1 mg al día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Se insuficiência hepática grave (Child-Pugh C), reduzir a dose inicial para 1 mg ao dia.', es: 'En insuficiencia hepática grave (Child-Pugh C), disminuir a 1 mg al día.' } },
      commonAdverseEffects: { pt: ['Cefaleia intensa (ocorre em ~20% dos casos, tipicamente restrita ao primeiro dia de tratamento)', 'Náuseas e diarreia transitórias', 'Dor abdominal'], es: ['Cefalea intensa (frecuente en el primer día de toma, cede luego)', 'Náuseas y diarrea transitoria', 'Dolor abdominal'] },
      dangerousAdverseEffects: { pt: ['Palpitações severas e taquicardia (raro)', 'Ideação suicida e alterações graves de humor (vigilância farmacológica restrita)'], es: ['Palpitaciones', 'Cambios severos en el estado de ánimo o ideación suicida (monitoreo estrecho)'] },
      contraindications: {
        absolute: { pt: ['Perfuração ou obstrução intestinal mecânica, megacólon tóxico, Crohn ou RCU severas'], es: ['Perforación o obstrucción intestinal, megacolon tóxico, colitis ulcerosa o Crohn grave'] },
        relative: { pt: ['Histórico de arritmias cardíacas instáveis ou transtornos depressivos maiores'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A CEFALEIA DO PRIMEIRO DIA: Cerca de 1 em cada 5 pacientes que tomam a primeira dose de Resolor apresenta uma dor de cabeça latejante muito forte. Isso ocorre pelo estímulo sistêmico transitório dos receptores 5-HT4 vasculares. Explique ao doente que o sintoma some completamente a partir do segundo dia e oriente o uso de analgésicos.', es: 'ALERTA DE CEFALEA INICIAL: El 20% de los pacientes presenta cefalea intensa durante las primeras 24 horas debido al estímulo serotoninérgico vascular periférico. El síntoma remite de forma espontánea a partir del segundo día.' }
      },
      references: {
        pt: 'FDA Prescribing Data Motegrity/Resolor; Diretrizes de Constipação Crônica da FBG; Aliment Pharmacol Ther.',
        es: 'FDA Prescribing Information; Ficha Técnica CIMA Prucaloprida; Guías de Constipación de la SAGE.'
      }
    },

    /* ── LINACLOTIDA (729) ──────────────────────────────────────────────── */
    "linaclotida": {
      name: { pt: 'Linaclotida', es: 'Linaclotida' },
      category: 'gastroenterologia',
      class: { pt: 'Agonista do Receptor da Guanilato Ciclase-C (GC-C) / Secretagogo Intestinal', es: 'Agonista del Receptor de la Guanilato Ciclasa-C (GC-C) / Secretagogo Intestinal' },
      indications: {
        pt: ['Tratamento da Síndrome do Intestino Irritável com Constipação (SII-C) moderada a grave em adultos', 'Constipação idiopática crônica'],
        es: ['Tratamiento del Síndrome del Intestino Irritable con Constipación (SII-C) en adultos', 'Constipación idiopática crónica']
      },
      commercialNames: { br: ['Constella'], ar: ['Linis', 'Constella'] },
      presentation: { pt: ['Cápsulas duras 72 mcg, 145 mcg e 290 mcg'], es: ['Cápsulas duras 72 mcg, 145 mcg y 290 mcg'] },
      mechanism: {
        pt: 'A Injeção de Água nas Fezes. A Linaclotida é um peptídeo sintético não absorvível que se liga ao receptor da Guanilato Ciclase-C na superfície interna do intestino. Esse acoplamento dispara a produção de GMP cíclico celular, que abre os canais CFTR. Ocorre uma secreção maciça de Cloreto e Bicarbonato para dentro do intestino. A água corre atrás dos eletrólitos por osmose, amolecendo as fezes e cortando a dor mecânica por bloquear os nervos sensoriais.',
        es: 'Péptido sintético no absorbible que actúa localmente uniéndose al receptor de la guanilato ciclasa-C (GC-C) en el epitelio intestinal. Incrementa el GMP cíclico intracelular, activando el canal CFTR, lo que provoca una secreción activa de cloruro y bicarbonato hacia la luz intestinal. El agua entra por gradiente osmótico, ablandando las heces.'
      },
      dose: {
        adult: {
          pt: 'Síndrome do Intestino Irritável (SII-C): 290 mcg via oral, UMA VEZ ao dia. Constipação Crônica: 145 mcg ou 72 mcg via oral uma vez ao dia.',
          es: 'SII-C: 290 mcg vía oral, UNA VEZ al día. Constipación Crónica: 145 mcg o 72 mcg una vez al día.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADA em menores de 6 anos e estritamente evitada até 18 anos devido ao risco letal de desidratação infantil.',
          es: 'ABSOLUTAMENTE CONTRAINDICADA en niños menores de 6 años por riesgo mortal de deshidratación severa.'
        }
      },
      administration: { pt: ['DEVE SER TOMADA DE ESTÔMAGO VAZIO, NO MÍNIMO 30 MINUTOS ANTES DA PRIMEIRA REFEIÇÃO DO DIA (Café da manhã). Tomar junto ou após alimentos provoca diarreia aquosa severa.'], es: ['DEBE TOMARSE EN AYUNAS, AL MENOS 30 MINUTOS ANTES DEL DESAYUNO. Tomarla con alimentos induce diarrea severa.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente luminal, sem absorção sistêmica, sem ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['DIARREIA AQUOSA (ocorre em ~20% dos pacientes, sendo o principal motivo de manejo de dose)', 'Dor abdominal e flatulência', 'Distensão abdominal'], es: ['DIARREA ACUOSA (muy frecuente, requiere ajuste de dosis)', 'Dolor abdominal y flatulencia', 'Meteorismo'] },
      dangerousAdverseEffects: { pt: ['Desidratação grave com distúrbios hidroeletrolíticos agudos', 'Síncope por hipovolemia transitória'], es: ['Deshidratación severa', 'Síncope por hipovolemia prerrenal'] },
      contraindications: {
        absolute: { pt: ['Pacientes com obstrução mecânica gastrointestinal conhecida ou suspeita', 'Menores de 6 anos de idade'], es: ['Obstrucción gastrointestinal mecánica conocida o sospechada', 'Niños < 6 años'] },
        relative: { pt: ['Idosos muito frágeis com risco de colapso volêmico por diarreia'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA INFANTIL DA DESIDRATAÇÃO: A Linaclotida carrega uma Caixa Preta rígida do FDA. Ela causa uma secreção de água tão potente no intestino que se for administrada em crianças pequenas ou bebês, seca o corpo da criança em poucas horas, levando ao choque hipovolêmico letal. Uso restrito e exclusivo para adultos.', es: 'CAJA NEGRA EN PEDIATRÍA: Posee advertencia de Caja Negra por la FDA. El mecanismo secretor de fluidos es tan agresivo que en niños pequeños puede gatillar deshidratación aguda mortal en pocas horas. Prohibido en menores de 18 años.' }
      },
      references: {
        pt: 'FDA Black Box Warning Linzess/Constella; Estudo Clínico LINX SII-C; Diretrizes de Síndrome do Intestino Irritável da FBG.',
        es: 'FDA Black Box Warning; Ficha Técnica CIMA Constella; Guías del Síndrome del Intestino Irritable de la SAGE.'
      }
    },

    /* ── LUBIPROSTONA (730) ─────────────────────────────────────────────── */
    "lubiprostona": {
      name: { pt: 'Lubiprostona', es: 'Lubiprostona' },
      category: 'gastroenterologia',
      class: { pt: 'Ativador Local dos Canais de Cloreto Tipo 2 (ClC-2) / Secretagogo', es: 'Activador Local de los Canales de Cloruro Tipo 2 (ClC-2) / Secretagogo' },
      indications: {
        pt: ['Constipação idiopática crônica em adultos', 'Síndrome do Intestino Irritável com Constipação (SII-C) exclusivamente em mulheres', 'Constipação induzida por Opioides em adultos com dor crônica por câncer'],
        es: ['Constipación idiopática crónica', 'SII-C exclusivamente en mujeres', 'Constipación inducida por Opioides en dolor crónico no oncológico']
      },
      commercialNames: { br: ['Amitiza'], ar: ['Amitiza', 'Lubipro'] },
      presentation: { pt: ['Cápsulas gelatinosas moles 8 mcg e 24 mcg'], es: ['Cápsulas blandas 8 mcg y 24 mcg'] },
      mechanism: {
        pt: 'O Abre-Portas de Cloreto. É um ácido graxo bicíclico derivado da prostaglandina E1. Age ativando especificamente os canais de cloreto tipo 2 (ClC-2) localizados na membrana apical do epitélio do intestino humano. Isso bombeia cloro para a luz intestinal, puxando sódio e água de forma passiva. O líquido lubrifica e amolece o bolo fecal endurecido, aumentando o trânsito sem irritar os plexos nervosos.',
        es: 'Activador específico de los canales de cloruro tipo 2 (ClC-2) en la célula epitelial intestinal. Aumenta la secreción de fluido rico en cloruro hacia la luz, promoviendo el paso de sodio y agua por vía paracelular, lo que incrementa la motilidad intestinal y disminuye la consistencia de las heces.'
      },
      dose: {
        adult: {
          pt: 'Constipação Crônica / Opioides: 24 mcg via oral, DUAS VEZes ao dia (de 12/12h). SII-C (Mulheres): 8 mcg via oral, DUAS VEZES ao dia.',
          es: 'Constipación Crónica / Opioides: 24 mcg vía oral, DOS VECES al día. SII-C (Mujeres): 8 mcg vía oral, DOS VECES al día.'
        },
        pediatric: {
          pt: 'Não indicado ou aprovado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['DEVE SER TOMADA JUNTO COM ALIMENTOS E ÁGUA. Administrar de estômago vazio provoca crises severas de náuseas e vômitos imediatos.'], es: ['DEBE TOMARSE JUNTO CON ALIMENTOS Y ABUNDANTE AGUA para mitigar la aparición de náuseas intensas de origen central.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima absorção sistêmica, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada a grave (Child-Pugh B e C), reduzir a dose de manutenção para 12-24 mcg uma vez ao dia.', es: 'En insuficiencia hepática moderada/grave, reducir la dosis a una toma diaria.' } },
      commonAdverseEffects: { pt: ['NÁUSEAS INTENSAS (afeta até 30% dos usuários, dose-dependente, cede se ingerido com comida pesada)', 'Diarreia e cólicas abdominais', 'Cefaleia'], es: ['NÁUSEAS INTENSAS (hasta el 30% de los casos, disminuye al tomarlo con comidas)', 'Diarrea y cólicos', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['DISPNEIA AGUDA DO AMITIZA (Sensação de aperto no peito benigna que ocorre nos primeiros 30-60 minutos após a primeira dose, some sozinha)'], es: ['DISNEA AGUDA TRANSITORIA (Sensación de opresión torácica en la primera hora postoma, cede espontáneamente)'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal mecânica conhecida ou suspeita', 'Diarreia grave ativa'], es: ['Obstrucción intestinal mecánica conocida o sospechada', 'Diarrea grave'] },
        relative: { pt: ['Mulheres grávidas ou em planejamento gestacional ativo (risco potencial de perda embrionária)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A FALTA DE AR DA PRIMEIRA HORA (DISPNEIA): A Lubiprostone pode causar uma dispneia súbita esquisita na primeira dose. O paciente liga dizendo que está sufocando ou tendo um infarto. É um efeito transitório e autolimitado que some sozinho em poucas horas. Acalme o paciente e reinicie com a dose de 8mcg se tolerável.', es: 'ALERTA DE DISNEA TRANSITORIA: Puede inducir una sensación de opresión en el pecho y falta de aire transitoria en la primera toma. Remite por completo en 2-3 horas; no requiere intervenciones de urgencia.' }
      },
      references: {
        pt: 'FDA Clinical Data Amitiza; Estudo RENOIR (Opioid-induced constipation); Manual de Gastroenterologia USP.',
        es: 'FDA Prescribing Information; Guías de Tratamiento de la Constipación inducida por opioides de la SADI.'
      }
    },

    /* ── PLECANATIDA (731) ──────────────────────────────────────────────── */
    "plecanatida": {
      name: { pt: 'Plecanatida', es: 'Plecanatida' },
      category: 'gastroenterologia',
      class: { pt: 'Agente Secretagogo Intestinal / Análogo Estrutural da Uroguanilina', es: 'Agente Secretagogo Intestinal / Análogo Estructural de la Uroguanilina' },
      indications: {
        pt: ['Tratamento de Constipação Idiopática Crônica (CIC) em adultos', 'Síndrome do Intestino Irritável com Constipação (SII-C)'],
        es: ['Tratamiento de la Constipación Idiopática Crónica (CIC)', 'Síndrome del Intestino Irritable con Constipación']
      },
      commercialNames: { br: ['Trulance (Importação especializada)'], ar: ['Trulance'] },
      presentation: { pt: ['Comprimidos de 3 mg'], es: ['Comprimidos de 3 mg'] },
      mechanism: {
        pt: 'O Irmão Gêmeo da Uroguanilina. É um peptídeo de 16 aminoácidos que imita perfeitamente a Uroguanilina humana nativa. Ele liga-se e ativa os receptores de Guanilato Ciclase-C no intestino de forma pH-dependente (atua especificamente no duodeno e jejuno). Promove uma secreção fluida rica em água de forma muito mais fisiológica e suave que a Linaclotida, apresentando menor taxa de cólicas excruciantes.',
        es: 'Análogo estructural del péptido natriurético humano uroguanilina. Se une y activa selectivamente los receptores de la guanilato ciclasa-C (GC-C) en el lumen intestinal de forma dependiente de pH, estimulando la secreción de fluido intestinal y normalizando la consistencia de las heces.'
      },
      dose: {
        adult: {
          pt: '3 mg via oral, UMA VEZ ao dia, a qualquer hora do dia, com ou sem alimentos.',
          es: '3 mg vía oral, UNA VEZ al día, con o sin alimentos de manera indistinta.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADA em menores de 6 anos; evitada formalmente em menores de 18 anos pelo risco extremo de desidratação.',
          es: 'ABSOLUTAMENTE CONTRAINDICADA en menores de 6 años por riesgo de deshidratación severa fatal.'
        }
      },
      administration: { pt: ['Uso oral diário. Os comprimidos podem ser engolidos inteiros ou triturados e misturados em água ou purê de frutas para administração por sonda enteral nasogástrica.'], es: ['Uso oral. Los comprimidos pueden triturarse y suspenderse en agua para administración por sonda nasogástrica.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, não sofre absorção sistêmica relevante.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Diarreia leve a moderada (ocorre em ~5% dos casos, significativamente menor que a linaclotida)', 'Náusea leve', 'Gases'], es: ['Diarrea (menos intensa que con linaclotida)', 'Náusea leve', 'Gases'] },
      dangerousAdverseEffects: { pt: ['Desidratação severa fulminante em menores de idade', 'Incontinência fecal transitória'], es: ['Deshidratación grave en edad pediátrica', 'Incontinencia fecal'] },
      contraindications: {
        absolute: { pt: ['Pacientes com obstrução gastrointestinal mecânica conhecida ou suspeita', 'Menores de 6 anos de idade'], es: ['Obstrucción gastrointestinal mecánica', 'Niños menores de 6 años'] },
        relative: { pt: ['Uso em adolescentes de 12 a 17 anos (não recomendado pela falta de dados robustos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA IDADE LIMITE: Assim como a Linaclotida, a Plecanatida carrega um aviso de Caixa Preta rígido contra o uso em crianças pequenas. O epitélio intestinal infantil é extremamente sensível ao estímulo do GMPc, gerando perdas fluidas volumosas capazes de causar óbito por choque hipovolêmico em poucas horas.', es: 'ADVERTENCIA DE CAJA NEGRA: Contraindicado en menores de 6 años y evitado en menores de 18. El estímulo secretor provoca pérdidas de volumen intratables en el epitelio intestinal pediátrico, llevando al colapso deshidratante.' }
      },
      references: {
        pt: 'FDA Black Box Warning Trulance; Estudo Clínico Integrado CIC-Plecanatide; Manual de Gastroenterologia Avançada.',
        es: 'FDA Black Box Warning; Ficha Técnica Autorizada Trulance; Manual de Farmacología de Goodman & Gilman.'
      }
    },

    /* ── MACROGOL (732) ─────────────────────────────────────────────────── */
    "macrogol": {
      name: { pt: 'Macrogol 3350 (Polietilenoglicol / PEG)', es: 'Macrogol 3350 (Polietilenglicol / PEG)' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Osmótico Puro / Polímero de Alta Massa Molecular', es: 'Laxante Osmótico Puro / Polímero de Alta Masa Molecular' },
      indications: {
        pt: ['Tratamento de escolha a longo prazo para Constipação Intestinal Crônica em adultos e crianças', 'Desimpactação de fecaloma (em doses altas)', 'Preparo de cólon limpo para exames (Macrogol 4000 com eletrólitos)'],
        es: ['Tratamiento de elección a largo plazo para Constipación Crónica en adultos y niños', 'Desimpactación de fecaloma', 'Preparación de colon']
      },
      commercialNames: { br: ['Muvinlax', 'Peglax', 'Floraxil'], ar: ['Barex', 'Contumax', 'Miralax'] },
      presentation: { pt: ['Pó para solução oral em envelopes de 14 g ou 17 g (sem ou com eletrólitos associados)'], es: ['Polvo para solución oral en sobres o frasco a granel'] },
      mechanism: {
        pt: 'A Esponja de Água Luminal. O Macrogol é um polímero linear gigante inerte que estabelece pontes de hidrogênio fortes com as moléculas de água. Ele não é absorvido e não é quebrado pelas bactérias do cólon (não gera gases). Ele atua como uma "esponja física": retém a água que o paciente bebeu diretamente dentro do bolo fecal. As fezes hidratam, aumentam de volume e estimulam o peristaltismo natural por estiramento mecânico.',
        es: 'Polímero de alto peso molecular que actúa como agente osmótico puro. No se absorbe en el intestino ni es metabolizado por la microbiota colónica (no produce gas). Retiene las moléculas de agua mediante puentes de hidrógeno dentro de la luz intestinal, ablandando las heces e incrementando el volumen fecal.'
      },
      dose: {
        adult: {
          pt: 'Constipação Crônica: 17 g (1 envelope ou 1 colher medida) dissolvido em líquidos, UMA VEZ ao dia. Pode subir até 34 g/dia se necessário. Efeito ocorre em 24 a 48h.',
          es: 'Constipación Crónica: 17 g (1 sobre) disuelto en líquidos, UNA VEZ al día. Puede incrementarse a 34 g/día según necesidad.'
        },
        pediatric: {
          pt: 'Escolha padrão mundial em crianças > 6 meses: 0,4 a 0,8 g/kg/dia, ajustando conforme consistência das fezes.',
          es: 'Estándar de oro en pediatría (> 6 meses): 0,4 a 0,8 g/kg/día, modulando la dosis según respuesta.'
        }
      },
      administration: { pt: ['O pó do envelope deve ser totalmente dissolvido em um copo grande (200 mL) de água, suco, chá ou leite. Pode ser tomado a qualquer hora do dia, com ou sem comida.'], es: ['Disolver por completo el polvo en un vaso de líquido (agua o jugo). Se puede administrar a cualquier hora del día.'] },
      renalAdjustment: { required: false, message: { pt: 'Não absorvido, 100% seguro em renais crônicos e idosos cardiopatas (não altera eletrólitos se usado na formulação com sais).', es: 'Seguro en insuficiencia renal y cardiopatías al no absorberse sistémicamente.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cólicas abdominais leves e borborigmos (ruídos no estômago)', 'Náusea leve inicial', 'Fezes amolecidas se dose alta'], es: ['Cólicos abdominales leves', 'Ruidos intestinales (borborigmos)', 'Náusea leve'] },
      dangerousAdverseEffects: { pt: ['Diarreia profusa com desidratação se houver abuso extremo da dose habitual'], es: ['Diarrea por sobredosificación con riesgo de deshidratación en ancianos'] },
      contraindications: {
        absolute: { pt: ['Obstrução ou perfuração gastrointestinal mecânica, íleo paralítico, megacólon tóxico'], es: ['Obstrucción o perforación intestinal activa, íleo paralítico'] },
        relative: { pt: ['Nenhuma específica; considerado o laxante mais seguro e limpo da medicina moderna'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O LAXANTE QUE NÃO CAUSA GASES: Diferente do Lactulona/Lactulose (que é fermentado pelas bactérias gerando cólicas terríveis e flatulência que fazem o paciente soltar gases o dia todo), o Macrogol é inerte. Ele limpa o intestino puramente pela água, sem fermentar. É o laxante número 1 preferido pelos pediatras e geriatras mundiais.', es: 'EL REY DE LOS OSMÓTICOS: A diferencia de la lactulosa (que sufre fermentación bacteriana masiva provocando gases, distensión dolorosa y flatulencias incómodas), el Macrogol es molecularmente inerte. No genera gases, lo que asegura una excelente tolerancia a largo plazo.' }
      },
      references: {
        pt: 'WGO Global Guidelines on Constipation; Diretrizes da Sociedade Brasileira de Pediatria (SBP); Cochrane Database Syst Rev.',
        es: 'WGO Global Guidelines; Guías de Constipación Pediátrica y Adultos de la SAGE; Cochrane Database Syst Rev.'
      }
    },

    /* ── BISACODIL (733) ────────────────────────────────────────────────── */
    "bisacodil": {
      name: { pt: 'Bisacodil', es: 'Bisacodilo' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Catártico Estimulante / Derivado do Difenilmetano', es: 'Laxante Catártico Estimulante / Derivado del Difenilmetano' },
      indications: {
        pt: ['Tratamento de curto prazo da constipação aguda rebelde', 'Preparo intestinal pré-operatório ou para exames radiológicos e colonoscopia'],
        es: ['Tratamiento a corto plazo de la constipación aguda', 'Preparación de colon preoperatorio o para estudios diagnósticos']
      },
      commercialNames: { br: ['Dulcolax', 'Pleson'], ar: ['Dulcolax Argentina', 'Modaton'] },
      presentation: { pt: ['Comprimidos revestidos gastrorresistentes 5 mg', 'Supositórios infantis 5 mg e adultos 10 mg'], es: ['Comprimidos gastrorresistentes 5 mg', 'Supositorios adultos 10 mg'] },
      mechanism: {
        pt: 'O Gatilho Nervoso do Intestino. O Bisacodil é hidrolisado pelas enzimas do intestino, gerando o metabólito ativo desacetilado. Esse metabólito irrita e estimula diretamente as terminações nervosas do plexo mientérico no cólon (intestino grosso). Isso induz contrações propulsivas fortes (peristaltismo acelerado) e bloqueia o bombeamento de água de volta para o corpo, acumulando líquido e forçando a evacuação imediata.',
        es: 'Laxante de contacto. Sufre hidrólisis por las esterasas intestinales liberando el metabólito activo (bis-p-hidroxifenildifenilmetano). Este estimula directamente los plexos nerviosos de la mucosa colónica, incrementando el peristaltismo e inhibiendo la absorción de agua y electrolitos.'
      },
      dose: {
        adult: {
          pt: 'Via Oral: 5 mg a 10 mg (1 a 2 comprimidos) via oral à noite antes de deitar (Efeito em 6 a 12h). Via Retal (Supositório): 1 supositório de 10 mg introduzido pela manhã (Efeito rápido em 15 a 45 minutos).',
          es: 'Vía Oral: 5 a 10 mg por la noche antes de acostarse (Efecto en 6-12h). Vía Rectal: 1 supositorio de 10 mg por la mañana (Efecto rápido en 15-45 minutos).'
        },
        pediatric: {
          pt: 'Crianças > 4 anos: 5 mg via oral à noite ou 1 supositório infantil de 5 mg pela manhã.',
          es: 'Niños > 4 años: 5 mg vía oral por la noche.'
        }
      },
      administration: { pt: ['OS COMPRIMIDOS NÃO PODEM SER PARTIDOS OU MASTIGADOS. Devem ser tomados inteiros e NUNCA JUNTO COM LEITE OU ANTIÁCIDOS, pois estes rompem a casca protetora do comprimido antes da hora, liberando o remédio no estômago, causando dor de estômago terrível e vômitos.'], es: ['Los comprimidos poseen recubrimiento entérico. TRAGAR ENTEROS. PROHIBIDO TOMAR CON LECHE O ANTIÁCIDOS, ya que disuelven el recubrimiento en el estómago provocando gastritis severa y vómitos.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima absorção, sem ajuste, mas evitar o abuso crônico pelo risco de desidratação e perda de potássio.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['CÓLICAS ABDOMINAIS FORTES E ESPASMOS (efeito do estímulo motor entérico)', 'Queimação retal (supositório)', 'Diarreia e náuseas'], es: ['CÓLICOS ABDOMINALES INTENSOS (por espasmo muscular cólico)', 'Ardor rectal (supositorios)', 'Diarrea'] },
      dangerousAdverseEffects: { pt: ['Hipocalemia severa (despenca o potássio no sangue)', 'Dependência de laxantes com perda da função motora natural do cólon (Uso crônico indiscriminado)'], es: ['Hipopotasemia grave por pérdidas fluidas', 'Atonía colónica / Colon catártico por abuso crónico'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal mecânica, apendicite aguda, dor abdominal inexplicada, desidratação grave'], es: ['Obstrucción intestinal mecánica, apendicitis aguda, dolor abdominal agudo'] },
        relative: { pt: ['Uso contínuo por mais de 5 a 7 dias sem diagnóstico real da causa da constipação'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ERRO DA TOMADA COM LEITE: Tomar Dulcolax com um copo de leite ou após um antiácido neutraliza o ácido do estômago. Isso faz com que a pílula ache que já chegou no intestino e abra dentro do estômago. O Bisacodil solto queima o estômago vivo, gerando uma dor epigástrica excruciante e vômitos violentos. Separe o leite por 2 horas.', es: 'EL ERROR DE LA COADMINISTRACIÓN CON LÁCTEOS: Tomar bisacodilo con leche o antiácidos eleva el pH estomacal deshaciendo la cubierta protectora entérica en el estómago de forma prematura. El fármaco libre lesiona la mucosa gástrica provocando dolor epigástrico urente severo y vómitos.' }
      },
      references: {
        pt: 'FDA Safety Alerts on Over-the-counter Laxatives; Manual de Gastroenterologia Clínica HC-FMUSP; Prescribing Info Dulcolax.',
        es: 'FDA Safety Alerts; Ficha Técnica CIMA Bisacodilo; Guías de Constipación de la SAGE.'
      }
    },

    /* ── SENE (734) ─────────────────────────────────────────────────────── */
    "sene": {
      name: { pt: 'Sene (Cassia senna / Senosídeos A e B)', es: 'Sen (Cassia senna / Senósidos A y B)' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Fitoterápico Estimulante / Antraquinona', es: 'Laxante Fitoterápico Estimulante / Antraquinona' },
      indications: {
        pt: ['Tratamento a curto prazo da constipação intestinal aguda ocasional', 'Preparo de exames diagnósticos colorretais'],
        es: ['Tratamiento a corto plazo de la constipación ocasional', 'Preparación de colon']
      },
      commercialNames: { br: ['Tamarine (Assoc)', 'Naturetti (Assoc)', 'Sene Belarina'], ar: ['Senosidos', 'Modaton Natural', 'X-Prep'] },
      presentation: { pt: ['Comprimidos 10 mg a 20 mg de senosídeos puros', 'Extrato seco fitoterápico ou chá de folhas secas'], es: ['Comprimidos conteniendo senósidos A y B'] },
      mechanism: {
        pt: 'O Irritante Natural das Paredes. Os senosídeos passam intactos pelo estômago e intestino. No cólon, as bactérias da flora clivam a molécula liberando as Antraquinonas ativas (reinantronas). Essas antraquinonas irritam localmente as células da parede do intestino grosso e os plexos nervosos, aumentando as contrações (peristaltismo) e forçando a secreção de fluidos e muco para dentro do cólon, gerando evacuação explosiva.',
        es: 'Los senósidos son glucósidos antraquinónicos inactivos que se hidrolizan por la microbiota del colon, liberando las antraquinonas activas (reinantronas). Estas causan irritación local en la mucosa colónica estimulando el plexo mientérico, induciendo contracciones e incrementando la secreción de moco y agua.'
      },
      dose: {
        adult: {
          pt: '10 mg a 20 mg via oral (calculado em senosídeos), em dose única à noite antes de deitar. O efeito ocorre em 6 a 10 horas após a ingestão.',
          es: '10 mg a 20 mg vía oral, en dosis única por la noche antes de acostarse. El efecto evacuatorio se manifiesta de 6 a 10 horas después.'
        },
        pediatric: {
          pt: 'Contraindicado em crianças menores de 12 anos devido ao risco de dores abdominais intensas e assaduras severas por diarreia.',
          es: 'Contraindicado en niños menores de 12 años.'
        }
      },
      administration: { pt: ['Uso oral curto. Tomar à noite antes de deitar com um copo de água. Não deve ser utilizado de forma contínua por mais de 7 dias consecutivos.'], es: ['Uso oral nocturno. No utilizar por más de 7 días consecutivos por riesgo de habituación cólica.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente cólica local, sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['CÓLICAS ABDOMINAIS SEVERAS (efeito irritante clássico das antraquinonas)', 'Urina de coloração avermelhada ou amarelada (por eliminação dos pigmentos vegetais)', 'Diarreia'], es: ['CÓLICOS ABDOMINALES SEVEROS (por efecto irritante directo)', 'Coloración rojiza o amarillenta en la orina', 'Diarrea'] },
      dangerousAdverseEffects: { pt: ['MELANOSE CÓLICA (o cólon fica inteiramente preto por dentro devido à morte celular induzida pelo uso crônico)', 'Desidratação e hipocalemia severa por abuso', 'Distúrbios de condução cardíaca por falta de potássio'], es: ['MELANOSIS COLI (El colon se tiñe de negro por dentro en uso crónico)', 'Hipopotasemia severa', 'Deshidratación'] },
      contraindications: {
        absolute: { pt: ['Doença inflamatória intestinal ativa (Crohn/RCU)', 'Obstrução ou estenose intestinal mecânica, apendicite aguda', 'Menores de 12 anos e gravidez'], es: ['Enfermedades inflamatorias intestinales (Crohn/CU)', 'Obstrucción intestinal o apendicitis', 'Embarazo y niños < 12 años'] },
        relative: { pt: ['Uso concomitante com diuréticos espoliadores de potássio (Furosemida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O INTESTINO QUE FICA PRETO POR DENTRO (MELANOSE CÓLICA): O uso crônico de chá de Sene ou comprimidos fitoterápicos por meses causa a apoptose (morte celular) dos macrófagos da mucosa do cólon. As células mortas acumulam um pigmento escuro lipofuscínico. Quando o médico faz uma colonoscopia, o intestino do paciente está inteiramente PRETO por dentro, como couro queimado. O efeito é benigno e reverte em meses após suspender o Sene.', es: 'EL ALERTA DE LA MELANOSIS COLI: El abuso crónico de té de Sen o derivados antraquinónicos provoca la muerte de células epiteliales del colon que son fagocitadas por macrófagos, tiñendo el interior del intestino de un color negro intenso (Melanosis Coli) visible en la colonoscopia. El cuadro revierte al suspender el fitoterápico.' }
      },
      references: {
        pt: 'Monografia de Plantas Medicinais da OMS (Sene); Diretrizes de Fitoterapia da ANVISA; Manual de Toxicologia de Plantas Micromedex.',
        es: 'Monografías de Plantas Medicinales de la OMS; Ficha Técnica Autorizada de Senósidos; Manual de la SAGE.'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 443 (prucaloprida + linaclotida + lubiprostona + plecanatida + macrogol + bisacodil + sene — Procinéticos Cólicos/Secretagogos GC-C/Osmótico PEG/Catárticos Estimulantes) */

  /* ── BUILD 444 GUARD ─────────────────────────────────────────────── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

    /* ── GOLIMUMABE (744) ───────────────────────────────────────────────── */
    "golimumabe": {
      name: { pt: 'Golimumabe', es: 'Golimumab' },
      category: 'gastroenterologia',
      class: { pt: 'Anticorpo Monoclonal Humano Anti-TNF-alfa de Alta Afinidade', es: 'Anticuerpo Monoclonal Humano Anti-TNF-alfa de Alta Afinidad' },
      indications: {
        pt: ['Retocolite Ulcerativa (RCU) ativa moderada a grave em adultos refratários à terapia convencional', 'Artrite Reumatóide, Artrite Psoríaca e Espondilite Anquilosante'],
        es: ['Colitis Ulcerosa moderada a severa activa en adultos', 'Artritis Reumatoide y Espondilitis Anquilosante']
      },
      commercialNames: { br: ['Simponi'], ar: ['Simponi'] },
      presentation: { pt: ['Seringa preenchida ou Caneta injetável Subcutânea 50 mg/0,5 mL e 100 mg/1 mL'], es: ['Pluma prellenada Subcutánea 50 mg y 100 mg'] },
      mechanism: {
        pt: 'O Anti-TNF Humano Estável. É um anticorpo monoclonal puramente humano que neutraliza o TNF-alfa livre e transmembranar. Sua estrutura biológica confere uma afinidade de ligação superior e uma estabilidade plasmática prolongada, permitindo o bloqueio imunológico inflamatório mucosal crônico com apenas uma aplicação subcutânea mensal.',
        es: 'Anticuerpo monoclonal humano IgG1kappa que se une con alta afinidad a las formas solubles y transmembrana del TNF-alfa, impidiendo su unión a los receptores celulares. Esto suprime de forma prolongada la cascada inflamatoria crónica destructiva en el colon.'
      },
      dose: {
        adult: {
          pt: 'Indução RCU: 200 mg via Subcutânea na semana 0, seguido de 100 mg via Subcutânea na semana 2. Manutenção estável: 100 mg via Subcutânea a cada 4 semanas (uma vez por mês).',
          es: 'Inducción CU: 200 mg vía Subcutánea la semana 0, seguido de 100 mg SC la semana 2. Mantenimiento: 100 mg vía Subcutánea cada 4 semanas.'
        },
        pediatric: {
          pt: 'Não indicado para RCU pediátrica.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Administração puramente via Subcutânea (caneta autoinjetável). Retirar da geladeira 30 minutos antes de aplicar. Alternar os locais de injeção (coxa ou abdômen).'], es: ['Inyección Subcutánea mensual. Retirar del frío 30 minutos antes para reducir el dolor de aplicación.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não estudado em hepatopatias severas.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Infecções bacterianas do trato respiratório (bronquite, faringite)', 'Reações leves no local da injeção (eritema, prurido)', 'Hipertensão leve'], es: ['Infecciones respiratorias', 'Eritema o prurito en el sitio de inyección', 'Hipertensión leve'] },
      dangerousAdverseEffects: { pt: ['Reativação de Tuberculose Latente e infecções fúngicas invasivas oportunistas', 'Linfoma Hepatosplênico de células T (Raro risco hematológico de classe)', 'Piora de sintomas desmielinizantes (Esclerose Múltipla)'], es: ['Reactivación de Tuberculosis Latente', 'Linfoma y neoplasias malignas de clase', 'Desmielinización central'] },
      contraindications: {
        absolute: { pt: ['Tuberculose ativa ou infecções oportunistas graves em curso', 'Insuficiência cardíaca moderada a grave NYHA III/IV'], es: ['Tuberculosis activa', 'Insuficiencia cardíaca grave'] },
        relative: { pt: ['Rastreio negativo ou duvidoso para infecções granulomatosas (PPD obrigatório)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA ESCLEROSE INFLAMATÓRIA: Os bloqueadores de TNF-alfa como o Golimumabe podem agravar ou desencadear surtos de doenças desmielinizantes no cérebro. Se o paciente apresentar formigamentos estranhos, fraqueza ou perda de visão, suspenda imediatamente o Simponi; risco de desencadear Esclerose Múltipla latente.', es: 'ALERTA DE DESMIELINIZACIÓN: Los agentes anti-TNF pueden exacerbar o gatillar enfermedades desmielinizantes (Esclerosis Múltiple). Suspender de forma inmediata ante la aparición de síntomas neurológicos centrales.' }
      },
      references: {
        pt: 'PURSUIT-SC Trial (Golimumab in Ulcerative Colitis); FDA Prescribing Information Simponi; Diretrizes GEDIIB.',
        es: 'PURSUIT Trials; FDA Prescribing Information; Guías de Enfermedad Inflamatoria Intestinal de la SADI.'
      }
    },

    /* ── TOFACITINIBE (745) ──────────────────────────────────────────────── */
    "tofacitinibe": {
      name: { pt: 'Tofacitinibe (Citrato de)', es: 'Tofacitinib (Citrato de)' },
      category: 'gastroenterologia',
      class: { pt: 'Imunomodulador Sintético / Inibidor Seletivo de JAK 1 e JAK 3', es: 'Inmunomodulador Sintético / Inhibidor Selectivo de JAK 1 y JAK 3' },
      indications: {
        pt: ['Retocolite Ulcerativa (RCU) ativa moderada a grave em adultos que falharam aos anti-TNF', 'Artrite Reumatóide crônica e Artrite Psoríaca ativa'],
        es: ['Colitis Ulcerosa moderada a severa activa refractaria a anti-TNF', 'Artritis Reumatoide activa']
      },
      commercialNames: { br: ['Xeljanz'], ar: ['Xeljanz', 'Tofat'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg e 10 mg; Xeljanz XR 11 mg'], es: ['Comprimidos 5 mg, 10 mg y de liberación prolongada 11 mg'] },
      mechanism: {
        pt: 'O Interruptor de Citocinas Oral. Diferente dos anticorpos (que são injetáveis e grudam fora da célula), o Tofacitinibe é uma pequena molécula oral que entra na célula inflamatória e inibe as enzimas JAK1 e JAK3. Ao bloquear a via JAK, ele impede que os receptores celulares transmitam o sinal para o núcleo, "desligando" a fabricação de múltiplas citocinas inflamatórias (IL-2, IL-4, IL-7, IL-9, IL-15 e IL-21) ao mesmo tempo.',
        es: 'Pequeña molécula sintética inhibidora de las quinasas Janus (JAK1 y JAK3). Bloquea la vía de señalización intracelular JAK-STAT, impidiendo la transducción de señales de múltiples interleucinas claves en la patogenia inmunoinflamatoria de la colitis.'
      },
      dose: {
        adult: {
          pt: 'Indução RCU: 10 mg via oral, DUAS VEZES ao dia (a cada 12h) por 8 semanas. Manutenção: 5 mg via oral, DUAS VEZES ao dia. Se perda de resposta, pode manter 10 mg 2x/dia monitorando riscos.',
          es: 'Inducción CU: 10 mg vía oral, DOS VECES al día por 8 semanas. Mantenimiento: 5 mg vía oral, DOS VECES al día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 2 anos apenas para Artrite Idiopática Juvenil com ajuste estrito por peso corporal.',
          es: 'Aprobado en artritis juvenil, no indicado en colitis pediátrica.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser tomado com ou sem alimentos. Os comprimidos de liberação prolongada (XR 11mg) devem ser deglutidos inteiros, sem mastigar.'], es: ['Uso oral. Puede administrarse con o sin alimentos de forma indistinta.'] },
      renalAdjustment: { required: true, message: { pt: 'Se insuficiência renal moderada a grave (ClCr < 40 mL/min) ou diálise: reduzir a dose pela metade (se a indicação for 10mg 2x, dar 5mg 2x; se for 5mg 2x, dar 5mg 1x/dia).', es: 'Si ClCr < 40 mL/min, disminuir la dosis a la mitad de forma obligatoria.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir a dose pela metade em insuficiência hepática moderada (Child-Pugh B). ABSOLUTAMENTE CONTRAINDICADO na disfunção grave (Child-Pugh C).', es: 'Disminuir dosis a la mitad en insuficiencia moderada. Contraindicado en insuficiencia grave.' } },
      commonAdverseEffects: { pt: ['Infecções respiratórias e sinusite', 'Hipercolesterolemia (eleva colesterol LDL e HDL)', 'Cefaleia e diarreia leve', 'Aumento de Creatina Fosfoquinase (CPK)'], es: ['Infecciones respiratorias', 'Dislipidemia (aumento de LDL y HDL)', 'Cefalea', 'Aumento de CPK'] },
      dangerousAdverseEffects: { pt: ['HERPES ZOSTER DISSEMINADO (explosão de cobreiro cutâneo agressivo por quebra da barreira viral)', 'TROMBOEMBOLISMO VENOSO E TEP (Alerta Caixa Preta de coágulos pulmonares fatais em doses altas)', 'Perfuração Gastrointestinal'], es: ['HERPES ZOSTER (Reactivación viral dermatológica severa)', 'TROMBOEMBOLISMO VENOSO Y TEP (Caja Negra)', 'Perforación gastrointestinal'] },
      contraindications: {
        absolute: { pt: ['Insuficiência hepática grave Child-Pugh C', 'Infecções graves ativas ou tuberculose', 'Histórico de trombose venosa profunda ativa'], es: ['Insuficiencia hepática grave', 'Tuberculosis activa', 'Riesgo alto de trombosis'] },
        relative: { pt: ['Idosos > 65 anos polifarmácia ou fumantes (risco aumentado de infarto/câncer de classe)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DOS COÁGULOS E DA EMBOLIA (O ALERTA DO XELJANZ): O Tofacitinibe carrega um aviso de Caixa Preta rígido do FDA. O uso da dose de indução de 10 mg 2x/dia aumenta de forma severa o risco de Trombose Venosa Profunda (TVP) e Embolia Pulmonar (TEP) letal. Monitorar falta de ar ou inchaço unilateral na panturrilha.', es: 'CAJA NEGRA DE TROMBOEMBOLISMO: Posee advertencia de Caja Negra de la FDA por riesgo aumentado de Tromboembolismo Venoso y Embolia Pulmonar fatal, especialmente en dosis de 10 mg dos veces al día en pacientes con factores de riesgo cardiovascular.' }
      },
      references: {
        pt: 'OCTAVE Induction 1 and 2 Trials (Colite - NEJM 2017); FDA Drug Safety Communication on JAK inhibitors; Consenso GEDIIB.',
        es: 'OCTAVE Trials (NEJM 2017); FDA Drug Safety Communication; Guías de Consenso de la SAGE.'
      }
    },

    /* ── UPADACITINIBE (746) ─────────────────────────────────────────────── */
    "upadacitinibe": {
      name: { pt: 'Upadacitinibe Monohidratado', es: 'Upadacitinib Monohidratado' },
      category: 'gastroenterologia',
      class: { pt: 'Imunomodulador Sintético / Inibidor Altamente Seletivo de JAK 1', es: 'Inmunomodulador Sintético / Inhibidor Altamente Selectivo de JAK 1' },
      indications: {
        pt: ['Doença de Crohn ativa moderada a grave em adultos refratários a biológicos', 'Retocolite Ulcerativa ativa moderada a grave', 'Dermatite Atópica grave e Artrite Reumatóide'],
        es: ['Enfermedad de Crohn activa moderada a severa', 'Colitis Ulcerosa refractaria a anti-TNF', 'Dermatitis Atópica grave']
      },
      commercialNames: { br: ['Rinvoq'], ar: ['Rinvoq'] },
      presentation: { pt: ['Comprimidos de liberação prolongada 15 mg, 30 mg e 45 mg'], es: ['Comprimidos de liberación prolongada 15 mg, 30 mg y 45 mg'] },
      mechanism: {
        pt: 'O Bisturi Molecular de JAK. Diferente do Tofacitinibe (que bloqueia JAK1 e JAK3), o Upadacitinibe foi refinado para bloquear de forma quase exclusiva a enzima JAK1. Essa seletividade cirúrgica desliga a sinalização das interleucinas inflamatórias (IL-2, IL-6, IL-15, IFN-gama) poupando os canais de JAK2/3 que fabricam as hemácias, apresentando menor taxa de anemia severa, mantendo eficácia máxima no intestino.',
        es: 'Inhibidor selectivo y reversible de la Janus Quinasa tipo 1 (JAK1). Al inhibir preferencialmente la JAK1 frente a JAK2 y JAK3, bloquea la transducción de interleucinas proinflamatorias como la IL-6 y el Interferón gamma, reduciendo la inflamación de la mucosa con menor mielosupresión.'
      },
      dose: {
        adult: {
          pt: 'Indução (Crohn/RCU): 45 mg via oral, UMA VEZ ao dia, por 8 semanas. Manutenção: 15 mg ou 30 mg via oral uma vez ao dia, dependendo da gravidade e resposta clínica.',
          es: 'Inducción: 45 mg vía oral, UNA VEZ al día por 8 semanas. Mantenimiento: 15 mg o 30 mg vía oral, UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 12 anos apenas para Dermatite Atópica grave (dose de 15 mg uma vez ao dia).',
          es: 'Aprobado en > 12 años solo para Dermatitis Atópica.'
        }
      },
      administration: { pt: ['Comprimido de liberação prolongada. Deve ser engolido INTEIRO uma vez ao dia, com ou sem alimentos. Nunca quebrar, triturar ou mastigar o comprimido Rinvoq.'], es: ['Uso oral diario. Tragar entero sin partir ni masticar para no alterar la matriz de liberación prolongada.'] },
      renalAdjustment: { required: true, message: { pt: 'Se insuficiência renal grave (ClCr < 30 mL/min), a dose de manutenção recomendada fica restrita a 15 mg uma vez ao dia. Não estudado em diálise.', es: 'En insuficiencia renal grave (ClCr < 30 mL/min), la dosis máxima de mantenimiento es de 15 mg/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Sem ajuste em disfunção leve ou moderada. ABSOLUTAMENTE CONTRAINDICADO na insuficiência hepática grave (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática grave por riesgo de toxicidad.' } },
      commonAdverseEffects: { pt: ['Infecções respiratórias altas', 'Acne inflamatória severa de início súbito', 'Elevação de transaminases e lípidos', 'Náusea e cefaleia'], es: ['Infecciones respiratorias', 'Brotes de acné severo', 'Aumento de transaminasas y lípidos', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Reativação de Herpes Zoster e Tuberculose Latente', 'Eventos Cardiovasculares Maiores (MACE - Infarto, AVC Alerta de Classe Caixa Preta)', 'Perfuração intestinal crônica'], es: ['Reactivación de Herpes Zóster', 'Eventos Cardiovasculares Mayores (MACE - Caja Negra de clase)', 'Perforación intestinal'] },
      contraindications: {
        absolute: { pt: ['Insuficiência hepática grave', 'Tuberculose ativa ou infecções sistêmicas severas', 'Gravidez e lactação'], es: ['Insuficiencia hepática grave', 'Tuberculosis activa', 'Embarazo y lactancia'] },
        relative: { pt: ['Idosos > 65 anos com alto risco de infarto do miocárdio ou fumantes pesados'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O AVISO DE CLASSE MACE (O RISCO DO INFARTO): Sendo um inibidor de JAK, o Rinvoq herda o alerta de Caixa Preta de classe sobre o risco de infarto, AVC e câncer. Embora seja super seletivo para JAK1, evite o uso de doses altas de manutenção (30mg) em idosos cardiopatas graves ou fumantes crônicos.', es: 'ALERTA DE CLASE MACE: Comparte la advertencia de Caja Negra por riesgo de Eventos Cardiovasculares Mayores (Infarto, ACV) y neoplasias malignas. Usar con extrema precaución en pacientes con alto riesgo aterogénico previo.' }
      },
      references: {
        pt: 'U-ACHIEVE e U-ACCOMPLISH Trials (RCU - Lancet 2021); U-EXCEL e U-EXCEED Trials (Crohn); FDA Rinvoq Box Warning.',
        es: 'U-ACHIEVE Trials (Lancet 2021); U-EXCEL Trials; FDA Prescribing Information.'
      }
    },

    /* ── FILGOTINIBE (747) ──────────────────────────────────────────────── */
    "filgotinibe": {
      name: { pt: 'Filgotinibe', es: 'Filgotinib' },
      category: 'gastroenterologia',
      class: { pt: 'Imunomodulador Sintético / Inibidor Preferencial de JAK 1', es: 'Inmunomodulador Sintético / Inhibidor Preferencial de JAK 1' },
      indications: {
        pt: ['Retocolite Ulcerativa (RCU) ativa moderada a grave em adultos que apresentaram resposta inadequada ou intolerância a biológicos', 'Artrite Reumatóide moderada a grave'],
        es: ['Colitis Ulcerosa moderada a severa activa en adultos refractarios', 'Artritis Reumatoide']
      },
      commercialNames: { br: ['Jyseleca (Importação especializada)'], ar: ['Jyseleca'] },
      presentation: { pt: ['Comprimidos revestidos 100 mg e 200 mg'], es: ['Comprimidos 100 mg y 200 mg'] },
      mechanism: {
        pt: 'Inibidor reversível e altamente seletivo da enzima JAK1. Bloqueia a cascata intracelular das citocinas sem interferir na sinalização de JAK2 (preservando a homeostase de plaquetas e hemácias na medula), controlando a inflamação ulcerosa com excelente perfil de segurança hematológica.',
        es: 'Inhibidor preferencial de la Janus Quinasa tipo 1 (JAK1). Su selectividad minimiza la inhibición de JAK2, disminuyendo la incidencia de anemia y trombocitopenia en comparación con los inhibidores JAK pan-seletivos, modulando la inflamación del colon.'
      },
      dose: {
        adult: {
          pt: 'Indução e Manutenção RCU: 200 mg via oral, UMA VEZ ao dia, com ou sem alimentos. Em idosos (> 75 anos) ou renais crônicos, reduzir para 100 mg uma vez ao dia.',
          es: 'Dosis Estándar: 200 mg vía oral, UNA VEZ al día de forma continua. Ancianos (> 75 años): 100 mg una vez al día.'
        },
        pediatric: {
          pt: 'Não indicado ou estabelecido em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário. Engolir o comprimido inteiro com um copo de água. Pode ser ingerido de estômago cheio ou vazio.'], es: ['Uso oral diario. Puede tomarse con o sin alimentos de forma indiferente.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr entre 15-60 mL/min, reduzir a dose obrigatoriamente para 100 mg uma vez ao dia. Contraindicado se ClCr < 15 mL/min.', es: 'Si ClCr 15-60 mL/min, disminuir la dosis a 100 mg/día. Contraindicado si ClCr < 15.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste em disfunção leve ou moderada. Não recomendado na insuficiência grave (Child-Pugh C).', es: 'No recomendado en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Náusea leve', 'Infecções respiratórias altas e tonturas', 'Hipercolesterolemia moderada'], es: ['Náusea leve', 'Infecciones respiratorias', 'Aumento de lípidos en sangre'] },
      dangerousAdverseEffects: { pt: ['Reativação de Herpes Zoster e Tuberculose Latente', 'Tromboembolismo Venoso (TEP) - Alerta de Classe', 'Redução transitória da espermatogênese (Alerta de fertilidade masculina)'], es: ['Reactivación de Herpes Zóster', 'Tromboembolismo Venoso (TEP)', 'Riesgo teórico reversible en la espermatogénesis masculina'] },
      contraindications: {
        absolute: { pt: ['Gravidez ativa (Risco teratogênico severo)', 'Infecções graves ativas sistêmicas'], es: ['Embarazo activo', 'Infecciones graves no controladas'] },
        relative: { pt: ['Uso concomitante com indutores potentes da CYP3A4 (Rifampicina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA FERTILIDADE MASCULINA: Nos estudos animais de toxicologia, o Filgotinibe causou atrofia dos túbulos seminíferos com redução da contagem de espermatozoides. Embora os estudos humanos (MANTA) tenham mostrado segurança, oriente o paciente jovem em planejamento familiar sobre esse perfil de classe.', es: 'ALERTA DE FERTILIDAD MASCULINA: Estudios preclínicos indicaron riesgo de toxicidad testicular y alteración en la espermatogénesis. Aunque el estudio clínico MANTA demostró seguridad en humanos, se recomienda precaución en hombres jóvenes en edad fértil.' }
      },
      references: {
        pt: 'SELECTION Trial (Filgotinib in Ulcerative Colitis - Lancet 2021); MANTA Safety Study (Fertilidade); EMA Jyseleca Data.',
        es: 'SELECTION Trial (Lancet 2021); MANTA Safety Study; Ficha Técnica de la Agencia Europea de Medicamentos (EMA).'
      }
    },

    /* ── RISANQUIZUMABE (748) ───────────────────────────────────────────── */
    "risanquizumabe": {
      name: { pt: 'Risanquizumabe', es: 'Risankizumab' },
      category: 'gastroenterologia',
      class: { pt: 'Anticorpo Monoclonal Humano Anti-IL-23 / Imunobiológico de Alta Seletividade', es: 'Anticuerpo Monoclonal Humano Anti-IL-23 / Inmunobiológico de Alta Selectividad' },
      indications: {
        pt: ['Doença de Crohn ativa moderada a grave em adultos que falharam a terapias convencionais ou anti-TNF', 'Psoríase em placas grave e Artrite Psoríaca'],
        es: ['Enfermedad de Crohn activa moderada a severa', 'Psoriasis en placas grave y Artritis Psoriásica']
      },
      commercialNames: { br: ['Skyrizi'], ar: ['Skyrizi'] },
      presentation: { pt: ['Frasco-ampola IV 600 mg/10 mL para indução', 'Cartucho com caneta injetável Subcutânea 360 mg/2,4 mL para manutenção'], es: ['Vial IV 600 mg para inducción', 'Cartucho Subcutáneo 360 mg para mantenimiento'] },
      mechanism: {
        pt: 'O Bloqueador Cirúrgico da IL-23. É um anticorpo IgG1 puramente humano que se liga de forma ultra-seletiva à subunidade p19 da Interleucina-23 (IL-23). Ao contrário do Ustekinumabe (que bloqueia IL-12 e IL-23 juntas), o Risanquizumabe foca APENAS na IL-23. Isso paralisa a ativação dos linfócitos patogênicos Th17 no intestino, parando a inflamação destrutiva sem alterar os caminhos de defesa da IL-12 contra vírus e tumores.',
        es: 'Anticuerpo monoclonal humano IgG1 que se une selectivamente a la subunidad p19 de la interleucina 23 (IL-23), bloqueando su cascada biológica. Esto suprime la diferenciación de linfocitos Th17 sin alterar la vía de la IL-12, logrando un control inflamatorio intestinal óptimo con mínima inmunodepresión sistémica.'
      },
      dose: {
        adult: {
          pt: 'Indução Gástrica: 600 mg via Intravenosa (infusão de 1h) na semana 0, semana 4 e semana 8. Manutenção Crônica: 360 mg via Subcutânea na semana 12, repetida a cada 8 semanas (a cada 2 meses).',
          es: 'Inducción: 600 mg vía Intravenosa lenta en las semanas 0, 4 y 8. Mantenimiento: 360 mg vía Subcutánea en la semana 12, y luego cada 8 semanas de por vida.'
        },
        pediatric: {
          pt: 'Não indicado ou aprovado para menores de 18 anos em indicações intestinais.',
          es: 'No recomendado en menores de 18 años.'
        }
      },
      administration: { pt: ['A indução é estritamente INTRAVENOSA lenta hospitalar. A manutenção de 360mg usa um dispositivo injetor subcutâneo especial colado na pele do abdômen ou coxa que infunde a dose automaticamente ao longo de 5 minutos.'], es: ['La inducción es INTRAVENOSA. El mantenimiento de 360mg utiliza un inyector corporal electrónico subcutáneo automatizado de 5 minutos de duración.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, eliminado por catabolismo proteico.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Infecções respiratórias altas e cefaleia', 'Fadiga transitória pós-infusão', 'Reações leves eritematosas no sítio da pele'], es: ['Infecciones respiratorias y cefalea', 'Fatiga transitoria post-infusión', 'Eritema local'] },
      dangerousAdverseEffects: { pt: ['Reativação de Tuberculose Latente (Risco muito menor que anti-TNF, mas monitorado)', 'Hepatotoxicidade medicamentosa aguda (Exige controle de enzimas laboratoriais)'], es: ['Reactivación de Tuberculosis Latente', 'Hepatotoxicidad aguda (Monitorear transaminasas)'] },
      contraindications: {
        absolute: { pt: ['Infecções bacterianas ou fúngicas clinicamente graves ativas', 'Tuberculose ativa'], es: ['Infecciones activas clínicamente graves', 'Tuberculosis activa'] },
        relative: { pt: ['Uso associado concomitante com outros imunobiológicos de alta potência'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DISPOSITIVO ELETRÔNICO NA PELE: A dose de manutenção de 360mg do Skyrizi para Crohn não é uma injeção comum. Ela vem com um aparelho eletrônico colado no corpo. O paciente precisa acionar o botão e esperar o bipe luminoso terminar. Erros no manuseio jogam fora o remédio que custa milhares de reais; treine o paciente na clínica.', es: 'ALERTA DEL INYECTOR CORPORAL DE MANTENIMIENTO: El cartucho de 360mg utiliza un dispositivo electrónico adhesivo automatizado. El paciente debe ser entrenado en el consultorio para evitar la pérdida accidental del fármaco por mala manipulación.' }
      },
      references: {
        pt: 'ADVANCE e MOTIVATE Induction Trials (Crohn - Lancet 2022); FORTIFY Maintenance Trial; Diretrizes GEDIIB 2024.',
        es: 'ADVANCE & MOTIVATE Trials (Lancet 2022); FORTIFY Maintenance Trial; Directrices de Consenso de la SAGE.'
      }
    },

    /* ── MIRIQUIZUMABE (749) ─────────────────────────────────────────────── */
    "miriquizumabe": {
      name: { pt: 'Miriquizumabe', es: 'Mirikizumab' },
      category: 'gastroenterologia',
      class: { pt: 'Anticorpo Monoclonal Humano Anti-IL-23 p19 / Imunobiológico de Alvo Colorretal', es: 'Anticuerpo Monoclonal Humano Anti-IL-23 p19 / Inmunobiológico de Alvo Colorrectal' },
      indications: {
        pt: ['Tratamento da Retocolite Ulcerativa (RCU) ativa moderada a grave em adultos que falharam ou foram intolerantes a terapias biológicas ou inibidores de JAK'],
        es: ['Tratamiento de la Colitis Ulcerosa moderada a severa activa en adultos con falla a biológicos previos']
      },
      commercialNames: { br: ['Omvoh'], ar: ['Omvoh'] },
      presentation: { pt: ['Frasco-ampola IV 300 mg/15 mL para indução', 'Caneta injetável Subcutânea 100 mg/1 mL para manutenção'], es: ['Vial IV 300 mg para inducción', 'Pluma Subcutánea 100 mg para mantenimiento'] },
      mechanism: {
        pt: 'O Cirurgião da Retocolite. É um anticorpo monoclonal humanizado direcionado especificamente contra a subunidade p19 da Interleucina-23. Ao bloquear a IL-23 no intestino grosso, ele paralisa o recrutamento de neutrófilos e linfócitos destrutivos que causam o sangramento e o pus nas úlceras da colite, induzindo taxas altíssimas de cicatrização endoscópica da mucosa do reto e cólon.',
        es: 'Anticuerpo monoclonal humanizado IgG4 que se une selectivamente a la subunidad p19 de la IL-23. Bloquea la activación celular dependiente de esta vía en el colon, deteniendo el reclutamiento de neutrófilos y linfocitos destructivos, induciendo remisión clínica duradera de las úlceras sangrantes.'
      },
      dose: {
        adult: {
          pt: 'Indução RCU: 300 mg via Intravenosa (infusão de 30 minutos) na semana 0, semana 4 e semana 8. Manutenção: 200 mg administrados via Subcutânea (DUAS injeções de 100 mg) na semana 12, repetida a cada 4 semanas (uma vez por mês).',
          es: 'Inducción: 300 mg vía Intravenosa lenta en las semanas 0, 4 y 8. Mantenimiento: 200 mg vía Subcutánea (DOS plumas de 100 mg) la semana 12, y luego cada 4 semanas de por vida.'
        },
        pediatric: {
          pt: 'Não indicado ou aprovado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Indução IV hospitalar lenta de 30 min. A manutenção de 200mg exige a aplicação consecutiva de DUAS canetas subcutâneas de 100mg no mesmo dia, alternando coxas ou abdômen.'], es: ['Inducción INTRAVENOSA. El mantenimiento exige la aplicación de DOS plumas subcutáneas de 100mg consecutivas el mismo día del mes.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, não depurado pelos rins.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Nasofaringite e resfriado comum', 'Cefaleia episódica', 'Reações dolorosas no local da picada subcutânea'], es: ['Nasofaringitis', 'Cefalea', 'Dolor local en el sitio de inyección'] },
      dangerousAdverseEffects: { pt: ['Reativação de Tuberculose Latente', 'Hepatotoxicidade aguda com elevação acentuada de transaminases (Requer suspensão se TGO/TGP > 5x o normal)'], es: ['Reactivación de Tuberculosis', 'Hepatotoxicidad severa con picos de transaminasas'] },
      contraindications: {
        absolute: { pt: ['Infecções sistêmicas ativas graves não controladas', 'Tuberculose ativa confirmada'], es: ['Infección activa grave', 'Tuberculosis activa'] },
        relative: { pt: ['Histórico de reações anafiláticas a anticorpos IgG4'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DAS DUAS PICADAS NO MANTENIMENTO: O Omvoh (Miriquizumabe) possui uma pegadinha na manutenção domiciliar: a dose padrão é de 200mg, mas a caneta injetável que vem na caixa possui apenas 100mg. O paciente PRECISA aplicar as DUAS canetas seguidas no mesmo dia para fechar a dose. Aplicar apenas uma causa subdosagem e falha total do remédio.', es: 'ALERTA DE DOS APLICACIONES DE MANTENIMIENTO: La dosis mensual de mantenimiento es de 200mg, pero las plumas comerciales son de 100mg. El paciente DEBE inyectarse DOS plumas consecutivas en el mismo momento. Aplicar solo una anula la eficacia por subdosificación.' }
      },
      references: {
        pt: 'LUCENT-1 Induction Trial (Colite - JAMA 2023); LUCENT-2 Maintenance Trial; EMA Product Information Omvoh.',
        es: 'LUCENT-1 & LUCENT-2 Trials (JAMA 2023); Ficha Técnica de la Agencia Europea de Medicamentos (EMA).'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 444 (golimumabe + tofacitinibe + upadacitinibe + filgotinibe + risanquizumabe + miriquizumabe — Anti-TNF Humano/Inibidores JAK/Anti-IL-23 p19 para DII) */

  /* ── BUILD 445 GUARD ─────────────────────────────────────────────── */
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || window.GASTROENTEROLOGIA_DRUGS_DB === null) return;
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

    /* ── ÁCIDO URSODESOXICÓLICO (750) ───────────────────────────────────── */
    "acido_ursodesoxicolico": {
      name: { pt: 'Ácido Ursodesoxicólico (UDCA)', es: 'Ácido Ursodesoxicólico (UDCA)' },
      category: 'gastroenterologia',
      class: { pt: 'Ácido Biliar Hidrofílico Natural / Citoprotetor e Colerético', es: 'Ácido Biliar Hidrofílico Natural / Citoprotector y Colerético' },
      indications: {
        pt: ['Tratamento da Colangite Biliar Primária (CBP, antiga Cirrose Biliar Primária)', 'Dissolução de cálculos biliares de colesterol radiotransparentes em pacientes sem indicação cirúrgica', 'Tratamento da lama biliar e gastrite de refluxo biliar'],
        es: ['Tratamiento de la Colangitis Biliar Primaria (CBP)', 'Disolución de cálculos biliares de colesterol radiotransparentes', 'Colestasis neonatal y pediátrica']
      },
      commercialNames: { br: ['Ursacol', 'Urso'], ar: ['Ursacol', 'Udca Richmond', 'Cholagutt'] },
      presentation: { pt: ['Comprimidos de 50 mg, 150 mg, 300 mg e 450 mg'], es: ['Comprimidos de 150 mg, 300 mg y 500 mg'] },
      mechanism: {
        pt: 'O Diluente de Bile Tóxica. É um ácido biliar minoritário hidrofílico natural. Quando administrado por via oral, ele compete e substitui os ácidos biliares endógenos hidrofóbicos que são altamente tóxicos e corrosivos para as membranas das células do fígado. Ele estimula a secreção biliar (colerese), dilui a bile espessa e protege os hepatócitos e colangiócitos contra a apoptose e destruição imunomediada.',
        es: 'Ácido biliar terciario hidrofílico. Al ser absorbido, desplaza de forma competitiva a los ácidos biliares endógenos lipofílicos e hidrofóbicos acumulados (altamente hepatotóxicos). Reduce la secreción de colesterol en la bilis, estabiliza las membranas celulares y ejerce un efecto inmunomodulador y colerético en los conductos biliares.'
      },
      dose: {
        adult: {
          pt: 'Colangite Biliar Primária (CBP): 13 a 15 mg/kg/dia via oral, divididos em 2 a 3 tomadas junto com as refeições. Dissolução de cálculos: 10 mg/kg/dia via oral, em dose única à noite.',
          es: 'CBP: 13 a 15 mg/kg/día vía oral, fraccionado en 2 o 3 tomas con las comidas. Disolución de cálculos: 10 mg/kg/día por la noche.'
        },
        pediatric: {
          pt: 'Atresia biliar e fibrose cística colestática pediátrica: 20 a 30 mg/kg/dia divididos em 2 a 3 tomadas.',
          es: 'Colestasis pediátrica: 20 a 30 mg/kg/día.'
        }
      },
      administration: { pt: ['Uso oral contínuo crônico. Deve ser ingerido estritamente junto com alimentos para otimizar sua incorporação nas micelas biliares. Não mastigar os comprimidos.'], es: ['Uso oral continuo. Tomar obligatoriamente con alimentos para asegurar su correcta absorción enterohepática.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima eliminação renal, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Indicado para proteção hepática; monitorar transaminases e bilirrubinas na fase de titulação.', es: 'No requiere ajuste, fármaco protector hepático.' } },
      commonAdverseEffects: { pt: ['Fezes amolecidas ou diarreia leve (efeito osmótico biliar)', 'Náuseas e dispepsia', 'Prurito cutâneo temporário no início'], es: ['Heces blandas o diarrea leve', 'Náuseas', 'Prurito transitorio inicial'] },
      dangerousAdverseEffects: { pt: ['Piora paradoxal da colestase se houver obstrução mecânica completa não diagnosticada do colédoco'], es: ['Exacerbación de la ictericia en caso de obstrucción biliar mecánica total'] },
      contraindications: {
        absolute: { pt: ['Obstrução mecânica completa dos ductos biliares (colédoco ou cístico)', 'Colecistite aguda ativa ou vesícula biliar não funcionante', 'Cálculos biliares calcificados radiopacos'], es: ['Obstrucción biliar mecánica completa', 'Colecistitis aguda activa', 'Cálculos calcificados radiopacos'] },
        relative: { pt: ['Uso concomitante com colestiramina (bloqueia a absorção do Ursacol - VER MOTOR)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O REMÉDIO DE USO CONTÍNUO QUE EVITA TRANSPLANTE: Na Colangite Biliar Primária, o Ursacol não cura a doença genética, mas atrasa a progressão da fibrose em décadas. Se o paciente suspender o remédio por conta própria, os ácidos biliares tóxicos voltam a corroer os canais do fígado, acelerando a necessidade de um transplante hepático de emergência.', es: 'EL PROTECTOR CONTINUO DE POR VIDA: En la CBP, el UDCA frena la progresión hacia la cirrosis y retrasa la necesidad de trasplante por décadas. Si el paciente suspende la toma, los ácidos biliares corrosivos vuelven a destruir los conductos. No se debe interrumpir.' }
      },
      references: {
        pt: 'AASLD Practice Guidelines for Primary Biliary Cholangitis; Manual de Hepatologia do Ambulatório do HC-FMUSP; Cochrane Database.',
        es: 'AASLD Practice Guidelines; Guías de Colestasis Crónicas de la Sociedad Argentina de Hepatología (SAH).'
      }
    },

    /* ── ÁCIDO OBETICÓLICO (751) ────────────────────────────────────────── */
    "acido_obeticolico": {
      name: { pt: 'Ácido Obeticólico', es: 'Ácido Obeticólico' },
      category: 'gastroenterologia',
      class: { pt: 'Agonista do Receptor Farnesoide X (FXR) / Ácido Biliar Sintético Modificado', es: 'Agonista del Receptor Farnesoide X (FXR) / Ácido Biliar Sintético Modificado' },
      indications: {
        pt: ['Tratamento da Colangite Biliar Primária (CBP) em combinação com o ácido ursodesoxicólico em adultos com resposta inadequada, ou como monoterapia em pacientes intolerantes ao UDCA'],
        es: ['Tratamiento de la Colangitis Biliar Primaria (CBP) en adultos con respuesta inadecuada o intolerancia al ácido ursodesoxicólico']
      },
      commercialNames: { br: ['Ocaliva (Importação de alto custo)'], ar: ['Ocaliva'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg e 10 mg'], es: ['Comprimidos 5 mg y 10 mg'] },
      mechanism: {
        pt: 'O Regulador Genético do Fígado. É um análogo do ácido quenodesoxicólico modificado quimicamente (6-alfa-etil). Ele liga-se com afinidade 100 vezes superior ao receptor nuclear Farnesoide X (FXR) no fígado. A ativação do FXR desliga a transcrição de genes que fabricam novos ácidos biliares e ativa transportadores que expulsam os ácidos biliares para fora do fígado, cortando a toxicidade celular por raiz genética.',
        es: 'Agonista potente y selectivo del receptor nuclear Farnesoide X (FXR). Regula la transcripción genética en el hepatocito: inhibe la síntesis de novo de ácidos biliares mediante la supresión de la enzima CYP7A1 y estimula su transporte fuera del hígado, disminuyendo la colestasis intrahepática.'
      },
      dose: {
        adult: {
          pt: 'Início: 5 mg via oral, UMA VEZ ao dia. Reavaliar após 6 meses; se as enzimas fosfatase alcalina continuarem altas e o paciente tolerar, elevar para 10 mg via oral uma vez ao dia. ATENÇÃO MÁXIMA EM CIRROSE (Ver Alertas).',
          es: 'Inicio: 5 mg vía oral, UNA VEZ al día. Evaluar a los 6 meses: si la fosfatasa alcalina persiste elevada y es tolerado, incrementar a 10 mg una vez al día. ¡CUIDADO CRÍTICO EN CIRROSIS AVANZADA!.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário, com ou sem alimentos. Pacientes com cirrose avançada Child-Pugh B ou C exigem esquemas de doses ultra-espaçados (VER ALERTAS).'], es: ['Uso oral diario. En pacientes cirróticos avanzados, la frecuencia se reduce estrictamente a 1 o 2 veces POR SEMANA.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, eliminação puramente biliar/fecal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CRÍTICO (Alerta Caixa Preta). Em cirrose descompensada Child-Pugh B ou C, a dose deve iniciar com 5 mg APENAS UMA VEZ POR SEMANA, progredindo no máximo para duas vezes por semana. Dar dose diária nesse perfil destrói o fígado de forma fulminante.', es: 'CRÍTICO (Caja Negra). En cirrosis avanzada Child-Pugh B o C, iniciar con 5 mg SOLO UNA VEZ POR SEMANA. El uso diario en estos pacientes provoca insuficiencia hepática fulminante.' } },
      commonAdverseEffects: { pt: ['PRURIDO EXCRUCIANTE (Coceira insuportável no corpo todo que afeta até 60% dos usuários, sendo o principal motivo de suspensão)', 'Fadiga e cansaço severos', 'Dor orofaríngea'], es: ['PRURITO EXCRUCIANTE (Comezón insoportable generalizada que afecta hasta al 60% de los pacientes)', 'Fatiga', 'Dolor abdominal'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Hepática Fulminante e óbito por superdosagem em cirróticos', 'Ascite e sangramento de varizes esofágicas por descompensação portal'], es: ['Fallo Hepático Fulminante por sobredosificación en cirrosis', 'Ascitis y sangrado de varices esofágicas'] },
      contraindications: {
        absolute: { pt: ['Pacientes com cirrose descompensada Child-Pugh B ou C ou histórico de evento de descompensação hepática ativa', 'Obstrução biliar mecânica completa'], es: ['Cirrosis descompensada Child-Pugh B o C', 'Obstrucción biliar mecánica completa'] },
        relative: { pt: ['Uso associado com resinas quelantes (Colestiramina bloqueia o Ocaliva - afastar 4 horas)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DA SUPERDOSAGEM EM CIRRÓTICOS: O Ácido Obeticólico carrega o alerta de erro médico mais perigoso da hepatologia. Se um clínico prescrever a dose de 5mg DIÁRIA para um paciente que já tem cirrose avançada (Child B ou C), o remédio se acumula de forma tóxica e provoca necrose do fígado, levando ao óbito por falência hepática. A dose nesse perfil deve ser SEMANÁRIA. Faça dupla checagem.', es: 'ALERTA DE CAJA NEGRA MORTAL: El error de dosificación diaria en pacientes con cirrosis avanzada (Child B o C) acumula el fármaco induciendo necrosis masiva y muerte por fallo hepático. En cirróticos, la dosis DEBE ser SEMANAL (1 o 2 veces por semana). Realice doble chequeo de la función hepática.' }
      },
      references: {
        pt: 'POISE Trial (Obeticholic Acid in PBC - NEJM 2016); FDA Boxed Warning Ocaliva 2022; Manual de Hepatologia Avançada USP.',
        es: 'POISE Trial (NEJM 2016); FDA Boxed Warning (Ocaliva); Guías de la Sociedad Argentina de Hepatología.'
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 445 (acido_ursodesoxicolico + acido_obeticolico — Ácido Biliar Hidrofílico Citoprotetor/Agonista FXR Hepatoprotector Colangite Biliar Primária) */

})();
/* GOLD33_SELECTIVE:acido_obeticolico:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["acido_obeticolico"])throw new Error("GOLD33_MISSING_CANONICAL:acido_obeticolico");db["acido_obeticolico"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "002",
    "requiredFieldCount": 33,
    "approvedSha256": "e149f8e22971fe01f8b9480334053b230ce2c76ef359f54930d25b1dccbd5011",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Ácido obeticólico — Ocaliva oral para colangite biliar primária em adultos.",
    "class": "Terapia biliar; agonista de FXR.",
    "pharmacologicClass": "Ácido biliar semissintético; agonista seletivo de FXR.",
    "commercialNames": "Nomes comerciais variam por jurisdição; a marca não substitui a confirmação de princípio ativo, sal e concentração.",
    "presentation": "Comprimidos orais de 5 mg e 10 mg [4].",
    "presentations": "Comprimidos orais de 5 mg e 10 mg [4].",
    "mechanism": "Ativa FXR e regula síntese/transporte de ácidos biliares [4].",
    "pharmacodynamics": "Em CBP, reduz fosfatase alcalina e bilirrubina; não extrapolar a outros desfechos [4].",
    "pharmacokinetics": "Metabolismo hepatointestinal e circulação entero-hepática; a exposição aumenta em disfunção hepática [4].",
    "indications": "CBP adulta com UDCA quando resposta inadequada, ou isolado se UDCA não tolerado [4].",
    "dose": "5 mg VO/dia; após 6 meses, se tolerado e resposta insuficiente, máximo 10 mg/dia. Não usar em Child-Pugh B/C, descompensação prévia ou hipertensão portal clinicamente significativa [4].",
    "pediatricDose": "Não foi localizado regime pediátrico completo e diretamente aplicável na fonte selecionada. Campo textual mantido para revisão; AUTOMATIZÁVEL: NÃO.",
    "renalDose": "Sem ajuste renal segundo a ficha técnica [4].",
    "hepaticDose": "A fonte selecionada não fornece ajuste hepático numérico universal; avaliar gravidade, produto e indicação antes de prescrever.",
    "commonAdverseEffects": "Prurido, fadiga, dor abdominal e rash foram relatados [4].",
    "dangerousAdverseEffects": "Descompensação/insuficiência hepática pode ser grave ou fatal; interromper se descompensar [4].",
    "adverseEffects": "Prurido, fadiga, dor abdominal e rash foram relatados [4]. Descompensação/insuficiência hepática pode ser grave ou fatal; interromper se descompensar [4]. Avaliar temporalidade, produto e dose; notificar suspeitas relevantes conforme a farmacovigilância local.",
    "contraindications": "Cirrose descompensada, Child-Pugh B/C, evento prévio de descompensação, hipertensão portal clinicamente significativa e obstrução biliar completa [4].",
    "interactions": "Separar 4–6 h de sequestrantes de ácidos biliares; monitorar INR com varfarina [4].",
    "monitoring": "Estado hepático, sintomas de descompensação, bilirrubina, INR, FA e prurido.",
    "administration": "VO uma vez ao dia, com/sem alimento; separar de sequestrantes [4].",
    "preparation": "Não há preparo parenteral no escopo desta ficha. Não triturar, dividir ou manipular a formulação sem confirmação do produto.",
    "infusionProtocol": "Não há protocolo de infusão aplicável ao escopo/formulação desta ficha; não extrapolar para apresentações injetáveis.",
    "pregnancy": "Dados limitados em gestação; decidir com especialista [4].",
    "lactation": "Não se sabe se é excretado no leite; ponderar tratamento/amamentação [4].",
    "specialPopulations": "Não indicado em pediatria; doença hepática avançada impede início/continuidade.",
    "patientEducation": "Não iniciar, interromper ou ajustar por conta própria; levar lista de medicamentos e comunicar sinais de toxicidade ou alergia. Não automatizar cálculo, dose pediátrica, ajuste renal ou infusão nesta versão candidata; a ficha é educativa e requer validação clínica e vinculação ao produto local.",
    "clinicalPearls": "A indicação e a formulação definem a segurança do uso; esta ficha não autoriza intercâmbio automático entre produtos.",
    "guidelineRecommendations": "Seguir bula e diretriz aplicáveis ao cenário; quando houver lacuna, encaminhar para revisão clínica.",
    "safetyFlags": "RESTRIÇÃO HEPÁTICA CRÍTICA; titulação e cálculos bloqueados.",
    "alerts": "ALERTA: confirmar ausência de descompensação e hipertensão portal antes do uso.",
    "references": [
      "[4] AEMPS/CIMA — Ocaliva 5/10 mg — Produto oral para CBP em adultos."
    ],
    "ref": "https://cima.aemps.es/cima/dochtml/ft/1161139001/ft_1161139001.html"
  },
  "es": {
    "name": "Ácido obeticólico — Ocaliva oral para colangitis biliar primaria en adultos.",
    "class": "Terapia biliar; agonista de FXR.",
    "pharmacologicClass": "Ácido biliar semisintético; agonista selectivo de FXR.",
    "commercialNames": "Los nombres comerciales varían por jurisdicción; la marca no sustituye la confirmación de principio activo, sal y concentración.",
    "presentation": "Comprimidos orales de 5 mg y 10 mg [4].",
    "presentations": "Comprimidos orales de 5 mg y 10 mg [4].",
    "mechanism": "Activa FXR y regula síntesis/transporte de ácidos biliares [4].",
    "pharmacodynamics": "En CBP, reduce fosfatasa alcalina y bilirrubina; no extrapolar a otros desenlaces [4].",
    "pharmacokinetics": "Metabolismo hepatointestinal y circulación enterohepática; la exposición aumenta en disfunción hepática [4].",
    "indications": "CBP adulta con UDCA cuando la respuesta es inadecuada, o solo si UDCA no se tolera [4].",
    "dose": "5 mg VO/día; después de 6 meses, si se tolera y la respuesta es insuficiente, máximo 10 mg/día. No usar en Child-Pugh B/C, descompensación previa o hipertensión portal clínicamente significativa [4].",
    "pediatricDose": "No se localizó un esquema pediátrico completo y directamente aplicable en la fuente seleccionada. Campo textual mantenido para revisión; AUTOMATIZABLE: NO.",
    "renalDose": "Sin ajuste renal según la ficha técnica [4].",
    "hepaticDose": "La fuente seleccionada no proporciona un ajuste hepático numérico universal; evaluar gravedad, producto e indicación antes de prescribir.",
    "commonAdverseEffects": "Se han comunicado prurito, fatiga, dolor abdominal y erupción [4].",
    "dangerousAdverseEffects": "La descompensación/insuficiencia hepática puede ser grave o fatal; suspender si se descompensa [4].",
    "adverseEffects": "Se han comunicado prurito, fatiga, dolor abdominal y erupción [4]. La descompensación/insuficiencia hepática puede ser grave o fatal; suspender si se descompensa [4]. Evaluar temporalidad, producto y dosis; notificar sospechas relevantes según la farmacovigilancia local.",
    "contraindications": "Cirrosis descompensada, Child-Pugh B/C, episodio previo de descompensación, hipertensión portal clínicamente significativa y obstrucción biliar completa [4].",
    "interactions": "Separar 4–6 h de secuestrantes de ácidos biliares; monitorizar INR con warfarina [4].",
    "monitoring": "Estado hepático, síntomas de descompensación, bilirrubina, INR, FA y prurito.",
    "administration": "VO una vez al día, con/sin alimentos; separar de secuestrantes [4].",
    "preparation": "No hay preparación parenteral en el alcance de esta ficha. No triturar, dividir ni manipular la formulación sin confirmación del producto.",
    "infusionProtocol": "No hay protocolo de infusión aplicable al alcance/formulación de esta ficha; no extrapolar a presentaciones inyectables.",
    "pregnancy": "Datos limitados en embarazo; decidir con especialista [4].",
    "lactation": "Se desconoce si se excreta en la leche; ponderar tratamiento/lactancia [4].",
    "specialPopulations": "No indicado en pediatría; enfermedad hepática avanzada impide inicio/continuidad.",
    "patientEducation": "No iniciar, suspender ni ajustar por cuenta propia; llevar la lista de medicamentos y comunicar signos de toxicidad o alergia. No automatizar cálculo, dosis pediátrica, ajuste renal ni infusión en esta versión candidata; la ficha es educativa y requiere validación clínica y vinculación al producto local.",
    "clinicalPearls": "La indicación y la formulación definen la seguridad del uso; esta ficha no autoriza intercambio automático entre productos.",
    "guidelineRecommendations": "Seguir el prospecto y la guía aplicables al escenario; cuando haya una laguna, derivar a revisión clínica.",
    "safetyFlags": "RESTRICCIÓN HEPÁTICA CRÍTICA; titulación y cálculos bloqueados.",
    "alerts": "ALERTA: confirmar ausencia de descompensación e hipertensión portal antes del uso.",
    "references": [
      "[4] AEMPS/CIMA — Ocaliva 5/10 mg — Produto oral para CBP em adultos."
    ],
    "ref": "https://cima.aemps.es/cima/dochtml/ft/1161139001/ft_1161139001.html"
  }
};})();
/* GOLD33_SELECTIVE:acido_obeticolico:END */
/* GOLD33_SELECTIVE:acido_ursodesoxicolico:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["acido_ursodesoxicolico"])throw new Error("GOLD33_MISSING_CANONICAL:acido_ursodesoxicolico");db["acido_ursodesoxicolico"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "002",
    "requiredFieldCount": 33,
    "approvedSha256": "e149f8e22971fe01f8b9480334053b230ce2c76ef359f54930d25b1dccbd5011",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Ácido ursodesoxicólico — Ursobilane oral, adultos.",
    "class": "Terapia biliar; ácido biliar.",
    "pharmacologicClass": "Ácido biliar hidrofílico; ATC A05AA02.",
    "commercialNames": "Nomes comerciais variam por jurisdição; a marca não substitui a confirmação de princípio ativo, sal e concentração.",
    "presentation": "Cápsulas de 150, 300 e 500 mg [7].",
    "presentations": "Cápsulas de 150, 300 e 500 mg [7].",
    "mechanism": "Dessatura a bile litogênica e favorece lise de cálculos de colesterol [7].",
    "pharmacodynamics": "Indicado para dissolução de cálculos selecionados e CBP no produto consultado [7].",
    "pharmacokinetics": "A absorção intestinal é preservada na IH descrita; há circulação entero-hepática [7].",
    "indications": "Adultos: cálculos de colesterol radiotransparentes com vesícula funcionante e cirrose biliar primária [7].",
    "dose": "Cálculos: 8–10 mg/kg/dia em 2–3 tomadas. CBP: 13–15 mg/kg/dia em 3–4 tomadas com refeições [7].",
    "pediatricDose": "Segurança/eficácia não estabelecidas em crianças; uso não recomendado [7].",
    "renalDose": "Não necessita ajuste de dose segundo a ficha [7].",
    "hepaticDose": "Sem ajuste proposto no produto, mas doença hepática avançada exige tratamento específico e monitorização [7].",
    "commonAdverseEffects": "Náusea, vômito, dispepsia, dor abdominal, flatulência e constipação; diarreia muito rara [7].",
    "dangerousAdverseEffects": "Elevação persistente de AST/ALT requer suspensão; obstrução/cólica biliar exige avaliação [7].",
    "adverseEffects": "Náusea, vômito, dispepsia, dor abdominal, flatulência e constipação; diarreia muito rara [7]. Elevação persistente de AST/ALT requer suspensão; obstrução/cólica biliar exige avaliação [7]. Avaliar temporalidade, produto e dose; notificar suspeitas relevantes conforme a farmacovigilância local.",
    "contraindications": "Vesícula não funcionante, cálculos calcificados/radiopacos/pigmentares, úlcera, colangite/obstrução biliar/pancreatite por cálculos e lactação [7].",
    "interactions": "Evitar antiácidos com alumínio, colestiramina/colestipol, estrogênios/progestágenos e medicamentos hepatotóxicos [7].",
    "monitoring": "USG para cálculos; AST/ALT inicial, 1 e 3 meses e depois a cada 6 meses [7].",
    "administration": "Engolir cápsula inteira com líquido, preferencialmente com refeições [7].",
    "preparation": "Não há preparo parenteral no escopo desta ficha. Não triturar, dividir ou manipular a formulação sem confirmação do produto.",
    "infusionProtocol": "Não há protocolo de infusão aplicável ao escopo/formulação desta ficha; não extrapolar para apresentações injetáveis.",
    "pregnancy": "Usar somente se estritamente necessário; não há estudos adequados em gestantes [7].",
    "lactation": "Contraindicado no produto consultado; interromper lactação durante uso [7].",
    "specialPopulations": "Idosos sem limitação prevista pela idade; pediatria não recomendada [7].",
    "patientEducation": "Não iniciar, interromper ou ajustar por conta própria; levar lista de medicamentos e comunicar sinais de toxicidade ou alergia. Não automatizar cálculo, dose pediátrica, ajuste renal ou infusão nesta versão candidata; a ficha é educativa e requer validação clínica e vinculação ao produto local.",
    "clinicalPearls": "A indicação e a formulação definem a segurança do uso; esta ficha não autoriza intercâmbio automático entre produtos.",
    "guidelineRecommendations": "Seguir bula e diretriz aplicáveis ao cenário; quando houver lacuna, encaminhar para revisão clínica.",
    "safetyFlags": "REVISAR TIPO DE CÁLCULO/VESÍCULA FUNCIONANTE E TRANSAMINASES.",
    "alerts": "ALERTA: não usar para cálculos não elegíveis ou obstrução biliar.",
    "references": [
      "[7] AEMPS/CIMA — Ursobilane 150/300/500 mg — Cápsulas orais; ficha técnica Espanha."
    ],
    "ref": "https://cima.aemps.es/cima/dochtml/ft/65732/FichaTecnica_65732.html"
  },
  "es": {
    "name": "Ácido ursodesoxicólico — Ursobilane oral, adultos.",
    "class": "Terapia biliar; ácido biliar.",
    "pharmacologicClass": "Ácido biliar hidrofílico; ATC A05AA02.",
    "commercialNames": "Los nombres comerciales varían por jurisdicción; la marca no sustituye la confirmación de principio activo, sal y concentración.",
    "presentation": "Cápsulas de 150, 300 y 500 mg [7].",
    "presentations": "Cápsulas de 150, 300 y 500 mg [7].",
    "mechanism": "Desatura la bilis litogénica y favorece la lisis de cálculos de colesterol [7].",
    "pharmacodynamics": "Indicado para disolución de cálculos seleccionados y CBP en el producto consultado [7].",
    "pharmacokinetics": "La absorción intestinal se preserva en IH descrita; hay circulación enterohepática [7].",
    "indications": "Adultos: cálculos de colesterol radiotransparentes con vesícula funcionante y cirrosis biliar primaria [7].",
    "dose": "Cálculos: 8–10 mg/kg/día en 2–3 tomas. CBP: 13–15 mg/kg/día en 3–4 tomas con comidas [7].",
    "pediatricDose": "Seguridad/eficacia no establecidas en niños; uso no recomendado [7].",
    "renalDose": "No necesita ajuste de dosis según la ficha [7].",
    "hepaticDose": "Sin ajuste propuesto en el producto, pero enfermedad hepática avanzada exige tratamiento específico y monitorización [7].",
    "commonAdverseEffects": "Náuseas, vómitos, dispepsia, dolor abdominal, flatulencia y estreñimiento; diarrea muy rara [7].",
    "dangerousAdverseEffects": "Elevación persistente de AST/ALT requiere suspensión; obstrucción/cólico biliar exige evaluación [7].",
    "adverseEffects": "Náuseas, vómitos, dispepsia, dolor abdominal, flatulencia y estreñimiento; diarrea muy rara [7]. Elevación persistente de AST/ALT requiere suspensión; obstrucción/cólico biliar exige evaluación [7]. Evaluar temporalidad, producto y dosis; notificar sospechas relevantes según la farmacovigilancia local.",
    "contraindications": "Vesícula no funcionante, cálculos calcificados/radiopacos/pigmentarios, úlcera, colangitis/obstrucción biliar/pancreatitis por cálculos y lactancia [7].",
    "interactions": "Evitar antiácidos con aluminio, colestiramina/colestipol, estrógenos/progestágenos y medicamentos hepatotóxicos [7].",
    "monitoring": "Ecografía para cálculos; AST/ALT inicial, 1 y 3 meses y después cada 6 meses [7].",
    "administration": "Tragar la cápsula entera con líquido, preferentemente con comidas [7].",
    "preparation": "No hay preparación parenteral en el alcance de esta ficha. No triturar, dividir ni manipular la formulación sin confirmación del producto.",
    "infusionProtocol": "No hay protocolo de infusión aplicable al alcance/formulación de esta ficha; no extrapolar a presentaciones inyectables.",
    "pregnancy": "Usar solo si es estrictamente necesario; no hay estudios adecuados en embarazadas [7].",
    "lactation": "Contraindicado en el producto consultado; interrumpir lactancia durante uso [7].",
    "specialPopulations": "Mayores sin limitación prevista por edad; pediatría no recomendada [7].",
    "patientEducation": "No iniciar, suspender ni ajustar por cuenta propia; llevar la lista de medicamentos y comunicar signos de toxicidad o alergia. No automatizar cálculo, dosis pediátrica, ajuste renal ni infusión en esta versión candidata; la ficha es educativa y requiere validación clínica y vinculación al producto local.",
    "clinicalPearls": "La indicación y la formulación definen la seguridad del uso; esta ficha no autoriza intercambio automático entre productos.",
    "guidelineRecommendations": "Seguir el prospecto y la guía aplicables al escenario; cuando haya una laguna, derivar a revisión clínica.",
    "safetyFlags": "REVISAR TIPO DE CÁLCULO/VESÍCULA FUNCIONANTE Y TRANSAMINASAS.",
    "alerts": "ALERTA: no usar para cálculos no elegibles u obstrucción biliar.",
    "references": [
      "[7] AEMPS/CIMA — Ursobilane 150/300/500 mg — Cápsulas orais; ficha técnica Espanha."
    ],
    "ref": "https://cima.aemps.es/cima/dochtml/ft/65732/FichaTecnica_65732.html"
  }
};})();
/* GOLD33_SELECTIVE:acido_ursodesoxicolico:END */
/* GOLD33_SELECTIVE:alginato_de_sodio:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["alginato_de_sodio"])throw new Error("GOLD33_MISSING_CANONICAL:alginato_de_sodio");db["alginato_de_sodio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "004",
    "requiredFieldCount": 33,
    "approvedSha256": "8aa3e3985bbc49b45a3503ad7aead54a277b148173b757887198e5b9536709c3",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Alginato de sódio",
    "class": "Formador de barreira antirrefluxo",
    "pharmacologicClass": "Polissacarídeo formador de gel/raft; geralmente em combinação com bicarbonato",
    "commercialNames": "Nomes regulatórios usados como evidência: os produtos citados nas referências; marcas AR/BR não presumidas.",
    "presentation": "Suspensão oral combinada: cada 10 mL contém alginato de sódio 1000 mg + bicarbonato de potássio 200 mg (Gaviscon Advance UK). Não extrapolar para outras combinações.",
    "presentations": "Suspensão oral combinada: cada 10 mL contém alginato de sódio 1000 mg + bicarbonato de potássio 200 mg (Gaviscon Advance UK). Não extrapolar para outras combinações.",
    "mechanism": "Polissacarídeo formador de gel/raft; geralmente em combinação com bicarbonato. O efeito clínico decorre do mecanismo descrito na bula primária e deve ser interpretado segundo formulação e indicação.",
    "pharmacodynamics": "Efeito farmacodinâmico coerente com polissacarídeo formador de gel/raft; geralmente em combinação com bicarbonato; resposta e toxicidade são dependentes de exposição, população e via.",
    "pharmacokinetics": "Ação predominantemente física e local: em contato com ácido gástrico forma uma camada de gel flutuante; absorção sistêmica do polímero não é o mecanismo terapêutico.",
    "indications": "Alívio de sintomas de refluxo gastroesofágico, regurgitação ácida e pirose; evidência regulatória consultada refere-se ao produto combinado com bicarbonato de potássio.",
    "dose": "Adultos, idosos e ≥12 anos: 5–10 mL após refeições e ao deitar, até 4 vezes/dia, para o produto combinado avaliado.",
    "pediatricDose": "<12 anos: somente sob orientação médica no SmPC do produto avaliado; não há esquema por kg. AUTOMATABLE=NO.",
    "renalDose": "Cautela em pacientes que exigem restrição de potássio ou sódio; não há ajuste por eGFR, mas a carga eletrolítica depende do produto.",
    "hepaticDose": "Sem ajuste hepático numérico no SmPC consultado.",
    "commonAdverseEffects": "Distensão, náusea ou desconforto gastrointestinal podem ocorrer; eventos são geralmente incomuns.",
    "dangerousAdverseEffects": "Reações de hipersensibilidade, broncoespasmo e anafilaxia são raras; risco eletrolítico depende da combinação.",
    "adverseEffects": "Distensão, náusea ou desconforto gastrointestinal podem ocorrer; eventos são geralmente incomuns. Eventos graves: Reações de hipersensibilidade, broncoespasmo e anafilaxia são raras; risco eletrolítico depende da combinação.",
    "contraindications": "Hipersensibilidade aos componentes. Avaliar conteúdo de potássio/sódio em dietas restritas e condições predisponentes.",
    "interactions": "Pode interferir com absorção de fármacos orais; respeitar intervalo de 2 h para medicamentos suscetíveis conforme SmPC/local.",
    "monitoring": "Resposta sintomática; persistência >7 dias exige reavaliação; monitorar carga de eletrólitos em pacientes vulneráveis.",
    "administration": "Agitar bem; medir o volume; administrar por via oral após refeições e ao deitar. Separar de outros medicamentos orais por 2 h quando indicado pelo produto.",
    "preparation": "Suspensão pronta para uso; não diluir nem reconstituir.",
    "infusionProtocol": "Não aplicável; produto oral.",
    "pregnancy": "Pode ser usado na gestação conforme a informação do produto combinado, se clinicamente necessário e na dose recomendada.",
    "lactation": "Pode ser usado durante a amamentação conforme a informação do produto combinado.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos. Individualizar em fragilidade, multimorbidade e polifarmácia.",
    "patientEducation": "Explicar indicação, técnica correta, sinais de alarme e quando procurar atendimento. Não alterar dose nem interromper tratamento crítico sem orientação.",
    "clinicalPearls": "Confirmar sempre produto, concentração, via, indicação e população antes de calcular ou administrar.",
    "guidelineRecommendations": "Esta ficha é ancorada em informação regulatória primária; diretrizes clínicas locais podem restringir seleção e sequência terapêutica.",
    "safetyFlags": "NÃO HOMOLOGADO. Revisar contraindicações, alertas, cálculos e diferenças de jurisdição antes de integração.",
    "alerts": "Reações de hipersensibilidade, broncoespasmo e anafilaxia são raras; risco eletrolítico depende da combinação. Monoterapia, cálculo por kg e equivalência entre marcas: bloqueados.",
    "references": [
      "1. Fonte regulatória oficial consultada em 2026-09-17: https://products.mhra.gov.uk/substance/?substance=SODIUM%20ALGINATE",
      "2. Fonte regulatória oficial consultada em 2026-09-17: https://www.medicines.org.uk/emc/product/6715/smpc"
    ],
    "ref": "https://products.mhra.gov.uk/substance/?substance=SODIUM%20ALGINATE"
  },
  "es": {
    "name": "Alginato de sodio",
    "class": "Formador de barrera antirreflujo",
    "pharmacologicClass": "Polisacárido formador de gel/raft; generalmente combinado con bicarbonato",
    "commercialNames": "Nombres regulatorios usados como evidencia: productos citados en referencias; no se presumen marcas AR/BR.",
    "presentation": "Suspensión oral combinada: cada 10 mL contiene alginato de sodio 1000 mg + bicarbonato de potasio 200 mg (Gaviscon Advance UK). No extrapolar a otras combinaciones.",
    "presentations": "Suspensión oral combinada: cada 10 mL contiene alginato de sodio 1000 mg + bicarbonato de potasio 200 mg (Gaviscon Advance UK). No extrapolar a otras combinaciones.",
    "mechanism": "Polisacárido formador de gel/raft; generalmente combinado con bicarbonato. El efecto clínico deriva del mecanismo descrito en la ficha primaria y debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Efecto farmacodinámico coherente con polisacárido formador de gel/raft; generalmente combinado con bicarbonato; respuesta y toxicidad dependen de exposición, población y vía.",
    "pharmacokinetics": "Acción predominantemente física y local: en contacto con ácido gástrico forma una capa de gel flotante; la absorción sistémica del polímero no es el mecanismo terapéutico.",
    "indications": "Alivio de síntomas de reflujo gastroesofágico, regurgitación ácida y pirosis; la evidencia regulatoria consultada corresponde al producto combinado con bicarbonato de potasio.",
    "dose": "Adultos, ancianos y ≥12 años: 5–10 mL después de comidas y al acostarse, hasta 4 veces/día, para el producto combinado evaluado.",
    "pediatricDose": "<12 años: solo bajo indicación médica en el SmPC del producto evaluado; no hay esquema por kg. AUTOMATABLE=NO.",
    "renalDose": "Precaución en pacientes que requieren restricción de potasio o sodio; no hay ajuste por eGFR, pero la carga electrolítica depende del producto.",
    "hepaticDose": "Sin ajuste hepático numérico en el SmPC consultado.",
    "commonAdverseEffects": "Pueden aparecer distensión, náusea o malestar gastrointestinal; los eventos suelen ser infrecuentes.",
    "dangerousAdverseEffects": "Reacciones de hipersensibilidad, broncoespasmo y anafilaxia son raras; el riesgo electrolítico depende de la combinación.",
    "adverseEffects": "Pueden aparecer distensión, náusea o malestar gastrointestinal; los eventos suelen ser infrecuentes. Eventos graves: Reacciones de hipersensibilidad, broncoespasmo y anafilaxia son raras; el riesgo electrolítico depende de la combinación.",
    "contraindications": "Hipersensibilidad a los componentes. Evaluar contenido de potasio/sodio en dietas restringidas y condiciones predisponentes.",
    "interactions": "Puede interferir con la absorción de fármacos orales; respetar intervalo de 2 h para medicamentos susceptibles según SmPC/local.",
    "monitoring": "Respuesta sintomática; persistencia >7 días requiere reevaluación; vigilar carga de electrolitos en pacientes vulnerables.",
    "administration": "Agitar bien; medir el volumen; administrar por vía oral después de comidas y al acostarse. Separar de otros medicamentos orales por 2 h cuando lo indique el producto.",
    "preparation": "Suspensión lista para usar; no diluir ni reconstituir.",
    "infusionProtocol": "No aplicable; producto oral.",
    "pregnancy": "Puede usarse en embarazo según la información del producto combinado, si es clínicamente necesario y a la dosis recomendada.",
    "lactation": "Puede usarse durante la lactancia según la información del producto combinado.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos. Individualizar en fragilidad, multimorbilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, técnica correcta, signos de alarma y cuándo consultar. No cambiar dosis ni suspender tratamiento crítico sin indicación.",
    "clinicalPearls": "Confirmar siempre producto, concentración, vía, indicación y población antes de calcular o administrar.",
    "guidelineRecommendations": "Esta ficha se basa en información regulatoria primaria; guías clínicas locales pueden restringir selección y secuencia terapéutica.",
    "safetyFlags": "NO HOMOLOGADO. Revisar contraindicaciones, alertas, cálculos y diferencias jurisdiccionales antes de integrar.",
    "alerts": "Reacciones de hipersensibilidad, broncoespasmo y anafilaxia son raras; el riesgo electrolítico depende de la combinación. Monoterapia, cálculo por kg e equivalência entre marcas: bloqueados.",
    "references": [
      "1. Fonte regulatória oficial consultada em 2026-09-17: https://products.mhra.gov.uk/substance/?substance=SODIUM%20ALGINATE",
      "2. Fonte regulatória oficial consultada em 2026-09-17: https://www.medicines.org.uk/emc/product/6715/smpc"
    ],
    "ref": "https://products.mhra.gov.uk/substance/?substance=SODIUM%20ALGINATE"
  }
};})();
/* GOLD33_SELECTIVE:alginato_de_sodio:END */
/* GOLD33_SELECTIVE:bisacodil:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["bisacodil"])throw new Error("GOLD33_MISSING_CANONICAL:bisacodil");db["bisacodil"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "011",
    "requiredFieldCount": 33,
    "approvedSha256": "7b76ae47c1977e8ef5a9181eab9814d1b9fae210d78f43b2fc0fe9534c35db7d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Bisacodil",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Estimula plexos entéricos e secreção de água/eletrólitos no cólon",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos gastrorresistentes 5 mg e supositórios 10 mg; apresentações pediátricas variam.",
    "presentations": "Comprimidos gastrorresistentes 5 mg e supositórios 10 mg; apresentações pediátricas variam.",
    "mechanism": "Estimula plexos entéricos e secreção de água/eletrólitos no cólon. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco hidrolisado no cólon; baixa absorção sistêmica; início depende da via.",
    "indications": "Constipação ocasional e preparo intestinal como parte de protocolo específico.",
    "dose": "Constipação: 5-15 mg VO uma vez/dia ou 10 mg retal; uso curto. Preparo intestinal exige esquema institucional específico.",
    "pediatricDose": "6-11 anos: frequentemente 5 mg VO ou supositório pediátrico conforme produto; <6 anos somente orientação profissional. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste formal; evitar desidratação e distúrbios eletrolíticos.",
    "hepaticDose": "Sem ajuste formal.",
    "commonAdverseEffects": "Cólica, dor abdominal, diarreia e náusea.",
    "dangerousAdverseEffects": "Desidratação, distúrbios eletrolíticos, síncope e colite isquêmica rara.",
    "adverseEffects": "Cólica, dor abdominal, diarreia e náusea. Graves: Desidratação, distúrbios eletrolíticos, síncope e colite isquêmica rara.",
    "contraindications": "Obstrução/íleo, abdome agudo, apendicite suspeita, dor abdominal inexplicada com náusea/vômito e desidratação grave.",
    "interactions": "Antiácidos/leite/IBP podem dissolver revestimento precocemente; diuréticos e corticoides aumentam risco de hipocalemia com abuso.",
    "monitoring": "Frequência evacuatória, dor, hidratação e eletrólitos se uso repetido.",
    "administration": "Engolir comprimido inteiro; efeito VO em 6-12 h, retal em 15-60 min.",
    "preparation": "Não triturar/mastigar revestido; separar de leite, antiácidos ou IBP por pelo menos 1 h conforme rótulo.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Uso ocasional geralmente aceitável quando necessário; evitar abuso.",
    "lactation": "Absorção sistêmica mínima; geralmente compatível.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Desidratação, distúrbios eletrolíticos, síncope e colite isquêmica rara. Uso bloqueado sem excluir obstrução/abdome agudo; preparo intestinal não automatizado sem protocolo e produto.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bisacodyl",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/021632s012lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bisacodyl"
  },
  "es": {
    "name": "Bisacodilo",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Estimula plexos entéricos y secreción de agua/electrolitos en colon",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos gastrorresistentes 5 mg y supositorios 10 mg; presentaciones pediátricas variables.",
    "presentations": "Comprimidos gastrorresistentes 5 mg y supositorios 10 mg; presentaciones pediátricas variables.",
    "mechanism": "Estimula plexos entéricos y secreción de agua/electrolitos en colon. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco hidrolizado en colon; baja absorción sistémica; inicio depende de vía.",
    "indications": "Estreñimiento ocasional y preparación intestinal como parte de protocolo específico.",
    "dose": "Estreñimiento: 5-15 mg VO una vez/día o 10 mg rectal; uso corto. Preparación intestinal exige esquema institucional específico.",
    "pediatricDose": "6-11 años: frecuentemente 5 mg VO o supositorio pediátrico según producto; <6 años solo con indicación profesional. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste formal; evitar deshidratación y trastornos electrolíticos.",
    "hepaticDose": "Sin ajuste formal.",
    "commonAdverseEffects": "Cólico, dolor abdominal, diarrea y náusea.",
    "dangerousAdverseEffects": "Deshidratación, trastornos electrolíticos, síncope y colitis isquémica rara.",
    "adverseEffects": "Cólico, dolor abdominal, diarrea y náusea. Graves: Deshidratación, trastornos electrolíticos, síncope y colitis isquémica rara.",
    "contraindications": "Obstrucción/íleo, abdomen agudo, apendicitis sospechada, dolor abdominal inexplicado con náusea/vómito y deshidratación grave.",
    "interactions": "Antiácidos/leche/IBP pueden disolver recubrimiento antes; diuréticos y corticoides aumentan hipopotasemia con abuso.",
    "monitoring": "Frecuencia evacuatoria, dolor, hidratación y electrolitos si uso repetido.",
    "administration": "Tragar comprimido entero; efecto VO en 6-12 h, rectal en 15-60 min.",
    "preparation": "No triturar/masticar recubierto; separar de leche, antiácidos o IBP al menos 1 h según ficha.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Uso ocasional generalmente aceptable cuando sea necesario; evitar abuso.",
    "lactation": "Absorción sistémica mínima; generalmente compatible.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Deshidratación, trastornos electrolíticos, síncope y colitis isquémica rara. Uso bloqueado sem excluir obstrução/abdome agudo; preparo intestinal não automatizado sem protocolo e produto.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bisacodyl",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/021632s012lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bisacodyl"
  }
};})();
/* GOLD33_SELECTIVE:bisacodil:END */
/* GOLD33_SELECTIVE:cimetidina:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["cimetidina"])throw new Error("GOLD33_MISSING_CANONICAL:cimetidina");db["cimetidina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "018",
    "requiredFieldCount": 33,
    "approvedSha256": "31fb9de00b183f1c9c0f87ffcfa644831dc43e95772cf9bf5fc41412ff987535",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Cimetidina",
    "class": "Antagonista H2",
    "pharmacologicClass": "Bloqueia receptor H2 e reduz secreção ácida",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos e solução oral; injetável em alguns mercados.",
    "presentations": "Comprimidos e solução oral; injetável em alguns mercados.",
    "mechanism": "Bloqueia receptor H2 e reduz secreção ácida. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Eliminação renal predominante; meia-vida aumenta na insuficiência renal.",
    "indications": "Úlcera, refluxo e estados hipersecretores conforme produto.",
    "dose": "Úlcera duodenal: 800 mg à noite ou 300 mg 4x/dia; DRGE: 800–1600 mg/dia divididos conforme rótulo. Preferir menor dose eficaz.",
    "pediatricDose": "≥1 ano: doses por peso existem em rótulo, mas exigem diagnóstico e função renal. AUTOMATABLE=NO.",
    "renalDose": "Reduzir dose/alongar intervalo conforme ClCr; hemodiálise remove o fármaco.",
    "hepaticDose": "Sem ajuste específico; cautela.",
    "commonAdverseEffects": "Cefaleia, diarreia, tontura e ginecomastia com uso prolongado.",
    "dangerousAdverseEffects": "Confusão, arritmia IV, hepatite, citopenias e interações graves.",
    "adverseEffects": "Cefaleia, diarreia, tontura e ginecomastia com uso prolongado. Graves: Confusão, arritmia IV, hepatite, citopenias e interações graves.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Inibe CYP1A2/2C9/2D6/3A4: varfarina, fenitoína, teofilina, lidocaína e outros; altera pH gástrico.",
    "monitoring": "Sintomas, função renal, estado mental em idosos e interações/INR quando aplicável.",
    "administration": "VO com ou sem alimento; separar de fármacos cuja absorção depende de pH.",
    "preparation": "Medir solução oral; IV conforme concentração local.",
    "infusionProtocol": "IV lenta conforme rótulo para reduzir efeitos cardiovasculares.",
    "pregnancy": "Usar apenas se necessário.",
    "lactation": "Passa ao leite; preferir alternativa com menos interações quando possível.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Confusão, arritmia IV, hepatite, citopenias e interações graves. Dose bloqueada sem indicação, idade/peso, função renal e revisão completa de interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cimetidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/018487s034lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cimetidine"
  },
  "es": {
    "name": "Cimetidina",
    "class": "Antagonista H2",
    "pharmacologicClass": "Bloquea receptor H2 y reduce secreción ácida",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos y solución oral; inyectable en algunos mercados.",
    "presentations": "Comprimidos y solución oral; inyectable en algunos mercados.",
    "mechanism": "Bloquea receptor H2 y reduce secreción ácida. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Eliminación renal predominante; semivida aumenta en insuficiencia renal.",
    "indications": "Úlcera, reflujo y estados hipersecretores según producto.",
    "dose": "Úlcera duodenal: 800 mg por la noche o 300 mg 4 veces/día; ERGE: 800–1600 mg/día divididos según ficha. Preferir menor dosis eficaz.",
    "pediatricDose": "≥1 año: existen dosis por peso en ficha, pero requieren diagnóstico y función renal. AUTOMATABLE=NO.",
    "renalDose": "Reducir dosis/alargar intervalo según ClCr; hemodiálisis elimina el fármaco.",
    "hepaticDose": "Sin ajuste específico; precaución.",
    "commonAdverseEffects": "Cefalea, diarrea, mareo y ginecomastia con uso prolongado.",
    "dangerousAdverseEffects": "Confusión, arritmia IV, hepatitis, citopenias e interacciones graves.",
    "adverseEffects": "Cefalea, diarrea, mareo y ginecomastia con uso prolongado. Graves: Confusión, arritmia IV, hepatitis, citopenias e interacciones graves.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Inhibe CYP1A2/2C9/2D6/3A4: warfarina, fenitoína, teofilina, lidocaína y otros; altera pH gástrico.",
    "monitoring": "Síntomas, función renal, estado mental en ancianos e interacciones/INR cuando corresponda.",
    "administration": "VO con o sin alimentos; separar de fármacos cuya absorción depende del pH.",
    "preparation": "Medir solución oral; IV según concentración local.",
    "infusionProtocol": "IV lenta según ficha para reducir efectos cardiovasculares.",
    "pregnancy": "Usar solo si es necesario.",
    "lactation": "Pasa a la leche; preferir alternativa con menos interacciones cuando sea posible.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Confusión, arritmia IV, hepatitis, citopenias e interacciones graves. Dose bloqueada sem indicação, idade/peso, função renal e revisão completa de interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cimetidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/018487s034lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cimetidine"
  }
};})();
/* GOLD33_SELECTIVE:cimetidina:END */
/* GOLD33_SELECTIVE:dexlansoprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["dexlansoprazol"])throw new Error("GOLD33_MISSING_CANONICAL:dexlansoprazol");db["dexlansoprazol"].mcGoldClinicalV1={
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
    "name": "Dexlansoprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibe irreversivelmente H+/K+-ATPase gástrica",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas de liberação retardada dupla 30 e 60 mg; grânulos conforme produto.",
    "presentations": "Cápsulas de liberação retardada dupla 30 e 60 mg; grânulos conforme produto.",
    "mechanism": "Inibe irreversivelmente H+/K+-ATPase gástrica. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Liberação dupla prolonga supressão ácida; metabolismo CYP2C19/3A4.",
    "indications": "Cicatrização/manutenção de esofagite erosiva e DRGE sintomática não erosiva em adultos; algumas indicações ≥12 anos.",
    "dose": "Esofagite erosiva: 60 mg VO 1x/dia até 8 semanas; manutenção ou DRGE não erosiva: 30 mg 1x/dia, duração conforme indicação.",
    "pediatricDose": "≥12 anos: esquemas semelhantes apenas nas indicações rotuladas; <12 não estabelecido. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste.",
    "hepaticDose": "Hepatopatia grave: máximo 30 mg/dia; moderada pode exigir limite conforme indicação.",
    "commonAdverseEffects": "Diarreia, dor abdominal, náusea e cefaleia.",
    "dangerousAdverseEffects": "Nefrite intersticial, C. difficile, hipomagnesemia, fratura e reações cutâneas graves.",
    "adverseEffects": "Diarreia, dor abdominal, náusea e cefaleia. Graves: Nefrite intersticial, C. difficile, hipomagnesemia, fratura e reações cutâneas graves.",
    "contraindications": "Hipersensibilidade a benzimidazóis; uso com rilpivirina.",
    "interactions": "Rilpivirina, metotrexato em alta dose, digoxina, tacrolimo e fármacos dependentes de pH.",
    "monitoring": "Resposta, Mg/B12 se prolongado, rim, infecção entérica e osso conforme risco.",
    "administration": "Com ou sem alimento; engolir cápsula inteira ou abrir e administrar grânulos conforme instrução, sem mastigar.",
    "preparation": "Não triturar grânulos; métodos por sonda dependem do produto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; usar quando indicado.",
    "lactation": "Dados insuficientes; considerar benefício/risco.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Nefrite intersticial, C. difficile, hipomagnesemia, fratura e reações cutâneas graves. Indicação/duração bloqueadas sem idade, diagnóstico/endoscopia, fígado e revisão de interações dependentes de pH.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexlansoprazole",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a695020.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexlansoprazole"
  },
  "es": {
    "name": "Dexlansoprazol",
    "class": "Inhibidor de bomba de protones",
    "pharmacologicClass": "Inhibe irreversiblemente H+/K+-ATPasa gástrica",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas de liberación retardada dual 30 y 60 mg; gránulos según producto.",
    "presentations": "Cápsulas de liberación retardada dual 30 y 60 mg; gránulos según producto.",
    "mechanism": "Inhibe irreversiblemente H+/K+-ATPasa gástrica. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Liberación dual prolonga supresión ácida; metabolismo CYP2C19/3A4.",
    "indications": "Cicatrización/mantenimiento de esofagitis erosiva y ERGE sintomática no erosiva en adultos; algunas indicaciones ≥12 años.",
    "dose": "Esofagitis erosiva: 60 mg VO 1 vez/día hasta 8 semanas; mantenimiento o ERGE no erosiva: 30 mg 1 vez/día, duración según indicación.",
    "pediatricDose": "≥12 años: esquemas similares solo en indicaciones autorizadas; <12 no establecido. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste.",
    "hepaticDose": "Hepatopatía grave: máximo 30 mg/día; moderada puede requerir límite según indicación.",
    "commonAdverseEffects": "Diarrea, dolor abdominal, náusea y cefalea.",
    "dangerousAdverseEffects": "Nefritis intersticial, C. difficile, hipomagnesemia, fractura y reacciones cutáneas graves.",
    "adverseEffects": "Diarrea, dolor abdominal, náusea y cefalea. Graves: Nefritis intersticial, C. difficile, hipomagnesemia, fractura y reacciones cutáneas graves.",
    "contraindications": "Hipersensibilidad a benzimidazoles; uso con rilpivirina.",
    "interactions": "Rilpivirina, metotrexato en dosis altas, digoxina, tacrolimus y fármacos dependientes de pH.",
    "monitoring": "Respuesta, Mg/B12 si prolongado, riñón, infección entérica y hueso según riesgo.",
    "administration": "Con o sin comida; tragar cápsula o abrir y administrar gránulos según instrucciones, sin masticar.",
    "preparation": "No triturar gránulos; métodos por sonda dependen del producto.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; usar cuando esté indicado.",
    "lactation": "Datos insuficientes; considerar beneficio/riesgo.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Nefritis intersticial, C. difficile, hipomagnesemia, fractura y reacciones cutáneas graves. Indicação/duração bloqueadas sem idade, diagnóstico/endoscopia, fígado e revisão de interações dependentes de pH.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexlansoprazole",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a695020.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexlansoprazole"
  }
};})();
/* GOLD33_SELECTIVE:dexlansoprazol:END */
/* GOLD33_SELECTIVE:docusato_de_sodio:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["docusato_de_sodio"])throw new Error("GOLD33_MISSING_CANONICAL:docusato_de_sodio");db["docusato_de_sodio"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "026",
    "requiredFieldCount": 33,
    "approvedSha256": "a8bddf2f357b2d4d997020e9dbcb12cd6974420af31bc6f209c9ad8bec524d1a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Docusato de sódio",
    "class": "Amolecedor fecal",
    "pharmacologicClass": "Surfactante que facilita entrada de água e lipídios nas fezes",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas 50/100/250 mg, líquido e enema conforme produto.",
    "presentations": "Cápsulas 50/100/250 mg, líquido e enema conforme produto.",
    "mechanism": "Surfactante que facilita entrada de água e lipídios nas fezes. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção sistêmica mínima; ação local intestinal.",
    "indications": "Alívio/prevenção de constipação quando se deseja evitar esforço; benefício clínico pode ser modesto.",
    "dose": "Adultos: 50–360 mg/dia VO em uma ou mais doses, conforme produto; efeito em 12–72 h.",
    "pediatricDose": "Doses por idade/produto; evitar automação sem concentração e idade. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste específico.",
    "hepaticDose": "Sem ajuste específico.",
    "commonAdverseEffects": "Cólicas, diarreia, náusea e irritação de garganta com líquido.",
    "dangerousAdverseEffects": "Desequilíbrio eletrolítico por abuso e lesão retal com enema.",
    "adverseEffects": "Cólicas, diarreia, náusea e irritação de garganta com líquido. Graves: Desequilíbrio eletrolítico por abuso e lesão retal com enema.",
    "contraindications": "Dor abdominal, náusea/vômito ou suspeita de obstrução; hipersensibilidade.",
    "interactions": "Óleo mineral aumenta absorção e toxicidade; evitar combinação.",
    "monitoring": "Frequência/consistência, dor/distensão, hidratação e sinais de obstrução.",
    "administration": "VO com copo de água; solução pode ser misturada em líquido para reduzir sabor. Não usar por >7 dias sem avaliação.",
    "preparation": "Medir líquido corretamente; não esmagar cápsula mole.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Baixa absorção; uso breve geralmente de baixo risco.",
    "lactation": "Baixa absorção; geralmente compatível.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Desequilíbrio eletrolítico por abuso e lesão retal com enema. Uso bloqueado sem idade, produto/concentração, duração e exclusão de dor aguda, vômitos ou obstrução.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=docusate+sodium",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=docusate+sodium"
  },
  "es": {
    "name": "Docusato sódico",
    "class": "Ablandador fecal",
    "pharmacologicClass": "Tensioactivo que facilita entrada de agua y lípidos en heces",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas 50/100/250 mg, líquido y enema según producto.",
    "presentations": "Cápsulas 50/100/250 mg, líquido y enema según producto.",
    "mechanism": "Tensioactivo que facilita entrada de agua y lípidos en heces. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción sistémica mínima; acción local intestinal.",
    "indications": "Alivio/prevención de estreñimiento cuando se desea evitar esfuerzo; beneficio clínico puede ser modesto.",
    "dose": "Adultos: 50–360 mg/día VO en una o más dosis, según producto; efecto en 12–72 h.",
    "pediatricDose": "Dosis por edad/producto; evitar automatización sin concentración y edad. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste específico.",
    "hepaticDose": "Sin ajuste específico.",
    "commonAdverseEffects": "Cólicos, diarrea, náusea e irritación de garganta con líquido.",
    "dangerousAdverseEffects": "Desequilibrio electrolítico por abuso y lesión rectal con enema.",
    "adverseEffects": "Cólicos, diarrea, náusea e irritación de garganta con líquido. Graves: Desequilibrio electrolítico por abuso y lesión rectal con enema.",
    "contraindications": "Dolor abdominal, náusea/vómito o sospecha de obstrucción; hipersensibilidad.",
    "interactions": "Aceite mineral aumenta absorción y toxicidad; evitar combinación.",
    "monitoring": "Frecuencia/consistencia, dolor/distensión, hidratación y signos de obstrucción.",
    "administration": "VO con vaso de agua; solución puede mezclarse en líquido para reducir sabor. No usar >7 días sin evaluación.",
    "preparation": "Medir líquido correctamente; no triturar cápsula blanda.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Baja absorción; uso breve generalmente de bajo riesgo.",
    "lactation": "Baja absorción; generalmente compatible.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Desequilibrio electrolítico por abuso y lesión rectal con enema. Uso bloqueado sem idade, produto/concentração, duração e exclusão de dor aguda, vômitos ou obstrução.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=docusate+sodium",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=docusate+sodium"
  }
};})();
/* GOLD33_SELECTIVE:docusato_de_sodio:END */
/* GOLD33_SELECTIVE:domperidona:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["domperidona"])throw new Error("GOLD33_MISSING_CANONICAL:domperidona");db["domperidona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "026",
    "requiredFieldCount": 33,
    "approvedSha256": "a8bddf2f357b2d4d997020e9dbcb12cd6974420af31bc6f209c9ad8bec524d1a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Domperidona",
    "class": "Antagonista dopaminérgico periférico/procinético",
    "pharmacologicClass": "Antagoniza D2 fora da barreira hematoencefálica, aumentando motilidade e prolactina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 10 mg e suspensão conforme país.",
    "presentations": "Comprimidos 10 mg e suspensão conforme país.",
    "mechanism": "Antagoniza D2 fora da barreira hematoencefálica, aumentando motilidade e prolactina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Baixa penetração SNC, metabolismo CYP3A4 e eliminação fecal predominante.",
    "indications": "Alívio de náuseas e vômitos em países autorizadores; não aprovada pela FDA e indicações variam.",
    "dose": "Adultos e adolescentes ≥12 anos e ≥35 kg em recomendações EMA: 10 mg VO até 3x/dia, máximo 30 mg/dia, pelo menor tempo, geralmente ≤7 dias.",
    "pediatricDose": "Não recomendar automaticamente; restrições por idade/peso e país. AUTOMATABLE=NO.",
    "renalDose": "Reduzir frequência em insuficiência renal grave em uso repetido.",
    "hepaticDose": "Contraindicada em hepatopatia moderada/grave.",
    "commonAdverseEffects": "Boca seca, cefaleia, cólicas e hiperprolactinemia.",
    "dangerousAdverseEffects": "Arritmia ventricular, torsades, morte súbita e anafilaxia.",
    "adverseEffects": "Boca seca, cefaleia, cólicas e hiperprolactinemia. Graves: Arritmia ventricular, torsades, morte súbita e anafilaxia.",
    "contraindications": "QT prolongado, distúrbio eletrolítico importante, cardiopatia, bradicardia, hepatopatia moderada/grave, prolactinoma, obstrução/hemorragia/perfuração GI.",
    "interactions": "Inibidores fortes CYP3A4 e prolongadores de QT são contraindicados; revisar macrolídeos, azóis, antiarrítmicos e antipsicóticos.",
    "monitoring": "ECG/QTc se risco, K/Mg, sintomas cardíacos, resposta e duração.",
    "administration": "Tomar 15–30 min antes das refeições; menor dose e duração.",
    "preparation": "Medir suspensão com dispositivo e confirmar concentração.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados limitados; usar apenas se necessário.",
    "lactation": "Aumenta prolactina e passa ao leite em pequenas quantidades; risco cardíaco exige avaliação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Arritmia ventricular, torsades, morte súbita e anafilaxia. Uso bloqueado sem país/indicação, idade/peso, ECG/QTc, eletrólitos, coração, fígado/rim e revisão completa de CYP3A4/QT.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.gov.uk/drug-safety-update/domperidone-risks-of-cardiac-side-effects"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines"
  },
  "es": {
    "name": "Domperidona",
    "class": "Antagonista dopaminérgico periférico/procinético",
    "pharmacologicClass": "Antagoniza D2 fuera de barrera hematoencefálica, aumentando motilidad y prolactina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 10 mg y suspensión según país.",
    "presentations": "Comprimidos 10 mg y suspensión según país.",
    "mechanism": "Antagoniza D2 fuera de barrera hematoencefálica, aumentando motilidad y prolactina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Baja penetración SNC, metabolismo CYP3A4 y eliminación fecal predominante.",
    "indications": "Alivio de náuseas y vómitos en países autorizadores; no aprobada por FDA e indicaciones varían.",
    "dose": "Adultos y adolescentes ≥12 años y ≥35 kg según EMA: 10 mg VO hasta 3 veces/día, máximo 30 mg/día, menor tiempo, generalmente ≤7 días.",
    "pediatricDose": "No recomendar automáticamente; restricciones por edad/peso y país. AUTOMATABLE=NO.",
    "renalDose": "Reducir frecuencia en insuficiencia renal grave con uso repetido.",
    "hepaticDose": "Contraindicada en hepatopatía moderada/grave.",
    "commonAdverseEffects": "Boca seca, cefalea, cólicos e hiperprolactinemia.",
    "dangerousAdverseEffects": "Arritmia ventricular, torsades, muerte súbita y anafilaxia.",
    "adverseEffects": "Boca seca, cefalea, cólicos e hiperprolactinemia. Graves: Arritmia ventricular, torsades, muerte súbita y anafilaxia.",
    "contraindications": "QT prolongado, trastorno electrolítico importante, cardiopatía, bradicardia, hepatopatía moderada/grave, prolactinoma, obstrucción/hemorragia/perforación GI.",
    "interactions": "Inhibidores fuertes CYP3A4 y prolongadores QT contraindicados; revisar macrólidos, azoles, antiarrítmicos y antipsicóticos.",
    "monitoring": "ECG/QTc si riesgo, K/Mg, síntomas cardíacos, respuesta y duración.",
    "administration": "Tomar 15–30 min antes de comidas; mínima dosis y duración.",
    "preparation": "Medir suspensión con dispositivo y confirmar concentración.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos limitados; usar solo si es necesario.",
    "lactation": "Aumenta prolactina y pasa a leche en pequeñas cantidades; riesgo cardíaco exige evaluación.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Arritmia ventricular, torsades, muerte súbita y anafilaxia. Uso bloqueado sem país/indicação, idade/peso, ECG/QTc, eletrólitos, coração, fígado/rim e revisão completa de CYP3A4/QT.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.gov.uk/drug-safety-update/domperidone-risks-of-cardiac-side-effects"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/referrals/domperidone-containing-medicines"
  }
};})();
/* GOLD33_SELECTIVE:domperidona:END */
/* GOLD33_SELECTIVE:esomeprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["esomeprazol"])throw new Error("GOLD33_MISSING_CANONICAL:esomeprazol");db["esomeprazol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "031",
    "requiredFieldCount": 33,
    "approvedSha256": "0cb3fbe4096704f1b123448b9ae7327900c0b44121d5b0ed2601ccb63300d66c",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Esomeprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibe irreversivelmente H+/K+-ATPase gástrica",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas/comprimidos 20/40 mg, grânulos e IV.",
    "presentations": "Cápsulas/comprimidos 20/40 mg, grânulos e IV.",
    "mechanism": "Inibe irreversivelmente H+/K+-ATPase gástrica. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "CYP2C19/3A4; meia-vida ~1–1,5 h.",
    "indications": "DRGE/erosões, redução de risco por AINE, H. pylori em combinação e hipersecreção conforme produto.",
    "dose": "Usual 20–40 mg VO 1x/dia por 4–8 semanas conforme indicação; Zollinger-Ellison exige titulação.",
    "pediatricDose": "≥1 ano: 10–40 mg/dia conforme idade/peso/indicação; lactentes têm esquema específico. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste.",
    "hepaticDose": "Child-Pugh C: máximo 20 mg/dia em várias indicações.",
    "commonAdverseEffects": "Cefaleia, diarreia, náusea e dor abdominal.",
    "dangerousAdverseEffects": "Nefrite intersticial, hipomagnesemia, C. difficile, SCLE e reações graves.",
    "adverseEffects": "Cefaleia, diarreia, náusea e dor abdominal. Graves: Nefrite intersticial, hipomagnesemia, C. difficile, SCLE e reações graves.",
    "contraindications": "Hipersensibilidade a benzimidazóis; rilpivirina concomitante.",
    "interactions": "CYP2C19; clopidogrel, metotrexato alto, digoxina, varfarina e fármacos dependentes de pH.",
    "monitoring": "Resposta, Mg/B12/ferro no longo prazo, rim, C. difficile, fraturas e pólipos fúndicos.",
    "administration": "Antes da refeição; não triturar grânulos gastrorresistentes. IV conforme rótulo.",
    "preparation": "Confirmar formulação, concentração e produto; seguir rótulo oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; seguir protocolo específico.",
    "pregnancy": "Avaliar benefício-risco, idade gestacional e rótulo específico.",
    "lactation": "Avaliar exposição do lactente e alternativa terapêutica.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Nefrite intersticial, hipomagnesemia, C. difficile, SCLE e reações graves. Dose/duração bloqueadas sem indicação, idade/peso, H. pylori/esquema, fígado, clopidogrel/rilpivirina e riscos de longo prazo.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=esomeprazole",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/021153s058lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=esomeprazole"
  },
  "es": {
    "name": "Esomeprazol",
    "class": "Inhibidor de bomba de protones",
    "pharmacologicClass": "Inhibe irreversiblemente H+/K+-ATPasa gástrica",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas/comprimidos 20/40 mg, gránulos e IV.",
    "presentations": "Cápsulas/comprimidos 20/40 mg, gránulos e IV.",
    "mechanism": "Inhibe irreversiblemente H+/K+-ATPasa gástrica. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "CYP2C19/3A4; semivida ~1–1,5 h.",
    "indications": "ERGE/erosiones, reducción de riesgo por AINE, H. pylori combinado e hipersecreción según producto.",
    "dose": "Habitual 20–40 mg VO 1 vez/día por 4–8 semanas según indicación; Zollinger-Ellison exige titulación.",
    "pediatricDose": "≥1 año: 10–40 mg/día según edad/peso/indicación; lactantes tienen pauta específica. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste.",
    "hepaticDose": "Child-Pugh C: máximo 20 mg/día en varias indicaciones.",
    "commonAdverseEffects": "Cefalea, diarrea, náusea y dolor abdominal.",
    "dangerousAdverseEffects": "Nefritis intersticial, hipomagnesemia, C. difficile, lupus cutáneo y reacciones graves.",
    "adverseEffects": "Cefalea, diarrea, náusea y dolor abdominal. Graves: Nefritis intersticial, hipomagnesemia, C. difficile, lupus cutáneo y reacciones graves.",
    "contraindications": "Hipersensibilidad a benzimidazoles; rilpivirina concomitante.",
    "interactions": "CYP2C19; clopidogrel, metotrexato alto, digoxina, warfarina y fármacos dependientes de pH.",
    "monitoring": "Respuesta, Mg/B12/hierro a largo plazo, riñón, C. difficile, fracturas y pólipos fúndicos.",
    "administration": "Antes de comida; no triturar gránulos gastrorresistentes. IV según ficha.",
    "preparation": "Confirmar formulación, concentración y producto; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; seguir protocolo específico.",
    "pregnancy": "Evaluar beneficio-riesgo, edad gestacional y ficha específica.",
    "lactation": "Evaluar exposición del lactante y alternativa terapéutica.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Nefritis intersticial, hipomagnesemia, C. difficile, lupus cutáneo y reacciones graves. Dose/duração bloqueadas sem indicação, idade/peso, H. pylori/esquema, fígado, clopidogrel/rilpivirina e riscos de longo prazo.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=esomeprazole",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/021153s058lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=esomeprazole"
  }
};})();
/* GOLD33_SELECTIVE:esomeprazol:END */
/* GOLD33_SELECTIVE:famotidina:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["famotidina"])throw new Error("GOLD33_MISSING_CANONICAL:famotidina");db["famotidina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "033",
    "requiredFieldCount": 33,
    "approvedSha256": "2acfdef995a909e916ea91d994b7b20e7dcbe8969b789b3749b57c0f035b63e9",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Famotidina",
    "class": "Supressor de ácido gástrico",
    "pharmacologicClass": "Antagonista H2",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 10/20/40 mg, suspensão 40 mg/5 mL e injeção 10 mg/mL.",
    "presentations": "Comprimidos 10/20/40 mg, suspensão 40 mg/5 mL e injeção 10 mg/mL.",
    "mechanism": "Antagonista H2. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Eliminação renal predominante; meia-vida aumenta na insuficiência renal.",
    "indications": "Úlcera, DRGE, esofagite erosiva e condições hipersecretoras; formulações têm indicações próprias.",
    "dose": "Regime depende da indicação: frequentemente 20 mg 2x/dia ou 40 mg à noite; ajustar na disfunção renal.",
    "pediatricDose": "Doses por peso e indicação; neonatos/lactentes exigem intervalos próprios. AUTOMATABLE=NO.",
    "renalDose": "Reduzir dose ou aumentar intervalo em CrCl <60 mL/min conforme indicação e rótulo.",
    "hepaticDose": "Sem ajuste usual.",
    "commonAdverseEffects": "Cefaleia, tontura, constipação e diarreia.",
    "dangerousAdverseEffects": "Confusão/convulsão em acúmulo, QT prolongado, anafilaxia e citopenias.",
    "adverseEffects": "Cefaleia, tontura, constipação e diarreia. Graves: Confusão/convulsão em acúmulo, QT prolongado, anafilaxia e citopenias.",
    "contraindications": "Hipersensibilidade a antagonistas H2.",
    "interactions": "Pode reduzir absorção de fármacos dependentes de pH; atenção a tizanidina e cefpodoxima.",
    "monitoring": "Sintomas/alarme GI, função renal, estado mental e QT em pacientes de risco.",
    "administration": "VO com ou sem alimento; IV lenta ou infusão conforme produto.",
    "preparation": "Confirmar produto, força, concentração e apresentação; seguir rótulo oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; seguir protocolo específico.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica.",
    "lactation": "Avaliar exposição do lactente e alternativas.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Confusão/convulsão em acúmulo, QT prolongado, anafilaxia e citopenias. Dose e via bloqueadas sem indicação, idade/peso, CrCl, formulação e sinais de alarme GI.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=famotidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019462s040lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=famotidine"
  },
  "es": {
    "name": "Famotidina",
    "class": "Supresor de ácido gástrico",
    "pharmacologicClass": "Antagonista H2",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 10/20/40 mg, suspensión 40 mg/5 mL e inyección 10 mg/mL.",
    "presentations": "Comprimidos 10/20/40 mg, suspensión 40 mg/5 mL e inyección 10 mg/mL.",
    "mechanism": "Antagonista H2. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Eliminación renal predominante; semivida aumenta en insuficiencia renal.",
    "indications": "Úlcera, ERGE, esofagitis erosiva y estados hipersecretores; las formulaciones tienen indicaciones propias.",
    "dose": "La pauta depende de indicación: frecuentemente 20 mg 2 veces/día o 40 mg por la noche; ajustar en insuficiencia renal.",
    "pediatricDose": "Dosis por peso e indicación; neonatos/lactantes requieren intervalos propios. AUTOMATABLE=NO.",
    "renalDose": "Reducir dosis o aumentar intervalo con CrCl <60 mL/min según indicación y ficha.",
    "hepaticDose": "Sin ajuste habitual.",
    "commonAdverseEffects": "Cefalea, mareo, estreñimiento y diarrea.",
    "dangerousAdverseEffects": "Confusión/convulsión por acumulación, QT prolongado, anafilaxia y citopenias.",
    "adverseEffects": "Cefalea, mareo, estreñimiento y diarrea. Graves: Confusión/convulsión por acumulación, QT prolongado, anafilaxia y citopenias.",
    "contraindications": "Hipersensibilidad a antagonistas H2.",
    "interactions": "Puede reducir absorción de fármacos dependientes del pH; atención a tizanidina y cefpodoxima.",
    "monitoring": "Síntomas/signos de alarma GI, función renal, estado mental y QT en pacientes de riesgo.",
    "administration": "VO con o sin alimentos; IV lenta o infusión según producto.",
    "preparation": "Confirmar producto, dosis, concentración y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; seguir protocolo específico.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica.",
    "lactation": "Evaluar exposición del lactante y alternativas.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Confusión/convulsión por acumulación, QT prolongado, anafilaxia y citopenias. Dose e via bloqueadas sem indicação, idade/peso, CrCl, formulação e sinais de alarme GI.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=famotidine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019462s040lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=famotidine"
  }
};})();
/* GOLD33_SELECTIVE:famotidina:END */
/* GOLD33_SELECTIVE:filgotinibe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["filgotinibe"])throw new Error("GOLD33_MISSING_CANONICAL:filgotinibe");db["filgotinibe"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "034",
    "requiredFieldCount": 33,
    "approvedSha256": "b90c78c0a4b09d50bd88ab5f342b5a0439a3a5e3a3e16172327eb01d98d1297b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Filgotinibe",
    "class": "Inibidor de JAK",
    "pharmacologicClass": "Inibidor preferencial de JAK1",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 100 e 200 mg.",
    "presentations": "Comprimidos 100 e 200 mg.",
    "mechanism": "Inibidor preferencial de JAK1. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Pró-fármaco/metabólito ativo; eliminação renal predominante.",
    "indications": "Artrite reumatoide e colite ulcerativa em adultos conforme autorização regional; não aprovado nos EUA.",
    "dose": "200 mg VO 1x/dia; 100 mg em grupos selecionados conforme indicação, idade, rim e risco.",
    "pediatricDose": "Não estabelecido <18 anos. AUTOMATABLE=NO.",
    "renalDose": "eGFR 15–<60: 100 mg/dia; não recomendado em eGFR <15.",
    "hepaticDose": "Não recomendado em hepatopatia grave.",
    "commonAdverseEffects": "Náusea, infecção respiratória, ITU, tontura e alterações laboratoriais.",
    "dangerousAdverseEffects": "Infecção grave, herpes-zóster, VTE, MACE, malignidade e citopenias.",
    "adverseEffects": "Náusea, infecção respiratória, ITU, tontura e alterações laboratoriais. Graves: Infecção grave, herpes-zóster, VTE, MACE, malignidade e citopenias.",
    "contraindications": "Hipersensibilidade; não iniciar em infecção ativa grave; contraindicações regionais devem ser verificadas.",
    "interactions": "Evitar outros JAK, biológicos ou imunossupressores potentes; inibidores de OATP1B1/1B3 podem elevar exposição.",
    "monitoring": "TB/hepatites, infecções, hemograma, fígado, lipídios, VTE/MACE/malignidade e vacinas.",
    "administration": "VO com ou sem alimento; engolir inteiro.",
    "preparation": "Não triturar/dividir.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Contraindicado na gestação; contracepção durante e por pelo menos 1 semana após.",
    "lactation": "Não usar durante amamentação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Infecção grave, herpes-zóster, VTE, MACE, malignidade e citopenias. Seleção/início bloqueados sem país/indicação, idade, eGFR, TB/hepatites, hemograma, fígado, risco VTE/MACE/câncer, gestação e imunossupressores.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/jyseleca",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/product-information/jyseleca-epar-product-information_en.pdf"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/jyseleca"
  },
  "es": {
    "name": "Filgotinib",
    "class": "Inhibidor de JAK",
    "pharmacologicClass": "Inhibidor preferencial de JAK1",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 100 y 200 mg.",
    "presentations": "Comprimidos 100 y 200 mg.",
    "mechanism": "Inhibidor preferencial de JAK1. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Profármaco/metabolito activo; eliminación renal predominante.",
    "indications": "Artritis reumatoide y colitis ulcerosa en adultos según autorización regional; no aprobado en EE. UU.",
    "dose": "200 mg VO 1 vez/día; 100 mg en grupos seleccionados según indicación, edad, riñón y riesgo.",
    "pediatricDose": "No establecido <18 años. AUTOMATABLE=NO.",
    "renalDose": "eGFR 15–<60: 100 mg/día; no recomendado con eGFR <15.",
    "hepaticDose": "No recomendado en hepatopatía grave.",
    "commonAdverseEffects": "Náusea, infección respiratoria, ITU, mareo y cambios de laboratorio.",
    "dangerousAdverseEffects": "Infección grave, herpes zóster, VTE, MACE, malignidad y citopenias.",
    "adverseEffects": "Náusea, infección respiratoria, ITU, mareo y cambios de laboratorio. Graves: Infección grave, herpes zóster, VTE, MACE, malignidad y citopenias.",
    "contraindications": "Hipersensibilidad; no iniciar con infección activa grave; verificar contraindicaciones regionales.",
    "interactions": "Evitar otros JAK, biológicos o inmunosupresores potentes; inhibidores OATP1B1/1B3 pueden aumentar exposición.",
    "monitoring": "TB/hepatitis, infecciones, hemograma, hígado, lípidos, VTE/MACE/malignidad y vacunas.",
    "administration": "VO con o sin alimentos; tragar entero.",
    "preparation": "No triturar/dividir.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Contraindicado en embarazo; anticoncepción durante y al menos 1 semana después.",
    "lactation": "No usar durante lactancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Infección grave, herpes zóster, VTE, MACE, malignidad y citopenias. Seleção/início bloqueados sem país/indicação, idade, eGFR, TB/hepatites, hemograma, fígado, risco VTE/MACE/câncer, gestação e imunossupressores.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/medicines/human/EPAR/jyseleca",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/product-information/jyseleca-epar-product-information_en.pdf"
    ],
    "ref": "https://www.ema.europa.eu/en/medicines/human/EPAR/jyseleca"
  }
};})();
/* GOLD33_SELECTIVE:filgotinibe:END */
/* GOLD33_SELECTIVE:golimumabe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["golimumabe"])throw new Error("GOLD33_MISSING_CANONICAL:golimumabe");db["golimumabe"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "039",
    "requiredFieldCount": 33,
    "approvedSha256": "72a167888bdcc091cdbc40db2f06d309c0b3210c89d1ba428d1e7253777d5c65",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Golimumabe",
    "class": "Anticorpo monoclonal anti-TNF",
    "pharmacologicClass": "Neutraliza TNF-alfa",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Caneta/seringa SC 50 ou 100 mg; frasco IV 50 mg/4 mL.",
    "presentations": "Caneta/seringa SC 50 ou 100 mg; frasco IV 50 mg/4 mL.",
    "mechanism": "Neutraliza TNF-alfa. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Meia-vida aproximada 2 semanas; depuração proteolítica.",
    "indications": "Artrite reumatoide, artrite psoriásica, espondilite anquilosante e colite ulcerativa; indicações variam por formulação.",
    "dose": "SC: frequentemente 50 mg mensal; colite ulcerativa usa indução e manutenção específicas. IV: 2 mg/kg nas semanas 0 e 4, depois a cada 8 semanas para indicações aprovadas.",
    "pediatricDose": "IV pode ter indicações pediátricas por peso em algumas jurisdições; SC depende da indicação. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste estabelecido.",
    "hepaticDose": "Sem ajuste estabelecido; cautela em hepatopatia e reativação viral.",
    "commonAdverseEffects": "Infecção respiratória e reação no local/infusão.",
    "dangerousAdverseEffects": "Infecção grave/TB, reativação HBV, malignidade, desmielinização e insuficiência cardíaca.",
    "adverseEffects": "Infecção respiratória e reação no local/infusão. Graves: Infecção grave/TB, reativação HBV, malignidade, desmielinização e insuficiência cardíaca.",
    "contraindications": "Infecção ativa grave; hipersensibilidade.",
    "interactions": "Outros biológicos, vacinas vivas e imunossupressores aumentam risco infeccioso.",
    "monitoring": "TB/HBV, infecções, hemograma, fígado, insuficiência cardíaca, neurologia e malignidade.",
    "administration": "SC ou IV conforme produto; rastrear TB/HBV antes.",
    "preparation": "IV requer diluição asséptica conforme rótulo; SC pronta.",
    "infusionProtocol": "IV em 30 min conforme rótulo.",
    "pregnancy": "Dados limitados; avaliar risco-benefício.",
    "lactation": "Transferência ao leite provavelmente baixa, mas dados limitados.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Infecção grave/TB, reativação HBV, malignidade, desmielinização e insuficiência cardíaca. Regime bloqueado sem indicação, produto SC/IV, peso, TB/HBV, infecção, vacinas, IC e imunossupressores.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=golimumab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=golimumab"
  },
  "es": {
    "name": "Golimumab",
    "class": "Anticuerpo monoclonal anti-TNF",
    "pharmacologicClass": "Neutraliza TNF-alfa",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Pluma/jeringa SC 50 o 100 mg; vial IV 50 mg/4 mL.",
    "presentations": "Pluma/jeringa SC 50 o 100 mg; vial IV 50 mg/4 mL.",
    "mechanism": "Neutraliza TNF-alfa. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Semivida aproximada 2 semanas; depuración proteolítica.",
    "indications": "Artritis reumatoide, psoriásica, espondilitis anquilosante y colitis ulcerosa; indicaciones varían por formulación.",
    "dose": "SC: frecuentemente 50 mg mensual; colitis ulcerosa usa inducción y mantenimiento específicos. IV: 2 mg/kg semanas 0 y 4, luego cada 8 semanas para indicaciones autorizadas.",
    "pediatricDose": "IV puede tener indicaciones pediátricas por peso en algunas jurisdicciones; SC depende de indicación. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste establecido.",
    "hepaticDose": "Sin ajuste establecido; precaución en hepatopatía y reactivación viral.",
    "commonAdverseEffects": "Infección respiratoria y reacción local/infusión.",
    "dangerousAdverseEffects": "Infección grave/TB, reactivación VHB, malignidad, desmielinización e insuficiencia cardíaca.",
    "adverseEffects": "Infección respiratoria y reacción local/infusión. Graves: Infección grave/TB, reactivación VHB, malignidad, desmielinización e insuficiencia cardíaca.",
    "contraindications": "Infección activa grave; hipersensibilidad.",
    "interactions": "Otros biológicos, vacunas vivas e inmunosupresores aumentan riesgo infeccioso.",
    "monitoring": "TB/VHB, infecciones, hemograma, hígado, insuficiencia cardíaca, neurología y malignidad.",
    "administration": "SC o IV según producto; evaluar TB/VHB antes.",
    "preparation": "IV requiere dilución aséptica según ficha; SC lista.",
    "infusionProtocol": "IV en 30 min según ficha.",
    "pregnancy": "Datos limitados; evaluar riesgo-beneficio.",
    "lactation": "Transferencia a leche probablemente baja, datos limitados.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Infección grave/TB, reactivación VHB, malignidad, desmielinización e insuficiencia cardíaca. Regime bloqueado sem indicação, produto SC/IV, peso, TB/HBV, infecção, vacinas, IC e imunossupressores.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=golimumab"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=golimumab"
  }
};})();
/* GOLD33_SELECTIVE:golimumabe:END */
/* GOLD33_SELECTIVE:infliximabe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB;if(!db||!db["infliximabe"])throw new Error("GOLD33_MISSING_CANONICAL:infliximabe");db["infliximabe"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Infliximabe",
    "class": "Anticorpo monoclonal anti-TNF-alfa",
    "pharmacologicClass": "Anticorpo monoclonal anti-TNF-alfa",
    "commercialNames": "Renflexis/Remicade",
    "presentation": "Frasco-ampola com po liofilizado 100 mg para reconstituicao e infusao intravenosa; biossimilares possuem rotulos proprios.",
    "presentations": "Frasco-ampola com po liofilizado 100 mg para reconstituicao e infusao intravenosa; biossimilares possuem rotulos proprios.",
    "mechanism": "Mecanismo descrito na informacao regulatoria do produto; ver farmacodinamica e fonte primaria.",
    "pharmacodynamics": "Efeito farmacologico coerente com o alvo descrito; resposta e risco dependem de dose, indicacao e populacao.",
    "pharmacokinetics": "Parametros dependem da formulacao e populacao; consultar a secao farmacocinetica da fonte primaria antes de modelagem.",
    "indications": "Artrite reumatoide, doenca de Crohn adulta e pediatrica, colite ulcerativa adulta e pediatrica, espondilite anquilosante, artrite psoriasica e psoriase em placas, conforme produto.",
    "dose": "Regimes IV por indicacao: frequentemente 3 ou 5 mg/kg nas semanas 0, 2 e 6, seguidos de manutencao a cada 6 ou 8 semanas. Artrite reumatoide requer metotrexato. Confirmar indicacao e produto antes de calcular.",
    "pediatricDose": "Crohn e colite ulcerativa: 5 mg/kg IV nas semanas 0, 2 e 6 e depois a cada 8 semanas em pacientes pediatricos elegiveis conforme rotulo. Outras indicacoes pediatricas nao devem ser inferidas.",
    "renalDose": "Nao ha recomendacao numerica especifica de ajuste renal no rotulo; avaliar individualmente.",
    "hepaticDose": "Nao ha recomendacao numerica especifica; risco de hepatotoxicidade e reativacao de HBV exige vigilancia.",
    "commonAdverseEffects": "Eventos comuns conforme estudos e rotulo; revisar por indicacao e produto.",
    "dangerousAdverseEffects": "Infeccoes graves, tuberculose, reativacao de HBV, insuficiencia cardiaca, neoplasias e reacoes infusionais.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Contraindicacoes formais conforme rotulo e formulacao; nao confundir precaucao com proibicao absoluta.",
    "interactions": "Revisar interacoes farmacodinamicas e farmacocineticas no rotulo; evitar inferencias por classe.",
    "monitoring": "Monitorizacao especifica do rotulo, eficacia, eventos adversos e exames relacionados ao risco do medicamento.",
    "administration": "Infusao IV por pelo menos 2 horas com filtro em linha esteril, nao pirogenico e de baixa ligacao proteica; observar reacoes.",
    "preparation": "Reconstituir cada frasco de 100 mg com 10 mL de agua esteril para injecao e diluir em cloreto de sodio 0,9% conforme rotulo; nao agitar.",
    "infusionProtocol": "Administrar exclusivamente IV conforme bula; nao em bolus. Disponibilizar manejo de hipersensibilidade e monitorar durante e apos.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Explicar objetivo, modo de uso, sinais de alarme, monitorizacao e quando buscar atendimento.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Qualquer calculadora deve vincular indicacao, peso, semanas e produto; escalonamentos fora do rotulo ficam bloqueados.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Infliximabe - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789"
  },
  "es": {
    "name": "Infliximabe",
    "class": "Anticorpo monoclonal anti-TNF-alfa",
    "pharmacologicClass": "Anticorpo monoclonal anti-TNF-alfa",
    "commercialNames": "Renflexis/Remicade",
    "presentation": "Frasco-ampola com po liofilizado 100 mg para reconstituicao e infusao intravenosa; biossimilares possuem rotulos proprios.",
    "presentations": "Frasco-ampola com po liofilizado 100 mg para reconstituicao e infusao intravenosa; biossimilares possuem rotulos proprios.",
    "mechanism": "Mecanismo descrito na informacao regulatoria do producto; ver farmacodinamica e fonte primaria.",
    "pharmacodynamics": "Efeito farmacologico coerente com o alvo descrito; resposta e risco dependem de dosis, indicacao e populacao.",
    "pharmacokinetics": "Parametros dependem da formulacion e populacao; consultar a secao farmacocinetica da fonte primaria antes de modelagem.",
    "indications": "Artrite reumatoide, doenca de Crohn adulta e pediatrica, colite ulcerativa adulta e pediatrica, espondilite anquilosante, artrite psoriasica e psoriase em placas, conforme producto.",
    "dose": "Regimes IV por indicacao: frequentemente 3 ou 5 mg/kg nas semanas 0, 2 e 6, seguidos de manutencao a cada 6 ou 8 semanas. Artrite reumatoide requer metotrexato. Confirmar indicacao e producto antes de calcular.",
    "pediatricDose": "Crohn e colite ulcerativa: 5 mg/kg IV nas semanas 0, 2 e 6 e depois a cada 8 semanas em pacientes pediatricos elegiveis conforme rotulo. Outras indicacoes pediatricas no devem ser inferidas.",
    "renalDose": "No ha recomendacao numerica especifica de ajuste renal no rotulo; avaliar individualmente.",
    "hepaticDose": "No ha recomendacao numerica especifica; risco de hepatotoxicidade e reativacao de HBV exige vigilancia.",
    "commonAdverseEffects": "Eventos comuns conforme estudos e rotulo; revisar por indicacao e producto.",
    "dangerousAdverseEffects": "Infeccoes graves, tuberculose, reativacao de HBV, insuficiencia cardiaca, neoplasias e reacoes infusionais.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Contraindicacoes formais conforme rotulo e formulacion; no confundir precaucao com proibicao absoluta.",
    "interactions": "Revisar interacoes farmacodinamicas e farmacocineticas no rotulo; evitar inferencias por classe.",
    "monitoring": "Monitorizacao especifica do rotulo, eficacia, eventos adversos e exames relacionados ao risco do medicamento.",
    "administration": "Infusao IV por pelo menos 2 horas com filtro em linha esteril, no pirogenico e de baixa ligacao proteica; observar reacoes.",
    "preparation": "Reconstituir cada frasco de 100 mg com 10 mL de agua esteril para injecao e diluir em cloreto de sodio 0,9% conforme rotulo; no agitar.",
    "infusionProtocol": "Administrar exclusivamente IV conforme bula; no em bolus. Disponibilizar manejo de hipersensibilidade e monitorar durante e apos.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Explicar objetivo, modo de uso, sinais de alarme, monitorizacao e quando buscar atendimento.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Qualquer calculadora deve vincular indicacao, peso, semanas e producto; escalonamentos fora do rotulo ficam bloqueados.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Infliximabe - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dbf738c4-3fac-4422-a9d8-51d9c83a8789"
  }
};})();
/* GOLD33_SELECTIVE:infliximabe:END */
/* GOLD33_SELECTIVE:itoprida:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="itoprida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:itoprida:"+matches.length);drug=matches[0];}else{drug=db&&db["itoprida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:itoprida");}drug.mcGoldClinicalV1={
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
    "name": "Itoprida",
    "class": "Procinético gastrointestinal",
    "pharmacologicClass": "Antagonista dopaminérgico D2 periférico e inibidor da acetilcolinesterase",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Comprimido 50 mg, conforme produtos de jurisdições onde registrado.",
    "presentations": "Comprimido 50 mg, conforme produtos de jurisdições onde registrado.",
    "mechanism": "Aumenta acetilcolina no plexo mioentérico por bloqueio D2 e inibição da acetilcolinesterase, favorecendo motilidade e esvaziamento gástrico.",
    "pharmacodynamics": "Aumenta acetilcolina no plexo mioentérico por bloqueio D2 e inibição da acetilcolinesterase, favorecendo motilidade e esvaziamento gástrico.",
    "pharmacokinetics": "Absorção oral rápida; metabolismo predominante por FMO3; meia-vida aproximada de 6 h; eliminação renal principalmente como metabólito.",
    "indications": "Sintomas de dismotilidade/dispepsia funcional somente onde houver indicação regulatória local. Não aprovada pela FDA.",
    "dose": "Regime frequentemente rotulado em alguns países: 50 mg VO três vezes ao dia antes das refeições; confirmar bula e jurisdição antes de prescrever.",
    "pediatricDose": "Segurança/eficácia pediátrica não estabelecida; CÁLCULO PEDIÁTRICO BLOQUEADO.",
    "renalDose": "Dados insuficientes para algoritmo; cautela em insuficiência renal por eliminação de metabólitos.",
    "hepaticDose": "Sem algoritmo estabelecido; cautela em hepatopatia.",
    "commonAdverseEffects": "Dor abdominal, diarreia, cefaleia, tontura e hiperprolactinemia.",
    "dangerousAdverseEffects": "Reação alérgica, leucopenia/trombocitopenia e disfunção hepática raras.",
    "adverseEffects": "Dor abdominal, diarreia, cefaleia, tontura e hiperprolactinemia.; Reação alérgica, leucopenia/trombocitopenia e disfunção hepática raras.",
    "contraindications": "Hipersensibilidade; situações em que aumento da motilidade seja perigoso, como hemorragia, obstrução ou perfuração GI.",
    "interactions": "Anticolinérgicos podem antagonizar efeito; revisar fármacos dopaminérgicos e que elevam prolactina.",
    "monitoring": "Sintomas GI, hemograma/função hepática se uso prolongado ou sintomas; prolactina quando indicado.",
    "administration": "VO antes das refeições, conforme produto.",
    "preparation": "Não triturar sem verificar formulação; nenhuma preparação parenteral.",
    "infusionProtocol": "Não aplicável: uso oral.",
    "pregnancy": "Dados insuficientes; usar somente após avaliação de benefício-risco.",
    "lactation": "Dados insuficientes; decisão individual.",
    "specialPopulations": "Cautela em idosos e disfunção renal/hepática.",
    "patientEducation": "Relatar sangramento, dor intensa, febre, icterícia ou sintomas extrapiramidais.",
    "clinicalPearls": "A evidência e aprovação variam por país; não inferir disponibilidade AR/BR nem equivalência entre produtos.",
    "guidelineRecommendations": "Diretrizes não a tratam universalmente como primeira linha; uso depende de aprovação local e fenótipo da dispepsia.",
    "safetyFlags": "Jurisdição; obstrução GI; hiperprolactinemia; evidência pediátrica ausente.",
    "alerts": "Confirmar registro local e bula; pediatria bloqueada.",
    "references": [
      "Fonte oficial/primária - https://pubmed.ncbi.nlm.nih.gov/39989849/",
      "Fonte oficial/primária - https://pubmed.ncbi.nlm.nih.gov/35357058/"
    ],
    "ref": "https://pubmed.ncbi.nlm.nih.gov/39989849/"
  },
  "es": {
    "name": "Itoprida",
    "class": "Procinético gastrointestinal",
    "pharmacologicClass": "Antagonista dopaminérgico D2 periférico y inibidor da acetilcolinesterase",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Comprimido 50 mg, según produtos de jurisdições onde registrado.",
    "presentations": "Comprimido 50 mg, según produtos de jurisdições onde registrado.",
    "mechanism": "Aumenta acetilcolina no plexo mioentérico por bloqueio D2 y inibição da acetilcolinesterase, favorecendo motilidade y esvaziamento gástrico.",
    "pharmacodynamics": "Aumenta acetilcolina no plexo mioentérico por bloqueio D2 y inibição da acetilcolinesterase, favorecendo motilidade y esvaziamento gástrico.",
    "pharmacokinetics": "Absorção oral rápida; metabolismo predominante por FMO3; meia-vida aproximada de 6 h; eliminação renal principalmente como metabólito.",
    "indications": "Sintomas de dismotilidade/dispepsia funcional somente onde houver indicación regulatória local. No aprovada pela FDA.",
    "dose": "Regime frequentemente rotulado em alguns países: 50 mg VO tres veces al día antes de las comidas; confirmar bula y jurisdição antes de prescrever.",
    "pediatricDose": "Segurança/eficacia pediátrica no establecida; CÁLCULO PEDIÁTRICO BLOQUEADO.",
    "renalDose": "Dados insuficientes para algoritmo; cautela em insuficiência renal por eliminação de metabólitos.",
    "hepaticDose": "Sem algoritmo estabelecido; cautela em hepatopatia.",
    "commonAdverseEffects": "Dor abdominal, diarreia, cefaleia, tontura y hiperprolactinemia.",
    "dangerousAdverseEffects": "Reação alérgica, leucopenia/trombocitopenia y disfunción hepática raras.",
    "adverseEffects": "Dor abdominal, diarreia, cefaleia, tontura y hiperprolactinemia.; Reação alérgica, leucopenia/trombocitopenia y disfunción hepática raras.",
    "contraindications": "Hipersensibilidade; situações em que aumento da motilidade seja perigoso, como hemorragia, obstrução ou perfuração GI.",
    "interactions": "Anticolinérgicos podem antagonizar efeito; revisar fármacos dopaminérgicos y que elevam prolactina.",
    "monitoring": "Sintomas GI, hemograma/función hepática se uso prolongado ou sintomas; prolactina quando indicado.",
    "administration": "VO antes de las comidas, según produto.",
    "preparation": "No triturar sin verificar formulación; nenhuma preparação parenteral.",
    "infusionProtocol": "No aplicável: uso oral.",
    "pregnancy": "Dados insuficientes; usar somente após evaluación de benefício-riesgo.",
    "lactation": "Dados insuficientes; decisão individual.",
    "specialPopulations": "Cautela em idosos y disfunción renal/hepática.",
    "patientEducation": "Relatar sangramento, dor intensa, febre, icterícia ou sintomas extrapiramidais.",
    "clinicalPearls": "A evidência y aprovação variam por país; no inferir disponibilidade AR/BR nem equivalência entre produtos.",
    "guidelineRecommendations": "Diretrizes no a tratam universalmente como primeira linha; uso depende de aprovação local y fenótipo da dispepsia.",
    "safetyFlags": "Jurisdição; obstrução GI; hiperprolactinemia; evidência pediátrica ausente.",
    "alerts": "Confirmar registro local y bula; pediatría bloqueada.",
    "references": [
      "Fonte oficial/primária - https://pubmed.ncbi.nlm.nih.gov/39989849/",
      "Fonte oficial/primária - https://pubmed.ncbi.nlm.nih.gov/35357058/"
    ],
    "ref": "https://pubmed.ncbi.nlm.nih.gov/39989849/"
  }
};})();
/* GOLD33_SELECTIVE:itoprida:END */
/* GOLD33_SELECTIVE:lansoprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="lansoprazol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:lansoprazol:"+matches.length);drug=matches[0];}else{drug=db&&db["lansoprazol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:lansoprazol");}drug.mcGoldClinicalV1={
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
    "name": "Lansoprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "IBP benzimidazólico",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Cápsulas de liberação retardada e comprimidos orodispersíveis 15/30 mg.",
    "presentations": "Cápsulas de liberação retardada e comprimidos orodispersíveis 15/30 mg.",
    "mechanism": "Inibe irreversivelmente a H+/K+-ATPase da célula parietal após ativação em meio ácido, suprimindo secreção basal e estimulada.",
    "pharmacodynamics": "Inibe irreversivelmente a H+/K+-ATPase da célula parietal após ativação em meio ácido, suprimindo secreção basal e estimulada.",
    "pharmacokinetics": "Pró-fármaco ácido-lábil de liberação retardada; metabolismo CYP2C19/CYP3A4; meia-vida plasmática curta, efeito antisecretor prolongado.",
    "indications": "DRGE, esofagite erosiva, úlcera duodenal/gástrica, erradicação de H. pylori em combinação e estados hipersecretores conforme bula.",
    "dose": "Adultos: 15-30 mg VO uma vez/dia antes de comer conforme indicação; H. pylori exige esquema combinado; Zollinger-Ellison pode necessitar titulação.",
    "pediatricDose": "Doses rotuladas existem para crianças >=1 ano conforme peso/indicação; menores de 1 ano não demonstraram benefício. Automatização requer tabela integral e fica BLOQUEADA neste lote.",
    "renalDose": "Sem ajuste rotineiro.",
    "hepaticDose": "Considerar redução em hepatopatia grave; não exceder regime rotulado sem avaliação.",
    "commonAdverseEffects": "Cefaleia, diarreia, dor abdominal, náusea e constipação.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência B12, fraturas e reações cutâneas graves.",
    "adverseEffects": "Cefaleia, diarreia, dor abdominal, náusea e constipação.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência B12, fraturas e reações cutâneas graves.",
    "contraindications": "Hipersensibilidade a IBP; uso concomitante com produtos contendo rilpivirina.",
    "interactions": "Reduz absorção de fármacos dependentes de pH; interação com metotrexato em alta dose, varfarina e digoxina; revisar antirretrovirais.",
    "monitoring": "Resposta, sinais de alarme; magnésio/B12/função renal em uso prolongado ou risco; INR se varfarina.",
    "administration": "Tomar antes das refeições; engolir cápsula inteira ou usar método rotulado para grânulos/ODT.",
    "preparation": "Não esmagar grânulos de liberação retardada; seguir instruções para sonda apenas quando rotuladas.",
    "infusionProtocol": "Não aplicável: uso enteral, sem infusão IV neste escopo.",
    "pregnancy": "Dados observacionais não mostram sinal maior claro; usar quando indicado.",
    "lactation": "Dados limitados; avaliar benefício e risco.",
    "specialPopulations": "Idosos: menor dose eficaz; uso prolongado requer reavaliação.",
    "patientEducation": "Usar pelo menor tempo necessário; procurar avaliação por disfagia, perda de peso, sangramento ou diarreia persistente.",
    "clinicalPearls": "Resposta sintomática não exclui malignidade; verificar indicação e duração.",
    "guidelineRecommendations": "Diretrizes recomendam IBP para DRGE/esofagite e esquemas de H. pylori em combinações apropriadas.",
    "safetyFlags": "Nefrite; C. difficile; hipomagnesemia; liberação retardada.",
    "alerts": "Antes de comer; não triturar; pediatria automatizada bloqueada.",
    "references": [
      "Fonte oficial/primária - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51"
  },
  "es": {
    "name": "Lansoprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "IBP benzimidazólico",
    "commercialNames": "Marcas variam por país; confirmar registro local.",
    "presentation": "Cápsulas de liberação retardada y comprimidos orodispersíveis 15/30 mg.",
    "presentations": "Cápsulas de liberação retardada y comprimidos orodispersíveis 15/30 mg.",
    "mechanism": "Inibe irreversivelmente a H+/K+-ATPase da célula parietal após ativação em meio ácido, suprimindo secreção basal y estimulada.",
    "pharmacodynamics": "Inibe irreversivelmente a H+/K+-ATPase da célula parietal após ativação em meio ácido, suprimindo secreção basal y estimulada.",
    "pharmacokinetics": "Pró-fármaco ácido-lábil de liberação retardada; metabolismo CYP2C19/CYP3A4; meia-vida plasmática curta, efeito antisecretor prolongado.",
    "indications": "DRGE, esofagite erosiva, úlcera duodenal/gástrica, erradicação de H. pylori em combinação y estados hipersecretores según bula.",
    "dose": "Adultos: 15-30 mg VO una vez/día antes de comer según indicación; H. pylori exige esquema combinado; Zollinger-Ellison pode necessitar titulação.",
    "pediatricDose": "Doses rotuladas existem para niños >=1 ano según peso/indicación; menores de 1 ano no demonstraram benefício. Automatização requer tabela integral y fica BLOQUEADA neste lote.",
    "renalDose": "Sem ajuste rotineiro.",
    "hepaticDose": "Considerar redução em hepatopatia grave; no exceder regime rotulado sin evaluación.",
    "commonAdverseEffects": "Cefaleia, diarreia, dor abdominal, náusea y constipação.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência B12, fraturas y reacciones cutâneas graves.",
    "adverseEffects": "Cefaleia, diarreia, dor abdominal, náusea y constipação.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência B12, fraturas y reacciones cutâneas graves.",
    "contraindications": "Hipersensibilidade a IBP; uso concomitante con produtos contendo rilpivirina.",
    "interactions": "Reduz absorção de fármacos dependentes de pH; interação con metotrexato em alta dosis, varfarina y digoxina; revisar antirretrovirais.",
    "monitoring": "Resposta, sinais de alarme; magnésio/B12/función renal em uso prolongado ou riesgo; INR se varfarina.",
    "administration": "Tomar antes de las comidas; engolir cápsula inteira ou usar método rotulado para grânulos/ODT.",
    "preparation": "No esmagar grânulos de liberação retardada; seguir instruções para sonda apenas quando rotuladas.",
    "infusionProtocol": "No aplicável: uso enteral, sin infusão IV neste escopo.",
    "pregnancy": "Dados observacionais no mostram sinal maior claro; usar quando indicado.",
    "lactation": "Dados limitados; avaliar benefício y riesgo.",
    "specialPopulations": "Idosos: menor dosis eficaz; uso prolongado requer reevaluación.",
    "patientEducation": "Usar pelo menor tempo necessário; procurar evaluación por disfagia, perda de peso, sangramento ou diarreia persistente.",
    "clinicalPearls": "Resposta sintomática no exclui malignidade; verificar indicación y duração.",
    "guidelineRecommendations": "Diretrizes recomendam IBP para DRGE/esofagite y esquemas de H. pylori em combinações apropriadas.",
    "safetyFlags": "Nefrite; C. difficile; hipomagnesemia; liberação retardada.",
    "alerts": "Antes de comer; no triturar; pediatría automatizada bloqueada.",
    "references": [
      "Fonte oficial/primária - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7daa1721-f92b-4096-b19e-4d27fc8acb51"
  }
};})();
/* GOLD33_SELECTIVE:lansoprazol:END */
/* GOLD33_SELECTIVE:linaclotida:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="linaclotida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:linaclotida:"+matches.length);drug=matches[0];}else{drug=db&&db["linaclotida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:linaclotida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "046",
    "requiredFieldCount": 33,
    "approvedSha256": "b01bced97714803d025e288b269c2a23ae3562608450a3618c1ccb6e9db46467",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Linaclotida",
    "class": "Agonista da guanilato ciclase-C",
    "pharmacologicClass": "Agonista da guanilato ciclase-C",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 72/145/290 mcg.",
    "presentations": "Cápsulas 72/145/290 mcg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "SII com constipação e constipação idiopática crônica em adultos; constipação funcional pediátrica conforme idade/bula vigente.",
    "dose": "Adultos: SII-C 290 mcg VO/dia; CIC 145 mcg/dia (72 mcg conforme tolerância). Tomar em jejum 30 min antes da primeira refeição.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Diarreia, distensão, flatulência e dor abdominal.",
    "dangerousAdverseEffects": "Diarreia grave com desidratação/alteração eletrolítica.",
    "adverseEffects": "Diarreia, distensão, flatulência e dor abdominal.; Diarreia grave com desidratação/alteração eletrolítica.",
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
    "safetyFlags": "Diarreia grave com desidratação/alteração eletrolítica.",
    "alerts": "Diarreia grave com desidratação/alteração eletrolítica.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linaclotide"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linaclotide"
  },
  "es": {
    "name": "Linaclotida",
    "class": "Agonista da guanilato ciclase-C",
    "pharmacologicClass": "Agonista da guanilato ciclase-C",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 72/145/290 mcg.",
    "presentations": "Cápsulas 72/145/290 mcg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "SII con constipação y constipação idiopática crônica em adultos; constipação funcional pediátrica conforme idade/bula vigente.",
    "dose": "Adultos: SII-C 290 mcg VO/dia; CIC 145 mcg/dia (72 mcg conforme tolerância). Tomar em jejum 30 min antes da primeira refeição.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Diarreia, distensão, flatulência y dor abdominal.",
    "dangerousAdverseEffects": "Diarreia grave con desidratação/alteração eletrolítica.",
    "adverseEffects": "Diarreia, distensão, flatulência y dor abdominal.; Diarreia grave con desidratação/alteração eletrolítica.",
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
    "safetyFlags": "Diarreia grave con desidratação/alteração eletrolítica.",
    "alerts": "Diarreia grave con desidratação/alteração eletrolítica.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linaclotide"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linaclotide"
  }
};})();
/* GOLD33_SELECTIVE:linaclotida:END */
/* GOLD33_SELECTIVE:lubiprostona:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="lubiprostona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:lubiprostona:"+matches.length);drug=matches[0];}else{drug=db&&db["lubiprostona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:lubiprostona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "048",
    "requiredFieldCount": 33,
    "approvedSha256": "31106a5e151f08bd2d807a5d1d0d90483780bc660c307b2c8833463be27e37b7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Lubiprostona",
    "class": "Ativador de canais de cloreto intestinal",
    "pharmacologicClass": "Ativador de canais de cloreto intestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 8 e 24 mcg.",
    "presentations": "Cápsulas 8 e 24 mcg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica, constipação induzida por opioides e SII com constipação em mulheres adultas conforme rótulo.",
    "dose": "CIC/OIC: 24 mcg VO duas vezes/dia com alimento e água. SII-C: 8 mcg VO duas vezes/dia. Reavaliar resposta; eficácia em OIC por metadona não estabelecida.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Náusea, diarreia, dor abdominal, distensão e flatulência.",
    "dangerousAdverseEffects": "Diarreia grave, síncope/hipotensão e dispneia aguda após dose.",
    "adverseEffects": "Náusea, diarreia, dor abdominal, distensão e flatulência.; Diarreia grave, síncope/hipotensão e dispneia aguda após dose.",
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
    "safetyFlags": "Diarreia grave, síncope/hipotensão e dispneia aguda após dose.",
    "alerts": "Diarreia grave, síncope/hipotensão e dispneia aguda após dose.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lubiprostone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/021908s011lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lubiprostone"
  },
  "es": {
    "name": "Lubiprostona",
    "class": "Ativador de canais de cloreto intestinal",
    "pharmacologicClass": "Ativador de canais de cloreto intestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas 8 y 24 mcg.",
    "presentations": "Cápsulas 8 y 24 mcg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica, constipação induzida por opioides y SII con constipação em mulheres adultas conforme rótulo.",
    "dose": "CIC/OIC: 24 mcg VO duas vezes/dia con alimento y água. SII-C: 8 mcg VO duas vezes/dia. Reavaliar resposta; eficácia em OIC por metadona no estabelecida.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Náusea, diarreia, dor abdominal, distensão y flatulência.",
    "dangerousAdverseEffects": "Diarreia grave, síncope/hipotensão y dispneia aguda após dosis.",
    "adverseEffects": "Náusea, diarreia, dor abdominal, distensão y flatulência.; Diarreia grave, síncope/hipotensão y dispneia aguda após dosis.",
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
    "safetyFlags": "Diarreia grave, síncope/hipotensão y dispneia aguda após dosis.",
    "alerts": "Diarreia grave, síncope/hipotensão y dispneia aguda após dosis.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lubiprostone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/021908s011lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lubiprostone"
  }
};})();
/* GOLD33_SELECTIVE:lubiprostona:END */
/* GOLD33_SELECTIVE:macrogol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="macrogol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:macrogol:"+matches.length);drug=matches[0];}else{drug=db&&db["macrogol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:macrogol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "048",
    "requiredFieldCount": 33,
    "approvedSha256": "31106a5e151f08bd2d807a5d1d0d90483780bc660c307b2c8833463be27e37b7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Macrogol 3350/4000",
    "class": "Laxante osmótico",
    "pharmacologicClass": "Laxante osmótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Sachês com macrogol em massas e eletrólitos variáveis; solução sem eletrólitos também existe.",
    "presentations": "Sachês com macrogol em massas e eletrólitos variáveis; solução sem eletrólitos também existe.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Constipação e, em formulações específicas com eletrólitos, impactação fecal.",
    "dose": "Regime depende do produto. Exemplo de macrogol 3350 com eletrólitos: adultos, 1 sachê uma a três vezes/dia para constipação; impactação pode usar 8 sachês em 6 h por até 3 dias conforme SmPC específico. Não extrapolar entre formulações.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Distensão, dor abdominal, flatulência, náusea e diarreia.",
    "dangerousAdverseEffects": "Distúrbios eletrolíticos, desidratação e hipersensibilidade; risco de aspiração em administração por sonda.",
    "adverseEffects": "Distensão, dor abdominal, flatulência, náusea e diarreia.; Distúrbios eletrolíticos, desidratação e hipersensibilidade; risco de aspiração em administração por sonda.",
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
    "safetyFlags": "Distúrbios eletrolíticos, desidratação e hipersensibilidade; risco de aspiração em administração por sonda.",
    "alerts": "Distúrbios eletrolíticos, desidratação e hipersensibilidade; risco de aspiração em administração por sonda.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://www.medicines.org.uk/emc/search?q=macrogol",
      "Fonte primária/oficial - https://www.nice.org.uk/guidance/cg99"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=macrogol"
  },
  "es": {
    "name": "Macrogol 3350/4000",
    "class": "Laxante osmótico",
    "pharmacologicClass": "Laxante osmótico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Sachês con macrogol em massas y eletrólitos variáveis; solución sem eletrólitos também existe.",
    "presentations": "Sachês con macrogol em massas y eletrólitos variáveis; solución sem eletrólitos também existe.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Constipação e, em formulações específicas con eletrólitos, impactação fecal.",
    "dose": "Regime depende do produto. Exemplo de macrogol 3350 con eletrólitos: adultos, 1 sachê uma a três vezes/dia para constipação; impactação pode usar 8 sachês em 6 h por até 3 dias conforme SmPC específico. No extrapolar entre formulações.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Distensão, dor abdominal, flatulência, náusea y diarreia.",
    "dangerousAdverseEffects": "Distúrbios eletrolíticos, desidratação y hipersensibilidade; riesgo de aspiração em administração por sonda.",
    "adverseEffects": "Distensão, dor abdominal, flatulência, náusea y diarreia.; Distúrbios eletrolíticos, desidratação y hipersensibilidade; riesgo de aspiração em administração por sonda.",
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
    "safetyFlags": "Distúrbios eletrolíticos, desidratação y hipersensibilidade; riesgo de aspiração em administração por sonda.",
    "alerts": "Distúrbios eletrolíticos, desidratação y hipersensibilidade; riesgo de aspiração em administração por sonda.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://www.medicines.org.uk/emc/search?q=macrogol",
      "Fonte primária/oficial - https://www.nice.org.uk/guidance/cg99"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=macrogol"
  }
};})();
/* GOLD33_SELECTIVE:macrogol:END */
/* GOLD33_SELECTIVE:miriquizumabe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="miriquizumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:miriquizumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["miriquizumabe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:miriquizumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "052",
    "requiredFieldCount": 33,
    "approvedSha256": "6d2b196fca8928f9ce98d9cc29c3c5817f36b0205f5e78b4346fcb54a7e4cd30",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Mirikizumabe",
    "class": "Anticorpo monoclonal anti-IL-23p19",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-23p19",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco IV 300 mg/15 mL; canetas/seringas SC de 100 mg/mL para dose total de 200 mg.",
    "presentations": "Frasco IV 300 mg/15 mL; canetas/seringas SC de 100 mg/mL para dose total de 200 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Colite ulcerativa ativa moderada a grave em adultos; outras indicações dependem do rótulo vigente.",
    "dose": "Colite ulcerativa: indução 300 mg IV nas semanas 0, 4 e 8; manutenção 200 mg SC a cada 4 semanas, iniciando na semana 12. Falha de resposta e outras indicações seguem algoritmos próprios do rótulo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Infecção respiratória alta, reação no local, artralgia, cefaleia e rash.",
    "dangerousAdverseEffects": "Infecção grave, hipersensibilidade e hepatotoxicidade.",
    "adverseEffects": "Infecção respiratória alta, reação no local, artralgia, cefaleia e rash.; Infecção grave, hipersensibilidade e hepatotoxicidade.",
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
    "safetyFlags": "Infecção grave, hipersensibilidade e hepatotoxicidade.",
    "alerts": "Infecção grave, hipersensibilidade e hepatotoxicidade.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mirikizumab",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/761279s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mirikizumab"
  },
  "es": {
    "name": "Mirikizumabe",
    "class": "Anticorpo monoclonal anti-IL-23p19",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-23p19",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frasco IV 300 mg/15 mL; canetas/seringas SC de 100 mg/mL para dosis total de 200 mg.",
    "presentations": "Frasco IV 300 mg/15 mL; canetas/seringas SC de 100 mg/mL para dosis total de 200 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Colite ulcerativa ativa moderada a grave em adultos; outras indicações dependem do rótulo vigente.",
    "dose": "Colite ulcerativa: indução 300 mg IV nas semanas 0, 4 y 8; manutenção 200 mg SC a cada 4 semanas, iniciando na semana 12. Falha de resposta y outras indicações seguem algoritmos próprios do rótulo.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Infecção respiratória alta, reação no local, artralgia, cefaleia y rash.",
    "dangerousAdverseEffects": "Infecção grave, hipersensibilidade y hepatotoxicidade.",
    "adverseEffects": "Infecção respiratória alta, reação no local, artralgia, cefaleia y rash.; Infecção grave, hipersensibilidade y hepatotoxicidade.",
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
    "safetyFlags": "Infecção grave, hipersensibilidade y hepatotoxicidade.",
    "alerts": "Infecção grave, hipersensibilidade y hepatotoxicidade.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mirikizumab",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/761279s000lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=mirikizumab"
  }
};})();
/* GOLD33_SELECTIVE:miriquizumabe:END */
/* GOLD33_SELECTIVE:mosaprida:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="mosaprida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:mosaprida:"+matches.length);drug=matches[0];}else{drug=db&&db["mosaprida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:mosaprida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "053",
    "requiredFieldCount": 33,
    "approvedSha256": "74d1644dae5d55433a28e669a25bb51f5d95ca84d2e052ad6d5a8de9ed17f751",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Mosaprida",
    "class": "Agonista seletivo 5-HT4; procinético",
    "pharmacologicClass": "Agonista seletivo 5-HT4; procinético",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 mg e outras apresentações conforme mercado.",
    "presentations": "Comprimidos 5 mg e outras apresentações conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Sintomas gastrointestinais relacionados à dismotilidade conforme indicação e aprovação local.",
    "dose": "Adultos: 5 mg VO três vezes/dia, antes ou depois das refeições, nos rótulos que aprovam o produto. Reavaliar se não houver resposta; disponibilidade e indicação variam por país.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Diarreia, dor abdominal, boca seca, tontura e cefaleia.",
    "dangerousAdverseEffects": "Hepatotoxicidade, arritmia/QT em suscetíveis e reações de hipersensibilidade.",
    "adverseEffects": "Diarreia, dor abdominal, boca seca, tontura e cefaleia.; Hepatotoxicidade, arritmia/QT em suscetíveis e reações de hipersensibilidade.",
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
    "safetyFlags": "Hepatotoxicidade, arritmia/QT em suscetíveis e reações de hipersensibilidade.",
    "alerts": "Hepatotoxicidade, arritmia/QT em suscetíveis e reações de hipersensibilidade.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://www.pmda.go.jp/PmdaSearch/iyakuSearch/",
      "Fonte primária/oficial - https://www.pmda.go.jp/english/review-services/reviews/approved-information/drugs/0002.html"
    ],
    "ref": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/"
  },
  "es": {
    "name": "Mosaprida",
    "class": "Agonista seletivo 5-HT4; procinético",
    "pharmacologicClass": "Agonista seletivo 5-HT4; procinético",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 mg y outras apresentações conforme mercado.",
    "presentations": "Comprimidos 5 mg y outras apresentações conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Sintomas gastrointestinais relacionados à dismotilidade conforme indicação y aprovação local.",
    "dose": "Adultos: 5 mg VO três vezes/dia, antes ou depois das refeições, nos rótulos que aprovam o produto. Reavaliar se no houver resposta; disponibilidade y indicação variam por país.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Diarreia, dor abdominal, boca seca, tontura y cefaleia.",
    "dangerousAdverseEffects": "Hepatotoxicidade, arritmia/QT em suscetíveis y reações de hipersensibilidade.",
    "adverseEffects": "Diarreia, dor abdominal, boca seca, tontura y cefaleia.; Hepatotoxicidade, arritmia/QT em suscetíveis y reações de hipersensibilidade.",
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
    "safetyFlags": "Hepatotoxicidade, arritmia/QT em suscetíveis y reações de hipersensibilidade.",
    "alerts": "Hepatotoxicidade, arritmia/QT em suscetíveis y reações de hipersensibilidade.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://www.pmda.go.jp/PmdaSearch/iyakuSearch/",
      "Fonte primária/oficial - https://www.pmda.go.jp/english/review-services/reviews/approved-information/drugs/0002.html"
    ],
    "ref": "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/"
  }
};})();
/* GOLD33_SELECTIVE:mosaprida:END */
/* GOLD33_SELECTIVE:omeprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="omeprazol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:omeprazol:"+matches.length);drug=matches[0];}else{drug=db&&db["omeprazol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:omeprazol");}drug.mcGoldClinicalV1={
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
    "name": "Omeprazol oral",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas/comprimidos de liberação retardada e suspensão em forças diversas.",
    "presentations": "Cápsulas/comprimidos de liberação retardada e suspensão em forças diversas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva, úlceras e erradicação de H. pylori em combinações específicas.",
    "dose": "Adultos: frequentemente 20 mg VO uma vez/dia antes da refeição; dose e duração variam por indicação. H. pylori exige combinação e esquema próprio. Não transpor para via IV.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, náusea, diarreia e flatulência.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
    "adverseEffects": "Cefaleia, dor abdominal, náusea, diarreia e flatulência.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol"
  },
  "es": {
    "name": "Omeprazol oral",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Cápsulas/comprimidos de liberação retardada y suspensão em forças diversas.",
    "presentations": "Cápsulas/comprimidos de liberação retardada y suspensão em forças diversas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva, úlceras y erradicação de H. pylori em combinações específicas.",
    "dose": "Adultos: frequentemente 20 mg VO uma vez/dia antes da refeição; dosis y duração variam por indicação. H. pylori exige combinação y esquema próprio. No transpor para via IV.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, dor abdominal, náusea, diarreia y flatulência.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
    "adverseEffects": "Cefaleia, dor abdominal, náusea, diarreia y flatulência.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazol"
  }
};})();
/* GOLD33_SELECTIVE:omeprazol:END */
/* GOLD33_SELECTIVE:pantoprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="pantoprazol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:pantoprazol:"+matches.length);drug=matches[0];}else{drug=db&&db["pantoprazol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:pantoprazol");}drug.mcGoldClinicalV1={
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
    "name": "Pantoprazol oral",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos gastrorresistentes 20/40 mg e grânulos para suspensão.",
    "presentations": "Comprimidos gastrorresistentes 20/40 mg e grânulos para suspensão.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva e condições hipersecretoras conforme produto.",
    "dose": "Adultos: frequentemente 40 mg VO uma vez/dia; dose e duração variam por indicação. Comprimido gastrorresistente deve ser engolido inteiro.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, náusea, dor abdominal e flatulência.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
    "adverseEffects": "Cefaleia, diarreia, náusea, dor abdominal e flatulência.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reações cutâneas graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol"
  },
  "es": {
    "name": "Pantoprazol oral",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos gastrorresistentes 20/40 mg y grânulos para suspensão.",
    "presentations": "Comprimidos gastrorresistentes 20/40 mg y grânulos para suspensão.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva y condições hipersecretoras conforme produto.",
    "dose": "Adultos: frequentemente 40 mg VO uma vez/dia; dosis y duração variam por indicação. Comprimido gastrorresistente deve ser engolido inteiro.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, náusea, dor abdominal y flatulência.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
    "adverseEffects": "Cefaleia, diarreia, náusea, dor abdominal y flatulência.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reações cutâneas graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazol"
  }
};})();
/* GOLD33_SELECTIVE:pantoprazol:END */
/* GOLD33_SELECTIVE:picossulfato_de_sodio:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="picossulfato_de_sodio";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:picossulfato_de_sodio:"+matches.length);drug=matches[0];}else{drug=db&&db["picossulfato_de_sodio"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:picossulfato_de_sodio");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "062",
    "requiredFieldCount": 33,
    "approvedSha256": "370ce1bd176a8195540294ce684462cfa5ab46161e640a53e008c75ab3b56496",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Picossulfato de sódio",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Laxante estimulante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Gotas/solução oral e kits combinados para preparo intestinal.",
    "presentations": "Gotas/solução oral e kits combinados para preparo intestinal.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Constipação ou preparo intestinal conforme produto; combinações para colonoscopia têm protocolos próprios.",
    "dose": "Constipação: dose oral noturna dependente da concentração/idade. Preparo intestinal exige solução combinada, hidratação e esquema específico. Não intercambiar.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cólicas, diarreia, náusea e dor abdominal.",
    "dangerousAdverseEffects": "Desidratação, distúrbios eletrolíticos, isquemia colônica e convulsões secundárias.",
    "adverseEffects": "Cólicas, diarreia, náusea e dor abdominal.; Desidratação, distúrbios eletrolíticos, isquemia colônica e convulsões secundárias.",
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
    "safetyFlags": "Desidratação, distúrbios eletrolíticos, isquemia colônica e convulsões secundárias.",
    "alerts": "Desidratação, distúrbios eletrolíticos, isquemia colônica e convulsões secundárias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=picossulfato+de+sodio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=picossulfato+de+sodio"
  },
  "es": {
    "name": "Picossulfato de sódio",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Laxante estimulante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Gotas/solución oral y kits combinados para preparo intestinal.",
    "presentations": "Gotas/solución oral y kits combinados para preparo intestinal.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Constipação ou preparo intestinal conforme produto; combinações para colonoscopia têm protocolos próprios.",
    "dose": "Constipação: dosis oral noturna dependente da concentração/idade. Preparo intestinal exige solución combinada, hidratação y esquema específico. No intercambiar.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cólicas, diarreia, náusea y dor abdominal.",
    "dangerousAdverseEffects": "Desidratação, distúrbios eletrolíticos, isquemia colônica y convulsões secundárias.",
    "adverseEffects": "Cólicas, diarreia, náusea y dor abdominal.; Desidratação, distúrbios eletrolíticos, isquemia colônica y convulsões secundárias.",
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
    "safetyFlags": "Desidratação, distúrbios eletrolíticos, isquemia colônica y convulsões secundárias.",
    "alerts": "Desidratação, distúrbios eletrolíticos, isquemia colônica y convulsões secundárias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=picossulfato+de+sodio",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=picossulfato+de+sodio"
  }
};})();
/* GOLD33_SELECTIVE:picossulfato_de_sodio:END */
/* GOLD33_SELECTIVE:plecanatida:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="plecanatida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:plecanatida:"+matches.length);drug=matches[0];}else{drug=db&&db["plecanatida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:plecanatida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "063",
    "requiredFieldCount": 33,
    "approvedSha256": "0836475394610ba35aace29b9a296eef05b84c9302a8e7e18442adf60337ef6c",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Plecanatida",
    "class": "Agonista da guanilato ciclase C",
    "pharmacologicClass": "Agonista da guanilato ciclase C",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos orais em força única conforme mercado.",
    "presentations": "Comprimidos orais em força única conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica e síndrome do intestino irritável com constipação em adultos.",
    "dose": "Dose oral uma vez ao dia conforme rótulo; engolir inteira ou usar as opções de administração autorizadas. Contraindicada em crianças pequenas pelo risco de desidratação grave.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia.",
    "dangerousAdverseEffects": "Diarreia intensa, desidratação e hipersensibilidade.",
    "adverseEffects": "Diarreia.; Diarreia intensa, desidratação e hipersensibilidade.",
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
    "safetyFlags": "Diarreia intensa, desidratação e hipersensibilidade.",
    "alerts": "Diarreia intensa, desidratação e hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=plecanatida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=plecanatida"
  },
  "es": {
    "name": "Plecanatida",
    "class": "Agonista da guanilato ciclase C",
    "pharmacologicClass": "Agonista da guanilato ciclase C",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos orais em força única conforme mercado.",
    "presentations": "Comprimidos orais em força única conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica y síndrome do intestino irritável con constipação em adultos.",
    "dose": "Dose oral uma vez ao dia conforme rótulo; engolir inteira ou usar as opções de administração autorizadas. Contraindicada em niños pequenas pelo risco de desidratação grave.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Diarreia.",
    "dangerousAdverseEffects": "Diarreia intensa, desidratação y hipersensibilidade.",
    "adverseEffects": "Diarreia.; Diarreia intensa, desidratação y hipersensibilidade.",
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
    "safetyFlags": "Diarreia intensa, desidratação y hipersensibilidade.",
    "alerts": "Diarreia intensa, desidratação y hipersensibilidade.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=plecanatida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=plecanatida"
  }
};})();
/* GOLD33_SELECTIVE:plecanatida:END */
/* GOLD33_SELECTIVE:proclorperazina:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="proclorperazina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:proclorperazina:"+matches.length);drug=matches[0];}else{drug=db&&db["proclorperazina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:proclorperazina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "065",
    "requiredFieldCount": 33,
    "approvedSha256": "1a25d20852a2d1e893c3971303607ecf012af067ce4a1d044946ceb4d3ccbc93",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Proclorperazina",
    "class": "Antipsicótico fenotiazínico com ação antiemética",
    "pharmacologicClass": "Antipsicótico fenotiazínico com ação antiemética",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, supositórios e injetável em apresentações específicas.",
    "presentations": "Comprimidos, supositórios e injetável em apresentações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Náuseas/vômitos graves e transtornos psicóticos conforme formulação, idade e rótulo.",
    "dose": "Dose depende da indicação e via. Limitar uso pediátrico conforme idade/peso e evitar extrapolar entre oral, retal e injetável; titulação clínica obrigatória.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Sonolência, tontura, boca seca, constipação e sintomas extrapiramidais.",
    "dangerousAdverseEffects": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose e depressão respiratória.",
    "adverseEffects": "Sonolência, tontura, boca seca, constipação e sintomas extrapiramidais.; Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose e depressão respiratória.",
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
    "safetyFlags": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose e depressão respiratória.",
    "alerts": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose e depressão respiratória.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=proclorperazina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=proclorperazina"
  },
  "es": {
    "name": "Proclorperazina",
    "class": "Antipsicótico fenotiazínico con ação antiemética",
    "pharmacologicClass": "Antipsicótico fenotiazínico con ação antiemética",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, supositórios y injetável em apresentações específicas.",
    "presentations": "Comprimidos, supositórios y injetável em apresentações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Náuseas/vômitos graves y transtornos psicóticos conforme formulação, idade y rótulo.",
    "dose": "Dose depende da indicação y via. Limitar uso pediátrico conforme idade/peso y evitar extrapolar entre oral, retal y injetável; titulação clínica obrigatória.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Sonolência, tontura, boca seca, constipação y sintomas extrapiramidais.",
    "dangerousAdverseEffects": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose y depressão respiratória.",
    "adverseEffects": "Sonolência, tontura, boca seca, constipação y sintomas extrapiramidais.; Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose y depressão respiratória.",
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
    "safetyFlags": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose y depressão respiratória.",
    "alerts": "Distonia, discinesia tardia, síndrome neuroléptica maligna, QT, agranulocitose y depressão respiratória.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=proclorperazina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=proclorperazina"
  }
};})();
/* GOLD33_SELECTIVE:proclorperazina:END */
/* GOLD33_SELECTIVE:prucaloprida:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="prucaloprida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:prucaloprida:"+matches.length);drug=matches[0];}else{drug=db&&db["prucaloprida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:prucaloprida");}drug.mcGoldClinicalV1={
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
    "name": "Prucaloprida",
    "class": "Agonista seletivo 5-HT4",
    "pharmacologicClass": "Agonista seletivo 5-HT4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em múltiplas forças.",
    "presentations": "Comprimidos em múltiplas forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica em adultos conforme jurisdição.",
    "dose": "Dose oral diária, com redução em insuficiência renal grave e consideração de idade/comorbidades. Avaliar causas secundárias e resposta clínica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, diarreia e dor abdominal.",
    "dangerousAdverseEffects": "Ideação/comportamento suicida, hipersensibilidade e diarreia grave.",
    "adverseEffects": "Cefaleia, náusea, diarreia e dor abdominal.; Ideação/comportamento suicida, hipersensibilidade e diarreia grave.",
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
    "safetyFlags": "Ideação/comportamento suicida, hipersensibilidade e diarreia grave.",
    "alerts": "Ideação/comportamento suicida, hipersensibilidade e diarreia grave.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prucaloprida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prucaloprida"
  },
  "es": {
    "name": "Prucaloprida",
    "class": "Agonista seletivo 5-HT4",
    "pharmacologicClass": "Agonista seletivo 5-HT4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em múltiplas forças.",
    "presentations": "Comprimidos em múltiplas forças.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Constipação idiopática crônica em adultos conforme jurisdição.",
    "dose": "Dose oral diária, con redução em insuficiência renal grave y consideração de idade/comorbidades. Avaliar causas secundárias y resposta clínica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, náusea, diarreia y dor abdominal.",
    "dangerousAdverseEffects": "Ideação/comportamento suicida, hipersensibilidade y diarreia grave.",
    "adverseEffects": "Cefaleia, náusea, diarreia y dor abdominal.; Ideação/comportamento suicida, hipersensibilidade y diarreia grave.",
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
    "safetyFlags": "Ideação/comportamento suicida, hipersensibilidade y diarreia grave.",
    "alerts": "Ideação/comportamento suicida, hipersensibilidade y diarreia grave.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prucaloprida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prucaloprida"
  }
};})();
/* GOLD33_SELECTIVE:prucaloprida:END */
/* GOLD33_SELECTIVE:rabeprazol:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="rabeprazol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:rabeprazol:"+matches.length);drug=matches[0];}else{drug=db&&db["rabeprazol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:rabeprazol");}drug.mcGoldClinicalV1={
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
    "name": "Rabeprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos gastrorresistentes e formulações pediátricas específicas conforme mercado.",
    "presentations": "Comprimidos gastrorresistentes e formulações pediátricas específicas conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva, úlcera e esquemas de erradicação de H. pylori conforme rótulo.",
    "dose": "Dose e duração variam por indicação. Comprimido gastrorresistente deve ser engolido inteiro; H. pylori exige terapia combinada específica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, náusea e dor abdominal.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reação cutânea grave.",
    "adverseEffects": "Cefaleia, diarreia, náusea e dor abdominal.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reação cutânea grave.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reação cutânea grave.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas e reação cutânea grave.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=rabeprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=rabeprazol"
  },
  "es": {
    "name": "Rabeprazol",
    "class": "Inibidor da bomba de prótons",
    "pharmacologicClass": "Inibidor da bomba de prótons",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos gastrorresistentes y formulações pediátricas específicas conforme mercado.",
    "presentations": "Comprimidos gastrorresistentes y formulações pediátricas específicas conforme mercado.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "DRGE, esofagite erosiva, úlcera y esquemas de erradicação de H. pylori conforme rótulo.",
    "dose": "Dose y duração variam por indicação. Comprimido gastrorresistente deve ser engolido inteiro; H. pylori exige terapia combinada específica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cefaleia, diarreia, náusea y dor abdominal.",
    "dangerousAdverseEffects": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reação cutânea grave.",
    "adverseEffects": "Cefaleia, diarreia, náusea y dor abdominal.; C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reação cutânea grave.",
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
    "safetyFlags": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reação cutânea grave.",
    "alerts": "C. difficile, nefrite intersticial, hipomagnesemia, deficiência de B12, fraturas y reação cutânea grave.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=rabeprazol",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=rabeprazol"
  }
};})();
/* GOLD33_SELECTIVE:rabeprazol:END */
/* GOLD33_SELECTIVE:risanquizumabe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="risanquizumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:risanquizumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["risanquizumabe"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:risanquizumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "068",
    "requiredFieldCount": 33,
    "approvedSha256": "7c3b2d3928792c6b8b17e56777218cc4e0927bcc162bbd5a90b8f36ec6eafb17",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Risanquizumabe",
    "class": "Anticorpo monoclonal anti-IL-23",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-23",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Seringas/canetas SC e frascos IV em apresentações dependentes da indicação.",
    "presentations": "Seringas/canetas SC e frascos IV em apresentações dependentes da indicação.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Psoríase em placas, artrite psoriásica e doença inflamatória intestinal conforme apresentação.",
    "dose": "Indução, manutenção, via e força variam por indicação. Avaliar tuberculose, infecções, vacinas e função hepática conforme regime; não intercambiar dispositivos.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, cefaleia, fadiga e reação no local.",
    "dangerousAdverseEffects": "Infecção grave, hipersensibilidade e lesão hepática em regimes específicos.",
    "adverseEffects": "Infecção respiratória, cefaleia, fadiga e reação no local.; Infecção grave, hipersensibilidade e lesão hepática em regimes específicos.",
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
    "safetyFlags": "Infecção grave, hipersensibilidade e lesão hepática em regimes específicos.",
    "alerts": "Infecção grave, hipersensibilidade e lesão hepática em regimes específicos.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risanquizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risanquizumabe"
  },
  "es": {
    "name": "Risanquizumabe",
    "class": "Anticorpo monoclonal anti-IL-23",
    "pharmacologicClass": "Anticorpo monoclonal anti-IL-23",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Seringas/canetas SC y frascos IV em apresentações dependentes da indicação.",
    "presentations": "Seringas/canetas SC y frascos IV em apresentações dependentes da indicação.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Psoríase em placas, artrite psoriásica y doença inflamatória intestinal conforme apresentação.",
    "dose": "Indução, manutenção, via y força variam por indicação. Avaliar tuberculose, infecções, vacinas y función hepática conforme regime; no intercambiar dispositivos.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, cefaleia, fadiga y reação no local.",
    "dangerousAdverseEffects": "Infecção grave, hipersensibilidade y lesão hepática em regimes específicos.",
    "adverseEffects": "Infecção respiratória, cefaleia, fadiga y reação no local.; Infecção grave, hipersensibilidade y lesão hepática em regimes específicos.",
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
    "safetyFlags": "Infecção grave, hipersensibilidade y lesão hepática em regimes específicos.",
    "alerts": "Infecção grave, hipersensibilidade y lesão hepática em regimes específicos.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risanquizumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risanquizumabe"
  }
};})();
/* GOLD33_SELECTIVE:risanquizumabe:END */
/* GOLD33_SELECTIVE:sene:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="sene";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:sene:"+matches.length);drug=matches[0];}else{drug=db&&db["sene"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:sene");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "071",
    "requiredFieldCount": 33,
    "approvedSha256": "b849afd77cf7c158749040cafef531ab52eee801c7628e215ab1c1f9f43270bb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Sene (senosídeos)",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Laxante estimulante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas, solução e combinações em concentrações variadas.",
    "presentations": "Comprimidos, cápsulas, solução e combinações em concentrações variadas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento de curto prazo da constipação; usos de preparo intestinal dependem de protocolo.",
    "dose": "Dose depende da concentração, idade e produto. Usar pelo menor período necessário e garantir avaliação se sintomas persistirem.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cólicas, dor abdominal, diarreia e náusea.",
    "dangerousAdverseEffects": "Desidratação, distúrbios eletrolíticos, dependência por abuso e melanose do cólon.",
    "adverseEffects": "Cólicas, dor abdominal, diarreia e náusea.; Desidratação, distúrbios eletrolíticos, dependência por abuso e melanose do cólon.",
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
    "safetyFlags": "Desidratação, distúrbios eletrolíticos, dependência por abuso e melanose do cólon.",
    "alerts": "Desidratação, distúrbios eletrolíticos, dependência por abuso e melanose do cólon.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sene",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sene"
  },
  "es": {
    "name": "Sene (senosídeos)",
    "class": "Laxante estimulante",
    "pharmacologicClass": "Laxante estimulante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas, solución y combinações em concentrações variadas.",
    "presentations": "Comprimidos, cápsulas, solución y combinações em concentrações variadas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento de curto prazo da constipação; usos de preparo intestinal dependem de protocolo.",
    "dose": "Dose depende da concentração, idade y produto. Usar pelo menor período necessário y garantir avaliação se sintomas persistirem.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Cólicas, dor abdominal, diarreia y náusea.",
    "dangerousAdverseEffects": "Desidratação, distúrbios eletrolíticos, dependência por abuso y melanose do cólon.",
    "adverseEffects": "Cólicas, dor abdominal, diarreia y náusea.; Desidratação, distúrbios eletrolíticos, dependência por abuso y melanose do cólon.",
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
    "safetyFlags": "Desidratação, distúrbios eletrolíticos, dependência por abuso y melanose do cólon.",
    "alerts": "Desidratação, distúrbios eletrolíticos, dependência por abuso y melanose do cólon.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sene",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sene"
  }
};})();
/* GOLD33_SELECTIVE:sene:END */
/* GOLD33_SELECTIVE:simeticona:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="simeticona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:simeticona:"+matches.length);drug=matches[0];}else{drug=db&&db["simeticona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:simeticona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "072",
    "requiredFieldCount": 33,
    "approvedSha256": "362a6b25ebe46297a638eea35ce1674a5b66bc62b45db9d1b599c5f1b9560b5b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Simeticona",
    "class": "Agente antiflatulento antiespumante",
    "pharmacologicClass": "Agente antiflatulento antiespumante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas, gotas e suspensão em concentrações variadas.",
    "presentations": "Comprimidos, cápsulas, gotas e suspensão em concentrações variadas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Alívio sintomático de gases e distensão; usos diagnósticos dependem de protocolo.",
    "dose": "Dose depende da concentração, idade e formulação. Medir líquidos com dispositivo apropriado; não extrapolar entre gotas e suspensão.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Constipação, diarreia e náusea são incomuns.",
    "dangerousAdverseEffects": "Hipersensibilidade e atraso na avaliação de sintomas abdominais persistentes.",
    "adverseEffects": "Constipação, diarreia e náusea são incomuns.; Hipersensibilidade e atraso na avaliação de sintomas abdominais persistentes.",
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
    "safetyFlags": "Hipersensibilidade e atraso na avaliação de sintomas abdominais persistentes.",
    "alerts": "Hipersensibilidade e atraso na avaliação de sintomas abdominais persistentes.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=simeticona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=simeticona"
  },
  "es": {
    "name": "Simeticona",
    "class": "Agente antiflatulento antiespumante",
    "pharmacologicClass": "Agente antiflatulento antiespumante",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas, gotas y suspensão em concentrações variadas.",
    "presentations": "Comprimidos, cápsulas, gotas y suspensão em concentrações variadas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Alívio sintomático de gases y distensão; usos diagnósticos dependem de protocolo.",
    "dose": "Dose depende da concentração, idade y formulação. Medir líquidos con dispositivo apropriado; no extrapolar entre gotas y suspensão.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Constipação, diarreia y náusea são incomuns.",
    "dangerousAdverseEffects": "Hipersensibilidade y atraso na avaliação de sintomas abdominais persistentes.",
    "adverseEffects": "Constipação, diarreia y náusea são incomuns.; Hipersensibilidade y atraso na avaliação de sintomas abdominais persistentes.",
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
    "safetyFlags": "Hipersensibilidade y atraso na avaliação de sintomas abdominais persistentes.",
    "alerts": "Hipersensibilidade y atraso na avaliação de sintomas abdominais persistentes.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=simeticona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=simeticona"
  }
};})();
/* GOLD33_SELECTIVE:simeticona:END */
/* GOLD33_SELECTIVE:subcitrato_de_bismuto:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="subcitrato_de_bismuto";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:subcitrato_de_bismuto:"+matches.length);drug=matches[0];}else{drug=db&&db["subcitrato_de_bismuto"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:subcitrato_de_bismuto");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "073",
    "requiredFieldCount": 33,
    "approvedSha256": "83cceddf3e8d81ef2cedf16f072feaba3de2b34348dee7c5839dcc4d80297ea8",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Subcitrato de bismuto",
    "class": "Agente protetor gastrointestinal com atividade contra H. pylori",
    "pharmacologicClass": "Agente protetor gastrointestinal com atividade contra H. pylori",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos ou cápsulas em sais e quantidades de bismuto específicas.",
    "presentations": "Comprimidos ou cápsulas em sais e quantidades de bismuto específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Componente de esquemas combinados para erradicação de H. pylori e outras indicações conforme produto.",
    "dose": "Dose e duração dependem da formulação e do esquema antibiótico. Confirmar quantidade de bismuto e evitar duplicidade com outros salicilatos/bismuto.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Escurecimento de fezes ou língua, náusea e constipação.",
    "dangerousAdverseEffects": "Neurotoxicidade por acúmulo, nefrotoxicidade e toxicidade por uso prolongado.",
    "adverseEffects": "Escurecimento de fezes ou língua, náusea e constipação.; Neurotoxicidade por acúmulo, nefrotoxicidade e toxicidade por uso prolongado.",
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
    "safetyFlags": "Neurotoxicidade por acúmulo, nefrotoxicidade e toxicidade por uso prolongado.",
    "alerts": "Neurotoxicidade por acúmulo, nefrotoxicidade e toxicidade por uso prolongado.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subcitrato+de+bismuto",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subcitrato+de+bismuto"
  },
  "es": {
    "name": "Subcitrato de bismuto",
    "class": "Agente protetor gastrointestinal con atividade contra H. pylori",
    "pharmacologicClass": "Agente protetor gastrointestinal con atividade contra H. pylori",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos ou cápsulas em sais y quantidades de bismuto específicas.",
    "presentations": "Comprimidos ou cápsulas em sais y quantidades de bismuto específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Componente de esquemas combinados para erradicação de H. pylori y outras indicações conforme produto.",
    "dose": "Dose y duração dependem da formulação y do esquema antibiótico. Confirmar quantidade de bismuto y evitar duplicidade con outros salicilatos/bismuto.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Escurecimento de fezes ou língua, náusea y constipação.",
    "dangerousAdverseEffects": "Neurotoxicidade por acúmulo, nefrotoxicidade y toxicidade por uso prolongado.",
    "adverseEffects": "Escurecimento de fezes ou língua, náusea y constipação.; Neurotoxicidade por acúmulo, nefrotoxicidade y toxicidade por uso prolongado.",
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
    "safetyFlags": "Neurotoxicidade por acúmulo, nefrotoxicidade y toxicidade por uso prolongado.",
    "alerts": "Neurotoxicidade por acúmulo, nefrotoxicidade y toxicidade por uso prolongado.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subcitrato+de+bismuto",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subcitrato+de+bismuto"
  }
};})();
/* GOLD33_SELECTIVE:subcitrato_de_bismuto:END */
/* GOLD33_SELECTIVE:subsalicilato_de_bismuto:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="subsalicilato_de_bismuto";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:subsalicilato_de_bismuto:"+matches.length);drug=matches[0];}else{drug=db&&db["subsalicilato_de_bismuto"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:subsalicilato_de_bismuto");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "073",
    "requiredFieldCount": 33,
    "approvedSha256": "83cceddf3e8d81ef2cedf16f072feaba3de2b34348dee7c5839dcc4d80297ea8",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Subsalicilato de bismuto",
    "class": "Agente antidiarreico e protetor gastrointestinal contendo salicilato",
    "pharmacologicClass": "Agente antidiarreico e protetor gastrointestinal contendo salicilato",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Suspensão e comprimidos mastigáveis em concentrações específicas.",
    "presentations": "Suspensão e comprimidos mastigáveis em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Alívio de diarreia, dispepsia e como componente de esquemas específicos para H. pylori.",
    "dose": "Dose depende da concentração, idade e indicação. Contabilizar exposição a salicilato; evitar em crianças/adolescentes com infecção viral.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Fezes ou língua escuras, náusea e constipação.",
    "dangerousAdverseEffects": "Salicilismo, sangramento, síndrome de Reye e neurotoxicidade por uso excessivo.",
    "adverseEffects": "Fezes ou língua escuras, náusea e constipação.; Salicilismo, sangramento, síndrome de Reye e neurotoxicidade por uso excessivo.",
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
    "safetyFlags": "Salicilismo, sangramento, síndrome de Reye e neurotoxicidade por uso excessivo.",
    "alerts": "Salicilismo, sangramento, síndrome de Reye e neurotoxicidade por uso excessivo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subsalicilato+de+bismuto",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subsalicilato+de+bismuto"
  },
  "es": {
    "name": "Subsalicilato de bismuto",
    "class": "Agente antidiarreico y protetor gastrointestinal contendo salicilato",
    "pharmacologicClass": "Agente antidiarreico y protetor gastrointestinal contendo salicilato",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Suspensão y comprimidos mastigáveis em concentrações específicas.",
    "presentations": "Suspensão y comprimidos mastigáveis em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Alívio de diarreia, dispepsia y como componente de esquemas específicos para H. pylori.",
    "dose": "Dose depende da concentração, idade y indicação. Contabilizar exposição a salicilato; evitar em niños/adolescentes con infecção viral.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Fezes ou língua escuras, náusea y constipação.",
    "dangerousAdverseEffects": "Salicilismo, sangramento, síndrome de Reye y neurotoxicidade por uso excessivo.",
    "adverseEffects": "Fezes ou língua escuras, náusea y constipação.; Salicilismo, sangramento, síndrome de Reye y neurotoxicidade por uso excessivo.",
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
    "safetyFlags": "Salicilismo, sangramento, síndrome de Reye y neurotoxicidade por uso excessivo.",
    "alerts": "Salicilismo, sangramento, síndrome de Reye y neurotoxicidade por uso excessivo.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subsalicilato+de+bismuto",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=subsalicilato+de+bismuto"
  }
};})();
/* GOLD33_SELECTIVE:subsalicilato_de_bismuto:END */
/* GOLD33_SELECTIVE:sucralfato:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="sucralfato";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:sucralfato:"+matches.length);drug=matches[0];}else{drug=db&&db["sucralfato"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:sucralfato");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "073",
    "requiredFieldCount": 33,
    "approvedSha256": "83cceddf3e8d81ef2cedf16f072feaba3de2b34348dee7c5839dcc4d80297ea8",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Sucralfato",
    "class": "Protetor da mucosa gastrointestinal",
    "pharmacologicClass": "Protetor da mucosa gastrointestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos e suspensão oral em concentrações específicas.",
    "presentations": "Comprimidos e suspensão oral em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Tratamento de úlcera duodenal e outras utilizações conforme rótulo.",
    "dose": "Administrar em jejum e separar de medicamentos cuja absorção possa ser reduzida. Ajustar cautela em insuficiência renal devido ao alumínio.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Constipação, boca seca, náusea e indigestão.",
    "dangerousAdverseEffects": "Bezoar, toxicidade por alumínio em insuficiência renal e obstrução de sonda.",
    "adverseEffects": "Constipação, boca seca, náusea e indigestão.; Bezoar, toxicidade por alumínio em insuficiência renal e obstrução de sonda.",
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
    "safetyFlags": "Bezoar, toxicidade por alumínio em insuficiência renal e obstrução de sonda.",
    "alerts": "Bezoar, toxicidade por alumínio em insuficiência renal e obstrução de sonda.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sucralfato",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sucralfato"
  },
  "es": {
    "name": "Sucralfato",
    "class": "Protetor da mucosa gastrointestinal",
    "pharmacologicClass": "Protetor da mucosa gastrointestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos y suspensão oral em concentrações específicas.",
    "presentations": "Comprimidos y suspensão oral em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Tratamento de úlcera duodenal y outras utilizações conforme rótulo.",
    "dose": "Administrar em jejum y separar de medicamentos cuja absorção possa ser reduzida. Ajustar cautela em insuficiência renal devido ao alumínio.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Constipação, boca seca, náusea y indigestão.",
    "dangerousAdverseEffects": "Bezoar, toxicidade por alumínio em insuficiência renal y obstrução de sonda.",
    "adverseEffects": "Constipação, boca seca, náusea y indigestão.; Bezoar, toxicidade por alumínio em insuficiência renal y obstrução de sonda.",
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
    "safetyFlags": "Bezoar, toxicidade por alumínio em insuficiência renal y obstrução de sonda.",
    "alerts": "Bezoar, toxicidade por alumínio em insuficiência renal y obstrução de sonda.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sucralfato",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sucralfato"
  }
};})();
/* GOLD33_SELECTIVE:sucralfato:END */
/* GOLD33_SELECTIVE:tofacitinibe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="tofacitinibe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tofacitinibe:"+matches.length);drug=matches[0];}else{drug=db&&db["tofacitinibe"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="tofacitinibe";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tofacitinibe:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:tofacitinibe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "078",
    "requiredFieldCount": 33,
    "approvedSha256": "c74f4659aceb61827e4dc144af9f32d11d494f3956ebab31e00a0a7398e3d84c",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Tofacitinibe",
    "class": "Inibidor de Janus quinases",
    "pharmacologicClass": "Inibidor de Janus quinases",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos IR, liberação prolongada e solução oral.",
    "presentations": "Comprimidos IR, liberação prolongada e solução oral.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Artrites inflamatórias, colite ulcerativa e outras indicações aprovadas em pacientes selecionados.",
    "dose": "Dose depende da indicação, formulação, função renal/hepática e interações. Usar menor dose eficaz e avaliar tuberculose, hepatites, hemograma e risco cardiovascular/trombótico.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, cefaleia, diarreia e aumento de lipídios.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
    "adverseEffects": "Infecção respiratória, cefaleia, diarreia e aumento de lipídios.; Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
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
    "safetyFlags": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
    "alerts": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tofacitinibe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tofacitinibe"
  },
  "es": {
    "name": "Tofacitinibe",
    "class": "Inibidor de Janus quinases",
    "pharmacologicClass": "Inibidor de Janus quinases",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos IR, liberação prolongada y solución oral.",
    "presentations": "Comprimidos IR, liberação prolongada y solución oral.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Artrites inflamatórias, colite ulcerativa y outras indicações aprovadas em pacientes selecionados.",
    "dose": "Dose depende da indicação, formulação, función renal/hepática y interações. Usar menor dosis eficaz y avaliar tuberculose, hepatites, hemograma y risco cardiovascular/trombótico.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, cefaleia, diarreia y aumento de lipídios.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
    "adverseEffects": "Infecção respiratória, cefaleia, diarreia y aumento de lipídios.; Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
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
    "safetyFlags": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
    "alerts": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tofacitinibe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tofacitinibe"
  }
};})();
/* GOLD33_SELECTIVE:tofacitinibe:END */
/* GOLD33_SELECTIVE:trimebutina:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="trimebutina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:trimebutina:"+matches.length);drug=matches[0];}else{drug=db&&db["trimebutina"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="trimebutina";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:trimebutina:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:trimebutina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "079",
    "requiredFieldCount": 33,
    "approvedSha256": "93d982fa330e017ae144b7449e7c25c94c7c1d86a3f0c1d8812549812e6fc9c1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Trimebutina",
    "class": "Modulador periférico da motilidade gastrointestinal",
    "pharmacologicClass": "Modulador periférico da motilidade gastrointestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas e suspensão oral em concentrações específicas.",
    "presentations": "Comprimidos, cápsulas e suspensão oral em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Distúrbios funcionais gastrointestinais onde aprovada, conforme sintomas e jurisdição.",
    "dose": "Dose e duração dependem da formulação, idade e rótulo local. Confirmar concentração pediátrica e excluir sinais de alarme antes do tratamento sintomático.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Boca seca, náusea, constipação, diarreia e tontura.",
    "dangerousAdverseEffects": "Hipersensibilidade, hipotensão e reações cutâneas graves raras.",
    "adverseEffects": "Boca seca, náusea, constipação, diarreia e tontura.; Hipersensibilidade, hipotensão e reações cutâneas graves raras.",
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
    "safetyFlags": "Hipersensibilidade, hipotensão e reações cutâneas graves raras.",
    "alerts": "Hipersensibilidade, hipotensão e reações cutâneas graves raras.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trimebutina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trimebutina"
  },
  "es": {
    "name": "Trimebutina",
    "class": "Modulador periférico da motilidade gastrointestinal",
    "pharmacologicClass": "Modulador periférico da motilidade gastrointestinal",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, cápsulas y suspensão oral em concentrações específicas.",
    "presentations": "Comprimidos, cápsulas y suspensão oral em concentrações específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Distúrbios funcionais gastrointestinais onde aprovada, conforme sintomas y jurisdição.",
    "dose": "Dose y duração dependem da formulação, idade y rótulo local. Confirmar concentração pediátrica y excluir sinais de alarme antes do tratamento sintomático.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Boca seca, náusea, constipação, diarreia y tontura.",
    "dangerousAdverseEffects": "Hipersensibilidade, hipotensão y reações cutâneas graves raras.",
    "adverseEffects": "Boca seca, náusea, constipação, diarreia y tontura.; Hipersensibilidade, hipotensão y reações cutâneas graves raras.",
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
    "safetyFlags": "Hipersensibilidade, hipotensão y reações cutâneas graves raras.",
    "alerts": "Hipersensibilidade, hipotensão y reações cutâneas graves raras.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trimebutina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trimebutina"
  }
};})();
/* GOLD33_SELECTIVE:trimebutina:END */
/* GOLD33_SELECTIVE:upadacitinibe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="upadacitinibe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:upadacitinibe:"+matches.length);drug=matches[0];}else{drug=db&&db["upadacitinibe"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="upadacitinibe";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:upadacitinibe:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:upadacitinibe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "080",
    "requiredFieldCount": 33,
    "approvedSha256": "643f72271736a174835d1af1735db1daa57bdee524910c9fc9299b7ef770c2f1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Upadacitinibe",
    "class": "Inibidor seletivo de Janus quinases",
    "pharmacologicClass": "Inibidor seletivo de Janus quinases",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de liberação prolongada e solução oral em forças específicas.",
    "presentations": "Comprimidos de liberação prolongada e solução oral em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Doenças inflamatórias reumatológicas, dermatológicas e intestinais em pacientes selecionados conforme indicação.",
    "dose": "Dose depende da indicação, idade e função renal/hepática. Avaliar tuberculose, hepatites, hemograma, lipídios, gravidez e risco cardiovascular/trombótico.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, acne, náusea e aumento de CPK.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
    "adverseEffects": "Infecção respiratória, acne, náusea e aumento de CPK.; Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
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
    "safetyFlags": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.",
    "alerts": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal e citopenias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=upadacitinibe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=upadacitinibe"
  },
  "es": {
    "name": "Upadacitinibe",
    "class": "Inibidor seletivo de Janus quinases",
    "pharmacologicClass": "Inibidor seletivo de Janus quinases",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos de liberação prolongada y solución oral em forças específicas.",
    "presentations": "Comprimidos de liberação prolongada y solución oral em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Doenças inflamatórias reumatológicas, dermatológicas y intestinais em pacientes selecionados conforme indicação.",
    "dose": "Dose depende da indicação, idade y función renal/hepática. Avaliar tuberculose, hepatites, hemograma, lipídios, gravidez y risco cardiovascular/trombótico.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Infecção respiratória, acne, náusea y aumento de CPK.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
    "adverseEffects": "Infecção respiratória, acne, náusea y aumento de CPK.; Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
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
    "safetyFlags": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.",
    "alerts": "Infecção grave, malignidade, trombose, eventos cardiovasculares, perfuração gastrointestinal y citopenias.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=upadacitinibe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=upadacitinibe"
  }
};})();
/* GOLD33_SELECTIVE:upadacitinibe:END */
/* GOLD33_SELECTIVE:ustekinumabe:START */
;(function(){var db=window.GASTROENTEROLOGIA_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="ustekinumabe";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:ustekinumabe:"+matches.length);drug=matches[0];}else{drug=db&&db["ustekinumabe"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="ustekinumabe";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:ustekinumabe:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:ustekinumabe");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "080",
    "requiredFieldCount": 33,
    "approvedSha256": "643f72271736a174835d1af1735db1daa57bdee524910c9fc9299b7ef770c2f1",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Ustequinumabe",
    "class": "Anticorpo monoclonal contra IL-12/23 p40",
    "pharmacologicClass": "Anticorpo monoclonal contra IL-12/23 p40",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frascos IV e seringas/frascos SC em forças específicas.",
    "presentations": "Frascos IV e seringas/frascos SC em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Psoríase, artrite psoriásica e doenças inflamatórias intestinais conforme idade e formulação.",
    "dose": "Dose, via e intervalo dependem da indicação e peso. Doença intestinal utiliza indução IV seguida de manutenção SC; avaliar tuberculose e infecção.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, cefaleia, fadiga e reação no local.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, anafilaxia e síndrome de encefalopatia posterior reversível.",
    "adverseEffects": "Nasofaringite, cefaleia, fadiga e reação no local.; Infecção grave, malignidade, anafilaxia e síndrome de encefalopatia posterior reversível.",
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
    "safetyFlags": "Infecção grave, malignidade, anafilaxia e síndrome de encefalopatia posterior reversível.",
    "alerts": "Infecção grave, malignidade, anafilaxia e síndrome de encefalopatia posterior reversível.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ustekinumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ustekinumabe"
  },
  "es": {
    "name": "Ustequinumabe",
    "class": "Anticorpo monoclonal contra IL-12/23 p40",
    "pharmacologicClass": "Anticorpo monoclonal contra IL-12/23 p40",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Frascos IV y seringas/frascos SC em forças específicas.",
    "presentations": "Frascos IV y seringas/frascos SC em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Psoríase, artrite psoriásica y doenças inflamatórias intestinais conforme idade y formulação.",
    "dose": "Dose, via y intervalo dependem da indicação y peso. Doença intestinal utiliza indução IV seguida de manutenção SC; avaliar tuberculose y infecção.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Nasofaringite, cefaleia, fadiga y reação no local.",
    "dangerousAdverseEffects": "Infecção grave, malignidade, anafilaxia y síndrome de encefalopatia posterior reversível.",
    "adverseEffects": "Nasofaringite, cefaleia, fadiga y reação no local.; Infecção grave, malignidade, anafilaxia y síndrome de encefalopatia posterior reversível.",
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
    "safetyFlags": "Infecção grave, malignidade, anafilaxia y síndrome de encefalopatia posterior reversível.",
    "alerts": "Infecção grave, malignidade, anafilaxia y síndrome de encefalopatia posterior reversível.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ustekinumabe",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ustekinumabe"
  }
};})();
/* GOLD33_SELECTIVE:ustekinumabe:END */
