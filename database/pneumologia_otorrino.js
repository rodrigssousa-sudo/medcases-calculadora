/* ══════════════════════════════════════════════════════════════════════════
   MedCases Calculadora — BUILD 396
   database/pneumologia_otorrino.js
   Módulo: Descongestionantes (Otorrino) + Terapia Inalatória (Pneumologia)
   Categorias: 'otorrino' | 'pneumologia'
   Fármacos (5): Oximetazolina, Xilometazolina, Nafazolina,
                  Pseudoefedrina, Budesonida+Formoterol
   Formato: IIFE Object-DB → window.PNEUMOLOGIA_OTORRINO_DRUGS_DB
══════════════════════════════════════════════════════════════════════════ */

(function () {
  if (!window.PNEUMOLOGIA_OTORRINO_DRUGS_DB) window.PNEUMOLOGIA_OTORRINO_DRUGS_DB = {};

  Object.assign(window.PNEUMOLOGIA_OTORRINO_DRUGS_DB, {

    /* ── OXIMETAZOLINA ──────────────────────────────────────────────────── */
    "oximetazolina": {
      name: { pt: 'Oximetazolina', es: 'Oximetazolina' },
      category: 'otorrino',
      class: { pt: 'Descongestionante Nasal (Agonista Alfa-Adrenérgico Direto)', es: 'Descongestionante Nasal (Agonista Alfa-Adrenérgico Directo)' },
      indications: {
        pt: ['Alívio sintomático rápido da congestão nasal (Resfriados, Rinossinusite)', 'Epistaxe anterior refratária (uso em PS para estancar sangramento nasal no algodão)'],
        es: ['Alivio sintomático rápido de la congestión nasal (Resfriados, Rinosinusitis)', 'Epistaxis anterior refractaria (uso en Urgencias para estancar sangrado nasal en algodón)']
      },
      commercialNames: { br: ['Afrin', 'Aturgyl'], ar: ['Iliadin'] },
      presentation: { pt: ['Spray/Gotas Nasais Adulto 0,05%', 'Gotas Pediátricas 0,025%'], es: ['Spray/Gotas Nasales Adulto 0,05%', 'Gotas Pediátricas 0,025%'] },
      mechanism: {
        pt: 'Estimula ativamente os receptores alfa-1 e alfa-2 adrenérgicos localizados nas vênulas da mucosa do nariz. Isso causa uma vasoconstrição (aperto do vaso) extremamente potente e quase imediata. A mucosa "desincha", o espaço para o ar aumenta e o nariz desentope em minutos, durando de 10 a 12 horas.',
        es: 'Estimula activamente los receptores alfa-1 y alfa-2 adrenérgicos localizados en las vénulas de la mucosa de la nariz. Esto causa una vasoconstricción extremadamente potente y casi inmediata. La mucosa se "deshincha", el espacio para el aire aumenta y la nariz se destapa en minutos, durando de 10 a 12 horas.'
      },
      dose: {
        adult: {
          pt: '2 a 3 jatos/gotas (0,05%) em cada narina, a cada 12 horas. (Máximo de 2 injeções ao dia).',
          es: '2 a 3 puffs/gotas (0,05%) en cada fosa nasal, cada 12 horas. (Máximo de 2 inyecciones al día).'
        },
        pediatric: {
          pt: 'Crianças de 2 a 5 anos: 2 a 3 gotas da formulação pediátrica (0,025%) a cada 12 horas.',
          es: 'Niños de 2 a 5 años: 2 a 3 gotas de la formulación pediátrica (0,025%) cada 12 horas.'
        }
      },
      administration: { pt: ['Administração estritamente nasal tópica. USO RESTRITO A 3 a 5 DIAS MÁXIMO.'], es: ['Administración estrictamente nasal tópica. USO RESTRINGIDO A 3 a 5 DÍAS MÁXIMO.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem ajuste renal.', es: 'Acción local, sin ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste hepático.', es: 'Sin necesidad de ajuste hepático.' } },
      commonAdverseEffects: { pt: ['Ardência passageira e secura na mucosa nasal', 'Espirros pós-aplicação'], es: ['Ardor pasajero y sequedad en la mucosa nasal', 'Estornudos posaplicación'] },
      dangerousAdverseEffects: { pt: ['Crise hipertensiva sistêmica (se deglutido ou abusado)', 'Perfuração de septo por isquemia crônica'], es: ['Crisis hipertensiva sistémica (si se traga o abusa)', 'Perforación de tabique por isquemia crónica'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos (risco de intoxicação grave do SNC)', 'Uso contínuo ininterrupto por mais de 5 dias'], es: ['Niños menores de 2 años (riesgo de intoxicación grave del SNC)', 'Uso continuo ininterrumpido por más de 5 días'] },
        relative: { pt: ['Pacientes com Hipertensão grave descompensada', 'Glaucoma de ângulo fechado'], es: ['Pacientes con Hipertensión grave descompensada', 'Glaucoma de ángulo cerrado'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'INTOXICAÇÃO PEDIÁTRICA LETAL: Se um bebê (ex: 1 ano) engolir acidentalmente algumas gotas de Oximetazolina de um frasco aberto, a droga penetra o cérebro e age nos receptores alfa-2 centrais. O bebê sofre bradicardia profunda, hipotensão, apneia e entra em COMA (efeito idêntico a superdosagem de Clonidina). Requer UTI imediata.', es: 'INTOXICACIÓN PEDIÁTRICA LETAL: Si un bebé traga accidentalmente algunas gotas de Oximetazolina, la droga penetra el cerebro y actúa en receptores alfa-2. El bebé sufre bradicardia profunda, hipotensión, apnea y entra en COMA (efecto idéntico a Clonidina). Requiere UCI inmediata.' }
      }
    },

    /* ── XILOMETAZOLINA ─────────────────────────────────────────────────── */
    "xilometazolina": {
      name: { pt: 'Xilometazolina', es: 'Xilometazolina' },
      category: 'otorrino',
      class: { pt: 'Descongestionante Nasal (Agonista Alfa-Adrenérgico Direto)', es: 'Descongestionante Nasal (Agonista Alfa-Adrenérgico Directo)' },
      indications: {
        pt: ['Alívio agudo do entupimento nasal em gripes, sinusites e alergias', 'Facilitação de exame de rinoscopia no otorrino'],
        es: ['Alivio agudo del taponamiento nasal en gripes, sinusitis y alergias', 'Facilitación de examen de rinoscopia en otorrino']
      },
      commercialNames: { br: ['Otrivina', 'Snid (Assoc)'], ar: ['Otrivina'] },
      presentation: { pt: ['Spray Nasal 0,1% (Adultos) e 0,05% (Crianças > 2 anos)'], es: ['Spray Nasal 0,1% (Adultos) y 0,05% (Niños > 2 años)'] },
      mechanism: {
        pt: 'Mecanismo essencialmente idêntico ao da Oximetazolina (vasoconstrição local alfa-adrenérgica). A diferença principal é farmacocinética: a xilometazolina possui um início de ação fulminante (menor que 2 minutos) e uma duração de 8 a 10 horas, sendo amplamente usada na Europa como padrão-ouro tópico.',
        es: 'Mecanismo esencialmente idéntico al de la Oximetazolina (vasoconstricción local alfa-adrenérgica). La diferencia principal es farmacocinética: tiene un inicio de acción fulminante (menor a 2 minutos) y duración de 8 a 10 horas, siendo el patrón oro tópico en Europa.'
      },
      dose: {
        adult: {
          pt: '1 a 2 jatos da solução a 0,1% em cada narina a cada 8 ou 10 horas (Máx 3 vezes/dia).',
          es: '1 a 2 puffs de la solución al 0,1% en cada fosa nasal cada 8 o 10 horas (Máx 3 veces/día).'
        },
        pediatric: {
          pt: 'Crianças de 2 a 11 anos: 1 jato da solução a 0,05% a cada 12 horas.',
          es: 'Niños de 2 a 11 años: 1 puff de la solución al 0,05% cada 12 horas.'
        }
      },
      administration: { pt: ['Inalação nasal. Limpar o nariz antes de usar e não usar por mais de 5 a 7 dias.'], es: ['Inhalación nasal. Limpiar la nariz antes de usar y no usar por más de 5 a 7 días.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação tópica, sem ajuste sistêmico renal.', es: 'Acción tópica, sin ajuste sistémico renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ação tópica.', es: 'Acción tópica.' } },
      commonAdverseEffects: { pt: ['Irritação nasal leve', 'Palpitações isoladas'], es: ['Irritación nasal leve', 'Palpitaciones aisladas'] },
      dangerousAdverseEffects: { pt: ['Hipertensão se absorvido via gastrointestinal em excesso'], es: ['Hipertensión si absorbido vía gastrointestinal en exceso'] },
      contraindications: {
        absolute: { pt: ['Rinite atrófica severa', 'Uso crônico prolongado'], es: ['Rinitis atrófica severa', 'Uso crónico prolongado'] },
        relative: { pt: ['Pacientes com Doença Arterial Coronariana severa'], es: ['Pacientes con Enfermedad Arterial Coronaria severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CUIDADO NO NEURO-CIRÚRGICO: A Xilometazolina (e oximetazolina) não devem NUNCA ser aplicadas em pacientes que acabaram de passar por remoção de tumor pituitário transesfenoidal (pelo nariz) ou trauma craniano que causou exposição da dura-máter, pois a droga atinge o cérebro diretamente.', es: 'CUIDADO EN NEUROCIRUGÍA: La Xilometazolina no debe NUNCA aplicarse en pacientes que pasaron por remoción de tumor pituitario transesfenoidal o trauma con exposición de duramadre, pues la droga alcanza el cerebro directamente.' }
      }
    },

    /* ── NAFAZOLINA ─────────────────────────────────────────────────────── */
    "nafazolina": {
      name: { pt: 'Nafazolina (Cloridrato de)', es: 'Nafazolina (Clorhidrato de)' },
      category: 'otorrino',
      class: { pt: 'Descongestionante Nasal de Curta Duração (Agonista Alfa-Adrenérgico)', es: 'Descongestionante Nasal de Corta Duración (Agonista Alfa-Adrenérgico)' },
      indications: {
        pt: ['Congestão nasal alérgica ou infecciosa rápida'],
        es: ['Congestión nasal alérgica o infecciosa rápida']
      },
      commercialNames: { br: ['Neosoro', 'Sorine', 'Naridrin'], ar: ['Dazolin'] },
      presentation: { pt: ['Solução Nasal (Gotas) 0,5 mg/mL (Geralmente 1% ou inferior)'], es: ['Solución Nasal (Gotas) 0,5 mg/mL'] },
      mechanism: {
        pt: 'O mais antigo, fugaz e aditivo dos descongestionantes. Estimula fortemente os receptores alfa-adrenérgicos, gerando vasoconstrição maciça e alívio imediato do nariz trancado. O GRANDE PROBLEMA: Seu efeito dura apenas 3 a 4 horas. Assim que o efeito passa, o vaso sanguíneo nasal se dilata com muito mais força do que antes (isquemia reativa), forçando o paciente a usar o remédio várias vezes ao dia.',
        es: 'El más antiguo, fugaz y adictivo de los descongestionantes. Estimula fuertemente receptores alfa-adrenérgicos, generando vasoconstricción y alivio inmediato. EL GRAN PROBLEMA: Su efecto dura solo 3 a 4 horas. Al pasar el efecto, el vaso se dilata con más fuerza que antes (isquemia reactiva), forzando al paciente a usar el remedio varias veces al día.'
      },
      dose: {
        adult: {
          pt: '2 a 4 gotas em cada narina, a cada 4 ou 6 horas.',
          es: '2 a 4 gotas en cada fosa nasal, cada 4 o 6 horas.'
        },
        pediatric: {
          pt: 'Contraindicado em menores de 12 anos em muitas diretrizes mundiais pelo risco de coma e bradicardia severa.',
          es: 'Contraindicado en menores de 12 años en muchas directrices mundiales por riesgo de coma y bradicardia severa.'
        }
      },
      administration: { pt: ['MÁXIMO DE 3 DIAS. Devido ao seu curtíssimo tempo de ação, é a droga campeã na geração de vício.'], es: ['MÁXIMO DE 3 DÍAS. Debido a su cortísimo tiempo de acción, es la droga campeona en generar adicción.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, depuração inexpressiva nos rins se usado corretamente.', es: 'Acción local, depuración inexpresiva en riñones.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Queimação profunda nas narinas', 'Ressecamento de garganta', 'Espirros e aumento de muco rebote'], es: ['Quemazón profunda en las fosas nasales', 'Resecamiento de garganta', 'Estornudos y aumento de moco rebote'] },
      dangerousAdverseEffects: { pt: ['RINITE MEDICAMENTOSA CRÔNICA (Destruição da fisiologia do nariz)', 'Taquicardia ou Hipertensão (se o paciente pingar 10-15 gotas engolindo o excesso)'], es: ['RINITIS MEDICAMENTOSA CRÓNICA (Destrucción de la fisiología de la nariz)', 'Taquicardia o Hipertensión (si el paciente gotea 10-15 gotas tragando el exceso)'] },
      contraindications: {
        absolute: { pt: ['Bebês e Crianças pequenas (Intoxicação por Nafazolina causa parada respiratória)', 'Uso contínuo para "dormir melhor"'], es: ['Bebés y Niños pequeños (Intoxicación por Nafazolina causa paro respiratorio)', 'Uso continuo para "dormir mejor"'] },
        relative: { pt: ['Hipertensos crônicos e portadores de tireotoxicose'], es: ['Hipertensos crónicos y portadores de tirotoxicosis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A PRAGA DO NEOSORO: O vício em Nafazolina afeta milhões de pessoas. O nariz "esquece" como respirar sozinho e fica entupido perpetuamente (Rinite Medicamentosa ou Vasomotora). O paciente acorda de madrugada sufocando para pingar o remédio. O desmame exige suspensão total e uso de corticoide nasal (ex: Fluticasona) por meses.', es: 'LA PLAGA DEL NEOSORO: El vicio en Nafazolina afecta a millones. La nariz "olvida" cómo respirar sola y queda tapada perpetuamente. El paciente despierta asfixiándose para gotear el remedio. El destete exige suspensión total y uso de corticoide nasal.' }
      }
    },

    /* ── PSEUDOEFEDRINA ─────────────────────────────────────────────────── */
    "pseudoefedrina": {
      name: { pt: 'Pseudoefedrina', es: 'Pseudoefedrina' },
      category: 'pneumologia',
      class: { pt: 'Descongestionante Sistêmico (Agonista Adrenérgico Indireto e Direto)', es: 'Descongestionante Sistémico (Agonista Adrenérgico Indirecto y Directo)' },
      indications: {
        pt: ['Alívio sistêmico da congestão nasal e sinusal severa (frequentemente associada a alergias ou gripes pesadas)'],
        es: ['Alivio sistémico de la congestión nasal y sinusal severa (frecuentemente asociada a alergias o gripes pesadas)']
      },
      commercialNames: { br: ['Allegra D', 'Claritin D', 'Tylenol Sinus'], ar: ['Qura Plus (Assoc)', 'Decidex'] },
      presentation: { pt: ['Comprimidos 60 mg, ou comprimidos XR de liberação prolongada 120 mg (sempre associado a outro fármaco)'], es: ['Comprimidos 60 mg, o comprimidos XR de liberación prolongada 120 mg'] },
      mechanism: {
        pt: 'Estimulante agressivo do sistema nervoso simpático. A Pseudoefedrina atua diretamente nos receptores adrenérgicos (alfa e beta) e indiretamente forçando os neurônios a liberarem Noradrenalina de seus estoques em todo o corpo. Nos vasos do nariz, causa vasoconstrição potente "secando" a secreção. No resto do corpo, causa aceleração do coração, aumento de pressão e perda de sono.',
        es: 'Estimulante agresivo del sistema nervioso simpático. Actúa directa e indirectamente forzando neuronas a liberar Noradrenalina en todo el cuerpo. En los vasos de la nariz, causa vasoconstricción potente "secando" la secreción. En el resto del cuerpo, acelera el corazón, sube la presión y quita el sueño.'
      },
      dose: {
        adult: {
          pt: 'Comprimidos de 60 mg a cada 4 ou 6 horas. (Nas apresentações retard "D", geralmente 120 mg a cada 12 horas).',
          es: 'Comprimidos de 60 mg cada 4 o 6 horas. (En presentaciones retard "D", generalmente 120 mg cada 12 horas).'
        },
        pediatric: {
          pt: 'Uso fortemente desencorajado em < 6 anos por toxicidade cardiovascular e excitação fatal.',
          es: 'Uso fuertemente desaconsejado en < 6 años por toxicidad cardiovascular y excitación fatal.'
        }
      },
      administration: { pt: ['Via oral. NUNCA DEVE SER TOMADA À NOITE OU ANTES DE DORMIR (causa insônia farmacológica aguda em 100% dos adultos suscetíveis).'], es: ['Vía oral. NUNCA DEBE SER TOMADA A LA NOCHE O ANTES DE DORMIR (causa insomnio farmacológico agudo en 100% de los susceptibles).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou espaçar doses em insuficiência renal severa (Droga muito hidrossolúvel, acumula no rim).', es: 'Evitar o espaciar dosis en insuficiencia renal severa (Droga muy hidrosoluble, acumula en el riñón).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste drástico.', es: 'Sin necesidad de ajuste drástico.' } },
      commonAdverseEffects: { pt: ['Insônia absoluta e agitação', 'Taquicardia e palpitações', 'Tremedeira e ansiedade'], es: ['Insomnio absoluto y agitación', 'Taquicardia y palpitaciones', 'Tembladera y ansiedad'] },
      dangerousAdverseEffects: { pt: ['Crise Hipertensiva Aguda', 'Acidente Vascular Cerebral (AVC) isquêmico e Infarto (em pacientes coronariopatas)', 'Retenção urinária aguda em prostáticos'], es: ['Crisis Hipertensiva Aguda', 'Accidente Cerebrovascular (ACV) isquémico e Infarto', 'Retención urinaria aguda en prostáticos'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Hipertensão Arterial não controlada', 'Doença Isquêmica do Coração', 'Uso concomitante com inibidores da MAO'], es: ['Pacientes con Hipertensión Arterial no controlada', 'Enfermedad Isquémica del Corazón', 'Uso concomitante con inhibidores de la MAO'] },
        relative: { pt: ['Hiperplasia Prostática Benigna (Bloqueia a saída da urina com força)', 'Glaucoma de ângulo fechado'], es: ['Hiperplasia Prostática Benigna (Bloquea la salida de la orina con fuerza)', 'Glaucoma de ángulo cerrado'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O REMÉDIO DE BALCÃO QUE MATA O CORAÇÃO: Allegra-D, Claritin-D e Tylenol Sinus parecem inofensivos, mas a letra "D" significa Pseudoefedrina (um estimulante muito próximo da anfetamina). Idosos que compram isso na farmácia para "curar nariz entupido" frequentemente chegam ao PS com pressão de 220x130 mmHg, retenção de urina e arritmias cardíacas.', es: 'EL REMEDIO DE MOSTRADOR QUE MATA EL CORAZÓN: Allegra-D, Claritin-D parecen inofensivos, pero la "D" significa Pseudoefedrina (muy cerca de la anfetamina). Ancianos que lo compran en farmacia frecuentemente llegan a Urgencias con presión de 220x130, retención de orina y arritmias.' }
      }
    },

    /* ── BUDESONIDA + FORMOTEROL ────────────────────────────────────────── */
    "budesonida_formoterol": {
      name: { pt: 'Budesonida + Formoterol', es: 'Budesonida + Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Agonista Beta-2 (ICS/LABA)', es: 'Asociación Corticosteroide Inhalatorio + Agonista Beta-2 (ICS/LABA)' },
      indications: {
        pt: ['Estratégia MART (Manutenção e Resgate da Asma) - Padrão Ouro Atual GINA', 'Manutenção crônica de DPOC com histórico de exacerbações'],
        es: ['Estrategia MART (Mantenimiento y Rescate del Asma) - Patrón Oro Actual GINA', 'Mantenimiento crónico de EPOC con historial de exacerbaciones']
      },
      commercialNames: { br: ['Alenia', 'Symbicort', 'Vannair'], ar: ['Symbicort', 'Freya'] },
      presentation: { pt: ['Pó Inalatório (Cápsulas ou Turbuhaler) 200/6 mcg, 400/12 mcg', 'Spray HFA'], es: ['Polvo Inhalatorio (Cápsulas o Turbuhaler) 200/6 mcg, 400/12 mcg', 'Spray HFA'] },
      mechanism: {
        pt: 'O casamento perfeito da pneumologia. A Budesonida (Corticoide Tópico) desliga lentamente a inflamação e o inchaço dos brônquios. O Formoterol atua abrindo a via aérea de forma ultra-rápida (1-3 min) e a mantém aberta por 12 horas. Quando o asmático tem falta de ar, usar esta dupla não apenas alivia o sintoma instantaneamente (como faria o salbutamol isolado), mas injeta corticoide no exato momento da crise, cortando o mal pela raiz (inflamação).',
        es: 'El matrimonio perfecto. La Budesonida apaga lentamente la inflamación. El Formoterol actúa abriendo la vía aérea de forma ultra-rápida (1-3 min) y la mantiene por 12 horas. Al asfixiarse, usar esta dupla no solo alivia instantáneamente, sino que inyecta corticoide en el momento exacto, cortando el mal de raíz.'
      },
      dose: {
        adult: {
          pt: 'Asma MART: 1 a 2 inalações a cada 12h para manutenção. NA CRISE (Resgate): Inalar mais 1 ou 2 jatos conforme necessário (Máximo total diário de 8 a 12 inalações, dependendo da concentração do dispositivo).',
          es: 'Asma MART: 1 a 2 inhalaciones cada 12h para mantenimiento. EN LA CRISIS (Rescate): Inhalar más 1 o 2 puffs (Máximo total diario de 8 a 12 inhalaciones).'
        },
        pediatric: {
          pt: 'Asma a partir de 12 anos: liberado para estratégia MART (1 jato 12/12h + resgates).',
          es: 'Asma a partir de 12 años: liberado para estrategia MART (1 puff 12/12h + rescates).'
        }
      },
      administration: { pt: ['Higiene oral rigorosa! Enxaguar a boca e gargarejar DEPOIS DE CADA USO (mesmo se for o uso de resgate de madrugada).'], es: ['¡Higiene oral rigurosa! Enjuagar la boca y hacer gárgaras DESPUÉS DE CADA USO (incluso si es el uso de rescate de madrugada).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cautela em cirróticos graves (O metabolismo de primeira passagem da budesonida falha e os níveis sanguíneos de corticoide aumentam).', es: 'Cautela en cirróticos graves (El metabolismo de primera pasada de budesonida falla).' } },
      commonAdverseEffects: { pt: ['Tremores finos nas mãos e taquicardia leve (pelo formoterol)', 'Candidíase oral ("sapinho") e rouquidão (pela budesonida)'], es: ['Temblores finos en manos y taquicardia leve (por formoterol)', 'Candidiasis oral ("muguet") y ronquera (por budesonida)'] },
      dangerousAdverseEffects: { pt: ['Pneumonia lobar severa (em pacientes idosos com DPOC avançada usando doses máximas diárias)'], es: ['Neumonía lobar severa (en pacientes ancianos con EPOC avanzada usando dosis máximas diarias)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade aos componentes'], es: ['Hipersensibilidad a los componentes'] },
        relative: { pt: ['Pacientes com arritmias taquicárdicas severas não controladas (O excesso de resgate com formoterol vai induzir descompensação cardíaca)'], es: ['Pacientes con arritmias taquicárdicas severas no controladas (El exceso de rescate inducirá descompensación cardíaca)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ABANDONO DO BEROTEC: A Estratégia MART (Manutenção e Resgate com a MESMA BOMBINHA) revolucionou as diretrizes mundiais. Não se receita mais Salbutamol ou Berotec isolado para pacientes levarem para casa. O paciente deve carregar apenas o tubo de Budesonida+Formoterol no bolso. Isso previne mortes por ataques de asma.', es: 'ABANDONO DEL BEROTEC: La Estrategia MART (Mantenimiento y Rescate con el MISMO INHALADOR) revolucionó las directrices. Ya no se receta Salbutamol aislado para llevar a casa. El paciente debe cargar solo Budesonida+Formoterol.' }
      }
    }

  }); /* fim Object.assign PNEUMOLOGIA_OTORRINO_DRUGS_DB — BUILD 396
         Otorrino: Oximetazolina, Xilometazolina, Nafazolina
         Pneumologia: Pseudoefedrina, Budesonida+Formoterol
         Total: 5 fármacos */

})();
