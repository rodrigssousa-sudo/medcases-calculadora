/* ============================================================
   MedCases Pro — Módulo: TOXICOLOGIA (Adicção e Resgate)
   Expõe: window.TOXICOLOGIA_DRUGS_DB
   Categorias: Cessação do Tabagismo, Suporte ao Alcoolismo,
               Tratamento de Dependência de Opioides
   Schema: Object-DB { chave: { name, calculate, ... } }
   BUILD 455-SNC — PILAR 4 — Inauguração Nó Toxicologia
   6 moléculas de suporte à dependência química e cessação de vícios
============================================================ */

(function () {
  'use strict';

  if (typeof window.TOXICOLOGIA_DRUGS_DB !== 'object' ||
      window.TOXICOLOGIA_DRUGS_DB === null ||
      Array.isArray(window.TOXICOLOGIA_DRUGS_DB)) {
    window.TOXICOLOGIA_DRUGS_DB = {};
  }
  if (typeof window.TOXICOLOGIA_DRUGS_DB !== 'object' ||
      window.TOXICOLOGIA_DRUGS_DB === null) return;

  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  Object.assign(window.TOXICOLOGIA_DRUGS_DB, {

    // ── CESSAÇÃO DO TABAGISMO ──

    vareniclina: {
      name: { pt: 'Vareniclina', es: 'Vareniclina' },
      category: 'cessacao_tabagismo',

      calculate: (paciente, lang = 'pt') => {
        const clcr     = Number(paciente.clcr || 100);
        const dialise  = Boolean(paciente.dialise);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const psiquiatrico = Boolean(paciente.psiquiatrico); // história de depressão/psicose

        return {
          name:  t(lang, 'Vareniclina', 'Vareniclina'),
          class: t(lang, 'Agonista Parcial de Receptor Nicotínico α4β2', 'Agonista Parcial de Receptor Nicotínico α4β2'),
          category: 'cessacao_tabagismo',
          commercialNames: {
            br: ['Champix'],
            ar: ['Champix', 'Chantix']
          },
          presentation: [
            t(lang, 'Comprimido 0,5 mg', 'Comprimido 0,5 mg'),
            t(lang, 'Comprimido 1 mg', 'Comprimido 1 mg')
          ],
          dose: {
            titulacao: t(lang,
              'Semanas 1–2 (titulação): Dias 1–3: 0,5 mg VO 1×/dia; Dias 4–7: 0,5 mg VO 2×/dia; Semana 2: 1 mg VO 2×/dia.',
              'Semanas 1–2 (titulación): Días 1–3: 0,5 mg VO 1×/día; Días 4–7: 0,5 mg VO 2×/día; Semana 2: 1 mg VO 2×/día.'),
            manutencao: t(lang,
              'Semanas 3–12 (manutenção): 1 mg VO 2×/dia (com alimentos). Definir data de parada entre S1–S5.',
              'Semanas 3–12 (mantenimiento): 1 mg VO 2×/día (con alimentos). Definir fecha de cesación entre S1–S5.'),
            extensao: t(lang,
              'Extensão opcional: pode-se manter por mais 12 semanas (total 24 sem) para reduzir recaída.',
              'Extensión opcional: puede mantenerse 12 semanas más (total 24 sem) para reducir recaída.')
          },
          renalAdjustment: clcr < 30 || dialise
            ? t(lang, 'ClCr < 30 mL/min ou diálise: reduzir para 0,5 mg 2×/dia (máximo). Não é removido por HD.', 'ClCr < 30 mL/min o diálisis: reducir a 0,5 mg 2×/día (máximo).')
            : t(lang, 'ClCr ≥ 30 mL/min: sem ajuste renal necessário.', 'ClCr ≥ 30 mL/min: sin ajuste renal necesario.'),
          hepaticAdjustment: t(lang, 'Hepatopatia: sem ajuste necessário (eliminação renal predominante).', 'Hepatopatía: sin ajuste necesario (eliminación renal predominante).'),
          mechanism: t(lang,
            'Agonista parcial do receptor nicotínico de acetilcolina α4β2: estimula liberação de dopamina (reduzindo fissura) e bloqueia parcialmente a ação da nicotina do cigarro (reduzindo reforço positivo do tabagismo).',
            'Agonista parcial del receptor nicotínico α4β2: estimula liberación de dopamina (reduciendo craving) y bloquea parcialmente la acción de la nicotina del cigarro (reduciendo refuerzo positivo).'),
          onset: t(lang, 'Efeito máximo em cessação ao final da 2ª semana de titulação; nível estacionário em 4 dias.', 'Efecto máximo en cesación al final de la 2ª semana de titulación; nivel estacionario en 4 días.'),
          halfLife: t(lang, 'Meia-vida: ~24 horas.', 'Vida media: ~24 horas.'),
          commonAdverseEffects: [
            t(lang, 'Náuseas (efeito mais comum — tomar com alimentos)', 'Náuseas (efecto más común — tomar con alimentos)'),
            t(lang, 'Cefaleia', 'Cefalea'),
            t(lang, 'Sonhos vívidos / insônia', 'Sueños vívidos / insomnio'),
            t(lang, 'Flatulência e dispepsia', 'Flatulencia y dispepsia'),
            t(lang, 'Tontura', 'Mareo')
          ],
          dangerousAdverseEffects: [
            t(lang, 'Alterações neuropsiquiátricas: depressão, ideação suicida, agressividade, agitação, alterações de comportamento — CAIXA PRETA FDA (histórica, revisada em 2016 para nível de aviso)', 'Alteraciones neuropsiquiátricas: depresión, ideación suicida, agresividad — Caja Negra FDA (revisada 2016)'),
            t(lang, 'Eventos cardiovasculares em pacientes com DCV preexistente — monitorar', 'Eventos cardiovasculares en pacientes con ECV preexistente'),
            t(lang, 'Convulsões (raro)', 'Convulsiones (raro)')
          ],
          risksByPatient: [
            psiquiatrico
              ? t(lang, '⚠️ ATENÇÃO: histórico psiquiátrico — monitorar humor e comportamento semanalmente nas primeiras 4 semanas. Discutir risco-benefício com paciente e família.', '⚠️ ATENCIÓN: antecedente psiquiátrico — monitorizar ánimo y conducta semanalmente las primeras 4 semanas.')
              : null,
            gestante
              ? t(lang, 'GESTANTE: dados insuficientes — evitar. Primeira linha: TRN (nicotina). Avaliar risco-benefício rigoroso.', 'GESTANTE: datos insuficientes — evitar. Primera línea: TRN (nicotina).')
              : null,
            lactante
              ? t(lang, 'LACTANTE: dados limitados — excretada no leite materno. Evitar ou suspender amamentação.', 'LACTANTE: datos limitados — excretada en leche materna. Evitar o suspender lactancia.')
              : null
          ].filter(Boolean),
          contraindications: {
            absolute: [
              t(lang, 'Hipersensibilidade à vareniclina', 'Hipersensibilidad a la vareniclina')
            ],
            relative: [
              t(lang, 'Gestação (usar TRN se possível)', 'Gestación (usar TRN si posible)'),
              t(lang, 'Histórico de convulsões', 'Antecedente de convulsiones'),
              t(lang, 'Doença cardiovascular grave (ponderar benefício)', 'Enfermedad cardiovascular grave')
            ]
          },
          monitoring: [
            t(lang, 'Humor e comportamento nas 1ªs 4 semanas (especialmente em pacientes psiquiátricos)', 'Ánimo y conducta primeras 4 semanas'),
            t(lang, 'Pressão arterial (possível elevação leve)', 'Presión arterial'),
            t(lang, 'Função renal se ClCr < 50 mL/min', 'Función renal si ClCr < 50 mL/min'),
            t(lang, 'Taxa de abstinência ao 3º, 6º e 12º mês', 'Tasa de abstinencia al 3º, 6º y 12º mes')
          ],
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: false, hepaticCaution: false,
            antidoteAvailable: false, highAlertMedication: false,
            warning: t(lang,
              'CAIXA PRETA REVISADA (2016): Monitorar alterações de humor, comportamento e ideação suicida. Informar paciente e familiares. Risco maior em pacientes com história psiquiátrica.',
              'CAJA NEGRA REVISADA (2016): Monitorizar cambios de ánimo, conducta e ideación suicida.')
          },
          references: [
            'ANVISA — Champix Bula (Pfizer)',
            'Gonzales D et al. JAMA 2006 — EAGLES trial',
            'Anthenelli RM et al. Lancet 2016 — EAGLES (revisão caixa preta)',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    },

    nicotina_terapia: {
      name: { pt: 'Terapia de Reposição de Nicotina (TRN)', es: 'Terapia de Reemplazo de Nicotina (TRN)' },
      category: 'cessacao_tabagismo',

      calculate: (paciente, lang = 'pt') => {
        const cigarrosDia = Number(paciente.cigarrosDia || 20);
        const gestante    = Boolean(paciente.gestante);
        const cardiopatia = Boolean(paciente.cardiopatia);

        // FTND-based dosing proxy
        const altaDependencia = cigarrosDia >= 20;

        return {
          name:  t(lang, 'Terapia de Reposição de Nicotina (TRN)', 'Terapia de Reemplazo de Nicotina (TRN)'),
          class: t(lang, 'Agonista de Receptor Nicotínico — Reposição', 'Agonista de Receptor Nicotínico — Reemplazo'),
          category: 'cessacao_tabagismo',
          commercialNames: {
            br: ['Nicorette (goma/adesivo/pastilha)', 'Niquitin (adesivo)', 'Nicotinell (adesivo/goma)'],
            ar: ['Nicorette', 'Niquitin', 'Nicotinell']
          },
          presentation: [
            t(lang, 'Adesivo transdérmico 7 mg, 14 mg, 21 mg/24h', 'Parche transdérmico 7 mg, 14 mg, 21 mg/24h'),
            t(lang, 'Goma de mascar 2 mg, 4 mg', 'Goma de mascar 2 mg, 4 mg'),
            t(lang, 'Pastilha 2 mg, 4 mg', 'Pastilla 2 mg, 4 mg'),
            t(lang, 'Spray nasal 0,5 mg/dose', 'Spray nasal 0,5 mg/dosis'),
            t(lang, 'Inalador bucal 10 mg/cartucho', 'Inhalador bucal 10 mg/cartucho')
          ],
          dose: {
            adesivo: altaDependencia
              ? t(lang, '≥20 cig/dia: Semanas 1–6: 21 mg/24h; Sem 7–8: 14 mg/24h; Sem 9–12: 7 mg/24h (retirada gradual).', '≥20 cig/día: Semanas 1–6: 21 mg/24h; Sem 7–8: 14 mg/24h; Sem 9–12: 7 mg/24h.')
              : t(lang, '<20 cig/dia: Semanas 1–6: 14 mg/24h; Sem 7–8: 7 mg/24h.', '<20 cig/día: Semanas 1–6: 14 mg/24h; Sem 7–8: 7 mg/24h.'),
            goma: t(lang,
              'Goma 4 mg (fumante ≥20 cig/dia ou 1º cigarro ≤30 min após acordar); 2 mg para demais. Mascar lentamente (1 goma/1–2h; máx 24 gomas/dia).',
              'Goma 4 mg (fumador ≥20 cig/día o 1º cigarro ≤30 min tras despertar); 2 mg para demás. Mascar lentamente.'),
            combinada: t(lang,
              'TRN COMBINADA (maior eficácia): Adesivo (dose baseada em cigarros/dia) + Goma/Pastilha de resgate conforme fissura.',
              'TRN COMBINADA (mayor eficacia): Parche (dosis según cigarros/día) + Goma/Pastilla de rescate según craving.')
          },
          mechanism: t(lang,
            'Repõe nicotina de forma controlada (sem os 4.000+ compostos tóxicos do cigarro), reduzindo sintomas de abstinência e fissura enquanto o paciente adapta comportamento.',
            'Repone nicotina de forma controlada (sin los 4.000+ compuestos tóxicos del cigarro), reduciendo síntomas de abstinencia y craving.'),
          halfLife: t(lang, 'Meia-vida nicotina: ~2 horas (metabolismo hepático; cotinina meia-vida ~16h).', 'Vida media nicotina: ~2 horas (metabolismo hepático; cotinina ~16h).'),
          commonAdverseEffects: [
            t(lang, 'Adesivo: eritema local, prurido, insônia (remover à noite)', 'Parche: eritema local, prurito, insomnio (retirar de noche)'),
            t(lang, 'Goma: dor mandibular, soluço, náusea (mascar incorretamente)', 'Goma: dolor mandibular, hipo, náusea (masticar incorrectamente)'),
            t(lang, 'Spray nasal: irritação nasal e ocular, rinorreia', 'Spray nasal: irritación nasal y ocular, rinorrea')
          ],
          dangerousAdverseEffects: [
            t(lang, 'Doença cardiovascular ativa: risco de vasoconstrição — usar com cautela e monitorar', 'Enfermedad cardiovascular activa: riesgo de vasoconstricción')
          ],
          risksByPatient: [
            gestante
              ? t(lang, 'GESTANTE: TRN é PRIMEIRA LINHA (preferida a vareniclina/bupropiona). Adesivo intermitente preferível ao contínuo. Usar menor dose efetiva. Benefício supera risco do tabagismo ativo.', 'GESTANTE: TRN es PRIMERA LÍNEA. Parche intermitente preferible al continuo.')
              : null,
            cardiopatia
              ? t(lang, 'CARDIOPATIA: usar com cautela — nicotina causa vasoconstrição e pode aumentar FC. Dose mínima efetiva. Contraindicada na fase aguda pós-IAM imediato.', 'CARDIOPATÍA: usar con cautela. Dosis mínima efectiva. Contraindicada en fase aguda post-IAM inmediato.')
              : null
          ].filter(Boolean),
          contraindications: {
            absolute: [t(lang, 'IAM recente (<2 semanas)', 'IAM reciente (<2 semanas)')],
            relative: [t(lang, 'Angina instável', 'Angina inestable'), t(lang, 'Arritmia grave', 'Arritmia grave')]
          },
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: false, hepaticCaution: false,
            antidoteAvailable: false, highAlertMedication: false,
            warning: t(lang, 'TRN é segura na maioria dos cardiopatas. Risco do tabagismo contínuo supera o risco da TRN em praticamente todos os cenários.', 'TRN es segura en la mayoría de cardiopatas. El riesgo del tabaquismo supera el riesgo de la TRN.')
          },
          references: [
            'ANVISA — Bulas Nicorette, Niquitin, Nicotinell',
            'Hartmann-Boyce J et al. Cochrane Database 2023 — NRT for smoking cessation',
            'Benowitz NL. NEJM 2010 — Nicotine Addiction',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    },

    // ── SUPORTE AO ALCOOLISMO ──

    acamprosato: {
      name: { pt: 'Acamprosato', es: 'Acamprosato' },
      category: 'dependencia_alcool',

      calculate: (paciente, lang = 'pt') => {
        const peso  = Number(paciente.peso || 70);
        const clcr  = Number(paciente.clcr || 100);
        const dialise = Boolean(paciente.dialise);

        const doseStd = peso >= 60
          ? t(lang, '666 mg VO 3×/dia (com ou sem alimentos). Total: 1998 mg/dia.', '666 mg VO 3×/día (con o sin alimentos). Total: 1998 mg/día.')
          : t(lang, '666 mg VO 2×/dia (pacientes < 60 kg). Total: 1332 mg/dia.', '666 mg VO 2×/día (pacientes < 60 kg). Total: 1332 mg/día.');

        return {
          name:  t(lang, 'Acamprosato', 'Acamprosato'),
          class: t(lang, 'Modulador GABA/Glutamato — Anticraving do Álcool', 'Modulador GABA/Glutamato — Anticraving del Alcohol'),
          category: 'dependencia_alcool',
          commercialNames: {
            br: ['Campral'],
            ar: ['Campral']
          },
          presentation: [t(lang, 'Comprimido revestido entérico 333 mg', 'Comprimido recubierto entérico 333 mg')],
          dose: {
            standard: doseStd,
            inicio: t(lang, 'Iniciar APÓS abstinência estabelecida (logo após desintoxicação). Manter mesmo se ocorrer recaída.', 'Iniciar DESPUÉS de abstinencia establecida. Mantener incluso si ocurre recaída.'),
            duracao: t(lang, 'Duração mínima: 1 ano. Pode ser mantido cronicamente.', 'Duración mínima: 1 año. Puede mantenerse crónicamente.')
          },
          renalAdjustment: dialise || clcr < 30
            ? t(lang, 'ClCr < 30 mL/min ou diálise: CONTRAINDICADO (eliminação exclusivamente renal).', 'ClCr < 30 mL/min o diálisis: CONTRAINDICADO.')
            : clcr < 60
              ? t(lang, 'ClCr 30–59 mL/min: reduzir para 333 mg 3×/dia. Monitorar função renal.', 'ClCr 30–59 mL/min: reducir a 333 mg 3×/día.')
              : t(lang, 'Sem ajuste renal para ClCr ≥ 60 mL/min.', 'Sin ajuste renal para ClCr ≥ 60 mL/min.'),
          mechanism: t(lang,
            'Restaura equilíbrio entre neurotransmissão inibitória (GABA) e excitatória (glutamato/NMDA) após cessação do álcool, reduzindo hiperexcitabilidade e fissura (craving). Não interfere no metabolismo do etanol.',
            'Restaura equilibrio GABA/Glutamato post-cesación del alcohol, reduciendo hiperexcitabilidad y craving. No interfiere con el metabolismo del etanol.'),
          halfLife: t(lang, 'Meia-vida: ~13 horas. Excreção renal inalterada.', 'Vida media: ~13 horas. Excreción renal sin cambios.'),
          commonAdverseEffects: [
            t(lang, 'Diarreia (mais comum)', 'Diarrea (más frecuente)'),
            t(lang, 'Náuseas, dor abdominal', 'Náuseas, dolor abdominal'),
            t(lang, 'Prurido / rash', 'Prurito / rash'),
            t(lang, 'Cefaleia, insônia', 'Cefalea, insomnio')
          ],
          dangerousAdverseEffects: [
            t(lang, 'Depressão e ideação suicida — monitorar (prevalente na população alcoólatra)', 'Depresión e ideación suicida — monitorizar')
          ],
          contraindications: {
            absolute: [t(lang, 'ClCr < 30 mL/min / Diálise', 'ClCr < 30 mL/min / Diálisis'), t(lang, 'Gestação', 'Gestación')],
            relative: [t(lang, 'Depressão grave não controlada', 'Depresión grave no controlada')]
          },
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: true, hepaticCaution: false,
            antidoteAvailable: false, highAlertMedication: false,
            warning: t(lang, 'USAR APENAS APÓS ABSTINÊNCIA: Acamprosato não reduz sintomas de abstinência aguda — indicado para MANUTENÇÃO da sobriedade. Pode ser combinado com naltrexona ou disulfiram.', 'USAR SOLO TRAS ABSTINENCIA: no reduce síntomas de abstinencia aguda.')
          },
          references: [
            'ANVISA — Campral Bula',
            'Mason BJ & Heyser CJ. Rec Pat CNS Drug Discov 2010',
            'Rösner S et al. Cochrane Database 2010 — Acamprosate for alcohol dependence',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    },

    dissulfiram: {
      name: { pt: 'Dissulfiram', es: 'Disulfiram' },
      category: 'dependencia_alcool',

      calculate: (paciente, lang = 'pt') => {
        const hepatopatia = Boolean(paciente.hepatopatia);
        const psiquiatrico = Boolean(paciente.psiquiatrico);
        const cardiopatia  = Boolean(paciente.cardiopatia);

        return {
          name:  t(lang, 'Dissulfiram', 'Disulfiram'),
          class: t(lang, 'Inibidor da Aldeído Desidrogenase — Terapia Aversiva', 'Inhibidor de Aldehído Deshidrogenasa — Terapia Aversiva'),
          category: 'dependencia_alcool',
          commercialNames: {
            br: ['Antabuse', 'Dissulfiram Genérico'],
            ar: ['Antabuse', 'Disulfiram']
          },
          presentation: [t(lang, 'Comprimido 250 mg, 500 mg', 'Comprimido 250 mg, 500 mg')],
          dose: {
            inicial: t(lang, 'Dose de ataque: 500 mg VO 1×/dia por 1–2 semanas (após 12–24h de abstinência TOTAL).', 'Dosis de ataque: 500 mg VO 1×/día por 1–2 semanas (tras 12–24h de abstinencia TOTAL).'),
            manutencao: t(lang, 'Manutenção: 250 mg VO 1×/dia (range: 125–500 mg/dia). Dose máxima: 500 mg/dia.', 'Mantenimiento: 250 mg VO 1×/día (rango: 125–500 mg/día). Dosis máxima: 500 mg/día.'),
            duracao: t(lang, 'Duração: meses a anos. Monitorar enzimas hepáticas a cada 6 meses.', 'Duración: meses a años. Monitorizar enzimas hepáticas cada 6 meses.')
          },
          mechanism: t(lang,
            'Inibe irreversivelmente a aldeído desidrogenase (ALDH), bloqueando o metabolismo do etanol no nível do acetaldeído. O acúmulo de acetaldeído causa reação aversiva intensa (rubor, taquicardia, dispneia, hipotensão, vômitos) — dissuadindo o consumo de álcool. Efeito persiste 1–2 semanas após a última dose.',
            'Inhibe irreversiblemente la aldehído deshidrogenasa (ALDH), bloqueando el metabolismo del etanol a nivel del acetaldehído. La acumulación genera reacción aversiva intensa. Efecto persiste 1–2 semanas tras la última dosis.'),
          halfLife: t(lang, 'Metabolismo lento: efeito dura 1–2 semanas após suspensão.', 'Metabolismo lento: efecto dura 1–2 semanas tras suspensión.'),
          commonAdverseEffects: [
            t(lang, 'Sonolência e fadiga no início do tratamento', 'Somnolencia y fatiga al inicio'),
            t(lang, 'Sabor metálico / alho', 'Sabor metálico / ajo'),
            t(lang, 'Cetose leve', 'Cetosis leve'),
            t(lang, 'Acne, dermatite de contato', 'Acné, dermatitis de contacto')
          ],
          dangerousAdverseEffects: [
            t(lang, 'REAÇÃO DISSULFIRAM-ÁLCOOL: rubor intenso, cefaleia pulsátil, vômitos, taquicardia, hipotensão grave, colapso cardiovascular. Pode ser fatal com consumo elevado de etanol.', 'REACCIÓN DISULFIRAM-ALCOHOL: rubor intenso, cefalea pulsátil, vómitos, taquicardia, hipotensión grave. Puede ser fatal.'),
            t(lang, 'Hepatotoxicidade (raro mas grave — monitorar TGO/TGP)', 'Hepatotoxicidad (raro pero grave)'),
            t(lang, 'Neuropatia periférica (uso prolongado)', 'Neuropatía periférica (uso prolongado)'),
            t(lang, 'Psicose (raro)', 'Psicosis (raro)')
          ],
          risksByPatient: [
            hepatopatia
              ? t(lang, '⛔ CONTRAINDICADO na cirrose ativa ou hepatite aguda. Monitorar TGO/TGP a cada 3–6 meses em hepatopatia crônica compensada.', '⛔ CONTRAINDICADO en cirrosis activa o hepatitis aguda.')
              : null,
            psiquiatrico
              ? t(lang, '⚠️ Psicose ou depressão grave: contraindicação relativa — pode precipitar episódios psicóticos.', '⚠️ Psicosis o depresión grave: contraindicación relativa.')
              : null,
            cardiopatia
              ? t(lang, '⚠️ Cardiopatia grave: contraindicação relativa — reação dissulfiram-álcool pode precipitar IAM.', '⚠️ Cardiopatía grave: contraindicación relativa — reacción puede precipitar IAM.')
              : null
          ].filter(Boolean),
          contraindications: {
            absolute: [
              t(lang, 'Uso de álcool nas últimas 12–24h', 'Uso de alcohol en las últimas 12–24h'),
              t(lang, 'Hepatite aguda / Cirrose descompensada', 'Hepatitis aguda / Cirrosis descompensada'),
              t(lang, 'Doença cardiovascular grave', 'Enfermedad cardiovascular grave'),
              t(lang, 'Psicose ativa', 'Psicosis activa'),
              t(lang, 'Gestação', 'Gestación'),
              t(lang, 'Hipersensibilidade ao dissulfiram ou tiourams', 'Hipersensibilidad al disulfiram o tiuramos')
            ],
            relative: [
              t(lang, 'Diabetes mellitus', 'Diabetes mellitus'),
              t(lang, 'Hipotireoidismo', 'Hipotiroidismo'),
              t(lang, 'Nefropatia moderada', 'Nefropatía moderada')
            ]
          },
          monitoring: [
            t(lang, 'TGO / TGP antes e a cada 3–6 meses', 'TGO / TGP antes y cada 3–6 meses'),
            t(lang, 'Monitorar sinais de neuropatia (parestesias)', 'Monitorizar signos de neuropatía'),
            t(lang, 'Revisar todas as medicações concomitantes (interações graves com metronidazol, isoniazida, anticoagulantes)', 'Revisar medicaciones concomitantes')
          ],
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
            antidoteAvailable: false, highAlertMedication: true,
            warning: t(lang,
              '🚨 ALTA VIGILÂNCIA: Paciente DEVE ser informado que qualquer fonte de álcool (incluindo antissépticos, perfumes, vinagres, alguns alimentos) pode desencadear a reação. Identidade do paciente deve constar para equipes de emergência.',
              '🚨 ALTA VIGILANCIA: Paciente DEBE ser informado que cualquier fuente de alcohol puede desencadenar la reacción. Identidad del paciente debe constar para equipos de emergencia.')
          },
          references: [
            'ANVISA — Antabuse/Dissulfiram Bula',
            'Fuller RK et al. JAMA 1986 — Veterans Affairs Cooperative Study',
            'Diehl A et al. Alcohol Alcohol 2010',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    },

    // ── DEPENDÊNCIA DE OPIOIDES ──

    metadona_cronico: {
      name: { pt: 'Metadona (Tratamento Crônico de Dependência)', es: 'Metadona (Tratamiento Crónico de Dependencia)' },
      category: 'dependencia_opioide',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso || 70);
        const clcr     = Number(paciente.clcr || 100);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const gestante = Boolean(paciente.gestante);
        const qtcLong  = Boolean(paciente.qtcLong); // QTc prolongado

        return {
          name:  t(lang, 'Metadona — Programa de Manutenção (PMM)', 'Metadona — Programa de Mantenimiento (PMM)'),
          class: t(lang, 'Opioide Agonista Pleno μ + Antagonista NMDA — Terapia de Manutenção', 'Opioide Agonista Pleno μ + Antagonista NMDA — Terapia de Mantenimiento'),
          category: 'dependencia_opioide',
          commercialNames: {
            br: ['Metadona HCl (Genérico — dispensação exclusiva em CAPS-AD)'],
            ar: ['Metadona HCl (dispensación exclusiva en centros autorizados)']
          },
          presentation: [
            t(lang, 'Solução oral 1 mg/mL, 2 mg/mL, 5 mg/mL (frasco para dispensação diária supervisionada)', 'Solución oral 1 mg/mL, 2 mg/mL, 5 mg/mL'),
            t(lang, 'Comprimido 5 mg, 10 mg (em alguns países)', 'Comprimido 5 mg, 10 mg')
          ],
          dose: {
            indução: t(lang,
              'INDUÇÃO (apenas em centro autorizado): Dose inicial: 20–30 mg VO no 1º dia (máx 30 mg/dose única inicial). Titular por observação de 3–4h. Se sintomas de abstinência persistirem: adicionar 5–10 mg (máx 40 mg total no D1).',
              'INDUCCIÓN (solo en centro autorizado): Dosis inicial: 20–30 mg VO día 1 (máx 30 mg/dosis inicial única). Titular 3–4h. Si abstinencia persiste: agregar 5–10 mg (máx 40 mg total D1).'),
            manutencao: t(lang,
              'MANUTENÇÃO: Dose usual de manutenção: 60–120 mg/dia VO 1×/dia. Doses > 100 mg/dia conferem maior retenção no programa. Revisar dose a cada 1–3 meses.',
              'MANTENIMIENTO: Dosis habitual: 60–120 mg/día VO 1×/día. Dosis > 100 mg/día confieren mayor retención. Revisar dosis cada 1–3 meses.')
          },
          mechanism: t(lang,
            'Agonista pleno de receptores μ-opioides (ação longa, suprime sintomas de abstinência e craving) + antagonista de receptores NMDA (reduz tolerância e hiperalgesia). Metabolismo hepático extenso (CYP3A4, CYP2D6, CYP2B6) com variabilidade genética significativa.',
            'Agonista pleno de receptores μ-opioides (acción larga, suprime abstinencia y craving) + antagonista NMDA. Metabolismo hepático extenso (CYP3A4, 2D6, 2B6) con variabilidad genética significativa.'),
          halfLife: t(lang, 'Meia-vida longa e variável: 8–59 horas (média 24–36h). Acúmulo em doses iniciais — risco de overdose nos primeiros 5 dias.', 'Vida media larga y variable: 8–59 horas (media 24–36h). Acumulación en dosis iniciales — riesgo de sobredosis primeros 5 días.'),
          renalAdjustment: clcr < 30
            ? t(lang, 'ClCr < 30 mL/min: reduzir dose e aumentar intervalo. Monitorar acúmulo.', 'ClCr < 30 mL/min: reducir dosis y aumentar intervalo.')
            : t(lang, 'ClCr ≥ 30: sem ajuste renal obrigatório.', 'ClCr ≥ 30: sin ajuste renal obligatorio.'),
          hepaticAdjustment: hepatopatia
            ? t(lang, 'Hepatopatia grave: reduzir dose 50% e monitorar sinais de acúmulo (sedação excessiva, FR < 12).', 'Hepatopatía grave: reducir dosis 50% y monitorizar acumulación.')
            : t(lang, 'Hepatopatia leve: sem ajuste necessário.', 'Hepatopatía leve: sin ajuste necesario.'),
          risksByPatient: [
            qtcLong
              ? t(lang, '🚨 QTc PROLONGADO: Metadona prolonga QTc dose-dependente. Risco de Torsades de Pointes. ECG antes de iniciar, ao atingir 30–40 mg/dia e ao 100 mg/dia. Considerar troca para buprenorfina se QTc > 500 ms.', '🚨 QTc PROLONGADO: Metadona prolonga QTc. Riesgo de Torsades. ECG antes, al alcanzar 30–40 mg/día y al 100 mg/día.')
              : null,
            gestante
              ? t(lang, 'GESTANTE: Metadona é PRIMEIRA LINHA (padrão-ouro no PMM gestacional). Pode ocorrer síndrome de abstinência neonatal (NAS) — equipe neonatológica de prontidão. Não suspender abruptamente.', 'GESTANTE: Metadona es PRIMERA LÍNEA en PMM gestacional. Puede ocurrir síndrome de abstinencia neonatal (NAS). No suspender abruptamente.')
              : null
          ].filter(Boolean),
          dangerousAdverseEffects: [
            t(lang, '🚨 OVERDOSE / DEPRESSÃO RESPIRATÓRIA — risco aumentado nos primeiros 5 dias de indução e em ajustes de dose', '🚨 SOBREDOSIS / DEPRESIÓN RESPIRATORIA — riesgo aumentado primeros 5 días'),
            t(lang, '🚨 PROLONGAMENTO DO INTERVALO QTc — Torsades de Pointes (dose-dependente)', '🚨 PROLONGACIÓN QTc — Torsades de Pointes (dosis-dependiente)'),
            t(lang, 'Sedação excessiva (acúmulo)', 'Sedación excesiva (acumulación)'),
            t(lang, 'Hipogonadismo com uso crônico', 'Hipogonadismo con uso crónico')
          ],
          contraindications: {
            absolute: [t(lang, 'Uso sem prescrição/supervisão de centro especializado', 'Uso sin prescripción/supervisión de centro especializado')],
            relative: [t(lang, 'QTc > 500 ms', 'QTc > 500 ms'), t(lang, 'Asma grave não controlada', 'Asma grave no controlada')]
          },
          monitoring: [
            t(lang, 'ECG (QTc) — basal, 30–40 mg/dia, 100 mg/dia', 'ECG (QTc) — basal, 30–40 mg/día, 100 mg/día'),
            t(lang, 'Nível sérico se resposta inadequada ou suspeita de acúmulo', 'Nivel sérico si respuesta inadecuada o sospecha de acumulación'),
            t(lang, 'Urinálise toxicológica mensal (programa)', 'Urianálisis toxicológico mensual'),
            t(lang, 'Hormônios sexuais (semestral no uso crônico)', 'Hormonas sexuales (semestral en uso crónico)')
          ],
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
            antidoteAvailable: true, highAlertMedication: true,
            antidote: t(lang, 'Naloxona IV/IM/SC/intranasal — repetir a cada 2–3 min se necessário (meia-vida da naloxona < metadona — monitorar por 12–24h).', 'Naloxona IV/IM/SC/intranasal — repetir cada 2–3 min si necesario (vida media naloxona < metadona — monitorizar 12–24h).'),
            warning: t(lang,
              '🚨 MEDICAMENTO DE ALTA VIGILÂNCIA: Dispensação exclusiva em CAPS-AD/centros autorizados. Doses de indução > 40 mg/dia requerem observação direta. Risco de acúmulo e overdose letal nas primeiras doses.',
              '🚨 MEDICAMENTO DE ALTA VIGILANCIA: Dispensación exclusiva en centros autorizados. Riesgo de acumulación y sobredosis letal en primeras dosis.')
          },
          references: [
            'Portaria SVS/MS nº 344/1998 (Brasil) — Controle de Metadona',
            'SAMHSA 2021 — Medications for Opioid Use Disorder',
            'Mattick RP et al. Cochrane 2014 — Methadone maintenance therapy vs no opioid replacement',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    },

    buprenorfina_naloxona: {
      name: { pt: 'Buprenorfina + Naloxona', es: 'Buprenorfina + Naloxona' },
      category: 'dependencia_opioide',

      calculate: (paciente, lang = 'pt') => {
        const hepatopatia = Boolean(paciente.hepatopatia);
        const gestante    = Boolean(paciente.gestante);
        const dor_cronica = Boolean(paciente.dorCronica);

        return {
          name:  t(lang, 'Buprenorfina/Naloxona (Suboxone®)', 'Buprenorfina/Naloxona (Suboxone®)'),
          class: t(lang, 'Agonista Parcial μ + Antagonista κ / Antagonista Opioides (Naloxona) — Terapia de Manutenção', 'Agonista Parcial μ + Antagonista κ / Antagonista Opioides (Naloxona) — Terapia de Mantenimiento'),
          category: 'dependencia_opioide',
          commercialNames: {
            br: ['Suboxone (buprenorfina 8mg + naloxona 2mg SL)'],
            ar: ['Suboxone', 'Buprenorfina/Naloxona Genérico']
          },
          presentation: [
            t(lang, 'Comprimido/filme sublingual: Buprenorfina 2 mg + Naloxona 0,5 mg', 'Comprimido/film sublingual: Buprenorfina 2 mg + Naloxona 0,5 mg'),
            t(lang, 'Comprimido/filme sublingual: Buprenorfina 8 mg + Naloxona 2 mg', 'Comprimido/film sublingual: Buprenorfina 8 mg + Naloxona 2 mg')
          ],
          dose: {
            inducao: t(lang,
              'INDUÇÃO: Iniciar APENAS quando COWS ≥ 8–12 (sintomas de abstinência moderados). Dose inicial: 2–4 mg SL. Reavaliar em 1h — se sem sintomas de abstinência precipitada: adicionar 2–4 mg. D1 máximo: 8 mg. D2: titular até 8–16 mg.',
              'INDUCCIÓN: Iniciar SOLO cuando COWS ≥ 8–12. Dosis inicial: 2–4 mg SL. Reevaluar en 1h. Día 1 máximo: 8 mg. Día 2: titular hasta 8–16 mg.'),
            manutencao: t(lang,
              'MANUTENÇÃO: 16–24 mg SL 1×/dia (dose habitual). Range: 4–32 mg/dia. A naloxona sublingual tem baixa biodisponibilidade — presente apenas para dissuadir uso IV.',
              'MANTENIMIENTO: 16–24 mg SL 1×/día (dosis habitual). Rango: 4–32 mg/día. Naloxona sublingual tiene baja biodisponibilidad — presente solo para disuadir uso IV.'),
            buprenorfina_mono: gestante
              ? t(lang, 'GESTANTE: Usar buprenorfina MONOFÁRMACO (sem naloxona) — Buprenorfina 8–16 mg SL/dia.', 'GESTANTE: Usar buprenorfina MONOFÁRMACO (sin naloxona) — Buprenorfina 8–16 mg SL/día.')
              : null
          },
          mechanism: t(lang,
            'Buprenorfina: agonista parcial μ (alta afinidade, dissociação lenta — bloqueia outros opioides) + antagonista κ (antidepressivo-like). Efeito "teto" para depressão respiratória — mais seguro que metadona em overdose. Naloxona: antagonista puro — ativa se injetada IV, precipitando abstinência aguda (dissuasão ao uso injetável).',
            'Buprenorfina: agonista parcial μ (alta afinidad, disociación lenta — bloquea otros opioides) + antagonista κ. Efecto "techo" para depresión respiratoria. Naloxona: antagonista puro — activa si inyectada IV, precipitando abstinencia aguda.'),
          halfLife: t(lang, 'Buprenorfina: meia-vida 24–60h (dose única). Permite administração 1×/dia ou a cada 48h.', 'Buprenorfina: vida media 24–60h (dosis única). Permite administración 1×/día o cada 48h.'),
          hepaticAdjustment: hepatopatia
            ? t(lang, 'Hepatopatia moderada-grave: reduzir dose e monitorar níveis. Risco de acúmulo e hepatotoxicidade (especialmente em coinfecção HCV + hepatopatia avançada).', 'Hepatopatía moderada-grave: reducir dosis y monitorizar. Riesgo de acumulación y hepatotoxicidad.')
            : t(lang, 'Hepatopatia leve: sem ajuste necessário.', 'Hepatopatía leve: sin ajuste necesario.'),
          risksByPatient: [
            gestante
              ? t(lang, 'GESTANTE: usar buprenorfina MONO (sem naloxona). Síndrome de abstinência neonatal (NAS) possível — menos grave que com metadona. Amamentação permitida (baixa transferência).', 'GESTANTE: usar buprenorfina MONO (sin naloxona). NAS posible — menos grave que con metadona. Lactancia permitida.')
              : null,
            dor_cronica
              ? t(lang, 'DOR CRÔNICA ASSOCIADA: buprenorfina tem efeito analgésico intrínseco — pode tratar ambas as condições. Coordenar com equipe de dor.', 'DOLOR CRÓNICO ASOCIADO: buprenorfina tiene efecto analgésico intrínseco. Coordinar con equipo de dolor.')
              : null
          ].filter(Boolean),
          dangerousAdverseEffects: [
            t(lang, 'ABSTINÊNCIA PRECIPITADA: iniciar antes de COWS ≥ 8 causa abstinência aguda grave (agitação, vômitos, cólicas, diaforese severa)', 'ABSTINENCIA PRECIPITADA: iniciar antes de COWS ≥ 8 causa abstinencia aguda grave'),
            t(lang, 'Depressão respiratória (raro — efeito teto, mas possível com BZD + álcool)', 'Depresión respiratoria (raro — efecto techo, pero posible con BZD + alcohol)'),
            t(lang, 'Hepatotoxicidade (monitorar TGO/TGP)', 'Hepatotoxicidad (monitorizar TGO/TGP)')
          ],
          contraindications: {
            absolute: [t(lang, 'Hipersensibilidade à buprenorfina ou naloxona', 'Hipersensibilidad a buprenorfina o naloxona')],
            relative: [
              t(lang, 'Gestação (usar monofármaco)', 'Gestación (usar monofármaco)'),
              t(lang, 'Hepatopatia grave (Child-Pugh C)', 'Hepatopatía grave (Child-Pugh C)'),
              t(lang, 'Uso concomitante de BZD ou álcool (risco de depressão respiratória)', 'Uso concomitante de BZD o alcohol')
            ]
          },
          monitoring: [
            t(lang, 'COWS antes de cada dose nas primeiras 48–72h', 'COWS antes de cada dosis primeras 48–72h'),
            t(lang, 'TGO/TGP — basal, 1 mês, 3 meses, depois semestralmente', 'TGO/TGP — basal, 1 mes, 3 meses, luego semestral'),
            t(lang, 'Urinálise toxicológica mensal', 'Urianálisis toxicológico mensual'),
            t(lang, 'Avaliação de saúde mental e risco de recaída', 'Evaluación de salud mental y riesgo de recaída')
          ],
          safetyFlags: {
            bleedingRisk: false, renalHighRisk: false, hepaticCaution: true,
            antidoteAvailable: true, highAlertMedication: true,
            antidote: t(lang, 'Naloxona 0,4–2 mg IV/IM (repetir a cada 2–3 min). Altas doses podem ser necessárias dada a alta afinidade da buprenorfina ao receptor μ.', 'Naloxona 0,4–2 mg IV/IM (repetir cada 2–3 min). Altas dosis pueden necesitarse por la alta afinidad de buprenorfina al receptor μ.'),
            warning: t(lang,
              '⚠️ NUNCA INICIAR SE COWS < 8: O erro clínico mais grave é induzir antes dos sintomas de abstinência — causa abstinência precipitada grave e destrói o vínculo terapêutico. Confirmar sempre última dose de opioide e tempo de abstinência.',
              '⚠️ NUNCA INICIAR SI COWS < 8: El error clínico más grave es inducir antes de los síntomas de abstinencia — causa abstinencia precipitada grave.')
          },
          references: [
            'SAMHSA 2021 — Medications for Opioid Use Disorder (TIP 63)',
            'Wesson DR & Ling W. J Psychoactive Drugs 2003 — COWS scale',
            'Mattick RP et al. Cochrane 2014 — Buprenorphine maintenance vs placebo',
            'Lexicomp', 'Micromedex', 'UpToDate'
          ]
        };
      }
    }

  }); /* fim Object.assign TOXICOLOGIA_DRUGS_DB — BUILD 455-SNC
         PILAR 4: vareniclina + nicotina_terapia (Cessação Tabagismo)
                  acamprosato + dissulfiram (Suporte Alcoolismo)
                  metadona_cronico + buprenorfina_naloxona (Dependência Opioides)
                  6 drugs total — Inauguração Módulo Toxicologia */

})();
/* GOLD33_SELECTIVE:acamprosato:START */
;(function(){var db=window.TOXICOLOGIA_DRUGS_DB;if(!db||!db["acamprosato"])throw new Error("GOLD33_MISSING_CANONICAL:acamprosato");db["acamprosato"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "001",
    "requiredFieldCount": 33,
    "approvedSha256": "53bcfc3dbf1c89900d6f8192c0101c1b064d440c6500738b654f137c419db449",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Acamprosato cálcico.",
    "class": "Fármaco para manutenção de abstinência no transtorno por uso de álcool.",
    "pharmacologicClass": "Mecanismo neuroquímico não completamente elucidado; modula sistemas glutamatérgico/GABAérgico.",
    "commercialNames": "",
    "presentation": "Comprimido gastrorresistente 333 mg no rótulo US consultado.",
    "presentations": "",
    "mechanism": "Ajuda a restaurar o equilíbrio entre neurotransmissão excitatória e inibitória alterado pela exposição crônica ao álcool; mecanismo exato não estabelecido.",
    "pharmacodynamics": "",
    "pharmacokinetics": "",
    "indications": "Manutenção de abstinência alcoólica em pessoas dependentes já abstinentes no início do tratamento, como parte de abordagem psicossocial.",
    "dose": "Rótulo US: 666 mg VO três vezes/dia. Confirmar produto, função renal e protocolo local antes de liberar.",
    "pediatricDose": "Não estabelecida; bloqueada.",
    "renalDose": "Rótulo US: ClCr 30–50 mL/min, 333 mg VO três vezes/dia; ClCr ≤30 mL/min, contraindicado.",
    "hepaticDose": "Sem ajuste numérico proposto nesta etapa; confirmar bula local.",
    "commonAdverseEffects": "Diarreia, náusea, dor abdominal, cefaleia, insônia ou ansiedade.",
    "dangerousAdverseEffects": "Ideação suicida/depressão exige avaliação clínica; reação de hipersensibilidade é possível.",
    "adverseEffects": "",
    "contraindications": "Insuficiência renal grave (ClCr ≤30 mL/min) conforme rótulo US e hipersensibilidade ao produto.",
    "interactions": "Não presumir ausência de interações; revisar tratamento do transtorno por uso de álcool, psicotrópicos e comorbidades.",
    "monitoring": "Função renal antes do início e quando clinicamente indicado; abstinência, humor, ideação suicida e adesão ao cuidado psicossocial.",
    "administration": "VO; engolir comprimido gastrorresistente conforme bula, sem esmagar.",
    "preparation": "",
    "infusionProtocol": "",
    "pregnancy": "Não concluir nesta ficha.",
    "lactation": "Não concluir nesta ficha.",
    "specialPopulations": "",
    "patientEducation": "Não é tratamento de intoxicação ou abstinência aguda. Manter acompanhamento psicossocial e procurar ajuda por piora importante do humor ou ideação suicida.",
    "clinicalPearls": "",
    "guidelineRecommendations": "",
    "safetyFlags": "Avaliar ClCr; cálculo renal automatizado bloqueado até confirmar o produto local.",
    "alerts": "PUBLICAÇÃO BLOQUEADA até documentar SPL/registro primário atual e jurisdição alvo.",
    "references": [
      "DailyMed / NLM. CAMPRAL (acamprosate calcium) label search record. US. Consultado 2026-09-17. https://dailymed.nlm.nih.gov/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/"
  },
  "es": {
    "name": "Acamprosato cálcico.",
    "class": "Fármaco para mantenimiento de abstinencia en el trastorno por consumo de alcohol.",
    "pharmacologicClass": "Mecanismo neuroquímico no completamente dilucidado; modula sistemas glutamatérgico/GABAérgico.",
    "commercialNames": "",
    "presentation": "Comprimido gastrorresistente 333 mg en el etiquetado estadounidense consultado.",
    "presentations": "",
    "mechanism": "Ayuda a restaurar el equilibrio entre neurotransmisión excitatoria e inhibitoria alterado por la exposición crónica al alcohol; el mecanismo exacto no está establecido.",
    "pharmacodynamics": "",
    "pharmacokinetics": "",
    "indications": "Mantenimiento de abstinencia alcohólica en personas dependientes ya abstinentes al inicio del tratamiento, como parte de abordaje psicosocial.",
    "dose": "Etiqueta EE. UU.: 666 mg VO tres veces/día. Confirmar producto, función renal y protocolo local antes de liberar.",
    "pediatricDose": "No establecida; bloqueada.",
    "renalDose": "Etiqueta EE. UU.: ClCr 30–50 ml/min, 333 mg VO tres veces/día; ClCr ≤30 ml/min, contraindicado.",
    "hepaticDose": "Sin ajuste numérico propuesto en esta etapa; confirmar prospecto local.",
    "commonAdverseEffects": "Diarrea, náuseas, dolor abdominal, cefalea, insomnio o ansiedad.",
    "dangerousAdverseEffects": "Ideación suicida/depresión exige evaluación clínica; es posible una reacción de hipersensibilidad.",
    "adverseEffects": "",
    "contraindications": "Insuficiencia renal grave (ClCr ≤30 ml/min) según etiqueta EE. UU. e hipersensibilidad al producto.",
    "interactions": "No presumir ausencia de interacciones; revisar el tratamiento del trastorno por consumo de alcohol, psicotrópicos y comorbilidades.",
    "monitoring": "Función renal antes del inicio y cuando esté clínicamente indicado; abstinencia, estado de ánimo, ideación suicida y adherencia al cuidado psicosocial.",
    "administration": "VO; tragar el comprimido gastrorresistente según prospecto, sin triturar.",
    "preparation": "",
    "infusionProtocol": "",
    "pregnancy": "No concluir en esta ficha.",
    "lactation": "No concluir en esta ficha.",
    "specialPopulations": "",
    "patientEducation": "No es tratamiento de intoxicación o abstinencia aguda. Mantener seguimiento psicosocial y buscar ayuda por empeoramiento importante del ánimo o ideación suicida.",
    "clinicalPearls": "",
    "guidelineRecommendations": "",
    "safetyFlags": "Evaluar ClCr; cálculo renal automatizado bloqueado hasta confirmar el producto local.",
    "alerts": "PUBLICACIÓN BLOQUEADA hasta documentar SPL/registro primario actual y jurisdicción objetivo.",
    "references": [
      "DailyMed / NLM. CAMPRAL (acamprosate calcium) label search record. US. Consultado 2026-09-17. https://dailymed.nlm.nih.gov/"
    ],
    "ref": "https://dailymed.nlm.nih.gov/"
  }
};})();
/* GOLD33_SELECTIVE:acamprosato:END */
/* GOLD33_SELECTIVE:buprenorfina_naloxona:START */
;(function(){var db=window.TOXICOLOGIA_DRUGS_DB;if(!db||!db["buprenorfina_naloxona"])throw new Error("GOLD33_MISSING_CANONICAL:buprenorfina_naloxona");db["buprenorfina_naloxona"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "012",
    "requiredFieldCount": 33,
    "approvedSha256": "33a04a022820507c1688fbebb735cd7d879bc3d0ef30a24f4ed7483f5cac16eb",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Buprenorfina + naloxona",
    "class": "Tratamento de TUO",
    "pharmacologicClass": "Agonista parcial μ com antagonista opioide de baixa biodisponibilidade sublingual",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Filmes/comprimidos SL/bucais em proporção 4:1, p.ex. 2/0,5; 4/1; 8/2; 12/3 mg.",
    "presentations": "Filmes/comprimidos SL/bucais em proporção 4:1, p.ex. 2/0,5; 4/1; 8/2; 12/3 mg.",
    "mechanism": "Agonista parcial μ com antagonista opioide de baixa biodisponibilidade sublingual. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Buprenorfina tem meia-vida longa; naloxona SL tem baixa biodisponibilidade e maior impacto se injetada.",
    "indications": "Tratamento do transtorno por uso de opioides como parte de plano completo.",
    "dose": "Indução após sinais objetivos de abstinência; titular para suprimir abstinência/craving. Manutenção comum 16/4 mg/dia; faixa e máximo dependem do produto.",
    "pediatricDose": "Segurança/formulação dependem da idade; manejo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste usual; cautela em grave.",
    "hepaticDose": "Evitar em insuficiência grave e pode não ser apropriada em moderada por maior exposição à naloxona.",
    "commonAdverseEffects": "Cefaleia, náusea, constipação, sudorese, insônia e sintomas de abstinência.",
    "dangerousAdverseEffects": "Abstinência precipitada, depressão respiratória, hepatotoxicidade, dependência e exposição acidental.",
    "adverseEffects": "Cefaleia, náusea, constipação, sudorese, insônia e sintomas de abstinência. Graves: Abstinência precipitada, depressão respiratória, hepatotoxicidade, dependência e exposição acidental.",
    "contraindications": "Hipersensibilidade; cautela/contraindicações de opioide e insuficiência hepática conforme produto.",
    "interactions": "Benzodiazepínicos, álcool e outros depressores aumentam risco fatal; CYP3A4 e outros opioides exigem revisão.",
    "monitoring": "Abstinência, craving/uso, respiração/sedação, fígado, adesão/desvio, saúde oral e constipação.",
    "administration": "SL/bucal conforme marca; não comer/beber até dissolver. Indução exige COWS/abstinência e tipo de opioide.",
    "preparation": "Não cortar além do permitido; não engolir, mastigar ou injetar.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Buprenorfina isolada é frequentemente preferida na indução gestacional; decisão especializada.",
    "lactation": "Buprenorfina geralmente compatível; monitorar lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Abstinência precipitada, depressão respiratória, hepatotoxicidade, dependência e exposição acidental. Indução/manutenção bloqueadas sem tipo/último uso de opioide, abstinência objetiva, fígado, respiração e depressores SNC.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=buprenorphine+naloxone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.samhsa.gov/substance-use/treatment/options/medications-opioid-use-disorder"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=buprenorphine+naloxone"
  },
  "es": {
    "name": "Buprenorfina + naloxona",
    "class": "Tratamiento de TUO",
    "pharmacologicClass": "Agonista parcial μ con antagonista opioide de baja biodisponibilidad sublingual",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Películas/comprimidos SL/bucales en proporción 4:1, p. ej. 2/0,5; 4/1; 8/2; 12/3 mg.",
    "presentations": "Películas/comprimidos SL/bucales en proporción 4:1, p. ej. 2/0,5; 4/1; 8/2; 12/3 mg.",
    "mechanism": "Agonista parcial μ con antagonista opioide de baja biodisponibilidad sublingual. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Buprenorfina tiene semivida larga; naloxona SL baja biodisponibilidad y mayor impacto si se inyecta.",
    "indications": "Tratamiento del trastorno por uso de opioides como parte de plan completo.",
    "dose": "Inducción tras signos objetivos de abstinencia; titular para suprimir abstinencia/craving. Mantenimiento común 16/4 mg/día; rango y máximo dependen del producto.",
    "pediatricDose": "Seguridad/formulación dependen de edad; manejo especializado. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste habitual; precaución en grave.",
    "hepaticDose": "Evitar en insuficiencia grave y puede no ser apropiada en moderada por mayor exposición a naloxona.",
    "commonAdverseEffects": "Cefalea, náusea, estreñimiento, sudoración, insomnio y síntomas de abstinencia.",
    "dangerousAdverseEffects": "Abstinencia precipitada, depresión respiratoria, hepatotoxicidad, dependencia y exposición accidental.",
    "adverseEffects": "Cefalea, náusea, estreñimiento, sudoración, insomnio y síntomas de abstinencia. Graves: Abstinencia precipitada, depresión respiratoria, hepatotoxicidad, dependencia y exposición accidental.",
    "contraindications": "Hipersensibilidad; precauciones/contraindicaciones de opioide e insuficiencia hepática según producto.",
    "interactions": "Benzodiacepinas, alcohol y otros depresores aumentan riesgo fatal; CYP3A4 y otros opioides requieren revisión.",
    "monitoring": "Abstinencia, craving/uso, respiración/sedación, hígado, adherencia/desvío, salud oral y estreñimiento.",
    "administration": "SL/bucal según marca; no comer/beber hasta disolver. Inducción exige COWS/abstinencia y tipo de opioide.",
    "preparation": "No cortar salvo permiso; no tragar, masticar ni inyectar.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Buprenorfina sola suele preferirse en inducción gestacional; decisión especializada.",
    "lactation": "Buprenorfina generalmente compatible; vigilar lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Abstinencia precipitada, depresión respiratoria, hepatotoxicidad, dependencia y exposición accidental. Indução/manutenção bloqueadas sem tipo/último uso de opioide, abstinência objetiva, fígado, respiração e depressores SNC.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=buprenorphine+naloxone",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.samhsa.gov/substance-use/treatment/options/medications-opioid-use-disorder"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=buprenorphine+naloxone"
  }
};})();
/* GOLD33_SELECTIVE:buprenorfina_naloxona:END */
