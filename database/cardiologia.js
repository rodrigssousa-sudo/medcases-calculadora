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
    }

  }); /* fim Object.assign CARDIOLOGIA_DRUGS_DB — BUILD 354 Lote 1 (Antiarrítmicos: Amiodarona/Adenosina/Lidocaína IV) */
})();
