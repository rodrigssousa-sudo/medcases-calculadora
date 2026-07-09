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
    }

  }); /* fim Object.assign ALERGIA_IMUNOLOGIA_DRUGS_DB — BUILD 394 Lote 1
         (Desloratadina + Cetirizina + Levocetirizina + Fexofenadina + Ebastina) */

})();
