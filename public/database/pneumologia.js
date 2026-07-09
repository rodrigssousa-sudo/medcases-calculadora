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
    }

  });
})();
