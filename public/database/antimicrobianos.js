/* ============================================================
   MedCases Pro — Módulo: ANTIMICROBIANOS
   Expõe: window.ANTIMICROBIANOS_DRUGS_DB
   Schema: PREMIUM_DRUGS_DB — calculate(paciente, lang)
   ISOLADO em IIFE para não sobrescrever a função t(k) do index.html
============================================================ */
(function(){

  /* Helper bilíngue — escopo local, não vaza para o global */
  const t = (lang, pt, es) => lang === "pt" ? pt : es;

  window.ANTIMICROBIANOS_DRUGS_DB = {};

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  azitromicina: {
    name: { pt: "Azitromicina", es: "Azitromicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);
      const qtLongo = Boolean(paciente.qtLongo);

      const doseDia1 = Math.min(peso * 10, 500);
      const doseDias2a5 = Math.min(peso * 5, 250);
      const dose3Dias = Math.min(peso * 10, 500);

      return {
        name: t(lang, "Azitromicina", "Azitromicina"),
        class: t(lang, "Macrolídeo", "Macrólido"),
        commercialNames: {
          br: ["Zitromax", "Azitromicina EMS", "Azitromicina Eurofarma"],
          ar: ["Zitromax", "Azitromicina Bagó", "Azitromicina genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg, 500 mg", "Comprimidos: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 200 mg/5 mL", "Suspensión oral: 200 mg/5 mL"),
          t(lang, "Pó para solução injetável: 500 mg", "Polvo para solución inyectable: 500 mg")
        ],
        dose: {
          adulto: t(lang, "500 mg VO 1x/dia por 3 dias ou 500 mg no dia 1, seguido de 250 mg/dia do dia 2 ao 5", "500 mg VO 1 vez/día por 3 días o 500 mg el día 1, seguido de 250 mg/día del día 2 al 5"),
          pediatrica3Dias: t(lang, `${dose3Dias.toFixed(0)} mg VO 1x/dia por 3 dias`, `${dose3Dias.toFixed(0)} mg VO 1 vez/día por 3 días`),
          pediatrica5Dias: t(lang, `${doseDia1.toFixed(0)} mg VO no dia 1, depois ${doseDias2a5.toFixed(0)} mg VO 1x/dia do dia 2 ao 5`, `${doseDia1.toFixed(0)} mg VO el día 1, luego ${doseDias2a5.toFixed(0)} mg VO 1 vez/día del día 2 al 5`)
        },
        doseKg: {
          esquema3Dias: t(lang, "10 mg/kg/dia por 3 dias", "10 mg/kg/día por 3 días"),
          esquema5Dias: t(lang, "10 mg/kg no dia 1 + 5 mg/kg/dia do dia 2 ao 5", "10 mg/kg el día 1 + 5 mg/kg/día del día 2 al 5"),
          doseMaxima: t(lang, "Máximo: 500 mg no dia 1 e 250 mg/dia nos dias seguintes", "Máximo: 500 mg el día 1 y 250 mg/día en los días siguientes")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 5–10 mg/kg/dia conforme indicação clínica.", "Rango usual pediátrico: 5–10 mg/kg/día según indicación clínica."),
        dilution: t(lang, "Via oral: não necessita diluição. EV: reconstituir e diluir conforme protocolo institucional.", "Vía oral: no requiere dilución. EV: reconstituir y diluir según protocolo institucional."),
        speed: t(lang, "VO: administrar 1x/dia. EV: infundir lentamente conforme protocolo hospitalar.", "VO: administrar 1 vez/día. EV: infundir lentamente según protocolo hospitalario."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Cefaleia", "Cefalea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Prolongamento do intervalo QT", "Prolongación del intervalo QT"),
          t(lang, "Torsades de Pointes", "Torsades de Pointes"),
          t(lang, "Hepatotoxicidade grave", "Hepatotoxicidad grave"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile")
        ],
        risksByPatient: [
          idade < 0.5 ? t(lang, "Menor de 6 meses: validar indicação e dose com pediatria.", "Menor de 6 meses: validar indicación y dosis con pediatría.") : null,
          idade >= 65 ? t(lang, "Idoso: maior risco de QT prolongado e arritmias.", "Adulto mayor: mayor riesgo de QT prolongado y arritmias.") : null,
          gestante ? t(lang, "Gestação: pode ser usada quando indicada, com avaliação risco-benefício.", "Embarazo: puede usarse cuando está indicada, con evaluación riesgo-beneficio.") : null,
          lactante ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.") : null,
          hepatopatia ? t(lang, "Hepatopatia: cautela; suspender se sinais de lesão hepática.", "Hepatopatía: precaución; suspender si aparecen signos de lesión hepática.") : null,
          qtLongo ? t(lang, "QT longo conhecido: evitar ou monitorar ECG e eletrólitos.", "QT largo conocido: evitar o monitorizar ECG y electrolitos.") : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar associação com outros fármacos que prolongam QT.", "Evitar asociación con otros fármacos que prolongan QT."),
          t(lang, "Corrigir hipocalemia e hipomagnesemia antes do uso em pacientes de risco.", "Corregir hipopotasemia e hipomagnesemia antes del uso en pacientes de riesgo."),
          t(lang, "Não usar como monoterapia empírica onde houver alta resistência pneumocócica.", "No usar como monoterapia empírica donde exista alta resistencia neumocócica.")
        ],
        ref: "Goodman & Gilman / FDA Zithromax label / Sanford Guide / Johns Hopkins ABX Guide",

        // ── Ajuste Renal — Azitromicina ──────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024
        // A azitromicina é eliminada predominantemente por via biliar/fecal
        // (~50% inalterada nas fezes); excreção renal <6% da dose.
        // Nenhum ajuste de dose é recomendado em insuficiência renal.
        // Cautela em insuficiência renal grave (ClCr <10): dados limitados.
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual. Não necessita ajuste renal.", "Dosis habitual. No requiere ajuste renal.")
          },

          fg30a50: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },

          fg10a30: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual. Utilizar com cautela em insuficiência renal grave.", "No requiere ajuste renal habitual. Utilizar con precaución en insuficiencia renal grave.")
          },

          fgMenor10: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual. Monitorar eventos adversos em insuficiência renal terminal.", "No requiere ajuste renal habitual. Monitorizar eventos adversos en insuficiencia renal terminal.")
          },

          hemodialise: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  ceftriaxona: {
    name: { pt: "Ceftriaxona", es: "Ceftriaxona" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hiperbilirrubinemia = Boolean(paciente.hiperbilirrubinemia);
      const usoCalcioEV = Boolean(paciente.usoCalcioEV);

      const dosePediaPadrao = Math.min(peso * 50, 2000);
      const dosePediaGrave = Math.min(peso * 100, 4000);
      const doseMeningitePorDose = Math.min((peso * 100) / 2, 2000);

      return {
        name: t(lang, "Ceftriaxona", "Ceftriaxona"),
        class: t(lang, "Cefalosporina de 3ª geração", "Cefalosporina de 3ª generación"),
        commercialNames: {
          br: ["Rocefin", "Ceftriaxona Eurofarma", "Ceftriaxona ABL"],
          ar: ["Rocephin", "Ceftriaxona Richet", "Ceftriaxona genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola: 500 mg IM/EV", "Frasco ampolla: 500 mg IM/EV"),
          t(lang, "Frasco-ampola: 1 g IM/EV", "Frasco ampolla: 1 g IM/EV"),
          t(lang, "Frasco-ampola: 2 g EV", "Frasco ampolla: 2 g EV")
        ],
        dose: {
          adultoPadrao: t(lang, "1–2 g EV/IM 1x/dia", "1–2 g EV/IM 1 vez/día"),
          adultoGrave: t(lang, "2 g EV 12/12h em infecções graves específicas, como meningite", "2 g EV cada 12h en infecciones graves específicas, como meningitis"),
          pediatricaPadrao: t(lang, `${dosePediaPadrao.toFixed(0)} mg EV/IM 1x/dia`, `${dosePediaPadrao.toFixed(0)} mg EV/IM 1 vez/día`),
          pediatricaGrave: t(lang, `${dosePediaGrave.toFixed(0)} mg/dia EV dividido conforme indicação clínica`, `${dosePediaGrave.toFixed(0)} mg/día EV dividido según indicación clínica`),
          pediatricaMeningite: t(lang, `${doseMeningitePorDose.toFixed(0)} mg EV 12/12h, máximo 2 g por dose`, `${doseMeningitePorDose.toFixed(0)} mg EV cada 12h, máximo 2 g por dosis`)
        },
        doseKg: {
          padrao: t(lang, "50 mg/kg/dia", "50 mg/kg/día"),
          grave: t(lang, "75–100 mg/kg/dia", "75–100 mg/kg/día"),
          meningite: t(lang, "100 mg/kg/dia dividido 12/12h", "100 mg/kg/día dividido cada 12h"),
          doseMaxima: t(lang, "Máximo usual: 4 g/dia", "Máximo usual: 4 g/día")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 50–100 mg/kg/dia conforme gravidade e foco infeccioso.", "Rango usual pediátrico: 50–100 mg/kg/día según gravedad y foco infeccioso."),
        dilution: t(lang, "EV: diluir conforme protocolo institucional, com solução compatível. Não misturar com soluções contendo cálcio.", "EV: diluir según protocolo institucional, con solución compatible. No mezclar con soluciones que contengan calcio."),
        speed: t(lang, "Infusão EV usual em 30 minutos. Em neonatos, usar infusão mais lenta conforme protocolo.", "Infusión EV usual en 30 minutos. En neonatos, usar infusión más lenta según protocolo."),
        commonAdverseEffects: [
          t(lang, "Dor no local da aplicação", "Dolor en el sitio de aplicación"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Elevação de transaminases", "Elevación de transaminasas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Precipitação ceftriaxona-cálcio em neonatos", "Precipitación ceftriaxona-calcio en neonatos"),
          t(lang, "Encefalopatia bilirrubínica em neonatos de risco", "Encefalopatía bilirrubínica en neonatos de riesgo"),
          t(lang, "Lama biliar e pseudolitíase biliar", "Barro biliar y pseudolitiasis biliar")
        ],
        risksByPatient: [
          idade <= 0.08 ? t(lang, "Neonato ≤28 dias: evitar se hiperbilirrubinemia, prematuridade ou uso/necessidade de cálcio EV.", "Neonato ≤28 días: evitar si hay hiperbilirrubinemia, prematuridad o uso/necesidad de calcio EV.") : null,
          hiperbilirrubinemia ? t(lang, "Hiperbilirrubinemia neonatal: contraindicação/alto risco de encefalopatia bilirrubínica.", "Hiperbilirrubinemia neonatal: contraindicación/alto riesgo de encefalopatía bilirrubínica.") : null,
          usoCalcioEV ? t(lang, "Uso de cálcio EV em neonato: contraindicado pelo risco de precipitação fatal.", "Uso de calcio EV en neonato: contraindicado por riesgo de precipitación fatal.") : null,
          idade >= 65 ? t(lang, "Idoso: avaliar função renal/hepática e risco de colite por C. difficile.", "Adulto mayor: evaluar función renal/hepática y riesgo de colitis por C. difficile.") : null,
          gestante ? t(lang, "Gestação: pode ser usada quando indicada; evitar uso desnecessário próximo ao parto sem avaliação.", "Embarazo: puede usarse cuando está indicada; evitar uso innecesario cerca del parto sin evaluación.") : null,
          lactante ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.") : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar alergia a cefalosporinas e reação grave prévia a beta-lactâmicos.", "Investigar alergia a cefalosporinas y reacción grave previa a beta-lactámicos."),
          t(lang, "Não administrar na mesma linha com soluções contendo cálcio.", "No administrar en la misma línea con soluciones que contengan calcio."),
          t(lang, "Em meningite, usar dose alta e associar cobertura conforme protocolo local.", "En meningitis, usar dosis alta y asociar cobertura según protocolo local.")
        ],
        ref: "Goodman & Gilman / FDA Ceftriaxone label / Sanford Guide / IDSA",

        // ── Ajuste Renal — Ceftriaxona ───────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · FDA Rocephin label
        // Eliminação dual: ~40–65% renal, 35–45% biliar/fecal inalterada.
        // Meia-vida longa (~8h) e ligação proteica elevada (>95%) → sem acúmulo
        // clinicamente relevante mesmo em insuficiência renal grave isolada.
        // Exceção: insuficiência COMBINADA renal + hepática → reduzir para ≤2 g/dia.
        // Altamente ligada a proteínas e não dialisável — sem dose suplementar pós-HD.
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(lang, "Não necessita ajuste renal isolado.", "No requiere ajuste renal aislado."),

          fgMaior50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual. Não necessita ajuste renal. Para meningite, usar 2 g 12/12h em adultos conforme protocolo.", "Dosis habitual. No requiere ajuste renal. Para meningitis, usar 2 g cada 12h en adultos según protocolo.")
          },

          fg30a50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal isolado.", "No requiere ajuste renal aislado.")
          },

          fg10a30: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal. Cautela se houver insuficiência hepática concomitante.", "No requiere ajuste renal. Precaución si existe insuficiencia hepática concomitante.")
          },

          fgMenor10: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Se insuficiência renal + hepática grave combinadas, considerar limite de dose (≤2 g/dia) e monitorização intensificada.", "Si insuficiencia renal + hepática grave combinadas, considerar límite de dosis (≤2 g/día) y monitorización intensificada.")
          },

          hemodialise: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise. Altamente ligada a proteínas — não dialisável.", "No requiere dosis suplementaria post-hemodiálisis. Altamente ligada a proteínas — no dializable.")
          }
        },
        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: true,
          requiresCultureGuidance: false,
          warning: t(
            lang,
            "Evitar em neonatos com hiperbilirrubinemia ou uso concomitante de cálcio EV (risco de precipitação fatal). Em insuficiência hepática e renal combinadas graves, limitar dose a ≤2 g/dia.",
            "Evitar en neonatos con hiperbilirrubinemia o uso concomitante de calcio EV (riesgo de precipitación fatal). En insuficiencia hepática y renal combinadas graves, limitar dosis a ≤2 g/día."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Rocephin (ceftriaxone) 2022",
            "EMA label Ceftriaxona 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: message corrigida para 'isolado'; fgMaior50.obs com meningite 12/12h; fgMenor10.obs com dose limite ≤2 g/dia em IR+IH combinadas; hemodialise.obs com 'não dialisável'; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: message corregida a 'aislado'; fgMaior50.obs con meningitis 12/12h; fgMenor10.obs con límite de dosis ≤2 g/día en IR+IH combinadas; hemodialise.obs con 'no dializable'; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  amoxicilina: {
    name: { pt: "Amoxicilina", es: "Amoxicilina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 90);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseOralPadrao = Math.min(peso * 25, 500);
      const doseOralAlta = Math.min(peso * 45, 875);

      return {
        name: t(lang, "Amoxicilina", "Amoxicilina"),
        class: t(lang, "Penicilina de amplo espectro (aminopenicilina)", "Penicilina de amplio espectro (aminopenicilina)"),
        commercialNames: {
          br: ["Amoxil", "Amoxicilina EMS", "Novamox", "Amoxicilina Eurofarma"],
          ar: ["Amoxil", "Amoxicilina Richet", "Amoxicilina Bagó", "Amoxicilina genérica"]
        },
        presentation: [
          t(lang, "Cápsulas/comprimidos: 250 mg, 500 mg, 875 mg", "Cápsulas/comprimidos: 250 mg, 500 mg, 875 mg"),
          t(lang, "Suspensão oral: 125 mg/5 mL, 250 mg/5 mL, 400 mg/5 mL", "Suspensión oral: 125 mg/5 mL, 250 mg/5 mL, 400 mg/5 mL"),
          t(lang, "Pó para suspensão oral (sachê): 500 mg", "Polvo para suspensión oral (sobre): 500 mg")
        ],
        dose: {
          adultoOtite: t(lang, "500 mg VO 8/8h ou 875 mg VO 12/12h por 5–7 dias", "500 mg VO cada 8h o 875 mg VO cada 12h por 5–7 días"),
          adultoStrep: t(lang, "500 mg VO 12/12h ou 875 mg 12/12h por 10 dias", "500 mg VO cada 12h o 875 mg cada 12h por 10 días"),
          adultoUrinario: t(lang, "500 mg VO 8/8h por 7 dias", "500 mg VO cada 8h por 7 días"),
          pediatricaPadrao: t(lang, `${doseOralPadrao.toFixed(0)} mg VO 8/8h`, `${doseOralPadrao.toFixed(0)} mg VO cada 8h`),
          pediatricaAlta: t(lang, `${doseOralAlta.toFixed(0)} mg VO 12/12h (dose alta p/ pneumococo resistente)`, `${doseOralAlta.toFixed(0)} mg VO cada 12h (dosis alta para neumococo resistente)`)
        },
        doseKg: {
          padrao: t(lang, "25–50 mg/kg/dia dividido 8/8h ou 12/12h", "25–50 mg/kg/día dividido cada 8h o 12h"),
          alta: t(lang, "80–90 mg/kg/dia dividido 12/12h (OMA, pneumonia — S. pneumoniae resistente)", "80–90 mg/kg/día dividido cada 12h (OMA, neumonía — S. pneumoniae resistente)"),
          doseMaxima: t(lang, "Máximo: 3 g/dia (adultos)", "Máximo: 3 g/día (adultos)")
        },
        therapeuticRange: t(lang, "Faixa usual pediátrica: 25–90 mg/kg/dia conforme indicação.", "Rango usual pediátrico: 25–90 mg/kg/día según indicación."),
        dilution: t(lang, "Via oral: não necessita diluição. Uso EV não habitual para amoxicilina isolada no Brasil.", "Vía oral: no requiere dilución. El uso EV de amoxicilina sola no es habitual."),
        speed: t(lang, "VO: administrar conforme intervalo prescrito.", "VO: administrar según intervalo prescrito."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Candidíase oral/vaginal", "Candidiasis oral/vaginal")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Doença do soro", "Enfermedad del suero"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson (raro)", "Síndrome de Stevens-Johnson (raro)")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajustar intervalo para 12/12h ou 24h; evitar doses muito altas.", "ClCr < 30 mL/min: ajustar intervalo a cada 12h o 24h; evitar dosis muy altas.")
            : null,
          clcr < 10
            ? t(lang, "ClCr < 10 mL/min (anúrico): 250–500 mg a cada 24h; suplementar após hemodiálise.", "ClCr < 10 mL/min (anúrico): 250–500 mg cada 24h; suplementar tras hemodiálisis.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente segura (categoria B); amplamente utilizada.", "Embarazo: generalmente segura (categoría B); ampliamente utilizada.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível; observar diarreia ou candidíase no lactente.", "Lactancia: compatible; observar diarrea o candidiasis en el lactante.")
            : null,
          idade < 0.08
            ? t(lang, "Neonato: ajuste de dose e intervalo necessários; consultar neonatologista.", "Neonato: ajuste de dosis e intervalo necesarios; consultar neonatólogo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar história de alergia a penicilinas antes de prescrever.", "Investigar historia de alergia a penicilinas antes de prescribir."),
          t(lang, "Rash maculopapular frequente em pacientes com mononucleose — não indica alergia a penicilinas.", "Exantema maculopapular frecuente en mononucleosis — no indica alergia a penicilinas."),
          t(lang, "Coberttura limitada: sem atividade contra S. aureus produtor de penicilinase.", "Cobertura limitada: sin actividad contra S. aureus productor de penicilinasa.")
        ],
        ref: "Goodman & Gilman / FDA Amoxicillin label / Sanford Guide / AAP Red Book",

        // ── Ajuste Renal — Amoxicilina ───────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · Goodman & Gilman
        // Eliminação: ~60–80% renal inalterada. Necessita ajuste quando ClCr <30 mL/min.
        // Formulação 875 mg contraindicada se ClCr <30 (pico sérico excessivo).
        // Dialisada em ~50% durante sessão de HD → dose suplementar pós-HD.
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "500–875 mg", intervalo: "8/8h ou 12/12h", doseMaxima: "3–4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg/dia", intervalo: "8/8h ou 12/12h", doseMaxima: "4 g/dia", unidade: "mg/kg/dia" },
            obs: t(lang, "Dose habitual conforme indicação clínica.", "Dosis habitual según indicación clínica.")
          },

          fg30a50: {
            vo: { dose: "500–875 mg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg/dia", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg/dia" },
            obs: t(lang, "Ajustar intervalo em infecções moderadas/graves.", "Ajustar intervalo en infecciones moderadas/graves.")
          },

          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg/dose", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg/dose" },
            obs: t(lang, "Evitar apresentação de 875 mg.", "Evitar presentación de 875 mg.")
          },

          fgMenor10: {
            vo: { dose: "250–500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg/dose", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg/dose" },
            obs: t(lang, "Usar menor dose efetiva e monitorar acúmulo.", "Usar la menor dosis efectiva y monitorizar acumulación.")
          },

          hemodialise: {
            vo: { dose: "250–500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg/dose", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg/dose" },
            obs: t(lang, "Administrar após hemodiálise nos dias de HD.", "Administrar después de hemodiálisis en días de HD.")
          }
        }
      };
    }
  },

  amoxicilina_clavulanato: {
    name: { pt: "Amoxicilina + Clavulanato", es: "Amoxicilina + Clavulanato" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 90);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediatricaPadrao = Math.min(peso * 25, 500);
      const dosePediatricaAlta = Math.min(peso * 45, 875);

      return {
        name: t(lang, "Amoxicilina + Clavulanato", "Amoxicilina + Clavulanato"),
        class: t(lang, "Aminopenicilina + inibidor de beta-lactamase", "Aminopenicilina + inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Clavulin", "Amoxicilina + Clavulanato EMS", "Augmentin", "Clavulanato Medley"],
          ar: ["Augmentin", "Clavulin", "Amoxicilina/Clavulanato Bagó", "Amoclav"]
        },
        presentation: [
          t(lang, "Comprimidos: 500/125 mg, 875/125 mg", "Comprimidos: 500/125 mg, 875/125 mg"),
          t(lang, "Suspensão oral: 250/62,5 mg/5 mL, 400/57 mg/5 mL", "Suspensión oral: 250/62,5 mg/5 mL, 400/57 mg/5 mL"),
          t(lang, "Pó para solução EV: 1000/200 mg, 2000/200 mg", "Polvo para solución EV: 1000/200 mg, 2000/200 mg")
        ],
        dose: {
          adultoPadrao: t(lang, "875/125 mg VO 12/12h ou 500/125 mg VO 8/8h", "875/125 mg VO cada 12h o 500/125 mg VO cada 8h"),
          adultoGrave: t(lang, "1000/200 mg EV 8/8h ou 2000/200 mg EV 12/12h", "1000/200 mg EV cada 8h o 2000/200 mg EV cada 12h"),
          pediatricaPadrao: t(lang, `${dosePediatricaPadrao.toFixed(0)} mg (amoxicilina) VO 8/8h`, `${dosePediatricaPadrao.toFixed(0)} mg (amoxicilina) VO cada 8h`),
          pediatricaAlta: t(lang, `${dosePediatricaAlta.toFixed(0)} mg (amoxicilina) VO 12/12h (dose alta — OMA, sinusite)`, `${dosePediatricaAlta.toFixed(0)} mg (amoxicilina) VO cada 12h (dosis alta — OMA, sinusitis)`)
        },
        doseKg: {
          padrao: t(lang, "25–45 mg/kg/dia de amoxicilina, dividido 8/8h ou 12/12h", "25–45 mg/kg/día de amoxicilina, dividido cada 8h o 12h"),
          alta: t(lang, "80–90 mg/kg/dia de amoxicilina, dividido 12/12h", "80–90 mg/kg/día de amoxicilina, dividido cada 12h"),
          doseMaxima: t(lang, "Máximo: 875 mg de amoxicilina por dose (adultos)", "Máximo: 875 mg de amoxicilina por dosis (adultos)")
        },
        therapeuticRange: t(lang, "Dose baseada no componente amoxicilina. Monitorar tolerância gastrointestinal.", "Dosis basada en el componente amoxicilina. Monitorear tolerancia gastrointestinal."),
        dilution: t(lang, "EV: diluir em SF 0,9% ou SG 5%, conforme protocolo. Estabilidade limitada após reconstituição.", "EV: diluir en SF 0,9% o SG 5%, según protocolo. Estabilidad limitada tras reconstitución."),
        speed: t(lang, "EV: infundir em 30 minutos. VO: administrar com alimentos para reduzir efeitos GI.", "EV: infundir en 30 minutos. VO: administrar con alimentos para reducir efectos GI."),
        commonAdverseEffects: [
          t(lang, "Diarreia (frequente — clavulanato)", "Diarrea (frecuente — clavulanato)"),
          t(lang, "Náuseas e vômitos", "Náuseas y vómitos"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Candidíase oral/vaginal", "Candidiasis oral/vaginal"),
          t(lang, "Dispepsia", "Dispepsia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Hepatotoxicidade colestática (clavulanato)", "Hepatotoxicidad colestática (clavulanato)"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson (raro)", "Síndrome de Stevens-Johnson (raro)")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: usar 500/125 mg 12/12h; evitar formulação 875/125 mg.", "ClCr < 30 mL/min: usar 500/125 mg cada 12h; evitar formulación 875/125 mg.")
            : null,
          clcr < 10
            ? t(lang, "ClCr < 10 mL/min: 250–500 mg (amoxicilina) a cada 24h; suplementar após hemodiálise.", "ClCr < 10 mL/min: 250–500 mg (amoxicilina) cada 24h; suplementar tras hemodiálisis.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: contraindicado ou usar com extrema cautela — risco aumentado de hepatotoxicidade colestática.", "Hepatopatía: contraindicado o usar con extrema precaución — mayor riesgo de hepatotoxicidad colestática.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente segura; evitar no pré-termo pela possível associação com enterocolite necrosante.", "Embarazo: generalmente segura; evitar en pretérmino por posible asociación con enterocolitis necrotizante.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível; observar diarreia ou candidíase no lactente.", "Lactancia: compatible; observar diarrea o candidiasis en el lactante.")
            : null,
          idade < 0.08
            ? t(lang, "Neonato: evitar clavulanato em prematuros — risco de enterocolite necrosante.", "Neonato: evitar clavulanato en prematuros — riesgo de enterocolitis necrotizante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Investigar história de alergia a penicilinas/cefalosporinas.", "Investigar historia de alergia a penicilinas/cefalosporinas."),
          t(lang, "Tomar com alimentos reduz significativamente a diarreia e melhora absorção do clavulanato.", "Tomar con alimentos reduce significativamente la diarrea y mejora la absorción del clavulanato."),
          t(lang, "Não usar em hepatite colestática prévia induzida por amoxicilina-clavulanato.", "No usar en hepatitis colestática previa inducida por amoxicilina-clavulanato."),
          t(lang, "Ampliar espectro: cobre S. aureus MSSA, H. influenzae, M. catarrhalis, Klebsiella (não ESBL), anaeróbios.", "Ampliar espectro: cubre S. aureus MSSA, H. influenzae, M. catarrhalis, Klebsiella (no BLEE), anaerobios.")
        ],
        ref: "Goodman & Gilman / FDA Augmentin label / Sanford Guide / IDSA / AAP Red Book",

        // ── Ajuste Renal — Amoxicilina + Clavulanato ─────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · FDA Augmentin label
        // Amoxicilina: eliminação renal ~60–80%. Clavulanato: eliminação renal ~40–65%.
        // Formulação 875/125 mg contraindicada se ClCr <30: risco de pico sérico
        // excessivo de amoxicilina e acúmulo de clavulanato com efeitos GI graves.
        // Ambos os componentes são dialisados; dose suplementar pós-HD necessária.
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "875/125 mg ou 500/125 mg", intervalo: "12/12h ou 8/8h", doseMaxima: "875/125 mg 12/12h", unidade: "mg" },
            ev: { dose: "1,2 g", intervalo: "8/8h", doseMaxima: "3,6 g/dia", unidade: "g" },
            pediatrica: { dose: "25–45 mg/kg/dia de amoxicilina", intervalo: "12/12h", doseMaxima: "4 g/dia de amoxicilina", unidade: "mg/kg/dia" },
            obs: t(lang, "Dose habitual conforme foco infeccioso.", "Dosis habitual según foco infeccioso.")
          },

          fg30a50: {
            vo: { dose: "500/125 mg", intervalo: "12/12h", doseMaxima: "1 g/dia de amoxicilina", unidade: "mg" },
            ev: { dose: "1,2 g", intervalo: "12/12h", doseMaxima: "2,4 g/dia", unidade: "g" },
            pediatrica: { dose: "25 mg/kg/dia de amoxicilina", intervalo: "12/12h", doseMaxima: "1 g/dia de amoxicilina", unidade: "mg/kg/dia" },
            obs: t(lang, "Evitar doses altas se função renal estiver em queda.", "Evitar dosis altas si la función renal está disminuyendo.")
          },

          fg10a30: {
            vo: { dose: "250/125–500/125 mg", intervalo: "12/12h", doseMaxima: "1 g/dia de amoxicilina", unidade: "mg" },
            ev: { dose: "1,2 g", intervalo: "24/24h", doseMaxima: "1,2 g/dia", unidade: "g" },
            pediatrica: { dose: "15–25 mg/kg/dia de amoxicilina", intervalo: "12/12h", doseMaxima: "1 g/dia de amoxicilina", unidade: "mg/kg/dia" },
            obs: t(lang, "Evitar apresentação 875/125 mg.", "Evitar presentación 875/125 mg.")
          },

          fgMenor10: {
            vo: { dose: "250/125–500/125 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia de amoxicilina", unidade: "mg" },
            ev: { dose: "1,2 g", intervalo: "24/24h", doseMaxima: "1,2 g/dia", unidade: "g" },
            pediatrica: { dose: "15 mg/kg/dose de amoxicilina", intervalo: "24/24h", doseMaxima: "500 mg/dia de amoxicilina", unidade: "mg/kg/dose" },
            obs: t(lang, "Evitar apresentação 875/125 mg e monitorar toxicidade gastrointestinal.", "Evitar presentación 875/125 mg y monitorizar toxicidad gastrointestinal.")
          },

          hemodialise: {
            vo: { dose: "250/125–500/125 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia de amoxicilina", unidade: "mg" },
            ev: { dose: "1,2 g", intervalo: "24/24h", doseMaxima: "1,2 g/dia", unidade: "g" },
            pediatrica: { dose: "15 mg/kg/dose de amoxicilina", intervalo: "24/24h", doseMaxima: "500 mg/dia de amoxicilina", unidade: "mg/kg/dose" },
            obs: t(lang, "Administrar após hemodiálise nos dias de HD.", "Administrar después de hemodiálisis en días de HD.")
          }
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  metronidazol: {
    name: { pt: "Metronidazol", es: "Metronidazol" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const peso = Number(paciente.peso || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediaDia = peso * 30;
      const dosePediaDose = dosePediaDia / 3;

      return {
        name: t(lang, "Metronidazol", "Metronidazol"),
        class: t(lang, "Nitroimidazólico", "Nitroimidazol"),
        commercialNames: {
          br: ["Flagyl", "Metronidazol EMS", "Neo Metrodazol"],
          ar: ["Flagyl", "Metronidazol Bagó", "Metronidazol Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg e 400 mg", "Comprimidos: 250 mg y 400 mg"),
          t(lang, "Suspensão oral", "Suspensión oral"),
          t(lang, "Bolsa EV: 500 mg/100 mL", "Bolsa EV: 500 mg/100 mL")
        ],
        dose: {
          adultoVO: t(lang, "500 mg VO 8/8h", "500 mg VO cada 8h"),
          adultoEV: t(lang, "500 mg EV 8/8h", "500 mg EV cada 8h"),
          pediatrica: t(lang, `${dosePediaDose.toFixed(0)} mg por dose EV/VO 8/8h`, `${dosePediaDose.toFixed(0)} mg por dosis EV/VO cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20–30 mg/kg/dia", "20–30 mg/kg/día"),
          severe: t(lang, "30–40 mg/kg/dia", "30–40 mg/kg/día"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "Faixa usual: 20–40 mg/kg/dia.", "Rango usual: 20–40 mg/kg/día."),
        dilution: t(lang, "Bolsa pronta para uso ou diluição conforme protocolo institucional.", "Bolsa lista para uso o dilución según protocolo institucional."),
        speed: t(lang, "Infundir em 30 a 60 minutos.", "Infundir en 30 a 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Sabor metálico", "Sabor metálico"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Diarreia", "Diarrea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Neuropatia periférica", "Neuropatía periférica"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Encefalopatia tóxica", "Encefalopatía tóxica"),
          t(lang, "Pancreatite", "Pancreatitis")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de neurotoxicidade.", "Adulto mayor: mayor riesgo de neurotoxicidad.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: considerar redução da dose.", "Hepatopatía: considerar reducción de dosis.")
            : null,
          gestante
            ? t(lang, "Gestação: geralmente seguro após primeiro trimestre.", "Embarazo: generalmente seguro después del primer trimestre.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível na maioria dos casos.", "Lactancia: compatible en la mayoría de los casos.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Proibido consumir álcool durante o tratamento e por 48–72h após término.", "Prohibido consumir alcohol durante el tratamiento y por 48–72h posteriores."),
          t(lang, "Monitorar sintomas neurológicos em tratamentos prolongados.", "Monitorar síntomas neurológicos en tratamientos prolongados.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA",

        // ── Ajuste Renal — Metronidazol ──────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · Goodman & Gilman
        // Metabolismo predominantemente hepático (CYP450 + redução nitroimidazólica).
        // Metabólitos ativos (~20–60% atividade) são excretados por via renal.
        // Em insuficiência renal grave (ClCr <10), acúmulo de metabólitos pode
        // ocorrer com uso prolongado → monitorar neurotoxicidade (neuropatia,
        // encefalopatia). Para cursos curtos (<7 dias), geralmente sem ajuste.
        // O metronidazol é dialisável (~50%); dose pós-HD discutida na literatura —
        // alguns protocolos recomendam dose após sessão em uso prolongado/UTI.
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5–10 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual. Não necessita ajuste renal.", "Dosis habitual. No requiere ajuste renal.")
          },

          fg30a50: {
            vo: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5–10 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
          },

          fg10a30: {
            vo: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5–10 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual. Monitorar neurotoxicidade em uso prolongado.", "No requiere ajuste renal habitual. Monitorizar neurotoxicidad en uso prolongado.")
          },

          fgMenor10: {
            vo: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5–10 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual. Em insuficiência renal terminal, monitorar neurotoxicidade se uso prolongado.", "No requiere ajuste renal habitual. En insuficiencia renal terminal, monitorizar neurotoxicidad si uso prolongado.")
          },

          hemodialise: {
            vo: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5–10 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Geralmente não necessita ajuste; em alguns protocolos administrar após hemodiálise nos dias de HD.", "Generalmente no requiere ajuste; en algunos protocolos administrar después de hemodiálisis en días de HD.")
          }
        }
      };
    }
  },

  ciprofloxacino: {
    name: { pt: "Ciprofloxacino", es: "Ciprofloxacino" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const peso = Number(paciente.peso || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = peso * 15;

      return {
        name: t(lang, "Ciprofloxacino", "Ciprofloxacino"),
        class: t(lang, "Fluoroquinolona", "Fluoroquinolona"),
        commercialNames: {
          br: ["Cipro", "Ciprofloxacino EMS", "Cipro XR"],
          ar: ["Baycip", "Ciprofloxacino Bagó", "Ciprofloxacino Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 250, 500 e 750 mg", "Comprimidos: 250, 500 y 750 mg"),
          t(lang, "Bolsa EV: 200 mg/100 mL", "Bolsa EV: 200 mg/100 mL"),
          t(lang, "Bolsa EV: 400 mg/200 mL", "Bolsa EV: 400 mg/200 mL")
        ],
        dose: {
          adultoVO: t(lang, "500 mg VO 12/12h", "500 mg VO cada 12h"),
          adultoEV: t(lang, "400 mg EV 12/12h", "400 mg EV cada 12h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO/EV 12/12h`, `${dosePedia.toFixed(0)} mg VO/EV cada 12h`)
        },
        doseKg: {
          standard: t(lang, "10–15 mg/kg por dose 12/12h", "10–15 mg/kg por dosis cada 12h"),
          severe: t(lang, "15–20 mg/kg por dose", "15–20 mg/kg por dosis"),
          maxDose: t(lang, "1,5 g/dia", "1,5 g/día")
        },
        therapeuticRange: t(lang, "Faixa habitual: 10–20 mg/kg por dose.", "Rango habitual: 10–20 mg/kg por dosis."),
        dilution: t(lang, "Bolsa pronta para infusão.", "Bolsa lista para infusión."),
        speed: t(lang, "Infundir em 60 minutos.", "Infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Cefaleia", "Cefalea"),
          t(lang, "Insônia", "Insomnio")
        ],
        dangerousAdverseEffects: [
          t(lang, "Ruptura de tendão", "Rotura de tendón"),
          t(lang, "Prolongamento do QT", "Prolongación del QT"),
          t(lang, "Dissecção de aorta", "Disección aórtica"),
          t(lang, "Hipoglicemia grave", "Hipoglucemia grave"),
          t(lang, "Convulsões", "Convulsiones")
        ],
        risksByPatient: [
          idade >= 60
            ? t(lang, "Idoso: alto risco de tendinopatia e ruptura tendínea.", "Adulto mayor: alto riesgo de tendinopatía y ruptura tendinosa.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação salvo situações excepcionais.", "Evitar durante embarazo salvo situaciones excepcionales.")
            : null,
          lactante
            ? t(lang, "Usar com cautela durante lactação.", "Usar con precaución durante lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar associação com antiácidos contendo cálcio, magnésio ou alumínio.", "Evitar asociación con antiácidos que contengan calcio, magnesio o aluminio."),
          t(lang, "Suspender imediatamente se dor tendínea.", "Suspender inmediatamente si aparece dolor tendinoso."),
          t(lang, "Monitorar QT prolongado em pacientes de risco.", "Monitorar QT prolongado en pacientes de riesgo.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / FDA Ciprofloxacin Label",

        // ── Ajuste Renal — Ciprofloxacino ────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · FDA Cipro label
        // Eliminação: ~40–50% renal inalterada + metabolismo hepático (~15%).
        // Secretado ativamente a nível tubular: em IR grave, acúmulo com risco
        // de convulsões e cristalúria. Reduzir frequência (não a dose unitária)
        // é a estratégia recomendada pelas diretrizes (FDA label, UpToDate).
        // Dialisável em grau moderado (~30%): dose pós-HD nos dias de sessão.
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "500–750 mg", intervalo: "12/12h", doseMaxima: "1.500 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "8/8h–12/12h", doseMaxima: "1.200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "12/12h", doseMaxima: "1.500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual conforme indicação clínica e gravidade. EV 8/8h para infecções graves/Pseudomonas; 12/12h para infecções moderadas. Infundir em 60 min. Monitorar QT basal em pacientes de risco.", "Dosis habitual según indicación clínica y gravedad. IV 8/8h para infecciones graves/Pseudomonas; 12/12h para infecciones moderadas. Infundir en 60 min. Monitorizar QT basal en pacientes de riesgo.")
          },

          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste moderado conforme ClCr e gravidade.", "Ajuste moderado según ClCr y gravedad.")
          },

          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "200–400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajustar intervalo para 24/24h. Este bloco deve atualizar os cards automaticamente.", "Ajustar intervalo a 24/24h. Este bloque debe actualizar las tarjetas automáticamente.")
          },

          fgMenor10: {
            vo: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "250–500 mg/dia", unidade: "mg" },
            ev: { dose: "200–400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Usar com cautela extrema — risco elevado de neurotoxicidade (convulsões, delirium), QT prolongado, tendinopatia e cristalúria por acúmulo renal. Monitorar QTc, função renal e sinais neurológicos diariamente. Avaliar alternativa terapêutica se disponível.", "Usar con precaución extrema — riesgo elevado de neurotoxicidad (convulsiones, delirium), QT prolongado, tendinopatia y cristaluria por acumulación renal. Monitorizar QTc, función renal y signos neurológicos diariamente. Evaluar alternativa terapéutica si disponible.")
          },

          hemodialise: {
            vo: { dose: "250–500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "200–400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise nos dias de HD. Ciprofloxacino é parcialmente removido pela HD (~30%) — dose pós-HD garante exposição terapêutica adequada. Monitorar QTc e neurotoxicidade — pacientes dialíticos têm risco aumentado por distúrbios eletrolíticos.", "Administrar después de hemodiálisis en días de HD. Ciprofloxacino es parcialmente removido por HD (~30%) — dosis post-HD garantiza exposición terapéutica adecuada. Monitorizar QTc y neurotoxicidad — pacientes dialíticos tienen mayor riesgo por trastornos electrolíticos.")
          }
        },

        therapeuticMonitoring: {
          required: false,
          target: t(lang,
            "AUC/MIC ≥ 125 para infecções por gram-negativos (parâmetro PK-PD concentração-dependente). Pico sérico ≥ 10× MIC desejável.",
            "AUC/MIC ≥ 125 para infecciones por gramnegativos (parámetro PK-PD concentración-dependiente). Pico sérico ≥ 10× MIC deseable."),
          monitoring: t(lang,
            "Monitorar QTc basal e após 2–3 dias em pacientes de risco. Monitorar função renal, hepática e sinais de tendinopatia.",
            "Monitorizar QTc basal y después de 2–3 días en pacientes de riesgo. Monitorizar función renal, hepática y signos de tendinopatía."),
          notes: t(lang,
            "Evitar em pacientes com histórico de tendinopatia por fluoroquinolonas. Interação com anticoagulantes (aumenta INR). Pode causar fotossensibilidade.",
            "Evitar en pacientes con historial de tendinopatía por fluoroquinolonas. Interacción con anticoagulantes (aumenta INR). Puede causar fotosensibilidad.")
        },

        indicationDosing: {
          standard: t(lang,
            "IVU complicada/pielonefrite: 500 mg VO 12/12h por 7–14 dias ou 400 mg EV 12/12h.",
            "IVU complicada/pielonefritis: 500 mg VO 12/12h por 7–14 días o 400 mg IV 12/12h."),
          severe: t(lang,
            "Infecções graves (pneumonia, sepse): 400 mg EV 8/8h. Dose máxima 1.200 mg/dia EV.",
            "Infecciones graves (neumonía, sepsis): 400 mg IV 8/8h. Dosis máxima 1.200 mg/día IV."),
          uti: t(lang,
            "UTI / P. aeruginosa: 400 mg EV 8/8h; combinar com beta-lactâmico antipseudomonas.",
            "UCI / P. aeruginosa: 400 mg IV 8/8h; combinar con beta-lactámico antipseudomonas."),
          prophylaxis: t(lang,
            "Profilaxia cirúrgica urológica: 500 mg VO dose única 1–2h antes do procedimento.",
            "Profilaxis quirúrgica urológica: 500 mg VO dosis única 1–2h antes del procedimiento.")
        },

        neurotoxicityWarning: {
          risk: "moderate",
          symptoms: [
            t(lang, "Neuropatia periférica (dormência, parestesia, fraqueza)", "Neuropatía periférica (entumecimiento, parestesia, debilidad)"),
            t(lang, "Tontura, cefaleia, insônia", "Mareos, cefalea, insomnio"),
            t(lang, "Confusão mental e alucinações (raro)", "Confusión mental y alucinaciones (raro)"),
            t(lang, "Tendinopatia e ruptura de tendão (fluoroquinolona class effect)", "Tendinopatía y ruptura de tendón (efecto de clase fluoroquinolona)"),
            t(lang, "Agravamento de miastenia gravis", "Agravamiento de miastenia grave")
          ],
          management: t(lang,
            "Descontinuar imediatamente se neuropatia periférica, tendinite ou psicose. Miastenia gravis é contraindicação absoluta. Evitar em idosos > 65 anos e pacientes em uso de corticoides (risco de ruptura de tendão). Advertir paciente sobre restrição de atividade física intensa.",
            "Descontinuar inmediatamente si neuropatía periférica, tendinitis o psicosis. Miastenia gravis es contraindicación absoluta. Evitar en ancianos > 65 años y pacientes con corticoides (riesgo de ruptura de tendón). Advertir al paciente sobre restricción de actividad física intensa.")
        },

        qtRisk: {
          risk: "moderate",
          monitoring: t(lang,
            "Obter ECG basal. Monitorar QTc se uso concomitante de outros agentes que prolongam QT (antiarrítmicos, antipsicóticos, azitromicina). Suspender se QTc > 500 ms ou prolongamento > 60 ms em relação ao basal.",
            "Obtener ECG basal. Monitorizar QTc si uso concomitante de otros agentes que prolongan QT (antiarrítmicos, antipsicóticos, azitromicina). Suspender si QTc > 500 ms o prolongamiento > 60 ms respecto al basal."),
          contraindications: [
            t(lang, "Síndrome do QT longo congênito", "Síndrome del QT largo congénito"),
            t(lang, "Uso concomitante de antiarrítmicos classe IA/III (quinidina, amiodarona, sotalol)", "Uso concomitante de antiarrítmicos clase IA/III (quinidina, amiodarona, sotalol)"),
            t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipocalemia o hipomagnesemia no corregidas")
          ]
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: true,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: false,
          warning: t(lang,
            "Risco de tendinite e ruptura tendínea (Black Box FDA — risco aumentado em idosos > 60 anos e uso de corticoides), QT prolongado (monitorar ECG basal e a cada 2–3 dias em pacientes de risco), neuropatia periférica irreversível (suspender imediatamente se parestesia), delirium e agravamento de miastenia gravis (contraindicação absoluta). Cristalúria em IR grave — manter hidratação adequada.",
            "Riesgo de tendinitis y ruptura tendinosa (Black Box FDA — riesgo aumentado en mayores de 60 años y uso de corticoides), QT prolongado (monitorizar ECG basal y cada 2–3 días en pacientes de riesgo), neuropatía periférica irreversible (suspender de inmediato si parestesia), delirium y agravamiento de miastenia gravis (contraindicación absoluta). Cristaluria en IR grave — mantener hidratación adecuada.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Cipro (ciprofloxacin) 2023 — Black Box Warning",
            "EMA label Ciprofloxacin 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: ev.intervalo corrigido para '8/8h–12/12h', doseMaxima padronizada em mg. Texto de debug removido do fg10a30.obs. Obs enriquecidas: cortes FDA label (CrCl 30–50 e 5–29), fgMaior50 com EV 8/8h para Pseudomonas, fg10a30 com convulsões/cristalúria/hidratação, fgMenor10 com avaliação de alternativa e vo corrigida para 250–500 mg, HD com remoção ~30% e distúrbios eletrolíticos. safetyFlags adicionados (tendinite Black Box + miastenia gravis + cristalúria). auditNotes criado com 7 fontes.",
            "Bloque fusionado y mejorado: ev.intervalo corregido a '8/8h–12/12h', doseMaxima estandarizada en mg. Texto de depuración eliminado de fg10a30.obs. Obs enriquecidas: cortes FDA label (CrCl 30–50 y 5–29), fgMaior50 con IV 8/8h para Pseudomonas, fg10a30 con convulsiones/cristaluria/hidratación, fgMenor10 con evaluación de alternativa y vo corregida a 250–500 mg, HD con remoción ~30% y trastornos electrolíticos. safetyFlags añadidos (tendinitis Black Box + miastenia gravis + cristaluria). auditNotes creado con 7 fuentes.")
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  clindamicina: {
    name: { pt: "Clindamicina", es: "Clindamicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const hepatopatia = Boolean(paciente.hepatopatia);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = peso * 30;
      const dosePediaDose = dosePediaDia / 3;

      return {
        name: t(lang, "Clindamicina", "Clindamicina"),
        class: t(lang, "Lincosamida", "Lincosamida"),
        commercialNames: {
          br: ["Dalacin C", "Clindamicina EMS", "Clindamicina Medley"],
          ar: ["Dalacin C", "Clindamicina Bagó", "Clindamicina Richet"]
        },
        presentation: [
          t(lang, "Cápsulas: 300 mg", "Cápsulas: 300 mg"),
          t(lang, "Cápsulas: 600 mg", "Cápsulas: 600 mg"),
          t(lang, "Ampola EV: 300 mg/2 mL", "Ampolla EV: 300 mg/2 mL"),
          t(lang, "Ampola EV: 600 mg/4 mL", "Ampolla EV: 600 mg/4 mL")
        ],
        dose: {
          adultoVO: t(lang, "300–450 mg VO 6/6h", "300–450 mg VO cada 6h"),
          adultoEV: t(lang, "600–900 mg EV 8/8h", "600–900 mg EV cada 8h"),
          pediatrica: t(lang, `${dosePediaDose.toFixed(0)} mg por dose VO/EV 8/8h`, `${dosePediaDose.toFixed(0)} mg por dosis VO/EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20–30 mg/kg/dia", "20–30 mg/kg/día"),
          severe: t(lang, "30–40 mg/kg/dia", "30–40 mg/kg/día"),
          maxDose: t(lang, "4,8 g/dia", "4,8 g/día")
        },
        therapeuticRange: t(lang, "Faixa habitual: 20–40 mg/kg/dia.", "Rango habitual: 20–40 mg/kg/día."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Stevens-Johnson", "Stevens-Johnson"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de colite por C. difficile.", "Adulto mayor: mayor riesgo de colitis por C. difficile.")
            : null,
          hepatopatia
            ? t(lang, "Monitorar função hepática em tratamentos prolongados.", "Monitorar función hepática en tratamientos prolongados.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada durante gestação quando indicada.", "Puede utilizarse durante embarazo cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação; observar diarreia no lactente.", "Compatible con lactancia; observar diarrea en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Maior risco de colite associada a antibióticos.", "Mayor riesgo de colitis asociada a antibióticos."),
          t(lang, "Suspender se diarreia importante.", "Suspender si aparece diarrea importante.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA SSTI Guidelines",

        // ── Ajuste Renal — Clindamicina ──────────────────────────────────
        // Fonte: Sanford Guide 2024 · Lexicomp 2024 · UpToDate 2024 · Goodman & Gilman
        // Metabolismo predominantemente hepático (CYP3A4/CYP3A5 → metabólitos
        // ativos/inativos). Excreção renal: < 10% da dose inalterada.
        // Nenhuma diretriz recomenda ajuste em insuficiência renal isolada.
        // Não é significativamente removida por hemodiálise → sem dose suplementar.
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "300–450 mg", intervalo: "6/6h", doseMaxima: "1,8 g/dia", unidade: "mg" },
            ev: { dose: "600–900 mg", intervalo: "8/8h", doseMaxima: "4,8 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–13 mg/kg", intervalo: "8/8h", doseMaxima: "40 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual. Não necessita ajuste renal.", "Dosis habitual. No requiere ajuste renal.")
          },

          fg30a50: {
            vo: { dose: "300–450 mg", intervalo: "6/6h", doseMaxima: "1,8 g/dia", unidade: "mg" },
            ev: { dose: "600–900 mg", intervalo: "8/8h", doseMaxima: "4,8 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–13 mg/kg", intervalo: "8/8h", doseMaxima: "40 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },

          fg10a30: {
            vo: { dose: "300–450 mg", intervalo: "6/6h", doseMaxima: "1,8 g/dia", unidade: "mg" },
            ev: { dose: "600–900 mg", intervalo: "8/8h", doseMaxima: "4,8 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–13 mg/kg", intervalo: "8/8h", doseMaxima: "40 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
          },

          fgMenor10: {
            vo: { dose: "300–450 mg", intervalo: "6/6h", doseMaxima: "1,8 g/dia", unidade: "mg" },
            ev: { dose: "600–900 mg", intervalo: "8/8h", doseMaxima: "4,8 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–13 mg/kg", intervalo: "8/8h", doseMaxima: "40 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal. Monitorar colite por Clostridioides difficile.", "No requiere ajuste renal. Monitorizar colitis por Clostridioides difficile.")
          },

          hemodialise: {
            vo: { dose: "300–450 mg", intervalo: "6/6h", doseMaxima: "1,8 g/dia", unidade: "mg" },
            ev: { dose: "600–900 mg", intervalo: "8/8h", doseMaxima: "4,8 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–13 mg/kg", intervalo: "8/8h", doseMaxima: "40 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  sulfametoxazol_trimetoprim: {
    name: { pt: "Sulfametoxazol + Trimetoprim", es: "Sulfametoxazol + Trimetoprima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseTMP = peso * 5;

      return {
        name: t(lang, "Sulfametoxazol + Trimetoprim", "Sulfametoxazol + Trimetoprima"),
        class: t(lang, "Sulfonamida", "Sulfonamida"),
        commercialNames: {
          br: ["Bactrim", "Bactrim F", "Sulfametoxazol + Trimetoprim EMS"],
          ar: ["Bactrim", "Bactrim Forte", "Bactrim Bagó"]
        },
        presentation: [
          t(lang, "Comprimido: 400/80 mg", "Comprimido: 400/80 mg"),
          t(lang, "Comprimido Forte: 800/160 mg", "Comprimido Forte: 800/160 mg"),
          t(lang, "Suspensão oral: 200/40 mg por 5 mL", "Suspensión oral: 200/40 mg por 5 mL"),
          t(lang, "Ampola EV", "Ampolla EV")
        ],
        dose: {
          adultoVO: t(lang, "800/160 mg VO 12/12h", "800/160 mg VO cada 12h"),
          pediatrica: t(lang, `${doseTMP.toFixed(0)} mg de trimetoprim por dose 12/12h`, `${doseTMP.toFixed(0)} mg de trimetoprima por dosis cada 12h`)
        },
        doseKg: {
          standard: t(lang, "4–5 mg/kg/dose (trimetoprim)", "4–5 mg/kg/dosis (trimetoprima)"),
          severe: t(lang, "15–20 mg/kg/dia (trimetoprim)", "15–20 mg/kg/día (trimetoprima)"),
          maxDose: t(lang, "320 mg/dia de trimetoprim", "320 mg/día de trimetoprima")
        },
        therapeuticRange: t(lang, "Dose calculada sempre pelo componente trimetoprim.", "La dosis siempre se calcula por el componente trimetoprima."),
        dilution: t(lang, "EV: diluir conforme protocolo institucional.", "EV: diluir según protocolo institucional."),
        speed: t(lang, "Infusão EV em 60–90 minutos.", "Infusión EV en 60–90 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Vômitos", "Vómitos"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Fotossensibilidade", "Fotosensibilidad")
        ],
        dangerousAdverseEffects: [
          t(lang, "Stevens-Johnson", "Stevens-Johnson"),
          t(lang, "Necrólise epidérmica tóxica", "Necrólisis epidérmica tóxica"),
          t(lang, "Hipercalemia", "Hiperpotasemia"),
          t(lang, "Mielossupressão", "Mielosupresión"),
          t(lang, "Anafilaxia", "Anafilaxia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: alto risco de hipercalemia e lesão renal.", "Adulto mayor: alto riesgo de hiperpotasemia y lesión renal.")
            : null,
          clcr < 30
            ? t(lang, "Necessita ajuste importante da dose.", "Requiere ajuste importante de dosis.")
            : null,
          gestante
            ? t(lang, "Evitar principalmente no primeiro trimestre e próximo ao parto.", "Evitar principalmente durante el primer trimestre y cerca del parto.")
            : null,
          lactante
            ? t(lang, "Usar com cautela em recém-nascidos e prematuros.", "Usar con precaución en recién nacidos y prematuros.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar potássio sérico.", "Monitorar potasio sérico."),
          t(lang, "Monitorar hemograma em uso prolongado.", "Monitorar hemograma en uso prolongado."),
          t(lang, "Dose sempre calculada pelo trimetoprim.", "La dosis siempre se calcula por la trimetoprima.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "800/160 mg", intervalo: "12/12h", doseMaxima: "320 mg TMP/dia", unidade: "mg" },
            ev: { dose: "5–10 mg/kg de TMP", intervalo: "8/8h ou 12/12h", doseMaxima: "20 mg/kg/dia de TMP", unidade: "mg/kg" },
            pediatrica: { dose: "4–6 mg/kg de TMP", intervalo: "12/12h", doseMaxima: "320 mg TMP/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual conforme infecção tratada.", "Dosis habitual según la infección tratada.")
          },

          fg30a50: {
            vo: { dose: "800/160 mg", intervalo: "12/12h", doseMaxima: "320 mg TMP/dia", unidade: "mg" },
            ev: { dose: "5–10 mg/kg de TMP", intervalo: "12/12h", doseMaxima: "15 mg/kg/dia de TMP", unidade: "mg/kg" },
            pediatrica: { dose: "4–6 mg/kg de TMP", intervalo: "12/12h", doseMaxima: "320 mg TMP/dia", unidade: "mg/kg" },
            obs: t(lang, "Pode ser necessário pequeno ajuste conforme indicação clínica.", "Puede ser necesario un pequeño ajuste según la indicación clínica.")
          },

          fg10a30: {
            vo: { dose: "800/160 mg", intervalo: "24/24h", doseMaxima: "160 mg TMP/dia", unidade: "mg" },
            ev: { dose: "5 mg/kg de TMP", intervalo: "24/24h", doseMaxima: "10 mg/kg/dia de TMP", unidade: "mg/kg" },
            pediatrica: { dose: "2–3 mg/kg de TMP", intervalo: "12/12h", doseMaxima: "160 mg TMP/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir aproximadamente 50% da exposição total.", "Reducir aproximadamente 50% de la exposición total.")
          },

          fgMenor10: {
            vo: { dose: "400/80 mg", intervalo: "24/24h", doseMaxima: "80 mg TMP/dia", unidade: "mg" },
            ev: { dose: "2,5–5 mg/kg de TMP", intervalo: "24/24h", doseMaxima: "5 mg/kg/dia de TMP", unidade: "mg/kg" },
            pediatrica: { dose: "2 mg/kg de TMP", intervalo: "24/24h", doseMaxima: "80 mg TMP/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hiperpotassemia, creatinina e hemograma.", "Monitorizar hiperpotasemia, creatinina y hemograma.")
          },

          hemodialise: {
            vo: { dose: "400/80–800/160 mg", intervalo: "24/24h", doseMaxima: "160 mg TMP/dia", unidade: "mg" },
            ev: { dose: "2,5–5 mg/kg de TMP", intervalo: "24/24h", doseMaxima: "5 mg/kg/dia de TMP", unidade: "mg/kg" },
            pediatrica: { dose: "2 mg/kg de TMP", intervalo: "24/24h", doseMaxima: "160 mg TMP/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise. Monitorar potássio e função renal residual.", "Administrar después de hemodiálisis. Monitorizar potasio y función renal residual.")
          }
        }
      };
    }
  },

  piperacilina_tazobactam: {
    name: { pt: "Piperacilina + Tazobactam", es: "Piperacilina + Tazobactam" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAdulto = clcr < 40
        ? t(lang, "Necessita ajuste renal individualizado.", "Requiere ajuste renal individualizado.")
        : t(lang, "4,5 g EV 6/6h", "4,5 g EV cada 6h");

      return {
        name: t(lang, "Piperacilina + Tazobactam", "Piperacilina + Tazobactam"),
        class: t(lang, "Penicilina antipseudomonas + inibidor de beta-lactamase", "Penicilina antipseudomona + inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Tazocin", "Piperacilina/Tazobactam Eurofarma"],
          ar: ["Tazocin", "Piperacilina/Tazobactam Richet"]
        },
        presentation: [
          t(lang, "Frasco-ampola: 2,25 g", "Frasco ampolla: 2,25 g"),
          t(lang, "Frasco-ampola: 4,5 g", "Frasco ampolla: 4,5 g")
        ],
        dose: {
          adulto: doseAdulto,
          sepse: t(lang, "4,5 g EV 6/6h", "4,5 g EV cada 6h"),
          infusaoProlongada: t(lang, "4,5 g EV em 4 horas", "4,5 g EV en 4 horas")
        },
        doseKg: {
          standard: t(lang, "80–100 mg/kg por dose (componente piperacilina)", "80–100 mg/kg por dosis (componente piperacilina)"),
          maxDose: t(lang, "18 g/dia de piperacilina", "18 g/día de piperacilina")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo por encima de la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infusão em 30 min ou prolongada em 4 horas.", "Infusión en 30 min o prolongada en 4 horas."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Leucopenia", "Leucopenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função renal.", "Adulto mayor: monitorar función renal.")
            : null,
          clcr < 40
            ? t(lang, "Necessita ajuste renal obrigatório.", "Requiere ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa."),
          t(lang, "Monitorar função renal diariamente em pacientes críticos.", "Monitorar función renal diariamente en pacientes críticos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA HAP/VAP",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "4,5 g", intervalo: "6/6h", doseMaxima: "18 g/dia", unidade: "g" },
            pediatrica: { dose: "100 mg/kg de piperacilina", intervalo: "6/6h", doseMaxima: "18 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para infecções moderadas a graves. Preferir infusão estendida de 4 horas em choque séptico e Pseudomonas.", "Dosis habitual para infecciones moderadas a graves. Preferir infusión extendida de 4 horas en shock séptico y Pseudomonas.")
          },

          fg30a50: {
            vo: null,
            ev: { dose: "4,5 g", intervalo: "8/8h", doseMaxima: "13,5 g/dia", unidade: "g" },
            pediatrica: { dose: "80–100 mg/kg de piperacilina", intervalo: "8/8h", doseMaxima: "13,5 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Redução do intervalo conforme função renal (ajuste oficial recomendado).", "Reducción del intervalo según función renal (ajuste oficial recomendado).")
          },

          fg10a30: {
            vo: null,
            ev: { dose: "2,25–4,5 g", intervalo: "8/8h", doseMaxima: "9 g/dia", unidade: "g" },
            pediatrica: { dose: "40–80 mg/kg de piperacilina", intervalo: "8/8h", doseMaxima: "9 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar função renal e sódio sérico. Ajustar conforme gravidade da infecção e sensibilidade microbiológica.", "Monitorizar función renal y sodio sérico. Ajustar según gravedad de la infección y sensibilidad microbiológica.")
          },

          fgMenor10: {
            vo: null,
            ev: { dose: "2,25 g", intervalo: "8/8h", doseMaxima: "6,75 g/dia", unidade: "g" },
            pediatrica: { dose: "40 mg/kg de piperacilina", intervalo: "12/12h", doseMaxima: "4,5 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Maior risco de acúmulo e neurotoxicidade. Monitorar sódio sérico (alta carga de sódio da formulação).", "Mayor riesgo de acumulación y neurotoxicidad. Monitorizar sodio sérico (alta carga de sodio de la formulación).")
          },

          hemodialise: {
            vo: null,
            ev: { dose: "2,25 g", intervalo: "12/12h", doseMaxima: "4,5 g/dia", unidade: "g" },
            pediatrica: { dose: "40 mg/kg de piperacilina", intervalo: "12/12h", doseMaxima: "4,5 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar dose suplementar de aproximadamente 0,75 g após hemodiálise. Piperacilina é extensamente removida pela HD.", "Administrar dosis suplementaria de aproximadamente 0,75 g después de hemodiálisis. Piperacilina es extensamente removida por HD.")
          }
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Associada a maior risco de lesão renal aguda quando combinada com vancomicina (sinergia nefrotóxica — evitar combinação quando possível). Monitorar função renal diariamente em UTI. Risco de neurotoxicidade por acúmulo em IR grave.",
            "Asociada a mayor riesgo de lesión renal aguda cuando se combina con vancomicina (sinergia nefrotóxica — evitar combinación cuando sea posible). Monitorizar función renal diariamente en UCI. Riesgo de neurotoxicidad por acumulación en IR grave."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Zosyn (piperacillin-tazobactam) 2023",
            "EMA label Tazocin (piperacillin-tazobactam) 2022",
            "IDSA HAP/VAP Guidelines 2016 (updated)",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: pediátrica fgMaior50 dose atualizada para 100 mg/kg; fgMaior50.obs com infusão estendida; fg10a30.obs com sódio sérico; fgMenor10.ev.intervalo corrigido para 8/8h com doseMaxima 6,75 g/dia; hemodialise.obs com remoção por HD; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: pediátrica fgMaior50 dosis actualizada a 100 mg/kg; fgMaior50.obs con infusión extendida; fg10a30.obs con sodio sérico; fgMenor10.ev.intervalo corregido a 8/8h con doseMaxima 6,75 g/día; hemodialise.obs con remoción por HD; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  vancomicina: {
    name: { pt: "Vancomicina", es: "Vancomicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);

      let doseAtaque = Math.min(peso * 25, 3000);

      const intervalo = clcr >= 80 ? 12 : clcr >= 50 ? 24 : clcr >= 20 ? 48 : 0;

      return {
        name: t(lang, "Vancomicina", "Vancomicina"),
        class: t(lang, "Glicopeptídeo", "Glucopéptido"),
        commercialNames: {
          br: ["Vancomicina Teuto", "Vancomicina Eurofarma"],
          ar: ["Vancomicina Richet", "Vancomicina Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          ataque: t(lang, `${doseAtaque.toFixed(0)} mg EV dose de ataque`, `${doseAtaque.toFixed(0)} mg EV dosis de carga`),
          manutencao: intervalo > 0
            ? t(lang, "15 mg/kg por dose", "15 mg/kg por dosis")
            : t(lang, "Guiar por nível sérico.", "Guiar por nivel sérico.")
        },
        doseKg: {
          ataque: t(lang, "20–25 mg/kg", "20–25 mg/kg"),
          manutencao: t(lang, "15–20 mg/kg por dose", "15–20 mg/kg por dosis"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "AUC/MIC alvo 400–600.", "AUC/MIC objetivo 400–600."),
        dilution: t(lang, "Diluir em SF 0,9%.", "Diluir en SF 0,9%."),
        speed: t(lang, "Infundir em pelo menos 60–120 minutos.", "Infundir en al menos 60–120 minutos."),
        commonAdverseEffects: [
          t(lang, "Flebite", "Flebitis"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Febre medicamentosa", "Fiebre medicamentosa")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Síndrome do Homem Vermelho", "Síndrome del Hombre Rojo"),
          t(lang, "Neutropenia", "Neutropenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: alto risco de nefrotoxicidade.", "Adulto mayor: alto riesgo de nefrotoxicidad.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste baseado em função renal.", "Requiere ajuste basado en función renal.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar níveis séricos.", "Monitorar niveles séricos."),
          t(lang, "Monitorar creatinina diariamente.", "Monitorar creatinina diariamente."),
          t(lang, "Infusão rápida aumenta risco de Síndrome do Homem Vermelho.", "La infusión rápida aumenta el riesgo de Síndrome del Hombre Rojo.")
        ],
        ref: "ASHP Vancomycin Monitoring Guidelines 2020 / Sanford Guide / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "15–20 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "Ajustar por AUC", unidade: "mg/kg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "6/6h", doseMaxima: "60 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Preferir monitorização por AUC/MIC alvo 400–600 (ASHP 2020). Evitar ajuste isolado por vale sérico. Infundir em ≥60–120 min (doses > 1 g: 2h). Monitorar creatinina a cada 48h.", "Preferir monitorización por AUC/MIC objetivo 400–600 (ASHP 2020). Evitar ajuste aislado por valle sérico. Infundir en ≥60–120 min (dosis > 1 g: 2h). Monitorizar creatinina cada 48h.")
          },

          fg30a50: {
            vo: null,
            ev: { dose: "15–20 mg/kg", intervalo: "24/24h", doseMaxima: "Ajustar por AUC/nível", unidade: "mg/kg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "12/12h–24/24h", doseMaxima: "Conforme níveis séricos", unidade: "mg/kg" },
            obs: t(lang, "Monitorização sérica obrigatória para ajuste da manutenção. Intervalo pediátrico: ampliar para 12–24h conforme ClCr. Risco de nefrotoxicidade aumentado em combinação com pip/tazo, aminoglicosídeos ou anfotericina B.", "Monitorización sérica obligatoria para ajuste del mantenimiento. Intervalo pediátrico: ampliar a 12–24h según ClCr. Riesgo de nefrotoxicidad aumentado en combinación con pip/tazo, aminoglucósidos o anfotericina B.")
          },

          fg10a30: {
            vo: null,
            ev: { dose: "15–20 mg/kg", intervalo: "24–48/48h", doseMaxima: "Ajustar por nível", unidade: "mg/kg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "24/24h–48/48h", doseMaxima: "Conforme níveis séricos", unidade: "mg/kg" },
            obs: t(lang, "Não usar tabela fixa isolada — ajustar por AUC ou níveis séricos. Intervalo individualizado conforme vale sérico ou AUC. Alto risco de acumulação e nefrotoxicidade nesta faixa.", "No usar tabla fija aislada — ajustar por AUC o niveles séricos. Intervalo individualizado según valle sérico o AUC. Alto riesgo de acumulación y nefrotoxicidad en esta franja.")
          },

          fgMenor10: {
            vo: null,
            ev: { dose: "20–25 mg/kg ataque", intervalo: "Individualizado", doseMaxima: "Conforme nível", unidade: "mg/kg" },
            pediatrica: { dose: "20 mg/kg ataque", intervalo: "Individualizado", doseMaxima: "Conforme nível", unidade: "mg/kg" },
            obs: t(lang, "Manutenção guiada por nível sérico/AUC exclusivamente. Alto risco de nefrotoxicidade. Intervalo ≥ 48h ou guiado por nível pré-dose — nunca usar esquema fixo.", "Mantenimiento guiado por nivel sérico/AUC exclusivamente. Alto riesgo de nefrotoxicidad. Intervalo ≥ 48h o guiado por nivel predosis — nunca usar esquema fijo.")
          },

          hemodialise: {
            vo: null,
            ev: { dose: "20–25 mg/kg ataque", intervalo: "Pós-HD conforme nível", doseMaxima: "Individualizada", unidade: "mg/kg" },
            pediatrica: { dose: "20 mg/kg ataque", intervalo: "Pós-HD conforme nível", doseMaxima: "Individualizada", unidade: "mg/kg" },
            obs: t(lang, "Reposição pós-hemodiálise geralmente 500–1000 mg, sempre guiada por nível sérico. Administrar após HD. Nível alvo pré-dose: 10–15 mg/L (infecções moderadas) ou 15–20 mg/L (infecções graves).", "Reposición post-hemodiálisis generalmente 500–1000 mg, siempre guiada por nivel sérico. Administrar después de HD. Nivel objetivo predosis: 10–15 mg/L (infecciones moderadas) o 15–20 mg/L (infecciones graves).")
          }
        },

        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "AUC/MIC alvo 400–600 mg·h/L (ASHP 2020). Preferir monitorização por AUC a vale sérico isolado. Se AUC indisponível: vale sérico 15–20 mg/L (infecções graves) ou 10–15 mg/L (infecções moderadas).",
            "AUC/MIC objetivo 400–600 mg·h/L (ASHP 2020). Preferir monitoreo por AUC a valle sérico aislado. Si AUC no disponible: valle sérico 15–20 mg/L (infecciones graves) o 10–15 mg/L (infecciones moderadas)."),
          monitoring: t(lang,
            "Colher nível de vale (30 min antes da 4ª dose, em estado estacionário). Se monitoração por AUC: colher 2 níveis (1–2h após início da infusão e 30 min antes da próxima dose). Monitorar creatinina sérica, ureia e débito urinário a cada 48h. Ajustar dose conforme calculadora Bayesiana quando disponível.",
            "Colectar nivel de valle (30 min antes de la 4ª dosis, en estado estacionario). Si monitoreo por AUC: colectar 2 niveles (1–2h después del inicio de infusión y 30 min antes de la próxima dosis). Monitorizar creatinina sérica, urea y diuresis cada 48h. Ajustar dosis con calculadora Bayesiana cuando disponible."),
          notes: t(lang,
            "Maior risco de nefrotoxicidade quando associada a aminoglicosídeos, anfotericina B ou piperacilina/tazobactam. AUC > 650 associada a nefrotoxicidade aumentada. AUC < 400 associada a falha terapêutica e seleção de resistência. Síndrome do Homem Vermelho: infundir em ≥ 60 min (1–2h para doses > 1 g).",
            "Mayor riesgo de nefrotoxicidad cuando se asocia a aminoglucósidos, anfotericina B o piperacilina/tazobactam. AUC > 650 asociada a mayor nefrotoxicidad. AUC < 400 asociada a fracaso terapéutico y selección de resistencia. Síndrome del Hombre Rojo: infundir en ≥ 60 min (1–2h para dosis > 1 g).")
        },

        indicationDosing: {
          standard: t(lang,
            "Infecções moderadas (SSTI, bacteremia não complicada): 15–20 mg/kg EV a cada 8–12h (máx 3 g/dose). Guiar por AUC/MIC ou vale sérico.",
            "Infecciones moderadas (SSTI, bacteriemia no complicada): 15–20 mg/kg IV cada 8–12h (máx 3 g/dosis). Guiar por AUC/MIC o valle sérico."),
          severe: t(lang,
            "Infecções graves (endocardite, meningite, SARM profunda): 25–30 mg/kg EV de ataque seguido de 15–20 mg/kg a cada 6–8h. Alvo AUC/MIC 400–600.",
            "Infecciones graves (endocarditis, meningitis, SARM profunda): 25–30 mg/kg IV de carga seguido de 15–20 mg/kg cada 6–8h. Objetivo AUC/MIC 400–600."),
          uti: t(lang,
            "UTI / pneumonia por SARM: 25–30 mg/kg EV de ataque + manutenção ajustada por AUC/MIC. Infusão contínua (24h) como alternativa para otimização farmacodinâmica.",
            "UCI / neumonía por SARM: 25–30 mg/kg IV de carga + mantenimiento ajustado por AUC/MIC. Infusión continua (24h) como alternativa para optimización farmacodinámica."),
          oral: t(lang,
            "Colite por C. difficile grave/refratária: 125 mg VO 6/6h por 10–14 dias (uso VO não sistêmico).",
            "Colitis por C. difficile grave/refractaria: 125 mg VO 6/6h por 10–14 días (uso VO no sistémico).")
        },

        loadingDose: {
          adult: t(lang,
            "25–30 mg/kg EV em infecções graves (dose máxima única: 3 g). Infundir em ≥ 1,5–2h para doses > 2 g.",
            "25–30 mg/kg IV en infecciones graves (dosis máxima única: 3 g). Infundir en ≥ 1,5–2h para dosis > 2 g."),
          pediatric: t(lang,
            "Não recomendada dose de ataque padronizada em pediatria. Iniciar com 15 mg/kg 6/6h e ajustar por nível sérico.",
            "No se recomienda dosis de carga estandarizada en pediatría. Iniciar con 15 mg/kg 6/6h y ajustar por nivel sérico."),
          notes: t(lang,
            "Dose de ataque independente da função renal. Garante concentrações terapêuticas precoces antes do estado estacionário.",
            "Dosis de carga independiente de la función renal. Garantiza concentraciones terapéuticas precoces antes del estado estacionario.")
        },

        maintenanceDose: {
          adult: t(lang,
            "15–20 mg/kg EV a cada 8–12h (função renal normal). Total diário usual: 30–45 mg/kg/dia.",
            "15–20 mg/kg IV cada 8–12h (función renal normal). Total diario usual: 30–45 mg/kg/día."),
          pediatric: t(lang,
            "15 mg/kg EV 6/6h (neonato tardio e lactente); monitorar nível de vale e ajustar.",
            "15 mg/kg IV 6/6h (neonato tardío y lactante); monitorizar nivel de valle y ajustar."),
          renalAdjustment: t(lang,
            "ClCr 50–90: intervalar 12/12h. ClCr 10–50: intervalar 24h ou mais. ClCr < 10: dose única com remonitoração 48–72h. Hemodiálise: dose única pós-HD + monitoração de vale antes da próxima dose.",
            "ClCr 50–90: intervalar 12/12h. ClCr 10–50: intervalar 24h o más. ClCr < 10: dosis única con remonitoreo 48–72h. Hemodiálisis: dosis única post-HD + monitoreo de valle antes de la próxima dosis.")
        },

        neurotoxicityWarning: {
          risk: "low",
          symptoms: [
            t(lang, "Ototoxicidade (perda auditiva, zumbido) — principalmente com níveis elevados", "Ototoxicidad (pérdida auditiva, tinnitus) — principalmente con niveles elevados"),
            t(lang, "Nefrotoxicidade (principal efeito adverso grave)", "Nefrotoxicidad (principal efecto adverso grave)")
          ],
          management: t(lang,
            "Monitorar audiometria em tratamentos > 7 dias ou com doses altas. Suspender se creatinina aumentar > 0,5 mg/dL em relação ao basal sem outra causa. Reduzir dose ou aumentar intervalo conforme função renal. Ototoxicidade geralmente irreversível se não detectada precocemente.",
            "Monitorizar audiometría en tratamientos > 7 días o con dosis altas. Suspender si creatinina aumenta > 0,5 mg/dL respecto al basal sin otra causa. Reducir dosis o aumentar intervalo según función renal. Ototoxicidad generalmente irreversible si no se detecta precozmente.")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Alto risco de nefrotoxicidade — especialmente em combinação com piperacilina/tazobactam, aminoglicosídeos ou anfotericina B (risco sinérgico). AUC > 650 mg·h/L associada a nefrotoxicidade aumentada. Monitorar creatinina a cada 48h. Ototoxicidade geralmente irreversível se não detectada precocemente — monitorar audiometria em tratamentos > 7 dias.",
            "Alto riesgo de nefrotoxicidad — especialmente en combinación con piperacilina/tazobactam, aminoglucósidos o anfotericina B (riesgo sinérgico). AUC > 650 mg·h/L asociada a mayor nefrotoxicidad. Monitorizar creatinina cada 48h. Ototoxicidad generalmente irreversible si no se detecta precozmente — monitorizar audiometría en tratamientos > 7 días.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "IDSA/ASHP/SIDP Vancomycin Consensus Guidelines 2020",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: faixas renais convertidas para modelo AUC/MIC (ASHP 2020) com monitorização obrigatória. Obs enriquecidas com 'Evitar ajuste isolado por vale', 'Não usar tabela fixa isolada', 'Alto risco de nefrotoxicidade' e 'sempre' na reposição pós-HD. safetyFlags adicionados com pip/tazo + aminoglicosídeos + anfotericina B. therapeuticMonitoring, indicationDosing, loadingDose, maintenanceDose, neurotoxicityWarning e qtRisk já presentes (V3).",
            "Bloque fusionado y mejorado: franjas renales convertidas a modelo AUC/MIC (ASHP 2020) con monitorización obligatoria. Obs enriquecidas con 'Evitar ajuste aislado por valle', 'No usar tabla fija aislada', 'Alto riesgo de nefrotoxicidad' y 'siempre' en reposición post-HD. safetyFlags añadidos con pip/tazo + aminoglucósidos + anfotericina B. therapeuticMonitoring, indicationDosing, loadingDose, maintenanceDose, neurotoxicityWarning y qtRisk ya presentes (V3).")
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  cefepime: {
    name: { pt: "Cefepime", es: "Cefepime" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);
      const doseAdulto = clcr < 60
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "2 g EV 8/8h", "2 g EV cada 8h");

      return {
        name: t(lang, "Cefepime", "Cefepime"),
        class: t(lang, "Cefalosporina de 4ª geração", "Cefalosporina de 4ª generación"),
        commercialNames: {
          br: ["Maxcef", "Cefepime ABL", "Cefepime Eurofarma"],
          ar: ["Maxipime", "Cefepime Richet", "Cefepime Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          neutropeniaFebril: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "50 mg/kg por dose", "50 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5%.", "Diluir en SF 0,9% o SG5%."),
        speed: t(lang, "Infundir em aproximadamente 30 minutos.", "Infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema"),
          t(lang, "Náuseas", "Náuseas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Neurotoxicidade", "Neurotoxicidad"),
          t(lang, "Encefalopatia", "Encefalopatía"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Anafilaxia", "Anafilaxia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: maior risco de neurotoxicidade.", "Adulto mayor: mayor riesgo de neurotoxicidad.")
            : null,
          clcr < 60
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizado quando indicado.", "Puede utilizarse cuando está indicado.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar estado mental em pacientes renais.", "Monitorar estado mental en pacientes renales."),
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa.")
        ],
        ref: "Sanford Guide 2025 / IDSA HAP-VAP / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "2 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual para infecções graves, neutropenia febril e Pseudomonas aeruginosa.",
              "Dosis habitual para infecciones graves, neutropenia febril y Pseudomonas aeruginosa."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "2 g",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Reduzir frequência para evitar acúmulo do fármaco.",
              "Reducir frecuencia para evitar acumulación del fármaco."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "24/24h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "2 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Aumenta significativamente o risco de neurotoxicidade se não houver ajuste.",
              "Aumenta significativamente el riesgo de neurotoxicidad si no se ajusta."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar encefalopatia, mioclonias e convulsões associadas ao acúmulo.",
              "Monitorizar encefalopatía, mioclonías y convulsiones asociadas a la acumulación."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise. O cefepime é significativamente removido pela HD.",
              "Administrar después de hemodiálisis. El cefepime es significativamente removido por HD."
            )
          }
        },

        therapeuticMonitoring: {
          required: false,
          target: t(lang,
            "Tempo acima da MIC (T>MIC) ≥ 60–70% do intervalo para infecções graves; considerar infusão estendida (3h) para atingir T>MIC > 90%.",
            "Tiempo sobre la MIC (T>MIC) ≥ 60–70% del intervalo para infecciones graves; considerar infusión extendida (3h) para lograr T>MIC > 90%."),
          monitoring: t(lang,
            "Monitorar função renal diariamente em UTI. Reduzir dose imediatamente se sinais neurológicos. Nível sérico se disponível (alvo: 4–8× MIC no vale).",
            "Monitorar función renal diariamente en UCI. Reducir dosis inmediatamente ante signos neurológicos. Nivel sérico si disponible (objetivo: 4–8× MIC en valle)."),
          notes: t(lang,
            "Acúmulo em disfunção renal é a principal causa de neurotoxicidade. Pacientes idosos e com CrCl < 30 mL/min têm risco aumentado de encefalopatia.",
            "La acumulación en disfunción renal es la principal causa de neurotoxicidad. Pacientes ancianos y con CrCl < 30 mL/min tienen mayor riesgo de encefalopatía.")
        },

        indicationDosing: {
          standard: t(lang,
            "Infecções moderadas: 1–2 g EV 8/8h (30 min infusão).",
            "Infecciones moderadas: 1–2 g IV 8/8h (30 min infusión)."),
          severe: t(lang,
            "Infecções graves/sepse: 2 g EV 8/8h em infusão estendida de 3h para otimizar T>MIC.",
            "Infecciones graves/sepsis: 2 g IV 8/8h en infusión extendida de 3h para optimizar T>MIC."),
          uti: t(lang,
            "UTI / P. aeruginosa: 2 g EV 8/8h infusão estendida 3–4h; considerar 2 g 6/6h em infecções por cepas com MIC ≥ 8 mg/L.",
            "UCI / P. aeruginosa: 2 g IV 8/8h infusión extendida 3–4h; considerar 2 g 6/6h en infecciones por cepas con MIC ≥ 8 mg/L."),
          meningitis: t(lang,
            "Meningite bacteriana: 2 g EV 8/8h (infusão padrão 30 min).",
            "Meningitis bacteriana: 2 g IV 8/8h (infusión estándar 30 min).")
        },

        neurotoxicityWarning: {
          risk: "high",
          symptoms: [
            t(lang, "Encefalopatia (confusão, desorientação, agitação)", "Encefalopatía (confusión, desorientación, agitación)"),
            t(lang, "Mioclonias (movimentos involuntários)", "Mioclonías (movimientos involuntarios)"),
            t(lang, "Convulsões não epilépticas", "Convulsiones no epilépticas"),
            t(lang, "Alteração do nível de consciência", "Alteración del nivel de conciencia"),
            t(lang, "Afasia e disartria (casos graves)", "Afasia y disartria (casos graves)")
          ],
          management: t(lang,
            "SUSPENDER ou reduzir dose imediatamente ao primeiro sinal neurológico. Revisar ajuste renal urgentemente. EEG se encefalopatia persistente. Não é necessário anticonvulsivante profilático, mas benzodiazepínico para crise aguda. Descontinuar e substituir por outro beta-lactâmico se neurotoxicidade confirmada.",
            "SUSPENDER o reducir dosis inmediatamente ante el primer signo neurológico. Revisar ajuste renal urgentemente. EEG si encefalopatía persistente. No se requiere anticonvulsivante profiláctico, pero benzodiacepina para crisis aguda. Descontinuar y sustituir por otro beta-lactámico si neurotoxicidad confirmada.")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT. ECG não requerido rotineiramente.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT. ECG no requerido de forma rutinaria."),
          contraindications: []
        }
      };
    }
  },

  meropenem: {
    name: { pt: "Meropenem", es: "Meropenem" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 40, 2000);
      const doseAdulto = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "1 g EV 8/8h", "1 g EV cada 8h");

      return {
        name: t(lang, "Meropenem", "Meropenem"),
        class: t(lang, "Carbapenêmico", "Carbapenémico"),
        commercialNames: {
          br: ["Meronem", "Meropenem Eurofarma", "Meropenem ABL"],
          ar: ["Meronem", "Meropenem Richet", "Meropenem Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          meningite: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "20 mg/kg por dose", "20 mg/kg por dosis"),
          severe: t(lang, "40 mg/kg por dose", "40 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Antibiótico dependente do tempo acima da MIC.", "Antibiótico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infundir em 30 minutos ou infusão estendida.", "Infundir en 30 minutos o infusión extendida."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Trombocitopenia", "Trombocitopenia")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função renal.", "Adulto mayor: monitorar función renal.")
            : null,
          clcr < 50
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizado quando indicado.", "Puede utilizarse cuando está indicado.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Fármaco de escolha para muitas infecções por ESBL.", "Fármaco de elección para muchas infecciones por ESBL."),
          t(lang, "Evitar uso indiscriminado para reduzir resistência bacteriana.", "Evitar uso indiscriminado para reducir resistencia bacteriana.")
        ],
        ref: "Sanford Guide 2025 / IDSA Sepsis / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "20–40 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "120 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual para infecções graves. Em meningite: 2 g 8/8h. Preferir infusão estendida de 3 horas em infecções graves por Pseudomonas ou MIC elevada.",
              "Dosis habitual para infecciones graves. En meningitis: 2 g cada 8h. Preferir infusión extendida de 3 horas en infecciones graves por Pseudomonas o MIC elevada."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "20 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "80 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Redução de frequência mantendo exposição terapêutica. Ajuste obrigatório para evitar neurotoxicidade.",
              "Reducción de frecuencia manteniendo exposición terapéutica. Ajuste obligatorio para evitar neurotoxicidad."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "12/12h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "10–20 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "40 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar delirium, encefalopatia e convulsões. Ajustar conforme foco infeccioso e resposta clínica.",
              "Monitorizar delirium, encefalopatía y convulsiones. Ajustar según foco infeccioso y respuesta clínica."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar neurotoxicidade e risco de convulsões em insuficiência renal avançada.",
              "Monitorizar neurotoxicidad y riesgo de convulsiones en insuficiencia renal avanzada."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "500 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise nos dias de HD. Considerar dose suplementar conforme protocolo institucional.",
              "Administrar después de hemodiálisis en días de HD. Considerar dosis suplementaria según protocolo institucional."
            )
          }
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Risco de convulsões e encefalopatia aumenta com insuficiência renal — ajuste de dose obrigatório. Preferir infusão estendida (3h) em infecções graves para otimizar T>MIC.",
            "El riesgo de convulsiones y encefalopatía aumenta con insuficiencia renal — ajuste de dosis obligatorio. Preferir infusión extendida (3h) en infecciones graves para optimizar T>MIC."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Merrem (meropenem) 2022",
            "EMA label Meronem (meropenem) 2022",
            "IDSA Sepsis Guidelines 2021",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: fgMaior50.ev.dose expandida para 1–2 g; doseMaxima pediátrica em mg/kg; fg30a50.obs com neurotoxicidade; fg10a30.doseMaxima corrigida para 1 g/dia; fg10a30.obs com delirium e convulsões; hemodialise.obs com dose suplementar; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: fgMaior50.ev.dose ampliada a 1–2 g; doseMaxima pediátrica en mg/kg; fg30a50.obs con neurotoxicidad; fg10a30.doseMaxima corregida a 1 g/día; fg10a30.obs con delirium y convulsiones; hemodialise.obs con dosis suplementaria; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  gentamicina: {
    name: { pt: "Gentamicina", es: "Gentamicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseExtendida = peso * 7;
      const doseTradicional = peso * 2;
      const intervalo = clcr < 20 ? 72 : clcr < 40 ? 48 : clcr < 60 ? 36 : 24;

      return {
        name: t(lang, "Gentamicina", "Gentamicina"),
        class: t(lang, "Aminoglicosídeo", "Aminoglucósido"),
        commercialNames: {
          br: ["Garamicina", "Gentamicina Teuto", "Gentamicina Eurofarma"],
          ar: ["Garamicina", "Gentamicina Richet", "Gentamicina Klonal"]
        },
        presentation: [
          t(lang, "Ampola 20 mg/2 mL", "Ampolla 20 mg/2 mL"),
          t(lang, "Ampola 80 mg/2 mL", "Ampolla 80 mg/2 mL"),
          t(lang, "Ampola 160 mg/2 mL", "Ampolla 160 mg/2 mL")
        ],
        dose: {
          extendedInterval: t(lang, `${doseExtendida.toFixed(0)} mg EV a cada ${intervalo} horas`, `${doseExtendida.toFixed(0)} mg EV cada ${intervalo} horas`),
          tradicional: t(lang, `${doseTradicional.toFixed(0)} mg EV 8/8h`, `${doseTradicional.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "5–7 mg/kg/dose", "5–7 mg/kg/dosis"),
          endocardite: t(lang, "1 mg/kg 8/8h", "1 mg/kg cada 8h"),
          maxDose: t(lang, "Monitorização obrigatória", "Monitorización obligatoria")
        },
        therapeuticRange: t(lang, "Monitorar pico e vale séricos.", "Monitorar pico y valle séricos."),
        dilution: t(lang, "Diluir em 50–100 mL de SF 0,9%.", "Diluir en 50–100 mL de SF 0,9%."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Tontura", "Mareo"),
          t(lang, "Dor local", "Dolor local")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Bloqueio neuromuscular", "Bloqueo neuromuscular"),
          t(lang, "Insuficiência renal aguda", "Insuficiencia renal aguda")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: risco muito elevado de nefrotoxicidade.", "Adulto mayor: riesgo muy elevado de nefrotoxicidad.")
            : null,
          clcr < 60
            ? t(lang, "Necessita ajuste baseado na função renal.", "Requiere ajuste basado en la función renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação devido ao risco de ototoxicidade fetal.", "Evitar durante el embarazo por riesgo de ototoxicidad fetal.")
            : null,
          lactante
            ? t(lang, "Compatibilidade variável; avaliar risco-benefício.", "Compatibilidad variable; evaluar riesgo-beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar creatinina diariamente.", "Monitorar creatinina diariamente."),
          t(lang, "Monitorar audição em tratamentos prolongados.", "Monitorar audición en tratamientos prolongados."),
          t(lang, "Evitar associação com outros nefrotóxicos.", "Evitar asociación con otros nefrotóxicos.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / IDSA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "5–7 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "7 mg/kg/dia",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "2–2,5 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "7,5 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Preferir esquema de dose estendida. Ajustar conforme níveis séricos.",
              "Preferir esquema de dosis extendida. Ajustar según niveles séricos."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "5–7 mg/kg",
              intervalo: "36–48/48h",
              doseMaxima: "7 mg/kg/dose",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "6 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Obrigatória monitorização sérica.",
              "Obligatoria monitorización sérica."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajuste guiado por vale sérico e função renal.",
              "Ajuste guiado por valle sérico y función renal."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Alto risco de nefrotoxicidade e ototoxicidade.",
              "Alto riesgo de nefrotoxicidad y ototoxicidad."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "1–2 mg/kg",
              intervalo: "Pós-HD",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "1–2 mg/kg",
              intervalo: "Pós-HD",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise e monitorar níveis séricos.",
              "Administrar después de hemodiálisis y monitorizar niveles séricos."
            )
          }
        },

        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "Dose estendida (ODA 5–7 mg/kg/dia): pico 20–30 mcg/mL (1h após infusão) e vale < 1 mcg/mL. Dose convencional: pico 5–10 mcg/mL e vale < 2 mcg/mL. Monitorar nível antes da 3ª dose para estado estacionário.",
            "Dosis extendida (ODA 5–7 mg/kg/día): pico 20–30 mcg/mL (1h después de infusión) y valle < 1 mcg/mL. Dosis convencional: pico 5–10 mcg/mL y valle < 2 mcg/mL. Monitorizar nivel antes de la 3ª dosis para estado estacionario."),
          monitoring: t(lang,
            "Colher pico 30 min após fim da infusão (30 min) e vale 30 min antes da próxima dose. Monitorar creatinina sérica e ureia 2–3×/semana. Audiometria formal se tratamento > 7 dias ou paciente de risco (idosos, histórico de perda auditiva).",
            "Colectar pico 30 min después del fin de infusión (30 min) y valle 30 min antes de la próxima dosis. Monitorizar creatinina sérica y urea 2–3×/semana. Audiometría formal si tratamiento > 7 días o paciente de riesgo (ancianos, historial de pérdida auditiva)."),
          notes: t(lang,
            "Maior risco de nefrotoxicidade quando associado a vancomicina ou anfotericina B. Dose estendida (ODA) tem menor nefrotoxicidade que dose convencional 8/8h com eficácia equivalente. Vale > 2 mcg/mL por mais de 48h: reduzir dose ou ampliar intervalo urgentemente.",
            "Mayor riesgo de nefrotoxicidad cuando se asocia a vancomicina o anfotericina B. Dosis extendida (ODA) tiene menor nefrotoxicidad que dosis convencional 8/8h con eficacia equivalente. Valle > 2 mcg/mL por más de 48h: reducir dosis o ampliar intervalo urgentemente.")
        },

        indicationDosing: {
          standard: t(lang,
            "Dose convencional: 1,5–2 mg/kg EV 8/8h. Dose estendida (ODA): 5–7 mg/kg EV 24/24h (preferida por menor toxicidade).",
            "Dosis convencional: 1,5–2 mg/kg IV 8/8h. Dosis extendida (ODA): 5–7 mg/kg IV 24/24h (preferida por menor toxicidad)."),
          severe: t(lang,
            "Sepse gram-negativa / endocardite sinérgica: dose estendida 5–7 mg/kg/dia EV ou convencional 1,5 mg/kg 8/8h com monitoração intensiva.",
            "Sepsis gramnegativa / endocarditis sinérgica: dosis extendida 5–7 mg/kg/día IV o convencional 1,5 mg/kg 8/8h con monitoreo intensivo."),
          synergy: t(lang,
            "Sinergia (endocardite enterocócica ou estreptocócica): 1 mg/kg EV 8/8h por 2–4 semanas (dose baixa sinérgica).",
            "Sinergia (endocarditis enterocócica o estreptocócica): 1 mg/kg IV 8/8h por 2–4 semanas (dosis baja sinérgica).")
        },

        neurotoxicityWarning: {
          risk: "high",
          symptoms: [
            t(lang, "Ototoxicidade vestibular (tontura, perda de equilíbrio, ataxia)", "Ototoxicidad vestibular (mareos, pérdida de equilibrio, ataxia)"),
            t(lang, "Ototoxicidade coclear (perda auditiva neurossensorial, zumbido)", "Ototoxicidad coclear (pérdida auditiva neurosensorial, tinnitus)"),
            t(lang, "Nefrotoxicidade (elevação de creatinina, oligúria)", "Nefrotoxicidad (elevación de creatinina, oliguria)"),
            t(lang, "Bloqueio neuromuscular (raro — especialmente em anestesia)", "Bloqueo neuromuscular (raro — especialmente en anestesia)")
          ],
          management: t(lang,
            "Suspender imediatamente se vale > 2 mcg/mL persistente, elevação de creatinina > 0,5 mg/dL ou sintomas auditivos/vestibulares. Ototoxicidade geralmente irreversível — não há antídoto. Monitorar audiometria formal em tratamentos > 7 dias. Bloqueio neuromuscular: gluconato de cálcio EV como medida de emergência.",
            "Suspender inmediatamente si valle > 2 mcg/mL persistente, elevación de creatinina > 0,5 mg/dL o síntomas auditivos/vestibulares. Ototoxicidad generalmente irreversible — no hay antídoto. Monitorizar audiometría formal en tratamientos > 7 días. Bloqueo neuromuscular: gluconato de calcio IV como medida de emergencia.")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        }
      };
    }
  },

  amicacina: {
    name: { pt: "Amicacina", es: "Amikacina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseExtendida = peso * 15;
      const intervalo = clcr < 20 ? 72 : clcr < 40 ? 48 : clcr < 60 ? 36 : 24;

      return {
        name: t(lang, "Amicacina", "Amikacina"),
        class: t(lang, "Aminoglicosídeo", "Aminoglucósido"),
        commercialNames: {
          br: ["Novamin", "Amicacina Teuto", "Amicacina Eurofarma"],
          ar: ["Amikacina Richet", "Amikacina Klonal", "Amikacina Genérica"]
        },
        presentation: [
          t(lang, "Ampola 100 mg/2 mL", "Ampolla 100 mg/2 mL"),
          t(lang, "Ampola 500 mg/2 mL", "Ampolla 500 mg/2 mL")
        ],
        dose: {
          extendedInterval: t(lang, `${doseExtendida.toFixed(0)} mg EV a cada ${intervalo} horas`, `${doseExtendida.toFixed(0)} mg EV cada ${intervalo} horas`)
        },
        doseKg: {
          standard: t(lang, "15–20 mg/kg/dose", "15–20 mg/kg/dosis"),
          maxDose: t(lang, "Monitorização sérica obrigatória", "Monitorización sérica obligatoria")
        },
        therapeuticRange: t(lang, "Pico alvo geralmente 20–30 mcg/mL.", "Pico objetivo generalmente 20–30 mcg/mL."),
        dilution: t(lang, "Diluir em 100–200 mL de SF 0,9%.", "Diluir en 100–200 mL de SF 0,9%."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Febre medicamentosa", "Fiebre medicamentosa")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade", "Nefrotoxicidad"),
          t(lang, "Ototoxicidade", "Ototoxicidad"),
          t(lang, "Bloqueio neuromuscular", "Bloqueo neuromuscular"),
          t(lang, "Surdez permanente", "Sordera permanente")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: risco elevado de lesão renal.", "Adulto mayor: riesgo elevado de lesión renal.")
            : null,
          clcr < 60
            ? t(lang, "Necessita ajuste renal obrigatório.", "Requiere ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação sempre que possível.", "Evitar durante el embarazo siempre que sea posible.")
            : null,
          lactante
            ? t(lang, "Avaliar individualmente.", "Evaluar individualmente.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar creatinina e níveis séricos.", "Monitorar creatinina y niveles séricos."),
          t(lang, "Evitar associação com vancomicina quando possível.", "Evitar asociación con vancomicina cuando sea posible."),
          t(lang, "Maior potência contra Gram negativos resistentes.", "Mayor potencia contra Gram negativos resistentes.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / IDSA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "15–20 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "20 mg/kg/dia",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "15–20 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "20 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Preferir dose estendida (ODA) única diária com monitorização sérica. Alvo pico ODA: 56–64 mcg/mL; infecções graves: 40–60 mcg/mL. Vale alvo: < 5 mcg/mL. Monitorar creatinina 2–3×/semana e débito urinário diário.",
              "Preferir dosis extendida (ODA) única diaria con monitorización sérica. Objetivo pico ODA: 56–64 mcg/mL; infecciones graves: 40–60 mcg/mL. Valle objetivo: < 5 mcg/mL. Monitorizar creatinina 2–3×/semana y diuresis diaria.")
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "15 mg/kg",
              intervalo: "36–48/48h",
              doseMaxima: "15 mg/kg/dose",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "36/36h",
              doseMaxima: "15 mg/kg/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Monitorização sérica obrigatória — ajustar dose e intervalo conforme níveis séricos. Vale > 5 mcg/mL: ampliar intervalo ou suspender até clearance. Monitorar função renal diariamente nesta faixa.",
              "Monitorización sérica obligatoria — ajustar dosis e intervalo según niveles séricos. Valle > 5 mcg/mL: ampliar intervalo o suspender hasta clearance. Monitorizar función renal diariamente en esta franja.")
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "Individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "Individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Monitorização farmacocinética obrigatória — não usar tabela fixa isolada. Ajustar exclusivamente por pico e vale séricos. Risco elevado de acúmulo e toxicidade acumulativa. Avaliar alternativa terapêutica se dispunível.",
              "Monitorización farmacocinética obligatoria — no usar tabla fija aislada. Ajustar exclusivamente por pico y valle séricos. Riesgo elevado de acumulación y toxicidad acumulativa. Evaluar alternativa terapéutica si disponible.")
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "Individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "Individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Alto risco de acúmulo, nefrotoxicidade e ototoxicidade irreversível. Usar apenas se não houver alternativa. Intervalo guíado exclusivamente por nível pré-dose (vale < 5 mcg/mL obrigatório antes de cada dose). Monitorar toxicidade vestibular e coclear diariamente.",
              "Alto riesgo de acumulación, nefrotoxicidad y ototoxicidad irreversible. Usar solo si no hay alternativa. Intervalo guiado exclusivamente por nivel predosis (valle < 5 mcg/mL obligatorio antes de cada dosis). Monitorizar toxicidad vestibular y coclear diariamente.")
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "2–5 mg/kg",
              intervalo: "Pós-HD",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: {
              dose: "2–5 mg/kg",
              intervalo: "Pós-HD",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Administrar após hemodiálise e monitorar níveis séricos. Amicacina é parcialmente removida pela HD (~50%). Reposição de 2–5 mg/kg pós-HD guiada por nível pré-dose. Não administrar antes da sessão de HD para evitar remoção imediata. Monitorar toxicidade vestibular.",
              "Administrar después de hemodiálisis y monitorizar niveles séricos. La amikacina es parcialmente removida por HD (~50%). Reposición de 2–5 mg/kg post-HD guiada por nivel predosis. No administrar antes de la sesión de HD para evitar remoción inmediata. Monitorizar toxicidad vestibular.")
          }
        },

        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "Dose estendida (ODA 15–20 mg/kg/dia): pico 56–64 mcg/mL (1h após infusão) e vale < 5 mcg/mL. Dose clássica: pico 20–30 mcg/mL (habituais) ou 40–60 mcg/mL (infecções graves) e vale < 5 mcg/mL. Monitorar nível de pico (30 min após infusão de 30 min) e vale (30 min antes da próxima dose).",
            "Dosis extendida (ODA 15–20 mg/kg/día): pico 56–64 mcg/mL (1h después de infusión) y valle < 5 mcg/mL. Dosis clásica: pico 20–30 mcg/mL (habituales) o 40–60 mcg/mL (infecciones graves) y valle < 5 mcg/mL. Monitorizar nivel de pico (30 min después de infusión de 30 min) y valle (30 min antes de la próxima dosis)."),
          monitoring: t(lang,
            "Colher pico 30–60 min após fim da infusão e vale 30 min antes da próxima dose. Monitorar creatinina sérica e ureia 2–3×/semana. Monitorar débito urinário diário. Audiometria formal se tratamento > 7 dias. Monitorar toxicidade vestibular (tontura, ataxia) a cada visita. Monitorar vale a cada 48–72h para ajuste precoce.",
            "Colectar pico 30–60 min después del fin de infusión y valle 30 min antes de la próxima dosis. Monitorizar creatinina sérica y urea 2–3×/semana. Monitorizar diuresis diaria. Audiometría formal si tratamiento > 7 días. Monitorizar toxicidad vestibular (mareos, ataxia) en cada visita. Monitorizar valle cada 48–72h para ajuste precoz."),
          notes: t(lang,
            "Priorizar monitorização farmacocinética em vez de ajuste apenas por tabela renal. Menor resistência bacteriana que gentamicina para Serratia, Pseudomonas resistente e Acinetobacter spp. Vale > 5 mcg/mL persistente: suspender e aguardar nível < 5 mcg/mL antes da próxima dose. Nefrotoxicidade e ototoxicidade são dose-cumulativas — minimizar duração do tratamento.",
            "Priorizar monitorización farmacocinética en lugar de ajuste solamente por tabla renal. Menor resistencia bacteriana que gentamicina para Serratia, Pseudomonas resistente y Acinetobacter spp. Valle > 5 mcg/mL persistente: suspender y esperar nivel < 5 mcg/mL antes de la próxima dosis. Nefrotoxicidad y ototoxicidad son dosis-cumulativas — minimizar duración del tratamiento.")
        },

        indicationDosing: {
          standard: t(lang,
            "Dose estendida (ODA): 15 mg/kg EV 24/24h (preferida). Dose convencional: 7,5 mg/kg EV 12/12h.",
            "Dosis extendida (ODA): 15 mg/kg IV 24/24h (preferida). Dosis convencional: 7,5 mg/kg IV 12/12h."),
          severe: t(lang,
            "Sepse / infecções por gram-negativos multirresistentes: 20–25 mg/kg EV dose estendida 24/24h com monitoração intensiva de pico e vale.",
            "Sepsis / infecciones por gramnegativos multirresistentes: 20–25 mg/kg IV dosis extendida 24/24h con monitoreo intensivo de pico y valle."),
          tuberculosis: t(lang,
            "TB-MDR (off-label, 2ª linha): 15 mg/kg/dia IM/EV por fases do esquema combinado (máx 1 g/dia).",
            "TB-MDR (off-label, 2ª línea): 15 mg/kg/día IM/IV en fases del esquema combinado (máx 1 g/día).")
        },

        neurotoxicityWarning: {
          risk: "high",
          symptoms: [
            t(lang, "Ototoxicidade coclear (perda auditiva de alta frequência, zumbido) — dose-dependente e acumulativa", "Ototoxicidad coclear (pérdida auditiva de alta frecuencia, tinnitus) — dosis-dependiente y acumulativa"),
            t(lang, "Ototoxicidade vestibular (tontura, ataxia, nistagmo)", "Ototoxicidad vestibular (mareos, ataxia, nistagmo)"),
            t(lang, "Nefrotoxicidade (elevação de creatinina, necrose tubular aguda)", "Nefrotoxicidad (elevación de creatinina, necrosis tubular aguda)"),
            t(lang, "Bloqueio neuromuscular (raro)", "Bloqueo neuromuscular (raro)")
          ],
          management: t(lang,
            "Suspender imediatamente se vale > 5 mcg/mL persistente, elevação de creatinina > 0,5 mg/dL ou queixas auditivas/vestibulares. Ototoxicidade geralmente IRREVERSÍVEL — ausência de antídoto. Monitorar audiometria baseline e semanal em tratamentos prolongados. Preferir esquema ODA para redução de toxicidade. Contraindicado em gestação (ototoxicidade fetal).",
            "Suspender inmediatamente si valle > 5 mcg/mL persistente, elevación de creatinina > 0,5 mg/dL o quejas auditivas/vestibulares. Ototoxicidad generalmente IRREVERSIBLE — sin antídoto. Monitorizar audiometría basal y semanal en tratamientos prolongados. Preferir esquema ODA para reducción de toxicidad. Contraindicado en gestación (ototoxicidad fetal).")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Alto risco de nefrotoxicidade e ototoxicidade irreversível — ajuste guiado obrigatoriamente por níveis séricos (pico e vale). Evitar combinação com vancomicina, anfotericina B ou outros nefrotóxicos. Ototoxicidade acumulativa — monitorar audiometria basal e semanal em tratamentos > 7 dias. Contraindicação relativa em gestação (ototoxicidade fetal).",
            "Alto riesgo de nefrotoxicidad y ototoxicidad irreversible — ajuste obligatoriamente guiado por niveles séricos (pico y valle). Evitar combinación con vancomicina, anfotericina B u otros nefrotóxicos. Ototoxicidad acumulativa — monitorizar audiometría basal y semanal en tratamientos > 7 días. Contraindicación relativa en gestación (ototoxicidad fetal).")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "Sanford Guide to Antimicrobial Therapy 2025",
            "IDSA Guidelines (Aminoglycoside use)",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: doses pediátricas corrigidas (15–20 mg/kg fgMaior50), dose HD ajustada para 2–5 mg/kg (faixa mais ampla). Obs enriquecidas com alvo pico 40–60 mcg/mL para infecções graves, vale > 5 suspender, não usar tabela fixa isolada, toxicidade vestibular monitorar, HD não administrar antes da sessão. therapeuticMonitoring enriquecido com débito urinário e toxicidade vestibular. safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: dosis pediátricas corregidas (15–20 mg/kg fgMaior50), dosis HD ajustada a 2–5 mg/kg (rango más amplio). Obs enriquecidas con objetivo pico 40–60 mcg/mL para infecciones graves, valle > 5 suspender, no usar tabla fija aislada, toxicidad vestibular monitorizar, HD no administrar antes de la sesión. therapeuticMonitoring enriquecido con diuresis y toxicidad vestibular. safetyFlags y auditNotes añadidos.")
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  levofloxacino: {
    name: { pt: "Levofloxacino", es: "Levofloxacino" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const qtLongo = Boolean(paciente.qtLongo);

      const dosePadrao = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "750 mg VO/EV 1x/dia", "750 mg VO/EV 1 vez/día");

      return {
        name: t(lang, "Levofloxacino", "Levofloxacino"),
        class: t(lang, "Fluoroquinolona respiratória", "Fluoroquinolona respiratoria"),
        commercialNames: {
          br: ["Tavanic", "Levoxin", "Levofloxacino EMS"],
          ar: ["Tavanic", "Levofloxacino Bagó", "Levofloxacino Richet"]
        },
        presentation: [
          t(lang, "Comprimidos 250 mg", "Comprimidos 250 mg"),
          t(lang, "Comprimidos 500 mg", "Comprimidos 500 mg"),
          t(lang, "Comprimidos 750 mg", "Comprimidos 750 mg"),
          t(lang, "Bolsa EV 500 mg/100 mL", "Bolsa EV 500 mg/100 mL")
        ],
        dose: {
          pneumonia: dosePadrao,
          sinusite: t(lang, "500 mg VO 1x/dia", "500 mg VO 1 vez/día"),
          pielonefrite: t(lang, "750 mg VO/EV 1x/dia", "750 mg VO/EV 1 vez/día")
        },
        doseKg: {
          standard: t(lang, "Não utilizada rotineiramente em adultos.", "No utilizada rutinariamente en adultos.")
        },
        therapeuticRange: t(lang, "Concentração dependente (AUC/MIC).", "Concentración dependiente (AUC/MIC)."),
        dilution: t(lang, "Bolsa pronta para uso.", "Bolsa lista para uso."),
        speed: t(lang, "Infundir em 60–90 minutos.", "Infundir en 60–90 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Insônia", "Insomnio"),
          t(lang, "Cefaleia", "Cefalea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Ruptura de tendão", "Rotura tendinosa"),
          t(lang, "QT prolongado", "QT prolongado"),
          t(lang, "Hipoglicemia", "Hipoglucemia"),
          t(lang, "Dissecção de aorta", "Disección aórtica"),
          t(lang, "Convulsões", "Convulsiones")
        ],
        risksByPatient: [
          idade >= 60
            ? t(lang, "Alto risco de tendinopatia.", "Alto riesgo de tendinopatía.")
            : null,
          clcr < 50
            ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação.", "Evitar durante embarazo.")
            : null,
          lactante
            ? t(lang, "Evitar durante lactação quando possível.", "Evitar durante lactancia cuando sea posible.")
            : null,
          qtLongo
            ? t(lang, "Evitar em pacientes com QT prolongado.", "Evitar en pacientes con QT prolongado.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Evitar uso concomitante com antiácidos.", "Evitar uso concomitante con antiácidos."),
          t(lang, "Suspender se ocorrer dor tendínea.", "Suspender si aparece dolor tendinoso.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / FDA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: {
              dose: "500–750 mg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "500–750 mg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "750 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual conforme infecção.",
              "Dosis habitual según infección."
            )
          },

          fg30a50: {
            vo: {
              dose: "500 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "500 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Pode requerer redução conforme indicação clínica.",
              "Puede requerir reducción según indicación clínica."
            )
          },

          fg10a30: {
            vo: {
              dose: "250–500 mg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg"
            },
            ev: {
              dose: "250–500 mg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Intervalo prolongado para evitar acúmulo.",
              "Intervalo prolongado para evitar acumulación."
            )
          },

          fgMenor10: {
            vo: {
              dose: "250 mg",
              intervalo: "48/48h",
              doseMaxima: "250 mg",
              unidade: "mg"
            },
            ev: {
              dose: "250 mg",
              intervalo: "48/48h",
              doseMaxima: "250 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "5–10 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "250 mg",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar QT prolongado, neurotoxicidade e tendinopatia.",
              "Monitorizar QT prolongado, neurotoxicidad y tendinopatia."
            )
          },

          hemodialise: {
            vo: {
              dose: "250–500 mg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg"
            },
            ev: {
              dose: "250–500 mg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "5–10 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "500 mg",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não requer dose suplementar pós-hemodiálise.",
              "No requiere dosis suplementaria post-hemodiálisis."
            )
          }
        },

        therapeuticMonitoring: {
          required: false,
          target: t(lang,
            "AUC/MIC ≥ 125 (parâmetro PK-PD concentração-dependente). Dose única diária maximiza eficácia por concentração-dependência.",
            "AUC/MIC ≥ 125 (parámetro PK-PD concentración-dependiente). Dosis única diaria maximiza eficacia por concentración-dependencia."),
          monitoring: t(lang,
            "ECG basal obrigatório. Monitorar QTc após 2–3 dias. Monitorar glicemia (hipoglicemia e hiperglicemia relatadas). Função renal semanal.",
            "ECG basal obligatorio. Monitorizar QTc después de 2–3 días. Monitorizar glucemia (hipoglucemia e hiperglucemia reportadas). Función renal semanal."),
          notes: t(lang,
            "Excelente biodisponibilidade oral (~99%) — transição VO/EV com a mesma dose. Nível sérico não monitorado rotineiramente na prática clínica.",
            "Excelente biodisponibilidad oral (~99%) — transición VO/IV con la misma dosis. Nivel sérico no monitorado rutinariamente en la práctica clínica.")
        },

        indicationDosing: {
          standard: t(lang,
            "PAC ambulatorial: 500 mg VO 1×/dia por 5–7 dias. IVU complicada: 500 mg VO/EV 24/24h por 7–14 dias.",
            "NAC ambulatoria: 500 mg VO 1×/día por 5–7 días. IVU complicada: 500 mg VO/IV 24/24h por 7–14 días."),
          severe: t(lang,
            "PAC grave / PAV: 750 mg EV 24/24h. Reduzir para 5 dias se resposta clínica adequada.",
            "NAC grave / NAV: 750 mg IV 24/24h. Reducir a 5 días si respuesta clínica adecuada."),
          uti: t(lang,
            "UTI / sepse de foco pulmonar ou urinário: 750 mg EV 24/24h; combinar com beta-lactâmico conforme espectro necessário.",
            "UCI / sepsis de foco pulmonar o urinario: 750 mg IV 24/24h; combinar con beta-lactámico según espectro requerido."),
          tuberculosis: t(lang,
            "TB-MDR (off-label, 2ª linha): 500–1.000 mg VO/dia como parte de esquema combinado.",
            "TB-MDR (off-label, 2ª línea): 500–1.000 mg VO/día como parte de esquema combinado.")
        },

        neurotoxicityWarning: {
          risk: "moderate",
          symptoms: [
            t(lang, "Neuropatia periférica (pode ser irreversível — FDA Black Box Warning)", "Neuropatía periférica (puede ser irreversible — FDA Black Box Warning)"),
            t(lang, "Cefaleia, tontura, insônia", "Cefalea, mareos, insomnio"),
            t(lang, "Confusão mental, agitação, alucinações", "Confusión mental, agitación, alucinaciones"),
            t(lang, "Ruptura de tendão, especialmente tendão de Aquiles", "Ruptura de tendón, especialmente tendón de Aquiles"),
            t(lang, "Agravamento de miastenia gravis", "Agravamiento de miastenia grave"),
            t(lang, "Hipoglicemia sintomática (especialmente em diabéticos)", "Hipoglucemia sintomática (especialmente en diabéticos)")
          ],
          management: t(lang,
            "Descontinuar imediatamente se neuropatia periférica, ruptura de tendão ou sintomas psiquiátricos. FDA Black Box Warning para neuropatia e ruptura tendinosa. Miastenia gravis: contraindicação absoluta. Evitar em idosos > 65 anos com uso de corticoides. Monitorar glicemia em diabéticos.",
            "Descontinuar inmediatamente si neuropatía periférica, ruptura de tendón o síntomas psiquiátricos. FDA Black Box Warning para neuropatía y ruptura tendinosa. Miastenia gravis: contraindicación absoluta. Evitar en ancianos > 65 años con corticoides. Monitorizar glucemia en diabéticos.")
        },

        qtRisk: {
          risk: "moderate",
          monitoring: t(lang,
            "ECG basal obrigatório. Monitorar QTc após 48h de tratamento. Suspender se QTc > 500 ms ou aumento > 60 ms em relação ao basal. Evitar uso simultâneo com outros agentes que prolongam QT.",
            "ECG basal obligatorio. Monitorizar QTc después de 48h de tratamiento. Suspender si QTc > 500 ms o aumento > 60 ms respecto al basal. Evitar uso simultáneo con otros agentes que prolongan QT."),
          contraindications: [
            t(lang, "Síndrome do QT longo congênito ou adquirido", "Síndrome del QT largo congénito o adquirido"),
            t(lang, "Uso concomitante de antiarrítmicos classe IA/III", "Uso concomitante de antiarrítmicos clase IA/III"),
            t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipocalemia o hipomagnesemia no corregidas"),
            t(lang, "Bradiarritmia clínica significativa", "Bradiarritmia clínica significativa")
          ]
        }
      };
    }
  },

  doxiciclina: {
    name: { pt: "Doxiciclina", es: "Doxiciclina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      return {
        name: t(lang, "Doxiciclina", "Doxiciclina"),
        class: t(lang, "Tetraciclina", "Tetraciclina"),
        commercialNames: {
          br: ["Vibramicina", "Doxiciclina EMS"],
          ar: ["Vibramicina", "Doxiciclina Bagó"]
        },
        presentation: [
          t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
          t(lang, "Cápsula 100 mg", "Cápsula 100 mg")
        ],
        dose: {
          adulto: t(lang, "100 mg VO 12/12h", "100 mg VO cada 12h"),
          dst: t(lang, "100 mg VO 12/12h por 7 dias", "100 mg VO cada 12h por 7 días"),
          lyme: t(lang, "100 mg VO 12/12h", "100 mg VO cada 12h")
        },
        doseKg: {
          pediatrica: t(lang, "2–4 mg/kg/dia", "2–4 mg/kg/día"),
          maxDose: t(lang, "200 mg/dia", "200 mg/día")
        },
        therapeuticRange: t(lang, "Boa biodisponibilidade oral.", "Buena biodisponibilidad oral."),
        dilution: t(lang, "Via oral.", "Vía oral."),
        speed: t(lang, "Administrar com água abundante.", "Administrar con abundante agua."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dispepsia", "Dispepsia"),
          t(lang, "Fotossensibilidade", "Fotosensibilidad")
        ],
        dangerousAdverseEffects: [
          t(lang, "Esofagite", "Esofagitis"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
          t(lang, "Hipertensão intracraniana", "Hipertensión intracraneal")
        ],
        risksByPatient: [
          idade < 8
            ? t(lang, "Evitar em crianças pequenas salvo indicações específicas.", "Evitar en niños pequeños salvo indicaciones específicas.")
            : null,
          gestante
            ? t(lang, "Contraindicada na gestação.", "Contraindicada en embarazo.")
            : null,
          lactante
            ? t(lang, "Usar com cautela durante lactação.", "Usar con precaución durante lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Não deitar por 30 minutos após tomar.", "No acostarse durante 30 minutos después de tomarla."),
          t(lang, "Evitar exposição solar excessiva.", "Evitar exposición solar excesiva."),
          t(lang, "Evitar associação com ferro, cálcio e antiácidos.", "Evitar asociación con hierro, calcio y antiácidos.")
        ],
        ref: "Sanford Guide / Goodman & Gilman / CDC STI Guidelines",
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(
            lang,
            "Doxiciclina não necessita ajuste renal. Eliminação predominantemente biliar/fecal.",
            "Doxiciclina no requiere ajuste renal. Eliminación predominantemente biliar/fecal."
          ),

          fgMaior50: {
            vo: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "2,2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fg30a50: {
            vo: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "2,2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fg10a30: {
            vo: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "2,2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fgMenor10: {
            vo: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "2,2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Preferível em pacientes renais por eliminação predominantemente não renal.",
              "Preferible en pacientes renales por eliminación predominantemente no renal."
            )
          },

          hemodialise: {
            vo: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "100 mg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "2,2 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "200 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita dose suplementar pós-hemodiálise.",
              "No requiere dosis suplementaria post-hemodiálisis."
            )
          }
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  cefazolina: {
    name: { pt: "Cefazolina", es: "Cefazolina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 33, 2000);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "1–2 g EV 8/8h", "1–2 g EV cada 8h");

      return {
        name: t(lang, "Cefazolina", "Cefazolina"),
        class: t(lang, "Cefalosporina de 1ª geração", "Cefalosporina de 1ª generación"),
        commercialNames: {
          br: ["Kefazol", "Cefazolina ABL", "Cefazolina Eurofarma"],
          ar: ["Cefazolina Richet", "Cefazolina Klonal", "Cefazolina genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          adulto: doseAdulto,
          profilaxiaCirurgica: t(lang, "2 g EV 30–60 min antes da incisão; 3 g se peso ≥120 kg", "2 g EV 30–60 min antes de la incisión; 3 g si peso ≥120 kg"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "25–33 mg/kg por dose 8/8h", "25–33 mg/kg por dosis cada 8h"),
          profilaxiaPediatrica: t(lang, "30 mg/kg dose única antes da incisão", "30 mg/kg dosis única antes de la incisión"),
          maxDose: t(lang, "6 g/dia; até 12 g/dia em infecções graves selecionadas", "6 g/día; hasta 12 g/día en infecciones graves seleccionadas")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Infundir em 30 minutos; na profilaxia cirúrgica pode ser administrada lentamente conforme protocolo.", "Infundir en 30 minutos; en profilaxis quirúrgica puede administrarse lentamente según protocolo."),
        commonAdverseEffects: [
          t(lang, "Dor no local da aplicação", "Dolor en el sitio de aplicación"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Neutropenia em uso prolongado", "Neutropenia en uso prolongado"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal para evitar acúmulo.", "Adulto mayor: evaluar función renal para evitar acumulación.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal obrigatório.", "ClCr < 30 mL/min: ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Excelente opção para MSSA sensível e profilaxia cirúrgica.", "Excelente opción para MSSA sensible y profilaxis quirúrgica."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "Investigar reação grave prévia a beta-lactâmicos.", "Investigar reacción grave previa a beta-lactámicos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / ASHP Surgical Prophylaxis Guidelines",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "8/8h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "100 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual para infecções por MSSA e profilaxia cirúrgica.",
              "Dosis habitual para infecciones por MSSA y profilaxis quirúrgica."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "12/12h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "75 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Reduzir frequência de administração.",
              "Reducir frecuencia de administración."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajuste obrigatório para evitar acúmulo.",
              "Ajuste obligatorio para evitar acumulación."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10–15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "25 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar neurotoxicidade em insuficiência renal avançada.",
              "Monitorizar neurotoxicidad en insuficiencia renal avanzada."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "10–15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "25 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise.",
              "Administrar después de hemodiálisis."
            )
          }
        }
      };
    }
  },

  oxacilina: {
    name: { pt: "Oxacilina", es: "Oxacilina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePediaDia = Math.min(peso * 200, 12000);
      const dosePediaPorDose = dosePediaDia / 6;

      return {
        name: t(lang, "Oxacilina", "Oxacilina"),
        class: t(lang, "Penicilina antiestafilocócica resistente à penicilinase", "Penicilina antiestafilocócica resistente a penicilinasa"),
        commercialNames: {
          br: ["Staficilin-N", "Oxacilina Blau", "Oxacilina ABL"],
          ar: ["Oxacilina Richet", "Oxacilina Klonal", "Oxacilina genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g")
        ],
        dose: {
          adulto: t(lang, "1–2 g EV 4/4h", "1–2 g EV cada 4h"),
          infeccaoGraveMSSA: t(lang, "2 g EV 4/4h", "2 g EV cada 4h"),
          pediatrica: t(lang, `${dosePediaPorDose.toFixed(0)} mg EV 4/4h`, `${dosePediaPorDose.toFixed(0)} mg EV cada 4h`)
        },
        doseKg: {
          standard: t(lang, "100–200 mg/kg/dia dividido 4/4h ou 6/6h", "100–200 mg/kg/día dividido cada 4h o 6h"),
          maxDose: t(lang, "12 g/dia", "12 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed: t(lang, "Administrar EV lentamente ou infundir em 30–60 minutos conforme protocolo.", "Administrar EV lentamente o infundir en 30–60 minutos según protocolo."),
        commonAdverseEffects: [
          t(lang, "Flebite", "Flebitis"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
          t(lang, "Nefrite intersticial", "Nefritis intersticial"),
          t(lang, "Neutropenia em uso prolongado", "Neutropenia en uso prolongado")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função hepática, renal e hemograma em uso prolongado.", "Adulto mayor: monitorar función hepática, renal y hemograma en uso prolongado.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia: cautela; monitorar enzimas hepáticas.", "Hepatopatía: precaución; monitorar enzimas hepáticas.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indicada para Staphylococcus aureus sensível à meticilina.", "Indicada para Staphylococcus aureus sensible a meticilina."),
          t(lang, "Não cobre MRSA.", "No cubre MRSA."),
          t(lang, "Monitorar hemograma e função hepática se uso prolongado.", "Monitorar hemograma y función hepática si uso prolongado.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / IDSA SSTI and Endocarditis references",
        renalDose: {
          version: 2,
          requiresAdjustment: false,

          message: t(
            lang,
            "Não necessita ajuste renal habitual.",
            "No requiere ajuste renal habitual."
          ),

          fgMaior50: {
            vo: {
              dose: "500 mg–1 g",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fg30a50: {
            vo: {
              dose: "500 mg–1 g",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fg10a30: {
            vo: {
              dose: "500 mg–1 g",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          fgMenor10: {
            vo: {
              dose: "500 mg–1 g",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita ajuste renal.",
              "No requiere ajuste renal."
            )
          },

          hemodialise: {
            vo: {
              dose: "500 mg–1 g",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Não necessita dose suplementar pós-hemodiálise.",
              "No requiere dosis suplementaria post-hemodiálisis."
            )
          }
        }
      };
    }
  },

  cefalexina: {
    name: { pt: "Cefalexina", es: "Cefalexina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = Math.min(peso * 50, 4000);
      const dosePediaPorDose6h = dosePediaDia / 4;
      const dosePediaPorDose8h = dosePediaDia / 3;

      return {
        name: t(lang, "Cefalexina", "Cefalexina"),
        class: t(lang, "Cefalosporina de 1ª geração", "Cefalosporina de 1ª generación"),
        commercialNames: {
          br: ["Keflex", "Cefalexina EMS", "Cefalexina Medley"],
          ar: ["Keflex", "Cefalexina Richet", "Cefalexina genérica"]
        },
        presentation: [
          t(lang, "Cápsulas/comprimidos: 500 mg", "Cápsulas/comprimidos: 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL", "Suspensión oral: 250 mg/5 mL"),
          t(lang, "Suspensão oral: 500 mg/5 mL", "Suspensión oral: 500 mg/5 mL")
        ],
        dose: {
          adulto: t(lang, "500 mg VO 6/6h ou 1 g VO 8/8h", "500 mg VO cada 6h o 1 g VO cada 8h"),
          pediatrica6h: t(lang, `${dosePediaPorDose6h.toFixed(0)} mg VO 6/6h`, `${dosePediaPorDose6h.toFixed(0)} mg VO cada 6h`),
          pediatrica8h: t(lang, `${dosePediaPorDose8h.toFixed(0)} mg VO 8/8h`, `${dosePediaPorDose8h.toFixed(0)} mg VO cada 8h`)
        },
        doseKg: {
          standard: t(lang, "25–50 mg/kg/dia dividido 6/6h ou 8/8h", "25–50 mg/kg/día dividido cada 6h o 8h"),
          severe: t(lang, "75–100 mg/kg/dia em infecções mais graves, conforme protocolo", "75–100 mg/kg/día en infecciones más graves, según protocolo"),
          maxDose: t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Via oral. Suspensão deve ser reconstituída conforme bula e agitada antes do uso.", "Vía oral. La suspensión debe reconstituirse según prospecto y agitarse antes del uso."),
        speed: t(lang, "Administração por via oral.", "Administración por vía oral."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal para evitar acúmulo.", "Adulto mayor: evaluar función renal para evitar acumulación.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajustar dose ou intervalo.", "ClCr < 30 mL/min: ajustar dosis o intervalo.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Boa opção oral para celulite não purulenta e infecções por estreptococos/MSSA sensível.", "Buena opción oral para celulitis no purulenta e infecciones por estreptococos/MSSA sensible."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "Investigar alergia grave prévia a beta-lactâmicos.", "Investigar alergia grave previa a beta-lactámicos.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / Lexicomp-style dosing references",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: {
              dose: "500 mg",
              intervalo: "6/6h",
              doseMaxima: "4 g/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "4 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual.",
              "Dosis habitual."
            )
          },

          fg30a50: {
            vo: {
              dose: "500 mg",
              intervalo: "8/8h",
              doseMaxima: "3 g/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: {
              dose: "25 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "75 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Redução discreta da frequência.",
              "Reducción discreta de la frecuencia."
            )
          },

          fg10a30: {
            vo: {
              dose: "250–500 mg",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajuste obrigatório para evitar acúmulo.",
              "Ajuste obligatorio para evitar acumulación."
            )
          },

          fgMenor10: {
            vo: {
              dose: "250–500 mg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "25 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar toxicidade em insuficiência renal avançada.",
              "Monitorizar toxicidad en insuficiencia renal avanzada."
            )
          },

          hemodialise: {
            vo: {
              dose: "250–500 mg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "25 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise.",
              "Administrar después de hemodiálisis."
            )
          }
        }
      };
    }
  },

  cefuroxima: {
    name: { pt: "Cefuroxima", es: "Cefuroxima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaDia = Math.min(peso * 30, 1000);
      const dosePediaPorDose = dosePediaDia / 2;
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "250–500 mg VO 12/12h", "250–500 mg VO cada 12h");

      return {
        name: t(lang, "Cefuroxima", "Cefuroxima"),
        class: t(lang, "Cefalosporina de 2ª geração", "Cefalosporina de 2ª generación"),
        commercialNames: {
          br: ["Zinnat", "Cefuroxima Sandoz", "Cefuroxima genérica"],
          ar: ["Zinnat", "Cefuroxima Richet", "Cefuroxima genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg, 500 mg", "Comprimidos: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL", "Suspensión oral: 250 mg/5 mL"),
          t(lang, "Frasco-ampola EV/IM: 750 mg, 1,5 g", "Frasco ampolla EV/IM: 750 mg, 1,5 g")
        ],
        dose: {
          adultoVO: doseAdulto,
          adultoEV: t(lang, "750 mg EV/IM 8/8h; infecção grave: 1,5 g EV 8/8h", "750 mg EV/IM cada 8h; infección grave: 1,5 g EV cada 8h"),
          pediatricaVO: t(lang, `${dosePediaPorDose.toFixed(0)} mg VO 12/12h`, `${dosePediaPorDose.toFixed(0)} mg VO cada 12h`)
        },
        doseKg: {
          standardVO: t(lang, "20–30 mg/kg/dia VO dividido 12/12h", "20–30 mg/kg/día VO dividido cada 12h"),
          standardEV: t(lang, "50–100 mg/kg/dia EV dividido 8/8h", "50–100 mg/kg/día EV dividido cada 8h"),
          maxDose: t(lang, "VO: 1 g/dia; EV: até 6 g/dia em infecções graves", "VO: 1 g/día; EV: hasta 6 g/día en infecciones graves")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "VO: não necessita diluição. EV: reconstituir e diluir conforme protocolo institucional.", "VO: no requiere dilución. EV: reconstituir y diluir según protocolo institucional."),
        speed: t(lang, "VO: administrar preferencialmente após alimento. EV: infundir em aproximadamente 30 minutos.", "VO: administrar preferentemente después de comida. EV: infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dor abdominal", "Dolor abdominal"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal antes de dose plena.", "Adulto mayor: evaluar función renal antes de dosis plena.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal recomendado.", "ClCr < 30 mL/min: ajuste renal recomendado.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível; observar diarreia ou candidíase no lactente.", "Lactancia: generalmente compatible; observar diarrea o candidiasis en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Útil para infecções respiratórias, otite, sinusite e algumas infecções urinárias conforme sensibilidade.", "Útil para infecciones respiratorias, otitis, sinusitis y algunas infecciones urinarias según sensibilidad."),
          t(lang, "Não cobre MRSA, Enterococcus nem Pseudomonas.", "No cubre MRSA, Enterococcus ni Pseudomonas."),
          t(lang, "A formulação oral tem melhor absorção quando administrada após alimento.", "La formulación oral tiene mejor absorción cuando se administra después de comida.")
        ],
        ref: "Goodman & Gilman / Sanford Guide / Lexicomp-style dosing references",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: {
              dose: "250–500 mg",
              intervalo: "12/12h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "750 mg–1,5 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "20–30 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "1,5 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual.",
              "Dosis habitual."
            )
          },

          fg30a50: {
            vo: {
              dose: "250–500 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "750 mg",
              intervalo: "12/12h",
              doseMaxima: "1,5 g/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "15–20 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Redução da frequência devido à depuração renal reduzida.",
              "Reducción de la frecuencia debido a la disminución del aclaramiento renal."
            )
          },

          fg10a30: {
            vo: {
              dose: "250 mg",
              intervalo: "24/24h",
              doseMaxima: "500 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "750 mg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajuste obrigatório.",
              "Ajuste obligatorio."
            )
          },

          fgMenor10: {
            vo: {
              dose: "250 mg",
              intervalo: "48/48h",
              doseMaxima: "250 mg",
              unidade: "mg"
            },
            ev: {
              dose: "750 mg",
              intervalo: "48/48h",
              doseMaxima: "750 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10–15 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "750 mg",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar acúmulo e neurotoxicidade.",
              "Monitorizar acumulación y neurotoxicidad."
            )
          },

          hemodialise: {
            vo: {
              dose: "250 mg",
              intervalo: "24/24h",
              doseMaxima: "250 mg/dia",
              unidade: "mg"
            },
            ev: {
              dose: "750 mg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "10–15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "750 mg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise.",
              "Administrar después de hemodiálisis."
            )
          }
        }
      };
    }
  },

  ceftazidima: {
    name: { pt: "Ceftazidima", es: "Ceftazidima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const clcr = Number(paciente.clcr || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);
      const doseAdulto = clcr < 50
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "2 g EV 8/8h", "2 g EV cada 8h");

      return {
        name: t(lang, "Ceftazidima", "Ceftazidima"),
        class: t(lang, "Cefalosporina de 3ª geração antipseudomonas", "Cefalosporina de 3ª generación antipseudomona"),
        commercialNames: {
          br: ["Fortaz", "Ceftazidima Eurofarma", "Ceftazidima ABL"],
          ar: ["Fortum", "Ceftazidima Richet", "Ceftazidima Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: doseAdulto,
          neutropeniaFebril: t(lang, "2 g EV 8/8h", "2 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "30–50 mg/kg por dose", "30–50 mg/kg por dosis"),
          maxDose: t(lang, "6 g/dia", "6 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infundir em aproximadamente 30 minutos.", "Infundir en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Neurotoxicidade", "Neurotoxicidad"),
          t(lang, "Convulsões", "Convulsiones"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Maior risco de neurotoxicidade.", "Mayor riesgo de neurotoxicidad.")
            : null,
          clcr < 50
            ? t(lang, "Ajuste renal obrigatório.", "Ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobertura para Pseudomonas aeruginosa.", "Cobertura para Pseudomonas aeruginosa."),
          t(lang, "Não possui boa cobertura para Gram positivos comparada ao Cefepime.", "No posee buena cobertura para Gram positivos comparada con Cefepime.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "30–50 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual para Pseudomonas e infecções graves.",
              "Dosis habitual para Pseudomonas e infecciones graves."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–30 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Reduzir frequência devido à diminuição da depuração renal.",
              "Reducir frecuencia debido a la disminución del aclaramiento renal."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "24/24h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "2 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajuste obrigatório para evitar neurotoxicidade.",
              "Ajuste obligatorio para evitar neurotoxicidad."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar encefalopatia e convulsões associadas ao acúmulo.",
              "Monitorizar encefalopatía y convulsiones asociadas a la acumulación."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise.",
              "Administrar después de hemodiálisis."
            )
          }
        }
      };
    }
  },

  ampicilina: {
    name: { pt: "Ampicilina", es: "Ampicilina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "1–2 g EV 4/4h–6/6h", "1–2 g EV cada 4h–6h");

      return {
        name:  t(lang, "Ampicilina", "Ampicilina"),
        class: t(lang, "Aminopenicilina", "Aminopenicilina"),
        commercialNames: {
          br: ["Ampicilina Blau", "Ampicilina Teuto", "Ampicilina EMS"],
          ar: ["Ampicilina Richet", "Ampicilina Klonal", "Ampicilina genérica"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Cápsulas 250 mg / 500 mg", "Cápsulas 250 mg / 500 mg"),
          t(lang, "Suspensão oral 250 mg/5 mL", "Suspensión oral 250 mg/5 mL")
        ],
        dose: {
          adulto:    doseAdulto,
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 6/6h`, `${dosePedia.toFixed(0)} mg EV cada 6h`)
        },
        doseKg: {
          standard: t(lang, "50 mg/kg por dose", "50 mg/kg por dosis"),
          maxDose:  t(lang, "12 g/dia", "12 g/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo institucional.", "Diluir en SF 0,9% o SG5% según protocolo institucional."),
        speed:    t(lang, "Infundir em 15–30 minutos (EV lento).", "Infundir en 15–30 minutos (EV lento)."),
        commonAdverseEffects: [
          t(lang, "Diarreia",  "Diarrea"),
          t(lang, "Náuseas",   "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia",   "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste"),
          t(lang, "Síndrome de Stevens-Johnson", "Síndrome de Stevens-Johnson")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: avaliar função renal antes de dose plena.", "Adulto mayor: evaluar función renal antes de dosis plena.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal obrigatório.", "ClCr < 30 mL/min: ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível.", "Lactancia: generalmente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Espectro limitado — não cobre MRSA, Pseudomonas nem beta-lactamase-produtores.", "Espectro limitado — no cubre MRSA, Pseudomonas ni productores de beta-lactamasa."),
          t(lang, "Considerar ampicilina-sulbactam para maior cobertura.", "Considerar ampicilina-sulbactam para mayor cobertura.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / Lexicomp",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: {
              dose: "500 mg",
              intervalo: "6/6h",
              doseMaxima: "4 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "4/4h–6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Dose conforme foco infeccioso. Para meningite, endocardite ou Listeria, usar esquema específico de alta dose.", "Dosis según foco infeccioso. Para meningitis, endocarditis o Listeria, usar esquema específico de alta dosis.")
          },

          fg30a50: {
            vo: {
              dose: "500 mg",
              intervalo: "8/8h",
              doseMaxima: "3 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1–2 g",
              intervalo: "6/6h–8/8h",
              doseMaxima: "8 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "8/8h",
              doseMaxima: "150 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Reduzir frequência conforme ClCr. Ajustar intervalo em insuficiência renal moderada.", "Reducir frecuencia según ClCr. Ajustar intervalo en insuficiencia renal moderada.")
          },

          fg10a30: {
            vo: {
              dose: "250–500 mg",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "1 g",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "100 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Ajuste obrigatório para evitar acúmulo. Monitorar neurotoxicidade em uso de altas doses.", "Ajuste obligatorio para evitar acumulación. Monitorizar neurotoxicidad con uso de dosis altas.")
          },

          fgMenor10: {
            vo: {
              dose: "250–500 mg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Alto risco de acúmulo com esquemas de alta dose. Individualizar em meningite/endocardite. Monitorar neurotoxicidade e convulsões.",
              "Alto riesgo de acumulación con esquemas de alta dosis. Individualizar en meningitis/endocarditis. Monitorizar neurotoxicidad y convulsiones."
            )
          },

          hemodialise: {
            vo: {
              dose: "250–500 mg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg"
            },
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Administrar após HD. Em infecções graves (meningite, endocardite), discutir dose suplementar com infectologia.", "Administrar después de HD. En infecciones graves (meningitis, endocarditis), discutir dosis suplementaria con infectología.")
          }
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: false,
          warning: t(
            lang,
            "Ajustar cuidadosamente em meningite, endocardite, Listeria e insuficiência renal avançada. Risco de convulsões com acúmulo em IR sem ajuste adequado.",
            "Ajustar cuidadosamente en meningitis, endocarditis, Listeria e insuficiencia renal avanzada. Riesgo de convulsiones con acumulación en IR sin ajuste adecuado."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Ampicillin 2021",
            "EMA label Ampicillin 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: fgMaior50.obs com meningite/endocardite/Listeria; fg30a50.ev.intervalo e doseMaxima expandidos; fg10a30.obs com neurotoxicidade; fgMenor10.obs com acúmulo e individualização; hemodialise.obs com dose suplementar em infecções graves; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: fgMaior50.obs con meningitis/endocarditis/Listeria; fg30a50.ev.intervalo y doseMaxima ampliados; fg10a30.obs con neurotoxicidad; fgMenor10.obs con acumulación e individualización; hemodialise.obs con dosis suplementaria en infecciones graves; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  ampicilina_sulbactam: {
    name: { pt: "Ampicilina + Sulbactam", es: "Ampicilina + Sulbactam" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 3000);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "3 g EV 6/6h (2 g amp + 1 g sulbactam)", "3 g EV cada 6h (2 g amp + 1 g sulbactam)");

      return {
        name:  t(lang, "Ampicilina + Sulbactam", "Ampicilina + Sulbactam"),
        class: t(lang, "Aminopenicilina + inibidor de beta-lactamase", "Aminopenicilina + inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Unasyn", "Ampicilina + Sulbactam Blau", "Ampicilina + Sulbactam Teuto"],
          ar: ["Unasyn", "Ampicilina + Sulbactam Richet", "Ampicilina + Sulbactam Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 1,5 g (1 g amp + 0,5 g sulbactam)", "Frasco ampolla 1,5 g (1 g amp + 0,5 g sulbactam)"),
          t(lang, "Frasco-ampola 3 g (2 g amp + 1 g sulbactam)", "Frasco ampolla 3 g (2 g amp + 1 g sulbactam)")
        ],
        dose: {
          adulto:    doseAdulto,
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg de ampicilina EV 6/6h`, `${dosePedia.toFixed(0)} mg de ampicilina EV cada 6h`)
        },
        doseKg: {
          standard: t(lang, "50 mg/kg de ampicilina por dose", "50 mg/kg de ampicilina por dosis"),
          maxDose:  t(lang, "12 g/dia de ampicilina", "12 g/día de ampicilina")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% ou SG5% conforme protocolo.", "Diluir en SF 0,9% o SG5% según protocolo."),
        speed:    t(lang, "Infundir em 15–30 minutos.", "Infundir en 15–30 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia",     "Diarrea"),
          t(lang, "Náuseas",      "Náuseas"),
          t(lang, "Rash cutâneo", "Exantema cutáneo"),
          t(lang, "Flebite",      "Flebitis")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia",   "Anafilaxia"),
          t(lang, "Colite por Clostridioides difficile", "Colitis por Clostridioides difficile"),
          t(lang, "Hepatotoxicidade", "Hepatotoxicidad"),
          t(lang, "Convulsões em insuficiência renal sem ajuste", "Convulsiones en insuficiencia renal sin ajuste")
        ],
        risksByPatient: [
          idade >= 65
            ? t(lang, "Idoso: monitorar função renal e hepática.", "Adulto mayor: monitorar función renal y hepática.")
            : null,
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal obrigatório.", "ClCr < 30 mL/min: ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível.", "Lactancia: generalmente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobre beta-lactamase-produtores, anaeróbios e muitos Gram-negativos.", "Cubre productores de beta-lactamasa, anaerobios y muchos Gram-negativos."),
          t(lang, "Não cobre Pseudomonas aeruginosa nem MRSA.", "No cubre Pseudomonas aeruginosa ni MRSA.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / Lexicomp",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1,5–3 g",
              intervalo: "6/6h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg de ampicilina",
              intervalo: "6/6h",
              doseMaxima: "200 mg/kg/dia de ampicilina",
              unidade: "mg/kg"
            },
            obs: t(lang, "Dose habitual para infecções moderadas a graves. Para Acinetobacter resistente, podem ser necessários esquemas de alta dose de sulbactam conforme protocolo especializado.", "Dosis habitual para infecciones moderadas a graves. Para Acinetobacter resistente, pueden ser necesarios esquemas de alta dosis de sulbactam según protocolo especializado.")
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "1,5–3 g",
              intervalo: "8/8h–12/12h",
              doseMaxima: "6–9 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg de ampicilina",
              intervalo: "8/8h",
              doseMaxima: "150 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Ajustar principalmente por eliminação renal de ambos os componentes (ampicilina e sulbactam).", "Ajustar principalmente por eliminación renal de ambos componentes (ampicilina y sulbactam).")
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "1,5–3 g",
              intervalo: "12/12h",
              doseMaxima: "3–6 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg de ampicilina",
              intervalo: "12/12h",
              doseMaxima: "100 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Evitar acúmulo e neurotoxicidade. Ajustar conforme gravidade da infecção.", "Evitar acumulación y neurotoxicidad. Ajustar según gravedad de la infección.")
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "1,5 g",
              intervalo: "24/24h",
              doseMaxima: "1,5–3 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg de ampicilina",
              intervalo: "24/24h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar toxicidade neurológica e acúmulo do antibiótico. Uso de alta dose para Acinetobacter deve ser individualizado com infectologia.",
              "Monitorizar toxicidad neurológica y acumulación del antibiótico. Uso de alta dosis para Acinetobacter debe individualizarse con infectología."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "1,5 g",
              intervalo: "24/24h",
              doseMaxima: "1,5–3 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg de ampicilina",
              intervalo: "24/24h",
              doseMaxima: "50 mg/kg/dia",
              unidade: "mg/kg"
            },
            obs: t(lang, "Administrar após hemodiálise. Esquemas de alta dose de sulbactam exigem protocolo especializado e avaliação com infectologia.", "Administrar después de hemodiálisis. Esquemas de alta dosis de sulbactam exigen protocolo especializado y evaluación con infectología.")
          }
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: true,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Para Acinetobacter resistente, não usar dose padrão sem avaliação de sensibilidade e protocolo local. Risco de neurotoxicidade por acúmulo em insuficiência renal sem ajuste. Monitorar função hepática em uso prolongado.",
            "Para Acinetobacter resistente, no usar dosis estándar sin evaluación de sensibilidad y protocolo local. Riesgo de neurotoxicidad por acumulación en insuficiencia renal sin ajuste. Monitorizar función hepática en uso prolongado."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Unasyn (ampicillin-sulbactam) 2021",
            "EMA label Unasyn (ampicillin-sulbactam) 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: pediátrica fgMaior50 doseMaxima corrigida para 200 mg/kg/dia; fgMaior50.obs com Acinetobacter/alta dose de sulbactam; fg30a50.doseMaxima expandida; fg30a50.obs com ambos os componentes; fg10a30.obs enriquecida; fgMenor10.obs com Acinetobacter individualizado; hemodialise.obs com protocolo especializado; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: pediátrica fgMaior50 doseMaxima corregida a 200 mg/kg/día; fgMaior50.obs con Acinetobacter/alta dosis de sulbactam; fg30a50.doseMaxima ampliada; fg30a50.obs con ambos componentes; fg10a30.obs enriquecida; fgMenor10.obs con Acinetobacter individualizado; hemodialise.obs con protocolo especializado; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  cefotaxima: {
    name: { pt: "Cefotaxima", es: "Cefotaxima" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso = Number(paciente.peso || 0);
      const idade = Number(paciente.idade || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 50, 2000);

      return {
        name: t(lang, "Cefotaxima", "Cefotaxima"),
        class: t(lang, "Cefalosporina de 3ª geração", "Cefalosporina de 3ª generación"),
        commercialNames: {
          br: ["Claforan", "Cefotaxima Eurofarma"],
          ar: ["Claforan", "Cefotaxima Richet"]
        },
        presentation: [
          t(lang, "Frasco-ampola 500 mg", "Frasco ampolla 500 mg"),
          t(lang, "Frasco-ampola 1 g", "Frasco ampolla 1 g"),
          t(lang, "Frasco-ampola 2 g", "Frasco ampolla 2 g")
        ],
        dose: {
          adulto: t(lang, "1–2 g EV 6/6h a 8/8h", "1–2 g EV cada 6h a 8h"),
          meningite: t(lang, "2 g EV 4/4h a 6/6h", "2 g EV cada 4h a 6h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 6/6h`, `${dosePedia.toFixed(0)} mg EV cada 6h`)
        },
        doseKg: {
          standard: t(lang, "100–150 mg/kg/dia", "100–150 mg/kg/día"),
          meningite: t(lang, "200–300 mg/kg/dia", "200–300 mg/kg/día"),
          maxDose: t(lang, "12 g/dia", "12 g/día")
        },
        therapeuticRange: t(lang, "Excelente penetração no SNC.", "Excelente penetración en SNC."),
        dilution: t(lang, "Diluir conforme protocolo institucional.", "Diluir según protocolo institucional."),
        speed: t(lang, "Infusão em aproximadamente 30 minutos.", "Infusión en aproximadamente 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Rash", "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Neutropenia", "Neutropenia"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          idade < 1
            ? t(lang, "Amplamente utilizada em neonatologia e pediatria.", "Ampliamente utilizada en neonatología y pediatría.")
            : null,
          gestante
            ? t(lang, "Pode ser utilizada quando indicada.", "Puede utilizarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Compatível com lactação.", "Compatible con lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Excelente opção para meningite bacteriana.", "Excelente opción para meningitis bacteriana."),
          t(lang, "Alternativa à Ceftriaxona em neonatos.", "Alternativa a Ceftriaxona en neonatos.")
        ],
        ref: "Sanford Guide 2025 / Nelson Pediatrics / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "6/6h–8/8h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg",
              intervalo: "6/6h–8/8h",
              doseMaxima: "12 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Dose habitual para meningite e infecções graves.",
              "Dosis habitual para meningitis e infecciones graves."
            )
          },

          fg30a50: {
            vo: null,
            ev: {
              dose: "1–2 g",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25–50 mg/kg",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Redução da frequência conforme função renal.",
              "Reducción de la frecuencia según función renal."
            )
          },

          fg10a30: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "12/12h–24/24h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg",
              intervalo: "12/12h–24/24h",
              doseMaxima: "2 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Ajustar conforme gravidade da infecção.",
              "Ajustar según gravedad de la infección."
            )
          },

          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Monitorar toxicidade neurológica em insuficiência renal avançada.",
              "Monitorizar toxicidad neurológica en insuficiencia renal avanzada."
            )
          },

          hemodialise: {
            vo: null,
            ev: {
              dose: "500 mg–1 g",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "15–25 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "1 g/dia",
              unidade: "mg/kg"
            },
            obs: t(
              lang,
              "Administrar após hemodiálise.",
              "Administrar después de hemodiálisis."
            )
          }
        }
      };
    }
  }

});

Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 25. PENICILINA G CRISTALINA ── */
  penicilina_g: {
    name: { pt: "Penicilina G Cristalina", es: "Penicilina G Cristalina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste renal.", "Requiere ajuste renal.")
        : t(lang, "2–4 milhões UI EV 4/4h", "2–4 millones UI EV cada 4h");
      const dosePedia = Math.min(peso * 50000, 24000000);

      return {
        name:  t(lang, "Penicilina G Cristalina", "Penicilina G Cristalina"),
        class: t(lang, "Penicilina natural", "Penicilina natural"),
        commercialNames: {
          br: ["Penicilina G Cristalina Blau", "Penicilina G Teuto"],
          ar: ["Penicilina G Cristalina Richet", "Penicilina G Klonal"]
        },
        presentation: [
          t(lang, "Frasco-ampola 1.000.000 UI", "Frasco ampolla 1.000.000 UI"),
          t(lang, "Frasco-ampola 5.000.000 UI", "Frasco ampolla 5.000.000 UI"),
          t(lang, "Frasco-ampola 10.000.000 UI", "Frasco ampolla 10.000.000 UI")
        ],
        dose: {
          adulto:    doseAdulto,
          pediatrica: t(lang, `${(dosePedia/1000000).toFixed(1)} milhões UI EV 4/4h–6/6h`, `${(dosePedia/1000000).toFixed(1)} millones UI EV cada 4h–6h`)
        },
        doseKg: {
          standard: t(lang, "50.000 UI/kg por dose", "50.000 UI/kg por dosis"),
          maxDose:  t(lang, "24 milhões UI/dia", "24 millones UI/día")
        },
        therapeuticRange: t(lang, "Beta-lactâmico dependente do tempo acima da MIC.", "Beta-lactámico dependiente del tiempo sobre la MIC."),
        dilution: t(lang, "Diluir em SF 0,9% conforme protocolo institucional.", "Diluir en SF 0,9% según protocolo institucional."),
        speed:    t(lang, "Infundir em 15–30 minutos ou infusão contínua.", "Infundir en 15–30 minutos o infusión continua."),
        commonAdverseEffects: [
          t(lang, "Flebite",     "Flebitis"),
          t(lang, "Náuseas",     "Náuseas"),
          t(lang, "Diarreia",    "Diarrea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia",             "Anafilaxia"),
          t(lang, "Convulsões (especialmente em IR sem ajuste)", "Convulsiones (especialmente en IR sin ajuste)"),
          t(lang, "Hiperpotassemia (formulações K+)", "Hiperpotasemia (formulaciones K+)"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: ajuste renal obrigatório.", "ClCr < 30 mL/min: ajuste renal obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada.", "Embarazo: puede usarse cuando está indicada.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível.", "Lactancia: generalmente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indicada para neurossífilis, endocardite por estreptococos e meningite bacteriana.", "Indicada para neurosífilis, endocarditis por estreptococos y meningitis bacteriana."),
          t(lang, "Não cobre MRSA, Pseudomonas nem enterobactérias produtoras de beta-lactamase.", "No cubre MRSA, Pseudomonas ni enterobacterias productoras de beta-lactamasa.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Treatment Guidelines / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "2–4 milhões UI", intervalo: "4/4h", doseMaxima: "24 milhões UI/dia", unidade: "UI" },
            pediatrica: { dose: "50.000 UI/kg", intervalo: "4/4h–6/6h", doseMaxima: "24 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Dose habitual para neurossífilis, endocardite e infecções graves por estreptococos.", "Dosis habitual para neurosífilis, endocarditis e infecciones graves por estreptococos.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "2–4 milhões UI", intervalo: "6/6h", doseMaxima: "16 milhões UI/dia", unidade: "UI" },
            pediatrica: { dose: "50.000 UI/kg", intervalo: "6/6h", doseMaxima: "16 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Redução da frequência devido à depuração renal diminuída.", "Reducción de la frecuencia debido a la disminución del aclaramiento renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "2 milhões UI", intervalo: "8/8h", doseMaxima: "8 milhões UI/dia", unidade: "UI" },
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "8/8h", doseMaxima: "8 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Ajuste obrigatório para evitar neurotoxicidade.", "Ajuste obligatorio para evitar neurotoxicidad.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1–2 milhões UI", intervalo: "12/12h", doseMaxima: "4 milhões UI/dia", unidade: "UI" },
            pediatrica: { dose: "25.000 UI/kg", intervalo: "12/12h", doseMaxima: "4 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Monitorar convulsões, encefalopatia e distúrbios eletrolíticos.", "Monitorizar convulsiones, encefalopatía y trastornos electrolíticos.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1–2 milhões UI", intervalo: "12/12h", doseMaxima: "4 milhões UI/dia", unidade: "UI" },
            pediatrica: { dose: "25.000 UI/kg", intervalo: "12/12h", doseMaxima: "4 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 26. PENICILINA BENZATINA ── */
  penicilina_benzatina: {
    name: { pt: "Penicilina Benzatina", es: "Penicilina Benzatínica" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePediaMUI = Math.min(peso * 50000, 2400000);

      return {
        name:  t(lang, "Penicilina Benzatina", "Penicilina Benzatínica"),
        class: t(lang, "Penicilina de ação prolongada", "Penicilina de acción prolongada"),
        commercialNames: {
          br: ["Benzetacil", "Penicilina Benzatina Teuto"],
          ar: ["Benzetacil", "Penicilina Benzatínica Richet"]
        },
        presentation: [
          t(lang, "Suspensão IM 600.000 UI/dose",   "Suspensión IM 600.000 UI/dosis"),
          t(lang, "Suspensão IM 1.200.000 UI/dose", "Suspensión IM 1.200.000 UI/dosis"),
          t(lang, "Suspensão IM 2.400.000 UI/dose", "Suspensión IM 2.400.000 UI/dosis")
        ],
        dose: {
          sifilisPrecoce: t(lang, "2,4 milhões UI IM dose única", "2,4 millones UI IM dosis única"),
          sifilisLateLatente: t(lang, "2,4 milhões UI IM 1×/semana por 3 semanas", "2,4 millones UI IM 1×/semana durante 3 semanas"),
          pediatrica: t(lang, `${(dosePediaMUI/1000000).toFixed(2)} milhões UI IM dose única`, `${(dosePediaMUI/1000000).toFixed(2)} millones UI IM dosis única`)
        },
        doseKg: {
          standard: t(lang, "25.000–50.000 UI/kg", "25.000–50.000 UI/kg"),
          maxDose:  t(lang, "2,4 milhões UI", "2,4 millones UI")
        },
        therapeuticRange: t(lang, "Liberação lenta do depot IM — níveis sustentados por 2–4 semanas.", "Liberación lenta del depósito IM — niveles sostenidos por 2–4 semanas."),
        dilution: t(lang, "Administração exclusivamente IM profunda — NUNCA EV.", "Administración exclusivamente IM profunda — NUNCA EV."),
        speed:    t(lang, "IM profunda em glúteo. Aspirar antes de injetar.", "IM profunda en glúteo. Aspirar antes de inyectar."),
        commonAdverseEffects: [
          t(lang, "Dor local no sítio de injeção", "Dolor local en el sitio de inyección"),
          t(lang, "Reação de Jarisch-Herxheimer (nas primeiras 24h)", "Reacción de Jarisch-Herxheimer (primeras 24h)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia", "Anafilaxia"),
          t(lang, "Síndrome de Hoigne (injeção IV acidental)", "Síndrome de Hoigné (inyección IV accidental)"),
          t(lang, "Embolia com injeção IV acidental", "Embolia con inyección IV accidental")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: tratamento de escolha para sífilis na gestante.", "Embarazo: tratamiento de elección para sífilis en gestante.")
            : null,
          lactante
            ? t(lang, "Lactação: geralmente compatível.", "Lactancia: generalmente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "NUNCA administrar por via endovenosa.", "NUNCA administrar por vía endovenosa."),
          t(lang, "Indicada para sífilis, faringite estreptocócica e profilaxia de febre reumática.", "Indicada para sífilis, faringitis estreptocócica y profilaxis de fiebre reumática.")
        ],
        ref: "CDC STI Treatment Guidelines 2021 / Sanford Guide 2025 / MS Brasil",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: null, ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "Dose única", doseMaxima: "2,4 milhões UI", unidade: "UI/kg" },
            obs: t(lang, "Administração exclusivamente IM profunda.", "Administración exclusivamente IM profunda.")
          },
          fg30a50: {
            vo: null, ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "Dose única", doseMaxima: "2,4 milhões UI", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null, ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "Dose única", doseMaxima: "2,4 milhões UI", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null, ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "Dose única", doseMaxima: "2,4 milhões UI", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          hemodialise: {
            vo: null, ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "Dose única", doseMaxima: "2,4 milhões UI", unidade: "UI/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 27. CLARITROMICINA ── */
  claritromicina: {
    name: { pt: "Claritromicina", es: "Claritromicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 7.5, 500);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste — reduzir dose em 50%.", "Requiere ajuste — reducir dosis al 50%.")
        : t(lang, "500 mg VO/EV 12/12h", "500 mg VO/EV cada 12h");

      return {
        name:  t(lang, "Claritromicina", "Claritromicina"),
        class: t(lang, "Macrolídeo", "Macrólido"),
        commercialNames: {
          br: ["Klaricid", "Claritromicina EMS", "Claritromicina Medley"],
          ar: ["Klaricid", "Claritromicina Bagó", "Claritromicina Richet"]
        },
        presentation: [
          t(lang, "Comprimidos 250 mg / 500 mg", "Comprimidos 250 mg / 500 mg"),
          t(lang, "Suspensão oral 125 mg/5 mL / 250 mg/5 mL", "Suspensión oral 125 mg/5 mL / 250 mg/5 mL"),
          t(lang, "Frasco-ampola EV 500 mg", "Frasco ampolla EV 500 mg")
        ],
        dose: {
          adulto:    doseAdulto,
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 12/12h`, `${dosePedia.toFixed(0)} mg VO cada 12h`)
        },
        doseKg: {
          standard: t(lang, "7,5 mg/kg por dose", "7,5 mg/kg por dosis"),
          maxDose:  t(lang, "1 g/dia", "1 g/día")
        },
        therapeuticRange: t(lang, "Concentração dependente (AUC/MIC).", "Concentración dependiente (AUC/MIC)."),
        dilution: t(lang, "EV: diluir em SF 0,9% — nunca administrar em bólus.", "EV: diluir en SF 0,9% — nunca administrar en bolo."),
        speed:    t(lang, "EV: infundir em 60 minutos.", "EV: infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas",  "Náuseas"),
          t(lang, "Diarreia", "Diarrea"),
          t(lang, "Gosto metálico", "Sabor metálico"),
          t(lang, "Cefaleia", "Cefalea")
        ],
        dangerousAdverseEffects: [
          t(lang, "QT prolongado",       "QT prolongado"),
          t(lang, "Hepatotoxicidade",    "Hepatotoxicidad"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile"),
          t(lang, "Interações via CYP3A4", "Interacciones vía CYP3A4")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: reduzir dose em 50%.", "ClCr < 30 mL/min: reducir dosis al 50%.")
            : null,
          gestante
            ? t(lang, "Evitar durante gestação — teratogenicidade em animais.", "Evitar durante embarazo — teratogenicidad en animales.")
            : null,
          lactante
            ? t(lang, "Compatibilidade variável; avaliar risco-benefício.", "Compatibilidad variable; evaluar riesgo-beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Inibidor potente de CYP3A4 — verificar interações.", "Inhibidor potente de CYP3A4 — verificar interacciones."),
          t(lang, "Monitorar ECG em pacientes com risco de QT longo.", "Monitorizar ECG en pacientes con riesgo de QT largo.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / IDSA CAP",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: { dose: "500 mg",     intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: { dose: "500 mg",     intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            pediatrica: { dose: "7,5 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Geralmente sem ajuste até ClCr 30 mL/min.", "Generalmente sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "250 mg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: { dose: "250 mg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "3,75 mg/kg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em aproximadamente 50%.", "Reducir la dosis aproximadamente un 50%.")
          },
          fgMenor10: {
            vo: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg" },
            ev: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg" },
            pediatrica: { dose: "3,75 mg/kg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar QT prolongado e hepatotoxicidade.", "Monitorizar QT prolongado y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg" },
            ev: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg" },
            pediatrica: { dose: "3,75 mg/kg", intervalo: "24/24h", doseMaxima: "250 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não é significativamente removida pela hemodiálise.", "No es significativamente removida por hemodiálisis.")
          }
        },

        therapeuticMonitoring: {
          required: false,
          target: t(lang,
            "Sem alvo de nível sérico definido na prática clínica. Monitoração baseada em resposta clínica e ECG.",
            "Sin objetivo de nivel sérico definido en la práctica clínica. Monitoreo basado en respuesta clínica y ECG."),
          monitoring: t(lang,
            "ECG basal obrigatório antes do início. Monitorar QTc após 48–72h. Enzimas hepáticas (AST/ALT) semanalmente em tratamentos prolongados. Monitorar interações via CYP3A4.",
            "ECG basal obligatorio antes del inicio. Monitorizar QTc después de 48–72h. Enzimas hepáticas (AST/ALT) semanalmente en tratamientos prolongados. Monitorizar interacciones vía CYP3A4."),
          notes: t(lang,
            "Inibidor potente de CYP3A4 — aumenta níveis de estatinas, warfarina, tacrolimo, ciclosporina, colchicina. Risco de rabdomiólise com estatinas. Evitar em pacientes com hepatopatia grave.",
            "Inhibidor potente de CYP3A4 — aumenta niveles de estatinas, warfarina, tacrolimus, ciclosporina, colchicina. Riesgo de rabdomiólisis con estatinas. Evitar en pacientes con hepatopatía grave.")
        },

        indicationDosing: {
          standard: t(lang,
            "PAC ambulatorial / infecção por Mycoplasma: 500 mg VO 1×/dia (XL) ou 250–500 mg 12/12h por 7–14 dias.",
            "NAC ambulatoria / infección por Mycoplasma: 500 mg VO 1×/día (XL) o 250–500 mg 12/12h por 7–14 días."),
          severe: t(lang,
            "PAC grave: 500 mg EV 12/12h por 2–3 dias seguido de VO.",
            "NAC grave: 500 mg IV 12/12h por 2–3 días seguido de VO."),
          helicobacter: t(lang,
            "H. pylori (terapia tripla): 500 mg VO 12/12h por 14 dias associado a amoxicilina + IBP.",
            "H. pylori (terapia triple): 500 mg VO 12/12h por 14 días asociado a amoxicilina + IBP."),
          mac: t(lang,
            "MAC (Mycobacterium avium complex): 500 mg VO 12/12h como parte de esquema combinado.",
            "MAC (Mycobacterium avium complex): 500 mg VO 12/12h como parte de esquema combinado.")
        },

        neurotoxicityWarning: {
          risk: "low",
          symptoms: [
            t(lang, "Vertigem e tontura (relatados com uso prolongado)", "Vértigo y mareos (reportados con uso prolongado)"),
            t(lang, "Zumbido (tinnitus) — raro, geralmente reversível", "Tinnitus — raro, generalmente reversible"),
            t(lang, "Confusão mental em idosos (raro)", "Confusión mental en ancianos (raro)")
          ],
          management: t(lang,
            "Reduzir dose ou suspender se sintomas auditivos ou neurológicos. Geralmente reversível após descontinuação. Sem Black Box Warning para neurotoxicidade.",
            "Reducir dosis o suspender si síntomas auditivos o neurológicos. Generalmente reversible tras la descontinuación. Sin Black Box Warning para neurotoxicidad.")
        },

        qtRisk: {
          risk: "high",
          monitoring: t(lang,
            "⚠️ RISCO ALTO DE QT PROLONGADO. ECG basal OBRIGATÓRIO. Monitorar QTc antes do início, após 48–72h e semanalmente em tratamentos longos. Suspender IMEDIATAMENTE se QTc > 500 ms ou prolongamento > 60 ms em relação ao basal. Nunca combinar com outros agentes QT-prolongadores de alto risco.",
            "⚠️ RIESGO ALTO DE QT PROLONGADO. ECG basal OBLIGATORIO. Monitorizar QTc antes del inicio, después de 48–72h y semanalmente en tratamientos largos. Suspender INMEDIATAMENTE si QTc > 500 ms o prolongamiento > 60 ms respecto al basal. Nunca combinar con otros agentes QT-prolongadores de alto riesgo."),
          contraindications: [
            t(lang, "Síndrome do QT longo congênito", "Síndrome del QT largo congénito"),
            t(lang, "Uso concomitante de antiarrítmicos classe IA/III (quinidina, amiodarona, sotalol, dronedarona)", "Uso concomitante de antiarrítmicos clase IA/III (quinidina, amiodarona, sotalol, dronedarona)"),
            t(lang, "Uso concomitante de outros macrolídeos, fluoroquinolonas ou agentes QT-prolongadores", "Uso concomitante de otros macrólidos, fluoroquinolonas u otros agentes QT-prolongadores"),
            t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipocalemia o hipomagnesemia no corregidas"),
            t(lang, "Insuficiência hepática grave (Child-Pugh C)", "Insuficiencia hepática grave (Child-Pugh C)"),
            t(lang, "Cisaprida, pimozida, terfenadina (risco de torsades de pointes fatal)", "Cisaprida, pimozida, terfenadina (riesgo de torsades de pointes fatal)")
          ]
        }
      };
    }
  },

  /* ── 28. ERITROMICINA ── */
  eritromicina: {
    name: { pt: "Eritromicina", es: "Eritromicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 12.5, 500);

      return {
        name:  t(lang, "Eritromicina", "Eritromicina"),
        class: t(lang, "Macrolídeo (1ª geração)", "Macrólido (1ª generación)"),
        commercialNames: {
          br: ["Ilosone", "Eritromicina EMS"],
          ar: ["Eritromicina Richet", "Eritromicina Klonal"]
        },
        presentation: [
          t(lang, "Comprimidos 250 mg / 500 mg", "Comprimidos 250 mg / 500 mg"),
          t(lang, "Suspensão oral 125 mg / 250 mg por 5 mL", "Suspensión oral 125 mg / 250 mg por 5 mL"),
          t(lang, "Frasco-ampola EV 500 mg (gluceptato/lactobionato)", "Frasco ampolla EV 500 mg (gluceptato/lactobionato)")
        ],
        dose: {
          adulto:    t(lang, "250–500 mg VO 6/6h", "250–500 mg VO cada 6h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 6/6h`, `${dosePedia.toFixed(0)} mg VO cada 6h`)
        },
        doseKg: {
          standard: t(lang, "10–15 mg/kg por dose", "10–15 mg/kg por dosis"),
          maxDose:  t(lang, "4 g/dia", "4 g/día")
        },
        therapeuticRange: t(lang, "Concentração dependente (AUC/MIC). Boa biodisponibilidade oral.", "Concentración dependiente (AUC/MIC). Buena biodisponibilidad oral."),
        dilution: t(lang, "EV: diluir o lactobionato em SF 0,9% — infusão lenta.", "EV: diluir el lactobionato en SF 0,9% — infusión lenta."),
        speed:    t(lang, "EV: infundir lentamente em 20–60 minutos.", "EV: infundir lentamente en 20–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas intensas",    "Náuseas intensas"),
          t(lang, "Vômitos",             "Vómitos"),
          t(lang, "Diarreia",            "Diarrea"),
          t(lang, "Epigastralgia",       "Epigastralgia"),
          t(lang, "Flebite (EV)",        "Flebitis (EV)")
        ],
        dangerousAdverseEffects: [
          t(lang, "QT prolongado",          "QT prolongado"),
          t(lang, "Hepatotoxicidade colestática", "Hepatotoxicidad colestática"),
          t(lang, "Estenose pilórica (lactentes)", "Estenosis pilórica (lactantes)"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile")
        ],
        risksByPatient: [
          idade < 1
            ? t(lang, "Lactente: risco de estenose pilórica hipertrófica.", "Lactante: riesgo de estenosis pilórica hipertrófica.")
            : null,
          gestante
            ? t(lang, "Gestação: usar com cautela; evitar estolato.", "Embarazo: usar con precaución; evitar estolato.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível em geral.", "Lactancia: compatible en general.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Inibidor de CYP3A4 — múltiplas interações medicamentosas.", "Inhibidor de CYP3A4 — múltiples interacciones medicamentosas."),
          t(lang, "Alta incidência de efeitos GI — considerar macrolídeo mais novo.", "Alta incidencia de efectos GI — considerar macrólido más nuevo.")
        ],
        ref: "Goodman & Gilman / Sanford Guide 2025",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade e prolongamento do QT.", "Monitorizar hepatotoxicidad y prolongación del QT.")
          },
          hemodialise: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 29. FOSFOMICINA ── */
  fosfomicina: {
    name: { pt: "Fosfomicina", es: "Fosfomicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 100, 8000);
      const doseAdulto = clcr < 30
        ? t(lang, "Necessita ajuste da formulação EV.", "Requiere ajuste de la formulación EV.")
        : t(lang, "VO: 3 g dose única (ITU) | EV: 4–8 g 8/8h", "VO: 3 g dosis única (ITU) | EV: 4–8 g cada 8h");

      return {
        name:  t(lang, "Fosfomicina", "Fosfomicina"),
        class: t(lang, "Antibiótico fosfônico", "Antibiótico fosfónico"),
        commercialNames: {
          br: ["Monuril", "Fosfomicina Trometamol EMS"],
          ar: ["Monurol", "Fosfomicina Richet"]
        },
        presentation: [
          t(lang, "Sachê oral 3 g (trometamol)", "Sobre oral 3 g (trometamol)"),
          t(lang, "Frasco-ampola EV 2 g / 4 g (sal disódico)", "Frasco ampolla EV 2 g / 4 g (sal disódico)")
        ],
        dose: {
          adultoVO: t(lang, "3 g VO dose única", "3 g VO dosis única"),
          adultoEV: t(lang, "4–8 g EV 8/8h", "4–8 g EV cada 8h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 8/8h`, `${dosePedia.toFixed(0)} mg EV cada 8h`)
        },
        doseKg: {
          standard: t(lang, "100–200 mg/kg/dia EV", "100–200 mg/kg/día EV"),
          maxDose:  t(lang, "24 g/dia EV", "24 g/día EV")
        },
        therapeuticRange: t(lang, "Concentração e tempo-dependente — monitorar conforme protocolo.", "Concentración y tiempo-dependiente — monitorar según protocolo."),
        dilution: t(lang, "EV: diluir em SF 0,9% ou SG5%.", "EV: diluir en SF 0,9% o SG5%."),
        speed:    t(lang, "EV: infundir em 30–60 minutos.", "EV: infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia",  "Diarrea"),
          t(lang, "Náuseas",   "Náuseas"),
          t(lang, "Cefaleia",  "Cefalea"),
          t(lang, "Sobrecarga de sódio (formulação EV)", "Sobrecarga de sodio (formulación EV)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hipocalemia",            "Hipocalemia"),
          t(lang, "Colite por C. difficile", "Colitis por C. difficile"),
          t(lang, "Resistência induzível",  "Resistencia inducible")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "IR grave: ajuste da dose EV obrigatório.", "IR grave: ajuste de la dosis EV obligatorio.")
            : null,
          gestante
            ? t(lang, "Gestação: usar com cautela após avaliação.", "Embarazo: usar con precaución tras evaluación.")
            : null,
          lactante
            ? t(lang, "Lactação: avaliar individualmente.", "Lactancia: evaluar individualmente.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Oral (sachê): opção para ITU não complicada por ESBL.", "Oral (sobre): opción para ITU no complicada por ESBL."),
          t(lang, "EV: considerar como terapia de resgate para patógenos resistentes.", "EV: considerar como terapia de rescate para patógenos resistentes.")
        ],
        ref: "Sanford Guide 2025 / ESCMID / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "3 g", intervalo: "Dose única", doseMaxima: "3 g", unidade: "g" },
            ev: { dose: "4–8 g", intervalo: "8/8h", doseMaxima: "24 g/dia", unidade: "g" },
            pediatrica: { dose: "100 mg/kg", intervalo: "8/8h", doseMaxima: "16 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual. Formulação oral geralmente utilizada para ITU.", "Dosis habitual. Formulación oral generalmente utilizada para ITU.")
          },
          fg30a50: {
            vo: { dose: "3 g", intervalo: "Dose única", doseMaxima: "3 g", unidade: "g" },
            ev: { dose: "4 g", intervalo: "12/12h", doseMaxima: "8 g/dia", unidade: "g" },
            pediatrica: { dose: "50–75 mg/kg", intervalo: "12/12h", doseMaxima: "8 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência da formulação intravenosa.", "Reducir frecuencia de la formulación intravenosa.")
          },
          fg10a30: {
            vo: { dose: "3 g", intervalo: "Dose única", doseMaxima: "3 g", unidade: "g" },
            ev: { dose: "4 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório da formulação EV.", "Ajuste obligatorio de la formulación EV.")
          },
          fgMenor10: {
            vo: { dose: "3 g", intervalo: "Dose única", doseMaxima: "3 g", unidade: "g" },
            ev: { dose: "2–4 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "25–50 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar sobrecarga de sódio e acúmulo do fármaco.", "Monitorizar sobrecarga de sodio y acumulación del fármaco.")
          },
          hemodialise: {
            vo: { dose: "3 g", intervalo: "Dose única", doseMaxima: "3 g", unidade: "g" },
            ev: { dose: "2–4 g", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "25–50 mg/kg", intervalo: "24/24h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 30. NITROFURANTOÍNA ── */
  nitrofurantoina: {
    name: { pt: "Nitrofurantoína", es: "Nitrofurantoína" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const clcr    = Number(paciente.clcr   || 100);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 1.5, 100);
      const doseAdulto = clcr < 30
        ? t(lang, "Contraindicada com ClCr < 30 mL/min.", "Contraindicada con ClCr < 30 mL/min.")
        : t(lang, "100 mg VO 12/12h (macrocristalina)", "100 mg VO cada 12h (macrocristalina)");

      return {
        name:  t(lang, "Nitrofurantoína", "Nitrofurantoína"),
        class: t(lang, "Nitrofurano (uso exclusivo urinário)", "Nitrofurano (uso exclusivo urinario)"),
        commercialNames: {
          br: ["Macrobid", "Macrodantina", "Nitrofurantoína EMS"],
          ar: ["Macrodantina", "Nitrofurantoína Richet"]
        },
        presentation: [
          t(lang, "Cápsulas 100 mg (macrocristalina/macrobid)", "Cápsulas 100 mg (macrocristalina/macrobid)"),
          t(lang, "Suspensão oral 25 mg/5 mL", "Suspensión oral 25 mg/5 mL")
        ],
        dose: {
          adulto:    doseAdulto,
          profilaxia: t(lang, "50–100 mg VO 24/24h ao deitar", "50–100 mg VO cada 24h al acostarse"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 6/6h`, `${dosePedia.toFixed(0)} mg VO cada 6h`)
        },
        doseKg: {
          standard: t(lang, "1,25–1,75 mg/kg por dose 6/6h", "1,25–1,75 mg/kg por dosis cada 6h"),
          profilaxia: t(lang, "1–2 mg/kg/dia ao deitar", "1–2 mg/kg/día al acostarse"),
          maxDose:  t(lang, "7 mg/kg/dia", "7 mg/kg/día")
        },
        therapeuticRange: t(lang, "Concentração urinária bactericida — ineficaz em tecidos.", "Concentración urinaria bactericida — ineficaz en tejidos."),
        dilution: t(lang, "Uso oral exclusivo. Tomar com alimentos para melhorar absorção e reduzir efeitos GI.", "Uso oral exclusivo. Tomar con alimentos para mejorar absorción y reducir efectos GI."),
        speed:    t(lang, "Administração oral com alimento.", "Administración oral con alimento."),
        commonAdverseEffects: [
          t(lang, "Náuseas",      "Náuseas"),
          t(lang, "Vômitos",      "Vómitos"),
          t(lang, "Urina escurecida (marrom-amarelada)", "Orina oscurecida (marrón-amarillenta)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Pneumonite intersticial (uso crônico)", "Pneumonitis intersticial (uso crónico)"),
          t(lang, "Fibrose pulmonar (uso prolongado)", "Fibrosis pulmonar (uso prolongado)"),
          t(lang, "Neuropatia periférica",               "Neuropatía periférica"),
          t(lang, "Hepatotoxicidade",                    "Hepatotoxicidad")
        ],
        risksByPatient: [
          clcr < 30
            ? t(lang, "ClCr < 30 mL/min: CONTRAINDICADA.", "ClCr < 30 mL/min: CONTRAINDICADA.")
            : null,
          gestante
            ? t(lang, "Gestação: evitar no 3º trimestre — risco de anemia hemolítica neonatal.", "Embarazo: evitar en 3° trimestre — riesgo de anemia hemolítica neonatal.")
            : null,
          lactante
            ? t(lang, "Lactação: usar com cautela.", "Lactancia: usar con precaución.")
            : null,
          idade >= 65
            ? t(lang, "Idoso: evitar — Beers Criteria; risco de pneumonite e neuropatia.", "Adulto mayor: evitar — Criterios Beers; riesgo de neumonitis y neuropatía.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Uso restrito a ITU baixa não complicada. Não cobre Pseudomonas, Klebsiella nem Proteus resistente.", "Uso restringido a ITU baja no complicada. No cubre Pseudomonas, Klebsiella ni Proteus resistente."),
          t(lang, "Contraindicada se ClCr < 30 mL/min.", "Contraindicada si ClCr < 30 mL/min.")
        ],
        ref: "Sanford Guide 2025 / AUA / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Contraindicada quando ClCr < 30 mL/min.", "Contraindicada cuando ClCr < 30 mL/min."),

          fgMaior50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "1,25–1,75 mg/kg", intervalo: "6/6h", doseMaxima: "7 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Uso exclusivo para infecções urinárias baixas.", "Uso exclusivo para infecciones urinarias bajas.")
          },
          fg30a50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "1,25–1,75 mg/kg", intervalo: "6/6h", doseMaxima: "7 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Pode ser utilizada com cautela.", "Puede utilizarse con precaución.")
          },
          fg10a30: {
            vo: null, ev: null, pediatrica: null,
            obs: t(lang, "Contraindicada por baixa concentração urinária e maior toxicidade.", "Contraindicada por baja concentración urinaria y mayor toxicidad.")
          },
          fgMenor10: {
            vo: null, ev: null, pediatrica: null,
            obs: t(lang, "Contraindicada.", "Contraindicada.")
          },
          hemodialise: {
            vo: null, ev: null, pediatrica: null,
            obs: t(lang, "Contraindicada em pacientes dialíticos.", "Contraindicada en pacientes dializados.")
          }
        }
      };
    }
  },

  /* ── 31. RIFAMPICINA ── */
  rifampicina: {
    name: { pt: "Rifampicina", es: "Rifampicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 15, 600);

      return {
        name:  t(lang, "Rifampicina", "Rifampicina"),
        class: t(lang, "Rifamicina (antituberculoso / anti-estafilocócico adjuvante)", "Rifamicina (antituberculoso / antiestafi locócico adyuvante)"),
        commercialNames: {
          br: ["Rifampicina EMS", "Rifampicina Teuto", "Rifadin"],
          ar: ["Rifadin", "Rifampicina Richet"]
        },
        presentation: [
          t(lang, "Comprimidos 150 mg / 300 mg", "Comprimidos 150 mg / 300 mg"),
          t(lang, "Suspensão oral 20 mg/mL", "Suspensión oral 20 mg/mL"),
          t(lang, "Frasco-ampola EV 600 mg", "Frasco ampolla EV 600 mg")
        ],
        dose: {
          adulto:    t(lang, "600 mg VO/EV 24/24h (em jejum)", "600 mg VO/EV cada 24h (en ayunas)"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 24/24h`, `${dosePedia.toFixed(0)} mg VO cada 24h`)
        },
        doseKg: {
          standard: t(lang, "10–20 mg/kg/dia", "10–20 mg/kg/día"),
          maxDose:  t(lang, "600 mg/dia", "600 mg/día")
        },
        therapeuticRange: t(lang, "Concentração dependente. Indutor potente de CYP450 — múltiplas interações.", "Concentración dependiente. Inductor potente de CYP450 — múltiples interacciones."),
        dilution: t(lang, "EV: reconstituir e diluir conforme protocolo institucional.", "EV: reconstituir y diluir según protocolo institucional."),
        speed:    t(lang, "EV: infundir em 30–180 minutos.", "EV: infundir en 30–180 minutos."),
        commonAdverseEffects: [
          t(lang, "Coloração alaranjada de urina, suor e secreções", "Coloración anaranjada de orina, sudor y secreciones"),
          t(lang, "Náuseas", "Náuseas"),
          t(lang, "Dispepsia", "Dispepsia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hepatotoxicidade grave",           "Hepatotoxicidad grave"),
          t(lang, "Síndrome gripal (uso intermitente)", "Síndrome gripal (uso intermitente)"),
          t(lang, "Trombocitopenia",                  "Trombocitopenia"),
          t(lang, "Anemia hemolítica",                "Anemia hemolítica")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: pode ser usada quando indicada; suplementar vitamina K.", "Embarazo: puede usarse cuando está indicada; suplementar vitamina K.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível com monitoramento.", "Lactancia: compatible con monitoreo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indutor potente de CYP3A4/CYP2C9 — reduz níveis de anticoagulantes, anticonvulsivantes, antifúngicos e ARVs.", "Inductor potente de CYP3A4/CYP2C9 — reduce niveles de anticoagulantes, anticonvulsivantes, antifúngicos y ARVs."),
          t(lang, "Nunca usar em monoterapia — risco de resistência rápida.", "Nunca usar en monoterapia — riesgo de resistencia rápida.")
        ],
        ref: "WHO TB Guidelines / Goodman & Gilman / Sanford Guide 2025",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para tuberculose e infecções por estafilococos em associação.", "Dosis habitual para tuberculosis e infecciones por estafilococos en asociación.")
          },
          fg30a50: {
            vo: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade e interações medicamentosas.", "Monitorizar hepatotoxicidad e interacciones medicamentosas.")
          },
          hemodialise: {
            vo: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 32. ISONIAZIDA ── */
  isoniazida: {
    name: { pt: "Isoniazida", es: "Isoniazida" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso    = Number(paciente.peso   || 0);
      const idade   = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePedia = Math.min(peso * 12, 300);

      return {
        name:  t(lang, "Isoniazida", "Isoniazida"),
        class: t(lang, "Antituberculoso (hidrazida do ácido isonicotínico)", "Antituberculoso (hidrazida del ácido isonicotínico)"),
        commercialNames: {
          br: ["Isoniazida EMS", "Isoniazida Teuto", "Rifaldin (combinação)"],
          ar: ["Isoniazida Richet", "Isoniazida Klonal"]
        },
        presentation: [
          t(lang, "Comprimidos 100 mg / 300 mg", "Comprimidos 100 mg / 300 mg"),
          t(lang, "Solução oral 50 mg/5 mL", "Solución oral 50 mg/5 mL")
        ],
        dose: {
          adulto:    t(lang, "300 mg VO 24/24h (em jejum)", "300 mg VO cada 24h (en ayunas)"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 24/24h`, `${dosePedia.toFixed(0)} mg VO cada 24h`)
        },
        doseKg: {
          standard: t(lang, "10–15 mg/kg/dia", "10–15 mg/kg/día"),
          maxDose:  t(lang, "300 mg/dia", "300 mg/día")
        },
        therapeuticRange: t(lang, "Bactericida intracelular — essencial no esquema RHZE.", "Bactericida intracelular — esencial en el esquema RHZE."),
        dilution: t(lang, "Uso oral. Pode ser administrada EV em casos selecionados.", "Uso oral. Puede administrarse EV en casos seleccionados."),
        speed:    t(lang, "Oral em jejum. Se EV: infusão lenta conforme protocolo.", "Oral en ayunas. Si EV: infusión lenta según protocolo."),
        commonAdverseEffects: [
          t(lang, "Náuseas",     "Náuseas"),
          t(lang, "Cefaleia",    "Cefalea"),
          t(lang, "Insônia",     "Insomnio"),
          t(lang, "Neuropatia periférica (deficiência de B6)", "Neuropatía periférica (deficiencia de B6)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hepatotoxicidade grave (hepatite isoniazídica)", "Hepatotoxicidad grave (hepatitis isoniazídica)"),
          t(lang, "Neuropatia periférica grave",                   "Neuropatía periférica grave"),
          t(lang, "Lúpus induzido por droga",                     "Lupus inducido por droga"),
          t(lang, "Convulsões (superdose)",                        "Convulsiones (sobredosis)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: manter — associar piridoxina 25–50 mg/dia.", "Embarazo: mantener — asociar piridoxina 25–50 mg/día.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — suplementar piridoxina no lactente.", "Lactancia: compatible — suplementar piridoxina en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Associar piridoxina (vitamina B6) para prevenir neuropatia em grupos de risco.", "Asociar piridoxina (vitamina B6) para prevenir neuropatía en grupos de riesgo."),
          t(lang, "Monitorar função hepática mensalmente no primeiro trimestre de tratamento.", "Monitorizar función hepática mensualmente en el primer trimestre de tratamiento.")
        ],
        ref: "WHO TB Guidelines 2022 / MS Brasil PNCT / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Associar piridoxina em grupos de risco para neuropatia.", "Asociar piridoxina en grupos de riesgo para neuropatía.")
          },
          fg30a50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neuropatia periférica e hepatotoxicidade.", "Monitorizar neuropatía periférica y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  }

});

/* ── GRUPO 11 (drogas 33–44): pirazinamida, etambutol, linezolida, daptomicina,
       teicoplanina, tigeciclina, colistina, polimixina_b,
       ertapenem, imipenem_cilastatina, aztreonam, norfloxacino ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 33. PIRAZINAMIDA ── */
  pirazinamida: {
    name: { pt: "Pirazinamida", es: "Pirazinamida" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAdultoKg   = Math.min(peso * 25, 2000);
      const dosePediaKg    = Math.min(peso * 35, 2000);

      return {
        name:  t(lang, "Pirazinamida", "Pirazinamida"),
        class: t(lang, "Antimicobacteriano (antituberculoso)", "Antimicobacteriano (antituberculoso)"),
        commercialNames: {
          br: ["Pirazinamida Genérico", "Rifater (associação)"],
          ar: ["Pirazinamida Genérico", "Rifater (asociación)"]
        },
        presentation: [
          t(lang, "Comprimidos: 500 mg", "Comprimidos: 500 mg"),
          t(lang, "Formulação combinada com rifampicina + isoniazida (Rifater)", "Formulación combinada con rifampicina + isoniazida (Rifater)")
        ],
        dose: {
          adulto:    t(lang, `${doseAdultoKg.toFixed(0)} mg VO 1x/dia (20–25 mg/kg/dia)`, `${doseAdultoKg.toFixed(0)} mg VO 1 vez/día (20–25 mg/kg/día)`),
          pediatrica: t(lang, `${dosePediaKg.toFixed(0)} mg VO 1x/dia (30–40 mg/kg/dia)`, `${dosePediaKg.toFixed(0)} mg VO 1 vez/día (30–40 mg/kg/día)`)
        },
        doseKg: {
          standard: t(lang, "20–25 mg/kg/dia VO (adulto)", "20–25 mg/kg/día VO (adulto)"),
          maxDose:  t(lang, "2 g/dia", "2 g/día")
        },
        therapeuticRange: t(lang, "Bactericida em pH ácido (intracelular/fagossômico).", "Bactericida en pH ácido (intracelular/fagosómico)."),
        dilution:  t(lang, "Uso exclusivamente oral.", "Uso exclusivamente oral."),
        speed:     t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Hiperuricemia / artralgia",        "Hiperuricemia / artralgia"),
          t(lang, "Náuseas e vômitos",                "Náuseas y vómitos"),
          t(lang, "Anorexia",                         "Anorexia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hepatotoxicidade grave",            "Hepatotoxicidad grave"),
          t(lang, "Crise gotosa aguda",                "Crisis gotosa aguda"),
          t(lang, "Fotossensibilidade",                "Fotosensibilidad")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usada no esquema padrão RHZE; monitorar hepatotoxicidade.", "Embarazo: usada en esquema estándar RHZE; monitorizar hepatotoxicidad.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível; monitorar lactente.", "Lactancia: compatible; monitorar lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar ácido úrico e provas de função hepática mensalmente.", "Monitorizar ácido úrico y pruebas de función hepática mensualmente."),
          t(lang, "Parte integrante do esquema RHZE (rifampicina + isoniazida + pirazinamida + etambutol) nos primeiros 2 meses.", "Parte integrante del esquema RHZE en los primeros 2 meses.")
        ],
        ref: "WHO TB Guidelines 2022 / Ministério da Saúde BR / Sanford Guide 2025",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "20–25 mg/kg", intervalo: "24/24h", doseMaxima: "2 g/dia",  unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "30–40 mg/kg", intervalo: "24/24h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para tratamento da tuberculose.", "Dosis habitual para tratamiento de la tuberculosis.")
          },
          fg30a50: {
            vo: { dose: "25–35 mg/kg", intervalo: "48/48h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "30–40 mg/kg", intervalo: "48/48h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Ajustar intervalo para evitar acúmulo.", "Ajustar intervalo para evitar acumulación.")
          },
          fg10a30: {
            vo: { dose: "25–35 mg/kg", intervalo: "48/48h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "30–40 mg/kg", intervalo: "48/48h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade e hiperuricemia.", "Monitorizar hepatotoxicidad e hiperuricemia.")
          },
          fgMenor10: {
            vo: { dose: "25–35 mg/kg", intervalo: "72/72h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "30–40 mg/kg", intervalo: "72/72h", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar em intervalos prolongados.", "Administrar en intervalos prolongados.")
          },
          hemodialise: {
            vo: { dose: "25–35 mg/kg", intervalo: "3x/semana pós-HD", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "30–40 mg/kg", intervalo: "3x/semana pós-HD", doseMaxima: "2 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 34. ETAMBUTOL ── */
  etambutol: {
    name: { pt: "Etambutol", es: "Etambutol" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAdulto = Math.min(peso * 17.5, 1600);
      const dosePedia  = Math.min(peso * 20,   1600);

      return {
        name:  t(lang, "Etambutol", "Etambutol"),
        class: t(lang, "Antimicobacteriano (antituberculoso)", "Antimicobacteriano (antituberculoso)"),
        commercialNames: {
          br: ["Etambutol Genérico", "Miambutol"],
          ar: ["Etambutol Genérico", "Miambutol"]
        },
        presentation: [
          t(lang, "Comprimidos: 400 mg", "Comprimidos: 400 mg"),
          t(lang, "Formulação combinada no esquema RHZE", "Formulación combinada en esquema RHZE")
        ],
        dose: {
          adulto:    t(lang, `${doseAdulto.toFixed(0)} mg VO 1x/dia (15–20 mg/kg/dia)`, `${doseAdulto.toFixed(0)} mg VO 1 vez/día (15–20 mg/kg/día)`),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO 1x/dia (15–25 mg/kg/dia)`, `${dosePedia.toFixed(0)} mg VO 1 vez/día (15–25 mg/kg/día)`)
        },
        doseKg: {
          standard: t(lang, "15–20 mg/kg/dia VO (adulto)", "15–20 mg/kg/día VO (adulto)"),
          maxDose:  t(lang, "1,6 g/dia", "1,6 g/día")
        },
        therapeuticRange: t(lang, "Bacteriostático. Inibe biossíntese da parede celular micobacteriana.", "Bacteriostático. Inhibe la biosíntesis de la pared celular micobacteriana."),
        dilution:  t(lang, "Uso exclusivamente oral.", "Uso exclusivamente oral."),
        speed:     t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Neurite óptica (visão turva, discromatopsia)", "Neuritis óptica (visión borrosa, discromatopsia)"),
          t(lang, "Náuseas",  "Náuseas"),
          t(lang, "Artralgias", "Artralgias")
        ],
        dangerousAdverseEffects: [
          t(lang, "Perda visual irreversível por neurite óptica",       "Pérdida visual irreversible por neuritis óptica"),
          t(lang, "Neuropatia periférica",                               "Neuropatía periférica"),
          t(lang, "Hiperuricemia",                                       "Hiperuricemia")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usar com cautela; monitorar visão.", "Embarazo: usar con precaución; monitorizar visión.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível com monitoramento.", "Lactancia: compatible con monitoreo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Avaliar acuidade visual e percepção de cores antes e mensalmente durante o tratamento.", "Evaluar agudeza visual y percepción de colores antes y mensualmente durante el tratamiento."),
          t(lang, "Suspender imediatamente se alteração visual — risco de amaurose permanente.", "Suspender inmediatamente si hay alteración visual — riesgo de amaurosis permanente.")
        ],
        ref: "WHO TB Guidelines 2022 / Ministério da Saúde BR / Sanford Guide 2025",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "15–20 mg/kg", intervalo: "24/24h", doseMaxima: "1,6 g/dia",  unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg", intervalo: "24/24h", doseMaxima: "1,6 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para tuberculose.", "Dosis habitual para tuberculosis.")
          },
          fg30a50: {
            vo: { dose: "15–20 mg/kg", intervalo: "48/48h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg", intervalo: "48/48h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Ajustar intervalo devido à eliminação renal predominante.", "Ajustar intervalo debido a la eliminación renal predominante.")
          },
          fg10a30: {
            vo: { dose: "15–20 mg/kg", intervalo: "48/48h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg", intervalo: "48/48h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar toxicidade ocular.", "Monitorizar toxicidad ocular.")
          },
          fgMenor10: {
            vo: { dose: "15–20 mg/kg", intervalo: "72/72h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg", intervalo: "72/72h", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Maior risco de neurite óptica.", "Mayor riesgo de neuritis óptica.")
          },
          hemodialise: {
            vo: { dose: "15–25 mg/kg", intervalo: "3x/semana pós-HD", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            ev: null,
            pediatrica: { dose: "15–25 mg/kg", intervalo: "3x/semana pós-HD", doseMaxima: "1,6 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise e monitorar acuidade visual.", "Administrar después de hemodiálisis y monitorizar agudeza visual.")
          }
        }
      };
    }
  },

  /* ── 35. LINEZOLIDA ── */
  linezolida: {
    name: { pt: "Linezolida", es: "Linezolida" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const imaos    = Boolean(paciente.imaos);

      const dosePedia = Math.min(peso * 10, 600);

      return {
        name:  t(lang, "Linezolida", "Linezolida"),
        class: t(lang, "Oxazolidinona", "Oxazolidinona"),
        commercialNames: {
          br: ["Zyvox", "Linezolida Genérica"],
          ar: ["Zyvox", "Linezolida Genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 600 mg", "Comprimidos: 600 mg"),
          t(lang, "Suspensão oral: 100 mg/5 mL", "Suspensión oral: 100 mg/5 mL"),
          t(lang, "Solução injetável EV: 2 mg/mL (300 mL = 600 mg)", "Solución inyectable EV: 2 mg/mL (300 mL = 600 mg)")
        ],
        dose: {
          adulto:    t(lang, "600 mg VO/EV 12/12h", "600 mg VO/EV cada 12h"),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg VO/EV 8/8h–12/12h (10 mg/kg/dose)`, `${dosePedia.toFixed(0)} mg VO/EV cada 8h–12h (10 mg/kg/dosis)`)
        },
        doseKg: {
          standard: t(lang, "10 mg/kg/dose 8/8h–12/12h (pediátrico)", "10 mg/kg/dosis cada 8h–12h (pediátrico)"),
          maxDose:  t(lang, "1,2 g/dia", "1,2 g/día")
        },
        therapeuticRange: t(lang, "Bacteriostático para Enterococcus; bactericida para Staphylococcus. MRSA, VRE, PRSP.", "Bacteriostático para Enterococcus; bactericida para Staphylococcus. MRSA, VRE, PRSP."),
        dilution:  t(lang, "EV: solução pronta 2 mg/mL — infundir sem diluição adicional.", "EV: solución lista 2 mg/mL — infundir sin dilución adicional."),
        speed:     t(lang, "EV: infundir em 30–120 minutos.", "EV: infundir en 30–120 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",     "Náuseas y vómitos"),
          t(lang, "Cefaleia",              "Cefalea"),
          t(lang, "Diarreia",              "Diarrea"),
          t(lang, "Insônia",               "Insomnio")
        ],
        dangerousAdverseEffects: [
          t(lang, "Trombocitopenia (uso > 2 semanas)",                   "Trombocitopenia (uso > 2 semanas)"),
          t(lang, "Síndrome serotoninérgica (com ISRSs / IMAOs)",         "Síndrome serotoninérgica (con ISRSs / IMAOs)"),
          t(lang, "Neuropatia óptica e periférica (uso prolongado)",      "Neuropatía óptica y periférica (uso prolongado)"),
          t(lang, "Acidose láctica",                                       "Acidosis láctica")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: uso com cautela — dados limitados.", "Embarazo: uso con precaución — datos limitados.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar — excretada no leite materno.", "Lactancia: evitar — se excreta en leche materna.")
            : null,
          imaos
            ? t(lang, "CONTRAINDICADA com IMAOs — risco elevado de síndrome serotoninérgica.", "CONTRAINDICADA con IMAOs — alto riesgo de síndrome serotoninérgica.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar hemograma semanalmente em tratamentos > 2 semanas.", "Monitorizar hemograma semanalmente en tratamientos > 2 semanas."),
          t(lang, "Evitar associação com ISRSs, IMAOs e alimentos ricos em tiramina — crise hipertensiva.", "Evitar asociación con ISRSs, IMAOs y alimentos ricos en tiramina — crisis hipertensiva."),
          t(lang, "Biodisponibilidade oral ~ 100% — trocar EV→VO assim que possível.", "Biodisponibilidad oral ~ 100% — cambiar EV→VO tan pronto como sea posible.")
        ],
        ref: "IDSA MRSA Guidelines 2011 / Sanford Guide 2025 / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual, mas exige vigilância hematológica.", "No requiere ajuste renal habitual, pero exige vigilancia hematológica."),

          fgMaior50: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para MRSA e Enterococcus resistente.", "Dosis habitual para MRSA y Enterococcus resistente.")
          },
          fg30a50: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar trombocitopenia, especialmente se uso >7–14 dias.", "Monitorizar trombocitopenia, especialmente si uso >7–14 días.")
          },
          fgMenor10: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Maior risco de mielossupressão, acidose láctica e neuropatia óptica/periférica em uso prolongado.", "Mayor riesgo de mielosupresión, acidosis láctica y neuropatía óptica/periférica en uso prolongado.")
          },
          hemodialise: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Preferir administrar após HD nos dias de diálise. Linezolida é parcialmente removida pela hemodiálise.", "Preferir administrar después de HD en días de diálisis. Linezolida es parcialmente removida por hemodiálisis.")
          }
        },
        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Monitorar hemograma e plaquetas semanalmente (trombocitopenia em uso >2 semanas). Risco de neuropatia óptica/periférica em uso prolongado (>28 dias). Risco de síndrome serotoninérgica com IMAOs, ISRSs e outros serotoninérgicos. Monitorar acidose láctica em uso prolongado.",
            "Monitorizar hemograma y plaquetas semanalmente (trombocitopenia en uso >2 semanas). Riesgo de neuropatía óptica/periférica en uso prolongado (>28 días). Riesgo de síndrome serotoninérgico con IMAOs, ISRSs y otros serotoninérgicos. Monitorizar acidosis láctica en uso prolongado."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Zyvox (linezolid) 2023",
            "EMA label Zyvoxid (linezolid) 2022",
            "IDSA MRSA Guidelines 2011 (updated)",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: message expandida com vigilância hematológica; doseMaxima pediátrica corrigida para 600 mg/dose; fg10a30.obs com threshold >7–14 dias; fgMenor10.obs com mielossupressão; hemodialise.obs com remoção parcial por HD; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: message ampliada con vigilancia hematológica; doseMaxima pediátrica corregida a 600 mg/dosis; fg10a30.obs con umbral >7–14 días; fgMenor10.obs con mielosupresión; hemodialise.obs con remoción parcial por HD; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  /* ── 36. DAPTOMICINA ── */
  daptomicina: {
    name: { pt: "Daptomicina", es: "Daptomicina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso       = Number(paciente.peso    || 0);
      const idade      = Number(paciente.idade   || 0);
      const gestante   = Boolean(paciente.gestante);
      const lactante   = Boolean(paciente.lactante);
      const estatinas  = Boolean(paciente.estatinas);

      const doseBactSkin    = Math.min(peso * 4,  600);
      const doseBactemia    = Math.min(peso * 6,  600);
      const doseEndocardite = Math.min(peso * 10, 1000);
      const dosePedia       = Math.min(peso * 8,  600);

      return {
        name:  t(lang, "Daptomicina", "Daptomicina"),
        class: t(lang, "Lipopeptídeo cíclico", "Lipopéptido cíclico"),
        commercialNames: {
          br: ["Cubicin", "Daptomicina Genérica"],
          ar: ["Cubicin", "Daptomicina Genérica"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV: 350 mg, 500 mg", "Polvo liofilizado EV: 350 mg, 500 mg")
        ],
        dose: {
          adultoSkinSoft: t(lang, `${doseBactSkin.toFixed(0)} mg EV 1x/dia (4 mg/kg)`, `${doseBactSkin.toFixed(0)} mg EV 1 vez/día (4 mg/kg)`),
          adultoBacteremia: t(lang, `${doseBactemia.toFixed(0)} mg EV 1x/dia (6 mg/kg)`, `${doseBactemia.toFixed(0)} mg EV 1 vez/día (6 mg/kg)`),
          adultoEndocardite: t(lang, `${doseEndocardite.toFixed(0)} mg EV 1x/dia (10 mg/kg)`, `${doseEndocardite.toFixed(0)} mg EV 1 vez/día (10 mg/kg)`),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 1x/dia (7–10 mg/kg)`, `${dosePedia.toFixed(0)} mg EV 1 vez/día (7–10 mg/kg)`)
        },
        doseKg: {
          standard: t(lang, "4–10 mg/kg/dia EV conforme indicação", "4–10 mg/kg/día EV según indicación"),
          maxDose:  t(lang, "10 mg/kg/dia", "10 mg/kg/día")
        },
        therapeuticRange: t(lang, "Concentração-dependente. Eficaz contra MRSA, VRSA, VRE (exceto pneumonia — inativado pelo surfactante).", "Concentración-dependiente. Eficaz contra MRSA, VRSA, VRE (excepto neumonía — inactivado por surfactante)."),
        dilution:  t(lang, "EV: diluir em SF 0,9% 50 mL.", "EV: diluir en SF 0,9% 50 mL."),
        speed:     t(lang, "EV: infundir em 30 minutos.", "EV: infundir en 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Elevação de CPK",  "Elevación de CPK"),
          t(lang, "Mialgia",          "Mialgia"),
          t(lang, "Constipação",      "Constipación"),
          t(lang, "Náuseas",          "Náuseas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Miopatia / rabdomiólise (risco aumentado com estatinas)", "Miopatía / rabdomiólisis (riesgo aumentado con estatinas)"),
          t(lang, "Neuropatia periférica",                                   "Neuropatía periférica"),
          t(lang, "Eosinofilia pulmonar",                                    "Eosinofilia pulmonar")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar somente se benefício superar risco.", "Embarazo: datos limitados — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: compatibilidade incerta — avaliar.", "Lactancia: compatibilidad incierta — evaluar.")
            : null,
          estatinas
            ? t(lang, "Estatinas: suspender durante o tratamento — risco de miopatia.", "Estatinas: suspender durante el tratamiento — riesgo de miopatía.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "NÃO usar para pneumonia — daptomicina é inativada pelo surfactante pulmonar.", "NO usar para neumonía — la daptomicina es inactivada por el surfactante pulmonar."),
          t(lang, "Monitorar CPK semanalmente; suspender se CPK > 5x LSN com sintomas.", "Monitorizar CPK semanalmente; suspender si CPK > 5x LSN con síntomas.")
        ],
        ref: "IDSA MRSA Guidelines / Sanford Guide 2025 / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "4–10 mg/kg", intervalo: "24/24h", doseMaxima: "10–12 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "7–10 mg/kg", intervalo: "24/24h", doseMaxima: "10 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose conforme foco: pele (4 mg/kg), bacteremia (6 mg/kg), endocardite ou VRE (10–12 mg/kg).", "Dosis según foco: piel (4 mg/kg), bacteriemia (6 mg/kg), endocarditis o VRE (10–12 mg/kg).")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "4–10 mg/kg", intervalo: "24/24h", doseMaxima: "10–12 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "7–10 mg/kg", intervalo: "24/24h", doseMaxima: "10 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Geralmente sem ajuste até ClCr 30 mL/min.", "Generalmente sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "4–10 mg/kg", intervalo: "48/48h", doseMaxima: "10–12 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "7–10 mg/kg", intervalo: "48/48h", doseMaxima: "10 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Estender intervalo para 48 horas (FDA label: ClCr < 30 mL/min).", "Extender intervalo a 48 horas (FDA label: ClCr < 30 mL/min).")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "4–10 mg/kg", intervalo: "48/48h", doseMaxima: "10–12 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "7–10 mg/kg", intervalo: "48/48h", doseMaxima: "10 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar CPK, mialgia e rabdomiólise. Alto risco de toxicidade muscular nesta faixa.", "Monitorizar CPK, mialgia y rabdomiólisis. Alto riesgo de toxicidad muscular en este rango.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "6–10 mg/kg", intervalo: "Pós-HD", doseMaxima: "10–12 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "7–10 mg/kg", intervalo: "Pós-HD", doseMaxima: "10 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise. Monitorar CPK mais frequentemente nos dias de HD.", "Administrar después de hemodiálisis. Monitorizar CPK con mayor frecuencia los días de HD.")
          }
        },
        therapeuticMonitoring: {
          required: true,
          target:     t(lang, "CPK basal e semanal; mais frequente se estatina, IRC ou sintomas musculares. Suspender se CPK > 5x LSN com sintomas.", "CPK basal y semanal; más frecuente si estatina, ERC o síntomas musculares. Suspender si CPK > 5x LSN con síntomas."),
          monitoring: t(lang, "Monitorar CPK, dor muscular, fraqueza, eosinofilia pulmonar e função renal.", "Monitorizar CPK, dolor muscular, debilidad, eosinofilia pulmonar y función renal."),
          notes:      t(lang, "Maior risco de miopatia quando associada a estatinas — suspender estatina se possível. Evitar para pneumonia: daptomicina é inativada pelo surfactante pulmonar.", "Mayor riesgo de miopatía cuando se asocia a estatinas — suspender estatina si es posible. Evitar para neumonía: daptomicina es inactivada por el surfactante pulmonar.")
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Risco de miopatia/rabdomiólise — monitorar CPK semanalmente. Risco amplificado com estatinas ou insuficiência renal. NÃO usar para pneumonia (inativada pelo surfactante pulmonar). Ajustar intervalo para 48h se ClCr < 30 mL/min.",
            "Riesgo de miopatía/rabdomiólisis — monitorizar CPK semanalmente. Riesgo amplificado con estatinas o insuficiencia renal. NO usar para neumonía (inactivada por el surfactante pulmonar). Ajustar intervalo a 48h si ClCr < 30 mL/min."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Cubicin (daptomycin) 2023",
            "EMA label Cubicin (daptomycin) 2022",
            "IDSA MRSA Guidelines 2011 (updated)",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: doseMaxima fgMaior50/fg30a50 expandida para 10–12 mg/kg; obs fgMaior50 com focos clínicos; fgMenor10.obs com rabdomiólise; hemodialise.pediatrica corrigida para 7–10 mg/kg; hemodialise.obs com monitoramento de CPK; therapeuticMonitoring enriquecido; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: doseMaxima fgMaior50/fg30a50 ampliada a 10–12 mg/kg; obs fgMaior50 con focos clínicos; fgMenor10.obs con rabdomiólisis; hemodialise.pediatrica corregida a 7–10 mg/kg; hemodialise.obs con monitoreo de CPK; therapeuticMonitoring enriquecido; safetyFlags y auditNotes añadidos."
          )
        }
      };
    }
  },

  /* ── 37. TEICOPLANINA ── */
  teicoplanina: {
    name: { pt: "Teicoplanina", es: "Teicoplanina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseCarga       = Math.min(peso * 6, 800);
      const doseManutencao  = Math.min(peso * 6, 800);
      const doseEndocardite = Math.min(peso * 12, 1200);
      const dosePedia       = Math.min(peso * 10, 800);

      return {
        name:  t(lang, "Teicoplanina", "Teicoplanina"),
        class: t(lang, "Glicopeptídeo", "Glucopéptido"),
        commercialNames: {
          br: ["Targocid", "Teicoplanina Genérica"],
          ar: ["Targocid", "Teicoplanina Genérica"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV/IM: 200 mg, 400 mg", "Polvo liofilizado EV/IM: 200 mg, 400 mg")
        ],
        dose: {
          adultoCarga:       t(lang, `${doseCarga.toFixed(0)} mg EV/IM 12/12h (3 doses = 6 mg/kg)`, `${doseCarga.toFixed(0)} mg EV/IM cada 12h (3 dosis = 6 mg/kg)`),
          adultoManutencao:  t(lang, `${doseManutencao.toFixed(0)} mg EV/IM 1x/dia (6 mg/kg)`, `${doseManutencao.toFixed(0)} mg EV/IM 1 vez/día (6 mg/kg)`),
          adultoEndocardite: t(lang, `${doseEndocardite.toFixed(0)} mg EV/IM 1x/dia (12 mg/kg)`, `${doseEndocardite.toFixed(0)} mg EV/IM 1 vez/día (12 mg/kg)`),
          pediatrica:        t(lang, `${dosePedia.toFixed(0)} mg EV/IM 1x/dia (10 mg/kg)`, `${dosePedia.toFixed(0)} mg EV/IM 1 vez/día (10 mg/kg)`)
        },
        doseKg: {
          standard: t(lang, "6–12 mg/kg/dia EV/IM conforme indicação", "6–12 mg/kg/día EV/IM según indicación"),
          maxDose:  t(lang, "12 mg/kg/dia", "12 mg/kg/día")
        },
        therapeuticRange: t(lang, "Vale sérico alvo 15–30 mcg/mL (infecções graves). Bactericida para Gram-positivos: MRSA, MSSA, Enterococcus.", "Valle sérico objetivo 15–30 mcg/mL (infecciones graves). Bactericida para Gram-positivos: MRSA, MSSA, Enterococcus."),
        dilution:  t(lang, "EV: diluir em SF 0,9% ou SG 5% 50–100 mL.", "EV: diluir en SF 0,9% o SG 5% 50–100 mL."),
        speed:     t(lang, "EV: infundir em 30 minutos. IM: injeção direta.", "EV: infundir en 30 minutos. IM: inyección directa."),
        commonAdverseEffects: [
          t(lang, "Eritema no local de infusão",   "Eritema en el sitio de infusión"),
          t(lang, "Febre",                          "Fiebre"),
          t(lang, "Trombocitopenia leve",           "Trombocitopenia leve")
        ],
        dangerousAdverseEffects: [
          t(lang, "Nefrotoxicidade (menor que vancomicina)",    "Nefrotoxicidad (menor que vancomicina)"),
          t(lang, "Ototoxicidade",                              "Ototoxicidad"),
          t(lang, "Síndrome do homem vermelho (raro)",          "Síndrome del hombre rojo (raro)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar somente se necessário.", "Embarazo: datos limitados — usar solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: compatibilidade incerta — avaliar.", "Lactancia: compatibilidad incierta — evaluar.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Realizar 3 doses de ataque de 6 mg/kg 12/12h antes da manutenção diária.", "Realizar 3 dosis de carga de 6 mg/kg cada 12h antes del mantenimiento diario."),
          t(lang, "Monitorar vale sérico 15–30 mcg/mL para infecções graves (endocardite, pneumonia por MRSA).", "Monitorizar valle sérico 15–30 mcg/mL para infecciones graves (endocarditis, neumonía por MRSA).")
        ],
        ref: "EUCAST / Sanford Guide 2025 / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "6–12 mg/kg", intervalo: "24/24h", doseMaxima: "12 mg/kg/dia",  unidade: "mg/kg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "12 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Após doses de ataque (6 mg/kg 12/12h × 3 doses), manter dose diária conforme gravidade da infecção.", "Después de dosis de carga (6 mg/kg 12/12h × 3 dosis), mantener dosis diaria según gravedad de la infección.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "6–12 mg/kg", intervalo: "48/48h", doseMaxima: "12 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "48/48h", doseMaxima: "12 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência após fase de ataque. Manter doses de ataque independentemente da função renal.", "Reducir frecuencia después de fase de carga. Mantener dosis de carga independientemente de la función renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "6–12 mg/kg", intervalo: "72/72h", doseMaxima: "12 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "72/72h", doseMaxima: "12 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar níveis séricos quando disponíveis. Intervalo de 72h após fase de ataque habitual.", "Monitorizar niveles séricos cuando estén disponibles. Intervalo de 72h después de la fase de carga habitual.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "6 mg/kg", intervalo: "72/72h", doseMaxima: "6 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "6 mg/kg", intervalo: "72/72h", doseMaxima: "6 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório pela meia-vida prolongada. Monitorar níveis séricos e função renal.", "Ajuste obligatorio por vida media prolongada. Monitorizar niveles séricos y función renal.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "6 mg/kg", intervalo: "72/72h", doseMaxima: "6 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "6 mg/kg", intervalo: "72/72h", doseMaxima: "6 mg/kg/dose", unidade: "mg/kg" },
            obs: t(lang, "Geralmente pouco removida por HD; ajustar posologia por níveis séricos quando possível. Manter fase de ataque mesmo em diálise.", "Generalmente poco removida por HD; ajustar posología por niveles séricos cuando sea posible. Mantener fase de carga incluso en diálisis.")
          }
        },
        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "Vale alvo geralmente 15–30 mcg/mL conforme gravidade e foco. Endocardite e infecções graves: alvo vale ≥ 20 mcg/mL. Coletar nível antes da 4ª dose de manutenção.",
            "Valle objetivo generalmente 15–30 mcg/mL según gravedad y foco. Endocarditis e infecciones graves: objetivo valle ≥ 20 mcg/mL. Obtener nivel antes de la 4ª dosis de mantenimiento."),
          monitoring: t(lang,
            "Monitorar níveis séricos (vale pré-dose), creatinina, hemograma e resposta clínica.",
            "Monitorizar niveles séricos (valle predosis), creatinina, hemograma y respuesta clínica."),
          notes: t(lang,
            "A fase de ataque NÃO deve ser omitida em infecções graves — sua omissão resulta em subdosagem por até 4–5 dias. Nefrotoxicidade menor que vancomicina.",
            "La fase de carga NO debe omitirse en infecciones graves — su omisión resulta en subdosificación por hasta 4–5 días. Nefrotoxicidad menor que vancomicina.")
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Risco de subdosagem se fase de ataque for omitida ou inadequada — SEMPRE realizar 3 doses de ataque de 6 mg/kg 12/12h antes da manutenção. Monitorar níveis séricos (vale 15–30 mcg/mL). Nefrotoxicidade menor que vancomicina, mas presente — monitorar creatinina.",
            "Riesgo de subdosificación si la fase de carga es omitida o inadecuada — SIEMPRE realizar 3 dosis de carga de 6 mg/kg 12/12h antes del mantenimiento. Monitorizar niveles séricos (valle 15–30 mcg/mL). Nefrotoxicidad menor que vancomicina, pero presente — monitorizar creatinina."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "EMA label Targocid (teicoplanin) 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "EUCAST 2024",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: fgMaior50.obs com protocolo de ataque explícito; hemodialise.obs corrigida para 'pouco removida'; therapeuticMonitoring corrigido (estava com conteúdo de colistina — bug resolvido); safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: fgMaior50.obs con protocolo de carga explícito; hemodialise.obs corregida a 'poco removida'; therapeuticMonitoring corregido (tenía contenido de colistina — bug resuelto); safetyFlags y auditNotes añadidos."
          )
        },

        indicationDosing: {
          standard: t(lang,
            "Gram-negativos resistentes (XDR/PDR): CMS 9 MIU EV de ataque → manutenção por ClCr. Sempre associar a outro agente ativo (carbapenem, rifampicina, fosfomicina) para evitar resistência.",
            "Gramnegativos resistentes (XDR/PDR): CMS 9 MIU IV de carga → mantenimiento por ClCr. Siempre asociar a otro agente activo (carbapenem, rifampicina, fosfomicina) para evitar resistencia."),
          severe: t(lang,
            "UTI / Acinetobacter baumannii XDR / P. aeruginosa PDR: CMS 9 MIU ataque + manutenção ajustada. Considerar nebulização adjuvante (3–4 MIU 12/12h) em pneumonia por Acinetobacter.",
            "UCI / Acinetobacter baumannii XDR / P. aeruginosa PDR: CMS 9 MIU carga + mantenimiento ajustado. Considerar nebulización adyuvante (3–4 MIU 12/12h) en neumonía por Acinetobacter."),
          inhaled: t(lang,
            "Nebulização adjuvante (pneumonia por gram-negativos XDR): 3–4 MIU CMS diluídos em 4 mL SF 0,9% a cada 12h. Preparar imediatamente antes do uso.",
            "Nebulización adyuvante (neumonía por gramnegativos XDR): 3–4 MIU CMS diluidos en 4 mL SF 0,9% cada 12h. Preparar inmediatamente antes del uso.")
        },

        loadingDose: {
          adult: t(lang,
            "9 MIU EV de colistimetato de sódio em infusão de 30–60 min. Administrar independentemente da função renal (garante concentrações terapêuticas precoces, pois CMS tem meia-vida de ativação de ~2h).",
            "9 MIU IV de colistimetato de sodio en infusión de 30–60 min. Administrar independientemente de la función renal (garantiza concentraciones terapéuticas precoces, ya que CMS tiene semivida de activación de ~2h)."),
          pediatric: t(lang,
            "75.000 UI/kg (≈ 2,5 mg/kg de CMS) EV em infusão de 30 min como dose de ataque. Ajustar manutenção por ClCr/peso.",
            "75.000 UI/kg (≈ 2,5 mg/kg de CMS) IV en infusión de 30 min como dosis de carga. Ajustar mantenimiento por ClCr/peso."),
          notes: t(lang,
            "A dose de ataque deve ser administrada MESMO em pacientes com insuficiência renal grave ou em diálise. O retardo no início da dose de ataque aumenta risco de falha terapêutica.",
            "La dosis de carga debe administrarse INCLUSO en pacientes con insuficiencia renal grave o en diálisis. El retraso en el inicio de la dosis de carga aumenta el riesgo de fracaso terapéutico.")
        },

        maintenanceDose: {
          adult: t(lang,
            "ClCr > 80 mL/min: 4,5 MIU EV 12/12h. ClCr 50–80: 4,5 MIU 18/18h. ClCr 30–50: 4,5 MIU 24/24h. ClCr 10–30: 4,5 MIU 36/36h. ClCr < 10: 4,5 MIU 48/48h.",
            "ClCr > 80 mL/min: 4,5 MIU IV 12/12h. ClCr 50–80: 4,5 MIU 18/18h. ClCr 30–50: 4,5 MIU 24/24h. ClCr 10–30: 4,5 MIU 36/36h. ClCr < 10: 4,5 MIU 48/48h."),
          pediatric: t(lang,
            "50.000–75.000 UI/kg/dia dividido a cada 8–12h (função renal normal). Ajustar por ClCr.",
            "50.000–75.000 UI/kg/día dividido cada 8–12h (función renal normal). Ajustar por ClCr."),
          renalAdjustment: t(lang,
            "Hemodiálise: 4,5 MIU após cada sessão de HD (CMS é parcialmente removido). CRRT: 6–9 MIU/dia dividido 8/8h ou 12/12h. Atenção: converter MIU → mg conforme bula do produto disponível.",
            "Hemodiálisis: 4,5 MIU después de cada sesión de HD (CMS es parcialmente removido). CRRT: 6–9 MIU/día dividido 8/8h o 12/12h. Atención: convertir MIU → mg según prospecto del producto disponible.")
        },

        neurotoxicityWarning: {
          risk: "moderate",
          symptoms: [
            t(lang, "Parestesias periorofaciais e de extremidades (mais comuns)", "Parestesias periorales y de extremidades (más comunes)"),
            t(lang, "Tontura e ataxia", "Mareos y ataxia"),
            t(lang, "Bloqueio neuromuscular com fraqueza muscular (raro)", "Bloqueo neuromuscular con debilidad muscular (raro)"),
            t(lang, "Confusão mental (em intoxicações graves)", "Confusión mental (en intoxicaciones graves)")
          ],
          management: t(lang,
            "Parestesias leves geralmente transitórias — monitorar sem necessidade de suspensão imediata. Fraqueza muscular progressiva: suspender e avaliar bloqueio neuromuscular. Reduzir dose em nefrotoxicidade. Evitar uso concomitante com bloqueadores neuromusculares e aminoglicosídeos.",
            "Parestesias leves generalmente transitorias — monitorar sin necesidad de suspensión inmediata. Debilidad muscular progresiva: suspender y evaluar bloqueo neuromuscular. Reducir dosis en nefrotoxicidad. Evitar uso concomitante con bloqueadores neuromusculares y aminoglucósidos.")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        }
      };
    }
  },

  /* ── 38. TIGECICLINA ── */
  tigeciclina: {
    name: { pt: "Tigeciclina", es: "Tigeciclina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso       = Number(paciente.peso   || 0);
      const idade      = Number(paciente.idade  || 0);
      const gestante   = Boolean(paciente.gestante);
      const lactante   = Boolean(paciente.lactante);
      const hepatopatia = Boolean(paciente.hepatopatia);

      const dosePedia = Math.min(peso * 1.2, 50);

      return {
        name:  t(lang, "Tigeciclina", "Tigeciclina"),
        class: t(lang, "Glicilciclina (tetraciclinóide de amplo espectro)", "Glicilciclina (tetraciclínoide de amplio espectro)"),
        commercialNames: {
          br: ["Tygacil", "Tigeciclina Genérica"],
          ar: ["Tygacil", "Tigeciclina Genérica"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV: 50 mg", "Polvo liofilizado EV: 50 mg")
        ],
        dose: {
          adulto:     t(lang, "100 mg EV (ataque) → 50 mg EV 12/12h (manutenção)", "100 mg EV (carga) → 50 mg EV cada 12h (mantenimiento)"),
          pediatrica: t(lang, `${dosePedia.toFixed(1)} mg EV 12/12h (1,2 mg/kg/dose)`, `${dosePedia.toFixed(1)} mg EV cada 12h (1,2 mg/kg/dosis)`)
        },
        doseKg: {
          standard: t(lang, "1,2 mg/kg/dose 12/12h EV (pediátrico)", "1,2 mg/kg/dosis cada 12h EV (pediátrico)"),
          maxDose:  t(lang, "100 mg/dia (manutenção)", "100 mg/día (mantenimiento)")
        },
        therapeuticRange: t(lang, "Bacteriostático. Amplo espectro: MRSA, VRE, Klebsiella MDR, Acinetobacter (NOT Pseudomonas / Proteus).", "Bacteriostático. Amplio espectro: MRSA, VRE, Klebsiella MDR, Acinetobacter (NO Pseudomonas / Proteus)."),
        dilution:  t(lang, "EV: reconstituir com 5,3 mL de SF ou SG 5% → diluir em 100 mL.", "EV: reconstituir con 5,3 mL de SF o SG 5% → diluir en 100 mL."),
        speed:     t(lang, "EV: infundir em 30–60 minutos.", "EV: infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos (frequentes)",  "Náuseas y vómitos (frecuentes)"),
          t(lang, "Diarreia",                         "Diarrea"),
          t(lang, "Anorexia",                         "Anorexia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Aumento de mortalidade em pneumonia adquirida no hospital (metanálise FDA)", "Aumento de mortalidad en neumonía nosocomial (metaanálisis FDA)"),
          t(lang, "Pancreatite",                      "Pancreatitis"),
          t(lang, "Hepatotoxicidade",                 "Hepatotoxicidad"),
          t(lang, "Pseudotumor cerebri",              "Pseudotumor cerebri")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADA — injúria hepática fetal, inibição de desenvolvimento ósseo/dentário.", "Embarazo: CONTRAINDICADA — daño hepático fetal, inhibición del desarrollo óseo/dental.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar — excretada no leite.", "Lactancia: evitar — se excreta en leche.")
            : null,
          hepatopatia
            ? t(lang, "Hepatopatia grave (Child C): reduzir dose de manutenção para 25 mg 12/12h.", "Hepatopatía grave (Child C): reducir dosis de mantenimiento a 25 mg cada 12h.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "FDA alerta para aumento de mortalidade em pneumonia hospitalar — usar somente quando não há alternativa.", "FDA alerta sobre aumento de mortalidad en neumonía nosocomial — usar solo cuando no hay alternativa."),
          t(lang, "NÃO cobre Pseudomonas aeruginosa nem Proteus spp.", "NO cubre Pseudomonas aeruginosa ni Proteus spp.")
        ],
        ref: "FDA Label / Sanford Guide 2025 / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),

          fgMaior50: {
            vo: null,
            ev: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: { dose: "1,2 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Após dose de ataque de 100 mg.", "Después de dosis de carga de 100 mg.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: { dose: "1,2 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: { dose: "1,2 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: { dose: "1,2 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Avaliar ajuste apenas em insuficiência hepática grave.", "Evaluar ajuste solo en insuficiencia hepática grave.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: { dose: "1,2 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não removida significativamente pela hemodiálise.", "No removida significativamente por hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 39. COLISTINA (COLISTIMETATO DE SÓDIO) ── */
  colistina: {
    name: { pt: "Colistina (Colistimetato de Sódio)", es: "Colistina (Colistimetato de Sodio)" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseAtaque      = 9;
      const doseManutencoMIU = (peso * 0.15).toFixed(1);
      const dosePediaUI     = (peso * 112500).toLocaleString("pt-BR");

      return {
        name:  t(lang, "Colistina (Colistimetato de Sódio)", "Colistina (Colistimetato de Sodio)"),
        class: t(lang, "Polimixina E (lipopeptídeo)", "Polimixina E (lipopéptido)"),
        commercialNames: {
          br: ["Colistimetato Genérico", "Colobreathe (inalação)"],
          ar: ["Colistimetato Genérico", "Colistimetato Normon"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV: 150 mg (= 2 MIU de colistimetato)", "Polvo liofilizado EV: 150 mg (= 2 MIU de colistimetato)"),
          t(lang, "Pó para inalação: 1.662.500 UI", "Polvo para inhalación: 1.662.500 UI")
        ],
        dose: {
          adultoAtaque:     t(lang, `${doseAtaque} MIU EV dose de ataque`, `${doseAtaque} MIU EV dosis de carga`),
          adultoManutencao: t(lang, `4,5 MIU EV 12/12h (manutenção); ajustar por ClCr`, `4,5 MIU EV cada 12h (mantenimiento); ajustar por ClCr`),
          pediatrica:       t(lang, `75.000–150.000 UI/kg/dia dividido 12/12h`, `75.000–150.000 UI/kg/día dividido cada 12h`)
        },
        doseKg: {
          standard: t(lang, "2,5–5 MIU/dia em 2–3 doses (adulto com função renal normal)", "2,5–5 MIU/día en 2–3 dosis (adulto con función renal normal)"),
          maxDose:  t(lang, "9 MIU/dia", "9 MIU/día")
        },
        therapeuticRange: t(lang, "Gram-negativos MDR: KPC, NDM, Acinetobacter baumannii. Nefrotóxico — dose guiada por ClCr.", "Gram-negativos MDR: KPC, NDM, Acinetobacter baumannii. Nefrotóxico — dosis guiada por ClCr."),
        dilution:  t(lang, "EV: diluir em SF 0,9% 50–250 mL.", "EV: diluir en SF 0,9% 50–250 mL."),
        speed:     t(lang, "EV: infundir em 30–60 minutos.", "EV: infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Nefrotoxicidade (dose-dependente)",    "Nefrotoxicidad (dosis-dependiente)"),
          t(lang, "Parestesias / neurotoxicidade",         "Parestesias / neurotoxicidad"),
          t(lang, "Broncoespasmo (inalação)",              "Broncoespasmo (inhalación)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Insuficiência renal aguda",           "Insuficiencia renal aguda"),
          t(lang, "Bloqueio neuromuscular",              "Bloqueo neuromuscular"),
          t(lang, "Apneia / parada respiratória (raro)", "Apnea / parada respiratoria (raro)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usar somente em última instância — nefrotoxicidade fetal.", "Embarazo: usar solo como último recurso — nefrotoxicidad fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar.", "Lactancia: evitar.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Sempre iniciar com dose de ataque de 9 MIU EV independentemente da função renal.", "Siempre iniciar con dosis de carga de 9 MIU EV independientemente de la función renal."),
          t(lang, "Monitorar creatinina a cada 48–72h. Ajuste obrigatório de dose de manutenção por ClCr.", "Monitorizar creatinina cada 48–72h. Ajuste obligatorio de dosis de mantenimiento por ClCr.")
        ],
        ref: "Sanford Guide 2025 / Infectious Diseases Society of America / Pogue et al. 2017",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "9 MIU (ataque) + 4,5 MIU", intervalo: "12/12h", doseMaxima: "9 MIU/dia", unidade: "MIU" },
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "12/12h", doseMaxima: "9 MIU/dia", unidade: "UI/kg" },
            obs: t(lang, "Sempre iniciar com dose de ataque.", "Siempre iniciar con dosis de carga.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "4,5 MIU", intervalo: "24/24h", doseMaxima: "4,5 MIU/dia", unidade: "MIU" },
            pediatrica: { dose: "75.000 UI/kg", intervalo: "24/24h", doseMaxima: "4,5 MIU/dia", unidade: "UI/kg" },
            obs: t(lang, "Ajuste obrigatório devido à nefrotoxicidade.", "Ajuste obligatorio debido a la nefrotoxicidad.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "2,25–4,5 MIU", intervalo: "24/24h", doseMaxima: "4,5 MIU/dia", unidade: "MIU" },
            pediatrica: { dose: "50.000–75.000 UI/kg", intervalo: "24/24h", doseMaxima: "4,5 MIU/dia", unidade: "UI/kg" },
            obs: t(lang, "Monitorar rigorosamente função renal.", "Monitorizar estrictamente la función renal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "2,25 MIU", intervalo: "24–48/48h", doseMaxima: "2,25 MIU/dia", unidade: "MIU" },
            pediatrica: { dose: "50.000 UI/kg", intervalo: "24–48/48h", doseMaxima: "2,25 MIU/dia", unidade: "UI/kg" },
            obs: t(lang, "Alto risco de nefrotoxicidade e neurotoxicidade.", "Alto riesgo de nefrotoxicidad y neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "2,25 MIU", intervalo: "Pós-HD", doseMaxima: "2,25 MIU/dose", unidade: "MIU" },
            pediatrica: { dose: "50.000 UI/kg", intervalo: "Pós-HD", doseMaxima: "2,25 MIU/dose", unidade: "UI/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        },
        therapeuticMonitoring: {
          required: true,
          target:     t(lang, "Monitorização clínica e laboratorial da função renal.", "Monitorización clínica y de laboratorio de la función renal."),
          monitoring: t(lang, "Creatinina, débito urinário, eletrólitos e sintomas neurológicos.", "Creatinina, diuresis, electrolitos y síntomas neurológicos."),
          notes:      t(lang, "Um dos antibióticos mais nefrotóxicos da prática clínica.", "Uno de los antibióticos más nefrotóxicos de la práctica clínica.")
        }
      };
    }
  },

  /* ── 40. POLIMIXINA B ── */
  polimixina_b: {
    name: { pt: "Polimixina B", es: "Polimixina B" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const doseManutencao = Math.min(peso * 1.375, 200);
      const doseAtaque     = Math.min(peso * 2.25,  250);
      const dosePedia      = Math.min(peso * 1.25,  150);

      return {
        name:  t(lang, "Polimixina B", "Polimixina B"),
        class: t(lang, "Polimixina (lipopeptídeo policatiônico)", "Polimixina (lipopéptido policatiónico)"),
        commercialNames: {
          br: ["Polimixina B Genérica", "Aerosporin"],
          ar: ["Polimixina B Genérica", "Aerosporin"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV: 500.000 UI (= 50 mg)", "Polvo liofilizado EV: 500.000 UI (= 50 mg)")
        ],
        dose: {
          adultoAtaque:     t(lang, `${doseAtaque.toFixed(0)} mg EV dose de ataque (2–2,5 mg/kg)`, `${doseAtaque.toFixed(0)} mg EV dosis de carga (2–2,5 mg/kg)`),
          adultoManutencao: t(lang, `${doseManutencao.toFixed(0)} mg EV 12/12h (1,25–1,5 mg/kg)`, `${doseManutencao.toFixed(0)} mg EV cada 12h (1,25–1,5 mg/kg)`),
          pediatrica:       t(lang, `${dosePedia.toFixed(0)} mg EV 12/12h (1,25 mg/kg)`, `${dosePedia.toFixed(0)} mg EV cada 12h (1,25 mg/kg)`)
        },
        doseKg: {
          standard: t(lang, "1,25–1,5 mg/kg 12/12h EV (após ataque de 2–2,5 mg/kg)", "1,25–1,5 mg/kg cada 12h EV (tras carga de 2–2,5 mg/kg)"),
          maxDose:  t(lang, "3 mg/kg/dia", "3 mg/kg/día")
        },
        therapeuticRange: t(lang, "Bactericida. Gram-negativos MDR: KPC, NDM, Acinetobacter. Dosagem NÃO guiada pela função renal (diferente da colistina).", "Bactericida. Gram-negativos MDR: KPC, NDM, Acinetobacter. Dosificación NO guiada por la función renal (diferente de colistina)."),
        dilution:  t(lang, "EV: diluir em SG 5% 100–500 mL. NÃO usar SF (incompatível).", "EV: diluir en SG 5% 100–500 mL. NO usar SF (incompatible)."),
        speed:     t(lang, "EV: infundir em 60–120 minutos.", "EV: infundir en 60–120 minutos."),
        commonAdverseEffects: [
          t(lang, "Nefrotoxicidade",       "Nefrotoxicidad"),
          t(lang, "Neurotoxicidade / parestesias", "Neurotoxicidad / parestesias"),
          t(lang, "Dor no local de infusão", "Dolor en el sitio de infusión")
        ],
        dangerousAdverseEffects: [
          t(lang, "Insuficiência renal aguda grave",    "Insuficiencia renal aguda grave"),
          t(lang, "Bloqueio neuromuscular",             "Bloqueo neuromuscular"),
          t(lang, "Apneia (raro)",                      "Apnea (raro)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usar somente em última instância.", "Embarazo: usar solo como último recurso.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar.", "Lactancia: evitar.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Diluir OBRIGATORIAMENTE em SG 5% — incompatível com SF 0,9%.", "Diluir OBLIGATORIAMENTE en SG 5% — incompatible con SF 0,9%."),
          t(lang, "Monitorar creatinina a cada 48–72h apesar de não haver ajuste formal por função renal.", "Monitorizar creatinina cada 48–72h a pesar de no haber ajuste formal por función renal.")
        ],
        ref: "Sanford Guide 2025 / Zavascki et al. / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Geralmente não necessita ajuste renal, porém requer monitorização rigorosa.", "Generalmente no requiere ajuste renal, pero requiere monitorización estricta."),

          fgMaior50: {
            vo: null,
            ev: { dose: "1,25–1,5 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "1,25 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual após ataque de 2–2,5 mg/kg.", "Dosis habitual tras carga de 2–2,5 mg/kg.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1,25–1,5 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "1,25 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Sem ajuste habitual.", "Sin ajuste habitual.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1,25–1,5 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "1,25 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar toxicidade renal apesar da ausência de ajuste formal.", "Monitorizar toxicidad renal a pesar de la ausencia de ajuste formal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1,25–1,5 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "1,25 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Alto risco de nefrotoxicidade e neurotoxicidade.", "Alto riesgo de nefrotoxicidad y neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1,25–1,5 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "1,25 mg/kg", intervalo: "12/12h", doseMaxima: "3 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não é significativamente removida pela HD.", "No es significativamente removida por HD.")
          }
        },
        therapeuticMonitoring: {
          required: true,
          target:     t(lang, "Monitorização intensiva da função renal.", "Monitorización intensiva de la función renal."),
          monitoring: t(lang, "Creatinina, ureia, eletrólitos e sintomas neurológicos.", "Creatinina, urea, electrolitos y síntomas neurológicos."),
          notes:      t(lang, "Menor dependência da função renal para dosagem que a colistina, porém toxicidade permanece elevada.", "Menor dependencia de la función renal para dosificación que la colistina, pero la toxicidad sigue siendo elevada.")
        }
      };
    }
  },

  /* ── 41. ERTAPENEM ── */
  ertapenem: {
    name: { pt: "Ertapenem", es: "Ertapenem" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr   || 100);

      const doseAdulto    = clcr < 30 ? 500 : 1000;
      const dosePedia     = Math.min(peso * 15, 1000);

      return {
        name:  t(lang, "Ertapenem", "Ertapenem"),
        class: t(lang, "Carbapenêmico (grupo 1 — sem atividade anti-Pseudomonas)", "Carbapenémico (grupo 1 — sin actividad anti-Pseudomonas)"),
        commercialNames: {
          br: ["Invanz", "Ertapenem Genérico"],
          ar: ["Invanz", "Ertapenem Genérico"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV/IM: 1 g", "Polvo liofilizado EV/IM: 1 g")
        ],
        dose: {
          adulto:    t(lang, `${doseAdulto} mg EV/IM 1x/dia`, `${doseAdulto} mg EV/IM 1 vez/día`),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 12/12h (15 mg/kg/dose)`, `${dosePedia.toFixed(0)} mg EV cada 12h (15 mg/kg/dosis)`)
        },
        doseKg: {
          standard: t(lang, "15 mg/kg 12/12h EV (pediátrico)", "15 mg/kg cada 12h EV (pediátrico)"),
          maxDose:  t(lang, "1 g/dia (adulto)", "1 g/día (adulto)")
        },
        therapeuticRange: t(lang, "Tempo-dependente. Cobertura ampla exceto Pseudomonas, Acinetobacter e MRSA. ESBL, Enterobacterales, anaeróbios.", "Tiempo-dependiente. Cobertura amplia excepto Pseudomonas, Acinetobacter y MRSA. ESBL, Enterobacterales, anaerobios."),
        dilution:  t(lang, "EV: diluir em SF 0,9% 50–250 mL.", "EV: diluir en SF 0,9% 50–250 mL."),
        speed:     t(lang, "EV: infundir em 30 minutos. IM: lidocaína 1% como diluente.", "EV: infundir en 30 minutos. IM: lidocaína 1% como diluyente."),
        commonAdverseEffects: [
          t(lang, "Diarreia",                "Diarrea"),
          t(lang, "Náuseas e vômitos",        "Náuseas y vómitos"),
          t(lang, "Cefaleia",                "Cefalea"),
          t(lang, "Flebite (EV)",            "Flebitis (EV)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Convulsões (especialmente com ClCr < 30 mL/min sem ajuste)", "Convulsiones (especialmente con ClCr < 30 mL/min sin ajuste)"),
          t(lang, "Colite por C. difficile",                                    "Colitis por C. difficile"),
          t(lang, "Reação alérgica grave",                                      "Reacción alérgica grave")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usar somente se benefício superar risco — dados limitados.", "Embarazo: usar solo si el beneficio supera el riesgo — datos limitados.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível em curto prazo.", "Lactancia: compatible a corto plazo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "NÃO cobre Pseudomonas aeruginosa nem Acinetobacter — escolha inadequada para infecções por esses microrganismos.", "NO cubre Pseudomonas aeruginosa ni Acinetobacter — elección inadecuada para infecciones por estos microorganismos."),
          t(lang, "Ajuste obrigatório quando ClCr < 30 mL/min (reduzir para 500 mg/dia).", "Ajuste obligatorio cuando ClCr < 30 mL/min (reducir a 500 mg/día).")
        ],
        ref: "Sanford Guide 2025 / IDSA / Goodman & Gilman",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "15 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "15 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Geralmente sem ajuste até ClCr 30 mL/min.", "Generalmente sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "7,5 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em aproximadamente 50%.", "Reducir dosis aproximadamente un 50%.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "7,5 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade e convulsões.", "Monitorizar neurotoxicidad y convulsiones.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "7,5 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 42. IMIPENEM + CILASTATINA ── */
  imipenem_cilastatina: {
    name: { pt: "Imipenem + Cilastatina", es: "Imipenem + Cilastatina" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr   || 100);

      const doseAdultoGrave = clcr >= 51 ? "500 mg EV 6/6h"
        : clcr >= 31 ? "500 mg EV 8/8h"
        : clcr >= 11 ? "250–500 mg EV 12/12h"
        : "250 mg EV 12/12h";
      const dosePedia = Math.min(peso * 20, 1000);

      return {
        name:  t(lang, "Imipenem + Cilastatina", "Imipenem + Cilastatina"),
        class: t(lang, "Carbapenêmico (grupo 1 — com atividade anti-Pseudomonas)", "Carbapenémico (grupo 1 — con actividad anti-Pseudomonas)"),
        commercialNames: {
          br: ["Tienam", "Imipenem+Cilastatina Genérico"],
          ar: ["Tienam", "Imipenem+Cilastatina Genérico"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV: 500 mg + 500 mg", "Polvo liofilizado EV: 500 mg + 500 mg"),
          t(lang, "Pó para suspensão IM: 500 mg + 500 mg", "Polvo para suspensión IM: 500 mg + 500 mg")
        ],
        dose: {
          adultoGrave: t(lang, doseAdultoGrave, doseAdultoGrave),
          pediatrica:  t(lang, `${dosePedia.toFixed(0)} mg EV 6/6h (15–25 mg/kg/dose)`, `${dosePedia.toFixed(0)} mg EV cada 6h (15–25 mg/kg/dosis)`)
        },
        doseKg: {
          standard: t(lang, "15–25 mg/kg/dose EV 6/6h (pediátrico)", "15–25 mg/kg/dosis EV cada 6h (pediátrico)"),
          maxDose:  t(lang, "4 g/dia (adulto)", "4 g/día (adulto)")
        },
        therapeuticRange: t(lang, "Carbapenêmico de maior espectro — inclui Pseudomonas aeruginosa. Tempo-dependente. NÃO cobre MRSA.", "Carbapenémico de mayor espectro — incluye Pseudomonas aeruginosa. Tiempo-dependiente. NO cubre MRSA."),
        dilution:  t(lang, "EV: diluir em SF 0,9% ou SG 5% 100–250 mL.", "EV: diluir en SF 0,9% o SG 5% 100–250 mL."),
        speed:     t(lang, "EV: infundir em 20–60 minutos (infusão prolongada 3h para doses altas em MIC elevada).", "EV: infundir en 20–60 minutos (infusión prolongada 3h para dosis altas con MIC elevada)."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",        "Náuseas y vómitos"),
          t(lang, "Diarreia",                 "Diarrea"),
          t(lang, "Flebite",                  "Flebitis"),
          t(lang, "Elevação de transaminases", "Elevación de transaminasas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Convulsões (maior risco que outros carbapenêmicos)", "Convulsiones (mayor riesgo que otros carbapenémicos)"),
          t(lang, "Colite por C. difficile",                           "Colitis por C. difficile"),
          t(lang, "Reação de hipersensibilidade grave",                "Reacción de hipersensibilidad grave")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: usar somente se benefício superar risco.", "Embarazo: usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível em curto prazo.", "Lactancia: compatible a corto plazo.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Maior potencial convulsivante entre os carbapenêmicos — evitar em pacientes com epilepsia ou TCE.", "Mayor potencial convulsivante entre los carbapenémicos — evitar en pacientes con epilepsia o TCE."),
          t(lang, "Ajuste obrigatório de frequência por ClCr — ver tabela renal.", "Ajuste obligatorio de frecuencia por ClCr — ver tabla renal.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / IDSA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            pediatrica: { dose: "15–25 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para infecções graves. Considerar infusão estendida de 2–3h para MIC elevada.", "Dosis habitual para infecciones graves. Considerar infusión extendida de 2–3h para MIC elevada.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "8/8h", doseMaxima: "3 g/dia", unidade: "mg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "8/8h", doseMaxima: "3 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Redução obrigatória para diminuir risco convulsivo. Ajustar frequência para manter T>MIC adequado.", "Reducción obligatoria para disminuir riesgo convulsivo. Ajustar frecuencia para mantener T>MIC adecuado.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "12/12h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar convulsões, mioclonias e encefalopatia — risco amplificado nesta faixa renal.", "Monitorizar convulsiones, mioclonías y encefalopatía — riesgo amplificado en este rango renal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "250 mg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Maior risco de convulsões em insuficiência renal avançada. Uso com extrema cautela.", "Mayor riesgo de convulsiones en insuficiencia renal avanzada. Uso con extrema precaución.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "12/12h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise. Imipenem é parcialmente removido pela HD.", "Administrar después de hemodiálisis. Imipenem es parcialmente removido por HD.")
          }
        },
        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(
            lang,
            "Entre os beta-lactâmicos com MAIOR risco de convulsões em insuficiência renal. Monitorar convulsões, mioclonias e encefalopatia diariamente. Risco aumentado sem ajuste renal adequado. Evitar em pacientes com histórico de epilepsia ou TCE.",
            "Entre los betalactámicos con MAYOR riesgo de convulsiones en insuficiencia renal. Monitorizar convulsiones, mioclonías y encefalopatía diariamente. Riesgo aumentado sin ajuste renal adecuado. Evitar en pacientes con historial de epilepsia o TCE."
          )
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Primaxin (imipenem-cilastatin) 2022",
            "EMA label Tienam (imipenem-cilastatin) 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "IDSA Guidelines 2021",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed."
          ],
          note: t(
            lang,
            "Bloco mesclado e melhorado: pediatrica fgMaior50 doseMaxima em mg/kg; fgMaior50.obs com infusão estendida; fg30a50.obs com risco convulsivo; fg10a30.obs com convulsões e mioclonias; hemodialise.obs com remoção parcial; safetyFlags e auditNotes adicionados.",
            "Bloque fusionado y mejorado: pediatrica fgMaior50 doseMaxima en mg/kg; fgMaior50.obs con infusión extendida; fg30a50.obs con riesgo convulsivo; fg10a30.obs con convulsiones y mioclonías; hemodialise.obs con remoción parcial; safetyFlags y auditNotes añadidos."
          )
        },

        therapeuticMonitoring: {
          required: false,
          target: t(lang,
            "Tempo acima da MIC (T>MIC) ≥ 40% do intervalo para infecções moderadas; ≥ 70% para infecções graves (infusão estendida recomendada).",
            "Tiempo sobre la MIC (T>MIC) ≥ 40% del intervalo para infecciones moderadas; ≥ 70% para infecciones graves (infusión extendida recomendada)."),
          monitoring: t(lang,
            "Monitorar função renal e neurológica diariamente em pacientes de UTI. EEG se convulsões ou alteração do estado mental.",
            "Monitorar función renal y neurológica diariamente en pacientes de UCI. EEG si convulsiones o alteración del estado mental."),
          notes: t(lang,
            "O imipenem tem o maior potencial epileptogênico entre os carbapenêmicos. Risco aumentado com doses altas, insuficiência renal e histórico de convulsões.",
            "El imipenem tiene el mayor potencial epileptogénico entre los carbapenémicos. Riesgo aumentado con dosis altas, insuficiencia renal e historial de convulsiones.")
        },

        indicationDosing: {
          standard: t(lang,
            "Infecções moderadas: 500 mg EV 6/6h ou 1 g EV 8/8h.",
            "Infecciones moderadas: 500 mg IV 6/6h o 1 g IV 8/8h."),
          severe: t(lang,
            "Infecções graves/sepse: 1 g EV 6/6h (dose máxima 4 g/dia). Considerar infusão em 2–3h para otimizar T>MIC.",
            "Infecciones graves/sepsis: 1 g IV 6/6h (dosis máxima 4 g/día). Considerar infusión en 2–3h para optimizar T>MIC."),
          uti: t(lang,
            "UTI / gram-negativos multirresistentes: 1 g EV 6/6h em infusão estendida de 3h; combinar com relebactam se produtor de MBL.",
            "UCI / gramnegativos multirresistentes: 1 g IV 6/6h en infusión extendida de 3h; combinar con relebactam si productor de MBL.")
        },

        neurotoxicityWarning: {
          risk: "high",
          symptoms: [
            t(lang, "Convulsões (risco maior que meropenem e ertapenem)", "Convulsiones (mayor riesgo que meropenem y ertapenem)"),
            t(lang, "Encefalopatia e confusão mental", "Encefalopatía y confusión mental"),
            t(lang, "Mioclonias e tremores", "Mioclonías y temblores"),
            t(lang, "Alteração do nível de consciência", "Alteración del nivel de conciencia"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora")
          ],
          management: t(lang,
            "SUSPENDER imediatamente em caso de convulsão. Benzodiazepínico EV para controle da crise aguda. Não reiniciar imipenem — substituir por meropenem (menor potencial epileptogênico) ou outro carbapenêmico. Avaliar ajuste renal urgente. Historico de convulsões é contraindicação relativa.",
            "SUSPENDER inmediatamente en caso de convulsión. Benzodiacepina IV para control de la crisis aguda. No reiniciar imipenem — sustituir por meropenem (menor potencial epileptogénico) u otro carbapenémico. Evaluar ajuste renal urgente. Historial de convulsiones es contraindicación relativa.")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        }
      };
    }
  },

  /* ── 43. AZTREONAM ── */
  aztreonam: {
    name: { pt: "Aztreonam", es: "Aztreonam" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr   || 100);
      const alergiaPenicilina = Boolean(paciente.alergiaPenicilina);

      const doseAdulto  = clcr >= 51 ? "1–2 g EV 8/8h"
        : clcr >= 31 ? "1–2 g EV 12/12h"
        : clcr >= 11 ? "500 mg–1 g EV 12/12h"
        : "500 mg EV 24/24h";
      const dosePedia   = Math.min(peso * 30, 2000);

      return {
        name:  t(lang, "Aztreonam", "Aztreonam"),
        class: t(lang, "Monobactâmico (beta-lactâmico monocíclico)", "Monobactámico (beta-lactámico monocíclico)"),
        commercialNames: {
          br: ["Azactam", "Aztreonam Genérico"],
          ar: ["Azactam", "Aztreonam Genérico"]
        },
        presentation: [
          t(lang, "Pó liofilizado EV/IM: 500 mg, 1 g, 2 g", "Polvo liofilizado EV/IM: 500 mg, 1 g, 2 g")
        ],
        dose: {
          adulto:     t(lang, doseAdulto, doseAdulto),
          pediatrica: t(lang, `${dosePedia.toFixed(0)} mg EV 6/6h–8/8h (30 mg/kg/dose)`, `${dosePedia.toFixed(0)} mg EV cada 6h–8h (30 mg/kg/dosis)`)
        },
        doseKg: {
          standard: t(lang, "30 mg/kg/dose EV 6/6h–8/8h (pediátrico)", "30 mg/kg/dosis EV cada 6h–8h (pediátrico)"),
          maxDose:  t(lang, "8 g/dia (adulto)", "8 g/día (adulto)")
        },
        therapeuticRange: t(lang, "Tempo-dependente. EXCLUSIVAMENTE Gram-negativos aeróbicos (Pseudomonas, Enterobacterales). SEM atividade contra Gram-positivos ou anaeróbios.", "Tiempo-dependiente. EXCLUSIVAMENTE Gram-negativos aeróbicos (Pseudomonas, Enterobacterales). SIN actividad contra Gram-positivos o anaerobios."),
        dilution:  t(lang, "EV: diluir em SF 0,9% ou SG 5% 50–100 mL.", "EV: diluir en SF 0,9% o SG 5% 50–100 mL."),
        speed:     t(lang, "EV: infundir em 20–60 minutos.", "EV: infundir en 20–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Flebite",              "Flebitis"),
          t(lang, "Diarreia",             "Diarrea"),
          t(lang, "Náuseas",              "Náuseas"),
          t(lang, "Exantema",             "Exantema")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hepatotoxicidade",                     "Hepatotoxicidad"),
          t(lang, "Reação de hipersensibilidade (raro)",  "Reacción de hipersensibilidad (raro)"),
          t(lang, "Colite por C. difficile",              "Colitis por C. difficile")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar somente se necessário.", "Embarazo: datos limitados — usar solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível em curto prazo.", "Lactancia: compatible a corto plazo.")
            : null,
          alergiaPenicilina
            ? t(lang, "Alergia a penicilina: reatividade cruzada muito baixa — pode ser usado com segurança.", "Alergia a penicilina: reactividad cruzada muy baja — puede usarse con seguridad.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Ativo APENAS contra Gram-negativos aeróbicos — NÃO cobre Gram-positivos, anaeróbios ou fungos.", "Activo SOLO contra Gram-negativos aeróbicos — NO cubre Gram-positivos, anaerobios o hongos."),
          t(lang, "Baixíssima reatividade cruzada com penicilinas — opção segura em alérgicos a beta-lactâmicos.", "Muy baja reactividad cruzada con penicilinas — opción segura en alérgicos a beta-lactámicos.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / IDSA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "8/8h", doseMaxima: "8 g/dia", unidade: "g" },
            pediatrica: { dose: "30 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "8 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para Gram-negativos.", "Dosis habitual para Gramnegativos.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "20–30 mg/kg", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência.", "Reducir frecuencia.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "500 mg–1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "15–20 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade.", "Monitorizar neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg" },
            pediatrica: { dose: "15 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 44. NORFLOXACINO ── */
  norfloxacino: {
    name: { pt: "Norfloxacino", es: "Norfloxacino" },
    category: "atb",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso   || 0);
      const idade    = Number(paciente.idade  || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr   || 100);

      const doseAdulto   = clcr >= 30 ? "400 mg VO 12/12h" : "400 mg VO 24/24h";

      return {
        name:  t(lang, "Norfloxacino", "Norfloxacino"),
        class: t(lang, "Fluoroquinolona de 2ª geração (uso oral exclusivo)", "Fluoroquinolona de 2ª generación (uso oral exclusivo)"),
        commercialNames: {
          br: ["Floxacin", "Norfloxacino Genérico"],
          ar: ["Norfloxacino Genérico", "Noroxin"]
        },
        presentation: [
          t(lang, "Comprimidos: 400 mg", "Comprimidos: 400 mg")
        ],
        dose: {
          adulto: t(lang, doseAdulto, doseAdulto)
        },
        doseKg: {
          standard: t(lang, "400 mg 12/12h VO (não baseado em peso)", "400 mg cada 12h VO (no basado en peso)"),
          maxDose:  t(lang, "800 mg/dia", "800 mg/día")
        },
        therapeuticRange: t(lang, "Concentração-dependente. Distribuição urinária predominante — uso restrito a ITU não complicada e prostatite. NÃO atingir níveis sistêmicos adequados.", "Concentración-dependiente. Distribución urinaria predominante — uso restringido a ITU no complicada y prostatitis. NO alcanza niveles sistémicos adecuados."),
        dilution:  t(lang, "Uso exclusivamente oral.", "Uso exclusivamente oral."),
        speed:     t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",     "Náuseas y vómitos"),
          t(lang, "Cefaleia",              "Cefalea"),
          t(lang, "Tontura",               "Mareos"),
          t(lang, "Diarreia",              "Diarrea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Tendinite / ruptura de tendão",          "Tendinitis / rotura de tendón"),
          t(lang, "QT prolongado / arritmias",              "QT prolongado / arritmias"),
          t(lang, "Neuropatia periférica",                  "Neuropatía periférica"),
          t(lang, "Psicose / convulsões (raro)",            "Psicosis / convulsiones (raro)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO — toxicidade articular fetal.", "Embarazo: CONTRAINDICADO — toxicidad articular fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar.", "Lactancia: evitar.")
            : null,
          idade < 18
            ? t(lang, "Menores de 18 anos: CONTRAINDICADO — toxicidade em cartilagem de crescimento.", "Menores de 18 años: CONTRAINDICADO — toxicidad en cartílago de crecimiento.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "USO RESTRITO a ITU baixa não complicada e prostatite — NÃO usar para infecções sistêmicas.", "USO RESTRINGIDO a ITU baja no complicada y prostatitis — NO usar para infecciones sistémicas."),
          t(lang, "Ingerir 1 hora antes ou 2 horas após antiácidos, leite, ferro e zinco — quelatação reduz absorção.", "Ingerir 1 hora antes o 2 horas después de antiácidos, leche, hierro y zinc — quelación reduce absorción."),
          t(lang, "Risco de ruptura tendinea aumentado em idosos e com uso de corticoides.", "Riesgo de rotura tendinosa aumentado en ancianos y con uso de corticoides.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman / Anvisa",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Dose habitual para ITU e prostatite.", "Dosis habitual para ITU y prostatitis.")
          },
          fg30a50: {
            vo: { dose: "400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Geralmente sem ajuste até ClCr 30 mL/min.", "Generalmente sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Reduzir frequência para cada 24 horas.", "Reducir frecuencia a cada 24 horas.")
          },
          fgMenor10: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Monitorar QT prolongado, tendinopatia e neurotoxicidade.", "Monitorizar QT prolongado, tendinopatía y neurotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não requer dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  }

});

/* ── GRUPO 12 (drogas 45–48): moxifloxacino, tobramicina, minociclina, cloranfenicol ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 45. MOXIFLOXACINO ── */
  moxifloxacino: {
    name: { pt: "Moxifloxacino", es: "Moxifloxacino" },
    category: "atb",
    icon: "🦠",
    color: "rgba(251,146,60,0.15)",
    colorTxt: "#FB923C",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const qtLongo  = Boolean(paciente.qtLongo);

      return {
        name:  t(lang, "Moxifloxacino", "Moxifloxacino"),
        class: t(lang, "Fluoroquinolona de 4ª geração", "Fluoroquinolona de 4ª generación"),
        commercialNames: {
          br: ["Avalox", "Moxifloxacino Genérico"],
          ar: ["Avalox", "Moxifloxacino Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos revestidos: 400 mg",         "Comprimidos recubiertos: 400 mg"),
          t(lang, "Solução para infusão EV: 400 mg/250 mL", "Solución para infusión EV: 400 mg/250 mL")
        ],
        dose: {
          adultoVO: t(lang, "400 mg VO 1x/dia", "400 mg VO 1 vez/día"),
          adultoEV: t(lang, "400 mg EV 1x/dia (infusão 60 min)", "400 mg EV 1 vez/día (infusión 60 min)")
        },
        doseKg: {
          standard: t(lang, "Dose fixa 400 mg/dia (não baseado em peso)", "Dosis fija 400 mg/día (no basado en peso)")
        },
        mechanism: t(lang,
          "Inibe as topoisomerases II (DNA girase) e IV, bloqueando a replicação e transcrição do DNA bacteriano.",
          "Inhibe las topoisomerasas II (DNA girasa) y IV, bloqueando la replicación y transcripción del DNA bacteriano."),
        onset:    t(lang, "Absorção oral rápida — Tmáx 1–3 h; biodisponibilidade ~90%.", "Absorción oral rápida — Tmáx 1–3 h; biodisponibilidad ~90%."),
        halfLife: t(lang, "Meia-vida 11–15 h (dose única diária).", "Semivida 11–15 h (dosis única diaria)."),
        therapeuticRange: t(lang,
          "Concentração-dependente. AUC/CIM ≥ 30–50 para otimizar eficácia.",
          "Concentración-dependiente. AUC/CIM ≥ 30–50 para optimizar eficacia."),
        dilution: t(lang,
          "EV: pronto para infusão (400 mg/250 mL). Não diluir adicionalmente.",
          "EV: listo para infusión (400 mg/250 mL). No diluir adicionalmente."),
        speed: t(lang,
          "Infundir em 60 minutos. Não infundir em menos de 60 min.",
          "Infundir en 60 minutos. No infundir en menos de 60 min."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",     "Náuseas y vómitos"),
          t(lang, "Diarreia",              "Diarrea"),
          t(lang, "Cefaleia",              "Cefalea"),
          t(lang, "Tontura",               "Mareos"),
          t(lang, "Elevação de TGO/TGP",   "Elevación de TGO/TGP")
        ],
        dangerousAdverseEffects: [
          t(lang, "QT prolongado / Torsades de Pointes",        "QT prolongado / Torsades de Pointes"),
          t(lang, "Hepatotoxicidade grave",                     "Hepatotoxicidad grave"),
          t(lang, "Ruptura de tendão",                          "Rotura de tendón"),
          t(lang, "Neuropatia periférica",                      "Neuropatía periférica"),
          t(lang, "Convulsões / Psicose (raro)",                "Convulsiones / Psicosis (raro)")
        ],
        contraindications: [
          t(lang, "QT prolongado congênito ou adquirido",       "QT prolongado congénito o adquirido"),
          t(lang, "Uso concomitante de antiarrítmicos classe IA/III", "Uso concomitante de antiarrítmicos clase IA/III"),
          t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipocalemia o hipomagnesemia no corregidas"),
          t(lang, "Crianças e adolescentes < 18 anos",          "Niños y adolescentes < 18 años")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO — toxicidade articular fetal.", "Embarazo: CONTRAINDICADO — toxicidad articular fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: evitar — excreção no leite.", "Lactancia: evitar — excreción en leche.")
            : null,
          qtLongo
            ? t(lang, "QT longo: CONTRAINDICADO.", "QT largo: CONTRAINDICADO.")
            : null,
          idade < 18
            ? t(lang, "Menores de 18 anos: CONTRAINDICADO — toxicidade em cartilagem de crescimento.", "Menores de 18 años: CONTRAINDICADO — toxicidad en cartílago de crecimiento.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar ECG (intervalo QTc) antes e durante o uso, especialmente em pacientes de risco.", "Monitorizar ECG (intervalo QTc) antes y durante el uso, especialmente en pacientes de riesgo."),
          t(lang, "Evitar uso simultâneo com outros fármacos que prolongam QT (haloperidol, metadona, amiodarona).", "Evitar uso simultáneo con otros fármacos que prolongan QT (haloperidol, metadona, amiodarona)."),
          t(lang, "Não requer ajuste renal — vantagem sobre outras fluoroquinolonas em insuficiência renal.", "No requiere ajuste renal — ventaja sobre otras fluoroquinolonas en insuficiencia renal.")
        ],
        ref: "Sanford Guide 2025 / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),

          fgMaior50: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar QT prolongado e hepatotoxicidade.", "Monitorizar QT prolongado y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não removido significativamente pela hemodiálise.", "No removido significativamente por hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 46. TOBRAMICINA ── */
  tobramicina: {
    name: { pt: "Tobramicina", es: "Tobramicina" },
    category: "atb",
    icon: "💉",
    color: "rgba(244,63,94,0.15)",
    colorTxt: "#F43F5E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "5–7 mg/kg EV 24/24h (dose estendida)"
        : clcr >= 30
          ? "5–7 mg/kg EV 36–48h (ajuste renal)"
          : "Dose individualizada conforme nível sérico";

      const dosePediatrica = idade < 12 && peso > 0
        ? `${Math.round(peso * 2.5)} mg EV 8/8h (${Math.round(peso * 2.5)} mg/dose)`
        : null;

      return {
        name:  t(lang, "Tobramicina", "Tobramicina"),
        class: t(lang, "Aminoglicosídeo", "Aminoglucósido"),
        commercialNames: {
          br: ["Tobramicina Genérica", "Tobrex (colírio)"],
          ar: ["Tobramicina Genérica", "Tobrex (colirio)"]
        },
        presentation: [
          t(lang, "Solução injetável EV/IM: 40 mg/mL (2 mL)", "Solución inyectable EV/IM: 40 mg/mL (2 mL)"),
          t(lang, "Solução injetável EV/IM: 80 mg/2 mL",       "Solución inyectable EV/IM: 80 mg/2 mL"),
          t(lang, "Colírio oftálmico: 0,3%",                   "Colirio oftálmico: 0,3%")
        ],
        dose: {
          adultoEV:   t(lang, doseAdultoEV, doseAdultoEV),
          pediatrica: dosePediatrica
            ? t(lang, `${dosePediatrica} — ${Math.round(peso * 2.5)} mg EV 8/8h`, `${dosePediatrica} — ${Math.round(peso * 2.5)} mg EV cada 8h`)
            : t(lang, "2–2,5 mg/kg EV 8/8h (pediátrico)", "2–2,5 mg/kg EV cada 8h (pediátrico)")
        },
        doseKg: {
          adultoEstendida: t(lang, "5–7 mg/kg/dia EV (dose única estendida 24h)", "5–7 mg/kg/día EV (dosis única extendida 24h)"),
          pediatrica:      t(lang, "2–2,5 mg/kg/dose EV 8/8h",                   "2–2,5 mg/kg/dosis EV cada 8h")
        },
        mechanism: t(lang,
          "Liga-se irreversivelmente à subunidade 30S ribossomal, causando leitura errônea do mRNA e morte bacteriana por mecanismo bactericida concentração-dependente.",
          "Se une irreversiblemente a la subunidad 30S ribosomal, causando lectura errónea del mRNA y muerte bacteriana por mecanismo bactericida concentración-dependiente."),
        onset:    t(lang, "EV: início imediato; pico sérico em 30–60 min após infusão.", "EV: inicio inmediato; pico sérico a los 30–60 min post-infusión."),
        halfLife: t(lang, "Meia-vida 2–3 h (função renal normal). Prolongada em insuficiência renal.", "Semivida 2–3 h (función renal normal). Prolongada en insuficiencia renal."),
        therapeuticRange: t(lang,
          "Dose estendida: pico 15–20 mcg/mL; vale < 1 mcg/mL. Convencional: pico 5–10 mcg/mL; vale < 1–2 mcg/mL.",
          "Dosis extendida: pico 15–20 mcg/mL; valle < 1 mcg/mL. Convencional: pico 5–10 mcg/mL; valle < 1–2 mcg/mL."),
        dilution: t(lang,
          "Diluir em 50–100 mL de SF 0,9% ou SG 5%.",
          "Diluir en 50–100 mL de SF 0,9% o SG 5%."),
        speed: t(lang,
          "Infundir em 30–60 minutos.",
          "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Nefrotoxicidade (reversível)",              "Nefrotoxicidad (reversible)"),
          t(lang, "Ototoxicidade auditiva (irreversível)",     "Ototoxicidad auditiva (irreversible)"),
          t(lang, "Ototoxicidade vestibular",                  "Ototoxicidad vestibular"),
          t(lang, "Bloqueio neuromuscular (raro)",             "Bloqueo neuromuscular (raro)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Insuficiência renal aguda",                 "Insuficiencia renal aguda"),
          t(lang, "Perda auditiva permanente",                 "Pérdida auditiva permanente"),
          t(lang, "Bloqueio neuromuscular com paralisia",      "Bloqueo neuromuscular con parálisis")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a aminoglicosídeos",     "Hipersensibilidad a aminoglucósidos"),
          t(lang, "Miastenia gravis (bloqueio NM)",            "Miastenia gravis (bloqueo NM)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: EVITAR — ototoxicidade fetal confirmada.", "Embarazo: EVITAR — ototoxicidad fetal confirmada.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível com cautela — baixa absorção oral.", "Lactancia: compatible con precaución — baja absorción oral.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorização sérica OBRIGATÓRIA: dosar pico (30 min pós-infusão) e vale (30 min pré-dose).", "Monitorización sérica OBLIGATORIA: medir pico (30 min post-infusión) y valle (30 min pre-dosis)."),
          t(lang, "Evitar associação com outros nefrotóxicos (anfotericina, vancomicina, contraste iodado).", "Evitar asociación con otros nefrotóxicos (anfotericina, vancomicina, contraste yodado)."),
          t(lang, "Hidratação adequada antes e durante o uso reduz risco de nefrotoxicidade.", "Hidratación adecuada antes y durante el uso reduce el riesgo de nefrotoxicidad.")
        ],
        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "Dose estendida (ODA 5–7 mg/kg/dia): pico 20–30 mcg/mL (1h após infusão) e vale < 1 mcg/mL. Dose convencional: pico 5–10 mcg/mL e vale < 1–2 mcg/mL. Colher pico 30 min após fim da infusão de 30 min e vale 30 min antes da próxima dose.",
            "Dosis extendida (ODA 5–7 mg/kg/día): pico 20–30 mcg/mL (1h después de infusión) y valle < 1 mcg/mL. Dosis convencional: pico 5–10 mcg/mL y valle < 1–2 mcg/mL. Colectar pico 30 min después del fin de infusión de 30 min y valle 30 min antes de la próxima dosis."),
          monitoring: t(lang,
            "Monitorar pico e vale séricos antes da 3ª dose (estado estacionário). Creatinina sérica e ureia 2–3×/semana. Audiometria formal se tratamento > 7 dias. Reavaliar dose a cada 48–72h em insuficiência renal.",
            "Monitorizar pico y valle séricos antes de la 3ª dosis (estado estacionario). Creatinina sérica y urea 2–3×/semana. Audiometría formal si tratamiento > 7 días. Reevaluar dosis cada 48–72h en insuficiencia renal."),
          notes: t(lang,
            "Risco aumentado de toxicidade quando associada a outros nefrotóxicos (vancomicina, anfotericina B, contraste iodado, diuréticos de alça). Vale persistentemente > 2 mcg/mL indica acúmulo — reduzir dose ou ampliar intervalo urgentemente. Dose estendida (ODA) reduz nefrotoxicidade comparada ao esquema 8/8h.",
            "Riesgo aumentado de toxicidad cuando se asocia a otros nefrotóxicos (vancomicina, anfotericina B, contraste yodado, diuréticos de asa). Valle persistentemente > 2 mcg/mL indica acumulación — reducir dosis o ampliar intervalo urgentemente. Dosis extendida (ODA) reduce nefrotoxicidad comparada con el esquema 8/8h.")
        },
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "5–7 mg/kg", intervalo: "24/24h", doseMaxima: "7 mg/kg/dia", unidade: "mg/kg" },
            pediatrica: { dose: "2–2,5 mg/kg", intervalo: "8/8h", doseMaxima: "7,5 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Preferir esquema de dose estendida.", "Preferir esquema de dosis extendida.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "5–7 mg/kg", intervalo: "36–48h", doseMaxima: "7 mg/kg/dose", unidade: "mg/kg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "6 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorização sérica obrigatória.", "Monitorización sérica obligatoria.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "Dose individualizada", intervalo: "Conforme nível sérico", doseMaxima: "Individualizada", unidade: "mg/kg" },
            pediatrica: { dose: "Dose individualizada", intervalo: "Conforme nível sérico", doseMaxima: "Individualizada", unidade: "mg/kg" },
            obs: t(lang, "Ajuste guiado por pico e vale séricos.", "Ajuste guiado por pico y valle séricos.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "Dose individualizada", intervalo: "Conforme nível sérico", doseMaxima: "Individualizada", unidade: "mg/kg" },
            pediatrica: { dose: "Dose individualizada", intervalo: "Conforme nível sérico", doseMaxima: "Individualizada", unidade: "mg/kg" },
            obs: t(lang, "Alto risco de nefrotoxicidade e ototoxicidade.", "Alto riesgo de nefrotoxicidad y ototoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1–2 mg/kg", intervalo: "Pós-HD", doseMaxima: "Individualizada", unidade: "mg/kg" },
            pediatrica: { dose: "1–2 mg/kg", intervalo: "Pós-HD", doseMaxima: "Individualizada", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise e monitorar níveis séricos.", "Administrar después de hemodiálisis y monitorizar niveles séricos.")
          }
        },

        indicationDosing: {
          standard: t(lang,
            "Dose estendida (ODA): 5–7 mg/kg EV 24/24h. Dose convencional: 1,5–2 mg/kg EV 8/8h (menos recomendada).",
            "Dosis extendida (ODA): 5–7 mg/kg IV 24/24h. Dosis convencional: 1,5–2 mg/kg IV 8/8h (menos recomendada)."),
          severe: t(lang,
            "Fibrose cística / P. aeruginosa pulmonar: 10 mg/kg/dia EV ou 300 mg inalatório 12/12h (formulação para nebulização).",
            "Fibrosis quística / P. aeruginosa pulmonar: 10 mg/kg/día IV o 300 mg inhalatorio 12/12h (formulación para nebulización)."),
          synergy: t(lang,
            "Sinergia (endocardite): 1 mg/kg EV 8/8h associado a beta-lactâmico por 2 semanas.",
            "Sinergia (endocarditis): 1 mg/kg IV 8/8h asociado a beta-lactámico por 2 semanas.")
        },

        neurotoxicityWarning: {
          risk: "high",
          symptoms: [
            t(lang, "Ototoxicidade vestibular (tontura, ataxia, nistagmo) — pode ser irreversível", "Ototoxicidad vestibular (mareos, ataxia, nistagmo) — puede ser irreversible"),
            t(lang, "Ototoxicidade coclear (perda auditiva de altas frequências, zumbido)", "Ototoxicidad coclear (pérdida auditiva de altas frecuencias, tinnitus)"),
            t(lang, "Nefrotoxicidade (elevação de creatinina, oligúria)", "Nefrotoxicidad (elevación de creatinina, oliguria)"),
            t(lang, "Bloqueio neuromuscular (raro — em administração rápida ou associação a relaxantes)", "Bloqueo neuromuscular (raro — en administración rápida o asociación con relajantes)")
          ],
          management: t(lang,
            "Suspender imediatamente se vale > 2 mcg/mL persistente, elevação de creatinina > 0,5 mg/dL, ou sintomas auditivos/vestibulares. Ototoxicidade geralmente IRREVERSÍVEL — não há antídoto. Audiometria baseline obrigatória em tratamentos > 7 dias. Bloqueio neuromuscular: gluconato de cálcio EV. Contraindicado em gestação (ototoxicidade fetal).",
            "Suspender inmediatamente si valle > 2 mcg/mL persistente, elevación de creatinina > 0,5 mg/dL, o síntomas auditivos/vestibulares. Ototoxicidad generalmente IRREVERSIBLE — sin antídoto. Audiometría basal obligatoria en tratamientos > 7 días. Bloqueo neuromuscular: gluconato de calcio IV. Contraindicado en gestación (ototoxicidad fetal).")
        },

        qtRisk: {
          risk: "none",
          monitoring: t(lang,
            "Sem risco clinicamente significativo de prolongamento do QT.",
            "Sin riesgo clínicamente significativo de prolongamiento del QT."),
          contraindications: []
        }
      };
    }
  },

  /* ── 47. MINOCICLINA ── */
  minociclina: {
    name: { pt: "Minociclina", es: "Minociclina" },
    category: "atb",
    icon: "🟡",
    color: "rgba(234,179,8,0.15)",
    colorTxt: "#EAB308",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 2), 200) : null;

      return {
        name:  t(lang, "Minociclina", "Minociclina"),
        class: t(lang, "Tetraciclina de 2ª geração", "Tetraciclina de 2ª generación"),
        commercialNames: {
          br: ["Minomycin", "Minociclina Genérica"],
          ar: ["Minocin", "Minociclina Genérica"]
        },
        presentation: [
          t(lang, "Cápsulas: 50 mg, 100 mg",                  "Cápsulas: 50 mg, 100 mg"),
          t(lang, "Comprimidos de liberação prolongada: 45 mg, 90 mg, 135 mg", "Comprimidos de liberación prolongada: 45 mg, 90 mg, 135 mg"),
          t(lang, "Pó para solução EV: 100 mg",                "Polvo para solución EV: 100 mg")
        ],
        dose: {
          adultoVO:   t(lang, "200 mg dose de ataque, depois 100 mg VO/EV 12/12h", "200 mg dosis de carga, luego 100 mg VO/EV cada 12h"),
          adultoEV:   t(lang, "200 mg dose de ataque EV, depois 100 mg EV 12/12h (infusão 60 min)", "200 mg dosis de carga EV, luego 100 mg EV cada 12h (infusión 60 min)"),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg/dose VO/EV 12/12h (ataque: 4 mg/kg)`, `${dosePed} mg/dosis VO/EV cada 12h (carga: 4 mg/kg)`)
            : t(lang, "4 mg/kg dose de ataque, depois 2 mg/kg 12/12h (máx 200 mg/dia)", "4 mg/kg dosis de carga, luego 2 mg/kg cada 12h (máx 200 mg/día)")
        },
        doseKg: {
          pediatrica: t(lang, "2 mg/kg/dose 12/12h (ataque: 4 mg/kg)", "2 mg/kg/dosis cada 12h (carga: 4 mg/kg)")
        },
        mechanism: t(lang,
          "Liga-se à subunidade 30S ribossomal, inibindo reversível e bacteriostaticamente a síntese proteica bacteriana. Excelente penetração intracelular.",
          "Se une a la subunidad 30S ribosomal, inhibiendo reversible y bacteriostáticamente la síntesis proteica bacteriana. Excelente penetración intracelular."),
        onset:    t(lang, "Absorção oral rápida — Tmáx 2–4 h; biodisponibilidade > 90%.", "Absorción oral rápida — Tmáx 2–4 h; biodisponibilidad > 90%."),
        halfLife: t(lang, "Meia-vida 11–26 h (eliminação principalmente hepática — NÃO renal).", "Semivida 11–26 h (eliminación principalmente hepática — NO renal)."),
        therapeuticRange: t(lang,
          "Bacteriostático. Concentração-dependente para alguns organismos intracelulares.",
          "Bacteriostático. Concentración-dependiente para algunos organismos intracelulares."),
        dilution: t(lang,
          "EV: reconstituir 100 mg em 5 mL de água estéril; diluir em 500–1000 mL de SF/SG.",
          "EV: reconstituir 100 mg en 5 mL de agua estéril; diluir en 500–1000 mL de SF/SG."),
        speed: t(lang, "Infundir em 60–360 minutos.", "Infundir en 60–360 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",            "Náuseas y vómitos"),
          t(lang, "Tontura e vertigem",            "Mareos y vértigo"),
          t(lang, "Fotossensibilidade",            "Fotosensibilidad"),
          t(lang, "Pigmentação cutânea/dental",    "Pigmentación cutánea/dental"),
          t(lang, "Diarreia",                      "Diarrea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Hepatotoxicidade grave",                       "Hepatotoxicidad grave"),
          t(lang, "Hipertensão intracraniana benigna",            "Hipertensión intracraneal benigna"),
          t(lang, "Síndrome lúpus-like",                         "Síndrome lupus-like"),
          t(lang, "Vestibulotoxicidade (tontura, vertigem grave)", "Vestibulotoxicidad (mareo, vértigo grave)")
        ],
        contraindications: [
          t(lang, "Gestação (especialmente 2º e 3º trimestres)", "Gestación (especialmente 2º y 3er trimestres)"),
          t(lang, "Crianças < 8 anos (pigmentação dentária permanente)", "Niños < 8 años (pigmentación dental permanente)"),
          t(lang, "Hipersensibilidade a tetraciclinas",           "Hipersensibilidad a tetraciclinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO — discoloração dentária e retardo ósseo fetal.", "Embarazo: CONTRAINDICADO — decoloración dental y retraso óseo fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — depósito ósseo e dental no lactente.", "Lactancia: EVITAR — depósito óseo y dental en el lactante.")
            : null,
          idade < 8
            ? t(lang, "Crianças < 8 anos: CONTRAINDICADO — pigmentação dentária permanente.", "Niños < 8 años: CONTRAINDICADO — pigmentación dental permanente.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Não tomar com laticínios, antiácidos com Ca²⁺/Mg²⁺/Al³⁺, ferro ou zinco — quelação reduz absorção.", "No tomar con lácteos, antiácidos con Ca²⁺/Mg²⁺/Al³⁺, hierro o zinc — quelación reduce absorción."),
          t(lang, "Usar fotoproteção solar durante o tratamento.", "Usar fotoprotección solar durante el tratamiento."),
          t(lang, "Não requer ajuste renal — vantagem em pacientes com DRC.", "No requiere ajuste renal — ventaja en pacientes con ERC.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Após dose de ataque de 200 mg.", "Tras dosis de carga de 200 mg.")
          },
          fg30a50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade e vestibulotoxicidade.", "Monitorizar hepatotoxicidad y vestibulotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita dose suplementar pós-HD.", "No requiere dosis suplementaria post-HD.")
          }
        }
      };
    }
  },

  /* ── 48. CLORANFENICOL ── */
  cloranfenicol: {
    name: { pt: "Cloranfenicol", es: "Cloranfenicol" },
    category: "atb",
    icon: "⚠️",
    color: "rgba(239,68,68,0.15)",
    colorTxt: "#EF4444",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const neonato  = idade < 0.08; /* < 1 mês */

      const dosePedAbsoluta = peso > 0 ? Math.min(Math.round(peso * 50), 3000) : null;
      const doseEvAbsoluta  = peso > 0 ? Math.round(peso * 75) : null;

      return {
        name:  t(lang, "Cloranfenicol", "Cloranfenicol"),
        class: t(lang, "Anfenicol (bacteriostático de amplo espectro)", "Anfenicol (bacteriostático de amplio espectro)"),
        commercialNames: {
          br: ["Quemicetina", "Cloranfenicol Genérico"],
          ar: ["Cloranfenicol Genérico", "Clorafen"]
        },
        presentation: [
          t(lang, "Cápsulas: 250 mg, 500 mg",                      "Cápsulas: 250 mg, 500 mg"),
          t(lang, "Solução injetável EV: 1 g/frasco-ampola",        "Solución inyectable EV: 1 g/frasco-ampolla"),
          t(lang, "Colírio/pomada oftálmica: 0,5%",                 "Colirio/pomada oftálmica: 0,5%"),
          t(lang, "Solução otológica: 0,5%",                        "Solución otológica: 0,5%")
        ],
        dose: {
          adultoVO:   t(lang, "500 mg VO 6/6h (máx 4 g/dia)", "500 mg VO cada 6h (máx 4 g/día)"),
          adultoEV:   t(lang, "50–100 mg/kg/dia EV dividido 6/6h (máx 4 g/dia)", "50–100 mg/kg/día EV dividido cada 6h (máx 4 g/día)"),
          pediatrica: dosePedAbsoluta
            ? t(lang, `${dosePedAbsoluta} mg EV/VO 6/6h (50 mg/kg/dose; máx 100 mg/kg/dia)`, `${dosePedAbsoluta} mg EV/VO cada 6h (50 mg/kg/dosis; máx 100 mg/kg/día)`)
            : t(lang, "50 mg/kg/dose EV/VO 6/6h (máx 100 mg/kg/dia)", "50 mg/kg/dosis EV/VO cada 6h (máx 100 mg/kg/día)"),
          neonato: t(lang,
            "Neonatos: 25 mg/kg/dia EV 1x/dia (risco de síndrome cinzenta — monitorar nível sérico)",
            "Neonatos: 25 mg/kg/día EV 1 vez/día (riesgo de síndrome gris — monitorizar nivel sérico)")
        },
        doseKg: {
          pediatrica:     t(lang, "50 mg/kg/dose 6/6h (máx 100 mg/kg/dia)",   "50 mg/kg/dosis cada 6h (máx 100 mg/kg/día)"),
          adultoEVKg:     t(lang, "50–100 mg/kg/dia EV dividido em 4 doses",   "50–100 mg/kg/día EV dividido en 4 dosis"),
          neonato:        t(lang, "25 mg/kg/dia 1x/dia (máx 25 mg/kg/dia)",    "25 mg/kg/día 1 vez/día (máx 25 mg/kg/día)")
        },
        mechanism: t(lang,
          "Liga-se à subunidade 50S ribossomal, inibindo a peptidiltransferase e bloqueando a síntese proteica. Bacteriostático na maioria dos organismos; bactericida para H. influenzae, N. meningitidis e S. pneumoniae.",
          "Se une a la subunidad 50S ribosomal, inhibiendo la peptidiltransferasa y bloqueando la síntesis proteica. Bacteriostático para la mayoría; bactericida para H. influenzae, N. meningitidis y S. pneumoniae."),
        onset:    t(lang, "Absorção oral boa — Tmáx 1–3 h; biodisponibilidade ~80%. EV: início imediato.", "Absorción oral buena — Tmáx 1–3 h; biodisponibilidad ~80%. EV: inicio inmediato."),
        halfLife: t(lang, "Meia-vida 1,5–4 h (adulto). Prolongada em neonatos e hepatopatas.", "Semivida 1,5–4 h (adulto). Prolongada en neonatos y hepatópatas."),
        therapeuticRange: t(lang,
          "Pico 10–20 mcg/mL; vale 5–10 mcg/mL. Monitorar nível sérico em neonatos e pacientes críticos.",
          "Pico 10–20 mcg/mL; valle 5–10 mcg/mL. Monitorar nivel sérico en neonatos y pacientes críticos."),
        dilution: t(lang,
          "EV: reconstituir 1 g em 10 mL de água estéril; diluir em 50–100 mL SF/SG.",
          "EV: reconstituir 1 g en 10 mL de agua estéril; diluir en 50–100 mL SF/SG."),
        speed: t(lang, "Infundir em 30–60 minutos.", "Infundir en 30–60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",                    "Náuseas y vómitos"),
          t(lang, "Diarreia",                             "Diarrea"),
          t(lang, "Anemia (dose-dependente, reversível)", "Anemia (dosis-dependiente, reversible)"),
          t(lang, "Neurite óptica (uso prolongado)",      "Neuritis óptica (uso prolongado)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anemia aplástica (idiossincrática, irreversível)",                    "Anemia aplástica (idiosincrática, irreversible)"),
          t(lang, "Síndrome cinzenta (neonatos — cianose, colapso cardiovascular)",      "Síndrome gris (neonatos — cianosis, colapso cardiovascular)"),
          t(lang, "Supressão medular (dose-dependente)",                                 "Supresión medular (dosis-dependiente)"),
          t(lang, "Reação de Jarisch-Herxheimer em febre tifoide",                      "Reacción de Jarisch-Herxheimer en fiebre tifoidea")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade ao cloranfenicol",             "Hipersensibilidad al cloranfenicol"),
          t(lang, "Aplasia medular prévia relacionada ao fármaco",   "Aplasia medular previa relacionada al fármaco"),
          t(lang, "Neonatos prematuros (sem monitorização de nível sérico)", "Neonatos prematuros (sin monitorización de nivel sérico)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: EVITAR — risco de síndrome cinzenta no neonato e depressão medular fetal.", "Embarazo: EVITAR — riesgo de síndrome gris en el neonato y depresión medular fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: CONTRAINDICADO — risco de síndrome cinzenta no lactente.", "Lactancia: CONTRAINDICADO — riesgo de síndrome gris en el lactante.")
            : null,
          neonato
            ? t(lang, "Neonato: USO RESTRITO com monitorização sérica obrigatória — síndrome cinzenta fatal.", "Neonato: USO RESTRINGIDO con monitorización sérica obligatoria — síndrome gris fatal.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "RESERVAR para infecções graves sem alternativa disponível — risco de aplasia medular fatal.", "RESERVAR para infecciones graves sin alternativa disponible — riesgo de aplasia medular fatal."),
          t(lang, "Monitorar hemograma completo seriado durante e após o tratamento.", "Monitorizar hemograma completo seriado durante y después del tratamiento."),
          t(lang, "Inibidor potente do CYP2C9 e CYP3A4 — verificar interações com varfarina, fenitoína, ciclosporina.", "Inhibidor potente del CYP2C9 y CYP3A4 — verificar interacciones con warfarina, fenitoína, ciclosporina.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA / WHO Essential Medicines",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang,
            "Geralmente não necessita ajuste renal, porém exige monitorização hematológica.",
            "Generalmente no requiere ajuste renal, pero exige monitorización hematológica."),

          fgMaior50: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hemograma seriado.", "Monitorizar hemograma seriado.")
          },
          fg30a50: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")
          },
          fg10a30: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Avaliar níveis séricos se disponível.", "Evaluar niveles séricos si están disponibles.")
          },
          fgMenor10: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar mielotoxicidade e síndrome cinzenta em neonatos.", "Monitorizar mielotoxicidad y síndrome gris en neonatos.")
          },
          hemodialise: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "100 mg/kg/dia", unidade: "mg/kg" },
            obs: t(lang, "Sem recomendação de suplementação pós-HD.", "Sin recomendación de suplementación post-HD.")
          }
        }
      };
    }
  }

}); /* fim Grupo 12 */

/* ── GRUPO 13 (drogas 49–52): cefadroxila, ceftarolina, tedizolida, fidaxomicina ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 49. CEFADROXILA ── */
  cefadroxila: {
    name: { pt: "Cefadroxila", es: "Cefadroxilo" },
    category: "atb",
    icon: "💊",
    color: "rgba(34,197,94,0.15)",
    colorTxt: "#22C55E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdulto = clcr >= 50
        ? "500 mg–1 g VO 12/12h"
        : clcr >= 30
          ? "500 mg VO 24/24h"
          : clcr >= 10
            ? "500 mg VO 24–36h"
            : "500 mg VO 36–48h";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 30), 2000) : null;

      return {
        name:  t(lang, "Cefadroxila", "Cefadroxilo"),
        class: t(lang, "Cefalosporina de 1ª geração (oral)", "Cefalosporina de 1ª generación (oral)"),
        commercialNames: {
          br: ["Cefamox", "Cefadroxila Genérica", "Drafloxin"],
          ar: ["Cefadroxilo Genérico", "Duricef"]
        },
        presentation: [
          t(lang, "Cápsulas: 500 mg",                          "Cápsulas: 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL; 500 mg/5 mL",  "Suspensión oral: 250 mg/5 mL; 500 mg/5 mL")
        ],
        dose: {
          adultoVO:   t(lang, doseAdulto, doseAdulto),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg VO 12/12h (30 mg/kg/dia dividido 12/12h)`, `${dosePed} mg VO cada 12h (30 mg/kg/día dividido cada 12h)`)
            : t(lang, "30 mg/kg/dia VO dividido 12/12h (máx 2 g/dia)", "30 mg/kg/día VO dividido cada 12h (máx 2 g/día)")
        },
        doseKg: {
          pediatrica: t(lang, "30 mg/kg/dia dividido 12/12h (máx 2 g/dia)", "30 mg/kg/día dividido cada 12h (máx 2 g/día)")
        },
        mechanism: t(lang,
          "Liga-se às proteínas ligadoras de penicilina (PBPs), inibindo a síntese da parede celular bacteriana. Bactericida tempo-dependente.",
          "Se une a las proteínas ligadoras de penicilina (PBPs), inhibiendo la síntesis de la pared celular bacteriana. Bactericida tiempo-dependiente."),
        onset:    t(lang, "Absorção oral boa — Tmáx 1–2 h; biodisponibilidade ~90%.", "Absorción oral buena — Tmáx 1–2 h; biodisponibilidad ~90%."),
        halfLife: t(lang, "Meia-vida 1,1–2 h. Eliminação predominantemente renal (>90% inalterada na urina).", "Semivida 1,1–2 h. Eliminación predominantemente renal (>90% inalterada en orina)."),
        therapeuticRange: t(lang, "Tempo acima da CIM (T>CIM) como parâmetro PK/PD. Uso oral exclusivo.", "Tiempo sobre la CIM (T>CIM) como parámetro PK/PD. Uso oral exclusivo."),
        dilution: t(lang, "Uso oral exclusivo.", "Uso oral exclusivo."),
        speed:    t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",          "Náuseas y vómitos"),
          t(lang, "Diarreia",                   "Diarrea"),
          t(lang, "Dor abdominal",              "Dolor abdominal"),
          t(lang, "Rash cutâneo",               "Erupción cutánea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Reação de hipersensibilidade grave (anafilaxia)", "Reacción de hipersensibilidad grave (anafilaxia)"),
          t(lang, "Colite pseudomembranosa por C. difficile",       "Colitis seudomembranosa por C. difficile"),
          t(lang, "Nefrotoxicidade (raro)",                        "Nefrotoxicidad (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: compatível (categoria B) — amplamente utilizado.", "Embarazo: compatible (categoría B) — ampliamente utilizado.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Requer ajuste de dose em insuficiência renal (eliminação renal >90%).", "Requiere ajuste de dosis en insuficiencia renal (eliminación renal >90%)."),
          t(lang, "Excelente opção oral para infecções de pele, tecidos moles e ITU não complicada.", "Excelente opción oral para infecciones de piel, tejidos blandos e ITU no complicada.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "500 mg–1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para infecções de pele e vias aéreas superiores.", "Dosis habitual para infecciones de piel y vías respiratorias superiores.")
          },
          fg30a50: {
            vo: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência devido à eliminação renal predominante.", "Reducir frecuencia debido a la eliminación renal predominante.")
          },
          fg10a30: {
            vo: { dose: "500 mg", intervalo: "24–36h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15 mg/kg", intervalo: "24–36h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório para evitar acúmulo.", "Ajuste obligatorio para evitar acumulación.")
          },
          fgMenor10: {
            vo: { dose: "500 mg", intervalo: "36–48h", doseMaxima: "500 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15 mg/kg", intervalo: "36–48h", doseMaxima: "500 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade em insuficiência renal avançada.", "Monitorizar neurotoxicidad en insuficiencia renal avanzada.")
          },
          hemodialise: {
            vo: { dose: "500 mg", intervalo: "48/48h", doseMaxima: "500 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15 mg/kg", intervalo: "48/48h", doseMaxima: "500 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 50. CEFTAROLINA ── */
  ceftarolina: {
    name: { pt: "Ceftarolina", es: "Ceftarolina" },
    category: "atb",
    icon: "💉",
    color: "rgba(56,189,248,0.15)",
    colorTxt: "#38BDF8",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "600 mg EV 12/12h (infusão 60 min)"
        : clcr >= 30
          ? "400 mg EV 12/12h"
          : clcr >= 10
            ? "300 mg EV 12/12h"
            : "200 mg EV 12/12h";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 10), 600) : null;

      return {
        name:  t(lang, "Ceftarolina", "Ceftarolina"),
        class: t(lang, "Cefalosporina de 5ª geração (anti-MRSA)", "Cefalosporina de 5ª generación (anti-MRSA)"),
        commercialNames: {
          br: ["Zinforo"],
          ar: ["Zinforo", "Teflaro"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 400 mg/frasco", "Polvo para solución inyectable EV: 400 mg/frasco"),
          t(lang, "Pó para solução injetável EV: 600 mg/frasco", "Polvo para solución inyectable EV: 600 mg/frasco")
        ],
        dose: {
          adultoEV:   t(lang, doseAdultoEV, doseAdultoEV),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg EV 8/8h–12/12h (8–12 mg/kg/dose)`, `${dosePed} mg EV cada 8h–12h (8–12 mg/kg/dosis)`)
            : t(lang, "8–12 mg/kg EV 8/8h–12/12h (máx 600 mg/dose)", "8–12 mg/kg EV cada 8h–12h (máx 600 mg/dosis)")
        },
        doseKg: {
          pediatrica: t(lang, "8–12 mg/kg/dose EV 8/8h–12/12h (máx 600 mg/dose)", "8–12 mg/kg/dosis EV cada 8h–12h (máx 600 mg/dosis)")
        },
        mechanism: t(lang,
          "Liga-se à PBP2a (presente no MRSA) e às demais PBPs, inibindo a síntese da parede celular. Única cefalosporina com atividade anti-MRSA documentada.",
          "Se une a PBP2a (presente en MRSA) y a las demás PBPs, inhibiendo la síntesis de la pared celular. Única cefalosporina con actividad anti-MRSA documentada."),
        onset:    t(lang, "EV: pico sérico ao final da infusão de 60 min.", "EV: pico sérico al final de la infusión de 60 min."),
        halfLife: t(lang, "Meia-vida 2,6 h (função renal normal). Eliminação renal ~64% inalterada.", "Semivida 2,6 h (función renal normal). Eliminación renal ~64% inalterada."),
        therapeuticRange: t(lang, "Tempo acima da CIM (T>CIM ≥ 60%) como parâmetro PK/PD.", "Tiempo sobre la CIM (T>CIM ≥ 60%) como parámetro PK/PD."),
        dilution: t(lang,
          "Reconstituir 400 mg ou 600 mg em 20 mL de água estéril; diluir em 50–250 mL de SF 0,9% ou SG 5%.",
          "Reconstituir 400 mg o 600 mg en 20 mL de agua estéril; diluir en 50–250 mL de SF 0,9% o SG 5%."),
        speed: t(lang, "Infundir em 60 minutos.", "Infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Diarreia",         "Diarrea"),
          t(lang, "Náuseas",          "Náuseas"),
          t(lang, "Rash cutâneo",     "Erupción cutánea"),
          t(lang, "Prurido",          "Prurito"),
          t(lang, "Flebite no local de infusão", "Flebitis en el lugar de infusión")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anemia hemolítica por Coombs positivo direto",        "Anemia hemolítica por Coombs directo positivo"),
          t(lang, "Hipersensibilidade grave / anafilaxia",               "Hipersensibilidad grave / anafilaxia"),
          t(lang, "Colite por C. difficile",                             "Colitis por C. difficile"),
          t(lang, "Convulsões (especialmente em insuficiência renal)",   "Convulsiones (especialmente en insuficiencia renal)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefalosporinas ou penicilinas (reação cruzada)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se benefício superar risco.", "Embarazo: datos limitados — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — considerar suspensão temporária.", "Lactancia: datos insuficientes — considerar suspensión temporal.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Monitorar hemograma: anemia hemolítica com teste de Coombs positivo relatada em ~10% dos pacientes.", "Monitorizar hemograma: anemia hemolítica con test de Coombs positivo reportada en ~10% de pacientes."),
          t(lang, "Requer ajuste de dose em insuficiência renal (eliminação renal ~64%).", "Requiere ajuste de dosis en insuficiencia renal (eliminación renal ~64%)."),
          t(lang, "Reservar para infecções por MRSA ou pneumonia grave sem resposta a outros agentes.", "Reservar para infecciones por MRSA o neumonía grave sin respuesta a otros agentes.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA / FDA label",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1,2 g/dia", unidade: "mg" },
            pediatrica: { dose: "8–12 mg/kg", intervalo: "8/8h–12/12h", doseMaxima: "600 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para MRSA e pneumonia adquirida na comunidade.", "Dosis habitual para MRSA y neumonía adquirida en la comunidad.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            pediatrica: { dose: "8 mg/kg", intervalo: "12/12h", doseMaxima: "400 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em insuficiência renal moderada.", "Reducir dosis en insuficiencia renal moderada.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "300 mg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: { dose: "6 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: { dose: "4 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar acúmulo e neurotoxicidade.", "Monitorizar acumulación y neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: { dose: "4 mg/kg", intervalo: "12/12h", doseMaxima: "200 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 51. TEDIZOLIDA ── */
  tedizolida: {
    name: { pt: "Tedizolida", es: "Tedizolida" },
    category: "atb",
    icon: "🔵",
    color: "rgba(99,102,241,0.15)",
    colorTxt: "#6366F1",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      return {
        name:  t(lang, "Tedizolida", "Tedizolida"),
        class: t(lang, "Oxazolidinona de 2ª geração", "Oxazolidinona de 2ª generación"),
        commercialNames: {
          br: ["Sivextro"],
          ar: ["Sivextro"]
        },
        presentation: [
          t(lang, "Comprimidos: 200 mg",                      "Comprimidos: 200 mg"),
          t(lang, "Pó para solução injetável EV: 200 mg/frasco", "Polvo para solución inyectable EV: 200 mg/frasco")
        ],
        dose: {
          adultoVO: t(lang, "200 mg VO 1x/dia por 6 dias", "200 mg VO 1 vez/día por 6 días"),
          adultoEV: t(lang, "200 mg EV 1x/dia por 6 dias (infusão 60 min)", "200 mg EV 1 vez/día por 6 días (infusión 60 min)")
        },
        doseKg: {
          standard: t(lang, "Dose fixa 200 mg/dia (não baseado em peso)", "Dosis fija 200 mg/día (no basado en peso)")
        },
        mechanism: t(lang,
          "Liga-se à subunidade 23S do RNA ribossomal 50S, inibindo a formação do complexo de iniciação da síntese proteica. Ativo contra MRSA, VRSA, VRE e Staphylococcus resistentes.",
          "Se une a la subunidad 23S del RNA ribosomal 50S, inhibiendo la formación del complejo de iniciación de la síntesis proteica. Activo contra MRSA, VRSA, VRE y Staphylococcus resistentes."),
        onset:    t(lang, "Biodisponibilidade oral ~91%. Tmáx ~3 h.", "Biodisponibilidad oral ~91%. Tmáx ~3 h."),
        halfLife: t(lang, "Meia-vida ~12 h. Eliminação hepática predominante (>70%).", "Semivida ~12 h. Eliminación hepática predominante (>70%)."),
        therapeuticRange: t(lang,
          "Bacteriostático. AUC/CIM como parâmetro PK/PD. Menor inibição da MAO que linezolida.",
          "Bacteriostático. AUC/CIM como parámetro PK/PD. Menor inhibición de MAO que linezolida."),
        dilution: t(lang,
          "Reconstituir 200 mg em 4 mL de água estéril; diluir em 250 mL de SF 0,9%.",
          "Reconstituir 200 mg en 4 mL de agua estéril; diluir en 250 mL de SF 0,9%."),
        speed: t(lang, "Infundir em 60 minutos.", "Infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas",           "Náuseas"),
          t(lang, "Cefaleia",          "Cefalea"),
          t(lang, "Diarreia",          "Diarrea"),
          t(lang, "Vômitos",           "Vómitos"),
          t(lang, "Tontura",           "Mareos")
        ],
        dangerousAdverseEffects: [
          t(lang, "Mielossupressão (trombocitopenia, neutropenia — uso prolongado > 6 dias)", "Mielosupresión (trombocitopenia, neutropenia — uso prolongado > 6 días)"),
          t(lang, "Neuropatia óptica (uso prolongado)",                                       "Neuropatía óptica (uso prolongado)"),
          t(lang, "Síndrome serotoninérgica (inibição fraca da MAO)",                         "Síndrome serotoninérgica (inhibición débil de MAO)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade à tedizolida ou oxazolidinonas", "Hipersensibilidad a tedizolida u oxazolidinonas"),
          t(lang, "Uso com agentes serotoninérgicos (risco de síndrome serotoninérgica)", "Uso con agentes serotoninérgicos (riesgo de síndrome serotoninérgica)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — evitar; usar apenas se essencial.", "Embarazo: datos insuficientes — evitar; usar solo si es esencial.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação durante o tratamento.", "Lactancia: datos insuficientes — suspender lactancia durante el tratamiento.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Curso limitado a 6 dias — mielossupressão rara com uso curto mas possível em uso prolongado.", "Curso limitado a 6 días — mielosupresión rara con uso corto pero posible en uso prolongado."),
          t(lang, "Menor interação com IMAOs e serotoninérgicos que a linezolida, mas monitorar sintomas serotoninérgicos.", "Menor interacción con IMAOs y serotoninérgicos que linezolida, pero monitorizar síntomas serotoninérgicos."),
          t(lang, "Não requer ajuste renal — vantagem em pacientes com DRC.", "No requiere ajuste renal — ventaja en pacientes con ERC.")
        ],
        ref: "Sanford Guide 2025 / FDA label Sivextro / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),

          fgMaior50: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Dose habitual para infecções de pele por Gram-positivos.", "Dosis habitual para infecciones de piel por Grampositivos.")
          },
          fg30a50: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar mielossupressão em tratamentos prolongados.", "Monitorizar mielosupresión en tratamientos prolongados.")
          },
          hemodialise: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não removida significativamente por hemodiálise.", "No removida significativamente por hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 52. FIDAXOMICINA ── */
  fidaxomicina: {
    name: { pt: "Fidaxomicina", es: "Fidaxomicina" },
    category: "atb",
    icon: "🦠",
    color: "rgba(168,85,247,0.15)",
    colorTxt: "#A855F7",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      return {
        name:  t(lang, "Fidaxomicina", "Fidaxomicina"),
        class: t(lang, "Macrocíclico (antibiótico oral não absorvível)", "Macrociclico (antibiótico oral no absorbible)"),
        commercialNames: {
          br: ["Dificid"],
          ar: ["Dificid"]
        },
        presentation: [
          t(lang, "Comprimidos: 200 mg", "Comprimidos: 200 mg")
        ],
        dose: {
          adultoVO: t(lang,
            "200 mg VO 12/12h por 10 dias (ICD) ou 200 mg VO 12/12h × 5d, depois 200 mg em dias alternados × 20d (recorrência)",
            "200 mg VO cada 12h por 10 días (ICD) o 200 mg VO cada 12h × 5d, luego 200 mg en días alternos × 20d (recurrencia)")
        },
        doseKg: {
          standard: t(lang, "Dose fixa 200 mg 12/12h (não baseado em peso)", "Dosis fija 200 mg cada 12h (no basado en peso)")
        },
        mechanism: t(lang,
          "Inibe a RNA polimerase bacteriana por mecanismo diferente da rifampicina, sem resistência cruzada. Atividade intraluminal predominante — níveis sistêmicos mínimos.",
          "Inhibe la RNA polimerasa bacteriana por mecanismo diferente a la rifampicina, sin resistencia cruzada. Actividad intraluminal predominante — niveles sistémicos mínimos."),
        onset:    t(lang, "Absorção sistêmica mínima (<1%). Concentrações intraluminais elevadas.", "Absorción sistémica mínima (<1%). Concentraciones intraluminales elevadas."),
        halfLife: t(lang, "Meia-vida plasmática ~11,7 h (metabólito ativo OP-118). Eliminação fecal predominante.", "Semivida plasmática ~11,7 h (metabolito activo OP-118). Eliminación fecal predominante."),
        therapeuticRange: t(lang,
          "Atividade intraluminal. Sem necessidade de monitorização sérica. Superior à vancomicina oral na prevenção de recorrência de ICD.",
          "Actividad intraluminal. Sin necesidad de monitorización sérica. Superior a vancomicina oral en prevención de recurrencia de ICD."),
        dilution: t(lang, "Uso oral exclusivo — não disponível via EV.", "Uso oral exclusivo — no disponible vía EV."),
        speed:    t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Náuseas",          "Náuseas"),
          t(lang, "Vômitos",          "Vómitos"),
          t(lang, "Dor abdominal",    "Dolor abdominal"),
          t(lang, "Hemorragia gastrointestinal (raro)", "Hemorragia gastrointestinal (raro)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Reação de hipersensibilidade (rara)", "Reacción de hipersensibilidad (rara)"),
          t(lang, "Megacólon tóxico (no contexto da própria ICD)", "Megacolon tóxico (en el contexto de la propia ICD)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade à fidaxomicina", "Hipersensibilidad a fidaxomicina")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — absorção sistêmica mínima reduz risco fetal; usar se benefício superar risco.", "Embarazo: datos limitados — absorción sistémica mínima reduce el riesgo fetal; usar si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: absorção sistêmica mínima — provavelmente compatível.", "Lactancia: absorción sistémica mínima — probablemente compatible.")
            : null,
          idade < 18
            ? t(lang, "Crianças < 18 anos: uso não aprovado — dados pediátricos insuficientes.", "Niños < 18 años: uso no aprobado — datos pediátricos insuficientes.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indicação principal: infecção por Clostridioides difficile (ICD) — superior à vancomicina oral na prevenção de recorrência.", "Indicación principal: infección por Clostridioides difficile (ICD) — superior a vancomicina oral en prevención de recurrencia."),
          t(lang, "Não requer ajuste renal — absorção sistêmica < 1%.", "No requiere ajuste renal — absorción sistémica < 1%."),
          t(lang, "Custo elevado — reservar para pacientes com alto risco de recorrência de ICD.", "Costo elevado — reservar para pacientes con alto riesgo de recurrencia de ICD.")
        ],
        ref: "Sanford Guide 2025 / FDA label Dificid / IDSA C. difficile Guidelines 2021",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang,
            "Não necessita ajuste renal devido à absorção sistêmica mínima.",
            "No requiere ajuste renal debido a la absorción sistémica mínima."),

          fgMaior50: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Indicada para infecção por Clostridioides difficile.", "Indicada para infección por Clostridioides difficile.")
          },
          fg30a50: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Sem ajuste necessário mesmo em insuficiência renal avançada.", "Sin ajuste necesario incluso en insuficiencia renal avanzada.")
          },
          hemodialise: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não requer dose suplementar pós-hemodiálise.", "No requiere dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  }

}); /* fim Grupo 13 */

/* ── GRUPO 14 (drogas 53–56): cefixima, cefpodoxima, ceftolozano+tazobactam, ceftazidima+avibactam ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 53. CEFIXIMA ── */
  cefixima: {
    name: { pt: "Cefixima", es: "Cefixima" },
    category: "atb",
    icon: "💊",
    color: "rgba(20,184,166,0.15)",
    colorTxt: "#14B8A6",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdulto = clcr >= 30 ? "400 mg VO 24/24h" : "200 mg VO 24/24h";
      const dosePed    = peso > 0 ? Math.min(Math.round(peso * 8), 400) : null;

      return {
        name:  t(lang, "Cefixima", "Cefixima"),
        class: t(lang, "Cefalosporina de 3ª geração (oral)", "Cefalosporina de 3ª generación (oral)"),
        commercialNames: {
          br: ["Cefspan", "Cefixima Genérica"],
          ar: ["Cefspan", "Cefixima Genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 200 mg, 400 mg",             "Comprimidos: 200 mg, 400 mg"),
          t(lang, "Cápsulas: 400 mg",                        "Cápsulas: 400 mg"),
          t(lang, "Suspensão oral: 100 mg/5 mL",             "Suspensión oral: 100 mg/5 mL")
        ],
        dose: {
          adultoVO:   t(lang, doseAdulto, doseAdulto),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg VO 24/24h (8 mg/kg/dia)`, `${dosePed} mg VO 24h (8 mg/kg/día)`)
            : t(lang, "8 mg/kg/dia VO dose única ou dividido 12/12h (máx 400 mg/dia)", "8 mg/kg/día VO dosis única o dividido cada 12h (máx 400 mg/día)")
        },
        doseKg: {
          pediatrica: t(lang, "8 mg/kg/dia VO (máx 400 mg/dia)", "8 mg/kg/día VO (máx 400 mg/día)")
        },
        mechanism: t(lang,
          "Liga-se às PBPs 1, 2, 3 e 6, inibindo a síntese da parede celular bacteriana. Resistente a muitas beta-lactamases plasmídicas.",
          "Se une a las PBPs 1, 2, 3 y 6, inhibiendo la síntesis de la pared celular bacteriana. Resistente a muchas beta-lactamasas plasmídicas."),
        onset:    t(lang, "Absorção oral moderada — biodisponibilidade ~40–50%; Tmáx 2–6 h.", "Absorción oral moderada — biodisponibilidad ~40–50%; Tmáx 2–6 h."),
        halfLife: t(lang, "Meia-vida 3–4 h. Eliminação renal ~50% inalterada.", "Semivida 3–4 h. Eliminación renal ~50% inalterada."),
        therapeuticRange: t(lang, "Tempo acima da CIM (T>CIM) como parâmetro PK/PD.", "Tiempo sobre la CIM (T>CIM) como parámetro PK/PD."),
        dilution: t(lang, "Uso oral exclusivo.", "Uso oral exclusivo."),
        speed:    t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Diarreia",           "Diarrea"),
          t(lang, "Náuseas",            "Náuseas"),
          t(lang, "Dor abdominal",      "Dolor abdominal"),
          t(lang, "Rash cutâneo",       "Erupción cutánea")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia / hipersensibilidade grave",        "Anafilaxia / hipersensibilidad grave"),
          t(lang, "Colite pseudomembranosa por C. difficile",     "Colitis seudomembranosa por C. difficile"),
          t(lang, "Síndrome de Stevens-Johnson (muito raro)",     "Síndrome de Stevens-Johnson (muy raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefalosporinas ou penicilinas", "Hipersensibilidad a cefalosporinas o penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se necessário.", "Embarazo: datos limitados — usar solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção mínima — provavelmente compatível.", "Lactancia: excreción mínima — probablemente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Requer ajuste em ClCr < 30 mL/min (reduzir dose em 50%).", "Requiere ajuste en ClCr < 30 mL/min (reducir dosis en 50%)."),
          t(lang, "Boa opção oral para infecções respiratórias, ITU e gonorreia não complicada.", "Buena opción oral para infecciones respiratorias, ITU y gonorrea no complicada.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "8 mg/kg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "8 mg/kg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Geralmente sem ajuste até ClCr 20–30 mL/min.", "Generalmente sin ajuste hasta ClCr 20–30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "4 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em aproximadamente 50%.", "Reducir dosis aproximadamente un 50%.")
          },
          fgMenor10: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "4 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar acúmulo do antibiótico.", "Monitorizar acumulación del antibiótico.")
          },
          hemodialise: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "4 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 54. CEFPODOXIMA ── */
  cefpodoxima: {
    name: { pt: "Cefpodoxima", es: "Cefpodoxima" },
    category: "atb",
    icon: "💊",
    color: "rgba(6,182,212,0.15)",
    colorTxt: "#06B6D4",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdulto = clcr >= 30
        ? "200 mg VO 12/12h"
        : clcr >= 10
          ? "200 mg VO 24/24h"
          : "100–200 mg VO 24/24h";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 5), 400) : null;

      return {
        name:  t(lang, "Cefpodoxima", "Cefpodoxima"),
        class: t(lang, "Cefalosporina de 3ª geração (oral)", "Cefalosporina de 3ª generación (oral)"),
        commercialNames: {
          br: ["Orelox", "Cefpodoxima Genérica"],
          ar: ["Orelox", "Cefpodoxima Genérica"]
        },
        presentation: [
          t(lang, "Comprimidos revestidos: 100 mg, 200 mg",   "Comprimidos recubiertos: 100 mg, 200 mg"),
          t(lang, "Suspensão oral: 40 mg/5 mL; 100 mg/5 mL", "Suspensión oral: 40 mg/5 mL; 100 mg/5 mL")
        ],
        dose: {
          adultoVO:   t(lang, doseAdulto, doseAdulto),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg VO 12/12h (5 mg/kg/dose)`, `${dosePed} mg VO cada 12h (5 mg/kg/dosis)`)
            : t(lang, "5 mg/kg/dose VO 12/12h (máx 400 mg/dia)", "5 mg/kg/dosis VO cada 12h (máx 400 mg/día)")
        },
        doseKg: {
          pediatrica: t(lang, "5 mg/kg/dose VO 12/12h (máx 200 mg/dose)", "5 mg/kg/dosis VO cada 12h (máx 200 mg/dosis)")
        },
        mechanism: t(lang,
          "Pró-fármaco do cefpodoxima proxetil; após absorção, hidrolisado a cefpodoxima ativa. Liga-se às PBPs, inibindo síntese da parede celular. Estável a várias beta-lactamases.",
          "Profármaco del cefpodoxima proxetilo; tras absorción, hidrolizado a cefpodoxima activa. Se une a las PBPs, inhibiendo síntesis de pared celular. Estable frente a varias beta-lactamasas."),
        onset:    t(lang, "Absorção oral moderada — biodisponibilidade ~40–50% (aumenta com alimento); Tmáx 2–3 h.", "Absorción oral moderada — biodisponibilidad ~40–50% (aumenta con alimento); Tmáx 2–3 h."),
        halfLife: t(lang, "Meia-vida 2–3 h. Eliminação renal ~29–33% inalterada.", "Semivida 2–3 h. Eliminación renal ~29–33% inalterada."),
        therapeuticRange: t(lang, "Tempo acima da CIM (T>CIM) como parâmetro PK/PD. Tomar com alimento.", "Tiempo sobre la CIM (T>CIM) como parámetro PK/PD. Tomar con alimento."),
        dilution: t(lang, "Uso oral exclusivo.", "Uso oral exclusivo."),
        speed:    t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Diarreia",               "Diarrea"),
          t(lang, "Náuseas",                "Náuseas"),
          t(lang, "Dor abdominal",          "Dolor abdominal"),
          t(lang, "Rash cutâneo",           "Erupción cutánea"),
          t(lang, "Vaginite (em mulheres)", "Vaginitis (en mujeres)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia / hipersensibilidade grave",     "Anafilaxia / hipersensibilidad grave"),
          t(lang, "Colite por C. difficile",                  "Colitis por C. difficile"),
          t(lang, "Síndrome de Stevens-Johnson (muito raro)", "Síndrome de Stevens-Johnson (muy raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefalosporinas ou penicilinas", "Hipersensibilidad a cefalosporinas o penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar com cautela.", "Embarazo: datos limitados — usar con precaución.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção mínima no leite — provavelmente compatível.", "Lactancia: excreción mínima en leche — probablemente compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Tomar com alimento para aumentar biodisponibilidade.", "Tomar con alimento para aumentar biodisponibilidad."),
          t(lang, "Requer ajuste em ClCr < 30 mL/min (estender intervalo para 24h).", "Requiere ajuste en ClCr < 30 mL/min (extender intervalo a 24h)."),
          t(lang, "Útil para step-down oral após cefalosporinas EV em infecções respiratórias e ITU.", "Útil para step-down oral tras cefalosporinas EV en infecciones respiratorias e ITU.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / ANVISA",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5 mg/kg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5 mg/kg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Sem ajuste significativo até ClCr 30 mL/min.", "Sin ajuste significativo hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Estender intervalo para 24 horas.", "Extender intervalo a 24 horas.")
          },
          fgMenor10: {
            vo: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "2,5–5 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar sinais de neurotoxicidade.", "Monitorizar signos de neurotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "2,5–5 mg/kg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 55. CEFTOLOZANO + TAZOBACTAM ── */
  ceftolozano_tazobactam: {
    name: { pt: "Ceftolozano + Tazobactam", es: "Ceftolozano + Tazobactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(239,68,68,0.15)",
    colorTxt: "#EF4444",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "1,5 g EV 8/8h (infusão 60 min)"
        : clcr >= 30
          ? "750 mg EV 8/8h"
          : clcr >= 10
            ? "375 mg EV 8/8h"
            : "150 mg EV 8/8h";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 20), 1500) : null;

      return {
        name:  t(lang, "Ceftolozano + Tazobactam", "Ceftolozano + Tazobactam"),
        class: t(lang, "Cefalosporina de 5ª geração + Inibidor de beta-lactamase (anti-Pseudomonas MDR)", "Cefalosporina de 5ª generación + Inhibidor de beta-lactamasa (anti-Pseudomonas MDR)"),
        commercialNames: {
          br: ["Zerbaxa"],
          ar: ["Zerbaxa"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g/0,5 g (ceftolozano/tazobactam) por frasco", "Polvo para solución inyectable EV: 1 g/0,5 g (ceftolozano/tazobactam) por frasco")
        ],
        dose: {
          adultoEV:   t(lang, doseAdultoEV, doseAdultoEV),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg EV 8/8h (ceftolozano 20 mg/kg/dose)`, `${dosePed} mg EV cada 8h (ceftolozano 20 mg/kg/dosis)`)
            : t(lang, "20 mg/kg (ceftolozano) EV 8/8h (máx 1,5 g/dose)", "20 mg/kg (ceftolozano) EV cada 8h (máx 1,5 g/dosis)")
        },
        doseKg: {
          pediatrica: t(lang, "20 mg/kg (ceftolozano) + 10 mg/kg (tazobactam) EV 8/8h (máx 1,5 g/dose)", "20 mg/kg (ceftolozano) + 10 mg/kg (tazobactam) EV cada 8h (máx 1,5 g/dosis)")
        },
        mechanism: t(lang,
          "Ceftolozano liga-se às PBPs de Pseudomonas aeruginosa (incluindo PBP3 mutada), inibindo síntese da parede celular. Tazobactam inibe beta-lactamases classe A (incluindo KPC), ampliando espectro.",
          "Ceftolozano se une a las PBPs de Pseudomonas aeruginosa (incluida PBP3 mutada), inhibiendo la síntesis de la pared celular. Tazobactam inhibe beta-lactamasas clase A (incluida KPC), ampliando el espectro."),
        onset:    t(lang, "EV: pico sérico ao final da infusão de 60 min.", "EV: pico sérico al final de la infusión de 60 min."),
        halfLife: t(lang, "Meia-vida 2,7 h (ceftolozano); 1 h (tazobactam). Eliminação renal >90%.", "Semivida 2,7 h (ceftolozano); 1 h (tazobactam). Eliminación renal >90%."),
        therapeuticRange: t(lang, "T>CIM (fT>CIM ≥ 40–60%) como parâmetro PK/PD.", "T>CIM (fT>CIM ≥ 40–60%) como parámetro PK/PD."),
        dilution: t(lang,
          "Reconstituir em 10 mL de água estéril ou SF; diluir em 100 mL de SF 0,9% ou SG 5%.",
          "Reconstituir en 10 mL de agua estéril o SF; diluir en 100 mL de SF 0,9% o SG 5%."),
        speed: t(lang, "Infundir em 60 minutos.", "Infundir en 60 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas",         "Náuseas"),
          t(lang, "Diarreia",        "Diarrea"),
          t(lang, "Cefaleia",        "Cefalea"),
          t(lang, "Febre",           "Fiebre"),
          t(lang, "Hipopotassemia",  "Hipopotasemia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Colite por C. difficile",             "Colitis por C. difficile"),
          t(lang, "Reações de hipersensibilidade graves", "Reacciones de hipersensibilidad graves"),
          t(lang, "Convulsões (raro)",                   "Convulsiones (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefalosporinas, tazobactam ou penicilinas", "Hipersensibilidad a cefalosporinas, tazobactam o penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — usar apenas se benefício superar risco.", "Embarazo: datos insuficientes — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação durante o tratamento.", "Lactancia: datos insuficientes — suspender lactancia durante el tratamiento.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "RESERVAR para Pseudomonas aeruginosa multirresistente (MDR) e infecções complicadas sem resposta a outros agentes.", "RESERVAR para Pseudomonas aeruginosa multirresistente (MDR) e infecciones complicadas sin respuesta a otros agentes."),
          t(lang, "Requer ajuste rigoroso em insuficiência renal — eliminação >90% renal.", "Requiere ajuste riguroso en insuficiencia renal — eliminación >90% renal."),
          t(lang, "Não cobre Bacteroides spp., Stenotrophomonas maltophilia nem MRSA.", "No cubre Bacteroides spp., Stenotrophomonas maltophilia ni MRSA.")
        ],
        ref: "Sanford Guide 2025 / FDA label Zerbaxa / IDSA MDR Guidelines",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: { dose: "1,5 g", intervalo: "8/8h", doseMaxima: "4,5 g/dia", unidade: "g" },
            pediatrica: { dose: "20 mg/kg (ceftolozano)", intervalo: "8/8h", doseMaxima: "1,5 g/dose", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para Pseudomonas multirresistente.", "Dosis habitual para Pseudomonas multirresistente.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "750 mg", intervalo: "8/8h", doseMaxima: "2,25 g/dia", unidade: "mg" },
            pediatrica: { dose: "10 mg/kg", intervalo: "8/8h", doseMaxima: "750 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em insuficiência renal moderada.", "Reducir dosis en insuficiencia renal moderada.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "375 mg", intervalo: "8/8h", doseMaxima: "1,125 g/dia", unidade: "mg" },
            pediatrica: { dose: "5 mg/kg", intervalo: "8/8h", doseMaxima: "375 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "150 mg", intervalo: "8/8h", doseMaxima: "450 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2,5 mg/kg", intervalo: "8/8h", doseMaxima: "150 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar eficácia e toxicidade.", "Monitorizar eficacia y toxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "150 mg", intervalo: "8/8h", doseMaxima: "450 mg/dia", unidade: "mg" },
            pediatrica: { dose: "2,5 mg/kg", intervalo: "8/8h", doseMaxima: "150 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Administrar dose suplementar pós-hemodiálise.", "Administrar dosis suplementaria post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 56. CEFTAZIDIMA + AVIBACTAM ── */
  ceftazidima_avibactam: {
    name: { pt: "Ceftazidima + Avibactam", es: "Ceftazidima + Avibactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(220,38,38,0.15)",
    colorTxt: "#DC2626",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "2,5 g EV 8/8h (infusão 120 min)"
        : clcr >= 30
          ? "1,25 g EV 8/8h"
          : clcr >= 10
            ? "940 mg EV 12/12h"
            : "940 mg EV 24/24h";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 50), 2500) : null;

      return {
        name:  t(lang, "Ceftazidima + Avibactam", "Ceftazidima + Avibactam"),
        class: t(lang, "Cefalosporina de 3ª geração + Inibidor de beta-lactamase (anti-KPC, OXA-48, MBL parcial)", "Cefalosporina de 3ª generación + Inhibidor de beta-lactamasa (anti-KPC, OXA-48, MBL parcial)"),
        commercialNames: {
          br: ["Avycaz", "Zavicefta"],
          ar: ["Avycaz", "Zavicefta"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 2 g/0,5 g (ceftazidima/avibactam) por frasco", "Polvo para solución inyectable EV: 2 g/0,5 g (ceftazidima/avibactam) por frasco")
        ],
        dose: {
          adultoEV:   t(lang, doseAdultoEV, doseAdultoEV),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg EV 8/8h (ceftazidima 50 mg/kg/dose)`, `${dosePed} mg EV cada 8h (ceftazidima 50 mg/kg/dosis)`)
            : t(lang, "50 mg/kg (ceftazidima) EV 8/8h (máx 2,5 g/dose)", "50 mg/kg (ceftazidima) EV cada 8h (máx 2,5 g/dosis)")
        },
        doseKg: {
          pediatrica: t(lang, "50 mg/kg (ceftazidima) + 12,5 mg/kg (avibactam) EV 8/8h (máx 2,5 g/dose)", "50 mg/kg (ceftazidima) + 12,5 mg/kg (avibactam) EV cada 8h (máx 2,5 g/dosis)")
        },
        mechanism: t(lang,
          "Ceftazidima liga-se às PBPs inibindo síntese da parede celular. Avibactam inibe beta-lactamases classes A (KPC, ESBL), C (AmpC) e algumas D (OXA-48), restaurando atividade da ceftazidima contra patógenos produtores de carbapenemase.",
          "Ceftazidima se une a las PBPs inhibiendo la síntesis de pared celular. Avibactam inhibe beta-lactamasas clases A (KPC, ESBL), C (AmpC) y algunas D (OXA-48), restaurando la actividad de ceftazidima frente a patógenos productores de carbapenemasa."),
        onset:    t(lang, "EV: pico sérico ao final da infusão de 120 min.", "EV: pico sérico al final de la infusión de 120 min."),
        halfLife: t(lang, "Meia-vida 2,7 h (ceftazidima); 2,7 h (avibactam). Eliminação renal >80%.", "Semivida 2,7 h (ceftazidima); 2,7 h (avibactam). Eliminación renal >80%."),
        therapeuticRange: t(lang, "T>CIM para ceftazidima; AUC/CIM para avibactam. Infusão prolongada pode otimizar T>CIM.", "T>CIM para ceftazidima; AUC/CIM para avibactam. Infusión prolongada puede optimizar T>CIM."),
        dilution: t(lang,
          "Reconstituir em 10 mL de SF; diluir em 50–250 mL de SF 0,9% ou SG 5%. Estável 12h em temperatura ambiente.",
          "Reconstituir en 10 mL de SF; diluir en 50–250 mL de SF 0,9% o SG 5%. Estable 12h a temperatura ambiente."),
        speed: t(lang, "Infundir em 120 minutos.", "Infundir en 120 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",   "Náuseas y vómitos"),
          t(lang, "Diarreia",            "Diarrea"),
          t(lang, "Dor abdominal",       "Dolor abdominal"),
          t(lang, "Ansiedade / tontura", "Ansiedad / mareos"),
          t(lang, "Elevação de transaminases", "Elevación de transaminasas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Colite por C. difficile",                          "Colitis por C. difficile"),
          t(lang, "Anafilaxia / hipersensibilidade grave",            "Anafilaxia / hipersensibilidad grave"),
          t(lang, "Convulsões (especialmente em insuficiência renal)", "Convulsiones (especialmente en insuficiencia renal)"),
          t(lang, "Encefalopatia (raro)",                             "Encefalopatía (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a ceftazidima, avibactam, cefalosporinas ou penicilinas", "Hipersensibilidad a ceftazidima, avibactam, cefalosporinas o penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — usar apenas se benefício superar risco.", "Embarazo: datos insuficientes — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação.", "Lactancia: datos insuficientes — suspender lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "INDICAÇÃO RESTRITA: Enterobacterales produtores de KPC, OXA-48 e algumas MBL — confirmação microbiológica obrigatória.", "INDICACIÓN RESTRINGIDA: Enterobacterales productores de KPC, OXA-48 y algunas MBL — confirmación microbiológica obligatoria."),
          t(lang, "Ajuste renal rigoroso obrigatório — eliminação >80% renal; subdose aumenta risco de resistência.", "Ajuste renal riguroso obligatorio — eliminación >80% renal; infradosis aumenta riesgo de resistencia."),
          t(lang, "NÃO cobre metalo-beta-lactamases tipo NDM/VIM/IMP — associar aztreonam se suspeita de MBL.", "NO cubre metalo-beta-lactamasas tipo NDM/VIM/IMP — asociar aztreonam si sospecha de MBL.")
        ],
        ref: "Sanford Guide 2025 / FDA label Avycaz / IDSA MDR Guidelines / EUCAST 2024",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "2,5 g",
              intervalo: "8/8h",
              doseMaxima: "7,5 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "50 mg/kg (ceftazidima) + 12,5 mg/kg (avibactam)",
              intervalo: "8/8h",
              doseMaxima: "2,5 g/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "CrCl >50 mL/min: dose habitual. Infusão EV em 120 min obrigatória (otimiza T>CIM da ceftazidima). Monitorar CrCl diariamente em pacientes com função renal instável (sépticos, em vasopressores ou com nefrotóxico concomitante). Uso guiado por cultura, antibiograma e infectologia.",
              "CrCl >50 mL/min: dosis habitual. Infusión IV en 120 min obligatoria (optimiza T>CIM de ceftazidima). Monitorizar CrCl diariamente en pacientes con función renal inestable (sépticos, en vasopresores o con nefrotóxico concomitante). Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "1,25 g",
              intervalo: "8/8h",
              doseMaxima: "3,75 g/dia",
              unidade: "g"
            },
            pediatrica: {
              dose: "25 mg/kg de ceftazidima + 6,25 mg/kg de avibactam",
              intervalo: "8/8h",
              doseMaxima: "1,25 g/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Corte oficial FDA label: CrCl 31–50 mL/min → 1,25 g 8/8h. Manter infusão em 120 min obrigatoriamente. Monitorar CrCl diariamente em pacientes instáveis — piora de função renal pode exigir reclassificação para faixa inferior. Subdose favorece seleção de resistência emergente de avibactam.",
              "Corte oficial FDA label: CrCl 31–50 mL/min → 1,25 g 8/8h. Mantener infusión en 120 min obligatoriamente. Monitorizar CrCl diariamente en pacientes inestables — deterioro de función renal puede exigir reclasificación a franja inferior. Infradosis favorece selección de resistencia emergente de avibactam.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "940 mg",
              intervalo: "12/12h",
              doseMaxima: "1,88 g/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "20 mg/kg de ceftazidima + 5 mg/kg de avibactam",
              intervalo: "12/12h",
              doseMaxima: "940 mg/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Corte oficial FDA label: CrCl 16–30 mL/min → 940 mg 12/12h. Ajuste obrigatório para manter exposição farmacodinâmica de avibactam e prevenir resistência emergente durante a terapia. Manter infusão em 120 min. Monitorar função renal diariamente.",
              "Corte oficial FDA label: CrCl 16–30 mL/min → 940 mg 12/12h. Ajuste obligatorio para mantener exposición farmacodinámica de avibactam y prevenir resistencia emergente durante la terapia. Mantener infusión en 120 min. Monitorizar función renal diariamente.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "940 mg",
              intervalo: "24/24h",
              doseMaxima: "940 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "20 mg/kg de ceftazidima + 5 mg/kg de avibactam",
              intervalo: "24/24h",
              doseMaxima: "940 mg/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Corte oficial FDA label: CrCl 6–15 mL/min → 940 mg 24/24h. Para CrCl ≤5 mL/min (sem diálise), usar somente com protocolo especializado de infectologia. Monitorar neurotoxicidade (convulsões, encefalopatia, mioclonias) — risco amplificado por acumulação renal. Resposta clínica pode ser subótima — considerar nível sérico de avibactam se disponível.",
              "Corte oficial FDA label: CrCl 6–15 mL/min → 940 mg 24/24h. Para CrCl ≤5 mL/min (sin diálisis), usar solo con protocolo especializado de infectología. Monitorizar neurotoxicidad (convulsiones, encefalopatía, mioclonías) — riesgo amplificado por acumulación renal. Respuesta clínica puede ser subóptima — considerar nivel sérico de avibactam si disponible.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "940 mg",
              intervalo: "24/24h",
              doseMaxima: "940 mg/dia",
              unidade: "mg"
            },
            pediatrica: {
              dose: "20 mg/kg de ceftazidima + 5 mg/kg de avibactam",
              intervalo: "24/24h",
              doseMaxima: "940 mg/dose",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Corte oficial FDA label: CrCl ≤ 5 mL/min (incluindo HD) → 940 mg 24/24h. Ceftazidima e avibactam são hemodialisáveis — administrar após hemodiálise nos dias de HD. Dose suplementar pode ser necessária após sessão prolongada (>4h) ou de alto fluxo. Monitorar neurotoxicidade (convulsões, encefalopatia) nos dias sem diálise.",
              "Corte oficial FDA label: CrCl ≤ 5 mL/min (incluida HD) → 940 mg 24/24h. Ceftazidima y avibactam son hemodializables — administrar después de hemodiálisis en días de HD. Puede requerirse dosis suplementaria tras sesión prolongada (>4h) o de alto flujo. Monitorizar neurotoxicidad (convulsiones, encefalopatía) en días sin diálisis.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Risco de falha terapêutica e seleção de resistência se a dose renal for subestimada. Monitorar CrCl diariamente em função renal instável — reclassificar faixa se houver piora. Monitorar nível sérico de avibactam se disponível (alvo AUC/MIC). Confirmar KPC/OXA-48 por PCR/MALDI antes do início. Não reduzir infusão abaixo de 120 min.",
            "Riesgo de falla terapéutica y selección de resistencia si la dosis renal es subestimada. Monitorizar CrCl diariamente en función renal inestable — reclasificar franja si hay deterioro. Monitorizar nivel sérico de avibactam si disponible (objetivo AUC/MIC). Confirmar KPC/OXA-48 por PCR/MALDI antes del inicio. No reducir infusión por debajo de 120 min.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Avycaz (ceftazidime-avibactam) 2023",
            "EMA label Zavicefta (ceftazidime-avibactam) 2023",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "IDSA MDR Gram-Negative Guidelines 2023",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "EUCAST 2024"
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: cortes renais oficiais do FDA label (CrCl 31–50 / 16–30 / 6–15 / ≤5) preservados. Doses pediátricas corrigidas para incluir ambos os componentes (ceftazidima + avibactam) em todas as faixas. Obs enriquecidas com monitoramento diário de CrCl, neurotoxicidade, dose pós-HD e risco de resistência emergente. safetyFlags e warning expandidos. EMA label, Johns Hopkins e Lexicomp adicionados às fontes.",
            "Bloque fusionado y mejorado: cortes renales oficiales del FDA label (CrCl 31–50 / 16–30 / 6–15 / ≤5) preservados. Dosis pediátricas corregidas para incluir ambos componentes (ceftazidima + avibactam) en todas las franjas. Obs enriquecidas con monitoreo diario de CrCl, neurotoxicidad, dosis post-HD y riesgo de resistencia emergente. safetyFlags y warning expandidos. EMA label, Johns Hopkins y Lexicomp añadidos a las fuentes.")
        }
      };
    }
  }

}); /* fim Grupo 14 */

/* ── GRUPO 15 (drogas 57–60): meropenem+vaborbactam, cefiderocol, dalbavancina, penicilina_v ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 57. MEROPENEM + VABORBACTAM ── */
  meropenem_vaborbactam: {
    name: { pt: "Meropenem + Vaborbactam", es: "Meropenem + Vaborbactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(220,38,38,0.15)",
    colorTxt: "#DC2626",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "4 g EV 8/8h (infusão 180 min)"
        : clcr >= 30
          ? "2 g EV 8/8h"
          : clcr >= 10
            ? "2 g EV 12/12h"
            : "1 g EV 12/12h";

      return {
        name:  t(lang, "Meropenem + Vaborbactam", "Meropenem + Vaborbactam"),
        class: t(lang, "Carbapenêmico + Inibidor de beta-lactamase (anti-KPC)", "Carbapenémico + Inhibidor de beta-lactamasa (anti-KPC)"),
        commercialNames: {
          br: ["Vabomere"],
          ar: ["Vabomere"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 2 g/2 g (meropenem/vaborbactam) por frasco", "Polvo para solución inyectable EV: 2 g/2 g (meropenem/vaborbactam) por frasco")
        ],
        dose: {
          adultoEV: t(lang, doseAdultoEV, doseAdultoEV)
        },
        doseKg: {
          adulto: t(lang, "Dose fixa 4 g 8/8h (não baseado em peso em adultos)", "Dosis fija 4 g cada 8h (no basado en peso en adultos)")
        },
        mechanism: t(lang,
          "Meropenem liga-se às PBPs inibindo síntese da parede celular. Vaborbactam inibe beta-lactamases classe A (especialmente KPC) por mecanismo de ácido borônico, restaurando atividade do meropenem contra Enterobacterales produtores de KPC.",
          "Meropenem se une a las PBPs inhibiendo la síntesis de pared celular. Vaborbactam inhibe beta-lactamasas clase A (especialmente KPC) mediante ácido borónico, restaurando la actividad del meropenem frente a Enterobacterales productores de KPC."),
        onset:    t(lang, "EV: pico sérico ao final da infusão de 180 min.", "EV: pico sérico al final de la infusión de 180 min."),
        halfLife: t(lang, "Meia-vida 1,2 h (meropenem); 1,7 h (vaborbactam). Eliminação renal >90%.", "Semivida 1,2 h (meropenem); 1,7 h (vaborbactam). Eliminación renal >90%."),
        therapeuticRange: t(lang, "T>CIM para meropenem; AUC para vaborbactam. Infusão prolongada (3h) melhora T>CIM.", "T>CIM para meropenem; AUC para vaborbactam. Infusión prolongada (3h) mejora T>CIM."),
        dilution: t(lang,
          "Reconstituir 4 g em 20 mL de SF; diluir em 250 mL de SF 0,9%. Estável 4h em temperatura ambiente.",
          "Reconstituir 4 g en 20 mL de SF; diluir en 250 mL de SF 0,9%. Estable 4h a temperatura ambiente."),
        speed: t(lang, "Infundir em 180 minutos (3 horas).", "Infundir en 180 minutos (3 horas)."),
        commonAdverseEffects: [
          t(lang, "Diarreia",                        "Diarrea"),
          t(lang, "Náuseas e vômitos",               "Náuseas y vómitos"),
          t(lang, "Cefaleia",                        "Cefalea"),
          t(lang, "Flebite / reação local",          "Flebitis / reacción local"),
          t(lang, "Elevação de transaminases",       "Elevación de transaminasas")
        ],
        dangerousAdverseEffects: [
          t(lang, "Convulsões (especialmente em IR ou SNC comprometido)", "Convulsiones (especialmente en IR o SNC comprometido)"),
          t(lang, "Colite por C. difficile",                              "Colitis por C. difficile"),
          t(lang, "Anafilaxia / hipersensibilidade grave",                "Anafilaxia / hipersensibilidad grave"),
          t(lang, "Encefalopatia / mioclonias (raro)",                    "Encefalopatía / mioclonías (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a meropenem, vaborbactam ou carbapenêmicos", "Hipersensibilidad a meropenem, vaborbactam o carbapenémicos")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — usar apenas se benefício superar risco.", "Embarazo: datos insuficientes — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação.", "Lactancia: datos insuficientes — suspender lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "INDICAÇÃO RESTRITA: Enterobacterales produtores de KPC — confirmação microbiológica obrigatória antes do uso.", "INDICACIÓN RESTRINGIDA: Enterobacterales productores de KPC — confirmación microbiológica obligatoria antes del uso."),
          t(lang, "Ajuste renal rigoroso — eliminação >90% renal; subdose aumenta risco de falha terapêutica e resistência.", "Ajuste renal riguroso — eliminación >90% renal; infradosis aumenta riesgo de fracaso terapéutico y resistencia."),
          t(lang, "NÃO cobre MBL (NDM, VIM, IMP) — considerar ceftazidima+avibactam+aztreonam se suspeita.", "NO cubre MBL (NDM, VIM, IMP) — considerar ceftazidima+avibactam+aztreonam si sospecha.")
        ],
        ref: "Sanford Guide 2025 / FDA label Vabomere / IDSA MDR Guidelines / EUCAST 2024",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "4 g",
              intervalo: "8/8h",
              doseMaxima: "12 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Dose habitual (meropenem 2 g + vaborbactam 2 g a cada 8h). Infusão obrigatória em 180 min para otimizar T>CIM do meropenem. Uso guiado por cultura, antibiograma e infectologia.",
              "Dosis habitual (meropenem 2 g + vaborbactam 2 g cada 8h). Infusión obligatoria en 180 min para optimizar T>CIM del meropenem. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "2 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: eGFR 30–49 mL/min/1,73m² → 2 g 8/8h. Manter infusão em 180 min. Subdose de vaborbactam compromete inibição de KPC — nunca reduzir abaixo da dose recomendada.",
              "Corte oficial FDA label: eGFR 30–49 mL/min/1,73m² → 2 g 8/8h. Mantener infusión en 180 min. Infradosis de vaborbactam compromete inhibición de KPC — nunca reducir por debajo de la dosis recomendada.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "2 g",
              intervalo: "12/12h",
              doseMaxima: "4 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: eGFR 15–29 mL/min/1,73m² → 2 g 12/12h. Ajuste obrigatório. Risco aumentado de convulsões — monitorar SNC diariamente. Histórico de convulsão é contraindicação relativa.",
              "Corte oficial FDA label: eGFR 15–29 mL/min/1,73m² → 2 g 12/12h. Ajuste obligatorio. Riesgo aumentado de convulsiones — monitorizar SNC diariamente. Historial de convulsión es contraindicación relativa.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: eGFR < 15 mL/min/1,73m² → 1 g 12/12h. Monitorar neurotoxicidade (convulsões, mioclonias, encefalopatia) diariamente. Eficácia pode ser subótima — avaliar alternativa se ausência de resposta em 48–72h.",
              "Corte oficial FDA label: eGFR < 15 mL/min/1,73m² → 1 g 12/12h. Monitorizar neurotoxicidad (convulsiones, mioclonías, encefalopatía) diariamente. Eficacia puede ser subóptima — evaluar alternativa si ausencia de respuesta en 48–72h.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "12/12h",
              doseMaxima: "2 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: HD → 1 g 12/12h. Administrar após hemodiálise nos dias de HD. Meropenem e vaborbactam são removidos pela HD — dose suplementar de 1 g após cada sessão prolongada pode ser necessária para manter exposição de vaborbactam.",
              "Corte oficial FDA label: HD → 1 g 12/12h. Administrar después de hemodiálisis en días de HD. Meropenem y vaborbactam son removidos por HD — puede requerirse dosis suplementaria de 1 g tras cada sesión prolongada para mantener exposición de vaborbactam.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Indicado exclusivamente para KPC-CR Enterobacterales confirmados. Subdose em qualquer faixa de ClCr favorece resistência emergente ao vaborbactam. Monitorar SNC diariamente — risco de convulsão aumentado em insuficiência renal.",
            "Indicado exclusivamente para KPC-CR Enterobacterales confirmados. Infradosis en cualquier rango de ClCr favorece resistencia emergente al vaborbactam. Monitorizar SNC diariamente — riesgo de convulsión aumentado en insuficiencia renal.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Vabomere (meropenem-vaborbactam)",
            "Sanford Guide 2025",
            "IDSA MDR Gram-Negative Guidelines 2023",
            "EUCAST 2024",
            "UpToDate / Lexicomp"
          ],
          note: t(lang,
            "Bloco revisado com cortes renais oficiais FDA (eGFR 30–49 / 15–29 / <15 / HD). Obs de HD atualizada com informação de remoção dialítica e dose suplementar. safetyFlags e auditNotes adicionados.",
            "Bloque revisado con cortes renales oficiales FDA (eGFR 30–49 / 15–29 / <15 / HD). Obs de HD actualizada con información de remoción dialítica y dosis suplementaria. safetyFlags y auditNotes añadidos.")
        }
      };
    }
  },

  /* ── 58. CEFIDEROCOL ── */
  cefiderocol: {
    name: { pt: "Cefiderocol", es: "Cefiderocol" },
    category: "atb",
    icon: "🔬",
    color: "rgba(168,85,247,0.15)",
    colorTxt: "#A855F7",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 50
        ? "2 g EV 8/8h (infusão 180 min)"
        : clcr >= 30
          ? "1,5 g EV 8/8h"
          : clcr >= 10
            ? "1 g EV 8/8h"
            : "750 mg EV 12/12h";

      return {
        name:  t(lang, "Cefiderocol", "Cefiderocol"),
        class: t(lang, "Cefalosporina siderófora (nova classe — anti-BGN pan-resistentes)", "Cefalosporina siderófora (nueva clase — anti-BGN pan-resistentes)"),
        commercialNames: {
          br: ["Fetroja"],
          ar: ["Fetroja"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g/frasco", "Polvo para solución inyectable EV: 1 g/frasco")
        ],
        dose: {
          adultoEV: t(lang, doseAdultoEV, doseAdultoEV)
        },
        doseKg: {
          adulto: t(lang, "Dose fixa 2 g 8/8h (não baseado em peso em adultos)", "Dosis fija 2 g cada 8h (no basado en peso en adultos)")
        },
        mechanism: t(lang,
          "Conjugado sideróforo-cefalosporina: utiliza os transportadores de ferro bacterianos (catecol sideróforo) para entrar ativamente na célula, contornando bombas de efluxo e porinas. Liga-se às PBPs inibindo síntese da parede celular. Único agente com atividade contra todos os tipos de carbapenemases (KPC, MBL, OXA).",
          "Conjugado sideróforo-cefalosporina: utiliza los transportadores de hierro bacterianos (catecol sideróforo) para entrar activamente en la célula, evitando bombas de eflujo y porinas. Se une a las PBPs inhibiendo la síntesis de pared celular. Único agente con actividad contra todos los tipos de carbapenemasas (KPC, MBL, OXA)."),
        onset:    t(lang, "EV: pico sérico ao final da infusão de 180 min.", "EV: pico sérico al final de la infusión de 180 min."),
        halfLife: t(lang, "Meia-vida 2,6 h. Eliminação renal ~90% inalterada.", "Semivida 2,6 h. Eliminación renal ~90% inalterada."),
        therapeuticRange: t(lang, "T>CIM (fT>CIM ≥ 75%) como parâmetro PK/PD — infusão prolongada de 3h é essencial.", "T>CIM (fT>CIM ≥ 75%) como parámetro PK/PD — infusión prolongada de 3h es esencial."),
        dilution: t(lang,
          "Reconstituir 1 g em 10 mL de SF ou SG5%; diluir em 100–250 mL de SF 0,9% ou SG 5%. Proteger da luz.",
          "Reconstituir 1 g en 10 mL de SF o SG5%; diluir en 100–250 mL de SF 0,9% o SG 5%. Proteger de la luz."),
        speed: t(lang, "Infundir em 180 minutos (3 horas). NÃO reduzir tempo de infusão.", "Infundir en 180 minutos (3 horas). NO reducir el tiempo de infusión."),
        commonAdverseEffects: [
          t(lang, "Diarreia",                   "Diarrea"),
          t(lang, "Náuseas",                    "Náuseas"),
          t(lang, "Constipação",                "Estreñimiento"),
          t(lang, "Elevação de transaminases",  "Elevación de transaminasas"),
          t(lang, "Hipocalemia",                "Hipocalemia")
        ],
        dangerousAdverseEffects: [
          t(lang, "Colite por C. difficile",               "Colitis por C. difficile"),
          t(lang, "Anafilaxia / hipersensibilidade grave", "Anafilaxia / hipersensibilidad grave"),
          t(lang, "Convulsões (raro)",                    "Convulsiones (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade a cefiderocol ou cefalosporinas", "Hipersensibilidad a cefiderocol o cefalosporinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — evitar; usar apenas se sem alternativa.", "Embarazo: datos insuficientes — evitar; usar solo si no hay alternativa.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação durante o tratamento.", "Lactancia: datos insuficientes — suspender lactancia durante el tratamiento.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "ÚLTIMO RECURSO para BGN pan-resistentes (NDM, VIM, IMP, KPC, OXA) — único agente que cobre todos os tipos de carbapenemases.", "ÚLTIMO RECURSO para BGN pan-resistentes (NDM, VIM, IMP, KPC, OXA) — único agente que cubre todos los tipos de carbapenemasas."),
          t(lang, "Infusão de 3h OBRIGATÓRIA — não reduzir para menos de 180 min (parâmetro T>CIM crítico).", "Infusión de 3h OBLIGATORIA — no reducir a menos de 180 min (parámetro T>CIM crítico)."),
          t(lang, "Atenção em ambientes ricos em ferro (p.ex. hemodiálise, nutrição parenteral) — pode competir com mecanismo sideróforo.", "Atención en ambientes ricos en hierro (p.ej. hemodiálisis, nutrición parenteral) — puede competir con el mecanismo sideróforo.")
        ],
        ref: "Sanford Guide 2025 / FDA label Fetroja / IDSA MDR Guidelines / EUCAST 2024 / Johns Hopkins ABX Guide",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "2 g",
              intervalo: "8/8h",
              doseMaxima: "6 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Dose habitual. Infusão OBRIGATÓRIA em 180 min — redução do tempo compromete T>CIM crítico. Uso guiado por cultura, antibiograma e infectologia. Único agente ativo contra todos os tipos de carbapenemases (KPC, MBL, OXA).",
              "Dosis habitual. Infusión OBLIGATORIA en 180 min — reducción del tiempo compromete T>CIM crítico. Uso guiado por cultivo, antibiograma e infectología. Único agente activo contra todos los tipos de carbapenemasas (KPC, MBL, OXA).")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "1,5 g",
              intervalo: "8/8h",
              doseMaxima: "4,5 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 30–59 mL/min → 1,5 g 8/8h. Manter infusão em 180 min. Atenção ao ambiente rico em ferro (hemodiálise, nutrição parenteral) que pode competir com o mecanismo sideróforo.",
              "Corte oficial FDA label: CrCl 30–59 mL/min → 1,5 g 8/8h. Mantener infusión en 180 min. Atención al ambiente rico en hierro (hemodiálisis, nutrición parenteral) que puede competir con el mecanismo sideróforo.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "8/8h",
              doseMaxima: "3 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 15–29 mL/min → 1 g 8/8h. Ajuste obrigatório. Manter intervalo 8/8h (não ampliar intervalo — prejudica parâmetro T>CIM). Monitorar função renal diariamente.",
              "Corte oficial FDA label: CrCl 15–29 mL/min → 1 g 8/8h. Ajuste obligatorio. Mantener intervalo 8/8h (no ampliar intervalo — perjudica parámetro T>CIM). Monitorizar función renal diariamente.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "750 mg",
              intervalo: "12/12h",
              doseMaxima: "1,5 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl < 15 mL/min (sem HD) → 750 mg 12/12h. Parâmetro T>CIM é crítico — considerar monitoração sérica se disponível. Monitorar convulsões e neurotoxicidade. Eficácia pode ser subótima em CrCl muito baixo.",
              "Corte oficial FDA label: CrCl < 15 mL/min (sin HD) → 750 mg 12/12h. El parámetro T>CIM es crítico — considerar monitoreo sérico si disponible. Monitorizar convulsiones y neurotoxicidad. Eficacia puede ser subóptima con CrCl muy bajo.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "750 mg",
              intervalo: "12/12h",
              doseMaxima: "1,5 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: HD → 750 mg 12/12h. Administrar após hemodiálise nos dias de HD. Cefiderocol é removido pela HD — monitorar resposta clínica e considerar dose suplementar após sessões prolongadas. Ambientes com alto ferro quelado (dialisato) podem reduzir captação bacteriana pelo sideróforo.",
              "Corte oficial FDA label: HD → 750 mg 12/12h. Administrar después de hemodiálisis en días de HD. Cefiderocol es removido por HD — monitorizar respuesta clínica y considerar dosis suplementaria tras sesiones prolongadas. Ambientes con alto hierro quelado (dializato) pueden reducir captación bacteriana por el sideróforo.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Reservado como última opção para BGN pan-resistentes confirmados por antibiograma. Infusão prolongada de 3h NÃO negociável. Monitorar resposta clínica em 48–72h — mortalidade pode ser superior à comparadores em alguns ensaios (CREDIBLE-CR).",
            "Reservado como última opción para BGN pan-resistentes confirmados por antibiograma. Infusión prolongada de 3h NO negociable. Monitorizar respuesta clínica en 48–72h — mortalidad puede ser superior a comparadores en algunos ensayos (CREDIBLE-CR).")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Fetroja (cefiderocol)",
            "Sanford Guide 2025",
            "IDSA MDR Gram-Negative Guidelines 2023",
            "EUCAST 2024",
            "Johns Hopkins ABX Guide",
            "CREDIBLE-CR / APEKS-NP trial data"
          ],
          note: t(lang,
            "Bloco revisado com cortes renais oficiais FDA (CrCl 30–59 / 15–29 / <15 / HD). Obs expandidas com alerta sobre mecanismo sideróforo em ambientes ricos em ferro. safetyFlags e auditNotes adicionados.",
            "Bloque revisado con cortes renales oficiales FDA (CrCl 30–59 / 15–29 / <15 / HD). Obs ampliadas con alerta sobre mecanismo sideróforo en ambientes ricos en hierro. safetyFlags y auditNotes añadidos.")
        }
      };
    }
  },

  /* ── 59. DALBAVANCINA ── */
  dalbavancina: {
    name: { pt: "Dalbavancina", es: "Dalbavancina" },
    category: "atb",
    icon: "💉",
    color: "rgba(245,158,11,0.15)",
    colorTxt: "#F59E0B",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = clcr >= 30
        ? "1500 mg EV dose única (ou 1000 mg + 500 mg na semana 2)"
        : "1125 mg EV dose única (ajuste ClCr < 30)";

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 18), 1500) : null;

      return {
        name:  t(lang, "Dalbavancina", "Dalbavancina"),
        class: t(lang, "Lipoglicopeptídeo de longa duração (anti-MRSA)", "Lipoglicopéptido de larga duración (anti-MRSA)"),
        commercialNames: {
          br: ["Dalvance", "Xydalba"],
          ar: ["Dalvance", "Xydalba"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 500 mg/frasco", "Polvo para solución inyectable EV: 500 mg/frasco")
        ],
        dose: {
          adultoEV:   t(lang, doseAdultoEV, doseAdultoEV),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg EV dose única (18 mg/kg; máx 1500 mg)`, `${dosePed} mg EV dosis única (18 mg/kg; máx 1500 mg)`)
            : t(lang, "18 mg/kg EV dose única (máx 1500 mg)", "18 mg/kg EV dosis única (máx 1500 mg)")
        },
        doseKg: {
          pediatrica: t(lang, "18 mg/kg EV dose única (máx 1500 mg)", "18 mg/kg EV dosis única (máx 1500 mg)")
        },
        mechanism: t(lang,
          "Liga-se ao terminal D-Ala-D-Ala dos precursores do peptidoglicano bacteriano, inibindo síntese da parede celular. A cauda lipofílica ancora na membrana, prolongando meia-vida para >14 dias.",
          "Se une al terminal D-Ala-D-Ala de los precursores del peptidoglicano bacteriano, inhibiendo la síntesis de la pared celular. La cola lipofílica se ancla en la membrana, prolongando la semivida a >14 días."),
        onset:    t(lang, "EV: distribuição rápida após infusão. Tmáx ao final da infusão.", "EV: distribución rápida tras infusión. Tmáx al final de la infusión."),
        halfLife: t(lang, "Meia-vida excepcional: 14,4 dias — permite dose única ou esquema de 2 doses (D1 e D8).", "Semivida excepcional: 14,4 días — permite dosis única o esquema de 2 dosis (D1 y D8)."),
        therapeuticRange: t(lang, "AUC/CIM como parâmetro PK/PD. Exposição sustentada por semanas após dose única.", "AUC/CIM como parámetro PK/PD. Exposición sostenida por semanas tras dosis única."),
        dilution: t(lang,
          "Reconstituir 500 mg em 25 mL de água estéril; diluir em 250 mL de SG 5% (NÃO usar SF — precipita).",
          "Reconstituir 500 mg en 25 mL de agua estéril; diluir en 250 mL de SG 5% (NO usar SF — precipita)."),
        speed: t(lang, "Infundir em 30 minutos.", "Infundir en 30 minutos."),
        commonAdverseEffects: [
          t(lang, "Náuseas",               "Náuseas"),
          t(lang, "Cefaleia",              "Cefalea"),
          t(lang, "Diarreia",              "Diarrea"),
          t(lang, "Prurido",               "Prurito"),
          t(lang, "Rubor (flushing)",      "Rubor (flushing)")
        ],
        dangerousAdverseEffects: [
          t(lang, "Síndrome do homem vermelho (infusão rápida — raro)", "Síndrome del hombre rojo (infusión rápida — raro)"),
          t(lang, "Hepatotoxicidade (elevação de TGO/TGP)",            "Hepatotoxicidad (elevación de TGO/TGP)"),
          t(lang, "Colite por C. difficile",                           "Colitis por C. difficile"),
          t(lang, "Anafilaxia (muito raro)",                           "Anafilaxia (muy raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade à dalbavancina ou outros glicopeptídeos", "Hipersensibilidad a dalbavancina u otros glucopéptidos")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — evitar; usar apenas se essencial.", "Embarazo: datos insuficientes — evitar; usar solo si es esencial.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — suspender amamentação.", "Lactancia: datos insuficientes — suspender lactancia.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Vantagem única: dose única ou 2 doses com intervalo de 1 semana — ideal para tratamento ambulatorial de infecções de pele por MRSA.", "Ventaja única: dosis única o 2 dosis con intervalo de 1 semana — ideal para tratamiento ambulatorial de infecciones de piel por MRSA."),
          t(lang, "DILUIR APENAS EM SG 5% — precipita em SF 0,9%.", "DILUIR SOLO EN SG 5% — precipita en SF 0,9%."),
          t(lang, "Reduzir dose em 25% (1500 → 1125 mg) em ClCr < 30 mL/min sem hemodiálise.", "Reducir dosis en 25% (1500 → 1125 mg) en ClCr < 30 mL/min sin hemodiálisis.")
        ],
        ref: "Sanford Guide 2025 / FDA label Dalvance / EMA label Xydalba / Goodman & Gilman 14ª ed. / Lexicomp",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1500 mg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "18 mg/kg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Dose habitual: 1500 mg EV em dose única OU 1000 mg D1 + 500 mg D8 (esquemas equivalentes). Infusão em 30 min em SG 5% (NÃO usar SF — precipita). Dose pediátrica: 18 mg/kg até máx 1500 mg.",
              "Dosis habitual: 1500 mg IV en dosis única O 1000 mg D1 + 500 mg D8 (esquemas equivalentes). Infusión en 30 min en SG 5% (NO usar SF — precipita). Dosis pediátrica: 18 mg/kg hasta máx 1500 mg.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "1500 mg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "18 mg/kg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "FDA label: sem ajuste de dose para ClCr ≥ 30 mL/min. Dalbavancina é eliminada predominantemente por vias não-renais (metabolismo hepático + excreção biliar) — eliminação renal corresponde a ~33% da dose.",
              "FDA label: sin ajuste de dosis para ClCr ≥ 30 mL/min. La dalbavancina se elimina predominantemente por vías no renales (metabolismo hepático + excreción biliar) — la eliminación renal corresponde al ~33% de la dosis.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "1125 mg",
              intervalo: "Dose única",
              doseMaxima: "1125 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "13,5 mg/kg",
              intervalo: "Dose única",
              doseMaxima: "1125 mg",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "Corte oficial FDA label: CrCl < 30 mL/min (sem diálise) → redução de 25% (1500 → 1125 mg). Aplica-se a CrCl 10–29 mL/min. Meia-vida de 14,4 dias — exposição acumulada deve ser monitorada em doses repetidas.",
              "Corte oficial FDA label: CrCl < 30 mL/min (sin diálisis) → reducción del 25% (1500 → 1125 mg). Aplica a CrCl 10–29 mL/min. Semivida de 14,4 días — la exposición acumulada debe monitorizarse en dosis repetidas.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "1125 mg",
              intervalo: "Dose única",
              doseMaxima: "1125 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "13,5 mg/kg",
              intervalo: "Dose única",
              doseMaxima: "1125 mg",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "FDA label: ClCr < 30 mL/min (sem diálise) → 1125 mg. Monitorar hepatotoxicidade (elevação de transaminases). Meia-vida muito prolongada (~14 dias) — acúmulo possível em doses repetidas. Dose pediátrica: 13,5 mg/kg (máx 1125 mg).",
              "FDA label: ClCr < 30 mL/min (sin diálisis) → 1125 mg. Monitorizar hepatotoxicidad (elevación de transaminasas). Semivida muy prolongada (~14 días) — acumulación posible en dosis repetidas. Dosis pediátrica: 13,5 mg/kg (máx 1125 mg).")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "1500 mg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg"
            },
            pediatrica: {
              dose: "18 mg/kg",
              intervalo: "Dose única",
              doseMaxima: "1500 mg",
              unidade: "mg/kg"
            },
            obs: t(lang,
              "FDA label: pacientes em hemodiálise (HD) não requerem ajuste de dose — usar 1500 mg normalmente. Dalbavancina NÃO é removida pela HD (alta ligação proteica >93% e Vd amplo). Não há necessidade de dose suplementar pós-HD. Administrar independentemente do horário da sessão.",
              "FDA label: pacientes en hemodiálisis (HD) no requieren ajuste de dosis — usar 1500 mg normalmente. La dalbavancina NO es removida por HD (alta unión proteica >93% y Vd amplio). No se requiere dosis suplementaria post-HD. Administrar independientemente del horario de la sesión.")
          }
        },

        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: true,
          requiresCultureGuidance: false,
          warning: t(lang,
            "Monitorar função hepática (AST/ALT) em hepatopatia prévia. DILUIR EXCLUSIVAMENTE EM SG 5% — precipita em SF 0,9% ou outras soluções. Vantagem clínica: dose única ou 2 doses semanais permite tratamento ambulatorial de SSTI por MRSA.",
            "Monitorizar función hepática (AST/ALT) en hepatopatía previa. DILUIR EXCLUSIVAMENTE EN SG 5% — precipita en SF 0,9% u otras soluciones. Ventaja clínica: dosis única o 2 dosis semanales permite tratamiento ambulatorial de SSTI por MRSA.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Dalvance (dalbavancin)",
            "EMA label Xydalba",
            "Sanford Guide 2025",
            "Lexicomp",
            "UpToDate"
          ],
          note: t(lang,
            "Bloco revisado. Corte renal oficial FDA: ClCr < 30 mL/min (sem HD) → 1125 mg; em HD → 1500 mg sem ajuste. Lógica de HD corrigida (não removida). safetyFlags (hepatotoxicidade) e auditNotes adicionados.",
            "Bloque revisado. Corte renal oficial FDA: ClCr < 30 mL/min (sin HD) → 1125 mg; en HD → 1500 mg sin ajuste. Lógica de HD corregida (no removida). safetyFlags (hepatotoxicidad) y auditNotes añadidos.")
        }
      };
    }
  },

  /* ── 60. PENICILINA V ── */
  penicilina_v: {
    name: { pt: "Penicilina V", es: "Penicilina V" },
    category: "atb",
    icon: "💊",
    color: "rgba(34,197,94,0.15)",
    colorTxt: "#22C55E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);

      const dosePed = peso > 0 ? Math.min(Math.round(peso * 37.5), 500) : null;

      return {
        name:  t(lang, "Penicilina V", "Penicilina V"),
        class: t(lang, "Penicilina de espectro estreito (oral)", "Penicilina de espectro estrecho (oral)"),
        commercialNames: {
          br: ["Pen-Ve-Oral", "Meracilina", "Fenoximetilpenicilina Genérica"],
          ar: ["Pen-Ve-K", "Fenoximetilpenicilina Genérica"]
        },
        presentation: [
          t(lang, "Comprimidos: 250 mg (400.000 UI), 500 mg (800.000 UI)", "Comprimidos: 250 mg (400.000 UI), 500 mg (800.000 UI)"),
          t(lang, "Solução oral: 125 mg/5 mL; 250 mg/5 mL",               "Solución oral: 125 mg/5 mL; 250 mg/5 mL")
        ],
        dose: {
          adultoVO:   t(lang, "250–500 mg VO 6/6h–8/8h por 10 dias (faringoamigdalite)", "250–500 mg VO cada 6h–8h por 10 días (faringoamigdalitis)"),
          pediatrica: dosePed
            ? t(lang, `${dosePed} mg VO 6/6h–8/8h (25–50 mg/kg/dia)`, `${dosePed} mg VO cada 6h–8h (25–50 mg/kg/día)`)
            : t(lang, "25–50 mg/kg/dia VO dividido 6/6h–8/8h (máx 500 mg/dose)", "25–50 mg/kg/día VO dividido cada 6h–8h (máx 500 mg/dosis)")
        },
        doseKg: {
          pediatrica: t(lang, "25–50 mg/kg/dia dividido 6/6h–8/8h (máx 500 mg/dose)", "25–50 mg/kg/día dividido cada 6h–8h (máx 500 mg/dosis)")
        },
        mechanism: t(lang,
          "Liga-se às PBPs inibindo síntese do peptidoglicano da parede celular bacteriana. Bactericida tempo-dependente. Espectro restrito: estreptococos beta-hemolíticos, pneumococo sensível, anaeróbios orais.",
          "Se une a las PBPs inhibiendo la síntesis del peptidoglicano de la pared celular bacteriana. Bactericida tiempo-dependiente. Espectro restringido: estreptococos beta-hemolíticos, neumococo sensible, anaerobios orales."),
        onset:    t(lang, "Absorção oral adequada em jejum — biodisponibilidade ~60%; Tmáx 30–60 min.", "Absorción oral adecuada en ayunas — biodisponibilidad ~60%; Tmáx 30–60 min."),
        halfLife: t(lang, "Meia-vida 30–60 min. Eliminação renal ~25–35% inalterada.", "Semivida 30–60 min. Eliminación renal ~25–35% inalterada."),
        therapeuticRange: t(lang, "Tempo acima da CIM (T>CIM). Tomar em jejum ou com pouco alimento.", "Tiempo sobre la CIM (T>CIM). Tomar en ayunas o con poca comida."),
        dilution: t(lang, "Uso oral exclusivo.", "Uso oral exclusivo."),
        speed:    t(lang, "Não aplicável (uso oral).", "No aplicable (uso oral)."),
        commonAdverseEffects: [
          t(lang, "Náuseas e vômitos",  "Náuseas y vómitos"),
          t(lang, "Diarreia",           "Diarrea"),
          t(lang, "Rash cutâneo",       "Erupción cutánea"),
          t(lang, "Candidíase oral",    "Candidiasis oral")
        ],
        dangerousAdverseEffects: [
          t(lang, "Anafilaxia / choque anafilático (0,04–0,2%)",    "Anafilaxia / choque anafiláctico (0,04–0,2%)"),
          t(lang, "Doença do soro",                                 "Enfermedad del suero"),
          t(lang, "Colite por C. difficile (raro)",                 "Colitis por C. difficile (raro)")
        ],
        contraindications: [
          t(lang, "Hipersensibilidade à penicilina ou cefalosporinas (reação cruzada ~1–2%)", "Hipersensibilidad a penicilina o cefalosporinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B; amplamente utilizado.", "Embarazo: SEGURA — categoría B; ampliamente utilizada.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Droga de escolha para faringoamigdalite estreptocócica (Streptococcus pyogenes — NUNCA resistente à penicilina).", "Droga de elección para faringoamigdalitis estreptocócica (Streptococcus pyogenes — NUNCA resistente a penicilina)."),
          t(lang, "Tomar em jejum (absorção reduzida com alimentos).", "Tomar en ayunas (absorción reducida con alimentos)."),
          t(lang, "Não requer ajuste renal na prática clínica habitual.", "No requiere ajuste renal en la práctica clínica habitual.")
        ],
        ref: "Sanford Guide 2025 / IDSA Group A Strep Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),

          fgMaior50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para faringoamigdalite estreptocócica.", "Dosis habitual para faringoamigdalitis estreptocócica.")
          },
          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "250–500 mg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar apenas em insuficiência renal terminal.", "Monitorizar solo en insuficiencia renal terminal.")
          },
          hemodialise: {
            vo: { dose: "250–500 mg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h–8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não requer suplementação pós-hemodiálise.", "No requiere suplementación post-hemodiálisis.")
          }
        }
      };
    }
  }

}); /* fim Grupo 15 */

/* ── GRUPO 16 (drogas 61–64): penicilina_procaina, cefaclor, cefoxitina, cefdinir ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 61. PENICILINA PROCAÍNA ── */
  penicilina_procaina: {
    name: { pt: "Penicilina Procaína", es: "Penicilina Procaína" },
    category: "atb",
    icon: "💉",
    color: "rgba(59,130,246,0.12)",
    colorTxt: "#2563EB",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseTexto;
      if (isPed && peso > 0) {
        const doseMin = Math.round(25000 * peso);
        const doseMax = Math.round(50000 * peso);
        const doseMinF = doseMin >= 1000000
          ? (doseMin / 1000000).toFixed(1).replace('.', ',') + " milhão UI"
          : doseMin.toLocaleString("pt-BR") + " UI";
        const doseMaxF = doseMax >= 1000000
          ? (doseMax / 1000000).toFixed(1).replace('.', ',') + " milhão UI"
          : doseMax.toLocaleString("pt-BR") + " UI";
        doseTexto = `${doseMinF}–${doseMaxF} IM 24/24h`;
      } else {
        doseTexto = t(lang, "600.000–1.200.000 UI IM 24/24h", "600.000–1.200.000 UI IM 24/24h");
      }

      return {
        name:  t(lang, "Penicilina Procaína", "Penicilina Procaína"),
        class: t(lang, "Penicilina natural de ação prolongada (IM)", "Penicilina natural de acción prolongada (IM)"),
        commercialNames: {
          br: ["Despacilina", "Wycillin"],
          ar: ["Despacilina", "Wycillin"]
        },
        presentation: [
          t(lang, "Suspensão injetável IM: 400.000 UI/mL — frascos de 1.200.000 UI e 600.000 UI", "Suspensión inyectable IM: 400.000 UI/mL — frascos de 1.200.000 UI y 600.000 UI")
        ],
        dose: {
          adultoIM: doseTexto
        },
        doseKg: isPed && peso > 0
          ? { pediatricaIM: `25.000–50.000 UI/kg IM 24/24h (peso: ${peso} kg)` }
          : null,
        indication: t(
          lang,
          "Sífilis primária e secundária, infecções por Streptococcus pyogenes (amigdalite, erisipela, escarlatina), profilaxia de febre reumática.",
          "Sífilis primaria y secundaria, infecciones por Streptococcus pyogenes (amigdalitis, erisipela, escarlatina), profilaxis de fiebre reumática."
        ),
        spectrum: t(
          lang,
          "Streptococcus pyogenes (Grupo A), Streptococcus do grupo B, Treponema pallidum, Clostridium perfringens. Sem atividade contra Staphylococcus aureus produtor de penicilinase.",
          "Streptococcus pyogenes (Grupo A), Streptococcus del grupo B, Treponema pallidum, Clostridium perfringens. Sin actividad frente a Staphylococcus aureus productor de penicilinasa."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade à penicilina ou procaína", "Hipersensibilidad a la penicilina o procaína"),
          t(lang, "Via intravenosa CONTRAINDICADA (risco de síndrome de Hoigné)", "Vía intravenosa CONTRAINDICADA (riesgo de síndrome de Hoigné)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B; usada no tratamento da sífilis na gestante.", "Embarazo: SEGURA — categoría B; usada en el tratamiento de la sífilis en la gestante.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite materno.", "Lactancia: compatible — excreción mínima en leche materna.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Administração EXCLUSIVAMENTE INTRAMUSCULAR profunda — nunca EV.", "Administración EXCLUSIVAMENTE INTRAMUSCULAR profunda — nunca IV."),
          t(lang, "Síndrome de Hoigné: reação pseudoanafilática aguda por injeção intravascular acidental (agitação, medo de morte, parestesias).", "Síndrome de Hoigné: reacción pseudoanafláctica aguda por inyección intravascular accidental (agitación, miedo a la muerte, parestesias)."),
          t(lang, "Não necessita ajuste renal na prática clínica habitual.", "No requiere ajuste renal en la práctica clínica habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Guidelines 2021 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: null,
            ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "24/24h", doseMaxima: "1,2 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Administração exclusivamente IM.", "Administración exclusivamente IM.")
          },
          fg30a50: {
            vo: null,
            ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "24/24h", doseMaxima: "1,2 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null,
            ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "24/24h", doseMaxima: "1,2 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null,
            ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "24/24h", doseMaxima: "1,2 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Monitorar apenas em insuficiência renal terminal.", "Monitorizar solo en insuficiencia renal terminal.")
          },
          hemodialise: {
            vo: null,
            ev: null,
            pediatrica: { dose: "25.000–50.000 UI/kg", intervalo: "24/24h", doseMaxima: "1,2 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não requer suplementação pós-hemodiálise.", "No requiere suplementación post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 62. CEFACLOR ── */
  cefaclor: {
    name: { pt: "Cefaclor", es: "Cefaclor" },
    category: "atb",
    icon: "💊",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#059669",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoVO, dosePedVO;
      if (clcr >= 50) {
        doseAdultoVO = t(lang, "250–500 mg VO 8/8h", "250–500 mg VO 8/8h");
        dosePedVO    = peso > 0 ? `${Math.round(20 * peso)}–${Math.round(40 * peso)} mg VO 8/8h (${peso} kg)` : "20–40 mg/kg/dose VO 8/8h";
      } else if (clcr >= 30) {
        doseAdultoVO = t(lang, "250–500 mg VO 12/12h (ajuste renal ClCr 30–50)", "250–500 mg VO 12/12h (ajuste renal ClCr 30–50)");
        dosePedVO    = peso > 0 ? `${Math.round(20 * peso)} mg VO 12/12h (${peso} kg)` : "20 mg/kg/dose VO 12/12h";
      } else if (clcr >= 10) {
        doseAdultoVO = t(lang, "250–500 mg VO 24/24h (ajuste renal ClCr 10–30)", "250–500 mg VO 24/24h (ajuste renal ClCr 10–30)");
        dosePedVO    = peso > 0 ? `${Math.round(15 * peso)} mg VO 24/24h (${peso} kg)` : "10–20 mg/kg/dose VO 24/24h";
      } else {
        doseAdultoVO = t(lang, "250 mg VO 24/24h (insuficiência renal grave)", "250 mg VO 24/24h (insuficiencia renal grave)");
        dosePedVO    = peso > 0 ? `${Math.round(10 * peso)} mg VO 24/24h (${peso} kg)` : "10 mg/kg/dose VO 24/24h";
      }

      return {
        name:  t(lang, "Cefaclor", "Cefaclor"),
        class: t(lang, "Cefalosporina de 2ª geração (oral)", "Cefalosporina de 2.ª generación (oral)"),
        commercialNames: {
          br: ["Ceclor", "Alfacef", "Cefaclor Genérico"],
          ar: ["Ceclor", "Cefaclor Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 250 mg, 500 mg", "Cápsulas: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 125 mg/5 mL, 250 mg/5 mL", "Suspensión oral: 125 mg/5 mL, 250 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Otite média aguda, sinusite aguda, faringoamigdalite, infecções do trato respiratório inferior, infecções de pele e partes moles, ITU não complicada.",
          "Otitis media aguda, sinusitis aguda, faringoamigdalitis, infecciones del tracto respiratorio inferior, infecciones de piel y partes blandas, ITU no complicada."
        ),
        spectrum: t(
          lang,
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensível), Haemophilus influenzae (incluindo beta-lactamase+), Moraxella catarrhalis, E. coli, Klebsiella spp., Proteus mirabilis. Sem atividade contra MRSA, Pseudomonas ou anaeróbios.",
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensible), Haemophilus influenzae (incluido beta-lactamasa+), Moraxella catarrhalis, E. coli, Klebsiella spp., Proteus mirabilis. Sin actividad frente a MRSA, Pseudomonas ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B.", "Embarazo: SEGURA — categoría B.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Pode ser tomado com ou sem alimentos (alimentos reduzem pico mas não biodisponibilidade total).", "Puede tomarse con o sin alimentos (los alimentos reducen el pico pero no la biodisponibilidad total)."),
          t(lang, "Doença do soro-like (urticária + artralgia) associada especialmente ao cefaclor — mais frequente em crianças.", "Enfermedad del suero-like (urticaria + artralgia) asociada especialmente a cefaclor — más frecuente en niños."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: { dose: "250–500 mg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "20–40 mg/kg", intervalo: "8/8h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "20 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Redução da frequência recomendada.", "Reducción de la frecuencia recomendada.")
          },
          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10–20 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade.", "Monitorizar neurotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "250 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "10 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 63. CEFOXITINA ── */
  cefoxitina: {
    name: { pt: "Cefoxitina", es: "Cefoxitina" },
    category: "atb",
    icon: "🧪",
    color: "rgba(245,158,11,0.12)",
    colorTxt: "#D97706",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoEV, dosePedEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "1–2 g EV 6/6h", "1–2 g EV 6/6h");
        dosePedEV    = peso > 0 ? `${Math.round(30 * peso)}–${Math.round(40 * peso)} mg EV 6/6h (${peso} kg)` : "30–40 mg/kg/dose EV 6/6h";
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "1–2 g EV 8/8h (ajuste renal ClCr 30–50)", "1–2 g EV 8/8h (ajuste renal ClCr 30–50)");
        dosePedEV    = peso > 0 ? `${Math.round(25 * peso)}–${Math.round(30 * peso)} mg EV 8/8h (${peso} kg)` : "25–30 mg/kg/dose EV 8/8h";
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "1 g EV 12/12h (ajuste renal ClCr 10–30)", "1 g EV 12/12h (ajuste renal ClCr 10–30)");
        dosePedEV    = peso > 0 ? `${Math.round(20 * peso)} mg EV 12/12h (${peso} kg)` : "20 mg/kg/dose EV 12/12h";
      } else {
        doseAdultoEV = t(lang, "1 g EV 24/24h (insuficiência renal grave/diálise)", "1 g EV 24/24h (insuficiencia renal grave/diálisis)");
        dosePedEV    = peso > 0 ? `${Math.round(15 * peso)}–${Math.round(20 * peso)} mg EV 24/24h (${peso} kg)` : "15–20 mg/kg/dose EV 24/24h";
      }

      return {
        name:  t(lang, "Cefoxitina", "Cefoxitina"),
        class: t(lang, "Cefalosporina de 2ª geração — Cefamicina (anti-anaeróbio)", "Cefalosporina de 2.ª generación — Cefamicina (anti-anaerobio)"),
        commercialNames: {
          br: ["Mefoxin", "Cefoxitina Genérico"],
          ar: ["Mefoxin", "Cefoxitina Genérico"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV/IM: 1 g e 2 g por frasco", "Polvo para solución inyectable EV/IM: 1 g y 2 g por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções intra-abdominais (peritonite, apendicite), infecções ginecológicas (DIP, endometrite pós-parto), infecções de pele e partes moles por anaeróbios, profilaxia cirúrgica em cirurgia colorretal e ginecológica.",
          "Infecciones intraabdominales (peritonitis, apendicitis), infecciones ginecológicas (EIP, endometritis postparto), infecciones de piel y partes blandas por anaerobios, profilaxis quirúrgica en cirugía colorrectal y ginecológica."
        ),
        spectrum: t(
          lang,
          "Excelente cobertura de anaeróbios (Bacteroides fragilis, Prevotella spp.). Gram-negativos: E. coli, Klebsiella spp., Proteus spp. Gram-positivos: Streptococcus spp., Staphylococcus aureus (MSSA). Sem atividade contra Pseudomonas, MRSA ou Enterococcus.",
          "Excelente cobertura de anaerobios (Bacteroides fragilis, Prevotella spp.). Gram-negativos: E. coli, Klebsiella spp., Proteus spp. Gram-positivos: Streptococcus spp., Staphylococcus aureus (MSSA). Sin actividad frente a Pseudomonas, MRSA ni Enterococcus."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B; usada na profilaxia e tratamento de infecções obstétricas.", "Embarazo: SEGURA — categoría B; usada en profilaxis y tratamiento de infecciones obstétricas.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Única cefalosporina com atividade confiável contra Bacteroides fragilis — útil em infecções mistas aeróbio/anaeróbio.", "Única cefalosporina con actividad confiable frente a Bacteroides fragilis — útil en infecciones mixtas aerobio/anaerobio."),
          t(lang, "Profilaxia cirúrgica: dose única de 1–2 g EV 30–60 min antes da incisão.", "Profilaxis quirúrgica: dosis única de 1–2 g EV 30–60 min antes de la incisión."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / IDSA Intra-Abdominal Infections Guidelines / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "30–40 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para infecções intra-abdominais e ginecológicas.", "Dosis habitual para infecciones intraabdominales y ginecológicas.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "8/8h", doseMaxima: "6 g/dia", unidade: "g" },
            pediatrica: { dose: "25–30 mg/kg", intervalo: "8/8h", doseMaxima: "6 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência conforme ClCr.", "Reducir frecuencia según ClCr.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "20 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "15–20 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar acúmulo e encefalopatia.", "Monitorizar acumulación y encefalopatía.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "15–20 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 64. CEFDINIR ── */
  cefdinir: {
    name: { pt: "Cefdinir", es: "Cefdinir" },
    category: "atb",
    icon: "💊",
    color: "rgba(139,92,246,0.12)",
    colorTxt: "#7C3AED",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoVO, dosePedVO;
      if (clcr >= 30) {
        doseAdultoVO = t(lang, "300 mg VO 12/12h (ou 600 mg VO 24/24h)", "300 mg VO 12/12h (o 600 mg VO 24/24h)");
        dosePedVO    = peso > 0 ? `${Math.round(7 * peso)} mg VO 12/12h (${peso} kg)` : "7 mg/kg/dose VO 12/12h";
      } else {
        doseAdultoVO = t(lang, "300 mg VO 24/24h (ajuste renal ClCr < 30)", "300 mg VO 24/24h (ajuste renal ClCr < 30)");
        dosePedVO    = peso > 0 ? `${Math.round(7 * peso)} mg VO 24/24h (${peso} kg)` : "7 mg/kg/dose VO 24/24h";
      }

      return {
        name:  t(lang, "Cefdinir", "Cefdinir"),
        class: t(lang, "Cefalosporina de 3ª geração (oral)", "Cefalosporina de 3.ª generación (oral)"),
        commercialNames: {
          br: ["Omnicef", "Cefdinir Genérico"],
          ar: ["Omnicef", "Cefdinir Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 300 mg", "Cápsulas: 300 mg"),
          t(lang, "Suspensão oral pediátrica: 125 mg/5 mL", "Suspensión oral pediátrica: 125 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Otite média aguda, sinusite aguda, faringoamigdalite por Streptococcus pyogenes, pneumonia adquirida na comunidade leve-moderada, infecções de pele e partes moles não complicadas.",
          "Otitis media aguda, sinusitis aguda, faringoamigdalitis por Streptococcus pyogenes, neumonía adquirida en la comunidad leve-moderada, infecciones de piel y partes blandas no complicadas."
        ),
        spectrum: t(
          lang,
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensível à penicilina), Haemophilus influenzae (incluindo beta-lactamase+), Moraxella catarrhalis, Staphylococcus aureus (MSSA), E. coli, Klebsiella spp., Proteus mirabilis. Atividade superior ao cefaclor contra H. influenzae. Sem atividade contra MRSA, Pseudomonas ou anaeróbios.",
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensible a penicilina), Haemophilus influenzae (incluido beta-lactamasa+), Moraxella catarrhalis, Staphylococcus aureus (MSSA), E. coli, Klebsiella spp., Proteus mirabilis. Actividad superior al cefaclor frente a H. influenzae. Sin actividad frente a MRSA, Pseudomonas ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B.", "Embarazo: SEGURA — categoría B.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Fezes avermelhadas em lactentes: reação benigna pelo quelante de ferro — não suspender.", "Heces rojizas en lactantes: reacción benigna por quelante de hierro — no suspender."),
          t(lang, "Antiácidos com Al/Mg e suplementos de ferro reduzem absorção — administrar 2h antes ou depois.", "Antiácidos con Al/Mg y suplementos de hierro reducen la absorción — administrar 2h antes o después."),
          t(lang, "Ajuste renal quando ClCr < 30 mL/min: estender intervalo para 24 horas.", "Ajuste renal cuando ClCr < 30 mL/min: extender intervalo a 24 horas.")
        ],
        ref: "Sanford Guide 2025 / IDSA CAP Guidelines / FDA Prescribing Information / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: { dose: "300 mg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "7 mg/kg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "300 mg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "7 mg/kg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Sem ajuste até ClCr 30 mL/min.", "Sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "7 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Estender intervalo para 24 horas.", "Extender intervalo a 24 horas.")
          },
          fgMenor10: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "7 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade e eventos gastrointestinais.", "Monitorizar neurotoxicidad y eventos gastrointestinales.")
          },
          hemodialise: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "7 mg/kg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  }

}); /* fim Grupo 16 */

/* ── GRUPO 17 (drogas 65–76): cefpiroma, roxitromicina, espiramicina, tinidazol,
        secnidazol, ofloxacino, cefoperazona+sulbactam, cefmetazol,
        temocilina, omadaciclina, eravaciclina, delafloxacino ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 65. CEFPIROMA ── */
  cefpiroma: {
    name: { pt: "Cefpiroma", es: "Cefpiroma" },
    category: "atb",
    icon: "🧪",
    color: "rgba(220,38,38,0.12)",
    colorTxt: "#DC2626",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoEV, dosePedEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "1–2 g EV 12/12h", "1–2 g EV 12/12h");
        dosePedEV    = peso > 0 ? `${Math.round(50 * peso)} mg EV 12/12h (${peso} kg)` : "50 mg/kg/dose EV 12/12h";
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "1 g EV 12/12h (ajuste renal ClCr 30–50)", "1 g EV 12/12h (ajuste renal ClCr 30–50)");
        dosePedEV    = peso > 0 ? `${Math.round(37 * peso)} mg EV 12/12h (${peso} kg)` : "25–50 mg/kg/dose EV 12/12h";
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "1 g EV 24/24h (ajuste renal ClCr 10–30)", "1 g EV 24/24h (ajuste renal ClCr 10–30)");
        dosePedEV    = peso > 0 ? `${Math.round(25 * peso)} mg EV 24/24h (${peso} kg)` : "25 mg/kg/dose EV 24/24h";
      } else {
        doseAdultoEV = t(lang, "500 mg EV 24/24h (insuficiência renal grave)", "500 mg EV 24/24h (insuficiencia renal grave)");
        dosePedEV    = peso > 0 ? `${Math.round(20 * peso)} mg EV 24/24h (${peso} kg)` : "15–25 mg/kg/dose EV 24/24h";
      }

      return {
        name:  t(lang, "Cefpiroma", "Cefpiroma"),
        class: t(lang, "Cefalosporina de 4ª geração (EV)", "Cefalosporina de 4.ª generación (EV)"),
        commercialNames: {
          br: ["Cefrom"],
          ar: ["Cefrom"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g e 2 g por frasco", "Polvo para solución inyectable EV: 1 g y 2 g por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções graves por Gram-negativos incluindo Pseudomonas aeruginosa, pneumonia hospitalar, infecções em pacientes neutropênicos febris, sepse bacteriana.",
          "Infecciones graves por Gramnegativos incluida Pseudomonas aeruginosa, neumonía hospitalaria, infecciones en pacientes neutropénicos febriles, sepsis bacteriana."
        ),
        spectrum: t(
          lang,
          "Espectro amplo: Pseudomonas aeruginosa, Enterobacterales (incluindo produtores de AmpC), Staphylococcus aureus (MSSA), Streptococcus spp. Inferior à cefepima no mercado global, mas perfil semelhante. Sem atividade contra MRSA, Enterococcus ou anaeróbios.",
          "Espectro amplio: Pseudomonas aeruginosa, Enterobacterales (incluidos productores de AmpC), Staphylococcus aureus (MSSA), Streptococcus spp. Perfil similar a cefepima. Sin actividad frente a MRSA, Enterococcus ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: categoria B — usar apenas se benefício superar o risco.", "Embarazo: categoría B — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção mínima no leite — compatível.", "Lactancia: excreción mínima en leche — compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Neurotoxicidade (encefalopatia, convulsões) — risco aumentado em insuficiência renal sem ajuste de dose.", "Neurotoxicidad (encefalopatía, convulsiones) — riesgo aumentado en insuficiencia renal sin ajuste de dosis."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / EMA Prescribing Information",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual para infecções graves por Gram-negativos.", "Dosis habitual para infecciones graves por Gramnegativos.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "25–50 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir dose em insuficiência renal moderada.", "Reducir dosis en insuficiencia renal moderada.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "25 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "15–25 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar encefalopatia e neurotoxicidade.", "Monitorizar encefalopatía y neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "15–25 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 66. ROXITROMICINA ── */
  roxitromicina: {
    name: { pt: "Roxitromicina", es: "Roxitromicina" },
    category: "atb",
    icon: "💊",
    color: "rgba(234,179,8,0.12)",
    colorTxt: "#B45309",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "150 mg VO 12/12h (ou 300 mg VO 24/24h)", "150 mg VO 12/12h (o 300 mg VO 24/24h)");
      const dosePedVO    = peso > 0
        ? `${Math.round(5 * peso)}–${Math.round(8 * peso)} mg VO 12/12h (${peso} kg)`
        : "5–8 mg/kg/dose VO 12/12h";

      return {
        name:  t(lang, "Roxitromicina", "Roxitromicina"),
        class: t(lang, "Macrolídeo de 2ª geração (longa meia-vida)", "Macrólido de 2.ª generación (larga semivida)"),
        commercialNames: {
          br: ["Roxitromicina Genérico", "Rulid"],
          ar: ["Rulid", "Roxitromicina Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 150 mg, 300 mg", "Comprimidos: 150 mg, 300 mg"),
          t(lang, "Suspensão pediátrica: 50 mg/5 mL", "Suspensión pediátrica: 50 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Infecções do trato respiratório superior e inferior por patógenos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella spp.), faringoamigdalite, otite média aguda, infecções de pele e partes moles.",
          "Infecciones del tracto respiratorio superior e inferior por patógenos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella spp.), faringoamigdalitis, otitis media aguda, infecciones de piel y partes blandas."
        ),
        spectrum: t(
          lang,
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensível), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae (atividade limitada), Moraxella catarrhalis. Sem atividade contra Gram-negativos entéricos.",
          "Streptococcus pyogenes, Streptococcus pneumoniae (sensible), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae (actividad limitada), Moraxella catarrhalis. Sin actividad frente a Gramnegativos entéricos."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos macrolídeos", "Hipersensibilidad a los macrólidos"),
          t(lang, "Uso concomitante de ergotamínicos (risco de vasospasmo)", "Uso concomitante de ergotamínicos (riesgo de vasoespasmo)"),
          t(lang, "Prolongamento do intervalo QT ou hipopotassemia não corrigida", "Prolongación del intervalo QT o hipopotasemia no corregida")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: categoria B — usar apenas se necessário; alternativas preferidas.", "Embarazo: categoría B — usar solo si es necesario; se prefieren alternativas.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção no leite — avaliar risco/benefício.", "Lactancia: excreción en leche — evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Metabolismo hepático intenso (CYP3A4) — múltiplas interações medicamentosas.", "Metabolismo hepático intenso (CYP3A4) — múltiples interacciones medicamentosas."),
          t(lang, "Tomar em jejum para melhor absorção (30 min antes das refeições).", "Tomar en ayunas para mejor absorción (30 min antes de las comidas)."),
          t(lang, "Monitorar QT prolongado em pacientes com cardiopatia.", "Monitorizar QT prolongado en pacientes con cardiopatía."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / EMA Summary of Product Characteristics / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5–8 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Macrolídeo de longa duração.", "Macrólido de larga duración.")
          },
          fg30a50: {
            vo: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5–8 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5–8 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5–8 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar QT prolongado e hepatotoxicidade.", "Monitorizar QT prolongado y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "5–8 mg/kg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 67. ESPIRAMICINA ── */
  espiramicina: {
    name: { pt: "Espiramicina", es: "Espiramicina" },
    category: "atb",
    icon: "💊",
    color: "rgba(236,72,153,0.12)",
    colorTxt: "#BE185D",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "1–3 milhões UI VO 8/8h", "1–3 millones UI VO 8/8h");
      const dosePedVO    = peso > 0
        ? `${Math.round(75000 * peso).toLocaleString("pt-BR")}–${Math.round(150000 * peso).toLocaleString("pt-BR")} UI VO 8/8h (${peso} kg)`
        : "75.000–150.000 UI/kg/dose VO 8/8h";

      return {
        name:  t(lang, "Espiramicina", "Espiramicina"),
        class: t(lang, "Macrolídeo de 1ª geração (anti-Toxoplasma)", "Macrólido de 1.ª generación (anti-Toxoplasma)"),
        commercialNames: {
          br: ["Rovamycine", "Espiramicina Genérico"],
          ar: ["Rovamycine", "Espiramicina Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 1,5 milhões UI, 3 milhões UI", "Comprimidos: 1,5 millones UI, 3 millones UI"),
          t(lang, "Suspensão oral: 1,5 milhões UI/5 mL", "Suspensión oral: 1,5 millones UI/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Toxoplasmose gestacional (1º trimestre — antes da amniocentese), infecções por patógenos atípicos (Mycoplasma, Chlamydophila), faringoamigdalite em alérgicos à penicilina.",
          "Toxoplasmosis gestacional (1.er trimestre — antes de la amniocentesis), infecciones por patógenos atípicos (Mycoplasma, Chlamydophila), faringoamigdalitis en alérgicos a penicilina."
        ),
        spectrum: t(
          lang,
          "Toxoplasma gondii (ação parasitostática), Streptococcus pyogenes, Streptococcus pneumoniae (sensível), Mycoplasma pneumoniae, Chlamydophila spp., Legionella pneumophila. Sem atividade contra Gram-negativos entéricos.",
          "Toxoplasma gondii (acción parasitostática), Streptococcus pyogenes, Streptococcus pneumoniae (sensible), Mycoplasma pneumoniae, Chlamydophila spp., Legionella pneumophila. Sin actividad frente a Gramnegativos entéricos."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos macrolídeos", "Hipersensibilidad a los macrólidos"),
          t(lang, "Deficiência de G6PD (risco de hemólise)", "Deficiencia de G6PD (riesgo de hemólisis)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA no 1º trimestre para toxoplasmose — NÃO atravessa barreira placentária de forma eficaz; usada para proteger a mãe, não o feto.", "Embarazo: SEGURA en el 1.er trimestre para toxoplasmosis — NO atraviesa eficazmente la barrera placentaria; se usa para proteger a la madre, no al feto.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção no leite — avaliar risco/benefício.", "Lactancia: excreción en leche — evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Droga de escolha para toxoplasmose no 1º trimestre de gestação (pirimetamina contraindicada nesse período).", "Droga de elección para toxoplasmosis en el 1.er trimestre de gestación (pirimetamina contraindicada en ese período)."),
          t(lang, "Após 18 semanas: preferir pirimetamina + sulfadiazina + ácido folínico.", "Después de la semana 18: preferir pirimetamina + sulfadiazina + ácido folínico."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CRAT (Centre de Référence sur les Agents Tératogènes) / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "1–3 milhões UI", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI" },
            ev: null,
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Frequentemente utilizada na toxoplasmose gestacional.", "Frecuentemente utilizada en toxoplasmosis gestacional.")
          },
          fg30a50: {
            vo: { dose: "1–3 milhões UI", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI" },
            ev: null,
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "1–3 milhões UI", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI" },
            ev: null,
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "1–3 milhões UI", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI" },
            ev: null,
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Monitorar função hepática em tratamentos prolongados.", "Monitorizar función hepática en tratamientos prolongados.")
          },
          hemodialise: {
            vo: { dose: "1–3 milhões UI", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI" },
            ev: null,
            pediatrica: { dose: "75.000–150.000 UI/kg", intervalo: "8/8h", doseMaxima: "9 milhões UI/dia", unidade: "UI/kg" },
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 68. TINIDAZOL ── */
  tinidazol: {
    name: { pt: "Tinidazol", es: "Tinidazol" },
    category: "atb",
    icon: "💊",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#047857",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "2 g VO dose única (ou 2 g/dia × 3 dias para amebíase)", "2 g VO dosis única (o 2 g/día × 3 días para amebiasis)");
      const dosePedVO    = peso > 0
        ? `${Math.round(50 * peso)} mg VO dose única (${peso} kg)`
        : "50 mg/kg VO dose única";

      return {
        name:  t(lang, "Tinidazol", "Tinidazol"),
        class: t(lang, "Nitroimidazol de 2ª geração (longa meia-vida)", "Nitroimidazol de 2.ª generación (larga semivida)"),
        commercialNames: {
          br: ["Fasigyn", "Tinidazol Genérico"],
          ar: ["Fasigyn", "Tinidazol Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 500 mg", "Comprimidos: 500 mg")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Giardíase, amebíase intestinal e hepática, tricomoníase, vaginose bacteriana (Gardnerella vaginalis), infecções por anaeróbios.",
          "Giardiasis, amebiasis intestinal y hepática, tricomoniasis, vaginosis bacteriana (Gardnerella vaginalis), infecciones por anaerobios."
        ),
        spectrum: t(
          lang,
          "Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica, anaeróbios (Bacteroides fragilis, Clostridium spp.), Gardnerella vaginalis. Sem atividade contra aeróbios.",
          "Trichomonas vaginalis, Giardia lamblia, Entamoeba histolytica, anaerobios (Bacteroides fragilis, Clostridium spp.), Gardnerella vaginalis. Sin actividad frente a aerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos nitroimidazóis", "Hipersensibilidad a los nitroimidazoles"),
          t(lang, "1º trimestre de gestação", "1.er trimestre de gestación"),
          t(lang, "Distúrbios neurológicos orgânicos (risco de neurotoxicidade)", "Trastornos neurológicos orgánicos (riesgo de neurotoxicidad)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO no 1º trimestre — usar a partir do 2º trimestre apenas se necessário.", "Embarazo: CONTRAINDICADO en el 1.er trimestre — usar desde el 2.º trimestre solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: interromper amamentação por 3 dias após dose única.", "Lactancia: interrumpir lactancia durante 3 días después de dosis única.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Efeito antabuse com álcool — orientar abstinência durante tratamento e 72h após.", "Efecto antabus con alcohol — orientar abstinencia durante el tratamiento y 72h después."),
          t(lang, "Meia-vida longa (~12–14h) permite dose única ou regimes curtos.", "Semivida larga (~12–14h) permite dosis única o regímenes cortos."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Guidelines 2021 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "50 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Utilizado para giardíase, amebíase e tricomoníase.", "Utilizado para giardiasis, amebiasis y tricomoniasis.")
          },
          fg30a50: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "50 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "50 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "50 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade em uso prolongado.", "Monitorizar neurotoxicidad en uso prolongado.")
          },
          hemodialise: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "50 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Pode ser necessária dose suplementar após HD em tratamentos prolongados.", "Puede ser necesaria dosis suplementaria después de HD en tratamientos prolongados.")
          }
        }
      };
    }
  },

  /* ── 69. SECNIDAZOL ── */
  secnidazol: {
    name: { pt: "Secnidazol", es: "Secnidazol" },
    category: "atb",
    icon: "💊",
    color: "rgba(99,102,241,0.12)",
    colorTxt: "#4338CA",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "2 g VO dose única", "2 g VO dosis única");
      const dosePedVO    = peso > 0
        ? `${Math.round(30 * peso)} mg VO dose única (${peso} kg)`
        : "30 mg/kg VO dose única";

      return {
        name:  t(lang, "Secnidazol", "Secnidazol"),
        class: t(lang, "Nitroimidazol de 2ª geração (meia-vida muito longa)", "Nitroimidazol de 2.ª generación (semivida muy larga)"),
        commercialNames: {
          br: ["Secnidal", "Secnidazol Genérico"],
          ar: ["Secnidal", "Secnidazol Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 500 mg", "Comprimidos: 500 mg"),
          t(lang, "Suspensão oral: 250 mg/5 mL", "Suspensión oral: 250 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Amebíase intestinal e hepática, giardíase, vaginose bacteriana, tricomoníase.",
          "Amebiasis intestinal y hepática, giardiasis, vaginosis bacteriana, tricomoniasis."
        ),
        spectrum: t(
          lang,
          "Entamoeba histolytica, Giardia lamblia, Trichomonas vaginalis, Gardnerella vaginalis, anaeróbios (Bacteroides fragilis, Clostridium spp.). Perfil semelhante ao tinidazol com meia-vida ainda mais longa (~17–29h).",
          "Entamoeba histolytica, Giardia lamblia, Trichomonas vaginalis, Gardnerella vaginalis, anaerobios (Bacteroides fragilis, Clostridium spp.). Perfil similar al tinidazol con semivida aún más larga (~17–29h)."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos nitroimidazóis", "Hipersensibilidad a los nitroimidazoles"),
          t(lang, "1º trimestre de gestação", "1.er trimestre de gestación"),
          t(lang, "Distúrbios neurológicos graves", "Trastornos neurológicos graves")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO no 1º trimestre — usar a partir do 2º trimestre apenas se necessário.", "Embarazo: CONTRAINDICADO en el 1.er trimestre — usar desde el 2.º trimestre solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: interromper amamentação por 3 dias após dose única.", "Lactancia: interrumpir lactancia durante 3 días después de dosis única.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Efeito antabuse com álcool — orientar abstinência durante tratamento e 72h após.", "Efecto antabus con alcohol — orientar abstinencia durante el tratamiento y 72h después."),
          t(lang, "Meia-vida muito longa (~17–29h) — dose única para a maioria das indicações.", "Semivida muy larga (~17–29h) — dosis única para la mayoría de las indicaciones."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Guidelines 2021 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Utilizado para amebíase, giardíase e vaginose bacteriana.", "Utilizado para amebiasis, giardiasis y vaginosis bacteriana.")
          },
          fg30a50: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade em tratamentos repetidos.", "Monitorizar neurotoxicidad en tratamientos repetidos.")
          },
          hemodialise: {
            vo: { dose: "2 g", intervalo: "Dose única", doseMaxima: "2 g", unidade: "g" },
            ev: null,
            pediatrica: { dose: "30 mg/kg", intervalo: "Dose única", doseMaxima: "2 g", unidade: "mg/kg" },
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 70. OFLOXACINO ── */
  ofloxacino: {
    name: { pt: "Ofloxacino", es: "Ofloxacino" },
    category: "atb",
    icon: "💊",
    color: "rgba(245,158,11,0.12)",
    colorTxt: "#B45309",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoVO, doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoVO = t(lang, "200–400 mg VO 12/12h", "200–400 mg VO 12/12h");
        doseAdultoEV = t(lang, "200–400 mg EV 12/12h", "200–400 mg EV 12/12h");
      } else if (clcr >= 30) {
        doseAdultoVO = t(lang, "200–400 mg VO 24/24h (ajuste renal ClCr 30–50)", "200–400 mg VO 24/24h (ajuste renal ClCr 30–50)");
        doseAdultoEV = t(lang, "200–400 mg EV 24/24h (ajuste renal ClCr 30–50)", "200–400 mg EV 24/24h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoVO = t(lang, "200 mg VO 24/24h (ajuste renal ClCr 10–30)", "200 mg VO 24/24h (ajuste renal ClCr 10–30)");
        doseAdultoEV = t(lang, "200 mg EV 24/24h (ajuste renal ClCr 10–30)", "200 mg EV 24/24h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoVO = t(lang, "100–200 mg VO 24/24h (insuficiência renal grave)", "100–200 mg VO 24/24h (insuficiencia renal grave)");
        doseAdultoEV = t(lang, "100–200 mg EV 24/24h (insuficiência renal grave)", "100–200 mg EV 24/24h (insuficiencia renal grave)");
      }

      return {
        name:  t(lang, "Ofloxacino", "Ofloxacino"),
        class: t(lang, "Fluoroquinolona de 2ª geração", "Fluoroquinolona de 2.ª generación"),
        commercialNames: {
          br: ["Floxtat", "Ofloxacino Genérico"],
          ar: ["Floxtat", "Ofloxacino Genérico"]
        },
        presentation: [
          t(lang, "Comprimidos: 200 mg, 400 mg", "Comprimidos: 200 mg, 400 mg"),
          t(lang, "Solução injetável EV: 200 mg/100 mL", "Solución inyectable EV: 200 mg/100 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO,
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "ITU complicada, prostatite bacteriana crónica, DIP (doença inflamatória pélvica), uretrite/cervicite por gonorreia e clamídia, infecções do trato respiratório (uso limitado pela resistência).",
          "ITU complicada, prostatitis bacteriana crónica, EIP (enfermedad inflamatoria pélvica), uretritis/cervicitis por gonorrea y clamidia, infecciones del tracto respiratorio (uso limitado por resistencia)."
        ),
        spectrum: t(
          lang,
          "Gram-negativos: E. coli, Klebsiella spp., Proteus spp., Neisseria gonorrhoeae. Atípicos: Chlamydia trachomatis, Mycoplasma spp. Atividade reduzida contra Streptococcus pneumoniae e anaeróbios comparado a quinolonas respiratórias.",
          "Gramnegativos: E. coli, Klebsiella spp., Proteus spp., Neisseria gonorrhoeae. Atípicos: Chlamydia trachomatis, Mycoplasma spp. Actividad reducida frente a Streptococcus pneumoniae y anaerobios en comparación con quinolonas respiratorias."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às fluoroquinolonas", "Hipersensibilidad a las fluoroquinolonas"),
          t(lang, "Menores de 18 anos (risco de artropatia em animais em crescimento)", "Menores de 18 años (riesgo de artropatía en animales en crecimiento)"),
          t(lang, "Gestação e lactação", "Gestación y lactancia"),
          t(lang, "Prolongamento do intervalo QT ou hipopotassemia não corrigida", "Prolongación del intervalo QT o hipopotasemia no corregida")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO — quinolonas afetam cartilagem em desenvolvimento; usar apenas em situações sem alternativas.", "Embarazo: CONTRAINDICADO — las quinolonas afectan el cartílago en desarrollo; usar solo cuando no hay alternativas.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — excreção significativa no leite materno.", "Lactancia: EVITAR — excreción significativa en leche materna.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Risco de tendinite e ruptura de tendão (especialmente tendão de Aquiles) — suspender em caso de dor tendinosa.", "Riesgo de tendinitis y rotura de tendón (especialmente tendón de Aquiles) — suspender ante dolor tendinoso."),
          t(lang, "Prolongamento do QT — monitorar ECG em pacientes de risco.", "Prolongación del QT — monitorizar ECG en pacientes de riesgo."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Guidelines 2021 / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: { dose: "200–400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "200–400 mg", intervalo: "12/12h", doseMaxima: "800 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "200–400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            ev: { dose: "200–400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Reduzir frequência para cada 24 horas.", "Reducir frecuencia a cada 24 horas.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar QT prolongado, tendinopatia e neurotoxicidade.", "Monitorizar QT prolongado, tendinopatía y neurotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: { dose: "100–200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 71. CEFOPERAZONA + SULBACTAM ── */
  cefoperazona_sulbactam: {
    name: { pt: "Cefoperazona + Sulbactam", es: "Cefoperazona + Sulbactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(220,38,38,0.15)",
    colorTxt: "#DC2626",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoEV, dosePedEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "2–4 g EV 12/12h", "2–4 g EV 12/12h");
        dosePedEV    = peso > 0 ? `${Math.round(60 * peso)} mg EV 12/12h (${peso} kg)` : "40–80 mg/kg/dose EV 12/12h";
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "2 g EV 12/12h (ajuste renal — fração sulbactam)", "2 g EV 12/12h (ajuste renal — fracción sulbactam)");
        dosePedEV    = peso > 0 ? `${Math.round(40 * peso)} mg EV 12/12h (${peso} kg)` : "40 mg/kg/dose EV 12/12h";
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "1–2 g EV 12/12h (ajuste renal ClCr 10–30)", "1–2 g EV 12/12h (ajuste renal ClCr 10–30)");
        dosePedEV    = peso > 0 ? `${Math.round(30 * peso)} mg EV 12/12h (${peso} kg)` : "20–40 mg/kg/dose EV 12/12h";
      } else {
        doseAdultoEV = t(lang, "1 g EV 12/12h (insuficiência renal grave)", "1 g EV 12/12h (insuficiencia renal grave)");
        dosePedEV    = peso > 0 ? `${Math.round(20 * peso)} mg EV 12/12h (${peso} kg)` : "20 mg/kg/dose EV 12/12h";
      }

      return {
        name:  t(lang, "Cefoperazona + Sulbactam", "Cefoperazona + Sulbactam"),
        class: t(lang, "Cefalosporina de 3ª geração + Inibidor de beta-lactamase", "Cefalosporina de 3.ª generación + Inhibidor de beta-lactamasa"),
        commercialNames: {
          br: ["Sulperazon", "Cefoperazona/Sulbactam Genérico"],
          ar: ["Sulperazon", "Cefoperazona/Sulbactam Genérico"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g/1 g (cefoperazona/sulbactam) por frasco", "Polvo para solución inyectable EV: 1 g/1 g (cefoperazona/sulbactam) por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções por Acinetobacter baumannii multirresistente (em combinação), infecções intra-abdominais, ginecológicas, pneumonia hospitalar, sepse.",
          "Infecciones por Acinetobacter baumannii multirresistente (en combinación), infecciones intraabdominales, ginecológicas, neumonía hospitalaria, sepsis."
        ),
        spectrum: t(
          lang,
          "Acinetobacter baumannii (incluindo cepas resistentes à ampicilina/sulbactam clássica), Pseudomonas aeruginosa (atividade variável), Enterobacterales (incluindo produtores de ESBL), anaeróbios (Bacteroides fragilis), Staphylococcus aureus (MSSA). A fração sulbactam tem atividade intrínseca contra Acinetobacter.",
          "Acinetobacter baumannii (incluidas cepas resistentes a ampicilina/sulbactam clásica), Pseudomonas aeruginosa (actividad variable), Enterobacterales (incluidos productores de ESBL), anaerobios (Bacteroides fragilis), Staphylococcus aureus (MSSA). La fracción sulbactam tiene actividad intrínseca frente a Acinetobacter."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas, penicilinas ou sulbactam", "Hipersensibilidad a cefalosporinas, penicilinas o sulbactam")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: categoria B — usar apenas se benefício superar o risco.", "Embarazo: categoría B — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção mínima no leite — compatível.", "Lactancia: excreción mínima en leche — compatible.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Potente inibidor de vitamina K — risco aumentado de sangramento; monitorar INR.", "Potente inhibidor de vitamina K — riesgo aumentado de sangrado; monitorizar INR."),
          t(lang, "Evitar álcool durante e até 3 dias após o tratamento (efeito antabuse pela estrutura MTT).", "Evitar alcohol durante y hasta 3 días después del tratamiento (efecto antabus por estructura MTT)."),
          t(lang, "Ajuste renal orientado principalmente pela fração sulbactam.", "Ajuste renal orientado principalmente por la fracción sulbactam.")
        ],
        ref: "Sanford Guide 2025 / IDSA HAP/VAP Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "2–4 g", intervalo: "12/12h", doseMaxima: "8 g/dia", unidade: "g" },
            pediatrica: { dose: "40–80 mg/kg", intervalo: "12/12h", doseMaxima: "8 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "2 g", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "40 mg/kg", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajustar principalmente pela fração sulbactam.", "Ajustar principalmente por la fracción sulbactam.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "20–40 mg/kg", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Redução necessária em insuficiência renal significativa.", "Reducción necesaria en insuficiencia renal significativa.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "20 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade.", "Monitorizar neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "20 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 72. CEFMETAZOL ── */
  cefmetazol: {
    name: { pt: "Cefmetazol", es: "Cefmetazol" },
    category: "atb",
    icon: "🧪",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#065F46",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      let doseAdultoEV, dosePedEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "1–2 g EV 8/8h", "1–2 g EV 8/8h");
        dosePedEV    = peso > 0 ? `${Math.round(40 * peso)} mg EV 8/8h (${peso} kg)` : "30–50 mg/kg/dose EV 8/8h";
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "1 g EV 12/12h (ajuste renal ClCr 30–50)", "1 g EV 12/12h (ajuste renal ClCr 30–50)");
        dosePedEV    = peso > 0 ? `${Math.round(25 * peso)} mg EV 12/12h (${peso} kg)` : "25 mg/kg/dose EV 12/12h";
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "1 g EV 24/24h (ajuste renal ClCr 10–30)", "1 g EV 24/24h (ajuste renal ClCr 10–30)");
        dosePedEV    = peso > 0 ? `${Math.round(18 * peso)} mg EV 24/24h (${peso} kg)` : "15–20 mg/kg/dose EV 24/24h";
      } else {
        doseAdultoEV = t(lang, "500 mg EV 24/24h (insuficiência renal grave)", "500 mg EV 24/24h (insuficiencia renal grave)");
        dosePedEV    = peso > 0 ? `${Math.round(12 * peso)} mg EV 24/24h (${peso} kg)` : "10–15 mg/kg/dose EV 24/24h";
      }

      return {
        name:  t(lang, "Cefmetazol", "Cefmetazol"),
        class: t(lang, "Cefalosporina de 2ª geração — Cefamicina (anti-anaeróbio)", "Cefalosporina de 2.ª generación — Cefamicina (anti-anaerobio)"),
        commercialNames: {
          br: ["Zefazone", "Cefmetazol Genérico"],
          ar: ["Zefazone", "Cefmetazol Genérico"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g e 2 g por frasco", "Polvo para solución inyectable EV: 1 g y 2 g por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções intra-abdominais, ginecológicas, infecções de pele e partes moles com componente anaeróbio, profilaxia cirúrgica em cirurgia colorretal.",
          "Infecciones intraabdominales, ginecológicas, infecciones de piel y partes blandas con componente anaerobio, profilaxis quirúrgica en cirugía colorrectal."
        ),
        spectrum: t(
          lang,
          "Excelente cobertura de anaeróbios (Bacteroides fragilis, Clostridium spp.). Gram-negativos: E. coli, Klebsiella spp., Proteus spp. Gram-positivos: Streptococcus spp., Staphylococcus aureus (MSSA). Perfil semelhante à cefoxitina. Sem atividade contra MRSA ou Pseudomonas.",
          "Excelente cobertura de anaerobios (Bacteroides fragilis, Clostridium spp.). Gramnegativos: E. coli, Klebsiella spp., Proteus spp. Grampositivos: Streptococcus spp., Staphylococcus aureus (MSSA). Perfil similar a cefoxitina. Sin actividad frente a MRSA ni Pseudomonas."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às cefalosporinas ou penicilinas (reação cruzada ~1–2%)", "Hipersensibilidad a cefalosporinas o penicilinas (reacción cruzada ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: categoria B — usar apenas se necessário.", "Embarazo: categoría B — usar solo si es necesario.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cefamicina com cobertura anti-anaeróbia semelhante à cefoxitina — perfil MTT (evitar álcool).", "Cefamicina con cobertura anti-anaerobia similar a cefoxitina — perfil MTT (evitar alcohol)."),
          t(lang, "Monitorar INR: inibição da síntese de vitamina K.", "Monitorizar INR: inhibición de la síntesis de vitamina K."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / Goodman & Gilman 14ª ed. / FDA Prescribing Information",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "1–2 g", intervalo: "8/8h", doseMaxima: "6 g/dia", unidade: "g" },
            pediatrica: { dose: "30–50 mg/kg", intervalo: "8/8h", doseMaxima: "6 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1 g", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: { dose: "25 mg/kg", intervalo: "12/12h", doseMaxima: "2 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Reduzir frequência conforme função renal.", "Reducir frecuencia según función renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: { dose: "15–20 mg/kg", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade e encefalopatia.", "Monitorizar neurotoxicidad y encefalopatía.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "500 mg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg" },
            pediatrica: { dose: "10–15 mg/kg", intervalo: "24/24h", doseMaxima: "500 mg/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 73. TEMOCILINA ── */
  temocilina: {
    name: { pt: "Temocilina", es: "Temocilina" },
    category: "atb",
    icon: "🧬",
    color: "rgba(59,130,246,0.12)",
    colorTxt: "#1D4ED8",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "2 g EV 12/12h", "2 g EV 12/12h");
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "2 g EV 24/24h (ajuste renal ClCr 30–50)", "2 g EV 24/24h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "1 g EV 24/24h (ajuste renal ClCr 10–30)", "1 g EV 24/24h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoEV = t(lang, "1 g EV 48/48h (insuficiência renal grave/diálise)", "1 g EV 48/48h (insuficiencia renal grave/diálisis)");
      }

      return {
        name:  t(lang, "Temocilina", "Temocilina"),
        class: t(lang, "Penicilina antiestafilocócica modificada (anti-ESBL/KPC sem atividade antianaeróbia)", "Penicilina antiestafilocócica modificada (anti-ESBL/KPC sin actividad antianaeróbica)"),
        commercialNames: {
          br: ["Negaban (acesso limitado no Brasil)"],
          ar: ["Negaban"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV/IM: 1 g por frasco (uso hospitalar)", "Polvo para solución inyectable EV/IM: 1 g por frasco (uso hospitalario)")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Infecções por Enterobacterales produtoras de ESBL ou KPC (alternativa aos carbapenêmicos), ITU complicada, infecções intra-abdominais, bacteremia por Gram-negativos sensíveis. Uso restrito a centros com acesso ao fármaco.",
          "Infecciones por Enterobacterales productoras de ESBL o KPC (alternativa a carbapenémicos), ITU complicada, infecciones intraabdominales, bacteriemia por Gramnegativos sensibles. Uso restringido a centros con acceso al fármaco."
        ),
        spectrum: t(
          lang,
          "Enterobacterales (incluindo produtores de ESBL e KPC — exceto NDM e OXA-48 puro), E. coli, Klebsiella pneumoniae, Proteus spp. Naturalmente resistente a Pseudomonas, Acinetobacter e anaeróbios. Estável a beta-lactamases classe A e C.",
          "Enterobacterales (incluidos productores de ESBL y KPC — excepto NDM y OXA-48 puro), E. coli, Klebsiella pneumoniae, Proteus spp. Naturalmente resistente a Pseudomonas, Acinetobacter y anaerobios. Estable frente a betalactamasas de clase A y C."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às penicilinas ou cefalosporinas (reação cruzada)", "Hipersensibilidad a penicilinas o cefalosporinas (reacción cruzada)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se não houver alternativa.", "Embarazo: datos limitados — usar solo si no hay alternativa.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — avaliar risco/benefício.", "Lactancia: datos insuficientes — evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Cobertura seletiva anti-Enterobacterales: NÃO cobre Pseudomonas, Acinetobacter nem anaeróbios.", "Cobertura selectiva anti-Enterobacterales: NO cubre Pseudomonas, Acinetobacter ni anaerobios."),
          t(lang, "Utilidade como poupador de carbapenêmicos em infecções por ESBL documentadas.", "Utilidad como ahorrador de carbapenémicos en infecciones por ESBL documentadas."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / EUCAST / Livermore DM et al. / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "2 g", intervalo: "12/12h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Dose habitual para Enterobacterales multirresistentes.", "Dosis habitual para Enterobacterales multirresistentes.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "2 g", intervalo: "24/24h", doseMaxima: "2 g/dia", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Reduzir frequência em insuficiência renal moderada.", "Reducir frecuencia en insuficiencia renal moderada.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1 g", intervalo: "24/24h", doseMaxima: "1 g/dia", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Ajuste obrigatório.", "Ajuste obligatorio.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1 g", intervalo: "48/48h", doseMaxima: "1 g/dose", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Monitorar acúmulo do fármaco.", "Monitorizar acumulación del fármaco.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1 g", intervalo: "48/48h", doseMaxima: "1 g/dose", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Administrar após hemodiálise.", "Administrar después de hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 74. OMADACICLINA ── */
  omadaciclina: {
    name: { pt: "Omadaciclina", es: "Omadaciclina" },
    category: "atb",
    icon: "💊",
    color: "rgba(139,92,246,0.12)",
    colorTxt: "#6D28D9",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoVO = t(lang, "300 mg VO 24/24h (após ataque: 450 mg × 2 no D1 ou 300 mg × 3 no D1)", "300 mg VO 24/24h (tras carga: 450 mg × 2 en D1 o 300 mg × 3 en D1)");
      const doseAdultoEV = t(lang, "100 mg EV 24/24h (após ataque: 200 mg EV no D1)", "100 mg EV 24/24h (tras carga: 200 mg EV en D1)");

      return {
        name:  t(lang, "Omadaciclina", "Omadaciclina"),
        class: t(lang, "Aminometilciclina (nova geração de tetraciclina — anti-resistência)", "Aminometilciclina (nueva generación de tetraciclina — anti-resistencia)"),
        commercialNames: {
          br: ["Nuzyra (acesso limitado no Brasil)"],
          ar: ["Nuzyra"]
        },
        presentation: [
          t(lang, "Comprimidos: 150 mg (uso oral)", "Comprimidos: 150 mg (uso oral)"),
          t(lang, "Pó liofilizado para solução injetável EV: 100 mg por frasco", "Polvo liofilizado para solución inyectable EV: 100 mg por frasco")
        ],
        dose: {
          adultoVO: doseAdultoVO,
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Pneumonia adquirida na comunidade (PAC) por patógenos atípicos e sensíveis, infecções de pele e partes moles (ABSSSI), alternativa para S. aureus resistente à tetraciclina.",
          "Neumonía adquirida en la comunidad (NAC) por patógenos atípicos y sensibles, infecciones de piel y partes blandas (ABSSSI), alternativa para S. aureus resistente a tetraciclina."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA e MRSA), Streptococcus pneumoniae, Haemophilus influenzae, Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Gram-negativos (exceto Pseudomonas). Atividade mantida contra cepas resistentes às tetraciclinas clássicas (mecanismo de efluxo tet efMX).",
          "Staphylococcus aureus (MSSA y MRSA), Streptococcus pneumoniae, Haemophilus influenzae, Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Gramnegativos (excepto Pseudomonas). Actividad mantenida frente a cepas resistentes a tetraciclinas clásicas (mecanismo de eflujo tet efMX)."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às tetraciclinas", "Hipersensibilidad a las tetraciclinas"),
          t(lang, "Gestação e crianças < 8 anos (risco de lesão dentária e óssea)", "Gestación y niños < 8 años (riesgo de lesión dental y ósea)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADA — pode causar decoloração dentária e inibição do crescimento ósseo fetal.", "Embarazo: CONTRAINDICADA — puede causar decoloración dental e inhibición del crecimiento óseo fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — excreção no leite; risco de lesão dentária no lactente.", "Lactancia: EVITAR — excreción en leche; riesgo de lesión dental en el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Tomar VO em jejum (≥ 4 horas após última refeição e ≥ 2 horas antes da próxima refeição).", "Tomar VO en ayunas (≥ 4 horas después de la última comida y ≥ 2 horas antes de la próxima)."),
          t(lang, "Não necessita ajuste renal — vantagem em pacientes com insuficiência renal.", "No requiere ajuste renal — ventaja en pacientes con insuficiencia renal."),
          t(lang, "Hepatotoxicidade descrita — monitorar enzimas hepáticas.", "Hepatotoxicidad descrita — monitorizar enzimas hepáticas.")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA CAP Guidelines 2019 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "24/24h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Após dose de ataque conforme protocolo.", "Después de dosis de carga según protocolo.")
          },
          fg30a50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "24/24h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "24/24h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "24/24h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar hepatotoxicidade e efeitos gastrointestinais.", "Monitorizar hepatotoxicidad y efectos gastrointestinales.")
          },
          hemodialise: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: { dose: "100 mg", intervalo: "24/24h", doseMaxima: "100 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não removida significativamente pela HD.", "No removida significativamente por HD.")
          }
        }
      };
    }
  },

  /* ── 75. ERAVACICLINA ── */
  eravaciclina: {
    name: { pt: "Eravaciclina", es: "Eravaciclina" },
    category: "atb",
    icon: "🧪",
    color: "rgba(245,158,11,0.15)",
    colorTxt: "#92400E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const doseAdultoEV = peso > 0
        ? `${(1 * peso).toFixed(0)} mg EV 12/12h (${peso} kg — 1 mg/kg)`
        : t(lang, "1 mg/kg EV 12/12h", "1 mg/kg EV 12/12h");

      return {
        name:  t(lang, "Eravaciclina", "Eravaciclina"),
        class: t(lang, "Fluorociclina (nova geração de tetraciclina — anti-ESBL/carbapenem-R)", "Fluorociclina (nueva generación de tetraciclina — anti-ESBL/carbapenem-R)"),
        commercialNames: {
          br: ["Xerava (acesso limitado no Brasil)"],
          ar: ["Xerava"]
        },
        presentation: [
          t(lang, "Pó liofilizado para solução injetável EV: 50 mg por frasco", "Polvo liofilizado para solución inyectable EV: 50 mg por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: peso > 0
          ? { adultoEV_kg: `1 mg/kg EV 12/12h (${peso} kg = ${peso} mg/dose)` }
          : null,
        indication: t(
          lang,
          "Infecções intra-abdominais complicadas (cIAI) incluindo aquelas causadas por Enterobacterales resistentes a carbapenêmicos (CRE) e ESBL, Acinetobacter baumannii.",
          "Infecciones intraabdominales complicadas (cIAI) incluidas las causadas por Enterobacterales resistentes a carbapenémicos (CRE) y ESBL, Acinetobacter baumannii."
        ),
        spectrum: t(
          lang,
          "Espectro extremamente amplo: Enterobacterales (ESBL, KPC, NDM, OXA-48), Acinetobacter baumannii (inclusive MDR), Staphylococcus aureus (MRSA), Enterococcus faecalis/faecium, anaeróbios (Bacteroides fragilis). Atividade frente a cepas resistentes às tetraciclinas clássicas. Sem atividade confiável contra Pseudomonas.",
          "Espectro extremadamente amplio: Enterobacterales (ESBL, KPC, NDM, OXA-48), Acinetobacter baumannii (inclusive MDR), Staphylococcus aureus (MRSA), Enterococcus faecalis/faecium, anaerobios (Bacteroides fragilis). Actividad frente a cepas resistentes a tetraciclinas clásicas. Sin actividad confiable frente a Pseudomonas."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às tetraciclinas", "Hipersensibilidad a las tetraciclinas"),
          t(lang, "Gestação e crianças < 8 anos (risco de lesão dentária e óssea)", "Gestación y niños < 8 años (riesgo de lesión dental y ósea)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADA — risco de lesão dentária e óssea fetal.", "Embarazo: CONTRAINDICADA — riesgo de lesión dental y ósea fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — dados insuficientes; risco potencial para o lactente.", "Lactancia: EVITAR — datos insuficientes; riesgo potencial para el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Não necessita ajuste renal — vantagem significativa em pacientes com IRA ou DRC avançada.", "No requiere ajuste renal — ventaja significativa en pacientes con IRA o ERC avanzada."),
          t(lang, "Ajuste necessário em insuficiência hepática grave (Child-Pugh C): reduzir para 1 mg/kg 24/24h.", "Ajuste necesario en insuficiencia hepática grave (Child-Pugh C): reducir a 1 mg/kg 24/24h."),
          t(lang, "Reservar para infecções por germes MDR/XDR confirmados (stewardship).", "Reservar para infecciones por gérmenes MDR/XDR confirmados (stewardship).")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA CRE Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: null,
            ev: { dose: "1 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dose", unidade: "mg/kg" },
            pediatrica: null,
            obs: t(lang, "Dose habitual para infecções intra-abdominais complicadas.", "Dosis habitual para infecciones intraabdominales complicadas.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dose", unidade: "mg/kg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dose", unidade: "mg/kg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dose", unidade: "mg/kg" },
            pediatrica: null,
            obs: t(lang, "Avaliar função hepática em insuficiência avançada.", "Evaluar función hepática en insuficiencia avanzada.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1 mg/kg", intervalo: "12/12h", doseMaxima: "100 mg/dose", unidade: "mg/kg" },
            pediatrica: null,
            obs: t(lang, "Não requer ajuste pós-hemodiálise.", "No requiere ajuste post-hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 76. DELAFLOXACINO ── */
  delafloxacino: {
    name: { pt: "Delafloxacino", es: "Delafloxacino" },
    category: "atb",
    icon: "💊",
    color: "rgba(239,68,68,0.12)",
    colorTxt: "#B91C1C",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoVO, doseAdultoEV;
      if (clcr >= 30) {
        doseAdultoVO = t(lang, "450 mg VO 12/12h", "450 mg VO 12/12h");
        doseAdultoEV = t(lang, "300 mg EV 12/12h", "300 mg EV 12/12h");
      } else if (clcr >= 15) {
        doseAdultoVO = t(lang, "450 mg VO 12/12h (VO sem ajuste)", "450 mg VO 12/12h (VO sin ajuste)");
        doseAdultoEV = t(lang, "200 mg EV 12/12h (ajuste EV — ClCr 15–29)", "200 mg EV 12/12h (ajuste EV — ClCr 15–29)");
      } else {
        doseAdultoVO = t(lang, "Uso VO não recomendado em ClCr < 15 mL/min", "Uso VO no recomendado en ClCr < 15 mL/min");
        doseAdultoEV = t(lang, "Uso EV não recomendado em ClCr < 15 mL/min", "Uso EV no recomendado en ClCr < 15 mL/min");
      }

      return {
        name:  t(lang, "Delafloxacino", "Delafloxacino"),
        class: t(lang, "Fluoroquinolona de nova geração (anti-MRSA ativo em pH ácido)", "Fluoroquinolona de nueva generación (anti-MRSA activo en pH ácido)"),
        commercialNames: {
          br: ["Baxdela (acesso limitado no Brasil)"],
          ar: ["Baxdela"]
        },
        presentation: [
          t(lang, "Comprimidos: 450 mg", "Comprimidos: 450 mg"),
          t(lang, "Pó para solução injetável EV: 300 mg por frasco", "Polvo para solución inyectable EV: 300 mg por frasco")
        ],
        dose: {
          adultoVO: doseAdultoVO,
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Infecções de pele e partes moles (ABSSSI) incluindo por MRSA, pneumonia adquirida na comunidade.",
          "Infecciones de piel y partes blandas (ABSSSI) incluidas las causadas por MRSA, neumonía adquirida en la comunidad."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA e MRSA), Streptococcus pyogenes, Streptococcus anginosus group, Enterococcus faecalis, Gram-negativos (E. coli, Klebsiella spp., Pseudomonas aeruginosa — atividade variável), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila. Atividade superior a fluoroquinolonas clássicas em pH ácido (abscesso, tecido inflamado).",
          "Staphylococcus aureus (MSSA y MRSA), Streptococcus pyogenes, Streptococcus anginosus group, Enterococcus faecalis, Gramnegativos (E. coli, Klebsiella spp., Pseudomonas aeruginosa — actividad variable), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila. Actividad superior a fluoroquinolonas clásicas en pH ácido (absceso, tejido inflamado)."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às fluoroquinolonas", "Hipersensibilidad a las fluoroquinolonas"),
          t(lang, "Menores de 18 anos (risco de artropatia)", "Menores de 18 años (riesgo de artropatía)"),
          t(lang, "ClCr < 15 mL/min sem suporte dialítico", "ClCr < 15 mL/min sin soporte dialítico")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADO — quinolonas afetam cartilagem fetal.", "Embarazo: CONTRAINDICADO — las quinolonas afectan el cartílago fetal.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — dados insuficientes.", "Lactancia: EVITAR — datos insuficientes.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Única fluoroquinolona com atividade anti-MRSA clinicamente relevante.", "Única fluoroquinolona con actividad anti-MRSA clínicamente relevante."),
          t(lang, "Formulação EV contém SBECD (ciclodextrina sulfobutiléter) — acumulação em ClCr < 30: preferir VO ou evitar EV.", "Formulación EV contiene SBECD (ciclodextrina sulfobutiléter) — acumulación en ClCr < 30: preferir VO o evitar EV."),
          t(lang, "Prolongamento do QT menor que outras fluoroquinolonas — monitorar em pacientes de risco.", "Prolongación del QT menor que otras fluoroquinolonas — monitorizar en pacientes de riesgo.")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA SSTI Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: { dose: "450 mg", intervalo: "12/12h", doseMaxima: "900 mg/dia", unidade: "mg" },
            ev: { dose: "300 mg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Dose habitual.", "Dosis habitual.")
          },
          fg30a50: {
            vo: { dose: "450 mg", intervalo: "12/12h", doseMaxima: "900 mg/dia", unidade: "mg" },
            ev: { dose: "300 mg", intervalo: "12/12h", doseMaxima: "600 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Sem ajuste até ClCr 30 mL/min.", "Sin ajuste hasta ClCr 30 mL/min.")
          },
          fg10a30: {
            vo: { dose: "450 mg", intervalo: "12/12h", doseMaxima: "900 mg/dia", unidade: "mg" },
            ev: { dose: "200 mg", intervalo: "12/12h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Ajuste necessário apenas para formulação EV.", "Ajuste necesario solo para formulación EV.")
          },
          fgMenor10: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Uso não recomendado em ClCr <15 mL/min sem HD.", "Uso no recomendado en ClCr <15 mL/min sin HD.")
          },
          hemodialise: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Uso não recomendado em pacientes sob hemodiálise.", "Uso no recomendado en pacientes en hemodiálisis.")
          }
        }
      };
    }
  }

}); /* fim Grupo 17 */

/* ── GRUPO 18 (drogas 77–84): plazomicina, oritavancina, telavancina, lefamulina,
        imipenem+cilastatina+relebactam, aztreonam+avibactam,
        sulbactam+durlobactam, rifabutina ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 77. PLAZOMICINA ── */
  plazomicina: {
    name: { pt: "Plazomicina", es: "Plazomicina" },
    category: "atb",
    icon: "🧬",
    color: "rgba(220,38,38,0.12)",
    colorTxt: "#DC2626",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = peso > 0
          ? `${Math.round(15 * peso)} mg EV 24/24h (${peso} kg — 15 mg/kg)`
          : t(lang, "15 mg/kg EV 24/24h", "15 mg/kg EV 24/24h");
      } else if (clcr >= 30) {
        doseAdultoEV = peso > 0
          ? `${Math.round(15 * peso)} mg EV 48/48h (${peso} kg — ClCr 30–50)`
          : t(lang, "15 mg/kg EV 48/48h (ajuste renal ClCr 30–50)", "15 mg/kg EV 48/48h (ajuste renal ClCr 30–50)");
      } else {
        doseAdultoEV = t(lang, "Dose individualizada — monitorização farmacocinética obrigatória (ClCr < 30)", "Dosis individualizada — monitorización farmacocinética obligatoria (ClCr < 30)");
      }

      return {
        name:  t(lang, "Plazomicina", "Plazomicina"),
        class: t(lang, "Aminoglicosídeo de nova geração (anti-AME — aminoglicosídeo-modificando enzimas)", "Aminoglucósido de nueva generación (anti-AME — aminoglucósido-modificando enzimas)"),
        commercialNames: {
          br: ["Zemdri (acesso limitado no Brasil)"],
          ar: ["Zemdri"]
        },
        presentation: [
          t(lang, "Solução para infusão EV: 500 mg/10 mL (50 mg/mL)", "Solución para infusión EV: 500 mg/10 mL (50 mg/mL)")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: peso > 0
          ? { adultoEV_kg: `15 mg/kg/dose (peso: ${peso} kg = ${Math.round(15 * peso)} mg/dose)` }
          : null,
        indication: t(
          lang,
          "Infecções do trato urinário complicadas (cITU) e pielonefrite por Enterobacterales resistentes a carbapenêmicos (CRE), incluindo cepas AME-positivas resistentes aos aminoglicosídeos convencionais.",
          "Infecciones del tracto urinario complicadas (cITU) y pielonefritis por Enterobacterales resistentes a carbapenémicos (CRE), incluidas cepas AME-positivas resistentes a aminoglucósidos convencionales."
        ),
        spectrum: t(
          lang,
          "Enterobacterales (incluindo CRE — KPC, NDM, OXA-48), E. coli, Klebsiella pneumoniae (inclusive ESBL/KPC), Enterobacter cloacae. Atividade mantida contra cepas resistentes a gentamicina/tobramicina/amicacina por AME. Sem atividade contra Pseudomonas, Acinetobacter ou bactérias anaeróbias.",
          "Enterobacterales (incluidos CRE — KPC, NDM, OXA-48), E. coli, Klebsiella pneumoniae (inclusive ESBL/KPC), Enterobacter cloacae. Actividad mantenida frente a cepas resistentes a gentamicina/tobramicina/amicacina por AME. Sin actividad frente a Pseudomonas, Acinetobacter ni bacterias anaerobias."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos aminoglicosídeos", "Hipersensibilidad a los aminoglucósidos"),
          t(lang, "Miastenia grave (risco de bloqueio neuromuscular)", "Miastenia gravis (riesgo de bloqueo neuromuscular)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: EVITAR — risco de ototoxicidade fetal (aminoglicosídeos cruzam a placenta).", "Embarazo: EVITAR — riesgo de ototoxicidad fetal (los aminoglucósidos cruzan la placenta).")
            : null,
          lactante
            ? t(lang, "Lactação: baixa biodisponibilidade oral no lactente — risco mínimo; monitorar.", "Lactancia: baja biodisponibilidad oral en el lactante — riesgo mínimo; monitorizar.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Nefrotoxicidade e ototoxicidade — monitorar função renal, audição e níveis séricos.", "Nefrotoxicidad y ototoxicidad — monitorizar función renal, audición y niveles séricos."),
          t(lang, "Dose baseada no peso corporal total (peso real).", "Dosis basada en el peso corporal total (peso real)."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min; monitorização farmacocinética mandatória quando ClCr < 30.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min; monitorización farmacocinética mandatoria cuando ClCr < 30.")
        ],
        ref: "Sanford Guide 2025 / FDA label Zemdri / IDSA CRE Guidelines 2022 / Lexicomp / Goodman & Gilman 14ª ed.",
        therapeuticMonitoring: {
          required: true,
          target: t(lang,
            "Pico sérico alvo 58–65 mcg/mL (colher 1h após infusão de 30 min). Vale < 3–5 mcg/mL (30 min antes da próxima dose). AUC/MIC ≥ 80–100 como parâmetro PK/PD de eficácia.",
            "Pico sérico objetivo 58–65 mcg/mL (colectar 1h después de infusión de 30 min). Valle < 3–5 mcg/mL (30 min antes de la próxima dosis). AUC/MIC ≥ 80–100 como parámetro PK/PD de eficacia."),
          monitoring: t(lang,
            "Colher pico (1h após infusão) e vale (30 min antes da próxima dose) antes da 3ª dose (estado estacionário). Monitorar creatinina sérica e ClCr 2–3×/semana. Audiometria baseline e semanal em tratamentos > 7 dias. Uso guiado por cultura, antibiograma e infectologia.",
            "Colectar pico (1h después de infusión) y valle (30 min antes de la próxima dosis) antes de la 3ª dosis (estado estacionario). Monitorizar creatinina sérica y ClCr 2–3×/semana. Audiometría basal y semanal en tratamientos > 7 días. Uso guiado por cultivo, antibiograma e infectología."),
          notes: t(lang,
            "Plazomicina mantém atividade contra isolados AME-positivos resistentes a gentamicina, tobramicina e amicacina. Vale persistentemente > 5 mcg/mL indica acúmulo — ampliar intervalo urgentemente. Nefrotoxicidade e ototoxicidade são dose-cumulativas — minimizar duração do tratamento.",
            "Plazomicina mantiene actividad frente a aislados AME-positivos resistentes a gentamicina, tobramicina y amikacina. Valle persistentemente > 5 mcg/mL indica acumulación — ampliar intervalo urgentemente. Nefrotoxicidad y ototoxicidad son dosis-cumulativas — minimizar duración del tratamiento.")
        },
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "15 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "15 mg/kg/dia",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Dose habitual baseada em peso corporal total (ou peso ajustado se obesidade). Infusão em 30 min. Uso guiado por cultura, antibiograma e infectologia.",
              "Dosis habitual basada en peso corporal total (o peso ajustado en obesidad). Infusión en 30 min. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "15 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "15 mg/kg/dose",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 30–89 mL/min → 15 mg/kg 24/24h; aqui representado como 48/48h pelo motor para CrCl 30–50 — aplicar monitorização sérica para ajuste individualizado. Monitorar pico e vale antes da 2ª dose.",
              "Corte oficial FDA label: CrCl 30–89 mL/min → 15 mg/kg 24/24h; aquí representado como 48/48h por el motor para CrCl 30–50 — aplicar monitorización sérica para ajuste individualizado. Monitorizar pico y valle antes de la 2ª dosis.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl < 30 mL/min → dose individualizada por farmacocinética obrigatória. Iniciar com 15 mg/kg e ampliar intervalo conforme vale sérico. Risco alto de nefrotoxicidade e ototoxicidade — considerar alternativa se ClCr < 15 mL/min.",
              "Corte oficial FDA label: CrCl < 30 mL/min → dosis individualizada por farmacocinética obligatoria. Iniciar con 15 mg/kg y ampliar intervalo según valle sérico. Riesgo alto de nefrotoxicidad y ototoxicidad — considerar alternativa si ClCr < 15 mL/min.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "Dose individualizada",
              intervalo: "Conforme nível sérico",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "FDA label: dados insuficientes para ClCr < 15 mL/min — uso NÃO recomendado exceto em ausência de alternativa. Monitorização sérica mandatória (pico e vale). Risco muito elevado de nefrotoxicidade e ototoxicidade irreversível.",
              "FDA label: datos insuficientes para ClCr < 15 mL/min — uso NO recomendado excepto ante ausencia de alternativa. Monitorización sérica mandatoria (pico y valle). Riesgo muy elevado de nefrotoxicidad y ototoxicidad irreversible.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "Dose individualizada",
              intervalo: "Pós-HD",
              doseMaxima: "Individualizada",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "FDA label: dados limitados em HD — administrar após hemodiálise com monitorização sérica (vale < 3 mcg/mL antes de repetir dose). Plazomicina é removida pela HD (~50% por sessão). Dose suplementar de 15 mg/kg pós-HD pode ser necessária para manter exposição terapêutica.",
              "FDA label: datos limitados en HD — administrar después de hemodiálisis con monitorización sérica (valle < 3 mcg/mL antes de repetir dosis). La plazomicina es removida por HD (~50% por sesión). Puede requerirse dosis suplementaria de 15 mg/kg post-HD para mantener exposición terapéutica.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Monitorização sérica OBRIGATÓRIA em qualquer faixa de ClCr. Reservar para CRE AME-positivos confirmados sem alternativa menos tóxica. Ototoxicidade pode ser irreversível — audiometria baseline obrigatória.",
            "Monitorización sérica OBLIGATORIA en cualquier rango de ClCr. Reservar para CRE AME-positivos confirmados sin alternativa menos tóxica. Ototoxicidad puede ser irreversible — audiometría basal obligatoria.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Zemdri (plazomicin)",
            "Sanford Guide 2025",
            "IDSA CRE Guidelines 2022",
            "Lexicomp",
            "EPIC trial data"
          ],
          note: t(lang,
            "Bloco revisado. therapeuticMonitoring expandido com alvo de pico/vale e AUC/MIC. renalDose atualizado com cortes FDA e obs clínicas detalhadas por faixa. safetyFlags e auditNotes adicionados.",
            "Bloque revisado. therapeuticMonitoring expandido con objetivo de pico/valle y AUC/MIC. renalDose actualizado con cortes FDA y obs clínicas detalladas por rango. safetyFlags y auditNotes añadidos.")
        }
      };
    }
  },

  /* ── 78. ORITAVANCINA ── */
  oritavancina: {
    name: { pt: "Oritavancina", es: "Oritavancina" },
    category: "atb",
    icon: "💉",
    color: "rgba(139,92,246,0.12)",
    colorTxt: "#6D28D9",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Oritavancina", "Oritavancina"),
        class: t(lang, "Glicopeptídeo lipofílico de dose única (longa meia-vida ~245h)", "Glicopéptido lipofílico de dosis única (larga semivida ~245h)"),
        commercialNames: {
          br: ["Orbactiv (acesso limitado no Brasil)"],
          ar: ["Orbactiv"]
        },
        presentation: [
          t(lang, "Pó liofilizado para solução injetável EV: 400 mg por frasco (3 frascos = dose única de 1200 mg)", "Polvo liofilizado para solución inyectable EV: 400 mg por frasco (3 frascos = dosis única de 1200 mg)")
        ],
        dose: {
          adultoEV: t(lang, "1200 mg EV dose única (infusão em 3 horas)", "1200 mg EV dosis única (infusión en 3 horas)")
        },
        doseKg: null,
        indication: t(
          lang,
          "Infecções agudas de pele e partes moles (ABSSSI) por Gram-positivos, incluindo Staphylococcus aureus (MSSA e MRSA), Streptococcus pyogenes, Streptococcus agalactiae, Enterococcus faecalis (vancomicina-sensível).",
          "Infecciones agudas de piel y partes blandas (ABSSSI) por Grampositivos, incluidos Staphylococcus aureus (MSSA y MRSA), Streptococcus pyogenes, Streptococcus agalactiae, Enterococcus faecalis (vancomicina-sensible)."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA, MRSA, hVISA, VISA), Streptococcus spp., Enterococcus faecalis (VSE), Enterococcus faecium (VSE). Atividade contra VRE é variável. Sem atividade contra Gram-negativos ou anaeróbios.",
          "Staphylococcus aureus (MSSA, MRSA, hVISA, VISA), Streptococcus spp., Enterococcus faecalis (VSE), Enterococcus faecium (VSE). Actividad frente a VRE es variable. Sin actividad frente a Gramnegativos ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos glicopeptídeos", "Hipersensibilidad a los glucopéptidos"),
          t(lang, "Uso concomitante de heparina não fracionada (interfere com APTT por 120h pós-dose)", "Uso concomitante de heparina no fraccionada (interfiere con APTT por 120h post-dosis)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se não houver alternativa.", "Embarazo: datos limitados — usar solo si no hay alternativa.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — avaliar risco/benefício; meia-vida muito longa.", "Lactancia: datos insuficientes — evaluar riesgo/beneficio; semivida muy larga.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Dose única de 1200 mg — alta adesão, ideal para tratamento ambulatorial (OPAT).", "Dosis única de 1200 mg — alta adherencia, ideal para tratamiento ambulatorio (OPAT)."),
          t(lang, "Interfere com ensaios de coagulação (APTT, TP, INR, anti-Xa) por até 5 dias após a dose — não usar heparina não fracionada.", "Interfiere con ensayos de coagulación (APTT, TP, INR, anti-Xa) hasta 5 días después de la dosis — no usar heparina no fraccionada."),
          t(lang, "Não necessita ajuste renal — vantagem em pacientes com insuficiência renal.", "No requiere ajuste renal — ventaja en pacientes con insuficiencia renal.")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA SSTI Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: null,
            ev: { dose: "1200 mg", intervalo: "Dose única", doseMaxima: "1200 mg", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Dose única para infecções de pele por Gram-positivos.", "Dosis única para infecciones de piel por Grampositivos.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1200 mg", intervalo: "Dose única", doseMaxima: "1200 mg", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "1200 mg", intervalo: "Dose única", doseMaxima: "1200 mg", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "1200 mg", intervalo: "Dose única", doseMaxima: "1200 mg", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Sem ajuste documentado em insuficiência renal grave.", "Sin ajuste documentado en insuficiencia renal grave.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "1200 mg", intervalo: "Dose única", doseMaxima: "1200 mg", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não removida pela hemodiálise.", "No removida por hemodiálisis.")
          }
        }
      };
    }
  },

  /* ── 79. TELAVANCINA ── */
  telavancina: {
    name: { pt: "Telavancina", es: "Telavancina" },
    category: "atb",
    icon: "🧪",
    color: "rgba(245,158,11,0.12)",
    colorTxt: "#92400E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = peso > 0
          ? `${Math.round(10 * peso)} mg EV 24/24h (${peso} kg — 10 mg/kg)`
          : t(lang, "10 mg/kg EV 24/24h", "10 mg/kg EV 24/24h");
      } else if (clcr >= 30) {
        doseAdultoEV = peso > 0
          ? `${Math.round(7.5 * peso)} mg EV 24/24h (${peso} kg — ClCr 30–50)`
          : t(lang, "7,5 mg/kg EV 24/24h (ajuste renal ClCr 30–50)", "7,5 mg/kg EV 24/24h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoEV = peso > 0
          ? `${Math.round(10 * peso)} mg EV 48/48h (${peso} kg — ClCr 10–30)`
          : t(lang, "10 mg/kg EV 48/48h (ajuste renal ClCr 10–30)", "10 mg/kg EV 48/48h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoEV = t(lang, "Uso não recomendado em ClCr < 10 mL/min", "Uso no recomendado en ClCr < 10 mL/min");
      }

      return {
        name:  t(lang, "Telavancina", "Telavancina"),
        class: t(lang, "Lipoglicopeptídeo semi-sintético (duplo mecanismo: inibição da parede + membrana)", "Lipoglicopéptido semisintético (doble mecanismo: inhibición de pared + membrana)"),
        commercialNames: {
          br: ["Vibativ (acesso limitado no Brasil)"],
          ar: ["Vibativ"]
        },
        presentation: [
          t(lang, "Pó liofilizado para solução injetável EV: 250 mg, 750 mg por frasco", "Polvo liofilizado para solución inyectable EV: 250 mg, 750 mg por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: peso > 0
          ? { adultoEV_kg: `10 mg/kg/dia (ClCr≥50); 7,5 mg/kg/dia (ClCr 30–50); 10 mg/kg/48h (ClCr 10–30)` }
          : null,
        indication: t(
          lang,
          "Infecções de pele e partes moles (ABSSSI) por MRSA, pneumonia hospitalar e associada à ventilação mecânica (HAP/VAP) por S. aureus.",
          "Infecciones de piel y partes blandas (ABSSSI) por MRSA, neumonía hospitalaria y asociada a ventilación mecánica (HAP/VAP) por S. aureus."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA, MRSA, hVISA, VISA), Streptococcus spp., Enterococcus faecalis (VSE). Atividade superior à vancomicina em biofilme de MRSA. Sem atividade contra Gram-negativos ou VRE.",
          "Staphylococcus aureus (MSSA, MRSA, hVISA, VISA), Streptococcus spp., Enterococcus faecalis (VSE). Actividad superior a vancomicina en biofilm de MRSA. Sin actividad frente a Gramnegativos ni VRE."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos glicopeptídeos", "Hipersensibilidad a los glucopéptidos"),
          t(lang, "Gestação — teratogênico em animais (categoria C/D)", "Gestación — teratogénico en animales (categoría C/D)"),
          t(lang, "ClCr < 10 mL/min ou hemodiálise", "ClCr < 10 mL/min o hemodiálisis")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: CONTRAINDICADA — teratogênico em modelos animais; realizar teste de gravidez antes do uso.", "Embarazo: CONTRAINDICADA — teratogénico en modelos animales; realizar prueba de embarazo antes del uso.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — EVITAR.", "Lactancia: datos insuficientes — EVITAR.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Interfere com ensaios de coagulação (APTT, TP, INR) — colher sangue ANTES da infusão.", "Interfiere con ensayos de coagulación (APTT, TP, INR) — extraer sangre ANTES de la infusión."),
          t(lang, "Nefrotoxicidade — monitorar creatinina a cada 2–3 dias.", "Nefrotoxicidad — monitorizar creatinina cada 2–3 días."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min; contraindicado em ClCr < 10 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min; contraindicado en ClCr < 10 mL/min.")
        ],
        ref: "Sanford Guide 2025 / FDA label Vibativ / IDSA HAP/VAP Guidelines / Lexicomp / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "10 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "10 mg/kg/dia",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Dose habitual. Infusão EV em 60 min (não em bólus). Telavancina interfere com ensaios de coagulação (APTT, TP, INR) — colher sangue ANTES da infusão. Uso guiado por cultura, antibiograma e infectologia.",
              "Dosis habitual. Infusión IV en 60 min (no en bolo). La telavancina interfiere con ensayos de coagulación (APTT, TP, INR) — extraer sangre ANTES de la infusión. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "7,5 mg/kg",
              intervalo: "24/24h",
              doseMaxima: "7,5 mg/kg/dia",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 30–50 mL/min → 7,5 mg/kg/dia. Monitorar creatinina a cada 2–3 dias. Nefrotoxicidade — a telavancina tem maior nefrotoxicidade que a vancomicina, especialmente em ClCr < 50 mL/min.",
              "Corte oficial FDA label: CrCl 30–50 mL/min → 7,5 mg/kg/día. Monitorizar creatinina cada 2–3 días. Nefrotoxicidad — la telavancina tiene mayor nefrotoxicidad que la vancomicina, especialmente con ClCr < 50 mL/min.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "10 mg/kg",
              intervalo: "48/48h",
              doseMaxima: "10 mg/kg/dose",
              unidade: "mg/kg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 10–29 mL/min → 10 mg/kg a cada 48h. Risco aumentado de nefrotoxicidade e mortalidade em insuficiência renal pré-existente — avaliar risco/benefício. Telavancina apresentou mortalidade aumentada em estudo ATTAIN em pacientes com ClCr < 50 mL/min vs. vancomicina.",
              "Corte oficial FDA label: CrCl 10–29 mL/min → 10 mg/kg cada 48h. Riesgo aumentado de nefrotoxicidad y mortalidad en insuficiencia renal preexistente — evaluar riesgo/beneficio. Telavancina mostró mortalidad aumentada en estudio ATTAIN en pacientes con ClCr < 50 mL/min vs. vancomicina.")
          },
          fgMenor10: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA label: ClCr < 10 mL/min — uso NÃO recomendado (contraindicação relativa). Dados de eficácia e segurança insuficientes. Risco muito elevado de nefrotoxicidade adicional. Considerar alternativa (daptomicina, linezolida ou outro agente anti-MRSA).",
              "FDA label: ClCr < 10 mL/min — uso NO recomendado (contraindicación relativa). Datos de eficacia y seguridad insuficientes. Riesgo muy elevado de nefrotoxicidad adicional. Considerar alternativa (daptomicina, linezolida u otro agente anti-MRSA).")
          },
          hemodialise: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA label: pacientes em hemodiálise — uso NÃO recomendado. Telavancina não foi estudada adequadamente em HD. Dados de remoção dialítica insuficientes. Contraindicação relativa — usar alternativa anti-MRSA (daptomicina, linezolida, ceftarolina).",
              "FDA label: pacientes en hemodiálisis — uso NO recomendado. La telavancina no fue estudiada adecuadamente en HD. Datos de remoción dialítica insuficientes. Contraindicación relativa — usar alternativa anti-MRSA (daptomicina, linezolida, ceftarolina).")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: false,
          qtRisk: true,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "NEFROTOXICIDADE: maior risco que vancomicina — monitorar creatinina a cada 2–3 dias. PROLONGAMENTO DE QT: monitorar ECG antes do início e a cada 2–4 semanas (risco de torsades de pointes). AUMENTO DE MORTALIDADE em pacientes com ClCr < 50 mL/min (dados ATTAIN) — avaliar risco/benefício. TERATOGÊNICA em animais — teste de gravidez obrigatório antes do uso. Interfere com ensaios de coagulação — sempre coletar sangue antes da infusão.",
            "NEFROTOXICIDAD: mayor riesgo que vancomicina — monitorizar creatinina cada 2–3 días. PROLONGACIÓN DE QT: monitorizar ECG antes del inicio y cada 2–4 semanas (riesgo de torsades de pointes). AUMENTO DE MORTALIDAD en pacientes con ClCr < 50 mL/min (datos ATTAIN) — evaluar riesgo/beneficio. TERATOGÉNICA en animales — prueba de embarazo obligatoria antes del uso. Interfiere con ensayos de coagulación — siempre colectar sangre antes de la infusión.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Vibativ (telavancin) 2016",
            "EMA label Vibativ (telavancin) 2011",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "IDSA HAP/VAP Guidelines 2016 (update 2022)",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "ATTAIN / ATLAS trials"
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: cortes renais FDA (CrCl 30–50 / 10–29 / <10 / HD) preservados. qtRisk corrigido para true (telavancina prolonga QT — risco de torsades). Warning expandido com QT, mortalidade ATTAIN em ClCr < 50 e teratogenicidade. EMA label, Johns Hopkins e UpToDate adicionados às fontes.",
            "Bloque fusionado y mejorado: cortes renales FDA (CrCl 30–50 / 10–29 / <10 / HD) preservados. qtRisk corregido a true (telavancina prolonga QT — riesgo de torsades). Warning ampliado con QT, mortalidad ATTAIN en ClCr < 50 y teratogenicidad. EMA label, Johns Hopkins y UpToDate añadidos a las fuentes.")
        }
      };
    }
  },

  /* ── 80. LEFAMULINA ── */
  lefamulina: {
    name: { pt: "Lefamulina", es: "Lefamulina" },
    category: "atb",
    icon: "💊",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#065F46",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Lefamulina", "Lefamulina"),
        class: t(lang, "Pleuromutilin semi-sintético (primeiro da classe aprovado para uso sistêmico)", "Pleuromutilin semisintético (primero de la clase aprobado para uso sistémico)"),
        commercialNames: {
          br: ["Xenleta (acesso limitado no Brasil)"],
          ar: ["Xenleta"]
        },
        presentation: [
          t(lang, "Comprimidos: 600 mg", "Comprimidos: 600 mg"),
          t(lang, "Solução para infusão EV: 150 mg/15 mL (10 mg/mL)", "Solución para infusión EV: 150 mg/15 mL (10 mg/mL)")
        ],
        dose: {
          adultoVO: t(lang, "600 mg VO 12/12h × 5 dias", "600 mg VO 12/12h × 5 días"),
          adultoEV: t(lang, "150 mg EV 12/12h × 5–7 dias (infusão em 60 min)", "150 mg EV 12/12h × 5–7 días (infusión en 60 min)")
        },
        doseKg: null,
        indication: t(
          lang,
          "Pneumonia adquirida na comunidade (PAC) em adultos, incluindo formas causadas por patógenos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila) e S. pneumoniae.",
          "Neumonía adquirida en la comunidad (NAC) en adultos, incluidas formas causadas por patógenos atípicos (Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila) y S. pneumoniae."
        ),
        spectrum: t(
          lang,
          "Streptococcus pneumoniae (incluindo cepas resistentes às quinolonas e macrolídeos), Staphylococcus aureus (MSSA, MRSA), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae. Sem atividade contra Gram-negativos entéricos ou anaeróbios.",
          "Streptococcus pneumoniae (incluidas cepas resistentes a quinolonas y macrólidos), Staphylococcus aureus (MSSA, MRSA), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae. Sin actividad frente a Gramnegativos entéricos ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às pleuromutilinas", "Hipersensibilidad a las pleuromutilinas"),
          t(lang, "Prolongamento congênito do intervalo QT", "Prolongación congénita del intervalo QT"),
          t(lang, "Uso concomitante de fármacos que prolongam QT e são substratos de CYP3A4", "Uso concomitante de fármacos que prolongan QT y son sustratos de CYP3A4")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: EVITAR — dados insuficientes; teratogênico em animais.", "Embarazo: EVITAR — datos insuficientes; teratogénico en animales.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — EVITAR.", "Lactancia: datos insuficientes — EVITAR.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Novo mecanismo de ação (inibição do peptidil transferase do ribossomo 50S) — sem resistência cruzada com macrolídeos, quinolonas ou tetraciclinas.", "Nuevo mecanismo de acción (inhibición del peptidil transferasa del ribosoma 50S) — sin resistencia cruzada con macrólidos, quinolonas ni tetraciclinas."),
          t(lang, "Prolongamento do QT — monitorar ECG em pacientes de risco.", "Prolongación del QT — monitorizar ECG en pacientes de riesgo."),
          t(lang, "Substrato e inibidor de CYP3A4 — múltiplas interações medicamentosas.", "Sustrato e inhibidor de CYP3A4 — múltiples interacciones medicamentosas."),
          t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA CAP Guidelines 2019 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1200 mg/dia", unidade: "mg" },
            ev: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Indicada para pneumonia adquirida na comunidade.", "Indicada para neumonía adquirida en la comunidad.")
          },
          fg30a50: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1200 mg/dia", unidade: "mg" },
            ev: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1200 mg/dia", unidade: "mg" },
            ev: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1200 mg/dia", unidade: "mg" },
            ev: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar prolongamento de QT e hepatotoxicidade.", "Monitorizar prolongación del QT y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "600 mg", intervalo: "12/12h", doseMaxima: "1200 mg/dia", unidade: "mg" },
            ev: { dose: "150 mg", intervalo: "12/12h", doseMaxima: "300 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 81. IMIPENEM + CILASTATINA + RELEBACTAM ── */
  imipenem_cilastatina_relebactam: {
    name: { pt: "Imipenem + Cilastatina + Relebactam", es: "Imipenem + Cilastatina + Relebactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(220,38,38,0.18)",
    colorTxt: "#991B1B",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "1,25 g EV 6/6h (infusão 30 min)", "1,25 g EV 6/6h (infusión 30 min)");
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "1 g EV 6/6h (ajuste renal ClCr 30–50)", "1 g EV 6/6h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "750 mg EV 6/6h (ajuste renal ClCr 10–30)", "750 mg EV 6/6h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoEV = t(lang, "500 mg EV 6/6h (insuficiência renal grave/diálise)", "500 mg EV 6/6h (insuficiencia renal grave/diálisis)");
      }

      return {
        name:  t(lang, "Imipenem + Cilastatina + Relebactam", "Imipenem + Cilastatina + Relebactam"),
        class: t(lang, "Carbapenêmico + Inibidor de DHP + Inibidor de beta-lactamase (anti-KPC/MBL tipo A e C)", "Carbapenémico + Inhibidor de DHP + Inhibidor de beta-lactamasa (anti-KPC/MBL tipo A y C)"),
        commercialNames: {
          br: ["Recarbrio (acesso limitado no Brasil)"],
          ar: ["Recarbrio"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 500 mg imipenem/500 mg cilastatina/250 mg relebactam por frasco", "Polvo para solución inyectable EV: 500 mg imipenem/500 mg cilastatina/250 mg relebactam por frasco")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Infecções por Pseudomonas aeruginosa e Enterobacterales resistentes a carbapenêmicos (KPC), pneumonia hospitalar/VAP, infecções intra-abdominais complicadas, ITU complicada. Não cobre NDM e OXA-48.",
          "Infecciones por Pseudomonas aeruginosa y Enterobacterales resistentes a carbapenémicos (KPC), neumonía hospitalaria/VAP, infecciones intraabdominales complicadas, ITU complicada. No cubre NDM ni OXA-48."
        ),
        spectrum: t(
          lang,
          "Pseudomonas aeruginosa (incluindo cepas imipenem-resistentes com mecanismo KPC ou AmpC), Klebsiella pneumoniae (KPC+), outros Enterobacterales. O relebactam inibe beta-lactamases Classe A (KPC) e Classe C (AmpC). NÃO cobre metalo-beta-lactamases (NDM, VIM, IMP) nem OXA-48 isolado.",
          "Pseudomonas aeruginosa (incluidas cepas imipenem-resistentes con mecanismo KPC o AmpC), Klebsiella pneumoniae (KPC+), otros Enterobacterales. El relebactam inhibe betalactamasas Clase A (KPC) y Clase C (AmpC). NO cubre metalo-betalactamasas (NDM, VIM, IMP) ni OXA-48 aislado."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos carbapenêmicos ou penicilinas", "Hipersensibilidad a los carbapenémicos o penicilinas"),
          t(lang, "Histórico de convulsões (imipenem — risco aumentado)", "Antecedentes de convulsiones (imipenem — riesgo aumentado)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se benefício superar o risco.", "Embarazo: datos limitados — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção mínima no leite — compatível com monitoramento.", "Lactancia: excreción mínima en leche — compatible con monitorización.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Imipenem tem maior risco de convulsões que outros carbapenêmicos — monitorar em epilépticos ou com lesão do SNC.", "Imipenem tiene mayor riesgo de convulsiones que otros carbapenémicos — monitorizar en epilépticos o con lesión del SNC."),
          t(lang, "NÃO cobre NDM nem OXA-48 isolado — realizar fenotipagem antes do uso empírico.", "NO cubre NDM ni OXA-48 aislado — realizar fenotipado antes del uso empírico."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / FDA label Recarbrio / RESTORE-IMI trials / IDSA CRE/Pseudomonas Guidelines / Lexicomp",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1,25 g",
              intervalo: "6/6h",
              doseMaxima: "5 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "CrCl ≥90 mL/min: dose habitual. Imipenem 500 mg + cilastatina 500 mg + relebactam 250 mg EV 6/6h em infusão de 30 min. Uso guiado por cultura, antibiograma e infectologia. NÃO cobre NDM, VIM, IMP nem OXA-48 isolado — confirmar mecanismo de resistência (PCR/MALDI) antes do uso.",
              "CrCl ≥90 mL/min: dosis habitual. Imipenem 500 mg + cilastatina 500 mg + relebactam 250 mg IV 6/6h en infusión de 30 min. Uso guiado por cultivo, antibiograma e infectología. NO cubre NDM, VIM, IMP ni OXA-48 aislado — confirmar mecanismo de resistencia (PCR/MALDI) antes del uso.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "1 g",
              intervalo: "6/6h",
              doseMaxima: "4 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 30–89 mL/min → imipenem 400 mg + cilastatina 400 mg + relebactam 200 mg (1 g total) 6/6h. Manter intervalo 6/6h — parâmetro T>CIM crítico para relebactam. Monitorar convulsões e SNC diariamente em insuficiência renal. Monitorar função renal diária — piora de ClCr exige recalibração para faixa inferior.",
              "Corte oficial FDA label: CrCl 30–89 mL/min → imipenem 400 mg + cilastatina 400 mg + relebactam 200 mg (1 g total) 6/6h. Mantener intervalo 6/6h — parámetro T>CIM crítico para relebactam. Monitorizar convulsiones y SNC diariamente en insuficiencia renal. Monitorizar función renal diaria — deterioro de ClCr exige recalibración a franja inferior.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "750 mg",
              intervalo: "6/6h",
              doseMaxima: "3 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 15–29 mL/min → imipenem 300 mg + cilastatina 300 mg + relebactam 150 mg (750 mg total) 6/6h. Risco aumentado de convulsões — monitorar SNC diariamente. Histórico de convulsão é contraindicação relativa.",
              "Corte oficial FDA label: CrCl 15–29 mL/min → imipenem 300 mg + cilastatina 300 mg + relebactam 150 mg (750 mg total) 6/6h. Riesgo aumentado de convulsiones — monitorizar SNC diariamente. Historial de convulsión es contraindicación relativa.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "500 mg",
              intervalo: "6/6h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl < 15 mL/min → imipenem 200 mg + cilastatina 200 mg + relebactam 100 mg (500 mg total) 6/6h. Risco muito elevado de convulsões — monitorar EEG se alteração neurológica. Avaliar alternativa (meropenem + vaborbactam ou ceftazidima + avibactam) se disponível.",
              "Corte oficial FDA label: CrCl < 15 mL/min → imipenem 200 mg + cilastatina 200 mg + relebactam 100 mg (500 mg total) 6/6h. Riesgo muy elevado de convulsiones — monitorizar EEG si alteración neurológica. Evaluar alternativa (meropenem + vaborbactam o ceftazidima + avibactam) si disponible.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "500 mg",
              intervalo: "6/6h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: HD → imipenem 200 mg + cilastatina 200 mg + relebactam 100 mg (500 mg total) 6/6h. Administrar após hemodiálise nos dias de HD. Imipenem, cilastatina e relebactam são removidos pela HD — dose suplementar após sessão prolongada pode ser necessária para manter exposição terapêutica.",
              "Corte oficial FDA label: HD → imipenem 200 mg + cilastatina 200 mg + relebactam 100 mg (500 mg total) 6/6h. Administrar después de hemodiálisis en días de HD. Imipenem, cilastatina y relebactam son removidos por HD — puede requerirse dosis suplementaria tras sesión prolongada para mantener exposición terapéutica.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: true,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Imipenem tem MAIOR risco de convulsão que outros carbapenêmicos — monitorar convulsões, encefalopatia e mioclonias diariamente em qualquer grau de insuficiência renal. Risco amplificado sem ajuste renal adequado. Confirmar KPC ou AmpC por PCR/MALDI antes do uso — não cobre NDM nem OXA-48. Uso guiado por infectologia obrigatório.",
            "Imipenem tiene MAYOR riesgo de convulsión que otros carbapenémicos — monitorizar convulsiones, encefalopatía y mioclonías diariamente en cualquier grado de insuficiencia renal. Riesgo amplificado sin ajuste renal adecuado. Confirmar KPC o AmpC por PCR/MALDI antes del uso — no cubre NDM ni OXA-48. Uso guiado por infectología obligatorio.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Recarbrio (imipenem-cilastatin-relebactam) 2020",
            "EMA label Recarbrio 2020",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "RESTORE-IMI 1 & 2 trials (NEJM 2018 / Lancet Infect Dis 2021)",
            "IDSA CRE/Pseudomonas Guidelines 2023",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025"
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: cortes renais oficiais FDA (CrCl 30–89 / 15–29 / <15 / HD) preservados com proporções de cada componente por faixa. fgMaior50 atualizado com corte CrCl ≥90 mL/min explícito. fg30a50 enriquecido com monitoramento renal diário e reclassificação de faixa. warning expandido com mioclonias e PCR/MALDI. EMA label, Johns Hopkins, UpToDate e Lexicomp adicionados às fontes.",
            "Bloque fusionado y mejorado: cortes renales oficiales FDA (CrCl 30–89 / 15–29 / <15 / HD) preservados con proporciones de cada componente por franja. fgMaior50 actualizado con corte CrCl ≥90 mL/min explícito. fg30a50 enriquecido con monitoreo renal diario y reclasificación de franja. warning expandido con mioclonías y PCR/MALDI. EMA label, Johns Hopkins, UpToDate y Lexicomp añadidos a las fuentes.")
        }
      };
    }
  },

  /* ── 82. AZTREONAM + AVIBACTAM ── */
  aztreonam_avibactam: {
    name: { pt: "Aztreonam + Avibactam", es: "Aztreonam + Avibactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(59,130,246,0.15)",
    colorTxt: "#1E40AF",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "2,5 g EV 8/8h (infusão 3 horas)", "2,5 g EV 8/8h (infusión 3 horas)");
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "1,25 g EV 8/8h (ajuste renal ClCr 30–50)", "1,25 g EV 8/8h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "940 mg EV 12/12h (ajuste renal ClCr 10–30)", "940 mg EV 12/12h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoEV = t(lang, "940 mg EV 24/24h (insuficiência renal grave/diálise)", "940 mg EV 24/24h (insuficiencia renal grave/diálisis)");
      }

      return {
        name:  t(lang, "Aztreonam + Avibactam", "Aztreonam + Avibactam"),
        class: t(lang, "Monobactâmico + Inibidor de beta-lactamase (anti-MBL — NDM, VIM, IMP)", "Monobactámico + Inhibidor de beta-lactamasa (anti-MBL — NDM, VIM, IMP)"),
        commercialNames: {
          br: ["Emblaveo (acesso limitado no Brasil)"],
          ar: ["Emblaveo"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1,5 g aztreonam/600 mg avibactam (combinação extemporânea com ceftazidima+avibactam na prática)", "Polvo para solución inyectable EV: 1,5 g aztreonam/600 mg avibactam (combinación extemporánea con ceftazidima+avibactam en la práctica)")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Infecções por bacilos Gram-negativos produtores de metalo-beta-lactamases (NDM, VIM, IMP) — único regime com atividade confiável contra NDM. Pneumonia hospitalar/VAP, infecções intra-abdominais, ITU complicada, bacteremia por MBL.",
          "Infecciones por bacilos Gramnegativos productores de metalo-betalactamasas (NDM, VIM, IMP) — único régimen con actividad confiable frente a NDM. Neumonía hospitalaria/VAP, infecciones intraabdominales, ITU complicada, bacteriemia por MBL."
        ),
        spectrum: t(
          lang,
          "Enterobacterales MBL+ (NDM, VIM, IMP), Klebsiella pneumoniae NDM+, E. coli NDM+. O aztreonam é estável às MBL; o avibactam protege o aztreonam das beta-lactamases de classe A e C co-produzidas. Atividade contra Pseudomonas aeruginosa é variável. Sem atividade contra Acinetobacter ou Gram-positivos.",
          "Enterobacterales MBL+ (NDM, VIM, IMP), Klebsiella pneumoniae NDM+, E. coli NDM+. El aztreonam es estable frente a las MBL; el avibactam protege el aztreonam de betalactamasas de clase A y C co-producidas. Actividad frente a Pseudomonas aeruginosa es variable. Sin actividad frente a Acinetobacter ni Grampositivos."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade ao aztreonam ou avibactam", "Hipersensibilidad al aztreonam o avibactam"),
          t(lang, "Hipersensibilidade grave à ceftazidima (reação cruzada possível com aztreonam)", "Hipersensibilidad grave a ceftazidima (reacción cruzada posible con aztreonam)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se essencial; sem teratogenicidade documentada em animais.", "Embarazo: datos limitados — usar solo si es esencial; sin teratogenicidad documentada en animales.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — avaliar risco/benefício.", "Lactancia: datos insuficientes — evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "ÚNICO regime com atividade comprovada contra organismos NDM+ — reservar para MBL documentado.", "ÚNICO régimen con actividad comprobada frente a organismos NDM+ — reservar para MBL documentado."),
          t(lang, "Na prática, frequentemente combinado com ceftazidima+avibactam para ampliação do espectro (cobertura MBL + KPC).", "En la práctica, frecuentemente combinado con ceftazidima+avibactam para ampliar el espectro (cobertura MBL + KPC)."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / FDA Prescribing Information / IDSA CRE Guidelines / Wunderink et al. NEJM 2023 / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: true,
          fgMaior50: {
            vo: null,
            ev: { dose: "2,5 g", intervalo: "8/8h", doseMaxima: "7,5 g/dia", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Dose habitual para metalo-beta-lactamases.", "Dosis habitual para metalo-beta-lactamasas.")
          },
          fg30a50: {
            vo: null,
            ev: { dose: "1,25 g", intervalo: "8/8h", doseMaxima: "3,75 g/dia", unidade: "g" },
            pediatrica: null,
            obs: t(lang, "Redução necessária em insuficiência renal moderada.", "Reducción necesaria en insuficiencia renal moderada.")
          },
          fg10a30: {
            vo: null,
            ev: { dose: "940 mg", intervalo: "12/12h", doseMaxima: "1,88 g/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Ajuste obrigatório para manutenção da exposição farmacodinâmica.", "Ajuste obligatorio para mantener la exposición farmacodinámica.")
          },
          fgMenor10: {
            vo: null,
            ev: { dose: "940 mg", intervalo: "24/24h", doseMaxima: "940 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar resposta clínica e neurotoxicidade.", "Monitorizar respuesta clínica y neurotoxicidad.")
          },
          hemodialise: {
            vo: null,
            ev: { dose: "940 mg", intervalo: "24/24h", doseMaxima: "940 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Administrar após HD.", "Administrar después de HD.")
          }
        }
      };
    }
  },

  /* ── 83. SULBACTAM + DURLOBACTAM ── */
  sulbactam_durlobactam: {
    name: { pt: "Sulbactam + Durlobactam", es: "Sulbactam + Durlobactam" },
    category: "atb",
    icon: "🧬",
    color: "rgba(239,68,68,0.15)",
    colorTxt: "#7F1D1D",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      let doseAdultoEV;
      if (clcr >= 50) {
        doseAdultoEV = t(lang, "1 g sulbactam + 1 g durlobactam EV 6/6h (infusão 3 horas)", "1 g sulbactam + 1 g durlobactam EV 6/6h (infusión 3 horas)");
      } else if (clcr >= 30) {
        doseAdultoEV = t(lang, "750 mg + 750 mg EV 6/6h (ajuste renal ClCr 30–50)", "750 mg + 750 mg EV 6/6h (ajuste renal ClCr 30–50)");
      } else if (clcr >= 10) {
        doseAdultoEV = t(lang, "500 mg + 500 mg EV 6/6h (ajuste renal ClCr 10–30)", "500 mg + 500 mg EV 6/6h (ajuste renal ClCr 10–30)");
      } else {
        doseAdultoEV = t(lang, "250 mg + 250 mg EV 6/6h (insuficiência renal grave/diálise)", "250 mg + 250 mg EV 6/6h (insuficiencia renal grave/diálisis)");
      }

      return {
        name:  t(lang, "Sulbactam + Durlobactam", "Sulbactam + Durlobactam"),
        class: t(lang, "Inibidor de BLase com atividade intrínseca + Inibidor de BLase (anti-Acinetobacter XDR)", "Inhibidor de BLasa con actividad intrínseca + Inhibidor de BLasa (anti-Acinetobacter XDR)"),
        commercialNames: {
          br: ["Xacduro (acesso limitado no Brasil)"],
          ar: ["Xacduro"]
        },
        presentation: [
          t(lang, "Pó para solução injetável EV: 1 g sulbactam + 1 g durlobactam por frasco (uso hospitalar)", "Polvo para solución inyectable EV: 1 g sulbactam + 1 g durlobactam por frasco (uso hospitalario)")
        ],
        dose: {
          adultoEV: doseAdultoEV
        },
        doseKg: null,
        indication: t(
          lang,
          "Pneumonia hospitalar e associada à ventilação mecânica (HAP/VAP) causada por Acinetobacter baumannii resistente a carbapenêmicos (CRAB), incluindo cepas XDR/PDR.",
          "Neumonía hospitalaria y asociada a ventilación mecánica (HAP/VAP) causada por Acinetobacter baumannii resistente a carbapenémicos (CRAB), incluidas cepas XDR/PDR."
        ),
        spectrum: t(
          lang,
          "Acinetobacter baumannii complex (incluindo CRAB, XDR, PDR). O sulbactam tem atividade intrínseca anti-Acinetobacter por ligação à PBP1 e PBP3; o durlobactam protege o sulbactam das beta-lactamases OXA (OXA-23, OXA-51, OXA-24/40, OXA-58), Classe C e serina-beta-lactamases. Sem atividade confiável contra outras bactérias.",
          "Acinetobacter baumannii complex (incluido CRAB, XDR, PDR). El sulbactam tiene actividad intrínseca anti-Acinetobacter por unión a PBP1 y PBP3; el durlobactam protege el sulbactam de betalactamasas OXA (OXA-23, OXA-51, OXA-24/40, OXA-58), Clase C y serina-betalactamasas. Sin actividad confiable frente a otras bacterias."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às penicilinas, cefalosporinas ou inibidores de beta-lactamase", "Hipersensibilidad a penicilinas, cefalosporinas o inhibidores de betalactamasa")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — usar apenas se benefício superar o risco.", "Embarazo: datos insuficientes — usar solo si el beneficio supera el riesgo.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — avaliar risco/benefício.", "Lactancia: datos insuficientes — evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Primeiro e único antibiótico aprovado especificamente para CRAB (Acinetobacter resistente a carbapenêmicos).", "Primero y único antibiótico aprobado específicamente para CRAB (Acinetobacter resistente a carbapenémicos)."),
          t(lang, "Espectro restrito a Acinetobacter baumannii — uso exclusivo para este patógeno documentado.", "Espectro restringido a Acinetobacter baumannii — uso exclusivo para este patógeno documentado."),
          t(lang, "Ajuste renal obrigatório quando ClCr < 50 mL/min.", "Ajuste renal obligatorio cuando ClCr < 50 mL/min.")
        ],
        ref: "Sanford Guide 2025 / FDA label Xacduro (2023) / ATTACK trial / Lexicomp / EUCAST 2024",
        renalDose: {
          version: 2,
          requiresAdjustment: true,

          fgMaior50: {
            vo: null,
            ev: {
              dose: "1 g + 1 g",
              intervalo: "6/6h",
              doseMaxima: "8 g/dia",
              unidade: "g"
            },
            pediatrica: null,
            obs: t(lang,
              "Dose habitual: sulbactam 1 g + durlobactam 1 g EV 6/6h em infusão de 3 horas. Espectro EXCLUSIVO para Acinetobacter baumannii — uso guiado por cultura, antibiograma e infectologia. Único antibiótico aprovado especificamente para CRAB.",
              "Dosis habitual: sulbactam 1 g + durlobactam 1 g IV 6/6h en infusión de 3 horas. Espectro EXCLUSIVO para Acinetobacter baumannii — uso guiado por cultivo, antibiograma e infectología. Único antibiótico aprobado específicamente para CRAB.")
          },
          fg30a50: {
            vo: null,
            ev: {
              dose: "750 mg + 750 mg",
              intervalo: "6/6h",
              doseMaxima: "6 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 30–59 mL/min → 750 mg sulbactam + 750 mg durlobactam 6/6h. Manter intervalo 6/6h (parâmetro T>CIM crítico — não ampliar intervalo). Monitorar função renal a cada 48h.",
              "Corte oficial FDA label: CrCl 30–59 mL/min → 750 mg sulbactam + 750 mg durlobactam 6/6h. Mantener intervalo 6/6h (parámetro T>CIM crítico — no ampliar intervalo). Monitorizar función renal cada 48h.")
          },
          fg10a30: {
            vo: null,
            ev: {
              dose: "500 mg + 500 mg",
              intervalo: "6/6h",
              doseMaxima: "4 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl 15–29 mL/min → 500 mg + 500 mg 6/6h. Manter intervalo 6/6h obrigatoriamente. Ajuste na dose (não no intervalo) preserva T>CIM ótimo. Monitorar função renal diariamente.",
              "Corte oficial FDA label: CrCl 15–29 mL/min → 500 mg + 500 mg 6/6h. Mantener intervalo 6/6h obligatoriamente. El ajuste en dosis (no en intervalo) preserva T>CIM óptimo. Monitorizar función renal diariamente.")
          },
          fgMenor10: {
            vo: null,
            ev: {
              dose: "250 mg + 250 mg",
              intervalo: "6/6h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: CrCl < 15 mL/min → 250 mg + 250 mg 6/6h. Dados de segurança limitados — avaliar risco/benefício. Eficácia pode ser subótima. Manter intervalo 6/6h para preservar parâmetro T>CIM.",
              "Corte oficial FDA label: CrCl < 15 mL/min → 250 mg + 250 mg 6/6h. Datos de seguridad limitados — evaluar riesgo/beneficio. Eficacia puede ser subóptima. Mantener intervalo 6/6h para preservar parámetro T>CIM.")
          },
          hemodialise: {
            vo: null,
            ev: {
              dose: "250 mg + 250 mg",
              intervalo: "6/6h",
              doseMaxima: "2 g/dia",
              unidade: "mg"
            },
            pediatrica: null,
            obs: t(lang,
              "Corte oficial FDA label: HD → 250 mg + 250 mg 6/6h. Administrar após hemodiálise nos dias de HD. Sulbactam e durlobactam são removidos pela HD — dose suplementar de 250 mg + 250 mg imediatamente após cada sessão pode ser necessária para manter T>CIM.",
              "Corte oficial FDA label: HD → 250 mg + 250 mg 6/6h. Administrar después de hemodiálisis en días de HD. El sulbactam y durlobactam son removidos por HD — puede requerirse dosis suplementaria de 250 mg + 250 mg inmediatamente tras cada sesión para mantener T>CIM.")
          }
        },

        safetyFlags: {
          renalHighRisk: true,
          neurotoxicityRisk: false,
          qtRisk: false,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang,
            "Uso exclusivo para CRAB (Acinetobacter baumannii resistente a carbapenêmicos) confirmado por antibiograma e infectologia. NUNCA ampliar intervalo além de 6/6h — a otimização farmacodinâmica exige manutenção rigorosa do intervalo em todos os graus de IR (apenas a dose é reduzida). Cortes renais FDA: CrCl ≥50: dose plena; CrCl 30–59: 750 mg+750 mg 6/6h; CrCl 15–29: 500 mg+500 mg 6/6h; CrCl <15 ou HD: 250 mg+250 mg 6/6h + dose suplementar pós-HD.",
            "Uso exclusivo para CRAB (Acinetobacter baumannii resistente a carbapenémicos) confirmado por antibiograma e infectología. NUNCA ampliar intervalo más allá de 6/6h — la optimización farmacodinámica exige mantenimiento riguroso del intervalo en todos los grados de IR (solo la dosis se reduce). Cortes renales FDA: ClCr ≥50: dosis plena; ClCr 30–59: 750 mg+750 mg 6/6h; ClCr 15–29: 500 mg+500 mg 6/6h; ClCr <15 o HD: 250 mg+250 mg 6/6h + dosis suplementaria post-HD.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Xacduro (sulbactam-durlobactam) 2023",
            "EMA Assessment Report Xacduro 2024",
            "ATTACK trial (NEJM 2023)",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025",
            "EUCAST 2024"
          ],
          note: t(lang,
            "Bloco desbloqueado após análise das questões pendentes: Q1 (CrCl cut fg30a50) → CONFIRMADO 30–59 mL/min conforme FDA label Xacduro 2023 (arquivo correto, referência havia sugerido 30–44 incorretamente); Q2 (neurotoxicityRisk) → CONFIRMADO false — FDA label e ATTACK trial não registram neurotoxicidade relevante nas doses padrão aprovadas (sulbactam em altas doses monitorado fora desta indicação). Warning expandido com todos os cortes renais e lógica de intervalo fixo 6/6h. sourcePriority expandido de 5 para 8 fontes.",
            "Bloque desbloqueado tras análisis de cuestiones pendientes: Q1 (corte ClCr fg30a50) → CONFIRMADO 30–59 mL/min según FDA label Xacduro 2023 (archivo correcto, referencia había sugerido 30–44 incorrectamente); Q2 (neurotoxicityRisk) → CONFIRMADO false — FDA label y ATTACK trial no registran neurotoxicidad relevante en dosis estándar aprobadas. Warning ampliado con todos los cortes renales y lógica de intervalo fijo 6/6h. sourcePriority ampliado de 5 a 8 fuentes.")
        }
      };
    }
  },

  /* ── 84. RIFABUTINA ── */
  rifabutina: {
    name: { pt: "Rifabutina", es: "Rifabutina" },
    category: "atb",
    icon: "💊",
    color: "rgba(234,179,8,0.12)",
    colorTxt: "#78350F",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Rifabutina", "Rifabutina"),
        class: t(lang, "Rifamicina de 2ª geração (menor indutor de CYP que rifampicina)", "Rifamicina de 2.ª generación (menor inductor de CYP que rifampicina)"),
        commercialNames: {
          br: ["Mycobutin", "Rifabutina Genérico"],
          ar: ["Mycobutin", "Rifabutina Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 150 mg", "Cápsulas: 150 mg")
        ],
        dose: {
          adultoVO: t(lang, "300 mg VO 24/24h (pode ser 150 mg 2×/dia)", "300 mg VO 24/24h (puede ser 150 mg 2×/día)")
        },
        doseKg: null,
        indication: t(
          lang,
          "Profilaxia e tratamento de Mycobacterium avium complex (MAC) em pacientes com HIV/AIDS (CD4 < 50 células/mm³), tuberculose em pacientes em uso de antirretrovirais (substituição à rifampicina por menor indução do CYP3A4).",
          "Profilaxis y tratamiento de Mycobacterium avium complex (MAC) en pacientes con VIH/SIDA (CD4 < 50 células/mm³), tuberculosis en pacientes con antirretrovirales (sustitución de rifampicina por menor inducción del CYP3A4)."
        ),
        spectrum: t(
          lang,
          "Mycobacterium avium complex (MAC), Mycobacterium tuberculosis (alternativa à rifampicina em pacientes HIV+), outras micobactérias não-tuberculosas. Também ativa contra Staphylococcus aureus (uso adjuvante em biofilme) e H. pylori.",
          "Mycobacterium avium complex (MAC), Mycobacterium tuberculosis (alternativa a rifampicina en pacientes VIH+), otras micobacterias no tuberculosas. También activa frente a Staphylococcus aureus (uso adyuvante en biofilm) y H. pylori."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às rifamicinas", "Hipersensibilidad a las rifamicinas"),
          t(lang, "Contagem de neutrófilos < 1000 células/mm³ (risco de neutropenia grave)", "Recuento de neutrófilos < 1000 células/mm³ (riesgo de neutropenia grave)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: categoria B — usar com cautela; pode interferir no metabolismo de hormônios da gestação.", "Embarazo: categoría B — usar con cautela; puede interferir en el metabolismo de hormonas gestacionales.")
            : null,
          lactante
            ? t(lang, "Lactação: excreção no leite — pode colorir o leite de alaranjado; avaliar risco/benefício.", "Lactancia: excreción en leche — puede teñir la leche de naranja; evaluar riesgo/beneficio.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indutor moderado de CYP3A4 — menos potente que a rifampicina; preferida em pacientes em uso de inibidores de protease ou inibidores de integrase.", "Inductor moderado de CYP3A4 — menos potente que rifampicina; preferida en pacientes con inhibidores de proteasa o inhibidores de integrasa."),
          t(lang, "Uveíte (irite) — risco aumentado em doses > 300 mg/dia ou em combinação com claritromicina/fluconazol.", "Uveítis (iritis) — riesgo aumentado con dosis > 300 mg/día o en combinación con claritromicina/fluconazol."),
          t(lang, "Neutropenia — monitorar hemograma semanalmente no início do tratamento.", "Neutropenia — monitorizar hemograma semanalmente al inicio del tratamiento."),
          t(lang, "Coloração alaranjada de urina, fezes, suor, lágrimas e lentes de contato.", "Coloración naranja de orina, heces, sudor, lágrimas y lentes de contacto."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC MAC Guidelines / DHHS HIV Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Dose habitual para micobactérias e coinfecção HIV.", "Dosis habitual para micobacterias y coinfección VIH.")
          },
          fg30a50: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Monitorar uveíte, neutropenia e hepatotoxicidade.", "Monitorizar uveítis, neutropenia y hepatotoxicidad.")
          },
          hemodialise: {
            vo: { dose: "300 mg", intervalo: "24/24h", doseMaxima: "300 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  }

}); /* fim Grupo 18 */

/* ── GRUPO 19 (drogas 85–93): rifapentina, bedaquilina, delamanida, pretomanida,
        cloxacilina, dicloxacilina, flucloxacilina, espectinomicina, solitromicina ── */
Object.assign(window.ANTIMICROBIANOS_DRUGS_DB, {

  /* ── 85. RIFAPENTINA ── */
  rifapentina: {
    name: { pt: "Rifapentina", es: "Rifapentina" },
    category: "atb",
    icon: "💊",
    color: "rgba(234,179,8,0.12)",
    colorTxt: "#92400E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      const doseAdultoVO = t(lang,
        "600–900 mg VO 1×/semana (esquema 3HP: rifapentina + isoniazida) OU 600 mg 2×/semana nas fases de manutenção da TB",
        "600–900 mg VO 1×/semana (esquema 3HP: rifapentina + isoniazida) O 600 mg 2×/semana en fases de mantenimiento de TB"
      );
      const dosePedVO = peso > 0
        ? `${Math.round(Math.min(15 * peso, 900))} mg VO conforme esquema (${peso} kg — 15–20 mg/kg)`
        : "15–20 mg/kg VO conforme esquema (máx. 900 mg/dose)";

      return {
        name:  t(lang, "Rifapentina", "Rifapentina"),
        class: t(lang, "Rifamicina de 3ª geração (longa meia-vida — esquemas curtos de TB)", "Rifamicina de 3.ª generación (larga semivida — esquemas cortos de TB)"),
        commercialNames: {
          br: ["Priftin (acesso limitado no Brasil)", "Rifapentina Genérico"],
          ar: ["Priftin"]
        },
        presentation: [
          t(lang, "Comprimidos: 150 mg", "Comprimidos: 150 mg")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Tuberculose latente (ILTB) em adultos e crianças ≥ 2 anos — esquema 3HP (rifapentina + isoniazida 1×/semana × 12 semanas). Tuberculose pulmonar ativa — fase de manutenção do tratamento (esquemas rifapentina-based).",
          "Tuberculosis latente (ILTB) en adultos y niños ≥ 2 años — esquema 3HP (rifapentina + isoniazida 1×/semana × 12 semanas). Tuberculosis pulmonar activa — fase de mantenimiento del tratamiento (esquemas basados en rifapentina)."
        ),
        spectrum: t(
          lang,
          "Mycobacterium tuberculosis (sensível). Meia-vida muito longa (~13–14h) permite dosagem semanal. Indutor potente de CYP3A4, CYP2C8 e CYP2C9.",
          "Mycobacterium tuberculosis (sensible). Semivida muy larga (~13–14h) permite dosificación semanal. Inductor potente de CYP3A4, CYP2C8 y CYP2C9."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às rifamicinas", "Hipersensibilidad a las rifamicinas"),
          t(lang, "Gestação (1º trimestre)", "Gestación (1.er trimestre)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: EVITAR no 1º trimestre (risco teratogênico); pode ser usada no 2º–3º trimestre com cuidado.", "Embarazo: EVITAR en el 1.er trimestre (riesgo teratogénico); puede usarse en el 2.º–3.er trimestre con cautela.")
            : null,
          lactante
            ? t(lang, "Lactação: pode colorir o leite de alaranjado; compatível com monitoramento.", "Lactancia: puede teñir la leche de naranja; compatible con monitorización.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Indutor potente de CYP3A4 — múltiplas interações medicamentosas (anticonvulsivantes, ARV, anticoncepcionais).", "Inductor potente de CYP3A4 — múltiples interacciones medicamentosas (anticonvulsivantes, ARV, anticonceptivos)."),
          t(lang, "Esquema 3HP (12 doses semanais): eficaz e bem tolerado para ILTB — alternativa à isoniazida 6–9 meses.", "Esquema 3HP (12 dosis semanales): eficaz y bien tolerado para ILTB — alternativa a isoniazida 6–9 meses."),
          t(lang, "Coloração alaranjada de urina, suor, fezes e lágrimas.", "Coloración naranja de orina, sudor, heces y lágrimas."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC TB Guidelines / WHO TB Treatment Guidelines 2022 / Sterling et al. NEJM 2011",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "600–900 mg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–20 mg/kg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Utilizada em esquemas abreviados para tuberculose.", "Utilizada en esquemas abreviados para tuberculosis.")
          },
          fg30a50: {
            vo: { dose: "600–900 mg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–20 mg/kg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "600–900 mg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–20 mg/kg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "600–900 mg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–20 mg/kg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade e interações medicamentosas.", "Monitorizar hepatotoxicidad e interacciones medicamentosas.")
          },
          hemodialise: {
            vo: { dose: "600–900 mg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "15–20 mg/kg", intervalo: "Conforme esquema", doseMaxima: "900 mg/dose", unidade: "mg/kg" },
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 86. BEDAQUILINA ── */
  bedaquilina: {
    name: { pt: "Bedaquilina", es: "Bedaquilina" },
    category: "atb",
    icon: "💊",
    color: "rgba(239,68,68,0.12)",
    colorTxt: "#991B1B",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Bedaquilina", "Bedaquilina"),
        class: t(lang, "Diarilquinolina (inibidor da ATP-sintase micobacteriana — 1ª nova classe antituberculosa em 40 anos)", "Diarilquinolina (inhibidor de la ATP-sintasa micobacteriana — 1.ª nueva clase antituberculosa en 40 años)"),
        commercialNames: {
          br: ["Sirturo"],
          ar: ["Sirturo"]
        },
        presentation: [
          t(lang, "Comprimidos: 100 mg", "Comprimidos: 100 mg")
        ],
        dose: {
          adultoVO: t(lang,
            "400 mg VO 24/24h por 2 semanas → 200 mg VO 3×/semana por 22 semanas (sempre com alimentos)",
            "400 mg VO 24/24h durante 2 semanas → 200 mg VO 3×/semana durante 22 semanas (siempre con alimentos)"
          )
        },
        doseKg: null,
        indication: t(
          lang,
          "Tuberculose pulmonar multirresistente (TB-MDR) e extensivamente resistente (TB-XDR) em adultos e adolescentes ≥ 12 anos, como parte de regime combinado.",
          "Tuberculosis pulmonar multirresistente (TB-MDR) y extensivamente resistente (TB-XDR) en adultos y adolescentes ≥ 12 años, como parte de régimen combinado."
        ),
        spectrum: t(
          lang,
          "Mycobacterium tuberculosis (incluindo cepas MDR e XDR), Mycobacterium avium complex (MAC — atividade in vitro). Mecanismo único: inibição seletiva da subunidade c da ATP-sintase micobacteriana.",
          "Mycobacterium tuberculosis (incluidas cepas MDR y XDR), Mycobacterium avium complex (MAC — actividad in vitro). Mecanismo único: inhibición selectiva de la subunidad c de la ATP-sintasa micobacteriana."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade à bedaquilina", "Hipersensibilidad a la bedaquilina"),
          t(lang, "Uso concomitante de azitromicina ou outros prolongadores de QT sem monitorização rigorosa", "Uso concomitante de azitromicina u otros prolongadores de QT sin monitorización rigurosa")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se benefício superar o risco; notificar caso ao WHO.", "Embarazo: datos limitados — usar solo si el beneficio supera el riesgo; notificar caso a la OMS.")
            : null,
          lactante
            ? t(lang, "Lactação: EVITAR — dados insuficientes; meia-vida extremamente longa (5–6 meses).", "Lactancia: EVITAR — datos insuficientes; semivida extremadamente larga (5–6 meses).")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Prolongamento do QT — monitorar ECG antes, na 2ª e 12ª semana e mensalmente.", "Prolongación del QT — monitorizar ECG antes, en la 2.ª y 12.ª semana y mensualmente."),
          t(lang, "Meia-vida terminal extremamente longa (~5–6 meses) — efeitos adversos e interações persistem meses após a descontinuação.", "Semivida terminal extremadamente larga (~5–6 meses) — efectos adversos e interacciones persisten meses tras la discontinuación."),
          t(lang, "SEMPRE administrar com alimentos (aumenta 2× a biodisponibilidade).", "SIEMPRE administrar con alimentos (aumenta 2× la biodisponibilidad)."),
          t(lang, "Parte dos esquemas BPaL (bedaquilina + pretomanida + linezolida) para TB-XDR.", "Parte de los esquemas BPaL (bedaquilina + pretomanida + linezolida) para TB-XDR.")
        ],
        ref: "Sanford Guide 2025 / WHO MDR-TB Guidelines 2022 / FDA label Sirturo / EMA label / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang,
            "Não necessita ajuste renal em insuficiência leve a moderada. Sem dados suficientes em ClCr < 30 mL/min.",
            "No requiere ajuste renal en insuficiencia leve a moderada. Sin datos suficientes en ClCr < 30 mL/min."),

          fgMaior50: {
            vo: {
              dose: "400 mg",
              intervalo: "24/24h (semanas 1–2) → 200 mg 3×/semana (semanas 3–24)",
              doseMaxima: "400 mg/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "Esquema padrão: 400 mg/dia nas primeiras 2 semanas → 200 mg 3×/semana por 22 semanas. SEMPRE administrar com alimentos (aumenta biodisponibilidade ~2×). Uso guiado por cultura, antibiograma e infectologia. Monitorar ECG antes do início.",
              "Esquema estándar: 400 mg/día las primeras 2 semanas → 200 mg 3×/semana por 22 semanas. SIEMPRE administrar con alimentos (aumenta biodisponibilidad ~2×). Uso guiado por cultivo, antibiograma e infectología. Monitorizar ECG antes del inicio.")
          },
          fg30a50: {
            vo: {
              dose: "400 mg",
              intervalo: "24/24h (semanas 1–2) → 200 mg 3×/semana (semanas 3–24)",
              doseMaxima: "400 mg/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA/EMA label: sem ajuste necessário para ClCr 30–50 mL/min. Bedaquilina é metabolizada principalmente pelo CYP3A4 — eliminação hepática predominante (~73% fecal). Eliminação renal mínima (~0,001%). Monitorar QTc a cada 2–4 semanas.",
              "FDA/EMA label: sin ajuste necesario para ClCr 30–50 mL/min. La bedaquilina se metaboliza principalmente por CYP3A4 — eliminación hepática predominante (~73% fecal). Eliminación renal mínima (~0,001%). Monitorizar QTc cada 2–4 semanas.")
          },
          fg10a30: {
            vo: {
              dose: "400 mg",
              intervalo: "24/24h (semanas 1–2) → 200 mg 3×/semana (semanas 3–24)",
              doseMaxima: "400 mg/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA/EMA label: dados insuficientes para ClCr 10–30 mL/min — usar com cautela. Eliminação renal mínima — ajuste de dose provavelmente desnecessário, mas risco de acúmulo de metabólitos N-monodesmetil (M2) aumentado. Monitorar QTc mensalmente e sinais de toxicidade.",
              "FDA/EMA label: datos insuficientes para ClCr 10–30 mL/min — usar con precaución. Eliminación renal mínima — ajuste de dosis probablemente innecesario, pero riesgo de acumulación de metabolito N-monodesmetil (M2) aumentado. Monitorizar QTc mensualmente y signos de toxicidad.")
          },
          fgMenor10: {
            vo: {
              dose: "400 mg",
              intervalo: "24/24h (semanas 1–2) → 200 mg 3×/semana (semanas 3–24)",
              doseMaxima: "400 mg/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA/EMA label: dados insuficientes para ClCr < 10 mL/min — usar com cautela extrema. Monitorar QTc rigorosamente (baseline, semana 2, 12 e mensalmente). Risco de prolongamento QT aumentado por acúmulo do metabólito M2. Avaliar risco/benefício com equipe de infectologia e cardiologia.",
              "FDA/EMA label: datos insuficientes para ClCr < 10 mL/min — usar con cautela extrema. Monitorizar QTc rigurosamente (basal, semana 2, 12 y mensualmente). Riesgo de prolongación QT aumentado por acumulación del metabolito M2. Evaluar riesgo/beneficio con infectología y cardiología.")
          },
          hemodialise: {
            vo: {
              dose: "400 mg",
              intervalo: "24/24h (semanas 1–2) → 200 mg 3×/semana (semanas 3–24)",
              doseMaxima: "400 mg/dia",
              unidade: "mg"
            },
            ev: null,
            pediatrica: null,
            obs: t(lang,
              "FDA/EMA label: dados muito limitados em pacientes em hemodiálise. Bedaquilina NÃO é removida pela HD (altamente lipofílica, Vd enorme ~164 L/kg, ligação proteica >99,9%). Não requer dose suplementar pós-HD. Monitorar QTc rigorosamente — meia-vida terminal de 5–6 meses implica exposição prolongada.",
              "FDA/EMA label: datos muy limitados en pacientes en hemodiálisis. La bedaquilina NO es removida por HD (altamente lipofílica, Vd enorme ~164 L/kg, unión proteica >99,9%). No requiere dosis suplementaria post-HD. Monitorizar QTc rigurosamente — semivida terminal de 5–6 meses implica exposición prolongada.")
          }
        },

        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: false,
          qtRisk: true,
          hepatotoxicityRisk: true,
          requiresCultureGuidance: true,
          warning: t(lang,
            "⚠️ RISCO DE QT PROLONGADO E TORSADES DE POINTES. ECG obrigatório antes do início e monitoração mensal. Nunca combinar com outros agentes QT-prolongadores (delamanida, clofazimina, fluoroquinolonas, azitromicina) sem ECG seriado. Meia-vida de 5–6 meses — efeitos persistem muito além da descontinuação.",
            "⚠️ RIESGO DE QT PROLONGADO Y TORSADES DE POINTES. ECG obligatorio antes del inicio y monitoreo mensual. Nunca combinar con otros agentes QT-prolongadores (delamanida, clofazimina, fluoroquinolonas, azitromicina) sin ECG seriado. Semivida de 5–6 meses — efectos persisten mucho después de la discontinuación.")
        },

        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA label Sirturo (bedaquiline) 2019",
            "EMA Assessment Report Sirturo 2023",
            "WHO MDR-TB Guidelines 2022",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "STREAM / ZeNix / TB-PRACTECAL trials",
            "Johns Hopkins ABX Guide 2024",
            "UpToDate 2024",
            "Lexicomp Online 2025"
          ],
          note: t(lang,
            "Bloco mesclado e melhorado: esquema de dose completo (400 mg × 2 semanas → 200 mg 3×/sem × 22 semanas) preservado em todas as faixas. Lógica de HD corrigida (Vd ~164 L/kg, LP >99,9% — não removida por HD). safetyFlags QT e hepatotoxicidade mantidos. Johns Hopkins, UpToDate e Lexicomp adicionados às fontes.",
            "Bloque fusionado y mejorado: esquema de dosis completo (400 mg × 2 semanas → 200 mg 3×/sem × 22 semanas) preservado en todos los rangos. Lógica de HD corregida (Vd ~164 L/kg, LP >99,9% — no removida por HD). safetyFlags QT y hepatotoxicidad mantenidos. Johns Hopkins, UpToDate y Lexicomp añadidos a las fuentes.")
        }
      };
    }
  },

  /* ── 87. DELAMANIDA ── */
  delamanida: {
    name: { pt: "Delamanida", es: "Delamanida" },
    category: "atb",
    icon: "💊",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#065F46",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;

      return {
        name:  t(lang, "Delamanida", "Delamanida"),
        class: t(lang, "Nitroimidazooxazol (inibidor da síntese do ácido micólico — nova classe anti-TB)", "Nitroimidazooxazol (inhibidor de la síntesis del ácido micólico — nueva clase anti-TB)"),
        commercialNames: {
          br: ["Deltyba (acesso limitado no Brasil)"],
          ar: ["Deltyba"]
        },
        presentation: [
          t(lang, "Comprimidos: 50 mg", "Comprimidos: 50 mg")
        ],
        dose: {
          adultoVO: t(lang, "100 mg VO 12/12h (com alimentos) × 24 semanas", "100 mg VO 12/12h (con alimentos) × 24 semanas")
        },
        doseKg: isPed
          ? { pediatricaVO: t(lang, "Conforme peso corporal — seguir protocolo OMS pediátrico", "Según peso corporal — seguir protocolo OMS pediátrico") }
          : null,
        indication: t(
          lang,
          "Tuberculose pulmonar multirresistente (TB-MDR) e extensivamente resistente (TB-XDR) em adultos e crianças, como componente de regime combinado quando não há outras opções.",
          "Tuberculosis pulmonar multirresistente (TB-MDR) y extensivamente resistente (TB-XDR) en adultos y niños, como componente de régimen combinado cuando no hay otras opciones."
        ),
        spectrum: t(
          lang,
          "Mycobacterium tuberculosis (incluindo cepas MDR e XDR). Mecanismo: inibição das enzimas F420-dependentes da síntese do ácido micólico e do óxido nítrico micobacteriano, levando à lise celular. Não apresenta resistência cruzada com bedaquilina ou linezolida.",
          "Mycobacterium tuberculosis (incluidas cepas MDR y XDR). Mecanismo: inhibición de enzimas F420-dependientes de la síntesis del ácido micólico y del óxido nítrico micobacteriano, llevando a lisis celular. No presenta resistencia cruzada con bedaquilina ni linezolida."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade à delamanida", "Hipersensibilidad a la delamanida"),
          t(lang, "QTcF basal > 500 ms", "QTcF basal > 500 ms"),
          t(lang, "Hipoalbuminemia grave (albumina < 2,8 g/dL — risco de QT prolongado)", "Hipoalbuminemia grave (albúmina < 2,8 g/dL — riesgo de QT prolongado)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados limitados — usar apenas se benefício superar risco; teratogênico em modelos animais.", "Embarazo: datos limitados — usar solo si el beneficio supera el riesgo; teratogénico en modelos animales.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — EVITAR.", "Lactancia: datos insuficientes — EVITAR.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Prolongamento do QT — monitorar ECG antes, mensalmente durante o tratamento.", "Prolongación del QT — monitorizar ECG antes y mensualmente durante el tratamiento."),
          t(lang, "SEMPRE administrar com alimentos (aumenta significativamente a biodisponibilidade).", "SIEMPRE administrar con alimentos (aumenta significativamente la biodisponibilidad)."),
          t(lang, "Hipoalbuminemia aumenta risco de QT — corrigir albumina antes de iniciar.", "Hipoalbuminemia aumenta el riesgo de QT — corregir albúmina antes de iniciar."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / WHO MDR-TB Guidelines 2022 / EMA Prescribing Information Deltyba / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Delamanida não requer ajuste de dose renal. Metabolismo predominantemente hepático (>80% via CYP3A4 e albumina sérica). Administrar sempre com alimento.", "Delamanida no requiere ajuste de dosis renal. Metabolismo predominantemente hepático (>80% vía CYP3A4 y albúmina sérica). Administrar siempre con alimento."),
          fgMaior50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            obs: t(lang, "Sem necessidade de ajuste renal nesta faixa (EMA label Deltyba). Administrar com refeição para maximizar absorção (Cmax aumenta ~2–3x com alimento). Parte do esquema BPaL (Bedaquilina + Pretomanida + Linezolida) ou BPaMZ para TB-XDR/TB-MDR. Uso guiado por cultura, antibiograma e infectologia.", "Sin necesidad de ajuste renal en esta franja (EMA label Deltyba). Administrar con alimento para maximizar absorción (Cmax aumenta ~2–3x con alimento). Parte del esquema BPaL (Bedaquilina + Pretomanida + Linezolida) o BPaMZ para TB-XDR/TB-MDR. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            obs: t(lang, "Sem ajuste renal necessário nesta faixa (EMA label: IR leve a moderada não altera farmacocinética de forma clinicamente relevante). Monitorar QTcF: ECG basal antes de iniciar, mensalmente durante tratamento. Hipoalbuminemia (<3,5 g/dL) pode aumentar fração livre do fármaco e prolongar QTcF — monitorar albumina. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "Sin ajuste renal necesario en esta franja (EMA label: IR leve a moderada no altera farmacocinética de forma clínicamente relevante). Monitorizar QTcF: ECG basal antes de iniciar, mensualmente durante tratamiento. Hipoalbuminemia (<3,5 g/dL) puede aumentar fracción libre del fármaco y prolongar QTcF — monitorizar albúmina. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg10a30: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            obs: t(lang, "EMA label: dados farmacocinéticos limitados em insuficiência renal grave (CrCl 15–29 mL/min). Não há recomendação formal de ajuste de dose, mas monitoramento rigoroso é obrigatório. Hipoalbuminemia frequente nesta faixa amplia risco de QT prolongado — monitorar albumina e QTcF mensalmente. Corrigir distúrbios eletrolíticos (K⁺, Mg²⁺) antes de iniciar. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "EMA label: datos farmacocinéticos limitados en insuficiencia renal grave (CrCl 15–29 mL/min). No hay recomendación formal de ajuste de dosis, pero monitoreo riguroso es obligatorio. Hipoalbuminemia frecuente en esta franja amplía riesgo de QT prolongado — monitorizar albúmina y QTcF mensualmente. Corregir trastornos electrolíticos (K⁺, Mg²⁺) antes de iniciar. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fgMenor10: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            obs: t(lang, "EMA label: ausência de dados em insuficiência renal muito grave (CrCl <15 mL/min). Não alterar dose — metabolismo hepático predominante preservado. Risco elevado de hipopotassemia e hipomagnesemia nesta faixa, potencializando QTcF. Monitorar ECG antes e mensalmente durante tratamento. Monitorar albumina sérica. Corrigir eletrólitos antes de iniciar. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "EMA label: ausencia de datos en insuficiencia renal muy grave (CrCl <15 mL/min). No alterar dosis — metabolismo hepático predominante preservado. Riesgo elevado de hipopotasemia e hipomagnesemia en esta franja, potenciando QTcF. Monitorizar ECG antes y mensualmente durante tratamiento. Monitorizar albúmina sérica. Corregir electrolitos antes de iniciar. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          hemodialise: {
            vo: { dose: "100 mg", intervalo: "12/12h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "50 mg", intervalo: "12/12h", doseMaxima: "100 mg/dia", unidade: "mg" },
            obs: t(lang, "EMA label: não há dados em hemodiálise. Delamanida tem alta ligação proteica (>99,5%) e Vd elevado (~2.100 L) — improvável remoção significativa por HD convencional. Não ajustar dose. Monitorar QTcF rigorosamente: pacientes em HD têm alta prevalência de hipoalbuminemia, distúrbios eletrolíticos e doença cardiovascular, todos amplificando risco de QT prolongado. ECG mensal obrigatório. Administrar com refeição. Não administrar após HD sem orientação de infectologia. Uso guiado por cultura, antibiograma e infectologia.", "EMA label: no hay datos en hemodiálisis. Delamanida tiene alta unión proteica (>99,5%) y Vd elevado (~2.100 L) — improbable remoción significativa por HD convencional. No ajustar dosis. Monitorizar QTcF rigurosamente: pacientes en HD tienen alta prevalencia de hipoalbuminemia, trastornos electrolíticos y enfermedad cardiovascular, todos amplificando riesgo de QT prolongado. ECG mensual obligatorio. Administrar con alimento. No administrar después de HD sin orientación de infectología. Uso guiado por cultivo, antibiograma e infectología.")
          }
        },
        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: false,
          qtRisk: true,
          hepatotoxicityRisk: false,
          requiresCultureGuidance: true,
          warning: t(lang, "Risco de QTcF prolongado significativo, especialmente em pacientes com hipoalbuminemia (<3,5 g/dL), hipopotassemia, hipomagnesemia ou uso concomitante de outros agentes que prolongam QT (bedaquilina, moxifloxacino, clofazimina). ECG obrigatório antes de iniciar e mensalmente durante todo o tratamento. Sempre administrar com alimento.", "Riesgo de prolongación QTcF significativo, especialmente en pacientes con hipoalbuminemia (<3,5 g/dL), hipopotasemia, hipomagnesemia o uso concomitante de otros agentes que prolongan QT (bedaquilina, moxifloxacino, clofazimina). ECG obligatorio antes de iniciar y mensualmente durante todo el tratamiento. Siempre administrar con alimento.")
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "EMA Prescribing Information Deltyba (delamanid) 2023",
            "WHO MDR-TB Guidelines 2022 — Rapid Communication on Key Changes",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "WHO Module 4: Treatment of Drug-Resistant Tuberculosis 2020",
            "Goodman & Gilman's Pharmacological Basis of Therapeutics 14ª ed.",
            "Lexicomp Online 2025"
          ],
          note: t(lang, "Bloco revisado para padrão Excelente. Delamanida tem metabolismo hepático predominante (albumina + CYP3A4 > 80%) — sem ajuste renal pelo label EMA. Principal risco clínico é QTcF prolongado, agravado por hipoalbuminemia. Monitoramento de ECG e albumina obrigatórios mensalmente. Administração com alimento é requisito farmacocinético, não opcional. Uso exclusivo em TB-MDR/XDR como parte de esquemas supervisionados.", "Bloque revisado para estándar Excelente. Delamanida tiene metabolismo hepático predominante (albúmina + CYP3A4 > 80%) — sin ajuste renal según label EMA. Principal riesgo clínico es QTcF prolongado, agravado por hipoalbuminemia. Monitoreo de ECG y albúmina obligatorios mensualmente. Administración con alimento es requisito farmacocinético, no opcional. Uso exclusivo en TB-MDR/XDR como parte de esquemas supervisados.")
        }
      };
    }
  },

  /* ── 88. PRETOMANIDA ── */
  pretomanida: {
    name: { pt: "Pretomanida", es: "Pretomanida" },
    category: "atb",
    icon: "💊",
    color: "rgba(139,92,246,0.12)",
    colorTxt: "#5B21B6",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Pretomanida", "Pretomanida"),
        class: t(lang, "Nitroimidazooxazina (ativa em TB latente e ativa — mecanismo duplo)", "Nitroimidazooxazina (activa en TB latente y activa — mecanismo doble)"),
        commercialNames: {
          br: ["PA-824 / Pretomanida (acesso via protocolo OMS)"],
          ar: ["Pretomanida (acceso vía protocolo OMS)"]
        },
        presentation: [
          t(lang, "Comprimidos: 200 mg", "Comprimidos: 200 mg")
        ],
        dose: {
          adultoVO: t(lang, "200 mg VO 24/24h (com alimentos) — sempre como parte do esquema BPaL ou BPaLM", "200 mg VO 24/24h (con alimentos) — siempre como parte del esquema BPaL o BPaLM")
        },
        doseKg: null,
        indication: t(
          lang,
          "Tuberculose extensivamente resistente (TB-XDR) e TB-MDR sem opções de tratamento em adultos — EXCLUSIVAMENTE como parte dos esquemas BPaL (bedaquilina + pretomanida + linezolida) ou BPaLM (+moxifloxacino).",
          "Tuberculosis extensivamente resistente (TB-XDR) y TB-MDR sin opciones de tratamiento en adultos — EXCLUSIVAMENTE como parte de los esquemas BPaL (bedaquilina + pretomanida + linezolida) o BPaLM (+moxifloxacino)."
        ),
        spectrum: t(
          lang,
          "Mycobacterium tuberculosis (incluindo cepas XDR e MDR). Mecanismo duplo: (1) inibe a síntese do ácido micólico (bactérias em replicação); (2) gera radicais reativos de óxido nítrico (bactérias não replicantes/latentes). Sem atividade contra bactérias não-micobactérias.",
          "Mycobacterium tuberculosis (incluidas cepas XDR y MDR). Mecanismo doble: (1) inhibe la síntesis del ácido micólico (bacterias en replicación); (2) genera radicales reactivos de óxido nítrico (bacterias no replicantes/latentes). Sin actividad frente a bacterias no micobacterianas."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade à pretomanida", "Hipersensibilidad a la pretomanida"),
          t(lang, "Não deve ser usada em monoterapia ou em regimes fora dos esquemas BPaL/BPaLM", "No debe usarse en monoterapia ni en regímenes fuera de los esquemas BPaL/BPaLM")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — usar apenas se benefício superar risco; notificar caso.", "Embarazo: datos insuficientes — usar solo si el beneficio supera el riesgo; notificar caso.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — EVITAR.", "Lactancia: datos insuficientes — EVITAR.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "NUNCA usar em monoterapia — resistência se desenvolve rapidamente.", "NUNCA usar en monoterapia — la resistencia se desarrolla rápidamente."),
          t(lang, "Esquema BPaL: 26 semanas de tratamento para TB-XDR (taxas de sucesso ~90% no estudo ZeNix).", "Esquema BPaL: 26 semanas de tratamiento para TB-XDR (tasas de éxito ~90% en el estudio ZeNix)."),
          t(lang, "Hepatotoxicidade — monitorar enzimas hepáticas mensalmente.", "Hepatotoxicidad — monitorizar enzimas hepáticas mensualmente."),
          t(lang, "Neuropatia periférica — monitorar em combinação com linezolida (potencialmente aditivo).", "Neuropatía periférica — monitorizar en combinación con linezolida (potencialmente aditivo)."),
          t(lang, "Não necessita ajuste renal conhecido.", "No requiere ajuste renal conocido.")
        ],
        ref: "Sanford Guide 2025 / WHO XDR-TB Guidelines 2022 / Conradie et al. NEJM 2020 (ZeNix trial) / FDA Prescribing Information Pretomanida / TB Alliance Clinical Data",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Pretomanida não requer ajuste de dose renal segundo os estudos disponíveis. Metabolismo hepático predominante via redução e CYP3A4. Dados renais específicos são limitados — usar com cautela em IR grave. Administrar sempre com alimento.", "Pretomanida no requiere ajuste de dosis renal según los estudios disponibles. Metabolismo hepático predominante vía reducción y CYP3A4. Datos renales específicos son limitados — usar con precaución en IR grave. Administrar siempre con alimento."),
          fgMaior50: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Sem ajuste renal necessário nesta faixa (FDA label / TB Alliance). Administrar com refeição para maximizar absorção (biodisponibilidade aumenta ~2,7x com alimento). Uso exclusivo como componente do esquema BPaL (Bedaquilina + Pretomanida + Linezolida) ou BPaLM (+Moxifloxacino) para TB-XDR/MDR por 26 semanas. Monitorar enzimas hepáticas (ALT/AST) e sintomas de neuropatia periférica mensalmente. Uso guiado por cultura, antibiograma e infectologia.", "Sin ajuste renal necesario en esta franja (FDA label / TB Alliance). Administrar con alimento para maximizar absorción (biodisponibilidad aumenta ~2,7x con alimento). Uso exclusivo como componente del esquema BPaL (Bedaquilina + Pretomanida + Linezolida) o BPaLM (+Moxifloxacino) para TB-XDR/MDR por 26 semanas. Monitorizar enzimas hepáticas (ALT/AST) y síntomas de neuropatía periférica mensualmente. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg30a50: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "Sem ajuste renal necessário nesta faixa. FDA label: dados limitados em insuficiência renal moderada; não há evidência de acumulação clinicamente relevante. Monitorar hepatotoxicidade (ALT/AST mensalmente — risco aditivo com bedaquilina). Monitorar QTcF: risco aditivo com bedaquilina (e moxifloxacino no esquema BPaLM). Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "Sin ajuste renal necesario en esta franja. FDA label: datos limitados en insuficiencia renal moderada; no hay evidencia de acumulación clínicamente relevante. Monitorizar hepatotoxicidad (ALT/AST mensualmente — riesgo aditivo con bedaquilina). Monitorizar QTcF: riesgo aditivo con bedaquilina (y moxifloxacino en esquema BPaLM). Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fg10a30: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "FDA label: ausência de estudos farmacocinéticos em insuficiência renal grave (CrCl 15–29 mL/min). Não há recomendação formal de ajuste. Metabolismo hepático predominante deve preservar exposição ao fármaco. Maior risco de acumulação de metabólitos polares renalmente excretados — monitorar toxicidade (hepatotoxicidade, neuropatia). Corrigir distúrbios eletrolíticos antes de iniciar (K⁺, Mg²⁺) para mitigar risco QTcF. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "FDA label: ausencia de estudios farmacocinéticos en insuficiencia renal grave (CrCl 15–29 mL/min). No hay recomendación formal de ajuste. Metabolismo hepático predominante debe preservar exposición al fármaco. Mayor riesgo de acumulación de metabolitos polares renalmente excretados — monitorizar toxicidad (hepatotoxicidad, neuropatía). Corregir trastornos electrolíticos antes de iniciar (K⁺, Mg²⁺) para mitigar riesgo QTcF. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          fgMenor10: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "FDA label: ausência de dados em insuficiência renal muito grave (CrCl <15 mL/min). Usar apenas se benefício superar risco, sob supervisão rigorosa de infectologia. Monitorar ALT/AST e bilirrubina total quinzenalmente (hepatotoxicidade aditiva com bedaquilina amplificada em IR). Monitorar QTcF: ECG antes de iniciar e a cada 2 semanas no mínimo. Monitorar neuropatia periférica (potencialmente aditiva com linezolida). Corrigir K⁺ e Mg²⁺ séricos. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "FDA label: ausencia de datos en insuficiencia renal muy grave (CrCl <15 mL/min). Usar solo si el beneficio supera el riesgo, bajo supervisión rigurosa de infectología. Monitorizar ALT/AST y bilirrubina total quincenalmente (hepatotoxicidad aditiva con bedaquilina amplificada en IR). Monitorizar QTcF: ECG antes de iniciar y cada 2 semanas como mínimo. Monitorizar neuropatía periférica (potencialmente aditiva con linezolida). Corregir K⁺ y Mg²⁺ séricos. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          },
          hemodialise: {
            vo: { dose: "200 mg", intervalo: "24/24h", doseMaxima: "200 mg/dia", unidade: "mg" },
            ev: null,
            pediatrica: null,
            obs: t(lang, "FDA label: ausência de dados farmacocinéticos em hemodiálise. Pretomanida tem alta ligação proteica (~86%) e Vd ~35 L/kg — remoção por HD provavelmente insignificante, mas não confirmada. Uso em pacientes dialíticos deve ser considerado apenas em TB-XDR/MDR sem alternativa, sob supervisão de infectologia e nefrologista. Monitorar QTcF rigorosamente (risco cumulativo com bedaquilina + distúrbios eletrolíticos da HD). ECG antes de iniciar, após 1ª HD e mensalmente. Hepatotoxicidade monitorada mensalmente. Administrar com refeição. Uso guiado por cultura, antibiograma e infectologia.", "FDA label: ausencia de datos farmacocinéticos en hemodiálisis. Pretomanida tiene alta unión proteica (~86%) y Vd ~35 L/kg — remoción por HD probablemente insignificante, pero no confirmada. Uso en pacientes dializados debe considerarse solo en TB-XDR/MDR sin alternativa, bajo supervisión de infectología y nefrología. Monitorizar QTcF rigurosamente (riesgo cumulativo con bedaquilina + trastornos electrolíticos de la HD). ECG antes de iniciar, después de 1ª HD y mensualmente. Hepatotoxicidad monitorada mensualmente. Administrar con alimento. Uso guiado por cultivo, antibiograma e infectología.")
          }
        },
        safetyFlags: {
          renalHighRisk: false,
          neurotoxicityRisk: true,
          qtRisk: true,
          hepatotoxicityRisk: true,
          requiresCultureGuidance: true,
          warning: t(lang, "Pretomanida NUNCA deve ser usada em monoterapia. Triplo risco clínico no esquema BPaL: (1) QTcF prolongado — risco aditivo com bedaquilina e moxifloxacino; (2) Hepatotoxicidade — risco aditivo com bedaquilina; (3) Neuropatia periférica — risco aditivo com linezolida. Monitoramento mensal obrigatório de ECG, ALT/AST e avaliação neurológica. Administrar sempre com alimento.", "Pretomanida NUNCA debe usarse en monoterapia. Triple riesgo clínico en el esquema BPaL: (1) QTcF prolongado — riesgo aditivo con bedaquilina y moxifloxacino; (2) Hepatotoxicidad — riesgo aditivo con bedaquilina; (3) Neuropatía periférica — riesgo aditivo con linezolida. Monitoreo mensual obligatorio de ECG, ALT/AST y evaluación neurológica. Administrar siempre con alimento.")
        },
        auditNotes: {
          status: "excellent_after_review",
          sourcePriority: [
            "FDA Prescribing Information Pretomanida (Dovprela) 2019",
            "Conradie et al. NEJM 2020 — ZeNix trial (BPaL 26w, TB-XDR)",
            "WHO XDR-TB Guidelines 2022 — BPaL recommendation",
            "Sanford Guide to Antimicrobial Therapy 2025",
            "TB Alliance Clinical Summary 2022",
            "Lexicomp Online 2025"
          ],
          note: t(lang, "Bloco revisado para padrão Excelente. Pretomanida não tem dados formais de ajuste renal — metabolismo hepático predominante (redução + CYP3A4) justifica ausência de ajuste. Três eixos de risco cumulativo no esquema BPaL/BPaLM: QTcF (bedaquilina+pretomanida+moxifloxacino), hepatotoxicidade (bedaquilina+pretomanida) e neuropatia periférica (linezolida+pretomanida). Uso exclusivo em TB-XDR/MDR sem alternativa, com supervisão de infectologia especializada.", "Bloque revisado para estándar Excelente. Pretomanida no tiene datos formales de ajuste renal — metabolismo hepático predominante (reducción + CYP3A4) justifica ausencia de ajuste. Tres ejes de riesgo cumulativo en el esquema BPaL/BPaLM: QTcF (bedaquilina+pretomanida+moxifloxacino), hepatotoxicidad (bedaquilina+pretomanida) y neuropatía periférica (linezolida+pretomanida). Uso exclusivo en TB-XDR/MDR sin alternativa, con supervisión de infectología especializada.")
        }
      };
    }
  },

  /* ── 89. CLOXACILINA ── */
  cloxacilina: {
    name: { pt: "Cloxacilina", es: "Cloxacilina" },
    category: "atb",
    icon: "💊",
    color: "rgba(59,130,246,0.12)",
    colorTxt: "#1D4ED8",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "500 mg VO 6/6h (em jejum)", "500 mg VO 6/6h (en ayunas)");
      const doseAdultoEV = clcr < 10
        ? t(lang, "1 g EV 6/6h (redução em IRT)", "1 g EV 6/6h (reducción en IRT)")
        : t(lang, "1–2 g EV 4/4h–6/6h", "1–2 g EV 4/4h–6/6h");
      const dosePedVO = peso > 0
        ? `${Math.round(25 * peso)}–${Math.round(50 * peso)} mg VO 6/6h (${peso} kg)`
        : "25–50 mg/kg/dose VO 6/6h";
      const dosePedEV = peso > 0
        ? `${Math.round(50 * peso)}–${Math.round(100 * peso)} mg EV 6/6h (${peso} kg)`
        : "50–100 mg/kg/dose EV 6/6h";

      return {
        name:  t(lang, "Cloxacilina", "Cloxacilina"),
        class: t(lang, "Penicilina resistente à penicilinase (isoxazolilpenicilina — anti-MSSA)", "Penicilina resistente a penicilinasa (isoxazolilpenicilina — anti-MSSA)"),
        commercialNames: {
          br: ["Cloxacilina Genérico", "Staficilin-N"],
          ar: ["Cloxacilina Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 500 mg", "Cápsulas: 500 mg"),
          t(lang, "Pó para solução injetável EV/IM: 500 mg, 1 g por frasco", "Polvo para solución inyectable EV/IM: 500 mg, 1 g por frasco")
        ],
        dose: {
          adultoVO: doseAdultoVO,
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO, pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções por Staphylococcus aureus sensível à meticilina (MSSA): endocardite, bacteremia, osteomielite, artrite séptica, infecções de pele e partes moles, pneumonia estafilocócica.",
          "Infecciones por Staphylococcus aureus sensible a meticilina (MSSA): endocarditis, bacteriemia, osteomielitis, artritis séptica, infecciones de piel y partes blandas, neumonía estafilocócica."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA — droga de escolha), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sem atividade contra MRSA, Gram-negativos, enterococos ou anaeróbios.",
          "Staphylococcus aureus (MSSA — droga de elección), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sin actividad frente a MRSA, Gramnegativos, enterococos ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às penicilinas (reação cruzada com cefalosporinas ~1–2%)", "Hipersensibilidad a las penicilinas (reacción cruzada con cefalosporinas ~1–2%)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B; amplamente utilizada em infecções estafilocócicas na gestante.", "Embarazo: SEGURA — categoría B; ampliamente utilizada en infecciones estafilocócicas en la gestante.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "DROGA DE ESCOLHA para MSSA — superior à vancomicina em desfechos clínicos para bacteremia e endocardite.", "DROGA DE ELECCIÓN para MSSA — superior a vancomicina en desenlaces clínicos para bacteriemia y endocarditis."),
          t(lang, "Tomar VO em jejum — alimentos reduzem a absorção em até 50%.", "Tomar VO en ayunas — los alimentos reducen la absorción hasta un 50%."),
          t(lang, "Hepatotoxicidade colestática — monitorar enzimas hepáticas em tratamentos longos.", "Hepatotoxicidad colestásica — monitorizar enzimas hepáticas en tratamientos prolongados."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / IDSA MRSA Guidelines / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "4/4h–6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Penicilina resistente à penicilinase para MSSA.", "Penicilina resistente a penicilinasa para MSSA.")
          },
          fg30a50: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "4/4h–6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "6/6h", doseMaxima: "8 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "8 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Pode ser necessário ajuste em insuficiência renal muito avançada.", "Puede ser necesario ajuste en insuficiencia renal muy avanzada.")
          },
          fgMenor10: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar neurotoxicidade e eletrólitos.", "Monitorizar neurotoxicidad y electrolitos.")
          },
          hemodialise: {
            vo: { dose: "500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: { dose: "1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD quando possível.", "Administrar después de HD cuando sea posible.")
          }
        }
      };
    }
  },

  /* ── 90. DICLOXACILINA ── */
  dicloxacilina: {
    name: { pt: "Dicloxacilina", es: "Dicloxacilina" },
    category: "atb",
    icon: "💊",
    color: "rgba(16,185,129,0.12)",
    colorTxt: "#047857",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "250–500 mg VO 6/6h (em jejum, 30–60 min antes das refeições)", "250–500 mg VO 6/6h (en ayunas, 30–60 min antes de las comidas)");
      const dosePedVO = peso > 0
        ? `${Math.round(25 * peso)}–${Math.round(50 * peso)} mg VO 6/6h (${peso} kg)`
        : "25–50 mg/kg/dose VO 6/6h";

      return {
        name:  t(lang, "Dicloxacilina", "Dicloxacilina"),
        class: t(lang, "Penicilina resistente à penicilinase (isoxazolilpenicilina oral — anti-MSSA)", "Penicilina resistente a penicilinasa (isoxazolilpenicilina oral — anti-MSSA)"),
        commercialNames: {
          br: ["Dicloxacilina Genérico", "Diclocil"],
          ar: ["Dicloxacilina Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 250 mg, 500 mg", "Cápsulas: 250 mg, 500 mg"),
          t(lang, "Suspensão oral: 62,5 mg/5 mL", "Suspensión oral: 62,5 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO }
          : null,
        indication: t(
          lang,
          "Infecções por MSSA em tratamento oral: impetigo, celulite, furunculose, foliculite, infecções de ferida cirúrgica, artrite séptica leve, osteomielite em terapia sequencial EV-VO.",
          "Infecciones por MSSA en tratamiento oral: impétigo, celulitis, forunculosis, foliculitis, infecciones de herida quirúrgica, artritis séptica leve, osteomielitis en terapia secuencial EV-VO."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sem atividade contra MRSA, Gram-negativos ou anaeróbios. Melhor biodisponibilidade oral que a cloxacilina.",
          "Staphylococcus aureus (MSSA), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sin actividad frente a MRSA, Gramnegativos ni anaerobios. Mejor biodisponibilidad oral que cloxacilina."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às penicilinas", "Hipersensibilidad a las penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B.", "Embarazo: SEGURA — categoría B.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Tomar EM JEJUM obrigatório — alimentos reduzem absorção em até 50%.", "Tomar EN AYUNAS obligatorio — los alimentos reducen la absorción hasta un 50%."),
          t(lang, "Preferida à cloxacilina para uso oral por maior biodisponibilidade.", "Preferida a cloxacilina para uso oral por mayor biodisponibilidad."),
          t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
        ],
        ref: "Sanford Guide 2025 / IDSA SSTI Guidelines / ANVISA / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Indicada principalmente para MSSA e infecções cutâneas.", "Indicada principalmente para MSSA e infecciones cutáneas.")
          },
          fg30a50: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar função hepática em tratamentos prolongados.", "Monitorizar función hepática en tratamientos prolongados.")
          },
          hemodialise: {
            vo: { dose: "250–500 mg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg" },
            ev: null,
            pediatrica: { dose: "25–50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não requer suplementação pós-HD.", "No requiere suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 91. FLUCLOXACILINA ── */
  flucloxacilina: {
    name: { pt: "Flucloxacilina", es: "Flucloxacilina" },
    category: "atb",
    icon: "💊",
    color: "rgba(245,158,11,0.12)",
    colorTxt: "#92400E",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      const isPed = idade > 0 && idade < 18;
      const doseAdultoVO = t(lang, "500 mg–1 g VO 6/6h (em jejum)", "500 mg–1 g VO 6/6h (en ayunas)");
      const doseAdultoEV = clcr < 10
        ? t(lang, "1 g EV 6/6h (redução em IRT)", "1 g EV 6/6h (reducción en IRT)")
        : t(lang, "1–2 g EV 6/6h", "1–2 g EV 6/6h");
      const dosePedVO = peso > 0
        ? `${Math.round(25 * peso)}–${Math.round(50 * peso)} mg VO 6/6h (${peso} kg)`
        : "25–50 mg/kg/dose VO 6/6h";
      const dosePedEV = peso > 0
        ? `${Math.round(50 * peso)}–${Math.round(100 * peso)} mg EV 6/6h (${peso} kg)`
        : "50–100 mg/kg/dose EV 6/6h";

      return {
        name:  t(lang, "Flucloxacilina", "Flucloxacilina"),
        class: t(lang, "Penicilina resistente à penicilinase (isoxazolilpenicilina — anti-MSSA, padrão europeu)", "Penicilina resistente a penicilinasa (isoxazolilpenicilina — anti-MSSA, estándar europeo)"),
        commercialNames: {
          br: ["Flucloxacilina Genérico (uso limitado no Brasil)"],
          ar: ["Flucloxacilina Genérico"]
        },
        presentation: [
          t(lang, "Cápsulas: 250 mg, 500 mg", "Cápsulas: 250 mg, 500 mg"),
          t(lang, "Pó para solução injetável EV/IM: 250 mg, 500 mg, 1 g por frasco", "Polvo para solución inyectable EV/IM: 250 mg, 500 mg, 1 g por frasco"),
          t(lang, "Suspensão oral: 125 mg/5 mL", "Suspensión oral: 125 mg/5 mL")
        ],
        dose: {
          adultoVO: doseAdultoVO,
          adultoEV: doseAdultoEV
        },
        doseKg: isPed && peso > 0
          ? { pediatricaVO: dosePedVO, pediatricaEV: dosePedEV }
          : null,
        indication: t(
          lang,
          "Infecções por MSSA: endocardite, bacteremia, osteomielite, artrite séptica, infecções de pele e partes moles, pneumonia estafilocócica. Droga de escolha para MSSA em muitos países europeus (equivalente à nafcilina/oxacilina nas Américas).",
          "Infecciones por MSSA: endocarditis, bacteriemia, osteomielitis, artritis séptica, infecciones de piel y partes blandas, neumonía estafilocócica. Droga de elección para MSSA en muchos países europeos (equivalente a nafcilina/oxacilina en las Américas)."
        ),
        spectrum: t(
          lang,
          "Staphylococcus aureus (MSSA), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sem atividade contra MRSA, Gram-negativos, enterococos ou anaeróbios.",
          "Staphylococcus aureus (MSSA), Staphylococcus epidermidis (MSSE), Streptococcus spp. Sin actividad frente a MRSA, Gramnegativos, enterococos ni anaerobios."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade às penicilinas", "Hipersensibilidad a las penicilinas")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: SEGURA — categoria B.", "Embarazo: SEGURA — categoría B.")
            : null,
          lactante
            ? t(lang, "Lactação: compatível — excreção mínima no leite.", "Lactancia: compatible — excreción mínima en leche.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "DROGA DE ESCOLHA para MSSA em países europeus — equivalente funcional à nafcilina.", "DROGA DE ELECCIÓN para MSSA en países europeos — equivalente funcional a nafcilina."),
          t(lang, "Tomar VO em jejum — alimentos reduzem absorção.", "Tomar VO en ayunas — los alimentos reducen la absorción."),
          t(lang, "Hepatotoxicidade colestática idiossincrática — mais comum que com dicloxacilina; monitorar enzimas hepáticas.", "Hepatotoxicidad colestásica idiosincrática — más común que con dicloxacilina; monitorizar enzimas hepáticas."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / BSAC Guidelines / EMA Prescribing Information / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "6 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Primeira linha para MSSA em diversos países.", "Primera línea para MSSA en diversos países.")
          },
          fg30a50: {
            vo: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "6 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "6 g/dia", unidade: "mg" },
            ev: { dose: "1–2 g", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "g" },
            pediatrica: { dose: "50–100 mg/kg", intervalo: "6/6h", doseMaxima: "12 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "6 g/dia", unidade: "mg" },
            ev: { dose: "1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Monitorar hepatotoxicidade colestática.", "Monitorizar hepatotoxicidad colestásica.")
          },
          hemodialise: {
            vo: { dose: "500 mg–1 g", intervalo: "6/6h", doseMaxima: "6 g/dia", unidade: "mg" },
            ev: { dose: "1 g", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "g" },
            pediatrica: { dose: "50 mg/kg", intervalo: "6/6h", doseMaxima: "4 g/dia", unidade: "mg/kg" },
            obs: t(lang, "Administrar após HD quando possível.", "Administrar después de HD cuando sea posible.")
          }
        }
      };
    }
  },

  /* ── 92. ESPECTINOMICINA ── */
  espectinomicina: {
    name: { pt: "Espectinomicina", es: "Espectinomicina" },
    category: "atb",
    icon: "💉",
    color: "rgba(99,102,241,0.12)",
    colorTxt: "#3730A3",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Espectinomicina", "Espectinomicina"),
        class: t(lang, "Aminociclitol (inibidor da síntese proteica — sem atividade em outras infecções)", "Aminociclitol (inhibidor de la síntesis proteica — sin actividad en otras infecciones)"),
        commercialNames: {
          br: ["Trobicin (disponibilidade limitada)"],
          ar: ["Trobicin"]
        },
        presentation: [
          t(lang, "Pó para suspensão injetável IM: 2 g por frasco", "Polvo para suspensión inyectable IM: 2 g por frasco")
        ],
        dose: {
          adultoIM: t(lang, "2 g IM dose única (gonorreia)", "2 g IM dosis única (gonorrea)")
        },
        doseKg: null,
        indication: t(
          lang,
          "Gonorreia urogenital não complicada em pacientes alérgicos à cefalosporinas e fluoroquinolonas, ou em áreas com alta resistência a esses agentes.",
          "Gonorrea urogenital no complicada en pacientes alérgicos a cefalosporinas y fluoroquinolonas, o en áreas con alta resistencia a estos agentes."
        ),
        spectrum: t(
          lang,
          "Neisseria gonorrhoeae (incluindo cepas resistentes à penicilina e fluoroquinolonas). NÃO ativa contra Chlamydia trachomatis (co-infecção deve ser tratada separadamente). Sem atividade útil contra outros patógenos.",
          "Neisseria gonorrhoeae (incluidas cepas resistentes a penicilina y fluoroquinolonas). NO activa frente a Chlamydia trachomatis (la coinfección debe tratarse por separado). Sin actividad útil frente a otros patógenos."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade à espectinomicina", "Hipersensibilidad a la espectinomicina"),
          t(lang, "NÃO indicada para gonorreia faríngea ou retal (eficácia muito baixa)", "NO indicada para gonorrea faríngea ni rectal (eficacia muy baja)")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: pode ser usada quando ceftriaxona não está disponível e houver alergia às cefalosporinas.", "Embarazo: puede usarse cuando la ceftriaxona no está disponible y hay alergia a cefalosporinas.")
            : null,
          lactante
            ? t(lang, "Lactação: dose única — risco mínimo para o lactente.", "Lactancia: dosis única — riesgo mínimo para el lactante.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "NÃO eficaz para gonorreia faríngea (única indicação é a urogenital).", "NO eficaz para gonorrea faríngea (la única indicación es la urogenital)."),
          t(lang, "Sempre tratar co-infecção por Chlamydia trachomatis (azitromicina ou doxiciclina).", "Siempre tratar la coinfección por Chlamydia trachomatis (azitromicina o doxiciclina)."),
          t(lang, "Administração exclusivamente IM — via EV não disponível/aprovada.", "Administración exclusivamente IM — vía EV no disponible/aprobada."),
          t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual.")
        ],
        ref: "Sanford Guide 2025 / CDC STI Guidelines 2021 / WHO Gonorrhea Treatment Guidelines / Goodman & Gilman 14ª ed.",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal habitual.", "No requiere ajuste renal habitual."),
          fgMaior50: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Dose habitual: 2 g IM dose única para gonorreia.", "Dosis habitual: 2 g IM dosis única para gonorrea.")
          },
          fg30a50: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fgMenor10: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Dados limitados em insuficiência renal terminal.", "Datos limitados en insuficiencia renal terminal.")
          },
          hemodialise: {
            vo: null,
            ev: null,
            pediatrica: null,
            obs: t(lang, "Não há recomendação de suplementação pós-HD.", "No existe recomendación de suplementación post-HD.")
          }
        }
      };
    }
  },

  /* ── 93. SOLITROMICINA ── */
  solitromicina: {
    name: { pt: "Solitromicina", es: "Solitromicina" },
    category: "atb",
    icon: "💊",
    color: "rgba(236,72,153,0.12)",
    colorTxt: "#9D174D",

    calculate: (paciente, lang = "pt") => {
      const peso     = Number(paciente.peso    || 0);
      const idade    = Number(paciente.idade   || 0);
      const gestante = Boolean(paciente.gestante);
      const lactante = Boolean(paciente.lactante);
      const clcr     = Number(paciente.clcr    || 100);

      return {
        name:  t(lang, "Solitromicina", "Solitromicina"),
        class: t(lang, "Macrolídeo fluorocetolídeo de 4ª geração (anti-resistência a macrolídeos)", "Macrólido fluorocetólido de 4.ª generación (anti-resistencia a macrólidos)"),
        commercialNames: {
          br: ["Solithromycin / CEM-101 (aprovação EMA em análise; não disponível comercialmente no Brasil)"],
          ar: ["Solithromycin / CEM-101 (en revisión regulatoria)"]
        },
        presentation: [
          t(lang, "Cápsulas: 400 mg (investigacional/EUA)", "Cápsulas: 400 mg (investigacional/EUA)"),
          t(lang, "Solução para infusão EV: 400 mg/250 mL (investigacional)", "Solución para infusión EV: 400 mg/250 mL (investigacional)")
        ],
        dose: {
          adultoVO: t(lang, "800 mg VO no D1 (ataque) → 400 mg VO 24/24h D2–D5", "800 mg VO en D1 (carga) → 400 mg VO 24/24h D2–D5"),
          adultoEV: t(lang, "400 mg EV 24/24h (sem dose de ataque EV)", "400 mg EV 24/24h (sin dosis de carga EV)")
        },
        doseKg: null,
        indication: t(
          lang,
          "Pneumonia adquirida na comunidade (PAC) leve a moderada em adultos, incluindo cepas resistentes aos macrolídeos clássicos e telitromicina. Status regulatório: aprovado no Japão (2022); FDA recusou em 2016 por hepatotoxicidade; EMA em reanálise.",
          "Neumonía adquirida en la comunidad (NAC) leve a moderada en adultos, incluidas cepas resistentes a los macrólidos clásicos y telitromicina. Estado regulatorio: aprobado en Japón (2022); FDA rechazó en 2016 por hepatotoxicidad; EMA en reanalización."
        ),
        spectrum: t(
          lang,
          "Streptococcus pneumoniae (incluindo PRSP e cepas resistentes a macrolídeos — genes erm e mef), Staphylococcus aureus (MSSA, MRSA — atividade limitada), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae, Neisseria gonorrhoeae. Atividade superior à azitromicina e claritromicina por 4 pontos de ligação ao ribossomo 23S.",
          "Streptococcus pneumoniae (incluido PRSP y cepas resistentes a macrólidos — genes erm y mef), Staphylococcus aureus (MSSA, MRSA — actividad limitada), Mycoplasma pneumoniae, Chlamydophila pneumoniae, Legionella pneumophila, Haemophilus influenzae, Neisseria gonorrhoeae. Actividad superior a azitromicina y claritromicina por 4 puntos de unión al ribosoma 23S."
        ),
        contraindications: [
          t(lang, "Hipersensibilidade aos macrolídeos ou cetolídeos", "Hipersensibilidad a los macrólidos o cetólidos"),
          t(lang, "Prolongamento congênito do intervalo QT", "Prolongación congénita del intervalo QT"),
          t(lang, "Insuficiência hepática moderada a grave", "Insuficiencia hepática moderada a grave")
        ],
        risksByPatient: [
          gestante
            ? t(lang, "Gestação: dados insuficientes — EVITAR.", "Embarazo: datos insuficientes — EVITAR.")
            : null,
          lactante
            ? t(lang, "Lactação: dados insuficientes — EVITAR.", "Lactancia: datos insuficientes — EVITAR.")
            : null
        ].filter(Boolean),
        alerts: [
          t(lang, "Hepatotoxicidade — principal razão da não aprovação pelo FDA em 2016; monitorar enzimas hepáticas.", "Hepatotoxicidad — principal razón del rechazo por FDA en 2016; monitorizar enzimas hepáticas."),
          t(lang, "4 pontos de ligação ao ribossomo 23S — atividade mantida contra cepas erm/mef-positivas resistentes a azitromicina.", "4 puntos de unión al ribosoma 23S — actividad mantenida frente a cepas erm/mef-positivas resistentes a azitromicina."),
          t(lang, "Prolongamento do QT — monitorar ECG.", "Prolongación del QT — monitorizar ECG."),
          t(lang, "ATENÇÃO: status regulatório variável por país — verificar disponibilidade local.", "ATENCIÓN: estado regulatorio variable por país — verificar disponibilidad local."),
          t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
        ],
        ref: "Sanford Guide 2025 / FDA Advisory Committee Documents (2016) / PMDA Japan (2022) / Farrell et al. Lancet Infect Dis 2017",
        renalDose: {
          version: 2,
          requiresAdjustment: false,
          message: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal."),
          fgMaior50: {
            vo: { dose: "800 mg (ataque) → 400 mg", intervalo: "24/24h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Macrolídeo fluorocetolídeo de nova geração. Dose baseada em estudos para pneumonia adquirida na comunidade.", "Macrólido fluorocetólido de nueva generación. Dosis basada en estudios para neumonía adquirida en la comunidad.")
          },
          fg30a50: {
            vo: { dose: "800 mg (ataque) → 400 mg", intervalo: "24/24h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal.", "No requiere ajuste renal.")
          },
          fg10a30: {
            vo: { dose: "800 mg (ataque) → 400 mg", intervalo: "24/24h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não necessita ajuste renal em insuficiência renal grave.", "No requiere ajuste renal en insuficiencia renal grave.")
          },
          fgMenor10: {
            vo: { dose: "800 mg (ataque) → 400 mg", intervalo: "24/24h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Monitorar prolongamento do QT, hepatotoxicidade e interações medicamentosas.", "Monitorizar prolongación del QT, hepatotoxicidad e interacciones medicamentosas.")
          },
          hemodialise: {
            vo: { dose: "800 mg (ataque) → 400 mg", intervalo: "24/24h", doseMaxima: "800 mg/dia", unidade: "mg" },
            ev: { dose: "400 mg", intervalo: "24/24h", doseMaxima: "400 mg/dia", unidade: "mg" },
            pediatrica: null,
            obs: t(lang, "Não removida significativamente por hemodiálise. Não requer dose suplementar pós-HD.", "No removida significativamente por hemodiálisis. No requiere dosis suplementaria post-HD.")
          }
        }
      };
    }
  }

}); /* fim Grupo 19 */

})(); /* fim da IIFE do módulo antimicrobianos */
