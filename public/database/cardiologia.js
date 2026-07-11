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

/* ══════════════════════════════════════════════════════════════════════════
   BUILD 426 — ONDA 51: Bloqueadores de Canais de Cálcio Diidropiridínicos
   Amlodipino · Nifedipino · Felodipino · Lercanidipino · Manidipino
   ANTI-DUPLICAÇÃO: IDs canônicos sincronizados com cardio.js (anlodipino /
   nifedipina / felodipina / lercanidipina / manidipina). Este IIFE injeta
   no namespace CARDIOLOGIA_DRUGS_DB (motor _injectObjectDB) com schema
   pt+es — coexistência sem colisão com CARDIO_DRUGS_DB (motor calculate).
══════════════════════════════════════════════════════════════════════════ */
(function(){
  if(!window.CARDIOLOGIA_DRUGS_DB || Array.isArray(window.CARDIOLOGIA_DRUGS_DB)) window.CARDIOLOGIA_DRUGS_DB={};
  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

/* ── ANLODIPINO (ID canônico ANVISA) ────────────────────────────────── */
    "anlodipino": {
      name: { pt: 'Anlodipino (Besilato de)', es: 'Amlodipino (Besilato de)' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (2ª geração)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (2ª generación)' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica (Primeira linha)', 'Angina Pectoris Estável Crônica e Vasoespástica (Prinzmetal)'],
        es: ['Hipertensión Arterial Sistémica (Primera línea)', 'Angina Pectoris Estable Crónica y Vasoespástica (Prinzmetal)']
      },
      commercialNames: { br: ['Norvasc', 'Pressat', 'Tensiv'], ar: ['Norvasc', 'Pelmec'] },
      presentation: { pt: ['Comprimidos 2,5 mg, 5 mg e 10 mg'], es: ['Comprimidos 2,5 mg, 5 mg y 10 mg'] },
      mechanism: {
        pt: 'O "Relaxante de Artérias". Bloqueia canais de cálcio tipo L na musculatura lisa vascular, provocando vasodilatação periférica e coronariana com mínimo efeito cronotrópico. Meia-vida extraordinariamente longa (30–50 h) garante cobertura de 24 h com dose única e titulação a cada 7–14 dias.',
        es: 'El "Relajante de Arterias". Bloquea canales de calcio tipo L en músculo liso vascular con vasodilatación periférica y coronaria y mínimo efecto cronotrópico. Vida media (30–50 h) garantiza cobertura de 24 h con dosis única.'
      },
      dose: {
        adult: { pt: 'Início: 5 mg VO 1×/dia. Idoso/IC: iniciar com 2,5 mg. Máximo: 10 mg/dia.', es: 'Inicio: 5 mg VO 1×/día. Anciano/IC: iniciar con 2,5 mg. Máximo: 10 mg/día.' },
        pediatric: { pt: 'Crianças 6–17 anos HAS severa: 2,5–5 mg/dia.', es: 'Niños 6–17 años HTA severa: 2,5–5 mg/día.' }
      },
      administration: { pt: ['VO, 1×/dia, com ou sem alimentos. Não há formulação IV.'], es: ['VO, 1×/día, con o sin alimentos. No hay formulación IV.'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro em DRC — não dialisável.', es: 'Seguro en ERC — no dializable.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Iniciar obrigatoriamente com 2,5 mg em hepatopatas (metabolismo hepático prolongado).', es: 'Iniciar obligatoriamente con 2,5 mg en hepatópatas.' } },
      commonAdverseEffects: { pt: ['Edema maleolar (até 30% com 10 mg — mecânico, não responde a furosemida)', 'Rubor facial', 'Cefaleia latejante'], es: ['Edema maleolar (hasta 30% con 10 mg — mecánico, no responde a furosemida)', 'Rubor facial', 'Cefalea latiente'] },
      dangerousAdverseEffects: { pt: ['Hipotensão severa em desidratados', 'Piora paradoxal de angina ao iniciar (taquicardia reflexa rara)'], es: ['Hipotensión severa en deshidratados', 'Empeoramiento paradójico de angina al iniciar (taquicardia refleja rara)'] },
      contraindications: {
        absolute: { pt: ['Hipotensão severa basal', 'Choque cardiogênico'], es: ['Hipotensión severa basal', 'Choque cardiogénico'] },
        relative: { pt: ['Estenose aórtica severa (vasodilatação com válvula obstruída → síncope)'], es: ['Estenosis aórtica severa (vasodilatación con válvula obstruida → síncope)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A MECÂNICA DO TORNOZELO INCHADO: O edema NÃO é por retenção de sal/água — é mecânico (dilata artéria pré-capilar, não a veia). Furosemida é ERRO grosseiro: não resolve e desidrata. Tratamento: reduzir dose ou associar losartana (dilata a veia). INTERAÇÃO CRÍTICA: Sinvastatina + Anlodipino → limitar Sinvastatina a 20 mg/dia (risco de Rabdomiólise por inibição CYP3A4).', es: 'LA MECÁNICA DEL TOBILLO HINCHADO: El edema NO es por retención de sal/agua — es mecánico. Furosemida es ERROR: no funciona. Tratamiento: reducir dosis o asociar losartán. INTERACCIÓN CRÍTICA: Simvastatina + Amlodipino → limitar Simvastatina a 20 mg/día (riesgo de Rabdomiólisis por inhibición CYP3A4).' }
      },
      references: { pt: 'ALLHAT Trial; CAMELOT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label; Lexicomp 2026.', es: 'ALLHAT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label.' }
    },

/* ── NIFEDIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "nifedipina": {
      name: { pt: 'Nifedipina', es: 'Nifedipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (Ação Rápida / OROS)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (Acción Rápida / OROS)' },
      indications: {
        pt: ['Hipertensão Arterial (formulação OROS/LP)', 'Urgência hipertensiva gestacional (formulação LP — primeira linha pela ACOG)', 'Angina vasoespástica', 'Tocolítico (off-label — relaxamento uterino)'],
        es: ['Hipertensión Arterial (formulación OROS/LP)', 'Urgencia hipertensiva gestacional (formulación LP — primera línea ACOG)', 'Angina vasoespástica', 'Tocolítico (off-label)']
      },
      commercialNames: { br: ['Adalat', 'Adalat OROS', 'Adalat Retard'], ar: ['Adalat', 'Nifelat'] },
      presentation: { pt: ['Cápsulas de Liberação Imediata (10 mg) — USO RESTRITO', 'Comprimidos OROS/Retard/LP (20 mg, 30 mg, 60 mg)'], es: ['Cápsulas de Liberación Inmediata (10 mg) — USO RESTRINGIDO', 'Comprimidos OROS/Retard/LP (20 mg, 30 mg, 60 mg)'] },
      mechanism: {
        pt: 'Bloqueia canais L vasculares com potente vasodilatação arterial. A cápsula de liberação imediata age em 5 min (bomba de vasodilatação). A versão OROS possui orifício a laser e funciona como bomba osmótica, liberando a droga gota a gota por 24 h sem picos plasmáticos.',
        es: 'Bloquea canales L vasculares con potente vasodilatación arterial. La cápsula de liberación inmediata actúa en 5 min. La versión OROS tiene un orificio láser y funciona como bomba osmótica, liberando la droga gota a gota por 24 h sin picos plasmáticos.'
      },
      dose: {
        adult: { pt: 'OROS/LP: 30–60 mg VO 1×/dia. Urgência gestacional: 10–20 mg LP, repetível a cada 20–30 min (máx 3 doses). A forma rápida oral só sob supervisão hospitalar.', es: 'OROS/LP: 30–60 mg VO 1×/día. Urgencia gestacional: 10–20 mg LP, repetible cada 20–30 min (máx 3 dosis).' },
        pediatric: { pt: 'Uso hospitalar pediátrico especializado apenas.', es: 'Uso hospitalario pediátrico especializado únicamente.' }
      },
      administration: { pt: ['NUNCA esmagar, partir ou mastigar a versão OROS/LP — risco de hipotensão letal. O fantasma do comprimido pode sair intacto nas fezes (normal). PROIBIDO uso sublingual da cápsula de 10 mg.'], es: ['NUNCA aplastar, partir o masticar la versión OROS/LP — riesgo de hipotensión letal. PROHIBIDO uso sublingual de la cápsula de 10 mg.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir doses drasticamente em disfunção hepática.', es: 'Reducir dosis drásticamente en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Hiperplasia gengival (gengivas crescem sobre os dentes no uso crônico)', 'Edema maleolar severo', 'Taquicardia reflexa e cefaleia pulsátil'], es: ['Hiperplasia gingival (encías crecen sobre los dientes)', 'Edema maleolar severo', 'Taquicardia refleja y cefalea pulsátil'] },
      dangerousAdverseEffects: { pt: ['ISQUEMIA CEREBRAL/MIOCÁRDICA (se usar cápsula de ação rápida via sublingual na crise hipertensiva — proibido mundialmente)'], es: ['ISQUEMIA CEREBRAL/MIOCÁRDICA (si usa cápsula de acción rápida vía sublingual — prohibido mundialmente)'] },
      contraindications: {
        absolute: { pt: ['USO SUBLINGUAL DA CÁPSULA DE 10 MG (Proibido — AVC isquêmico + infarto iatrogênico)'], es: ['USO SUBLINGUAL DE LA CÁPSULA DE 10 MG (Prohibido — ACV isquémico + infarto iatrogénico)'] },
        relative: { pt: ['Trânsito intestinal muito rápido (versão OROS não absorvida)'], es: ['Tránsito intestinal muy rápido (versión OROS no absorbida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ERRO MORTAL DO PRONTO-SOCORRO (NUNCA REPETIR): Na década de 90, furava-se a cápsula de 10 mg e pingava-se sob a língua em crises hipertensivas. Isso é IATROGENIA MORTAL. A pressão despenca em minutos → fluxo ao cérebro zera → AVC Isquêmico ou Infarto na cadeira da emergência. A nifedipina sublingual está PROIBIDA mundialmente pela FDA, ESC e SBC. Para urgência hipertensiva use formulações LP VO ou captopril 25 mg SL.', es: 'EL ERROR MORTAL DE URGENCIAS (NUNCA REPETIR): En los 90, se perforaba la cápsula bajo la lengua. Esto es IATROGENIA MORTAL. La presión cae en minutos → flujo al cerebro llega a cero → ACV Isquémico o Infarto en urgencias. La nifedipino sublingual está PROHIBIDA mundialmente.' }
      },
      references: { pt: 'ACOG Hypertension in Pregnancy 2023; AHA/ACC Hypertension Crisis Guidelines; Alerta FDA contra Nifedipina Sublingual; ESC 2023.', es: 'ACOG Hypertension in Pregnancy 2023; Alerta FDA contra Nifedipino Sublingual; ESC 2023.' }
    },

/* ── FELODIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "felodipina": {
      name: { pt: 'Felodipina', es: 'Felodipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (2ª geração)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (2ª generación)' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica', 'Angina Pectoris Estável', 'Alternativa ao Anlodipino em pacientes com Insuficiência Cardíaca com FEVE reduzida (alta seletividade vascular)'],
        es: ['Hipertensión Arterial Sistémica', 'Angina Pectoris Estable', 'Alternativa al Amlodipino en IC con FEVI reducida']
      },
      commercialNames: { br: ['Splendil', 'Felodipina'], ar: ['Splendil'] },
      presentation: { pt: ['Comprimidos de Liberação Prolongada (ER) 2,5 mg, 5 mg e 10 mg'], es: ['Comprimidos de Liberación Prolongada (ER) 2,5 mg, 5 mg y 10 mg'] },
      mechanism: {
        pt: 'Seletividade Vascular Extrema: em doses terapêuticas tem efeito mínimo sobre contratilidade miocárdica, tornando-o seguro em IC severa onde Diltiazem e Verapamil matariam o paciente. Intensa vasodilatação periférica e coronariana.',
        es: 'Selectividad Vascular Extrema: en dosis terapéuticas tiene efecto mínimo sobre contractilidad miocárdica, haciéndolo seguro en IC severa. Intensa vasodilatación periférica y coronaria.'
      },
      dose: {
        adult: { pt: 'Início: 2,5–5 mg VO 1×/dia (manhã). Máximo: 10 mg/dia.', es: 'Inicio: 2,5–5 mg VO 1×/día (mañana). Máximo: 10 mg/día.' },
        pediatric: { pt: 'Segurança não estabelecida em crianças.', es: 'Seguridad no establecida en niños.' }
      },
      administration: { pt: ['Engolir INTEIRO, sem mastigar. NÃO ingerir com Suco de Toranja/Grapefruit (triplica absorção → hipotensão).'], es: ['Tragar ENTERO, sin masticar. NO ingerir con Jugo de Toronja/Pomelo (triplica absorción → hipotensión).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Iniciar com 2,5 mg em cirróticos (depuração drasticamente reduzida).', es: 'Iniciar con 2,5 mg en cirróticos.' } },
      commonAdverseEffects: { pt: ['Edema maleolar moderado', 'Rubor facial e calor', 'Hiperplasia gengival (crescimento da gengiva)'], es: ['Edema maleolar moderado', 'Rubor facial y calor', 'Hiperplasia gingival'] },
      dangerousAdverseEffects: { pt: ['Síncope hipotensiva severa (se mastigar o comprimido ER ou ingerir com toranja ou inibidores de CYP3A4)'], es: ['Síncope hipotensivo severo (si mastica el comprimido ER o lo ingiere con pomelo o inhibidores CYP3A4)'] },
      contraindications: {
        absolute: { pt: ['Choque cardiogênico', 'IAM em curso com falência de bomba'], es: ['Choque cardiogénico', 'IAM en curso con falla de bomba'] },
        relative: { pt: ['Taquicardia basal severa (vasodilatação intensa dispara taquicardia reflexa)'], es: ['Taquicardia basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SÍNDROME DO DENTISTA (E DA TORANJA): Felodipina causa Hiperplasia Gengival — gengiva inflama e cresce sobre os dentes em uso crônico. Avise o paciente para higiene oral rigorosa. A interação com Suco de Toranja (Grapefruit) é o exemplo farmacológico mais clássico de inibição de CYP3A4 intestinal: triplica a biodisponibilidade e pode causar choque vasoplégico.', es: 'EL SÍNDROME DEL DENTISTA (Y DE LA TORONJA): Felodipino causa Hiperplasia Gingival. La interacción con Jugo de Toronja (Pomelo) triplica la biodisponibilidad y puede causar choque vasopléjico.' }
      },
      references: { pt: 'HOT Trial; ESC/AHA Hypertension Guidelines 2023; FDA Label; Lexicomp 2026.', es: 'HOT Trial; ESC/AHA Hypertension Guidelines 2023.' }
    },

/* ── LERCANIDIPINA (ID canônico ANVISA) ─────────────────────────────── */
    "lercanidipina": {
      name: { pt: 'Lercanidipina (Cloridrato de)', es: 'Lercanidipino (Clorhidrato de)' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (3ª geração — Alta Lipofilicidade)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (3ª generación — Alta Lipofilicidad)' },
      indications: {
        pt: ['Hipertensão Arterial Essencial leve a moderada', 'Substituto de Anlodipino quando edema periférico é insuportável (incidência de edema é a metade)'],
        es: ['Hipertensión Arterial Esencial leve a moderada', 'Sustituto de Amlodipino cuando el edema periférico es intolerable (incidencia de edema es la mitad)']
      },
      commercialNames: { br: ['Zanidip', 'Lercanidipina'], ar: ['Zanidip'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg'], es: ['Comprimidos recubiertos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Evolução Lipofílica: alta lipofilicidade faz com que o fármaco se "esconda" dentro da membrana lipídica das células arteriais, mantendo o efeito por 24 h mesmo após eliminação plasmática. Canal T adicional (em menor escala) contribui para menor taquicardia reflexa. Resultado clínico: mesmo eficácia anti-hipertensiva do anlodipino com METADE do edema.',
        es: 'Evolución Lipofílica: alta lipofilicidad hace que el fármaco se "esconda" dentro de la membrana lipídica de las células arteriales, manteniendo el efecto por 24 h incluso tras la eliminación plasmática. Resultado clínico: misma eficacia que amlodipino con LA MITAD del edema.'
      },
      dose: {
        adult: { pt: '10 mg VO 1×/dia, 15 min ANTES do café da manhã (estômago vazio). Pode aumentar para 20 mg/dia após 2 semanas.', es: '10 mg VO 1×/día, 15 min ANTES del desayuno (estómago vacío). Puede aumentarse a 20 mg/día tras 2 semanas.' },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['REGRA CONTRAINTUITIVA: tomar com estômago VAZIO (15 min antes de refeição). Refeição GORDUROSA triplica absorção → hipotensão súbita. Não usar com toranja.'], es: ['REGLA CONTRAINTUITIVA: tomar con estómago VACÍO (15 min antes de comida). Comida GRASOSA triplica absorción → hipotensión súbita. No usar con toronja.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 30 mL/min.', es: 'Evitar en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicada na insuficiência hepática grave.', es: 'Contraindicada en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Cefaleia e rubor (menos taquicardia reflexa que gerações anteriores)', 'Edema maleolar (metade da incidência do anlodipino)', 'Fadiga'], es: ['Cefalea y rubor (menos taquicardia refleja que generaciones previas)', 'Edema maleolar (mitad de incidencia que amlodipino)', 'Fatiga'] },
      dangerousAdverseEffects: { pt: ['Choque vasoplégico (overdose com refeição gordurosa)'], es: ['Choque vasopléjico (sobredosis con comida grasa)'] },
      contraindications: {
        absolute: { pt: ['Estenose aórtica severa', 'Gravidez e lactação', 'Insuficiência hepática grave', 'Co-administração com cetoconazol/itraconazol (inibidores potentes CYP3A4 — CI absoluta em bula)'], es: ['Estenosis aórtica severa', 'Embarazo y lactancia', 'Insuficiencia hepática grave', 'Co-administración con ketoconazol/itraconazol (CI absoluta)'] },
        relative: { pt: ['DRC estágio 4–5', 'Doença do nó sinusal sem marcapasso'], es: ['ERC estadio 4–5', 'Enfermedad del nodo sinusal sin marcapasos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O RESGATE DA BOTA APERTADA: É o trunfo quando o paciente retorna queixando que não consegue calçar o sapato com anlodipino. A troca para Lercanidipina mantém PA ótima e o edema some em semanas. ATENÇÃO DIETÉTICA: se o paciente comer um ovo frito antes da pílula, a absorção dispara e ele pode desmaiar.', es: 'EL RESCATE DE LA BOTA APRETADA: Es el as cuando el paciente no puede ponerse el zapato con amlodipino. El cambio a Lercanidipino mantiene PA óptima y el edema desaparece. ATENCIÓN DIETÉTICA: si come algo grasoso antes de la píldora, puede desmayarse.' }
      },
      references: { pt: 'ELLE Study; LEAD Study; ESC/ESH Hypertension Guidelines 2023; EMA Label; Lexicomp 2026.', es: 'ELLE Study; ESC/ESH Hypertension Guidelines 2023; EMA Label.' }
    },

/* ── MANIDIPINA (ID canônico ANVISA) ────────────────────────────────── */
    "manidipina": {
      name: { pt: 'Manidipina', es: 'Manidipino' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canais de Cálcio Diidropiridínico (3ª geração — Duplo Canal L+T)', es: 'Bloqueador de Canales de Calcio Dihidropiridínico (3ª generación — Doble Canal L+T)' },
      indications: {
        pt: ['Hipertensão Arterial Essencial', 'Hipertensão em Diabéticos com Microalbuminúria (efeito nefroprotetor por bloqueio de canal T na artéria eferente glomerular)'],
        es: ['Hipertensión Arterial Esencial', 'Hipertensión en Diabéticos con Microalbuminuria (efecto nefroprotector por bloqueo del canal T en la arteria eferente glomerular)']
      },
      commercialNames: { br: ['Manidon'], ar: ['Artedil'] },
      presentation: { pt: ['Comprimidos 10 mg e 20 mg'], es: ['Comprimidos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Protetor dos Filtros Renais: bloqueia canais de cálcio TIPO L (vasos periféricos) e TIPO T (presente na artéria eferente glomerular). Os outros BCC-DHP dilatam só a artéria aferente (aumenta pressão no glomérulo, destruindo o rim diabético). O Manidipino dilata TAMBÉM a eferente → reduz pressão intraglomerular → protéinuria cai (análogo aos IECAs sem os efeitos colaterais de potássio/tosse).',
        es: 'Protector de los Filtros Renales: bloquea canales de calcio TIPO L (vasos periféricos) y TIPO T (arteria eferente glomerular). Los otros BCC-DHP solo dilatan la aferente (aumenta presión glomerular). El Manidipino dilata TAMBIÉN la eferente → reduce presión intraglomerular → proteinuria cae (análogo a IECAs sin hiperpotasemia/tos).'
      },
      dose: {
        adult: { pt: 'Início: 10 mg VO 1×/dia, após o café da manhã. Após 1–2 semanas, pode subir para 20 mg.', es: 'Inicio: 10 mg VO 1×/día, tras el desayuno. Tras 1–2 semanas, puede subir a 20 mg.' },
        pediatric: { pt: 'Não indicado.', es: 'No indicado.' }
      },
      administration: { pt: ['Tomar SEMPRE pela manhã APÓS refeição (ao contrário da lercanidipina).'], es: ['Tomar SIEMPRE por la mañana TRAS la comida (al contrario de la lercanidipina).'] },
      renalAdjustment: { required: false, message: { pt: 'Seguro e indicado em DRC leve-moderada (nefroprotetor).', es: 'Seguro e indicado en ERC leve-moderada (nefroprotector).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Não exceder 10 mg/dia em disfunção hepática leve-moderada. Evitar na severa.', es: 'No exceder 10 mg/día en disfunción hepática leve-moderada. Evitar en severa.' } },
      commonAdverseEffects: { pt: ['Palpitações iniciais (desaparecem com o tempo)', 'Cefaleia e calor facial', 'Edema periférico leve (menor que anlodipino)'], es: ['Palpitaciones iniciales (desaparecen con el tiempo)', 'Cefalea y calor facial', 'Edema periférico leve (menor que amlodipino)'] },
      dangerousAdverseEffects: { pt: ['Hipotensão postural excessiva em idosos'], es: ['Hipotensión postural excesiva en ancianos'] },
      contraindications: {
        absolute: { pt: ['Angina instável ativa', 'IAM há menos de 1 mês'], es: ['Angina inestable activa', 'IAM hace menos de 1 mes'] },
        relative: { pt: ['Disfunção hepática não monitorada'], es: ['Disfunción hepática no monitorizada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SUBSTITUTO INTELIGENTE DO IECA: Se o paciente diabético não tolerar IECA (tosse) ou BRA (hiperpotassemia), o Manidipino é o anti-hipertensivo de resgate que exerce proteção renal SIMILAR sem afetar o potássio. É o único BCC-DHP com evidência de redução de microalbuminúria em diabéticos (AMANDIP Study).', es: 'EL SUSTITUTO INTELIGENTE DEL IECA: Si el paciente diabético no tolera IECA (tos) o ARA (hiperpotasemia), el Manidipino es el antihipertensivo de rescate que ejerce protección renal SIMILAR sin afectar el potasio (AMANDIP Study).' }
      },
      references: { pt: 'AMANDIP Study; ESC Diabetic Nephropathy Guidelines; ESC/ESH Hypertension Guidelines 2023; EMA Label; Lexicomp 2026.', es: 'AMANDIP Study; ESC Diabetic Nephropathy Guidelines; ESC/ESH Hypertension Guidelines 2023.' }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 426 / ONDA 51
         (anlodipino · nifedipina · felodipina · lercanidipina · manidipina)
         ANTI-DUPLICAÇÃO: IDs canônicos ANVISA — coexistência com cardio.js
         (CARDIO_DRUGS_DB) via namespaces distintos, sem colisão de runtime */

  /* ─── GUARD BUILD 437 ─── */
  if (typeof window.CARDIOLOGIA_DRUGS_DB !== 'object' || window.CARDIOLOGIA_DRUGS_DB === null) return;

  Object.assign(window.CARDIOLOGIA_DRUGS_DB, {

    /* ── TRANDOLAPRIL ───────────────────────────────────────────────── */
    "trandolapril": {
      name: { pt: 'Trandolapril', es: 'Trandolapril' },
      category: 'cardiologia',
      class: { pt: 'Inibidor da Enzima Conversora de Angiotensina (IECA) de Alta Lipofilia', es: 'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) de Alta Lipofilia' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica', 'Disfunção Ventricular Esquerda pós-Infarto Agudo do Miocárdio (melhora de sobrevida global)', 'Nefropatia Diabética com microalbuminúria'],
        es: ['Hipertensión Arterial Sistémica', 'Disfunción Ventricular Izquierda post-Infarto de Miocardio', 'Nefropatía Diabética']
      },
      commercialNames: { br: ['Gopten'], ar: ['Gopten', 'Udrik'] },
      presentation: { pt: ['Cápsulas duras 0,5 mg, 1 mg, 2 mg e 4 mg'], es: ['Cápsulas 0,5 mg, 1 mg, 2 mg y 4 mg'] },
      mechanism: {
        pt: 'O IECA mais Lipofílico da História. É um pró-fármaco convertido no fígado no metabólito ativo Trandolaprilato. A sua grande jogada de engenharia molecular é a sua lipofilia extrema (afinidade por gordura). Ele atravessa as barreiras dos tecidos com facilidade e se liga à ECA endotelial de forma 10 vezes mais forte que o Captopril. Bloqueia o eixo RAA tecidual por mais de 24 a 36 horas, impedindo de forma implacável o remodelamento cardíaco pós-infarto.',
        es: 'Profármaco convertido en Trandolaprilat. Es el IECA con mayor lipofilia de su clase, lo que le permite una penetración tisular excepcional. Posee una afinidad de unión por la ECA endotelial vascular extremadamente alta y duradera, suprimiendo el eje RAA por más de 24-36 horas y frenando el remodelado cardíaco.'
      },
      dose: {
        adult: {
          pt: 'Hipertensão: Iniciar com 1 mg a 2 mg via oral, UMA VEZ ao dia. Ajustar até 4 mg/dia. Pós-Infarto (Estudo TRACE): Iniciar com 0,5 mg ao dia, escalonando até o alvo de 4 mg/dia.',
          es: 'Hipertensión: Iniciar con 1 mg a 2 mg vía oral, UNA VEZ al día. Máx 4 mg/día. Post-Infarto: Iniciar con 0,5 mg al día, escalonando hasta la meta de 4 mg/día.'
        },
        pediatric: {
          pt: 'Segurança e eficácia não estabelecidas em pediatria.',
          es: 'No recomendado en niños.'
        }
      },
      administration: { pt: ['Uso oral diário, preferencialmente pela manhã. Pode ser administrado com ou sem alimentos, mantendo absorção estável.'], es: ['Uso oral diario, por la mañana. Puede tomarse con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, reduzir a dose inicial obrigatória para 0,5 mg ao dia, monitorando potássio.', es: 'Si ClCr < 30 mL/min, dosis inicial reducida a 0,5 mg al día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose hepática severa, a conversão do pró-fármaco é mais lenta. Iniciar com 0,5 mg ao dia.', es: 'En cirrosis grave, iniciar con 0,5 mg al día debido a metabolismo lento.' } },
      commonAdverseEffects: { pt: ['Tosse seca irritativa de padrão crônico', 'Tontura postural e hipotensão na primeira dose', 'Hipercalemia leve'], es: ['Tos seca irritativa', 'Mareo postural e hipotensión de primera dosis', 'Hiperpotasemia leve'] },
      dangerousAdverseEffects: { pt: ['ANGIOEDEMA LETAL de glote e face', 'Insuficiência renal funcional anúrica aguda (em rim único ou estenose renal)'], es: ['ANGIOEDEMA LETAL', 'Insuficiencia renal aguda funcional'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Black Box de classe por destruição renal fetal)', 'Histórico de angioedema induzido por qualquer IECA'], es: ['Embarazo (Caja Negra por toxicidad fetal)', 'Historial de angioedema'] },
        relative: { pt: ['Uso associado com diuréticos poupadores de potássio ou suplementos puros'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SALVADOR DO CORAÇÃO INFARTADO (O ESTUDO TRACE): O Trandolapril ganhou a coroa da cardiologia após o estudo europeu TRACE. Ele provou que dar o remédio logo após um infarto grave com disfunção de bomba reduz a mortalidade global em 22% a longo prazo, porque impede mecanicamente que o coração do paciente cresça "torto e dilatado" (remodelamento).', es: 'EL REDENTOR POST-INFARTO (ESTUDIO TRACE): Demostró que iniciar Trandolapril tras un infarto agudo con disfunción ventricular reduce la mortalidad global un 22% a largo prazo, al bloquear el remodelado patológico del ventrículo.' }
      },
      references: { pt: 'TRACE Trial (Lancet 1995 - Trandolapril Cardiac Evaluation); Diretrizes da ESC/SBC sobre Infarto Agudo do Miocárdio.', es: 'TRACE Trial (Lancet 1995); Directrices de la Sociedad Europea de Cardiología (ESC).' }
    },

    /* ── PERHEXILINA ────────────────────────────────────────────────── */
    "perhexilina": {
      name: { pt: 'Perhexilina (Maleato de)', es: 'Perhexilina (Maleato de)' },
      category: 'cardiologia',
      class: { pt: 'Modulador do Metabolismo Energético Miocárdico / Inibidor de CPT-1', es: 'Modulador del Metabolismo Energético Miocárdico / Inhibidor de CPT-1' },
      indications: {
        pt: ['Tratamento de Angina Pectoris Crônica Grave refratária que não responde a outros antianginosos clássicos', 'Manejo de sintomas em pacientes com Cardiomiopatia Hipertrófica Obstrutiva'],
        es: ['Tratamiento de Angina Pectoris Crónica Grave refractaria', 'Manejo de síntomas en Cardiomiopatía Hipertrófica Obstructiva']
      },
      commercialNames: { br: ['Pexsig (Importação regulada)'], ar: ['Pexsig'] },
      presentation: { pt: ['Comprimidos de 100 mg'], es: ['Comprimidos de 100 mg'] },
      mechanism: {
        pt: 'O Protetor de Oxigênio Mitocondrial. A Perhexilina inibe a enzima CPT-1 (Carnitina Palmitoiltransferase-1) dentro das mitocôndrias do coração. Ao bloquear essa enzima, ela proíbe o coração de queimar Ácidos Graxos para gerar energia, forçando o miocárdio a queimar GLICOSE. A queima de glicose consome muito MENOS oxigênio por molécula de ATP gerada. Isso faz com que o coração do paciente precise de menos oxigênio para funcionar, eliminando a dor da angina.',
        es: 'Inhibidor de la enzima mitocondrial carnitina palmitoiltransferasa-1 (CPT-1). Cambia el metabolismo energético del miocardio de la oxidación de ácidos grasos a la oxidación de glucosa, la cual es metabólicamente más eficiente y requiere menos oxígeno por mol de ATP generado, aliviando la isquemia miocárdica.'
      },
      dose: {
        adult: {
          pt: 'Início: 100 mg via oral, UMA VEZ ao dia. Requer monitoramento rigoroso das concentrações no sangue (janela terapêutica estreita: 0,15 a 0,60 mg/L). Ajustar até um teto máximo de 300 mg/dia.',
          es: 'Inicio: 100 mg vía oral, UNA VEZ al día. Requiere monitoreo terapéutico obligatorio de niveles séricos (Rango: 0,15 a 0,60 mg/L).'
        },
        pediatric: {
          pt: 'Não indicado em pediatria.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário. OBRIGATÓRIO dosar o nível sanguíneo da droga após 1 a 2 semanas do início do tratamento devido à variação genética de metabolismo via CYP2D6.'], es: ['Uso oral diario. Obligatorio dosar concentraciones plasmáticas para evitar neurotoxicidad severa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito de dose renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'ALTAMENTE PERIGOSO. Metabolizado pela via CYP2D6. Se o paciente for um "metabolizador lento" genético, a droga acumula, causando cirrose e destruição dos nervos. Monitorar transaminases.', es: 'Metabolizado por CYP2D6. Contraindicado en insuficiencia hepática grave por alto riesgo de hepatotoxicidad celular.' } },
      commonAdverseEffects: { pt: ['Náuseas e tonturas iniciais', 'Fadiga e cefaleia', 'Flutuações de peso'], es: ['Náuseas y mareos', 'Fatiga y cefalea', 'Pérdida de peso'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE SEVERA (Cirrose fulminante e infiltração de gordura fosfolipídica)', 'NEUROPATIA PERIFÉRICA GRAVE (Fraqueza nas pernas e dormência incapacitante se os níveis passarem de 0,6 mg/L)'], es: ['HEPATOTOXICIDAD GRAVE (Cirrosis fulminante)', 'NEUROPATÍA PERIFÉRICA GRAVE (Pérdida de la marcha por mielinolisis axonal)'] },
      contraindications: {
        absolute: { pt: ['Doença hepática ativa pré-existente', 'Impossibilidade laboratorial de dosar os níveis plasmáticos da droga'], es: ['Enfermedad hepática activa', 'Imposibilidad de realizar monitoreo de niveles en sangre'] },
        relative: { pt: ['Uso concomitante com inibidores potentes de CYP2D6 (como Fluoxetina ou Paroxetina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DOS NÍVEIS SANGUÍNEOS: A Perhexilina é uma das drogas mais perigosas da cardiologia se usada às cegas. Causa fosfolipidose generalizada. Se o nível passar do teto de 0,60 mg/L, o paciente desenvolve neuropatia que tira o movimento dos pés e destrói o fígado. Só use se puder dosar o exame de sangue.', es: 'ALERTA DE SEGURIDAD EXTREMA: Si los niveles superan los 0,60 mg/L, acumula fosfolípidos en los tejidos provocando polineuropatía desmielinizante severa y cirrosis. Es mandatorio suspender si hay hormigueo en extremidades.' }
      },
      references: { pt: 'CARISA Trial (Metabolic support); European Heart Journal Antianginal Guide; FDA Special Access Data Pexsig.', es: 'European Heart Journal Antianginal Guidelines; Manual de Toxicología Clínica de Micromedex.' }
    },

    /* ── ALISQUIRENO ────────────────────────────────────────────────── */
    "alisquireno": {
      name: { pt: 'Alisquireno (Hemifumarato de)', es: 'Aliskiren (Hemifumarato de)' },
      category: 'cardiologia',
      class: { pt: 'Inibidor Direto da Renina / Bloqueador Primário do Eixo RAA', es: 'Inhibidor Directo de la Renina / Bloqueador Primario del Eje RAA' },
      indications: {
        pt: ['Tratamento da Hipertensão Arterial Sistêmica isolada ou em combinação com outros anti-hipertensivos (Exceto IECA/BRA)'],
        es: ['Tratamiento de la Hipertensión Arterial Sistémica']
      },
      commercialNames: { br: ['Rasilez'], ar: ['Rasilez', 'Rasilez HCT (Assoc)'] },
      presentation: { pt: ['Comprimidos revestidos 150 mg e 300 mg'], es: ['Comprimidos 150 mg y 300 mg'] },
      mechanism: {
        pt: 'O Bloqueador da Origem do Eixo. O Alisquireno atua no topo do sistema. Ele liga-se diretamente no sítio ativo da Renina fabricada pelos rins. Ao travar a Renina, ele impede mecanicamente que o Angiotensinogênio vire Angiotensina I. Sem Angiotensina I, não há substrato para a ECA trabalhar, cortando por completo a produção de Angiotensina II e Aldosterona na raiz do problema.',
        es: 'Inhibidor directo, potente y selectivo de la renina humana. Al unirse a la enzima, bloquea la conversión de angiotensinógeno en Angiotensina I, disminuyendo los niveles de Angiotensina II y Aldosterona desde el paso inicial y limitante del sistema.'
      },
      dose: {
        adult: {
          pt: 'Início: 150 mg via oral, UMA VEZ ao dia. Se a pressão não atingir o alvo após 2-4 semanas, a dose pode ser elevada para 300 mg ao dia.',
          es: 'Inicio: 150 mg vía oral, UNA VEZ al día. Puede incrementarse a 300 mg al día tras 2-4 semanas de evaluación.'
        },
        pediatric: {
          pt: 'Contraindicado em crianças menores de 2 anos devido ao risco imenso de toxicidade renal e colapso por hipotensão.',
          es: 'Contraindicado en menores de 2 años.'
        }
      },
      administration: { pt: ['Deve ser tomado uma vez ao dia, sempre no mesmo horário. EVITAR TOMAR JUNTO COM REFEIÇÕES RICAS EM GORDURA, pois elas reduzem a absorção da droga em mais de 70%, gerando falha terapêutica.'], es: ['Tomar siempre a la misma hora. EVITAR COMIDAS ALTAS EN GRASA, ya que disminuyen su absorción un 70%, anulando su eficacia.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, usar com extrema cautela pelo risco severo de hipercalemia e piora aguda da função renal.', es: 'Contraindicado el uso asociado con IECA/BRA si hay falla renal crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste prévio.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Diarreia dose-dependente (afeta ~2% com 300mg)', 'Hipercalemia leve', 'Tontura e fadiga'], es: ['Diarrea dosis-dependiente', 'Hiperpotasemia leve', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Renal Aguda funcional catastrófica', 'Angioedema de glote e anafilaxia', 'Hipotensão severa com síncope'], es: ['Insuficiencia Renal Aguda', 'Angioedema de glotis', 'Hipotensión severa'] },
      contraindications: {
        absolute: { pt: ['USO COMBINADO COM IECA (Enalapril) OU BRA (Losartana) EM PACIENTES DIABÉTICOS (Estudo ALTITUDE provou que causa AVC e falência renal)', 'Gravidez (causa morte renal fetal)'], es: ['USO COMBINADO CON IECA O ARA-II EN PACIENTES DIABÉTICOS (Estudio ALTITUDE)', 'Embarazo'] },
        relative: { pt: ['Estenose bilateral de artéria renal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O DESASTRE DO ESTUDO ALTITUDE (NÃO MISTURE OS BLOQUEADORES): O Alisquireno foi desenhado para revolucionar a pressão. Mas o grande estudo ALTITUDE trouxe um banho de água fria: misturar o Alisquireno com Losartana ou Enalapril em diabéticos aumentou assustadoramente a taxa de AVC, infarto e paralisação dos rins. Nunca combine este remédio com outro bloqueador do eixo.', es: 'EL DESASTRE DEL ESTUDIO ALTITUDE: Está PROHIBIDO combinar Aliskiren con Enalapril o Losartán en pacientes con diabetes o falla renal. El estudio demostró que esta doble combinación dispara los ACV, la hiperpotasemia crítica y la necesidad de diálisis de emergencia.' }
      },
      references: { pt: 'ALTITUDE Trial (NEJM 2012 - Aliskiren in Type 2 Diabetes); AVOID Trial (Nefropatia); Diretrizes SBC Hipertensão.', es: 'ALTITUDE Trial (NEJM 2012); AVOID Trial; Directrices de la Sociedad Argentina de Hipertensión (SAHA).' }
    },

    /* ── AMLODIPINO + VALSARTANA ────────────────────────────────────── */
    "amlodipino_valsartana": {
      name: { pt: 'Amlodipino + Valsartana', es: 'Amlodipino + Valsartán' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva Sinérgica / Bloqueador de Cálcio + BRA', es: 'Combinación Antihipertensiva Sinérgica / Bloqueador de Calcio + ARA-II' },
      indications: {
        pt: ['Tratamento da Hipertensão Arterial Sistêmica em pacientes cuja pressão não é controlada com monoterapia (Segunda linha em diante)'],
        es: ['Tratamiento de la Hipertensión Arterial Sistémica cuando falla la monoterapia']
      },
      commercialNames: { br: ['Exforge', 'Brasart BCC', 'Valsatress AM'], ar: ['Exforge', 'Simval AM'] },
      presentation: { pt: ['Comprimidos revestidos nas dosagens 5/160 mg, 10/160 mg e 10/320 mg'], es: ['Comprimidos de 5/160 mg, 10/160 mg y 10/320 mg'] },
      mechanism: {
        pt: 'O Combo Perfeito Sem Inchaço. Junta dois mecanismos brilhantes. O Amlodipino relaxa a artéria que entra no capilar (vasodilatação pré-capilar). A Valsartana bloqueia o receptor AT1 da Angiotensina II, relaxando a veia que SAI do capilar (vasodilatação pós-capilar). Como os dois lados do vaso abrem juntos, a pressão no microvaso equilibra e o plasma não vaza para a perna. A pressão despenca e a incidência de edema maleolar cai pela metade.',
        es: 'Combinación sinérgica de un bloqueante de canales de calcio (Amlodipino) y un antagonista de los receptores de angiotensina II (Valsartán). El amlodipino induce vasodilatación arteriolar (precapilar), mientras que el valsartán promueve venodilatación (postcapilar). Esta acción equilibrada reduce la presión hidrostática en el microvaso, disminuyendo el edema en tobillos.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, de manhã. Titular a dosagem conforme a resposta de queda pressórica (ex: subir de 5/160mg para 10/160mg após 2 semanas se necessário).',
          es: '1 comprimido vía oral, UNA VEZ al día por la mañana. Se titula escalonando las dosis según objetivos terapéuticos.'
        },
        pediatric: {
          pt: 'Não indicado para crianças.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral contínuo diário. Pode ser administrado com ou sem alimentos. Recomenda-se tomar sempre no mesmo horário todos os dias.'], es: ['Uso oral continuo. Puede tomarse con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, usar com monitoramento rigoroso devido ao componente Valsartana (risco de hipercalemia). Não requer ajuste se ClCr > 30.', es: 'Precaución extrema si ClCr < 30 mL/min por riesgo de hiperpotasemia.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Usar com extremo cuidado em hepatopatias severas ou obstrução biliar devido ao clearance de amlodipino estar lentificado.', es: 'Reducir dosis inicial al mínimo en insuficiencia hepática por acumulación de amlodipino.' } },
      commonAdverseEffects: { pt: ['Tontura postural transitória', 'Edema periférico leve (muito menor que amlodipino isolado)', 'Cefaleia e fadiga'], es: ['Mareo postural', 'Edema periférico leve', 'Cefalea y fatiga'] },
      dangerousAdverseEffects: { pt: ['Insuficiência renal funcional aguda', 'Hipotensão severa com síncope na primeira tomada', 'Hipercalemia severa'], es: ['Insuficiencia renal funcional', 'Síncope hipotensivo', 'Hiperpotasemia'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Valsartana causa parada de filtração e defeito ósseo fetal)', 'Uso associado com Alisquireno em diabéticos'], es: ['Embarazo (Absoluto)', 'Uso concomitante con Aliskiren en pacientes diabéticos'] },
        relative: { pt: ['Estenose aórtica severa ou estenose bilateral de artéria renal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A MECÂNICA DA TROCA ESPERTA: Se o seu paciente usa Amlodipino 10mg e chega reclamando que o pé parece um "pão de forma" de tão inchado, o erro é dar diurético. A conduta inteligente é migrar para o combo Exforge. A Valsartana dilata as veias que o amlodipino ignorou, puxando o líquido da perna de volta para o vaso e murchando o pé do doente.', es: 'EL RESCATE MECÁNICO DEL EDEMA: En lugar de sumar Furosemida (error iatrogénico común) ante la hinchazón causada por amlodipino, la asociación con Valsartán equilibra la microcirculación al abrir el esfínter postcapilar venoso, eliminando el edema en pocas semanas.' }
      },
      references: { pt: 'EXFORGE Clinical Development Program; JNC 8 Hypertension Guidelines; Diretrizes de HAS da SBC 2020.', es: 'EXFORGE Clinical Development Program; Guías de Hipertensión de la ESC/ESH.' }
    },

    /* ── AMLODIPINO + LOSARTANA ─────────────────────────────────────── */
    "amlodipino_losartana": {
      name: { pt: 'Amlodipino + Losartana Potássica', es: 'Amlodipino + Losartán Potásico' },
      category: 'cardiologia',
      class: { pt: 'Combinação Anti-hipertensiva / Bloqueador de Cálcio + Antagonista AT1', es: 'Combinación Antihipertensiva / Bloqueador de Calcio + Antagonista AT1' },
      indications: {
        pt: ['Hipertensão Arterial Sistêmica em pacientes que necessitam de terapia combinada com alta adesão (comprimido único de baixo custo)'],
        es: ['Hipertensión Arterial Sistémica que requiere terapia combinada en un solo comprimido de bajo costo']
      },
      commercialNames: { br: ['Aradois AM', 'Lotar', 'Corus HAM'], ar: ['Aradois AM'] },
      presentation: { pt: ['Comprimidos revestidos combinados 2,5/50 mg, 5/50 mg e 5/100 mg'], es: ['Comprimidos de 2,5/50 mg, 5/50 mg y 5/100 mg'] },
      mechanism: {
        pt: 'O Combo de Alto Acesso Nacional. Une a ação prolongada do Amlodipino (vasodilatação periférica arterial por 24h) com o bloqueio do receptor AT1 pela Losartana. A Losartana adiciona uma vantagem biológica única: possui um efeito URICOSÚRICO discreto (obriga o rim a jogar o Ácido Úrico fora pela urina). Isso neutraliza o aumento de ácido úrico que pode ocorrer em pacientes predispostos à gota.',
        es: 'Combinación de amlodipino y losartán. Además del sinergismo tensional arteriovenoso capilar, el losartán aporta un efecto uricosúrico intrínseco a nivel del túbulo renal proximal, lo que contrarresta la tendencia a la hiperuricemia que pueden inducir los bloqueantes de calcio a largo plazo.'
      },
      dose: {
        adult: {
          pt: '1 comprimido via oral, UMA VEZ ao dia, pela manhã ou à noite. Dose máxima restrita ao teto dos componentes (5/100 mg ou conforme apresentação disponível).',
          es: '1 comprimido vía oral, UNA VEZ al día. Ajustable según control de cifras de presión arterial.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Uso oral diário. Pode ser ingerido de estômago cheio ou vazio. Manter o uso contínuo mesmo com níveis pressóricos ótimos.'], es: ['Uso oral diario. Puede tomarse con o sin alimentos de manera indefinida.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, risco de hipercalemia funcional por acúmulo de losartana; monitorar creatinina sérica a cada 3 meses.', es: 'Monitorear potasio y creatinina si hay insuficiencia renal moderada a grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'A Losartana precisa do fígado para virar seu metabólito ativo EXP3174. Em cirróticos, o efeito pode ser menor, mas o amlodipino pode acumular. Iniciar com doses mínimas (2,5/50 mg).', es: 'Cirrosis hepática ralentiza la activación de losartán y acumula amlodipino; iniciar con dosis mínima.' } },
      commonAdverseEffects: { pt: ['Tontura ao levantar rápido (hipotensão ortostática)', 'Cefaleia de tração vascular', 'Cãibras musculares leves'], es: ['Mareo postural', 'Cefalea', 'Calambres musculares leves'] },
      dangerousAdverseEffects: { pt: ['Insuficiência renal aguda funcional anúrica', 'Hipercalemia crítica arritmogênica', 'Angioedema laríngeo (Raro)'], es: ['Insuficiencia renal aguda', 'Hiperpotasemia crítica', 'Angioedema'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Contraindicação absoluta black box — risco de malformação e morte renal fetal)'], es: ['Embarazo (Contraindicación absoluta por riesgo de insuficiencia renal y muerte fetal)'] },
        relative: { pt: ['Histórico de gota severa recorrente (embora a losartana ajude, monitorar eletrólitos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA PARADA NA DIARREIA: Se o paciente que toma Lotar/Aradois AM pegar uma infecção intestinal grave com vômitos e diarreia volumosa, ele vai desidratar. Manter o remédio ativa um bloqueio que impede o rim de se defender da desidratação, causando Insuficiência Renal Aguda. A conduta certa é SUSPENDER temporariamente o combo até curar a diarreia.', es: 'EL ALERTA DE LA DESHIDRATACIÓN AGUDA: Si el paciente presenta un cuadro de deshidratación por diarrea profusa o vómitos, mantener este combo bloquea los mecanismos de defensa del riñón, gatillando una Injuria Renal Aguda prerrenal. Se debe suspender el fármaco temporalmente hasta restaurar la volemia.' }
      },
      references: { pt: 'Estudo Clínico LOTAR; Diretrizes de Hipertensão Arterial da SBC/SBD/SBN 2020; JNC 8 Manual.', es: 'Estudio Clínico LOTAR; Guías de Hipertensión de la Sociedad Argentina de Cardiología.' }
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 437 / ONDA 64
         (trandolapril · perhexilina · alisquireno · amlodipino_valsartana · amlodipino_losartana)
         Bloco: IECAs lipofílicos, Modulador Metabólico CPT-1, Inibidor Direto da Renina,
         Combos anti-hipertensivos BCC+BRA e BCC+AT1 */
})();
