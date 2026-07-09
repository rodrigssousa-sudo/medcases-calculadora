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
    },

    /* ── INDACATEROL ────────────────────────────────────────────────────── */
    "indacaterol": {
      name: { pt: 'Indacaterol', es: 'Indacaterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Tratamento de manutenção diária da Doença Pulmonar Obstrutiva Crônica (DPOC) moderada a grave'],
        es: ['Tratamiento de mantenimiento diario de la Enfermedad Pulmonar Obstructiva Crónica (EPOC) moderada a grave']
      },
      commercialNames: { br: ['Onbrez', 'Ultibro (Assoc)'], ar: ['Onbrez'] },
      presentation: { pt: ['Cápsulas para inalação (pó seco) 150 mcg e 300 mcg'], es: ['Cápsulas para inhalación (polvo seco) 150 mcg y 300 mcg'] },
      mechanism: {
        pt: 'Estimulador Beta-2 Adrenérgico de última geração. A sua molécula é desenhada para se acoplar firmemente aos "micro-bolsões" de gordura da membrana celular do brônquio, liberando estímulo contínuo e ininterrupto por exatas 24 horas. Diferente dos LABAs antigos (12h), ele exige apenas uma única tomada diária para manter o pulmão do DPOC dilatado o dia todo.',
        es: 'Estimulador Beta-2 Adrenérgico de última generación. Su molécula está diseñada para acoplarse firmemente a los "micro-bolsillos" de grasa de la membrana celular del bronquio, liberando estímulo continuo e ininterrumpido por exactas 24 horas. A diferencia de los LABAs antiguos (12h), exige una única toma diaria para mantener el pulmón dilatado todo el día.'
      },
      dose: {
        adult: {
          pt: '1 inalação (150 mcg ou 300 mcg) UMA VEZ ao dia, sempre no mesmo horário.',
          es: '1 inhalación (150 mcg o 300 mcg) UNA VEZ al día, siempre en el mismo horario.'
        },
        pediatric: {
          pt: 'Contraindicado (Não estudado e sem indicação em pediatria).',
          es: 'Contraindicado (No estudiado y sin indicación en pediatría).'
        }
      },
      administration: { pt: ['Inalação estrita por dispositivo próprio (Breezhaler). As cápsulas JAMAIS devem ser engolidas.', 'Não serve como medicação de alívio rápido.'], es: ['Inhalación estricta por dispositivo propio (Breezhaler). Las cápsulas JAMÁS deben ser tragadas.', 'No sirve como medicación de alivio rápido.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste para cirrose leve a moderada.', es: 'Sin ajuste para cirrosis leve a moderada.' } },
      commonAdverseEffects: { pt: ['Tosse reflexa imediata após a inalação (muito comum, dura alguns segundos)', 'Nasofaringite'], es: ['Tos refleja inmediata tras la inhalación (muy común, dura unos segundos)', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal severo (raro)', 'Hipocalemia isolada'], es: ['Broncoespasmo paradójico severo (raro)', 'Hipopotasemia aislada'] },
      contraindications: {
        absolute: { pt: ['Tratamento de ASMA em monoterapia (Risco de exacerbação fatal sem corticoide)', 'Tratamento de episódios agudos de asfixia/broncoespasmo'], es: ['Tratamiento de ASMA en monoterapia (Riesgo de exacerbación fatal sin corticoide)', 'Tratamiento de episodios agudos de asfixia/broncoespasmo'] },
        relative: { pt: ['Pacientes com arritmias ventriculares não controladas'], es: ['Pacientes con arritmias ventriculares no controladas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O Indacaterol NÃO ESTÁ APROVADO PARA ASMA se usado sozinho. Na asma, o problema é a inflamação. Um dilatador de 24h sem corticoide oculta o fechamento progressivo do pulmão e leva o asmático à asfixia irreversível.', es: 'El Indacaterol NO ESTÁ APROBADO PARA ASMA si se usa solo. En el asma, el problema es la inflamación. Un dilatador de 24h sin corticoide oculta el cierre progresivo del pulmón y lleva al asmático a la asfixia.' }
      }
    },

    /* ── OLODATEROL ─────────────────────────────────────────────────────── */
    "olodaterol": {
      name: { pt: 'Olodaterol', es: 'Olodaterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Tratamento de manutenção de longo prazo e 1x ao dia da DPOC'],
        es: ['Tratamiento de mantenimiento a largo plazo y 1 vez al día de la EPOC']
      },
      commercialNames: { br: ['Striverdi', 'Spiolto (Assoc com Tiotrópio)'], ar: ['Striverdi'] },
      presentation: { pt: ['Solução inalante (Dispositivo Respimat) liberando 2,5 mcg por dose'], es: ['Solución inhalante (Dispositivo Respimat) liberando 2,5 mcg por dosis'] },
      mechanism: {
        pt: 'Mecanismo análogo ao do indacaterol, com altíssima seletividade (quase exclusiva) para os receptores Beta-2 pulmonares. Age garantindo uma janela de broncodilatação contínua de 24 horas, otimizando o esvaziamento pulmonar e reduzindo a hiperinsuflação (o aprisionamento de ar que causa o "peito de pombo" no DPOC).',
        es: 'Mecanismo análogo al del indacaterol, con altísima selectividad (casi exclusiva) para los receptores Beta-2 pulmonares. Actúa garantizando una ventana de broncodilatación continua de 24 horas, optimizando el vaciamiento pulmonar y reduciendo la hiperinsuflación (el atrapamiento de aire del EPOC).'
      },
      dose: {
        adult: {
          pt: '2 inalações (jatos de 2,5 mcg, total 5 mcg) consecutivas UMA VEZ ao dia, no mesmo horário.',
          es: '2 inhalaciones (puffs de 2,5 mcg, total 5 mcg) consecutivas UNA VEZ al día, en el mismo horario.'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Dispositivo Respimat: Libera uma "névoa suave" de longa duração, não exigindo força inspiratória extrema do paciente idoso (vantagem sobre os pós secos).'], es: ['Dispositivo Respimat: Libera una "niebla suave" de larga duración, no exigiendo fuerza inspiratoria extrema del paciente anciano (ventaja sobre los polvos secos).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose.', es: 'No requiere ajuste de dosis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste de dose em falência leve a moderada.', es: 'No requiere ajuste de dosis en falla leve a moderada.' } },
      commonAdverseEffects: { pt: ['Nasofaringite (resfriado comum)', 'Tontura e rash cutâneo leve'], es: ['Nasofaringitis (resfriado común)', 'Mareo y rash cutáneo leve'] },
      dangerousAdverseEffects: { pt: ['Risco cardiovascular isquêmico (se dose máxima ultrapassada acidentalmente)'], es: ['Riesgo cardiovascular isquémico (si dosis máxima superada accidentalmente)'] },
      contraindications: {
        absolute: { pt: ['Tratamento de exacerbação aguda da asma/DPOC (não serve para resgate)'], es: ['Tratamiento de exacerbación aguda del asma/EPOC (no sirve para rescate)'] },
        relative: { pt: ['Tireotoxicose ou hipertensão maligna'], es: ['Tirotoxicosis o hipertensión maligna'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Cuidado na troca de dispositivos: Pacientes idosos frequentemente não conseguem girar, destravar ou aspirar inaladores modernos. Certifique-se de que o paciente entende o manuseio da "névoa" do Respimat, sob pena de não receber nenhuma medicação.', es: 'Cuidado en el cambio de dispositivos: Los pacientes ancianos frecuentemente no logran girar, destrabar o aspirar inhaladores modernos. Asegúrese de que el paciente entienda el manejo del Respimat, so pena de no recibir ninguna medicación.' }
      }
    },

    /* ── VILANTEROL ─────────────────────────────────────────────────────── */
    "vilanterol": {
      name: { pt: 'Vilanterol', es: 'Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Agonista Beta-2 Adrenérgico de Ultra Longa Duração (Ultra-LABA)', es: 'Agonista Beta-2 Adrenérgico de Ultra Larga Duración (Ultra-LABA)' },
      indications: {
        pt: ['Manutenção de asma e DPOC (EXCLUSIVAMENTE disponível em associação com Fluticasona ou Umeclidínio)'],
        es: ['Mantenimiento de asma y EPOC (EXCLUSIVAMENTE disponible en asociación con Fluticasona o Umeclidinio)']
      },
      commercialNames: { br: ['Relvar (Assoc)', 'Trelegy (Assoc Tripla)'], ar: ['Relvar'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Ellipta), geralmente liberando 22 mcg de Vilanterol por dose'], es: ['Polvo inhalatorio (Dispositivo Ellipta), generalmente liberando 22 mcg de Vilanterol por dosis'] },
      mechanism: {
        pt: 'Ultra-LABA altamente potente (24h de ação). O grande diferencial do Vilanterol é que a indústria não o vende isolado; ele é sempre formulado em canetas prontas associado a corticoides inalatórios (fluticasona) para asma, ou anticolinérgicos para DPOC. Isso "blinda" o paciente contra o erro médico/risco fatal de usar LABAs sozinhos.',
        es: 'Ultra-LABA altamente potente (24h de acción). El gran diferencial del Vilanterol es que la industria no lo vende aislado; siempre está formulado en plumas listas asociado a corticoides inhalatorios (fluticasona) para asma. Esto "blinda" al paciente contra el error de usar LABAs solos.'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia (O dispositivo Ellipta abre a tampa, estala, o paciente aspira e fecha).',
          es: '1 inhalación UNA VEZ al día (El dispositivo Ellipta abre la tapa, hace clic, el paciente aspira y cierra).'
        },
        pediatric: {
          pt: 'Associado a Fluticasona para asma pode ser usado em adolescentes > 12 anos.',
          es: 'Asociado a Fluticasona para asma puede ser usado en adolescentes > 12 años.'
        }
      },
      administration: { pt: ['Uso inalatório estrito diário. Enxaguar a boca abundantemente e gargarejar após o uso (devido à fluticasona presente no aparelho).'], es: ['Uso inhalatorio estricto diario. Enjuagar la boca abundantemente y hacer gárgaras tras el uso (debido a la fluticasona presente en el aparato).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática moderada a grave, as formulações associadas de Vilanterol devem ser acompanhadas de perto, limitando a dose do componente corticoide.', es: 'En insuficiencia hepática moderada a grave, las formulaciones asociadas deben ser seguidas de cerca, limitando la dosis del corticoide.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea (pelo corticoide oculto na associação)', 'Disfonia (rouquidão)', 'Cefaleia'], es: ['Candidiasis orofaríngea (por el corticoide oculto en la asociación)', 'Disfonía (ronquera)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Pneumonia grave adquirida na comunidade (Maior risco com o uso contínuo de formulações ICS+LABA no paciente com DPOC avançada)'], es: ['Neumonía grave adquirida en la comunidad (Mayor riesgo con el uso continuo de formulaciones ICS+LABA en el paciente con EPOC avanzada)'] },
      contraindications: {
        absolute: { pt: ['Status Asthmaticus e asfixia aguda agudizada'], es: ['Status Asthmaticus y asfixia aguda agudizada'] },
        relative: { pt: ['Tuberculose pulmonar ativa ou não tratada'], es: ['Tuberculosis pulmonar activa o no tratada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Comodidade vs Eficácia: O dispositivo Ellipta de uso único diário salvou a adesão dos pacientes com DPOC. Se o seu paciente asmático abandona as bombinhas porque "tem que usar várias vezes ao dia", trocar para Vilanterol+Fluticasona (1x/dia) reverte o quadro maravilhosamente.', es: 'Comodidad vs Eficacia: El dispositivo Ellipta de uso único diario salvó la adhesión de los pacientes con EPOC. Si su paciente asmático abandona los inhaladores porque "tiene que usar varias veces", cambiar a Vilanterol+Fluticasona (1x/día) revierte el cuadro maravillosamente.' }
      }
    },

    /* ── BROMETO DE IPRATRÓPIO (ATROVENT) ───────────────────────────────── */
    "ipratropio": {
      name: { pt: 'Brometo de Ipratrópio', es: 'Bromuro de Ipratropio' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Curta Duração (SAMA) / Anticolinérgico', es: 'Antagonista Muscarínico de Corta Duración (SAMA) / Anticolinérgico' },
      indications: {
        pt: ['Resgate e Alívio da Asma Aguda Severa no Pronto-Socorro (Associado OBRIGATORIAMENTE ao Salbutamol/Fenoterol)', 'Resgate de exacerbação de DPOC', 'Rinorreia (Coriza líquida excessiva) em sprays nasais'],
        es: ['Rescate y Alivio del Asma Aguda Severa en Urgencias (Asociado OBLIGATORIAMENTE al Salbutamol/Fenoterol)', 'Rescate de exacerbación de EPOC', 'Rinorrea (Coriza líquida excesiva) en sprays nasales']
      },
      commercialNames: { br: ['Atrovent'], ar: ['Atrovent'] },
      presentation: { pt: ['Solução gotas para inalação 0,25 mg/mL', 'Spray Inalatório 20 mcg/dose'], es: ['Solución gotas para inhalación 0,25 mg/mL', 'Spray Inhalatorio 20 mcg/dosis'] },
      mechanism: {
        pt: 'Muda a chave de Beta para Muscarínico. O pulmão tem receptores M3 controlados pelo nervo vago (parassimpático) que mandam os brônquios apertarem e secretarem muco. O Ipratrópio bloqueia esses receptores. O nervo vago "desliga", o brônquio relaxa e o pulmão para de jorrar catarro. Início de ação em 15 minutos, duração de 4 a 6 horas.',
        es: 'Cambia la llave de Beta a Muscarínico. El pulmón tiene receptores M3 controlados por el nervio vago que mandan a los bronquios a apretarse y secretar moco. El Ipratropio bloquea esos receptores. El nervio vago "se apaga", el bronquio se relaja y el pulmón deja de chorrear flema. Inicio de acción en 15 minutos, duración de 4 a 6 horas.'
      },
      dose: {
        adult: {
          pt: 'Crise/Nebulização: 40 gotas (0,5 mg) junto com o broncodilatador, a cada 20 min no PS, depois a cada 6h. Spray: 2 jatos a cada 6 horas.',
          es: 'Crisis/Nebulización: 40 gotas (0,5 mg) junto con el broncodilatador, cada 20 min en Urgencias, luego cada 6h. Spray: 2 puffs cada 6 horas.'
        },
        pediatric: {
          pt: 'Nebulização na crise: Lactentes (10 gotas), Crianças (20 gotas) junto com a medicação beta-2 a cada 20 minutos.',
          es: 'Nebulización en crisis: Lactantes (10 gotas), Niños (20 gotas) junto con la medicación beta-2 cada 20 minutos.'
        }
      },
      administration: { pt: ['Pode (e deve) ser misturado no mesmo copinho do nebulizador com Salbutamol ou Fenoterol + Soro Fisiológico na sala de emergência.'], es: ['Puede (y debe) ser mezclado en el mismo vasito del nebulizador con Salbutamol o Fenoterol + Suero Fisiológico en la sala de emergencias.'] },
      renalAdjustment: { required: false, message: { pt: 'Absorção sistêmica nula ou mínima.', es: 'Absorción sistémica nula o mínima.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ação puramente local/tópica.', es: 'Acción puramente local/tópica.' } },
      commonAdverseEffects: { pt: ['Boca muito seca (xerostomia)', 'Gosto amargo', 'Tosse irritativa'], es: ['Boca muy seca (xerostomía)', 'Sabor amargo', 'Tos irritativa'] },
      dangerousAdverseEffects: { pt: ['Crise de Glaucoma Agudo de Ângulo Fechado (Se a névoa escapar da máscara e entrar no olho)', 'Retenção urinária aguda no paciente com próstata aumentada'], es: ['Crisis de Glaucoma Agudo de Ángulo Cerrado (Si la niebla escapa de la máscara y entra al ojo)', 'Retención urinaria aguda en el paciente con próstata aumentada'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave à atropina ou seus derivados'], es: ['Hipersensibilidad grave a la atropina o sus derivados'] },
        relative: { pt: ['Glaucoma de ângulo estreito instável', 'Hipertrofia prostática severa sem sonda (vai travar a urina se houver absorção)'], es: ['Glaucoma de ángulo estrecho inestable', 'Hipertrofia prostática severa sin sonda (va a trabar la orina si hay absorción)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'MÁSCARA VEDADA: A crise de Glaucoma Agudo causada pelo Atrovent na emergência é um erro iatrogênico bizarro. Ocorre porque a máscara de nebulização fica "frouxa" no idoso, a fumaça de atrovent escapa para cima e atinge diretamente os olhos, paralisando a pupila e aumentando a pressão do olho até a cegueira. A máscara deve estar APERTADA no rosto.', es: 'MÁSCARA SELLADA: La crisis de Glaucoma Agudo causada por Atrovent es un error iatrogénico bizarro. Ocurre porque la máscara de nebulización queda "suelta" en el anciano, el humo escapa y golpea los ojos, paralizando la pupila y aumentando la presión del ojo hasta la ceguera.' }
      }
    },

    /* ── BROMETO DE TIOTRÓPIO (SPIRIVA) ─────────────────────────────────── */
    "tiotropio": {
      name: { pt: 'Brometo de Tiotrópio', es: 'Bromuro de Tiotropio' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Droga de Ouro de MANUTENÇÃO para Doença Pulmonar Obstrutiva Crônica (DPOC)', 'Manutenção de Asma grave e refratária de base (step 4 e 5)'],
        es: ['Droga de Oro de MANTENIMIENTO para Enfermedad Pulmonar Obstructiva Crónica (EPOC)', 'Mantenimiento de Asma grave y refractaria de base (step 4 y 5)']
      },
      commercialNames: { br: ['Spiriva Respimat', 'Spiriva HandiHaler'], ar: ['Spiriva'] },
      presentation: { pt: ['Cápsulas inalatórias (HandiHaler) 18 mcg', 'Solução Inalante (Respimat) 2,5 mcg/dose'], es: ['Cápsulas inhalatorias (HandiHaler) 18 mcg', 'Solución Inhalante (Respimat) 2,5 mcg/dosis'] },
      mechanism: {
        pt: 'Diferente do Ipratrópio, que bloqueia todos os receptores muscarínicos rapidamente, o Tiotrópio tem seletividade cinética gigantesca para o receptor M3. Ele "morde" o receptor M3 e demora MAIS DE 24 HORAS para soltar. Isso mantém os brônquios do DPOC permanentemente relaxados e sem excesso de muco com apenas uma inalação matinal.',
        es: 'A diferencia del Ipratropio, que bloquea todos los receptores rápidamente, el Tiotropio tiene selectividad cinética gigantesca para el receptor M3. Él "muerde" el receptor M3 y tarda MÁS DE 24 HORAS en soltar. Esto mantiene los bronquios del EPOC permanentemente relajados y sin exceso de moco con solo una inhalación matinal.'
      },
      dose: {
        adult: {
          pt: 'Pó Seco (Cápsulas 18 mcg): Inalar 1 cápsula UMA VEZ ao dia. Solução (Respimat 2,5 mcg): 2 jatos seguidos UMA VEZ ao dia.',
          es: 'Polvo Seco (Cápsulas 18 mcg): Inhalar 1 cápsula UNA VEZ al día. Solución (Respimat 2,5 mcg): 2 puffs seguidos UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Não é rotina. Em casos muito graves de asma a partir de 6 anos: 2 inalações do Respimat (5 mcg total) 1x ao dia off-label ou por especialistas.',
          es: 'No es rutina. En casos muy graves de asma a partir de 6 años: 2 inhalaciones del Respimat (5 mcg total) 1x al día por especialistas.'
        }
      },
      administration: { pt: ['O paciente DEVE ser instruído a NÃO engolir a cápsula (HandiHaler). A cápsula vai dentro do aparelho furador e é aspirada.', 'Inalação lenta e profunda no Handihaler, ou lenta e normal no Respimat.'], es: ['El paciente DEBE ser instruido a NO tragar la cápsula (HandiHaler). La cápsula va dentro del aparato perforador y es aspirada.', 'Inhalación lenta y profunda en el Handihaler, o lenta y normal en el Respimat.'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração renal (74%), porém, como a absorção sistêmica é mínima e o uso é tópico inalatório, não há recomendação de redução de dose na falência renal.', es: 'Depuración renal (74%), pero, como la absorción sistémica es mínima y el uso es tópico, no hay recomendación de reducción de dosis en falla renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Nenhum ajuste necessário.', es: 'Ningún ajuste necesario.' } },
      commonAdverseEffects: { pt: ['Boca seca crônica (efeito adverso #1, ocorre em 15% dos usuários e geralmente causa abandono)', 'Prisão de ventre (constipação leve)', 'Cefaleia'], es: ['Boca seca crónica (efecto adverso #1, ocurre en 15% de los usuarios y causa abandono)', 'Estreñimiento (constipación leve)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Obstrução urinária grave aguda em idosos prostáticos', 'Piora aguda de glaucoma preexistente'], es: ['Obstrucción urinaria grave aguda en ancianos prostáticos', 'Empeoramiento agudo de glaucoma preexistente'] },
      contraindications: {
        absolute: { pt: ['Tratamento inicial de resgate na crise aguda de broncoespasmo (demora para agir e não tira do sufocamento).'], es: ['Tratamiento inicial de rescate en la crisis aguda de broncoespasmo (tarda en actuar y no saca del sofocamiento).'] },
        relative: { pt: ['Uso associado com outros anticolinérgicos orais para bexiga hiperativa (oxibutinina, tolterodina) por somação de retenção urinária.'], es: ['Uso asociado con otros anticolinérgicos orales para vejiga hiperactiva (oxibutinina, tolterodina) por suma de retención urinaria.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O SALVADOR DO DPOC: Enquanto os asmáticos dependem da vida e da morte de Corticoides, os pacientes com DPOC (fumantes graves crônicos) não respondem bem aos corticoides. O Tiotrópio (LAMA) é a principal droga capaz de abrir o brônquio cicatrizado do fumante, devendo ser a base do tratamento do enfisema.', es: 'EL SALVADOR DEL EPOC: Mientras los asmáticos dependen de los Corticoides, los pacientes con EPOC (fumadores crónicos) no responden bien a los corticoides. El Tiotropio (LAMA) es la principal droga capaz de abrir el bronquio cicatrizado del fumador, debiendo ser la base del tratamiento del enfisema.' }
      }
    },

    /* ── ACLIDÍNIO ──────────────────────────────────────────────────────── */
    "aclidinio": {
      name: { pt: 'Aclidínio (Brometo de Aclidínio)', es: 'Aclidinio (Bromuro de Aclidinio)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Tratamento de manutenção sintomática da Doença Pulmonar Obstrutiva Crônica (DPOC)'],
        es: ['Tratamiento de mantenimiento sintomático de la Enfermedad Pulmonar Obstructiva Crónica (EPOC)']
      },
      commercialNames: { br: ['Bretaris Genuair'], ar: ['Bretaris'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Genuair) 400 mcg/dose'], es: ['Polvo inhalatorio (Dispositivo Genuair) 400 mcg/dosis'] },
      mechanism: {
        pt: 'Liga-se de forma competitiva e reversível aos receptores muscarínicos M3 no músculo liso brônquico. Seu grande diferencial: Diferente do Tiotrópio (que dura 24h), o Aclidínio dura cerca de 12h e é rapidamente hidrolisado no plasma humano. Isso significa que, se a droga for engolida ou cair no sangue, ela é destruída em minutos, gerando risco QUASE ZERO de efeitos colaterais sistêmicos (como boca seca intensa e retenção urinária).',
        es: 'Se une de forma competitiva y reversible a los receptores muscarínicos M3 en el músculo liso bronquial. Su gran diferencial: A diferencia del Tiotropio, el Aclidinio dura unas 12h y es rápidamente hidrolizado en el plasma humano. Si la droga es tragada o cae en la sangre, se destruye en minutos, generando riesgo CASI CERO de efectos colaterales sistémicos.'
      },
      dose: {
        adult: {
          pt: '1 inalação de 400 mcg a cada 12 horas (Diferente da maioria dos LAMAs modernos que são 1x ao dia, este exige 2 tomadas).',
          es: '1 inhalación de 400 mcg cada 12 horas (A diferencia de la mayoría de los LAMAs modernos que son 1x al día, este exige 2 tomas).'
        },
        pediatric: {
          pt: 'Não indicado para menores de 18 anos.',
          es: 'No indicado para menores de 18 años.'
        }
      },
      administration: { pt: ['Inalação via dispositivo Genuair (possui um "clique" sonoro e um visor de cor que confirma se o paciente inalou corretamente a dose).'], es: ['Inhalación vía dispositivo Genuair (posee un "clic" sonoro y un visor de color que confirma si el paciente inhaló correctamente la dosis).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em insuficiência renal.', es: 'No requiere ajuste en insuficiencia renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste (metabolismo puramente hidrolítico plasmático).', es: 'No requiere ajuste (metabolismo puramente hidrolítico plasmático).' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Tosse irritativa pós-inalação', 'Boca seca (muito mais leve que o tiotrópio)'], es: ['Cefalea', 'Tos irritativa posinhalación', 'Boca seca (mucho más leve que el tiotropio)'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal (raro)'], es: ['Broncoespasmo paradójico (raro)'] },
      contraindications: {
        absolute: { pt: ['Tratamento de Asma', 'Episódios agudos de broncoespasmo'], es: ['Tratamiento de Asma', 'Episodios agudos de broncoespasmo'] },
        relative: { pt: ['Glaucoma de ângulo estreito instável'], es: ['Glaucoma de ángulo estrecho inestable'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'É a droga de escolha (LAMA) para o paciente idoso com DPOC que sofre de Hiperplasia Prostática Benigna (HPB) grave, pois o risco de causar retenção urinária obstrutiva é virtualmente ausente se comparado ao Tiotrópio.', es: 'Es la droga de elección (LAMA) para el paciente anciano con EPOC que sufre de Hiperplasia Prostática Benigna (HPB) grave, pues el riesgo de causar retención urinaria obstructiva es virtualmente ausente en comparación al Tiotropio.' }
      }
    },

    /* ── GLICOPIRRÔNIO ──────────────────────────────────────────────────── */
    "glicopirronio": {
      name: { pt: 'Glicopirrônio (Brometo de)', es: 'Glicopirronio (Bromuro de)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Manutenção em DPOC', 'Pré-medicação anestésica (via injetável) para secar secreções', 'Sialorreia (excesso de baba) severa em doenças neurológicas (off-label)'],
        es: ['Mantenimiento en EPOC', 'Premedicación anestésica (vía inyectable) para secar secreciones', 'Sialorrea (exceso de baba) severa en enfermedades neurológicas (off-label)']
      },
      commercialNames: { br: ['Seebri', 'Ultibro (Assoc)'], ar: ['Seebri'] },
      presentation: { pt: ['Cápsulas inalatórias 50 mcg', 'Ampolas injetáveis 0,2 mg/mL (uso anestésico)'], es: ['Cápsulas inhalatorias 50 mcg', 'Ampollas inyectables 0,2 mg/mL (uso anestésico)'] },
      mechanism: {
        pt: 'Bloqueador muscarínico competitivo. No pulmão (inalatório), ele possui um início de ação extremamente rápido (5 minutos) em comparação ao tiotrópio, mas mantém o efeito de duração de 24 horas. Na via sistêmica (injetável), é usado pelo anestesista para bloquear os efeitos vagais (bradicardia) e "secar" completamente a boca e os brônquios do paciente antes de entubar.',
        es: 'Bloqueador muscarínico competitivo. En el pulmón (inhalatorio), posee un inicio de acción extremadamente rápido (5 minutos) en comparación al tiotropio, pero mantiene el efecto de duración de 24 horas. En la vía sistémica (inyectable), es usado por el anestesista para bloquear los efectos vagales y "secar" completamente la boca y los bronquios antes de entubar.'
      },
      dose: {
        adult: {
          pt: 'DPOC: 1 inalação de 50 mcg UMA VEZ ao dia. Controle de Secreção (SC/IV): 0,1 a 0,2 mg repetidos conforme necessário.',
          es: 'EPOC: 1 inhalación de 50 mcg UNA VEZ al día. Control de Secreción (SC/IV): 0,1 a 0,2 mg repetidos según necesidad.'
        },
        pediatric: {
          pt: 'Uso injetável/oral para controle de salivação em paralisia cerebral: 0,01 a 0,02 mg/kg.',
          es: 'Uso inyectable/oral para control de salivación en parálisis cerebral: 0,01 a 0,02 mg/kg.'
        }
      },
      administration: { pt: ['Inalação diária no mesmo horário via dispositivo (Breezhaler).'], es: ['Inhalación diaria en el mismo horario vía dispositivo (Breezhaler).'] },
      renalAdjustment: { required: true, message: { pt: 'Atenção: Diferente do Aclidínio, o Glicopirrônio sofre depuração renal agressiva. Pacientes com DRC grave (ClCr < 30) acumulam a droga e sofrem fortes efeitos anticolinérgicos colaterais.', es: 'Atención: A diferencia del Aclidinio, el Glicopirronio sufre depuración renal agresiva. Pacientes con ERC grave (ClCr < 30) acumulan la droga y sufren fuertes efectos anticolinérgicos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Infecções do trato urinário', 'Tosse'], es: ['Boca seca', 'Infecciones del tracto urinario', 'Tos'] },
      dangerousAdverseEffects: { pt: ['Retenção Urinária Obstrutiva aguda', 'Agravamento de Glaucoma de Ângulo Estreito', 'Taquicardia severa (via IV)'], es: ['Retención Urinaria Obstructiva aguda', 'Agravamiento de Glaucoma de Ángulo Estrecho', 'Taquicardia severa (vía IV)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida'], es: ['Hipersensibilidad conocida'] },
        relative: { pt: ['Cardiopatia isquêmica instável (via venosa)'], es: ['Cardiopatía isquémica inestable (vía venosa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DUPLA FUNÇÃO CLÍNICA: O Glicopirrônio é uma excelente arma na medicina paliativa. Aplicado debaixo da língua ou via SC no paciente terminal (Sororoca da Morte), ele seca a abundante secreção pulmonar em minutos, aliviando o ruído aterrorizante do fim de vida sem rebaixar o cérebro (pois não cruza a Barreira Hematoencefálica).', es: 'DOBLE FUNCIÓN CLÍNICA: El Glicopirronio es una excelente arma en medicina paliativa. Aplicado debajo de la lengua o vía SC en el paciente terminal (Estertor de Muerte), seca la abundante secreción pulmonar en minutos, aliviando el ruido sin deprimir el cerebro.' }
      }
    },

    /* ── UMECLIDÍNIO ────────────────────────────────────────────────────── */
    "umeclidinio": {
      name: { pt: 'Umeclidínio', es: 'Umeclidinio' },
      category: 'pneumologia',
      class: { pt: 'Antagonista Muscarínico de Longa Duração (LAMA)', es: 'Antagonista Muscarínico de Larga Duración (LAMA)' },
      indications: {
        pt: ['Tratamento de manutenção a longo prazo da DPOC', 'Asma de difícil controle (em terapia tripla)'],
        es: ['Tratamiento de mantenimiento a largo plazo de la EPOC', 'Asma de difícil control (en terapia triple)']
      },
      commercialNames: { br: ['Incruse', 'Anoro (Assoc)', 'Trelegy (Tripla)'], ar: ['Incruse'] },
      presentation: { pt: ['Pó inalatório (Dispositivo Ellipta) 62,5 mcg/dose'], es: ['Polvo inhalatorio (Dispositivo Ellipta) 62,5 mcg/dosis'] },
      mechanism: {
        pt: 'LAMA de última geração. Bloqueia os receptores muscarínicos M3 com alta afinidade e altíssima meia-vida de dissociação, mantendo as vias aéreas hiperinsufladas abertas por 24 horas. Geralmente comercializado em canetas de terapia dupla (com Vilanterol) ou terapia tripla (Fluticasona + Umeclidínio + Vilanterol), facilitando a adesão máxima ao unificar tudo num clique só.',
        es: 'LAMA de última generación. Bloquea los receptores muscarínicos M3 con alta afinidad y altísima vida media de disociación, manteniendo las vías aéreas hiperinsufladas abiertas por 24 horas. Generalmente comercializado en plumas de terapia doble o triple, facilitando la adhesión máxima al unificar todo en un solo clic.'
      },
      dose: {
        adult: {
          pt: '1 inalação de 62,5 mcg UMA VEZ ao dia.',
          es: '1 inhalación de 62,5 mcg UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Não recomendado (restrito a adultos).',
          es: 'No recomendado (restringido a adultos).'
        }
      },
      administration: { pt: ['Dispositivo Ellipta: Não exige coordenação entre apertar e inspirar (como os sprays antigos). O paciente apenas puxa o ar fortemente.'], es: ['Dispositivo Ellipta: No exige coordinación entre apretar e inspirar. El paciente solo aspira fuertemente el aire.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste (fármaco de eliminação predominantemente fecal/biliar).', es: 'Sin ajuste (fármaco de eliminación predominantemente fecal/biliar).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Nasofaringite', 'Infecção do trato respiratório superior', 'Taquicardia leve'], es: ['Nasofaringitis', 'Infección del tracto respiratorio superior', 'Taquicardia leve'] },
      dangerousAdverseEffects: { pt: ['Efeitos obstrutivos urinários graves (em superdosagem)', 'Fibrilação Atrial (relatos isolados em doentes graves)'], es: ['Efectos obstructivos urinarios graves (en sobredosis)', 'Fibrilación Auricular (relatos aislados en enfermos graves)'] },
      contraindications: {
        absolute: { pt: ['Crise aguda (não serve para broncoespasmo imediato)'], es: ['Crisis aguda (no sirve para broncoespasmo inmediato)'] },
        relative: { pt: ['Glaucoma', 'Alergia grave à proteína do leite (pois o pó inalatório contém lactose como excipiente veicular)'], es: ['Glaucoma', 'Alergia grave a la proteína de la leche (pues el polvo inhalatorio contiene lactosa como excipiente vehicular)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE ALERGIA: Se o paciente tiver anafilaxia ou alergia severa à PROTEÍNA DO LEITE DE VACA (APLV), os inaladores de pó seco (Ellipta, Diskus) podem deflagrar uma anafilaxia letal no paciente, pois a droga é micronizada sobre partículas de lactose láctea. Nesses pacientes, deve-se usar spray aerossol (HFA).', es: 'ALERTA DE ALERGIA: Si el paciente tiene anafilaxia o alergia severa a la PROTEÍNA DE LA LECHE DE VACA (APLV), los inhaladores de polvo seco pueden desencadenar una anafilaxia letal, pues la droga es micronizada sobre partículas de lactosa láctea. En estos pacientes, debe usarse spray aerosol (HFA).' }
      }
    },

    /* ── BECLOMETASONA ──────────────────────────────────────────────────── */
    "beclometasona": {
      name: { pt: 'Beclometasona (Dipropionato)', es: 'Beclometasona (Dipropionato)' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório (ICS)', es: 'Corticosteroide Inhalatorio (ICS)' },
      indications: {
        pt: ['Tratamento de base (manutenção) da ASMA brônquica em todos os degraus', 'Profilaxia de Rinite Alérgica (spray nasal)'],
        es: ['Tratamiento de base (mantenimiento) del ASMA bronquial en todos los escalones', 'Profilaxis de Rinitis Alérgica (spray nasal)']
      },
      commercialNames: { br: ['Clenil', 'Fostair (Assoc)'], ar: ['Beclometasona'] },
      presentation: { pt: ['Spray inalatório HFA 50, 200 e 250 mcg/dose', 'Spray Nasal 50 mcg/jato'], es: ['Spray inhalatorio HFA 50, 200 y 250 mcg/dosis', 'Spray Nasal 50 mcg/puff'] },
      mechanism: {
        pt: 'Anti-inflamatório esteroidal tópico. É um pró-fármaco ativado pelas enzimas do pulmão. Uma vez inalado, desliga a transcrição de citocinas inflamatórias, bloqueia a migração de eosinófilos e reduz o edema crônico da parede do brônquio. É o "extintor de incêndio" que apaga a inflamação basal da asma. Diferente do corticoide oral/venoso, a absorção para a corrente sanguínea é mínima, tornando o uso diário seguro por anos.',
        es: 'Antiinflamatorio esteroideo tópico. Es un profármaco activado por las enzimas del pulmón. Una vez inhalado, apaga la transcripción de citocinas inflamatorias, bloquea la migración de eosinófilos y reduce el edema crónico de la pared bronquial. A diferencia del corticoide oral/venoso, la absorción a la sangre es mínima, haciendo el uso diario seguro por años.'
      },
      dose: {
        adult: {
          pt: 'Asma (Inalatório): 200 a 800 mcg/dia (dividido em 2 doses).',
          es: 'Asma (Inhalatorio): 200 a 800 mcg/día (dividido en 2 dosis).'
        },
        pediatric: {
          pt: '100 a 400 mcg/dia (dividido em 2 doses).',
          es: '100 a 400 mcg/día (dividido en 2 dosis).'
        }
      },
      administration: { pt: ['MANDATÓRIO: O paciente DEVE lavar a boca, escovar os dentes ou gargarejar rigorosamente LOGO APÓS usar a bombinha. O pó que fica na garganta baixa a imunidade local e causa proliferação de fungos.', 'Usar espaçador aumenta em 40% a chegada da droga no pulmão e diminui o risco de candidíase.'], es: ['OBLIGATORIO: El paciente DEBE lavar la boca, cepillarse los dientes o hacer gárgaras rigurosamente JUSTO DESPUÉS de usar el inhalador.', 'Usar espaciador aumenta en 40% la llegada al pulmón.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em cirróticos apenas em doses maciças inalatórias prolongadas (risco de supressão adrenal leve).', es: 'Cuidado en cirróticos solo en dosis masivas inhalatorias prolongadas (riesgo de supresión adrenal leve).' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea (Sapinho)', 'Disfonia (Rouquidão persistente por miopatia das cordas vocais induzida pelo corticoide)', 'Tosse seca na aplicação'], es: ['Candidiasis orofaríngea (Muguet)', 'Disfonía (Ronquera persistente por miopatía de las cuerdas vocales inducida por el corticoide)', 'Tos seca en la aplicación'] },
      dangerousAdverseEffects: { pt: ['Supressão do Eixo Hipotálamo-Hipófise-Adrenal (em altas doses diárias prolongadas)', 'Retardo no crescimento estatural de crianças (discutível e milimétrico, mas monitorado)'], es: ['Supresión del Eje Hipotálamo-Hipófisis-Adrenal (en altas dosis diarias prolongadas)', 'Retraso en el crecimiento estatural de niños (discutible y milimétrico, pero monitoreado)'] },
      contraindications: {
        absolute: { pt: ['Tratamento agudo de crise asmática severa se usado isoladamente (pois demora 1 semana para fazer o efeito anti-inflamatório máximo).'], es: ['Tratamiento agudo de crisis asmática severa si se usa aisladamente (pues tarda 1 semana para hacer el efecto antiinflamatorio máximo).'] },
        relative: { pt: ['Infecções fúngicas ou tuberculosas ativas não tratadas no pulmão'], es: ['Infecciones fúngicas o tuberculosas activas no tratadas en el pulmón'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'MUDANÇA DE CONDUTA GINA: O asmático leve não usa mais "só salbutamol" na crise. Ele agora deve inalar a Beclometasona JUNTO com o Salbutamol na hora da falta de ar, provando que tratar a inflamação é mais vital que apenas abrir o brônquio temporariamente.', es: 'CAMBIO DE CONDUCTA GINA: El asmático leve ya no usa "solo salbutamol" en la crisis. Ahora debe inhalar Beclometasona JUNTO con Salbutamol en el momento de asfixia, probando que tratar la inflamación es más vital que solo abrir el bronquio.' }
      }
    },

    /* ── BUDESONIDA ─────────────────────────────────────────────────────── */
    "budesonida": {
      name: { pt: 'Budesonida', es: 'Budesonida' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório / Tópico', es: 'Corticosteroide Inhalatorio / Tópico' },
      indications: {
        pt: ['Asma brônquica crônica e exacerbações', 'Crupe Viral / Laringotraqueobronquite em Pediatria (Nebulização de resgate para inflamação de via aérea alta)', 'Rinite Alérgica (Nasal)', 'Doença de Crohn (Cápsulas orais)'],
        es: ['Asma bronquial crónica y exacerbaciones', 'Crup Viral / Laringotraqueobronquitis en Pediatría (Nebulización de rescate para inflamación de vía aérea alta)', 'Rinitis Alérgica (Nasal)', 'Enfermedad de Crohn (Cápsulas orales)']
      },
      commercialNames: { br: ['Busonid', 'Pulmicort', 'Alenia (Assoc)'], ar: ['Neumocort', 'Budesonide'] },
      presentation: { pt: ['Spray Inalatório 50 e 200 mcg/dose', 'Suspensão para nebulização (Gotas ou Flaconetes) 0,25 e 0,5 mg/mL', 'Cápsulas gastro-resistentes 3mg'], es: ['Spray Inhalatorio 50 y 200 mcg/dosis', 'Suspensión para nebulización 0,25 y 0,5 mg/mL', 'Cápsulas gastrorresistentes 3mg'] },
      mechanism: {
        pt: 'Potentíssimo anti-inflamatório local. O "Truque de Mestre" da Budesonida é que, mesmo se o paciente não lavar a boca e engolir o remédio, ele passa pelo fígado e sofre um Metabolismo de Primeira Passagem de 90%. O fígado destrói a droga engolida antes dela atingir o corpo inteiro. Isso garante que a Budesonida seja absurdamente potente no pulmão, mas virtualmente sem efeitos sistêmicos (não engorda, não causa diabetes).',
        es: 'Potentísimo antiinflamatorio local. El "Truco Maestro" de la Budesonida es que, incluso si el paciente no se lava la boca y traga el remedio, pasa por el hígado y sufre un Metabolismo de Primera Pasada del 90%. El hígado destruye la droga tragada antes de que alcance el cuerpo entero. Esto garantiza que sea absurdamente potente en el pulmón, pero sin efectos sistémicos.'
      },
      dose: {
        adult: {
          pt: 'Asma (Inalatório): 400 a 800 mcg/dia (dividido em 2x). Estratégia MART (junto c/ formoterol): Inalar em cada crise. Cápsula (Crohn): 9 mg/dia.',
          es: 'Asma (Inhalatorio): 400 a 800 mcg/día (dividido en 2x). Estrategia MART (junto c/ formoterol): Inhalar en cada crisis. Cápsula (Crohn): 9 mg/día.'
        },
        pediatric: {
          pt: 'Crupe (Estridor em bebês): 2 miligramas (Nebulização Maciça de Resgate no PS em dose única ou 2x de 1mg). Asma profilaxia: 100-200 mcg 2x/dia.',
          es: 'Crup (Estridor en bebés): 2 miligramos (Nebulización Masiva de Rescate en Urgencias en dosis única o 2x de 1mg). Asma profilaxis: 100-200 mcg 2x/día.'
        }
      },
      administration: { pt: ['As gotas/flaconetes para nebulização devem ser usadas com O2 e máscara. Pode demorar de 10 a 15 min para nebulizar todo o volume.', 'Obrigatório lavar o rosto do bebê após a nebulização, pois o corticoide que fica na pele da máscara afina e irrita o rosto da criança.'], es: ['Las gotas/viales para nebulización deben usarse con O2 y máscara. Puede tardar de 10 a 15 min en nebulizar.', 'Obligatorio lavar la cara del bebé tras la nebulización, pues el corticoide que queda en la piel de la máscara afina e irrita la cara del niño.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose hepática severa, aquele metabolismo de "90% destruído" falha, e a droga atinge o sangue do paciente com força de corticoide sistêmico.', es: 'En cirrosis hepática severa, ese metabolismo de "90% destruido" falla, y la droga alcanza la sangre del paciente con fuerza de corticoide sistémico.' } },
      commonAdverseEffects: { pt: ['Candidíase oral e Irritação da faringe', 'Rouquidão', 'Sangramento nasal (quando usado spray nasal)'], es: ['Candidiasis oral e Irritación de la faringe', 'Ronquera', 'Sangrado nasal (cuando se usa spray nasal)'] },
      dangerousAdverseEffects: { pt: ['Síndrome de Cushing Iatrogênica (apenas se houver superdosagem maciça crônica ou interação hepática)'], es: ['Síndrome de Cushing Iatrogénico (solo si hay sobredosis masiva crónica o interacción hepática)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave', 'Tuberculose pulmonar ativa não tratada'], es: ['Hipersensibilidad grave', 'Tuberculosis pulmonar activa no tratada'] },
        relative: { pt: ['Herpes simplex ocular'], es: ['Herpes simplex ocular'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SALVAÇÃO DA PEDIATRIA: Bebês com "Crupe" (Laringite Estridulosa) chegam de madrugada no PS tossindo feito "cachorro" e asfixiando por edema de traqueia. A nebulização em dose alta de Budesonida (2mg) reduz o inchaço quase como mágica, evitando a intubação na sala vermelha.', es: 'LA SALVACIÓN DE LA PEDIATRÍA: Bebés con "Crup" llegan de madrugada tosiendo como "perro" y asfixiándose por edema de tráquea. La nebulización en dosis alta de Budesonida (2mg) reduce la hinchazón casi como magia, evitando la intubación.' }
      }
    },

    /* ── FLUTICASONA ────────────────────────────────────────────────────── */
    "fluticasona": {
      name: { pt: 'Fluticasona (Propionato / Furoato)', es: 'Fluticasona (Propionato / Furoato)' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório / Nasal', es: 'Corticosteroide Inhalatorio / Nasal' },
      indications: {
        pt: ['Tratamento de manutenção profilática da Asma severa', 'Doença Pulmonar Obstrutiva Crônica (DPOC) em terapias combinadas', 'Rinite alérgica grave (uso nasal)'],
        es: ['Tratamiento de mantenimiento profiláctico del Asma severa', 'Enfermedad Pulmonar Obstructiva Crónica (EPOC) en terapias combinadas', 'Rinitis alérgica grave (uso nasal)']
      },
      commercialNames: { br: ['Flixotide', 'Seretide (Assoc)', 'Avamys'], ar: ['Flixotide', 'Seretide'] },
      presentation: { pt: ['Spray Inalatório HFA 50 e 250 mcg/dose', 'Pó Inalatório (Diskus) 50, 100 e 250 mcg', 'Spray Nasal'], es: ['Spray Inhalatorio HFA 50 y 250 mcg/dosis', 'Polvo Inhalatorio (Diskus) 50, 100 y 250 mcg', 'Spray Nasal'] },
      mechanism: {
        pt: 'Glicocorticoide sintético de potência anti-inflamatória altíssima (muito superior à beclometasona). Possui uma afinidade extrema pelos receptores de glicocorticoides no pulmão. Sua lipofilicidade faz com que ele "grude" no tecido pulmonar e fique agindo por longos períodos. O que é engolido sofre metabolismo de primeira passagem quase total (99%) no fígado, minimizando efeitos no resto do corpo.',
        es: 'Glucocorticoide sintético de potencia antiinflamatoria altísima. Posee una afinidad extrema por los receptores de glucocorticoides en el pulmón. Su lipofilicidad hace que se "pegue" al tejido pulmonar y actúe por largos períodos. Lo que se traga sufre metabolismo de primera pasada casi total (99%) en el hígado, minimizando efectos en el resto del cuerpo.'
      },
      dose: {
        adult: {
          pt: 'Asma: 100 a 500 mcg a cada 12 horas. (Geralmente prescrito em inaladores combinados com Salmeterol ou Vilanterol).',
          es: 'Asma: 100 a 500 mcg cada 12 horas. (Generalmente prescrito en inhaladores combinados con Salmeterol o Vilanterol).'
        },
        pediatric: {
          pt: '50 a 100 mcg a cada 12 horas (Acima de 4 anos).',
          es: '50 a 100 mcg cada 12 horas (Por encima de 4 años).'
        }
      },
      administration: { pt: ['Mandatório lavar a boca ou escovar os dentes imediatamente após o uso para não desenvolver fungos na orofaringe.'], es: ['Obligatorio lavar la boca o cepillarse los dientes inmediatamente después del uso para no desarrollar hongos en la orofaringe.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose severa, o remédio que é engolido não é destruído e cai no sangue, causando síndrome de Cushing metabólica iatrogênica.', es: 'En cirrosis severa, el remedio que se traga no es destruido y cae en la sangre, causando síndrome de Cushing metabólico iatrogénico.' } },
      commonAdverseEffects: { pt: ['Candidíase oral (incidência muito alta se não usar espaçador/lavar a boca)', 'Rouquidão (Miopatia vocal)'], es: ['Candidiasis oral (incidencia muy alta si no se usa espaciador/lavar la boca)', 'Ronquera (Miopatía vocal)'] },
      dangerousAdverseEffects: { pt: ['Pneumonia adquirida na comunidade (Em pacientes com DPOC avançada que usam altas doses diárias)', 'Supressão Adrenal aguda se interrompido abruptamente'], es: ['Neumonía adquirida en la comunidad (En pacientes con EPOC avanzada que usan altas dosis diarias)', 'Supresión Adrenal aguda si se interrumpe abruptamente'] },
      contraindications: {
        absolute: { pt: ['Tratamento de crise aguda de asma/broncoespasmo como droga isolada de alívio'], es: ['Tratamiento de crisis aguda de asma/broncoespasmo como droga aislada de alivio'] },
        relative: { pt: ['Infecção não controlada no trato respiratório'], es: ['Infección no controlada en el tracto respiratorio'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A fluticasona é o corticoide inalatório MAIS SUSCETÍVEL à interação medicamentosa letal com inibidores do HIV (Ritonavir) e antifúngicos (Itraconazol). O uso associado trava o fígado e inunda o corpo com corticoide em níveis tóxicos fulminantes.', es: 'La fluticasona es el corticoide inhalatorio MÁS SUSCEPTIBLE a la interacción medicamentosa letal con inhibidores del VIH (Ritonavir) y antifúngicos. El uso asociado traba el hígado e inunda el cuerpo con corticoide en niveles tóxicos.' }
      }
    },

    /* ── MOMETASONA ─────────────────────────────────────────────────────── */
    "mometasona": {
      name: { pt: 'Mometasona (Furoato de)', es: 'Mometasona (Furoato de)' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório / Tópico Nasal', es: 'Corticosteroide Inhalatorio / Tópico Nasal' },
      indications: {
        pt: ['Rinite Alérgica Perene e Sazonal', 'Pólipos Nasais', 'Asma persistente (profilaxia inalatória)'],
        es: ['Rinitis Alérgica Perenne y Estacional', 'Pólipos Nasales', 'Asma persistente (profilaxis inhalatoria)']
      },
      commercialNames: { br: ['Nasonex', 'Oximax (Assoc)'], ar: ['Nasonex'] },
      presentation: { pt: ['Spray Nasal Aquoso 50 mcg/dose', 'Pó Inalatório Oral 200 mcg/dose'], es: ['Spray Nasal Acuoso 50 mcg/dosis', 'Polvo Inhalatorio Oral 200 mcg/dosis'] },
      mechanism: {
        pt: 'Corticoide incrivelmente potente (um dos mais fortes do mercado tópico) com a vantagem brutal de ter uma biodisponibilidade sistêmica INDETECTÁVEL (< 0,1%). Ou seja, mesmo se o paciente usar na pele, no nariz ou no pulmão, praticamente NADA entra na corrente sanguínea. É a droga de escolha para tratamentos prolongados em crianças sem afetar a altura.',
        es: 'Corticoide increíblemente potente con la ventaja brutal de tener una biodisponibilidad sistémica INDETECTABLE (< 0,1%). O sea, incluso si el paciente lo usa en la piel, nariz o pulmón, prácticamente NADA entra en el torrente sanguíneo. Es la droga de elección para tratamientos prolongados en niños sin afectar la altura.'
      },
      dose: {
        adult: {
          pt: 'Rinite (Nasal): 2 jatos em cada narina 1x ao dia. Asma (Pulmonar): 200 a 400 mcg 1x ao dia (frequentemente à noite).',
          es: 'Rinitis (Nasal): 2 puffs en cada fosa nasal 1 vez al día. Asma (Pulmonar): 200 a 400 mcg 1 vez al día (frecuentemente a la noche).'
        },
        pediatric: {
          pt: 'Nasal (> 2 anos): 1 jato em cada narina 1x ao dia.',
          es: 'Nasal (> 2 años): 1 puff en cada fosa nasal 1 vez al día.'
        }
      },
      administration: { pt: ['No uso nasal, o jato deve ser direcionado para a LATERAL do nariz (parede externa) e não para o septo (meio), para evitar sangramentos e perfuração do septo.'], es: ['En el uso nasal, el chorro debe dirigirse hacia el LATERAL de la nariz (pared externa) y no hacia el tabique, para evitar sangrados y perforación del tabique.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica, sem ajuste.', es: 'Sin absorción sistémica, sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não atinge o fígado em níveis clínicos.', es: 'No alcanza el hígado en niveles clínicos.' } },
      commonAdverseEffects: { pt: ['Epistaxe (Sangramento nasal frequente no uso de spray mal aplicado)', 'Dor de cabeça e ardência nasal'], es: ['Epistaxis (Sangrado nasal frecuente en el uso de spray mal aplicado)', 'Dolor de cabeza y ardor nasal'] },
      dangerousAdverseEffects: { pt: ['Perfuração do septo nasal (uso crônico mal direcionado)', 'Ulceração mucosa'], es: ['Perforación del tabique nasal (uso crónico mal dirigido)', 'Ulceración mucosa'] },
      contraindications: {
        absolute: { pt: ['Trauma ou cirurgia nasal recente (até a cicatrização, pois os corticoides impedem a cicatrização da ferida)'], es: ['Trauma o cirugía nasal reciente (hasta la cicatrización, pues los corticoides impiden la cicatrización de la herida)'] },
        relative: { pt: ['Infecções ativas da mucosa nasal (Herpes simplex, fungos)'], es: ['Infecciones activas de la mucosa nasal (Herpes simplex, hongos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A "Rinite do Corticoide": Alerte os pais de que o spray nasal de Mometasona NÃO desentope o nariz na hora (como o Neosoro). É uma droga de efeito progressivo que pode demorar até 1 semana para surtir o efeito anti-inflamatório máximo.', es: 'Alerta a los padres que el spray nasal de Mometasona NO destapa la nariz en el momento. Es una droga de efecto progresivo que puede tardar hasta 1 semana en surtir el efecto máximo.' }
      }
    },

    /* ── CICLESONIDA ────────────────────────────────────────────────────── */
    "ciclesonida": {
      name: { pt: 'Ciclesonida', es: 'Ciclesonida' },
      category: 'pneumologia',
      class: { pt: 'Corticosteroide Inalatório (Pró-fármaco de Ativação Local)', es: 'Corticosteroide Inhalatorio (Profármaco de Activación Local)' },
      indications: {
        pt: ['Tratamento de manutenção da Asma persistente'],
        es: ['Tratamiento de mantenimiento del Asma persistente']
      },
      commercialNames: { br: ['Alvesco'], ar: ['Alvesco'] },
      presentation: { pt: ['Spray Inalatório HFA 80 e 160 mcg/dose'], es: ['Spray Inhalatorio HFA 80 y 160 mcg/dosis'] },
      mechanism: {
        pt: 'Uma obra-prima da farmacologia: É administrada inativa. Quando bate no fundo da garganta, continua inativa (risco QUASE ZERO de candidíase/sapinho oral). Ela SÓ É ATIVADA quando entra no pulmão e é cortada pelas "esterases", enzimas presentes no tecido pulmonar inflamado. Isso direciona 100% da força do corticoide para a via aérea doente e anula efeitos colaterais na orofaringe e no sangue.',
        es: 'Una obra maestra de la farmacología: Se administra inactiva. Cuando golpea el fondo de la garganta, sigue inactiva (riesgo CASI CERO de candidiasis oral). SOLO SE ACTIVA cuando entra al pulmón y es cortada por las esterasas, enzimas presentes en el tejido pulmonar inflamado. Esto dirige el 100% de la fuerza al área enferma.'
      },
      dose: {
        adult: {
          pt: '80 a 160 mcg inalado UMA VEZ ao dia (geralmente à noite) ou duas vezes ao dia em casos severos.',
          es: '80 a 160 mcg inhalado UNA VEZ al día (generalmente a la noche) o dos veces al día en casos severos.'
        },
        pediatric: {
          pt: 'Crianças de 4 a 11 anos: 80 mcg UMA VEZ ao dia.',
          es: 'Niños de 4 a 11 años: 80 mcg UNA VEZ al día.'
        }
      },
      administration: { pt: ['Administração via inalador pressurizado. Menor necessidade rigorosa de gargarejos pós-uso quando comparada a outros corticoides (embora a higiene oral continue sendo boa prática).'], es: ['Administración vía inhalador presurizado. Menor necesidad rigurosa de gárgaras posuso comparada a otros corticoides (aunque la higiene oral sigue siendo buena práctica).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      commonAdverseEffects: { pt: ['Tosse leve após uso', 'Disfonia (raríssima com ciclesonida, mas possível)'], es: ['Tos leve tras uso', 'Disfonía (rarísima con ciclesonida, pero posible)'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo paradoxal imediatamente após inalação'], es: ['Broncoespasmo paradójico inmediatamente tras inhalación'] },
      contraindications: {
        absolute: { pt: ['Uso no resgate do broncoespasmo agudo', 'Hipersensibilidade grave'], es: ['Uso en el rescate del broncoespasmo agudo', 'Hipersensibilidad grave'] },
        relative: { pt: ['Tuberculose ou infecção pulmonar sistêmica grave sem terapia específica'], es: ['Tuberculosis o infección pulmonar sistémica grave sin terapia específica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O Inalador Mais Limpo: Excelente para cantores, professores e pacientes com rouquidão crônica ou aftas de repetição induzidas por outros corticoides (budesonida/fluticasona), pois preserva completamente as cordas vocais.', es: 'El Inhalador Más Limpio: Excelente para cantantes, profesores y pacientes con ronquera crónica o aftas de repetición inducidas por otros corticoides, pues preserva completamente las cuerdas vocales.' }
      }
    },

    /* ── MONTELUCASTE ───────────────────────────────────────────────────── */
    "montelucaste": {
      name: { pt: 'Montelucaste (de Sódio)', es: 'Montelukast (de Sodio)' },
      category: 'pneumologia',
      class: { pt: 'Antagonista dos Receptores de Leucotrienos (LTRA)', es: 'Antagonista de los Receptores de Leucotrienos (LTRA)' },
      indications: {
        pt: ['Prevenção e controle da Asma em longo prazo (Alternativa ou coadjuvante aos corticoides)', 'Prevenção de asma induzida pelo exercício', 'Rinite Alérgica (Perene e Sazonal)'],
        es: ['Prevención y control del Asma a largo plazo (Alternativa o coadyuvante a los corticoides)', 'Prevención de asma inducida por ejercicio', 'Rinitis Alérgica (Perenne y Estacional)']
      },
      commercialNames: { br: ['Singulair', 'Piemonte'], ar: ['Singulair'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg', 'Comprimidos mastigáveis 4 mg, 5 mg', 'Granulado oral 4 mg'], es: ['Comprimidos recubiertos 10 mg', 'Comprimidos masticables 4 mg, 5 mg', 'Granulado oral 4 mg'] },
      mechanism: {
        pt: 'Diferente dos anti-histamínicos, o Montelucaste bloqueia o receptor CysLT1 no pulmão. Os leucotrienos são moléculas inflamatórias ferozes secretadas por mastócitos e eosinófilos que causam inchaço, produção de catarro espesso e fechamento do brônquio. O Montelucaste fecha a "porta" para essas moléculas. Efeito exclusivamente preventivo e não broncodilatador direto.',
        es: 'A diferencia de los antihistamínicos, el Montelukast bloquea el receptor CysLT1 en el pulmón. Los leucotrienos son moléculas inflamatorias feroces que causan hinchazón y producción de catarro. El Montelukast cierra la "puerta" a estas moléculas. Efecto exclusivamente preventivo y no broncodilatador directo.'
      },
      dose: {
        adult: {
          pt: '10 mg VO UMA VEZ ao dia (Sempre recomendado tomar à noite, perto de dormir).',
          es: '10 mg VO UNA VEZ al día (Siempre recomendado tomar a la noche, cerca de dormir).'
        },
        pediatric: {
          pt: '2 a 5 anos: 4 mg mastigável/granulado 1x à noite. 6 a 14 anos: 5 mg mastigável 1x à noite.',
          es: '2 a 5 años: 4 mg masticable/granulado 1x a la noche. 6 a 14 años: 5 mg masticable 1x a la noche.'
        }
      },
      administration: { pt: ['Deve ser tomado à noite para ter sua concentração máxima de bloqueio nas madrugadas (quando os leucotrienos mais atacam e a asma piora). O granulado pediátrico pode ser misturado na papinha fria (não misturar em líquidos quentes).'], es: ['Debe ser tomado a la noche para tener su concentración máxima en las madrugadas. El granulado pediátrico puede ser mezclado en papilla fría (no mezclar en líquidos calientes).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal (eliminação biliar/fecal).', es: 'Sin necesidad de ajuste renal (eliminación biliar/fecal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Seguro em insuficiência hepática leve a moderada.', es: 'Seguro en insuficiencia hepática leve a moderada.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Dor abdominal e Náuseas leves', 'Agitação e hiperatividade em crianças pequenas'], es: ['Cefalea', 'Dolor abdominal y Náuseas leves', 'Agitación e hiperactividad en niños pequeños'] },
      dangerousAdverseEffects: { pt: ['EVENTOS NEUROPSIQUIÁTRICOS (Depressão, Ideação suicida, pesadelos terríveis e terror noturno)', 'Síndrome de Churg-Strauss (Vasculite eosinofílica sistêmica, rara)'], es: ['EVENTOS NEUROPSIQUIÁTRICOS (Depresión, Ideación suicida, pesadillas terribles y terror nocturno)', 'Síndrome de Churg-Strauss (Vasculitis eosinofílica sistémica, rara)'] },
      contraindications: {
        absolute: { pt: ['Reversão de broncoespasmo agudo (Não é droga de resgate!)'], es: ['Reversión de broncoespasmo agudo (¡No es droga de rescate!)'] },
        relative: { pt: ['Pacientes com transtornos psiquiátricos basais não controlados (Depressão severa, Transtorno Bipolar)'], es: ['Pacientes con trastornos psiquiátricos basales no controlados (Depresión severa, Trastorno Bipolar)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING DA FDA: O FDA publicou um alerta máximo exigindo que médicos avisem pacientes e pais sobre graves alterações de humor, alucinações, agressividade e comportamento suicida que podem surgir dias ou meses após iniciar o Montelucaste. Se a criança tiver pesadelos súbitos e terror noturno constante, suspenda a droga.', es: 'BLACK BOX WARNING DE LA FDA: La FDA publicó una alerta máxima exigiendo que los médicos avisen sobre graves alteraciones de humor, alucinaciones y comportamiento suicida que pueden surgir tras iniciar el Montelukast. Si el niño tiene pesadillas súbitas, suspenda la droga.' }
      }
    },

    /* ── ZAFIRLUCASTE ───────────────────────────────────────────────────── */
    "zafirlucaste": {
      name: { pt: 'Zafirlucaste', es: 'Zafirlukast' },
      category: 'pneumologia',
      class: { pt: 'Antagonista dos Receptores de Leucotrienos (LTRA)', es: 'Antagonista de los Receptores de Leucotrienos (LTRA)' },
      indications: {
        pt: ['Prevenção e Tratamento crônico da Asma (Pouco utilizado hoje em dia, quase integralmente substituído pelo Montelucaste)'],
        es: ['Prevención y Tratamiento crónico del Asma (Poco utilizado hoy en día, casi integralmente sustituido por Montelukast)']
      },
      commercialNames: { br: ['Accolate'], ar: ['Accolate'] },
      presentation: { pt: ['Comprimidos 20 mg'], es: ['Comprimidos 20 mg'] },
      mechanism: {
        pt: 'Possui o mesmo mecanismo do montelucaste (bloqueio do receptor CysLT1 no pulmão para inibir a asfixia imunológica causada pelos leucotrienos). No entanto, o Zafirlucaste possui graves desvantagens farmacocinéticas: precisa ser tomado 2 vezes ao dia, tem sua absorção esmagada pela comida e é um potente inibidor do citocromo p450 hepático.',
        es: 'Posee el mismo mecanismo del montelukast (bloqueo del receptor CysLT1). Sin embargo, el Zafirlukast posee graves desventajas farmacocinéticas: necesita ser tomado 2 veces al día, tiene su absorción aplastada por la comida y es un potente inhibidor del citocromo p450 hepático.'
      },
      dose: {
        adult: {
          pt: '20 mg VO a cada 12 horas (Dose máxima de 40 mg/dia).',
          es: '20 mg VO cada 12 horas (Dosis máxima de 40 mg/día).'
        },
        pediatric: {
          pt: '5 a 11 anos: 10 mg a cada 12 horas.',
          es: '5 a 11 años: 10 mg cada 12 horas.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Tomar de ESTÔMAGO VAZIO (pelo menos 1 hora antes ou 2 horas depois das refeições). A comida corta sua absorção pela metade.'], es: ['OBLIGATORIO: Tomar con ESTÓMAGO VACÍO (al menos 1 hora antes o 2 horas después de las comidas). La comida corta su absorción a la mitad.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com insuficiência hepática ou cirrose.', es: 'Contraindicado en pacientes con insuficiencia hepática o cirrosis.' } },
      commonAdverseEffects: { pt: ['Cefaleia marcante', 'Distúrbios gastrointestinais', 'Infecções respiratórias virais de repetição'], es: ['Cefalea marcada', 'Disturbios gastrointestinales', 'Infecciones respiratorias virales de repetición'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade idiossincrática letal (Falência hepática fulminante rara, exigindo dosagem regular de TGO/TGP)', 'Síndrome de Churg-Strauss'], es: ['Hepatotoxicidad idiosincrásica letal (Falla hepática fulminante rara, exigiendo dosificación regular de AST/ALT)', 'Síndrome de Churg-Strauss'] },
      contraindications: {
        absolute: { pt: ['Disfunção hepática ativa', 'Uso no ataque agudo da asma'], es: ['Disfunción hepática activa', 'Uso en el ataque agudo del asma'] },
        relative: { pt: ['Uso associado de Varfarina'], es: ['Uso asociado de Warfarina'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O FATOR DO FÍGADO: O Zafirlucaste "perdeu a guerra" das vendas para o Montelucaste exatamente pela comodidade. O Montelucaste não ataca o fígado e é dose única. Se prescrever Zafirlucaste, monitore o fígado do paciente no primeiro trimestre.', es: 'EL FACTOR DEL HÍGADO: El Zafirlukast "perdió la guerra" de ventas frente al Montelukast exactamente por la comodidad. El Montelukast no ataca el hígado y es dosis única.' }
      }
    },

    /* ── TEOFILINA ──────────────────────────────────────────────────────── */
    "teofilina": {
      name: { pt: 'Teofilina', es: 'Teofilina' },
      category: 'pneumologia',
      class: { pt: 'Broncodilatador Metilxantina', es: 'Broncodilatador Metilxantina' },
      indications: {
        pt: ['Asma crônica grave (como terapia adjuvante de 3ª linha)', 'Doença Pulmonar Obstrutiva Crônica (DPOC) refratária'],
        es: ['Asma crónica grave (como terapia adyuvante de 3ª línea)', 'Enfermedad Pulmonar Obstructiva Crónica (EPOC) refractaria']
      },
      commercialNames: { br: ['Talofilina', 'Teolong'], ar: ['Teofilina'] },
      presentation: { pt: ['Cápsulas/Comprimidos de liberação prolongada 100 mg, 200 mg, 300 mg', 'Xarope'], es: ['Cápsulas/Comprimidos de liberación prolongada 100 mg, 200 mg, 300 mg', 'Jarabe'] },
      mechanism: {
        pt: 'Ação dupla e complexa: Inibe a enzima Fosfodiesterase (PDE), causando acúmulo de AMPc e GMPc (o que gera relaxamento do brônquio). Simultaneamente, é um forte ANTAGONISTA dos receptores de Adenosina no corpo. Esse bloqueio da adenosina estimula violentamente o Sistema Nervoso Central (como uma super-dose de cafeína) e acelera o coração. A janela entre a dose que cura a asma e a dose que mata é minúscula.',
        es: 'Acción doble y compleja: Inhibe la enzima Fosfodiesterasa (PDE), causando acumulación de AMPc y GMPc (lo que genera relajación del bronquio). Simultáneamente, es un fuerte ANTAGONISTA de los receptores de Adenosina. Este bloqueo de la adenosina estimula violentamente el Sistema Nervioso Central y acelera el corazón. La ventana entre la dosis que cura y la que mata es minúscula.'
      },
      dose: {
        adult: {
          pt: 'Manutenção: 300 a 600 mg/dia divididos a cada 12 horas. (Exige exame de sangue constante "Teofilinemia", o nível deve ficar entre 10 e 15 mcg/mL).',
          es: 'Mantenimiento: 300 a 600 mg/día divididos cada 12 horas. (Exige examen de sangre constante "Teofilinemia", el nivel debe quedar entre 10 y 15 mcg/mL).'
        },
        pediatric: {
          pt: 'Acima de 1 ano: 10 a 16 mg/kg/dia divididos a cada 12h. (Maior risco de intoxicação infantil).',
          es: 'Por encima de 1 año: 10 a 16 mg/kg/día divididos cada 12h. (Mayor riesgo de intoxicación infantil).'
        }
      },
      administration: { pt: ['Comprimidos de liberação lenta não devem ser partidos ou mastigados.', 'Evitar consumo excessivo de café ou energéticos (potencializam a toxicidade).'], es: ['Comprimidos de liberación lenta no deben ser partidos o masticados.', 'Evitar consumo excesivo de café o energéticos (potencian la toxicidad).'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração hepática dominante.', es: 'Depuración hepática dominante.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Atenção máxima. Se o fígado falhar, a teofilina não é destruída e o paciente entra em convulsão. Reduzir dose na cirrose.', es: 'Atención máxima. Si el hígado falla, la teofilina no es destruida y el paciente entra en convulsión. Reducir dosis en cirrosis.' } },
      commonAdverseEffects: { pt: ['Náuseas severas e vômitos incontroláveis (sinal precoce de toxicidade)', 'Insônia e agitação extrema', 'Taquicardia'], es: ['Náuseas severas y vómitos incontrolables (signo precoz de toxicidad)', 'Insomnio y agitación extrema', 'Taquicardia'] },
      dangerousAdverseEffects: { pt: ['CONVULSÕES REFRATÁRIAS AO DIAZEPAM (Se nível sanguíneo > 20 mcg/mL)', 'Arritmias Ventriculares e Fibrilação'], es: ['CONVULSIONES REFRACTARIAS AL DIAZEPAM (Si nivel sanguíneo > 20 mcg/mL)', 'Arritmias Ventriculares y Fibrilación'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa severa', 'Arritmias não controladas'], es: ['Úlcera péptica activa severa', 'Arritmias no controladas'] },
        relative: { pt: ['Epilepsia preexistente'], es: ['Epilepsia preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A DROGA DE JANELA ESTREITA: A teofilina foi quase abandonada pela medicina moderna pelo seu risco. Qualquer virose, febre ou introdução de um antibiótico novo no paciente faz o nível da droga explodir no sangue, causando vômitos em jato seguidos de convulsão e morte cerebral.', es: 'LA DROGA DE VENTANA ESTRECHA: La teofilina fue casi abandonada por la medicina moderna por su riesgo. Cualquier virosis, fiebre o introducción de un antibiótico nuevo hace que el nivel de la droga explote en la sangre, causando vómitos en chorro y convulsión.' }
      }
    },

    /* ── AMINOFILINA ────────────────────────────────────────────────────── */
    "aminofilina": {
      name: { pt: 'Aminofilina', es: 'Aminofilina' },
      category: 'pneumologia',
      class: { pt: 'Broncodilatador Metilxantina Endovenoso', es: 'Broncodilatador Metilxantina Endovenoso' },
      indications: {
        pt: ['Asma aguda grave e Status Asthmaticus na UTI (Resgate de última linha quando inaladores e corticoide falharam)', 'Tratamento de apneia da prematuridade em UTIN'],
        es: ['Asma aguda grave y Status Asthmaticus en UCI (Rescate de última línea cuando inhaladores y corticoide fallaron)', 'Tratamiento de apnea de la prematuridad en UCIN']
      },
      commercialNames: { br: ['Aminofilina Ampolas'], ar: ['Aminofilina'] },
      presentation: { pt: ['Ampolas IV 24 mg/mL (10 mL = 240 mg)'], es: ['Ampollas IV 24 mg/mL (10 mL = 240 mg)'] },
      mechanism: {
        pt: 'É um complexo salino que contém cerca de 80% de Teofilina Pura misturada com etilenodiamina (que a torna solúvel em água para injeção na veia). Na corrente sanguínea, ela solta a Teofilina livre, bloqueando receptores de adenosina e forçando o brônquio travado a relaxar sob força bruta sistêmica. Aumenta diretamente o drive e a força do músculo diafragma.',
        es: 'Es un complejo salino que contiene un 80% de Teofilina Pura mezclada con etilendiamina (que la hace soluble en agua para inyección). En la sangre, suelta la Teofilina libre, bloqueando receptores de adenosina y forzando el bronquio a relajarse. Aumenta directamente la fuerza del músculo diafragma.'
      },
      dose: {
        adult: {
          pt: 'Ataque: 5 a 6 mg/kg IV (LENTO, correr em 30 min). Manutenção: Infusão contínua de 0,5 mg/kg/hora. (Reduzir a dose de ataque se paciente já usar teofilina oral em casa!).',
          es: 'Ataque: 5 a 6 mg/kg IV (LENTO, correr en 30 min). Mantenimiento: Infusión continua de 0,5 mg/kg/hora. (¡Reducir dosis si paciente usa teofilina oral!).'
        },
        pediatric: {
          pt: 'Apneia Neonatal: 5 a 6 mg/kg IV ataque, seguido de manutenção.',
          es: 'Apnea Neonatal: 5 a 6 mg/kg IV ataque, seguido de mantenimiento.'
        }
      },
      administration: { pt: ['NUNCA FAZER EM BOLUS RÁPIDO. O paciente terá uma parada cardíaca súbita e convulsão na mesa. A dose de ataque deve correr na bomba ou microgotas por no mínimo 30 minutos.'], es: ['NUNCA HACER EN BOLO RÁPIDO. El paciente tendrá un paro cardíaco súbito y convulsión en la mesa. La dosis de ataque debe correr en bomba por al menos 30 minutos.'] },
      renalAdjustment: { required: false, message: { pt: 'O metabolismo é hepático, sem ajuste direto na DRC.', es: 'Metabolismo es hepático, sin ajuste directo en la ERC.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com Cor Pulmonale severo (DPOC) frequentemente têm fígado congestionado. A dose de manutenção deve ser reduzida pela metade para não matar o paciente intoxicado.', es: 'Pacientes con Cor Pulmonale severo (EPOC) frecuentemente tienen hígado congestionado. La dosis de mantenimiento debe reducirse a la mitad para no matar al paciente.' } },
      commonAdverseEffects: { pt: ['Rubor e sensação de calor na injeção', 'Agitação e confusão mental', 'Taquicardia sinusal'], es: ['Rubor y sensación de calor en la inyección', 'Agitación y confusión mental', 'Taquicardia sinusal'] },
      dangerousAdverseEffects: { pt: ['Estado de Mal Epiléptico induzido (Status Epilepticus)', 'Taquicardia Ventricular / Fibrilação Ventricular', 'Vômitos em borra de café (Isquemia mucosa)'], es: ['Estado de Mal Epiléptico inducido', 'Taquicardia Ventricular / Fibrilación Ventricular', 'Vómitos en posos de café (Isquemia mucosa)'] },
      contraindications: {
        absolute: { pt: ['Uso associado a bloqueadores Beta-1/Beta-2 não seletivos (antagonismo fatal)'], es: ['Uso asociado a bloqueadores Beta-1/Beta-2 no selectivos (antagonismo fatal)'] },
        relative: { pt: ['Infarto Agudo do Miocárdio ativo (o coração vai consumir muito oxigênio e necrosar)'], es: ['Infarto Agudo de Miocardio activo (el corazón consumirá mucho oxígeno y se necrosará)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O INIMIGO DA ADENOSINA: Se o paciente na UTI desenvolvendo taquicardia por Aminofilina sofrer uma arritmia SVT (Supraventricular) e o médico aplicar Adenosina para "resetar" o coração, a adenosina NÃO FARÁ EFEITO. A Aminofilina blinda os receptores do coração, inutilizando a adenosina.', es: 'EL ENEMIGO DE LA ADENOSINA: Si el paciente en la UCI hace taquicardia por Aminofilina y sufre una SVT, y el médico aplica Adenosina para "resetear", la adenosina NO HARÁ EFECTO. La Aminofilina blinda los receptores.' }
      }
    },

    /* ── ROFLUMILASTE ───────────────────────────────────────────────────── */
    "roflumilaste": {
      name: { pt: 'Roflumilaste', es: 'Roflumilast' },
      category: 'pneumologia',
      class: { pt: 'Inibidor Seletivo da Fosfodiesterase-4 (PDE4)', es: 'Inhibidor Selectivo de la Fosfodiesterasa-4 (PDE4)' },
      indications: {
        pt: ['Manutenção na DPOC grave associada a BRONQUITE CRÔNICA com histórico de exacerbações frequentes (Não serve para Enfisema puro sem catarro)'],
        es: ['Mantenimiento en EPOC grave asociada a BRONQUITIS CRÓNICA con historial de exacerbaciones frecuentes (No sirve para Enfisema puro sin catarro)']
      },
      commercialNames: { br: ['Daxas'], ar: ['Daxas'] },
      presentation: { pt: ['Comprimidos revestidos 500 mcg'], es: ['Comprimidos recubiertos 500 mcg'] },
      mechanism: {
        pt: 'Diferente da Teofilina (que inibe todas as PDEs), o Roflumilaste inibe APENAS a PDE-4, enzima encontrada principalmente nas células imunes (neutrófilos, macrófagos) do pulmão do fumante. Isso causa um acúmulo de AMPc DENTRO da célula de defesa, paralisando a liberação de catarro espesso e a inflamação obstrutiva. NÃO É broncodilatador, sua função é impedir a bronquite.',
        es: 'A diferencia de la Teofilina, el Roflumilast inhibe SOLO la PDE-4, enzima encontrada en las células inmunes del pulmón del fumador. Esto causa acumulación de AMPc DENTRO de la célula de defensa, paralizando la liberación de catarro espeso. NO ES broncodilatador, su función es impedir la bronquitis.'
      },
      dose: {
        adult: {
          pt: '500 mcg VO UMA VEZ ao dia de forma contínua.',
          es: '500 mcg VO UNA VEZ al día de forma continua.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Comprimido oral. Deve sempre ser usado em combinação com um broncodilatador inalatório (LAMA ou LABA), nunca sozinho.'], es: ['Comprimido oral. Debe siempre usarse en combinación con un broncodilatador inhalatorio (LAMA o LABA), nunca solo.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em pacientes com insuficiência hepática moderada a grave (Child-Pugh B e C).', es: 'Contraindicado en pacientes con insuficiencia hepática moderada a grave (Child-Pugh B y C).' } },
      commonAdverseEffects: { pt: ['Diarreia grave (frequentemente causa abandono do tratamento nos primeiros 30 dias)', 'Perda de peso involuntária', 'Náuseas e insônia'], es: ['Diarrea grave (frecuentemente causa abandono del tratamiento en los primeros 30 días)', 'Pérdida de peso involuntaria', 'Náuseas e insomnio'] },
      dangerousAdverseEffects: { pt: ['Reações psiquiátricas graves (Depressão, ansiedade aguda, pensamentos suicidas e suicídio consumado)', 'Desnutrição e caquexia induzida (pela perda de peso extrema em idosos já frágeis)'], es: ['Reacciones psiquiátricas graves (Depresión, ansiedad aguda, pensamientos suicidas y suicidio consumado)', 'Desnutrición y caquexia inducida (por pérdida de peso extrema en ancianos frágiles)'] },
      contraindications: {
        absolute: { pt: ['Histórico de depressão grave não tratada ou ideação suicida prévia', 'Imunossupressão grave ou câncer ativo'], es: ['Historial de depresión grave no tratada o ideación suicida previa', 'Inmunosupresión grave o cáncer activo'] },
        relative: { pt: ['Desnutrição basal (Baixo IMC) antes do tratamento'], es: ['Desnutrición basal (Bajo IMC) antes del tratamiento'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA PSIQUIÁTRICO E NUTRICIONAL: O idoso com DPOC grave comumente já é emagrecido (Sarcopenia) e isolado em casa (Risco de Depressão). O Roflumilaste intensifica a perda de peso e detona gatilhos suicidas na mente. O paciente deve ser pesado mensalmente e a família alertada para vigiar o comportamento.', es: 'ALERTA PSIQUIÁTRICA Y NUTRICIONAL: El anciano con EPOC grave comúnmente ya es delgado y asilado. El Roflumilast intensifica la pérdida de peso y detona gatillos suicidas. El paciente debe ser pesado mensualmente y la familia alertada.' }
      }
    },

    /* ── OMALIZUMABE ────────────────────────────────────────────────────── */
    "omalizumabe": {
      name: { pt: 'Omalizumabe', es: 'Omalizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-IgE)', es: 'Anticuerpo Monoclonal (Anti-IgE)' },
      indications: {
        pt: ['Asma Alérgica Grave persistente que não responde a doses altas de corticoides', 'Urticária Crônica Espontânea severa refratária a anti-histamínicos', 'Pólipos nasais severos'],
        es: ['Asma Alérgica Grave persistente que no responde a dosis altas de corticoides', 'Urticaria Crónica Espontánea severa refractaria a antihistamínicos', 'Pólipos nasales severos']
      },
      commercialNames: { br: ['Xolair'], ar: ['Xolair'] },
      presentation: { pt: ['Seringas preenchidas SC 75 mg e 150 mg', 'Frasco-ampola liofilizado 150 mg'], es: ['Jeringas prellenadas SC 75 mg y 150 mg', 'Vial liofilizado 150 mg'] },
      mechanism: {
        pt: 'Terapia "Alvo-Guiada". É um anticorpo criado em laboratório que caça e se liga especificamente às imunoglobulinas E (IgE) livres circulantes no sangue do paciente alérgico. Ao capturar o IgE, ele impede que este se conecte aos mastócitos. O mastócito, sem receber a chave (IgE), simplesmente "desliga" e para de vomitar histamina e substâncias que fecham o pulmão na asma. Quebra a raiz primária da alergia.',
        es: 'Terapia "Diana-Guiada". Es un anticuerpo creado en laboratorio que caza y se une específicamente a las inmunoglobulinas E (IgE) libres circulantes. Al capturar el IgE, impide que se conecte a los mastocitos. El mastocito, sin la llave (IgE), se "apaga" y deja de vomitar histamina en el asma.'
      },
      dose: {
        adult: {
          pt: 'Altamente variável: 75 mg a 600 mg Subcutâneo a cada 2 ou 4 semanas. (A dose e a frequência são calculadas EXATAMENTE com base no peso do paciente e no exame de sangue "IgE total basal").',
          es: 'Altamente variable: 75 mg a 600 mg Subcutáneo cada 2 o 4 semanas. (La dosis y frecuencia se calculan EXACTAMENTE con base en el peso del paciente y el IgE total basal).'
        },
        pediatric: {
          pt: 'Asma alérgica grave (> 6 anos): Dose calculada por nomograma (Peso x IgE) a cada 2 a 4 semanas.',
          es: 'Asma alérgica grave (> 6 años): Dosis calculada por nomograma (Peso x IgE) cada 2 a 4 semanas.'
        }
      },
      administration: { pt: ['Exclusivamente Subcutânea (SC). Nunca aplicar via IV (risco de choque fulminante).', 'A injeção é dolorosa e a medicação é altamente viscosa.'], es: ['Exclusivamente Subcutánea (SC). Nunca aplicar vía IV (riesgo de choque fulminante).', 'La inyección es dolorosa y la medicación es altamente viscosa.'] },
      renalAdjustment: { required: false, message: { pt: 'Degradado pelo sistema reticuloendotelial (não altera na DRC).', es: 'Degradado por el sistema reticuloendotelial (no altera en la ERC).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Reação no local da injeção (Vermelhidão, inchaço e dor no braço/coxa)', 'Cefaleia e dores nas articulações'], es: ['Reacción en el lugar de la inyección (Enrojecimiento, hinchazón y dolor)', 'Cefalea y dolores articulares'] },
      dangerousAdverseEffects: { pt: ['ANAFILAXIA DE INÍCIO TARDIO (Pode ocorrer choque anafilático até 2 horas ou dias após a injeção, mesmo em pacientes que já usavam o remédio há meses)', 'Risco teórico aumentado de parasitoses (pois o IgE defende contra vermes)'], es: ['ANAFILAXIA DE INICIO TARDÍO (Puede ocurrir choque anafiláctico hasta 2 horas o días después de la inyección, incluso en pacientes que ya lo usaban)', 'Riesgo teórico aumentado de parasitosis'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes biológicos da fórmula', 'Uso no ataque agudo da asma'], es: ['Hipersensibilidad grave a los componentes biológicos', 'Uso en el ataque agudo del asma'] },
        relative: { pt: ['Pacientes vivendo em áreas endêmicas de doenças parasitárias severas (Helmintos) sem tratamento prévio'], es: ['Pacientes viviendo en áreas endémicas de enfermedades parasitarias severas (Helmintos) sin tratamiento previo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'OBSERVAÇÃO OBRIGATÓRIA: Após receber a injeção de Omalizumabe, o paciente é OBRIGADO a aguardar dentro do hospital/clínica por pelo menos 2 horas na primeira dose, e 30 min nas demais. O médico deve ter Adrenalina IM engatilhada, pois a reação alérgica à proteína sintética do remédio não perdoa.', es: 'OBSERVACIÓN OBLIGATORIA: Tras recibir la inyección, el paciente está OBLIGADO a esperar en el hospital al menos 2 horas en la primera dosis. El médico debe tener Adrenalina IM lista.' }
      }
    },

    /* ── MEPOLIZUMABE ───────────────────────────────────────────────────── */
    "mepolizumabe": {
      name: { pt: 'Mepolizumabe', es: 'Mepolizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)', es: 'Anticuerpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave e Refratária', 'Pólipos nasais severos com rinossinusite crônica', 'Síndrome Hipereosinofílica e Granulomatose Eosinofílica com Poliangiite'],
        es: ['Asma Eosinofílica Grave y Refractaria', 'Pólipos nasales severos con rinosinusitis crónica', 'Síndrome Hipereosinofílico']
      },
      commercialNames: { br: ['Nucala'], ar: ['Nucala'] },
      presentation: { pt: ['Seringas ou canetas preenchidas SC 100 mg'], es: ['Jeringas o plumas prellenadas SC 100 mg'] },
      mechanism: {
        pt: 'Arma de destruição biológica seletiva. Muitos pacientes têm "Asma Eosinofílica", onde o sangue produz milhões de eosinófilos que invadem o pulmão. A Interleucina-5 (IL-5) é a única "comida/hormônio" que mantém o eosinófilo vivo. O Mepolizumabe sequestra a IL-5 circulante. Sem IL-5, os eosinófilos morrem de fome no sangue e a asma se cura radicalmente em poucos dias.',
        es: 'Arma de destrucción biológica selectiva. Muchos pacientes tienen "Asma Eosinofílica", donde la sangre produce millones de eosinófilos que invaden el pulmón. La IL-5 es la única hormona que mantiene vivo al eosinófilo. El Mepolizumab secuestra la IL-5. Sin IL-5, los eosinófilos mueren y el asma se cura radicalmente.'
      },
      dose: {
        adult: {
          pt: 'Asma severa: 100 mg via Subcutânea a CADA 4 SEMANAS (1 injeção mensal). Síndromes Eosinofílicas sistêmicas: 300 mg SC a cada 4 semanas.',
          es: 'Asma severa: 100 mg vía Subcutánea CADA 4 SEMANAS (1 inyección mensual). Síndromes Eosinofílicos sistémicos: 300 mg SC cada 4 semanas.'
        },
        pediatric: {
          pt: 'Asma (> 6 anos): 40 mg SC a cada 4 semanas.',
          es: 'Asma (> 6 años): 40 mg SC cada 4 semanas.'
        }
      },
      administration: { pt: ['Injeção subcutânea na parte superior do braço, coxa ou abdome. Diferente do omalizumabe, o paciente frequentemente pode autoaplicar em casa (tipo caneta de insulina) após treinamento.'], es: ['Inyección subcutánea en la parte superior del brazo, muslo o abdomen. A diferencia del omalizumab, el paciente frecuentemente puede autoaplicarse en casa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico necessário.', es: 'Sin ajuste clínico necesario.' } },
      commonAdverseEffects: { pt: ['Cefaleia intensa nos dias após a injeção', 'Dor intensa nas costas e espasmos (lombalgia)', 'Reações de dor na pele da injeção'], es: ['Cefalea intensa en los días tras la inyección', 'Dolor intenso en la espalda y espasmos (lumbalgia)', 'Reacciones de dolor en la piel de inyección'] },
      dangerousAdverseEffects: { pt: ['Reação de Hipersensibilidade Imunológica severa (Anafilaxia)', 'Infecção oportunista por herpes zoster'], es: ['Reacción de Hipersensibilidad Inmunológica severa (Anafilaxia)', 'Infección oportunista por herpes zoster'] },
      contraindications: {
        absolute: { pt: ['Resgate imediato de broncoespasmo'], es: ['Rescate inmediato de broncoespasmo'] },
        relative: { pt: ['Infecção parasitária (vermes) ativa não tratada (pois os eosinófilos são as armas do corpo contra os vermes. Destruir os eosinófilos permite que os vermes invadam o corpo inteiro).'], es: ['Infección parasitaria (gusanos) activa no tratada (pues los eosinófilos son las armas contra los gusanos. Destruirlos permite que los gusanos invadan todo el cuerpo).'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'REQUISITO MÉDICO OBRIGATÓRIO: É um crime médico prescrever Mepolizumabe sem antes olhar o Hemograma do paciente. Ele SÓ funciona se a asma do paciente for induzida por Eosinófilos (geralmente > 150 a 300 células/mcL no sangue). Se a asma for neutrofílica, o remédio (que custa fortunas) não fará absolutamente nada.', es: 'REQUISITO MÉDICO OBLIGATORIO: Es un crimen médico prescribir Mepolizumab sin antes mirar el Hemograma. SOLO funciona si el asma es inducida por Eosinófilos. Si el asma es neutrofílica, el remedio no hará absolutamente nada.' }
      }
    },

/* ── RESLIZUMABE ────────────────────────────────────────────────────── */
    "reslizumabe": {
      name: { pt: 'Reslizumabe', es: 'Reslizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)', es: 'Anticuerpo Monoclonal (Anti-Interleucina 5 / Anti-IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave (terapia adicional de manutenção em adultos não controlados)'],
        es: ['Asma Eosinofílica Grave (terapia adicional de mantenimiento en adultos no controlados)']
      },
      commercialNames: { br: ['Cinqair'], ar: ['Cinqair'] },
      presentation: { pt: ['Frasco-ampola para uso IV (10 mg/mL)'], es: ['Vial para uso IV (10 mg/mL)'] },
      mechanism: {
        pt: 'Liga-se especificamente à Interleucina-5 (IL-5) livre no sangue do paciente, neutralizando-a. Como a IL-5 é o hormônio vital de sobrevivência e proliferação dos eosinófilos, o Reslizumabe corta o "suprimento de comida" dessas células. O eosinófilo murcha e sofre apoptose (morte celular programada), esvaziando o pulmão da inflamação. Diferente do Mepolizumabe (que é subcutâneo), este fármaco é puramente endovenoso.',
        es: 'Se une específicamente a la Interleucina-5 (IL-5) libre en la sangre, neutralizándola. Como la IL-5 es la hormona vital de supervivencia de los eosinófilos, el Reslizumab corta el "suministro de comida" de estas células. El eosinófilo se marchita y sufre apoptosis, vaciando el pulmón de inflamación.'
      },
      dose: {
        adult: {
          pt: '3 mg/kg administrados por infusão Intravenosa (IV) a CADA 4 SEMANAS (1 vez ao mês).',
          es: '3 mg/kg administrados por infusión Intravenosa (IV) CADA 4 SEMANAS (1 vez al mes).'
        },
        pediatric: {
          pt: 'Não recomendado (restrito a maiores de 18 anos devido ao risco de anafilaxia).',
          es: 'No recomendado (restringido a mayores de 18 años debido al riesgo de anafilaxia).'
        }
      },
      administration: { pt: ['Administração ESTRITAMENTE ENDOVENOSA. A infusão deve correr ao longo de 20 a 50 minutos. Acesso venoso obrigatório.'], es: ['Administración ESTRICTAMENTE ENDOVENOSA. La infusión debe correr a lo largo de 20 a 50 minutos. Acceso venoso obligatorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Degradação proteolítica natural.', es: 'Degradación proteolítica natural.' } },
      commonAdverseEffects: { pt: ['Dor e reação no local da punção IV', 'Elevação da creatina quinase (CPK) muscular', 'Dores no corpo (Mialgia)'], es: ['Dolor y reacción en el sitio de punción IV', 'Elevación de creatina quinasa (CPK) muscular', 'Dolores en el cuerpo (Mialgia)'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia fatal durante a infusão venosa ou imediatamente após', 'Risco teórico aumentado de neoplasias (câncer) em longo prazo'], es: ['Anafilaxia fatal durante la infusión venosa o inmediatamente después', 'Riesgo teórico aumentado de neoplasias (cáncer) a largo plazo'] },
      contraindications: {
        absolute: { pt: ['Tratamento de status asthmaticus agudo'], es: ['Tratamiento de status asthmaticus agudo'] },
        relative: { pt: ['Infecções helmínticas ativas não tratadas'], es: ['Infecciones helmínticas activas no tratadas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'BLACK BOX WARNING: O Reslizumabe possui um alerta grave na FDA por causar Anafilaxia em até 0,3% dos pacientes (taxa muito alta para um imunobiológico). A infusão deve ser feita num centro médico com carrinho de parada, e o paciente monitorado de perto por 30 a 60 min após o fim do gotejamento.', es: 'BLACK BOX WARNING: El Reslizumab posee una alerta grave en la FDA por causar Anafilaxia en hasta 0,3% de los pacientes. La infusión debe hacerse en un centro médico con carro de paro.' }
      }
    },

/* ── BENRALIZUMABE ──────────────────────────────────────────────────── */
    "benralizumabe": {
      name: { pt: 'Benralizumabe', es: 'Benralizumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Receptor Alfa da IL-5)', es: 'Anticuerpo Monoclonal (Anti-Receptor Alfa de IL-5)' },
      indications: {
        pt: ['Asma Eosinofílica Grave não controlada (Manutenção)'],
        es: ['Asma Eosinofílica Grave no controlada (Mantenimiento)']
      },
      commercialNames: { br: ['Fasenra'], ar: ['Fasenra'] },
      presentation: { pt: ['Seringa ou caneta preenchida SC 30 mg'], es: ['Jeringa o pluma prellenada SC 30 mg'] },
      mechanism: {
        pt: 'O "Exterminador Direto". Diferente do Mepolizumabe e Reslizumabe (que sequestram a IL-5 flutuando no sangue), o Benralizumabe mira na própria célula: ele se liga fisicamente ao RECEPTOR da IL-5 na superfície do eosinófilo. Ao grudar ali, ele age como um sinalizador luminoso para as células "Natural Killer" (NK) do sistema imune do paciente. As NK chegam e explodem o eosinófilo (Citotoxicidade Celular Dependente de Anticorpos - ADCC). Isso ZERA os eosinófilos do sangue em 24 horas.',
        es: 'El "Exterminador Directo". A diferencia del Mepolizumab y Reslizumab (que secuestran la IL-5 en sangre), el Benralizumab apunta a la propia célula: se une físicamente al RECEPTOR de IL-5 en el eosinófilo. Al pegarse, actúa como señalizador para las células "Natural Killer" (NK). Las NK llegan y explotan al eosinófilo. Esto PONE A CERO los eosinófilos en 24 horas.'
      },
      dose: {
        adult: {
          pt: '30 mg via Subcutânea a cada 4 semanas nas primeiras 3 doses. DEPOIS: 30 mg a CADA 8 SEMANAS (1 injeção a cada 2 meses).',
          es: '30 mg vía Subcutánea cada 4 semanas en las primeras 3 dosis. DESPUÉS: 30 mg CADA 8 SEMANAS (1 inyección cada 2 meses).'
        },
        pediatric: {
          pt: 'Uso a partir de 12 anos: mesma dose do adulto (30 mg SC).',
          es: 'Uso a partir de 12 años: misma dosis del adulto (30 mg SC).'
        }
      },
      administration: { pt: ['Injeção exclusivamente Subcutânea (braço, coxa, abdome). O espaçamento a cada 8 semanas na manutenção é seu maior atrativo comercial (maior conforto ao paciente).'], es: ['Inyección exclusivamente Subcutánea. El espaciamiento cada 8 semanas en el mantenimiento es su mayor atractivo comercial (mayor confort al paciente).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste em disfunção hepática.', es: 'No requiere ajuste en disfunción hepática.' } },
      commonAdverseEffects: { pt: ['Dor de garganta (Faringite)', 'Febre leve transitória pós-injeção', 'Dor de cabeça'], es: ['Dolor de garganta (Faringitis)', 'Fiebre leve transitoria posinyección', 'Dolor de cabeza'] },
      dangerousAdverseEffects: { pt: ['Reação anafilática ou urticária severa', 'Redução total da defesa contra helmintos (vermes)'], es: ['Reacción anafiláctica o urticaria severa', 'Reducción total de la defensa contra helmintos (gusanos)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada', 'Crise aguda de asfixia (Broncoespasmo ativo)'], es: ['Hipersensibilidad documentada', 'Crisis aguda de asfixia (Broncoespasmo activo)'] },
        relative: { pt: ['Pacientes residentes em zonas de altíssima prevalência de parasitoses intestinais e sistêmicas'], es: ['Pacientes residentes en zonas de altísima prevalencia de parasitosis intestinales y sistémicas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'EFEITO "ZERO EOSINÓFILOS": Se você pedir um hemograma após a primeira dose de Benralizumabe, a contagem de Eosinófilos será literalmente 0. Isso não é um erro do laboratório e não deve assustar o médico; é o exato mecanismo de ação da droga operando.', es: 'EFECTO "CERO EOSINÓFILOS": Si usted pide un hemograma tras la primera dosis de Benralizumab, el conteo de Eosinófilos será literalmente 0. Esto no es un error del laboratorio; es el exacto mecanismo de acción de la droga operando.' }
      }
    },

/* ── DUPILUMABE ─────────────────────────────────────────────────────── */
    "dupilumabe": {
      name: { pt: 'Dupilumabe', es: 'Dupilumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Receptor de IL-4 e IL-13)', es: 'Anticuerpo Monoclonal (Anti-Receptor de IL-4 e IL-13)' },
      indications: {
        pt: ['Asma Tipo 2 Severa (Eosinofílica ou com FeNO elevado)', 'Dermatite Atópica (Eczema) grave refratária', 'Rinossinusite crônica com Polipose Nasal severa', 'Esofagite Eosinofílica'],
        es: ['Asma Tipo 2 Severa (Eosinofílica o con FeNO elevado)', 'Dermatitis Atópica (Eczema) grave refractaria', 'Rinosinusitis crónica con Poliposis Nasal severa', 'Esofagitis Eosinofílica']
      },
      commercialNames: { br: ['Dupixent'], ar: ['Dupixent'] },
      presentation: { pt: ['Seringa preenchida SC 200 mg e 300 mg'], es: ['Jeringa prellenada SC 200 mg y 300 mg'] },
      mechanism: {
        pt: 'O "Rei da Inflamação Tipo 2". Liga-se especificamente à cadeia alfa do receptor da Interleucina-4 (IL-4Rα). Como esse receptor é compartilhado, o Dupilumabe inibe SIMULTANEAMENTE duas vias gigantescas: a IL-4 e a IL-13. Essas duas citocinas são as "gerentes" das alergias no corpo inteiro. Ao bloqueá-las, o remédio desinflama o pulmão (Asma), desinflama a pele (Dermatite) e encolhe pólipos do nariz ao mesmo tempo.',
        es: 'El "Rey de la Inflamación Tipo 2". Se une específicamente a la cadena alfa del receptor de la Interleucina-4 (IL-4Rα). Como este receptor es compartido, el Dupilumab inhibe SIMULTÁNEAMENTE dos vías gigantescas: IL-4 e IL-13. Estas dos citocinas son las "gerentes" de las alergias. Al bloquearlas, desinflama el pulmón, la piel y la nariz al mismo tiempo.'
      },
      dose: {
        adult: {
          pt: 'Asma severa: Dose de ataque de 400 mg ou 600 mg SC, seguida de 200 mg ou 300 mg a CADA 2 SEMANAS (quinzenalmente).',
          es: 'Asma severa: Dosis de ataque de 400 mg o 600 mg SC, seguida de 200 mg o 300 mg CADA 2 SEMANAS (quincenalmente).'
        },
        pediatric: {
          pt: 'Pode ser usado em crianças > 6 anos para Asma/Dermatite (doses ajustadas por peso, 100 mg a 300 mg).',
          es: 'Puede usarse en niños > 6 años para Asma/Dermatitis (dosis ajustadas por peso, 100 mg a 300 mg).'
        }
      },
      administration: { pt: ['Injeção Subcutânea em braços, coxas ou abdome. O paciente é instruído a rodiziar o local e pode aplicar em casa.'], es: ['Inyección Subcutánea en brazos, muslos o abdomen. El paciente es instruido a rotar el lugar y puede aplicar en casa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na DRC.', es: 'Sin necesidad de ajuste en la ERC.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Conjuntivite alérgica e olho seco (Efeito paradoxal marcante da droga, comum em quem trata dermatite)', 'Reação na área da injeção', 'Herpes labial oportunista'], es: ['Conjuntivitis alérgica y ojo seco (Efecto paradójico marcado, común en quien trata dermatitis)', 'Reacción en el área de la inyección', 'Herpes labial oportunista'] },
      dangerousAdverseEffects: { pt: ['Eosinofilia Sanguínea Transitória Severa (Ao bloquear o pulmão, os eosinófilos ficam represados no sangue temporariamente)', 'Reações anafiláticas'], es: ['Eosinofilia Sanguínea Transitoria Severa (Al bloquear el pulmón, los eosinófilos quedan represados en la sangre temporalmente)', 'Reacciones anafilácticas'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes da seringa'], es: ['Hipersensibilidad grave a los componentes de la jeringa'] },
        relative: { pt: ['Uso associado com vacinas de vírus vivos', 'Alergias oftalmológicas preexistentes graves (Ceratite)'], es: ['Uso asociado con vacunas de virus vivos', 'Alergias oftalmológicas preexistentes graves (Queratitis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'VANTAGEM FENOTÍPICA: Diferente do Mepolizumabe e Benralizumabe (que exigem que o paciente tenha eosinófilos no sangue), o Dupilumabe funciona brilhantemente mesmo se o paciente tiver poucos eosinófilos, desde que ele exale alto teor de Óxido Nítrico (FeNO) no sopro.', es: 'VENTAJA FENOTÍPICA: A diferencia del Mepolizumab y Benralizumab (que exigen que el paciente tenga eosinófilos en sangre), el Dupilumab funciona brillantemente incluso si el paciente tiene pocos eosinófilos, siempre que exhale alto Óxido Nítrico (FeNO).' }
      }
    },

/* ── TEZEPELUMABE ───────────────────────────────────────────────────── */
    "tezepelumabe": {
      name: { pt: 'Tezepelumabe', es: 'Tezepelumab' },
      category: 'pneumologia',
      class: { pt: 'Anticorpo Monoclonal (Anti-Alarmina / Anti-TSLP)', es: 'Anticuerpo Monoclonal (Anti-Alarmina / Anti-TSLP)' },
      indications: {
        pt: ['Asma Severa em adultos e adolescentes (Terceira Linha de Terapia Biológica)', 'Excelente para a "Asma Não-T2" ou asma com baixo nível de eosinófilos'],
        es: ['Asma Severa en adultos y adolescentes (Tercera Línea de Terapia Biológica)', 'Excelente para el "Asma No-T2" o asma con bajo nivel de eosinófilos']
      },
      commercialNames: { br: ['Tezspire'], ar: ['Tezspire'] },
      presentation: { pt: ['Seringa preenchida ou caneta SC 210 mg'], es: ['Jeringa prellenada o pluma SC 210 mg'] },
      mechanism: {
        pt: 'Ataca o "Topo da Pirâmide" inflamatória. Ele bloqueia a TSLP (Linfopoietina Estromal do Timo), uma "alarmina". Quando o pulmão do asmático entra em contato com poeira ou cigarro, as células do próprio pulmão soltam a alarmina TSLP para gritar por socorro, iniciando toda a cascata (que depois chamará a IL-4, IL-5 e eosinófilos). O Tezepelumabe corta o sinal inicial. Por causa disso, ele funciona até na Asma do Fumante e na Asma de pessoas que não têm eosinófilos altos (O calcanhar de Aquiles dos outros biológicos).',
        es: 'Ataca la "Cima de la Pirámide" inflamatoria. Bloquea la TSLP, una "alarmina". Cuando el pulmón entra en contacto con polvo, las células sueltan TSLP para gritar por auxilio, iniciando toda la cascada. El Tezepelumab corta la señal inicial. Funciona incluso en el Asma del Fumador y en pacientes sin eosinófilos altos.'
      },
      dose: {
        adult: {
          pt: '210 mg via Subcutânea a CADA 4 SEMANAS (1 vez ao mês).',
          es: '210 mg vía Subcutánea CADA 4 SEMANAS (1 vez al mes).'
        },
        pediatric: {
          pt: 'Aprovado para adolescentes > 12 anos: mesma dose do adulto (210 mg SC).',
          es: 'Aprobado para adolescentes > 12 años: misma dosis del adulto (210 mg SC).'
        }
      },
      administration: { pt: ['Injeção subcutânea na coxa, abdome ou braço. Cuidado para não injetar na cintura ou em locais de atrito de roupa.'], es: ['Inyección subcutánea en muslo, abdomen o brazo. Cuidado de no inyectar en la cintura o en lugares de fricción de ropa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico na doença renal crônica.', es: 'Sin necesidad de ajuste clínico en la enfermedad renal crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Degradação proteolítica em peptídeos pequenos, sem depender do fígado.', es: 'Degradación proteolítica en péptidos pequeños, sin depender del hígado.' } },
      commonAdverseEffects: { pt: ['Faringite e dores nas articulações', 'Erupção cutânea no local da injeção', 'Dor lombar'], es: ['Faringitis y dolores articulares', 'Erupción cutánea en el sitio de inyección', 'Dolor lumbar'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia e choque anafilático', 'Reações adversas cardíacas (em investigação pós-mercado)'], es: ['Anafilaxia y choque anafiláctico', 'Reacciones adversas cardíacas (en investigación poscomercialización)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ativa aos componentes'], es: ['Hipersensibilidad activa a los componentes'] },
        relative: { pt: ['Tratamento de ataques agudos de broncoespasmo (início lento de ação)'], es: ['Tratamiento de ataques agudos de broncoespasmo (inicio lento de acción)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O DESMAME DO CORTICOIDE (OFERTA ENGANOSA): Cuidado ao iniciar imunobiológicos e tentar retirar os corticoides ORAIS que o paciente já toma de forma bruta. A retirada do corticoide deve ser lentíssima (durante meses), pois o eixo adrenal do paciente está "adormecido" e ele pode ter uma crise adrenal se o médico cortar a pílula confiando apenas na nova injeção.', es: 'EL DESTETE DEL CORTICOIDE: Cuidado al iniciar inmunobiológicos y retirar los corticoides ORALES bruscamente. La retirada debe ser lentísima (durante meses), pues el eje adrenal está "dormido" y el paciente puede tener crisis adrenal.' }
      }
    },

/* ── BROMEXINA ──────────────────────────────────────────────────────── */
    "bromexina": {
      name: { pt: 'Bromexina (Cloridrato de)', es: 'Bromhexina (Clorhidrato de)' },
      category: 'pneumologia',
      class: { pt: 'Expectorante Mucolítico', es: 'Expectorante Mucolítico' },
      indications: {
        pt: ['Doenças broncopulmonares agudas e crônicas associadas à secreção mucosa espessa (Bronquite, Traqueobronquite)', 'Tosse produtiva intensa com dificuldade de expectorar'],
        es: ['Enfermedades broncopulmonares agudas y crónicas asociadas a secreción mucosa espesa (Bronquitis, Traqueobronquitis)', 'Tos productiva intensa con dificultad de expectorar']
      },
      commercialNames: { br: ['Bisolvon'], ar: ['Bisolvon', 'Bisolvon Expectorante'] },
      presentation: { pt: ['Xarope Adulto 8 mg/5 mL', 'Xarope Pediátrico 4 mg/5 mL', 'Solução Inalatória/Gotas'], es: ['Jarabe Adulto 8 mg/5 mL', 'Jarabe Pediátrico 4 mg/5 mL', 'Solución Inhalatoria/Gotas'] },
      mechanism: {
        pt: 'Aumenta a proporção de secreção brônquica serosa (líquida) no pulmão. A Bromexina ativa as glândulas mucosas e fragmenta fisicamente as fibras de mucopolissacarídeos ácidos que deixam o catarro duro e "grudento". Com o catarro liquefeito e as fibras cortadas, o batimento ciliar da traqueia consegue varrer o muco para cima com facilidade durante a tosse. A bromexina estimula a produção endógena de surfactante alveolar.',
        es: 'Aumenta la proporción de secreción bronquial serosa (líquida). La Bromhexina activa las glándulas mucosas y fragmenta físicamente las fibras de mucopolisacáridos ácidos que dejan el catarro duro. Con el catarro licuado, el latido ciliar logra barrer el moco hacia arriba con facilidad.'
      },
      dose: {
        adult: {
          pt: '8 mg (1 copo medida de 5 mL do xarope adulto) 3 vezes ao dia (a cada 8 horas).',
          es: '8 mg (1 vaso medida de 5 mL del jarabe adulto) 3 veces al día (cada 8 horas).'
        },
        pediatric: {
          pt: 'Crianças 2 a 5 anos: 4 mg a cada 8h (Usar xarope pediátrico). Crianças 6 a 12 anos: 8 mg a cada 8h.',
          es: 'Niños 2 a 5 años: 4 mg cada 8h (Usar jarabe pediátrico). Niños 6 a 12 años: 8 mg cada 8h.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Aumentar absurdamente a ingestão de ÁGUA durante o uso. O remédio precisa puxar a água do corpo para liquidificar o catarro. Usar o xarope desidratado não funciona.'], es: ['OBLIGATORIO: Aumentar absurdamente la ingestión de AGUA durante el uso. El remedio necesita sacar agua del cuerpo para licuar el catarro. Usar el jarabe deshidratado no funciona.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (metabólitos podem acumular, mas toxicidade é muito baixa).', es: 'Sin necesidad de ajuste (metabolitos pueden acumular, pero toxicidad es muy baja).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com hepatopatia severa têm clearance reduzido de bromexina, usar com cautela e intervalos maiores.', es: 'Pacientes con hepatopatía severa tienen clearance reducido de bromhexina, usar con cautela e intervalos mayores.' } },
      commonAdverseEffects: { pt: ['Irritação e desconforto gástrico leve', 'Náuseas e diarreia leve', 'Aumento de suor'], es: ['Irritación y malestar gástrico leve', 'Náuseas y diarrea leve', 'Aumento de sudor'] },
      dangerousAdverseEffects: { pt: ['Choque anafilático severo e Angioedema (raríssimo, mas descrito)', 'Reações cutâneas graves (SCARs)'], es: ['Choque anafiláctico severo y Angioedema (rarísimo, pero descrito)', 'Reacciones cutáneas graves (SCARs)'] },
      contraindications: {
        absolute: { pt: ['Úlcera gastroduodenal ativa (A secreção gástrica também fica alterada e a proteção estomacal cai)', 'Crianças menores de 2 anos (risco de afogamento no excesso de secreção líquida)'], es: ['Úlcera gastroduodenal activa (La secreción gástrica también se altera y la protección estomacal cae)', 'Niños menores de 2 años (riesgo de ahogamiento en el exceso de secreción líquida)'] },
        relative: { pt: ['Pacientes incapazes de expectorar ou tossir com força (Neuropatas cerebrais, miastenia gravis)'], es: ['Pacientes incapaces de expectorar o toser con fuerza (Neurópatas cerebrales, miastenia gravis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'NÃO TRAVE A TOSSE: É um erro conceitual e perigoso associar Bromexina (que "amolece" o catarro para ser expulso) com Antitussígenos como a Codeína ou Dextrometorfano (que inibem o reflexo de tosse). O catarro vai ficar líquido no pulmão, o paciente não vai tossir, e ocorrerá um "afogamento em secreção" com pneumonia associada.', es: 'NO TRABE LA TOS: Es un error peligroso asociar Bromhexina (que "ablanda" el catarro para ser expulsado) con Antitusivos (que inhiben la tos). El catarro quedará líquido en el pulmón, el paciente no toserá y se "ahogará en secreción" con neumonía.' }
      }
    }

  });
})();
