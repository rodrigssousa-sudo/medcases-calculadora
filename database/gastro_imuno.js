/* ============================================================
   MedCases Pro — Módulo: GASTRO-IMUNOLOGIA, UTI & CORTICOIDES
   Expõe: window.GASTRO_IMUNO_DRUGS_DB
   Schema: array [] — compatível com _injectArrayDB() do index.html
   BUILD 279 — Lote 3:
     Mesalazina (5-ASA)     — Anti-inflamatório intestinal (DII)
     Sufentanil             — Opioide ultra-potente UTI / anestesia
     Hidrocortisona         — Corticoide ação curta (choque séptico)
     Metilprednisolona      — Corticoide alta potência (pulsoterapia)
   ─────────────────────────────────────────────────────────────
   Categorias: gastro | uti | imuno_corticoide
============================================================ */

window.GASTRO_IMUNO_DRUGS_DB = [

  /* ══════════════════════════════════════════════════════════════
     1. MESALAZINA (5-ASA)
     Anti-inflamatório Intestinal — Retocolite Ulcerativa · Crohn leve
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'mesalazina',
    name: { pt: 'Mesalazina (5-ASA)', es: 'Mesalazina (5-ASA)' },
    category: 'gastro',
    class: { pt: 'Anti-inflamatório Intestinal (Aminossalicilato)', es: 'Antiinflamatorio Intestinal (Aminosalicilato)' },
    indications: {
      pt: ['Retocolite Ulcerativa (Indução e Manutenção — padrão ouro)', 'Doença de Crohn leve a moderada'],
      es: ['Colitis Ulcerosa (Inducción y Mantenimiento — estándar de oro)', 'Enfermedad de Crohn leve a moderada']
    },
    commercialNames: { br: ['Mesacol', 'Pentasa'], ar: ['Pentasa', 'Salofalk'] },
    presentation: {
      pt: ['Comprimidos revestidos 400 mg', 'Comprimidos revestidos 800 mg', 'Supositórios 500 mg', 'Supositórios 1 g', 'Enema 3 g/100 mL'],
      es: ['Comprimidos recubiertos 400 mg', 'Comprimidos recubiertos 800 mg', 'Supositorios 500 mg', 'Supositorios 1 g', 'Enema 3 g/100 mL']
    },
    mechanism: {
      pt: 'A mesalazina é o Ácido 5-Aminossalicílico (5-ASA) puro. Possui ação tópica direta na mucosa intestinal inflamada. Inibe a ciclooxigenase (COX) e a lipoxigenase, reduzindo a produção de prostaglandinas e leucotrienos no cólon. Também atua como sequestrador de radicais livres e inibe a ativação do NF-kB, diminuindo a cascata inflamatória sem forte imunossupressão sistêmica.',
      es: 'La mesalazina es el Ácido 5-Aminosalicílico (5-ASA) puro. Posee acción tópica directa en la mucosa intestinal inflamada. Inhibe la ciclooxigenasa (COX) y la lipoxigenasa, reduciendo la producción de prostaglandinas y leucotrienos en el colon. También actúa como secuestrador de radicales libres e inhibe la activación del NF-kB, disminuyendo la cascada inflamatoria sin fuerte inmunosupresión sistémica.'
    },
    dose: {
      adult: {
        pt: 'Ataque/Indução: 2,4 g a 4,8 g/dia VO (divididos). Manutenção: 1,2 a 2,4 g/dia VO. Retal (Proctite): 1 supositório 1 g/dia ou 1 enema/dia.',
        es: 'Ataque/Inducción: 2,4 g a 4,8 g/día VO (divididos). Mantenimiento: 1,2 a 2,4 g/día VO. Rectal (Proctitis): 1 supositorio 1 g/día o 1 enema/día.'
      },
      pediatric: {
        pt: 'Retocolite Ulcerativa: 30 a 50 mg/kg/dia VO (manutenção).',
        es: 'Colitis Ulcerosa: 30 a 50 mg/kg/día VO (mantenimiento).'
      }
    },
    administration: {
      pt: ['Comprimidos não devem ser mastigados ou partidos (possuem revestimento sensível ao pH para liberar a droga apenas no íleo terminal/cólon).'],
      es: ['Los comprimidos no deben ser masticados o partidos (poseen recubrimiento sensible al pH para liberar la droga solo en el íleon terminal/colon).']
    },
    renalAdjustment: { required: true, message: { pt: 'Evitar em disfunção renal grave. Risco idiossincrático de nefrite intersticial aguda.', es: 'Evitar en disfunción renal grave. Riesgo idiosincrásico de nefritis intersticial aguda.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Usar com cautela em hepatopatas graves.', es: 'Usar con precaución en hepatópatas graves.' } },
    commonAdverseEffects: {
      pt: ['Cefaleia (muito comum)', 'Diarreia e dor abdominal (paradoxal no início)', 'Erupção cutânea'],
      es: ['Cefalea (muy común)', 'Diarrea y dolor abdominal (paradójico al inicio)', 'Erupción cutánea']
    },
    dangerousAdverseEffects: {
      pt: ['Nefrite intersticial aguda (podendo levar a DRC terminal)', 'Pancreatite aguda (rara mas clássica)', 'Síndrome de intolerância aguda à mesalazina (simula piora da retocolite)'],
      es: ['Nefritis intersticial aguda (pudiendo llevar a ERC terminal)', 'Pancreatitis aguda (rara pero clásica)', 'Síndrome de intolerancia aguda a la mesalazina (simula empeoramiento de la colitis ulcerosa)']
    },
    contraindications: {
      absolute: { pt: ['Hipersensibilidade a SALICILATOS (AAS / Aspirina)'], es: ['Hipersensibilidad a SALICILATOS (AAS / Aspirina)'] },
      relative: { pt: ['Disfunção renal prévia não investigada'], es: ['Disfunción renal previa no investigada'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
      warning: { pt: 'Monitoramento da função renal (creatinina e EAS) é OBRIGATÓRIO antes do início e periodicamente durante o tratamento, devido ao risco silencioso de Nefrite Intersticial.', es: 'La monitorización de la función renal (creatinina y sedimento urinario) es OBLIGATORIA antes del inicio y periódicamente durante el tratamiento, debido al riesgo silencioso de Nefritis Intersticial.' }
    },
    ref: 'Ruemmele FM et al. J Crohns Colitis 2014 · Feagan BG & MacDonald JK. Cochrane 2012 · IBD Standards Group UK 2022 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     2. SUFENTANIL
     Opioide Sintético Ultra-Potente — Sedoanalgesia UTI · Anestesia
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'sufentanil',
    name: { pt: 'Sufentanil', es: 'Sufentanilo' },
    category: 'uti',
    class: { pt: 'Analgésico Opioide Sintético Fortíssimo', es: 'Analgésico Opioide Sintético Fortísimo' },
    indications: {
      pt: ['Sedação e analgesia prolongada em UTI', 'Anestesia geral (indução e manutenção)', 'Analgesia peridural/espinhal em obstetrícia'],
      es: ['Sedación y analgesia prolongada en UCI', 'Anestesia general (inducción y mantenimiento)', 'Analgesia epidural/espinal en obstetricia']
    },
    commercialNames: { br: ['Fastfen', 'Sufenta'], ar: ['Sufentanilo'] },
    presentation: { pt: ['Ampolas IV/Epidural 50 mcg/mL (1 mL)', 'Ampolas IV/Epidural 50 mcg/mL (5 mL)'], es: ['Ampollas IV/Epidural 50 mcg/mL (1 mL)', 'Ampollas IV/Epidural 50 mcg/mL (5 mL)'] },
    mechanism: {
      pt: 'Agonista ultra-potente e altamente seletivo dos receptores opioides mu (μ) no SNC. É de 5 a 10 vezes MAIS POTENTE que o fentanil, e 500 a 1000 vezes mais potente que a morfina. Oferece profunda analgesia, estabilidade hemodinâmica (não libera histamina) e depressão respiratória acentuada. Por ser extremamente lipofílico, acumula-se no tecido adiposo em infusões longas de UTI.',
      es: 'Agonista ultra potente y altamente selectivo de los receptores opioides mu (μ) en el SNC. Es de 5 a 10 veces MÁS POTENTE que el fentanilo, y 500 a 1000 veces más potente que la morfina. Ofrece profunda analgesia, estabilidad hemodinámica (no libera histamina) y depresión respiratoria acentuada. Al ser extremadamente lipofílico, se acumula en el tejido adiposo en infusiones largas de UCI.'
    },
    dose: {
      adult: {
        pt: 'Analgesia/Sedação UTI: Infusão contínua de 0,1 a 0,5 mcg/kg/hora. Anestesia: 1 a 8 mcg/kg IV (dependendo da duração e suporte ventilatório).',
        es: 'Analgesia/Sedación UCI: Infusión continua de 0,1 a 0,5 mcg/kg/hora. Anestesia: 1 a 8 mcg/kg IV (dependiendo de la duración y soporte ventilatorio).'
      },
      pediatric: {
        pt: 'Anestesia: 10 a 25 mcg/kg (casos selecionados e monitorizados).',
        es: 'Anestesia: 10 a 25 mcg/kg (casos seleccionados y monitorizados).'
      }
    },
    administration: {
      pt: ['Exige suporte ventilatório mecânico pronto ou em andamento.', 'Doses em bolus muito rápidas causam rigidez torácica (tórax de madeira).'],
      es: ['Exige soporte ventilatorio mecánico listo o en curso.', 'Dosis en bolo muy rápidas causan rigidez torácica (tórax de madera).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem metabólitos ativos significativos. Seguro na falência renal.', es: 'Sin metabolitos activos significativos. Seguro en falla renal.' } },
    hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizado pelo fígado. Reduzir dose e titular lentamente na cirrose.', es: 'Extensamente metabolizado por el hígado. Reducir dosis y titular lentamente en cirrosis.' } },
    commonAdverseEffects: {
      pt: ['Hipotensão leve', 'Bradicardia vagal', 'Náuseas e vômitos no despertar', 'Retenção urinária'],
      es: ['Hipotensión leve', 'Bradicardia vagal', 'Náuseas y vómitos al despertar', 'Retención urinaria']
    },
    dangerousAdverseEffects: {
      pt: ['Depressão respiratória fatal (apneia severa e prolongada)', 'Rigidez muscular torácica severa (impede a ventilação)'],
      es: ['Depresión respiratoria fatal (apnea severa y prolongada)', 'Rigidez muscular torácica severa (impide la ventilación)']
    },
    contraindications: {
      absolute: { pt: ['Ausência de suporte ventilatório avançado', 'Hipersensibilidade aos análogos do fentanil'], es: ['Ausencia de soporte ventilatorio avanzado', 'Hipersensibilidad a los análogos del fentanilo'] },
      relative: { pt: ['Hipertensão intracraniana não controlada (se a hipoventilação elevar o CO2)'], es: ['Hipertensión intracraneal no controlada (si la hipoventilación eleva el CO2)'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
      warning: { pt: 'MEDICAMENTO DE ALTO ALERTA: Potência extrema. O antídoto é a Naloxona. O "context-sensitive half-time" (tempo para acordar após desligar a bomba) aumenta exponencialmente após infusões de UTI maiores que 24-48 horas devido ao acúmulo na gordura.', es: 'MEDICAMENTO DE ALTA ALERTA: Potencia extrema. El antídoto es la Naloxona. El "context-sensitive half-time" (tiempo para despertar tras apagar la bomba) aumenta exponencialmente tras infusiones de UCI mayores a 24-48 horas debido a la acumulación en la grasa.' }
    },
    ref: 'Devlin JW et al. (PADIS Guidelines) Crit Care Med 2018 · Patel SB & Kress JP. Crit Care Med 2012 · Sneyd JR. Br J Anaesth 2004 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     3. HIDROCORTISONA
     Corticoide Ação Curta — Choque Séptico · Crise Adrenal · Anafilaxia
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'hidrocortisona',
    name: { pt: 'Hidrocortisona', es: 'Hidrocortisona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Curta / Glicocorticoide e Mineralocorticoide)', es: 'Corticosteroide Sistémico (Acción Corta / Glucocorticoide y Mineralocorticoide)' },
    indications: {
      pt: ['Choque séptico refratário a vasopressores', 'Insuficiência Adrenal Aguda (Crise Addisoniana)', 'Anafilaxia severa e Estado de Mal Asmático'],
      es: ['Choque séptico refractario a vasopresores', 'Insuficiencia Adrenal Aguda (Crisis Addisoniana)', 'Anafilaxia severa y Estado de Mal Asmático']
    },
    commercialNames: { br: ['Solu-Cortef', 'Flebocortid'], ar: ['Solu-Cortef'] },
    presentation: { pt: ['Frasco-ampola liofilizado 100 mg', 'Frasco-ampola liofilizado 500 mg'], es: ['Vial liofilizado 100 mg', 'Vial liofilizado 500 mg'] },
    mechanism: {
      pt: 'Idêntico ao cortisol humano endógeno. Possui atividade anti-inflamatória/glicocorticoide (1x) E forte atividade retentora de sódio/mineralocorticoide (1x). No choque séptico, repõe a insuficiência corticosteroide relativa (CIRCI), restaurando a sensibilidade dos receptores adrenérgicos (alfa-1) às catecolaminas (noradrenalina), revertendo a vasoplegia refratária.',
      es: 'Idéntico al cortisol humano endógeno. Posee actividad antiinflamatoria/glucocorticoide (1x) Y fuerte actividad retenedora de sodio/mineralocorticoide (1x). En el choque séptico, repone la insuficiencia corticosteroide relativa (CIRCI), restaurando la sensibilidad de los receptores adrenérgicos (alfa-1) a las catecolaminas (noradrenalina), revirtiendo la vasoplejía refractaria.'
    },
    dose: {
      adult: {
        pt: 'Choque Séptico: 200 mg/dia IV (podendo ser 50 mg a cada 6h, ou infusão contínua). Crise Adrenal: 100 mg IV em bolus, seguido de 50 mg 6/6h. Asma aguda: 100 a 500 mg IV.',
        es: 'Choque Séptico: 200 mg/día IV (pudiendo ser 50 mg cada 6h, o infusión continua). Crisis Adrenal: 100 mg IV en bolo, seguido de 50 mg cada 6h. Asma aguda: 100 a 500 mg IV.'
      },
      pediatric: {
        pt: 'Crise Asmática/Anafilaxia: 2 a 4 mg/kg IV a cada 6h.',
        es: 'Crisis Asmática/Anafilaxia: 2 a 4 mg/kg IV cada 6h.'
      }
    },
    administration: {
      pt: ['IV direto (bolus lento em 1 a 3 min) ou infusão contínua (estabiliza melhor a glicemia na UTI).'],
      es: ['IV directo (bolo lento en 1 a 3 min) o infusión continua (estabiliza mejor la glucemia en la UCI).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na DRC.', es: 'Sin necesidad de ajuste en ERC.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste, mas cirróticos podem ter metabolismo mais lento (aumento do efeito).', es: 'Sin ajuste, pero cirróticos pueden tener metabolismo más lento (aumento del efecto).' } },
    commonAdverseEffects: {
      pt: ['Hiperglicemia aguda (muito comum em UTI)', 'Hipernatremia e Hipocalemia (retenção de Na+ e perda de K+)', 'Insônia / Agitação'],
      es: ['Hiperglucemia aguda (muy común en UCI)', 'Hipernatremia e Hipopotasemia (retención de Na+ y pérdida de K+)', 'Insomnio / Agitación']
    },
    dangerousAdverseEffects: {
      pt: ['Infecções oportunistas / Sepse secundária', 'Hemorragia digestiva / Úlceras (se associado a AINEs/Isquemia)', 'Miopatia do doente crítico', 'Delirium / Psicose esteroide'],
      es: ['Infecciones oportunistas / Sepsis secundaria', 'Hemorragia digestiva / Úlceras (si asociado a AINEs/Isquemia)', 'Miopatía del paciente crítico', 'Delirium / Psicosis esteroidea']
    },
    contraindications: {
      absolute: { pt: ['Infecção fúngica sistêmica ativa não tratada', 'Na EMERGÊNCIA (Choque/Anafilaxia) não há contraindicações absolutas.'], es: ['Infección fúngica sistémica activa no tratada', 'En la EMERGENCIA (Choque/Anafilaxia) no hay contraindicaciones absolutas.'] },
      relative: { pt: ['Diabetes Mellitus descompensada', 'Úlcera péptica ativa'], es: ['Diabetes Mellitus descompensada', 'Úlcera péptica activa'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'DESMAME: O uso além de 5 a 7 dias causa supressão do eixo HPA. Deve ser desmamado gradualmente. O controle rigoroso da Glicemia capilar na UTI é mandatório.', es: 'DESTETE: El uso más allá de 5 a 7 días causa supresión del eje HPA. Debe ser destetado gradualmente. El control riguroso de la Glucemia capilar en la UCI es obligatorio.' }
    },
    ref: 'Venkatesh B et al. (ADRENAL) N Engl J Med 2018 · Annane D et al. (APROCCHSS) N Engl J Med 2018 · Surviving Sepsis Campaign 2021 · Lexicomp 2026'
  },

  /* ══════════════════════════════════════════════════════════════
     4. METILPREDNISOLONA
     Corticoide Alta Potência — Pulsoterapia autoimune · Transplante
  ══════════════════════════════════════════════════════════════ */
  {
    id: 'metilprednisolona',
    name: { pt: 'Metilprednisolona', es: 'Metilprednisolona' },
    category: 'imuno_corticoide',
    class: { pt: 'Corticosteroide Sistêmico (Ação Intermediária / Glicocorticoide de Alta Potência)', es: 'Corticosteroide Sistémico (Acción Intermedia / Glucocorticoide de Alta Potencia)' },
    indications: {
      pt: ['PULSOTERAPIA em exacerbações autoimunes graves (Lúpus, Esclerose Múltipla, Púrpura)', 'Rejeição aguda de órgãos transplantados', 'Trauma Raquimedular Agudo (protocolos específicos)'],
      es: ['PULSOTERAPIA en exacerbaciones autoinmunes graves (Lupus, Esclerosis Múltiple, Púrpura)', 'Rechazo agudo de órganos trasplantados', 'Trauma Raquimedular Agudo (protocolos específicos)']
    },
    commercialNames: { br: ['Solu-Medrol'], ar: ['Solu-Medrol', 'Corticet'] },
    presentation: {
      pt: ['Frasco-ampola liofilizado 40 mg', 'Frasco-ampola liofilizado 125 mg', 'Frasco-ampola liofilizado 500 mg', 'Frasco-ampola liofilizado 1 g'],
      es: ['Vial liofilizado 40 mg', 'Vial liofilizado 125 mg', 'Vial liofilizado 500 mg', 'Vial liofilizado 1 g']
    },
    mechanism: {
      pt: 'Glicocorticoide sintético de potência intermediária-alta. Possui efeito anti-inflamatório 5 vezes mais potente que a hidrocortisona e tem baixíssima atividade mineralocorticoide (não retém tanto sódio). Em altíssimas doses (Pulsoterapia), causa apoptose direta de linfócitos e paralisia imunológica quase imediata, estabilizando membranas celulares e lisossomais.',
      es: 'Glucocorticoide sintético de potencia intermedia-alta. Posee efecto antiinflamatorio 5 veces más potente que la hidrocortisona y tiene bajísima actividad mineralocorticoide (no retiene tanto sodio). En altísimas dosis (Pulsoterapia), causa apoptosis directa de linfocitos y parálisis inmunológica casi inmediata, estabilizando membranas celulares y lisosomales.'
    },
    dose: {
      adult: {
        pt: 'Pulsoterapia: 500 a 1000 mg/dia IV por 3 a 5 dias. Manutenção/Asma Grave: 1 a 2 mg/kg/dia IV divididos.',
        es: 'Pulsoterapia: 500 a 1000 mg/día IV por 3 a 5 días. Mantenimiento/Asma Grave: 1 a 2 mg/kg/día IV divididos.'
      },
      pediatric: {
        pt: 'Pulsoterapia: 30 mg/kg/dia IV (máx 1 g) por 3 dias.',
        es: 'Pulsoterapia: 30 mg/kg/día IV (máx 1 g) por 3 días.'
      }
    },
    administration: {
      pt: ['Pulsoterapia (> 500 mg) DEVE ser infundida em, no mínimo, 60 a 120 minutos (Risco de Arritmia Cardíaca fatal se injetado em bolus rápido).'],
      es: ['Pulsoterapia (> 500 mg) DEBE ser infundida en, al menos, 60 a 120 minutos (Riesgo de Arritmia Cardíaca fatal si se inyecta en bolo rápido).']
    },
    renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
    hepaticAdjustment: { required: false, message: { pt: 'Monitorar toxicidade em cirróticos, metabolismo hepático presente.', es: 'Monitorizar toxicidad en cirróticos, metabolismo hepático presente.' } },
    commonAdverseEffects: {
      pt: ['Gosto metálico agudo na infusão', 'Insônia e Agitação extremas', 'Flushing facial e calores', 'Hiperglicemia'],
      es: ['Sabor metálico agudo en la infusión', 'Insomnio y Agitación extremas', 'Flushing facial y calores', 'Hiperglucemia']
    },
    dangerousAdverseEffects: {
      pt: ['Arritmia ventricular e morte súbita (se infusão muito rápida)', 'Psicose induzida por esteroides / Ideação suicida', 'Infecções generalizadas (Sepse fulminante)', 'Necrose avascular da cabeça do fêmur'],
      es: ['Arritmia ventricular y muerte súbita (si infusión muy rápida)', 'Psicosis inducida por esteroides / Ideación suicida', 'Infecciones generalizadas (Sepsis fulminante)', 'Necrosis avascular de la cabeza del fémur']
    },
    contraindications: {
      absolute: { pt: ['Infecção sistêmica descontrolada (exceto se uso para choque sob antibióticos)', 'Herpes simples ocular ativo'], es: ['Infección sistémica descontrolada (excepto si uso para choque bajo antibióticos)', 'Herpes simple ocular activo'] },
      relative: { pt: ['HAS descontrolada', 'Diabetes grave', 'Transtorno Bipolar ou Psicose prévia'], es: ['HTA descontrolada', 'Diabetes grave', 'Trastorno Bipolar o Psicosis previa'] }
    },
    safetyFlags: {
      bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
      warning: { pt: 'Monitorização contínua na Pulsoterapia: PA, HGT e ECG são recomendados. A imunossupressão pós-pulso é brutal; orientar isolamento profilático do paciente.', es: 'Monitorización continua en Pulsoterapia: PA, HGT y ECG son recomendados. La inmunosupresión pos-pulso es brutal; orientar aislamiento profiláctico del paciente.' }
    },
    ref: 'Prentice AG. BMJ 1994 · Contreras G et al. N Engl J Med 2004 · Elovaara I et al. Acta Neurol Scand 1998 · Lexicomp 2026'
  }

]; /* fim window.GASTRO_IMUNO_DRUGS_DB */
