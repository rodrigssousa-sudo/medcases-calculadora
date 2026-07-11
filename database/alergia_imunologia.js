/* ============================================================
   MedCases Pro — Módulo: ALERGIA / IMUNOLOGIA
   Expõe: window.ALERGIA_IMUNOLOGIA_DRUGS_DB

   BUILD 394 — Lote 1 (Anti-histamínicos H1 de 2ª e 3ª Geração)
   Desloratadina, Cetirizina, Levocetirizina, Fexofenadina, Ebastina
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.ALERGIA_IMUNOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.ALERGIA_IMUNOLOGIA_DRUGS_DB)) {
    window.ALERGIA_IMUNOLOGIA_DRUGS_DB = {};
  }

  Object.assign(window.ALERGIA_IMUNOLOGIA_DRUGS_DB, {

/* ── DESLORATADINA ──────────────────────────────────────────────────── */
    "desloratadina": {
      name: { pt: 'Desloratadina', es: 'Desloratadina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª/3ª Geração (Não Sedativo)', es: 'Antihistamínico H1 de 2ª/3ª Generación (No Sedante)' },
      indications: {
        pt: ['Rinite alérgica (sazonal e perene) para alívio de espirros, coriza e prurido', 'Urticária crônica idiopática'],
        es: ['Rinitis alérgica (estacional y perenne) para alivio de estornudos, coriza y prurito', 'Urticaria crónica idiopática']
      },
      commercialNames: { br: ['Desalex', 'Esalerg'], ar: ['Aerius'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg', 'Xarope 0,5 mg/mL'], es: ['Comprimidos recubiertos 5 mg', 'Jarabe 0,5 mg/mL'] },
      mechanism: {
        pt: 'É o metabólito ativo direto da Loratadina. Tem afinidade de 10 a 20 vezes maior pelos receptores H1 periféricos do que a loratadina original. Ao já ser ativada na pílula, ela não depende do fígado do paciente para funcionar. Tem meia-vida ultra-longa (27 horas) e incapacidade quase total de penetrar o cérebro, garantindo vigília absoluta.',
        es: 'Es el metabolito activo directo de la Loratadina. Tiene una afinidad 10 a 20 veces mayor por los receptores H1 periféricos. Al ya estar activada en la píldora, no depende del hígado del paciente para funcionar. Tiene vida media ultra larga (27 horas) e incapacidad casi total de penetrar al cerebro.'
      },
      dose: {
        adult: {
          pt: '5 mg via oral UMA VEZ ao dia.',
          es: '5 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Crianças de 6 a 11 anos: 2,5 mg (5 mL) 1x ao dia. 1 a 5 anos: 1,25 mg (2,5 mL) 1x ao dia.',
          es: 'Niños de 6 a 11 años: 2,5 mg (5 mL) 1x al día. 1 a 5 años: 1,25 mg (2,5 mL) 1x al día.'
        }
      },
      administration: { pt: ['Pode ser tomado junto ou separado das refeições (A comida não atrasa seu efeito).'], es: ['Puede ser tomado junto o separado de las comidas (La comida no retrasa su efecto).'] },
      renalAdjustment: { required: true, message: { pt: 'Em insuficiência renal grave, reduzir a dosagem para 5 mg em DIAS ALTERNADOS (Dose dia sim, dia não).', es: 'En insuficiencia renal grave, reducir la dosis a 5 mg en DÍAS ALTERNOS (Dosis día sí, día no).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Mesmo ajuste do renal crônico: usar em dias alternados na cirrose.', es: 'Mismo ajuste que en renal crónico: usar en días alternos en cirrosis.' } },
      commonAdverseEffects: { pt: ['Faringite', 'Boca seca (Xerostomia leve)', 'Fadiga mialgica leve'], es: ['Faringitis', 'Boca seca (Xerostomía leve)', 'Fatiga miálgica leve'] },
      dangerousAdverseEffects: { pt: ['Hipersensibilidade medicamentosa (Rara)'], es: ['Hipersensibilidad medicamentosa (Rara)'] },
      contraindications: {
        absolute: { pt: ['Alergia conhecida à Desloratadina ou Loratadina'], es: ['Alergia conocida a Desloratadina o Loratadina'] },
        relative: { pt: ['Crianças com histórico de convulsões febris (monitorar)'], es: ['Niños con historial de convulsiones febriles (monitorizar)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DIFERENCIAL CLÍNICO: A Desloratadina também provou inibir a liberação de IL-4 e IL-13 por mastócitos in vitro. Ela não apenas bloqueia a histamina já solta, mas ajuda a "acalmar" o mastócito, sendo excelente na Urticária Gigante refratária.', es: 'DIFERENCIAL CLÍNICO: La Desloratadina también probó inhibir la liberación de IL-4 e IL-13 por mastocitos. No solo bloquea la histamina, sino que "calma" al mastocito, siendo excelente en Urticaria Gigante.' }
      }
    },

/* ── CETIRIZINA ─────────────────────────────────────────────────────── */
    "cetirizina": {
      name: { pt: 'Cetirizina', es: 'Cetirizina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração (Levemente Sedativo)', es: 'Antihistamínico H1 de 2ª Generación (Levemente Sedante)' },
      indications: {
        pt: ['Rinite Alérgica aguda e crônica', 'Conjuntivite alérgica', 'Dermatites alérgicas com prurido intenso'],
        es: ['Rinitis Alérgica aguda y crónica', 'Conjuntivitis alérgica', 'Dermatitis alérgicas con prurito intenso']
      },
      commercialNames: { br: ['Zyrtec', 'Cetirizina'], ar: ['Zyrtec', 'Alergical'] },
      presentation: { pt: ['Comprimidos 10 mg', 'Solução Oral 1 mg/mL', 'Gotas'], es: ['Comprimidos 10 mg', 'Solución Oral 1 mg/mL', 'Gotas'] },
      mechanism: {
        pt: 'Metabólito da Hidroxizina. Bloqueador fortíssimo de H1. A Cetirizina tem uma peculiaridade entre as drogas de 2ª geração: a sua molécula cruza a barreira hematoencefálica UM POUCO MAIS do que a Loratadina ou Fexofenadina. Por isso, tem início de ação avassalador (muito rápido contra coceiras), mas pode dar mais sono do que os seus concorrentes modernos.',
        es: 'Metabolito de la Hidroxizina. Bloqueador fortísimo de H1. La Cetirizina tiene una peculiaridad entre las de 2ª generación: cruza la barrera hematoencefálica UN POCO MÁS que la Loratadina. Por eso, tiene inicio de acción avasallador contra el picor, pero puede dar más sueño.'
      },
      dose: {
        adult: {
          pt: '10 mg via oral UMA VEZ ao dia.',
          es: '10 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: '2 a 5 anos: 2,5 mg (1/2 colher) 1x ao dia (podendo dividir para 2x). 6 a 12 anos: 5 a 10 mg 1x ao dia.',
          es: '2 a 5 años: 2,5 mg (1/2 cuchara) 1x al día (pudiendo dividir en 2x). 6 a 12 años: 5 a 10 mg 1x al día.'
        }
      },
      administration: { pt: ['Se causar sonolência no paciente, alterar o horário de tomada obrigatoriamente para a noite, antes de dormir.'], es: ['Si causa somnolencia en el paciente, alterar el horario de toma obligatoriamente a la noche, antes de dormir.'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente excretado na urina (70%). ClCr 30-49: Cortar dose pela metade (5 mg/dia). ClCr < 30: 5 mg a cada 48h.', es: 'Altamente excretado en orina (70%). ClCr 30-49: Cortar dosis a la mitad (5 mg/día). ClCr < 30: 5 mg cada 48h.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir para 5 mg/dia em falência hepática.', es: 'Reducir a 5 mg/día en falla hepática.' } },
      commonAdverseEffects: { pt: ['Sonolência (Afeta até 14% dos usuários, muito mais que a Loratadina)', 'Cefaleia', 'Secura na boca e nariz'], es: ['Somnolencia (Afecta hasta 14% de los usuarios, mucho más que la Loratadina)', 'Cefalea', 'Sequedad en boca y nariz'] },
      dangerousAdverseEffects: { pt: ['Ideação suicida raríssima (em farmacovigilância pediátrica)', 'Convulsão em sobredosagem maciça'], es: ['Ideación suicida rarísima (en farmacovigilancia pediátrica)', 'Convulsión en sobredosis masiva'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada à hidroxizina (alergia cruzada)'], es: ['Hipersensibilidad documentada a la hidroxizina (alergia cruzada)'] },
        relative: { pt: ['Pilotos de avião e motoristas de carga pesada (Até se testar a suscetibilidade ao sono do paciente)'], es: ['Pilotos de avión y conductores de carga pesada (Hasta testear la susceptibilidad al sueño del paciente)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A REGRA DO ANTIALÉRGICO DE BEBÊS: A Cetirizina e a Desloratadina são as únicas drogas de 2ª geração amplamente liberadas a partir de 6 MESES de idade nos EUA (FDA). Muito seguras para os lactentes não-sedados.', es: 'LA REGLA DEL ANTIALÉRGICO DE BEBÉS: La Cetirizina y Desloratadina son de las únicas liberadas a partir de 6 MESES de edad en EE.UU. (FDA). Muy seguras para lactantes.' }
      }
    },

/* ── LEVOCETIRIZINA ─────────────────────────────────────────────────── */
    "levocetirizina": {
      name: { pt: 'Levocetirizina', es: 'Levocetirizina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 3ª Geração', es: 'Antihistamínico H1 de 3ª Generación' },
      indications: {
        pt: ['Sintomas intensos de Rinite Alérgica', 'Urticária crônica idiopática', 'Coceira (prurido) de difícil controle'],
        es: ['Síntomas intensos de Rinitis Alérgica', 'Urticaria crónica idiopática', 'Picor (prurito) de difícil control']
      },
      commercialNames: { br: ['Zyxem'], ar: ['Xuzal'] },
      presentation: { pt: ['Comprimidos revestidos 5 mg', 'Gotas Orais 5 mg/mL'], es: ['Comprimidos recubiertos 5 mg', 'Gotas Orales 5 mg/mL'] },
      mechanism: {
        pt: 'É o enantiômero-R (a "metade" mais pura e forte) da Cetirizina. Ao retirar a parte fraca da molécula, a Levocetirizina consegue se ligar com O DOBRO DE FORÇA aos receptores de histamina em comparação com a cetirizina comum. Garante o mesmo bloqueio antialérgico potente com metade da dose (5mg em vez de 10mg) e reduz o risco de sonolência cruzada cerebral.',
        es: 'Es el enantiómero-R (la "mitad" más pura y fuerte) de la Cetirizina. Al retirar la parte débil, logra unirse con EL DOBLE DE FUERZA a los receptores de histamina. Garantiza el mismo bloqueo potente con la mitad de la dosis (5mg en vez de 10mg) y reduce el riesgo de somnolencia cruzada.'
      },
      dose: {
        adult: {
          pt: '5 mg via oral UMA VEZ ao dia (geralmente à noite).',
          es: '5 mg vía oral UNA VEZ al día (generalmente a la noche).'
        },
        pediatric: {
          pt: 'Crianças de 6 a 12 anos: 5 mg 1x ao dia. Crianças de 2 a 5 anos: 1,25 mg (2,5 gotas) a cada 12 horas.',
          es: 'Niños de 6 a 12 años: 5 mg 1x al día. Niños de 2 a 5 años: 1,25 mg (2,5 gotas) cada 12 horas.'
        }
      },
      administration: { pt: ['Administração via oral com líquidos. Como mantém leve potencial sedativo (cerca de 5% a 6%), o uso noturno é ouro.'], es: ['Administración vía oral con líquidos. Como mantiene leve potencial sedante, el uso nocturno es oro.'] },
      renalAdjustment: { required: true, message: { pt: 'Depuração renal total. ClCr 30-49: 5 mg a cada 48 horas. ClCr 10-29: 5 mg a cada 72 horas. ClCr < 10 (Diálise): Contraindicado.', es: 'Depuración renal total. ClCr 30-49: 5 mg cada 48 horas. ClCr 10-29: 5 mg cada 72 horas. ClCr < 10: Contraindicado.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste (não passa por metabolismo hepático agressivo).', es: 'No requiere ajuste (no pasa por metabolismo hepático agresivo).' } },
      commonAdverseEffects: { pt: ['Sonolência (Leve a moderada, dose-dependente)', 'Boca seca', 'Astenia (Fraqueza)'], es: ['Somnolencia (Leve a moderada, dosis dependiente)', 'Boca seca', 'Astenia (Debilidad)'] },
      dangerousAdverseEffects: { pt: ['Retenção urinária aguda (raro, relatado em superdosagem)'], es: ['Retención urinaria aguda (raro, relatado en sobredosis)'] },
      contraindications: {
        absolute: { pt: ['Pacientes em Estágio Terminal de Falência Renal (Diálise)'], es: ['Pacientes en Etapa Terminal de Falla Renal (Diálisis)'] },
        relative: { pt: ['Associação com depressores severos do SNC'], es: ['Asociación con depresores severos del SNC'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'SUPER POTÊNCIA NA PELE: Estudos mostram que a inibição da pápula de urticária na pele com Levocetirizina 5mg dura até 24 horas, bloqueando a inflamação de forma mais sustentada que a Fexofenadina na alergia dermatológica crônica.', es: 'SÚPER POTENCIA EN LA PIEL: Estudios muestran que la inhibición de la pápula de urticaria con Levocetirizina dura hasta 24 horas, bloqueando la inflamación de forma más sostenida que la Fexofenadina en alergia dermatológica.' }
      }
    },

/* ── FEXOFENADINA ───────────────────────────────────────────────────── */
    "fexofenadina": {
      name: { pt: 'Fexofenadina', es: 'Fexofenadina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração (Totalmente Não Sedativo)', es: 'Antihistamínico H1 de 2ª Generación (Totalmente No Sedante)' },
      indications: {
        pt: ['Rinite Alérgica aguda com espirros e entupimento severo', 'Urticária idiopática e alergias severas com inchaço'],
        es: ['Rinitis Alérgica aguda con estornudos y taponamiento severo', 'Urticaria idiopática y alergias severas con hinchazón']
      },
      commercialNames: { br: ['Allegra'], ar: ['Allegra', 'Telfast'] },
      presentation: { pt: ['Comprimidos 120 mg e 180 mg', 'Suspensão Pediátrica 6 mg/mL'], es: ['Comprimidos 120 mg y 180 mg', 'Suspensión Pediátrica 6 mg/mL'] },
      mechanism: {
        pt: 'É a versão corrigida da "Terfenadina" (remédio antigo que matava por parada cardíaca). A Fexofenadina é o metabólito seguro que corta 100% da ligação H1 pulmonar e cutânea e, provadamente através de Tomografias (PET Scan) cerebrais, TEM PENETRAÇÃO ZERO NO CÉREBRO. Entre todos os antialérgicos orais, é o que menos causa sonolência (níveis de sono iguais ao do placebo de farinha em testes clínicos).',
        es: 'Es la versión corregida de la "Terfenadina" (remedio antiguo que mataba por paro cardíaco). La Fexofenadina corta 100% la unión H1 y, probadamente, TIENE PENETRACIÓN CERO EN EL CEREBRO. Entre todos, es el que menos somnolencia causa (niveles de sueño iguales a placebo en estudios).'
      },
      dose: {
        adult: {
          pt: 'Rinite (120 mg via oral 1x ao dia). Urticária/Pele (180 mg via oral 1x ao dia).',
          es: 'Rinitis (120 mg vía oral 1x al día). Urticaria/Piel (180 mg vía oral 1x al día).'
        },
        pediatric: {
          pt: 'Crianças de 2 a 11 anos: 30 mg (5 mL) a cada 12 horas.',
          es: 'Niños de 2 a 11 años: 30 mg (5 mL) cada 12 horas.'
        }
      },
      administration: { pt: ['Interação crítica com líquidos — tomar EXCLUSIVAMENTE com água (Ver alertas de interação).', 'Se associado a Pseudoefedrina (Allegra D), cuidado com uso prolongado e insônia gerada pelo descongestionante.'], es: ['Interacción crítica con líquidos — tomar EXCLUSIVAMENTE con agua (Ver alertas de interacción).', 'Si se asocia a Pseudoefedrina (Allegra D), cuidado con uso prolongado e insomnio.'] },
      renalAdjustment: { required: true, message: { pt: 'Aumentar o intervalo ou reduzir a dose (Ex: 60mg/dia) se ClCr < 80 mL/min.', es: 'Aumentar el intervalo o reducir la dosis (Ej: 60mg/día) si ClCr < 80 mL/min.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Quase não passa pelo fígado. Excretado inalterado nas fezes.', es: 'Casi no pasa por el hígado. Excretado inalterado en heces.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Dismenorreia (cólica menstrual, rara)', 'Diarreia leve'], es: ['Cefalea', 'Dismenorrea (cólico menstrual, raro)', 'Diarrea leve'] },
      dangerousAdverseEffects: { pt: ['Nenhum efeito letal severo associado sistemicamente. Excelente perfil cardíaco (Não altera o QT).'], es: ['Ningún efecto letal severo. Excelente perfil cardíaco (No altera el QT).'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Nenhuma expressiva para a formulação pura (Sem componente Pseudoefedrina)'], es: ['Ninguna expresiva para la formulación pura (Sin Pseudoefedrina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A CORREÇÃO DO CORAÇÃO: Médicos às vezes temem a Fexofenadina lembrando da antiga Terfenadina (que alongava o QT e matava). A Fexofenadina é extremamente segura para o coração, mesmo em doses maciças, e não interage com antifúngicos bloqueadores de CYP. ALERTA PRINCIPAL: Suco de maçã, laranja ou toranja reduz sua absorção em até 70% — tomar SOMENTE COM ÁGUA.', es: 'LA CORRECCIÓN DEL CORAZÓN: La Fexofenadina es extremadamente segura para el corazón, incluso en dosis masivas. ALERTA PRINCIPAL: Jugo de manzana, naranja o pomelo reduce su absorción hasta 70% — tomar SÓLO CON AGUA.' }
      }
    },

/* ── EBASTINA ───────────────────────────────────────────────────────── */
    "ebastina": {
      name: { pt: 'Ebastina', es: 'Ebastina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração', es: 'Antihistamínico H1 de 2ª Generación' },
      indications: {
        pt: ['Rinite Alérgica sazonal e perene crônica', 'Urticária idiopática crônica (erupções com coceira extrema)'],
        es: ['Rinitis Alérgica estacional y perenne crónica', 'Urticaria idiopática crónica (erupciones con picor extremo)']
      },
      commercialNames: { br: ['Ebastel'], ar: ['Ebastel'] },
      presentation: { pt: ['Comprimidos revestidos 10 mg e 20 mg', 'Xarope 1 mg/mL'], es: ['Comprimidos recubiertos 10 mg y 20 mg', 'Jarabe 1 mg/mL'] },
      mechanism: {
        pt: 'Pró-fármaco. Ao ser engolida, o fígado transforma a droga quase instantaneamente em "Carebastina", que é o bloqueador super-potente H1. Não penetra a barreira hematoencefálica (não causa sono). Seu diferencial é a longa afinidade duradoura nos receptores H1 nasais, desentupindo a alergia com um único comprimido por 24 horas.',
        es: 'Profármaco. Al ser tragada, el hígado transforma la droga instantáneamente en "Carebastina", el bloqueador superpotente H1. No penetra la barrera hematoencefálica (no causa sueño). Su diferencial es la larga afinidad duradera en los receptores H1 nasales.'
      },
      dose: {
        adult: {
          pt: 'Rinite (10 mg 1x ao dia). Urticária/Rinite Severa (20 mg 1x ao dia).',
          es: 'Rinitis (10 mg 1x al día). Urticaria/Rinitis Severa (20 mg 1x al día).'
        },
        pediatric: {
          pt: 'Crianças 2 a 5 anos: 2,5 mg (2,5 mL) 1x/dia. 6 a 11 anos: 5 mg 1x/dia.',
          es: 'Niños 2 a 5 años: 2,5 mg (2,5 mL) 1x/día. 6 a 11 años: 5 mg 1x/día.'
        }
      },
      administration: { pt: ['Toma única oral, preferencialmente de manhã para garantir proteção diária.'], es: ['Toma única oral, preferentemente por la mañana para garantizar protección diaria.'] },
      renalAdjustment: { required: false, message: { pt: 'Não exige ajuste rigoroso na doença renal (mesmo severa).', es: 'No exige ajuste riguroso en enfermedad renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Restringir a 10 mg/dia em insuficiência hepática grave (pró-fármaco CYP3A4-dependente).', es: 'Restringir a 10 mg/día en insuficiencia hepática grave (profármaco CYP3A4-dependiente).' } },
      commonAdverseEffects: { pt: ['Boca seca', 'Cefaleia', 'Sonolência rara (1-3%)'], es: ['Boca seca', 'Cefalea', 'Somnolencia rara (1-3%)'] },
      dangerousAdverseEffects: { pt: ['Aumento de transaminases temporário', 'Taquicardia paradoxal', 'Prolongamento do QTc (raro, principalmente com inibidores de CYP3A4)'], es: ['Aumento de transaminasas temporal', 'Taquicardia paradójica', 'Prolongación del QTc (raro, principalmente con inhibidores de CYP3A4)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade à ebastina'], es: ['Hipersensibilidad a la ebastina'] },
        relative: { pt: ['Pacientes com Hipocalemia preexistente ou história de prolongamento do QT longo', 'Uso concomitante de macrólidos ou antifúngicos azólicos sistêmicos (risco de acúmulo + QTc)'], es: ['Pacientes con Hipopotasemia preexistente o historia de prolongación de QT', 'Uso concomitante de macrólidos o antifúngicos azólicos sistémicos (riesgo de acumulación + QTc)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA METABÓLICO: Como a Ebastina vira Carebastina pelas enzimas CYP3A4 no fígado, se o paciente tomar cetoconazol ou claritromicina, o fígado para. A ebastina original vai acumular e, diferentemente da Loratadina, isso pode alongar levemente o QTc do paciente. Preferir Fexofenadina ou Desloratadina em pacientes coronariopatas.', es: 'ALERTA METABÓLICA: Como la Ebastina se vuelve Carebastina por las enzimas CYP3A4, si el paciente toma ketoconazol o claritromicina, el hígado se detiene. La ebastina original acumulará y puede alargar levemente el QTc. Preferir Fexofenadina o Desloratadina en coronariopatas.' }
      }
    },

    /* ── BUILD 395 Lote 2 — Anti-histamínicos H1: 2ª Geração (Bilastina, Rupatadina) + 1ª Geração Clássicos ── */

    "bilastina": {
      name: { pt: 'Bilastina', es: 'Bilastina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração (Não Sedativo)', es: 'Antihistamínico H1 de 2ª Generación (No Sedante)' },
      indications: {
        pt: ['Tratamento sintomático da Rinoconjuntivite alérgica (sazonal e perene)', 'Urticária crônica espontânea'],
        es: ['Tratamiento sintomático de la Rinoconjuntivitis alérgica (estacional y perenne)', 'Urticaria crónica espontánea']
      },
      commercialNames: { br: ['Alektos'], ar: ['Ilaxten'] },
      presentation: { pt: ['Comprimidos 20 mg', 'Solução Oral Pediátrica 2,5 mg/mL'], es: ['Comprimidos 20 mg', 'Solución Oral Pediátrica 2,5 mg/mL'] },
      mechanism: {
        pt: 'Antialérgico super moderno. Bloqueia receptores H1 de forma altissimamente seletiva, sem nenhuma afinidade por receptores muscarínicos (não causa boca seca significativa). Como não cruza a barreira hematoencefálica, não causa sedação. Seu diferencial é o controle rápido: começa a agir em 30 a 60 minutos e dura exatas 24 horas. É excretada de forma inalterada (não sobrecarrega o fígado).',
        es: 'Antialérgico supermoderno. Bloquea receptores H1 de forma altísimamente selectiva, sin afinidad por muscarínicos. Al no cruzar la barrera hematoencefálica, no causa sedación. Su diferencial es el control rápido: empieza a actuar en 30 a 60 minutos y dura 24 horas. Se excreta inalterada (no sobrecarga el hígado).'
      },
      dose: {
        adult: {
          pt: '20 mg via oral UMA VEZ ao dia.',
          es: '20 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Crianças de 6 a 11 anos: 10 mg (4 mL) UMA VEZ ao dia.',
          es: 'Niños de 6 a 11 años: 10 mg (4 mL) UNA VEZ al día.'
        }
      },
      administration: { pt: ['REGRA DO JEJUM ABSOLUTO: Tomar o comprimido pelo menos 1 HORA ANTES ou 2 HORAS DEPOIS da ingestão de qualquer alimento ou suco de frutas. A comida corta quase 30% a 50% do efeito da droga.'], es: ['REGLA DE AYUNO ABSOLUTO: Tomar el comprimido al menos 1 HORA ANTES o 2 HORAS DESPUÉS de cualquier alimento o jugo. La comida corta el 30% a 50% del efecto de la droga.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose, mesmo na doença renal grave.', es: 'Sin necesidad de ajuste de dosis, incluso en enfermedad renal grave.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste (metabolismo hepático é irrelevante, excretada nas fezes e urina intacta).', es: 'No requiere ajuste (metabolismo hepático irrelevante).' } },
      commonAdverseEffects: { pt: ['Cefaleia leve', 'Sonolência irrisória (praticamente igual ao placebo)'], es: ['Cefalea leve', 'Somnolencia irrisoria (prácticamente igual a placebo)'] },
      dangerousAdverseEffects: { pt: ['Extremamente segura. Nenhum efeito cardíaco (não prolonga o QT) mesmo em doses altas.'], es: ['Extremadamente segura. Ningún efecto cardíaco (no prolonga QT) incluso en dosis altas.'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave à bilastina'], es: ['Hipersensibilidad grave a la bilastina'] },
        relative: { pt: ['Crianças < 6 anos (por falta de estudos de eficácia robustos)'], es: ['Niños < 6 años (por falta de estudios de eficacia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ERRO NA MESA: Se você prescrever Bilastina para o paciente tomar "depois do café da manhã" (como se faz com quase todo remédio), o remédio não vai funcionar. Essa droga compete com a comida no intestino e perde. Tem que ser no estômago vazio.', es: 'ERROR EN LA MESA: Si prescribe Bilastina para "después del desayuno", el remedio no funcionará. Compite con la comida en el intestino y pierde. Debe ser con estómago vacío.' }
      }
    },

    "rupatadina": {
      name: { pt: 'Rupatadina', es: 'Rupatadina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 2ª Geração + Antagonista do PAF', es: 'Antihistamínico H1 de 2ª Generación + Antagonista del PAF' },
      indications: {
        pt: ['Rinite Alérgica (com alto poder contra o entupimento nasal crônico)', 'Urticária crônica com alto poder de inchaço inflamatório'],
        es: ['Rinitis Alérgica (con alto poder contra el taponamiento nasal crónico)', 'Urticaria crónica con alto poder de hinchazón inflamatoria']
      },
      commercialNames: { br: ['Rupafin'], ar: ['Rupafin', 'Alergiax'] },
      presentation: { pt: ['Comprimidos 10 mg', 'Solução Oral 1 mg/mL'], es: ['Comprimidos 10 mg', 'Solución Oral 1 mg/mL'] },
      mechanism: {
        pt: 'Tem um DUPLO MECANISMO revolucionário. Além de bloquear a Histamina (H1) como todos os outros, a Rupatadina bloqueia o Fator Ativador de Plaquetas (PAF). O PAF é uma das principais substâncias que as células soltam para deixar o nariz entupido e a pele vermelha/inchada. Ao bloquear ambos, ela "seca" a alergia mais intensamente que os antihistamínicos puros.',
        es: 'Tiene un DOBLE MECANISMO revolucionario. Además de bloquear la Histamina (H1), la Rupatadina bloquea el Factor Activador de Plaquetas (PAF). El PAF es una de las principales sustancias que tapan la nariz e hinchan la piel. Al bloquear ambos, "seca" la alergia más intensamente.'
      },
      dose: {
        adult: {
          pt: '10 mg via oral UMA VEZ ao dia.',
          es: '10 mg vía oral UNA VEZ al día.'
        },
        pediatric: {
          pt: 'Crianças de 2 a 11 anos (>25 kg): 5 mg (5 mL) 1x/dia. (10 a 25 kg): 2,5 mg (2,5 mL) 1x/dia.',
          es: 'Niños de 2 a 11 años (>25 kg): 5 mg (5 mL) 1x/día. (10 a 25 kg): 2,5 mg (2,5 mL) 1x/día.'
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos (A comida aumenta ligeiramente sua absorção e atrasa o pico, mas não anula o remédio, sendo seguro misturar).'], es: ['Puede ser tomado con o sin alimentos (La comida aumenta ligeramente su absorción y retrasa el pico, pero no anula el remedio).'] },
      renalAdjustment: { required: false, message: { pt: 'Uso não recomendado em insuficiência renal grave apenas por falta de dados concretos.', es: 'Uso no recomendado en insuficiencia renal grave solo por falta de datos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar o uso em insuficiência hepática (metabolismo extenso via CYP3A4).', es: 'Evitar uso en insuficiencia hepática (metabolismo extenso vía CYP3A4).' } },
      commonAdverseEffects: { pt: ['Sonolência (Afeta até 9% dos pacientes, mais que a bilastina/loratadina)', 'Astenia (fraqueza)', 'Cefaleia'], es: ['Somnolencia (Afecta hasta 9% de los pacientes)', 'Astenia (debilidad)', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Nenhum evento cardíaco perigoso em doses terapêuticas.'], es: ['Ningún evento cardíaco peligroso en dosis terapéuticas.'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 2 anos', 'Insuficiência hepática ou renal grave'], es: ['Niños menores de 2 años', 'Insuficiencia hepática o renal grave'] },
        relative: { pt: ['Uso associado com inibidores potentes do CYP3A4 (Cetoconazol, Eritromicina)'], es: ['Uso asociado con inhibidores potentes del CYP3A4 (Ketoconazol, Eritromicina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA DE SEDATIVO: Por ser metabolizada no fígado e ter estrutura mais lipofílica que a Fexofenadina/Bilastina, a Rupatadina CAUSA SONO em alguns pacientes (semelhante à Cetirizina). Instrua o adulto a tomar a primeira dose à noite para ver como o corpo reage.', es: 'ALERTA DE SEDANTE: Por ser metabolizada en hígado, la Rupatadina CAUSA SUEÑO en algunos pacientes. Instruya al adulto a tomar la primera dosis a la noche para ver cómo reacciona el cuerpo.' }
      }
    },

    "difenidramina": {
      name: { pt: 'Difenidramina', es: 'Difenhidramina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 1ª Geração (Fortemente Sedativo)', es: 'Antihistamínico H1 de 1ª Generación (Fuertemente Sedante)' },
      indications: {
        pt: ['Reações anafiláticas e alergias severas na emergência', 'Reações Extrapiramidais (Distonia aguda por Plasil ou Haldol)', 'Insônia aguda (Uso off-label comum nos EUA)'],
        es: ['Reacciones anafilácticas y alergias severas en urgencias', 'Reacciones Extrapiramidales (Distonía aguda por Plasil o Haldol)', 'Insomnio agudo (Uso off-label común en EE.UU.)']
      },
      commercialNames: { br: ['Benadryl', 'Difenidrin'], ar: ['Benadryl'] },
      presentation: { pt: ['Ampolas IV/IM 50 mg/mL', 'Comprimidos/Cápsulas 25 mg, 50 mg', 'Xarope 12,5 mg/5 mL'], es: ['Ampollas IV/IM 50 mg/mL', 'Comprimidos/Cápsulas 25 mg, 50 mg', 'Jarabe 12,5 mg/5 mL'] },
      mechanism: {
        pt: 'Um "Dinossauro" potente. Bloqueia receptores H1 em todo o corpo, desinchando a pele e os brônquios na anafilaxia. Porém, ela atravessa a barreira hematoencefálica brutalmente. No cérebro, atua como um sedativo pesado e possui AÇÃO ANTICOLINÉRGICA EXTREMA (bloqueia receptores muscarínicos). Esse bloqueio anticolinérgico é o que cura a distonia extrapiramidal e seca toda a água do corpo (boca, nariz, pulmão).',
        es: 'Un "Dinosaurio" potente. Bloquea receptores H1 en todo el cuerpo. Sin embargo, atraviesa la barrera hematoencefálica brutalmente. En el cerebro, actúa como sedante pesado y posee ACCIÓN ANTICOLINÉRGICA EXTREMA. Este bloqueo anticolinérgico cura la distonía y seca toda el agua del cuerpo.'
      },
      dose: {
        adult: {
          pt: 'Alergia/Anafilaxia grave: 25 a 50 mg IV ou IM LENTO a cada 6 ou 8 horas. Insônia/Oral: 50 mg VO antes de dormir.',
          es: 'Alergia/Anafilaxia grave: 25 a 50 mg IV o IM LENTO cada 6 o 8 horas. Insomnio/Oral: 50 mg VO antes de dormir.'
        },
        pediatric: {
          pt: 'Crianças (>10 kg): 1 a 1,25 mg/kg IV ou IM a cada 6 horas.',
          es: 'Niños (>10 kg): 1 a 1,25 mg/kg IV o IM cada 6 horas.'
        }
      },
      administration: { pt: ['Via endovenosa (IV) deve ser feita MUITO lentamente (mínimo de 3 a 5 min), injeção rápida causa hipotensão severa e colapso circulatório.', 'A IM deve ser profunda.'], es: ['Vía endovenosa (IV) debe hacerse MUY lentamente (mínimo 3 a 5 min), inyección rápida causa hipotensión severa.', 'La IM debe ser profunda.'] },
      renalAdjustment: { required: true, message: { pt: 'Em falência renal (ClCr 10-50), aumentar o intervalo entre as doses para 6-12 horas.', es: 'En falla renal (ClCr 10-50), aumentar intervalo entre dosis a 6-12 horas.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo de primeira passagem maciço. Evitar ou reduzir na cirrose.', es: 'Metabolismo de primera pasada masivo. Evitar o reducir en cirrosis.' } },
      commonAdverseEffects: { pt: ['Sonolência INCAPACITANTE (O paciente "apaga")', 'Boca parecendo lixa (xerostomia extrema)', 'Visão turva e palpitação'], es: ['Somnolencia INCAPACITANTE (El paciente "se apaga")', 'Boca como lija (xerostomía extrema)', 'Visión borrosa y palpitación'] },
      dangerousAdverseEffects: { pt: ['Delirium Anticolinérgico em idosos (alucinações terroríficas, agitação e coma)', 'Retenção urinária aguda', 'Espessamento letal de secreção brônquica no asmático'], es: ['Delirium Anticolinérgico en ancianos (alucinaciones terroríficas, agitación y coma)', 'Retención urinaria aguda', 'Espesamiento letal de secreción bronquial en el asmático'] },
      contraindications: {
        absolute: { pt: ['Recém-nascidos e prematuros (Risco de apneia fatal)', 'Uso como droga profilática diária para rinite (Tóxica pro cérebro)'], es: ['Recién nacidos y prematuros (Riesgo de apnea fatal)', 'Uso como droga profiláctica diaria (Tóxica para el cerebro)'] },
        relative: { pt: ['Idosos (> 65 anos) - Droga da Lista de Beers (altamente inapropriada)', 'Glaucoma de ângulo fechado', 'Hiperplasia Prostática'], es: ['Ancianos (> 65 años) - Droga de Criterios de Beers', 'Glaucoma de ángulo cerrado', 'Hiperplasia Prostática'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O PIOR REMÉDIO PARA O IDOSO: A Difenidramina no idoso causa confusão mental profunda, demência aguda reversível e retenção de urina. Um avô que toma Benadryl no PS corre alto risco de não reconhecer os filhos, cair, quebrar o fêmur e parar na UTI horas depois. USE SEMPRE os de 2ª geração para alergias simples.', es: 'EL PEOR REMEDIO PARA EL ANCIANO: La Difenhidramina en el anciano causa confusión mental profunda y retención de orina. Un abuelo que lo toma corre alto riesgo de caer, romperse el fémur y terminar en UCI.' }
      }
    },

    "clorfeniramina": {
      name: { pt: 'Clorfeniramina', es: 'Clorfeniramina' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 1ª Geração', es: 'Antihistamínico H1 de 1ª Generación' },
      indications: {
        pt: ['Sintomas de gripes e resfriados associados à coriza nasal e espirros', 'Urticária leve'],
        es: ['Síntomas de gripes y resfriados asociados a coriza nasal y estornudos', 'Urticaria leve']
      },
      commercialNames: { br: ['Resfenol (Assoc)', 'Benegrip (Assoc)'], ar: ['Qura Plus (Assoc)'] },
      presentation: { pt: ['Comprimidos 4 mg', 'Xarope 2 mg/5 mL (Muitas vezes misturado com Paracetamol/Descongestionantes na farmácia)'], es: ['Comprimidos 4 mg', 'Jarabe 2 mg/5 mL (Frecuentemente mezclado con Paracetamol/Descongestionantes)'] },
      mechanism: {
        pt: 'Semelhante à difenidramina, cruza a barreira hematoencefálica e bloqueia os receptores H1 e muscarínicos. A diferença clínica é que a clorfeniramina é ligeiramente menos sedativa e "derruba" menos o paciente do que a difenidramina, sendo extremamente comum sua venda livre em "antigripais" de prateleira (para secar o nariz e o paciente conseguir trabalhar).',
        es: 'Similar a difenhidramina, cruza la barrera y bloquea receptores H1 y muscarínicos. La diferencia clínica es que la clorfeniramina es ligeramente menos sedante y "tira" menos al paciente, siendo común su venta libre en "antigripales" para secar la nariz.'
      },
      dose: {
        adult: {
          pt: '4 mg via oral a cada 4 a 6 horas (Máximo de 24 mg/dia).',
          es: '4 mg vía oral cada 4 a 6 horas (Máximo de 24 mg/día).'
        },
        pediatric: {
          pt: '6 a 12 anos: 2 mg a cada 4 a 6 horas (Máximo 12 mg/dia).',
          es: '6 a 12 años: 2 mg cada 4 a 6 horas (Máximo 12 mg/día).'
        }
      },
      administration: { pt: ['Uso oral rotineiro. Pode ser ingerido com leite ou comida se houver irritação gástrica.'], es: ['Uso oral rutinario. Puede ser ingerido con leche o comida si hay irritación gástrica.'] },
      renalAdjustment: { required: false, message: { pt: 'Monitorar acúmulo de metabólitos em disfunção grave.', es: 'Monitorizar acumulación de metabolitos en disfunción grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose descompensada.', es: 'Evitar en cirrosis descompensada.' } },
      commonAdverseEffects: { pt: ['Sonolência e letargia', 'Tontura e falta de coordenação', 'Boca seca'], es: ['Somnolencia y letargo', 'Mareo y falta de coordinación', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Glaucoma agudo precipitado', 'Incapacidade de urinar (em hiperplasia benigna da próstata)'], es: ['Glaucoma agudo precipitado', 'Incapacidad de orinar (en hiperplasia benigna de la próstata)'] },
      contraindications: {
        absolute: { pt: ['Crise aguda de asma (Resseca e engrossa as secreções pulmonares, asfixiando o doente)'], es: ['Crisis aguda de asma (Reseca y engrosa las secreciones pulmonares, asfixiando al enfermo)'] },
        relative: { pt: ['Glaucoma de ângulo fechado', 'Uso contínuo em idosos (Causa esquecimento e demência induzida)'], es: ['Glaucoma de ángulo cerrado', 'Uso continuo en ancianos (Causa olvido y demencia inducida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O PERIGO DOS ANTIGRIPAIS: Pacientes idosos frequentemente tomam 3 ou 4 comprimidos de "Benegrip/Resfenol" ao dia para a gripe, sem saber que a Clorfeniramina neles vai causar retenção urinária e parar a próstata, além de confusão mental grave. Oriente os familiares.', es: 'EL PELIGRO DE LOS ANTIGRIPALES: Pacientes ancianos frecuentemente toman 3 o 4 comprimidos de antigripales al día, sin saber que la Clorfeniramina en ellos causará retención urinaria y confusión mental grave.' }
      }
    },

    "dexclorfeniramina": {
      name: { pt: 'Dexclorfeniramina (Maleato de)', es: 'Dexclorfeniramina (Maleato de)' },
      category: 'alergia_imunologia',
      class: { pt: 'Anti-histamínico H1 de 1ª Geração (O Clássico "Alergia de Pele")', es: 'Antihistamínico H1 de 1ª Generación (El Clásico "Alergia de Piel")' },
      indications: {
        pt: ['Alergias cutâneas severas (Urticária, Picadas de inseto, Eczema)', 'Coceiras generalizadas refratárias', 'Seguro na Gravidez para rinites alérgicas intensas'],
        es: ['Alergias cutáneas severas (Urticaria, Picaduras de insecto, Eczema)', 'Picores generalizados refractarios', 'Seguro en el Embarazo para rinitis alérgicas intensas']
      },
      commercialNames: { br: ['Polaramine'], ar: ['Celestamine (Assoc)'] },
      presentation: { pt: ['Comprimidos 2 mg', 'Drágeas Repetabs (liberação prolongada) 6 mg', 'Xarope ou Gotas 2 mg/5 mL'], es: ['Comprimidos 2 mg', 'Grageas de liberación prolongada 6 mg', 'Jarabe o Gotas 2 mg/5 mL'] },
      mechanism: {
        pt: 'É o isômero destro puro da Clorfeniramina. Ao purificar a molécula, a indústria a tornou DUAS VEZES MAIS POTENTE (2 mg dela equivalem a 4 mg da clorfeniramina) e reduziu um pouco os efeitos colaterais. É o "rei" da alergia de pele no Brasil, altamente confiável na obstetrícia e pediatria de emergência, apesar da intensa sonolência induzida.',
        es: 'Es el isómero diestro puro de la Clorfeniramina. Al purificar la molécula, la industria la hizo EL DOBLE DE POTENTE (2 mg equivalen a 4 mg de clorfeniramina). Es altamente confiable en obstetricia y pediatría de emergencia, a pesar del sueño inducido.'
      },
      dose: {
        adult: {
          pt: '2 mg via oral a cada 6 a 8 horas. Repetabs (6 mg) a cada 12 horas.',
          es: '2 mg vía oral cada 6 a 8 horas. Repetabs (6 mg) cada 12 horas.'
        },
        pediatric: {
          pt: '2 a 6 anos: 0,5 mg (1,25 mL) a cada 8h. 6 a 12 anos: 1 mg (2,5 mL) a cada 8h.',
          es: '2 a 6 años: 0,5 mg (1,25 mL) cada 8h. 6 a 12 años: 1 mg (2,5 mL) cada 8h.'
        }
      },
      administration: { pt: ['Xarope/Comprimidos não tem relação com comida. As Drágeas de liberação prolongada NUNCA devem ser esmagadas ou mastigadas.'], es: ['Jarabe/Comprimidos no tiene relación con comida. Las Grageas de liberación prolongada NUNCA deben ser masticadas o aplastadas.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizado no fígado, reduzir dose em cirrose grave.', es: 'Metabolizado en hígado, reducir dosis en cirrosis grave.' } },
      commonAdverseEffects: { pt: ['Sonolência intensa', 'Astenia', 'Espessamento das secreções brônquicas'], es: ['Somnolencia intensa', 'Astenia', 'Espesamiento de las secreciones bronquiales'] },
      dangerousAdverseEffects: { pt: ['Convulsões e delírio grave em intoxicação pediátrica'], es: ['Convulsiones y delirio grave en intoxicación pediátrica'] },
      contraindications: {
        absolute: { pt: ['Bebês menores de 2 anos', 'Asma brônquica aguda', 'Pacientes em uso de IMAO'], es: ['Bebés menores de 2 años', 'Asma bronquial aguda', 'Pacientes en uso de IMAO'] },
        relative: { pt: ['Idosos com glaucoma, HBP ou demência (Risco da Toxidrome Anticolinérgica)'], es: ['Ancianos con glaucoma, HBP o demencia (Riesgo de Toxidrome Anticolinérgico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA PEDIÁTRICO: Um erro muito comum de mães é dar doses "a mais" de Polaramine para bebês com coceira severa. A superdosagem no cérebro imaturo da criança NÃO a faz dormir; pelo contrário, causa agitação paradoxal extrema, alucinações ("vendo bichos") e convulsões hipercinéticas.', es: 'ALERTA PEDIÁTRICA: Un error común de madres es dar dosis extras de Polaramine para bebés con picor. La sobredosis en el cerebro inmaduro NO hace dormir; al contrario, causa agitación paradójica extrema, alucinaciones y convulsiones.' }
      }
    }

  }); /* fim Object.assign ALERGIA_IMUNOLOGIA_DRUGS_DB — BUILD 394 Lote 1 + BUILD 395 Lote 2
         Lote 1 (Desloratadina + Cetirizina + Levocetirizina + Fexofenadina + Ebastina)
         Lote 2 (Bilastina + Rupatadina + Difenidramina + Clorfeniramina + Dexclorfeniramina)
         Total: 10 fármacos anti-histamínicos H1 */

  /* ── BUILD 446 GUARD ─────────────────────────────────────────────── */
  if (typeof window.ALERGIA_IMUNOLOGIA_DRUGS_DB !== 'object' || window.ALERGIA_IMUNOLOGIA_DRUGS_DB === null) return;
  Object.assign(window.ALERGIA_IMUNOLOGIA_DRUGS_DB, {

    /* ── TRIANCINOLONA ACETONIDA TÓPICA (760) ───────────────────────────── */
    "triancinolona_topica": {
      name: { pt: 'Triancinolona Acetonida (Uso Tópico)', es: 'Triancinolona Acetonida (Uso Tópico)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Média / Anti-inflamatório Cutâneo', es: 'Corticosteroide Tópico de Potencia Media / Antiinflamatorio Cutáneo' },
      indications: {
        pt: ['Dermatites responsivas a corticoides (Eczema, Dermatite Seborreica, Dermatite de Contato)', 'Psoríase em placas leve a moderada', 'Lesões inflamatórias ou ulcerativas da mucosa oral (Formulação em orabase para aftas)'],
        es: ['Dermatosis inflamatorias (Eczema, Dermatitis de Contacto)', 'Psoriasis en placas leve', 'Lesiones ulcerativas de la mucosa oral (en orabase)']
      },
      commercialNames: { br: ['Omcilon-A em Orabase', 'Therasona'], ar: ['Kenacort', 'Delmeson', 'Triancinolona Orabase'] },
      presentation: { pt: ['Pomada, Creme ou Pasta em Orabase contendo 1 mg/g (0,1%) de Triancinolona Acetonida'], es: ['Crema, Pomada o Pasta dental al 0,1%'] },
      mechanism: {
        pt: 'O Modulador Epidérmico de Média Potência. Difunde-se através das membranas das células da pele e liga-se aos receptores de glicocorticoides no citoplasma. Esse complexo viaja até o núcleo do queratinócito e ativa os genes que fabricam a Lipocortina-1. A lipocortina bloqueia a enzima Fosfolipase A2, cortando imediatamente a liberação de Ácido Araquidônico. Sem ele, a pele para de fabricar Prostaglandinas e Leucotrienos, extinguindo a vermelhidão (eritema), o inchaço e a coceira (prurido) local.',
        es: 'Corticosteroide fluorado de potencia media. Actúa intracelularmente induciendo la síntesis de proteínas inhibidoras de la fosfolipasa A2 (lipocortinas). Esto detiene la cascada del ácido araquidónico, disminuyendo la formación de mediadores inflamatorios vasculares, reduciendo el eritema, edema y prurito en la dermis.'
      },
      dose: {
        adult: {
          pt: 'Uso Cutâneo/Oral: Aplicar uma pequena camada sobre a área afetada, DUAS a TRÊS vezes ao dia, espalhando suavemente. Limitar o uso contínuo a no máximo 2 a 4 semanas para evitar atrofia da pele.',
          es: 'Aplicar una capa delgada sobre la zona lesionada 2 a 3 veces al día. Limitar el uso continuo a un máximo de 14 a 21 días.'
        },
        pediatric: {
          pt: 'Crianças: Aplicar a menor quantidade eficaz, uma ou duas vezes ao dia, por no máximo 5 a 7 dias. Não cobrir com fraldas ou curativos oclusivos (VER ALERTAS).',
          es: 'Utilizar con extrema precaución en niños por menor superficie corporal; máximo 5-7 días sin oclusión.'
        }
      },
      administration: { pt: ['Uso dermatológico local ou bucal. Na mucosa oral (aftas), aplicar a pasta em orabase sem esfregar, apenas pressionando sobre a ferida, criando um filme protetor que gruda na saliva.'], es: ['Uso tópico. En orabase bucal, aplicar presionando suavemente sobre la lesión sin frotar hasta formar una película adhesiva.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente local, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste clínico.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ardor, queimação e ressecamento local na pele', 'Estrias cutâneas lineares purpúricas (se uso prolongado)', 'Descoloração da pele (hipopigmentação)'], es: ['Ardor, escozor y sequedad local', 'Estrías dérmicas', 'Hipopigmentación focal'] },
      dangerousAdverseEffects: { pt: ['ATROFIA CUTÂNEA SEVERA (a pele fica fina feito papel de seda e rasga sozinha)', 'Supressão do eixo adrenal sistêmico (Síndrome de Cushing iatrogênica por absorção em feridas abertas)'], es: ['ATROFIA CUTÁNEA SEVERA (adelgazamiento epidérmico irreversible)', 'Supresión del eje adrenal por absorción sistémica excesiva'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas ativas não tratadas (tuberculose cutânea, herpes simples, sífilis cutânea ou fungos)', 'Acne vulgar ou Rosácea na face'], es: ['Infecciones cutáneas fúngicas, bacterianas o virales activas no tratadas', 'Acné vulgar o Rosácea'] },
        relative: { pt: ['Uso em áreas de dobras (axila, virilha, inframamária) devido à absorção amplificada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A ARMADILHA DA OCLUSÃO (EFEITO FRALDA): Nunca aplique Triancinolona ou qualquer corticoide na pele de um bebê e cubra com fralda plástica apertada. A oclusão abafa a pele, multiplica a absorção do corticoide em até 10 vezes e joga o remédio direto no sangue da criança, causando paragem de crescimento e Síndrome de Cushing.', es: 'EL PELIGRO DE LA OCLUSIÓN: Jamás aplique corticoides tópicos bajo pañales de plástico o vendajes herméticos. La oclusión aumenta hasta 10 veces la absorción percutánea del fármaco, provocando efectos sistémicos severos como supresión adrenal en lactantes.' }
      },
      references: {
        pt: 'Consenso de Corticoterapia Tópica da Sociedade Brasileira de Dermatologia (SBD); British Journal of Dermatology; Manual Lexicomp.',
        es: 'Consenso de la Sociedad Argentina de Dermatología (SAD); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── CLOBETASOL PROPIONATO (761) ────────────────────────────────────── */
    "clobetasol": {
      name: { pt: 'Clobetasol (Propionato de)', es: 'Clobetasol (Propionato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Ultra-Alta / Classe I Superior', es: 'Corticosteroide Tópico de Potencia Ultra-Alta / Clase I Superior' },
      indications: {
        pt: ['Psoríase em placas recalcitrante moderada a grave (corpo e couro cabeludo)', 'Líquen Plano hipertrófico e Líquen Escleroso vulvar', 'Lúpus Eritematoso Discoide cutâneo', 'Eczemas graves resistentes a outros corticoides'],
        es: ['Psoriasis recalcitrante severa', 'Liquen Escleroso e Liquen Plano hipertrófico', 'Lupus eritematoso discoide cutáneo', 'Eczemas graves rebeldes']
      },
      commercialNames: { br: ['Psorex', 'Cloob', 'Clobesol'], ar: ['Dermadex', 'Salac', 'Clobesol Argentina'] },
      presentation: { pt: ['Creme, Pomada ou Solução Capilar contendo 0,5 mg/g (0,05%) de Propionato de Clobetasol'], es: ['Crema, Pomada o Loción capilar al 0,05%'] },
      mechanism: {
        pt: 'O Super-Corticoide de Choque. É o corticoide tópico mais potente da medicina mundial (Classe I). Sua estrutura altamente halogenada confere uma afinidade esmagadora pelos receptores nucleares. Ele causa vasoconstrição periférica massiva imediata, esvazia o infiltrado de linfócitos T da derme e bloqueia as citocinas interleucinas (IL-1, IL-6) de forma tão violenta que interrompe a replicação celular exagerada na psoríase em poucos dias.',
        es: 'Corticosteroide tópico de clase I (potencia ultra-alta). Induce una vasoconstricción dérmica local masiva y ejerce un potente efecto inmunosupresor bloqueando la síntesis de citocinas quimiotácticas de linfocitos T. Detiene la hiperproliferación de queratinocitos en placas de psoriasis crónicas.'
      },
      dose: {
        adult: {
          pt: 'Uso Cutâneo: Aplicar uma fina camada sobre as lesões, UMA a DUAS vezes ao dia. TETO MÁXIMO PROIBITIVO: Não ultrapassar o limite de 50 g de creme por semana e não usar por mais de 2 semanas seguidas.',
          es: 'Aplicar 1 o 2 veces al día una capa muy fina sobre la lesión. LÍMITE ABSOLUTO: No exceder los 50 g semanales de crema y suspender estrictamente a las 2 semanas.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADO em crianças menores de 12 anos devido ao risco fulminante de supressão hormonal e parada de crescimento.',
          es: 'ABSOLUTAMENTE CONTRAINDICADO en menores de 12 años por riesgo neuroendocrino severo.'
        }
      },
      administration: { pt: ['Uso dermatológico restrito. Lavar as mãos imediatamente após a aplicação para evitar absorção nos dedos. NUNCA aplicar na face, pálpebras, axilas ou virilhas (risco de glaucoma e estrias purpúricas severas).'], es: ['Uso tópico exclusivo. Contraindicado en cara, párpados o pliegues axilares/inguinales por riesgo de glaucoma, catarata o estrías irreversibles.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Atrofia cutânea precoce e Telangiectasias (surgimento de microvasos arroxeadas na pele)', 'Sensação de queimação severa', 'Hipertricose local (nascimento de pelos finos na área)'], es: ['Telangiectasias (arañas vasculares)', 'Adelgazamiento dérmico visible', 'Hipertricosis localizada'] },
      dangerousAdverseEffects: { pt: ['SÍNDROME DE CUSHING IATROGÊNICA (obstrução do eixo adrenal com face de lua cheia, estrias gigantes e estofamento de gordura nas costas se usado fora do teto)', 'Glaucoma de ângulo aberto e Cegueira bilateral se aplicado próximo aos olhos'], es: ['SÍNDROME DE CUSHING IATROGÉNICO por supresión del cortisol endógeno', 'Glaucoma y catarata si se aplica periorbitario'] },
      contraindications: {
        absolute: { pt: ['Menores de 12 anos de idade', 'Lesões cutâneas na face (rosácea, dermatite perioral)', 'Infecções de pele virais ou bacterianas não tratadas'], es: ['Niños < 12 años', 'Aplicación en rostro o párpados', 'Infecciones cutáneas activas'] },
        relative: { pt: ['Uso em áreas extensas que passem de 10% da superfície corporal'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A REGRA DE OURO DOS 14 DIAS (O REX DO REBOTE): O Clobetasol é um bisturi químico. Ele limpa a psoríase rápido, mas se o paciente usar por meses como se fosse hidratante, o corpo para de fabricar cortisol. Ao suspender o creme de uma vez, a psoríase volta espalhada no corpo inteiro em uma forma grave com pus e bolhas de febre (Psoríase Pustulosa Generalizada de Von Zumbusch). O desmame deve ser lento.', es: 'ALERTA DE REBOTE PSORIÁSICO (SÍNDROME DE VON ZUMBUSCH): No usar por más de 14 días. La suspensión abrupta tras el abuso crónico de clobetasol gatilla un rebote severo transformando una psoriasis leve en Psoriasis Pustulosa Generalizada (mortal). El retiro debe ser escalonado.' }
      },
      references: {
        pt: 'Guidelines for the Management of Psoriasis (AAD); Manual de Terapêutica Dermatológica SBD; Bula Profissional Psorex.',
        es: 'Guías de Consenso de Psoriasis de la SAD; Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── FLUOCINOLONA ACETONIDA (762) ───────────────────────────────────── */
    "fluocinolona": {
      name: { pt: 'Fluocinolona Acetonida', es: 'Fluocinolona Acetonida' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Média-Alta / Classe III', es: 'Corticosteroide Tópico de Potencia Media-Alta / Clase III' },
      indications: {
        pt: ['Eczema crônico liquenificado', 'Dermatite Atópica moderada resistente', 'Prurido anogenital severo intenso', 'Tratamento de Melasma facial (co-formulado em dose tripla com Hidroquinona e Tretinoína)'],
        es: ['Eczema crónico liquenificado', 'Dermatitis Atópica refractaria', 'Tratamiento del Melasma facial (coformulado con Hidroquinona y Tretinoína)']
      },
      commercialNames: { br: ['Synalar', 'Tri-Luma (Assoc)'], ar: ['Synalar', 'Triluma', 'Fluocinolona Richmond'] },
      presentation: { pt: ['Creme ou Pomada contendo 0,25 mg/g (0,025%) de Fluocinolona Acetonida'], es: ['Crema o Ungüento al 0,025%'] },
      mechanism: {
        pt: 'Corticoide bifluorado de potência intermediária-alta. Inibe a cascata inflamatória celular, diminui a quimiotaxia de neutrófilos e provoca vasoconstrição local. Na fórmula do Melasma (Tri-Luma), seu papel é puramente bloquear a inflamação irritativa que a Hidroquinona e o Ácido Retinoico causam na face do doente, impedindo que a pele inflame e manche de rebote.',
        es: 'Corticoide difluorado de potencia intermedia-alta con propiedades antiinflamatorias, antipruríticas y vasoconstrictoras. En la terapia del melasma, su función es suprimir la inflamación tisular inducida por el ácido retinoico y la hidroquinona, previniendo la hiperpigmentación postinflamatoria.'
      },
      dose: {
        adult: {
          pt: 'Uso Dermatológico: Aplicar uma pequena camada sobre a região afetada, DUAS a TRÊS vezes ao dia. Na fórmula clareadora (Tri-Luma), aplicar apenas UMA VEZ ao dia, estritamente à noite antes de dormir.',
          es: 'Aplicar una capa fina 2 a 3 veces al día en la zona afectada. En fórmulas despigmentantes faciales, aplicar SOLO UNA VEZ al día estrictamente por la noche.'
        },
        pediatric: {
          pt: 'Evitar o uso em menores de 2 anos; acima desta idade usar sob estrito critério e por cursos curtos menores de 5 dias.',
          es: 'Evitar en niños menores de 2 años.'
        }
      },
      administration: { pt: ['Uso tópico externo. Se usado na face para clareamento de manchas, lavar o rosto completamente pela manhã e aplicar obrigatoriamente FILTRO SOLAR FPS > 50 para evitar queimaduras severas.'], es: ['Uso tópico. Si se aplica en rostro por melasma, es obligatorio retirar el producto por la mañana y usar fotoprotección extrema FPS > 50.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Descamação e eritema local', 'Sensação de agulhadas na pele', 'Dermatite perioral e foliculite'], es: ['Descamación y eritema local', 'Parestesias cutáneas leves', 'Dermatitis perioral'] },
      dangerousAdverseEffects: { pt: ['Atrofia dérmica facial irreversível com pele rendada', 'Rosácea induzida por corticoide (a face fica permanentemente vermelha com espinhas de corticoide)'], es: ['Atrofia dérmica facial irreversible', 'Rosácea esteroidea (eritrosis permanente con pápulas)'] },
      contraindications: {
        absolute: { pt: ['Infecções bacterianas ou herpéticas faciais ativas', 'Glaucoma de ângulo fechado se aplicado periorbitário'], es: ['Infecciones faciales activas', 'Aplicación palpebral directa'] },
        relative: { pt: ['Exposição solar direta ou trabalho sob radiação UV intensa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ERRO DA QUEIMADURA DO SOL (ALERTA DO MELASMA): Usar o creme clareador com Fluocinolona (Tri-Luma) e esquecer de passar protetor solar no dia seguinte causa uma queimadura química solar gravíssima. A pele da face descama inteira e mancha de preto de forma irreversível por efeito rebote. Proteção solar absoluta é obrigatória.', es: 'EL PELIGRO DEL SOL CON RETINOIDES: El uso de la fórmula triple para melasma sensibiliza la epidermis de forma extrema. Exponerse al sol sin protector solar total al día siguiente provoca quemaduras químicas severas e hiperpigmentación rebote irreversible. Fotoprotección obligatoria.' }
      },
      references: {
        pt: 'Melasma Management Guidelines (SBD); FDA Product Information Tri-Luma; Manual de Terapêutica Tópica.',
        es: 'Guías de Manejo de Melasma de la SAD; Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── DESONIDA (763) ─────────────────────────────────────────────────── */
    "desonida": {
      name: { pt: 'Desonida', es: 'Desonida' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Baixa Potência / Classe VI Não-Halogenado', es: 'Corticosteroide Tópico de Baja Potencia / Clase VI No Halogenado' },
      indications: {
        pt: ['Dermatite Atópica e Eczema infantil na face ou dobras corporais', 'Dermatite Seborreica na face (sobrancelhas, barba, sulco nasal)', 'Dermatite de fraldas severa (uso curto controlado)'],
        es: ['Dermatitis Atópica infantil en rostro y pliegues', 'Dermatitis Seborreica facial', 'Dermatitis del pañal severa']
      },
      commercialNames: { br: ['Desonol', 'Adinos', 'Steron'], ar: ['Desonida Klonal', 'Microsona'] },
      presentation: { pt: ['Creme, Pomada ou Loção capilar contendo 0,5 mg/g (0,05%) de Desonida'], es: ['Crema, Ungüento o Loción al 0,05%'] },
      mechanism: {
        pt: 'O Protetor das Áreas Sensíveis. É um corticoide não-fluorado de baixa potência. Ele atua ativando as lipocortinas e diminuindo a inflamação tecidual, mas possui uma estrutura molecular leve que minimiza de forma marcante os efeitos de quebra de colágeno. Por isso, ele quase não causa atrofia na pele fina e possui absorção sistêmica segura, sendo a droga de escolha para a face e pediatria.',
        es: 'Corticosteroide no fluorado de baja potencia (Clase VI). Su diseño molecular ejerce actividad antiinflamatoria local moderada con un impacto mínimo sobre la síntesis de colágeno y elastina, reduciendo drásticamente el riesgo de inducir estrías o adelgazamiento dérmico en zonas de piel fina.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma camada fina sobre a lesão inflamatória, DUAS a TRÊS vezes ao dia, massageando de forma leve até desaparecer o creme.',
          es: 'Aplicar una pequeña cantidad sobre las lesiones 2 a 3 veces al día con un masaje suave.'
        },
        pediatric: {
          pt: 'Crianças e Bebês (> 3 meses): Aplicar uma pequena quantidade nas lesões, 1 a 2 vezes ao dia, por no máximo 5 a 7 dias seguidos.',
          es: 'Niños y lactantes (> 3 meses): 1 o 2 aplicaciones diarias por un máximo estricto de 7 días.'
        }
      },
      administration: { pt: ['Uso tópico externo. É o corticoide mais seguro para aplicação na pele da face e em áreas de dobras cutâneas (axilas, virilhas), mas o uso não deve ser prolongado sem diagnóstico.'], es: ['Uso tópico. Es el corticoide de elección para áreas de piel delicada (Rostro, párpados y pliegues), evitando el uso crónico indiscriminado.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Irritação cutânea leve transitória', 'Erupção tipo foliculite (espinhas de pelo)', 'Prurito ou eritema localizado'], es: ['Irritación local leve', 'Foliculitis transitoria', 'Prurito focal'] },
      dangerousAdverseEffects: { pt: ['Atrofia cutânea e telangiectasias (Raríssimo, ocorrendo apenas se uso contínuo abusivo por meses na face)'], es: ['Atrofia dérmica superficial (Solo en caso de abuso prolongado por meses)'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas virais ativas (Catapora, Herpes simples), fúngicas ou bacterianas não tratadas'], es: ['Infecciones de piel activas no tratadas por riesgo de diseminación infecciosa'] },
        relative: { pt: ['Menores de 3 meses de vida (falta de dados de segurança)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O EQUÍVOCO DO USO CONTÍNUO (A FALSA POMADA HIDRATANTE): Mãe de criança com dermatite atópica tende a achar que o Desonol é hidratante porque limpa a coceira do filho. Se ela usar o creme todos os dias por 6 meses na face da criança, a pele do rosto vai afinar, os vasinhos vão estourar e a criança sofrerá rebote inflamatório. Use apenas nas crises.', es: 'EL ERROR DEL USO PROLONGADO EN ATÓPICOS: Los padres suelen confundir la Desonida con una crema hidratante. Su uso diario continuo por meses en el rostro del lactante provoca fragilidad capilar y eritrosis perioral. Debe limitarse estrictamente a los brotes inflamatórios agudos.' }
      },
      references: {
        pt: 'Diretrizes de Dermatite Atópica da Sociedade Brasileira de Pediatria (SBP) e SBD; Pediatric Dermatology Guide; Bula Desonol.',
        es: 'Consenso de Dermatitis Atópica de la Sociedad Argentina de Pediatría (SAP); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── ALCLOMETASONA DIPROPIONATO (764) ───────────────────────────────── */
    "alclometasona": {
      name: { pt: 'Alclometasona (Dipropionato de)', es: 'Alclometasona (Dipropionato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Baixa-Média Potência / Classe V-VI', es: 'Corticosteroide Tópico de Baja-Media Potencia / Clase V-VI' },
      indications: {
        pt: ['Eczemas e dermatites atópicas leves em crianças a partir de 1 ano de idade', 'Queimaduras solares inflamatórias dolorosas', 'Picadas de insetos com reação local intensa'],
        es: ['Eczemas y dermatitis leves en niños > 1 año', 'Quemaduras solares inflamatorias', 'Picaduras de insectos con reacción local severa']
      },
      commercialNames: { br: ['Alclometasona (Importação)'], ar: ['Vaderm', 'Alclovate'] },
      presentation: { pt: ['Creme ou Pomada contendo 0,5 mg/g (0,05%) de Dipropionato de Alclometasona'], es: ['Crema o Ungüento al 0,05%'] },
      mechanism: {
        pt: 'Corticoide tópico de baixa potência. Possui um átomo de cloro posicionado estrategicamente para conferir atividade anti-inflamatória tópica com curtíssima meia-vida no sangue. Caso sofra absorção sistêmica percutânea, ele é quebrado quimicamente e destruído de forma imediata no sangue, impedindo a supressão do cortisol interno.',
        es: 'Corticosteroide de potencia baja-moderada. Su perfil molecular está diseñado para metabolizarse rápidamente en la circulación sistémica en caso de absorción percutánea, reduciendo al mínimo la capacidad de bloquear las glándulas suprarrenales y el eje endocrino del niño.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada sobre a área da pele inflamada, DUAS a TRÊS vezes ao dia, massageando levemente.',
          es: 'Aplicar una delgada película sobre la zona afectada 2 a 3 veces al día.'
        },
        pediatric: {
          pt: 'Crianças > 1 ano: Aplicar uma pequena quantidade nas lesões 1 ou 2 vezes ao dia, por no máximo 14 dias seguidos.',
          es: 'Niños > 1 año: 1 o 2 aplicaciones diarias por un máximo de 2 semanas.'
        }
      },
      administration: { pt: ['Uso tópico cutâneo externo. Evitar curativos oclusivos ou abafamento da área com plásticos para não induzir absorção excessiva anormal.'], es: ['Uso tópico. No aplicar bajo vendaje oclusivo o pañales plásticos ajustados.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Prurito e eritema transitório na aplicação', 'Ressecamento de pele', 'Foliculite leve'], es: ['Prurito y eritema transitorio', 'Sequedad cutánea', 'Foliculitis leve'] },
      dangerousAdverseEffects: { pt: ['Supressão adrenal sistêmica crônica (Apenas se usado de forma abusiva em áreas gigantes de pele ferida por meses)'], es: ['Supresión adrenal sistémica (Extremadamente raro, solo por abuso crónico extenso)'] },
      contraindications: {
        absolute: { pt: ['Infecções cutâneas não tratadas bacterianas, fúngicas ou virais ativas', 'Menores de 1 ano de idade'], es: ['Infecciones de piel activas no tratadas', 'Niños menores de 1 año'] },
        relative: { pt: ['Aplicação em feridas abertas sangrantes extensas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O CORTICOIDE DA PEDIATRIA SEGURA: A Alclometasona é considerada um dos corticoides tópicos mais seguros do mundo para a pediatria, junto com a Desonida. Sua destruição rápida no sangue garante que, mesmo que a mãe aplique um pouco a mais, a medula e o crescimento do bebê não sofrerão travamento hormonal.', es: 'EL PERFIL DE SEGURIDAD PEDIÁTRICA: Se destaca por sufrir una degradación metabólica instantánea tras ingresar al torrente sanguíneo, lo que la convierte en uno de los corticosteroides tópicos más seguros para el tratamiento a corto plazo de eczemas infantiles.' }
      },
      references: {
        pt: 'FDA Label Alclovate cream; Pediatric Dermatology Guidelines; Manual de Terapêutica Tópica.',
        es: 'FDA Prescribing Information; Ficha Técnica CIMA Alclometasona; Manual de Pediatría del Hospital Garrahan.'
      }
    },

    /* ── DIFLUCORTOLONA VALERATO (765) ──────────────────────────────────── */
    "diflucortolona": {
      name: { pt: 'Diflucortolona (Valerato de)', es: 'Diflucortolona (Valerato de)' },
      category: 'dermatologia',
      class: { pt: 'Corticoide Tópico de Potência Alta / Classe II Superior', es: 'Corticosteroide Tópico de Potencia Alta / Clase II Superior' },
      indications: {
        pt: ['Eczemas graves e agudos chorosos ou secos rebeldes', 'Dermatite de Contato severa ocupacional', 'Psoríase palmoplantar (mãos e pés) com rachaduras e crostas grossas'],
        es: ['Eczemas graves y agudos rebeldes', 'Dermatitis de Contacto severa', 'Psoriasis palmoplantar con hiperqueratosis']
      },
      commercialNames: { br: ['Nerisone (Importação hospitalar)'], ar: ['Nerisona'] },
      presentation: { pt: ['Creme, Pomada ou Creme Oleoso contendo 1 mg/g (0,1%) de Valerato de Diflucortolona'], es: ['Crema, Pomada o Ungüento al 0,1%'] },
      mechanism: {
        pt: 'O Perfurador de Crostas Grossas. É um corticoide bifluorado de alta potência. Sua estrutura molecular confere uma penetração profunda e agressiva através das barreiras de queratina grossa da pele das palmas das mãos e solas dos pés. Ele bloqueia o recrutamento de macrófagos, estabiliza os microvasos e extingue os quadros inflamatórios descamativos secos e graves em poucos dias.',
        es: 'Corticosteroide fluorado de alta potencia (Clase II). Su estructura química de alta lipofilia le otorga una capacidad excepcional para atravesar la capa córnea hiperqueratósica gruesa de las palmas y plantas de los pies, suprimiendo la infiltración leucocitaria y disminuyendo el edema y liquenificación.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada sobre as lesões graves, DUAS vezes ao dia. Limitar o curso de tratamento a no máximo 2 a 3 semanas seguidas.',
          es: 'Aplicar una capa delgada sobre las lesiones graves 1 o 2 veces al día. Curso de tratamiento severamente limitado a un máximo de 2-3 semanas.'
        },
        pediatric: {
          pt: 'CONTRAINDICADO em menores de 12 anos pelo alto risco de atrofia cutânea e absorção corporal sistêmica.',
          es: 'CONTRAINDICADO en menores de 12 años por alta potencia.'
        }
      },
      administration: { pt: ['Uso tópico externo. O creme oleoso é indicado para lesões extremamente secas e descamativas crônicas; o creme comum é indicado para fases agudas e chorosas. NUNCA aplicar na face.'], es: ['Uso tópico. La pomada oleosa se reserva para lesiones secas crónicas hiperqueratósicas. Prohibido aplicar en rostro.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação tópica, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Sensação de queimação local intensa', 'Atrofia local e estrias na pele', 'Telangiectasias focal'], es: ['Ardor y escozor local intenso', 'Atrofia epidérmica focal', 'Telangiectasias'] },
      dangerousAdverseEffects: { pt: ['Supressão do eixo adrenal sistêmico com insuficiência suprarrenal aguda rebote se interrompido de uma vez após uso abusivo extenso'], es: ['Crisis de insuficiencia suprarrenal aguda por supresión hormonal si se abusa en áreas extensas'] },
      contraindications: {
        absolute: { pt: ['Menores de 12 anos de idade', 'Lesões cutâneas tuberculosas ou sifilíticas ativas', 'Infecções herpéticas ou por varicela de pele'], es: ['Niños menores de 12 años', 'Infecciones de piel sifilíticas, tuberculosas o virales activas'] },
        relative: { pt: ['Uso sob bandagens oclusivas estritas (eleva o risco de atrofia ao extremo)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA RACHADURA DA MÃO (O COURO DO NERISONE): A Nerisona é excelente para limpar aquela alergia grossa da palma da mão que descama e coça. Mas atenção: ela é forte feito o Clobetasol. Se o paciente usar no rosto para clarear mancha por erro, vai derreter o colágeno da face, deixando a pele fina feito plástico e cheia de rugas vermelhas irreversíveis.', es: 'ALERTA DE ALTA POTENCIA: Posee un perfil de penetración tisular sumamente agresivo. Su uso por error en la piel del rostro destruye el colágeno local en pocas semanas, provocando atrofia irreversible con piel traslúcida y rosácea esteroidea de difícil manejo.' }
      },
      references: {
        pt: 'Nerisone Product Safety Information; Consenso de Eczema Ocupacional da SBD; Manual de Dermatologia Prática.',
        es: 'Ficha Técnica Nerisona (Agencia Española de Medicamentos CIMA); Manual de Dermatología de Fitzpatrick.'
      }
    },

    /* ── PERÓXIDO DE BENZOÍLA (766) ─────────────────────────────────────── */
    "peroxido_de_benzoila": {
      name: { pt: 'Peróxido de Benzoíla', es: 'Peróxido de Benzóilo' },
      category: 'dermatologia',
      class: { pt: 'Agente Antiacneico Tópico Queratolítico / Gerador de Oxigênio Radicalar', es: 'Agente Antiacneico Tópico Queratolítico / Generador de Oxígeno Radicalario' },
      indications: {
        pt: ['Tratamento tópico da Acne Vulgar leve a moderada (graus I e II, com cravos e espinhas inflamatórias)'],
        es: ['Tratamiento tópico del Acné Vulgar leve a moderado (grados I y II)']
      },
      commercialNames: { br: ['Benzac AC', 'Solugel', 'Acneol'], ar: ['Benzac', 'Acneclin B', 'Peróxido de Benzóilo Beta'] },
      presentation: { pt: ['Gel ou Gel de limpeza nas concentrações de 2,5%, 5% e 10%'], es: ['Gel tópico al 2,5%, 5% y 10%'] },
      mechanism: {
        pt: 'O Asfixiador de Bactérias da Acne. Ao ser aplicado na pele, ele penetra no folículo pilossebáceo e libera Oxigênio reativo livre dentro do poro entupido. A bactéria causadora da acne, o Cutibacterium acnes, é uma bactéria anaeróbia estrita (ela odeia oxigênio e morre na sua presença). O oxigênio oxida as proteínas da bactéria destruindo-a instantaneamente, além de ter efeito queratolítico que descama o cravo e limpa o poro.',
        es: 'Agente oxidante potente que penetra en el folículo pilosebáceo y libera especies reactivas de oxígeno libres. Ejerce una acción bactericida letal directa contra Cutibacterium acnes (organismo anaerobio). Su acción oxidativa degrada las proteínas bacterianas sin inducir resistencia antibiótica, poseyendo además efectos queratolíticos que disuelven el tapón del comedón.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma fina camada do gel sobre as áreas afetadas pela acne, UMA a DUAS vezes ao dia. Iniciar sempre com a menor concentração (2,5%) à noite para testar a sensibilidade da pele do paciente.',
          es: 'Aplicar una capa fina sobre las zonas afectadas por el acné 1 o 2 veces al día. Iniciar con concentración al 2,5% por la noche.'
        },
        pediatric: {
          pt: 'Aprovado para uso em adolescentes a partir de 12 anos de idade nas mesmas doses do adulto.',
          es: 'Aprobado en pacientes >= 12 años.'
        }
      },
      administration: { pt: ['Uso tópico facial/corporal. Lavar o rosto com sabonete suave antes de aplicar, secar bem a pele e passar o gel. EVITAR aplicar nos cantos do nariz, boca e pálpebras devido à irritação severa. OBRIGATÓRIO usar filtro solar de dia.'], es: ['Uso tópico. Aplicar sobre piel limpia y completamente seca. Evitar mucosas, ojos y comisuras nasales. Uso de protector solar diurno obligatorio.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem absorção sistêmica, sem ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['DESCAMAÇÃO INTENSA e ressecamento da pele (efeito queratolítico esperado)', 'Eritema (vermelhidão) e queimação local', 'Prurito e dermatite de contato por irritação primária'], es: ['Descamación intensa y sequedad cutánea', 'Eritema y sensación de ardor local', 'Prurito'] },
      dangerousAdverseEffects: { pt: ['Dermatite Alérgica de Contato severa com bolhas e inchaço bipalpebral por hipersensibilidade de contato crônica (~2% dos casos)'], es: ['Dermatitis por hipersensibilidad de contacto grave con edema bipalpebral y eccema agudo'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida ao peróxido de benzoíla', 'Pele ferida, queimada ou com eczema ativo'], es: ['Hipersensibilidad conocida al fármaco', 'Piel con eccema abierto o quemaduras'] },
        relative: { pt: ['Exposição à radiação ultravioleta ou bronzeamento artificial ativo (risco de queimadura severa)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA DA TOALHA MANCHADA (O EFEITO MANCHADOR): O Peróxido de Benzoíla é um alvejante químico potente. Se o paciente passar o gel no rosto e deitar em cima de uma fronha colorida, ou se secar numa toalha azul após lavar o rosto com o produto, o tecido vai MANCHAR e descolorir na mesma hora, ficando cheio de manchas brancas e amarelas. Oriente o uso de roupas de cama brancas.', es: 'ALERTA DE DECOLORACIÓN DE TEXTILES: Es un potente agente blanqueador químico. Si el paciente entra en contacto con sábanas, toallas o ropa de color mientras el gel está en la piel, decolorará los tejidos instantáneamente dejando manchas blancas. Se recomienda el uso de textiles blancos durante el tratamiento.' }
      },
      references: {
        pt: 'Guidelines of Care for the Management of Acne Vulgaris (AAD); Consenso Brasileiro de Acne SBD; Manual de Formulação Tópica.',
        es: 'Guidelines of Care for the Management of Acne Vulgaris (AAD); Guías de Consenso de Acné de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── ADAPALENO (767) ────────────────────────────────────────────────── */
    "adapaleno": {
      name: { pt: 'Adapaleno', es: 'Adapaleno' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Tópico de Terceira Geração / Modulador da Queratinização', es: 'Retinoide Tópico de Tercera Generación / Modulador de la Queratinización' },
      indications: {
        pt: ['Tratamento tópico da Acne Vulgar comedoniana e inflamatória (cravos e espinhas)', 'Manejo de queratose pilar e prevenção de microcomedões'],
        es: ['Tratamiento del Acné Vulgar con predominio de comedones y pápulas', 'Queratosis pilar']
      },
      commercialNames: { br: ['Differin', 'Adaferin', 'Epiduo (Assoc)'], ar: ['Differin', 'Adapalene Beta', 'Epiduo'] },
      presentation: { pt: ['Gel ou Creme contendo 1 mg/g (0,1%) ou 3 mg/g (0,3%) de Adapaleno'], es: ['Gel o Crema al 0,1% y 0,3%'] },
      mechanism: {
        pt: 'O Desentupidor de Poros Inteligente. É um derivado do ácido naftoico com atividade retinoide. Ele liga-se especificamente aos receptores nucleares de ácido retinoico tipo gama (RAR-gama) expressos nos queratinócitos da pele. Ao ligar-se ali, ele reprograma a célula: obriga o poro a descamar de forma fina e organizada (normaliza a diferenciação folicular), impedindo que as células mortas grudem no sebo para formar o cravo (comedomedólise), além de ser um potente anti-inflamatório.',
        es: 'Derivado del ácido naftoico con actividad retinoide. Se une de forma selectiva a los receptores nucleares de ácido retinoico tipo gamma (RAR-gamma). Modula la diferenciación de las células epiteliales foliculares, disminuyendo la cohesividad de los queratinocitos. Esto impide la formación del microcomedón (tapón) y ejerce una potente acción antiinflamatoria celular.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma quantidade do tamanho de uma ervilha sobre todo o rosto afetado, UMA VEZ ao dia, estritamente À NOITE, antes de dormir, após lavar a pele.',
          es: 'Aplicar una pequeña cantidad (del tamaño de un guisante) sobre el rostro limpio 1 VEZ AL DÍA, estrictamente por la NOCHE antes de acostarse.'
        },
        pediatric: {
          pt: 'Aprovado para crianças a partir de 12 anos de idade nas apresentações de gel 0,1%.',
          es: 'Aprobado en pacientes >= 12 años.'
        }
      },
      administration: { pt: ['Aplicar na pele do rosto perfeitamente SECA (aguardar 15 minutos após lavar). Passar uma camada fina, evitando os olhos, pálpebras e cantos da boca. É MANDATÓRIO retirar o produto pela manhã lavando o rosto e aplicar PROTETOR SOLAR FPS > 30 diário, devido ao afinamento da camada córnea e risco de queimaduras.'], es: ['Uso nocturno exclusivo. Aplicar sobre piel totalmente seca. Por la mañana, lavar el rostro y aplicar protector solar FPS > 30 obligatorio por adelgazamiento epidérmico protector.'] },
      renalAdjustment: { required: false, message: { pt: 'Absorção cutânea insignificante, sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['ERITEMA E DESCAMAÇÃO FACIAL (Retinização da pele nas primeiras 2 semanas)', 'Sensação de queimação, ardência e picadas na pele', 'Ressecamento cutâneo extremo'], es: ['Eritema, descamación y sequedad facial (Proceso normal de retinización las primeras semanas)', 'Sensación de escozor y tirantez'] },
      dangerousAdverseEffects: { pt: ['Dermatite retinoide severa com descamação em carne viva', 'Hiperpigmentação pós-inflamatória se houver exposição solar sem proteção'], es: ['Dermatitis por retinoides severa', 'Manchas oscuras faciales por exposición solar inadvertida'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Embora a absorção tópica seja minúscula, a classe dos retinoides é contraindicada formalmente por segurança teratogênica)', 'Pele queimada de sol ou com feridas abertas'], es: ['EMBARAZO (Contraindicación absoluta por seguridad teratogénica de clase)', 'Piel con eccema agudo o heridas'] },
        relative: { pt: ['Uso concomitante com depilação com cera na face (a pele rasga junto com a cera)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A SÍNDROME DA RETINIZAÇÃO (O PIOR ANTES DE MELHORAR): Explique ao seu paciente que nas primeiras 2 semanas usando Adapaleno a pele dele vai piorar. O rosto vai descamar, arder com qualquer hidratante e podem brotar novas espinhas que estavam escondidas (Purging). Avise para ele NÃO parar o tratamento: a pele está se renovando e o efeito de limpeza real surge após 4 semanas.', es: 'ALERTA DEL EFECTO PURGING E RETINIZACIÓN: Durante las primeras 2 semanas, el acné puede exacerbarse y el rostro descamará y arderá (Purging). Es un proceso normal de renovación folicular. Se debe advertir al paciente para evitar el abandono prematuro; la mejoría inicia al mes.' }
      },
      references: {
        pt: 'Differin Global Safety Profile; Diretrizes de Acne da AAD; Manual de Cosmiatria e Dermatologia da SBD.',
        es: 'Differin Global Safety Profile; Guías de Consenso de Acné de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── TRETINOÍNA (768) ───────────────────────────────────────────────── */
    "tretinoina": {
      name: { pt: 'Tretinoína (Ácido Retinoico)', es: 'Tretinoína (Ácido Retinoico)' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Tópico de Primeira Geração / Renovador Celular e Antienvelhecimento', es: 'Retinoide Tópico de Primera Generación / Renovador Celular y Antienvejecimiento' },
      indications: {
        pt: ['Tratamento da Acne Vulgar (Graus I, II e III)', 'Tratamento do fotoenvelhecimento cutâneo (redução de rugas finas, manchas senis e aspereza da pele)', 'Tratamento de estrias vermelhas corporais iniciais (estrias rubras)'],
        es: ['Tratamiento del Acné Vulgar comedoniano e inflamatorio', 'Fotoenvejecimiento cutáneo (Arrugas finas, hiperpigmentación solar, rugosidad)', 'Estrías rubras corporales']
      },
      commercialNames: { br: ['Vitanol-A', 'Retacnyl', 'Suavicid (Assoc)'], ar: ['Retin-A', 'Neatret', 'Tretinoina Beta'] },
      presentation: { pt: ['Creme ou Gel nas concentrações de 0,025%, 0,05% e 0,1%'], es: ['Crema o Gel al 0,025%, 0,05% y 0,1%'] },
      mechanism: {
        pt: 'O Renovador Celular Supremo. É a forma ácida pura da Vitamina A. Liga-se diretamente aos receptores nucleares RAR e RXR dos queratinócitos. Isso dispara a transcrição de genes que aceleram o ciclo de renovação da pele (a pele descama a camada velha de cima e fabrica células novas de baixo em velocidade triplicada). No colágeno, ela bloqueia as enzimas metaloproteinases que destroem a derme e estimula os fibroblastos a fabricarem COLÁGENO NOVO tipo I, alisando rugas.',
        es: 'Forma ácida pura de la Vitamina A. Se une a los receptores nucleares RAR y RXR, modulando la expresión génica. Acelera la tasa de recambio de los queratinocitos (mitosis epidérmica), promoviendo la expulsión del comedón. En la dermis, estimula la síntesis de colágeno nuevo tipo I y frena la degradación enzimática de la matriz extracelular, revirtiendo el fotoenvejecimiento.'
      },
      dose: {
        adult: {
          pt: 'Uso Tópico: Aplicar uma camada ultra-fina (tamanho de um grão de ervilha para o rosto todo) UMA VEZ ao dia, estritamente À NOITE antes de deitar. Iniciar com a menor concentração (0,025%) em dias alternados nas primeiras 2 semanas.',
          es: 'Aplicar una capa milimétrica (tamaño de un guisante) sobre todo el rostro 1 VEZ AL DÍA, estrictamente por la NOCHE. Iniciar 2-3 veces por semana para desarrollar tolerancia epidérmica.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado em menores de 12 anos devido ao risco de irritação grave.',
          es: 'No recomendado en niños menores de 12 años.'
        }
      },
      administration: { pt: ['Aplicar estritamente com o rosto seco e limpo à noite. Lavar obrigatoriamente o rosto pela manhã ao acordar com sabonete neutro para remover os resíduos do ácido. USO DIÁRIO OBRIGATÓRIO DE FILTRO SOLAR FPS > 50. O ácido retinoico queima e mancha a pele na presença de luz solar direta.'], es: ['Uso nocturno exclusivo. Retirar por la mañana lavando el rostro por completo. Uso obligatorio de protector solar de alta potencia FPS > 50 continuo por riesgo de quemadura solar grave.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local tópica, sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Dermatite Retinoide marcada (vermelhidão, descamação intensa em placas, repuxamento da pele e coceira que duram 2-3 semanas)', 'Hipersensibilidade ao toque e a cosméticos perfumados', 'Ressecamento labial'], es: ['Dermatitis por retinoides (Eritema, descamación en placas, tirantez y prurito intenso inicial)', 'Hipersensibilidad cutánea al tacto'] },
      dangerousAdverseEffects: { pt: ['Queimadura química solar severa com bolhas e manchas escuras permanentes (hiperpigmentação pós-inflamatória por exposição solar descuidada)'], es: ['Hiperpigmentación postinflamatoria severa irreversible por exposición solar sin fotoprotección'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ (Contraindicação absoluta de classe; risco de teratogenicidade e malformação fetal grave caso haja absorção)', 'Pele com queimaduras, feridas abertas ou dermatite ativa'], es: ['EMBARAZO (Contraindicación absoluta por riesgo teratogénico de los retinoides)', 'Piel con heridas abiertas o eccema agudo'] },
        relative: { pt: ['Histórico de pele extremamente reativa com rosácea eritêmato-telangiectásica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ALERTA MÁXIMO DA GRAVIDEZ (NUNCA RECEITAR GRÁVIDA): O Ácido Retinoico é um irmão químico da Isotretinoína (Roacutan). Embora a quantidade que entra no sangue pela pele seja muito pequena, existe risco teórico de causar malformações monstruosas no feto (embriopatia por ácido retinoico). Se a paciente engravidar, suspenda o creme imediatamente e avise o obstetra.', es: 'EL ALERTA TERATOGÉNICO ABSOLUTO: Comparte linaje químico con la isotretinoína. Aunque la absorción percutánea es baja, está terminantemente CONTRAINDICADO en el embarazo debido al riesgo teórico de inducir malformaciones congénitas craneofaciales y cardíacas en el feto. Suspender de inmediato si se sospecha gestación.' }
      },
      references: {
        pt: 'Retinoids in Dermatology Review; Diretrizes de Rejuvenescimento e Acne da SBD; Manual de Farmacologia Cutânea de Goodman & Gilman.',
        es: 'Retinoids in Dermatology Review; Guías de Manejo del Fotoenvejecimiento de la Sociedad Argentina de Dermatología.'
      }
    },

    /* ── ISOTRETINOÍNA (769) ────────────────────────────────────────────── */
    "isotretinoina": {
      name: { pt: 'Isotretinoína (Via Sistêmica)', es: 'Isotretinoína (Vía Sistémica)' },
      category: 'dermatologia',
      class: { pt: 'Retinoide Sistêmico Potente / Inibidor Profundo da Glândula Sebácea', es: 'Retinoide Sistémico Potente / Inhibidor Profundo de la Glándula Sebácea' },
      indications: {
        pt: ['Acne Vulgar grave nódulo-cística recalcitrante (Graus III, IV e V) que não responde a antibióticos orais e cremes', 'Acne com alto risco de cicatrizes definitivas deformantes (cicatrizes em picareta)', 'Tratamento de Hidradenite Supurativa severa ou Rosácea fulminante'],
        es: ['Acné Vulgar grave nóduloquístico recalcitrante (Grados III, IV y V) resistente a terapias convencionales', 'Acné con alto riesgo de cicatrices deformantes']
      },
      commercialNames: { br: ['Roacutan', 'Isotretina', 'Acnova'], ar: ['Roacutan', 'Acnotren', 'Isocutan'] },
      presentation: { pt: ['Cápsulas gelatinosas moles 10 mg e 20 mg'], es: ['Cápsulas blandas 10 mg y 20 mg'] },
      mechanism: {
        pt: 'A Atrofia Cirúrgica da Espinha. É o único remédio do mundo capaz de curar a acne permanentemente. Ela entra no fígado, viaja pelo sangue e causa a APOPTOSE (suicídio celular programado) das células das glândulas sebáceas de todo o corpo. O tamanho da glândula sebácea encolhe em até 90% e a produção de sebo cai a zero. Sem gordura no poro, a bactéria da acne morre de fome e os cravos desaparecem para sempre, alterando o microambiente da pele.',
        es: 'Isómero sintético del ácido retinoico. Es el único fármaco que actúa sobre todos los factores patogénicos del acné: induce la apoptosis de las células de la glándula sebácea, disminuyendo su tamaño un 90% y reduciendo la producción de sebo a niveles cercanos a cero. Esto suprime la colonización de C. acnes por privación de sustrato lipídico.'
      },
      dose: {
        adult: {
          pt: 'Dose calculada por peso corporal: Iniciar com 0,5 mg/kg/dia via oral, progredindo para 1,0 mg/kg/dia conforme tolerabilidade. O tratamento DEVE continuar até atingir uma DOSE ACUMULADA TOTAL de 120 mg a 150 mg/kg de peso (geralmente dura de 6 a 8 meses) para evitar o retorno da acne.',
          es: 'Dosis por peso corporal: Iniciar con 0,5 mg/kg/día vía oral, escalonando a 1,0 mg/kg/día. El tratamiento DEBE mantenerse hasta alcanzar una DOSIS ACUMULADA TOTAL de 120 a 150 mg/kg de peso corporal (duración de 6 a 9 meses) para asegurar la tasa de curación.'
        },
        pediatric: {
          pt: 'Aprovado para adolescentes a partir de 12 anos de idade, seguindo o mesmo cálculo de dose acumulada por peso do adulto.',
          es: 'Aprobado en pacientes >= 12 años bajo el mismo cálculo de dosis acumulada por kilo.'
        }
      },
      administration: { pt: ['DEVE SER INGERIDA OBRIGATORIAMENTE JUNTO COM UMA REFEIÇÃO PESADA/GORDUROSA (Almoço ou Jantar). A absorção da isotretinoína depende 100% da presença de gordura no estômago; tomar em jejum corta o efeito do remédio pela metade, estragando o tratamento.'], es: ['DEBE INGERIRSE OBLIGATORIAMENTE CON UNA COMIDA COMPLETA O GRASA (Almuerzo o Cena). Su absorción lipofílica se duplica en presencia de alimentos; en ayunas fracasa el tratamiento.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, monitorar eletrólitos basais.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CRÍTICO. Metabolizada intensamente no fígado. Exige a realização de exames de TGO, TGP, Colesterol total e Triglicerídeos basais, após 1 mês e a cada 3 meses. Se as transaminases subirem acima de 3 vezes o normal ou os triglicerídeos passarem de 500 mg/dL, o remédio deve ser suspenso imediatamente.', es: 'CRÍTICO. Contraindicado en insuficiencia hepática. Exige control mensual obligatorio de transaminasas y perfil lipídico (Triglicéridos). Suspender de inmediato si transaminasas aumentan > 3 veces el límite normal o triglicéridos > 500 mg/dL.' } },
      commonAdverseEffects: { pt: ['QUEILITE SEVERA (Secura extrema nos lábios com rachaduras e sangramento que afeta 100% dos pacientes)', 'Xerose cutânea generalizada (a pele coça e descama)', 'Xeroftalmia (olho seco vermelho que exige uso de colírio de lágrima artificial)', 'Ressecamento nasal com sangramento (Epistaxe)'], es: ['QUEILITIS SEVERA (Sequedad extrema con fisuras y sangrado labial en el 100% de los casos)', 'Xerosis cutánea (piel seca descamativa generalizada)', 'Xeroftalmia (ojo seco rojo)', 'Epistaxis (sangrado nasal por sequedad)'] },
      dangerousAdverseEffects: { pt: ['TERATOGENICIDADE EXTREMA MONSTRUOSA (Causa deformidades severas no crânio, cérebro e coração do feto se a paciente engravidar - Alerta Máximo Caixa Preta)', 'Hipertrigliceridemia severa com risco de PANCREATITE AGUDA LETAL (se triglicerídeos > 800 mg/dL)', 'Pseudotumor Cerebral (Hipertensão intracraniana benigna se misturado com tetraciclina)'], es: ['TERATOGENICIDAD SEVERA EMBRIOPÁTICA (Malformaciones craneofaciales y cardíacas fetales incompatibles con la vida - Caja Negra)', 'Pancreatitis Aguda Letal por hipertrigliceridemia severa', 'Hipertensión intracraneal benigna (Pseudotumor cerebral)'] },
      contraindications: {
        absolute: { pt: ['GRAVIDEZ OU MULHER EM IDADE FÉRTIL QUE NÃO ESTEJA USANDO DOIS MÉTODOS ANTICONCEPCIONAIS EFICAZES', 'Insuficiência hepática grave ou hiperlipidemia descontrolada severa', 'Uso concomitante com Tetraciclinas (risco de Pseudotumor Cerebral)'], es: ['EMBARAZO O MUJERES EN EDAD FÉRTIL SIN ANTICONCEPCIÓN DOBLE ESTRICTA', 'Insuficiencia hepática o hiperlipidemia severa', 'Uso concomitante con Tetraciclinas'] },
        relative: { pt: ['Histórico de depressão maior ou ideação suicida instável (monitorar de perto o humor)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A CAIXA PRETA DOS DOIS ANTICONCEPCIONAIS E O TERMO ASSINADO: A Isotretinoína é o teratógeno mais violento da medicina. Uma única cápsula tomada por uma mulher grávida de poucos dias deforma o bebê de forma monstruosa e irreversível. É OBRIGATÓRIO por lei que mulheres em idade fértil usem DOIS métodos anticoncepcionais (ex: Pílula + Camisinha ou DIU + Pílula) e assinem o Termo de Consentimento com o médico antes de pegar o remédio na farmácia.', es: 'ALERTA DE CAJA NEGRA TERATOGÉNICA: Es el teratógeno más potente de la farmacología. Una sola cápsula ingerida durante la gestación causa malformaciones congénitas monstruosas incompatibles con la vida. Por ley, las mujeres en edad fértil DEBEN utilizar DOBLE método anticonceptivo estricto (ej: DIU + Preservativo) y firmar un consentimiento informado con test de embarazo negativo mensual.' }
      },
      references: {
        pt: 'Programa de Controle de Teratogenicidade da Isotretinoína ANVISA; FDA iPLEDGE Program Guidelines; Diretrizes de Acne da SBD 2024.',
        es: 'FDA iPLEDGE Program; Guías del Sistema de Vigilancia de Isotretinoína de la SAD; Manual de Terapéutica Dermatológica.'
      }
    }

  }); /* fim Object.assign ALERGIA_IMUNOLOGIA_DRUGS_DB — BUILD 446 (triancinolona_topica + clobetasol + fluocinolona + desonida + alclometasona + diflucortolona + peroxido_de_benzoila + adapaleno + tretinoina + isotretinoina — Corticoides Tópicos/Retinoides Acneicos/Moduladores Barreira Cutânea) */

})();
