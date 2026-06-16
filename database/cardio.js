/* ============================================================
   MedCases Pro — Módulo: CARDIOVASCULAR
   Expõe: window.CARDIO_DRUGS_DB
   Schema: PREMIUM_DRUGS_DB — calculate(paciente, lang)
   Compatível com ALL_DRUGS_DB spread direto (igual ao antimicrobianos.js)
   ISOLADO em IIFE para não vazar t() para o escopo global.
============================================================ */
(function () {

  /* Helper bilíngue — escopo local */
  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  window.CARDIO_DRUGS_DB = {};

  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       1. METOPROLOL
       Betabloqueador beta-1 seletivo — HTA · ICC · Pós-IAM · FA
    ══════════════════════════════════════════════════════════════ */
    metoprolol: {
      name:     { pt: 'Metoprolol', es: 'Metoprolol' },
      category: 'cardio',
      icon:     '🫀',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#B91C1C',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        /* Dose pediátrica baseada em peso (HTA) */
        const dosePedIA  = +(Math.min(peso * 1, 50)).toFixed(1);  /* 1 mg/kg/dia inicial */
        const dosePedMax = +(Math.min(peso * 2, 200)).toFixed(1); /* 2 mg/kg/dia máximo  */

        return {
          name:  t(lang, 'Succinato / Tartarato de Metoprolol', 'Succinato / Tartrato de Metoprolol'),
          class: t(lang, 'Betabloqueador beta-1 seletivo', 'Betabloqueante beta-1 selectivo'),

          commercialNames: {
            br: ['Seloken', 'Selozok', 'Metoprolol genérico'],
            ar: ['Lopresor', 'Seloken', 'Metoprolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 25 mg, 50 mg, 100 mg (tartarato - liberação imediata)', 'Comprimidos: 25 mg, 50 mg, 100 mg (tartrato - liberación inmediata)'),
            t(lang, 'Comprimidos LP: 25 mg, 50 mg, 100 mg, 200 mg (succinato - liberação prolongada)', 'Comprimidos LP: 25 mg, 50 mg, 100 mg, 200 mg (succinato - liberación prolongada)'),
            t(lang, 'Solução injetável EV: 1 mg/mL (5 mL/ampola)', 'Solución inyectable EV: 1 mg/mL (5 mL/ampolla)')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA/Angina: 50–100 mg VO 1–2x/dia (tartarato) ou 50–100 mg 1x/dia (succinato LP). Titular até 200 mg/dia.',
              'HTA/Angina: 50–100 mg VO 1–2 veces/día (tartrato) o 50–100 mg 1 vez/día (succinato LP). Titular hasta 200 mg/día.'
            ),
            adultoGrave: t(lang,
              'ICC (ICFEr): iniciar 12,5–25 mg VO 1x/dia (succinato LP). Titular lentamente a cada 2 semanas até 200 mg/dia se tolerado.',
              'ICC (ICFEr): iniciar 12,5–25 mg VO 1 vez/día (succinato LP). Titular lentamente cada 2 semanas hasta 200 mg/día si tolerado.'
            ),
            pediatricaPadrao: t(lang,
              `${dosePedIA} mg VO/dia dividido em 1–2 tomadas (1 mg/kg/dia inicial em HTA).`,
              `${dosePedIA} mg VO/día dividido en 1–2 tomas (1 mg/kg/día inicial en HTA).`
            ),
            pediatricaGrave: t(lang,
              `Titular até ${dosePedMax} mg/dia (2 mg/kg/dia) com cautela em ICC pediátrica.`,
              `Titular hasta ${dosePedMax} mg/día (2 mg/kg/día) con precaución en ICC pediátrica.`
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '1 mg/kg/dia VO dividido em 1–2x (HTA pediátrica)', '1 mg/kg/día VO dividido en 1–2 veces (HTA pediátrica)'),
            grave:     t(lang, 'Até 2 mg/kg/dia VO com titulação cautelosa', 'Hasta 2 mg/kg/día VO con titulación cautelosa'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 200 mg/dia (ICC) / 400 mg/dia (HTA/Angina) | Pediatria: 200 mg/dia', 'Adultos: 200 mg/día (ICC) / 400 mg/día (HTA/Angina) | Pediatría: 200 mg/día')
          },

          therapeuticRange: t(lang,
            'Alvo de FC em repouso: 55–65 bpm em ICC estável. Em HTA/Angina: FC em repouso < 70 bpm com PA controlada.',
            'Objetivo de FC en reposo: 55–65 lpm en ICC estable. En HTA/Angina: FC en reposo < 70 lpm con PA controlada.'
          ),

          dilution: t(lang,
            'EV: pode ser administrado sem diluição (bolus lento 1 mg/min) ou diluído em SF 0,9% / SG 5%. Usar apenas em ambiente com monitorização contínua.',
            'EV: puede administrarse sin dilución (bolo lento 1 mg/min) o diluido en SF 0,9% / SG 5%. Usar solo con monitorización continua.'
          ),

          speed: t(lang,
            'EV: infundir 5 mg em 5 minutos. Repetir até 3 doses com intervalo de 5 min conforme resposta hemodinâmica.',
            'EV: infundir 5 mg en 5 minutos. Repetir hasta 3 dosis con intervalo de 5 min según respuesta hemodinámica.'
          ),

          commonAdverseEffects: [
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Fadiga e letargia', 'Fatiga y letargo'),
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Extremidades frias', 'Extremidades frías'),
            t(lang, 'Disfunção erétil', 'Disfunción eréctil'),
            t(lang, 'Pesadelos / distúrbios do sono', 'Pesadillas / trastornos del sueño')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV de 2º/3º grau', 'Bloqueo AV de 2º/3er grado'),
            t(lang, 'Broncoespasmo em asmáticos/DPOC grave', 'Broncoespasmo en asmáticos/EPOC grave'),
            t(lang, 'Choque cardiogênico / hipotensão grave', 'Shock cardiogénico / hipotensión grave'),
            t(lang, 'Piora abrupta de ICC descompensada', 'Empeoramiento abrupto de ICC descompensada'),
            t(lang, 'Hipoglicemia mascarada em diabéticos', 'Hipoglucemia enmascarada en diabéticos')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'Gestação: usar apenas se benefício superar risco. Monitorar crescimento fetal e bradicardia neonatal.',
                  'Embarazo: usar solo si el beneficio supera el riesgo. Monitorizar crecimiento fetal y bradicardia neonatal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: compatível com cautela. Observar bradicardia e sonolência no lactente.',
                  'Lactancia: compatible con precaución. Observar bradicardia y somnolencia en el lactante.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: maior sensibilidade à bradicardia e hipotensão. Iniciar com dose baixa e titular lentamente.',
                  'Adulto mayor: mayor sensibilidad a bradicardia e hipotensión. Iniciar con dosis baja y titular lentamente.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): metabolismo hepático predominante — sem ajuste obrigatório, mas monitorar hipotensão e bradicardia.',
                  'IR Grave (ClCr < 30): metabolismo hepático predominante — sin ajuste obligatorio, pero monitorizar hipotensión y bradicardia.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'NUNCA suspender abruptamente — risco de angina rebote, IAM e morte súbita. Reduzir progressivamente em 1–2 semanas.',
              'NUNCA suspender abruptamente — riesgo de angina rebote, IAM y muerte súbita. Reducir progresivamente en 1–2 semanas.'
            ),
            t(lang,
              'Segurar dose se: FC < 50 bpm, PAS < 90 mmHg, bloqueio AV 2º/3º grau ou ICC agudamente descompensada.',
              'Suspender dosis si: FC < 50 lpm, PAS < 90 mmHg, bloqueo AV 2º/3er grado o ICC agudamente descompensada.'
            ),
            t(lang,
              'Interação crítica com verapamil/diltiazem EV: risco de bloqueio AV e parada cardíaca.',
              'Interacción crítica con verapamilo/diltiazem EV: riesgo de bloqueo AV y paro cardíaco.'
            ),
            t(lang,
              'Pode mascarar taquicardia como sinal precoce de hipoglicemia em diabéticos insulinizados.',
              'Puede enmascarar taquicardia como signo precoz de hipoglucemia en diabéticos insulinizados.'
            )
          ],

          ref: 'AHA/ACC/HFSA Heart Failure Guidelines 2022 · ESC Heart Failure Guidelines 2021 · Goodman & Gilman 14ª ed. · Lexicomp 2026 · FDA/EMA label',

          /* ── Ajuste Renal ─────────────────────────────────────────────────
             Metoprolol: metabolismo hepático (CYP2D6) ~95%.
             Eliminação renal dos metabólitos inativos < 5%.
             Sem necessidade de ajuste renal formal — porém cautela
             em IR grave pela possível acumulação de metabólitos e
             por hipotensão/bradicardia mais pronunciada.
             Fontes: Lexicomp 2026 · FDA label · UpToDate 2025
          ──────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Metabolismo hepático predominante. Não requer ajuste renal formal.',
              'Metabolismo hepático predominante. No requiere ajuste renal formal.'
            ),

            fgMaior50: {
              vo: { dose: '25–200 mg', intervalo: '12/12h–24/24h', doseMaxima: '400 mg/dia', unidade: 'mg' },
              ev: { dose: '5 mg', intervalo: 'Bolus lento a cada 5 min (máx 3 doses)', doseMaxima: '15 mg', unidade: 'mg' },
              pediatrica: { dose: '1 mg/kg', intervalo: '12/12h–24/24h', doseMaxima: '200 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. Na ICC, usar formulação LP (succinato) 1x/dia com titulação gradual.',
                'Dosis estándar. En ICC, usar formulación LP (succinato) 1 vez/día con titulación gradual.'
              )
            },

            fg30a50: {
              vo: { dose: '25–100 mg', intervalo: '12/12h–24/24h', doseMaxima: '200 mg/dia', unidade: 'mg' },
              ev: { dose: '2,5–5 mg', intervalo: 'Bolus lento (monitorização contínua)', doseMaxima: '10 mg', unidade: 'mg' },
              pediatrica: { dose: '0,5–1 mg/kg', intervalo: '12/12h', doseMaxima: '100 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Sem ajuste renal obrigatório. Monitorar bradicardia e hipotensão — mais frequentes com disfunção renal moderada.',
                'Sin ajuste renal obligatorio. Monitorizar bradicardia e hipotensión — más frecuentes con disfunción renal moderada.'
              )
            },

            fg10a30: {
              vo: { dose: '12,5–50 mg', intervalo: '12/12h–24/24h', doseMaxima: '100 mg/dia', unidade: 'mg' },
              ev: { dose: '2,5 mg', intervalo: 'Bolus lento com monitorização', doseMaxima: '5 mg', unidade: 'mg' },
              pediatrica: { dose: '0,5 mg/kg', intervalo: '24/24h', doseMaxima: '50 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR grave: sem ajuste formal necessário, mas preferir doses baixas. Alto risco de hipotensão e bradicardia. Monitorar PA e FC rigorosamente.',
                'IR grave: sin ajuste formal necesario, pero preferir dosis bajas. Alto riesgo de hipotensión y bradicardia. Monitorizar PA y FC rigurosamente.'
              )
            },

            fgMenor10: {
              vo: { dose: '12,5–25 mg', intervalo: '24/24h', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: { dose: '1–2,5 mg', intervalo: 'Bolus lento — uso excepcional com monitorização intensiva', doseMaxima: '5 mg', unidade: 'mg' },
              pediatrica: { dose: '0,25 mg/kg', intervalo: '24/24h', doseMaxima: '25 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR muito grave/anúria: cautela extrema. Risco elevado de hipotensão e bradicardia. Avaliar necessidade real do betabloqueador neste cenário.',
                'IR muy grave/anuria: precaución extrema. Riesgo elevado de hipotensión y bradicardia. Evaluar necesidad real del betabloqueante en este escenario.'
              )
            },

            hemodialise: {
              vo: { dose: '12,5–25 mg', intervalo: '24/24h (após HD nos dias de diálise)', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Metoprolol é parcialmente removido por hemodiálise (~25%). Administrar dose reduzida após a sessão. Monitorar hipotensão intradialítica.',
                'Metoprolol es parcialmente removido por hemodiálisis (~25%). Administrar dosis reducida después de la sesión. Monitorizar hipotensión intradialítica.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:          false,
            neurotoxicityRisk:      false,
            qtRisk:                 false,
            hepatotoxicityRisk:     false,
            requiresCultureGuidance: false,
            bradycardiaRisk:        true,
            hypotensionRisk:        true,
            avBlockRisk:            true,
            pregnancyCaution:       true,
            warning: t(lang,
              'Risco de bradicardia, hipotensão e bloqueio AV. NUNCA suspender abruptamente. Contraindicado em IC agudamente descompensada.',
              'Riesgo de bradicardia, hipotensión y bloqueo AV. NUNCA suspender abruptamente. Contraindicado en IC agudamente descompensada.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'ESC Heart Failure Guidelines 2021',
              'FDA Lopressor (metoprolol tartrate) label 2023',
              'EMA Seloken ZOC (metoprolol succinate) SmPC 2024',
              'UpToDate 2025',
              'Lexicomp Online 2026',
              'Goodman & Gilman Pharmacological Basis of Therapeutics 14ª ed.'
            ],
            note: t(lang,
              'Betabloqueador beta-1 seletivo. Distingue succinato (LP, 1x/dia, preferido em ICC) de tartarato (IR, 2x/dia). Ajuste renal não obrigatório — metabolismo hepático. Titulação lenta obrigatória em ICC.',
              'Betabloqueante beta-1 selectivo. Distingue succinato (LP, 1 vez/día, preferido en ICC) de tartrato (IR, 2 veces/día). Ajuste renal no obligatorio — metabolismo hepático. Titulación lenta obligatoria en ICC.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       2. BISOPROLOL
       Betabloqueador beta-1 seletivo — ICC · HTA · Angina · FA
    ══════════════════════════════════════════════════════════════ */
    bisoprolol: {
      name:     { pt: 'Bisoprolol', es: 'Bisoprolol' },
      category: 'cardio',
      icon:     '🫀',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#991B1B',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Fumarato de Bisoprolol', 'Fumarato de Bisoprolol'),
          class: t(lang, 'Betabloqueador beta-1 seletivo (alta seletividade)', 'Betabloqueante beta-1 selectivo (alta selectividad)'),

          commercialNames: {
            br: ['Concor', 'Bisoprolol genérico', 'Emconcor'],
            ar: ['Concor', 'Bisoprolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 1,25 mg, 2,5 mg, 5 mg, 10 mg', 'Comprimidos: 1,25 mg, 2,5 mg, 5 mg, 10 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA/Angina/FA: 2,5–5 mg VO 1x/dia. Manutenção 5–10 mg/dia. Máximo 20 mg/dia.',
              'HTA/Angina/FA: 2,5–5 mg VO 1 vez/día. Mantenimiento 5–10 mg/día. Máximo 20 mg/día.'
            ),
            adultoGrave: t(lang,
              'ICC (ICFEr — CIBIS II): iniciar 1,25 mg VO 1x/dia. Dobrar a dose a cada 2 semanas se tolerado, até alvo de 10 mg/dia.',
              'ICC (ICFEr — CIBIS II): iniciar 1,25 mg VO 1 vez/día. Doblar la dosis cada 2 semanas si tolerado, hasta objetivo de 10 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados limitados em ICC pediátrica.',
              'Uso pediátrico no aprobado formalmente. Datos limitados en ICC pediátrica.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 0,02–0,2 mg/kg/dia VO 1x/dia (referência clínica)', 'Adultos: 0,02–0,2 mg/kg/día VO 1 vez/día (referencia clínica)'),
            grave:     t(lang, 'ICC: titular de 1,25 mg até 10 mg/dia independente do peso', 'ICC: titular desde 1,25 mg hasta 10 mg/día independiente del peso'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 10 mg/dia (ICC) / 20 mg/dia (HTA/Angina)', 'Adultos: 10 mg/día (ICC) / 20 mg/día (HTA/Angina)')
          },

          therapeuticRange: t(lang,
            'ICC: alvo de FC 55–65 bpm em repouso. HTA: FC < 70 bpm com PA-alvo atingida. Titular sempre com base em resposta clínica.',
            'ICC: objetivo de FC 55–65 lpm en reposo. HTA: FC < 70 lpm con PA objetivo alcanzada. Titular siempre en base a respuesta clínica.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível comercialmente. Sem apresentação EV padronizada.',
            'Solo formulación oral disponible comercialmente. Sin presentación EV estandarizada.'
          ),

          speed: t(lang,
            'VO: tomar pela manhã, com ou sem alimento, no mesmo horário diariamente.',
            'VO: tomar por la mañana, con o sin alimento, a la misma hora diariamente.'
          ),

          commonAdverseEffects: [
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Extremidades frias', 'Extremidades frías'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV de 2º/3º grau', 'Bloqueo AV de 2º/3er grado'),
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Broncoespasmo (especialmente em asma grave)', 'Broncoespasmo (especialmente en asma grave)'),
            t(lang, 'Descompensação de ICC em início abrupto ou dose elevada', 'Descompensación de ICC en inicio abrupto o dosis elevada')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'Gestação: usar apenas se benefício superar risco. Monitorar crescimento fetal e bradicardia neonatal.',
                  'Embarazo: usar solo si el beneficio supera el riesgo. Monitorizar crecimiento fetal y bradicardia neonatal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Observar bradicardia e sonolência no lactente.',
                  'Lactancia: usar con precaución. Observar bradicardia y somnolencia en el lactante.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: maior risco de bradicardia e hipotensão. Iniciar com 1,25 mg e titular devagar.',
                  'Adulto mayor: mayor riesgo de bradicardia e hipotensión. Iniciar con 1,25 mg y titular despacio.'
                )
              : null,
            fg < 20
              ? t(lang,
                  'IR muito grave (ClCr < 20): não exceder 10 mg/dia. Monitorar bradicardia e hipotensão.',
                  'IR muy grave (ClCr < 20): no superar 10 mg/día. Monitorizar bradicardia e hipotensión.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'NUNCA suspender abruptamente — risco de síndrome de abstinência, angina rebote e morte súbita.',
              'NUNCA suspender abruptamente — riesgo de síndrome de abstinencia, angina rebote y muerte súbita.'
            ),
            t(lang,
              'Segurar se: FC < 50 bpm, PAS < 90 mmHg, bloqueio AV 2º/3º grau ou ICC agudamente descompensada.',
              'Suspender si: FC < 50 lpm, PAS < 90 mmHg, bloqueo AV 2º/3er grado o ICC agudamente descompensada.'
            ),
            t(lang,
              'Interação grave com verapamil EV ou diltiazem EV: risco de bradicardia fatal e bloqueio AV.',
              'Interacción grave con verapamilo EV o diltiazem EV: riesgo de bradicardia fatal y bloqueo AV.'
            ),
            t(lang,
              'Usar com precaução em DPOC moderado/grave — preferir cardioseletivos de alta seletividade como bisoprolol nesse contexto.',
              'Usar con precaución en EPOC moderado/grave — preferir cardioselectivos de alta selectividad como bisoprolol en este contexto.'
            )
          ],

          ref: 'ESC Heart Failure Guidelines 2021 · AHA/ACC/HFSA Heart Failure Guidelines 2022 · CIBIS-II Trial · Lexicomp 2026 · EMA Concor SmPC 2024',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Bisoprolol: metabolismo dual — 50% hepático (CYP3A4/2D6),
             50% renal (excreção inalterada + metabólitos).
             Ajuste recomendado em IR grave (ClCr < 20 mL/min): não
             exceder 10 mg/dia. Hemodiálise: não removido significativamente.
             Fontes: EMA SmPC Concor · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 20,

            message: fg < 20
              ? t(lang,
                  'IR muito grave (ClCr < 20 mL/min): não exceder 10 mg/dia.',
                  'IR muy grave (ClCr < 20 mL/min): no superar 10 mg/día.'
                )
              : t(lang,
                  'Não requer ajuste renal para ClCr ≥ 20 mL/min.',
                  'No requiere ajuste renal para ClCr ≥ 20 mL/min.'
                ),

            fgMaior50: {
              vo: { dose: '1,25–10 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. Na ICC, iniciar com 1,25 mg e titular a cada 2 semanas.',
                'Dosis estándar. En ICC, iniciar con 1,25 mg y titular cada 2 semanas.'
              )
            },

            fg30a50: {
              vo: { dose: '1,25–10 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório, mas preferir doses até 10 mg/dia. Monitorar PA e FC.',
                'IR moderada: sin ajuste obligatorio, pero preferir dosis hasta 10 mg/día. Monitorizar PA y FC.'
              )
            },

            fg10a30: {
              vo: { dose: '1,25–5 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: não exceder 10 mg/dia. Titular com precaução — risco aumentado de hipotensão e bradicardia.',
                'IR grave: no superar 10 mg/día. Titular con precaución — riesgo aumentado de hipotensión y bradicardia.'
              )
            },

            fgMenor10: {
              vo: { dose: '1,25–2,5 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: dose máxima de 10 mg/dia. Iniciar com 1,25 mg e titular com cautela extrema. Monitorar bradicardia, hipotensão e hipercalemia.',
                'IR muy grave: dosis máxima de 10 mg/día. Iniciar con 1,25 mg y titular con precaución extrema. Monitorizar bradicardia, hipotensión e hiperpotasemia.'
              )
            },

            hemodialise: {
              vo: { dose: '1,25–2,5 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Bisoprolol não é removido significativamente por hemodiálise. Não requer suplementação pós-HD. Manter dose reduzida (máx 10 mg/dia).',
                'Bisoprolol no es removido significativamente por hemodiálisis. No requiere suplementación post-HD. Mantener dosis reducida (máx 10 mg/día).'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            bradycardiaRisk:         true,
            hypotensionRisk:         true,
            avBlockRisk:             true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Alta seletividade beta-1. Usar com cautela em IR grave (ClCr < 20 — dose máx. 10 mg/dia). Titulação lenta obrigatória em ICC.',
              'Alta selectividad beta-1. Usar con precaución en IR grave (ClCr < 20 — dosis máx. 10 mg/día). Titulación lenta obligatoria en ICC.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'CIBIS-II Trial (Lancet 1999)',
              'EMA Concor (bisoprolol) SmPC 2024',
              'UpToDate 2025',
              'Lexicomp Online 2026',
              'Goodman & Gilman Pharmacological Basis of Therapeutics 14ª ed.'
            ],
            note: t(lang,
              'Um dos 3 betabloqueadores com evidência de redução de mortalidade em ICFEr (junto a metoprolol succinato e carvedilol). Ajuste renal indicado apenas em ClCr < 20 mL/min (máx 10 mg/dia).',
              'Uno de los 3 betabloqueantes con evidencia de reducción de mortalidad en ICFEr (junto a metoprolol succinato y carvedilol). Ajuste renal indicado solo en ClCr < 20 mL/min (máx 10 mg/día).'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       3. NEBIVOLOL
       Beta-1 seletivo + vasodilatação NO-mediada — HTA · ICC selecionada
    ══════════════════════════════════════════════════════════════ */
    nebivolol: {
      name:     { pt: 'Nebivolol', es: 'Nebivolol' },
      category: 'cardio',
      icon:     '🫀',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#7F1D1D',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Cloridrato de Nebivolol', 'Clorhidrato de Nebivolol'),
          class: t(lang,
            'Betabloqueador beta-1 seletivo com ação vasodilatadora mediada por óxido nítrico (NO)',
            'Betabloqueante beta-1 selectivo con acción vasodilatadora mediada por óxido nítrico (NO)'
          ),

          commercialNames: {
            br: ['Nebilet', 'Nebivolol genérico'],
            ar: ['Nebilet', 'Nebivolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 2,5 mg, 5 mg, 10 mg', 'Comprimidos: 2,5 mg, 5 mg, 10 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 5 mg VO 1x/dia. Titular a cada 2 semanas conforme resposta. Máximo: 40 mg/dia conforme protocolo.',
              'HTA: 5 mg VO 1 vez/día. Titular cada 2 semanas según respuesta. Máximo: 40 mg/día según protocolo.'
            ),
            adultoGrave: t(lang,
              'ICC em idosos (SENIORS Trial): iniciar 1,25 mg VO 1x/dia. Dobrar a dose a cada 1–2 semanas até alvo de 10 mg/dia.',
              'ICC en ancianos (estudio SENIORS): iniciar 1,25 mg VO 1 vez/día. Doblar la dosis cada 1–2 semanas hasta objetivo de 10 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado. Sem dados robustos de segurança/eficácia em menores de 18 anos.',
              'Uso pediátrico no aprobado. Sin datos robustos de seguridad/eficacia en menores de 18 años.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 5 mg 1x/dia (dose fixa — não calculada por kg)', 'Adultos: 5 mg 1 vez/día (dosis fija — no calculada por kg)'),
            grave:     t(lang, 'ICC: titular de 1,25 mg até 10 mg/dia (SENIORS)', 'ICC: titular desde 1,25 mg hasta 10 mg/día (SENIORS)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 10 mg/dia (ICC idosos) / 40 mg/dia (HTA alguns protocolos)', 'Adultos: 10 mg/día (ICC ancianos) / 40 mg/día (HTA algunos protocolos)')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg com FC em repouso 55–70 bpm. ICC: FC 55–65 bpm em repouso sem sintomas de baixo débito.',
            'HTA: PA objetivo < 130/80 mmHg con FC en reposo 55–70 lpm. ICC: FC 55–65 lpm en reposo sin síntomas de bajo gasto.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Sem apresentação EV disponível comercialmente.',
            'Solo formulación oral. Sin presentación EV disponible comercialmente.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Cefaleia', 'Cefalea'),
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Parestesias nas mãos', 'Parestesias en manos'),
            t(lang, 'Dispneia leve', 'Disnea leve')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV de 2º/3º grau', 'Bloqueo AV de 2º/3er grado'),
            t(lang, 'Broncoespasmo grave', 'Broncoespasmo grave'),
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Piora de ICC descompensada', 'Empeoramiento de ICC descompensada'),
            t(lang, 'Hipotensão grave (especialmente em idosos)', 'Hipotensión grave (especialmente en ancianos)')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'Gestação: evitar salvo necessidade clara. Pode associar-se a restrição de crescimento fetal e bradicardia neonatal.',
                  'Embarazo: evitar salvo necesidad clara. Puede asociarse a restricción del crecimiento fetal y bradicardia neonatal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Observar bradicardia, sonolência ou má alimentação no lactente.',
                  'Lactancia: usar con precaución. Observar bradicardia, somnolencia o mala alimentación en el lactante.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso (≥ 65 anos): iniciar com 2,5 mg/dia e titular lentamente. Nebivolol tem evidência específica em ICC de idosos (SENIORS Trial).',
                  'Anciano (≥ 65 años): iniciar con 2,5 mg/día y titular lentamente. Nebivolol tiene evidencia específica en ICC de ancianos (estudio SENIORS).'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): iniciar com 2,5 mg/dia. Metabolismo dual hepático/renal — risco aumentado de acúmulo.',
                  'IR Grave (ClCr < 30): iniciar con 2,5 mg/día. Metabolismo dual hepático/renal — riesgo aumentado de acumulación.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'NUNCA suspender abruptamente — reduzir progressivamente em 1–2 semanas para evitar angina rebote e eventos cardiovasculares.',
              'NUNCA suspender abruptamente — reducir progresivamente en 1–2 semanas para evitar angina rebote y eventos cardiovasculares.'
            ),
            t(lang,
              'Segurar se: FC < 50 bpm, PAS < 90 mmHg, bloqueio AV 2º/3º grau ou IC agudamente descompensada.',
              'Suspender si: FC < 50 lpm, PAS < 90 mmHg, bloqueo AV 2º/3er grado o IC agudamente descompensada.'
            ),
            t(lang,
              'Contraindicado em insuficiência hepática grave — metabolismo predominantemente hepático via CYP2D6.',
              'Contraindicado en insuficiencia hepática grave — metabolismo predominantemente hepático vía CYP2D6.'
            ),
            t(lang,
              'Inibidores potentes de CYP2D6 (fluoxetina, paroxetina) aumentam substancialmente a exposição ao nebivolol.',
              'Inhibidores potentes de CYP2D6 (fluoxetina, paroxetina) aumentan sustancialmente la exposición al nebivolol.'
            )
          ],

          ref: 'ESC Hypertension Guidelines 2023 · AHA/ACC Hypertension Guidance 2022 · SENIORS Trial (NEJM 2005) · FDA Bystolic label 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Nebivolol: metabolismo hepático extenso via CYP2D6 (~98%).
             Eliminação renal de metabólitos ativos relevante.
             Em IR moderada/grave (ClCr < 30): iniciar com 2,5 mg/dia.
             Em IR muito grave / HD: dose máxima 2,5 mg/dia.
             Fontes: FDA Bystolic label · EMA SmPC · Lexicomp 2026
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR moderada/grave (ClCr < 30 mL/min): iniciar com 2,5 mg/dia e titular com cautela.',
                  'IR moderada/grave (ClCr < 30 mL/min): iniciar con 2,5 mg/día y titular con precaución.'
                )
              : t(lang,
                  'Não requer ajuste renal para ClCr ≥ 30 mL/min.',
                  'No requiere ajuste renal para ClCr ≥ 30 mL/min.'
                ),

            fgMaior50: {
              vo: { dose: '5 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 5 mg 1x/dia. ICC em idosos: iniciar 1,25 mg e titular até 10 mg.',
                'Dosis estándar. HTA: 5 mg 1 vez/día. ICC en ancianos: iniciar 1,25 mg y titular hasta 10 mg.'
              )
            },

            fg30a50: {
              vo: { dose: '2,5–5 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR leve-moderada: dose padrão tolerada na maioria. Monitorar PA e FC — considerar iniciar com 2,5 mg se > 65 anos.',
                'IR leve-moderada: dosis estándar tolerada en la mayoría. Monitorizar PA y FC — considerar iniciar con 2,5 mg si > 65 años.'
              )
            },

            fg10a30: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 2,5 mg/dia. Titular com cautela extrema. Risco aumentado de acúmulo de metabólitos e bradicardia.',
                'IR grave: iniciar con 2,5 mg/día. Titular con precaución extrema. Riesgo aumentado de acumulación de metabolitos y bradicardia.'
              )
            },

            fgMenor10: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 2,5 mg/dia. Avaliar risco-benefício cuidadosamente. Monitoração intensiva de PA, FC e bloqueio AV.',
                'IR muy grave/anuria: dosis máxima 2,5 mg/día. Evaluar riesgo-beneficio cuidadosamente. Monitorización intensiva de PA, FC y bloqueo AV.'
              )
            },

            hemodialise: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Nebivolol não é significativamente removido por hemodiálise. Manter dose reduzida (2,5 mg/dia). Administrar em horário fixo — sem relação com sessão de HD.',
                'Nebivolol no es significativamente removido por hemodiálisis. Mantener dosis reducida (2,5 mg/día). Administrar en horario fijo — sin relación con sesión de HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            bradycardiaRisk:         true,
            hypotensionRisk:         true,
            avBlockRisk:             true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Nebivolol combina beta-bloqueio com vasodilatação mediada por NO. Iniciar com 2,5 mg em IR grave (ClCr < 30) e em idosos. Contraindicado em hepatopatia grave.',
              'Nebivolol combina beta-bloqueo con vasodilatación mediada por NO. Iniciar con 2,5 mg en IR grave (ClCr < 30) y en ancianos. Contraindicado en hepatopatía grave.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Bystolic (nebivolol) label 2023',
              'EMA Nebilet SmPC 2024',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidance 2022',
              'SENIORS Trial — van Veldhuisen DJ et al. (NEJM 2005)',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'Diferencial: vasodilatação mediada por NO (menor impacto metabólico em pacientes selecionados). Ajuste renal: iniciar com 2,5 mg em ClCr < 30. Única evidência em ICC em idosos (SENIORS).',
              'Diferencial: vasodilatación mediada por NO (menor impacto metabólico en pacientes seleccionados). Ajuste renal: iniciar con 2,5 mg en ClCr < 30. Única evidencia en ICC en ancianos (SENIORS).'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 1 (Betabloqueadores) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 2 — IECAs (Inibidores da ECA)
     enalapril · lisinopril · ramipril
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       4. ENALAPRIL
       IECA — HTA · ICC · Disfunção VE · Nefroproteção
    ══════════════════════════════════════════════════════════════ */
    enalapril: {
      name:     { pt: 'Enalapril', es: 'Enalapril' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.13)',
      colorTxt: '#1E40AF',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        /* Doses pediátricas: 0,08 mg/kg/dia inicial → 0,5 mg/kg/dia máximo */
        const dosePedInicial = +(Math.min(peso * 0.08, 5)).toFixed(2);
        const dosePedMaxima  = +(Math.min(peso * 0.5, 40)).toFixed(1);

        return {
          name:  t(lang, 'Maleato de Enalapril', 'Maleato de Enalapril'),
          class: t(lang,
            'Inibidor da Enzima Conversora de Angiotensina (IECA)',
            'Inhibidor de la Enzima Convertidora de Angiotensina (IECA)'
          ),

          commercialNames: {
            br: ['Renitec', 'Enalatec', 'Pressotec', 'Enalapril Genérico'],
            ar: ['Lotrial', 'Glioten', 'Renitec', 'Enalapril Genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 2,5 mg, 5 mg, 10 mg, 20 mg', 'Comprimidos: 2,5 mg, 5 mg, 10 mg, 20 mg'),
            t(lang, 'Enalaprilat injetável EV: 1,25 mg/mL (ampola 2 mL)', 'Enalaprilat inyectable EV: 1,25 mg/mL (ampolla 2 mL)')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 5 mg VO 1x/dia inicial. Manutenção: 10–40 mg/dia (1x ou 2x/dia).',
              'HTA: 5 mg VO 1 vez/día inicial. Mantenimiento: 10–40 mg/día (1 vez o 2 veces/día).'
            ),
            adultoGrave: t(lang,
              'ICC / Disfunção VE: 2,5 mg VO 2x/dia inicial. Titular até 10–20 mg 2x/dia conforme tolerância.',
              'ICC / Disfunción VI: 2,5 mg VO 2 veces/día inicial. Titular hasta 10–20 mg cada 12h según tolerancia.'
            ),
            pediatricaPadrao: t(lang,
              `${dosePedInicial} mg VO 1x/dia inicial (0,08 mg/kg/dia). Titular com cautela.`,
              `${dosePedInicial} mg VO 1 vez/día inicial (0,08 mg/kg/día). Titular con precaución.`
            ),
            pediatricaGrave: t(lang,
              `Até ${dosePedMaxima} mg/dia (0,5 mg/kg/dia máximo) dividido em 1–2 tomadas.`,
              `Hasta ${dosePedMaxima} mg/día (0,5 mg/kg/día máximo) dividido en 1–2 tomas.`
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '0,08 mg/kg/dia VO 1x/dia (início em HTA pediátrica)', '0,08 mg/kg/día VO 1 vez/día (inicio en HTA pediátrica)'),
            grave:     t(lang, 'Até 0,5 mg/kg/dia VO dividido em 1–2 tomadas', 'Hasta 0,5 mg/kg/día VO dividido en 1–2 tomas'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 40 mg/dia | Pediatria: 40 mg/dia', 'Adultos: 40 mg/día | Pediatría: 40 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. ICC: manutenção em 10–40 mg/dia (2x/dia) conforme tolerância hemodinâmica e renal.',
            'HTA: PA objetivo < 130/80 mmHg. ICC: mantenimiento en 10–40 mg/día (2 veces/día) según tolerancia hemodinámica y renal.'
          ),

          dilution: t(lang,
            'Enalaprilat EV: pode ser administrado direto IV ou diluído em até 50 mL de SF 0,9% ou SG 5%.',
            'Enalaprilat EV: puede administrarse directo IV o diluido en hasta 50 mL de SF 0,9% o SG 5%.'
          ),

          speed: t(lang,
            'EV: administrar lentamente em no mínimo 5 minutos. Monitorar PA durante infusão.',
            'EV: administrar lentamente en al menos 5 minutos. Monitorizar PA durante la infusión.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tosse seca persistente (efeito de classe — ECA)', 'Tos seca persistente (efecto de clase — ECA)'),
            t(lang, 'Hipotensão arterial / tontura', 'Hipotensión arterial / mareo'),
            t(lang, 'Hipercalemia (↑ potássio)', 'Hiperpotasemia (↑ potasio)'),
            t(lang, 'Elevação discreta de creatinina', 'Elevación discreta de creatinina'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema — risco de obstrução de via aérea (evitar IECA para sempre após episódio)', 'Angioedema — riesgo de obstrucción de vía aérea (evitar IECA para siempre tras episodio)'),
            t(lang, 'Insuficiência Renal Aguda (especialmente em estenose bilateral de artéria renal)', 'Insuficiencia Renal Aguda (especialmente en estenosis bilateral de arteria renal)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Hipotensão grave pós-primeira dose (especialmente em hipovolemia)', 'Hipotensión grave post-primera dosis (especialmente en hipovolemia)')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, malformações e morte fetal (especialmente 2º/3º trimestre).',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, malformaciones y muerte fetal (especialmente 2º/3er trimestre).'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: excretado em quantidades mínimas. Geralmente compatível — monitorar PA do lactente. Preferir alternativa se prematuro.',
                  'Lactancia: excretado en cantidades mínimas. Generalmente compatible — monitorizar PA del lactante. Preferir alternativa si prematuro.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: maior sensibilidade a hipotensão. Iniciar com 2,5 mg e monitorar PA, creatinina e potássio após início.',
                  'Adulto mayor: mayor sensibilidad a hipotensión. Iniciar con 2,5 mg y monitorizar PA, creatinina y potasio tras inicio.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): alto risco de hipercalemia e piora de função renal. Reduzir dose inicial. Monitorização intensiva.',
                  'IR Grave (ClCr < 30): alto riesgo de hiperpotasemia y deterioro de función renal. Reducir dosis inicial. Monitorización intensiva.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou aumento de dose.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o aumento de dosis.'
            ),
            t(lang,
              'Angioedema: orientar busca imediata de atendimento se inchaço de lábios, língua ou face. Contraindicar IECA para sempre.',
              'Angioedema: orientar búsqueda inmediata de atención si hinchazón de labios, lengua o cara. Contraindicar IECA para siempre.'
            ),
            t(lang,
              'Contraindicado com Sacubitril/Valsartana sem washout de 36h (risco de angioedema potencializado).',
              'Contraindicado con Sacubitril/Valsartán sin washout de 36h (riesgo de angioedema potenciado).'
            ),
            t(lang,
              'Evitar AINEs — reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda.',
              'Evitar AINEs — reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda.'
            )
          ],

          ref: 'FDA Renitec Label 2023 · AHA/ACC/HFSA Heart Failure Guidelines 2022 · ESC Hypertension Guidelines 2023 · Lexicomp 2026 · Goodman & Gilman 14ª ed.',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Enalapril: pró-fármaco convertido em enalaprilat (ativo).
             Eliminação renal ~88%. Dialisável (~35–50% removido por HD).
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg <= 50,

            message: fg <= 50
              ? t(lang,
                  'Necessita redução da dose inicial pelo clearance renal reduzido.',
                  'Requiere reducción de la dosis inicial por el aclaramiento renal reducido.'
                )
              : t(lang,
                  'Não requer ajuste renal para ClCr > 50 mL/min.',
                  'No requiere ajuste renal para ClCr > 50 mL/min.'
                ),

            fgMaior50: {
              vo: { dose: '5 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: { dose: '1,25 mg', intervalo: '6/6h', doseMaxima: '5 mg/dia', unidade: 'mg' },
              pediatrica: { dose: '0,08 mg/kg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. HTA: 5–40 mg/dia. ICC: iniciar 2,5 mg 12/12h e titular até 20 mg 12/12h.',
                'Dosis estándar. HTA: 5–40 mg/día. ICC: iniciar 2,5 mg 12/12h y titular hasta 20 mg 12/12h.'
              )
            },

            fg30a50: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: { dose: '1,25 mg', intervalo: '12/12h', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              pediatrica: { dose: '0,04 mg/kg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Reduzir dose inicial. Monitorar K⁺ e creatinina rigorosamente.',
                'Reducir dosis inicial. Monitorizar K⁺ y creatinina rigurosamente.'
              )
            },

            fg10a30: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: { dose: '0,625 mg', intervalo: '12/12h', doseMaxima: '1,25 mg/dia', unidade: 'mg' },
              pediatrica: { dose: '0,02 mg/kg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR grave: dose inicial muito reduzida. Risco elevado de hipercalemia severa e piora renal.',
                'IR grave: dosis inicial muy reducida. Riesgo elevado de hiperpotasemia severa y deterioro renal.'
              )
            },

            fgMenor10: {
              vo: { dose: '1,25 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: { dose: '0,625 mg', intervalo: '24/24h', doseMaxima: '1,25 mg/dia', unidade: 'mg' },
              pediatrica: { dose: '0,01 mg/kg', intervalo: '24/24h', doseMaxima: '5 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Redução drástica. Considerar alternativas se anúria ou K⁺ > 5,5 mEq/L. Risco de hipercalemia fatal.',
                'Reducción drástica. Considerar alternativas si anuria o K⁺ > 5,5 mEq/L. Riesgo de hiperpotasemia fatal.'
              )
            },

            hemodialise: {
              vo: { dose: '1,25 mg', intervalo: 'Pós-HD', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: { dose: '0,625 mg', intervalo: 'Pós-HD', doseMaxima: '1,25 mg/dia', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'Enalaprilat é dialisável (~35–50% removido). Administrar APÓS a sessão de HD para evitar hipotensão intradialítica.',
                'Enalaprilat es dializable (~35–50% removido). Administrar DESPUÉS de la sesión de HD para evitar hipotensión intradialítica.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. Monitorar angioedema, K⁺ e creatinina. Ajuste renal obrigatório em ClCr ≤ 50 mL/min.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. Monitorizar angioedema, K⁺ y creatinina. Ajuste renal obligatorio en ClCr ≤ 50 mL/min.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Renitec (enalapril maleate) label 2023',
              'EMA Renitec SmPC 2024',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'ESC Heart Failure Guidelines 2021',
              'ESC Hypertension Guidelines 2023',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'IECA padrão em HTA/ICC. Pró-fármaco (enalaprilat ativo). Eliminação renal 88% — ajuste obrigatório em ClCr ≤ 50. Dialisável — dose pós-HD. Contraindicação absoluta na gravidez.',
              'IECA estándar en HTA/ICC. Profármaco (enalaprilat activo). Eliminación renal 88% — ajuste obligatorio en ClCr ≤ 50. Dializable — dosis post-HD. Contraindicación absoluta en embarazo.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       5. LISINOPRIL
       IECA ativo (não pró-fármaco) — HTA · ICC · Pós-IAM
    ══════════════════════════════════════════════════════════════ */
    lisinopril: {
      name:     { pt: 'Lisinopril', es: 'Lisinopril' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.13)',
      colorTxt: '#1E3A8A',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        /* Doses pediátricas HTA: 0,07 mg/kg/dia inicial → máx 0,6 mg/kg/dia ou 40 mg */
        const dosePedInicial = +(Math.min(peso * 0.07, 5)).toFixed(2);
        const dosePedMaxima  = +(Math.min(peso * 0.6, 40)).toFixed(1);

        return {
          name:  t(lang, 'Lisinopril', 'Lisinopril'),
          class: t(lang,
            'Inibidor da Enzima Conversora de Angiotensina (IECA) — Forma ativa (não pró-fármaco)',
            'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) — Forma activa (no profármaco)'
          ),

          commercialNames: {
            br: ['Zestril', 'Prinivil', 'Lisinopril Genérico'],
            ar: ['Zestril', 'Lisinopril Genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 2,5 mg, 5 mg, 10 mg, 20 mg, 40 mg', 'Comprimidos: 2,5 mg, 5 mg, 10 mg, 20 mg, 40 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 10 mg VO 1x/dia inicial. Manutenção: 10–40 mg/dia 1x/dia. Máximo: 40 mg/dia.',
              'HTA: 10 mg VO 1 vez/día inicial. Mantenimiento: 10–40 mg/día 1 vez/día. Máximo: 40 mg/día.'
            ),
            adultoGrave: t(lang,
              'ICC: iniciar 2,5–5 mg VO 1x/dia. Titular até 20–40 mg/dia. Pós-IAM: 5 mg nas primeiras 24h, 5 mg após 24h, 10 mg após 48h, então 10 mg/dia.',
              'ICC: iniciar 2,5–5 mg VO 1 vez/día. Titular hasta 20–40 mg/día. Post-IAM: 5 mg en las primeras 24h, 5 mg a las 24h, 10 mg a las 48h, luego 10 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              `${dosePedInicial} mg VO 1x/dia (0,07 mg/kg/dia inicial em HTA pediátrica ≥ 6 anos).`,
              `${dosePedInicial} mg VO 1 vez/día (0,07 mg/kg/día inicial en HTA pediátrica ≥ 6 años).`
            ),
            pediatricaGrave: t(lang,
              `Titular até ${dosePedMaxima} mg/dia (0,6 mg/kg/dia ou 40 mg — o menor).`,
              `Titular hasta ${dosePedMaxima} mg/día (0,6 mg/kg/día o 40 mg — el menor).`
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '0,07 mg/kg/dia VO 1x/dia (HTA pediátrica ≥ 6 anos, FDA-aprovado)', '0,07 mg/kg/día VO 1 vez/día (HTA pediátrica ≥ 6 años, FDA-aprobado)'),
            grave:     t(lang, 'Até 0,6 mg/kg/dia ou 40 mg/dia (o menor)', 'Hasta 0,6 mg/kg/día o 40 mg/día (el menor)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 40 mg/dia | Pediatria: 40 mg/dia ou 0,6 mg/kg/dia', 'Adultos: 40 mg/día | Pediatría: 40 mg/día o 0,6 mg/kg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. ICC: alvo 20–40 mg/dia 1x/dia. Não requer níveis séricos — monitorar por resposta clínica, PA, creatinina e K⁺.',
            'HTA: PA objetivo < 130/80 mmHg. ICC: objetivo 20–40 mg/día 1 vez/día. No requiere niveles séricos — monitorizar por respuesta clínica, PA, creatinina y K⁺.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Lisinopril é a forma ativa — sem necessidade de conversão hepática.',
            'Solo formulación oral disponible. Lisinopril es la forma activa — sin necesidad de conversión hepática.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tosse seca (efeito de classe IECA)', 'Tos seca (efecto de clase IECA)'),
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (contraindicar IECA permanentemente após episódio)', 'Angioedema (contraindicar IECA permanentemente tras episodio)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Hipotensão grave na primeira dose', 'Hipotensión grave en la primera dosis')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal, oligoidrâmnio e morte fetal. Contraindicado em qualquer trimestre.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal, oligohidramnios y muerte fetal. Contraindicado en cualquier trimestre.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: compatível com cautela. Monitorar PA do lactente. Preferir alternativa em prematuros.',
                  'Lactancia: compatible con precaución. Monitorizar PA del lactante. Preferir alternativa en prematuros.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 2,5–5 mg. Monitorar hipotensão ortostática, creatinina e K⁺.',
                  'Adulto mayor: iniciar con 2,5–5 mg. Monitorizar hipotensión ortostática, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): redução obrigatória de dose. Alto risco de hipercalemia e deterioração renal.',
                  'IR Grave (ClCr < 30): reducción obligatoria de dosis. Alto riesgo de hiperpotasemia y deterioro renal.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Aumento de creatinina ≤ 30% é esperado e aceitável.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento de creatinina ≤ 30% es esperado y aceptable.'
            ),
            t(lang,
              'Diferencial farmacológico: lisinopril é forma ativa (não pró-fármaco) — biodisponibilidade não depende de conversão hepática.',
              'Diferencial farmacológico: lisinopril es forma activa (no profármaco) — biodisponibilidad no depende de conversión hepática.'
            ),
            t(lang,
              'Sacubitril/Valsartana: washout obrigatório de 36h antes de iniciar Lisinopril (risco de angioedema).',
              'Sacubitril/Valsartán: washout obligatorio de 36h antes de iniciar Lisinopril (riesgo de angioedema).'
            ),
            t(lang,
              'Aprovado pela FDA em pediatria ≥ 6 anos para HTA — único IECA com aprovação pediátrica formal.',
              'Aprobado por FDA en pediatría ≥ 6 años para HTA — único IECA con aprobación pediátrica formal.'
            )
          ],

          ref: 'FDA Zestril (lisinopril) label 2023 · AHA/ACC/HFSA Heart Failure Guidelines 2022 · ESC Hypertension Guidelines 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Lisinopril: forma ativa (não pró-fármaco). Eliminação renal
             > 90% inalterada. Ajuste obrigatório em ClCr < 30 mL/min.
             Dialisável (~50% removido por HD em 4h).
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR moderada/grave (ClCr < 30 mL/min): redução de dose obrigatória.',
                  'IR moderada/grave (ClCr < 30 mL/min): reducción de dosis obligatoria.'
                )
              : t(lang,
                  'Não requer ajuste formal para ClCr ≥ 30 mL/min.',
                  'No requiere ajuste formal para ClCr ≥ 30 mL/min.'
                ),

            fgMaior50: {
              vo: { dose: '5–10 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,07 mg/kg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. Lisinopril eliminado integralmente por via renal — função renal normal não requer ajuste.',
                'Dosis estándar. Lisinopril eliminado íntegramente por vía renal — función renal normal no requiere ajuste.'
              )
            },

            fg30a50: {
              vo: { dose: '5 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,04 mg/kg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório nas diretrizes, mas preferir dose inicial de 5 mg e monitorar K⁺/creatinina.',
                'IR moderada: sin ajuste obligatorio en guías, pero preferir dosis inicial de 5 mg y monitorizar K⁺/creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '2,5–5 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,02 mg/kg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR grave: iniciar com 2,5 mg/dia. Acúmulo significativo — risco aumentado de hipotensão e hipercalemia.',
                'IR grave: iniciar con 2,5 mg/día. Acumulación significativa — riesgo aumentado de hipotensión e hiperpotasemia.'
              )
            },

            fgMenor10: {
              vo: { dose: '2,5 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: dose máxima 2,5 mg/dia. Avaliação cuidadosa de risco-benefício. Risco de hipercalemia potencialmente fatal.',
                'IR muy grave: dosis máxima 2,5 mg/día. Evaluación cuidadosa de riesgo-beneficio. Riesgo de hiperpotasemia potencialmente fatal.'
              )
            },

            hemodialise: {
              vo: { dose: '2,5 mg', intervalo: 'Pós-HD', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Lisinopril é dialisável (~50% removido em 4h de HD). Administrar dose após sessão para evitar hipotensão intradialítica.',
                'Lisinopril es dializable (~50% removido en 4h de HD). Administrar dosis después de la sesión para evitar hipotensión intradialítica.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. Único IECA aprovado em pediatria ≥ 6 anos. Forma ativa — sem conversão hepática. Ajuste renal em ClCr < 30.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. Único IECA aprobado en pediatría ≥ 6 años. Forma activa — sin conversión hepática. Ajuste renal en ClCr < 30.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Zestril (lisinopril) label 2023',
              'EMA Zestril SmPC 2024',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'ESC Hypertension Guidelines 2023',
              'UpToDate 2025',
              'Lexicomp Online 2026',
              'Goodman & Gilman Pharmacological Basis of Therapeutics 14ª ed.'
            ],
            note: t(lang,
              'Único IECA que é forma ativa (não pró-fármaco). Eliminação renal > 90%. Aprovado em pediatria ≥ 6 anos. Dialisável ~50% — dose pós-HD. Ajuste obrigatório em ClCr < 30.',
              'Único IECA que es forma activa (no profármaco). Eliminación renal > 90%. Aprobado en pediatría ≥ 6 años. Dializable ~50% — dosis post-HD. Ajuste obligatorio en ClCr < 30.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       6. RAMIPRIL
       IECA pró-fármaco — HTA · IC · Pós-IAM · Alto risco CV
    ══════════════════════════════════════════════════════════════ */
    ramipril: {
      name:     { pt: 'Ramipril', es: 'Ramipril' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.13)',
      colorTxt: '#1D4ED8',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Ramipril', 'Ramipril'),
          class: t(lang,
            'Inibidor da Enzima Conversora de Angiotensina (IECA) — Pró-fármaco (ramiprilat ativo)',
            'Inhibidor de la Enzima Convertidora de Angiotensina (IECA) — Profármaco (ramiprilat activo)'
          ),

          commercialNames: {
            br: ['Triatec', 'Naprix', 'Ramipril Genérico'],
            ar: ['Triatec', 'Ramipril Genérico']
          },

          presentation: [
            t(lang, 'Cápsulas/Comprimidos: 1,25 mg, 2,5 mg, 5 mg, 10 mg', 'Cápsulas/Comprimidos: 1,25 mg, 2,5 mg, 5 mg, 10 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 2,5 mg VO 1x/dia inicial. Manutenção: 5–10 mg/dia 1x/dia. Máximo: 10 mg/dia.',
              'HTA: 2,5 mg VO 1 vez/día inicial. Mantenimiento: 5–10 mg/día 1 vez/día. Máximo: 10 mg/día.'
            ),
            adultoGrave: t(lang,
              'IC pós-IAM: 2,5 mg 2x/dia inicial; titular para 5 mg 2x/dia. Alto risco CV (HOPE): 10 mg 1x/dia ou 5 mg 2x/dia.',
              'IC post-IAM: 2,5 mg 2 veces/día inicial; titular hasta 5 mg 2 veces/día. Alto riesgo CV (HOPE): 10 mg 1 vez/día o 5 mg 2 veces/día.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados clínicos limitados.',
              'Uso pediátrico no aprobado formalmente. Datos clínicos limitados.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 2,5–10 mg/dia (dose fixa — sem cálculo por kg aprovado)', 'Adultos: 2,5–10 mg/día (dosis fija — sin cálculo por kg aprobado)'),
            grave:     t(lang, 'IC/Pós-IAM: 2,5–5 mg 2x/dia | Alto risco CV: 10 mg/dia', 'IC/Post-IAM: 2,5–5 mg 2 veces/día | Alto riesgo CV: 10 mg/día'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 10 mg/dia', 'Adultos: 10 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. IC/Pós-IAM: dose-alvo 5 mg 2x/dia. HOPE: 10 mg/dia reduziu eventos CV em 22%. Monitorar por PA, creatinina e K⁺.',
            'HTA: PA objetivo < 130/80 mmHg. IC/Post-IAM: dosis objetivo 5 mg 2 veces/día. HOPE: 10 mg/día redujo eventos CV en 22%. Monitorizar por PA, creatinina y K⁺.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Ramipril é pró-fármaco convertido em ramiprilat (ativo) no fígado e na parede intestinal.',
            'Solo formulación oral. Ramipril es profármaco convertido en ramiprilat (activo) en el hígado y en la pared intestinal.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia (ou 2x/dia em IC), com ou sem alimento.',
            'VO: tomar 1 vez/día (o 2 veces/día en IC), con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tosse seca (efeito de classe IECA)', 'Tos seca (efecto de clase IECA)'),
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (histórico de IECA contraindica uso permanente)', 'Angioedema (historial de IECA contraindica uso permanente)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipercalemia grave', 'Hiperpotasemia grave'),
            t(lang, 'Hipotensão grave — especialmente na 1ª dose em hipovolêmicos', 'Hipotensión grave — especialmente en 1ª dosis en hipovolémicos')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, deformidades e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, malformaciones y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Avaliar alternativas com maior segurança documentada conforme idade do lactente.',
                  'Lactancia: usar con precaución. Evaluar alternativas con mayor seguridad documentada según edad del lactante.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 1,25 mg/dia. Monitorar hipotensão ortostática, função renal e K⁺.',
                  'Adulto mayor: iniciar con 1,25 mg/día. Monitorizar hipotensión ortostática, función renal y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): dose máxima 5 mg/dia. Risco elevado de hipercalemia e piora renal.',
                  'IR Grave (ClCr < 30): dosis máxima 5 mg/día. Riesgo elevado de hiperpotasemia y deterioro renal.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación.'
            ),
            t(lang,
              'Ramipril é pró-fármaco — cautela em insuficiência hepática significativa (ativação hepática prejudicada).',
              'Ramipril es profármaco — precaución en insuficiencia hepática significativa (activación hepática deteriorada).'
            ),
            t(lang,
              'Evidência do estudo HOPE: 10 mg/dia reduziu IAM, AVC e morte CV em 22% em pacientes de alto risco.',
              'Evidencia del estudio HOPE: 10 mg/día redujo IAM, ACV y muerte CV en 22% en pacientes de alto riesgo.'
            ),
            t(lang,
              'Sacubitril/Valsartana: washout de 36h obrigatório antes de iniciar ramipril.',
              'Sacubitril/Valsartán: washout de 36h obligatorio antes de iniciar ramipril.'
            )
          ],

          ref: 'EMA Triatec (ramipril) SmPC 2024 · HOPE Trial (NEJM 2000) · ESC Hypertension Guidelines 2023 · AHA/ACC/HFSA Heart Failure Guidelines 2022 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Ramipril: pró-fármaco. Ramiprilat (ativo) eliminação renal ~60%.
             Ajuste obrigatório em ClCr < 30 mL/min (dose máx. 5 mg/dia).
             Não significativamente removido por hemodiálise.
             Fontes: EMA SmPC Triatec · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): dose máxima de 5 mg/dia.',
                  'IR grave (ClCr < 30 mL/min): dosis máxima de 5 mg/día.'
                )
              : t(lang,
                  'Não requer ajuste renal para ClCr ≥ 30 mL/min.',
                  'No requiere ajuste renal para ClCr ≥ 30 mL/min.'
                ),

            fgMaior50: {
              vo: { dose: '2,5–10 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 2,5–10 mg/dia. IC pós-IAM: 2,5 mg 2x/dia → 5 mg 2x/dia. HOPE: 10 mg/dia.',
                'Dosis estándar. HTA: 2,5–10 mg/día. IC post-IAM: 2,5 mg 2 veces/día → 5 mg 2 veces/día. HOPE: 10 mg/día.'
              )
            },

            fg30a50: {
              vo: { dose: '1,25–5 mg', intervalo: '24/24h', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR leve-moderada: não requer ajuste formal, mas preferir doses menores. Monitorar K⁺ e creatinina.',
                'IR leve-moderada: sin ajuste formal necesario, pero preferir dosis menores. Monitorizar K⁺ y creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '1,25 mg', intervalo: '24/24h', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 1,25 mg/dia. Dose máxima 5 mg/dia. Risco elevado de acúmulo de ramiprilat e hipercalemia.',
                'IR grave: iniciar con 1,25 mg/día. Dosis máxima 5 mg/día. Riesgo elevado de acumulación de ramiprilat e hiperpotasemia.'
              )
            },

            fgMenor10: {
              vo: { dose: '1,25 mg', intervalo: '24/24h', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: dose máxima 2,5 mg/dia. Monitoração intensiva obrigatória. Considerar alternativas se anúria ou K⁺ > 5,5 mEq/L.',
                'IR muy grave: dosis máxima 2,5 mg/día. Monitorización intensiva obligatoria. Considerar alternativas si anuria o K⁺ > 5,5 mEq/L.'
              )
            },

            hemodialise: {
              vo: { dose: '1,25 mg', intervalo: '24/24h', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Ramiprilat não é removido significativamente por hemodiálise. Manter dose reduzida (máx. 2,5 mg/dia). Sem dose suplementar pós-HD necessária.',
                'Ramiprilat no es removido significativamente por hemodiálisis. Mantener dosis reducida (máx. 2,5 mg/día). Sin dosis suplementaria post-HD necesaria.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. Pró-fármaco: cautela em hepatopatia. Ajuste renal em ClCr < 30 (máx. 5 mg/dia). Monitorar K⁺ e creatinina.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. Profármaco: precaución en hepatopatía. Ajuste renal en ClCr < 30 (máx. 5 mg/día). Monitorizar K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'EMA Triatec (ramipril) SmPC 2024',
              'HOPE Trial — Yusuf S et al. (NEJM 2000)',
              'AIRE Trial — Hall AS et al. (Lancet 1993)',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'Pró-fármaco (ramiprilat ativo, conversão hepática). Cautela em hepatopatia grave. Evidência HOPE para prevenção CV em alto risco. Ajuste renal em ClCr < 30 (máx. 5 mg/dia). Não dialisável.',
              'Profármaco (ramiprilat activo, conversión hepática). Precaución en hepatopatía grave. Evidencia HOPE para prevención CV en alto riesgo. Ajuste renal en ClCr < 30 (máx. 5 mg/día). No dializable.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 2 (IECAs) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 3 — BRAs / ARBs (Bloqueadores do Receptor de Angiotensina II)
     losartana · valsartana · candesartana
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       7. LOSARTANA
       BRA — HTA · Nefroproteção DM/proteinúria · IC (alt. IECA) · Prevenção CV
    ══════════════════════════════════════════════════════════════ */
    losartana: {
      name:     { pt: 'Losartana', es: 'Losartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#065F46',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Losartana Potássica', 'Losartán Potásico'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II)'
          ),

          commercialNames: {
            br: ['Cozaar', 'Aradois', 'Losartana genérica'],
            ar: ['Cozaarex', 'Losacor', 'Losartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 25 mg, 50 mg, 100 mg', 'Comprimidos: 25 mg, 50 mg, 100 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 50 mg VO 1x/dia. Pode usar 25 mg/dia inicial em hipovolemia, cirrose ou idosos. Máximo: 100 mg/dia.',
              'HTA: 50 mg VO 1 vez/día. Puede usarse 25 mg/día inicial en hipovolemia, cirrosis o ancianos. Máximo: 100 mg/día.'
            ),
            adultoGrave: t(lang,
              'Nefroproteção em DM2 (RENAAL): 50 mg/dia → 100 mg/dia. IC quando IECA não tolerado: 25–50 mg/dia → 50–100 mg/dia.',
              'Nefroprotección en DM2 (RENAAL): 50 mg/día → 100 mg/día. IC cuando IECA no tolerado: 25–50 mg/día → 50–100 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              'HTA pediátrica ≥ 6 anos: 0,7 mg/kg/dia VO 1x/dia (máx. 50 mg/dia). Aprovado FDA em crianças.',
              'HTA pediátrica ≥ 6 años: 0,7 mg/kg/día VO 1 vez/día (máx. 50 mg/día). Aprobado FDA en niños.'
            ),
            pediatricaGrave: t(lang,
              'Titular até 1,4 mg/kg/dia ou 100 mg/dia (o menor). Monitorar PA, creatinina e K⁺.',
              'Titular hasta 1,4 mg/kg/día o 100 mg/día (el menor). Monitorizar PA, creatinina y K⁺.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '0,7 mg/kg/dia VO 1x/dia (HTA pediátrica ≥ 6 anos, FDA-aprovado)', '0,7 mg/kg/día VO 1 vez/día (HTA pediátrica ≥ 6 años, FDA-aprobado)'),
            grave:     t(lang, 'Até 1,4 mg/kg/dia ou 100 mg/dia (o menor)', 'Hasta 1,4 mg/kg/día o 100 mg/día (el menor)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 100 mg/dia | Pediatria: 100 mg/dia ou 1,4 mg/kg/dia', 'Adultos: 100 mg/día | Pediatría: 100 mg/día o 1,4 mg/kg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Nefroproteção: alvo de redução de proteinúria e estabilização de TFG. Sem nível sérico-alvo — monitorar por resposta clínica, PA, creatinina e K⁺.',
            'HTA: PA objetivo < 130/80 mmHg. Nefroprotección: objetivo de reducción de proteinuria y estabilización de TFG. Sin nivel sérico objetivo — monitorizar por respuesta clínica, PA, creatinina y K⁺.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Sem apresentação EV.',
            'Solo formulación oral disponible. Sin presentación EV.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia (↑ potássio)', 'Hiperpotasemia (↑ potasio)'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro — risco menor que IECAs, mas possível)', 'Angioedema (raro — riesgo menor que IECAs, pero posible)'),
            t(lang, 'Insuficiência Renal Aguda (especialmente em estenose bilateral de artéria renal)', 'Insuficiencia Renal Aguda (especialmente en estenosis bilateral de arteria renal)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Hipotensão grave — especialmente na 1ª dose em hipovolêmicos ou cirrose', 'Hipotensión grave — especialmente en 1ª dosis en hipovolémicos o cirrosis')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, deformidades e morte fetal (especialmente 2º/3º trimestre).',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, malformaciones y muerte fetal (especialmente 2º/3er trimestre).'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Prefira alternativa com maior experiência clínica documentada, especialmente em lactentes prematuros.',
                  'Lactancia: usar con precaución. Prefiera alternativa con mayor experiencia clínica documentada, especialmente en prematuros.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 25 mg/dia. Maior risco de hipotensão ortostática e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 25 mg/día. Mayor riesgo de hipotensión ortostática y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco elevado de hipercalemia e piora da função renal. Reduzir dose e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo elevado de hiperpotasemia y deterioro de función renal. Reducir dosis y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou aumento de dose. Elevação de creatinina ≤ 30% é esperada e aceitável.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o aumento de dosis. Aumento de creatinina ≤ 30% es esperado y aceptable.'
            ),
            t(lang,
              'Diferencial vs. IECA: NÃO causa tosse — alternativa preferencial em pacientes intolerantes a IECA. Angioedema raro, mas possível.',
              'Diferencial vs. IECA: NO causa tos — alternativa preferencial en pacientes intolerantes a IECA. Angioedema raro, pero posible.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA + alisquireno): aumenta risco de hipotensão, hipercalemia e insuficiência renal sem benefício CV adicional.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA + aliskirén): aumenta riesgo de hipotensión, hiperpotasemia e insuficiencia renal sin beneficio CV adicional.'
            ),
            t(lang,
              'AINEs reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda. Orientar paciente a evitar ibuprofeno/diclofenaco.',
              'AINEs reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda. Orientar al paciente a evitar ibuprofeno/diclofenaco.'
            ),
            t(lang,
              'Losartana tem propriedade uricosúrica adicional (leve) — pode ser preferida em hipertensos com gota vs. outras BRAs.',
              'Losartán tiene propiedad uricosúrica adicional (leve) — puede preferirse en hipertensos con gota vs. otros ARA-II.'
            )
          ],

          ref: 'FDA Cozaar (losartan) label 2023 · RENAAL Trial (NEJM 2001) · LIFE Trial (Lancet 2002) · ESC Hypertension Guidelines 2023 · AHA/ACC/HFSA HF Guidelines 2022 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Losartana: metabolismo hepático extenso (CYP2C9/3A4).
             Eliminação renal < 10% inalterada.
             Ajuste renal formal NÃO obrigatório — porém cautela em IR
             grave por risco de hipercalemia e piora da função renal.
             Em diálise: não removida significativamente por HD.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco aumentado de hipercalemia e piora renal. Iniciar com dose baixa.',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo aumentado de hiperpotasemia y deterioro renal. Iniciar con dosis baja.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '25–50 mg', intervalo: '24/24h', doseMaxima: '100 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,7 mg/kg', intervalo: '24/24h', doseMaxima: '50 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. HTA: 50 mg 1x/dia. Nefroproteção DM2: titular até 100 mg/dia. Monitorar PA, creatinina e K⁺.',
                'Dosis estándar. HTA: 50 mg 1 vez/día. Nefroprotección DM2: titular hasta 100 mg/día. Monitorizar PA, creatinina y K⁺.'
              )
            },

            fg30a50: {
              vo: { dose: '25–50 mg', intervalo: '24/24h', doseMaxima: '100 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,5 mg/kg', intervalo: '24/24h', doseMaxima: '50 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir dose inicial de 25–50 mg. Monitorar K⁺ e creatinina com atenção redobrada.',
                'IR moderada: sin ajuste obligatorio. Preferir dosis inicial de 25–50 mg. Monitorizar K⁺ y creatinina con atención reforzada.'
              )
            },

            fg10a30: {
              vo: { dose: '25 mg', intervalo: '24/24h', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 25 mg/dia. Risco elevado de hipercalemia e piora renal. Monitoramento intensivo de K⁺ e creatinina.',
                'IR grave: iniciar con 25 mg/día. Riesgo elevado de hiperpotasemia y deterioro renal. Monitorización intensiva de K⁺ y creatinina.'
              )
            },

            fgMenor10: {
              vo: { dose: '25 mg', intervalo: '24/24h', doseMaxima: '25 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 25 mg/dia. Avaliar risco-benefício. Risco de hipercalemia potencialmente fatal — monitorar K⁺ rigorosamente.',
                'IR muy grave/anuria: dosis máxima 25 mg/día. Evaluar riesgo-beneficio. Riesgo de hiperpotasemia potencialmente fatal — monitorizar K⁺ rigurosamente.'
              )
            },

            hemodialise: {
              vo: { dose: '25 mg', intervalo: '24/24h', doseMaxima: '25 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Losartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD. Monitorar hipotensão intradialítica.',
                'Losartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD. Monitorizar hipotensión intradialítica.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez (como todos os BRAs). Não causa tosse. Monitorar K⁺ e creatinina. Único BRA com propriedade uricosúrica.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo (como todos los ARA-II). No causa tos. Monitorizar K⁺ y creatinina. Único ARA-II con propiedad uricosúrica.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Cozaar (losartan potassium) label 2023',
              'RENAAL Trial — Brenner BM et al. (NEJM 2001)',
              'LIFE Trial — Dahlöf B et al. (Lancet 2002)',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'Primeiro BRA comercializado. Não causa tosse (diferencial vs. IECA). Metabolismo hepático — sem ajuste renal formal obrigatório. Propriedade uricosúrica. Aprovado em pediatria ≥ 6 anos. CONTRAINDICADO na gravidez.',
              'Primer ARA-II comercializado. No causa tos (diferencial vs. IECA). Metabolismo hepático — sin ajuste renal formal obligatorio. Propiedad uricosúrica. Aprobado en pediatría ≥ 6 años. CONTRAINDICADO en embarazo.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       8. VALSARTANA
       BRA — HTA · IC (ICFEr) · Pós-IAM com disfunção VE · Alt. IECA
    ══════════════════════════════════════════════════════════════ */
    valsartana: {
      name:     { pt: 'Valsartana', es: 'Valsartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#064E3B',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Valsartana', 'Valsartán'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II)'
          ),

          commercialNames: {
            br: ['Diovan', 'Valsartana genérica'],
            ar: ['Diovan', 'Valsartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 40 mg, 80 mg, 160 mg, 320 mg', 'Comprimidos: 40 mg, 80 mg, 160 mg, 320 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 80–160 mg VO 1x/dia inicial. Manutenção: 160–320 mg/dia. Máximo: 320 mg/dia.',
              'HTA: 80–160 mg VO 1 vez/día inicial. Mantenimiento: 160–320 mg/día. Máximo: 320 mg/día.'
            ),
            adultoGrave: t(lang,
              'IC (ICFEr — Val-HeFT): 40 mg VO 2x/dia inicial. Titular até 160 mg 2x/dia. Pós-IAM com disfunção VE: 20 mg 2x/dia → 160 mg 2x/dia.',
              'IC (ICFEr — Val-HeFT): 40 mg VO 2 veces/día inicial. Titular hasta 160 mg 2 veces/día. Post-IAM con disfunción VI: 20 mg 2 veces/día → 160 mg 2 veces/día.'
            ),
            pediatricaPadrao: t(lang,
              'HTA pediátrica ≥ 6 anos (FDA-aprovado): 1,3 mg/kg/dia VO 1x/dia (máx. 40 mg/dia inicial).',
              'HTA pediátrica ≥ 6 años (FDA-aprobado): 1,3 mg/kg/día VO 1 vez/día (máx. 40 mg/día inicial).'
            ),
            pediatricaGrave: t(lang,
              'Titular até 2,7 mg/kg/dia ou 160 mg/dia (o menor). Monitorar PA, creatinina e K⁺ rigorosamente.',
              'Titular hasta 2,7 mg/kg/día o 160 mg/día (el menor). Monitorizar PA, creatinina y K⁺ rigurosamente.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '1,3 mg/kg/dia VO 1x/dia (HTA pediátrica ≥ 6 anos, FDA-aprovado)', '1,3 mg/kg/día VO 1 vez/día (HTA pediátrica ≥ 6 años, FDA-aprobado)'),
            grave:     t(lang, 'Até 2,7 mg/kg/dia ou 160 mg/dia (o menor)', 'Hasta 2,7 mg/kg/día o 160 mg/día (el menor)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 320 mg/dia (HTA) / 320 mg/dia em 2 doses (IC) | Pediatria: 160 mg/dia', 'Adultos: 320 mg/día (HTA) / 320 mg/día en 2 dosis (IC) | Pediatría: 160 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. IC: titular para dose máxima tolerada (alvo 160 mg 2x/dia). Não requer nível sérico — monitorar por PA, creatinina e K⁺.',
            'HTA: PA objetivo < 130/80 mmHg. IC: titular a dosis máxima tolerada (objetivo 160 mg 2 veces/día). No requiere nivel sérico — monitorizar por PA, creatinina y K⁺.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Sem apresentação EV. Nota: Sacubitril/Valsartana (Entresto) é formulação combinada distinta.',
            'Solo formulación oral disponible. Sin presentación EV. Nota: Sacubitril/Valsartán (Entresto) es formulación combinada distinta.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia (HTA) ou 2x/dia (IC/Pós-IAM), com ou sem alimento.',
            'VO: tomar 1 vez/día (HTA) o 2 veces/día (IC/Post-IAM), con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave — especialmente pós-IAM ou IC descompensada', 'Hipotensión grave — especialmente post-IAM o IC descompensada')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio e morte fetal. Contraindicado em qualquer trimestre.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios y muerte fetal. Contraindicado en cualquier trimestre.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Considerar alternativa com maior experiência clínica documentada na lactação.',
                  'Lactancia: usar con precaución. Considerar alternativa con mayor experiencia clínica documentada en lactancia.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 40–80 mg/dia. Maior risco de hipotensão e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 40–80 mg/día. Mayor riesgo de hipotensión y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco aumentado de hipercalemia e piora renal. Preferir dose baixa e monitoramento intensivo.',
                  'IR Grave (ClCr < 30): riesgo aumentado de hiperpotasemia y deterioro renal. Preferir dosis baja y monitorización intensiva.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Elevação ≤ 30% de creatinina é esperada.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es esperado.'
            ),
            t(lang,
              'Atenção ao Sacubitril/Valsartana (Entresto): se substituindo IECA, aguardar washout de 36h. A Valsartana simples NÃO substitui Entresto diretamente.',
              'Atención al Sacubitril/Valsartán (Entresto): si sustituyendo IECA, esperar washout de 36h. La Valsartán simple NO sustituye Entresto directamente.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA): hipotensão, hipercalemia e insuficiência renal sem benefício adicional.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA): hipotensión, hiperpotasemia e insuficiencia renal sin beneficio adicional.'
            ),
            t(lang,
              'AINEs: reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda.',
              'AINEs: reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda.'
            )
          ],

          ref: 'FDA Diovan (valsartan) label 2023 · Val-HeFT Trial (NEJM 2001) · VALIANT Trial (NEJM 2003) · ESC HF Guidelines 2021 · AHA/ACC/HFSA HF Guidelines 2022 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Valsartana: metabolismo hepático (~70% eliminação biliar/fecal).
             Eliminação renal < 13% inalterada.
             Ajuste renal formal NÃO obrigatório — cautela em IR grave
             pelo risco de hipercalemia e deterioração hemodinâmica.
             Não removida significativamente por hemodiálise.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco aumentado de hipercalemia e piora renal. Iniciar com dose baixa.',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo aumentado de hiperpotasemia y deterioro renal. Iniciar con dosis baja.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '80–160 mg', intervalo: '24/24h (HTA) ou 12/12h (IC)', doseMaxima: '320 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '1,3 mg/kg', intervalo: '24/24h', doseMaxima: '160 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. HTA: 80–320 mg/dia 1x/dia. IC: iniciar 40 mg 2x/dia → titular até 160 mg 2x/dia.',
                'Dosis estándar. HTA: 80–320 mg/día 1 vez/día. IC: iniciar 40 mg 2 veces/día → titular hasta 160 mg 2 veces/día.'
              )
            },

            fg30a50: {
              vo: { dose: '40–80 mg', intervalo: '24/24h (HTA) ou 12/12h (IC)', doseMaxima: '160 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,7 mg/kg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir dose inicial menor. Monitorar K⁺ e creatinina rigorosamente.',
                'IR moderada: sin ajuste obligatorio. Preferir dosis inicial menor. Monitorizar K⁺ y creatinina rigurosamente.'
              )
            },

            fg10a30: {
              vo: { dose: '40 mg', intervalo: '24/24h ou 12/12h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 40 mg/dia. Risco elevado de hipercalemia e piora renal. Monitoramento intensivo.',
                'IR grave: iniciar con 40 mg/día. Riesgo elevado de hiperpotasemia y deterioro renal. Monitorización intensiva.'
              )
            },

            fgMenor10: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 40 mg/dia. Avaliação cuidadosa de risco-benefício. Hipercalemia potencialmente fatal — monitorar rigorosamente.',
                'IR muy grave/anuria: dosis máxima 40 mg/día. Evaluación cuidadosa de riesgo-beneficio. Hiperpotasemia potencialmente fatal — monitorizar rigurosamente.'
              )
            },

            hemodialise: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Valsartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD.',
                'Valsartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. Monitorar K⁺, creatinina e PA após início/titulação. Cautela na substituição por Sacubitril/Valsartana.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. Monitorizar K⁺, creatinina y PA tras inicio/titulación. Precaución al sustituir por Sacubitril/Valsartán.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Diovan (valsartan) label 2023',
              'Val-HeFT Trial — Cohn JN et al. (NEJM 2001)',
              'VALIANT Trial — Pfeffer MA et al. (NEJM 2003)',
              'ESC Heart Failure Guidelines 2021',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'ESC Hypertension Guidelines 2023',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'BRA com maior dose disponível (320 mg). Evidência robusta em IC (Val-HeFT) e pós-IAM (VALIANT). Metabolismo hepático — sem ajuste renal formal. Não dialisável. Precursor do Entresto (Sacubitril/Valsartana).',
              'ARA-II con mayor dosis disponible (320 mg). Evidencia robusta en IC (Val-HeFT) y post-IAM (VALIANT). Metabolismo hepático — sin ajuste renal formal. No dializable. Precursor del Entresto (Sacubitril/Valsartán).'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       9. CANDESARTANA
       BRA — HTA · IC (ICFEr, CHARM) · Alt. IECA · Nefroproteção selecionada
    ══════════════════════════════════════════════════════════════ */
    candesartana: {
      name:     { pt: 'Candesartana', es: 'Candesartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#047857',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Candesartana Cilexetila', 'Candesartán Cilexetilo'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB) — Pró-fármaco',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II) — Profármaco'
          ),

          commercialNames: {
            br: ['Atacand', 'Candesartana genérica'],
            ar: ['Atacand', 'Candesartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 4 mg, 8 mg, 16 mg, 32 mg', 'Comprimidos: 4 mg, 8 mg, 16 mg, 32 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 8–16 mg VO 1x/dia inicial. Manutenção: 16–32 mg/dia. Máximo: 32 mg/dia.',
              'HTA: 8–16 mg VO 1 vez/día inicial. Mantenimiento: 16–32 mg/día. Máximo: 32 mg/día.'
            ),
            adultoGrave: t(lang,
              'IC (ICFEr — CHARM): iniciar 4–8 mg VO 1x/dia. Dobrar a dose a cada 2 semanas se tolerado, até alvo de 32 mg/dia.',
              'IC (ICFEr — CHARM): iniciar 4–8 mg VO 1 vez/día. Doblar dosis cada 2 semanas si tolerado, hasta objetivo de 32 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              'HTA pediátrica ≥ 6 anos: 0,2 mg/kg/dia VO 1x/dia (máx. 8 mg/dia). Titular com cautela.',
              'HTA pediátrica ≥ 6 años: 0,2 mg/kg/día VO 1 vez/día (máx. 8 mg/día). Titular con precaución.'
            ),
            pediatricaGrave: t(lang,
              'Titular até 0,4 mg/kg/dia ou 32 mg/dia (o menor). Monitorar PA, creatinina e K⁺.',
              'Titular hasta 0,4 mg/kg/día o 32 mg/día (el menor). Monitorizar PA, creatinina y K⁺.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '0,2 mg/kg/dia VO 1x/dia (HTA pediátrica ≥ 6 anos)', '0,2 mg/kg/día VO 1 vez/día (HTA pediátrica ≥ 6 años)'),
            grave:     t(lang, 'IC: titular de 4–8 mg até 32 mg/dia (dose fixa — sem cálculo por kg)', 'IC: titular de 4–8 mg hasta 32 mg/día (dosis fija — sin cálculo por kg)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 32 mg/dia | Pediatria: 32 mg/dia ou 0,4 mg/kg/dia', 'Adultos: 32 mg/día | Pediatría: 32 mg/día o 0,4 mg/kg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. IC: dose-alvo 32 mg/dia 1x/dia (CHARM). Monitorar por PA, creatinina e K⁺ — sem nível sérico-alvo.',
            'HTA: PA objetivo < 130/80 mmHg. IC: dosis objetivo 32 mg/día 1 vez/día (CHARM). Monitorizar por PA, creatinina y K⁺ — sin nivel sérico objetivo.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Candesartana cilexetila é pró-fármaco convertido em candesartana (ativa) no trato GI/fígado.',
            'Solo formulación oral. Candesartán cilexetilo es profármaco convertido en candesartán (activo) en tracto GI/hígado.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Cefaleia', 'Cefalea'),
            t(lang, 'Infecção respiratória superior (leve)', 'Infección respiratoria superior (leve)')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda (especialmente em estenose bilateral de artéria renal)', 'Insuficiencia Renal Aguda (especialmente en estenosis bilateral de arteria renal)'),
            t(lang, 'Hipotensão grave — especialmente pós-IAM ou IC descompensada', 'Hipotensión grave — especialmente post-IAM o IC descompensada')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, deformidades e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, malformaciones y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Considerar alternativa com maior segurança documentada, especialmente em lactentes prematuros ou de baixo peso.',
                  'Lactancia: usar con precaución. Considerar alternativa con mayor seguridad documentada, especialmente en prematuros o bajo peso.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 4 mg/dia. Maior sensibilidade à hipotensão e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 4 mg/día. Mayor sensibilidad a hipotensión y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco aumentado de hipercalemia e piora renal. Iniciar com 4 mg/dia e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo aumentado de hiperpotasemia y deterioro renal. Iniciar con 4 mg/día y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Elevação ≤ 30% de creatinina é esperada e aceitável.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es esperado y aceptable.'
            ),
            t(lang,
              'Candesartana: pró-fármaco (candesartana cilexetila). Cautela em insuficiência hepática grave — metabolismo hepático pode ser prejudicado.',
              'Candesartán: profármaco (candesartán cilexetilo). Precaución en insuficiencia hepática grave — metabolismo hepático puede estar deteriorado.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA): sem benefício adicional e risco aumentado de hipotensão, hipercalemia e lesão renal.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA): sin beneficio adicional y riesgo aumentado de hipotensión, hiperpotasemia y lesión renal.'
            ),
            t(lang,
              'AINEs: reduzem efeito anti-hipertensivo e potencializam risco de lesão renal aguda.',
              'AINEs: reducen efecto antihipertensivo y potencian riesgo de lesión renal aguda.'
            )
          ],

          ref: 'EMA Atacand (candesartan) SmPC 2024 · CHARM Programme (Lancet 2003) · ESC HF Guidelines 2021 · AHA/ACC/HFSA HF Guidelines 2022 · ESC Hypertension Guidelines 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Candesartana: pró-fármaco. Metabolismo hepático/GI.
             Eliminação renal ~26% (inalterada + metabólitos).
             Ajuste renal formal NÃO obrigatório para IR leve/moderada.
             Em IR grave (ClCr < 30): iniciar com dose mínima (4 mg).
             Não removida significativamente por hemodiálise.
             Fontes: EMA SmPC · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): iniciar com dose mínima de 4 mg/dia. Risco de hipercalemia e piora renal.',
                  'IR grave (ClCr < 30 mL/min): iniciar con dosis mínima de 4 mg/día. Riesgo de hiperpotasemia y deterioro renal.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '8–16 mg', intervalo: '24/24h', doseMaxima: '32 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,2 mg/kg', intervalo: '24/24h', doseMaxima: '32 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'Dose padrão. HTA: 8–32 mg 1x/dia. IC: iniciar 4–8 mg e titular a cada 2 semanas até 32 mg/dia.',
                'Dosis estándar. HTA: 8–32 mg 1 vez/día. IC: iniciar 4–8 mg y titular cada 2 semanas hasta 32 mg/día.'
              )
            },

            fg30a50: {
              vo: { dose: '4–8 mg', intervalo: '24/24h', doseMaxima: '32 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '0,1 mg/kg', intervalo: '24/24h', doseMaxima: '16 mg/dia', unidade: 'mg/kg' },
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir dose inicial de 4–8 mg. Monitorar K⁺ e creatinina.',
                'IR moderada: sin ajuste obligatorio. Preferir dosis inicial de 4–8 mg. Monitorizar K⁺ y creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '4 mg', intervalo: '24/24h', doseMaxima: '16 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 4 mg/dia e titular com cautela extrema. Risco aumentado de hipercalemia e deterioração renal.',
                'IR grave: iniciar con 4 mg/día y titular con precaución extrema. Riesgo aumentado de hiperpotasemia y deterioro renal.'
              )
            },

            fgMenor10: {
              vo: { dose: '4 mg', intervalo: '24/24h', doseMaxima: '8 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 8 mg/dia. Avaliação cuidadosa de risco-benefício. Monitorar K⁺ rigorosamente.',
                'IR muy grave/anuria: dosis máxima 8 mg/día. Evaluación cuidadosa de riesgo-beneficio. Monitorizar K⁺ rigurosamente.'
              )
            },

            hemodialise: {
              vo: { dose: '4 mg', intervalo: '24/24h', doseMaxima: '8 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Candesartana não é removida significativamente por hemodiálise. Manter dose reduzida. Sem suplementação pós-HD necessária.',
                'Candesartán no es removido significativamente por hemodiálisis. Mantener dosis reducida. Sin suplementación post-HD necesaria.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. Pró-fármaco: cautela em hepatopatia grave. Maior evidência em IC da classe (CHARM Programme). Monitorar K⁺ e creatinina.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. Profármaco: precaución en hepatopatía grave. Mayor evidencia en IC de la clase (Programa CHARM). Monitorizar K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'EMA Atacand (candesartan cilexetil) SmPC 2024',
              'CHARM Programme — Granger CB et al. (Lancet 2003)',
              'ESC Heart Failure Guidelines 2021',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'ESC Hypertension Guidelines 2023',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'BRA com maior evidência em IC (CHARM). Pró-fármaco (conversão GI/hepática). Cautela em hepatopatia grave. Sem ajuste renal formal em IR leve/moderada. Iniciar com 4 mg em IR grave e idosos. Não dialisável.',
              'ARA-II con mayor evidencia en IC (CHARM). Profármaco (conversión GI/hepática). Precaución en hepatopatía grave. Sin ajuste renal formal en IR leve/moderada. Iniciar con 4 mg en IR grave y ancianos. No dializable.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 3 (BRAs — losartana · valsartana · candesartana) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 3B — BRAs Adicionais
     irbesartana · telmisartana · olmesartana
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       10. IRBESARTANA
       BRA — HTA · Nefroproteção DM2 + proteinúria (IDNT/IRMA-2) · Alt. IECA
    ══════════════════════════════════════════════════════════════ */
    irbesartana: {
      name:     { pt: 'Irbesartana', es: 'Irbesartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#14532D',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Irbesartana', 'Irbesartán'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II)'
          ),

          commercialNames: {
            br: ['Aprovel', 'Avapro', 'Irbesartana genérica'],
            ar: ['Aprovel', 'Irbesartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 75 mg, 150 mg, 300 mg', 'Comprimidos: 75 mg, 150 mg, 300 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 150 mg VO 1x/dia inicial. Manutenção: 150–300 mg/dia. Máximo: 300 mg/dia. Considerar 75 mg/dia em idosos frágeis, hipovolemia ou uso intenso de diuréticos.',
              'HTA: 150 mg VO 1 vez/día inicial. Mantenimiento: 150–300 mg/día. Máximo: 300 mg/día. Considerar 75 mg/día en ancianos frágiles, hipovolemia o uso intenso de diuréticos.'
            ),
            adultoGrave: t(lang,
              'Nefroproteção em DM2 + proteinúria (IDNT): 150 mg/dia → 300 mg/dia. Microalbuminúria em DM2 (IRMA-2): 150–300 mg/dia.',
              'Nefroprotección en DM2 + proteinuria (IDNT): 150 mg/día → 300 mg/día. Microalbuminuria en DM2 (IRMA-2): 150–300 mg/día.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados clínicos muito limitados.',
              'Uso pediátrico no aprobado formalmente. Datos clínicos muy limitados.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 150–300 mg/dia (dose fixa — sem cálculo por kg aprovado)', 'Adultos: 150–300 mg/día (dosis fija — sin cálculo por kg aprobado)'),
            grave:     t(lang, 'Nefroproteção DM2: alvo 300 mg/dia se tolerado', 'Nefroprotección DM2: objetivo 300 mg/día si tolerado'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 300 mg/dia', 'Adultos: 300 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Nefroproteção: alvo de redução de albuminúria/proteinúria e estabilização de TFG. Monitorar K⁺ e creatinina — sem nível sérico-alvo.',
            'HTA: PA objetivo < 130/80 mmHg. Nefroprotección: objetivo de reducción de albuminuria/proteinuria y estabilización de TFG. Monitorizar K⁺ y creatinina — sin nivel sérico objetivo.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Sem apresentação EV.',
            'Solo formulación oral disponible. Sin presentación EV.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia (↑ potássio)', 'Hiperpotasemia (↑ potasio)'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda (especialmente em estenose bilateral de artéria renal)', 'Insuficiencia Renal Aguda (especialmente en estenosis bilateral de arteria renal)'),
            t(lang, 'Hipotensão grave — especialmente na 1ª dose em hipovolêmicos', 'Hipotensión grave — especialmente en 1ª dosis en hipovolémicos')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, hipoplasia pulmonar e morte fetal. Contraindicado em qualquer trimestre.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, hipoplasia pulmonar y muerte fetal. Contraindicado en cualquier trimestre.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Preferir alternativa com maior experiência clínica documentada, especialmente em prematuros.',
                  'Lactancia: usar con precaución. Preferir alternativa con mayor experiencia clínica documentada, especialmente en prematuros.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: considerar dose inicial de 75 mg/dia. Maior risco de hipotensão ortostática e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: considerar dosis inicial de 75 mg/día. Mayor riesgo de hipotensión ortostática y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco elevado de hipercalemia e piora renal. Iniciar com 75–150 mg/dia e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo elevado de hiperpotasemia y deterioro renal. Iniciar con 75–150 mg/día y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Aumento ≤ 30% de creatinina é esperado e aceitável.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es esperado y aceptable.'
            ),
            t(lang,
              'Diferencial de classe: irbesartana tem evidência nefroprotetora robusta em DM2 com proteinúria (IDNT — redução de 33% na progressão para DRET; IRMA-2 — redução de microalbuminúria).',
              'Diferencial de clase: irbesartán tiene evidencia nefroprotectora robusta en DM2 con proteinuria (IDNT — reducción del 33% en progresión a ERCT; IRMA-2 — reducción de microalbuminuria).'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA + alisquireno): sem benefício adicional e risco aumentado de hipotensão, hipercalemia e lesão renal.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA + aliskirén): sin beneficio adicional y riesgo aumentado de hipotensión, hiperpotasemia y lesión renal.'
            ),
            t(lang,
              'AINEs: reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda — orientar paciente.',
              'AINEs: reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda — orientar al paciente.'
            )
          ],

          ref: 'FDA Avapro (irbesartan) label 2023 · IDNT Trial — Lewis EJ et al. (NEJM 2001) · IRMA-2 Trial — Parving HH et al. (NEJM 2001) · ESC Hypertension Guidelines 2023 · KDIGO CKD 2022 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Irbesartana: metabolismo hepático (CYP2C9).
             Eliminação mista: biliar/fecal (~80%) + renal (~20%).
             Ajuste renal formal NÃO obrigatório — sem acúmulo significativo
             em IR. Cautela em IR grave pelo risco de hipercalemia.
             Não removida significativamente por hemodiálise.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco de hipercalemia e piora renal. Iniciar com dose menor e monitorar.',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo de hiperpotasemia y deterioro renal. Iniciar con dosis menor y monitorizar.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '150 mg', intervalo: '24/24h', doseMaxima: '300 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 150–300 mg/dia. Nefroproteção DM2: titular até 300 mg/dia se tolerado.',
                'Dosis estándar. HTA: 150–300 mg/día. Nefroprotección DM2: titular hasta 300 mg/día si tolerado.'
              )
            },

            fg30a50: {
              vo: { dose: '75–150 mg', intervalo: '24/24h', doseMaxima: '300 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir dose inicial de 75–150 mg. Monitorar K⁺ e creatinina com atenção.',
                'IR moderada: sin ajuste obligatorio. Preferir dosis inicial de 75–150 mg. Monitorizar K⁺ y creatinina con atención.'
              )
            },

            fg10a30: {
              vo: { dose: '75 mg', intervalo: '24/24h', doseMaxima: '150 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 75 mg/dia. Risco elevado de hipercalemia. Monitoramento intensivo de K⁺ e creatinina.',
                'IR grave: iniciar con 75 mg/día. Riesgo elevado de hiperpotasemia. Monitorización intensiva de K⁺ y creatinina.'
              )
            },

            fgMenor10: {
              vo: { dose: '75 mg', intervalo: '24/24h', doseMaxima: '75 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 75 mg/dia. Avaliar risco-benefício cuidadosamente. K⁺ > 5,5 pode contraindicar uso.',
                'IR muy grave/anuria: dosis máxima 75 mg/día. Evaluar riesgo-beneficio cuidadosamente. K⁺ > 5,5 puede contraindicar uso.'
              )
            },

            hemodialise: {
              vo: { dose: '75 mg', intervalo: '24/24h', doseMaxima: '75 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Irbesartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD.',
                'Irbesartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. BRA com maior evidência nefroprotetora em DM2 + proteinúria (IDNT/IRMA-2). Monitorar K⁺ e creatinina.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. ARA-II con mayor evidencia nefroprotectora en DM2 + proteinuria (IDNT/IRMA-2). Monitorizar K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Avapro (irbesartan) label 2023',
              'EMA Aprovel SmPC 2024',
              'IDNT Trial — Lewis EJ et al. (NEJM 2001)',
              'IRMA-2 Trial — Parving HH et al. (NEJM 2001)',
              'ESC Hypertension Guidelines 2023',
              'KDIGO CKD Guidelines 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'BRA com evidência de nefroproteção específica em DM2 com proteinúria (IDNT/IRMA-2). Metabolismo hepático — sem ajuste renal formal. Não aprovado formalmente em pediatria. Não dialisável.',
              'ARA-II con evidencia de nefroprotección específica en DM2 con proteinuria (IDNT/IRMA-2). Metabolismo hepático — sin ajuste renal formal. No aprobado formalmente en pediatría. No dializable.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       11. TELMISARTANA
       BRA — HTA · Alto risco CV (ONTARGET) · Alt. IECA
       Diferenciais: maior meia-vida (~24h); eliminação biliar (~98%)
       → SEM ajuste renal; contraindicada em colestase/obstrução biliar
    ══════════════════════════════════════════════════════════════ */
    telmisartana: {
      name:     { pt: 'Telmisartana', es: 'Telmisartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#166534',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Telmisartana', 'Telmisartán'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB) — Maior meia-vida da classe (~24h)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II) — Mayor vida media de la clase (~24h)'
          ),

          commercialNames: {
            br: ['Micardis', 'Telmisartana genérica'],
            ar: ['Micardis', 'Telmisartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 20 mg, 40 mg, 80 mg', 'Comprimidos: 20 mg, 40 mg, 80 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 40 mg VO 1x/dia inicial. Manutenção: 40–80 mg/dia. Máximo: 80 mg/dia. Considerar 20 mg/dia em idosos frágeis ou risco de hipotensão.',
              'HTA: 40 mg VO 1 vez/día inicial. Mantenimiento: 40–80 mg/día. Máximo: 80 mg/día. Considerar 20 mg/día en ancianos frágiles o riesgo de hipotensión.'
            ),
            adultoGrave: t(lang,
              'Redução de risco CV em pacientes de alto risco sem IC (ONTARGET/TRANSCEND): 80 mg 1x/dia. Alternativa ao ramipril com melhor tolerância (sem tosse).',
              'Reducción de riesgo CV en pacientes de alto riesgo sin IC (ONTARGET/TRANSCEND): 80 mg 1 vez/día. Alternativa al ramipril con mejor tolerancia (sin tos).'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados clínicos muito limitados.',
              'Uso pediátrico no aprobado formalmente. Datos clínicos muy limitados.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 40–80 mg/dia (dose fixa — sem cálculo por kg aprovado)', 'Adultos: 40–80 mg/día (dosis fija — sin cálculo por kg aprobado)'),
            grave:     t(lang, 'Alto risco CV: 80 mg/dia (ONTARGET)', 'Alto riesgo CV: 80 mg/día (ONTARGET)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 80 mg/dia', 'Adultos: 80 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Meia-vida longa (~24h) garante cobertura pressórica de 24 horas com dose única. Monitorar K⁺ e creatinina — sem nível sérico-alvo.',
            'HTA: PA objetivo < 130/80 mmHg. Vida media larga (~24h) asegura cobertura tensional de 24 horas con dosis única. Monitorizar K⁺ y creatinina — sin nivel sérico objetivo.'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Sem apresentação EV.',
            'Solo formulación oral disponible. Sin presentación EV.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento. Meia-vida longa (~24h) — dose única suficiente.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento. Vida media larga (~24h) — dosis única suficiente.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Diarréia (leve)', 'Diarrea (leve)')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave — especialmente na 1ª dose', 'Hipotensión grave — especialmente en 1ª dosis')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, hipoplasia pulmonar e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, hipoplasia pulmonar y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Considerar alternativa com maior experiência clínica documentada durante lactação.',
                  'Lactancia: usar con precaución. Considerar alternativa con mayor experiencia clínica documentada durante lactancia.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 20–40 mg/dia. Maior risco de hipotensão ortostática pela meia-vida prolongada. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 20–40 mg/día. Mayor riesgo de hipotensión ortostática por la vida media prolongada. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): eliminação é predominantemente biliar (~98%) — sem acúmulo renal significativo. Porém cautela por hipercalemia.',
                  'IR Grave (ClCr < 30): eliminación predominantemente biliar (~98%) — sin acumulación renal significativa. Pero precaución por hiperpotasemia.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'DIFERENCIAL ÚNICO: Telmisartana é eliminada quase exclusivamente por via biliar/fecal (~98%) — é o único BRA que NÃO requer ajuste de dose por função renal, inclusive em ClCr < 30 mL/min e hemodiálise.',
              'DIFERENCIAL ÚNICO: Telmisartán es eliminado casi exclusivamente por vía biliar/fecal (~98%) — es el único ARA-II que NO requiere ajuste de dosis por función renal, incluso en ClCr < 30 mL/min y hemodiálisis.'
            ),
            t(lang,
              'CONTRAINDICADA em colestase e obstrução biliar importante — eliminação biliar exclusiva torna estas condições contraindicações específicas desta classe.',
              'CONTRAINDICADA en colestasis y obstrucción biliar importante — eliminación biliar exclusiva hace de estas condiciones contraindicaciones específicas de esta clase.'
            ),
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação — mesmo sem ajuste renal obrigatório.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación — aunque no se requiera ajuste renal.'
            ),
            t(lang,
              'ONTARGET: não inferior ao ramipril na redução de eventos CV em pacientes de alto risco, com melhor tolerabilidade (sem tosse).',
              'ONTARGET: no inferior a ramipril en reducción de eventos CV en pacientes de alto riesgo, con mejor tolerabilidad (sin tos).'
            )
          ],

          ref: 'FDA Micardis (telmisartan) label 2023 · ONTARGET Trial (NEJM 2008) · TRANSCEND Trial (Lancet 2008) · ESC Hypertension Guidelines 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Telmisartana: metabolismo hepático extenso.
             Eliminação BILIAR/FECAL ~98% — mínima eliminação renal.
             ÚNICO BRA sem necessidade de ajuste por função renal,
             mesmo em ClCr < 10 mL/min e hemodiálise.
             ATENÇÃO: contraindicada em colestase/obstrução biliar.
             Fontes: FDA label · EMA SmPC · Lexicomp 2026
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Eliminação biliar ~98% — NÃO requer ajuste renal em nenhum grau de IR (único BRA nesta categoria). Monitorar K⁺ e creatinina.',
              'Eliminación biliar ~98% — NO requiere ajuste renal en ningún grado de IR (único ARA-II en esta categoría). Monitorizar K⁺ y creatinina.'
            ),

            fgMaior50: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 40–80 mg 1x/dia. Alto risco CV: 80 mg/dia (ONTARGET).',
                'Dosis estándar. HTA: 40–80 mg 1 vez/día. Alto riesgo CV: 80 mg/día (ONTARGET).'
              )
            },

            fg30a50: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Sem ajuste necessário. Dose padrão mantida. Monitorar K⁺ e PA.',
                'Sin ajuste necesario. Dosis estándar mantenida. Monitorizar K⁺ y PA.'
              )
            },

            fg10a30: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: dose padrão mantida (eliminação biliar). Monitorar K⁺ e creatinina com atenção.',
                'IR grave: dosis estándar mantenida (eliminación biliar). Monitorizar K⁺ y creatinina con atención.'
              )
            },

            fgMenor10: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: manter dose sem ajuste. Única BRA nesta situação. Monitorar K⁺ rigorosamente.',
                'IR muy grave: mantener dosis sin ajuste. Único ARA-II en esta situación. Monitorizar K⁺ rigurosamente.'
              )
            },

            hemodialise: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Telmisartana não é removida por hemodiálise. Sem necessidade de dose suplementar pós-HD. Dose mantida normalmente.',
                'Telmisartán no es removido por hemodiálisis. Sin necesidad de dosis suplementaria post-HD. Dosis mantenida normalmente.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           false,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez e em colestase/obstrução biliar. Único BRA sem ajuste renal — eliminação biliar ~98%. Monitorar K⁺ e PA.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo y en colestasis/obstrucción biliar. Único ARA-II sin ajuste renal — eliminación biliar ~98%. Monitorizar K⁺ y PA.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Micardis (telmisartan) label 2023',
              'EMA Micardis SmPC 2024',
              'ONTARGET Trial — Yusuf S et al. (NEJM 2008)',
              'TRANSCEND Trial (Lancet 2008)',
              'ESC Hypertension Guidelines 2023',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'Único BRA sem necessidade de ajuste renal (eliminação biliar ~98%). Meia-vida mais longa da classe (~24h). Contraindicada em colestase. Evidência ONTARGET — não inferior ao ramipril em alto risco CV.',
              'Único ARA-II sin necesidad de ajuste renal (eliminación biliar ~98%). Vida media más larga de la clase (~24h). Contraindicada en colestasis. Evidencia ONTARGET — no inferior a ramipril en alto riesgo CV.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       12. OLMESARTANA
       BRA pró-fármaco — HTA · Terapia combinada
       Diferencial: enteropatia sprue-like rara (FDA Safety Communication 2013)
    ══════════════════════════════════════════════════════════════ */
    olmesartana: {
      name:     { pt: 'Olmesartana', es: 'Olmesartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#15803D',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Olmesartana Medoxomila', 'Olmesartán Medoxomilo'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB) — Pró-fármaco (olmesartana ativa)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II) — Profármaco (olmesartán activo)'
          ),

          commercialNames: {
            br: ['Benicar', 'Olmetec', 'Olmesartana genérica'],
            ar: ['Olmetec', 'Olmesartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 10 mg, 20 mg, 40 mg', 'Comprimidos: 10 mg, 20 mg, 40 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 20 mg VO 1x/dia inicial. Manutenção: 20–40 mg/dia. Máximo: 40 mg/dia. Considerar 10 mg/dia em idosos frágeis, hipovolemia ou risco de hipotensão.',
              'HTA: 20 mg VO 1 vez/día inicial. Mantenimiento: 20–40 mg/día. Máximo: 40 mg/día. Considerar 10 mg/día en ancianos frágiles, hipovolemia o riesgo de hipotensión.'
            ),
            adultoGrave: t(lang,
              'Controle pressórico em terapia combinada (BRA + BCC ± tiazídico): 20–40 mg/dia. Ajustar conforme PA-alvo e tolerância.',
              'Control tensional en terapia combinada (ARA-II + BCC ± tiazídico): 20–40 mg/día. Ajustar según PA objetivo y tolerancia.'
            ),
            pediatricaPadrao: t(lang,
              'HTA pediátrica ≥ 6 anos (FDA-aprovado): 2,5–5 mg/dia VO (peso 20–<35 kg) ou 5–10 mg/dia (peso ≥35 kg). Máx 20 mg/dia.',
              'HTA pediátrica ≥ 6 años (FDA-aprobado): 2,5–5 mg/día VO (peso 20–<35 kg) o 5–10 mg/día (peso ≥35 kg). Máx 20 mg/día.'
            ),
            pediatricaGrave: t(lang,
              'Titular conforme resposta pressórica e tolerância. Monitorar PA, creatinina e K⁺ rigorosamente.',
              'Titular según respuesta tensional y tolerancia. Monitorizar PA, creatinina y K⁺ rigurosamente.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Pediatria ≥ 6 anos: 2,5–10 mg/dia por faixa de peso (FDA-aprovado)', 'Pediatría ≥ 6 años: 2,5–10 mg/día por rango de peso (FDA-aprobado)'),
            grave:     t(lang, 'Adultos: 20–40 mg/dia (dose fixa — sem cálculo por kg)', 'Adultos: 20–40 mg/día (dosis fija — sin cálculo por kg)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 40 mg/dia | Pediatria: 20 mg/dia', 'Adultos: 40 mg/día | Pediatría: 20 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Monitorar por PA, creatinina e K⁺ — sem nível sérico-alvo.',
            'HTA: PA objetivo < 130/80 mmHg. Monitorizar por PA, creatinina y K⁺ — sin nivel sérico objetivo.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Olmesartana medoxomila é pró-fármaco convertido em olmesartana (ativa) no trato GI.',
            'Solo formulación oral. Olmesartán medoxomilo es profármaco convertido en olmesartán (activo) en el tracto GI.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Cefaleia', 'Cefalea'),
            t(lang, 'Sintomas gastrointestinais (náusea, diarreia leve)', 'Síntomas gastrointestinales (náuseas, diarrea leve)')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave', 'Hipotensión grave'),
            t(lang, 'ENTEROPATIA SPRUE-LIKE: diarreia crônica grave, perda de peso, má absorção — pode surgir anos após início (FDA Safety Communication 2013)', 'ENTEROPATÍA TIPO SPRUE: diarrea crónica grave, pérdida de peso, malabsorción — puede aparecer años después del inicio (FDA Safety Communication 2013)')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, alterações ósseas cranianas e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, alteraciones óseas craneales y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Preferir alternativa com maior experiência, especialmente em prematuros ou recém-nascidos.',
                  'Lactancia: usar con precaución. Preferir alternativa con mayor experiencia, especialmente en prematuros o recién nacidos.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 10 mg/dia. Maior risco de hipotensão e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 10 mg/día. Mayor riesgo de hipotensión y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco elevado de hipercalemia e piora renal. Preferir dose inicial mínima (10 mg) e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo elevado de hiperpotasemia y deterioro renal. Preferir dosis inicial mínima (10 mg) y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'ALERTA EXCLUSIVO — Enteropatia sprue-like: olmesartana é o único BRA associado a síndrome de má absorção grave (diarreia severa, perda de peso, atrofia de vilosidades em biópsia). Pode surgir meses a anos após início. Suspender se diarreia crônica inexplicada ou perda de peso significativa.',
              'ALERTA EXCLUSIVO — Enteropatía tipo sprue: olmesartán es el único ARA-II asociado a síndrome de malabsorción grave (diarrea severa, pérdida de peso, atrofia de vellosidades en biopsia). Puede aparecer meses a años tras el inicio. Suspender si diarrea crónica inexplicada o pérdida de peso significativa.'
            ),
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Elevação ≤ 30% de creatinina é aceitável.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es aceptable.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA): sem benefício adicional e risco aumentado de hipotensão, hipercalemia e lesão renal.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA): sin beneficio adicional y riesgo aumentado de hipotensión, hiperpotasemia y lesión renal.'
            ),
            t(lang,
              'AINEs reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda.',
              'AINEs reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda.'
            )
          ],

          ref: 'FDA Benicar (olmesartan) label 2023 · FDA Safety Communication — olmesartan and sprue-like enteropathy (July 2013) · EMA Olmetec SmPC 2024 · ESC Hypertension Guidelines 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Olmesartana: pró-fármaco (medoxomila). Conversão no TGI.
             Eliminação mista: biliar/fecal (~60%) + renal (~35–40%).
             Ajuste renal formal NÃO obrigatório — cautela em IR grave
             pelo risco de hipercalemia e deterioração hemodinâmica.
             Não removida significativamente por hemodiálise.
             Fontes: FDA label · EMA SmPC · Lexicomp 2026
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco de hipercalemia e piora renal. Iniciar com dose mínima (10 mg/dia).',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo de hiperpotasemia y deterioro renal. Iniciar con dosis mínima (10 mg/día).'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '20 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '2,5–10 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              obs: t(lang,
                'Dose padrão. HTA: 20–40 mg/dia 1x/dia. Pediatria ≥ 6 anos: 2,5–5 mg (20–<35 kg) ou 5–10 mg (≥35 kg).',
                'Dosis estándar. HTA: 20–40 mg/día 1 vez/día. Pediatría ≥ 6 años: 2,5–5 mg (20–<35 kg) o 5–10 mg (≥35 kg).'
              )
            },

            fg30a50: {
              vo: { dose: '10–20 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir dose inicial de 10–20 mg. Monitorar K⁺ e creatinina.',
                'IR moderada: sin ajuste obligatorio. Preferir dosis inicial de 10–20 mg. Monitorizar K⁺ y creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '10 mg', intervalo: '24/24h', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 10 mg/dia. Risco elevado de hipercalemia. Monitoramento intensivo de K⁺ e creatinina.',
                'IR grave: iniciar con 10 mg/día. Riesgo elevado de hiperpotasemia. Monitorización intensiva de K⁺ y creatinina.'
              )
            },

            fgMenor10: {
              vo: { dose: '10 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dose máxima 10 mg/dia. Avaliar risco-benefício cuidadosamente. Monitorar K⁺ rigorosamente.',
                'IR muy grave/anuria: dosis máxima 10 mg/día. Evaluar riesgo-beneficio cuidadosamente. Monitorizar K⁺ rigurosamente.'
              )
            },

            hemodialise: {
              vo: { dose: '10 mg', intervalo: '24/24h', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Olmesartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD.',
                'Olmesartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. ALERTA EXCLUSIVO: enteropatia sprue-like rara — suspender se diarreia crônica grave ou perda de peso inexplicada. Aprovado em pediatria ≥ 6 anos.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. ALERTA EXCLUSIVO: enteropatía tipo sprue rara — suspender si diarrea crónica grave o pérdida de peso inexplicada. Aprobado en pediatría ≥ 6 años.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Benicar (olmesartan medoxomil) label 2023',
              'FDA Drug Safety Communication — olmesartan and sprue-like enteropathy (July 2013)',
              'EMA Olmetec SmPC 2024',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidance 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'Pró-fármaco (conversão no TGI). Único BRA associado à enteropatia sprue-like (FDA 2013) — suspender se má absorção/diarreia crônica. Aprovado em pediatria ≥ 6 anos. Sem ajuste renal formal em IR leve/moderada.',
              'Profármaco (conversión en TGI). Único ARA-II asociado a enteropatía tipo sprue (FDA 2013) — suspender si malabsorción/diarrea crónica. Aprobado en pediatría ≥ 6 años. Sin ajuste renal formal en IR leve/moderada.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 3B (BRAs Adicionais) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 4 — BRAs Finais + ARNI
     eprosartana · azilsartana · sacubitril+valsartana
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       13. EPROSARTANA
       BRA — HTA exclusivamente · Alt. IECA · Menos estudado que pares
    ══════════════════════════════════════════════════════════════ */
    eprosartana: {
      name:     { pt: 'Eprosartana', es: 'Eprosartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#064E3B',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Eprosartana Mesilato', 'Eprosartán Mesilato'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB)',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II)'
          ),

          commercialNames: {
            br: ['Teveten', 'Eprosartana genérica'],
            ar: ['Teveten', 'Eprosartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 400 mg, 600 mg', 'Comprimidos: 400 mg, 600 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 600 mg VO 1x/dia inicial. Manutenção: 400–800 mg/dia em 1–2 tomadas. Máximo: 800 mg/dia.',
              'HTA: 600 mg VO 1 vez/día inicial. Mantenimiento: 400–800 mg/día en 1–2 tomas. Máximo: 800 mg/día.'
            ),
            adultoGrave: t(lang,
              'Alternativa ao IECA em intolerância (tosse): 600 mg 1x/dia → titular até 800 mg/dia conforme resposta pressórica.',
              'Alternativa al IECA en intolerancia (tos): 600 mg 1 vez/día → titular hasta 800 mg/día según respuesta tensional.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados clínicos muito limitados.',
              'Uso pediátrico no aprobado formalmente. Datos clínicos muy limitados.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 400–800 mg/dia (dose fixa — sem cálculo por kg aprovado)', 'Adultos: 400–800 mg/día (dosis fija — sin cálculo por kg aprobado)'),
            grave:     t(lang, 'Manutenção: 600–800 mg/dia conforme resposta', 'Mantenimiento: 600–800 mg/día según respuesta'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 800 mg/dia', 'Adultos: 800 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Monitorar por PA, creatinina e K⁺ — sem nível sérico-alvo. Evidência limitada a HTA (sem dados robustos em IC ou nefroproteção).',
            'HTA: PA objetivo < 130/80 mmHg. Monitorizar por PA, creatinina y K⁺ — sin nivel sérico objetivo. Evidencia limitada a HTA (sin datos robustos en IC o nefroprotección).'
          ),

          dilution: t(lang,
            'Apenas formulação oral disponível. Sem apresentação EV.',
            'Solo formulación oral disponible. Sin presentación EV.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia (ou dividido em 2 tomadas) no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día (o dividido en 2 tomas) a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Cefaleia', 'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave', 'Hipotensión grave')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Preferir alternativa com maior experiência clínica documentada.',
                  'Lactancia: usar con precaución. Preferir alternativa con mayor experiencia clínica documentada.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com cautela. Maior risco de hipotensão e deterioração renal. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con precaución. Mayor riesgo de hipotensión y deterioro renal. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco aumentado de hipercalemia e piora renal. Iniciar com dose menor e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo aumentado de hiperpotasemia y deterioro renal. Iniciar con dosis menor y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Contexto clínico: eprosartana é o BRA com menor evidência clínica robusta — sem estudos de desfecho hard em IC, pós-IAM ou nefroproteção. Indicado apenas em HTA como alternativa ao IECA.',
              'Contexto clínico: eprosartán es el ARA-II con menor evidencia clínica robusta — sin estudios de desenlace hard en IC, post-IAM o nefroprotección. Indicado solo en HTA como alternativa al IECA.'
            ),
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Aumento ≤ 30% de creatinina é esperado.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es esperado.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA): sem benefício adicional e risco aumentado de hipotensão, hipercalemia e lesão renal.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA): sin beneficio adicional y riesgo aumentado de hipotensión, hiperpotasemia y lesión renal.'
            ),
            t(lang,
              'AINEs reduzem efeito anti-hipertensivo e aumentam risco de lesão renal aguda.',
              'AINEs reducen efecto antihipertensivo y aumentan riesgo de lesión renal aguda.'
            )
          ],

          ref: 'FDA Teveten (eprosartan) label 2022 · ESC Hypertension Guidelines 2023 · AHA/ACC Hypertension Guidance 2022 · Lexicomp 2026 · Goodman & Gilman 14ª ed.',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Eprosartana: metabolismo misto — hepático + excreção biliar
             e renal (sem metabolismo CYP significativo).
             Eliminação: ~90% fecal/biliar; ~10% renal inalterada.
             Ajuste renal formal NÃO obrigatório — cautela em IR grave.
             Não removida significativamente por hemodiálise.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco de hipercalemia e piora renal. Iniciar com 400 mg/dia.',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo de hiperpotasemia y deterioro renal. Iniciar con 400 mg/día.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '600 mg', intervalo: '24/24h', doseMaxima: '800 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 600 mg 1x/dia → titular até 800 mg/dia ou dividir em 2 tomadas.',
                'Dosis estándar. HTA: 600 mg 1 vez/día → titular hasta 800 mg/día o dividir en 2 tomas.'
              )
            },

            fg30a50: {
              vo: { dose: '400–600 mg', intervalo: '24/24h', doseMaxima: '600 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Preferir 400–600 mg/dia. Monitorar K⁺ e creatinina.',
                'IR moderada: sin ajuste obligatorio. Preferir 400–600 mg/día. Monitorizar K⁺ y creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '400 mg', intervalo: '24/24h', doseMaxima: '400 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 400 mg/dia. Monitoramento intensivo de K⁺ e creatinina obrigatório.',
                'IR grave: iniciar con 400 mg/día. Monitorización intensiva de K⁺ y creatinina obligatoria.'
              )
            },

            fgMenor10: {
              vo: { dose: '400 mg', intervalo: '24/24h', doseMaxima: '400 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: manter 400 mg/dia com vigilância rigorosa de K⁺. Avaliar risco-benefício continuamente.',
                'IR muy grave: mantener 400 mg/día con vigilancia rigurosa de K⁺. Evaluar riesgo-beneficio continuamente.'
              )
            },

            hemodialise: {
              vo: { dose: '400 mg', intervalo: '24/24h', doseMaxima: '400 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Eprosartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD.',
                'Eprosartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            angioedemaRisk:          false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. BRA com menor evidência clínica da classe — indicado apenas em HTA. Monitorar K⁺ e creatinina.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. ARA-II con menor evidencia clínica de la clase — indicado solo en HTA. Monitorizar K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Teveten (eprosartan mesylate) label 2022',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidance 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026',
              'Goodman & Gilman Pharmacological Basis of Therapeutics 14ª ed.'
            ],
            note: t(lang,
              'BRA com menor base de evidências robustas da classe. Uso exclusivo em HTA como alternativa ao IECA. Sem estudos de desfecho hard em IC ou nefroproteção. Eliminação predominantemente biliar/fecal — sem ajuste renal formal.',
              'ARA-II con menor base de evidencias robustas de la clase. Uso exclusivo en HTA como alternativa al IECA. Sin estudios de desenlace hard en IC o nefroprotección. Eliminación predominantemente biliar/fecal — sin ajuste renal formal.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       14. AZILSARTANA
       BRA mais recente — HTA · Potente redução pressórica
       Diferencial: maior potência anti-hipertensiva vs. olmesartana (head-to-head)
    ══════════════════════════════════════════════════════════════ */
    azilsartana: {
      name:     { pt: 'Azilsartana', es: 'Azilsartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#065F46',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Azilsartana Medoxomila', 'Azilsartán Medoxomilo'),
          class: t(lang,
            'Bloqueador do Receptor de Angiotensina II (BRA/ARB) — Pró-fármaco (azilsartana ativa) · Geração mais recente',
            'Bloqueante del Receptor de Angiotensina II (BRA/ARA-II) — Profármaco (azilsartán activo) · Generación más reciente'
          ),

          commercialNames: {
            br: ['Edarbi', 'Azilsartana genérica'],
            ar: ['Edarbi', 'Azilsartán genérico']
          },

          presentation: [
            t(lang, 'Comprimidos: 40 mg, 80 mg', 'Comprimidos: 40 mg, 80 mg')
          ],

          dose: {
            adultoPadrao: t(lang,
              'HTA: 40 mg VO 1x/dia inicial. Manutenção: 40–80 mg/dia. Máximo: 80 mg/dia.',
              'HTA: 40 mg VO 1 vez/día inicial. Mantenimiento: 40–80 mg/día. Máximo: 80 mg/día.'
            ),
            adultoGrave: t(lang,
              'HTA de difícil controle: 80 mg/dia 1x/dia. Em estudos head-to-head superou olmesartana 40 mg na redução de PAS média e MAPA de 24h.',
              'HTA de difícil control: 80 mg/día 1 vez/día. En estudios head-to-head superó olmesartán 40 mg en reducción de PAS media y MAPA de 24h.'
            ),
            pediatricaPadrao: t(lang,
              'Uso pediátrico não aprovado formalmente. Dados clínicos muito limitados.',
              'Uso pediátrico no aprobado formalmente. Datos clínicos muy limitados.'
            ),
            pediatricaGrave: null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Adultos: 40–80 mg/dia (dose fixa — sem cálculo por kg aprovado)', 'Adultos: 40–80 mg/día (dosis fija — sin cálculo por kg aprobado)'),
            grave:     t(lang, 'HTA resistente: 80 mg/dia (dose máxima)', 'HTA resistente: 80 mg/día (dosis máxima)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 80 mg/dia', 'Adultos: 80 mg/día')
          },

          therapeuticRange: t(lang,
            'HTA: PA-alvo < 130/80 mmHg. Monitorar por PA (inclusive MAPA 24h), creatinina e K⁺. Sem nível sérico-alvo. Evidência de redução pressórica superior à olmesartana em estudos de fase 3.',
            'HTA: PA objetivo < 130/80 mmHg. Monitorizar por PA (incluso MAPA 24h), creatinina y K⁺. Sin nivel sérico objetivo. Evidencia de reducción tensional superior a olmesartán en estudios de fase 3.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Azilsartana medoxomila é pró-fármaco convertido em azilsartana (ativa) no trato GI.',
            'Solo formulación oral. Azilsartán medoxomilo es profármaco convertido en azilsartán (activo) en el tracto GI.'
          ),

          speed: t(lang,
            'VO: tomar 1x/dia no mesmo horário, com ou sem alimento.',
            'VO: tomar 1 vez/día a la misma hora, con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Tontura / hipotensão', 'Mareos / hipotensión'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Diarreia (leve)', 'Diarrea (leve)')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Angioedema (raro)', 'Angioedema (raro)'),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave', 'Hipotensión grave')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: usar com cautela. Preferir alternativa com maior experiência clínica documentada.',
                  'Lactancia: usar con precaución. Preferir alternativa con mayor experiencia clínica documentada.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: monitorar hipotensão, função renal e K⁺. Maior cautela se usa diurético concomitante.',
                  'Anciano: monitorizar hipotensión, función renal y K⁺. Mayor precaución si usa diurético concomitante.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): risco aumentado de hipercalemia e piora renal. Iniciar com 40 mg/dia e monitorar intensivamente.',
                  'IR Grave (ClCr < 30): riesgo aumentado de hiperpotasemia y deterioro renal. Iniciar con 40 mg/día y monitorizar intensivamente.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'DIFERENCIAL DA CLASSE: azilsartana é o BRA mais potente em redução pressórica (PAS e MAPA 24h) nos estudos head-to-head vs. olmesartana 40 mg e valsartana 320 mg. Opção em HTA de difícil controle.',
              'DIFERENCIAL DE LA CLASE: azilsartán es el ARA-II más potente en reducción tensional (PAS y MAPA 24h) en estudios head-to-head vs. olmesartán 40 mg y valsartán 320 mg. Opción en HTA de difícil control.'
            ),
            t(lang,
              'Pró-fármaco: cautela em insuficiência hepática moderada/grave — conversão GI pode ser prejudicada.',
              'Profármaco: precaución en insuficiencia hepática moderada/grave — conversión GI puede estar deteriorada.'
            ),
            t(lang,
              'Monitorar creatinina e K⁺ em 1–2 semanas após início ou titulação. Aumento ≤ 30% de creatinina é esperado.',
              'Monitorizar creatinina y K⁺ en 1–2 semanas tras inicio o titulación. Aumento ≤ 30% de creatinina es esperado.'
            ),
            t(lang,
              'Evitar dupla inibição do SRAA (BRA + IECA): sem benefício e risco aumentado de eventos adversos graves.',
              'Evitar doble inhibición del SRAA (ARA-II + IECA): sin beneficio y riesgo aumentado de eventos adversos graves.'
            )
          ],

          ref: 'FDA Edarbi (azilsartan medoxomil) label 2023 · Sica DA et al. (J Clin Hypertens 2011) · White WB et al. (J Clin Hypertens 2011) · ESC Hypertension Guidelines 2023 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Azilsartana: pró-fármaco (medoxomila). Conversão no TGI.
             Metabolismo hepático (CYP2C9). Eliminação predominantemente
             fecal (~55%) + renal (~42%). Ajuste renal formal NÃO
             obrigatório — cautela em IR grave pela hipercalemia.
             Não removida significativamente por hemodiálise.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): cautela — risco de hipercalemia e piora renal. Iniciar com 40 mg/dia.',
                  'IR grave (ClCr < 30 mL/min): precaución — riesgo de hiperpotasemia y deterioro renal. Iniciar con 40 mg/día.'
                )
              : t(lang,
                  'Ajuste renal formal não necessário para ClCr ≥ 30 mL/min. Monitorar K⁺ e creatinina.',
                  'Ajuste renal formal no necesario para ClCr ≥ 30 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '40–80 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose padrão. HTA: 40 mg 1x/dia → 80 mg 1x/dia se necessário. Maior potência pressórica vs. olmesartana/valsartana.',
                'Dosis estándar. HTA: 40 mg 1 vez/día → 80 mg 1 vez/día si necesario. Mayor potencia tensional vs. olmesartán/valsartán.'
              )
            },

            fg30a50: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste obrigatório. Iniciar com 40 mg/dia e monitorar K⁺ e creatinina.',
                'IR moderada: sin ajuste obligatorio. Iniciar con 40 mg/día y monitorizar K⁺ y creatinina.'
              )
            },

            fg10a30: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar e manter 40 mg/dia. Risco elevado de hipercalemia. Monitoramento intensivo.',
                'IR grave: iniciar y mantener 40 mg/día. Riesgo elevado de hiperpotasemia. Monitorización intensiva.'
              )
            },

            fgMenor10: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: manter 40 mg/dia com monitoração rigorosa de K⁺. Avaliar risco-benefício continuamente.',
                'IR muy grave: mantener 40 mg/día con monitorización rigurosa de K⁺. Evaluar riesgo-beneficio continuamente.'
              )
            },

            hemodialise: {
              vo: { dose: '40 mg', intervalo: '24/24h', doseMaxima: '40 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Azilsartana não é removida significativamente por hemodiálise. Manter dose reduzida sem suplementação pós-HD.',
                'Azilsartán no es removido significativamente por hemodiálisis. Mantener dosis reducida sin suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            angioedemaRisk:          false,
            pregnancyCaution:        true,
            warning: t(lang,
              'CONTRAINDICAÇÃO ABSOLUTA na gravidez. BRA mais potente em redução pressórica (MAPA 24h). Pró-fármaco — cautela em hepatopatia. Monitorar K⁺ e creatinina.',
              'CONTRAINDICACIÓN ABSOLUTA en embarazo. ARA-II más potente en reducción tensional (MAPA 24h). Profármaco — precaución en hepatopatía. Monitorizar K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Edarbi (azilsartan medoxomil) label 2023',
              'Sica DA et al. — J Clin Hypertens 2011 (head-to-head vs. olmesartan)',
              'White WB et al. — J Clin Hypertens 2011 (head-to-head vs. valsartan)',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidance 2022',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'BRA mais recente da classe. Pró-fármaco (medoxomila → azilsartana ativa no TGI). Maior potência anti-hipertensiva vs. olmesartana e valsartana em estudos head-to-head. Cautela em hepatopatia. Sem aprovação pediátrica. Não dialisável.',
              'ARA-II más reciente de la clase. Profármaco (medoxomilo → azilsartán activo en TGI). Mayor potencia antihipertensiva vs. olmesartán y valsartán en estudios head-to-head. Precaución en hepatopatía. Sin aprobación pediátrica. No dializable.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       15. SACUBITRIL + VALSARTANA (ARNI)
       ARNI — ICFEr (substitui IECA/BRA) · PARADIGM-HF
       Classe distinta: Inibidor da Neprilisina + BRA
       Washout OBRIGATÓRIO de 36h após IECA
    ══════════════════════════════════════════════════════════════ */
    sacubitrilValsartana: {
      name:     { pt: 'Sacubitril + Valsartana', es: 'Sacubitril + Valsartán' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(99,102,241,0.13)',
      colorTxt: '#3730A3',

      calculate: (paciente, lang = 'pt') => {
        const peso     = Number(paciente.peso    || 0);
        const idade    = Number(paciente.idade   || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const fg       = Number(paciente.clcr || paciente.fg || 90);

        return {
          name:  t(lang, 'Sacubitril/Valsartana (Entresto®)', 'Sacubitril/Valsartán (Entresto®)'),
          class: t(lang,
            'ARNI — Inibidor da Neprilisina + Bloqueador do Receptor de Angiotensina II (Sacubitril/Valsartana)',
            'ARNI — Inhibidor de Neprilisina + Bloqueante del Receptor de Angiotensina II (Sacubitril/Valsartán)'
          ),

          commercialNames: {
            br: ['Entresto'],
            ar: ['Entresto']
          },

          presentation: [
            t(lang,
              'Comprimidos: 24/26 mg · 49/51 mg · 97/103 mg (sacubitril/valsartana)',
              'Comprimidos: 24/26 mg · 49/51 mg · 97/103 mg (sacubitril/valsartán)'
            )
          ],

          dose: {
            adultoPadrao: t(lang,
              'Iniciar com 49/51 mg VO 12/12h se PA estável, função renal preservada e sem baixa dose prévia de IECA/BRA. Titular até 97/103 mg 12/12h a cada 2–4 semanas.',
              'Iniciar con 49/51 mg VO cada 12h si PA estable, función renal preservada y sin baja dosis previa de IECA/ARA-II. Titular hasta 97/103 mg cada 12h cada 2–4 semanas.'
            ),
            adultoGrave: t(lang,
              'Iniciar com 24/26 mg VO 12/12h se: PAS < 110 mmHg, ClCr < 30 mL/min, hepatopatia moderada, idoso frágil ou em uso de baixa dose de IECA/BRA. Titular conforme tolerância.',
              'Iniciar con 24/26 mg VO cada 12h si: PAS < 110 mmHg, ClCr < 30 mL/min, hepatopatía moderada, anciano frágil o en uso de baja dosis de IECA/ARA-II. Titular según tolerancia.'
            ),
            pediatricaPadrao: t(lang,
              'Aprovado FDA em pediatria ≥ 1 ano com IC sistólica. Doses pediátricas baseadas em peso — consultar protocolo específico.',
              'Aprobado FDA en pediatría ≥ 1 año con IC sistólica. Dosis pediátricas basadas en peso — consultar protocolo específico.'
            ),
            pediatricaGrave: t(lang,
              'Crianças < 40 kg: 1,6 mg/kg 12/12h (sacubitril); ≥ 40 kg: doses adultas menores. Monitorar PA, creatinina e K⁺ rigorosamente.',
              'Niños < 40 kg: 1,6 mg/kg cada 12h (sacubitril); ≥ 40 kg: dosis adultas menores. Monitorizar PA, creatinina y K⁺ rigurosamente.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, 'Pediatria ≥ 1 ano: 1,6 mg/kg/dose 12/12h (sacubitril) — FDA-aprovado em IC sistólica', 'Pediatría ≥ 1 año: 1,6 mg/kg/dosis cada 12h (sacubitril) — FDA-aprobado en IC sistólica'),
            grave:     t(lang, 'Adultos: alvo 97/103 mg 12/12h (dose máxima tolerada)', 'Adultos: objetivo 97/103 mg cada 12h (dosis máxima tolerada)'),
            meningite: null,
            doseMaxima: t(lang, 'Adultos: 97/103 mg 12/12h | Pediatria: conforme peso (protocolo específico)', 'Adultos: 97/103 mg cada 12h | Pediatría: según peso (protocolo específico)')
          },

          therapeuticRange: t(lang,
            'ICFEr: dose-alvo 97/103 mg 12/12h (PARADIGM-HF). Titular a cada 2–4 semanas. Monitorar PA, K⁺, creatinina e TFG após cada ajuste. Reduzir se PAS < 90–100 mmHg ou K⁺ > 5,5 mEq/L.',
            'ICFEr: dosis objetivo 97/103 mg cada 12h (PARADIGM-HF). Titular cada 2–4 semanas. Monitorizar PA, K⁺, creatinina y TFG tras cada ajuste. Reducir si PAS < 90–100 mmHg o K⁺ > 5,5 mEq/L.'
          ),

          dilution: t(lang,
            'Apenas formulação oral. Sacubitril é pró-fármaco convertido em LBQ657 (ativo inibidor da neprilisina). Sem apresentação EV.',
            'Solo formulación oral. Sacubitril es profármaco convertido en LBQ657 (activo inhibidor de neprilisina). Sin presentación EV.'
          ),

          speed: t(lang,
            'VO: tomar 12/12h (de manhã e à noite), com ou sem alimento.',
            'VO: tomar cada 12h (mañana y noche), con o sin alimento.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipotensão arterial (principal limitante)', 'Hipotensión arterial (principal limitante)'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Elevação de creatinina', 'Elevación de creatinina'),
            t(lang, 'Tosse (menos frequente que IECAs)', 'Tos (menos frecuente que IECAs)')
          ],

          dangerousAdverseEffects: [
            t(lang,
              'ANGIOEDEMA — risco aumentado se histórico de angioedema por IECA (contraindicação absoluta se prévia). Potencializado pela inibição da neprilisina (que degrada bradicinina)',
              'ANGIOEDEMA — riesgo aumentado si antecedente de angioedema por IECA (contraindicación absoluta si previo). Potenciado por inhibición de neprilisina (que degrada bradiquinina)'
            ),
            t(lang, 'Hipercalemia grave (K⁺ > 6 mEq/L)', 'Hiperpotasemia grave (K⁺ > 6 mEq/L)'),
            t(lang, 'Insuficiência Renal Aguda', 'Insuficiencia Renal Aguda'),
            t(lang, 'Hipotensão grave — especialmente na 1ª titulação', 'Hipotensión grave — especialmente en la 1ª titulación')
          ],

          risksByPatient: [
            gestante
              ? t(lang,
                  'CONTRAINDICAÇÃO ABSOLUTA: Toxicidade fetal renal grave, oligoidrâmnio, hipotensão fetal e morte fetal.',
                  'CONTRAINDICACIÓN ABSOLUTA: Toxicidad fetal renal grave, oligohidramnios, hipotensión fetal y muerte fetal.'
                )
              : null,
            lactante
              ? t(lang,
                  'Lactação: evitar. Preferir alternativas com perfil de segurança melhor documentado durante amamentação.',
                  'Lactancia: evitar. Preferir alternativas con perfil de seguridad mejor documentado durante la lactancia.'
                )
              : null,
            idade >= 65
              ? t(lang,
                  'Idoso: iniciar com 24/26 mg 12/12h. Alto risco de hipotensão e deterioração renal. Titular muito lentamente. Monitorar PA, creatinina e K⁺.',
                  'Anciano: iniciar con 24/26 mg cada 12h. Alto riesgo de hipotensión y deterioro renal. Titular muy lentamente. Monitorizar PA, creatinina y K⁺.'
                )
              : null,
            fg < 30
              ? t(lang,
                  'IR Grave (ClCr < 30): iniciar com 24/26 mg 12/12h. Risco elevado de hipercalemia e piora renal. Monitoramento intensivo.',
                  'IR Grave (ClCr < 30): iniciar con 24/26 mg cada 12h. Riesgo elevado de hiperpotasemia y deterioro renal. Monitorización intensiva.'
                )
              : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              '⚠️ WASHOUT OBRIGATÓRIO DE 36 HORAS: NUNCA iniciar sacubitril/valsartana dentro de 36 horas da última dose de qualquer IECA. O risco de angioedema grave é substancialmente aumentado pela combinação (inibição dupla de degradação de bradicinina).',
              '⚠️ WASHOUT OBLIGATORIO DE 36 HORAS: NUNCA iniciar sacubitril/valsartán dentro de 36 horas de la última dosis de cualquier IECA. El riesgo de angioedema grave aumenta sustancialmente por la combinación (inhibición doble de degradación de bradiquinina).'
            ),
            t(lang,
              'PARADIGM-HF: sacubitril/valsartana reduziu mortalidade CV em 20% e hospitalizações por IC em 21% vs. enalapril em ICFEr (McMurray JJ, NEJM 2014). Evidência classe I, nível A nas diretrizes ESC 2021 e AHA/ACC/HFSA 2022.',
              'PARADIGM-HF: sacubitril/valsartán redujo mortalidad CV en 20% y hospitalizaciones por IC en 21% vs. enalapril en ICFEr (McMurray JJ, NEJM 2014). Evidencia clase I, nivel A en guías ESC 2021 y AHA/ACC/HFSA 2022.'
            ),
            t(lang,
              'Angioedema prévio por IECA ou BRA: CONTRAINDICAÇÃO ABSOLUTA — a inibição da neprilisina potencializa o acúmulo de bradicinina, amplificando dramaticamente o risco.',
              'Angioedema previo por IECA o ARA-II: CONTRAINDICACIÓN ABSOLUTA — la inhibición de neprilisina potencia la acumulación de bradiquinina, amplificando dramáticamente el riesgo.'
            ),
            t(lang,
              'Substituição de IECA: suspender IECA → aguardar 36h → iniciar sacubitril/valsartana com dose baixa. Substituição de BRA: pode ser feita diretamente (sem washout obrigatório).',
              'Sustitución de IECA: suspender IECA → esperar 36h → iniciar sacubitril/valsartán con dosis baja. Sustitución de ARA-II: puede hacerse directamente (sin washout obligatorio).'
            )
          ],

          ref: 'FDA Entresto (sacubitril/valsartan) label 2023 · PARADIGM-HF Trial — McMurray JJ et al. (NEJM 2014) · ESC Heart Failure Guidelines 2021 · AHA/ACC/HFSA Heart Failure Guidelines 2022 · Lexicomp 2026',

          /* ── Ajuste Renal ──────────────────────────────────────────────
             Sacubitril/Valsartana: sacubitril pró-fármaco → LBQ657 ativo.
             Eliminação: LBQ657 renal ~52%; valsartana biliar/fecal ~70%.
             Iniciar com 24/26 mg se ClCr < 30 mL/min (FDA recomenda cautela).
             Não testado formalmente em ClCr < 10 mL/min / diálise.
             Fontes: FDA label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'IR grave (ClCr < 30 mL/min): iniciar com dose mínima 24/26 mg 12/12h. Risco de hipercalemia e piora renal. Monitorar intensivamente.',
                  'IR grave (ClCr < 30 mL/min): iniciar con dosis mínima 24/26 mg cada 12h. Riesgo de hiperpotasemia y deterioro renal. Monitorizar intensivamente.'
                )
              : t(lang,
                  'Não requer ajuste renal para ClCr ≥ 30 mL/min. Iniciar com 49/51 mg ou 24/26 mg 12/12h conforme status clínico.',
                  'No requiere ajuste renal para ClCr ≥ 30 mL/min. Iniciar con 49/51 mg o 24/26 mg cada 12h según status clínico.'
                ),

            fgMaior50: {
              vo: { dose: '49/51 mg → 97/103 mg', intervalo: '12/12h', doseMaxima: '97/103 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '1,6 mg/kg (sacubitril)', intervalo: '12/12h', doseMaxima: 'Conforme peso', unidade: 'mg/kg' },
              obs: t(lang,
                'Iniciar 49/51 mg 12/12h se PA e função renal estáveis. Titular para 97/103 mg 12/12h a cada 2–4 semanas conforme tolerância.',
                'Iniciar 49/51 mg cada 12h si PA y función renal estables. Titular hasta 97/103 mg cada 12h cada 2–4 semanas según tolerancia.'
              )
            },

            fg30a50: {
              vo: { dose: '24/26 mg → 49/51 mg', intervalo: '12/12h', doseMaxima: '97/103 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '1,6 mg/kg (sacubitril)', intervalo: '12/12h', doseMaxima: 'Conforme peso', unidade: 'mg/kg' },
              obs: t(lang,
                'IR moderada: iniciar com 24/26 mg 12/12h e titular com cautela. Monitorar K⁺ e creatinina rigorosamente.',
                'IR moderada: iniciar con 24/26 mg cada 12h y titular con precaución. Monitorizar K⁺ y creatinina rigurosamente.'
              )
            },

            fg10a30: {
              vo: { dose: '24/26 mg', intervalo: '12/12h', doseMaxima: '49/51 mg 12/12h (com cautela)', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: iniciar com 24/26 mg 12/12h obrigatoriamente. Titular muito lentamente se tolerado. Alto risco de hipercalemia e hipotensão.',
                'IR grave: iniciar con 24/26 mg cada 12h obligatoriamente. Titular muy lentamente si tolerado. Alto riesgo de hiperpotasemia e hipotensión.'
              )
            },

            fgMenor10: {
              vo: { dose: '24/26 mg', intervalo: '12/12h', doseMaxima: '24/26 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave/anúria: dados limitados. Manter 24/26 mg 12/12h com monitoração intensiva. Avaliar risco-benefício cuidadosamente. Considerar suspensão se K⁺ > 5,5 ou creatinina em ascensão.',
                'IR muy grave/anuria: datos limitados. Mantener 24/26 mg cada 12h con monitorización intensiva. Evaluar riesgo-beneficio cuidadosamente. Considerar suspensión si K⁺ > 5,5 o creatinina en ascenso.'
              )
            },

            hemodialise: {
              vo: { dose: '24/26 mg', intervalo: '12/12h', doseMaxima: '24/26 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: dados muito limitados. LBQ657 (metabólito ativo do sacubitril) pode ser parcialmente removido por HD. Uso com extrema cautela — avaliar risco-benefício individualmente.',
                'Hemodiálisis: datos muy limitados. LBQ657 (metabolito activo del sacubitril) puede ser parcialmente removido por HD. Uso con extrema precaución — evaluar riesgo-beneficio individualmente.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            angioedemaRisk:          true,
            pregnancyCaution:        true,
            warning: t(lang,
              'ARNI de referência em ICFEr. NUNCA combinar com IECA — washout mínimo de 36h obrigatório. Angioedema prévio por IECA/BRA = CONTRAINDICAÇÃO ABSOLUTA. Monitorar PA, K⁺ e creatinina.',
              'ARNI de referencia en ICFEr. NUNCA combinar con IECA — washout mínimo de 36h obligatorio. Angioedema previo por IECA/ARA-II = CONTRAINDICACIÓN ABSOLUTA. Monitorizar PA, K⁺ y creatinina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'FDA Entresto (sacubitril/valsartan) label 2023',
              'PARADIGM-HF Trial — McMurray JJ et al. (NEJM 2014)',
              'ESC Heart Failure Guidelines 2021',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'PIONEER-HF Trial (NEJM 2019)',
              'UpToDate 2025',
              'Lexicomp Online 2026'
            ],
            note: t(lang,
              'ARNI — classe farmacológica distinta (neprilisina + BRA). PARADIGM-HF: -20% mortalidade CV vs. enalapril em ICFEr. Washout 36h após IECA é crítico. Aprovado FDA em pediatria ≥ 1 ano. Angioedema prévio = CI absoluta.',
              'ARNI — clase farmacológica distinta (neprilisina + ARA-II). PARADIGM-HF: -20% mortalidad CV vs. enalapril en ICFEr. Washout 36h tras IECA es crítico. Aprobado FDA en pediatría ≥ 1 año. Angioedema previo = CI absoluta.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 4 (BRAs Finais + ARNI) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 5 — Betabloqueadores Adicionais
     atenolol · propranolol · esmolol · nadolol
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       16. ATENOLOL
       Beta-1 seletivo VO · Eliminação renal ~90% · Threshold fg≤35
    ══════════════════════════════════════════════════════════════ */
    atenolol: {
      name:     { pt: 'Atenolol', es: 'Atenolol' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#B91C1C',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade || 0);

        /* Dose adulto padrão */
        const adultoPadrao = t(lang,
          '25–50 mg VO 1x/dia; manutenção 50–100 mg/dia; máx 200 mg/dia',
          '25–50 mg VO 1 vez/día; mantenimiento 50–100 mg/día; máx 200 mg/día'
        );

        /* Dose adulto grave — sem formulação EV disponível comercialmente no Brasil */
        const adultoGrave = t(lang,
          'Sem formulação EV padrão disponível. Uso exclusivo VO. Ajustar dose conforme FC, PA e função renal.',
          'Sin formulación IV estándar disponible. Uso exclusivo VO. Ajustar dosis según FC, PA y función renal.'
        );

        return {
          name:  t(lang, 'Atenolol', 'Atenolol'),
          class: t(lang, 'Betabloqueador beta-1 seletivo', 'Betabloqueante beta-1 selectivo'),

          commercialNames: {
            br: ['Atenol', 'Ablok', 'Atenolol genérico'],
            ar: ['Tenormin', 'Atenolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos 25 mg', 'Comprimidos 25 mg'),
            t(lang, 'Comprimidos 50 mg', 'Comprimidos 50 mg'),
            t(lang, 'Comprimidos 100 mg', 'Comprimidos 100 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang, 'Não estabelecida rotineiramente em pediatria', 'No establecida de forma rutinaria en pediatría'),
            pediatricaGrave:  null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    null,
            grave:     null,
            meningite: null,
            doseMaxima: t(lang, '200 mg/dia', '200 mg/día')
          },

          therapeuticRange: t(lang,
            'FC alvo 55–70 bpm conforme contexto clínico; controle pressórico e de angina',
            'FC objetivo 55–70 lpm según contexto clínico; control tensional y de angina'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang, 'Administrar 1x/dia, preferencialmente pela manhã.', 'Administrar 1 vez/día, preferiblemente por la mañana.'),

          commonAdverseEffects: [
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Hipotensão', 'Hipotensión'),
            t(lang, 'Extremidades frias', 'Extremidades frías'),
            t(lang, 'Disfunção sexual', 'Disfunción sexual'),
            t(lang, 'Sonolência', 'Somnolencia')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV', 'Bloqueo AV'),
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Broncoespasmo', 'Broncoespasmo'),
            t(lang, 'Bradicardia grave', 'Bradicardia grave'),
            t(lang, 'Piora de insuficiência cardíaca', 'Empeoramiento de insuficiencia cardíaca')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: pode causar restrição de crescimento fetal e bradicardia neonatal. Usar apenas se benefício superar risco.',
              'Gestante: puede causar restricción del crecimiento fetal y bradicardia neonatal. Usar solo si el beneficio supera el riesgo.'
            ) : null,
            lactante ? t(lang,
              'Lactante: pode passar para o leite materno. Monitorar bradicardia e sonolência no lactente.',
              'Lactante: puede pasar a la leche materna. Monitorizar bradicardia y somnolencia en el lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de bradicardia, hipotensão e acúmulo em insuficiência renal.',
              'Anciano: mayor riesgo de bradicardia, hipotensión y acumulación en insuficiencia renal.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Não suspender abruptamente — risco de angina rebote e eventos coronarianos.',
              'No suspender abruptamente — riesgo de angina de rebote y eventos coronarios.'
            ),
            t(lang,
              'Pode mascarar sintomas adrenérgicos de hipoglicemia em diabéticos.',
              'Puede enmascarar síntomas adrenérgicos de hipoglucemia en diabéticos.'
            ),
            t(lang,
              'Interações graves: verapamil, diltiazem, amiodarona, digoxina — risco de bloqueio AV e bradicardia grave.',
              'Interacciones graves: verapamilo, diltiazem, amiodarona, digoxina — riesgo de bloqueo AV y bradicardia grave.'
            ),
            fg <= 35 ? t(lang,
              'AJUSTE RENAL NECESSÁRIO: ClCr ≤ 35 mL/min — reduzir dose ou aumentar intervalo.',
              'AJUSTE RENAL NECESARIO: ClCr ≤ 35 mL/min — reducir dosis o aumentar intervalo.'
            ) : null
          ].filter(Boolean),

          ref: 'ESC Hypertension Guidelines · ESC Chronic Coronary Syndrome Guidelines · AHA/ACC Guidelines · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg <= 35,
            message: t(lang,
              'Atenolol é eliminado predominantemente pelos rins (~90%). Ajuste obrigatório em ClCr ≤ 35 mL/min.',
              'Atenolol se elimina predominantemente por vía renal (~90%). Ajuste obligatorio con ClCr ≤ 35 mL/min.'
            ),
            fgMaior50: {
              vo:        { dose: '50–100 mg', intervalo: '1x/dia', doseMaxima: '200 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang, 'Dose e intervalo habituais. Sem ajuste necessário.', 'Dosis e intervalo habituales. Sin ajuste necesario.')
            },
            fg30a50: {
              vo:        { dose: '25–50 mg', intervalo: '1x/dia', doseMaxima: '100 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr 15–35 mL/min: reduzir dose para 25–50 mg/dia ou intervalar a cada 48h. Monitorar FC e PA.',
                'ClCr 15–35 mL/min: reducir dosis a 25–50 mg/día o intervalar cada 48h. Monitorizar FC y PA.'
              )
            },
            fg10a30: {
              vo:        { dose: '25 mg', intervalo: 'a cada 48h', doseMaxima: '25 mg/48h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr 15–35 mL/min (grave): máx 25 mg a cada 48h. Risco elevado de acúmulo e bradicardia.',
                'ClCr 15–35 mL/min (grave): máx 25 mg cada 48h. Riesgo elevado de acumulación y bradicardia.'
              )
            },
            fgMenor10: {
              vo:        { dose: '25 mg', intervalo: 'a cada 96h', doseMaxima: '25 mg/96h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr < 15 mL/min ou anúria: máx 25 mg a cada 96h com monitorização intensiva. Avaliar alternativas.',
                'ClCr < 15 mL/min o anuria: máx 25 mg cada 96h con monitorización intensiva. Evaluar alternativas.'
              )
            },
            hemodialise: {
              vo:        { dose: '25–50 mg', intervalo: 'Pós-HD (em dias de diálise)', doseMaxima: '50 mg/sessão HD', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Atenolol é significativamente removido por hemodiálise (~50%). Administrar dose suplementar de 25–50 mg após cada sessão.',
                'Atenolol es significativamente removido por hemodiálisis (~50%). Administrar dosis suplementaria de 25–50 mg después de cada sesión.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Betabloqueador dependente de eliminação renal (~90%). Monitorar FC, PA e função renal. Ajuste obrigatório em ClCr ≤ 35 mL/min.',
              'Betabloqueante dependiente de eliminación renal (~90%). Monitorizar FC, PA y función renal. Ajuste obligatorio con ClCr ≤ 35 mL/min.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines',
              'ESC Chronic Coronary Syndrome Guidelines',
              'AHA/ACC Guidelines',
              'Goodman & Gilman',
              'Lexicomp',
              'FDA label'
            ],
            note: t(lang,
              'Betabloqueador clássico beta-1 seletivo VO. Único do grupo com threshold renal ≤35 mL/min e suplementação pós-HD (~50% removido).',
              'Betabloqueante clásico beta-1 selectivo VO. Único del grupo con umbral renal ≤35 mL/min y suplementación post-HD (~50% removido).'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       17. PROPRANOLOL
       Não seletivo · Hepático CYP2D6 · Múltiplas indicações extracardíacas
    ══════════════════════════════════════════════════════════════ */
    propranolol: {
      name:     { pt: 'Propranolol', es: 'Propranolol' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#991B1B',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade || 0);

        const adultoPadrao = t(lang,
          '10–40 mg VO 8/8h ou 12/12h conforme indicação; liberação prolongada 80–160 mg 1x/dia',
          '10–40 mg VO cada 8h o 12h según indicación; liberación prolongada 80–160 mg 1 vez/día'
        );

        const adultoGrave = t(lang,
          'Sem indicação de formulação EV rotineira. Ajustar dose VO conforme FC, PA e função hepática.',
          'Sin indicación de formulación IV rutinaria. Ajustar dosis VO según FC, PA y función hepática.'
        );

        return {
          name:  t(lang, 'Propranolol', 'Propranolol'),
          class: t(lang, 'Betabloqueador não seletivo', 'Betabloqueante no selectivo'),

          commercialNames: {
            br: ['Inderal', 'Rebaten', 'Propranolol genérico'],
            ar: ['Inderal', 'Propranolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos 10 mg, 40 mg, 80 mg', 'Comprimidos 10 mg, 40 mg, 80 mg'),
            t(lang, 'Cápsulas de liberação prolongada 80 mg, 120 mg, 160 mg', 'Cápsulas de liberación prolongada 80 mg, 120 mg, 160 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang, 'Não rotineiramente estabelecida; uso off-label em hemangiomas infantis', 'No establecida rutinariamente; uso off-label en hemangiomas infantiles'),
            pediatricaGrave:  null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    null,
            grave:     null,
            meningite: null,
            doseMaxima: t(lang, 'Até 320 mg/dia em uso cardiovascular; varia conforme indicação', 'Hasta 320 mg/día en uso cardiovascular; varía según indicación')
          },

          therapeuticRange: t(lang,
            'Controle da FC conforme contexto; redução de sintomas adrenérgicos, angina e pressão portal',
            'Control de FC según contexto; reducción de síntomas adrenérgicos, angina y presión portal'
          ),

          dilution: t(lang, 'Uso exclusivo via oral (formulação padrão). Não diluir rotineiramente.', 'Uso exclusivo vía oral (formulación estándar). No diluir de forma rutinaria.'),
          speed:    t(lang, 'Administrar com alimentos para reduzir variabilidade de absorção.', 'Administrar con alimentos para reducir variabilidad de absorción.'),

          commonAdverseEffects: [
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Hipotensão', 'Hipotensión'),
            t(lang, 'Extremidades frias', 'Extremidades frías'),
            t(lang, 'Distúrbios do sono e pesadelos', 'Trastornos del sueño y pesadillas'),
            t(lang, 'Disfunção sexual', 'Disfunción sexual')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Broncoespasmo', 'Broncoespasmo'),
            t(lang, 'Bloqueio AV', 'Bloqueo AV'),
            t(lang, 'Bradicardia grave', 'Bradicardia grave'),
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Piora de insuficiência cardíaca descompensada', 'Empeoramiento de insuficiencia cardíaca descompensada'),
            t(lang, 'Hipoglicemia mascarada em diabéticos', 'Hipoglucemia enmascarada en diabéticos')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: pode associar-se a restrição de crescimento fetal, bradicardia e hipoglicemia neonatal. Usar apenas se benefício superar risco.',
              'Gestante: puede asociarse a restricción del crecimiento fetal, bradicardia e hipoglucemia neonatal. Usar solo si el beneficio supera el riesgo.'
            ) : null,
            lactante ? t(lang,
              'Lactante: usar com cautela; observar bradicardia, sonolência, má alimentação ou hipoglicemia no lactente.',
              'Lactante: usar con precaución; observar bradicardia, somnolencia, mala alimentación o hipoglucemia en el lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: iniciar com dose baixa e titular lentamente — maior risco de bradicardia, hipotensão, confusão, fadiga e quedas.',
              'Anciano: iniciar con dosis baja y titular lentamente — mayor riesgo de bradicardia, hipotensión, confusión, fatiga y caídas.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Não suspender abruptamente — risco de angina rebote e eventos coronarianos.',
              'No suspender abruptamente — riesgo de angina de rebote y eventos coronarios.'
            ),
            t(lang,
              'Betabloqueador NÃO seletivo: contraindicado em asma grave e broncoespasmo ativo.',
              'Betabloqueante NO selectivo: contraindicado en asma grave y broncoespasmo activo.'
            ),
            t(lang,
              'Metabolismo hepático (CYP2D6): titular com extrema cautela em cirrose ou insuficiência hepática.',
              'Metabolismo hepático (CYP2D6): titular con extrema precaución en cirrosis o insuficiencia hepática.'
            ),
            t(lang,
              'Inibe conversão periférica de T4 → T3 em altas doses — relevante em hipertireoidismo e tireotoxicose.',
              'Inhibe la conversión periférica de T4 → T3 en dosis altas — relevante en hipertiroidismo y tirotoxicosis.'
            ),
            t(lang,
              'Indicações extracardíacas: profilaxia de varizes esofágicas (Baveno VII), tremor essencial, enxaqueca, ansiedade de performance.',
              'Indicaciones extracardíacas: profilaxis de várices esofágicas (Baveno VII), temblor esencial, migraña, ansiedad de performance.'
            )
          ],

          ref: 'ESC Hypertension Guidelines · ESC Chronic Coronary Syndrome Guidelines · AHA/ACC Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Propranolol é metabolizado predominantemente pelo fígado (CYP2D6). Não requer ajuste renal habitual.',
              'Propranolol se metaboliza predominantemente en el hígado (CYP2D6). No requiere ajuste renal habitual.'
            ),
            fgMaior50: {
              vo:        { dose: '10–40 mg', intervalo: '8/8h ou 12/12h', doseMaxima: '320 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang, 'Dose e intervalo habituais. Sem ajuste renal necessário.', 'Dosis e intervalo habituales. Sin ajuste renal necesario.')
            },
            fg30a50: {
              vo:        { dose: '10–40 mg', intervalo: '8/8h ou 12/12h', doseMaxima: '320 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Sem ajuste renal necessário. Monitorar tolerância clínica — cautela em pacientes frágeis.',
                'Sin ajuste renal necesario. Monitorizar tolerancia clínica — precaución en pacientes frágiles.'
              )
            },
            fg10a30: {
              vo:        { dose: '10–40 mg', intervalo: '8/8h ou 12/12h', doseMaxima: '320 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Sem ajuste renal específico, mas atenção à tolerância clínica global. Em cirrose coexistente, reduzir dose hepática.',
                'Sin ajuste renal específico, pero atención a la tolerancia clínica global. En cirrosis coexistente, reducir dosis hepática.'
              )
            },
            fgMenor10: {
              vo:        { dose: '10–40 mg', intervalo: 'Avaliar individualmente', doseMaxima: 'Titular conforme FC e PA', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Sem ajuste renal obrigatório. Monitoração hemodinâmica rigorosa em DRC muito grave.',
                'Sin ajuste renal obligatorio. Monitorización hemodinámica rigurosa en ERC muy grave.'
              )
            },
            hemodialise: {
              vo:        null,
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Propranolol não é significativamente removido por hemodiálise. Nenhuma suplementação pós-HD necessária.',
                'Propranolol no se elimina significativamente por hemodiálisis. No se requiere suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           false,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            bronchospasmRisk:        true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Propranolol é não seletivo: maior atenção em asma/DPOC, diabetes com hipoglicemia, bloqueios de condução e insuficiência hepática.',
              'Propranolol es no selectivo: mayor atención en asma/EPOC, diabetes con hipoglucemia, bloqueos de conducción e insuficiencia hepática.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines',
              'ESC Chronic Coronary Syndrome Guidelines',
              'AHA/ACC Guidelines',
              'Goodman & Gilman',
              'Lexicomp',
              'FDA/EMA label'
            ],
            note: t(lang,
              'Betabloqueador não seletivo com usos cardiovasculares e extracardíacos importantes (varizes, tremor, enxaqueca, tireotóxica). Metabolismo hepático CYP2D6; inibe conversão T4→T3.',
              'Betabloqueante no selectivo con usos cardiovasculares y extracardíacos importantes (várices, temblor, migraña, tirotóxica). Metabolismo hepático CYP2D6; inhibe conversión T4→T3.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       18. ESMOLOL
       Beta-1 seletivo EV · Meia-vida ~9 min · Esterases eritrocitárias
    ══════════════════════════════════════════════════════════════ */
    esmolol: {
      name:     { pt: 'Esmolol', es: 'Esmolol' },
      category: 'cardio',
      icon:     '💉',
      color:    'rgba(220,38,38,0.15)',
      colorTxt: '#7F1D1D',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const peso     = Number(paciente.peso || 70);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade || 0);

        /* Velocidade de infusão (mcg/kg/min) → mL/h se diluição padrão 10 mg/mL */
        const velInfPadrao = `${(50 * peso * 60 / 10000).toFixed(1)} mL/h`;  /* 50 mcg/kg/min */
        const velInfMax    = `${(200 * peso * 60 / 10000).toFixed(1)} mL/h`; /* 200 mcg/kg/min */

        const adultoPadrao = t(lang,
          `Bólus opcional: 500 mcg/kg IV em 1 min → Infusão 50–200 mcg/kg/min IV (≈ ${velInfPadrao} a ${velInfMax} usando 10 mg/mL)`,
          `Bolo opcional: 500 mcg/kg IV en 1 min → Infusión 50–200 mcg/kg/min IV (≈ ${velInfPadrao} a ${velInfMax} usando 10 mg/mL)`
        );

        const adultoGrave = t(lang,
          `UTI/Emergência: titular até 300 mcg/kg/min conforme FC e PA (≈ ${(300 * peso * 60 / 10000).toFixed(1)} mL/h usando 10 mg/mL). Monitorização contínua obrigatória.`,
          `UCI/Emergencia: titular hasta 300 mcg/kg/min según FC y PA (≈ ${(300 * peso * 60 / 10000).toFixed(1)} mL/h usando 10 mg/mL). Monitorización continua obligatoria.`
        );

        return {
          name:  t(lang, 'Esmolol', 'Esmolol'),
          class: t(lang, 'Betabloqueador beta-1 seletivo de ação ultracurta (IV)', 'Betabloqueante beta-1 selectivo de acción ultracorta (IV)'),

          commercialNames: {
            br: ['Brevibloc', 'Esmolol genérico'],
            ar: ['Brevibloc', 'Esmolol genérico']
          },

          presentation: [
            t(lang, 'Ampolas 10 mg/mL para infusão intravenosa', 'Ampollas 10 mg/mL para infusión intravenosa'),
            t(lang, 'Frascos para infusão intravenosa contínua', 'Frascos para infusión intravenosa continua')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang, 'Uso pediátrico off-label; consultar especialista e protocolo institucional', 'Uso pediátrico off-label; consultar especialista y protocolo institucional'),
            pediatricaGrave:  null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    t(lang, '50–200 mcg/kg/min IV', '50–200 mcg/kg/min IV'),
            grave:     t(lang, 'Até 300 mcg/kg/min IV', 'Hasta 300 mcg/kg/min IV'),
            meningite: null,
            doseMaxima: t(lang, '300 mcg/kg/min IV', '300 mcg/kg/min IV')
          },

          therapeuticRange: t(lang,
            'FC < 110 bpm em FA estável; FC 60–80 bpm em situações críticas (dissecção de aorta, pós-operatório)',
            'FC < 110 lpm en FA estable; FC 60–80 lpm en situaciones críticas (disección de aorta, postoperatorio)'
          ),

          dilution: t(lang,
            'Diluição padrão: 2,5 g (250 mL de 10 mg/mL) em 250 mL SF/SG5% → concentração 10 mg/mL. Verificar compatibilidade conforme apresentação.',
            'Dilución estándar: 2,5 g (250 mL de 10 mg/mL) en 250 mL SF/SG5% → concentración 10 mg/mL. Verificar compatibilidad según presentación.'
          ),

          speed: t(lang,
            'Ajustar velocidade de infusão a cada 5–10 min conforme FC e PA. Meia-vida ~9 min — efeito reverte rapidamente ao suspender.',
            'Ajustar velocidad de infusión cada 5–10 min según FC y PA. Vida media ~9 min — el efecto revierte rápidamente al suspender.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipotensão', 'Hipotensión'),
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Náuseas', 'Náuseas'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Sudorese', 'Sudoración'),
            t(lang, 'Dor/irritação no local da infusão', 'Dolor/irritación en el sitio de infusión')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Bloqueio AV completo', 'Bloqueo AV completo'),
            t(lang, 'Assistolia / Parada cardíaca', 'Asistolia / Paro cardíaco'),
            t(lang, 'Broncoespasmo', 'Broncoespasmo'),
            t(lang, 'Descompensação aguda de insuficiência cardíaca', 'Descompensación aguda de insuficiencia cardíaca')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: utilizar apenas se benefício superar risco. Monitorar bradicardia fetal e neonatal.',
              'Gestante: utilizar solo si el beneficio supera el riesgo. Monitorizar bradicardia fetal y neonatal.'
            ) : null,
            lactante ? t(lang,
              'Lactante: dados limitados. Utilizar com cautela.',
              'Lactante: datos limitados. Utilizar con precaución.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipotensão e bradicardia; titular lentamente mesmo em ambiente monitorizado.',
              'Anciano: mayor riesgo de hipotensión y bradicardia; titular lentamente incluso en ambiente monitorizado.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'USO EXCLUSIVO HOSPITALAR: requer monitorização cardíaca contínua (ECG, FC, PA invasiva ou não invasiva).',
              'USO EXCLUSIVO HOSPITALARIO: requiere monitorización cardíaca continua (ECG, FC, PA invasiva o no invasiva).'
            ),
            t(lang,
              'Meia-vida ~9 min: efeito reverte rapidamente ao suspender a infusão — vantagem em situações instáveis.',
              'Vida media ~9 min: el efecto revierte rápidamente al suspender la infusión — ventaja en situaciones inestables.'
            ),
            t(lang,
              'Interromper imediatamente se hipotensão importante, bradicardia grave, bloqueio AV ou sinais de choque.',
              'Interrumpir inmediatamente si hipotensión importante, bradicardia grave, bloqueo AV o signos de shock.'
            ),
            t(lang,
              'Interações graves: verapamil e diltiazem — risco elevado de choque e bloqueio AV.',
              'Interacciones graves: verapamilo y diltiazem — riesgo elevado de shock y bloqueo AV.'
            )
          ],

          ref: 'ESC Atrial Fibrillation Guidelines · AHA/ACC Arrhythmia Guidelines · ESC Aortic Disease Guidelines · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Esmolol é metabolizado por esterases eritrocitárias — independente da função renal e hepática. Nenhum ajuste renal necessário.',
              'Esmolol se metaboliza por esterasas eritrocitarias — independiente de la función renal y hepática. No se requiere ajuste renal.'
            ),
            fgMaior50: {
              vo:        null,
              ev:        { dose: '50–200 mcg/kg/min', intervalo: 'Infusão contínua IV', doseMaxima: '300 mcg/kg/min', unidade: 'mcg/kg/min' },
              pediatrica: null,
              obs:       t(lang, 'Sem ajuste necessário. Dose e velocidade conforme resposta clínica.', 'Sin ajuste necesario. Dosis y velocidad según respuesta clínica.')
            },
            fg30a50: {
              vo:        null,
              ev:        { dose: '50–200 mcg/kg/min', intervalo: 'Infusão contínua IV', doseMaxima: '300 mcg/kg/min', unidade: 'mcg/kg/min' },
              pediatrica: null,
              obs:       t(lang, 'Sem ajuste renal necessário. Metabolismo por esterases eritrocitárias.', 'Sin ajuste renal necesario. Metabolismo por esterasas eritrocitarias.')
            },
            fg10a30: {
              vo:        null,
              ev:        { dose: '50–200 mcg/kg/min', intervalo: 'Infusão contínua IV', doseMaxima: '300 mcg/kg/min', unidade: 'mcg/kg/min' },
              pediatrica: null,
              obs:       t(lang, 'Sem ajuste renal específico. Monitorização hemodinâmica intensiva habitual em DRC grave.', 'Sin ajuste renal específico. Monitorización hemodinámica intensiva habitual en ERC grave.')
            },
            fgMenor10: {
              vo:        null,
              ev:        { dose: '50–200 mcg/kg/min', intervalo: 'Infusão contínua IV', doseMaxima: '300 mcg/kg/min', unidade: 'mcg/kg/min' },
              pediatrica: null,
              obs:       t(lang,
                'Sem ajuste renal obrigatório. Em DRC muito grave/anúria, titular com cautela adicional considerando fragilidade hemodinâmica.',
                'Sin ajuste renal obligatorio. En ERC muy grave/anuria, titular con precaución adicional considerando fragilidad hemodinámica.'
              )
            },
            hemodialise: {
              vo:        null,
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Esmolol não é removido por hemodiálise de forma significativa. Meia-vida ultracurta dispensa ajuste pós-HD.',
                'Esmolol no se elimina significativamente por hemodiálisis. La vida media ultracorta elimina la necesidad de ajuste post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           false,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            pregnancyCaution:        true,
            infusionDrug:            true,
            warning: t(lang,
              'Betabloqueador intravenoso de ação ultracurta. Exige monitorização contínua. Pode provocar colapso hemodinâmico rapidamente — meia-vida ~9 min permite reversão rápida.',
              'Betabloqueante intravenoso de acción ultracorta. Exige monitorización continua. Puede provocar colapso hemodinámico rápidamente — vida media ~9 min permite reversión rápida.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Atrial Fibrillation Guidelines',
              'AHA/ACC Arrhythmia Guidelines',
              'ESC Aortic Disease Guidelines',
              'Goodman & Gilman',
              'Lexicomp',
              'FDA label'
            ],
            note: t(lang,
              'Único betabloqueador EV de meia-vida ultracurta (~9 min). Metabolizado por esterases eritrocitárias — independente de rim e fígado. Uso exclusivo em UTI, emergência e centro cirúrgico.',
              'Único betabloqueante IV de vida media ultracorta (~9 min). Metabolizado por esterasas eritrocitarias — independiente de riñón e hígado. Uso exclusivo en UCI, emergencia y quirófano.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       19. NADOLOL
       Não seletivo · Longa duração · Renal ~75% · Hepatologia/Baveno VII
    ══════════════════════════════════════════════════════════════ */
    nadolol: {
      name:     { pt: 'Nadolol', es: 'Nadolol' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#7C2D12',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade || 0);

        const adultoPadrao = t(lang,
          '20–40 mg VO 1x/dia; manutenção 40–160 mg/dia; máx 240 mg/dia em algumas indicações',
          '20–40 mg VO 1 vez/día; mantenimiento 40–160 mg/día; máx 240 mg/día en algunas indicaciones'
        );

        const adultoGrave = t(lang,
          'Sem formulação EV padrão. Uso exclusivo VO. Em hipertensão portal: titular para FC repouso ~55–60 bpm sem causar hipotensão.',
          'Sin formulación IV estándar. Uso exclusivo VO. En hipertensión portal: titular para FC reposo ~55–60 lpm sin causar hipotensión.'
        );

        return {
          name:  t(lang, 'Nadolol', 'Nadolol'),
          class: t(lang, 'Betabloqueador não seletivo de longa duração', 'Betabloqueante no selectivo de larga duración'),

          commercialNames: {
            br: ['Corgard', 'Nadolol genérico'],
            ar: ['Nadolol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos 40 mg', 'Comprimidos 40 mg'),
            t(lang, 'Comprimidos 80 mg', 'Comprimidos 80 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang, 'Não estabelecida rotineiramente em pediatria', 'No establecida de forma rutinaria en pediatría'),
            pediatricaGrave:  null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:    null,
            grave:     null,
            meningite: null,
            doseMaxima: t(lang, '240 mg/dia (em algumas indicações); titular por FC e PA', '240 mg/día (en algunas indicaciones); titular por FC y PA')
          },

          therapeuticRange: t(lang,
            'FC alvo ~55–60 bpm em hipertensão portal; controle pressórico e de angina nas demais indicações',
            'FC objetivo ~55–60 lpm en hipertensión portal; control tensional y de angina en las demás indicaciones'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang, 'Administrar 1x/dia, preferencialmente pela manhã.', 'Administrar 1 vez/día, preferiblemente por la mañana.'),

          commonAdverseEffects: [
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Bradicardia', 'Bradicardia'),
            t(lang, 'Hipotensão', 'Hipotensión'),
            t(lang, 'Extremidades frias', 'Extremidades frías'),
            t(lang, 'Náuseas', 'Náuseas'),
            t(lang, 'Disfunção sexual', 'Disfunción sexual')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Broncoespasmo', 'Broncoespasmo'),
            t(lang, 'Bloqueio AV', 'Bloqueo AV'),
            t(lang, 'Bradicardia grave', 'Bradicardia grave'),
            t(lang, 'Choque cardiogênico', 'Shock cardiogénico'),
            t(lang, 'Piora de insuficiência cardíaca', 'Empeoramiento de insuficiencia cardíaca'),
            t(lang, 'Hipotensão grave em cirrose avançada', 'Hipotensión grave en cirrosis avanzada'),
            t(lang, 'Piora de função renal em pacientes cirróticos vulneráveis', 'Deterioro de función renal en pacientes cirróticos vulnerables')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: pode associar-se a restrição de crescimento fetal, bradicardia e hipoglicemia neonatal. Usar apenas se benefício superar risco.',
              'Gestante: puede asociarse a restricción del crecimiento fetal, bradicardia e hipoglucemia neonatal. Usar solo si el beneficio supera el riesgo.'
            ) : null,
            lactante ? t(lang,
              'Lactante: nadolol pode acumular mais no lactente por eliminação renal. Observar bradicardia, sonolência, má alimentação ou hipoglicemia.',
              'Lactante: nadolol puede acumularse más en el lactante por eliminación renal. Observar bradicardia, somnolencia, mala alimentación o hipoglucemia.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: iniciar com dose baixa e titular lentamente — especialmente se DRC, cirrose, risco de quedas ou hipotensão ortostática.',
              'Anciano: iniciar con dosis baja y titular lentamente — especialmente si ERC, cirrosis, riesgo de caídas o hipotensión ortostática.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Não suspender abruptamente — risco de angina rebote e eventos coronarianos.',
              'No suspender abruptamente — riesgo de angina de rebote y eventos coronarios.'
            ),
            t(lang,
              'Betabloqueador NÃO seletivo: contraindicado em asma grave e broncoespasmo ativo.',
              'Betabloqueante NO selectivo: contraindicado en asma grave y broncoespasmo activo.'
            ),
            t(lang,
              'Eliminação renal (~75%): ajuste obrigatório em ClCr < 35 mL/min com aumento do intervalo.',
              'Eliminación renal (~75%): ajuste obligatorio con ClCr < 35 mL/min con aumento del intervalo.'
            ),
            t(lang,
              'Cirrose avançada (cirrhosisCaution): titular com extrema cautela por risco de hipotensão, disfunção renal e descompensação. Baveno VII: betabloqueador não seletivo de referência para profilaxia de sangramento por varizes.',
              'Cirrosis avanzada (cirrhosisCaution): titular con extrema precaución por riesgo de hipotensión, disfunción renal y descompensación. Baveno VII: betabloqueante no selectivo de referencia para profilaxis de sangrado por várices.'
            ),
            fg < 35 ? t(lang,
              'AJUSTE RENAL NECESSÁRIO: ClCr < 35 mL/min — aumentar intervalo conforme grau de DRC.',
              'AJUSTE RENAL NECESARIO: ClCr < 35 mL/min — aumentar intervalo según grado de ERC.'
            ) : null
          ].filter(Boolean),

          ref: 'ESC Hypertension Guidelines · AASLD Portal Hypertension Guidance · Baveno VII Consensus · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 35,
            message: t(lang,
              'Nadolol é eliminado predominantemente pelos rins (~75%). Ajuste por aumento de intervalo em ClCr < 35 mL/min.',
              'Nadolol se elimina predominantemente por vía renal (~75%). Ajuste por aumento de intervalo con ClCr < 35 mL/min.'
            ),
            fgMaior50: {
              vo:        { dose: '40–160 mg', intervalo: 'a cada 24h', doseMaxima: '240 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang, 'Dose e intervalo habituais. Sem ajuste renal necessário.', 'Dosis e intervalo habituales. Sin ajuste renal necesario.')
            },
            fg30a50: {
              vo:        { dose: '40–80 mg', intervalo: 'a cada 24–36h', doseMaxima: '80 mg/36h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr 31–50 mL/min: intervalo a cada 24–36h. Monitorar FC, PA e sintomas de acúmulo.',
                'ClCr 31–50 mL/min: intervalo cada 24–36h. Monitorizar FC, PA y síntomas de acumulación.'
              )
            },
            fg10a30: {
              vo:        { dose: '20–40 mg', intervalo: 'a cada 24–48h', doseMaxima: '40 mg/48h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr 10–30 mL/min: intervalo a cada 24–48h. Risco elevado de bradicardia e hipotensão por acúmulo.',
                'ClCr 10–30 mL/min: intervalo cada 24–48h. Riesgo elevado de bradicardia e hipotensión por acumulación.'
              )
            },
            fgMenor10: {
              vo:        { dose: '20–40 mg', intervalo: 'a cada 40–60h', doseMaxima: '40 mg/60h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'ClCr < 10 mL/min ou anúria: intervalo muito prolongado (40–60h). Avaliar alternativas terapêuticas.',
                'ClCr < 10 mL/min o anuria: intervalo muy prolongado (40–60h). Evaluar alternativas terapéuticas.'
              )
            },
            hemodialise: {
              vo:        { dose: '20–40 mg', intervalo: 'Pós-HD (em dias de diálise)', doseMaxima: '40 mg/sessão HD', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs:       t(lang,
                'Nadolol é parcialmente removido por hemodiálise. Administrar dose após cada sessão de HD e avaliar resposta clínica.',
                'Nadolol es parcialmente removido por hemodiálisis. Administrar dosis después de cada sesión de HD y evaluar respuesta clínica.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            bronchospasmRisk:        true,
            cirrhosisCaution:        true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Nadolol é não seletivo e de eliminação predominantemente renal. Atenção especial em asma/DPOC, DRC (ajuste de intervalo em ClCr < 35), bradicardia e cirrose avançada com hipotensão ou disfunção renal.',
              'Nadolol es no selectivo y de eliminación predominantemente renal. Atención especial en asma/EPOC, ERC (ajuste de intervalo con ClCr < 35), bradicardia y cirrosis avanzada con hipotensión o disfunción renal.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines',
              'AASLD Portal Hypertension Guidance',
              'Baveno VII Consensus',
              'Goodman & Gilman',
              'Lexicomp',
              'FDA label'
            ],
            note: t(lang,
              'Betabloqueador não seletivo de longa duração, relevante em cardiologia e hepatologia. Eliminação renal ~75%; ajuste de intervalo em DRC. Referência Baveno VII para profilaxia de sangramento por varizes esofágicas.',
              'Betabloqueante no selectivo de larga duración, relevante en cardiología y hepatología. Eliminación renal ~75%; ajuste de intervalo en ERC. Referencia Baveno VII para profilaxis de sangrado por várices esofágicas.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 5 (Betabloqueadores Adicionais) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 6 — ANTIARRÍTMICOS
     sotalol
     Classe III + betabloqueador não seletivo · QT-critical · Renal
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       20. SOTALOL
       Antiarrítmico Classe III + betabloqueador não seletivo
       Eliminação renal quase total · Qt-risk crítico · CredibleMeds
    ══════════════════════════════════════════════════════════════ */
    sotalol: {
      name:     { pt: 'Sotalol', es: 'Sotalol' },
      category: 'cardio',
      icon:     '⚡',
      color:    'rgba(234,179,8,0.13)',
      colorTxt: '#78350F',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade || 0);
        const qtc      = Number(paciente.qtc   || 0);
        const k        = Number(paciente.potassio || 0);

        /* ── Dose adulto padrão ── */
        const adultoPadrao = t(lang,
          'Iniciar com 80 mg VO 12/12h; manutenção 80–160 mg 12/12h; máx 320 mg/dia em casos selecionados com monitorização especializada.',
          'Iniciar con 80 mg VO cada 12h; mantenimiento 80–160 mg cada 12h; máx 320 mg/día en casos seleccionados con monitorización especializada.'
        );

        /* ── Dose adulto grave / ajuste renal ── */
        const adultoGrave = fg < 40
          ? t(lang,
              'ClCr < 40 mL/min: 80 mg VO 1x/dia (24/24h). Monitorização obrigatória de QTc, FC e eletrólitos.',
              'ClCr < 40 mL/min: 80 mg VO 1 vez/día (cada 24h). Monitorización obligatoria de QTc, FC y electrolitos.'
            )
          : t(lang,
              'Iniciar com dose mínima (80 mg 12/12h) e titular conforme QTc, FC e resposta clínica.',
              'Iniciar con dosis mínima (80 mg cada 12h) y titular según QTc, FC y respuesta clínica.'
            );

        /* ── Alertas dinâmicos ── */
        const alertasDinamicos = [
          t(lang,
            'NÃO INICIAR sem ECG basal com QTc < 450 ms, K⁺ ≥ 4,0 mEq/L e Mg²⁺ ≥ 2,0 mg/dL.',
            'NO INICIAR sin ECG basal con QTc < 450 ms, K⁺ ≥ 4,0 mEq/L y Mg²⁺ ≥ 2,0 mg/dL.'
          ),
          t(lang,
            'Não suspender abruptamente — risco de angina rebote e arritmia de rebote.',
            'No suspender abruptamente — riesgo de angina de rebote y arritmia de rebote.'
          ),
          t(lang,
            'Interações graves: amiodarona, dofetilida, quinidina, macrolídeos, fluoroquinolonas, antipsicóticos, metadona — risco de Torsades de Pointes.',
            'Interacciones graves: amiodarona, dofetilida, quinidina, macrólidos, fluoroquinolonas, antipsicóticos, metadona — riesgo de Torsades de Pointes.'
          ),
          t(lang,
            'Betabloqueador NÃO seletivo: contraindicado em asma grave e broncoespasmo ativo.',
            'Betabloqueante NO selectivo: contraindicado en asma grave y broncoespasmo activo.'
          ),
          qtc > 450 ? t(lang,
            'ALERTA: QTc atual > 450 ms — CONTRAINDICAÇÃO para início ou manutenção do sotalol. Avaliar imediatamente.',
            'ALERTA: QTc actual > 450 ms — CONTRAINDICACIÓN para inicio o mantenimiento del sotalol. Evaluar inmediatamente.'
          ) : null,
          k > 0 && k < 4.0 ? t(lang,
            'ALERTA: Potássio < 4,0 mEq/L — corrigir hipocalemia ANTES de iniciar ou continuar sotalol.',
            'ALERTA: Potasio < 4,0 mEq/L — corregir hipocalemia ANTES de iniciar o continuar sotalol.'
          ) : null,
          fg < 40 ? t(lang,
            'AJUSTE RENAL: ClCr < 40 mL/min — reduzir para 80 mg 1x/dia (24/24h). ClCr < 10 mL/min = CONTRAINDICADO.',
            'AJUSTE RENAL: ClCr < 40 mL/min — reducir a 80 mg 1 vez/día (cada 24h). ClCr < 10 mL/min = CONTRAINDICADO.'
          ) : null,
          fg < 10 ? t(lang,
            'CONTRAINDICADO: ClCr < 10 mL/min — eliminação renal quase total; risco de acúmulo fatal com Torsades.',
            'CONTRAINDICADO: ClCr < 10 mL/min — eliminación renal casi total; riesgo de acumulación fatal con Torsades.'
          ) : null,
          gestante ? t(lang,
            'Gestante: utilizar apenas se benefício superar risco. Monitorar bradicardia fetal e neonatal.',
            'Gestante: utilizar solo si el beneficio supera el riesgo. Monitorizar bradicardia fetal y neonatal.'
          ) : null,
          lactante ? t(lang,
            'Lactante: passa para o leite materno. Monitorar bradicardia e sonolência no lactente.',
            'Lactante: pasa a la leche materna. Monitorizar bradicardia y somnolencia en el lactante.'
          ) : null,
          idade >= 65 ? t(lang,
            'Idoso: maior risco de QT prolongado, Torsades e acúmulo por redução fisiológica da função renal. Iniciar com menor dose e monitorizar rigorosamente.',
            'Anciano: mayor riesgo de QT prolongado, Torsades y acumulación por reducción fisiológica de la función renal. Iniciar con menor dosis y monitorizar rigurosamente.'
          ) : null
        ].filter(Boolean);

        return {
          name:  t(lang, 'Sotalol', 'Sotalol'),
          class: t(lang,
            'Antiarrítmico Classe III com atividade betabloqueadora não seletiva',
            'Antiarrítmico Clase III con actividad betabloqueante no selectiva'
          ),

          commercialNames: {
            br: ['Sotalol genérico', 'Sotacor'],
            ar: ['Sotalol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos 80 mg', 'Comprimidos 80 mg'),
            t(lang, 'Comprimidos 120 mg', 'Comprimidos 120 mg'),
            t(lang, 'Comprimidos 160 mg', 'Comprimidos 160 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Não estabelecido rotineiramente. Uso pediátrico requer avaliação especializada de eletrofisiologia.',
              'No establecido de forma rutinaria. El uso pediátrico requiere evaluación especializada de electrofisiología.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '320 mg/dia em casos selecionados com monitorização especializada; 80 mg/dia em ClCr < 40 mL/min',
              '320 mg/día en casos seleccionados con monitorización especializada; 80 mg/día en ClCr < 40 mL/min'
            )
          },

          therapeuticRange: t(lang,
            'Manutenção do ritmo sinusal; supressão de arritmias ventriculares; QTc < 500 ms durante tratamento (idealmente < 480 ms)',
            'Mantenimiento del ritmo sinusal; supresión de arritmias ventriculares; QTc < 500 ms durante tratamiento (idealmente < 480 ms)'
          ),

          dilution: t(lang,
            'Uso exclusivo via oral. Comprimidos não devem ser partidos ou mastigados.',
            'Uso exclusivo vía oral. Los comprimidos no deben partirse ni masticarse.'
          ),
          speed: t(lang,
            'Ajustar gradualmente a cada ≥ 3 dias, sempre com ECG para monitorar QTc antes de cada aumento de dose.',
            'Ajustar gradualmente cada ≥ 3 días, siempre con ECG para monitorizar QTc antes de cada aumento de dosis.'
          ),

          commonAdverseEffects: [
            t(lang, 'Bradicardia',  'Bradicardia'),
            t(lang, 'Fadiga',       'Fatiga'),
            t(lang, 'Tontura',      'Mareos'),
            t(lang, 'Hipotensão',   'Hipotensión'),
            t(lang, 'Fraqueza',     'Debilidad'),
            t(lang, 'Dispneia',     'Disnea'),
            t(lang, 'Náuseas',      'Náuseas')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Torsades de Pointes',         'Torsades de Pointes'),
            t(lang, 'Morte súbita arrítmica',       'Muerte súbita arrítmica'),
            t(lang, 'QT prolongado grave',          'QT prolongado grave'),
            t(lang, 'Bloqueio AV completo',         'Bloqueo AV completo'),
            t(lang, 'Assistolia / Parada cardíaca', 'Asistolia / Paro cardíaco'),
            t(lang, 'Choque cardiogênico',          'Shock cardiogénico'),
            t(lang, 'Broncoespasmo',                'Broncoespasmo')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: utilizar apenas se benefício superar risco. Monitorar bradicardia fetal e neonatal.',
              'Gestante: utilizar solo si el beneficio supera el riesgo. Monitorizar bradicardia fetal y neonatal.'
            ) : null,
            lactante ? t(lang,
              'Lactante: passa para o leite materno. Monitorar bradicardia e sonolência no lactente.',
              'Lactante: pasa a la leche materna. Monitorizar bradicardia y somnolencia en el lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de QT prolongado, Torsades e acúmulo por redução fisiológica da função renal. Iniciar com menor dose e monitorizar rigorosamente.',
              'Anciano: mayor riesgo de QT prolongado, Torsades y acumulación por reducción fisiológica de la función renal. Iniciar con menor dosis y monitorizar rigurosamente.'
            ) : null
          ].filter(Boolean),

          alerts: alertasDinamicos,

          ref: 'ESC Atrial Fibrillation Guidelines · ESC Ventricular Arrhythmia Guidelines · AHA/ACC/HRS Arrhythmia Guidelines · CredibleMeds · Lexicomp · FDA label',

          /* ── renalDose V2 ─────────────────────────────────────────
             Sotalol: eliminação renal quase total (>80–90%)
             Threshold formal: ClCr < 40 mL/min → 24h
                               ClCr < 10 mL/min → CONTRAINDICADO
             Fontes: FDA Betapace AF label · Lexicomp 2026 · UpToDate 2025
          ─────────────────────────────────────────────────────────── */
          renalDose: {
            version: 2,
            requiresAdjustment: fg < 40,

            message: fg < 10
              ? t(lang,
                  'ClCr < 10 mL/min: CONTRAINDICADO. Risco fatal de acúmulo com Torsades de Pointes.',
                  'ClCr < 10 mL/min: CONTRAINDICADO. Riesgo fatal de acumulación con Torsades de Pointes.'
                )
              : fg < 40
              ? t(lang,
                  'Sotalol é eliminado quase totalmente pelos rins. ClCr 10–40 mL/min: reduzir para 80 mg 1x/dia (24/24h) com monitorização rigorosa de QTc.',
                  'Sotalol se elimina casi totalmente por vía renal. ClCr 10–40 mL/min: reducir a 80 mg 1 vez/día (cada 24h) con monitorización rigurosa de QTc.'
                )
              : t(lang,
                  'Sem ajuste renal para ClCr ≥ 40 mL/min. Iniciar com 80 mg 12/12h e titular conforme QTc, FC e resposta.',
                  'Sin ajuste renal para ClCr ≥ 40 mL/min. Iniciar con 80 mg cada 12h y titular según QTc, FC y respuesta.'
                ),

            fgMaior50: {
              vo:        { dose: '80–160 mg', intervalo: '12/12h', doseMaxima: '320 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs: t(lang,
                'Dose e intervalo habituais. Titular com incrementos de 80 mg a cada ≥ 3 dias com ECG seriado.',
                'Dosis e intervalo habituales. Titular con incrementos de 80 mg cada ≥ 3 días con ECG seriado.'
              )
            },

            fg30a50: {
              vo:        { dose: '80 mg', intervalo: '12/12h (cautela)', doseMaxima: '160 mg/dia', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: manter 80 mg 12/12h com monitorização mais frequente de QTc e eletrólitos. Evitar aumentar dose sem avaliação especializada.',
                'ClCr 30–50 mL/min: mantener 80 mg cada 12h con monitorización más frecuente de QTc y electrolitos. Evitar aumentar dosis sin evaluación especializada.'
              )
            },

            fg10a30: {
              vo:        { dose: '80 mg', intervalo: 'a cada 24h', doseMaxima: '80 mg/24h', unidade: 'mg' },
              ev:        null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 10–30 mL/min: reduzir intervalo para 24/24h (1x/dia). Monitorização cardíaca e de QTc obrigatória. Considerar internação para início.',
                'ClCr 10–30 mL/min: reducir intervalo a cada 24h (1 vez/día). Monitorización cardíaca y de QTc obligatoria. Considerar hospitalización para inicio.'
              )
            },

            fgMenor10: {
              vo:        null,
              ev:        null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min: CONTRAINDICADO. Risco de acúmulo fatal com Torsades de Pointes e parada cardíaca.',
                'ClCr < 10 mL/min: CONTRAINDICADO. Riesgo de acumulación fatal con Torsades de Pointes y paro cardíaco.'
              )
            },

            hemodialise: {
              vo:        null,
              ev:        null,
              pediatrica: null,
              obs: t(lang,
                'Sotalol é removido por hemodiálise. Porém, em pacientes em hemodiálise, o risco de arritmia por acúmulo e desequilíbrio eletrolítico é muito alto. Uso deve ser evitado ou feito apenas sob supervisão de eletrofisiologista.',
                'Sotalol es removido por hemodiálisis. Sin embargo, en pacientes en hemodiálisis, el riesgo de arritmia por acumulación y desequilibrio electrolítico es muy alto. Debe evitarse o usarse solo bajo supervisión de electrofisiólogo.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  true,
            torsadesRisk:            true,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            bronchospasmRisk:        true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Sotalol é um dos fármacos cardiovasculares com MAIOR risco de Torsades de Pointes. Nunca iniciar sem ECG (QTc < 450 ms), K⁺ ≥ 4,0 mEq/L, Mg²⁺ ≥ 2,0 mg/dL e função renal avaliada. CONTRAINDICADO em ClCr < 10 mL/min.',
              'Sotalol es uno de los fármacos cardiovasculares con MAYOR riesgo de Torsades de Pointes. Nunca iniciar sin ECG (QTc < 450 ms), K⁺ ≥ 4,0 mEq/L, Mg²⁺ ≥ 2,0 mg/dL y función renal evaluada. CONTRAINDICADO en ClCr < 10 mL/min.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Atrial Fibrillation Guidelines 2020/2024',
              'ESC Ventricular Arrhythmia Guidelines 2022',
              'AHA/ACC/HRS Arrhythmia Guidelines 2023',
              'CredibleMeds QTDrugs List',
              'FDA Betapace AF label',
              'Lexicomp 2026',
              'UpToDate 2025'
            ],
            note: t(lang,
              'Antiarrítmico Classe III de alto risco com ação betabloqueadora não seletiva adicional. Eliminação renal quase total (~90%) — ajuste obrigatório em ClCr < 40 mL/min; contraindicado em ClCr < 10 mL/min. QTc, K⁺ e Mg²⁺ devem ser avaliados antes de cada dose e a cada titulação.',
              'Antiarrítmico Clase III de alto riesgo con acción betabloqueante no selectiva adicional. Eliminación renal casi total (~90%) — ajuste obligatorio en ClCr < 40 mL/min; contraindicado en ClCr < 10 mL/min. QTc, K⁺ y Mg²⁺ deben evaluarse antes de cada dosis y en cada titulación.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 6 (Antiarrítmicos: sotalol) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 7 — BETABLOQUEADOR VASODILATADOR + BRADICARDIZANTE
     labetalol · ivabradina
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       21. LABETALOL
       Betabloqueador não seletivo + bloqueio alfa-1
       Emergência hipertensiva · AVC · Dissecção de aorta · Obstetrícia
    ══════════════════════════════════════════════════════════════ */
    labetalol: {
      name:     { pt: 'Labetalol', es: 'Labetalol' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(239,68,68,0.13)',
      colorTxt: '#7C2D12',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const peso     = Number(paciente.peso  || 70);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);

        const adultoPadrao = t(lang,
          'VO: 100 mg 12/12h; manutenção 200–400 mg 12/12h; máx 2400 mg/dia.',
          'VO: 100 mg cada 12h; mantenimiento 200–400 mg cada 12h; máx 2400 mg/día.'
        );

        const adultoGrave = t(lang,
          'Emergência IV: bólus 20 mg lento em 2 min; repetir 40–80 mg a cada 10 min conforme PA (máx 300 mg total). Infusão IV: 0,5–2 mg/min. Monitorização contínua obrigatória.',
          'Emergencia IV: bolo 20 mg lento en 2 min; repetir 40–80 mg cada 10 min según PA (máx 300 mg total). Infusión IV: 0,5–2 mg/min. Monitorización continua obligatoria.'
        );

        return {
          name:  t(lang, 'Labetalol', 'Labetalol'),
          class: t(lang,
            'Betabloqueador não seletivo com bloqueio alfa-1 (α/β = 1:3 VO, 1:7 IV)',
            'Betabloqueante no selectivo con bloqueo alfa-1 (α/β = 1:3 VO, 1:7 IV)'
          ),

          commercialNames: {
            br: ['Trandate', 'Labetalol genérico'],
            ar: ['Trandate', 'Labetalol genérico']
          },

          presentation: [
            t(lang, 'Comprimidos 100 mg, 200 mg, 300 mg', 'Comprimidos 100 mg, 200 mg, 300 mg'),
            t(lang, 'Ampolas IV 5 mg/mL (para uso hospitalar)', 'Ampollas IV 5 mg/mL (para uso hospitalario)')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Não estabelecido rotineiramente. Uso pediátrico requer avaliação especializada.',
              'No establecido de forma rutinaria. El uso pediátrico requiere evaluación especializada.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      t(lang, '0,3–1 mg/kg IV (máx 20 mg/dose); infusão 0,5–2 mg/min', '0,3–1 mg/kg IV (máx 20 mg/dosis); infusión 0,5–2 mg/min'),
            meningite:  null,
            doseMaxima: t(lang, '2400 mg/dia VO; 300 mg total IV em bólus fracionados', '2400 mg/día VO; 300 mg total IV en bolos fraccionados')
          },

          therapeuticRange: t(lang,
            'Redução gradual e controlada da PA em emergências; FC > 55 bpm; evitar queda brusca de PA',
            'Reducción gradual y controlada de la PA en emergencias; FC > 55 lpm; evitar caída brusca de PA'
          ),

          dilution: t(lang,
            'IV: diluir em SF 0,9% ou SG 5% para concentração de 1 mg/mL. Uso oral: comprimidos, sem diluição.',
            'IV: diluir en SF 0,9% o SG 5% para concentración de 1 mg/mL. Uso oral: comprimidos, sin dilución.'
          ),
          speed: t(lang,
            'Infusão IV: iniciar 0,5–2 mg/min, ajustar conforme PA. Bólus: 20 mg em 2 min; aguardar resposta 10 min antes de repetir.',
            'Infusión IV: iniciar 0,5–2 mg/min, ajustar según PA. Bolo: 20 mg en 2 min; esperar respuesta 10 min antes de repetir.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipotensão',            'Hipotensión'),
            t(lang, 'Tontura',               'Mareos'),
            t(lang, 'Bradicardia',           'Bradicardia'),
            t(lang, 'Fadiga',                'Fatiga'),
            t(lang, 'Náuseas',               'Náuseas'),
            t(lang, 'Cefaleia',              'Cefalea'),
            t(lang, 'Hipotensão ortostática','Hipotensión ortostática')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Choque cardiogênico',                  'Shock cardiogénico'),
            t(lang, 'Bradicardia grave',                     'Bradicardia grave'),
            t(lang, 'Bloqueio AV completo',                  'Bloqueo AV completo'),
            t(lang, 'Broncoespasmo',                         'Broncoespasmo'),
            t(lang, 'Hepatotoxicidade grave (rara)',          'Hepatotoxicidad grave (rara)'),
            t(lang, 'Descompensação de insuficiência cardíaca','Descompensación de insuficiencia cardíaca')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: um dos anti-hipertensivos preferidos na gestação. Amplamente usado em pré-eclâmpsia, eclâmpsia e hipertensão gestacional.',
              'Gestante: uno de los antihipertensivos preferidos durante el embarazo. Ampliamente utilizado en preeclampsia, eclampsia e hipertensión gestacional.'
            ) : null,
            lactante ? t(lang,
              'Lactante: compatível com lactação na maioria dos casos. Monitorar bradicardia ou sonolência no lactente.',
              'Lactante: compatible con lactancia en la mayoría de los casos. Monitorizar bradicardia o somnolencia en el lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipotensão ortostática, quedas e bradicardia. Titular lentamente.',
              'Anciano: mayor riesgo de hipotensión ortostática, caídas y bradicardia. Titular lentamente.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Não suspender abruptamente — risco de angina rebote e rebound hipertensivo.',
              'No suspender abruptamente — riesgo de angina de rebote y rebote hipertensivo.'
            ),
            t(lang,
              'Betabloqueador NÃO seletivo: contraindicado em asma grave e broncoespasmo ativo.',
              'Betabloqueante NO selectivo: contraindicado en asma grave y broncoespasmo activo.'
            ),
            t(lang,
              'Interações graves: verapamil e diltiazem — risco de choque e bloqueio AV.',
              'Interacciones graves: verapamilo y diltiazem — riesgo de shock y bloqueo AV.'
            ),
            t(lang,
              'Hepatotoxicidade rara descrita — monitorar enzimas hepáticas em uso prolongado.',
              'Hepatotoxicidad rara descrita — monitorizar enzimas hepáticas en uso prolongado.'
            ),
            t(lang,
              'Emergência hipertensiva, AVC, dissecção de aorta e obstetrícia: exige monitorização contínua de PA e FC.',
              'Emergencia hipertensiva, ACV, disección de aorta y obstetricia: exige monitorización continua de PA y FC.'
            )
          ],

          ref: 'ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · ESC Aortic Disease Guidelines · ACOG Hypertension in Pregnancy · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Labetalol é predominantemente metabolizado pelo fígado. Sem ajuste renal formal necessário para ClCr ≥ 10 mL/min.',
              'Labetalol es metabolizado predominantemente por el hígado. Sin ajuste renal formal necesario para ClCr ≥ 10 mL/min.'
            ),

            fgMaior50: {
              vo: { dose: '100–400 mg', intervalo: '12/12h', doseMaxima: '2400 mg/dia', unidade: 'mg' },
              ev: { dose: '20–80 mg bólus / 0,5–2 mg/min', intervalo: 'Infusão ou bólus conforme PA', doseMaxima: '300 mg IV total (bólus)', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang, 'Dose e intervalo habituais. Sem ajuste renal necessário.', 'Dosis e intervalo habituales. Sin ajuste renal necesario.')
            },
            fg30a50: {
              vo: { dose: '100–400 mg', intervalo: '12/12h', doseMaxima: '2400 mg/dia', unidade: 'mg' },
              ev: { dose: '20–80 mg bólus / 0,5–2 mg/min', intervalo: 'Infusão ou bólus conforme PA', doseMaxima: '300 mg IV total', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'Sem ajuste renal necessário. Monitorar tolerância hemodinâmica em pacientes frágeis.',
                'Sin ajuste renal necesario. Monitorizar tolerancia hemodinámica en pacientes frágiles.'
              )
            },
            fg10a30: {
              vo: { dose: '100–200 mg', intervalo: '12/12h', doseMaxima: '800 mg/dia (cautela)', unidade: 'mg' },
              ev: { dose: '20 mg bólus / 0,5–1 mg/min', intervalo: 'Com cautela conforme PA e FC', doseMaxima: 'Titular criteriosamente', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'DRC grave: sem ajuste renal formal, mas usar doses conservadoras e monitorar hemodinâmica rigorosamente.',
                'ERC grave: sin ajuste renal formal, pero usar dosis conservadoras y monitorizar hemodinámicamente de forma rigurosa.'
              )
            },
            fgMenor10: {
              vo: { dose: '100 mg', intervalo: '12/12h (avaliar individualmente)', doseMaxima: 'Titular conforme resposta', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC muito grave/anúria: metabolismo hepático predominante — sem ajuste renal obrigatório. Monitorização rigorosa de PA e FC.',
                'ERC muy grave/anuria: metabolismo hepático predominante — sin ajuste renal obligatorio. Monitorización rigurosa de PA y FC.'
              )
            },
            hemodialise: {
              vo: { dose: '100 mg', intervalo: '12/12h', doseMaxima: 'Individualizar', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Labetalol não é significativamente removido por hemodiálise. Sem suplementação pós-HD necessária.',
                'Labetalol no se elimina significativamente por hemodiálisis. No se requiere suplementación post-HD.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           false,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      true,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            bronchospasmRisk:        true,
            pregnancyCaution:        false,
            emergencyDrug:           true,
            warning: t(lang,
              'Fármaco de escolha em emergência hipertensiva, AVC, dissecção de aorta e obstetrícia. Exige monitorização rigorosa de PA e FC. Contraindicado em asma grave, broncoespasmo ativo e IC descompensada.',
              'Fármaco de elección en emergencia hipertensiva, ACV, disección de aorta y obstetricia. Exige monitorización rigurosa de PA y FC. Contraindicado en asma grave, broncoespasmo activo e IC descompensada.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'ESC Aortic Disease Guidelines 2024',
              'ACOG Hypertension in Pregnancy 2024',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'Betabloqueador com duplo mecanismo (α + β) — reduz PA sem taquicardia reflexa. Preferido em emergência hipertensiva neurológica, dissecção de aorta e gestação. Hepatotoxicidade rara documentada.',
              'Betabloqueante con doble mecanismo (α + β) — reduce PA sin taquicardia refleja. Preferido en emergencia hipertensiva neurológica, disección de aorta y gestación. Hepatotoxicidad rara documentada.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       22. IVABRADINA
       Inibidor If do nó sinusal · ICFEr + ritmo sinusal · SHIFT Trial
       Único bradicardizante sem efeito inotrópico negativo
    ══════════════════════════════════════════════════════════════ */
    ivabradina: {
      name:     { pt: 'Ivabradina', es: 'Ivabradina' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.13)',
      colorTxt: '#065F46',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const fc       = Number(paciente.fc     || 0);

        const adultoPadrao = t(lang,
          '5 mg VO 12/12h com alimentos; titular para 7,5 mg 12/12h após 2–4 semanas se FC > 60 bpm e tolerado.',
          '5 mg VO cada 12h con alimentos; titular a 7,5 mg cada 12h tras 2–4 semanas si FC > 60 lpm y tolerado.'
        );

        const adultoGrave = t(lang,
          'Idoso frágil ou FC limítrofe: iniciar 2,5 mg 12/12h e titular cuidadosamente. Objetivo FC repouso 50–60 bpm.',
          'Anciano frágil o FC limítrofe: iniciar 2,5 mg cada 12h y titular cuidadosamente. Objetivo FC reposo 50–60 lpm.'
        );

        return {
          name:  t(lang, 'Ivabradina', 'Ivabradina'),
          class: t(lang,
            'Bradicardizante seletivo — Inibidor da corrente If do nó sinusal (sem efeito inotrópico negativo)',
            'Bradicardizante selectivo — Inhibidor de la corriente If del nodo sinusal (sin efecto inotrópico negativo)'
          ),

          commercialNames: {
            br: ['Procoralan', 'Corlentor', 'Ivabradina genérica'],
            ar: ['Procoralan', 'Ivabradina genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 2,5 mg', 'Comprimidos 2,5 mg'),
            t(lang, 'Comprimidos 5 mg',   'Comprimidos 5 mg'),
            t(lang, 'Comprimidos 7,5 mg', 'Comprimidos 7,5 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Não estabelecido rotineiramente em adultos jovens/pediatria. Uso requer avaliação especializada.',
              'No establecido de forma rutinaria en adultos jóvenes/pediatría. El uso requiere evaluación especializada.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang, '7,5 mg VO 12/12h', '7,5 mg VO cada 12h')
          },

          therapeuticRange: t(lang,
            'FC repouso 50–60 bpm em ICFEr; redução de hospitalizações; manutenção de FEVE',
            'FC reposo 50–60 lpm en ICFEr; reducción de hospitalizaciones; mantenimiento de FEVI'
          ),

          dilution: t(lang, 'Uso exclusivo via oral com alimentos. Não diluir.', 'Uso exclusivo vía oral con alimentos. No diluir.'),
          speed:    t(lang,
            'Reavaliação de FC e tolerância após 2–4 semanas de cada ajuste. Não alterar dose sem nova avaliação clínica.',
            'Reevaluación de FC y tolerancia tras 2–4 semanas de cada ajuste. No modificar dosis sin nueva evaluación clínica.'
          ),

          commonAdverseEffects: [
            t(lang, 'Bradicardia',                          'Bradicardia'),
            t(lang, 'Fosfenos (fenômenos luminosos visuais)', 'Fosfenos (fenómenos luminosos visuales)'),
            t(lang, 'Tontura',                              'Mareos'),
            t(lang, 'Cefaleia',                             'Cefalea'),
            t(lang, 'Fadiga',                               'Fatiga'),
            t(lang, 'Visão borrada transitória',            'Visión borrosa transitoria')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bradicardia grave (FC < 40 bpm)', 'Bradicardia grave (FC < 40 lpm)'),
            t(lang, 'Síncope',                          'Síncope'),
            t(lang, 'Fibrilação atrial',                'Fibrilación auricular'),
            t(lang, 'Bloqueio sinoatrial',              'Bloqueo sinoauricular'),
            t(lang, 'Parada sinusal',                   'Parada sinusal')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: CONTRAINDICADA durante a gravidez — potencial toxicidade fetal demonstrada em animais.',
              'Gestante: CONTRAINDICADA durante el embarazo — potencial toxicidad fetal demostrada en animales.'
            ) : null,
            lactante ? t(lang,
              'Lactante: evitar durante lactação — ausência de dados robustos de segurança.',
              'Lactante: evitar durante lactancia — ausencia de datos robustos de seguridad.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de bradicardia sintomática. Iniciar com 2,5 mg 12/12h e monitorar FC cuidadosamente.',
              'Anciano: mayor riesgo de bradicardia sintomática. Iniciar con 2,5 mg cada 12h y monitorizar FC cuidadosamente.'
            ) : null,
            fc > 0 && fc < 70 ? t(lang,
              'FC basal < 70 bpm: atenção ao iniciar — risco aumentado de bradicardia sintomática. Considerar dose inicial de 2,5 mg.',
              'FC basal < 70 lpm: atención al iniciar — riesgo aumentado de bradicardia sintomática. Considerar dosis inicial de 2,5 mg.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'CONTRAINDICADA em FA/flutter — atua apenas em ritmo sinusal. Verificar ritmo antes de iniciar.',
              'CONTRAINDICADA en FA/flutter — actúa solo en ritmo sinusal. Verificar ritmo antes de iniciar.'
            ),
            t(lang,
              'CONTRAINDICADA com inibidores potentes do CYP3A4: cetoconazol, itraconazol, ritonavir, claritromicina — risco de bradicardia grave.',
              'CONTRAINDICADA con inhibidores potentes de CYP3A4: ketoconazol, itraconazol, ritonavir, claritromicina — riesgo de bradicardia grave.'
            ),
            t(lang,
              'Suspender se FC < 50 bpm, bradicardia sintomática, síncope ou aparecimento de FA.',
              'Suspender si FC < 50 lpm, bradicardia sintomática, síncope o aparición de FA.'
            ),
            t(lang,
              'Fosfenos (sensações luminosas transitórias) ocorrem em ~15% — tranquilizar paciente; geralmente reversíveis.',
              'Fosfenos (sensaciones luminosas transitorias) ocurren en ~15% — tranquilizar al paciente; generalmente reversibles.'
            ),
            t(lang,
              'Não substituir betabloqueador — ivabradina é complementar ou para intolerância ao betabloqueador.',
              'No sustituir al betabloqueante — la ivabradina es complementaria o para intolerancia al betabloqueante.'
            )
          ],

          ref: 'ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · SHIFT Trial · Goodman & Gilman · Lexicomp · EMA/FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Ivabradina é metabolizada pelo CYP3A4 hepático. Sem ajuste renal formal em IR leve/moderada. Cautela em IR grave (dados limitados).',
              'Ivabradina se metaboliza por CYP3A4 hepático. Sin ajuste renal formal en IR leve/moderada. Precaución en IR grave (datos limitados).'
            ),

            fgMaior50: {
              vo: { dose: '5–7,5 mg', intervalo: '12/12h', doseMaxima: '7,5 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose e intervalo habituais. Sem ajuste renal necessário.', 'Dosis e intervalo habituales. Sin ajuste renal necesario.')
            },
            fg30a50: {
              vo: { dose: '5 mg', intervalo: '12/12h', doseMaxima: '7,5 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR moderada: sem ajuste formal necessário. Monitorar FC e tolerância clínica.',
                'IR moderada: sin ajuste formal necesario. Monitorizar FC y tolerancia clínica.'
              )
            },
            fg10a30: {
              vo: { dose: '2,5–5 mg', intervalo: '12/12h (cautela)', doseMaxima: '5 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR grave: dados limitados — usar dose mínima e monitorar FC. Considerar risco-benefício.',
                'IR grave: datos limitados — usar dosis mínima y monitorizar FC. Considerar riesgo-beneficio.'
              )
            },
            fgMenor10: {
              vo: { dose: '2,5 mg', intervalo: '12/12h (avaliar individualmente)', doseMaxima: '2,5 mg 12/12h', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'IR muito grave: uso com cautela extrema — dados insuficientes. Monitoração rigorosa de FC obrigatória.',
                'IR muy grave: uso con extrema precaución — datos insuficientes. Monitorización rigurosa de FC obligatoria.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Ivabradina não é significativamente removida por hemodiálise. Metabolismo hepático predominante. Avaliar individualmente.',
                'Ivabradina no se elimina significativamente por hemodiálisis. Metabolismo hepático predominante. Evaluar individualmente.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           false,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         false,
            bradycardiaRisk:         true,
            avBlockRisk:             false,
            atrialFibrillationRisk:  true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Ivabradina só é eficaz em RITMO SINUSAL. Monitorar FC e aparecimento de FA durante tratamento. CONTRAINDICADA em FC < 60 bpm antes do início, FA ativa, hepatopatia grave e com inibidores potentes de CYP3A4.',
              'Ivabradina solo es eficaz en RITMO SINUSAL. Monitorizar FC y aparición de FA durante el tratamiento. CONTRAINDICADA con FC < 60 lpm antes del inicio, FA activa, hepatopatía grave e inhibidores potentes de CYP3A4.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'SHIFT Trial (Lancet 2010)',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'EMA/FDA label'
            ],
            note: t(lang,
              'Único bradicardizante seletivo do nó sinusal sem efeito inotrópico negativo. Indicado em ICFEr com ritmo sinusal e FC ≥ 70 bpm apesar de betabloqueador otimizado (SHIFT Trial). CONTRAINDICADO em FA — sem eficácia e risco de bradicardia paradoxal.',
              'Único bradicardizante selectivo del nodo sinusal sin efecto inotrópico negativo. Indicado en ICFEr con ritmo sinusal y FC ≥ 70 lpm a pesar de betabloqueante optimizado (SHIFT Trial). CONTRAINDICADO en FA — sin eficacia y riesgo de bradicardia paradójica.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 7 (Betabloqueador Vasodilatador + Bradicardizante: labetalol · ivabradina) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 8 — GLICOSÍDEO CARDÍACO
     digoxina
     Janela terapêutica estreita · Renal · Eletrólito-dependente
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       23. DIGOXINA
       Glicosídeo cardíaco · ICFEr + FA · Janela estreita
       Eliminação renal · Hipocalemia e hipomagnesemia = risco fatal
    ══════════════════════════════════════════════════════════════ */
    digoxina: {
      name:     { pt: 'Digoxina', es: 'Digoxina' },
      category: 'cardio',
      icon:     '⚠️',
      color:    'rgba(245,158,11,0.15)',
      colorTxt: '#78350F',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const peso     = Number(paciente.peso  || 70);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio   || 0);
        const mg       = Number(paciente.magnesio   || 0);
        const digLevel = Number(paciente.nivelDigoxina || 0);

        /* Dose base conforme função renal + perfil do paciente */
        const doseBase = (fg < 30 || idade >= 75 || peso < 50)
          ? '0,125 mg VO 1x/dia'
          : '0,125–0,25 mg VO 1x/dia';

        const adultoPadrao = t(lang,
          `${doseBase}. Ajustar conforme função renal, nível sérico (alvo 0,5–0,9 ng/mL em ICFEr) e resposta clínica.`,
          `${doseBase}. Ajustar según función renal, nivel sérico (objetivo 0,5–0,9 ng/mL en ICFEr) y respuesta clínica.`
        );

        const adultoGrave = t(lang,
          'Idoso, DRC ou baixo peso: iniciar com 0,0625–0,125 mg VO 1x/dia e titular lentamente com monitorização de nível sérico.',
          'Anciano, ERC o bajo peso: iniciar con 0,0625–0,125 mg VO 1 vez/día y titular lentamente con monitorización de nivel sérico.'
        );

        return {
          name:  t(lang, 'Digoxina', 'Digoxina'),
          class: t(lang, 'Glicosídeo cardíaco (inibidor da Na+/K+-ATPase)', 'Glucósido cardíaco (inhibidor de la Na+/K+-ATPasa)'),

          commercialNames: {
            br: ['Lanoxin', 'Digoxina genérica'],
            ar: ['Lanoxin', 'Digoxina genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 0,125 mg', 'Comprimidos 0,125 mg'),
            t(lang, 'Comprimidos 0,25 mg',  'Comprimidos 0,25 mg'),
            t(lang, 'Solução oral 0,05 mg/mL', 'Solución oral 0,05 mg/mL'),
            t(lang, 'Ampolas IV 0,25 mg/mL (para digitalização rápida hospitalar)', 'Ampollas IV 0,25 mg/mL (para digitalización rápida hospitalaria)')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Doses pediátricas estritamente por peso e função renal — consultar protocolo especializado.',
              'Dosis pediátricas estrictamente por peso y función renal — consultar protocolo especializado.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              'Individualizado: alvo sérico 0,5–0,9 ng/mL em ICFEr; evitar > 1,2 ng/mL salvo exceções',
              'Individualizado: objetivo sérico 0,5–0,9 ng/mL en ICFEr; evitar > 1,2 ng/mL salvo excepciones'
            )
          },

          therapeuticRange: t(lang,
            'Nível sérico alvo: 0,5–0,9 ng/mL em ICFEr · Colher nível sérico ≥ 6h após última dose · Evitar > 1,2 ng/mL',
            'Nivel sérico objetivo: 0,5–0,9 ng/mL en ICFEr · Obtener nivel sérico ≥ 6h tras última dosis · Evitar > 1,2 ng/mL'
          ),

          dilution: t(lang,
            'IV: diluir em 10x volume de SF 0,9% ou SG 5%. Administrar lentamente em 10–20 min. Oral: sem diluição.',
            'IV: diluir en 10x volumen de SF 0,9% o SG 5%. Administrar lentamente en 10–20 min. Oral: sin dilución.'
          ),
          speed: t(lang,
            'VO: dose única diária, no mesmo horário. IV (digitalização hospitalar): fracionada. Coletar nível sérico ≥ 6h após dose.',
            'VO: dosis única diaria, en el mismo horario. IV (digitalización hospitalaria): fraccionada. Obtener nivel sérico ≥ 6h tras dosis.'
          ),

          commonAdverseEffects: [
            t(lang, 'Náuseas',    'Náuseas'),
            t(lang, 'Vômitos',    'Vómitos'),
            t(lang, 'Anorexia',   'Anorexia'),
            t(lang, 'Diarreia',   'Diarrea'),
            t(lang, 'Fadiga',     'Fatiga'),
            t(lang, 'Fraqueza',   'Debilidad'),
            t(lang, 'Tontura',    'Mareos')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Intoxicação digitálica (visão amarelada, halos, confusão)', 'Intoxicación digitálica (visión amarillenta, halos, confusión)'),
            t(lang, 'Bloqueio AV completo',       'Bloqueo AV completo'),
            t(lang, 'Bradicardia grave',           'Bradicardia grave'),
            t(lang, 'Taquicardia ventricular',     'Taquicardia ventricular'),
            t(lang, 'Fibrilação ventricular',      'Fibrilación ventricular'),
            t(lang, 'Parada cardíaca',             'Paro cardíaco'),
            t(lang, 'Arritmias fatais',            'Arritmias fatales')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: pode ser utilizada em situações selecionadas sob supervisão especializada.',
              'Gestante: puede utilizarse en situaciones seleccionadas bajo supervisión especializada.'
            ) : null,
            lactante ? t(lang,
              'Lactante: compatível com lactação na maioria dos casos. Monitorar o lactente clinicamente.',
              'Lactante: compatible con lactancia en la mayoría de los casos. Monitorizar clínicamente al lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de intoxicação — redução da função renal e menor volume de distribuição. Preferir 0,0625–0,125 mg/dia.',
              'Anciano: mayor riesgo de intoxicación — reducción de función renal y menor volumen de distribución. Preferir 0,0625–0,125 mg/día.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — drasticamente aumenta risco de intoxicação digitálica e arritmias fatais. Corrigir K⁺ antes de continuar.',
              'ALERTA: Hipocalemia — aumenta drásticamente el riesgo de intoxicación digitálica y arritmias fatales. Corregir K⁺ antes de continuar.'
            ) : null,
            digLevel > 1.2 ? t(lang,
              'ALERTA: Nível sérico > 1,2 ng/mL — alto risco de toxicidade digitálica. Avaliar imediatamente ECG e eletrólitos.',
              'ALERTA: Nivel sérico > 1,2 ng/mL — alto riesgo de toxicidad digitálica. Evaluar inmediatamente ECG y electrolitos.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'JANELA TERAPÊUTICA ESTREITA: nível sérico alvo 0,5–0,9 ng/mL em ICFEr. Coletar ≥ 6h após última dose.',
              'VENTANA TERAPÉUTICA ESTRECHA: nivel sérico objetivo 0,5–0,9 ng/mL en ICFEr. Obtener ≥ 6h tras última dosis.'
            ),
            t(lang,
              'Hipocalemia e hipomagnesemia potencializam toxicidade — corrigir eletrólitos antes e durante uso.',
              'Hipocalemia e hipomagnesemia potencian toxicidad — corregir electrolitos antes y durante el uso.'
            ),
            t(lang,
              'Interações graves: amiodarona, verapamil, diltiazem, quinidina, macrolídeos, propafenona — aumentam nível sérico de digoxina.',
              'Interacciones graves: amiodarona, verapamilo, diltiazem, quinidina, macrólidos, propafenona — aumentan nivel sérico de digoxina.'
            ),
            t(lang,
              'Síndrome de Wolff-Parkinson-White com FA = CONTRAINDICAÇÃO ABSOLUTA.',
              'Síndrome de Wolff-Parkinson-White con FA = CONTRAINDICACIÓN ABSOLUTA.'
            ),
            t(lang,
              'Antídoto em intoxicação grave: Fragmentos Fab antidigoxina (Digoxin Immune Fab).',
              'Antídoto en intoxicación grave: Fragmentos Fab antidigoxina (Digoxin Immune Fab).'
            ),
            fg < 30 ? t(lang,
              'AJUSTE RENAL: ClCr < 30 mL/min — reduzir para 0,0625–0,125 mg/dia. Monitorar nível sérico frequentemente.',
              'AJUSTE RENAL: ClCr < 30 mL/min — reducir a 0,0625–0,125 mg/día. Monitorizar nivel sérico frecuentemente.'
            ) : null
          ].filter(Boolean),

          ref: 'ESC Heart Failure Guidelines · ESC Atrial Fibrillation Guidelines · AHA/ACC/HFSA Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 60,

            message: fg < 30
              ? t(lang,
                  'DRC grave: reduzir dose para 0,0625–0,125 mg/dia e monitorar nível sérico frequentemente. Acúmulo = risco de toxicidade fatal.',
                  'ERC grave: reducir dosis a 0,0625–0,125 mg/día y monitorizar nivel sérico frecuentemente. Acumulación = riesgo de toxicidad fatal.'
                )
              : fg < 60
              ? t(lang,
                  'DRC moderada: reduzir para 0,125 mg/dia e ajustar conforme nível sérico, função renal e resposta clínica.',
                  'ERC moderada: reducir a 0,125 mg/día y ajustar según nivel sérico, función renal y respuesta clínica.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 60 mL/min. Monitorar nível sérico periodicamente.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 60 mL/min. Monitorizar nivel sérico periódicamente.'
                ),

            fgMaior50: {
              vo: { dose: '0,125–0,25 mg', intervalo: '1x/dia', doseMaxima: '0,25 mg/dia', unidade: 'mg' },
              ev: { dose: '0,25–0,5 mg', intervalo: 'Digitalização hospitalar fracionada', doseMaxima: '1 mg/24h', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'Dose habitual. Monitorar nível sérico após equilíbrio (≥ 5 meias-vidas = 5–7 dias).',
                'Dosis habitual. Monitorizar nivel sérico tras equilibrio (≥ 5 semividas = 5–7 días).'
              )
            },
            fg30a50: {
              vo: { dose: '0,125 mg', intervalo: '1x/dia', doseMaxima: '0,125 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: manter 0,125 mg/dia com monitoração de nível sérico. Intervalar em dias alternados se necessário.',
                'ERC moderada: mantener 0,125 mg/día con monitorización de nivel sérico. Intervalos en días alternos si necesario.'
              )
            },
            fg10a30: {
              vo: { dose: '0,0625–0,125 mg', intervalo: '1x/dia ou dias alternados', doseMaxima: '0,125 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC grave: reduzir dose e/ou aumentar intervalo. Nível sérico frequente. Considerar alternativas terapêuticas.',
                'ERC grave: reducir dosis y/o aumentar intervalo. Nivel sérico frecuente. Considerar alternativas terapéuticas.'
              )
            },
            fgMenor10: {
              vo: { dose: '0,0625 mg', intervalo: 'Dias alternados ou 3x/semana', doseMaxima: '0,0625 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC muito grave: doses muito baixas com monitorização intensiva. Alto risco de acúmulo e toxicidade. Avaliar necessidade real.',
                'ERC muy grave: dosis muy bajas con monitorización intensiva. Alto riesgo de acumulación y toxicidad. Evaluar necesidad real.'
              )
            },
            hemodialise: {
              vo: { dose: '0,0625 mg', intervalo: '3–5x/semana (não pós-HD)', doseMaxima: '0,0625 mg/dose', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Digoxina NÃO é removida significativamente por hemodiálise (alto Vd). Sem suplementação pós-HD. Monitorar nível sérico e eletrólitos rigorosamente.',
                'Digoxina NO es removida significativamente por hemodiálisis (alto Vd). Sin suplementación post-HD. Monitorizar nivel sérico y electrolitos rigurosamente.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         false,
            bradycardiaRisk:         true,
            avBlockRisk:             true,
            digoxinToxicityRisk:     true,
            electrolyteDependent:    true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Digoxina possui JANELA TERAPÊUTICA ESTREITA. Hipocalemia, hipomagnesemia, DRC e interações medicamentosas aumentam drasticamente o risco de intoxicação fatal. Nível sérico alvo: 0,5–0,9 ng/mL em ICFEr.',
              'La digoxina posee VENTANA TERAPÉUTICA ESTRECHA. Hipocalemia, hipomagnesemia, ERC e interacciones medicamentosas aumentan drásticamente el riesgo de intoxicación fatal. Nivel sérico objetivo: 0,5–0,9 ng/mL en ICFEr.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'ESC Atrial Fibrillation Guidelines 2020/2024',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA/EMA label'
            ],
            note: t(lang,
              'Glicosídeo cardíaco de janela terapêutica estreita. Eliminação renal predominante — ajuste obrigatório em DRC. Hipocalemia, hipomagnesemia e múltiplas interações medicamentosas amplificam toxicidade. Antídoto disponível: Fab antidigoxina.',
              'Glucósido cardíaco de ventana terapéutica estrecha. Eliminación renal predominante — ajuste obligatorio en ERC. Hipocalemia, hipomagnesemia y múltiples interacciones medicamentosas amplían toxicidad. Antídoto disponible: Fab antidigoxina.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 8 (Glicosídeo Cardíaco: digoxina) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 9 — DIURÉTICOS DE ALÇA
     furosemida · bumetanida
     Natriurese potente · Eletrólito-dependente · Renal/Hepático
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       24. FUROSEMIDA
       Diurético de alça · IC · EAP · Sobrecarga volêmica
       Hipocalemia · Hiponatremia · Ototoxicidade IV alta dose
    ══════════════════════════════════════════════════════════════ */
    furosemida: {
      name:     { pt: 'Furosemida', es: 'Furosemida' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.13)',
      colorTxt: '#1E3A5F',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const peso     = Number(paciente.peso  || 70);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);
        const na       = Number(paciente.sodio    || 0);

        const adultoPadrao = t(lang,
          'VO: 20–40 mg/dia (1–2x/dia); IC moderada: 40–80 mg/dia. IV (descompensação): dose igual ou superior à dose oral habitual, 40–80 mg IV.',
          'VO: 20–40 mg/día (1–2 veces/día); IC moderada: 40–80 mg/día. IV (descompensación): dosis igual o superior a la dosis oral habitual, 40–80 mg IV.'
        );

        const adultoGrave = t(lang,
          'IC avançada ou DRC com resistência diurética: doses escalonadas 80–160–250 mg IV. Infusão contínua IV pode ser necessária. Monitorar função renal e eletrólitos rigorosamente.',
          'IC avanzada o ERC con resistencia diurética: dosis escalonadas 80–160–250 mg IV. Infusión continua IV puede ser necesaria. Monitorizar función renal y electrolitos rigurosamente.'
        );

        return {
          name:  t(lang, 'Furosemida', 'Furosemida'),
          class: t(lang,
            'Diurético de alça — Inibidor do cotransportador Na+/K+/2Cl- (NKCC2)',
            'Diurético de asa — Inhibidor del cotransportador Na+/K+/2Cl- (NKCC2)'
          ),

          commercialNames: {
            br: ['Lasix', 'Furosemida genérica'],
            ar: ['Lasix', 'Furosemida genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 40 mg',          'Comprimidos 40 mg'),
            t(lang, 'Solução oral 10 mg/mL',       'Solución oral 10 mg/mL'),
            t(lang, 'Ampolas IV 10 mg/mL (2 mL e 5 mL)', 'Ampollas IV 10 mg/mL (2 mL y 5 mL)')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              '0,5–2 mg/kg/dose VO/IV, 1–2x/dia. Máx 6 mg/kg/dia em crianças. Monitorar eletrólitos.',
              '0,5–2 mg/kg/dosis VO/IV, 1–2 veces/día. Máx 6 mg/kg/día en niños. Monitorizar electrolitos.'
            ),
            pediatricaGrave: t(lang,
              'Edema agudo de pulmão pediátrico: 1–2 mg/kg IV. Monitoração intensiva.',
              'Edema agudo de pulmón pediátrico: 1–2 mg/kg IV. Monitorización intensiva.'
            ),
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     t(lang, '0,5–2 mg/kg/dose (pediatria)', '0,5–2 mg/kg/dosis (pediatría)'),
            grave:      t(lang, '1–2 mg/kg IV (pediatria/emergência)', '1–2 mg/kg IV (pediatría/emergencia)'),
            meningite:  null,
            doseMaxima: t(lang,
              'Adulto: individualizado; IC avançada pode requerer doses altas sob monitorização. Pediatria: máx 6 mg/kg/dia.',
              'Adulto: individualizado; IC avanzada puede requerir dosis altas bajo monitorización. Pediatría: máx 6 mg/kg/día.'
            )
          },

          therapeuticRange: t(lang,
            'Redução de congestão; balanço hídrico negativo quando indicado; manutenção de perfusão renal e estabilidade hemodinâmica',
            'Reducción de congestión; balance hídrico negativo cuando indicado; mantenimiento de perfusión renal y estabilidad hemodinámica'
          ),

          dilution: t(lang,
            'IV bólus: pode ser administrado sem diluição (lento, ≤ 4 mg/min). Infusão contínua: diluir em SF 0,9% — evitar SG5% (precipitação). Concentração máx recomendada: 10 mg/mL.',
            'IV bolo: puede administrarse sin dilución (lento, ≤ 4 mg/min). Infusión continua: diluir en SF 0,9% — evitar SG5% (precipitación). Concentración máx recomendada: 10 mg/mL.'
          ),
          speed: t(lang,
            'Bólus IV: administrar lentamente (não exceder 4 mg/min) para evitar ototoxicidade. Infusão contínua: iniciar 5–10 mg/h, titular conforme diurese.',
            'Bolo IV: administrar lentamente (no exceder 4 mg/min) para evitar ototoxicidad. Infusión continua: iniciar 5–10 mg/h, titular según diuresis.'
          ),

          commonAdverseEffects: [
            t(lang, 'Poliúria',           'Poliuria'),
            t(lang, 'Tontura',            'Mareos'),
            t(lang, 'Hipotensão',         'Hipotensión'),
            t(lang, 'Hipocalemia',        'Hipocalemia'),
            t(lang, 'Hipomagnesemia',     'Hipomagnesemia'),
            t(lang, 'Hiponatremia',       'Hiponatremia'),
            t(lang, 'Aumento de creatinina', 'Aumento de creatinina'),
            t(lang, 'Cãibras musculares', 'Calambres musculares')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Desidratação grave',                     'Deshidratación grave'),
            t(lang, 'Lesão renal aguda',                      'Lesión renal aguda'),
            t(lang, 'Hipocalemia grave com arritmias',         'Hipocalemia grave con arritmias'),
            t(lang, 'Hiponatremia grave',                     'Hiponatremia grave'),
            t(lang, 'Ototoxicidade (IV alta dose ou infusão rápida)', 'Ototoxicidad (IV alta dosis o infusión rápida)'),
            t(lang, 'Alcalose metabólica',                    'Alcalosis metabólica'),
            t(lang, 'Encefalopatia hepática em cirrose vulnerável', 'Encefalopatía hepática en cirrosis vulnerable')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: usar apenas se benefício superar risco. Não é primeira linha para HAS gestacional; pode ser usada em EAP/congestão sob supervisão.',
              'Gestante: usar solo si el beneficio supera el riesgo. No es primera línea para HTA gestacional; puede usarse en EAP/congestión bajo supervisión.'
            ) : null,
            lactante ? t(lang,
              'Lactante: pode reduzir produção de leite em doses altas. Usar com cautela e monitorar hidratação do lactente.',
              'Lactante: puede reducir la producción de leche en dosis altas. Usar con precaución y monitorizar hidratación del lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipotensão ortostática, desidratação, hiponatremia, hipocalemia, quedas e lesão renal aguda.',
              'Anciano: mayor riesgo de hipotensión ortostática, deshidratación, hiponatremia, hipocalemia, caídas y lesión renal aguda.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — aumenta drasticamente risco de arritmias e toxicidade digitálica em uso concomitante. Repor K⁺.',
              'ALERTA: Hipocalemia — aumenta drásticamente riesgo de arritmias y toxicidad digitálica en uso concomitante. Reponer K⁺.'
            ) : null,
            na > 0 && na < 130 ? t(lang,
              'ALERTA: Hiponatremia grave — reavaliar indicação e dose de furosemida. Risco de síndrome de desidratação hiponatrêmica.',
              'ALERTA: Hiponatremia grave — reevaluar indicación y dosis de furosemida. Riesgo de síndrome de deshidratación hiponatrémica.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Interações graves: digoxina (hipocalemia amplifica toxicidade); aminoglicosídeos e anfotericina B (ototoxicidade/hipocalemia); lítio (toxicidade).',
              'Interacciones graves: digoxina (hipocalemia amplifica toxicidad); aminoglucósidos y anfotericina B (ototoxicidad/hipocalemia); litio (toxicidad).'
            ),
            t(lang,
              'AINEs reduzem efeito diurético e aumentam risco de lesão renal — evitar associação.',
              'AINEs reducen efecto diurético y aumentan riesgo de lesión renal — evitar asociación.'
            ),
            t(lang,
              'Infusão IV rápida (> 4 mg/min): risco de ototoxicidade — administrar lentamente.',
              'Infusión IV rápida (> 4 mg/min): riesgo de ototoxicidad — administrar lentamente.'
            ),
            t(lang,
              'Cirrose: cautela — risco de hipovolemia, hiponatremia, encefalopatia hepática e síndrome hepatorrenal.',
              'Cirrosis: precaución — riesgo de hipovolemia, hiponatremia, encefalopatía hepática y síndrome hepatorrenal.'
            ),
            fg < 30 ? t(lang,
              'DRC grave: pode requerer doses maiores por resistência diurética. Monitorar função renal, eletrólitos e volume rigorosamente.',
              'ERC grave: puede requerir dosis mayores por resistencia diurética. Monitorizar función renal, electrolitos y volemia rigurosamente.'
            ) : null
          ].filter(Boolean),

          ref: 'ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · KDIGO Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'DRC grave: pode requerer doses escaladas por resistência diurética. Monitorar ureia, creatinina e eletrólitos rigorosamente.',
                  'ERC grave: puede requerir dosis escaladas por resistencia diurética. Monitorizar urea, creatinina y electrolitos rigurosamente.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 30 mL/min. Monitorar eletrólitos e função renal.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 30 mL/min. Monitorizar electrolitos y función renal.'
                ),

            fgMaior50: {
              vo: { dose: '20–80 mg', intervalo: '1–2x/dia', doseMaxima: 'Individualizado', unidade: 'mg' },
              ev: { dose: '20–80 mg', intervalo: 'Conforme congestão e resposta', doseMaxima: 'Individualizado', unidade: 'mg' },
              pediatrica: { dose: '0,5–2 mg/kg', intervalo: '1–2x/dia', doseMaxima: '6 mg/kg/dia', unidade: 'mg/kg' },
              obs: t(lang, 'Dose e intervalo habituais. Monitorar eletrólitos periodicamente.', 'Dosis e intervalo habituales. Monitorizar electrolitos periódicamente.')
            },
            fg30a50: {
              vo: { dose: '40–80 mg', intervalo: '1–2x/dia', doseMaxima: 'Individualizado', unidade: 'mg' },
              ev: { dose: '40–80 mg', intervalo: 'Conforme resposta diurética', doseMaxima: 'Individualizado', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: doses habituais ou levemente maiores. Monitorar função renal, sódio, potássio e magnésio.',
                'ERC moderada: dosis habituales o ligeramente mayores. Monitorizar función renal, sodio, potasio y magnesio.'
              )
            },
            fg10a30: {
              vo: { dose: '80–250 mg', intervalo: '1–2x/dia (titulada)', doseMaxima: 'Conforme resposta', unidade: 'mg' },
              ev: { dose: '40–200 mg', intervalo: 'Ou infusão contínua 5–20 mg/h', doseMaxima: 'Conforme diurese', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'DRC grave: doses altas frequentemente necessárias por resistência diurética. Monitoração intensiva obrigatória.',
                'ERC grave: dosis altas frecuentemente necesarias por resistencia diurética. Monitorización intensiva obligatoria.'
              )
            },
            fgMenor10: {
              vo: { dose: '160–500 mg', intervalo: 'Individualizado (sem anúria)', doseMaxima: 'Conforme diurese residual', unidade: 'mg' },
              ev: { dose: 'Infusão contínua 10–40 mg/h', intervalo: 'Sob monitorização intensiva', doseMaxima: 'Titular por diurese', unidade: 'mg/h' },
              pediatrica: null,
              obs: t(lang,
                'DRC muito grave/anúria: resistência diurética extrema. Avaliar necessidade de terapia de substituição renal.',
                'ERC muy grave/anuria: resistencia diurética extrema. Evaluar necesidad de terapia de sustitución renal.'
              )
            },
            hemodialise: {
              vo: { dose: '40–80 mg', intervalo: 'Pré-HD se diurese residual', doseMaxima: 'Conforme resposta', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Furosemida é parcialmente removida por hemodiálise. Em pacientes anúricos sem diurese residual, raramente eficaz. Manter apenas se houver diurese residual documentada.',
                'Furosemida es parcialmente removida por hemodiálisis. En pacientes anúricos sin diuresis residual, raramente eficaz. Mantener solo si hay diuresis residual documentada.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            electrolyteRisk:         true,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            ototoxicityRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Furosemida é essencial na congestão, mas pode causar hipovolemia, lesão renal aguda, hipocalemia, hiponatremia, ototoxicidade (IV rápida) e arritmias. Monitorar peso diário, diurese, eletrólitos e função renal.',
              'Furosemida es esencial en congestión, pero puede causar hipovolemia, lesión renal aguda, hipocalemia, hiponatremia, ototoxicidad (IV rápida) y arritmias. Monitorizar peso diario, diuresis, electrolitos y función renal.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'KDIGO Acute Kidney Injury Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA/EMA label'
            ],
            note: t(lang,
              'Diurético de alça de referência em IC, EAP, DRC e UTI. Resistência diurética em DRC grave exige doses escaladas. Ototoxicidade com infusão IV rápida ou alta dose — administrar lentamente (≤ 4 mg/min).',
              'Diurético de asa de referencia en IC, EAP, ERC y UCI. Resistencia diurética en ERC grave exige dosis escaladas. Ototoxicidad con infusión IV rápida o alta dosis — administrar lentamente (≤ 4 mg/min).'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       25. BUMETANIDA
       Diurético de alça · Alternativa à furosemida
       Equivalência: 1 mg bumetanida ≈ 40 mg furosemida VO/IV
       Maior biodisponibilidade oral
    ══════════════════════════════════════════════════════════════ */
    bumetanida: {
      name:     { pt: 'Bumetanida', es: 'Bumetanida' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.10)',
      colorTxt: '#1E3A5F',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);
        const na       = Number(paciente.sodio    || 0);

        const adultoPadrao = t(lang,
          '0,5–1 mg VO/IV 1–2x/dia; ajustar conforme resposta diurética. Equivalência: 1 mg bumetanida ≈ 40 mg furosemida.',
          '0,5–1 mg VO/IV 1–2 veces/día; ajustar según respuesta diurética. Equivalencia: 1 mg bumetanida ≈ 40 mg furosemida.'
        );

        const adultoGrave = t(lang,
          'IC avançada ou resistência à furosemida: 1–2 mg IV, repetir conforme necessário. Máx 10 mg/dia em ambiente monitorizado.',
          'IC avanzada o resistencia a furosemida: 1–2 mg IV, repetir según necesidad. Máx 10 mg/día en ambiente monitorizado.'
        );

        return {
          name:  t(lang, 'Bumetanida', 'Bumetanida'),
          class: t(lang,
            'Diurético de alça — Inibidor do cotransportador Na+/K+/2Cl- (NKCC2) · Alternativa à furosemida',
            'Diurético de asa — Inhibidor del cotransportador Na+/K+/2Cl- (NKCC2) · Alternativa a furosemida'
          ),

          commercialNames: {
            br: ['Burinax', 'Bumetanida genérica'],
            ar: ['Bumetanida genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 1 mg',         'Comprimidos 1 mg'),
            t(lang, 'Ampolas IV/IM 0,5 mg/mL',  'Ampollas IV/IM 0,5 mg/mL')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico off-label. Consultar protocolo institucional e especialista.',
              'Uso pediátrico off-label. Consultar protocolo institucional y especialista.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '10 mg/dia em ambiente monitorizado. Equivalência: 1 mg ≈ 40 mg furosemida VO/IV.',
              '10 mg/día en ambiente monitorizado. Equivalencia: 1 mg ≈ 40 mg furosemida VO/IV.'
            )
          },

          therapeuticRange: t(lang,
            'Redução de congestão; balanço hídrico negativo quando indicado; resposta diurética adequada',
            'Reducción de congestión; balance hídrico negativo cuando indicado; respuesta diurética adecuada'
          ),

          dilution: t(lang,
            'IV: pode ser administrado sem diluição ou diluído em SF 0,9%. Não usar SG5% (instabilidade). Administrar lentamente.',
            'IV: puede administrarse sin dilución o diluido en SF 0,9%. No usar SG5% (inestabilidad). Administrar lentamente.'
          ),
          speed: t(lang,
            'Administrar bólus IV lentamente (1–2 min). Reavaliação de resposta diurética em 30–60 min após dose IV.',
            'Administrar bolo IV lentamente (1–2 min). Reevaluación de respuesta diurética en 30–60 min tras dosis IV.'
          ),

          commonAdverseEffects: [
            t(lang, 'Poliúria',           'Poliuria'),
            t(lang, 'Tontura',            'Mareos'),
            t(lang, 'Hipotensão',         'Hipotensión'),
            t(lang, 'Hipocalemia',        'Hipocalemia'),
            t(lang, 'Hipomagnesemia',     'Hipomagnesemia'),
            t(lang, 'Hiponatremia',       'Hiponatremia'),
            t(lang, 'Aumento de creatinina', 'Aumento de creatinina'),
            t(lang, 'Cãibras musculares', 'Calambres musculares')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Desidratação grave',                     'Deshidratación grave'),
            t(lang, 'Lesão renal aguda',                      'Lesión renal aguda'),
            t(lang, 'Hipocalemia grave com arritmias',         'Hipocalemia grave con arritmias'),
            t(lang, 'Hiponatremia grave',                     'Hiponatremia grave'),
            t(lang, 'Ototoxicidade (rara — doses altas IV)',   'Ototoxicidad (rara — dosis altas IV)'),
            t(lang, 'Alcalose metabólica',                    'Alcalosis metabólica'),
            t(lang, 'Encefalopatia hepática em cirrose vulnerável', 'Encefalopatía hepática en cirrosis vulnerable')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: usar apenas se benefício superar risco. Não é primeira linha para HAS gestacional.',
              'Gestante: usar solo si el beneficio supera el riesgo. No es primera línea para HTA gestacional.'
            ) : null,
            lactante ? t(lang,
              'Lactante: pode reduzir produção de leite em doses altas. Usar com cautela e monitorar hidratação do lactente.',
              'Lactante: puede reducir la producción de leche en dosis altas. Usar con precaución y monitorizar hidratación del lactante.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipotensão ortostática, desidratação, hiponatremia, hipocalemia, quedas e lesão renal aguda.',
              'Anciano: mayor riesgo de hipotensión ortostática, deshidratación, hiponatremia, hipocalemia, caídas y lesión renal aguda.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — aumenta risco de arritmias e toxicidade digitálica em uso concomitante. Repor K⁺.',
              'ALERTA: Hipocalemia — aumenta riesgo de arritmias y toxicidad digitálica en uso concomitante. Reponer K⁺.'
            ) : null,
            na > 0 && na < 130 ? t(lang,
              'ALERTA: Hiponatremia grave — reavaliar indicação. Risco de desidratação hiponatrêmica grave.',
              'ALERTA: Hiponatremia grave — reevaluar indicación. Riesgo de deshidratación hiponatrémica grave.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Equivalência: 1 mg bumetanida ≈ 40 mg furosemida VO/IV — atenção ao converter doses.',
              'Equivalencia: 1 mg bumetanida ≈ 40 mg furosemida VO/IV — atención al convertir dosis.'
            ),
            t(lang,
              'Interações graves: digoxina (hipocalemia amplifica toxicidade); aminoglicosídeos (ototoxicidade/hipocalemia); lítio (toxicidade).',
              'Interacciones graves: digoxina (hipocalemia amplifica toxicidad); aminoglucósidos (ototoxicidad/hipocalemia); litio (toxicidad).'
            ),
            t(lang,
              'AINEs reduzem efeito diurético e aumentam risco de lesão renal — evitar associação.',
              'AINEs reducen efecto diurético y aumentan riesgo de lesión renal — evitar asociación.'
            ),
            t(lang,
              'Cirrose: cautela — risco de hipovolemia, encefalopatia hepática e síndrome hepatorrenal.',
              'Cirrosis: precaución — riesgo de hipovolemia, encefalopatía hepática y síndrome hepatorrenal.'
            )
          ],

          ref: 'ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · KDIGO Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'DRC grave: doses maiores podem ser necessárias por resistência diurética. Monitorar função renal e eletrólitos rigorosamente.',
                  'ERC grave: dosis mayores pueden ser necesarias por resistencia diurética. Monitorizar función renal y electrolitos rigurosamente.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 30 mL/min. Monitorar eletrólitos e função renal.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 30 mL/min. Monitorizar electrolitos y función renal.'
                ),

            fgMaior50: {
              vo: { dose: '0,5–1 mg', intervalo: '1–2x/dia', doseMaxima: '10 mg/dia (amb. monitorizado)', unidade: 'mg' },
              ev: { dose: '0,5–1 mg', intervalo: 'Bólus IV conforme resposta', doseMaxima: '10 mg/dia', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar eletrólitos periodicamente.', 'Dosis habitual. Monitorizar electrolitos periódicamente.')
            },
            fg30a50: {
              vo: { dose: '1–2 mg', intervalo: '1–2x/dia', doseMaxima: '4 mg/dia', unidade: 'mg' },
              ev: { dose: '1–2 mg', intervalo: 'Conforme resposta diurética', doseMaxima: '4 mg/dia', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: pode requerer doses levemente maiores. Monitorar função renal, K⁺, Mg²⁺ e Na⁺.',
                'ERC moderada: puede requerir dosis ligeramente mayores. Monitorizar función renal, K⁺, Mg²⁺ y Na⁺.'
              )
            },
            fg10a30: {
              vo: { dose: '2–4 mg', intervalo: '1–2x/dia (titulada)', doseMaxima: '8 mg/dia', unidade: 'mg' },
              ev: { dose: '1–2 mg', intervalo: 'Ou infusão conforme necessidade', doseMaxima: '8 mg/dia', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'DRC grave: doses escaladas por resistência diurética. Monitoração intensiva obrigatória.',
                'ERC grave: dosis escaladas por resistencia diurética. Monitorización intensiva obligatoria.'
              )
            },
            fgMenor10: {
              vo: { dose: '2–4 mg', intervalo: 'Individualizado (se diurese residual)', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC muito grave: resistência diurética extrema. Avaliar terapia de substituição renal.',
                'ERC muy grave: resistencia diurética extrema. Evaluar terapia de sustitución renal.'
              )
            },
            hemodialise: {
              vo: { dose: '1 mg', intervalo: 'Se diurese residual presente', doseMaxima: 'Conforme resposta', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Bumetanida é parcialmente removida por hemodiálise. Em pacientes anúricos, raramente eficaz. Manter apenas com diurese residual documentada.',
                'Bumetanida es parcialmente removida por hemodiálisis. En pacientes anúricos, raramente eficaz. Mantener solo con diuresis residual documentada.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            electrolyteRisk:         true,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            ototoxicityRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Bumetanida é diurético de alça potente (1 mg ≈ 40 mg furosemida). Atenção a hipovolemia, lesão renal aguda, hipocalemia, hiponatremia e conversão correta de dose ao substituir furosemida.',
              'Bumetanida es diurético de asa potente (1 mg ≈ 40 mg furosemida). Atención a hipovolemia, lesión renal aguda, hipocalemia, hiponatremia y conversión correcta de dosis al sustituir furosemida.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'KDIGO Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA/EMA label'
            ],
            note: t(lang,
              'Diurético de alça potente com maior biodisponibilidade oral que furosemida (~80% vs 50–70%). Equivalência 1:40 com furosemida. Útil em resistência diurética ou variabilidade de absorção oral da furosemida.',
              'Diurético de asa potente con mayor biodisponibilidad oral que furosemida (~80% vs 50–70%). Equivalencia 1:40 con furosemida. Útil en resistencia diurética o variabilidad de absorción oral de furosemida.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 9 (Diuréticos de Alça: furosemida · bumetanida) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 9B — DIURÉTICOS DE ALÇA (adicional)
     torsemida
     Melhor biodisponibilidade oral · Ação prolongada · 1x/dia
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       26. TORSEMIDA
       Diurético de alça de longa duração · IC crônica
       Biodisponibilidade ~80% (estável) · 1x/dia
       Equivalência: 20 mg torsemida ≈ 40 mg furosemida VO
    ══════════════════════════════════════════════════════════════ */
    torsemida: {
      name:     { pt: 'Torsemida', es: 'Torasemida' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(59,130,246,0.10)',
      colorTxt: '#1E3A8A',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);
        const na       = Number(paciente.sodio    || 0);

        const adultoPadrao = t(lang,
          'IC: 10–20 mg VO 1x/dia; HTA/edema leve: 5–10 mg VO 1x/dia. Titular conforme congestão e resposta diurética. Equiv: 20 mg torsemida ≈ 40 mg furosemida VO.',
          'IC: 10–20 mg VO 1 vez/día; HTA/edema leve: 5–10 mg VO 1 vez/día. Titular según congestión y respuesta diurética. Equiv: 20 mg torasemida ≈ 40 mg furosemida VO.'
        );

        const adultoGrave = t(lang,
          'IC avançada ou resistência diurética: 40–100 mg VO 1x/dia. Máx 200 mg/dia em edema grave refratário sob monitorização.',
          'IC avanzada o resistencia diurética: 40–100 mg VO 1 vez/día. Máx 200 mg/día en edema grave refractario bajo monitorización.'
        );

        return {
          name:  t(lang, 'Torsemida', 'Torasemida'),
          class: t(lang,
            'Diurético de alça — Inibidor do NKCC2 com biodisponibilidade oral superior e ação prolongada (1x/dia)',
            'Diurético de asa — Inhibidor del NKCC2 con biodisponibilidad oral superior y acción prolongada (1 vez/día)'
          ),

          commercialNames: {
            br: ['Demadex', 'Torsemida genérica'],
            ar: ['Toradiur', 'Torasemida genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 5 mg',   'Comprimidos 5 mg'),
            t(lang, 'Comprimidos 10 mg',  'Comprimidos 10 mg'),
            t(lang, 'Comprimidos 20 mg',  'Comprimidos 20 mg'),
            t(lang, 'Comprimidos 100 mg', 'Comprimidos 100 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico não estabelecido rotineiramente. Consultar especialista.',
              'Uso pediátrico no establecido de forma rutinaria. Consultar especialista.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '200 mg/dia em edema grave refratário sob monitorização. Equivalência: 20 mg ≈ 40 mg furosemida VO ≈ 1 mg bumetanida.',
              '200 mg/día en edema grave refractario bajo monitorización. Equivalencia: 20 mg ≈ 40 mg furosemida VO ≈ 1 mg bumetanida.'
            )
          },

          therapeuticRange: t(lang,
            'Redução de congestão; controle crônico estável da volemia; balanço hídrico negativo quando indicado',
            'Reducción de congestión; control crónico estable de volemia; balance hídrico negativo cuando indicado'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Administrar 1x/dia pela manhã. Biodisponibilidade oral ~80% — menos variável que furosemida (~50–70%).',
            'Administrar 1 vez/día por la mañana. Biodisponibilidad oral ~80% — menos variable que furosemida (~50–70%).'
          ),

          commonAdverseEffects: [
            t(lang, 'Poliúria',              'Poliuria'),
            t(lang, 'Tontura',               'Mareos'),
            t(lang, 'Hipotensão',            'Hipotensión'),
            t(lang, 'Hipocalemia',           'Hipocalemia'),
            t(lang, 'Hipomagnesemia',        'Hipomagnesemia'),
            t(lang, 'Hiponatremia',          'Hiponatremia'),
            t(lang, 'Aumento de creatinina', 'Aumento de creatinina'),
            t(lang, 'Cãibras musculares',    'Calambres musculares')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Desidratação grave',                          'Deshidratación grave'),
            t(lang, 'Lesão renal aguda',                           'Lesión renal aguda'),
            t(lang, 'Hipocalemia grave com arritmias',              'Hipocalemia grave con arritmias'),
            t(lang, 'Hiponatremia grave',                          'Hiponatremia grave'),
            t(lang, 'Alcalose metabólica',                         'Alcalosis metabólica'),
            t(lang, 'Ototoxicidade (rara com torsemida)',           'Ototoxicidad (rara con torasemida)'),
            t(lang, 'Encefalopatia hepática em cirrose vulnerável', 'Encefalopatía hepática en cirrosis vulnerable')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: usar apenas se benefício superar risco. Não é primeira linha para HAS gestacional.',
              'Gestante: usar solo si el beneficio supera el riesgo. No es primera línea para HTA gestacional.'
            ) : null,
            lactante ? t(lang,
              'Lactante: pode reduzir produção de leite em doses altas. Usar com cautela.',
              'Lactante: puede reducir la producción de leche en dosis altas. Usar con precaución.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipotensão ortostática, desidratação, hiponatremia, hipocalemia e quedas.',
              'Anciano: mayor riesgo de hipotensión ortostática, deshidratación, hiponatremia, hipocalemia y caídas.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — aumenta risco de arritmias e toxicidade digitálica. Repor K⁺.',
              'ALERTA: Hipocalemia — aumenta riesgo de arritmias y toxicidad digitálica. Reponer K⁺.'
            ) : null,
            na > 0 && na < 130 ? t(lang,
              'ALERTA: Hiponatremia grave — reavaliar indicação e dose. Risco de desidratação hiponatrêmica grave.',
              'ALERTA: Hiponatremia grave — reevaluar indicación y dosis. Riesgo de deshidratación hiponatrémica grave.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Equivalência: 20 mg torsemida VO ≈ 40 mg furosemida VO ≈ 1 mg bumetanida — atenção ao converter doses.',
              'Equivalencia: 20 mg torasemida VO ≈ 40 mg furosemida VO ≈ 1 mg bumetanida — atención al convertir dosis.'
            ),
            t(lang,
              'Biodisponibilidade oral superior (~80%) e mais estável que furosemida — útil em baixa absorção intestinal ou edema de alça.',
              'Biodisponibilidad oral superior (~80%) y más estable que furosemida — útil en baja absorción intestinal o edema de asa.'
            ),
            t(lang,
              'Interações graves: digoxina (hipocalemia amplifica toxicidade); aminoglicosídeos (ototoxicidade); lítio (toxicidade).',
              'Interacciones graves: digoxina (hipocalemia amplifica toxicidad); aminoglucósidos (ototoxicidad); litio (toxicidad).'
            ),
            t(lang,
              'AINEs reduzem efeito diurético e aumentam risco renal — evitar associação.',
              'AINEs reducen efecto diurético y aumentan riesgo renal — evitar asociación.'
            ),
            t(lang,
              'Cirrose: cautela — risco de hipovolemia, hiponatremia e encefalopatia hepática.',
              'Cirrosis: precaución — riesgo de hipovolemia, hiponatremia y encefalopatía hepática.'
            )
          ],

          ref: 'ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · KDIGO Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'DRC grave: pode requerer doses maiores por resistência diurética. Monitorar função renal, eletrólitos e volemia rigorosamente.',
                  'ERC grave: puede requerir dosis mayores por resistencia diurética. Monitorizar función renal, electrolitos y volemia rigurosamente.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 30 mL/min. Monitorar eletrólitos e função renal periodicamente.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 30 mL/min. Monitorizar electrolitos y función renal periódicamente.'
                ),

            fgMaior50: {
              vo: { dose: '10–40 mg', intervalo: '1x/dia', doseMaxima: '200 mg/dia (em congestão grave)', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar eletrólitos e peso diário.', 'Dosis habitual. Monitorizar electrolitos y peso diario.')
            },
            fg30a50: {
              vo: { dose: '20–40 mg', intervalo: '1x/dia', doseMaxima: '80 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: doses habituais ou levemente maiores. Monitorar K⁺, Na⁺, Mg²⁺ e creatinina.',
                'ERC moderada: dosis habituales o ligeramente mayores. Monitorizar K⁺, Na⁺, Mg²⁺ y creatinina.'
              )
            },
            fg10a30: {
              vo: { dose: '40–100 mg', intervalo: '1x/dia (titulada)', doseMaxima: 'Conforme resposta diurética', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC grave: doses escalonadas por resistência diurética. Monitoração intensiva obrigatória.',
                'ERC grave: dosis escaladas por resistencia diurética. Monitorización intensiva obligatoria.'
              )
            },
            fgMenor10: {
              vo: { dose: '100–200 mg', intervalo: '1x/dia (individualizado)', doseMaxima: '200 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC muito grave: resistência diurética extrema. Avaliar necessidade de terapia de substituição renal.',
                'ERC muy grave: resistencia diurética extrema. Evaluar necesidad de terapia de sustitución renal.'
              )
            },
            hemodialise: {
              vo: { dose: '20 mg', intervalo: 'Se diurese residual presente', doseMaxima: 'Conforme resposta', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Torsemida é parcialmente removida por hemodiálise. Em pacientes anúricos raramente eficaz. Manter apenas com diurese residual documentada.',
                'Torasemida es parcialmente removida por hemodiálisis. En pacientes anúricos raramente eficaz. Mantener solo con diuresis residual documentada.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            electrolyteRisk:         true,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            ototoxicityRisk:         true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Torsemida tem biodisponibilidade oral mais estável e ação mais prolongada que furosemida (20 mg ≈ 40 mg furosemida VO). Mantém riscos de hipovolemia, hipocalemia, hiponatremia e lesão renal aguda.',
              'Torasemida tiene biodisponibilidad oral más estable y acción más prolongada que furosemida (20 mg ≈ 40 mg furosemida VO). Mantiene riesgos de hipovolemia, hipocalemia, hiponatremia y lesión renal aguda.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'TRANSFORM-HF Trial (JAMA 2023)',
              'KDIGO Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA/EMA label'
            ],
            note: t(lang,
              'Diurético de alça com biodisponibilidade oral ~80% e ação 1x/dia — vantagens sobre furosemida em manejo crônico de IC. TRANSFORM-HF: não superior à furosemida em mortalidade, mas com melhor perfil de absorção oral. Equivalência: 20 mg ≈ 40 mg furosemida VO.',
              'Diurético de asa con biodisponibilidad oral ~80% y acción 1 vez/día — ventajas sobre furosemida en manejo crónico de IC. TRANSFORM-HF: no superior a furosemida en mortalidad, pero con mejor perfil de absorción oral. Equivalencia: 20 mg ≈ 40 mg furosemida VO.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 9B (Diuréticos de Alça: torsemida) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 10 — DIURÉTICOS POUPADORES DE POTÁSSIO
     espironolactona · eplerenona · amilorida
     MRA / ENaC blocker · Hipercalemia como risco primário
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       27. ESPIRONOLACTONA
       MRA não seletivo · ICFEr · Ascite/Cirrose · HAS resistente
       RALES Trial · Risco: hipercalemia + efeitos endócrinos
    ══════════════════════════════════════════════════════════════ */
    espironolactona: {
      name:     { pt: 'Espironolactona', es: 'Espironolactona' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.12)',
      colorTxt: '#064E3B',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);

        const adultoPadrao = t(lang,
          'ICFEr: iniciar 12,5–25 mg VO 1x/dia; manutenção 25–50 mg/dia. HAS resistente/Hiperaldosteronismo: 25–100 mg/dia. Cirrose/Ascite: 100–400 mg/dia.',
          'ICFEr: iniciar 12,5–25 mg VO 1 vez/día; mantenimiento 25–50 mg/día. HTA resistente/Hiperaldosteronismo: 25–100 mg/día. Cirrosis/Ascitis: 100–400 mg/día.'
        );

        const adultoGrave = t(lang,
          'DRC ou K⁺ > 4,5 mEq/L: iniciar 12,5 mg/dia com monitoração rigorosa de K⁺ e creatinina após 3–7 dias.',
          'ERC o K⁺ > 4,5 mEq/L: iniciar 12,5 mg/día con monitorización rigurosa de K⁺ y creatinina tras 3–7 días.'
        );

        return {
          name:  t(lang, 'Espironolactona', 'Espironolactona'),
          class: t(lang,
            'Antagonista do receptor mineralocorticoide (MRA) não seletivo — Diurético poupador de potássio',
            'Antagonista del receptor mineralocorticoide (MRA) no selectivo — Diurético ahorrador de potasio'
          ),

          commercialNames: {
            br: ['Aldactone', 'Espironolactona genérica'],
            ar: ['Aldactone', 'Espironolactona genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 25 mg',  'Comprimidos 25 mg'),
            t(lang, 'Comprimidos 50 mg',  'Comprimidos 50 mg'),
            t(lang, 'Comprimidos 100 mg', 'Comprimidos 100 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico off-label. Consultar especialista e protocolo institucional.',
              'Uso pediátrico off-label. Consultar especialista y protocolo institucional.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '100 mg/dia em ICFEr/cardio; até 400 mg/dia em hiperaldosteronismo/ascite sob supervisão.',
              '100 mg/día en ICFEr/cardio; hasta 400 mg/día en hiperaldosteronismo/ascitis bajo supervisión.'
            )
          },

          therapeuticRange: t(lang,
            'Redução de mortalidade na ICFEr; K⁺ 4,0–5,0 mEq/L; controle de ascite; controle pressórico em HAS resistente',
            'Reducción de mortalidad en ICFEr; K⁺ 4,0–5,0 mEq/L; control de ascitis; control tensional en HTA resistente'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Administrar com alimentos para melhorar absorção. Reavaliar K⁺ e creatinina em 3–7 dias após início ou ajuste.',
            'Administrar con alimentos para mejorar absorción. Reevaluar K⁺ y creatinina en 3–7 días tras inicio o ajuste.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipercalemia',  'Hiperpotasemia'),
            t(lang, 'Tontura',       'Mareos'),
            t(lang, 'Hipotensão',    'Hipotensión'),
            t(lang, 'Náuseas',       'Náuseas'),
            t(lang, 'Fadiga',        'Fatiga'),
            t(lang, 'Cãibras',       'Calambres'),
            t(lang, 'Ginecomastia (efeito androgênico)', 'Ginecomastia (efecto androgénico)'),
            t(lang, 'Disfunção sexual / redução da libido', 'Disfunción sexual / reducción de la libido')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipercalemia grave (arritmias fatais)', 'Hiperpotasemia grave (arritmias fatales)'),
            t(lang, 'Parada cardíaca por hipercalemia',      'Paro cardíaco por hiperpotasemia'),
            t(lang, 'Lesão renal aguda',                     'Lesión renal aguda')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: evitar — especialmente no primeiro trimestre. Uso apenas se indicação especializada.',
              'Gestante: evitar — especialmente en el primer trimestre. Uso solo con indicación especializada.'
            ) : null,
            lactante ? t(lang,
              'Lactante: geralmente compatível com lactação em doses habituais. Monitorar clinicamente.',
              'Lactante: generalmente compatible con lactancia en dosis habituales. Monitorizar clínicamente.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipercalemia e insuficiência renal. Monitorização laboratorial mais frequente.',
              'Anciano: mayor riesgo de hiperpotasemia e insuficiencia renal. Monitorización laboratorial más frecuente.'
            ) : null,
            k > 0 && k >= 5.0 ? t(lang,
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICAÇÃO para início. Suspender se em uso. Risco de hipercalemia fatal.',
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICACIÓN para inicio. Suspender si en uso. Riesgo de hiperpotasemia fatal.'
            ) : null,
            k > 0 && k >= 4.5 && k < 5.0 ? t(lang,
              'ATENÇÃO: K⁺ 4,5–4,9 mEq/L — iniciar apenas com 12,5 mg e monitorar K⁺ em 3–7 dias.',
              'ATENCIÓN: K⁺ 4,5–4,9 mEq/L — iniciar solo con 12,5 mg y monitorizar K⁺ en 3–7 días.'
            ) : null,
            fg < 30 ? t(lang,
              'ALERTA: ClCr < 30 mL/min — risco muito elevado de hipercalemia. Evitar uso ou usar apenas com supervisão especializada.',
              'ALERTA: ClCr < 30 mL/min — riesgo muy elevado de hiperpotasemia. Evitar uso o usar solo con supervisión especializada.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'HIPERCALEMIA é o principal risco — monitorar K⁺ em 3–7 dias após início ou aumento de dose.',
              'HIPERPOTASEMIA es el principal riesgo — monitorizar K⁺ en 3–7 días tras inicio o aumento de dosis.'
            ),
            t(lang,
              'Interações graves: IECA, BRA, ARNI, suplementos de K⁺, alisquireno — risco de hipercalemia potencialmente fatal.',
              'Interacciones graves: IECA, ARA-II, ARNI, suplementos de K⁺, aliskireno — riesgo de hiperpotasemia potencialmente fatal.'
            ),
            t(lang,
              'Efeitos endócrinos (androgênicos): ginecomastia, disfunção sexual, irregularidade menstrual — substituir por eplerenona se intolerância.',
              'Efectos endocrinos (androgénicos): ginecomastia, disfunción sexual, irregularidad menstrual — sustituir por eplerenona si intolerancia.'
            ),
            t(lang,
              'Trimetoprim e heparina também elevam K⁺ — atenção ao uso concomitante.',
              'Trimetoprim y heparina también elevan K⁺ — atención al uso concomitante.'
            )
          ],

          ref: 'RALES Trial · ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · KDIGO Guidelines · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 45,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: CONTRAINDICADO ou uso apenas com supervisão especializada e monitoração intensiva de K⁺. Risco de hipercalemia fatal.',
                  'ClCr < 30 mL/min: CONTRAINDICADO o uso solo con supervisión especializada y monitorización intensiva de K⁺. Riesgo de hiperpotasemia fatal.'
                )
              : fg < 45
              ? t(lang,
                  'ClCr 30–45 mL/min: usar com extrema cautela — iniciar 12,5 mg e monitorar K⁺ em 3–7 dias. Risco elevado de hipercalemia.',
                  'ClCr 30–45 mL/min: usar con extrema precaución — iniciar 12,5 mg y monitorizar K⁺ en 3–7 días. Riesgo elevado de hiperpotasemia.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 45 mL/min. Monitorar K⁺ e creatinina após início.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 45 mL/min. Monitorizar K⁺ y creatinina tras inicio.'
                ),

            fgMaior50: {
              vo: { dose: '25–50 mg', intervalo: '1x/dia', doseMaxima: '100 mg/dia em ICFEr', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar K⁺ e creatinina periodicamente.', 'Dosis habitual. Monitorizar K⁺ y creatinina periódicamente.')
            },
            fg30a50: {
              vo: { dose: '12,5–25 mg', intervalo: '1x/dia', doseMaxima: '25 mg/dia (cautela)', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: dose reduzida — iniciar 12,5 mg e monitorar K⁺ em 3–7 dias. Risco elevado de hipercalemia.',
                'ClCr 30–50 mL/min: dosis reducida — iniciar 12,5 mg y monitorizar K⁺ en 3–7 días. Riesgo elevado de hiperpotasemia.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 30 mL/min: EVITAR. Se absolutamente necessário, usar 12,5 mg com monitoração diária de K⁺ e supervisão especializada.',
                'ClCr < 30 mL/min: EVITAR. Si absolutamente necesario, usar 12,5 mg con monitorización diaria de K⁺ y supervisión especializada.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min / anúria: CONTRAINDICADO. Risco de hipercalemia fatal.',
                'ClCr < 10 mL/min / anuria: CONTRAINDICADO. Riesgo de hiperpotasemia fatal.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: espironolactona parcialmente removida por HD, mas em pacientes dialíticos o risco de hipercalemia entre sessões é muito elevado. Evitar uso.',
                'Hemodiálisis: espironolactona parcialmente removida por HD, pero en pacientes dializados el riesgo de hiperpotasemia entre sesiones es muy elevado. Evitar uso.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            hyperkalemiaRisk:        true,
            endocrineEffects:        true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Principal risco é HIPERCALEMIA potencialmente fatal. Monitorar K⁺ 3–7 dias após início ou ajuste. Efeitos endócrinos (ginecomastia, disfunção sexual) são peculiares — substituir por eplerenona se intolerância.',
              'El principal riesgo es HIPERPOTASEMIA potencialmente fatal. Monitorizar K⁺ 3–7 días tras inicio o ajuste. Efectos endocrinos (ginecomastia, disfunción sexual) son peculiares — sustituir por eplerenona si intolerancia.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'RALES Trial (NEJM 1999)',
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'KDIGO Guidelines',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'Um dos quatro pilares da ICFEr (RALES: redução de 30% na mortalidade). MRA não seletivo — efeitos endócrinos por atividade androgênica. Em cirrose/ascite: doses maiores (100–400 mg). Alternativa mais seletiva: eplerenona.',
              'Uno de los cuatro pilares de la ICFEr (RALES: reducción del 30% en mortalidad). MRA no selectivo — efectos endocrinos por actividad androgénica. En cirrosis/ascitis: dosis mayores (100–400 mg). Alternativa más selectiva: eplerenona.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       28. EPLERENONA
       MRA seletivo · Menor efeito endócrino que espironolactona
       ICFEr · Pós-IAM com disfunção VE · EPHESUS + EMPHASIS-HF
    ══════════════════════════════════════════════════════════════ */
    eplerenona: {
      name:     { pt: 'Eplerenona', es: 'Eplerenona' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.10)',
      colorTxt: '#065F46',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);

        const adultoPadrao = t(lang,
          'ICFEr: iniciar 25 mg VO 1x/dia; manutenção 25–50 mg/dia. HAS: 50 mg 1–2x/dia.',
          'ICFEr: iniciar 25 mg VO 1 vez/día; mantenimiento 25–50 mg/día. HTA: 50 mg 1–2 veces/día.'
        );

        const adultoGrave = t(lang,
          'DRC ou K⁺ > 4,5 mEq/L: iniciar 12,5–25 mg com monitoração rigorosa de K⁺ em 3–7 dias. Evitar se K⁺ > 5,0 ou eTFG < 30.',
          'ERC o K⁺ > 4,5 mEq/L: iniciar 12,5–25 mg con monitorización rigurosa de K⁺ en 3–7 días. Evitar si K⁺ > 5,0 o TFGe < 30.'
        );

        return {
          name:  t(lang, 'Eplerenona', 'Eplerenona'),
          class: t(lang,
            'Antagonista seletivo do receptor mineralocorticoide (MRA) — menor toxicidade endócrina que espironolactona',
            'Antagonista selectivo del receptor mineralocorticoide (MRA) — menor toxicidad endocrina que espironolactona'
          ),

          commercialNames: {
            br: ['Inspra', 'Eplerenona genérica'],
            ar: ['Inspra', 'Eplerenona genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 25 mg', 'Comprimidos 25 mg'),
            t(lang, 'Comprimidos 50 mg', 'Comprimidos 50 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico não estabelecido. Consultar especialista.',
              'Uso pediátrico no establecido. Consultar especialista.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '50 mg/dia em ICFEr; 50 mg 2x/dia em HAS selecionada (sob supervisão).',
              '50 mg/día en ICFEr; 50 mg 2 veces/día en HTA seleccionada (bajo supervisión).'
            )
          },

          therapeuticRange: t(lang,
            'Redução de mortalidade cardiovascular; K⁺ 4,0–5,0 mEq/L; controle pressórico',
            'Reducción de mortalidad cardiovascular; K⁺ 4,0–5,0 mEq/L; control tensional'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Pode ser tomado com ou sem alimentos. Reavaliar K⁺ e creatinina em 3–7 dias após início ou ajuste.',
            'Puede tomarse con o sin alimentos. Reevaluar K⁺ y creatinina en 3–7 días tras inicio o ajuste.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipercalemia',           'Hiperpotasemia'),
            t(lang, 'Tontura',                'Mareos'),
            t(lang, 'Hipotensão',             'Hipotensión'),
            t(lang, 'Fadiga',                 'Fatiga'),
            t(lang, 'Náuseas',                'Náuseas'),
            t(lang, 'Aumento de creatinina',  'Aumento de creatinina')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipercalemia grave (arritmias fatais)', 'Hiperpotasemia grave (arritmias fatales)'),
            t(lang, 'Parada cardíaca por hipercalemia',      'Paro cardíaco por hiperpotasemia'),
            t(lang, 'Lesão renal aguda',                     'Lesión renal aguda')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: dados limitados — usar apenas se benefício superar claramente o risco.',
              'Gestante: datos limitados — usar solo si el beneficio supera claramente el riesgo.'
            ) : null,
            lactante ? t(lang,
              'Lactante: dados limitados — avaliar risco-benefício individualmente.',
              'Lactante: datos limitados — evaluar riesgo-beneficio individualmente.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipercalemia e insuficiência renal. Monitorização laboratorial frequente.',
              'Anciano: mayor riesgo de hiperpotasemia e insuficiencia renal. Monitorización laboratorial frecuente.'
            ) : null,
            k > 0 && k >= 5.0 ? t(lang,
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICADO para início. Risco de hipercalemia fatal.',
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICADO para inicio. Riesgo de hiperpotasemia fatal.'
            ) : null,
            fg < 30 ? t(lang,
              'ALERTA: ClCr/eTFG < 30 mL/min — CONTRAINDICADO. Risco muito elevado de hipercalemia.',
              'ALERTA: ClCr/TFGe < 30 mL/min — CONTRAINDICADO. Riesgo muy elevado de hiperpotasemia.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'HIPERCALEMIA é o principal risco — monitorar K⁺ em 3–7 dias após início ou aumento de dose.',
              'HIPERPOTASEMIA es el principal riesgo — monitorizar K⁺ en 3–7 días tras inicio o aumento de dosis.'
            ),
            t(lang,
              'CONTRAINDICADA com inibidores potentes do CYP3A4: cetoconazol, itraconazol, ritonavir — risco de acúmulo.',
              'CONTRAINDICADA con inhibidores potentes de CYP3A4: ketoconazol, itraconazol, ritonavir — riesgo de acumulación.'
            ),
            t(lang,
              'Interações graves: IECA, BRA, ARNI, suplementos de K⁺ — risco de hipercalemia potencialmente fatal.',
              'Interacciones graves: IECA, ARA-II, ARNI, suplementos de K⁺ — riesgo de hiperpotasemia potencialmente fatal.'
            ),
            t(lang,
              'Vantagem sobre espironolactona: muito menor incidência de ginecomastia, disfunção sexual e irregularidade menstrual.',
              'Ventaja sobre espironolactona: mucho menor incidencia de ginecomastia, disfunción sexual e irregularidad menstrual.'
            )
          ],

          ref: 'EPHESUS Trial · EMPHASIS-HF Trial · ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 50,

            message: fg < 30
              ? t(lang,
                  'eTFG < 30 mL/min: CONTRAINDICADA. Risco de hipercalemia fatal.',
                  'TFGe < 30 mL/min: CONTRAINDICADA. Riesgo de hiperpotasemia fatal.'
                )
              : fg < 50
              ? t(lang,
                  'eTFG 30–50 mL/min: usar com cautela extrema — iniciar 25 mg em dias alternados e monitorar K⁺ em 3–7 dias.',
                  'TFGe 30–50 mL/min: usar con extrema precaución — iniciar 25 mg en días alternos y monitorizar K⁺ en 3–7 días.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em eTFG ≥ 50 mL/min. Monitorar K⁺ e creatinina.',
                  'Sin ajuste renal obligatorio con TFGe ≥ 50 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '25–50 mg', intervalo: '1x/dia', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar K⁺ e creatinina periodicamente.', 'Dosis habitual. Monitorizar K⁺ y creatinina periódicamente.')
            },
            fg30a50: {
              vo: { dose: '25 mg', intervalo: 'Dias alternados (cautela extrema)', doseMaxima: '25 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG 30–50 mL/min: dose mínima em dias alternados. Monitorar K⁺ em 3–7 dias. Risco elevado de hipercalemia.',
                'TFGe 30–50 mL/min: dosis mínima en días alternos. Monitorizar K⁺ en 3–7 días. Riesgo elevado de hiperpotasemia.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 30 mL/min: CONTRAINDICADA. Evitar completamente.',
                'TFGe < 30 mL/min: CONTRAINDICADA. Evitar completamente.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 10 mL/min / anúria: CONTRAINDICADA. Risco de hipercalemia fatal.',
                'TFGe < 10 mL/min / anuria: CONTRAINDICADA. Riesgo de hiperpotasemia fatal.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: CONTRAINDICADA. Risco de hipercalemia entre sessões.',
                'Hemodiálisis: CONTRAINDICADA. Riesgo de hiperpotasemia entre sesiones.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            hyperkalemiaRisk:        true,
            endocrineEffects:        false,
            pregnancyCaution:        true,
            warning: t(lang,
              'MRA seletivo com muito menor toxicidade endócrina que espironolactona. Principal risco: HIPERCALEMIA — monitorar K⁺ 3–7 dias após início. CONTRAINDICADO em eTFG < 30 e K⁺ > 5,0 mEq/L.',
              'MRA selectivo con mucho menor toxicidad endocrina que espironolactona. Principal riesgo: HIPERPOTASEMIA — monitorizar K⁺ 3–7 días tras inicio. CONTRAINDICADO con TFGe < 30 y K⁺ > 5,0 mEq/L.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'EPHESUS Trial (NEJM 2003)',
              'EMPHASIS-HF Trial (NEJM 2011)',
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'MRA seletivo — pilar da ICFEr (EMPHASIS-HF) e pós-IAM com disfunção VE (EPHESUS). Metabolizado por CYP3A4 — interações com inibidores potentes. Muito menor incidência de ginecomastia vs espironolactona.',
              'MRA selectivo — pilar de la ICFEr (EMPHASIS-HF) y post-IAM con disfunción VI (EPHESUS). Metabolizado por CYP3A4 — interacciones con inhibidores potentes. Mucho menor incidencia de ginecomastia vs espironolactona.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       29. AMILORIDA
       Bloqueador ENaC · Poupador de K⁺ · Adjuvante tiazídico/alça
       Síndrome de Liddle · Menor potência diurética que MRA
    ══════════════════════════════════════════════════════════════ */
    amilorida: {
      name:     { pt: 'Amilorida', es: 'Amilorida' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(16,185,129,0.08)',
      colorTxt: '#064E3B',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);

        const adultoPadrao = t(lang,
          '5 mg VO 1x/dia; manutenção 5–10 mg/dia. Frequentemente associada a tiazídicos ou diuréticos de alça para preservar K⁺.',
          '5 mg VO 1 vez/día; mantenimiento 5–10 mg/día. Frecuentemente asociada a tiazidas o diuréticos de asa para preservar K⁺.'
        );

        const adultoGrave = t(lang,
          'Considerar dose mínima (5 mg/dia) em DRC leve/moderada. EVITAR em DRC grave por risco elevado de hipercalemia.',
          'Considerar dosis mínima (5 mg/día) en ERC leve/moderada. EVITAR en ERC grave por riesgo elevado de hiperpotasemia.'
        );

        return {
          name:  t(lang, 'Amilorida', 'Amilorida'),
          class: t(lang,
            'Diurético poupador de potássio — Bloqueador dos canais epiteliais de sódio (ENaC)',
            'Diurético ahorrador de potasio — Bloqueador de los canales epiteliales de sodio (ENaC)'
          ),

          commercialNames: {
            br: ['Amilorida genérica', 'Moduretic (associação com hidroclorotiazida)'],
            ar: ['Amilorida genérica', 'Asociaciones con hidroclorotiazida']
          },

          presentation: [
            t(lang, 'Comprimidos 5 mg', 'Comprimidos 5 mg'),
            t(lang, 'Comprimidos associados à hidroclorotiazida (Moduretic® e genéricos)', 'Comprimidos asociados a hidroclorotiazida (Moduretic® y genéricos)')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico off-label. Consultar especialista e protocolo institucional.',
              'Uso pediátrico off-label. Consultar especialista y protocolo institucional.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang, '20 mg/dia', '20 mg/día')
          },

          therapeuticRange: t(lang,
            'Prevenção de hipocalemia induzida por diuréticos; K⁺ 4,0–5,0 mEq/L; controle pressórico como adjuvante',
            'Prevención de hipocalemia inducida por diuréticos; K⁺ 4,0–5,0 mEq/L; control tensional como adyuvante'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Administrar com alimentos para reduzir náuseas. Reavaliar K⁺ e creatinina em 3–7 dias após início.',
            'Administrar con alimentos para reducir náuseas. Reevaluar K⁺ y creatinina en 3–7 días tras inicio.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipercalemia', 'Hiperpotasemia'),
            t(lang, 'Náuseas',      'Náuseas'),
            t(lang, 'Diarreia',     'Diarrea'),
            t(lang, 'Tontura',      'Mareos'),
            t(lang, 'Cefaleia',     'Cefalea'),
            t(lang, 'Fadiga',       'Fatiga')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipercalemia grave (arritmias ventriculares)', 'Hiperpotasemia grave (arritmias ventriculares)'),
            t(lang, 'Parada cardíaca',                             'Paro cardíaco'),
            t(lang, 'Lesão renal aguda',                           'Lesión renal aguda'),
            t(lang, 'Acidose metabólica hiperclorêmica',           'Acidosis metabólica hiperclorémica')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: dados limitados — usar apenas quando claramente necessário.',
              'Gestante: datos limitados — usar solo cuando sea claramente necesario.'
            ) : null,
            lactante ? t(lang,
              'Lactante: dados limitados; usar com cautela.',
              'Lactante: datos limitados; usar con precaución.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hipercalemia e insuficiência renal. Monitorização laboratorial frequente.',
              'Anciano: mayor riesgo de hiperpotasemia e insuficiencia renal. Monitorización laboratorial frecuente.'
            ) : null,
            k > 0 && k >= 5.0 ? t(lang,
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICADA. Suspender imediatamente se em uso.',
              'ALERTA: K⁺ ≥ 5,0 mEq/L — CONTRAINDICADA. Suspender inmediatamente si en uso.'
            ) : null,
            fg < 30 ? t(lang,
              'ALERTA: ClCr < 30 mL/min — CONTRAINDICADA. Risco muito elevado de hipercalemia.',
              'ALERTA: ClCr < 30 mL/min — CONTRAINDICADA. Riesgo muy elevado de hiperpotasemia.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'HIPERCALEMIA é o principal risco — monitorar K⁺ em 3–7 dias após início ou ajuste.',
              'HIPERPOTASEMIA es el principal riesgo — monitorizar K⁺ en 3–7 días tras inicio o ajuste.'
            ),
            t(lang,
              'Interações graves: IECA, BRA, ARNI, espironolactona, eplerenona, suplementos de K⁺ — risco de hipercalemia potencialmente fatal.',
              'Interacciones graves: IECA, ARA-II, ARNI, espironolactona, eplerenona, suplementos de K⁺ — riesgo de hiperpotasemia potencialmente fatal.'
            ),
            t(lang,
              'Mecanismo diferente da espironolactona (ENaC vs receptor de aldosterona) — pode somar efeito em Síndrome de Liddle.',
              'Mecanismo diferente de espironolactona (ENaC vs receptor de aldosterona) — puede sumar efecto en Síndrome de Liddle.'
            ),
            t(lang,
              'Trimetoprim e heparina também bloqueiam ENaC ou elevam K⁺ — atenção ao uso concomitante.',
              'Trimetoprim y heparina también bloquean ENaC o elevan K⁺ — atención al uso concomitante.'
            )
          ],

          ref: 'ESC Heart Failure Guidelines · AHA/ACC Hypertension Guidelines · KDIGO Guidelines · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 50,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: CONTRAINDICADA. Risco de hipercalemia fatal.',
                  'ClCr < 30 mL/min: CONTRAINDICADA. Riesgo de hiperpotasemia fatal.'
                )
              : fg < 50
              ? t(lang,
                  'ClCr 30–50 mL/min: usar com cautela — dose mínima (5 mg/dia) com monitoração frequente de K⁺.',
                  'ClCr 30–50 mL/min: usar con precaución — dosis mínima (5 mg/día) con monitorización frecuente de K⁺.'
                )
              : t(lang,
                  'Sem ajuste renal obrigatório em ClCr ≥ 50 mL/min. Monitorar K⁺ e creatinina.',
                  'Sin ajuste renal obligatorio con ClCr ≥ 50 mL/min. Monitorizar K⁺ y creatinina.'
                ),

            fgMaior50: {
              vo: { dose: '5–10 mg', intervalo: '1x/dia', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar K⁺ e creatinina periodicamente.', 'Dosis habitual. Monitorizar K⁺ y creatinina periódicamente.')
            },
            fg30a50: {
              vo: { dose: '5 mg', intervalo: '1x/dia (cautela)', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: dose mínima. Monitorar K⁺ em 3–7 dias. Risco elevado de hipercalemia.',
                'ClCr 30–50 mL/min: dosis mínima. Monitorizar K⁺ en 3–7 días. Riesgo elevado de hiperpotasemia.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 30 mL/min: CONTRAINDICADA. Evitar completamente.',
                'ClCr < 30 mL/min: CONTRAINDICADA. Evitar completamente.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min / anúria: CONTRAINDICADA. Risco de hipercalemia fatal.',
                'ClCr < 10 mL/min / anuria: CONTRAINDICADA. Riesgo de hiperpotasemia fatal.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: CONTRAINDICADA. Risco de hipercalemia entre sessões.',
                'Hemodiálisis: CONTRAINDICADA. Riesgo de hiperpotasemia entre sesiones.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            hyperkalemiaRisk:        true,
            endocrineEffects:        false,
            pregnancyCaution:        true,
            warning: t(lang,
              'Principal risco é HIPERCALEMIA potencialmente fatal, especialmente quando associada a IECA, BRA, ARNI, espironolactona ou suplementos de K⁺. CONTRAINDICADA em DRC grave (ClCr < 30) e K⁺ ≥ 5,0 mEq/L.',
              'El principal riesgo es HIPERPOTASEMIA potencialmente fatal, especialmente cuando se asocia a IECA, ARA-II, ARNI, espironolactona o suplementos de K⁺. CONTRAINDICADA en ERC grave (ClCr < 30) y K⁺ ≥ 5,0 mEq/L.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'KDIGO Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'Diurético poupador de K⁺ via bloqueio de ENaC (mecanismo independente de aldosterona). Menor potência diurética que MRA em ICFEr — uso principalmente como adjuvante para prevenir hipocalemia ou em Síndrome de Liddle.',
              'Diurético ahorrador de K⁺ vía bloqueo de ENaC (mecanismo independiente de aldosterona). Menor potencia diurética que MRA en ICFEr — uso principalmente como adyuvante para prevenir hipocalemia o en Síndrome de Liddle.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 10 (Diuréticos Poupadores de K⁺: espironolactona · eplerenona · amilorida) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 11 — DIURÉTICOS TIAZÍDICOS
     hidroclorotiazida · clortalidona
     NCC blocker · HAS · Metabolismo glucídico/lipídico · Renal
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       30. HIDROCLOROTIAZIDA
       Tiazídico clássico · HAS · Edema leve · 1ª linha HAS
       ALLHAT · Múltiplas combinações fixas cardiovasculares
    ══════════════════════════════════════════════════════════════ */
    hidroclorotiazida: {
      name:     { pt: 'Hidroclorotiazida', es: 'Hidroclorotiazida' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(100,116,139,0.12)',
      colorTxt: '#1E293B',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);
        const na       = Number(paciente.sodio    || 0);

        const adultoPadrao = t(lang,
          'HAS: iniciar 12,5 mg VO 1x/dia; manutenção 12,5–25 mg/dia. Edema leve: 25–50 mg/dia. Doses > 50 mg raramente aumentam eficácia e elevam eventos adversos.',
          'HTA: iniciar 12,5 mg VO 1 vez/día; mantenimiento 12,5–25 mg/día. Edema leve: 25–50 mg/día. Dosis > 50 mg raramente aumentan eficacia y elevan eventos adversos.'
        );

        const adultoGrave = t(lang,
          'DRC moderada/grave (eTFG < 30): PERDE EFICÁCIA — considerar diurético de alça. Em idosos ou diabetes: iniciar 12,5 mg e monitorar sódio, K⁺ e glicemia.',
          'ERC moderada/grave (TFGe < 30): PIERDE EFICACIA — considerar diurético de asa. En ancianos o diabéticos: iniciar 12,5 mg y monitorizar sodio, K⁺ y glucemia.'
        );

        return {
          name:  t(lang, 'Hidroclorotiazida', 'Hidroclorotiazida'),
          class: t(lang,
            'Diurético tiazídico — Inibidor do cotransportador Na+/Cl- (NCC) no túbulo contornado distal',
            'Diurético tiazídico — Inhibidor del cotransportador Na+/Cl- (NCC) en el túbulo contorneado distal'
          ),

          commercialNames: {
            br: ['Clorana', 'Hidroclorotiazida genérica', 'Diversas combinações fixas (IECA, BRA, betabloqueadores)'],
            ar: ['Hidroclorotiazida genérica', 'Diversas asociaciones con IECA y ARA-II']
          },

          presentation: [
            t(lang, 'Comprimidos 12,5 mg', 'Comprimidos 12,5 mg'),
            t(lang, 'Comprimidos 25 mg',   'Comprimidos 25 mg'),
            t(lang, 'Comprimidos 50 mg',   'Comprimidos 50 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico estabelecido. Consultar protocolo por peso e indicação.',
              'Uso pediátrico establecido. Consultar protocolo por peso e indicación.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '50 mg/dia. Doses maiores raramente aumentam eficácia — só elevam eventos adversos.',
              '50 mg/día. Dosis mayores raramente aumentan eficacia — solo elevan eventos adversos.'
            )
          },

          therapeuticRange: t(lang,
            'Controle pressórico; redução de edema; prevenção de cálculos por hipercalciúria; redução de eventos cardiovasculares',
            'Control tensional; reducción de edema; prevención de cálculos por hipercalciuria; reducción de eventos cardiovasculares'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Administrar pela manhã para evitar poliúria noturna. Reavaliação de eletrólitos em 2–4 semanas após início.',
            'Administrar por la mañana para evitar poliuria nocturna. Reevaluación de electrolitos en 2–4 semanas tras inicio.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipocalemia',     'Hipocalemia'),
            t(lang, 'Hiponatremia',    'Hiponatremia'),
            t(lang, 'Hipomagnesemia',  'Hipomagnesemia'),
            t(lang, 'Tontura',         'Mareos'),
            t(lang, 'Hipotensão',      'Hipotensión'),
            t(lang, 'Poliúria',        'Poliuria'),
            t(lang, 'Cefaleia',        'Cefalea'),
            t(lang, 'Fraqueza',        'Debilidad')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hiponatremia grave',                    'Hiponatremia grave'),
            t(lang, 'Hipocalemia grave com arritmias',        'Hipocalemia grave con arritmias'),
            t(lang, 'Alcalose metabólica',                   'Alcalosis metabólica'),
            t(lang, 'Lesão renal aguda',                     'Lesión renal aguda'),
            t(lang, 'Crise de gota',                         'Crisis de gota'),
            t(lang, 'Pancreatite aguda (rara)',               'Pancreatitis aguda (rara)'),
            t(lang, 'Reações cutâneas graves (rara)',         'Reacciones cutáneas graves (rara)')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: não é anti-hipertensivo de primeira linha na gestação. Usar apenas quando claramente indicado.',
              'Gestante: no es antihipertensivo de primera línea durante el embarazo. Usar solo cuando esté claramente indicado.'
            ) : null,
            lactante ? t(lang,
              'Lactante: doses altas podem reduzir produção de leite. Usar com cautela.',
              'Lactante: dosis altas pueden reducir la producción de leche. Usar con precaución.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hiponatremia, hipocalemia, hipotensão ortostática, quedas e deterioração renal.',
              'Anciano: mayor riesgo de hiponatremia, hipocalemia, hipotensión ortostática, caídas y deterioro renal.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — risco de arritmias e toxicidade digitálica. Repor K⁺ e considerar associação com poupador de K⁺.',
              'ALERTA: Hipocalemia — riesgo de arritmias y toxicidad digitálica. Reponer K⁺ y considerar asociación con ahorrador de K⁺.'
            ) : null,
            na > 0 && na < 130 ? t(lang,
              'ALERTA: Hiponatremia grave — suspender ou reduzir drasticamente. Risco de encefalopatia hiponatrêmica.',
              'ALERTA: Hiponatremia grave — suspender o reducir drásticamente. Riesgo de encefalopatía hiponatrémica.'
            ) : null,
            fg < 30 ? t(lang,
              'ATENÇÃO: eTFG < 30 mL/min — hidroclorotiazida perde eficácia diurética. Considerar diurético de alça.',
              'ATENCIÓN: TFGe < 30 mL/min — hidroclorotiazida pierde eficacia diurética. Considerar diurético de asa.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Perde eficácia diurética em DRC grave (eTFG < 30 mL/min) — substituir por diurético de alça.',
              'Pierde eficacia diurética en ERC grave (TFGe < 30 mL/min) — sustituir por diurético de asa.'
            ),
            t(lang,
              'Interações graves: digoxina (hipocalemia amplifica toxicidade); lítio (aumenta toxicidade); antiarrítmicos (arritmia por hipocalemia).',
              'Interacciones graves: digoxina (hipocalemia amplifica toxicidad); litio (aumenta toxicidad); antiarrítmicos (arritmia por hipocalemia).'
            ),
            t(lang,
              'Efeitos metabólicos: hiperuricemia (gota), hiperglicemia, aumento de TG e LDL — considerar em pacientes com esses fatores.',
              'Efectos metabólicos: hiperuricemia (gota), hiperglucemia, aumento de TG y LDL — considerar en pacientes con estos factores.'
            ),
            t(lang,
              'AINEs reduzem efeito anti-hipertensivo — evitar associação.',
              'AINEs reducen efecto antihipertensivo — evitar asociación.'
            )
          ],

          ref: 'ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · ALLHAT Trial · KDIGO Guidelines · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'eTFG < 30 mL/min: hidroclorotiazida perde eficácia diurética neste grau de DRC. Considerar diurético de alça.',
                  'TFGe < 30 mL/min: hidroclorotiazida pierde eficacia diurética en este grado de ERC. Considerar diurético de asa.'
                )
              : t(lang,
                  'Sem ajuste formal em eTFG ≥ 30 mL/min, mas monitorar eletrólitos e eficácia diurética.',
                  'Sin ajuste formal con TFGe ≥ 30 mL/min, pero monitorizar electrolitos y eficacia diurética.'
                ),

            fgMaior50: {
              vo: { dose: '12,5–25 mg', intervalo: '1x/dia', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar K⁺, Na⁺, ácido úrico e glicemia periodicamente.', 'Dosis habitual. Monitorizar K⁺, Na⁺, ácido úrico y glucemia periódicamente.')
            },
            fg30a50: {
              vo: { dose: '12,5–25 mg', intervalo: '1x/dia', doseMaxima: '25 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: eficácia reduzida — usar dose mínima e monitorar K⁺, Na⁺ e creatinina frequentemente.',
                'ERC moderada: eficacia reducida — usar dosis mínima y monitorizar K⁺, Na⁺ y creatinina frecuentemente.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 30 mL/min: hidroclorotiazida geralmente INEFICAZ. Substituir por furosemida ou torsemida.',
                'TFGe < 30 mL/min: hidroclorotiazida generalmente INEFICAZ. Sustituir por furosemida o torasemida.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 10 mL/min / anúria: CONTRAINDICADA — sem eficácia e risco de efeitos adversos sem benefício diurético.',
                'TFGe < 10 mL/min / anuria: CONTRAINDICADA — sin eficacia y riesgo de efectos adversos sin beneficio diurético.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: sem indicação. Pacientes dialíticos devem usar diuréticos de alça se houver diurese residual.',
                'Hemodiálisis: sin indicación. Pacientes dializados deben usar diuréticos de asa si hay diuresis residual.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            hyperuricemiaRisk:       true,
            diabetesRisk:            true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Principal risco: hiponatremia (especialmente em idosas) e hipocalemia. Perde eficácia em DRC grave (eTFG < 30). Efeitos metabólicos: hiperuricemia, hiperglicemia, dislipidemia.',
              'Principal riesgo: hiponatremia (especialmente en ancianas) e hipocalemia. Pierde eficacia en ERC grave (TFGe < 30). Efectos metabólicos: hiperuricemia, hiperglucemia, dislipidemia.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ALLHAT Trial (JAMA 2002)',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'KDIGO Guidelines',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'Tiazídico mais prescrito mundialmente. Base de inúmeras combinações fixas cardiovasculares. Perde eficácia em DRC grave (eTFG < 30). Efeitos metabólicos clinicamente relevantes: gota, hiperglicemia, dislipidemia. Clortalidona é considerada superior para eventos cardiovasculares.',
              'Tiazídico más prescrito mundialmente. Base de numerosas combinaciones fijas cardiovasculares. Pierde eficacia en ERC grave (TFGe < 30). Efectos metabólicos clínicamente relevantes: gota, hiperglucemia, dislipidemia. Clortalidona se considera superior para eventos cardiovasculares.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       31. CLORTALIDONA
       Tiazídico-like de longa duração · t½ 40–60h · 1x/dia
       ALLHAT · SHEP · Superior à HCTZ para eventos CV
       Mais hiponatremia/hipocalemia que HCTZ — monitorar
    ══════════════════════════════════════════════════════════════ */
    clortalidona: {
      name:     { pt: 'Clortalidona', es: 'Clortalidona' },
      category: 'cardio',
      icon:     '💊',
      color:    'rgba(100,116,139,0.10)',
      colorTxt: '#0F172A',

      calculate: (paciente, lang = 'pt') => {
        const fg       = Number(paciente.clcr || paciente.fg || 90);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const idade    = Number(paciente.idade  || 0);
        const k        = Number(paciente.potassio || 0);
        const na       = Number(paciente.sodio    || 0);

        const adultoPadrao = t(lang,
          'HAS: iniciar 12,5 mg VO 1x/dia; manutenção 12,5–25 mg/dia; máx 50 mg/dia. Ação prolongada (t½ 40–60h) — não necessita ajuste para cobertura de 24h.',
          'HTA: iniciar 12,5 mg VO 1 vez/día; mantenimiento 12,5–25 mg/día; máx 50 mg/día. Acción prolongada (t½ 40–60h) — no requiere ajuste para cobertura de 24h.'
        );

        const adultoGrave = t(lang,
          'Idoso ou DRC moderada: iniciar 12,5 mg com monitoração rigorosa de Na⁺, K⁺ e creatinina em 2–4 semanas. Meia-vida longa aumenta risco de acúmulo de efeitos adversos.',
          'Anciano o ERC moderada: iniciar 12,5 mg con monitorización rigurosa de Na⁺, K⁺ y creatinina en 2–4 semanas. Vida media larga aumenta riesgo de acumulación de efectos adversos.'
        );

        return {
          name:  t(lang, 'Clortalidona', 'Clortalidona'),
          class: t(lang,
            'Diurético tiazídico-like de longa duração — Inibidor do NCC (t½ 40–60h, ação 48–72h)',
            'Diurético tipo tiazida de larga duración — Inhibidor del NCC (t½ 40–60h, acción 48–72h)'
          ),

          commercialNames: {
            br: ['Higroton', 'Clortalidona genérica'],
            ar: ['Higroton', 'Clortalidona genérica']
          },

          presentation: [
            t(lang, 'Comprimidos 12,5 mg', 'Comprimidos 12,5 mg'),
            t(lang, 'Comprimidos 25 mg',   'Comprimidos 25 mg'),
            t(lang, 'Comprimidos 50 mg',   'Comprimidos 50 mg')
          ],

          dose: {
            adultoPadrao,
            adultoGrave,
            pediatricaPadrao: t(lang,
              'Uso pediátrico não estabelecido routineiramente. Consultar especialista.',
              'Uso pediátrico no establecido de forma rutinaria. Consultar especialista.'
            ),
            pediatricaGrave:     null,
            pediatricaMeningite: null
          },

          doseKg: {
            padrao:     null,
            grave:      null,
            meningite:  null,
            doseMaxima: t(lang,
              '50 mg/dia. Meia-vida 40–60h — efeitos cumulativos exigem monitoramento mais cauteloso que HCTZ.',
              '50 mg/día. Vida media 40–60h — efectos cumulativos exigen monitorización más cautelosa que HCTZ.'
            )
          },

          therapeuticRange: t(lang,
            'Controle pressórico sustentado 24h; redução de AVC, IAM e IC; prevenção de cálculos por hipercalciúria',
            'Control tensional sostenido 24h; reducción de ACV, IAM e IC; prevención de cálculos por hipercalciuria'
          ),

          dilution: t(lang, 'Uso exclusivo via oral. Não diluir.', 'Uso exclusivo vía oral. No diluir.'),
          speed:    t(lang,
            'Administrar pela manhã. Meia-vida muito longa (40–60h): efeitos adversos acumulam mais que HCTZ — monitorar eletrólitos cuidadosamente.',
            'Administrar por la mañana. Vida media muy larga (40–60h): efectos adversos se acumulan más que HCTZ — monitorizar electrolitos cuidadosamente.'
          ),

          commonAdverseEffects: [
            t(lang, 'Hipocalemia',    'Hipocalemia'),
            t(lang, 'Hiponatremia',   'Hiponatremia'),
            t(lang, 'Hipomagnesemia', 'Hipomagnesemia'),
            t(lang, 'Poliúria',       'Poliuria'),
            t(lang, 'Tontura',        'Mareos'),
            t(lang, 'Hipotensão',     'Hipotensión'),
            t(lang, 'Fraqueza',       'Debilidad'),
            t(lang, 'Cefaleia',       'Cefalea')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hiponatremia grave (mais frequente que HCTZ)', 'Hiponatremia grave (más frecuente que HCTZ)'),
            t(lang, 'Hipocalemia grave com arritmias',              'Hipocalemia grave con arritmias'),
            t(lang, 'Lesão renal aguda',                            'Lesión renal aguda'),
            t(lang, 'Alcalose metabólica',                          'Alcalosis metabólica'),
            t(lang, 'Síncope por hipotensão',                       'Síncope por hipotensión'),
            t(lang, 'Crise de gota',                                'Crisis de gota')
          ],

          risksByPatient: [
            gestante ? t(lang,
              'Gestante: não recomendada como tratamento rotineiro da hipertensão gestacional.',
              'Gestante: no recomendada como tratamiento rutinario de la hipertensión gestacional.'
            ) : null,
            lactante ? t(lang,
              'Lactante: pode reduzir produção de leite em doses elevadas. Usar com cautela.',
              'Lactante: puede reducir la producción de leche en dosis elevadas. Usar con precaución.'
            ) : null,
            idade >= 65 ? t(lang,
              'Idoso: maior risco de hiponatremia (mais comum que com HCTZ), hipocalemia, hipotensão ortostática e quedas. Meia-vida longa amplifica riscos.',
              'Anciano: mayor riesgo de hiponatremia (más común que con HCTZ), hipocalemia, hipotensión ortostática y caídas. Vida media larga amplifica riesgos.'
            ) : null,
            k > 0 && k < 3.5 ? t(lang,
              'ALERTA: Hipocalemia — risco de arritmias e toxicidade digitálica. Repor K⁺.',
              'ALERTA: Hipocalemia — riesgo de arritmias y toxicidad digitálica. Reponer K⁺.'
            ) : null,
            na > 0 && na < 130 ? t(lang,
              'ALERTA: Hiponatremia grave — clortalidona produz mais hiponatremia que HCTZ pela meia-vida longa. Suspender e avaliar.',
              'ALERTA: Hiponatremia grave — clortalidona produce más hiponatremia que HCTZ por su vida media larga. Suspender y evaluar.'
            ) : null,
            fg < 30 ? t(lang,
              'ATENÇÃO: eTFG < 30 mL/min — clortalidona perde eficácia diurética. Considerar diurético de alça.',
              'ATENCIÓN: TFGe < 30 mL/min — clortalidona pierde eficacia diurética. Considerar diurético de asa.'
            ) : null
          ].filter(Boolean),

          alerts: [
            t(lang,
              'Meia-vida muito longa (40–60h): efeitos adversos (hiponatremia, hipocalemia) acumulam mais e são mais duradouros que com HCTZ — monitorar eletrólitos rigorosamente.',
              'Vida media muy larga (40–60h): efectos adversos (hiponatremia, hipocalemia) se acumulan más y son más duraderos que con HCTZ — monitorizar electrolitos rigurosamente.'
            ),
            t(lang,
              'Considerada superior à HCTZ para prevenção de eventos cardiovasculares (ALLHAT, SHEP) — maior controle pressórico sustentado.',
              'Considerada superior a HCTZ para prevención de eventos cardiovasculares (ALLHAT, SHEP) — mayor control tensional sostenido.'
            ),
            t(lang,
              'Interações graves: digoxina (hipocalemia amplifica toxicidade); lítio (toxicidade); antiarrítmicos (arritmia por hipocalemia).',
              'Interacciones graves: digoxina (hipocalemia amplifica toxicidad); litio (toxicidad); antiarrítmicos (arritmia por hipocalemia).'
            ),
            t(lang,
              'Efeitos metabólicos: hiperuricemia, hiperglicemia, aumento de TG/LDL — considerar nesses perfis.',
              'Efectos metabólicos: hiperuricemia, hiperglucemia, aumento de TG/LDL — considerar en estos perfiles.'
            )
          ],

          ref: 'ALLHAT Trial · SHEP Trial · ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · KDIGO Guidelines · Lexicomp',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'eTFG < 30 mL/min: clortalidona perde eficácia diurética. Considerar diurético de alça.',
                  'TFGe < 30 mL/min: clortalidona pierde eficacia diurética. Considerar diurético de asa.'
                )
              : t(lang,
                  'Sem ajuste formal em eTFG ≥ 30 mL/min, mas monitorar eletrólitos — meia-vida longa amplifica risco de acúmulo.',
                  'Sin ajuste formal con TFGe ≥ 30 mL/min, pero monitorizar electrolitos — vida media larga amplifica riesgo de acumulación.'
                ),

            fgMaior50: {
              vo: { dose: '12,5–25 mg', intervalo: '1x/dia', doseMaxima: '50 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose habitual. Monitorar K⁺, Na⁺, ácido úrico e glicemia periódicamente. Meia-vida longa — efeitos se acumulam.',
                'Dosis habitual. Monitorizar K⁺, Na⁺, ácido úrico y glucemia periódicamente. Vida media larga — efectos se acumulan.'
              )
            },
            fg30a50: {
              vo: { dose: '12,5 mg', intervalo: '1x/dia', doseMaxima: '25 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'DRC moderada: eficácia reduzida — usar dose mínima e monitorar K⁺, Na⁺ e creatinina frequentemente.',
                'ERC moderada: eficacia reducida — usar dosis mínima y monitorizar K⁺, Na⁺ y creatinina frecuentemente.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 30 mL/min: clortalidona geralmente INEFICAZ. Substituir por furosemida ou torsemida.',
                'TFGe < 30 mL/min: clortalidona generalmente INEFICAZ. Sustituir por furosemida o torasemida.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'eTFG < 10 mL/min / anúria: CONTRAINDICADA — sem eficácia e risco de eventos adversos sem benefício diurético.',
                'TFGe < 10 mL/min / anuria: CONTRAINDICADA — sin eficacia y riesgo de eventos adversos sin beneficio diurético.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: sem indicação. Substituir por diurético de alça se houver diurese residual.',
                'Hemodiálisis: sin indicación. Sustituir por diurético de asa si hay diuresis residual.'
              )
            }
          },

          safetyFlags: {
            renalHighRisk:           true,
            neurotoxicityRisk:       false,
            qtRisk:                  false,
            hepatotoxicityRisk:      false,
            requiresCultureGuidance: false,
            hypotensionRisk:         true,
            bradycardiaRisk:         false,
            avBlockRisk:             false,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            hyperuricemiaRisk:       true,
            diabetesRisk:            true,
            longHalfLife:            true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Meia-vida muito longa (40–60h) — produz mais hiponatremia e hipocalemia que HCTZ. Monitorar Na⁺ e K⁺ rigorosamente, especialmente em idosos. Perde eficácia diurética em DRC grave (eTFG < 30).',
              'Vida media muy larga (40–60h) — produce más hiponatremia e hipocalemia que HCTZ. Monitorizar Na⁺ y K⁺ rigurosamente, especialmente en ancianos. Pierde eficacia diurética en ERC grave (TFGe < 30).'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ALLHAT Trial (JAMA 2002)',
              'SHEP Trial (JAMA 1991)',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'KDIGO Guidelines',
              'Lexicomp 2026'
            ],
            note: t(lang,
              'Tiazídico-like com meia-vida muito longa (40–60h) — controle pressórico mais sustentado que HCTZ. Preferida por muitos guidelines para HAS por maior proteção cardiovascular (ALLHAT, SHEP). Porém causa mais hiponatremia e hipocalemia, especialmente em idosos.',
              'Tiazídico-like con vida media muy larga (40–60h) — control tensional más sostenido que HCTZ. Preferida por muchas guías para HTA por mayor protección cardiovascular (ALLHAT, SHEP). Sin embargo, causa más hiponatremia e hipocalemia, especialmente en ancianos.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 11 (Diuréticos Tiazídicos: hidroclorotiazida · clortalidona) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 11B — DIURÉTICOS TIAZÍDICO-LIKE ESPECIAIS
     indapamida · metolazona
     HYVET · ADVANCE · bloqueio sequencial do néfron
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       32. INDAPAMIDA
       Tiazídico-like · HAS · Idosos · Diabéticos · HYVET · ADVANCE
    ══════════════════════════════════════════════════════════════ */
    indapamida: {
      id: 'indapamida',
      name: 'Indapamida',
      category: 'cardio',
      commercialNames: ['Natrilix', 'Fludex', 'Indapamida genérica'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const na    = paciente?.sodio    || null;
        const k     = paciente?.potassio || null;

        const alerts = [
          t(lang,
            'Monitorar Na⁺, K⁺, Mg²⁺ e creatinina periodicamente — risco de hiponatremia e hipocalemia.',
            'Monitorizar Na⁺, K⁺, Mg²⁺ y creatinina periódicamente — riesgo de hiponatremia e hipocalemia.'
          ),
          t(lang,
            'Interação importante: digoxina — hipocalemia aumenta risco de toxicidade digitálica.',
            'Interacción importante: digoxina — hipocalemia aumenta riesgo de toxicidad digitálica.'
          ),
          t(lang,
            'Menor impacto metabólico sobre glicemia e perfil lipídico comparado a hidroclorotiazida e clortalidona.',
            'Menor impacto metabólico sobre glucemia y perfil lipídico comparado con hidroclorotiazida y clortalidona.'
          ),
          t(lang,
            'HYVET Trial: reduziu AVC, eventos cardiovasculares e mortalidade em idosos ≥ 80 anos.',
            'HYVET Trial: redujo ACV, eventos cardiovasculares y mortalidad en ancianos ≥ 80 años.'
          ),
          t(lang,
            'ADVANCE Trial: reduziu eventos macro e microvasculares em diabéticos tipo 2.',
            'ADVANCE Trial: redujo eventos macro y microvasculares en diabéticos tipo 2.'
          )
        ];

        if (na !== null && na < 130) {
          alerts.unshift(t(lang,
            `ALERTA: Na⁺ ${na} mEq/L — hiponatremia grave. Suspender indapamida imediatamente.`,
            `ALERTA: Na⁺ ${na} mEq/L — hiponatremia grave. Suspender indapamida inmediatamente.`
          ));
        } else if (na !== null && na < 136) {
          alerts.unshift(t(lang,
            `ATENÇÃO: Na⁺ ${na} mEq/L — hiponatremia leve/moderada. Avaliar dose e hidratação.`,
            `ATENCIÓN: Na⁺ ${na} mEq/L — hiponatremia leve/moderada. Evaluar dosis e hidratación.`
          ));
        }

        if (k !== null && k < 3.0) {
          alerts.unshift(t(lang,
            `ALERTA: K⁺ ${k} mEq/L — hipocalemia grave. Suspender ou reduzir e repor potássio.`,
            `ALERTA: K⁺ ${k} mEq/L — hipocalemia grave. Suspender o reducir y reponer potasio.`
          ));
        } else if (k !== null && k < 3.5) {
          alerts.unshift(t(lang,
            `ATENÇÃO: K⁺ ${k} mEq/L — hipocalemia. Avaliar suplementação de K⁺.`,
            `ATENCIÓN: K⁺ ${k} mEq/L — hipocalemia. Evaluar suplementación de K⁺.`
          ));
        }

        if (fg < 30) {
          alerts.unshift(t(lang,
            `ATENÇÃO: ClCr ${fg} mL/min — eficácia reduzida. Considerar diurético de alça.`,
            `ATENCIÓN: ClCr ${fg} mL/min — eficacia reducida. Considerar diurético de asa.`
          ));
        }

        if (idade >= 80) {
          alerts.push(t(lang,
            'Idoso ≥ 80 anos: monitorar Na⁺ com frequência — risco elevado de hiponatremia sintomática e quedas.',
            'Anciano ≥ 80 años: monitorizar Na⁺ frecuentemente — riesgo elevado de hiponatremia sintomática y caídas.'
          ));
        }

        return {
          id:       'indapamida',
          name:     'Indapamida',
          class:    t(lang, 'Diurético tiazídico-like', 'Diurético tipo tiazida'),
          category: 'cardio',

          commercialNames: ['Natrilix', 'Fludex', 'Indapamida genérica'],

          presentation: [
            t(lang, 'Comprimidos 1,5 mg LP', 'Comprimidos 1,5 mg LP'),
            t(lang, 'Comprimidos 2,5 mg', 'Comprimidos 2,5 mg')
          ],

          mechanism: t(lang,
            'Inibe reabsorção de sódio no túbulo distal. Possui também efeito vasodilatador arterial direto, reduzindo resistência vascular periférica. Menor impacto metabólico que hidroclorotiazida e clortalidona.',
            'Inhibe la reabsorción de sodio en el túbulo distal. También posee efecto vasodilatador arterial directo, reduciendo la resistencia vascular periférica. Menor impacto metabólico que hidroclorotiazida y clortalidona.'
          ),

          halfLife:  '14–25 horas',
          onset:     t(lang, '1–2 horas', '1–2 horas'),

          dose: {
            adultoPadrao: fg >= 30
              ? t(lang,
                  '1,5 mg LP VO 1x/dia (preferencial) ou 2,5 mg VO 1x/dia. Reavaliar em 2–4 semanas.',
                  '1,5 mg LP VO 1 vez/día (preferencial) o 2,5 mg VO 1 vez/día. Reevaluar en 2–4 semanas.'
                )
              : t(lang,
                  'ClCr < 30 mL/min: eficácia reduzida. Considerar substituição por diurético de alça.',
                  'ClCr < 30 mL/min: eficacia reducida. Considerar sustitución por diurético de asa.'
                ),
            adultoGrave: t(lang,
              'Dose máxima: 2,5 mg/dia para HAS. Preferir associação com IECA, BRA ou BCC ao invés de escalar dose.',
              'Dosis máxima: 2,5 mg/día para HTA. Preferir asociación con IECA, ARA-II o BCC en lugar de escalar dosis.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: não recomendada como tratamento rotineiro da hipertensão gestacional.',
              'Gestante: no recomendada como tratamiento rutinario de la hipertensión gestacional.'
            ),
            t(lang,
              'Lactante: dados limitados — utilizar com cautela.',
              'Lactante: datos limitados — utilizar con precaución.'
            ),
            t(lang,
              `Idoso (${idade} anos): excelente evidência (HYVET), porém monitorar Na⁺, K⁺ e risco de quedas.`,
              `Anciano (${idade} años): excelente evidencia (HYVET), pero monitorizar Na⁺, K⁺ y riesgo de caídas.`
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Hipocalemia', 'Hipocalemia'),
            t(lang, 'Hiponatremia', 'Hiponatremia'),
            t(lang, 'Tontura', 'Mareos'),
            t(lang, 'Cefaleia', 'Cefalea'),
            t(lang, 'Fadiga', 'Fatiga'),
            t(lang, 'Poliúria', 'Poliuria'),
            t(lang, 'Hipotensão', 'Hipotensión')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hiponatremia grave', 'Hiponatremia grave'),
            t(lang, 'Hipocalemia grave', 'Hipocalemia grave'),
            t(lang, 'Arritmias ventriculares por distúrbio eletrolítico', 'Arritmias ventriculares por trastorno electrolítico'),
            t(lang, 'Lesão renal aguda', 'Lesión renal aguda'),
            t(lang, 'Síncope', 'Síncope'),
            t(lang, 'Encefalopatia hepática em predispostos', 'Encefalopatía hepática en predispuestos')
          ],

          alerts,

          ref: 'HYVET Trial · ADVANCE Trial · ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: eficácia diurética reduzida significativamente. Considerar troca para diurético de alça.',
                  'ClCr < 30 mL/min: eficacia diurética reducida significativamente. Considerar cambio a diurético de asa.'
                )
              : t(lang,
                  'Não requer ajuste renal habitual acima de 30 mL/min. Monitorar eletrólitos.',
                  'No requiere ajuste renal habitual por encima de 30 mL/min. Monitorizar electrolitos.'
                ),

            fgMaior50: {
              vo: { dose: '1,5 mg LP', intervalo: '1x/dia', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose habitual. Prefira formulação LP 1,5 mg.',
                'Dosis habitual. Prefiera formulación LP 1,5 mg.'
              )
            },
            fg30a50: {
              vo: { dose: '1,5 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: pode usar com cautela. Monitorar eletrólitos e função renal.',
                'ClCr 30–50 mL/min: puede usarse con precaución. Monitorizar electrolitos y función renal.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 10–30 mL/min: perde eficácia diurética. Substituir por diurético de alça.',
                'ClCr 10–30 mL/min: pierde eficacia diurética. Sustituir por diurético de asa.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min / anúria: ineficaz. Usar diurético de alça.',
                'ClCr < 10 mL/min / anuria: ineficaz. Usar diurético de asa.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: ineficaz. Diurético de alça é a escolha, se ainda houver diurese residual.',
                'Hemodiálisis: ineficaz. Diurético de asa es la elección si aún hay diuresis residual.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:    true,
            hypokalemiaRisk:    true,
            hyponatremiaRisk:   true,
            hyperuricemiaRisk:  true,
            diabetesRisk:       false,
            electrolyteRisk:    true,
            renalHighRisk:      false,
            qtRisk:             false,
            pregnancyCaution:   true,
            elderlyEvidence:    true,
            warning: t(lang,
              'Possui menor impacto metabólico que outras tiazidas, porém mantém risco significativo de hiponatremia e hipocalemia. Excelente evidência em idosos (HYVET) e diabéticos (ADVANCE).',
              'Posee menor impacto metabólico que otras tiazidas, pero mantiene riesgo significativo de hiponatremia e hipocalemia. Excelente evidencia en ancianos (HYVET) y diabéticos (ADVANCE).'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'HYVET Trial', 'ADVANCE Trial',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'Lexicomp 2026', 'FDA/EMA label'
            ],
            note: t(lang,
              'Fármaco com excelente evidência em idosos e diabéticos, associado à redução de AVC e eventos cardiovasculares. Tiazídico-like com perfil metabólico mais favorável.',
              'Fármaco con excelente evidencia en ancianos y diabéticos, asociado a reducción de ACV y eventos cardiovasculares. Tiazídico-like con perfil metabólico más favorable.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       33. METOLAZONA
       Tiazídico-like potente · IC avançada · Resistência diurética
       Bloqueio sequencial do néfron · ESC/AHA HF Guidelines
    ══════════════════════════════════════════════════════════════ */
    metolazona: {
      id: 'metolazona',
      name: 'Metolazona',
      category: 'cardio',
      commercialNames: ['Zaroxolyn', 'Metolazona importada'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const na    = paciente?.sodio    || null;
        const k     = paciente?.potassio || null;

        const alerts = [
          t(lang,
            'Metolazona é um dos diuréticos mais potentes — pode causar depleção volêmica rápida, hipocalemia grave e lesão renal aguda.',
            'Metolazona es uno de los diuréticos más potentes — puede causar depleción de volumen rápida, hipocalemia grave y lesión renal aguda.'
          ),
          t(lang,
            'Administrar 30–60 min antes do diurético de alça para potencializar bloqueio sequencial do néfron.',
            'Administrar 30–60 min antes del diurético de asa para potenciar el bloqueo secuencial del nefrón.'
          ),
          t(lang,
            'Monitorar peso diário, balanço hídrico, creatinina, sódio, potássio e magnésio durante uso.',
            'Monitorizar peso diario, balance hídrico, creatinina, sodio, potasio y magnesio durante el uso.'
          ),
          t(lang,
            'Interação grave: digoxina — hipocalemia aumenta expressivamente risco de toxicidade digitálica.',
            'Interacción grave: digoxina — hipocalemia aumenta expresivamente el riesgo de toxicidad digitálica.'
          ),
          t(lang,
            'Diferencial: mantém eficácia diurética mesmo em DRC avançada (distingue-se dos tiazídicos clássicos).',
            'Diferencial: mantiene eficacia diurética incluso en ERC avanzada (se diferencia de las tiazidas clásicas).'
          )
        ];

        if (na !== null && na < 130) {
          alerts.unshift(t(lang,
            `ALERTA: Na⁺ ${na} mEq/L — hiponatremia grave. Suspender metolazona imediatamente.`,
            `ALERTA: Na⁺ ${na} mEq/L — hiponatremia grave. Suspender metolazona inmediatamente.`
          ));
        } else if (na !== null && na < 136) {
          alerts.unshift(t(lang,
            `ATENÇÃO: Na⁺ ${na} mEq/L — hiponatremia. Avaliar dose e volemia.`,
            `ATENCIÓN: Na⁺ ${na} mEq/L — hiponatremia. Evaluar dosis y volemia.`
          ));
        }

        if (k !== null && k < 3.0) {
          alerts.unshift(t(lang,
            `ALERTA: K⁺ ${k} mEq/L — hipocalemia grave. Suspender e repor potássio urgentemente.`,
            `ALERTA: K⁺ ${k} mEq/L — hipocalemia grave. Suspender y reponer potasio urgentemente.`
          ));
        } else if (k !== null && k < 3.5) {
          alerts.unshift(t(lang,
            `ATENÇÃO: K⁺ ${k} mEq/L — hipocalemia. Avaliar reposição de K⁺.`,
            `ATENCIÓN: K⁺ ${k} mEq/L — hipocalemia. Evaluar reposición de K⁺.`
          ));
        }

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): risco extremamente elevado de hiponatremia, hipocalemia, hipotensão e insuficiência renal. Monitorização intensiva obrigatória.`,
            `Anciano (${idade} años): riesgo extremadamente elevado de hiponatremia, hipocalemia, hipotensión e insuficiencia renal. Monitorización intensiva obligatoria.`
          ));
        }

        return {
          id:       'metolazona',
          name:     'Metolazona',
          class:    t(lang, 'Diurético tiazídico-like de alta potência', 'Diurético tipo tiazida de alta potencia'),
          category: 'cardio',

          commercialNames: ['Zaroxolyn', 'Metolazona importada'],

          presentation: [
            t(lang, 'Comprimidos 2,5 mg', 'Comprimidos 2,5 mg'),
            t(lang, 'Comprimidos 5 mg',   'Comprimidos 5 mg'),
            t(lang, 'Comprimidos 10 mg',  'Comprimidos 10 mg')
          ],

          mechanism: t(lang,
            'Inibe reabsorção de sódio no túbulo contornado distal. Quando associada a diuréticos de alça promove bloqueio sequencial do néfron, aumentando intensamente natriurese e diurese. Mantém eficácia mesmo em DRC avançada.',
            'Inhibe la reabsorción de sodio en el túbulo contorneado distal. Cuando se asocia a diuréticos de asa produce bloqueo secuencial del nefrón, aumentando intensamente la natriuresis y la diuresis. Mantiene eficacia incluso en ERC avanzada.'
          ),

          halfLife:  '12–24 horas',
          onset:     t(lang, '~1 hora', '~1 hora'),

          dose: {
            adultoPadrao: t(lang,
              '2,5 mg VO 1x/dia, administrar 30–60 min antes do diurético de alça.',
              '2,5 mg VO 1 vez/día, administrar 30–60 min antes del diurético de asa.'
            ),
            adultoGrave: t(lang,
              '2,5–10 mg VO/dia. Dose máxima: 20 mg/dia sob monitorização especializada.',
              '2,5–10 mg VO/día. Dosis máxima: 20 mg/día bajo monitorización especializada.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: utilizar apenas quando claramente necessário e sob supervisão especializada.',
              'Gestante: utilizar solo cuando sea claramente necesario y bajo supervisión especializada.'
            ),
            t(lang,
              'Lactante: dados limitados — utilizar com cautela.',
              'Lactante: datos limitados — utilizar con precaución.'
            ),
            t(lang,
              `Idoso (${idade} anos): risco extremamente elevado de hiponatremia, hipocalemia, hipotensão e insuficiência renal. Monitorização intensiva.`,
              `Anciano (${idade} años): riesgo extremadamente elevado de hiponatremia, hipocalemia, hipotensión e insuficiencia renal. Monitorización intensiva.`
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Poliúria intensa',  'Poliuria intensa'),
            t(lang, 'Hipotensão',        'Hipotensión'),
            t(lang, 'Tontura',           'Mareos'),
            t(lang, 'Fraqueza',          'Debilidad'),
            t(lang, 'Hipocalemia',       'Hipocalemia'),
            t(lang, 'Hiponatremia',      'Hiponatremia'),
            t(lang, 'Hipomagnesemia',    'Hipomagnesemia'),
            t(lang, 'Desidratação',      'Deshidratación')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipocalemia grave',                   'Hipocalemia grave'),
            t(lang, 'Hiponatremia grave',                  'Hiponatremia grave'),
            t(lang, 'Arritmias ventriculares',             'Arritmias ventriculares'),
            t(lang, 'Torsades de Pointes por distúrbio eletrolítico', 'Torsades de Pointes por trastorno electrolítico'),
            t(lang, 'Lesão renal aguda',                   'Lesión renal aguda'),
            t(lang, 'Choque hipovolêmico',                 'Shock hipovolémico'),
            t(lang, 'Síncope',                             'Síncope'),
            t(lang, 'Alcalose metabólica grave',           'Alcalosis metabólica grave')
          ],

          alerts,

          ref: 'ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · KDIGO Guidelines · Goodman & Gilman · Lexicomp · UpToDate',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 30,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: metolazona MANTÉM eficácia (diferencial vs tiazídicos clássicos). Monitorização intensiva de eletrólitos e função renal obrigatória.',
                  'ClCr < 30 mL/min: metolazona MANTIENE eficacia (diferencial vs tiazidas clásicas). Monitorización intensiva de electrolitos y función renal obligatoria.'
                )
              : t(lang,
                  'Não requer ajuste renal habitual. Monitorizar eletrólitos rigorosamente.',
                  'No requiere ajuste renal habitual. Monitorizar electrolitos rigurosamente.'
                ),

            fgMaior50: {
              vo: { dose: '2,5–5 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Dose habitual. Administrar 30–60 min antes do diurético de alça.',
                'Dosis habitual. Administrar 30–60 min antes del diurético de asa.'
              )
            },
            fg30a50: {
              vo: { dose: '2,5 mg', intervalo: '1x/dia (cautela)', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: iniciar com dose mínima. Monitorar eletrólitos e função renal frequentemente.',
                'ClCr 30–50 mL/min: iniciar con dosis mínima. Monitorizar electrolitos y función renal frecuentemente.'
              )
            },
            fg10a30: {
              vo: { dose: '2,5 mg', intervalo: '1x/dia (máx 2–3x/semana — supervisão especializada)', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 10–30 mL/min: diferencial — mantém alguma eficácia. Uso restrito a especialistas. Monitorização intensiva diária.',
                'ClCr 10–30 mL/min: diferencial — mantiene cierta eficacia. Uso restringido a especialistas. Monitorización intensiva diaria.'
              )
            },
            fgMenor10: {
              vo: { dose: '2,5 mg', intervalo: 'sob supervisão intensiva', doseMaxima: '2,5 mg/uso', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min: uso somente em ambiente hospitalar sob supervisão especializada. Risco extremo.',
                'ClCr < 10 mL/min: uso solo en ambiente hospitalario bajo supervisión especializada. Riesgo extremo.'
              )
            },
            hemodialise: {
              vo: { dose: 'individualizado', intervalo: 'somente em ambiente hospitalar', doseMaxima: null, unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: uso possível em contexto especializado para controle de sobrecarga volêmica refratária. Monitorização contínua.',
                'Hemodiálisis: uso posible en contexto especializado para control de sobrecarga de volumen refractaria. Monitorización continua.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:         true,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            electrolyteRisk:         true,
            hyperuricemiaRisk:       true,
            diabetesRisk:            true,
            renalHighRisk:           true,
            qtRisk:                  true,
            hospitalizationLevelDrug: true,
            pregnancyCaution:        true,
            warning: t(lang,
              'Metolazona é um dos diuréticos mais potentes utilizados em IC avançada. Pode causar rápida depleção volêmica, hipocalemia grave, hiponatremia grave e insuficiência renal aguda. Uso hospitalar preferencial.',
              'La metolazona es uno de los diuréticos más potentes utilizados en IC avanzada. Puede causar rápida depleción de volumen, hipocalemia grave, hiponatremia grave e insuficiencia renal aguda. Uso hospitalario preferencial.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'KDIGO Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'UpToDate'
            ],
            note: t(lang,
              'Fármaco utilizado principalmente em IC avançada com resistência diurética. Principal agente para bloqueio sequencial do néfron. Diferencial: mantém eficácia em DRC avançada, ao contrário dos tiazídicos clássicos.',
              'Fármaco utilizado principalmente en IC avanzada con resistencia diurética. Principal agente para bloqueo secuencial del nefrón. Diferencial: mantiene eficacia en ERC avanzada, a diferencia de las tiazidas clásicas.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 11B (Diuréticos Tiazídico-like especiais: indapamida · metolazona) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 11C — DIURÉTICOS ESPECIAIS
     acetazolamida · manitol
     Inibidor anidrase carbônica · Osmótico · ADVOR · Neurocrítico
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       34. ACETAZOLAMIDA
       Inibidor anidrase carbônica · IC aguda descompensada · Alcalose
       ADVOR Trial · Bicarbonatúria · Bloqueio tubular proximal
    ══════════════════════════════════════════════════════════════ */
    acetazolamida: {
      id: 'acetazolamida',
      name: 'Acetazolamida',
      category: 'cardio',
      commercialNames: ['Diamox', 'Acetazolamida genérica'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const na    = paciente?.sodio    || null;
        const k     = paciente?.potassio || null;

        const alerts = [
          t(lang,
            'ADVOR Trial (NEJM 2022): acetazolamida 500 mg IV/dia + alça → descongestão mais rápida na IC aguda descompensada.',
            'ADVOR Trial (NEJM 2022): acetazolamida 500 mg IV/día + asa → descongestión más rápida en IC aguda descompensada.'
          ),
          t(lang,
            'Monitorar bicarbonato e pH — risco de acidose metabólica como efeito adverso principal.',
            'Monitorizar bicarbonato y pH — riesgo de acidosis metabólica como efecto adverso principal.'
          ),
          t(lang,
            'Contraindicada em acidose metabólica pré-existente, hiponatremia grave, hipocalemia grave e insuficiência renal grave.',
            'Contraindicada en acidosis metabólica preexistente, hiponatremia grave, hipocalemia grave e insuficiencia renal grave.'
          ),
          t(lang,
            'Interação grave: aspirina em altas doses — risco de toxicidade grave por acetazolamida.',
            'Interacción grave: aspirina en altas dosis — riesgo de toxicidad grave por acetazolamida.'
          ),
          t(lang,
            'Interação grave: topiramato e zonisamida — aumento do risco de acidose metabólica e nefrolitíase.',
            'Interacción grave: topiramato y zonisamida — aumento del riesgo de acidosis metabólica y nefrolitiasis.'
          ),
          t(lang,
            'Parestesias em mãos, pés e lábios são efeito adverso comum — orientar paciente.',
            'Las parestesias en manos, pies y labios son efecto adverso frecuente — orientar al paciente.'
          )
        ];

        if (na !== null && na < 130) {
          alerts.unshift(t(lang,
            `CONTRAINDICADA: Na⁺ ${na} mEq/L — hiponatremia grave. Não iniciar acetazolamida.`,
            `CONTRAINDICADA: Na⁺ ${na} mEq/L — hiponatremia grave. No iniciar acetazolamida.`
          ));
        }

        if (k !== null && k < 3.0) {
          alerts.unshift(t(lang,
            `CONTRAINDICADA: K⁺ ${k} mEq/L — hipocalemia grave. Corrigir antes de iniciar.`,
            `CONTRAINDICADA: K⁺ ${k} mEq/L — hipocalemia grave. Corregir antes de iniciar.`
          ));
        }

        if (fg < 30) {
          alerts.unshift(t(lang,
            `ATENÇÃO: ClCr ${fg} mL/min — insuficiência renal grave. Evitar acetazolamida; risco de acúmulo e acidose.`,
            `ATENCIÓN: ClCr ${fg} mL/min — insuficiencia renal grave. Evitar acetazolamida; riesgo de acumulación y acidosis.`
          ));
        }

        return {
          id:       'acetazolamida',
          name:     'Acetazolamida',
          class:    t(lang, 'Inibidor da anidrase carbônica / Diurético proximal', 'Inhibidor de la anhidrasa carbónica / Diurético proximal'),
          category: 'cardio',

          commercialNames: ['Diamox', 'Acetazolamida genérica'],

          presentation: [
            t(lang, 'Comprimidos 250 mg',         'Comprimidos 250 mg'),
            t(lang, 'Ampolas injetáveis 500 mg',   'Ampollas inyectables 500 mg')
          ],

          mechanism: t(lang,
            'Inibe a anidrase carbônica no túbulo proximal, reduzindo reabsorção de bicarbonato, sódio e água. Promove bicarbonatúria, diurese leve/moderada e acidificação metabólica relativa. Útil na alcalose metabólica associada a diuréticos de alça e na congestão em IC aguda.',
            'Inhibe la anhidrasa carbónica en el túbulo proximal, reduciendo la reabsorción de bicarbonato, sodio y agua. Produce bicarbonaturia, diuresis leve/moderada y acidificación metabólica relativa. Útil en alcalosis metabólica asociada a diuréticos de asa y en la congestión en IC aguda.'
          ),

          halfLife:  t(lang, '10–15 horas', '10–15 horas'),
          onset:     t(lang, '1–2 horas VO; 2 min IV', '1–2 horas VO; 2 min IV'),

          dose: {
            adultoPadrao: fg >= 30
              ? t(lang,
                  '250–500 mg VO/IV 1x/dia. Em IC aguda: 500 mg IV/dia associado a diurético de alça (ADVOR).',
                  '250–500 mg VO/IV 1 vez/día. En IC aguda: 500 mg IV/día asociado a diurético de asa (ADVOR).'
                )
              : t(lang,
                  'ClCr < 30 mL/min: evitar. Risco de acúmulo e acidose metabólica grave.',
                  'ClCr < 30 mL/min: evitar. Riesgo de acumulación y acidosis metabólica grave.'
                ),
            adultoGrave: t(lang,
              'Dose máxima: 1000 mg/dia em contextos selecionados e monitorizados.',
              'Dosis máxima: 1000 mg/día en contextos seleccionados y monitorizados.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: usar apenas se benefício superar risco; evitar no 1º trimestre.',
              'Gestante: usar solo si el beneficio supera el riesgo; evitar en el 1er trimestre.'
            ),
            t(lang,
              'Lactante: geralmente compatível em doses usuais; monitorar lactente.',
              'Lactante: generalmente compatible en dosis habituales; monitorizar al lactante.'
            ),
            t(lang,
              `Idoso (${idade} anos): maior risco de acidose metabólica, distúrbios eletrolíticos, sonolência, quedas e piora renal.`,
              `Anciano (${idade} años): mayor riesgo de acidosis metabólica, trastornos electrolíticos, somnolencia, caídas y deterioro renal.`
            ),
            t(lang,
              'DPOC com retenção crônica de CO₂: contraindicação relativa — acidose respiratória pode ser agravada.',
              'EPOC con retención crónica de CO₂: contraindicación relativa — acidosis respiratoria puede agravarse.'
            ),
            t(lang,
              'Cirrose/Insuficiência hepática grave: evitar — risco de precipitar encefalopatia hepática.',
              'Cirrosis/Insuficiencia hepática grave: evitar — riesgo de precipitar encefalopatía hepática.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Parestesias (mãos, pés, lábios)', 'Parestesias (manos, pies, labios)'),
            t(lang, 'Poliúria',                         'Poliuria'),
            t(lang, 'Náuseas',                          'Náuseas'),
            t(lang, 'Fadiga',                           'Fatiga'),
            t(lang, 'Sonolência',                       'Somnolencia'),
            t(lang, 'Alteração do paladar',             'Alteración del gusto'),
            t(lang, 'Hipocalemia',                      'Hipocalemia')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Acidose metabólica grave',              'Acidosis metabólica grave'),
            t(lang, 'Hipocalemia grave',                     'Hipocalemia grave'),
            t(lang, 'Hiponatremia',                          'Hiponatremia'),
            t(lang, 'Lesão renal aguda',                     'Lesión renal aguda'),
            t(lang, 'Cálculos renais (nefrolitíase)',         'Cálculos renales (nefrolitiasis)'),
            t(lang, 'Reações cutâneas graves raras',         'Reacciones cutáneas graves raras'),
            t(lang, 'Encefalopatia hepática em cirrose',     'Encefalopatía hepática en cirrosis')
          ],

          alerts,

          ref: 'ADVOR Trial (NEJM 2022) · ESC Heart Failure Guidelines · AHA/ACC/HFSA Heart Failure Guidelines · Goodman & Gilman · Lexicomp · FDA label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 50,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: EVITAR. Risco elevado de acúmulo, acidose metabólica grave e lesão renal.',
                  'ClCr < 30 mL/min: EVITAR. Riesgo elevado de acumulación, acidosis metabólica grave y lesión renal.'
                )
              : fg < 50
              ? t(lang,
                  'ClCr 30–50 mL/min: usar com cautela; monitorizar bicarbonato e função renal frequentemente.',
                  'ClCr 30–50 mL/min: usar con precaución; monitorizar bicarbonato y función renal frecuentemente.'
                )
              : t(lang,
                  'ClCr ≥ 50 mL/min: uso habitual com monitorização de bicarbonato e eletrólitos.',
                  'ClCr ≥ 50 mL/min: uso habitual con monitorización de bicarbonato y electrolitos.'
                ),

            fgMaior50: {
              vo: { dose: '250–500 mg', intervalo: '1x/dia', doseMaxima: '1000 mg/dia', unidade: 'mg' },
              ev: { dose: '500 mg', intervalo: '1x/dia (em IC aguda com diurético de alça)', doseMaxima: '500 mg/dose', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'Dose habitual. Monitorar bicarbonato, K⁺, Na⁺ e função renal.',
                'Dosis habitual. Monitorizar bicarbonato, K⁺, Na⁺ y función renal.'
              )
            },
            fg30a50: {
              vo: { dose: '250 mg', intervalo: '1x/dia (cautela)', doseMaxima: '250 mg/dia', unidade: 'mg' },
              ev: { dose: '250 mg', intervalo: '1x/dia (cautela)', doseMaxima: '250 mg/dia', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: dose reduzida. Monitorar bicarbonato, pH e eletrólitos frequentemente.',
                'ClCr 30–50 mL/min: dosis reducida. Monitorizar bicarbonato, pH y electrolitos frecuentemente.'
              )
            },
            fg10a30: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr 10–30 mL/min: EVITAR. Risco de acúmulo e acidose metabólica grave.',
                'ClCr 10–30 mL/min: EVITAR. Riesgo de acumulación y acidosis metabólica grave.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min: CONTRAINDICADA. Acúmulo e toxicidade grave.',
                'ClCr < 10 mL/min: CONTRAINDICADA. Acumulación y toxicidad grave.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: CONTRAINDICADA em uso rotineiro. Dialisável — discussão especializada necessária em caso excepcional.',
                'Hemodiálisis: CONTRAINDICADA en uso rutinario. Dializable — discusión especializada necesaria en caso excepcional.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:         true,
            hypokalemiaRisk:         true,
            hyponatremiaRisk:        true,
            metabolicAcidosisRisk:   true,
            nephrolithiasisRisk:     true,
            renalHighRisk:           true,
            qtRisk:                  false,
            pregnancyCaution:        true,
            warning: t(lang,
              'Acetazolamida pode acelerar descongestão na IC aguda (ADVOR), mas exige controle rigoroso de bicarbonato, pH, K⁺, Na⁺ e função renal. Contraindicada em acidose metabólica, DRC grave e insuficiência hepática grave.',
              'Acetazolamida puede acelerar la descongestión en IC aguda (ADVOR), pero exige control riguroso de bicarbonato, pH, K⁺, Na⁺ y función renal. Contraindicada en acidosis metabólica, ERC grave e insuficiencia hepática grave.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ADVOR Trial (NEJM 2022)',
              'ESC Heart Failure Guidelines 2021/2023',
              'AHA/ACC/HFSA Heart Failure Guidelines 2022',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA label'
            ],
            note: t(lang,
              'Fármaco adjuvante relevante na IC aguda congestiva (ADVOR Trial), especialmente quando há alcalose metabólica induzida por diuréticos de alça ou necessidade de bloqueio tubular proximal.',
              'Fármaco adyuvante relevante en IC aguda congestiva (ADVOR Trial), especialmente cuando hay alcalosis metabólica inducida por diuréticos de asa o necesidad de bloqueo tubular proximal.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       35. MANITOL
       Diurético osmótico · HIC · Edema cerebral · Neurocrítico
       Glaucoma agudo · Rabdomiólise · Diurese osmótica
    ══════════════════════════════════════════════════════════════ */
    manitol: {
      id: 'manitol',
      name: 'Manitol',
      category: 'cardio',
      commercialNames: ['Manitol Baxter', 'Manitol JP', 'Manitol genérico'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const na    = paciente?.sodio    || null;

        const doseMin = (0.25 * peso).toFixed(0);
        const doseMax = (1.0  * peso).toFixed(0);

        const alerts = [
          t(lang,
            `Dose osmótica padrão: 0,25–1 g/kg IV. Para peso ${peso} kg → ${doseMin}–${doseMax} g IV.`,
            `Dosis osmótica estándar: 0,25–1 g/kg IV. Para peso ${peso} kg → ${doseMin}–${doseMax} g IV.`
          ),
          t(lang,
            'Monitorar osmolaridade sérica — suspender se osmolaridade > 320 mOsm/kg (risco de lesão renal e acúmulo).',
            'Monitorizar osmolaridad sérica — suspender si osmolaridad > 320 mOsm/kg (riesgo de lesión renal y acumulación).'
          ),
          t(lang,
            'CONTRAINDICADO em edema pulmonar ativo, ICC descompensada e anúria estabelecida.',
            'CONTRAINDICADO en edema pulmonar activo, ICC descompensada y anuria establecida.'
          ),
          t(lang,
            'Pode causar expansão inicial do volume intravascular — risco em pacientes com IC prévia ou oligúria.',
            'Puede causar expansión inicial del volumen intravascular — riesgo en pacientes con IC previa u oliguria.'
          ),
          t(lang,
            'Monitorar diurese horária, sódio sérico, osmolaridade e creatinina durante infusão.',
            'Monitorizar diuresis horaria, sodio sérico, osmolaridad y creatinina durante la infusión.'
          )
        ];

        if (na !== null && na > 155) {
          alerts.unshift(t(lang,
            `ALERTA: Na⁺ ${na} mEq/L — hipernatremia. Risco de agravamento com manitol. Avaliar alternativas.`,
            `ALERTA: Na⁺ ${na} mEq/L — hipernatremia. Riesgo de agravamiento con manitol. Evaluar alternativas.`
          ));
        }

        if (fg < 30) {
          alerts.unshift(t(lang,
            `ATENÇÃO: ClCr ${fg} mL/min — insuficiência renal grave. Risco de acúmulo de manitol e sobrecarga volêmica paradoxal. Usar somente sob supervisão especializada.`,
            `ATENCIÓN: ClCr ${fg} mL/min — insuficiencia renal grave. Riesgo de acumulación de manitol y sobrecarga de volumen paradójica. Usar solo bajo supervisión especializada.`
          ));
        }

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): maior risco de desidratação, distúrbios eletrolíticos, insuficiência renal e sobrecarga volêmica paradoxal.`,
            `Anciano (${idade} años): mayor riesgo de deshidratación, trastornos electrolíticos, insuficiencia renal y sobrecarga de volumen paradójica.`
          ));
        }

        return {
          id:       'manitol',
          name:     'Manitol',
          class:    t(lang, 'Diurético osmótico', 'Diurético osmótico'),
          category: 'cardio',

          commercialNames: ['Manitol Baxter', 'Manitol JP', 'Manitol genérico'],

          presentation: [
            t(lang, 'Solução IV 10%  — frascos 250 mL e 500 mL', 'Solución IV 10% — frascos 250 mL y 500 mL'),
            t(lang, 'Solução IV 20%  — frascos 250 mL e 500 mL', 'Solución IV 20% — frascos 250 mL y 500 mL')
          ],

          mechanism: t(lang,
            'Aumenta a osmolaridade plasmática e tubular, promovendo movimentação de água do meio intracelular para o intravascular e reduzindo reabsorção de água nos túbulos renais. Produz intensa diurese osmótica sem metabolização.',
            'Aumenta la osmolaridad plasmática y tubular, promoviendo el movimiento de agua desde el espacio intracelular al intravascular y reduciendo la reabsorción de agua en los túbulos renales. Produce intensa diuresis osmótica sin metabolización.'
          ),

          halfLife:  t(lang, '1–2 horas (função renal normal)', '1–2 horas (función renal normal)'),
          onset:     t(lang, '5–15 minutos IV', '5–15 minutos IV'),

          dose: {
            adultoPadrao: t(lang,
              `0,25–1 g/kg IV conforme indicação. Para ${peso} kg → ${doseMin}–${doseMax} g IV em 15–30 min.`,
              `0,25–1 g/kg IV según indicación. Para ${peso} kg → ${doseMin}–${doseMax} g IV en 15–30 min.`
            ),
            adultoGrave: t(lang,
              'Doses repetidas conforme protocolo institucional e monitorização da osmolaridade sérica (meta < 320 mOsm/kg).',
              'Dosis repetidas según protocolo institucional y monitorización de la osmolaridad sérica (meta < 320 mOsm/kg).'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: utilizar apenas quando claramente necessário e sob supervisão especializada.',
              'Gestante: utilizar solo cuando sea claramente necesario y bajo supervisión especializada.'
            ),
            t(lang,
              'Lactante: dados limitados — utilizar com cautela.',
              'Lactante: datos limitados — utilizar con precaución.'
            ),
            t(lang,
              `Idoso (${idade} anos): maior risco de desidratação, distúrbios eletrolíticos, lesão renal e sobrecarga volêmica paradoxal.`,
              `Anciano (${idade} años): mayor riesgo de deshidratación, trastornos electrolíticos, lesión renal y sobrecarga de volumen paradójica.`
            ),
            t(lang,
              'ICC: CONTRAINDICADO em descompensação ativa — pode precipitar edema pulmonar.',
              'ICC: CONTRAINDICADO en descompensación activa — puede precipitar edema pulmonar.'
            ),
            t(lang,
              'Anúria estabelecida: CONTRAINDICADO.',
              'Anuria establecida: CONTRAINDICADO.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Poliúria',      'Poliuria'),
            t(lang, 'Cefaleia',      'Cefalea'),
            t(lang, 'Náuseas',       'Náuseas'),
            t(lang, 'Sede',          'Sed'),
            t(lang, 'Desidratação',  'Deshidratación'),
            t(lang, 'Hipotensão',    'Hipotensión')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Edema pulmonar',                    'Edema pulmonar'),
            t(lang, 'Insuficiência cardíaca aguda',      'Insuficiencia cardíaca aguda'),
            t(lang, 'Hipernatremia',                     'Hipernatremia'),
            t(lang, 'Hiponatremia (sobrecarga de livre)', 'Hiponatremia (sobrecarga de agua libre)'),
            t(lang, 'Lesão renal aguda por acúmulo',     'Lesión renal aguda por acumulación'),
            t(lang, 'Choque hipovolêmico',               'Shock hipovolémico'),
            t(lang, 'Hiperosmolaridade grave',           'Hiperosmolaridad grave')
          ],

          alerts,

          ref: 'Neurocritical Care Guidelines · ESC Heart Failure Guidelines · Lexicomp · UpToDate · Goodman & Gilman · FDA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: fg < 50,

            message: fg < 30
              ? t(lang,
                  'ClCr < 30 mL/min: risco alto de acúmulo de manitol e sobrecarga volêmica paradoxal. Uso somente hospitalar sob supervisão especializada.',
                  'ClCr < 30 mL/min: alto riesgo de acumulación de manitol y sobrecarga de volumen paradójica. Uso solo hospitalario bajo supervisión especializada.'
                )
              : fg < 50
              ? t(lang,
                  'ClCr 30–50 mL/min: usar com cautela; monitorar osmolaridade sérica e diurese horária.',
                  'ClCr 30–50 mL/min: usar con precaución; monitorizar osmolaridad sérica y diuresis horaria.'
                )
              : t(lang,
                  'ClCr ≥ 50 mL/min: uso habitual com monitorização de osmolaridade e eletrólitos.',
                  'ClCr ≥ 50 mL/min: uso habitual con monitorización de osmolaridad y electrolitos.'
                ),

            fgMaior50: {
              vo: null,
              ev: { dose: '0,25–1 g/kg', intervalo: 'dose única ou repetida conforme protocolo', doseMaxima: 'monitorar osmolaridade < 320 mOsm/kg', unidade: 'g/kg' },
              pediatrica: null,
              obs: t(lang,
                'Função renal adequada. Monitorar osmolaridade sérica e diurese horária.',
                'Función renal adecuada. Monitorizar osmolaridad sérica y diuresis horaria.'
              )
            },
            fg30a50: {
              vo: null,
              ev: { dose: '0,25–0,5 g/kg', intervalo: 'com cautela — intervalo estendido', doseMaxima: 'osmolaridade < 310 mOsm/kg', unidade: 'g/kg' },
              pediatrica: null,
              obs: t(lang,
                'ClCr 30–50 mL/min: dose reduzida. Monitorar osmolaridade, sódio e creatinina frequentemente.',
                'ClCr 30–50 mL/min: dosis reducida. Monitorizar osmolaridad, sodio y creatinina frecuentemente.'
              )
            },
            fg10a30: {
              vo: null,
              ev: { dose: '0,25 g/kg', intervalo: 'somente hospitalar sob supervisão', doseMaxima: 'osmolaridade < 305 mOsm/kg', unidade: 'g/kg' },
              pediatrica: null,
              obs: t(lang,
                'ClCr 10–30 mL/min: risco elevado de acúmulo. Uso restrito a especialistas em UTI. Monitorização contínua.',
                'ClCr 10–30 mL/min: riesgo elevado de acumulación. Uso restringido a especialistas en UCI. Monitorización continua.'
              )
            },
            fgMenor10: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min / anúria: CONTRAINDICADO. Acúmulo osmolar e risco de edema pulmonar.',
                'ClCr < 10 mL/min / anuria: CONTRAINDICADO. Acumulación osmolar y riesgo de edema pulmonar.'
              )
            },
            hemodialise: {
              vo: null,
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: CONTRAINDICADO em uso rotineiro. Discussão especializada necessária em caso excepcional.',
                'Hemodiálisis: CONTRAINDICADO en uso rutinario. Discusión especializada necesaria en caso excepcional.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:    true,
            volumeOverloadRisk: true,
            dehydrationRisk:    true,
            osmolarityRisk:     true,
            renalHighRisk:      true,
            qtRisk:             false,
            infusionDrug:       true,
            pregnancyCaution:   true,
            warning: t(lang,
              'Manitol pode inicialmente expandir o volume intravascular e precipitar edema pulmonar ou insuficiência cardíaca em pacientes suscetíveis. Monitorar osmolaridade sérica (suspender > 320 mOsm/kg) e diurese horária.',
              'El manitol puede expandir inicialmente el volumen intravascular y precipitar edema pulmonar o insuficiencia cardíaca en pacientes susceptibles. Monitorizar osmolaridad sérica (suspender > 320 mOsm/kg) y diuresis horaria.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'Neurocritical Care Guidelines',
              'ESC Heart Failure Guidelines',
              'Lexicomp 2026',
              'UpToDate',
              'Goodman & Gilman',
              'FDA Label'
            ],
            note: t(lang,
              'Diurético osmótico utilizado principalmente em neurocríticos (HIC, edema cerebral). Relevante na cardiologia por capacidade de alterar rapidamente volemia e função renal. CONTRAINDICADO em IC descompensada ativa.',
              'Diurético osmótico utilizado principalmente en neurocríticos (HIC, edema cerebral). Relevante en cardiología por capacidad de alterar rápidamente la volemia y la función renal. CONTRAINDICADO en IC descompensada activa.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 11C (Diuréticos especiais: acetazolamida · manitol) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 12 — BLOQUEADORES DOS CANAIS DE CÁLCIO DIIDROPIRIDÍNICOS
     amlodipina · nifedipina
     BCC DHP · HAS · Angina · Raynaud · Gestação
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       36. AMLODIPINA
       BCC DHP · HAS · Angina estável · Raynaud · 1ª linha HAS
       ASCOT · CAMELOT · ESC/AHA Guidelines
    ══════════════════════════════════════════════════════════════ */
    amlodipina: {
      id: 'amlodipina',
      name: 'Amlodipina',
      category: 'cardio',
      commercialNames: ['Norvasc', 'Pressat', 'Amlodipina genérica'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;

        const alerts = [
          t(lang,
            'BCC diidropiridínico mais prescrito mundialmente — primeira linha para HAS, especialmente em idosos e afrodescendentes.',
            'BCC dihidropiridínico más prescrito mundialmente — primera línea para HTA, especialmente en ancianos y afrodescendientes.'
          ),
          t(lang,
            'Edema maleolar é o principal efeito adverso — não responde a diuréticos; melhora com associação de IECA ou BRA.',
            'El edema maleolar es el principal efecto adverso — no responde a diuréticos; mejora con asociación de IECA o ARA-II.'
          ),
          t(lang,
            'Interações: claritromicina, cetoconazol, itraconazol, ritonavir → aumentam nível sérico. Sinvastatina → limitar dose da estatina a 20 mg.',
            'Interacciones: claritromicina, ketoconazol, itraconazol, ritonavir → aumentan nivel sérico. Simvastatina → limitar dosis de estatina a 20 mg.'
          ),
          t(lang,
            'Meia-vida longa (30–50h): 7–14 dias para atingir estado estacionário; titulação a cada 7–14 dias.',
            'Vida media larga (30–50h): 7–14 días para alcanzar estado estacionario; titulación cada 7–14 días.'
          )
        ];

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): iniciar com 2,5 mg/dia. Maior risco de hipotensão e edema periférico.`,
            `Anciano (${idade} años): iniciar con 2,5 mg/día. Mayor riesgo de hipotensión y edema periférico.`
          ));
        }

        return {
          id:       'amlodipina',
          name:     'Amlodipina',
          class:    t(lang, 'Bloqueador dos canais de cálcio diidropiridínico', 'Bloqueador de los canales de calcio dihidropiridínico'),
          category: 'cardio',

          commercialNames: ['Norvasc', 'Pressat', 'Amlodipina genérica'],

          presentation: [
            t(lang, 'Comprimidos 2,5 mg', 'Comprimidos 2,5 mg'),
            t(lang, 'Comprimidos 5 mg',   'Comprimidos 5 mg'),
            t(lang, 'Comprimidos 10 mg',  'Comprimidos 10 mg')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L na musculatura lisa vascular, promovendo vasodilatação arterial periférica e coronariana. Mínimo efeito sobre condução AV e contratilidade cardíaca. Meia-vida longa (30–50h) garante cobertura de 24h com dose única.',
            'Bloquea canales de calcio tipo L en músculo liso vascular, produciendo vasodilatación arterial periférica y coronaria. Mínimo efecto sobre conducción AV y contractilidad cardíaca. Vida media larga (30–50h) garantiza cobertura de 24h con dosis única.'
          ),

          halfLife:  '30–50 horas',
          onset:     t(lang, '6–12 horas', '6–12 horas'),

          dose: {
            adultoPadrao: idade >= 75
              ? t(lang,
                  '2,5 mg VO 1x/dia (idoso). Titular a cada 7–14 dias conforme PA.',
                  '2,5 mg VO 1 vez/día (anciano). Titular cada 7–14 días según PA.'
                )
              : t(lang,
                  '5 mg VO 1x/dia. Titular a cada 7–14 dias conforme PA. Pode aumentar até 10 mg/dia.',
                  '5 mg VO 1 vez/día. Titular cada 7–14 días según PA. Puede aumentarse hasta 10 mg/día.'
                ),
            adultoGrave: t(lang,
              'Dose máxima: 10 mg/dia. Não há formulação IV — uso exclusivo VO.',
              'Dosis máxima: 10 mg/día. No hay formulación IV — uso exclusivo VO.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: pode ser utilizada em situações selecionadas; nifedipina possui maior experiência clínica na gestação.',
              'Gestante: puede utilizarse en situaciones seleccionadas; nifedipino posee mayor experiencia clínica durante el embarazo.'
            ),
            t(lang,
              'Lactante: compatível com lactação na maioria dos casos.',
              'Lactante: compatible con lactancia en la mayoría de los casos.'
            ),
            t(lang,
              `Idoso (${idade} anos): excelente opção para HAS sistólica isolada. Iniciar com 2,5 mg. Monitorar edema e hipotensão.`,
              `Anciano (${idade} años): excelente opción para HTA sistólica aislada. Iniciar con 2,5 mg. Monitorizar edema e hipotensión.`
            ),
            t(lang,
              'Insuficiência hepática: metabolismo hepático prolongado — iniciar com dose menor.',
              'Insuficiencia hepática: metabolismo hepático prolongado — iniciar con dosis menor.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Edema maleolar / MMII',  'Edema maleolar / MMII'),
            t(lang, 'Cefaleia',               'Cefalea'),
            t(lang, 'Rubor facial',           'Rubor facial'),
            t(lang, 'Tontura',                'Mareos'),
            t(lang, 'Palpitações',            'Palpitaciones'),
            t(lang, 'Fadiga',                 'Fatiga')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipotensão grave',                   'Hipotensión grave'),
            t(lang, 'Síncope',                            'Síncope'),
            t(lang, 'Angina paradoxal rara no início',    'Angina paradójica rara al inicio'),
            t(lang, 'Edema periférico incapacitante',     'Edema periférico incapacitante')
          ],

          alerts,

          ref: 'ASCOT Trial · CAMELOT Trial · ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · ESC Chronic Coronary Syndrome Guidelines · Lexicomp · UpToDate · FDA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Não requer ajuste renal. Eliminação predominantemente hepática.',
              'No requiere ajuste renal. Eliminación predominantemente hepática.'
            ),

            fgMaior50: {
              vo: { dose: '5–10 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: { dose: '2,5–5 mg', intervalo: '1x/dia', doseMaxima: '5 mg/dia', unidade: 'mg' },
              obs: t(lang, 'Dose habitual. Sem ajuste renal necessário.', 'Dosis habitual. Sin ajuste renal necesario.')
            },
            fg30a50: {
              vo: { dose: '5–10 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal. Monitorar PA e edema.', 'Sin ajuste renal. Monitorizar PA y edema.')
            },
            fg10a30: {
              vo: { dose: '5–10 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Pode usar dose habitual.', 'Sin ajuste renal específico. Puede usar dosis habitual.')
            },
            fgMenor10: {
              vo: { dose: '2,5–5 mg', intervalo: '1x/dia (cautela)', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min: iniciar com dose menor. Monitorar PA e hipotensão.',
                'ClCr < 10 mL/min: iniciar con dosis menor. Monitorizar PA e hipotensión.'
              )
            },
            hemodialise: {
              vo: { dose: '2,5–5 mg', intervalo: '1x/dia', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: não dialisável. Pode manter dose habitual com cautela. Monitorar PA.',
                'Hemodiálisis: no dializable. Puede mantener dosis habitual con precaución. Monitorizar PA.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:     true,
            bradycardiaRisk:     false,
            avBlockRisk:         false,
            renalHighRisk:       false,
            qtRisk:              false,
            peripheralEdemaRisk: true,
            pregnancyCaution:    true,
            warning: t(lang,
              'O edema maleolar é o principal efeito adverso e não responde a diuréticos. Melhora frequentemente com associação de IECA ou BRA. Interação com CYP3A4 — atenção a macrolídeos, azólicos e inibidores de protease.',
              'El edema maleolar es el principal efecto adverso y no responde a diuréticos. Frecuentemente mejora con asociación de IECA o ARA-II. Interacción con CYP3A4 — atención a macrólidos, azólicos e inhibidores de proteasa.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ASCOT Trial',
              'CAMELOT Trial',
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'ESC Chronic Coronary Syndrome Guidelines 2019',
              'Lexicomp 2026',
              'UpToDate',
              'FDA Label'
            ],
            note: t(lang,
              'BCC diidropiridínico mais prescrito mundialmente. Primeira linha para HAS, especialmente em idosos e afrodescendentes. Meia-vida longa permite dose única diária com excelente adesão.',
              'BCC dihidropiridínico más prescrito mundialmente. Primera línea para HTA, especialmente en ancianos y afrodescendientes. Vida media larga permite dosis única diaria con excelente adherencia.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       37. NIFEDIPINA
       BCC DHP · HAS gestacional · Angina · Raynaud · Tocolítico
       ACOG Hypertension in Pregnancy · ESC Guidelines
    ══════════════════════════════════════════════════════════════ */
    nifedipina: {
      id: 'nifedipina',
      name: 'Nifedipina',
      category: 'cardio',
      commercialNames: ['Adalat', 'Nifedipina genérica'],

      calculate(paciente, lang = 'pt') {
        const peso      = paciente?.peso      || 70;
        const idade     = paciente?.idade     || 50;
        const fg        = paciente?.clcr      || paciente?.fg || 90;
        const gestante  = paciente?.gestante  || false;
        const fc        = paciente?.fc        || null;

        const alerts = [
          t(lang,
            'PREFERIR formulações de liberação prolongada (LP/retard) para uso crônico — formulações de ação curta causam taquicardia reflexa e podem piorar isquemia.',
            'PREFERIR formulaciones de liberación prolongada (LP/retard) para uso crónico — formulaciones de acción corta causan taquicardia refleja y pueden empeorar la isquemia.'
          ),
          t(lang,
            'Interações: claritromicina, cetoconazol, itraconazol, ritonavir → aumentam nível sérico significativamente (CYP3A4).',
            'Interacciones: claritromicina, ketoconazol, itraconazol, ritonavir → aumentan nivel sérico significativamente (CYP3A4).'
          ),
          t(lang,
            'Não usar com betabloqueador IV concomitante — risco de hipotensão grave e bloqueio AV.',
            'No usar con betabloqueador IV concomitante — riesgo de hipotensión grave y bloqueo AV.'
          )
        ];

        if (gestante) {
          alerts.unshift(t(lang,
            'GESTANTE: Nifedipina é o anti-hipertensivo oral de escolha na urgência hipertensiva gestacional (ACOG). Dose: 10 mg VO, repetir conforme protocolo.',
            'GESTANTE: Nifedipino es el antihipertensivo oral de elección en la urgencia hipertensiva gestacional (ACOG). Dosis: 10 mg VO, repetir según protocolo.'
          ));
        }

        if (fc !== null && fc > 100) {
          alerts.push(t(lang,
            `ATENÇÃO: FC ${fc} bpm — taquicardia. Nifedipina (especialmente IR) pode agravá-la por efeito reflexo adrenérgico. Avaliar formulação LP ou alternativa.`,
            `ATENCIÓN: FC ${fc} lpm — taquicardia. Nifedipino (especialmente IR) puede agravarla por efecto reflejo adrenérgico. Evaluar formulación LP o alternativa.`
          ));
        }

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): iniciar com doses menores. Maior risco de hipotensão e edema periférico.`,
            `Anciano (${idade} años): iniciar con dosis menores. Mayor riesgo de hipotensión y edema periférico.`
          ));
        }

        return {
          id:       'nifedipina',
          name:     'Nifedipina',
          class:    t(lang, 'Bloqueador dos canais de cálcio diidropiridínico', 'Bloqueador de los canales de calcio dihidropiridínico'),
          category: 'cardio',

          commercialNames: ['Adalat', 'Nifedipina genérica'],

          presentation: [
            t(lang, 'Cápsulas 10 mg (ação curta — evitar para HAS crônica)', 'Cápsulas 10 mg (acción corta — evitar para HTA crónica)'),
            t(lang, 'Comprimidos retard 20 mg', 'Comprimidos retard 20 mg'),
            t(lang, 'Comprimidos LP 30 mg',     'Comprimidos LP 30 mg'),
            t(lang, 'Comprimidos LP 60 mg',     'Comprimidos LP 60 mg')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L na musculatura lisa vascular — vasodilatação arterial potente. Pouco efeito direto no nó AV, mas pode causar taquicardia reflexa adrenérgica, especialmente nas formulações de liberação imediata.',
            'Bloquea canales de calcio tipo L en músculo liso vascular — vasodilatación arterial potente. Poco efecto directo en el nodo AV, pero puede causar taquicardia refleja adrenérgica, especialmente en formulaciones de liberación inmediata.'
          ),

          halfLife:  t(lang, '2–5 horas (IR) · 7–12 horas (LP)', '2–5 horas (IR) · 7–12 horas (LP)'),
          onset:     t(lang, '20–30 min (IR) · 6h (LP)', '20–30 min (IR) · 6h (LP)'),

          dose: {
            adultoPadrao: gestante
              ? t(lang,
                  'Urgência hipertensiva gestacional: 10 mg VO, repetir conforme protocolo (ACOG).',
                  'Urgencia hipertensiva gestacional: 10 mg VO, repetir según protocolo (ACOG).'
                )
              : t(lang,
                  '30 mg LP VO 1x/dia. Titular a cada 1–2 semanas. Máximo: 90–120 mg/dia.',
                  '30 mg LP VO 1 vez/día. Titular cada 1–2 semanas. Máximo: 90–120 mg/día.'
                ),
            adultoGrave: t(lang,
              'Dose máxima: 120 mg/dia (LP). Formulações IR: somente em urgência hipertensiva ou angina aguda sob supervisão.',
              'Dosis máxima: 120 mg/día (LP). Formulaciones IR: solo en urgencia hipertensiva o angina aguda bajo supervisión.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: anti-hipertensivo oral de escolha na urgência hipertensiva gestacional (ACOG). Amplamente utilizado.',
              'Gestante: antihipertensivo oral de elección en urgencia hipertensiva gestacional (ACOG). Ampliamente utilizado.'
            ),
            t(lang,
              'Lactante: compatível com lactação na maioria dos casos.',
              'Lactante: compatible con lactancia en la mayoría de los casos.'
            ),
            t(lang,
              `Idoso (${idade} anos): iniciar com doses menores. Maior risco de hipotensão e edema periférico.`,
              `Anciano (${idade} años): iniciar con dosis menores. Mayor riesgo de hipotensión y edema periférico.`
            ),
            t(lang,
              'Angina instável / IAM recente: evitar formulações IR sem supervisão especializada — risco de taquicardia reflexa e piora da isquemia.',
              'Angina inestable / IAM reciente: evitar formulaciones IR sin supervisión especializada — riesgo de taquicardia refleja y empeoramiento de la isquemia.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Cefaleia',              'Cefalea'),
            t(lang, 'Rubor facial',          'Rubor facial'),
            t(lang, 'Tontura',               'Mareos'),
            t(lang, 'Edema periférico',      'Edema periférico'),
            t(lang, 'Palpitações',           'Palpitaciones'),
            t(lang, 'Taquicardia reflexa',   'Taquicardia refleja'),
            t(lang, 'Fadiga',               'Fatiga')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipotensão grave',                                           'Hipotensión grave'),
            t(lang, 'Síncope',                                                    'Síncope'),
            t(lang, 'Isquemia miocárdica por taquicardia reflexa (formulação IR)', 'Isquemia miocárdica por taquicardia refleja (formulación IR)'),
            t(lang, 'Piora de angina com formulação de ação curta',               'Empeoramiento de angina con formulación de acción corta')
          ],

          alerts,

          ref: 'ESC Hypertension Guidelines · ACOG Hypertension in Pregnancy · AHA/ACC Hypertension Guidelines · Lexicomp · UpToDate · FDA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,

            message: t(lang,
              'Não requer ajuste renal. Metabolismo predominantemente hepático (CYP3A4).',
              'No requiere ajuste renal. Metabolismo predominantemente hepático (CYP3A4).'
            ),

            fgMaior50: {
              vo: { dose: '30–60 mg LP', intervalo: '1x/dia', doseMaxima: '120 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Preferir formulação LP para uso crônico.', 'Dosis habitual. Preferir formulación LP para uso crónico.')
            },
            fg30a50: {
              vo: { dose: '30 mg LP', intervalo: '1x/dia', doseMaxima: '90 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar PA e FC.', 'Sin ajuste renal específico. Monitorizar PA y FC.')
            },
            fg10a30: {
              vo: { dose: '30 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '60 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Pode usar sem ajuste específico, mas monitorar PA e FC rigorosamente.', 'Puede usarse sin ajuste específico, pero monitorizar PA y FC rigurosamente.')
            },
            fgMenor10: {
              vo: { dose: '30 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '30 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'ClCr < 10 mL/min: iniciar com dose menor. Monitorar hipotensão.',
                'ClCr < 10 mL/min: iniciar con dosis menor. Monitorizar hipotensión.'
              )
            },
            hemodialise: {
              vo: { dose: '30 mg LP', intervalo: '1x/dia', doseMaxima: '30 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang,
                'Hemodiálise: não dialisável. Manter dose habitual com cautela.',
                'Hemodiálisis: no dializable. Mantener dosis habitual con precaución.'
              )
            }
          },

          safetyFlags: {
            hypotensionRisk:        true,
            bradycardiaRisk:        false,
            avBlockRisk:            false,
            renalHighRisk:          false,
            qtRisk:                 false,
            peripheralEdemaRisk:    true,
            reflexTachycardiaRisk:  true,
            pregnancyPreferred:     true,
            warning: t(lang,
              'Formulações de ação curta podem causar taquicardia reflexa e piora da isquemia coronariana — PREFERIR formulações LP para uso crônico. Gestação: anti-hipertensivo oral de escolha para urgência hipertensiva.',
              'Las formulaciones de acción corta pueden causar taquicardia refleja y empeoramiento de la isquemia coronaria — PREFERIR formulaciones LP para uso crónico. Embarazo: antihipertensivo oral de elección para urgencia hipertensiva.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines 2023',
              'ACOG Hypertension in Pregnancy 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'Lexicomp 2026',
              'UpToDate',
              'FDA Label'
            ],
            note: t(lang,
              'Fundamental em HAS gestacional, fenômeno de Raynaud e angina vasoespástica. PREFERIR formulações LP para uso crônico. Formulação IR reservada a urgências.',
              'Fundamental en HTA gestacional, fenómeno de Raynaud y angina vasoespástica. PREFERIR formulaciones LP para uso crónico. Formulación IR reservada a urgencias.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 12 (Bloqueadores de Canal de Cálcio DHP: amlodipina · nifedipina) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 12B — BCC DIIDROPIRIDÍNICOS 2ª/3ª GERAÇÃO
     felodipina · lercanidipina · manidipina
     Menor edema periférico · Alta lipofilicidade · HAS/DM/DRC
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       38. FELODIPINA
       BCC DHP 2ª geração · HAS · Angina · LP exclusivo
       ESC/AHA Hypertension · Plendil
    ══════════════════════════════════════════════════════════════ */
    felodipina: {
      id: 'felodipina',
      name: 'Felodipina',
      category: 'cardio',
      commercialNames: ['Plendil', 'Felodipina genérica'],

      calculate(paciente, lang = 'pt') {
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;

        const alerts = [
          t(lang,
            'Usar EXCLUSIVAMENTE formulações de liberação prolongada — não partir ou mastigar os comprimidos.',
            'Usar EXCLUSIVAMENTE formulaciones de liberación prolongada — no partir ni masticar los comprimidos.'
          ),
          t(lang,
            'Interação importante: grapefruit/toranja — pode aumentar significativamente os níveis séricos (CYP3A4). Evitar.',
            'Interacción importante: pomelo/toronja — puede aumentar significativamente los niveles séricos (CYP3A4). Evitar.'
          ),
          t(lang,
            'Interações CYP3A4: claritromicina, cetoconazol, itraconazol, ritonavir → aumentam nível sérico.',
            'Interacciones CYP3A4: claritromicina, ketoconazol, itraconazol, ritonavir → aumentan nivel sérico.'
          ),
          t(lang,
            'Edema maleolar é o principal efeito adverso — frequentemente não responde a diuréticos.',
            'El edema maleolar es el principal efecto adverso — frecuentemente no responde a diuréticos.'
          )
        ];

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): iniciar com 2,5 mg/dia. Maior risco de hipotensão e edema periférico.`,
            `Anciano (${idade} años): iniciar con 2,5 mg/día. Mayor riesgo de hipotensión y edema periférico.`
          ));
        }

        return {
          id:       'felodipina',
          name:     'Felodipina',
          class:    t(lang,
            'Bloqueador dos canais de cálcio diidropiridínico',
            'Bloqueador de los canales de calcio dihidropiridínico'
          ),
          category: 'cardio',

          commercialNames: ['Plendil', 'Felodipina genérica'],

          presentation: [
            t(lang,
              'Comprimidos de liberação prolongada 2,5 mg · 5 mg · 10 mg',
              'Comprimidos de liberación prolongada 2,5 mg · 5 mg · 10 mg'
            )
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L na musculatura lisa vascular, promovendo vasodilatação arterial periférica e redução da resistência vascular sistêmica, com pouco efeito direto sobre o nó AV.',
            'Bloquea canales de calcio tipo L en el músculo liso vascular, produciendo vasodilatación arterial periférica y reducción de la resistencia vascular sistémica, con poco efecto directo sobre el nodo AV.'
          ),

          halfLife: '11–16 horas',
          onset:    t(lang, '2–5 horas', '2–5 horas'),

          dose: {
            adultoPadrao: idade >= 75
              ? t(lang,
                  '2,5 mg LP VO 1x/dia (idoso). Titular a cada 2 semanas conforme PA.',
                  '2,5 mg LP VO 1 vez/día (anciano). Titular cada 2 semanas según PA.'
                )
              : t(lang,
                  '2,5–5 mg LP VO 1x/dia. Titular a cada 2 semanas conforme PA e tolerabilidade.',
                  '2,5–5 mg LP VO 1 vez/día. Titular cada 2 semanas según PA y tolerabilidad.'
                ),
            adultoGrave: t(lang,
              'Dose máxima: 10 mg/dia. Não há formulação IV.',
              'Dosis máxima: 10 mg/día. No hay formulación IV.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: usar apenas se benefício superar risco; nifedipina tem maior experiência gestacional.',
              'Gestante: usar solo si el beneficio supera el riesgo; nifedipino tiene mayor experiencia gestacional.'
            ),
            t(lang,
              'Lactante: dados limitados — usar com cautela.',
              'Lactante: datos limitados — usar con precaución.'
            ),
            t(lang,
              `Idoso (${idade} anos): iniciar com 2,5 mg/dia. Monitorar hipotensão e edema.`,
              `Anciano (${idade} años): iniciar con 2,5 mg/día. Monitorizar hipotensión y edema.`
            ),
            t(lang,
              'Insuficiência hepática: metabolismo hepático importante — iniciar com dose menor e titular lentamente.',
              'Insuficiencia hepática: metabolismo hepático importante — iniciar con dosis menor y titular lentamente.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Edema maleolar',  'Edema maleolar'),
            t(lang, 'Cefaleia',        'Cefalea'),
            t(lang, 'Rubor facial',    'Rubor facial'),
            t(lang, 'Tontura',         'Mareos'),
            t(lang, 'Palpitações',     'Palpitaciones'),
            t(lang, 'Fadiga',          'Fatiga'),
            t(lang, 'Náuseas',         'Náuseas')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipotensão grave',            'Hipotensión grave'),
            t(lang, 'Síncope',                     'Síncope'),
            t(lang, 'Angina paradoxal rara',        'Angina paradójica rara'),
            t(lang, 'Edema periférico severo',      'Edema periférico severo')
          ],

          alerts,

          ref: 'ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · ESC Chronic Coronary Syndrome Guidelines · Goodman & Gilman · Lexicomp · FDA/EMA label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Não requer ajuste renal. Metabolismo predominantemente hepático (CYP3A4).',
              'No requiere ajuste renal. Metabolismo predominantemente hepático (CYP3A4).'
            ),
            fgMaior50: {
              vo: { dose: '5–10 mg LP', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Dose habitual. Sem ajuste renal.', 'Dosis habitual. Sin ajuste renal.')
            },
            fg30a50: {
              vo: { dose: '5 mg LP', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar PA.', 'Sin ajuste renal específico. Monitorizar PA.')
            },
            fg10a30: {
              vo: { dose: '2,5–5 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Pode usar; monitorar PA e sintomas de hipotensão.', 'Puede usarse; monitorizar PA y síntomas de hipotensión.')
            },
            fgMenor10: {
              vo: { dose: '2,5 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '2,5 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Iniciar com dose mínima. Monitorar rigorosamente.', 'Iniciar con dosis mínima. Monitorizar rigurosamente.')
            },
            hemodialise: {
              vo: { dose: '2,5 mg LP', intervalo: '1x/dia', doseMaxima: '5 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Não dialisável. Manter dose mínima com cautela.', 'No dializable. Mantener dosis mínima con precaución.')
            }
          },

          safetyFlags: {
            hypotensionRisk:     true,
            bradycardiaRisk:     false,
            avBlockRisk:         false,
            renalHighRisk:       false,
            qtRisk:              false,
            peripheralEdemaRisk: true,
            reflexTachycardiaRisk: true,
            pregnancyCaution:    true,
            warning: t(lang,
              'Felodipina pode causar edema periférico e hipotensão. Importante: interações por CYP3A4 e grapefruit/toranja. Usar EXCLUSIVAMENTE formulação LP.',
              'Felodipino puede causar edema periférico e hipotensión. Importante: interacciones por CYP3A4 y pomelo/toronja. Usar EXCLUSIVAMENTE formulación LP.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'ESC Chronic Coronary Syndrome Guidelines',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA/EMA label'
            ],
            note: t(lang,
              'BCC diidropiridínico LP útil em HAS e angina. Perfil semelhante à amlodipina, com meia-vida menor. Atenção especial à interação com grapefruit e inibidores de CYP3A4.',
              'BCC dihidropiridínico LP útil en HTA y angina. Perfil similar a amlodipino, con vida media menor. Atención especial a la interacción con pomelo e inhibidores de CYP3A4.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       39. LERCANIDIPINA
       BCC DHP 3ª geração · HAS · Idosos · DM · DRC estável
       Menor edema periférico · Alta lipofilicidade · Zanidip
    ══════════════════════════════════════════════════════════════ */
    lercanidipina: {
      id: 'lercanidipina',
      name: 'Lercanidipina',
      category: 'cardio',
      commercialNames: ['Zanidip', 'Lercanidipina genérica'],

      calculate(paciente, lang = 'pt') {
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;

        const alerts = [
          t(lang,
            'BCC de 3ª geração com alta lipofilicidade — menor incidência de edema periférico comparado à amlodipina.',
            'BCC de 3ª generación con alta lipofilicidad — menor incidencia de edema periférico comparado con amlodipino.'
          ),
          t(lang,
            'Tomar 15 minutos ANTES das refeições — a alimentação pode aumentar excessivamente a absorção.',
            'Tomar 15 minutos ANTES de las comidas — los alimentos pueden aumentar excesivamente la absorción.'
          ),
          t(lang,
            'Contraindicada em insuficiência hepática grave (cetoconazol e itraconazol são contraindicações absolutas).',
            'Contraindicada en insuficiencia hepática grave (ketoconazol e itraconazol son contraindicaciones absolutas).'
          ),
          t(lang,
            'Interação importante: ciclosporina — aumento recíproco dos níveis séricos. Evitar associação.',
            'Interacción importante: ciclosporina — aumento recíproco de niveles séricos. Evitar asociación.'
          ),
          t(lang,
            'Evitar grapefruit/toranja — aumenta biodisponibilidade (CYP3A4).',
            'Evitar pomelo/toronja — aumenta biodisponibilidad (CYP3A4).'
          )
        ];

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): excelente opção — menor edema e hipotensão abrupta. Iniciar com 10 mg/dia.`,
            `Anciano (${idade} años): excelente opción — menor edema e hipotensión brusca. Iniciar con 10 mg/día.`
          ));
        }

        return {
          id:       'lercanidipina',
          name:     'Lercanidipina',
          class:    t(lang,
            'Bloqueador dos canais de cálcio diidropiridínico de terceira geração',
            'Bloqueador de los canales de calcio dihidropiridínico de tercera generación'
          ),
          category: 'cardio',

          commercialNames: ['Zanidip', 'Lercanidipina genérica'],

          presentation: [
            t(lang, 'Comprimidos 10 mg', 'Comprimidos 10 mg'),
            t(lang, 'Comprimidos 20 mg', 'Comprimidos 20 mg')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L na musculatura lisa vascular. Elevada lipofilicidade proporciona vasodilatação gradual e sustentada, com menor ativação simpática reflexa e menor incidência de edema periférico comparado às DHP de gerações anteriores.',
            'Bloquea canales de calcio tipo L en el músculo liso vascular. Elevada lipofilicidad proporciona vasodilatación gradual y sostenida, con menor activación simpática refleja y menor incidencia de edema periférico comparado con DHP de generaciones anteriores.'
          ),

          halfLife: '8–10 horas',
          onset:    t(lang, '2–4 horas', '2–4 horas'),

          dose: {
            adultoPadrao: t(lang,
              '10 mg VO 1x/dia, 15 min antes das refeições. Aumentar para 20 mg após 2–4 semanas se necessário.',
              '10 mg VO 1 vez/día, 15 min antes de las comidas. Aumentar a 20 mg después de 2–4 semanas si es necesario.'
            ),
            adultoGrave: t(lang,
              'Dose máxima: 20 mg/dia. Não há formulação IV.',
              'Dosis máxima: 20 mg/día. No hay formulación IV.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: dados limitados — preferir alternativas com maior experiência clínica.',
              'Gestante: datos limitados — preferir alternativas con mayor experiencia clínica.'
            ),
            t(lang,
              'Lactante: dados insuficientes — usar apenas se necessário.',
              'Lactante: datos insuficientes — usar solo si es necesario.'
            ),
            t(lang,
              `Idoso (${idade} anos): excelente opção — menor incidência de edema e hipotensão abrupta vs DHP clássicas.`,
              `Anciano (${idade} años): excelente opción — menor incidencia de edema e hipotensión brusca vs DHP clásicas.`
            ),
            t(lang,
              'Insuficiência hepática grave: CONTRAINDICADA.',
              'Insuficiencia hepática grave: CONTRAINDICADA.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Cefaleia',         'Cefalea'),
            t(lang, 'Rubor facial',     'Rubor facial'),
            t(lang, 'Tontura',          'Mareos'),
            t(lang, 'Edema periférico leve (menor que amlodipina)', 'Edema periférico leve (menor que amlodipino)'),
            t(lang, 'Palpitações',      'Palpitaciones'),
            t(lang, 'Fadiga',           'Fatiga')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipotensão grave',                    'Hipotensión grave'),
            t(lang, 'Síncope',                             'Síncope'),
            t(lang, 'Taquicardia reflexa importante (incomum)', 'Taquicardia refleja importante (infrecuente)')
          ],

          alerts,

          ref: 'ESC Hypertension Guidelines · AHA/ACC Hypertension Guidelines · ESH Guidelines · Lexicomp · UpToDate · EMA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Não requer ajuste renal habitual. Metabolismo hepático (CYP3A4).',
              'No requiere ajuste renal habitual. Metabolismo hepático (CYP3A4).'
            ),
            fgMaior50: {
              vo: { dose: '10–20 mg', intervalo: '1x/dia (antes das refeições)', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Dose habitual. Sem ajuste renal.', 'Dosis habitual. Sin ajuste renal.')
            },
            fg30a50: {
              vo: { dose: '10 mg', intervalo: '1x/dia', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar PA.', 'Sin ajuste renal específico. Monitorizar PA.')
            },
            fg10a30: {
              vo: { dose: '10 mg', intervalo: '1x/dia (cautela)', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Pode usar; monitorar PA e tolerabilidade.', 'Puede usarse; monitorizar PA y tolerabilidad.')
            },
            fgMenor10: {
              vo: { dose: '10 mg', intervalo: '1x/dia (cautela)', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Usar com cautela. Dados limitados em DRC grave.', 'Usar con precaución. Datos limitados en ERC grave.')
            },
            hemodialise: {
              vo: { dose: '10 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Não dialisável. Manter dose mínima com cautela.', 'No dializable. Mantener dosis mínima con precaución.')
            }
          },

          safetyFlags: {
            hypotensionRisk:               true,
            bradycardiaRisk:               false,
            avBlockRisk:                   false,
            renalHighRisk:                 false,
            qtRisk:                        false,
            peripheralEdemaRisk:           true,
            lowEdemaComparedToAmlodipine:  true,
            pregnancyCaution:              true,
            warning: t(lang,
              'Menor incidência de edema periférico que amlodipina. Atenção: CI em insuficiência hepática grave; interação com ciclosporina e inibidores CYP3A4 (cetoconazol CI). Tomar ANTES das refeições.',
              'Menor incidencia de edema periférico que amlodipino. Atención: CI en insuficiencia hepática grave; interacción con ciclosporina e inhibidores CYP3A4 (ketoconazol CI). Tomar ANTES de las comidas.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines 2023',
              'AHA/ACC Hypertension Guidelines 2023',
              'ESH Guidelines',
              'Lexicomp 2026',
              'UpToDate',
              'EMA Label'
            ],
            note: t(lang,
              'BCC DHP de 3ª geração com excelente perfil de tolerabilidade e menor edema periférico. Indicado em HAS com intolerância ao edema por amlodipina, idosos e DM/DRC estável.',
              'BCC DHP de 3ª generación con excelente perfil de tolerabilidad y menor edema periférico. Indicado en HTA con intolerancia al edema por amlodipino, ancianos y DM/ERC estable.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       40. MANIDIPINA
       BCC DHP 3ª geração · HAS · DM · DRC · Microalbuminúria
       Possível proteção microvascular renal · Manidip · Madipina
    ══════════════════════════════════════════════════════════════ */
    manidipina: {
      id: 'manidipina',
      name: 'Manidipina',
      category: 'cardio',
      commercialNames: ['Manidip', 'Madipina', 'Manidipina genérica'],

      calculate(paciente, lang = 'pt') {
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;

        const alerts = [
          t(lang,
            'BCC DHP de 3ª geração com alta lipossolubilidade e possível efeito protetor sobre a microcirculação renal — opção em HAS associada a DM ou DRC.',
            'BCC DHP de 3ª generación con alta liposolubilidad y posible efecto protector sobre la microcirculación renal — opción en HTA asociada a DM o ERC.'
          ),
          t(lang,
            'Interações CYP3A4: cetoconazol, itraconazol, claritromicina, ritonavir → aumentam nível sérico. Evitar grapefruit/toranja.',
            'Interacciones CYP3A4: ketoconazol, itraconazol, claritromicina, ritonavir → aumentan nivel sérico. Evitar pomelo/toronja.'
          ),
          t(lang,
            'Menor ativação simpática reflexa e menor incidência de edema periférico comparado às DHP de 1ª/2ª geração.',
            'Menor activación simpática refleja y menor incidencia de edema periférico comparado con DHP de 1ª/2ª generación.'
          )
        ];

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): bom perfil hemodinâmico — menor edema e hipotensão abrupta. Iniciar com 10 mg/dia.`,
            `Anciano (${idade} años): buen perfil hemodinámico — menor edema e hipotensión brusca. Iniciar con 10 mg/día.`
          ));
        }

        if (fg < 45) {
          alerts.push(t(lang,
            `Atenção: ClCr ${fg} mL/min — DRC moderada/grave. Usar com cautela; monitorar PA e função renal.`,
            `Atención: ClCr ${fg} mL/min — ERC moderada/grave. Usar con precaución; monitorizar PA y función renal.`
          ));
        }

        return {
          id:       'manidipina',
          name:     'Manidipina',
          class:    t(lang,
            'Bloqueador dos canais de cálcio diidropiridínico de terceira geração',
            'Bloqueador de los canales de calcio dihidropiridínico de tercera generación'
          ),
          category: 'cardio',

          commercialNames: ['Manidip', 'Madipina', 'Manidipina genérica'],

          presentation: [
            t(lang, 'Comprimidos 10 mg', 'Comprimidos 10 mg'),
            t(lang, 'Comprimidos 20 mg', 'Comprimidos 20 mg')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L da musculatura lisa vascular promovendo vasodilatação arterial periférica. Elevada lipossolubilidade garante ação prolongada e menor ativação simpática reflexa. Possui possível efeito favorável sobre a microcirculação renal.',
            'Bloquea canales de calcio tipo L del músculo liso vascular produciendo vasodilatación arterial periférica. Elevada liposolubilidad garantiza acción prolongada y menor activación simpática refleja. Posible efecto favorable sobre la microcirculación renal.'
          ),

          halfLife: '7–12 horas',
          onset:    t(lang, '2–4 horas', '2–4 horas'),

          dose: {
            adultoPadrao: t(lang,
              '10 mg VO 1x/dia. Aumentar para 20 mg após 2–4 semanas se necessário.',
              '10 mg VO 1 vez/día. Aumentar a 20 mg después de 2–4 semanas si es necesario.'
            ),
            adultoGrave: t(lang,
              'Dose máxima: 20 mg/dia. Não há formulação IV.',
              'Dosis máxima: 20 mg/día. No hay formulación IV.'
            )
          },

          risksByPatient: [
            t(lang,
              'Gestante: dados insuficientes — preferir medicamentos com maior experiência clínica durante a gestação.',
              'Gestante: datos insuficientes — preferir medicamentos con mayor experiencia clínica durante el embarazo.'
            ),
            t(lang,
              'Lactante: dados limitados — usar apenas quando necessário.',
              'Lactante: datos limitados — usar solo cuando sea necesario.'
            ),
            t(lang,
              `Idoso (${idade} anos): boa opção — perfil hemodinâmico estável e menor edema periférico.`,
              `Anciano (${idade} años): buena opción — perfil hemodinámico estable y menor edema periférico.`
            ),
            t(lang,
              'Insuficiência hepática: metabolismo hepático — iniciar com dose menor e titular lentamente.',
              'Insuficiencia hepática: metabolismo hepático — iniciar con dosis menor y titular lentamente.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Cefaleia',         'Cefalea'),
            t(lang, 'Rubor facial',     'Rubor facial'),
            t(lang, 'Tontura',          'Mareos'),
            t(lang, 'Edema maleolar',   'Edema maleolar'),
            t(lang, 'Palpitações',      'Palpitaciones'),
            t(lang, 'Fadiga',           'Fatiga'),
            t(lang, 'Sensação de calor','Sensación de calor')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Hipotensão grave',                           'Hipotensión grave'),
            t(lang, 'Síncope',                                    'Síncope'),
            t(lang, 'Edema periférico importante',                'Edema periférico importante'),
            t(lang, 'Taquicardia reflexa significativa (rara)',   'Taquicardia refleja significativa (rara)')
          ],

          alerts,

          ref: 'ESC Hypertension Guidelines · ESH Guidelines · AHA/ACC Hypertension Guidelines · Goodman & Gilman · Lexicomp · EMA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Não requer ajuste renal habitual. Usar com cautela em DRC avançada; monitorar PA e função renal.',
              'No requiere ajuste renal habitual. Usar con precaución en ERC avanzada; monitorizar PA y función renal.'
            ),
            fgMaior50: {
              vo: { dose: '10–20 mg', intervalo: '1x/dia', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Dose habitual. Sem ajuste renal.', 'Dosis habitual. Sin ajuste renal.')
            },
            fg30a50: {
              vo: { dose: '10 mg', intervalo: '1x/dia', doseMaxima: '20 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar PA e função renal.', 'Sin ajuste renal específico. Monitorizar PA y función renal.')
            },
            fg10a30: {
              vo: { dose: '10 mg', intervalo: '1x/dia (cautela)', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Usar com cautela. Monitorar PA e tolerabilidade.', 'Usar con precaución. Monitorizar PA y tolerabilidad.')
            },
            fgMenor10: {
              vo: { dose: '10 mg', intervalo: '1x/dia (cautela)', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Dados limitados. Usar com cautela e monitorização intensiva.', 'Datos limitados. Usar con precaución y monitorización intensiva.')
            },
            hemodialise: {
              vo: { dose: '10 mg', intervalo: '1x/dia', doseMaxima: '10 mg/dia', unidade: 'mg' },
              ev: null, pediatrica: null,
              obs: t(lang, 'Não dialisável. Manter dose mínima com cautela.', 'No dializable. Mantener dosis mínima con precaución.')
            }
          },

          safetyFlags: {
            hypotensionRisk:          true,
            bradycardiaRisk:          false,
            avBlockRisk:              false,
            renalHighRisk:            false,
            qtRisk:                   false,
            peripheralEdemaRisk:      true,
            reflexTachycardiaRisk:    false,
            renalProtectionPotential: true,
            pregnancyCaution:         true,
            warning: t(lang,
              'Manidipina apresenta bom perfil metabólico e vascular com possível benefício renal em DM/DRC. Atenção às interações via CYP3A4 e ao edema periférico.',
              'Manidipino presenta buen perfil metabólico y vascular con posible beneficio renal en DM/ERC. Atención a las interacciones vía CYP3A4 y al edema periférico.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Hypertension Guidelines 2023',
              'ESH Guidelines',
              'AHA/ACC Hypertension Guidelines 2023',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'EMA Label'
            ],
            note: t(lang,
              'BCC DHP moderno com possível benefício microvascular e renal. Frequentemente indicado em HAS associada a síndrome metabólica, DM e DRC estável.',
              'BCC DHP moderno con posible beneficio microvascular y renal. Frecuentemente indicado en HTA asociada a síndrome metabólico, DM y ERC estable.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 12B (BCC DHP 2ª/3ª geração: felodipina · lercanidipina · manidipina) */

  /* ══════════════════════════════════════════════════════════════
     GRUPO 13 — BLOQUEADORES DOS CANAIS DE CÁLCIO NÃO DIIDROPIRIDÍNICOS
     verapamil · diltiazem
     Controle de FC · FA/TSVP · Angina · Efeito cronotrópico negativo
     CI em IC-FEr · CI com betabloqueadores IV
  ══════════════════════════════════════════════════════════════ */
  Object.assign(window.CARDIO_DRUGS_DB, {

    /* ══════════════════════════════════════════════════════════════
       41. VERAPAMIL
       BCC não-DHP · FA/Flutter · TSVP · Angina · HCM
       CI em IC-FEr · Bradicardia · Bloqueio AV · Dilacoron
    ══════════════════════════════════════════════════════════════ */
    verapamil: {
      id: 'verapamil',
      name: 'Verapamil',
      category: 'cardio',
      commercialNames: ['Dilacoron', 'Isoptin', 'Verapamil genérico'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const fc    = paciente?.fc    || null;
        const feve  = paciente?.feve  || null;

        const alerts = [
          t(lang,
            'CONTRAINDICADO em IC com fração de ejeção reduzida significativa — pode precipitar descompensação grave.',
            'CONTRAINDICADO en IC con fracción de eyección reducida significativa — puede precipitar descompensación grave.'
          ),
          t(lang,
            'Interação CRÍTICA: betabloqueadores IV — risco de bloqueio AV completo, bradicardia grave e choque cardiogênico. NUNCA associar IV.',
            'Interacción CRÍTICA: betabloqueadores IV — riesgo de bloqueo AV completo, bradicardia grave y shock cardiogénico. NUNCA asociar IV.'
          ),
          t(lang,
            'Digoxina: verapamil aumenta os níveis séricos da digoxina em ~50–75% — reduzir dose da digoxina.',
            'Digoxina: verapamilo aumenta los niveles séricos de digoxina en ~50–75% — reducir dosis de digoxina.'
          ),
          t(lang,
            'Monitorar ECG: intervalo PR — bloqueio AV de 1º grau é comum; suspender em BAV 2º/3º grau.',
            'Monitorizar ECG: intervalo PR — bloqueo AV de 1er grado es común; suspender en BAV 2º/3er grado.'
          ),
          t(lang,
            'Constipação é efeito adverso frequente — mais comum que com diltiazem.',
            'El estreñimiento es efecto adverso frecuente — más común que con diltiazem.'
          )
        ];

        if (feve !== null && feve < 40) {
          alerts.unshift(t(lang,
            `CONTRAINDICADO: FEVE ${feve}% — IC-FEr. Verapamil ESTÁ CONTRAINDICADO neste contexto.`,
            `CONTRAINDICADO: FEVI ${feve}% — IC-FEr. Verapamilo ESTÁ CONTRAINDICADO en este contexto.`
          ));
        }

        if (fc !== null && fc < 55) {
          alerts.unshift(t(lang,
            `ATENÇÃO: FC ${fc} bpm — bradicardia. Avaliar contraindicação ao verapamil.`,
            `ATENCIÓN: FC ${fc} lpm — bradicardia. Evaluar contraindicación al verapamilo.`
          ));
        }

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): maior risco de bradicardia, hipotensão e bloqueio AV. Iniciar com doses menores.`,
            `Anciano (${idade} años): mayor riesgo de bradicardia, hipotensión y bloqueo AV. Iniciar con dosis menores.`
          ));
        }

        return {
          id:       'verapamil',
          name:     'Verapamil',
          class:    t(lang,
            'Bloqueador dos canais de cálcio não diidropiridínico',
            'Bloqueador de los canales de calcio no dihidropiridínico'
          ),
          category: 'cardio',

          commercialNames: ['Dilacoron', 'Isoptin', 'Verapamil genérico'],

          presentation: [
            t(lang, 'Comprimidos 40 mg · 80 mg · 120 mg',     'Comprimidos 40 mg · 80 mg · 120 mg'),
            t(lang, 'Comprimidos LP 180 mg · 240 mg',          'Comprimidos LP 180 mg · 240 mg'),
            t(lang, 'Ampolas IV 5 mg/2 mL',                    'Ampollas IV 5 mg/2 mL')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L no nó sinoatrial, nó AV e miocárdio. Reduz condução AV, frequência cardíaca e contratilidade cardíaca (efeito inotrópico negativo). Também promove vasodilatação arterial. Diferencial dos BCC DHP: efeito cronotrópico e dromiotrópico negativo significativos.',
            'Bloquea canales de calcio tipo L en el nodo sinusal, nodo AV y miocardio. Reduce conducción AV, frecuencia cardíaca y contractilidad cardíaca (efecto inotrópico negativo). También produce vasodilatación arterial. Diferencial de los BCC DHP: efecto cronotrópico y dromotrópico negativo significativos.'
          ),

          halfLife: '4–12 horas',
          onset:    t(lang, '3–5 min IV · 1–2h VO', '3–5 min IV · 1–2h VO'),

          dose: {
            adultoPadrao: t(lang,
              'VO: 80 mg 8/8h (IR) ou 120–180 mg LP 1x/dia. IV: 5–10 mg em bolus lento 2–3 min (com monitorização contínua).',
              'VO: 80 mg cada 8h (IR) o 120–180 mg LP 1 vez/día. IV: 5–10 mg en bolo lento 2–3 min (con monitorización continua).'
            ),
            adultoGrave: t(lang,
              'Manutenção VO: 240–480 mg/dia. Dose máxima: 480 mg/dia.',
              'Mantenimiento VO: 240–480 mg/día. Dosis máxima: 480 mg/día.'
            )
          },

          risksByPatient: [
            t(lang,
              'IC-FEr (FEVE < 40%): CONTRAINDICADO.',
              'IC-FEr (FEVI < 40%): CONTRAINDICADO.'
            ),
            t(lang,
              'Betabloqueador IV concomitante: CONTRAINDICADO — risco de colapso hemodinâmico.',
              'Betabloqueador IV concomitante: CONTRAINDICADO — riesgo de colapso hemodinámico.'
            ),
            t(lang,
              'Gestante: pode ser utilizado em situações específicas sob supervisão especializada.',
              'Gestante: puede utilizarse en situaciones específicas bajo supervisión especializada.'
            ),
            t(lang,
              'Lactante: compatível com lactação na maioria dos casos.',
              'Lactante: compatible con lactancia en la mayoría de los casos.'
            ),
            t(lang,
              `Idoso (${idade} anos): maior risco de bradicardia, hipotensão e bloqueio AV. Iniciar com doses menores.`,
              `Anciano (${idade} años): mayor riesgo de bradicardia, hipotensión y bloqueo AV. Iniciar con dosis menores.`
            ),
            t(lang,
              'Insuficiência hepática: metabolismo hepático intenso — reduzir doses.',
              'Insuficiencia hepática: metabolismo hepático intenso — reducir dosis.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Constipação (mais frequente que diltiazem)', 'Estreñimiento (más frecuente que diltiazem)'),
            t(lang, 'Bradicardia',    'Bradicardia'),
            t(lang, 'Hipotensão',     'Hipotensión'),
            t(lang, 'Tontura',        'Mareos'),
            t(lang, 'Fadiga',         'Fatiga'),
            t(lang, 'Edema periférico','Edema periférico'),
            t(lang, 'Náuseas',        'Náuseas')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV avançado (2º/3º grau)', 'Bloqueo AV avanzado (2º/3er grado)'),
            t(lang, 'Assistolia',              'Asistolia'),
            t(lang, 'Choque cardiogênico',     'Shock cardiogénico'),
            t(lang, 'Insuficiência cardíaca aguda', 'Insuficiencia cardíaca aguda'),
            t(lang, 'Bradicardia grave',        'Bradicardia grave'),
            t(lang, 'Colapso hemodinâmico',     'Colapso hemodinámico')
          ],

          alerts,

          ref: 'ESC Atrial Fibrillation Guidelines · ESC Supraventricular Tachycardia Guidelines · AHA/ACC Arrhythmia Guidelines · Lexicomp · UpToDate · FDA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Geralmente não requer ajuste renal significativo. Metabolismo hepático predominante.',
              'Generalmente no requiere ajuste renal significativo. Metabolismo hepático predominante.'
            ),
            fgMaior50: {
              vo: { dose: '80–120 mg', intervalo: '8/8h (IR) ou 240 mg LP 1x/dia', doseMaxima: '480 mg/dia', unidade: 'mg' },
              ev: { dose: '5–10 mg', intervalo: 'bolus lento 2–3 min (monitorização contínua)', doseMaxima: '20 mg/episódio', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar FC e ECG.', 'Dosis habitual. Monitorizar FC y ECG.')
            },
            fg30a50: {
              vo: { dose: '80 mg', intervalo: '8/8h ou LP 180 mg 1x/dia', doseMaxima: '360 mg/dia', unidade: 'mg' },
              ev: { dose: '5 mg', intervalo: 'bolus lento (cautela)', doseMaxima: '10 mg/episódio', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar FC, PA e ECG.', 'Sin ajuste renal específico. Monitorizar FC, PA y ECG.')
            },
            fg10a30: {
              vo: { dose: '40–80 mg', intervalo: '8/8h (cautela)', doseMaxima: '240 mg/dia', unidade: 'mg' },
              ev: { dose: '5 mg', intervalo: 'bolus lento (supervisão intensiva)', doseMaxima: '5 mg/episódio', unidade: 'mg' },
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal formal; usar dose menor por cautela. Monitorização contínua obrigatória.', 'Sin ajuste renal formal; usar dosis menor por precaución. Monitorización continua obligatoria.')
            },
            fgMenor10: {
              vo: { dose: '40 mg', intervalo: '8/8h (cautela máxima)', doseMaxima: '120 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dados limitados. Usar somente se imprescindível, com monitorização intensiva.', 'Datos limitados. Usar solo si imprescindible, con monitorización intensiva.')
            },
            hemodialise: {
              vo: { dose: '40–80 mg', intervalo: '8/8h (cautela)', doseMaxima: '240 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Não dialisável. Pode manter VO com monitorização cuidadosa de FC e ECG.', 'No dializable. Puede mantener VO con monitorización cuidadosa de FC y ECG.')
            }
          },

          safetyFlags: {
            hypotensionRisk:             true,
            bradycardiaRisk:             true,
            avBlockRisk:                 true,
            renalHighRisk:               false,
            qtRisk:                      false,
            heartFailureRisk:            true,
            digoxinInteractionRisk:      true,
            betaBlockerInteractionRisk:  true,
            pregnancyCaution:            true,
            infusionDrug:                true,
            warning: t(lang,
              'Verapamil CONTRAINDICADO em IC-FEr significativa. Risco de bloqueio AV grave com betabloqueadores IV — NUNCA associar. Aumenta níveis séricos de digoxina (~50–75%) — reduzir dose da digoxina.',
              'Verapamilo CONTRAINDICADO en IC-FEr significativa. Riesgo de bloqueo AV grave con betabloqueadores IV — NUNCA asociar. Aumenta niveles séricos de digoxina (~50–75%) — reducir dosis de digoxina.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Atrial Fibrillation Guidelines 2020/2023',
              'ESC Supraventricular Tachycardia Guidelines 2019',
              'AHA/ACC Arrhythmia Guidelines 2023',
              'Lexicomp 2026',
              'UpToDate',
              'FDA Label'
            ],
            note: t(lang,
              'BCC não-DHP fundamental para controle de FC em FA/flutter e reversão de TSVP. Diferencial: efeito cronotrópico e dromiotrópico negativo potentes. CONTRAINDICADO em IC-FEr e com betabloqueadores IV.',
              'BCC no-DHP fundamental para control de FC en FA/flutter y reversión de TSVP. Diferencial: efecto cronotrópico y dromotrópico negativo potentes. CONTRAINDICADO en IC-FEr y con betabloqueadores IV.'
            )
          }
        };
      }
    },

    /* ══════════════════════════════════════════════════════════════
       42. DILTIAZEM
       BCC não-DHP · FA/Flutter/TSVP · Angina · HAS
       CI em IC-FEr · Bradicardia · Bloqueio AV · Cardizem
    ══════════════════════════════════════════════════════════════ */
    diltiazem: {
      id: 'diltiazem',
      name: 'Diltiazem',
      category: 'cardio',
      commercialNames: ['Cardizem', 'Balcor', 'Diltiazem genérico'],

      calculate(paciente, lang = 'pt') {
        const peso  = paciente?.peso  || 70;
        const idade = paciente?.idade || 50;
        const fg    = paciente?.clcr  || paciente?.fg || 90;
        const fc    = paciente?.fc    || null;
        const feve  = paciente?.feve  || null;

        const doseBolus  = (0.25 * peso).toFixed(1);
        const doseBolus2 = (0.35 * peso).toFixed(1);

        const alerts = [
          t(lang,
            'CONTRAINDICADO em IC com fração de ejeção reduzida significativa — efeito inotrópico negativo pode precipitar descompensação grave.',
            'CONTRAINDICADO en IC con fracción de eyección reducida significativa — efecto inotrópico negativo puede precipitar descompensación grave.'
          ),
          t(lang,
            'Interação CRÍTICA: betabloqueadores IV — risco de bloqueio AV completo, bradicardia grave e colapso hemodinâmico. NUNCA associar IV.',
            'Interacción CRÍTICA: betabloqueadores IV — riesgo de bloqueo AV completo, bradicardia grave y colapso hemodinámico. NUNCA asociar IV.'
          ),
          t(lang,
            'Digoxina: diltiazem pode aumentar os níveis séricos — monitorar nível da digoxina.',
            'Digoxina: diltiazem puede aumentar los niveles séricos — monitorizar nivel de digoxina.'
          ),
          t(lang,
            'Monitorar ECG: intervalo PR — bloqueio AV de 1º grau é comum; suspender em BAV 2º/3º grau.',
            'Monitorizar ECG: intervalo PR — bloqueo AV de 1er grado es común; suspender en BAV 2º/3er grado.'
          )
        ];

        if (feve !== null && feve < 40) {
          alerts.unshift(t(lang,
            `CONTRAINDICADO: FEVE ${feve}% — IC-FEr. Diltiazem ESTÁ CONTRAINDICADO neste contexto.`,
            `CONTRAINDICADO: FEVI ${feve}% — IC-FEr. Diltiazem ESTÁ CONTRAINDICADO en este contexto.`
          ));
        }

        if (fc !== null && fc < 55) {
          alerts.unshift(t(lang,
            `ATENÇÃO: FC ${fc} bpm — bradicardia. Avaliar contraindicação ao diltiazem.`,
            `ATENCIÓN: FC ${fc} lpm — bradicardia. Evaluar contraindicación al diltiazem.`
          ));
        }

        if (idade >= 75) {
          alerts.push(t(lang,
            `Idoso (${idade} anos): maior risco de bradicardia, hipotensão, bloqueio AV e quedas. Iniciar com dose baixa.`,
            `Anciano (${idade} años): mayor riesgo de bradicardia, hipotensión, bloqueo AV y caídas. Iniciar con dosis baja.`
          ));
        }

        return {
          id:       'diltiazem',
          name:     'Diltiazem',
          class:    t(lang,
            'Bloqueador dos canais de cálcio não diidropiridínico',
            'Bloqueador de los canales de calcio no dihidropiridínico'
          ),
          category: 'cardio',

          commercialNames: ['Cardizem', 'Balcor', 'Diltiazem genérico'],

          presentation: [
            t(lang, 'Comprimidos 30 mg · 60 mg',                                   'Comprimidos 30 mg · 60 mg'),
            t(lang, 'Cápsulas/comprimidos LP 90 · 120 · 180 · 240 · 300 · 360 mg', 'Cápsulas/comprimidos LP 90 · 120 · 180 · 240 · 300 · 360 mg'),
            t(lang, 'Ampolas IV',                                                   'Ampollas IV')
          ],

          mechanism: t(lang,
            'Bloqueia canais de cálcio tipo L no nó AV, nó sinusal, miocárdio e musculatura lisa vascular. Reduz condução AV, frequência ventricular e consumo miocárdico de oxigênio. Promove vasodilatação coronariana e periférica. Efeito inotrópico negativo menor que o verapamil.',
            'Bloquea canales de calcio tipo L en el nodo AV, nodo sinusal, miocardio y músculo liso vascular. Reduce conducción AV, frecuencia ventricular y consumo miocárdico de oxígeno. Produce vasodilatación coronaria y periférica. Efecto inotrópico negativo menor que el verapamilo.'
          ),

          halfLife: t(lang, '4–12 horas (IR) · 6–9h (LP)', '4–12 horas (IR) · 6–9h (LP)'),
          onset:    t(lang, '3 min IV · 30–60 min VO', '3 min IV · 30–60 min VO'),

          dose: {
            adultoPadrao: t(lang,
              `VO: 30 mg 6/6h (IR) ou LP 120–180 mg 1x/dia. IV bolus: 0,25 mg/kg (${doseBolus} mg para ${peso} kg) em 2 min. Pode repetir 0,35 mg/kg (${doseBolus2} mg) após 15 min.`,
              `VO: 30 mg cada 6h (IR) o LP 120–180 mg 1 vez/día. IV bolo: 0,25 mg/kg (${doseBolus} mg para ${peso} kg) en 2 min. Puede repetir 0,35 mg/kg (${doseBolus2} mg) a los 15 min.`
            ),
            adultoGrave: t(lang,
              'Infusão IV contínua: 5–15 mg/h conforme FC. Dose máxima VO: 360–480 mg/dia.',
              'Infusión IV continua: 5–15 mg/h según FC. Dosis máxima VO: 360–480 mg/día.'
            )
          },

          risksByPatient: [
            t(lang,
              'IC-FEr (FEVE < 40%): CONTRAINDICADO.',
              'IC-FEr (FEVI < 40%): CONTRAINDICADO.'
            ),
            t(lang,
              'Betabloqueador IV concomitante: CONTRAINDICADO — risco de colapso hemodinâmico.',
              'Betabloqueador IV concomitante: CONTRAINDICADO — riesgo de colapso hemodinámico.'
            ),
            t(lang,
              'Gestante: usar apenas se benefício superar risco, sob supervisão especializada.',
              'Gestante: usar solo si el beneficio supera el riesgo, bajo supervisión especializada.'
            ),
            t(lang,
              'Lactante: compatível com cautela; observar bradicardia ou sonolência no lactente.',
              'Lactante: compatible con precaución; observar bradicardia o somnolencia en el lactante.'
            ),
            t(lang,
              `Idoso (${idade} anos): maior risco de bradicardia, hipotensão, bloqueio AV e quedas. Iniciar com dose baixa.`,
              `Anciano (${idade} años): mayor riesgo de bradicardia, hipotensión, bloqueo AV y caídas. Iniciar con dosis baja.`
            ),
            t(lang,
              'Insuficiência hepática: metabolismo hepático importante — usar dose menor e titular com cautela.',
              'Insuficiencia hepática: metabolismo hepático importante — usar dosis menor y titular con precaución.'
            )
          ],

          commonAdverseEffects: [
            t(lang, 'Bradicardia',      'Bradicardia'),
            t(lang, 'Hipotensão',       'Hipotensión'),
            t(lang, 'Tontura',          'Mareos'),
            t(lang, 'Cefaleia',         'Cefalea'),
            t(lang, 'Edema periférico', 'Edema periférico'),
            t(lang, 'Fadiga',           'Fatiga'),
            t(lang, 'Náuseas',          'Náuseas')
          ],

          dangerousAdverseEffects: [
            t(lang, 'Bloqueio AV avançado (2º/3º grau)', 'Bloqueo AV avanzado (2º/3er grado)'),
            t(lang, 'Bradicardia grave',          'Bradicardia grave'),
            t(lang, 'Choque cardiogênico',         'Shock cardiogénico'),
            t(lang, 'Insuficiência cardíaca aguda','Insuficiencia cardíaca aguda'),
            t(lang, 'Assistolia',                  'Asistolia'),
            t(lang, 'Colapso hemodinâmico',        'Colapso hemodinámico')
          ],

          alerts,

          ref: 'ESC Atrial Fibrillation Guidelines · ESC Supraventricular Tachycardia Guidelines · AHA/ACC Arrhythmia Guidelines · ESC Chronic Coronary Syndrome Guidelines · Goodman & Gilman · Lexicomp · FDA Label',

          renalDose: {
            version: 2,
            requiresAdjustment: false,
            message: t(lang,
              'Não requer ajuste renal habitual. Metabolismo hepático predominante.',
              'No requiere ajuste renal habitual. Metabolismo hepático predominante.'
            ),
            fgMaior50: {
              vo: { dose: '120–360 mg LP', intervalo: '1x/dia (ou IR 30–60 mg 6/6h)', doseMaxima: '480 mg/dia', unidade: 'mg' },
              ev: { dose: `0,25 mg/kg (≈${doseBolus} mg)`, intervalo: 'bolus IV lento 2 min; infusão: 5–15 mg/h', doseMaxima: '15 mg/h', unidade: 'mg/kg / mg/h' },
              pediatrica: null,
              obs: t(lang, 'Dose habitual. Monitorar FC, PA e ECG.', 'Dosis habitual. Monitorizar FC, PA y ECG.')
            },
            fg30a50: {
              vo: { dose: '120–240 mg LP', intervalo: '1x/dia', doseMaxima: '360 mg/dia', unidade: 'mg' },
              ev: { dose: '0,25 mg/kg', intervalo: 'bolus lento (cautela)', doseMaxima: '10 mg/h (infusão)', unidade: 'mg/kg / mg/h' },
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal específico. Monitorar FC, PA e ECG frequentemente.', 'Sin ajuste renal específico. Monitorizar FC, PA y ECG frecuentemente.')
            },
            fg10a30: {
              vo: { dose: '60–120 mg LP', intervalo: '1x/dia (cautela)', doseMaxima: '240 mg/dia', unidade: 'mg' },
              ev: { dose: '0,25 mg/kg (dose única)', intervalo: 'supervisão intensiva', doseMaxima: '5 mg/h (infusão)', unidade: 'mg/kg / mg/h' },
              pediatrica: null,
              obs: t(lang, 'Sem ajuste renal formal; usar dose menor. Monitorização contínua obrigatória.', 'Sin ajuste renal formal; usar dosis menor. Monitorización continua obligatoria.')
            },
            fgMenor10: {
              vo: { dose: '60 mg', intervalo: '12/12h (cautela máxima)', doseMaxima: '120 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Dados limitados. Usar somente se imprescindível, com monitorização intensiva.', 'Datos limitados. Usar solo si imprescindible, con monitorización intensiva.')
            },
            hemodialise: {
              vo: { dose: '60–120 mg', intervalo: '12/12h (cautela)', doseMaxima: '240 mg/dia', unidade: 'mg' },
              ev: null,
              pediatrica: null,
              obs: t(lang, 'Não dialisável. Pode manter VO com monitorização cuidadosa de FC e ECG.', 'No dializable. Puede mantener VO con monitorización cuidadosa de FC y ECG.')
            }
          },

          safetyFlags: {
            hypotensionRisk:             true,
            bradycardiaRisk:             true,
            avBlockRisk:                 true,
            renalHighRisk:               false,
            qtRisk:                      false,
            heartFailureRisk:            true,
            digoxinInteractionRisk:      true,
            betaBlockerInteractionRisk:  true,
            pregnancyCaution:            true,
            infusionDrug:                true,
            ivUseHighRisk:               true,
            warning: t(lang,
              'Diltiazem CONTRAINDICADO em IC-FEr significativa. Risco de bloqueio AV grave com betabloqueadores IV — NUNCA associar. Monitorar ECG (PR) e FC rigorosamente. Menor constipação que verapamil.',
              'Diltiazem CONTRAINDICADO en IC-FEr significativa. Riesgo de bloqueo AV grave con betabloqueadores IV — NUNCA asociar. Monitorizar ECG (PR) y FC rigurosamente. Menor estreñimiento que verapamilo.'
            )
          },

          auditNotes: {
            status: 'excellent_after_review',
            sourcePriority: [
              'ESC Atrial Fibrillation Guidelines 2020/2023',
              'ESC Supraventricular Tachycardia Guidelines 2019',
              'AHA/ACC Arrhythmia Guidelines 2023',
              'ESC Chronic Coronary Syndrome Guidelines 2019',
              'Goodman & Gilman',
              'Lexicomp 2026',
              'FDA Label'
            ],
            note: t(lang,
              'BCC não-DHP fundamental para controle de FC em FA/flutter e reversão de TSVP. Preferido ao verapamil por menor efeito inotrópico negativo e menos constipação. Dose IV calculada por peso — bolus 0,25 mg/kg em 2 min.',
              'BCC no-DHP fundamental para control de FC en FA/flutter y reversión de TSVP. Preferido al verapamilo por menor efecto inotrópico negativo y menos estreñimiento. Dosis IV calculada por peso — bolo 0,25 mg/kg en 2 min.'
            )
          }
        };
      }
    }

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 13 (BCC não-DHP: verapamil · diltiazem) */

  /* =========================================================
     GRUPO 14 — Antiarrítmicos: adenosina · amiodarona · dronedarona · dofetilida
     (#43 · #44 · #45 · #46)
     ========================================================= */
  Object.assign(window.CARDIO_DRUGS_DB, {

    adenosina: {
      name: 'Adenosina',
      category: 'cardio',
      order: 43,

      safetyFlags: {
        emergencyDrug: true,
        bronchospasmRisk: true,
        preExcitationRisk: true,
        infusionDrug: true,
        bradycardiaRisk: true,
        avBlockRisk: true,
        ivUseHighRisk: true,
        hospitalizationRequired: true
      },

      mechanism: {
        pt: 'Ativa receptores A1 de adenosina no nó AV, aumentando efluxo de potássio e reduzindo entrada de cálcio, causando bloqueio AV transitório (meia-vida <10 s) e interrupção de circuitos de reentrada dependentes do nó AV.',
        es: 'Activa receptores A1 de adenosina en el nodo AV, aumentando el eflujo de potasio y reduciendo la entrada de calcio, causando bloqueo AV transitorio (vida media <10 s) e interrupción de circuitos de reentrada dependientes del nodo AV.'
      },

      pharmacokinetics: {
        halfLife: '<10 segundos',
        onset: 'Imediato (segundos)',
        duration: 'Segundos'
      },

      commercialNames: {
        br: ['Adenocard', 'Adenosina genérica'],
        ar: ['Adenocard', 'Adenosina genérica']
      },

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Não requer ajuste renal — meia-vida ultracurta (<10 s).',
          es: 'No requiere ajuste renal — vida media ultracorta (<10 s).'
        },
        fgMaior50:  { vo: null, ev: '6 mg bolus IV; 12 mg se necessário', obs: 'Padrão' },
        fg30a50:    { vo: null, ev: '6 mg bolus IV; 12 mg se necessário', obs: 'Sem ajuste' },
        fg10a30:    { vo: null, ev: '6 mg bolus IV; 12 mg se necessário', obs: 'Sem ajuste' },
        fgMenor10:  { vo: null, ev: '6 mg bolus IV; 12 mg se necessário', obs: 'Sem ajuste' },
        hemodialise:{ vo: null, ev: '6 mg bolus IV; 12 mg se necessário', obs: 'Sem ajuste' }
      },

      blackBoxWarnings: [],

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 50, fc = 160, paSistolica = 100,
                qrsLargo = false, ritmoIrregular = false,
                preExcitacao = false, asmaDpoc = false,
                ecgBloqueioAV = false, usoDipiridamol = false,
                usoCarbamazepina = false, acessoCentral = false,
                gestante = false } = paciente;

        const alerts = [];
        let doseRec = '6 mg IV em bolus extremamente rápido + flush imediato 20 mL SF 0,9%';
        let doseEscalonada = 'Se não converter em 1–2 min: 12 mg IV bolus. Pode repetir 12 mg conforme protocolo.';
        let contraindicado = false;

        // Contraindicações absolutas
        if (ecgBloqueioAV) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Bloqueio AV de 2º/3º grau sem marcapasso — não usar adenosina.', '⛔ CONTRAINDICADO: Bloqueo AV 2º/3º grado sin marcapasos — no usar adenosina.') });
          contraindicado = true;
        }
        if (asmaDpoc) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO (relativo): Asma/DPOC com broncoespasmo ativo — alto risco de broncoespasmo grave.', '⛔ CONTRAINDICADO (relativo): Asma/EPOC con broncoespasmo activo — alto riesgo de broncoespasmo grave.') });
        }

        // Pré-excitação / QRS largo irregular
        if (preExcitacao) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ PERIGO: Pré-excitação detectada — NÃO usar adenosina em FA/flutter com QRS pré-excitado. Pode precipitar FV.', '⛔ PELIGRO: Preexcitación detectada — NO usar adenosina en FA/flutter con QRS preexcitado. Puede precipitar FV.') });
          contraindicado = true;
        }
        if (qrsLargo && ritmoIrregular) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ NÃO USAR: Taquicardia irregular de QRS largo — possível FA+pré-excitação ou TV polimórfica.', '⛔ NO USAR: Taquicardia irregular de QRS ancho — posible FA+preexcitación o TV polimorfa.') });
          contraindicado = true;
        }

        // Instabilidade hemodinâmica
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⚠️ Paciente instável (PAS <90 mmHg) — preferir cardioversão elétrica imediata.', '⚠️ Paciente inestable (PAS <90 mmHg) — preferir cardioversión eléctrica inmediata.') });
        }

        // Doses especiais
        if (usoDipiridamol || usoCarbamazepina) {
          doseRec = '3 mg IV em bolus — DOSE REDUZIDA por uso de dipiridamol/carbamazepina';
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Dipiridamol ou carbamazepina em uso: usar dose INICIAL de 3 mg IV. Risco de bloqueio AV prolongado com dose padrão.', '⚠️ Dipiridamol o carbamazepina en uso: usar dosis INICIAL de 3 mg IV. Riesgo de bloqueo AV prolongado con dosis estándar.') });
        }
        if (acessoCentral) {
          doseRec = '3 mg IV em bolus por acesso central';
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Acesso central: iniciar com 3 mg IV. Efeito muito potencializado.', '⚠️ Acceso central: iniciar con 3 mg IV. Efecto muy potenciado.') });
        }

        // Bradicardia antes
        if (fc < 100) {
          alerts.push({ tipo: 'info', msg: t(lang, 'ℹ️ FC <100 bpm pré-tratamento — verificar diagnóstico de TSVP antes de administrar.', 'ℹ️ FC <100 lpm pretratamiento — verificar diagnóstico de TSVP antes de administrar.') });
        }

        // Gestante
        if (gestante) {
          alerts.push({ tipo: 'info', msg: t(lang, 'ℹ️ Gestante: adenosina pode ser usada para TSVP na gravidez pela meia-vida ultracurta — uso monitorizado.', 'ℹ️ Embarazada: adenosina puede usarse para TSVP en embarazo por vida media ultracorta — uso monitorizado.') });
        }

        // Alerta universal de monitorização
        alerts.push({ tipo: 'info', msg: t(lang, '📋 ECG contínuo obrigatório. Preparar desfibrilador. Registrar traçado durante administração. Flush imediato 20 mL SF após bolus.', '📋 ECG continuo obligatorio. Preparar desfibrilador. Registrar trazado durante administración. Flush inmediato 20 mL SF tras bolo.') });

        return {
          dose: contraindicado
            ? t(lang, 'ADENOSINA CONTRAINDICADA — ver alertas.', 'ADENOSINA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseEscalonada: contraindicado ? null : doseEscalonada,
          apresentacao: t(lang, 'Ampolas IV 3 mg/mL (6 mg/2 mL)', 'Ampollas IV 3 mg/mL (6 mg/2 mL)'),
          classe: t(lang, 'Antiarrítmico de ação ultracurta — bloqueador transitório nó AV', 'Antiarrítmico de acción ultracorta — bloqueador transitorio nodo AV'),
          indicacoes: t(lang,
            ['TSVP (AVNRT, AVRT ortodrômica)', 'Diagnóstico diferencial de taquicardias supraventriculares', 'QRS estreito regular não convertido por vagais'],
            ['TSVP (AVNRT, AVRT ortodrómica)', 'Diagnóstico diferencial de taquicardias supraventriculares', 'QRS estrecho regular no convertido por vagales']
          ),
          ajusteRenal: t(lang, 'Sem ajuste — meia-vida <10 s', 'Sin ajuste — vida media <10 s'),
          efeitosAdversos: t(lang,
            ['Rubor facial', 'Pressão/dor torácica breve', 'Dispneia transitória', 'Sensação de morte iminente', 'Náuseas', 'Tontura', 'Cefaleia', '⚠️ Broncoespasmo', '⚠️ Bloqueio AV prolongado', '⚠️ FA transitória', '⚠️ Assistolia breve'],
            ['Rubor facial', 'Presión/dolor torácico breve', 'Disnea transitoria', 'Sensación de muerte inminente', 'Náuseas', 'Mareos', 'Cefalea', '⚠️ Broncoespasmo', '⚠️ Bloqueo AV prolongado', '⚠️ FA transitoria', '⚠️ Asistolia breve']
          ),
          contraindicacoes: t(lang,
            ['Bloqueio AV 2º/3º sem marcapasso', 'Doença do nó sinusal sem marcapasso', 'Pré-excitação com FA/flutter', 'QRS largo irregular', 'Hipersensibilidade'],
            ['Bloqueo AV 2º/3º sin marcapasos', 'Enfermedad del nodo sinusal sin marcapasos', 'Preexcitación con FA/flutter', 'QRS ancho irregular', 'Hipersensibilidad']
          ),
          interacoes: t(lang,
            ['Dipiridamol: potencializa muito (usar 3 mg)', 'Carbamazepina: maior risco bloqueio AV', 'Teofilina/aminofilina: antagonizam efeito', 'Cafeína: reduz efeito', 'BB/verapamil/digoxina: maior risco bradicardia'],
            ['Dipiridamol: potencia mucho (usar 3 mg)', 'Carbamazepina: mayor riesgo bloqueo AV', 'Teofilina/aminofilina: antagonizan efecto', 'Cafeína: reduce efecto', 'BB/verapamilo/digoxina: mayor riesgo bradicardia']
          ),
          monitoramento: t(lang,
            ['ECG contínuo durante/após bolus', 'PA', 'Registro de traçado na administração', 'Desfibrilador disponível', 'Monitorar broncoespasmo'],
            ['ECG continuo durante/tras bolo', 'PA', 'Registro de trazado en administración', 'Desfibrilador disponible', 'Monitorizar broncoespasmo']
          ),
          refs: ['AHA ACLS Guidelines', 'ESC SVT Guidelines', 'AHA/ACC/HRS SVT Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed'],
          alerts
        };
      }
    }, /* fim adenosina */

    amiodarona: {
      name: 'Amiodarona',
      category: 'cardio',
      order: 44,

      safetyFlags: {
        torsadesRisk: true,
        bradycardiaRisk: true,
        avBlockRisk: true,
        pulmonaryToxicityRisk: true,
        hepaticToxicityRisk: true,
        thyroidToxicityRisk: true,
        longHalfLife: true,
        highInteractionRisk: true,
        qtRisk: true,
        infusionDrug: true,
        electrolyteRisk: true
      },

      mechanism: {
        pt: 'Bloqueia canais de K⁺ (classe III), Na⁺ (classe I), Ca²⁺ (classe IV) e receptores β-adrenérgicos (classe II). Prolonga repolarização e período refratário em todo o coração. Meia-vida de 40–60 dias — efeitos persistem semanas após suspensão.',
        es: 'Bloquea canales de K⁺ (clase III), Na⁺ (clase I), Ca²⁺ (clase IV) y receptores β-adrenérgicos (clase II). Prolonga repolarización y período refractario en todo el corazón. Vida media 40–60 días — efectos persisten semanas tras suspensión.'
      },

      pharmacokinetics: {
        halfLife: '40–60 dias',
        onset: 'IV: minutos a horas | VO: dias a semanas',
        duration: 'Semanas a meses após suspensão'
      },

      commercialNames: {
        br: ['Ancoron', 'Atlansil', 'Amiodarona genérica'],
        ar: ['Trangorex', 'Amiodarona genérica']
      },

      blackBoxWarnings: [
        'Toxicidade pulmonar potencialmente fatal (pneumonite/fibrose)',
        'Toxicidade hepática potencialmente fatal',
        'Proarritmia e piora de arritmias',
        'Uso oral crônico deve ser reservado para arritmias ventriculares graves sem alternativa adequada'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Não requer ajuste renal habitual. Metabólito ativo (desetilamiodarona) não é significativamente dialisável.',
          es: 'No requiere ajuste renal habitual. El metabolito activo (desetilamiodarona) no es significativamente dializable.'
        },
        fgMaior50:  { vo: '100–400 mg/dia (manutenção)', ev: 'Protocolo padrão', obs: 'Sem ajuste' },
        fg30a50:    { vo: '100–400 mg/dia', ev: 'Protocolo padrão', obs: 'Sem ajuste renal' },
        fg10a30:    { vo: '100–400 mg/dia', ev: 'Protocolo padrão', obs: 'Monitorar toxicidade' },
        fgMenor10:  { vo: '100–400 mg/dia', ev: 'Protocolo padrão', obs: 'Usar com cautela; monitorar' },
        hemodialise:{ vo: '100–400 mg/dia', ev: 'Protocolo padrão', obs: 'Não dialisável; sem ajuste adicional' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 60, fc = 110, paSistolica = 110,
                qtc = 430, potassio = 4.0, magnesio = 2.0,
                feve = 45, doencaPulmonar = false, usoVarfarina = false,
                usoDigoxina = false, indicacao = 'FA', viaIV = false,
                gestante = false, lactante = false,
                ecgBloqueioAV = false, tsh = null } = paciente;

        const alerts = [];
        let doseVO = '200 mg 3×/dia (carga 4–6 semanas) → manutenção 100–200 mg/dia';
        let doseIV = '150 mg IV em 10 min → infusão 1 mg/min por 6 h → 0,5 mg/min por 18 h';
        let contraindicado = false;

        // Contraindicações absolutas
        if (ecgBloqueioAV) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Bloqueio AV avançado sem marcapasso.', '⛔ CONTRAINDICADO: Bloqueo AV avanzado sin marcapasos.') });
          contraindicado = true;
        }
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Choque/hipotensão grave — contraindicado como terapia não emergencial. Em PCR usar 300 mg IV bolus rápido.', '⛔ Shock/hipotensión grave — contraindicado como terapia no emergencial. En PCR usar 300 mg IV bolo rápido.') });
          contraindicado = true;
        }

        // PCR / FV / TV sem pulso
        if (indicacao === 'PCR') {
          alerts.push({ tipo: 'danger', msg: t(lang, '🚨 PCR FV/TV sem pulso: 300 mg IV/IO bolus rápido. Se não reverter: 150 mg adicional IV.', '🚨 PCR FV/TV sin pulso: 300 mg IV/IO bolo rápido. Si no revierte: 150 mg adicional IV.') });
        }

        // QTc
        if (qtc > 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ QTc ${qtc} ms — extremamente elevado. Risco aumentado de Torsades. Avaliar suspensão.`, `⛔ QTc ${qtc} ms — extremadamente elevado. Riesgo aumentado de Torsades. Evaluar suspensión.`) });
        } else if (qtc > 470) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QTc ${qtc} ms — elevado. Monitorar rigorosamente e corrigir eletrólitos.`, `⚠️ QTc ${qtc} ms — elevado. Monitorizar rigurosamente y corregir electrolitos.`) });
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir antes/durante amiodarona. Risco de Torsades.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir antes/durante amiodarona. Riesgo de Torsades.`) });
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Repor magnésio IV/VO antes de iniciar.`, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Reponer magnesio IV/VO antes de iniciar.`) });
        }

        // FC
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado sem marcapasso.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado sin marcapasos.`) });
          contraindicado = true;
        } else if (fc < 60) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FC ${fc} bpm — bradicardia. Monitorar; reduzir dose se necessário.`, `⚠️ FC ${fc} lpm — bradicardia. Monitorizar; reducir dosis si necesario.`) });
        }

        // FEVE
        if (feve < 35) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FEVE ${feve}% — disfunção grave. Amiodarona é uma das poucas opções antiarrítmicas com menor impacto inotrópico negativo, mas monitorar sinais de IC.`, `⚠️ FEVE ${feve}% — disfunción grave. Amiodarona es una de las pocas opciones antiarrítmicas con menor impacto inotrópico negativo, pero monitorizar signos de IC.`) });
        }

        // Doença pulmonar
        if (doencaPulmonar) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Doença pulmonar prévia — monitorar toxicidade pulmonar (dispneia, tosse seca, infiltrado intersticial).', '⚠️ Enfermedad pulmonar previa — monitorizar toxicidad pulmonar (disnea, tos seca, infiltrado intersticial).') });
        }

        // TSH
        if (tsh !== null && tsh < 0.1) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ TSH suprimido — possível hipertireoidismo induzido. Avaliar função tireoidiana.', '⚠️ TSH suprimido — posible hipertiroidismo inducido. Evaluar función tiroidea.') });
        }
        if (tsh !== null && tsh > 10) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ TSH elevado — possível hipotireoidismo induzido pela amiodarona. Avaliar levotiroxina.', '⚠️ TSH elevado — posible hipotiroidismo inducido por amiodarona. Evaluar levotiroxina.') });
        }

        // Interações
        if (usoVarfarina) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Varfarina: amiodarona inibe CYP2C9 — INR pode duplicar ou triplicar. Reduzir warfarina em 30–50% e monitorar INR 2×/semana inicialmente.', '🔴 Warfarina: amiodarona inhibe CYP2C9 — INR puede duplicar o triplicar. Reducir warfarina 30–50% y monitorar INR 2×/semana inicialmente.') });
        }
        if (usoDigoxina) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Digoxina: amiodarona aumenta nível sérico da digoxina. Reduzir dose de digoxina em ~50% e monitorar nível.', '🔴 Digoxina: amiodarona aumenta nivel sérico de digoxina. Reducir dosis de digoxina ~50% y monitorizar nivel.') });
        }

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Gestante: evitar amiodarona. Risco de toxicidade tireoidiana fetal/neonatal. Usar apenas em arritmia materna potencialmente fatal sem alternativa.', '⛔ Embarazada: evitar amiodarona. Riesgo de toxicidad tiroidea fetal/neonatal. Usar solo en arritmia materna potencialmente fatal sin alternativa.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Lactante: evitar. Passa para o leite; meia-vida longa; risco de toxicidade tireoidiana no lactente.', '⛔ Lactante: evitar. Pasa a la leche; vida media larga; riesgo de toxicidad tiroidea en el lactante.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Idoso ≥70 anos — maior risco de toxicidade pulmonar, tireoidiana e interações. Usar a menor dose efetiva.', '⚠️ Anciano ≥70 años — mayor riesgo de toxicidad pulmonar, tiroidea e interacciones. Usar la menor dosis efectiva.') });
        }

        // Black Box universal
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Toxicidade pulmonar (pneumonite/fibrose) e hepática potencialmente fatais. Uso crônico restrito a arritmias ventriculares graves refratárias.', '📦 BLACK BOX: Toxicidad pulmonar (neumonitis/fibrosis) y hepática potencialmente fatales. Uso crónico restringido a arritmias ventriculares graves refractarias.') });

        return {
          dose: contraindicado
            ? t(lang, 'AMIODARONA CONTRAINDICADA — ver alertas.', 'AMIODARONA CONTRAINDICADA — ver alertas.')
            : (viaIV ? doseIV : doseVO),
          doseVO: contraindicado ? null : doseVO,
          doseIV: contraindicado ? null : doseIV,
          doseEspecial: t(lang, 'PCR FV/TV sem pulso: 300 mg IV/IO bolus + 150 mg se necessário', 'PCR FV/TV sin pulso: 300 mg IV/IO bolo + 150 mg si necesario'),
          apresentacao: t(lang, 'Comprimidos 100 mg / 200 mg | Ampolas IV 150 mg/3 mL', 'Comprimidos 100 mg / 200 mg | Ampollas IV 150 mg/3 mL'),
          classe: t(lang, 'Antiarrítmico Classe III (+ I + II + IV) | Meia-vida 40–60 dias', 'Antiarrítmico Clase III (+ I + II + IV) | Vida media 40–60 días'),
          indicacoes: t(lang,
            ['FV/TV recorrente', 'TVNS/TVS em cardiopatia estrutural', 'FA/flutter selecionados', 'PCR refratária (ACLS)'],
            ['FV/TV recurrente', 'TVNS/TVS en cardiopatía estructural', 'FA/flutter seleccionados', 'PCR refractaria (ACLS)']
          ),
          ajusteRenal: t(lang, 'Sem ajuste renal', 'Sin ajuste renal'),
          efeitosAdversos: t(lang,
            ['Bradicardia', 'Hipotensão IV', 'Fotossensibilidade', 'Constipação', 'Tremor', '⚠️ Toxicidade pulmonar', '⚠️ Hepatotoxicidade', '⚠️ Hipo/hipertireoidismo', '⚠️ QT prolongado/Torsades', '⚠️ Depósitos corneanos', '⚠️ Neuropatia periférica'],
            ['Bradicardia', 'Hipotensión IV', 'Fotosensibilidad', 'Estreñimiento', 'Temblor', '⚠️ Toxicidad pulmonar', '⚠️ Hepatotoxicidad', '⚠️ Hipo/hipertiroidismo', '⚠️ QT prolongado/Torsades', '⚠️ Depósitos corneales', '⚠️ Neuropatía periférica']
          ),
          monitoramento: t(lang,
            ['ECG + QTc', 'TSH/T4 livre (basal, 3–6 meses)', 'TGO/TGP (basal, periódico)', 'RX tórax + função pulmonar (uso crônico)', 'INR se varfarina', 'Nível digoxina se associado', 'Avaliação oftalmológica'],
            ['ECG + QTc', 'TSH/T4 libre (basal, 3–6 meses)', 'TGO/TGP (basal, periódico)', 'Rx tórax + función pulmonar (uso crónico)', 'INR si warfarina', 'Nivel digoxina si asociado', 'Evaluación oftalmológica']
          ),
          refs: ['AHA ACLS Guidelines', 'ESC AF Guidelines', 'ESC VA Guidelines', 'AHA/ACC/HRS Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed'],
          alerts
        };
      }
    }, /* fim amiodarona */

    dronedarona: {
      name: 'Dronedarona',
      category: 'cardio',
      order: 45,

      safetyFlags: {
        torsadesRisk: true,
        bradycardiaRisk: true,
        avBlockRisk: true,
        heartFailureRisk: true,
        hepaticToxicityRisk: true,
        pulmonaryToxicityRisk: true,
        qtRisk: true,
        highInteractionRisk: true,
        electrolyteRisk: true,
        digoxinInteractionRisk: true
      },

      mechanism: {
        pt: 'Análogo não iodado da amiodarona. Bloqueia canais de K⁺, Na⁺ e Ca²⁺ e exerce efeito antiadrenérgico. Prolonga período refratário. Não causa toxicidade tireoidiana por ausência de iodo. Meia-vida 13–19 h.',
        es: 'Análogo no yodado de la amiodarona. Bloquea canales de K⁺, Na⁺ y Ca²⁺ y ejerce efecto antiadrenérgico. Prolonga período refractario. No causa toxicidad tiroidea por ausencia de yodo. Vida media 13–19 h.'
      },

      pharmacokinetics: {
        halfLife: '13–19 horas',
        onset: 'Dias',
        duration: 'Sustentado com uso 12/12h'
      },

      commercialNames: {
        br: ['Multaq'],
        ar: ['Multaq']
      },

      blackBoxWarnings: [
        'Aumenta mortalidade, AVC e hospitalização por IC em FA permanente (Estudo PALLAS)',
        'Contraindicada em IC sintomática com descompensação recente ou NYHA IV'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Sem ajuste formal por função renal, mas pode elevar creatinina por inibição da secreção tubular (sem redução real da TFG). Monitorar.',
          es: 'Sin ajuste formal por función renal, pero puede elevar creatinina por inhibición de secreción tubular (sin reducción real de TFG). Monitorizar.'
        },
        fgMaior50:  { vo: '400 mg 12/12h com alimentos', ev: null, obs: 'Dose padrão' },
        fg30a50:    { vo: '400 mg 12/12h com alimentos', ev: null, obs: 'Monitorar creatinina' },
        fg10a30:    { vo: '400 mg 12/12h com alimentos', ev: null, obs: 'Usar com cautela; monitorar' },
        fgMenor10:  { vo: '400 mg 12/12h — dados limitados', ev: null, obs: 'Cautela extrema' },
        hemodialise:{ vo: '400 mg 12/12h — dados muito limitados', ev: null, obs: 'Sem dados robustos' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 65, fc = 80, paSistolica = 120,
                qtc = 420, potassio = 4.0, magnesio = 2.0,
                feve = 50, classeNYHA = 2, faPermanente = false,
                icDescompensadaRecente = false, usoDigoxina = false,
                inibidoresCYP3A4 = false, medicamentosQT = false,
                gestante = false, lactante = false,
                ecgBloqueioAV = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Contraindicações absolutas — FA permanente (PALLAS)
        if (faPermanente) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: FA PERMANENTE — dronedarona aumenta mortalidade, AVC e hospitalizações por IC (Estudo PALLAS). Suspender imediatamente.', '⛔ CONTRAINDICADO: FA PERMANENTE — dronedarona aumenta mortalidad, AVC y hospitalizaciones por IC (Estudio PALLAS). Suspender inmediatamente.') });
          contraindicado = true;
        }

        // IC descompensada recente ou NYHA IV
        if (icDescompensadaRecente || classeNYHA >= 4) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: IC descompensada recente ou NYHA IV — dronedarona piora prognóstico nesta população.', '⛔ CONTRAINDICADO: IC descompensada reciente o NYHA IV — dronedarona empeora pronóstico en esta población.') });
          contraindicado = true;
        }

        // Bloqueio AV
        if (ecgBloqueioAV) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Bloqueio AV 2º/3º grau sem marcapasso.', '⛔ CONTRAINDICADO: Bloqueo AV 2º/3º grado sin marcapasos.') });
          contraindicado = true;
        }

        // FC
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        } else if (fc < 60) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FC ${fc} bpm — bradicardia. Monitorar.`, `⚠️ FC ${fc} lpm — bradicardia. Monitorizar.`) });
        }

        // QTc
        if (qtc >= 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ QTc ${qtc} ms ≥500 — contraindicado.`, `⛔ QTc ${qtc} ms ≥500 — contraindicado.`) });
          contraindicado = true;
        } else if (qtc >= 470) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QTc ${qtc} ms — elevado. Monitorar ECG e corrigir eletrólitos.`, `⚠️ QTc ${qtc} ms — elevado. Monitorizar ECG y corregir electrolitos.`) });
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir antes de iniciar.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir antes de iniciar.`) });
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Repor antes de iniciar.`, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Reponer antes de iniciar.`) });
        }

        // FEVE moderada (NYHA II-III)
        if (feve < 35 && classeNYHA <= 3) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FEVE ${feve}% com IC estável — usar com cautela; risco de piora. Monitorar sintomas de IC e hospitalização.`, `⚠️ FEVE ${feve}% con IC estable — usar con precaución; riesgo de empeoramiento. Monitorizar síntomas de IC y hospitalización.`) });
        }

        // Inibidores CYP3A4 potentes
        if (inibidoresCYP3A4) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Inibidores potentes de CYP3A4 (cetoconazol, claritromicina, ritonavir, etc.) — CONTRAINDICADO concomitantemente.', '⛔ Inhibidores potentes de CYP3A4 (ketoconazol, claritromicina, ritonavir, etc.) — CONTRAINDICADO concomitantemente.') });
          contraindicado = true;
        }

        // Medicamentos QT
        if (medicamentosQT) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Fármacos que prolongam QT (sotalol, dofetilida, ibutilida, macrolídeos, antipsicóticos) — CONTRAINDICADO concomitantemente.', '⛔ Fármacos que prolongan QT (sotalol, dofetilida, ibutilida, macrólidos, antipsicóticos) — CONTRAINDICADO concomitantemente.') });
          contraindicado = true;
        }

        // Digoxina
        if (usoDigoxina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Digoxina: dronedarona aumenta níveis. Reduzir dose de digoxina e monitorar nível sérico.', '⚠️ Digoxina: dronedarona aumenta niveles. Reducir dosis de digoxina y monitorizar nivel sérico.') });
        }

        // Gestante/Lactante
        if (gestante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Evitar na gestação. Dados limitados; risco fetal não excluído.', '⛔ Evitar en embarazo. Datos limitados; riesgo fetal no excluido.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Evitar na lactação por dados insuficientes.', '⛔ Evitar en lactancia por datos insuficientes.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Idoso: maior risco de bradicardia, efeitos GI e interações. Monitorar ritmo e função hepática.', '⚠️ Anciano: mayor riesgo de bradicardia, efectos GI e interacciones. Monitorizar ritmo y función hepática.') });
        }

        // Instrução de tomada com alimentos
        alerts.push({ tipo: 'info', msg: t(lang, '🍽️ Tomar SEMPRE com alimentos — aumenta biodisponibilidade e reduz efeitos GI.', '🍽️ Tomar SIEMPRE con alimentos — aumenta biodisponibilidad y reduce efectos GI.') });
        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: FA permanente — mortalidade aumentada (PALLAS). IC descompensada/NYHA IV — contraindicado.', '📦 BLACK BOX: FA permanente — mortalidad aumentada (PALLAS). IC descompensada/NYHA IV — contraindicado.') });

        return {
          dose: contraindicado
            ? t(lang, 'DRONEDARONA CONTRAINDICADA — ver alertas.', 'DRONEDARONA CONTRAINDICADA — ver alertas.')
            : t(lang, '400 mg VO 12/12h com alimentos', '400 mg VO cada 12h con alimentos'),
          doseMax: '800 mg/dia',
          apresentacao: t(lang, 'Comprimidos 400 mg (Multaq)', 'Comprimidos 400 mg (Multaq)'),
          classe: t(lang, 'Antiarrítmico Classe III — análogo não iodado da amiodarona | Meia-vida 13–19 h', 'Antiarrítmico Clase III — análogo no yodado de la amiodarona | Vida media 13–19 h'),
          indicacoes: t(lang,
            ['FA paroxística — manutenção ritmo sinusal', 'FA persistente após cardioversão', 'Redução de hospitalização CV em FA selecionada (ATHENA Trial)'],
            ['FA paroxística — mantenimiento ritmo sinusal', 'FA persistente tras cardioversión', 'Reducción de hospitalización CV en FA seleccionada (ATHENA Trial)']
          ),
          ajusteRenal: t(lang, 'Sem ajuste formal; monitorar creatinina (inibe secreção tubular)', 'Sin ajuste formal; monitorizar creatinina (inhibe secreción tubular)'),
          efeitosAdversos: t(lang,
            ['Diarreia', 'Náuseas', 'Dor abdominal', 'Bradicardia', 'Elevação creatinina', '⚠️ Piora IC', '⚠️ QT prolongado/Torsades', '⚠️ Hepatotoxicidade rara'],
            ['Diarrea', 'Náuseas', 'Dolor abdominal', 'Bradicardia', 'Elevación creatinina', '⚠️ Empeoramiento IC', '⚠️ QT prolongado/Torsades', '⚠️ Hepatotoxicidad rara']
          ),
          monitoramento: t(lang,
            ['ECG + QTc basal e periódico', 'Verificar FA permanente (suspender se ocorrer)', 'TGO/TGP periódico', 'Creatinina', 'K⁺ e Mg²⁺', 'Sintomas de IC'],
            ['ECG + QTc basal y periódico', 'Verificar FA permanente (suspender si ocurre)', 'TGO/TGP periódico', 'Creatinina', 'K⁺ y Mg²⁺', 'Síntomas de IC']
          ),
          refs: ['ESC AF Guidelines', 'AHA/ACC/HRS AF Guidelines', 'ATHENA Trial', 'PALLAS Trial', 'Goodman & Gilman', 'Lexicomp', 'FDA/EMA label'],
          alerts
        };
      }
    }, /* fim dronedarona */

    dofetilida: {
      name: 'Dofetilida',
      category: 'cardio',
      order: 46,

      safetyFlags: {
        torsadesRisk: true,
        qtRisk: true,
        electrolyteDependent: true,
        hospitalizationRequired: true,
        renalHighRisk: true,
        highInteractionRisk: true,
        bradycardiaRisk: true
      },

      mechanism: {
        pt: 'Bloqueador seletivo e puro da corrente retificadora rápida de potássio IKr. Prolonga repolarização e período refratário atrial e ventricular de forma dose-dependente. Sem efeito hemodinâmico significativo ou inotrópico negativo. Meia-vida ~10 h.',
        es: 'Bloqueador selectivo y puro de la corriente rectificadora rápida de potasio IKr. Prolonga la repolarización y el período refractario auricular y ventricular de forma dosis-dependiente. Sin efecto hemodinámico significativo o inotrópico negativo. Vida media ~10 h.'
      },

      pharmacokinetics: {
        halfLife: '~10 horas',
        onset: 'Horas a poucos dias',
        duration: 'Dose-dependente; 12/12h'
      },

      commercialNames: {
        br: ['Tikosyn'],
        ar: ['Tikosyn', 'Dofetilida importada']
      },

      blackBoxWarnings: [
        'Pode causar arritmias ventriculares graves, principalmente Torsades de Pointes',
        'Início ou reinício DEVE ocorrer em hospital com monitorização contínua de ECG por ≥3 dias, com equipe treinada'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: true,
        message: {
          pt: 'Dose OBRIGATORIAMENTE baseada no ClCr calculado. Contraindicada se ClCr <20 mL/min.',
          es: 'Dosis OBLIGATORIAMENTE basada en ClCr calculado. Contraindicada si ClCr <20 mL/min.'
        },
        fgMaior50:  { vo: '500 mcg 12/12h', ev: null, obs: 'ClCr >60 mL/min — dose plena' },
        fg30a50:    { vo: '250 mcg 12/12h', ev: null, obs: 'ClCr 40–60 mL/min — dose reduzida' },
        fg10a30:    { vo: '125 mcg 12/12h', ev: null, obs: 'ClCr 20–39 mL/min — dose mínima' },
        fgMenor10:  { vo: null, ev: null, obs: 'ClCr <20 mL/min — CONTRAINDICADO' },
        hemodialise:{ vo: null, ev: null, obs: 'CONTRAINDICADO em hemodiálise (ClCr <20)' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 65, sexo = 'M',
                creatinina = 1.0, clcr = null,
                fc = 70, qtc = 420,
                potassio = 4.0, magnesio = 2.0,
                usoHidroclorotiazida = false,
                usoVerapamil = false,
                usoTrimetoprim = false,
                usoCimetidina = false,
                usoCetoconazol = false,
                medicamentosQT = false,
                gestante = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr (Cockcroft-Gault) se não fornecido
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 60;

        // Determinar dose por ClCr
        let doseRec, doseObs;
        if (clcrCalc > 60) {
          doseRec = '500 mcg VO 12/12h';
          doseObs = t(lang, `ClCr estimado: ${clcrCalc} mL/min — dose plena`, `ClCr estimado: ${clcrCalc} mL/min — dosis plena`);
        } else if (clcrCalc >= 40) {
          doseRec = '250 mcg VO 12/12h';
          doseObs = t(lang, `ClCr estimado: ${clcrCalc} mL/min — dose 50%`, `ClCr estimado: ${clcrCalc} mL/min — dosis 50%`);
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min (40–60): dose reduzida para 250 mcg 12/12h.`, `⚠️ ClCr ${clcrCalc} mL/min (40–60): dosis reducida a 250 mcg cada 12h.`) });
        } else if (clcrCalc >= 20) {
          doseRec = '125 mcg VO 12/12h';
          doseObs = t(lang, `ClCr estimado: ${clcrCalc} mL/min — dose mínima`, `ClCr estimado: ${clcrCalc} mL/min — dosis mínima`);
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min (20–39): dose MÍNIMA 125 mcg 12/12h. Monitorar QTc rigorosamente.`, `⛔ ClCr ${clcrCalc} mL/min (20–39): dosis MÍNIMA 125 mcg cada 12h. Monitorizar QTc rigurosamente.`) });
        } else {
          doseRec = null;
          doseObs = t(lang, `ClCr estimado: ${clcrCalc} mL/min — CONTRAINDICADO`, `ClCr estimado: ${clcrCalc} mL/min — CONTRAINDICADO`);
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: ClCr ${clcrCalc} mL/min <20 — dofetilida contraindicada.`, `⛔ CONTRAINDICADO: ClCr ${clcrCalc} mL/min <20 — dofetilida contraindicada.`) });
          contraindicado = true;
        }

        // QTc basal
        if (qtc > 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ QTc ${qtc} ms — CONTRAINDICADO (QTc >500 ms = contraindicação absoluta).`, `⛔ QTc ${qtc} ms — CONTRAINDICADO (QTc >500 ms = contraindicación absoluta).`) });
          contraindicado = true;
        } else if (qtc > 440) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ QTc ${qtc} ms >440 — CONTRAINDICADO (sem distúrbio de condução ventricular, limite é 440 ms).`, `⛔ QTc ${qtc} ms >440 — CONTRAINDICADO (sin trastorno de conducción ventricular, límite es 440 ms).`) });
          contraindicado = true;
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. NÃO iniciar dofetilida. Corrigir potássio primeiro (alvo >4.0 mEq/L).`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. NO iniciar dofetilida. Corregir potasio primero (objetivo >4,0 mEq/L).`) });
          contraindicado = true;
        } else if (potassio < 4.0) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ K⁺ ${potassio} mEq/L — manter K⁺ >4.0 mEq/L durante uso de dofetilida.`, `⚠️ K⁺ ${potassio} mEq/L — mantener K⁺ >4,0 mEq/L durante uso de dofetilida.`) });
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corrigir antes de iniciar.`, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corregir antes de iniciar.`) });
          contraindicado = true;
        }

        // FC
        if (fc < 50) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FC ${fc} bpm — bradicardia. Monitorar.`, `⚠️ FC ${fc} lpm — bradicardia. Monitorizar.`) });
        }

        // Interações absolutamente contraindicadas
        if (usoVerapamil) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Verapamil — inibe excreção renal da dofetilida (secreção tubular catiônica), aumentando muito os níveis.', '⛔ CONTRAINDICADO: Verapamilo — inhibe excreción renal de dofetilida (secreción tubular catiónica), aumentando mucho los niveles.') });
          contraindicado = true;
        }
        if (usoHidroclorotiazida) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Hidroclorotiazida — causa hipocalemia e aumenta risco de Torsades com dofetilida.', '⛔ CONTRAINDICADO: Hidroclorotiazida — causa hipocalemia y aumenta riesgo de Torsades con dofetilida.') });
          contraindicado = true;
        }
        if (usoTrimetoprim) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Trimetoprim (isolado ou sulfametoxazol/trimetoprim) — inibe secreção tubular catiônica, elevando níveis de dofetilida.', '⛔ CONTRAINDICADO: Trimetoprim (solo o sulfametoxazol/trimetoprim) — inhibe secreción tubular catiónica, elevando niveles de dofetilida.') });
          contraindicado = true;
        }
        if (usoCimetidina) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Cimetidina — inibe secreção tubular catiônica, aumentando níveis de dofetilida.', '⛔ CONTRAINDICADO: Cimetidina — inhibe secreción tubular catiónica, aumentando niveles de dofetilida.') });
          contraindicado = true;
        }
        if (usoCetoconazol) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Cetoconazol — inibe metabolismo e excreção da dofetilida.', '⛔ CONTRAINDICADO: Ketoconazol — inhibe metabolismo y excreción de dofetilida.') });
          contraindicado = true;
        }
        if (medicamentosQT) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Outros fármacos que prolongam QT (amiodarona, sotalol, macrolídeos, antipsicóticos) — CONTRAINDICADOS concomitantemente.', '⛔ Otros fármacos que prolongan QT (amiodarona, sotalol, macrólidos, antipsicóticos) — CONTRAINDICADOS concomitantemente.') });
          contraindicado = true;
        }

        // Gestante
        if (gestante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Gestante: dados limitados. Usar apenas se benefício superar claramente o risco — avaliação especializada obrigatória.', '⛔ Embarazada: datos limitados. Usar solo si beneficio supera claramente el riesgo — evaluación especializada obligatoria.') });
        }

        // Idosa/Sexo feminino
        if (sexo === 'F' || idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Sexo feminino e/ou ≥70 anos — maior risco de Torsades. Monitorar QTc com atenção redobrada.', '⚠️ Sexo femenino y/o ≥70 años — mayor riesgo de Torsades. Monitorizar QTc con atención especial.') });
        }

        // Telemetria obrigatória
        alerts.push({ tipo: 'danger', msg: t(lang, '🏥 INÍCIO/REINÍCIO HOSPITALAR OBRIGATÓRIO: telemetria contínua ≥3 dias. QTc 2–3 h após cada dose inicial. Apenas com equipe treinada em arritmias.', '🏥 INICIO/REINICIO HOSPITALARIO OBLIGATORIO: telemetría continua ≥3 días. QTc 2–3 h tras cada dosis inicial. Solo con equipo entrenado en arritmias.') });
        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Risco de Torsades de Pointes potencialmente fatal. Início e reinício apenas sob monitorização hospitalar contínua.', '📦 BLACK BOX: Riesgo de Torsades de Pointes potencialmente fatal. Inicio y reinicio solo bajo monitorización hospitalaria continua.') });

        return {
          dose: contraindicado
            ? t(lang, 'DOFETILIDA CONTRAINDICADA — ver alertas.', 'DOFETILIDA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseObs,
          clcrEstimado: `${clcrCalc} mL/min`,
          escalonamentoRenal: t(lang,
            'ClCr >60: 500 mcg 12/12h | ClCr 40–60: 250 mcg 12/12h | ClCr 20–39: 125 mcg 12/12h | ClCr <20: CONTRAINDICADO',
            'ClCr >60: 500 mcg c/12h | ClCr 40–60: 250 mcg c/12h | ClCr 20–39: 125 mcg c/12h | ClCr <20: CONTRAINDICADO'
          ),
          apresentacao: t(lang, 'Cápsulas 125 mcg / 250 mcg / 500 mcg (Tikosyn)', 'Cápsulas 125 mcg / 250 mcg / 500 mcg (Tikosyn)'),
          classe: t(lang, 'Antiarrítmico Classe III puro — bloqueador IKr | Meia-vida ~10 h', 'Antiarrítmico Clase III puro — bloqueador IKr | Vida media ~10 h'),
          indicacoes: t(lang,
            ['FA — manutenção ritmo sinusal', 'Flutter atrial', 'Conversão FA em selecionados', 'FA em cardiopatia estrutural selecionada (DIAMOND Trial)'],
            ['FA — mantenimiento ritmo sinusal', 'Flutter auricular', 'Conversión FA en seleccionados', 'FA en cardiopatía estructural seleccionada (DIAMOND Trial)']
          ),
          efeitosAdversos: t(lang,
            ['Cefaleia', 'Tontura', 'Náuseas', 'Dor torácica', 'Dispneia', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ QT prolongado grave', '⚠️ Morte súbita'],
            ['Cefalea', 'Mareos', 'Náuseas', 'Dolor torácico', 'Disnea', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ QT prolongado grave', '⚠️ Muerte súbita']
          ),
          contraindicacoesAbsolutas: t(lang,
            ['QTc >440 ms', 'ClCr <20 mL/min', 'Hipocalemia não corrigida', 'Verapamil', 'Cimetidina', 'Trimetoprim/SMX', 'Cetoconazol', 'Hidroclorotiazida'],
            ['QTc >440 ms', 'ClCr <20 mL/min', 'Hipocalemia no corregida', 'Verapamilo', 'Cimetidina', 'Trimetoprim/SMX', 'Ketoconazol', 'Hidroclorotiazida']
          ),
          monitoramento: t(lang,
            ['ECG + QTc basal', 'QTc 2–3 h após 1ª, 2ª, 3ª dose', 'Telemetria ≥3 dias (hospitalar)', 'ClCr antes e periodicamente', 'K⁺ e Mg²⁺ periódico', 'Sintomas arrítmicos'],
            ['ECG + QTc basal', 'QTc 2–3 h tras 1ª, 2ª, 3ª dosis', 'Telemetría ≥3 días (hospitalario)', 'ClCr antes y periódicamente', 'K⁺ y Mg²⁺ periódico', 'Síntomas arrítmicos']
          ),
          refs: ['FDA Tikosyn Label', 'ESC AF Guidelines', 'AHA/ACC/HRS AF Guidelines', 'DIAMOND Trial', 'Goodman & Gilman', 'Lexicomp'],
          alerts
        };
      }
    } /* fim dofetilida */

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 14 (Antiarrítmicos: adenosina · amiodarona · dronedarona · dofetilida) */

  /* =========================================================
     GRUPO 15 — Antiarrítmicos adicionais: ibutilida · flecainida · procainamida
     (#47 · #48 · #49)
     ========================================================= */
  Object.assign(window.CARDIO_DRUGS_DB, {

    ibutilida: {
      name: 'Ibutilida',
      category: 'cardio',
      order: 47,

      safetyFlags: {
        torsadesRisk: true,
        qtRisk: true,
        bradycardiaRisk: true,
        electrolyteDependent: true,
        hospitalizationRequired: true,
        infusionDrug: true,
        ivUseHighRisk: true,
        emergencyDrug: false
      },

      mechanism: {
        pt: 'Prolonga a repolarização cardíaca por aumento da corrente lenta de entrada de sódio e bloqueio de correntes de potássio (IKr), aumentando o período refratário atrial e ventricular. Efeito dose-dependente no QTc.',
        es: 'Prolonga la repolarización cardíaca por aumento de la corriente lenta de entrada de sodio y bloqueo de corrientes de potasio (IKr), aumentando el período refractario auricular y ventricular. Efecto dosis-dependiente en QTc.'
      },

      pharmacokinetics: {
        halfLife: '~6 horas',
        onset: 'Minutos após início da infusão',
        duration: 'Efeito ECG persiste 4+ horas'
      },

      commercialNames: {
        br: ['Corvert', 'Ibutilida importada'],
        ar: ['Corvert', 'Ibutilida importada']
      },

      blackBoxWarnings: [
        'Pode causar arritmias potencialmente fatais, especialmente Torsades de Pointes',
        'Exige monitorização contínua de ECG por pelo menos 4 horas após administração ou até QTc normalizar'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Sem ajuste renal padronizado. Usar cautela em DRC pelo risco global de pró-arritmia e acúmulo.',
          es: 'Sin ajuste renal estandarizado. Usar precaución en ERC por riesgo global de proarritmia y acumulación.'
        },
        fgMaior50:  { vo: null, ev: 'Dose padrão por peso (ver abaixo)', obs: 'Sem ajuste' },
        fg30a50:    { vo: null, ev: 'Dose padrão — cautela', obs: 'Monitorar pró-arritmia' },
        fg10a30:    { vo: null, ev: 'Dose padrão — cautela aumentada', obs: 'DRC moderada: risco aumentado' },
        fgMenor10:  { vo: null, ev: 'Dados limitados — cautela extrema', obs: 'Avaliar risco-benefício' },
        hemodialise:{ vo: null, ev: 'Dados muito limitados', obs: 'Evitar se possível' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 60, sexo = 'M',
                fc = 100, paSistolica = 110,
                qtc = 420, potassio = 4.0, magnesio = 2.0,
                feve = 50, icDescompensada = false,
                medicamentosQT = false,
                usoAntiarrtimicoClasseIA = false,
                usoAntiarrtimicoClasseIII = false,
                torsadesPreviaTorsades = false,
                gestante = false, lactante = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Dose por peso
        const dosePeso = peso >= 60
          ? '1 mg IV em 10 min'
          : `${(0.01 * peso).toFixed(3)} mg/kg IV em 10 min (= ${(0.01 * peso).toFixed(2)} mg total)`;
        const doseRepetir = peso >= 60
          ? 'Pode repetir 1 mg IV após 10 min se FA/flutter persistir'
          : `Pode repetir ${(0.01 * peso).toFixed(2)} mg IV após 10 min se persistir`;
        const doseTotalMax = peso >= 60 ? '2 mg total' : `${(0.02 * peso).toFixed(2)} mg total`;

        // Contraindicações absolutas
        if (qtc > 440) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QTc ${qtc} ms >440 ms basal. Risco de Torsades fatal.`, `⛔ CONTRAINDICADO: QTc ${qtc} ms >440 ms basal. Riesgo de Torsades fatal.`) });
          contraindicado = true;
        }
        if (torsadesPreviaTorsades) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: História de Torsades de Pointes.', '⛔ CONTRAINDICADO: Historia de Torsades de Pointes.') });
          contraindicado = true;
        }
        if (usoAntiarrtimicoClasseIA || usoAntiarrtimicoClasseIII) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Uso concomitante de antiarrítmicos Classe IA (quinidina, procainamida, disopiramida) ou Classe III (amiodarona, sotalol, dofetilida) — risco extremo de QT/Torsades.', '⛔ CONTRAINDICADO: Uso concomitante de antiarrítmicos Clase IA o III — riesgo extremo de QT/Torsades.') });
          contraindicado = true;
        }
        if (icDescompensada) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ IC descompensada aguda — preferir cardioversão elétrica.', '⛔ IC descompensada aguda — preferir cardioversión eléctrica.') });
          contraindicado = true;
        }

        // Hemodinâmica
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ PAS <90 mmHg — instabilidade hemodinâmica. Preferir cardioversão elétrica imediata.', '⛔ PAS <90 mmHg — inestabilidad hemodinámica. Preferir cardioversión eléctrica inmediata.') });
          contraindicado = true;
        }
        if (fc < 50) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FC ${fc} bpm — bradicardia. Monitorar rigorosamente.`, `⚠️ FC ${fc} lpm — bradicardia. Monitorizar rigurosamente.`) });
        }

        // Eletrólitos
        if (potassio < 4.0) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — CORRIGIR antes da infusão. Alvo K⁺ >4.0 mEq/L para reduzir Torsades.`, `⛔ K⁺ ${potassio} mEq/L — CORREGIR antes de infusión. Objetivo K⁺ >4,0 mEq/L para reducir Torsades.`) });
          if (potassio < 3.5) contraindicado = true;
        }
        if (magnesio < 2.0) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ Mg²⁺ ${magnesio} mg/dL — CORRIGIR antes da infusão. Alvo Mg²⁺ >2.0 mg/dL.`, `⛔ Mg²⁺ ${magnesio} mg/dL — CORREGIR antes de infusión. Objetivo Mg²⁺ >2,0 mg/dL.`) });
          if (magnesio < 1.7) contraindicado = true;
        }

        // FEVE reduzida
        if (feve < 35) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FEVE ${feve}% — disfunção grave. Maior risco de pró-arritmia e Torsades. Avaliar cardioversão elétrica como alternativa.`, `⚠️ FEVE ${feve}% — disfunción grave. Mayor riesgo de proarritmia y Torsades. Evaluar cardioversión eléctrica como alternativa.`) });
        }

        // Outros medicamentos QT
        if (medicamentosQT) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Outros fármacos que prolongam QT (macrolídeos, fluoroquinolonas, antipsicóticos, metadona) — risco aumentado de Torsades.', '⚠️ Otros fármacos que prolongan QT (macrólidos, fluoroquinolonas, antipsicóticos, metadona) — riesgo aumentado de Torsades.') });
        }

        // Sexo feminino — maior risco
        if (sexo === 'F') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Sexo feminino: maior risco de Torsades com ibutilida (~2×). Monitorar QTc com atenção redobrada.', '⚠️ Sexo femenino: mayor riesgo de Torsades con ibutilida (~2×). Monitorizar QTc con especial atención.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos — maior risco de pró-arritmia. Considerar alternativas.', '⚠️ ≥70 años — mayor riesgo de proarritmia. Considerar alternativas.') });
        }

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: dados limitados. Usar apenas sob especialista quando benefício superar risco.', '⚠️ Embarazada: datos limitados. Usar solo bajo especialista cuando beneficio supere riesgo.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lactante: dados limitados — usar com cautela em ambiente especializado.', '⚠️ Lactante: datos limitados — usar con precaución en ambiente especializado.') });
        }

        // Monitorização obrigatória
        alerts.push({ tipo: 'danger', msg: t(lang, '📋 MONITORIZAÇÃO: ECG contínuo durante infusão + 4 horas pós-dose (ou até QTc normalizar). Desfibrilador disponível obrigatório.', '📋 MONITORIZACIÓN: ECG continuo durante infusión + 4 horas post-dosis (o hasta normalizar QTc). Desfibrilador disponible obligatorio.') });
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Risco de Torsades de Pointes potencialmente fatal. Uso exclusivamente hospitalar monitorizado.', '📦 BLACK BOX: Riesgo de Torsades de Pointes potencialmente fatal. Uso exclusivamente hospitalario monitorizado.') });

        return {
          dose: contraindicado
            ? t(lang, 'IBUTILIDA CONTRAINDICADA — ver alertas.', 'IBUTILIDA CONTRAINDICADA — ver alertas.')
            : dosePeso,
          doseRepetir: contraindicado ? null : doseRepetir,
          doseTotalMax: contraindicado ? null : doseTotalMax,
          esquemaDose: t(lang,
            '≥60 kg: 1 mg IV em 10 min | <60 kg: 0,01 mg/kg IV em 10 min. Repetir 1× se necessário após 10 min.',
            '≥60 kg: 1 mg IV en 10 min | <60 kg: 0,01 mg/kg IV en 10 min. Repetir 1× si necesario tras 10 min.'
          ),
          apresentacao: t(lang, 'Ampola IV 1 mg/10 mL (0,1 mg/mL)', 'Ampolla IV 1 mg/10 mL (0,1 mg/mL)'),
          classe: t(lang, 'Antiarrítmico Classe III IV | Bloqueador IKr + corrente lenta Na⁺ | t½ ~6 h', 'Antiarrítmico Clase III IV | Bloqueador IKr + corriente lenta Na⁺ | t½ ~6 h'),
          indicacoes: t(lang,
            ['FA recente (<48 h ou anticoagulada) — conversão farmacológica', 'Flutter atrial — alta taxa de conversão (~60–70%)', 'Flutter pós-operatório selecionado'],
            ['FA reciente (<48 h o anticoagulada) — conversión farmacológica', 'Flutter auricular — alta tasa de conversión (~60–70%)', 'Flutter postoperatorio seleccionado']
          ),
          ajusteRenal: t(lang, 'Sem ajuste formal; cautela em DRC', 'Sin ajuste formal; precaución en ERC'),
          efeitosAdversos: t(lang,
            ['Cefaleia', 'Náuseas', 'Tontura', 'Palpitações', 'Extrassístoles', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ QT prolongado grave', '⚠️ Morte súbita arrítmica'],
            ['Cefalea', 'Náuseas', 'Mareos', 'Palpitaciones', 'Extrasístoles', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ QT prolongado grave', '⚠️ Muerte súbita arrítmica']
          ),
          contraindicacoes: t(lang,
            ['QTc >440 ms basal', 'Torsades de Pointes prévia', 'Hipocalemia/hipomagnesemia não corrigidas', 'Antiarrítmicos Classe IA ou III concomitantes', 'IC descompensada', 'Instabilidade hemodinâmica (PAS <90)'],
            ['QTc >440 ms basal', 'Torsades de Pointes previa', 'Hipocalemia/hipomagnesemia no corregidas', 'Antiarrítmicos Clase IA o III concomitantes', 'IC descompensada', 'Inestabilidad hemodinámica (PAS <90)']
          ),
          monitoramento: t(lang,
            ['ECG contínuo durante e ≥4 h após', 'QTc basal + seriado', 'K⁺ e Mg²⁺ corrigidos antes', 'PA + FC', 'Desfibrilador à beira-leito', 'Vigiar Torsades de Pointes'],
            ['ECG continuo durante y ≥4 h tras', 'QTc basal + seriado', 'K⁺ y Mg²⁺ corregidos antes', 'PA + FC', 'Desfibrilador a la cabecera', 'Vigilar Torsades de Pointes']
          ),
          refs: ['ESC AF Guidelines', 'AHA/ACC/HRS AF Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA Corvert label'],
          alerts
        };
      }
    }, /* fim ibutilida */

    flecainida: {
      name: 'Flecainida',
      category: 'cardio',
      order: 48,

      safetyFlags: {
        bradycardiaRisk: true,
        avBlockRisk: true,
        ventricularProarrhythmiaRisk: true,
        structuralHeartDiseaseContraindication: true,
        qrsWideningRisk: true,
        highInteractionRisk: true,
        renalHighRisk: true,
        hepaticToxicityRisk: false
      },

      mechanism: {
        pt: 'Bloqueia fortemente os canais rápidos de sódio (Classe IC), reduzindo a velocidade de condução no miocárdio e sistema His-Purkinje. Prolonga QRS e PR sem prolongar significativamente o QTc. Pode organizar FA em flutter com condução AV 1:1 se usada sem bloqueio AV concomitante.',
        es: 'Bloquea fuertemente los canales rápidos de sodio (Clase IC), reduciendo la velocidad de conducción en miocardio y sistema His-Purkinje. Prolonga QRS y PR sin prolongar significativamente el QTc. Puede organizar FA en flutter con conducción AV 1:1 si se usa sin bloqueo AV concomitante.'
      },

      pharmacokinetics: {
        halfLife: '12–27 horas',
        onset: 'VO: 1–3 horas',
        duration: 'Dose 12/12h'
      },

      commercialNames: {
        br: ['Tambocor', 'Flecainida genérica'],
        ar: ['Tambocor', 'Flecainida genérica']
      },

      blackBoxWarnings: [
        'Aumento de mortalidade em pacientes com arritmias ventriculares após IAM ou cardiopatia estrutural significativa (Estudo CAST)'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: true,
        message: {
          pt: 'Reduzir dose em DRC significativa. Monitorar QRS e sinais de toxicidade. Excreção 30% renal inalterada.',
          es: 'Reducir dosis en ERC significativa. Monitorizar QRS y signos de toxicidad. Excreción 30% renal inalterada.'
        },
        fgMaior50:  { vo: '50–150 mg 12/12h', ev: null, obs: 'Dose plena; iniciar com 50 mg' },
        fg30a50:    { vo: '50–100 mg 12/12h', ev: null, obs: 'Reduzir dose máxima; monitorar QRS' },
        fg10a30:    { vo: '50 mg 12/12h ou 100 mg/dia', ev: null, obs: 'Cautela; acúmulo possível' },
        fgMenor10:  { vo: '50 mg/dia — dados limitados', ev: null, obs: 'Evitar se possível; risco de toxicidade' },
        hemodialise:{ vo: '50 mg/dia — dados muito limitados', ev: null, obs: 'Não dialisável significativamente; ajuste empírico' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 55, sexo = 'M',
                fc = 80, paSistolica = 120,
                qrs = 90, pr = 160, feve = 60,
                doencaCoronariana = false, iamPrevio = false,
                cardiopatiaEstrutural = false, icFEr = false,
                clcr = null, creatinina = 1.0,
                funcaoHepatica = 'normal',
                usoBloqueadorAV = false,
                usoAmiodarona = false,
                usoDigoxina = false,
                gestante = false, lactante = false,
                pillInPocket = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr se não fornecido
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Contraindicações absolutas estruturais (CAST)
        if (iamPrevio) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: IAM prévio — aumento de mortalidade demonstrado no CAST Trial. Não usar.', '⛔ CONTRAINDICADO: IAM previo — aumento de mortalidad demostrado en CAST Trial. No usar.') });
          contraindicado = true;
        }
        if (doencaCoronariana) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Doença coronariana significativa — risco de pró-arritmia ventricular fatal.', '⛔ CONTRAINDICADO: Enfermedad coronaria significativa — riesgo de proarritmia ventricular fatal.') });
          contraindicado = true;
        }
        if (cardiopatiaEstrutural) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Cardiopatia estrutural relevante — pró-arritmia ventricular aumentada.', '⛔ CONTRAINDICADO: Cardiopatía estructural relevante — proarritmia ventricular aumentada.') });
          contraindicado = true;
        }
        if (icFEr || feve < 40) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — flecainida deprime contratilidade e aumenta mortalidade.`, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — flecainida deprime contractilidad y aumenta mortalidad.`) });
          contraindicado = true;
        }

        // ECG — QRS largo
        if (qrs > 120) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QRS ${qrs} ms >120 ms — bloqueio de ramo significativo sem avaliação especializada.`, `⛔ CONTRAINDICADO: QRS ${qrs} ms >120 ms — bloqueo de rama significativo sin evaluación especializada.`) });
          contraindicado = true;
        } else if (qrs > 100) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms alargado basal — monitorar alargamento adicional (>25% do basal = sinal de toxicidade/suspensão).`, `⚠️ QRS ${qrs} ms ensanchado basal — monitorizar ensanchamiento adicional (>25% del basal = señal de toxicidad/suspensión).`) });
        }

        // PR
        if (pr > 200) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ PR ${pr} ms alargado — flecainida pode prolongar mais. Monitorar bloqueio AV.`, `⚠️ PR ${pr} ms prolongado — flecainida puede prolongar más. Monitorizar bloqueo AV.`) });
        }

        // Hemodinâmica
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Hipotensão grave (PAS <90) — contraindicado.', '⛔ Hipotensión grave (PAS <90) — contraindicado.') });
          contraindicado = true;
        }
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        }

        // Determinar dose por ClCr
        let doseRec;
        if (clcrCalc > 50) {
          doseRec = '50 mg VO 12/12h — titular até 150 mg 12/12h conforme resposta e ECG';
        } else if (clcrCalc >= 30) {
          doseRec = '50 mg VO 12/12h (máx 100 mg 12/12h) — ClCr reduzido';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min: dose máxima 100 mg 12/12h. Monitorar QRS e sinais de toxicidade.`, `⚠️ ClCr ${clcrCalc} mL/min: dosis máxima 100 mg c/12h. Monitorizar QRS y signos de toxicidad.`) });
        } else {
          doseRec = '50 mg/dia — DRC significativa. Cautela extrema.';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC grave. Risco de acúmulo e toxicidade. Evitar se possível.`, `⛔ ClCr ${clcrCalc} mL/min — ERC grave. Riesgo de acumulación y toxicidad. Evitar si es posible.`) });
        }

        // Função hepática
        if (funcaoHepatica === 'grave') {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Insuficiência hepática grave — risco de acúmulo. Evitar ou reduzir dose com monitorização intensiva.', '⛔ Insuficiencia hepática grave — riesgo de acumulación. Evitar o reducir dosis con monitorización intensiva.') });
        } else if (funcaoHepatica === 'moderada') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Insuficiência hepática moderada — reduzir dose e monitorar QRS.', '⚠️ Insuficiencia hepática moderada — reducir dosis y monitorizar QRS.') });
        }

        // Pill-in-pocket
        if (pillInPocket && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Estratégia pill-in-the-pocket: 200–300 mg dose única supervisionada. Associar bloqueador AV (betabloqueador ou verapamil/diltiazem) conforme protocolo para prevenir flutter 1:1. Apenas após teste hospitalar bem tolerado.', '⚠️ Estrategia pill-in-the-pocket: 200–300 mg dosis única supervisada. Asociar bloqueador AV según protocolo para prevenir flutter 1:1. Solo tras prueba hospitalaria bien tolerada.') });
        }

        // Risco flutter 1:1 sem bloqueio AV
        if (!usoBloqueadorAV && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ FA tratada com flecainida: considerar bloqueador AV concomitante (betabloqueador, verapamil ou diltiazem) para prevenir flutter atrial com condução AV 1:1 (FC >200 bpm).', '⚠️ FA tratada con flecainida: considerar bloqueador AV concomitante (betabloqueante, verapamilo o diltiazem) para prevenir flutter auricular con conducción AV 1:1 (FC >200 lpm).') });
        }

        // Interações
        if (usoAmiodarona) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Amiodarona: inibe CYP2D6 e aumenta significativamente os níveis de flecainida — risco de toxicidade. Reduzir dose de flecainida.', '🔴 Amiodarona: inhibe CYP2D6 y aumenta significativamente los niveles de flecainida — riesgo de toxicidad. Reducir dosis de flecainida.') });
        }
        if (usoDigoxina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Digoxina: flecainida pode aumentar nível sérico da digoxina. Monitorar nível.', '⚠️ Digoxina: flecainida puede aumentar nivel sérico de digoxina. Monitorizar nivel.') });
        }

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: pode ser usada em arritmias selecionadas sob especialista quando benefício superar risco — dados limitados.', '⚠️ Embarazada: puede usarse en arritmias seleccionadas bajo especialista cuando beneficio supere riesgo — datos limitados.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lactante: monitorar lactente para sonolência, má alimentação ou arritmias.', '⚠️ Lactante: monitorizar lactante por somnolencia, mala alimentación o arritmias.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: maior risco de acúmulo, distúrbios de condução e cardiopatia estrutural oculta. Exigir ECG e avaliação cardíaca prévia.', '⚠️ ≥70 años: mayor riesgo de acumulación, trastornos de conducción y cardiopatía estructural oculta. Exigir ECG y evaluación cardíaca previa.') });
        }

        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX (CAST Trial): flecainida aumenta mortalidade em cardiopatia estrutural/pós-IAM. Uso RESTRITO a FA paroxística/TSV sem cardiopatia estrutural.', '📦 BLACK BOX (CAST Trial): flecainida aumenta mortalidad en cardiopatía estructural/post-IAM. Uso RESTRINGIDO a FA paroxística/TSV sin cardiopatía estructural.') });

        return {
          dose: contraindicado
            ? t(lang, 'FLECAINIDA CONTRAINDICADA — ver alertas.', 'FLECAINIDA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseMax: t(lang, '300 mg/dia (150 mg 12/12h)', '300 mg/día (150 mg c/12h)'),
          dosePillInPocket: pillInPocket && !contraindicado
            ? t(lang, '200–300 mg dose única (supervisionada, com bloqueador AV)', '200–300 mg dosis única (supervisada, con bloqueador AV)')
            : null,
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Comprimidos 50 mg / 100 mg (Tambocor)', 'Comprimidos 50 mg / 100 mg (Tambocor)'),
          classe: t(lang, 'Antiarrítmico Classe IC — bloqueador potente canal Na⁺ | t½ 12–27 h', 'Antiarrítmico Clase IC — bloqueador potente canal Na⁺ | t½ 12–27 h'),
          indicacoes: t(lang,
            ['FA paroxística SEM cardiopatia estrutural', 'Flutter atrial selecionado (SEM cardiopatia estrutural)', 'Manutenção ritmo sinusal', 'Pill-in-the-pocket supervisionada', 'TSV paroxística', 'Arritmias ventriculares idiopáticas selecionadas'],
            ['FA paroxística SIN cardiopatía estructural', 'Flutter auricular seleccionado (SIN cardiopatía estructural)', 'Mantenimiento ritmo sinusal', 'Pill-in-the-pocket supervisada', 'TSV paroxística', 'Arritmias ventriculares idiopáticas seleccionadas']
          ),
          efeitosAdversos: t(lang,
            ['Tontura', 'Visão turva/diplopia', 'Cefaleia', 'Náuseas', 'Fadiga', 'Palpitações', '⚠️ TV/FV', '⚠️ Flutter 1:1', '⚠️ Bloqueio AV', '⚠️ Alargamento extremo QRS', '⚠️ Morte súbita em cardiopatia'],
            ['Mareos', 'Visión borrosa/diplopía', 'Cefalea', 'Náuseas', 'Fatiga', 'Palpitaciones', '⚠️ TV/FV', '⚠️ Flutter 1:1', '⚠️ Bloqueo AV', '⚠️ Ensanchamiento extremo QRS', '⚠️ Muerte súbita en cardiopatía']
          ),
          monitoramento: t(lang,
            ['ECG basal (QRS + PR)', 'FEVE obrigatória antes de iniciar', 'ECG após início e titulação', 'Alerta: QRS >25% do basal → reduzir/suspender', 'ClCr basal e periódico', 'K⁺ e Mg²⁺', 'Sintomas: síncope, dispneia, palpitações'],
            ['ECG basal (QRS + PR)', 'FEVI obligatoria antes de iniciar', 'ECG tras inicio y titulación', 'Alerta: QRS >25% del basal → reducir/suspender', 'ClCr basal y periódico', 'K⁺ y Mg²⁺', 'Síntomas: síncope, disnea, palpitaciones']
          ),
          refs: ['CAST Trial', 'ESC AF Guidelines', 'AHA/ACC/HRS AF Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA label'],
          alerts
        };
      }
    }, /* fim flecainida */

    procainamida: {
      name: 'Procainamida',
      category: 'cardio',
      order: 49,

      safetyFlags: {
        torsadesRisk: true,
        qtRisk: true,
        qrsWideningRisk: true,
        bradycardiaRisk: true,
        hypotensionRisk: true,
        electrolyteDependent: true,
        hospitalizationRequired: true,
        infusionDrug: true,
        ivUseHighRisk: true,
        preExcitationRisk: true,
        emergencyDrug: true,
        autoimmunityRisk: true
      },

      mechanism: {
        pt: 'Bloqueia canais rápidos de sódio (Classe IA) e prolonga a repolarização por bloqueio de canais de potássio. Reduz velocidade de condução e aumenta período refratário em átrios, ventrículos e sistema His-Purkinje. Alarga QRS, QT e PR. Metabólito ativo NAPA (N-acetilprocainamida) contribui para ação Classe III.',
        es: 'Bloquea canales rápidos de sodio (Clase IA) y prolonga la repolarización por bloqueo de canales de potasio. Reduce velocidad de conducción y aumenta período refractario en aurículas, ventrículos y sistema His-Purkinje. Ensancha QRS, QT y PR. Metabolito activo NAPA (N-acetilprocainamida) contribuye a acción Clase III.'
      },

      pharmacokinetics: {
        halfLife: '3–5 horas (procainamida) | ~6–10 h (NAPA)',
        onset: 'IV: minutos',
        duration: 'Infusão contínua necessária para manutenção'
      },

      commercialNames: {
        br: ['Pronestyl', 'Procainamida importada'],
        ar: ['Procainamida genérica']
      },

      blackBoxWarnings: [
        'Risco de Torsades de Pointes e arritmias ventriculares fatais',
        'Uso crônico associado a lúpus induzido por droga (até 30% dos pacientes)',
        'Agranulocitose rara mas potencialmente fatal com uso oral crônico'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: true,
        message: {
          pt: 'Procainamida e NAPA acumulam em DRC. Reduzir taxa de infusão e monitorar nível sérico.',
          es: 'Procainamida y NAPA se acumulan en ERC. Reducir tasa de infusión y monitorizar nivel sérico.'
        },
        fgMaior50:  { vo: null, ev: 'Carga 15–18 mg/kg a 20–50 mg/min → Infusão 1–4 mg/min', obs: 'Protocolo padrão' },
        fg30a50:    { vo: null, ev: 'Carga 12–15 mg/kg a 20 mg/min → Infusão 1–2 mg/min', obs: 'Reduzir carga e manutenção' },
        fg10a30:    { vo: null, ev: 'Carga 10–12 mg/kg a 20 mg/min → Infusão 0,5–1 mg/min', obs: 'Monitorar nível NAPA e QRS/QT' },
        fgMenor10:  { vo: null, ev: 'Usar com extrema cautela — dose muito reduzida, titulada', obs: 'Risco alto de acúmulo e toxicidade' },
        hemodialise:{ vo: null, ev: 'Dados limitados — evitar ou usar com monitorização intensiva', obs: 'NAPA não dialisável eficientemente' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 60, sexo = 'M',
                fc = 150, paSistolica = 110,
                qtc = 420, qrs = 95,
                potassio = 4.0, magnesio = 2.0,
                clcr = null, creatinina = 1.0,
                feve = 50, icDescompensada = false,
                lupusAtivo = false, torsadesPrevia = false,
                medicamentosQT = false,
                indicacao = 'TV', gestante = false,
                usoDigoxina = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr se não fornecido
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Dose de carga por peso
        const doseMin = (15 * peso).toFixed(0);
        const doseMax = (18 * peso).toFixed(0);

        // Contraindicações absolutas
        if (qtc > 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — risco extremo de Torsades.`, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — riesgo extremo de Torsades.`) });
          contraindicado = true;
        } else if (qtc > 440) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QTc ${qtc} ms — elevado. Monitorar rigorosamente. Suspender se QTc >500 ms ou QRS alarga >50%.`, `⚠️ QTc ${qtc} ms — elevado. Monitorizar rigurosamente. Suspender si QTc >500 ms o QRS ensancha >50%.`) });
        }
        if (torsadesPrevias) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Torsades de Pointes prévia.', '⛔ CONTRAINDICADO: Torsades de Pointes previa.') });
          contraindicado = true;
        }
        if (lupusAtivo) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Lúpus eritematoso sistêmico ativo — procainamida agrava lúpus.', '⛔ CONTRAINDICADO: Lupus eritematoso sistémico activo — procainamida agrava lupus.') });
          contraindicado = true;
        }

        // Hemodinâmica
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ PAS ${paSistolica} mmHg — hipotensão. Risco de piora com carga IV rápida. Reduzir velocidade de infusão ou preferir cardioversão elétrica.`, `⛔ PAS ${paSistolica} mmHg — hipotensión. Riesgo de empeoramiento con carga IV rápida. Reducir velocidad de infusión o preferir cardioversión eléctrica.`) });
          contraindicado = true;
        }
        if (icDescompensada) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ IC descompensada — procainamida tem efeito inotrópico negativo. Preferir cardioversão elétrica.', '⛔ IC descompensada — procainamida tiene efecto inotrópico negativo. Preferir cardioversión eléctrica.') });
          contraindicado = true;
        }

        // QRS
        if (qrs > 120) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms alargado — monitorar. Suspender se QRS alargar >50% do basal.`, `⚠️ QRS ${qrs} ms ensanchado — monitorizar. Suspender si QRS ensancha >50% del basal.`) });
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir antes da procainamida. Risco de Torsades.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir antes de procainamida. Riesgo de Torsades.`) });
          contraindicado = true;
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corrigir antes.`, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corregir antes.`) });
        }

        // Renal
        let doseInfusao = '1–4 mg/min IV contínuo';
        if (clcrCalc < 30) {
          doseInfusao = '0,5–1 mg/min IV contínuo (DRC)';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC significativa. Reduzir carga e manutenção. Monitorar nível sérico de procainamida e NAPA.`, `⛔ ClCr ${clcrCalc} mL/min — ERC significativa. Reducir carga y mantenimiento. Monitorizar nivel sérico de procainamida y NAPA.`) });
        } else if (clcrCalc < 50) {
          doseInfusao = '1–2 mg/min IV contínuo (DRC moderada)';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min — reduzir velocidade de infusão de manutenção.`, `⚠️ ClCr ${clcrCalc} mL/min — reducir velocidad de infusión de mantenimiento.`) });
        }

        // WPW / Pré-excitação
        if (indicacao === 'WPW' || indicacao === 'FA-preexcitacao') {
          alerts.push({ tipo: 'info', msg: t(lang, '✅ Indicação válida: FA/flutter com pré-excitação (WPW) — procainamida bloqueia a via acessória. Fármaco de escolha neste contexto (NÃO usar adenosina, verapamil ou digoxina).', '✅ Indicación válida: FA/flutter con preexcitación (WPW) — procainamida bloquea la vía accesoria. Fármaco de elección en este contexto (NO usar adenosina, verapamilo o digoxina).') });
        }

        // Medicamentos QT
        if (medicamentosQT) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Outros fármacos que prolongam QT concomitantes — risco aditivo de Torsades.', '⛔ Otros fármacos que prolongan QT concomitantes — riesgo aditivo de Torsades.') });
        }
        if (usoDigoxina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Digoxina: procainamida pode aumentar toxicidade da digoxina. Monitorar.', '⚠️ Digoxina: procainamida puede aumentar toxicidad de digoxina. Monitorizar.') });
        }

        // Gestante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: usar apenas em arritmia potencialmente fatal sem alternativa — dados limitados.', '⚠️ Embarazada: usar solo en arritmia potencialmente fatal sin alternativa — datos limitados.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: maior risco de hipotensão, acúmulo de NAPA e pró-arritmia.', '⚠️ ≥70 años: mayor riesgo de hipotensión, acumulación de NAPA y proarritmia.') });
        }

        // FC rápida
        if (fc > 180) {
          alerts.push({ tipo: 'info', msg: t(lang, `ℹ️ FC ${fc} bpm — taquicardia de QRS largo. Suspender infusão se QRS alargar >50%, hipotensão ou conversão.`, `ℹ️ FC ${fc} lpm — taquicardia de QRS ancho. Suspender infusión si QRS ensancha >50%, hipotensión o conversión.`) });
        }

        // Monitorização + Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📋 SUSPENDER se: QRS alargar >50%, QTc >500 ms, hipotensão grave ou conversão da arritmia.', '📋 SUSPENDER si: QRS ensancha >50%, QTc >500 ms, hipotensión grave o conversión de la arritmia.') });
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Risco de Torsades. Lúpus induzido por droga (uso crônico). Agranulocitose (uso crônico oral).', '📦 BLACK BOX: Riesgo de Torsades. Lupus inducido por fármaco (uso crónico). Agranulocitosis (uso crónico oral).') });

        return {
          dose: contraindicado
            ? t(lang, 'PROCAINAMIDA CONTRAINDICADA — ver alertas.', 'PROCAINAMIDA CONTRAINDICADA — ver alertas.')
            : t(lang, `Carga: ${doseMin}–${doseMax} mg IV a 20–50 mg/min (máx 17 mg/kg)`, `Carga: ${doseMin}–${doseMax} mg IV a 20–50 mg/min (máx 17 mg/kg)`),
          doseCarga: contraindicado ? null : t(lang, `${doseMin}–${doseMax} mg IV (15–18 mg/kg) a 20–50 mg/min`, `${doseMin}–${doseMax} mg IV (15–18 mg/kg) a 20–50 mg/min`),
          doseInfusao: contraindicado ? null : doseInfusao,
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Ampola IV | Comprimidos VO (mercados limitados)', 'Ampolla IV | Comprimidos VO (mercados limitados)'),
          classe: t(lang, 'Antiarrítmico Classe IA | Bloqueador Na⁺ + K⁺ | t½ 3–5 h (NAPA 6–10 h)', 'Antiarrítmico Clase IA | Bloqueador Na⁺ + K⁺ | t½ 3–5 h (NAPA 6–10 h)'),
          indicacoes: t(lang,
            ['TV estável de QRS largo', 'Taquicardia QRS largo indiferenciada', 'FA/flutter com pré-excitação (WPW) — fármaco de escolha', 'Arritmias ventriculares refratárias'],
            ['TV estable de QRS ancho', 'Taquicardia QRS ancho indiferenciada', 'FA/flutter con preexcitación (WPW) — fármaco de elección', 'Arritmias ventriculares refractarias']
          ),
          ajusteRenal: t(lang,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? 'dose padrão' : clcrCalc >= 30 ? 'infusão reduzida (1–2 mg/min)' : 'redução importante (0,5–1 mg/min)'}`,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? 'dosis estándar' : clcrCalc >= 30 ? 'infusión reducida (1–2 mg/min)' : 'reducción importante (0,5–1 mg/min)'}`
          ),
          efeitosAdversos: t(lang,
            ['Hipotensão durante carga IV', 'Náuseas', 'Tontura', 'Rubor', 'Bradicardia', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ Lúpus induzido (uso crônico)', '⚠️ Agranulocitose (uso crônico oral)', '⚠️ Choque'],
            ['Hipotensión durante carga IV', 'Náuseas', 'Mareos', 'Rubor', 'Bradicardia', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ Lupus inducido (uso crónico)', '⚠️ Agranulocitosis (uso crónico oral)', '⚠️ Shock']
          ),
          monitoramento: t(lang,
            ['ECG contínuo (QRS + QTc + PR)', 'PA a cada 5 min durante carga', 'Suspender se QRS >50% ou QTc >500 ms', 'K⁺ e Mg²⁺ antes e durante', 'Nível sérico procainamida + NAPA (DRC)', 'ANC (uso crônico)', 'ANA/anti-DNA (lúpus)'],
            ['ECG continuo (QRS + QTc + PR)', 'PA cada 5 min durante carga', 'Suspender si QRS >50% o QTc >500 ms', 'K⁺ y Mg²⁺ antes y durante', 'Nivel sérico procainamida + NAPA (ERC)', 'ANC (uso crónico)', 'ANA/anti-DNA (lupus)']
          ),
          refs: ['AHA ACLS Guidelines', 'ESC VA Guidelines', 'AHA/ACC/HRS AF Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA label'],
          alerts
        };
      }
    } /* fim procainamida */

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 15 (Antiarrítmicos adicionais: ibutilida · flecainida · procainamida) */

  /* =========================================================
     GRUPO 16 — Antiarrítmicos: disopiramida · lidocaína · mexiletina
     (#50 · #51 · #52)
     ========================================================= */
  Object.assign(window.CARDIO_DRUGS_DB, {

    disopiramida: {
      name: 'Disopiramida',
      category: 'cardio',
      order: 50,

      safetyFlags: {
        torsadesRisk: true,
        qtRisk: true,
        qrsWideningRisk: true,
        heartFailureRisk: true,
        anticholinergicRisk: true,
        ventricularProarrhythmiaRisk: true,
        bradycardiaRisk: true,
        avBlockRisk: true
      },

      mechanism: {
        pt: 'Bloqueia canais rápidos de sódio (Classe IA) e prolonga a repolarização por bloqueio de canais de potássio. Possui forte atividade anticolinérgica (vagolítica) e importante efeito inotrópico negativo. Alarga QRS, QT e PR. Útil em CMH obstrutiva pela redução da contratilidade e do gradiente de saída do VE.',
        es: 'Bloquea canales rápidos de sodio (Clase IA) y prolonga la repolarización por bloqueo de canales de potasio. Posee fuerte actividad anticolinérgica (vagolítica) e importante efecto inotrópico negativo. Ensancha QRS, QT y PR. Útil en MCH obstructiva por reducción de la contractilidad y del gradiente de salida del VI.'
      },

      pharmacokinetics: {
        halfLife: '6–8 horas',
        onset: 'VO: 30–60 min',
        duration: 'Dose 6/6h (IR) ou 12/12h (LP)'
      },

      commercialNames: {
        br: ['Norpace', 'Norpace CR (LP)'],
        ar: ['Norpace', 'Rythmodan']
      },

      blackBoxWarnings: [
        'Risco de pró-arritmia ventricular e Torsades de Pointes',
        'Pode piorar ou precipitar insuficiência cardíaca — forte efeito inotrópico negativo',
        'Contraindicado em IC-FEr significativa'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: true,
        message: {
          pt: 'Excreção predominantemente renal. Reduzir dose em DRC para evitar acúmulo e toxicidade.',
          es: 'Excreción predominantemente renal. Reducir dosis en ERC para evitar acumulación y toxicidad.'
        },
        fgMaior50:  { vo: '100–150 mg 6/6h (IR) ou LP 12/12h', ev: null, obs: 'Dose plena' },
        fg30a50:    { vo: '100 mg 8/8h', ev: null, obs: 'Intervalo estendido' },
        fg10a30:    { vo: '100 mg 12/12h', ev: null, obs: 'Redução significativa' },
        fgMenor10:  { vo: '100 mg/dia — dados limitados', ev: null, obs: 'Evitar; risco alto de acúmulo' },
        hemodialise:{ vo: '100 mg/dia pós-diálise — dados muito limitados', ev: null, obs: 'Parcialmente dialisável' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 60, sexo = 'M',
                fc = 75, paSistolica = 120,
                qtc = 420, qrs = 90,
                potassio = 4.0, magnesio = 2.0,
                clcr = null, creatinina = 1.0,
                feve = 55, icFEr = false,
                glaucoma = false, retencaoUrinaria = false,
                cardiopatiaEstrutural = false,
                indicacao = 'FA', cmhObstrutiva = false,
                medicamentosQT = false, gestante = false,
                usoAmiodarona = false, usoSotalol = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr se não fornecido
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Contraindicações absolutas
        if (icFEr || feve < 40) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — disopiramida tem forte efeito inotrópico negativo e pode precipitar choque cardiogênico.`, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — disopiramida tiene fuerte efecto inotrópico negativo y puede precipitar shock cardiogénico.`) });
          contraindicado = true;
        }
        if (glaucoma) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Glaucoma de ângulo fechado — efeito anticolinérgico potente pode precipitar crise aguda de glaucoma.', '⛔ CONTRAINDICADO: Glaucoma de ángulo cerrado — efecto anticolinérgico potente puede precipitar crisis aguda de glaucoma.') });
          contraindicado = true;
        }
        if (retencaoUrinaria) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Retenção urinária prévia — efeito anticolinérgico potente aumenta muito o risco.', '⛔ CONTRAINDICADO: Retención urinaria previa — efecto anticolinérgico potente aumenta mucho el riesgo.') });
          contraindicado = true;
        }

        // QTc
        if (qtc > 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — risco extremo de Torsades.`, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — riesgo extremo de Torsades.`) });
          contraindicado = true;
        } else if (qtc > 440) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QTc ${qtc} ms — elevado. Monitorar rigorosamente; suspender se QTc >500 ms.`, `⚠️ QTc ${qtc} ms — elevado. Monitorizar rigurosamente; suspender si QTc >500 ms.`) });
        }

        // QRS
        if (qrs > 120) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms alargado. Monitorar; suspender se alargamento >50% do basal.`, `⚠️ QRS ${qrs} ms ensanchado. Monitorizar; suspender si ensanchamiento >50% del basal.`) });
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir antes; risco de Torsades.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir antes; riesgo de Torsades.`) });
          contraindicado = true;
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Repor antes de iniciar.`, `⚠️ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Reponer antes de iniciar.`) });
        }

        // FC e hemodinâmica
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        }
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Hipotensão grave (PAS <90 mmHg) — contraindicado (inotrópico negativo potente).', '⛔ Hipotensión grave (PAS <90 mmHg) — contraindicado (inotrópico negativo potente).') });
          contraindicado = true;
        }

        // Indicação especial CMH
        if (cmhObstrutiva) {
          alerts.push({ tipo: 'info', msg: t(lang, '✅ CMH obstrutiva: disopiramida é uma das poucas opções antiarrítmicas que pode reduzir gradiente de saída do VE por efeito inotrópico negativo — uso especializado.', '✅ MCH obstructiva: disopiramida es una de las pocas opciones antiarrítmicas que puede reducir gradiente de salida del VI por efecto inotrópico negativo — uso especializado.') });
        }

        // Renal
        let doseRec;
        if (clcrCalc > 50) {
          doseRec = '100–150 mg VO 6/6h (IR) ou formulação LP 12/12h';
        } else if (clcrCalc >= 30) {
          doseRec = '100 mg VO 8/8h — ClCr reduzido';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min: intervalo estendido para 8/8h.`, `⚠️ ClCr ${clcrCalc} mL/min: intervalo extendido a cada 8h.`) });
        } else if (clcrCalc >= 10) {
          doseRec = '100 mg VO 12/12h — DRC moderada/grave';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC significativa. Dose reduzida para 100 mg 12/12h. Monitorar toxicidade.`, `⛔ ClCr ${clcrCalc} mL/min — ERC significativa. Dosis reducida a 100 mg c/12h. Monitorizar toxicidad.`) });
        } else {
          doseRec = '100 mg/dia — DRC grave; evitar se possível';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC grave. Evitar disopiramida; risco alto de acúmulo.`, `⛔ ClCr ${clcrCalc} mL/min — ERC grave. Evitar disopiramida; riesgo alto de acumulación.`) });
        }

        // Interações QT
        if (usoAmiodarona) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Amiodarona + disopiramida — risco extremo de Torsades por QT prolongado aditivo.', '⛔ CONTRAINDICADO: Amiodarona + disopiramida — riesgo extremo de Torsades por QT prolongado aditivo.') });
          contraindicado = true;
        }
        if (usoSotalol) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Sotalol + disopiramida — risco extremo de Torsades.', '⛔ CONTRAINDICADO: Sotalol + disopiramida — riesgo extremo de Torsades.') });
          contraindicado = true;
        }
        if (medicamentosQT) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Outros fármacos que prolongam QT — risco aditivo de Torsades. Evitar combinação.', '⛔ Otros fármacos que prolongan QT — riesgo aditivo de Torsades. Evitar combinación.') });
        }

        // Idoso — anticolinérgico
        if (idade >= 65) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ ≥65 anos: efeitos anticolinérgicos muito aumentados — alto risco de retenção urinária, delirium, hipotensão e quedas. Evitar em idosos (Critérios Beers).', '⛔ ≥65 años: efectos anticolinérgicos muy aumentados — alto riesgo de retención urinaria, delirium, hipotensión y caídas. Evitar en ancianos (Criterios Beers).') });
        }

        // Gestante
        if (gestante) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Gestante: pode induzir contrações uterinas. Evitar. Usar apenas se arritmia grave potencialmente fatal sem alternativa.', '⛔ Embarazada: puede inducir contracciones uterinas. Evitar. Usar solo si arritmia grave potencialmente fatal sin alternativa.') });
        }

        // Efeitos anticolinérgicos universais
        alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Efeitos anticolinérgicos potentes: boca seca, constipação, retenção urinária, visão borrada. Alertar paciente. Monitorar em hiperplasia prostática.', '⚠️ Efectos anticolinérgicos potentes: boca seca, estreñimiento, retención urinaria, visión borrosa. Alertar al paciente. Monitorizar en hiperplasia prostática.') });
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Risco de pró-arritmia ventricular e IC. Contraindicado em IC-FEr.', '📦 BLACK BOX: Riesgo de proarritmia ventricular e IC. Contraindicado en IC-FEr.') });

        return {
          dose: contraindicado
            ? t(lang, 'DISOPIRAMIDA CONTRAINDICADA — ver alertas.', 'DISOPIRAMIDA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseMax: '800 mg/dia',
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Cápsulas 100 mg / 150 mg IR | Cápsulas LP (Norpace CR)', 'Cápsulas 100 mg / 150 mg IR | Cápsulas LP (Norpace CR)'),
          classe: t(lang, 'Antiarrítmico Classe IA | Anticolinérgico potente | Inotrópico negativo | t½ 6–8 h', 'Antiarrítmico Clase IA | Anticolinérgico potente | Inotrópico negativo | t½ 6–8 h'),
          indicacoes: t(lang,
            ['FA selecionada (sem IC-FEr)', 'Flutter atrial', 'Arritmias ventriculares selecionadas', 'CMH obstrutiva sintomática — redução gradiente VE'],
            ['FA seleccionada (sin IC-FEr)', 'Flutter auricular', 'Arritmias ventriculares seleccionadas', 'MCH obstructiva sintomática — reducción gradiente VI']
          ),
          ajusteRenal: t(lang,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? 'dose plena' : clcrCalc >= 30 ? '100 mg 8/8h' : clcrCalc >= 10 ? '100 mg 12/12h' : '100 mg/dia (evitar)'}`,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? 'dosis plena' : clcrCalc >= 30 ? '100 mg c/8h' : clcrCalc >= 10 ? '100 mg c/12h' : '100 mg/día (evitar)'}`
          ),
          efeitosAdversos: t(lang,
            ['Boca seca', 'Constipação', 'Retenção urinária', 'Visão borrada', 'Tontura', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ Choque cardiogênico (IC)', '⚠️ Bloqueio AV'],
            ['Boca seca', 'Estreñimiento', 'Retención urinaria', 'Visión borrosa', 'Mareos', '⚠️ Torsades de Pointes', '⚠️ TV/FV', '⚠️ Shock cardiogénico (IC)', '⚠️ Bloqueo AV']
          ),
          monitoramento: t(lang,
            ['ECG + QTc + QRS basal e periódico', 'K⁺ e Mg²⁺', 'PA e FC', 'Sintomas anticolinérgicos', 'Sintomas de IC', 'Débito urinário', 'ClCr periódico'],
            ['ECG + QTc + QRS basal y periódico', 'K⁺ y Mg²⁺', 'PA y FC', 'Síntomas anticolinérgicos', 'Síntomas de IC', 'Diuresis', 'ClCr periódico']
          ),
          refs: ['ESC AF Guidelines', 'AHA/ACC/HRS Guidelines', 'ESC HCM Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA label'],
          alerts
        };
      }
    }, /* fim disopiramida */

    lidocaina: {
      name: 'Lidocaína',
      category: 'cardio',
      order: 51,

      safetyFlags: {
        bradycardiaRisk: true,
        avBlockRisk: true,
        hypotensionRisk: true,
        qrsWideningRisk: true,
        neurotoxicityRisk: true,
        seizureRisk: true,
        infusionDrug: true,
        ivUseHighRisk: true,
        hospitalizationRequired: true,
        emergencyDrug: true,
        hepaticToxicityRisk: false
      },

      mechanism: {
        pt: 'Bloqueia canais rápidos de sódio em tecido ventricular, especialmente em fibras isquêmicas ou despolarizadas (Classe IB). Reduz automatismo ventricular e encurta a repolarização, com pouco efeito em tecido atrial ou no nó AV. Metabolismo hepático — t½ se prolonga em IC, choque e hepatopatia.',
        es: 'Bloquea canales rápidos de sodio en tejido ventricular, especialmente en fibras isquémicas o despolarizadas (Clase IB). Reduce automatismo ventricular y acorta la repolarización, con poco efecto en tejido auricular o nodo AV. Metabolismo hepático — t½ se prolonga en IC, shock y hepatopatía.'
      },

      pharmacokinetics: {
        halfLife: '1,5–2 horas (prolongada em IC, choque, hepatopatia)',
        onset: 'IV: 45–90 segundos',
        duration: '10–20 min após bolus; infusão contínua para manutenção'
      },

      commercialNames: {
        br: ['Xylocaína IV', 'Lidocaína genérica IV'],
        ar: ['Xylocaína IV', 'Lidocaína genérica IV']
      },

      blackBoxWarnings: [],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Sem ajuste renal formal. Metabólitos podem acumular em uso prolongado e DRC grave — monitorar neurotoxicidade.',
          es: 'Sin ajuste renal formal. Metabolitos pueden acumularse en uso prolongado y ERC grave — monitorizar neurotoxicidad.'
        },
        fgMaior50:  { vo: null, ev: 'Bolus 1–1,5 mg/kg → infusão 1–4 mg/min', obs: 'Protocolo padrão' },
        fg30a50:    { vo: null, ev: 'Bolus 1–1,5 mg/kg → infusão 1–3 mg/min', obs: 'Cautela com acúmulo de metabólitos' },
        fg10a30:    { vo: null, ev: 'Bolus 1 mg/kg → infusão 1–2 mg/min', obs: 'Monitorar neurotoxicidade' },
        fgMenor10:  { vo: null, ev: 'Bolus 1 mg/kg → infusão 0,5–1 mg/min', obs: 'Cautela extrema; metabólitos acumulam' },
        hemodialise:{ vo: null, ev: 'Bolus 1 mg/kg → infusão 0,5–1 mg/min', obs: 'Não dialisável; monitorar' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 60, sexo = 'M',
                fc = 160, paSistolica = 100,
                qrs = 130, potassio = 4.0, magnesio = 2.0,
                clcr = null, creatinina = 1.0,
                funcaoHepatica = 'normal',
                choque = false, icAvancada = false,
                pcr = false, indicacao = 'TV',
                sinaisNeurotoxicidade = false,
                gestante = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Dose de bolus por peso
        const doseBolusMin = (1.0 * peso).toFixed(0);
        const doseBolusMax = (1.5 * peso).toFixed(0);
        const doseBolusRepeat = (0.75 * peso).toFixed(0);
        const doseBolusMax3 = (3.0 * peso).toFixed(0);

        // PCR — dose especial
        if (pcr) {
          alerts.push({ tipo: 'danger', msg: t(lang, `🚨 PCR FV/TV sem pulso: Bolus ${doseBolusMax} mg IV/IO (1,5 mg/kg). Repetir 0,5–0,75 mg/kg a cada 5–10 min. Dose total máxima: ${doseBolusMax3} mg (3 mg/kg). Usar apenas se amiodarona indisponível.`, `🚨 PCR FV/TV sin pulso: Bolo ${doseBolusMax} mg IV/IO (1,5 mg/kg). Repetir 0,5–0,75 mg/kg cada 5–10 min. Dosis total máxima: ${doseBolusMax3} mg (3 mg/kg). Usar solo si amiodarona no disponible.`) });
        }

        // Contraindicações
        if (paSistolica < 80) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ PAS <80 mmHg — hipotensão grave. Contraindicado ou usar apenas em PCR.', '⛔ PAS <80 mmHg — hipotensión grave. Contraindicado o usar solo en PCR.') });
          if (!pcr) contraindicado = true;
        }
        if (fc < 45) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        }

        // Sinais de neurotoxicidade
        if (sinaisNeurotoxicidade) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Neurotoxicidade detectada — SUSPENDER infusão imediatamente. Sinais: tremor, parestesias, convulsão, confusão, disartria, coma.', '⛔ Neurotoxicidad detectada — SUSPENDER infusión inmediatamente. Signos: temblor, parestesias, convulsión, confusión, disartria, coma.') });
          contraindicado = true;
        }

        // Fator de risco para acúmulo
        let fatorReducao = 1.0;
        const reducaoObs = [];
        if (choque) {
          fatorReducao = 0.5;
          reducaoObs.push(t(lang, 'Choque: reduzir infusão 50%', 'Shock: reducir infusión 50%'));
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Choque: fluxo hepático reduzido → acúmulo de lidocaína. Reduzir infusão em 50%.', '⛔ Shock: flujo hepático reducido → acumulación de lidocaína. Reducir infusión 50%.') });
        }
        if (icAvancada) {
          fatorReducao = Math.min(fatorReducao, 0.5);
          reducaoObs.push(t(lang, 'IC avançada: reduzir infusão', 'IC avanzada: reducir infusión'));
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ IC avançada: débito cardíaco reduzido → maior exposição à lidocaína. Reduzir infusão e monitorar neurotoxicidade.', '⚠️ IC avanzada: gasto cardíaco reducido → mayor exposición a lidocaína. Reducir infusión y monitorizar neurotoxicidad.') });
        }
        if (funcaoHepatica === 'grave') {
          fatorReducao = Math.min(fatorReducao, 0.5);
          reducaoObs.push(t(lang, 'Hepatopatia grave: reduzir infusão', 'Hepatopatía grave: reducir infusión'));
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Insuficiência hepática grave: metabolismo drasticamente reduzido. Reduzir infusão em 50% e monitorar rigorosamente.', '⛔ Insuficiencia hepática grave: metabolismo drásticamente reducido. Reducir infusión 50% y monitorizar rigurosamente.') });
        } else if (funcaoHepatica === 'moderada') {
          fatorReducao = Math.min(fatorReducao, 0.75);
          reducaoObs.push(t(lang, 'Hepatopatia moderada: cautela', 'Hepatopatía moderada: precaución'));
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Insuficiência hepática moderada: reduzir infusão e monitorar.', '⚠️ Insuficiencia hepática moderada: reducir infusión y monitorizar.') });
        }

        const infusaoBase = fatorReducao === 1.0 ? '1–4 mg/min IV' : `${(1 * fatorReducao).toFixed(1)}–${(4 * fatorReducao).toFixed(1)} mg/min IV (ajustado)`;

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir para reduzir recorrência de TV/FV.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir para reducir recurrencia de TV/FV.`) });
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ Mg²⁺ ${magnesio} mg/dL — repor magnésio.`, `⚠️ Mg²⁺ ${magnesio} mg/dL — reponer magnesio.`) });
        }

        // Renal
        if (clcrCalc < 30) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min — metabólitos podem acumular. Reduzir infusão e monitorar neurotoxicidade.`, `⚠️ ClCr ${clcrCalc} mL/min — metabolitos pueden acumularse. Reducir infusión y monitorizar neurotoxicidad.`) });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: menor depuração hepática e maior risco de neurotoxicidade. Reduzir dose e monitorar estado mental.', '⚠️ ≥70 años: menor depuración hepática y mayor riesgo de neurotoxicidad. Reducir dosis y monitorizar estado mental.') });
        }

        // WPW — aviso negativo
        if (indicacao === 'FA' || indicacao === 'FA-preexcitacao') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lidocaína NÃO é indicação para FA/flutter supraventricular — pouco eficaz em tecido atrial. Preferir cardioversão ou antiarrítmicos específicos.', '⚠️ Lidocaína NO es indicación para FA/flutter supraventricular — poco eficaz en tejido auricular. Preferir cardioversión o antiarrítmicos específicos.') });
        }

        // Gestante
        if (gestante) {
          alerts.push({ tipo: 'info', msg: t(lang, 'ℹ️ Gestante: pode ser usada em situação emergencial. Risco-benefício favorável em arritmia ventricular grave — monitorar feto.', 'ℹ️ Embarazada: puede usarse en situación emergencial. Riesgo-beneficio favorable en arritmia ventricular grave — monitorizar feto.') });
        }

        return {
          dose: contraindicado
            ? t(lang, 'LIDOCAÍNA CONTRAINDICADA — ver alertas.', 'LIDOCAÍNA CONTRAINDICADA — ver alertas.')
            : t(lang, `Bolus ${doseBolusMin}–${doseBolusMax} mg IV (1–1,5 mg/kg) → Infusão ${infusaoBase}`, `Bolo ${doseBolusMin}–${doseBolusMax} mg IV (1–1,5 mg/kg) → Infusión ${infusaoBase}`),
          doseBolus: contraindicado ? null : t(lang, `${doseBolusMin}–${doseBolusMax} mg IV (1–1,5 mg/kg) em 1–2 min`, `${doseBolusMin}–${doseBolusMax} mg IV (1–1,5 mg/kg) en 1–2 min`),
          doseRepetir: contraindicado ? null : t(lang, `${doseBolusRepeat} mg IV (0,75 mg/kg) a cada 5–10 min se necessário`, `${doseBolusRepeat} mg IV (0,75 mg/kg) cada 5–10 min si necesario`),
          doseTotalMax: contraindicado ? null : t(lang, `${doseBolusMax3} mg (3 mg/kg) em bolus acumulado`, `${doseBolusMax3} mg (3 mg/kg) en bolo acumulado`),
          doseInfusao: contraindicado ? null : infusaoBase,
          apresentacao: t(lang, 'Ampolas IV 1% (10 mg/mL) / 2% (20 mg/mL)', 'Ampollas IV 1% (10 mg/mL) / 2% (20 mg/mL)'),
          classe: t(lang, 'Antiarrítmico Classe IB | Anestésico local amida | t½ 1,5–2 h (variável)', 'Antiarrítmico Clase IB | Anestésico local amida | t½ 1,5–2 h (variable)'),
          indicacoes: t(lang,
            ['TV estável — alternativa à amiodarona', 'FV/TV recorrente pós-PCR', 'Arritmias ventriculares isquêmicas/pós-IAM', 'PCR por FV/TV sem pulso (se amiodarona indisponível)'],
            ['TV estable — alternativa a amiodarona', 'FV/TV recurrente post-PCR', 'Arritmias ventriculares isquémicas/post-IAM', 'PCR por FV/TV sin pulso (si amiodarona no disponible)']
          ),
          efeitosAdversos: t(lang,
            ['Sonolência', 'Tontura', 'Parestesias', 'Tremor', 'Náuseas', 'Confusão', 'Disartria', '⚠️ Convulsões', '⚠️ Coma', '⚠️ Depressão respiratória', '⚠️ Bradicardia/BAV', '⚠️ Colapso CV'],
            ['Somnolencia', 'Mareos', 'Parestesias', 'Temblor', 'Náuseas', 'Confusión', 'Disartria', '⚠️ Convulsiones', '⚠️ Coma', '⚠️ Depresión respiratoria', '⚠️ Bradicardia/BAV', '⚠️ Colapso CV']
          ),
          monitoramento: t(lang,
            ['ECG contínuo', 'PA a cada 5 min (carga)', 'Estado neurológico', 'Ritmo ventricular', 'K⁺ + Mg²⁺', 'Função hepática', 'Suspender se tremor/confusão/convulsão'],
            ['ECG continuo', 'PA cada 5 min (carga)', 'Estado neurológico', 'Ritmo ventricular', 'K⁺ + Mg²⁺', 'Función hepática', 'Suspender si temblor/confusión/convulsión']
          ),
          refs: ['AHA ACLS Guidelines', 'ESC VA Guidelines', 'AHA/ACC/HRS VA Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed label'],
          alerts
        };
      }
    }, /* fim lidocaina */

    mexiletina: {
      name: 'Mexiletina',
      category: 'cardio',
      order: 52,

      safetyFlags: {
        bradycardiaRisk: true,
        avBlockRisk: true,
        hypotensionRisk: true,
        qrsWideningRisk: true,
        neurotoxicityRisk: true,
        seizureRisk: true,
        ventricularProarrhythmiaRisk: true,
        hepaticToxicityRisk: true,
        highInteractionRisk: true
      },

      mechanism: {
        pt: 'Bloqueia canais rápidos de sódio em tecido ventricular despolarizado ou isquêmico (Classe IB oral, análogo estrutural da lidocaína). Reduz automatismo ventricular e atividade desencadeada. Não prolonga QT. Metabolismo hepático (CYP1A2, CYP2D6) — t½ prolonga em hepatopatia e IC.',
        es: 'Bloquea canales rápidos de sodio en tejido ventricular despolarizado o isquémico (Clase IB oral, análogo estructural de lidocaína). Reduce automatismo ventricular y actividad desencadenada. No prolonga QT. Metabolismo hepático (CYP1A2, CYP2D6) — t½ se prolonga en hepatopatía e IC.'
      },

      pharmacokinetics: {
        halfLife: '10–12 horas',
        onset: 'VO: horas',
        duration: 'Dose 8/8h (ou 12/12h selecionados)'
      },

      commercialNames: {
        br: ['Mexitil', 'Mexiletina importada/genérica'],
        ar: ['Mexitil', 'Mexiletina genérica/importada']
      },

      blackBoxWarnings: [
        'Antiarrítmicos podem aumentar mortalidade em arritmias ventriculares não ameaçadoras à vida',
        'Uso reservado para arritmias ventriculares documentadas e potencialmente fatais'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Sem ajuste renal importante. Monitorar em DRC avançada e polifarmácia pelo risco de acúmulo e interações.',
          es: 'Sin ajuste renal importante. Monitorizar en ERC avanzada y polifarmacia por riesgo de acumulación e interacciones.'
        },
        fgMaior50:  { vo: '150–300 mg 8/8h com alimentos', ev: null, obs: 'Dose padrão' },
        fg30a50:    { vo: '150–200 mg 8/8h com alimentos', ev: null, obs: 'Reduzir conforme tolerância' },
        fg10a30:    { vo: '150 mg 8/8h — cautela', ev: null, obs: 'Monitorar toxicidade' },
        fgMenor10:  { vo: '150 mg 12/12h — dados limitados', ev: null, obs: 'Cautela extrema' },
        hemodialise:{ vo: '150 mg/dia — dados limitados', ev: null, obs: 'Não dialisável; ajuste empírico' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 65, sexo = 'M',
                fc = 80, paSistolica = 110,
                qrs = 95, pr = 170,
                clcr = null, creatinina = 1.0,
                funcaoHepatica = 'normal',
                icAvancada = false, choque = false,
                tvSustentada = false, sinaisNeurotoxicidade = false,
                usoAmiodarona = false, usoTeofilina = false,
                usoPropafenona = false,
                gestante = false, lactante = false,
                convulsoesPreviasConvulsoes = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Contraindicações absolutas
        if (choque) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Choque cardiogênico.', '⛔ CONTRAINDICADO: Shock cardiogénico.') });
          contraindicado = true;
        }
        if (paSistolica < 85) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ PAS ${paSistolica} mmHg — hipotensão. Contraindicado.`, `⛔ PAS ${paSistolica} mmHg — hipotensión. Contraindicado.`) });
          contraindicado = true;
        }
        if (fc < 45) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        }

        // Sinais de neurotoxicidade ativos
        if (sinaisNeurotoxicidade) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Neurotoxicidade ativa (tremor/tontura/confusão/convulsão) — SUSPENDER mexiletina imediatamente.', '⛔ Neurotoxicidad activa (temblor/mareos/confusión/convulsión) — SUSPENDER mexiletina inmediatamente.') });
          contraindicado = true;
        }

        // Convulsões prévias
        if (convulsoesPreviasConvulsoes) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Epilepsia ou convulsões prévias — risco aumentado de convulsão por mexiletina. Usar com extrema cautela.', '⚠️ Epilepsia o convulsiones previas — riesgo aumentado de convulsión por mexiletina. Usar con extrema precaución.') });
        }

        // QRS
        if (qrs > 120) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms alargado — monitorar alargamento adicional. Suspender se QRS aumentar significativamente.`, `⚠️ QRS ${qrs} ms ensanchado — monitorizar ensanchamiento adicional. Suspender si QRS aumenta significativamente.`) });
        }

        // Hepático — ponto crítico
        if (funcaoHepatica === 'grave') {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Insuficiência hepática grave — metabolismo drasticamente reduzido. Reduzir dose e monitorar toxicidade rigorosamente.', '⛔ Insuficiencia hepática grave — metabolismo drásticamente reducido. Reducir dosis y monitorizar toxicidad rigurosamente.') });
        } else if (funcaoHepatica === 'moderada') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Insuficiência hepática moderada — reduzir dose e monitorar.', '⚠️ Insuficiencia hepática moderada — reducir dosis y monitorizar.') });
        }
        if (icAvancada) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ IC avançada: menor débito → acúmulo de mexiletina. Reduzir dose e monitorar.', '⚠️ IC avanzada: menor gasto → acumulación de mexiletina. Reducir dosis y monitorizar.') });
        }

        // Determinar dose renal
        let doseRec;
        if (clcrCalc > 50) {
          doseRec = '200 mg VO 8/8h com alimentos (titular 150–300 mg 8/8h)';
        } else if (clcrCalc >= 30) {
          doseRec = '150–200 mg VO 8/8h com alimentos';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min: dose no limite inferior; monitorar.`, `⚠️ ClCr ${clcrCalc} mL/min: dosis en límite inferior; monitorizar.`) });
        } else {
          doseRec = '150 mg VO 8/8h ou 12/12h — DRC grave';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min — DRC grave. Usar dose mínima e monitorar.`, `⚠️ ClCr ${clcrCalc} mL/min — ERC grave. Usar dosis mínima y monitorizar.`) });
        }

        // TV não documentada — aviso importante
        if (!tvSustentada) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Mexiletina reservada para TV sustentada documentada ou EV potencialmente fatal. Não usar para EV assintomáticas/benignas — pode aumentar mortalidade.', '⚠️ Mexiletina reservada para TV sostenida documentada o EV potencialmente fatal. No usar para EV asintomáticas/benignas — puede aumentar mortalidad.') });
        }

        // Interações importantes
        if (usoAmiodarona) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Amiodarona: inibe CYP2D6/CYP1A2 → aumenta significativamente níveis de mexiletina. Risco de toxicidade neurológica e arrítmica.', '🔴 Amiodarona: inhibe CYP2D6/CYP1A2 → aumenta significativamente niveles de mexiletina. Riesgo de toxicidad neurológica y arrítmica.') });
        }
        if (usoTeofilina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Teofilina: mexiletina pode aumentar seus níveis. Monitorar toxicidade por teofilina.', '⚠️ Teofilina: mexiletina puede aumentar sus niveles. Monitorizar toxicidad por teofilina.') });
        }
        if (usoPropafenona) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Propafenona: risco de pró-arritmia e condução alterada com associação de Classe IB + IC.', '⚠️ Propafenona: riesgo de proarritmia y conducción alterada con asociación Clase IB + IC.') });
        }

        // Instrução de tomar com alimentos
        alerts.push({ tipo: 'info', msg: t(lang, '🍽️ Tomar SEMPRE com alimentos — reduz significativamente náuseas e efeitos GI.', '🍽️ Tomar SIEMPRE con alimentos — reduce significativamente náuseas y efectos GI.') });

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: usar apenas se benefício superar risco — arritmia ventricular relevante sob especialista.', '⚠️ Embarazada: usar solo si beneficio supera riesgo — arritmia ventricular relevante bajo especialista.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lactante: passa para o leite. Monitorar lactente para sonolência ou arritmias.', '⚠️ Lactante: pasa a la leche. Monitorizar lactante por somnolencia o arritmias.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: maior risco de tremor, tontura, quedas, interações e toxicidade. Iniciar com 150 mg 8/8h e titular lentamente.', '⚠️ ≥70 años: mayor riesgo de temblor, mareos, caídas, interacciones y toxicidad. Iniciar con 150 mg cada 8h y titular lentamente.') });
        }

        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Antiarrítmicos podem aumentar mortalidade em arritmias não ameaçadoras à vida. Reservar para TV/EV documentadas e potencialmente fatais.', '📦 BLACK BOX: Antiarrítmicos pueden aumentar mortalidad en arritmias no amenazantes para la vida. Reservar para TV/EV documentadas y potencialmente fatales.') });

        return {
          dose: contraindicado
            ? t(lang, 'MEXILETINA CONTRAINDICADA — ver alertas.', 'MEXILETINA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseMax: t(lang, '1200 mg/dia', '1200 mg/día'),
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Cápsulas 150 mg / 200 mg / 250 mg (Mexitil)', 'Cápsulas 150 mg / 200 mg / 250 mg (Mexitil)'),
          classe: t(lang, 'Antiarrítmico Classe IB oral | Análogo oral da lidocaína | t½ 10–12 h', 'Antiarrítmico Clase IB oral | Análogo oral de lidocaína | t½ 10–12 h'),
          indicacoes: t(lang,
            ['TV sustentada documentada', 'Arritmias ventriculares potencialmente fatais', 'Adjuvante em TV refratária (+ amiodarona)', 'QT longo tipo 3 selecionado (especialista)', 'EV de alto risco selecionadas'],
            ['TV sostenida documentada', 'Arritmias ventriculares potencialmente fatales', 'Adyuvante en TV refractaria (+ amiodarona)', 'QT largo tipo 3 seleccionado (especialista)', 'EV de alto riesgo seleccionadas']
          ),
          efeitosAdversos: t(lang,
            ['Náuseas', 'Vômitos', 'Azia', 'Tremor', 'Tontura', 'Ataxia', 'Visão turva', '⚠️ Pró-arritmia ventricular', '⚠️ Convulsões', '⚠️ Hepatotoxicidade', '⚠️ Leucopenia rara'],
            ['Náuseas', 'Vómitos', 'Acidez', 'Temblor', 'Mareos', 'Ataxia', 'Visión borrosa', '⚠️ Proarritmia ventricular', '⚠️ Convulsiones', '⚠️ Hepatotoxicidad', '⚠️ Leucopenia rara']
          ),
          monitoramento: t(lang,
            ['ECG basal + periódico (QRS + PR)', 'Função hepática basal e periódica', 'K⁺ e Mg²⁺', 'Sintomas neurológicos', 'Sintomas GI', 'Recorrência de TV', 'Estado mental'],
            ['ECG basal + periódico (QRS + PR)', 'Función hepática basal y periódica', 'K⁺ y Mg²⁺', 'Síntomas neurológicos', 'Síntomas GI', 'Recurrencia de TV', 'Estado mental']
          ),
          refs: ['ESC VA Guidelines', 'AHA/ACC/HRS VA Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed label'],
          alerts
        };
      }
    } /* fim mexiletina */

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 16 (Antiarrítmicos: disopiramida · lidocaína · mexiletina) */

  /* =========================================================
     GRUPO 17 — Antiarrítmicos finais: propafenona · quinidina
     (#53 · #54)
     ========================================================= */
  Object.assign(window.CARDIO_DRUGS_DB, {

    propafenona: {
      name: 'Propafenona',
      category: 'cardio',
      order: 53,

      safetyFlags: {
        bradycardiaRisk: true,
        avBlockRisk: true,
        qrsWideningRisk: true,
        ventricularProarrhythmiaRisk: true,
        structuralHeartDiseaseContraindication: true,
        bronchospasmRisk: true,
        brugadaRisk: true,
        highInteractionRisk: true,
        betaBlockerEffect: true
      },

      mechanism: {
        pt: 'Bloqueia fortemente canais rápidos de sódio (Classe IC), reduzindo velocidade de condução no miocárdio e sistema His-Purkinje. Prolonga QRS e PR sem prolongar significativamente QTc. Possui leve atividade betabloqueadora e bloqueio de canais de cálcio — pode reduzir FC e condução AV. Metabolismo por CYP2D6, CYP3A4, CYP1A2. Pode desmascarar síndrome de Brugada.',
        es: 'Bloquea fuertemente canales rápidos de sodio (Clase IC), reduciendo velocidad de conducción en miocardio y sistema His-Purkinje. Prolonga QRS y PR sin prolongar significativamente QTc. Tiene leve actividad betabloqueante y bloqueo de canales de calcio — puede reducir FC y conducción AV. Metabolismo por CYP2D6, CYP3A4, CYP1A2. Puede desenmascarar síndrome de Brugada.'
      },

      pharmacokinetics: {
        halfLife: '2–10 horas (variável; maior em metabolizadores lentos CYP2D6)',
        onset: 'VO: 1–3 horas',
        duration: 'IR: 8/8h | LP: 12/12h'
      },

      commercialNames: {
        br: ['Ritmonorm', 'Propafenona genérica'],
        ar: ['Rytmonorm', 'Propafenona genérica']
      },

      blackBoxWarnings: [
        'Risco de pró-arritmia e aumento de mortalidade em cardiopatia estrutural ou arritmias ventriculares pós-IAM'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: false,
        message: {
          pt: 'Sem ajuste renal habitual. Monitorar ECG e toxicidade em DRC grave.',
          es: 'Sin ajuste renal habitual. Monitorizar ECG y toxicidad en ERC grave.'
        },
        fgMaior50:  { vo: '150–300 mg 8/8h (IR) ou LP 225–425 mg 12/12h', ev: null, obs: 'Dose padrão' },
        fg30a50:    { vo: '150 mg 8/8h — monitorar', ev: null, obs: 'Cautela; ECG seriado' },
        fg10a30:    { vo: '150 mg 8/8h — cautela aumentada', ev: null, obs: 'Monitorar QRS e toxicidade' },
        fgMenor10:  { vo: '150 mg 8/8h — dados limitados', ev: null, obs: 'Evitar se possível' },
        hemodialise:{ vo: '150 mg 8/8h — dados limitados', ev: null, obs: 'Não dialisável; ajuste empírico' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 55, sexo = 'M',
                fc = 80, paSistolica = 120,
                qrs = 90, pr = 160, feve = 60,
                doencaCoronariana = false, iamPrevio = false,
                cardiopatiaEstrutural = false, icFEr = false,
                brugada = false, asmaDpoc = false,
                clcr = null, creatinina = 1.0,
                funcaoHepatica = 'normal',
                usoBloqueadorAV = false,
                usoAmiodarona = false, usoDigoxina = false,
                usoVarfarina = false,
                inibidorCYP2D6 = false, inibidorCYP3A4 = false,
                gestante = false, lactante = false,
                pillInPocket = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Contraindicações absolutas estruturais (mesma lógica do CAST para Classe IC)
        if (iamPrevio) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: IAM prévio — risco de pró-arritmia ventricular fatal (Classe IC pós-IAM aumenta mortalidade).', '⛔ CONTRAINDICADO: IAM previo — riesgo de proarritmia ventricular fatal (Clase IC post-IAM aumenta mortalidad).') });
          contraindicado = true;
        }
        if (doencaCoronariana) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Doença coronariana significativa — pró-arritmia ventricular aumentada.', '⛔ CONTRAINDICADO: Enfermedad coronaria significativa — proarritmia ventricular aumentada.') });
          contraindicado = true;
        }
        if (cardiopatiaEstrutural) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Cardiopatia estrutural relevante — pró-arritmia ventricular aumentada.', '⛔ CONTRAINDICADO: Cardiopatía estructural relevante — proarritmia ventricular aumentada.') });
          contraindicado = true;
        }
        if (icFEr || feve < 40) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — propafenona deprime contratilidade e aumenta mortalidade.`, `⛔ CONTRAINDICADO: IC-FEr / FEVE ${feve}% — propafenona deprime contractilidad y aumenta mortalidad.`) });
          contraindicado = true;
        }

        // Síndrome de Brugada
        if (brugada) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Síndrome de Brugada conhecida — propafenona pode desencadear TV/FV fatal por bloqueio sódico.', '⛔ CONTRAINDICADO: Síndrome de Brugada conocida — propafenona puede desencadenar TV/FV fatal por bloqueo sódico.') });
          contraindicado = true;
        }

        // Broncospasmo/Asma/DPOC
        if (asmaDpoc) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Asma/DPOC com broncoespasmo — atividade betabloqueadora da propafenona pode precipitar broncoespasmo grave.', '⛔ CONTRAINDICADO: Asma/EPOC con broncoespasmo — actividad betabloqueante de propafenona puede precipitar broncoespasmo grave.') });
          contraindicado = true;
        }

        // ECG — QRS
        if (qrs > 120) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QRS ${qrs} ms >120 ms — bloqueio de ramo significativo sem avaliação especializada.`, `⛔ CONTRAINDICADO: QRS ${qrs} ms >120 ms — bloqueo de rama significativo sin evaluación especializada.`) });
          contraindicado = true;
        } else if (qrs > 100) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms alargado basal — monitorar alargamento adicional (>25% do basal = toxicidade).`, `⚠️ QRS ${qrs} ms ensanchado basal — monitorizar ensanchamiento adicional (>25% del basal = toxicidad).`) });
        }

        // PR e FC
        if (pr > 200) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ PR ${pr} ms prolongado basal — propafenona pode prolongar mais. Monitorar BAV.`, `⚠️ PR ${pr} ms prolongado basal — propafenona puede prolongar más. Monitorizar BAV.`) });
        }
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        } else if (fc < 60) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ FC ${fc} bpm — bradicardia. Atividade betabloqueadora pode agravar.`, `⚠️ FC ${fc} lpm — bradicardia. Actividad betabloqueante puede agravar.`) });
        }

        // Hipotensão
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Hipotensão grave (PAS <90) — contraindicado.', '⛔ Hipotensión grave (PAS <90) — contraindicado.') });
          contraindicado = true;
        }

        // Hepático
        if (funcaoHepatica === 'grave') {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Insuficiência hepática grave — metabolismo drasticamente reduzido; risco de acúmulo e toxicidade.', '⛔ Insuficiencia hepática grave — metabolismo drásticamente reducido; riesgo de acumulación y toxicidad.') });
        } else if (funcaoHepatica === 'moderada') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Insuficiência hepática moderada — reduzir dose e monitorar QRS.', '⚠️ Insuficiencia hepática moderada — reducir dosis y monitorizar QRS.') });
        }

        // Inibidores CYP combinados
        if (inibidorCYP2D6 && inibidorCYP3A4) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Inibidores simultâneos de CYP2D6 + CYP3A4 — aumento importante dos níveis de propafenona com risco de toxicidade grave.', '⛔ CONTRAINDICADO: Inhibidores simultáneos de CYP2D6 + CYP3A4 — aumento importante de niveles de propafenona con riesgo de toxicidad grave.') });
          contraindicado = true;
        } else if (inibidorCYP2D6) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Inibidor CYP2D6 em uso — níveis de propafenona aumentados. Monitorar QRS e FC.', '⚠️ Inhibidor CYP2D6 en uso — niveles de propafenona aumentados. Monitorizar QRS y FC.') });
        } else if (inibidorCYP3A4) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Inibidor CYP3A4 em uso — níveis de propafenona aumentados. Monitorar QRS e FC.', '⚠️ Inhibidor CYP3A4 en uso — niveles de propafenona aumentados. Monitorizar QRS y FC.') });
        }

        // Digoxina / Varfarina
        if (usoDigoxina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Digoxina: propafenona pode aumentar nível sérico. Monitorar nível de digoxina.', '⚠️ Digoxina: propafenona puede aumentar nivel sérico. Monitorizar nivel de digoxina.') });
        }
        if (usoVarfarina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Varfarina: propafenona pode aumentar INR. Monitorar INR após início/ajuste.', '⚠️ Warfarina: propafenona puede aumentar INR. Monitorizar INR tras inicio/ajuste.') });
        }
        if (usoAmiodarona) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Amiodarona: risco de bradicardia, QRS largo e pró-arritmia. Combinação de alto risco.', '🔴 Amiodarona: riesgo de bradicardia, QRS ancho y proarritmia. Combinación de alto riesgo.') });
        }

        // Flutter 1:1
        if (!usoBloqueadorAV && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ FA tratada com propafenona: considerar bloqueador AV concomitante (betabloqueador ou verapamil/diltiazem com cautela) para prevenir flutter atrial com condução 1:1.', '⚠️ FA tratada con propafenona: considerar bloqueador AV concomitante (betabloqueante o verapamilo/diltiazem con precaución) para prevenir flutter auricular con conducción 1:1.') });
        }

        // Brugada subclínico
        if (!brugada && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Propafenona pode DESMASCARAR síndrome de Brugada subclínica. Avaliar ECG basal com atenção; suspender se padrão Brugada aparecer.', '⚠️ Propafenona puede DESENMASCARAR síndrome de Brugada subclínica. Evaluar ECG basal con atención; suspender si aparece patrón Brugada.') });
        }

        // Pill-in-pocket
        if (pillInPocket && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Pill-in-the-pocket: 450–600 mg dose única conforme peso. Apenas após teste supervisionado hospitalar e com bloqueador AV. Confirmar ausência de cardiopatia estrutural antes de liberar.', '⚠️ Pill-in-the-pocket: 450–600 mg dosis única según peso. Solo tras prueba supervisada hospitalaria y con bloqueador AV. Confirmar ausencia de cardiopatía estructural antes de liberar.') });
        }

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: pode ser considerada em arritmias selecionadas sob especialista.', '⚠️ Embarazada: puede considerarse en arritmias seleccionadas bajo especialista.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lactante: dados limitados — usar com cautela e monitorar lactente.', '⚠️ Lactante: datos limitados — usar con precaución y monitorizar lactante.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: maior risco de bradicardia, bloqueios, interações CYP e cardiopatia estrutural oculta. Exigir ECG e avaliação cardíaca prévia.', '⚠️ ≥70 años: mayor riesgo de bradicardia, bloqueos, interacciones CYP y cardiopatía estructural oculta. Exigir ECG y evaluación cardíaca previa.') });
        }

        // Dose recomendada
        const doseRec = contraindicado
          ? null
          : clcrCalc > 30
            ? '150 mg VO 8/8h — titular até 300 mg 8/8h | LP: 225–425 mg 12/12h'
            : '150 mg VO 8/8h — DRC: monitorar QRS e toxicidade';

        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: pró-arritmia e ↑ mortalidade em cardiopatia estrutural/pós-IAM. RESTRITO a FA paroxística/TSV sem cardiopatia estrutural.', '📦 BLACK BOX: proarritmia y ↑ mortalidad en cardiopatía estructural/post-IAM. RESTRINGIDO a FA paroxística/TSV sin cardiopatía estructural.') });

        return {
          dose: contraindicado
            ? t(lang, 'PROPAFENONA CONTRAINDICADA — ver alertas.', 'PROPAFENONA CONTRAINDICADA — ver alertas.')
            : doseRec,
          doseMax: t(lang, 'IR: 900 mg/dia | LP: 850 mg/dia', 'IR: 900 mg/día | LP: 850 mg/día'),
          dosePillInPocket: pillInPocket && !contraindicado
            ? t(lang, '450–600 mg dose única supervisionada (com bloqueador AV)', '450–600 mg dosis única supervisada (con bloqueador AV)')
            : null,
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Comprimidos 150 mg / 300 mg IR | Cápsulas LP 225 / 325 / 425 mg (Ritmonorm)', 'Comprimidos 150 mg / 300 mg IR | Cápsulas LP 225 / 325 / 425 mg (Rytmonorm)'),
          classe: t(lang, 'Antiarrítmico Classe IC + leve betabloqueio + bloqueio Ca²⁺ | t½ 2–10 h (CYP2D6-dependente)', 'Antiarrítmico Clase IC + leve betabloqueo + bloqueo Ca²⁺ | t½ 2–10 h (CYP2D6-dependiente)'),
          indicacoes: t(lang,
            ['FA paroxística SEM cardiopatia estrutural', 'Flutter atrial selecionado (SEM cardiopatia)', 'Manutenção ritmo sinusal', 'Pill-in-the-pocket supervisionada', 'TSV paroxística / AVNRT / AVRT'],
            ['FA paroxística SIN cardiopatía estructural', 'Flutter auricular seleccionado (SIN cardiopatía)', 'Mantenimiento ritmo sinusal', 'Pill-in-the-pocket supervisada', 'TSV paroxística / AVNRT / AVRT']
          ),
          efeitosAdversos: t(lang,
            ['Gosto metálico', 'Tontura', 'Náuseas', 'Constipação', 'Visão turva', 'Fadiga', 'Bradicardia', '⚠️ TV/FV', '⚠️ Flutter 1:1', '⚠️ BAV avançado', '⚠️ QRS extremo', '⚠️ Broncoespasmo', '⚠️ Brugada desmascarado'],
            ['Sabor metálico', 'Mareos', 'Náuseas', 'Estreñimiento', 'Visión borrosa', 'Fatiga', 'Bradicardia', '⚠️ TV/FV', '⚠️ Flutter 1:1', '⚠️ BAV avanzado', '⚠️ QRS extremo', '⚠️ Broncoespasmo', '⚠️ Brugada desenmascarado']
          ),
          monitoramento: t(lang,
            ['ECG basal (QRS + PR + padrão Brugada)', 'FEVE obrigatória', 'Avaliação doença coronariana', 'ECG após início e titulação', 'QRS: suspender se >25% basal', 'K⁺ e Mg²⁺', 'Revisão interações CYP', 'INR se varfarina', 'Nível digoxina se associado'],
            ['ECG basal (QRS + PR + patrón Brugada)', 'FEVI obligatoria', 'Evaluación enfermedad coronaria', 'ECG tras inicio y titulación', 'QRS: suspender si >25% basal', 'K⁺ y Mg²⁺', 'Revisión interacciones CYP', 'INR si warfarina', 'Nivel digoxina si asociado']
          ),
          refs: ['CAST Trial', 'ESC AF Guidelines', 'AHA/ACC/HRS AF Guidelines', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed label'],
          alerts
        };
      }
    }, /* fim propafenona */

    quinidina: {
      name: 'Quinidina',
      category: 'cardio',
      order: 54,

      safetyFlags: {
        torsadesRisk: true,
        qtRisk: true,
        qrsWideningRisk: true,
        bradycardiaRisk: true,
        avBlockRisk: true,
        hypotensionRisk: true,
        ventricularProarrhythmiaRisk: true,
        digoxinInteractionRisk: true,
        hematologicToxicityRisk: true,
        highInteractionRisk: true,
        renalHighRisk: true,
        hepaticToxicityRisk: true
      },

      mechanism: {
        pt: 'Bloqueia canais rápidos de sódio (Classe IA), reduzindo velocidade de condução, e bloqueia canais de potássio, prolongando repolarização e período refratário. Possui efeito anticolinérgico vagolítico — pode paradoxalmente aumentar condução AV em flutter/FA se usada sem bloqueador AV. Alarga QRS, QT e PR. Metabolismo hepático; excreção renal parcial.',
        es: 'Bloquea canales rápidos de sodio (Clase IA), reduciendo velocidad de conducción, y bloquea canales de potasio, prolongando repolarización y período refractario. Tiene efecto anticolinérgico vagolítico — puede paradójicamente aumentar conducción AV en flutter/FA si se usa sin bloqueador AV. Ensancha QRS, QT y PR. Metabolismo hepático; excreción renal parcial.'
      },

      pharmacokinetics: {
        halfLife: '6–8 horas (variável)',
        onset: 'VO: horas',
        duration: 'Dose 6/6h–8/8h ou formulação LP'
      },

      commercialNames: {
        br: ['Quinidina genérica', 'Quinidine sulfate'],
        ar: ['Quinidina genérica', 'Quinidine sulfate']
      },

      blackBoxWarnings: [
        'Pode causar Torsades de Pointes e morte súbita',
        'Uso para arritmias não ameaçadoras à vida pode aumentar mortalidade'
      ],

      renalDose: {
        version: 2,
        requiresAdjustment: true,
        message: {
          pt: 'Excreção renal parcial. Usar cautela em DRC — maior risco de acúmulo, QT prolongado e toxicidade.',
          es: 'Excreción renal parcial. Usar precaución en ERC — mayor riesgo de acumulación, QT prolongado y toxicidad.'
        },
        fgMaior50:  { vo: '200–300 mg 6/6h (sulfato)', ev: null, obs: 'Dose padrão' },
        fg30a50:    { vo: '200 mg 6/6h–8/8h', ev: null, obs: 'Reduzir dose; monitorar QTc' },
        fg10a30:    { vo: '200 mg 8/8h–12/12h', ev: null, obs: 'Cautela aumentada; monitorar QTc e QRS' },
        fgMenor10:  { vo: '200 mg/dia — dados limitados', ev: null, obs: 'Evitar; risco alto de acúmulo e Torsades' },
        hemodialise:{ vo: '200 mg pós-diálise — dados limitados', ev: null, obs: 'Parcialmente dialisável; monitorar QTc' }
      },

      calculate(paciente, lang = 'pt') {
        const { peso = 70, idade = 65, sexo = 'M',
                fc = 80, paSistolica = 120,
                qtc = 430, qrs = 90, pr = 170,
                potassio = 4.0, magnesio = 2.0, calcio = 9.0,
                clcr = null, creatinina = 1.0,
                funcaoHepatica = 'normal',
                usoDigoxina = false, usoVarfarina = false,
                medicamentosQT = false, torsadesPreviaTorsades = false,
                miasteniaGravis = false, trombocitopeniaPrevia = false,
                icBaixa = false, indicacao = 'FA',
                brugadaIndicacao = false, qtCurto = false,
                gestante = false, lactante = false } = paciente;

        const alerts = [];
        let contraindicado = false;

        // Calcular ClCr
        let clcrCalc = clcr;
        if (!clcrCalc && creatinina > 0) {
          const k = sexo === 'F' ? 0.85 : 1.0;
          clcrCalc = Math.round(((140 - idade) * peso * k) / (72 * creatinina));
        }
        clcrCalc = clcrCalc || 80;

        // Contraindicações absolutas
        if (torsadesPreviaTorsades) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Torsades de Pointes prévia.', '⛔ CONTRAINDICADO: Torsades de Pointes previa.') });
          contraindicado = true;
        }
        if (miasteniaGravis) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Miastenia grave — quinidina bloqueia junção neuromuscular e pode precipitar crise.', '⛔ CONTRAINDICADO: Miastenia grave — quinidina bloquea unión neuromuscular y puede precipitar crisis.') });
          contraindicado = true;
        }
        if (trombocitopeniaPrevia) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ CONTRAINDICADO: Trombocitopenia imune prévia por quinidina — reação idiossincrática grave.', '⛔ CONTRAINDICADO: Trombocitopenia inmune previa por quinidina — reacción idiosincrásica grave.') });
          contraindicado = true;
        }

        // QTc
        if (qtc > 500) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — risco extremo de Torsades.`, `⛔ CONTRAINDICADO: QTc ${qtc} ms >500 ms — riesgo extremo de Torsades.`) });
          contraindicado = true;
        } else if (qtc > 450) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QTc ${qtc} ms — elevado. Monitorar rigorosamente. Suspender se QTc ≥500 ms.`, `⚠️ QTc ${qtc} ms — elevado. Monitorizar rigurosamente. Suspender si QTc ≥500 ms.`) });
        }

        // QRS
        if (qrs > 130) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ QRS ${qrs} ms muito alargado. Monitorar. Suspender se QRS alargar >50% do basal.`, `⚠️ QRS ${qrs} ms muy ensanchado. Monitorizar. Suspender si QRS ensancha >50% del basal.`) });
        }

        // Eletrólitos
        if (potassio < 3.5) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corrigir antes; risco aumentado de Torsades com quinidina.`, `⛔ K⁺ ${potassio} mEq/L — hipocalemia. Corregir antes; riesgo aumentado de Torsades con quinidina.`) });
          contraindicado = true;
        } else if (potassio < 4.0) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ K⁺ ${potassio} mEq/L — manter K⁺ >4.0 mEq/L durante uso.`, `⚠️ K⁺ ${potassio} mEq/L — mantener K⁺ >4,0 mEq/L durante uso.`) });
        }
        if (magnesio < 1.7) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corrigir antes; risco de Torsades.`, `⛔ Mg²⁺ ${magnesio} mg/dL — hipomagnesemia. Corregir antes; riesgo de Torsades.`) });
        }
        if (calcio < 8.5) {
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ Ca²⁺ ${calcio} mg/dL — hipocalcemia pode aumentar risco de Torsades. Corrigir.`, `⚠️ Ca²⁺ ${calcio} mg/dL — hipocalcemia puede aumentar riesgo de Torsades. Corregir.`) });
        }

        // FC / Hemodinâmica
        if (fc < 50) {
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ FC ${fc} bpm — bradicardia grave. Contraindicado.`, `⛔ FC ${fc} lpm — bradicardia grave. Contraindicado.`) });
          contraindicado = true;
        }
        if (paSistolica < 90) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Hipotensão grave (PAS <90 mmHg) — contraindicado.', '⛔ Hipotensión grave (PAS <90 mmHg) — contraindicado.') });
          contraindicado = true;
        }
        if (icBaixa) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ IC com baixo débito: quinidina tem efeito inotrópico negativo e vasodilatador. Usar com cautela.', '⚠️ IC con bajo gasto: quinidina tiene efecto inotrópico negativo y vasodilatador. Usar con precaución.') });
        }

        // Indicações especiais (Brugada / QT curto)
        if (brugadaIndicacao) {
          alerts.push({ tipo: 'info', msg: t(lang, '✅ Síndrome de Brugada — quinidina bloqueia a corrente transitória de K⁺ (Ito), reduzindo gradiente de repolarização. Uma das poucas opções farmacológicas. Uso EXCLUSIVAMENTE especializado.', '✅ Síndrome de Brugada — quinidina bloquea la corriente transitoria de K⁺ (Ito), reduciendo gradiente de repolarización. Una de las pocas opciones farmacológicas. Uso EXCLUSIVAMENTE especializado.') });
        }
        if (qtCurto) {
          alerts.push({ tipo: 'info', msg: t(lang, '✅ Síndrome do QT curto — quinidina prolonga QT e é uma das únicas opções farmacológicas disponíveis. Uso EXCLUSIVAMENTE especializado.', '✅ Síndrome de QT corto — quinidina prolonga QT y es una de las únicas opciones farmacológicas disponibles. Uso EXCLUSIVAMENTE especializado.') });
        }

        // Paradoxo vagolítico em flutter/FA sem bloqueio AV
        if ((indicacao === 'FA' || indicacao === 'flutter') && !contraindicado) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Efeito vagolítico: quinidina pode paradoxalmente AUMENTAR condução AV em flutter/FA e precipitar resposta ventricular rápida. Usar bloqueador AV (betabloqueador, verapamil ou diltiazem) concomitantemente.', '⚠️ Efecto vagolítico: quinidina puede paradójicamente AUMENTAR conducción AV en flutter/FA y precipitar respuesta ventricular rápida. Usar bloqueador AV (betabloqueante, verapamilo o diltiazem) concomitantemente.') });
        }

        // Interações
        if (usoDigoxina) {
          alerts.push({ tipo: 'danger', msg: t(lang, '🔴 Digoxina: quinidina aumenta significativamente os níveis séricos de digoxina (~2×). Reduzir dose de digoxina em 50% e monitorar nível sérico e sinais de toxicidade.', '🔴 Digoxina: quinidina aumenta significativamente los niveles séricos de digoxina (~2×). Reducir dosis de digoxina 50% y monitorizar nivel sérico y signos de toxicidad.') });
        }
        if (usoVarfarina) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Varfarina: quinidina pode aumentar INR. Monitorar INR após início/ajuste.', '⚠️ Warfarina: quinidina puede aumentar INR. Monitorizar INR tras inicio/ajuste.') });
        }
        if (medicamentosQT) {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Outros fármacos que prolongam QT (amiodarona, sotalol, dofetilida, macrolídeos, antipsicóticos) — CONTRAINDICADOS concomitantemente.', '⛔ Otros fármacos que prolongan QT (amiodarona, sotalol, dofetilida, macrólidos, antipsicóticos) — CONTRAINDICADOS concomitantemente.') });
          contraindicado = true;
        }

        // Renal
        let doseRec;
        if (clcrCalc > 50) {
          doseRec = '200–300 mg VO 6/6h (sulfato de quinidina)';
        } else if (clcrCalc >= 30) {
          doseRec = '200 mg VO 6/6h–8/8h — ClCr reduzido';
          alerts.push({ tipo: 'warning', msg: t(lang, `⚠️ ClCr ${clcrCalc} mL/min — reduzir dose e monitorar QTc.`, `⚠️ ClCr ${clcrCalc} mL/min — reducir dosis y monitorizar QTc.`) });
        } else if (clcrCalc >= 10) {
          doseRec = '200 mg VO 8/8h–12/12h — DRC moderada/grave';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC grave. Dose reduzida. Monitorar QTc, QRS e Torsades.`, `⛔ ClCr ${clcrCalc} mL/min — ERC grave. Dosis reducida. Monitorizar QTc, QRS y Torsades.`) });
        } else {
          doseRec = '200 mg/dia — evitar; risco alto de acúmulo';
          alerts.push({ tipo: 'danger', msg: t(lang, `⛔ ClCr ${clcrCalc} mL/min — DRC grave. Evitar quinidina.`, `⛔ ClCr ${clcrCalc} mL/min — ERC grave. Evitar quinidina.`) });
        }

        // Hepatático
        if (funcaoHepatica === 'grave') {
          alerts.push({ tipo: 'danger', msg: t(lang, '⛔ Insuficiência hepática grave — metabolismo reduzido; risco de acúmulo e toxicidade.', '⛔ Insuficiencia hepática grave — metabolismo reducido; riesgo de acumulación y toxicidad.') });
        } else if (funcaoHepatica === 'moderada') {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Insuficiência hepática moderada — reduzir dose e monitorar.', '⚠️ Insuficiencia hepática moderada — reducir dosis y monitorizar.') });
        }

        // Cinchonismo — aviso universal
        alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Cinchonismo: zumbido, cefaleia, náuseas, visão turva e confusão são sinais de toxicidade por quinidina. Informar paciente e suspender se ocorrerem.', '⚠️ Cinconismo: tinnitus, cefalea, náuseas, visión borrosa y confusión son signos de toxicidad por quinidina. Informar paciente y suspender si ocurren.') });

        // Gestante / Lactante
        if (gestante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Gestante: usar apenas se benefício superar risco — sob especialista. Risco de toxicidade materna e fetal.', '⚠️ Embarazada: usar solo si beneficio supera riesgo — bajo especialista. Riesgo de toxicidad materna y fetal.') });
        }
        if (lactante) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ Lactante: monitorar para diarreia, irritabilidade ou sinais hematológicos raros.', '⚠️ Lactante: monitorizar por diarrea, irritabilidad o signos hematológicos raros.') });
        }

        // Idoso
        if (idade >= 70) {
          alerts.push({ tipo: 'warning', msg: t(lang, '⚠️ ≥70 anos: maior risco de Torsades, quedas, interações e toxicidade. Preferir alternativas quando possível.', '⚠️ ≥70 años: mayor riesgo de Torsades, caídas, interacciones y toxicidad. Preferir alternativas cuando sea posible.') });
        }

        // Black Box
        alerts.push({ tipo: 'danger', msg: t(lang, '📦 BLACK BOX: Torsades de Pointes e morte súbita. Uso para arritmias não ameaçadoras pode aumentar mortalidade. Uso EXCLUSIVAMENTE especializado.', '📦 BLACK BOX: Torsades de Pointes y muerte súbita. Uso para arritmias no amenazantes puede aumentar mortalidad. Uso EXCLUSIVAMENTE especializado.') });

        return {
          dose: contraindicado
            ? t(lang, 'QUINIDINA CONTRAINDICADA — ver alertas.', 'QUINIDINA CONTRAINDICADA — ver alertas.')
            : doseRec,
          clcrEstimado: `${clcrCalc} mL/min`,
          apresentacao: t(lang, 'Comprimidos/cápsulas sulfato quinidina 200 mg | Formulações LP conforme disponibilidade', 'Comprimidos/cápsulas sulfato quinidina 200 mg | Formulaciones LP según disponibilidad'),
          classe: t(lang, 'Antiarrítmico Classe IA | Anticolinérgico (vagolítico) | Prolonga QRS + QT + PR | t½ 6–8 h', 'Antiarrítmico Clase IA | Anticolinérgico (vagolítico) | Prolonga QRS + QT + PR | t½ 6–8 h'),
          indicacoes: t(lang,
            ['FA/flutter selecionados (contexto especializado)', 'Arritmias ventriculares selecionadas', 'Síndrome de Brugada (opção especializada)', 'Síndrome do QT curto (opção especializada)'],
            ['FA/flutter seleccionados (contexto especializado)', 'Arritmias ventriculares seleccionadas', 'Síndrome de Brugada (opción especializada)', 'Síndrome de QT corto (opción especializada)']
          ),
          ajusteRenal: t(lang,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? '200–300 mg 6/6h' : clcrCalc >= 30 ? '200 mg 6/6h–8/8h' : clcrCalc >= 10 ? '200 mg 8/8h–12/12h' : '200 mg/dia (evitar)'}`,
            `ClCr ${clcrCalc} mL/min — ${clcrCalc > 50 ? '200–300 mg c/6h' : clcrCalc >= 30 ? '200 mg c/6–8h' : clcrCalc >= 10 ? '200 mg c/8–12h' : '200 mg/día (evitar)'}`
          ),
          efeitosAdversos: t(lang,
            ['Diarreia', 'Náuseas/Vômitos', 'Dor abdominal', 'Cefaleia', 'Zumbido', 'Tontura', 'Visão turva', '⚠️ Torsades de Pointes', '⚠️ TV/FV/Morte súbita', '⚠️ Cinchonismo grave', '⚠️ Trombocitopenia imune', '⚠️ Anemia hemolítica', '⚠️ Hepatotoxicidade'],
            ['Diarrea', 'Náuseas/Vómitos', 'Dolor abdominal', 'Cefalea', 'Tinnitus', 'Mareos', 'Visión borrosa', '⚠️ Torsades de Pointes', '⚠️ TV/FV/Muerte súbita', '⚠️ Cinconismo grave', '⚠️ Trombocitopenia inmune', '⚠️ Anemia hemolítica', '⚠️ Hepatotoxicidad']
          ),
          monitoramento: t(lang,
            ['ECG + QTc + QRS seriados', 'K⁺ + Mg²⁺ + Ca²⁺', 'Nível digoxina se associado (↑ ~2×)', 'INR se varfarina', 'Hemograma periódico (uso crônico)', 'TGO/TGP periódico', 'Sintomas de cinchonismo', 'Síncope como sinal de Torsades'],
            ['ECG + QTc + QRS seriados', 'K⁺ + Mg²⁺ + Ca²⁺', 'Nivel digoxina si asociado (↑ ~2×)', 'INR si warfarina', 'Hemograma periódico (uso crónico)', 'TGO/TGP periódico', 'Síntomas de cinconismo', 'Síncope como señal de Torsades']
          ),
          refs: ['ESC AF Guidelines', 'AHA/ACC/HRS Arrhythmia Guidelines', 'Brugada Syndrome Consensus', 'Goodman & Gilman', 'Lexicomp', 'FDA/DailyMed label'],
          alerts
        };
      }
    } /* fim quinidina */

  }); /* fim Object.assign CARDIO_DRUGS_DB — Grupo 17 (Antiarrítmicos finais: propafenona · quinidina) */

})(); /* fim da IIFE do módulo cardio */
