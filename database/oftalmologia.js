/* =====================================================================
   MedCases Pro — Módulo: OFTALMOLOGIA E TERAPÊUTICA OCULAR
   Expõe: window.OFTALMOLOGIA_DRUGS_DB
   Schema: Object.assign (Padrão Ouro) — IIFE com guard duplo
   BUILD 457-OFTAL (2026-07-11) — Inauguração do módulo
   4 fármacos: Antiglaucomatosos (timolol_colirio, brimonidina, latanoprosta)
               Anti-VEGF Intravítreo (aflibercepte)
   Seção: OFTALMOLOGIA E TERAPÊUTICA OCULAR DE ALTA VIGILÂNCIA
===================================================================== */
(function () {
  'use strict';

  /* ── Guard Duplo Padrão Ouro ─────────────────────────────────────── */
  if (typeof window.OFTALMOLOGIA_DRUGS_DB !== 'object' ||
      window.OFTALMOLOGIA_DRUGS_DB === null ||
      Array.isArray(window.OFTALMOLOGIA_DRUGS_DB)) {
    window.OFTALMOLOGIA_DRUGS_DB = {};
  }
  if (typeof window.OFTALMOLOGIA_DRUGS_DB !== 'object' ||
      window.OFTALMOLOGIA_DRUGS_DB === null) return;

  /* ── Helper de tradução inline ───────────────────────────────────── */
  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  /* ── OFTALMOLOGIA E TERAPÊUTICA OCULAR DE ALTA VIGILÂNCIA ─────── */
  Object.assign(window.OFTALMOLOGIA_DRUGS_DB, {

    /* ── TIMOLOL (Betabloqueador Ocular) ─────────────────────────── */
    "timolol_colirio": {
      name: { pt: 'Maleato de Timolol (Colírio)', es: 'Maleato de Timolol (Colirio)' },
      category: 'oftalmologia',
      class: { pt: 'Betabloqueador Não-Seletivo Ocular / Antiglaucomatoso', es: 'Betabloqueante No Selectivo Ocular / Antiglaucomatoso' },
      indications: {
        pt: ['Redução da Pressão Intraocular (PIO) elevada em pacientes com Glaucoma de Ângulo Aberto', 'Tratamento de Hipertensão Ocular isolada'],
        es: ['Reducción de la Presión Intraocular (PIO) en Glaucoma de Ángulo Abierto', 'Hipertensión Ocular']
      },
      commercialNames: { br: ['Glautimol', 'Timoptol', 'Timolol (SUS)'], ar: ['Pro visual', 'Plostim', 'Timolol Poen'] },
      presentation: { pt: ['Solução oftálmica estéril (colírio) 0,25% e 0,5% (frasco com 5 mL)'], es: ['Solución oftálmica (colirio) al 0,25% y 0,5%'] },
      mechanism: {
        pt: 'O Repressor de Humor Aquoso. É um bloqueador potente não-seletivo dos receptores beta-1 e beta-2 adrenérgicos. Aplicado no olho, ele penetra na câmara anterior e bloqueia os receptores beta localizados nos processos ciliares do olho. Esse bloqueio desativa a produção ativa de AMP cíclico celular, diminuindo drasticamente a secreção e fabricação de Humor Aquoso. Menos líquido dentro do olho faz a pressão intraocular (PIO) despencar rapidamente.',
        es: 'Bloqueante receptor beta-adrenérgico no selectivo (beta-1 y beta-2). Actúa localmente en los procesos ciliares del ojo, donde disminuye la síntesis de AMP cíclico. Esto suprime de forma drástica la producción y secreción del humor acuoso, reduciendo la presión intraocular sin afectar la acomodación ni el tamaño pupilar.'
      },
      dose: {
        adult: {
          pt: 'Glaucoma/Hipertensão Ocular: Pingar 1 gota do colírio a 0,5% no olho afetado, DUAS VEZES ao dia (de 12/12 horas). Se a PIO estabilizar na meta, a dose pode ser reduzida para 1 gota 1 vez ao dia.',
          es: 'Pingar 1 gota en el ojo afectado cada 12 horas (solución al 0,5%). Si se controla la PIO, se puede espaciar a una única toma diaria.'
        },
        pediatric: {
          pt: 'Uso não recomendado ou aprovado de rotina em bebês e lactantes devido ao risco de apneia central e bradicardia (VER ALERTAS).',
          es: 'Evitar en neonatos y lactantes por riesgo de bradicardia y apnea central.'
        }
      },
      administration: { pt: ['USO EXCLUSIVAMENTE TÓPICO OCULAR. Lavar as mãos, inclinar a cabeça para trás e puxar a pálpebra inferior. Pingar exatamente 1 gota sem tocar a ponta do frasco no olho. CRÍTICO: O paciente DEVE realizar a OCLUSÃO NASOLACRIMAL (pressionar o canto interno do olho com o dedo indicador) por 2 minutos cravados após pingar para proibir o remédio de descer para o sangue pelo ducto lacrimal (VER ALERTAS).'], es: ['Uso oftálmico. CRÍTICO: Realizar OCLUSIÓN NASOLACRIMAL (presionar el saco lagrimal en el canto interno del ojo) durante 2 minutos seguidos post-aplicación para bloquear el paso del fármaco a la mucosa nasal y evitar la absorción sistémica beta-bloqueante.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local, sem necessidade de ajuste por filtragem glomerular.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Ardor, queimação e hiperemia (olho vermelho) transitórios logo após pingar', 'Ressecamento ocular e ceratite superficial', 'Visão borrada temporária'], es: ['Ardor, escozor e hiperemia conjuntival transitoria', 'Ojo seco', 'Visión borrosa inicial'] },
      dangerousAdverseEffects: { pt: ['BRONCOESPASMO SEVERO ASMÁTICO FULMINANTE (choque respiratório por bloqueio beta-2 pulmonar via absorção nasolacrimal — VER ALERTAS)', 'BRADICARDIA SINUSAL EXTREMA E BLOQUEIO AV (desmaio e síncope por absorção sistêmica)', 'Mascaramento de episódios hipoglicêmicos em diabéticos insulinodependentes'], es: ['BRONCOESPASMO ASMATIFORME GRAVE (Bloqueo beta-2 pulmonar sistémico mortal por absorción nasolacrimal)', 'BRADICARDIA SINUSAL CRÍTICA / Bloqueo AV de alto grado', 'Enmascaramiento de hipoglucemias'] },
      contraindications: {
        absolute: { pt: ['HISTÓRICO DE ASMA BRÔNQUICA OU DPOC SEVERA (Risco proibitivo de broncoespasmo fatal por colírio)', 'Bradicardia sinusal grave (< 50 bpm), Bloqueio AV de 2º ou 3º grau, Choque cardiogênico'], es: ['ASMA BRONQUIAL O EPOC SEVERA (Contraindicación absoluta por riesgo de muerte respiratoria)', 'Bradicardia sinusal (< 50 bpm) o Bloqueo AV avanzado'] },
        relative: { pt: ['Uso concomitante com betabloqueadores orais (Propranolol, Carvedilol, Metoprolol) — efeito beta-bloqueante somado invisível'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O COLÍRIO QUE INFLAMA O PULMÃO E PARA O CORAÇÃO (A ARMADILHA DO DUCTO NASOLACRIMAL): O colírio de Timolol passa direto pelo canal da lágrima no canto do olho, escorre pela mucosa do nariz e entra no sangue INTEIRO, sem passar pelo fígado. Se você pingar Timolol no olho de um paciente que tem asma grave ou enfisema, ele faz um Broncoespasmo fulminante de UTI na mesma hora. Em cardiopatas que usam betabloqueador oral, a dose "invisível" do colírio soma e bate o coração abaixo de 40 bpm. É OBRIGATÓRIO apertar o canto do olho com o dedo por 2 minutos para travar a descida do remédio.', es: 'ALERTA DE ABSORCIÓN SISTÉMICA LETAL: El timolol oftálmico drena por el conducto nasolacrimal hacia la mucosa nasal, absorbiéndose directamente hacia la vena cava sin primer paso hepático. Genera niveles sistémicos suficientes para desencadenar crisis asmáticas fatales o bradicardias extremas. Exija al paciente comprimirse el lacrimal 2 minutos tras aplicar la gota.' }
      },
      references: {
        pt: 'Guidelines do Consenso Brasileiro de Glaucoma (CBO); American Academy of Ophthalmology (AAO) Glaucoma Panel; Bula Timoptol.',
        es: 'Guías de la American Academy of Ophthalmology (AAO); Consenso de Glaucoma de la Sociedad Argentina de Oftalmología (SAO).'
      }
    },

    /* ── BRIMONIDINA (Agonista Alfa-2 Ocular) ────────────────────── */
    "brimonidina": {
      name: { pt: 'Tartarato de Brimonidina', es: 'Tartrato de Brimonidina' },
      category: 'oftalmologia',
      class: { pt: 'Agonista Seletivo dos Receptores Alfa-2 Adrenérgicos Ocular / Antiglaucomatoso', es: 'Agonista Selectivo de los Receptores Alfa-2 Adrenérgicos Ocular / Antiglaucomatoso' },
      indications: {
        pt: ['Redução da pressão intraocular em pacientes com Glaucoma de Ângulo Aberto ou Hipertensão Ocular (Isolado ou em combo fixo com Timolol)'],
        es: ['Disminución de la PIO elevada en pacientes con Glaucoma de Ángulo Abierto o Hipertensión Ocular']
      },
      commercialNames: { br: ['Alphagan', 'Alcon Brimonidina', 'Combigan (Assoc com Timolol)'], ar: ['Alphagan', 'Brimopress', 'Klonasol'] },
      presentation: { pt: ['Solução oftálmica estéril (colírio) 0,15% e 0,2% (frasco com 5 mL)'], es: ['Solución oftálmica al 0,15% y 0,2%'] },
      mechanism: {
        pt: 'O Duplo Redutor de Pressão Ocular. É um agonista altamente seletivo dos receptores alfa-2 adrenérgicos. Ela atua por duas vias mecânicas simultâneas: 1) estimula os receptores alfa-2 pré-sinápticos nos processos ciliares cortando a liberação de noradrenalina, o que esvazia e reduz a fabricação de humor aquoso; e 2) ativa a contratilidade uveal, aumentando de forma importante o escoamento do líquido pelas vias uveosclerais acessórias.',
        es: 'Agonista potente y altamente selectivo de los receptores alfa-2 adrenérgicos. Reduce la PIO mediante un doble mecanismo: disminuye la producción de humor acuoso por vasoconstricción ciliar local e incrementa de forma paralela el flujo de salida uveoescleral del líquido intraocular.'
      },
      dose: {
        adult: {
          pt: 'Glaucoma: Pingar 1 gota no olho afetado, de 8/8 horas (TRÊS VEZES ao dia) se usado em monoterapia. Se associado ao Timolol no combo fixo, usar apenas de 12/12 horas.',
          es: 'Monoterapia: 1 gota en el ojo afectado cada 8 horas (3 veces al día). En combinación fija (Combigan): cada 12 horas.'
        },
        pediatric: {
          pt: 'ABSOLUTAMENTE CONTRAINDICADA em bebês, recém-nascidos e crianças menores de 2 anos de idade devido ao risco fatal de coma depressivo central (VER ALERTAS).',
          es: 'ABSOLUTAMENTE CONTRAINDICADO EN MENORES DE 2 AÑOS por depresión respiratoria central mortal.'
        }
      },
      administration: { pt: ['Uso oftálmico. Puxar a pálpebra inferior e pingar 1 gota. Realizar compressão digital do ducto nasolacrimal por 2 minutos para evitar que a droga viaje pelo sangue até o cérebro, causando sonolência severa e sedação central.'], es: ['Uso oftálmico. Obligatorio presionar el canto interno del ojo durante 2 minutos para evitar somnolencia severa sistémica y toxicidad central.'] },
      renalAdjustment: { required: false, message: { pt: 'Mínima absorção sistêmica, sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['BOCA SECA E SONOLÊNCIA DIURNA MARCADAS (efeito central clonidina-like por vazamento nasolacrimal)', 'Hiperemia conjuntival (olhos muito vermelhos que coçam)', 'Fadiga e cansaço excessivo', 'Visão borrada transitória'], es: ['BOCA SECA Y SOMNOLENCIA MARCADA (Efecto clonidina-like central por absorción sistémica nasolacrimal)', 'Hiperemia conjuntival y ardor local', 'Astenia'] },
      dangerousAdverseEffects: { pt: ['Coma e Depressão Respiratória Bulbar Central (em pediatria por superdosagem inadvertida — Caixa Preta)', 'Crises de hipotensão arterial severa com síncope e bradicardia reflexa'], es: ['Coma y Depresión Respiratoria Central fatal (en niños — Caja Negra pediátrica)', 'Hipotensión ortostática severa con síncope vasovagal'] },
      contraindications: {
        absolute: { pt: ['Recém-nascidos, bebês e crianças menores de 2 anos de idade (PROIBIÇÃO PEDIÁTRICA ABSOLUTA)', 'Pacientes em uso de Antidepressivos Inibidores da MAO (IMAO) — risco de crise hipertensiva severa por excesso catecolaminérgico'], es: ['Niños menores de 2 años (prohibición absoluta)', 'Uso concomitante con antidepresivos IMAO (Crisis hipertensiva por rebote de catecolaminas)'] },
        relative: { pt: ['Idosos com insuficiência coronariana instável ou hipotensão ortostática crônica grave'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A PROIBIÇÃO FATAL EM BEBÊS (O COLÍRIO QUE DÁ COMA EM CRIANÇAS): A Brimonidina é prima direta da Clonidina (um potente calmante central). Se uma mãe pingar por erro esse colírio em um bebê pequeno, o remédio corre pelo canal da lágrima, entra no sangue e invade o cérebro imaturo do bebê. A criança desliga, entra em Coma Profundo, faz Bradicardia extrema e para de respirar (Apneia Central). Uso terminantemente proibido abaixo de 2 anos.', es: 'ALERTA DE TOXICIDAD CENTRAL FATAL EN NEONATOS: Cruza con extrema facilidad la barrera hematoencefálica en niños pequeños debido a su similitud química con la clonidina. Su absorción sistémica inadvertida deprime por completo el centro cardiorrespiratorio bulbar, induciendo bradicardia extrema, hipotermia, apnea central y coma. Prohibido en menores de 2 años.' }
      },
      references: {
        pt: 'FDA Pediatric Safety Warnings on Brimonidine; Guidelines de Glaucoma da CBO; Manual de Terapêutica Oftalmológica de Yale.',
        es: 'FDA Safety Alerts; Ficha Técnica CIMA Alphagan; Manual de Oftalmología de la Sociedad Argentina de Oftalmología.'
      }
    },

    /* ── LATANOPROSTA (Análogo de Prostaglandina) ────────────────── */
    "latanoprosta": {
      name: { pt: 'Latanoprosta', es: 'Latanoprost' },
      category: 'oftalmologia',
      class: { pt: 'Análogo Sintético de Prostaglandina F2-alfa / Antiglaucomatoso de Alta Linha', es: 'Análogo Sintético de Prostaglandina F2-alfa / Antiglaucomatoso' },
      indications: {
        pt: ['Tratamento de primeira escolha para redução da Pressão Intraocular (PIO) em pacientes com Glaucoma de Ângulo Aberto e Hipertensão Ocular'],
        es: ['Tratamiento de primera línea para disminuir la PIO en Glaucoma de Ángulo Abierto e Hipertensión Ocular']
      },
      commercialNames: { br: ['Xalatan', 'Latanopt', 'Latanoprosta (Genérico)'], ar: ['Xalatan', 'Glaunot', 'Latanoprost Poen'] },
      presentation: { pt: ['Solução oftálmica estéril (colírio) 0,005% (50 mcg/mL — frasco com 2,5 mL)'], es: ['Solución oftálmica al 0,005% (50 mcg/mL)'] },
      mechanism: {
        pt: 'O Desentupidor de Vias Uveosclerais. É um pró-fármaco análogo de prostaglandina F2-alfa. Ele penetra na córnea e se liga de forma ultra-seletiva aos receptores prostanois tipo FP do músculo ciliar. Essa ligação relaxa e altera as matrizes de colágeno entre os feixes musculares do olho, abrindo espaço físico para o escoamento massivo do humor aquoso através da via Uveoscleral acessória. O líquido sai rápido do olho e a pressão cai de forma potente e contínua por 24 horas.',
        es: 'Es un profármaco análogo de la prostaglandina F2-alfa y agonista selectivo del receptor prostanoide FP. Reduce la PIO incrementando drásticamente el flujo de salida del humor acuoso a través de la vía Uveoescleral accesoria, mediante la remodelación de las metaloproteinasas de la matriz extracelular del músculo ciliar, sin afectar la producción del líquido.'
      },
      dose: {
        adult: {
          pt: 'Dose Padrão: Pingar exatamente 1 gota no olho afetado, APENAS UMA VEZ AO DIA, obrigatoriamente À NOITE antes de dormir. NUNCA pingar duas vezes ao dia — efeito paradoxal de aumento da PIO (VER ALERTAS).',
          es: 'Dosis estándar: 1 gota en el ojo afectado, SÓLO UNA VEZ AL DÍA, estrictamente por la NOCHE. NUNCA administrar dos veces diarias — efecto paradójico de elevación de la PIO.'
        },
        pediatric: {
          pt: 'Aprovado para crianças e adolescentes a partir de 1 ano de idade seguindo exatamente a mesma dose e recomendação noturna do adulto.',
          es: 'Aprobado en niños > 1 año con pauta nocturna idéntica al adulto.'
        }
      },
      administration: { pt: ['Uso oftálmico noturno exclusivo. Afastar a pálpebra inferior e pingar 1 gota. Retirar lentes de contato antes de aplicar e aguardar no mínimo 15 minutos para recolocá-las (o conservante Cloreto de Benzalcônio do colírio é absorvido pelas lentes e altera a transparência do plástico). Guardar o frasco fechado na geladeira (2°C a 8°C) antes de abrir; após aberto, pode ficar fora da geladeira por até 30 dias.'], es: ['Uso nocturno exclusivo. Retirar lentes de contacto antes de la aplicación (el conservante cloruro de benzalconio se absorbe en las lentillas). Mantener el frasco nuevo refrigerado (2-8°C); una vez abierto, conservar hasta 30 días a temperatura ambiente.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação local ocular, sem ajuste renal.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['ESCURECIMENTO DA ÍRIS (Muda a cor do olho para castanho de forma irreversível — VER ALERTAS)', 'CRESCIMENTO DE CÍLIOS (os cílios crescem, engrossam e ganham cor escura — Hipertricose ciliar)', 'Hiperemia conjuntival e ardência leve', 'Hiperpigmentação da pele da pálpebra (olheira escura periocular)'], es: ['CAMBIO DE COLOR DE LA IRIS (Oscurecimiento permanente e irreversible hacia color marrón)', 'HIPERTRICOSIS CILIAR (Crecimiento, engrosamiento y oscurecimiento permanente de las pestañas)', 'Hiperemia conjuntival', 'Pigmentación palpebral (Ojeras oscuras)'] },
      dangerousAdverseEffects: { pt: ['Edema Macular Cistoide (inchaço no centro da retina que borra a visão central, raro mas grave)', 'Reativação de episódios de Ceratite por Herpes Simples ocular com histórico latente'], es: ['Edema Macular Cistoide (pérdida de agudeza visual central)', 'Reactivación de Queratitis herpética ocular latente'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à latanoprosta ou ao cloreto de benzalcônio'] },
        relative: { pt: ['Pacientes com histórico de uveíte ativa, irite inflamatória ou infecção ocular herpética recidivante'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ERRO DA DOSE DUPLA E A MUDANÇA DA COR DOS OLHOS: A Latanoprosta tem duas regras bizarras. Primeira: ela estimula os melanócitos da íris. Se o paciente tiver olhos claros mistos (verde-castanho ou azul-castanho), o olho vai ESCURECER e virar castanho escuro para sempre — informe antes do início. Segunda: se o paciente pingar o colírio duas vezes ao dia achando que é melhor, ocorre um efeito paradoxal: a pressão do olho SOBE em vez de cair pela dessensibilização dos receptores FP. A dose deve ser estritamente uma única gota à noite.', es: 'ALERTA DE CAMBIO IRREVERSIBLE DE COLOR DE OJOS Y PARADOJA DE DOSIS: Estimula la síntesis de melanina en el estroma de la iris, cambiando los ojos claros mixtos (verdes/grises) hacia color marrón oscuro permanente. Avise al paciente antes de iniciar. Además, aplicar más de una gota diaria satura y desensibiliza los receptores FP provocando un efecto paradójico: ELEVA la PIO en lugar de reducirla. Rigor de 1 gota nocturna estrictamente.' }
      },
      references: {
        pt: 'Xalatan Multi-center Long-term Safety Study; American Academy of Ophthalmology (AAO) Guidelines; Manual de Farmacologia Ocular de Goodman & Gilman.',
        es: 'Landmark Latanoprost Studies; Ficha Técnica Xalatan CIMA; Guías de Práctica Clínica de la SAO.'
      }
    },

    /* ── AFLIBERCEPTE (Anti-VEGF Intravítreo) ───────────────────── */
    "aflibercepte": {
      name: { pt: 'Aflibercepte (Uso Intravítreo)', es: 'Aflibercept (Uso Intravítreo)' },
      category: 'oftalmologia',
      class: { pt: 'Anticorpo de Fusão Anti-VEGF / Anti-Angiogênico Humano Recombinante Ocular', es: 'Proteína de Fusión Anti-VEGF / Antiangiogénico Ocular Recombinante' },
      indications: {
        pt: ['Tratamento da Degeneração Macular Relacionada à Idade (DMRI) exsudativa / forma úmida', 'Tratamento do Edema Macular Diabético (EMD)', 'Tratamento da Retinopatia Diabética proliferativa', 'Oclusão de veia central da retina com edema macular associado'],
        es: ['Degeneración Macular Asociada a la Edad (DMAE) forma húmeda/exudativa', 'Edema Macular Diabético (EMD)', 'Retinopatía Diabética proliferativa', 'Oclusión de la vena central de la retina']
      },
      commercialNames: { br: ['Eylea'], ar: ['Eylea'] },
      presentation: { pt: ['Frasco-ampola ou seringa preenchida para injeção INTRAVÍTREA contendo solução 40 mg/mL (Dose de aplicação de 2 mg/0,05 mL)'], es: ['Vial para inyección INTRAVÍTREA de 40 mg/mL (Dosis útil de 2 mg en 0,05 mL)'] },
      mechanism: {
        pt: 'A Armadilha de Vasos Oculares (VEGF Trap). É uma proteína de fusão recombinante mestre que junta os domínios extracelulares dos receptores humanos de VEGF 1 e 2 fundidos à porção Fc da IgG1 humana. Ela atua como um Receptor de Armadilha (VEGF Trap) solúvel dentro do humor vítreo. Ela agarra todas as moléculas livres de VEGF-A (Fator de Crescimento Endotelial Vascular) e PlGF com uma força 100 vezes maior que os anticorpos antigos (Ranibizumabe). Sem VEGF livre, os vasos sanguíneos anormais e doentes que estavam crescendo embaixo da retina param de brotar, param de sangrar e murcham, salvando a visão central.',
        es: 'Proteína de fusión recombinante soluble que actúa como receptor señuelo (VEGF Trap). Une con altísima afinidad a todas las isoformas del VEGF-A y al factor de crecimiento placentario (PlGF). Bloquea la unión del VEGF a sus receptores endoteliales nativos, suprimiendo la neovascularización coroidea anárquica, deteniendo la fuga de fluido y el sangrado retiniano.'
      },
      dose: {
        adult: {
          pt: 'DMRI Úmida / Edema Diabético: 2 mg (equivalente a exatamente 0,05 mL de solução concentrada) via INJEÇÃO INTRAVÍTREA direta realizada pelo oftalmologista em centro cirúrgico. Fase de Carga: 1 injeção por mês nas primeiras 3 a 5 doses seguidas. Fase de Manutenção: 1 injeção a cada 2 meses (8 semanas) de forma contínua sob regime Treat-and-Extend.',
          es: 'Dosis convencional: 2 mg (volumen de 0,05 mL) vía INYECCIÓN INTRAVÍTREA en quirófano. Carga: 1 inyección mensual por 3-5 meses consecutivos. Mantenimiento: 1 inyección cada 8 semanas bajo régimen Treat-and-Extend.'
        },
        pediatric: {
          pt: 'Uso especializado aprovado para o tratamento de Retinopatia da Prematuridade (ROP) em recém-nascidos prematuros de extremo baixo peso nas doses de 0,4 mg/0,01 mL via intravítrea.',
          es: 'Aprobado en Retinopatía del Prematuro (ROP) neonatal con microdosificación de 0,4 mg en 0,01 mL.'
        }
      },
      administration: { pt: ['EXCLUSIVAMENTE INJEÇÃO INTRAVÍTREA DIRETA (DENTRO DO GLOBO OCULAR). Deve ser realizada estritamente por médico oftalmologista retinólogo dentro de um centro cirúrgico sob condições assépticas cirúrgicas máximas, usando anestesia em colírio local e campo estéril. O volume de 0,05 mL deve ser medido na seringa de micro-graduação com precisão molecular. Monitorar PIO nos 30 minutos após a injeção.'], es: ['Inyección Intravítrea exclusiva en quirófano bajo asepsia total. Realizada por médico retinólogo. Monitorear presión intraocular post-inyección a los 30 minutos.'] },
      renalAdjustment: { required: false, message: { pt: 'Ação puramente local ocular com mínima exposição sistêmica, sem ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste de dose.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Hemorragia subconjuntival (mancha de sangue vermelha viva no branco do olho no local onde a agulha entrou — assustadora, mas benigna, some em 10 dias)', 'Dor ocular leve a moderada pós-injeção', 'Moscas volantes (miodesopsias por bolhas de ar — transitórias)'], es: ['Hemorragia subconjuntival focal (mancha de sangre peripunción, benigna)', 'Dolor ocular leve post-inyección', 'Miodesopsias transitorias (manchas volantes por microburbujas de aire)'] },
      dangerousAdverseEffects: { pt: ['ENDOFTALMITE BACTERIANA DEVASTADORA (Infecção purulenta gravíssima dentro do olho por contaminação da agulha; causa dor violenta e pode CEGAR o paciente permanentemente em 48 horas se não tratada com antibiótico de urgência)', 'Descolamento de Retina mecânico por tração da agulha', 'Catarata traumática iatrogênica por contato com o cristalino'], es: ['ENDOFTALMITIS BACTERIANA AGUDA (Infección purulenta intraocular devastadora — destruye el ojo en 48 horas; requiere vitrectomía urgente y antibiótico intravítreo)', 'Desprendimiento de retina mecánico post-punción', 'Catarata traumática iatrogénica'] },
      contraindications: {
        absolute: { pt: ['INFECÇÃO ATIVA OU SUSPEITA DE INFECÇÃO OCULAR OU PERIOCULAR (Conjuntivite, blefarite, hordéolo ativo) no olho que vai receber a agulha', 'Inflamação intraocular ativa grave (uveíte ativa)'] },
        relative: { pt: ['Histórico recente de AVC isquêmico ou infarto agudo do miocárdio nos últimos 3 meses (risco teórico de efeito anti-VEGF sistêmico residual da classe)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O ALERTA DA DOR INSUPORTÁVEL PÓS-AGULHADA (RISCO DE ENDOFTALMITE): A aplicação de Eylea dentro do olho é segura se feita na assepsia. Porém, oriente o paciente de forma dramática: se de 1 a 3 dias após a injeção o olho começar a doer de forma violenta, a visão apagar e sair pus ou secreção purulenta, ele DEVE correr para o hospital no mesmo segundo. É a Endoftalmite. O médico precisa injetar antibiótico dentro do olho correndo para o paciente não perder o olho e ficar cego para sempre.', es: 'ALERTA DE ENDOFTALMITIS DEVASTADORA POST-PUNCIÓN: La complicación más temida es la introducción de bacterias al humor vítreo. Instruya de urgencia al paciente: la aparición de dolor ocular severo creciente, ojo rojo purulento o pérdida abrupta de la visión en los primeros 4 días exige evaluación oftalmológica inmediata de emergencia para evitar ceguera irreversible.' }
      },
      references: {
        pt: 'VIEW 1 and 2 Trials (Aflibercept vs Ranibizumab in wet AMD — Ophthalmology 2012); VIVID and VISTA Trials (Diabetic macular edema); Guidelines da Sociedade Brasileira de Retina e Vítreo (SBRV).',
        es: 'VIEW 1 & 2 Trials (Ophthalmology 2012); VIVID & VISTA Trials; Guías de Tratamiento de Retina de la Sociedad Argentina de Oftalmología.'
      }
    }

  }); /* fim Object.assign OFTALMOLOGIA_DRUGS_DB — BUILD 457-OFTAL (2026-07-11) — 4 drugs total:
         Antiglaucomatosos (3): timolol_colirio, brimonidina, latanoprosta
         Anti-VEGF Intravítreo (1): aflibercepte */

})();
