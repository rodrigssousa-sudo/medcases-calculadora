/* ============================================================
   MedCases Pro — Módulo: ENDOCRINOLOGIA
   Expõe: window.ENDOCRINO_DRUGS_DB
   Schema completo (4-Block UI):
   {
     id, name, class, category:{pt,es}, color, colorTxt, icon,
     safetyLevel: 'warn' | 'danger'
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
     renalTable?: [ { labelPt, labelEs, range, cls, adjPt, adjEs } ]
     safety: {
       pregnancy: { grade, notePt, noteEs },
       lactation:  { safe, notePt, noteEs },
       renal:      { notePt, noteEs },
       hepatic:    { notePt, noteEs }
     }
     interactions?: [ { drug, effectPt, effectEs, severity:'low'|'mod'|'high' } ]
     dilution?: { volumePt, volumeEs, timePt, timeEs, notePt, noteEs }
   }
   BUILD 308 — Lote 1 (Insulinas):
     insulina_glargina  — Análoga Basal Longa Duração
     insulina_detemir   — Análoga Basal
     insulina_degludeca — Análoga Basal Ultra-Longa Duração
     insulina_asparte   — Análoga Prandial Ultra-Rápida
     insulina_lispro    — Análoga Prandial Ultra-Rápida
============================================================ */

(function () {

  window.ENDOCRINO_DRUGS_DB = {};

  Object.assign(window.ENDOCRINO_DRUGS_DB, {

/* ── INSULINA GLARGINA ──────────────────────────────────────────────── */
    "insulina_glargina": {
      name: { pt: 'Insulina Glargina', es: 'Insulina Glargina' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Basal de Longa Duração', es: 'Insulina Análoga Basal de Larga Duración' },
      indications: {
        pt: ['Controle glicêmico basal crônico em Diabetes Mellitus Tipo 1 e Tipo 2', 'Controle basal na transição da bomba de infusão contínua para SC em UTI'],
        es: ['Control glucémico basal crónico en Diabetes Mellitus Tipo 1 y Tipo 2', 'Control basal en la transición de la bomba de infusión continua a SC en UCI']
      },
      commercialNames: { br: ['Lantus', 'Toujeo', 'Basaglar'], ar: ['Lantus', 'Toujeo', 'Glaritus'] },
      presentation: { pt: ['Caneta/Refil SC 100 UI/mL (Lantus)', 'Caneta SC 300 UI/mL (Toujeo)'], es: ['Pluma/Cartucho SC 100 UI/mL (Lantus)', 'Pluma SC 300 UI/mL (Toujeo)'] },
      mechanism: {
        pt: 'Análogo de insulina formulado em um pH ácido (pH 4.0). Ao ser injetada no tecido subcutâneo (pH neutro), a solução ácida é neutralizada, formando micro-precipitados. Esses cristais liberam a insulina lentamente na corrente sanguínea ao longo de 24 horas, promovendo um perfil de ação sem picos agudos ("peakless"), mimetizando a secreção pancreática basal.',
        es: 'Análogo de insulina formulado en un pH ácido (pH 4.0). Al inyectarse en el tejido subcutáneo (pH neutro), la solución ácida se neutraliza, formando microprecipitados. Estos cristales liberan la insulina lentamente al torrente sanguíneo a lo largo de 24 horas, promoviendo un perfil de acción sin picos agudos ("peakless"), mimetizando la secreción pancreática basal.'
      },
      dose: {
        adult: {
          pt: 'Início DM2: 10 UI/dia SC ou 0,1 a 0,2 UI/kg/dia. Ajustar a dose a cada 2 a 3 dias conforme a glicemia de jejum alvo.',
          es: 'Inicio DM2: 10 UI/día SC o 0,1 a 0,2 UI/kg/día. Ajustar la dosis cada 2 a 3 días según la glucemia en ayunas objetivo.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 2 anos de idade (Lantus) ou 6 anos (Toujeo). Ajuste individualizado por peso e necessidade basal.',
          es: 'Aprobado a partir de 2 años de edad (Lantus) o 6 años (Toujeo). Ajuste individualizado por peso y necesidad basal.'
        }
      },
      administration: { pt: ['Aplicação subcutânea estritamente 1x/dia, SEMPRE no mesmo horário.', 'NUNCA misturar com outras insulinas na mesma seringa (a alteração do pH destrói a liberação lenta e causa hipoglicemia fatal).', 'NUNCA administrar por via IV.'], es: ['Aplicación subcutánea estrictamente 1 vez/día, SIEMPRE en el mismo horario.', 'NUNCA mezclar con otras insulinas en la misma jeringa (la alteración del pH destruye la liberación lenta y causa hipoglucemia fatal).', 'NUNCA administrar por vía IV.'] },
      renalAdjustment: { required: true, message: { pt: 'As necessidades de insulina DIMINUEM na insuficiência renal (a insulina não é degradada pelo rim doente). Risco agudo de hipoglicemia; reduzir a dose empiricamente.', es: 'Las necesidades de insulina DISMINUYEN en la insuficiencia renal (la insulina no es degradada por el riñón enfermo). Riesgo agudo de hipoglucemia; reducir la dosis empíricamente.' } },
      hepaticAdjustment: { required: true, message: { pt: 'As necessidades podem diminuir severamente devido à perda de gliconeogênese hepática no cirrótico.', es: 'Las necesidades pueden disminuir severamente debido a la pérdida de gluconeogénesis hepática en el cirrótico.' } },
      commonAdverseEffects: { pt: ['Dor e ardor no local da injeção (devido ao pH ácido da formulação)', 'Ganho de peso', 'Lipohipertrofia (se não houver rodízio do local)'], es: ['Dolor y ardor en el sitio de inyección (debido al pH ácido de la formulación)', 'Ganancia de peso', 'Lipohipertrofia (si no hay rotación del lugar)'] },
      dangerousAdverseEffects: { pt: ['Choque hipoglicêmico severo (mais frequente de madrugada se dose excessiva)', 'Hipocalemia grave (a insulina força o potássio para dentro das células)'], es: ['Choque hipoglucémico severo (más frecuente de madrugada si dosis excesiva)', 'Hipopotasemia grave (la insulina fuerza el potasio hacia dentro de las células)'] },
      contraindications: {
        absolute: { pt: ['Episódio ativo de hipoglicemia', 'Via endovenosa'], es: ['Episodio activo de hipoglucemia', 'Vía endovenosa'] },
        relative: { pt: ['Pacientes em jejum prolongado sem monitorização glicêmica estrita'], es: ['Pacientes en ayuno prolongado sin monitorización glucémica estricta'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'MEDICAMENTO DE ALTA VIGILÂNCIA. A transição de Insulina NPH (2x ao dia) para Glargina (1x ao dia) exige REDUÇÃO de 20% da dose total diária prévia para evitar hipoglicemia severa.', es: 'MEDICAMENTO DE ALTA VIGILANCIA. La transición de Insulina NPH (2 veces al día) a Glargina (1 vez al día) exige REDUCCIÓN del 20% de la dosis total diaria previa para evitar hipoglucemia severa.' }
      }
    },

/* ── INSULINA DETEMIR ───────────────────────────────────────────────── */
    "insulina_detemir": {
      name: { pt: 'Insulina Detemir', es: 'Insulina Detemir' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Basal', es: 'Insulina Análoga Basal' },
      indications: {
        pt: ['Controle glicêmico basal em DM1 e DM2'],
        es: ['Control glucémico basal en DM1 y DM2']
      },
      commercialNames: { br: ['Levemir'], ar: ['Levemir'] },
      presentation: { pt: ['Caneta/Refil SC 100 UI/mL'], es: ['Pluma/Cartucho SC 100 UI/mL'] },
      mechanism: {
        pt: 'Possui uma cadeia de ácido graxo (ácido mirístico) anexada à molécula de insulina. Isso faz com que as moléculas se liguem de forma reversível à albumina plasmática e intersticial, criando um efeito de "depósito" ou liberação sustentada. O tempo de ação é fortemente dose-dependente (frequentemente durando apenas 16 a 20 horas em doses mais baixas).',
        es: 'Posee una cadena de ácido graso (ácido mirístico) anexa a la molécula de insulina. Esto hace que las moléculas se unan de forma reversible a la albúmina plasmática e intersticial, creando un efecto de "depósito" o liberación sostenida. El tiempo de acción es fuertemente dosis-dependiente (frecuentemente durando solo 16 a 20 horas en dosis más bajas).'
      },
      dose: {
        adult: {
          pt: '0,1 a 0,2 UI/kg/dia SC. Em >50% dos pacientes, requer administração 2 vezes ao dia (12/12h) para garantir cobertura basal plena e evitar hiperglicemia de jejum.',
          es: '0,1 a 0,2 UI/kg/día SC. En >50% de los pacientes, requiere administración 2 veces al día (cada 12h) para garantizar cobertura basal plena y evitar hiperglucemia de ayuno.'
        },
        pediatric: {
          pt: 'Uso aprovado a partir de 1 ano de idade. Ajuste rigoroso por peso.',
          es: 'Uso aprobado a partir de 1 año de edad. Ajuste riguroso por peso.'
        }
      },
      administration: { pt: ['Aplicação estritamente subcutânea.', 'Não misturar com outras insulinas.'], es: ['Aplicación estrictamente subcutánea.', 'No mezclar con otras insulinas.'] },
      renalAdjustment: { required: true, message: { pt: 'Diminuir dose em insuficiência renal. Monitorar risco de hipoglicemia.', es: 'Disminuir dosis en insuficiencia renal. Monitorizar riesgo de hipoglucemia.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Diminuir dose na disfunção hepática severa.', es: 'Disminuir dosis en la disfunción hepática severa.' } },
      commonAdverseEffects: { pt: ['Ganho de peso (embora clinicamente tenda a ser menor que com Glargina ou NPH)', 'Reação alérgica no local da injeção'], es: ['Ganancia de peso (aunque clínicamente tienda a ser menor que con Glargina o NPH)', 'Reacción alérgica en el sitio de inyección'] },
      dangerousAdverseEffects: { pt: ['Hipoglicemia severa', 'Hipocalemia'], es: ['Hipoglucemia severa', 'Hipopotasemia'] },
      contraindications: {
        absolute: { pt: ['Hipoglicemia ativa'], es: ['Hipoglucemia activa'] },
        relative: { pt: ['Hipoalbuminemia grave (como a droga depende da albumina plasmática, níveis críticos de albumina < 2.0 podem acelerar o pico de ação e causar choque hipoglicêmico)'], es: ['Hipoalbuminemia grave (como la droga depende de la albúmina plasmática, niveles críticos de albúmina < 2.0 pueden acelerar el pico de acción y causar choque hipoglucémico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'Atenção na posologia: se prescrita 1x/dia (geralmente pela manhã), pode haver "escape" (falta de insulina) na madrugada, resultando em hiperglicemia severa ao acordar. Avaliar transição para 12/12h.', es: 'Atención en la posología: si prescrita 1 vez/día (generalmente por la mañana), puede haber "escape" (falta de insulina) en la madrugada, resultando en hiperglucemia severa al despertar. Evaluar transición a 12/12h.' }
      }
    },

/* ── INSULINA DEGLUDECA ─────────────────────────────────────────────── */
    "insulina_degludeca": {
      name: { pt: 'Insulina Degludeca', es: 'Insulina Degludec' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Basal de Ultra-Longa Duração', es: 'Insulina Análoga Basal de Ultra-Larga Duración' },
      indications: {
        pt: ['Controle glicêmico basal em DM1 e DM2', 'Pacientes com histórico de hipoglicemias noturnas severas com Glargina/NPH'],
        es: ['Control glucémico basal en DM1 y DM2', 'Pacientes con historial de hipoglucemias nocturnas severas con Glargina/NPH']
      },
      commercialNames: { br: ['Tresiba'], ar: ['Tresiba'] },
      presentation: { pt: ['Caneta SC 100 UI/mL', 'Caneta SC 200 UI/mL'], es: ['Pluma SC 100 UI/mL', 'Pluma SC 200 UI/mL'] },
      mechanism: {
        pt: 'A verdadeira insulina "ultra-longa" (> 42 horas de duração). Após injeção subcutânea, a ausência de fenol na solução faz as moléculas se auto-associarem, formando "multi-hexâmeros" gigantescos no tecido. Esses multi-hexâmeros liberam monômeros de insulina ativamente no sangue de forma gotejante, contínua e extremamente lenta. O perfil farmacocinético é o mais plano ("peakless") de todas as insulinas basais.',
        es: 'La verdadera insulina "ultra-larga" (> 42 horas de duración). Tras inyección subcutánea, la ausencia de fenol en la solución hace que las moléculas se autoasocien, formando "multi-hexámeros" gigantescos en el tejido. Estos multi-hexámeros liberan monómeros de insulina activamente en la sangre de forma goteante, continua y extremadamente lenta. El perfil farmacocinético es el más plano ("peakless") de todas las insulinas basales.'
      },
      dose: {
        adult: {
          pt: 'Início: 10 UI/dia. Transição de outras basais (1x/dia): proporção de 1:1. Transição de basais (2x/dia): reduzir a dose inicial total em 20%.',
          es: 'Inicio: 10 UI/día. Transición de otras basales (1 vez/día): proporción de 1:1. Transición de basales (2 veces/día): reducir la dosis inicial total en 20%.'
        },
        pediatric: {
          pt: 'Aprovado a partir de 1 ano de idade (mesmo princípio de titulação).',
          es: 'Aprobado a partir de 1 año de edad (mismo principio de titulación).'
        }
      },
      administration: { pt: ['Enorme vantagem clínica: Permite flexibilidade de horário! O intervalo mínimo entre doses é de 8 horas, e o máximo de 40 horas, ideal para trabalhadores em turnos ou pacientes com baixa adesão de horário.'], es: ['Enorme ventaja clínica: ¡Permite flexibilidad de horario! El intervalo mínimo entre dosis es de 8 horas, y el máximo de 40 horas, ideal para trabajadores en turnos o pacientes con baja adhesión de horario.'] },
      renalAdjustment: { required: true, message: { pt: 'Monitorar risco de hipoglicemia e reduzir dose empiricamente se disfunção renal progressiva.', es: 'Monitorizar riesgo de hipoglucemia y reducir dosis empíricamente si disfunción renal progresiva.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Necessidades de insulina basal caem em cirróticos graves. Titular a dose com cautela.', es: 'Necesidades de insulina basal caen en cirróticos graves. Titular la dosis con precaución.' } },
      commonAdverseEffects: { pt: ['Nasofaringite (incidência relatada em estudos)', 'Cefaleia', 'Aumento de peso'], es: ['Nasofaringitis (incidencia reportada en estudios)', 'Cefalea', 'Aumento de peso'] },
      dangerousAdverseEffects: { pt: ['Hipoglicemia grave e prolongada (muito difícil de reverter devido à longa meia-vida da droga no subcutâneo)', 'Hipocalemia'], es: ['Hipoglucemia grave y prolongada (muy difícil de revertir debido a la larga vida media de la droga en el subcutáneo)', 'Hipopotasemia'] },
      contraindications: {
        absolute: { pt: ['Hipoglicemia ativa'], es: ['Hipoglucemia activa'] },
        relative: { pt: ['Uso não monitorado em idosos frágeis que vivem sozinhos (risco de hipoglicemia prolongada fatal sem socorro)'], es: ['Uso no monitorizado en ancianos frágiles que viven solos (riesgo de hipoglucemia prolongada fatal sin auxilio)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'A dose de degludeca só atinge o estado de equilíbrio plasmático (steady-state) após 3 a 4 dias de uso. ERRO COMÚM: Não aumente a dose da degludeca em intervalos menores que 3 a 4 dias, sob risco de acúmulo letal ("stacking").', es: 'La dosis de degludec solo alcanza el estado de equilibrio plasmático (steady-state) tras 3 a 4 días de uso. ERROR COMÚN: No aumente la dosis de la degludec en intervalos menores a 3 a 4 días, bajo riesgo de acumulación letal ("stacking").' }
      }
    },

/* ── INSULINA ASPARTE ───────────────────────────────────────────────── */
    "insulina_asparte": {
      name: { pt: 'Insulina Asparte', es: 'Insulina Aspart' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Prandial Ultra-Rápida', es: 'Insulina Análoga Prandial Ultra-Rápida' },
      indications: {
        pt: ['Controle dos picos hiperglicêmicos pós-prandiais', 'Terapia de correção ("bolus" hospitalar ou ambulatorial)', 'Bomba de Infusão Contínua Subcutânea (CSII)', 'Cetoacidose Diabética (via Endovenosa)'],
        es: ['Control de los picos hiperglucémicos posprandiales', 'Terapia de corrección ("bolo" hospitalario o ambulatorio)', 'Bomba de Infusión Continua Subcutánea (CSII)', 'Cetoacidosis Diabética (vía Endovenosa)']
      },
      commercialNames: { br: ['NovoRapid', 'Fiasp (ação ultra-rápida aprimorada)'], ar: ['NovoRapid', 'Fiasp'] },
      presentation: { pt: ['Caneta/Refil SC 100 UI/mL', 'Frasco-ampola SC/IV 100 UI/mL'], es: ['Pluma/Cartucho SC 100 UI/mL', 'Vial SC/IV 100 UI/mL'] },
      mechanism: {
        pt: 'Modificação de um aminoácido (substituição da prolina por ácido aspártico na posição B28). Isso impede que as moléculas formem hexâmeros rígidos, permitindo a separação imediata em monômeros. Início de ação brutalmente rápido (10-20 min), pico em 1-3 horas e término em 3-5 horas. Mimetiza perfeitamente o pico de insulina gerado por uma refeição.',
        es: 'Modificación de un aminoácido (sustitución de la prolina por ácido aspártico en la posición B28). Esto impide que las moléculas formen hexámeros rígidos, permitiendo la separación inmediata en monómeros. Inicio de acción brutalmente rápido (10-20 min), pico en 1-3 horas y término en 3-5 horas. Mimetiza perfectamente el pico de insulina generado por una comida.'
      },
      dose: {
        adult: {
          pt: 'Controle Prandial: Geralmente compõe 50% da dose total diária (TDD), dividida antes das 3 refeições principais. Correção: baseada no fator de sensibilidade do paciente (ex: 1 UI abaixa a glicemia em 50 mg/dL).',
          es: 'Control Prandial: Generalmente compone el 50% de la dosis total diaria (TDD), dividida antes de las 3 comidas principales. Corrección: basada en el factor de sensibilidad del paciente (ej: 1 UI baja la glucemia en 50 mg/dL).'
        },
        pediatric: {
          pt: 'Geralmente indicada por contagem de carboidratos (ex: 1 UI para cada 15g de CHO).',
          es: 'Generalmente indicada por conteo de carbohidratos (ej: 1 UI por cada 15g de CHO).'
        }
      },
      administration: { pt: ['SC: Aplicar estritamente de 5 a 15 minutos ANTES da refeição.', 'IV: Pode ser usada em bomba de infusão em UTI para cetoacidose.', 'Pode ser misturada na mesma seringa COM insulina NPH (sempre puxar a ultra-rápida primeiro para não sujar o frasco com NPH).'], es: ['SC: Aplicar estrictamente de 5 a 15 minutos ANTES de la comida.', 'IV: Puede ser usada en bomba de infusión en UCI para cetoacidosis.', 'Puede ser mezclada en la misma jeringa CON insulina NPH (siempre extraer la ultra-rápida primero para no ensuciar el vial con NPH).'] },
      renalAdjustment: { required: true, message: { pt: 'Risco de acúmulo e hipoglicemia rebote ("late-postprandial") na DRC grave.', es: 'Riesgo de acumulación e hipoglucemia rebote ("late-postprandial") en ERC grave.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Monitorar e reduzir em hepatopatas graves (menor reserva de glicogênio hepático para contrarregular).', es: 'Monitorizar y reducir en hepatópatas graves (menor reserva de glucógeno hepático para contrarregular).' } },
      commonAdverseEffects: { pt: ['Hipoglicemia (se o paciente aplicar e não comer carboidratos suficientes)', 'Lipohipertrofia no local de injeção'], es: ['Hipoglucemia (si el paciente aplica y no come carbohidratos suficientes)', 'Lipohipertrofia en el sitio de inyección'] },
      dangerousAdverseEffects: { pt: ['Choque hipoglicêmico severo / Coma', 'Hipocalemia (especialmente em infusão endovenosa na Cetoacidose)'], es: ['Choque hipoglucémico severo / Coma', 'Hipopotasemia (especialmente en infusión endovenosa en Cetoacidosis)'] },
      contraindications: {
        absolute: { pt: ['Episódio ativo de hipoglicemia'], es: ['Episodio activo de hipoglucemia'] },
        relative: { pt: ['Aplicação sem a certeza absoluta de que a refeição está no prato pronta para ser consumida'], es: ['Aplicación sin la certeza absoluta de que la comida está en el plato lista para ser consumida'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'ERRO HOSPITALAR FATAL: A equipe de enfermagem aplica a insulina asparte na enfermaria, mas o refeitório atrasa a entrega do almoço, ou o paciente é levado a um exame de imagem em jejum. O choque hipoglicêmico ocorre em minutos.', es: 'ERROR HOSPITALARIO FATAL: El equipo de enfermería aplica la insulina aspart en la sala, pero el comedor retrasa la entrega del almuerzo, o el paciente es llevado a un examen de imagen en ayunas. El choque hipoglucémico ocurre en minutos.' }
      }
    },

/* ── INSULINA LISPRO ────────────────────────────────────────────────── */
    "insulina_lispro": {
      name: { pt: 'Insulina Lispro', es: 'Insulina Lispro' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Prandial Ultra-Rápida', es: 'Insulina Análoga Prandial Ultra-Rápida' },
      indications: {
        pt: ['Controle glicêmico periprandial em DM1 e DM2', 'Bomba de Insulina (CSII)', 'Manejo emergencial hospitalar de hiperglicemias'],
        es: ['Control glucémico periprandial en DM1 y DM2', 'Bomba de Insulina (CSII)', 'Manejo de emergencia hospitalario de hiperglucemias']
      },
      commercialNames: { br: ['Humalog', 'Lyumjev (Ultra-rápida otimizada)'], ar: ['Humalog'] },
      presentation: { pt: ['Caneta/Refil SC 100 UI/mL', 'Caneta SC 200 UI/mL (apenas Humalog)'], es: ['Pluma/Cartucho SC 100 UI/mL', 'Pluma SC 200 UI/mL (solo Humalog)'] },
      mechanism: {
        pt: 'A inversão exata de dois aminoácidos na cadeia B (Lisina na posição B28 e Prolina na posição B29) desestabiliza a molécula nativa humana. Ela perde a capacidade de formar complexos espaciais, sendo absorvida sistemicamente em altíssima velocidade. O pico se dá entre 60 a 90 minutos, com declínio rápido, evitando a "hipoglicemia do meio da tarde" comum com as insulinas regulares.',
        es: 'La inversión exacta de dos aminoácidos en la cadena B (Lisina en la posición B28 y Prolina en la posición B29) desestabiliza la molécula nativa humana. Pierde la capacidad de formar complejos espaciales, siendo absorbida sistémicamente a altísima velocidad. El pico se da entre 60 a 90 minutos, con declive rápido, evitando la "hipoglucemia de media tarde" común con las insulinas regulares.'
      },
      dose: {
        adult: {
          pt: 'Prandial: Calcular conforme os carboidratos da refeição (contagem de CHO) ou fator de sensibilidade. Em média 0,1 UI/kg antes de grandes refeições.',
          es: 'Prandial: Calcular según los carbohidratos de la comida (conteo de CHO) o factor de sensibilidad. En promedio 0,1 UI/kg antes de grandes comidas.'
        },
        pediatric: {
          pt: 'Titulação rigorosa baseada na ingesta alimentar.',
          es: 'Titulación rigurosa basada en la ingesta alimentaria.'
        }
      },
      administration: { pt: ['Deve ser aplicada dentro de 15 minutos ANTES da refeição, ou IMEDIATAMENTE após (em crianças que não se tem certeza de quanto comerão).', 'A formulação Lyumjev é tão rápida que pode ser aplicada até 20 minutos após o INÍCIO da refeição.'], es: ['Debe aplicarse dentro de 15 minutos ANTES de la comida, o INMEDIATAMENTE después (en niños que no se tiene certeza de cuánto comerán).', 'La formulación Lyumjev es tan rápida que puede aplicarse hasta 20 minutos tras el INICIO de la comida.'] },
      renalAdjustment: { required: true, message: { pt: 'Risco crítico de hipoglicemia severa não contrarregulada em pacientes anúricos/dialíticos.', es: 'Riesgo crítico de hipoglucemia severa no contrarregulada en pacientes anúricos/dialíticos.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Titular doses com muito cuidado na falência hepática.', es: 'Titular dosis con mucho cuidado en la falla hepática.' } },
      commonAdverseEffects: { pt: ['Episódios hipoglicêmicos leves recorrentes (se erro de cálculo da dieta)', 'Eritema e inchaço transitório no local'], es: ['Episodios hipoglucémicos leves recurrentes (si error de cálculo de la dieta)', 'Eritema e hinchazón transitorio en el sitio'] },
      dangerousAdverseEffects: { pt: ['Hipoglicemia letal se erro de dose ou jejum prolongado pós-aplicação', 'Hipocalemia profunda (em cetoacidose)'], es: ['Hipoglucemia letal si error de dosis o ayuno prolongado pos-aplicación', 'Hipopotasemia profunda (en cetoacidosis)'] },
      contraindications: {
        absolute: { pt: ['Hipoglicemia no momento da injeção'], es: ['Hipoglucemia en el momento de la inyección'] },
        relative: { pt: ['Administrar em ambiente hospitalar sem prescrição dietética garantida na bandeja do paciente'], es: ['Administrar en ambiente hospitalario sin prescripción dietética garantizada en la bandeja del paciente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'CUIDADO AO MISTURAR: Ao contrário das basais (Glargina/Degludeca) que não podem ser misturadas, a Lispro PODE ser misturada na seringa com NPH, contanto que seja injetada imediatamente após a mistura.', es: 'CUIDADO AL MEZCLAR: A diferencia de las basales (Glargina/Degludec) que no pueden ser mezcladas, la Lispro PUEDE ser mezclada en la jeringa con NPH, siempre que se inyecte inmediatamente tras la mezcla.' }
      }
    }

  }); /* fim Object.assign ENDOCRINO_DRUGS_DB — BUILD 308 Lote 1 (Insulinas Análogas) */

})();
