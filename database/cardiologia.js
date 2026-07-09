(function () {
  'use strict';
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.CARDIOLOGIA_DRUGS_DB)) {
    window.CARDIOLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

/* ── AMIODARONA ─────────────────────────────────────────────────────── */
    "amiodarona": {
      name: { pt: 'Amiodarona', es: 'Amiodarona' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico Classe III (Bloqueador de Canais de Potássio)', es: 'Antiarrítmico Clase III (Bloqueador de Canales de Potasio)' },
      indications: {
        pt: ['Parada Cardiorrespiratória (Fibrilação Ventricular / Taquicardia Ventricular sem pulso)', 'Reversão ou controle de Fibrilação Atrial de alta resposta', 'Taquicardia Ventricular estável'],
        es: ['Paro Cardiorrespiratorio (Fibrilación Ventricular / Taquicardia Ventricular sin pulso)', 'Reversión o control de Fibrilación Auricular de alta respuesta', 'Taquicardia Ventricular estable']
      },
      commercialNames: { br: ['Ancoron', 'Atlansil'], ar: ['Atlansil'] },
      presentation: { pt: ['Ampolas IV 50 mg/mL (3 mL = 150 mg)', 'Comprimidos 100 mg e 200 mg'], es: ['Ampollas IV 50 mg/mL (3 mL = 150 mg)', 'Comprimidos 100 mg y 200 mg'] },
      mechanism: {
        pt: 'Fármaco extremamente complexo: Pertence à Classe III (prolonga o potencial de ação e a repolarização bloqueando os canais de potássio), mas possui características de TODAS as 4 classes (bloqueia levemente sódio, cálcio e receptores beta-adrenérgicos). É altamente lipofílica, acumulando-se no tecido adiposo e órgãos, com uma meia-vida bizarra de 20 a 100 DIAS.',
        es: 'Fármaco extremadamente complejo: Pertenece a la Clase III (prolonga el potencial de acción y la repolarización bloqueando los canales de potasio), pero posee características de TODAS las 4 clases (bloquea levemente sodio, calcio y receptores beta-adrenérgicos). Es altamente lipofílica, acumulándose en el tejido adiposo y órganos, con una vida media bizarra de 20 a 100 DÍAS.'
      },
      dose: {
        adult: {
          pt: 'PCR: Bolus IV direto de 300 mg (1ª dose) e 150 mg (2ª dose). Fibrilação Atrial: Ataque de 150 mg a 300 mg em 10 a 30 min, seguido de infusão de 900 mg em 24h.',
          es: 'RCP: Bolo IV directo de 300 mg (1ª dosis) y 150 mg (2ª dosis). Fibrilación Auricular: Ataque de 150 mg a 300 mg en 10 a 30 min, seguido de infusión de 900 mg en 24h.'
        },
        pediatric: {
          pt: 'PCR: 5 mg/kg IV em bolus rápido.',
          es: 'RCP: 5 mg/kg IV en bolo rápido.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: A infusão de manutenção DEVE ser diluída EXCLUSIVAMENTE em Soro Glicosado (SG 5%). Em Soro Fisiológico ela precipita.', 'Acesso Central é recomendado para manutenção (causa flebite grave em acesso periférico).'], es: ['DILUYENTE EXCLUSIVO: La infusión de mantenimiento DEBE diluirse EXCLUSIVAMENTE en Suero Glucosado (SG 5%). En Suero Fisiológico precipita.', 'Acceso Central es recomendado para mantenimiento (causa flebitis grave en acceso periférico).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em disfunção renal.', es: 'No requiere ajuste en disfunción renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo exclusivamente hepático. Requer redução de dose na cirrose.', es: 'Metabolismo exclusivamente hepático. Requiere reducción de dosis en la cirrosis.' } },
      commonAdverseEffects: { pt: ['Hipotensão marcante durante a infusão IV (frequentemente pelo veículo da ampola e não pela droga)', 'Bradicardia'], es: ['Hipotensión marcada durante la infusión IV (frecuentemente por el vehículo de la ampolla y no por la droga)', 'Bradicardia'] },
      dangerousAdverseEffects: { pt: ['Toxicidade Pulmonar (Fibrose pulmonar letal no uso crônico)', 'Disfunção Tireoidiana (Hiper ou Hipotireoidismo, pois a molécula é 37% iodo puro)', 'Hepatotoxicidade e Microdepósitos de córnea'], es: ['Toxicidad Pulmonar (Fibrosis pulmonar letal en uso crónico)', 'Disfunción Tiroidea (Hiper o Hipotiroidismo, pues la molécula es 37% yodo puro)', 'Hepatotoxicidad y Microdepósitos de córnea'] },
      contraindications: {
        absolute: { pt: ['Choque cardiogênico induzido por bradicardia', 'Bloqueio AV de 2º e 3º graus sem marcapasso'], es: ['Choque cardiogénico inducido por bradicardia', 'Bloqueo AV de 2º y 3º grados sin marcapasos'] },
        relative: { pt: ['Disfunção prévia severa da tireoide (preferir Sotalol ou Propafenona se possível)'], es: ['Disfunción previa severa de la tiroides (preferir Sotalol o Propafenona si es posible)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A Droga do Tempo: A amiodarona demora meses para sair do corpo do paciente. Se ocorrer algum efeito adverso grave (como fibrose pulmonar ou tireotoxicose), parar o remédio hoje não resolverá o problema, pois a droga continuará circulando por até 6 meses.', es: 'La Droga del Tiempo: La amiodarona tarda meses en salir del cuerpo del paciente. Si ocurre algún efecto adverso grave (como fibrosis pulmonar o tirotoxicosis), parar el remedio hoy no resolverá el problema, pues la droga continuará circulando por hasta 6 meses.' }
      }
    },

/* ── ADENOSINA ──────────────────────────────────────────────────────── */
    "adenosina": {
      name: { pt: 'Adenosina', es: 'Adenosina' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico (Nucleosídeo Endógeno)', es: 'Antiarrítmico (Nucleósido Endógeno)' },
      indications: {
        pt: ['Reversão de Taquicardia Supraventricular (TSV) Paroxística de reentrada nodal', 'Diagnóstico diferencial de taquicardias de QRS estreito complexas'],
        es: ['Reversión de Taquicardia Supraventricular (TSV) Paroxística de reentrada nodal', 'Diagnóstico diferencial de taquicardias de QRS estrecho complejas']
      },
      commercialNames: { br: ['Adenocard'], ar: ['Adenosina'] },
      presentation: { pt: ['Ampolas IV 3 mg/mL (2 mL = 6 mg)'], es: ['Ampollas IV 3 mg/mL (2 mL = 6 mg)'] },
      mechanism: {
        pt: 'A Adenosina liga-se aos receptores A1 no coração, ativando canais de potássio e bloqueando a entrada de cálcio. Isso causa um "curto-circuito" ou hiperpolarização temporária do Nódulo Atrioventricular (AV), bloqueando TOTALMENTE a condução elétrica por alguns segundos. Funciona literalmente como o botão "Ctrl+Alt+Del" (reiniciar) para o coração travado em taquicardia. A meia-vida da droga no sangue é MÁGICA: Apenas 10 SEGUNDOS.',
        es: 'La Adenosina se une a los receptores A1 en el corazón, activando canales de potasio y bloqueando la entrada de calcio. Esto causa un "cortocircuito" o hiperpolarización temporal del Nódulo Auriculoventricular (AV), bloqueando TOTALMENTE la conducción eléctrica por unos segundos. Funciona literalmente como el botón "Ctrl+Alt+Del" (reiniciar) para el corazón trabado en taquicardia. La vida media de la droga en la sangre es MÁGICA: Solo 10 SEGUNDOS.'
      },
      dose: {
        adult: {
          pt: 'Primeira dose: 6 mg IV rápido. Se não reverter em 2 min, Segunda dose: 12 mg IV rápido.',
          es: 'Primera dosis: 6 mg IV rápido. Si no revierte en 2 min, Segunda dosis: 12 mg IV rápido.'
        },
        pediatric: {
          pt: 'Primeira dose: 0,1 mg/kg IV rápido (máx 6mg). Segunda dose: 0,2 mg/kg IV rápido (máx 12mg).',
          es: 'Primera dosis: 0,1 mg/kg IV rápido (máx 6mg). Segunda dosis: 0,2 mg/kg IV rápido (máx 12mg).'
        }
      },
      administration: { pt: ['TECNICA OBRIGATÓRIA (Técnica das Duas Seringas): Como ela morre em 10 segundos no sangue, a injeção deve ser em ACESSO VENOSO CALIBROSO (antecubital), infundida o mais rápido possível (1 segundo), IMEDIATAMENTE SEGUIDA de um flush de 20 mL de Soro Fisiológico empurrado à força, seguido de elevação do braço para a droga chegar ao coração.'], es: ['TÉCNICA OBLIGATORIA (Técnica de las Dos Jeringas): Como muere en 10 segundos en la sangre, la inyección debe ser en ACCESO VENOSO DE GRAN CALIBRE (antecubital), infundida lo más rápido posible (1 segundo), INMEDIATAMENTE SEGUIDA de un flush de 20 mL de Suero Fisiológico empujado a la fuerza, seguido de elevación del brazo para que la droga llegue al corazón.'] },
      renalAdjustment: { required: false, message: { pt: 'Degradada pelas hemácias no sangue. Sem ajuste renal.', es: 'Degradada por los hematíes en la sangre. Sin ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste hepático.', es: 'Sin ajuste hepático.' } },
      commonAdverseEffects: { pt: ['Sensação de morte iminente (Angústia extrema transitória)', 'Rubor facial (Flushing) e calor', 'Dispneia transitória'], es: ['Sensación de muerte inminente (Angustia extrema transitoria)', 'Rubor facial (Flushing) y calor', 'Disnea transitoria'] },
      dangerousAdverseEffects: { pt: ['Assistolia transitória (o monitor fica plano por 3 a 5 segundos, é o efeito esperado que aterra o médico)', 'Broncoespasmo agudo severo em asmáticos'], es: ['Asistolia transitoria (el monitor se queda plano por 3 a 5 segundos, es el efecto esperado que aterra al médico)', 'Broncoespasmo agudo severo en asmáticos'] },
      contraindications: {
        absolute: { pt: ['Bloqueio AV de 2º e 3º grau ou Doença do Nó Sinusal (sem marcapasso)', 'Asma brônquica ativa severa (risco de asfixia por constrição dos receptores A1 no pulmão)'], es: ['Bloqueo AV de 2º y 3º grado o Enfermedad del Nodo Sinusal (sin marcapasos)', 'Asma bronquial activa severa (riesgo de asfixia por constricción de los receptores A1 en el pulmón)'] },
        relative: { pt: ['Uso ativo de Dipiridamol ou Carbamazepina'], es: ['Uso activo de Dipiridamol o Carbamazepina'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'AVISE O PACIENTE: A sensação gerada pela droga imita perfeitamente um ataque cardíaco fulminante por alguns segundos (dor no peito e sufocamento). Tranquilize o paciente antes de apertar o êmbolo.', es: 'AVISE AL PACIENTE: La sensación generada por la droga imita perfectamente un ataque cardíaco fulminante por unos segundos (dolor en el pecho y sofocamiento). Tranquilice al paciente antes de apretar el émbolo.' }
      }
    },

/* ── LIDOCAÍNA IV (ANTIARRÍTMICO) ───────────────────────────────────── */
    "lidocaina_iv": {
      name: { pt: 'Lidocaína (Uso Sistêmico IV)', es: 'Lidocaína (Uso Sistémico IV)' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico Classe IB / Anestésico Local', es: 'Antiarrítmico Clase IB / Anestésico Local' },
      indications: {
        pt: ['Alternativa à Amiodarona na Parada Cardíaca (FV/TV sem pulso)', 'Tratamento de arritmias ventriculares refratárias pós-infarto'],
        es: ['Alternativa a la Amiodarona en el Paro Cardíaco (FV/TV sin pulso)', 'Tratamiento de arritmias ventriculares refractarias posinfarto']
      },
      commercialNames: { br: ['Xylestesin (Sem Vasoconstritor)'], ar: ['Xylocaina'] },
      presentation: { pt: ['Frasco-ampola IV 1% ou 2% SEM vasoconstritor'], es: ['Vial IV 1% o 2% SIN vasoconstrictor'] },
      mechanism: {
        pt: 'Age bloqueando fortemente os canais de sódio no estado inativo ou aberto, encurtando o potencial de ação (Fase 0) nas células ventriculares. Sua ação é extremamente focada no ventrículo isquêmico (onde o pH é mais ácido), "acalmando" os focos anômalos que causam a Taquicardia Ventricular. Tem baixíssima eficácia em arritmias atriais.',
        es: 'Actúa bloqueando fuertemente los canales de sodio en estado inactivo o abierto, acortando el potencial de acción (Fase 0) en las células ventriculares. Su acción es extremadamente enfocada en el ventrículo isquémico (donde el pH es más ácido), "calmando" los focos anómalos que causan la Taquicardia Ventricular. Tiene bajísima eficacia en arritmias auriculares.'
      },
      dose: {
        adult: {
          pt: 'PCR: Bolus IV inicial de 1 a 1,5 mg/kg. Manutenção: Infusão contínua de 1 a 4 mg/minuto.',
          es: 'RCP: Bolo IV inicial de 1 a 1,5 mg/kg. Mantenimiento: Infusión continua de 1 a 4 mg/minuto.'
        },
        pediatric: {
          pt: 'PCR: Bolus 1 mg/kg IV.',
          es: 'RCP: Bolo 1 mg/kg IV.'
        }
      },
      administration: { pt: ['É ESTRITAMENTE PROIBIDO usar frascos de Lidocaína que contenham Epinefrina (vasoconstritor) para uso intravenoso antiarrítmico.', 'Requer monitorização contínua na UTI para manutenção.'], es: ['ES ESTRICTAMENTE PROHIBIDO usar viales de Lidocaína que contengan Epinefrina (vasoconstrictor) para uso intravenoso antiarrítmico.', 'Requiere monitorización continua en la UCI para mantenimiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Os metabólitos inativos podem se acumular, mas raramente exigem ajuste agudo.', es: 'Los metabolitos inactivos pueden acumularse, pero raramente exigen ajuste agudo.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Totalmente dependente do fluxo e enzimas hepáticas. Na insuficiência cardíaca (baixo débito) ou cirrose hepática, o clearance cai 50%. A dose de manutenção DEVE ser cortada pela metade.', es: 'Totalmente dependiente del flujo y enzimas hepáticas. En la insuficiencia cardíaca (bajo gasto) o cirrosis hepática, el clearance cae 50%. La dosis de mantenimiento DEBE cortarse a la mitad.' } },
      commonAdverseEffects: { pt: ['Dormência perioral (formigamento na boca)', 'Zumbido e tontura', 'Sabor metálico'], es: ['Adormecimiento perioral (hormigueo en la boca)', 'Zumbido y mareo', 'Sabor metálico'] },
      dangerousAdverseEffects: { pt: ['TOXICIDADE NEUROLÓGICA DA LIDOCAÍNA: Convulsões generalizadas refratárias, depressão respiratória e Coma', 'Bloqueio cardíaco grave em altas doses'], es: ['TOXICIDAD NEUROLÓGICA DE LA LIDOCAÍNA: Convulsiones generalizadas refractarias, depresión respiratoria y Coma', 'Bloqueo cardíaco grave en altas dosis'] },
      contraindications: {
        absolute: { pt: ['Bloqueio sinoatrial, Bloqueio AV avançado', 'Alergia a anestésicos tipo Amida'], es: ['Bloqueo sinoauricular, Bloqueo AV avanzado', 'Alergia a anestésicos tipo Amida'] },
        relative: { pt: ['Síndrome de Wolff-Parkinson-White', 'Pacientes com função hepática muito comprometida'], es: ['Síndrome de Wolff-Parkinson-White', 'Pacientes con función hepática muy comprometida'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O cérebro avisa antes da convulsão. Se o paciente recebendo infusão de lidocaína na UTI começar a falar embolado (disartria), ficar confuso ou reclamar de formigamento nos lábios, PARE a bomba. Ele está a minutos de convulsionar.', es: 'El cerebro avisa antes de la convulsión. Si el paciente recibiendo infusión de lidocaína en la UCI empieza a hablar confuso (disartria), se confunde o se queja de hormigueo en los labios, PARE la bomba. Está a minutos de convulsionar.' }
      }
    }, // vírgula adicionada; BUILD 356 blocos seguem

/* ── NITROPRUSSIATO DE SÓDIO (NIPRIDE) ──────────────────────────────── */
    "nitroprussiato_sodio": {
      name: { pt: 'Nitroprussiato de Sódio', es: 'Nitroprusiato de Sodio' },
      category: 'cardiologia',
      class: { pt: 'Vasodilatador Misto Direto (Arterial e Venoso)', es: 'Vasodilatador Mixto Directo (Arterial y Venoso)' },
      indications: {
        pt: ['Emergências Hipertensivas Severas (com lesão de órgão-alvo aguda)', 'Dissecção Aguda de Aorta (associado a betabloqueadores)', 'Insuficiência Cardíaca Aguda com grave aumento da pós-carga'],
        es: ['Emergencias Hipertensivas Severas (con lesión de órgano diana aguda)', 'Disección Aguda de Aorta (asociado a betabloqueantes)', 'Insuficiencia Cardíaca Aguda con grave aumento de la poscarga']
      },
      commercialNames: { br: ['Nipride'], ar: ['Nipride'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 50 mg (com diluente)'], es: ['Vial IV liofilizado 50 mg (con diluyente)'] },
      mechanism: {
        pt: 'A molécula contém 5 grupos cianeto e 1 grupo óxido nítrico (NO). No sangue, ele libera imediatamente o Óxido Nítrico, que entra na musculatura lisa dos vasos e ativa o GMPc, causando um relaxamento BRUTAL, simultâneo e igual de artérias (derruba a pós-carga) e veias (derruba a pré-carga). O efeito inicia em segundos e SOME em 2 minutos após desligar a bomba.',
        es: 'La molécula contiene 5 grupos cianuro y 1 grupo óxido nítrico (NO). En la sangre, libera inmediatamente el Óxido Nítrico, que entra en la musculatura lisa de los vasos y activa el GMPc, causando una relajación BRUTAL, simultánea e igual de arterias (derrumba la poscarga) y venas (derrumba la precarga). El efecto inicia en segundos y DESAPARECE en 2 minutos tras apagar la bomba.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV contínua: Iniciar com 0,25 a 0,5 mcg/kg/min e titular para cima a cada 5 minutos (Máximo absoluto 10 mcg/kg/min por não mais de 10 minutos).',
          es: 'Infusión IV continua: Iniciar con 0,25 a 0,5 mcg/kg/min y titular hacia arriba cada 5 minutos (Máximo absoluto 10 mcg/kg/min por no más de 10 minutos).'
        },
        pediatric: {
          pt: '0,3 a 0,5 mcg/kg/min IV contínuo. (Máximo 5 mcg/kg/min).',
          es: '0,3 a 0,5 mcg/kg/min IV continuo. (Máximo 5 mcg/kg/min).'
        }
      },
      administration: { pt: ['Exige monitorização de PA invasiva (Cateter Arterial) se possível.', 'FOTOSSENSÍVEL: O frasco e o equipo devem estar obrigatoriamente protegidos da luz por capa escura opaca (senão a molécula degrada e libera cianeto puro na bolsa).'], es: ['Exige monitorización de PA invasiva (Catéter Arterial) si es posible.', 'FOTOSENSIBLE: El vial y el equipo deben estar obligatoriamente protegidos de la luz por funda oscura opaca (sino la molécula se degrada y libera cianuro puro en la bolsa).'] },
      renalAdjustment: { required: true, message: { pt: 'O subproduto tóxico (Tiocianato) é depurado pelos rins. Em falência renal, intoxica o paciente em < 48 horas.', es: 'El subproducto tóxico (Tiocianato) es depurado por los riñones. En falla renal, intoxica al paciente en < 48 horas.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O fígado é responsável por transformar o Cianeto tóxico do Nipride em Tiocianato. Falência hepática causa intoxicação imediata por Cianeto.', es: 'El hígado es responsable de transformar el Cianuro tóxico del Nipride en Tiocianato. La falla hepática causa intoxicación inmediata por Cianuro.' } },
      commonAdverseEffects: { pt: ['Hipotensão severa precipitada', 'Cefaleia e Náuseas'], es: ['Hipotensión severa precipitada', 'Cefalea y Náuseas'] },
      dangerousAdverseEffects: { pt: ['INTOXICAÇÃO POR CIANETO (Acidose metabólica severa refratária, arritmias, coma, sangue excessivamente vermelho venoso)', 'Roubo Coronariano (piora a isquemia em pacientes com infarto ativo, preferir Tridil)'], es: ['INTOXICACIÓN POR CIANURO (Acidosis metabólica severa refractaria, arritmias, coma, sangre venosa excesivamente roja)', 'Robo Coronario (empeora la isquemia en pacientes con infarto activo, preferir Tridil)'] },
      contraindications: {
        absolute: { pt: ['Infarto Agudo do Miocárdio no estágio inicial com instabilidade', 'Uso concomitante com inibidores da fosfodiesterase (Sildenafil)'], es: ['Infarto Agudo de Miocardio en la etapa inicial con inestabilidad', 'Uso concomitante con inhibidores de la fosfodiesterasa (Sildenafilo)'] },
        relative: { pt: ['Aumento extremo de Pressão Intracraniana (ele dilata as veias cerebrais e incha o cérebro)'], es: ['Aumento extremo de Presión Intracraneal (dilata las venas cerebrales e hincha el cerebro)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO/PREVENÇÃO: Em infusões que passarão de 48 horas ou em doses muito altas, o médico deve associar "Hipossulfito de Sódio" (Tiosulfato) junto ao Nipride. O fígado usa o tiosulfato para desarmar o cianeto.', es: 'ANTÍDOTO/PREVENCIÓN: En infusiones que pasarán de 48 horas o en dosis muy altas, el médico debe asociar "Hiposulfito de Sodio" (Tiosulfato) junto al Nipride. El hígado usa el tiosulfato para desarmar el cianuro.' }
      }
    },

/* ── NITROGLICERINA (TRIDIL) ────────────────────────────────────────── */
    "nitroglicerina": {
      name: { pt: 'Nitroglicerina (Tridil)', es: 'Nitroglicerina' },
      category: 'cardiologia',
      class: { pt: 'Vasodilatador (Predominantemente Venoso / Coronariano)', es: 'Vasodilatador (Predominantemente Venoso / Coronario)' },
      indications: {
        pt: ['Infarto Agudo do Miocárdio e Angina Instável (reduz dor e isquemia)', 'Edema Agudo de Pulmão Cardiogênico (reduz a água que volta pro coração)', 'Emergências hipertensivas'],
        es: ['Infarto Agudo de Miocardio y Angina Inestable (reduce dolor e isquemia)', 'Edema Agudo de Pulmón Cardiogénico (reduce el agua que vuelve al corazón)', 'Emergencias hipertensivas']
      },
      commercialNames: { br: ['Tridil'], ar: ['Nitro-Dur'] },
      presentation: { pt: ['Ampolas IV 5 mg/mL (10 mL = 50 mg)', 'Comprimidos Sublinguais 0,4 mg', 'Adesivos transdérmicos'], es: ['Ampollas IV 5 mg/mL (10 mL = 50 mg)', 'Comprimidos Sublinguales 0,4 mg', 'Parches transdérmicos'] },
      mechanism: {
        pt: 'Converte-se em Óxido Nítrico livre. Em doses BAIXAS (< 50 mcg/min), causa dilatação massiva das VEIAS, o que sequestra o sangue nas pernas e abdome, aliviando o coração afogado no Edema de Pulmão. Em doses ALTAS (> 100 mcg/min), passa a dilatar também as artérias, caindo a pressão arterial de forma agressiva. Ao contrário do Nipride, dilata ativamente e melhora o fluxo nas coronárias doentes.',
        es: 'Se convierte en Óxido Nítrico libre. En dosis BAJAS (< 50 mcg/min), causa dilatación masiva de las VENAS, lo que secuestra la sangre en piernas y abdomen, aliviando al corazón ahogado en Edema de Pulmón. En dosis ALTAS (> 100 mcg/min), pasa a dilatar también las arterias, bajando la presión arterial agresivamente. A diferencia del Nipride, dilata activamente y mejora el flujo en coronarias enfermas.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV contínua: Iniciar com 5 a 10 mcg/min. Aumentar de 5 a 10 mcg a cada 5-10 minutos até resposta clínica (Máx 200 mcg/min). Angina: 0,4 mg sublingual a cada 5 min (máx 3x).',
          es: 'Infusión IV continua: Iniciar con 5 a 10 mcg/min. Aumentar de 5 a 10 mcg cada 5-10 minutos hasta respuesta clínica (Máx 200 mcg/min). Angina: 0,4 mg sublingual cada 5 min (máx 3x).'
        },
        pediatric: {
          pt: 'Raramente usada (0,25 a 0,5 mcg/kg/min).',
          es: 'Raramente usada (0,25 a 0,5 mcg/kg/min).'
        }
      },
      administration: { pt: ['Usar equipo específico para Tridil (Polietileno/PVC de baixa absorção), pois o plástico comum dos equipos absorve a nitroglicerina e o paciente não recebe a dose.', 'NÃO precisa de proteção contra a luz (capa opaca) como o Nipride.'], es: ['Usar equipo específico para Tridil (Polietileno/PVC de baja absorción), pues el plástico común absorbe la nitroglicerina y el paciente no recibe la dosis.', 'NO necesita protección contra la luz (funda opaca) como el Nipride.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Extenso metabolismo hepático (efeito de 1ª passagem zera a biodisponibilidade oral, por isso existe apenas IV, adesivo e sublingual).', es: 'Extenso metabolismo hepático (efecto de 1ª pasada anula biodisponibilidad oral, por eso solo existe IV, parche y sublingual).' } },
      commonAdverseEffects: { pt: ['Cefaleia P latejante severa (sinal de que a droga está funcionando e dilatando as meninges)', 'Taquicardia reflexa leve'], es: ['Cefalea pulsátil severa (signo de que la droga está funcionando y dilatando las meninges)', 'Taquicardia refleja leve'] },
      dangerousAdverseEffects: { pt: ['Hipotensão severa e Síncope', 'Meta-hemoglobinemia (rara em doses usuais)'], es: ['Hipotensión severa y Síncope', 'Metahemoglobinemia (rara en dosis usuales)'] },
      contraindications: {
        absolute: { pt: ['Uso nas últimas 24 a 48h de Sildenafila ou Tadalafila (RISCO DE CHOQUE VASOPLÉGICO IRREVERSÍVEL)', 'Infarto do Ventrículo Direito (paciente é dependente de pré-carga; se tirar a pré-carga, a pressão cai a zero e ele morre)'], es: ['Uso en las últimas 24 a 48h de Sildenafilo o Tadalafilo (RIESGO DE CHOQUE VASOPLÉJICO IRREVERSIBLE)', 'Infarto del Ventrículo Derecho (paciente es dependiente de precarga; si quitas la precarga, la presión cae a cero y muere)'] },
        relative: { pt: ['Glaucoma', 'Cardiomiopatia restritiva hipertrófica'], es: ['Glaucoma', 'Miocardiopatía restrictiva hipertrófica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'FENÔMENO DA TAQUIFILAXIA: O corpo humano esgota suas reservas de grupo sulfidrila (SH) usados para ativar o Tridil. Após 24h a 48h de infusão contínua, o remédio perde o efeito (tolerância aguda). É necessário fazer "janelas" sem nitrato ou desligar a bomba o mais cedo possível.', es: 'FENÓMENO DE LA TAQUIFILAXIA: El cuerpo humano agota sus reservas de grupo sulfhidrilo (SH) usados para activar el Tridil. Tras 24h a 48h de infusión continua, el remedio pierde el efecto (tolerancia aguda). Es necesario hacer "ventanas" sin nitrato o apagar la bomba lo más temprano posible.' }
      }
    },

/* ── BUILD 403 — Cardiologia Emergencial ── */

/* ── FUROSEMIDA IV ──────────────────────────────────────────────────── */
    "furosemida_iv": {
      id: 'furosemida_iv',
      name: { pt: 'Furosemida IV', es: 'Furosemida IV' },
      category: 'cardiologia',
      class: { pt: 'Diurético de Alça de Ação Rápida', es: 'Diurético de Asa de Acción Rápida' },
      indications: {
        pt: ['Edema Agudo de Pulmão (EAP - O paciente está "afogando" no próprio líquido)', 'Insuficiência Cardíaca Congestiva descompensada', 'Emergências Hipertensivas hipervolêmicas', 'Hipercalemia aguda (Potássio tóxico no sangue)'],
        es: ['Edema Agudo de Pulmón (EAP - El paciente se está "ahogando" en su propio líquido)', 'Insuficiencia Cardíaca Congestiva descompensada', 'Emergencias Hipertensivas hipervolémicas', 'Hiperpotasemia aguda (Potasio tóxico en sangre)']
      },
      commercialNames: { br: ['Lasix (Ampolas)'], ar: ['Lasix', 'Nuriban'] },
      presentation: { pt: ['Ampolas Intravenosas 20 mg/2 mL'], es: ['Ampollas Intravenosas 20 mg/2 mL'] },
      mechanism: {
        pt: 'A "Válvula de Escape" da UTI. Atua inibindo o transportador simporte Na+-K+-2Cl- na Alça de Henle, impedindo que os rins reabsorvam sal e água (o paciente urina baldes). O GRANDE TRUQUE DO IV: Quando feita na veia em um paciente sufocando no Edema de Pulmão, a furosemida causa uma VENODILATAÇÃO sistêmica em apenas 5 minutos, "escondendo" o sangue nas pernas e tirando a pressão do pulmão ANTES MESMO do paciente fazer a primeira gota de urina.',
        es: 'La "Válvula de Escape" de la UCI. Inhibe el transportador Na+-K+-2Cl- en el Asa de Henle, impidiendo reabsorber sal y agua. EL GRAN TRUCO DEL IV: En vena en un paciente asfixiándose, causa una VENODILATACIÓN sistémica en solo 5 minutos, sacando la presión del pulmón ANTES INCLUSO de hacer la primera gota de orina.'
      },
      dose: {
        adult: {
          pt: 'Ataque em Edema de Pulmão: 20 a 40 mg Intravenoso LENTO (ou dobrar a dose se o paciente já usa comprimido crônico em casa). Pode-se montar bomba de infusão contínua em IRA.',
          es: 'Ataque en Edema de Pulmón: 20 a 40 mg Intravenoso LENTO (o doblar dosis si ya usa comprimido en casa). Se puede montar bomba de infusión continua en IRA.'
        },
        pediatric: {
          pt: '1 a 2 mg/kg IV lento.',
          es: '1 a 2 mg/kg IV lento.'
        }
      },
      administration: { pt: ['INFUSÃO LENTA É VITAL: A Furosemida nunca deve ser feita em "push" rápido puro, mas administrada a uma taxa não superior a 4 mg por minuto. Injetar rápido destrói o nervo auditivo do paciente.'], es: ['INFUSIÓN LENTA ES VITAL: Nunca debe ser hecha en "push" rápido, sino administrada a una tasa no superior a 4 mg por minuto. Inyectar rápido destruye el nervio auditivo del paciente.'] },
      renalAdjustment: { required: true, message: { pt: 'A ironia é que a Furosemida "trabalha de dentro do tubo". Em falência renal severa (DRC 4/5), pouca droga chega no tubo do rim. Exige doses IV maciças (até 200mg/dose) para "bater e funcionar" no rim doente.', es: 'La ironía es que Furosemida "trabaja desde dentro del tubo". En falla renal severa, poca droga llega al tubo. Exige dosis IV masivas (hasta 200mg/dosis) para funcionar.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Atenção na Cirrose e Ascite (Pode desidratar o vaso, baixar a perfusão do fígado e precipitar Síndrome Hepatorrenal fatal).', es: 'Atención en Cirrosis y Ascitis (Puede deshidratar el vaso, precipitando Síndrome Hepatorrenal fatal).' } },
      commonAdverseEffects: { pt: ['Hipocalemia (Potássio baixo com câimbras intensas)', 'Hipovolemia aguda e Hipotensão ortostática', 'Hipomagnesemia e Hiperuricemia (crise de gota)'], es: ['Hipopotasemia (Potasio bajo con calambres intensos)', 'Hipovolemia aguda e Hipotensión ortostática', 'Hipomagnesemia e Hiperuricemia (crisis de gota)'] },
      dangerousAdverseEffects: { pt: ['OTOTOXICIDADE SURDEZ IRREVERSÍVEL (Ocorre por lesão direta do nervo vestibulococlear se a injeção IV for muito rápida na veia)', 'Colapso circulatório por desidratação maciça'], es: ['OTOTOXICIDAD SORDERA IRREVERSIBLE (Ocurre por lesión directa del nervio si la inyección IV es muy rápida)', 'Colapso circulatorio por deshidratación masiva'] },
      contraindications: {
        absolute: { pt: ['Anúria total com falência renal aguda irresponsiva', 'Coma hepático e depleção severa de eletrólitos não corrigida'], es: ['Anuria total con falla renal aguda irresponsiva', 'Coma hepático y depleción severa de electrolitos no corregida'] },
        relative: { pt: ['Alergia a sulfonamidas (Embora reações cruzadas reais sejam raras, a furosemida possui grupo sulfamídico)'], es: ['Alergia a sulfonamidas (Furosemida posee grupo sulfamídico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'NUNCA USE PARA "MIJAR" NO CHOQUE: É um crime médico administrar Furosemida em um paciente internado com Insuficiência Renal Aguda que está "oligúrico" (sem urinar) devido a DESIDRATAÇÃO ou SEPSE. Se falta água, forçar o rim com Lasix destrói os néfrons por hipoperfusão (Necrose Tubular Aguda irreversível).', es: 'NUNCA USE PARA "ORINAR" EN CHOQUE: Es un crimen médico administrar Furosemida en un paciente con Falla Renal Aguda oligúrico por DESHIDRATACIÓN o SEPSIS. Forzar el riñón destruye las nefronas (Necrosis Tubular Aguda).' }
      }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 403 (furosemida_iv) */
})();
