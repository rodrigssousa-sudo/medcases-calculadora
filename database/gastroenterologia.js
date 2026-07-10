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
      id: 'proclorperazina',
      name: { pt: 'Proclorperazina', es: 'Proclorperazina' },
      category: 'gastroenterologia',
      class: { pt: 'Antiemético e Antipsicótico Típico (Fenotiazínico)', es: 'Antiemético y Antipsicótico Típico (Fenotiazínico)' },
      indications: {
        pt: ['Náuseas e vômitos severos (Pós-operatório, Câncer ou Vertigem intensa)', 'Tratamento agudo de Enxaqueca no Pronto-Socorro', 'Esquizofrenia e mania aguda'],
        es: ['Náuseas y vómitos severos (Posoperatorio, Cáncer o Vértigo intenso)', 'Tratamiento agudo de Migraña en Urgencias', 'Esquizofrenia y manía aguda']
      },
      commercialNames: { br: ['Compazine (EUA/Importado)', 'Stemetil (Descontinuado em várias regiões, mas classe vital)'], ar: ['Stemetil'] },
      presentation: { pt: ['Comprimidos 5 mg e 10 mg', 'Ampolas IV/IM 5 mg/mL', 'Supositórios 25 mg'], es: ['Comprimidos 5 mg y 10 mg', 'Ampollas IV/IM 5 mg/mL', 'Supositorios 25 mg'] },
      mechanism: {
        pt: 'Drogas fenotiazínicas bloqueiam potentemente os receptores D2 (Dopamina) diretamente na Zona de Gatilho Quimiorreceptora no cérebro (o centro do vômito). Ao travar a dopamina, o paciente para de vomitar imediatamente. Na emergência, atua desinflamando a cascata da enxaqueca grave, muitas vezes curando a dor quando os analgésicos falham.',
        es: 'Bloquea potentemente los receptores D2 (Dopamina) directamente en la Zona Gatillo Quimiorreceptora en el cerebro (el centro del vómito). Al frenar la dopamina, el paciente deja de vomitar de inmediato. En urgencias, cura el dolor de migraña grave cuando fallan los analgésicos.'
      },
      dose: {
        adult: { pt: 'Náusea: 5 a 10 mg via oral a cada 6-8 horas. Emergência/Enxaqueca: 10 mg Intramuscular profundo (ou IV muito lento).', es: 'Náusea: 5 a 10 mg vía oral cada 6-8 horas. Emergencia/Migraña: 10 mg Intramuscular profundo (o IV muy lento).' },
        pediatric: { pt: 'Geralmente contraindicado em crianças < 2 anos ou < 9 kg (risco letal de depressão respiratória e distonia).', es: 'Generalmente contraindicado en niños < 2 años o < 9 kg (riesgo letal de depresión respiratoria y distonía).' }
      },
      administration: { pt: ['A via Intravenosa requer diluição e administração extremamente lenta devido ao risco de hipotensão severa e colapso cardíaco.'], es: ['La vía Intravenosa requiere dilución y administración extremadamente lenta debido al riesgo de hipotensión severa y colapso cardíaco.'] },
      renalAdjustment: { required: false, message: { pt: 'Não há ajuste formal, mas monitorar metabólitos.', es: 'No hay ajuste formal, pero monitorizar metabolitos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático extenso. Contraindicado em falência hepática grave (Risco de coma hepático).', es: 'Metabolismo hepático extenso. Contraindicado en falla hepática grave (Riesgo de coma hepático).' } },
      commonAdverseEffects: { pt: ['Sonolência pesada e letargia', 'Acatisia (Incapacidade angustiante de ficar parado - o paciente "pula" da maca do PS)', 'Boca seca e visão turva (efeito anticolinérgico)'], es: ['Somnolencia pesada y letargo', 'Acatisia (Incapacidad angustiante de quedarse quieto)', 'Boca seca y visión borrosa (efecto anticolinérgico)'] },
      dangerousAdverseEffects: { pt: ['Reação Distônica Aguda (O pescoço "trava" olhando pra cima e a língua enrola)', 'Síndrome Neuroléptica Maligna (Febre de 41ºC, rigidez de cano de chumbo, morte)', 'Agranulocitose e Prolongamento QT'], es: ['Reacción Distónica Aguda (El cuello "se traba" y la lengua se enrolla)', 'Síndrome Neuroléptico Maligno (Fiebre de 41ºC, rigidez extrema, muerte)', 'Agranulocitosis y Prolongación QT'] },
      contraindications: {
        absolute: { pt: ['Depressão grave do Sistema Nervoso ou Coma', 'Crianças < 2 anos', 'Doença de Parkinson (Piora o tremor brutalmente)'], es: ['Depresión grave del Sistema Nervioso o Coma', 'Niños < 2 años', 'Enfermedad de Parkinson (Empeora el temblor brutalmente)'] },
        relative: { pt: ['Idosos com demência (Aumenta risco de morte súbita, alerta Black Box)'], es: ['Ancianos con demencia (Aumenta riesgo de muerte súbita, alerta Black Box)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ANTÍDOTO DA DISTONIA: Se o paciente receber Proclorperazina IV e a cabeça dele "entortar e travar" subitamente olhando para trás (Crise Oculógira/Distonia), aplique imediatamente Biperideno IV ou Prometazina IM. O paciente relaxa e volta ao normal na frente dos seus olhos.', es: 'EL ANTÍDOTO DE LA DISTONÍA: Si el paciente recibe Proclorperazina IV y su cabeza "se tuerce y traba" súbitamente mirando hacia atrás (Crisis Oculógira), aplique inmediatamente Biperideno IV o Prometazina IM. El paciente se relaja de inmediato.' }
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

})();
