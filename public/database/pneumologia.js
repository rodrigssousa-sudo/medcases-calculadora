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
    },

    /* ── AMBROXOL ───────────────────────────────────────────────────────── */
    "ambroxol": {
      name: { pt: 'Ambroxol (Cloridrato de)', es: 'Ambroxol (Clorhidrato de)' },
      category: 'pneumologia',
      class: { pt: 'Expectorante Mucolítico', es: 'Expectorante Mucolítico' },
      indications: {
        pt: ['Doenças broncopulmonares agudas e crônicas com secreção espessa (Bronquite, Traqueobronquite)', 'Alívio da tosse produtiva'],
        es: ['Enfermedades broncopulmonares agudas y crónicas con secreción espesa (Bronquitis, Traqueobronquitis)', 'Alivio de la tos productiva']
      },
      commercialNames: { br: ['Mucosolvan', 'Ambroxmel'], ar: ['Mucosolvan'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL', 'Gotas para inalação ou via oral'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL', 'Gotas para inhalación o vía oral'] },
      mechanism: {
        pt: 'O Ambroxol é o metabólito direto (a forma purificada e ativa) da Bromexina. Ele atua fragmentando os polímeros de muco no pulmão e, mais importante, estimula ativamente os pneumócitos tipo II a produzirem SURFACTANTE pulmonar. O surfactante funciona como um "lubrificante" que impede o catarro de colar na parede do brônquio, facilitando sua expulsão natural pela tosse.',
        es: 'El Ambroxol es el metabolito directo (la forma purificada y activa) de la Bromhexina. Actúa fragmentando los polímeros de moco y estimula activamente los neumocitos tipo II a producir SURFACTANTE pulmonar. El surfactante funciona como un "lubricante" que impide que el catarro se pegue en la pared del bronquio.'
      },
      dose: {
        adult: {
          pt: 'Xarope adulto (30mg/5mL): 5 mL via oral 3 vezes ao dia (a cada 8 horas).',
          es: 'Jarabe adulto (30mg/5mL): 5 mL vía oral 3 veces al día (cada 8 horas).'
        },
        pediatric: {
          pt: '2 a 5 anos: 2,5 mL do xarope pediátrico a cada 8h. 6 a 12 anos: 5 mL do xarope pediátrico a cada 8-12h.',
          es: '2 a 5 años: 2,5 mL del jarabe pediátrico cada 8h. 6 a 12 años: 5 mL del jarabe pediátrico cada 8-12h.'
        }
      },
      administration: { pt: ['Administrar preferencialmente após as refeições.', 'Tal como a bromexina, a eficácia do ambroxol é totalmente dependente da INGESTÃO MASSIVA DE ÁGUA durante o tratamento.'], es: ['Administrar preferentemente tras las comidas.', 'Al igual que la bromhexina, la eficacia depende totalmente de la INGESTIÓN MASIVA DE AGUA durante el tratamiento.'] },
      renalAdjustment: { required: true, message: { pt: 'Os metabólitos hepáticos do ambroxol são eliminados pelo rim. Em DRC grave, eles podem se acumular. Aumentar os intervalos de dose.', es: 'Los metabolitos hepáticos del ambroxol son eliminados por el riñón. En ERC grave, pueden acumularse. Aumentar los intervalos de dosis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em falência hepática severa.', es: 'Usar con cautela en falla hepática severa.' } },
      commonAdverseEffects: { pt: ['Alteração do paladar (disgeusia)', 'Náuseas e leve dormência na garganta (efeito anestésico local leve)'], es: ['Alteración del gusto (disgeusia)', 'Náuseas y leve adormecimiento en la garganta (efecto anestésico local leve)'] },
      dangerousAdverseEffects: { pt: ['Reações cutâneas alérgicas severas (Eritema multiforme) raríssimas'], es: ['Reacciones cutáneas alérgicas severas (Eritema multiforme) rarísimas'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos (pelo alto risco de acúmulo de secreção não expectorada)'], es: ['Niños menores de 2 años (por el alto riesgo de acumulación de secreción no expectorada)'] },
        relative: { pt: ['Pacientes com úlcera péptica ativa'], es: ['Pacientes con úlcera péptica activa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Tem um leve efeito anestésico tópico! Se o paciente relatar que a boca ou a garganta ficaram "adormecidas" ou com formigamento após tomar o xarope, avise que isso é uma ação farmacológica normal do Ambroxol e não um sinal imediato de anafilaxia.', es: '¡Tiene un leve efecto anestésico tópico! Si el paciente relata que la boca o garganta quedaron "adormecidas" tras tomar el jarabe, avise que esto es una acción farmacológica normal del Ambroxol y no un signo de anafilaxia.' }
      }
    },

    /* ── CARBOCISTEÍNA ──────────────────────────────────────────────────── */
    "carbocisteina": {
      name: { pt: 'Carbocisteína', es: 'Carbocisteína' },
      category: 'pneumologia',
      class: { pt: 'Mucorregulador / Expectorante', es: 'Mucorregulador / Expectorante' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) para redução de exacerbações', 'Bronquites e otites acompanhadas de muco hiperviscoso'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) para reducción de exacerbaciones', 'Bronquitis y otitis acompañadas de moco hiperviscoso']
      },
      commercialNames: { br: ['Mucofan', 'Mucosolvan (Atenção, varia por país)'], ar: ['Rinofluimucil'] },
      presentation: { pt: ['Xarope Adulto 50 mg/mL', 'Xarope Pediátrico 20 mg/mL', 'Cápsulas 375 mg'], es: ['Jarabe Adulto 50 mg/mL', 'Jarabe Pediátrico 20 mg/mL', 'Cápsulas 375 mg'] },
      mechanism: {
        pt: 'Não apenas quebra o catarro, mas REGULA a sua fabricação original. A carbocisteína age dentro das células secretoras da traqueia (células caliciformes), obrigando-as a produzir mais *sialomucinas* (catarro fluido e ralo) e menos *fucomucinas* (catarro duro e grosso). Assim, o muco já nasce saudável e ralo nas glândulas respiratórias.',
        es: 'No solo rompe el catarro, sino REGULA su fabricación original. La carbocisteína actúa dentro de las células secretoras de la tráquea, obligándolas a producir más *sialomucinas* (catarro fluido) y menos *fucomucinas* (catarro duro y grueso). Así, el moco ya nace saludable y fluido.'
      },
      dose: {
        adult: {
          pt: 'Xarope Adulto (50mg/mL): 5 a 15 mL via oral a cada 8 horas (A dose geralmente é reduzida após a melhora inicial).',
          es: 'Jarabe Adulto (50mg/mL): 5 a 15 mL vía oral cada 8 horas (La dosis generalmente se reduce tras la mejora inicial).'
        },
        pediatric: {
          pt: '2 a 5 anos: 2,5 mL a 5 mL (Xarope Pediátrico) a cada 6h. 6 a 12 anos: 5 mL a 10 mL a cada 8h.',
          es: '2 a 5 años: 2,5 mL a 5 mL (Jarabe Pediátrico) cada 6h. 6 a 12 años: 5 mL a 10 mL cada 8h.'
        }
      },
      administration: { pt: ['Deve ser tomado longe dos laticínios para não prejudicar a absorção gástrica.'], es: ['Debe ser tomado lejos de los lácteos para no perjudicar la absorción gástrica.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Desconforto epigástrico e azia (muito comum)', 'Náuseas e diarreia leve', 'Erupção cutânea'], es: ['Malestar epigástrico y acidez (muy común)', 'Náuseas y diarrea leve', 'Erupción cutánea'] },
      dangerousAdverseEffects: { pt: ['Sangramento Gastrointestinal (Especialmente em idosos que já usam AINEs, pois a carbocisteína dissolve o muco protetor do estômago também)'], es: ['Sangrado Gastrointestinal (Especialmente en ancianos que ya usan AINEs, pues la carbocisteína disuelve el muco protector del estómago también)'] },
      contraindications: {
        absolute: { pt: ['Úlceras gástricas ou duodenais ativas (Risco de hemorragia)', 'Crianças menores de 2 anos'], es: ['Úlceras gástricas o duodenales activas (Riesgo de hemorragia)', 'Niños menores de 2 años'] },
        relative: { pt: ['Histórico de úlceras cicatrizadas ou uso excessivo de Ibuprofeno/Diclofenaco'], es: ['Historial de úlceras cicatrizadas o uso excesivo de Ibuprofeno/Diclofenaco'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O MUCO DO ESTÔMAGO SOFRE JUNTO: A Carbocisteína não entende que o muco do estômago deve ser mantido espesso para proteger contra o ácido. Ela dissolve o muco de proteção gástrica, abrindo caminho para dor de estômago e úlceras. Use com IBP (Omeprazol) se o paciente tiver gastrite grave.', es: 'EL MOCO DEL ESTÓMAGO SUFRE: La Carbocisteína disuelve el muco de protección gástrica, abriendo camino para dolor de estómago y úlceras. Use con IBP (Omeprazol) si el paciente tiene gastritis grave.' }
      }
    },

    /* ── ERDOSTEÍNA ─────────────────────────────────────────────────────── */
    "erdosteina": {
      name: { pt: 'Erdosteína', es: 'Erdosteína' },
      category: 'pneumologia',
      class: { pt: 'Mucolítico Avançado e Antioxidante', es: 'Mucolítico Avanzado y Antioxidante' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) sintomática (Reduz agressivamente o número de exacerbações/internações)', 'Bronquite crônica severa'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) sintomática (Reduce agresivamente el número de exacerbaciones)', 'Bronquitis crónica severa']
      },
      commercialNames: { br: ['Flusten'], ar: ['Erdosteina'] },
      presentation: { pt: ['Cápsulas 300 mg', 'Suspensão oral 35 mg/mL'], es: ['Cápsulas 300 mg', 'Suspensión oral 35 mg/mL'] },
      mechanism: {
        pt: 'A mais avançada das opções orais. É um pró-fármaco que, ao passar pelo fígado, libera "grupos tiol" (enxofre). Esses grupos cortam as pontes de dissulfeto do catarro como uma tesoura, amolecendo a secreção. O seu trunfo gigantesco é ser um forte ANTIOXIDANTE: ele "varre" os radicais livres de oxigênio gerados pelo cigarro no pulmão, protegendo a enzima alfa-1-antitripsina da destruição no DPOC.',
        es: 'Es un profármaco que, al pasar por el hígado, libera "grupos tiol" (azufre). Estos grupos cortan los puentes disulfuro del catarro como una tijera. Su triunfo gigantesco es ser un fuerte ANTIOXIDANTE: "barre" los radicales libres de oxígeno generados por el cigarro en el pulmón.'
      },
      dose: {
        adult: {
          pt: '1 cápsula de 300 mg via oral a cada 12 horas (2x ao dia).',
          es: '1 cápsula de 300 mg vía oral cada 12 horas (2x al día).'
        },
        pediatric: {
          pt: 'Uso não recomendado em pediatria (foco quase exclusivo no adulto tabagista).',
          es: 'Uso no recomendado en pediatría.'
        }
      },
      administration: { pt: ['O paciente pode ingerir as cápsulas antes, durante ou após as refeições (absorção rápida).'], es: ['El paciente puede ingerir las cápsulas antes, durante o después de las comidas (absorción rápida).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou reduzir em ClCr < 25 mL/min (acúmulo dos metabólitos ativos).', es: 'Evitar o reducir en ClCr < 25 mL/min (acumulación de metabolitos activos).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave (Child-Pugh C), pois a droga exige o fígado sadio para ser ativada e não intoxicar.', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C), pues la droga exige el hígado sano para ser activada.' } },
      commonAdverseEffects: { pt: ['Leve desconforto epigástrico (muito menor que a carbocisteína)', 'Cefaleia', 'Sabor alterado'], es: ['Leve malestar epigástrico (mucho menor que la carbocisteína)', 'Cefalea', 'Sabor alterado'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade grave (Raríssimo)'], es: ['Hipersensibilidad grave (Rarísimo)'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa', 'Cirrose hepática grave ou DRC grave'], es: ['Úlcera péptica activa', 'Cirrosis hepática grave o ERC grave'] },
        relative: { pt: ['Nenhuma relevante clinicamente em dose terapêutica'], es: ['Ninguna relevante clínicamente en dosis terapéutica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ANTIBIÓTICO TURBINADO (Sinergismo Comprovado): Assim como a bromexina, a Erdosteína aumenta incrivelmente a concentração de Amoxicilina nos brônquios. Além disso, ela impede que as bactérias formem biofilmes resistentes no muco.', es: 'ANTIBIÓTICO TURBINADO (Sinergismo Comprobado): Al igual que la bromhexina, la Erdosteína aumenta increíblemente la concentración de Amoxicilina en los bronquios. Además, impide que las bacterias formen biopelículas en el moco.' }
      }
    },

    /* ── DORNASE ALFA ───────────────────────────────────────────────────── */
    "dornase_alfa": {
      name: { pt: 'Dornase Alfa (DNase I Recombinante Humana)', es: 'Dornasa Alfa' },
      category: 'pneumologia',
      class: { pt: 'Mucolítico Enzimático Específico', es: 'Mucolítico Enzimático Específico' },
      indications: {
        pt: ['Fibrose Cística (Mucoviscidose) severa, para fluidificar a secreção pulmonar asfixiante'],
        es: ['Fibrosis Quística (Mucoviscidosis) severa, para fluidificar la secreción pulmonar asfixiante']
      },
      commercialNames: { br: ['Pulmozyme'], ar: ['Pulmozyme'] },
      presentation: { pt: ['Ampolas para inalação (nebulização) 2,5 mg/2,5 mL'], es: ['Ampollas para inhalación (nebulización) 2,5 mg/2,5 mL'] },
      mechanism: {
        pt: 'A biotecnologia salvadora da Fibrose Cística. Nos pacientes com a doença, milhões de neutrófilos do sistema imune morrem no pulmão tentando combater infecções. Quando eles morrem, eles "vomitam" todo o seu DNA (material genético) no catarro do paciente, formando uma "teia de aranha" de DNA que deixa o catarro duro como cimento. A Dornase Alfa é uma enzima genética sintética (uma tesoura de DNA) inalada que "pica" esse DNA neutrofílico do catarro, liquefazendo o cimento e salvando a respiração.',
        es: 'En pacientes con la enfermedad, millones de neutrófilos mueren en el pulmón. Cuando mueren, "vomitan" su ADN en el catarro, formando una "telaraña" de ADN que deja el moco duro como cemento. La Dornasa Alfa es una enzima genética inalada que "pica" ese ADN del catarro, licuando el cemento.'
      },
      dose: {
        adult: {
          pt: '2,5 mg em nebulização inalatória UMA VEZ ao dia. (Pacientes muito graves > 21 anos podem fazer a cada 12h).',
          es: '2,5 mg en nebulización inhalatoria UNA VEZ al día. (Pacientes muy graves > 21 años pueden hacer cada 12h).'
        },
        pediatric: {
          pt: 'Acima de 5 anos: 2,5 mg UMA VEZ ao dia por nebulização.',
          es: 'Por encima de 5 años: 2,5 mg UNA VEZ al día por nebulización.'
        }
      },
      administration: { pt: ['REGRAS RÍGIDAS DE USO: O medicamento deve ficar na GELADEIRA e protegido da luz intensa. NÃO PODE SER DILUÍDO (não adicionar soro) nem misturado com nenhum outro remédio no copo. Deve ser usado com um "nebulizador compressor a jato" apropriado (nebulizadores ultrassônicos destroem a enzima).'], es: ['REGLAS RÍGIDAS: El medicamento debe estar en la NEVERA. NO PUEDE SER DILUIDO ni mezclado. Debe usarse con un "nebulizador compresor" apropiado (nebulizadores ultrasónicos destruyen la enzima).'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente inalatória intrapulmonar.', es: 'Acción puramente inhalatoria intrapulmonar.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica relevante.', es: 'Sin absorción sistémica relevante.' } },
      commonAdverseEffects: { pt: ['Alteração severa da voz (Rouquidão ou afonia passageira)', 'Faringite e irritação da garganta profunda', 'Erupção cutânea'], es: ['Alteración severa de la voz (Ronquera o afonía pasajera)', 'Faringitis e irritación de la garganta profunda', 'Erupción cutánea'] },
      dangerousAdverseEffects: { pt: ['Dispneia leve a moderada paradoxal', 'Dor torácica (pleurítica) intensa'], es: ['Disnea leve a moderada paradójica', 'Dolor torácico (pleurítico) intenso'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave à dornase alfa ou a produtos de ovário de hamster chinês (células CHO onde a enzima é criada em laboratório)'], es: ['Hipersensibilidad grave a dornasa alfa o a productos de ovario de hámster chino'] },
        relative: { pt: ['Pneumonias comuns não associadas à Fibrose Cística (O remédio não faz efeito e custa milhares de reais, é inútil no catarro comum de gripe).'], es: ['Neumonías comunes no asociadas a Fibrosis Quística (Es inútil en el catarro común de gripe).'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MEDICAÇÃO TÉRMICA BIOLÓGICA: Sendo uma proteína enzimática viva, se o frasco da Dornase ficar fora da geladeira por mais de 24h, a enzima desnatura completamente e a inalação vira água inútil.', es: 'MEDICACIÓN TÉRMICA BIOLÓGICA: Siendo una proteína enzimática viva, si el vial queda fuera de la nevera por más de 24h, la enzima se desnaturaliza completamente y la inhalación se vuelve agua inútil.' }
      }
    },

    /* ── DEXTROMETORFANO ────────────────────────────────────────────────── */
    "dextrometorfano": {
      name: { pt: 'Dextrometorfano', es: 'Dextrometorfano' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Central (Derivado não-opioide do Levorfanol)', es: 'Antitusivo Central (Derivado no opioide del Levorfanol)' },
      indications: {
        pt: ['Tosse SECA, irritativa e não produtiva (Gripes, irritações alérgicas ou pós-infecção viral severa)'],
        es: ['Tos SECA, irritativa y no productiva (Gripes, irritaciones alérgicas o posinfección viral severa)']
      },
      commercialNames: { br: ['Benalet (Assoc)', 'Novalgina Tosse', 'Vick Xarope'], ar: ['Romilar'] },
      presentation: { pt: ['Xaropes e Gotas Orais (Frequentemente associado a antialérgicos ou dipirona)'], es: ['Nuevos jarabes y gotas (Frecuentemente asociado a antialérgicos o dipirona)'] },
      mechanism: {
        pt: 'Atua diretamente no "Centro da Tosse" localizado no Bulbo (Tronco encefálico), elevando o limiar neurológico necessário para deflagrar o reflexo de tosse. Ele é um poderoso ANTAGONISTA DO RECEPTOR NMDA no cérebro e agonista dos receptores sigma-1. Quimicamente é parecido com os opioides, mas não se liga aos receptores mu/kappa (não tira a dor e não deprime a respiração).',
        es: 'Actúa directamente en el "Centro de la Tos" en el Bulbo, elevando el umbral neurológico de la tos. Es un poderoso ANTAGONISTA DEL RECEPTOR NMDA en el cerebro y agonista sigma-1. Químicamente es parecido a los opioides, pero no deprime la respiración.'
      },
      dose: {
        adult: {
          pt: '10 mg a 30 mg via oral a cada 4 ou 8 horas. Máximo de 120 mg/dia.',
          es: '10 mg a 30 mg vía oral cada 4 o 8 horas. Máximo de 120 mg/día.'
        },
        pediatric: {
          pt: '6 a 12 anos: 5 a 15 mg a cada 4 horas (Máximo 60 mg/dia). Contraindicado rotineiramente em crianças < 2 anos.',
          es: '6 a 12 años: 5 a 15 mg cada 4 horas (Máximo 60 mg/día). Contraindicado en niños < 2 años.'
        }
      },
      administration: { pt: ['Doses exageradas não aumentam o controle da tosse, apenas o risco de efeitos no sistema nervoso central.'], es: ['Dosis exageradas no aumentan el control de la tos, solo el riesgo de efectos en el sistema nervioso central.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito em insuficiência renal.', es: 'Sin necesidad de ajuste estricto en insuficiencia renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose descompensada ou reduzir agressivamente a dose.', es: 'Evitar en cirrosis descompensada o reducir agresivamente la dosis.' } },
      commonAdverseEffects: { pt: ['Sonolência leve', 'Tontura (vertigem) e excitação leve paradoxal', 'Constipação moderada'], es: ['Somnolencia leve', 'Mareo (vértigo) y excitación leve paradójica', 'Constipación moderada'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME SEROTONINÉRGICA FATAL (se combinado com antidepressivos)', 'Alucinações e Delírios Psicodélicos profundos (se usado como droga de abuso recreativo em doses ultra-altas - "Robotripping")'], es: ['SÍNDROME SEROTONINÉRGICO FATAL (si combinado con antidepresivos)', 'Alucinaciones y Delirios Psicodélicos profundos (si se usa como droga de abuso recreativo - "Robotripping")'] },
      contraindications: {
        absolute: { pt: ['Tosse PRODUTIVA com expectoração excessiva (Risco de afogamento pulmonar)', 'Uso concomitante com inibidores da MAO (Morte por colapso autonômico)'], es: ['Tos PRODUCTIVA con expectoración excesiva (Riesgo de ahogamiento pulmonar)', 'Uso concomitante con inhibidores de la MAO (Muerte por colapso autonómico)'] },
        relative: { pt: ['Asma brônquica aguda', 'Depressão respiratória pré-existente'], es: ['Asma bronquial aguda', 'Depresión respiratoria preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A MAIOR CONTRAINDICAÇÃO DA PNEUMOLOGIA: Jamais deprima o centro da tosse de um paciente com infecção bacteriana, DPOC ou catarro abundante. Tossir salva a vida do doente. Dar Dextrometorfano para o pulmão "cheio" vai travar o catarro lá dentro e induzir uma asfixia purulenta letal.', es: 'LA MAYOR CONTRAINDICACIÓN: Jamás deprima el centro de la tos de un paciente con infección bacteriana o catarro abundante. Toser salva la vida. Dar Dextrometorfano para un pulmón "lleno" trabará el catarro e inducirá asfixia.' }
      }
    },

    /* ── LEVODROPROPIZINA ───────────────────────────────────────────────── */
    "levodropropizina": {
      name: { pt: 'Levodropropizina', es: 'Levodropropizina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno de Ação Periférica', es: 'Antitusivo de Acción Periférica' },
      indications: {
        pt: ['Tosse seca, irritativa e não produtiva de qualquer origem (viral, alérgica, inflamatória)'],
        es: ['Tos seca, irritativa y no productiva de cualquier origen (viral, alérgica, inflamatoria)']
      },
      commercialNames: { br: ['Antux'], ar: ['Levotuss'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL', 'Gotas'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL', 'Gotas'] },
      mechanism: {
        pt: 'A grande evolução do tratamento da tosse. Diferente da Codeína ou Dextrometorfano (que agem no cérebro e causam sono/dependência), a Levodropropizina atua DIRETAMENTE no pulmão. Ela "anestesia" e modula as Fibras-C aferentes nas vias respiratórias. Ou seja, ela desliga o sensor que avisa ao cérebro que há uma irritação, parando a tosse sem alterar o sistema nervoso central.',
        es: 'La gran evolución del tratamiento de la tos. A diferencia de la Codeína (que actúa en el cerebro y causa sueño), la Levodropropizina actúa DIRECTAMENTE en el pulmón. "Anestesia" y modula las Fibras-C aferentes en las vías respiratorias. Apaga el sensor que avisa al cerebro de la irritación, sin alterar el SNC.'
      },
      dose: {
        adult: {
          pt: '60 mg (10 mL do xarope adulto) via oral a cada 8 horas.',
          es: '60 mg (10 mL del jarabe adulto) vía oral cada 8 horas.'
        },
        pediatric: {
          pt: 'Crianças > 2 anos: 1 mg/kg/dose a cada 8 horas.',
          es: 'Niños > 2 años: 1 mg/kg/dosis cada 8 horas.'
        }
      },
      administration: { pt: ['Administrar preferencialmente entre as refeições (estômago vazio otimiza absorção).'], es: ['Administrar preferentemente entre las comidas (estómago vacío optimiza absorción).'] },
      renalAdjustment: { required: true, message: { pt: 'Precaução em falência renal grave (ClCr < 35 mL/min), aumentar intervalo.', es: 'Precaución en falla renal grave (ClCr < 35 mL/min), aumentar intervalo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Náuseas e desconforto epigástrico leve', 'Cansaço passageiro'], es: ['Náuseas y malestar epigástrico leve', 'Cansancio pasajero'] },
      dangerousAdverseEffects: { pt: ['Reações de hipersensibilidade alérgica (raras)'], es: ['Reacciones de hipersensibilidad alérgica (raras)'] },
      contraindications: {
        absolute: { pt: ['Tosse PRODUTIVA (com catarro abundante)', 'Crianças menores de 2 anos', 'Hipersecreção brônquica ou Síndrome de Kartagener'], es: ['Tos PRODUCTIVA (con catarro abundante)', 'Niños menores de 2 años', 'Hipersecreción bronquial o Síndrome de Kartagener'] },
        relative: { pt: ['Pacientes com disfunção mucociliar severa'], es: ['Pacientes con disfunción mucociliar severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ANTITUSSÍGENO SEGURO: Por não deprimir o cérebro, é a droga de eleição na pediatria e geriatria para tossinha chata de pós-gripe que não deixa o paciente dormir, sem o risco de parar a respiração do doente.', es: 'EL ANTITUSIVO SEGURO: Al no deprimir el cerebro, es la droga de elección en pediatría y geriatría para tos molesta de posgripe, sin el riesgo de parar la respiración del paciente.' }
      }
    },

    /* ── DROPROPIZINA ───────────────────────────────────────────────────── */
    "dropropizina": {
      name: { pt: 'Dropropizina', es: 'Dropropizina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno de Ação Periférica', es: 'Antitusivo de Acción Periférica' },
      indications: {
        pt: ['Tosse seca irritativa não-produtiva'],
        es: ['Tos seca irritativa no productiva']
      },
      commercialNames: { br: ['Atossion', 'Dropropizina'], ar: ['Dropropizina'] },
      presentation: { pt: ['Xarope Adulto 30 mg/5 mL', 'Xarope Pediátrico 15 mg/5 mL'], es: ['Jarabe Adulto 30 mg/5 mL', 'Jarabe Pediátrico 15 mg/5 mL'] },
      mechanism: {
        pt: 'Molécula original "racêmica" da qual a levodropropizina foi extraída. Tem exatamente o mesmo mecanismo (bloqueio de receptores de estiramento nas vias aéreas). A diferença é que, por não ser purificada (possui as formas D e L da molécula), tem um risco ligeiramente maior de causar sonolência do que a sua sucessora.',
        es: 'Molécula original "racémica" de la que se extrajo la levodropropizina. Tiene exactamente el mismo mecanismo (bloqueo periférico). La diferencia es que, al no ser purificada, tiene un riesgo ligeramente mayor de causar somnolencia.'
      },
      dose: {
        adult: {
          pt: '30 mg (1 copo-medida) via oral a cada 6 ou 8 horas.',
          es: '30 mg (1 vaso-medida) vía oral cada 6 u 8 horas.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 12 anos: 0,5 a 1 mg/kg/dose a cada 8 horas.',
          es: 'Niños de 2 a 12 años: 0,5 a 1 mg/kg/dosis cada 8 horas.'
        }
      },
      administration: { pt: ['Via oral. Não deve ser usado por mais de 5 a 7 dias seguidos sem investigação da causa da tosse.'], es: ['Vía oral. No debe usarse por más de 5 a 7 días seguidos sin investigación de la causa de la tos.'] },
      renalAdjustment: { required: false, message: { pt: 'Ajuste empírico em insuficiência renal grave (aumentar intervalo).', es: 'Ajuste empírico en insuficiencia renal grave (aumentar intervalo).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolismo hepático severo exige cautela na cirrose.', es: 'Metabolismo hepático severo exige cautela en cirrosis.' } },
      commonAdverseEffects: { pt: ['Sonolência leve a moderada', 'Náuseas'], es: ['Somnolencia leve a moderada', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Hipotensão em doses suprafarmacológicas'], es: ['Hipotensión en dosis suprafarmacológicas'] },
      contraindications: {
        absolute: { pt: ['Tosse produtiva', 'Crianças < 2 anos'], es: ['Tos productiva', 'Niños < 2 años'] },
        relative: { pt: ['Glaucoma', 'Pacientes idosos frágeis com histórico de quedas (pela leve sedação)'], es: ['Glaucoma', 'Pacientes ancianos frágiles con historial de caídas (por leve sedación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Evite a mistura de fórmulas: Por ser muito comum e barato, muitos pacientes tomam xaropes com Dropropizina junto com antialérgicos orais (Loratadina/Dexclorfeniramina). A soma dos efeitos pode deixar o paciente muito sonolento durante o dia.', es: 'Evite la mezcla de fórmulas: Por ser muy común, muchos pacientes toman Dropropizina junto con antialérgicos orales. La suma de los efectos puede dejar al paciente muy somnoliento durante el día.' }
      }
    },

    /* ── CLOPERASTINA ───────────────────────────────────────────────────── */
    "cloperastina": {
      name: { pt: 'Cloperastina', es: 'Cloperastina' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Misto (Ação Central e Periférica)', es: 'Antitusivo Mixto (Acción Central y Periférica)' },
      indications: {
        pt: ['Tosse seca de predomínio noturno', 'Tosse de origem alérgica (por sua atividade anti-histamínica associada)'],
        es: ['Tos seca de predominio nocturno', 'Tos de origen alérgico (por su actividad antihistamínica asociada)']
      },
      commercialNames: { br: ['Seki'], ar: ['Sek'] },
      presentation: { pt: ['Xarope 3,54 mg/mL', 'Suspensão/Gotas'], es: ['Jarabe 3,54 mg/mL', 'Suspensión/Gotas'] },
      mechanism: {
        pt: 'Fármaco de "Duplo Combate". Ele age no Centro da Tosse no cérebro (inibindo o espasmo) e possui um bloqueio Anti-histamínico H1 e espasmolítico nos brônquios. É perfeito para aquela tosse seca que ataca quando o paciente deita na cama para dormir e a alergia/coriza escorre pela garganta (Gotejamento Pós-Nasal).',
        es: 'Fármaco de "Doble Combate". Actúa en el Centro de la Tos en el cerebro y posee un bloqueo Antihistamínico H1 y espasmolítico en los bronquios. Es perfecto para aquella tos seca que ataca cuando el paciente se acuesta para dormir y la alergia escurre por la garganta (Goteo Posnasal).'
      },
      dose: {
        adult: {
          pt: '10 mL (1 copo-medida) via oral, 3 vezes ao dia.',
          es: '10 mL (1 vaso-medida) vía oral, 3 veces al día.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 12 anos: 0,5 a 1 mg/kg/dia divididos em 3 tomadas.',
          es: 'Niños de 2 a 12 años: 0,5 a 1 mg/kg/día divididos en 3 tomas.'
        }
      },
      administration: { pt: ['Via oral. Ideal se administrado à noite antes de dormir devido ao seu leve efeito sedativo benéfico.'], es: ['Vía oral. Ideal si administrado a la noche antes de dormir debido a su leve efecto sedante benéfico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado no fígado, precaução na cirrose.', es: 'Metabolizado en hígado, precaución en cirrosis.' } },
      commonAdverseEffects: { pt: ['Sonolência (efeito do bloqueio H1)', 'Boca seca', 'Tontura leve'], es: ['Somnolencia (efecto del bloqueo H1)', 'Boca seca', 'Mareo leve'] },
      dangerousAdverseEffects: { pt: ['Retenção urinária (em pacientes com hiperplasia prostática devido ao efeito anticolinérgico)'], es: ['Retención urinaria (en pacientes con hiperplasia prostática debido al efecto anticolinérgico)'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos', 'Tosse associada à asma descompensada ou produtiva abundante'], es: ['Niños menores de 2 años', 'Tos asociada al asma descompensada o productiva abundante'] },
        relative: { pt: ['Glaucoma', 'Idosos com demência avançada (risco de delírio anticolinérgico)'], es: ['Glaucoma', 'Ancianos con demencia avanzada (riesgo de delirio anticolinérgico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SEDAÇÃO INTENCIONAL: Como tem efeito anti-histamínico, a Cloperastina "dá um soninho". Oriente pacientes adultos a terem cautela ao operar máquinas pesadas ou dirigir após tomarem a dose da manhã.', es: 'SEDACIÓN INTENCIONAL: Como tiene efecto antihistamínico, la Cloperastina "da un sueñito". Oriente a pacientes adultos a tener precaución al operar máquinas pesadas tras la dosis de la mañana.' }
      }
    },

    /* ── BUTAMIRATO ─────────────────────────────────────────────────────── */
    "butamirato": {
      name: { pt: 'Butamirato (Citrato de)', es: 'Butamirato (Citrato de)' },
      category: 'pneumologia',
      class: { pt: 'Antitussígeno Central Não-Opioide', es: 'Antitusivo Central No Opioide' },
      indications: {
        pt: ['Tosse seca aguda (frequentemente usado no período pré e pós-operatório ou laringoscopia para suprimir reflexo tossígeno)'],
        es: ['Tos seca aguda (frecuentemente usado en periodo pre y posoperatorio o laringoscopia para suprimir reflejo tusígeno)']
      },
      commercialNames: { br: ['Sintocalmy', 'Besedan'], ar: ['Sintus'] },
      presentation: { pt: ['Xarope 1,5 mg/mL', 'Gotas 5 mg/mL'], es: ['Jarabe 1,5 mg/mL', 'Gotas 5 mg/mL'] },
      mechanism: {
        pt: 'Atua no sistema nervoso central para inibir a tosse, mas é química e farmacologicamente totalmente diferente dos alcaloides opioides (como a codeína). Além de parar a tosse no bulbo, ele possui um efeito broncoespasmolítico leve adicional (ajuda a dar uma pequena relaxada no brônquio) e reduz a resistência das vias aéreas.',
        es: 'Actúa en el sistema nervioso central para inhibir la tos, pero es química y farmacológicamente diferente a los opioides (como la codeína). Además de parar la tos en el bulbo, posee un efecto broncoespasmolítico leve adicional y reduce la resistencia de las vías respiratorias.'
      },
      dose: {
        adult: {
          pt: 'Xarope: 15 mL (1 copo) 3 a 4 vezes ao dia.',
          es: 'Jarabe: 15 mL (1 vaso) 3 a 4 veces al día.'
        },
        pediatric: {
          pt: '3 a 6 anos: 5 mL 3x/dia. 6 a 12 anos: 10 mL 3x/dia.',
          es: '3 a 6 años: 5 mL 3x/día. 6 a 12 años: 10 mL 3x/día.'
        }
      },
      administration: { pt: ['Via oral pura. Não deve ser usado por longos períodos (máximo 7 dias).'], es: ['Vía oral pura. No debe ser usado por largos periodos (máximo 7 días).'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração renal de metabólitos inativos. Sem necessidade de ajuste agressivo.', es: 'Depuración renal de metabolitos inactivos. Sin necesidad de ajuste agresivo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico agudo.', es: 'Sin necesidad de ajuste clínico agudo.' } },
      commonAdverseEffects: { pt: ['Sonolência passageira', 'Vertigem', 'Exantema (vermelhidão na pele)'], es: ['Somnolencia pasajera', 'Vértigo', 'Exantema (enrojecimiento de la piel)'] },
      dangerousAdverseEffects: { pt: ['Hipotensão (se superdosagem)'], es: ['Hipotensión (si sobredosis)'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Primeiro Trimestre) e Lactação', 'Tosse Produtiva intensa'], es: ['Embarazo (Primer Trimestre) y Lactancia', 'Tos Productiva intensa'] },
        relative: { pt: ['Nenhuma expressiva dentro da dose segura'], es: ['Ninguna expresiva dentro de la dosis segura'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A grande vantagem do Butamirato sobre a Codeína/Dextrometorfano é a ausência absoluta de depressão respiratória. Pode ser usado com segurança em pacientes com pulmões limite (asma leve) que desenvolveram tosse irritativa por mudança de tempo.', es: 'La gran ventaja del Butamirato sobre Codeína es la ausencia absoluta de depresión respiratoria. Puede ser usado con seguridad en pacientes con asma leve que desarrollaron tos irritativa por cambio de tiempo.' }
      }
    },

    /* ── LORATADINA ─────────────────────────────────────────────────────── */
    "loratadina": {
      name: { pt: 'Loratadina', es: 'Loratadina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração (Não Sedativo)', es: 'Antihistamínico H1 de 2ª Generación (No Sedante)' },
      indications: {
        pt: ['Rinite alérgica sazonal e perene', 'Urticária crônica idiopática', 'Alívio rápido de coceira, espirros e coriza nasal'],
        es: ['Rinitis alérgica estacional y perenne', 'Urticaria crónica idiopática', 'Alivio rápido de picor, estornudos y secreción nasal']
      },
      commercialNames: { br: ['Claritin', 'Loratamed'], ar: ['Aerotina'] },
      presentation: { pt: ['Comprimidos 10 mg', 'Xarope 1 mg/mL'], es: ['Comprimidos 10 mg', 'Jarabe 1 mg/mL'] },
      mechanism: {
        pt: 'Bloqueador potente, de longa duração e EXTREMAMENTE SELETIVO dos receptores periféricos de Histamina (H1). Como a molécula foi desenhada para ser "gorda e grande", ela NÃO CONSEGUE atravessar a Barreira Hematoencefálica. Ou seja, ela bloqueia a alergia na pele, nariz e pulmão, mas não atinge o cérebro (logo, não dá sono na esmagadora maioria dos pacientes).',
        es: 'Bloqueador potente, de larga duración y EXTREMADAMENTE SELECTIVO de los receptores periféricos de Histamina (H1). Como la molécula fue diseñada para ser "gorda y grande", NO LOGRA atravesar la Barrera Hematoencefálica. Es decir, bloquea la alergia, pero no alcanza el cerebro (no da sueño en la mayoría de los pacientes).'
      },
      dose: {
        adult: {
          pt: '10 mg via oral UMA VEZ ao dia.',
          es: '10 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: '2 a 12 anos (< 30 kg): 5 mg (5 mL) 1x ao dia. Acima de 30 kg: 10 mg (10 mL) 1x ao dia.',
          es: '2 a 12 años (< 30 kg): 5 mg (5 mL) 1x al día. Por encima de 30 kg: 10 mg (10 mL) 1x al día.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos. Efeito dura 24 horas.'], es: ['Puede ser tomado con o sin alimentos. Efecto dura 24 horas.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min: Dar a dose de 10 mg em dias alternados (1 dia sim, 1 dia não).', es: 'Si ClCr < 30 mL/min: Dar la dosis de 10 mg en días alternos (1 día sí, 1 día no).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em insuficiência hepática grave, usar 10 mg em dias alternados.', es: 'En insuficiencia hepática grave, usar 10 mg en días alternos.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Boca seca leve (xerostomia)', 'Fadiga residual (em menos de 4% dos pacientes)'], es: ['Cefalea', 'Boca seca leve (xerostomía)', 'Fatiga residual (en menos de 4% de los pacientes)'] },
      dangerousAdverseEffects: { pt: ['Nenhum efeito sistêmico vital comum. Muito segura em sobredosagem acidental.'], es: ['Ningún efecto sistémico vital común. Muy segura en sobredosis accidental.'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos componentes da fórmula'], es: ['Hipersensibilidad grave a los componentes de la fórmula'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Pode aumentar o nível da loratadina, embora sem consequências fatais como nos de 1ª geração)'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Puede aumentar el nivel de la loratadina, aunque sin consecuencias fatales)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'FIM DO SONO: É o antialérgico ideal para motoristas, pilotos e trabalhadores diurnos. Diferente da Prometazina ou Dexclorfeniramina (Polaramine) que "desmaiam" o paciente de sono, a Loratadina permite a cura da coriza mantendo a vigilância intacta.', es: 'FIN DEL SUEÑO: Es el antialérgico ideal para conductores y trabajadores. A diferencia de la Prometazina que "desmaya" al paciente de sueño, la Loratadina permite curar la coriza manteniendo la vigilancia intacta.' }
      }
    },


    /* ── BUILD 397 — Associações Inalatórias: ICS/LABA + LAMA/LABA ── */

    "beclometasona_formoterol": {
      name: { pt: 'Beclometasona + Formoterol', es: 'Beclometasona + Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Agonista Beta-2 (ICS/LABA)', es: 'Asociación Corticosteroide Inhalatorio + Agonista Beta-2 (ICS/LABA)' },
      indications: {
        pt: ['Estratégia MART (Manutenção e Resgate da Asma) - Droga Ouro GINA', 'Manutenção crônica da DPOC severa'],
        es: ['Estrategia MART (Mantenimiento y Rescate del Asma) - Droga Oro GINA', 'Mantenimiento crónico de la EPOC severa']
      },
      commercialNames: { br: ['Fostair'], ar: ['Foster'] },
      presentation: { pt: ['Spray Inalatório HFA 100/6 mcg e 200/6 mcg por jato', 'Pó Inalatório (NEXThaler)'], es: ['Spray Inhalatorio HFA 100/6 mcg y 200/6 mcg por puff', 'Polvo Inhalatorio (NEXThaler)'] },
      mechanism: {
        pt: 'Uma obra de arte da nanotecnologia. A formulação HFA desta associação cria partículas "extrafinas". Enquanto as bombinhas comuns ficam presas na garganta e grandes brônquios, essa medicação penetra profundamente nas "pequenas vias aéreas" (bronquíolos distais), que são o epicentro silencioso da inflamação asmática. O formoterol abre o caminho em 3 minutos, e a beclometasona extrafina apaga o fogo pulmonar profundo.',
        es: 'Una obra de arte de la nanotecnología. La formulación HFA crea partículas "extrafinas". Mientras los inhaladores comunes se atascan en la garganta, esta medicación penetra profundamente en las "pequeñas vías aéreas" (bronquiolos distales). El formoterol abre el camino en 3 minutos, y la beclometasona apaga el fuego.'
      },
      dose: {
        adult: {
          pt: 'Asma (Manutenção): 1 a 2 inalações a cada 12 horas. Asma (MART Resgate): 1 jato extra sob demanda na crise (Máx 8 jatos/dia).',
          es: 'Asma (Mantenimiento): 1 a 2 inhalaciones cada 12 horas. Asma (MART Rescate): 1 puff extra a demanda en la crisis (Máx 8 puffs/día).'
        },
        pediatric: {
          pt: 'Não recomendado rotineiramente < 18 anos na formulação extrafina, embora uso off-label especializado exista.',
          es: 'No recomendado rutinariamente < 18 años en formulación extrafina, aunque existe uso off-label especializado.'
        }
      },
      administration: { pt: ['Higiene oral rigorosa após o uso para evitar candidíase. Quando usado em spray (HFA), recomenda-se uso de espaçador para otimizar ainda mais o depósito.'], es: ['Higiene oral rigurosa tras el uso para evitar candidiasis. Cuando se usa en spray (HFA), se recomienda uso de espaciador.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ajuste mínimo, metabolismo local pulmonar elevado.', es: 'Ajuste mínimo, metabolismo local pulmonar elevado.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea', 'Tremores (pelo formoterol) e palpitação', 'Disfonia'], es: ['Candidiasis orofaríngea', 'Temblores (por formoterol) y palpitación', 'Disfonía'] },
      dangerousAdverseEffects: { pt: ['Pneumonia em idosos com DPOC', 'Hipocalemia (se abuso de resgates)'], es: ['Neumonía en ancianos con EPOC', 'Hipopotasemia (si abuso de rescates)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave aos ativos'], es: ['Hipersensibilidad grave a los activos'] },
        relative: { pt: ['Cardiopatias descompensadas (limitar os jatos de resgate)'], es: ['Cardiopatías descompensadas (limitar los puffs de rescate)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE DOSE: Como a partícula é extrafina e chega 100% ao pulmão, 100 mcg de Beclometasona extrafina equivalem à força de 250 mcg da Beclometasona comum (Clenil). Nunca dobre a dose achando que "100 é pouco".', es: 'ALERTA DE DOSIS: Como la partícula es extrafina, 100 mcg de Beclometasona extrafina equivalen a la fuerza de 250 mcg de Beclometasona común. Nunca doble la dosis creyendo que "100 es poco".' }
      }
    },

    "fluticasona_salmeterol": {
      name: { pt: 'Fluticasona + Salmeterol', es: 'Fluticasona + Salmeterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Agonista Beta-2 (ICS/LABA)', es: 'Asociación Corticosteroide Inhalatorio + Agonista Beta-2 (ICS/LABA)' },
      indications: {
        pt: ['Tratamento de MANUTENÇÃO (Prevenção) da Asma Crônica', 'Tratamento de DPOC grave com exacerbações'],
        es: ['Tratamiento de MANTENIMIENTO (Prevención) del Asma Crónica', 'Tratamiento de EPOC grave con exacerbaciones']
      },
      commercialNames: { br: ['Seretide'], ar: ['Seretide'] },
      presentation: { pt: ['Spray Inalatório 50/25, 125/25, 250/25 mcg', 'Pó inalatório (Diskus) 100/50, 250/50, 500/50 mcg'], es: ['Spray Inhalatorio 50/25, 125/25, 250/25 mcg', 'Polvo inhalatorio (Diskus) 100/50, 250/50, 500/50 mcg'] },
      mechanism: {
        pt: 'A associação pioneira mais famosa do mundo. A Fluticasona é um corticoide potente que fica "grudado" no pulmão agindo por 12 horas. O Salmeterol é um broncodilatador de cauda longa que mantém as vias aéreas abertas por 12 horas. O grande detalhe clínico: o Salmeterol demora meia hora para abrir o brônquio. Logo, essa bombinha não serve para crise aguda de sufocamento.',
        es: 'La asociación pionera más famosa del mundo. La Fluticasona es un corticoide potente que queda "pegado" en el pulmón. El Salmeterol es un broncodilatador de cola larga que mantiene las vías abiertas por 12 horas. El gran detalle clínico: el Salmeterol tarda media hora en abrir el bronquio. Luego, este inhalador no sirve para crisis aguda.'
      },
      dose: {
        adult: {
          pt: 'Spray: 2 jatos a cada 12 horas. Diskus: 1 inalação a cada 12 horas.',
          es: 'Spray: 2 puffs cada 12 horas. Diskus: 1 inhalación cada 12 horas.'
        },
        pediatric: {
          pt: 'Acima de 4 anos: Spray 50/25 mcg (2 jatos 12/12h) ou Diskus 100/50 (1 inalação 12/12h).',
          es: 'Por encima de 4 años: Spray 50/25 mcg (2 puffs 12/12h) o Diskus 100/50 (1 inhalación 12/12h).'
        }
      },
      administration: { pt: ['Lavagem orofaríngea rigorosa após uso. JAMAIS aumentar as doses ou intervalos por conta própria na crise.'], es: ['Lavado orofaríngeo riguroso tras uso. JAMÁS aumentar las dosis o intervalos por cuenta propia en la crisis.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade.', es: 'Sin necesidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'O metabolismo da fluticasona engolida depende 100% do fígado. Cautela severa em cirrose descompensada.', es: 'El metabolismo de la fluticasona tragada depende 100% del hígado. Cautela severa en cirrosis descompensada.' } },
      commonAdverseEffects: { pt: ['Candidíase oral e rouquidão (A Fluticasona é o ICS que mais causa isso pela sua alta lipofilicidade nas cordas vocais)', 'Cefaleia'], es: ['Candidiasis oral y ronquera (La Fluticasona es el ICS que más causa esto por su alta lipofilicidad en las cuerdas vocales)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Pneumonia em DPOC', 'Crise asmática fatal por uso errado como resgate'], es: ['Neumonía en EPOC', 'Crisis asmática fatal por uso erróneo como rescate'] },
      contraindications: {
        absolute: { pt: ['Alívio imediato do broncoespasmo agudo (Status Asthmaticus)'], es: ['Alivio inmediato del broncoespasmo agudo (Status Asthmaticus)'] },
        relative: { pt: ['Pacientes com infecção oral/fúngica ativa', 'Uso de Inibidores de Protease do HIV (Ritonavir)'], es: ['Pacientes con infección oral/fúngica activa', 'Uso de Inhibidores de Proteasa del VIH (Ritonavir)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DIFERENÇA VITAL: O paciente DEVE ENTENDER a diferença entre "Manutenção" e "Resgate". O Seretide (Salmeterol) NÃO É MART. Se ele tiver falta de ar e puxar o Seretide, a droga vai demorar 30 minutos para agir, tempo suficiente para morrer asfixiado. O paciente PRECISA ter um Salbutamol separado no bolso.', es: 'DIFERENCIA VITAL: El paciente DEBE ENTENDER la diferencia entre "Mantenimiento" y "Rescate". Seretide NO ES MART. Si tiene falta de aire y usa Seretide, tardará 30 min en actuar. El paciente NECESITA tener un Salbutamol separado.' }
      }
    },

    "fluticasona_vilanterol": {
      name: { pt: 'Fluticasona (Furoato) + Vilanterol', es: 'Fluticasona (Furoato) + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Associação Corticosteroide Inalatório + Ultra-LABA (ICS/LABA de Ação Ultra-Longa)', es: 'Asociación Corticosteroide Inhalatorio + Ultra-LABA (ICS/LABA de Acción Ultra Larga)' },
      indications: {
        pt: ['Asma em adultos e adolescentes a partir de 12 anos', 'Doença Pulmonar Obstrutiva Crônica (DPOC) em pacientes que exigem combo ICS/LABA'],
        es: ['Asma en adultos y adolescentes a partir de 12 años', 'Enfermedad Pulmonar Obstructiva Crónica (EPOC) en pacientes que exigen combo ICS/LABA']
      },
      commercialNames: { br: ['Relvar Ellipta'], ar: ['Relvar'] },
      presentation: { pt: ['Pó Inalatório (Dispositivo Ellipta) 100/22 mcg e 200/22 mcg'], es: ['Polvo Inhalatorio (Dispositivo Ellipta) 100/22 mcg y 200/22 mcg'] },
      mechanism: {
        pt: 'A evolução máxima para os esquecidos. A mudança química de "Propionato" para "Furoato" de Fluticasona fez com que o corticoide ficasse ativo por incríveis 24 horas ininterruptas. Somado ao Vilanterol (Ultra-LABA de 24 horas), esta caneta fornece o tratamento basal inteiro de um dia com um único clique e inalação. Aumentou a adesão do paciente drasticamente.',
        es: 'La evolución máxima para los olvidadizos. El cambio químico de "Propionato" a "Furoato" hizo que el corticoide quede activo por increíbles 24 horas. Sumado al Vilanterol (Ultra-LABA), esta pluma provee el tratamiento basal entero de un día con un solo clic.'
      },
      dose: {
        adult: {
          pt: '1 inalação (100/22 ou 200/22 mcg) UMA VEZ ao dia, sempre na mesma hora do dia.',
          es: '1 inhalación (100/22 o 200/22 mcg) UNA VEZ al día, siempre a la misma hora del día.'
        },
        pediatric: {
          pt: 'Adolescentes > 12 anos: 1 inalação de 100/22 mcg UMA VEZ ao dia.',
          es: 'Adolescentes > 12 años: 1 inhalación de 100/22 mcg UNA VEZ al día.'
        }
      },
      administration: { pt: ['Abra o bocal, inspire fortemente e feche. Não é necessário segurar a respiração de forma asfixiante, mas profunda. Lavar a boca e bochecho obrigatórios.'], es: ['Abra la boquilla, inspire fuertemente y cierre. Lavar la boca y enjuague obligatorios.'] },
      renalAdjustment: { required: false, message: { pt: 'Nenhum ajuste sistêmico requerido.', es: 'Ningún ajuste sistémico requerido.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com doença hepática moderada ou grave não devem ultrapassar a dose de 100/22 mcg/dia (risco de supressão adrenal sistêmica pela fluticasona).', es: 'Pacientes con enfermedad hepática moderada/grave no deben superar dosis de 100/22 mcg/día.' } },
      commonAdverseEffects: { pt: ['Candidíase orofaríngea (Extremamente comum se o paciente não lavar a boca e cuspir a água)', 'Faringite e Cefaleia'], es: ['Candidiasis orofaríngea (Extremamente común si el paciente no lava la boca y escupe el agua)', 'Faringitis y Cefalea'] },
      dangerousAdverseEffects: { pt: ['Maior incidência de pneumonia severa documentada em pacientes idosos com DPOC avançada.'], es: ['Mayor incidencia de neumonía severa documentada en pacientes ancianos con EPOC avanzada.'] },
      contraindications: {
        absolute: { pt: ['Tratamento de asma como medicação de resgate agudo', 'Crianças menores de 12 anos'], es: ['Tratamiento de asma como medicación de rescate agudo', 'Niños menores de 12 años'] },
        relative: { pt: ['Tuberculose latente/ativa, infecção fúngica'], es: ['Tuberculosis latente/activa, infección fúngica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CUIDADO: Se o paciente sentir falta de ar crônica à tarde, NUNCA prescreva para ele inalar "mais uma dose" de Relvar. A medicação já está atuando 24 horas no receptor. Usar uma segunda dose causará toxicidade cardíaca e acúmulo de corticoide, sem melhora respiratória.', es: 'CUIDADO: Si el paciente siente falta de aire a la tarde, NUNCA prescriba inhalar "una dosis más" de Relvar. La medicación ya actúa 24 horas. Usar una segunda dosis causará toxicidad cardíaca.' }
      }
    },

    "umeclidinio_vilanterol": {
      name: { pt: 'Umeclidínio + Vilanterol', es: 'Umeclidinio + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA (Dupla Broncodilatação Sem Corticoide)', es: 'Asociación LAMA + Ultra-LABA (Doble Broncodilatación Sin Corticoide)' },
      indications: {
        pt: ['Terapia broncodilatadora de manutenção contínua da DPOC (A escolha inicial moderna para pacientes muito sintomáticos sem excesso de inflamação)'],
        es: ['Terapia broncodilatadora de mantenimiento continuo de la EPOC (La elección inicial moderna para pacientes muy sintomáticos sin exceso de inflamación)']
      },
      commercialNames: { br: ['Anoro Ellipta'], ar: ['Anoro'] },
      presentation: { pt: ['Pó Inalatório (Dispositivo Ellipta) 62,5/25 mcg'], es: ['Polvo Inhalatorio (Dispositivo Ellipta) 62,5/25 mcg'] },
      mechanism: {
        pt: 'A "Britadeira" do DPOC. A associação de um anticolinérgico de ação ultra-longa (LAMA - Umeclidínio) com um agonista beta-2 ultra-longo (Ultra-LABA - Vilanterol) causa o grau MÁXIMO de abertura física do brônquio que a medicina moderna conhece, bloqueando a contração vagal e ativando o relaxamento beta simultaneamente por 24 horas, tudo ISSO SEM USAR CORTICOIDES (protegendo o paciente DPOC de pneumonias).',
        es: 'El "Taladro" del EPOC. La asociación de un anticolinérgico LAMA con un Ultra-LABA causa el grado MÁXIMO de apertura física del bronquio que la medicina conoce, todo ESTO SIN USAR CORTICOIDES (protegiendo al EPOC de neumonías).'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia.',
          es: '1 inhalación UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso vetado em pediatria e no tratamento da asma.',
          es: 'Uso vetado en pediatría y en el tratamiento del asma.'
        }
      },
      administration: { pt: ['Uso inalatório via Ellipta.'], es: ['Uso inhalatorio vía Ellipta.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Uso cauteloso em falência severa (ausência de dados concretos).', es: 'Uso cauteloso en falla severa.' } },
      commonAdverseEffects: { pt: ['Boca seca (Xerostomia) e gosto alterado', 'Dor de cabeça e tosse inicial', 'Dor nas costas (Lombalgia espasmódica)'], es: ['Boca seca (Xerostomía) y sabor alterado', 'Dolor de cabeza y tos inicial', 'Dolor de espalda (Lumbalgia espasmódica)'] },
      dangerousAdverseEffects: { pt: ['Fibrilação Atrial e arritmias paradoxais', 'Retenção urinária severa em idosos prostáticos', 'Glaucoma agudo precipitado'], es: ['Fibrilación Auricular y arritmias paradójicas', 'Retención urinaria severa en ancianos prostáticos', 'Glaucoma agudo precipitado'] },
      contraindications: {
        absolute: { pt: ['Tratamento de pacientes com ASMA (Se prescrito para asmático, mascara a inflamação e leva ao choque asmático letal)'], es: ['Tratamiento de pacientes con ASMA (Si prescrito para asmático, enmascara la inflamación y lleva a choque asmático letal)'] },
        relative: { pt: ['Hiperplasia prostática benigna sintomática', 'Alergia severa à lactose da formulação'], es: ['Hiperplasia prostática benigna sintomática', 'Alergia severa a la lactosa de la formulación'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DIFERENCIAL DPOC vs ASMA: Essa medicação JAMAIS deve ser usada na Asma. A DPOC é uma doença de destruição arquitetônica (precisa abrir a via). A Asma é uma doença celular inflamatória (precisa de corticoide). Usar Anoro num asmático é dilatar o pulmão inflamado até ele colapsar repentinamente.', es: 'DIFERENCIAL EPOC vs ASMA: Esta medicación JAMÁS debe ser usada en el Asma. El EPOC necesita abrir la vía. El Asma necesita corticoide. Usar Anoro en un asmático es dilatar el pulmón inflamado hasta que colapsa repentinamente.' }
      }
    },

    "tiotropio_olodaterol": {
      name: { pt: 'Tiotrópio + Olodaterol', es: 'Tiotropio + Olodaterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA (Dupla Broncodilatação Contínua)', es: 'Asociación LAMA + Ultra-LABA (Doble Broncodilatación Continua)' },
      indications: {
        pt: ['Terapia de manutenção a longo prazo para o alívio profundo de sintomas na Doença Pulmonar Obstrutiva Crônica (DPOC)'],
        es: ['Terapia de mantenimiento a largo plazo para el alivio profundo de síntomas en la Enfermedad Pulmonar Obstructiva Crónica (EPOC)']
      },
      commercialNames: { br: ['Spiolto Respimat'], ar: ['Spiolto'] },
      presentation: { pt: ['Solução inalante por névoa suave (Respimat) 2,5/2,5 mcg por jato'], es: ['Solución inhalante por niebla suave (Respimat) 2,5/2,5 mcg por puff'] },
      mechanism: {
        pt: 'A associação do LAMA padrão-ouro (Tiotrópio) com um LABA de ação em 5 minutos (Olodaterol). O grande truque de genialidade deste fármaco não está apenas na molécula, mas no DISPOSITIVO (Respimat). O Respimat não usa "gás de espirro" nem "pó seco". Ele gera uma "névoa em câmera lenta". Pacientes idosos com DPOC avançada frequentemente não têm força muscular para puxar o pó do inalador. A névoa suave do Respimat entra no pulmão do idoso frágil sem exigir nenhum esforço pulmonar.',
        es: 'La asociación del LAMA patrón oro (Tiotropio) con un LABA rápido (Olodaterol). El gran truco de genialidad no está solo en la molécula, sino en el DISPOSITIVO (Respimat). Genera una "niebla en cámara lenta". Pacientes ancianos con EPOC avanzada frecuentemente no tienen fuerza para tirar el polvo. La niebla entra sin esfuerzo.'
      },
      dose: {
        adult: {
          pt: '2 jatos (duas inalações consecutivas) UMA VEZ ao dia.',
          es: '2 puffs (dos inhalaciones consecutivas) UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Não agitar bruscamente o aparelho. Rodar a base, abrir a tampa, pressionar o botão e inalar lentamente a névoa.'], es: ['No agitar bruscamente. Girar la base, abrir la tapa, presionar el botón e inhalar lentamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para a dose terapêutica.', es: 'Sin necesidad de ajuste para la dosis terapéutica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Tontura leve após a aplicação', 'Nasofaringite'], es: ['Boca seca', 'Mareo leve tras la aplicación', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Descompensação de Glaucoma (Se a névoa for jogada nos olhos acidentalmente)', 'Arritmias supraventriculares (Fibrilação) em pacientes de alto risco isquêmico'], es: ['Descompensación de Glaucoma (Si la niebla cae en los ojos)', 'Arritmias supraventriculares (Fibrilación)'] },
      contraindications: {
        absolute: { pt: ['Tratamento agudo de asfixia (A droga é de manutenção)', 'Asma brônquica (Monoterapia sem corticoide mata o asmático)'], es: ['Tratamiento agudo de asfixia', 'Asma bronquial (Monoterapia sin corticoide mata al asmático)'] },
        relative: { pt: ['Hiperplasia prostática benigna severa (retenção hídrica cruzada)'], es: ['Hiperplasia prostática benigna severa (retención hídrica cruzada)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SÓ DEPENDE DO CORPO: O paciente geriátrico frequentemente joga todo o remédio do spray de asma comum na parede da boca por falta de coordenação (bater o botão e puxar o ar junto). Com o Respimat, a nuvem dura quase 2 segundos no ar. Ele tem tempo de sobra para respirar. Ensine-o a usar a tecnologia a seu favor.', es: 'SOLO DEPENDE DEL CUERPO: El paciente geriátrico frecuentemente tira todo el remedio del spray en la boca por falta de coordinación. Con Respimat, la nube dura casi 2 segundos. Tiene tiempo de sobra para respirar.' }
      }
    },


    /* ── BUILD 398 — LAMA/LABA Duplo + Terapias Triplas + Antifibrótico ── */

    "glicopirronio_indacaterol": {
      name: { pt: 'Glicopirrônio + Indacaterol', es: 'Glicopirronio + Indacaterol' },
      category: 'pneumologia',
      class: { pt: 'Associação LAMA + Ultra-LABA', es: 'Asociación LAMA + Ultra-LABA' },
      indications: {
        pt: ['Terapia broncodilatadora de manutenção contínua da DPOC moderada a grave para alívio de sintomas e redução de exacerbações'],
        es: ['Terapia broncodilatadora de mantenimiento continuo de la EPOC moderada a grave para alivio de síntomas y reducción de exacerbaciones']
      },
      commercialNames: { br: ['Ultibro Breezhaler'], ar: ['Ultibro'] },
      presentation: { pt: ['Cápsulas com pó inalatório 50/110 mcg'], es: ['Cápsulas con polvo inhalatorio 50/110 mcg'] },
      mechanism: {
        pt: 'Associação dupla de longa ação que ataca a DPOC por duas vias distintas de broncodilatação sem envolver corticoides. O Glicopirrônio (LAMA) bloqueia os receptores muscarínicos M3, inibindo o tônus vagal e secando o catarro. O Indacaterol (LABA) estimula os receptores beta-2, promovendo o relaxamento direto do músculo liso brônquico por exatas 24 horas.',
        es: 'Asociación doble de larga acción que ataca la EPOC por dos vías de broncodilatación sin involucrar corticoides. El Glicopirronio (LAMA) bloquea los receptores muscarínicos M3, inhibiendo el tono vagal. El Indacaterol (LABA) estimula los receptores beta-2, promoviendo la relajación directa del músculo liso bronquial por exactas 24 horas.'
      },
      dose: {
        adult: {
          pt: 'Inalar o conteúdo de 1 cápsula UMA VEZ ao dia, usando o dispositivo Breezhaler.',
          es: 'Inhalar el contenido de 1 cápsula UNA VEZ al día, usando el dispositivo Breezhaler.'
        },
        pediatric: {
          pt: 'Uso não indicado em crianças (Exclusivo para DPOC).',
          es: 'Uso no indicado en niños (Exclusivo para EPOC).'
        }
      },
      administration: { pt: ['O paciente escuta um "zumbido" peculiar da cápsula girando dentro do dispositivo durante a inalação forte, o que serve como confirmação técnica de que o pó está descendo.'], es: ['El paciente escucha un "zumbido" peculiar de la cápsula girando dentro del dispositivo durante la inhalación, lo que sirve como confirmación técnica.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com falência renal grave (ClCr < 30) acumulam o Glicopirrônio. Usar apenas se o benefício superar o risco agudo anticolinérgico.', es: 'Pacientes con falla renal grave (ClCr < 30) acumulan Glicopirronio. Usar solo si el beneficio supera el riesgo anticolinérgico agudo.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste clínico.', es: 'Sin ajuste clínico.' } },
      commonAdverseEffects: { pt: ['Tosse reflexa imediata à inalação (pelo Indacaterol)', 'Boca seca', 'Nasofaringite'], es: ['Tos refleja inmediata a la inhalación (por Indacaterol)', 'Boca seca', 'Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Glaucoma agudo de ângulo fechado', 'Retenção urinária severa induzida'], es: ['Glaucoma agudo de ángulo cerrado', 'Retención urinaria severa inducida'] },
      contraindications: {
        absolute: { pt: ['Asma brônquica (Não usar LABA sem ICS em asma)', 'Resgate de broncoespasmo agudo'], es: ['Asma bronquial (No usar LABA sin ICS en asma)', 'Rescate de broncoespasmo agudo'] },
        relative: { pt: ['Hiperplasia Prostática Benigna Severa'], es: ['Hiperplasia Prostática Benigna Severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A regra de ouro da DPOC moderna é "Desinflar" (tirar o ar preso) maximizando a broncodilatação sem usar corticoides sistêmicos/inalatórios para evitar pneumonias lobares, tornando o Ultibro e o Anoro as pedras angulares do pneumologista.', es: 'La regla de oro de la EPOC moderna es "Desinflar" maximizando la broncodilatación sin usar corticoides para evitar neumonías lobares.' }
      }
    },

    "budesonida_glicopirronio_formoterol": {
      name: { pt: 'Budesonida + Glicopirrônio + Formoterol', es: 'Budesonida + Glicopirronio + Formoterol' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória (ICS + LAMA + LABA)', es: 'Terapia Triple Inhalatoria (ICS + LAMA + LABA)' },
      indications: {
        pt: ['Doença Pulmonar Obstrutiva Crônica (DPOC) grave em pacientes não controlados com terapia dupla'],
        es: ['Enfermedad Pulmonar Obstructiva Crónica (EPOC) grave en pacientes no controlados con terapia doble']
      },
      commercialNames: { br: ['Breztri Aerosphere'], ar: ['Trixeo'] },
      presentation: { pt: ['Spray Inalatório pressurizado (Aerosphere) 160/7,2/4,8 mcg por jato'], es: ['Spray Inhalatorio presurizado (Aerosphere) 160/7,2/4,8 mcg por puff'] },
      mechanism: {
        pt: 'O ataque em três frentes. Esta bombinha usa a tecnologia "Aerosphere", que envolve as moléculas das 3 drogas em microesferas fosfolipídicas porosas (como pequenas bolas de futebol ocas). Isso as impede de grudar umas nas outras no frasco, garantindo que as três drogas (O Corticoide, o Bloqueador Muscarínico e o Estimulador Beta-2) penetrem até os últimos alvéolos do paciente para desinflamar e dilatar simultaneamente.',
        es: 'El ataque en tres frentes. Este inhalador usa la tecnología "Aerosphere", que envuelve las moléculas en microesferas fosfolipídicas porosas. Esto impide que se peguen en el frasco, garantizando que las tres drogas penetren hasta los últimos alvéolos para desinflamar y dilatar simultáneamente.'
      },
      dose: {
        adult: {
          pt: '2 jatos via inalatória, DUAS VEZES ao dia (a cada 12 horas).',
          es: '2 puffs vía inhalatoria, DOS VECES al día (cada 12 horas).'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Lavar a boca e gargarejar RIGOROSAMENTE após o uso (altíssimo risco de candidíase por ser corticoide com anticolinérgico). Uso de espaçador melhora o rendimento.'], es: ['Lavar la boca y hacer gárgaras RIGUROSAMENTE tras el uso (altísimo riesgo de candidiasis). Uso de espaciador mejora el rendimiento.'] },
      renalAdjustment: { required: true, message: { pt: 'Monitorar pacientes com falência renal terminal devido ao componente Glicopirrônio.', es: 'Monitorizar pacientes con falla renal terminal debido al componente Glicopirronio.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cirrose grave: Aumento drástico dos níveis de Budesonida no sangue devido ao metabolismo de primeira passagem falho.', es: 'Cirrosis grave: Aumento drástico de niveles de Budesonida en sangre debido al metabolismo fallido.' } },
      commonAdverseEffects: { pt: ['Disfonia e Candidíase', 'Boca muito seca', 'Tremor nas extremidades'], es: ['Disfonía y Candidiasis', 'Boca muy seca', 'Temblor en las extremidades'] },
      dangerousAdverseEffects: { pt: ['Pneumonia', 'Piora aguda de Glaucoma e retenção urinária'], es: ['Neumonía', 'Empeoramiento agudo de Glaucoma y retención urinaria'] },
      contraindications: {
        absolute: { pt: ['Tratamento do Broncoespasmo Agudo', 'Pacientes sem tratamento prévio (Não é droga de primeira linha)'], es: ['Tratamiento del Broncoespasmo Agudo', 'Pacientes sin tratamiento previo (No es droga de primera línea)'] },
        relative: { pt: ['Próstata muito aumentada', 'Cardiopatia isquêmica grave'], es: ['Próstata muy aumentada', 'Cardiopatía isquémica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE DESCALONAMENTO: Um grande erro na pneumologia é prescrever "A Bombinha Tripla" logo de cara para o paciente com falta de ar. A Terapia Tripla é a ÚLTIMA CARTADA inalatória. Usá-la antes de tentar LABA/LAMA apenas sobrecarrega o paciente com corticoides que aumentam o risco de pneumonia.', es: 'ALERTA DE DESCALONAMIENTO: Un gran error en neumología es prescribir "La Pluma Triple" de entrada. La Terapia Triple es la ÚLTIMA CARTA. Usarla antes de intentar LABA/LAMA solo sobrecarga al paciente con corticoides.' }
      }
    },

    "fluticasona_umeclidinio_vilanterol": {
      name: { pt: 'Fluticasona + Umeclidínio + Vilanterol', es: 'Fluticasona + Umeclidinio + Vilanterol' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória Ultra-Longa (ICS + LAMA + Ultra-LABA)', es: 'Terapia Triple Inhalatoria Ultra Larga (ICS + LAMA + Ultra-LABA)' },
      indications: {
        pt: ['DPOC grave não controlada', 'Asma Severa não controlada em adultos (Terapia de resgate antes dos biológicos)'],
        es: ['EPOC grave no controlada', 'Asma Severa no controlada en adultos (Terapia de rescate antes de los biológicos)']
      },
      commercialNames: { br: ['Trelegy Ellipta'], ar: ['Trelegy'] },
      presentation: { pt: ['Pó Inalatório (Ellipta) 100/62,5/25 mcg e 200/62,5/25 mcg'], es: ['Polvo Inhalatorio (Ellipta) 100/62,5/25 mcg y 200/62,5/25 mcg'] },
      mechanism: {
        pt: 'A "Bomba Atômica" inalatória de Dose Única. Associa três fármacos de longuíssima duração (24 horas) em uma única puxada de ar (Dispositivo Ellipta). O Furoato de Fluticasona silencia a inflamação eosinofílica severa; o Umeclidínio paralisa o muco e o reflexo de broncoconstrição vagal; e o Vilanterol estimula os receptores beta a deixarem a passagem aberta o dia todo.',
        es: 'La "Bomba Atómica" inhalatoria de Dosis Única. Asocia tres fármacos de larguísima duración (24 horas) en una sola aspiración. El Furoato de Fluticasona silencia la inflamación; el Umeclidinio paraliza el moco; y el Vilanterol estimula los receptores beta a dejar la vía abierta.'
      },
      dose: {
        adult: {
          pt: '1 inalação UMA VEZ ao dia, no mesmo horário, todos os dias.',
          es: '1 inhalación UNA VEZ al día, en el mismo horario, todos los días.'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Exige bochecho e lavagem bucal vigorosa.', 'Não indicado usar dose a mais no dia mesmo se tiver falta de ar.'], es: ['Exige enjuague y lavado bucal vigoroso.', 'No indicado usar dosis extra en el día incluso si hay falta de aire.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Monitoramento contínuo em cirrose moderada/grave devido ao corticoide de altíssima potência.', es: 'Monitorización continua en cirrosis moderada/grave debido al corticoide de altísima potencia.' } },
      commonAdverseEffects: { pt: ['Disfonia e Candidíase orofaríngea', 'Constipação e boca seca', 'Tosse transitória'], es: ['Disfonía y Candidiasis orofaríngea', 'Constipación y boca seca', 'Tos transitoria'] },
      dangerousAdverseEffects: { pt: ['Pneumonia bacteriana grave no DPOC (Efeito direto da imunossupressão do corticoide no pulmão fragilizado)'], es: ['Neumonía bacteriana grave en la EPOC (Efecto directo de la inmunosupresión del corticoide)'] },
      contraindications: {
        absolute: { pt: ['Alívio imediato do asma/DPOC agudo'], es: ['Alivio inmediato del asma/EPOC agudo'] },
        relative: { pt: ['Histórico recorrente de pneumonias de repetição'], es: ['Historial recurrente de neumonías de repetición'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'RISCO DE POLIFARMÁCIA CRUZADA: Pacientes no SUS comumente recebem a "bomba tripla" do médico especialista (Trelegy), mas continuam indo ao posto de saúde pegar as bombinhas antigas (Alenia, Spiriva) por não entenderem. Se inalar tudo junto, o paciente sofre parada cardíaca por superestimulação de receptores e bloqueio parassimpático massivo. Recolha as bombinhas velhas!', es: 'RIESGO DE POLIFARMACIA: Pacientes frecuentemente reciben la "bomba triple" del especialista, pero siguen usando sus inhaladores antiguos por no entender. Si inhala todo junto, sufre paro cardíaco por sobreestimulación y bloqueo masivo. ¡Recoja los inhaladores viejos!' }
      }
    },

    "beclometasona_formoterol_glicopirronio": {
      name: { pt: 'Beclometasona + Formoterol + Glicopirrônio', es: 'Beclometasona + Formoterol + Glicopirronio' },
      category: 'pneumologia',
      class: { pt: 'Terapia Tripla Inalatória Extrafina', es: 'Terapia Triple Inhalatoria Extrafina' },
      indications: {
        pt: ['Terapia de manutenção em pacientes adultos com DPOC moderada a grave', 'Asma não controlada em adultos (em casos refratários a associações duplas)'],
        es: ['Terapia de mantenimiento en pacientes adultos con EPOC moderada a grave', 'Asma no controlada en adultos (refractarios a asociaciones dobles)']
      },
      commercialNames: { br: ['Trimbow'], ar: ['Trimbow'] },
      presentation: { pt: ['Spray Inalatório Pressurizado (HFA) 87/5/9 mcg e 172/5/9 mcg por dose'], es: ['Spray Inhalatorio Presurizado (HFA) 87/5/9 mcg y 172/5/9 mcg por dosis'] },
      mechanism: {
        pt: 'O principal apelo do Trimbow é o tamanho da partícula (Formulações Extrafinas). Em um pulmão com DPOC ou Asma Severa, as vias aéreas superiores estão inchadas e tortuosas, e as vias distais (fundo do pulmão) colapsam. O Trimbow gera uma fumaça fina o suficiente para contornar o "labirinto" e entregar as três drogas (Corticoide para inflamação, LAMA para secar, LABA para dilatar) direto nos alvéolos doentes.',
        es: 'El principal atractivo de Trimbow es el tamaño de la partícula (Formulaciones Extrafinas). En un pulmón con EPOC, las vías distales colapsan. Trimbow genera un humo lo suficientemente fino para sortear el "laberinto" y entregar las tres drogas directo a los alvéolos.'
      },
      dose: {
        adult: {
          pt: '2 inalações a cada 12 horas (Total de 4 jatos no dia).',
          es: '2 inhalaciones cada 12 horas (Total de 4 puffs al día).'
        },
        pediatric: {
          pt: 'Uso não indicado.',
          es: 'Uso no indicado.'
        }
      },
      administration: { pt: ['Agitar bem antes de usar, idealmente com espaçador, lavando a boca logo em seguida.', 'Armazenar o frasco na GELADEIRA na farmácia; após iniciar o uso, pode ficar em temperatura ambiente (até 25°C) por no máximo 2 meses.'], es: ['Agitar bien antes de usar, idealmente con espaciador, lavando la boca después.', 'Guardar el frasco en la NEVERA en farmacia; al iniciar uso, puede estar a temperatura ambiente por máximo 2 meses.'] },
      renalAdjustment: { required: true, message: { pt: 'O Glicopirrônio exige cautela severa em ClCr < 30 mL/min.', es: 'El Glicopirronio exige cautela severa en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Ajustes não estritamente definidos na bula, mas corticoide exige cautela na cirrose.', es: 'Ajustes no estrictamente definidos, pero el corticoide exige cautela en cirrosis.' } },
      commonAdverseEffects: { pt: ['Candidíase oral (sapinho)', 'Boca seca e rouquidão', 'Eletrocardiograma com leve aumento de batimentos (taquicardia)'], es: ['Candidiasis oral (muguet)', 'Boca seca y ronquera', 'ECG con leve aumento de latidos (taquicardia)'] },
      dangerousAdverseEffects: { pt: ['Retenção hídrica cruzada e Glaucoma em idosos suscetíveis'], es: ['Retención hídrica cruzada y Glaucoma en ancianos susceptibles'] },
      contraindications: {
        absolute: { pt: ['Uso para broncoespasmo agudo (não substitui o resgate isolado em pronto-socorro)'], es: ['Uso para broncoespasmo agudo (no sustituye el rescate en urgencias)'] },
        relative: { pt: ['Paciente com hipertrofia prostática não tratada e sondada'], es: ['Paciente con hipertrofia prostática no tratada y sondada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CADEIA DE FRIO: Se o seu paciente reclamar que a bombinha do Trimbow "não está fazendo efeito", pergunte onde ele a guardava ANTES de abrir a embalagem térmica. Se o farmacêutico não entregou gelado, a droga degradou.', es: 'CADENA DE FRÍO: Si el paciente reclama que el Trimbow "no hace efecto", pregunte dónde lo guardaba ANTES de abrir. Si el farmacéutico no lo entregó frío, la droga se degradó.' }
      }
    },

    "pirfenidona": {
      name: { pt: 'Pirfenidona', es: 'Pirfenidona' },
      category: 'pneumologia',
      class: { pt: 'Antifibrótico Pulmonar', es: 'Antifibrótico Pulmonar' },
      indications: {
        pt: ['Tratamento da Fibrose Pulmonar Idiopática (FPI) leve a moderada', 'Retardo da progressão da perda de capacidade vital forçada (CVF) pulmonar'],
        es: ['Tratamiento de la Fibrosis Pulmonar Idiopática (FPI) leve a moderada', 'Retraso de la progresión de la pérdida de capacidad vital forzada (CVF) pulmonar']
      },
      commercialNames: { br: ['Esbriet'], ar: ['Esbriet'] },
      presentation: { pt: ['Cápsulas 267 mg', 'Comprimidos revestidos 267 mg e 801 mg'], es: ['Cápsulas 267 mg', 'Comprimidos recubiertos 267 mg y 801 mg'] },
      mechanism: {
        pt: 'A Fibrose Pulmonar é a "cicatrização incontrolável" dos pulmões (o tecido mole vira pedra). A Pirfenidona atua inibindo a produção de Fator de Crescimento Transformador Beta (TGF-beta) e o TNF-alfa. Isso paralisa os fibroblastos, impedindo que eles continuem depositando colágeno duro e matriz extracelular no pulmão. Não cura e não reverte a fibrose que já existe, mas DÁ TEMPO de vida ao "congelar" a doença.',
        es: 'La Fibrosis Pulmonar es la "cicatrización incontrolable" de los pulmones (el tejido blando se vuelve piedra). La Pirfenidona inhibe la producción de Factor de Crecimiento Transformante Beta. Esto paraliza los fibroblastos, impidiendo que depositen colágeno duro. No cura ni revierte la fibrosis que ya existe, pero DA TIEMPO de vida al "congelar" la enfermedad.'
      },
      dose: {
        adult: {
          pt: 'Início: 267 mg (1 cápsula) 3 vezes ao dia na primeira semana. Escalonamento gradual até atingir a dose alvo brutal de: 801 mg (3 cápsulas de 267mg), 3 vezes ao dia (TOTAL DE 9 CÁPSULAS POR DIA ou 2.403 mg/dia).',
          es: 'Inicio: 267 mg (1 cápsula) 3 veces al día en la primera semana. Escalonamiento gradual hasta la dosis objetivo: 801 mg (3 cápsulas), 3 veces al día (TOTAL DE 9 CÁPSULAS POR DÍA).'
        },
        pediatric: {
          pt: 'Uso não indicado. Doença de adultos senis.',
          es: 'Uso no indicado. Enfermedad de adultos seniles.'
        }
      },
      administration: { pt: ['MANDATÓRIO: Ingerir sempre JUNTO COM AS REFEIÇÕES. Tomar de estômago vazio causa náusea intolerável e picos na corrente sanguínea que geram toxicidade severa.'], es: ['OBLIGATORIO: Ingerir siempre JUNTO CON LAS COMIDAS. Tomar con estómago vacío causa náusea intolerable y picos de toxicidad severa.'] },
      renalAdjustment: { required: true, message: { pt: 'Pacientes com falência renal grave (ClCr < 30) NÃO DEVEM USAR (acumulação tóxica não esclarecida).', es: 'Pacientes con falla renal grave (ClCr < 30) NO DEBEN USAR (acumulación tóxica no aclarada).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Altamente dependente do fígado (CYP1A2). Evitar em cirrose classe B ou C de Child-Pugh.', es: 'Altamente dependiente del hígado (CYP1A2). Evitar en cirrosis clase B o C de Child-Pugh.' } },
      commonAdverseEffects: { pt: ['Fotosensibilidade extrema da pele (o paciente fica com a pele avermelhada e cheia de manchas vermelhas com qualquer sol)', 'Náuseas severas, anorexia e diarreia', 'Fadiga'], es: ['Fotosensibilidad extrema de la piel (el paciente queda rojo con cualquier sol)', 'Náuseas severas, anorexia y diarrea', 'Fatiga'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade com elevação grave de transaminases', 'Perda de peso letal (Sarcopenia grave)'], es: ['Hepatotoxicidad con elevación grave de transaminasas', 'Pérdida de peso letal (Sarcopenia grave)'] },
      contraindications: {
        absolute: { pt: ['Histórico de insuficiência hepática ou renal severa', 'Uso concomitante de Fluvoxamina'], es: ['Historial de insuficiencia hepática o renal severa', 'Uso concomitante de Fluvoxamina'] },
        relative: { pt: ['Tabagismo ativo (O cigarro anula o remédio)'], es: ['Tabaquismo activo (El cigarro anula el remedio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O AVISO DO CIGARRO: Se o seu paciente tem fibrose pulmonar e continua fumando, a Pirfenidona é INÚTIL. O tabagismo induz fortemente a enzima CYP1A2 no fígado do paciente. O fígado vai destruir toda a Pirfenidona antes que ela consiga alcançar o pulmão do paciente para tratar a doença.', es: 'EL AVISO DEL CIGARRO: Si el paciente tiene fibrosis y sigue fumando, la Pirfenidona es INÚTIL. El tabaquismo induce la enzima CYP1A2 en el hígado, que destruirá toda la Pirfenidona antes de alcanzar el pulmón.' }
      }
    },

/* ── NINTEDANIBE ────────────────────────────────────────────────────── */
    "nintedanibe": {
      name: { pt: 'Nintedanibe', es: 'Nintedanib' },
      category: 'pneumologia',
      class: { pt: 'Antifibrótico Pulmonar (Inibidor de Tirosina-Quinase)', es: 'Antifibrótico Pulmonar (Inhibidor de Tirosina-Quinasa)' },
      indications: {
        pt: ['Fibrose Pulmonar Idiopática (FPI) — qualquer estágio', 'Doença Pulmonar Intersticial associada à Esclerose Sistêmica (DPI-ES)', 'Doença Pulmonar Intersticial fibrosante progressiva de outras causas'],
        es: ['Fibrosis Pulmonar Idiopática (FPI) — cualquier estadio', 'Enfermedad Pulmonar Intersticial asociada a Esclerosis Sistémica (EPI-ES)', 'Enfermedad Pulmonar Intersticial fibrosante progresiva de otras causas']
      },
      commercialNames: { br: ['Ofev'], ar: ['Ofev'] },
      presentation: { pt: ['Cápsulas moles 100 mg e 150 mg'], es: ['Cápsulas blandas 100 mg y 150 mg'] },
      mechanism: {
        pt: 'Se a Pirfenidona "paralisa os fibroblastos por fora" (bloqueando os sinais TGF-beta/TNF), o Nintedanibe os paralisa "por dentro". Ele é um inibidor de tirosina-quinase que entra no fibroblasto e bloqueia simultaneamente três receptores de crescimento: VEGFR (que vasculariza a cicatriz), FGFR (que estimula a proliferação do fibroblasto) e PDGFRα/β (que atrai mais fibroblastos para o pulmão). Resultado: desorganiza toda a cascata de sinalização interna que faz o pulmão se transformar em couro.',
        es: 'Si la Pirfenidona "paraliza los fibroblastos por fuera", el Nintedanib los paraliza "por dentro". Es un inhibidor de tirosina-quinasa que bloquea simultáneamente tres receptores de crecimiento: VEGFR, FGFR y PDGFRα/β. Resultado: desorganiza toda la cascada interna que hace que el pulmón se transforme en cuero.'
      },
      dose: {
        adult: {
          pt: '150 mg por via oral, DUAS VEZES ao dia (a cada 12 horas). Caso haja intolerância gastrointestinal, reduzir para 100 mg, 2 vezes ao dia.',
          es: '150 mg por vía oral, DOS VECES al día (cada 12 horas). Si hay intolerancia gastrointestinal, reducir a 100 mg, 2 veces al día.'
        },
        pediatric: {
          pt: 'Não indicado. Doença exclusiva de adultos.',
          es: 'No indicado. Enfermedad exclusiva de adultos.'
        }
      },
      administration: { pt: ['Ingerir JUNTO COM AS REFEIÇÕES para reduzir as náuseas e a biodisponibilidade errática.', 'Engolir inteiro — não mastigar (cápsula mole contém óleo de soja).'], es: ['Ingerir JUNTO CON LAS COMIDAS para reducir náuseas.', 'Tragar entero — no masticar (cápsula blanda contiene aceite de soja).'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente biliar (> 90%). Insuficiência renal isolada não requer ajuste.', es: 'Eliminación predominantemente biliar (> 90%). Insuficiencia renal aislada no requiere ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Substrato de CYP3A4 e P-glicoproteína. Em Child-Pugh B: reduzir para 100 mg 2x/dia. CONTRAINDICADO em Child-Pugh C.', es: 'Sustrato de CYP3A4 y P-glicoproteína. En Child-Pugh B: reducir a 100 mg 2x/día. CONTRAINDICADO en Child-Pugh C.' } },
      commonAdverseEffects: { pt: ['Diarreia profusa (reação mais comum e mais limitante — 60% dos pacientes)', 'Náuseas e vômitos', 'Dor e distensão abdominal'], es: ['Diarrea profusa (reacción más común y limitante — 60% de los pacientes)', 'Náuseas y vómitos', 'Dolor y distensión abdominal'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade grave (monitorar ALT/AST mensalmente no primeiro ano)', 'Sangramento arterial (inibe VEGFR — cautela máxima com anticoagulantes)', 'Perfuração gastrointestinal (raro, potencialmente fatal)'], es: ['Hepatotoxicidad grave (monitorar ALT/AST mensualmente el primer año)', 'Sangrado arterial (inhibe VEGFR — cautela máxima con anticoagulantes)', 'Perforación gastrointestinal (raro, potencialmente fatal)'] },
      contraindications: {
        absolute: { pt: ['Gravidez e lactação (Categoria D — teratogênico em animais)', 'Child-Pugh C'], es: ['Embarazo y lactancia (Categoría D — teratogénico en animales)', 'Child-Pugh C'] },
        relative: { pt: ['Uso concomitante de anticoagulantes (risco de sangramento multiplicado)', 'Tabagismo ativo (reduz eficácia por indução enzimática)'], es: ['Uso concomitante de anticoagulantes (riesgo de sangrado multiplicado)', 'Tabaquismo activo (reduce eficacia por inducción enzimática)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A DIARREIA QUE MATA O TRATAMENTO: O principal motivo pelo qual os pacientes abandonam o Nintedanibe não é medo ou falta de acesso — é a diarreia. Nos primeiros meses, pode ser debilitante. O pneumologista inteligente prescreve ANTECIPADAMENTE loperamida "se precisar" para controlar o trânsito e salvar a adesão ao único remédio que freia a fibrose.', es: 'LA DIARREA QUE MATA EL TRATAMIENTO: El principal motivo de abandono del Nintedanib no es el miedo o falta de acceso — es la diarrea. El neumólogo inteligente prescribe ANTICIPADAMENTE loperamida "si necesita" para controlar el tránsito y salvar la adherencia.' }
      }
    },

/* ── MONTELUCASTE ────────────────────────────────────────────────────── */
    "montelucaste": {
      name: { pt: 'Montelucaste', es: 'Montelukast' },
      category: 'pneumologia',
      class: { pt: 'Antileucotrieno (Antagonista do Receptor de Cisteinil-Leucotrieno — ARLT)', es: 'Antileucotrieno (Antagonista del Receptor de Cisteinil-Leucotrieno — ARLT)' },
      indications: {
        pt: ['Profilaxia e tratamento crônico da Asma leve a moderada (2ª linha, adjuvante ao ICS)', 'Rinite Alérgica Sazonal e Perene em adultos e crianças', 'Prevenção de Broncoespasmo induzido por exercício'],
        es: ['Profilaxis y tratamiento crónico del Asma leve a moderada (2ª línea, adyuvante al ICS)', 'Rinitis Alérgica Estacional y Perenne en adultos y niños', 'Prevención de Broncoespasmo inducido por ejercicio']
      },
      commercialNames: { br: ['Singulair', 'Brondilat', 'Montelair'], ar: ['Singulair', 'Montelukast Genérico'] },
      presentation: { pt: ['Comprimidos mastigáveis 4 mg (2–5 anos) e 5 mg (6–14 anos)', 'Comprimidos revestidos 10 mg (adultos)', 'Sachê granulado 4 mg (6 meses – 5 anos)'], es: ['Comprimidos masticables 4 mg (2-5 años) y 5 mg (6-14 años)', 'Comprimidos recubiertos 10 mg (adultos)', 'Sobre granulado 4 mg (6 meses – 5 años)'] },
      mechanism: {
        pt: 'Os leucotrienos (LTC4, LTD4, LTE4) são os "bombeiros incendiários" da Asma: ao mesmo tempo em que chegam para combater o alérgeno, eles contraem o músculo brônquico, produzem muco em excesso e inflamam as paredes das vias aéreas. O Montelucaste bloqueia seletivamente o receptor CysLT1, impedindo que esses leucotrienos se "encaixem" e disparem essa cascata. Resultado: brônquios mais abertos, menos secreção e menos inflamação — especialmente em Asma alérgica e na Asma por AINEs.',
        es: 'Los leucotrienos son los "bomberos incendiarios" del Asma: contraen el músculo bronquial, producen moco en exceso e inflaman las paredes. El Montelukast bloquea selectivamente el receptor CysLT1, impidiendo que los leucotrienos disparen la cascada. Resultado: bronquios más abiertos, menos moco, menos inflamación.'
      },
      dose: {
        adult: {
          pt: '10 mg por via oral, UMA VEZ ao dia, preferencialmente à noite.',
          es: '10 mg por vía oral, UNA VEZ al día, preferentemente por la noche.'
        },
        pediatric: {
          pt: '6 meses–5 anos: 4 mg/dia (granulado ou mastigável). 6–14 anos: 5 mg/dia (mastigável). ≥ 15 anos: 10 mg/dia (comprimido adulto).',
          es: '6 meses-5 años: 4 mg/día (granulado o masticable). 6-14 años: 5 mg/día (masticable). ≥ 15 años: 10 mg/día (comprimido adulto).'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimento.', 'Preferir a dose noturna porque a broncoconstrição noturna é o padrão mais comum na asma.'], es: ['Puede tomarse con o sin alimento.', 'Preferir la dosis nocturna porque la broncoconstricción nocturna es el patrón más común.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste. Eliminação biliar predominante.', es: 'No requiere ajuste. Eliminación biliar predominante.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cirrose leve a moderada: usar com cautela. Cirrose grave (Child-Pugh C): evitar.', es: 'Cirrosis leve a moderada: usar con cautela. Cirrosis grave (Child-Pugh C): evitar.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Infecção de vias aéreas superiores', 'Dor abdominal (especialmente em crianças)'], es: ['Cefalea', 'Infección de vías aéreas superiores', 'Dolor abdominal (especialmente en niños)'] },
      dangerousAdverseEffects: { pt: ['Neuropsiquiátricos graves (FDA Black Box Warning): ideação suicida, agressividade, alucinações, sonambulismo, pesadelos — especialmente em crianças e adolescentes', 'Síndrome de Churg-Strauss (vasculite eosinofílica — ao reduzir corticoide sistêmico)'], es: ['Neuropsiquiátricos graves (FDA Black Box Warning): ideación suicida, agresividad, alucinaciones, sonambulismo — especialmente en niños', 'Síndrome de Churg-Strauss (vasculitis eosinofílica — al reducir corticoide sistémico)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao Montelucaste'], es: ['Hipersensibilidad al Montelukast'] },
        relative: { pt: ['Pacientes com histórico de transtornos neuropsiquiátricos (depressão, transtorno bipolar, psicose) — revisão obrigatória do risco/benefício', 'Fenilcetonúria (comprimidos mastigáveis contêm aspartame)'], es: ['Pacientes con historial de trastornos neuropsiquiátricos — revisión obligatoria del riesgo/beneficio', 'Fenilcetonuria (comprimidos masticables contienen aspartamo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA NEUROPSIQUIÁTRICO INVISÍVEL: O Montelucaste tem um Black Box Warning da FDA para eventos neuropsiquiátricos. O problema é que a maioria dos médicos no Brasil nunca avisa o paciente. A mãe que percebe que o filho começou a ter pesadelos intensos, comportamento agressivo ou falar em morte desde que iniciou o "remedinho do pulmão" DEVE comunicar imediatamente e suspender o Montelucaste.', es: 'LA ADVERTENCIA NEUROPSIQUIÁTRICA INVISIBLE: El Montelukast tiene un Black Box Warning de la FDA. La mayoría de los médicos nunca avisa al paciente. La madre que nota pesadillas intensas, agresividad o pensamientos de muerte desde el "remedito del pulmón" DEBE comunicar y suspender el Montelukast.' }
      }
    },

/* ── ZAFIRLUCASTE ────────────────────────────────────────────────────── */
    "zafirlucaste": {
      name: { pt: 'Zafirlucaste', es: 'Zafirlukast' },
      category: 'pneumologia',
      class: { pt: 'Antileucotrieno (Antagonista do Receptor de Cisteinil-Leucotrieno — ARLT)', es: 'Antileucotrieno (Antagonista del Receptor de Cisteinil-Leucotrieno — ARLT)' },
      indications: {
        pt: ['Profilaxia e tratamento crônico da Asma brônquica em adultos e crianças ≥ 7 anos (2ª linha)'],
        es: ['Profilaxis y tratamiento crónico del Asma bronquial en adultos y niños ≥ 7 años (2ª línea)']
      },
      commercialNames: { br: ['Accolate'], ar: ['Accolate'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg'], es: ['Comprimidos recubiertos 10 mg y 20 mg'] },
      mechanism: {
        pt: 'Idêntico ao Montelucaste: antagonismo seletivo do receptor CysLT1 para leucotrienos cisteinílicos. A diferença clínica é farmacológica: o Zafirlucaste tem interações medicamentosas muito mais agressivas (inibe CYP2C9 e CYP3A4) e precisa ser tomado em JEJUM. No uso clínico atual, foi amplamente substituído pelo Montelucaste por ser menos conveniente (2 doses/dia) e com maior potencial de interações.',
        es: 'Idéntico al Montelukast: antagonismo selectivo del receptor CysLT1. La diferencia clínica es farmacológica: el Zafirlukast tiene interacciones mucho más agresivas (inhibe CYP2C9 y CYP3A4) y necesita tomarse en AYUNAS. Fue ampliamente reemplazado por Montelukast por ser menos conveniente.'
      },
      dose: {
        adult: {
          pt: '20 mg por via oral, DUAS VEZES ao dia (a cada 12 horas), em JEJUM (1 hora antes ou 2 horas após as refeições).',
          es: '20 mg por vía oral, DOS VECES al día (cada 12 horas), en AYUNAS (1 hora antes o 2 horas después de las comidas).'
        },
        pediatric: {
          pt: '7–11 anos: 10 mg, 2 vezes ao dia, em jejum. ≥ 12 anos: dose adulta.',
          es: '7-11 años: 10 mg, 2 veces al día, en ayunas. ≥ 12 años: dosis adulta.'
        }
      },
      administration: { pt: ['Obrigatoriamente em JEJUM — alimentos reduzem a biodisponibilidade em até 40%.'], es: ['Obligatoriamente en AYUNAS — los alimentos reducen la biodisponibilidad hasta en un 40%.'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente fecal. Não requer ajuste renal.', es: 'Eliminación predominantemente fecal. No requiere ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em cirrose hepática (acúmulo tóxico). Monitorar transaminases em uso prolongado.', es: 'CONTRAINDICADO en cirrosis hepática (acumulación tóxica). Monitorar transaminasas en uso prolongado.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náuseas e dispepsia (exacerbados se tomado com comida)', 'Infecções respiratórias altas'], es: ['Cefalea', 'Náuseas y dispepsia (exacerbados si se toma con comida)', 'Infecciones respiratorias altas'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade grave (casos de insuficiência hepática fatal relatados em pós-comercialização)', 'Síndrome de Churg-Strauss (vasculite eosinofílica)'], es: ['Hepatotoxicidad grave (casos de insuficiencia hepática fatal reportados)', 'Síndrome de Churg-Strauss (vasculitis eosinofílica)'] },
      contraindications: {
        absolute: { pt: ['Doença hepática ativa ou elevação de transaminases > 3× o limite superior da normalidade'], es: ['Enfermedad hepática activa o elevación de transaminasas > 3× el límite superior de normalidad'] },
        relative: { pt: ['Uso de Varfarina (Zafirlucaste inibe CYP2C9 → INR dispara)', 'Idosos > 65 anos (clearance reduzido)'], es: ['Uso de Warfarina (Zafirlukast inhibe CYP2C9 → INR se dispara)', 'Ancianos > 65 años (clearance reducido)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A INTERAÇÃO LETAL COM VARFARINA: Se o seu paciente anticoagulado com Varfarina para FA ou TVP tiver asma e o médico prescrever Zafirlucaste sem saber da interação, o INR pode triplicar em dias — gerando hemorragia intracraniana. O Montelucaste é o antileucotrieno SEGURO para pacientes em anticoagulação oral.', es: 'LA INTERACCIÓN LETAL CON WARFARINA: Si el paciente anticoagulado con Warfarina recibe Zafirlukast sin conocer la interacción, el INR puede triplicarse en días — generando hemorragia intracraneal. El Montelukast es el antileucotrieno SEGURO en anticoagulación.' }
      }
    },

/* ── TEOFILINA ────────────────────────────────────────────────────────── */
    "teofilina": {
      name: { pt: 'Teofilina', es: 'Teofilina' },
      category: 'pneumologia',
      class: { pt: 'Xantina (Broncodilatador + Anti-inflamatório leve)', es: 'Xantina (Broncodilatador + Antiinflamatorio leve)' },
      indications: {
        pt: ['Asma brônquica persistente — uso oral crônico de baixa dose como adjuvante (fármaco de 3ª linha)', 'DPOC moderada a grave — quando LABAs e LAMAs são insuficientes', 'Asma grave com status asmático (uso EV hospitalar — aminofilina)'],
        es: ['Asma bronquial persistente — uso oral crónico de baja dosis como adyuvante (fármaco de 3ª línea)', 'EPOC moderada a grave — cuando LABAs y LAMAs son insuficientes', 'Asma grave con status asmático (uso EV hospitalario — aminofilina)']
      },
      commercialNames: { br: ['Euphyllin', 'Teolong', 'Unifiland'], ar: ['Euphyllin', 'Theolan'] },
      presentation: { pt: ['Comprimidos de liberação prolongada 100 mg, 200 mg e 300 mg', 'Solução oral (xarope) para crianças', 'Aminofilina EV: ampola 240 mg/10 mL (uso hospitalar)'], es: ['Comprimidos de liberación prolongada 100 mg, 200 mg y 300 mg', 'Solución oral (jarabe) para niños', 'Aminofilina EV: ampolla 240 mg/10 mL (uso hospitalario)'] },
      mechanism: {
        pt: 'A Teofilina tem um mecanismo duplo e elegante: (1) Inibe as Fosfodiesterases (PDEs), impedindo a degradação do AMPc intracelular — mais AMPc → o músculo brônquico relaxa e dilata. (2) Antagoniza os receptores de Adenosina A1/A2, que normalmente provocam broncoconstrição. Em baixas doses (nível sérico 5–10 mg/L), também ativa histonas deacetilases (HDAC2) e tem efeito anti-inflamatório que reverte parcialmente a resistência ao corticoide no pulmão do tabagista com DPOC.',
        es: 'La Teofilina tiene un mecanismo doble: (1) Inhibe las Fosfodiesterasas (PDEs), impidiendo la degradación del AMPc — más AMPc → el músculo bronquial se relaja. (2) Antagoniza los receptores de Adenosina A1/A2. En bajas dosis (nivel sérico 5-10 mg/L), activa HDAC2 y tiene efecto antiinflamatorio que revierte parcialmente la resistencia al corticoide.'
      },
      dose: {
        adult: {
          pt: 'Dose individualizada por nível sérico. Início: 200–300 mg/dia VO (liberação prolongada). Dose-alvo (nível terapêutico 5–15 mg/L): geralmente 400–800 mg/dia divididos a cada 12 horas. NUNCA ultrapassar 900 mg/dia sem monitorização sérica.',
          es: 'Dosis individualizada por nivel sérico. Inicio: 200-300 mg/día VO (liberación prolongada). Dosis-objetivo (nivel terapéutico 5-15 mg/L): generalmente 400-800 mg/día divididos cada 12 horas. NUNCA superar 900 mg/día sin monitorización sérica.'
        },
        pediatric: {
          pt: '1–9 anos: 12–14 mg/kg/dia (máx. 300 mg/dia). 9–16 anos: 18 mg/kg/dia (máx. 400 mg/dia). Monitoração sérica obrigatória.',
          es: '1-9 años: 12-14 mg/kg/día (máx. 300 mg/día). 9-16 años: 18 mg/kg/día (máx. 400 mg/día). Monitorización sérica obligatoria.'
        }
      },
      administration: { pt: ['Comprimidos de liberação prolongada: engolir inteiro, não partir ou triturar.', 'Tomar preferencialmente com alimentos para reduzir irritação gástrica.', 'Monitorar nível sérico: colher amostra 5–6 horas após dose matinal (estado estacionário).'], es: ['Comprimidos de liberación prolongada: tragar entero, no partir ni triturar.', 'Tomar preferentemente con alimentos para reducir irritación gástrica.', 'Monitorar nivel sérico: extraer muestra 5-6 horas después de la dosis matinal.'] },
      renalAdjustment: { required: false, message: { pt: 'Metabolismo hepático (CYP1A2). Insuficiência renal isolada não requer ajuste, mas monitorar nível sérico.', es: 'Metabolismo hepático (CYP1A2). Insuficiencia renal aislada no requiere ajuste, pero monitorar nivel sérico.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cirrose ou hepatite grave reduz clearance drasticamente — doses usuais provocam toxicidade. Reduzir 25–50% e monitorar de perto.', es: 'Cirrosis o hepatitis grave reducen el clearance drásticamente. Reducir 25-50% y monitorar de cerca.' } },
      commonAdverseEffects: { pt: ['Náuseas, vômitos e dor epigástrica (nível sérico > 10 mg/L)', 'Cefaleia e nervosismo', 'Taquicardia sinusal', 'Insônia e tremores finos'], es: ['Náuseas, vómitos y dolor epigástrico (nivel sérico > 10 mg/L)', 'Cefalea y nerviosismo', 'Taquicardia sinusal', 'Insomnio y temblores finos'] },
      dangerousAdverseEffects: { pt: ['TOXICIDADE GRAVE (nível > 20 mg/L): Convulsões refratárias, taquicardia ventricular, Fibrilação Ventricular, Encefalopatia', 'Hipocalemia severa (potencializada por Beta-2 agonistas)'], es: ['TOXICIDAD GRAVE (nivel > 20 mg/L): Convulsiones refractarias, taquicardia ventricular, Fibrilación Ventricular, Encefalopatía', 'Hipocalemia severa (potenciada por Beta-2 agonistas)'] },
      contraindications: {
        absolute: { pt: ['Arritmias cardíacas ativas sem tratamento', 'Úlcera péptica ativa não tratada'], es: ['Arritmias cardíacas activas sin tratamiento', 'Úlcera péptica activa no tratada'] },
        relative: { pt: ['Tabagismo ativo (aumenta o clearance da teofilina — necessita doses maiores)', 'Epilepsia (reduz limiar convulsivo)', 'Hipotireoidismo (reduz clearance — risco de intoxicação)'], es: ['Tabaquismo activo (aumenta el clearance — necesita dosis mayores)', 'Epilepsia (reduce umbral convulsivo)', 'Hipotiroidismo (reduce clearance — riesgo de intoxicación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ÍNDICE TERAPÊUTICO ESTREITÍSSIMO: A janela entre a dose que funciona (nível 5–15 mg/L) e a dose que mata (nível > 20 mg/L) é pequena. O problema é que DEZENAS de medicamentos e condições clínicas alteram o nível: Eritromicina e Ciprofloxacino (inibidores de CYP1A2) DOBRAM o nível. O tabagismo REDUZ o nível à metade. Se o seu paciente parar de fumar enquanto toma Teofilina sem ajustar a dose, você tem uma intoxicação esperando para acontecer.', es: 'ÍNDICE TERAPÉUTICO ESTRECHO: La ventana entre la dosis que funciona (5-15 mg/L) y la que mata (> 20 mg/L) es pequeña. Eritromicina y Ciprofloxacino (inhibidores CYP1A2) DOBLAN el nivel. El tabaco REDUCE el nivel a la mitad. Si el paciente deja de fumar sin ajustar la dosis, tiene una intoxicación esperando.' }
      }
    },

/* ── ROFLUMILASTE ────────────────────────────────────────────────────── */
    "roflumilaste": {
      name: { pt: 'Roflumilaste', es: 'Roflumilast' },
      category: 'pneumologia',
      class: { pt: 'Inibidor seletivo de Fosfodiesterase-4 (PDE-4)', es: 'Inhibidor selectivo de Fosfodiesterasa-4 (PDE-4)' },
      indications: {
        pt: ['Redução das exacerbações na DPOC grave (VEF1 < 50% do predito) com bronquite crônica e histórico de exacerbações frequentes apesar de broncodilatadores inalatórios ótimos', 'Uso combinado com broncodilatadores de longa ação — NUNCA como monoterapia'],
        es: ['Reducción de las exacerbaciones en la EPOC grave (VEF1 < 50% del predicho) con bronquitis crónica y antecedentes de exacerbaciones frecuentes a pesar de broncodilatadores inhalatorios óptimos', 'Uso combinado con broncodilatadores de larga acción — NUNCA como monoterapia']
      },
      commercialNames: { br: ['Daxas'], ar: ['Daxas'] },
      presentation: { pt: ['Comprimidos revestidos 500 mcg (0,5 mg)'], es: ['Comprimidos recubiertos 500 mcg (0,5 mg)'] },
      mechanism: {
        pt: 'O Roflumilaste faz o que nenhuma bombinha consegue: ele é um comprimido que age nas células inflamatórias do interior do pulmão. A PDE-4 é a enzima que degrada o AMPc dentro dos neutrófilos, macrófagos e eosinófilos. Ao inibir a PDE-4, o Roflumilaste acumula AMPc dentro dessas células imunes — AMPc alto "acalma" essas células, reduzindo a produção de citocinas inflamatórias (IL-6, IL-8, TNF) que causam as exacerbações purulentas da bronquite crônica da DPOC.',
        es: 'El Roflumilast hace lo que ningún inhalador logra: es un comprimido que actúa en las células inflamatorias del interior del pulmón. La PDE-4 degrada el AMPc dentro de neutrófilos, macrófagos y eosinófilos. Al inhibir PDE-4, el Roflumilast acumula AMPc, "calmando" estas células e reduciendo citocinas inflamatorias que causan las exacerbaciones.'
      },
      dose: {
        adult: {
          pt: '500 mcg (0,5 mg) por via oral, UMA VEZ ao dia. Para reduzir efeitos gastrointestinais iniciais: iniciar com 250 mcg/dia (meio comprimido) por 4 semanas, depois escalar para 500 mcg/dia.',
          es: '500 mcg (0,5 mg) por vía oral, UNA VEZ al día. Para reducir efectos gastrointestinales iniciales: iniciar con 250 mcg/día (medio comprimido) por 4 semanas, luego escalar.'
        },
        pediatric: {
          pt: 'Não indicado. Doença exclusiva de adultos.',
          es: 'No indicado. Enfermedad exclusiva de adultos.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimento.', 'Monitorar peso corporal — perda de peso frequente e significativa ao longo do tratamento.'], es: ['Puede tomarse con o sin alimento.', 'Monitorar peso corporal — pérdida de peso frecuente y significativa durante el tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Eliminação predominantemente fecal (metabólito ativo). Não requer ajuste.', es: 'Eliminación predominantemente fecal (metabolito activo). No requiere ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em insuficiência hepática moderada a grave (Child-Pugh B e C). Metabolismo hepático extenso.', es: 'CONTRAINDICADO en insuficiencia hepática moderada a grave (Child-Pugh B y C). Metabolismo hepático extenso.' } },
      commonAdverseEffects: { pt: ['Diarreia e náuseas (primeiras semanas)', 'Perda de peso (média de 2 kg — pode ser maior)', 'Cefaleia e insônia'], es: ['Diarrea y náuseas (primeras semanas)', 'Pérdida de peso (promedio de 2 kg — puede ser mayor)', 'Cefalea e insomnio'] },
      dangerousAdverseEffects: { pt: ['Transtornos neuropsiquiátricos: ansiedade, depressão, ideação suicida (FDA Black Box Warning)', 'Perda de peso clinicamente significativa em pacientes com baixo IMC (caquexia da DPOC)'], es: ['Trastornos neuropsiquiátricos: ansiedad, depresión, ideación suicida (FDA Black Box Warning)', 'Pérdida de peso clínicamente significativa en pacientes con bajo IMC (caquexia de la EPOC)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Hepática moderada a grave (Child-Pugh B ou C)', 'Histórico de depressão grave com ideação suicida'], es: ['Insuficiencia Hepática moderada a grave (Child-Pugh B o C)', 'Historial de depresión grave con ideación suicida'] },
        relative: { pt: ['Desnutrição grave ou IMC < 18 (agrava a perda de peso)', 'Uso concomitante de imunosupressores sistêmicos fortes'], es: ['Desnutrición grave o IMC < 18 (agrava la pérdida de peso)', 'Uso concomitante de inmunosupresores sistémicos fuertes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DPOC + DEPRESSÃO = PROIBIDO: O paciente clássico do Daxas é o homem de 65 anos, obeso, tabagista crônico com DPOC grave e bronquite crônica purulenta recorrente. Esse perfil de paciente tem alto risco de depressão. Se o pneumologista prescrever o Roflumilaste sem investigar e tratar a depressão pré-existente, está agravando um risco de suicídio que já era elevado. Rastrear depressão (PHQ-9) ANTES de prescrever é obrigatório.', es: 'EPOC + DEPRESIÓN = PROHIBIDO: Si el neumólogo prescribe Roflumilast sin investigar y tratar la depresión preexistente, está agravando un riesgo de suicidio ya elevado. Rastrear depresión (PHQ-9) ANTES de prescribir es obligatorio.' }
      }
    }

  }); /* fim Object.assign PNEUMOLOGIA_DRUGS_DB — BUILD 397 + BUILD 398 + BUILD 399
         BUILD 397 — ICS/LABA: Beclometasona+Formoterol, Fluticasona+Salmeterol, Fluticasona+Vilanterol
                     LAMA/LABA: Umeclidínio+Vilanterol, Tiotrópio+Olodaterol
         BUILD 398 — LAMA/LABA: Glicopirrônio+Indacaterol (Ultibro)
                     Terapia Tripla: Breztri, Trelegy, Trimbow
                     Antifibrótico: Pirfenidona (Esbriet)
         BUILD 399 — Antifibrótico: Nintedanibe (Ofev)
                     Antileucotrienos: Montelucaste (Singulair), Zafirlucaste (Accolate)
                     Xantina: Teofilina (Euphyllin)
                     Inibidor PDE-4: Roflumilaste (Daxas) */
})();
