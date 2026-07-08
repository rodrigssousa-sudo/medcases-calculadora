/* ============================================================
   MedCases Pro — Módulo: EMERGÊNCIA / ANESTESIA
   Expõe: window.EMERGENCIA_DRUGS_DB

   BUILD 316 — Lote 1 (Anestésicos de Emergência)
   Cetamina, Etomidato
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.EMERGENCIA_DRUGS_DB !== 'object' || Array.isArray(window.EMERGENCIA_DRUGS_DB)) {
    window.EMERGENCIA_DRUGS_DB = {};
  }

  Object.assign(window.EMERGENCIA_DRUGS_DB, {

/* ── CETAMINA / KETAMINA ────────────────────────────────────────────── */
    "cetamina": {
      name: { pt: 'Cetamina / Ketamina', es: 'Ketamina' },
      category: 'emergencia',
      class: { pt: 'Anestésico Dissociativo (Antagonista NMDA)', es: 'Anestésico Disociativo (Antagonista NMDA)' },
      indications: {
        pt: ['Indução anestésica na Intubação de Sequência Rápida (ISR)', 'Sedação para procedimentos dolorosos curtos (redução de fraturas, drenagens)', 'Dor aguda refratária', 'Depressão maior refratária / Risco de suicídio agudo'],
        es: ['Inducción anestésica en la Intubación de Secuencia Rápida (ISR)', 'Sedación para procedimientos dolorosos cortos (reducción de fracturas, drenajes)', 'Dolor agudo refractario', 'Depresión mayor refractaria / Riesgo de suicidio agudo']
      },
      commercialNames: { br: ['Ketamin', 'Ketalar'], ar: ['Ketamina', 'Ketalar'] },
      presentation: { pt: ['Frasco-ampola IV/IM 50 mg/mL (10 mL)'], es: ['Vial IV/IM 50 mg/mL (10 mL)'] },
      mechanism: {
        pt: 'Antagonista não-competitivo dos receptores NMDA (bloqueia o glutamato). Interrompe as vias de associação cerebral, gerando um estado de "transe cataléptico" (anestesia dissociativa) onde o paciente fica profundamente analgésico e amnésico, mantendo os olhos abertos. O ÚNICO INDUTOR que estimula o sistema nervoso simpático, promovendo liberação maciça de catecolaminas (AUMENTA pressão arterial e frequência cardíaca) e atuando como broncodilatador severo.',
        es: 'Antagonista no competitivo de los receptores NMDA (bloquea el glutamato). Interrumpe las vías de asociación cerebral, generando un estado de "trance cataléptico" (anestesia disociativa) donde el paciente queda profundamente analgésico y amnésico, manteniendo los ojos abiertos. EL ÚNICO INDUCTOR que estimula el sistema nervioso simpático, promoviendo liberación masiva de catecolaminas (AUMENTA presión arterial y frecuencia cardíaca) y actuando como broncodilatador severo.'
      },
      dose: {
        adult: {
          pt: 'Indução/ISR: 1 a 2 mg/kg IV (início de ação em 30 seg). Analgesia Subdissociativa (Dor): 0,1 a 0,3 mg/kg IV lento. Procedimentos: 1 mg/kg IV ou 4 mg/kg IM.',
          es: 'Inducción/ISR: 1 a 2 mg/kg IV (inicio de acción en 30 seg). Analgesia Subdisociativa (Dolor): 0,1 a 0,3 mg/kg IV lento. Procedimientos: 1 mg/kg IV o 4 mg/kg IM.'
        },
        pediatric: {
          pt: 'Sedação p/ procedimentos: 1 a 2 mg/kg IV ou 4 a 5 mg/kg IM.',
          es: 'Sedación p/ procedimientos: 1 a 2 mg/kg IV o 4 a 5 mg/kg IM.'
        }
      },
      administration: { pt: ['IV direto lento (em 1 minuto). Injeções rápidas demais podem causar apneia ou laringoespasmo transitório.'], es: ['IV directo lento (en 1 minuto). Inyecciones demasiado rápidas pueden causar apnea o laringoespasmo transitorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para doses em bolus de emergência.', es: 'Sin necesidad de ajuste para dosis en bolo de emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade no uso emergencial (se uso crônico em dor, o metabolismo hepático exigiria cautela).', es: 'Sin necesidad en el uso de emergencia (si uso crónico en dolor, el metabolismo hepático exigiría precaución).' } },
      commonAdverseEffects: { pt: ['Alucinações / Delirium de emergência (sonhos aterrorizantes ao acordar)', 'Sialorreia (excesso de salivação)', 'Aumento da Pressão Arterial e Taquicardia'], es: ['Alucinaciones / Delirium de emergencia (sueños aterrorizantes al despertar)', 'Sialorrea (exceso de salivación)', 'Aumento de la Presión Arterial y Taquicardia'] },
      dangerousAdverseEffects: { pt: ['Laringoespasmo (especialmente em crianças com via aérea hiper-reativa)', 'Crise Hipertensiva aguda', 'Aumento da Pressão Intraocular'], es: ['Laringoespasmo (especialmente en niños con vía aérea hiperreactiva)', 'Crisis Hipertensiva aguda', 'Aumento de la Presión Intraocular'] },
      contraindications: {
        absolute: { pt: ['Esquizofrenia ou psicoses graves em crise', 'Dissecção aguda de aorta ou crise hipertensiva fatal (>180/120)', 'Hipertireoidismo grave não tratado'], es: ['Esquizofrenia o psicosis graves en crisis', 'Disección aguda de aorta o crisis hipertensiva fatal (>180/120)', 'Hipertiroidismo grave no tratado'] },
        relative: { pt: ['Hipertensão Intracraniana (Historicamente contraindicada, mas evidências recentes mostram que não aumenta a PIC clinicamente significativa se o paciente estiver bem ventilado)'], es: ['Hipertensión Intracraneal (Históricamente contraindicada, pero evidencias recientes muestran que no aumenta la PIC clínicamente significativa si el paciente está bien ventilado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'É O INDUTOR DE ESCOLHA NO CHOQUE SÉPTICO E ASMA GRAVE. A cetamina protege a pressão arterial (ação simpática) e promove broncodilatação extrema. Para evitar o "delirium" ao acordar, geralmente associa-se uma dose baixa de Midazolam (1-2mg).', es: 'ES EL INDUCTOR DE ELECCIÓN EN EL CHOQUE SÉPTICO Y ASMA GRAVE. La ketamina protege la presión arterial (acción simpática) y promueve broncodilatación extrema. Para evitar el "delirium" al despertar, generalmente se asocia una dosis baja de Midazolam (1-2mg).' }
      }
    },  // end cetamina

/* ── ETOMIDATO ──────────────────────────────────────────────────────── */
    "etomidato": {
      name: { pt: 'Etomidato', es: 'Etomidato' },
      category: 'emergencia',
      class: { pt: 'Anestésico Geral / Hipnótico não barbitúrico', es: 'Anestésico General / Hipnótico no barbitúrico' },
      indications: {
        pt: ['Indução anestésica na Intubação de Sequência Rápida (ISR)', 'Indução em pacientes hemodinamicamente instáveis (trauma, cardiopatas graves)'],
        es: ['Inducción anestésica en la Intubación de Secuencia Rápida (ISR)', 'Inducción en pacientes hemodinámicamente inestables (trauma, cardiópatas graves)']
      },
      commercialNames: { br: ['Hypnomidate'], ar: ['Etomidato'] },
      presentation: { pt: ['Ampolas IV 2 mg/mL (10 mL)'], es: ['Ampollas IV 2 mg/mL (10 mL)'] },
      mechanism: {
        pt: 'Modulador alostérico positivo do receptor GABA-A (aumenta o fluxo de cloro, inibindo o SNC). Provoca hipnose profunda em apenas 10 a 15 segundos. O seu grande trunfo é a TOTAL ESTABILIDADE HEMODINÂMICA: não deprime o miocárdio, não altera a resistência vascular sistêmica e não causa taquicardia. Reduz a pressão intracraniana e o consumo de oxigênio cerebral. NÃO possui qualquer efeito analgésico.',
        es: 'Modulador alostérico positivo del receptor GABA-A (aumenta el flujo de cloro, inhibiendo el SNC). Provoca hipnosis profunda en solo 10 a 15 segundos. Su gran ventaja es la TOTAL ESTABILIDAD HEMODINÁMICA: no deprime el miocardio, no altera la resistencia vascular sistémica y no causa taquicardia. Reduce la presión intracraneal y el consumo de oxígeno cerebral. NO posee ningún efecto analgésico.'
      },
      dose: {
        adult: {
          pt: 'Indução (ISR): 0,3 mg/kg IV em bolus único (geralmente 1 ampola de 20mg para adulto médio).',
          es: 'Inducción (ISR): 0,3 mg/kg IV en bolo único (generalmente 1 ampolla de 20mg para adulto promedio).'
        },
        pediatric: {
          pt: 'Indução (ISR): 0,3 mg/kg IV.',
          es: 'Inducción (ISR): 0,3 mg/kg IV.'
        }
      },
      administration: { pt: ['Injeção IV direta ao longo de 30 a 60 segundos.', 'A injeção é extremamente dolorosa na veia; a formulação em propilenoglicol é irritante.'], es: ['Inyección IV directa a lo largo de 30 a 60 segundos.', 'La inyección es extremadamente dolorosa en la vena; la formulación en propilenglicol es irritante.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em dose única.', es: 'Sin necesidad de ajuste en dosis única.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em emergência.', es: 'Sin necesidad de ajuste en emergencia.' } },
      commonAdverseEffects: { pt: ['Mioclonia severa na indução (espasmos musculares que parecem convulsão)', 'Dor intensa no local de injeção', 'Náuseas e Vômitos intensos no pós-operatório (PONV)'], es: ['Mioclonía severa en la inducción (espasmos musculares que parecen convulsión)', 'Dolor intenso en el sitio de inyección', 'Náuseas y Vómitos intensos en el posoperatorio (PONV)'] },
      dangerousAdverseEffects: { pt: ['Supressão adrenal aguda e reversível (inibe a enzima 11-beta-hidroxilase)', 'Tromboflebite'], es: ['Supresión adrenal aguda y reversible (inhibe la enzima 11-beta-hidroxilasa)', 'Tromboflebitis'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao fármaco', 'Infusão contínua para sedação prolongada em UTI (mortalidade altíssima por falência adrenal)'], es: ['Hipersensibilidad al fármaco', 'Infusión continua para sedación prolongada en UCI (mortalidad altísima por falla adrenal)'] },
        relative: { pt: ['Choque Séptico em fase inicial (discutível: alguns autores evitam etomidato na sepse pelo risco de bloqueio das suprarrenais no momento que o paciente mais precisa do cortisol natural; prefere-se cetamina)'], es: ['Choque Séptico en fase inicial (discutible: algunos autores evitan etomidato en sepsis por el riesgo de bloqueo de las suprarrenales en el momento que el paciente más necesita el cortisol natural; se prefiere ketamina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'É o indutor de excelência no paciente chocado/traumatizado (hipovolêmico) ou com falência cardíaca prévia. LEMBRETE: O Etomidato NÃO tira a dor, apenas "desliga" a consciência. Para a intubação, deve SEMPRE ser associado a um bloqueador neuromuscular e, preferencialmente, um opioide (fentanil) prévio.', es: 'Es el inductor de excelencia en el paciente chocado/traumatizado (hipovolémico) o con falla cardíaca previa. RECORDATORIO: El Etomidato NO quita el dolor, solo "apaga" la consciencia. Para la intubación, debe SIEMPRE asociarse a un bloqueador neuromuscular y, preferentemente, un opioide (fentanilo) previo.' }
      }
    },  // end etomidato

/* ── ROCURÔNIO ──────────────────────────────────────────────────────── */
    "rocuronio": {
      name: { pt: 'Rocurônio', es: 'Rocuronio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante (Aminosteroide)', es: 'Bloqueador Neuromuscular No Despolarizante (Aminosteroide)' },
      indications: {
        pt: ['Intubação de Sequência Rápida (ISR) - Alternativa à Succinilcolina', 'Manutenção do bloqueio neuromuscular em UTI (SDRA grave)'],
        es: ['Intubación de Secuencia Rápida (ISR) - Alternativa a la Succinilcolina', 'Mantenimiento del bloqueo neuromuscular en UCI (SDRA grave)']
      },
      commercialNames: { br: ['Esmeron', 'Roculim'], ar: ['Esmeron'] },
      presentation: { pt: ['Frasco-ampola IV 10 mg/mL (5 mL)'], es: ['Vial IV 10 mg/mL (5 mL)'] },
      mechanism: {
        pt: 'Antagonista competitivo puro dos receptores colinérgicos nicotínicos na placa motora. Impede a ligação da acetilcolina, causando paralisia flácida em todo o músculo esquelético. Possui o início de ação mais rápido entre os adespolarizantes (45 a 60 segundos), tornando-o ideal para ISR. Duração clínica de 30 a 40 minutos em dose padrão.',
        es: 'Antagonista competitivo puro de los receptores colinérgicos nicotínicos en la placa motora. Impide la unión de la acetilcolina, causando parálisis flácida en todo el músculo esquelético. Posee el inicio de acción más rápido entre los no despolarizantes (45 a 60 segundos), haciéndolo ideal para ISR. Duración clínica de 30 a 40 minutos en dosis estándar.'
      },
      dose: {
        adult: {
          pt: 'Intubação (ISR): 1,0 a 1,2 mg/kg IV. Manutenção UTI: Infusão contínua de 0,3 a 0,6 mg/kg/h.',
          es: 'Intubación (ISR): 1,0 a 1,2 mg/kg IV. Mantenimiento UCI: Infusión continua de 0,3 a 0,6 mg/kg/h.'
        },
        pediatric: {
          pt: 'Intubação (ISR): 1,0 a 1,2 mg/kg IV. (Uso seguro em pediatria).',
          es: 'Intubación (ISR): 1,0 a 1,2 mg/kg IV. (Uso seguro en pediatría).'
        }
      },
      administration: { pt: ['Bolus IV direto rápido para intubação.', 'Armazenar em refrigeração (2 a 8°C). Após aberto em temperatura ambiente, validade curta.'], es: ['Bolo IV directo rápido para intubación.', 'Almacenar en refrigeración (2 a 8°C). Una vez abierto a temperatura ambiente, validez corta.'] },
      renalAdjustment: { required: false, message: { pt: 'Depuração parcialmente renal. Em falência renal severa, a meia-vida pode dobrar de tempo (bloqueio residual).', es: 'Depuración parcialmente renal. En falla renal severa, la vida media puede duplicar su tiempo (bloqueo residual).' } },
      hepaticAdjustment: { required: true, message: { pt: 'O fígado é a via primária de eliminação (bílis). Cirróticos terão aumento dramático do tempo de paralisia.', es: 'El hígado es la vía primaria de eliminación (bilis). Los cirróticos tendrán un aumento dramático del tiempo de parálisis.' } },
      commonAdverseEffects: { pt: ['Aumento transitório e leve da frequência cardíaca', 'Dor à injeção'], es: ['Aumento transitorio y leve de la frecuencia cardíaca', 'Dolor a la inyección'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia (BNMs são uma das principais causas de choque anafilático perioperatório)', 'Paralisia residual prolongada (hipoventilação pós-extubação)'], es: ['Anafilaxia (los BNMs son una de las principales causas de choque anafiláctico perioperatorio)', 'Parálisis residual prolongada (hipoventilación pos-extubación)'] },
      contraindications: {
        absolute: { pt: ['Falta de material de reanimação ou inabilidade em intubar/ventilar o paciente'], es: ['Falta de material de reanimación o inhabilidad para intubar/ventilar al paciente'] },
        relative: { pt: ['Miastenia Gravis (extrema sensibilidade ao bloqueio)'], es: ['Miastenia Gravis (extrema sensibilidad al bloqueo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'NÃO POSSUI EFEITO SEDATIVO NEM ANALGÉSICO. É tortura paralisar um paciente consciente. SEMPRE administrar indutor (Etomidato/Cetamina) e opioide ANTES de injetar o Rocurônio. Antídoto ultra-rápido: Sugamadex.', es: 'NO POSEE EFECTO SEDANTE NI ANALGÉSICO. Es tortura paralizar a un paciente consciente. SIEMPRE administrar inductor (Etomidato/Ketamina) y opioide ANTES de inyectar el Rocuronio. Antídoto ultra-rápido: Sugamadex.' }
      }
    },  // end rocuronio

/* ── SUCCINILCOLINA ─────────────────────────────────────────────────── */
    "succinilcolina": {
      name: { pt: 'Succinilcolina (Cloreto de Suxametônio)', es: 'Succinilcolina (Cloruro de Suxametonio)' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Despolarizante', es: 'Bloqueador Neuromuscular Despolarizante' },
      indications: {
        pt: ['Intubação de Sequência Rápida (ISR) - Padrão histórico', 'Laringoespasmo refratário'],
        es: ['Intubación de Secuencia Rápida (ISR) - Estándar histórico', 'Laringoespasmo refractario']
      },
      commercialNames: { br: ['Quelicin'], ar: ['Succinilcolina'] },
      presentation: { pt: ['Frasco-ampola liofilizado 100 mg', '500 mg'], es: ['Vial liofilizado 100 mg', '500 mg'] },
      mechanism: {
        pt: 'Agonista dos receptores nicotínicos (age como se fossem duas moléculas de acetilcolina unidas). Liga-se ao receptor e causa uma despolarização muscular sustentada e ininterrupta (o que se manifesta visivelmente como "fasciculações" musculares agudas). A placa motora não consegue se repolarizar, resultando em paralisia flácida em seguida. Duração ultra-curta (3 a 5 minutos) por ser degradada rapidamente no sangue pela enzima pseudocolinesterase plasmática.',
        es: 'Agonista de los receptores nicotínicos (actúa como si fueran dos moléculas de acetilcolina unidas). Se une al receptor y causa una despolarización muscular sostenida e ininterrumpida (lo que se manifiesta visiblemente como "fasciculaciones" musculares agudas). La placa motora no logra repolarizarse, resultando en parálisis flácida luego. Duración ultra-corta (3 a 5 minutos) por ser degradada rápidamente en la sangre por la enzima pseudocolinesterasa plasmática.'
      },
      dose: {
        adult: {
          pt: 'ISR: 1,0 a 1,5 mg/kg IV (máx 150 mg). Início de ação em 45 segundos.',
          es: 'ISR: 1,0 a 1,5 mg/kg IV (máx 150 mg). Inicio de acción en 45 segundos.'
        },
        pediatric: {
          pt: 'Infantes e crianças pequenas necessitam de dose maior (2 mg/kg IV). Risco elevado de bradicardia em pediatria.',
          es: 'Infantes y niños pequeños necesitan mayor dosis (2 mg/kg IV). Riesgo elevado de bradicardia en pediatría.'
        }
      },
      administration: { pt: ['Bolus IV direto imediato.'], es: ['Bolo IV directo inmediato.'] },
      renalAdjustment: { required: false, message: { pt: 'Contraindicado em insuficiência renal aguda ou anúricos por risco de hipercalemia fatal.', es: 'Contraindicado en insuficiencia renal aguda o anúricos por riesgo de hiperpotasemia fatal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com falência hepática produzem pouca pseudocolinesterase. A succinilcolina pode durar horas (bloqueio prolongado).', es: 'Pacientes con falla hepática producen poca pseudocolinesterasa. La succinilcolina puede durar horas (bloqueo prolongado).' } },
      commonAdverseEffects: { pt: ['Fasciculações musculares vigorosas pré-paralisia', 'Mialgia difusa grave no pós-operatório', 'Aumento transitório de pressão intragástrica e intraocular'], es: ['Fasciculaciones musculares vigorosas pre-parálisis', 'Mialgia difusa grave en el posoperatorio', 'Aumento transitorio de presión intragástrica e intraocular'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia fatal (o canal de despolarização expulsa muito potássio da célula)', 'Hipertermia Maligna (um dos principais gatilhos)', 'Bradicardia profunda ou assistolia (em segundas doses ou em crianças)'], es: ['Hiperpotasemia fatal (el canal de despolarización expulsa mucho potasio de la célula)', 'Hipertermia Maligna (uno de los principales gatillos)', 'Bradicardia profunda o asistolia (en segundas dosis o en niños)'] },
      contraindications: {
        absolute: { pt: ['Grandes queimados (> 48h de lesão)', 'Trauma raquimedular / Paraplegia (> 48h)', 'Doenças desmielinizantes / Rabdomiólise / Miopatias', 'Histórico familiar de Hipertermia Maligna', 'Hipercalemia basal conhecida (> 5.5)'], es: ['Grandes quemados (> 48h de lesión)', 'Trauma raquimedular / Paraplejía (> 48h)', 'Enfermedades desmielinizantes / Rabdomiólisis / Miopatías', 'Historial familiar de Hipertermia Maligna', 'Hiperpotasemia basal conocida (> 5.5)'] },
        relative: { pt: ['Crianças sem acesso venoso prévio (pode causar bradicardia súbita)'], es: ['Niños sin acceso venoso previo (puede causar bradicardia súbita)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'NÃO POSSUI ANTÍDOTO. Em pacientes com "up-regulation" de receptores (queimados/acamados), a succinilcolina causa um efluxo letal de potássio, gerando parada cardíaca em assistolia quase imediata.', es: 'NO POSEE ANTÍDOTO. En pacientes con "up-regulation" de receptores (quemados/encamados), la succinilcolina causa un eflujo letal de potasio, generando paro cardíaco en asistolia casi inmediata.' }
      }
    },  // end succinilcolina

/* ── CISATRACÚRIO ───────────────────────────────────────────────────── */
    "cisatracurio": {
      name: { pt: 'Cisatracúrio', es: 'Cisatracurio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante (Benzilisoquinolínico)', es: 'Bloqueador Neuromuscular No Despolarizante (Bencilisoquinolínico)' },
      indications: {
        pt: ['Ouro padrão para infusão contínua em UTI (pacientes com SDRA grave)', 'Anestesia geral com falência de múltiplos órgãos'],
        es: ['Estándar de oro para infusión continua en UCI (pacientes con SDRA grave)', 'Anestesia general con fallo de múltiples órganos']
      },
      commercialNames: { br: ['Nimbium'], ar: ['Nimbium'] },
      presentation: { pt: ['Ampolas IV 2 mg/mL (5 mL)'], es: ['Ampollas IV 2 mg/mL (5 mL)'] },
      mechanism: {
        pt: 'Antagonista competitivo da acetilcolina na placa motora. Seu aspecto brilhante e único (frente a todos os outros BNMs) é o seu metabolismo: Ele sofre "Eliminação de Hofmann". Isso significa que a molécula se desintegra espontaneamente no plasma dependendo apenas do pH e da temperatura corporal normal, INDEPENDENTE do fígado ou dos rins. É extremamente seguro para disfunção orgânica múltipla.',
        es: 'Antagonista competitivo de la acetilcolina en la placa motora. Su aspecto brillante y único (frente a todos los otros BNMs) es su metabolismo: Sufre "Eliminación de Hofmann". Esto significa que la molécula se desintegra espontáneamente en el plasma dependiendo solo del pH y la temperatura corporal normal, INDEPENDIENTEMENTE del hígado o los riñones. Es extremadamente seguro para disfunción orgánica múltiple.'
      },
      dose: {
        adult: {
          pt: 'Intubação: 0,15 a 0,2 mg/kg IV. Manutenção UTI (Infusão): 1 a 3 mcg/kg/min (ou 0,06 a 0,18 mg/kg/h).',
          es: 'Intubación: 0,15 a 0,2 mg/kg IV. Mantenimiento UCI (Infusión): 1 a 3 mcg/kg/min (o 0,06 a 0,18 mg/kg/h).'
        },
        pediatric: {
          pt: 'Seguro, dose semelhante ao adulto (0,15 mg/kg).',
          es: 'Seguro, dosis similar al adulto (0,15 mg/kg).'
        }
      },
      administration: { pt: ['A injeção para intubação demora um pouco mais para fazer efeito do que o rocurônio (cerca de 2 a 3 minutos), não sendo o ideal para Sequência Rápida urgente.'], es: ['La inyección para intubación tarda un poco más en hacer efecto que el rocuronio (cerca de 2 a 3 minutos), no siendo lo ideal para Secuencia Rápida urgente.'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente independente da via renal (Eliminação de Hofmann). O FÁRMACO DE ESCOLHA em anúricos.', es: 'Totalmente independiente de la vía renal (Eliminación de Hofmann). EL FÁRMACO DE ELECCIÓN en anúricos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Totalmente independente do fígado. O FÁRMACO DE ESCOLHA na cirrose/insuficiência hepática.', es: 'Totalmente independiente del hígado. EL FÁRMACO DE ELECCIÓN en cirrosis/insuficiencia hepática.' } },
      commonAdverseEffects: { pt: ['Quase isento de efeitos hemodinâmicos sistêmicos.', 'Bloqueio residual se monitorização TOF não for adequada.'], es: ['Casi exento de efectos hemodinámicos sistémicos.', 'Bloqueo residual si la monitorización TOF no es adecuada.'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia (comum a todos os BNMs)', 'Miopatia do doente crítico (se usado por muitos dias seguidos em UTI)'], es: ['Anafilaxia (común a todos los BNMs)', 'Miopatía del enfermo crítico (si se usa por muchos días seguidos en UCI)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade'], es: ['Hipersensibilidad'] },
        relative: { pt: ['Hipotermia grave (a degradação da droga desacelera, prolongando o bloqueio)', 'Acidose severa (pH < 7.1 atrasa a degradação de Hofmann)'], es: ['Hipotermia grave (la degradación de la droga desacelera, prolongando el bloqueo)', 'Acidosis severa (pH < 7.1 retrasa la degradación de Hofmann)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Ao contrário de seu "irmão mais velho" Atracúrio, o Cisatracúrio NÃO libera histamina (não causa broncoespasmo nem hipotensão) e acumula níveis insignificantes de laudanosina. Extremamente seguro e limpo.', es: 'A diferencia de su "hermano mayor" Atracurio, el Cisatracurio NO libera histamina (no causa broncoespasmo ni hipotensión) y acumula niveles insignificantes de laudanosina. Extremadamente seguro y limpio.' }
      }
    },  // end cisatracurio

/* ── ATRACÚRIO ──────────────────────────────────────────────────────── */
    "atracurio": {
      name: { pt: 'Atracúrio', es: 'Atracurio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante (Benzilisoquinolínico)', es: 'Bloqueador Neuromuscular No Despolarizante (Bencilisoquinolínico)' },
      indications: {
        pt: ['Relaxamento muscular em anestesia cirúrgica e UTI (quando o cisatracúrio não está disponível)'],
        es: ['Relajación muscular en anestesia quirúrgica y UCI (cuando el cisatracurio no está disponible)']
      },
      commercialNames: { br: ['Tracrium'], ar: ['Tracrium'] },
      presentation: { pt: ['Ampolas IV 10 mg/mL (2,5 mL ou 5 mL)'], es: ['Ampollas IV 10 mg/mL (2,5 mL o 5 mL)'] },
      mechanism: {
        pt: 'Adespolarizante que bloqueia competitivamente a placa motora. Semelhante ao cisatracúrio, sofre Degradação de Hofmann (1/3) e hidrólise de esterases no plasma (2/3), independente de fígado/rim. No entanto, sua molécula é muito mais propensa a estimular os mastócitos, gerando liberação direta e maciça de HISTAMINA.',
        es: 'No despolarizante que bloquea competitivamente la placa motora. Similar al cisatracurio, sufre Degradación de Hofmann (1/3) e hidrólisis de esterasas en plasma (2/3), independiente de hígado/riñón. Sin embargo, su molécula es mucho más propensa a estimular los mastocitos, generando liberación directa y masiva de HISTAMINA.'
      },
      dose: {
        adult: {
          pt: 'Indução: 0,4 a 0,5 mg/kg IV. Manutenção: Infusão de 5 a 10 mcg/kg/min.',
          es: 'Inducción: 0,4 a 0,5 mg/kg IV. Mantenimiento: Infusión de 5 a 10 mcg/kg/min.'
        },
        pediatric: {
          pt: '0,4 a 0,5 mg/kg IV (precaução com instabilidade).',
          es: '0,4 a 0,5 mg/kg IV (precaución con inestabilidad).'
        }
      },
      administration: { pt: ['Injetar LENTAMENTE (em 1 a 2 min) para evitar pico de liberação de histamina.'], es: ['Inyectar LENTAMENTE (en 1 a 2 min) para evitar pico de liberación de histamina.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para a droga-mãe. Mas atenção aos metabólitos na diálise.', es: 'Sin necesidad de ajuste para la droga madre. Pero atención a los metabolitos en diálisis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Eritema/Rubor facial e no pescoço (devido à histamina)', 'Hipotensão transitória', 'Taquicardia'], es: ['Eritema/Rubor facial y en el cuello (debido a la histamina)', 'Hipotensión transitoria', 'Taquicardia'] },
      dangerousAdverseEffects: { pt: ['Broncoespasmo agudo (devido à histamina)', 'Choque anafilactoide severo', 'Convulsões centrais'], es: ['Broncoespasmo agudo (debido a la histamina)', 'Choque anafilactoide severo', 'Convulsiones centrales'] },
      contraindications: {
        absolute: { pt: ['Histórico de reações anafiláticas a BNMs'], es: ['Historial de reacciones anafilácticas a BNMs'] },
        relative: { pt: ['Pacientes asmáticos severos (risco de broncoespasmo pela histamina)', 'Hipotensão basal severa'], es: ['Pacientes asmáticos severos (riesgo de broncoespasmo por la histamina)', 'Hipotensión basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A degradação do Atracúrio gera um metabólito chamado LAUDANOSINA. Esse metabólito excita o SNC e tem clearance puramente renal. Em UTI, se o atracúrio for infundido por muitos dias num doente renal, a laudanosina acumula e causa CONVULSÕES intratáveis.', es: 'La degradación del Atracurio genera un metabolito llamado LAUDANOSINA. Este metabolito excita el SNC y tiene clearance puramente renal. En UCI, si el atracurio se infunde por muchos días en un enfermo renal, la laudanosina se acumula y causa CONVULSIONES intratables.' }
      }
    },  // end atracurio

/* ── PANCURÔNIO ─────────────────────────────────────────────────────── */
    "pancuronio": {
      name: { pt: 'Pancurônio', es: 'Pancuronio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante de Longa Duração', es: 'Bloqueador Neuromuscular No Despolarizante de Larga Duración' },
      indications: {
        pt: ['Relaxamento muscular para cirurgias excepcionalmente longas (cirurgia cardíaca)', 'Manejo de tétano severo'],
        es: ['Relajación muscular para cirugías excepcionalmente largas (cirugía cardíaca)', 'Manejo de tétanos severo']
      },
      commercialNames: { br: ['Pancuron'], ar: ['Pavulon'] },
      presentation: { pt: ['Ampolas IV 2 mg/mL'], es: ['Ampollas IV 2 mg/mL'] },
      mechanism: {
        pt: 'Aminosteroide com ação muito prolongada no bloqueio colinérgico nicotínico. Diferencial crucial: Exerce forte bloqueio vagal (vagolítico) no coração, impedindo o controle do freio parassimpático. Isso resulta em taquicardia marcante e aumento da pressão arterial, frequentemente desejáveis em certas cirurgias cardíacas, mas proibitivos em UTI comum.',
        es: 'Aminosteroide con acción muy prolongada en el bloqueo colinérgico nicotínico. Diferencial crucial: Ejerce fuerte bloqueo vagal (vagolítico) en el corazón, impidiendo el control del freno parasimpático. Esto resulta en taquicardia marcada y aumento de la presión arterial, frecuentemente deseables en ciertas cirugías cardíacas, pero prohibitivos en UCI común.'
      },
      dose: {
        adult: {
          pt: '0,08 a 0,1 mg/kg IV inicial. Manutenção exige minúsculas doses esporádicas. Duração clínica pode passar de 90 a 120 minutos por bolus.',
          es: '0,08 a 0,1 mg/kg IV inicial. Mantenimiento exige minúsculas dosis esporádicas. La duración clínica puede pasar de 90 a 120 minutos por bolo.'
        },
        pediatric: {
          pt: '0,1 mg/kg IV.',
          es: '0,1 mg/kg IV.'
        }
      },
      administration: { pt: ['Bolus IV.'], es: ['Bolo IV.'] },
      renalAdjustment: { required: true, message: { pt: 'ALTAMENTE DEPENDENTE dos rins (80% da eliminação). CONTRAINDICADO em UTI para doentes renais, o paciente pode ficar semanas paralisado.', es: 'ALTAMENTE DEPENDIENTE de los riñones (80% de la eliminación). CONTRAINDICADO en UCI para enfermos renales, el paciente puede quedar semanas paralizado.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Parte da droga (20%) e metabólitos sofrem clearance biliar. Prolonga o efeito.', es: 'Parte de la droga (20%) y metabolitos sufren clearance biliar. Prolonga el efecto.' } },
      commonAdverseEffects: { pt: ['Taquicardia sustentada (efeito antimuscarínico)', 'Aumento da Pressão Arterial', 'Salivação excessiva'], es: ['Taquicardia sostenida (efecto antimuscarínico)', 'Aumento de la Presión Arterial', 'Salivación excesiva'] },
      dangerousAdverseEffects: { pt: ['Bloqueio neuromuscular residual refratário e prolongado pós-cirurgia', 'Isquemia miocárdica (secundária à taquicardia severa em coronariopatas)'], es: ['Bloqueo neuromuscular residual refractario y prolongado pos-cirugía', 'Isquemia miocárdica (secundaria a taquicardia severa en coronariópatas)'] },
      contraindications: {
        absolute: { pt: ['Doença isquêmica do miocárdio descompensada ou risco de infarto (devido à taquicardia extrema)'], es: ['Enfermedad isquémica del miocardio descompensada o riesgo de infarto (debido a taquicardia extrema)'] },
        relative: { pt: ['Disfunção renal prévia', 'Cirurgias curtas (< 1 hora)'], es: ['Disfunción renal previa', 'Cirugías cortas (< 1 hora)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Em franco DESUSO na UTI médica moderna devido à longa duração e dificuldade de reversão (nem sempre a neostigmina reverte totalmente e o Sugamadex tem fraca afinidade por ele).', es: 'En franco DESUSO en la UCI médica moderna debido a la larga duración y dificultad de reversión (no siempre la neostigmina revierte totalmente y el Sugamadex tiene débil afinidad por él).' }
      }
    }  // end pancuronio

  }); /* fim Object.assign EMERGENCIA_DRUGS_DB — BUILD 318 Lote 1+2 (Anestésicos ISR + Bloqueadores Neuromusculares) */

})();
