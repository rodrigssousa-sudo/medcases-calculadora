(function () {
  'use strict';
  if (typeof window.GASTROENTEROLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.GASTROENTEROLOGIA_DRUGS_DB)) {
    window.GASTROENTEROLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.GASTROENTEROLOGIA_DRUGS_DB, {

/* ── OMEPRAZOL ──────────────────────────────────────────────────────── */
    "omeprazol": {
      name: { pt: 'Omeprazol', es: 'Omeprazol' },
      category: 'gastroenterologia',
      class: { pt: 'Inibidor da Bomba de Prótons (IBP)', es: 'Inhibidor de la Bomba de Protones (IBP)' },
      indications: {
        pt: ['Profilaxia de úlcera de estresse em UTI', 'Hemorragia Digestiva Alta (HDA) não-varicosa (úlcera sangrante)', 'Doença do Refluxo Gastroesofágico (DRGE) e erradicação do H. pylori'],
        es: ['Profilaxis de úlcera de estrés en UCI', 'Hemorragia Digestiva Alta (HDA) no varicosa (úlcera sangrante)', 'Enfermedad por Reflujo Gastroesofágico (ERGE) y erradicación de H. pylori']
      },
      commercialNames: { br: ['Losec', 'Peprazol'], ar: ['Losec', 'Omeprazol'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 40 mg', 'Cápsulas duras 20 mg, 40 mg'], es: ['Vial IV liofilizado 40 mg', 'Cápsulas duras 20 mg, 40 mg'] },
      mechanism: {
        pt: 'Pró-fármaco que se concentra nas células parietais do estômago em ambiente extremamente ácido. Lá, ele se converte em sua forma ativa e liga-se de forma IRREVERSÍVEL à enzima H+/K+ ATPase (a Bomba de Prótons). Essa ligação trava a produção final de ácido clorídrico (HCl), elevando o pH gástrico quase a zero de acidez por até 24 horas. É um POTENTE INIBIDOR da enzima hepática CYP2C19.',
        es: 'Profármaco que se concentra en las células parietales del estómago en ambiente extremadamente ácido. Allí, se convierte en su forma activa y se une de forma IRREVERSIBLE a la enzima H+/K+ ATPasa (la Bomba de Protones). Esta unión traba la producción final de ácido clorhídrico (HCl), elevando el pH gástrico casi a cero de acidez por hasta 24 horas. Es un POTENTE INHIBIDOR de la enzima hepática CYP2C19.'
      },
      dose: {
        adult: {
          pt: 'HDA (Úlcera sangrante ativa): Bolus IV de 80 mg, seguido de infusão contínua de 8 mg/hora por 72 horas. Profilaxia UTI: 40 mg IV ou VO 1x/dia.',
          es: 'HDA (Úlcera sangrante activa): Bolo IV de 80 mg, seguido de infusión continua de 8 mg/hora por 72 horas. Profilaxis UCI: 40 mg IV o VO 1 vez/día.'
        },
        pediatric: {
          pt: '1 a 2 mg/kg/dia IV ou VO (1 ou 2 tomadas).',
          es: '1 a 2 mg/kg/día IV o VO (1 o 2 tomas).'
        }
      },
      administration: { pt: ['Ampola IV: Reconstituir apenas com o diluente próprio fornecido. A injeção direta deve durar pelo menos 2 a 5 minutos.', 'Cápsulas VO: Devem ser tomadas em JEJUM, 30 minutos antes do café da manhã.'], es: ['Ampolla IV: Reconstituir solo con el diluyente propio suministrado. La inyección directa debe durar al menos 2 a 5 minutos.', 'Cápsulas VO: Deben ser tomadas en AYUNAS, 30 minutos antes del desayuno.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em doença renal.', es: 'No requiere ajuste en enfermedad renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Altamente metabolizado no fígado. Em cirróticos graves (Child-Pugh C), limitar a 20 mg/dia.', es: 'Altamente metabolizado en el hígado. En cirróticos graves (Child-Pugh C), limitar a 20 mg/día.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Diarreia ou dor abdominal transitória', 'Náuseas'], es: ['Cefalea', 'Diarrea o dolor abdominal transitorio', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Pneumonia associada à ventilação (a falta de ácido permite colonização bacteriana no estômago que sobe pro pulmão)', 'Hipomagnesemia severa (uso prolongado crônico)', 'Risco de colite por Clostridioides difficile'], es: ['Neumonía asociada a la ventilación (la falta de ácido permite colonización bacteriana en estómago que sube al pulmón)', 'Hipomagnesemia severa (uso prolongado crónico)', 'Riesgo de colitis por Clostridioides difficile'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade aos benzimidazóis'], es: ['Hipersensibilidad a los benzimidazoles'] },
        relative: { pt: ['Uso concomitante com Clopidogrel (no IAM/Stent)'], es: ['Uso concomitante con Clopidogrel (en IAM/Stent)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SUPERUSO CRÔNICO: Na UTI, apenas pacientes com coagulopatia, ventilação mecânica invasiva ou trauma grave precisam de IBP. Não inicie Omeprazol profilático para pacientes jovens, sem tubo e alimentando-se bem, pois eleva o risco de pneumonia nosocomial e infecção por C. difficile.', es: 'SOBREUSO CRÓNICO: En la UCI, solo pacientes con coagulopatía, ventilación mecánica invasiva o trauma grave necesitan IBP. No inicie Omeprazol profiláctico para pacientes jóvenes, sin tubo y alimentándose bien, pues eleva el riesgo de neumonía nosocomial e infección por C. difficile.' }
      }
    },

/* ── PANTOPRAZOL ────────────────────────────────────────────────────── */
    "pantoprazol": {
      name: { pt: 'Pantoprazol', es: 'Pantoprazol' },
      category: 'gastroenterologia',
      class: { pt: 'Inibidor da Bomba de Prótons (IBP)', es: 'Inhibidor de la Bomba de Protones (IBP)' },
      indications: {
        pt: ['Profilaxia de úlcera de estresse e tratamento de HDA', 'Paciente de UTI em uso de dupla antiagregação plaquetária (Stent coronariano) onde o Omeprazol é proibido'],
        es: ['Profilaxis de úlcera de estrés y tratamiento de HDA', 'Paciente de UCI en uso de doble antiagregación plaquetaria (Stent coronario) donde el Omeprazol está prohibido']
      },
      commercialNames: { br: ['Pantocal', 'Zurcal'], ar: ['Pantus'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 40 mg', 'Comprimidos revestidos 20 mg, 40 mg'], es: ['Vial IV liofilizado 40 mg', 'Comprimidos recubiertos 20 mg, 40 mg'] },
      mechanism: {
        pt: 'Idêntico ao omeprazol (inibe irreversivelmente a bomba H+/K+ ATPase nas células parietais). GRANDE VANTAGEM FARMACOLÓGICA: O Pantoprazol NÃO tem afinidade clínica relevante pela enzima CYP2C19 no fígado. Isso significa que ele zera a acidez gástrica sem interferir no metabolismo de outros medicamentos da cardiologia e psiquiatria.',
        es: 'Idéntico al omeprazol (inhibe irreversiblemente la bomba H+/K+ ATPasa en las células parietales). GRAN VENTAJA FARMACOLÓGICA: El Pantoprazol NO tiene afinidad clínica relevante por la enzima CYP2C19 en el hígado. Esto significa que elimina la acidez gástrica sin interferir en el metabolismo de otros medicamentos de cardiología y psiquiatría.'
      },
      dose: {
        adult: {
          pt: 'HDA: Bolus 80 mg IV, depois infusão contínua 8 mg/h. Profilaxia em UTI: 40 mg IV 1x/dia.',
          es: 'HDA: Bolo 80 mg IV, luego infusión continua 8 mg/h. Profilaxis en UCI: 40 mg IV 1 vez/día.'
        },
        pediatric: {
          pt: '1 a 2 mg/kg/dia (off-label dependendo do protocolo).',
          es: '1 a 2 mg/kg/día (off-label dependiendo del protocolo).'
        }
      },
      administration: { pt: ['Reconstituição IV estrita: usar 10 mL de Soro Fisiológico no frasco, depois diluir no soro principal. Administrar IV lento.', 'O comprimido VO não deve ser mastigado ou partido.'], es: ['Reconstitución IV estricta: usar 10 mL de Suero Fisiológico en el vial, luego diluir en el suero principal. Administrar IV lento.', 'El comprimido VO no debe ser masticado o partido.'] },
      renalAdjustment: { required: false, message: { pt: 'Nenhum ajuste necessário.', es: 'Ningún ajuste necesario.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose grave (Child C), limitar a 20 mg/dia ou em dias alternados.', es: 'En cirrosis grave (Child C), limitar a 20 mg/día o en días alternos.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Tontura e distúrbios gástricos transitórios'], es: ['Cefalea', 'Mareo y disturbios gástricos transitorios'] },
      dangerousAdverseEffects: { pt: ['Nefrite Intersticial Aguda (NIA) idiossincrática imunológica, que leva a falência renal', 'Hipomagnesemia e Deficiência de Vitamina B12 (uso prolongado)'], es: ['Nefritis Intersticial Aguda (NIA) idiosincrásica inmunológica, que lleva a falla renal', 'Hipomagnesemia y Deficiencia de Vitamina B12 (uso prolongado)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao pantoprazol'], es: ['Hipersensibilidad al pantoprazol'] },
        relative: { pt: ['Uso associado com Itraconazol/Posaconazol (precisam de acidez para absorver)'], es: ['Uso asociado con Itraconazol/Posaconazol (necesitan acidez para absorber)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Ouro na Cardiologia Intensiva: Se o paciente sofrer um Infarto e precisar tomar Clopidogrel para salvar o Stent, a ÚNICA prescrição segura para proteger o estômago dele é o Pantoprazol.', es: 'Oro en la Cardiología Intensiva: Si el paciente sufre un Infarto y necesita tomar Clopidogrel para salvar el Stent, la ÚNICA prescripción segura para proteger su estómago es el Pantoprazol.' }
      }
    },

/* ── LACTULOSE ──────────────────────────────────────────────────────── */
    "lactulose": {
      name: { pt: 'Lactulose', es: 'Lactulosa' },
      category: 'gastroenterologia',
      class: { pt: 'Laxante Osmótico / Amônia-Quelante', es: 'Laxante Osmótico / Quelante de Amoníaco' },
      indications: {
        pt: ['Prevenção e Tratamento do Coma Hepático / Encefalopatia Hepática', 'Constipação intestinal crônica'],
        es: ['Prevención y Tratamiento del Coma Hepático / Encefalopatía Hepática', 'Constipación intestinal crónica']
      },
      commercialNames: { br: ['Lactulona', 'Farlac'], ar: ['Lactulón'] },
      presentation: { pt: ['Xarope/Solução Oral 667 mg/mL'], es: ['Jarabe/Solución Oral 667 mg/mL'] },
      mechanism: {
        pt: 'É um açúcar sintético (dissacarídeo) que o corpo humano não consegue absorver nem digerir. Ao chegar no cólon, as bactérias intestinais o fermentam transformando-o em ácido lático e acético. Essa "acidificação" do intestino aprisiona a Amônia tóxica (NH3) do cirrótico transformando-a em Íon Amônio (NH4+) que não consegue cruzar a parede intestinal para o sangue, sendo limpo e excretado nas fezes (efeito de lavagem).',
        es: 'Es un azúcar sintético (disacárido) que el cuerpo humano no logra absorber ni digerir. Al llegar al colon, las bacterias intestinales lo fermentan transformándolo en ácido láctico y acético. Esta "acidificación" del intestino atrapa el Amoníaco tóxico (NH3) del cirrótico transformándolo en Ion Amonio (NH4+) que no logra cruzar la pared intestinal hacia la sangre, siendo limpiado y excretado en las heces (efecto de lavado).'
      },
      dose: {
        adult: {
          pt: 'Encefalopatia (Coma Hepático): 20 a 30 mL VO/SNG a cada 1 a 2 horas (Ataque até evacuar fezes moles). Manutenção: 15 a 30 mL 3x/dia. Alvo: 2 a 3 evacuações pastosas/dia.',
          es: 'Encefalopatía (Coma Hepático): 20 a 30 mL VO/SNG cada 1 a 2 horas (Ataque hasta evacuar heces blandas). Mantenimiento: 15 a 30 mL 3 veces/día. Objetivo: 2 a 3 evacuaciones pastosas/día.'
        },
        pediatric: {
          pt: 'Constipação: 1 a 3 mL/kg/dia (dividido em 2 tomadas).',
          es: 'Constipación: 1 a 3 mL/kg/día (dividido en 2 tomas).'
        }
      },
      administration: { pt: ['Via puramente Oral, Sonda Enteral ou por Enema Retal (clister). NUNCA injetável.', 'O Xarope é absurdamente doce e enjoativo, pode ser diluído em sucos ou água.'], es: ['Vía puramente Oral, Sonda Enteral o por Enema Rectal (clisma). NUNCA inyectable.', 'El Jarabe es absurdamente dulce y empalagoso, puede ser diluido en jugos o agua.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste (não é absorvido).', es: 'No requiere ajuste (no es absorbido).' } },
      hepaticAdjustment: { required: false, message: { pt: 'A droga salva a vida do paciente hepático. Uso amplo.', es: 'La droga salva la vida del paciente hepático. Uso amplio.' } },
      commonAdverseEffects: { pt: ['Meteorismo e Flatulência (gases e cólica violenta inicial)', 'Diarreia e desidratação'], es: ['Meteorismo y Flatulencia (gases y cólico violento inicial)', 'Diarrea y deshidratación'] },
      dangerousAdverseEffects: { pt: ['Hipernatremia e Hipocalemia graves (o excesso do remédio causa perda de água livre e eletrólitos nas fezes, piorando a confusão mental se não hidratado)'], es: ['Hipernatremia e Hipopotasemia graves (el exceso del remedio causa pérdida de agua libre y electrolitos en las heces, empeorando la confusión mental si no es hidratado)'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal mecânica', 'Galactosemia ou intolerância hereditária à frutose/galactose'], es: ['Obstrucción intestinal mecánica', 'Galactosemia o intolerancia hereditaria a la fructosa/galactosa'] },
        relative: { pt: ['Perfuração gastrointestinal suspeita'], es: ['Perforación gastrointestinal sospechosa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Na Encefalopatia Hepática na UTI, a prescrição deve ser rigorosamente "TITULADA PARA CAUSAR DIARREIA". O erro número 1 do médico júnior é dar pouca lactulose e o paciente não defecar. Se não defecar, a amônia sobe e o paciente rebaixa e morre.', es: 'En la Encefalopatía Hepática en la UCI, la prescripción debe ser rigurosamente "TITULADA PARA CAUSAR DIARREA". El error número 1 del médico junior es dar poca lactulosa y el paciente no defecar. Si no defeca, el amoníaco sube y el paciente decae y muere.' }
      }
    },

/* ── TERLIPRESSINA ──────────────────────────────────────────────────── */
    "terlipressina": {
      name: { pt: 'Terlipressina', es: 'Terlipresina' },
      category: 'gastroenterologia',
      class: { pt: 'Análogo Sintético da Vasopressina', es: 'Análogo Sintético de la Vasopresina' },
      indications: {
        pt: ['Hemorragia aguda por ruptura de Varizes Esofágicas em cirróticos', 'Síndrome Hepatorrenal Tipo 1 (reverte a falência dos rins no paciente hepático)'],
        es: ['Hemorragia aguda por ruptura de Várices Esofágicas en cirróticos', 'Síndrome Hepatorrenal Tipo 1 (revierte el fallo de los riñones en el paciente hepático)']
      },
      commercialNames: { br: ['Glypressin'], ar: ['Glypressin'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 1 mg'], es: ['Vial IV liofilizado 1 mg'] },
      mechanism: {
        pt: 'Pró-fármaco que se converte lentamente em lisina-vasopressina. Ele estimula brutalmente os receptores V1 nas veias dos órgãos abdominais (área esplâncnica). Essa vasoconstrição maciça "enforca" a chegada de sangue ao fígado, reduzindo imediatamente a pressão na veia porta e interrompendo o jato de sangue das varizes rompidas no esôfago. Na Síndrome Hepatorrenal, esse redirecionamento de sangue melhora a perfusão dos rins esquecidos.',
        es: 'Profármaco que se convierte lentamente en lisina-vasopresina. Estimula brutalmente los receptores V1 en las venas de los órganos abdominales (área esplácnica). Esta vasoconstricción masiva "ahorca" la llegada de sangre al hígado, reduciendo inmediatamente la presión en la vena porta e interrumpiendo el chorro de sangre de las várices rotas en el esófago. En el Síndrome Hepatorrenal, este redireccionamiento de sangre mejora la perfusión de los riñones olvidados.'
      },
      dose: {
        adult: {
          pt: 'Hemorragia Esofágica: 2 mg IV a cada 4h nas primeiras 24h, depois 1 mg a cada 4h por mais 2 a 5 dias. Síndrome Hepatorrenal: Infusão contínua de 2 a 12 mg/dia.',
          es: 'Hemorragia Esofágica: 2 mg IV cada 4h en las primeras 24h, luego 1 mg cada 4h por 2 a 5 días más. Síndrome Hepatorrenal: Infusión continua de 2 a 12 mg/día.'
        },
        pediatric: {
          pt: 'Uso não recomendado como rotina.',
          es: 'Uso no recomendado como rutina.'
        }
      },
      administration: { pt: ['Bolus IV direto deve ser lento (1 a 2 minutos).', 'Pode causar cólica intestinal imediata ao empurrar o bolus.'], es: ['Bolo IV directo debe ser lento (1 a 2 minutos).', 'Puede causar cólico intestinal inmediato al empujar el bolo.'] },
      renalAdjustment: { required: false, message: { pt: 'Fármaco salvador da síndrome hepatorrenal. Não exige ajuste.', es: 'Fármaco salvador del síndrome hepatorrenal. No exige ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Droga de resgate exclusiva da emergência hepatológica.', es: 'Droga de rescate exclusiva de la emergencia hepatológica.' } },
      commonAdverseEffects: { pt: ['Palidez extrema (isquemia cutânea temporária)', 'Cólica abdominal e diarreia', 'Cefaleia e bradicardia'], es: ['Palidez extrema (isquemia cutánea temporal)', 'Cólico abdominal y diarrea', 'Cefalea y bradicardia'] },
      dangerousAdverseEffects: { pt: ['Infarto Agudo do Miocárdio e Angina (as coronárias também sofrem vasoconstrição)', 'Necrose intestinal (isquemia mesentérica irreversível)', 'Edema Agudo de Pulmão'], es: ['Infarto Agudo de Miocardio y Angina (las coronarias también sufren vasoconstricción)', 'Necrosis intestinal (isquemia mesentérica irreversible)', 'Edema Agudo de Pulmón'] },
      contraindications: {
        absolute: { pt: ['Choque séptico instalado', 'Histórico recente de IAM ou Angina Instável não passível de intervenção'], es: ['Choque séptico instalado', 'Historial reciente de IAM o Angina Inestable no pasible de intervención'] },
        relative: { pt: ['Doença vascular periférica obstrutiva severa', 'Asma aguda'], es: ['Enfermedad vascular periférica obstructiva severa', 'Asma aguda'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DROGA ISQUÊMICA: O preço de salvar as varizes esofágicas é a vasoconstrição extrema de outras áreas. Cuidado extremo com os dedos do paciente, os pés e o coração. Se o paciente reclamar de dor no peito após a dose, faça ECG imediato.', es: 'DROGA ISQUÉMICA: El precio de salvar las várices esofágicas es la vasoconstricción extrema de otras áreas. Cuidado extremo con los dedos del paciente, los pies y el corazón. Si el paciente se queja de dolor en el pecho tras la dosis, haga ECG inmediato.' }
      }
    },

/* ── OCTREOTIDE ─────────────────────────────────────────────────────── */
    "octreotide": {
      name: { pt: 'Octreotida (Octreotide)', es: 'Octreotida' },
      category: 'gastroenterologia',
      class: { pt: 'Análogo Sistético da Somatostatina', es: 'Análogo Sintético de la Somatostatina' },
      indications: {
        pt: ['Hemorragia aguda por Varizes Esofágicas (Alternativa extremamente segura à Terlipressina)', 'Tumores neuroendócrinos (VIPoma, Glucagonoma, Carcinoide)', 'Acromegalia'],
        es: ['Hemorragia aguda por Várices Esofágicas (Alternativa extremadamente segura a la Terlipresina)', 'Tumores neuroendocrinos (VIPoma, Glucagonoma, Carcinoide)', 'Acromegalia']
      },
      commercialNames: { br: ['Sandostatin'], ar: ['Sandostatin'] },
      presentation: { pt: ['Ampolas SC/IV 0,05 mg/mL e 0,1 mg/mL', 'Apresentação LAR (Depot IM longa duração) para Tumores'], es: ['Ampollas SC/IV 0,05 mg/mL y 0,1 mg/mL', 'Presentación LAR (Depot IM larga duración) para Tumores'] },
      mechanism: {
        pt: 'Mimetiza a ação do hormônio Somatostatina. Reduz a secreção de vários hormônios gastrointestinais (gastrina, VIP, glucagon). Isso paralisa o fluxo sanguíneo esplâncnico dilatado e inibe a secreção ácida gástrica, reduzindo muito a pressão portal na veia sangrante. A GRANDE VANTAGEM sobre a Terlipressina é que o Octreotide NÃO induz vasoconstrição sistêmica perigosa em coronárias.',
        es: 'Mimetiza la acción de la hormona Somatostatina. Reduce la secreción de varias hormonas gastrointestinales (gastrina, VIP, glucagón). Esto paraliza el flujo sanguíneo esplácnico dilatado e inhibe la secreción ácida gástrica, reduciendo mucho la presión portal en la vena sangrante. La GRAN VENTAJA sobre la Terlipresina es que la Octreotida NO induce vasoconstricción sistémica peligrosa en coronarias.'
      },
      dose: {
        adult: {
          pt: 'Hemorragia Varicosa: Bolus IV de 50 mcg seguido de Infusão Contínua de 50 mcg/hora por 3 a 5 dias.',
          es: 'Hemorragia Varicosa: Bolo IV de 50 mcg seguido de Infusión Continua de 50 mcg/hora por 3 a 5 días.'
        },
        pediatric: {
          pt: 'Hemorragia: 1 a 2 mcg/kg em bolus, seguido de 1 a 2 mcg/kg/hora.',
          es: 'Hemorragia: 1 a 2 mcg/kg en bolo, seguido de 1 a 2 mcg/kg/hora.'
        }
      },
      administration: { pt: ['Uso em Bomba de Infusão contínua em SF ou SG.', 'Na emergência o uso é restrito à via Venosa. O uso subcutâneo/IM fica para a oncologia ambulatorial.'], es: ['Uso en Bomba de Infusión continua en SF o SG.', 'En urgencias el uso está restringido a la vía Venosa. El uso subcutáneo/IM queda para la oncología ambulatoria.'] },
      renalAdjustment: { required: true, message: { pt: 'Pode necessitar redução de dose (metade) se o paciente estiver em Diálise/Anúria crônica extrema.', es: 'Puede necesitar reducción de dosis (mitad) si el paciente está en Diálisis/Anuria crónica extrema.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico. Seguro no cirrótico.', es: 'Sin necesidad de ajuste clínico. Seguro en el cirrótico.' } },
      commonAdverseEffects: { pt: ['Alterações da Glicemia (Hiper ou Hipoglicemia, por bloquear insulina/glucagon)', 'Cólica abdominal e diarreia leve', 'Bradicardia leve'], es: ['Alteraciones de la Glucemia (Hiper o Hipoglucemia, por bloquear insulina/glucagón)', 'Cólico abdominal y diarrea leve', 'Bradicardia leve'] },
      dangerousAdverseEffects: { pt: ['Cálculos biliares (Colelitíase grave no uso de longo prazo oncólogico)', 'Pancreatite aguda'], es: ['Cálculos biliares (Colelitiasis grave en uso a largo plazo oncológico)', 'Pancreatitis aguda'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à octreotida'], es: ['Hipersensibilidad conocida a la octreotida'] },
        relative: { pt: ['Diabetes tipo 1 mal controlado (risco de hipoglicemia severa rebote)'], es: ['Diabetes tipo 1 mal controlado (riesgo de hipoglucemia severa rebote)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ESCOLHA DO CARDIOPATA: Em pacientes cirróticos que chegam vomitando sangue, a Terlipressina é a droga "de sangue e fogo", altamente vasoconstritora. Mas se esse paciente tiver 80 anos, Stent coronariano ou coração fraco, prescreva OCTREOTIDE, que não fará o coração dele infartar por isquemia induzida.', es: 'ELECCIÓN DEL CARDIÓPATA: En pacientes cirróticos que llegan vomitando sangre, la Terlipresina es la droga "de sangre y fuego", altamente vasoconstrictora. Pero si este paciente tiene 80 años, Stent coronario o corazón débil, prescriba OCTREOTIDA, que no hará que su corazón infarte por isquemia inducida.' }
      }
    }

  }); /* fim Object.assign GASTROENTEROLOGIA_DRUGS_DB — BUILD 352 Lote 1 (Gastroenterologia Crítica: IBPs/Lactulose/Vasoconstritores Esplâncnicos) */
})();
