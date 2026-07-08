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
    },  // end pancuronio

/* ── VECURÔNIO ──────────────────────────────────────────────────────── */
    "vecuronio": {
      name: { pt: 'Vecurônio', es: 'Vecuronio' },
      category: 'emergencia',
      class: { pt: 'Bloqueador Neuromuscular Adespolarizante (Aminosteroide)', es: 'Bloqueador Neuromuscular No Despolarizante (Aminosteroide)' },
      indications: {
        pt: ['Relaxamento muscular em cirurgias de média e longa duração', 'Manutenção do bloqueio neuromuscular em UTI'],
        es: ['Relajación muscular en cirugías de media y larga duración', 'Mantenimiento del bloqueo neuromuscular en UCI']
      },
      commercialNames: { br: ['Norcuron'], ar: ['Norcuron'] },
      presentation: { pt: ['Frasco-ampola liofilizado 10 mg', '4 mg'], es: ['Vial liofilizado 10 mg', '4 mg'] },
      mechanism: {
        pt: 'Aminosteroide como o rocurônio, atua competindo pelos receptores colinérgicos nicotínicos na placa motora. Diferente do pancurônio, não possui efeito vagolítico significativo (não causa taquicardia) e não libera histamina de forma relevante. Sua duração é intermediária (30 a 40 minutos por bolus), mas o início de ação é mais lento (2 a 3 minutos), não sendo o ideal para Intubação de Sequência Rápida (ISR).',
        es: 'Aminosteroide como el rocuronio, actúa compitiendo por los receptores colinérgicos nicotínicos en la placa motora. A diferencia del pancuronio, no posee efecto vagolítico significativo (no causa taquicardia) y no libera histamina de forma relevante. Su duración es intermedia (30 a 40 minutos por bolo), pero el inicio de acción es más lento (2 a 3 minutos), no siendo el ideal para Intubación de Secuencia Rápida (ISR).'
      },
      dose: {
        adult: {
          pt: 'Intubação Eletiva: 0,08 a 0,1 mg/kg IV. Manutenção em UTI: Infusão de 0,8 a 1,2 mcg/kg/min.',
          es: 'Intubación Electiva: 0,08 a 0,1 mg/kg IV. Mantenimiento en UCI: Infusión de 0,8 a 1,2 mcg/kg/min.'
        },
        pediatric: {
          pt: '0,1 mg/kg IV.',
          es: '0,1 mg/kg IV.'
        }
      },
      administration: { pt: ['Reconstituição do liofilizado com água destilada. Injeção IV em bolus.'], es: ['Reconstitución del liofilizado con agua destilada. Inyección IV en bolo.'] },
      renalAdjustment: { required: true, message: { pt: 'Cerca de 30% da eliminação é renal. Em DRC, a duração do bloqueio é prolongada. Reduzir infusões de manutenção.', es: 'Cerca del 30% de la eliminación es renal. En ERC, la duración del bloqueo es prolongada. Reducir infusiones de mantenimiento.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Eliminação primariamente biliar/hepática. Acumula rapidamente na cirrose, exigindo doses de manutenção menores.', es: 'Eliminación primariamente biliar/hepática. Se acumula rápidamente en cirrosis, exigiendo dosis de mantenimiento menores.' } },
      commonAdverseEffects: { pt: ['Recuperação prolongada do bloqueio (hipoventilação pós-operatória)'], es: ['Recuperación prolongada del bloqueo (hipoventilación posoperatoria)'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia', 'Miopatia aguda do doente crítico (se uso crônico em UTI associado a corticoides)'], es: ['Anafilaxia', 'Miopatía aguda del enfermo crítico (si uso crónico en UCI asociado a corticoides)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade a brometo de vecurônio'], es: ['Hipersensibilidad a bromuro de vecuronio'] },
        relative: { pt: ['Doenças neuromusculares (Miastenia Gravis, Síndrome de Eaton-Lambert)'], es: ['Enfermedades neuromusculares (Miastenia Gravis, Síndrome de Eaton-Lambert)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O vecurônio tende a se depositar no tecido adiposo e muscular após infusões de vários dias na UTI, o que pode causar paralisia residual refratária de vários dias após desligar a bomba.', es: 'El vecuronio tiende a depositarse en el tejido adiposo y muscular tras infusiones de varios días en la UCI, lo que puede causar parálisis residual refractaria de varios días tras apagar la bomba.' }
      }
    },  // end vecuronio

/* ── SUGAMADEX ──────────────────────────────────────────────────────── */
    "sugamadex": {
      name: { pt: 'Sugamadex', es: 'Sugammadex' },
      category: 'emergencia',
      class: { pt: 'Reversor Seletivo de Bloqueio Neuromuscular (Ciclodextrina)', es: 'Reversor Selectivo de Bloqueo Neuromuscular (Ciclodextrina)' },
      indications: {
        pt: ['Reversão de emergência ou eletiva do bloqueio neuromuscular induzido EXCLUSIVAMENTE por Rocurônio ou Vecurônio', 'Cenário "Não consigo intubar, não consigo ventilar"'],
        es: ['Reversión de emergencia o electiva del bloqueo neuromuscular inducido EXCLUSIVAMENTE por Rocuronio o Vecuronio', 'Escenario "No puedo intubar, no puedo ventilar"']
      },
      commercialNames: { br: ['Bridion'], ar: ['Bridion'] },
      presentation: { pt: ['Ampolas IV 100 mg/mL (2 mL e 5 mL)'], es: ['Ampollas IV 100 mg/mL (2 mL y 5 mL)'] },
      mechanism: {
        pt: 'Revolução farmacológica. É uma gama-ciclodextrina modificada que atua puramente no plasma. Ela age como uma "esponja" que engolfa e encapsula fisicamente as moléculas livres de Rocurônio e Vecurônio no sangue. Ao zerar o rocurônio livre no sangue, cria-se um gradiente de concentração que puxa as moléculas da placa motora de volta para o plasma, revertendo a paralisia muscular completamente em menos de 3 minutos, INDEPENDENTE da profundidade do bloqueio.',
        es: 'Revolución farmacológica. Es una gamma-ciclodextrina modificada que actúa puramente en el plasma. Actúa como una "esponja" que envuelve y encapsula físicamente las moléculas libres de Rocuronio y Vecuronio en la sangre. Al vaciar el rocuronio libre en la sangre, se crea un gradiente de concentración que arrastra las moléculas de la placa motora de vuelta al plasma, revirtiendo la parálisis muscular completamente en menos de 3 minutos, INDEPENDIENTEMENTE de la profundidad del bloqueo.'
      },
      dose: {
        adult: {
          pt: 'Reversão rotineira (TOF 2 contagens): 2 mg/kg IV. Reversão profunda (TOF 0): 4 mg/kg IV. Reversão imediata PÓS-FALHA DE INTUBAÇÃO (resgate de vida): 16 mg/kg IV em bolus rápido.',
          es: 'Reversión rutinaria (TOF 2 conteos): 2 mg/kg IV. Reversión profunda (TOF 0): 4 mg/kg IV. Reversión inmediata POST-FALLA DE INTUBACIÓN (rescate de vida): 16 mg/kg IV en bolo rápido.'
        },
        pediatric: {
          pt: 'Uso pediátrico > 2 anos. Reversão rotineira: 2 mg/kg IV.',
          es: 'Uso pediátrico > 2 años. Reversión rutinaria: 2 mg/kg IV.'
        }
      },
      administration: { pt: ['Bolus IV direto rápido (em cerca de 10 segundos).'], es: ['Bolo IV directo rápido (en unos 10 segundos).'] },
      renalAdjustment: { required: true, message: { pt: 'O complexo Sugamadex-Rocurônio é excretado 100% pelos rins. Em insuficiência renal grave (ClCr < 30 mL/min), o uso é CONTRAINDICADO pela bula, pois o complexo não é depurado.', es: 'El complejo Sugammadex-Rocuronio es excretado 100% por los riñones. En insuficiencia renal grave (ClCr < 30 mL/min), el uso está CONTRAINDICADO por prospecto, pues el complejo no es depurado.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Disgeusia (gosto amargo ou metálico transitório)', 'Tosse e movimentos durante o despertar (recuperação abrupta)'], es: ['Disgeusia (sabor amargo o metálico transitorio)', 'Tos y movimientos durante el despertar (recuperación abrupta)'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa imediata (risco de parada cardíaca; relatórios recentes do FDA pedem atenção)', 'Anafilaxia grave (1 em 300 pacientes)'], es: ['Bradicardia severa inmediata (riesgo de paro cardíaco; reportes recientes de la FDA piden atención)', 'Anafilaxia grave (1 en 300 pacientes)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Uso para reverter bloqueios de Cisatracúrio, Atracúrio ou Succinilcolina (NÃO POSSUI NENHUM EFEITO nessas drogas)'], es: ['Hipersensibilidad', 'Uso para revertir bloqueos de Cisatracurio, Atracurio o Succinilcolina (NO POSEE NINGÚN EFECTO en estas drogas)'] },
        relative: { pt: ['DRC Dialítica'], es: ['ERC Dialítica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se for necessário reintubar um paciente minutos após ele ter recebido o Sugamadex, NÃO use Rocurônio novamente (ele será imediatamente encapsulado e o paciente não vai paralisar). Use Succinilcolina ou Cisatracúrio.', es: 'Si es necesario reintubar a un paciente minutos después de que haya recibido Sugammadex, NO use Rocuronio nuevamente (será inmediatamente encapsulado y el paciente no se paralizará). Use Succinilcolina o Cisatracurio.' }
      }
    },  // end sugamadex

/* ── NEOSTIGMINA ────────────────────────────────────────────────────── */
    "neostigmina": {
      name: { pt: 'Neostigmina', es: 'Neostigmina' },
      category: 'emergencia',
      class: { pt: 'Inibidor da Acetilcolinesterase', es: 'Inhibidor de la Acetilcolinesterasa' },
      indications: {
        pt: ['Reversão de Bloqueadores Neuromusculares Adespolarizantes', 'Tratamento sintomático da Miastenia Gravis', 'Íleo paralítico ou retenção urinária aguda no pós-operatório'],
        es: ['Reversión de Bloqueadores Neuromusculares No Despolarizantes', 'Tratamiento sintomático de la Miastenia Gravis', 'Íleo paralítico o retención urinaria aguda en el posoperatorio']
      },
      commercialNames: { br: ['Prostigmine'], ar: ['Prostigmin'] },
      presentation: { pt: ['Ampolas IV/IM/SC 0,5 mg/mL (1 mL)', 'Comprimidos 15 mg'], es: ['Ampollas IV/IM/SC 0,5 mg/mL (1 mL)', 'Comprimidos 15 mg'] },
      mechanism: {
        pt: 'Inibe reversivelmente a enzima acetilcolinesterase. Isso impede a destruição da acetilcolina endógena nas fendas sinápticas. O acúmulo maciço de acetilcolina na placa motora vence os Bloqueadores Neuromusculares por "competição" numérica, restaurando a contração muscular. No entanto, o excesso de acetilcolina sistêmica ativa fortemente o sistema nervoso parassimpático (receptores muscarínicos).',
        es: 'Inhibe reversiblemente la enzima acetilcolinesterasa. Esto impide la destrucción de la acetilcolina endógena en las hendiduras sinápticas. La acumulación masiva de acetilcolina en la placa motora vence a los Bloqueadores Neuromusculares por "competición" numérica, restaurando la contracción muscular. Sin embargo, el exceso de acetilcolina sistémica activa fuertemente el sistema nervioso parasimpático (receptores muscarínicos).'
      },
      dose: {
        adult: {
          pt: 'Reversão de BNM: 0,04 a 0,07 mg/kg IV (máx 5 mg). Sempre precedido de Atropina. Miastenia: 15 a 150 mg/dia VO.',
          es: 'Reversión de BNM: 0,04 a 0,07 mg/kg IV (máx 5 mg). Siempre precedido de Atropina. Miastenia: 15 a 150 mg/día VO.'
        },
        pediatric: {
          pt: 'Reversão BNM: 0,05 mg/kg IV associado a Atropina.',
          es: 'Reversión BNM: 0,05 mg/kg IV asociado a Atropina.'
        }
      },
      administration: { pt: ['IV lento em 1 a 2 minutos.', 'É REGRA ANESTÉSICA MUNDIAL: A neostigmina venosa NUNCA deve ser infundida sozinha. Deve ser acompanhada de ATROPINA (0,015 mg/kg) na mesma seringa ou instantes antes, para evitar Parada Cardíaca.'], es: ['IV lento en 1 a 2 minutos.', 'ES REGLA ANESTÉSICA MUNDIAL: La neostigmina venosa NUNCA debe ser infundida sola. Debe ser acompañada de ATROPINA (0,015 mg/kg) en la misma jeringa o instantes antes, para evitar Paro Cardíaco.'] },
      renalAdjustment: { required: true, message: { pt: 'Sua meia-vida aumenta substancialmente na DRC. Reduzir dose para evitar bloqueio excessivo tardio.', es: 'Su vida media aumenta sustancialmente en ERC. Reducir dosis para evitar bloqueo excesivo tardío.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Sialorreia massiva (muita saliva) e aumento das secreções brônquicas', 'Cólicas abdominais e náuseas', 'Fasciculações'], es: ['Sialorrea masiva (mucha saliva) y aumento de secreciones bronquiales', 'Cólicos abdominales y náuseas', 'Fasciculaciones'] },
      dangerousAdverseEffects: { pt: ['Bradicardia profunda e Parada em Assistolia (se feita sem Atropina)', 'Broncoespasmo severo (crise asmática induzida)'], es: ['Bradicardia profunda y Paro en Asistolia (si se hace sin Atropina)', 'Broncoespasmo severo (crisis asmática inducida)'] },
      contraindications: {
        absolute: { pt: ['Obstrução intestinal ou urinária mecânica', 'Peritonite aguda'], es: ['Obstrucción intestinal o urinaria mecánica', 'Peritonitis aguda'] },
        relative: { pt: ['Asma brônquica (risco de broncoespasmo colinérgico)', 'Bradicardia basal severa'], es: ['Asma bronquial (riesgo de broncoespasmo colinérgico)', 'Bradicardia basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'NÃO FUNCIONA e PROLONGA O COMA se usada contra a Succinilcolina ou quando o bloqueio adespolarizante for muito profundo (TOF = 0). O paciente deve ter pelo menos alguma tentativa de contração (respirar) antes do uso.', es: 'NO FUNCIONA y PROLONGA EL COMA si se usa contra la Succinilcolina o cuando el bloqueo no despolarizante sea muy profundo (TOF = 0). El paciente debe tener al menos algún intento de contracción (respirar) antes del uso.' }
      }
    },  // end neostigmina

/* ── ATROPINA ───────────────────────────────────────────────────────── */
    "atropina": {
      name: { pt: 'Atropina', es: 'Atropina' },
      category: 'emergencia',
      class: { pt: 'Antagonista Muscarínico / Anticolinérgico', es: 'Antagonista Muscarínico / Anticolinérgico' },
      indications: {
        pt: ['Bradicardia sinusal sintomática (PCR em AESP/Bradicardia)', 'Antídoto na intoxicação por Organofosforados/Carbamatos', 'Prevenção de reflexo vagal cirúrgico e reversão neuromuscular (com neostigmina)'],
        es: ['Bradicardia sinusal sintomática (RCP en AESP/Bradicardia)', 'Antídoto en la intoxicación por Organofosforados/Carbamatos', 'Prevención de reflejo vagal quirúrgico y reversión neuromuscular (con neostigmina)']
      },
      commercialNames: { br: ['Atropion', 'Sulfato de Atropina'], ar: ['Atropina'] },
      presentation: { pt: ['Ampolas IV/IM/SC 0,25 mg/mL, 0,5 mg/mL e 1 mg/mL'], es: ['Ampollas IV/IM/SC 0,25 mg/mL, 0,5 mg/mL y 1 mg/mL'] },
      mechanism: {
        pt: 'Antagonista competitivo dos receptores muscarínicos da acetilcolina. Bloqueia agressivamente o sistema nervoso parassimpático. No coração, inibe o nervo vago (nervo pneumogástrico) sobre o nodo sinusal e AV, aumentando rapidamente a frequência cardíaca. Também resseca intensamente as secreções salivares, brônquicas e reduz o tônus do trato gastrointestinal.',
        es: 'Antagonista competitivo de los receptores muscarínicos de la acetilcolina. Bloquea agresivamente el sistema nervioso parasimpático. En el corazón, inhibe el nervio vago (nervio neumogástrico) sobre el nodo sinusal y AV, aumentando rápidamente la frecuencia cardíaca. También reseca intensamente las secreciones salivales, bronquiales y reduce el tono del tracto gastrointestinal.'
      },
      dose: {
        adult: {
          pt: 'Bradicardia sintomática: 0,5 a 1 mg IV a cada 3 a 5 min (máx de 3 mg - bloqueio vagal total). Intoxicação Organofosforado: 2 a 4 mg IV (doses massivas repetidas até secar secreções pulmonares).',
          es: 'Bradicardia sintomática: 0,5 a 1 mg IV cada 3 a 5 min (máx de 3 mg - bloqueo vagal total). Intoxicación Organofosforado: 2 a 4 mg IV (dosis masivas repetidas hasta secar secreciones pulmonares).'
        },
        pediatric: {
          pt: 'Bradicardia: 0,02 mg/kg IV (dose mínima 0,1 mg para evitar bradicardia paradoxal).',
          es: 'Bradicardia: 0,02 mg/kg IV (dosis mínima 0,1 mg para evitar bradicardia paradójica).'
        }
      },
      administration: { pt: ['IV direto rápido. Em caso de parada cardíaca, pode ser administrada pelo tubo endotraqueal (dose dobrada).'], es: ['IV directo rápido. En caso de paro cardíaco, puede administrarse por tubo endotraqueal (dosis doblada).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na emergência.', es: 'Sin necesidad de ajuste en la emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Boca extremamente seca e sede', 'Taquicardia excessiva', 'Midríase (pupilas dilatadas) e visão turva', 'Retenção urinária aguda'], es: ['Boca extremadamente seca y sed', 'Taquicardia excesiva', 'Midriasis (pupilas dilatadas) y visión borrosa', 'Retención urinaria aguda'] },
      dangerousAdverseEffects: { pt: ['Infarto agudo do miocárdio (devido ao aumento abrupto do consumo de O2 miocárdico pela taquicardia)', 'Fibrilação ventricular', 'Delirium anticolinérgico (Síndrome Anticolinérgica Central)'], es: ['Infarto agudo de miocardio (debido al aumento abrupto del consumo de O2 miocárdico por la taquicardia)', 'Fibrilación ventricular', 'Delirium anticolinérgico (Síndrome Anticolinérgico Central)'] },
      contraindications: {
        absolute: { pt: ['Glaucoma de ângulo fechado pré-existente', 'No contexto de Parada Cardíaca ou Intoxicação fatal, não há contraindicações.'], es: ['Glaucoma de ángulo cerrado preexistente', 'En contexto de Paro Cardíaco o Intoxicación fatal, no hay contraindicaciones.'] },
        relative: { pt: ['Isquemia miocárdica (risco de piora da injúria)', 'Obstrução de saída da bexiga (hiperplasia prostática)'], es: ['Isquemia miocárdica (riesgo de empeoramiento de la lesión)', 'Obstrucción de salida de vejiga (hiperplasia prostática)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO TÉCNICO: Doses intravenosas de atropina MENORES do que 0,5 mg no adulto (ou injeção muito lenta) causam um efeito paradoxal inicial mediado por estímulo vagal central, gerando BRADICARDIA PIOR que a original. Sempre usar bolus efetivos rápidos.', es: 'ERROR TÉCNICO: Dosis intravenosas de atropina MENORES a 0,5 mg en adulto (o inyección muy lenta) causan un efecto paradójico inicial mediado por estímulo vagal central, generando BRADICARDIA PEOR que la original. Siempre usar bolos efectivos rápidos.' }
      }
    },  // end atropina

/* ── SULFATO DE MAGNÉSIO ────────────────────────────────────────────── */
    "sulfato_magnesio": {
      name: { pt: 'Sulfato de Magnésio', es: 'Sulfato de Magnesio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Anticonvulsivante / Bloqueador de Canal de Cálcio Fisiológico', es: 'Electrolito / Anticonvulsivo / Bloqueador de Canal de Calcio Fisiológico' },
      indications: {
        pt: ['Eclâmpsia e Pré-eclâmpsia grave (Profilaxia e Tratamento de convulsões)', 'Torsades de Pointes (Arritmia ventricular)', 'Crise de asma refratária grave', 'Hipomagnesemia'],
        es: ['Eclampsia y Preeclampsia grave (Profilaxis y Tratamiento de convulsiones)', 'Torsades de Pointes (Arritmia ventricular)', 'Crisis de asma refractaria grave', 'Hipomagnesemia']
      },
      commercialNames: { br: ['Sulfato de Magnésio a 10% ou 50%'], ar: ['Sulfato de Magnesio'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)', 'Ampolas IV/IM 50% (500 mg/mL - 10 mL = 5g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)', 'Ampollas IV/IM 50% (500 mg/mL - 10 mL = 5g)'] },
      mechanism: {
        pt: 'Cofator vital que bloqueia fisiologicamente os canais de cálcio. No útero, bloqueia a contração, atuando como tocolítico (retarda o parto). No SNC, antagoniza o receptor NMDA (bloqueia o glutamato excitatório), impedindo e abortando convulsões em gestantes. No pulmão e vasos sanguíneos, relaxa o músculo liso, revertendo a asma refratária e reduzindo a pressão arterial.',
        es: 'Cofactor vital que bloquea fisiológicamente los canales de calcio. En el útero, bloquea la contracción, actuando como tocolítico (retrasa el parto). En el SNC, antagoniza el receptor NMDA (bloquea el glutamato excitatorio), impidiendo y abortando convulsiones en gestantes. En pulmón y vasos sanguíneos, relaja el músculo liso, revirtiendo el asma refractaria y reduciendo la presión arterial.'
      },
      dose: {
        adult: {
          pt: 'Eclâmpsia (Esquema Pritchard): Ataque de 4g IV (em 15 min) + 10g IM profundo. Manutenção 5g IM a cada 4h. Torsades de Pointes / Asma: Bolus IV de 1 a 2 g em 5 a 15 min.',
          es: 'Eclampsia (Esquema Pritchard): Ataque de 4g IV (en 15 min) + 10g IM profundo. Mantenimiento 5g IM cada 4h. Torsades de Pointes / Asma: Bolo IV de 1 a 2 g en 5 a 15 min.'
        },
        pediatric: {
          pt: 'Asma severa: 25 a 50 mg/kg IV (máx 2g) correndo em 20 a 30 minutos.',
          es: 'Asma severa: 25 a 50 mg/kg IV (máx 2g) pasando en 20 a 30 minutos.'
        }
      },
      administration: { pt: ['A formulação a 50% é extremamente concentrada. Para uso IV, deve ser obrigatoriamente diluída (em SF ou SG). Uso direto da a 50% só é permitido via Intramuscular Profunda.'], es: ['La formulación al 50% es extremadamente concentrada. Para uso IV, debe ser obligatoriamente diluida (en SF o SG). Uso directo del 50% solo está permitido vía Intramuscular Profunda.'] },
      renalAdjustment: { required: true, message: { pt: 'Risco de hipermagnesemia letal em insuficiência renal. A excreção é puramente renal. Reduzir a dose em DRC severa.', es: 'Riesgo de hipermagnesemia letal en insuficiencia renal. La excreción es puramente renal. Reducir la dosis en ERC severa.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ondas de calor intensas (Flushing) no bolus IV', 'Sudorese e letargia', 'Fraqueza muscular leve'], es: ['Oleadas de calor intensas (Flushing) en el bolo IV', 'Sudoración y letargo', 'Debilidad muscular leve'] },
      dangerousAdverseEffects: { pt: ['Depressão e Parada Respiratória (se Nível Sérico > 12 mEq/L)', 'Bloqueio cardíaco, assistolia (se Nível Sérico > 15 mEq/L)', 'Abolição severa de reflexos patelares (primeiro sinal de intoxicação)'], es: ['Depresión y Paro Respiratorio (si Nivel Sérico > 12 mEq/L)', 'Bloqueo cardíaco, asistolia (si Nivel Sérico > 15 mEq/L)', 'Abolición severa de reflejos rotulianos (primer signo de intoxicación)'] },
      contraindications: {
        absolute: { pt: ['Miastenia Gravis (desencadeia crise miastênica fatal por bloqueio colinérgico)', 'Bloqueios cardíacos avançados'], es: ['Miastenia Gravis (desencadena crisis miasténica fatal por bloqueo colinérgico)', 'Bloqueos cardíacos avanzados'] },
        relative: { pt: ['Insuficiência renal anúrica'], es: ['Insuficiencia renal anúrica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'INTOXICAÇÃO POR MAGNÉSIO: Se a gestante perder os reflexos profundos (patelar) ou apresentar frequência respiratória < 12 ipm, SUSPENDER a infusão imediatamente. O Antídoto OBRIGATÓRIO é o Gluconato de Cálcio 10% IV (1 ampola direto).', es: 'INTOXICACIÓN POR MAGNESIO: Si la gestante pierde los reflejos profundos (rotuliano) o presenta frecuencia respiratoria < 12 rpm, SUSPENDER la infusión inmediatamente. El Antídoto OBLIGATORIO es el Gluconato de Calcio al 10% IV (1 ampolla directo).' }
      }
    },  // end sulfato_magnesio

/* ── GLUCONATO DE CÁLCIO ────────────────────────────────────────────── */
    "gluconato_calcio": {
      name: { pt: 'Gluconato de Cálcio', es: 'Gluconato de Calcio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Estabilizador de Membrana / Antídoto', es: 'Electrolito / Estabilizador de Membrana / Antídoto' },
      indications: {
        pt: ['Estabilização miocárdica na Hipercalemia (Potássio alto) grave', 'Antídoto para intoxicação por Sulfato de Magnésio', 'Antídoto para intoxicação por Bloqueadores de Canal de Cálcio', 'Hipocalcemia sintomática aguda'],
        es: ['Estabilización miocárdica en la Hiperpotasemia (Potasio alto) grave', 'Antídoto para intoxicación por Sulfato de Magnesio', 'Antídoto para intoxicación por Bloqueadores de Canal de Calcio', 'Hipocalcemia sintomática aguda']
      },
      commercialNames: { br: ['Gluconato de Cálcio 10%'], ar: ['Gluconato de Calcio 10%'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)'] },
      mechanism: {
        pt: 'Na hipercalemia, não abaixa o nível de potássio, mas antagoniza a toxicidade do K+ nas membranas celulares do miocárdio, estabilizando o limiar de potencial de ação e prevenindo arritmias letais (fibrilação ventricular). Como reposição, fornece cálcio elementar de forma mais segura para veias periféricas do que o cloreto de cálcio.',
        es: 'En la hiperpotasemia, no baja el nivel de potasio, pero antagoniza la toxicidad del K+ en las membranas celulares del miocardio, estabilizando el umbral de potencial de acción y previniendo arritmias letales (fibrilación ventricular). Como reposición, proporciona calcio elemental de forma más segura para venas periféricas que el cloruro de calcio.'
      },
      dose: {
        adult: {
          pt: 'Hipercalemia/Intoxicações: 1 a 2 ampolas (1g a 2g) IV administradas ao longo de 5 a 10 minutos (pode ser repetido em 5-10 min se ECG não melhorar).',
          es: 'Hiperpotasemia/Intoxicaciones: 1 a 2 ampollas (1g a 2g) IV administradas a lo largo de 5 a 10 minutos (puede repetirse en 5-10 min si el ECG no mejora).'
        },
        pediatric: {
          pt: '100 a 200 mg/kg IV (1 a 2 mL/kg da solução a 10%). Máximo 2g por dose.',
          es: '100 a 200 mg/kg IV (1 a 2 mL/kg de la solución al 10%). Máximo 2g por dosis.'
        }
      },
      administration: { pt: ['Administrar IV direto lentamente (máximo 1 a 2 mL/min). A injeção rápida pode causar hipotensão, bradicardia e parada em sístole.', 'NUNCA administrar via IM ou SC (risco de necrose tecidual severa).'], es: ['Administrar IV directo lentamente (máximo 1 a 2 mL/min). La inyección rápida puede causar hipotensión, bradicardia y paro en sístole.', 'NUNCA administrar vía IM o SC (riesgo de necrosis tisular severa).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste para doses de emergência.', es: 'Sin necesidad de ajuste para dosis de emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ondas de calor', 'Vasodilatação periférica', 'Gosto de giz na boca'], es: ['Oleadas de calor', 'Vasodilatación periférica', 'Sabor a tiza en la boca'] },
      dangerousAdverseEffects: { pt: ['Necrose tecidual por extravasamento', 'Parada cardíaca (se injetado muito rapidamente)'], es: ['Necrosis tisular por extravasación', 'Paro cardíaco (si se inyecta muy rápidamente)'] },
      contraindications: {
        absolute: { pt: ['Fibrilação ventricular associada à toxicidade digitálica', 'Hipercalcemia ativa'], es: ['Fibrilación ventricular asociada a toxicidad digitálica', 'Hipercalcemia activa'] },
        relative: { pt: ['Uso concomitante com glicosídeos cardíacos (digoxina)'], es: ['Uso concomitante con glucósidos cardíacos (digoxina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: '10 mL de Gluconato de Cálcio 10% fornecem apenas 90 mg de cálcio elementar. É mais seguro e menos irritante para veias periféricas do que o Cloreto de Cálcio.', es: '10 mL de Gluconato de Calcio 10% proporcionan solo 90 mg de calcio elemental. Es más seguro y menos irritante para venas periféricas que el Cloruro de Calcio.' }
      }
    },  // end gluconato_calcio

/* ── CLORETO DE CÁLCIO ──────────────────────────────────────────────── */
    "cloreto_calcio": {
      name: { pt: 'Cloreto de Cálcio', es: 'Cloruro de Calcio' },
      category: 'emergencia',
      class: { pt: 'Eletrólito / Inotrópico', es: 'Electrolito / Inotrópico' },
      indications: {
        pt: ['Parada Cardíaca (PCR) associada a hipercalemia, hipocalcemia ou hipermagnesemia', 'Choque vasoplégico pós-circulação extracorpórea (Cirurgia Cardíaca)', 'Intoxicação maciça por bloqueadores de canal de cálcio'],
        es: ['Paro Cardíaco (RCP) asociada a hiperpotasemia, hipocalcemia o hipermagnesemia', 'Choque vasopléjico pos-circulación extracorpórea (Cirugía Cardíaca)', 'Intoxicación masiva por bloqueadores de canal de calcio']
      },
      commercialNames: { br: ['Cloreto de Cálcio 10%'], ar: ['Cloruro de Calcio 10%'] },
      presentation: { pt: ['Ampolas IV 10% (100 mg/mL - 10 mL = 1g)'], es: ['Ampollas IV 10% (100 mg/mL - 10 mL = 1g)'] },
      mechanism: {
        pt: 'Fornece cálcio iônico de forma IMEDIATA. Ao contrário do gluconato (que requer passagem pelo fígado para liberar todo o cálcio), o cloreto de cálcio fornece 3 VEZES MAIS cálcio elementar por ampola (270 mg vs 90 mg do gluconato). Age aumentando a força de contração miocárdica (inotrópico positivo) e restaurando o limiar de excitabilidade cardíaca em PCR.',
        es: 'Proporciona calcio iónico de forma INMEDIATA. A diferencia del gluconato (que requiere paso por el hígado para liberar todo el calcio), el cloruro de calcio proporciona 3 VECES MÁS calcio elemental por ampolla (270 mg vs 90 mg del gluconato). Actúa aumentando la fuerza de contracción miocárdica (inotrópico positivo) y restaurando el umbral de excitabilidad cardíaca en RCP.'
      },
      dose: {
        adult: {
          pt: 'Na PCR ou estado crítico de emergência extrema: 0,5 a 1 g IV (5 a 10 mL da ampola 10%) em bolus rápido.',
          es: 'En RCP o estado crítico de emergencia extrema: 0,5 a 1 g IV (5 a 10 mL de la ampolla 10%) en bolo rápido.'
        },
        pediatric: {
          pt: 'PCR: 20 mg/kg (0,2 mL/kg) IV direto. Máximo 1g.',
          es: 'RCP: 20 mg/kg (0,2 mL/kg) IV directo. Máximo 1g.'
        }
      },
      administration: { pt: ['EXTREMAMENTE IRRITANTE PARA AS VEIAS. O uso DEVE preferencialmente ser feito em Acesso Venoso Central. Se feito em veia periférica durante a PCR e houver extravasamento, causará necrose tecidual e esfacelamento de tecidos (necessitando amputação/debridamento).'], es: ['EXTREMAMENTE IRRITANTE PARA LAS VENAS. El uso DEBE preferentemente hacerse en Acceso Venoso Central. Si se hace en vena periférica durante RCP y hay extravasación, causará necrosis tisular y desprendimiento de tejidos (necesitando amputación/desbridamiento).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na emergência.', es: 'Sin necesidad de ajuste en la emergencia.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Bradicardia (se injeção excessivamente rápida no paciente acordado)'], es: ['Bradicardia (si inyección excesivamente rápida en el paciente despierto)'] },
      dangerousAdverseEffects: { pt: ['Necrose isquêmica extensa por extravasamento (dano tecidual catastrófico)', 'Fibrilação ventricular (raro)'], es: ['Necrosis isquémica extensa por extravasación (daño tisular catastrófico)', 'Fibrilación ventricular (raro)'] },
      contraindications: {
        absolute: { pt: ['Intoxicação digitálica grave'], es: ['Intoxicación digitálica grave'] },
        relative: { pt: ['Ausência de acesso venoso central calibroso (quando paciente acordado e estável, usar Gluconato)'], es: ['Ausencia de acceso venoso central de gran calibre (cuando el paciente está despierto y estable, usar Gluconato)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Na prática da UTI: Se paciente em Parada Cardíaca -> CLORETO. Se paciente acordado hipercalêmico no PS -> GLUCONATO.', es: 'En la práctica de UCI: Si paciente en Paro Cardíaco -> CLORURO. Si paciente despierto hiperpotasémico en Urgencias -> GLUCONATO.' }
      }
    },  // end cloreto_calcio

/* ── BICARBONATO DE SÓDIO ───────────────────────────────────────────── */
    "bicarbonato_sodio": {
      name: { pt: 'Bicarbonato de Sódio', es: 'Bicarbonato de Sodio' },
      category: 'emergencia',
      class: { pt: 'Agente Alcalinizante / Eletrólito', es: 'Agente Alcalinizante / Electrolito' },
      indications: {
        pt: ['Intoxicação por Antidepressivos Tricíclicos (alarga QRS)', 'Acidose metabólica severa com hipercalemia', 'Alcalinização da urina (intoxicação por salicilatos)', 'Parada Cardíaca prolongada (uso de exceção baseada em gasometria)'],
        es: ['Intoxicación por Antidepresivos Tricíclicos (ensancha QRS)', 'Acidosis metabólica severa con hiperpotasemia', 'Alcalinización de la orina (intoxicación por salicilatos)', 'Paro Cardíaco prolongado (uso de excepción basada en gasometría)']
      },
      commercialNames: { br: ['Bicarbonato de Sódio 8,4% (1mEq/mL)'], ar: ['Bicarbonato de Sodio 8,4%'] },
      presentation: { pt: ['Ampolas IV 8,4% (1 mEq/mL - 10 mL ou frascos 250 mL)'], es: ['Ampollas IV 8,4% (1 mEq/mL - 10 mL o viales 250 mL)'] },
      mechanism: {
        pt: 'Age como tampão sistêmico imediato, combinando-se com os íons hidrogênio (H+) para formar ácido carbônico, que se dissocia em água e CO2. Na intoxicação por tricíclicos, o sódio da fórmula sobrepuja o bloqueio dos canais rápidos de sódio cardíacos e a alcalemia favorece a forma não ionizada da droga, estreitando o QRS e prevenindo arritmias ventriculares.',
        es: 'Actúa como tampón sistémico inmediato, combinándose con los iones hidrógeno (H+) para formar ácido carbónico, que se disocia en agua y CO2. En intoxicación por tricíclicos, el sodio de la fórmula supera el bloqueo de los canales rápidos de sodio cardíacos y la alcalemia favorece la forma no ionizada de la droga, estrechando el QRS y previniendo arritmias ventriculares.'
      },
      dose: {
        adult: {
          pt: 'Intoxicação por Tricíclicos: 1 a 2 mEq/kg IV em bolus rápido (1 a 2 mL/kg da solução a 8,4%). Acidose grave: Reposição baseada na fórmula do Déficit de Base (BE x Peso x 0,3).',
          es: 'Intoxicación por Tricíclicos: 1 a 2 mEq/kg IV en bolo rápido (1 a 2 mL/kg de la solución al 8,4%). Acidosis grave: Reposición basada en la fórmula del Déficit de Base (BE x Peso x 0,3).'
        },
        pediatric: {
          pt: '1 mEq/kg IV lento. Em neonatos, DEVE-SE usar a formulação pediátrica diluída (4,2%) para evitar hemorragia intraventricular.',
          es: '1 mEq/kg IV lento. En neonatos, SE DEBE usar la formulación pediátrica diluida (4,2%) para evitar hemorragia intraventricular.'
        }
      },
      administration: { pt: ['A injeção IV rápida só é indicada na Parada Cardíaca ou nas arritmias por Tricíclicos. Nos demais casos de acidose, a infusão deve ser gotejada lentamente.', 'O paciente DEVE estar sendo ventilado adequadamente, pois o bicarbonato gera excesso de CO2, que precisa ser exalado pelo pulmão.'], es: ['La inyección IV rápida solo está indicada en Paro Cardíaco o en arritmias por Tricíclicos. En los demás casos de acidosis, la infusión debe gotear lentamente.', 'El paciente DEBE estar siendo ventilado adecuadamente, ya que el bicarbonato genera exceso de CO2, que necesita ser exhalado por el pulmón.'] },
      renalAdjustment: { required: false, message: { pt: 'Pilar do tratamento na hipercalemia da insuficiência renal aguda.', es: 'Pilar del tratamiento en hiperpotasemia de la insuficiencia renal aguda.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Aumento transitório de CO2 no sangue', 'Sobrecarga de volume e sódio'], es: ['Aumento transitorio de CO2 en la sangre', 'Sobrecarga de volumen y sodio'] },
      dangerousAdverseEffects: { pt: ['Alcalose metabólica iatrogênica grave', 'Hipocalcemia aguda tetânica (o pH alcalino faz o cálcio se ligar massivamente à albumina)', 'Hemorragia intracraniana (em injeção rápida hiperosmolar em bebês)'], es: ['Alcalosis metabólica iatrogénica grave', 'Hipocalcemia aguda tetánica (el pH alcalino hace que el calcio se una masivamente a la albúmina)', 'Hemorragia intracraneal (en inyección rápida hiperosmolar en bebés)'] },
      contraindications: {
        absolute: { pt: ['Alcalose metabólica prévia', 'Hipocalcemia sintomática não corrigida', 'Edema Agudo de Pulmão (pela sobrecarga de sal)'], es: ['Alcalosis metabólica previa', 'Hipocalcemia sintomática no corregida', 'Edema Agudo de Pulmón (por sobrecarga de sal)'] },
        relative: { pt: ['Ventilação ineficaz/Asma grave (incapacidade de expelir o CO2 gerado)'], es: ['Ventilación ineficaz/Asma grave (incapacidad de expeler el CO2 generado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Não possui mais indicação na ressuscitação cardiopulmonar (RCP) de rotina! O uso rotineiro em PCR piora o desfecho neurológico. Usar apenas se PCR for decorrente de intoxicação por tricíclicos, hipercalemia prévia severa ou acidose lática preexistente.', es: '¡Ya no posee indicación en la reanimación cardiopulmonar (RCP) de rutina! El uso rutinario en RCP empeora el desenlace neurológico. Usar solo si RCP es por intoxicación por tricíclicos, hiperpotasemia previa severa o acidosis láctica preexistente.' }
      }
    },  // end bicarbonato_sodio

/* ── CLORETO DE POTÁSSIO ────────────────────────────────────────────── */
    "cloreto_potassio": {
      name: { pt: 'Cloreto de Potássio (KCl)', es: 'Cloruro de Potasio (KCl)' },
      category: 'emergencia',
      class: { pt: 'Eletrólito intracelular vital', es: 'Electrolito intracelular vital' },
      indications: {
        pt: ['Tratamento da hipocalemia moderada a severa', 'Reposição contínua na Cetoacidose Diabética (junto com a insulina)', 'Correção de arritmias induzidas por hipocalemia ou intoxicação digitálica'],
        es: ['Tratamiento de la hipopotasemia moderada a severa', 'Reposición continua en Cetoacidosis Diabética (junto con la insulina)', 'Corrección de arritmias inducidas por hipopotasemia o intoxicación digitálica']
      },
      commercialNames: { br: ['KCl 10%', 'KCl 19,1%'], ar: ['Cloruro de Potasio'] },
      presentation: { pt: ['Ampolas IV 10% (1,34 mEq/mL)', 'Ampolas IV 19,1% (2,5 mEq/mL - Mais comum no BR)'], es: ['Ampollas IV 10% (1,34 mEq/mL)', 'Ampollas IV 19,1% (2,5 mEq/mL)'] },
      mechanism: {
        pt: 'Reposição direta do principal cátion intracelular. O potássio é fundamental para a condução do impulso nervoso, contração do músculo cardíaco, liso e esquelético, e manutenção do potencial de repouso celular normal.',
        es: 'Reposición directa del principal catión intracelular. El potasio es fundamental para la conducción del impulso nervioso, contracción del músculo cardíaco, liso y esquelético, y mantenimiento del potencial de reposo celular normal.'
      },
      dose: {
        adult: {
          pt: 'Depende estritamente do nível sérico de K+. Reposição empírica IV: 10 a 20 mEq por HORA. (Ex: 1 ampola de KCl 19,1% tem ~25 mEq). Máximo absoluto: 40 mEq/hora em UTI.',
          es: 'Depende estrictamente del nivel sérico de K+. Reposición empírica IV: 10 a 20 mEq por HORA. (Ej: 1 ampolla de KCl 19,1% tiene ~25 mEq). Máximo absoluto: 40 mEq/hora en UCI.'
        },
        pediatric: {
          pt: '0,5 a 1 mEq/kg infundidos em 1 a 2 horas. Máximo 20 mEq por dose.',
          es: '0,5 a 1 mEq/kg infundidos en 1 a 2 horas. Máximo 20 mEq por dosis.'
        }
      },
      administration: { pt: ['A INFUSÃO RÁPIDA (BOLUS IV DIRETO) É LETAL. Causa parada cardíaca em assistolia irreversível.', 'VEIA PERIFÉRICA: Diluir no máximo 40 a 60 mEq em 1 Litro de SF/SG. Infundir máximo 10 mEq/hora (acima disso queima as veias e causa flebite severa).', 'VEIA CENTRAL: Pode-se concentrar mais e infundir até 20 a 40 mEq/hora sob monitorização por ECG obrigatória.'], es: ['LA INFUSIÓN RÁPIDA (BOLO IV DIRECTO) ES LETAL. Causa paro cardíaco en asistolia irreversible.', 'VENA PERIFÉRICA: Diluir máximo 40 a 60 mEq en 1 Litro de SF/SG. Infundir máximo 10 mEq/hora (por encima de eso quema las venas y causa flebitis severa).', 'VENA CENTRAL: Se puede concentrar más e infundir hasta 20 a 40 mEq/hora bajo monitorización por ECG obligatoria.'] },
      renalAdjustment: { required: true, message: { pt: 'Na Doença Renal Crônica, reduzir drasticamente a reposição (o potássio não será excretado). Evitar exceto se documentadamente baixo e sintomático.', es: 'En Enfermedad Renal Crónica, reducir drásticamente la reposición (el potasio no será excretado). Evitar excepto si documentadamente bajo y sintomático.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Em cirróticos graves, manter níveis ideais de K+ (hipocalemia piora encefalopatia).', es: 'En cirróticos graves, mantener niveles ideales de K+ (la hipopotasemia empeora encefalopatía).' } },
      commonAdverseEffects: { pt: ['Flebite e Dor intensa no membro ao infundir perifericamente (necessário reduzir a velocidade da bomba)'], es: ['Flebitis y Dolor intenso en el miembro al infundir periféricamente (necesario reducir velocidad de bomba)'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia iatrogênica', 'Bloqueio Atrioventricular, Fibrilação Ventricular e Assistolia'], es: ['Hiperpotasemia iatrogénica', 'Bloqueo Auriculoventricular, Fibrilación Ventricular y Asistolia'] },
      contraindications: {
        absolute: { pt: ['Infusão em bolus sem diluição (INJEÇÃO LETAL)', 'Hipercalemia', 'Insuficiência renal grave anúrica com potássio basal normal'], es: ['Infusión en bolo sin diluir (INYECCIÓN LETAL)', 'Hiperpotasemia', 'Insuficiencia renal grave anúrica con potasio basal normal'] },
        relative: { pt: ['Uso associado com diuréticos poupadores de potássio (Espironolactona) sem exame de laboratório recente'], es: ['Uso asociado con diuréticos ahorradores de potasio (Espironolactona) sin examen de laboratorio reciente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'DROGA MAIS MORTAL DA UTI POR ERRO DE ENFERMAGEM. A ampola de KCl NUNCA pode estar ao lado da ampola de SF 0,9% não identificada. Se injetada na seringa diretamente na veia do paciente, causará morte em 30 segundos.', es: 'DROGA MÁS MORTAL DE LA UCI POR ERROR DE ENFERMERÍA. La ampolla de KCl NUNCA puede estar al lado de la ampolla de SF 0,9% no identificada. Si se inyecta en jeringa directamente en la vena, causará muerte en 30 segundos.' }
      }
    },  // end cloreto_potassio

/* ── CLORETO DE SÓDIO HIPERTÔNICO 3% ────────────────────────────────── */
    "sodio_hipertonico": {
      name: { pt: 'Cloreto de Sódio Hipertônico (NaCl 3% / Salina Hipertônica)', es: 'Cloruro de Sodio Hipertónico (NaCl 3% / Solución Salina Hipertónica)' },
      category: 'emergencia',
      class: { pt: 'Agente Osmótico / Eletrólito Concentrado', es: 'Agente Osmótico / Electrolito Concentrado' },
      indications: {
        pt: ['Hiponatremia aguda grave e SINTOMÁTICA (ex: convulsões ou coma hiponatrêmico)', 'Hipertensão Intracraniana (Edema cerebral por Trauma Cranioencefálico - TCE)'],
        es: ['Hiponatremia aguda grave y SINTOMÁTICA (ej: convulsiones o coma hiponatrémico)', 'Hipertensión Intracraneal (Edema cerebral por Traumatismo Craneoencefálico - TCE)']
      },
      commercialNames: { br: ['Solução Salina Hipertônica 3% (ou feita via ampolas a 20%)'], ar: ['Solución Salina Hipertónica'] },
      presentation: { pt: ['Bolsas de NaCl 3%', 'Preparação manual na UTI: Juntar 890 mL de SG 5% ou água destilada + 110 mL de NaCl 20% (cada ampola tem 10mL).'], es: ['Bolsas de NaCl 3%', 'Preparación manual en UCI: Juntar 890 mL de SG 5% o agua destilada + 110 mL de NaCl 20% (cada ampolla tiene 10mL).'] },
      mechanism: {
        pt: 'Solução com altíssima força osmótica. Na hipertensão intracraniana, atua como um ímã osmótico impermeável à barreira hematoencefálica intacta, "puxando" o excesso de água do parênquima cerebral para dentro dos vasos sanguíneos, reduzindo o edema. Na hiponatremia, repõe ativamente os níveis de sódio sérico para prevenir convulsões e herniação cerebral.',
        es: 'Solución con altísima fuerza osmótica. En la hipertensión intracraneal, actúa como un imán osmótico impermeable a la barrera hematoencefálica intacta, "tirando" el exceso de agua del parénquima cerebral hacia dentro de los vasos sanguíneos, reduciendo el edema. En hiponatremia, repone activamente los niveles de sodio sérico para prevenir convulsiones y herniación cerebral.'
      },
      dose: {
        adult: {
          pt: 'Hiponatremia sintomática (Convulsão): Bolus IV de 100 a 150 mL (em 10-15 min). Repetir até melhora neurológica. Hipertensão Intracraniana: Bolus IV de 250 mL seguido de alvo laboratorial de Na+ (145-155 mEq/L).',
          es: 'Hiponatremia sintomática (Convulsión): Bolo IV de 100 a 150 mL (en 10-15 min). Repetir hasta mejora neurológica. Hipertensión Intracraneal: Bolo IV de 250 mL seguido de objetivo de Na+ (145-155 mEq/L).'
        },
        pediatric: {
          pt: 'Hiponatremia com convulsão: Bolus de 3 a 5 mL/kg IV (ao longo de 10 a 20 min).',
          es: 'Hiponatremia con convulsión: Bolo de 3 a 5 mL/kg IV (a lo largo de 10 a 20 min).'
        }
      },
      administration: { pt: ['Preferencialmente via Acesso Venoso Central (altamente irritante para veias periféricas).', 'Uso OBRIGATÓRIO de Bomba de Infusão para garantir controle rígido de MLs infundidos.'], es: ['Preferentemente vía Acceso Venoso Central (altamente irritante para venas periféricas).', 'Uso OBLIGATORIO de Bomba de Infusión para garantizar control rígido de MLs infundidos.'] },
      renalAdjustment: { required: true, message: { pt: 'Risco de sobrecarga hídrica massiva em anúricos. Fazer com extrema cautela guiado por sinais clínicos e eletrólitos.', es: 'Riesgo de sobrecarga hídrica masiva en anúricos. Hacer con extrema precaución guiado por signos clínicos y electrolitos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Cuidado em cirróticos com ascite grave/edema maciço.', es: 'Cuidado en cirróticos con ascitis grave/edema masivo.' } },
      commonAdverseEffects: { pt: ['Hipernatremia e Hiperosmolaridade esperadas', 'Flebite periférica', 'Acidose hiperclorêmica (o Cloreto acompanha o sódio na solução)'], es: ['Hipernatremia e Hiperosmolaridad esperadas', 'Flebitis periférica', 'Acidosis hiperclorémica (el Cloruro acompaña al sodio en la solución)'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE DESMIELINIZAÇÃO OSMÓTICA (Mielinólise Pontina Central)', 'Sobrecarga de volume e Edema Agudo de Pulmão', 'Lesão Renal Aguda'], es: ['SÍNDROME DE DESMIELINIZACIÓN OSMÓTICA (Mielinólisis Pontina Central)', 'Sobrecarga de volumen y Edema Agudo de Pulmón', 'Lesión Renal Aguda'] },
      contraindications: {
        absolute: { pt: ['Hiponatremia crônica assintomática (RISCO ABSOLUTO DE MORTE NEUROLÓGICA SE CORRIGIDA COM 3%)'], es: ['Hiponatremia crónica asintomática (RIESGO ABSOLUTO DE MUERTE NEUROLÓGICA SI SE CORRIGE CON 3%)'] },
        relative: { pt: ['Edema pulmonar não cardiogênico / Insuficiência cardíaca descompensada'], es: ['Edema pulmonar no cardiogénico / Insuficiencia cardíaca descompensada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CORREÇÃO DO SÓDIO TEM LIMITE DIÁRIO. Se a hiponatremia do paciente for CRÔNICA, a reposição rápida causará a Síndrome de Desmielinização Osmótica (tetraplegia irreversível, coma e morte dias após). Regra de Ouro: não ultrapassar o aumento de 8 a 10 mEq/L de sódio nas primeiras 24 horas.', es: 'LA CORRECCIÓN DEL SODIO TIENE LÍMITE DIARIO. Si la hiponatremia del paciente es CRÓNICA, la reposición rápida causará el Síndrome de Desmielinización Osmótica (tetraplejía irreversible, coma y muerte días después). Regla de Oro: no superar el aumento de 8 a 10 mEq/L de sodio en las primeras 24 horas.' }
      }
    },  // end sodio_hipertonico

/* ── GLICOSE HIPERTÔNICA ────────────────────────────────────────────── */
    "glicose_hipertonica": {
      name: { pt: 'Glicose Hipertônica 50%', es: 'Glucosa Hipertónica 50%' },
      category: 'emergencia',
      class: { pt: 'Suplemento Calórico / Antídoto', es: 'Suplemento Calórico / Antídoto' },
      indications: {
        pt: ['Coma hipoglicêmico ou hipoglicemia sintomática grave', 'Tratamento de hipercalemia (em conjunto com Insulina Regular)'],
        es: ['Coma hipoglucémico o hipoglucemia sintomática grave', 'Tratamiento de hiperpotasemia (en conjunto con Insulina Regular)']
      },
      commercialNames: { br: ['Glicose 50%'], ar: ['Glucosa al 50%'] },
      presentation: { pt: ['Ampolas IV 50% (10 mL ou 20 mL)'], es: ['Ampollas IV 50% (10 mL o 20 mL)'] },
      mechanism: {
        pt: 'Fornece D-glicose (dextrose) de forma imediata à corrente sanguínea, restaurando os níveis de energia do sistema nervoso central, que depende quase exclusivamente da glicose cerebral para manter a consciência e o metabolismo basal. Na hipercalemia, a glicose hipertônica serve apenas como "veículo" de segurança para permitir a injeção de Insulina (que empurra o potássio para dentro da célula) sem causar choque hipoglicêmico.',
        es: 'Proporciona D-glucosa (dextrosa) de forma inmediata al torrente sanguíneo, restaurando los niveles de energía del sistema nervioso central, que depende casi exclusivamente de la glucosa cerebral para mantener la consciencia y el metabolismo basal. En hiperpotasemia, la glucosa hipertónica sirve solo como "vehículo" de seguridad para permitir la inyección de Insulina (que empuja el potasio hacia dentro de la célula) sin causar choque hipoglucémico.'
      },
      dose: {
        adult: {
          pt: 'Hipoglicemia grave: Bolus IV de 40 a 50 mL de Glicose 50% (ou 4 a 5 ampolas de 10mL). Polarizante (K+): 50g de Glicose + 10 UI Insulina Regular.',
          es: 'Hipoglucemia grave: Bolo IV de 40 a 50 mL de Glucosa 50% (o 4 a 5 ampollas de 10mL). Polarizante (K+): 50g de Glucosa + 10 UI Insulina Regular.'
        },
        pediatric: {
          pt: 'Evitar 50%. Preferir Glicose 25% (2 a 4 mL/kg) ou Glicose 10% (5 a 10 mL/kg) IV lento.',
          es: 'Evitar 50%. Preferir Glucosa 25% (2 a 4 mL/kg) o Glucosa 10% (5 a 10 mL/kg) IV lento.'
        }
      },
      administration: { pt: ['Administrar IV direto lentamente.', 'A solução a 50% é extremamente irritante e hiperosmolar. Se extravasar, causa necrose isquêmica tecidual.'], es: ['Administrar IV directo lentamente.', 'La solución al 50% es extremadamente irritante e hiperosmolar. Si se extravasa, causa necrosis isquémica tisular.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Pilar do resgate em cirróticos que perdem a capacidade de gliconeogênese.', es: 'Pilar del rescate en cirróticos que pierden la capacidad de gluconeogénesis.' } },
      commonAdverseEffects: { pt: ['Dor e flebite no local da injeção', 'Hiperglicemia rebote'], es: ['Dolor y flebitis en el sitio de inyección', 'Hiperglucemia rebote'] },
      dangerousAdverseEffects: { pt: ['Síndrome de Wernicke (se não precedida por tiamina em desnutridos)', 'Necrose tecidual severa por extravasamento', 'Hipocalemia iatrogênica (o pico de insulina endógena gerado empurra o K+ para as células)'], es: ['Síndrome de Wernicke (si no es precedida por tiamina en desnutridos)', 'Necrosis tisular severa por extravasación', 'Hipopotasemia iatrogénica (el pico de insulina endógena generado empuja el K+ a las células)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia intracraniana aguda ou isquemia aguda com hiperglicemia prévia (a glicose agrava a lesão cerebral focal)'], es: ['Hemorragia intracraneal aguda o isquemia aguda con hiperglucemia previa (la glucosa agrava la lesión cerebral focal)'] },
        relative: { pt: ['Delirium tremens sem administração de Tiamina conjunta'], es: ['Delirium tremens sin administración de Tiamina conjunta'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Não confie na Glicose Hipertônica para tratar hipoglicemias causadas por Sulfonilureias de meia-vida longa. A injeção vai acordar o paciente, mas a alta carga de açúcar fará o pâncreas liberar ainda mais insulina, gerando um coma rebote pior horas depois. Internar o paciente com soro glicosado contínuo.', es: 'No confíe en la Glucosa Hipertónica para tratar hipoglucemias causadas por Sulfonilureas de vida media larga. La inyección despertará al paciente, pero la alta carga de azúcar hará que el páncreas libere aún más insulina, generando un coma rebote peor horas después. Internar al paciente con suero glucosado continuo.' }
      }
    },  // end glicose_hipertonica

/* ── TIAMINA (VITAMINA B1) ──────────────────────────────────────────── */
    "tiamina": {
      name: { pt: 'Tiamina (Vitamina B1)', es: 'Tiamina (Vitamina B1)' },
      category: 'emergencia',
      class: { pt: 'Vitamina Hidrossolúvel / Coenzima Metabólica', es: 'Vitamina Hidrosoluble / Coenzima Metabólica' },
      indications: {
        pt: ['Prevenção e Tratamento da Encefalopatia de Wernicke e Síndrome de Korsakoff (Alcoólatras)', 'Beribéri', 'Acidose lática não explicada em nutrição parenteral total'],
        es: ['Prevención y Tratamiento de la Encefalopatía de Wernicke y Síndrome de Korsakoff (Alcohólicos)', 'Beriberi', 'Acidosis láctica no explicada en nutrición parenteral total']
      },
      commercialNames: { br: ['Benerva'], ar: ['Benerva'] },
      presentation: { pt: ['Comprimidos 300 mg', 'Ampolas IV/IM 100 mg/mL ou 300 mg/mL'], es: ['Comprimidos 300 mg', 'Ampollas IV/IM 100 mg/mL o 300 mg/mL'] },
      mechanism: {
        pt: 'A tiamina é o cofator da enzima piruvato desidrogenase. É vital para a entrada da glicose no Ciclo de Krebs para gerar ATP. Se o paciente (desnutrido/alcoólatra) receber glicose sem ter Tiamina no corpo, a glicose não consegue entrar no ciclo mitocondrial e é fermentada ativamente em Ácido Lático, causando destruição fulminante dos neurônios (Wernicke-Korsakoff).',
        es: 'La tiamina es el cofactor de la enzima piruvato deshidrogenasa. Es vital para la entrada de la glucosa en el Ciclo de Krebs para generar ATP. Si el paciente (desnutrido/alcohólico) recibe glucosa sin tener Tiamina en el cuerpo, la glucosa no logra entrar en el ciclo mitocondrial y es fermentada activamente en Ácido Láctico, causando destrucción fulminante de las neuronas (Wernicke-Korsakoff).'
      },
      dose: {
        adult: {
          pt: 'Wernicke instalado ou suspeito: 500 mg IV 3x/dia por 2 a 3 dias, seguido de 250 mg IV/IM por 3 a 5 dias. Profilaxia (Alcoolismo em abstinência): 100 a 300 mg/dia.',
          es: 'Wernicke instalado o sospechoso: 500 mg IV 3 veces/día por 2 a 3 días, seguido de 250 mg IV/IM por 3 a 5 días. Profilaxis (Alcoholismo en abstinencia): 100 a 300 mg/día.'
        },
        pediatric: {
          pt: 'Beribéri: 10 a 25 mg IV/IM (Doses raras, guiadas por especialistas).',
          es: 'Beriberi: 10 a 25 mg IV/IM (Dosis raras, guiadas por especialistas).'
        }
      },
      administration: { pt: ['Injeção IV lenta (diluída em 50 a 100 mL de SF0,9% em 30 min). Bolus rápido aumenta o risco de choque anafilático.'], es: ['Inyección IV lenta (diluida en 50 a 100 mL de SF0,9% en 30 min). Bolo rápido aumenta el riesgo de choque anafiláctico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste. Fundamental na cirrose alcoólica.', es: 'Sin necesidad de ajuste. Fundamental en la cirrosis alcohólica.' } },
      commonAdverseEffects: { pt: ['Dor e irritação no local da injeção IM', 'Sensação de calor/Formigamento'], es: ['Dolor e irritación en el lugar de inyección IM', 'Sensación de calor/Hormigueo'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia / Colapso cardiovascular (muito raro, geralmente associado ao veículo da ampola em injeções em bolus diretas)'], es: ['Anafilaxia / Colapso cardiovascular (muy raro, generalmente asociado al vehículo de la ampolla en inyecciones en bolo directas)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave comprovada'], es: ['Hipersensibilidad grave comprobada'] },
        relative: { pt: ['Nenhuma no cenário de salvamento neurológico.'], es: ['Ninguna en el escenario de salvamento neurológico.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'REGRA DE OURO DA EMERGÊNCIA: A Tiamina DEVE OBRIGATORIAMENTE SER ADMINISTRADA ANTES ou simultaneamente a qualquer infusão de Glicose em pacientes desnutridos ou com abuso crônico de álcool.', es: 'REGLA DE ORO DE LA EMERGENCIA: La Tiamina DEBE OBLIGATORIAMENTE ADMINISTRARSE ANTES o simultáneamente a cualquier infusión de Glucosa en pacientes desnutridos o con abuso crónico de alcohol.' }
      }
    },  // end tiamina

/* ── FENTANIL ───────────────────────────────────────────────────────── */
    "fentanil": {
      name: { pt: 'Fentanil', es: 'Fentanilo' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte Sintético (Agonista Mu)', es: 'Analgésico Opioide Fuerte Sintético (Agonista Mu)' },
      indications: {
        pt: ['Analgesia e sedação profunda em pacientes sob ventilação mecânica (UTI)', 'Indução e manutenção de anestesia geral', 'Manejo de dor aguda extrema severa'],
        es: ['Analgesia y sedación profunda en pacientes bajo ventilación mecánica (UCI)', 'Inducción y mantenimiento de anestesia general', 'Manejo de dolor agudo extremo severo']
      },
      commercialNames: { br: ['Fentanil', 'Fentanyl'], ar: ['Fentanilo'] },
      presentation: { pt: ['Ampolas IV/IM/Epidural 50 mcg/mL (2 mL, 5 mL e 10 mL)', 'Adesivos transdérmicos (Durogesic)'], es: ['Ampollas IV/IM/Epidural 50 mcg/mL (2 mL, 5 mL y 10 mL)', 'Parches transdérmicos (Durogesic)'] },
      mechanism: {
        pt: 'Agonista altamente seletivo e potente dos receptores opioides Mu no cérebro e na medula espinhal. É aproximadamente 100 vezes mais potente que a morfina. Graças à sua altíssima lipofilicidade, atravessa a barreira hematoencefálica em segundos, provendo um início de ação fulminante (1 a 2 minutos). Ao contrário da morfina, NÃO libera histamina, garantindo estabilidade hemodinâmica (não causa hipotensão significativa).',
        es: 'Agonista altamente selectivo y potente de los receptores opioides Mu en el cerebro y en la médula espinal. Es aproximadamente 100 veces más potente que la morfina. Gracias a su altísima lipofilicidad, atraviesa la barrera hematoencefálica en segundos, proveyendo un inicio de acción fulminante (1 a 2 minutos). A diferencia de la morfina, NO libera histamina, garantizando estabilidad hemodinámica (no causa hipotensión significativa).'
      },
      dose: {
        adult: {
          pt: 'Bolus Analgésico: 1 a 2 mcg/kg IV (início ISR). Infusão em UTI: 1 a 5 mcg/kg/hora. Anestesia Geral: 2 a 50 mcg/kg (dependendo do procedimento).',
          es: 'Bolo Analgésico: 1 a 2 mcg/kg IV (inicio ISR). Infusión en UCI: 1 a 5 mcg/kg/hora. Anestesia General: 2 a 50 mcg/kg (dependiendo del procedimiento).'
        },
        pediatric: {
          pt: 'Analgesia/Sedação: 1 a 2 mcg/kg IV. Infusão: 1 a 3 mcg/kg/h.',
          es: 'Analgesia/Sedación: 1 a 2 mcg/kg IV. Infusión: 1 a 3 mcg/kg/h.'
        }
      },
      administration: { pt: ['A injeção em bolus direto deve ser feita lentamente. Injeções em bolus ultra-rápidas disparam rigidez da musculatura torácica.'], es: ['La inyección en bolo directo debe hacerse lentamente. Inyecciones en bolo ultra-rápidas disparan rigidez de la musculatura torácica.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem metabólitos ativos clinicamente relevantes. Mais seguro que a morfina na DRC.', es: 'Sin metabolitos activos clínicamente relevantes. Más seguro que la morfina en ERC.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizado pelo CYP3A4. Cirróticos acumularão a droga de forma prolongada.', es: 'Extensamente metabolizado por el CYP3A4. Cirróticos acumularán la droga de forma prolongada.' } },
      commonAdverseEffects: { pt: ['Náusea e vômitos pós-operatórios', 'Íleo paralítico / Constipação grave', 'Prurido facial (coceira no nariz/rosto)'], es: ['Náusea y vómitos posoperatorios', 'Íleo paralítico / Constipación grave', 'Prurito facial (picazón en la nariz/cara)'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave (apneia induzida)', 'Rigidez Torácica de Madeira (impede a ventilação do paciente pelo ambu, exigindo uso de bloqueador neuromuscular para salvar a vida)', 'Bradicardia vagal'], es: ['Depresión respiratoria grave (apnea inducida)', 'Rigidez Torácica de Madera (impide la ventilación del paciente por el ambú, exigiendo uso de bloqueador neuromuscular para salvar la vida)', 'Bradicardia vagal'] },
      contraindications: {
        absolute: { pt: ['Uso sem acesso à via aérea definitiva (intubação/ambu)', 'Depressão respiratória não tratada'], es: ['Uso sin acceso a vía aérea definitiva (intubación/ambú)', 'Depresión respiratoria no tratada'] },
        relative: { pt: ['Hipotensão extrema (embora mais seguro que morfina)', 'Hipertensão intracraniana se o paciente estiver hipoventilando (acumula CO2 e piora a PIC)'], es: ['Hipotensión extrema (aunque más seguro que morfina)', 'Hipertensión intracraneal si el paciente está hipoventilando (acumula CO2 y empeora la PIC)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'O Fentanil sofre REDISTRIBUIÇÃO. Se a bomba de infusão da UTI ficar ligada por mais de 24h, a droga satura a gordura corporal. Ao desligar a bomba, o fentanil sai da gordura para o sangue, mantendo o paciente em coma sedado por DIAS. Requer planejamento de desmame.', es: 'El Fentanilo sufre REDISTRIBUCIÓN. Si la bomba de infusión de la UCI queda encendida por más de 24h, la droga satura la grasa corporal. Al apagar la bomba, el fentanilo sale de la grasa hacia la sangre, manteniendo al paciente en coma sedado por DÍAS. Requiere planificación de destete.' }
      }
    },  // end fentanil

/* ── REMIFENTANIL ───────────────────────────────────────────────────── */
    "remifentanil": {
      name: { pt: 'Remifentanil', es: 'Remifentanilo' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Ultra-Curto', es: 'Analgésico Opioide Ultra-Corto' },
      indications: {
        pt: ['Anestesia Venosa Total (TIVA)', 'Sedação para procedimentos curtos com necessidade de despertar neurológico imediato (ex: Neurocirurgias)'],
        es: ['Anestesia Venosa Total (TIVA)', 'Sedación para procedimientos cortos con necesidad de despertar neurológico inmediato (ej: Neurocirugías)']
      },
      commercialNames: { br: ['Ultiva'], ar: ['Ultiva'] },
      presentation: { pt: ['Frasco-ampola liofilizado 2 mg, 5 mg'], es: ['Vial liofilizado 2 mg, 5 mg'] },
      mechanism: {
        pt: 'Mecanismo revolucionário. Possui a mesma potência anestésica no receptor Mu que o Fentanil, PORÉM possui uma ligação éster na sua molécula. Essa ligação faz com que o remifentanil seja DESTRUÍDO POR ESTERASES DO SANGUE E DOS TECIDOS em apenas 3 a 5 minutos, INDEPENDENTE do fígado ou dos rins. Não importa se a bomba correu por 1 hora ou por 10 dias, o paciente acorda sem dor em exatos 5 minutos após desligar.',
        es: 'Mecanismo revolucionario. Posee la misma potencia anestésica en el receptor Mu que el Fentanilo, PERO posee un enlace éster en su molécula. Este enlace hace que el remifentanilo sea DESTRUIDO POR ESTERASAS DE LA SANGRE Y DE LOS TEJIDOS en solo 3 a 5 minutos, INDEPENDIENTEMENTE del hígado o los riñones. No importa si la bomba corrió por 1 hora o por 10 días, el paciente despierta sin dolor en exactos 5 minutos tras apagarla.'
      },
      dose: {
        adult: {
          pt: 'Infusão contínua: 0,1 a 0,5 mcg/kg/min (Notar que a dose é por MINUTO, diferente do fentanil que é por HORA).',
          es: 'Infusión continua: 0,1 a 0,5 mcg/kg/min (Notar que la dosis es por MINUTO, a diferencia del fentanilo que es por HORA).'
        },
        pediatric: {
          pt: '0,05 a 0,3 mcg/kg/min IV.',
          es: '0,05 a 0,3 mcg/kg/min IV.'
        }
      },
      administration: { pt: ['Apenas uso IV contínuo em Bomba de Infusão. Incompatível em bolus puros no paciente acordado devido à potência letal.'], es: ['Solo uso IV continuo en Bomba de Infusión. Incompatible en bolos puros en el paciente despierto debido a la potencia letal.'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente independente dos rins (degradado no sangue).', es: 'Totalmente independiente de los riñones (degradado en la sangre).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Totalmente independente do fígado.', es: 'Totalmente independiente del hígado.' } },
      commonAdverseEffects: { pt: ['Hipotensão arterial frequente (mais que o fentanil)', 'Bradicardia', 'Náusea / Vômitos'], es: ['Hipotensión arterial frecuente (más que el fentanilo)', 'Bradicardia', 'Náusea / Vómitos'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória massiva em segundos', 'Hiperalgesia Aguda Induzida por Opioide (ao desligar a bomba, o paciente acorda berrando com a "pior dor da vida" se não tiver sido medicado previamente com outro analgésico de longa duração)'], es: ['Depresión respiratoria masiva en segundos', 'Hiperalgesia Aguda Inducida por Opioide (al apagar la bomba, el paciente despierta gritando con el "peor dolor de su vida" si no ha sido medicado previamente con otro analgésico de larga duración)'] },
      contraindications: {
        absolute: { pt: ['Uso peridural ou intratecal (a formulação contém glicina, que é neurotóxica na espinha)'], es: ['Uso epidural o intratecal (la formulación contiene glicina, que es neurotóxica en la espina)'] },
        relative: { pt: ['Ausência de suporte ventilatório'], es: ['Ausencia de soporte ventilatorio'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Atenção às unidades: Fentanil é prescrito em mcg/kg/HORA. Remifentanil é prescrito em mcg/kg/MINUTO (a bomba gira 60 vezes mais rápido numérico). O paciente precisa receber morfina ou dipirona 20 min ANTES de desligar o remifentanil, senão a dor no despertar será insuportável.', es: 'Atención a las unidades: Fentanilo se prescribe en mcg/kg/HORA. Remifentanilo se prescribe en mcg/kg/MINUTO (la bomba gira 60 veces más rápido numérico). El paciente necesita recibir morfina o dipirona 20 min ANTES de apagar el remifentanilo, de lo contrario el dolor al despertar será insoportable.' }
      }
    },  // end remifentanil

/* ── MORFINA ────────────────────────────────────────────────────────── */
    "morfina": {
      name: { pt: 'Morfina', es: 'Morfina' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte Natural', es: 'Analgésico Opioide Fuerte Natural' },
      indications: {
        pt: ['Dor aguda e crônica intensa', 'Infarto Agudo do Miocárdio (reduz a dor, a ansiedade e a pré-carga cardíaca)', 'Edema Agudo de Pulmão', 'Cuidados Paliativos oncológicos'],
        es: ['Dolor agudo y crónico intenso', 'Infarto Agudo de Miocardio (reduce el dolor, la ansiedad y la precarga cardíaca)', 'Edema Agudo de Pulmón', 'Cuidados Paliativos oncológicos']
      },
      commercialNames: { br: ['Dimorf'], ar: ['Morfina'] },
      presentation: { pt: ['Ampolas IV/IM/SC 10 mg/mL, 2 mg/mL', 'Comprimidos e Cápsulas LC 10 mg, 30 mg'], es: ['Ampollas IV/IM/SC 10 mg/mL, 2 mg/mL', 'Comprimidos y Cápsulas LC 10 mg, 30 mg'] },
      mechanism: {
        pt: 'Alcaloide primário do ópio. Agonista Mu e Kappa. Reduz a transmissão do estímulo doloroso bloqueando canais de cálcio pré-sinápticos e abrindo canais de potássio pós-sinápticos. Peculiaridade: a Morfina induz liberação endógena de HISTAMINA pelos mastócitos, o que causa franca VENODILATAÇÃO (excelente no edema agudo de pulmão para diminuir a água voltando ao coração) mas pode causar broncoespasmo e prurido (coceira).',
        es: 'Alcaloide primario del opio. Agonista Mu y Kappa. Reduce la transmisión del estímulo doloroso bloqueando canales de calcio presinápticos y abriendo canales de potasio postsinápticos. Peculiaridad: la Morfina induce liberación endógena de HISTAMINA por los mastocitos, lo que causa franca VENODILATACIÓN (excelente en el edema agudo de pulmón para disminuir el agua volviendo al corazón) pero puede causar broncoespasmo y prurito (picazón).'
      },
      dose: {
        adult: {
          pt: 'Dor aguda: 2 a 10 mg IV (diluído, lento a cada 4 horas). Via oral crônica: 10 a 30 mg a cada 4 horas (a dose oral é muito maior que a IV devido ao grande metabolismo de primeira passagem no fígado).',
          es: 'Dolor agudo: 2 a 10 mg IV (diluido, lento cada 4 horas). Vía oral crónica: 10 a 30 mg cada 4 horas (la dosis oral es mucho mayor que la IV debido al gran metabolismo de primer paso en el hígado).'
        },
        pediatric: {
          pt: '0,1 a 0,2 mg/kg IV ou SC a cada 4 horas (máx 10 a 15 mg).',
          es: '0,1 a 0,2 mg/kg IV o SC cada 4 horas (máx 10 a 15 mg).'
        }
      },
      administration: { pt: ['IV diluído em 9 mL de SF0,9% administrado em 2 a 4 minutos.', 'Pode ser infundida via subcutânea em cuidados paliativos (hipodermóclise).'], es: ['IV diluido en 9 mL de SF0,9% administrado en 2 a 4 minutos.', 'Puede ser infundida vía subcutánea en cuidados paliativos (hipodermoclisis).'] },
      renalAdjustment: { required: true, message: { pt: 'O metabólito Morfina-6-Glicuronídeo (M6G) é tão potente quanto a morfina e tem clearance puramente renal. Em doentes renais, ele se acumula rapidamente causando coma letal. Preferir Fentanil ou Metadona.', es: 'El metabolito Morfina-6-Glucurónido (M6G) es tan potente como la morfina y tiene clearance puramente renal. En enfermos renales, se acumula rápidamente causando coma letal. Preferir Fentanilo o Metadona.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Necessário redução de dose na cirrose grave.', es: 'Necesaria reducción de dosis en cirrosis grave.' } },
      commonAdverseEffects: { pt: ['Constipação (efeito que NUNCA gera tolerância, persiste pro resto da vida)', 'Prurido / Urticária no tronco e face (pela histamina)', 'Náuseas / Êmese (estimula a zona de gatilho quimiorreceptora no tronco encefálico)'], es: ['Constipación (efecto que NUNCA genera tolerancia, persiste de por vida)', 'Prurito / Urticaria en el tronco y cara (por la histamina)', 'Náuseas / Émesis (estimula la zona gatillo quimiorreceptora en el tronco encefálico)'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave (reduz o drive do tronco cerebral para o CO2)', 'Hipotensão sistêmica', 'Retenção urinária aguda'], es: ['Depresión respiratoria grave (reduce el drive del tronco cerebral hacia el CO2)', 'Hipotensión sistémica', 'Retención urinaria aguda'] },
      contraindications: {
        absolute: { pt: ['Depressão respiratória não controlada', 'Asma brônquica aguda (a histamina piora a crise)'], es: ['Depresión respiratoria no controlada', 'Asma bronquial aguda (la histamina empeora la crisis)'] },
        relative: { pt: ['Traumatismo cranioencefálico / Hipertensão intracraniana (aumenta PCO2 e PIC)', 'Insuficiência renal grave (ClCr < 30)'], es: ['Traumatismo craneoencefálico / Hipertensión intracraneal (aumenta PCO2 y PIC)', 'Insuficiencia renal grave (ClCr < 30)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Sempre co-prescrever um laxante forte (como Bisacodil) se o paciente for utilizar a morfina por mais de 3 dias, pois o íleo paralítico é garantido. Antídoto direto é a Naloxona.', es: 'Siempre coprescribir un laxante fuerte (como Bisacodilo) si el paciente va a utilizar la morfina por más de 3 días, pues el íleo paralítico está garantizado. Antídoto directo es la Naloxona.' }
      }
    },  // end morfina

/* ── FLUMAZENIL ─────────────────────────────────────────────────────── */
    "flumazenil": {
      name: { pt: 'Flumazenil', es: 'Flumazenilo' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Antagonista de Receptor GABA-A', es: 'Antídoto / Antagonista de Receptor GABA-A' },
      indications: {
        pt: ['Reversão de sedação por Benzodiazepínicos em procedimentos (ex: endoscopias)', 'Intoxicação aguda EXCLUSIVAMENTE por Benzodiazepínicos em pacientes "naïve" (não usuários crônicos)'],
        es: ['Reversión de sedación por Benzodiazepinas en procedimientos (ej: endoscopias)', 'Intoxicación aguda EXCLUSIVAMENTE por Benzodiazepinas en pacientes "naïve" (no usuarios crónicos)']
      },
      commercialNames: { br: ['Lanexat'], ar: ['Lanexat'] },
      presentation: { pt: ['Ampolas IV 0,1 mg/mL (5 mL)'], es: ['Ampollas IV 0,1 mg/mL (5 mL)'] },
      mechanism: {
        pt: 'Antagonista competitivo puro dos receptores benzodiazepínicos no complexo GABA-A do sistema nervoso central. Ele "expulsa" o benzodiazepínico do receptor e bloqueia seu efeito inibitório, restaurando a consciência e o drive respiratório em 1 a 2 minutos. Possui meia-vida muito curta (cerca de 40 a 80 minutos).',
        es: 'Antagonista competitivo puro de los receptores benzodiazepínicos en el complejo GABA-A del sistema nervioso central. "Expulsa" la benzodiazepina del receptor y bloquea su efecto inhibitorio, restaurando la consciencia y el drive respiratorio en 1 a 2 minutos. Posee vida media muy corta (cerca de 40 a 80 minutos).'
      },
      dose: {
        adult: {
          pt: '0,2 mg IV em 15 segundos. Se não acordar, repetir 0,1 mg a 0,2 mg a cada minuto, até o máximo de 1 mg (em sedações) ou 3 mg (em overdoses absolutas).',
          es: '0,2 mg IV en 15 segundos. Si no despierta, repetir 0,1 mg a 0,2 mg cada minuto, hasta un máximo de 1 mg (en sedaciones) o 3 mg (en sobredosis absolutas).'
        },
        pediatric: {
          pt: '0,01 mg/kg IV (máx 0,2 mg/dose), repetido a cada minuto se necessário.',
          es: '0,01 mg/kg IV (máx 0,2 mg/dosis), repetido cada minuto si es necesario.'
        }
      },
      administration: { pt: ['Administrar em bolus IV direto.', 'Se o paciente não responder após 3 mg a 5 mg totais, a causa do coma NÃO É benzodiazepínico.'], es: ['Administrar en bolo IV directo.', 'Si el paciente no responde tras 3 mg a 5 mg totales, la causa del coma NO ES benzodiazepina.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na emergência.', es: 'Sin necesidad de ajuste en la emergencia.' } },
      hepaticAdjustment: { required: true, message: { pt: 'A depuração é reduzida em hepatopatas graves, prolongando o efeito.', es: 'El aclaramiento se reduce en hepatópatas graves, prolongando el efecto.' } },
      commonAdverseEffects: { pt: ['Agitação psicomotora súbita', 'Náuseas e vômitos ao acordar', 'Tontura'], es: ['Agitación psicomotora súbita', 'Náuseas y vómitos al despertar', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['CONVULSÕES INTRACTÁVEIS E STATUS EPILEPTICUS (se administrado em usuários crônicos de benzodiazepínicos ou dependentes)', 'Arritmias cardíacas'], es: ['CONVULSIONES INTRATABLES Y STATUS EPILEPTICUS (si administrado en usuarios crónicos de benzodiazepinas o dependientes)', 'Arritmias cardíacas'] },
      contraindications: {
        absolute: { pt: ['Pacientes em uso crônico de Benzodiazepínicos para controle de Epilepsia', 'Co-intoxicação com Antidepressivos Tricíclicos (desencadeará convulsão letal imediata)'], es: ['Pacientes en uso crónico de Benzodiazepinas para control de Epilepsia', 'Cointoxicación con Antidepresivos Tricíclicos (desencadenará convulsión letal inmediata)'] },
        relative: { pt: ['Hipertensão craniana severa'], es: ['Hipertensión craneal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'FENÔMENO DE RE-SEDAÇÃO: A meia-vida do flumazenil (1h) é MUITO MAIS CURTA que a do Diazepam (até 48h). O paciente vai acordar e, 2 horas depois, entrará em coma respiratório novamente quando o antídoto perder o efeito. Vigilância intensiva obrigatória.', es: 'FENÓMENO DE RESEDACIÓN: La vida media del flumazenilo (1h) es MUCHO MÁS CORTA que la del Diazepam (hasta 48h). El paciente despertará y, 2 horas después, entrará en coma respiratorio nuevamente cuando el antídoto pierda el efecto. Vigilancia intensiva obligatoria.' }
      }
    },

/* ── ACETILCISTEÍNA IV ──────────────────────────────────────────────── */
    "acetilcisteina": {
      name: { pt: 'Acetilcisteína IV (NAC)', es: 'Acetilcisteína IV (NAC)' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Doador de Sulfidrila', es: 'Antídoto / Donador de Sulfhidrilo' },
      indications: {
        pt: ['Intoxicação aguda por Paracetamol (Acetaminofeno)', 'Prevenção de nefropatia induzida por contraste (uso controverso atual)', 'Falência hepática fulminante não-paracetamol (suporte)'],
        es: ['Intoxicación aguda por Paracetamol (Acetaminofén)', 'Prevención de nefropatía inducida por contraste (uso controvertido actual)', 'Fallo hepático fulminante no paracetamol (soporte)']
      },
      commercialNames: { br: ['Fluimucil IV', 'Acetilcisteína Injetável'], ar: ['Acemuk IV'] },
      presentation: { pt: ['Ampolas IV 100 mg/mL (3 mL = 300mg) ou frascos 20%'], es: ['Ampollas IV 100 mg/mL (3 mL = 300mg) o viales 20%'] },
      mechanism: {
        pt: 'Na overdose de paracetamol, o fígado esgota seus estoques de glutationa, levando ao acúmulo do metabólito altamente tóxico NAPQI, que destrói o fígado. A Acetilcisteína (NAC) atua como um substituto direto da glutationa, doando grupamentos sulfidrila (-SH) que se ligam ao NAPQI, neutralizando-o e permitindo sua excreção segura pela urina. Salva o fígado se iniciada em até 8 horas da ingestão.',
        es: 'En la sobredosis de paracetamol, el hígado agota sus reservas de glutatión, llevando a la acumulación del metabolito altamente tóxico NAPQI, que destruye el hígado. La Acetilcisteína (NAC) actúa como un sustituto directo del glutatión, donando grupos sulfhidrilo (-SH) que se unen al NAPQI, neutralizándolo y permitiendo su excreción segura por la orina. Salva el hígado si se inicia hasta 8 horas tras la ingesta.'
      },
      dose: {
        adult: {
          pt: 'Protocolo de 21 horas IV: Dose de Ataque: 150 mg/kg em 1 hora. Segunda dose: 50 mg/kg em 4 horas. Terceira dose: 100 mg/kg em 16 horas. Total: 300 mg/kg.',
          es: 'Protocolo de 21 horas IV: Dosis de Ataque: 150 mg/kg en 1 hora. Segunda dosis: 50 mg/kg en 4 horas. Tercera dosis: 100 mg/kg en 16 horas. Total: 300 mg/kg.'
        },
        pediatric: {
          pt: 'Mesmas dosagens em mg/kg do adulto, mas atentar rigidamente ao volume de diluente para não causar sobrecarga hídrica.',
          es: 'Mismas dosis en mg/kg que el adulto, pero atentar rígidamente al volumen de diluyente para no causar sobrecarga hídrica.'
        }
      },
      administration: { pt: ['Obrigatória diluição em SG 5% ou SF 0,9%.', 'A infusão da primeira dose (em 1h) requer muita vigilância pela alta taxa de anafilaxia química.'], es: ['Obligatoria dilución en SG 5% o SF 0,9%.', 'La infusión de la primera dosis (en 1h) requiere mucha vigilancia por la alta tasa de anafilaxia química.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'O alvo primário é o fígado. Não necessita ajuste.', es: 'El objetivo primario es el hígado. No necesita ajuste.' } },
      commonAdverseEffects: { pt: ['Flushing (vermelhidão facial intensa)', 'Erupção cutânea / Prurido', 'Vômitos'], es: ['Flushing (enrojecimiento facial intenso)', 'Erupción cutánea / Prurito', 'Vómitos'] },
      dangerousAdverseEffects: { pt: ['Reação anafilactoide severa (broncoespasmo, hipotensão e angioedema) ocorrendo quase sempre na primeira hora de infusão rápida.'], es: ['Reacción anafilactoide severa (broncoespasmo, hipotensión y angioedema) ocurriendo casi siempre en la primera hora de infusión rápida.'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada extrema (anafilaxia prévia)'], es: ['Hipersensibilidad documentada extrema (anafilaxia previa)'] },
        relative: { pt: ['Asma brônquica (risco de broncoespasmo induzido por liberação de histamina inespecífica)'], es: ['Asma bronquial (riesgo de broncoespasmo inducido por liberación de histamina inespecífica)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se o paciente desenvolver anafilaxia (rash, chiado) na dose de ataque, PARE a infusão, administre anti-histamínicos (Difenidramina) e retome a infusão de NAC de forma muito mais lenta. O antídoto não pode ser abandonado, pois a falência hepática matará o paciente.', es: 'Si el paciente desarrolla anafilaxia (rash, sibilancias) en la dosis de ataque, DETENGA la infusión, administre antihistamínicos y retome la infusión de NAC de forma mucho más lenta. El antídoto no puede ser abandonado, pues el fallo hepático matará al paciente.' }
      }
    },

/* ── FOMEPIZOL ──────────────────────────────────────────────────────── */
    "fomepizol": {
      name: { pt: 'Fomepizol', es: 'Fomepizol' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Inibidor da Álcool Desidrogenase', es: 'Antídoto / Inhibidor de la Alcohol Deshidrogenasa' },
      indications: {
        pt: ['Intoxicação confirmada ou suspeita por Etilenoglicol (líquido de arrefecimento de motores/anticongelante)', 'Intoxicação por Metanol (álcool de madeira / bebidas falsificadas)'],
        es: ['Intoxicación confirmada o sospechosa por Etilenglicol (líquido anticongelante)', 'Intoxicación por Metanol (alcohol de madera / bebidas falsificadas)']
      },
      commercialNames: { br: ['Antizol (Importação/Difícil Acesso no BR)'], ar: ['Antizol'] },
      presentation: { pt: ['Frascos-ampola 1 g/mL (1,5 mL)'], es: ['Viales 1 g/mL (1,5 mL)'] },
      mechanism: {
        pt: 'O metanol e o etilenoglicol não são altamente tóxicos por si sós, mas a enzima hepática Álcool Desidrogenase (ADH) os transforma em metabólitos letais (ácido fórmico, que causa cegueira, e ácido oxálico, que causa falência renal cristalina). O Fomepizol bloqueia a enzima ADH competitivamente, com uma afinidade 8.000 vezes maior que a do metanol. Assim, os tóxicos param de ser metabolizados e são excretados inofensivamente pelos rins.',
        es: 'El metanol y el etilenglicol no son altamente tóxicos por sí solos, pero la enzima hepática Alcohol Deshidrogenasa (ADH) los transforma en metabolitos letales (ácido fórmico, que causa ceguera, y ácido oxálico, que causa falla renal cristalina). El Fomepizol bloquea la enzima ADH competitivamente, con una afinidad 8.000 veces mayor que la del metanol. Así, los tóxicos dejan de metabolizarse y son excretados inofensivamente por los riñones.'
      },
      dose: {
        adult: {
          pt: 'Dose de ataque: 15 mg/kg IV (diluída em 100 mL de SF/SG, correr em 30 min). Manutenção: 10 mg/kg IV a cada 12 horas por 4 doses.',
          es: 'Dosis de ataque: 15 mg/kg IV (diluida en 100 mL de SF/SG, pasar en 30 min). Mantenimiento: 10 mg/kg IV cada 12 horas por 4 dosis.'
        },
        pediatric: {
          pt: 'Doses idênticas ao adulto (15 mg/kg ataque).',
          es: 'Dosis idénticas al adulto (15 mg/kg ataque).'
        }
      },
      administration: { pt: ['Injeção IV lenta ao longo de 30 minutos.', 'NUNCA administrar em bolus não diluído (causa necrose).'], es: ['Inyección IV lenta a lo largo de 30 minutos.', 'NUNCA administrar en bolo no diluido (causa necrosis).'] },
      renalAdjustment: { required: true, message: { pt: 'Fomepizol é dialisável. Se o paciente necessitar de hemodiálise para limpar a intoxicação, as doses do antídoto devem ser dadas a cada 4 horas durante a máquina.', es: 'Fomepizol es dializable. Si el paciente necesita hemodiálisis para limpiar la intoxicación, las dosis del antídoto deben darse cada 4 horas durante la máquina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste inicial.', es: 'Sin necesidad de ajuste inicial.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náuseas e alteração do paladar', 'Tontura e sonolência'], es: ['Cefalea', 'Náuseas y alteración del gusto', 'Mareo y somnolencia'] },
      dangerousAdverseEffects: { pt: ['Convulsões (raras)', 'Eosinofilia e bradicardia severa'], es: ['Convulsiones (raras)', 'Eosinofilia y bradicardia severa'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave ao fomepizol ou a pirazóis'], es: ['Hipersensibilidad grave al fomepizol o a pirazoles'] },
        relative: { pt: ['Gestação (avaliar risco-benefício, pois a intoxicação é letal para mãe e feto)'], es: ['Gestación (evaluar riesgo-beneficio, pues la intoxicación es letal para madre y feto)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Substituiu o uso de injeções de Etanol (álcool absoluto) nas UTIs devido à sua imensa superioridade de segurança (o Etanol embriaga e seda o paciente, exigindo intubação). Contudo, devido ao alto custo e falta crônica em hospitais periféricos, o Etanol IV ou VO (Cachaça pura via SNG) ainda é o improviso salva-vidas na ausência do Fomepizol.', es: 'Sustituyó el uso de inyecciones de Etanol (alcohol absoluto) en las UCIs debido a su inmensa superioridad de seguridad (el Etanol embriaga y seda al paciente, exigiendo intubación). Sin embargo, por el alto costo y falta crónica, el Etanol IV o VO aún es la improvisación salvavidas en ausencia del Fomepizol.' }
      }
    },

/* ── PRALIDOXIMA ────────────────────────────────────────────────────── */
    "pralidoxima": {
      name: { pt: 'Pralidoxima', es: 'Pralidoxima' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Reativador de Colinesterase', es: 'Antídoto / Reactivador de Colinesterasa' },
      indications: {
        pt: ['Intoxicação severa por defensivos agrícolas Organofosforados (Pesticidas/Inseticidas)', 'Tratamento de envenenamento por gases de guerra neurotóxicos (Sarin, VX)'],
        es: ['Intoxicación severa por pesticidas Organofosforados (Insecticidas)', 'Tratamiento de envenenamiento por gases de guerra neurotóxicos (Sarín, VX)']
      },
      commercialNames: { br: ['Contration (Raro)'], ar: ['Contration'] },
      presentation: { pt: ['Ampolas liofilizadas 1 g'], es: ['Ampollas liofilizadas 1 g'] },
      mechanism: {
        pt: 'Os organofosforados ligam-se covalentemente à enzima Acetilcolinesterase, destruindo-a e causando paralisia por excesso de acetilcolina. A pralidoxima age como uma "chave de fenda" molecular: se administrada cedo (antes da enzima sofrer o fenômeno irreversível chamado "aging" ou envelhecimento, que ocorre em cerca de 24 a 48h), a pralidoxima se liga ao fosfato do veneno e o "arranca" da enzima, ressuscitando a colinesterase nativa e revertendo a paralisia respiratória muscular.',
        es: 'Los organofosforados se unen covalentemente a la enzima Acetilcolinesterasa, destruyéndola y causando parálisis por exceso de acetilcolina. La pralidoxima actúa como un "destornillador" molecular: si se administra temprano (antes de que la enzima sufra el fenómeno irreversible llamado "aging", que ocurre en unas 24-48h), se une al fosfato del veneno y lo "arranca" de la enzima, resucitando la colinesterasa nativa y revirtiendo la parálisis respiratoria.'
      },
      dose: {
        adult: {
          pt: 'Bolus IV: 1 a 2 g diluídos em 100 mL de SF (correr em 15 a 30 min). Manutenção: Infusão contínua de 8 mg/kg/h ou repetir 1g a cada 6h.',
          es: 'Bolo IV: 1 a 2 g diluidos en 100 mL de SF (pasar en 15 a 30 min). Mantenimiento: Infusión continua de 8 mg/kg/h o repetir 1g cada 6h.'
        },
        pediatric: {
          pt: '20 a 50 mg/kg IV (máx 2 g/dose).',
          es: '20 a 50 mg/kg IV (máx 2 g/dosis).'
        }
      },
      administration: { pt: ['Sempre diluída e administrada lentamente. Bolus rápido causa laringoespasmo e taquicardia severa.', 'DEVE ser administrada junto ou LOGO APÓS a Atropina.'], es: ['Siempre diluida y administrada lentamente. Bolo rápido causa laringoespasmo y taquicardia severa.', 'DEBE ser administrada junto o JUSTO DESPUÉS de la Atropina.'] },
      renalAdjustment: { required: true, message: { pt: 'Depurada puramente pelos rins. Reduzir dose em DRC aguda ou crônica.', es: 'Depurada puramente por los riñones. Reducir dosis en ERC aguda o crónica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Visão turva e diplopia', 'Tontura e Cefaleia', 'Taquicardia paradoxal'], es: ['Visión borrosa y diplopía', 'Mareo y Cefalea', 'Taquicardia paradójica'] },
      dangerousAdverseEffects: { pt: ['Laringoespasmo e rigidez muscular', 'Parada Cardíaca (se injetado em < 5 minutos)'], es: ['Laringoespasmo y rigidez muscular', 'Paro Cardíaco (si inyectado en < 5 minutos)'] },
      contraindications: {
        absolute: { pt: ['Intoxicação por Carbamatos (Aldicarb/Chumbinho) sem evidência de organofosforado. Nos carbamatos a enzima se solta sozinha e a pralidoxima PODE PIORAR a intoxicação aumentando a toxicidade da droga.'], es: ['Intoxicación por Carbamatos (Chumbinho) sin evidencia de organofosforado. En los carbamatos la enzima se suelta sola y la pralidoxima PUEDE EMPEORAR la intoxicación.'] },
        relative: { pt: ['Miastenia Gravis'], es: ['Miastenia Gravis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'REGRA CADEADO: NUNCA inicie Pralidoxima antes de "atropinizar" completamente o paciente (secar os pulmões com Atropina IV massiva). Se a pralidoxima for dada primeiro, a ativação colinérgica agravará a asfixia em segundos.', es: 'REGLA CANDADO: NUNCA inicie Pralidoxima antes de "atropinizar" completamente al paciente (secar los pulmones con Atropina IV masiva). Si la pralidoxima se da primero, la activación colinérgica agravará la asfixia en segundos.' }
      }
    },

/* ── DEFEROXAMINA ───────────────────────────────────────────────────── */
    "deferoxamina": {
      name: { pt: 'Deferoxamina', es: 'Deferoxamina' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Agente Quelante de Ferro', es: 'Antídoto / Agente Quelante de Hierro' },
      indications: {
        pt: ['Intoxicação aguda por suplementos de Ferro (pediatria e tentamen)', 'Sobrecarga crônica de ferro (Hemocromatose secundária a transfusões múltiplas)'],
        es: ['Intoxicación aguda por suplementos de Hierro (pediatría y suicidio)', 'Sobrecarga crónica de hierro (Hemocromatosis secundaria a transfusiones múltiples)']
      },
      commercialNames: { br: ['Desferal'], ar: ['Desferal'] },
      presentation: { pt: ['Frascos-ampola liofilizados 500 mg'], es: ['Viales liofilizados 500 mg'] },
      mechanism: {
        pt: 'Molécula orgânica que atua como um "ímã" implacável pelo Ferro (Fe3+). Circula no sangue e agarra íons livres de ferro no plasma e nas células (sem arrancar o ferro do centro da hemoglobina vital). Ao encapsular o ferro, forma um complexo solúvel chamado FERRIOXAMINA, que é transportado pelo sangue e excretado na urina (deixando a urina com uma cor vermelho-vinho ou alaranjada muito característica, chamada de urina Vin Rosé).',
        es: 'Molécula orgánica que actúa como un "imán" implacable por el Hierro (Fe3+). Circula en la sangre y atrapa iones libres de hierro en el plasma y en las células. Al encapsular el hierro, forma un complejo soluble llamado FERRIOXAMINA, que es transportado por la sangre y excretado en la orina (dejando la orina con un color rojo-vino muy característico).'
      },
      dose: {
        adult: {
          pt: 'Intoxicação Aguda: 15 mg/kg/HORA em infusão IV contínua. Dose máxima de 80 mg/kg em 24h.',
          es: 'Intoxicación Aguda: 15 mg/kg/HORA en infusión IV continua. Dosis máxima de 80 mg/kg en 24h.'
        },
        pediatric: {
          pt: '15 mg/kg/HORA IV. O tratamento é encerrado quando o ferro sérico cair e a urina perder a cor avermelhada.',
          es: '15 mg/kg/HORA IV. El tratamiento se encierra cuando el hierro sérico caiga y la orina pierda el color rojizo.'
        }
      },
      administration: { pt: ['Infusão IV contínua obrigatória.', 'Bolus são absolutamente contraindicados pelo risco de choque vasodilatador.'], es: ['Infusión IV continua obligatoria.', 'Bolos están absolutamente contraindicados por el riesgo de choque vasodilatador.'] },
      renalAdjustment: { required: true, message: { pt: 'O complexo quelado de ferro é 100% depurado pelos rins. Em falência renal/anúricos, o complexo acumula e a toxicidade do ferro retorna. Terapia de substituição renal pode ser necessária.', es: 'El complejo quelado de hierro es 100% depurado por los riñones. En falla renal/anúricos, el complejo se acumula y la toxicidad vuelve. Terapia de sustitución renal puede ser necesaria.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Urina Vermelho-Alaranjada (Sinal terapêutico esperado)', 'Dor e eritema no local da infusão', 'Reações alérgicas'], es: ['Orina Rojo-Anaranjada (Signo terapéutico esperado)', 'Dolor y eritema en el lugar de infusión', 'Reacciones alérgicas'] },
      dangerousAdverseEffects: { pt: ['Hipotensão profunda e choque (se taxa de infusão for rápida > 15 mg/kg/h)', 'Síndrome do Desconforto Respiratório Agudo - SDRA (se a infusão for mantida por mais de 24-48 horas)'], es: ['Hipotensión profunda y choque (si tasa de infusión es rápida > 15 mg/kg/h)', 'Síndrome de Dificultad Respiratoria Aguda - SDRA (si la infusión se mantiene por más de 24-48 horas)'] },
      contraindications: {
        absolute: { pt: ['Anúria severa (insuficiência renal terminal sem diálise)'], es: ['Anuria severa (insuficiencia renal terminal sin diálisis)'] },
        relative: { pt: ['Gestação (Teratogênico em animais, porém em intoxicação grave a vida da mãe exige o tratamento)'], es: ['Gestación (Teratogénico en animales, pero en intoxicación grave la vida de la madre exige el tratamiento)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Risco Pulmonar Crítico: O uso prolongado (> 24h ininterruptas) de deferoxamina intravenosa induz toxidade pulmonar direta (Pulmão de Choque). O tratamento ideal de desintoxicação deve ser agressivo nas primeiras horas e cessado tão logo haja melhora metabólica.', es: 'Riesgo Pulmonar Crítico: El uso prolongado (> 24h ininterrumpidas) de deferoxamina intravenosa induce toxicidad pulmonar directa (Pulmón de Choque). El tratamiento ideal de desintoxicación debe ser agresivo en las primeras horas y cesado tan pronto haya mejora metabólica.' }
      }
    },

/* ── AZUL DE METILENO ───────────────────────────────────────────────── */
    "azul_metileno": {
      name: { pt: 'Azul de Metileno', es: 'Azul de Metileno' },
      category: 'emergencia',
      class: { pt: 'Antídoto / Corante Tiazínico', es: 'Antídoto / Colorante Tiazínico' },
      indications: {
        pt: ['Meta-hemoglobinemia tóxica (ex: intoxicação por dapsona, benzocaína ou nitratos)', 'Choque vasoplégico refratário na UTI ou no pós-operatório de cirurgia cardíaca (off-label)'],
        es: ['Metahemoglobinemia tóxica (ej: intoxicación por dapsona, benzocaína o nitratos)', 'Choque vasopléjico refractario en la UCI o en el posoperatorio de cirugía cardíaca (off-label)']
      },
      commercialNames: { br: ['Azul de Metileno 1%'], ar: ['Azul de Metileno'] },
      presentation: { pt: ['Ampolas IV 1% (10 mg/mL)'], es: ['Ampollas IV 1% (10 mg/mL)'] },
      mechanism: {
        pt: 'Mecanismo duplo: 1) Na Meta-hemoglobinemia (onde o ferro do sangue oxida para Fe3+ e não solta o oxigênio), ele age como doador de elétrons junto com a enzima NADPH redutase, devolvendo o ferro à forma normal (Fe2+) e restaurando a oxigenação. 2) No Choque Vasoplégico, ele inibe diretamente a enzima Óxido Nítrico Sintase (NOS) e a Guanilato Ciclase, impedindo a produção de óxido nítrico e restaurando agressivamente o tônus dos vasos sanguíneos.',
        es: 'Mecanismo doble: 1) En la Metahemoglobinemia (donde el hierro de la sangre se oxida a Fe3+ y no suelta el oxígeno), actúa como donador de electrones junto con la enzima NADPH reductasa, devolviendo el hierro a la forma normal (Fe2+) y restaurando la oxigenación. 2) En el Choque Vasopléjico, inhibe directamente la enzima Óxido Nítrico Sintasa (NOS) y la Guanilato Ciclasa, impidiendo la producción de óxido nítrico y restaurando agresivamente el tono de los vasos sanguíneos.'
      },
      dose: {
        adult: {
          pt: 'Meta-hemoglobinemia: 1 a 2 mg/kg IV (ao longo de 5 min). Choque vasoplégico: 2 mg/kg em bolus, seguido ou não de infusão (0,25 - 2 mg/kg/h).',
          es: 'Metahemoglobinemia: 1 a 2 mg/kg IV (a lo largo de 5 min). Choque vasopléjico: 2 mg/kg en bolo, seguido o no de infusión (0,25 - 2 mg/kg/h).'
        },
        pediatric: {
          pt: '1 a 2 mg/kg IV lentamente.',
          es: '1 a 2 mg/kg IV lentamente.'
        }
      },
      administration: { pt: ['Administrar IV lento (3 a 5 minutos).', 'Lavar o acesso com SF 0,9% abundantemente (é altamente irritante). O paciente e a urina ficarão azul-esverdeados.'], es: ['Administrar IV lento (3 a 5 minutos).', 'Lavar el acceso con SF 0,9% abundantemente (es altamente irritante). El paciente y la orina quedarán azul-verdosos.'] },
      renalAdjustment: { required: true, message: { pt: 'Depurado pelos rins. Usar com muita cautela na insuficiência renal grave.', es: 'Depurado por los riñones. Usar con mucha precaución en la insuficiencia renal grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Coloração azulada da pele, urina, fezes e mucosas', 'Falsa queda na oximetria de pulso (o corante cega o leitor do aparelho do dedo)', 'Náuseas'], es: ['Coloración azulada de la piel, orina, heces y mucosas', 'Falsa caída en la oximetría de pulso (el colorante ciega el lector del aparato del dedo)', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Anemia hemolítica letal se dado em pacientes com deficiência da enzima G6PD', 'Síndrome Serotoninérgica (ele atua como um potente IMAO)'], es: ['Anemia hemolítica letal si se da en pacientes con deficiencia de la enzima G6PD', 'Síndrome Serotoninérgico (actúa como un potente IMAO)'] },
      contraindications: {
        absolute: { pt: ['Deficiência de Glicose-6-Fosfato Desidrogenase (G6PD) - CAUSA HEMÓLISE MACIÇA'], es: ['Deficiencia de Glucosa-6-Fosfato Deshidrogenasa (G6PD) - CAUSA HEMÓLISIS MASIVA'] },
        relative: { pt: ['Uso concomitante com inibidores de recaptação de serotonina (ISRS)'], es: ['Uso concomitante con inhibidores de recaptación de serotonina (ISRS)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Se a oximetria do paciente cair abruptamente para 65% logo após a injeção do Azul de Metileno, NÃO se desespere. O corante azul absorve a mesma luz que o oxímetro usa para ler a hemoglobina. Fiar-se exclusivamente pela gasometria arterial.', es: 'Si la oximetría del paciente cae abruptamente al 65% justo después de la inyección del Azul de Metileno, NO se desespere. El colorante azul absorbe la misma luz que el oxímetro usa para leer la hemoglobina. Fiarse exclusivamente por la gasometría arterial.' }
      }
    },

/* ── CARVÃO ATIVADO ─────────────────────────────────────────────────── */
    "carvao_ativado": {
      name: { pt: 'Carvão Ativado', es: 'Carbón Activado' },
      category: 'emergencia',
      class: { pt: 'Antídoto Gastrointestinal / Adsorvente Universal', es: 'Antídoto Gastrointestinal / Adsorbente Universal' },
      indications: {
        pt: ['Descontaminação gastrointestinal em intoxicações orais agudas (< 1 a 2 horas da ingestão)'],
        es: ['Descontaminación gastrointestinal en intoxicaciones orales agudas (< 1 a 2 horas de la ingesta)']
      },
      commercialNames: { br: ['Carvão Ativado Pó', 'Carbomax'], ar: ['Carbón Activado'] },
      presentation: { pt: ['Pó liofilizado em frascos para suspensão (geralmente 50g)'], es: ['Polvo liofilizado en viales para suspensión (generalmente 50g)'] },
      mechanism: {
        pt: 'Pó fino superaquecido e tratado para possuir uma área de superfície de absorção monstruosa (1 grama de carvão tem a superfície de uma quadra de tênis). Ele percorre o trato gastrointestinal e liga-se quimicamente (adsorve) à esmagadora maioria dos medicamentos e toxinas orais, impedindo que passem para o sangue, sendo eliminados nas fezes.',
        es: 'Polvo fino sobrecalentado y tratado para poseer un área de superficie de absorción monstruosa (1 gramo de carbón tiene la superficie de una cancha de tenis). Recorre el tracto gastrointestinal y se une químicamente (adsorbe) a la inmensa mayoría de los medicamentos y toxinas orales, impidiendo que pasen a la sangre, siendo eliminados en las heces.'
      },
      dose: {
        adult: {
          pt: '50 a 100 gramas em dose única VO ou por Sonda Nasogástrica. Misturar com 250 a 500 mL de água pura.',
          es: '50 a 100 gramos en dosis única VO o por Sonda Nasogástrica. Mezclar con 250 a 500 mL de agua pura.'
        },
        pediatric: {
          pt: '1 a 2 g/kg (máx 50g) misturado em água.',
          es: '1 a 2 g/kg (máx 50g) mezclado en agua.'
        }
      },
      administration: { pt: ['Administrar por via oral (se paciente desperto e colaborativo) ou via Sonda Nasogástrica (SNG).', 'CUIDADO EXTREMO para garantir que a SNG está no estômago e não no pulmão antes de injetar.'], es: ['Administrar por vía oral (si paciente despierto y colaborativo) o vía Sonda Nasogástrica (SNG).', 'CUIDADO EXTREMO para asegurar que la SNG está en el estómago y no en el pulmón antes de inyectar.'] },
      renalAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente. Ação puramente local no TGI.', es: 'No es absorbido sistémicamente. Acción puramente local en TGI.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não é absorvido sistemicamente.', es: 'No es absorbido sistémicamente.' } },
      commonAdverseEffects: { pt: ['Vômitos intensos (devido ao aspecto de lama e volume de líquido ingerido)', 'Fezes negras por dias', 'Constipação transitória'], es: ['Vómitos intensos (debido al aspecto de barro y volumen de líquido ingerido)', 'Heces negras por días', 'Constipación transitoria'] },
      dangerousAdverseEffects: { pt: ['BRONCOASPIRAÇÃO FATAL (se o paciente vomitar e o carvão for para o pulmão, causa pneumonite química obstrutiva letal)', 'Obstrução intestinal'], es: ['BRONCOASPIRACIÓN FATAL (si el paciente vomita y el carbón va al pulmón, causa neumonitis química obstructiva letal)', 'Obstrucción intestinal'] },
      contraindications: {
        absolute: { pt: ['Vias aéreas desprotegidas (Paciente com RNC / Glasgow < 8 sem estar intubado)', 'Ingestão de cáusticos (ácidos/bases) ou Hidrocarbonetos (gasolina/querosene) - Risco alto de perfuração ou asfixia.', 'Íleo paralítico'], es: ['Vías respiratorias desprotegidas (Paciente con alteración del nivel de consciencia / Glasgow < 8 sin estar intubado)', 'Ingesta de cáusticos (ácidos/bases) o Hidrocarburos (gasolina/queroseno) - Riesgo alto de perforación o asfixia.', 'Íleo paralítico'] },
        relative: { pt: ['Ingestão após 2 horas (eficácia nula, exceto para drogas de liberação prolongada)'], es: ['Ingesta después de 2 horas (eficacia nula, excepto para drogas de liberación prolongada)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MEMORIZE OS METAIS: O Carvão Ativado NÃO FUNCIONA (não gruda) em Lítio, Ferro, Chumbo e Álcool. Administrar carvão para essas intoxicações fará o paciente vomitar sem nenhum benefício desintoxicante.', es: 'MEMORICE LOS METALES: El Carbón Activado NO FUNCIONA (no se pega) en Litio, Hierro, Plomo y Alcohol. Administrar carbón para estas intoxicaciones hará al paciente vomitar sin ningún beneficio desintoxicante.' }
      }
    }, // vírgula adicionada; BUILD 346 vasopressores seguem

/* ── NORADRENALINA (NOREPINEFRINA) ──────────────────────────────────── */
    "noradrenalina": {
      name: { pt: 'Noradrenalina / Norepinefrina', es: 'Noradrenalina / Norepinefrina' },
      category: 'emergencia',
      class: { pt: 'Amina Simpatomimética (Agonista Alfa-1 predominante)', es: 'Amina Simpatomimética (Agonista Alfa-1 predominante)' },
      indications: {
        pt: ['Choque Séptico (Vasopressor de Primeira Linha absoluto)', 'Choque Cardiogênico (para manter pressão de perfusão coronariana)', 'Hipotensão refratária severa'],
        es: ['Choque Séptico (Vasopresor de Primera Línea absoluto)', 'Choque Cardiogénico (para mantener presión de perfusión coronaria)', 'Hipotensión refractaria severa']
      },
      commercialNames: { br: ['Levophed', 'Hyponor'], ar: ['Noradrenalina'] },
      presentation: { pt: ['Ampolas IV 4 mg/4 mL ou 8 mg/4 mL (Bissulfato ou Hemitartarato)'], es: ['Ampollas IV 4 mg/4 mL o 8 mg/4 mL'] },
      mechanism: {
        pt: 'Estimula fortemente os receptores Alfa-1 adrenérgicos (causando intensa vasoconstrição periférica e aumento da resistência vascular sistêmica) e possui leve efeito Beta-1 (discreto aumento da contratilidade cardíaca). Eleva agressivamente a Pressão Arterial Média (PAM) para perfundir órgãos vitais.',
        es: 'Estimula fuertemente los receptores Alfa-1 adrenérgicos (causando intensa vasoconstricción periférica y aumento de la resistencia vascular sistémica) y posee leve efecto Beta-1 (discreto aumento de la contractilidad cardíaca). Eleva agresivamente la Presión Arterial Media (PAM) para perfundir órganos vitales.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV Contínua: 0,01 a 3 mcg/kg/min (Alguns protocolos vão até limites mais altos no choque refratário, mas aumenta risco de isquemia digital).',
          es: 'Infusión IV Continua: 0,01 a 3 mcg/kg/min (Algunos protocolos van hasta límites más altos en el choque refractario, pero aumenta riesgo de isquemia digital).'
        },
        pediatric: {
          pt: '0,05 a 1 mcg/kg/min IV contínuo.',
          es: '0,05 a 1 mcg/kg/min IV continuo.'
        }
      },
      administration: { pt: ['OBRIGATÓRIO uso de Bomba de Infusão Contínua.', 'PREFERENCIALMENTE em Acesso Venoso Central. O uso em veia periférica deve ser temporário (até pegar acesso central) devido ao risco de extravasamento e necrose.'], es: ['OBLIGATORIO uso de Bomba de Infusión Continua.', 'PREFERENTEMENTE en Acceso Venoso Central. El uso en vena periférica debe ser temporal (hasta coger acceso central) debido al riesgo de extravasación y necrosis.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Palpitações e tremores', 'Ansiedade severa (se o paciente estiver acordado)'], es: ['Palpitaciones y temblores', 'Ansiedad severa (si el paciente está despierto)'] },
      dangerousAdverseEffects: { pt: ['Isquemia de extremidades (necrose de dedos e ponta do nariz nas altas doses)', 'Arritmias cardíacas', 'Necrose tecidual por extravasamento periférico'], es: ['Isquemia de extremidades (necrosis de dedos y punta de la nariz en altas dosis)', 'Arritmias cardíacas', 'Necrosis tisular por extravasación periférica'] },
      contraindications: {
        absolute: { pt: ['Hipotensão por hipovolemia absoluta não corrigida (a droga vai espremer vasos vazios, causando isquemia total)'], es: ['Hipotensión por hipovolemia absoluta no corregida (la droga va a exprimir vasos vacíos, causando isquemia total)'] },
        relative: { pt: ['Trombose mesentérica suspeita (a vasoconstrição pode necrosar o intestino)'], es: ['Trombosis mesentérica sospechosa (la vasoconstricción puede necrosar el intestino)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO DE EXTRAVASAMENTO: Se a Noradrenalina vazar para fora da veia, a pele ficará branca/isquêmica e apodrecerá. Deve-se infiltrar imediatamente a área com FENTOLAMINA (bloqueador alfa) para dilatar os vasos locais e salvar o membro.', es: 'ANTÍDOTO DE EXTRAVASACIÓN: Si la Noradrenalina se sale de la vena, la piel quedará blanca/isquémica y se pudrirá. Se debe infiltrar inmediatamente el área con FENTOLAMINA (bloqueador alfa) para dilatar los vasos locales y salvar el miembro.' }
      }
    },

/* ── ADRENALINA (EPINEFRINA) ────────────────────────────────────────── */
    "adrenalina": {
      name: { pt: 'Adrenalina / Epinefrina', es: 'Adrenalina / Epinefrina' },
      category: 'emergencia',
      class: { pt: 'Amina Simpatomimética (Agonista Alfa e Beta puro)', es: 'Amina Simpatomimética (Agonista Alfa y Beta puro)' },
      indications: {
        pt: ['Parada Cardiorrespiratória (PCR - Fibrilação, Assistolia, AESP)', 'Choque Anafilático (Tratamento Ouro)', 'Asma Severa Refratária', 'Choque séptico refratário a noradrenalina'],
        es: ['Paro Cardiorrespiratorio (RCP - Fibrilación, Asistolia, AESP)', 'Choque Anafiláctico (Tratamiento Oro)', 'Asma Severa Refractaria', 'Choque séptico refractario a noradrenalina']
      },
      commercialNames: { br: ['Epinefrina', 'EpiPen (auto-injetor)'], ar: ['Adrenalina'] },
      presentation: { pt: ['Ampolas 1 mg/mL (1 mL = 1:1.000)'], es: ['Ampollas 1 mg/mL (1 mL = 1:1.000)'] },
      mechanism: {
        pt: 'Estimula todos os receptores adrenérgicos. No Alfa-1 (Vasos): Vasoconstrição potente (eleva PA na PCR). No Beta-1 (Coração): Aumenta drasticamente a frequência e a força contrátil. No Beta-2 (Pulmão): Promove relaxamento e broncodilatação imediata da árvore brônquica asfixiada pela anafilaxia.',
        es: 'Estimula todos los receptores adrenérgicos. En el Alfa-1 (Vasos): Vasoconstricción potente (eleva PA en RCP). En el Beta-1 (Corazón): Aumenta drásticamente la frecuencia y la fuerza contráctil. En el Beta-2 (Pulmón): Promueve relajación y broncodilatación inmediata del árbol bronquial asfixiado por la anafilaxia.'
      },
      dose: {
        adult: {
          pt: 'PCR: 1 mg IV a cada 3 a 5 minutos. Anafilaxia: 0,3 a 0,5 mg INTRAMUSCULAR (no vasto lateral da coxa). Bomba de Infusão (Choque): 0,01 a 0,5 mcg/kg/min.',
          es: 'RCP: 1 mg IV cada 3 a 5 minutos. Anafilaxia: 0,3 a 0,5 mg INTRAMUSCULAR (en el vasto lateral del muslo). Bomba de Infusión (Choque): 0,01 a 0,5 mcg/kg/min.'
        },
        pediatric: {
          pt: 'PCR: 0,01 mg/kg IV. Anafilaxia: 0,01 mg/kg IM (máx 0,3 mg).',
          es: 'RCP: 0,01 mg/kg IV. Anafilaxia: 0,01 mg/kg IM (máx 0,3 mg).'
        }
      },
      administration: { pt: ['NA ANAFILAXIA A VIA É INTRAMUSCULAR. Fazer adrenalina pura IV no paciente acordado com anafilaxia causará fibrilação ventricular letal.', 'Na PCR, faz-se o bolus de 1 mg IV puro seguido de 20mL de SF e elevação do membro.'], es: ['EN ANAFILAXIA LA VÍA ES INTRAMUSCULAR. Hacer adrenalina pura IV en el paciente despierto con anafilaxia causará fibrilación ventricular letal.', 'En RCP, se hace el bolo de 1 mg IV puro seguido de 20mL de SF y elevación del miembro.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hiperlactatemia metabólica tipo B (o lactato sobe sem ser isquemia, assustando o médico inexperiente)', 'Hiperglicemia (estimula glicogenólise)', 'Ansiedade e taquicardia'], es: ['Hiperlactatemia metabólica tipo B (el lactato sube sin ser isquemia, asustando al médico inexperto)', 'Hiperglucemia (estimula glucogenólisis)', 'Ansiedad y taquicardia'] },
      dangerousAdverseEffects: { pt: ['Infarto Agudo do Miocárdio (devido ao consumo brutal de O2 miocárdico)', 'Acidente Vascular Cerebral Hemorrágico (pelo pico pressórico)', 'Fibrilação Ventricular'], es: ['Infarto Agudo de Miocardio (debido al consumo brutal de O2 miocárdico)', 'Accidente Cerebrovascular Hemorrágico (por el pico presórico)', 'Fibrilación Ventricular'] },
      contraindications: {
        absolute: { pt: ['NENHUMA em cenários de Parada Cardíaca ou Anafilaxia Severa (droga salvadora universal).'], es: ['NINGUNA en escenarios de Paro Cardíaco o Anafilaxia Severa (droga salvadora universal).'] },
        relative: { pt: ['Uso associado com anestésicos halogenados (sensibiliza o miocárdio)'], es: ['Uso asociado con anestésicos halogenados (sensibiliza el miocardio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A adrenalina é o MAIOR ACELERADOR METABÓLICO DO CORPO. Ela não resolve a causa do choque séptico, apenas força o coração a bater ao limite absoluto. Na UTI, é sempre a segunda ou terceira droga a entrar na bomba, nunca a primeira (privilégio da noradrenalina).', es: 'La adrenalina es el MAYOR ACELERADOR METABÓLICO DEL CUERPO. No resuelve la causa del choque séptico, solo fuerza al corazón a latir al límite absoluto. En UCI, siempre es la segunda o tercera droga en entrar a la bomba, nunca la primera (privilegio de la noradrenalina).' }
      }
    },

/* ── DOPAMINA ───────────────────────────────────────────────────────── */
    "dopamina": {
      name: { pt: 'Dopamina', es: 'Dopamina' },
      category: 'emergencia',
      class: { pt: 'Amina Simpatomimética / Precursora da Noradrenalina', es: 'Amina Simpatomimética / Precursora de la Noradrenalina' },
      indications: {
        pt: ['Choque Cardiogênico (uso em queda, perdendo espaço)', 'Choque Séptico em pacientes com bradicardia relativa (como 2ª linha)', 'Bradicardia sintomática refratária'],
        es: ['Choque Cardiogénico (uso en caída, perdiendo espacio)', 'Choque Séptico en pacientes con bradicardia relativa (como 2ª línea)', 'Bradicardia sintomática refractaria']
      },
      commercialNames: { br: ['Revivan'], ar: ['Dopamina'] },
      presentation: { pt: ['Ampolas IV 50 mg/10 mL (5 mg/mL)'], es: ['Ampollas IV 50 mg/10 mL (5 mg/mL)'] },
      mechanism: {
        pt: 'Mecanismo Dose-Dependente peculiar: Em Doses Baixas (1-2 mcg): Age em receptores Dopaminérgicos D1, dilatando vasos renais (a antiga e desmentida "dose renal"). Em Doses Médias (5-10 mcg): Estimula Beta-1, aumentando força e frequência cardíaca. Em Doses Altas (>10 mcg): Comporta-se como Noradrenalina, estimulando Alfa-1 e causando vasoconstrição severa.',
        es: 'Mecanismo Dosis-Dependiente peculiar: En Dosis Bajas (1-2 mcg): Actúa en receptores Dopaminérgicos D1, dilatando vasos renales (la antigua y desmentida "dosis renal"). En Dosis Medias (5-10 mcg): Estimula Beta-1, aumentando fuerza y frecuencia cardíaca. En Dosis Altas (>10 mcg): Se comporta como Noradrenalina, estimulando Alfa-1 y causando vasoconstricción severa.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV Contínua: 2 a 20 mcg/kg/min (Ajustado pelo efeito desejado).',
          es: 'Infusión IV Continua: 2 a 20 mcg/kg/min (Ajustado por el efecto deseado).'
        },
        pediatric: {
          pt: '2 a 20 mcg/kg/min.',
          es: '2 a 20 mcg/kg/min.'
        }
      },
      administration: { pt: ['Obrigatório uso em Bomba de Infusão.', 'Acesso central preferencial pelo risco de extravasamento.'], es: ['Obligatorio uso en Bomba de Infusión.', 'Acceso central preferencial por el riesgo de extravasación.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem ajuste necessário.', es: 'Sin ajuste necesario.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste.', es: 'Sin ajuste.' } },
      commonAdverseEffects: { pt: ['Taquicardia sinusal', 'Náuseas e vômitos', 'Cefaleia'], es: ['Taquicardia sinusal', 'Náuseas y vómitos', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Taquiarritmias graves (Fibrilação Atrial, Taquicardia Ventricular) - OCORREM MUITO MAIS do que com a noradrenalina', 'Necrose isquêmica tecidual periférica'], es: ['Taquiarritmias graves (Fibrilación Auricular, Taquicardia Ventricular) - OCURREN MUCHO MÁS que con la noradrenalina', 'Necrosis isquémica tisular periférica'] },
      contraindications: {
        absolute: { pt: ['Fibrilação Ventricular não corrigida', 'Feocromocitoma', 'Taquiarritmias ativas'], es: ['Fibrilación Ventricular no corregida', 'Feocromocitoma', 'Taquiarritmias activas'] },
        relative: { pt: ['Uso associado com inibidores da MAO'], es: ['Uso asociado con inhibidores de la MAO'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MUDANÇA DE PARADIGMA: A Dopamina não é mais a droga de escolha para o choque séptico há anos. Ensaios clínicos provaram que ela causa o dobro de arritmias letais em comparação com a Noradrenalina, com maior mortalidade geral. A lenda da "dose renal" para proteger os rins também já foi refutada pela ciência.', es: 'CAMBIO DE PARADIGMA: La Dopamina ya no es la droga de elección para el choque séptico desde hace años. Ensayos clínicos demostraron que causa el doble de arritmias letales en comparación con la Noradrenalina, con mayor mortalidad general. La leyenda de la "dosis renal" para proteger los riñones también ha sido refutada por la ciencia.' }
      }
    },

/* ── DOBUTAMINA ─────────────────────────────────────────────────────── */
    "dobutamina": {
      name: { pt: 'Dobutamina', es: 'Dobutamina' },
      category: 'emergencia',
      class: { pt: 'Agonista Beta-1 Adrenérgico Sintético (Inotrópico Positivo)', es: 'Agonista Beta-1 Adrenérgico Sintético (Inotrópico Positivo)' },
      indications: {
        pt: ['Choque Cardiogênico (Disfunção contrátil severa do Ventrículo Esquerdo)', 'Insuficiência Cardíaca Aguda Descompensada (Perfil C - Frio e Úmido)', 'Choque séptico com disfunção miocárdica associada (para aumentar débito cardíaco)'],
        es: ['Choque Cardiogénico (Disfunción contráctil severa del Ventrículo Izquierdo)', 'Insuficiencia Cardíaca Aguda Descompensada (Perfil C - Frío y Húmedo)', 'Choque séptico con disfunción miocárdica asociada (para aumentar gasto cardíaco)']
      },
      commercialNames: { br: ['Dobutrex'], ar: ['Dobutamina'] },
      presentation: { pt: ['Ampolas IV 12,5 mg/mL (20 mL = 250 mg)'], es: ['Ampollas IV 12,5 mg/mL (20 mL = 250 mg)'] },
      mechanism: {
        pt: 'Estimula predominantemente os receptores Beta-1 no coração, aumentando agressivamente a contratilidade (inotrópico positivo forte). Possui também leve estímulo Beta-2 periférico, o que causa discreta VASODILATAÇÃO sistêmica. Diferente da noradrenalina, ELA NÃO AUMENTA A PRESSÃO ARTERIAL DIRETAMENTE (inclusive, pode cair a pressão se o paciente estiver desidratado). O aumento da PAM ocorre apenas se o coração passar a bombear melhor o sangue.',
        es: 'Estimula predominantemente los receptores Beta-1 en el corazón, aumentando agresivamente la contractilidad (inotrópico positivo fuerte). Posee también leve estímulo Beta-2 periférico, lo que causa discreta VASODILATACIÓN sistémica. A diferencia de la noradrenalina, NO AUMENTA LA PRESIÓN ARTERIAL DIRECTAMENTE (incluso, puede caer la presión si el paciente está deshidratado). El aumento de la PAM ocurre solo si el corazón pasa a bombear mejor la sangre.'
      },
      dose: {
        adult: {
          pt: 'Infusão IV Contínua: 2 a 20 mcg/kg/min (Titulado pelo Débito Cardíaco e sinais de perfusão).',
          es: 'Infusión IV Continua: 2 a 20 mcg/kg/min (Titulado por el Gasto Cardíaco y signos de perfusión).'
        },
        pediatric: {
          pt: '2 a 20 mcg/kg/min.',
          es: '2 a 20 mcg/kg/min.'
        }
      },
      administration: { pt: ['Obrigatório uso em Bomba de Infusão Contínua.', 'Não deve ser infundida na mesma via que o Bicarbonato de Sódio (inativação química).'], es: ['Obligatorio uso en Bomba de Infusión Continua.', 'No debe ser infundida en la misma vía que el Bicarbonato de Sodio (inactivación química).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizada por enzimas hepáticas COMT, mas sem necessidade de ajuste na emergência.', es: 'Metabolizada por enzimas hepáticas COMT, pero sin necesidad de ajuste en la emergencia.' } },
      commonAdverseEffects: { pt: ['Taquicardia induzida (comum e esperada)', 'Cefaleia', 'Hipotensão inicial (se hipovolemia prévia)'], es: ['Taquicardia inducida (común y esperada)', 'Cefalea', 'Hipotensión inicial (si hipovolemia previa)'] },
      dangerousAdverseEffects: { pt: ['Isquemia do miocárdio / Infarto (o músculo bate muito forte e rápido, consumindo todo o O2)', 'Arritmias ventriculares graves', 'Fibrilação Atrial'], es: ['Isquemia del miocardio / Infarto (el músculo late muy fuerte y rápido, consumiendo todo el O2)', 'Arritmias ventriculares graves', 'Fibrilación Auricular'] },
      contraindications: {
        absolute: { pt: ['Estenose Aórtica Severa', 'Cardiomiopatia Hipertrófica Obstrutiva (vai obstruir ainda mais a saída do sangue)'], es: ['Estenosis Aórtica Severa', 'Miocardiopatía Hipertrófica Obstructiva (va a obstruir aún más la salida de la sangre)'] },
        relative: { pt: ['Fibrilação Atrial com alta resposta ventricular basal'], es: ['Fibrilación Auricular con alta respuesta ventricular basal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A Dobutamina serve apenas para uma coisa: FORÇA. Se o paciente estiver em choque séptico puro com os vasos sanguíneos abertos (vasoplegia), colocar dobutamina pode MATAR o paciente por queda fatal da pressão. Só associe a dobuta quando a Noradrenalina já estiver segurando a resistência vascular.', es: 'La Dobutamina sirve solo para una cosa: FUERZA. Si el paciente está en choque séptico puro con los vasos sanguíneos abiertos (vasoplejía), poner dobutamina puede MATAR al paciente por caída fatal de la presión. Solo asocie la dobutamina cuando la Noradrenalina ya esté sosteniendo la resistencia vascular.' }
      }
    },

/* ── VASOPRESSINA ───────────────────────────────────────────────────── */
    "vasopressina": {
      name: { pt: 'Vasopressina (ADH)', es: 'Vasopresina (ADH)' },
      category: 'emergencia',
      class: { pt: 'Peptídeo Vasoativo (Hormônio Antidiurético)', es: 'Péptido Vasoactivo (Hormona Antidiurética)' },
      indications: {
        pt: ['Choque Séptico Refratário (adicionado à Noradrenalina para poupar dose e reduzir a toxicidade adrenérgica)', 'Choque Hemorrágico ou Vasoplégico refratário', 'Sangramento de Varizes Esofágicas (embora a Terlipressina seja mais usada para isso)'],
        es: ['Choque Séptico Refractario (añadido a la Noradrenalina para ahorrar dosis y reducir la toxicidad adrenérgica)', 'Choque Hemorrágico o Vasopléjico refractario', 'Sangrado de Várices Esofágicas (aunque la Terlipresina sea más usada para esto)']
      },
      commercialNames: { br: ['Encrise'], ar: ['Vasopresina'] },
      presentation: { pt: ['Ampolas IV 20 UI/mL (1 mL)'], es: ['Ampollas IV 20 UI/mL (1 mL)'] },
      mechanism: {
        pt: 'Aja de forma totalmente independente da via adrenérgica da noradrenalina/adrenalina. Estimula diretamente os receptores V1 no músculo liso vascular, causando intensa vasoconstrição sistêmica e esplâncnica. A grande vantagem é que, enquanto as aminas (Nora) perdem sua força no sangue ácido (acidose metabólica severa da sepse), a Vasopressina continua constringindo os vasos perfeitamente mesmo no ambiente mais ácido, salvando a pressão do paciente.',
        es: 'Actúa de forma totalmente independiente de la vía adrenérgica de la noradrenalina/adrenalina. Estimula directamente los receptores V1 en el músculo liso vascular, causando intensa vasoconstricción sistémica y esplácnica. La gran ventaja es que, mientras las aminas (Nora) pierden su fuerza en la sangre ácida (acidosis metabólica severa de la sepsis), la Vasopresina continúa constriñendo los vasos perfectamente incluso en el ambiente más ácido, salvando la presión del paciente.'
      },
      dose: {
        adult: {
          pt: 'Choque Séptico: Infusão contínua fixa de 0,01 a 0,04 UI/min (Diferente da nora, a dose geralmente não é titulada, ela entra em taxa fixa contínua).',
          es: 'Choque Séptico: Infusión continua fija de 0,01 a 0,04 UI/min (A diferencia de la nora, la dosis generalmente no es titulada, entra en tasa fija continua).'
        },
        pediatric: {
          pt: '0,0003 a 0,002 UI/kg/min (Uso estritamente guiado por intensivos).',
          es: '0,0003 a 0,002 UI/kg/min (Uso estrictamente guiado por intensivos).'
        }
      },
      administration: { pt: ['Bomba de infusão contínua obrigatória em via venosa central.'], es: ['Bomba de infusión continua obligatoria en vía venosa central.'] },
      renalAdjustment: { required: false, message: { pt: 'Ao estimular o receptor V2, pode causar forte retenção de água livre.', es: 'Al estimular el receptor V2, puede causar fuerte retención de agua libre.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Palidez extrema (vasoconstrição de pele)', 'Náuseas e cólicas abdominais (por isquemia leve)'], es: ['Palidez extrema (vasoconstricción de piel)', 'Náuseas y cólicos abdominales (por isquemia leve)'] },
      dangerousAdverseEffects: { pt: ['Isquemia Mesentérica e Necrose Intestinal (frequentemente o intestino morre se a dose for > 0,04 UI/min)', 'Infarto Agudo do Miocárdio', 'Intoxicação Hídrica (Hiponatremia grave por diluição)'], es: ['Isquemia Mesentérica y Necrosis Intestinal (frecuentemente el intestino muere si la dosis es > 0,04 UI/min)', 'Infarto Agudo de Miocardio', 'Intoxicación Hídrica (Hiponatremia grave por dilución)'] },
      contraindications: {
        absolute: { pt: ['Nenhuma absoluta em cenário de choque refratário mortal.'], es: ['Ninguna absoluta en escenario de choque refractario mortal.'] },
        relative: { pt: ['Doença arterial coronariana ativa', 'Insuficiência cardíaca descompensada (pelo aumento brutal da pós-carga)'], es: ['Enfermedad arterial coronaria activa', 'Insuficiencia cardíaca descompensada (por el aumento brutal de la poscarga)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Estratégia de Desmame (UTI): A Vasopressina e a Noradrenalina devem ser desmamadas com cautela. Geralmente, reduz-se a Noradrenalina primeiro. Desligar a Vasopressina subitamente no paciente crítico frequentemente causa colapso pressórico rebote em poucos minutos.', es: 'Estrategia de Destete (UCI): La Vasopresina y la Noradrenalina deben ser destetadas con precaución. Generalmente, se reduce la Noradrenalina primero. Apagar la Vasopresina súbitamente en el paciente crítico frecuentemente causa colapso presórico rebote en pocos minutos.' }
      }
    }, // vírgula adicionada; BUILD 354 blocos seguem

/* ── DEXAMETASONA ───────────────────────────────────────────────────── */
    "dexametasona": {
      name: { pt: 'Dexametasona', es: 'Dexametasona' },
      category: 'emergencia',
      class: { pt: 'Corticosteroide Sistêmico (Glicocorticoide Puro de Longa Ação)', es: 'Corticosteroide Sistémico (Glucocorticoide Puro de Larga Acción)' },
      indications: {
        pt: ['Edema cerebral (Tumores de SNC / Traumatismo, devido à alta penetração no líquor)', 'Síndrome da Angústia Respiratória Aguda (COVID-19 grave e SRAG)', 'Prevenção de Náuseas e Vômitos no pós-operatório (profilaxia)', 'Laringite estridulosa grave (Crupe) em pediatria'],
        es: ['Edema cerebral (Tumores de SNC / Traumatismo, debido a la alta penetración en LCR)', 'Síndrome de Dificultad Respiratoria Aguda (COVID-19 grave y SRAG)', 'Prevención de Náuseas y Vómitos en el posoperatorio (profilaxis)', 'Laringitis estridulosa grave (Crup) en pediatría']
      },
      commercialNames: { br: ['Decadron'], ar: ['Decadron'] },
      presentation: { pt: ['Ampolas IV/IM 2 mg/mL e 4 mg/mL', 'Comprimidos 0,5 mg e 4 mg', 'Elixir'], es: ['Ampollas IV/IM 2 mg/mL y 4 mg/mL', 'Comprimidos 0,5 mg y 4 mg', 'Elixir'] },
      mechanism: {
        pt: 'Potentíssimo modulador genético anti-inflamatório (cerca de 25 a 30 vezes mais potente que a hidrocortisona). Sua imensa virtude em UTI neurológica é que ele é um Glicocorticoide PURO: possui ZERO efeito mineralocorticoide (não retém sódio nem água), portanto não incha o paciente nem aumenta agressivamente a pressão arterial, sendo perfeito para reduzir inflamação dentro do cérebro. Tempo de ação biológica é gigantesco (36 a 72 horas).',
        es: 'Potentísimo modulador genético antiinflamatorio (cerca de 25 a 30 veces más potente que la hidrocortisona). Su inmensa virtud en la UCI neurológica es que es un Glucocorticoide PURO: posee CERO efecto mineralocorticoide (no retiene sodio ni agua), por lo tanto no hincha al paciente ni aumenta agresivamente la presión arterial, siendo perfecto para reducir la inflamación dentro del cerebro. El tiempo de acción biológica es gigantesco (36 a 72 horas).'
      },
      dose: {
        adult: {
          pt: 'Edema Cerebral: Ataque IV 10 mg, depois 4 mg 6/6h. COVID-19 Severo (Recovery Trial): 6 mg IV/VO 1x ao dia por até 10 dias. Antiemético NVPO: 4 a 8 mg IV indução.',
          es: 'Edema Cerebral: Ataque IV 10 mg, luego 4 mg 6/6h. COVID-19 Severo (Recovery Trial): 6 mg IV/VO 1 vez al día por hasta 10 días. Antiemético NVPO: 4 a 8 mg IV inducción.'
        },
        pediatric: {
          pt: 'Laringite/Crupe aguda: 0,6 mg/kg (Máx 16 mg) IM, IV ou VO em DOSE ÚNICA (efeito "salva-vias aéreas").',
          es: 'Laringitis/Crup aguda: 0,6 mg/kg (Máx 16 mg) IM, IV o VO en DOSIS ÚNICA (efecto "salva-vías respiratorias").'
        }
      },
      administration: { pt: ['A injeção IV rápida (bolus em segundos) causa intensa queimação no ânus, períneo e genitália do paciente (reação inofensiva, mas extremamente desconfortável). Infunda em pelo menos 3 a 5 minutos.'], es: ['La inyección IV rápida (bolo en segundos) causa intenso ardor en el ano, perineo y genitales del paciente (reacción inofensiva, pero extremadamente incómoda). Infunda en al menos 3 a 5 minutos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste formal.', es: 'Sin necesidad de ajuste formal.' } },
      hepaticAdjustment: { required: false, message: { pt: 'A meia-vida pode dobrar na cirrose, mas raramente exige ajuste na emergência.', es: 'La vida media puede doblarse en la cirrosis, pero raramente exige ajuste en urgencias.' } },
      commonAdverseEffects: { pt: ['Hiperglicemia aguda (descontrola diabetes instantaneamente)', 'Insônia e agitação psicomotora', 'Aumento de apetite'], es: ['Hiperglucemia aguda (descontrola diabetes instantáneamente)', 'Insomnio y agitación psicomotora', 'Aumento de apetito'] },
      dangerousAdverseEffects: { pt: ['Imunossupressão profunda em uso prolongado', 'Psicose induzida por corticoide', 'Hemorragia digestiva alta (risco moderado)'], es: ['Inmunosupresión profunda en uso prolongado', 'Psicosis inducida por corticoide', 'Hemorragia digestiva alta (riesgo moderado)'] },
      contraindications: {
        absolute: { pt: ['Infecções fúngicas sistêmicas não tratadas', 'Uso concomitante com vacinas de vírus vivo (se terapia de alta dose)'], es: ['Infecciones fúngicas sistémicas no tratadas', 'Uso concomitante con vacunas de virus vivo (si terapia de alta dosis)'] },
        relative: { pt: ['Glaucoma', 'Úlcera péptica ativa sem proteção com IBP'], es: ['Glaucoma', 'Úlcera péptica activa sin protección con IBP'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'NUNCA prescreva a Dexametasona como corticoide de reposição no Choque Séptico! Como ela não tem o poder mineralocorticoide de segurar sódio e água (efeito da aldosterona), ela falha em manter a pressão do paciente chocado. Para o choque, usa-se a Hidrocortisona.', es: '¡NUNCA prescriba la Dexametasona como corticoide de reposición en el Choque Séptico! Como no tiene el poder mineralocorticoide de retener sodio y agua (efecto de la aldosterona), falla en mantener la presión del paciente en choque. Para el choque, se usa la Hidrocortisona.' }
      }
    },

/* ── HIDROCORTISONA ─────────────────────────────────────────────────── */
    "hidrocortisona": {
      name: { pt: 'Hidrocortisona', es: 'Hidrocortisona' },
      category: 'emergencia',
      class: { pt: 'Corticosteroide Sistêmico (Glico e Mineralocorticoide de Curta Ação)', es: 'Corticosteroide Sistémico (Gluco y Mineralocorticoide de Corta Acción)' },
      indications: {
        pt: ['Choque Séptico refratário a vasopressores (Reposição de corticoide em UTI)', 'Crise Adrenal Aguda (Insuficiência Suprarrenal severa)', 'Asma Severa e Exacerbação de DPOC', 'Choque Anafilático (profilaxia do componente tardio)'],
        es: ['Choque Séptico refractario a vasopresores (Reposición de corticoide en UCI)', 'Crisis Adrenal Aguda (Insuficiencia Suprarrenal severa)', 'Asma Severa y Exacerbación de EPOC', 'Choque Anafiláctico (profilaxis del componente tardío)']
      },
      commercialNames: { br: ['Solu-Cortef', 'Flebocortid'], ar: ['Solu-Cortef'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 100 mg e 500 mg'], es: ['Vial IV liofilizado 100 mg y 500 mg'] },
      mechanism: {
        pt: 'É a versão farmacêutica idêntica ao Cortisol humano natural. Possui igual e fortíssima atividade GLICOCORTICOIDE (anti-inflamatória, aumenta a glicose) e MINERALOCORTICOIDE (retém sódio e água nos rins, expulsando potássio, o que sobe ativamente a pressão arterial e a volemia). Por isso é o "Rei" no tratamento de choques vasodilatadores e doença de Addison. Meia-vida biológica curta (8 a 12 horas).',
        es: 'Es la versión farmacéutica idéntica al Cortisol humano natural. Posee igual y fortísima actividad GLUCOCORTICOIDE (antiinflamatoria, aumenta la glucosa) y MINERALOCORTICOIDE (retiene sodio y agua en los riñones, expulsando potasio, lo que sube activamente la presión arterial y la volemia). Por eso es el "Rey" en el tratamiento de choques vasodilatadores y enfermedad de Addison. Vida media biológica corta (8 a 12 horas).'
      },
      dose: {
        adult: {
          pt: 'Choque Séptico: 200 mg/dia (Idealmente em Infusão Contínua de 200mg em 24h, ou 50 mg IV a cada 6h). Asma/Anafilaxia: Bolus 250 a 500 mg IV.',
          es: 'Choque Séptico: 200 mg/día (Idealmente en Infusión Continua de 200mg en 24h, o 50 mg IV cada 6h). Asma/Anafilaxia: Bolo 250 a 500 mg IV.'
        },
        pediatric: {
          pt: 'Asma severa: 2 a 4 mg/kg IV a cada 6h (Máx 250mg/dose).',
          es: 'Asma severa: 2 a 4 mg/kg IV cada 6h (Máx 250mg/dosis).'
        }
      },
      administration: { pt: ['Reconstituição do frasco pó com diluente estéril apropriado. O uso em bolus rápido é tolerado nas emergências (1 a 2 min).'], es: ['Reconstitución del vial polvo con diluyente estéril apropiado. El uso en bolo rápido es tolerado en las emergencias (1 a 2 min).'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em disfunção renal crônica aguda.', es: 'No requiere ajuste en disfunción renal crónica aguda.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste emergencial.', es: 'Sin necesidad de ajuste emergencial.' } },
      commonAdverseEffects: { pt: ['Hiperglicemia quase obrigatória na UTI (exige monitoração com fita capilar e insulina regular)', 'Hipernatremia (excesso de sódio) e Hipocalemia (perda de potássio)', 'Retenção de fluidos (edema generalizado)'], es: ['Hiperglucemia casi obligatoria en la UCI (exige monitorización con cinta capilar e insulina regular)', 'Hipernatremia (exceso de sodio) e Hipopotasemia (pérdida de potasio)', 'Retención de fluidos (edema generalizado)'] },
      dangerousAdverseEffects: { pt: ['Miopatia do doente crítico (se associado a bloqueadores neuromusculares)', 'Delirium induzido por corticoide', 'Aumento de suscetibilidade a infecções oportunistas intra-hospitalares'], es: ['Miopatía del enfermo crítico (si asociado a bloqueadores neuromusculares)', 'Delirium inducido por corticoide', 'Aumento de susceptibilidad a infecciones oportunistas intrahospitalarias'] },
      contraindications: {
        absolute: { pt: ['Nenhuma absoluta nos quadros agudos de risco de vida (choque/anafilaxia).'], es: ['Ninguna absoluta en los cuadros agudos de riesgo de vida (choque/anafilaxia).'] },
        relative: { pt: ['Infecções sistêmicas ativas sem cobertura antibiótica correspondente'], es: ['Infecciones sistémicas activas sin cobertura antibiótica correspondiente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Para anafilaxia, a Hidrocortisona age de forma EXTREMAMENTE LENTA nas vias moleculares (demora horas para o pico anti-inflamatório). Ela NÃO serve para resgatar o paciente sufocando no minuto zero (isso é papel da Adrenalina). A hidro previne a "recaída" da alergia 12 horas depois.', es: 'Para anafilaxia, la Hidrocortisona actúa de forma EXTREMADAMENTE LENTA en las vías moleculares (tarda horas para el pico antiinflamatorio). NO sirve para rescatar al paciente asfixiándose en el minuto cero (ese es papel de la Adrenalina). La hidro previene la "recaída" de la alergia 12 horas después.' }
      }
    }, // vírgula adicionada; BUILD 362 Lote 10 blocos seguem

/* ── METILPREDNISOLONA ──────────────────────────────────────────────── */
    "metilprednisolona": {
      name: { pt: 'Metilprednisolona', es: 'Metilprednisolona' },
      category: 'emergencia',
      class: { pt: 'Corticosteroide Sistêmico (Pulsoterapia)', es: 'Corticosteroide Sistémico (Pulsoterapia)' },
      indications: {
        pt: ['Pulsoterapia para doenças autoimunes graves (Lúpus com nefrite, Esclerose Múltipla)', 'Trauma Raquimedular agudo (uso controverso, mas ainda protocolo em alguns centros)', 'Asma severa e DPOC refratários'],
        es: ['Pulsoterapia para enfermedades autoinmunes graves (Lupus con nefritis, Esclerosis Múltiple)', 'Trauma Raquimedular agudo (uso controvertido, pero aún protocolo en algunos centros)', 'Asma severa y EPOC refractarios']
      },
      commercialNames: { br: ['Solu-Medrol'], ar: ['Solu-Medrol'] },
      presentation: { pt: ['Frasco-ampola IV liofilizado 40 mg, 125 mg, 500 mg, 1 g'], es: ['Vial IV liofilizado 40 mg, 125 mg, 500 mg, 1 g'] },
      mechanism: {
        pt: 'Potente glicocorticoide sintético. Possui ação anti-inflamatória e imunossupressora 5 vezes maior que o cortisol natural, com muito pouca retenção de sódio e água. Em doses maciças (Pulsoterapia), ele não apenas desliga a transcrição de genes inflamatórios, mas altera fisicamente a membrana das células imunes, "congelando" a destruição autoimune em horas.',
        es: 'Potente glucocorticoide sintético. Posee acción antiinflamatoria e inmunosupresora 5 veces mayor que el cortisol natural, con muy poca retención de sodio y agua. En dosis masivas (Pulsoterapia), no solo apaga la transcripción de genes inflamatorios, sino que altera físicamente la membrana de las células inmunes, "congelando" la destrucción autoinmune en horas.'
      },
      dose: {
        adult: {
          pt: 'Exacerbação Pulmonar: 40 a 60 mg IV a cada 6h ou 12h. Pulsoterapia Autoimune: 1 Grama (1.000 mg) IV 1x/dia por 3 a 5 dias.',
          es: 'Exacerbación Pulmonar: 40 a 60 mg IV cada 6h o 12h. Pulsoterapia Autoinmune: 1 Gramo (1.000 mg) IV 1 vez/día por 3 a 5 días.'
        },
        pediatric: {
          pt: 'Asma severa: 1 a 2 mg/kg/dia IV. Pulsoterapia: 30 mg/kg IV 1x/dia (Máx 1g).',
          es: 'Asma severa: 1 a 2 mg/kg/día IV. Pulsoterapia: 30 mg/kg IV 1 vez/día (Máx 1g).'
        }
      },
      administration: { pt: ['Pulsoterapia (Doses > 250mg) DEVE ser infundida LENTAMENTE em 1 a 2 horas. Bolus rápido causa arritmias fatais e colapso cardiovascular.'], es: ['Pulsoterapia (Dosis > 250mg) DEBE ser infundida LENTAMENTE en 1 a 2 horas. Bolo rápido causa arritmias fatales y colapso cardiovascular.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste clínico.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Euforia, Insônia e Agitação', 'Sabor metálico forte na boca durante a infusão', 'Hiperglicemia aguda'], es: ['Euforia, Insomnio y Agitación', 'Sabor metálico fuerte en la boca durante la infusión', 'Hiperglucemia aguda'] },
      dangerousAdverseEffects: { pt: ['Parada Cardíaca (se infusão rápida na pulsoterapia)', 'Infecções oportunistas fulminantes', 'Hemorragia digestiva'], es: ['Paro Cardíaco (si infusión rápida en la pulsoterapia)', 'Infecciones oportunistas fulminantes', 'Hemorragia digestiva'] },
      contraindications: {
        absolute: { pt: ['Infecção sistêmica ativa não tratada (exceto se a indicação for o próprio choque)'], es: ['Infección sistémica activa no tratada (excepto si la indicación es el propio choque)'] },
        relative: { pt: ['Diabetes descompensada severa', 'Glaucoma'], es: ['Diabetes descompensada severa', 'Glaucoma'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O DESMAME (TAPER): Diferente do uso por 5 dias que pode ser cortado subitamente, se o paciente usar a medicação em doses médias/altas por mais de 14 dias, o Eixo Suprarrenal atrofia. A droga deve ser reduzida gradativamente (desmame) ao longo de semanas, senão o paciente terá uma Crise Adrenal letal.', es: 'EL DESTETE (TAPER): A diferencia del uso por 5 días que puede cortarse súbitamente, si el paciente usa la medicación en dosis altas por más de 14 días, el Eje Suprarrenal se atrofia. La droga debe reducirse gradualmente a lo largo de semanas, de lo contrario tendrá Crisis Adrenal letal.' }
      }
    },

/* ── PROMETAZINA (FENERGAN) ─────────────────────────────────────────── */
    "prometazina": {
      name: { pt: 'Prometazina (Fenergan)', es: 'Prometazina' },
      category: 'emergencia',
      class: { pt: 'Anti-histamínico H1 / Fenotiazina (Antiemético e Sedativo)', es: 'Antihistamínico H1 / Fenotiazina (Antiemético y Sedante)' },
      indications: {
        pt: ['Reações alérgicas severas (como coadjuvante na anafilaxia)', 'Tratamento imediato de DISTONIA AGUDA (Reações extrapiramidais causadas por Plasil ou Haldol)', 'Vômitos e Enjoos de movimento (Cinose)'],
        es: ['Reacciones alérgicas severas (como coadyuvante en la anafilaxia)', 'Tratamiento inmediato de DISTONÍA AGUDA (Reacciones extrapiramidales causadas por Plasil o Haldol)', 'Vómitos y Mareos de movimiento']
      },
      commercialNames: { br: ['Fenergan'], ar: ['Fenergan'] },
      presentation: { pt: ['Ampolas IM (exclusivo) 25 mg/mL (2 mL = 50 mg)', 'Comprimidos 25 mg'], es: ['Ampollas IM (exclusivo) 25 mg/mL (2 mL = 50 mg)', 'Comprimidos 25 mg'] },
      mechanism: {
        pt: 'Bloqueia competitivamente os receptores de Histamina (H1), impedindo o inchaço, coceira e vasodilatação da alergia. Também cruza fortemente a barreira hematoencefálica com poderosa ação Anticolinérgica (que reequilibra a via do movimento travada pelos antipsicóticos, curando a distonia). Gera forte bloqueio dopaminérgico leve e sedação alfa-adrenérgica profunda.',
        es: 'Bloquea competitivamente los receptores de Histamina (H1), impidiendo hinchazón y picor de la alergia. También cruza fuertemente la barrera hematoencefálica con poderosa acción Anticolinérgica (que reequilibra la vía del movimiento trabada por los antipsicóticos, curando la distonía). Genera sedación profunda.'
      },
      dose: {
        adult: {
          pt: 'Alergia/Distonia: 25 a 50 mg INTRAMUSCULAR profundo. Dose oral: 25 mg a cada 8h ou 12h.',
          es: 'Alergia/Distonía: 25 a 50 mg INTRAMUSCULAR profundo. Dosis oral: 25 mg cada 8h o 12h.'
        },
        pediatric: {
          pt: 'Contraindicado em < 2 anos (risco de parada respiratória fatal). Acima de 2 anos: 0,1 mg/kg/dose IM.',
          es: 'Contraindicado en < 2 años (riesgo de paro respiratorio fatal). Por encima de 2 años: 0,1 mg/kg/dosis IM.'
        }
      },
      administration: { pt: ['A injeção é ESTRITAMENTE INTRAMUSCULAR (profunda no glúteo).', 'NUNCA administrar via Subcutânea ou Intra-Arterial (Gera gangrena imediata do membro e amputação). A via IV é fortemente desaconselhada pela FDA pelos danos teciduais severos.'], es: ['La inyección es ESTRICTAMENTE INTRAMUSCULAR (profunda en el glúteo).', 'NUNCA administrar vía Subcutánea o Intraarterial (Genera gangrena inmediata del miembro y amputación). La vía IV está fuertemente desaconsejada por la FDA.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático intenso, usar menores doses na cirrose grave.', es: 'Metabolismo hepático intenso, usar menores dosis en la cirrosis grave.' } },
      commonAdverseEffects: { pt: ['Sedação e Sonolência extremas (o paciente "capota" no PS)', 'Boca seca e visão borrada', 'Hipotensão'], es: ['Sedación y Somnolencia extremas (el paciente se desploma en Urgencias)', 'Boca seca y visión borrosa', 'Hipotensión'] },
      dangerousAdverseEffects: { pt: ['Necrose de tecidos por injeção intravascular errada', 'Depressão respiratória severa em crianças', 'Síndrome Neuroléptica Maligna'], es: ['Necrosis de tejidos por inyección intravascular errónea', 'Depresión respiratoria severa en niños', 'Síndrome Neuroléptico Maligno'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos de idade (Risco de apneia súbita infantil)', 'Injeção subcutânea'], es: ['Niños menores de 2 años de edad (Riesgo de apnea súbita infantil)', 'Inyección subcutánea'] },
        relative: { pt: ['Glaucoma de ângulo fechado', 'Retenção urinária severa (Hiperplasia Prostática)'], es: ['Glaucoma de ángulo cerrado', 'Retención urinaria severa (Hiperplasia Prostática)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'RESGATE ABSOLUTO: Se você prescrever Plasil (Metoclopramida) ou Haldol na veia, e o paciente repentinamente contorcer a mandíbula, virar os olhos para cima e não conseguir falar (Crise Oculógira / Distonia), injete Fenergan IM. A crise cede magicamente em 5 a 10 minutos.', es: 'RESCATE ABSOLUTO: Si prescribe Plasil o Haldol en la vena, y el paciente repentinamente contuerce la mandíbula, gira los ojos hacia arriba y no puede hablar (Crisis Oculógira / Distonía), inyecte Fenergan IM. La crisis cede mágicamente en 5 a 10 minutos.' }
      }
    }

  }); /* fim Object.assign EMERGENCIA_DRUGS_DB — BUILD 336 Lote 1+2+3+4+5+6+7 (ISR + BNMs + Reversores + Eletrólitos + Metabólico/Opioides + Toxicologia/Antídotos + Azul_Metileno/Carvão) + BUILD 346 Lote 8 (Vasopressores/Aminas Vasoativas) + BUILD 354 Lote 9 (Corticosteroides: Dexametasona/Hidrocortisona) + BUILD 362 Lote 10 (Metilprednisolona + Prometazina) */

})();
