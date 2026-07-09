/* ============================================================
   MedCases Pro — Módulo: PNEUMOLOGIA — Broncodilatadores
   Expõe: window.PNEUMOLOGIA_DRUGS_DB
   Schema: Object-DB com dose adulto + pediátrico + safetyFlags
   BUILD 386 — Lote 1: Salbutamol · Fenoterol · Terbutalina · Salmeterol · Formoterol
   Categoria: pneumologia
============================================================ */
(function () {
  if (typeof window.PNEUMOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.PNEUMOLOGIA_DRUGS_DB)) {
    window.PNEUMOLOGIA_DRUGS_DB = {};
  }
  Object.assign(window.PNEUMOLOGIA_DRUGS_DB, {

    /* ── SALBUTAMOL (ALBUTEROL) ─────────────────────────────────────────── */
    "salbutamol": {
      name: { pt: 'Salbutamol (Albuterol)', es: 'Salbutamol (Albuterol)' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Curta Duração (SABA)', es: 'Agonista Beta-2 Adrenérgico de Corta Duración (SABA)' },
      indications: {
        pt: ['Alívio imediato do broncoespasmo na Asma Aguda e DPOC (Droga de resgate)', 'Prevenção de asma induzida por exercício', 'Tratamento de emergência da Hipercalemia severa (para jogar o potássio para dentro da célula)'],
        es: ['Alivio inmediato del broncoespasmo en el Asma Aguda y EPOC (Droga de rescate)', 'Prevención de asma inducida por ejercicio', 'Tratamiento de emergencia de la Hiperpotasemia severa (para empujar el potasio hacia dentro de la célula)']
      },
      commercialNames: { br: ['Aerolin'], ar: ['Ventolin', 'Salbutral'] },
      presentation: { pt: ['Spray Inalatório (Aerossol) 100 mcg/dose', 'Solução para nebulização 5 mg/mL', 'Ampolas IV 0,5 mg/mL'], es: ['Spray Inhalatorio (Aerosol) 100 mcg/dosis', 'Solución para nebulización 5 mg/mL', 'Ampollas IV 0,5 mg/mL'] },
      mechanism: {
        pt: 'Estimula seletivamente os receptores Beta-2 no músculo liso brônquico, ativando a adenilciclase e aumentando o AMPc intracelular. Isso causa um relaxamento rápido (em < 5 minutos) da musculatura das vias aéreas apertadas. Além disso, a estimulação Beta-2 liga a bomba Na+/K+ ATPase nas células musculares do corpo inteiro, "sugando" o potássio do sangue para dentro das células.',
        es: 'Estimula selectivamente los receptores Beta-2 en el músculo liso bronquial, activando la adenilciclasa y aumentando el AMPc intracelular. Esto causa una relajación rápida (en < 5 minutos) de la musculatura de las vías respiratorias apretadas. Además, la estimulación Beta-2 enciende la bomba Na+/K+ ATPasa en las células musculares de todo el cuerpo, "succionando" el potasio de la sangre hacia dentro de las células.'
      },
      dose: {
        adult: {
          pt: 'Crise de Asma (Spray): 4 a 10 jatos (100mcg/jato) com espaçador a cada 20 min por 1 hora. Nebulização: 2,5 a 5 mg (0,5 a 1 mL) diluído em SF. Hipercalemia: 10 a 20 mg em nebulização contínua.',
          es: 'Crisis de Asma (Spray): 4 a 10 puffs (100mcg/puff) con espaciador cada 20 min por 1 hora. Nebulización: 2,5 a 5 mg (0,5 a 1 mL) diluido en SF. Hiperpotasemia: 10 a 20 mg en nebulización continua.'
        },
        pediatric: {
          pt: 'Spray: 2 a 6 jatos a cada 20 min (ataque). Nebulização: 0,15 mg/kg (mín 1,25 mg, máx 5 mg).',
          es: 'Spray: 2 a 6 puffs cada 20 min (ataque). Nebulización: 0,15 mg/kg (mín 1,25 mg, máx 5 mg).'
        }
      },
      administration: { pt: ['O uso de Spray Inalatório COM ESPAÇADOR é cientificamente superior à nebulização no Pronto-Socorro (menor efeito colateral e maior deposição pulmonar).', 'A via endovenosa é reservada para asma quase fatal na UTI.'], es: ['El uso de Spray Inhalatorio CON ESPACIADOR es científicamente superior a la nebulización en Urgencias (menor efecto colateral y mayor deposición pulmonar).', 'La vía endovenosa se reserva para asma casi fatal en la UCI.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Tremores finos de extremidades (Mãos trêmulas)', 'Taquicardia sinusal e palpitações', 'Ansiedade e insônia'], es: ['Temblores finos de extremidades (Manos temblorosas)', 'Taquicardia sinusal y palpitaciones', 'Ansiedad e insomnio'] },
      dangerousAdverseEffects: { pt: ['Hipocalemia grave (Queda abrupta de potássio se doses repetidas maciças)', 'Arritmias cardíacas em pacientes predispostos', 'Broncoespasmo paradoxal (raro, pela excipiente do spray)'], es: ['Hipopotasemia grave (Caída abrupta de potasio si dosis repetidas masivas)', 'Arritmias cardíacas en pacientes predispuestos', 'Broncoespasmo paradójico (raro, por el excipiente del spray)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes da fórmula'], es: ['Hipersensibilidad grave a los componentes de la fórmula'] },
        relative: { pt: ['Pacientes com arritmias taquicárdicas não controladas', 'Cardiopatia isquêmica grave'], es: ['Pacientes con arritmias taquicárdicas no controladas', 'Cardiopatía isquémica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Se um paciente asmático precisar usar seu inalador de Salbutamol mais de 2 vezes por semana para alívio de sintomas, sua asma está DESCONTROLADA e ele corre risco de vida. O tratamento anti-inflamatório (Corticoide Inalatório) deve ser introduzido imediatamente.', es: 'Si un paciente asmático necesita usar su inhalador de Salbutamol más de 2 veces por semana para alivio, su asma está DESCONTROLADA y corre riesgo de vida. El tratamiento antiinflamatorio debe introducirse inmediatamente.' }
      }
    },

    /* ── FENOTEROL ──────────────────────────────────────────────────────── */
    "fenoterol": {
      name: { pt: 'Fenoterol', es: 'Fenoterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Curta Duração (SABA)', es: 'Agonista Beta-2 Adrenérgico de Corta Duración (SABA)' },
      indications: {
        pt: ['Crise de Asma Aguda e DPOC exarcebada (amplamente usado na América Latina como medicação de nebulização no PS)'],
        es: ['Crisis de Asma Aguda y EPOC exacerbada (ampliamente usado en América Latina como medicación de nebulización en Urgencias)']
      },
      commercialNames: { br: ['Berotec'], ar: ['Berotec'] },
      presentation: { pt: ['Solução gotas para inalação 5 mg/mL (1 gota = 0,25 mg)', 'Spray Inalatório 100 mcg/dose'], es: ['Solución gotas para inhalación 5 mg/mL (1 gota = 0,25 mg)', 'Spray Inhalatorio 100 mcg/dosis'] },
      mechanism: {
        pt: 'Mecanismo essencialmente idêntico ao do salbutamol. No entanto, o Fenoterol demonstrou ter um perfil de estimulação dos receptores Beta-1 (cardíacos) ligeiramente maior do que o salbutamol em altas doses, o que explica por que os pacientes frequentemente relatam muito mais taquicardia e palpitação ("coração saindo pela boca") com o Fenoterol.',
        es: 'Mecanismo esencialmente idéntico al del salbutamol. Sin embargo, el Fenoterol demostró tener un perfil de estimulación de los receptores Beta-1 (cardíacos) ligeramente mayor que el salbutamol en altas dosis, lo que explica por qué los pacientes frecuentemente relatan mucha más taquicardia y palpitación con el Fenoterol.'
      },
      dose: {
        adult: {
          pt: 'Nebulização (Resgate): 10 a 20 gotas (2,5 a 5 mg) diluídas em 3 a 4 mL de Soro Fisiológico 0,9%. Repetir a cada 20-30 min na crise grave.',
          es: 'Nebulización (Rescate): 10 a 20 gotas (2,5 a 5 mg) diluidas en 3 a 4 mL de Suero Fisiológico 0,9%. Repetir cada 20-30 min en la crisis grave.'
        },
        pediatric: {
          pt: '1 gota para cada 3 kg de peso (Máx 10 gotas) por inalação.',
          es: '1 gota por cada 3 kg de peso (Máx 10 gotas) por inhalación.'
        }
      },
      administration: { pt: ['As gotas SÃO EXCLUSIVAS PARA NEBULIZAÇÃO RESPIRATÓRIA. NUNCA DEVE SER ENGOLIDO (risco de superdosagem e efeitos cardíacos maciços).'], es: ['Las gotas SON EXCLUSIVAS PARA NEBULIZACIÓN RESPIRATORIA. NUNCA DEBE SER TRAGADO (riesgo de sobredosis y efectos cardíacos masivos).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Taquicardia severa induzida (efeito colateral quase universal)', 'Tremores musculares intensos'], es: ['Taquicardia severa inducida (efecto colateral casi universal)', 'Temblores musculares intensos'] },
      dangerousAdverseEffects: { pt: ['Isquemia miocárdica em idosos devido à taquicardia reflexa', 'Hipocalemia profunda'], es: ['Isquemia miocárdica en ancianos debido a la taquicardia refleja', 'Hipopotasemia profunda'] },
      contraindications: {
        absolute: { pt: ['Cardiomiopatia obstrutiva hipertrófica', 'Taquiarritmias'], es: ['Miocardiopatía obstructiva hipertrófica', 'Taquiarritmias'] },
        relative: { pt: ['Hipertireoidismo severo (risco de crise tireotóxica induzida por catecolaminas)'], es: ['Hipertiroidismo severo (riesgo de crisis tirotóxica inducida por catecolaminas)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Erro de Via Letal: É extremamente comum mães inexperientes pingarem as gotas de Berotec direto na boca da criança achando que é xarope. O excesso ingerido causa taquicardia supraventricular e risco de morte. SEMPRE escreva "PINGAR NO COPINHO DO NEBULIZADOR" na receita.', es: 'Error de Vía Letal: Es extremadamente común que madres inexpertas goteen el Berotec directo en la boca del niño creyendo que es jarabe. El exceso ingerido causa taquicardia supraventricular y riesgo de muerte. SIEMPRE escriba "GOTEAR EN EL VASITO DEL NEBULIZADOR" en la receta.' }
      }
    },

    /* ── TERBUTALINA ────────────────────────────────────────────────────── */
    "terbutalina": {
      name: { pt: 'Terbutalina', es: 'Terbutalina' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Curta Duração (SABA) / Tocolítico', es: 'Agonista Beta-2 Adrenérgico de Corta Duración (SABA) / Tocolítico' },
      indications: {
        pt: ['Asma Aguda Severa refratária aos inaladores (Status Asthmaticus, via injetável SC/IV)', 'Trabalho de Parto Prematuro (Efeito Tocolítico - inibição das contrações uterinas) off-label e de curta duração'],
        es: ['Asma Aguda Severa refractaria a los inhaladores (Status Asthmaticus, vía inyectable SC/IV)', 'Trabajo de Parto Prematuro (Efecto Tocolítico - inhibición de las contracciones uterinas) off-label y de corta duración']
      },
      commercialNames: { br: ['Bricanyl'], ar: ['Bricanyl'] },
      presentation: { pt: ['Ampolas SC/IV 0,5 mg/mL'], es: ['Ampollas SC/IV 0,5 mg/mL'] },
      mechanism: {
        pt: 'Estimula receptores beta-2. Nas vias aéreas, relaxa o broncoespasmo grave por via sistêmica quando o ar não consegue entrar no pulmão do paciente para levar os inaladores. No útero, o miométrio humano é rico em receptores beta-2; a terbutalina os estimula, induzindo relaxamento uterino maciço e parando as contrações do parto prematuro.',
        es: 'Estimula receptores beta-2. En las vías respiratorias, relaja el broncoespasmo grave por vía sistémica cuando el aire no logra entrar al pulmón del paciente para llevar los inhaladores. En el útero, el miometrio humano es rico en receptores beta-2; la terbutalina los estimula, induciendo relajación uterina masiva y parando las contracciones del parto prematuro.'
      },
      dose: {
        adult: {
          pt: 'Asma Grave: 0,25 mg Subcutâneo (Pode repetir em 15-30 min). Tocólise (Inibição de parto): Infusão contínua IV de 2,5 a 10 mcg/min (titulando até cessar as contrações).',
          es: 'Asma Grave: 0,25 mg Subcutáneo (Puede repetir en 15-30 min). Tocólisis (Inhibición de parto): Infusión continua IV de 2,5 a 10 mcg/min (titulando hasta cesar las contracciones).'
        },
        pediatric: {
          pt: 'Asma Grave: 0,01 mg/kg Subcutâneo (Máx 0,25 mg/dose).',
          es: 'Asma Grave: 0,01 mg/kg Subcutáneo (Máx 0,25 mg/dosis).'
        }
      },
      administration: { pt: ['Na asma, a via Subcutânea é a mais utilizada na emergência. A injeção intravenosa exige bomba de infusão cuidadosa pelo alto risco cardiovascular.'], es: ['En el asma, la vía Subcutánea es la más utilizada en emergencia. La inyección intravenosa exige bomba de infusión cuidadosa por el alto riesgo cardiovascular.'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração mista, evitar doses altas em DRC grave.', es: 'Depuración mixta, evitar dosis altas en ERC grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste agudo.', es: 'Sin necesidad de ajuste agudo.' } },
      commonAdverseEffects: { pt: ['Tremores', 'Taquicardia materna e taquicardia fetal marcantes', 'Nervosismo'], es: ['Temblores', 'Taquicardia materna y taquicardia fetal marcadas', 'Nerviosismo'] },
      dangerousAdverseEffects: { pt: ['Edema Agudo de Pulmão na gestante (Tocolítico em altas doses)', 'Hipocalemia fetal e materna', 'Isquemia miocárdica'], es: ['Edema Agudo de Pulmón en la gestante (Tocolítico en altas dosis)', 'Hipopotasemia fetal y materna', 'Isquemia miocárdica'] },
      contraindications: {
        absolute: { pt: ['Uso para inibição de trabalho de parto prematuro POR MAIS DE 48 HORAS (Alerta Negro da FDA: risco de morte materna por falência cardíaca)'], es: ['Uso para inhibición de trabajo de parto prematuro POR MÁS DE 48 HORAS (Alerta Negro de la FDA: riesgo de muerte materna por falla cardíaca)'] },
        relative: { pt: ['Pacientes com arritmias documentadas'], es: ['Pacientes con arritmias documentadas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'USO TOCOLÍTICO: O uso de Terbutalina para atrasar o parto NÃO salva bebês em longo prazo. Ela só deve ser usada por no máximo 48 horas, o tempo exato para a Dexametasona/Betametasona amadurecer os pulmões do feto antes do nascimento iminente.', es: 'USO TOCOLÍTICO: El uso de Terbutalina para retrasar el parto NO salva bebés a largo plazo. Solo debe usarse por un máximo de 48 horas, el tiempo exacto para que la Dexametasona/Betametasona madure los pulmones del feto antes del nacimiento inminente.' }
      }
    },

    /* ── SALMETEROL ─────────────────────────────────────────────────────── */
    "salmeterol": {
      name: { pt: 'Salmeterol', es: 'Salmeterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Longa Duração (LABA)', es: 'Agonista Beta-2 Adrenérgico de Larga Duración (LABA)' },
      indications: {
        pt: ['Tratamento de MANUTENÇÃO da Asma (Obrigatório junto com corticoides inalatórios)', 'Tratamento de manutenção da Doença Pulmonar Obstrutiva Crônica (DPOC)'],
        es: ['Tratamiento de MANTENIMIENTO del Asma (Obligatorio junto con corticoides inhalatorios)', 'Tratamiento de mantenimiento de la Enfermedad Pulmonar Obstructiva Crónica (EPOC)']
      },
      commercialNames: { br: ['Serevent'], ar: ['Serevent'] },
      presentation: { pt: ['Spray ou pó inalatório 25 a 50 mcg/dose (frequentemente associado à Fluticasona)'], es: ['Spray o polvo inhalatorio 25 a 50 mcg/dosis (frecuentemente asociado a Fluticasona)'] },
      mechanism: {
        pt: 'A molécula do salmeterol possui uma cauda lateral longa e muito lipofílica. Ela se "ancora" fortemente na membrana celular perto do receptor Beta-2 e fica estimulando o receptor continuamente de forma prolongada (até 12 horas). O problema: a molécula demora muito para começar a agir (início de ação em 15 a 30 minutos). Portanto, NÃO SERVE PARA RESGATAR UMA CRISE AGUDA DE ASFIXIA.',
        es: 'La molécula del salmeterol posee una cola lateral larga y muy lipofílica. Se "ancla" fuertemente en la membrana celular cerca del receptor Beta-2 y estimula el receptor continuamente de forma prolongada (hasta 12 horas). El problema: la molécula tarda mucho en comenzar a actuar (inicio de acción en 15 a 30 minutos). Por lo tanto, NO SIRVE PARA RESCATAR UNA CRISIS AGUDA DE ASFIXIA.'
      },
      dose: {
        adult: {
          pt: '1 inalação de 50 mcg a cada 12 horas (sempre uso contínuo, nunca por necessidade).',
          es: '1 inhalación de 50 mcg cada 12 horas (siempre uso continuo, nunca por necesidad).'
        },
        pediatric: {
          pt: 'Acima de 4 anos: 50 mcg a cada 12 horas.',
          es: 'Por encima de 4 años: 50 mcg cada 12 horas.'
        }
      },
      administration: { pt: ['Inalatório. Lavar a boca após o uso se estiver associado a corticoide (Seretide) para evitar candidíase oral.'], es: ['Inhalatorio. Lavar la boca tras el uso si está asociado a corticoide (Seretide) para evitar candidiasis oral.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação predominantemente local e depuração fecal.', es: 'Acción predominantemente local y depuración fecal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ação inalatória local profunda.', es: 'Acción inhalatoria local profunda.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Tremores e cãibras musculares', 'Irritação na garganta'], es: ['Cefalea', 'Temblores y calambres musculares', 'Irritación en la garganta'] },
      dangerousAdverseEffects: { pt: ['Aumento paradoxal da morbimortalidade asmática (Se usado sozinho sem corticoide)'], es: ['Aumento paradójico de la morbimortalidad asmática (Si se usa solo sin corticoide)'] },
      contraindications: {
        absolute: { pt: ['Monoterapia em pacientes com Asma (NUNCA usar LABA sozinho na asma, pois ele oculta a inflamação, não trata a causa e resulta em intubação e morte súbita)', 'Uso como medicação de resgate em crise de broncoespasmo agudo'], es: ['Monoterapia en pacientes con Asma (NUNCA usar LABA solo en el asma, pues oculta la inflamación, no trata la causa y resulta en intubación y muerte súbita)', 'Uso como medicación de rescate en crisis de broncoespasmo agudo'] },
        relative: { pt: ['Arritmias graves'], es: ['Arritmias graves'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING DA FDA: Uso de medicamentos como Salmeterol sem um corticosteroide inalatório de controle AUMENTA o risco de mortes relacionadas à asma. Eles broncodilatam tão bem que o paciente esquece da doença, mas o pulmão continua inflamando silenciosamente até colapsar num broncoespasmo irreversível.', es: 'BLACK BOX WARNING DE LA FDA: El uso de Salmeterol sin un corticosteroide inhalatorio de control AUMENTA el riesgo de muertes relacionadas al asma. Broncodilatan tan bien que el paciente olvida la enfermedad, pero el pulmón se inflama silenciosamente hasta el colapso.' }
      }
    },

    /* ── FORMOTEROL ─────────────────────────────────────────────────────── */
    "formoterol": {
      name: { pt: 'Formoterol', es: 'Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Longa Duração (LABA) de Ação Rápida', es: 'Agonista Beta-2 Adrenérgico de Larga Duración (LABA) de Acción Rápida' },
      indications: {
        pt: ['Estratégia MART (Maintenance and Reliever Therapy) para tratamento e resgate imediato da asma (associado à Budesonida)', 'Manutenção de Asma e DPOC'],
        es: ['Estrategia MART (Maintenance and Reliever Therapy) para tratamiento y rescate inmediato del asma (asociado a Budesonida)', 'Mantenimiento de Asma y EPOC']
      },
      commercialNames: { br: ['Foradil', 'Alenia (Assoc)', 'Symbicort (Assoc)'], ar: ['Foradil', 'Symbicort'] },
      presentation: { pt: ['Cápsulas para inalação ou Spray 12 mcg/dose'], es: ['Cápsulas para inhalación o Spray 12 mcg/dosis'] },
      mechanism: {
        pt: 'É a revolução dos broncodilatadores. Ele é um LABA (Longa duração, garantindo brônquio aberto por 12 horas igual ao salmeterol), PORÉM, possui um início de ação fulminante, quase idêntico ao do salbutamol (1 a 3 minutos). Isso permite que ele seja usado não apenas para manter a asma prevenida o dia todo, mas TAMBÉM para curar o sufocamento na hora da crise aguda.',
        es: 'Es la revolución de los broncodilatadores. Es un LABA (Larga duración, garantizando bronquio abierto por 12 horas igual al salmeterol), PERO posee un inicio de acción fulminante, casi idéntico al del salbutamol (1 a 3 minutos). Esto permite que sea usado no solo para mantener el asma prevenida todo el día, sino TAMBIÉN para curar la asfixia en el momento de la crisis aguda.'
      },
      dose: {
        adult: {
          pt: 'Manutenção (Asma/DPOC): 12 mcg a cada 12 horas. Resgate (Estratégia MART, sempre associado a corticoide): 1 inalação sob demanda na crise (Máx 48 a 72 mcg/dia).',
          es: 'Mantenimiento (Asma/EPOC): 12 mcg cada 12 horas. Rescate (Estrategia MART, siempre asociado a corticoide): 1 inhalación a demanda en la crisis (Máx 48 a 72 mcg/día).'
        },
        pediatric: {
          pt: 'Acima de 6 anos: 12 mcg a cada 12 horas.',
          es: 'Por encima de 6 años: 12 mcg cada 12 horas.'
        }
      },
      administration: { pt: ['Uso inalatório (pó seco ou spray). Enxaguar a boca sempre que estiver na formulação conjugada com corticoide (Budesonida/Formoterol).'], es: ['Uso inhalatorio (polvo seco o spray). Enjuagar la boca siempre que esté en formulación conjugada con corticoide (Budesonida/Formoterol).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolismo hepático menor, sem ajuste.', es: 'Metabolismo hepático menor, sin ajuste.' } },
      commonAdverseEffects: { pt: ['Palpitações leves', 'Tremores e cefaleia', 'Boca seca'], es: ['Palpitaciones leves', 'Temblores y cefalea', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Hipocalemia induzida', 'Aumento de intervalo QT (se usado com outros fármacos arritmogênicos)'], es: ['Hipopotasemia inducida', 'Aumento del intervalo QT (si se usa con otros fármacos arritmogénicos)'] },
      contraindications: {
        absolute: { pt: ['Uso como MONOTERAPIA para tratamento da Asma (Mesma regra do Salmeterol, LABA mata se não tiver corticoide associado)'], es: ['Uso como MONOTERAPIA para el tratamiento del Asma (Misma regla del Salmeterol, LABA mata si no tiene corticoide asociado)'] },
        relative: { pt: ['Estenose subaórtica ou taquicardia severa basal'], es: ['Estenosis subaórtica o taquicardia severa basal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A Nova Era da Asma (GINA): As diretrizes mundiais mais recentes aboliram o Salbutamol sozinho para resgate de asma. O Ouro agora é a estratégia MART: O paciente usa o mesmo inalador (Budesonida + Formoterol) para manutenção diária e para resgate na hora da falta de ar, recebendo broncodilatação rápida e tratamento da inflamação simultaneamente.', es: 'La Nueva Era del Asma (GINA): Las directrices mundiales abolieron el Salbutamol solo para rescate de asma. El Oro ahora es la estrategia MART: El paciente usa el mismo inhalador (Budesonida + Formoterol) para mantenimiento y para rescate, recibiendo broncodilatación rápida y tratamiento de la inflamación simultáneamente.' }
      }
    }

  });
})();
