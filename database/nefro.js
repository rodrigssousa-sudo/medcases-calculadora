/* ============================================================
   MedCases Pro — Módulo: NEFROLOGIA
   Expõe: window.NEFRO_DRUGS_DB
   Schema: Object.assign (Padrão Ouro) — IIFE com guard
   BUILD 416-REFACTOR (2026-07-11) — Migrado de neurologia.js
   45 fármacos: Quelantes de Fósforo, Hipercalemia, ESAs,
                Vitaminas D Análogas, Calcimiméticos, Aquaréticos,
                Ferro IV, Protetores Renais, Fluidos, Eletrólitos
============================================================ */
(function () {
  'use strict';
  if (typeof window.NEFRO_DRUGS_DB !== 'object' || window.NEFRO_DRUGS_DB === null || Array.isArray(window.NEFRO_DRUGS_DB)) {
    window.NEFRO_DRUGS_DB = {};
  }

  /* ── BUILD 416-REFACTOR GUARD ──────────────────────────────────── */
  if (typeof window.NEFRO_DRUGS_DB !== 'object' || window.NEFRO_DRUGS_DB === null) return;
  Object.assign(window.NEFRO_DRUGS_DB, {

/* ══════════════════════════════════════════════════════════════════════════════
   BUILD 416 — Quelantes de Fósforo / Nefrologia
   Fármacos: sevelamer, acetato_de_calcio, carbonato_de_calcio,
             carbonato_de_lantanio, oxihidroxido_sucroferrico
   Categorias: nefrologia (4) · multi_especialidade (1)
   Namespace: NEFRO_DRUGS_DB  (10º bloco IIFE)
══════════════════════════════════════════════════════════════════════════════ */


    /* ── SEVELÂMER ────────────────────────────────────────────────────── */
    "sevelamer": {
      name: { pt: 'Carbonato de Sevelâmer', es: 'Carbonato de Sevelámero' },
      category: 'nefro',
      class: { pt: 'Quelante de Fosfato Polimérico Não-Cálcico / Resina de Troca Iônica', es: 'Quelante de Fosfato Polimérico No Cálcico / Resina de Intercambio' },
      indications: {
        pt: ['Controle da Hiperfosfatemia em pacientes adultos com Doença Renal Crônica (DRC) em tratamento de hemodiálise ou diálise peritoneal', 'Controle do fósforo sérico elevado em pacientes com DRC pré-dialítica (Estágios 4 e 5)'],
        es: ['Control de la Hiperfosatemia en pacientes adultos con Enfermedad Renal Crónica (ERC) en diálisis o estadios avanzados 4 y 5']
      },
      commercialNames: { br: ['Renvela', 'Renagel (Versão Cloridrato)', 'Sevelâmer'], ar: ['Renvela', 'Sevelámero Richmond', 'Phosphofren'] },
      presentation: { pt: ['Comprimidos revestidos 800 mg', 'Pó para suspensão oral 800 mg e 2,4 g'], es: ['Comprimidos revestidos 800 mg', 'Polvo para suspensión oral 800 mg'] },
      mechanism: {
        pt: 'O Ímã de Fósforo Intestinal. É um polímero reticulado não-absorvível de troca iônica, livre de cálcio e de alumínio. Quando ingerido junto com a comida, seus múltiplos grupos amina sofrem protonação no estômago e ligam-se por atração eletrostática aos íons de fosfato ($PO_4^{3-}$) dos alimentos na luz do intestino. O complexo sevelâmer-fosfato fica gigante, insolúvel e não consegue passar para o sangue, sendo totalmente expelido nas fezes. Isso desaba o fósforo no sangue, impedindo a calcificação das artérias.',
        es: 'Polímero de unión al fosfato, no absorbible, libre de calcio y aluminio. Contiene múltiples aminas que se protonan en el intestino e interactúan mediante enlaces de hidrógeno con las moléculas de fosfato de la dieta. Esto retiene el fosfato en la luz intestinal, impidiendo su absorción sistémica y eliminándolo a través de las heces.'
      },
      dose: {
        adult: {
          pt: 'Dose Inicial baseada no nível de Fósforo sérico:\n- Fósforo entre 5,5 e 7,5 mg/dL: 800 mg via oral, TRÊS VEZES ao dia, nas refeições.\n- Fósforo > 7,5 mg/dL: 1.600 mg via oral, TRÊS VEZES ao dia, nas refeições.\nAjustar a dose em degraus de 800mg por refeição a cada 2-4 semanas até atingir a meta de fósforo < 5,5 mg/dL.',
          es: 'Dosis Inicial según fósforo sérico:\n- Fosfato entre 5,5 - 7,5 mg/dL: 800 mg vía oral, TRES VECES al día con comidas.\n- Fosfato > 7,5 mg/dL: 1.600 mg vía oral, TRES VECES al día con comidas.\nTitular cada 15-30 días hasta lograr fosfemia < 5,5 mg/dL.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 6 anos de idade com doses calculadas por área de superfície corporal (m²) utilizando preferencialmente a formulação em pó.',
          es: 'Aprobado en niños > 6 años con dosificación según superficie corporal.'
        }
      },
      administration: { pt: ['USO ORAL COMPULSÓRIO EXCLUSIVAMENTE NO MEIO DAS REFEIÇÕES PRINCIPAIS (Café da manhã, Almoço e Jantar). Tomar o Sevelâmer com o estômago vazio anula 100% o efeito do remédio, pois não haverá fósforo alimentar para ele grudar. Os comprimidos DEVEM ser engolidos inteiros; não quebrar ou mastigar.'], es: ['Uso oral. ADMINISTRAR ESTRICTAMENTE JUNTO CON LAS COMIDAS PRINCIPALES. Ingerirlo en ayunas invalida por completo su acción terapéutica. Tragarse entero.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose; o fármaco age puramente na luz intestinal e é indicado especificamente para a falência renal.', es: 'Sin necesidad de ajuste, fármaco de acción luminal indicado en falla renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['CONSTIPAÇÃO INTESTINAL SEVERA (efeito colateral master, a resina resseca e compacta as fezes)', 'Dispepsia, gases, flatulência e dor abdominal leve', 'Náuseas e vômitos episódicos'], es: ['ESTREÑIMIENTO SEVERO (la resina compacta el bolo fecal)', 'Dispepsia, meteorismo y dolor abdominal tipo cólico', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['OBSTRUÇÃO INTESTINAL COMPLETA E IMPACTAÇÃO FECAL (Fecaloma gigante de resina que pode rasgar o cólon e exigir cirurgia de emergência)', 'Perfuração intestinal isquêmica focal'], es: ['OBSTRUCCIÓN INTESTINAL / IMPACTACIÓN FECAL GRAVE (Fecaloma resinoso)', 'Perforación de colon por necrosis isquémica'] },
      contraindications: {
        absolute: { pt: ['Obstrução mecânica intestinal ativa confirmada, histórico de hipersensibilidade ao sevelâmer, hipofosfatemia severa basal'], es: ['Obstrucción intestinal mecánica activa', 'Hipofosatemia previa', 'Hipersensibilidad al fármaco'] },
        relative: { pt: ['Histórico de constipação crônica grave, gastroparesia diabética severa ou doença de Crohn intestinal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ARMADILHA DO ESTÔMAGO VAZIO E A PRÓSTATA DE PEDRA (O PERIGO DO FECALOMA): O Renvela não entra no sangue; ele funciona feito uma esponja de fósforo no prato de comida. Explique ao nefropata: tomar em jejum é jogar o dinheiro fora. Além disso, se o paciente começar a ficar muitos dias sem ir ao banheiro, avise o médico: o remédio empedra as fezes, criando um Fecaloma de resina duro que pode entupir e estourar o intestino do doente.', es: 'ALERTA DE IMPACTACIÓN INTESTINAL CRÍTICA: Carbonato de sevelámero deshidrata y compacta el contenido colónico. El desarrollo de estreñimiento pertinaz en pacientes dializados puede evolucionar hacia un íleo obstructivo o perforación estercoral. Indicar ablandadores de materia fecal si cesa el ritmo evacuatorio.' }
      },
      references: {
        pt: 'DCOR Trial (Sevelamer reducing mortality vs calcium binders); Diretrizes de Distúrbio Mineral e Ósseo KDIGO 2024; Bula Renvela.',
        es: 'DCOR Trial (Kidney International 2007); Guías globales KDIGO 2024 para el manejo del Fósforo; Ficha Técnica CIMA.'
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
    },


/* ─────────────────────────────────────────────────────────────────────────
   BUILD 417 APPEND — Nefrologia: Hipercalemia & Citrato Férrico
   IDs: citrato_ferrico | patiromer | ciclossilicato_de_zirconio_sodico
        poliestirenossulfonato_de_sodio | poliestirenossulfonato_de_calcio
   ───────────────────────────────────────────────────────────────────────── */


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
      name: { pt: 'Poliestirenossulfonato de Sódio', es: 'Poliestirenosulfonato de Sódio' },
      category: 'nefro',
      class: { pt: 'Resina de Troca Catiônica Luminal / Depurador de Potássio Intestinal', es: 'Resina de Intercambio Catiónico Luminal / Depurador de Potasio Intestinal' },
      indications: {
        pt: ['Tratamento de Hipercalemia (Potássio sérico elevado) moderada a grave em pacientes com insuficiência renal crônica ou aguda (Manejo ambulatorial ou suporte em UTI enquanto aguarda a diálise)'],
        es: ['Tratamiento de la Hiperpotasemia/Hipercalemia en insuficiencia renal aguda o crónica']
      },
      commercialNames: { br: ['Sorcal', 'Secresol'], ar: ['Sorcal', 'Resina calcio (Versão Cálcio)', 'Argexalato'] },
      presentation: { pt: ['Pó para suspensão oral ou retal (Envelopes ou potes contendo gramas de resina)'], es: ['Polvo para suspensión oral o rectal (botes o sobres de 15 g)'] },
      mechanism: {
        pt: 'O Purgador de Potássio. É uma grande resina de troca catiônica não-absorvível. Quando passa pelo intestino grosso por via oral ou retal, ela atua liberando íons de Sódio ($Na^+$) de sua estrutura e capturando quimicamente os íons de Potássio ($K^+$) livres que estão na água do intestino. Cada grama de resina sequestra cerca de 1 mEq de potássio. O potássio fica preso na matriz da resina e sai direto no vaso sanitário junto com o cocô, limpando o potássio do sangue por equilíbrio osmótico.',
        es: 'Resina de intercambio catiónico no absorbible. Al transitar por el colon, libera iones de Sodio e incorpora de forma competitiva iones de Potasio ($K^+$) libres presentes en la luz intestinal (1 g de resina fija 1 mEq de potasio). El complejo resina-potasio se elimina mecánicamente con las heces, disminuyendo la kalemia sistémica.'
      },
      dose: {
        adult: {
          pt: 'Uso Oral Comum: 15 g a 30 g de pó via oral, dissolvido em água, de 1 a 4 vezes ao dia (a cada 6 ou 8 horas) conforme a gravidade do potássio. Uso Retal (Enema de UTI): 30 g de pó dissolvidos em 100-200 mL de água morna, aplicados via retal profunda, retendo o líquido por no mínimo 30 a 60 minutos.',
          es: 'Vía Oral: 15 a 30 g de polvo disuelto en agua, cada 6 u 8 horas según niveles de potasio. Vía Rectal (Enema de rescate): 30 g de polvo disuelto en 150 mL de agua, retener al menos 30 minutos.'
        },
        pediatric: {
          pt: 'Uso especializado infantil em hipercalemia aguda: 1 g/kg via oral ou retal dividido em doses a cada 6 horas, com monitoramento rígido do sódio plasmático.',
          es: 'Pediátrica: 1 g/kg/día dividido cada 6 horas vía oral o rectal.'
        }
      },
      administration: { pt: ['Uso oral ou retal hospitalar. O pó deve ser preparado adicionando água filtrada ou xarope simples. CRÍTICO: NUNCA DILUIR OU MISTURAR O SORCAL COM SORBITOL LIQUIDO, risco de causar necrose fatal do intestino (VER ALERTAS). Após o enema retal, lavar o cólon do paciente com água pura para retirar os resíduos de resina secos.'], es: ['Uso oral o rectal. PROHIBIDO MEZCLAR CON SORBITOL LÍQUIDO! Alto riesgo de inducir necrosis colónica transmural fatal. Realizar lavado rectal de limpieza tras el enema.'] },
      renalAdjustment: { required: false, message: { pt: 'Fármaco de ação puramente luminal mecânica indicado para a falência renal terminal; monitorar sobrecarga de sódio.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Constipação intestinal severa com fezes duras de resina', 'Náuseas marcantes, vômitos e anorexia leve', 'Hipocalemia paradoxal (se a dose for excessiva e limpar o potássio demais)'], es: ['Estreñimiento pertinaz e impactación', 'Náuseas y vómitos', 'Hipopotasemia iatrogénica por exceso de efecto'] },
      dangerousAdverseEffects: { pt: ['NECROSE COLÔNICA TRANSMURAL AGUDA (morte química do intestino grosso com perfuração, peritonite fecal e choque séptico fatal — VER ALERTAS)', 'Sobrecarga de Sódio com Edema Agudo de Pulmão e Anasarca (a resina joga muito sódio para dentro do sangue para puxar o potássio)'], es: ['NECROSIS COLÓNICA TRANSMURAL / PERFORACIÓN INTESTINAL (Mortal, secundaria a espasmo o interacción con sorbitol)', 'Hipernatremia severa con Edema Agudo de Pulmón por sobrecarga hídrica de sodio'] },
      contraindications: {
        absolute: { pt: ['Pacientes com obstrução mecânica intestinal ativa ou íleo paralítico pós-cirúrgico, recém-nascidos (risco fulminante de necrose cecal)'], es: ['Obstrucción intestinal mecánica o íleo paralítico, neonatos (prohibido por necrosis de colon)'] },
        relative: { pt: ['Pacientes com insuficiência cardíaca congestiva anasarca grave (a carga de sódio do Sorcal pode afogar o coração)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DA PROIBIÇÃO DO SORBITOL (A DESTRUIÇÃO DO INTESTINO): O Sorcal carrega um erro médico histórico gravíssimo. Antigamente, misturava-se a resina com o laxante Sorbitol para evitar que o remédio ressecasse o intestino. Estudos de farmacovigilância provaram que o Sorbitol reage com a resina e causa uma Necrose Transmural do Intestino. O intestino grosso apodrece, perfura e o paciente morre de sepse generalizada. Dilua o Sorcal APENAS EM ÁGUA PURA.', es: 'ALERTA DE CAJA NEGRA (NECROSIS DE COLON POR SORBITOL): Está terminantemente PROHIBIDO coadministrar o suspender la resina en soluciones de Sorbitol líquido. La mezcla desata una reacción inflamatoria isquémica focal en la mucosa cecal, provocando necrosis transmural del colon y peritonitis fecal de evolución mortal en pocas horas. Disolver exclusivamente en agua limpia.' }
      },
      references: {
        pt: 'FDA Drug Safety Communication on Kayexalate/Sorcal and bowel necrosis; Cochrane Database for Hyperkalemia Management; Manual de UTI Einstein.',
        es: 'FDA Safety Communications (Kayexalate); Guías de Emergencias Electrolíticas de la SADI; Ficha Técnica CIMA.'
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
    },


/* ─────────────────────────────────────────────────────────────────────────
   BUILD 418 APPEND — Nefrologia: ESAs (Eritropoiese) & Calcitriol
   IDs: epoetina_alfa | epoetina_beta | darbepoetina_alfa | mircera | calcitriol
   ───────────────────────────────────────────────────────────────────────── */


    "epoetina_alfa": {
      name: { pt: 'Epoetina Alfa (Eritropoetina Humana Recombinante / rHuEPO)', es: 'Epoetina Alfa (Eritropoyetina Humana Recombinante / rHuEPO)' },
      category: 'nefro',
      class: { pt: 'Fator de Crescimento Hematopoiético Recombinante / Estimulador da Eritropoiese', es: 'Factor de Crecimiento Hematopoyético Recombinante / Estimulante de la Eritropoyesis' },
      indications: {
        pt: ['Tratamento da Anemia Crônica da Doença Renal Crônica em pacientes dialíticos ou pré-dialíticos', 'Tratamento da anemia induzida por quimioterapia antineoplásica em tumores não-mieloides', 'Redução de transfusões alogênicas em pacientes cirúrgicos programados'],
        es: ['Tratamiento de la Anemia secundaria a Enfermedad Renal Crónica', 'Anemia inducida por quimioterapia citotóxica en tumores sólidos']
      },
      commercialNames: { br: ['Eprex', 'Hemax', 'Epoetina (SUS)', 'Alfaepoetina'], ar: ['Eprex', 'Hemax Richmond', 'Epoetina DOSA'] },
      presentation: { pt: ['Frasco-ampola ou seringa preenchida IV/SC contendo 2.000 UI, 3.000 UI, 4.000 UI, 10.000 UI e 40.000 UI/mL'], es: ['Viales o Jeringas prellenadas SC/IV de 2.000 UI, 4.000 UI y 10.000 UI'] },
      mechanism: {
        pt: 'O Motor de Hemácias. É uma cópia purificada por bioengenharia da eritropoetina humana (hormônio que o rim doente parou de fabricar). Ela viaja pelo sangue até a medula óssea e acopla-se de forma seletiva ao receptor de eritropoetina nas células progenitoras eritroides (UFC-E). Esse estímulo genético força a medula a se dividir e fabricar novos Glóbulos Vermelhos (Hemácias) em velocidade acelerada, subindo a Hemoglobina e curando a anemia crônica do rim.',
        es: 'Glicoproteína obtenida por tecnología de ADN recombinante que mimetiza la acción de la eritropoyetina endógena. Se une de forma específica al receptor de eritropoyetina en las células progenitoras eritroides de la médula ósea, estimulando su proliferación, maduración y supervivencia, lo que eleva la masa de glóbulos rojos (Hemoglobina).'
      },
      dose: {
        adult: {
          pt: 'Anemia na DRC: Iniciar com 50 a 100 UI/kg via SUBCUTÂNEA ou IV, TRÊS VEZES POR SEMANA (ex: Segunda, Quarta e Sexta). Monitorar Hemoglobina (Hb) mensalmente. Ajustar a dose para manter a Hb na meta de segurança entre 10,0 e 11,5 g/dL. NUNCA ultrapassar 12 g/dL — Ver Alertas.',
          es: 'Anemia en ERC: Iniciar con 50 a 100 UI/kg vía SUBCUTÁNEA o IV, TRES VECES POR SEMANA. Monitorear Hemoglobina (Hb) mensual. Ajustar dosis para sostener la Hb estrictamente en el rango seguro de 10,0 a 11,5 g/dL.'
        },
        pediatric: {
          pt: 'Anemia crônica pediátrica renal: Iniciar com 50 UI/kg via Subcutânea ou IV, 3 vezes por semana, com ajuste rígido baseado no ganho de peso e curvas de Hb.',
          es: 'Pediátrica: 50 UI/kg por dosis SC/IV tres veces por semana.'
        }
      },
      administration: { pt: ['Administração via Subcutânea (via de escolha no paciente pré-dialítico por ser mais confortável e durar mais) ou Intravenosa direta (feita na linha de retorno da máquina de hemodiálise ao fim da sessão). Nunca agitar o frasco (a agitação violenta quebra a estrutura da proteína e anula o remédio).'], es: ['Inyección Subcutánea o Intravenosa directa. No agitar el vial con fuerza; la agitación mecánica desnatura la glicoproteína anulando su efecto.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose baseado no clearance; indicação primária de uso na falência renal crônica.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['PIORA DA HIPERTENSÃO ARTERIAL (efeito colateral master, o sangue engrossa rápido e sobe a PA)', 'Sintomas gripais leves nas primeiras horas (febre, cefaleia)', 'Dor e eritema no local da picada subcutânea'], es: ['EXACERBACIÓN DE LA HIPERTENSIÓN ARTERIAL (por aumento de la viscosidad sanguínea)', 'Síndrome pseudogripal', 'Dolor local SC'] },
      dangerousAdverseEffects: { pt: ['EVENTOS TROMBOEMBÓLICOS (Infarto do Miocárdio, AVC ou Trombose da fístula arteriovenosa de diálise se a hemoglobina passar de 12 g/dL — Caixa Preta)', 'APLASIA PURA DE CÉLULAS VERMELHAS (PRCA: reação autoimune raríssima onde anticorpos destroem toda a eritropoetina do corpo)'], es: ['EVENTOS TROMBÓTICOS E ACV (Se Hb > 12 g/dL — Alerta Caixa Negra)', 'APLASIA PURA DE CÉLULAS ROJAS (PRCA inmunomediada refractaria por anticuerpos anti-EPO)'] },
      contraindications: {
        absolute: { pt: ['HIPERTENSÃO ARTERIAL GRAVE NÃO CONTROLADA (Dispara crises hipertensivas e convulsões encefalopáticas)', 'Aplasia Pura de Células Vermelhas desenvolvida após qualquer tratamento com eritropoetina'], es: ['HIPERTENSIÓN ARTERIAL SEVERA NO CONTROLADA (Absoluto por riesgo de encefalopatía)', 'Aplasia pura de células rojas previa'] },
        relative: { pt: ['Pacientes com histórico de neoplasias malignas ativas (a EPO pode funcionar como fator de crescimento tumoral angiogênico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DO TETO DA HEMOGLOBINA (O ERRO DO SANGUE GROSSO): A Eritropoetina carrega um aviso de Caixa Preta rígido. Na doença renal, o teto da Hemoglobina é 11,5 g/dL. Se o médico errar a dose e forçar a hemoglobina a subir acima de 12 ou 13 g/dL para tentar "normalizar" o sangue, o sangue fica viscoso feito mel. O risco de Infarto (IAM), AVC derrame e perda da Fístula de diálise por entupimento explode. Monitore o hemograma mensalmente e jamais ultrapasse o teto seguro.', es: 'ALERTA DE CAJA NEGRA (LÍMITE CRÍTICO DE HEMOGLOBINA): El estudio TREAT demostró que intentar normalizar la Hb a valores normales (> 12-13 g/dL) en nefrópatas duplica el riesgo de ACV e Infarto agudo de miocardio por hiperviscosidad hemática. La meta de seguridad mandatoria de Hemoglobina es de 10,0 a 11,5 g/dL. Module la dosis según esta meta.' }
      },
      references: {
        pt: 'TREAT and CHOIR Trials (Epoetin safety limits and cardiovascular events - NEJM 2009); Diretrizes de Anemia KDIGO 2024; Bula Eprex.',
        es: 'TREAT Trial (NEJM 2009); CHOIR Trial (NEJM 2006); Guías globales KDIGO 2024 para el manejo de la Anemia en ERC.'
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
    },


/* ─────────────────────────────────────────────────────────────────────────
   BUILD 419 APPEND — Nefrologia: Vitaminas D Análogas, Calcimiméticos & Aquarético
   IDs: alfacalcidol | paricalcitol | cinacalcete | etelcalcetida | tolvaptana
   ───────────────────────────────────────────────────────────────────────── */


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
      name: { pt: 'Cloridrato de Cinacalcete', es: 'Clorhidrato de Cinacalcet' },
      category: 'nefro',
      class: { pt: 'Agente Calcimimético de Ação Direta / Modulador do Receptor de Cálcio', es: 'Agente Calcimimético de Acción Directa / Modulador del Receptor de Calcio' },
      indications: {
        pt: ['Tratamento do Hiperparatiroidismo Secundário (HPT2) em pacientes com Doença Renal Crônica terminal em terapia de diálise', 'Controle da Hipercalcemia em pacientes com Carcinoma de Paratireoide ou Hiperparatiroidismo Primário grave'],
        es: ['Tratamiento del Hiperparatiroidismo Secundario (HPT2) en pacientes con ERC en diálisis', 'Hipercalcemia en Carcinoma de Paratiroides']
      },
      commercialNames: { br: ['Mimpara', 'Regpara', 'Cinacalcete'], ar: ['Mimpara', 'Cinacalcet Richmond', 'Sensipar'] },
      presentation: { pt: ['Comprimidos revestidos 30 mg, 60 mg e 90 mg'], es: ['Comprimidos revestidos 30 mg, 60 mg y 90 mg'] },
      mechanism: {
        pt: 'O Enganador da Paratireoide. É uma molécula calcimimética que viaja pelo sangue e gruda diretamente no receptor sensor de Cálcio ($CaSR$) localizado nas células das glândulas paratireoides. Ele altera o desenho geométrico do receptor, aumentando em 10 vezes a sensibilidade da glândula ao cálcio do sangue. A paratireoide é "enganada": ela acha que o corpo está inundado de cálcio e cessa imediatamente a fabricação e secreção do hormônio PTH (Paratormônio), interrompendo a destruição dos ossos do nefropata.',
        es: 'Agente calcimimético que aumenta directamente la sensibilidad del receptor sensor de Calcio ($CaSR$) de las células principales de la glándula paratiroides hacia el calcio extracelular circulante. Al "simular" concentraciones altas de calcio, inhibe de forma inmediata la transcripción y secreción de Hormona Paratiroidea (PTH), disminuyendo el remodelado óseo acelerado.'
      },
      dose: {
        adult: {
          pt: 'Hiperparatiroidismo Secundário: Iniciar com 30 mg via oral, UMA VEZ ao dia. Monitorar rigorosamente o Cálcio sérico e o PTH a cada 2 semanas. Titular a dose em degraus (30mg -> 60mg -> 90mg -> máximo de 180 mg ao dia) até manter o PTH na meta ideal de diálise (150 a 300 pg/mL).',
          es: 'HPT2 en Diálisis: Iniciar con 30 mg vía oral, UNA VEZ al día. Controlar Calcio sérico y PTH cada 14 días. Titular de forma escalonada (30 mg, 60 mg, 90 mg) hasta dosis máxima de 180 mg/día.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 3 anos de idade para HPT2 em diálise, com dose inicial baseada rigidamente no peso seco, utilizando microcomprimidos ou suspensão.',
          es: 'Aprobado en niños > 3 años con dosificación estricta por peso corporal.'
        }
      },
      administration: { pt: ['Uso oral diário. DEVE SER ADMINISTRADO OBRIGATORIAMENTE JUNTO COM ALIMENTOS ou imediatamente após as refeições. Tomar com comida dispara a absorção do Cinacalcete em mais de 80%, garantindo o pico terapêutico da medicação. Nunca partir os comprimidos.'], es: ['Uso oral. INGERIR OBLIGATORIAMENTE CON ALIMENTOS para maximizar su biodisponibilidad sistémica en un 80% y reducir la intolerancia digestiva.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose baseado no clearance; medicação desenhada para uso em nefropatas dialíticos.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado intensamente no fígado (via CYP2D6). Em pacientes com insuficiência hepática moderada a grave Child-Pugh B e C, os níveis plasmáticos duplicam; monitorar cálcio sérico semanalmente.', es: 'Monitorear estrechamente en insuficiencia hepática moderada/grave por riesgo de sobredosificación farmacológica.' } },
      commonAdverseEffects: { pt: ['NÁUSEAS INTENSAS E VÔMITOS (efeito adverso comum que afeta até 30% dos usuários)', 'Mialgia e dores musculares', 'Hipocalcemia assintomática inicial', 'Parestesias (formigamento nos dedos)'], es: ['Náuseas y vómitos severos', 'Mialgias', 'Hipocalcemia leve', 'Parestesias digitales'] },
      dangerousAdverseEffects: { pt: ['HIPOCALCEMIA SEVERA CRÍTICA (queda do Cálcio iônico < 7,5 mg/dL provocando prolongamento do intervalo QT, arritmias ventriculares fatais e convulsões)'], es: ['HIPOCALCEMIA CRÍTICA AGUDA (Ca < 7,5 mg/dL que induce prolongación del intervalo QT, arritmias ventriculares y tetania)'] },
      contraindications: {
        absolute: { pt: ['NÃO INICIAR O TRATAMENTO SE O CÁLCIO SÉRICO INICIAL ESTIVER ABAIXO DO LIMITE NORMAL (< 8,4 mg/dL) devido ao risco de choque hipocalcêmico imediato'], es: ['VALOR DE CALCIO SÉRICO BASAL POR DEBAJO DEL LÍMITE INFERIOR (< 8,4 mg/dL). Contraindicación absoluta de inicio.'] },
        relative: { pt: ['Histórico de epilepsia ou distúrbios convulsivos ativos (a hipocalcemia baixa o limiar de convulsão)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DESASTRE DO CHOQUE HIPOCALCÊMICO (O PERIGO DO CÁLCIO BAIXO): O Mimpara joga o cálcio do sangue para baixo de forma muito rápida. É ABSOLUTAMENTE PROIBIDO iniciar o Cinacalcete se o cálcio do paciente já estiver baixo no exame. Se o cálcio iônico despencar abaixo de 7,5 mg/dL, o paciente apresenta a Síndrome de Tetania (mãos em garra de parideira), o coração estica o intervalo QT e faz arritmia fatal de UTI. Se cair, suspenda a droga e infunda Gluconato de Cálcio.', es: 'ALERTA DE HIPOCALCEMIA MORTAL: Cinacalcet deprime drásticamente los niveles de calcio en sangre. Está prohibido iniciar la toma si el calcio sérico previo es < 8,4 mg/dL. Si durante el tratamiento el calcio cae críticamente, gatilla tetania muscular, laringoespasmo y arritmias ventriculares por prolongación del QT. Monitoree mensualmente.' }
      },
      references: {
        pt: 'EVOLVE Trial (Cinacalcet cardiovascular outcomes in dialysis); Diretrizes de DMO da Sociedade Brasileira de Nefrologia (SBN); Bula Regpara.',
        es: 'EVOLVE Trial (NEJM 2012); Guías de Metabolismo Mineral de la Sociedad Argentina de Nefrología (SAN).'
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
      category: 'nefro',
      class: { pt: 'Aquarético de Ação Direta / Antagonista Seletivo dos Receptores V2 de Vasopressina', es: 'Acuarético de Acción Direta / Antagonista Selectivo de los Receptores V2 de Vasopresina' },
      indications: {
        pt: ['Tratamento de Hiponatremia Dilucional Hipervolêmica ou Normovolêmica clinicamente significativa (Sódio < 125 mEq/L) secundária à SIADH ou Insuficiência Cardíaca refratária', 'Retardo da progressão do crescimento de cistos na Doença Renal Policística Autossômica Dominante (DRPAD) em adultos'],
        es: ['Tratamiento de la Hiponatremia secundaria a SIADH o Insuficiencia Cardíaca congestiva avanzada', 'Retraso de la progresión de quistes en la Enfermedad Renal Poliquística Autosómica Dominante (ERPAD)']
      },
      commercialNames: { br: ['Samsca', 'Jinarc'], ar: ['Samsca', 'Tolvaptán Richmond'] },
      presentation: { pt: ['Comprimidos simples 15 mg, 30 mg e 60 mg'], es: ['Comprimidos simples 15 mg y 30 mg'] },
      mechanism: {
        pt: 'O Aquarético Puro (Urina Água sem Sal). É uma pequena molécula antagonista altamente seletiva do receptor V2 do hormônio antidiurético (Vasopressina/ADH) localizado nos tubos coletores dos rins. Ao travar o receptor V2, ela impede que o ADH abra os canais de aquaporina. O rim perde a capacidade de segurar a água livre, urinando litros de água pura, SEM perder eletrólitos como sódio e potássio (Aquarese). Isso concentra o sangue naturalmente, fazendo o nível de Sódio subir rápido e eliminando o inchaço celular.',
        es: 'Antagonista selectivo y competitivo del receptor V2 de vasopresina (ADH) en el túbulo colector renal. Bloquea la inserción de canales de acuaporina-2, impidiendo la reabsorción de agua libre mediada por ADH. Induce una Acuaresis pura: excreción renal masiva de agua libre de electrolitos, concentrando el Sodio plasmático y revirtiendo la hiponatremia dilucional.'
      },
      dose: {
        adult: {
          pt: 'Hiponatremia por SIADH: Iniciar com 15 mg via oral, UMA VEZ ao dia, pela manhã. Se o sódio não subir na velocidade desejada após 24h, elevar para 30 mg uma vez ao dia, até o máximo de 60 mg/dia. OBRIGATÓRIO MONITORAR SÓDIO DE 4 EM 4 HORAS NA UTI. Teto de segurança: máximo 8-10 mEq/L de aumento nas primeiras 24h.',
          es: 'Hiponatremia por SIADH: Iniciar con 15 mg vía oral, UNA VEZ al día por la mañana. Titular a 30 mg o máximo 60 mg/día según cinética del sodio. Control obligatorio del Sodio plasmático cada 4-6 horas en UTI.'
        },
        pediatric: {
          pt: 'Uso contraindicado e não seguro em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário hospitalar na fase inicial. Pode ser tomado com ou sem alimentos. O paciente DEVE ter livre acesso a água limpa para beber para saciar a sede violenta que o remédio causa; proibir a ingestão de água cega o mecanismo e mata o doente.'], es: ['Uso oral matutino. Permitir obligatoriamente el libre acceso a agua de bebida al paciente para saciar la sed acuarética extrema y evitar deshidratación masiva.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste se ClCr > 10 mL/min, mas perde a eficácia aquarética se o rim estiver em estágio terminal falido.', es: 'Pierde eficacia terapéutica si el ClCr es < 10 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE HEPATOTÓXICA (Alerta de Caixa Preta). O uso contínuo por mais de 30 dias pode causar falência do fígado grave. É PROIBIDO manter o Samsca por mais de 30 dias seguidos na hiponatremia. Contraindicado em cirróticos Child B e C.', es: 'CAJA NEGRA POR HEPATOTOXICIDAD SEVERA: Su uso continuo por más de 30 días provoca daño hepático irreversible. Prohibido exceder el mes de pauta continua. Contraindicado en cirrosis avanzada.' } },
      commonAdverseEffects: { pt: ['SEDE AVASSALADORA INCONTROLÁVEL (polidipsia por desidratação aquarética)', 'Poliúria massiva (o paciente urina litros de água clara)', 'Boca seca e desidratação de mucosas'], es: ['SED EXTREMA INCONTROLABLE (Polidipsia severa)', 'Poliuria masiva de agua clara', 'Xerostomía y sequedad cutánea'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DA DESMIELINIZAÇÃO OSMÓTICA / MIELINÓLISE PONTINA (Lesão cerebral irreversível mortal se o sódio subir rápido demais — Caixa Preta)', 'Hepatite tóxica fulminante aguda com transaminasite severa'], es: ['SÍNDROME DE DESMIELINIZACIÓN OSMÓTICA / MIELINÓLISIS PONTINA (Destrucción neurológica irreversible mortal por corrección ultra-veloz del Sodio — Caja Negra)', 'Fallo hepático severo'] },
      contraindications: {
        absolute: { pt: ['Incapacidade do paciente de perceber ou responder à sede (pacientes em coma neurológico profundo)', 'Hiponatremia hipovolêmica (paciente desidratado por diarreia ou sangramento)', 'Uso com inibidores potentes do CYP3A4'], es: ['Incapacidad del paciente para percibir o responder a la sed (Coma profundo)', 'Hiponatremia hipovolémica', 'Co-administración con ketoconazol o ritonavir'] },
        relative: { pt: ['Uso estendido que ultrapasse a barreira de 30 dias seguidos de caixa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA QUE DERRETE O CÉREBRO (O PERIGO DA SUBIDA DO SÓDIO): O Samsca carrega o alerta de Caixa Preta mais rígido da UTI. Se você der o remédio para tratar hiponatremia e o Sódio SUBIR RÁPIDO DEMAIS (Limite máximo de segurança: NÃO deixar subir mais que 8 a 10 mEq/L nas primeiras 24 horas), ocorre a Mielinólise Pontina. Os neurônios do tronco cerebral perdem a bainha de mielina e derretem. O paciente fica tetraplégico, entra em coma e morre. Monitore o sódio de 4 em 4 horas com o cronômetro.', es: 'ALERTA DE CAJA NEGRA MORTAL (MIELINÓLISIS PONTINA): Corregir el sodio de forma ultra-rápida deshidrata las células del puente cerebral desnudando sus vainas de mielina de forma irreversible. LÍMITE DE SEGURIDAD ABSOLUTO: No permitir jamás que el Sodio sérico aumente más de 8 a 10 mEq/L en las primeras 24 horas del tratamiento. Monitorizar el ionograma cada 4 horas estrictamente en la UTI.' }
      },
      references: {
        pt: 'SALT-1 and SALT-2 Trials (Tolvaptan in Hyponatremia - NEJM 2006); TEMPO 3:4 Trial (Tolvaptan in Polyquistic Kidney Disease); FDA Boxed Warnings Samsca.',
        es: 'SALT-1 & SALT-2 Trials (NEJM 2006); TEMPO 3:4 Trial (NEJM 2012); FDA Boxed Warnings (Samsca); Guías de Medio Interno de la SAN.'
      }
    },


/* ══════════════════════════════════════════════════════════════════════════
   BUILD 420 — Nefrologia: Engenharia da Água Hospitalar e a Forja do Sangue
   +5 drogas: Conivaptana | Citrato de Potássio | Citrato Sódio+Ác.Cítrico
              Sacarato de Hidróxido Férrico | Carboximaltose Férrica
   category: nefrologia (×4) | urologia (×1: citrato_de_potassio)
   icon: 🫘 color: #0369A1 colorTxt: #ffffff (nefrologia)
   icon: 💧 color: #0891B2 colorTxt: #ffffff (urologia — definido neste build)
══════════════════════════════════════════════════════════════════════════ */


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
      name: { pt: 'Sacarato de Hidróxido Férrico (Ferro Injetável)', es: 'Complejo de Sacarato de Hidróxido Férrico (Hierro IV)' },
      category: 'nefro',
      class: { pt: 'Suplemento de Ferro Parenteral Intravenoso / Complexo de Coordenação Macroglobular', es: 'Suplemento de Hierro Parenteral Intravenoso / Complejo Macroglobular' },
      indications: {
        pt: ['Tratamento da Anemia por Deficiência de Ferro crônica em pacientes com Doença Renal Crônica em diálise (Uso obrigatório associado à eritropoetina para dar matéria-prima para a medula fabricar sangue)', 'Intolerância ou falha absoluta ao ferro oral em anemia ferropriva grave'],
        es: ['Tratamiento de la Anemia Ferropénica en pacientes con ERC en diálisis', 'Intolerancia absoluta o fracaso terapéutico del hierro por vía oral']
      },
      commercialNames: { br: ['Noripurum IV', 'Ferinject (Carboximaltose)', 'Sacarato de Ferro (SUS)'], ar: ['Venofer', 'Hierro Sacarato Richmond', 'Siderblan IV'] },
      presentation: { pt: ['Ampolas injetáveis INTRAVENOSAS contendo 100 mg de ferro elementar em 5 mL (20 mg/mL)'], es: ['Ampollas inyectables INTRAVENOSAS de 100 mg de hierro elemental en 5 mL'] },
      mechanism: {
        pt: 'O Combustível da Medula. É um complexo macromolecular multinuclear estável de hidróxido férrico envolto por moléculas de sacarose. Quando injetado na veia, ele viaja de forma segura sem soltar ferro livre tóxico no sangue. O complexo é engolido pelos macrófagos do sistema reticuloendotelial (baço e fígado), que quebram a sacarose e liberam o ferro diretamente para a Ferritina (o estoque do corpo) e para a Transferrina, que leva o ferro para a medula construir Hemoglobina.',
        es: 'Complejo macromolecular hidrosoluble de hierro trivalente y sacarosa. Tras la infusión IV, el complejo es captado selectivamente por el sistema reticuloendotelial (hígado y bazo), donde se disocia liberando el hierro elemental de forma gradual hacia la transferrina y ferritina, aportando materia prima inmediata para la eritropoyesis medular sin liberar hierro libre iónico tóxico.'
      },
      dose: {
        adult: {
          pt: 'Uso Clínico / Diálise: 100 mg a 200 mg (1 a 2 ampolas) via INTRAVENOSA lenta, administrada durante ou ao fim da sessão de hemodiálise, 1 a 3 vezes por semana. Repetir até atingir a dose acumulada total calculada pelo déficit de ferro do paciente (Fórmula de Ganzoni). Limitar se Ferritina > 500 ng/mL ou Saturação de Transferrina > 30%.',
          es: 'Dosis habitual en diálisis: 100 a 200 mg (1 o 2 ampollas) vía INTRAVENOSA lenta al finalizar la sesión de diálisis, de 1 a 3 veces por semana. Frenar si Ferritina > 500 ng/mL.'
        },
        pediatric: {
          pt: 'Anemia ferropriva pediátrica crônica renal: 1 a 3 mg/kg via Intravenosa lenta, fracionada por semana, sob rígida vigilância de saturação de transferrina.',
          es: 'Pediátrica: 1 a 3 mg/kg por dosis en infusión IV lenta.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE VIA INTRAVENOSA LENTA HOSPITALAR. Pode ser aplicado por injeção IV direta ultra-lenta (1 ampola de 5 mL pura correndo em no mínimo 5 minutos); OU preferencialmente DILUÍDO: 100-200 mg diluídos em exatamente 100 mL de Soro Fisiológico (NaCl 0,9%) correndo ao longo de 15 a 30 minutos na bomba. NUNCA DILUIR EM SORO GLICOSADO (quebra o complexo e precipita o ferro). NUNCA FAZER VIA INTRAMUSCULAR (causa dor extrema e mancha a pele de preto permanentemente).'], es: ['EXCLUSIVAMENTE INFUSIÓN IV LENTA HOSPITALARIA. Diluir 100-200 mg en 100 mL de solución fisiológica a pasar en 20-30 minutos. PROHIBIDO DILUIR EN SUERO GLUCOSADO! PROHIBIDA LA VÍA IM! Mancha la piel de negro de forma permanente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste; medicação essencial e segura para a rotina do renal dialítico.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O ferro é armazenado no fígado. Contraindicado em quadros de Hemocromatose, hemossiderose ou sobrecarga de ferro hepática severa.', es: 'Contraindicado en hemocromatosis o sobrecarga tisular sistémica de hierro.' } },
      commonAdverseEffects: { pt: ['GOSTO METÁLICO INTENSO na boca durante a infusão (efeito colateral master)', 'Hipotensão transitória leve por infusão rápida', 'Cefaleia e náuseas episódicas', 'Rubor facial'], es: ['SABOR METÁLICO INTENSO transinfusión (muy frecuente)', 'Hipotensión transitoria', 'Cefalea y rubor facial'] },
      dangerousAdverseEffects: { pt: ['ANAFILAXIA SEVERA E CHOQUE ANAFILÁCTICO FATAL (reação imune alérgica grave imediata, exige carrinho de parada à mão)', 'Crise de hipotensão profunda por velocidade de gotejamento excessiva'], es: ['REACCIÓN ANAFILÁCTICA GRAVE / SHOCK ALÉRGICO (Mortal, exige adrenalina a la mano)', 'Hipotensión severa por bolo rápido'] },
      contraindications: {
        absolute: { pt: ['Anemias não-ferroprivas (Anemia hemolítica, talassemia, anemia sideroblástica)', 'Evidência clínica de sobrecarga de ferro (Ferritina > 800 ng/mL)', 'Histórico de anafilaxia ao ferro IV'], es: ['Anemias no ferropénicas (Hepatopatías por depósito), sobrecarga de hierro activa, hipersensibilidad al complejo'] },
        relative: { pt: ['Infecções bacterianas agudas sistêmicas ativas (o ferro livre funciona como nutriente que alimenta a replicação de bactérias na Sepse — adiar uso)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O ALERTA DO SINAL DO CHOQUE E O TESTE DE INFUSÃO (ALERTA DO NORIPURUM): O Ferro injetável pode causar um choque anafilático fulminante na veia do doente. É recomendado que nos primeiros 10 minutos correndo o soro escuro de ferro, o gotejamento seja ultra-lento (teste de dose) com o médico ou enfermeiro ao lado medindo a pressão arterial. Se o paciente queixar de tontura, falta de ar ou a pressão desabar, feche o soro e aplique Adrenalina IM na hora.', es: 'ALERTA DE SHOCK ANAFILÁCTICO: El hierro IV puede desencadenar reacciones de hipersensibilidad tipo anafilactoides graves. Iniciar la infusión de forma ultra-lenta los primeros 10 minutos (Dosis de prueba) con el paciente monitorizado. Si presenta disnea, estridor u opresión, suspenda de inmediato e inyecte Epinefrina.' }
      },
      references: {
        pt: 'PIVOTAL Trial (Intravenous Iron Dosing in Hemodialysis - NEJM 2019); KDIGO Clinical Practice Guideline for Iron in CKD; Bula Noripurum IV.',
        es: 'PIVOTAL Trial (NEJM 2019); Guías KDIGO para el manejo del Hierro en ERC; Ficha Técnica Venofer CIMA.'
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
    },


/* ══════════════════════════════════════════════════════════════════════════
   BUILD 421 — Nefrologia: Ferro IV Pesado e os Protetores Renais Modernos
   +5 drogas: Derisomaltose Férrica | Dextrana Férrica | Gluconato Férrico
              Finerenona | Voclosporina
   category: nefrologia (×5)
   icon: 🫘 color: #0369A1 colorTxt: #ffffff (nefrologia)
══════════════════════════════════════════════════════════════════════════ */


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
    },


/* ══════════════════════════════════════════════════════════════════════════
   BUILD 423 — ONDA 48: Spec Expandido — Proteção Renal & Fluidos Vasculares
   +5 drogas (schema completo): Sparsentana | Cisteamina | Ácido Tióctico
              Cloreto de Sódio 0,9% (SF) | Ringer Lactato
   Categorias: nefrologia (×2) | neurologia (×1) | uti_fluidos (×2)
   Motor de interações: sparsentana×IECA/BRA/Aliskireno (contraindicada/5)
                        ringer_lactato×ceftriaxona (contraindicada/5)
                        ringer_lactato×transfusao (contraindicada/5)
══════════════════════════════════════════════════════════════════════════ */


    /* ── SPARSENTANA ────────────────────────────────────────────────────── */
    "sparsentana": {
      name: { pt: 'Sparsentana', es: 'Sparsentán' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Antagonista Dual dos Receptores de Endotelina e Angiotensina II (DEARA)', es: 'Antagonista Dual de los Receptores de Endotelina y Angiotensina II (DEARA)' },
      indications: {
        pt: ['Redução da proteinúria em adultos com Nefropatia por IgA primária (Doença de Berger) com risco de progressão rápida da perda renal'],
        es: ['Reducción de la proteinuria en adultos con Nefropatía por IgA primaria con alto riesgo de progresión rápida']
      },
      commercialNames: { br: ['Filspari (Importação regulada)'], ar: ['Filspari'] },
      presentation: { pt: ['Comprimidos revestidos 200 mg e 400 mg'], es: ['Comprimidos 200 mg y 400 mg'] },
      mechanism: {
        pt: 'O Bloqueador Dual de Alvo Glomerular. É uma molécula de engenharia cirúrgica que bloqueia de forma combinada dois caminhos destrutivos no rim: o receptor de Endotelina Tipo A ($ETA$) e o receptor de Angiotensina II Tipo 1 ($AT_1$). Ao travar os dois eixos ao mesmo tempo, ela alivia de forma violenta a pressão hiperfiltrante e a inflamação dentro dos glomérulos machucados pela IgA, estancando a proteinúria e protegendo o néfron contra a fibrose terminal.',
        es: 'Antagonista dual selectivo que actúa bloqueando simultáneamente los receptores de endotelina tipo A ($ETA$) y los receptores de angiotensina II tipo 1 ($AT_1$). Esta acción combinada reduce la vasoconstricción y la inflamación intraglomerular, disminuyendo drásticamente la proteinuria y frenando la esclerosis renal.'
      },
      dose: {
        adult: {
          pt: 'Início: 200 mg via oral, UMA VEZ ao dia. Após 14 dias, se tolerado, elevar obrigatoriamente para a dose de manutenção alvo de 400 mg uma vez ao dia.',
          es: 'Inicio: 200 mg vía oral, UNA VEZ al día. Tras 14 días, si es tolerado, incrementar a la dosis de mantenimiento meta de 400 mg una vez al día.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em menores de 18 anos.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Tomar uma vez ao dia por via oral. Deve ser ingerido com água antes da primeira refeição do dia (pela manhã). Exige monitoramento rigoroso de enzimas do fígado (TGO/TGP) basal e mensal.'], es: ['Uso oral diario por la mañana antes del desayuno. Requiere control mensual obligatorio de transaminasas hepáticas.'] },
      renalAdjustment: { required: false, message: { pt: 'Projetada para o rim doente. Não exige ajuste baseado na taxa de filtração glomerular (eGFR), mas não estudada se eGFR < 30 mL/min inicial.', es: 'No requiere ajuste inicial según TFG, pero no hay datos si TFG < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE CAUTELOSO (Black Box). Contraindicada em pacientes com insuficiência hepática moderada a grave (Child-Pugh B e C) ou se transaminasas basais > 3x o limite normal.', es: 'Contraindicado en insuficiencia hepática moderada o grave por riesgo de hepatotoxicidad celular.' } },
      commonAdverseEffects: { pt: ['Hipotensão postural acentuada e tontura', 'Edema periférico por retenção hídrica leve', 'Hipercalemia (aumento do potássio)', 'Anemia por hemodiluição'], es: ['Hipotensión ortostática y mareo', 'Edema periférico leve', 'Hiperpotasemia', 'Anemia'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE SEVERA IDIOSSIANCRÁTICA (Alerta Caixa Preta de falência hepática)', 'Insuficiência renal funcional aguda', 'Teratogenicidade extrema (Malformação fetal grave)'], es: ['HEPATOTOXICIDAD GRAVE (Alerta de Caja Negra)', 'Falla renal aguda funcional', 'Teratogenicidad severa'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Exige programa de controle reprodutivo rígido de classe)', 'Uso concomitante com outros IECAs, BRAs ou Antagonistas de Endotelina (Anlodipino tolerado)'], es: ['EMBARAZO (Absoluto por teratogenicidad)', 'Uso concomitante con IECA o ARA-II'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (pode disparar os níveis da droga)'], es: ['Uso con inhibidores potentes CYP3A4'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA REPRODUTIVA (O PROGRAMA REMS): A Sparsentana carrega um dos alertas de teratogenicidade mais agressivos do mercado. Mulheres em idade fértil só podem receber o remédio se realizarem testes de gravidez mensais obrigatórios sob o protocolo REMS. Uma única tomada grávida derrete o sistema renal e ósseo do feto. O desmame exige acompanhamento rígido.', es: 'ALERTA DE CAJA NEGRA REPRODUCTIVA: Debido a su alto riesgo teratogénico, exige la incorporación obligatoria a un programa de seguridad (REMS) con test de embarazo mensual en mujeres en edad fértil. Está terminantemente prohibido su uso gestacional.' }
      },
      references: {
        pt: 'PROTECT Trial (Lancet 2023 - Sparsentan in IgA Nephropathy); FDA Box Warning Filspari; Diretrizes KDIGO Glomerulonefrites 2024.',
        es: 'PROTECT Trial (Lancet 2023); FDA Prescribing Information; Directrices KDIGO 2024.'
      }
    },

    /* ── CISTEAMINA ─────────────────────────────────────────────────────── */
    "cisteamina": {
      name: { pt: 'Cisteamina (Bitartrato de)', es: 'Cisteamina (Bitartrato de)' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Agente Depletor de Cistina / Terapia de Erro Inato do Metabolismo', es: 'Agente Depletor de Cistina / Terapia de Error Innato del Metabolismo' },
      indications: {
        pt: ['Tratamento da Cistinose Nefropática em pacientes pediátricos e adultos (Evita a falência renal e o depósito de cristais nos olhos e cérebro)'],
        es: ['Tratamiento de la Cistinosis Nefropática en niños y adultos (Frena el depósito de cristales en órganos)']
      },
      commercialNames: { br: ['Cystagon', 'Procysbi (Liberação prolongada)'], ar: ['Cystagon'] },
      presentation: { pt: ['Cápsulas duras 50 mg e 150 mg', 'Cápsulas de liberação prolongada 25 mg e 75 mg'], es: ['Cápsulas duras 50 mg y 150 mg'] },
      mechanism: {
        pt: 'O Dissolvedor de Cristais. Pacientes com cistinose acumulam o aminoácido cistina dentro dos lisossomos devido a um defeito genético, o que gera cristais que destroem os rins e nervos. A Cisteamina entra no lisossomo e reage quimicamente com a cistina, quebrando-a em duas moléculas menores: cisteína e dissulfeto de cisteamina-cisteína. Essas novas moléculas conseguem sair livremente do lisossomo mesmo com o defeito genético, esvaziando os cristais tóxicos das células.',
        es: 'Penetra en las vacuolas lisosomales y reacciona con la cistina acumulada para formar cisteína y un complejo mixto soluble (disulfuro de cisteamina-cisteína). Este complejo logra salir del lisosoma mediante el transportador de lisina intacto, disminuyendo los niveles intracelulares de cistina y previniendo el daño tisular.'
      },
      dose: {
        adult: {
          pt: 'Dose baseada na área de superfície corporal: Geralmente 1,30 g/m²/dia via oral, dividida estritamente a cada 6 horas (Cystagon) ou de 12/12 horas (Procysbi). Titular guiado pelo nível de cistina nos leucócitos.',
          es: 'Dosis ajustada por superficie corporal: Habitual 1,30 g/m²/día vía oral, fraccionada estrictamente cada 6 horas (Cystagon) o cada 12 horas (Procysbi).'
        },
        pediatric: {
          pt: 'Crianças até 12 anos: Iniciar com 1/4 a 1/6 da dose alvo, escalonando em 4-6 semanas até atingir 1,30 g/m²/dia.',
          es: 'Ajuste pediátrico gradual hasta alcanzar la dosis de mantenimiento por m².'
        }
      },
      administration: { pt: ['A formulação de liberação imediata (Cystagon) DEVE ser tomada rigorosamente de 6 em 6 horas, sem falhar, dia e noite. O Procysbi (prolongado) deve ser tomado de 12/12h de estômago vazio (2h antes ou 30 min após comer). Não tomar com suco de toranja.'], es: ['Cystagon exige toma estricta cada 6 horas cronometradas, día y noche. Procysbi se toma cada 12 horas con estómago vacío.'] },
      renalAdjustment: { required: false, message: { pt: 'Não exige ajuste por clearance, mas retarda a necessidade de transplante renal em anos se iniciada precocemente.', es: 'No requiere ajuste, protege la función renal contra el daño por cristales.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['ODOR CORPORAL E HALITOSE INTENSOS (cheiro sulfúrico forte de ovo podre na pele e suor)', 'Náuseas violentas, vômitos e dor de estômago', 'Sonolência extrema e letargia'], es: ['OLOR CORPORAL Y HALITOSIS INTENSOS (Olor sulfúrico desagradable en piel y aliento)', 'Náuseas, vómitos y dispepsia', 'Somnolencia'] },
      dangerousAdverseEffects: { pt: ['Ulceração gástrica severa com hemorragia digestiva', 'Fibras elásticas alteradas na pele (Lesões tipo estrias purpúricas nos cotovelos)', 'Encefalopatia e convulsões se dose excessiva'], es: ['Úlcera gástrica con hemorragia digestiva', 'Alteraciones del colágeno cutáneo (pseudoxantoma)', 'Convulsiones'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à cisteamina ou à penicilamina', 'Amamentação e gravidez'], es: ['Hipersensibilidad al fármaco', 'Embarazo y lactancia'] },
        relative: { pt: ['Histórico de úlcera péptica ativa ou distúrbios neurológicos convulsivos não controlados'], es: ['Úlcera péptica activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DO ODOR SULFÚRICO E ADERÊNCIA: A Cisteamina libera compostos de enxofre no corpo. O paciente exala um cheiro forte de ovo podre/alho pelo suor e hálito 24h por dia. Isso destrói a vida social de crianças e adolescentes, causando abandono em massa do tratamento. É preciso suporte psicológico familiar: parar o remédio destrói o rim de forma irreversível.', es: 'EL ALERTA DEL OLOR SULFÚRICO: El fármaco excreta metabolitos azufrados a través del sudor y el aliento, provocando un olor penetrante y desagradable continuo. Esto deteriora la calidad de vida y la adherencia en jóvenes. El abandono del fármaco acelera la necesidad de diálisis terminal.' }
      },
      references: {
        pt: 'Cystinosis Research Network Treatment Protocols; FDA Prescribing Info Cystagon/Procysbi; Manual de Erros Inatos do Metabolismo USP.',
        es: 'FDA Prescribing Information; Guías de Consenso Europeo para el Tratamiento de la Cistinosis.'
      }
    },

    /* ── ÁCIDO TIÓCTICO (Ácido Alfa-Lipoico) ──────────────────────────── */
    "acido_tioctico": {
      name: { pt: 'Ácido Tióctico (Ácido Alfa-Lipoico)', es: 'Ácido Tióctico (Ácido Alfa-Lipoico)' },
      category: 'neurologia',
      icon: '🧠',
      color: '#7C3AED',
      colorTxt: '#ffffff',
      class: { pt: 'Antioxidante Mitocondrial Potente / Varredor de Radicais Livres', es: 'Antioxidante Mitocondrial Potente / Barredor de Radicales Libres' },
      indications: {
        pt: ['Tratamento da Polineuropatia Diabética Dolorosa sintomática (queimação, dormência e dor em queimação nas pernas)', 'Adjuvante na esteato-hepatite não alcoólica (fígado gordo)'],
        es: ['Tratamiento de la Polineuropatía Diabética Dolorosa sintomática (Ardor, hormigueo y dolor lancinante)', 'Coadyuvante en esteatosis hepática']
      },
      commercialNames: { br: ['Thioctacid'], ar: ['Thioctacid', 'Lipomax', 'Bialip'] },
      presentation: { pt: ['Comprimidos de 600 mg', 'Ampolas IV 600 mg/24 mL'], es: ['Comprimidos de 600 mg', 'Ampollas IV 600 mg'] },
      mechanism: {
        pt: 'O Reparador de Nervos Diabéticos. Atua como uma coenzima no complexo da piruvato desidrogenase mitocondrial. É um antioxidante universal potente (funciona na água e na gordura da célula). Ele neutraliza os radicais livres gerados pelo excesso de açúcar no sangue (hiperglicemia crônica), aumenta o fluxo de sangue (microcirculação) que nutre o nervo isquêmico e restaura a velocidade de condução elétrica axonal.',
        es: 'Coenzima mitocondrial soluble en agua y lípidos. Actúa como un potente antioxidante universal que neutraliza las especies reactivas de oxígeno (ROS) causadas por la hiperglucemia crónica. Mejora el flujo sanguíneo endoneural y aumenta el transporte de glucosa, restaurando la conducción nerviosa y aliviando el dolor neuropático.'
      },
      dose: {
        adult: {
          pt: 'Fase de ataque oral ou endovenosa: 600 mg via oral ou IV, UMA VEZ ao dia, por 2 a 4 semanas. Manutenção crônica: 600 mg via oral ao dia pela manhã.',
          es: 'Dosis Estándar: 600 mg vía oral o IV, UNA VEZ al día por la mañana. Fase crónica de mantenimiento: 600 mg/día vía oral.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou estudado de forma rotineira em pediatria.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['A DOSAGEM ORAL DEVE SER FEITA EM JEJUM RIGOROSO, 30 MINUTOS ANTES DO CAFÉ DA MANHÃ. A comida no estômago reduz drasticamente a biodisponibilidade do ácido tióctico. As ampolas IV exigem proteção contra a luz (revestir o soro com papel alumínio ou capa opaca) e correr em 30 minutos.'], es: ['DEBE TOMARSE EN AYUNAS, 30 MINUTOS ANTES DEL DESAYUNO. Los alimentos bloquean su absorción. La infusión IV debe protegerse de la luz (fotosensible).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, eliminado por via metabólica.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Seguro e protetor celular hepático nas doses clínicas.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Náuseas e queimação estomacal episódica', 'Tontura leve e alteração transitória do paladar', 'Urina com cheiro forte característico'], es: ['Náuseas y pirosis episódica', 'Mareo leve', 'Olor fuerte en la orina'] },
      dangerousAdverseEffects: { pt: ['Hipotensão e Choque Anafilático (na infusão IV rápida)', 'Hipoglicemia severa por aumento rebote da sensibilidade à insulina (mecanismo sinérgico)'], es: ['Choque anafiláctico (en infusión IV rápida)', 'Hipoglucemia severa por potenciación de la insulina'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade confirmada ao ácido tióctico ou alfa-lipoico'], es: ['Hipersensibilidad confirmada al fármaco'] },
        relative: { pt: ['Pacientes diabéticos que já usam doses altas de insulina (risco de hipoglicemia inesperada — ver interações)'], es: ['Diabéticos con dosis altas de insulina (riesgo hipoglucemia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA FOTOSENSIBILIDADE NA VEIA: O Thioctacid injetável é extremamente sensível à luz. Se a enfermagem ligar a ampola no soro e deixar exposta à luz da lâmpada da UTI, a molécula quebra e vira um composto inútil em minutos. OBRIGATÓRIO cobrir o frasco e a equipe com capa fotoprotetora escura.', es: 'ALERTA DE FOTOSENSIBILIDAD: La formulación intravenosa es altamente fotosensible. Si la solución se expone a la luz ambiental sin protección (Capa fotoprotectora), el principio activo se degrada rápidamente perdiendo toda eficacia. Cubra siempre la infusión.' }
      },
      references: {
        pt: 'ALADIN Trials (I, II e III - Alpha-Lipoic Acid in Diabetic Neuropathy); NATHAN 1 Trial; Diretriz de Neuropatia Diabética da SBD.',
        es: 'ALADIN Trials (I, II y III); NATHAN 1 Trial; Directrices de la Sociedad Argentina de Diabetes (SAD).'
      }
    },

    /* ── SOLUÇÃO DE CLORETO DE SÓDIO 0,9% (SORO FISIOLÓGICO) ────────────── */
    "cloreto_de_sodio_09": {
      name: { pt: 'Solução de Cloreto de Sódio 0,9% (Soro Fisiológico)', es: 'Solución de Cloruro de Sodio 0,9% (Suero Fisiológico)' },
      category: 'uti_fluidos',
      icon: '💧',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Cristaloide Isotônico Desbalanceado', es: 'Cristaloide Isotónico Desbalanceado' },
      indications: {
        pt: ['Ressuscitação volêmica em choque hipovolêmico (Hemorragia, Sepse, Desidratação severa)', 'Veículo para diluição de medicações intravenosas', 'Tratamento de Alcalose Metabólica associada a depleção de cloreto (vômitos intensos)'],
        es: ['Reanimación volémica en choque hipovolémico (Hemorragia, Sepsis, Deshidratación severa)', 'Vehículo para dilución de medicaciones IV', 'Tratamiento de Alcalosis Metabólica']
      },
      commercialNames: { br: ['Soro Fisiológico 0,9%', 'NaCl 0,9%'], ar: ['Solución Fisiológica 0,9%'] },
      presentation: { pt: ['Bolsas/Frascos IV 100 mL, 250 mL, 500 mL, 1.000 mL'], es: ['Bolsas/Frascos IV 100 mL, 250 mL, 500 mL, 1.000 mL'] },
      mechanism: {
        pt: 'O "Expansor Desbalanceado". O Soro "Fisiológico" não é nada fisiológico. Ele contém 154 mEq/L de Sódio e 154 mEq/L de Cloro (O sangue humano tem apenas 100 de Cloro). Quando injetado, ele expande o espaço intravascular (enchendo as veias e segurando a pressão do paciente chocado). Cerca de 75% da água vaza para o interstício (causando inchaço) e 25% fica na veia. A enorme carga de Cloro suprime os rins e empurra o bicarbonato para fora do corpo.',
        es: 'El "Expansor Desbalanceado". El Suero "Fisiológico" no es fisiológico. Contiene 154 mEq/L de Sodio y Cloro (La sangre solo tiene 100 de Cloro). Al inyectarse, expande el espacio intravascular. El 75% del agua fuga al tejido (hinchazón). La enorme carga de Cloro suprime el riñón y empuja el bicarbonato fuera.'
      },
      dose: {
        adult: {
          pt: 'Choque/Sepse (Ressuscitação): Bolus rápido de 30 mL/kg nas primeiras 3 horas (cerca de 2 a 3 Litros). Manutenção: Conforme estado de volemia e pressão venosa central.',
          es: 'Choque/Sepsis (Reanimación): Bolo rápido de 30 mL/kg en las primeras 3 horas. Mantenimiento: Según estado de volemia.'
        },
        pediatric: {
          pt: 'Choque: Bolus de 20 mL/kg (Pode ser repetido até 3 vezes). Manutenção conforme regra de Holliday-Segar.',
          es: 'Choque: Bolo de 20 mL/kg. Mantenimiento según Holliday-Segar.'
        }
      },
      administration: { pt: ['Pode ser infundido pressurizado, aquecido ou resfriado. É a ÚNICA solução segura para lavar e acompanhar transfusões de sangue concentrado de hemácias.'], es: ['Puede infundirse presurizado, calentado. Es la ÚNICA solución segura para lavar y acompañar transfusiones de sangre.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes em diálise (anúricos) NÃO urinam fluidos. Dar soro indiscriminado causa edema agudo de pulmão em horas.', es: 'Pacientes en diálisis NO orinan fluidos. Dar suero indiscriminado causa edema agudo de pulmón.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado na cirrose (Piora drástica da ascite por sobrecarga de sódio).', es: 'Cuidado en cirrosis (Empeora ascitis por sobrecarga de sodio).' } },
      commonAdverseEffects: { pt: ['Edema periférico e inchaço de órgãos (Congestão visceral)', 'Retenção de sódio e água (Ganho de peso no hospital)'], es: ['Edema periférico e hinchazón de órganos', 'Retención de sodio y agua'] },
      dangerousAdverseEffects: { pt: ['ACIDOSE METABÓLICA HIPERCLORÊMICA (A injeção excessiva de Cloro destrói o pH do sangue, piorando o trabalho do coração e mascarando a acidose da Sepse)', 'Lesão Renal Aguda (O cloro causa vasoconstrição nos rins)'], es: ['ACIDOSIS METABÓLICA HIPERCLORÉMICA (El exceso de Cloro destruye el pH de la sangre)', 'Lesión Renal Aguda'] },
      contraindications: {
        absolute: { pt: ['Hipernatremia grave e Hipercloremia extrema', 'Edema agudo de pulmão cardiogênico'], es: ['Hipernatremia grave e Hipercloremia extrema', 'Edema agudo de pulmón cardiogénico'] },
        relative: { pt: ['Ressuscitação em UTI para pacientes já com lesão renal aguda e acidemia grave (Preferir Ringer Lactato ou Plasma-Lyte)'], es: ['Reanimación en UCI con lesión renal y acidemia (Preferir Ringer o Plasma-Lyte)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A MORTE POR ÁGUA E SAL (MITO DA FISIOLOGIA): Soro 0,9% mata milhares de pacientes na UTI por ignorância. Ao infundir 4 litros de SF 0,9% num paciente com Sepse, injeta-se o equivalente a mais de "MEIO QUILO de Sal" e uma carga de cloro brutal. Os rins param (vasoconstrição) e o sangue fica ácido. A medicina moderna recomenda fortemente a troca para "Fluidos Balanceados" (Ringer) em ressuscitação massiva.', es: 'LA MUERTE POR AGUA Y SAL: Suero 0,9% mata pacientes en UCI. Infundir 4 litros es inyectar una carga de cloro brutal que detiene los riñones y acidifica la sangre. La medicina moderna recomienda "Fluidos Balanceados" (Ringer) en reanimación masiva.' }
      },
      references: {
        pt: 'SMART Trial (NEJM 2018); Diretrizes da Surviving Sepsis Campaign; Fluid Resuscitation Guidelines.',
        es: 'SMART Trial (NEJM 2018); Directrices Surviving Sepsis Campaign.'
      }
    },

    /* ── RINGER LACTATO ─────────────────────────────────────────────────── */
    "ringer_lactato": {
      name: { pt: 'Ringer Lactato (Solução de Hartmann)', es: 'Ringer Lactato (Solución de Hartmann)' },
      category: 'uti_fluidos',
      icon: '💧',
      color: '#0F766E',
      colorTxt: '#ffffff',
      class: { pt: 'Cristaloide Isotônico Balanceado', es: 'Cristaloide Isotónico Balanceado' },
      indications: {
        pt: ['Ressuscitação volêmica em trauma, cirurgias de grande porte, e queimaduras extensas (Fórmula de Parkland)', 'Tratamento de primeira linha no Choque Séptico e cetoacidose (se não houver hipercalemia aguda)'],
        es: ['Reanimación volémica en trauma, cirugías mayores y quemaduras', 'Tratamiento de primera línea en Choque Séptico y cetoacidosis']
      },
      commercialNames: { br: ['Ringer Lactato', 'Solução de Ringer com Lactato'], ar: ['Ringer Lactato'] },
      presentation: { pt: ['Bolsas/Frascos IV 250 mL, 500 mL, 1.000 mL'], es: ['Bolsas/Frascos IV 250 mL, 500 mL, 1.000 mL'] },
      mechanism: {
        pt: 'O "Sangue Falso Perfeito". Desenvolvido para imitar a química real do sangue. Ele tem Sódio (130), Cloro (109 - seguro!), Potássio (4) e Cálcio (3). A magia química: O seu principal "tampão" é o Íon Lactato (28 mEq). Quando o lactato entra no fígado do paciente, o fígado o consome e o transforma em BICARBONATO PURO. O paciente ressuscitado com Ringer não fica ácido, ele fica com o pH sanguíneo perfeito e equilibrado.',
        es: 'El "Sangre Falsa Perfecta". Diseñado para imitar la química de la sangre. Tiene Sodio, Cloro (seguro!), Potasio y Calcio. La magia: Su tampón es el Ion Lactato. El hígado lo consume y lo transforma en BICARBONATO PURO. El paciente resucitado queda con pH equilibrado.'
      },
      dose: {
        adult: {
          pt: 'Choque: Bolus de 30 mL/kg IV. Queimaduras (Parkland moderna): 2 a 4 mL/kg x % Área Queimada em 24h, infundindo metade nas primeiras 8 horas.',
          es: 'Choque: Bolo de 30 mL/kg IV. Quemaduras: 2 a 4 mL/kg x % Área Quemada en 24h.'
        },
        pediatric: {
          pt: 'Choque: 20 mL/kg IV rápido.',
          es: 'Choque: 20 mL/kg IV rápido.'
        }
      },
      administration: { pt: ['Via Intravenosa. NÃO pode ser misturado na mesma linha que derivados de sangue e certas drogas devido ao Cálcio na fórmula.'], es: ['Vía IV. NO puede mezclarse en la misma línea que sangre y ciertas drogas debido al Calcio.'] },
      renalAdjustment: { required: true, message: { pt: 'Cuidado na doença renal crônica anúrica, não porque contém muito potássio (só tem 4 mEq/L, que é pouco), mas porque o rim doente não urina a água.', es: 'Cuidado en falla renal anúrica, el riñón enfermo no orina el agua.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Mito e Fato da Cirrose: Se o fígado do paciente for completamente "morto" (Falência Hepática Fulminante/Choque Severo), ele não conseguirá transformar o Lactato da bolsa em Bicarbonato. O lactato acumula, piorando a medição da acidose láctica na gasometria.', es: 'Mito y Hecho: Si el hígado está completamente "muerto" (Falla Hepática Fulminante), no logrará transformar el Lactato en Bicarbonato. El lactato acumula.' } },
      commonAdverseEffects: { pt: ['Sobrecarga de volume sistêmico em casos de ressuscitação excessiva', 'Edema periférico'], es: ['Sobrecarga de volumen', 'Edema periférico'] },
      dangerousAdverseEffects: { pt: ['Alcalose Metabólica Iatrogênica (Ocorre se forem infundidos dezenas de litros - excesso de geração de bicarbonato)', 'Trombose no equipo e precipitação química medicamentosa'], es: ['Alcalosis Metabólica Iatrogénica (Por exceso de generación de bicarbonato)', 'Trombosis en el equipo y precipitación química'] },
      contraindications: {
        absolute: { pt: ['Incompatibilidade mecânica com Ceftriaxona (Forma cristais de Ceftriaxona-Cálcio — obstrução capilar fatal)', 'Incompatibilidade com transfusão de sangue/hemácias (O cálcio do RL anula o citrato da bolsa de sangue — coagulação no equipo)', 'Alcalose Metabólica prévia', 'Acidose Láctica profunda tipo B extrema (Falência hepática anóxica total)'], es: ['Incompatibilidad con Ceftriaxona (forma cristales de calcio — obstrucción capilar fatal)', 'Incompatibilidad con transfusión de sangre (el calcio anula el citrato — coagulación en equipo)', 'Alcalosis Metabólica previa'] },
        relative: { pt: ['Hipercalemia severa documentada (Soro Fisiológico ou Plasma-Lyte sem potássio pode ser preferido na primeira hora, embora novos estudos minimizem esse medo)'], es: ['Hiperpotasemia severa documentada (Nuevos estudios minimizan este miedo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O CÁLCIO TRAIDOR (DUPLA ARMADILHA): 1) NUNCA usar Ringer Lactato na mesma linha que Ceftriaxona — o cálcio forma cristais de "cimento" que entopem capilares do pulmão e rim (PROIBIDO MUNDIALMENTE, especialmente em neonatos). 2) NUNCA usar Ringer Lactato na mesma linha que transfusão de sangue — o cálcio anula o citrato anticoagulante da bolsa de sangue, formando coágulos gelatinosos no equipo. Para lavar veia com sangue: USE APENAS SORO FISIOLÓGICO 0,9%.', es: 'EL CALCIO TRAIDOR (DOBLE TRAMPA): 1) NUNCA usar Ringer con Ceftriaxona — el calcio forma cristales de "cemento" que obstruyen capilares (PROHIBIDO, especialmente en neonatos). 2) NUNCA usar Ringer con transfusión — el calcio anula el citrato anticoagulante, formando coágulos en el equipo. Para lavar vena con sangre: USE SOLO SUERO FISIOLÓGICO 0,9%.' }
      },
      references: {
        pt: 'SMART Trial (NEJM 2018); SALT-ED Trial (Fluidos balanceados); Diretrizes de Trauma do ATLS; FDA Drug Safety Communication (Ceftriaxone + Calcium).',
        es: 'SMART Trial (NEJM 2018); SALT-ED Trial; Directrices ATLS; FDA Drug Safety Communication (Ceftriaxona + Calcio).'
      }
    },


/* ══════════════════════════════════════════════════════════════════════════
   BUILD 424 — ONDA 49: UTI Fluidos & Hematologia — Cristaloides + Eletrolíticos + Ferro
   +5 drogas: Plasma-Lyte | Fosfato de Potássio | Fosfato de Sódio
              Óxido de Magnésio | Sulfato Ferroso
   Categorias: uti_fluidos (×3) | nefrologia (×1) | hematologia (×1)
   Motor de interações: $classe_fosfatos_intravenosos×calcio_iv (contraindicada/5)
                        $classe_repositores_metais_bivalentes_fe_mg×levotiroxina (alta/4)
                        $classe_repositores_metais_bivalentes_fe_mg×$classe_antiacidos_ibp (moderada/3)
══════════════════════════════════════════════════════════════════════════ */


    /* ── SOLUÇÃO DE PLASMA-LYTE ─────────────────────────────────────────── */
    "plasma_lyte": {
      name: { pt: 'Solução de Plasma-Lyte (148 / A)', es: 'Solución de Plasma-Lyte (148 / A)' },
      category: 'uti_fluidos',
      icon: '💧',
      color: '#0F766E',
      colorTxt: '#ffffff',
      class: { pt: 'Cristaloide Isotônico Plenamente Balanceado', es: 'Cristaloide Isotónico Plenamente Balanceado' },
      indications: {
        pt: ['Ressuscitação de choque séptico e trauma grave em UTI', 'Fluidos de reposição em pacientes onde o Ringer Lactato é perigoso (Ex: Cirróticos graves ou pacientes recebendo transfusão de sangue)'],
        es: ['Reanimación de choque séptico y trauma grave en UCI', 'Fluidos en pacientes donde Ringer Lactato es peligroso (Ej: Cirróticos graves o transfusión de sangre)']
      },
      commercialNames: { br: ['Plasma-Lyte 148'], ar: ['Plasma-Lyte'] },
      presentation: { pt: ['Bolsas IV 500 mL e 1.000 mL'], es: ['Bolsas IV 500 mL y 1.000 mL'] },
      mechanism: {
        pt: 'A "Perfeição Fisiológica". O Plasma-Lyte foi desenhado para ser o líquido que mais se aproxima do plasma humano real. Tem Sódio, Potássio e Magnésio. A GRANDE DIFERENÇA para o Ringer Lactato: Ele NÃO TEM CÁLCIO (logo, não coagula sangue em transfusões e não reage com antibióticos) e NÃO USA LACTATO como tampão. Ele usa Acetato e Gliconato, que viram Bicarbonato no MÚSCULO, e não no fígado, sendo ideal para pacientes com insuficiência hepática fulminante.',
        es: 'La "Perfección Fisiológica". Diseñado para acercarse al plasma humano real. LA GRAN DIFERENCIA: NO TIENE CALCIO (no coagula sangre ni reacciona con antibióticos) y NO USA LACTATO. Usa Acetato y Gluconato, que se vuelven Bicarbonato en el MÚSCULO, ideal para pacientes con insuficiencia hepática.'
      },
      dose: {
        adult: {
          pt: 'Bolus de ressuscitação de 30 mL/kg IV. Titulação conforme meta hemodinâmica.',
          es: 'Bolo de reanimación de 30 mL/kg IV. Titulación según meta hemodinámica.'
        },
        pediatric: {
          pt: '20 mL/kg em bolus para ressuscitação pediátrica.',
          es: '20 mL/kg en bolo para reanimación pediátrica.'
        }
      },
      administration: { pt: ['Via intravenosa rápida ou contínua. Totalmente compatível com transfusão de hemácias (Pode correr na mesma linha, ao contrário do Ringer).'], es: ['Totalmente compatible con transfusión de hematíes (Puede correr en la misma línea).'] },
      renalAdjustment: { required: true, message: { pt: 'Cuidado em insuficiência renal aguda oligúrica devido ao conteúdo de Potássio (5 mEq/L).', es: 'Cuidado en insuficiencia renal aguda debido al Potasio (5 mEq/L).' } },
      hepaticAdjustment: { required: false, message: { pt: 'É a ESCOLHA DE OURO para hepatopatas graves e cirróticos em choque, pois seus tampões não exigem metabolismo hepático.', es: 'Es la ELECCIÓN DE ORO para hepatópatas graves, pues sus tampones no exigen metabolismo hepático.' } },
      commonAdverseEffects: { pt: ['Sobrecarga de volume sistêmico (Se administrado em excesso)', 'Edema periférico'], es: ['Sobrecarga de volumen', 'Edema periférico'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia (em pacientes com falência renal que recebem grandes volumes rápidos)'], es: ['Hiperpotasemia (en pacientes con falla renal que reciben grandes volúmenes)'] },
      contraindications: {
        absolute: { pt: ['Hipercalemia severa documentada ou alcalose metabólica severa'], es: ['Hiperpotasemia severa o alcalosis metabólica severa'] },
        relative: { pt: ['Insuficiência cardíaca descompensada (Risco de edema agudo)'], es: ['Insuficiencia cardíaca descompensada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SALVAÇÃO CIRÚRGICA: Ao contrário do Soro Fisiológico (que causa acidose grave por excesso de cloro), o Plasma-Lyte estabiliza o pH do paciente chocado. Grandes UTIs e centros de transplante hepático migraram quase que inteiramente para o Plasma-Lyte devido à sua neutralidade perfeita.', es: 'LA SALVACIÓN QUIRÚRGICA: A diferencia del Suero Fisiológico, estabiliza el pH del paciente. Grandes UCIs y centros de trasplante hepático migraron al Plasma-Lyte por su neutralidad perfecta.' }
      },
      references: {
        pt: 'SMART Trial (NEJM 2018); SPLIT Trial; Diretrizes de Fluidoterapia da Surviving Sepsis Campaign.',
        es: 'SMART Trial (NEJM 2018); Directrices de Fluidoterapia de la Surviving Sepsis Campaign.'
      }
    },

    /* ── FOSFATO DE POTÁSSIO ────────────────────────────────────────────── */
    "fosfato_de_potassio": {
      name: { pt: 'Fosfato de Potássio', es: 'Fosfato de Potasio' },
      category: 'uti_fluidos',
      icon: '💧',
      color: '#B45309',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Eletrolítico Intravenoso Duplo', es: 'Suplemento Electrolítico Intravenoso Doble' },
      indications: {
        pt: ['Hipofosfatemia severa na UTI associada à Síndrome de Realimentação (Quando o doente desnutrido volta a comer e o fósforo zera no sangue)', 'Nutrição Parenteral Total (NPT)'],
        es: ['Hipofosfatemia severa en la UCI asociada al Síndrome de Realimentación', 'Nutrición Parenteral Total (NPT)']
      },
      commercialNames: { br: ['Fosfato de Potássio a 2 mEq/mL'], ar: ['Fosfato de Potasio'] },
      presentation: { pt: ['Ampolas de concentração variável (Ex: 2 mEq de Potássio e 1,1 a 1,5 mmol de Fosfato por mL)'], es: ['Ampollas de concentración variable'] },
      mechanism: {
        pt: 'O "Combustível da Vida". O Fósforo é o bloco de construção do ATP (energia da célula) e da contração do músculo do diafragma. Na UTI, se o paciente fica sem comer e depois recebe muita glicose, a insulina "suga" todo o fósforo e potássio do sangue para dentro das células. O sangue fica sem fósforo e o paciente PARA de respirar por falha no diafragma. Esta injeção devolve o fósforo vital e o potássio de uma vez só para salvar a ventilação do doente.',
        es: 'El "Combustible de la Vida". El Fósforo construye el ATP y contrae el diafragma. En la UCI, si el paciente desnutrido recibe glucosa, la insulina "succiona" el fósforo. El paciente DEJA de respirar. Esta inyección devuelve el fósforo vital y el potasio para salvar la ventilación.'
      },
      dose: {
        adult: {
          pt: 'Geralmente repõe-se de 15 a 30 mmol de Fósforo infundidos lentamente ao longo de 2 a 6 horas (A dose é extremamente calculada e baseada no peso e nível sérico de potássio).',
          es: '15 a 30 mmol de Fósforo infundidos lentamente a lo largo de 2 a 6 horas (Dosis extremadamente calculada).'
        },
        pediatric: {
          pt: '0,15 a 0,33 mmol/kg infundidos em 6 horas (Monitoramento de UTI obrigatório).',
          es: '0,15 a 0,33 mmol/kg infundidos en 6 horas.'
        }
      },
      administration: { pt: ['NUNCA administrar em bolus rápido (Causa parada cardíaca por excesso de potássio). DEVE ser diluído em SF 0,9% ou Glicose 5% e infundido com bomba de seringa.'], es: ['NUNCA administrar en bolo rápido. DEBE diluirse e infundirse con bomba.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com falência renal podem sofrer intoxicação letal de potássio e fósforo (que não são filtrados). Reduzir dose e correr em tempo dobrado.', es: 'Pacientes con falla renal pueden sufrir intoxicación letal de potasio y fósforo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem restrição direta.', es: 'Sin restricción directa.' } },
      commonAdverseEffects: { pt: ['Diarreia (Se preparações orais associadas)', 'Flebite no local da infusão venosa', 'Queda transitória da pressão arterial'], es: ['Diarrea', 'Flebitis en el sitio de infusión', 'Caída transitoria de presión'] },
      dangerousAdverseEffects: { pt: ['PRECIPITAÇÃO DE CÁLCIO (O cálcio do sangue despenca, causando convulsões e tetania)', 'Parada cardíaca (Se infundido muito rápido devido ao pico de potássio)'], es: ['PRECIPITACIÓN DE CALCIO (Causa convulsiones y tetania)', 'Parada cardíaca (Si se infunde muy rápido)'] },
      contraindications: {
        absolute: { pt: ['Hipercalemia (Potássio alto)', 'Hiperfosfatemia', 'Hipocalcemia ativa'], es: ['Hiperpotasemia', 'Hiperfosfatemia', 'Hipocalcemia activa'] },
        relative: { pt: ['Insuficiência renal grave oligúrica'], es: ['Insuficiencia renal grave oligúrica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ERRO MATEMÁTICO: A prescrição de Fosfato de Potássio gera pânico nas UTIs porque as ampolas listam o Fósforo em "milimoles (mmol)" e o Potássio em "miliequivalentes (mEq)". Um erro do médico de confundir mmol com mEq destrói o coração do paciente. Prescreva sempre especificando quantos mmol de FOSFATO você deseja.', es: 'EL ERROR MATEMÁTICO: Genera pánico en las UCIs porque el Fósforo se mide en "mmol" y el Potasio en "mEq". Un error al confundirlos destruye el corazón. Prescriba siempre especificando "mmol de FOSFATO".' }
      },
      references: {
        pt: 'NICE Guidelines on Refeeding Syndrome; ESPEN Guidelines on Parenteral Nutrition; Micromedex.',
        es: 'NICE Guidelines on Refeeding Syndrome; ESPEN Guidelines; Micromedex.'
      }
    },

    /* ── FOSFATO DE SÓDIO ───────────────────────────────────────────────── */
    "fosfato_de_sodio": {
      name: { pt: 'Fosfato de Sódio', es: 'Fosfato de Sodio' },
      category: 'uti_fluidos',
      icon: '💧',
      color: '#B45309',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Intravenoso / Laxante Salino Osmótico Oral', es: 'Suplemento Intravenoso / Laxante Salino Osmótico Oral' },
      indications: {
        pt: ['(VIA IV): Hipofosfatemia severa em pacientes que já têm Potássio Alto (logo não podem usar Fosfato de Potássio)', '(VIA ORAL): Preparo de cólon extremo para Colonoscopias'],
        es: ['(VÍA IV): Hipofosfatemia severa en pacientes con Potasio Alto', '(VÍA ORAL): Preparación de colon extremo para Colonoscopias']
      },
      commercialNames: { br: ['Fleet Enema (Retal)', 'Fosfato de Sódio IV'], ar: ['Fleet Enema'] },
      presentation: { pt: ['Ampolas IV (Concentrações em mmol/mEq)', 'Solução oral / Enemas retais'], es: ['Ampollas IV', 'Solución oral / Enemas rectales'] },
      mechanism: {
        pt: 'VIA INTRAVENOSA: Reposição pura de íons inorgânicos de fósforo atrelados ao sódio, recompondo a energia celular (ATP). VIA ORAL/RETAL: O Fosfato puxa violentamente a água da parede do corpo para dentro da luz do intestino grosso (catártico salino osmótico superpotente), induzindo uma evacuação aquosa explosiva que "lava" o cólon completamente em horas para a cirurgia.',
        es: 'VÍA INTRAVENOSA: Reposición de fósforo ligado a sodio, recomponiendo ATP. VÍA ORAL/RECTAL: El fosfato tira violentamente el agua del cuerpo hacia el intestino (catártico osmótico superpotente), induciendo evacuación explosiva que "lava" el colon en horas.'
      },
      dose: {
        adult: {
          pt: 'IV: 15 a 30 mmol infundidos lentamente em 4 a 6 horas. Oral (Preparo de Cólon): Soluções prontas ingeridas com muita água na véspera do exame.',
          es: 'IV: 15 a 30 mmol infundidos en 4 a 6 horas. Oral (Preparo de Colon): Soluciones ingeridas con mucha agua la víspera del examen.'
        },
        pediatric: {
          pt: 'Laxante oral/enema contraindicado ou sob extrema restrição de volume em crianças pequenas devido a risco letal de desidratação.',
          es: 'Laxante oral/enema bajo extrema restricción en niños pequeños por riesgo letal.'
        }
      },
      administration: { pt: ['O USO ORAL EXIGE que o paciente beba no mínimo 2 a 3 litros de água limpa adicional para evitar a dessecação completa dos rins e morte celular.'], es: ['EL USO ORAL EXIGE beber mínimo 2 a 3 litros de agua extra para evitar desecación de los riñones.'] },
      renalAdjustment: { required: true, message: { pt: 'Preparo oral contraindicado na DRC devido ao risco de sobrecarga de fósforo e lesão tubular direta.', es: 'Preparo oral contraindicado en ERC debido a sobrecarga de fósforo y lesión tubular.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em ascite/cirrose devido ao pico de carga de sódio.', es: 'Cuidado en ascitis por carga de sodio.' } },
      commonAdverseEffects: { pt: ['Diarreia aquosa avassaladora (Desejado no preparo oral)', 'Distensão abdominal e cólicas', 'Hipernatremia e Hipocalcemia'], es: ['Diarrea acuosa avasalladora (Deseado en uso oral)', 'Distensión abdominal y cólicos', 'Hipernatremia e Hipocalcemia'] },
      dangerousAdverseEffects: { pt: ['NEFROPATIA AGUDA DO FOSFATO (Lesão renal aguda irreversível — Black Box para uso oral)', 'Convulsões por queda de cálcio', 'Parada cardíaca por arritmia eletrolítica global'], es: ['NEFROPATÍA AGUDA DEL FOSFATO (Lesión renal irreversible — Caja Negra oral)', 'Convulsiones por caída de calcio', 'Parada cardíaca'] },
      contraindications: {
        absolute: { pt: ['Doença Renal Crônica, Insuficiência Cardíaca Congestiva descompensada (Preparo Oral)', 'Hipernatremia'], es: ['Enfermedad Renal Crónica, Insuficiencia Cardíaca (Preparo Oral)', 'Hipernatremia'] },
        relative: { pt: ['Idosos frágeis (O laxante oral puxa tanta água que o idoso pode desmaiar de choque hipovolêmico na sanita)'], es: ['Ancianos frágiles (El laxante saca tanta agua que el anciano puede desmayarse en el baño)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX DA COLONOSCOPIA: Milhares de pacientes saudáveis tomaram xarope de Fosfato de Sódio para limpar o intestino para colonoscopia e acabaram PERDENDO OS RINS definitivamente. A desidratação maciça com alta carga de fósforo faz os cristais entupirem os túbulos do rim de forma permanente. Para limpar o cólon hoje, a medicina migrou para o Polietilenoglicol (PEG/Macrogol).', es: 'BLACK BOX DE LA COLONOSCOPIA: Pacientes sanos tomaron jarabe de Fosfato para colonoscopia y PERDIERON LOS RIÑONES. La deshidratación masiva tapa los túbulos con cristales. Hoy la medicina migró al Polietilenglicol (PEG/Macrogol).' }
      },
      references: {
        pt: 'FDA Black Box Warning on Oral Sodium Phosphate; Diretrizes da Sociedade Americana de Endoscopia Gastrointestinal.',
        es: 'FDA Black Box Warning on Oral Sodium Phosphate; Directrices de la Sociedad Americana de Endoscopia Gastrointestinal.'
      }
    },

    /* ── ÓXIDO DE MAGNÉSIO ──────────────────────────────────────────────── */
    "oxido_de_magnesio": {
      name: { pt: 'Óxido de Magnésio', es: 'Óxido de Magnesio' },
      category: 'nefrologia',
      icon: '🫘',
      color: '#0369A1',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Mineral / Antiácido / Laxante', es: 'Suplemento Mineral / Antiácido / Laxante' },
      indications: {
        pt: ['Prevenção e tratamento da Hipomagnesemia leve a moderada crônica', 'Constipação intestinal crônica (uso diário off-label)', 'Antiácido para azia'],
        es: ['Prevención y tratamiento de la Hipomagnesemia leve a moderada crónica', 'Constipación intestinal crónica', 'Antiácido']
      },
      commercialNames: { br: ['Magnesia Bisurada', 'Suplementos de Óxido de Mg'], ar: ['Magnesio'] },
      presentation: { pt: ['Comprimidos e Cápsulas de 250 mg, 400 mg e 500 mg'], es: ['Comprimidos y Cápsulas de 250 mg, 400 mg y 500 mg'] },
      mechanism: {
        pt: 'A "Vassoura de Água". O óxido de magnésio tem baixa biodisponibilidade para o sangue (o corpo absorve pouco). Quando engolido, ele reage com o ácido do estômago gerando Cloreto de Magnésio. Esse magnésio livre no intestino possui uma carga osmótica altíssima, sugando água para o interior das fezes, o que desencadeia ondas peristálticas intensas. Uma pequena fração é absorvida para o sangue, reabastecendo os ossos e músculos da falta do mineral.',
        es: 'La "Escoba de Agua". El óxido de magnesio se absorbe poco. Al tragarlo, reacciona con el ácido generando Cloruro de Magnesio. Este magnesio en el intestino atrae agua, desencadenando peristaltismo. Una pequeña fracción va a la sangre, reabasteciendo el mineral.'
      },
      dose: {
        adult: {
          pt: 'Suplemento: 400 mg a 800 mg ao dia. Laxante: Doses maiores conforme resposta, sempre com grande quantidade de líquidos.',
          es: 'Suplemento: 400 mg a 800 mg al día. Laxante: Dosis mayores según respuesta, siempre con líquidos.'
        },
        pediatric: {
          pt: 'Não usado rotineiramente como primeira linha em pediatria sem cálculo estrito.',
          es: 'No usado rutinariamente sin cálculo estricto.'
        }
      },
      administration: { pt: ['DEVE ser ingerido junto a uma refeição para otimizar a absorção (que depende de ácido gástrico) e reduzir a irritação.', 'Beber muita água (1 a 2 copos cheios).'], es: ['DEBE ser ingerido junto a una comida para optimizar absorción y beber mucha agua.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou usar com monitoramento rigoroso em ClCr < 30 mL/min, devido ao risco de Hipermagnesemia letal.', es: 'Evitar en ClCr < 30 mL/min, debido a riesgo de Hipermagnesemia letal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      commonAdverseEffects: { pt: ['Diarreia aquosa profusa (O maior limitante para usar como suplemento no sangue)', 'Cólicas e gases', 'Sensação de estufamento'], es: ['Diarrea acuosa profusa', 'Cólicos y gases'] },
      dangerousAdverseEffects: { pt: ['Hipermagnesemia (Fraqueza muscular generalizada, arreflexia e parada respiratória) em doentes renais'], es: ['Hipermagnesemia (Debilidad muscular, arreflexia y parada respiratoria) en enfermos renales'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Renal Grave com anúria', 'Abdome agudo cirúrgico / Obstrução intestinal (Risco de ruptura)'], es: ['Insuficiencia Renal Grave con anuria', 'Abdomen agudo quirúrgico / Obstrucción intestinal'] },
        relative: { pt: ['Uso associado com bloqueadores neuromusculares em UTI (O magnésio potencializa a paralisia)'], es: ['Uso asociado con bloqueadores neuromusculares (El magnesio potencia la parálisis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'O ENGANO DA SUPLEMENTAÇÃO: Pacientes compram Óxido de Magnésio barato para curar câimbras, mas a absorção desta molécula no sangue é ínfima (apenas 4%). 96% fica no intestino causando diarreia severa, impedindo o tratamento muscular. Se o foco for repor o magnésio do SANGUE, o paciente deve trocar para Citrato de Magnésio ou Glicinato de Magnésio.', es: 'EL ENGAÑO DEL SUPLEMENTO: La absorción de esta molécula en la sangre es ínfima (4%). El 96% queda en el intestino causando diarrea. Si el foco es reponer el magnesio en SANGRE, debe cambiar a Citrato o Glicinato de Magnesio.' }
      },
      references: {
        pt: 'Diretrizes da ESPEN; Tratado de Nutrologia; Farmacopeia Americana (USP).',
        es: 'Directrices de ESPEN; Tratado de Nutrología; Farmacopea Americana (USP).'
      }
    },

    /* ── SULFATO FERROSO ────────────────────────────────────────────────── */
    "sulfato_ferroso": {
      name: { pt: 'Sulfato Ferroso', es: 'Sulfato Ferroso' },
      category: 'hematologia',
      icon: '🩸',
      color: '#B91C1C',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento de Ferro Oral (Primeira Geração)', es: 'Suplemento de Hierro Oral (Primera Generación)' },
      indications: {
        pt: ['Profilaxia e Tratamento da Anemia Ferropriva aguda ou crônica', 'Suplementação rotineira na gravidez para prevenção de déficits do tubo neural e anemia materna'],
        es: ['Profilaxis y Tratamiento de la Anemia Ferropénica', 'Suplementación rutinaria en el embarazo']
      },
      commercialNames: { br: ['Neutrofer', 'Sulfer'], ar: ['Fer In Sol'] },
      presentation: { pt: ['Comprimidos/Drágeas 300 mg (contém aprox. 60 a 65 mg de Ferro Elementar)', 'Solução oral (gotas)'], es: ['Comprimidos/Grageas 300 mg (contiene aprox. 60 mg de Hierro Elemental)', 'Solución oral (gotas)'] },
      mechanism: {
        pt: 'O "Tijolo do Sangue". O Sulfato Ferroso entrega íons de Ferro de forma rápida e bruta na luz do intestino superior (duodeno). O intestino absorve o Ferro para o sangue mediado pela vitamina C. O ferro viaja até a medula óssea e é acoplado diretamente no anel da "porfirina" para criar o grupo HEME da hemoglobina. Sem ele, a hemácia nasce pequena, pálida e incapaz de carregar o oxigênio (anemia microcítica hipocrômica).',
        es: 'El "Ladrillo de la Sangre". Entrega iones de Hierro en el intestino superior. Es absorbido a la sangre y acoplado en la "porfirina" para crear el grupo HEMO. Sin él, el glóbulo rojo nace pequeño y pálido.'
      },
      dose: {
        adult: {
          pt: 'Tratamento: 1 comprimido (aprox 60 mg Fe elementar) de 1 a 3 vezes ao dia. As novas diretrizes sugerem que tomar EM DIAS ALTERNADOS (1x sim, 1x não) melhora a absorção e reduz efeitos colaterais.',
          es: 'Tratamiento: 1 comprimido 1 a 3 veces al día. Nuevas directrices sugieren tomar EN DÍAS ALTERNOS para mejorar absorción.'
        },
        pediatric: {
          pt: 'Tratamento: 3 a 6 mg de Ferro Elementar/kg/dia dividido em 3 doses. Profilaxia: 1 a 2 mg/kg/dia.',
          es: 'Tratamiento: 3 a 6 mg de Hierro Elemental/kg/día dividido en 3 dosis.'
        }
      },
      administration: { pt: ['DEVE SER TOMADO EM JEJUM OU COM SUCO DE CÍTRICO (Vitamina C). O ácido gástrico e o pH ácido garantem a absorção.', 'Mancha os dentes na formulação líquida (usar canudo).'], es: ['DEBE TOMARSE EN AYUNAS O CON JUGO CÍTRICO (Vitamina C). El ácido garantiza la absorción.', 'Mancha los dientes en líquido.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade sistêmica.', es: 'Sin necesidad sistémica.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cuidado em hepatopatias de acúmulo (Hemocromatose / Hepatite crônica grave).', es: 'Cuidado en hepatopatías de acúmulo.' } },
      commonAdverseEffects: { pt: ['Constipação Cimentante (As fezes viram pedras duras e negras)', 'Dor gástrica severa, queimação e cólicas', 'Fezes negras e espessas (Assusta os pacientes, mas é normal e atesta adesão)'], es: ['Constipación Cimentante (Las heces se vuelven duras y negras)', 'Dolor gástrico severo y cólicos', 'Heces negras (Es normal)'] },
      dangerousAdverseEffects: { pt: ['Hemorragia e úlcera gastrointestinal medicamentosa', 'INTOXICAÇÃO FATAL (Superdosagem aguda destrói a parede estomacal, fígado e cérebro — muito comum em pediatria)'], es: ['Hemorragia y úlcera gastrointestinal', 'INTOXICACIÓN FATAL (Sobredosis aguda destruye estómago, hígado y cerebro)'] },
      contraindications: {
        absolute: { pt: ['Anemias não causadas por ferro (Anemia falciforme, Talassemia, Anemia de doença crônica com ferritina alta)', 'Uso de Hemotransfusões simultâneas'], es: ['Anemias no causadas por hierro', 'Uso de Hemotransfusiones simultáneas'] },
        relative: { pt: ['Pacientes com Doença Inflamatória Intestinal ativa (O sulfato oxida e piora a inflamação do Crohn/Retocolite)'], es: ['Pacientes con Enfermedad Inflamatoria Intestinal activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'AS BALAS ASSASSINAS: Comprimidos de sulfato ferroso parecem "M&Ms" ou confeitos de chocolate, o que atrai crianças. Ingerir 10 comprimidos de sulfato ferroso pode causar Necrose Gastrointestinal Fulminante e Morte Hepática em uma criança de 4 anos de forma irreversível. É a principal causa de envenenamento fatal por cosméticos/suplementos na pediatria mundial. O antídoto é Deferoxamina IV de urgência.', es: 'LAS BALAS ASESINAS: Los comprimidos parecen dulces. Ingerir 10 comprimidos puede causar Necrosis Gastrointestinal y Muerte en un niño. Es la principal causa de envenenamiento fatal en pediatría. El antídoto es Deferoxamina IV.' }
      },
      references: {
        pt: 'Diretrizes da Sociedade Brasileira de Hematologia (ABHH); ASH Guidelines for Iron Deficiency Anemia; UpToDate Tox.',
        es: 'Directrices de Hematología ASH; UpToDate Tox.'
      }
    },


/* ══════════════════════════════════════════════════════════════════════════
   BUILD 425 — ONDA 50: Hematologia & Endocrinologia — Sais Ferrosos + Vitamina D3
   +5 drogas: Fumarato Ferroso | Gluconato Ferroso | Ferro Polimaltosado
              Maltol Férrico | Colecalciferol (Vitamina D3)
   Categorias: hematologia (×4) | endocrinologia (×1)
   Motor de interações: $classe_ferro_sais_ionicos×vitamina_c (leve/1 — benéfica)
                        colecalciferol×orlistate_resinas (alta/4)
                        colecalciferol×$classe_diureticos_tiazidicos (moderada/3)
══════════════════════════════════════════════════════════════════════════ */


    /* ── FUMARATO FERROSO ───────────────────────────────────────────────── */
    "fumarato_ferroso": {
      name: { pt: 'Fumarato Ferroso', es: 'Fumarato Ferroso' },
      category: 'hematologia',
      icon: '🩸',
      color: '#B91C1C',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento de Ferro Oral (Sal Ferroso Divalente)', es: 'Suplemento de Hierro Oral (Sal Ferrosa Divalente)' },
      indications: {
        pt: ['Prevenção e tratamento da Anemia Ferropriva (Frequentemente associado a ácido fólico ou vitamina C em formulações obstétricas)'],
        es: ['Prevención y tratamiento de la Anemia Ferropénica']
      },
      commercialNames: { br: ['Ferronil', 'Iberet Fólico (Assoc)'], ar: ['Hierro Fumarato'] },
      presentation: { pt: ['Comprimidos 300 mg a 330 mg (Contém altíssima taxa de ferro elementar, aprox. 106 mg por comprimido)'], es: ['Comprimidos 300 mg a 330 mg'] },
      mechanism: {
        pt: 'O "Carregador Pesado". O Fumarato é um sal ferroso (Fe++) que possui a maior proporção de ferro elementar por miligrama de sal (cerca de 33%). Isso significa que um comprimido pequeno entrega uma marreta de ferro livre no duodeno para ser absorvido. Assim como o sulfato, sofre forte oxidação no estômago.',
        es: 'El "Cargador Pesado". El Fumarato posee la mayor proporción de hierro elemental por miligramo (33%). Un comprimido pequeño entrega una gran cantidad de hierro libre en el duodeno. Sufre fuerte oxidación en el estómago.'
      },
      dose: {
        adult: {
          pt: '1 comprimido ao dia ou em dias alternados (As diretrizes modernas favorecem dias alternados para reduzir a hepcidina e aumentar a absorção).',
          es: '1 comprimido al día o en días alternos.'
        },
        pediatric: {
          pt: '3 a 6 mg de Ferro Elementar/kg/dia (Requer cálculo preciso pela alta concentração).',
          es: '3 a 6 mg de Hierro Elemental/kg/día.'
        }
      },
      administration: { pt: ['Tomar com estômago vazio ou com vitamina C. O chá, café, leite e laticínios anulam a sua absorção.'], es: ['Tomar con estómago vacío o con vitamina C. El té, café o lácteos anulan su absorción.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Precaução em doenças de acúmulo de ferro.', es: 'Precaución en enfermedades de acúmulo.' } },
      commonAdverseEffects: { pt: ['Dor epigástrica severa, queimação e azia', 'Fezes negras e espessas', 'Constipação e náuseas'], es: ['Dolor epigástrico severo y acidez', 'Heces negras y espesas', 'Constipación y náuseas'] },
      dangerousAdverseEffects: { pt: ['Toxicidade gastrointestinal erosiva em superdosagem (Fatal em crianças)'], es: ['Toxicidad gastrointestinal erosiva en sobredosis (Fatal en niños)'] },
      contraindications: {
        absolute: { pt: ['Hemocromatose, anemia hemolítica, úlcera gástrica ativa'], es: ['Hemocromatosis, anemia hemolítica, úlcera gástrica activa'] },
        relative: { pt: ['Doença de Crohn (O ferro não absorvido oxida as bactérias e piora a inflamação)'], es: ['Enfermedad de Crohn (El hierro no absorbido oxida las bacterias y empeora la inflamación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A FALÁCIA DO COMPRIMIDO MENOR: Não se engane pelo peso do comprimido. 300mg de Fumarato entregam 100mg de ferro PURO, enquanto 300mg de Sulfato entregam apenas 60mg. É muito mais forte e, consequentemente, queima muito mais o estômago do paciente se ele for sensível.', es: 'LA FALACIA DEL COMPRIMIDO MENOR: 300mg de Fumarato entregan 100mg de hierro PURO, mientras 300mg de Sulfato entregan solo 60mg. Es mucho más fuerte y quema más el estómago.' }
      },
      references: {
        pt: 'ASH Guidelines for Iron Deficiency; WHO Model Formulary.',
        es: 'ASH Guidelines for Iron Deficiency; WHO Model Formulary.'
      }
    },

    /* ── GLUCONATO FERROSO ──────────────────────────────────────────────── */
    "gluconato_ferroso": {
      name: { pt: 'Gluconato Ferroso', es: 'Gluconato Ferroso' },
      category: 'hematologia',
      icon: '🩸',
      color: '#B91C1C',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento de Ferro Oral (Sal Ferroso de Baixa Concentração)', es: 'Suplemento de Hierro Oral (Sal Ferrosa de Baja Concentración)' },
      indications: {
        pt: ['Anemia ferropriva leve a moderada', 'Suplementação pediátrica e obstétrica onde o paciente não tolera sulfato ou fumarato'],
        es: ['Anemia ferropénica leve a moderada', 'Suplementación pediátrica y obstétrica donde el paciente no tolera sulfato']
      },
      commercialNames: { br: ['Combiron (Histórico/Assoc)'], ar: ['Gluconato Ferroso'] },
      presentation: { pt: ['Comprimidos 300 mg (Contém apenas ~35 mg de ferro elementar, ou 12%)', 'Xaropes infantis'], es: ['Comprimidos 300 mg (Contiene ~35 mg de hierro elemental)', 'Jarabes infantiles'] },
      mechanism: {
        pt: 'O "Ferro Suave". É um sal ferroso igual ao sulfato, mas a molécula do ácido glucônico é gigantesca. Isso dilui a quantidade de ferro livre por comprimido. Como tem menos ferro bruto, ele irrita muito menos a mucosa gástrica e causa muito menos dor de estômago e diarreia, melhorando a adesão do paciente intolerante.',
        es: 'El "Hierro Suave". La molécula de ácido glucónico es gigante. Esto diluye la cantidad de hierro libre por comprimido. Como tiene menos hierro bruto, irrita mucho menos la mucosa gástrica, mejorando la adhesión.'
      },
      dose: {
        adult: {
          pt: 'Requer mais comprimidos (ex: 2 a 3 por dia) para atingir os 100 mg de ferro elementar necessários para tratamento ativo.',
          es: 'Requiere más comprimidos (ej: 2 a 3 por día) para alcanzar los 100 mg de hierro elemental necesarios.'
        },
        pediatric: {
          pt: 'Xarope dosado estritamente por mg de ferro elementar.',
          es: 'Jarabe dosificado estrictamente por mg de hierro elemental.'
        }
      },
      administration: { pt: ['Deve ser tomado preferencialmente em jejum, mas devido à suavidade, pacientes relutam menos. Líquidos devem ser tomados com canudo.'], es: ['Debe ser tomado en ayunas. Líquidos deben ser tomados con pajita.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Acompanhar em hepatopatias.', es: 'Acompañar en hepatopatías.' } },
      commonAdverseEffects: { pt: ['Fezes escuras', 'Constipação e náuseas (Bem menores que no sulfato/fumarato)'], es: ['Heces oscuras', 'Constipación y náuseas (Menores que en sulfato/fumarato)'] },
      dangerousAdverseEffects: { pt: ['Intoxicação em superdosagem acidental (O paciente pode tentar tomar 10 pílulas para "compensar" a fraqueza)'], es: ['Intoxicación en sobredosis accidental'] },
      contraindications: {
        absolute: { pt: ['Sobrecarga de ferro', 'Anemias hemolíticas'], es: ['Sobrecarga de hierro', 'Anemias hemolíticas'] },
        relative: { pt: ['Nenhuma específica além das restrições de ferro clássicas'], es: ['Ninguna específica además de las restricciones de hierro clásicas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'A ILUSÃO DA DOSE: Um erro comum é prescrever "1 comprimido ao dia" de gluconato achando que é o mesmo que 1 de sulfato. O paciente levará O TRIPLO do tempo para curar a anemia se o médico não ajustar a dose de ferro elementar corretamente.', es: 'LA ILUSIÓN DE LA DOSIS: Un error común es prescribir "1 comprimido al día" de gluconato creyendo que es lo mismo que sulfato. El paciente tardará EL TRIPLE de tiempo en curar la anemia.' }
      },
      references: {
        pt: 'FDA Label; Diretrizes Clínicas de Reposição de Ferro da Sociedade de Pediatria.',
        es: 'FDA Label; Directrices Clínicas de Reposición de Hierro.'
      }
    },

    /* ── FERRO POLIMALTOSADO ────────────────────────────────────────────── */
    "ferro_polimaltosado": {
      name: { pt: 'Ferro Polimaltosado (Complexo de Ferro(III) Hidróxido Polimaltosado)', es: 'Hierro Polimaltosado (Complejo de Hierro(III) Hidróxido Polimaltosado)' },
      category: 'hematologia',
      icon: '🩸',
      color: '#7C2D12',
      colorTxt: '#ffffff',
      class: { pt: 'Complexo Férrico Não-Iônico Oral', es: 'Complejo Férrico No Iónico Oral' },
      indications: {
        pt: ['Anemia ferropriva, especialmente em crianças, gestantes e pacientes que não toleram NENHUM sal ferroso tradicional', 'Profilaxia em prematuros'],
        es: ['Anemia ferropénica, especialmente en niños, gestantes y pacientes que no toleran NINGUNA sal ferrosa tradicional']
      },
      commercialNames: { br: ['Neutrofer', 'Noripurum', 'Endofer'], ar: ['Ferranin'] },
      presentation: { pt: ['Comprimidos mastigáveis 100 mg', 'Solução oral (gotas e xarope)'], es: ['Comprimidos masticables 100 mg', 'Solución oral (gotas y jarabe)'] },
      mechanism: {
        pt: 'A "Gaiola de Açúcar Inteligente". A maior revolução do ferro oral. Aqui, o ferro Férrico (Fe+++) está engaiolado dentro de uma macromolécula de polimaltose. Por não ser iônico (não há sais soltos), ele NÃO SOFRE OXIDAÇÃO no estômago. Ele não queima a mucosa e não solta radicais livres. Além disso, o intestino o absorve de forma ativa (apenas o que precisa), praticamente anulando o risco de intoxicação acidental letal em crianças.',
        es: 'La "Jaula de Azúcar Inteligente". La mayor revolución del hierro oral. El hierro Férrico está enjaulado en una macromolécula. Al no ser iónico, NO SUFRE OXIDACIÓN en el estómago. No quema la mucosa ni suelta radicales libres. El intestino lo absorbe activamente.'
      },
      dose: {
        adult: {
          pt: '100 mg a 200 mg via oral (mastigável ou deglutido) por dia. Pode ser tomado de uma só vez.',
          es: '100 mg a 200 mg vía oral (masticable o deglutido) por día.'
        },
        pediatric: {
          pt: 'Gotas altamente seguras. Tratamento: 3 a 5 mg/kg/dia. Profilaxia: 1 a 2 mg/kg/dia.',
          es: 'Gotas altamente seguras. Tratamiento: 3 a 5 mg/kg/día.'
        }
      },
      administration: { pt: ['O TRIUNFO FARMACOLÓGICO: DEVE e PODE ser tomado JUNTO e misturado com os alimentos! Não interage com leite, cálcio, café ou pão. Não escurece e não mancha os dentes das crianças.'], es: ['EL TRIUNFO FARMACOLÓGICO: DEBE y PUEDE ser tomado JUNTO con los alimentos. No interactúa con leche o calcio. No mancha los dientes de los niños.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade clínica.', es: 'Sin necesidad clínica.' } },
      commonAdverseEffects: { pt: ['Fezes escuras (esperado)', 'Distúrbios gastrointestinais LEVES (A incidência de náusea/cólicas cai de 30% no sulfato para menos de 5% no polimaltosado)'], es: ['Heces oscuras', 'Disturbios gastrointestinales LEVES (Cae de 30% en sulfato a menos de 5% aquí)'] },
      dangerousAdverseEffects: { pt: ['Praticamente isento de toxicidade fatal em superdosagem aguda infantil, pois o intestino só abre a "gaiola" se precisar do ferro.'], es: ['Prácticamente exento de toxicidad fatal en sobredosis aguda infantil.'] },
      contraindications: {
        absolute: { pt: ['Hemocromatose'], es: ['Hemocromatosis'] },
        relative: { pt: ['Anemias crônicas por déficit de ácido fólico exclusivas'], es: ['Anemias crónicas por déficit de ácido fólico exclusivas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ADESÃO GARANTIDA: Na pediatria e obstetrícia, o sulfato ferroso tem uma taxa de abandono gigantesca por causa das cólicas e do gosto horrível de "ferrugem". O Polimaltosado (como o Noripurum) tem gosto de doce/chocolate e zero cólicas. Se o paciente puder pagar, é a escolha superior definitiva para garantir a cura.', es: 'LA ADHESIÓN GARANTIZADA: En pediatría y obstetricia, el sulfato ferroso tiene una tasa de abandono gigantesca. El Polimaltosado tiene sabor a dulce y cero cólicos. Es la elección superior definitiva.' }
      },
      references: {
        pt: 'Geisser P. Safety and efficacy of iron(III)-hydroxide polymaltose complex (2007); Diretrizes de Anemia na Gravidez FEBRASGO.',
        es: 'Geisser P. Safety and efficacy of iron(III) polymaltose (2007); Directrices de Anemia en el Embarazo.'
      }
    },

    /* ── MALTOL FÉRRICO ─────────────────────────────────────────────────── */
    "maltol_ferrico": {
      name: { pt: 'Maltol Férrico', es: 'Maltol Férrico' },
      category: 'hematologia',
      icon: '🩸',
      color: '#7C2D12',
      colorTxt: '#ffffff',
      class: { pt: 'Complexo de Ferro Oral de Alta Biodisponibilidade', es: 'Complejo de Hierro Oral de Alta Biodisponibilidad' },
      indications: {
        pt: ['Tratamento da anemia ferropriva em pacientes com Doença Inflamatória Intestinal (Retocolite Ulcerativa, Doença de Crohn)', 'Alternativa ao ferro IV em adultos que não toleram ferro oral clássico'],
        es: ['Tratamiento de la anemia ferropénica en pacientes con Enfermedad Inflamatoria Intestinal (Crohn)', 'Alternativa al hierro IV en adultos que no toleran hierro oral']
      },
      commercialNames: { br: ['Accrufer (Importação EUA)'], ar: ['Feraccru'] },
      presentation: { pt: ['Cápsulas duras 30 mg'], es: ['Cápsulas duras 30 mg'] },
      mechanism: {
        pt: 'A mais recente biotecnologia para o intestino doente. Em pacientes com Doença de Crohn, dar sulfato ferroso oxida a parede do intestino já sangrando e causa dores agoniantes. O Maltol Férrico é um quelato estável onde 1 ferro se liga firmemente a 3 moléculas de maltol. O complexo atravessa a barreira do intestino doente de forma intacta e neutra, sem irritar a mucosa e sem gerar os radicais livres tóxicos.',
        es: 'La biotecnología para el intestino enfermo. Dar sulfato ferroso a pacientes con Crohn oxida la pared y causa dolor. El Maltol Férrico es un quelato estable que cruza la barrera del intestino enfermo de forma intacta y neutra, sin irritar la mucosa.'
      },
      dose: {
        adult: {
          pt: '30 mg, via oral, DUAS VEZES ao dia (Total de 60 mg diários).',
          es: '30 mg, vía oral, DOS VECES al día (Total de 60 mg diarios).'
        },
        pediatric: {
          pt: 'Não aprovado para pediatria.',
          es: 'No aprobado para pediatría.'
        }
      },
      administration: { pt: ['Deve ser tomado DE ESTÔMAGO VAZIO (1 hora antes ou 2 horas depois da refeição). Não mastigar a cápsula.'], es: ['Debe ser tomado DE ESTÓMAGO VACÍO (1 hora antes o 2 horas después de la comida). No masticar la cápsula.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Evitar em sobrecarga férrica hepática.', es: 'Evitar en sobrecarga férrica hepática.' } },
      commonAdverseEffects: { pt: ['Flatulência leve', 'Constipação e fezes escuras', 'Dor de estômago (Incidência infinitamente menor que os sais tradicionais)'], es: ['Flatulencia leve', 'Constipación y heces oscuras', 'Dolor de estómago (Incidencia infinitamente menor que las sales tradicionales)'] },
      dangerousAdverseEffects: { pt: ['Não apresenta letalidade aguda alta devido à absorção limitante e não-iônica.'], es: ['No presenta letalidad aguda alta debido a absorción limitante.'] },
      contraindications: {
        absolute: { pt: ['Hemocromatose', 'Surtos hemorrágicos maciços de DII onde a via oral é impossibilitada'], es: ['Hemocromatosis', 'Brotes hemorrágicos masivos de EII donde la vía oral es imposible'] },
        relative: { pt: ['Uso associado com injeções de ferro venoso simultâneas'], es: ['Uso asociado con inyecciones de hierro venoso simultáneas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SALVAÇÃO DOS COLÍTICOS: Antes do Maltol Férrico, o paciente com doença de Crohn e anemia severa era obrigado a frequentar o hospital semanalmente para receber injeções de Ferro na veia, pois a pílula de ferro comum piorava o sangramento retal. Esta droga permite o tratamento domiciliar e pacífico da inflamação intestinal.', es: 'LA SALVACIÓN DE LOS COLÍTICOS: Antes de este remedio, el paciente con Crohn y anemia debía ir al hospital para inyecciones IV. Esta droga permite el tratamiento domiciliario sin sangrado rectal.' }
      },
      references: {
        pt: 'AEGIS-H2H Study; FDA Label (Accrufer); European Crohn\'s and Colitis Organisation (ECCO) Guidelines.',
        es: 'AEGIS-H2H Study; FDA Label (Accrufer); ECCO Guidelines.'
      }
    },

    /* ── COLECALCIFEROL (Vitamina D3) ─────────────────────────────────── */
    "colecalciferol": {
      name: { pt: 'Colecalciferol (Vitamina D3)', es: 'Colecalciferol (Vitamina D3)' },
      category: 'endocrinologia',
      icon: '☀️',
      color: '#B45309',
      colorTxt: '#ffffff',
      class: { pt: 'Suplemento Vitamínico Lipossolúvel (Pró-hormônio inativo)', es: 'Suplemento Vitamínico Liposoluble (Prohormona inactiva)' },
      indications: {
        pt: ['Prevenção e Tratamento da hipovitaminose D (Deficiência de 25-OH-Vitamina D < 20 ou 30 ng/mL)', 'Profilaxia do Raquitismo e Osteoporose (associado ao cálcio)'],
        es: ['Prevención y Tratamiento de la hipovitaminosis D', 'Profilaxis del Raquitismo y Osteoporosis (asociado al calcio)']
      },
      commercialNames: { br: ['Addera D3', 'DePura', 'D-Prev'], ar: ['D-Vit', 'Raquiferol'] },
      presentation: { pt: ['Cápsulas/Comprimidos/Gotas (200 UI, 1.000 UI, 7.000 UI, 10.000 UI, 50.000 UI)'], es: ['Cápsulas/Comprimidos/Gotas (desde 200 UI hasta 50.000 UI)'] },
      mechanism: {
        pt: 'O "Hormônio do Sol de Prateleira". O colecalciferol é a Vitamina D INATIVA (a mesma que sua pele produz no sol). Ele não faz nada sozinho. Quando engolido, é estocado na gordura do corpo e precisa viajar para o fígado (onde vira Calcifediol) e DEPOIS para os rins (onde vira o super-hormônio Calcitriol). Só assim ele permite que o intestino absorva o cálcio do leite e fortaleça os ossos.',
        es: 'La "Hormona del Sol de Estante". Es la Vitamina D INACTIVA. Cuando se ingiere, se almacena en la grasa y viaja al hígado (se vuelve Calcifediol) y LUEGO a los riñones (se vuelve Calcitriol). Solo así permite que el intestino absorba calcio.'
      },
      dose: {
        adult: {
          pt: 'Manutenção: 1.000 a 2.000 UI/dia. Tratamento do Déficit Grave: 50.000 UI UMA VEZ por semana durante 8 semanas, seguido da manutenção.',
          es: 'Mantenimiento: 1.000 a 2.000 UI/día. Tratamiento de Déficit Grave: 50.000 UI UNA VEZ por semana por 8 semanas.'
        },
        pediatric: {
          pt: 'Manutenção lactentes: 400 UI/dia. Crianças maiores: 600 UI/dia. (Gotas oleosas).',
          es: 'Mantenimiento lactantes: 400 UI/día. Niños mayores: 600 UI/día.'
        }
      },
      administration: { pt: ['OBRIGATÓRIO tomar junto a uma refeição rica em GORDURAS (Almoço ou jantar com azeite/carne). A absorção de uma megadose de 50.000 UI em jejum seco é quase zero (o corpo desperdiça).'], es: ['OBLIGATORIO tomar junto a una comida rica en GRASAS. La absorción de una megadosis de 50.000 UI en ayunas es casi cero.'] },
      renalAdjustment: { required: true, message: { pt: 'INÚTIL em pacientes com Doença Renal Crônica terminal em diálise. O rim parado não consegue ativar a vitamina (Exige Calcitriol puro).', es: 'INÚTIL en pacientes con Enfermedad Renal Crónica terminal. El riñón parado no logra activar la vitamina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em cirrose grave, pois o primeiro passo de ativação falhará.', es: 'Cuidado en cirrosis grave, el primer paso de activación fallará.' } },
      commonAdverseEffects: { pt: ['Geralmente assintomático nas doses normais', 'Distúrbios gastrointestinais leves (Cápsulas oleosas)'], es: ['Generalmente asintomático en dosis normales', 'Disturbios gastrointestinales leves'] },
      dangerousAdverseEffects: { pt: ['INTOXICAÇÃO POR MEGADOSE DIÁRIA (Cálcio sobe, causando pedras nos rins e coma — muito comum em curandeiros que prescrevem o "Protocolo de Coimbra" irracional)'], es: ['INTOXICACIÓN POR MEGADOSIS DIARIA (Calcio sube, causando piedras en riñones y coma)'] },
      contraindications: {
        absolute: { pt: ['Hipercalcemia documentada (> 10.5 mg/dL)', 'Sarcoidose ou tuberculose hiperativa (Essas doenças "ativam" a vitamina D sozinhas de forma perigosa)'], es: ['Hipercalcemia documentada', 'Sarcoidosis o tuberculosis hiperactiva (Estas enfermedades "activan" la vitamina D peligrosamente)'] },
        relative: { pt: ['Pacientes com histórico de pedras de cálcio repetidas no rim (Nefrolitíase ativa)'], es: ['Pacientes con historial de cálculos de calcio repetidos en el riñón'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O FENÔMENO DO ACÚMULO NA OBESIDADE: A vitamina D é gorda (lipossolúvel). Em pacientes com obesidade mórbida, as altas doses de Addera ficam "vizinhas e presas" no tecido adiposo do corpo e não vão para o sangue. Obesos exigem doses até 3 vezes maiores que pessoas magras para curar a deficiência.', es: 'EL FENÓMENO DEL ACÚMULO EN OBESIDAD: La vitamina D es liposoluble. En obesidad mórbida, las altas dosis quedan "presas" en el tejido adiposo y no van a la sangre. Obesos exigen dosis 3 veces mayores para curar la deficiencia.' }
      },
      references: {
        pt: 'Endocrine Society Clinical Practice Guideline on Vitamin D; Diretrizes da Sociedade Brasileira de Endocrinologia e Metabologia (SBEM).',
        es: 'Endocrine Society Clinical Practice Guideline on Vitamin D; Directrices Internacionales.'
      }
    }

  }); /* fim Object.assign NEFRO_DRUGS_DB — BUILD 416-REFACTOR
         45 fármacos migrados de neurologia.js:
         Quelantes Fósforo (5): sevelamer, acetato_de_calcio, carbonato_de_calcio, carbonato_de_lantanio, oxihidroxido_sucroferrico
         Hipercalemia (5): citrato_ferrico, patiromer, ciclossilicato_de_zirconio_sodico, poliestirenossulfonato_de_sodio, poliestirenossulfonato_de_calcio
         ESAs + Vitamina D (5): epoetina_alfa, epoetina_beta, darbepoetina_alfa, mircera, calcitriol
         Vitaminas D Análogas + Calcimiméticos + Aquarético (5): alfacalcidol, paricalcitol, cinacalcete, etelcalcetida, tolvaptana
         Água + Ferro IV (5): conivaptana, citrato_de_potassio, citrato_sodio_acido_citrico, sacarato_hidroxido_ferrico, carboximaltose_ferrica
         Ferro IV Pesado (5): derisomaltose_ferrica, dextrana_ferrica, gluconato_ferrico, finerenona, voclosporina
         Proteção Renal (5): sparsentana, cisteamina, acido_tioctico, cloreto_de_sodio_09, ringer_lactato
         Fluidos + Eletrólitos (5): plasma_lyte, fosfato_de_potassio, fosfato_de_sodio, oxido_de_magnesio, sulfato_ferroso
         Ferro Oral + Vitamina D3 (5): fumarato_ferroso, gluconato_ferroso, ferro_polimaltosado, maltol_ferrico, colecalciferol */

/* ── BUILD 456-NEFRO: Aliases de resolução de chave ── */
Object.assign(window.NEFRO_DRUGS_DB, {
    "ferro_sacarato": window.NEFRO_DRUGS_DB["sacarato_hidroxido_ferrico"],
    "poliestirenossulfonato": window.NEFRO_DRUGS_DB["poliestirenossulfonato_de_sodio"]
}); /* fim aliases BUILD 456-NEFRO */

})();
