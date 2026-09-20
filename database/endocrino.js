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
    },  // end insulina_lispro

/* ── INSULINA GLULISINA ─────────────────────────────────────────────── */
    "insulina_glulisina": {
      name: { pt: 'Insulina Glulisina', es: 'Insulina Glulisina' },
      category: 'endocrino',
      class: { pt: 'Insulina Análoga Prandial Ultra-Rápida', es: 'Insulina Análoga Prandial Ultra-Rápida' },
      indications: {
        pt: ['Controle glicêmico periprandial', 'Correção de hiperglicemias agudas', 'Bomba de infusão contínua de insulina (CSII)'],
        es: ['Control glucémico periprandial', 'Corrección de hiperglucemias agudas', 'Bomba de infusión continua de insulina (CSII)']
      },
      commercialNames: { br: ['Apidra'], ar: ['Apidra'] },
      presentation: { pt: ['Caneta/Refil SC 100 UI/mL', 'Frasco-ampola SC/IV 100 UI/mL'], es: ['Pluma/Cartucho SC 100 UI/mL', 'Vial SC/IV 100 UI/mL'] },
      mechanism: {
        pt: 'Semelhante à asparte e à lispro, a glulisina possui troca de aminoácidos (asparagina por lisina na posição B3, e lisina por ácido glutâmico na posição B29). Diferencial: É a única insulina ultra-rápida isenta de zinco, o que permite um início de ação e absorção ligeiramente mais consistentes em pacientes com diferentes espessuras de tecido adiposo (obesidade).',
        es: 'Similar a aspart y lispro, la glulisina posee intercambio de aminoácidos (asparagina por lisina en la posición B3, y lisina por ácido glutámico en la posición B29). Diferencial: Es la única insulina ultra-rápida libre de zinc, lo que permite un inicio de acción y absorción ligeramente más consistentes en pacientes con diferentes grosores de tejido adiposo (obesidad).'
      },
      dose: {
        adult: {
          pt: 'Geralmente 50% da dose total diária (junto com 50% basal), dividida nas refeições, guiada por contagem de carboidratos.',
          es: 'Geralmente 50% de la dosis total diaria (junto con 50% basal), dividida en las comidas, guiada por conteo de carbohidratos.'
        },
        pediatric: {
          pt: 'Aprovada para > 4 anos. Dose titulada conforme sensibilidade e alimentação.',
          es: 'Aprobada para > 4 años. Dosis titulada según sensibilidad y alimentación.'
        }
      },
      administration: { pt: ['Aplicar de 0 a 15 minutos ANTES da refeição, ou logo após a ingestão.', 'Via SC, ou IV (em ambiente de UTI).'], es: ['Aplicar de 0 a 15 minutos ANTES de la comida, o justo después de la ingesta.', 'Vía SC, o IV (en ambiente de UCI).'] },
      renalAdjustment: { required: true, message: { pt: 'Insulinas não são degradadas em insuficiência renal. Necessidade cai; reduzir dose empiricamente para evitar hipoglicemia.', es: 'Las insulinas no se degradan en insuficiencia renal. La necesidad cae; reducir dosis empíricamente para evitar hipoglucemia.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Necessidade reduzida na cirrose hepática (menor gliconeogênese).', es: 'Necesidad reducida en cirrosis hepática (menor gluconeogénesis).' } },
      commonAdverseEffects: { pt: ['Hipoglicemia leve peri-prandial', 'Lipodistrofia se não rodiziar local'], es: ['Hipoglucemia leve periprandial', 'Lipodistrofia si no se rota el lugar'] },
      dangerousAdverseEffects: { pt: ['Choque hipoglicêmico', 'Hipocalemia (se infusão IV)'], es: ['Choque hipoglucémico', 'Hipopotasemia (si infusión IV)'] },
      contraindications: {
        absolute: { pt: ['Hipoglicemia no momento do uso'], es: ['Hipoglucemia en el momento del uso'] },
        relative: { pt: ['Nenhuma formal se prescrita corretamente.'], es: ['Ninguna formal si se prescribe correctamente.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'COMPATIBILIDADE: Se for misturada com insulina NPH na seringa, a glulisina DEVE ser puxada para dentro da seringa PRIMEIRO. A mistura deve ser injetada imediatamente.', es: 'COMPATIBILIDAD: Si se mezcla con insulina NPH en la jeringa, la glulisina DEBE ser extraída dentro de la jeringa PRIMERO. La mezcla debe inyectarse inmediatamente.' }
      }
    },  // end insulina_glulisina

/* ── INSULINA NPH ───────────────────────────────────────────────────── */
    "insulina_nph": {
      name: { pt: 'Insulina NPH', es: 'Insulina NPH' },
      category: 'endocrino',
      class: { pt: 'Insulina Humana de Ação Intermediária', es: 'Insulina Humana de Acción Intermedia' },
      indications: {
        pt: ['Controle glicêmico basal em DM1 e DM2', 'DM Gestacional (insulina de escolha pela vasta segurança clínica histórica)'],
        es: ['Control glucémico basal en DM1 y DM2', 'DM Gestacional (insulina de elección por la vasta seguridad clínica histórica)']
      },
      commercialNames: { br: ['Novolin N', 'Humulin N', 'Insulina NPH SUS'], ar: ['Insulatard', 'Humulin N'] },
      presentation: { pt: ['Frasco-ampola ou Caneta SC 100 UI/mL (Suspensão leitosa)'], es: ['Vial o Pluma SC 100 UI/mL (Suspensión lechosa)'] },
      mechanism: {
        pt: 'Neutral Protamine Hagedorn (NPH). É a insulina humana regular combinada com zinco e protamina (uma proteína extraída do esperma do salmão) em pH neutro. Essa combinação atrasa a absorção subcutânea. Início de ação em 1-2h, possui um PICO claro entre 4-12h e duração de 12-18h. Não cobre as 24 horas do dia sozinha.',
        es: 'Neutral Protamine Hagedorn (NPH). Es la insulina humana regular combinada con zinc y protamina (una proteína extraída del esperma del salmón) en pH neutro. Esta combinación retrasa la absorción subcutánea. Inicio de acción en 1-2h, posee un PICO claro entre 4-12h y duración de 12-18h. No cubre las 24 horas del día por sí sola.'
      },
      dose: {
        adult: {
          pt: 'Geralmente 0,1 a 0,2 UI/kg/dia para iniciar em DM2. Como não dura 24h, a dose total é usualmente dividida em 2/3 de manhã e 1/3 à noite (ao deitar, "bedtime").',
          es: 'Geralmente 0,1 a 0,2 UI/kg/día para iniciar en DM2. Como no dura 24h, la dosis total se divide usualmente en 2/3 por la mañana y 1/3 en la noche (al acostarse, "bedtime").'
        },
        pediatric: {
          pt: 'Muito comum em DM1 infantil no SUS. Doses ajustadas rigorosamente por peso e fase de crescimento.',
          es: 'Muy común en DM1 infantil (sistema público). Dosis ajustadas rigurosamente por peso y fase de crecimiento.'
        }
      },
      administration: { pt: ['Por ser uma suspensão, deve ser HOMOGENEIZADA rolando o frasco entre as mãos 10 a 20 vezes antes do uso (nunca sacudir vigorosamente).', 'Somente via SC. NUNCA fazer NPH via endovenosa.'], es: ['Al ser una suspensión, debe ser HOMOGENEIZADA rodando el vial entre las manos 10 a 20 veces antes del uso (nunca agitar vigorosamente).', 'Solo vía SC. NUNCA administrar NPH vía endovenosa.'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose na DRC progressiva para evitar hipoglicemia noturna.', es: 'Reducir dosis en ERC progresiva para evitar hipoglucemia nocturna.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Necessidades menores em cirróticos.', es: 'Necesidades menores en cirróticos.' } },
      commonAdverseEffects: { pt: ['Ganho de peso (maior que os análogos)', 'Eritema local', 'Lipohipertrofia'], es: ['Ganancia de peso (mayor que los análogos)', 'Eritema local', 'Lipohipertrofia'] },
      dangerousAdverseEffects: { pt: ['Hipoglicemia noturna/madrugada severa (devido ao pico de ação coincidir com o jejum noturno)', 'Alergia à protamina (rara, mas severa)'], es: ['Hipoglucemia nocturna/madrugada severa (debido a que el pico de acción coincide con el ayuno nocturno)', 'Alergia a la protamina (rara, pero severa)'] },
      contraindications: {
        absolute: { pt: ['Hipoglicemia ativa', 'Via IV'], es: ['Hipoglucemia activa', 'Vía IV'] },
        relative: { pt: ['Pacientes com história de hipoglicemia noturna assintomática (preferir análogos como Glargina/Degludeca)'], es: ['Pacientes con historia de hipoglucemia nocturna asintomática (preferir análogos como Glargina/Degludec)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: true, highAlertMedication: true,
        warning: { pt: 'RISCO NOTURNO: Se a NPH noturna for aplicada antes do jantar (ex: 18h), seu PICO de ação máxima ocorrerá por volta das 2h da madrugada, gerando hipoglicemias ocultas graves. Orientar sempre a aplicação ao deitar (22h-23h) e consumo de um lanche ceia.', es: 'RIESGO NOCTURNO: Si la NPH nocturna se aplica antes de la cena (ej: 18h), su PICO de acción máxima ocurrirá alrededor de las 2h de la madrugada, generando hipoglucemias ocultas graves. Orientar siempre la aplicación al acostarse (22h-23h) y consumo de un refrigerio.' }
      }
    },  // end insulina_nph

/* ── DULAGLUTIDA ────────────────────────────────────────────────────── */
    "dulaglutida": {
      name: { pt: 'Dulaglutida', es: 'Dulaglutida' },
      category: 'endocrino',
      class: { pt: 'Agonista do Receptor de GLP-1', es: 'Agonista del Receptor de GLP-1' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (redução de glicemia e risco cardiovascular)', 'Redução de MACE (eventos cardiovasculares maiores) em diabéticos'],
        es: ['Diabetes Mellitus Tipo 2 (reducción de glucemia y riesgo cardiovascular)', 'Reducción de MACE (eventos cardiovasculares mayores) en diabéticos']
      },
      commercialNames: { br: ['Trulicity'], ar: ['Trulicity'] },
      presentation: { pt: ['Caneta SC dose única 0,75 mg, 1,5 mg'], es: ['Pluma SC dosis única 0,75 mg, 1,5 mg'] },
      mechanism: {
        pt: 'Molécula de GLP-1 fundida a um fragmento Fc de IgG4 modificada, protegendo-a da degradação pela enzima DPP-4 e retardando a eliminação renal. Exerce ação de estimulação de insulina, inibição de glucagon e retardo do esvaziamento gástrico, com meia-vida de cerca de 5 dias.',
        es: 'Molécula de GLP-1 fusionada a un fragmento Fc de IgG4 modificada, protegiéndola de la degradación por la enzima DPP-4 y retrasando la eliminación renal. Ejerce acción de estimulación de insulina, inhibición de glucagón y retraso del vaciamiento gástrico, con vida media de unos 5 días.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 0,75 mg 1x/semana. Pode ser aumentada para 1,5 mg/semana para controle adicional.',
          es: 'Iniciar con 0,75 mg 1 vez/semana. Puede aumentarse a 1,5 mg/semana para control adicional.'
        },
        pediatric: {
          pt: 'Aprovada para > 10 anos com DM2 (não como droga de emagrecimento principal).',
          es: 'Aprobada para > 10 años con DM2 (no como droga de adelgazamiento principal).'
        }
      },
      administration: { pt: ['Aplicação subcutânea 1 VEZ POR SEMANA.', 'A caneta não exige manuseio de agulha pelo paciente (agulha oculta que injeta e retrai automaticamente).'], es: ['Aplicación subcutánea 1 VEZ POR SEMANA.', 'La pluma no exige manipulación de aguja por el paciente (aguja oculta que inyecta y se retrae automáticamente).'] },
      renalAdjustment: { required: false, message: { pt: 'Nenhum ajuste necessário em DRC. Hidratação recomendada devido aos vômitos iniciais.', es: 'Ningún ajuste necesario en ERC. Hidratación recomendada debido a los vómitos iniciales.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Náusea (diminui ao longo de 2-4 semanas)', 'Diarreia e Vômitos', 'Fadiga'], es: ['Náusea (disminuye a lo largo de 2-4 semanas)', 'Diarrea y Vómitos', 'Fatiga'] },
      dangerousAdverseEffects: { pt: ['Pancreatite Aguda', 'Risco potencial (em roedores) de Carcinoma Medular de Tireoide'], es: ['Pancreatitis Aguda', 'Riesgo potencial (en roedores) de Carcinoma Medular de Tiroides'] },
      contraindications: {
        absolute: { pt: ['Histórico de CMT (Carcinoma Medular de Tireoide) ou NEM-2', 'Gravidez'], es: ['Historial de CMT (Carcinoma Medular de Tiroides) o NEM-2', 'Embarazo'] },
        relative: { pt: ['Gastroparésia pré-existente'], es: ['Gastroparesia preexistente'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Possui indicação formal (em bula) de superioridade cardioprotetora, assim como a semaglutida. Perda de peso gerada é considerável, porém inferior à semaglutida/tirzepatida.', es: 'Posee indicación formal (en prospecto) de superioridad cardioprotectora, así como la semaglutida. La pérdida de peso generada es considerable, pero inferior a la semaglutida/tirzepatida.' }
      }
    },  // end dulaglutida

/* ── RETATRUTIDA ────────────────────────────────────────────────────── */
    "retatrutida": {
      name: { pt: 'Retatrutida', es: 'Retatrutida' },
      category: 'endocrino',
      class: { pt: 'Triplo Agonista (GLP-1 / GIP / Glucagon)', es: 'Triple Agonista (GLP-1 / GIP / Glucagón)' },
      indications: {
        pt: ['(Fronteira/Pesquisa) Obesidade mórbida / Manejo de peso extremo', 'Doença Hepática Estesteatótica associada à Disfunção Metabólica (MASLD/NASH) severa'],
        es: ['(Frontera/Investigación) Obesidad mórbida / Manejo de peso extremo', 'Enfermedad Hepática Esteatótica asociada a Disfunción Metabólica (MASLD/NASH) severa']
      },
      commercialNames: { br: ['(Ainda sob pesquisa clínica - Fase 3 / Eli Lilly)'], ar: ['(Investigación)'] },
      presentation: { pt: ['Em desenvolvimento (Canetas SC)'], es: ['En desarrollo (Plumas SC)'] },
      mechanism: {
        pt: 'Molécula de fronteira absoluta. Atua simultaneamente em TRÊS receptores: GLP-1 (sacia e aumenta insulina), GIP (melhora sensibilidade e queima gordura branca) e RECEPTOR DE GLUCAGON. A ativação do glucagon aumenta o gasto energético basal (termogênese) e gera eliminação agressiva de gordura ectópica (limpa a gordura do fígado/esteatose quase que completamente). É o agente mais potente já criado, induzindo perdas de até 25% do peso corporal.',
        es: 'Molécula de frontera absoluta. Actúa simultáneamente en TRES receptores: GLP-1 (sacia y aumenta insulina), GIP (mejora sensibilidad y quema grasa blanca) y RECEPTOR DE GLUCAGÓN. La activación del glucagón aumenta el gasto energético basal (termogénesis) y genera eliminación agresiva de grasa ectópica (limpia la grasa del hígado/esteatosis casi por completo). Es el agente más potente jamás creado, induciendo pérdidas de hasta 25% del peso corporal.'
      },
      dose: {
        adult: {
          pt: 'SC Semanal. Titulação lenta sendo validada em ensaios (geralmente iniciando em 1-2 mg até 12 mg).',
          es: 'SC Semanal. Titulación lenta siendo validada en ensayos (generalmente iniciando en 1-2 mg hasta 12 mg).'
        },
        pediatric: {
          pt: 'Sem dados aplicáveis ainda.',
          es: 'Sin datos aplicables aún.'
        }
      },
      administration: { pt: ['Administração subcutânea semanal pretendida.'], es: ['Administración subcutánea semanal pretendida.'] },
      renalAdjustment: { required: false, message: { pt: 'Dados de Fase 3 definirão protocolos.', es: 'Datos de Fase 3 definirán protocolos.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Demonstra potencial reverso maciço para cirrose não-alcoólica (MASLD).', es: 'Demuestra potencial reverso masivo para cirrosis no alcohólica (MASLD).' } },
      commonAdverseEffects: { pt: ['Náusea extrema e vômitos', 'Aumento basal da frequência cardíaca (efeito do glucagon/cronotropismo)', 'Arritmias leves'], es: ['Náusea extrema y vómitos', 'Aumento basal de la frecuencia cardíaca (efecto del glucagón/cronotropismo)', 'Arritmias leves'] },
      dangerousAdverseEffects: { pt: ['Taquicardia sustentada e exacerbação cardiovascular aguda (em estudo)', 'Pancreatite'], es: ['Taquicardia sostenida y exacerbación cardiovascular aguda (en estudio)', 'Pancreatitis'] },
      contraindications: {
        absolute: { pt: ['Provavelmente as mesmas (NEM-2, CMT) e pacientes com taquiarritmias graves não controladas.'], es: ['Probablemente las mismas (NEM-2, CMT) y pacientes con taquiarritmias graves no controladas.'] },
        relative: { pt: ['Uso associado a inotrópicos ou simpaticomiméticos'], es: ['Uso asociado a inotrópicos o simpaticomiméticos'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'MEDICAMENTO EM DESENVOLVIMENTO: O agonismo do Glucagon gera preocupações sobre o cronotropismo cardíaco (acelera o coração em até 10-15 bpm de forma basal). Monitoramento cardiovascular será crítico em aprovação.', es: 'MEDICAMENTO EN DESARROLLO: El agonismo del Glucagón genera preocupaciones sobre el cronotropismo cardíaco (acelera el corazón hasta 10-15 lpm de forma basal). Monitorización cardiovascular será crítica en aprobación.' }
      }
    },  // end retatrutida

/* ── GLUCAGON ───────────────────────────────────────────────────────── */
    "glucagon": {
      name: { pt: 'Glucagon', es: 'Glucagón' },
      category: 'endocrino',
      class: { pt: 'Hormônio Hiperglicemiante / Antídoto', es: 'Hormona Hiperglucemiante / Antídoto' },
      indications: {
        pt: ['Hipoglicemia severa em pacientes sem acesso venoso', 'Intoxicação grave / Overdose por Betabloqueadores e Bloqueadores de Canal de Cálcio'],
        es: ['Hipoglucemia severa en pacientes sin acceso venoso', 'Intoxicación grave / Sobredosis por Betabloqueantes y Bloqueadores de Canal de Calcio']
      },
      commercialNames: { br: ['GlucaGen HypoKit'], ar: ['GlucaGen'] },
      presentation: { pt: ['Frasco-ampola liofilizado 1 mg (1 mg = 1 UI) com seringa de diluente'], es: ['Vial liofilizado 1 mg (1 mg = 1 UI) con jeringa de diluyente'] },
      mechanism: {
        pt: 'Hormônio endógeno contra-regulador da insulina. Liga-se aos receptores hepáticos de glucagon, ativando a adenilciclase e gerando AMPc. Isso induz glicogenólise maciça (quebra de glicogênio armazenado) e liberação de glicose para o sangue. Como antídoto cardíaco: O aumento de AMPc no coração pelo glucagon ocorre de forma INDEPENDENTE dos receptores beta-adrenérgicos, revertendo bradicardia e choque por betabloqueadores.',
        es: 'Hormona endógena contrarreguladora de la insulina. Se une a los receptores hepáticos de glucagón, activando la adenilciclasa y generando AMPc. Esto induce glucogenólisis masiva (ruptura de glucógeno almacenado) y liberación de glucosa a la sangre. Como antídoto cardíaco: El aumento de AMPc en el corazón por el glucagón ocurre de forma INDEPENDIENTE a los receptores beta-adrenérgicos, revirtiendo bradicardia y choque por betabloqueantes.'
      },
      dose: {
        adult: {
          pt: 'Hipoglicemia: 1 mg SC ou IM profundo. Antídoto BB/BCC: Bolus IV de 3 a 10 mg (doses massivas), seguido de infusão de 3 a 5 mg/hora.',
          es: 'Hipoglucemia: 1 mg SC o IM profundo. Antídoto BB/BCC: Bolo IV de 3 a 10 mg (dosis masivas), seguido de infusión de 3 a 5 mg/hora.'
        },
        pediatric: {
          pt: 'Hipoglicemia (crianças < 25 kg): 0,5 mg IM/SC.',
          es: 'Hipoglucemia (niños < 25 kg): 0,5 mg IM/SC.'
        }
      },
      administration: { pt: ['No kit hipoglicêmico ambulatorial, instruir a família a injetar na coxa/braço de forma imediata quando o diabético desmaiar.', 'Recupera consciência em 10-15 min. Após acordar, DEVE comer carboidratos imediatamente.'], es: ['En el kit hipoglucémico ambulatorio, instruir a la familia a inyectar en el muslo/brazo de forma inmediata cuando el diabético se desmaye.', 'Recupera consciencia en 10-15 min. Tras despertar, DEBE comer carbohidratos inmediatamente.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com falência hepática (cirróticos) NÃO TÊM RESERVAS de glicogênio. O glucagon SERÁ INÚTIL para tratar hipoglicemia nesses casos. Exigem glicose IV.', es: 'Pacientes con falla hepática (cirróticos) NO TIENEN RESERVAS de glucógeno. El glucagón SERÁ INÚTIL para tratar hipoglucemia en estos casos. Exigen glucosa IV.' } },
      commonAdverseEffects: { pt: ['Vômitos intensos (comum após acordar do choque, risco de broncoaspiração)', 'Taquicardia e hipertensão reativa', 'Hipoglicemia rebote severa (se não comer carboidratos após o uso)'], es: ['Vómitos intensos (común tras despertar del choque, riesgo de broncoaspiración)', 'Taquicardia e hipertensión reactiva', 'Hipoglucemia rebote severa (si no come carbohidratos tras el uso)'] },
      dangerousAdverseEffects: { pt: ['Crise hipertensiva fulminante (em pacientes com Feocromocitoma não diagnosticado)'], es: ['Crisis hipertensiva fulminante (en pacientes con Feocromocitoma no diagnosticado)'] },
      contraindications: {
        absolute: { pt: ['Feocromocitoma', 'Insulinoma (pode estimular secreção fatal de insulina)'], es: ['Feocromocitoma', 'Insulinoma (puede estimular secreción fatal de insulina)'] },
        relative: { pt: ['Jejum prolongado, Desnutrição grave ou Alcoolismo (não fará efeito pela falta de glicogênio)'], es: ['Ayuno prolongado, Desnutrición grave o Alcoholismo (no hará efecto por la falta de glucógeno)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O glucagon NÃO FUNCIONA em hipoglicemias induzidas por BEBEDEIRAS (álcool). O álcool bloqueia a gliconeogênese, e o fígado não responderá ao glucagon. Utilizar Ampolas de Glicose Hipertônica IV.', es: 'El glucagón NO FUNCIONA en hipoglucemias inducidas por BORRACHERAS (alcohol). El alcohol bloquea la gluconeogénesis, y el hígado no responderá al glucagón. Utilizar Ampollas de Glucosa Hipertónica IV.' }
      }
    },  // end glucagon

/* ── METFORMINA ─────────────────────────────────────────────────────── */
    "metformina": {
      name: { pt: 'Metformina', es: 'Metformina' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Biguanida)', es: 'Antidiabético Oral (Biguanida)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (1ª linha de tratamento)', 'Síndrome dos Ovários Policísticos (SOP)', 'Resistência insulínica e Pré-diabetes'],
        es: ['Diabetes Mellitus Tipo 2 (1ª línea de tratamiento)', 'Síndrome de Ovarios Poliquísticos (SOP)', 'Resistencia insulínica y Prediabetes']
      },
      commercialNames: { br: ['Glifage', 'Glifage XR', 'Dimefor'], ar: ['DBI', 'Glucophage'] },
      presentation: { pt: ['Comprimidos 500 mg, 850 mg, 1000 mg', 'Comprimidos de Liberação Prolongada (XR) 500, 750 e 1000 mg'], es: ['Comprimidos 500 mg, 850 mg, 1000 mg', 'Comprimidos de Liberación Prolongada (XR) 500, 750 y 1000 mg'] },
      mechanism: {
        pt: 'Ativadora da enzima AMPK (Proteína Quinase Ativada por AMP). Sua ação principal é a inibição potente da gliconeogênese hepática (reduz a produção de glicose pelo fígado). Secundariamente, aumenta a sensibilidade periférica à insulina no músculo esquelético e reduz a absorção intestinal de glicose. NÃO estimula a secreção de insulina (não causa hipoglicemia isoladamente).',
        es: 'Activadora de la enzima AMPK (Proteína Quinasa Activada por AMP). Su acción principal es la inhibición potente de la gluconeogénesis hepática (reduce la producción de glucosa por el hígado). Secundariamente, aumenta la sensibilidad periférica a la insulina en el músculo esquelético y reduce la absorción intestinal de glucosa. NO estimula la secreción de insulina (no causa hipoglucemia aisladamente).'
      },
      dose: {
        adult: {
          pt: 'Iniciar 500 mg 1 a 2x/dia (ou 500mg XR à noite). Titular gradualmente a cada 1-2 semanas. Dose alvo: 1500 a 2000 mg/dia. Dose máxima: 2550 mg/dia.',
          es: 'Iniciar 500 mg 1 a 2 veces/día (o 500mg XR por la noche). Titular gradualmente cada 1-2 semanas. Dosis objetivo: 1500 a 2000 mg/día. Dosis máxima: 2550 mg/día.'
        },
        pediatric: {
          pt: 'Aprovado para crianças > 10 anos com DM2. Início 500mg 1x/dia, max 2000mg/dia.',
          es: 'Aprobado para niños > 10 años con DM2. Inicio 500mg 1 vez/día, máx 2000mg/día.'
        }
      },
      administration: { pt: ['Tomar JUNTO COM AS REFEIÇÕES ou imediatamente após (minimiza os severos efeitos gastrointestinais).', 'Comprimidos XR (prolongados) não devem ser partidos nem mastigados.'], es: ['Tomar JUNTO CON LAS COMIDAS o inmediatamente después (minimiza los severos efectos gastrointestinales).', 'Comprimidos XR (prolongados) no deben ser partidos ni masticados.'] },
      renalAdjustment: { required: true, message: { pt: 'TFG 30-45 mL/min: Dose máxima 1000 mg/dia. TFG < 30 mL/min: CONTRAINDICADA. Risco de acidose lática letal por acúmulo da droga.', es: 'TFG 30-45 mL/min: Dosis máxima 1000 mg/día. TFG < 30 mL/min: CONTRAINDICADA. Riesgo de acidosis láctica letal por acumulación de la droga.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em doença hepática severa/alcoolismo devido ao alto risco de precipitar acidose lática.', es: 'Evitar en enfermedad hepática severa/alcoholismo debido al alto riesgo de precipitar acidosis láctica.' } },
      commonAdverseEffects: { pt: ['Diarreia aquosa e cólicas (muito comum no início)', 'Náusea e gosto metálico', 'Deficiência de Vitamina B12 (uso crônico)'], es: ['Diarrea acuosa y cólicos (muy común al inicio)', 'Náusea y sabor metálico', 'Deficiencia de Vitamina B12 (uso crónico)'] },
      dangerousAdverseEffects: { pt: ['Acidose Lática (rara, porém letal, mortalidade de 50%)'], es: ['Acidosis Láctica (rara, pero letal, mortalidad del 50%)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Renal Grave (ClCr < 30)', 'Choque, Sepse, IAM agudo, Insuficiência Cardíaca descompensada (estados de hipóxia)', 'Alcoolismo ativo'], es: ['Insuficiencia Renal Grave (ClCr < 30)', 'Choque, Sepsis, IAM agudo, Insuficiencia Cardíaca descompensada (estados de hipoxia)', 'Alcoholismo activo'] },
        relative: { pt: ['Uso de contrastes iodados (suspender o uso temporariamente)'], es: ['Uso de contrastes yodados (suspender el uso temporalmente)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'CONTRASTE IODADO: A metformina DEVE ser suspensa 48 horas antes ou, no mínimo, no momento de exames com contraste iodado, e só deve ser retomada 48 horas depois se a função renal estiver preservada.', es: 'CONTRASTE YODADO: La metformina DEBE suspenderse 48 horas antes o, como mínimo, en el momento de exámenes con contraste yodado, y solo debe retomarse 48 horas después si la función renal está preservada.' }
      }
    },  // end metformina

/* ── GLICLAZIDA ─────────────────────────────────────────────────────── */
    "gliclazida": {
      name: { pt: 'Gliclazida', es: 'Gliclazida' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Sulfonilureia de 2ª Geração)', es: 'Antidiabético Oral (Sulfonilurea de 2ª Generación)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 não controlada com metformina (fármaco secretagogo)'],
        es: ['Diabetes Mellitus Tipo 2 no controlada con metformina (fármaco secretagogo)']
      },
      commercialNames: { br: ['Diamicron MR', 'Azukon MR'], ar: ['Diamicron'] },
      presentation: { pt: ['Comprimidos de Liberação Modificada (MR) 30 mg e 60 mg'], es: ['Comprimidos de Liberación Modificada (MR) 30 mg y 60 mg'] },
      mechanism: {
        pt: 'Liga-se aos receptores SUR1 nas células beta pancreáticas, fechando os canais de potássio dependentes de ATP. Isso despolariza a membrana, abrindo canais de cálcio e causando a exocitose massiva das vesículas de insulina. Estimula a secreção de insulina independentemente dos níveis de glicose do paciente.',
        es: 'Se une a los receptores SUR1 en las células beta pancreáticas, cerrando los canales de potasio dependientes de ATP. Esto despolariza la membrana, abriendo canales de calcio y causando la exocitosis masiva de las vesículas de insulina. Estimula la secreción de insulina independientemente de los niveles de glucosa del paciente.'
      },
      dose: {
        adult: {
          pt: 'Formulação MR (Liberação Modificada): 30 a 120 mg/dia em dose única no café da manhã.',
          es: 'Formulación MR (Liberación Modificada): 30 a 120 mg/día en dosis única en el desayuno.'
        },
        pediatric: {
          pt: 'Não recomendada (DM1 não possui células beta ativas).',
          es: 'No recomendada (DM1 no posee células beta activas).'
        }
      },
      administration: { pt: ['Deve ser ingerida com o café da manhã. NUNCA tomar se for pular a refeição.', 'Os comprimidos de 60 mg podem ser partidos na metade, mas nunca triturados ou mastigados.'], es: ['Debe ingerirse con el desayuno. NUNCA tomar si va a saltarse la comida.', 'Los comprimidos de 60 mg pueden partirse a la mitad, pero nunca triturarse o masticarse.'] },
      renalAdjustment: { required: true, message: { pt: 'Evitar em TFG < 30 mL/min (acúmulo do fármaco gera risco de hipoglicemia severa não contrarregulada).', es: 'Evitar en TFG < 30 mL/min (acumulación del fármaco genera riesgo de hipoglucemia severa no contrarregulada).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Contraindicado na insuficiência hepática grave.', es: 'Contraindicado en insuficiencia hepática grave.' } },
      commonAdverseEffects: { pt: ['Hipoglicemia leve a moderada', 'Ganho de peso', 'Desconforto gástrico'], es: ['Hipoglucemia leve a moderada', 'Ganancia de peso', 'Molestia gástrica'] },
      dangerousAdverseEffects: { pt: ['Coma hipoglicêmico prolongado (pode durar dias em idosos)', 'Alergia cruzada com Sulfonamidas'], es: ['Coma hipoglucémico prolongado (puede durar días en ancianos)', 'Alergia cruzada con Sulfonamidas'] },
      contraindications: {
        absolute: { pt: ['Diabetes Mellitus Tipo 1', 'Cetoacidose Diabética', 'Insuficiência Renal Grave'], es: ['Diabetes Mellitus Tipo 1', 'Cetoacidosis Diabética', 'Insuficiencia Renal Grave'] },
        relative: { pt: ['Idosos frágeis que moram sozinhos e não se alimentam direito'], es: ['Ancianos frágiles que viven solos y no se alimentan bien'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Hipoglicemias por Sulfonilureias são perigosas e refratárias. Não basta dar glicose na hora; o fármaco continuará secretando insulina por 24h. O paciente frequentemente precisa de internação e infusão contínua de glicose endovenosa.', es: 'Hipoglucemias por Sulfonilureas son peligrosas y refractarias. No basta dar glucosa en el momento; el fármaco continuará secretando insulina por 24h. El paciente frecuentemente necesita internación e infusión continua de glucosa endovenosa.' }
      }
    },  // end gliclazida

/* ── GLIMEPIRIDA ────────────────────────────────────────────────────── */
    "glimepirida": {
      name: { pt: 'Glimepirida', es: 'Glimepirida' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Sulfonilureia de 3ª Geração)', es: 'Antidiabético Oral (Sulfonilurea de 3ª Generación)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 não controlada'],
        es: ['Diabetes Mellitus Tipo 2 no controlada']
      },
      commercialNames: { br: ['Amaryl'], ar: ['Amaryl'] },
      presentation: { pt: ['Comprimidos 1 mg, 2 mg, 4 mg'], es: ['Comprimidos 1 mg, 2 mg, 4 mg'] },
      mechanism: {
        pt: 'Mecanismo similar à gliclazida (fecha canal de K+ e despolariza a célula beta), porém possui maior potência, meia-vida longa (cerca de 24h de ação) e atinge os receptores de forma mais persistente. Gera um risco de hipoglicemia consideravelmente maior que a gliclazida MR.',
        es: 'Mecanismo similar a la gliclazida (cierra canal de K+ y despolariza la célula beta), pero posee mayor potencia, vida media larga (cerca de 24h de acción) y alcanza los receptores de forma más persistente. Genera un riesgo de hipoglucemia considerablemente mayor que la gliclazida MR.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 1 a 2 mg/dia VO no café da manhã. Titular a cada 1-2 semanas. Dose máxima: 4 a 6 mg/dia.',
          es: 'Iniciar con 1 a 2 mg/día VO en el desayuno. Titular cada 1-2 semanas. Dosis máxima: 4 a 6 mg/día.'
        },
        pediatric: {
          pt: 'Não indicada.',
          es: 'No indicada.'
        }
      },
      administration: { pt: ['Tomar inteiro com a primeira refeição principal do dia.', 'Omissão de refeição = omitir a dose.'], es: ['Tomar entero con la primera comida principal del día.', 'Omisión de comida = omitir la dosis.'] },
      renalAdjustment: { required: true, message: { pt: 'Metabólitos ativos se acumulam na DRC. Risco extremo de hipoglicemia letal se ClCr < 30. Descontinuar.', es: 'Metabolitos activos se acumulan en ERC. Riesgo extremo de hipoglucemia letal si ClCr < 30. Descontinuar.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Descontinuar na falência hepática severa.', es: 'Descontinuar en falla hepática severa.' } },
      commonAdverseEffects: { pt: ['Hipoglicemia frequente', 'Ganho de peso substancial', 'Náusea / Tontura'], es: ['Hipoglucemia frecuente', 'Ganancia de peso sustancial', 'Náusea / Mareo'] },
      dangerousAdverseEffects: { pt: ['Hipoglicemia cerebral severa / Coma'], es: ['Hipoglucemia cerebral severa / Coma'] },
      contraindications: {
        absolute: { pt: ['DM1', 'Alergia grave a sulfas', 'Doença renal terminal'], es: ['DM1', 'Alergia grave a sulfas', 'Enfermedad renal terminal'] },
        relative: { pt: ['Idosos (> 65 anos) - As diretrizes Beers desaconselham glimepirida em idosos pelo altíssimo risco de queda e coma hipoglicêmico.'], es: ['Ancianos (> 65 años) - Las directrices Beers desaconsejan glimepirida en ancianos por el altísimo riesgo de caída y coma hipoglucémico.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Evitar o uso em idosos a todo custo. Em emergências hipoglicêmicas por glimepirida, a infusão de glicose pode precisar ser mantida por até 48-72 horas, além do uso de Octreotide para inibir a secreção pancreática de insulina bloqueada pela sulfa.', es: 'Evitar el uso en ancianos a toda costa. En emergencias hipoglucémicas por glimepirida, la infusión de glucosa puede necesitar mantenerse por hasta 48-72 horas, además del uso de Octreotide para inhibir la secreción pancreática de insulina bloqueada por la sulfa.' }
      }
    },  // end glimepirida

/* ── SITAGLIPTINA ───────────────────────────────────────────────────── */
    "sitagliptina": {
      name: { pt: 'Sitagliptina', es: 'Sitagliptina' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Inibidor da DPP-4)', es: 'Antidiabético Oral (Inhibidor de la DPP-4)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (terapia adjuvante sem risco de hipoglicemia e peso-neutra)'],
        es: ['Diabetes Mellitus Tipo 2 (terapia adyuvante sin riesgo de hipoglucemia y peso-neutra)']
      },
      commercialNames: { br: ['Januvia', 'Janumet (c/ Metformina)'], ar: ['Januvia'] },
      presentation: { pt: ['Comprimidos 25 mg, 50 mg, 100 mg'], es: ['Comprimidos 25 mg, 50 mg, 100 mg'] },
      mechanism: {
        pt: 'Inibe a enzima Dipeptidil Peptidase-4 (DPP-4), que normalmente degrada as incretinas endógenas (GLP-1 e GIP). Ao inibir a degradação, prolonga a meia-vida do GLP-1 produzido pelo intestino após a refeição. Isso aumenta a secreção de insulina e inibe a secreção de glucagon de forma puramente glicose-dependente (se a glicose estiver normal, não age, logo, não causa hipoglicemia).',
        es: 'Inhibe la enzima Dipeptidil Peptidasa-4 (DPP-4), que normalmente degrada las incretinas endógenas (GLP-1 y GIP). Al inhibir la degradación, prolonga la vida media del GLP-1 producido por el intestino tras la comida. Esto aumenta la secreción de insulina e inhibe la secreción de glucagón de forma puramente glucosa-dependiente (si la glucosa está normal, no actúa, por lo tanto, no causa hipoglucemia).'
      },
      dose: {
        adult: {
          pt: '100 mg VO 1x/dia.',
          es: '100 mg VO 1 vez/día.'
        },
        pediatric: {
          pt: 'Não aprovada em pediatria.',
          es: 'No aprobada en pediatría.'
        }
      },
      administration: { pt: ['Independente das refeições.'], es: ['Independiente de las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'OBRIGATÓRIO AJUSTAR. ClCr 30-45: 50 mg/dia. ClCr < 30 ou Diálise: 25 mg/dia.', es: 'OBLIGATORIO AJUSTAR. ClCr 30-45: 50 mg/día. ClCr < 30 o Diálisis: 25 mg/día.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste em disfunção leve/moderada.', es: 'Sin necesidad de ajuste en disfunción leve/moderada.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Nasofaringite (infecções das vias aéreas superiores)'], es: ['Cefalea', 'Nasofaringitis (infecciones de las vías respiratorias superiores)'] },
      dangerousAdverseEffects: { pt: ['Pancreatite Aguda (evento adverso clássico da classe)', 'Dores articulares severas (artralgia incapacitante - Alerta FDA)', 'Penfigoide bolhoso (reação autoimune rara)'], es: ['Pancreatitis Aguda (evento adverso clásico de la clase)', 'Dolores articulares severos (artralgia incapacitante - Alerta FDA)', 'Penfigoide ampolloso (reacción autoinmune rara)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave', 'Cetoacidose diabética'], es: ['Hipersensibilidad grave', 'Cetoacidosis diabética'] },
        relative: { pt: ['Histórico de pancreatite prévia'], es: ['Historial de pancreatitis previa'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A Sitagliptina é peso-neutra (não engorda nem emagrece) e tem altíssima segurança contra hipoglicemias, sendo ideal para idosos (desde que ajustada pela TFG).', es: 'La Sitagliptina es peso-neutra (no engorda ni adelgaza) y tiene altísima seguridad contra hipoglucemias, siendo ideal para ancianos (siempre que se ajuste por la TFG).' }
      }
    },  // end sitagliptina

/* ── LINAGLIPTINA ───────────────────────────────────────────────────── */
    "linagliptina": {
      name: { pt: 'Linagliptina', es: 'Linagliptina' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Inibidor da DPP-4)', es: 'Antidiabético Oral (Inhibidor de la DPP-4)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (especialmente em pacientes com Doença Renal Crônica)'],
        es: ['Diabetes Mellitus Tipo 2 (especialmente en pacientes con Enfermedad Renal Crónica)']
      },
      commercialNames: { br: ['Trayenta', 'Trayenta Duo (c/ Metformina)'], ar: ['Trayenta'] },
      presentation: { pt: ['Comprimidos 5 mg'], es: ['Comprimidos 5 mg'] },
      mechanism: {
        pt: 'Mecanismo idêntico ao da sitagliptina (inibe a degradação do GLP-1 endógeno bloqueando a DPP-4). O grande diferencial da linagliptina é puramente farmacocinético: ela NÃO é eliminada pelos rins. Mais de 90% da droga é excretada de forma inalterada pela bile e fezes.',
        es: 'Mecanismo idéntico al de la sitagliptina (inhibe la degradación del GLP-1 endógeno bloqueando la DPP-4). El gran diferencial de la linagliptina es puramente farmacocinético: NO es eliminada por los riñones. Más del 90% de la droga se excreta de forma inalterada por la bilis y las heces.'
      },
      dose: {
        adult: {
          pt: '5 mg VO 1x/dia.',
          es: '5 mg VO 1 vez/día.'
        },
        pediatric: {
          pt: 'Não recomendada.',
          es: 'No recomendada.'
        }
      },
      administration: { pt: ['Independente das refeições.', 'Apenas 1 dose fixa possível (não exige titulação).'], es: ['Independiente de las comidas.', 'Solo 1 dosis fija posible (no exige titulación).'] },
      renalAdjustment: { required: false, message: { pt: 'A ÚNICA DPP-4 QUE NÃO PRECISA DE AJUSTE RENAL. Pode ser usada em dose plena (5mg) até mesmo em pacientes em hemodiálise.', es: 'LA ÚNICA DPP-4 QUE NO NECESITA AJUSTE RENAL. Puede ser usada en dosis plena (5mg) incluso en pacientes en hemodiálisis.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste, apesar da excreção biliar.', es: 'Sin necesidad de ajuste, a pesar de la excreción biliar.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Tosse / Nasofaringite'], es: ['Cefalea', 'Tos / Nasofaringitis'] },
      dangerousAdverseEffects: { pt: ['Pancreatite Aguda', 'Artralgias incapacitantes', 'Penfigoide bolhoso'], es: ['Pancreatitis Aguda', 'Artralgias incapacitantes', 'Penfigoide ampolloso'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Histórico de Pancreatite'], es: ['Historial de Pancreatitis'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'Trata-se da opção oral mais segura e confortável da endocrinologia para o paciente diabético idoso com insuficiência renal avançada, evitando o risco de toxicidade medicamentosa.', es: 'Se trata de la opción oral más segura y cómoda de la endocrinología para el paciente diabético anciano con insuficiencia renal avanzada, evitando el riesgo de toxicidad medicamentosa.' }
      }
    },  // end linagliptina

/* ── VILDAGLIPTINA ──────────────────────────────────────────────────── */
    "vildagliptina": {
      name: { pt: 'Vildagliptina', es: 'Vildagliptina' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Inibidor da DPP-4)', es: 'Antidiabético Oral (Inhibidor de la DPP-4)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (monoterapia ou combinada)'],
        es: ['Diabetes Mellitus Tipo 2 (monoterapia o combinada)']
      },
      commercialNames: { br: ['Galvus', 'Galvus Met (c/ Metformina)'], ar: ['Galvus'] },
      presentation: { pt: ['Comprimidos 50 mg'], es: ['Comprimidos 50 mg'] },
      mechanism: {
        pt: 'Inibidor competitivo e reversível da enzima DPP-4. Evita a degradação rápida das incretinas (GLP-1 e GIP), prolongando a estimulação da síntese de insulina e a supressão do glucagon de forma dependente dos níveis de glicose, sem risco de hipoglicemia inerente.',
        es: 'Inhibidor competitivo y reversible de la enzima DPP-4. Evita la degradación rápida de las incretinas (GLP-1 y GIP), prolongando la estimulación de la síntesis de insulina y la supresión del glucagón de forma dependiente de los niveles de glucosa, sin riesgo de hipoglucemia inherente.'
      },
      dose: {
        adult: {
          pt: 'Monoterapia ou com metformina: 50 mg VO 2x/dia (100 mg/dia). Com sulfonilureia: 50 mg VO 1x/dia pela manhã.',
          es: 'Monoterapia o con metformina: 50 mg VO 2 veces/día (100 mg/día). Con sulfonilurea: 50 mg VO 1 vez/día por la mañana.'
        },
        pediatric: {
          pt: 'Não recomendada em pediatria.',
          es: 'No recomendada en pediatría.'
        }
      },
      administration: { pt: ['Administrar independentemente das refeições.'], es: ['Administrar independientemente de las comidas.'] },
      renalAdjustment: { required: true, message: { pt: 'ClCr < 50 mL/min (moderada a grave/diálise): Reduzir a dose máxima para 50 mg 1x/dia.', es: 'ClCr < 50 mL/min (moderada a grave/diálisis): Reducir la dosis máxima a 50 mg 1 vez/día.' } },
      hepaticAdjustment: { required: true, message: { pt: 'CONTRAINDICADA em pacientes com disfunção hepática prévia ou se TGO/TGP estiverem > 3x o limite superior do normal.', es: 'CONTRAINDICADA en pacientes con disfunción hepática previa o si AST/ALT están > 3x el límite superior de lo normal.' } },
      commonAdverseEffects: { pt: ['Tontura', 'Cefaleia', 'Constipação', 'Tremores'], es: ['Mareos', 'Cefalea', 'Constipación', 'Temblores'] },
      dangerousAdverseEffects: { pt: ['Hepatite medicamentosa (DILI)', 'Pancreatite aguda', 'Edema angioneurótico'], es: ['Hepatitis medicamentosa (DILI)', 'Pancreatitis aguda', 'Edema angioneurótico'] },
      contraindications: {
        absolute: { pt: ['Insuficiência hepática ou transaminases elevadas', 'Hipersensibilidade grave'], es: ['Insuficiencia hepática o transaminasas elevadas', 'Hipersensibilidad grave'] },
        relative: { pt: ['Insuficiência cardíaca grave (NYHA IV)'], es: ['Insuficiencia cardíaca grave (NYHA IV)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ALERTA HEPÁTICO: Única DPP-4 que exige monitoramento de transaminases (TGO/TGP) antes do início, a cada 3 meses no primeiro ano e periodicamente depois.', es: 'ALERTA HEPÁTICA: Única DPP-4 que exige monitorización de transaminasas (AST/ALT) antes del inicio, cada 3 meses en el primer año y periódicamente después.' }
      }
    },  // end vildagliptina

/* ── PIOGLITAZONA ───────────────────────────────────────────────────── */
    "pioglitazona": {
      name: { pt: 'Pioglitazona', es: 'Pioglitazona' },
      category: 'endocrino',
      class: { pt: 'Antidiabético Oral (Tiazolidinediona / Glitazona)', es: 'Antidiabético Oral (Tiazolidinediona / Glitazona)' },
      indications: {
        pt: ['Diabetes Mellitus Tipo 2 (terapia de 2ª ou 3ª linha)', 'Esteato-hepatite não alcoólica - NASH (off-label)'],
        es: ['Diabetes Mellitus Tipo 2 (terapia de 2ª o 3ª línea)', 'Esteatohepatitis no alcohólica - NASH (off-label)']
      },
      commercialNames: { br: ['Actos', 'Piotaz'], ar: ['Actos'] },
      presentation: { pt: ['Comprimidos 15 mg, 30 mg, 45 mg'], es: ['Comprimidos 15 mg, 30 mg, 45 mg'] },
      mechanism: {
        pt: 'Sensibilizador de insulina. Atua como agonista seletivo do receptor nuclear PPAR-gama. Modula a transcrição de genes sensíveis à insulina envolvidos no controle da glicose e dos lipídios. Aumenta massivamente a captação de glicose no músculo esquelético e tecido adiposo e diminui a produção hepática.',
        es: 'Sensibilizador de insulina. Actúa como agonista selectivo del receptor nuclear PPAR-gamma. Modula la transcripción de genes sensibles a la insulina involucrados en el control de la glucosa y los lípidos. Aumenta masivamente la captación de glucosa en el músculo esquelético y tejido adiposo y disminuye la producción hepática.'
      },
      dose: {
        adult: {
          pt: 'Iniciar com 15 a 30 mg VO 1x/dia. Dose máxima de 45 mg/dia.',
          es: 'Iniciar con 15 a 30 mg VO 1 vez/día. Dosis máxima de 45 mg/día.'
        },
        pediatric: {
          pt: 'Não aprovada nem recomendada.',
          es: 'No aprobada ni recomendada.'
        }
      },
      administration: { pt: ['Tomar 1x ao dia, com ou sem alimentos.'], es: ['Tomar 1 vez al día, con o sin alimentos.'] },
      renalAdjustment: { required: false, message: { pt: 'Não requer ajuste em DRC, mas devido à retenção de fluidos intrínseca, deve ser evitada em DRC avançada por risco de edema/EAP.', es: 'No requiere ajuste en ERC, pero debido a la retención de fluidos intrínseca, debe ser evitada en ERC avanzada por riesgo de edema/EAP.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Evitar em disfunção hepática ou se TGO/TGP > 2,5x o limite normal.', es: 'Evitar en disfunción hepática o si AST/ALT > 2,5x el límite normal.' } },
      commonAdverseEffects: { pt: ['Retenção de líquidos (Edema periférico marcante)', 'Aumento de peso adiposo', 'Mialgia'], es: ['Retención de líquidos (Edema periférico marcado)', 'Aumento de peso adiposo', 'Mialgia'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Cardíaca Congestiva (ICC) induzida pela sobrecarga hídrica', 'Fraturas ósseas (osteoporose no uso crônico)', 'Câncer de bexiga (risco controverso em uso > 1 ano)'], es: ['Insuficiencia Cardíaca Congestiva (ICC) inducida por la sobrecarga hídrica', 'Fracturas óseas (osteoporosis en el uso crónico)', 'Cáncer de vejiga (riesgo controvertido en uso > 1 año)'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Cardíaca NYHA III e IV', 'Câncer de bexiga ativo ou histórico macro-hematúria inexplicada', 'Hepatopatia ativa'], es: ['Insuficiencia Cardíaca NYHA III y IV', 'Cáncer de vejiga activo o historial de macrohematuria inexplicada', 'Hepatopatía activa'] },
        relative: { pt: ['Osteoporose grave em mulheres pós-menopausa'], es: ['Osteoporosis grave en mujeres posmenopáusicas'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'BOXED WARNING (FDA): Pode causar ou exacerbar a Insuficiência Cardíaca Congestiva. O edema causado pelas glitazonas NÃO responde bem a diuréticos. O paciente deve ser monitorado para ganho de peso rápido, dispneia e edema.', es: 'BOXED WARNING (FDA): Puede causar o exacerbar la Insuficiencia Cardíaca Congestiva. El edema causado por las glitazonas NO responde bien a diuréticos. El paciente debe ser monitorizado para ganancia de peso rápida, disnea y edema.' }
      }
    },  // end pioglitazona

/* ── LEVOTIROXINA ───────────────────────────────────────────────────── */
    "levotiroxina": {
      name: { pt: 'Levotiroxina Sódica', es: 'Levotiroxina Sódica' },
      category: 'endocrino',
      class: { pt: 'Hormônio Tireoidiano (T4 Sintético)', es: 'Hormona Tiroidea (T4 Sintética)' },
      indications: {
        pt: ['Hipotireoidismo primário, secundário ou congênito', 'Supressão de TSH em carcinoma diferenciado de tireoide', 'Coma mixedematoso (via IV)'],
        es: ['Hipotiroidismo primario, secundario o congénito', 'Supresión de TSH en carcinoma diferenciado de tiroides', 'Coma mixedematoso (vía IV)']
      },
      commercialNames: { br: ['Puran T4', 'Synthroid', 'Euthyrox', 'Levoid'], ar: ['T4 Montpellier', 'Synthroid'] },
      presentation: { pt: ['Comprimidos de 12.5 mcg até 300 mcg', 'Ampolas IV 200 mcg (Restrito Hospitalar)'], es: ['Comprimidos de 12.5 mcg hasta 300 mcg', 'Ampollas IV 200 mcg (Restringido Hospitalario)'] },
      mechanism: {
        pt: 'Forma sintética da tiroxina (T4), idêntica à produzida pela glândula tireoide humana. No organismo, é desiodada periféricamente para formar a T3 (tri-iodotironina), que é a forma ativa celular, regulando o metabolismo basal, crescimento e desenvolvimento.',
        es: 'Forma sintética de la tiroxina (T4), idéntica a la producida por la glándula tiroidea humana. En el organismo, es desyodada periféricamente para formar la T3 (triyodotironina), que es la forma activa celular, regulando el metabolismo basal, crecimiento y desarrollo.'
      },
      dose: {
        adult: {
          pt: 'Hipotireoidismo: 1,6 mcg/kg/dia VO. Idosos ou coronariopatas: Iniciar com 12,5 a 25 mcg/dia e tatear. Coma Mixedematoso: 200 a 400 mcg IV (bolus lento).',
          es: 'Hipotiroidismo: 1,6 mcg/kg/día VO. Ancianos o coronariópatas: Iniciar con 12,5 a 25 mcg/día y tantear. Coma Mixedematoso: 200 a 400 mcg IV (bolo lento).'
        },
        pediatric: {
          pt: 'Hipotireoidismo congênito (Neonato): 10 a 15 mcg/kg/dia (urgência para evitar déficit neurológico).',
          es: 'Hipotiroidismo congénito (Neonato): 10 a 15 mcg/kg/día (urgencia para evitar déficit neurológico).'
        }
      },
      administration: { pt: ['TOMAR EM JEJUM RÍGIDO: Pelo menos 30 a 60 minutos antes do café da manhã, ou à noite deitar (se em jejum de 3h). Qualquer alimento ou café interfere violentamente na absorção.', 'Manter sempre a mesma marca se possível (margem terapêutica estreita).'], es: ['TOMAR EN AYUNAS RÍGIDO: Al menos 30 a 60 minutos antes del desayuno, o por la noche al acostarse (si ayuno de 3h). Cualquier alimento o café interfiere violentamente en la absorción.', 'Mantener siempre la misma marca si es posible (margen terapéutico estrecho).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Geralmente ocorrem apenas por superdosagem (hipertireoidismo iatrogênico): Palpitações, tremores, insônia, perda de peso'], es: ['Generalmente ocurren solo por sobredosis (hipertiroidismo iatrogénico): Palpitaciones, temblores, insomnio, pérdida de peso'] },
      dangerousAdverseEffects: { pt: ['Fibrilação atrial ou Arritmias graves', 'Isquemia miocárdica / Infarto (se introduzida subitamente em dose cheia em idosos)', 'Crise tireotóxica'], es: ['Fibrilación auricular o Arritmias graves', 'Isquemia miocárdica / Infarto (si es introducida súbitamente en dosis plena en ancianos)', 'Crisis tirotoxicósica'] },
      contraindications: {
        absolute: { pt: ['Insuficiência adrenal aguda não tratada (o T4 acelera o metabolismo dos corticoides remanescentes e precipita choque adrenal fatal)', 'Tireotoxicose', 'Infarto agudo do miocárdio recente'], es: ['Insuficiencia adrenal aguda no tratada (el T4 acelera el metabolismo de los corticoides remanentes y precipita choque adrenal fatal)', 'Tirotoxicosis', 'Infarto agudo de miocardio reciente'] },
        relative: { pt: ['Coronariopatia grave (requer titulação microscópica)'], es: ['Coronariopatía grave (requiere titulación microscópica)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'INTERAÇÃO ENDÓCRINA: Nunca inicie levotiroxina em um paciente com pan-hipopituitarismo sem ANTES repor o eixo do Cortisol (Glicocorticoides), sob risco de choque adrenal agudo irreversível.', es: 'INTERACCIÓN ENDOCRINA: Nunca inicie levotiroxina en un paciente con panhipopituitarismo sin ANTES reponer el eje del Cortisol (Glucocorticoides), bajo riesgo de choque adrenal agudo irreversible.' }
      }
    },  // end levotiroxina

/* ── PROPILTIOURACIL ────────────────────────────────────────────────── */
    "propiltiouracil": {
      name: { pt: 'Propiltiouracil (PTU)', es: 'Propiltiouracilo (PTU)' },
      category: 'endocrino',
      class: { pt: 'Agente Antitireoidiano (Tioamida)', es: 'Agente Antitiroideo (Tioamida)' },
      indications: {
        pt: ['Hipertireoidismo (Doença de Graves) NO PRIMEIRO TRIMESTRE da gravidez', 'Crise Tireotóxica (Tireotoxicose grave na UTI)', 'Intolerância ao metimazol'],
        es: ['Hipertiroidismo (Enfermedad de Graves) EN EL PRIMER TRIMESTRE del embarazo', 'Crisis Tirotoxicósica (Tirotoxicosis grave en UCI)', 'Intolerancia al metimazol']
      },
      commercialNames: { br: ['Propil'], ar: ['Propiltiouracilo'] },
      presentation: { pt: ['Comprimidos 100 mg'], es: ['Comprimidos 100 mg'] },
      mechanism: {
        pt: 'Inibe a enzima Tireoide Peroxidase (TPO), bloqueando a oxidação do iodo e sua incorporação na tireoglobulina (impede a síntese de T3 e T4). SEU GRANDE DIFERENCIAL NA UTI: O PTU também inibe a enzima 5-desiodase, bloqueando a conversão periférica de T4 para T3 (o hormônio mais ativo). Por isso é a escolha na Tempestade Tireoidiana.',
        es: 'Inhibe la enzima Tiroide Peroxidasa (TPO), bloqueando la oxidación del yodo y su incorporación en la tiroglobulina (impide la síntesis de T3 y T4). SU GRAN DIFERENCIAL EN UCI: El PTU también inhibe la enzima 5-desyodasa, bloqueando la conversión periférica de T4 a T3 (la hormona más activa). Por eso es la elección en la Tormenta Tiroidea.'
      },
      dose: {
        adult: {
          pt: 'Graves (1º Tri Gestação): 50 a 150 mg 8/8h. Crise Tireotóxica: 200 a 400 mg 8/8h (Dose de ataque pode chegar a 1000 mg na emergência).',
          es: 'Graves (1º Tri Embarazo): 50 a 150 mg cada 8h. Crisis Tirotoxicósica: 200 a 400 mg cada 8h (Dosis de ataque puede llegar a 1000 mg en emergencia).'
        },
        pediatric: {
          pt: 'Geralmente evitado devido a alta hepatotoxicidade (Metimazol é preferido).',
          es: 'Generalmente evitado debido a alta hepatotoxicidad (Metimazol es preferido).'
        }
      },
      administration: { pt: ['Devido à meia-vida curta (1 a 2 horas), DEVE ser administrado a cada 8 horas (3 vezes ao dia).'], es: ['Debido a la vida media corta (1 a 2 horas), DEBE administrarse cada 8 horas (3 veces al día).'] },
      renalAdjustment: { required: true, message: { pt: 'Reduzir dose em 25-50% se ClCr < 50 mL/min.', es: 'Reducir dosis en 25-50% si ClCr < 50 mL/min.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Drogas altamente hepatotóxicas. Suspender se transaminases subirem > 3x ou sinais clínicos de hepatite.', es: 'Drogas altamente hepatotóxicas. Suspender si transaminasas suben > 3x o signos clínicos de hepatitis.' } },
      commonAdverseEffects: { pt: ['Erupção cutânea (Rash) / Prurido', 'Artralgia (dores nas articulações)', 'Desconforto gástrico'], es: ['Erupción cutánea (Rash) / Prurito', 'Artralgia (dolores en las articulaciones)', 'Molestia gástrica'] },
      dangerousAdverseEffects: { pt: ['HEPATOTOXICIDADE FULMINANTE (Boxed Warning)', 'Agranulocitose (queda severa de leucócitos - risco de sepse)', 'Vasculite ANCA-positiva'], es: ['HEPATOTOXICIDAD FULMINANTE (Boxed Warning)', 'Agranulocitosis (caída severa de leucocitos - riesgo de sepsis)', 'Vasculitis ANCA-positiva'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Insuficiência hepática aguda', 'Agranulocitose prévia induzida por tioamidas'], es: ['Hipersensibilidad', 'Insuficiencia hepática aguda', 'Agranulocitosis previa inducida por tioamidas'] },
        relative: { pt: ['Uso pediátrico de rotina (não indicado)'], es: ['Uso pediátrico de rutina (no indicado)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Risco de Hepatite Fulminante letal. Reservado APENAS para o 1º trimestre da gestação e Crise Tireotóxica na UTI. Nos demais casos, o METIMAZOL é a escolha.', es: 'Riesgo de Hepatitis Fulminante letal. Reservado SOLO para el 1º trimestre del embarazo y Crisis Tirotoxicósica en UCI. En los demás casos, el METIMAZOL es la elección.' }
      }
    },  // end propiltiouracil

/* ── METIMAZOL / TIAMAZOL ───────────────────────────────────────────── */
    "metimazol": {
      name: { pt: 'Metimazol / Tiamazol', es: 'Metimazol / Tiamazol' },
      category: 'endocrino',
      class: { pt: 'Agente Antitireoidiano (Tioamida)', es: 'Agente Antitiroideo (Tioamida)' },
      indications: {
        pt: ['Tratamento padrão do Hipertireoidismo (Doença de Graves)', 'Preparo para tireoidectomia ou terapia com iodo radioativo'],
        es: ['Tratamiento estándar del Hipertiroidismo (Enfermedad de Graves)', 'Preparación para tiroidectomía o terapia con yodo radiactivo']
      },
      commercialNames: { br: ['Tapazol'], ar: ['Danantizol'] },
      presentation: { pt: ['Comprimidos 5 mg, 10 mg'], es: ['Comprimidos 5 mg, 10 mg'] },
      mechanism: {
        pt: 'Inibe a Tireoide Peroxidase (TPO), impedindo a síntese de novos hormônios tireoidianos (T3 e T4). É cerca de 10 vezes mais potente que o PTU e possui meia-vida muito mais longa (6 a 8 horas, permitindo efeito clínico de 24h). NÃO inibe a conversão periférica de T4 para T3.',
        es: 'Inhibe la Tiroide Peroxidasa (TPO), impidiendo la síntesis de nuevas hormonas tiroideas (T3 y T4). Es cerca de 10 veces más potente que el PTU y posee vida media mucho más larga (6 a 8 horas, permitiendo efecto clínico de 24h). NO inhibe la conversión periférica de T4 a T3.'
      },
      dose: {
        adult: {
          pt: 'Dose inicial: 10 a 40 mg/dia em DOSE ÚNICA ou dividida 12/12h. Manutenção: 5 a 15 mg/dia.',
          es: 'Dosis inicial: 10 a 40 mg/día en DOSIS ÚNICA o dividida cada 12h. Mantenimiento: 5 a 15 mg/día.'
        },
        pediatric: {
          pt: '0,4 a 0,7 mg/kg/dia inicial. Droga de escolha na pediatria.',
          es: '0,4 a 0,7 mg/kg/día inicial. Droga de elección en pediatría.'
        }
      },
      administration: { pt: ['Administrado preferencialmente 1x ao dia (grande vantagem de adesão sobre o PTU).'], es: ['Administrado preferentemente 1 vez al día (gran ventaja de adhesión sobre el PTU).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Embora cause menos hepatite fulminante que o PTU, pode causar icterícia colestática. Suspender se TGO/TGP > 3x o normal.', es: 'Aunque causa menos hepatitis fulminante que el PTU, puede causar ictericia colestásica. Suspender si AST/ALT > 3x lo normal.' } },
      commonAdverseEffects: { pt: ['Rash maculopapular e urticária (frequentes)', 'Artralgia', 'Distúrbios do paladar e olfato'], es: ['Rash maculopapular y urticaria (frecuentes)', 'Artralgia', 'Disturbios del gusto y olfato'] },
      dangerousAdverseEffects: { pt: ['Agranulocitose (0,2 a 0,5% dos casos, surge subitamente com febre e dor de garganta)', 'Hepatite colestática', 'Aplasia cutis congênita (teratogenicidade)'], es: ['Agranulocitosis (0,2 a 0,5% de los casos, surge súbitamente con fiebre y dolor de garganta)', 'Hepatitis colestásica', 'Aplasia cutis congénita (teratogenicidad)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade', 'Agranulocitose prévia a tioamidas', 'PRIMEIRO trimestre de gravidez (Causa malformações graves como aplasia cutis no feto)'], es: ['Hipersensibilidad', 'Agranulocitosis previa a tioamidas', 'PRIMER trimestre de embarazo (Causa malformaciones graves como aplasia cutis en el feto)'] },
        relative: { pt: ['Disfunção hepática moderada'], es: ['Disfunción hepática moderada'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ORIENTAÇÃO OBRIGATÓRIA: O paciente deve ser instruído a suspender imediatamente a medicação e buscar um pronto-socorro para colher Hemograma se apresentar FEBRE ou DOR DE GARGANTA aguda (suspeita de agranulocitose).', es: 'ORIENTACIÓN OBLIGATORIA: El paciente debe ser instruido a suspender inmediatamente la medicación y buscar urgencias para extraer Hemograma si presenta FIEBRE o DOLOR DE GARGANTA agudo (sospecha de agranulocitosis).' }
      }
    },  // end metimazol

/* ── DESMOPRESSINA (DDAVP) ──────────────────────────────────────────── */
    "desmopressina": {
      name: { pt: 'Desmopressina (DDAVP)', es: 'Desmopresina (DDAVP)' },
      category: 'endocrino',
      class: { pt: 'Análogo Sintético da Vasopressina (ADH)', es: 'Análogo Sintético de la Vasopresina (ADH)' },
      indications: {
        pt: ['Diabetes Insipidus Central', 'Doença de von Willebrand (Tipo 1)', 'Hemofilia A leve', 'Enurese noturna primária'],
        es: ['Diabetes Insípida Central', 'Enfermedad de von Willebrand (Tipo 1)', 'Hemofilia A leve', 'Enuresis nocturna primaria']
      },
      commercialNames: { br: ['DDAVP', 'Octostim'], ar: ['Octostim', 'Desmopresina'] },
      presentation: { pt: ['Ampolas IV/SC 4 mcg/mL', 'Spray Nasal 10 mcg/dose', 'Comprimidos 0,1 mg, 0,2 mg'], es: ['Ampollas IV/SC 4 mcg/mL', 'Spray Nasal 10 mcg/dose', 'Comprimidos 0,1 mg, 0,2 mg'] },
      mechanism: {
        pt: 'Análogo do hormônio antidiurético (ADH). Possui potente ação nos receptores V2 renais, aumentando a reabsorção de água (efeito antidiurético massivo) sem o efeito vasoconstritor (V1) da vasopressina natural. Na hematologia, a ativação V2 extra-renal promove a liberação imediata de Fator VIII e Fator de von Willebrand do endotélio vascular (células de Weibel-Palade) para o sangue.',
        es: 'Análogo de la hormona antidiurética (ADH). Posee potente acción en los receptores V2 renales, aumentando la reabsorción de agua (efecto antidiurético masivo) sin el efecto vasoconstrictor (V1) de la vasopresina natural. En hematología, la activación V2 extrarrenal promueve la liberación inmediata de Factor VIII y Factor de von Willebrand del endotelio vascular (células de Weibel-Palade) hacia la sangre.'
      },
      dose: {
        adult: {
          pt: 'Diabetes Insipidus: 0,1 a 0,2 mg VO 2 a 3x/dia ou 1 a 2 mcg IV/SC a cada 12h. Hematologia: 0,3 mcg/kg IV (diluído em SF) infundido em 30 min antes de cirurgias.',
          es: 'Diabetes Insípida: 0,1 a 0,2 mg VO 2 a 3 veces/día o 1 a 2 mcg IV/SC cada 12h. Hematología: 0,3 mcg/kg IV (diluido en SF) infundido en 30 min antes de cirugías.'
        },
        pediatric: {
          pt: 'Enurese: 0,2 mg VO ao deitar (restringir líquidos 1h antes).',
          es: 'Enuresis: 0,2 mg VO al acostarse (restringir líquidos 1h antes).'
        }
      },
      administration: { pt: ['Na indicação de enurese, OBRIGATÓRIA a restrição hídrica (não beber água de 1h antes até 8h após a dose) para evitar intoxicação hídrica.'], es: ['En la indicación de enuresis, OBLIGATORIA la restricción hídrica (no beber agua desde 1h antes hasta 8h después de la dosis) para evitar intoxicación hídrica.'] },
      renalAdjustment: { required: true, message: { pt: 'CONTRAINDICADA se ClCr < 50 mL/min (Risco letal de retenção hídrica e hiponatremia dilucional aguda).', es: 'CONTRAINDICADA si ClCr < 50 mL/min (Riesgo letal de retención hídrica e hiponatremia dilucional aguda).' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Rubor facial (Flushing)', 'Náuseas'], es: ['Cefalea', 'Rubor facial (Flushing)', 'Náuseas'] },
      dangerousAdverseEffects: { pt: ['Hiponatremia severa (intoxicação hídrica)', 'Convulsões e Coma (edema cerebral secundário à hiponatremia)', 'Trombose (em pacientes com alto risco cardiovascular devido ao aumento do Fator VIII)'], es: ['Hiponatremia severa (intoxicación hídrica)', 'Convulsiones y Coma (edema cerebral secundario a la hiponatremia)', 'Trombosis (en pacientes con alto riesgo cardiovascular debido al aumento del Factor VIII)'] },
      contraindications: {
        absolute: { pt: ['Hiponatremia basal', 'Insuficiência Cardíaca Congestiva (ICC)', 'Polidipsia psicogênica ou habitual'], es: ['Hiponatremia basal', 'Insuficiencia Cardíaca Congestiva (ICC)', 'Polidipsia psicogénica o habitual'] },
        relative: { pt: ['Hipertensão não controlada', 'Doença arterial coronariana'], es: ['Hipertensión no controlada', 'Enfermedad arterial coronaria'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ALERTA NEUROLÓGICO: Monitoramento rigoroso do Sódio Sérico (Na+) é mandatório nos primeiros dias de uso e em ajustes de dose. Quedas abruptas de sódio causam edema cerebral letal.', es: 'ALERTA NEUROLÓGICA: Monitorización rigurosa del Sodio Sérico (Na+) es mandatoria en los primeros días de uso y en ajustes de dosis. Caídas abruptas de sodio causan edema cerebral letal.' }
      }
    },  // end desmopressina

/* ── CABERGOLINA ────────────────────────────────────────────────────── */
    "cabergolina": {
      name: { pt: 'Cabergolina', es: 'Cabergolina' },
      category: 'endocrino',
      class: { pt: 'Agonista Dopaminérgico D2 (Derivado do Ergot)', es: 'Agonista Dopaminérgico D2 (Derivado del Ergot)' },
      indications: {
        pt: ['Hiperprolactinemia idiopática ou por Prolactinomas (Micro/Macroadenomas)', 'Inibição/Supressão da lactação fisiológica (pós-parto ou aborto)'],
        es: ['Hiperprolactinemia idiopática o por Prolactinomas (Micro/Macroadenomas)', 'Inhibición/Supresión de la lactancia fisiológica (posparto o aborto)']
      },
      commercialNames: { br: ['Dostinex', 'Cabertrix'], ar: ['Dostinex'] },
      presentation: { pt: ['Comprimidos 0,5 mg'], es: ['Comprimidos 0,5 mg'] },
      mechanism: {
        pt: 'Estimula de forma direta, altamente seletiva e prolongada os receptores dopaminérgicos D2 nos lactotrofos da hipófise anterior. Como a dopamina é o inibidor natural da prolactina (PIF), a droga suprime drasticamente a secreção de prolactina e induz apoptose/redução tumoral nos prolactinomas. Possui meia-vida plasmática ultralonga (65 horas).',
        es: 'Estimula de forma directa, altamente selectiva y prolongada los receptores dopaminérgicos D2 en los lactotrofos de la hipófisis anterior. Como la dopamina es el inhibidor natural de la prolactina (PIF), la droga suprime drásticamente la secreción de prolactina e induce apoptosis/reducción tumoral en los prolactinomas. Posee vida media plasmática ultralarga (65 horas).'
      },
      dose: {
        adult: {
          pt: 'Prolactinomas/Hiperprolactinemia: Iniciar 0,25 mg 2x/semana. Aumentar mensalmente se necessário (geralmente 1 mg/semana). Inibição da lactação (1º dia pós-parto): 1 mg VO dose única.',
          es: 'Prolactinomas/Hiperprolactinemia: Iniciar 0,25 mg 2 veces/semana. Aumentar mensualmente si es necesario (generalmente 1 mg/semana). Inhibición de la lactancia (1º día posparto): 1 mg VO dosis única.'
        },
        pediatric: {
          pt: 'Não recomendada para < 16 anos (exceto casos raros de macroadenomas sob protocolo estrito).',
          es: 'No recomendada para < 16 años (excepto casos raros de macroadenomas bajo protocolo estricto).'
        }
      },
      administration: { pt: ['Tomar sempre COM ALIMENTOS para evitar náusea severa.', 'Em tumores, a dose semanal deve ser dividida em 2 tomadas (ex: metade terça, metade sexta).'], es: ['Tomar siempre CON ALIMENTOS para evitar náusea severa.', 'En tumores, la dosis semanal debe dividirse en 2 tomas (ej: mitad martes, mitad viernes).'] },
      renalAdjustment: { required: false, message: { pt: 'Extensamente metabolizada no fígado; sem ajuste renal.', es: 'Extensamente metabolizada en el hígado; sin ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Pacientes com insuficiência hepática grave exigem doses muito menores (droga se acumula).', es: 'Pacientes con insuficiencia hepática grave exigen dosis mucho menores (droga se acumula).' } },
      commonAdverseEffects: { pt: ['Náusea (muito comum)', 'Hipotensão ortostática (tontura ao levantar)', 'Cefaleia', 'Astenia'], es: ['Náusea (muy común)', 'Hipotensión ortostática (mareo al levantarse)', 'Cefalea', 'Astenia'] },
      dangerousAdverseEffects: { pt: ['Valvulopatia cardíaca fibrótica (refluxo mitral/aórtico) no uso crônico em altas doses', 'Alucinações / Psicose', 'Derrame pleural / Fibrose pulmonar'], es: ['Valvulopatía cardíaca fibrótica (reflujo mitral/aórtico) en el uso crónico en altas dosis', 'Alucinaciones / Psicosis', 'Derrame pleural / Fibrosis pulmonar'] },
      contraindications: {
        absolute: { pt: ['Histórico de valvulopatia cardíaca', 'Hipertensão não controlada pós-parto / Pré-eclâmpsia (risco de AVC)', 'Hipersensibilidade a derivados do Ergot'], es: ['Historial de valvulopatía cardíaca', 'Hipertensión no controlada posparto / Preeclampsia (riesgo de ACV)', 'Hipersensibilidad a derivados del Ergot'] },
        relative: { pt: ['Histórico de doença psiquiátrica grave (esquizofrenia)'], es: ['Historial de enfermedad psiquiátrica grave (esquizofrenia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'ECOCARDIOGRAMA DE CONTROLE: Obrigatório antes de iniciar o tratamento crônico e anualmente depois, devido ao risco de fibrose nas válvulas cardíacas induzida por ativação de receptores serotoninérgicos (5-HT2B).', es: 'ECOCARDIOGRAMA DE CONTROL: Obligatorio antes de iniciar el tratamiento crónico y anualmente después, debido al riesgo de fibrosis en las válvulas cardíacas inducida por activación de receptores serotoninérgicos (5-HT2B).' }
      }
    },  // end cabergolina

/* ── BROMOCRIPTINA ──────────────────────────────────────────────────── */
    "bromocriptina": {
      name: { pt: 'Bromocriptina', es: 'Bromocriptina' },
      category: 'endocrino',
      class: { pt: 'Agonista Dopaminérgico (Derivado do Ergot)', es: 'Agonista Dopaminérgico (Derivado del Ergot)' },
      indications: {
        pt: ['Hiperprolactinemia', 'Acromegalia (terapia adjuvante)', 'Doença de Parkinson (não preferencial)', 'Diabetes Mellitus Tipo 2 (formulação de liberação rápida Cycloset)'],
        es: ['Hiperprolactinemia', 'Acromegalia (terapia adyuvante)', 'Enfermedad de Parkinson (no preferencial)', 'Diabetes Mellitus Tipo 2 (formulación de liberación rápida Cycloset)']
      },
      commercialNames: { br: ['Parlodel'], ar: ['Parlodel'] },
      presentation: { pt: ['Comprimidos 2,5 mg', 'Cápsulas 5 mg'], es: ['Comprimidos 2,5 mg', 'Cápsulas 5 mg'] },
      mechanism: {
        pt: 'Agonista dos receptores de dopamina D2. Assim como a cabergolina, suprime a prolactina hipofisária. No entanto, possui meia-vida muito mais curta, exigindo administração diária (frequentemente várias vezes ao dia). No DM2, atua modulando o relógio biológico hipotalâmico, reduzindo a resistência insulínica.',
        es: 'Agonista de los receptores de dopamina D2. Al igual que la cabergolina, suprime la prolactina hipofisaria. Sin embargo, posee vida media mucho más corta, exigiendo administración diaria (frecuentemente varias veces al día). En DM2, actúa modulando el reloj biológico hipotalámico, reduciendo la resistencia insulínica.'
      },
      dose: {
        adult: {
          pt: 'Hiperprolactinemia: 1,25 a 2,5 mg/dia, até 15 mg/dia divididos em 2 a 3 tomadas. Acromegalia: 10 a 30 mg/dia.',
          es: 'Hiperprolactinemia: 1,25 a 2,5 mg/día, hasta 15 mg/día divididos en 2 a 3 tomas. Acromegalia: 10 a 30 mg/día.'
        },
        pediatric: {
          pt: '1,25 a 2,5 mg/dia para prolactinomas > 11 anos.',
          es: '1,25 a 2,5 mg/día para prolactinomas > 11 años.'
        }
      },
      administration: { pt: ['Deve ser ingerida sempre com as refeições (alta incidência de náusea).'], es: ['Debe ingerirse siempre con las comidas (alta incidencia de náusea).'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste renal.', es: 'Sin necesidad de ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Reduzir dose em insuficiência hepática (metabolismo hepático via CYP3A4).', es: 'Reducir dosis en insuficiencia hepática (metabolismo hepático vía CYP3A4).' } },
      commonAdverseEffects: { pt: ['Náuseas / Vômitos intensos', 'Cefaleia', 'Hipotensão postural grave (síncope da primeira dose)', 'Congestão nasal'], es: ['Náuseas / Vómitos intensos', 'Cefalea', 'Hipotensión postural grave (síncope de la primera dosis)', 'Congestión nasal'] },
      dangerousAdverseEffects: { pt: ['Infarto agudo do miocárdio / AVC (em uso pós-parto, sendo por isso contraindicada para secar o leite atualmente)', 'Alucinações / Confusão', 'Fibrose retroperitoneal'], es: ['Infarto agudo de miocardio / ACV (en uso posparto, siendo por ello contraindicada para secar la leche actualmente)', 'Alucinaciones / Confusión', 'Fibrosis retroperitoneal'] },
      contraindications: {
        absolute: { pt: ['Hipertensão descontrolada', 'Hipertensão induzida pela gravidez (Pré-eclâmpsia/Eclâmpsia)', 'Doença isquêmica do coração severa'], es: ['Hipertensión descontrolada', 'Hipertensión inducida por el embarazo (Preeclampsia/Eclampsia)', 'Enfermedad isquémica del corazón severa'] },
        relative: { pt: ['Úlcera péptica', 'Uso concomitante com inibidores fortes do CYP3A4'], es: ['Úlcera péptica', 'Uso concomitante con inhibidores fuertes del CYP3A4'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'DIFERENÇA CLÍNICA: A Cabergolina substituiu quase inteiramente a bromocriptina no tratamento de tumores devido à maior eficácia e perfil muito menor de náuseas. Bromocriptina não deve mais ser prescrita rotineiramente para suprimir lactação por mortes maternas relatadas.', es: 'DIFERENCIA CLÍNICA: La Cabergolina sustituyó casi enteramente a la bromocriptina en el tratamiento de tumores debido a la mayor eficacia y perfil mucho menor de náuseas. La bromocriptina ya no debe prescribirse rutinariamente para suprimir lactancia por muertes maternas reportadas.' }
      }
    }  // end bromocriptina

  }); /* fim Object.assign ENDOCRINO_DRUGS_DB — BUILD 316 Lote 1+2+3+4+5 (Insulinas + NPH/Incretinas/Glucagon + Antidiabéticos Orais + Tireoide + Hipófise) */

})();
/* GOLD33_SELECTIVE:bromocriptina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["bromocriptina"])throw new Error("GOLD33_MISSING_CANONICAL:bromocriptina");db["bromocriptina"].mcGoldClinicalV1={
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
    "name": "Bromocriptina",
    "class": "Agonista dopaminérgico",
    "pharmacologicClass": "Agonista D2 derivado do ergot",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos/cápsulas 2,5/5 mg; formulação de liberação rápida para diabetes é distinta.",
    "presentations": "Comprimidos/cápsulas 2,5/5 mg; formulação de liberação rápida para diabetes é distinta.",
    "mechanism": "Agonista D2 derivado do ergot. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Absorção oral baixa por primeira passagem; CYP3A4; meia-vida terminal ~15 h; eliminação fecal.",
    "indications": "Hiperprolactinemia, acromegalia e doença de Parkinson; indicação/formulação varia.",
    "dose": "Hiperprolactinemia: iniciar 1,25-2,5 mg/dia com alimento e titular; faixa usual 2,5-15 mg/dia. Acromegalia/Parkinson usam esquemas próprios.",
    "pediatricDose": "Segurança depende da indicação; não automatizar dose pediátrica.",
    "renalDose": "Sem ajuste tabelado; cautela em doença grave.",
    "hepaticDose": "Metabolismo hepático; usar cautela e titular lentamente.",
    "commonAdverseEffects": "Náusea, cefaleia, tontura, constipação e hipotensão ortostática.",
    "dangerousAdverseEffects": "Síncope, psicose, impulsividade, vasoespasmo, fibrose e eventos cardiovasculares raros.",
    "adverseEffects": "Náusea, cefaleia, tontura, constipação e hipotensão ortostática. Graves: Síncope, psicose, impulsividade, vasoespasmo, fibrose e eventos cardiovasculares raros.",
    "contraindications": "Hipersensibilidade a ergot, hipertensão não controlada e, em algumas indicações, doença cardiovascular grave.",
    "interactions": "Inibidores CYP3A4 elevam exposição; anti-hipertensivos, antagonistas dopaminérgicos e outros ergotamínicos exigem revisão.",
    "monitoring": "Prolactina/objetivo clínico, PA ortostática, sintomas psiquiátricos, fibrose/valvulopatia em uso prolongado e fígado.",
    "administration": "VO com alimento; iniciar à noite pode reduzir náusea/hipotensão.",
    "preparation": "Comprimido pronto; não intercambiar formulações.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Pode restaurar fertilidade; uso gestacional exige indicação especializada.",
    "lactation": "Suprime lactação; geralmente incompatível com objetivo de amamentar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Síncope, psicose, impulsividade, vasoespasmo, fibrose e eventos cardiovasculares raros. Dose bloqueada sem indicação, formulação, PA, gravidez/puerpério, fígado, psiquiatria e interações CYP3A4.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bromocriptine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/1202/smpc"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bromocriptine"
  },
  "es": {
    "name": "Bromocriptina",
    "class": "Agonista dopaminérgico",
    "pharmacologicClass": "Agonista D2 derivado del ergot",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos/cápsulas 2,5/5 mg; formulación de liberación rápida para diabetes es distinta.",
    "presentations": "Comprimidos/cápsulas 2,5/5 mg; formulación de liberación rápida para diabetes es distinta.",
    "mechanism": "Agonista D2 derivado del ergot. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Absorción oral baja por primer paso; CYP3A4; semivida terminal ~15 h; eliminación fecal.",
    "indications": "Hiperprolactinemia, acromegalia y Parkinson; indicación/formulación variable.",
    "dose": "Hiperprolactinemia: iniciar 1,25-2,5 mg/día con alimentos y titular; habitual 2,5-15 mg/día. Acromegalia/Parkinson usan esquemas propios.",
    "pediatricDose": "Seguridad depende de indicación; no automatizar dosis pediátrica.",
    "renalDose": "Sin ajuste tabulado; precaución en enfermedad grave.",
    "hepaticDose": "Metabolismo hepático; usar precaución y titular lentamente.",
    "commonAdverseEffects": "Náusea, cefalea, mareo, estreñimiento e hipotensión ortostática.",
    "dangerousAdverseEffects": "Síncope, psicosis, impulsividad, vasoespasmo, fibrosis y eventos cardiovasculares raros.",
    "adverseEffects": "Náusea, cefalea, mareo, estreñimiento e hipotensión ortostática. Graves: Síncope, psicosis, impulsividad, vasoespasmo, fibrosis y eventos cardiovasculares raros.",
    "contraindications": "Hipersensibilidad a ergot, hipertensión no controlada y, en algunas indicaciones, enfermedad cardiovascular grave.",
    "interactions": "Inhibidores CYP3A4 elevan exposición; antihipertensivos, antagonistas dopaminérgicos y otros ergotamínicos requieren revisión.",
    "monitoring": "Prolactina/objetivo clínico, PA ortostática, síntomas psiquiátricos, fibrosis/valvulopatía en uso prolongado e hígado.",
    "administration": "VO con alimentos; iniciar de noche puede reducir náusea/hipotensión.",
    "preparation": "Comprimido listo; no intercambiar formulaciones.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Puede restaurar fertilidad; uso gestacional requiere indicación especializada.",
    "lactation": "Suprime lactancia; generalmente incompatible con objetivo de amamantar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Síncope, psicosis, impulsividad, vasoespasmo, fibrosis y eventos cardiovasculares raros. Dose bloqueada sem indicação, formulação, PA, gravidez/puerpério, fígado, psiquiatria e interações CYP3A4.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bromocriptine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/1202/smpc"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=bromocriptine"
  }
};})();
/* GOLD33_SELECTIVE:bromocriptina:END */
/* GOLD33_SELECTIVE:cabergolina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["cabergolina"])throw new Error("GOLD33_MISSING_CANONICAL:cabergolina");db["cabergolina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "013",
    "requiredFieldCount": 33,
    "approvedSha256": "9e2bb4dd7dab045f089fff2c5b88e1d5f0afd80731602b0c3fabff299d094223",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Cabergolina",
    "class": "Agonista dopaminérgico derivado do ergot",
    "pharmacologicClass": "Agonista D2 de longa ação",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 0,5 mg; algumas jurisdições possuem outras forças.",
    "presentations": "Comprimidos 0,5 mg; algumas jurisdições possuem outras forças.",
    "mechanism": "Agonista D2 de longa ação. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Tmax 2-3 h; alta ligação proteica; metabolismo por hidrólise; meia-vida longa ~63-69 h; eliminação fecal predominante.",
    "indications": "Tratamento de distúrbios hiperprolactinêmicos; usos e limites variam por jurisdição.",
    "dose": "Iniciar 0,25 mg duas vezes por semana; aumentar 0,25 mg duas vezes/semana em intervalos não menores que 4 semanas conforme prolactina; máximo rotulado EUA 1 mg duas vezes/semana.",
    "pediatricDose": "Segurança e eficácia não estabelecidas no rótulo para pediatria. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste formal rotulado; dados limitados em doença grave.",
    "hepaticDose": "Exposição aumenta na insuficiência grave; usar dose menor e monitorar.",
    "commonAdverseEffects": "Náusea, cefaleia, tontura, constipação, fadiga e hipotensão.",
    "dangerousAdverseEffects": "Valvulopatia/fibrose, síncope, psicose e transtornos de controle de impulso.",
    "adverseEffects": "Náusea, cefaleia, tontura, constipação, fadiga e hipotensão. Graves: Valvulopatia/fibrose, síncope, psicose e transtornos de controle de impulso.",
    "contraindications": "Hipertensão não controlada, hipersensibilidade a ergot e histórico de valvulopatia/fibrose conforme rótulo.",
    "interactions": "Antagonistas D2 reduzem efeito; macrolídeos/inibidores metabólicos podem elevar exposição; outros ergotamínicos e anti-hipertensivos exigem cautela.",
    "monitoring": "Prolactina mensal durante titulação, PA ortostática, gravidez, sintomas de fibrose/valvulopatia e impulsividade.",
    "administration": "VO uma ou duas vezes por semana, preferencialmente com alimento se náusea; titular lentamente.",
    "preparation": "Comprimido pronto; dividir apenas se sulcado e permitido.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Suspender quando gravidez confirmada na maioria dos microprolactinomas; decisão especializada em macroadenoma.",
    "lactation": "Suprime lactação e não deve ser usada quando se deseja amamentar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Valvulopatia/fibrose, síncope, psicose e transtornos de controle de impulso. Titulação bloqueada sem indicação, prolactina, gravidez, PA, fígado e avaliação de valvulopatia/fibrose.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cabergoline",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=cabergoline"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cabergoline"
  },
  "es": {
    "name": "Cabergolina",
    "class": "Agonista dopaminérgico derivado del ergot",
    "pharmacologicClass": "Agonista D2 de acción prolongada",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 0,5 mg; algunas jurisdicciones tienen otras dosis.",
    "presentations": "Comprimidos 0,5 mg; algunas jurisdicciones tienen otras dosis.",
    "mechanism": "Agonista D2 de acción prolongada. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Tmax 2-3 h; alta unión proteica; metabolismo por hidrólisis; semivida larga ~63-69 h; eliminación fecal predominante.",
    "indications": "Tratamiento de trastornos hiperprolactinémicos; usos y límites varían según jurisdicción.",
    "dose": "Iniciar 0,25 mg dos veces por semana; aumentar 0,25 mg dos veces/semana a intervalos no menores de 4 semanas según prolactina; máximo rotulado EE. UU. 1 mg dos veces/semana.",
    "pediatricDose": "Seguridad y eficacia no establecidas en ficha para pediatría. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste formal en ficha; datos limitados en enfermedad grave.",
    "hepaticDose": "La exposición aumenta en insuficiencia grave; usar dosis menor y vigilar.",
    "commonAdverseEffects": "Náusea, cefalea, mareo, estreñimiento, fatiga e hipotensión.",
    "dangerousAdverseEffects": "Valvulopatía/fibrosis, síncope, psicosis y trastornos del control de impulsos.",
    "adverseEffects": "Náusea, cefalea, mareo, estreñimiento, fatiga e hipotensión. Graves: Valvulopatía/fibrosis, síncope, psicosis y trastornos del control de impulsos.",
    "contraindications": "Hipertensión no controlada, hipersensibilidad a ergot y antecedente de valvulopatía/fibrosis según ficha.",
    "interactions": "Antagonistas D2 reducen efecto; macrólidos/inhibidores metabólicos pueden elevar exposición; otros ergotamínicos y antihipertensivos requieren precaución.",
    "monitoring": "Prolactina mensual durante titulación, PA ortostática, embarazo, síntomas de fibrosis/valvulopatía e impulsividad.",
    "administration": "VO una o dos veces por semana, preferentemente con alimentos si náusea; titular lentamente.",
    "preparation": "Comprimido listo; dividir solo si está ranurado y permitido.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Suspender al confirmar embarazo en la mayoría de microprolactinomas; decisión especializada en macroadenoma.",
    "lactation": "Suprime lactancia y no debe usarse si se desea amamantar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Valvulopatía/fibrosis, síncope, psicosis y trastornos del control de impulsos. Titulação bloqueada sem indicação, prolactina, gravidez, PA, fígado e avaliação de valvulopatia/fibrose.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cabergoline",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=cabergoline"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=cabergoline"
  }
};})();
/* GOLD33_SELECTIVE:cabergolina:END */
/* GOLD33_SELECTIVE:desmopressina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["desmopressina"])throw new Error("GOLD33_MISSING_CANONICAL:desmopressina");db["desmopressina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "024",
    "requiredFieldCount": 33,
    "approvedSha256": "9721657a393121ed360ce59ff910deb7cbb3b0fc3421608349c6fa584237305a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Desmopressina",
    "class": "Análogo da vasopressina",
    "pharmacologicClass": "Agonista V2 antidiurético",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 0,1/0,2 mg, spray/solução nasal, injetável e liofilizado sublingual; não intercambiáveis.",
    "presentations": "Comprimidos 0,1/0,2 mg, spray/solução nasal, injetável e liofilizado sublingual; não intercambiáveis.",
    "mechanism": "Agonista V2 antidiurético. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Maior seletividade V2 que vasopressina; duração e biodisponibilidade dependem da via.",
    "indications": "Diabetes insípido central; enurese noturna primária e noctúria apenas nas formulações/idades rotuladas.",
    "dose": "DI central oral: início usual 0,05 mg 2x/dia, individualizar; enurese: 0,2 mg ao deitar, podendo titular até 0,6 mg. Noctúria e outras vias têm doses próprias.",
    "pediatricDose": "Indicação, idade e dose variam por produto; enurese oral geralmente ≥6 anos. AUTOMATABLE=NO.",
    "renalDose": "Muitas formulações são contraindicadas com eGFR <50 mL/min/1,73 m²; confirmar rótulo.",
    "hepaticDose": "Sem tabela universal; cautela e monitorização de sódio.",
    "commonAdverseEffects": "Cefaleia, náusea, congestão nasal e edema.",
    "dangerousAdverseEffects": "Hiponatremia, convulsão, coma e intoxicação hídrica.",
    "adverseEffects": "Cefaleia, náusea, congestão nasal e edema. Graves: Hiponatremia, convulsão, coma e intoxicação hídrica.",
    "contraindications": "Hiponatremia atual/prévia, polidipsia, SIADH e insuficiência renal abaixo do limite do produto; outras dependem da formulação.",
    "interactions": "Diuréticos de alça, glicocorticoides sistêmicos e fármacos que causam hiponatremia elevam risco.",
    "monitoring": "Sódio basal e seriado, balanço hídrico, peso, diurese e função renal.",
    "administration": "Restringir líquidos no período indicado; administrar exatamente pela via prescrita.",
    "preparation": "Não converter entre vias por equivalência miligrama-a-miligrama.",
    "infusionProtocol": "Não aplicável à via oral; via IV/nasal conforme produto.",
    "pregnancy": "Dados não sugerem grande risco fetal; usar por indicação especializada.",
    "lactation": "Baixa transferência esperada; avaliar formulação e lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hiponatremia, convulsão, coma e intoxicação hídrica. Dose bloqueada sem indicação, formulação/via, idade, sódio, eGFR e plano de restrição hídrica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desmopressin",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-approved-new-label-changes-and-dosing-noctiva-desmopressin-acetate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desmopressin"
  },
  "es": {
    "name": "Desmopresina",
    "class": "Análogo de vasopresina",
    "pharmacologicClass": "Agonista V2 antidiurético",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 0,1/0,2 mg, aerosol/solución nasal, inyectable y liofilizado sublingual; no intercambiables.",
    "presentations": "Comprimidos 0,1/0,2 mg, aerosol/solución nasal, inyectable y liofilizado sublingual; no intercambiables.",
    "mechanism": "Agonista V2 antidiurético. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Mayor selectividad V2 que vasopresina; duración y biodisponibilidad dependen de la vía.",
    "indications": "Diabetes insípida central; enuresis nocturna primaria y nocturia solo en formulaciones/edades autorizadas.",
    "dose": "DI central oral: inicio habitual 0,05 mg 2 veces/día, individualizar; enuresis: 0,2 mg al acostarse, titulable hasta 0,6 mg. Nocturia y otras vías tienen dosis propias.",
    "pediatricDose": "Indicación, edad y dosis varían por producto; enuresis oral generalmente ≥6 años. AUTOMATABLE=NO.",
    "renalDose": "Muchas formulaciones están contraindicadas con eGFR <50 mL/min/1,73 m²; confirmar ficha.",
    "hepaticDose": "Sin tabla universal; precaución y control de sodio.",
    "commonAdverseEffects": "Cefalea, náusea, congestión nasal y edema.",
    "dangerousAdverseEffects": "Hiponatremia, convulsión, coma e intoxicación hídrica.",
    "adverseEffects": "Cefalea, náusea, congestión nasal y edema. Graves: Hiponatremia, convulsión, coma e intoxicación hídrica.",
    "contraindications": "Hiponatremia actual/previa, polidipsia, SIADH e insuficiencia renal bajo el límite del producto; otras dependen de formulación.",
    "interactions": "Diuréticos de asa, glucocorticoides sistémicos y fármacos que causan hiponatremia aumentan riesgo.",
    "monitoring": "Sodio basal y seriado, balance hídrico, peso, diuresis y función renal.",
    "administration": "Restringir líquidos durante el período indicado; administrar exactamente por la vía prescrita.",
    "preparation": "No convertir entre vías miligramo por miligramo.",
    "infusionProtocol": "No aplicable a vía oral; vía IV/nasal según producto.",
    "pregnancy": "Datos no sugieren gran riesgo fetal; usar por indicación especializada.",
    "lactation": "Baja transferencia esperada; valorar formulación y lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hiponatremia, convulsión, coma e intoxicación hídrica. Dose bloqueada sem indicação, formulação/via, idade, sódio, eGFR e plano de restrição hídrica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desmopressin",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-approved-new-label-changes-and-dosing-noctiva-desmopressin-acetate"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=desmopressin"
  }
};})();
/* GOLD33_SELECTIVE:desmopressina:END */
/* GOLD33_SELECTIVE:dulaglutida:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["dulaglutida"])throw new Error("GOLD33_MISSING_CANONICAL:dulaglutida");db["dulaglutida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "028",
    "requiredFieldCount": 33,
    "approvedSha256": "ff7e772cca4ff0461ed14ee5bed47a89845b0c2810e7a428dbafbd2e78ef2bad",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Dulaglutida",
    "class": "Agonista do receptor GLP-1",
    "pharmacologicClass": "Aumenta secreção de insulina dependente de glicose, reduz glucagon e retarda esvaziamento gástrico",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Canetas SC de 0,75/1,5/3/4,5 mg por dose.",
    "presentations": "Canetas SC de 0,75/1,5/3/4,5 mg por dose.",
    "mechanism": "Aumenta secreção de insulina dependente de glicose, reduz glucagon e retarda esvaziamento gástrico. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Proteólise geral; meia-vida ~5 dias.",
    "indications": "Diabetes tipo 2; redução de eventos cardiovasculares em adultos com DM2 e doença cardiovascular ou múltiplos fatores de risco.",
    "dose": "0,75 mg SC 1x/semana; pode aumentar a 1,5 mg e depois em incrementos de 1,5 mg após pelo menos 4 semanas, máximo 4,5 mg/semana.",
    "pediatricDose": "≥10 anos: iniciar 0,75 mg SC semanal; pode aumentar a 1,5 mg após pelo menos 4 semanas. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste; monitorar desidratação/lesão renal em sintomas GI.",
    "hepaticDose": "Sem ajuste definido; experiência limitada em grave.",
    "commonAdverseEffects": "Náusea, diarreia, vômito, dor abdominal e redução do apetite.",
    "dangerousAdverseEffects": "Pancreatite, hipoglicemia com secretagogos/insulina, lesão renal, doença biliar e anafilaxia.",
    "adverseEffects": "Náusea, diarreia, vômito, dor abdominal e redução do apetite. Graves: Pancreatite, hipoglicemia com secretagogos/insulina, lesão renal, doença biliar e anafilaxia.",
    "contraindications": "História pessoal/familiar de carcinoma medular de tireoide ou MEN2; hipersensibilidade grave.",
    "interactions": "Insulina/sulfonilureia aumentam hipoglicemia; retardo gástrico pode afetar fármacos orais.",
    "monitoring": "Glicemia/HbA1c, peso, sintomas GI, pancreatite, vesícula, rim, retina e hipoglicemia.",
    "administration": "SC semanal em abdome, coxa ou braço; não compartilhar caneta.",
    "preparation": "Confirmar produto e apresentação; seguir rotulagem oficial.",
    "infusionProtocol": "Não aplicável salvo apresentação parenteral; quando houver, seguir rótulo.",
    "pregnancy": "Avaliar benefício-risco e rotulagem específica; evitar exposição desnecessária.",
    "lactation": "Avaliar transferência ao leite, idade do lactente e alternativa terapêutica.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Pancreatite, hipoglicemia com secretagogos/insulina, lesão renal, doença biliar e anafilaxia. Início/titulação bloqueados sem DM2, idade, HbA1c, rim, risco pancreático/tireoide, gastroparesia, retina e terapia hipoglicemiante.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dulaglutide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/125469s051lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dulaglutide"
  },
  "es": {
    "name": "Dulaglutida",
    "class": "Agonista del receptor GLP-1",
    "pharmacologicClass": "Aumenta secreción de insulina dependiente de glucosa, reduce glucagón y retrasa vaciamiento gástrico",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Plumas SC de 0,75/1,5/3/4,5 mg por dosis.",
    "presentations": "Plumas SC de 0,75/1,5/3/4,5 mg por dosis.",
    "mechanism": "Aumenta secreción de insulina dependiente de glucosa, reduce glucagón y retrasa vaciamiento gástrico. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Proteólisis general; semivida ~5 días.",
    "indications": "Diabetes tipo 2; reducción de eventos cardiovasculares en adultos con DM2 y enfermedad cardiovascular o múltiples factores de riesgo.",
    "dose": "0,75 mg SC 1 vez/semana; puede subir a 1,5 mg y luego en incrementos de 1,5 mg tras al menos 4 semanas, máximo 4,5 mg/semana.",
    "pediatricDose": "≥10 años: iniciar 0,75 mg SC semanal; puede subir a 1,5 mg tras al menos 4 semanas. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste; vigilar deshidratación/lesión renal con síntomas GI.",
    "hepaticDose": "Sin ajuste definido; experiencia limitada en grave.",
    "commonAdverseEffects": "Náusea, diarrea, vómito, dolor abdominal y menor apetito.",
    "dangerousAdverseEffects": "Pancreatitis, hipoglucemia con secretagogos/insulina, lesión renal, enfermedad biliar y anafilaxia.",
    "adverseEffects": "Náusea, diarrea, vómito, dolor abdominal y menor apetito. Graves: Pancreatitis, hipoglucemia con secretagogos/insulina, lesión renal, enfermedad biliar y anafilaxia.",
    "contraindications": "Historia personal/familiar de carcinoma medular de tiroides o MEN2; hipersensibilidad grave.",
    "interactions": "Insulina/sulfonilurea aumentan hipoglucemia; retraso gástrico puede afectar fármacos orales.",
    "monitoring": "Glucemia/HbA1c, peso, síntomas GI, pancreatitis, vesícula, riñón, retina e hipoglucemia.",
    "administration": "SC semanal en abdomen, muslo o brazo; no compartir pluma.",
    "preparation": "Confirmar producto y presentación; seguir ficha oficial.",
    "infusionProtocol": "No aplicable salvo presentación parenteral; cuando exista, seguir ficha.",
    "pregnancy": "Evaluar beneficio-riesgo y ficha específica; evitar exposición innecesaria.",
    "lactation": "Evaluar paso a leche, edad del lactante y alternativa terapéutica.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Pancreatitis, hipoglucemia con secretagogos/insulina, lesión renal, enfermedad biliar y anafilaxia. Início/titulação bloqueados sem DM2, idade, HbA1c, rim, risco pancreático/tireoide, gastroparesia, retina e terapia hipoglicemiante.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dulaglutide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/125469s051lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dulaglutide"
  }
};})();
/* GOLD33_SELECTIVE:dulaglutida:END */
/* GOLD33_SELECTIVE:gliclazida:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["gliclazida"])throw new Error("GOLD33_MISSING_CANONICAL:gliclazida");db["gliclazida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "038",
    "requiredFieldCount": 33,
    "approvedSha256": "ad9a95080c0e044c8ec533188195d104f46324587195ff6f80e28911f7c2dc5f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Gliclazida",
    "class": "Sulfonilureia",
    "pharmacologicClass": "Estimula secreção pancreática de insulina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Liberação imediata 80 mg e modificada 30/60 mg, conforme país; não intercambiáveis mg a mg sem bula.",
    "presentations": "Liberação imediata 80 mg e modificada 30/60 mg, conforme país; não intercambiáveis mg a mg sem bula.",
    "mechanism": "Estimula secreção pancreática de insulina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático, principalmente CYP2C9; eliminação urinária de metabólitos.",
    "indications": "Diabetes tipo 2 quando dieta/exercício não bastam; não aprovada nos EUA, seguir registro regional.",
    "dose": "MR: iniciar 30 mg 1x/dia no desjejum, titular; máximo 120 mg/dia. IR: regimes regionais geralmente 40-320 mg/dia divididos.",
    "pediatricDose": "Não recomendada em pediatria. AUTOMATABLE=NO.",
    "renalDose": "Cautela/redução em doença renal; evitar hipoglicemia e considerar alternativas na doença grave.",
    "hepaticDose": "Evitar em insuficiência hepática grave.",
    "commonAdverseEffects": "Hipoglicemia, ganho de peso, náusea e rash.",
    "dangerousAdverseEffects": "Hipoglicemia grave/prolongada, discrasias, hepatotoxicidade e SCAR.",
    "adverseEffects": "Hipoglicemia, ganho de peso, náusea e rash. Graves: Hipoglicemia grave/prolongada, discrasias, hepatotoxicidade e SCAR.",
    "contraindications": "DM1, cetoacidose, insuficiência renal/hepática grave, miconazol sistêmico e hipersensibilidade a sulfonilureias.",
    "interactions": "Miconazol, álcool, insulina/outros antidiabéticos, beta-bloqueadores, fluconazol e corticosteroides.",
    "monitoring": "Glicemia/HbA1c, hipoglicemia, rim/fígado, peso e alimentação.",
    "administration": "MR com desjejum, engolir inteira; não pular refeição.",
    "preparation": "Não esmagar MR; confirmar formulação.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Preferir insulina quando tratamento necessário na gestação.",
    "lactation": "Evitar por risco de hipoglicemia neonatal.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipoglicemia grave/prolongada, discrasias, hepatotoxicidade e SCAR. Seleção/titulação bloqueadas sem país/produto, formulação IR/MR, HbA1c, função renal/hepática, padrão alimentar e risco de hipoglicemia/interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=gliclazide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/diamicron-30-article-30-referral-annex-iii_en.pdf"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=gliclazide"
  },
  "es": {
    "name": "Gliclazida",
    "class": "Sulfonilurea",
    "pharmacologicClass": "Estimula secreción pancreática de insulina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Liberación inmediata 80 mg y modificada 30/60 mg, según país; no intercambiables mg a mg sin ficha.",
    "presentations": "Liberación inmediata 80 mg y modificada 30/60 mg, según país; no intercambiables mg a mg sin ficha.",
    "mechanism": "Estimula secreción pancreática de insulina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático, principalmente CYP2C9; eliminación urinaria de metabolitos.",
    "indications": "Diabetes tipo 2 cuando dieta/ejercicio no bastan; no aprobada en EE. UU., seguir registro regional.",
    "dose": "MR: iniciar 30 mg 1 vez/día en desayuno, titular; máximo 120 mg/día. IR: pautas regionales generalmente 40-320 mg/día divididas.",
    "pediatricDose": "No recomendada en pediatría. AUTOMATABLE=NO.",
    "renalDose": "Precaución/reducción en enfermedad renal; evitar hipoglucemia y considerar alternativas en enfermedad grave.",
    "hepaticDose": "Evitar en insuficiencia hepática grave.",
    "commonAdverseEffects": "Hipoglucemia, aumento de peso, náusea y erupción.",
    "dangerousAdverseEffects": "Hipoglucemia grave/prolongada, discrasias, hepatotoxicidad y SCAR.",
    "adverseEffects": "Hipoglucemia, aumento de peso, náusea y erupción. Graves: Hipoglucemia grave/prolongada, discrasias, hepatotoxicidad y SCAR.",
    "contraindications": "DM1, cetoacidosis, insuficiencia renal/hepática grave, miconazol sistémico e hipersensibilidad a sulfonilureas.",
    "interactions": "Miconazol, alcohol, insulina/otros antidiabéticos, betabloqueantes, fluconazol y corticoides.",
    "monitoring": "Glucemia/HbA1c, hipoglucemia, riñón/hígado, peso y alimentación.",
    "administration": "MR con desayuno, tragar entera; no omitir comida.",
    "preparation": "No triturar MR; confirmar formulación.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Preferir insulina cuando se requiere tratamiento en embarazo.",
    "lactation": "Evitar por riesgo de hipoglucemia neonatal.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipoglucemia grave/prolongada, discrasias, hepatotoxicidad y SCAR. Seleção/titulação bloqueadas sem país/produto, formulação IR/MR, HbA1c, função renal/hepática, padrão alimentar e risco de hipoglicemia/interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/search?q=gliclazide",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.ema.europa.eu/en/documents/referral/diamicron-30-article-30-referral-annex-iii_en.pdf"
    ],
    "ref": "https://www.medicines.org.uk/emc/search?q=gliclazide"
  }
};})();
/* GOLD33_SELECTIVE:gliclazida:END */
/* GOLD33_SELECTIVE:glimepirida:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["glimepirida"])throw new Error("GOLD33_MISSING_CANONICAL:glimepirida");db["glimepirida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "039",
    "requiredFieldCount": 33,
    "approvedSha256": "72a167888bdcc091cdbc40db2f06d309c0b3210c89d1ba428d1e7253777d5c65",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Glimepirida",
    "class": "Sulfonilureia",
    "pharmacologicClass": "Estimula liberação pancreática de insulina",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 1, 2 e 4 mg.",
    "presentations": "Comprimidos 1, 2 e 4 mg.",
    "mechanism": "Estimula liberação pancreática de insulina. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático CYP2C9; metabólitos com eliminação urinária.",
    "indications": "Diabetes mellitus tipo 2 como adjuvante à dieta e exercício.",
    "dose": "Iniciar 1-2 mg VO uma vez/dia com desjejum; titular em incrementos de 1-2 mg a cada 1-2 semanas; máximo 8 mg/dia.",
    "pediatricDose": "Segurança/eficácia não estabelecidas; maior risco de hipoglicemia. AUTOMATABLE=NO.",
    "renalDose": "Iniciar 1 mg em risco renal e titular cautelosamente.",
    "hepaticDose": "Cautela; dados limitados e risco de hipoglicemia.",
    "commonAdverseEffects": "Hipoglicemia, tontura, náusea e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave/prolongada, anafilaxia, hepatotoxicidade e discrasias.",
    "adverseEffects": "Hipoglicemia, tontura, náusea e ganho de peso. Graves: Hipoglicemia grave/prolongada, anafilaxia, hepatotoxicidade e discrasias.",
    "contraindications": "Hipersensibilidade; não usar para cetoacidose diabética.",
    "interactions": "Insulina/outros antidiabéticos, fluconazol, rifampicina, beta-bloqueadores e álcool.",
    "monitoring": "Glicemia, HbA1c, hipoglicemia, peso, rim e fígado.",
    "administration": "VO com desjejum ou primeira refeição principal.",
    "preparation": "Comprimido pronto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Preferir insulina; risco fetal/neonatal por hipoglicemia.",
    "lactation": "Evitar ou monitorar rigorosamente o lactente.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Hipoglicemia grave/prolongada, anafilaxia, hepatotoxicidade e discrasias. Titulação bloqueada sem HbA1c/glicemias, refeições, rim/fígado, idade, hipoglicemia e conciliação terapêutica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glimepiride"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glimepiride"
  },
  "es": {
    "name": "Glimepirida",
    "class": "Sulfonilurea",
    "pharmacologicClass": "Estimula liberación pancreática de insulina",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 1, 2 y 4 mg.",
    "presentations": "Comprimidos 1, 2 y 4 mg.",
    "mechanism": "Estimula liberación pancreática de insulina. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático CYP2C9; metabolitos con eliminación urinaria.",
    "indications": "Diabetes mellitus tipo 2 como adyuvante a dieta y ejercicio.",
    "dose": "Iniciar 1-2 mg VO una vez/día con desayuno; titular 1-2 mg cada 1-2 semanas; máximo 8 mg/día.",
    "pediatricDose": "Seguridad/eficacia no establecidas; mayor riesgo de hipoglucemia. AUTOMATABLE=NO.",
    "renalDose": "Iniciar 1 mg en riesgo renal y titular con cautela.",
    "hepaticDose": "Precaución; datos limitados y riesgo de hipoglucemia.",
    "commonAdverseEffects": "Hipoglucemia, mareo, náusea y aumento de peso.",
    "dangerousAdverseEffects": "Hipoglucemia grave/prolongada, anafilaxia, hepatotoxicidad y discrasias.",
    "adverseEffects": "Hipoglucemia, mareo, náusea y aumento de peso. Graves: Hipoglucemia grave/prolongada, anafilaxia, hepatotoxicidad y discrasias.",
    "contraindications": "Hipersensibilidad; no usar para cetoacidosis diabética.",
    "interactions": "Insulina/otros antidiabéticos, fluconazol, rifampicina, betabloqueantes y alcohol.",
    "monitoring": "Glucemia, HbA1c, hipoglucemia, peso, riñón e hígado.",
    "administration": "VO con desayuno o primera comida principal.",
    "preparation": "Comprimido listo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Preferir insulina; riesgo fetal/neonatal por hipoglucemia.",
    "lactation": "Evitar o vigilar rigurosamente al lactante.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Hipoglucemia grave/prolongada, anafilaxia, hepatotoxicidad y discrasias. Titulação bloqueada sem HbA1c/glicemias, refeições, rim/fígado, idade, hipoglicemia e conciliação terapêutica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glimepiride"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glimepiride"
  }
};})();
/* GOLD33_SELECTIVE:glimepirida:END */
/* GOLD33_SELECTIVE:glucagon:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["glucagon"])throw new Error("GOLD33_MISSING_CANONICAL:glucagon");db["glucagon"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "039",
    "requiredFieldCount": 33,
    "approvedSha256": "72a167888bdcc091cdbc40db2f06d309c0b3210c89d1ba428d1e7253777d5c65",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Glucagon",
    "class": "Agente hiperglicemiante",
    "pharmacologicClass": "Ativa receptores hepáticos de glucagon, mobilizando glicogênio",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Kit injetável 1 mg, autoinjetor e pó nasal 3 mg; apresentações variam.",
    "presentations": "Kit injetável 1 mg, autoinjetor e pó nasal 3 mg; apresentações variam.",
    "mechanism": "Ativa receptores hepáticos de glucagon, mobilizando glicogênio. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Meia-vida curta; degradação hepática, renal e plasmática.",
    "indications": "Hipoglicemia grave; algumas apresentações também são usadas como auxílio diagnóstico.",
    "dose": "Hipoglicemia grave: 1 mg SC/IM/IV ou 3 mg intranasal conforme produto; fornecer carboidrato oral quando recuperar.",
    "pediatricDose": "Injetável: <25 kg pode usar 0,5 mg conforme produto; nasal 3 mg em idades aprovadas. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste específico.",
    "hepaticDose": "Sem ajuste específico; resposta pode ser menor com glicogênio reduzido.",
    "commonAdverseEffects": "Náusea, vômito, cefaleia e irritação nasal.",
    "dangerousAdverseEffects": "Anafilaxia, hipertensão no feocromocitoma e hipoglicemia no insulinoma.",
    "adverseEffects": "Náusea, vômito, cefaleia e irritação nasal. Graves: Anafilaxia, hipertensão no feocromocitoma e hipoglicemia no insulinoma.",
    "contraindications": "Feocromocitoma; insulinoma; hipersensibilidade.",
    "interactions": "Varfarina, indometacina e insulina; beta-bloqueadores podem aumentar FC/PA.",
    "monitoring": "Glicemia e resposta clínica; investigar causa e recorrência.",
    "administration": "Administrar pela via específica; posicionar de lado por vômitos.",
    "preparation": "Reconstituir kit apenas com diluente fornecido; usar imediatamente.",
    "infusionProtocol": "IV apenas por profissional e conforme produto.",
    "pregnancy": "Pode ser usado quando necessário.",
    "lactation": "Sem risco esperado relevante; avaliar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Anafilaxia, hipertensão no feocromocitoma e hipoglicemia no insulinoma. Escolha/dose bloqueadas sem idade/peso, glicemia, produto/via, feocromocitoma/insulinoma e plano pós-resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glucagon"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glucagon"
  },
  "es": {
    "name": "Glucagón",
    "class": "Agente hiperglucemiante",
    "pharmacologicClass": "Activa receptores hepáticos de glucagón, movilizando glucógeno",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Kit inyectable 1 mg, autoinyector y polvo nasal 3 mg; presentaciones variables.",
    "presentations": "Kit inyectable 1 mg, autoinyector y polvo nasal 3 mg; presentaciones variables.",
    "mechanism": "Activa receptores hepáticos de glucagón, movilizando glucógeno. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Semivida corta; degradación hepática, renal y plasmática.",
    "indications": "Hipoglucemia grave; algunas presentaciones también se usan como ayuda diagnóstica.",
    "dose": "Hipoglucemia grave: 1 mg SC/IM/IV o 3 mg intranasal según producto; dar carbohidrato oral al recuperarse.",
    "pediatricDose": "Inyectable: <25 kg puede usar 0,5 mg según producto; nasal 3 mg en edades aprobadas. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste específico.",
    "hepaticDose": "Sin ajuste específico; respuesta puede ser menor con glucógeno reducido.",
    "commonAdverseEffects": "Náusea, vómito, cefalea e irritación nasal.",
    "dangerousAdverseEffects": "Anafilaxia, hipertensión en feocromocitoma e hipoglucemia en insulinoma.",
    "adverseEffects": "Náusea, vómito, cefalea e irritación nasal. Graves: Anafilaxia, hipertensión en feocromocitoma e hipoglucemia en insulinoma.",
    "contraindications": "Feocromocitoma; insulinoma; hipersensibilidad.",
    "interactions": "Warfarina, indometacina e insulina; betabloqueantes pueden aumentar FC/PA.",
    "monitoring": "Glucemia y respuesta clínica; investigar causa y recurrencia.",
    "administration": "Administrar por vía específica; colocar de lado por vómitos.",
    "preparation": "Reconstituir kit solo con diluyente provisto; usar inmediatamente.",
    "infusionProtocol": "IV solo por profesional y según producto.",
    "pregnancy": "Puede usarse cuando sea necesario.",
    "lactation": "No se espera riesgo relevante; evaluar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Anafilaxia, hipertensión en feocromocitoma e hipoglucemia en insulinoma. Escolha/dose bloqueadas sem idade/peso, glicemia, produto/via, feocromocitoma/insulinoma e plano pós-resgate.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glucagon"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=glucagon"
  }
};})();
/* GOLD33_SELECTIVE:glucagon:END */
/* GOLD33_SELECTIVE:insulina_asparte:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_asparte"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_asparte");db["insulina_asparte"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina asparte",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "NovoLog/Fiasp",
    "presentation": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme produto.",
    "dose": "Dose individualizada. Administrar Imediatamente antes da refeicao; algumas formulacoes permitem imediatamente apos. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; nao existe dose maxima universal.",
    "pediatricDose": "Criancas conforme produto/idade; dose individualizada por carboidratos, glicemia e alvo. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; algumas bulas autorizam bomba e IV sob supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. Nao diluir ou misturar salvo autorizacao explicita do produto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do produto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dose, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina asparte - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd88e313-6193-4413-beff-7d955580060d"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd88e313-6193-4413-beff-7d955580060d"
  },
  "es": {
    "name": "Insulina asparte",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "NovoLog/Fiasp",
    "presentation": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme producto.",
    "dose": "Dose individualizada. Administrar Imediatamente antes da refeicao; algumas formulaciones permitem imediatamente apos. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; no existe dosis maxima universal.",
    "pediatricDose": "Criancas conforme producto/idade; dosis individualizada por carboidratos, glicemia e alvo. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; algumas bulas autorizam bomba e IV sob supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. No diluir ou misturar salvo autorizacao explicita do producto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do producto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dosis, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina asparte - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd88e313-6193-4413-beff-7d955580060d"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd88e313-6193-4413-beff-7d955580060d"
  }
};})();
/* GOLD33_SELECTIVE:insulina_asparte:END */
/* GOLD33_SELECTIVE:insulina_degludeca:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_degludeca"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_degludeca");db["insulina_degludeca"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina degludeca",
    "class": "Analogo de insulina basal de acao ultralonga",
    "pharmacologicClass": "Analogo de insulina basal de acao ultralonga",
    "commercialNames": "Tresiba",
    "presentation": "Solucao injetavel basal. U-100 e U-200; nao retirar de caneta com seringa.",
    "presentations": "Solucao injetavel basal. U-100 e U-200; nao retirar de caneta com seringa.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e produto; nao indicada para tratamento agudo de cetoacidose.",
    "dose": "Dose individualizada por via SC, uma vez ao dia, em qualquer horario, mantendo pelo menos 8 horas entre doses em adultos quando houver mudanca de horario. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; nao existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de produto e idade aprovados; dose individualizada. Nao liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o produto basal avaliado; rodiziar locais. Nao compartilhar canetas e conferir rotulo/concentracao antes de cada dose.",
    "preparation": "Usar apenas se limpida e incolor; nao diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "Nao administrar IV nem em bomba quando contraindicado pelo produto basal; nao ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/produtos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina degludeca - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1be283d-4b1d-4996-b2a7-4488dbff3037"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1be283d-4b1d-4996-b2a7-4488dbff3037"
  },
  "es": {
    "name": "Insulina degludeca",
    "class": "Analogo de insulina basal de acao ultralonga",
    "pharmacologicClass": "Analogo de insulina basal de acao ultralonga",
    "commercialNames": "Tresiba",
    "presentation": "Solucao injetavel basal. U-100 e U-200; no retirar de caneta com seringa.",
    "presentations": "Solucao injetavel basal. U-100 e U-200; no retirar de caneta com seringa.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e producto; no indicada para tratamento agudo de cetoacidosis.",
    "dose": "Dose individualizada por via SC, uma vez ao dia, em qualquer horario, mantendo pelo menos 8 horas entre dosiss em adultos quando houver mudanca de horario. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; no existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de producto e idade aprovados; dosis individualizada. No liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o producto basal evaluado; rodiziar locais. No compartilhar canetas e conferir rotulo/concentracao antes de cada dosis.",
    "preparation": "Usar apenas se limpida e incolor; no diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "No administrar IV nem em bomba quando contraindicado pelo producto basal; no ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/productos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina degludeca - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1be283d-4b1d-4996-b2a7-4488dbff3037"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c1be283d-4b1d-4996-b2a7-4488dbff3037"
  }
};})();
/* GOLD33_SELECTIVE:insulina_degludeca:END */
/* GOLD33_SELECTIVE:insulina_detemir:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_detemir"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_detemir");db["insulina_detemir"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina detemir",
    "class": "Analogo de insulina basal de acao prolongada",
    "pharmacologicClass": "Analogo de insulina basal de acao prolongada",
    "commercialNames": "Levemir",
    "presentation": "Solucao injetavel basal. U-100; disponibilidade comercial e descontinuacoes variam por pais.",
    "presentations": "Solucao injetavel basal. U-100; disponibilidade comercial e descontinuacoes variam por pais.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e produto; nao indicada para tratamento agudo de cetoacidose.",
    "dose": "Dose individualizada por via SC, uma ou duas vezes ao dia conforme necessidade e rotulo. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; nao existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de produto e idade aprovados; dose individualizada. Nao liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o produto basal avaliado; rodiziar locais. Nao compartilhar canetas e conferir rotulo/concentracao antes de cada dose.",
    "preparation": "Usar apenas se limpida e incolor; nao diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "Nao administrar IV nem em bomba quando contraindicado pelo produto basal; nao ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/produtos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina detemir - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c"
  },
  "es": {
    "name": "Insulina detemir",
    "class": "Analogo de insulina basal de acao prolongada",
    "pharmacologicClass": "Analogo de insulina basal de acao prolongada",
    "commercialNames": "Levemir",
    "presentation": "Solucao injetavel basal. U-100; disponibilidade comercial e descontinuacoes variam por pais.",
    "presentations": "Solucao injetavel basal. U-100; disponibilidade comercial e descontinuacoes variam por pais.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e producto; no indicada para tratamento agudo de cetoacidosis.",
    "dose": "Dose individualizada por via SC, uma ou duas vezes ao dia conforme necessidade e rotulo. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; no existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de producto e idade aprovados; dosis individualizada. No liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o producto basal evaluado; rodiziar locais. No compartilhar canetas e conferir rotulo/concentracao antes de cada dosis.",
    "preparation": "Usar apenas se limpida e incolor; no diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "No administrar IV nem em bomba quando contraindicado pelo producto basal; no ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/productos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina detemir - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c"
  }
};})();
/* GOLD33_SELECTIVE:insulina_detemir:END */
/* GOLD33_SELECTIVE:insulina_glargina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_glargina"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_glargina");db["insulina_glargina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina glargina",
    "class": "Analogo de insulina basal de acao prolongada",
    "pharmacologicClass": "Analogo de insulina basal de acao prolongada",
    "commercialNames": "Lantus/Basaglar/Semglee/Toujeo",
    "presentation": "Solucao injetavel basal. U-100 e U-300; produtos e dispositivos possuem instrucoes proprias.",
    "presentations": "Solucao injetavel basal. U-100 e U-300; produtos e dispositivos possuem instrucoes proprias.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e produto; nao indicada para tratamento agudo de cetoacidose.",
    "dose": "Dose individualizada por via SC, uma vez ao dia no mesmo horario; U-100 e U-300 nao sao intercambiaveis unidade por unidade em todas as transicoes. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; nao existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de produto e idade aprovados; dose individualizada. Nao liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o produto basal avaliado; rodiziar locais. Nao compartilhar canetas e conferir rotulo/concentracao antes de cada dose.",
    "preparation": "Usar apenas se limpida e incolor; nao diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "Nao administrar IV nem em bomba quando contraindicado pelo produto basal; nao ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/produtos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina glargina - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a"
  },
  "es": {
    "name": "Insulina glargina",
    "class": "Analogo de insulina basal de acao prolongada",
    "pharmacologicClass": "Analogo de insulina basal de acao prolongada",
    "commercialNames": "Lantus/Basaglar/Semglee/Toujeo",
    "presentation": "Solucao injetavel basal. U-100 e U-300; productos e dispositivos possuem instrucoes proprias.",
    "presentations": "Solucao injetavel basal. U-100 e U-300; productos e dispositivos possuem instrucoes proprias.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em diabetes mellitus conforme idade e producto; no indicada para tratamento agudo de cetoacidosis.",
    "dose": "Dose individualizada por via SC, uma vez ao dia no mesmo horario; U-100 e U-300 no sao intercambiaveis unidade por unidade em todas as transicoes. Conversoes entre insulinas devem seguir bula especifica e monitorizacao estreita; no existe maximo universal.",
    "pediatricDose": "Uso pediatrico depende de producto e idade aprovados; dosis individualizada. No liberar calculo apenas por peso sem esquema clinico completo.",
    "renalDose": "Insuficiencia renal pode reduzir necessidade; monitorar glicose mais frequentemente e ajustar individualmente.",
    "hepaticDose": "Insuficiencia hepatica pode reduzir necessidade; monitorar e ajustar individualmente.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "Somente SC para o producto basal evaluado; rodiziar locais. No compartilhar canetas e conferir rotulo/concentracao antes de cada dosis.",
    "preparation": "Usar apenas se limpida e incolor; no diluir nem misturar com outras insulinas quando o rotulo proibe.",
    "infusionProtocol": "No administrar IV nem em bomba quando contraindicado pelo producto basal; no ha protocolo de infusao liberado.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Conversao entre concentracoes/productos e algoritmo pediatrico bloqueados sem protocolo individual e bula exata.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina glargina - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d5e07a0c-7e14-4756-9152-9fea485d654a"
  }
};})();
/* GOLD33_SELECTIVE:insulina_glargina:END */
/* GOLD33_SELECTIVE:insulina_glulisina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_glulisina"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_glulisina");db["insulina_glulisina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina glulisina",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "Apidra",
    "presentation": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme produto.",
    "dose": "Dose individualizada. Administrar Dentro de 15 minutos antes ou ate 20 minutos apos iniciar a refeicao. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; nao existe dose maxima universal.",
    "pediatricDose": "Pediatria conforme idade e produto; dose individualizada. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; bomba e IV apenas segundo rotulo e supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. Nao diluir ou misturar salvo autorizacao explicita do produto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do produto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dose, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina glulisina - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e7af6a7a-8046-4fb4-9979-4ec4230b23aa"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e7af6a7a-8046-4fb4-9979-4ec4230b23aa"
  },
  "es": {
    "name": "Insulina glulisina",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "Apidra",
    "presentation": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme producto.",
    "dose": "Dose individualizada. Administrar Dentro de 15 minutos antes ou ate 20 minutos apos iniciar a refeicao. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; no existe dosis maxima universal.",
    "pediatricDose": "Pediatria conforme idade e producto; dosis individualizada. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; bomba e IV apenas segundo rotulo e supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. No diluir ou misturar salvo autorizacao explicita do producto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do producto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dosis, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina glulisina - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e7af6a7a-8046-4fb4-9979-4ec4230b23aa"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e7af6a7a-8046-4fb4-9979-4ec4230b23aa"
  }
};})();
/* GOLD33_SELECTIVE:insulina_glulisina:END */
/* GOLD33_SELECTIVE:insulina_lispro:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_lispro"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_lispro");db["insulina_lispro"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "042",
    "requiredFieldCount": 33,
    "approvedSha256": "34470a7a8f32a8878334ab08417459840626537e77dc88819c7af6469d7aa00f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina lispro",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "Humalog/Admelog",
    "presentation": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns produtos, concentracoes distintas. Canetas, frascos e cartuchos nao sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dose, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacao; nao transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme produto.",
    "dose": "Dose individualizada. Administrar Dentro de 15 minutos antes ou imediatamente apos a refeicao. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; nao existe dose maxima universal.",
    "pediatricDose": "Pediatria conforme produto/idade; dose individualizada. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por produto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao produto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; bomba e IV apenas segundo rotulo e supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. Nao diluir ou misturar salvo autorizacao explicita do produto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do produto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do produto devem orientar a decisao.",
    "lactation": "Avaliar dados do produto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacao, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato nao substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dose, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina lispro - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12ec9e3f-e2ac-43a1-b334-8b6538cf2bb0"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12ec9e3f-e2ac-43a1-b334-8b6538cf2bb0"
  },
  "es": {
    "name": "Insulina lispro",
    "class": "Analogo de insulina de acao rapida",
    "pharmacologicClass": "Analogo de insulina de acao rapida",
    "commercialNames": "Humalog/Admelog",
    "presentation": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "presentations": "Solucao injetavel; U-100 e, para alguns productos, concentracoes distintas. Canetas, frascos e cartuchos no sao automaticamente intercambiaveis.",
    "mechanism": "Liga-se ao receptor de insulina, aumentando captacao periferica de glicose e reduzindo producao hepatica de glicose.",
    "pharmacodynamics": "Efeito hipoglicemiante; perfil temporal varia por analogo, dosis, local de aplicacao, fluxo sanguineo, temperatura e atividade.",
    "pharmacokinetics": "Absorcao e duracao variam por formulacion; no transportar parametros entre concentracoes ou dispositivos.",
    "indications": "Melhora do controle glicemico em adultos e pacientes pediatricos com diabetes mellitus, conforme producto.",
    "dose": "Dose individualizada. Administrar Dentro de 15 minutos antes ou imediatamente apos a refeicao. Integrar ao regime basal e ajustar por glicemia, ingestao, atividade e comorbidades; no existe dosis maxima universal.",
    "pediatricDose": "Pediatria conforme producto/idade; dosis individualizada. Calculo automatico sem parametros clinicos completos permanece bloqueado.",
    "renalDose": "Necessidades de insulina podem diminuir na insuficiencia renal; intensificar monitorizacao e individualizar.",
    "hepaticDose": "Necessidades podem diminuir na insuficiencia hepatica; intensificar monitorizacao e individualizar.",
    "commonAdverseEffects": "Hipoglicemia, reacoes no local, lipodistrofia/lipo-hipertrofia, prurido e ganho de peso.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia e hipersensibilidade grave.",
    "adverseEffects": "Perfil completo inclui eventos comuns e graves; frequencias variam por producto, indicacao e exposicao.",
    "contraindications": "Durante episodios de hipoglicemia e em hipersensibilidade ao producto/excipientes.",
    "interactions": "Farmacos que reduzem ou elevam glicose podem alterar necessidade; beta-bloqueadores podem mascarar sinais de hipoglicemia; tiazolidinedionas com insulina podem agravar insuficiencia cardiaca.",
    "monitoring": "Glicemia; HbA1c; sinais de hipoglicemia; potassio em uso IV/alto risco; tecnica, locais e adesao.",
    "administration": "SC; bomba e IV apenas segundo rotulo e supervisao. Rodiziar locais; nunca compartilhar caneta, mesmo com troca de agulha.",
    "preparation": "Solucao deve estar limpida e incolor. No diluir ou misturar salvo autorizacao explicita do producto e dispositivo.",
    "infusionProtocol": "IV somente quando expressamente autorizado na bula, com monitorizacao de glicose e potassio; concentracao/diluente dependem do producto.",
    "pregnancy": "Usar somente apos avaliacao individual de beneficio-risco; controle da doenca materna e dados do producto devem orientar a decisao.",
    "lactation": "Avaliar dados do producto, exposicao do lactente e beneficio da amamentacao; monitorar quando clinicamente indicado.",
    "specialPopulations": "Idosos e pessoas com disfuncao renal/hepatica ou comorbidades exigem titulacao cautelosa e monitorizacao reforcada.",
    "patientEducation": "Reconhecer e tratar hipoglicemia, conferir nome e concentracao, tecnica correta, rotacao de locais, armazenamento e nunca compartilhar canetas.",
    "clinicalPearls": "Confirmar substancia, formulacion, concentracao, via e jurisdicao antes de prescrever ou automatizar.",
    "guidelineRecommendations": "Usar em conformidade com diretriz atual da doenca e bula local; este candidato no substitui julgamento clinico.",
    "safetyFlags": "Algoritmo de dosis, correcao, carboidrato, bomba e infusao IV bloqueados sem protocolo e parametros individuais completos.",
    "alerts": "CANDIDATO NAO HOMOLOGADO. Revisao medica obrigatoria; publicacao e integracao bloqueadas.",
    "references": [
      "Fonte regulatoria primaria - Insulina lispro - URL consultada em 19/09/2026: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12ec9e3f-e2ac-43a1-b334-8b6538cf2bb0"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=12ec9e3f-e2ac-43a1-b334-8b6538cf2bb0"
  }
};})();
/* GOLD33_SELECTIVE:insulina_lispro:END */
/* GOLD33_SELECTIVE:insulina_nph:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB;if(!db||!db["insulina_nph"])throw new Error("GOLD33_MISSING_CANONICAL:insulina_nph");db["insulina_nph"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "043",
    "requiredFieldCount": 33,
    "approvedSha256": "b6aa150d0e0594cadfb5028a6cadd7836618b672ad0e07215793b4b78fc9cec5",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Insulina humana isófana (NPH)",
    "class": "Antidiabético; insulina de ação intermediária",
    "pharmacologicClass": "Insulina humana em suspensão com protamina",
    "commercialNames": "Humulin N; marcas variam por país.",
    "presentation": "Suspensão injetável SC U-100.",
    "presentations": "Frasco multidose 10 mL e caneta preenchida 3 mL, ambos 100 unidades/mL, conforme bula consultada.",
    "mechanism": "Liga-se ao receptor de insulina e aumenta captação periférica de glicose, reduz produção hepática e inibe lipólise/proteólise.",
    "pharmacodynamics": "Início e duração são prolongados pela protamina; perfil apresenta pico e variabilidade interindividual, com risco de hipoglicemia.",
    "pharmacokinetics": "SC; absorção dependente do local, fluxo sanguíneo e técnica. Efeito intermediário; metabolismo principalmente hepático e renal como a insulina endógena.",
    "indications": "Melhorar controle glicêmico em adultos e crianças com diabetes mellitus.",
    "dose": "Individualizar conforme necessidade metabólica, glicemia e alvo; administrar SC geralmente uma ou duas vezes ao dia conforme regime. Pode associar insulina prandial. Não há dose universal segura.",
    "pediatricDose": "Indicada em pediatria, mas a dose é individualizada por tipo de diabetes, ingestão, atividade e monitorização; a bula não fornece algoritmo mg/kg ou U/kg automatizável. CÁLCULO AUTOMÁTICO BLOQUEADO.",
    "renalDose": "Sem esquema numérico fixo. Insuficiência renal aumenta risco de hipoglicemia; ajustar mais frequentemente conforme glicemia.",
    "hepaticDose": "Sem esquema numérico fixo. Insuficiência hepática aumenta risco de hipoglicemia; ajustar mais frequentemente conforme glicemia.",
    "commonAdverseEffects": "Hipoglicemia; ganho de peso; reação no local; lipodistrofia.",
    "dangerousAdverseEffects": "Hipoglicemia grave, hipocalemia, anafilaxia/hipersensibilidade sistêmica.",
    "adverseEffects": "Edema, prurido, lipohipertrofia/lipoatrofia e amiloidose cutânea localizada.",
    "contraindications": "Episódio de hipoglicemia; hipersensibilidade à insulina NPH ou excipientes.",
    "interactions": "Fármacos antidiabéticos e álcool podem aumentar hipoglicemia; corticosteroides, simpaticomiméticos e outros podem elevar glicose; betabloqueadores podem mascarar sintomas.",
    "monitoring": "Glicemia e HbA1c; hipoglicemia; potássio em risco; locais de injeção; mudanças de dieta, atividade, função renal/hepática.",
    "administration": "Somente SC em abdome, coxa, braço ou nádega; rodiziar locais. Ressuspender até aspecto uniformemente turvo. Nunca compartilhar caneta/seringa.",
    "preparation": "Misturar suavemente conforme bula; não usar se houver partículas ou se não ficar uniformemente turva. Confirmar rótulo antes de cada aplicação.",
    "infusionProtocol": "Não aplicável: esta formulação NPH é SC e não deve ser administrada IV nem por bomba de infusão.",
    "pregnancy": "Insulina é tratamento essencial no diabetes gestacional quando indicada; necessidades podem mudar durante e após gestação; monitorização intensiva.",
    "lactation": "Insulina humana é compatível com lactação; necessidades maternas podem mudar.",
    "specialPopulations": "Idosos e pessoas com insuficiência renal/hepática têm maior risco de hipoglicemia; deficiência visual exige cautela com caneta.",
    "patientEducation": "Reconhecer e tratar hipoglicemia; carregar fonte de glicose; manter refeições e técnica; checar o rótulo; não reutilizar/compartilhar dispositivos.",
    "clinicalPearls": "NPH não é intercambiável unidade por unidade sem supervisão com todas as insulinas; mudanças de regime exigem monitorização próxima.",
    "guidelineRecommendations": "Diretrizes de diabetes usam NPH como opção basal/intermediária em regimes individualizados; a bula exige titulação por glicemia, não dose fixa.",
    "safetyFlags": "ALTO RISCO: hipoglicemia; hipocalemia; erro de produto; via SC exclusiva.",
    "alerts": "Dose individualizada; nunca IV; ressuspender; rodiziar sítios; cálculo pediátrico automático bloqueado.",
    "references": [
      "DailyMed/autoridade ou diretriz oficial - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6edd793-440b-40c2-96b5-c16133b7a921"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6edd793-440b-40c2-96b5-c16133b7a921"
  },
  "es": {
    "name": "Insulina humana isófana (NPH)",
    "class": "Antidiabético; insulina de ação intermediária",
    "pharmacologicClass": "Insulina humana em suspensión con protamina",
    "commercialNames": "Humulin N; marcas variam por país.",
    "presentation": "Suspensão inyectable SC U-100.",
    "presentations": "Frasco multidosis 10 mL y caneta preenchida 3 mL, ambos 100 unidades/mL, según bula consultada.",
    "mechanism": "Liga-se ao receptor de insulina y aumenta captação periférica de glicose, reduz produção hepática y inibe lipólise/proteólise.",
    "pharmacodynamics": "Início y duración são prolongados pela protamina; perfil apresenta pico y variabilidade interindividual, con riesgo de hipoglucemia.",
    "pharmacokinetics": "SC; absorção dependente do sitio, fluxo sanguíneo y técnica. Efeito intermediário; metabolismo principalmente hepático y renal como a insulina endógena.",
    "indications": "Melhorar controle glicêmico em adultos y niños con diabetes mellitus.",
    "dose": "Individualizar según necesidad metabólica, glucemia y objetivo; administrar SC geralmente una o dos veces al día según regime. Pode asociar insulina prandial. No hay dosis universal segura.",
    "pediatricDose": "Indicada em pediatría, mas a dosis é individualizada por tipo de diabetes, ingesta, actividad y monitorización; a bula no proporciona algoritmo mg/kg ou U/kg automatizável. CÁLCULO AUTOMÁTICO BLOQUEADO.",
    "renalDose": "Sem esquema numérico fixo. Insuficiência renal aumenta riesgo de hipoglucemia; ajustar mais frecuentemente según glucemia.",
    "hepaticDose": "Sem esquema numérico fixo. Insuficiência hepática aumenta riesgo de hipoglucemia; ajustar mais frecuentemente según glucemia.",
    "commonAdverseEffects": "Hipoglucemia; aumento de peso; reacción no sitio; lipodistrofia.",
    "dangerousAdverseEffects": "Hipoglucemia grave, hipocalemia, anafilaxia/hipersensibilidad sistêmica.",
    "adverseEffects": "Edema, prurido, lipohipertrofia/lipoatrofia y amiloidosis cutânea sitioizada.",
    "contraindications": "Episódio de hipoglucemia; hipersensibilidad à insulina NPH ou excipientes.",
    "interactions": "Fármacos antidiabéticos y álcool podem aumentar hipoglucemia; corticosteroides, simpaticomiméticos y outros podem elevar glicose; betabloqueadores podem mascarar sintomas.",
    "monitoring": "Glicemia y HbA1c; hipoglucemia; potássio em riesgo; sitios de inyección; mudanças de dieta, actividad, función renal/hepática.",
    "administration": "Solo SC em abdome, coxa, braço ou nádega; rotar sitios. Ressuspender até aspecto uniformemente turvo. Nunca compartir caneta/seringa.",
    "preparation": "Misturar suavemente según bula; no usar se houver partículas ou se no ficar uniformemente turva. Confirmar rótulo antes de cada aplicação.",
    "infusionProtocol": "No aplicable: esta formulación NPH é SC y no deve ser administrada IV nem por bomba de infusão.",
    "pregnancy": "Insulina é tratamiento essencial no diabetes gestacional quando indicada; necesidads podem mudar durante y após gestação; monitorización intensiva.",
    "lactation": "Insulina humana é compatível con lactancia; necesidads maternas podem mudar.",
    "specialPopulations": "Idosos y pessoas con insuficiencia renal/hepática têm maior riesgo de hipoglucemia; deficiência visual exige precaución con caneta.",
    "patientEducation": "Reconhecer y tratar hipoglucemia; carregar fonte de glicose; manter refeições y técnica; checar o rótulo; no reutilizar/compartir dispositivos.",
    "clinicalPearls": "NPH no é intercambiável unidade por unidade sin supervisão con todas as insulinas; mudanças de regime exigem monitorización próxima.",
    "guidelineRecommendations": "Diretrizes de diabetes usam NPH como opção basal/intermediária em regimes individualizados; a bula exige titulação por glucemia, no dosis fixa.",
    "safetyFlags": "ALTO RISCO: hipoglucemia; hipocalemia; erro de producto; vía SC exclusiva.",
    "alerts": "Dose individualizada; nunca IV; ressuspender; rotar sítios; cálculo pediátrico automático bloqueado.",
    "references": [
      "DailyMed/autoridade ou diretriz oficial - https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6edd793-440b-40c2-96b5-c16133b7a921"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f6edd793-440b-40c2-96b5-c16133b7a921"
  }
};})();
/* GOLD33_SELECTIVE:insulina_nph:END */
/* GOLD33_SELECTIVE:levotiroxina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="levotiroxina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:levotiroxina:"+matches.length);drug=matches[0];}else{drug=db&&db["levotiroxina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:levotiroxina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "046",
    "requiredFieldCount": 33,
    "approvedSha256": "b01bced97714803d025e288b269c2a23ae3562608450a3618c1ccb6e9db46467",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Levotiroxina",
    "class": "Hormônio tireoidiano T4",
    "pharmacologicClass": "Hormônio tireoidiano T4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em múltiplas forças; margem terapêutica estreita.",
    "presentations": "Comprimidos em múltiplas forças; margem terapêutica estreita.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Hipotireoidismo e supressão de TSH em contextos selecionados.",
    "dose": "Dose individualizada por idade, peso, cardiopatia, gestação e TSH; adulto saudável frequentemente ~1,6 mcg/kg/dia, mas idosos/cardiopatas iniciam menor.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Palpitação, tremor, insônia e perda de peso por excesso.",
    "dangerousAdverseEffects": "Arritmia, angina, perda óssea e crise tireotóxica por sobredose.",
    "adverseEffects": "Palpitação, tremor, insônia e perda de peso por excesso.; Arritmia, angina, perda óssea e crise tireotóxica por sobredose.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Arritmia, angina, perda óssea e crise tireotóxica por sobredose.",
    "alerts": "Arritmia, angina, perda óssea e crise tireotóxica por sobredose.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levothyroxine"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levothyroxine"
  },
  "es": {
    "name": "Levotiroxina",
    "class": "Hormônio tireoidiano T4",
    "pharmacologicClass": "Hormônio tireoidiano T4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos em múltiplas forças; margem terapêutica estreita.",
    "presentations": "Comprimidos em múltiplas forças; margem terapêutica estreita.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Hipotireoidismo y supressão de TSH em contextos selecionados.",
    "dose": "Dose individualizada por idade, peso, cardiopatia, gestação y TSH; adulto saudável frequentemente ~1,6 mcg/kg/dia, mas idosos/cardiopatas iniciam menor.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Palpitação, tremor, insônia y perda de peso por excesso.",
    "dangerousAdverseEffects": "Arritmia, angina, perda óssea y crise tireotóxica por sobredosis.",
    "adverseEffects": "Palpitação, tremor, insônia y perda de peso por excesso.; Arritmia, angina, perda óssea y crise tireotóxica por sobredosis.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Arritmia, angina, perda óssea y crise tireotóxica por sobredosis.",
    "alerts": "Arritmia, angina, perda óssea y crise tireotóxica por sobredosis.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levothyroxine"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levothyroxine"
  }
};})();
/* GOLD33_SELECTIVE:levotiroxina:END */
/* GOLD33_SELECTIVE:linagliptina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="linagliptina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:linagliptina:"+matches.length);drug=matches[0];}else{drug=db&&db["linagliptina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:linagliptina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "047",
    "requiredFieldCount": 33,
    "approvedSha256": "465e927ea8677a0af62a52f24a5c1389bb2f9094f9224f1b32c175740f74b49d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Linagliptina",
    "class": "Inibidor da DPP-4",
    "pharmacologicClass": "Inibidor da DPP-4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 5 mg.",
    "presentations": "Comprimido 5 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Diabetes mellitus tipo 2 em adultos, como adjuvante a dieta e exercício.",
    "dose": "5 mg VO uma vez ao dia, com ou sem alimento. Não requer ajuste renal; não usar para diabetes tipo 1 ou cetoacidose.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Nasofaringite, tosse e diarreia; hipoglicemia principalmente com insulina ou sulfonilureia.",
    "dangerousAdverseEffects": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso e artralgia grave.",
    "adverseEffects": "Nasofaringite, tosse e diarreia; hipoglicemia principalmente com insulina ou sulfonilureia.; Pancreatite aguda, hipersensibilidade, penfigoide bolhoso e artralgia grave.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso e artralgia grave.",
    "alerts": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso e artralgia grave.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linagliptin",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/201280s029lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linagliptin"
  },
  "es": {
    "name": "Linagliptina",
    "class": "Inibidor da DPP-4",
    "pharmacologicClass": "Inibidor da DPP-4",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimido 5 mg.",
    "presentations": "Comprimido 5 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Diabetes mellitus tipo 2 em adultos, como adjuvante a dieta y exercício.",
    "dose": "5 mg VO uma vez ao dia, con ou sem alimento. No requer ajuste renal; no usar para diabetes tipo 1 ou cetoacidosis.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Nasofaringite, tosse y diarreia; hipoglicemia principalmente con insulina ou sulfonilureia.",
    "dangerousAdverseEffects": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso y artralgia grave.",
    "adverseEffects": "Nasofaringite, tosse y diarreia; hipoglicemia principalmente con insulina ou sulfonilureia.; Pancreatite aguda, hipersensibilidade, penfigoide bolhoso y artralgia grave.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso y artralgia grave.",
    "alerts": "Pancreatite aguda, hipersensibilidade, penfigoide bolhoso y artralgia grave.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linagliptin",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/201280s029lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=linagliptin"
  }
};})();
/* GOLD33_SELECTIVE:linagliptina:END */
/* GOLD33_SELECTIVE:metformina:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="metformina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:metformina:"+matches.length);drug=matches[0];}else{drug=db&&db["metformina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:metformina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "050",
    "requiredFieldCount": 33,
    "approvedSha256": "05f711b06c165ab09da3326a0a672735b3efd2c46bd3e881bcfe3ec6606ae4a0",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Metformina",
    "class": "Biguanida antidiabética",
    "pharmacologicClass": "Biguanida antidiabética",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos IR 500/850/1000 mg; ER em várias forças; solução oral conforme mercado.",
    "presentations": "Comprimidos IR 500/850/1000 mg; ER em várias forças; solução oral conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Diabetes mellitus tipo 2 como adjuvante a dieta e exercício.",
    "dose": "IR: iniciar 500 mg VO duas vezes/dia ou 850 mg uma vez/dia com refeições; titular; máximo rotulado frequentemente 2550 mg/dia. ER: iniciar 500-1000 mg/dia, máximo usual 2000 mg/dia conforme produto.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Diarreia, náusea, desconforto abdominal e redução de vitamina B12.",
    "dangerousAdverseEffects": "Acidose láctica rara, porém grave.",
    "adverseEffects": "Diarreia, náusea, desconforto abdominal e redução de vitamina B12.; Acidose láctica rara, porém grave.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Acidose láctica rara, porém grave.",
    "alerts": "Acidose láctica rara, porém grave.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-safety-and-availability/fda-revises-warnings-regarding-use-diabetes-medicine-metformin-certain-patients-reduced-kidney"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin"
  },
  "es": {
    "name": "Metformina",
    "class": "Biguanida antidiabética",
    "pharmacologicClass": "Biguanida antidiabética",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos IR 500/850/1000 mg; ER em várias forças; solución oral conforme mercado.",
    "presentations": "Comprimidos IR 500/850/1000 mg; ER em várias forças; solución oral conforme mercado.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Diabetes mellitus tipo 2 como adjuvante a dieta y exercício.",
    "dose": "IR: iniciar 500 mg VO duas vezes/dia ou 850 mg uma vez/dia con refeições; titular; máximo rotulado frequentemente 2550 mg/dia. ER: iniciar 500-1000 mg/dia, máximo usual 2000 mg/dia conforme produto.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Diarreia, náusea, desconforto abdominal y redução de vitamina B12.",
    "dangerousAdverseEffects": "Acidosis láctica rara, porém grave.",
    "adverseEffects": "Diarreia, náusea, desconforto abdominal y redução de vitamina B12.; Acidosis láctica rara, porém grave.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Acidosis láctica rara, porém grave.",
    "alerts": "Acidosis láctica rara, porém grave.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-safety-and-availability/fda-revises-warnings-regarding-use-diabetes-medicine-metformin-certain-patients-reduced-kidney"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin"
  }
};})();
/* GOLD33_SELECTIVE:metformina:END */
/* GOLD33_SELECTIVE:metimazol:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="metimazol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:metimazol:"+matches.length);drug=matches[0];}else{drug=db&&db["metimazol"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:metimazol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "050",
    "requiredFieldCount": 33,
    "approvedSha256": "05f711b06c165ab09da3326a0a672735b3efd2c46bd3e881bcfe3ec6606ae4a0",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Metimazol",
    "class": "Antitireoidiano tionamida",
    "pharmacologicClass": "Antitireoidiano tionamida",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 e 10 mg.",
    "presentations": "Comprimidos 5 e 10 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária e formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida e eliminação na fonte primária.",
    "indications": "Hipertireoidismo, incluindo doença de Graves; preparo para tireoidectomia ou iodo radioativo.",
    "dose": "Dose inicial adulta depende da gravidade: 15 mg/dia leve, 30-40 mg/dia moderada, 60 mg/dia grave, dividida; manutenção 5-15 mg/dia. Ajustar por T4/T3 e resposta.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar função renal e tabela específica; não inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; não inferir ajuste.",
    "commonAdverseEffects": "Rash, prurido, náusea, artralgia e alteração do paladar.",
    "dangerousAdverseEffects": "Agranulocitose, hepatotoxicidade, vasculite e embriopatia.",
    "adverseEffects": "Rash, prurido, náusea, artralgia e alteração do paladar.; Agranulocitose, hepatotoxicidade, vasculite e embriopatia.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, função orgânica e eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Agranulocitose, hepatotoxicidade, vasculite e embriopatia.",
    "alerts": "Agranulocitose, hepatotoxicidade, vasculite e embriopatia.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methimazole",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/040350s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methimazole"
  },
  "es": {
    "name": "Metimazol",
    "class": "Antitireoidiano tionamida",
    "pharmacologicClass": "Antitireoidiano tionamida",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 5 y 10 mg.",
    "presentations": "Comprimidos 5 y 10 mg.",
    "mechanism": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacodynamics": "Mecanismo específico da classe conforme fonte primária y formulação.",
    "pharmacokinetics": "Revisar absorção, metabolismo, meia-vida y eliminação na fonte primária.",
    "indications": "Hipertireoidismo, incluindo doença de Graves; preparo para tireoidectomia ou iodo radioativo.",
    "dose": "Dose inicial adulta depende da gravidade: 15 mg/dia leve, 30-40 mg/dia moderada, 60 mg/dia grave, dividida; manutenção 5-15 mg/dia. Ajustar por T4/T3 y resposta.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Avaliar función renal y tabela específica; no inferir ajuste.",
    "hepaticDose": "Avaliar hepatopatia; no inferir ajuste.",
    "commonAdverseEffects": "Rash, prurido, náusea, artralgia y alteração do paladar.",
    "dangerousAdverseEffects": "Agranulocitose, hepatotoxicidade, vasculite y embriopatia.",
    "adverseEffects": "Rash, prurido, náusea, artralgia y alteração do paladar.; Agranulocitose, hepatotoxicidade, vasculite y embriopatia.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da bula.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas aplicáveis.",
    "monitoring": "Monitorar eficácia, tolerabilidade, función orgânica y eventos graves.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Agranulocitose, hepatotoxicidade, vasculite y embriopatia.",
    "alerts": "Agranulocitose, hepatotoxicidade, vasculite y embriopatia.; monitorização obrigatória",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methimazole",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2012/040350s016lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methimazole"
  }
};})();
/* GOLD33_SELECTIVE:metimazol:END */
/* GOLD33_SELECTIVE:pioglitazona:START */
;(function(){var db=window.ENDOCRINO_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="pioglitazona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:pioglitazona:"+matches.length);drug=matches[0];}else{drug=db&&db["pioglitazona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:pioglitazona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "062",
    "requiredFieldCount": 33,
    "approvedSha256": "370ce1bd176a8195540294ce684462cfa5ab46161e640a53e008c75ab3b56496",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Pioglitazona",
    "class": "Tiazolidinediona agonista PPAR-gama",
    "pharmacologicClass": "Tiazolidinediona agonista PPAR-gama",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 15/30/45 mg e combinações fixas.",
    "presentations": "Comprimidos 15/30/45 mg e combinações fixas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Diabetes tipo 2 como adjuvante à dieta/exercício; não trata diabetes tipo 1 ou cetoacidose.",
    "dose": "Iniciar 15-30 mg VO uma vez/dia; máximo 45 mg/dia. Avaliar insuficiência cardíaca, fígado e combinação terapêutica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Edema, ganho de peso, infecção respiratória e cefaleia.",
    "dangerousAdverseEffects": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade e possível risco vesical.",
    "adverseEffects": "Edema, ganho de peso, infecção respiratória e cefaleia.; Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade e possível risco vesical.",
    "contraindications": "Hipersensibilidade e contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas e metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade e riscos graves aplicáveis.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade e possível risco vesical.",
    "alerts": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade e possível risco vesical.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pioglitazona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pioglitazona"
  },
  "es": {
    "name": "Pioglitazona",
    "class": "Tiazolidinediona agonista PPAR-gama",
    "pharmacologicClass": "Tiazolidinediona agonista PPAR-gama",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos 15/30/45 mg y combinações fixas.",
    "presentations": "Comprimidos 15/30/45 mg y combinações fixas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Diabetes tipo 2 como adjuvante à dieta/exercício; no trata diabetes tipo 1 ou cetoacidosis.",
    "dose": "Iniciar 15-30 mg VO uma vez/dia; máximo 45 mg/dia. Avaliar insuficiência cardíaca, fígado y combinação terapêutica.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Edema, ganho de peso, infecção respiratória y cefaleia.",
    "dangerousAdverseEffects": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade y possível risco vesical.",
    "adverseEffects": "Edema, ganho de peso, infecção respiratória y cefaleia.; Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade y possível risco vesical.",
    "contraindications": "Hipersensibilidade y contraindicações específicas da apresentação.",
    "interactions": "Revisar interações farmacodinâmicas y metabólicas na fonte específica.",
    "monitoring": "Monitorar eficácia, tolerabilidade y riscos graves aplicáveis.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade y possível risco vesical.",
    "alerts": "Insuficiência cardíaca, fraturas, edema macular, hepatotoxicidade y possível risco vesical.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pioglitazona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pioglitazona"
  }
};})();
/* GOLD33_SELECTIVE:pioglitazona:END */
