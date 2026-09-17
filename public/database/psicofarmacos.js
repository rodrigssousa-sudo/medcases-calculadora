/* R30: PUBLIC FREE60 G01 ONLY. 25 Premium records kept server-side. */
(function(){'use strict';
if(!window.PSICOFARMACOS_DRUGS_DB||typeof window.PSICOFARMACOS_DRUGS_DB!=='object')window.PSICOFARMACOS_DRUGS_DB={};
const t=(lang,pt,es)=>lang==='pt'?pt:es;
Object.assign(window.PSICOFARMACOS_DRUGS_DB,{
    clorpromazina: {
      name: { pt: "Clorpromazina", es: "Clorpromazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Clorpromazina", "Clorpromazina"),
          class: t(lang, "Antipsicótico típico de baixa potência — fenotiazina", "Antipsicótico típico de baja potencia — fenotiazina"),
          category: "antipsicotico",
          commercialNames: {
            br: ["Amplictil", "Clorpromazina Cristália"],
            ar: ["Largactil", "Clorpromazina Northia", "Clorpromazina Klonal"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL"),
            t(lang, "Ampola 25 mg/5 mL", "Ampolla 25 mg/5 mL")
          ],
          dose: {
            adulto: t(lang, "Psicose/agitação: iniciar 25–50 mg VO 2–3x/dia; titular conforme resposta.", "Psicosis/agitación: iniciar 25–50 mg VO 2–3 veces/día; titular según respuesta."),
            manutencao: t(lang, "Manutenção: 200–800 mg/dia em doses divididas, conforme tolerabilidade.", "Mantenimiento: 200–800 mg/día en dosis divididas, según tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende do contexto clínico; doses altas exigem monitorização cardiovascular e sedação.", "La dosis máxima depende del contexto clínico; dosis altas requieren monitorización cardiovascular y sedación.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Mania aguda", "Manía aguda"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Náuseas e vômitos refratários", "Náuseas y vómitos refractarios"),
            t(lang, "Soluços intratáveis", "Hipo intratable"),
            t(lang, "Sedação em estados de excitação intensa", "Sedación en estados de excitación intensa")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: hepatopatia ? t(lang, "Hepatopatia: usar com cautela; risco de colestase e sedação prolongada.", "Hepatopatía: usar con cautela; riesgo de colestasis y sedación prolongada.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual."),
          mechanism: t(lang, "Antagonista D2 com forte bloqueio H1, muscarínico e alfa-1; menor risco extrapiramidal que haloperidol, porém maior sedação, hipotensão e efeito anticolinérgico.", "Antagonista D2 con fuerte bloqueo H1, muscarínico y alfa-1; menor riesgo extrapiramidal que haloperidol, pero mayor sedación, hipotensión y efecto anticolinérgico."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno pode levar dias a semanas.", "La sedación puede ocurrir en horas; el efecto antipsicótico pleno puede tardar días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 16–30 horas.", "Vida media aproximada: 16–30 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência intensa", "Somnolencia intensa"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Visão turva", "Visión borrosa"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Fotossensibilidade", "Fotosensibilidad")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Icterícia colestática", "Ictericia colestásica"),
            t(lang, "Agranulocitose rara", "Agranulocitosis rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Discinesia tardia", "Discinesia tardía")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: alto risco de sedação, hipotensão, quedas, delirium e efeitos anticolinérgicos.", "Adulto mayor: alto riesgo de sedación, hipotensión, caídas, delirium y efectos anticolinérgicos.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si se usa al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: pode causar sedação no lactente; monitorar.", "Lactancia: puede causar sedación en el lactante; monitorizar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: cuidado com hepatotoxicidade/colestase e sedação prolongada.", "Hepatopatía: cuidado con hepatotoxicidad/colestasis y sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Anticolinérgicos: maior constipação, retenção urinária e delirium", "Anticolinérgicos: mayor estreñimiento, retención urinaria y delirium"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa: antagonismo dopaminérgico", "Levodopa: antagonismo dopaminérgico")
          ],
          alerts: [
            t(lang, "Maior sedação e hipotensão que antipsicóticos típicos de alta potência.", "Mayor sedación e hipotensión que antipsicóticos típicos de alta potencia."),
            t(lang, "Monitorar pressão arterial, especialmente após início ou aumento de dose.", "Monitorizar presión arterial, especialmente tras inicio o aumento de dosis."),
            t(lang, "Orientar fotoproteção por risco de fotossensibilidade.", "Orientar fotoprotección por riesgo de fotosensibilidad."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Chlorpromazine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },


});
})();
