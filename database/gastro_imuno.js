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
  /* ══════════════════════════════════════════════════════════════
     4. METILPREDNISOLONA
     Corticoide Alta Potência — Pulsoterapia autoimune · Transplante
  ══════════════════════════════════════════════════════════════ */
]; /* fim window.GASTRO_IMUNO_DRUGS_DB */
