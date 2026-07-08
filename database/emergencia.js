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
    }  // end etomidato

  }); /* fim Object.assign EMERGENCIA_DRUGS_DB — BUILD 316 Lote 1 (Anestésicos ISR) */

})();
