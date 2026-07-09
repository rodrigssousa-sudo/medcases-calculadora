/* ============================================================
   MedCases Pro — Módulo: ANALGÉSICOS / ANTITÉRMICOS
   Expõe: window.ANALGESICOS_DRUGS_DB

   BUILD 262 (2026-07-06) — Migração de schema:
   O arquivo estava vazio (window.ANALGESICOS_DRUGS_DB = []), com
   schema documentado de array + dose(patientData,lang) nativo, mas
   NUNCA populado. Para a primeira entrega de conteúdo real (Grupo 1:
   Paracetamol/Acetaminofén + Metamizol/Dipirona), adotou-se o MESMO
   padrão de schema estático objeto-mapa {pt,es} já usado nos Grupos
   73–76 de database/cardio.js — consistente, testado, e já suportado
   nativamente pelo fallback sintético de _adaptExternalDB() em
   index.html (dose.adult.standard/dose.pediatric.standard → doseStr).
   Consumido via _injectObjectDB(window.ANALGESICOS_DRUGS_DB,
   'Analgésico e Antipirético') — NÃO mais via _injectArrayDB().

   Schema de cada entrada:
   {
     name: {pt,es}, category, class: {pt,es},
     indications: {pt:[...], es:[...]},
     commercialNames: {br:[...], ar:[...]},
     presentation: {pt:[...], es:[...]},
     mechanism: {pt,es},
     dose: { adult: { standard: {pt,es} }, pediatric: { standard: {pt,es} } | null },
     administration: {pt:[...], es:[...]},
     renalAdjustment: { required, message:{pt,es} },
     hepaticAdjustment: { required, message:{pt,es} },
     commonAdverseEffects: {pt:[...], es:[...]},
     dangerousAdverseEffects: {pt:[...], es:[...]},
     contraindications: { absolute:{pt:[...],es:[...]}, relative:{pt:[...],es:[...]} },
     safetyFlags: { bleedingRisk, renalHighRisk, hepaticCaution, antidoteAvailable,
                    highAlertMedication, warning:{pt,es} }
   }
============================================================ */
(function () {

  window.ANALGESICOS_DRUGS_DB = {};

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 1 — ANALGÉSICOS/ANTIPIRÉTICOS NÃO OPIOIDES
     Paracetamol (Acetaminofén) · Metamizol (Dipirona)
     Os 2 analgésicos/antipiréticos mais prescritos mundialmente.
     Verificação anti-duplicação: nenhuma entrada prévia em nenhum banco
     de fármacos do projeto (analgesicos.js estava vazio; buscas por
     "paracetamol"/"metamizol"/"dipirona"/"acetaminofen" em cardio.js,
     antimicrobianos.js e psicofarmacos.js não retornaram schemas
     próprios — apenas menções em texto livre de outras interações/
     protocolos, o que não configura duplicata de cadastro).
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── PARACETAMOL / ACETAMINOFÉN ─────────────────────────────────────── */
    "paracetamol": {
      name: { pt: 'Paracetamol', es: 'Paracetamol / Acetaminofén' },
      category: 'analgesia',
      class: { pt: 'Analgésico e Antipirético Não Opioide', es: 'Analgésico y Antipirético No Opioide' },
      indications: {
        pt: ['Dor leve a moderada', 'Febre', 'Primeira linha em osteoartrite e dor musculoesquelética'],
        es: ['Dolor leve a moderado', 'Fiebre', 'Primera línea en osteoartritis y dolor musculoesquelético']
      },
      commercialNames: { br: ['Tylenol', 'Tylemax'], ar: ['Tafirol', 'Tylenol'] },
      presentation: { pt: ['Comprimidos 500 mg', '750 mg', 'Solução oral 200 mg/mL', 'Frasco-ampola IV 10 mg/mL'], es: ['Comprimidos 500 mg', '750 mg', 'Solución oral 200 mg/mL', 'Vial IV 10 mg/mL'] },
      mechanism: {
        pt: 'Inibe a síntese de prostaglandinas predominantemente no Sistema Nervoso Central (via inibição da enzima COX-3 e interações com o sistema serotoninérgico descendente). Quase desprovido de efeito anti-inflamatório periférico.',
        es: 'Inhibe la síntesis de prostaglandinas predominantemente en el Sistema Nervioso Central (vía inhibición de la enzima COX-3 e interacciones con el sistema serotoninérgico descendente). Casi desprovisto de efecto antiinflamatorio periférico.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'VO: 500 a 1000 mg a cada 6 ou 8 horas. Dose máxima diária: 4000 mg (4g) em adultos hígidos. (Limitar a 3g/dia em idosos crônicos). IV: 1000 mg a cada 6h.',
            es: 'VO: 500 a 1000 mg cada 6 u 8 horas. Dosis máxima diaria: 4000 mg (4g) en adultos sanos. (Limitar a 3g/día en ancianos crónicos). IV: 1000 mg cada 6h.'
          }
        },
        pediatric: {
          standard: {
            pt: '10 a 15 mg/kg/dose a cada 6 horas. Dose máxima: 75 mg/kg/dia.',
            es: '10 a 15 mg/kg/dosis cada 6 horas. Dosis máxima: 75 mg/kg/día.'
          }
        }
      },
      administration: { pt: ['Infusão IV deve ser feita em 15 minutos.', 'Atenção às formulações combinadas (ex: Tylex, Paco) para não exceder a dose diária.'], es: ['Infusión IV debe realizarse en 15 minutos.', 'Atención a formulaciones combinadas (ej: Tylex, Paco) para no exceder la dosis diaria.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr 10-50 mL/min: intervalo a cada 6h. ClCr < 10 mL/min: aumentar intervalo para 8h.', es: 'ClCr 10-50 mL/min: intervalo cada 6h. ClCr < 10 mL/min: aumentar intervalo a 8h.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Disfunção hepática crônica/alcoolismo: Limitar dose máxima a 2g/dia. Contraindicado em insuficiência hepática aguda ou descompensada.', es: 'Disfunción hepática crónica/alcoholismo: Limitar dosis máxima a 2g/día. Contraindicado en insuficiencia hepática aguda o descompensada.' } },
      commonAdverseEffects: { pt: ['Geralmente muito bem tolerado', 'Náusea leve (VO)', 'Hipotensão transitória (se IV rápido)'], es: ['Generalmente muy bien tolerado', 'Náusea leve (VO)', 'Hipotensión transitoria (si IV rápido)'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade fulminante (necrose hepática por acúmulo do metabólito tóxico NAPQI em superdosagem)'], es: ['Hepatotoxicidad fulminante (necrosis hepática por acumulación del metabolito tóxico NAPQI en sobredosis)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave', 'Insuficiência hepática grave ou aguda'], es: ['Hipersensibilidad grave', 'Insuficiencia hepática grave o aguda'] },
        relative: { pt: ['Alcoolismo crônico', 'Desnutrição severa crônica (depleção de glutationa)'], es: ['Alcoholismo crónico', 'Desnutrición severa crónica (depleción de glutatión)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'ANTÍDOTO: N-acetilcisteína (NAC). Superdosagem (>7,5g a 10g em adultos) satura a via de glucuronidação e acumula NAPQI. O Nomograma de Rumack-Matthew guia o tratamento.', es: 'ANTÍDOTO: N-acetilcisteína (NAC). Sobredosis (>7,5g a 10g en adultos) satura la vía de glucuronidación y acumula NAPQI. El Nomograma de Rumack-Matthew guía el tratamiento.' }
      }
    },

    /* ── METAMIZOL / DIPIRONA ───────────────────────────────────────────── */
    "metamizol": {
      name: { pt: 'Dipirona', es: 'Metamizol' },
      category: 'analgesia',
      class: { pt: 'Analgésico, Antipirético e Antiespasmódico (Derivado Pirazolônico)', es: 'Analgésico, Antipirético y Antiespasmódico (Derivado Pirazolónico)' },
      indications: {
        pt: ['Dor moderada a intensa', 'Febre refratária a outros antipiréticos', 'Cólicas viscerais (renal, biliar)'],
        es: ['Dolor moderado a intenso', 'Fiebre refractaria a otros antipiréticos', 'Cólicos viscerales (renal, biliar)']
      },
      commercialNames: { br: ['Novalgina', 'Lisador'], ar: ['Novalgina', 'Buscapina Compositum (asociado)'] },
      presentation: { pt: ['Comprimidos 500 mg', '1 g', 'Solução oral gotas 500 mg/mL', 'Ampolas IV/IM 500 mg/mL'], es: ['Comprimidos 500 mg', '1 g', 'Solución oral gotas 500 mg/mL', 'Ampollas IV/IM 500 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo complexo: inibição de COX central e periférica (variante da COX-3), ativação de sistemas opioides e canabinoides endógenos e inibição da liberação de Ca2+ intracelular promovendo efeito antiespasmódico sobre a musculatura lisa.',
        es: 'Mecanismo complejo: inhibición de COX central y periférica (variante de la COX-3), activación de sistemas opioides y cannabinoides endógenos e inhibición de la liberación de Ca2+ intracelular promoviendo efecto antiespasmódico sobre la musculatura lisa.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'VO: 500 mg a 1000 mg a cada 6 ou 8 horas. Dose máxima: 4g/dia. IV/IM: 1 a 2 g a cada 6 ou 8 horas (lento).',
            es: 'VO: 500 mg a 1000 mg cada 6 u 8 horas. Dosis máxima: 4g/día. IV/IM: 1 a 2 g cada 6 u 8 horas (lento).'
          }
        },
        pediatric: {
          standard: {
            pt: '10 a 25 mg/kg/dose a cada 6 horas.',
            es: '10 a 25 mg/kg/dosis cada 6 horas.'
          }
        }
      },
      administration: { pt: ['Infusão IV DEVE SER LENTA (não mais que 1 mL/minuto) para evitar hipotensão grave.', 'A injeção IM pode ser dolorosa.'], es: ['La infusión IV DEBE SER LENTA (no más de 1 mL/minuto) para evitar hipotensión grave.', 'La inyección IM puede ser dolorosa.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar doses elevadas prolongadas no ClCr < 30 mL/min, pois os metabólitos ativos têm excreção renal.', es: 'Evitar dosis elevadas prolongadas en ClCr < 30 mL/min, pues los metabolitos activos tienen excreción renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar altas doses. Aumentar intervalo.', es: 'Evitar altas dosis. Aumentar intervalo.' } },
      commonAdverseEffects: { pt: ['Hipotensão (se injeção rápida)', 'Cromatúria (urina avermelhada - inofensivo)'], es: ['Hipotensión (si inyección rápida)', 'Cromaturia (orina rojiza - inofensivo)'] },
      dangerousAdverseEffects: { pt: ['Agranulocitose fatal (incidência muito rara, mas motivou proibição nos EUA)', 'Choque anafilático', 'Síndrome de Kounis (vasoespasmo coronariano alérgico)'], es: ['Agranulocitosis fatal (incidencia muy rara, pero motivó prohibición en EE.UU.)', 'Choque anafiláctico', 'Síndrome de Kounis (vasoespasmo coronario alérgico)'] },
      contraindications: {
        absolute: { pt: ['Porfiria hepática aguda intermitente', 'Deficiência de G6PD (risco de hemólise)', 'Histórico de agranulocitose induzida por medicamentos', 'Terceiro trimestre de gestação (fechamento prematuro do ducto arterioso)'], es: ['Porfiria hepática aguda intermitente', 'Deficiencia de G6PD (riesgo de hemólisis)', 'Historial de agranulocitosis inducida por medicamentos', 'Tercer trimestre de embarazo (cierre prematuro del ductus arterioso)'] },
        relative: { pt: ['Hipotensão arterial preexistente ou instabilidade hemodinâmica'], es: ['Hipotensión arterial preexistente o inestabilidad hemodinámica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Em caso de febre alta inexplicada, calafrios, dor de garganta ou lesões orais durante o uso, suspender imediatamente e realizar hemograma (suspeita de agranulocitose).', es: 'En caso de fiebre alta inexplicada, escalofríos, dolor de garganta o lesiones orales durante el uso, suspender inmediatamente y realizar hemograma (sospecha de agranulocitosis).' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 1 (Analgésicos/Antipiréticos não opioides: paracetamol · metamizol) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 2 — AINEs (ÁCIDO ACETILSALICÍLICO/AAS + IBUPROFENO)
     BUILD 263 (2026-07-06) — Disciplina "check antes de escrever" aplicada:

     ⚠️ ÁCIDO ACETILSALICÍLICO (AAS): DUPLICATA CONFIRMADA E ISOLADA.
     A submissão do usuário para "acido_acetilsalicilico" duplica a entrada
     JÁ EXISTENTE E MAIS RICA `aas` em database/cardio.js (Grupo 20.2),
     que possui: interactions.major, antiplateletMonitoring,
     perioperativeManagement, reversal, bleedingRisk, contraindicações
     absolutas/relativas completas — schema muito mais robusto que o
     objeto estático simples submetido agora. Além disso, o motor de
     interações já trata "acido_acetilsalicilico" como CHAVE CANÔNICA
     (DRUG_ALIASES["aas"] → "acido_acetilsalicilico", criado no BUILD 254)
     apontando para a entrada rica de cardio.js — portanto ativar este
     objeto aqui causaria um DOWNGRADE CRÍTICO de dados clínicos em
     produção. A submissão foi isolada abaixo em variável morta, NUNCA
     atribuída a window.ANALGESICOS_DRUGS_DB (zero efeito em runtime),
     preservando a entrada `aas` de cardio.js como única fonte de verdade.

     ✅ IBUPROFENO: confirmado GENUINAMENTE NOVO. Nenhum banco do projeto
     (cardio.js, antimicrobianos.js, psicofarmacos.js, analgesicos.js)
     possuía schema de dose/calculadora para ibuprofeno — apenas menções
     em texto livre e como alvo de interação em nós de outras drogas
     (fluoroquinolonas, IECA/BRA, varfarina, metotrexato, etc. em
     interacoes.js). Ativado como novo fármaco do Grupo 2.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── IBUPROFENO (ativo) ────────────────────────────────────────────── */
    "ibuprofeno": {
      name: { pt: 'Ibuprofeno', es: 'Ibuprofeno' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido propiônico', es: 'AINE derivado del ácido propiónico' },
      indications: {
        pt: ['Dor leve a moderada', 'Febre', 'Dismenorreia primária', 'Doenças inflamatórias musculoesqueléticas (Artrite reumatoide, Osteoartrite)'],
        es: ['Dolor leve a moderado', 'Fiebre', 'Dismenorrea primaria', 'Enfermedades inflamatorias musculoesqueléticas (Artritis reumatoide, Osteoartritis)']
      },
      commercialNames: { br: ['Alivium', 'Advil', 'Buscofem', 'Ibuprofeno'], ar: ['Ibupirac', 'Actron'] },
      presentation: { pt: ['Comprimidos/Cápsulas moles 200, 400 e 600 mg', 'Suspensão oral 50 mg/mL ou 100 mg/mL'], es: ['Comprimidos/Cápsulas blandas 200, 400 y 600 mg', 'Suspensión oral 50 mg/mL o 100 mg/mL'] },
      mechanism: {
        pt: 'Inibição REVERSÍVEL e não seletiva das enzimas ciclooxigenases (COX-1 e COX-2). Reduz a síntese de prostaglandinas e tromboxanos em todo o corpo, promovendo analgesia, redução da inflamação e antipirese.',
        es: 'Inhibición REVERSIBLE y no selectiva de las enzimas ciclooxigenasas (COX-1 y COX-2). Reduce la síntesis de prostaglandinas y tromboxanos en todo el cuerpo, promoviendo analgesia, reducción de la inflamación y antipiresis.'
      },
      dose: {
        adult: {
          standard: {
            pt: '200 a 600 mg VO a cada 6 ou 8 horas. Dose máxima diária: 3200 mg (Dose habitual OTC: 1200 mg/dia).',
            es: '200 a 600 mg VO cada 6 u 8 horas. Dosis máxima diaria: 3200 mg (Dosis habitual OTC: 1200 mg/día).'
          }
        },
        pediatric: {
          standard: {
            pt: '5 a 10 mg/kg/dose a cada 6 a 8 horas. Dose máxima: 40 mg/kg/dia.',
            es: '5 a 10 mg/kg/dosis cada 6 a 8 horas. Dosis máxima: 40 mg/kg/día.'
          }
        }
      },
      administration: { pt: ['Tomar junto com alimentos ou leite para minimizar irritação gástrica.'], es: ['Tomar junto con alimentos o leche para minimizar irritación gástrica.'] },
      renalAdjustment: { required: true, message: { pt: 'EVITAR uso se ClCr < 30 mL/min. As prostaglandinas renais são vitais para a perfusão; inibi-las causa lesão renal aguda (LRA) prérrenal grave.', es: 'EVITAR uso si ClCr < 30 mL/min. Las prostaglandinas renales son vitales para la perfusión; inhibirlas causa lesión renal aguda (LRA) prerrenal grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cautela na insuficiência hepática moderada. Evitar na severa.', es: 'Precaución en insuficiencia hepática moderada. Evitar en severa.' } },
      commonAdverseEffects: { pt: ['Dispepsia', 'Azia', 'Náusea', 'Retenção de fluidos (edema leve)'], es: ['Dispepsia', 'Pirosis', 'Náusea', 'Retención de fluidos (edema leve)'] },
      dangerousAdverseEffects: { pt: ['Hemorragia/Úlcera gastrointestinal', 'Lesão Renal Aguda (LRA)', 'Aumento do risco cardiovascular (IAM e AVC em uso crônico de altas doses)', 'Piora da IC congestiva'], es: ['Hemorragia/Úlcera gastrointestinal', 'Lesión Renal Aguda (LRA)', 'Aumento del riesgo cardiovascular (IAM y ACV en uso crónico de altas dosis)', 'Empeoramiento de la IC congestiva'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa ou sangramento GI', 'Cirurgia de revascularização miocárdica (CABG) recente', 'Terceiro trimestre de gravidez (fechamento do ducto arterioso)'], es: ['Úlcera péptica activa o sangrado GI', 'Cirugía de revascularización miocárdica (CABG) reciente', 'Tercer trimestre de embarazo (cierre del ductus arterioso)'] },
        relative: { pt: ['Insuficiência cardíaca', 'Hipertensão arterial não controlada', 'Uso concomitante de anticoagulantes'], es: ['Insuficiencia cardíaca', 'Hipertensión arterial no controlada', 'Uso concomitante de anticoagulantes'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O ibuprofeno possui Efeito de Classe dos AINEs: aumenta o risco de eventos trombóticos cardiovasculares e gastrointestinais. Eleva a PA e antagoniza o efeito de quase todos os anti-hipertensivos.', es: 'El ibuprofeno posee Efecto de Clase de los AINEs: aumenta el riesgo de eventos trombóticos cardiovasculares y gastrointestinales. Eleva la PA y antagoniza el efecto de casi todos los antihipertensivos.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 2 (ibuprofeno ativo) */

  /* ══════════════════════════════════════════════════════════════════════════════
     VARIÁVEL MORTA — Grupo 2, duplicata isolada (NUNCA atribuída a
     window.ANALGESICOS_DRUGS_DB, zero efeito em runtime).
     Preservada aqui apenas para rastreabilidade/auditoria do lote recebido.
  ══════════════════════════════════════════════════════════════════════════════ */
  const _grupo2_aas_duplicata_NAO_USAR = {
  }; /* fim _grupo2_aas_duplicata_NAO_USAR — NUNCA atribuída a window.ANALGESICOS_DRUGS_DB */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 3 — AINEs (NAPROXENO + DICLOFENACO)
     BUILD 264 (2026-07-06) — Disciplina "check antes de escrever" aplicada
     sob o novo SOP de autonomia total (auditoria + execução na mesma
     iteração):

     ✅ NAPROXENO: confirmado GENUINAMENTE NOVO. Nenhum banco do projeto
     (cardio.js, antimicrobianos.js, psicofarmacos.js, analgesicos.js)
     possuía schema de dose/calculadora — apenas menções em texto livre
     (ex: "AINEs (ibuprofeno, naproxeno, diclofenaco)") em condutas de
     outras interações de cardio.js. Ativado como novo fármaco.

     ✅ DICLOFENACO: mesma verificação — GENUINAMENTE NOVO, mesmo padrão
     de ausência (apenas texto livre em cardio.js). Ativado como novo
     fármaco.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── NAPROXENO ─────────────────────────────────────────────────────── */
    "naproxeno": {
      name: { pt: 'Naproxeno', es: 'Naproxeno' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido propiônico', es: 'AINE derivado del ácido propiónico' },
      indications: {
        pt: ['Dor leve a moderada', 'Febre', 'Dismenorreia primária', 'Doenças inflamatórias musculoesqueléticas (Artrite reumatoide, Osteoartrite, Espondilite anquilosante)', 'Gota aguda'],
        es: ['Dolor leve a moderado', 'Fiebre', 'Dismenorrea primaria', 'Enfermedades inflamatorias musculoesqueléticas (Artritis reumatoide, Osteoartritis, Espondilitis anquilosante)', 'Gota aguda']
      },
      commercialNames: { br: ['Flanax', 'Naprosyn', 'Naprix'], ar: ['Flanax', 'Naxen'] },
      presentation: { pt: ['Comprimidos 250, 500 e 550 mg', 'Suspensão oral 25 mg/mL'], es: ['Comprimidos 250, 500 y 550 mg', 'Suspensión oral 25 mg/mL'] },
      mechanism: {
        pt: 'Inibição REVERSÍVEL e não seletiva das enzimas ciclooxigenases (COX-1 e COX-2), reduzindo a síntese de prostaglandinas e tromboxanos. Possui meia-vida plasmática longa (12-17h), permitindo posologia de 2x/dia, e é considerado um dos AINEs não seletivos com perfil cardiovascular relativamente mais favorável (menor risco trombótico que coxibes e diclofenaco em estudos observacionais).',
        es: 'Inhibición REVERSIBLE y no selectiva de las enzimas ciclooxigenasas (COX-1 y COX-2), reduciendo la síntesis de prostaglandinas y tromboxanos. Posee vida media plasmática larga (12-17h), permitiendo posología de 2 veces/día, y es considerado uno de los AINEs no selectivos con perfil cardiovascular relativamente más favorable (menor riesgo trombótico que coxibes y diclofenaco en estudios observacionales).'
      },
      dose: {
        adult: {
          standard: {
            pt: '250 a 500 mg VO a cada 12 horas. Dose máxima diária: 1250 mg (crise aguda) ou 1000 mg (manutenção). Gota aguda: 750 mg dose inicial, seguido de 250 mg a cada 8h.',
            es: '250 a 500 mg VO cada 12 horas. Dosis máxima diaria: 1250 mg (crisis aguda) o 1000 mg (mantenimiento). Gota aguda: 750 mg dosis inicial, seguido de 250 mg cada 8h.'
          }
        },
        pediatric: {
          standard: {
            pt: '5 a 7 mg/kg/dose a cada 8 a 12 horas (crianças > 2 anos). Dose máxima: 15 mg/kg/dia.',
            es: '5 a 7 mg/kg/dosis cada 8 a 12 horas (niños > 2 años). Dosis máxima: 15 mg/kg/día.'
          }
        }
      },
      administration: { pt: ['Tomar junto com alimentos ou leite para minimizar irritação gástrica.', 'Manter hidratação adequada durante o tratamento.'], es: ['Tomar junto con alimentos o leche para minimizar irritación gástrica.', 'Mantener hidratación adecuada durante el tratamiento.'] },
      renalAdjustment: { required: true, message: { pt: 'EVITAR uso se ClCr < 30 mL/min. As prostaglandinas renais são vitais para a perfusão; inibi-las causa lesão renal aguda (LRA) prérrenal grave.', es: 'EVITAR uso si ClCr < 30 mL/min. Las prostaglandinas renales son vitales para la perfusión; inhibirlas causa lesión renal aguda (LRA) prerrenal grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cautela na insuficiência hepática moderada. Evitar na severa.', es: 'Precaución en insuficiencia hepática moderada. Evitar en severa.' } },
      commonAdverseEffects: { pt: ['Dispepsia', 'Azia', 'Náusea', 'Cefaleia', 'Tontura'], es: ['Dispepsia', 'Pirosis', 'Náusea', 'Cefalea', 'Mareo'] },
      dangerousAdverseEffects: { pt: ['Hemorragia/Úlcera gastrointestinal', 'Lesão Renal Aguda (LRA)', 'Aumento do risco cardiovascular (IAM e AVC em uso crônico de altas doses, embora com perfil relativamente mais favorável que outros AINEs)', 'Piora da IC congestiva'], es: ['Hemorragia/Úlcera gastrointestinal', 'Lesión Renal Aguda (LRA)', 'Aumento del riesgo cardiovascular (IAM y ACV en uso crónico de altas dosis, aunque con perfil relativamente más favorable que otros AINEs)', 'Empeoramiento de la IC congestiva'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa ou sangramento GI', 'Cirurgia de revascularização miocárdica (CABG) recente', 'Terceiro trimestre de gravidez (fechamento do ducto arterioso)'], es: ['Úlcera péptica activa o sangrado GI', 'Cirugía de revascularización miocárdica (CABG) reciente', 'Tercer trimestre de embarazo (cierre del ductus arterioso)'] },
        relative: { pt: ['Insuficiência cardíaca', 'Hipertensão arterial não controlada', 'Uso concomitante de anticoagulantes'], es: ['Insuficiencia cardíaca', 'Hipertensión arterial no controlada', 'Uso concomitante de anticoagulantes'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O naproxeno possui Efeito de Classe dos AINEs: aumenta o risco de eventos trombóticos cardiovasculares e gastrointestinais, embora com perfil cardiovascular relativamente mais favorável entre os AINEs não seletivos. Eleva a PA e antagoniza o efeito de quase todos os anti-hipertensivos.', es: 'El naproxeno posee Efecto de Clase de los AINEs: aumenta el riesgo de eventos trombóticos cardiovasculares y gastrointestinales, aunque con perfil cardiovascular relativamente más favorable entre los AINEs no selectivos. Eleva la PA y antagoniza el efecto de casi todos los antihipertensivos.' }
      }
    },

    /* ── DICLOFENACO ───────────────────────────────────────────────────── */
    "diclofenaco": {
      name: { pt: 'Diclofenaco', es: 'Diclofenaco' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido fenilacético', es: 'AINE derivado del ácido fenilacético' },
      indications: {
        pt: ['Dor leve a moderada', 'Doenças inflamatórias musculoesqueléticas (Artrite reumatoide, Osteoartrite, Espondilite anquilosante)', 'Cólica renal', 'Dismenorreia primária', 'Uso tópico em dor musculoesquelética localizada'],
        es: ['Dolor leve a moderado', 'Enfermedades inflamatorias musculoesqueléticas (Artritis reumatoide, Osteoartritis, Espondilitis anquilosante)', 'Cólico renal', 'Dismenorrea primaria', 'Uso tópico en dolor musculoesquelético localizado']
      },
      commercialNames: { br: ['Voltaren', 'Cataflam', 'Diclofen'], ar: ['Voltaren', 'Flogoril'] },
      presentation: { pt: ['Comprimidos 50 mg (potássico/Cataflam) e 50-100 mg (sódico/Voltaren)', 'Ampolas IM 75 mg/3mL', 'Gel tópico 1%'], es: ['Comprimidos 50 mg (potásico/Cataflam) y 50-100 mg (sódico/Voltaren)', 'Ampollas IM 75 mg/3mL', 'Gel tópico 1%'] },
      mechanism: {
        pt: 'Inibição REVERSÍVEL e não seletiva das enzimas ciclooxigenases (COX-1 e COX-2), com discreta preferência pela COX-2. Reduz a síntese de prostaglandinas e tromboxanos. Possui, entre os AINEs não seletivos, o maior risco cardiovascular relativo (trombótico) documentado em metanálises, comparável a alguns coxibes.',
        es: 'Inhibición REVERSIBLE y no selectiva de las enzimas ciclooxigenasas (COX-1 y COX-2), con discreta preferencia por la COX-2. Reduce la síntesis de prostaglandinas y tromboxanos. Posee, entre los AINEs no selectivos, el mayor riesgo cardiovascular relativo (trombótico) documentado en metaanálisis, comparable a algunos coxibes.'
      },
      dose: {
        adult: {
          standard: {
            pt: '50 mg VO a cada 8 horas ou 75 mg a cada 12 horas. Dose máxima diária: 150 mg. IM: 75 mg 1x/dia (máx 2 dias consecutivos).',
            es: '50 mg VO cada 8 horas o 75 mg cada 12 horas. Dosis máxima diaria: 150 mg. IM: 75 mg 1 vez/día (máx 2 días consecutivos).'
          }
        },
        pediatric: {
          standard: {
            pt: '0,5 a 2 mg/kg/dia divididos em 2 a 3 doses (crianças > 1 ano). Dose máxima: 3 mg/kg/dia.',
            es: '0,5 a 2 mg/kg/día divididos en 2 a 3 dosis (niños > 1 año). Dosis máxima: 3 mg/kg/día.'
          }
        }
      },
      administration: { pt: ['Tomar junto com alimentos para minimizar irritação gástrica.', 'Comprimidos de revestimento entérico não devem ser partidos/mastigados.'], es: ['Tomar junto con alimentos para minimizar irritación gástrica.', 'Comprimidos de cubierta entérica no deben partirse/masticarse.'] },
      renalAdjustment: { required: true, message: { pt: 'EVITAR uso se ClCr < 30 mL/min. As prostaglandinas renais são vitais para a perfusão; inibi-las causa lesão renal aguda (LRA) prérrenal grave.', es: 'EVITAR uso si ClCr < 30 mL/min. Las prostaglandinas renales son vitales para la perfusión; inhibirlas causa lesión renal aguda (LRA) prerrenal grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Risco de hepatotoxicidade idiossincrática (transaminases elevadas). Cautela na insuficiência hepática moderada. Evitar na severa.', es: 'Riesgo de hepatotoxicidad idiosincrática (transaminasas elevadas). Precaución en insuficiencia hepática moderada. Evitar en severa.' } },
      commonAdverseEffects: { pt: ['Dispepsia', 'Azia', 'Náusea', 'Cefaleia', 'Elevação transitória de transaminases'], es: ['Dispepsia', 'Pirosis', 'Náusea', 'Cefalea', 'Elevación transitoria de transaminasas'] },
      dangerousAdverseEffects: { pt: ['Hemorragia/Úlcera gastrointestinal', 'Lesão Renal Aguda (LRA)', 'Maior risco cardiovascular (IAM e AVC) entre os AINEs não seletivos', 'Hepatotoxicidade idiossincrática grave', 'Piora da IC congestiva'], es: ['Hemorragia/Úlcera gastrointestinal', 'Lesión Renal Aguda (LRA)', 'Mayor riesgo cardiovascular (IAM y ACV) entre los AINEs no selectivos', 'Hepatotoxicidad idiosincrática grave', 'Empeoramiento de la IC congestiva'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa ou sangramento GI', 'Cirurgia de revascularização miocárdica (CABG) recente', 'Terceiro trimestre de gravidez (fechamento do ducto arterioso)', 'Insuficiência cardíaca grave (NYHA II-IV)'], es: ['Úlcera péptica activa o sangrado GI', 'Cirugía de revascularización miocárdica (CABG) reciente', 'Tercer trimestre de embarazo (cierre del ductus arterioso)', 'Insuficiencia cardíaca grave (NYHA II-IV)'] },
        relative: { pt: ['Insuficiência cardíaca leve/moderada', 'Hipertensão arterial não controlada', 'Uso concomitante de anticoagulantes', 'Doença hepática preexistente'], es: ['Insuficiencia cardíaca leve/moderada', 'Hipertensión arterial no controlada', 'Uso concomitante de anticoagulantes', 'Enfermedad hepática preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O diclofenaco possui o MAIOR risco cardiovascular trombótico entre os AINEs não seletivos (comparável a coxibes em metanálises), além de risco de hepatotoxicidade idiossincrática. Eleva a PA e antagoniza o efeito de quase todos os anti-hipertensivos.', es: 'El diclofenaco posee el MAYOR riesgo cardiovascular trombótico entre los AINEs no selectivos (comparable a coxibes en metaanálisis), además de riesgo de hepatotoxicidad idiosincrática. Eleva la PA y antagoniza el efecto de casi todos los antihipertensivos.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 3 (naproxeno + diclofenaco, ambos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 4 — AINEs (CETOROLACO + CETOPROFENO + MELOXICAM + PIROXICAM)
     BUILD 265 (2026-07-06) — Executado sob o SOP de Autonomia Total
     (auditoria + execução na mesma iteração).

     ✅ Todos os 4 fármacos confirmados GENUINAMENTE NOVOS: nenhum banco
     do projeto (cardio.js, antimicrobianos.js, psicofarmacos.js,
     analgesicos.js) possuía schema de dose/calculadora para
     cetorolaco/ketorolac, cetoprofeno/ketoprofeno, meloxicam ou
     piroxicam (apenas menções em texto livre e/ou já como alvos de
     autocomplete pré-configurados, sem qualquer schema clínico
     duplicado). Todos ativados diretamente.

     GRAFIA CANÔNICA: "cetorolaco" e "cetoprofeno" adotados como chaves
     (grafia PT-BR), consistente com o restante da base (cetoprofeno já
     usado dessa forma em interacoes.js/index.html); "ketorolac"/
     "ketoprofeno" (grafia ES/EN) tratados apenas como rótulo es: dentro
     do próprio objeto, sem chave alternativa — nenhuma colisão com
     DRUG_ALIASES pré-existente.

     Doses reaninhadas de dose.adult/dose.pediatric (flat, conforme
     submissão) para dose.adult.standard/dose.pediatric.standard,
     seguindo a convenção obrigatória do schema deste arquivo (exigida
     pelo fallback sintético de _adaptExternalDB() em index.html).
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── CETOROLACO / KETOROLAC ─────────────────────────────────────────── */
    "cetorolaco": {
      name: { pt: 'Cetorolaco', es: 'Ketorolac' },
      category: 'analgesia',
      class: { pt: 'AINE (Elevada potência analgésica)', es: 'AINE (Elevada potencia analgésica)' },
      indications: {
        pt: ['Dor aguda de moderada a severa (intensidade comparável a opioides)', 'Cólica renal', 'Dor pós-operatória aguda'],
        es: ['Dolor agudo de moderado a severo (intensidad comparable a opioides)', 'Cólico renal', 'Dolor posoperatorio agudo']
      },
      commercialNames: { br: ['Toragesic', 'Deocil'], ar: ['Sinalgia', 'Ketorolac'] },
      presentation: { pt: ['Comprimidos sublinguais 10 mg', 'Ampolas IM/IV 30 mg/mL'], es: ['Comprimidos sublinguales 10 mg', 'Ampollas IM/IV 30 mg/mL'] },
      mechanism: {
        pt: 'Inibidor potente e não seletivo da COX, com excelente atividade analgésica e moderada atividade anti-inflamatória. Seu poder analgésico equipara-se ao da morfina para dores somáticas, mas com teto terapêutico e sem efeitos depressores do SNC.',
        es: 'Inhibidor potente y no selectivo de la COX, con excelente actividad analgésica y moderada actividad antiinflamatoria. Su poder analgésico se equipara al de la morfina para dolores somáticos, pero con techo terapéutico y sin efectos depresores del SNC.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Sublingual (SL): 10 a 20 mg inicial, depois 10 mg a cada 6-8h. Máximo: 90 mg/dia (adultos hígidos) ou 60 mg/dia (idosos > 65 anos ou peso < 50kg). IV/IM: 30 mg a cada 8h.',
            es: 'Sublingual (SL): 10 a 20 mg inicial, luego 10 mg cada 6-8h. Máximo: 90 mg/día (adultos sanos) o 60 mg/día (ancianos > 65 años o peso < 50kg). IV/IM: 30 mg cada 8h.'
          }
        },
        pediatric: {
          standard: {
            pt: '0,5 mg/kg/dose IV/IM (máximo 15 mg). Não recomendado uso rotineiro sem supervisão especialista.',
            es: '0,5 mg/kg/dosis IV/IM (máximo 15 mg). No recomendado uso rutinario sin supervisión de especialista.'
          }
        }
      },
      administration: { pt: ['Uso LIMITADO A NO MÁXIMO 5 DIAS, independentemente da via (risco extremo de sangramento GI e lesão renal).'], es: ['Uso LIMITADO A UN MÁXIMO DE 5 DÍAS, independientemente de la vía (riesgo extremo de sangrado GI y lesión renal).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar se ClCr < 50 mL/min. Contraindicado em falência renal. Se ClCr 50-89, reduzir a dose diária máxima para 60 mg.', es: 'Evitar si ClCr < 50 mL/min. Contraindicado en falla renal. Si ClCr 50-89, reducir la dosis diaria máxima a 60 mg.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose avançada (risco hemorrágico altíssimo).', es: 'Evitar en cirrosis avanzada (riesgo hemorrágico altísimo).' } },
      commonAdverseEffects: { pt: ['Dispepsia aguda', 'Náusea', 'Dor no local da injeção IM', 'Tontura'], es: ['Dispepsia aguda', 'Náusea', 'Dolor en el sitio de inyección IM', 'Mareos'] },
      dangerousAdverseEffects: { pt: ['Hemorragia digestiva maciça', 'Falência renal aguda (rápida instalação)', 'Hemorragia pós-operatória'], es: ['Hemorragia digestiva masiva', 'Falla renal aguda (rápida instalación)', 'Hemorragia posoperatoria'] },
      contraindications: {
        absolute: { pt: ['Uso profilático pré-cirúrgico (sangramento)', 'Histórico de úlcera péptica ou perfuração', 'Suspeita ou risco de sangramento intracraniano (AVEh)'], es: ['Uso profiláctico precirúrgico (sangrado)', 'Historial de úlcera péptica o perforación', 'Sospecha o riesgo de sangrado intracraneal (ACVh)'] },
        relative: { pt: ['Uso simultâneo de outros AINEs', 'Asma (Tríade de Samter)'], es: ['Uso simultáneo de otros AINEs', 'Asma (Tríada de Samter)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'REGRA DOS 5 DIAS: Jamais ultrapassar 5 dias de tratamento. O risco de nefrotoxicidade e sangramento fatal aumenta exponencialmente após este período.', es: 'REGLA DE LOS 5 DÍAS: Jamás superar 5 días de tratamiento. El riesgo de nefrotoxicidad y sangrado fatal aumenta exponencialmente tras este período.' }
      }
    },

    /* ── CETOPROFENO / KETOPROFENO ──────────────────────────────────────── */
    "cetoprofeno": {
      name: { pt: 'Cetoprofeno', es: 'Ketoprofeno' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido propiônico', es: 'AINE derivado del ácido propiónico' },
      indications: {
        pt: ['Processos inflamatórios musculoesqueléticos agudos (bursite, tendinite)', 'Artrite', 'Traumas e contusões', 'Dismenorreia'],
        es: ['Procesos inflamatorios musculoesqueléticos agudos (bursitis, tendinitis)', 'Artritis', 'Traumas y contusiones', 'Dismenorrea']
      },
      commercialNames: { br: ['Profenid', 'Biprofenid'], ar: ['Profenid'] },
      presentation: { pt: ['Comprimidos 50 mg, 100 mg', 'Comprimidos liberação prolongada 150 mg, 200 mg', 'Solução injetável IM 100 mg', 'IV liofilizado 100 mg'], es: ['Comprimidos 50 mg, 100 mg', 'Comprimidos liberación prolongada 150 mg, 200 mg', 'Solución inyectable IM 100 mg', 'IV liofilizado 100 mg'] },
      mechanism: {
        pt: 'Inibidor de COX-1 e COX-2. Adicionalmente, possui propriedades inibitórias sobre a via da lipoxigenase (reduzindo leucotrienos) e antagoniza os efeitos da bradicinina, conferindo-lhe um perfil anti-inflamatório muito robusto.',
        es: 'Inhibidor de COX-1 y COX-2. Adicionalmente, posee propiedades inhibitorias sobre la vía de la lipoxigenasa (reduciendo leucotrienos) y antagoniza los efectos de la bradicinina, confiriéndole un perfil antiinflamatorio muy robusto.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'VO: 50 mg a cada 8h ou 100 a 200 mg 1x/dia (ação prolongada). IM/IV: 100 mg a cada 12h. Dose máxima diária: 200 a 300 mg.',
            es: 'VO: 50 mg cada 8h o 100 a 200 mg 1 vez/día (acción prolongada). IM/IV: 100 mg cada 12h. Dosis máxima diaria: 200 a 300 mg.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Geralmente não recomendado para crianças < 15 anos na prática diária, salvo indicação reumatológica estrita.',
            es: 'Generalmente no recomendado para niños < 15 años en la práctica diaria, salvo indicación reumatológica estricta.'
          }
        }
      },
      administration: { pt: ['Tomar VO com refeições.', 'IV requer diluição em 100 mL de SF ou SG e infusão em 20-30 min. Proteja da luz.'], es: ['Tomar VO con comidas.', 'IV requiere dilución en 100 mL de SF o SG e infusión en 20-30 min. Proteger de la luz.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose pela metade em disfunção renal leve a moderada. Contraindicado em ClCr < 30 mL/min.', es: 'Reducir dosis a la mitad en disfunción renal leve a moderada. Contraindicado en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar ou usar dose mínima com monitoramento na insuficiência hepática grave.', es: 'Evitar o usar dosis mínima con monitorización en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Gastrite / Dor epigástrica (alta frequência)', 'Cefaleia', 'Sonolência'], es: ['Gastritis / Dolor epigástrico (alta frecuencia)', 'Cefalea', 'Somnolencia'] },
      dangerousAdverseEffects: { pt: ['Hemorragia gastrointestinal (risco maior que ibuprofeno)', 'Crise de asma', 'Falência renal aguda'], es: ['Hemorragia gastrointestinal (riesgo mayor que ibuprofeno)', 'Crisis de asma', 'Falla renal aguda'] },
      contraindications: {
        absolute: { pt: ['Úlcera péptica ativa', 'Terceiro trimestre de gravidez', 'Insuficiência cardíaca descompensada', 'Alergia a AAS ou AINEs'], es: ['Úlcera péptica activa', 'Tercer trimestre de embarazo', 'Insuficiencia cardíaca descompensada', 'Alergia a AAS o AINEs'] },
        relative: { pt: ['Asma brônquica (risco de broncoespasmo)'], es: ['Asma bronquial (riesgo de broncoespasmo)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Alto risco gastrointestinal, justificando prescrição conjunta de IBP em idosos. A formulação IV é fotossensível.', es: 'Alto riesgo gastrointestinal, justificando prescripción conjunta de IBP en ancianos. La formulación IV es fotosensible.' }
      }
    },

    /* ── MELOXICAM ──────────────────────────────────────────────────────── */
    "meloxicam": {
      name: { pt: 'Meloxicam', es: 'Meloxicam' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido enólico (Inibidor Preferencial COX-2)', es: 'AINE derivado del ácido enólico (Inhibidor Preferencial COX-2)' },
      indications: {
        pt: ['Osteoartrite crônica', 'Artrite Reumatoide', 'Dor inflamatória crônica'],
        es: ['Osteoartritis crónica', 'Artritis Reumatoide', 'Dolor inflamatorio crónico']
      },
      commercialNames: { br: ['Movatec', 'Biofenac', 'Inicox'], ar: ['Mobic'] },
      presentation: { pt: ['Comprimidos 7,5 mg', '15 mg', 'Ampolas IM 15 mg/1,5 mL'], es: ['Comprimidos 7,5 mg', '15 mg', 'Ampollas IM 15 mg/1,5 mL'] },
      mechanism: {
        pt: 'AINE com "Seletividade Preferencial" para a enzima COX-2 em baixas doses terapêuticas (7,5 a 15 mg). Isso confere potente ação anti-inflamatória com menor (mas não isento) dano à mucosa gástrica e plaquetas (COX-1) em comparação com AINEs clássicos. Contudo, em doses maiores, a seletividade é perdida.',
        es: 'AINE con "Selectividad Preferencial" para la enzima COX-2 en bajas dosis terapéuticas (7,5 a 15 mg). Esto confiere potente acción antiinflamatoria con menor (pero no exento) daño a la mucosa gástrica y plaquetas (COX-1) en comparación con AINEs clásicos. Sin embargo, en dosis mayores, la selectividad se pierde.'
      },
      dose: {
        adult: {
          standard: {
            pt: '7,5 mg a 15 mg VO 1x/dia. Dose máxima diária: 15 mg.',
            es: '7,5 mg a 15 mg VO 1 vez/día. Dosis máxima diaria: 15 mg.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Geralmente 0,125 mg/kg 1x/dia (uso pediátrico estrito por especialista).',
            es: 'Generalmente 0,125 mg/kg 1 vez/día (uso pediátrico estricto por especialista).'
          }
        }
      },
      administration: { pt: ['Tomar a dose única em qualquer momento, preferencialmente junto à refeição.'], es: ['Tomar la dosis única en cualquier momento, preferentemente junto a la comida.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 30 mL/min e em pacientes com insuficiência cardíaca que dependem de PGs renais.', es: 'Evitar en ClCr < 30 mL/min y en pacientes con insuficiencia cardíaca que dependen de PGs renales.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em disfunção leve/moderada.', es: 'Sin necesidad de ajuste en disfunción leve/moderada.' } },
      commonAdverseEffects: { pt: ['Dispepsia (menor incidência que piroxicam/diclofenaco)', 'Diarreia', 'Cefaleia', 'Elevação leve de pressão arterial'], es: ['Dispepsia (menor incidencia que piroxicam/diclofenaco)', 'Diarrea', 'Cefalea', 'Elevación leve de presión arterial'] },
      dangerousAdverseEffects: { pt: ['Eventos cardiovasculares (IAM/AVC - risco de inibidores de COX-2)', 'Insuficiência renal aguda'], es: ['Eventos cardiovasculares (IAM/ACV - riesgo de inhibidores de COX-2)', 'Insuficiencia renal aguda'] },
      contraindications: {
        absolute: { pt: ['Histórico de IAM recente', 'Doença Isquêmica do Coração ativa', 'Úlcera péptica ativa', 'Alergia a AINEs'], es: ['Historial de IAM reciente', 'Enfermedad Isquémica del Corazón activa', 'Úlcera péptica activa', 'Alergia a AINEs'] },
        relative: { pt: ['Hipertensão arterial não controlada', 'Insuficiência cardíaca compensada'], es: ['Hipertensión arterial no controlada', 'Insuficiencia cardíaca compensada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A inibição preferencial da COX-2 diminui a síntese de prostaciclina endotelial vasodilatadora, o que confere a este fármaco um RISCO CARDIOVASCULAR E TROMBÓTICO superior ao naproxeno.', es: 'La inhibición preferencial de la COX-2 disminuye la síntesis de prostaciclina endotelial vasodilatadora, lo que confiere a este fármaco un RIESGO CARDIOVASCULAR Y TROMBÓTICO superior al naproxeno.' }
      }
    },

    /* ── PIROXICAM ──────────────────────────────────────────────────────── */
    "piroxicam": {
      name: { pt: 'Piroxicam', es: 'Piroxicam' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido enólico (Oxicam clássico)', es: 'AINE derivado del ácido enólico (Oxicam clásico)' },
      indications: {
        pt: ['Alívio sintomático de osteoartrite, artrite reumatoide e espondilite anquilosante (segunda linha devido à toxicidade)'],
        es: ['Alivio sintomático de osteoartritis, artritis reumatoide y espondilitis anquilosante (segunda línea debido a toxicidad)']
      },
      commercialNames: { br: ['Feldene', 'Piroxicam'], ar: ['Feldene'] },
      presentation: { pt: ['Cápsulas/Comprimidos 20 mg', 'Solução injetável IM 40 mg/2mL'], es: ['Cápsulas/Comprimidos 20 mg', 'Solución inyectable IM 40 mg/2mL'] },
      mechanism: {
        pt: 'Inibidor de COX-1 e COX-2. Devido à sua farmacocinética com meia-vida extremamente longa (aproximadamente 50 horas), gera uma inibição prolongada, contínua e sistêmica da síntese de prostaglandinas e inibição da agregação neutrofílica.',
        es: 'Inhibidor de COX-1 y COX-2. Debido a su farmacocinética con vida media extremadamente larga (aproximadamente 50 horas), genera una inhibición prolongada, continua y sistémica de la síntesis de prostaglandinas e inhibición de la agregación neutrofílica.'
      },
      dose: {
        adult: {
          standard: {
            pt: '20 mg VO ou IM 1x/dia. NUNCA exceder 20 mg diários em tratamentos contínuos.',
            es: '20 mg VO o IM 1 vez/día. NUNCA exceder 20 mg diarios en tratamientos continuos.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não recomendado em crianças.',
            es: 'No recomendado en niños.'
          }
        }
      },
      administration: { pt: ['Tomar a dose diária junto à alimentação. A revisão terapêutica deve ocorrer em no máximo 14 dias.'], es: ['Tomar la dosis diaria junto con alimentos. La revisión terapéutica debe ocurrir en un máximo de 14 días.'] },
      renalAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência renal moderada a grave. Risco cumulativo alto de nefrotoxicidade.', es: 'Contraindicado en insuficiencia renal moderada a grave. Alto riesgo acumulativo de nefrotoxicidad.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em disfunção hepática grave.', es: 'Contraindicado en disfunción hepática grave.' } },
      commonAdverseEffects: { pt: ['Efeitos gastrointestinais intensos (náusea, azia)', 'Retenção hídrica', 'Zumbido'], es: ['Efectos gastrointestinales intensos (náusea, acidez)', 'Retención hídrica', 'Zumbido'] },
      dangerousAdverseEffects: { pt: ['Hemorragia digestiva grave / úlcera fatal (taxa de toxicidade GI superior aos demais AINEs)', 'Reações cutâneas severas (Síndrome de Stevens-Johnson, NET)'], es: ['Hemorragia digestiva grave / úlcera fatal (tasa de toxicidad GI superior a los demás AINEs)', 'Reacciones cutáneas severas (Síndrome de Stevens-Johnson, NET)'] },
      contraindications: {
        absolute: { pt: ['Idosos > 80 anos (risco extremo de sangramento GI fatal)', 'Histórico de reações cutâneas graves', 'Úlcera / Sangramento GI prévio', 'Tríade de Samter'], es: ['Ancianos > 80 años (riesgo extremo de sangrado GI fatal)', 'Historial de reacciones cutáneas graves', 'Úlcera / Sangrado GI previo', 'Tríada de Samter'] },
        relative: { pt: ['Idosos > 65 anos (evitar se possível)', 'Uso de qualquer outro AINE/Anticoagulante'], es: ['Ancianos > 65 años (evitar si es posible)', 'Uso de cualquier otro AINE/Anticoagulante'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA MÁXIMO DE SEGURANÇA (EMA): O Piroxicam tem o maior risco de toxicidade gastrointestinal e toxicidade cutânea grave. Só deve ser iniciado por especialistas quando AINEs mais seguros falharem, e SEMPRE sob proteção de IBP.', es: 'ALERTA MÁXIMA DE SEGURIDAD (EMA): El Piroxicam tiene el mayor riesgo de toxicidad gastrointestinal y toxicidad cutánea grave. Solo debe ser iniciado por especialistas cuando AINEs más seguros fallen, y SIEMPRE bajo protección de IBP.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 4 (cetorolaco, cetoprofeno, meloxicam, piroxicam — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 5 — AINEs CLÁSSICOS + COXIBES (INDOMETACINA + ACECLOFENACO +
     ETORICOXIBE + CELECOXIBE)
     BUILD 266 (2026-07-06) — Executado sob o SOP de Autonomia Total.

     ✅ Todos os 4 fármacos confirmados GENUINAMENTE NOVOS: nenhum banco do
     projeto possuía schema de dose/calculadora (apenas menção em texto
     livre de "indometacina" em condutas de cardio.js).

     GRAFIA CANÔNICA (Regra 4 do SOP): a submissão original usava as
     chaves "etoricoxib" e "celecoxib" (grafia ES/EN). Renomeadas para
     "etoricoxibe" e "celecoxibe" (PT-BR sem acento), consistentes com:
       (a) DRUG_CLASSES["$classe_aines"] em interacoes.js, que já lista
           "celecoxibe" e "etoricoxibe" como membros;
       (b) DRUG_DISPLAY_NAMES em index.html, que já define
           'celecoxibe': {pt:'Celecoxibe', es:'Celecoxib'} (linha ~20407)
           e o alias reverso DRUG_ES_TO_CANONICAL['celecoxib']→'celecoxibe'
           (linha ~20632).
     A grafia ES/EN ("Ketorolac"-like) permanece apenas no rótulo es: de
     cada objeto, nunca como chave.

     ANTI-REDUNDÂNCIA (ver bloco correspondente em interacoes.js):
     indometacina, etoricoxibe e celecoxibe já são membros de
     $classe_aines; aceclofenaco foi mantido DELIBERADAMENTE fora dessa
     lista (decisão conservadora — não alterar DRUG_CLASSES sem
     necessidade explícita comprovada pelos dados submetidos).
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── INDOMETACINA ───────────────────────────────────────────────────── */
    "indometacina": {
      name: { pt: 'Indometacina', es: 'Indometacina' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido indolacético', es: 'AINE derivado del ácido indolacético' },
      indications: {
        pt: ['Crise aguda de gota (terapia clássica)', 'Espondilite anquilosante', 'Fechamento farmacológico do canal arterial patente (em neonatos)'],
        es: ['Crisis aguda de gota (terapia clásica)', 'Espondilitis anquilosante', 'Cierre farmacológico del conductus arterioso persistente (en neonatos)']
      },
      commercialNames: { br: ['Indocid'], ar: ['Indometacina', 'Imet'] },
      presentation: { pt: ['Cápsulas 25 mg', '50 mg', 'Supositórios 100 mg', 'Liofilizado IV 1 mg (neonatal)'], es: ['Cápsulas 25 mg', '50 mg', 'Supositorios 100 mg', 'Liofilizado IV 1 mg (neonatal)'] },
      mechanism: {
        pt: 'Potente inibidor não seletivo da COX (1 e 2). Inibe também a motilidade dos polimorfonucleares e deprime a biossíntese de mucopolissacarídeos, o que lhe confere eficácia robusta em doenças articulares agressivas (gota/espondilite).',
        es: 'Potente inhibidor no selectivo de la COX (1 y 2). Inhibe también la motilidad de los polimorfonucleares y deprime la biosíntesis de mucopolisacáridos, lo que le confiere eficacia robusta en enfermedades articulares agresivas (gota/espondilitis).'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Gota/Artrite: 25 a 50 mg VO a cada 8 a 12 horas. Dose máxima diária: 200 mg. (Tratamentos de curta duração).',
            es: 'Gota/Artritis: 25 a 50 mg VO cada 8 a 12 horas. Dosis máxima diaria: 200 mg. (Tratamientos de corta duración).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Uso neonatal IV: 0,1 a 0,2 mg/kg para fechamento do ducto arterioso. Uso oral pediátrico desaconselhado.',
            es: 'Uso neonatal IV: 0,1 a 0,2 mg/kg para cierre del ductus arterioso. Uso oral pediátrico desaconsejado.'
          }
        }
      },
      administration: { pt: ['Administrar sempre com alimentos, leite ou antiácidos para reduzir a forte irritação gástrica.'], es: ['Administrar siempre con alimentos, leche o antiácidos para reducir la fuerte irritación gástrica.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em ClCr < 50 mL/min devido a elevada nefrotoxicidade direta.', es: 'Evitar en ClCr < 50 mL/min debido a elevada nefrotoxicidad directa.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em disfunção hepática severa.', es: 'Evitar en disfunción hepática severa.' } },
      commonAdverseEffects: { pt: ['Cefaleia frontal severa (muito comum, >10%)', 'Tontura/Vertigem', 'Dispepsia e úlceras', 'Confusão mental em idosos'], es: ['Cefalea frontal severa (muy común, >10%)', 'Mareos/Vértigo', 'Dispepsia y úlceras', 'Confusión mental en ancianos'] },
      dangerousAdverseEffects: { pt: ['Hemorragia gastrointestinal fulminante', 'Psicose tóxica / Convulsões', 'Insuficiência renal aguda', 'Aplasia medular (rara)'], es: ['Hemorragia gastrointestinal fulminante', 'Psicosis tóxica / Convulsiones', 'Insuficiencia renal aguda', 'Aplasia medular (rara)'] },
      contraindications: {
        absolute: { pt: ['Distúrbios psiquiátricos severos ou epilepsia (abaixa limiar convulsivo)', 'Úlcera péptica ativa', 'Doença de Parkinson (agrava sintomas neurológicos)', 'Gravidez (> 30 semanas)'], es: ['Trastornos psiquiátricos severos o epilepsia (baja el umbral convulsivo)', 'Úlcera péptica activa', 'Enfermedad de Parkinson (agrava síntomas neurológicos)', 'Embarazo (> 30 semanas)'] },
        relative: { pt: ['Idosos (alta toxicidade do SNC)', 'Uso de máquinas perigosas (tontura)'], es: ['Ancianos (alta toxicidad del SNC)', 'Uso de máquinas peligrosas (mareos)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Alta toxicidade neurológica (SNC). Diferente dos outros AINEs, frequentemente causa cefaleia frontal latejante e alterações psiquiátricas. Idosos são extremamente suscetíveis.', es: 'Alta toxicidad neurológica (SNC). A diferencia de los otros AINEs, frecuentemente causa cefalea frontal pulsátil y alteraciones psiquiátricas. Los ancianos son extremadamente susceptibles.' }
      }
    },

    /* ── ACECLOFENACO ───────────────────────────────────────────────────── */
    "aceclofenaco": {
      name: { pt: 'Aceclofenaco', es: 'Aceclofenaco' },
      category: 'analgesia',
      class: { pt: 'AINE derivado do ácido acético', es: 'AINE derivado del ácido acético' },
      indications: {
        pt: ['Osteoartrite', 'Artrite Reumatoide', 'Espondilite anquilosante'],
        es: ['Osteoartritis', 'Artritis Reumatoide', 'Espondilitis anquilosante']
      },
      commercialNames: { br: ['Proflam'], ar: ['Bristaflam', 'Aceclofenac'] },
      presentation: { pt: ['Comprimidos 100 mg'], es: ['Comprimidos 100 mg'] },
      mechanism: {
        pt: 'Pró-fármaco que, in vivo, é metabolizado parcialmente a diclofenaco e outros metabólitos. Inibe a enzima COX (com preferência para COX-2) e, peculiarmente, estimula a síntese de glicosaminoglicanos na cartilagem articular (efeito condroprotetor teórico).',
        es: 'Profármaco que, in vivo, se metaboliza parcialmente a diclofenaco y otros metabolitos. Inhibe la enzima COX (con preferencia por COX-2) y, peculiarmente, estimula la síntesis de glicosaminoglicanos en el cartílago articular (efecto condroprotector teórico).'
      },
      dose: {
        adult: {
          standard: {
            pt: '100 mg VO a cada 12 horas. Máximo diário de 200 mg.',
            es: '100 mg VO cada 12 horas. Máximo diario de 200 mg.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não recomendado para crianças e adolescentes.',
            es: 'No recomendado para niños y adolescentes.'
          }
        }
      },
      administration: { pt: ['Tomar com as refeições ou com leite para reduzir efeito gastrointestinal.'], es: ['Tomar con las comidas o con leche para reducir efecto gastrointestinal.'] },
      renalAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência renal grave (ClCr < 30).', es: 'Contraindicado en insuficiencia renal grave (ClCr < 30).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose inicial para 100 mg/dia em disfunção hepática leve/moderada.', es: 'Reducir dosis inicial a 100 mg/día en disfunción hepática leve/moderada.' } },
      commonAdverseEffects: { pt: ['Dispepsia', 'Elevação de transaminases hepáticas', 'Tontura'], es: ['Dispepsia', 'Elevación de transaminasas hepáticas', 'Mareos'] },
      dangerousAdverseEffects: { pt: ['Eventos aterotrombóticos (risco comparável ao diclofenaco)', 'Úlcera péptica (menor que diclofenaco, mas presente)'], es: ['Eventos aterotrombóticos (riesgo comparable al diclofenaco)', 'Úlcera péptica (menor que diclofenaco, pero presente)'] },
      contraindications: {
        absolute: { pt: ['Doença cardíaca isquêmica, Doença arterial periférica, Doença cerebrovascular', 'Insuficiência Cardíaca Congestiva (NYHA II-IV)'], es: ['Enfermedad cardíaca isquémica, Enfermedad arterial periférica, Enfermedad cerebrovascular', 'Insuficiencia Cardíaca Congestiva (NYHA II-IV)'] },
        relative: { pt: ['Hipertensão arterial mal controlada'], es: ['Hipertensión arterial mal controlada'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Como parente do diclofenaco, possui os mesmos alertas de segurança da EMA para RISCO CARDIOVASCULAR TROMBÓTICO exacerbado. Evitar em coronariopatas.', es: 'Como pariente del diclofenaco, posee las mismas alertas de seguridad de la EMA para RIESGO CARDIOVASCULAR TROMBÓTICO exacerbado. Evitar en coronariópatas.' }
      }
    },

    /* ── ETORICOXIBE (submissão original: "etoricoxib") ───────────────────── */
    "etoricoxibe": {
      name: { pt: 'Etoricoxibe', es: 'Etoricoxib' },
      category: 'analgesia',
      class: { pt: 'AINE Coxibe (Inibidor Altamente Seletivo da COX-2)', es: 'AINE Coxib (Inhibidor Altamente Selectivo de la COX-2)' },
      indications: {
        pt: ['Osteoartrite', 'Artrite Reumatoide', 'Gota Aguda', 'Dor aguda e crônica musculoesquelética'],
        es: ['Osteoartritis', 'Artritis Reumatoide', 'Gota Aguda', 'Dolor agudo y crónico musculoesquelético']
      },
      commercialNames: { br: ['Arcoxia'], ar: ['Arcoxia', 'Etoricoxib'] },
      presentation: { pt: ['Comprimidos 60 mg, 90 mg e 120 mg'], es: ['Comprimidos 60 mg, 90 mg y 120 mg'] },
      mechanism: {
        pt: 'Inibe de forma altamente seletiva (razão COX-2/COX-1 > 100) a enzima ciclooxigenase-2 (mediadora da inflamação/dor), poupando a COX-1. Isso garante o efeito analgésico sem agredir severamente a mucosa gástrica e sem inibir a agregação plaquetária. Contudo, ao inibir a prostaciclina endotelial (vasodilatadora) sem bloquear o tromboxano plaquetário (vasoconstritor), cria um estado pró-trombótico no corpo.',
        es: 'Inhibe de forma altamente selectiva (razón COX-2/COX-1 > 100) la enzima ciclooxigenasa-2 (mediadora de inflamación/dolor), preservando la COX-1. Esto garantiza el efecto analgésico sin agredir severamente la mucosa gástrica y sin inhibir la agregación plaquetaria. Sin embargo, al inhibir la prostaciclina endotelial (vasodilatadora) sin bloquear el tromboxano plaquetario (vasoconstrictor), crea un estado protrombótico en el cuerpo.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Osteoartrite: 60 mg 1x/dia. Dor aguda/AR: 90 mg 1x/dia. Gota Aguda: 120 mg 1x/dia (máximo 8 dias).',
            es: 'Osteoartritis: 60 mg 1 vez/día. Dolor agudo/AR: 90 mg 1 vez/día. Gota Aguda: 120 mg 1 vez/día (máximo 8 días).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Contraindicado para menores de 16 anos.',
            es: 'Contraindicado para menores de 16 años.'
          }
        }
      },
      administration: { pt: ['Administração única diária. Pode ser tomado com ou sem alimentos (alimentos retardam pico analgésico na crise aguda).'], es: ['Administración única diaria. Puede tomarse con o sin alimentos (alimentos retrasan pico analgésico en crisis aguda).'] },
      renalAdjustment: { required: true, message: { pt: 'Contraindicado se ClCr < 30 mL/min. Os coxibes afetam a hemodinâmica renal da mesma forma que os AINEs não seletivos.', es: 'Contraindicado si ClCr < 30 mL/min. Los coxibes afectan la hemodinámica renal de la misma forma que los AINEs no selectivos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Disfunção leve (Child A): max 60 mg. Moderada (Child B): max 60 mg a CADA 2 DIAS. Grave: Contraindicado.', es: 'Disfunción leve (Child A): máx 60 mg. Moderada (Child B): máx 60 mg CADA 2 DÍAS. Grave: Contraindicado.' } },
      commonAdverseEffects: { pt: ['Edema de membros inferiores (retenção de sódio)', 'Elevação da Pressão Arterial', 'Cefaleia'], es: ['Edema de miembros inferiores (retención de sodio)', 'Elevación de la Presión Arterial', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Infarto Agudo do Miocárdio (IAM)', 'Acidente Vascular Cerebral (AVC isquêmico)', 'Trombose Venosa Profunda', 'Insuficiência Renal'], es: ['Infarto Agudo de Miocardio (IAM)', 'Accidente Cerebrovascular (ACV isquémico)', 'Trombosis Venosa Profunda', 'Insuficiencia Renal'] },
      contraindications: {
        absolute: { pt: ['Doença isquêmica cardíaca, Doença arterial periférica, AVC/AIT prévio', 'Hipertensão Arterial não adequadamente controlada (PAS > 140/90)', 'Insuficiência Cardíaca Congestiva (NYHA II-IV)'], es: ['Enfermedad isquémica cardíaca, Enfermedad arterial periférica, ACV/AIT previo', 'Hipertensión Arterial no adecuadamente controlada (PAS > 140/90)', 'Insuficiencia Cardíaca Congestiva (NYHA II-IV)'] },
        relative: { pt: ['Histórico de doença inflamatória intestinal (embora menor risco de úlcera gástrica)'], es: ['Historial de enfermedad inflamatoria intestinal (aunque menor riesgo de úlcera gástrica)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'PERIGO CARDIOVASCULAR: O etoricoxibe tem o maior risco trombótico de toda a classe de analgésicos. A pressão arterial DEVE ser monitorizada regularmente. Não prescrever para hipertensos descompensados ou coronariopatas.', es: 'PELIGRO CARDIOVASCULAR: El etoricoxib tiene el mayor riesgo trombótico de toda la clase de analgésicos. La presión arterial DEBE ser monitorizada regularmente. No prescribir para hipertensos descompensados o coronariópatas.' }
      }
    },

    /* ── CELECOXIBE (submissão original: "celecoxib") ─────────────────────── */
    "celecoxibe": {
      name: { pt: 'Celecoxibe', es: 'Celecoxib' },
      category: 'analgesia',
      class: { pt: 'AINE Coxibe (Inibidor Seletivo da COX-2)', es: 'AINE Coxib (Inhibidor Selectivo de la COX-2)' },
      indications: {
        pt: ['Osteoartrite', 'Artrite Reumatoide', 'Espondilite Anquilosante', 'Manejo da dor aguda'],
        es: ['Osteoartritis', 'Artritis Reumatoide', 'Espondilitis Anquilosante', 'Manejo del dolor agudo']
      },
      commercialNames: { br: ['Celebra'], ar: ['Celebrex', 'Celecoxib'] },
      presentation: { pt: ['Cápsulas 100 mg', '200 mg'], es: ['Cápsulas 100 mg', '200 mg'] },
      mechanism: {
        pt: 'Inibe seletivamente a COX-2, reduzindo a dor e a inflamação com menor agressão gastrintestinal e sem bloqueio plaquetário. Contém um grupamento estrutural sulfonamida. Diferente do rofecoxibe (retirado do mercado) e etoricoxibe, o celecoxibe demonstrou em grandes estudos (PRECISION) ter um risco cardiovascular não inferior ao ibuprofeno e naproxeno em dosagens moderadas (200mg/dia).',
        es: 'Inhibe selectivamente la COX-2, reduciendo el dolor y la inflamación con menor agresión gastrointestinal y sin bloqueo plaquetario. Contiene un grupo estructural sulfonamida. A diferencia del rofecoxib (retirado del mercado) y etoricoxib, el celecoxib demostró en grandes estudios (PRECISION) tener un riesgo cardiovascular no inferior al ibuprofeno y naproxeno en dosis moderadas (200mg/día).'
      },
      dose: {
        adult: {
          standard: {
            pt: '200 mg VO 1x/dia ou 100 mg 12/12h. Pode-se aumentar para 400 mg/dia em dor aguda ou artrite severa.',
            es: '200 mg VO 1 vez/día o 100 mg cada 12h. Se puede aumentar a 400 mg/día en dolor agudo o artritis severa.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Aprovado para Artrite Idiopática Juvenil em crianças > 2 anos (50 a 100 mg 12/12h baseado no peso).',
            es: 'Aprobado para Artritis Idiopática Juvenil en niños > 2 años (50 a 100 mg cada 12h basado en el peso).'
          }
        }
      },
      administration: { pt: ['Com ou sem alimentos. Pode abrir a cápsula e misturar em compota de maçã para dificuldade de deglutição.'], es: ['Con o sin alimentos. Se puede abrir la cápsula y mezclar en puré de manzana para dificultad de deglución.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar na insuficiência renal grave (ClCr < 30 mL/min).', es: 'Evitar en insuficiencia renal grave (ClCr < 30 mL/min).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Disfunção hepática moderada (Child B): Reduzir a dose diária em 50%.', es: 'Disfunción hepática moderada (Child B): Reducir la dosis diaria en 50%.' } },
      commonAdverseEffects: { pt: ['Dispepsia (embora muito menor que AINEs tradicionais)', 'Edema periférico', 'Hipertensão leve', 'Diarreia'], es: ['Dispepsia (aunque mucho menor que AINEs tradicionales)', 'Edema periférico', 'Hipertensión leve', 'Diarrea'] },
      dangerousAdverseEffects: { pt: ['Eventos aterotrombóticos (IAM, AVC) em altas doses', 'Anafilaxia cruzada com sulfas', 'Necrose papilar renal'], es: ['Eventos aterotrombóticos (IAM, ACV) en altas dosis', 'Anafilaxia cruzada con sulfas', 'Necrosis papilar renal'] },
      contraindications: {
        absolute: { pt: ['Alergia conhecida a SULFONAMIDAS (ex: sulfametoxazol)', 'Pós-operatório de Cirurgia de Revascularização Miocárdica (CABG)', 'Úlcera ativa / Sangramento GI'], es: ['Alergia conocida a SULFONAMIDAS (ej: sulfametoxazol)', 'Posoperatorio de Cirugía de Revascularización Miocárdica (CABG)', 'Úlcera activa / Sangrado GI'] },
        relative: { pt: ['Doença isquêmica cardíaca prévia', 'Asma sensível a aspirina'], es: ['Enfermedad isquémica cardíaca previa', 'Asma sensible a aspirina'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Atenção à alergia cruzada a SULFAS. Inibidor enzimático: o celecoxibe inibe a enzima CYP2D6, podendo aumentar perigosamente níveis de betabloqueadores e antidepressivos.', es: 'Atención a la alergia cruzada a SULFAS. Inhibidor enzimático: el celecoxib inhibe la enzima CYP2D6, pudiendo aumentar peligrosamente niveles de betabloqueantes y antidepresivos.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 5 (indometacina, aceclofenaco, etoricoxibe, celecoxibe — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 6 — AINE HEPATOTÓXICO + DOR NEUROPÁTICA (NIMESULIDA + GABAPENTINA +
     PREGABALINA + LIDOCAÍNA)
     BUILD 267 (2026-07-06) — Executado sob o SOP de Autonomia Total.

     ✅ Todos os 4 fármacos confirmados GENUINAMENTE NOVOS como schema de
     dose/calculadora: nenhum banco do projeto (cardio.js, antimicrobianos.js,
     psicofarmacos.js, analgesicos.js) possuía objeto próprio para nimesulida,
     gabapentina, pregabalina ou lidocaína (apesar de todas já aparecerem
     extensivamente como ALVO dentro de nós de outras drogas em
     interacoes.js — o que não configura duplicata de cadastro de fármaco).
     Doses reaninhadas de dose.adult/dose.pediatric (flat, conforme
     submissão) para dose.adult.standard/dose.pediatric.standard.

     Nota de nomenclatura: nenhuma renomeação de chave foi necessária neste
     lote — "nimesulida", "gabapentina", "pregabalina" e "lidocaina" já são
     as grafias canônicas PT-BR sem acento usadas em DRUG_CLASSES/
     DRUG_DISPLAY_NAMES.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── NIMESULIDA ─────────────────────────────────────────────────────── */
    "nimesulida": {
      name: { pt: 'Nimesulida', es: 'Nimesulida' },
      category: 'analgesia',
      class: { pt: 'AINE (Inibidor Preferencial da COX-2)', es: 'AINE (Inhibidor Preferencial de la COX-2)' },
      indications: {
        pt: ['Dor aguda', 'Dismenorreia primária', 'Osteoartrite aguda (tratamento de curtíssima duração)'],
        es: ['Dolor agudo', 'Dismenorrea primaria', 'Osteoartritis aguda (tratamiento de cortísima duración)']
      },
      commercialNames: { br: ['Nisulid', 'Cimelide', 'Scaflam'], ar: ['Ainex', 'Nimesulida'] },
      presentation: { pt: ['Comprimidos 100 mg', 'Gotas 50 mg/mL', 'Supositórios 100 mg'], es: ['Comprimidos 100 mg', 'Gotas 50 mg/mL', 'Supositorios 100 mg'] },
      mechanism: {
        pt: 'AINE com inibição preferencial pela enzima COX-2. Além da inibição das prostaglandinas, possui atividade antioxidante (reduzindo a produção de radicais livres pelos neutrófilos) e inibe a liberação de histamina, conferindo ação anti-inflamatória robusta em vias aéreas superiores e articulações.',
        es: 'AINE con inhibición preferencial por la enzima COX-2. Además de la inhibición de las prostaglandinas, posee actividad antioxidante (reduciendo la producción de radicales libres por los neutrófilos) e inhibe la liberación de histamina, confiriendo acción antiinflamatoria robusta en vías respiratorias superiores y articulaciones.'
      },
      dose: {
        adult: {
          standard: {
            pt: '100 mg VO a cada 12 horas. Duração MÁXIMA de 15 dias (na prática, limitar a 5-7 dias).',
            es: '100 mg VO cada 12 horas. Duración MÁXIMA de 15 días (en la práctica, limitar a 5-7 días).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Crianças > 12 anos: 5 mg/kg/dia divididos em 2 doses. Contraindicado para menores de 12 anos em vários países por toxicidade hepática.',
            es: 'Niños > 12 años: 5 mg/kg/día divididos en 2 dosis. Contraindicado para menores de 12 años en varios países por toxicidad hepática.'
          }
        }
      },
      administration: { pt: ['Tomar preferencialmente após as refeições.'], es: ['Tomar preferentemente después de las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'Contraindicado se ClCr < 30 mL/min.', es: 'Contraindicado si ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'TOTALMENTE CONTRAINDICADO em qualquer grau de insuficiência hepática ou doença hepática ativa.', es: 'TOTALMENTE CONTRAINDICADO en cualquier grado de insuficiencia hepática o enfermedad hepática activa.' } },
      commonAdverseEffects: { pt: ['Náusea', 'Diarreia', 'Azia', 'Tontura'], es: ['Náusea', 'Diarrea', 'Acidez', 'Mareos'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade fulminante (falência hepática aguda)', 'Sangramento gastrointestinal', 'Lesão Renal Aguda'], es: ['Hepatotoxicidad fulminante (falla hepática aguda)', 'Sangrado gastrointestinal', 'Lesión Renal Aguda'] },
      contraindications: {
        absolute: { pt: ['Histórico de reações hepatotóxicas à nimesulida', 'Insuficiência hepática', 'Úlcera péptica ativa', 'Terceiro trimestre da gestação'], es: ['Historial de reacciones hepatotóxicas a la nimesulida', 'Insuficiencia hepática', 'Úlcera péptica activa', 'Tercer trimestre del embarazo'] },
        relative: { pt: ['Uso concomitante de outros fármacos hepatotóxicos'], es: ['Uso concomitante de otros fármacos hepatotóxicos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA HEPÁTICO: A nimesulida foi suspensa/proibida em vários países da Europa e nas Américas (EUA) devido ao risco elevado de necrose hepática fatal. Usar apenas se outros AINEs falharem e por tempo curtíssimo.', es: 'ALERTA HEPÁTICA: La nimesulida fue suspendida/prohibida en varios países de Europa y en las Américas (EE.UU.) debido al riesgo elevado de necrosis hepática fatal. Usar solo si otros AINEs fallan y por tiempo cortísimo.' }
      }
    },

    /* ── GABAPENTINA ────────────────────────────────────────────────────── */
    "gabapentina": {
      name: { pt: 'Gabapentina', es: 'Gabapentina' },
      category: 'analgesia',
      class: { pt: 'Neuromodulador / Anticonvulsivante (Ligante alfa-2-delta)', es: 'Neuromodulador / Anticonvulsivante (Ligando alfa-2-delta)' },
      indications: {
        pt: ['Dor neuropática (neuropatia diabética, neuralgia pós-herpética)', 'Crises focais de epilepsia', 'Síndrome das pernas inquietas'],
        es: ['Dolor neuropático (neuropatía diabética, neuralgia posherpética)', 'Crisis focales de epilepsia', 'Síndrome de las piernas inquietas']
      },
      commercialNames: { br: ['Neurontin'], ar: ['Neurontin', 'Gabapentina'] },
      presentation: { pt: ['Cápsulas 300 mg, 400 mg', 'Comprimidos 600 mg, 800 mg'], es: ['Cápsulas 300 mg, 400 mg', 'Comprimidos 600 mg, 800 mg'] },
      mechanism: {
        pt: 'Apesar do nome, não se liga aos receptores GABA. Liga-se à subunidade alfa-2-delta dos canais de cálcio voltagem-dependentes no Sistema Nervoso Central, reduzindo o influxo de cálcio e, consequentemente, inibindo a liberação de neurotransmissores excitatórios (glutamato, substância P).',
        es: 'A pesar del nombre, no se une a los receptores GABA. Se une a la subunidad alfa-2-delta de los canales de calcio dependientes de voltaje en el Sistema Nervioso Central, reduciendo el influjo de calcio y, consecuentemente, inhibiendo la liberación de neurotransmisores excitatorios (glutamato, sustancia P).'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Dor neuropática: Iniciar 300 mg 1x/dia, escalonando +300 mg/dia até 300 mg 3x/dia (900mg/dia). Manutenção entre 900 a 3600 mg/dia, divididos em 3 tomadas.',
            es: 'Dolor neuropático: Iniciar 300 mg 1 vez/día, escalonando +300 mg/día hasta 300 mg 3 veces/día (900mg/día). Mantenimiento entre 900 a 3600 mg/día, divididos en 3 tomas.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Epilepsia (3 a 12 anos): 10 a 15 mg/kg/dia inicial, titular até 25 a 35 mg/kg/dia divididos em 3 doses.',
            es: 'Epilepsia (3 a 12 años): 10 a 15 mg/kg/día inicial, titular hasta 25 a 35 mg/kg/día divididos en 3 dosis.'
          }
        }
      },
      administration: { pt: ['Pode ser tomado com ou sem alimentos.', 'O intervalo máximo entre as doses não deve exceder 12 horas para evitar crises rebote (em epilepsia).'], es: ['Puede tomarse con o sin alimentos.', 'El intervalo máximo entre las dosis no debe exceder las 12 horas para evitar crisis rebote (en epilepsia).'] },
      renalAdjustment: { required: true, message: { pt: 'Fármaco 100% de excreção renal. ClCr 30-59: 400-1400 mg/dia. ClCr 15-29: 200-700 mg/dia. ClCr < 15: 100-300 mg/dia.', es: 'Fármaco 100% de excreción renal. ClCr 30-59: 400-1400 mg/día. ClCr 15-29: 200-700 mg/día. ClCr < 15: 100-300 mg/día.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não sofre metabolismo hepático. Sem necessidade de ajuste.', es: 'No sufre metabolismo hepático. Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Sonolência', 'Tontura / Ataxia', 'Edema periférico', 'Ganho de peso'], es: ['Somnolencia', 'Mareos / Ataxia', 'Edema periférico', 'Ganancia de peso'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave (especialmente se combinada com opioides ou em idosos)', 'Ideação suicida (alerta de classe)'], es: ['Depresión respiratoria grave (especialmente si combinada con opioides o en ancianos)', 'Ideación suicida (alerta de clase)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida à gabapentina'], es: ['Hipersensibilidad conocida a la gabapentina'] },
        relative: { pt: ['Idosos frágeis (risco de queda por ataxia/sedação)'], es: ['Ancianos frágiles (riesgo de caída por ataxia/sedación)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Atenção à FDA Warning: Risco de depressão respiratória fatal em pacientes idosos, com DPOC ou em uso associado de opioides/depressores do SNC.', es: 'Atención a la FDA Warning: Riesgo de depresión respiratoria fatal en pacientes ancianos, con EPOC o en uso asociado de opioides/depresores del SNC.' }
      }
    },

    /* ── PREGABALINA ────────────────────────────────────────────────────── */
    "pregabalina": {
      name: { pt: 'Pregabalina', es: 'Pregabalina' },
      category: 'analgesia',
      class: { pt: 'Neuromodulador / Anticonvulsivante (Ligante alfa-2-delta)', es: 'Neuromodulador / Anticonvulsivante (Ligando alfa-2-delta)' },
      indications: {
        pt: ['Dor neuropática', 'Fibromialgia', 'Transtorno de Ansiedade Generalizada (TAG)', 'Crises epilépticas parciais'],
        es: ['Dolor neuropático', 'Fibromialgia', 'Trastorno de Ansiedad Generalizada (TAG)', 'Crisis epilépticas parciales']
      },
      commercialNames: { br: ['Lyrica', 'Prebictal'], ar: ['Lyrica', 'Pregabalina'] },
      presentation: { pt: ['Cápsulas 75 mg, 150 mg', 'Cápsulas 50 mg, 300 mg'], es: ['Cápsulas 75 mg, 150 mg', 'Cápsulas 50 mg, 300 mg'] },
      mechanism: {
        pt: 'Sucessor estrutural da gabapentina. Liga-se também à subunidade alfa-2-delta dos canais de cálcio voltagem-dependentes pré-sinápticos. Possui farmacocinética linear, maior biodisponibilidade e afinidade 6 vezes maior pelo receptor do que a gabapentina, resultando em titulação mais rápida e potente.',
        es: 'Sucesor estructural de la gabapentina. Se une también a la subunidad alfa-2-delta de los canales de calcio dependientes de voltaje presinápticos. Posee farmacocinética lineal, mayor biodisponibilidad y afinidad 6 veces mayor por el receptor que la gabapentina, resultando en titulación más rápida y potente.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Dor neuropática/Fibromialgia: 75 mg 2x/dia inicial (150 mg/dia). Pode ser aumentada para 300 mg/dia após 1 semana, até o máximo de 600 mg/dia.',
            es: 'Dolor neuropático/Fibromialgia: 75 mg 2 veces/día inicial (150 mg/día). Puede aumentarse a 300 mg/día tras 1 semana, hasta el máximo de 600 mg/día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não aprovada rotineiramente para dor crônica em pediatria (aprovada para epilepsia parcial em >1 mês, ajuste por peso).',
            es: 'No aprobada rutinariamente para dolor crónico en pediatría (aprobada para epilepsia parcial en >1 mes, ajuste por peso).'
          }
        }
      },
      administration: { pt: ['Retirada deve ser gradual (desmame ao longo de no mínimo 1 semana) para evitar sintomas de abstinência e rebote.', 'Com ou sem alimentos.'], es: ['Retirada debe ser gradual (destete a lo largo de al menos 1 semana) para evitar síntomas de abstinencia y rebote.', 'Con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr 30-60: Reduzir dose em 50%. ClCr 15-30: Reduzir em 75% (máximo 150mg/dia). ClCr < 15: máximo 75mg/dia.', es: 'ClCr 30-60: Reducir dosis en 50%. ClCr 15-30: Reducir en 75% (máximo 150mg/día). ClCr < 15: máximo 75mg/día.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Tontura (muito comum)', 'Sonolência', 'Aumento de peso', 'Edema periférico', 'Boca seca'], es: ['Mareos (muy común)', 'Somnolencia', 'Aumento de peso', 'Edema periférico', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória', 'Insuficiência cardíaca exacerbada pelo edema', 'Angioedema'], es: ['Depresión respiratoria', 'Insuficiencia cardíaca exacerbada por el edema', 'Angioedema'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade ao fármaco'], es: ['Hipersensibilidad al fármaco'] },
        relative: { pt: ['Pacientes com história de insuficiência cardíaca (risco de edema/sobrecarga)', 'Abuso de substâncias'], es: ['Pacientes con historia de insuficiencia cardíaca (riesgo de edema/sobrecarga)', 'Abuso de sustancias'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Potencial de Abuso: É droga controlada devido ao risco de dependência/abuso e sintomas de abstinência. Extremo risco respiratório se unida a opioides.', es: 'Potencial de Abuso: Es droga controlada debido al riesgo de dependencia/abuso y síntomas de abstinencia. Extremo riesgo respiratorio si se une a opioides.' }
      }
    },

    /* ── LIDOCAÍNA ──────────────────────────────────────────────────────── */
    "lidocaina": {
      name: { pt: 'Lidocaína', es: 'Lidocaína' },
      category: 'analgesia',
      class: { pt: 'Anestésico Local (Amida) / Antiarrítmico Classe IB', es: 'Anestésico Local (Amida) / Antiarrítmico Clase IB' },
      indications: {
        pt: ['Dor neuropática localizada (ex: neuralgia pós-herpética) via adesivos tópicos', 'Anestesia local/regional', 'Arritmias ventriculares agudas (via IV)'],
        es: ['Dolor neuropático localizado (ej: neuralgia posherpética) vía parches tópicos', 'Anestesia local/regional', 'Arritmias ventriculares agudas (vía IV)']
      },
      commercialNames: { br: ['Xylocaína', 'Toperma (Adesivo)', 'Versatis'], ar: ['Xylocaina', 'Versatis'] },
      presentation: { pt: ['Adesivo transdérmico 5%', 'Pomada/Gel 2% a 5%', 'Solução injetável (com ou sem vasoconstritor)'], es: ['Parche transdérmico 5%', 'Pomada/Gel 2% a 5%', 'Solución inyectable (con o sin vasoconstrictor)'] },
      mechanism: {
        pt: 'Bloqueador dos canais de sódio dependentes de voltagem. Impede a despolarização e a condução do potencial de ação das membranas neuronais. Na forma de adesivo (5%), fornece analgesia local nas fibras nervosas periféricas C e A-delta lesadas sem bloqueio motor sistêmico.',
        es: 'Bloqueador de los canales de sodio dependientes de voltaje. Impide la despolarización y la conducción del potencial de acción de las membranas neuronales. En forma de parche (5%), proporciona analgesia local en las fibras nerviosas periféricas C y A-delta lesionadas sin bloqueo motor sistémico.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Tópico (Dor Neuropática): Adesivo 5%. Aplicar até 3 adesivos simultaneamente na área dolorosa por no máximo 12 horas, seguidos por 12 horas de descanso por dia.',
            es: 'Tópico (Dolor Neuropático): Parche 5%. Aplicar hasta 3 parches simultáneamente en el área dolorosa por un máximo de 12 horas, seguidos por 12 horas de descanso por día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Uso de adesivo não aprovado para crianças. Doses injetáveis rigorosamente calculadas por peso.',
            es: 'Uso de parche no aprobado para niños. Dosis inyectables rigurosamente calculadas por peso.'
          }
        }
      },
      administration: { pt: ['ADESIVO: O tempo de "folga" de 12 horas sem adesivo é crucial para evitar absorção sistêmica tóxica e tolerância.', 'Pode cortar o adesivo antes da remoção do plástico protetor.'], es: ['PARCHE: El tiempo "libre" de 12 horas sin parche es crucial para evitar absorción sistémica tóxica y tolerancia.', 'Se puede cortar el parche antes de retirar el plástico protector.'] },
      renalAdjustment: { required: false, message: { pt: 'Uso tópico/adesivo: Sem ajuste. (Para IV crônico, os metabólitos ativos podem acumular na DRC).', es: 'Uso tópico/parche: Sin ajuste. (Para IV crónico, los metabolitos activos pueden acumularse en ERC).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Cautela severa se houver extensa absorção sistêmica, pois a lidocaína é extensamente metabolizada pelo fígado.', es: 'Precaución severa si hay extensa absorción sistémica, pues la lidocaína es extensamente metabolizada por el hígado.' } },
      commonAdverseEffects: { pt: ['Reações no local de aplicação (eritema, prurido)', 'Sensação de queimação passageira'], es: ['Reacciones en el lugar de aplicación (eritema, prurito)', 'Sensación de quemazón pasajera'] },
      dangerousAdverseEffects: { pt: ['Toxicidade Sistêmica por Anestésico Local (LAST) em caso de overdose ou uso em pele muito lesada: zumbido, gosto metálico, convulsões e parada cardíaca.'], es: ['Toxicidad Sistémica por Anestésico Local (LAST) en caso de sobredosis o uso en piel muy lesionada: zumbido, sabor metálico, convulsiones y paro cardíaco.'] },
      contraindications: {
        absolute: { pt: ['Pele ferida, inflamada ou com bolhas ativas (na área do adesivo)', 'Alergia a anestésicos tipo amida'], es: ['Piel herida, inflamada o con ampollas activas (en el área del parche)', 'Alergia a anestésicos tipo amida'] },
        relative: { pt: ['Disfunção hepática severa (risco se houver absorção)'], es: ['Disfunción hepática severa (riesgo si hay absorción)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ATENÇÃO: Nunca aplicar fonte de calor (bolsa de água quente, cobertor elétrico) sobre o adesivo de lidocaína. O calor aumenta absurdamente a absorção, causando toxicidade sistêmica neurocardíaca (LAST).', es: 'ATENCIÓN: Nunca aplicar fuente de calor (bolsa de agua caliente, manta eléctrica) sobre el parche de lidocaína. El calor aumenta absurdamente la absorción, causando toxicidad sistémica neurocardíaca (LAST).' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 6 (nimesulida, gabapentina, pregabalina, lidocaina — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 7 — GOTA/HIPERURICEMIA + ANALGÉSICOS TÓPICOS/ANTAGONISTAS OPIOIDES
     BUILD 268 (2026-07-06) — Executado sob o SOP de Autonomia Total.

     ⚠️ COLCHICINA: DUPLICATA CONFIRMADA (Regra 2). Já existe schema rico e
     ativo em database/cardio.js (Grupo 45, category "cardio"), incluindo
     pharmacokinetics, calculator, monitoring, interactions.major/moderate.
     A submissão atual é isolada em variável morta abaixo (NUNCA atribuída
     a window.ANALGESICOS_DRUGS_DB). A entrada de cardio.js permanece única
     fonte de verdade. As interações submetidas para colchicina (ver bloco
     em interacoes.js) FORAM mantidas/ativadas normalmente, pois o nó-raiz
     "colchicina" no motor de interações independe de qual arquivo hospeda
     o schema clínico do fármaco.

     ✅ ALOPURINOL, FEBUXOSTATE, PROBENECIDA, CAPSAICINA, NALOXONA,
     NALTREXONA, NALMEFENO: confirmados GENUINAMENTE NOVOS — nenhum banco
     do projeto possuía schema próprio para estes 7 fármacos.

     GRAFIA CANÔNICA (Regra 4): a submissão trouxe a chave "febuxostat"
     (grafia ES/EN) com nome pt: "Febuxostate" — inconsistência interna da
     própria submissão. Adotada a chave "febuxostate" (PT-BR terminado em
     "e"), consistente com o padrão já usado em "etoricoxibe"/"celecoxibe"
     (BUILD 266). A grafia "Febuxostat" permanece apenas como rótulo es:.

     Doses reaninhadas de dose.adult/dose.pediatric (flat) para
     dose.adult.standard/dose.pediatric.standard, conforme convenção do
     arquivo.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── ALOPURINOL ─────────────────────────────────────────────────────── */
    "alopurinol": {
      name: { pt: 'Alopurinol', es: 'Alopurinol' },
      category: 'reumato',
      class: { pt: 'Inibidor da Xantina Oxidase', es: 'Inhibidor de la Xantina Oxidasa' },
      indications: {
        pt: ['Gota crônica (redução da uricemia)', 'Prevenção de nefropatia por ácido úrico em quimioterapia (Síndrome de Lise Tumoral)', 'Cálculos renais recorrentes de ácido úrico'],
        es: ['Gota crónica (reducción de la uricemia)', 'Prevención de nefropatía por ácido úrico en quimioterapia (Síndrome de Lisis Tumoral)', 'Cálculos renales recurrentes de ácido úrico']
      },
      commercialNames: { br: ['Zyloric'], ar: ['Allopurinol'] },
      presentation: { pt: ['Comprimidos 100 mg', '300 mg'], es: ['Comprimidos 100 mg', '300 mg'] },
      mechanism: {
        pt: 'Inibe a enzima xantina oxidase, responsável pela conversão de hipoxantina em xantina, e de xantina em ácido úrico. Dessa forma, reduz a produção e os níveis séricos e urinários de ácido úrico.',
        es: 'Inhibe la enzima xantina oxidasa, responsable de la conversión de hipoxantina a xantina, y de xantina a ácido úrico. De esta forma, reduce la producción y los niveles séricos y urinarios de ácido úrico.'
      },
      dose: {
        adult: {
          standard: {
            pt: '100 a 300 mg/dia, em dose única (após refeição). Dose máxima: 800 mg/dia (doses >300 mg devem ser fracionadas).',
            es: '100 a 300 mg/día, en dosis única (tras la comida). Dosis máxima: 800 mg/día (dosis >300 mg deben fraccionarse).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Excepcional (Lise Tumoral): 10 mg/kg/dia dividido em 8/8h. Máximo 400 mg/dia.',
            es: 'Excepcional (Lisis Tumoral): 10 mg/kg/día dividido cada 8h. Máximo 400 mg/día.'
          }
        }
      },
      administration: { pt: ['Não iniciar DURANTE uma crise aguda de gota (pode exacerbar a crise). Iniciar após resolução do quadro e SEMPRE coadministrado com profilaxia (ex: colchicina ou AINE) nos primeiros 3 a 6 meses.'], es: ['No iniciar DURANTE una crisis aguda de gota (puede exacerbar la crisis). Iniciar tras la resolución del cuadro y SIEMPRE coadministrado con profilaxis (ej: colchicina o AINE) en los primeros 3 a 6 meses.'] },
      renalAdjustment: { required: true, message: { pt: 'Obrigatório! ClCr 10-20 mL/min: Máximo 200 mg/dia. ClCr < 10: Máximo 100 mg/dia ou em dias alternados. Metabólito ativo (oxipurinol) acumula na DRC.', es: '¡Obligatorio! ClCr 10-20 mL/min: Máximo 200 mg/día. ClCr < 10: Máximo 100 mg/día o en días alternos. Metabolito activo (oxipurinol) se acumula en ERC.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose e monitorar enzimas hepáticas em disfunção severa.', es: 'Reducir dosis y monitorizar enzimas hepáticas en disfunción severa.' } },
      commonAdverseEffects: { pt: ['Erupção cutânea maculopapular (rash)', 'Desconforto gástrico', 'Precipitação de crise aguda de gota (no início do tratamento)'], es: ['Erupción cutánea maculopapular (rash)', 'Molestia gástrica', 'Precipitación de crisis aguda de gota (al inicio del tratamiento)'] },
      dangerousAdverseEffects: { pt: ['Síndrome de Stevens-Johnson (SSJ) e Necrólise Epidérmica Tóxica (NET)', 'Síndrome DRESS', 'Hepatotoxicidade'], es: ['Síndrome de Stevens-Johnson (SJS) y Necrólisis Epidérmica Tóxica (NET)', 'Síndrome DRESS', 'Hepatotoxicidad'] },
      contraindications: {
        absolute: { pt: ['Reação de hipersensibilidade grave prévia ao alopurinol'], es: ['Reacción de hipersensibilidad grave previa al alopurinol'] },
        relative: { pt: ['Genótipo HLA-B*58:01 positivo (altíssimo risco de reações cutâneas graves, especialmente em asiáticos)'], es: ['Genotipo HLA-B*58:01 positivo (altísimo riesgo de reacciones cutáneas graves, especialmente en asiáticos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A suspensão IMEDIATA do fármaco é mandatória ao primeiro sinal de rash cutâneo, devido ao risco da Síndrome de Hipersensibilidade ao Alopurinol (potencialmente fatal).', es: 'La suspensión INMEDIATA del fármaco es obligatoria al primer signo de rash cutáneo, debido al riesgo del Síndrome de Hipersensibilidad al Alopurinol (potencialmente fatal).' }
      }
    },

    /* ── FEBUXOSTATE (submissão original: "febuxostat") ───────────────────── */
    "febuxostate": {
      name: { pt: 'Febuxostate', es: 'Febuxostat' },
      category: 'reumato',
      class: { pt: 'Inibidor Não-Purínico da Xantina Oxidase', es: 'Inhibidor No Purínico de la Xantina Oxidasa' },
      indications: {
        pt: ['Gota crônica e hiperuricemia sintomática (geralmente pacientes que não toleram alopurinol ou possuem contraindicação renal)'],
        es: ['Gota crónica e hiperuricemia sintomática (generalmente pacientes que no toleran alopurinol o poseen contraindicación renal)']
      },
      commercialNames: { br: ['Febuxostate'], ar: ['Atepodin'] },
      presentation: { pt: ['Comprimidos 40 mg', '80 mg', '120 mg'], es: ['Comprimidos 40 mg', '80 mg', '120 mg'] },
      mechanism: {
        pt: 'Inibidor potente, seletivo e não-purínico da xantina oxidase. Bloqueia a enzima de forma mais seletiva que o alopurinol. Metabolizado primariamente pelo fígado, gerando menor dependência da depuração renal.',
        es: 'Inhibidor potente, selectivo y no purínico de la xantina oxidasa. Bloquea la enzima de forma más selectiva que el alopurinol. Metabolizado primariamente por el hígado, generando menor dependencia de la depuración renal.'
      },
      dose: {
        adult: {
          standard: {
            pt: '40 a 80 mg VO 1x/dia. Máximo 120 mg/dia em hiperuricemia refratária.',
            es: '40 a 80 mg VO 1 vez/día. Máximo 120 mg/día en hiperuricemia refractaria.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não recomendado.',
            es: 'No recomendado.'
          }
        }
      },
      administration: { pt: ['Independe das refeições.', 'Associar profilaxia de crises (colchicina/AINE) nos primeiros meses.'], es: ['Independiente de las comidas.', 'Asociar profilaxis de crisis (colchicina/AINE) en los primeros meses.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em DRC leve a moderada (grande vantagem sobre alopurinol). Cautela em ClCr < 30 mL/min.', es: 'No requiere ajuste en ERC leve a moderada (gran ventaja sobre alopurinol). Precaución en ClCr < 30 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Insuficiência hepática grave: a segurança e eficácia não foram estabelecidas (usar com extrema cautela).', es: 'Insuficiencia hepática grave: la seguridad y eficacia no fueron establecidas (usar con extrema precaución).' } },
      commonAdverseEffects: { pt: ['Elevação de transaminases hepáticas', 'Náuseas', 'Dores articulares (exacerbação da gota no início)', 'Rash cutâneo leve'], es: ['Elevación de transaminasas hepáticas', 'Náuseas', 'Dolores articulares (exacerbación de la gota al inicio)', 'Rash cutáneo leve'] },
      dangerousAdverseEffects: { pt: ['Morte cardiovascular (Alerta FDA)', 'Hepatotoxicidade grave'], es: ['Muerte cardiovascular (Alerta FDA)', 'Hepatotoxicidad grave'] },
      contraindications: {
        absolute: { pt: ['Uso concomitante com azatioprina ou mercaptopurina'], es: ['Uso concomitante con azatioprina o mercaptopurina'] },
        relative: { pt: ['Doença cardiovascular isquêmica ativa ou histórico recente', 'Histórico de IAM (Alerta de risco CV)'], es: ['Enfermedad cardiovascular isquémica activa o historial reciente', 'Historial de IAM (Alerta de riesgo CV)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA FDA (Boxed Warning): O febuxostate possui um risco maior de morte por causas cardiovasculares em comparação ao alopurinol. Restrito para quem falhou ou não pode usar alopurinol.', es: 'ALERTA FDA (Boxed Warning): El febuxostat posee un riesgo mayor de muerte por causas cardiovasculares en comparación con el alopurinol. Restringido para quienes fallaron o no pueden usar alopurinol.' }
      }
    },

    /* ── PROBENECIDA ────────────────────────────────────────────────────── */
    "probenecida": {
      name: { pt: 'Probenecida', es: 'Probenecida' },
      category: 'reumato',
      class: { pt: 'Agente Uricosúrico', es: 'Agente Uricosúrico' },
      indications: {
        pt: ['Gota crônica (como alternativa ou complemento, para urato "under-excretors")', 'Prolongamento da ação terapêutica das penicilinas/cefalosporinas'],
        es: ['Gota crónica (como alternativa o complemento, para urato "under-excretors")', 'Prolongación de la acción terapéutica de las penicilinas/cefalosporinas']
      },
      commercialNames: { br: ['Benemid (histórico/importado)'], ar: ['Probenecid'] },
      presentation: { pt: ['Comprimidos 500 mg'], es: ['Comprimidos 500 mg'] },
      mechanism: {
        pt: 'Inibidor competitivo do transportador de ânions orgânicos (URAT1) nos túbulos contorcidos proximais dos rins. Inibe a reabsorção de ácido úrico, promovendo excreção maciça na urina. Secundariamente, inibe a secreção tubular de muitos medicamentos (ex: penicilinas, metotrexato), retendo-os no sangue.',
        es: 'Inhibidor competitivo del transportador de aniones orgánicos (URAT1) en los túbulos contorneados proximales de los riñones. Inhibe la reabsorción de ácido úrico, promoviendo excreción masiva en la orina. Secundariamente, inhibe la secreción tubular de muchos medicamentos (ej: penicilinas, metotrexato), reteniéndolos en la sangre.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Gota: 250 mg 2x/dia por 1 semana, depois aumentar para 500 mg 2x/dia. Adjunto a antibiótico: 500 mg 4x/dia.',
            es: 'Gota: 250 mg 2 veces/día por 1 semana, después aumentar a 500 mg 2 veces/día. Adjunto a antibiótico: 500 mg 4 veces/día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Adjunto a antibióticos (> 2 anos e < 50 kg): 25 mg/kg inicial, seguido de 40 mg/kg/dia divididos em 4 doses.',
            es: 'Adjunto a antibióticos (> 2 años y < 50 kg): 25 mg/kg inicial, seguido de 40 mg/kg/día divididos en 4 dosis.'
          }
        }
      },
      administration: { pt: ['Tomar com alimentos ou antiácidos para diminuir irritação gástrica.', 'HIDRATAÇÃO COPIOSA é mandatória para evitar cristalização urinária.'], es: ['Tomar con alimentos o antiácidos para disminuir irritación gástrica.', 'HIDRATACIÓN COPIOSA es obligatoria para evitar cristalización urinaria.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar ou não utilizar se ClCr < 50 mL/min (fármaco perde a eficácia no túbulo renal).', es: 'Evitar o no utilizar si ClCr < 50 mL/min (fármaco pierde la eficacia en el túbulo renal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náusea/Vômitos', 'Poliúria'], es: ['Cefalea', 'Náusea/Vómitos', 'Poliuria'] },
      dangerousAdverseEffects: { pt: ['Cálculos renais de ácido úrico (urolitíase grave)', 'Anemia aplástica (rara)'], es: ['Cálculos renales de ácido úrico (urolitiasis grave)', 'Anemia aplástica (rara)'] },
      contraindications: {
        absolute: { pt: ['Histórico de nefrolitíase por ácido úrico', 'Crise aguda de gota (pode exacerbar)', 'Porfiria'], es: ['Historial de nefrolitiasis por ácido úrico', 'Crisis aguda de gota (puede exacerbar)', 'Porfiria'] },
        relative: { pt: ['Doença ulcerosa péptica'], es: ['Enfermedad ulcerosa péptica'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Não deve ser administrado a pacientes que já hiper-excretam ácido úrico (>800 mg/dia), pois o risco de cálculo renal é iminente. Avaliar urina de 24h antes de iniciar.', es: 'No debe ser administrado a pacientes que ya hiper-excretan ácido úrico (>800 mg/día), pues el riesgo de cálculo renal es inminente. Evaluar orina de 24h antes de iniciar.' }
      }
    },

    /* ── CAPSAICINA ─────────────────────────────────────────────────────── */
    "capsaicina": {
      name: { pt: 'Capsaicina', es: 'Capsaicina' },
      category: 'analgesia',
      class: { pt: 'Analgésico Tópico (Agonista TRPV1)', es: 'Analgésico Tópico (Agonista TRPV1)' },
      indications: {
        pt: ['Neuralgia pós-herpética', 'Dor neuropática periférica diabética', 'Dor musculoesquelética localizada (baixa concentração)'],
        es: ['Neuralgia posherpética', 'Dolor neuropático periférico diabético', 'Dolor musculoesquelético localizado (baja concentración)']
      },
      commercialNames: { br: ['Qutenza (Adesivo 8%)', 'Fascar (Creme)'], ar: ['Qutenza', 'Capsaicina'] },
      presentation: { pt: ['Adesivo cutâneo de alta concentração 8%', 'Creme tópico 0,025% a 0,075%'], es: ['Parche cutáneo de alta concentración 8%', 'Crema tópica 0,025% a 0,075%'] },
      mechanism: {
        pt: 'Agonista altamente seletivo do receptor TRPV1 (Transient Receptor Potential Vanilloid 1). A exposição inicial causa despolarização aguda e dor/queimação (liberação maciça de substância P). Contudo, a exposição contínua leva a uma dessensibilização reversível e depleção total da substância P nos terminais nervosos, inibindo a transmissão prolongada da dor.',
        es: 'Agonista altamente selectivo del receptor TRPV1 (Transient Receptor Potential Vanilloid 1). La exposición inicial causa despolarización aguda y dolor/quemazón (liberación masiva de sustancia P). Sin embargo, la exposición continua lleva a una desensibilización reversible y depleción total de la sustancia P en los terminales nerviosos, inhibiendo la transmisión prolongada del dolor.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Adesivo 8%: Aplicar 1 a 4 adesivos por 30 a 60 minutos na área dolorosa. Repetir apenas após 90 dias, se necessário. Creme: Aplicar 3 a 4x/dia.',
            es: 'Parche 8%: Aplicar 1 a 4 parches por 30 a 60 minutos en el área dolorosa. Repetir solo tras 90 días, si es necesario. Crema: Aplicar 3 a 4 veces/día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Uso não recomendado em pediatria.',
            es: 'Uso no recomendado en pediatría.'
          }
        }
      },
      administration: { pt: ['O Adesivo 8% DEVE ser aplicado por médico em ambiente clínico.', 'Obrigatório uso de luvas nitrílicas (nunca látex) para manuseio.', 'A dor inicial da aplicação do adesivo 8% é intensa; pode exigir pré-tratamento com anestésico tópico (lidocaína) ou gelo.'], es: ['El Parche 8% DEBE ser aplicado por un médico en ambiente clínico.', 'Obligatorio uso de guantes de nitrilo (nunca látex) para manipulación.', 'El dolor inicial de la aplicación del parche 8% es intenso; puede exigir pretratamiento con anestésico tópico (lidocaína) o hielo.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem absorção sistêmica relevante. Sem ajuste.', es: 'Sin absorción sistémica relevante. Sin ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem ajuste necessário.', es: 'Sin ajuste necesario.' } },
      commonAdverseEffects: { pt: ['Eritema severo no local de aplicação', 'Dor e queimação excruciante transitória', 'Prurido'], es: ['Eritema severo en el lugar de aplicación', 'Dolor y quemazón excruciante transitoria', 'Prurito'] },
      dangerousAdverseEffects: { pt: ['Queimaduras de 2º e 3º grau (raras, em má aplicação)', 'Pico hipertensivo agudo (reflexo simpático à dor da aplicação)'], es: ['Quemaduras de 2º y 3º grado (raras, en mala aplicación)', 'Pico hipertensivo agudo (reflejo simpático al dolor de la aplicación)'] },
      contraindications: {
        absolute: { pt: ['Pele ferida, ulcerada ou não cicatrizada', 'Hipersensibilidade grave'], es: ['Piel herida, ulcerada o no cicatrizada', 'Hipersensibilidad grave'] },
        relative: { pt: ['Hipertensão arterial não controlada ou doença isquêmica coronariana instável (devido ao estresse doloroso da aplicação do adesivo 8%)'], es: ['Hipertensión arterial no controlada o enfermedad isquémica coronaria inestable (debido al estrés doloroso de la aplicación del parche 8%)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA CARDIOVASCULAR: O estresse agudo e a dor da aplicação do adesivo a 8% podem elevar a pressão arterial sistólica drasticamente durante a primeira hora. Monitorar PA.', es: 'ALERTA CARDIOVASCULAR: El estrés agudo y el dolor de la aplicación del parche al 8% pueden elevar la presión arterial sistólica drásticamente durante la primera hora. Monitorizar PA.' }
      }
    },

    /* ── NALOXONA ───────────────────────────────────────────────────────── */
    "naloxona": {
      name: { pt: 'Naloxona', es: 'Naloxona' },
      category: 'analgesia',
      class: { pt: 'Antagonista Opioide (Antídoto)', es: 'Antagonista Opioide (Antídoto)' },
      indications: {
        pt: ['Reversão de depressão respiratória e sistema nervoso central induzida por opioides (intoxicação/overdose)', 'Reversão de analgesia opioide pós-operatória excessiva'],
        es: ['Reversión de depresión respiratoria y sistema nervioso central inducida por opioides (intoxicación/sobredosis)', 'Reversión de analgesia opioide posoperatoria excesiva']
      },
      commercialNames: { br: ['Narcan'], ar: ['Naloxona'] },
      presentation: { pt: ['Ampolas IV/IM/SC 0,4 mg/mL', 'Spray nasal (alguns mercados)'], es: ['Ampollas IV/IM/SC 0,4 mg/mL', 'Spray nasal (algunos mercados)'] },
      mechanism: {
        pt: 'Antagonista competitivo puro dos receptores opioides (mu, kappa, delta), com altíssima afinidade pelo receptor mu. Desloca os agonistas opioides dos receptores em segundos a minutos, revertendo instantaneamente a analgesia, depressão respiratória, miose e sedação.',
        es: 'Antagonista competitivo puro de los receptores opioides (mu, kappa, delta), con altísima afinidad por el receptor mu. Desplaza los agonistas opioides de los receptores en segundos a minutos, revirtiendo instantáneamente la analgesia, depresión respiratoria, miosis y sedación.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Overdose (Parada/Depressão grave): 0,4 a 2 mg IV direto a cada 2 a 3 minutos até resposta. Reversão pós-operatória: 0,04 a 0,2 mg IV titulado lentamente.',
            es: 'Sobredosis (Paro/Depresión grave): 0,4 a 2 mg IV directo cada 2 a 3 minutos hasta respuesta. Reversión posoperatoria: 0,04 a 0,2 mg IV titulado lentamente.'
          }
        },
        pediatric: {
          standard: {
            pt: '0,01 a 0,1 mg/kg IV a cada 2 a 3 minutos.',
            es: '0,01 a 0,1 mg/kg IV cada 2 a 3 minutos.'
          }
        }
      },
      administration: { pt: ['IV (rápida ação em 1-2 min), IM ou SC (ação em 5-10 min).', 'Pode ser infundida de forma contínua em overdoses por opioides de meia-vida muito longa (ex: metadona).'], es: ['IV (rápida acción en 1-2 min), IM o SC (acción en 5-10 min).', 'Puede ser infundida de forma continua en sobredosis por opioides de vida media muy larga (ej: metadona).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em emergências.', es: 'Sin necesidad de ajuste en emergencias.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em emergências.', es: 'Sin necesidad de ajuste en emergencias.' } },
      commonAdverseEffects: { pt: ['Síndrome de abstinência aguda (sudorese, agitação, tremores)', 'Náusea e vômito em jato', 'Taquicardia'], es: ['Síndrome de abstinencia aguda (sudoración, agitación, temblores)', 'Náusea y vómito en chorro', 'Taquicardia'] },
      dangerousAdverseEffects: { pt: ['Edema agudo de pulmão não cardiogênico', 'Fibrilação ventricular e parada cardíaca (devido à tempestade simpática pela dor súbita e abstinência)', 'Crise hipertensiva'], es: ['Edema agudo de pulmón no cardiogénico', 'Fibrilación ventricular y paro cardíaco (debido a la tormenta simpática por el dolor súbito y abstinencia)', 'Crisis hipertensiva'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade documentada à naloxona (Raro) - Na emergência de risco de morte (overdose), não há contraindicações absolutas.'], es: ['Hipersensibilidad documentada a la naloxona (Raro) - En la emergencia con riesgo vital (sobredosis), no hay contraindicaciones absolutas.'] },
        relative: { pt: ['Doença cardiovascular severa (o despertar doloroso hiper-simpático pode infartar o paciente)'], es: ['Enfermedad cardiovascular severa (el despertar doloroso hiper-simpático puede infartar al paciente)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Atenção à MEIA-VIDA: A meia-vida da naloxona (30-80 min) é MENOR que a da maioria dos opioides (como morfina, oxicodona, metadona). O paciente pode acordar, respirar e depois voltar a re-narcotizar (parada respiratória rebote).', es: 'Atención a la VIDA MEDIA: La vida media de la naloxona (30-80 min) es MENOR que la de la mayoría de los opioides (como morfina, oxicodona, metadona). El paciente puede despertar, respirar y luego volver a renarcotizar (paro respiratorio rebote).' }
      }
    },

    /* ── NALTREXONA ─────────────────────────────────────────────────────── */
    "naltrexona": {
      name: { pt: 'Naltrexona', es: 'Naltrexona' },
      category: 'analgesia',
      class: { pt: 'Antagonista Opioide (Ação prolongada)', es: 'Antagonista Opioide (Acción prolongada)' },
      indications: {
        pt: ['Manutenção da abstinência de álcool (reduz o craving / fissura)', 'Prevenção de recaída em dependentes de opioides (após desintoxicação completa)'],
        es: ['Mantenimiento de la abstinencia de alcohol (reduce el craving / fisura)', 'Prevención de recaída en dependientes de opioides (tras desintoxicación completa)']
      },
      commercialNames: { br: ['Revia', 'Unidox', 'Vivitrol'], ar: ['Revia', 'Naltrexona'] },
      presentation: { pt: ['Comprimidos 50 mg', 'Injeção IM de liberação prolongada (mensal)'], es: ['Comprimidos 50 mg', 'Inyección IM de liberación prolongada (mensual)'] },
      mechanism: {
        pt: 'Antagonista opioide competitivo de longa duração (mu, kappa e delta). Bloqueia os efeitos euforizantes dos opioides. Na dependência alcoólica, atua bloqueando a via mesolímbica de reforço positivo mediada por endorfinas, reduzindo o prazer e o impulso de beber álcool.',
        es: 'Antagonista opioide competitivo de larga duración (mu, kappa y delta). Bloquea los efectos euforizantes de los opioides. En la dependencia alcohólica, actúa bloqueando la vía mesolímbica de refuerzo positivo mediada por endorfinas, reduciendo el placer y el impulso de beber alcohol.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Alcoolismo/Dependência Opioide: 50 mg VO 1x/dia.',
            es: 'Alcoholismo/Dependencia Opioide: 50 mg VO 1 vez/día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não recomendado.',
            es: 'No recomendado.'
          }
        }
      },
      administration: { pt: ['Tomar com alimentos para reduzir efeitos gastrintestinais severos.', 'Exige que o paciente esteja 100% sem opioides há 7 a 14 dias antes da 1ª dose.'], es: ['Tomar con alimentos para reducir efectos gastrointestinales severos.', 'Exige que el paciente esté 100% sin opioides hace 7 a 14 días antes de la 1ª dosis.'] },
      renalAdjustment: { required: true, message: { pt: 'Cautela em disfunção renal leve/moderada. Faltam dados na severa (evitar).', es: 'Precaución en disfunción renal leve/moderada. Faltan datos en severa (evitar).' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADA em hepatite aguda ou insuficiência hepática severa. Risco documentado de hepatotoxicidade direta.', es: 'CONTRAINDICADA en hepatitis aguda o insuficiencia hepática severa. Riesgo documentado de hepatotoxicidad directa.' } },
      commonAdverseEffects: { pt: ['Náusea (muito comum e limitante no início)', 'Insônia', 'Cefaleia', 'Ansiedade', 'Astenia'], es: ['Náusea (muy común y limitante al inicio)', 'Insomnio', 'Cefalea', 'Ansiedad', 'Astenia'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade (lesão hepatocelular dose-dependente)', 'Precipitação de crise de abstinência opioide catastrófica', 'Ideação suicida e depressão maior'], es: ['Hepatotoxicidad (lesión hepatocelular dosis-dependiente)', 'Precipitación de crisis de abstinencia opioide catastrófica', 'Ideación suicida y depresión mayor'] },
      contraindications: {
        absolute: { pt: ['Uso atual de analgésicos opioides (incluindo buprenorfina e metadona)', 'Pacientes com dependência aguda de opioides que falharam no teste de abstinência', 'Hepatite aguda ou falência hepática'], es: ['Uso actual de analgésicos opioides (incluyendo buprenorfina y metadona)', 'Pacientes con dependencia aguda de opioides que fallaron la prueba de abstinencia', 'Hepatitis aguda o falla hepática'] },
        relative: { pt: ['Depressão não tratada / Risco suicida'], es: ['Depresión no tratada / Riesgo suicida'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'RISCO DE OVERDOSE FATAL: Se o paciente tentar "vencer" o bloqueio da naltrexona ingerindo altas doses de heroína ou opioides potentes, pode ocorrer depressão respiratória letal irreversível.', es: 'RIESGO DE SOBREDOSIS FATAL: Si el paciente intenta "vencer" el bloqueo de la naltrexona ingiriendo altas dosis de heroína u opioides potentes, puede ocurrir depresión respiratoria letal irreversible.' }
      }
    },

    /* ── NALMEFENO ──────────────────────────────────────────────────────── */
    "nalmefeno": {
      name: { pt: 'Nalmefeno', es: 'Nalmefeno' },
      category: 'analgesia',
      class: { pt: 'Modulador do Sistema Opioide (Antagonista Mu/Delta e Agonista Parcial Kappa)', es: 'Modulador del Sistema Opioide (Antagonista Mu/Delta y Agonista Parcial Kappa)' },
      indications: {
        pt: ['Redução do consumo de álcool em pacientes com dependência alcoólica de alto risco (uso sob demanda)'],
        es: ['Reducción del consumo de alcohol en pacientes con dependencia alcohólica de alto riesgo (uso bajo demanda)']
      },
      commercialNames: { br: ['Selincro (na Europa)'], ar: ['Selincro'] },
      presentation: { pt: ['Comprimidos 18 mg'], es: ['Comprimidos 18 mg'] },
      mechanism: {
        pt: 'Modulador do sistema opioide. Atua como antagonista dos receptores mu (μ) e delta (δ), e como agonista parcial do receptor kappa (κ). Reduz a libertação excessiva de dopamina na via de recompensa após consumo de álcool. O diferencial é ser tomado "quando necessário" para reduzir a vontade imediata de beber excessivamente, sem exigir abstinência prévia.',
        es: 'Modulador del sistema opioide. Actúa como antagonista de los receptores mu (μ) y delta (δ), y como agonista parcial del receptor kappa (κ). Reduce la liberación excesiva de dopamina en la vía de recompensa tras consumo de alcohol. La diferencia es que se toma "cuando sea necesario" para reducir las ganas inmediatas de beber en exceso, sin exigir abstinencia previa.'
      },
      dose: {
        adult: {
          standard: {
            pt: '18 mg VO "sob demanda", tomado 1 a 2 horas ANTES da ocasião em que se antecipa alto risco de beber. Máximo de 1 comprimido por dia.',
            es: '18 mg VO "bajo demanda", tomado 1 a 2 horas ANTES de la ocasión en que se anticipa alto riesgo de beber. Máximo de 1 comprimido por día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não indicado.',
            es: 'No indicado.'
          }
        }
      },
      administration: { pt: ['Tomado de forma profilática aguda (sob demanda).', 'Engolir o comprimido inteiro.'], es: ['Tomado de forma profiláctica aguda (bajo demanda).', 'Tragar el comprimido entero.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em disfunção renal grave (ClCr < 30 mL/min).', es: 'Evitar en disfunción renal grave (ClCr < 30 mL/min).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave (Child-Pugh C).', es: 'Contraindicado en insuficiencia hepática grave (Child-Pugh C).' } },
      commonAdverseEffects: { pt: ['Náuseas (muito alta incidência no início)', 'Tontura', 'Insônia', 'Cefaleia', 'Boca seca'], es: ['Náuseas (muy alta incidencia al inicio)', 'Mareos', 'Insomnio', 'Cefalea', 'Boca seca'] },
      dangerousAdverseEffects: { pt: ['Alucinações / Dissociação (efeito agonista kappa)', 'Precipitação de crise de abstinência a opioides'], es: ['Alucinaciones / Disociación (efecto agonista kappa)', 'Precipitación de crisis de abstinencia a opioides'] },
      contraindications: {
        absolute: { pt: ['Pacientes que necessitam de analgésicos opioides no momento', 'Uso recente de opioides (desencadeia síndrome de abstinência severa)', 'Síndrome de abstinência alcoólica grave e aguda (DTs, alucinações, convulsões)'], es: ['Pacientes que necesitan analgésicos opioides en el momento', 'Uso reciente de opioides (desencadena síndrome de abstinencia severa)', 'Síndrome de abstinencia alcohólica grave y aguda (DTs, alucinaciones, convulsiones)'] },
        relative: { pt: ['Histórico psiquiátrico instável'], es: ['Historial psiquiátrico inestable'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Não deve ser utilizado para interromper o uso de álcool em pacientes com abstinência alcoólica física grave instalada, mas sim para "moderar" os danos e volume ingerido em pacientes de alto risco.', es: 'No debe ser utilizado para interrumpir el uso de alcohol en pacientes con abstinencia alcohólica física grave instalada, sino para "moderar" los daños y volumen ingerido en pacientes de alto riesgo.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 7 (alopurinol, febuxostate, probenecida, capsaicina, naloxona, naltrexona, nalmefeno — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     VARIÁVEL MORTA — Grupo 7, duplicata isolada (NUNCA atribuída a
     window.ANALGESICOS_DRUGS_DB, zero efeito em runtime). A colchicina
     ativa em produção é a de database/cardio.js (Grupo 45).
  ══════════════════════════════════════════════════════════════════════════════ */
  const _grupo7_colchicina_duplicata_NAO_USAR = {
    "colchicina": {
      name: { pt: 'Colchicina', es: 'Colchicina' },
      category: 'reumato',
      class: { pt: 'Alcaloide Antimitótico (Anti-inflamatório específico para gota)', es: 'Alcaloide Antimitótico (Antiinflamatorio específico para gota)' },
      indications: {
        pt: ['Crise aguda de gota', 'Profilaxia de crises de gota ao iniciar terapia redutora de urato', 'Febre Familiar do Mediterrâneo', 'Pericardite aguda'],
        es: ['Crisis aguda de gota', 'Profilaxis de crisis de gota al iniciar terapia reductora de urato', 'Fiebre Familiar del Mediterráneo', 'Pericarditis aguda']
      },
      commercialNames: { br: ['Colchis', 'Colchicina'], ar: ['Colchicina'] },
      presentation: { pt: ['Comprimidos 0,5 mg', '1 mg'], es: ['Comprimidos 0,5 mg', '1 mg'] },
      dose: {
        adult: { standard: { pt: 'Crise Aguda: 1 mg inicial, seguido de 0,5 mg após 1 hora (Máx 1,5 mg no primeiro dia). Profilaxia: 0,5 mg 1 a 2x/dia.', es: 'Crisis Aguda: 1 mg inicial, seguido de 0,5 mg tras 1 hora (Máx 1,5 mg en el primer día). Profilaxis: 0,5 mg 1 a 2 veces/día.' } },
        pediatric: { standard: { pt: 'Uso estrito (Febre Familiar do Mediterrâneo): dose baseada na idade/peso.', es: 'Uso estricto (Fiebre Familiar del Mediterráneo): dosis basada en la edad/peso.' } }
      }
    }
  }; /* fim _grupo7_colchicina_duplicata_NAO_USAR — NUNCA atribuída a window.ANALGESICOS_DRUGS_DB */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 8 (BUILD 269, 2026-07-06) — Reumatologia: DMARDs Não Biológicos +
     Imunossupressores + Uricosúricos adicionais. Lote sem instrução textual,
     processado sob o SOP de Autonomia Total.

     ✅ SULFASSALAZINA, LEFLUNOMIDA, AZATIOPRINA, CICLOSPORINA, BENZBROMARONA,
     PEGLOTICASE, METOTREXATO, HIDROXICLOROQUINA: auditadas via Grep em TODOS
     os bancos do projeto (analgesicos.js, cardio.js, psicofarmacos.js,
     antimicrobianos.js, prescricoes.js, reumatologia.js) — nenhuma possuía
     schema clínico próprio. Azatioprina, ciclosporina, metotrexato e
     hidroxicloroquina já eram citadas como nós/alvos em interacoes.js
     (sem schema de dose), precedente idêntico ao de outros fármacos deste
     arquivo (ex.: ciclosporina, teofilina) — confirmadas GENUINAMENTE NOVAS
     como schema clínico.

     Doses reaninhadas de dose.adult/dose.pediatric (flat) para
     dose.adult.standard/dose.pediatric.standard, conforme convenção do
     arquivo (Regra 3/SOP).
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

    /* ── SULFASSALAZINA ─────────────────────────────────────────────────── */
    "sulfassalazina": {
      name: { pt: 'Sulfassalazina', es: 'Sulfasalazina' },
      category: 'reumato',
      class: { pt: 'DMARD Não Biológico / Derivado 5-ASA e Sulfonamida', es: 'FAME No Biológico / Derivado 5-ASA y Sulfonamida' },
      indications: {
        pt: ['Artrite Reumatoide', 'Espondilite Anquilosante', 'Doença Inflamatória Intestinal (Retocolite Ulcerativa / Doença de Crohn)'],
        es: ['Artritis Reumatoide', 'Espondilitis Anquilosante', 'Enfermedad Inflamatoria Intestinal (Colitis Ulcerosa / Enfermedad de Crohn)']
      },
      commercialNames: { br: ['Azulfin'], ar: ['Azulfidine'] },
      presentation: { pt: ['Comprimidos 500 mg'], es: ['Comprimidos 500 mg'] },
      mechanism: {
        pt: 'Pró-fármaco. Ao chegar no cólon, as bactérias da flora intestinal clivam a molécula em dois compostos: Sulfapiridina (absorvida sistemicamente, responsável pela ação anti-reumática via inibição de citocinas) e o Ácido 5-aminossalicílico ou 5-ASA (permanece no cólon exercendo efeito anti-inflamatório tópico nas doenças intestinais).',
        es: 'Profármaco. Al llegar al colon, las bacterias de la flora intestinal escinden la molécula en dos compuestos: Sulfapiridina (absorbida sistémicamente, responsable de la acción antirreumática vía inhibición de citoquinas) y el Ácido 5-aminosalicílico o 5-ASA (permanece en el colon ejerciendo efecto antiinflamatorio tópico en las enfermedades intestinales).'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Iniciar com 500 mg 1x a 2x/dia após refeições. Aumentar progressivamente até a dose de manutenção de 1000 mg (1 g) a cada 12 horas. (Máximo de 3 a 4g/dia em DII).',
            es: 'Iniciar con 500 mg 1 a 2 veces/día tras las comidas. Aumentar progresivamente hasta la dosis de mantenimiento de 1000 mg (1 g) cada 12 horas. (Máximo de 3 a 4g/día en EII).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Artrite Idiopática Juvenil (crianças > 6 anos): 30 a 50 mg/kg/dia, divididos em 2 doses.',
            es: 'Artritis Idiopática Juvenil (niños > 6 años): 30 a 50 mg/kg/día, divididos en 2 dosis.'
          }
        }
      },
      administration: { pt: ['Tomar sempre após as refeições e com um copo cheio de água.', 'Comprimidos não devem ser triturados.'], es: ['Tomar siempre después de las comidas y con un vaso lleno de agua.', 'Los comprimidos no deben ser triturados.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em disfunção renal grave (ClCr < 30 mL/min) devido ao acúmulo de sulfapiridina.', es: 'Evitar en disfunción renal grave (ClCr < 30 mL/min) debido a la acumulación de sulfapiridina.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática grave.', es: 'Contraindicado en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Desconforto gástrico / Náuseas (muito comum)', 'Coloração alaranjada da urina e da pele (benigno)', 'Oligospermia transitória (reduz espermatozoides reversivelmente)'], es: ['Molestia gástrica / Náuseas (muy común)', 'Coloración anaranjada de la orina y de la piel (benigno)', 'Oligospermia transitoria (reduce espermatozoides reversiblemente)'] },
      dangerousAdverseEffects: { pt: ['Supressão medular (agranulocitose / leucopenia)', 'Síndrome de Stevens-Johnson (alergia a sulfa)', 'Hemólise (em deficiência de G6PD)'], es: ['Supresión medular (agranulocitosis / leucopenia)', 'Síndrome de Stevens-Johnson (alergia a sulfa)', 'Hemólisis (en deficiencia de G6PD)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade conhecida a SULFONAMIDAS ou a SALICILATOS (aspirina)', 'Porfiria', 'Obstrução intestinal ou urinária'], es: ['Hipersensibilidad conocida a SULFONAMIDAS o a SALICILATOS (aspirina)', 'Porfiria', 'Obstrucción intestinal o urinaria'] },
        relative: { pt: ['Deficiência de G6PD', 'Asma severa'], es: ['Deficiencia de G6PD', 'Asma severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'O paciente deve ser alertado que sua urina, suor e lágrimas podem ficar amarelo-alaranjados (pode manchar lentes de contato). Alerta máximo para reação alérgica cruzada em pacientes alérgicos a Sulfametoxazol.', es: 'El paciente debe ser alertado que su orina, sudor y lágrimas pueden volverse amarillo-anaranjados (puede manchar lentes de contacto). Alerta máxima para reacción alérgica cruzada en pacientes alérgicos a Sulfametoxazol.' }
      }
    },

    /* ── LEFLUNOMIDA ────────────────────────────────────────────────────── */
    "leflunomida": {
      name: { pt: 'Leflunomida', es: 'Leflunomida' },
      category: 'reumato',
      class: { pt: 'DMARD Não Biológico / Inibidor da Síntese de Pirimidinas', es: 'FAME No Biológico / Inhibidor de la Síntesis de Pirimidinas' },
      indications: {
        pt: ['Artrite Reumatoide ativa (alternativa ou adjunto ao Metotrexato)', 'Artrite Psoriásica'],
        es: ['Artritis Reumatoide activa (alternativa o adjunto al Metotrexato)', 'Artritis Psoriásica']
      },
      commercialNames: { br: ['Arava'], ar: ['Arava', 'Leflunomida'] },
      presentation: { pt: ['Comprimidos 20 mg'], es: ['Comprimidos 20 mg'] },
      mechanism: {
        pt: 'Imunomodulador que inibe a enzima di-hidroorotato desidrogenase (DHODH) no interior das mitocôndrias. Essa enzima é crítica para a síntese de novo das pirimidinas (DNA/RNA). Linfócitos T autoimunes hiperativos dependem dessa síntese para proliferar, sendo portanto paralisados pela droga.',
        es: 'Inmunomodulador que inhibe la enzima dihidroorotato deshidrogenasa (DHODH) en el interior de las mitocondrias. Esta enzima es crítica para la síntesis de novo de las pirimidinas (ADN/ARN). Linfocitos T autoinmunes hiperactivos dependen de esta síntesis para proliferar, siendo por lo tanto paralizados por la droga.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Dose de ataque inicial (opcional na prática atual por toxidade): 100 mg 1x/dia por 3 dias. Manutenção: 20 mg 1x/dia (pode-se reduzir para 10 mg se mal tolerado).',
            es: 'Dosis de carga inicial (opcional en la práctica actual por toxicidad): 100 mg 1 vez/día por 3 días. Mantenimiento: 20 mg 1 vez/día (se puede reducir a 10 mg si se tolera mal).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não recomendado rotineiramente (risco de hepatotoxicidade sistêmica).',
            es: 'No recomendado rutinariamente (riesgo de hepatotoxicidad sistémica).'
          }
        }
      },
      administration: { pt: ['Via oral, independente das refeições.'], es: ['Vía oral, independiente de las comidas.'] },
      renalAdjustment: { required: false, message: { pt: 'Usar com cautela em DRC leve/moderada. Faltam dados na severa (evitar).', es: 'Usar con precaución en ERC leve/moderada. Faltan datos en severa (evitar).' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADO em pacientes com disfunção hepática, sorologia positiva para hepatite B/C, ou alcoolismo (ALTO RISCO DE CIRROSE).', es: 'CONTRAINDICADO en pacientes con disfunción hepática, serología positiva para hepatitis B/C, o alcoholismo (ALTO RIESGO DE CIRROSIS).' } },
      commonAdverseEffects: { pt: ['Diarreia (muito comum >15%)', 'Alopeção (queda de cabelo)', 'Aumento da pressão arterial', 'Elevação de TGO/TGP'], es: ['Diarrea (muy común >15%)', 'Alopecia (caída de cabello)', 'Aumento de la presión arterial', 'Elevación de AST/ALT'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade grave (necrose fulminante)', 'Pneumonite intersticial', 'Mielossupressão severa', 'Teratogenicidade extrema (Categoria X)'], es: ['Hepatotoxicidad grave (necrosis fulminante)', 'Neumonitis intersticial', 'Mielosupresión severa', 'Teratogenicidad extrema (Categoría X)'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Categoria X) ou mulheres em idade fértil sem contracepção rigorosa', 'Disfunção hepática', 'Imunodeficiência severa'], es: ['Embarazo (Categoría X) o mujeres en edad fértil sin anticoncepción rigurosa', 'Disfunción hepática', 'Inmunodeficiencia severa'] },
        relative: { pt: ['Uso de metotrexato (por hepatotoxicidade somada, embora seja feito sob controle reumatológico estrito)'], es: ['Uso de metotrexato (por hepatotoxicidad sumada, aunque se hace bajo control reumatológico estricto)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'MEIA-VIDA LONGA E TERATOGÊNICO: O metabólito ativo sofre circulação êntero-hepática maciça e permanece no sangue por ATÉ 2 ANOS após suspender a droga. Se a paciente desejar engravidar ou sofrer toxicidade grave, é obrigatório realizar o protocolo de LAVAGEM (Washout) administrando Colestiramina 8g 3x/dia por 11 dias.', es: 'VIDA MEDIA LARGA Y TERATOGÉNICO: El metabolito activo sufre circulación enterohepática masiva y permanece en sangre por HASTA 2 AÑOS tras suspender la droga. Si la paciente desea embarazarse o sufre toxicidad grave, es obligatorio realizar el protocolo de LAVADO (Washout) administrando Colestiramina 8g 3 veces/día por 11 días.' }
      }
    },

    /* ── AZATIOPRINA ────────────────────────────────────────────────────── */
    "azatioprina": {
      name: { pt: 'Azatioprina', es: 'Azatioprina' },
      category: 'reumato',
      class: { pt: 'Imunossupressor / Antimetabólito Purínico', es: 'Inmunosupresor / Antimetabolito Purínico' },
      indications: {
        pt: ['Profilaxia de rejeição de órgãos transplantados', 'Artrite Reumatoide grave', 'Lúpus Eritematoso Sistêmico', 'Doença Inflamatória Intestinal (DII)'],
        es: ['Profilaxis de rechazo de órganos trasplantados', 'Artritis Reumatoide grave', 'Lupus Eritematoso Sistémico', 'Enfermedad Inflamatoria Intestinal (EII)']
      },
      commercialNames: { br: ['Imuran'], ar: ['Imuran'] },
      presentation: { pt: ['Comprimidos 50 mg'], es: ['Comprimidos 50 mg'] },
      mechanism: {
        pt: 'Pró-fármaco, clivado rapidamente no sangue para o composto ativo 6-mercaptopurina (6-MP). Atua como um análogo/falso nucleotídeo purínico que se incorpora no DNA e RNA das células. Como os linfócitos (T e B) não possuem via de resgate de purinas, eles morrem por inibição da síntese de ácidos nucleicos.',
        es: 'Profármaco, escindido rápidamente en la sangre hacia el compuesto activo 6-mercaptopurina (6-MP). Actúa como un análogo/falso nucleótido purínico que se incorpora en el ADN y ARN de las células. Como los linfocitos (T y B) no poseen vía de rescate de purinas, mueren por inhibición de la síntesis de ácidos nucleicos.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Imunossupressão/Transplante: 1 a 3 mg/kg/dia. Reumatologia/DII: Iniciar com 1 mg/kg/dia, aumentando a cada 4-8 semanas (até 2,5 mg/kg/dia).',
            es: 'Inmunosupresión/Trasplante: 1 a 3 mg/kg/día. Reumatología/EII: Iniciar con 1 mg/kg/día, aumentando cada 4-8 semanas (hasta 2,5 mg/kg/día).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Transplante: 1 a 3 mg/kg/dia.',
            es: 'Trasplante: 1 a 3 mg/kg/día.'
          }
        }
      },
      administration: { pt: ['Tomar com alimentos para minimizar irritação GI.', 'Não partir nem mastigar os comprimidos.'], es: ['Tomar con alimentos para minimizar irritación GI.', 'No partir ni masticar los comprimidos.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr 10-50 mL/min: Reduzir dose para 75% da usual. ClCr < 10 mL/min: Reduzir para 50%.', es: 'ClCr 10-50 mL/min: Reducir dosis al 75% de la usual. ClCr < 10 mL/min: Reducir al 50%.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir a dose em insuficiência hepática e monitorar rotineiramente.', es: 'Reducir la dosis en insuficiencia hepática y monitorizar rutinariamente.' } },
      commonAdverseEffects: { pt: ['Leucopenia (dependente da dose)', 'Náuseas e Vômitos intensos no início', 'Infecções oportunistas', 'Alopecia'], es: ['Leucopenia (dependiente de la dosis)', 'Náuseas y Vómitos intensos al inicio', 'Infecciones oportunistas', 'Alopecia'] },
      dangerousAdverseEffects: { pt: ['Depressão grave da medula óssea (Pancitopenia/Sepse)', 'Aumento do risco de Linfomas (uso prolongado crônico)', 'Hepatotoxicidade'], es: ['Depresión grave de la médula ósea (Pancitopenia/Sepsis)', 'Aumento del riesgo de Linfomas (uso prolongado crónico)', 'Hepatotoxicidad'] },
      contraindications: {
        absolute: { pt: ['Uso associado com inibidores da xantina oxidase (Alopurinol, Febuxostate)', 'Gestação (se para artrite/DII - Categoria D)'], es: ['Uso asociado con inhibidores de la xantina oxidasa (Alopurinol, Febuxostat)', 'Embarazo (si para artritis/EII - Categoría D)'] },
        relative: { pt: ['Deficiência genética prévia de TPMT (Tiopurina Metiltransferase)'], es: ['Deficiencia genética previa de TPMT (Tiopurina Metiltransferasa)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MUTAÇÃO TPMT: Pacientes com deficiência genética da enzima TPMT não conseguem metabolizar a azatioprina e desenvolvem falência de medula óssea fulminante precoce. Recomenda-se teste genético ou clínico estrito de hemograma.', es: 'MUTACIÓN TPMT: Pacientes con deficiencia genética de la enzima TPMT no logran metabolizar la azatioprina y desarrollan falla de médula ósea fulminante precoz. Se recomienda prueba genética o clínica estricta de hemograma.' }
      }
    },

    /* ── CICLOSPORINA ───────────────────────────────────────────────────── */
    "ciclosporina": {
      name: { pt: 'Ciclosporina', es: 'Ciclosporina' },
      category: 'reumato',
      class: { pt: 'Imunossupressor / Inibidor da Calcineurina', es: 'Inmunosupresor / Inhibidor de la Calcineurina' },
      indications: {
        pt: ['Profilaxia de rejeição em transplantes de órgãos sólidos e medula óssea', 'Artrite Reumatoide grave', 'Psoríase grave refratária'],
        es: ['Profilaxis de rechazo en trasplantes de órganos sólidos y médula ósea', 'Artritis Reumatoide grave', 'Psoriasis grave refractaria']
      },
      commercialNames: { br: ['Sandimmun Neoral', 'Sigmasporin'], ar: ['Sandimmun Neoral'] },
      presentation: { pt: ['Cápsulas moles 25 mg, 50 mg, 100 mg', 'Solução oral 100 mg/mL', 'Ampolas IV 50 mg/mL'], es: ['Cápsulas blandas 25 mg, 50 mg, 100 mg', 'Solución oral 100 mg/mL', 'Ampollas IV 50 mg/mL'] },
      mechanism: {
        pt: 'Liga-se de forma irreversível à proteína citoplasmática ciclofilina. Este complexo inibe a enzima calcineurina celular, o que por sua vez impede a transcrição e produção da Interleucina-2 (IL-2). Sem a IL-2, não ocorre a ativação e proliferação dos linfócitos T. Paralisa a via de rejeição imunológica de órgãos.',
        es: 'Se une de forma irreversible a la proteína citoplasmática ciclofilina. Este complejo inhibe la enzima calcineurina celular, lo que a su vez impide la transcripción y producción de la Interleucina-2 (IL-2). Sin la IL-2, no ocurre la activación y proliferación de los linfocitos T. Paraliza la vía de rechazo inmunológico de órganos.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Transplante: Depende estritamente do nível sérico alvo (TDM). Geralmente inicia-se 10-15 mg/kg e reduz-se a manutenção para 2-6 mg/kg. Reumato/Psoríase: 2,5 a 5 mg/kg/dia divididos 12/12h.',
            es: 'Trasplante: Depende estrictamente del nivel sérico objetivo (TDM). Generalmente se inicia 10-15 mg/kg y se reduce el mantenimiento a 2-6 mg/kg. Reumato/Psoriasis: 2,5 a 5 mg/kg/día divididos cada 12h.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Transplante (pediátrico): Requerem doses mais altas por kg do que adultos (clearance mais rápido).',
            es: 'Trasplante (pediátrico): Requieren dosis más altas por kg que adultos (aclaramiento más rápido).'
          }
        }
      },
      administration: { pt: ['Tomar SEMPRE no mesmo horário e da mesma forma (com ou sem alimento) para não alterar o nível sanguíneo.', 'Solução oral não deve ser diluída em suco de toranja (grapefruit).'], es: ['Tomar SIEMPRE en el mismo horario y de la misma forma (con o sin alimento) para no alterar el nivel sanguíneo.', 'La solución oral no debe diluirse en jugo de pomelo (grapefruit).'] },
      renalAdjustment: { required: true, message: { pt: 'Causa nefrotoxicidade direta e forte (constrição aferente). Reduzir dose em 25-50% se creatinina subir mais de 30% da basal.', es: 'Causa nefrotoxicidad directa y fuerte (constricción aferente). Reducir dosis en 25-50% si la creatinina sube más del 30% del nivel basal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose em disfunção hepática, pois o fármaco é primariamente biotransformado no fígado (CYP3A4).', es: 'Reducir dosis en disfunción hepática, pues el fármaco es primariamente biotransformado en el hígado (CYP3A4).' } },
      commonAdverseEffects: { pt: ['Hipertensão arterial (frequente e severa)', 'Nefrotoxicidade (dose-dependente)', 'Hiperplasia gengival', 'Hirsutismo (crescimento de pelos)', 'Tremores finos'], es: ['Hipertensión arterial (frecuente y severa)', 'Nefrotoxicidad (dosis-dependiente)', 'Hiperplasia gingival', 'Hirsutismo (crecimiento de vello)', 'Temblores finos'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Renal Crônica (fibrose intersticial se uso longo)', 'Infecções sistêmicas severas', 'Linfoma', 'Convulsões / PRES (Síndrome de Encefalopatia Reversível Posterior)'], es: ['Insuficiencia Renal Crónica (fibrosis intersticial si uso largo)', 'Infecciones sistémicas severas', 'Linfoma', 'Convulsiones / PRES (Síndrome de Encefalopatía Reversible Posterior)'] },
      contraindications: {
        absolute: { pt: ['Hipertensão descontrolada grave', 'Falência renal não estabelecida (em pacientes não transplantados renais)', 'Malignidade ativa'], es: ['Hipertensión descontrolada grave', 'Falla renal no establecida (en pacientes no trasplantados renales)', 'Malignidad activa'] },
        relative: { pt: ['Infecção não controlada'], es: ['Infección no controlada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O monitoramento do nível sanguíneo (Therapeutic Drug Monitoring - TDM) é OBRIGATÓRIO. Fármaco possui janela terapêutica extremamente estreita e sofre interações fatais com indutores ou inibidores de CYP3A4.', es: 'La monitorización del nivel sanguíneo (Therapeutic Drug Monitoring - TDM) es OBLIGATORIA. El fármaco posee ventana terapéutica extremadamente estrecha y sufre interacciones fatales con inductores o inhibidores de CYP3A4.' }
      }
    },

    /* ── BENZBROMARONA ──────────────────────────────────────────────────── */
    "benzbromarona": {
      name: { pt: 'Benzbromarona', es: 'Benzbromarona' },
      category: 'reumato',
      class: { pt: 'Agente Uricosúrico', es: 'Agente Uricosúrico' },
      indications: {
        pt: ['Gota crônica (alternativa para pacientes hiperuricêmicos que não toleram alopurinol ou possuem clearance renal reduzido)'],
        es: ['Gota crónica (alternativa para pacientes hiperuricémicos que no toleran alopurinol o poseen aclaramiento renal reducido)']
      },
      commercialNames: { br: ['Benzbromarona (Manipulação/Importado)'], ar: ['Narcaricin'] },
      presentation: { pt: ['Comprimidos 50 mg', '100 mg'], es: ['Comprimidos 50 mg', '100 mg'] },
      mechanism: {
        pt: 'Potente uricosúrico. Inibe a reabsorção tubular proximal do ácido úrico (bloqueio do transportador URAT1), aumentando drasticamente sua excreção urinária. Diferente da probenecida, mantém eficácia mesmo em pacientes com insuficiência renal moderada.',
        es: 'Potente uricosúrico. Inhibe la reabsorción tubular proximal del ácido úrico (bloqueo del transportador URAT1), aumentando drásticamente su excreción urinaria. A diferencia de la probenecida, mantiene eficacia incluso en pacientes con insuficiencia renal moderada.'
      },
      dose: {
        adult: {
          standard: {
            pt: '50 a 100 mg VO 1x/dia, após a refeição.',
            es: '50 a 100 mg VO 1 vez/día, tras la comida.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não indicado.',
            es: 'No indicado.'
          }
        }
      },
      administration: { pt: ['Ingerir com bastante líquido (alcalinização da urina pode ser necessária para evitar cálculos de ácido úrico).'], es: ['Ingerir con abundante líquido (alcalinización de la orina puede ser necesaria para evitar cálculos de ácido úrico).'] },
      renalAdjustment: { required: false, message: { pt: 'Eficaz até ClCr > 20 mL/min (vantagem clínica sobre a probenecida). Evitar se ClCr < 20 mL/min.', es: 'Eficaz hasta ClCr > 20 mL/min (ventaja clínica sobre probenecida). Evitar si ClCr < 20 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado em insuficiência hepática (risco fulminante).', es: 'Contraindicado en insuficiencia hepática (riesgo fulminante).' } },
      commonAdverseEffects: { pt: ['Diarreia (comum)', 'Náusea'], es: ['Diarrea (común)', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['Hepatotoxicidade fulminante (necrose hepática letal)', 'Urolitíase (cálculos de ácido úrico)'], es: ['Hepatotoxicidad fulminante (necrosis hepática letal)', 'Urolitiasis (cálculos de ácido úrico)'] },
      contraindications: {
        absolute: { pt: ['Disfunção hepática ativa, infecção por vírus da hepatite', 'Nefrolitíase por ácido úrico', 'Crise aguda de gota'], es: ['Disfunción hepática activa, infección por virus de la hepatitis', 'Nefrolitiasis por ácido úrico', 'Crisis aguda de gota'] },
        relative: { pt: ['Uso de drogas hepatotóxicas'], es: ['Uso de drogas hepatotóxicas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O fármaco foi retirado do mercado em vários países devido a casos de HEPATITE FULMINANTE. O monitoramento rigoroso das enzimas hepáticas (TGO/TGP) é estritamente obrigatório.', es: 'El fármaco fue retirado del mercado en varios países debido a casos de HEPATITIS FULMINANTE. La monitorización rigurosa de las enzimas hepáticas (AST/ALT) es estrictamente obligatoria.' }
      }
    },

    /* ── PEGLOTICASE ────────────────────────────────────────────────────── */
    "pegloticase": {
      name: { pt: 'Pegloticase', es: 'Pegloticasa' },
      category: 'reumato',
      class: { pt: 'Enzima Uricase Recombinante Peguilada', es: 'Enzima Uricasa Recombinante Pegilada' },
      indications: {
        pt: ['Gota crônica grave, refratária e debilitante (tofos massivos) que não responde ou não tolera outras terapias redutoras de urato.'],
        es: ['Gota crónica grave, refractaria y debilitante (tofos masivos) que no responde o no tolera otras terapias reductoras de urato.']
      },
      commercialNames: { br: ['Krystexxa'], ar: ['Krystexxa'] },
      presentation: { pt: ['Frasco-ampola IV 8 mg/mL'], es: ['Vial IV 8 mg/mL'] },
      mechanism: {
        pt: 'A pegloticase é uma uricase peguilada. Humanos não possuem a enzima uricase (que oxida ácido úrico em alantoína, um composto altamente solúvel em água). A droga fornece essa enzima exógena, "derretendo" literalmente os depósitos de tofos em meses e reduzindo a uricemia a níveis quase nulos.',
        es: 'La pegloticasa es una uricasa pegilada. Los humanos no poseen la enzima uricasa (que oxida el ácido úrico a alantoína, un compuesto altamente soluble en agua). La droga proporciona esta enzima exógena, "derritiendo" literalmente los depósitos de tofos en meses y reduciendo la uricemia a niveles casi nulos.'
      },
      dose: {
        adult: {
          standard: {
            pt: '8 mg IV a cada 2 semanas.',
            es: '8 mg IV cada 2 semanas.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Não indicado.',
            es: 'No indicado.'
          }
        }
      },
      administration: { pt: ['Infusão IV lenta (mínimo de 120 minutos).', 'PRÉ-MEDICAÇÃO OBRIGATÓRIA: Anti-histamínicos e Corticoides IV para evitar choque anafilático.'], es: ['Infusión IV lenta (mínimo de 120 minutos).', 'PREMEDICACIÓN OBLIGATORIA: Antihistamínicos y Corticoides IV para evitar choque anafiláctico.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (a depuração não é renal).', es: 'Sin necesidad de ajuste (la depuración no es renal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Reação de infusão', 'Exacerbação inicial maciça de gota', 'Náusea'], es: ['Reacción de infusión', 'Exacerbación inicial masiva de gota', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia severa (risco alto, desenvolve anticorpos anti-fármaco)', 'Hemólise grave e metahemoglobinemia'], es: ['Anafilaxia severa (riesgo alto, desarrolla anticuerpos antifármaco)', 'Hemólisis grave y metahemoglobinemia'] },
      contraindications: {
        absolute: { pt: ['Deficiência de G6PD (Risco de hemólise fatal)'], es: ['Deficiencia de G6PD (Riesgo de hemólisis fatal)'] },
        relative: { pt: ['Insuficiência cardíaca descompensada (pela sobrecarga de fluidos na infusão)'], es: ['Insuficiencia cardíaca descompensada (por la sobrecarga de fluidos en la infusión)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Boxed Warning para Anafilaxia. Testar o paciente para deficiência de G6PD antes de iniciar. Suspender outros medicamentos para gota (alopurinol) durante o uso, pois eles mascaram a perda de eficácia da pegloticase (sinal de alerta para anafilaxia).', es: 'Boxed Warning para Anafilaxia. Evaluar al paciente por deficiencia de G6PD antes de iniciar. Suspender otros medicamentos para la gota (alopurinol) durante el uso, ya que enmascaran la pérdida de eficacia de pegloticasa (signo de alerta para anafilaxia).' }
      }
    },

    /* ── METOTREXATO (MTX) — variante Reumatologia (chave já usada como nó de
       interações em interacoes.js; schema clínico próprio genuinamente novo) ── */
    "metotrexato": {
      name: { pt: 'Metotrexato (MTX)', es: 'Metotrexato (MTX)' },
      category: 'reumato',
      class: { pt: 'DMARD Não Biológico / Antagonista do Ácido Fólico', es: 'FAME No Biológico / Antagonista del Ácido Fólico' },
      indications: {
        pt: ['Artrite Reumatoide (Fármaco âncora/1ª linha)', 'Psoríase severa', 'Neoplasias (doses altas)'],
        es: ['Artritis Reumatoide (Fármaco ancla/1ª línea)', 'Psoriasis severa', 'Neoplasias (dosis altas)']
      },
      commercialNames: { br: ['Miotrex', 'Tecnotrex'], ar: ['Trexall', 'Metotrexato'] },
      presentation: { pt: ['Comprimidos 2,5 mg', 'Solução injetável SC/IM/IV 25 mg/mL, 50 mg/2mL'], es: ['Comprimidos 2,5 mg', 'Solución inyectable SC/IM/IV 25 mg/mL, 50 mg/2mL'] },
      mechanism: {
        pt: 'Inibe de forma competitiva e irreversível a di-hidrofolato redutase (DHFR), impedindo a conversão do folato em sua forma ativa. Isso bloqueia a síntese de purinas e DNA, induzindo apoptose de células do sistema imune de rápida proliferação (linfócitos) e diminuindo citocinas inflamatórias.',
        es: 'Inhibe de forma competitiva e irreversible la dihidrofolato reductasa (DHFR), impidiendo la conversión del folato a su forma activa. Esto bloquea la síntesis de purinas y ADN, induciendo apoptosis de células del sistema inmune de rápida proliferación (linfocitos) y disminuyendo citoquinas inflamatorias.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Reumatologia: 7,5 a 25 mg, 1 VEZ POR SEMANA. A via subcutânea é preferida em doses > 15mg. Suplementar Ácido Fólico (5mg) no dia seguinte à dose.',
            es: 'Reumatología: 7,5 a 25 mg, 1 VEZ POR SEMANA. La vía subcutánea se prefiere en dosis > 15mg. Suplementar Ácido Fólico (5mg) al día siguiente de la dosis.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Artrite Idiopática Juvenil: 10 a 15 mg/m² por semana.',
            es: 'Artritis Idiopática Juvenil: 10 a 15 mg/m² por semana.'
          }
        }
      },
      administration: { pt: ['ERRO MÉDICO FATAL COMUM: O paciente NUNCA deve tomar metotrexato reumatológico todos os dias. A prescrição é SEMANAL.', 'O Ácido fólico não deve ser tomado no mesmo dia do MTX.'], es: ['ERROR MÉDICO FATAL COMÚN: El paciente NUNCA debe tomar metotrexato reumatológico todos los días. La prescripción es SEMANAL.', 'El Ácido fólico no debe tomarse el mismo día del MTX.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose em 50% se ClCr 30-50 mL/min. CONTRAINDICADO se ClCr < 30 mL/min (risco de mielossupressão fatal).', es: 'Reducir dosis en 50% si ClCr 30-50 mL/min. CONTRAINDICADO si ClCr < 30 mL/min (riesgo de mielosupresión fatal).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em hepatopatia crônica, alcoolismo ou elevação de enzimas > 2-3x o normal.', es: 'Evitar en hepatopatía crónica, alcoholismo o elevación de enzimas > 2-3x lo normal.' } },
      commonAdverseEffects: { pt: ['Mucosite (aftas) / Estomatite', 'Náuseas / Anorexia', 'Fadiga', 'Queda de cabelo leve'], es: ['Mucositis (aftas) / Estomatitis', 'Náuseas / Anorexia', 'Fatiga', 'Caída de cabello leve'] },
      dangerousAdverseEffects: { pt: ['Pancitopenia (mielossupressão severa)', 'Hepatotoxicidade / Cirrose insidiosa', 'Pneumonite intersticial induzida por MTX', 'Teratogenicidade fetal'], es: ['Pancitopenia (mielosupresión severa)', 'Hepatotoxicidad / Cirrosis insidiosa', 'Neumonitis intersticial inducida por MTX', 'Teratogenicidad fetal'] },
      contraindications: {
        absolute: { pt: ['Gestação (Categoria X) e Lactação', 'Imunodeficiência severa / Infecção ativa crônica', 'Hepatopatia crônica / Alcoolismo', 'Insuficiência renal grave'], es: ['Embarazo (Categoría X) y Lactancia', 'Inmunodeficiencia severa / Infección activa crónica', 'Hepatopatía crónica / Alcoholismo', 'Insuficiencia renal grave'] },
        relative: { pt: ['Derrame pleural ou ascite (o fármaco acumula em terceiros espaços)'], es: ['Derrame pleural o ascitis (el fármaco se acumula en terceros espacios)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ALERTA MÁXIMO: Dose é SEMANAL. Resgatar overdose acidental ou toxicidade severa com Ácido Folínico (Leucovorina). Monitorar hemograma, TGO/TGP e ureia/creatinina mensalmente nos primeiros meses.', es: 'ALERTA MÁXIMA: Dosis es SEMANAL. Rescatar sobredosis accidental o toxicidad severa con Ácido Folínico (Leucovorina). Monitorizar hemograma, AST/ALT y urea/creatinina mensualmente en los primeros meses.' }
      }
    },

    /* ── HIDROXICLOROQUINA ──────────────────────────────────────────────── */
    "hidroxicloroquina": {
      name: { pt: 'Hidroxicloroquina', es: 'Hidroxicloroquina' },
      category: 'reumato',
      class: { pt: 'DMARD Não Biológico / Antimalárico', es: 'FAME No Biológico / Antimalárico' },
      indications: {
        pt: ['Lúpus Eritematoso Sistêmico (LES) - pilar do tratamento', 'Artrite Reumatoide (em combinação com MTX)', 'Malária'],
        es: ['Lupus Eritematoso Sistémico (LES) - pilar del tratamiento', 'Artritis Reumatoide (en combinación con MTX)', 'Malaria']
      },
      commercialNames: { br: ['Reuquinol', 'Plaquinol'], ar: ['Evoquin', 'Plaquinol'] },
      presentation: { pt: ['Comprimidos 400 mg'], es: ['Comprimidos 400 mg'] },
      mechanism: {
        pt: 'Acumula-se nos lisossomos das células apresentadoras de antígenos (macrófagos e células dendríticas), elevando o pH lisossomal. Isso inibe o processamento de autoantígenos e a ativação de receptores Toll-like (TLR 7 e 9), reduzindo profundamente a ativação do sistema imune e preservando órgãos-alvo no Lúpus.',
        es: 'Se acumula en los lisosomas de las células presentadoras de antígenos (macrófagos y células dendríticas), elevando el pH lisosomal. Esto inhibe el procesamiento de autoantígenos y la activación de receptores Toll-like (TLR 7 y 9), reduciendo profundamente la activación del sistema inmune y preservando órganos diana en el Lupus.'
      },
      dose: {
        adult: {
          standard: {
            pt: '200 a 400 mg VO 1x/dia. Dose de segurança máxima: 5 mg/kg do PESO REAL/dia para evitar toxicidade ocular.',
            es: '200 a 400 mg VO 1 vez/día. Dosis de seguridad máxima: 5 mg/kg del PESO REAL/día para evitar toxicidad ocular.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Reumatologia: 3 a 5 mg/kg/dia (máx 400mg).',
            es: 'Reumatología: 3 a 5 mg/kg/día (máx 400mg).'
          }
        }
      },
      administration: { pt: ['Tomar com as refeições ou leite para minimizar irritação gástrica.', 'Demora 3 a 6 meses para atingir efeito clínico pleno (fármaco de depósito).'], es: ['Tomar con las comidas o leche para minimizar irritación gástrica.', 'Demora 3 a 6 meses para alcanzar efecto clínico pleno (fármaco de depósito).'] },
      renalAdjustment: { required: false, message: { pt: 'Evitar doses altas em disfunção renal severa. O limite de segurança ocular cai em DRC.', es: 'Evitar dosis altas en disfunción renal severa. El límite de seguridad ocular cae en ERC.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, mas usar com cuidado em hepatopatias.', es: 'Sin necesidad de ajuste estricto, pero usar con cuidado en hepatopatías.' } },
      commonAdverseEffects: { pt: ['Náusea / Dor abdominal', 'Pigmentação escura na pele/unhas', 'Insônia e pesadelos'], es: ['Náusea / Dolor abdominal', 'Pigmentación oscura en piel/uñas', 'Insomnio y pesadillas'] },
      dangerousAdverseEffects: { pt: ['Retinopatia irreversível (Maculopatia em "Olho de Boi")', 'Prolongamento do intervalo QT e Torsades de Pointes', 'Miopatia / Cardiomiopatia tóxica (uso crônico longo)'], es: ['Retinopatía irreversible (Maculopatía en "Ojo de Buey")', 'Prolongación del intervalo QT y Torsades de Pointes', 'Miopatía / Cardiomiopatía tóxica (uso crónico largo)'] },
      contraindications: {
        absolute: { pt: ['Alterações retinianas prévias graves', 'Hipersensibilidade aos compostos de 4-aminoquinolinas'], es: ['Alteraciones retinianas previas graves', 'Hipersensibilidad a compuestos de 4-aminoquinolinas'] },
        relative: { pt: ['Uso de outras drogas que prolongam QT', 'Deficiência de G6PD (Risco teórico de hemólise)'], es: ['Uso de otras drogas que prolongan QT', 'Deficiencia de G6PD (Riesgo teórico de hemólisis)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'EXAME OFTALMOLÓGICO OBRIGATÓRIO (Fundo de olho + OCT) antes de iniciar o tratamento e anualmente após 5 anos (ou antes, se fatores de risco). A cegueira é irreversível.', es: 'EXAMEN OFTALMOLÓGICO OBLIGATORIO (Fondo de ojo + OCT) antes de iniciar el tratamiento y anualmente tras 5 años (o antes, si factores de riesgo). La ceguera es irreversible.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 8 (sulfassalazina, leflunomida, azatioprina, ciclosporina, benzbromarona, pegloticase, metotrexato, hidroxicloroquina — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 9 (BUILD 271, 2026-07-06) — Reumatologia/Transplante: Imunossupressores
     Avançados + Imunobiológico Anti-TNF. Lote sem instrução textual, processado
     sob o SOP de Autonomia Total.

     ✅ TACROLIMO, MICOFENOLATO DE MOFETILA, CICLOFOSFAMIDA, ADALIMUMABE:
     auditados via Grep em TODOS os bancos do projeto (analgesicos.js, cardio.js,
     psicofarmacos.js, antimicrobianos.js, prescricoes.js, reumatologia.js) —
     nenhum possuía schema clínico próprio. "Tacrolimo" e "ciclosporina" (Grupo 8)
     já eram citados como nós/alvos em interacoes.js e como referências textuais
     em cardio.js/antimicrobianos.js (sem schema de dose) — mesmo precedente já
     aplicado a outros fármacos (ex.: ciclosporina, teofilina). Confirmados
     GENUINAMENTE NOVOS como schema clínico. Doses já vieram no formato aninhado
     (dose.adult/dose.pediatric, sem chave .standard) na submissão original —
     preservada a estrutura conforme enviada.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── TACROLIMO ──────────────────────────────────────────────────────── */
    "tacrolimo": {
      name: { pt: 'Tacrolimo', es: 'Tacrolimus' },
      category: 'reumato',
      class: { pt: 'Imunossupressor / Inibidor da Calcineurina (Macrolídeo)', es: 'Inmunosupresor / Inhibidor de la Calcineurina (Macrólido)' },
      indications: {
        pt: ['Profilaxia de rejeição em transplantes de órgãos sólidos (fígado, rim, coração)', 'Dermatite atópica severa (uso tópico)'],
        es: ['Profilaxis de rechazo en trasplantes de órganos sólidos (hígado, riñón, corazón)', 'Dermatitis atópica severa (uso tópico)']
      },
      commercialNames: { br: ['Prograf', 'Tarfic (Pomada)'], ar: ['Prograf'] },
      presentation: { pt: ['Cápsulas 0,5 mg, 1 mg, 5 mg', 'Pomada 0,03% e 0,1%', 'Ampolas IV 5 mg/mL'], es: ['Cápsulas 0,5 mg, 1 mg, 5 mg', 'Pomada 0,03% y 0,1%', 'Ampollas IV 5 mg/mL'] },
      mechanism: {
        pt: 'Macrolídeo imunossupressor (até 100x mais potente que a ciclosporina). Liga-se à proteína intracelular FKBP-12, formando um complexo que inibe a calcineurina. Isso bloqueia a transcrição de citocinas (especialmente IL-2), impedindo a ativação dos linfócitos T.',
        es: 'Macrólido inmunosupresor (hasta 100x más potente que la ciclosporina). Se une a la proteína intracelular FKBP-12, formando un complejo que inhibe la calcineurina. Esto bloquea la transcripción de citoquinas (especialmente IL-2), impidiendo la activación de los linfocitos T.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Oral: Iniciar com 0,1 a 0,2 mg/kg/dia, divididos em 2 tomadas. Ajuste de dose ESTRITAMENTE guiado pelo monitoramento do nível sérico (TDM).',
            es: 'Oral: Iniciar con 0,1 a 0,2 mg/kg/día, divididos en 2 tomas. Ajuste de dosis ESTRICTAMENTE guiado por la monitorización del nivel sérico (TDM).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Oral (Transplante): 0,15 a 0,3 mg/kg/dia. (Crianças metabolizam mais rápido e exigem doses maiores por kg).',
            es: 'Oral (Trasplante): 0,15 a 0,3 mg/kg/día. (Los niños metabolizan más rápido y exigen dosis mayores por kg).'
          }
        }
      },
      administration: { pt: ['Tomar com o estômago vazio (1h antes ou 2-3h após refeição) para absorção máxima.', 'A via IV só deve ser usada se VO impossível (alto risco de anafilaxia).'], es: ['Tomar con el estómago vacío (1h antes o 2-3h tras comida) para absorción máxima.', 'La vía IV solo debe usarse si VO es imposible (alto riesgo de anafilaxia).'] },
      renalAdjustment: { required: true, message: { pt: 'Causa nefrotoxicidade aferente (como a ciclosporina). Suspender ou reduzir se creatinina aumentar drasticamente.', es: 'Causa nefrotoxicidad aferente (como la ciclosporina). Suspender o reducir si la creatinina aumenta drásticamente.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático intenso (CYP3A4). Reduzir dose em disfunção grave.', es: 'Metabolismo hepático intenso (CYP3A4). Reducir dosis en disfunción grave.' } },
      commonAdverseEffects: { pt: ['Tremores (neurotoxicidade leve)', 'Hipertensão arterial', 'Diarreia', 'Insônia'], es: ['Temblores (neurotoxicidad leve)', 'Hipertensión arterial', 'Diarrea', 'Insomnio'] },
      dangerousAdverseEffects: { pt: ['Nefrotoxicidade severa', 'Diabetes Mellitus Pós-Transplante (muito maior risco que ciclosporina)', 'Neurotoxicidade severa (convulsões, Síndrome PRES)', 'Linfoma/Infecções severas'], es: ['Nefrotoxicidad severa', 'Diabetes Mellitus Posc-Trasplante (mucho mayor riesgo que ciclosporina)', 'Neurotoxicidad severa (convulsiones, Síndrome PRES)', 'Linfoma/Infecciones severas'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave', 'Infecção sistêmica descontrolada'], es: ['Hipersensibilidad grave', 'Infección sistémica descontrolada'] },
        relative: { pt: ['Insuficiência renal não relacionada ao transplante', 'Neuropatia avançada'], es: ['Insuficiencia renal no relacionada al trasplante', 'Neuropatía avanzada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Monitoramento do nível sanguíneo MÍNIMO (vale) é obrigatório. Extremo risco de diabetes induzida por fármaco (afeta células beta do pâncreas diretamente).', es: 'Monitorización del nivel sanguíneo MÍNIMO (valle) es obligatorio. Extremo riesgo de diabetes inducida por fármaco (afecta células beta del páncreas directamente).' }
      }
    },

/* ── MICOFENOLATO DE MOFETILA ───────────────────────────────────────── */
    "micofenolato_mofetila": {
      name: { pt: 'Micofenolato de Mofetila', es: 'Micofenolato de Mofetilo' },
      category: 'reumato',
      class: { pt: 'Imunossupressor / Inibidor da Síntese de Purinas', es: 'Inmunosupresor / Inhibidor de la Síntesis de Purinas' },
      indications: {
        pt: ['Profilaxia de rejeição em transplantes', 'Lúpus Eritematoso Sistêmico (Nefrite Lúpica - padrão ouro em indução/manutenção)', 'Doenças autoimunes refratárias'],
        es: ['Profilaxis de rechazo en trasplantes', 'Lupus Eritematoso Sistémico (Nefritis Lúpica - estándar de oro en inducción/mantenimiento)', 'Enfermedades autoinmunes refractarias']
      },
      commercialNames: { br: ['CellCept'], ar: ['CellCept', 'Micofenolato'] },
      presentation: { pt: ['Comprimidos 500 mg', 'Cápsulas 250 mg', 'Suspensão 200 mg/mL', 'Frasco-ampola IV 500 mg'], es: ['Comprimidos 500 mg', 'Cápsulas 250 mg', 'Suspensión 200 mg/mL', 'Vial IV 500 mg'] },
      mechanism: {
        pt: 'Pró-fármaco convertido em ácido micofenólico. Inibe a enzima Inosina Monofosfato Desidrogenase (IMPDH). Como os linfócitos (T e B) dependem exclusivamente da síntese "de novo" de purinas (não possuem via de resgate), o fármaco paralisa sua proliferação de forma altamente seletiva, poupando outras células do corpo.',
        es: 'Profármaco convertido en ácido micofenólico. Inhibe la enzima Inosina Monofosfato Deshidrogenasa (IMPDH). Como los linfocitos (T y B) dependen exclusivamente de la síntesis "de novo" de purinas (no poseen vía de rescate), el fármaco paraliza su proliferación de forma altamente selectiva, preservando otras células del cuerpo.'
      },
      dose: {
        adult: {
          standard: {
            pt: '1000 mg a 1500 mg VO a cada 12 horas (Total 2 a 3 g/dia).',
            es: '1000 mg a 1500 mg VO cada 12 horas (Total 2 a 3 g/día).'
          }
        },
        pediatric: {
          standard: {
            pt: 'Crianças/Transplante: 600 mg/m² VO a cada 12 horas (máx 2 g/dia).',
            es: 'Niños/Trasplante: 600 mg/m² VO cada 12 horas (máx 2 g/día).'
          }
        }
      },
      administration: { pt: ['Tomar de estômago vazio.', 'Não abrir ou amassar as cápsulas/comprimidos (risco teratogênico ao inalar o pó).'], es: ['Tomar con el estómago vacío.', 'No abrir ni aplastar las cápsulas/comprimidos (riesgo teratogénico al inhalar el polvo).'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar doses maiores que 2g/dia se ClCr < 25 mL/min (acumula metabólito inativo MPA-G).', es: 'Evitar dosis mayores a 2g/día si ClCr < 25 mL/min (acumula metabolito inactivo MPA-G).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Geralmente não necessita de ajuste estrito, pois sofre glucuronidação primária.', es: 'Generalmente no necesita de ajuste estricto, pues sufre glucuronidación primaria.' } },
      commonAdverseEffects: { pt: ['Diarreia severa (muito comum, afeta mucosa intestinal crônica)', 'Náuseas e Vômitos', 'Leucopenia transitória'], es: ['Diarrea severa (muy común, afecta mucosa intestinal crónica)', 'Náuseas y Vómitos', 'Leucopenia transitoria'] },
      dangerousAdverseEffects: { pt: ['Infecções oportunistas (CMV, JC vírus - LMP)', 'Sangramento gastrointestinal', 'Linfoma', 'Teratogenicidade grave'], es: ['Infecciones oportunistas (CMV, virus JC - LMP)', 'Sangrado gastrointestinal', 'Linfoma', 'Teratogenicidad grave'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Categoria D) - causa malformações faciais e perdas fetais', 'Mulheres em idade fértil sem 2 métodos contraceptivos'], es: ['Embarazo (Categoría D) - causa malformaciones faciales y pérdidas fetales', 'Mujeres en edad fértil sin 2 métodos anticonceptivos'] },
        relative: { pt: ['Úlcera péptica ativa', 'Deficiência de HGPRT (Raro)'], es: ['Úlcera péptica activa', 'Deficiencia de HGPRT (Raro)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Boxed Warning para toxicidade fetal e infecções. O uso de micofenolato frequentemente causa distúrbios gastrintestinais intoleráveis (diarreia volumosa); pode-se trocar pela formulação com revestimento entérico (Micofenolato Sódico) para melhorar tolerância.', es: 'Boxed Warning para toxicidad fetal e infecciones. El uso de micofenolato frecuentemente causa trastornos gastrointestinales intolerables (diarrea voluminosa); se puede cambiar por la formulación con recubrimiento entérico (Micofenolato Sódico) para mejorar tolerancia.' }
      }
    },

/* ── CICLOFOSFAMIDA ─────────────────────────────────────────────────── */
    "ciclofosfamida": {
      name: { pt: 'Ciclofosfamida', es: 'Ciclofosfamida' },
      category: 'reumato',
      class: { pt: 'Agente Alquilante / Antineoplásico e Imunossupressor', es: 'Agente Alquilante / Antineoplásico e Inmunosupresor' },
      indications: {
        pt: ['Lúpus Eritematoso Sistêmico grave (Nefrite lúpica, neurolúpus)', 'Vasculites sistêmicas (Granulomatose com poliangiite)', 'Neoplasias (mama, leucemias)'],
        es: ['Lupus Eritematoso Sistémico grave (Nefritis lúpica, neurolupus)', 'Vasculitis sistémicas (Granulomatosis con poliangeítis)', 'Neoplasias (mama, leucemias)']
      },
      commercialNames: { br: ['Genuxal'], ar: ['Endoxan'] },
      presentation: { pt: ['Drágeas 50 mg', 'Frasco-ampola liofilizado 200 mg, 1 g'], es: ['Grageas 50 mg', 'Vial liofilizado 200 mg, 1 g'] },
      mechanism: {
        pt: 'Pró-fármaco ativado no fígado (CYP450). Seu metabólito ativo anexa grupos alquil aos pares de bases de DNA (cross-linking de guanina), impedindo a separação e transcrição das fitas de DNA. Causa morte celular drástica de células de proliferação rápida (linfócitos).',
        es: 'Profármaco activado en el hígado (CYP450). Su metabolito activo anexa grupos alquilo a los pares de bases de ADN (cross-linking de guanina), impidiendo la separación y transcripción de las cadenas de ADN. Causa muerte celular drástica de células de proliferación rápida (linfocitos).'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Reumato (Pulsoterapia IV): 500 a 1000 mg/m² de superfície corporal a cada 3-4 semanas. Dose Oral: 1 a 2 mg/kg/dia.',
            es: 'Reumato (Pulsoterapia IV): 500 a 1000 mg/m² de superficie corporal cada 3-4 semanas. Dosis Oral: 1 a 2 mg/kg/día.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Reumatologia: Pulsos de 500 mg/m² a cada 3 a 4 semanas.',
            es: 'Reumatología: Pulsos de 500 mg/m² cada 3 a 4 semanas.'
          }
        }
      },
      administration: { pt: ['Requer hiperhidratação antes e depois do pulso (para evitar cistite hemorrágica).', 'Pode exigir a prescrição do antídoto MESNA concomitante no pulso.'], es: ['Requiere hiperhidratación antes y después del pulso (para evitar cistitis hemorrágica).', 'Puede exigir la prescripción del antídoto MESNA concomitante en el pulso.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 10 mL/min, reduzir a dose em 25-50%.', es: 'Si ClCr < 10 mL/min, reducir la dosis en 25-50%.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Como é pró-fármaco ativado no fígado, a disfunção grave pode reduzir sua eficácia e aumentar a toxicidade (diminuir dose).', es: 'Como es profármaco activado en el hígado, la disfunción grave puede reducir su eficacia y aumentar la toxicidad (disminuir dosis).' } },
      commonAdverseEffects: { pt: ['Alopecia total (queda de cabelo reversível)', 'Náusea e Vômito severos pós-pulso', 'Infertilidade amenorreia/azoospermia'], es: ['Alopecia total (caída de cabello reversible)', 'Náusea y Vómito severos pos-pulso', 'Infertilidad amenorrea/azoospermia'] },
      dangerousAdverseEffects: { pt: ['Cistite Hemorrágica (causada pelo metabólito acroleína)', 'Supressão medular letal', 'Câncer secundário (especialmente carcinoma de bexiga tardio)', 'Cardiotoxicidade em altas doses'], es: ['Cistitis Hemorrágica (causada por el metabolito acroleína)', 'Supresión medular letal', 'Cáncer secundario (especialmente carcinoma de vejiga tardío)', 'Cardiotoxicidad en altas dosis'] },
      contraindications: {
        absolute: { pt: ['Gravidez (Teratogênico)', 'Infecção grave ativa', 'Mielossupressão basal severa', 'Cistite hemorrágica prévia severa'], es: ['Embarazo (Teratogénico)', 'Infección grave activa', 'Mielosupresión basal severa', 'Cistitis hemorrágica previa severa'] },
        relative: { pt: ['Desejo reprodutivo (congelar óvulos/espermatozoides antes do uso)'], es: ['Deseo reproductivo (congelar óvulos/espermatozoides antes del uso)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Risco de toxicidade gonadal irreversível (preservação da fertilidade deve ser discutida). O uso do MESNA (protetor vesical) e hidratação vigorosa previne o acúmulo da toxina acroleína na bexiga.', es: 'Riesgo de toxicidad gonadal irreversible (preservación de la fertilidad debe ser discutida). El uso de MESNA (protector vesical) e hidratación vigorosa previene la acumulación de la toxina acroleína en la vejiga.' }
      }
    },

/* ── ADALIMUMAB ─────────────────────────────────────────────────────── */
    "adalimumabe": {
      name: { pt: 'Adalimumabe', es: 'Adalimumab' },
      category: 'reumato',
      class: { pt: 'Imunobiológico / Anticorpo Monoclonal Anti-TNF-alfa', es: 'Inmunobiológico / Anticuerpo Monoclonal Anti-TNF-alfa' },
      indications: {
        pt: ['Artrite Reumatoide', 'Espondilite Anquilosante', 'Doença de Crohn', 'Psoríase em placas'],
        es: ['Artritis Reumatoide', 'Espondilitis Anquilosante', 'Enfermedad de Crohn', 'Psoriasis en placas']
      },
      commercialNames: { br: ['Humira', 'Idacio', 'Amgevita'], ar: ['Humira'] },
      presentation: { pt: ['Seringa preenchida / Caneta SC 40 mg/0,4 mL ou 40 mg/0,8 mL'], es: ['Jeringa prellenada / Pluma SC 40 mg/0,4 mL o 40 mg/0,8 mL'] },
      mechanism: {
        pt: 'Anticorpo monoclonal 100% humano (IgG1). Liga-se especificamente ao Fator de Necrose Tumoral alfa (TNF-alfa), tanto solúvel quanto ligado à membrana celular. Isso impede que o TNF se ligue a seus receptores celulares p55 e p75, neutralizando uma das citocinas pró-inflamatórias mais devastadoras da reumatologia.',
        es: 'Anticuerpo monoclonal 100% humano (IgG1). Se une específicamente al Factor de Necrosis Tumoral alfa (TNF-alfa), tanto soluble como unido a la membrana celular. Esto impide que el TNF se una a sus receptores celulares p55 y p75, neutralizando una de las citoquinas proinflamatorias más devastadoras de la reumatología.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Artrite Reumatoide/Espondilite: 40 mg SC a cada 2 semanas (14 em 14 dias). Doença de Crohn: Indução de 160 mg (dia 1), 80 mg (dia 15) e manutenção 40 mg a cada 14 dias.',
            es: 'Artritis Reumatoide/Espondilitis: 40 mg SC cada 2 semanas (14 en 14 días). Enfermedad de Crohn: Inducción de 160 mg (día 1), 80 mg (día 15) y mantenimiento 40 mg cada 14 días.'
          }
        },
        pediatric: {
          standard: {
            pt: 'AIJ (Artrite Idiopática Juvenil): > 30 kg: 40 mg SC a cada 2 semanas. < 30 kg: 20 mg SC a cada 2 semanas.',
            es: 'AIJ (Artritis Idiopática Juvenil): > 30 kg: 40 mg SC cada 2 semanas. < 30 kg: 20 mg SC cada 2 semanas.'
          }
        }
      },
      administration: { pt: ['Injeção subcutânea profunda (coxa, abdome). Rodiziar local.', 'Armazenar em geladeira (2 a 8°C). Não congelar.'], es: ['Inyección subcutánea profunda (muslo, abdomen). Rotar lugar.', 'Almacenar en refrigerador (2 a 8°C). No congelar.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (anticorpos são degradados via sistema reticuloendotelial, não renal).', es: 'Sin necesidad de ajuste (los anticuerpos son degradados vía sistema reticuloendotelial, no renal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste formal.', es: 'Sin necesidad de ajuste formal.' } },
      commonAdverseEffects: { pt: ['Reação dolorosa e eritema no local da injeção', 'Infecções de vias aéreas superiores', 'Cefaleia', 'Rash'], es: ['Reacción dolorosa y eritema en el lugar de la inyección', 'Infecciones de vías respiratorias superiores', 'Cefalea', 'Rash'] },
      dangerousAdverseEffects: { pt: ['Reativação de Tuberculose latente (fatal)', 'Doenças desmielinizantes do SNC (esclerose múltipla-símile)', 'Insuficiência cardíaca induzida ou exacerbada', 'Linfoma'], es: ['Reactivación de Tuberculosis latente (fatal)', 'Enfermedades desmielinizantes del SNC (esclerosis múltiple-símil)', 'Insuficiencia cardíaca inducida o exacerbada', 'Linfoma'] },
      contraindications: {
        absolute: { pt: ['Tuberculose ativa ou infecções sistêmicas graves (sepse)', 'Insuficiência cardíaca grave (NYHA III-IV)'], es: ['Tuberculosis activa o infecciones sistémicas graves (sepsis)', 'Insuficiencia cardíaca grave (NYHA III-IV)'] },
        relative: { pt: ['Histórico de esclerose múltipla / neurite óptica', 'Uso concomitante de vacinas de vírus vivo'], es: ['Historial de esclerosis múltiple / neuritis óptica', 'Uso concomitante de vacunas de virus vivo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'PPD OBRIGATÓRIO: É mandatória a triagem para tuberculose latente (PPD/IGRA) e Hepatite B e C antes da primeira dose. O anti-TNF "destrói" o granuloma da TB, gerando doença miliar aguda.', es: 'PPD OBLIGATORIO: Es obligatoria la detección de tuberculosis latente (PPD/IGRA) y Hepatitis B y C antes de la primera dosis. El anti-TNF "destruye" el granuloma de la TB, generando enfermedad miliar aguda.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 9 (tacrolimo, micofenolato_mofetila, ciclofosfamida, adalimumabe — todos ativos) */

  /* ══════════════════════════════════════════════════════════════════════════════
     GRUPO 10 (BUILD 272, 2026-07-06) — Reumatologia: Imunobiológico Anti-TNF
     (Proteína de Fusão). Lote sem instrução textual, processado sob o SOP de
     Autonomia Total.

     ✅ ETANERCEPTE: auditado via Grep em TODOS os bancos do projeto
     (analgesicos.js, cardio.js, psicofarmacos.js, antimicrobianos.js,
     prescricoes.js, reumatologia.js) e em INTERACOES_DB — nenhuma ocorrência
     prévia como schema OU como nó/alvo de interação. Confirmado
     GENUINAMENTE NOVO.
  ══════════════════════════════════════════════════════════════════════════════ */
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── ETANERCEPTE ────────────────────────────────────────────────────── */
    "etanercepte": {
      name: { pt: 'Etanercepte', es: 'Etanercept' },
      category: 'reumato',
      class: { pt: 'Imunobiológico / Proteína de Fusão Anti-TNF', es: 'Inmunobiológico / Proteína de Fusión Anti-TNF' },
      indications: {
        pt: ['Artrite Reumatoide (frequentemente associado ao MTX)', 'Artrite Psoriásica', 'Espondilite Anquilosante', 'Artrite Idiopática Juvenil'],
        es: ['Artritis Reumatoide (frecuentemente asociado al MTX)', 'Artritis Psoriásica', 'Espondilitis Anquilosante', 'Artritis Idiopática Juvenil']
      },
      commercialNames: { br: ['Enbrel', 'Brenzys', 'Erelzi'], ar: ['Enbrel'] },
      presentation: { pt: ['Seringa preenchida / Caneta SC 25 mg', '50 mg'], es: ['Jeringa prellenada / Pluma SC 25 mg', '50 mg'] },
      mechanism: {
        pt: 'Diferente do adalimumabe (que é um anticorpo), o etanercepte é uma "proteína de fusão" (receptor humano p75 do TNF ligado à porção Fc da IgG1). Ele atua como um receptor "isca" (decoy) circulante falso. O TNF-alfa e o TNF-beta livres no sangue ligam-se a essa isca e são neutralizados antes que consigam alcançar as células articulares para deflagrar a inflamação.',
        es: 'A diferencia del adalimumab (que es un anticuerpo), el etanercept es una "proteína de fusión" (receptor humano p75 del TNF unido a la porción Fc de la IgG1). Actúa como un receptor "señuelo" (decoy) circulante falso. El TNF-alfa y el TNF-beta libres en la sangre se unen a este señuelo y son neutralizados antes de que logren alcanzar las células articulares para desencadenar la inflamación.'
      },
      dose: {
        adult: {
          standard: {
            pt: 'Reumatologia: 50 mg via SC 1 VEZ POR SEMANA (ou 25 mg 2x/semana). Em Psoríase em placas grave: pode-se iniciar com 50 mg 2x/semana por 12 semanas.',
            es: 'Reumatología: 50 mg vía SC 1 VEZ POR SEMANA (o 25 mg 2 veces/semana). En Psoriasis en placas grave: se puede iniciar con 50 mg 2 veces/semana por 12 semanas.'
          }
        },
        pediatric: {
          standard: {
            pt: 'Crianças > 2 anos: 0,8 mg/kg/semana (máximo 50 mg/semana).',
            es: 'Niños > 2 años: 0,8 mg/kg/semana (máximo 50 mg/semana).'
          }
        }
      },
      administration: { pt: ['Injeção subcutânea (coxa, abdome ou braço). Alternar o local semanalmente.', 'Manter sob refrigeração (2 a 8ºC).'], es: ['Inyección subcutánea (muslo, abdomen o brazo). Alternar el lugar semanalmente.', 'Mantener bajo refrigeración (2 a 8ºC).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (depuração não é renal).', es: 'Sin necesidad de ajuste (depuración no es renal).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste formal.', es: 'Sin necesidad de ajuste formal.' } },
      commonAdverseEffects: { pt: ['Reação no local da injeção (muito comum - vermelhidão, coceira)', 'Infecções de vias aéreas superiores', 'Cefaleia'], es: ['Reacción en el sitio de inyección (muy común - enrojecimiento, picazón)', 'Infecciones de vías respiratorias superiores', 'Cefalea'] },
      dangerousAdverseEffects: { pt: ['Reativação de Tuberculose ou Hepatite B', 'Linfoma e outras malignidades (crianças e adolescentes - Alerta FDA)', 'Agravamento de insuficiência cardíaca', 'Síndromes desmielinizantes (esclerose múltipla induzida)'], es: ['Reactivación de Tuberculosis o Hepatitis B', 'Linfoma y otras malignidades (niños y adolescentes - Alerta FDA)', 'Agravamiento de insuficiencia cardíaca', 'Síndromes desmielinizantes (esclerosis múltiple inducida)'] },
      contraindications: {
        absolute: { pt: ['Sepse ou risco de sepse / Infecção crônica ou localizada ativa', 'Tuberculose latente não tratada pré-profilaticamente'], es: ['Sepsis o riesgo de sepsis / Infección crónica o localizada activa', 'Tuberculosis latente no tratada preprofilácticamente'] },
        relative: { pt: ['Insuficiência cardíaca congestiva (NYHA III e IV)', 'Histórico de discrasias sanguíneas ou doenças desmielinizantes'], es: ['Insuficiencia cardíaca congestiva (NYHA III y IV)', 'Historial de discrasias sanguíneas o enfermedades desmielinizantes'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA DE TUBERCULOSE E HEPATITE: PPD/IGRA e sorologias virais são obrigatórios antes do início. Caso ocorra infecção grave durante o uso, a medicação deve ser imediatamente suspensa.', es: 'ALERTA DE TUBERCULOSIS Y HEPATITIS: PPD/IGRA y serologías virales son obligatorias antes del inicio. Si ocurre infección grave durante el uso, la medicación debe suspenderse inmediatamente.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 10 (etanercepte — ativo) */

/* ─── GRUPO 11 — Analgésicos Opioides Atípicos ───────────────────────
   BUILD 326 Lote 1: metadona · codeina · tramadol · nalbufina · oxicodona
   category: 'analgesia'
──────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  if (typeof window.ANALGESICOS_DRUGS_DB !== 'object' || Array.isArray(window.ANALGESICOS_DRUGS_DB)) {
    window.ANALGESICOS_DRUGS_DB = {};
  }
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── METADONA ───────────────────────────────────────────────────────── */
    "metadona": {
      name: { pt: 'Metadona', es: 'Metadona' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte Sintético (Agonista Mu / Antagonista NMDA)', es: 'Analgésico Opioide Fuerte Sintético (Agonista Mu / Antagonista NMDA)' },
      indications: {
        pt: ['Dor crônica refratária severa e dor oncológica', 'Dor neuropática (devido à ação NMDA)', 'Desmame de opioides na UTI e tratamento de dependência química'],
        es: ['Dolor crónico refractario severo y dolor oncológico', 'Dolor neuropático (debido a la acción NMDA)', 'Destete de opioides en la UCI y tratamiento de dependencia química']
      },
      commercialNames: { br: ['Mythedone'], ar: ['Metadona'] },
      presentation: { pt: ['Comprimidos 5 mg, 10 mg', 'Ampolas IV/SC 10 mg/mL'], es: ['Comprimidos 5 mg, 10 mg', 'Ampollas IV/SC 10 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo triplo excepcional: 1) Agonista potente dos receptores Mu; 2) Antagonista do receptor NMDA (bloqueia o glutamato, o que reduz a tolerância ao opioide e alivia dor neuropática); 3) Inibe a recaptação de serotonina e noradrenalina. Possui uma meia-vida plasmática brutalmente longa e imprevisível (15 a 60 horas), que não coincide com sua analgesia (que dura apenas 6 a 8 horas).',
        es: 'Mecanismo triple excepcional: 1) Agonista potente de los receptores Mu; 2) Antagonista del receptor NMDA (bloquea el glutamato, lo que reduce la tolerancia al opioide y alivia dolor neuropático); 3) Inhibe la recaptación de serotonina y noradrenalina. Posee una vida media plasmática brutalmente larga e impredecible (15 a 60 horas), que no coincide con su analgesia (que dura solo 6 a 8 horas).'
      },
      dose: {
        adult: {
          pt: 'Dor: 2,5 a 10 mg VO a cada 8h ou 12h. A titulação deve ser EXTREMAMENTE LENTA (aguardar 5 a 7 dias para ajustar a dose, tempo para atingir o steady-state).',
          es: 'Dolor: 2,5 a 10 mg VO cada 8h o 12h. La titulación debe ser EXTREMADAMENTE LENTA (esperar 5 a 7 días para ajustar la dosis, tiempo para alcanzar el steady-state).'
        },
        pediatric: {
          pt: 'Uso complexo. Desmame em UTI pediátrica guiado por especialista (geralmente 0,05 a 0,1 mg/kg/dose).',
          es: 'Uso complejo. Destete en UCI pediátrica guiado por especialista (generalmente 0,05 a 0,1 mg/kg/dosis).'
        }
      },
      administration: { pt: ['Via Oral tem altíssima biodisponibilidade (quase 80%).', 'Evitar uso endovenoso intermitente rápido pelo risco de arritmias.'], es: ['Vía Oral tiene altísima biodisponibilidad (casi 80%).', 'Evitar uso endovenoso intermitente rápido por el riesgo de arritmias.'] },
      renalAdjustment: { required: false, message: { pt: 'O opioide forte mais SEGURO na Doença Renal Crônica avançada, pois é depurado quase exclusivamente pelas fezes.', es: 'El opioide fuerte más SEGURO en la Enfermedad Renal Crónica avanzada, pues se depura casi exclusivamente por las heces.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático intenso (CYP3A4/CYP2B6). Evitar em insuficiência hepática grave.', es: 'Metabolismo hepático intenso (CYP3A4/CYP2B6). Evitar en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Constipação (menos grave que a morfina)', 'Sudorese excessiva', 'Tontura e Sedação inicial'], es: ['Constipación (menos grave que la morfina)', 'Sudoración excesiva', 'Mareo y Sedación inicial'] },
      dangerousAdverseEffects: { pt: ['Prolongamento do Intervalo QT (risco de Torsades de Pointes / morte súbita)', 'Depressão respiratória de início TARDIO (o acúmulo ocorre após dias de uso)'], es: ['Prolongación del Intervalo QT (riesgo de Torsades de Pointes / muerte súbita)', 'Depresión respiratoria de inicio TARDÍO (la acumulación ocurre tras días de uso)'] },
      contraindications: {
        absolute: { pt: ['Prolongamento do QT basal (> 500 ms)'], es: ['Prolongación del QT basal (> 500 ms)'] },
        relative: { pt: ['Histórico de arritmias ventriculares', 'Asma brônquica aguda'], es: ['Historial de arritmias ventriculares', 'Asma bronquial aguda'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'CUIDADO: A analgesia da metadona passa em 8 horas, mas o efeito depressor respiratório dura mais de 30 horas. Pacientes frequentemente pedem mais doses por dor e evoluem para parada respiratória noturna por acúmulo sistêmico.', es: 'CUIDADO: La analgesia de la metadona pasa en 8 horas, pero el efecto depresor respiratorio dura más de 30 horas. Pacientes frecuentemente piden más dosis por dolor y evolucionan a paro respiratorio nocturno por acumulación sistémica.' }
      }
    },

/* ── CODEÍNA ────────────────────────────────────────────────────────── */
    "codeina": {
      name: { pt: 'Codeína', es: 'Codeína' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Fraco', es: 'Analgésico Opioide Débil' },
      indications: {
        pt: ['Dor aguda e crônica de intensidade leve a moderada', 'Tosse seca refratária (ação antitússica)'],
        es: ['Dolor agudo y crónico de intensidad leve a moderada', 'Tos seca refractaria (acción antitusiva)']
      },
      commercialNames: { br: ['Paco (c/ Paracetamol)', 'Tylex'], ar: ['Codeína', 'Termofren C'] },
      presentation: { pt: ['Comprimidos 30 mg (frequentemente associada a 500 mg de Paracetamol)', 'Xarope 3 mg/mL'], es: ['Comprimidos 30 mg (frecuentemente asociada a 500 mg de Paracetamol)', 'Jarabe 3 mg/mL'] },
      mechanism: {
        pt: 'A codeína é um PRÓ-FÁRMACO puro. Por si só, tem baixíssima afinidade pelos receptores opioides. Precisa ser convertida no fígado (pela enzima CYP2D6) no seu metabólito ativo: a MORFINA (cerca de 10% da dose é convertida). A ação supressora da tosse ocorre por ação direta no centro bulbar.',
        es: 'La codeína es un PROFÁRMACO puro. Por sí sola, tiene bajísima afinidad por los receptores opioides. Necesita ser convertida en el hígado (por la enzima CYP2D6) en su metabolito activo: la MORFINA (cerca del 10% de la dosis se convierte). La acción supresora de la tos ocurre por acción directa en el centro bulbar.'
      },
      dose: {
        adult: {
          pt: 'Dor: 30 a 60 mg VO a cada 6h. Antitússico: 10 a 20 mg a cada 6h.',
          es: 'Dolor: 30 a 60 mg VO cada 6h. Antitusivo: 10 a 20 mg cada 6h.'
        },
        pediatric: {
          pt: 'CONTRAINDICADA em crianças < 12 anos. Restrita e com muita cautela entre 12-18 anos.',
          es: 'CONTRAINDICADA en niños < 12 años. Restringida y con mucha precaución entre 12-18 años.'
        }
      },
      administration: { pt: ['Via oral. Pode ser tomada com ou sem alimentos.'], es: ['Vía oral. Puede ser tomada con o sin alimentos.'] },
      renalAdjustment: { required: true, message: { pt: 'Aumentar o intervalo das doses na insuficiência renal (risco de acúmulo dos metabólitos da morfina).', es: 'Aumentar el intervalo de las dosis en la insuficiencia renal (riesgo de acumulación de los metabolitos de la morfina).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Na insuficiência hepática, a conversão para morfina pode não ocorrer, falhando a analgesia.', es: 'En la insuficiencia hepática, la conversión a morfina puede no ocurrir, fallando la analgesia.' } },
      commonAdverseEffects: { pt: ['Constipação intestinal GRAVE', 'Tontura e sonolência leve', 'Náuseas'], es: ['Constipación intestinal GRAVE', 'Mareo y somnolencia leve', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória fatal em "Metabolizadores Ultra-Rápidos" (pacientes com genética que converte quase 100% da droga em morfina)'], es: ['Depresión respiratoria fatal en "Metabolizadores Ultra-Rápidos" (pacientes con genética que convierte casi el 100% de la droga en morfina)'] },
      contraindications: {
        absolute: { pt: ['Crianças menores de 12 anos (risco de parada respiratória)', 'Amamentação (passa no leite materno como morfina e intoxica o bebê)'], es: ['Niños menores de 12 años (riesgo de paro respiratorio)', 'Lactancia (pasa en la leche materna como morfina e intoxica al bebé)'] },
        relative: { pt: ['Idosos debilitados', 'Asma brônquica aguda'], es: ['Ancianos debilitados', 'Asma bronquial aguda'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'Atenção farmacogenética: Cerca de 10% da população branca não possui a enzima CYP2D6 (Metabolizadores Lentos). Nesses pacientes, a Codeína será um "comprimido de farinha", não causando nenhum alívio da dor.', es: 'Atención farmacogenética: Cerca del 10% de la población blanca no posee la enzima CYP2D6 (Metabolizadores Lentos). En estos pacientes, la Codeína será una "pastilla de harina", no causando ningún alivio del dolor.' }
      }
    },

/* ── TRAMADOL ───────────────────────────────────────────────────────── */
    "tramadol": {
      name: { pt: 'Tramadol', es: 'Tramadol' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Fraco (Atípico)', es: 'Analgésico Opioide Débil (Atípico)' },
      indications: {
        pt: ['Dor aguda ou crônica de intensidade moderada a severa', 'Dores neuropáticas (adjuvante)'],
        es: ['Dolor agudo o crónico de intensidad moderada a severa', 'Dolores neuropáticos (adyuvante)']
      },
      commercialNames: { br: ['Tramal', 'Sylador'], ar: ['Calmador', 'Tramadol'] },
      presentation: { pt: ['Ampolas IV/IM/SC 50 mg/mL', 'Cápsulas/Comprimidos 50 mg, 100 mg'], es: ['Ampollas IV/IM/SC 50 mg/mL', 'Cápsulas/Comprimidos 50 mg, 100 mg'] },
      mechanism: {
        pt: 'Mecanismo duplo central: 1) Agonista fraco do receptor opioide Mu (a droga-mãe é fraca, mas seu metabólito hepático O-desmetiltramadol é 6 vezes mais potente); 2) Inibe a recaptação neuronal de Serotonina e Noradrenalina nas vias descendentes da dor na medula espinhal, bloqueando a transmissão do sinal doloroso. Possui menor risco de depressão respiratória que a morfina.',
        es: 'Mecanismo doble central: 1) Agonista débil del receptor opioide Mu (la droga madre es débil, pero su metabolito hepático O-desmetiltramadol es 6 veces más potente); 2) Inhibe la recaptación neuronal de Serotonina y Noradrenalina en las vías descendentes del dolor en la médula espinal, bloqueando la transmisión de la señal dolorosa. Posee menor riesgo de depresión respiratoria que la morfina.'
      },
      dose: {
        adult: {
          pt: '50 a 100 mg VO, IV ou IM a cada 6h ou 8h (Máximo 400 mg/dia).',
          es: '50 a 100 mg VO, IV o IM cada 6h o 8h (Máximo 400 mg/día).'
        },
        pediatric: {
          pt: 'Contraindicado para < 12 anos. Excepcionalmente 1 a 2 mg/kg/dose > 12 anos.',
          es: 'Contraindicado para < 12 años. Excepcionalmente 1 a 2 mg/kg/dosis > 12 años.'
        }
      },
      administration: { pt: ['A injeção IV deve ser feita LENTAMENTE (em 2 a 3 minutos). A injeção rápida causa vômito em jato quase instantâneo.'], es: ['La inyección IV debe hacerse LENTAMENTE (en 2 a 3 minutos). La inyección rápida causa vómito en chorro casi instantáneo.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, aumentar intervalo para 12h e limitar a 200 mg/dia.', es: 'Si ClCr < 30 mL/min, aumentar intervalo a 12h y limitar a 200 mg/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em cirrose grave; dependente da conversão hepática para analgesia real.', es: 'Evitar en cirrosis grave; dependiente de la conversión hepática para analgesia real.' } },
      commonAdverseEffects: { pt: ['Náusea extrema e vômitos (muito comum)', 'Tontura e vertigem', 'Constipação e boca seca'], es: ['Náusea extrema y vómitos (muy común)', 'Mareo y vértigo', 'Constipación y boca seca'] },
      dangerousAdverseEffects: { pt: ['Convulsões epilépticas (especialmente se limite de dose for excedido)', 'Síndrome Serotoninérgica'], es: ['Convulsiones epilépticas (especialmente si se excede el límite de dosis)', 'Síndrome Serotoninérgico'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Epilepsia não controlada', 'Uso concomitante ou recente (14 dias) de Inibidores da MAO'], es: ['Pacientes con Epilepsia no controlada', 'Uso concomitante o reciente (14 días) de Inhibidores de la MAO'] },
        relative: { pt: ['Uso associado com antidepressivos (risco serotoninérgico)'], es: ['Uso asociado con antidepresivos (riesgo serotoninérgico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: false,
        warning: { pt: 'O Tramadol BAIXA O LIMIAR CONVULSIVO da via cerebral. Nunca associe a outras drogas que também causem isso (ex: Bupropiona) sem cautela.', es: 'El Tramadol BAJA EL UMBRAL CONVULSIVO de la vía cerebral. Nunca asocie a otras drogas que también causen esto (ej: Bupropión) sin precaución.' }
      }
    },

/* ── NALBUFINA ──────────────────────────────────────────────────────── */
    "nalbufina": {
      name: { pt: 'Nalbufina', es: 'Nalbufina' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Misto (Agonista-Antagonista)', es: 'Analgésico Opioide Mixto (Agonista-Antagonista)' },
      indications: {
        pt: ['Dor moderada a severa (especialmente pós-operatório e obstetrícia)', 'Reversão do prurido (coceira) induzido por fentanil ou morfina espinhal'],
        es: ['Dolor moderado a severo (especialmente posoperatorio y obstetricia)', 'Reversión del prurito (picazón) inducido por fentanilo o morfina espinal']
      },
      commercialNames: { br: ['Nubain'], ar: ['Nubain'] },
      presentation: { pt: ['Ampolas IV/IM/SC 10 mg/mL (1 mL)'], es: ['Ampollas IV/IM/SC 10 mg/mL (1 mL)'] },
      mechanism: {
        pt: 'Ação dupla e contraditória: É um potente AGONISTA dos receptores Kappa (fornecendo forte analgesia espinhal e sedação pesada), mas é um ANTAGONISTA dos receptores Mu (bloqueando a euforia e a depressão respiratória excessiva). Essa característica confere à Nalbufina um "Efeito Teto" (ceiling effect): a partir de certa dose (30mg), o aumento da droga não aprofunda a depressão respiratória.',
        es: 'Acción doble y contradictoria: Es un potente AGONISTA de los receptores Kappa (proporcionando fuerte analgesia espinal y sedación pesada), pero es un ANTAGONISTA de los receptores Mu (bloqueando la euforia y la depresión respiratoria excesiva). Esta característica confiere a la Nalbufina un "Efecto Techo" (ceiling effect): a partir de cierta dosis (30mg), el aumento de la droga no profundiza la depresión respiratoria.'
      },
      dose: {
        adult: {
          pt: 'Analgesia: 10 a 20 mg IV, IM ou SC a cada 3 a 6 horas. Reversão de Prurido: 2,5 a 5 mg IV em pequenos bolus.',
          es: 'Analgesia: 10 a 20 mg IV, IM o SC cada 3 a 6 horas. Reversión de Prurito: 2,5 a 5 mg IV en pequeños bolos.'
        },
        pediatric: {
          pt: '0,1 a 0,2 mg/kg IV ou IM.',
          es: '0,1 a 0,2 mg/kg IV o IM.'
        }
      },
      administration: { pt: ['Injeção IV lenta.'], es: ['Inyección IV lenta.'] },
      renalAdjustment: { required: false, message: { pt: 'Uso cauteloso, mas menos restritivo que a morfina.', es: 'Uso cauteloso, pero menos restrictivo que la morfina.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose em insuficiência hepática (metabolismo de primeira passagem).', es: 'Reducir dosis en insuficiencia hepática (metabolismo de primer paso).' } },
      commonAdverseEffects: { pt: ['Sedação/Sonolência muito mais intensa que a morfina (marcador da ação Kappa)', 'Suores frios e tontura', 'Náuseas'], es: ['Sedación/Somnolencia mucho más intensa que la morfina (marcador de la acción Kappa)', 'Sudores fríos y mareos', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Efeitos dismórficos/psicomiméticos (ansiedade, alucinações, sensação de flutuação) - comum em agonistas Kappa', 'Síndrome de Abstinência induzida'], es: ['Efectos dismórficos/psicomiméticos (ansiedad, alucinaciones, sensación de flotación) - común en agonistas Kappa', 'Síndrome de Abstinencia inducida'] },
      contraindications: {
        absolute: { pt: ['Pacientes cronicamente dependentes de heroína, morfina ou fentanil (desencadeará abstinência explosiva)'], es: ['Pacientes crónicamente dependientes de heroína, morfina o fentanilo (desencadenará abstinencia explosiva)'] },
        relative: { pt: ['Transtornos psiquiátricos com histórico de psicose'], es: ['Trastornos psiquiátricos con historial de psicosis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Extremamente segura na obstetrícia (partos) pois cruza a placenta, mas causa pouca ou nenhuma depressão respiratória no recém-nascido graças ao seu efeito teto Mu-antagonista.', es: 'Extremamente segura en obstetricia (partos) pues cruza la placenta, pero causa poca o ninguna depresión respiratoria en el recién nacido gracias a su efecto techo Mu-antagonista.' }
      }
    },

/* ── OXICODONA ──────────────────────────────────────────────────────── */
    "oxicodona": {
      name: { pt: 'Oxicodona', es: 'Oxicodona' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte Sintético', es: 'Analgésico Opioide Fuerte Sintético' },
      indications: {
        pt: ['Dor moderada a severa (especialmente pós-operatório ortopédico e câncer)', 'Dor crônica refratária'],
        es: ['Dolor moderado a severo (especialmente posoperatorio ortopédico y cáncer)', 'Dolor crónico refractario']
      },
      commercialNames: { br: ['OxyContin', 'Targin (c/ Naloxona)'], ar: ['OxyContin', 'Oxicodal'] },
      presentation: { pt: ['Comprimidos de Liberação Controlada (LC) 10 mg, 20 mg, 40 mg'], es: ['Comprimidos de Liberación Controlada (LC) 10 mg, 20 mg, 40 mg'] },
      mechanism: {
        pt: 'Agonista Mu e Kappa puro e muito potente. Via oral, possui uma biodisponibilidade imensamente superior à da morfina (quase 60 a 87% chegam ao sangue). É considerada 1,5 a 2 vezes mais forte que a morfina oral. Exerce excelente controle em dores viscerais e ósseas profundas.',
        es: 'Agonista Mu y Kappa puro y muy potente. Vía oral, posee una biodisponibilidad inmensamente superior a la de la morfina (casi 60 a 87% llegan a la sangre). Es considerada 1,5 a 2 veces más fuerte que la morfina oral. Ejerce excelente control en dolores viscerales y óseos profundos.'
      },
      dose: {
        adult: {
          pt: '10 a 20 mg VO a cada 12 horas (comprimidos de ação prolongada). Pacientes já tolerantes a opioides necessitam de doses maiores.',
          es: '10 a 20 mg VO cada 12 horas (comprimidos de acción prolongada). Pacientes ya tolerantes a opioides necesitan dosis mayores.'
        },
        pediatric: {
          pt: 'Não recomendado o uso rotineiro em crianças.',
          es: 'No recomendado el uso rutinario en niños.'
        }
      },
      administration: { pt: ['Comprimidos de liberação prolongada (OxyContin) NÃO PODEM ser partidos, mastigados ou esmagados. Ingerir a pílula alterada libera toda a carga de 12 horas de uma vez, causando overdose fatal.'], es: ['Comprimidos de liberación prolongada (OxyContin) NO PUEDEN ser partidos, masticados o aplastados. Ingerir la píldora alterada libera toda la carga de 12 horas de una vez, causando sobredosis fatal.'] },
      renalAdjustment: { required: true, message: { pt: 'Depuração diminuída. Iniciar com 1/3 a 1/2 da dose e monitorar depressão respiratória.', es: 'Depuración disminuida. Iniciar con 1/3 a 1/2 de la dosis y monitorizar depresión respiratoria.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Mesma conduta da renal; risco de acúmulo da droga ativa.', es: 'Misma conducta que la renal; riesgo de acumulación de la droga activa.' } },
      commonAdverseEffects: { pt: ['Constipação severa (o Targin associa naloxona para agir localmente no intestino e evitar isso)', 'Sonolência pesada e sedação', 'Náusea'], es: ['Constipación severa (el Targin asocia naloxona para actuar localmente en el intestino y evitar esto)', 'Somnolencia pesada y sedación', 'Náusea'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave', 'Dependência física, abuso e vício (potencial euforizante altíssimo)'], es: ['Depresión respiratoria grave', 'Dependencia física, abuso y adicción (potencial euforizante altísimo)'] },
      contraindications: {
        absolute: { pt: ['Asma brônquica severa em crise', 'Íleo paralítico suspeito ou documentado'], es: ['Asma bronquial severa en crisis', 'Íleo paralítico sospechoso o documentado'] },
        relative: { pt: ['Histórico de abuso de substâncias ou alcoolismo'], es: ['Historial de abuso de sustancias o alcoholismo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'DROGA DE ABUSO: A oxicodona é a principal responsável pela epidemia de opioides moderna devido ao seu forte efeito euforizante e dependência rápida. Prescrever apenas a quantidade exata para o pós-operatório estrito.', es: 'DROGA DE ABUSO: La oxicodona es la principal responsable de la epidemia de opioides moderna debido a su fuerte efecto euforizante y dependencia rápida. Prescribir solo la cantidad exacta para el posoperatorio estricto.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 11 (metadona · codeina · tramadol · nalbufina · oxicodona — BUILD 326 Lote 1) */

})();

/* ─── GRUPO 12 — Opioide Avançado, Anestésicos Locais e Trombolítico ─
   BUILD 328 Lote 2: hidromorfona · buprenorfina · bupivacaina · ropivacaina · tenecteplase
   category: 'analgesia' (hidromorfona/buprenorfina/bupivacaina/ropivacaina) | 'cardiologia' (tenecteplase)
──────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  if (typeof window.ANALGESICOS_DRUGS_DB !== 'object' || Array.isArray(window.ANALGESICOS_DRUGS_DB)) {
    window.ANALGESICOS_DRUGS_DB = {};
  }
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── HIDROMORFONA ───────────────────────────────────────────────────── */
    "hidromorfona": {
      name: { pt: 'Hidromorfona', es: 'Hidromorfona' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte Sintético', es: 'Analgésico Opioide Fuerte Sintético' },
      indications: {
        pt: ['Dor aguda ou crônica de forte intensidade', 'Alternativa direta à Morfina em pacientes com Doença Renal Crônica', 'Manejo de dor oncológica severa'],
        es: ['Dolor agudo o crónico de fuerte intensidad', 'Alternativa directa a la Morfina en pacientes con Enfermedad Renal Crónica', 'Manejo de dolor oncológico severo']
      },
      commercialNames: { br: ['Jurnista'], ar: ['Jurnista'] },
      presentation: { pt: ['Ampolas IV/IM/SC 2 mg/mL', 'Comprimidos OROS (liberação prolongada) 8 mg, 16 mg, 32 mg'], es: ['Ampollas IV/IM/SC 2 mg/mL', 'Comprimidos OROS (liberación prolongada) 8 mg, 16 mg, 32 mg'] },
      mechanism: {
        pt: 'Agonista opioide Mu puro, derivado semissintético da morfina. É cerca de 5 a 7 vezes mais potente que a morfina (1 mg de hidromorfona IV = 7 mg de morfina IV). Sua grande vantagem é que seu metabolismo hepático não gera metabólitos ativos significativos (como o M6G da morfina), tornando-a muito mais segura em pacientes idosos e com falência renal, sem o risco de acúmulo neurotóxico.',
        es: 'Agonista opioide Mu puro, derivado semisintético de la morfina. Es cerca de 5 a 7 veces más potente que la morfina (1 mg de hidromorfona IV = 7 mg de morfina IV). Su gran ventaja es que su metabolismo hepático no genera metabolitos activos significativos (como el M6G de la morfina), haciéndola mucho más segura en pacientes ancianos y con fallo renal, sin el riesgo de acumulación neurotóxica.'
      },
      dose: {
        adult: {
          pt: 'Dor aguda: 0,2 a 1 mg IV a cada 2-3 horas (titulado conforme resposta). Uso oral (comprimido OROS): 8 mg a cada 24 horas (nunca partir o comprimido).',
          es: 'Dolor agudo: 0,2 a 1 mg IV cada 2-3 horas (titulado según respuesta). Uso oral (comprimido OROS): 8 mg cada 24 horas (nunca partir el comprimido).'
        },
        pediatric: {
          pt: '0,015 mg/kg IV a cada 4 horas.',
          es: '0,015 mg/kg IV cada 4 horas.'
        }
      },
      administration: { pt: ['Injeção IV muito lenta (2 a 3 minutos).', 'Os comprimidos de liberação osmótica (OROS) são rígidos e a casca é eliminada intacta nas fezes (avisar o paciente).'], es: ['Inyección IV muy lenta (2 a 3 minutos).', 'Los comprimidos de liberación osmótica (OROS) son rígidos y la cáscara se elimina intacta en las heces (avisar al paciente).'] },
      renalAdjustment: { required: false, message: { pt: 'Opioide de escolha (junto com fentanil/metadona) na DRC, pois não acumula metabólitos ativos. Ajustes leves apenas por precaução.', es: 'Opioide de elección (junto con fentanilo/metadona) en ERC, pues no acumula metabolitos activos. Ajustes leves solo por precaución.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir a dose em insuficiência hepática moderada a grave.', es: 'Reducir la dosis en insuficiencia hepática moderada a grave.' } },
      commonAdverseEffects: { pt: ['Constipação (menos náusea e prurido que a morfina)', 'Sonolência'], es: ['Constipación (menos náusea y prurito que la morfina)', 'Somnolencia'] },
      dangerousAdverseEffects: { pt: ['Depressão respiratória grave e apneia', 'Hipotensão severa se injetado rapidamente em pacientes hipovolêmicos'], es: ['Depresión respiratoria grave y apnea', 'Hipotensión severa si se inyecta rápidamente en pacientes hipovolémicos'] },
      contraindications: {
        absolute: { pt: ['Depressão respiratória não monitorada', 'Asma aguda severa'], es: ['Depresión respiratoria no monitorizada', 'Asma aguda severa'] },
        relative: { pt: ['Traumatismo craniano (aumento da PIC associado ao aumento de CO2)'], es: ['Traumatismo craneal (aumento de la PIC asociado al aumento de CO2)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Devido à sua extrema potência em doses numericamente pequenas, erros de prescrição (confundir dose de morfina com hidromorfona) resultam em morte imediata por overdose.', es: 'Debido a su extrema potencia en dosis numéricamente pequeñas, errores de prescripción (confundir dosis de morfina con hidromorfona) resultan en muerte inmediata por sobredosis.' }
      }
    },

/* ── BUPRENORFINA ───────────────────────────────────────────────────── */
    "buprenorfina": {
      name: { pt: 'Buprenorfina', es: 'Buprenorfina' },
      category: 'analgesia',
      class: { pt: 'Analgésico Opioide Forte (Agonista Parcial Mu)', es: 'Analgésico Opioide Fuerte (Agonista Parcial Mu)' },
      indications: {
        pt: ['Dor crônica oncológica e não oncológica moderada a severa', 'Tratamento de manutenção do Transtorno por Uso de Opioides (desintoxicação de heroína/fentanil)'],
        es: ['Dolor crónico oncológico y no oncológico moderado a severo', 'Tratamiento de mantenimiento del Trastorno por Uso de Opioides (desintoxicación de heroína/fentanilo)']
      },
      commercialNames: { br: ['Restiva (Adesivo)', 'Temgesic'], ar: ['Suboxone', 'Restiva'] },
      presentation: { pt: ['Adesivos transdérmicos 5, 10, 20 mcg/h', 'Comprimidos sublinguais 0,2 mg, 2 mg, 8 mg'], es: ['Parches transdérmicos 5, 10, 20 mcg/h', 'Comprimidos sublinguales 0,2 mg, 2 mg, 8 mg'] },
      mechanism: {
        pt: 'Possui afinidade monstruosa pelo receptor Mu, aderindo a ele mais fortemente que fentanil, morfina ou até mesmo a naloxona (antídoto). Contudo, é um AGONISTA PARCIAL (só ativa o receptor em 40-50%). Isso gera excelente analgesia de base, mas cria um "efeito teto" perfeito para a depressão respiratória (aumentar a dose não mata o paciente de asfixia).',
        es: 'Posee afinidad monstruosa por el receptor Mu, adhiriéndose a él más fuertemente que fentanilo, morfina o incluso la naloxona (antídoto). Sin embargo, es un AGONISTA PARCIAL (solo activa el receptor en 40-50%). Esto genera excelente analgesia de base, pero crea un "efecto techo" perfecto para la depresión respiratoria (aumentar la dosis no mata al paciente de asfixia).'
      },
      dose: {
        adult: {
          pt: 'Adesivo transdérmico: Trocar a cada 7 DIAS. Uso Sublingual: 0,2 a 0,4 mg a cada 6-8 horas para dor.',
          es: 'Parche transdérmico: Cambiar cada 7 DÍAS. Uso Sublingual: 0,2 a 0,4 mg cada 6-8 horas para dolor.'
        },
        pediatric: {
          pt: 'Não recomendado rotineiramente < 18 anos fora de centros especializados.',
          es: 'No recomendado rutinariamente < 18 años fuera de centros especializados.'
        }
      },
      administration: { pt: ['Comprimidos sublinguais não devem ser mastigados nem engolidos (destruídos pelo fígado se ingeridos).', 'O adesivo age por 7 dias, deve ser colocado em pele sem pelos.'], es: ['Comprimidos sublinguales no deben ser masticados ni tragados (destruidos por el hígado si ingeridos).', 'El parche actúa por 7 días, debe ser colocado en piel sin vellos.'] },
      renalAdjustment: { required: false, message: { pt: 'Altamente segura. Excreção primariamente biliar/fecal. Sem ajuste na DRC.', es: 'Altamente segura. Excreción primariamente biliar/fecal. Sin ajuste en ERC.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar ou reduzir agressivamente na insuficiência hepática severa.', es: 'Evitar o reducir agresivamente en insuficiencia hepática severa.' } },
      commonAdverseEffects: { pt: ['Náusea e Vômitos (especialmente na fase de adaptação)', 'Constipação', 'Eritema no local do adesivo'], es: ['Náusea y Vómitos (especialmente en fase de adaptación)', 'Constipación', 'Eritema en el sitio del parche'] },
      dangerousAdverseEffects: { pt: ['Síndrome de abstinência precipitada grave (se o paciente já usar outros opioides plenos)', 'Prolongamento do intervalo QT'], es: ['Síndrome de abstinencia precipitada grave (si el paciente ya usa otros opioides plenos)', 'Prolongación del intervalo QT'] },
      contraindications: {
        absolute: { pt: ['Miastenia Gravis, Íleo paralítico'], es: ['Miastenia Gravis, Íleo paralítico'] },
        relative: { pt: ['Pacientes em uso agudo de doses maciças de agonistas Mu puros (Fentanil/Morfina)'], es: ['Pacientes en uso agudo de dosis masivas de agonistas Mu puros (Fentanilo/Morfina)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Atenção Anestesistas: Se o paciente que usa buprenorfina crônica precisar de cirurgia, a morfina ou fentanil tradicionais NÃO FARÃO EFEITO, pois a buprenorfina "blinda" o receptor e não os deixa entrar. Requer técnicas analgésicas avançadas (bloqueio regional ou cetamina).', es: 'Atención Anestesiólogos: Si el paciente que usa buprenorfina crónica necesita cirugía, la morfina o fentanilo tradicionales NO HARÁN EFECTO, pues la buprenorfina "blinda" el receptor y no los deja entrar. Requiere técnicas analgésicas avanzadas (bloqueo regional o ketamina).' }
      }
    },

/* ── BUPIVACAÍNA ────────────────────────────────────────────────────── */
    "bupivacaina": {
      name: { pt: 'Bupivacaína', es: 'Bupivacaína' },
      category: 'analgesia',
      class: { pt: 'Anestésico Local tipo Amida (Ação Longa)', es: 'Anestésico Local tipo Amida (Acción Larga)' },
      indications: {
        pt: ['Anestesia regional/Espinhal (Raquianestesia, Peridural)', 'Bloqueio de nervos periféricos', 'Infiltração local para analgesia pós-operatória prolongada'],
        es: ['Anestesia regional/Espinal (Raquianestesia, Peridural)', 'Bloqueo de nervios periféricos', 'Infiltración local para analgesia posoperatoria prolongada']
      },
      commercialNames: { br: ['Neocaína', 'Marcaína'], ar: ['Marcaína'] },
      presentation: { pt: ['Frascos-ampola 0,25%, 0,5% e 0,75% (com ou sem vasoconstritor/epinefrina)', 'Ampolas pesadas (hiperbáricas) para Raquianestesia'], es: ['Viales 0,25%, 0,5% y 0,75% (con o sin vasoconstrictor/epinefrina)', 'Ampollas pesadas (hiperbáricas) para Raquianestesia'] },
      mechanism: {
        pt: 'Bloqueia reversivelmente a condução nervosa ao diminuir a permeabilidade da membrana neuronal aos íons de SÓDIO. Possui altíssima lipofilicidade, resultando em um bloqueio anestésico e motor muito potente e de longa duração (até 6 a 8 horas). A recuperação motora costuma demorar mais do que a sensorial.',
        es: 'Bloquea reversiblemente la conducción nerviosa al disminuir la permeabilidad de la membrana neuronal a los iones de SODIO. Posee altísima lipofilicidad, resultando en un bloqueo anestésico y motor muy potente y de larga duración (hasta 6 a 8 horas). La recuperación motora suele tardar más que la sensorial.'
      },
      dose: {
        adult: {
          pt: 'A dose varia conforme a técnica. Limite de segurança: 2,5 mg/kg (sem epinefrina) ou 3 mg/kg (com epinefrina) em um período de 4 horas.',
          es: 'La dosis varía según la técnica. Límite de seguridad: 2,5 mg/kg (sin epinefrina) o 3 mg/kg (con epinefrina) en un período de 4 horas.'
        },
        pediatric: {
          pt: 'Máximo de 2 mg/kg para infiltração.',
          es: 'Máximo de 2 mg/kg para infiltración.'
        }
      },
      administration: { pt: ['Injeção perineural, peridural ou espinhal.', 'NUNCA injetar intravascular (realizar aspiração prévia rigorosa).'], es: ['Inyección perineural, peridural o espinal.', 'NUNCA inyectar intravascular (realizar aspiración previa rigurosa).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito, mas cuidar com uremia que altera ligação proteica.', es: 'Sin necesidad de ajuste estricto, pero cuidar con uremia que altera unión proteica.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizada pelo fígado. Reduzir doses de repetição em cirróticos graves.', es: 'Metabolizada por el hígado. Reducir dosis de repetición en cirróticos graves.' } },
      commonAdverseEffects: { pt: ['Hipotensão e bradicardia (quando usada em raquianestesia por bloqueio simpático)', 'Retenção urinária'], es: ['Hipotensión y bradicardia (cuando usada en raquianestesia por bloqueo simpático)', 'Retención urinaria'] },
      dangerousAdverseEffects: { pt: ['TOXICIDADE SISTÊMICA DOS ANESTÉSICOS LOCAIS (LAST): Convulsões, Coma e Parada Cardíaca Refratária (Assistolia/Fibrilação Ventricular) se atingir a corrente sanguínea.'], es: ['TOXICIDAD SISTÉMICA DE LOS ANESTÉSICOS LOCALES (LAST): Convulsiones, Coma y Paro Cardíaco Refractario (Asistolia/Fibrilación Ventricular) si alcanza el torrente sanguíneo.'] },
      contraindications: {
        absolute: { pt: ['Injeção Intravenosa Regional (Bloqueio de Bier - uso estritamente letal)', 'Hipersensibilidade a amidas'], es: ['Inyección Intravenosa Regional (Bloqueo de Bier - uso estrictamente letal)', 'Hipersensibilidad a amidas'] },
        relative: { pt: ['Uso da formulação 0,75% em obstetrícia peridural (proibido pela FDA por risco de PCR refratária)'], es: ['Uso de formulación 0,75% en obstetricia peridural (prohibido por la FDA por riesgo de RCP refractaria)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO DE EMERGÊNCIA: A bupivacaína liga-se fortemente aos canais de sódio do coração, causando parada cardíaca indestrutível aos choques e epinefrina. A única salvação é a infusão imediata de EMULSÃO LIPÍDICA A 20% (Intralipid) IV, que funciona como um "dreno lipídico" puxando a bupivacaína para fora do miocárdio.', es: 'ANTÍDOTO DE EMERGENCIA: La bupivacaína se une fuertemente a los canales de sodio del corazón, causando paro cardíaco indestructible a los choques y epinefrina. La única salvación es la infusión inmediata de EMULSIÓN LIPÍDICA AL 20% (Intralipid) IV, que funciona como un "drenaje lipídico" sacando la bupivacaína del miocardio.' }
      }
    },

/* ── ROPIVACAÍNA ────────────────────────────────────────────────────── */
    "ropivacaina": {
      name: { pt: 'Ropivacaína', es: 'Ropivacaína' },
      category: 'analgesia',
      class: { pt: 'Anestésico Local tipo Amida (Ação Longa)', es: 'Anestésico Local tipo Amida (Acción Larga)' },
      indications: {
        pt: ['Analgesia epidural para trabalho de parto (escolha de ouro)', 'Bloqueio de nervos periféricos', 'Infiltração local'],
        es: ['Analgesia epidural para trabajo de parto (elección de oro)', 'Bloqueo de nervios periféricos', 'Infiltración local']
      },
      commercialNames: { br: ['Naropin'], ar: ['Naropin'] },
      presentation: { pt: ['Frascos-ampola 0,2%, 0,75% e 1%'], es: ['Viales 0,2%, 0,75% y 1%'] },
      mechanism: {
        pt: 'Bloqueador dos canais de sódio. Estruturalmente similar à bupivacaína, mas sintetizada puramente em seu enantiômero S (-). Isso lhe confere dois grandes diferenciais de segurança: 1) É significativamente MENOS CARDIOTÓXICA que a bupivacaína em caso de injeção venosa acidental; 2) Gera um bloqueio SENSORIAL intenso (tira a dor) mas com menor bloqueio MOTOR (a gestante consegue empurrar o bebê ou andar no pós-operatório).',
        es: 'Bloqueador de los canales de sodio. Estructuralmente similar a la bupivacaína, pero sintetizada puramente en su enantiómero S (-). Esto le confiere dos grandes diferenciales de seguridad: 1) Es significativamente MENOS CARDIOTÓXICA que la bupivacaína en caso de inyección venosa accidental; 2) Genera un bloqueo SENSORIAL intenso (quita el dolor) pero con menor bloqueo MOTOR (la gestante puede empujar al bebé o caminar en el posoperatorio).'
      },
      dose: {
        adult: {
          pt: 'Dose máxima de segurança: 3 mg/kg. Dose e concentração variam absurdamente conforme o local de bloqueio.',
          es: 'Dosis máxima de seguridad: 3 mg/kg. Dosis y concentración varían absurdamente según el sitio de bloqueo.'
        },
        pediatric: {
          pt: 'Bloqueios caudais ou peridurais (2 a 3 mg/kg limite seguro).',
          es: 'Bloqueos caudales o peridurales (2 a 3 mg/kg límite seguro).'
        }
      },
      administration: { pt: ['Exclusivamente via regional/infiltração. JAMAIS intravenosa.'], es: ['Exclusivamente vía regional/infiltración. JAMÁS intravenosa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolizada pelo fígado CYP1A2. Exige redução em cirrose.', es: 'Metabolizada por el hígado CYP1A2. Exige reducción en cirrosis.' } },
      commonAdverseEffects: { pt: ['Hipotensão (bloqueio simpático)', 'Náuseas e tontura', 'Parestesia na área bloqueada'], es: ['Hipotensión (bloqueo simpático)', 'Náuseas y mareos', 'Parestesia en el área bloqueada'] },
      dangerousAdverseEffects: { pt: ['Convulsões e neurotoxicidade se atingir via IV', 'Toxicidade cardíaca (menos grave que bupivacaína, mas possível)'], es: ['Convulsiones y neurotoxicidad si alcanza vía IV', 'Toxicidad cardíaca (menos grave que bupivacaína, pero posible)'] },
      contraindications: {
        absolute: { pt: ['Injeção intravenosa regional', 'Hipersensibilidade a anestésicos amida'], es: ['Inyección intravenosa regional', 'Hipersensibilidad a anestésicos amida'] },
        relative: { pt: ['Hipovolemia severa (se usado no neuro-eixo)'], es: ['Hipovolemia severa (si se usa en neuroeje)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'É a escolha perfeita (na formulação 0,2%) para o Walking Epidural (Analgesia de parto onde a mãe pode caminhar), pois preserva a força das pernas e tira as dores da contração.', es: 'Es la elección perfecta (en la formulación 0,2%) para la Epidural Ambulante (Analgesia de parto donde la madre puede caminar), pues preserva la fuerza de las piernas y quita los dolores de la contracción.' }
      }
    },

/* ── TENECTEPLASE (AVCi / IAM) ──────────────────────────────────────── */
    "tenecteplase": {
      name: { pt: 'Tenecteplase', es: 'Tenecteplasa' },
      category: 'cardiologia',
      class: { pt: 'Fibrinolítico / Trombolítico de 3ª Geração', es: 'Fibrinolítico / Trombolítico de 3ª Generación' },
      indications: {
        pt: ['Infarto Agudo do Miocárdio com Supradesnivelamento de ST (IAMCSST) se intervenção percutânea (cateterismo) indisponível em < 120 min', 'Acidente Vascular Cerebral Isquêmico (AVCi) Agudo nas primeiras 4,5 horas (substituindo a Alteplase em muitos protocolos mundiais)'],
        es: ['Infarto Agudo de Miocardio con Elevación del ST (IAMCEST) si intervención percutánea (cateterismo) indisponible en < 120 min', 'Accidente Cerebrovascular Isquémico (ACVi) Agudo en las primeras 4,5 horas (sustituyendo a la Alteplasa en muchos protocolos mundiales)']
      },
      commercialNames: { br: ['Metalyse'], ar: ['Metalyse'] },
      presentation: { pt: ['Frasco-ampola liofilizado 40 mg, 50 mg (com seringa preenchida com diluente)'], es: ['Vial liofilizado 40 mg, 50 mg (con jeringa prellenada con diluyente)'] },
      mechanism: {
        pt: 'Ativador do plasminogênio tecidual recombinante mutante (r-tPA). Possui a mais alta especificidade pela FIBRINA (só age onde o coágulo está formado) e alta resistência à degradação pelo inibidor PAI-1. Ele converte o plasminogênio aprisionado no trombo em plasmina, que dissolve agressivamente a rede de fibrina, desobstruindo a artéria coronária ou cerebral. Graças à sua meia-vida longa, pode ser dado em bolus ÚNICO de 5 segundos.',
        es: 'Activador del plasminógeno tisular recombinante mutante (r-tPA). Posee la más alta especificidad por la FIBRINA (solo actúa donde está formado el coágulo) y alta resistencia a la degradación por el inhibidor PAI-1. Convierte el plasminógeno atrapado en el trombo en plasmina, que disuelve agresivamente la red de fibrina, desobstruyendo la arteria coronaria o cerebral. Gracias a su vida media larga, se puede dar en bolo ÚNICO de 5 segundos.'
      },
      dose: {
        adult: {
          pt: 'IAM: Ajustado pelo peso. (Ex: <60kg=30mg; 70kg=35mg; 80kg=40mg; 90kg=45mg; >90kg=50mg). AVCi: 0,25 mg/kg IV (Dose máxima de 25 mg - ATENÇÃO: a dose do AVCi é quase METADE da dose do Infarto).',
          es: 'IAM: Ajustado por peso. (Ej: <60kg=30mg; 70kg=35mg; 80kg=40mg; 90kg=45mg; >90kg=50mg). ACVi: 0,25 mg/kg IV (Dosis máxima de 25 mg - ATENCIÓN: la dosis del ACVi es casi la MITAD de la dosis del Infarto).'
        },
        pediatric: {
          pt: 'Não indicado.',
          es: 'No indicado.'
        }
      },
      administration: { pt: ['Bolus IV direto RÁPIDO, em torno de 5 a 10 segundos. Lavar o acesso venoso com SF 0,9% antes e depois.'], es: ['Bolo IV directo RÁPIDO, en torno de 5 a 10 segundos. Lavar el acceso venoso con SF 0,9% antes y después.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste (metabolismo plasmático e hepático).', es: 'Sin necesidad de ajuste (metabolismo plasmático y hepático).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Risco de sangramento catastrófico aumenta em cirrose/coagulopatia grave basal.', es: 'Riesgo de sangrado catastrófico aumenta en cirrosis/coagulopatía grave basal.' } },
      commonAdverseEffects: { pt: ['Sangramento de acesso venoso ou gengiva', 'Hipotensão transitória', 'Arritmias de reperfusão (ex: RIVA) quando o vaso abre'], es: ['Sangrado de acceso venoso o encía', 'Hipotensión transitoria', 'Arritmias de reperfusión (ej: RIVA) cuando el vaso abre'] },
      dangerousAdverseEffects: { pt: ['Hemorragia Intracraniana (HIC) fatal', 'Hemorragia gastrointestinal grave', 'Angioedema orolingual (raro)'], es: ['Hemorragia Intracraneal (HIC) fatal', 'Hemorragia gastrointestinal grave', 'Angioedema orolingual (raro)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia intracraniana prévia', 'Sangramento ativo interno', 'Cirurgia craniana/espinhal nos últimos 3 meses', 'PA sistólica > 185 mmHg no AVCi (precisa abaixar a PA antes)'], es: ['Hemorragia intracraneal previa', 'Sangrado activo interno', 'Cirugía craneal/espinal en los últimos 3 meses', 'PA sistólica > 185 mmHg en ACVi (necesita bajar la PA antes)'] },
        relative: { pt: ['Uso ativo de anticoagulantes orais (DOACs ou Varfarina com INR > 1.7)', 'Cirurgia de grande porte nos últimos 14 dias'], es: ['Uso activo de anticoagulantes orales (DOACs o Warfarina con INR > 1.7)', 'Cirugía mayor en los últimos 14 días'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ERRO FATAL NA EMERGÊNCIA: A dosagem para AVC isquêmico (0,25 mg/kg) é muito inferior à do Infarto do Miocárdio (0,5 mg/kg). Aplicar a dose do infarto no AVC causará explosão hemorrágica cerebral e morte imediata.', es: 'ERROR FATAL EN EMERGENCIA: La dosis para ACV isquémico (0,25 mg/kg) es muy inferior a la del Infarto de Miocardio (0,5 mg/kg). Aplicar la dosis del infarto en el ACV causará explosión hemorrágica cerebral y muerte inmediata.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 12 (hidromorfona · buprenorfina · bupivacaina · ropivacaina · tenecteplase — BUILD 328 Lote 2) */

})();

/* ─── GRUPO 13 — Cardiologia Crítica e Hemodinâmica ─────────────────
   BUILD 330 Lote 3: alteplase · levosimendana · isoproterenol · esmolol · metoprolol_iv
   category: 'cardiologia'
──────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';
  if (typeof window.ANALGESICOS_DRUGS_DB !== 'object' || Array.isArray(window.ANALGESICOS_DRUGS_DB)) {
    window.ANALGESICOS_DRUGS_DB = {};
  }
  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── ALTEPLASE (rt-PA) ──────────────────────────────────────────────── */
    "alteplase": {
      name: { pt: 'Alteplase', es: 'Alteplasa' },
      category: 'cardiologia',
      class: { pt: 'Fibrinolítico / Ativador do Plasminogênio Tecidual (t-PA)', es: 'Fibrinolítico / Activador del Plasminógeno Tisular (t-PA)' },
      indications: {
        pt: ['Tromboembolismo Pulmonar (TEP) Maciço com instabilidade hemodinâmica', 'Acidente Vascular Cerebral Isquêmico (AVCi) Agudo (< 4,5h)', 'IAMCSST (quando Tenecteplase indisponível)'],
        es: ['Tromboembolismo Pulmonar (TEP) Masivo con inestabilidad hemodinámica', 'Accidente Cerebrovascular Isquémico (ACVi) Agudo (< 4,5h)', 'IAMCEST (cuando Tenecteplasa indisponible)']
      },
      commercialNames: { br: ['Actilyse'], ar: ['Actilyse'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg (com diluente)'], es: ['Vial liofilizado 50 mg (con diluyente)'] },
      mechanism: {
        pt: 'Enzima glicoproteica recombinante idêntica ao t-PA humano. Liga-se à fibrina no coágulo (ação trombo-específica) e converte o plasminogênio aprisionado em plasmina. A plasmina, por sua vez, "corta" e dissolve a rede de fibrina, desmanchando o trombo estrutural. Possui meia-vida muito curta (5 minutos), exigindo infusão contínua após o bolus inicial.',
        es: 'Enzima glucoproteica recombinante idéntica al t-PA humano. Se une a la fibrina en el coágulo (acción trombo-específica) y convierte el plasminógeno atrapado en plasmina. La plasmina, a su vez, "corta" y disuelve la red de fibrina, deshaciendo el trombo estructural. Posee vida media muy corta (5 minutos), exigiendo infusión continua tras el bolo inicial.'
      },
      dose: {
        adult: {
          pt: 'TEP Maciço: 100 mg IV ao longo de 2 horas (ou 0,6 mg/kg em bolus em parada cardíaca). AVCi: 0,9 mg/kg IV (máx 90mg) -> 10% da dose em bolus de 1 min e 90% em bomba por 60 min.',
          es: 'TEP Masivo: 100 mg IV a lo largo de 2 horas (o 0,6 mg/kg en bolo en paro cardíaco). ACVi: 0,9 mg/kg IV (máx 90mg) -> 10% de la dosis en bolo de 1 min y 90% en bomba por 60 min.'
        },
        pediatric: {
          pt: 'Uso excepcional em tromboses massivas (0,1 a 0,5 mg/kg/h).',
          es: 'Uso excepcional en trombosis masivas (0,1 a 0,5 mg/kg/h).'
        }
      },
      administration: { pt: ['Bomba de Infusão Contínua estrita para a fase de manutenção.', 'Evitar punções venosas ou arteriais não compressíveis (ex: jugular, subclávia) após o início da infusão.'], es: ['Bomba de Infusión Continua estricta para la fase de mantenimiento.', 'Evitar punciones venosas o arteriales no compresibles (ej: yugular, subclavia) tras el inicio de la infusión.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em doença hepática severa com coagulopatia ativa.', es: 'Evitar en enfermedad hepática severa con coagulopatía activa.' } },
      commonAdverseEffects: { pt: ['Sangramento superficial (gengiva, sítios de punção)', 'Equimoses'], es: ['Sangrado superficial (encía, sitios de punción)', 'Equimosis'] },
      dangerousAdverseEffects: { pt: ['Hemorragia Intracraniana (HIC) severa', 'Hemorragia retroperitoneal e gastrointestinal maciça', 'Angioedema orolingual (especialmente se o paciente usar IECA)'], es: ['Hemorragia Intracraneal (HIC) severa', 'Hemorragia retroperitoneal y gastrointestinal masiva', 'Angioedema orolingual (especialmente si el paciente usa IECA)'] },
      contraindications: {
        absolute: { pt: ['Hemorragia intracraniana prévia', 'Neoplasia do SNC', 'Sangramento interno ativo', 'PA > 185/110 mmHg no AVCi'], es: ['Hemorragia intracraneal previa', 'Neoplasia del SNC', 'Sangrado interno activo', 'PA > 185/110 mmHg en ACVi'] },
        relative: { pt: ['Uso de anticoagulantes orais', 'Gestação', 'Ressuscitação cardiopulmonar traumática prolongada (> 10 min)'], es: ['Uso de anticoagulantes orales', 'Embarazo', 'Reanimación cardiopulmonar traumática prolongada (> 10 min)'] }
      },
      safetyFlags: {
        bleedingRisk: true, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ANTÍDOTO DE RESGATE: Em caso de explosão hemorrágica, parar a bomba imediatamente e administrar Ácido Tranexâmico (Transamin) IV e Crioprecipitado/Plasma fresco.', es: 'ANTÍDOTO DE RESCATE: En caso de explosión hemorrágica, parar la bomba inmediatamente y administrar Ácido Tranexámico (Transamin) IV y Crioprecipitado/Plasma fresco.' }
      }
    },

/* ── ISOPROTERENOL ──────────────────────────────────────────────────── */
    "isoproterenol": {
      name: { pt: 'Isoproterenol / Isoprenalina', es: 'Isoproterenol / Isoprenalina' },
      category: 'cardiologia',
      class: { pt: 'Agonista Adrenérgico Beta Puro (B1 e B2)', es: 'Agonista Adrenérgico Beta Puro (B1 y B2)' },
      indications: {
        pt: ['Bradicardia refratária grave ou Bloqueio Atrioventricular (BAVT) enquanto aguarda marcapasso', 'Arritmia Torsades de Pointes induzida por bradicardia (como ponte / overdrive químico)', 'Intoxicação por betabloqueadores'],
        es: ['Bradicardia refractaria grave o Bloqueo Auriculoventricular (BAVC) mientras se espera marcapasos', 'Arritmia Torsades de Pointes inducida por bradicardia (como puente / overdrive químico)', 'Intoxicación por betabloqueantes']
      },
      commercialNames: { br: ['Isoprel', 'Aleudrina'], ar: ['Isoprenalina'] },
      presentation: { pt: ['Ampolas IV 0,2 mg/mL (1 mL)'], es: ['Ampollas IV 0,2 mg/mL (1 mL)'] },
      mechanism: {
        pt: 'Estimula EXCLUSIVAMENTE os receptores Beta-1 e Beta-2 adrenérgicos (ação Alfa nula). No Beta-1 (coração), gera inotropismo (força) e cronotropismo (frequência) absurdamente positivos. No Beta-2 (vasos e brônquios), gera forte vasodilatação periférica e broncodilatação. O resultado final é um CORAÇÃO ACELERADO batendo contra VASOS RELAXADOS (aumenta o débito, mas pode derrubar a pressão diastólica e isquemiar o coração).',
        es: 'Estimula EXCLUSIVAMENTE los receptores Beta-1 y Beta-2 adrenérgicos (acción Alfa nula). En el Beta-1 (corazón), genera inotropismo (fuerza) y cronotropismo (frecuencia) absurdamente positivos. En el Beta-2 (vasos y bronquios), genera fuerte vasodilatación periférica y broncodilatación. El resultado final es un CORAZÓN ACELERADO latiendo contra VASOS RELAJADOS (aumenta el gasto, pero puede derrumbar la presión diastólica e isquemiar el corazón).'
      },
      dose: {
        adult: {
          pt: 'Infusão IV Contínua: 2 a 10 mcg/min (titulado rigorosamente pelo alvo de frequência cardíaca).',
          es: 'Infusión IV Continua: 2 a 10 mcg/min (titulado rigurosamente por el objetivo de frecuencia cardíaca).'
        },
        pediatric: {
          pt: '0,05 a 2 mcg/kg/min IV.',
          es: '0,05 a 2 mcg/kg/min IV.'
        }
      },
      administration: { pt: ['Diluir em SF ou SG e usar em bomba de infusão. Monitorização eletrocardiográfica ininterrupta obrigatória.'], es: ['Diluir en SF o SG y usar en bomba de infusión. Monitorización electrocardiográfica ininterrumpida obligatoria.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Metabolizado pelas enzimas COMT. Sem ajuste.', es: 'Metabolizado por las enzimas COMT. Sin ajuste.' } },
      commonAdverseEffects: { pt: ['Palpitações severas', 'Tremores e ansiedade', 'Flushing (vermelhidão/calor)'], es: ['Palpitaciones severas', 'Temblores y ansiedad', 'Flushing (enrojecimiento/calor)'] },
      dangerousAdverseEffects: { pt: ['Taquicardia Ventricular / Fibrilação Ventricular (pelo extremo estímulo cardíaco)', 'Isquemia miocárdica fatal (aumenta brutalmente o consumo de oxigênio cardíaco ao mesmo tempo que dilata os vasos e rouba fluxo coronariano)', 'Hipotensão diastólica grave'], es: ['Taquicardia Ventricular / Fibrilación Ventricular (por el extremo estímulo cardíaco)', 'Isquemia miocárdica fatal (aumenta brutalmente el consumo de oxígeno cardíaco al mismo tiempo que dilata los vasos y roba flujo coronario)', 'Hipotensión diastólica grave'] },
      contraindications: {
        absolute: { pt: ['Infarto Agudo do Miocárdio ativo (o coração vai necrosar devido ao aumento do consumo de oxigênio)', 'Taquicardias prévias', 'Intoxicação digitálica'], es: ['Infarto Agudo de Miocardio activo (el corazón va a necrosar debido al aumento del consumo de oxígeno)', 'Taquicardias previas', 'Intoxicación digitálica'] },
        relative: { pt: ['Hipertireoidismo severo'], es: ['Hipertiroidismo severo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Ponte pura para o marcapasso definitivo/temporário em emergências de bradicardia. NÃO deve ser usado a longo prazo. O uso excessivo queima as reservas do miocárdio.', es: 'Puente puro para el marcapasos definitivo/temporal en emergencias de bradicardia. NO debe ser usado a largo plazo. El uso excesivo quema las reservas del miocardio.' }
      }
    },

/* ── ESMOLOL IV ─────────────────────────────────────────────────────── */
    "esmolol": {
      name: { pt: 'Esmolol IV', es: 'Esmolol IV' },
      category: 'cardiologia',
      class: { pt: 'Betabloqueador Cardioseletivo (B1) de Ação Ultra-Curta', es: 'Betabloqueante Cardioselectivo (B1) de Acción Ultra-Corta' },
      indications: {
        pt: ['Dissecção Aguda de Aorta (para controle imediato do dP/dt - cisalhamento do vaso)', 'Crise Tireotóxica na UTI', 'Taquicardia supraventricular intraoperatória ou emergencial'],
        es: ['Disección Aguda de Aorta (para control inmediato del dP/dt - cizallamiento del vaso)', 'Crisis Tirotoxicósica en la UCI', 'Taquicardia supraventricular intraoperatoria o de emergencia']
      },
      commercialNames: { br: ['Brevibloc'], ar: ['Brevibloc'] },
      presentation: { pt: ['Frasco-ampola IV 10 mg/mL (10 mL = 100 mg) ou bolsas prontas de 250 mL'], es: ['Vial IV 10 mg/mL (10 mL = 100 mg) o bolsas listas de 250 mL'] },
      mechanism: {
        pt: 'Antagonista competitivo puro dos receptores Beta-1 no coração. Reduz rapidamente a frequência cardíaca (cronotropismo negativo) e a força de contração. O seu brilhantismo: É hidrolisado rapidamente por esterases presentes nas hemácias (glóbulos vermelhos). Isso confere ao Esmolol uma meia-vida incrivelmente curta de APENAS 9 MINUTOS. É a droga perfeita para controle minuto a minuto (liga a bomba a FC cai, desliga a bomba a FC volta ao normal em 15 min).',
        es: 'Antagonista competitivo puro de los receptores Beta-1 en el corazón. Reduce rápidamente la frecuencia cardíaca (cronotropismo negativo) y la fuerza de contracción. Su brillantez: Es hidrolizado rápidamente por esterasas presentes en los hematíes (glóbulos rojos). Esto confiere al Esmolol una vida media increíblemente corta de SOLO 9 MINUTOS. Es la droga perfecta para control minuto a minuto (enciende la bomba la FC cae, apaga la bomba la FC vuelve a la normalidad en 15 min).'
      },
      dose: {
        adult: {
          pt: 'Bolus de ataque: 500 mcg/kg em 1 minuto. Manutenção: Infusão IV contínua de 50 a 200 mcg/kg/min.',
          es: 'Bolo de ataque: 500 mcg/kg en 1 minuto. Mantenimiento: Infusión IV continua de 50 a 200 mcg/kg/min.'
        },
        pediatric: {
          pt: 'Bolus 100-500 mcg/kg seguido de infusão 25-100 mcg/kg/min.',
          es: 'Bolo 100-500 mcg/kg seguido de infusión 25-100 mcg/kg/min.'
        }
      },
      administration: { pt: ['Bomba de infusão contínua exclusiva. Titulação agressiva e rápida permitida.'], es: ['Bomba de infusión continua exclusiva. Titulación agresiva y rápida permitida.'] },
      renalAdjustment: { required: false, message: { pt: 'Metabolismo dependente do sangue (esterases). Seguro em falência renal aguda.', es: 'Metabolismo dependiente de la sangre (esterasas). Seguro en falla renal aguda.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Independente do fígado.', es: 'Independiente del hígado.' } },
      commonAdverseEffects: { pt: ['Hipotensão arterial (muito frequente, porém de fácil reversão reduzindo a bomba)', 'Flebite na punção'], es: ['Hipotensión arterial (muy frecuente, pero de fácil reversión reduciendo la bomba)', 'Flebitis en la punción'] },
      dangerousAdverseEffects: { pt: ['Bradicardia severa', 'Broncoespasmo (embora seja seletivo B1, em altas doses pode bloquear o pulmão B2)', 'Choque cardiogênico induzido'], es: ['Bradicardia severa', 'Broncoespasmo (aunque sea selectivo B1, en altas dosis puede bloquear el pulmón B2)', 'Choque cardiogénico inducido'] },
      contraindications: {
        absolute: { pt: ['Choque cardiogênico prévio / Insuficiência cardíaca descompensada', 'Bloqueio Atrioventricular de 2º ou 3º grau', 'Doença do Nó Sinusal'], es: ['Choque cardiogénico previo / Insuficiencia cardíaca descompensada', 'Bloqueo Auriculoventricular de 2º o 3º grado', 'Enfermedad del Nodo Sinusal'] },
        relative: { pt: ['Asma brônquica severa em atividade'], es: ['Asma bronquial severa en actividad'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Na Dissecção de Aorta, o Esmolol DEVE SER LIGADO ANTES do Nitroprussiato de Sódio. Se você der um vasodilatador primeiro, ocorrerá taquicardia reflexa que rasgará o restante da aorta. Primeiro bloqueie o coração (Esmolol), depois dilate o vaso.', es: 'En la Disección de Aorta, el Esmolol DEBE ENCENDERSE ANTES que el Nitroprusiato de Sodio. Si das un vasodilatador primero, ocurrirá taquicardia refleja que rasgará el resto de la aorta. Primero bloquea el corazón (Esmolol), luego dilata el vaso.' }
      }
    },

/* ── METOPROLOL IV ──────────────────────────────────────────────────── */
    "metoprolol_iv": {
      name: { pt: 'Metoprolol IV', es: 'Metoprolol IV' },
      category: 'cardiologia',
      class: { pt: 'Betabloqueador Cardioseletivo (B1)', es: 'Betabloqueante Cardioselectivo (B1)' },
      indications: {
        pt: ['Controle agudo da Frequência Cardíaca na Fibrilação Atrial e Flutter Atrial', 'Infarto Agudo do Miocárdio (reduzir dor, isquemia e risco de fibrilação)', 'Emergências hipertensivas associadas a síndromes coronarianas'],
        es: ['Control agudo de la Frecuencia Cardíaca en la Fibrilación Auricular y Flutter Auricular', 'Infarto Agudo de Miocardio (reducir dolor, isquemia y riesgo de fibrilación)', 'Emergencias hipertensivas asociadas a síndromes coronarios']
      },
      commercialNames: { br: ['Seloken IV'], ar: ['Beloc IV', 'Metoprolol'] },
      presentation: { pt: ['Ampolas IV 1 mg/mL (5 mL = 5 mg)'], es: ['Ampollas IV 1 mg/mL (5 mL = 5 mg)'] },
      mechanism: {
        pt: 'Bloqueador competitivo altamente seletivo dos receptores Beta-1 no coração. Diminui a frequência sinusal, lentifica a condução do nódulo atrioventricular (AV) e reduz a contratilidade (Inotrópico e Cronotrópico negativos). Diferente do esmolol, possui meia-vida duradoura no plasma (3 a 4 horas), sendo ideal para estabilização de longo prazo.',
        es: 'Bloqueador competitivo altamente selectivo de los receptores Beta-1 en el corazón. Disminuye la frecuencia sinusal, lentifica la conducción del nódulo auriculoventricular (AV) y reduce la contractilidad (Inotrópico y Cronotrópico negativos). A diferencia del esmolol, posee vida media duradera en el plasma (3 a 4 horas), siendo ideal para estabilización a largo plazo.'
      },
      dose: {
        adult: {
          pt: 'Bolus IV Lento: 2,5 mg a 5 mg administrados em 2 minutos. Avaliar PA/FC e repetir a cada 5 minutos, até o limite MÁXIMO de 15 mg (3 ampolas).',
          es: 'Bolo IV Lento: 2,5 mg a 5 mg administrados en 2 minutos. Evaluar PA/FC y repetir cada 5 minutos, hasta el límite MÁXIMO de 15 mg (3 ampollas).'
        },
        pediatric: {
          pt: '0,1 a 0,2 mg/kg IV lento (Uso muito restrito e raro).',
          es: '0,1 a 0,2 mg/kg IV lento (Uso muy restringido y raro).'
        }
      },
      administration: { pt: ['IV direto SEM diluição, infundido a uma taxa de 1 mg por minuto. Monitoração de ECG ininterrupta obrigatória.'], es: ['IV directo SIN dilución, infundido a una tasa de 1 mg por minuto. Monitorización de ECG ininterrumpida obligatoria.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Metabolismo hepático severo (CYP2D6). Usar as menores doses (ex: bolus de 2,5mg) em cirróticos.', es: 'Metabolismo hepático severo (CYP2D6). Usar las menores dosis (ej: bolo de 2,5mg) en cirróticos.' } },
      commonAdverseEffects: { pt: ['Hipotensão postural e tontura', 'Fadiga', 'Extremidades frias'], es: ['Hipotensión postural y mareo', 'Fatiga', 'Extremidades frías'] },
      dangerousAdverseEffects: { pt: ['Choque cardiogênico irreversível (se dado num coração já em falência, ex: Killip III/IV)', 'Bradicardia extrema / Bloqueio AV total', 'Broncoespasmo agudo em asmáticos sensíveis'], es: ['Choque cardiogénico irreversible (si se da en un corazón ya en fallo, ej: Killip III/IV)', 'Bradicardia extrema / Bloqueo AV total', 'Broncoespasmo agudo en asmáticos sensibles'] },
      contraindications: {
        absolute: { pt: ['Frequência Cardíaca < 45 bpm', 'PAS < 100 mmHg basal', 'Insuficiência Cardíaca Aguda com congestão pulmonar auscultável ativa (crepitações)', 'Uso recente de Verapamil/Diltiazem IV'], es: ['Frecuencia Cardíaca < 45 lpm', 'PAS < 100 mmHg basal', 'Insuficiencia Cardíaca Aguda con congestión pulmonar auscultable activa (crepitaciones)', 'Uso reciente de Verapamilo/Diltiazem IV'] },
        relative: { pt: ['Asma brônquica / DPOC com broncoespasmo ativo'], es: ['Asma bronquial / EPOC con broncoespasmo activo'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Não force a mão. Se após as 3 ampolas (15 mg totais) a Fibrilação Atrial não controlar a frequência, o paciente necessita de Amiodarona ou Cardioversão Elétrica. O Antídoto para intoxicação maciça por betabloqueadores é o GLUCAGON IV.', es: 'No fuerce la mano. Si tras las 3 ampollas (15 mg totales) la Fibrilación Auricular no controla la frecuencia, el paciente necesita Amiodarona o Cardioversión Eléctrica. El Antídoto para intoxicación masiva por betabloqueantes es el GLUCAGÓN IV.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 13 (alteplase · levosimendana · isoproterenol · esmolol · metoprolol_iv — BUILD 330 Lote 3) */

})();

/* ─────────────────────────────────────────────────────────────────────────
   GRUPO 14 — Cardiologia Fase 2 (hidralazina_iv · enalaprilato · milrinona · mexiletina · verapamil_iv)
   BUILD 332 Lote 4 — _injectObjectDB()
───────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  Object.assign(window.ANALGESICOS_DRUGS_DB, {

/* ── HIDRALAZINA IV ─────────────────────────────────────────────────── */
    "hidralazina_iv": {
      name: { pt: 'Hidralazina IV', es: 'Hidralazina IV' },
      category: 'cardiologia',
      class: { pt: 'Vasodilatador Arterial Direto', es: 'Vasodilatador Arterial Directo' },
      indications: {
        pt: ['Emergências hipertensivas associadas à gestação (Pré-eclâmpsia grave e Eclâmpsia)', 'Pós-operatório de cirurgia cardíaca e controle de crise hipertensiva severa'],
        es: ['Emergencias hipertensivas asociadas a la gestación (Preeclampsia grave y Eclampsia)', 'Posoperatorio de cirugía cardíaca y control de crisis hipertensiva severa']
      },
      commercialNames: { br: ['Apresolina IV', 'Nepresol'], ar: ['Apresolina'] },
      presentation: { pt: ['Ampolas IV/IM 20 mg/mL (1 mL)'], es: ['Ampollas IV/IM 20 mg/mL (1 mL)'] },
      mechanism: {
        pt: 'Atua diretamente no relaxamento do músculo liso ARTERIAL (não atua nas veias), promovendo forte queda na resistência vascular sistêmica e na pressão arterial. O cérebro responde a essa queda ativando o sistema nervoso simpático, o que gera aumento brutal da frequência cardíaca e contratilidade miocárdica (taquicardia reflexa profunda).',
        es: 'Actúa directamente en la relajación del músculo liso ARTERIAL (no actúa en las venas), promoviendo fuerte caída en la resistencia vascular sistémica y en la presión arterial. El cerebro responde a esta caída activando el sistema nervioso simpático, lo que genera aumento brutal de la frecuencia cardíaca y contractilidad miocárdica (taquicardia refleja profunda).'
      },
      dose: {
        adult: {
          pt: 'Crise Hipertensiva / Eclâmpsia: 5 a 20 mg IV LENTO. Pode ser repetido a cada 20-30 minutos (Máximo de 40 mg por dose).',
          es: 'Crisis Hipertensiva / Eclampsia: 5 a 20 mg IV LENTO. Puede repetirse cada 20-30 minutos (Máximo de 40 mg por dosis).'
        },
        pediatric: {
          pt: '0,1 a 0,5 mg/kg/dose IV a cada 6 a 8 horas.',
          es: '0,1 a 0,5 mg/kg/dosis IV cada 6 a 8 horas.'
        }
      },
      administration: { pt: ['Administrar IV direto lento em 1 a 2 minutos.', 'Pico de ação ocorre em 10 a 20 minutos. Não redosar antes de 20 minutos para evitar hipotensão acumulada fatal.'], es: ['Administrar IV directo lento en 1 a 2 minutos.', 'El pico de acción ocurre en 10 a 20 minutos. No redosificar antes de 20 minutos para evitar hipotensión acumulada fatal.'] },
      renalAdjustment: { required: true, message: { pt: 'Aumentar intervalo entre as doses (cada 8-12h) se ClCr < 10 mL/min, para evitar acúmulo.', es: 'Aumentar intervalo entre las dosis (cada 8-12h) si ClCr < 10 mL/min, para evitar acumulación.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Acetilação lenta no fígado. Reduzir dose em cirróticos.', es: 'Acetilación lenta en el hígado. Reducir dosis en cirróticos.' } },
      commonAdverseEffects: { pt: ['Taquicardia severa induzida', 'Cefaleia pulsátil', 'Flushing (calor e vermelhidão facial)'], es: ['Taquicardia severa inducida', 'Cefalea pulsátil', 'Flushing (calor y enrojecimiento facial)'] },
      dangerousAdverseEffects: { pt: ['Isquemia miocárdica (o coração acelera e precisa de oxigênio, mas a PA caiu demais para perfundir a coronária)', 'Síndrome Lupus-Like induzida por fármaco (uso crônico)'], es: ['Isquemia miocárdica (el corazón acelera y necesita oxígeno, pero la PA cayó demasiado para perfundir la coronaria)', 'Síndrome Lupus-Like inducido por fármaco (uso crónico)'] },
      contraindications: {
        absolute: { pt: ['Dissecção Aguda da Aorta (o inotropismo gerado rasga ainda mais a artéria)', 'Doença arterial coronariana severa / Infarto agudo'], es: ['Disección Aguda de la Aorta (el inotropismo generado rasga aún más la arteria)', 'Enfermedad arterial coronaria severa / Infarto agudo'] },
        relative: { pt: ['Lupus Eritematoso Sistêmico prévio', 'Aneurismas cerebrais instáveis'], es: ['Lupus Eritematoso Sistémico previo', 'Aneurismas cerebrales inestables'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A Hidralazina injetável NUNCA deve ser a primeira escolha para crise hipertensiva no paciente cardiopata/infartado (preferir Nitroglicerina), pelo altíssimo risco de agravar isquemias devido à taquicardia reflexa incontrolável.', es: 'La Hidralazina inyectable NUNCA debe ser la primera elección para crisis hipertensiva en el paciente cardiópata/infartado (preferir Nitroglicerina), por el altísimo riesgo de agravar isquemias debido a la taquicardia refleja incontrolable.' }
      }
    },

/* ── ENALAPRILATO IV ────────────────────────────────────────────────── */
    "enalaprilato": {
      name: { pt: 'Enalaprilato IV', es: 'Enalaprilat IV' },
      category: 'cardiologia',
      class: { pt: 'Inibidor da ECA (Enzima Conversora de Angiotensina) Ativo', es: 'Inhibidor de la ECA (Enzima Convertidora de Angiotensina) Activo' },
      indications: {
        pt: ['Emergências hipertensivas (especialmente em Insuficiência Cardíaca, IAM ou Encefalopatia Hipertensiva)', 'Pacientes impossibilitados de receber medicações orais'],
        es: ['Emergencias hipertensivas (especialmente en Insuficiencia Cardíaca, IAM o Encefalopatía Hipertensiva)', 'Pacientes imposibilitados de recibir medicaciones orales']
      },
      commercialNames: { br: ['Enalaprilato IV'], ar: ['Enalaprilato'] },
      presentation: { pt: ['Ampolas IV 1,25 mg/mL (1 mL)'], es: ['Ampollas IV 1,25 mg/mL (1 mL)'] },
      mechanism: {
        pt: 'A forma endovenosa ATIVA do enalapril (pró-fármaco oral). Como não precisa passar pelo fígado para ser ativado, inibe imediata e drasticamente a conversão de Angiotensina I em Angiotensina II no plasma. Bloqueia o sistema renina-angiotensina-aldosterona (SRAA), causando vasodilatação potente, redução do volume sanguíneo (queda da aldosterona) e inibição da degradação da bradicinina.',
        es: 'La forma endovenosa ACTIVA del enalapril (profármaco oral). Como no necesita pasar por el hígado para ser activado, inhibe inmediata y drásticamente la conversión de Angiotensina I en Angiotensina II en el plasma. Bloquea el sistema renina-angiotensina-aldosterona (SRAA), causando vasodilatación potente, reducción del volumen sanguíneo (caída de la aldosterona) e inhibición de la degradación de la bradicinina.'
      },
      dose: {
        adult: {
          pt: '1,25 a 5 mg IV a cada 6 horas. Iniciar com dose menor (0,625 mg) em pacientes em uso de diuréticos potentes.',
          es: '1,25 a 5 mg IV cada 6 horas. Iniciar con dosis menor (0,625 mg) en pacientes en uso de diuréticos potentes.'
        },
        pediatric: {
          pt: '5 a 10 mcg/kg IV a cada 8 a 24 horas (máx 1,25 mg/dose).',
          es: '5 a 10 mcg/kg IV cada 8 a 24 horas (máx 1,25 mg/dosis).'
        }
      },
      administration: { pt: ['Injeção IV LENTA (em pelo menos 5 minutos). O uso RÁPIDO causa colapso pressórico.'], es: ['Inyección IV LENTA (en al menos 5 minutos). El uso RÁPIDO causa colapso presórico.'] },
      renalAdjustment: { required: true, message: { pt: 'Se ClCr < 30 mL/min, iniciar com a dose reduzida de 0,625 mg. Risco severo de falência renal aguda isquêmica.', es: 'Si ClCr < 30 mL/min, iniciar con la dosis reducida de 0,625 mg. Riesgo severo de falla renal aguda isquémica.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Como já é a molécula ativa (não precisa do fígado), é plenamente eficaz na cirrose hepática severa.', es: 'Como ya es la molécula activa (no necesita del hígado), es plenamente eficaz en la cirrosis hepática severa.' } },
      commonAdverseEffects: { pt: ['Hipotensão postural prolongada', 'Tosse seca', 'Piora aguda e transitória da creatinina'], es: ['Hipotensión postural prolongada', 'Tos seca', 'Empeoramiento agudo y transitorio de la creatinina'] },
      dangerousAdverseEffects: { pt: ['Hipercalemia grave (arritmias)', 'Angioedema orolingual (risco de asfixia)', 'Lesão Renal Aguda oligoanúrica'], es: ['Hiperpotasemia grave (arritmias)', 'Angioedema orolingual (riesgo de asfixia)', 'Lesión Renal Aguda oligoanúrica'] },
      contraindications: {
        absolute: { pt: ['Estenose bilateral da artéria renal', 'Gravidez (Teratogênico - agenesia renal fetal)', 'Histórico de Angioedema por IECA'], es: ['Estenosis bilateral de la arteria renal', 'Embarazo (Teratogénico - agenesia renal fetal)', 'Historial de Angioedema por IECA'] },
        relative: { pt: ['Hipercalemia basal severa (> 5.5 mEq/L)'], es: ['Hiperpotasemia basal severa (> 5.5 mEq/L)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Enalaprilato tem duração de ação de até 24 horas. Se o paciente evoluir com choque séptico ou hemorrágico pouco após a dose, a pressão será virtualmente irrecuperável mesmo com altas doses de noradrenalina, devido ao bloqueio maciço do SRAA.', es: 'El Enalaprilat tiene duración de acción de hasta 24 horas. Si el paciente evoluciona con choque séptico o hemorrágico poco después de la dosis, la presión será virtualmente irrecuperable incluso con altas dosis de noradrenalina, debido al bloqueo masivo del SRAA.' }
      }
    },

/* ── MEXILETINA ─────────────────────────────────────────────────────── */
    "mexiletina": {
      name: { pt: 'Mexiletina', es: 'Mexiletina' },
      category: 'cardiologia',
      class: { pt: 'Antiarrítmico Classe IB (Equivalente Oral da Lidocaína)', es: 'Antiarrítmico Clase IB (Equivalente Oral de la Lidocaína)' },
      indications: {
        pt: ['Taquicardias ventriculares severas e Extrassístoles ventriculares sintomáticas', 'Tratamento crônico de Síndromes de QT Longo (especialmente o LQT3)', 'Dores neuropáticas refratárias (off-label)'],
        es: ['Taquicardias ventriculares severas y Extrasístoles ventriculares sintomáticas', 'Tratamiento crónico de Síndromes de QT Largo (especialmente el LQT3)', 'Dolores neuropáticos refractarios (off-label)']
      },
      commercialNames: { br: ['Mexitil (Importação Especial)'], ar: ['Mexitil'] },
      presentation: { pt: ['Cápsulas 150 mg, 200 mg', 'Ampolas IV (Raras)'], es: ['Cápsulas 150 mg, 200 mg', 'Ampollas IV (Raras)'] },
      mechanism: {
        pt: 'Bloqueador potente e rápido dos canais de Sódio miocárdicos (Fase 0 do potencial de ação). Acelera a repolarização celular e encurta a duração do potencial de ação e do intervalo QT. É essencialmente a versão "via oral" da lidocaína venosa. Exerce poderoso efeito estabilizador de membrana, bloqueando circuitos de reentrada nos ventrículos.',
        es: 'Bloqueador potente y rápido de los canales de Sodio miocárdicos (Fase 0 del potencial de acción). Acelera la repolarización celular y acorta la duración del potencial de acción y del intervalo QT. Es esencialmente la versión "vía oral" de la lidocaína venosa. Ejerce poderoso efecto estabilizador de membrana, bloqueando circuitos de reentrada en los ventrículos.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 150 mg VO a cada 8 horas. (Titular a cada 3 dias). Dose máxima de manutenção: 1.200 mg/dia.',
          es: 'Iniciar con 150 mg VO cada 8 horas. (Titular cada 3 días). Dosis máxima de mantenimiento: 1.200 mg/día.'
        },
        pediatric: {
          pt: 'Arritmias graves congênitas: 2 a 5 mg/kg/dose VO a cada 8h.',
          es: 'Arritmias graves congénitas: 2 a 5 mg/kg/dosis VO cada 8h.'
        }
      },
      administration: { pt: ['Tomar sempre COM ALIMENTOS ou leite. A intolerância gástrica (vômito violento) de estômago vazio é regra.'], es: ['Tomar siempre CON ALIMENTOS o leche. La intolerancia gástrica (vómito violento) con estómago vacío es regla.'] },
      renalAdjustment: { required: false, message: { pt: 'Evitar em ClCr < 10 mL/min sem monitorização plasmática rigorosa.', es: 'Evitar en ClCr < 10 mL/min sin monitorización plasmática rigurosa.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizada no fígado (CYP1A2 e CYP2D6). Reduzir agressivamente a dose na cirrose hepática a 25-30% do normal.', es: 'Extensamente metabolizada en el hígado (CYP1A2 y CYP2D6). Reducir agresivamente la dosis en la cirrosis hepática a 25-30% de lo normal.' } },
      commonAdverseEffects: { pt: ['Náuseas muito intensas e Azia', 'Tremores de extremidades', 'Tontura e marcha atáxica (embriaguez)'], es: ['Náuseas muy intensas y Acidez', 'Temblores de extremidades', 'Mareo y marcha atáxica (embriaguez)'] },
      dangerousAdverseEffects: { pt: ['Toxicidade do SNC (Convulsões intratáveis e Coma em overdoses)', 'Piora paradoxal de arritmias ventriculares', 'Hepatotoxicidade'], es: ['Toxicidad del SNC (Convulsiones intratables y Coma en sobredosis)', 'Empeoramiento paradójico de arritmias ventriculares', 'Hepatotoxicidad'] },
      contraindications: {
        absolute: { pt: ['Choque Cardiogênico', 'Bloqueio AV de 2º e 3º grau pré-existentes sem marcapasso'], es: ['Choque Cardiogénico', 'Bloqueo AV de 2º y 3º grado preexistentes sin marcapasos'] },
        relative: { pt: ['Disfunção hepática grave', 'Transtornos convulsivos refratários'], es: ['Disfunción hepática grave', 'Trastornos convulsivos refractarios'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Atenção na pediatria cardiológica. Possui margem terapêutica extremamente estreita (Nível tóxico > 2 mcg/mL). Se o paciente começar a apresentar tremores finos e fala arrastada, o medicamento está intoxicando o cérebro.', es: 'Atención en la pediatría cardiológica. Posee margen terapéutico extremadamente estrecho (Nivel tóxico > 2 mcg/mL). Si el paciente empieza a presentar temblores finos y habla arrastrada, el medicamento está intoxicando el cerebro.' }
      }
    },

/* ── VERAPAMIL IV ───────────────────────────────────────────────────── */
    "verapamil_iv": {
      name: { pt: 'Verapamil IV', es: 'Verapamilo IV' },
      category: 'cardiologia',
      class: { pt: 'Bloqueador de Canal de Cálcio Não-Diidropiridínico (Antiarrítmico Classe IV)', es: 'Bloqueador de Canal de Calcio No-Dihidropiridínico (Antiarrítmico Clase IV)' },
      indications: {
        pt: ['Reversão ágil de Taquicardia Supraventricular Paroxística (TSVP) no PS', 'Controle crônico de frequência na Fibrilação Atrial e Flutter Atrial', 'Tratamento de Cefaleia em Salvas refratária (Cluster headache)'],
        es: ['Reversión ágil de Taquicardia Supraventricular Paroxística (TSVP) en Urgencias', 'Control crónico de frecuencia en la Fibrilación Auricular y Flutter Auricular', 'Tratamiento de Cefalea en Racimos refractaria (Cluster headache)']
      },
      commercialNames: { br: ['Dilacoron'], ar: ['Isoptin'] },
      presentation: { pt: ['Ampolas IV 2,5 mg/mL (2 mL)'], es: ['Ampollas IV 2,5 mg/mL (2 mL)'] },
      mechanism: {
        pt: 'Bloqueia seletivamente a entrada de cálcio nos canais do tipo L das células do músculo cardíaco e liso. Concentra sua ação no Nódulo Sinusal (SA) e Atrioventricular (AV), atrasando drasticamente a condução elétrica cardíaca e quebrando circuitos de taquicardia de reentrada. Diferente do anlodipino, DEPRIME A FORÇA DE CONTRAÇÃO do coração (inotrópico e cronotrópico negativo violento).',
        es: 'Bloquea selectivamente la entrada de calcio en los canales de tipo L de las células del músculo cardíaco y liso. Concentra su acción en el Nódulo Sinusal (SA) y Auriculoventricular (AV), retrasando drásticamente la conducción eléctrica cardíaca y rompiendo circuitos de taquicardia de reentrada. A diferencia del amlodipino, DEPRIME LA FUERZA DE CONTRACCIÓN del corazón (inotrópico y cronotrópico negativo violento).'
      },
      dose: {
        adult: {
          pt: 'Reversão de TSVP: 2,5 a 5 mg IV lento. Se não reverter, dar nova dose de 5 a 10 mg após 15 a 30 min. (Máximo total de 20 mg).',
          es: 'Reversión de TSVP: 2,5 a 5 mg IV lento. Si no revierte, dar nueva dosis de 5 a 10 mg tras 15 a 30 min. (Máximo total de 20 mg).'
        },
        pediatric: {
          pt: '0,1 a 0,3 mg/kg IV lento (Uso restrito sob monitorização de UTI).',
          es: '0,1 a 0,3 mg/kg IV lento (Uso restringido bajo monitorización de UCI).'
        }
      },
      administration: { pt: ['Injeção IV LENTA (em pelo menos 2 a 3 minutos).', 'Monitorização Eletrocardiográfica obrigatória para detectar bloqueios AV súbitos.'], es: ['Inyección IV LENTA (en al menos 2 a 3 minutos).', 'Monitorización Electrocardiográfica obligatoria para detectar bloqueos AV súbitos.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito agudo.', es: 'Sin necesidad de ajuste estricto agudo.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Altíssimo metabolismo de primeira passagem hepático. Reduzir a dose severamente na insuficiência hepática.', es: 'Altísimo metabolismo de primer paso hepático. Reducir la dosis severamente en insuficiencia hepática.' } },
      commonAdverseEffects: { pt: ['Hipotensão aguda e tontura', 'Constipação Intestinal (muito frequente no uso crônico)', 'Edema de membros inferiores'], es: ['Hipotensión aguda y mareo', 'Constipación Intestinal (muy frecuente en el uso crónico)', 'Edema de miembros inferiores'] },
      dangerousAdverseEffects: { pt: ['Choque cardiogênico / Edema Agudo de Pulmão (se aplicado em coração fraco)', 'Bloqueio AV total e Assistolia', 'Taquicardia ventricular maligna (se aplicado de forma errada no paciente com WPW e FA)'], es: ['Choque cardiogénico / Edema Agudo de Pulmón (si aplicado en corazón débil)', 'Bloqueo AV total y Asistolia', 'Taquicardia ventricular maligna (si aplicado de forma incorrecta en el paciente con WPW y FA)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Cardíaca Congestiva descompensada ou Fração de Ejeção Baixa (<40%)', 'Síndrome de Wolff-Parkinson-White associado a Fibrilação Atrial (causa morte súbita)', 'Uso IV conjunto com betabloqueadores'], es: ['Insuficiencia Cardíaca Congestiva descompensada o Fracción de Eyección Baja (<40%)', 'Síndrome de Wolff-Parkinson-White asociado a Fibrilación Auricular (causa muerte súbita)', 'Uso IV conjunto con betabloqueantes'] },
        relative: { pt: ['Hipotensão basal severa'], es: ['Hipotensión basal severa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ERRO TÉCNICO LETAL: Se um paciente tiver Fibrilação Atrial + Síndrome de WPW e receber Verapamil, o nódulo AV trava. Os impulsos dos átrios (>300 bpm) descem inteiramente pelo Feixe Acessório de Kent, fazendo os ventrículos baterem a 300 bpm, gerando Fibrilação Ventricular imediata. Antídoto base: Gluconato de Cálcio.', es: 'ERROR TÉCNICO LETAL: Si un paciente tiene Fibrilación Auricular + Síndrome de WPW y recibe Verapamilo, el nódulo AV se traba. Los impulsos de las aurículas (>300 lpm) bajan enteramente por el Haz Accesorio de Kent, haciendo que los ventrículos latan a 300 lpm, generando Fibrilación Ventricular inmediata. Antídoto base: Gluconato de Calcio.' }
      }
    }

  }); /* fim Object.assign ANALGESICOS_DRUGS_DB — Grupo 14 (hidralazina_iv · enalaprilato · milrinona · mexiletina · verapamil_iv — BUILD 332 Lote 4) */

})();

})(); /* fim da IIFE do módulo analgésicos */
