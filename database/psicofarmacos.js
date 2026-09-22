/* ============================================================
   MedCases Pro — Módulo: PSICOFÁRMACOS (Alta Complexidade)
   Expõe: window.PSICOFARMACOS_DRUGS_DB
   Categorias: Antipsicóticos Típicos (Primeira Geração),
               Antipsicóticos Atípicos (Segunda Geração),
               Injetáveis de Longa Duração (LAI / Depot)
   Indicações: Psicoses, Surtos Agudos, Delírio de UTI, Esquizofrenia
   Schema: Object-DB { chave: { name, calculate, ... } }
   BUILD 455-SNC — PILAR 2 — Desmembramento SNC
   Antidepressivos/Ansiolíticos/Lítio migrados → psiquiatria.js
   Anticonvulsivantes/Antiparkinson migrados → neurologia.js
============================================================ */

(function () {
  'use strict';

  if (typeof window.PSICOFARMACOS_DRUGS_DB !== 'object' ||
      window.PSICOFARMACOS_DRUGS_DB === null ||
      Array.isArray(window.PSICOFARMACOS_DRUGS_DB)) {
    window.PSICOFARMACOS_DRUGS_DB = {};
  }
  if (typeof window.PSICOFARMACOS_DRUGS_DB !== 'object' ||
      window.PSICOFARMACOS_DRUGS_DB === null) return;

  const t = (lang, pt, es) => lang === 'pt' ? pt : es;

  Object.assign(window.PSICOFARMACOS_DRUGS_DB, {

    // ── ANTIPSICÓTICOS TÍPICOS (PRIMEIRA GERAÇÃO) ──

    "haloperidol": {
      "name": {
        "pt": "Haloperidol",
        "es": "Haloperidol"
      },
      "category": "psiquiatria",
      "class": {
        "pt": "Antipsicótico típico; antagonista D2",
        "es": "Antipsicótico típico; antagonista D2"
      },
      "indications": {
        "pt": [
          "Agitação/psicose conforme rotulagem",
          "Uso antiemético off-label em cenários selecionados (ex.: cuidados paliativos/breakthrough)"
        ],
        "es": [
          "Agitación/psicosis según rotulado",
          "Uso antiemético off-label en escenarios seleccionados (p. ej., cuidados paliativos/breakthrough)"
        ]
      },
      "mechanism": {
        "pt": "Antagonismo D2 central. O efeito antiemético off-label decorre do bloqueio dopaminérgico na zona gatilho quimiorreceptora.",
        "es": "Antagonismo D2 central. El efecto antiemético off-label deriva del bloqueo dopaminérgico en la zona gatillo quimiorreceptora."
      },
      "dose": {
        "adult": {
          "pt": "Para uso antiemético, não existe posologia FDA padronizada: seguir protocolo específico e usar doses menores que as usadas para agitação quando apropriado. Não extrapolar dose psiquiátrica.",
          "es": "Para uso antiemético no existe posología FDA estandarizada: seguir protocolo específico y usar dosis menores que las de agitación cuando corresponda. No extrapolar dosis psiquiátrica."
        },
        "pediatric": {
          "pt": "Uso antiemético pediátrico não é uma indicação rotulada; requer protocolo especializado.",
          "es": "El uso antiemético pediátrico no es una indicación rotulada; requiere protocolo especializado."
        }
      },
      "administration": {
        "pt": [
          "Avaliar QT, eletrólitos e risco de EPS",
          "Uso IV é off-label e exige política institucional/monitorização apropriada"
        ],
        "es": [
          "Evaluar QT, electrolitos y riesgo de EPS",
          "El uso IV es off-label y exige política institucional/monitorización apropiada"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro definido.",
          "es": "Sin ajuste renal rutinario definido."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Metabolismo hepático; iniciar baixo e titular com cautela em hepatopatia.",
          "es": "Metabolismo hepático; iniciar bajo y titular con precaución en hepatopatía."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Acatisia",
          "Distonia",
          "Sedação",
          "Hipotensão"
        ],
        "es": [
          "Acatisia",
          "Distonía",
          "Sedación",
          "Hipotensión"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "QT/Torsades",
          "Síndrome neuroléptica maligna",
          "Discinesia tardia",
          "Mortalidade aumentada em idosos com psicose relacionada à demência"
        ],
        "es": [
          "QT/Torsades",
          "Síndrome neuroléptico maligno",
          "Discinesia tardía",
          "Mayor mortalidad en adultos mayores con psicosis relacionada con demencia"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Doença de Parkinson",
            "Demência com corpos de Lewy",
            "Coma/depressão grave do SNC",
            "Hipersensibilidade"
          ],
          "es": [
            "Enfermedad de Parkinson",
            "Demencia con cuerpos de Lewy",
            "Coma/depresión grave del SNC",
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "QT longo, hipocalemia/hipomagnesemia, uso de outros antagonistas D2"
          ],
          "es": [
            "QT largo, hipopotasemia/hipomagnesemia, uso de otros antagonistas D2"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": true,
        "warning": {
          "pt": "O uso antiemético é off-label. Não confundir dose de agitação/psicose com dose antiemética; avaliar QT e EPS.",
          "es": "El uso antiemético es off-label. No confundir dosis de agitación/psicosis con dosis antiemética; evaluar QT y EPS."
        }
      }
    },

    clorpromazina: {
      name: { pt: "Clorpromazina", es: "Clorpromazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
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
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Psicose/agitação: iniciar 25–50 mg VO 2–3x/dia; titular conforme resposta.", "Psicosis/agitación: iniciar 25–50 mg VO 2–3 veces/día; titular según respuesta."),
            manutencao: t(lang, "Manutenção: 200–800 mg/dia em doses divididas, conforme tolerabilidade.", "Mantenimiento: 200–800 mg/día en dosis divididas, según tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende do contexto clínico; doses altas exigem monitorização cardiovascular e sedação.", "La dosis máxima depende del contexto clínico; dosis altas requieren monitorización cardiovascular y sedación.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
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
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (t(lang, "Bula FDA de clorpromazina injetável: usar com cautela em hepatopatia; não há algoritmo universal de redução neste registro. Conferir bula local e via; não gerar dose automática.", "Ficha FDA de clorpromazina inyectable: usar con cautela en hepatopatía; no hay algoritmo universal de reducción en este registro. Verificar ficha local y vía; no calcular dosis automática.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
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
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Clorpromazina VO e injetável possuem bulas e vias diferentes. Confirmar concentração/rota no produto disponível; não converter dose entre vias ou extrapolar regime adulto para criança. Conferir medicamentos que prolongam QT.", "Clorpromazina oral e inyectable tienen fichas y vías distintas. Confirmar concentración/vía del producto disponible; no convertir dosis entre vías ni extrapolar pauta adulta a niños. Revisar fármacos que prolongan QT."),
            t(lang, "As bulas FDA de comprimidos e injetável são distintas; concentrações de gotas e ampolas e vias disponíveis em BR/AR requerem confirmação no produto local. Nunca converter VO/IM/IV automaticamente.", "Las fichas FDA de comprimidos e inyectable son distintas; concentraciones de gotas y ampollas y vías disponibles en BR/AR requieren confirmar el producto local. Nunca convertir VO/IM/IV automáticamente."),
            t(lang, "Maior sedação e hipotensão que antipsicóticos típicos de alta potência.", "Mayor sedación e hipotensión que antipsicóticos típicos de alta potencia."),
            t(lang, "Monitorar pressão arterial, especialmente após início ou aumento de dose.", "Monitorizar presión arterial, especialmente tras inicio o aumento de dosis."),
            t(lang, "Orientar fotoproteção por risco de fotossensibilidade.", "Orientar fotoprotección por riesgo de fotosensibilidad."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0e97db69-e09b-407d-8a81-a36cc80fff13",
            "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c2a8b8a3-187f-4000-bde3-b40bb0e5600f",
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

    levomepromazina: {
      name: { pt: "Levomepromazina", es: "Levomepromazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Levomepromazina", "Levomepromazina"),
          class: t(lang, "Antipsicótico típico sedativo — fenotiazina", "Antipsicótico típico sedativo — fenotiazina"),
          category: "antipsicotico",
          commercialNames: {
            br: ["Neozine", "Levomepromazina Cristália"],
            ar: ["Nozinan", "Levomepromazina Northia"]
          },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL"),
            t(lang, "Ampola 25 mg/mL", "Ampolla 25 mg/mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Agitação/psicose: iniciar 25–50 mg VO à noite ou 2–3x/dia, conforme sedação e resposta.", "Agitación/psicosis: iniciar 25–50 mg VO por la noche o 2–3 veces/día, según sedación y respuesta."),
            paliativo: t(lang, "Cuidados paliativos/náuseas/agitação: doses baixas individualizadas conforme protocolo.", "Cuidados paliativos/náuseas/agitación: dosis bajas individualizadas según protocolo."),
            maxDose: t(lang, "Dose máxima depende da indicação; titular com cautela pelo alto risco de sedação e hipotensão.", "La dosis máxima depende de la indicación; titular con cautela por alto riesgo de sedación e hipotensión.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Psicose aguda com insônia/agitação", "Psicosis aguda con insomnio/agitación"),
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Mania aguda", "Manía aguda"),
            t(lang, "Insônia grave em contexto psiquiátrico selecionado", "Insomnio grave en contexto psiquiátrico seleccionado"),
            t(lang, "Náuseas e vômitos refratários", "Náuseas y vómitos refractarios"),
            t(lang, "Sedação e controle de sintomas em cuidados paliativos", "Sedación y control de síntomas en cuidados paliativos")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com doses menores e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menores y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista D2 com forte bloqueio H1, alfa-1, muscarínico e serotoninérgico; perfil muito sedativo e hipotensor.", "Antagonista D2 con fuerte bloqueo H1, alfa-1, muscarínico y serotoninérgico; perfil muy sedativo e hipotensor."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno pode levar dias a semanas.", "La sedación puede ocurrir en horas; efecto antipsicótico pleno puede tardar días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 15–30 horas.", "Vida media aproximada: 15–30 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência intensa", "Somnolencia intensa"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Visão turva", "Visión borrosa")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Depressão respiratória quando associada a sedativos", "Depresión respiratoria cuando se asocia a sedantes"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: alto risco de sedação profunda, hipotensão, quedas, delirium e aspiração.", "Adulto mayor: alto riesgo de sedación profunda, hipotensión, caídas, delirium y aspiración.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si se usa al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: risco de sedação no lactente; monitorar ou evitar.", "Lactancia: riesgo de sedación en el lactante; monitorizar o evitar.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de sedação prolongada e toxicidade.", "Hepatopatía: mayor riesgo de sedación prolongada y toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Hipotensão grave", "Hipotensión grave"),
            t(lang, "Insuficiência respiratória grave sem suporte", "Insuficiencia respiratoria grave sin soporte"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Álcool", "Alcohol"),
            t(lang, "Opioides e benzodiazepínicos: maior depressão do SNC", "Opioides y benzodiacepinas: mayor depresión del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Anticolinérgicos: maior risco de retenção urinária, constipação e delirium", "Anticolinérgicos: mayor riesgo de retención urinaria, estreñimiento y delirium"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "NOZINAN maleato oral e cloridrato injetável diferem em sal, concentração e via; confirmar bula e apresentação do país. Não usar dose oral como referência direta para injetável ou pediatria.", "NOZINAN maleato oral y clorhidrato inyectable difieren en sal, concentración y vía; confirmar ficha y presentación del país. No usar dosis oral como referencia directa para inyectable o pediatría."),
            t(lang, "Nozinan oral (maleato) e injetável (cloridrato) têm sais, vias e bulas distintas; não converter doses/formulações automaticamente. Confirmar apresentação local.", "Nozinan oral (maleato) e inyectable (clorhidrato) tienen sales, vías y fichas diferentes; no convertir dosis/formulaciones automáticamente. Verificar presentación local."),
            t(lang, "Antipsicótico muito sedativo; titular lentamente.", "Antipsicótico muy sedativo; titular lentamente."),
            t(lang, "Monitorar pressão arterial e risco de quedas.", "Monitorizar presión arterial y riesgo de caídas."),
            t(lang, "Cuidado em combinação com opioides, benzodiazepínicos ou álcool.", "Cuidado en combinación con opioides, benzodiacepinas o alcohol."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.medicines.org.uk/emc/product/1429/smpc",
            "https://www.medicines.org.uk/emc/product/1428/smpc",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    periciazina: {
      name: { pt: "Periciazina", es: "Periciazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Periciazina", "Periciazina"),
          class: t(lang, "Antipsicótico típico — fenotiazina piperidínica", "Antipsicótico típico — fenotiazina piperidínica"),
          category: "antipsicotico",
          commercialNames: { br: ["Neuleptil", "Periciazina"], ar: ["Neuleptil", "Periciazina"] },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Gotas 10 mg/mL", "Gotas 10 mg/mL"),
            t(lang, "Gotas 40 mg/mL", "Gotas 40 mg/mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Psicose/agitação: iniciar 5–10 mg/dia VO; titular gradualmente conforme resposta.", "Psicosis/agitación: iniciar 5–10 mg/día VO; titular gradualmente según respuesta."),
            comportamento: t(lang, "Distúrbios de comportamento: doses baixas divididas em 1–3 tomadas/dia conforme tolerabilidade.", "Trastornos de conducta: dosis bajas divididas en 1–3 tomas/día según tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende da indicação; titular com cautela por sedação, hipotensão e efeitos extrapiramidais.", "La dosis máxima depende de la indicación; titular con cautela por sedación, hipotensión y efectos extrapiramidales.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Agitação psicomotora", "Agitación psicomotora"),
            t(lang, "Agressividade e impulsividade em casos selecionados", "Agresividad e impulsividad en casos seleccionados"),
            t(lang, "Distúrbios graves de comportamento", "Trastornos graves de conducta"),
            t(lang, "Irritabilidade intensa em contexto psiquiátrico", "Irritabilidad intensa en contexto psiquiátrico"),
            t(lang, "Mania aguda como adjuvante", "Manía aguda como coadyuvante")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 com ação sedativa, antiadrenérgica e anticolinérgica moderada.", "Antagonista dopaminérgico D2 con acción sedativa, antiadrenérgica y anticolinérgica moderada."),
          onset: t(lang, "Sedação pode ocorrer em horas; efeito antipsicótico pleno em dias a semanas.", "La sedación puede ocurrir en horas; efecto antipsicótico pleno en días a semanas."),
          halfLife: t(lang, "Vida média variável; efeito clínico pode persistir por várias horas.", "Vida media variable; el efecto clínico puede persistir varias horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Delirium anticolinérgico", "Delirium anticolinérgico"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas, delirium e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas, delirium y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício e evitar uso sem indicação clara.", "Embarazo: evaluar riesgo-beneficio y evitar uso sin indicación clara.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e sedação prolongada.", "Hepatopatía: mayor riesgo de acumulación y sedación prolongada.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade", "Enfermedad de Parkinson o demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Anticolinérgicos", "Anticolinérgicos"),
            t(lang, "Anti-hipertensivos", "Antihipertensivos"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Periciazina: bula de xarope 10 mg/5 mL NÃO valida gotas ou comprimidos. Para criança, confirmar indicação, idade, peso e concentração exata da apresentação local antes de calcular dose.", "Periciazina: ficha de jarabe 10 mg/5 mL NO valida gotas ni comprimidos. En niños confirmar indicación, edad, peso y concentración exacta de presentación local antes de calcular dosis."),
            t(lang, "A bula Pericyazine xarope 10 mg/5 mL refere-se somente a esse produto; doses pediátricas dependem de peso, indicação e idade. Não converter para gotas ou comprimidos sem bula própria.", "La ficha Pericyazine jarabe 10 mg/5 mL se refiere solo a ese producto; dosis pediátricas dependen de peso, indicación y edad. No convertir a gotas o comprimidos sin prospecto específico."),
            t(lang, "Monitorar sedação, pressão arterial e sintomas extrapiramidais.", "Monitorizar sedación, presión arterial y síntomas extrapiramidales."),
            t(lang, "Evitar em idosos frágeis quando possível.", "Evitar en adultos mayores frágiles cuando sea posible."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.medicines.org.uk/emc/product/3962/smpc",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    flufenazina: {
      name: { pt: "Flufenazina", es: "Flufenazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Flufenazina", "Flufenazina"),
          class: t(lang, "Antipsicótico típico de alta potência — fenotiazina", "Antipsicótico típico de alta potencia — fenotiazina"),
          category: "antipsicotico",
          commercialNames: { br: ["Anatensol", "Flufenan", "Flufenazina"], ar: ["Modecate", "Flufenazina"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Solução oral/gotas", "Solución oral/gotas"),
            t(lang, "Decanoato 25 mg/mL", "Decanoato 25 mg/mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Psicose: iniciar 1–2,5 mg VO 2–3x/dia; titular conforme resposta.", "Psicosis: iniciar 1–2,5 mg VO 2–3 veces/día; titular según respuesta."),
            depot: t(lang, "Decanoato injetável 25 mg/mL da bula FDA citada: dose inicial de 12,5–25 mg IM ou SC; intervalo de manutenção individualizado pela resposta. Não converter VO↔depot automaticamente nem extrapolar a outro produto.", "Decanoato inyectable 25 mg/mL de la ficha FDA citada: dosis inicial 12,5–25 mg IM o SC; intervalo de mantenimiento individualizado según respuesta. No convertir VO↔depot automáticamente ni extrapolar a otro producto."),
            maxDose: t(lang, "Dose máxima depende da indicação; evitar doses altas sem monitorização de EPS e ECG.", "La dosis máxima depende de indicación; evitar dosis altas sin monitorización de EPS y ECG.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Manutenção antipsicótica com formulação depot", "Mantenimiento antipsicótico con formulación depot"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Agitação psicótica em contexto selecionado", "Agitación psicótica en contexto seleccionado")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista potente dos receptores D2; alta potência antipsicótica com maior risco de sintomas extrapiramidais.", "Antagonista potente de receptores D2; alta potencia antipsicótica con mayor riesgo de síntomas extrapiramidales."),
          onset: t(lang, "VO: efeito inicial em dias; depot: liberação prolongada com efeito por semanas.", "VO: efecto inicial en días; depot: liberación prolongada con efecto por semanas."),
          halfLife: t(lang, "Vida média variável; decanoato possui duração prolongada por 2–4 semanas.", "Vida media variable; decanoato posee duración prolongada por 2–4 semanas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Distonia aguda", "Distonía aguda"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Insônia ou inquietação", "Insomnio o inquietud"),
            t(lang, "Boca seca", "Boca seca")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Distonia laríngea rara", "Distonía laríngea rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, QT prolongado e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, QT prolongado y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de toxicidade; titular lentamente.", "Hepatopatía: mayor riesgo de toxicidad; titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade às fenotiazinas", "Hipersensibilidad a fenotiazinas"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "Demência com corpos de Lewy, salvo extrema necessidade", "Demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Lítio: risco de neurotoxicidade", "Litio: riesgo de neurotoxicidad"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anticolinérgicos usados para EPS: maior risco de delirium/constipação", "Anticolinérgicos usados para EPS: mayor riesgo de delirium/estreñimiento")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Flufenazina VO não é intercambiável automaticamente com decanoato depot; confirmar produto, veículo, via e intervalo conforme bula local antes de qualquer conversão. Não extrapolar doses adultas para pediatria.", "Flufenazina oral no es automáticamente intercambiable con decanoato depot; confirmar producto, vehículo, vía e intervalo según prospecto local antes de convertir. No extrapolar dosis adultas a pediatría."),
            t(lang, "Flufenazina oral e decanoato são formulações diferentes; a bula do decanoato em óleo 25 mg/mL admite IM ou SC apenas para o produto citado. Confirmar excipientes, via e apresentação local.", "Flufenazina oral y decanoato son formulaciones distintas; ficha de decanoato en aceite 25 mg/mL admite IM o SC solo para el producto citado. Confirmar excipientes, vía y presentación local."),
            t(lang, "Alto risco extrapiramidal; monitorar acatisia, distonia e parkinsonismo.", "Alto riesgo extrapiramidal; monitorizar acatisia, distonía y parkinsonismo."),
            t(lang, "Formulação depot é útil para baixa adesão, mas exige tolerância prévia ao fármaco oral.", "La formulación depot es útil para baja adherencia, pero exige tolerancia previa al fármaco oral."),
            t(lang, "Considerar ECG se risco de QT.", "Considerar ECG si hay riesgo de QT."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3832d3d3-15ce-4d41-8431-11e9bd04cf4d",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Fluphenazine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    zuclopentixol: {
      name: { pt: "Zuclopentixol", es: "Zuclopentixol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Zuclopentixol", "Zuclopentixol"),
          class: t(lang, "Antipsicótico típico — tioxanteno", "Antipsicótico típico — tioxanteno"),
          category: "antipsicotico",
          commercialNames: { br: ["Clopixol"], ar: ["Clopixol", "Zuclopentixol"] },
          presentation: [
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Acetato IM 50 mg/mL", "Acetato IM 50 mg/mL"),
            t(lang, "Decanoato IM 200 mg/mL", "Decanoato IM 200 mg/mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Psicose: iniciar 10–25 mg/dia VO; titular conforme resposta.", "Psicosis: iniciar 10–25 mg/día VO; titular según respuesta."),
            agitacao: t(lang, "Acetato IM: usado em agitação/psicose aguda conforme protocolo institucional.", "Acetato IM: usado en agitación/psicosis aguda según protocolo institucional."),
            depot: t(lang, "Decanoato IM: manutenção a cada 2–4 semanas conforme resposta e tolerabilidade.", "Decanoato IM: mantenimiento cada 2–4 semanas según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima depende da formulação e indicação; requer monitorização de sedação, EPS e sinais vitais.", "La dosis máxima depende de la formulación e indicación; requiere monitorización de sedación, EPS y signos vitales.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Agitação psicomotora grave", "Agitación psicomotora grave"),
            t(lang, "Mania aguda como adjuvante", "Manía aguda como coadyuvante"),
            t(lang, "Manutenção antipsicótica com depot", "Mantenimiento antipsicótico con depot"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e monitorar sedação/toxicidade.", "Hepatopatía: iniciar con dosis menor y monitorizar sedación/toxicidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 e D1, com ação antipsicótica, sedativa e antiagitação.", "Antagonista dopaminérgico D2 y D1, con acción antipsicótica, sedativa y antiagitación."),
          onset: t(lang, "Acetato IM tem início em horas; decanoato possui efeito prolongado por semanas.", "Acetato IM tiene inicio en horas; decanoato posee efecto prolongado por semanas."),
          halfLife: t(lang, "Vida média depende da formulação; decanoato mantém efeito por 2–4 semanas.", "Vida media depende de la formulación; decanoato mantiene efecto por 2–4 semanas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Depressão do SNC quando associado a sedativos", "Depresión del SNC cuando se asocia a sedantes"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, EPS, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, caídas, EPS, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de toxicidade; titular cautelosamente.", "Hepatopatía: mayor riesgo de toxicidad; titular con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao zuclopentixol ou tioxantenos", "Hipersensibilidad al zuclopentixol o tioxantenos"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Intoxicação aguda por álcool, opioides ou sedativos", "Intoxicación aguda por alcohol, opioides o sedantes"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Zuclopentixol VO di-hidroclorido, acetato IM de curta ação e decanoato depot não são intercambiáveis; verificar sal, concentração, via, intervalo e bula da apresentação BR/AR antes de qualquer conversão.", "Zuclopentixol oral diclorhidrato, acetato IM de acción corta y decanoato depot no son intercambiables; verificar sal, concentración, vía, intervalo y prospecto BR/AR antes de convertir."),
            t(lang, "Separar di-hidroclorido VO, acetato de ação curta e decanoato depot: são produtos diferentes. Não transferir concentração, via ou intervalo entre eles.", "Separar diclorhidrato oral, acetato de acción corta y decanoato depot: productos diferentes. No trasladar concentración, vía ni intervalo entre ellos."),
            t(lang, "Formulação acetato IM não é equivalente ao decanoato de manutenção.", "La formulación acetato IM no es equivalente al decanoato de mantenimiento."),
            t(lang, "Monitorar sedação, pressão arterial e sintomas extrapiramidais.", "Monitorizar sedación, presión arterial y síntomas extrapiramidales."),
            t(lang, "Decanoato exige avaliação de tolerância e plano de seguimento.", "El decanoato exige evaluación de tolerancia y plan de seguimiento."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes."),
            t(lang, "Considerar ECG em pacientes com risco cardiovascular ou QT.", "Considerar ECG en pacientes con riesgo cardiovascular o QT.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.medicines.org.uk/emc/product/994/smpc",
            "https://www.medicines.org.uk/emc/product/993/smpc",
            "https://www.medicines.org.uk/emc/product/6414/smpc",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    tiotixeno: {
      name: { pt: "Tiotixeno", es: "Tiotixeno" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Tiotixeno", "Tiotixeno"),
          class: t(lang, "Antipsicótico típico — tioxanteno", "Antipsicótico típico — tioxanteno"),
          category: "antipsicotico",
          commercialNames: { br: ["Navane", "Tiotixeno"], ar: ["Navane", "Tiotixeno"] },
          presentation: [
            t(lang, "Cápsula 1 mg", "Cápsula 1 mg"),
            t(lang, "Cápsula 2 mg", "Cápsula 2 mg"),
            t(lang, "Cápsula 5 mg", "Cápsula 5 mg"),
            t(lang, "Cápsula 10 mg", "Cápsula 10 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: iniciar 2 mg VO 3x/dia ou 5 mg VO 2x/dia; titular conforme resposta.", "Esquizofrenia: iniciar 2 mg VO 3 veces/día o 5 mg VO 2 veces/día; titular según respuesta."),
            manutencao: t(lang, "Manutenção: geralmente 15–30 mg/dia em doses divididas.", "Mantenimiento: generalmente 15–30 mg/día en dosis divididas."),
            maxDose: t(lang, "Dose máxima usual: 60 mg/dia.", "Dosis máxima habitual: 60 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Psicose aguda em casos selecionados", "Psicosis aguda en casos seleccionados"),
            t(lang, "Agitação psicótica", "Agitación psicótica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Manutenção antipsicótica em pacientes previamente respondedores", "Mantenimiento antipsicótico en pacientes previamente respondedores")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com dose menor e titular lentamente.", "Hepatopatía: iniciar con dosis menor y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.", "Antagonista dopaminérgico D2, reduciendo síntomas psicóticos positivos; posee riesgo extrapiramidal relevante."),
          onset: t(lang, "Sedação e redução de agitação podem ocorrer em horas a dias; efeito antipsicótico pleno em dias a semanas.", "Sedación y reducción de agitación pueden ocurrir en horas a días; efecto antipsicótico pleno en días a semanas."),
          halfLife: t(lang, "Vida média aproximada: 20–40 horas.", "Vida media aproximada: 20–40 horas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Distonia aguda", "Distonía aguda"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Depressão importante do SNC se associado a sedativos", "Depresión importante del SNC si se asocia a sedantes")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, sedação, quedas, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, sedación, caídas, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e toxicidade.", "Hepatopatía: mayor riesgo de acumulación y toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao tiotixeno ou tioxantenos", "Hipersensibilidad al tiotixeno o tioxantenos"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma"),
            t(lang, "Doença de Parkinson grave", "Enfermedad de Parkinson grave"),
            t(lang, "Demência com corpos de Lewy, salvo extrema necessidade", "Demencia con cuerpos de Lewy, salvo extrema necesidad"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Opioides e benzodiazepínicos", "Opioides y benzodiacepinas"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Tiotixeno cápsulas: bula citada não recomenda uso em menores de 12 anos pela falta de segurança estabelecida. Confirmar apresentação e idade; não gerar esquema pediátrico a partir da dose adulta.", "Tiotixeno cápsulas: la ficha citada no recomienda uso en menores de 12 años por seguridad no establecida. Confirmar presentación y edad; no generar pauta pediátrica desde dosis adulta."),
            t(lang, "Bula Thiothixene cápsulas: uso em menores de 12 anos não recomendado por segurança não estabelecida. Não inferir dose pediátrica a partir da adulta.", "Ficha Thiothixene cápsulas: uso en menores de 12 años no recomendado por seguridad no establecida. No inferir dosis pediátrica de la adulta."),
            t(lang, "Monitorar sintomas extrapiramidais desde o início.", "Monitorizar síntomas extrapiramidales desde el inicio."),
            t(lang, "Considerar ECG em pacientes com risco cardiovascular ou QT.", "Considerar ECG en pacientes con riesgo cardiovascular o QT."),
            t(lang, "Evitar em idosos com demência quando possível.", "Evitar en adultos mayores con demencia cuando sea posible."),
            t(lang, "Evitar associação com álcool e outros sedativos.", "Evitar asociación con alcohol y otros sedantes."),
            t(lang, "Reduzir gradualmente se uso prolongado.", "Reducir gradualmente si uso prolongado.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=81c40311-7dc4-4332-8920-a39a8466aea6",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Thiothixene Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    pimozida: {
      name: { pt: "Pimozida", es: "Pimozida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Pimozida", "Pimozida"),
          class: t(lang, "Antipsicótico típico de alta potência — difenilbutilpiperidina", "Antipsicótico típico de alta potencia — difenilbutilpiperidina"),
          category: "antipsicotico",
          commercialNames: { br: ["Orap", "Pimozida"], ar: ["Orap", "Pimozida"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 4 mg", "Comprimido 4 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Tourette/tics: iniciar 1–2 mg/dia VO; titular lentamente conforme resposta e ECG.", "Tourette/tics: iniciar 1–2 mg/día VO; titular lentamente según respuesta y ECG."),
            manutencao: t(lang, "Manutenção: menor dose efetiva, geralmente 2–10 mg/dia.", "Mantenimiento: menor dosis efectiva, generalmente 2–10 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 10 mg/dia ou conforme limite regulatório local; exige monitorização de QT.", "Dosis máxima habitual: 10 mg/día o según límite regulatorio local; requiere monitorización de QT.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Síndrome de Tourette", "Síndrome de Tourette"),
            t(lang, "Tiques motores crônicos", "Tics motores crónicos"),
            t(lang, "Tiques vocais crônicos", "Tics vocales crónicos"),
            t(lang, "Transtorno delirante em casos selecionados", "Trastorno delirante en casos seleccionados"),
            t(lang, "Psicose crônica em pacientes previamente respondedores", "Psicosis crónica en pacientes previamente respondedores"),
            t(lang, "Coreia ou movimentos hipercinéticos selecionados sob especialista", "Corea o movimientos hipercinéticos seleccionados bajo especialista")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual, mas usar cautela em pacientes frágeis.", "Sin ajuste renal habitual, pero usar con cautela en pacientes frágiles.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: usar com cautela, iniciar baixo e monitorar eventos adversos.", "Hepatopatía: usar con cautela, iniciar bajo y monitorizar eventos adversos.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista dopaminérgico D2 potente; reduz tiques e sintomas psicóticos, mas tem risco relevante de QT prolongado.", "Antagonista dopaminérgico D2 potente; reduce tics y síntomas psicóticos, pero tiene riesgo relevante de prolongación QT."),
          onset: t(lang, "Redução de tiques pode ocorrer em dias a semanas; resposta plena pode exigir titulação gradual.", "La reducción de tics puede ocurrir en días a semanas; respuesta plena puede requerir titulación gradual."),
          halfLife: t(lang, "Vida média aproximada: 55 horas.", "Vida media aproximada: 55 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo medicamentoso", "Parkinsonismo medicamentoso"),
            t(lang, "Rigidez", "Rigidez"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes", "Torsades de pointes"),
            t(lang, "Morte súbita cardíaca em pacientes predispostos", "Muerte súbita cardíaca en pacientes predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT prolongado, EPS, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de QT prolongado, EPS, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; evitar se houver alternativa mais segura.", "Embarazo: evaluar riesgo-beneficio; evitar si hay alternativa más segura.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, irritabilidad y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: maior risco de acúmulo e eventos adversos.", "Hepatopatía: mayor riesgo de acumulación y eventos adversos.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "QT longo congênito ou QT prolongado significativo", "QT largo congénito o QT prolongado significativo"),
            t(lang, "História de arritmia ventricular grave", "Historia de arritmia ventricular grave"),
            t(lang, "Hipocalemia ou hipomagnesemia não corrigidas", "Hipopotasemia o hipomagnesemia no corregidas"),
            t(lang, "Uso concomitante com fármacos que prolongam QT", "Uso concomitante con fármacos que prolongan QT"),
            t(lang, "Uso com inibidores fortes de CYP3A4 ou CYP2D6", "Uso con inhibidores fuertes de CYP3A4 o CYP2D6"),
            t(lang, "Uso com ISRS como fluoxetina, paroxetina, sertralina ou escitalopram/citalopram conforme risco de QT/interação", "Uso con ISRS como fluoxetina, paroxetina, sertralina o escitalopram/citalopram según riesgo de QT/interacción")
          ],
          interactions: [
            t(lang, "Macrolídeos, quinolonas e antiarrítmicos: risco de QT", "Macrólidos, quinolonas y antiarrítmicos: riesgo de QT"),
            t(lang, "Azólicos, ritonavir e outros inibidores fortes de CYP3A4", "Azoles, ritonavir y otros inhibidores fuertes de CYP3A4"),
            t(lang, "Fluoxetina, paroxetina e outros inibidores de CYP2D6", "Fluoxetina, paroxetina y otros inhibidores de CYP2D6"),
            t(lang, "Citalopram/escitalopram: risco adicional de QT", "Citalopram/escitalopram: riesgo adicional de QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Pimozida: antes de usar, revisar ECG/QT, potássio/magnésio e lista de interações CYP/QT da bula; indicação e dose para tiques não devem ser transpostas a outras condições. Sem cálculo pediátrico automático.", "Pimozida: antes de usar revisar ECG/QT, potasio/magnesio e interacciones CYP/QT del prospecto; indicación y dosis para tics no se transfieren a otras patologías. Sin cálculo pediátrico automático."),
            t(lang, "Bula FDA para tiques de Tourette após resposta inadequada a tratamento padrão: riscos de QT e interações contraindicam combinações específicas (inclusive vários inibidores CYP). Conferir ECG, eletrólitos e lista completa antes de prescrever.", "Ficha FDA para tics de Tourette tras respuesta insatisfactoria al tratamiento estándar: riesgos QT e interacciones contraindican combinaciones específicas (incluidos inhibidores CYP). Verificar ECG, electrolitos y lista completa."),
            t(lang, "Obrigatório avaliar risco de QT antes de iniciar.", "Obligatorio evaluar riesgo de QT antes de iniciar."),
            t(lang, "Realizar ECG basal e durante titulação em pacientes de risco.", "Realizar ECG basal y durante titulación en pacientes de riesgo."),
            t(lang, "Corrigir potássio e magnésio antes de usar.", "Corregir potasio y magnesio antes de usar."),
            t(lang, "Evitar combinação com fármacos que prolongam QT.", "Evitar combinación con fármacos que prolongan QT."),
            t(lang, "Reservar para indicações específicas, especialmente Tourette/tics refratários.", "Reservar para indicaciones específicas, especialmente Tourette/tics refractarios.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=70b079e2-a1f7-4a93-8685-d60a4d7c1280",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Pimozide Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    sulpirida: {
      name: { pt: "Sulpirida", es: "Sulpirida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const clcrRaw = paciente.clcr;
        const clcr = (clcrRaw === null || clcrRaw === undefined || clcrRaw === '') ? NaN : Number(clcrRaw);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Sulpirida", "Sulpirida"),
          class: t(lang, "Antipsicótico benzamida substituída", "Antipsicótico benzamida sustituida"),
          category: "antipsicotico",
          commercialNames: { br: ["Dogmatil", "Equilid", "Sulpirida"], ar: ["Dogmatil", "Sulpirida", "Sulpirida Gador"] },
          presentation: [
            t(lang, "Cápsula/comprimido 50 mg", "Cápsula/comprimido 50 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Solução oral/gotas", "Solución oral/gotas"),
            t(lang, "Ampola 100 mg/2 mL", "Ampolla 100 mg/2 mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Psicose/esquizofrenia: 400–800 mg/dia VO em doses divididas; titular conforme resposta.", "Psicosis/esquizofrenia: 400–800 mg/día VO en dosis divididas; titular según respuesta."),
            doseBaixa: t(lang, "Sintomas ansiosos/somatização/vertigem: doses baixas, geralmente 50–150 mg/dia conforme indicação local.", "Síntomas ansiosos/somatización/vértigo: dosis bajas, generalmente 50–150 mg/día según indicación local."),
            maxDose: t(lang, "Dose máxima usual em psicose: até 1200 mg/dia em casos selecionados.", "Dosis máxima habitual en psicosis: hasta 1200 mg/día en casos seleccionados.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Psicose aguda", "Psicosis aguda"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Sintomas negativos em esquizofrenia em casos selecionados", "Síntomas negativos en esquizofrenia en casos seleccionados"),
            t(lang, "Ansiedade somatizada em doses baixas", "Ansiedad somatizada en dosis bajas"),
            t(lang, "Vertigem/labirintopatias em alguns protocolos", "Vértigo/laberintopatías en algunos protocolos"),
            t(lang, "Dispepsia funcional ou sintomas gastrointestinais funcionais em alguns países", "Dispepsia funcional o síntomas gastrointestinales funcionales en algunos países")
          ],
          renalAdjustment: idadeAdultaValidada ? (!Number.isFinite(clcr) || clcr <= 0 ? t(lang, "ClCr não informado ou inválido: ajuste renal não determinado; não inferir função normal.", "ClCr no informado o inválido: ajuste renal indeterminado; no inferir función normal.") : insuficienciaRenal ? t(lang, "Necessita ajuste renal conforme ClCr e bula específica; não calcular dose automaticamente.", "Requiere ajuste renal según ClCr y ficha específica; no calcular dosis automáticamente.") : t(lang, "ClCr informado ≥60 mL/min: verificar produto, idade e indicação antes da seleção da dose.", "ClCr informado ≥60 mL/min: verificar producto, edad e indicación antes de dosificar.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Sem metabolismo hepático relevante; geralmente não exige ajuste hepático, mas monitorar tolerabilidade.", "Sin metabolismo hepático relevante; generalmente no requiere ajuste hepático, pero monitorizar tolerabilidad.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista seletivo dopaminérgico D2/D3, com ação antipsicótica em doses altas e efeitos dopaminérgicos diferenciados em doses baixas.", "Antagonista selectivo dopaminérgico D2/D3, con acción antipsicótica en dosis altas y efectos dopaminérgicos diferenciados en dosis bajas."),
          onset: t(lang, "Efeito sedativo/sintomático pode ocorrer em dias; efeito antipsicótico pleno pode levar semanas.", "Efecto sedativo/sintomático puede ocurrir en días; efecto antipsicótico pleno puede tardar semanas."),
          halfLife: t(lang, "Vida média aproximada: 6–9 horas; eliminação principalmente renal.", "Vida media aproximada: 6–9 horas; eliminación principalmente renal."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Galactorreia", "Galactorrea"),
            t(lang, "Amenorreia", "Amenorrea"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Prolongamento QT e arritmias", "Prolongación QT y arritmias"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Acúmulo e toxicidade em insuficiência renal", "Acumulación y toxicidad en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, EPS, quedas, QT e acúmulo se função renal reduzida.", "Adulto mayor: mayor riesgo de sedación, EPS, caídas, QT y acumulación si función renal reducida.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso no fim da gestação.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso al final del embarazo.") : null,
            lactante ? t(lang, "Lactação: pode aumentar prolactina e passar ao leite; monitorar lactente.", "Lactancia: puede aumentar prolactina y pasar a la leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: geralmente menor impacto, mas considerar polifarmácia e sedação.", "Hepatopatía: generalmente menor impacto, pero considerar polifarmacia y sedación.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajustar dose obrigatoriamente.", "Insuficiencia renal: ajustar dosis obligatoriamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à sulpirida ou benzamidas", "Hipersensibilidad a sulpirida o benzamidas"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "Tumores prolactino-dependentes", "Tumores prolactino-dependientes"),
            t(lang, "Doença de Parkinson grave, salvo indicação especializada", "Enfermedad de Parkinson grave, salvo indicación especializada"),
            t(lang, "QT prolongado significativo ou arritmias graves", "QT prolongado significativo o arritmias graves")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Lítio: possível neurotoxicidade com antipsicóticos", "Litio: posible neurotoxicidad con antipsicóticos")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Sulpirida comprimidos 200 mg: sem ClCr válido não afirmar função renal normal. Ajustes dependem de função renal, idade e apresentação; não extrapolar a solução nem usar dose adulta como dose pediátrica.", "Sulpirida comprimidos 200 mg: sin ClCr válido no afirmar función renal normal. Ajustes dependen de función renal, edad y presentación; no extrapolar a solución ni usar dosis adulta como pediátrica."),
            t(lang, "SmPC 200 mg comprimidos: experiência insuficiente em menores de 14 anos; idosos com disfunção renal requerem redução individualizada. Não extrapolar outras indicações ou solução a este produto.", "Ficha de comprimidos 200 mg: experiencia insuficiente en menores de 14 años; mayores con deterioro renal requieren reducción individualizada. No extrapolar otras indicaciones o solución a este producto."),
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.", "Monitorizar prolactina si galactorrea, amenorrea, infertilidad o disfunción sexual."),
            t(lang, "Considerar ECG em pacientes com risco de QT.", "Considerar ECG en pacientes con riesgo de QT."),
            t(lang, "Evitar em tumores prolactino-dependentes.", "Evitar en tumores prolactino-dependientes."),
            t(lang, "Monitorar sintomas extrapiramidais.", "Monitorizar síntomas extrapiramidales.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.medicines.org.uk/emc/product/2430/smpc",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    // ── ANTIPSICÓTICOS ATÍPICOS (SEGUNDA GERAÇÃO) ──

    risperidona: {
      name: { pt: "Risperidona", es: "Risperidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Risperidona", "Risperidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Risperdal", "Riss", "Risperidon", "Risperidona EMS"], ar: ["Risperdal", "Risperin", "Risperidona Bagó", "Risperidona Gador"] },
          presentation: [
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg"),
            t(lang, "Solução oral 1 mg/mL", "Solución oral 1 mg/mL"),
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 1–2 mg/dia VO; usual 2–6 mg/dia.", "Esquizofrenia: iniciar 1–2 mg/día VO; habitual 2–6 mg/día."),
            mania: t(lang, "Mania aguda: 1–2 mg/dia; titular conforme resposta.", "Manía aguda: 1–2 mg/día; titular según respuesta."),
            maxDose: t(lang, "Dose máxima usual: 6 mg/dia; doses maiores aumentam EPS e raramente agregam benefício.", "Dosis máxima habitual: 6 mg/día; dosis mayores aumentan EPS y rara vez agregan beneficio.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Irritabilidade associada ao transtorno do espectro autista", "Irritabilidad asociada al trastorno del espectro autista"),
            t(lang, "Agitação psicótica", "Agitación psicótica"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Agressividade grave em casos selecionados", "Agresividad grave en casos seleccionados")
          ],
          renalAdjustment: t(lang, "RISPERIDONA comprimidos VO (bula FDA): se ClCr <30 mL/min em adultos, iniciar 0,5 mg VO a cada 12 h; aumentar com cautela conforme bula e tolerabilidade. Não aplicar este esquema a LAI.", "RISPERIDONA comprimidos VO (ficha FDA): si ClCr <30 mL/min en adultos, iniciar 0,5 mg VO cada 12 h; aumentar con precaución según ficha y tolerancia. No aplicar este esquema a LAI."),
          hepaticAdjustment: t(lang, "RISPERIDONA comprimidos VO (bula FDA): insuficiência hepática grave, Child-Pugh 10–15, em adultos: iniciar 0,5 mg a cada 12 h e titular conforme bula. Um indicador booleano de hepatopatia não determina Child-Pugh.", "RISPERIDONA comprimidos VO (ficha FDA): insuficiencia hepática grave, Child-Pugh 10–15, en adultos: iniciar 0,5 mg cada 12 h y titular según ficha. Un indicador booleano de hepatopatía no determina Child-Pugh."),
          mechanism: t(lang, "Antagonista serotoninérgico 5HT2A e dopaminérgico D2; em doses maiores aumenta bloqueio D2 e risco extrapiramidal.", "Antagonista serotoninérgico 5HT2A y dopaminérgico D2; en dosis mayores aumenta bloqueo D2 y riesgo extrapiramidal."),
          onset: t(lang, "Redução de agitação pode ocorrer em dias; efeito antipsicótico pleno geralmente em 2–6 semanas.", "Reducción de agitación puede ocurrir en días; efecto antipsicótico pleno generalmente en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: risperidona 3–20 h; metabólito ativo 9-hidroxirisperidona 20–24 h.", "Vida media aproximada: risperidona 3–20 h; metabolito activo 9-hidroxirisperidona 20–24 h."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo em doses maiores", "Parkinsonismo en dosis mayores"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Disfunção sexual", "Disfunción sexual")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em pacientes predispostos", "Prolongación QT en pacientes predispuestos"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas extrapiramidais/neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas extrapiramidales/neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, irritabilidad, alimentación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar baixo e titular lentamente.", "Hepatopatía: iniciar bajo y titular lentamente.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar baixo e titular lentamente.", "Insuficiencia renal: iniciar bajo y titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à risperidona ou paliperidona", "Hipersensibilidad a risperidona o paliperidona"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad"),
            t(lang, "Histórico de síndrome neuroléptica maligna relacionada ao fármaco", "Antecedente de síndrome neuroléptico maligno relacionada al fármaco")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6", "Fluoxetina/paroxetina: pueden aumentar niveles por CYP2D6"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: [
            t(lang, "Bula risperidona VO: dose e faixa etária variam por esquizofrenia, mania e irritabilidade associada ao autismo; disfunção renal/hepática grave exige início específico. Não transferir pauta VO para LAI.", "Ficha risperidona oral: dosis y edad varían por esquizofrenia, manía e irritabilidad ligada a autismo; deterioro renal/hepático grave exige inicio específico. No transferir pauta oral a LAI."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.", "Monitorizar prolactina si galactorrea, amenorrea, infertilidad o disfunción sexual."),
            t(lang, "EPS aumentam com doses maiores.", "Los EPS aumentan con dosis mayores."),
            t(lang, "Evitar uso rotineiro em psicose associada à demência.", "Evitar uso rutinario en psicosis asociada a demencia."),
            t(lang, "Considerar ECG se risco cardiovascular ou associação com fármacos que prolongam QT.", "Considerar ECG si hay riesgo cardiovascular o asociación con fármacos que prolongan QT.")
          ],
          ref: [
            "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a6347895-5f16-43b4-92a0-b9904ac81937",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Risperidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    "olanzapina": {
      "name": {
        "pt": "Olanzapina",
        "es": "Olanzapina"
      },
      "category": "psiquiatria",
      "class": {
        "pt": "Antipsicótico atípico multirreceptor",
        "es": "Antipsicótico atípico multirreceptor"
      },
      "indications": {
        "pt": [
          "Esquizofrenia/transtorno bipolar conforme rotulagem",
          "Profilaxia e tratamento de náuseas/vômitos por quimioterapia como uso guideline-based/off-label"
        ],
        "es": [
          "Esquizofrenia/trastorno bipolar según rotulado",
          "Profilaxis y tratamiento de náuseas/vómitos por quimioterapia como uso basado en guías/off-label"
        ]
      },
      "mechanism": {
        "pt": "Antagoniza múltiplos receptores, incluindo dopaminérgicos D2 e serotoninérgicos 5-HT2/5-HT3, contribuindo para efeito antiemético.",
        "es": "Antagoniza múltiples receptores, incluidos dopaminérgicos D2 y serotoninérgicos 5-HT2/5-HT3, contribuyendo al efecto antiemético."
      },
      "dose": {
        "adult": {
          "pt": "CINV: diretrizes ASCO/MASCC-ESMO incluem olanzapina em esquemas de alto risco; 5 mg é opção para adultos, com duração tipicamente dias 1–4 conforme protocolo. Breakthrough: diretrizes também apoiam olanzapina se não usada profilaticamente.",
          "es": "CINV: guías ASCO/MASCC-ESMO incluyen olanzapina en esquemas de alto riesgo; 5 mg es una opción en adultos, típicamente días 1–4 según protocolo. Breakthrough: las guías también apoyan olanzapina si no se usó profilácticamente."
        },
        "pediatric": {
          "pt": "Uso antiemético pediátrico deve seguir protocolo oncológico especializado; não extrapolar automaticamente o esquema adulto.",
          "es": "El uso antiemético pediátrico debe seguir protocolo oncológico especializado; no extrapolar automáticamente el esquema adulto."
        }
      },
      "administration": {
        "pt": [
          "Preferir administração noturna quando sedação for relevante",
          "Monitorar sedação, ortostase e glicemia em pacientes de risco"
        ],
        "es": [
          "Preferir administración nocturna cuando la sedación sea relevante",
          "Monitorizar sedación, ortostatismo y glucemia en pacientes de riesgo"
        ]
      },
      "renalAdjustment": {
        "required": false,
        "message": {
          "pt": "Sem ajuste renal rotineiro.",
          "es": "Sin ajuste renal rutinario."
        }
      },
      "hepaticAdjustment": {
        "required": true,
        "message": {
          "pt": "Usar cautela em hepatopatia e iniciar baixo quando houver maior vulnerabilidade.",
          "es": "Usar precaución en hepatopatía e iniciar bajo cuando exista mayor vulnerabilidad."
        }
      },
      "commonAdverseEffects": {
        "pt": [
          "Sedação",
          "Aumento de apetite",
          "Ganho de peso",
          "Boca seca"
        ],
        "es": [
          "Sedación",
          "Aumento del apetito",
          "Aumento de peso",
          "Boca seca"
        ]
      },
      "dangerousAdverseEffects": {
        "pt": [
          "Hiperglicemia grave",
          "Síndrome neuroléptica maligna",
          "Discinesia tardia",
          "Mortalidade aumentada em idosos com psicose relacionada à demência"
        ],
        "es": [
          "Hiperglucemia grave",
          "Síndrome neuroléptico maligno",
          "Discinesia tardía",
          "Mayor mortalidad en adultos mayores con psicosis relacionada con demencia"
        ]
      },
      "contraindications": {
        "absolute": {
          "pt": [
            "Hipersensibilidade"
          ],
          "es": [
            "Hipersensibilidad"
          ]
        },
        "relative": {
          "pt": [
            "Diabetes, obesidade, sedação importante, idosos com demência"
          ],
          "es": [
            "Diabetes, obesidad, sedación importante, adultos mayores con demencia"
          ]
        }
      },
      "safetyFlags": {
        "bleedingRisk": false,
        "renalHighRisk": false,
        "hepaticCaution": true,
        "antidoteAvailable": false,
        "highAlertMedication": false,
        "warning": {
          "pt": "Uso antiemético em CINV é guideline-based/off-label; sedação é frequente e deve orientar dose/horário. Distinguir olanzapina oral, ZYDIS, IM de ação curta e pamoato depot: vias e regras de uso diferem. O registro antiemético off-label não autoriza converter doses entre formas.",
          "es": "El uso antiemético en CINV es basado en guías/off-label; la sedación es frecuente y debe orientar dosis/horario. Distinguir olanzapina oral, ZYDIS, IM de acción corta y pamoato depot: vías y reglas de uso difieren. El registro antiemético off-label no autoriza convertir dosis entre formas."
        }
      }
    },

    quetiapina: {
      name: { pt: "Quetiapina", es: "Quetiapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Quetiapina", "Quetiapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Seroquel", "Quetros", "Quetipin", "Quetiapina EMS"], ar: ["Seroquel", "Quetiapina Bagó", "Quetiapina Gador", "Quetiapina Richmond"] },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 300 mg", "Comprimido 300 mg"),
            t(lang, "Comprimido XR 50 mg", "Comprimido XR 50 mg"),
            t(lang, "Comprimido XR 200 mg", "Comprimido XR 200 mg"),
            t(lang, "Comprimido XR 300 mg", "Comprimido XR 300 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: titular gradualmente até 300–800 mg/dia.", "Esquizofrenia: titular gradualmente hasta 300–800 mg/día."),
            bipolar: t(lang, "Depressão bipolar: geralmente 300 mg VO à noite após titulação.", "Depresión bipolar: generalmente 300 mg VO por la noche tras titulación."),
            insoniaOffLabel: t(lang, "Insônia off-label: doses baixas são usadas, mas não é primeira escolha pelo risco metabólico e sedativo.", "Insomnio off-label: se usan dosis bajas, pero no es primera elección por riesgo metabólico y sedativo."),
            maxDose: t(lang, "Dose máxima usual: 800 mg/dia.", "Dosis máxima habitual: 800 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Transtorno bipolar — depressão bipolar", "Trastorno bipolar — depresión bipolar"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Insônia em contexto psiquiátrico selecionado off-label", "Insomnio en contexto psiquiátrico seleccionado off-label"),
            t(lang, "Agitação psicótica com necessidade de perfil menos extrapiramidal", "Agitación psicótica con necesidad de perfil menos extrapiramidal")
          ],
          renalAdjustment: t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual."),
          hepaticAdjustment: t(lang, "QUETIAPINA comprimidos de liberação imediata (bula FDA): em insuficiência hepática, iniciar 25 mg VO/dia e titular em incrementos de 25–50 mg/dia conforme resposta/tolerabilidade. Não extrapolar a XR.", "QUETIAPINA comprimidos de liberación inmediata (ficha FDA): en insuficiencia hepática, iniciar 25 mg VO/día y titular en incrementos de 25–50 mg/día según respuesta/tolerancia. No extrapolar a XR."),
          mechanism: t(lang, "Antagonista 5HT2A e D2, com forte bloqueio H1 e alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.", "Antagonista 5HT2A y D2, con fuerte bloqueo H1 y alfa-1; metabolito norquetiapina contribuye al efecto antidepresivo."),
          onset: t(lang, "Sedação pode ocorrer no primeiro dia; efeito antipsicótico/estabilizador geralmente em 1–6 semanas conforme indicação.", "Sedación puede ocurrir el primer día; efecto antipsicótico/estabilizador generalmente en 1–6 semanas según indicación."),
          halfLife: t(lang, "Vida média aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas.", "Vida media aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Boca seca", "Boca seca"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Dislipidemia", "Dislipidemia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Hiperglicemia e síndrome metabólica", "Hiperglucemia y síndrome metabólico"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Quedas por hipotensão/sedação", "Caídas por hipotensión/sedación"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Neutropenia rara", "Neutropenia rara")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas, delirium e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas, delirium y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar peso e glicemia.", "Embarazo: evaluar riesgo-beneficio; monitorizar peso y glucemia.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação e alimentação do lactente.", "Lactancia: monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar com dose baixa e titular lentamente.", "Hepatopatía: iniciar con dosis baja y titular lentamente.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à quetiapina", "Hipersensibilidad a quetiapina"),
            t(lang, "Uso com inibidores fortes de CYP3A4 sem ajuste/avaliação", "Uso con inhibidores fuertes de CYP3A4 sin ajuste/evaluación"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina e ritonavir: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol, claritromicina y ritonavir: aumentan niveles"),
            t(lang, "Indutores CYP3A4 como carbamazepina, fenitoína e rifampicina: reduzem níveis", "Inductores CYP3A4 como carbamazepina, fenitoína y rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC: maior sedação", "Alcohol y depresores del SNC: mayor sedación"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: [
            t(lang, "Comprimidos de liberação imediata e SEROQUEL XR têm bulas e esquemas distintos. Não reutilizar automaticamente titulação IR em XR ou tratar uso para insônia off-label como indicação aprovada.", "Comprimidos de liberación inmediata y SEROQUEL XR tienen prospectos y esquemas distintos. No reutilizar titulación IR en XR ni considerar el uso para insomnio off-label una indicación aprobada."),
            t(lang, "Risco importante de sedação e hipotensão ortostática no início.", "Riesgo importante de sedación e hipotensión ortostática al inicio."),
            t(lang, "Monitorar peso, glicemia/HbA1c, lipídios e pressão arterial.", "Monitorizar peso, glucemia/HbA1c, lípidos y presión arterial."),
            t(lang, "Não usar apenas como hipnótico de rotina sem avaliar risco-benefício.", "No usar solo como hipnótico de rutina sin evaluar riesgo-beneficio."),
            t(lang, "Titular lentamente, especialmente em idosos e hepatopatas.", "Titular lentamente, especialmente en adultos mayores y hepatópatas."),
            t(lang, "Cuidado com interações por CYP3A4.", "Cuidado con interacciones por CYP3A4.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ffe52b98-9872-48c1-90fd-8fcd37c3432f",
            "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=473a3ac4-67f4-4782-baa9-7f9bdd8761f4",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Quetiapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    clozapina: {
      name: { pt: "Clozapina", es: "Clozapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Clozapina", "Clozapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Leponex", "Clozapina Cristália", "Clozapina EMS"], ar: ["Leponex", "Clozapina Fabra", "Clozapina Gador"] },
          presentation: [
            t(lang, "Comprimido 25 mg", "Comprimido 25 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Iniciar 12,5 mg VO 1–2x/dia; titular lentamente conforme tolerabilidade.", "Iniciar 12,5 mg VO 1–2 veces/día; titular lentamente según tolerabilidad."),
            manutencao: t(lang, "Dose usual: 300–450 mg/dia, podendo variar conforme resposta clínica e nível sérico.", "Dosis habitual: 300–450 mg/día, pudiendo variar según respuesta clínica y nivel sérico."),
            maxDose: t(lang, "Dose máxima usual: 900 mg/dia sob supervisão especializada.", "Dosis máxima habitual: 900 mg/día bajo supervisión especializada.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia resistente ao tratamento", "Esquizofrenia resistente al tratamiento"),
            t(lang, "Redução do risco suicida em esquizofrenia ou transtorno esquizoafetivo", "Reducción del riesgo suicida en esquizofrenia o trastorno esquizoafectivo"),
            t(lang, "Psicose com agressividade persistente", "Psicosis con agresividad persistente"),
            t(lang, "Psicose em doença de Parkinson em casos selecionados", "Psicosis en enfermedad de Parkinson en casos seleccionados"),
            t(lang, "Transtorno esquizoafetivo resistente", "Trastorno esquizoafectivo resistente"),
            t(lang, "Falha terapêutica com múltiplos antipsicóticos", "Falla terapéutica con múltiples antipsicóticos"),
            t(lang, "Discinesia tardia grave com necessidade de troca antipsicótica", "Discinesia tardía grave con necesidad de cambio antipsicótico")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela e monitorar enzimas hepáticas.", "Hepatopatía: iniciar con cautela y monitorizar enzimas hepáticas.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista D4, 5HT2A, D2 fraco, H1, muscarínico e alfa-1; alta eficácia em esquizofrenia resistente com baixo risco extrapiramidal.", "Antagonista D4, 5HT2A, D2 débil, H1, muscarínico y alfa-1; alta eficacia en esquizofrenia resistente con bajo riesgo extrapiramidal."),
          onset: t(lang, "Resposta pode levar semanas a meses; titular lentamente por risco de hipotensão, sedação e convulsões.", "La respuesta puede tardar semanas a meses; titular lentamente por riesgo de hipotensión, sedación y convulsiones."),
          halfLife: t(lang, "Vida média aproximada: 12 horas.", "Vida media aproximada: 12 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Sialorreia", "Sialorrea"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Constipação", "Estreñimiento"),
            t(lang, "Taquicardia", "Taquicardia"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Sedação", "Sedación")
          ],
          dangerousAdverseEffects: [
            t(lang, "Agranulocitose/neutropenia grave", "Agranulocitosis/neutropenia grave"),
            t(lang, "Miocardite", "Miocarditis"),
            t(lang, "Cardiomiopatia", "Miocardiopatía"),
            t(lang, "Convulsões dose-dependentes", "Convulsiones dosis-dependientes"),
            t(lang, "Íleo paralítico/constipação grave", "Íleo paralítico/estreñimiento grave"),
            t(lang, "Síndrome metabólica grave", "Síndrome metabólico grave"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, constipação grave, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, estreñimiento grave, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar glicemia e recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar glucemia y recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: geralmente evitar pelo risco de sedação e agranulocitose no lactente.", "Lactancia: generalmente evitar por riesgo de sedación y agranulocitosis en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: monitorar enzimas hepáticas e sinais de toxicidade.", "Hepatopatía: monitorizar enzimas hepáticas y signos de toxicidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "História de agranulocitose induzida por clozapina", "Antecedente de agranulocitosis inducida por clozapina"),
            t(lang, "Neutropenia grave", "Neutropenia grave"),
            t(lang, "Miocardite ou cardiomiopatia associada à clozapina", "Miocarditis o miocardiopatía asociada a clozapina"),
            t(lang, "Epilepsia não controlada", "Epilepsia no controlada"),
            t(lang, "Íleo paralítico", "Íleo paralítico"),
            t(lang, "Depressão grave do SNC ou coma", "Depresión grave del SNC o coma")
          ],
          interactions: [
            t(lang, "Tabagismo: reduz níveis por indução CYP1A2", "Tabaquismo: reduce niveles por inducción CYP1A2"),
            t(lang, "Fluvoxamina/ciprofloxacino: aumentam níveis por CYP1A2", "Fluvoxamina/ciprofloxacino: aumentan niveles por CYP1A2"),
            t(lang, "Carbamazepina: evitar por risco hematológico", "Carbamazepina: evitar por riesgo hematológico"),
            t(lang, "Benzodiazepínicos e álcool: maior sedação/depressão respiratória", "Benzodiacepinas y alcohol: mayor sedación/depresión respiratoria"),
            t(lang, "Anticolinérgicos: maior risco de constipação grave/íleo", "Anticolinérgicos: mayor riesgo de estreñimiento grave/íleo")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "FDA: REMS de clozapina retirado em 13/06/2025 nos EUA; monitorização de ANC continua recomendada. Não confundir com REMS de ZYPREXA RELPREVV, nem reiniciar dose prévia após interrupção sem protocolo da bula.", "FDA: REMS de clozapina retirado el 13/06/2025 en EE. UU.; continúa recomendada la vigilancia de ANC. No confundir con REMS de ZYPREXA RELPREVV ni reiniciar dosis previa tras interrupción sin protocolo de ficha."),
            t(lang, "Após interrupção, não retomar automaticamente a dose anterior: reinício requer esquema da bula para reduzir risco de hipotensão, bradicardia e síncope. Monitorar constipação grave/íleo e sinais de miocardite.", "Tras una interrupción, no reanudar automáticamente la dosis previa: el reinicio requiere pauta de la ficha para reducir hipotensión, bradicardia y síncope. Vigilar estreñimiento grave/íleo y signos de miocarditis."),
            t(lang, "Monitorar ANC antes e durante o tratamento na frequência e limiares da bula e das regras locais; não confundir com programa REMS EUA, removido em 13/06/2025.", "Monitorizar ANC antes y durante el tratamiento con frecuencia y umbrales de la ficha y reglas locales; no confundir con programa REMS EUA, retirado el 13/06/2025."),
            t(lang, "Monitorar sinais de infecção, febre, dor torácica, dispneia e constipação.", "Monitorizar signos de infección, fiebre, dolor torácico, disnea y estreñimiento."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Mudança no tabagismo pode alterar níveis séricos.", "Cambios en tabaquismo pueden alterar niveles séricos."),
            t(lang, "Constipação com clozapina pode ser grave e fatal.", "El estreñimiento con clozapina puede ser grave y fatal.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=883b5d43-0339-7dc1-f775-93791fb9b978",
            "https://www.fda.gov/drugs/drug-safety-and-availability/fda-removes-risk-evaluation-and-mitigation-strategy-rems-program-antipsychotic-drug-clozapine",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Clozapine Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    aripiprazol: {
      name: { pt: "Aripiprazol", es: "Aripiprazol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Aripiprazol", "Aripiprazol"),
          class: t(lang, "Antipsicótico atípico agonista parcial dopaminérgico", "Antipsicótico atípico agonista parcial dopaminérgico"),
          category: "antipsicotico",
          commercialNames: { br: ["Abilify", "Aristab", "Aripiprazol EMS"], ar: ["Abilify", "Aripiprazol Bagó", "Aripiprazol Gador"] },
          presentation: [
            t(lang, "Comprimido 5 mg", "Comprimido 5 mg"),
            t(lang, "Comprimido 10 mg", "Comprimido 10 mg"),
            t(lang, "Comprimido 15 mg", "Comprimido 15 mg"),
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 30 mg", "Comprimido 30 mg"),
            t(lang, "Solução oral 1 mg/mL", "Solución oral 1 mg/mL"),
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: iniciar 10–15 mg VO 1x/dia; usual 10–30 mg/dia.", "Esquizofrenia: iniciar 10–15 mg VO 1 vez/día; habitual 10–30 mg/día."),
            mania: t(lang, "Mania aguda: 15 mg VO 1x/dia; titular conforme resposta.", "Manía aguda: 15 mg VO 1 vez/día; titular según respuesta."),
            depressaoAdjuvante: t(lang, "Adjuvante na depressão: iniciar 2–5 mg/dia; usual 2–15 mg/dia.", "Coadyuvante en depresión: iniciar 2–5 mg/día; habitual 2–15 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 30 mg/dia.", "Dosis máxima habitual: 30 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar", "Mantenimiento en trastorno bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Irritabilidade associada ao transtorno do espectro autista", "Irritabilidad asociada al trastorno del espectro autista"),
            t(lang, "Síndrome de Tourette", "Síndrome de Tourette"),
            t(lang, "Hiperprolactinemia induzida por antipsicótico em casos selecionados", "Hiperprolactinemia inducida por antipsicótico en casos seleccionados")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Geralmente sem ajuste, mas titular com cautela em hepatopatia grave.", "Generalmente sin ajuste, pero titular con cautela en hepatopatía grave.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A; estabiliza a neurotransmissão dopaminérgica com menor risco de prolactina elevada.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A; estabiliza la neurotransmisión dopaminérgica con menor riesgo de prolactina elevada."),
          onset: t(lang, "Efeito em agitação/mania pode surgir em dias; efeito antipsicótico pleno em 2–6 semanas.", "Efecto en agitación/manía puede aparecer en días; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 75 horas; metabólito ativo cerca de 94 horas.", "Vida media aproximada: 75 horas; metabolito activo cerca de 94 horas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Ansiedade ou ativação", "Ansiedad o activación"),
            t(lang, "Tontura", "Mareos")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade/jogo patológico/hipersexualidade em casos raros", "Impulsividad/juego patológico/hipersexualidad en casos raros"),
            t(lang, "Hiperglicemia e dislipidemia, geralmente menor que olanzapina", "Hiperglucemia y dislipidemia, generalmente menor que olanzapina"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: risco de quedas, acatisia, eventos cerebrovasculares e mortalidade em demência.", "Adulto mayor: riesgo de caídas, acatisia, eventos cerebrovasculares y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: pode reduzir prolactina e produção de leite; monitorar lactente.", "Lactancia: puede reducir prolactina y producción de leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: titular com cautela se grave.", "Hepatopatía: titular con cautela si es grave.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao aripiprazol", "Hipersensibilidad al aripiprazol"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Carbamazepina e rifampicina: reduzem níveis", "Carbamazepina y rifampicina: reducen niveles"),
            t(lang, "Anti-hipertensivos: risco de hipotensão", "Antihipertensivos: riesgo de hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "Aripiprazol VO: indicação, idade e titulação pediátrica diferem; não converter pauta VO para Maintena/Aristada ou inferir dose pediátrica de adulto. Confirmar interações CYP2D6/CYP3A4 por produto.", "Aripiprazol oral: indicación, edad y titulación pediátrica difieren; no convertir pauta oral a Maintena/Aristada ni inferir dosis pediátrica de adultos. Comprobar interacciones CYP2D6/CYP3A4 según producto."),
            t(lang, "Registro de aripiprazol VO: não extrapolar para LAI. Na bula de comprimidos dos EUA, esquizofrenia pediátrica ≥13 anos, mania bipolar ≥10, irritabilidade no autismo 6–17; doses e titulação diferem por indicação. Sem cálculo pediátrico universal.", "Registro de aripiprazol VO: no extrapolar a LAI. En ficha de comprimidos EUA: esquizofrenia pediátrica ≥13 años, manía bipolar ≥10, irritabilidad en autismo 6–17; dosis y titulación dependen de indicación. Sin cálculo pediátrico universal."),
            t(lang, "Monitorar acatisia, especialmente no início.", "Monitorizar acatisia, especialmente al inicio."),
            t(lang, "Menor risco de ganho de peso e hiperprolactinemia que vários antipsicóticos, mas ainda monitorar metabolismo.", "Menor riesgo de aumento de peso e hiperprolactinemia que varios antipsicóticos, pero aun así monitorizar metabolismo."),
            t(lang, "Perguntar sobre impulsividade, jogo, compras compulsivas ou hipersexualidade.", "Preguntar sobre impulsividad, juego, compras compulsivas o hipersexualidad."),
            t(lang, "Ajustar dose em interações fortes por CYP2D6/CYP3A4.", "Ajustar dosis en interacciones fuertes por CYP2D6/CYP3A4."),
            t(lang, "Pode piorar insônia/ansiedade em alguns pacientes.", "Puede empeorar insomnio/ansiedad en algunos pacientes.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c7040fef-96a7-4429-9a8e-ec3ab17a8019",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Aripiprazole Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    ziprasidona: {
      name: { pt: "Ziprasidona", es: "Ziprasidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Ziprasidona", "Ziprasidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Geodon", "Ziprasidona"], ar: ["Geodon", "Zeldox", "Ziprasidona"] },
          presentation: [
            t(lang, "Cápsula 20 mg", "Cápsula 20 mg"),
            t(lang, "Cápsula 40 mg", "Cápsula 40 mg"),
            t(lang, "Cápsula 60 mg", "Cápsula 60 mg"),
            t(lang, "Cápsula 80 mg", "Cápsula 80 mg"),
            t(lang, "Ampola IM 20 mg", "Ampolla IM 20 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: iniciar 20 mg VO 12/12h com alimentos; usual 40–80 mg 12/12h.", "Esquizofrenia: iniciar 20 mg VO cada 12 h con alimentos; habitual 40–80 mg cada 12 h."),
            mania: t(lang, "Mania aguda: iniciar 40 mg VO 12/12h; titular conforme resposta.", "Manía aguda: iniciar 40 mg VO cada 12 h; titular según respuesta."),
            agitacao: t(lang, "Agitação aguda: 10–20 mg IM conforme protocolo, com monitorização.", "Agitación aguda: 10–20 mg IM según protocolo, con monitorización."),
            maxDose: t(lang, "Dose máxima usual VO: 160 mg/dia.", "Dosis máxima habitual VO: 160 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Manutenção no transtorno bipolar como adjuvante em casos selecionados", "Mantenimiento en trastorno bipolar como coadyuvante en casos seleccionados"),
            t(lang, "Agitação psicótica aguda via IM", "Agitación psicótica aguda vía IM"),
            t(lang, "Psicose com preocupação metabólica", "Psicosis con preocupación metabólica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual para via oral; cautela com formulação IM em insuficiência renal importante.", "Sin ajuste renal habitual para vía oral; cautela con formulación IM en insuficiencia renal importante.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: usar com cautela e titular lentamente.", "Hepatopatía: usar con cautela y titular lentamente.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista 5HT2A e D2; também inibe recaptação de serotonina/noradrenalina em menor grau; menor impacto metabólico, mas maior atenção ao QT.", "Antagonista 5HT2A y D2; también inhibe recaptación de serotonina/noradrenalina en menor grado; menor impacto metabólico, pero mayor atención al QT."),
          onset: t(lang, "IM pode reduzir agitação em minutos a horas; efeito antipsicótico pleno em 2–6 semanas.", "IM puede reducir agitación en minutos a horas; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 7 horas.", "Vida media aproximada: 7 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Dispepsia", "Dispepsia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes em predispostos", "Torsades de pointes en predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Reação cutânea grave rara", "Reacción cutánea grave rara"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT, quedas, hipotensão e mortalidade em demência.", "Adulto mayor: mayor riesgo de QT, caídas, hipotensión y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: titular com cautela.", "Hepatopatía: titular con cautela.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "QT longo congênito ou QT prolongado significativo", "QT largo congénito o QT prolongado significativo"),
            t(lang, "Infarto agudo recente", "Infarto agudo reciente"),
            t(lang, "Insuficiência cardíaca descompensada", "Insuficiencia cardíaca descompensada"),
            t(lang, "Arritmias ventriculares graves", "Arritmias ventriculares graves"),
            t(lang, "Uso concomitante com fármacos que prolongam QT", "Uso concomitante con fármacos que prolongan QT"),
            t(lang, "Hipersensibilidade à ziprasidona", "Hipersensibilidad a ziprasidona")
          ],
          interactions: [
            t(lang, "Antiarrítmicos IA/III: risco de QT", "Antiarrítmicos IA/III: riesgo de QT"),
            t(lang, "Macrolídeos, quinolonas e outros fármacos que prolongam QT", "Macrólidos, quinolonas y otros fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Cetoconazol: pode aumentar níveis", "Ketoconazol: puede aumentar niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "GEODON cápsulas devem ser administradas com alimento; GEODON IM tem indicação/preparo próprios. Conferir ECG/QT, cardiopatia e fármacos que prolongam QT antes de prescrever; não converter doses VO e IM.", "GEODON cápsulas deben administrarse con comida; GEODON IM tiene indicación/preparación propia. Revisar ECG/QT, cardiopatía y fármacos que prolongan QT antes de prescribir; no convertir dosis oral e IM."),
            t(lang, "GEODON cápsulas: administrar com alimento para absorção adequada; a apresentação IM tem bula e indicação distintas. Avaliar risco de QT e eletrólitos; não converter VO↔IM automaticamente.", "GEODON cápsulas: administrar con alimentos para absorción adecuada; presentación IM tiene ficha e indicación diferentes. Evaluar QT y electrolitos; no convertir oral↔IM automáticamente."),
            t(lang, "Deve ser administrada com alimento para absorção adequada.", "Debe administrarse con comida para absorción adecuada."),
            t(lang, "Avaliar risco de QT antes de iniciar.", "Evaluar riesgo de QT antes de iniciar."),
            t(lang, "Considerar ECG basal em pacientes de risco.", "Considerar ECG basal en pacientes de riesgo."),
            t(lang, "Corrigir hipocalemia e hipomagnesemia.", "Corregir hipopotasemia e hipomagnesemia."),
            t(lang, "Menor risco metabólico que olanzapina, mas não isenta de monitorização.", "Menor riesgo metabólico que olanzapina, pero no exenta de monitorización.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8326928a-2cb6-4f7f-9712-03a425a14c37",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Ziprasidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    paliperidona: {
      name: { pt: "Paliperidona", es: "Paliperidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona", "Paliperidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega", "Invega Sustenna", "Invega Trinza", "Paliperidona"], ar: ["Invega", "Xeplion", "Trevicta", "Paliperidona"] },
          presentation: [
            t(lang, "Comprimido de liberação prolongada 3 mg", "Comprimido de liberación prolongada 3 mg"),
            t(lang, "Comprimido de liberação prolongada 6 mg", "Comprimido de liberación prolongada 6 mg"),
            t(lang, "Comprimido de liberação prolongada 9 mg", "Comprimido de liberación prolongada 9 mg"),
            t(lang, "Comprimido de liberação prolongada 12 mg", "Comprimido de liberación prolongada 12 mg"),
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 6 mg VO 1x/dia pela manhã; usual 3–12 mg/dia.", "Esquizofrenia: iniciar 6 mg VO 1 vez/día por la mañana; habitual 3–12 mg/día."),
            esquizoafetivo: t(lang, "Transtorno esquizoafetivo: 3–12 mg/dia conforme resposta e tolerabilidade.", "Trastorno esquizoafectivo: 3–12 mg/día según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima VO usual: 12 mg/dia.", "Dosis máxima VO habitual: 12 mg/día.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Manutenção antipsicótica com formulação LAI", "Mantenimiento antipsicótico con formulación LAI"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Psicose crônica com necessidade de estabilidade plasmática", "Psicosis crónica con necesidad de estabilidad plasmática")
          ],
          renalAdjustment: t(lang, "INVEGA oral de liberação prolongada (bula FDA): ClCr 50–<80 mL/min: iniciar 3 mg 1x/dia, máximo 6 mg/dia; ClCr 10–<50: iniciar 3 mg em dias alternados, máximo 3 mg 1x/dia após reavaliação; ClCr <10: uso não recomendado. Não aplicar a LAI nem a outros produtos.", "INVEGA oral de liberación prolongada (ficha FDA): ClCr 50–<80 mL/min: iniciar 3 mg 1 vez/día, máximo 6 mg/día; ClCr 10–<50: iniciar 3 mg en días alternos, máximo 3 mg 1 vez/día tras reevaluación; ClCr <10: uso no recomendado. No aplicar a LAI ni a otros productos."),
          hepaticAdjustment: t(lang, "INVEGA oral de liberação prolongada (bula FDA): Child-Pugh A/B sem ajuste; insuficiência hepática grave não estudada. Não generalizar para palmitato injetável.", "INVEGA oral de liberación prolongada (ficha FDA): Child-Pugh A/B sin ajuste; insuficiencia hepática grave no estudiada. No generalizar a palmitato inyectable."),
          mechanism: t(lang, "Metabólito ativo da risperidona; antagonista D2 e 5HT2A, com risco relevante de hiperprolactinemia.", "Metabolito activo de risperidona; antagonista D2 y 5HT2A, con riesgo relevante de hiperprolactinemia."),
          onset: t(lang, "Efeito inicial em dias; resposta antipsicótica plena geralmente em 2–6 semanas.", "Efecto inicial en días; respuesta antipsicótica plena generalmente en 2–6 semanas."),
          halfLife: t(lang, "Vida média VO aproximada: 23 horas; formulações LAI têm duração mensal ou trimestral.", "Vida media VO aproximada: 23 horas; formulaciones LAI tienen duración mensual o trimestral."),
          commonAdverseEffects: [
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Reação no local da injeção", "Reacción en el sitio de inyección")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Acúmulo em insuficiência renal", "Acumulación en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar sintomas neonatais se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar síntomas neonatales si uso tardío.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "Insuficiência renal grave para algumas formulações", "Insuficiencia renal grave para algunas formulaciones"),
            t(lang, "Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade", "Demencia con cuerpos de Lewy o Parkinson grave, salvo extrema necesidad")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: [
            t(lang, "INVEGA comprimidos de liberação prolongada: ajuste por ClCr específico do produto, inclusive limitação em insuficiência grave; não converter esquema oral para palmitato mensal/trimestral.", "INVEGA comprimidos de liberación prolongada: ajuste según ClCr específico del producto, incluso limitación en insuficiencia grave; no convertir régimen oral a palmitato mensual/trimestral."),
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Não partir nem mastigar comprimidos de liberação prolongada.", "No partir ni masticar comprimidos de liberación prolongada."),
            t(lang, "Formulações LAI exigem protocolo específico de início e manutenção.", "Formulaciones LAI requieren protocolo específico de inicio y mantenimiento.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b8e5b26-b9e4-4704-921b-3c3c0d159916",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    asenapina: {
      name: { pt: "Asenapina", es: "Asenapina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Asenapina", "Asenapina"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Saphris", "Sycrest", "Asenapina"], ar: ["Saphris", "Sycrest", "Asenapina"] },
          presentation: [
            t(lang, "Comprimido sublingual 5 mg", "Comprimido sublingual 5 mg"),
            t(lang, "Comprimido sublingual 10 mg", "Comprimido sublingual 10 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: 5 mg SL 12/12h; pode aumentar para 10 mg SL 12/12h.", "Esquizofrenia: 5 mg SL cada 12 h; puede aumentarse a 10 mg SL cada 12 h."),
            mania: t(lang, "Mania aguda: 5–10 mg SL 12/12h.", "Manía aguda: 5–10 mg SL cada 12 h."),
            maxDose: t(lang, "Dose máxima usual: 20 mg/dia.", "Dosis máxima habitual: 20 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Episódios mistos do transtorno bipolar", "Episodios mixtos del trastorno bipolar"),
            t(lang, "Manutenção no transtorno bipolar em casos selecionados", "Mantenimiento en trastorno bipolar en casos seleccionados"),
            t(lang, "Agitação associada à mania em casos selecionados", "Agitación asociada a manía en casos seleccionados"),
            t(lang, "Psicose com preocupação de menor ganho ponderal que olanzapina", "Psicosis con preocupación de menor aumento ponderal que olanzapina")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (t(lang, "SAPHRIS (bula FDA): Child-Pugh A ou B: sem ajuste de dose; Child-Pugh C: contraindicado devido ao aumento importante da exposição. Não extrapolar para outras formulações.", "SAPHRIS (ficha FDA): Child-Pugh A o B: sin ajuste de dosis; Child-Pugh C: contraindicado por aumento importante de la exposición. No extrapolar a otras formulaciones.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista 5HT2A e D2, com ação em múltiplos receptores serotoninérgicos, dopaminérgicos, adrenérgicos e histamínicos.", "Antagonista 5HT2A y D2, con acción en múltiples receptores serotoninérgicos, dopaminérgicos, adrenérgicos e histamínicos."),
          onset: t(lang, "Melhora de mania/agitação pode ocorrer em dias; efeito antipsicótico pleno em 2–6 semanas.", "Mejoría de manía/agitación puede ocurrir en días; efecto antipsicótico pleno en 2–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 24 horas.", "Vida media aproximada: 24 horas."),
          commonAdverseEffects: [
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Hipoestesia oral", "Hipoestesia oral"),
            t(lang, "Disgeusia", "Disgeusia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Ganho de peso", "Aumento de peso")
          ],
          dangerousAdverseEffects: [
            t(lang, "Reações de hipersensibilidade graves raras", "Reacciones de hipersensibilidad graves raras"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Hipotensão ortostática", "Hipotensión ortostática"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, hipotensão, quedas e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, hipotensión, caídas y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Child-Pugh A/B: sem ajuste segundo SAPHRIS; Child-Pugh C: contraindicado.", "Child-Pugh A/B: sin ajuste según SAPHRIS; Child-Pugh C: contraindicado.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à asenapina", "Hipersensibilidad a asenapina"),
            t(lang, "Insuficiência hepática grave", "Insuficiencia hepática grave"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Fluvoxamina: pode aumentar exposição", "Fluvoxamina: puede aumentar exposición"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "SAPHRIS sublingual: confirmar forma farmacêutica e técnica; comprimido não deve ser engolido e requer restrição de alimentos/bebidas após aplicação. Child-Pugh C não deve receber esquema adulto sem checar contraindicação da bula.", "SAPHRIS sublingual: confirmar formulación y técnica; el comprimido no debe tragarse y requiere evitar alimentos/bebidas después. Child-Pugh C no debe recibir pauta adulta sin verificar contraindicación del prospecto."),
            t(lang, "Administrar por via sublingual; não engolir o comprimido inteiro.", "Administrar por vía sublingual; no tragar el comprimido entero."),
            t(lang, "Não comer nem beber por 10 minutos após administração.", "No comer ni beber por 10 minutos tras la administración."),
            t(lang, "Monitorar dormência oral e disgeusia.", "Monitorizar adormecimiento oral y disgeusia."),
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Evitar em hepatopatia grave.", "Evitar en hepatopatía grave.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5429f134-839f-4ffc-9944-55f51238def8",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    lurasidona: {
      name: { pt: "Lurasidona", es: "Lurasidona" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const clcr = Number(paciente.clcr || 100);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Lurasidona", "Lurasidona"),
          class: t(lang, "Antipsicótico atípico", "Antipsicótico atípico"),
          category: "antipsicotico",
          commercialNames: { br: ["Latuda", "Lurasidona"], ar: ["Latuda", "Lurasidona"] },
          presentation: [
            t(lang, "Comprimido 20 mg", "Comprimido 20 mg"),
            t(lang, "Comprimido 40 mg", "Comprimido 40 mg"),
            t(lang, "Comprimido 60 mg", "Comprimido 60 mg"),
            t(lang, "Comprimido 80 mg", "Comprimido 80 mg"),
            t(lang, "Comprimido 120 mg", "Comprimido 120 mg")
          ],
          dose: {
            adulto: t(lang, "Esquizofrenia: iniciar 40 mg VO 1x/dia com alimento.", "Esquizofrenia: iniciar 40 mg VO 1 vez/día con comida."),
            depressaoBipolar: t(lang, "Depressão bipolar: iniciar 20 mg VO 1x/dia com alimento; usual 20–120 mg/dia.", "Depresión bipolar: iniciar 20 mg VO 1 vez/día con comida; habitual 20–120 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 160 mg/dia em esquizofrenia; 120 mg/dia em depressão bipolar.", "Dosis máxima habitual: 160 mg/día en esquizofrenia; 120 mg/día en depresión bipolar.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Depressão bipolar tipo I", "Depresión bipolar tipo I"),
            t(lang, "Depressão bipolar em monoterapia", "Depresión bipolar en monoterapia"),
            t(lang, "Depressão bipolar como adjuvante a lítio ou valproato", "Depresión bipolar como coadyuvante a litio o valproato"),
            t(lang, "Psicose com preocupação metabólica", "Psicosis con preocupación metabólica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: t(lang, "LATUDA oral (bula FDA): ClCr 30–<50 ou <30 mL/min: iniciar 20 mg/dia; máximo 80 mg/dia. Conferir indicação, idade e interações CYP3A4 antes de selecionar dose.", "LATUDA oral (ficha FDA): ClCr 30–<50 o <30 mL/min: iniciar 20 mg/día; máximo 80 mg/día. Verificar indicación, edad e interacciones CYP3A4 antes de seleccionar dosis."),
          hepaticAdjustment: t(lang, "LATUDA oral (bula FDA): Child-Pugh 7–9 iniciar 20 mg/dia, máximo 80 mg/dia; Child-Pugh 10–15 iniciar 20 mg/dia, máximo 40 mg/dia. Não inferir gravidade a partir do booleano hepatopatia.", "LATUDA oral (ficha FDA): Child-Pugh 7–9 iniciar 20 mg/día, máximo 80 mg/día; Child-Pugh 10–15 iniciar 20 mg/día, máximo 40 mg/día. No inferir gravedad de un booleano hepatopatía."),
          mechanism: t(lang, "Antagonista D2 e 5HT2A, antagonista 5HT7 e agonista parcial 5HT1A; perfil metabólico relativamente favorável.", "Antagonista D2 y 5HT2A, antagonista 5HT7 y agonista parcial 5HT1A; perfil metabólico relativamente favorable."),
          onset: t(lang, "Melhora pode surgir em 1–2 semanas; resposta plena geralmente em 4–6 semanas.", "La mejoría puede aparecer en 1–2 semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 18 horas.", "Vida media aproximada: 18 horas."),
          commonAdverseEffects: [
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Tontura", "Mareos"),
            t(lang, "Insônia", "Insomnio")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Reação extrapiramidal intensa", "Reacción extrapiramidal intensa"),
            t(lang, "Hiperglicemia/dislipidemia, embora menos frequente que olanzapina", "Hiperglucemia/dislipidemia, aunque menos frecuente que olanzapina")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, sedação e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, sedación y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar sedação e alimentação do lactente.", "Lactancia: datos limitados; monitorizar sedación y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia moderada/grave: limitar dose máxima.", "Hepatopatía moderada/grave: limitar dosis máxima.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal moderada/grave: limitar dose máxima.", "Insuficiencia renal moderada/grave: limitar dosis máxima.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à lurasidona", "Hipersensibilidad a lurasidona"),
            t(lang, "Uso com inibidores fortes de CYP3A4", "Uso con inhibidores fuertes de CYP3A4"),
            t(lang, "Uso com indutores fortes de CYP3A4", "Uso con inductores fuertes de CYP3A4"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Cetoconazol, claritromicina, ritonavir: contraindicado/aumenta níveis", "Ketoconazol, claritromicina, ritonavir: contraindicado/aumenta niveles"),
            t(lang, "Carbamazepina, rifampicina, fenitoína: contraindicado/reduz níveis", "Carbamazepina, rifampicina, fenitoína: contraindicado/reduce niveles"),
            t(lang, "Suco de toranja/grapefruit: pode aumentar níveis", "Jugo de pomelo/toronja: puede aumentar niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT")
          ],
          alerts: [
            t(lang, "LATUDA VO: administrar com alimento de pelo menos 350 kcal. Dose máxima depende de indicação, idade, função renal/hepática e interações CYP3A4; sem cálculo universal.", "LATUDA oral: administrar con comida de al menos 350 kcal. Dosis máxima depende de indicación, edad, función renal/hepática e interacciones CYP3A4; sin cálculo universal."),
            t(lang, "Administrar sempre com alimento para absorção adequada.", "Administrar siempre con comida para absorción adecuada."),
            t(lang, "Evitar grapefruit/toranja.", "Evitar pomelo/toronja."),
            t(lang, "Contraindicada com inibidores ou indutores fortes de CYP3A4.", "Contraindicada con inhibidores o inductores fuertes de CYP3A4."),
            t(lang, "Monitorar acatisia e sintomas extrapiramidais.", "Monitorizar acatisia y síntomas extrapiramidales."),
            t(lang, "Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia e lipídios.", "Perfil metabólico más favorable, pero aún requiere control de peso, glucemia y lípidos.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=afad3051-9df2-4c54-9684-e8262a133af8",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Lurasidone Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    cariprazina: {
      name: { pt: "Cariprazina", es: "Cariprazina" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Cariprazina", "Cariprazina"),
          class: t(lang, "Antipsicótico atípico agonista parcial D3/D2", "Antipsicótico atípico agonista parcial D3/D2"),
          category: "antipsicotico",
          commercialNames: { br: ["Vraylar", "Reagila", "Cariprazina"], ar: ["Reagila", "Vraylar", "Cariprazina"] },
          presentation: [
            t(lang, "Cápsula 1,5 mg", "Cápsula 1,5 mg"),
            t(lang, "Cápsula 3 mg", "Cápsula 3 mg"),
            t(lang, "Cápsula 4,5 mg", "Cápsula 4,5 mg"),
            t(lang, "Cápsula 6 mg", "Cápsula 6 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: iniciar 1,5 mg VO 1x/dia; usual 1,5–6 mg/dia.", "Esquizofrenia: iniciar 1,5 mg VO 1 vez/día; habitual 1,5–6 mg/día."),
            bipolar: t(lang, "Mania/misto bipolar: iniciar 1,5 mg/dia; pode aumentar para 3–6 mg/dia.", "Manía/mixto bipolar: iniciar 1,5 mg/día; puede aumentarse a 3–6 mg/día."),
            depressaoBipolar: t(lang, "Depressão bipolar: usual 1,5–3 mg/dia.", "Depresión bipolar: habitual 1,5–3 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 6 mg/dia.", "Dosis máxima habitual: 6 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno bipolar — mania aguda", "Trastorno bipolar — manía aguda"),
            t(lang, "Transtorno bipolar — episódios mistos", "Trastorno bipolar — episodios mixtos"),
            t(lang, "Depressão bipolar", "Depresión bipolar"),
            t(lang, "Adjuvante no transtorno depressivo maior em alguns protocolos", "Coadyuvante en trastorno depresivo mayor en algunos protocolos"),
            t(lang, "Sintomas negativos da esquizofrenia em casos selecionados", "Síntomas negativos de la esquizofrenia en casos seleccionados")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "VRAYLAR (bula FDA): ClCr ≥30 mL/min: sem ajuste em insuficiência leve/moderada; ClCr <30 mL/min: uso não recomendado, população não avaliada. Não gerar dose automática.", "VRAYLAR (ficha FDA): ClCr ≥30 mL/min: sin ajuste en insuficiencia leve/moderada; ClCr <30 mL/min: uso no recomendado, población no evaluada. No generar dosis automática.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "VRAYLAR (bula FDA): Child-Pugh 5–9: sem ajuste; Child-Pugh 10–15: uso não recomendado, população não avaliada. Não gerar dose automática.", "VRAYLAR (ficha FDA): Child-Pugh 5–9: sin ajuste; Child-Pugh 10–15: uso no recomendado, población no evaluada. No generar dosis automática.") : t(lang, "VRAYLAR (bula FDA): Child-Pugh 5–9: sem ajuste; Child-Pugh 10–15: uso não recomendado, população não avaliada. Não gerar dose automática.", "VRAYLAR (ficha FDA): Child-Pugh 5–9: sin ajuste; Child-Pugh 10–15: uso no recomendado, población no evaluada. No generar dosis automática.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Agonista parcial D3/D2 com preferência por D3, agonista parcial 5HT1A e antagonista 5HT2A.", "Agonista parcial D3/D2 con preferencia por D3, agonista parcial 5HT1A y antagonista 5HT2A."),
          onset: t(lang, "Resposta pode demorar semanas; metabólitos ativos têm meia-vida longa, então ajustes aparecem lentamente.", "La respuesta puede tardar semanas; metabolitos activos tienen vida media larga, por eso los ajustes se reflejan lentamente."),
          halfLife: t(lang, "Vida média efetiva longa; metabólito ativo didesmetil-cariprazina pode persistir por 1–3 semanas.", "Vida media efectiva larga; metabolito activo didesmetil-cariprazina puede persistir por 1–3 semanas."),
          commonAdverseEffects: [
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Inquietação", "Inquietud"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Acatisia intensa com risco de abandono", "Acatisia intensa con riesgo de abandono"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, EPS, acatisia e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, EPS, acatisia y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; dados ainda limitados.", "Embarazo: evaluar riesgo-beneficio; datos aún limitados.") : null,
            lactante ? t(lang, "Lactação: dados limitados; considerar alternativa mais estudada ou monitorar lactente.", "Lactancia: datos limitados; considerar alternativa más estudiada o monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia grave: evitar.", "Hepatopatía grave: evitar.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à cariprazina", "Hipersensibilidad a cariprazina"),
            t(lang, "Uso com inibidores ou indutores fortes de CYP3A4 sem ajuste/avaliação", "Uso con inhibidores o inductores fuertes de CYP3A4 sin ajuste/evaluación"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Cetoconazol, claritromicina, ritonavir: aumentam níveis", "Ketoconazol, claritromicina, ritonavir: aumentan niveles"),
            t(lang, "Carbamazepina, rifampicina, fenitoína: reduzem níveis", "Carbamazepina, rifampicina, fenitoína: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "VRAYLAR: metabólitos de longa duração retardam o efeito de mudanças de dose; disfunção renal grave ou Child-Pugh grave exigem revisão da bula antes de escolher dose. Não converter doses adultas em doses pediátricas.", "VRAYLAR: metabolitos de larga duración retrasan el efecto de los cambios de dosis; daño renal grave o Child-Pugh grave requieren revisar ficha antes de dosificar. No convertir dosis de adulto a dosis pediátricas."),
            t(lang, "Monitorar acatisia e insônia, especialmente no início.", "Monitorizar acatisia e insomnio, especialmente al inicio."),
            t(lang, "Ajustes de dose devem considerar meia-vida longa dos metabólitos.", "Los ajustes de dosis deben considerar la vida media larga de los metabolitos."),
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Evitar mudanças rápidas de dose sem necessidade.", "Evitar cambios rápidos de dosis sin necesidad."),
            t(lang, "Cuidado com interações por CYP3A4.", "Cuidado con interacciones por CYP3A4.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b5f7c65-aa2d-452a-b3db-bc85c06ff12f",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    brexpiprazol: {
      name: { pt: "Brexpiprazol", es: "Brexpiprazol" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Brexpiprazol", "Brexpiprazol"),
          class: t(lang, "Antipsicótico atípico agonista parcial D2", "Antipsicótico atípico agonista parcial D2"),
          category: "antipsicotico",
          commercialNames: { br: ["Rexulti", "Brexpiprazol"], ar: ["Rexulti", "Brexpiprazol"] },
          presentation: [
            t(lang, "Comprimido 0,25 mg", "Comprimido 0,25 mg"),
            t(lang, "Comprimido 0,5 mg", "Comprimido 0,5 mg"),
            t(lang, "Comprimido 1 mg", "Comprimido 1 mg"),
            t(lang, "Comprimido 2 mg", "Comprimido 2 mg"),
            t(lang, "Comprimido 3 mg", "Comprimido 3 mg"),
            t(lang, "Comprimido 4 mg", "Comprimido 4 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia: iniciar 1 mg VO 1x/dia; titular para 2–4 mg/dia.", "Esquizofrenia: iniciar 1 mg VO 1 vez/día; titular a 2–4 mg/día."),
            depressaoAdjuvante: t(lang, "Adjuvante na depressão: iniciar 0,5–1 mg/dia; usual 1–3 mg/dia.", "Coadyuvante en depresión: iniciar 0,5–1 mg/día; habitual 1–3 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 4 mg/dia em esquizofrenia; 3 mg/dia como adjuvante na depressão.", "Dosis máxima habitual: 4 mg/día en esquizofrenia; 3 mg/día como coadyuvante en depresión.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Adjuvante no transtorno depressivo maior", "Coadyuvante en trastorno depresivo mayor"),
            t(lang, "Agitação associada à demência de Alzheimer em alguns protocolos regulatórios", "Agitación asociada a demencia de Alzheimer en algunos protocolos regulatorios"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Psicose com necessidade de menor risco de acatisia que aripiprazol em alguns pacientes", "Psicosis con necesidad de menor riesgo de acatisia que aripiprazol en algunos pacientes"),
            t(lang, "Depressão resistente como estratégia de potencialização", "Depresión resistente como estrategia de potenciación")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "REXULTI (bula FDA): ClCr <60 mL/min: máximo 2 mg/dia para depressão maior adjuvante ou agitação da demência de Alzheimer; máximo 3 mg/dia para esquizofrenia. Considerar também interações CYP.", "REXULTI (ficha FDA): ClCr <60 mL/min: máximo 2 mg/día para depresión mayor como coadyuvante o agitación de demencia de Alzheimer; máximo 3 mg/día para esquizofrenia. Considerar además interacciones CYP.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "REXULTI (bula FDA): Child-Pugh ≥7: máximo 2 mg/dia para depressão maior adjuvante ou agitação da demência de Alzheimer; máximo 3 mg/dia para esquizofrenia. Considerar também interações CYP.", "REXULTI (ficha FDA): Child-Pugh ≥7: máximo 2 mg/día para depresión mayor como coadyuvante o agitación de demencia de Alzheimer; máximo 3 mg/día para esquizofrenia. Considerar además interacciones CYP.") : t(lang, "REXULTI (bula FDA): Child-Pugh ≥7: máximo 2 mg/dia para depressão maior adjuvante ou agitação da demência de Alzheimer; máximo 3 mg/dia para esquizofrenia. Considerar também interações CYP.", "REXULTI (ficha FDA): Child-Pugh ≥7: máximo 2 mg/día para depresión mayor como coadyuvante o agitación de demencia de Alzheimer; máximo 3 mg/día para esquizofrenia. Considerar además interacciones CYP.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A; perfil estabilizador dopaminérgico com menor ativação que aripiprazol em alguns pacientes.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A; perfil estabilizador dopaminérgico con menor activación que aripiprazol en algunos pacientes."),
          onset: t(lang, "Efeito pode surgir em 1–2 semanas; resposta plena geralmente em 4–6 semanas.", "El efecto puede aparecer en 1–2 semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 91 horas.", "Vida media aproximada: 91 horas."),
          commonAdverseEffects: [
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Cefaleia", "Cefalea"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Fadiga", "Fatiga")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade ou comportamentos compulsivos raros", "Impulsividad o conductas compulsivas raras"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, sedação e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, sedación y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; dados limitados.", "Embarazo: evaluar riesgo-beneficio; datos limitados.") : null,
            lactante ? t(lang, "Lactação: dados limitados; monitorar lactente ou considerar alternativa.", "Lactancia: datos limitados; monitorizar lactante o considerar alternativa.") : null,
            hepatopatia ? t(lang, "Child-Pugh ≥7: aplicar máximos específicos por indicação segundo a bula FDA REXULTI e revisar interações CYP.", "Child-Pugh ≥7: aplicar máximos específicos por indicación según ficha FDA REXULTI y revisar interacciones CYP.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao brexpiprazol", "Hipersensibilidad a brexpiprazol"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Indutores fortes de CYP3A4 como carbamazepina/rifampicina: reduzem níveis", "Inductores fuertes de CYP3A4 como carbamazepina/rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "REXULTI: dose máxima muda conforme indicação e função renal/hepática; inibidores/indutores CYP podem exigir ajuste adicional. Não aplicar máximo de esquizofrenia à depressão adjuvante ou a outra indicação.", "REXULTI: dosis máxima varía por indicación y función renal/hepática; inhibidores/inductores CYP pueden exigir ajustes adicionales. No trasladar el máximo de esquizofrenia a depresión como adyuvante u otra indicación."),
            t(lang, "Monitorar peso, glicemia e lipídios.", "Monitorizar peso, glucemia y lípidos."),
            t(lang, "Observar acatisia, inquietação e insônia.", "Observar acatisia, inquietud e insomnio."),
            t(lang, "Perguntar sobre impulsividade ou comportamentos compulsivos.", "Preguntar por impulsividad o conductas compulsivas."),
            t(lang, "Ajustar dose em interações por CYP2D6/CYP3A4.", "Ajustar dosis en interacciones por CYP2D6/CYP3A4."),
            t(lang, "Titular gradualmente pelo tempo longo de meia-vida.", "Titular gradualmente por su vida media larga.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2d301358-6291-4ec1-bd87-37b4ad9bd850",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    amisulprida: {
      name: { pt: "Amisulprida", es: "Amisulprida" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const clcrRaw = paciente.clcr;
        const clcr = (clcrRaw === null || clcrRaw === undefined || clcrRaw === '') ? NaN : Number(clcrRaw);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = Number.isFinite(clcr) && clcr < 60;
        return {
          name: t(lang, "Amisulprida", "Amisulprida"),
          class: t(lang, "Antipsicótico benzamida substituída", "Antipsicótico benzamida sustituida"),
          category: "antipsicotico",
          commercialNames: { br: ["Socian", "Amisulprida"], ar: ["Socian", "Amisulprida Gador", "Amisulprida"] },
          presentation: [
            t(lang, "Comprimido 50 mg", "Comprimido 50 mg"),
            t(lang, "Comprimido 100 mg", "Comprimido 100 mg"),
            t(lang, "Comprimido 200 mg", "Comprimido 200 mg"),
            t(lang, "Comprimido 400 mg", "Comprimido 400 mg"),
            t(lang, "Solução oral 100 mg/mL", "Solución oral 100 mg/mL")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia com sintomas positivos: 400–800 mg/dia VO, em 1–2 tomadas.", "Esquizofrenia con síntomas positivos: 400–800 mg/día VO, en 1–2 tomas."),
            sintomasNegativos: t(lang, "Sintomas negativos predominantes: 50–300 mg/dia.", "Síntomas negativos predominantes: 50–300 mg/día."),
            maxDose: t(lang, "Dose máxima usual: 1200 mg/dia.", "Dosis máxima habitual: 1200 mg/día.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Sintomas positivos da esquizofrenia", "Síntomas positivos de la esquizofrenia"),
            t(lang, "Sintomas negativos predominantes da esquizofrenia", "Síntomas negativos predominantes de la esquizofrenia"),
            t(lang, "Psicose crônica", "Psicosis crónica"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados"),
            t(lang, "Baixa resposta ou intolerância a outros antipsicóticos em casos selecionados", "Baja respuesta o intolerancia a otros antipsicóticos en casos seleccionados")
          ],
          renalAdjustment: idadeAdultaValidada ? (!Number.isFinite(clcr)
            ? t(lang, "ClCr não informado: não definir ajuste. SmPC Amisulpride Viatris 400 mg: conferir ClCr antes de usar.", "ClCr no informado: no definir ajuste. Ficha Amisulpride Viatris 400 mg: verificar ClCr antes de usar.")
            : clcr < 10
            ? t(lang, "SmPC Viatris 400 mg: ClCr <10 mL/min, não usar (ausência de experiência). Não calcular dose.", "Ficha Viatris 400 mg: ClCr <10 mL/min, no usar (sin experiencia). No calcular dosis.")
            : clcr < 30
            ? t(lang, "SmPC Viatris 400 mg: ClCr 10 a <30 mL/min, reduzir dose a um terço; confirmar esquema com prescritor. Não calcular automaticamente.", "Ficha Viatris 400 mg: ClCr 10 a <30 mL/min, reducir dosis a un tercio; confirmar pauta con prescriptor. No calcular automáticamente.")
            : clcr <= 60
            ? t(lang, "SmPC Viatris 400 mg: ClCr 30–60 mL/min, reduzir dose à metade; confirmar esquema com prescritor. Não calcular automaticamente.", "Ficha Viatris 400 mg: ClCr 30–60 mL/min, reducir dosis a la mitad; confirmar pauta con prescriptor. No calcular automáticamente.")
            : t(lang, "SmPC Viatris 400 mg: ClCr >60 mL/min, sem redução por este critério; avaliar quadro e produto local.", "Ficha Viatris 400 mg: ClCr >60 mL/min, sin reducción por este criterio; valorar contexto y producto local.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste hepático habitual; metabolismo hepático é limitado.", "Sin ajuste hepático habitual; metabolismo hepático limitado.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista seletivo D2/D3; em doses baixas pode modular sintomas negativos e em doses altas exerce efeito antipsicótico.", "Antagonista selectivo D2/D3; en dosis bajas puede modular síntomas negativos y en dosis altas ejerce efecto antipsicótico."),
          onset: t(lang, "Efeito inicial em dias a semanas; resposta plena geralmente em 4–6 semanas.", "Efecto inicial en días a semanas; respuesta plena generalmente en 4–6 semanas."),
          halfLife: t(lang, "Vida média aproximada: 12 horas; eliminação predominantemente renal.", "Vida media aproximada: 12 horas; eliminación predominantemente renal."),
          commonAdverseEffects: [
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Amenorreia", "Amenorrea"),
            t(lang, "Galactorreia", "Galactorrea"),
            t(lang, "Disfunção sexual", "Disfunción sexual"),
            t(lang, "Insônia ou sonolência", "Insomnio o somnolencia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Sintomas extrapiramidais", "Síntomas extrapiramidales")
          ],
          dangerousAdverseEffects: [
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Torsades de pointes em predispostos", "Torsades de pointes en predispuestos"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos"),
            t(lang, "Acúmulo e toxicidade em insuficiência renal", "Acumulación y toxicidad en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de QT, EPS, quedas e acúmulo se função renal reduzida.", "Adulto mayor: mayor riesgo de QT, EPS, caídas y acumulación si función renal reducida.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; monitorar recém-nascido se uso tardio.", "Embarazo: evaluar riesgo-beneficio; monitorizar recién nacido si uso tardío.") : null,
            lactante ? t(lang, "Lactação: pode passar ao leite; monitorar sedação e sintomas extrapiramidais.", "Lactancia: puede pasar a la leche; monitorizar sedación y síntomas extrapiramidales.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajuste obrigatório conforme ClCr.", "Insuficiencia renal: ajuste obligatorio según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à amisulprida", "Hipersensibilidad a amisulprida"),
            t(lang, "Feocromocitoma", "Feocromocitoma"),
            t(lang, "Tumores prolactino-dependentes", "Tumores prolactino-dependientes"),
            t(lang, "QT prolongado significativo", "QT prolongado significativo"),
            t(lang, "Uso concomitante com fármacos que prolongam QT de alto risco", "Uso concomitante con fármacos que prolongan QT de alto riesgo"),
            t(lang, "Insuficiência renal grave sem possibilidade de ajuste/monitorização", "Insuficiencia renal grave sin posibilidad de ajuste/monitorización")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo"),
            t(lang, "Antiarrítmicos e fármacos que prolongam QT", "Antiarrítmicos y fármacos que prolongan QT"),
            t(lang, "Diuréticos que causam hipocalemia: maior risco de arritmia", "Diuréticos que causan hipopotasemia: mayor riesgo de arritmia"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "SmPC Amisulpride comprimido 400 mg: menores de 15 anos contraindicado; 15–18 anos sem indicação rotineira. ClCr ausente não autoriza presumir função normal; não aplicar o esquema adulto como dose pediátrica.", "Ficha Amisulpride comprimido 400 mg: contraindicado en menores de 15 años; 15–18 años sin indicación rutinaria. ClCr ausente no autoriza presumir función normal; no usar pauta adulta como dosis pediátrica."),
            t(lang, "SmPC Viatris 400 mg: contraindicado antes de 15 anos; entre 15 e 18 anos não recomendado rotineiramente por falta de dados. Não derivar dose pediátrica.", "Ficha Viatris 400 mg: contraindicado antes de los 15 años; entre 15 y 18 no recomendado habitualmente por falta de datos. No extrapolar dosis pediátrica."),
            t(lang, "Ajustar dose pela função renal.", "Ajustar dosis por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Considerar ECG basal se risco de QT.", "Considerar ECG basal si hay riesgo de QT."),
            t(lang, "Corrigir hipocalemia/hipomagnesemia antes do uso em pacientes de risco.", "Corregir hipopotasemia/hipomagnesemia antes del uso en pacientes de riesgo."),
            t(lang, "Monitorar EPS, especialmente em doses altas.", "Monitorizar EPS, especialmente en dosis altas.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://www.medicines.org.uk/emc/product/102114/smpc",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    // ── INJETÁVEIS DE LONGA DURAÇÃO (LAI / DEPOT) ──

    paliperidona_trimestral: {
      name: { pt: "Paliperidona trimestral", es: "Paliperidona trimestral" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const clcrRaw = paciente.clcr;
        const clcr = (clcrRaw === null || clcrRaw === undefined || clcrRaw === '') ? NaN : Number(clcrRaw);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona trimestral", "Paliperidona trimestral"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação trimestral", "Antipsicótico atípico inyectable de larga acción trimestral"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega Trinza"], ar: ["Trevicta"] },
          presentation: [
            t(lang, "Seringa preenchida 175 mg", "Jeringa prellenada 175 mg"),
            t(lang, "Seringa preenchida 263 mg", "Jeringa prellenada 263 mg"),
            t(lang, "Seringa preenchida 350 mg", "Jeringa prellenada 350 mg"),
            t(lang, "Seringa preenchida 525 mg", "Jeringa prellenada 525 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Aplicar IM a cada 3 meses após estabilização prévia com paliperidona mensal.", "Aplicar IM cada 3 meses tras estabilización previa con paliperidona mensual."),
            conversao: t(lang, "Dose trimestral geralmente corresponde a 3,5 vezes a última dose mensal estabilizada.", "La dosis trimestral generalmente corresponde a 3,5 veces la última dosis mensual estabilizada."),
            maxDose: t(lang, "Dose máxima usual: 525 mg IM a cada 3 meses.", "Dosis máxima habitual: 525 mg IM cada 3 meses.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia em fase de manutenção", "Esquizofrenia en fase de mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes estabilizados com paliperidona mensal", "Pacientes estabilizados con paliperidona mensual"),
            t(lang, "Psicose crônica com necessidade de estabilidade plasmática prolongada", "Psicosis crónica con necesidad de estabilidad plasmática prolongada"),
            t(lang, "Redução de internações por abandono terapêutico", "Reducción de internaciones por abandono terapéutico")
          ],
          renalAdjustment: idadeAdultaValidada ? (!Number.isFinite(clcr) || clcr <= 0 ? t(lang, "ClCr ausente ou inválido: não selecionar esquema trimestral; obter função renal.", "ClCr ausente o inválido: no seleccionar esquema trimestral; obtener función renal.") : clcr < 50 ? t(lang, "INVEGA TRINZA (FDA): ClCr <50 mL/min, não recomendado; não calcular dose.", "INVEGA TRINZA (FDA): ClCr <50 mL/min, no recomendado; no calcular dosis.") : clcr < 80 ? t(lang, "ClCr 50–<80 mL/min: ajustar e estabilizar com formulação mensal antes de passar a trimestral; confirmar conversão e unidades na bula do produto.", "ClCr 50–<80 mL/min: ajustar y estabilizar con formulación mensual antes de pasar a trimestral; verificar conversión y unidades en ficha del producto.") : t(lang, "ClCr ≥80 mL/min: confirmar ≥4 meses de manutenção mensal e últimas duas doses iguais antes de converter; não converter unidades entre marcas automaticamente.", "ClCr ≥80 mL/min: confirmar ≥4 meses de mantenimiento mensual y últimas dos dosis iguales antes de convertir; no convertir unidades entre marcas automáticamente.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Metabólito ativo da risperidona; antagonista D2 e 5HT2A com liberação prolongada por aproximadamente 3 meses.", "Metabolito activo de risperidona; antagonista D2 y 5HT2A con liberación prolongada por aproximadamente 3 meses."),
          onset: t(lang, "Não indicada para início de tratamento; deve ser usada apenas após estabilização com formulação mensal.", "No indicada para inicio de tratamiento; debe usarse solo tras estabilización con formulación mensual."),
          halfLife: t(lang, "Meia-vida aparente prolongada, variando aproximadamente 2–4 meses conforme local de aplicação.", "Vida media aparente prolongada, variando aproximadamente 2–4 meses según sitio de aplicación."),
          commonAdverseEffects: [
            t(lang, "Reação no local da injeção", "Reacción en el sitio de inyección"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Efeito adverso persistente pela longa duração do depósito", "Efecto adverso persistente por la larga duración del depósito")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; longa duração dificulta retirada rápida.", "Embarazo: evaluar riesgo-beneficio; larga duración dificulta retirada rápida.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: evitar se ClCr <50 mL/min.", "Insuficiencia renal: evitar si ClCr <50 mL/min.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "Insuficiência renal moderada/grave com ClCr <50 mL/min", "Insuficiencia renal moderada/grave con ClCr <50 mL/min"),
            t(lang, "Paciente não estabilizado previamente com paliperidona mensal", "Paciente no estabilizado previamente con paliperidona mensual"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "INVEGA TRINZA (referência FDA): somente após pelo menos 4 meses com SUSTENNA; recomenda-se que as duas últimas doses mensais sejam iguais. Se ClCr <50 não recomendado; ClCr ausente não equivale a normal. Trevicta pode ter unidades diferentes: não converter automaticamente.", "INVEGA TRINZA (referencia FDA): solo tras al menos 4 meses con SUSTENNA; se recomienda que las últimas dos dosis mensuales sean iguales. Si ClCr <50 no recomendado; ClCr ausente no equivale a normal. Trevicta puede usar otras unidades: no convertir automáticamente."),
            t(lang, "Trevicta trimestral: apenas manutenção após estabilização com paliperidona mensal, segundo bula EMA. Não calcular equivalência entre doses rotuladas em mg de base e mg de palmitato nem fazer troca automática de produtos.", "Trevicta trimestral: solo mantenimiento tras estabilización con paliperidona mensual según ficha EMA. No calcular equivalencia entre dosis rotuladas en mg de base y mg de palmitato ni cambiar automáticamente productos."),
            t(lang, "Não usar para início de tratamento.", "No usar para inicio de tratamiento."),
            t(lang, "Usar apenas após estabilização com paliperidona mensal.", "Usar solo tras estabilización con paliperidona mensual."),
            t(lang, "Ajustar decisão pela função renal.", "Ajustar decisión por función renal."),
            t(lang, "Monitorar prolactina, peso, glicemia e lipídios.", "Monitorizar prolactina, peso, glucemia y lípidos."),
            t(lang, "Eventos adversos podem persistir por meses.", "Los eventos adversos pueden persistir por meses.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c39e65d7-fa44-4e4c-8b12-a654d3ed0eae",
            "https://www.ema.europa.eu/en/medicines/human/EPAR/trevicta",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Palmitate 3-month Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    paliperidona_mensal: {
      name: { pt: "Paliperidona mensal", es: "Paliperidona mensual" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const clcrRaw = paciente.clcr;
        const clcr = (clcrRaw === null || clcrRaw === undefined || clcrRaw === '') ? NaN : Number(clcrRaw);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Paliperidona mensal", "Paliperidona mensual"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação mensal", "Antipsicótico atípico inyectable de larga acción mensual"),
          category: "antipsicotico",
          commercialNames: { br: ["Invega Sustenna"], ar: ["Xeplion"] },
          presentation: [
            t(lang, "Seringa preenchida 39 mg", "Jeringa prellenada 39 mg"),
            t(lang, "Seringa preenchida 78 mg", "Jeringa prellenada 78 mg"),
            t(lang, "Seringa preenchida 117 mg", "Jeringa prellenada 117 mg"),
            t(lang, "Seringa preenchida 156 mg", "Jeringa prellenada 156 mg"),
            t(lang, "Seringa preenchida 234 mg", "Jeringa prellenada 234 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquema inicial comum: 234 mg IM deltoide no dia 1 e 156 mg IM deltoide no dia 8; depois manutenção mensal.", "Esquema inicial común: 234 mg IM deltoides día 1 y 156 mg IM deltoides día 8; luego mantenimiento mensual."),
            manutencao: t(lang, "Manutenção usual: 39–234 mg IM 1x/mês conforme resposta e tolerabilidade.", "Mantenimiento habitual: 39–234 mg IM 1 vez/mes según respuesta y tolerabilidad."),
            maxDose: t(lang, "Dose máxima usual: 234 mg IM mensal.", "Dosis máxima habitual: 234 mg IM mensual.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia", "Esquizofrenia"),
            t(lang, "Transtorno esquizoafetivo", "Trastorno esquizoafectivo"),
            t(lang, "Manutenção antipsicótica de longa ação", "Mantenimiento antipsicótico de larga acción"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Ponte para paliperidona trimestral após estabilização", "Puente hacia paliperidona trimestral tras estabilización")
          ],
          renalAdjustment: idadeAdultaValidada ? (!Number.isFinite(clcr) || clcr <= 0 ? t(lang, "ClCr ausente ou inválido: não selecionar esquema; verificar Cockcroft–Gault.", "ClCr ausente o inválido: no seleccionar pauta; verificar Cockcroft–Gault.") : clcr < 50 ? t(lang, "INVEGA SUSTENNA (FDA): ClCr <50 mL/min, não recomendado; não calcular dose.", "INVEGA SUSTENNA (FDA): ClCr <50 mL/min, no recomendado; no calcular dosis.") : clcr < 80 ? t(lang, "INVEGA SUSTENNA (FDA), ClCr 50–<80: 156 mg IM deltoide dia 1, 117 mg dia 8; manutenção inicial 78 mg mensal, máximo 156 mg/mês, ajustar conforme bula. Não aplicar a Xeplion sem conferir unidades.", "INVEGA SUSTENNA (FDA), ClCr 50–<80: 156 mg IM deltoides día 1, 117 mg día 8; mantenimiento inicial 78 mg mensual, máximo 156 mg/mes; ajustar según ficha. No aplicar a Xeplion sin verificar unidades.") : t(lang, "ClCr ≥80 mL/min: seguir esquema de bula específico da indicação/produto; checar função renal antes da primeira dose.", "ClCr ≥80 mL/min: seguir pauta de ficha específica según indicación/producto; revisar función renal antes de primera dosis.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Palmitato de paliperidona com liberação prolongada mensal; antagonista D2 e 5HT2A.", "Palmitato de paliperidona con liberación prolongada mensual; antagonista D2 y 5HT2A."),
          onset: t(lang, "Esquema de carga permite início sem suplementação oral em muitos protocolos.", "El esquema de carga permite inicio sin suplementación oral en muchos protocolos."),
          halfLife: t(lang, "Meia-vida aparente prolongada, aproximadamente 25–49 dias.", "Vida media aparente prolongada, aproximadamente 25–49 días."),
          commonAdverseEffects: [
            t(lang, "Dor ou reação no local da injeção", "Dolor o reacción en el sitio de inyección"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT", "Prolongación QT"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Acúmulo em insuficiência renal", "Acumulación en insuficiencia renal")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar longa duração do depósito.", "Embarazo: evaluar riesgo-beneficio; considerar larga duración del depósito.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: ajustar ou evitar conforme ClCr.", "Insuficiencia renal: ajustar o evitar según ClCr.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à paliperidona ou risperidona", "Hipersensibilidad a paliperidona o risperidona"),
            t(lang, "ClCr <50 mL/min", "ClCr <50 mL/min"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Anti-hipertensivos: maior hipotensão", "Antihipertensivos: mayor hipotensión"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "INVEGA SUSTENNA: sem ClCr válido não presumir função normal. Bula FDA: ClCr 50–<80 usa início renal específico 156 mg dia 1/117 mg dia 8 e manutenção inicial 78 mg mensal (máx. 156 mg/mês); ClCr <50: não recomendado. Não copiar números para Xeplion sem verificar unidades.", "INVEGA SUSTENNA: sin ClCr válido no presumir función normal. Ficha FDA: ClCr 50–<80 usa inicio renal específico 156 mg día 1/117 mg día 8 y mantenimiento inicial 78 mg mensual (máx. 156 mg/mes); ClCr <50: no recomendado. No copiar cifras a Xeplion sin verificar unidades."),
            t(lang, "INVEGA SUSTENNA é palmitato IM mensal: esquema de início, ajuste renal e unidades dependem da bula e do mercado. Xeplion EMA apresenta unidades de rotulagem distintas. Não intercambiar números diretamente.", "INVEGA SUSTENNA es palmitato IM mensual: inicio, ajuste renal y unidades dependen de ficha y mercado. Xeplion EMA usa unidades de rotulado distintas. No intercambiar valores directamente."),
            t(lang, "Confirmar tolerância prévia à risperidona ou paliperidona antes do LAI.", "Confirmar tolerancia previa a risperidona o paliperidona antes del LAI."),
            t(lang, "Ajustar pela função renal.", "Ajustar por función renal."),
            t(lang, "Monitorar prolactina se sintomas clínicos.", "Monitorizar prolactina si hay síntomas clínicos."),
            t(lang, "Monitorar peso, glicemia, lipídios e pressão arterial.", "Monitorizar peso, glucemia, lípidos y presión arterial."),
            t(lang, "Registrar data e local da aplicação para evitar erro de intervalo.", "Registrar fecha y sitio de aplicación para evitar error de intervalo.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1af14e42-951d-414d-8564-5d5fce138554",
            "https://www.ema.europa.eu/en/medicines/human/EPAR/xeplion",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Paliperidone Palmitate Monthly Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    risperidona_lai: {
      name: { pt: "Risperidona LAI", es: "Risperidona LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const clcrRaw = paciente.clcr;
        const clcr = (clcrRaw === null || clcrRaw === undefined || clcrRaw === '') ? NaN : Number(clcrRaw);
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        const insuficienciaRenal = clcr < 60;
        return {
          name: t(lang, "Risperidona LAI", "Risperidona LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Risperdal Consta"], ar: ["Risperdal Consta"] },
          presentation: [
            t(lang, "Frasco/seringa 25 mg", "Frasco/jeringa 25 mg"),
            t(lang, "Frasco/seringa 37,5 mg", "Frasco/jeringa 37,5 mg"),
            t(lang, "Frasco/seringa 50 mg", "Frasco/jeringa 50 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Dose inicial usual: 25 mg IM profunda a cada 2 semanas.", "Dosis inicial habitual: 25 mg IM profunda cada 2 semanas."),
            suplementacao: t(lang, "Manter antipsicótico oral por cerca de 3 semanas após a primeira aplicação.", "Mantener antipsicótico oral durante cerca de 3 semanas tras la primera aplicación."),
            maxDose: t(lang, "Dose máxima usual: 50 mg IM a cada 2 semanas.", "Dosis máxima habitual: 50 mg IM cada 2 semanas.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Transtorno bipolar em manutenção em alguns protocolos", "Trastorno bipolar en mantenimiento en algunos protocolos"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Psicose crônica com necessidade de LAI", "Psicosis crónica con necesidad de LAI"),
            t(lang, "Transtorno esquizoafetivo em casos selecionados", "Trastorno esquizoafectivo en casos seleccionados")
          ],
          renalAdjustment: idadeAdultaValidada ? (!Number.isFinite(clcr) || clcr <= 0 ? t(lang, "ClCr ausente ou inválido: não classificar função renal como normal; confirmar antes de selecionar CONSTA.", "ClCr ausente o inválido: no clasificar función renal como normal; confirmar antes de seleccionar CONSTA.") : insuficienciaRenal ? t(lang, "RISPERDAL CONSTA: disfunção renal requer titulação oral prévia conforme bula; não selecionar injetável automaticamente.", "RISPERDAL CONSTA: daño renal requiere titulación oral previa según ficha; no seleccionar inyectable automáticamente.") : t(lang, "ClCr informado ≥60 mL/min: confirmar tolerância oral e fatores individuais antes de iniciar CONSTA.", "ClCr informado ≥60 mL/min: confirmar tolerancia oral y factores individuales antes de iniciar CONSTA.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela; pode ser necessário estabilizar primeiro com dose oral menor.", "Hepatopatía: iniciar con cautela; puede ser necesario estabilizar primero con dosis oral menor.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Antagonista D2 e 5HT2A em formulação depot de microesferas, com liberação prolongada.", "Antagonista D2 y 5HT2A en formulación depot de microesferas, con liberación prolongada."),
          onset: t(lang, "Liberação clínica relevante é retardada; por isso exige cobertura oral inicial por aproximadamente 3 semanas.", "La liberación clínica relevante es retardada; por eso requiere cobertura oral inicial durante aproximadamente 3 semanas."),
          halfLife: t(lang, "Liberação prolongada por semanas; administração habitual a cada 14 dias.", "Liberación prolongada por semanas; administración habitual cada 14 días."),
          commonAdverseEffects: [
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección"),
            t(lang, "Hiperprolactinemia", "Hiperprolactinemia"),
            t(lang, "Ganho de peso", "Aumento de peso"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Parkinsonismo", "Parkinsonismo"),
            t(lang, "Sonolência", "Somnolencia")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Prolongamento QT em predispostos", "Prolongación QT en predispuestos"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Eventos cerebrovasculares em idosos com demência", "Eventos cerebrovasculares en adultos mayores con demencia"),
            t(lang, "Efeito adverso persistente pela formulação depot", "Efecto adverso persistente por la formulación depot")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de EPS, hipotensão, quedas, AVC e mortalidade em demência.", "Adulto mayor: mayor riesgo de EPS, hipotensión, caídas, ACV y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar duração prolongada do depósito.", "Embarazo: evaluar riesgo-beneficio; considerar duración prolongada del depósito.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, alimentação e sintomas extrapiramidais no lactente.", "Lactancia: monitorizar sedación, alimentación y síntomas extrapiramidales en el lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: iniciar com cautela e considerar estabilização oral prévia.", "Hepatopatía: iniciar con cautela y considerar estabilización oral previa.") : null,
            insuficienciaRenal ? t(lang, "Insuficiência renal: iniciar com cautela e considerar estabilização oral prévia.", "Insuficiencia renal: iniciar con cautela y considerar estabilización oral previa.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à risperidona ou paliperidona", "Hipersensibilidad a risperidona o paliperidona"),
            t(lang, "Ausência de tolerância prévia à risperidona/paliperidona", "Ausencia de tolerancia previa a risperidona/paliperidona"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6", "Fluoxetina/paroxetina: pueden aumentar niveles por CYP2D6"),
            t(lang, "Carbamazepina: pode reduzir níveis", "Carbamazepina: puede reducir niveles"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos"),
            t(lang, "Fármacos que prolongam QT", "Fármacos que prolongan QT"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "RISPERDAL CONSTA (microesferas): cobertura oral por 3 semanas após 1ª aplicação; disfunção renal/hepática requer titulação VO prévia. ClCr não informado deve aparecer como desconhecido, não como 100 mL/min. Não aplicar regras de outros LAI de risperidona.", "RISPERDAL CONSTA (microesferas): cobertura oral 3 semanas después de la 1.ª dosis; daño renal/hepático requiere titulación oral previa. ClCr sin dato debe mostrarse desconocido, no como 100 mL/min. No aplicar pautas de otros LAI de risperidona."),
            t(lang, "RISPERDAL CONSTA (microesferas): tolerância oral prévia e cobertura oral por 3 semanas após início, conforme bula desse produto. Não transferir a regra para outros LAI de risperidona.", "RISPERDAL CONSTA (microesferas): tolerancia oral previa y cobertura oral durante 3 semanas después del inicio, según ficha de ese producto. No transferir regla a otros LAI de risperidona."),
            t(lang, "Confirmar tolerância oral antes de iniciar LAI.", "Confirmar tolerancia oral antes de iniciar LAI."),
            t(lang, "Manter cobertura oral por aproximadamente 3 semanas após primeira aplicação.", "Mantener cobertura oral aproximadamente 3 semanas tras primera aplicación."),
            t(lang, "Aplicação IM profunda a cada 2 semanas.", "Aplicación IM profunda cada 2 semanas."),
            t(lang, "Monitorar prolactina, EPS, peso, glicemia e lipídios.", "Monitorizar prolactina, EPS, peso, glucemia y lípidos."),
            t(lang, "Registrar data de aplicação para evitar falhas no intervalo.", "Registrar fecha de aplicación para evitar fallas en el intervalo.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bb34ee82-d2c2-43b8-ba21-2825c0954691",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Risperidone LAI Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    aripiprazol_lai: {
      name: { pt: "Aripiprazol LAI", es: "Aripiprazol LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Aripiprazol LAI", "Aripiprazol LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Abilify Maintena"], ar: ["Abilify Maintena", "Aripiprazol LAI"] },
          presentation: [
            t(lang, "Frasco/seringa 300 mg", "Frasco/jeringa 300 mg"),
            t(lang, "Frasco/seringa 400 mg", "Frasco/jeringa 400 mg"),
            t(lang, "Registro restrito a Abilify Maintena (aripiprazol); aripiprazol lauroxil/Aristada exige ficha separada.", "Registro limitado a Abilify Maintena (aripiprazol); aripiprazol lauroxilo/Aristada requiere ficha separada.")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Abilify Maintena (não Aristada): dose de manutenção habitual 400 mg IM mensal; considerar redução para 300 mg/mês se reação adversa, conforme bula FDA.", "Abilify Maintena (no Aristada): dosis habitual de mantenimiento 400 mg IM mensual; considerar reducción a 300 mg/mes ante reacción adversa, según ficha FDA."),
            suplementacao: t(lang, "Abilify Maintena (FDA): existem dois inícios distintos, de 1 dia ou de 14 dias; consultar o esquema integral e as interações da bula antes da aplicação. Não aplicar o início de Aristada.", "Abilify Maintena (FDA): existen dos inicios distintos, de 1 día o de 14 días; consultar el esquema completo y las interacciones de la ficha antes de administrar. No aplicar el inicio de Aristada."),
            maxDose: t(lang, "Dose máxima usual: 400 mg IM mensal para Abilify Maintena.", "Dosis máxima habitual: 400 mg IM mensual para Abilify Maintena.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Transtorno bipolar tipo I em manutenção", "Trastorno bipolar tipo I en mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes com boa resposta prévia ao aripiprazol oral", "Pacientes con buena respuesta previa a aripiprazol oral"),
            t(lang, "Necessidade de menor risco de hiperprolactinemia", "Necesidad de menor riesgo de hiperprolactinemia")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Geralmente sem ajuste, mas usar cautela em hepatopatia grave.", "Generalmente sin ajuste, pero usar con cautela en hepatopatía grave.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Agonista parcial D2 e 5HT1A, antagonista 5HT2A, em formulação depot de liberação prolongada.", "Agonista parcial D2 y 5HT1A, antagonista 5HT2A, en formulación depot de liberación prolongada."),
          onset: t(lang, "Não indicado para controle imediato. Estabelecer tolerância ao aripiprazol oral em pacientes sem exposição anterior; início de 1 ou 14 dias conforme Abilify Maintena FDA.", "No indicado para control inmediato. Establecer tolerancia al aripiprazol oral en pacientes sin exposición previa; inicio de 1 o 14 días según Abilify Maintena FDA."),
          halfLife: t(lang, "Meia-vida aparente prolongada, permitindo administração mensal ou intervalos maiores conforme formulação.", "Vida media aparente prolongada, permitiendo administración mensual o intervalos mayores según formulación."),
          commonAdverseEffects: [
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección"),
            t(lang, "Acatisia", "Acatisia"),
            t(lang, "Insônia", "Insomnio"),
            t(lang, "Ansiedade ou ativação", "Ansiedad o activación"),
            t(lang, "Náuseas", "Náuseas"),
            t(lang, "Cefaleia", "Cefalea")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Impulsividade, jogo patológico ou hipersexualidade em casos raros", "Impulsividad, juego patológico o hipersexualidad en casos raros"),
            t(lang, "Reação grave no local da injeção", "Reacción grave en el sitio de inyección"),
            t(lang, "Hiperglicemia e dislipidemia", "Hiperglucemia y dislipidemia"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de quedas, acatisia, eventos cerebrovasculares e mortalidade em demência.", "Adulto mayor: mayor riesgo de caídas, acatisia, eventos cerebrovasculares y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; considerar longa duração da formulação depot.", "Embarazo: evaluar riesgo-beneficio; considerar larga duración de la formulación depot.") : null,
            lactante ? t(lang, "Lactação: pode reduzir prolactina e produção de leite; monitorar lactente.", "Lactancia: puede reducir prolactina y producción de leche; monitorizar lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia grave: usar cautela e monitorar tolerabilidade.", "Hepatopatía grave: usar con cautela y monitorizar tolerabilidad.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade ao aripiprazol", "Hipersensibilidad al aripiprazol"),
            t(lang, "Ausência de tolerância prévia ao aripiprazol oral", "Ausencia de tolerancia previa a aripiprazol oral"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Inibidores fortes de CYP2D6 como fluoxetina/paroxetina: aumentam níveis", "Inhibidores fuertes de CYP2D6 como fluoxetina/paroxetina: aumentan niveles"),
            t(lang, "Inibidores fortes de CYP3A4 como cetoconazol/claritromicina: aumentam níveis", "Inhibidores fuertes de CYP3A4 como ketoconazol/claritromicina: aumentan niveles"),
            t(lang, "Indutores fortes de CYP3A4 como carbamazepina/rifampicina: reduzem níveis", "Inductores fuertes de CYP3A4 como carbamazepina/rifampicina: reducen niveles"),
            t(lang, "Álcool e depressores do SNC", "Alcohol y depresores del SNC"),
            t(lang, "Levodopa e agonistas dopaminérgicos", "Levodopa y agonistas dopaminérgicos")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "ABILIFY MAINTENA (bula EUA 2026): início de 1 dia exige duas injeções IM separadas de 400 mg e uma dose VO de 20 mg; início de 14 dias exige uma injeção IM de 400 mg com antipsicótico VO por 14 dias. Verificar tolerância, CYP e protocolo; nunca usar início de Aristada.", "ABILIFY MAINTENA (ficha EE. UU. 2026): inicio de 1 día requiere dos inyecciones IM separadas de 400 mg y una dosis oral de 20 mg; inicio de 14 días requiere una inyección IM de 400 mg con antipsicótico oral durante 14 días. Verificar tolerancia, CYP y protocolo; no usar inicio de Aristada."),
            t(lang, "Confirmar tolerância oral antes da primeira aplicação.", "Confirmar tolerancia oral antes de la primera aplicación."),
            t(lang, "Manter cobertura oral inicial conforme formulação.", "Mantener cobertura oral inicial según formulación."),
            t(lang, "Monitorar acatisia, insônia e impulsividade.", "Monitorizar acatisia, insomnio e impulsividad."),
            t(lang, "Ajustar dose se houver interações fortes por CYP2D6/CYP3A4.", "Ajustar dosis si hay interacciones fuertes por CYP2D6/CYP3A4."),
            t(lang, "Registrar data da aplicação para evitar atraso no intervalo.", "Registrar fecha de aplicación para evitar atraso en el intervalo.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee49f3b1-1650-47ff-9fb1-ea53fe0b92b6",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    olanzapina_lai: {
      name: { pt: "Olanzapina LAI", es: "Olanzapina LAI" },
      category: "antipsicotico",
      calculate: (paciente, lang = "pt") => {
        const idade = Number(paciente.idade || 0);
        const idadeAdultaValidada = Number.isFinite(idade) && idade >= 18;
        const gestante = Boolean(paciente.gestante);
        const lactante = Boolean(paciente.lactante);
        const hepatopatia = Boolean(paciente.hepatopatia);
        return {
          name: t(lang, "Olanzapina LAI", "Olanzapina LAI"),
          class: t(lang, "Antipsicótico atípico injetável de longa ação", "Antipsicótico atípico inyectable de larga acción"),
          category: "antipsicotico",
          commercialNames: { br: ["Zyprexa Relprevv", "Olanzapina pamoato"], ar: ["Zypadhera", "Olanzapina pamoato"] },
          presentation: [
            t(lang, "Frasco 210 mg", "Frasco 210 mg"),
            t(lang, "Frasco 300 mg", "Frasco 300 mg"),
            t(lang, "Frasco 405 mg", "Frasco 405 mg")
          ],
          dose: idadeAdultaValidada ? {
            adulto: t(lang, "Esquizofrenia em manutenção: 150–300 mg IM a cada 2 semanas ou 300–405 mg IM a cada 4 semanas, conforme dose oral prévia e protocolo.", "Esquizofrenia en mantenimiento: 150–300 mg IM cada 2 semanas o 300–405 mg IM cada 4 semanas, según dosis oral previa y protocolo."),
            conversao: t(lang, "A dose depende da dose oral prévia de olanzapina e da resposta clínica.", "La dosis depende de la dosis oral previa de olanzapina y de la respuesta clínica."),
            maxDose: t(lang, "Dose máxima usual: 300 mg a cada 2 semanas ou 405 mg a cada 4 semanas.", "Dosis máxima habitual: 300 mg cada 2 semanas o 405 mg cada 4 semanas.")
          } : {
            aviso: t(lang, "Dose não disponibilizada: idade ausente, inválida ou menor de 18 anos. Posologia adulta não aplicável; não calcular dose pediátrica sem fonte específica validada.", "Dosis no disponible: edad ausente, inválida o menor de 18 años. Pauta adulta no aplicable; no calcular dosis pediátrica sin fuente específica validada.")
          },
          indications: [
            t(lang, "Esquizofrenia em manutenção", "Esquizofrenia en mantenimiento"),
            t(lang, "Prevenção de recaídas psicóticas", "Prevención de recaídas psicóticas"),
            t(lang, "Baixa adesão ao tratamento oral", "Baja adherencia al tratamiento oral"),
            t(lang, "Pacientes previamente respondedores à olanzapina oral", "Pacientes previamente respondedores a olanzapina oral"),
            t(lang, "Psicose crônica com necessidade de formulação depot", "Psicosis crónica con necesidad de formulación depot"),
            t(lang, "Alternativa LAI quando outros antipsicóticos foram mal tolerados", "Alternativa LAI cuando otros antipsicóticos fueron mal tolerados")
          ],
          renalAdjustment: idadeAdultaValidada ? (t(lang, "Sem ajuste renal habitual.", "Sin ajuste renal habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          hepaticAdjustment: idadeAdultaValidada ? (hepatopatia ? t(lang, "Hepatopatia: usar com cautela e monitorar enzimas hepáticas.", "Hepatopatía: usar con cautela y monitorizar enzimas hepáticas.") : t(lang, "Sem ajuste hepático habitual.", "Sin ajuste hepático habitual.")) : t(lang, "Ajuste pediátrico não validado nesta ficha; confirmar idade, indicação, órgão e bula do produto antes de qualquer cálculo.", "Ajuste pediátrico no validado en esta ficha; confirmar edad, indicación, órgano y prospecto del producto antes de calcular."),
          mechanism: t(lang, "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A e D2, com bloqueio H1, muscarínico e alfa-1.", "Pamoato de olanzapina de liberación prolongada; antagonista 5HT2A y D2, con bloqueo H1, muscarínico y alfa-1."),
          onset: t(lang, "Não é indicada para agitação aguda; exige tolerância prévia à olanzapina oral.", "No está indicada para agitación aguda; requiere tolerancia previa a olanzapina oral."),
          halfLife: t(lang, "Liberação prolongada por semanas; administração a cada 2 ou 4 semanas conforme esquema.", "Liberación prolongada por semanas; administración cada 2 o 4 semanas según esquema."),
          commonAdverseEffects: [
            t(lang, "Ganho de peso importante", "Aumento de peso importante"),
            t(lang, "Sonolência", "Somnolencia"),
            t(lang, "Aumento do apetite", "Aumento del apetito"),
            t(lang, "Dislipidemia", "Dislipidemia"),
            t(lang, "Hiperglicemia", "Hiperglucemia"),
            t(lang, "Dor no local da injeção", "Dolor en el sitio de inyección")
          ],
          dangerousAdverseEffects: [
            t(lang, "Síndrome pós-injeção com delirium/sedação", "Síndrome postinyección con delirium/sedación"),
            t(lang, "Síndrome metabólica grave", "Síndrome metabólico grave"),
            t(lang, "Diabetes mellitus ou descompensação glicêmica", "Diabetes mellitus o descompensación glucémica"),
            t(lang, "Síndrome neuroléptica maligna", "Síndrome neuroléptico maligno"),
            t(lang, "Discinesia tardia", "Discinesia tardía"),
            t(lang, "Convulsões em predispostos", "Convulsiones en predispuestos")
          ],
          risksByPatient: [
            idade >= 65 ? t(lang, "Idoso: maior risco de sedação, quedas, eventos cerebrovasculares, síndrome metabólica e mortalidade em demência.", "Adulto mayor: mayor riesgo de sedación, caídas, eventos cerebrovasculares, síndrome metabólico y mortalidad en demencia.") : null,
            gestante ? t(lang, "Gestação: avaliar risco-benefício; longa duração dificulta retirada rápida.", "Embarazo: evaluar riesgo-beneficio; larga duración dificulta retirada rápida.") : null,
            lactante ? t(lang, "Lactação: monitorar sedação, irritabilidade e alimentação do lactente.", "Lactancia: monitorizar sedación, irritabilidad y alimentación del lactante.") : null,
            hepatopatia ? t(lang, "Hepatopatia: monitorar enzimas hepáticas e sedação.", "Hepatopatía: monitorizar enzimas hepáticas y sedación.") : null
          ].filter(Boolean),
          contraindications: [
            t(lang, "Hipersensibilidade à olanzapina", "Hipersensibilidad a olanzapina"),
            t(lang, "Ausência de tolerância prévia à olanzapina oral", "Ausencia de tolerancia previa a olanzapina oral"),
            t(lang, "Incapacidade de realizar observação pós-injeção obrigatória", "Incapacidad de realizar observación postinyección obligatoria"),
            t(lang, "Demência com psicose sem avaliação especializada", "Demencia con psicosis sin evaluación especializada")
          ],
          interactions: [
            t(lang, "Álcool e depressores do SNC: maior sedação", "Alcohol y depresores del SNC: mayor sedación"),
            t(lang, "Benzodiazepínicos: maior sedação e hipotensão", "Benzodiacepinas: mayor sedación e hipotensión"),
            t(lang, "Tabagismo: pode reduzir níveis por CYP1A2", "Tabaquismo: puede reducir niveles por CYP1A2"),
            t(lang, "Fluvoxamina/ciprofloxacino: podem aumentar níveis por CYP1A2", "Fluvoxamina/ciprofloxacino: pueden aumentar niveles por CYP1A2"),
            t(lang, "Levodopa e agonistas dopaminérgicos: antagonismo", "Levodopa y agonistas dopaminérgicos: antagonismo")
          ],
          alerts: idadeAdultaValidada ? [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada."),
            t(lang, "ZYPREXA RELPREVV: após CADA injeção, bula FDA vigente exige observação profissional contínua por pelo menos 3 horas em serviço certificado, avaliação antes da alta e acompanhante na saída; não dirigir no restante do dia. Checar regras locais.", "ZYPREXA RELPREVV: tras CADA inyección, ficha FDA vigente exige observación profesional continua al menos 3 horas en centro certificado, valoración previa al alta y acompañante al salir; no conducir el resto del día. Revisar normas locales."),
            t(lang, "ZYPREXA RELPREVV/pamoato: síndrome de delírio/sedação pós-injeção exige observação por pelo menos 3 horas em serviço habilitado segundo bula EUA atual; REMS deste produto NÃO é o REMS da clozapina. Verificar regras locais.", "ZYPREXA RELPREVV/pamoato: síndrome de delirio/sedación posinyección requiere observación durante al menos 3 horas en centro habilitado según ficha vigente EUA; REMS de este producto NO es REMS de clozapina. Verificar normas locales."),
            t(lang, "Exige observação pós-injeção por risco de síndrome pós-injeção com sedação/delirium.", "Requiere observación postinyección por riesgo de síndrome postinyección con sedación/delirium."),
            t(lang, "Confirmar tolerância oral antes de iniciar.", "Confirmar tolerancia oral antes de iniciar."),
            t(lang, "Monitorar peso, cintura, glicemia/HbA1c, lipídios e pressão arterial.", "Monitorizar peso, cintura, glucemia/HbA1c, lípidos y presión arterial."),
            t(lang, "Orientar paciente a não dirigir após aplicação conforme protocolo local.", "Orientar al paciente a no conducir tras la aplicación según protocolo local."),
            t(lang, "Registrar data, dose, lote e local de aplicação.", "Registrar fecha, dosis, lote y sitio de aplicación.")
          ] : [
            t(lang, "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.", "SEGURIDAD PEDIÁTRICA: esta ficha aún no tiene dosis pediátrica estructurada y validada para producto e indicación. Nunca extrapolar la pauta adulta a menores de 18 años; verificar prospecto específico y evaluación especializada.")
          ],
          ref: [
            "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=11544cba-64a9-49cb-8d74-da228053b252",
            "Goodman & Gilman 14ª Ed.",
            "Stahl's Essential Psychopharmacology",
            "FDA/DailyMed Olanzapine Pamoate LAI Prescribing Information",
            "Lexicomp",
            "Micromedex",
            "UpToDate"
          ]
        };
      }
    },

    /* ── ESTABILIZADORES DO HUMOR ── */

  }); /* fim Object.assign PSICOFARMACOS_DRUGS_DB — BUILD 455-SNC
         PILAR 2: haloperidol·clorpromazina·levomepromazina·periciazina·flufenazina·
                  zuclopentixol·tiotixeno·pimozida·sulpirida (Típicos)
                  risperidona·olanzapina·quetiapina·clozapina·aripiprazol·ziprasidona·
                  paliperidona·asenapina·lurasidona·cariprazina·brexpiprazol·amisulprida (Atípicos)
                  paliperidona_trimestral·paliperidona_mensal·risperidona_lai·
                  aripiprazol_lai·olanzapina_lai (LAI/Depot) — 26 drugs total */

  /* G01 R26: pediatric evidence is per DRUG + INDICATION + PRODUCT + FORMULATION.
     This does not attest 33/33 GOLD or approval of other pediatric indications. */
  const mcPediatricEvidenceR26 = Object.freeze({"amisulprida":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"aripiprazol":{"status":"SOURCE_BACKED_INITIAL_ONLY","sourceUrls":["https://boletin.anmat.gob.ar/Enero_2020/Dispo_0470-20.pdf","https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=178f09f0-e08e-452b-b817-717c5c49e110"],"doseAuto":true,"product":"LEMIDAL","formulation":"oral_tablet","minAge":6,"maxAge":17,"weightMinimumKg":null,"indication":"autism_irritability","jurisdiction":"AR","labelRevision":"2020_ANMAT","note":"2 mg starting dose is in leaflet; no tablet fraction or strength conversion authorized"},"aripiprazol_lai":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"asenapina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"brexpiprazol":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"cariprazina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"clorpromazina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"clozapina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"flufenazina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"haloperidol":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"levomepromazina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"lurasidona":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"olanzapina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"olanzapina_lai":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"paliperidona":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"paliperidona_mensal":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"paliperidona_trimestral":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"periciazina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"pimozida":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"quetiapina":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"risperidona":{"status":"SOURCE_BACKED_INITIAL_ONLY","sourceUrls":["https://boletin.anmat.gob.ar/mayo_2019/Dispo_MSYDS_4586-19.pdf","https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4ab6d256-6590-45be-a5df-f505987f96c3"],"doseAuto":true,"product":"RISPERDAL","formulation":"oral_solution_1mg_ml","minAge":5,"maxAge":17,"weightMinimumKg":15,"indication":"autism_irritability","jurisdiction":"AR","labelRevision":"2019_ANMAT"},"risperidona_lai":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"sulpirida":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"tiotixeno":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"ziprasidona":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false},"zuclopentixol":{"status":"PENDING_PRODUCT_INDICATION_REVIEW","sourceUrls":[],"doseAuto":false}});
  const mcR26Name = (id, lang) => {
    const rec = window.PSICOFARMACOS_DRUGS_DB[id];
    return rec && rec.name ? (rec.name[lang] || rec.name.pt || id) : id;
  };
  const mcR26Block = (id, lang, reason) => ({
    name: mcR26Name(id, lang), category: 'antipsicotico',
    dose: { aviso: lang === 'pt' ? 'Cálculo pediátrico BLOQUEADO: '+reason : 'Cálculo pediátrico BLOQUEADO: '+reason },
    pediatricDose: { status: 'BLOCKED', reason, indicationRequired: 'autism_irritability', adultDoseExposed: false },
    renalAdjustment: lang === 'pt' ? 'Ajuste pediátrico não verificado; não calcular.' : 'Ajuste pediátrico no verificado; no calcular.',
    hepaticAdjustment: lang === 'pt' ? 'Ajuste pediátrico não verificado; não calcular.' : 'Ajuste pediátrico no verificado; no calcular.',
    alerts: [lang === 'pt' ? 'Dose adulta não aplicável. Validar idade, peso, indicação, produto, apresentação e situação clínica.' : 'No aplicar pauta adulta. Validar edad, peso, indicación, producto, presentación y situación clínica.'],
    ref: []
  });
  const mcR26Pediatric = (id, patient, lang) => {
    const e = mcPediatricEvidenceR26[id];
    if (!e || e.status !== 'SOURCE_BACKED_INITIAL_ONLY') return mcR26Block(id,lang,'Sem posologia pediátrica verificada para este produto/indicação.');
    const age = patient && patient.idade;
    const weight = patient && patient.peso;
    if (age === null || age === undefined || age === '' || weight === null || weight === undefined || weight === '')
      return mcR26Block(id,lang,'Idade e peso são obrigatórios.');
    const a = Number(age), w = Number(weight);
    if (!Number.isFinite(a) || !Number.isFinite(w) || a < e.minAge || a > e.maxAge || w <= 0)
      return mcR26Block(id,lang,'Idade/peso fora do intervalo verificado ou inválidos.');
    if (id === 'risperidona' && w < 15) return mcR26Block(id,lang,'Bula: não há dados de dose para peso <15 kg.');
    if (patient.indicacao !== 'autism_irritability' || patient.jurisdicao !== 'AR' ||
        patient.formulacao !== e.formulation || patient.produto !== e.product)
      return mcR26Block(id,lang,'Indicação, país, produto ou formulação não correspondem à bula verificada.');
    if (patient.renalStatus !== 'normal' || patient.hepaticStatus !== 'normal' || patient.interactionsReviewed !== true)
      return mcR26Block(id,lang,'Funções renal/hepática normais e interações revisadas devem ser confirmadas; ajuste pediátrico não parametrizado.');
    const initial = id === 'risperidona' ? (w < 20 ? 0.25 : 0.5) : 2;
    const dose = {
      indication: 'autism_irritability', route: 'oral', phase: 'INITIAL_ONLY',
      initialMgPerDay: initial, unit: 'mg/day', frequencyPerDay: 1,
      clinicalReviewRequired: true
    };
    if (id === 'risperidona') {
      dose.productConcentrationMgPerMl = 1;
      dose.initialMlPerDay = initial; // exact 1 mg/mL labelled solution; NOT other drops/tablets
    }
    return {
      name: mcR26Name(id,lang), category: 'antipsicotico',
      dose,
      pediatricDose: {
        status:'SOURCE_BACKED_INITIAL_ONLY', indication:'autism_irritability',
        minAge:e.minAge,maxAge:e.maxAge,weightKg:w,ageYears:a,
        product:e.product, formulation:e.formulation, jurisdiction:'AR',
        initialMgPerDay:initial, unit:'mg/day', calculation:id==='risperidona'?'WEIGHT_BAND_LT20_VS_GTE20':'FIXED_INITIAL_BY_INDICATION',
        sourceUrls:e.sourceUrls, sourceScope:'ANMAT_ARGENTINA_PRODUCT_SPECIFIC',
        titrationAutomatic:false, maintenanceAutomatic:false, independentlyClinicallySignedOff:false
      },
      renalAdjustment: lang==='pt'?'Ajuste pediátrico não parametrizado; requer avaliação individual.':'Ajuste pediátrico no parametrizado; requiere evaluación individual.',
      hepaticAdjustment: lang==='pt'?'Ajuste pediátrico não parametrizado; requer avaliação individual.':'Ajuste pediátrico no parametrizado; requiere evaluación individual.',
      alerts: [lang==='pt'?'APENAS dose inicial descrita em bula ANMAT. Não calcular titulação/manutenção; confirmar disponibilidade da apresentação, interações e prescrição especializada.':'SOLO dosis inicial descrita en prospecto ANMAT. No calcular titulación/mantenimiento; confirmar disponibilidad de presentación, interacciones y prescripción especializada.'],
      ref: e.sourceUrls
    };
  };
  for (const id of Object.keys(mcPediatricEvidenceR26)) {
    const drug = window.PSICOFARMACOS_DRUGS_DB[id];
    if (!drug || typeof drug !== 'object') throw Error('G01_R26_MISSING_'+id);
    if (Object.prototype.hasOwnProperty.call(drug,'mcPediatricEvidenceV1')) throw Error('G01_R26_ALREADY_PRESENT_'+id);
    drug.mcPediatricEvidenceV1 = mcPediatricEvidenceR26[id];
    if (typeof drug.calculate !== 'function') continue; // two legacy owners: not exported as premium
    const adultCalculate = drug.calculate;
    drug.calculate = (patient, lang = 'pt') => {
      if (!patient || typeof patient !== 'object') return mcR26Block(id,lang,'Paciente ausente.');
      const a = patient.idade;
      if (a === null || a === undefined || a === '' || !Number.isFinite(Number(a)))
        return mcR26Block(id,lang,'Idade ausente ou inválida.');
      const age = Number(a);
      if (age < 0 || age > 130) return mcR26Block(id,lang,'Idade fora do intervalo operacional.');
      if (age < 18) return mcR26Pediatric(id,patient,lang);
      const adultResult = adultCalculate(patient,lang);
      if (!adultResult || typeof adultResult !== 'object' || Array.isArray(adultResult)) throw Error('G01_R26_ADULT_RESULT_'+id);
      const e = mcPediatricEvidenceR26[id];
      const pediatric = {
        status:e.status, doseAuto:e.doseAuto, indication:e.indication || null,
        sourceUrls:e.sourceUrls,
        note:lang==='pt'?'Dados pediátricos separados do cálculo adulto. Não extrapolar outras indicações.':'Datos pediátricos separados del cálculo adulto. No extrapolar otras indicaciones.'
      };
      if (e.status === 'SOURCE_BACKED_INITIAL_ONLY') {
        Object.assign(pediatric, {
          jurisdiction:e.jurisdiction, product:e.product, formulation:e.formulation,
          minAge:e.minAge, maxAge:e.maxAge, minWeightKg:e.weightMinimumKg,
          calculationStatus:'INITIAL_ONLY_REQUIRES_EXPLICIT_INDICATION_AND_CLINICAL_REVIEW',
          titrationAutomatic:false, maintenanceAutomatic:false, independentlyClinicallySignedOff:false,
          unit:'mg/day'
        });
        if (id === 'risperidona') {
          pediatric.initialByWeightKg = [
            {minInclusiveKg:15,maxExclusiveKg:20,initialMgPerDay:0.25,concentrationMgPerMl:1,initialMlPerDay:0.25},
            {minInclusiveKg:20,maxExclusiveKg:null,initialMgPerDay:0.5,concentrationMgPerMl:1,initialMlPerDay:0.5}
          ];
        } else if (id === 'aripiprazol') {
          pediatric.initialMgPerDay = 2;
          pediatric.dispensingNote = lang === 'pt' ? 'Não converter em fração de comprimido: confirmar apresentação apta a fornecer 2 mg.' : 'No convertir en fracción de comprimido: confirmar presentación apta para administrar 2 mg.';
        }
      }
      return {...adultResult, pediatricDose:pediatric};
    };
  }


/* R27: labeled pediatric POSOLOGY REFERENCE (NOT independently signed-off).
 * Append after R26. Product, jurisdiction, indication and formulation must match.
 * The 2024 ANMAT LEMIDAL label lists 5/10/15/20 mg tablets, NOT a 2 mg tablet.
 * Therefore prior R26 automatic 2 mg LEMIDAL output MUST be blocked.
 */
  const mcR27Ris = 'https://boletin.anmat.gob.ar/mayo_2019/Dispo_MSYDS_4586-19.pdf';
  const mcR27Ar = 'https://boletin.anmat.gob.ar/Marzo_2024/Dispo_2758-24.pdf';
  const mcR27ArFda = 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/021436s046s050lbl.pdf';
  const mcR27RisSchema = Object.freeze({
    status:'LABEL_POSOLOGY_REFERENCE_NOT_CLINICALLY_SIGNED', product:'RISPERDAL',jurisdiction:'AR',formulation:'oral_solution_1mg_ml',concentrationMgPerMl:1,
    indication:'autism_irritability',minAgeYears:5,maxAgeYears:17,minWeightKg:15,route:'oral',unit:'mg/day',frequency:'once_daily_or_two_divided_doses',
    initiation:[{minKg:15,maxKgExclusive:20,mgDay:0.25},{minKg:20,maxKgExclusive:null,mgDay:0.5}],
    day5OrLaterAfterClinicalAuthorization:[{minKg:15,maxKgExclusive:20,mgDay:0.5},{minKg:20,maxKgExclusive:null,mgDay:1}],
    earliestFirstIncreaseDay:5,minimumDaysAtRecommendedDose:14,
    subsequentTitration:{minimumIntervalDays:14,incrementMgDayBelow20Kg:0.25,incrementMgDayAtLeast20Kg:0.5,requiresClinicianDecision:true},
    effectiveRangeMgDay:[0.5,3],maxEffectiveLabelMgDay:3,
    maintenance:'individualized lowest effective dose; regular reassessment; not auto-calculated',
    additionalIndicationsReferenceOnly:[
      {indication:'schizophrenia',agesYears:[13,17],initialMgDay:0.5,desirableMgDay:3,studiedEffectiveRangeMgDay:[1,6],incrementMgDay:[0.5,1],minTitrationHours:24,maxStudiedMgDay:6},
      {indication:'bipolar_i_mania',agesYears:[10,17],initialMgDay:0.5,desiredRangeMgDay:[1,2.5],studiedRangeMgDay:[0.5,6],incrementMgDay:[0.5,1],minTitrationHours:24,above2point5NoAddedEfficacyInStudies:true,maxStudiedMgDay:6}
    ],
    source:[{url:mcR27Ris,regulator:'ANMAT',disposition:'4586/2019',pageNumbers:[14,15,16,17],accessed:'2026-09-16'}],
    marketAvailability2026:'NOT_VERIFIED',independentlyClinicallySignedOff:false
  });
  const mcR27ArSchema = Object.freeze({
    status:'LABEL_POSOLOGY_REFERENCE_DISPENSING_BLOCKED',product:'LEMIDAL',jurisdiction:'AR',formulation:'oral_tablet',
    indication:'autism_irritability',minAgeYears:6,maxAgeYears:17,route:'oral',unit:'mg/day',frequency:'once_daily',
    initialMgDay:2,recommendedRangeMgDay:[5,15],labelEscalationStepsMgDay:[2,5,10,15],
    minimumEscalationIntervalDays:7,maxIncreaseMgPerStep:5,titrationIndividualized:true,
    strengthsConfirmedBy2024LabelMg:[5,10,15,20],initial2mgStrengthAvailableInNamedProduct:false,
    allowedAutomaticInitialDose:false,tabletSplittingNotAuthorizedByReviewedLabel:true,
    additionalIndicationsReferenceOnly:[
      {indication:'schizophrenia',agesYears:[13,17],arLabelTargetMgDay:10,arLabelMaxMgDay:30,usAbilifyStartingMgDay:2,usAbilifyTitrationMgDay:[2,5,10],usScheduleMinDay:[1,3,5],usDifferentProduct:true},
      {indication:'bipolar_i_mania',agesYears:[10,17],arLabelTargetMgDay:10,usAbilifyStartingMgDay:2,usAbilifyTitrationMgDay:[2,5,10],usScheduleMinDay:[1,3,5],usDifferentProduct:true}
    ],
    source:[{url:mcR27Ar,regulator:'ANMAT',disposition:'2758/2024',pages:[1,2,5,6],accessed:'2026-09-16'},
      {url:mcR27ArFda,regulator:'FDA',product:'ABILIFY not LEMIDAL',labelYear:2025,pages:[4,5,6],supplementaryCrossCheck:true,accessed:'2026-09-16'}],
    marketAvailability2026:'NOT_VERIFIED',independentlyClinicallySignedOff:false
  });
  const mcR27RiskByID = {"amisulprida":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","aripiprazol":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","aripiprazol_lai":"LAI_MAINTENA_NOT_ARISTADA_ADULT_PEDIATRIC_INTERCHANGE_BLOCK","asenapina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","brexpiprazol":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","cariprazina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","clorpromazina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","clozapina":"ANC_MONITORING_AND_PEDIATRIC_EVIDENCE_UNVERIFIED","flufenazina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","haloperidol":"LEGACY_COLLISION_POLICY_PROPOSED_NO_PED_EXPORT","levomepromazina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","lurasidona":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","olanzapina":"LEGACY_STATIC_NO_PED_EXPORT","olanzapina_lai":"LAI_POST_INJECTION_SEDATION_OBSERVATION","paliperidona":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","paliperidona_mensal":"LAI_MONTHLY_INITIATION_RENAL_GATE","paliperidona_trimestral":"LAI_3MONTH_NEEDS_PRIOR_STABILIZATION","periciazina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","pimozida":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","quetiapina":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","risperidona":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","risperidona_lai":"LAI_BRAND_SPECIFIC_ORAL_OVERLAP","sulpirida":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","tiotixeno":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","ziprasidona":"PRODUCT_ROUTE_INDICATION_AGE_RENAL_HEPATIC_REVIEW_REQUIRED","zuclopentixol":"ORAL_ACETATE_DECANOATE_NOT_INTERCHANGEABLE"};
  for (const id of ["amisulprida","aripiprazol","aripiprazol_lai","asenapina","brexpiprazol","cariprazina","clorpromazina","clozapina","flufenazina","haloperidol","levomepromazina","lurasidona","olanzapina","olanzapina_lai","paliperidona","paliperidona_mensal","paliperidona_trimestral","periciazina","pimozida","quetiapina","risperidona","risperidona_lai","sulpirida","tiotixeno","ziprasidona","zuclopentixol"]) {
    const d=window.PSICOFARMACOS_DRUGS_DB[id];
    if (!d || !d.mcPediatricEvidenceV1 || Object.prototype.hasOwnProperty.call(d,'mcPediatricClinicalR27')) throw Error('R27_BASELINE_DRIFT_'+id);
    const specific=id==='risperidona'?mcR27RisSchema:id==='aripiprazol'?mcR27ArSchema:null;
    d.mcPediatricClinicalR27=specific||Object.freeze({status:'DOSE_NOT_VALIDATED_FOR_PRODUCT_INDICATION',doseAuto:false,medicalSafetyReviewRequired:true,unverifiedDoseValues:0,risk:mcR27RiskByID[id],source:[]});
    if (typeof d.calculate!=='function') continue;
    const previous=d.calculate;
    d.calculate=(patient,lang='pt')=>{
      const age=patient&&patient.idade;
      if (age===null||age===undefined||age===''||!Number.isFinite(Number(age))||Number(age)<0||Number(age)>130) return previous(patient,lang);
      if (Number(age)>=18) {
        const adult=previous(patient,lang);
        // Adult dose, renal/hepatic rules, alerts and references are unchanged.
        const ped={...adult.pediatricDose,clinicalReferenceR27:d.mcPediatricClinicalR27};
        if(id==='aripiprazol'){
          // Remove R26's misleading auto-dose metadata from the canonical adult export.
          delete ped.initialMgPerDay;
          ped.doseAuto=false;ped.status='LABEL_POSOLOGY_REFERENCE_DISPENSING_BLOCKED';ped.calculationStatus='BLOCKED_LEMIDAL_2MG_STRENGTH_UNVERIFIED';
          ped.sourceUrls=[mcR27Ar,mcR27ArFda];
          ped.titrationAutomatic=false;ped.maintenanceAutomatic=false;
        }
        if(id==='risperidona'){
          ped.status='LABEL_POSOLOGY_INITIAL_ONLY';
          ped.calculationStatus='INITIAL_DAYS_1_TO_4_ONLY';
        }
        return {...adult,pediatricDose:ped};
      }
      const old=previous(patient,lang);
      if (!specific) return {...old,pediatricDose:{...old.pediatricDose,clinicalReferenceR27:d.mcPediatricClinicalR27}};
      const denied=(reason)=>{
        const result=mcR26Block(id,lang,reason);
        result.pediatricDose={...result.pediatricDose,clinicalReferenceR27:specific,originalAdultDoseExposed:false};
        result.ref=specific.source.map(s=>s.url);
        return result;
      };
      if (!patient||typeof patient!=='object'||patient.indicacao!=='autism_irritability'||patient.jurisdicao!=='AR'||patient.produto!==specific.product||patient.formulacao!==specific.formulation)
        return denied(lang==='pt'?'Indicação, país, marca e formulação precisam corresponder à bula.':'La indicación, país, marca y formulación deben coincidir con el prospecto.');
      const a=Number(patient.idade),w=Number(patient.peso);
      if (patient.peso===undefined||patient.peso===null||patient.peso===''||!Number.isFinite(w)||w<=0||a<specific.minAgeYears||a>specific.maxAgeYears||(id==='risperidona'&&w<15))
        return denied(lang==='pt'?'Idade ou peso fora do escopo da bula.':'Edad o peso fuera del prospecto.');
      if (patient.renalStatus!=='normal'||patient.hepaticStatus!=='normal'||patient.interactionsReviewed!==true)
        return denied(lang==='pt'?'Funções orgânicas e interações precisam de revisão; não extrapolar ajustes adultos.':'Función orgánica e interacciones requieren revisión; no extrapolar ajustes de adultos.');
      if (id==='aripiprazol') {
        // Safety fix: R26 returned 2 mg automatically for a 5-mg-minimum LEMIDAL tablet.
        return denied(lang==='pt'?'Posologia de 2 mg consta na bula, mas LEMIDAL documentado só tem comprimidos de 5/10/15/20 mg. Não converter, fracionar ou calcular dispensação automaticamente.':'El prospecto indica 2 mg, pero LEMIDAL documentado solo tiene comprimidos de 5/10/15/20 mg. No fraccionar ni calcular dispensación.');
      }
      // Do not auto-escalate. Days beyond initiation require an explicitly approved plan.
      const day=patient.diaTratamento===undefined||patient.diaTratamento===null||patient.diaTratamento===''?NaN:Number(patient.diaTratamento);
      if (!Number.isInteger(day)||day<1||day>4) return denied(lang==='pt'?'Fora da fase inicial (dias 1–4): titulação requer decisão médica, não automática.':'Fuera de inicio (días 1–4): titulación requiere decisión clínica, no automática.');
      if (!old||!old.pediatricDose||old.pediatricDose.status!=='SOURCE_BACKED_INITIAL_ONLY'||typeof old.dose.initialMgPerDay!=='number')
        throw Error('R27_R26_INITIAL_UNEXPECTED_'+id);
      const init=w<20?0.25:0.5;
      if(old.dose.initialMgPerDay!==init||old.dose.initialMlPerDay!==init)throw Error('R27_R26_MASS_VOLUME_DRIFT');
      return {...old,
        dose:{...old.dose,phase:'INITIAL_ONLY',dayOfTreatment:day,initialMgPerDay:init,initialMlPerDay:init,
          titrationAutomatic:false,maintenanceAutomatic:false,dispensingVerified:false,clinicalReviewRequired:true},
        pediatricDose:{...old.pediatricDose,status:'LABEL_POSOLOGY_INITIAL_ONLY',clinicalReferenceR27:specific,
          titrationAutomatic:false,maintenanceAutomatic:false,independentlyClinicallySignedOff:false}
      };
    };
  }


})(); /* fim da IIFE do módulo psicofarmacos */
/* GOLD33_SELECTIVE:amisulprida:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["amisulprida"])throw new Error("GOLD33_MISSING_CANONICAL:amisulprida");db["amisulprida"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "005",
    "requiredFieldCount": 33,
    "approvedSha256": "a52097a2e20608e28786e280427a4445cb7d16984c62eb2f05df9d280fc142ea",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Amisulprida",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antagonista seletivo dopaminérgico D2/D3",
    "commercialNames": "Usar somente produtos regulatórios citados nas fontes; marcas AR/BR não presumidas.",
    "presentation": "Comprimidos 50, 100, 200 e 400 mg conforme produto/jurisdição.",
    "presentations": "Comprimidos 50, 100, 200 e 400 mg conforme produto/jurisdição.",
    "mechanism": "Antagonista seletivo dopaminérgico D2/D3. O mecanismo deve ser interpretado no contexto da formulação e indicação.",
    "pharmacodynamics": "Resposta e toxicidade são dependentes de exposição, via e população; ver dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade ~48%; dois picos; baixa ligação proteica; pouco metabolizada; eliminação renal inalterada; meia-vida ~12 h.",
    "indications": "Transtornos esquizofrênicos agudos e crônicos com sintomas positivos e/ou negativos, conforme SmPC oral. Não confundir com amisulprida IV para náusea pós-operatória em outras jurisdições.",
    "dose": "Episódios psicóticos agudos: 400–800 mg/dia VO; em casos individuais até 1200 mg/dia, sem exceder esse teto. Sintomas negativos predominantes: 50–300 mg/dia. Doses >400 mg/dia divididas em 2 tomadas.",
    "pediatricDose": "Contraindicada até a puberdade; uso da puberdade aos 18 anos não recomendado por dados insuficientes. AUTOMATABLE=NO.",
    "renalDose": "CrCl 30–60 mL/min: metade da dose; CrCl 10–30: um terço. CrCl <10: experiência insuficiente, cuidado especial.",
    "hepaticDose": "Como é pouco metabolizada, não é necessário ajuste na insuficiência hepática segundo SmPC.",
    "commonAdverseEffects": "Insônia, ansiedade, agitação, sintomas extrapiramidais, hiperprolactinemia, aumento de peso e hipotensão.",
    "dangerousAdverseEffects": "QT prolongado/torsades, síndrome neuroléptica maligna, discinesia tardia, tromboembolismo, agranulocitose e hiperglicemia.",
    "adverseEffects": "Insônia, ansiedade, agitação, sintomas extrapiramidais, hiperprolactinemia, aumento de peso e hipotensão. Graves: QT prolongado/torsades, síndrome neuroléptica maligna, discinesia tardia, tromboembolismo, agranulocitose e hiperglicemia.",
    "contraindications": "Hipersensibilidade, tumores prolactino-dependentes, feocromocitoma, lactação e combinações contraindicadas por QT/dopamina conforme SmPC.",
    "interactions": "Evitar outros prolongadores de QT, levodopa/agonistas dopaminérgicos, álcool e depressores; corrigir hipocalemia.",
    "monitoring": "ECG/QTc e eletrólitos em risco, função renal, sintomas extrapiramidais, prolactina, peso/metabolismo, NMS e suicidabilidade.",
    "administration": "VO; doses até 300–400 mg podem ser uma vez/dia conforme produto, maiores em 2 tomadas; usar mínima dose eficaz.",
    "preparation": "Comprimido pronto para uso; divisibilidade depende da apresentação.",
    "infusionProtocol": "Não aplicável ao produto oral avaliado.",
    "pregnancy": "Evitar salvo necessidade clara; exposição neonatal pode causar sintomas extrapiramidais/abstinência.",
    "lactation": "Contraindicada durante amamentação no SmPC consultado.",
    "specialPopulations": "Individualizar em idosos, gestação/lactação, disfunção renal/hepática e polifarmácia conforme campos específicos.",
    "patientEducation": "Explicar indicação, técnica, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em fonte regulatória primária; protocolo local pode restringir seleção, sequência e monitorização.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "QT prolongado/torsades, síndrome neuroléptica maligna, discinesia tardia, tromboembolismo, agranulocitose e hiperglicemia. Pediatria bloqueada; ajuste renal exige CrCl validado e revisão de QT/interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/4526/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medsafe.govt.nz/profs/datasheet/a/AmisulprideMaxtab.pdf"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/4526/smpc"
  },
  "es": {
    "name": "Amisulprida",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antagonista selectivo dopaminérgico D2/D3",
    "commercialNames": "Usar solo productos regulatorios citados; no se presumen marcas AR/BR.",
    "presentation": "Comprimidos 50, 100, 200 y 400 mg según producto/jurisdicción.",
    "presentations": "Comprimidos 50, 100, 200 y 400 mg según producto/jurisdicción.",
    "mechanism": "Antagonista selectivo dopaminérgico D2/D3. El mecanismo debe interpretarse según formulación e indicación.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición, vía y población; ver dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad ~48%; dos picos; baja unión proteica; poco metabolismo; eliminación renal sin cambios; semivida ~12 h.",
    "indications": "Trastornos esquizofrénicos agudos y crónicos con síntomas positivos y/o negativos, según SmPC oral. No confundir con amisulprida IV para náusea posoperatoria en otras jurisdicciones.",
    "dose": "Episodios psicóticos agudos: 400–800 mg/día VO; en casos individuales hasta 1200 mg/día, sin exceder ese techo. Síntomas negativos predominantes: 50–300 mg/día. Dosis >400 mg/día en 2 tomas.",
    "pediatricDose": "Contraindicada hasta la pubertad; uso desde pubertad hasta 18 años no recomendado por datos insuficientes. AUTOMATABLE=NO.",
    "renalDose": "CrCl 30–60 mL/min: mitad de dosis; CrCl 10–30: un tercio. CrCl <10: experiencia insuficiente, especial precaución.",
    "hepaticDose": "Como se metaboliza poco, no requiere ajuste en insuficiencia hepática según SmPC.",
    "commonAdverseEffects": "Insomnio, ansiedad, agitación, síntomas extrapiramidales, hiperprolactinemia, aumento de peso e hipotensión.",
    "dangerousAdverseEffects": "QT prolongado/torsades, síndrome neuroléptico maligno, discinesia tardía, tromboembolismo, agranulocitosis e hiperglucemia.",
    "adverseEffects": "Insomnio, ansiedad, agitación, síntomas extrapiramidales, hiperprolactinemia, aumento de peso e hipotensión. Graves: QT prolongado/torsades, síndrome neuroléptico maligno, discinesia tardía, tromboembolismo, agranulocitosis e hiperglucemia.",
    "contraindications": "Hipersensibilidad, tumores prolactino-dependientes, feocromocitoma, lactancia y combinaciones contraindicadas por QT/dopamina según SmPC.",
    "interactions": "Evitar otros prolongadores QT, levodopa/agonistas dopaminérgicos, alcohol y depresores; corregir hipopotasemia.",
    "monitoring": "ECG/QTc y electrolitos en riesgo, función renal, síntomas extrapiramidales, prolactina, peso/metabolismo, SNM y suicidabilidad.",
    "administration": "VO; dosis hasta 300–400 mg pueden darse una vez/día según producto, mayores en 2 tomas; usar mínima dosis eficaz.",
    "preparation": "Comprimido listo; divisibilidad depende de presentación.",
    "infusionProtocol": "No aplicable al producto oral evaluado.",
    "pregnancy": "Evitar salvo necesidad clara; exposición neonatal puede causar síntomas extrapiramidales/abstinencia.",
    "lactation": "Contraindicada durante lactancia en el SmPC consultado.",
    "specialPopulations": "Individualizar en ancianos, embarazo/lactancia, disfunción renal/hepática y polifarmacia según campos específicos.",
    "patientEducation": "Explicar indicación, técnica, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en fuente regulatoria primaria; protocolo local puede restringir selección, secuencia y monitorización.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "QT prolongado/torsades, síndrome neuroléptico maligno, discinesia tardía, tromboembolismo, agranulocitosis e hiperglucemia. Pediatria bloqueada; ajuste renal exige CrCl validado e revisão de QT/interações.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.medicines.org.uk/emc/product/4526/smpc",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.medsafe.govt.nz/profs/datasheet/a/AmisulprideMaxtab.pdf"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/4526/smpc"
  }
};})();
/* GOLD33_SELECTIVE:amisulprida:END */
/* GOLD33_SELECTIVE:aripiprazol:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["aripiprazol"])throw new Error("GOLD33_MISSING_CANONICAL:aripiprazol");db["aripiprazol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "007",
    "requiredFieldCount": 33,
    "approvedSha256": "ce8db330a22d993d0f20ecd247514972db328ff0f8a9db4a8978761cb5aea92a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Aripiprazol oral",
    "class": "Antipsicótico de segunda geração",
    "pharmacologicClass": "Agonista parcial D2/D3 e 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 2, 5, 10, 15, 20 e 30 mg; solução oral e formas dispersíveis podem variar por mercado.",
    "presentations": "Comprimidos 2, 5, 10, 15, 20 e 30 mg; solução oral e formas dispersíveis podem variar por mercado.",
    "mechanism": "Agonista parcial D2/D3 e 5-HT1A; antagonista 5-HT2A. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade ~87%; pico 3-5 h; alta ligação proteica; CYP2D6/3A4; meia-vida ~75 h (146 h em metabolizadores 2D6 lentos).",
    "indications": "Esquizofrenia; mania/misto bipolar I; adjuvante na depressão maior; irritabilidade no autismo; Tourette, conforme idade e produto.",
    "dose": "Esquizofrenia adulta: 10-15 mg VO uma vez/dia, alvo 10-15 mg, máximo 30 mg/dia. Bipolar mania: 15 mg/dia (10-15 com lítio/valproato), máximo 30 mg. Depressão adjuvante: iniciar 2-5 mg/dia, faixa 2-15 mg.",
    "pediatricDose": "Regimes dependem de indicação e idade: esquizofrenia 13-17 anos alvo 10 mg/dia; bipolar 10-17 anos alvo 10 mg/dia; autismo 6-17 anos 5-15 mg/dia. AUTOMATABLE=NO sem indicação/idade.",
    "renalDose": "Sem ajuste por função renal isolada.",
    "hepaticDose": "Sem ajuste em Child-Pugh 5-15 segundo bula; individualizar tolerabilidade.",
    "commonAdverseEffects": "Acatisia, náusea, insônia, ansiedade, cefaleia, constipação e sonolência.",
    "dangerousAdverseEffects": "Mortalidade aumentada em idosos com psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e suicidabilidade em jovens.",
    "adverseEffects": "Acatisia, náusea, insônia, ansiedade, cefaleia, constipação e sonolência. Graves: Mortalidade aumentada em idosos com psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e suicidabilidade em jovens.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Inibidores fortes CYP2D6/3A4 exigem redução; indutores fortes CYP3A4 exigem aumento/evitação conforme bula; anti-hipertensivos e depressores SNC.",
    "monitoring": "Sintomas, suicidabilidade, acatisia/EPS, peso, glicemia, lipídios, PA, impulsos compulsivos e discinesia tardia.",
    "administration": "VO uma vez/dia, com ou sem alimento; titular em intervalos adequados à meia-vida.",
    "preparation": "Confirmar formulação antes de partir, dispersar ou substituir solução por comprimido.",
    "infusionProtocol": "Não aplicável à forma oral.",
    "pregnancy": "Registro de exposição disponível; usar após avaliação benefício-risco.",
    "lactation": "Presente no leite e pode reduzir prolactina/suprimento; monitorar lactente e produção.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Mortalidade aumentada em idosos com psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e suicidabilidade em jovens. Seleção e titulação bloqueadas sem indicação, idade, medicamentos CYP2D6/3A4 e avaliação metabólica/neurológica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.otsuka-us.com/media/static/Abilify-PI.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=aripiprazole"
    ],
    "ref": "https://www.otsuka-us.com/media/static/Abilify-PI.pdf"
  },
  "es": {
    "name": "Aripiprazol oral",
    "class": "Antipsicótico de segunda generación",
    "pharmacologicClass": "Agonista parcial D2/D3 y 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 2, 5, 10, 15, 20 y 30 mg; solución oral y formas dispersables varían por mercado.",
    "presentations": "Comprimidos 2, 5, 10, 15, 20 y 30 mg; solución oral y formas dispersables varían por mercado.",
    "mechanism": "Agonista parcial D2/D3 y 5-HT1A; antagonista 5-HT2A. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad ~87%; pico 3-5 h; alta unión proteica; CYP2D6/3A4; semivida ~75 h (146 h en metabolizadores 2D6 lentos).",
    "indications": "Esquizofrenia; manía/mixto bipolar I; adyuvante en depresión mayor; irritabilidad en autismo; Tourette, según edad y producto.",
    "dose": "Esquizofrenia adulta: 10-15 mg VO una vez/día, objetivo 10-15 mg, máximo 30 mg/día. Manía bipolar: 15 mg/día (10-15 con litio/valproato), máximo 30 mg. Depresión adyuvante: iniciar 2-5 mg/día, rango 2-15 mg.",
    "pediatricDose": "Regímenes dependen de indicación y edad: esquizofrenia 13-17 objetivo 10 mg/día; bipolar 10-17 objetivo 10 mg/día; autismo 6-17 años 5-15 mg/día. AUTOMATABLE=NO sin indicación/edad.",
    "renalDose": "Sin ajuste por función renal aislada.",
    "hepaticDose": "Sin ajuste en Child-Pugh 5-15 según ficha; individualizar tolerabilidad.",
    "commonAdverseEffects": "Acatisia, náusea, insomnio, ansiedad, cefalea, estreñimiento y somnolencia.",
    "dangerousAdverseEffects": "Mayor mortalidad en ancianos con psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y suicidabilidad en jóvenes.",
    "adverseEffects": "Acatisia, náusea, insomnio, ansiedad, cefalea, estreñimiento y somnolencia. Graves: Mayor mortalidad en ancianos con psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y suicidabilidad en jóvenes.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Inhibidores fuertes CYP2D6/3A4 requieren reducción; inductores fuertes CYP3A4 requieren aumento/evitación según ficha; antihipertensivos y depresores SNC.",
    "monitoring": "Síntomas, suicidabilidad, acatisia/EPS, peso, glucemia, lípidos, PA, impulsos compulsivos y discinesia tardía.",
    "administration": "VO una vez/día, con o sin alimentos; titular según semivida.",
    "preparation": "Confirmar formulación antes de partir, dispersar o sustituir solución por comprimido.",
    "infusionProtocol": "No aplicable a forma oral.",
    "pregnancy": "Registro de exposición disponible; usar tras evaluar beneficio-riesgo.",
    "lactation": "Presente en leche y puede reducir prolactina/suministro; vigilar lactante y producción.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Mayor mortalidad en ancianos con psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y suicidabilidad en jóvenes. Seleção e titulação bloqueadas sem indicação, idade, medicamentos CYP2D6/3A4 e avaliação metabólica/neurológica.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.otsuka-us.com/media/static/Abilify-PI.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=aripiprazole"
    ],
    "ref": "https://www.otsuka-us.com/media/static/Abilify-PI.pdf"
  }
};})();
/* GOLD33_SELECTIVE:aripiprazol:END */
/* GOLD33_SELECTIVE:aripiprazol_lai:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["aripiprazol_lai"])throw new Error("GOLD33_MISSING_CANONICAL:aripiprazol_lai");db["aripiprazol_lai"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "007",
    "requiredFieldCount": 33,
    "approvedSha256": "ce8db330a22d993d0f20ecd247514972db328ff0f8a9db4a8978761cb5aea92a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Aripiprazol injetável de ação prolongada (LAI)",
    "class": "Antipsicótico atípico depot",
    "pharmacologicClass": "Agonista parcial D2/D3 e 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Produtos não intercambiáveis: Abilify Maintena mensal, Aristada com intervalos/forças próprios e Abilify Asimtufii bimestral.",
    "presentations": "Produtos não intercambiáveis: Abilify Maintena mensal, Aristada com intervalos/forças próprios e Abilify Asimtufii bimestral.",
    "mechanism": "Agonista parcial D2/D3 e 5-HT1A; antagonista 5-HT2A. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Liberação lenta determina meia-vida aparente prolongada; metabolismo CYP2D6/3A4. A farmacocinética varia por produto, dose e local.",
    "indications": "Manutenção da esquizofrenia e, conforme produto, manutenção do transtorno bipolar I em adultos.",
    "dose": "Abilify Maintena: 400 mg IM mensal, não antes de 26 dias; reduzir a 300 mg se intolerância. Na iniciação usual, manter aripiprazol oral 10-20 mg/dia ou antipsicótico oral atual por 14 dias. Outros LAI têm esquemas diferentes.",
    "pediatricDose": "Não estabelecido <18 anos para os LAI citados. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste renal isolado.",
    "hepaticDose": "Sem ajuste por função hepática leve/moderada; confirmar produto em doença grave.",
    "commonAdverseEffects": "Acatisia, aumento de peso, dor no local, sedação e constipação.",
    "dangerousAdverseEffects": "Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e erro de produto/intervalo.",
    "adverseEffects": "Acatisia, aumento de peso, dor no local, sedação e constipação. Graves: Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e erro de produto/intervalo.",
    "contraindications": "Hipersensibilidade.",
    "interactions": "Ajustes prolongados com inibidores CYP2D6/3A4 ou indutores CYP3A4 dependem do produto; revisar tabelas específicas.",
    "monitoring": "Sintomas, adesão, acatisia/EPS, peso/metabólico, PA, impulsos, reação local e janela de doses perdidas.",
    "administration": "Somente IM por profissional; local, volume e agulha dependem do produto, dose e obesidade.",
    "preparation": "Reconstituir somente com kit/diluente próprio quando aplicável; não combinar componentes de produtos diferentes.",
    "infusionProtocol": "Não é infusão IV. Administrar IM conforme instruções específicas do produto.",
    "pregnancy": "Dados insuficientes; registro de exposição disponível.",
    "lactation": "Aripiprazol passa ao leite e pode reduzir produção; individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, convulsões e erro de produto/intervalo. Integração de dose, intervalo, sobreposição oral, dose perdida, reconstituição e local bloqueada até selecionar produto LAI exato.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.otsuka-us.com/media/static/Abilify-M-PI.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217006s000lbl.pdf"
    ],
    "ref": "https://www.otsuka-us.com/media/static/Abilify-M-PI.pdf"
  },
  "es": {
    "name": "Aripiprazol inyectable de acción prolongada (LAI)",
    "class": "Antipsicótico atípico depot",
    "pharmacologicClass": "Agonista parcial D2/D3 y 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Productos no intercambiables: Abilify Maintena mensual, Aristada con intervalos/concentraciones propios y Abilify Asimtufii bimestral.",
    "presentations": "Productos no intercambiables: Abilify Maintena mensual, Aristada con intervalos/concentraciones propios y Abilify Asimtufii bimestral.",
    "mechanism": "Agonista parcial D2/D3 y 5-HT1A; antagonista 5-HT2A. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Liberación lenta determina semivida aparente prolongada; metabolismo CYP2D6/3A4. Farmacocinética varía por producto, dosis y sitio.",
    "indications": "Mantenimiento de esquizofrenia y, según producto, mantenimiento del trastorno bipolar I en adultos.",
    "dose": "Abilify Maintena: 400 mg IM mensual, no antes de 26 días; reducir a 300 mg si intolerancia. En inicio habitual, mantener aripiprazol oral 10-20 mg/día u otro antipsicótico oral 14 días. Otros LAI tienen esquemas distintos.",
    "pediatricDose": "No establecido <18 años para los LAI citados. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste renal aislado.",
    "hepaticDose": "Sin ajuste por función hepática leve/moderada; confirmar producto en enfermedad grave.",
    "commonAdverseEffects": "Acatisia, aumento de peso, dolor local, sedación y estreñimiento.",
    "dangerousAdverseEffects": "Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y error de producto/intervalo.",
    "adverseEffects": "Acatisia, aumento de peso, dolor local, sedación y estreñimiento. Graves: Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y error de producto/intervalo.",
    "contraindications": "Hipersensibilidad.",
    "interactions": "Ajustes prolongados con inhibidores CYP2D6/3A4 o inductores CYP3A4 dependen del producto; revisar tablas específicas.",
    "monitoring": "Síntomas, adherencia, acatisia/EPS, peso/metabólico, PA, impulsos, reacción local y ventana de dosis omitidas.",
    "administration": "Solo IM por profesional; sitio, volumen y aguja dependen de producto, dosis y obesidad.",
    "preparation": "Reconstituir solo con kit/diluyente propio cuando corresponda; no combinar componentes de productos distintos.",
    "infusionProtocol": "No es infusión IV. Administrar IM según instrucciones específicas del producto.",
    "pregnancy": "Datos insuficientes; registro de exposición disponible.",
    "lactation": "Aripiprazol pasa a leche y puede reducir producción; individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, convulsiones y error de producto/intervalo. Integração de dose, intervalo, sobreposição oral, dose perdida, reconstituição e local bloqueada até selecionar produto LAI exato.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://www.otsuka-us.com/media/static/Abilify-M-PI.pdf",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217006s000lbl.pdf"
    ],
    "ref": "https://www.otsuka-us.com/media/static/Abilify-M-PI.pdf"
  }
};})();
/* GOLD33_SELECTIVE:aripiprazol_lai:END */
/* GOLD33_SELECTIVE:asenapina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["asenapina"])throw new Error("GOLD33_MISSING_CANONICAL:asenapina");db["asenapina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "007",
    "requiredFieldCount": 33,
    "approvedSha256": "ce8db330a22d993d0f20ecd247514972db328ff0f8a9db4a8978761cb5aea92a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Asenapina sublingual",
    "class": "Antipsicótico de segunda geração",
    "pharmacologicClass": "Antagonista dopaminérgico e serotoninérgico multirreceptor",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos sublinguais 2,5 mg, 5 mg e 10 mg; não intercambiar com adesivo transdérmico.",
    "presentations": "Comprimidos sublinguais 2,5 mg, 5 mg e 10 mg; não intercambiar com adesivo transdérmico.",
    "mechanism": "Antagonista dopaminérgico e serotoninérgico multirreceptor. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Biodisponibilidade SL ~35%, mas <2% se engolida; Tmax 0,5-1,5 h; metabolismo UGT1A4/CYP1A2; meia-vida ~24 h.",
    "indications": "Esquizofrenia em adultos; episódios maníacos/mistos do bipolar I em adultos e, conforme produto, pacientes pediátricos 10-17 anos.",
    "dose": "Esquizofrenia adulta: 5 mg SL 2x/dia; pode usar 10 mg 2x/dia conforme resposta. Mania bipolar adulta: 5-10 mg SL 2x/dia; máximo 10 mg 2x/dia.",
    "pediatricDose": "Bipolar I, 10-17 anos: iniciar 2,5 mg SL 2x/dia; titular a 5 mg e até 10 mg 2x/dia com intervalos mínimos da bula. Outras indicações pediátricas não estabelecidas. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste renal específico.",
    "hepaticDose": "Contraindicada em insuficiência hepática grave Child-Pugh C; sem ajuste na leve/moderada.",
    "commonAdverseEffects": "Sonolência, tontura, acatisia, sintomas extrapiramidais, aumento de peso e hipoestesia oral.",
    "dangerousAdverseEffects": "Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, leucopenia, convulsões e anafilaxia/angioedema.",
    "adverseEffects": "Sonolência, tontura, acatisia, sintomas extrapiramidais, aumento de peso e hipoestesia oral. Graves: Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, leucopenia, convulsões e anafilaxia/angioedema.",
    "contraindications": "Insuficiência hepática grave; hipersensibilidade.",
    "interactions": "CYP1A2/UGT; fluvoxamina pode elevar exposição; depressores SNC e anti-hipertensivos aumentam efeitos.",
    "monitoring": "Sintomas, peso, glicemia/lipídios, PA, EPS/acatisia, discinesia, hemograma se risco e reações orais.",
    "administration": "Colocar sob a língua e deixar dissolver; não mastigar/engolir; não comer ou beber por 10 min.",
    "preparation": "Manusear com mãos secas e retirar do blister imediatamente antes do uso.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Dados insuficientes; risco neonatal de EPS/abstinência no terceiro trimestre.",
    "lactation": "Presença no leite humano desconhecida; decidir entre tratamento e amamentação.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Mortalidade em psicose por demência, SNM, discinesia tardia, hiperglicemia, hipotensão, leucopenia, convulsões e anafilaxia/angioedema. Dose e via bloqueadas sem indicação, idade, função hepática e confirmação de comprimido sublingual versus adesivo.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=SAPHRIS",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/022117s020s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=SAPHRIS"
  },
  "es": {
    "name": "Asenapina sublingual",
    "class": "Antipsicótico de segunda generación",
    "pharmacologicClass": "Antagonista dopaminérgico y serotoninérgico multirreceptor",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos sublinguales 2,5 mg, 5 mg y 10 mg; no intercambiar con parche transdérmico.",
    "presentations": "Comprimidos sublinguales 2,5 mg, 5 mg y 10 mg; no intercambiar con parche transdérmico.",
    "mechanism": "Antagonista dopaminérgico y serotoninérgico multirreceptor. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Biodisponibilidad SL ~35%, pero <2% si se traga; Tmax 0,5-1,5 h; metabolismo UGT1A4/CYP1A2; semivida ~24 h.",
    "indications": "Esquizofrenia en adultos; episodios maníacos/mixtos de bipolar I en adultos y, según producto, pacientes pediátricos 10-17 años.",
    "dose": "Esquizofrenia adulta: 5 mg SL 2 veces/día; puede usarse 10 mg 2 veces/día según respuesta. Manía bipolar adulta: 5-10 mg SL 2 veces/día; máximo 10 mg 2 veces/día.",
    "pediatricDose": "Bipolar I, 10-17 años: iniciar 2,5 mg SL 2 veces/día; titular a 5 mg y hasta 10 mg 2 veces/día con intervalos mínimos de ficha. Otras indicaciones pediátricas no establecidas. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste renal específico.",
    "hepaticDose": "Contraindicada en insuficiencia hepática grave Child-Pugh C; sin ajuste en leve/moderada.",
    "commonAdverseEffects": "Somnolencia, mareo, acatisia, síntomas extrapiramidales, aumento de peso e hipoestesia oral.",
    "dangerousAdverseEffects": "Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, leucopenia, convulsiones y anafilaxia/angioedema.",
    "adverseEffects": "Somnolencia, mareo, acatisia, síntomas extrapiramidales, aumento de peso e hipoestesia oral. Graves: Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, leucopenia, convulsiones y anafilaxia/angioedema.",
    "contraindications": "Insuficiencia hepática grave; hipersensibilidad.",
    "interactions": "CYP1A2/UGT; fluvoxamina puede aumentar exposición; depresores SNC y antihipertensivos aumentan efectos.",
    "monitoring": "Síntomas, peso, glucemia/lípidos, PA, EPS/acatisia, discinesia, hemograma si riesgo y reacciones orales.",
    "administration": "Colocar bajo la lengua y dejar disolver; no masticar/tragar; no comer ni beber durante 10 min.",
    "preparation": "Manipular con manos secas y retirar del blíster justo antes del uso.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Datos insuficientes; riesgo neonatal de EPS/abstinencia en tercer trimestre.",
    "lactation": "Presencia en leche humana desconocida; decidir entre tratamiento y lactancia.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Mortalidad en psicosis por demencia, SNM, discinesia tardía, hiperglucemia, hipotensión, leucopenia, convulsiones y anafilaxia/angioedema. Dose e via bloqueadas sem indicação, idade, função hepática e confirmação de comprimido sublingual versus adesivo.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=SAPHRIS",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/022117s020s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=SAPHRIS"
  }
};})();
/* GOLD33_SELECTIVE:asenapina:END */
/* GOLD33_SELECTIVE:brexpiprazol:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["brexpiprazol"])throw new Error("GOLD33_MISSING_CANONICAL:brexpiprazol");db["brexpiprazol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "011",
    "requiredFieldCount": 33,
    "approvedSha256": "7b76ae47c1977e8ef5a9181eab9814d1b9fae210d78f43b2fc0fe9534c35db7d",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Brexpiprazol",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Agonista parcial D2/5-HT1A e antagonista 5-HT2A",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos 0,25; 0,5; 1; 2; 3 e 4 mg.",
    "presentations": "Comprimidos 0,25; 0,5; 1; 2; 3 e 4 mg.",
    "mechanism": "Agonista parcial D2/5-HT1A e antagonista 5-HT2A. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Tmax ~4 h; ligação >99%; metabolismo CYP3A4/2D6; meia-vida ~91 h.",
    "indications": "Esquizofrenia; adjuvante no transtorno depressivo maior; agitação associada à demência por Alzheimer conforme rótulo. Não trata psicose relacionada à demência sem indicação aprovada.",
    "dose": "Dose depende da indicação: TDM iniciar 0,5-1 mg/dia, alvo 2 mg, máximo 3 mg; esquizofrenia iniciar 1 mg/dia, alvo 2-4 mg, máximo 4 mg; agitação Alzheimer 0,5 mg/dia com titulação, alvo 2 mg, máximo 3 mg.",
    "pediatricDose": "Esquizofrenia em adolescentes conforme jurisdição/rótulo; demais usos pediátricos não estabelecidos. AUTOMATABLE=NO.",
    "renalDose": "ClCr <60: máximo 2 mg/dia em TDM/agitação e 3 mg/dia em esquizofrenia.",
    "hepaticDose": "Child-Pugh ≥7: mesmos máximos reduzidos.",
    "commonAdverseEffects": "Acatisia, ganho de peso, cefaleia, sonolência, náusea e insônia.",
    "dangerousAdverseEffects": "Mortalidade/AVC em idosos com psicose por demência, síndrome neuroléptica maligna, discinesia tardia, hiperglicemia e suicidabilidade em jovens.",
    "adverseEffects": "Acatisia, ganho de peso, cefaleia, sonolência, náusea e insônia. Graves: Mortalidade/AVC em idosos com psicose por demência, síndrome neuroléptica maligna, discinesia tardia, hiperglicemia e suicidabilidade em jovens.",
    "contraindications": "Hipersensibilidade; contraindicações adicionais dependem do contexto.",
    "interactions": "Inibidores CYP2D6/3A4 exigem redução; indutores CYP3A4 exigem ajuste/evitação; álcool e depressores aumentam sedação.",
    "monitoring": "Sintomas/ideação suicida, acatisia, peso/IMC, glicose, lipídios, PA, movimentos anormais, quedas e hemograma se risco.",
    "administration": "VO uma vez/dia, com ou sem alimento; titular conforme indicação.",
    "preparation": "Comprimido pronto.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Exposição no 3º trimestre pode causar sintomas extrapiramidais/abstinência neonatal.",
    "lactation": "Dados insuficientes; pode reduzir prolactina/lactação. Individualizar.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Mortalidade/AVC em idosos com psicose por demência, síndrome neuroléptica maligna, discinesia tardia, hiperglicemia e suicidabilidade em jovens. Indicação e titulação bloqueadas sem diagnóstico, idade, rim/fígado, CYP2D6/3A4, risco suicida/metabólico e demência.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=REXULTI",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/205422s009lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=REXULTI"
  },
  "es": {
    "name": "Brexpiprazol",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Agonista parcial D2/5-HT1A y antagonista 5-HT2A",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos 0,25; 0,5; 1; 2; 3 y 4 mg.",
    "presentations": "Comprimidos 0,25; 0,5; 1; 2; 3 y 4 mg.",
    "mechanism": "Agonista parcial D2/5-HT1A y antagonista 5-HT2A. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Tmax ~4 h; unión >99%; metabolismo CYP3A4/2D6; semivida ~91 h.",
    "indications": "Esquizofrenia; adyuvante en trastorno depresivo mayor; agitación asociada a demencia de Alzheimer según ficha. No trata psicosis por demencia sin indicación aprobada.",
    "dose": "Dosis según indicación: TDM iniciar 0,5-1 mg/día, objetivo 2 mg, máximo 3 mg; esquizofrenia iniciar 1 mg/día, objetivo 2-4 mg, máximo 4 mg; agitación Alzheimer 0,5 mg/día con titulación, objetivo 2 mg, máximo 3 mg.",
    "pediatricDose": "Esquizofrenia en adolescentes según jurisdicción/ficha; otros usos pediátricos no establecidos. AUTOMATABLE=NO.",
    "renalDose": "ClCr <60: máximo 2 mg/día en TDM/agitación y 3 mg/día en esquizofrenia.",
    "hepaticDose": "Child-Pugh ≥7: mismos máximos reducidos.",
    "commonAdverseEffects": "Acatisia, aumento de peso, cefalea, somnolencia, náusea e insomnio.",
    "dangerousAdverseEffects": "Mortalidad/ACV en ancianos con psicosis por demencia, síndrome neuroléptico maligno, discinesia tardía, hiperglucemia y suicidabilidad en jóvenes.",
    "adverseEffects": "Acatisia, aumento de peso, cefalea, somnolencia, náusea e insomnio. Graves: Mortalidad/ACV en ancianos con psicosis por demencia, síndrome neuroléptico maligno, discinesia tardía, hiperglucemia y suicidabilidad en jóvenes.",
    "contraindications": "Hipersensibilidad; contraindicaciones adicionales dependen del contexto.",
    "interactions": "Inhibidores CYP2D6/3A4 exigen reducción; inductores CYP3A4 requieren ajuste/evitación; alcohol y depresores aumentan sedación.",
    "monitoring": "Síntomas/ideación suicida, acatisia, peso/IMC, glucosa, lípidos, PA, movimientos anormales, caídas y hemograma si riesgo.",
    "administration": "VO una vez/día, con o sin alimentos; titular según indicación.",
    "preparation": "Comprimido listo.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Exposición en tercer trimestre puede causar síntomas extrapiramidales/abstinencia neonatal.",
    "lactation": "Datos insuficientes; puede reducir prolactina/lactancia. Individualizar.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Mortalidad/ACV en ancianos con psicosis por demencia, síndrome neuroléptico maligno, discinesia tardía, hiperglucemia y suicidabilidad en jóvenes. Indicação e titulação bloqueadas sem diagnóstico, idade, rim/fígado, CYP2D6/3A4, risco suicida/metabólico e demência.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=REXULTI",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/205422s009lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=REXULTI"
  }
};})();
/* GOLD33_SELECTIVE:brexpiprazol:END */
/* GOLD33_SELECTIVE:cariprazina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["cariprazina"])throw new Error("GOLD33_MISSING_CANONICAL:cariprazina");db["cariprazina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "014",
    "requiredFieldCount": 33,
    "approvedSha256": "1b0e41cf6b530a2ba21cb52fc7aac4a33e9139cf286fd47a605ff6656ee8c7db",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Cariprazina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Agonista parcial D3/D2 e 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Cápsulas 1,5; 3; 4,5 e 6 mg.",
    "presentations": "Cápsulas 1,5; 3; 4,5 e 6 mg.",
    "mechanism": "Agonista parcial D3/D2 e 5-HT1A; antagonista 5-HT2A. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "CYP3A4; metabólitos ativos DCAR/DDCAR; meia-vida efetiva longa, especialmente DDCAR (~1-3 semanas).",
    "indications": "Esquizofrenia, episódios maníacos/mistos ou depressivos do bipolar I e adjuvante no transtorno depressivo maior em adultos.",
    "dose": "Esquizofrenia/manía: 1,5 mg/dia, aumentar a 3 mg no dia 2; faixa 1,5-6 mg/dia. Depressão bipolar/TDM adjuvante: 1,5 mg/dia, máximo 3 mg/dia.",
    "pediatricDose": "Segurança/eficácia não estabelecidas <18 anos. AUTOMATABLE=NO.",
    "renalDose": "CrCl ≥30: sem ajuste; CrCl <30: não recomendada.",
    "hepaticDose": "Child-Pugh A/B: sem ajuste; C: não recomendada.",
    "commonAdverseEffects": "Acatisia, parkinsonismo, insônia, náusea e inquietação.",
    "dangerousAdverseEffects": "NMS, discinesia tardia, suicidabilidade, hiperglicemia, leucopenia e convulsões.",
    "adverseEffects": "Acatisia, parkinsonismo, insônia, náusea e inquietação. Graves: NMS, discinesia tardia, suicidabilidade, hiperglicemia, leucopenia e convulsões.",
    "contraindications": "Hipersensibilidade; não aprovada para psicose associada à demência.",
    "interactions": "Inibidores fortes/moderados CYP3A4 exigem redução; indutores CYP3A4 não recomendados; depressores SNC e dopaminérgicos exigem revisão.",
    "monitoring": "Acatisia/EPS, humor/suicidabilidade, peso, glicose/lípidos, PA, movimentos tardios, NMS e CBC se risco.",
    "administration": "VO 1x/dia com ou sem alimento; mudanças de dose demoram semanas para refletir plenamente.",
    "preparation": "Cápsula pronta; não fracionar.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Pode causar sintomas neonatais no terceiro trimestre; usar apenas se benefício justificar.",
    "lactation": "Dados insuficientes; considerar alternativa.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "NMS, discinesia tardia, suicidabilidade, hiperglicemia, leucopenia e convulsões. Dose bloqueada sem diagnóstico, suicidabilidade, CrCl/Child-Pugh, CYP3A4 e avaliação metabólica/EPS.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=VRAYLAR",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/204370s010lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=VRAYLAR"
  },
  "es": {
    "name": "Cariprazina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Agonista parcial D3/D2 y 5-HT1A; antagonista 5-HT2A",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Cápsulas 1,5; 3; 4,5 y 6 mg.",
    "presentations": "Cápsulas 1,5; 3; 4,5 y 6 mg.",
    "mechanism": "Agonista parcial D3/D2 y 5-HT1A; antagonista 5-HT2A. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "CYP3A4; metabolitos activos DCAR/DDCAR; semivida efectiva larga, especialmente DDCAR (~1-3 semanas).",
    "indications": "Esquizofrenia, episodios maníacos/mixtos o depresivos de bipolar I y adyuvante en depresión mayor en adultos.",
    "dose": "Esquizofrenia/manía: 1,5 mg/día, aumentar a 3 mg el día 2; rango 1,5-6 mg/día. Depresión bipolar/TDM adyuvante: 1,5 mg/día, máximo 3 mg/día.",
    "pediatricDose": "Seguridad/eficacia no establecidas <18 años. AUTOMATABLE=NO.",
    "renalDose": "CrCl ≥30: sin ajuste; CrCl <30: no recomendada.",
    "hepaticDose": "Child-Pugh A/B: sin ajuste; C: no recomendada.",
    "commonAdverseEffects": "Acatisia, parkinsonismo, insomnio, náusea e inquietud.",
    "dangerousAdverseEffects": "SNM, discinesia tardía, suicidabilidad, hiperglucemia, leucopenia y convulsiones.",
    "adverseEffects": "Acatisia, parkinsonismo, insomnio, náusea e inquietud. Graves: SNM, discinesia tardía, suicidabilidad, hiperglucemia, leucopenia y convulsiones.",
    "contraindications": "Hipersensibilidad; no aprobada para psicosis asociada a demencia.",
    "interactions": "Inhibidores fuertes/moderados CYP3A4 requieren reducción; inductores CYP3A4 no recomendados; depresores SNC y dopaminérgicos requieren revisión.",
    "monitoring": "Acatisia/EPS, ánimo/suicidabilidad, peso, glucosa/lípidos, PA, movimientos tardíos, SNM y hemograma si riesgo.",
    "administration": "VO 1 vez/día con o sin alimentos; cambios de dosis tardan semanas en reflejarse.",
    "preparation": "Cápsula lista; no fraccionar.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Puede causar síntomas neonatales en tercer trimestre; usar solo si beneficio justifica.",
    "lactation": "Datos insuficientes; considerar alternativa.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "SNM, discinesia tardía, suicidabilidad, hiperglucemia, leucopenia y convulsiones. Dose bloqueada sem diagnóstico, suicidabilidade, CrCl/Child-Pugh, CYP3A4 e avaliação metabólica/EPS.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=VRAYLAR",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/204370s010lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=VRAYLAR"
  }
};})();
/* GOLD33_SELECTIVE:cariprazina:END */
/* GOLD33_SELECTIVE:clorpromazina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["clorpromazina"])throw new Error("GOLD33_MISSING_CANONICAL:clorpromazina");db["clorpromazina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "021",
    "requiredFieldCount": 33,
    "approvedSha256": "34cfc05136412956523762939213a67b7f790f954e78d1ece1868008562d515a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Clorpromazina",
    "class": "Antipsicótico fenotiazínico de 1ª geração",
    "pharmacologicClass": "Antagonismo dopaminérgico D2 e múltiplos receptores",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos, concentrado oral e injetável conforme produto.",
    "presentations": "Comprimidos, concentrado oral e injetável conforme produto.",
    "mechanism": "Antagonismo dopaminérgico D2 e múltiplos receptores. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático extenso; meia-vida e metabólitos prolongados.",
    "indications": "Psicoses, mania, náusea/vômito, soluço intratável e outras indicações rotuladas.",
    "dose": "Psicose adulta: iniciar 25–75 mg/dia divididos e titular; hospitalizados podem exigir doses maiores. Dose depende fortemente da indicação e via.",
    "pediatricDose": "Psicose 6 meses–12 anos: 0,55 mg/kg por dose a cada 4–6 h conforme rótulo; limites por idade/peso. AUTOMATABLE=NO.",
    "renalDose": "Cautela; hipotensão e metabólitos.",
    "hepaticDose": "Cautela e redução em hepatopatia.",
    "commonAdverseEffects": "Sedação, hipotensão, boca seca, constipação e sintomas extrapiramidais.",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna, QT/torsades, discinesia tardia, agranulocitose, lesão hepática e retinopatia.",
    "adverseEffects": "Sedação, hipotensão, boca seca, constipação e sintomas extrapiramidais. Graves: Síndrome neuroléptica maligna, QT/torsades, discinesia tardia, agranulocitose, lesão hepática e retinopatia.",
    "contraindications": "Coma/depressão grave SNC, grande carga depressora e hipersensibilidade a fenotiazinas.",
    "interactions": "QT, depressores SNC, anticolinérgicos, anti-hipertensivos, lítio e fármacos dopaminérgicos.",
    "monitoring": "Sintomas, PA/ortostatismo, ECG, AIMS/EPS, peso/metabolismo, hemograma, fígado e prolactina.",
    "administration": "VO/IM; IV excepcional, diluída e com monitorização. Levantar lentamente.",
    "preparation": "Confirmar concentração; IM profunda.",
    "infusionProtocol": "IV somente conforme rótulo/protocolo, lentamente e com PA.",
    "pregnancy": "Pode causar sintomas neonatais; usar se benefício justificar.",
    "lactation": "Passa ao leite; risco de sedação/EPS.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Síndrome neuroléptica maligna, QT/torsades, discinesia tardia, agranulocitose, lesão hepática e retinopatia. Dose/via bloqueadas sem indicação, idade/peso, ECG/QT, PA, fígado, hemograma e revisão de sedativos/anticolinérgicos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpromazine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682040.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpromazine"
  },
  "es": {
    "name": "Clorpromazina",
    "class": "Antipsicótico fenotiazínico de 1ª generación",
    "pharmacologicClass": "Antagonismo dopaminérgico D2 y múltiples receptores",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos, concentrado oral e inyectable según producto.",
    "presentations": "Comprimidos, concentrado oral e inyectable según producto.",
    "mechanism": "Antagonismo dopaminérgico D2 y múltiples receptores. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático extenso; semivida y metabolitos prolongados.",
    "indications": "Psicosis, manía, náusea/vómito, hipo intratable y otras indicaciones autorizadas.",
    "dose": "Psicosis adulta: iniciar 25–75 mg/día divididos y titular; hospitalizados pueden requerir dosis mayores. Dosis depende de indicación y vía.",
    "pediatricDose": "Psicosis 6 meses–12 años: 0,55 mg/kg por dosis cada 4–6 h según ficha; límites por edad/peso. AUTOMATABLE=NO.",
    "renalDose": "Precaución; hipotensión y metabolitos.",
    "hepaticDose": "Precaución y reducción en hepatopatía.",
    "commonAdverseEffects": "Sedación, hipotensión, boca seca, estreñimiento y síntomas extrapiramidales.",
    "dangerousAdverseEffects": "Síndrome neuroléptico maligno, QT/torsades, discinesia tardía, agranulocitosis, lesión hepática y retinopatía.",
    "adverseEffects": "Sedación, hipotensión, boca seca, estreñimiento y síntomas extrapiramidales. Graves: Síndrome neuroléptico maligno, QT/torsades, discinesia tardía, agranulocitosis, lesión hepática y retinopatía.",
    "contraindications": "Coma/depresión grave SNC, gran carga depresora e hipersensibilidad a fenotiazinas.",
    "interactions": "QT, depresores SNC, anticolinérgicos, antihipertensivos, litio y fármacos dopaminérgicos.",
    "monitoring": "Síntomas, PA/ortostatismo, ECG, AIMS/EPS, peso/metabolismo, hemograma, hígado y prolactina.",
    "administration": "VO/IM; IV excepcional, diluida y con monitorización. Levantarse lentamente.",
    "preparation": "Confirmar concentración; IM profunda.",
    "infusionProtocol": "IV solo según ficha/protocolo, lentamente y con PA.",
    "pregnancy": "Puede causar síntomas neonatales; usar si beneficio justifica.",
    "lactation": "Pasa a leche; riesgo de sedación/EPS.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Síndrome neuroléptico maligno, QT/torsades, discinesia tardía, agranulocitosis, lesión hepática y retinopatía. Dose/via bloqueadas sem indicação, idade/peso, ECG/QT, PA, fígado, hemograma e revisão de sedativos/anticolinérgicos.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpromazine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://medlineplus.gov/druginfo/meds/a682040.html"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=chlorpromazine"
  }
};})();
/* GOLD33_SELECTIVE:clorpromazina:END */
/* GOLD33_SELECTIVE:clozapina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["clozapina"])throw new Error("GOLD33_MISSING_CANONICAL:clozapina");db["clozapina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "021",
    "requiredFieldCount": 33,
    "approvedSha256": "34cfc05136412956523762939213a67b7f790f954e78d1ece1868008562d515a",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "mission10-owner-confirmed"
  },
  "pt": {
    "name": "Clozapina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antagonismo D2/5-HT2A e múltiplos receptores",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos, ODT e suspensão oral em várias forças.",
    "presentations": "Comprimidos, ODT e suspensão oral em várias forças.",
    "mechanism": "Antagonismo D2/5-HT2A e múltiplos receptores. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo CYP1A2/3A4/2D6; meia-vida ~12 h, variável.",
    "indications": "Esquizofrenia resistente e redução de comportamento suicida recorrente em esquizofrenia/esquizoafetivo.",
    "dose": "Iniciar 12,5 mg 1–2x/dia; aumentar 25–50 mg/dia se tolerado até 300–450 mg/dia ao fim de 2 semanas. Máximo 900 mg/dia; titulação lenta obrigatória.",
    "pediatricDose": "Não estabelecido. AUTOMATABLE=NO.",
    "renalDose": "Cautela e titulação lenta.",
    "hepaticDose": "Cautela; monitorar fígado.",
    "commonAdverseEffects": "Sedação, sialorreia, taquicardia, constipação e ganho de peso.",
    "dangerousAdverseEffects": "Neutropenia grave, miocardite/cardiomiopatia, convulsão, íleo fatal, hipotensão e síndrome neuroléptica maligna.",
    "adverseEffects": "Sedação, sialorreia, taquicardia, constipação e ganho de peso. Graves: Neutropenia grave, miocardite/cardiomiopatia, convulsão, íleo fatal, hipotensão e síndrome neuroléptica maligna.",
    "contraindications": "Hipersensibilidade; não iniciar com neutropenia grave sem justificativa especializada.",
    "interactions": "CYP1A2: tabaco/fluvoxamina/ciprofloxacino; depressores SNC, anticolinérgicos, hipotensores e mielotóxicos.",
    "monitoring": "ANC conforme programa, miocardite/troponina/CRP inicial, PA, peso/metabolismo, constipação/íleo, convulsões e níveis quando indicado.",
    "administration": "VO; se interrupção ≥2 dias, reiniciar 12,5 mg 1–2x/dia.",
    "preparation": "Agitar suspensão e medir; ODT com mãos secas.",
    "infusionProtocol": "Não aplicável.",
    "pregnancy": "Risco neonatal; decisão especializada.",
    "lactation": "Passa ao leite; geralmente não recomendada.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Neutropenia grave, miocardite/cardiomiopatia, convulsão, íleo fatal, hipotensão e síndrome neuroléptica maligna. Início/titulação bloqueados sem diagnóstico resistente, ANC, avaliação cardíaca, intestino, tabagismo/CYP1A2 e plano de monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clozapine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/clozapine-rems-program"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clozapine"
  },
  "es": {
    "name": "Clozapina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antagonismo D2/5-HT2A y múltiples receptores",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos, ODT y suspensión oral en varias concentraciones.",
    "presentations": "Comprimidos, ODT y suspensión oral en varias concentraciones.",
    "mechanism": "Antagonismo D2/5-HT2A y múltiples receptores. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo CYP1A2/3A4/2D6; semivida ~12 h, variable.",
    "indications": "Esquizofrenia resistente y reducción de conducta suicida recurrente en esquizofrenia/esquizoafectivo.",
    "dose": "Iniciar 12,5 mg 1–2 veces/día; aumentar 25–50 mg/día si tolera hasta 300–450 mg/día al final de 2 semanas. Máximo 900 mg/día; titulación lenta obligatoria.",
    "pediatricDose": "No establecido. AUTOMATABLE=NO.",
    "renalDose": "Precaución y titulación lenta.",
    "hepaticDose": "Precaución; controlar hígado.",
    "commonAdverseEffects": "Sedación, sialorrea, taquicardia, estreñimiento y aumento de peso.",
    "dangerousAdverseEffects": "Neutropenia grave, miocarditis/cardiomiopatía, convulsión, íleo fatal, hipotensión y síndrome neuroléptico maligno.",
    "adverseEffects": "Sedación, sialorrea, taquicardia, estreñimiento y aumento de peso. Graves: Neutropenia grave, miocarditis/cardiomiopatía, convulsión, íleo fatal, hipotensión y síndrome neuroléptico maligno.",
    "contraindications": "Hipersensibilidad; no iniciar con neutropenia grave sin justificación especializada.",
    "interactions": "CYP1A2: tabaco/fluvoxamina/ciprofloxacino; depresores SNC, anticolinérgicos, hipotensores y mielotóxicos.",
    "monitoring": "ANC según programa, miocarditis/troponina/PCR inicial, PA, peso/metabolismo, estreñimiento/íleo, convulsiones y niveles si indicado.",
    "administration": "VO; si interrupción ≥2 días, reiniciar 12,5 mg 1–2 veces/día.",
    "preparation": "Agitar suspensión y medir; ODT con manos secas.",
    "infusionProtocol": "No aplicable.",
    "pregnancy": "Riesgo neonatal; decisión especializada.",
    "lactation": "Pasa a leche; generalmente no recomendada.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Neutropenia grave, miocarditis/cardiomiopatía, convulsión, íleo fatal, hipotensión y síndrome neuroléptico maligno. Início/titulação bloqueados sem diagnóstico resistente, ANC, avaliação cardíaca, intestino, tabagismo/CYP1A2 e plano de monitorização.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clozapine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/clozapine-rems-program"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=clozapine"
  }
};})();
/* GOLD33_SELECTIVE:clozapina:END */
/* GOLD33_SELECTIVE:flufenazina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["flufenazina"])throw new Error("GOLD33_MISSING_CANONICAL:flufenazina");db["flufenazina"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "035",
    "requiredFieldCount": 33,
    "approvedSha256": "fd6321700fc0486f65ffd87ea383edb96dd6acd7fbededd8d8d99bf146822690",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "NAO_AUTORIZADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Flufenazina",
    "class": "Antipsicótico típico de alta potência",
    "pharmacologicClass": "Antagonista dopaminérgico D2",
    "commercialNames": "Não presumir marca regional; usar somente produto correspondente às fontes regulatórias citadas.",
    "presentation": "Comprimidos/elixir 1–10 mg e decanoato 25 mg/mL IM/SC conforme produto.",
    "presentations": "Comprimidos/elixir 1–10 mg e decanoato 25 mg/mL IM/SC conforme produto.",
    "mechanism": "Antagonista dopaminérgico D2. O efeito deve ser interpretado por indicação, formulação e exposição.",
    "pharmacodynamics": "Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.",
    "pharmacokinetics": "Metabolismo hepático, meia-vida longa no decanoato.",
    "indications": "Transtornos psicóticos; formulação decanoato para manutenção em pacientes selecionados.",
    "dose": "Oral: iniciar frequentemente 2,5–10 mg/dia divididos; decanoato: 12,5–25 mg IM/SC inicialmente, individualizar intervalo. Não converter automaticamente.",
    "pediatricDose": "Segurança/eficácia não estabelecidas <12 anos; dose especializada. AUTOMATABLE=NO.",
    "renalDose": "Sem ajuste fixo; cautela.",
    "hepaticDose": "Evitar em lesão hepática significativa; monitorar.",
    "commonAdverseEffects": "Parkinsonismo, acatisia, distonia, sedação, boca seca e hipotensão.",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em demência.",
    "adverseEffects": "Parkinsonismo, acatisia, distonia, sedação, boca seca e hipotensão. Graves: Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em demência.",
    "contraindications": "Coma/depressão grave do SNC, discrasia sanguínea, lesão hepática e hipersensibilidade a fenotiazinas.",
    "interactions": "Levodopa, sedativos/álcool/opioides, anticolinérgicos, anti-hipertensivos e fármacos QT.",
    "monitoring": "Sintomas psicóticos, AIMS/EPS, prolactina, peso/metabólico, PA, ECG se risco, hemograma/fígado.",
    "administration": "VO conforme produto; decanoato somente IM profunda ou SC conforme rótulo, nunca IV.",
    "preparation": "Confirmar sal/formulação; não converter oral-decanoato por regra fixa.",
    "infusionProtocol": "Decanoato em aplicação lenta; observar reação e técnica.",
    "pregnancy": "Usar somente se benefício justificar; risco neonatal no terceiro trimestre.",
    "lactation": "Pode causar sedação/EPS no lactente; avaliar alternativa.",
    "specialPopulations": "Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.",
    "patientEducation": "Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.",
    "clinicalPearls": "Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.",
    "guidelineRecommendations": "Conteúdo ancorado em bula regulatória primária; protocolo local e microbiologia podem restringir uso.",
    "safetyFlags": "CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.",
    "alerts": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em demência. Seleção/conversão bloqueadas sem formulação/sal, exposição oral prévia, diagnóstico, EPS/AIMS, QT, fígado/hemograma e risco de demência.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluphenazine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/071413s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluphenazine"
  },
  "es": {
    "name": "Flufenazina",
    "class": "Antipsicótico típico de alta potencia",
    "pharmacologicClass": "Antagonista dopaminérgico D2",
    "commercialNames": "No presumir marca regional; usar solo producto correspondiente a fuentes regulatorias citadas.",
    "presentation": "Comprimidos/elixir 1–10 mg y decanoato 25 mg/mL IM/SC según producto.",
    "presentations": "Comprimidos/elixir 1–10 mg y decanoato 25 mg/mL IM/SC según producto.",
    "mechanism": "Antagonista dopaminérgico D2. El efecto debe interpretarse por indicación, formulación y exposición.",
    "pharmacodynamics": "Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.",
    "pharmacokinetics": "Metabolismo hepático, semivida larga con decanoato.",
    "indications": "Trastornos psicóticos; formulación decanoato para mantenimiento en pacientes seleccionados.",
    "dose": "Oral: iniciar frecuentemente 2,5–10 mg/día divididos; decanoato: 12,5–25 mg IM/SC inicialmente, individualizar intervalo. No convertir automáticamente.",
    "pediatricDose": "Seguridad/eficacia no establecidas <12 años; dosis especializada. AUTOMATABLE=NO.",
    "renalDose": "Sin ajuste fijo; precaución.",
    "hepaticDose": "Evitar en lesión hepática significativa; vigilar.",
    "commonAdverseEffects": "Parkinsonismo, acatisia, distonía, sedación, boca seca e hipotensión.",
    "dangerousAdverseEffects": "Síndrome neuroléptico maligno, discinesia tardía, QT/arritmia, agranulocitosis y mayor mortalidad en demencia.",
    "adverseEffects": "Parkinsonismo, acatisia, distonía, sedación, boca seca e hipotensión. Graves: Síndrome neuroléptico maligno, discinesia tardía, QT/arritmia, agranulocitosis y mayor mortalidad en demencia.",
    "contraindications": "Coma/depresión grave del SNC, discrasia sanguínea, lesión hepática e hipersensibilidad a fenotiazinas.",
    "interactions": "Levodopa, sedantes/alcohol/opioides, anticolinérgicos, antihipertensivos y fármacos QT.",
    "monitoring": "Síntomas psicóticos, AIMS/EPS, prolactina, peso/metabólico, PA, ECG si riesgo, hemograma/hígado.",
    "administration": "VO según producto; decanoato solo IM profunda o SC según ficha, nunca IV.",
    "preparation": "Confirmar sal/formulación; no convertir oral-decanoato por regla fija.",
    "infusionProtocol": "Decanoato en aplicación lenta; vigilar reacción y técnica.",
    "pregnancy": "Usar solo si beneficio justifica; riesgo neonatal en tercer trimestre.",
    "lactation": "Puede causar sedación/EPS en lactante; evaluar alternativa.",
    "specialPopulations": "Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.",
    "patientEducation": "Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.",
    "clinicalPearls": "Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.",
    "guidelineRecommendations": "Contenido basado en ficha regulatoria primaria; protocolo local y microbiología pueden restringir uso.",
    "safetyFlags": "CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.",
    "alerts": "Síndrome neuroléptico maligno, discinesia tardía, QT/arritmia, agranulocitosis y mayor mortalidad en demencia. Seleção/conversão bloqueadas sem formulação/sal, exposição oral prévia, diagnóstico, EPS/AIMS, QT, fígado/hemograma e risco de demência.",
    "references": [
      "1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluphenazine",
      "2. Fonte regulatória primária consultada em 2026-09-18: https://www.accessdata.fda.gov/drugsatfda_docs/label/2010/071413s021lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=fluphenazine"
  }
};})();
/* GOLD33_SELECTIVE:flufenazina:END */
/* GOLD33_SELECTIVE:haloperidol:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB;if(!db||!db["haloperidol"])throw new Error("GOLD33_MISSING_CANONICAL:haloperidol");db["haloperidol"].mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "040",
    "requiredFieldCount": 33,
    "approvedSha256": "461b5b71a16a2584ab55b1880ab4907b74bc2aba957e3419c18eab849cdac855",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed",
    "residualClinicalReview": {
      "reviewer": "Dra Eugenia Marques",
      "reviewDate": "21-09-2026",
      "reviewResult": "APROVADO INTEGRALMENTE",
      "reviewArtifact": "docs/clinical-updates/gold33-evidence/MEDCASES_GOLD33_FINAL_RESIDUAL_HOMOLOGADO_CLINICAMENTE.zip",
      "packageSha256": "a8b8f1314d073e33875ab9b216f9ba8f6741b08958139e080755a31e07c5dda3",
      "approvedPatchSha256": "69c50abbaf5b2d827553495b095cd9104c86eb593870194f6dde43580e44db02",
      "reviewPdfSha256": "e192815fc1edfb99c45188585ce146bf2088b14899832e620322995d8bb062ad",
      "fields": [
        "guidelineRecommendations"
      ],
      "scope": "residual fields only; no calculation authority change"
    }
  },
  "pt": {
    "name": "Haloperidol — solução oral argentina HALOPIDOL 2 mg/mL (modelo; não define registro BR).",
    "class": "Antipsicótico típico de primeira geração; derivado da butirofenona; ATC N05AD01.",
    "pharmacologicClass": "Antagonista central potente dos receptores dopaminérgicos D2.",
    "commercialNames": "HALOPIDOL (marca registrada na Argentina para o produto documentado); nome comercial no Brasil NÃO VERIFICADO.",
    "presentation": "Solução oral em frasco gotejador; apenas via oral neste dossiê. Comprimidos e injetáveis requerem fichas independentes.",
    "presentations": "ARGENTINA, HALOPIDOL: solução oral 2 mg/mL; frascos de 10, 15, 20, 30, 50 e 100 mL descritos no registro de 2024. A concentração e o dispositivo devem ser conferidos na embalagem dispensada; não inferir disponibilidade comercial em tempo real.",
    "mechanism": "Bloqueio central de receptores D2; a inibição dopaminérgica mesolímbica está relacionada à ação antipsicótica.",
    "pharmacodynamics": "Bloqueio nigroestriatal associado a efeitos extrapiramidais (distonia, acatisia, parkinsonismo); antagonismo dopaminérgico hipofisário eleva prolactina. Baixa atividade alfa-1 e ausência de atividade anti-histamínica/anticolinérgica relevante nas doses recomendadas, segundo a bula AR.",
    "pharmacokinetics": "VO: biodisponibilidade média 60–70%; pico plasmático 2–6 h; estado estacionário aproximadamente em 1 semana; ligação a proteínas 88–92%; metabolismo hepático (glucuronidação, redução cetônica e CYP3A4/CYP2D6); meia-vida terminal média oral 24 h, com ampla variabilidade.",
    "indications": "ARGENTINA, solução oral: adultos — esquizofrenia/transtorno esquizoafetivo; delirium após falha de medidas não farmacológicas; mania bipolar I moderada-grave; agitação psicomotora associada a psicose/mania; tics/Tourette refratários; coreia de Huntington quando alternativas falham; agressão/psicose na demência em condições restritas da bula. Pediatria: esquizofrenia 13–17 anos após falha/intolerância; agressão grave associada a autismo/transtornos globais 6–17 anos; tics/Tourette grave 10–17 anos após outras intervenções. A indicação em demência requer avaliação excepcional e tem alerta de mortalidade; não é indicação aprovada na bula EUA de comprimidos.",
    "dose": "SOMENTE AR, solução oral VO, adultos: esquizofrenia/esquizoafetivo 2–10 mg/dia em 1–2 tomadas; bula limita a 20 mg/dia nessa indicação. Delirium após falha não farmacológica 1–10 mg/dia em 1–3 tomadas, máximo 10 mg/dia. Mania bipolar I 2–10 mg/dia, máximo 15 mg/dia. Agitação associada a psicose/mania 5–10 mg VO e, se necessário, repetir após 12 h, máximo 20 mg/dia. Tourette/tics 0,5–5 mg/dia; Huntington 2–10 mg/dia. TITULAÇÃO, LIMITES E ESCOLHA DE INDICAÇÃO DEVEM SER REVISTOS PELO MÉDICO; não usar teto universal de 100 mg/dia da bula de comprimidos EUA.",
    "pediatricDose": "ARGENTINA, solução oral 2 mg/mL, VO, regimes POR INDICAÇÃO (não mg/kg): esquizofrenia 13–17 anos, após outras opções: 0,5–3 mg/dia em 2–3 tomadas; acima de 3 mg/dia requer reavaliação benefício-risco; máximo recomendado 5 mg/dia. Agressão grave associada a autismo/transtornos globais: 6–11 anos, 0,5–3 mg/dia; 12–17 anos, 0,5–5 mg/dia, em 2–3 tomadas; reavaliar em 6 semanas. Tics/Tourette grave 10–17 anos: 0,5–3 mg/dia em 2–3 tomadas; reavaliar a cada 6–12 meses. Idades inferiores às indicações: eficácia/segurança não estabelecidas. NÃO transplantar faixa EUA 3–12 anos e regimes mg/kg/dia para a apresentação AR. Não autorizar calculadora pediátrica sem revisão individual.",
    "renalDose": "AR: influência da insuficiência renal não avaliada formalmente; a bula não recomenda ajuste rotineiro, mas orienta cautela. Insuficiência grave pode exigir menor dose inicial e titulação mais lenta. NÃO existe nesta fonte tabela validada por eGFR/ClCr ou dose para diálise.",
    "hepaticDose": "AR, solução oral: metabolismo hepático extenso; bula recomenda reduzir a dose inicial à metade e titular com incrementos menores e intervalos maiores. Não há algoritmo Child-Pugh validado nesta fonte.",
    "commonAdverseEffects": "Frequências dos estudos agrupados citados na bula AR: transtorno extrapiramidal 34%; insônia 19%; agitação 15%; hipercinesia 13%; cefaleia 12%; tremor 8%; hipotensão ortostática 7%; distonia 6%; sonolência 5%. Frequências referem-se à população estudada, não a todas as apresentações isoladamente.",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; discinesia tardia potencialmente persistente; prolongamento QTc/torsades de pointes e morte súbita; arritmias ventriculares; convulsões; reações hematológicas graves e anafilaxia descritas nas reações da bula.",
    "adverseEffects": "Outras reações documentadas: hiperprolactinemia, galactorreia, amenorreia, ginecomastia, náuseas, constipação, boca seca, hipotensão, alterações de função hepática e reações cutâneas. Avaliar frequência caso a caso na tabela original.",
    "contraindications": "AR, solução oral: hipersensibilidade; coma/depressão do SNC; Parkinson; demência por corpos de Lewy; paralisia supranuclear progressiva; QTc prolongado/QT longo congênito; IAM recente; insuficiência cardíaca descompensada; antecedente de arritmia ventricular/torsades; hipocalemia não corrigida; associação com fármacos que prolongam QT. São contraindicações do produto AR, não automaticamente do rótulo EUA.",
    "interactions": "AR: contraindica associação com fármacos que prolongam QT (ex.: amiodarona, sotalol, citalopram, macrolídeos selecionados; verificar lista completa). Inibidores CYP3A4/2D6 podem aumentar exposição; indutores CYP3A4 (ex.: carbamazepina, rifampicina) podem reduzi-la. Lítio: relatos de síndrome encefalopática/neurotoxicidade, causalidade não estabelecida; monitorar. Álcool/depressores SNC potencializam sedação; antagonismo de levodopa.",
    "monitoring": "AR: ECG basal recomendado; avaliar necessidade de ECG ao longo do tratamento para todos os pacientes. Se QTc se prolongar, avaliar redução; se QTc >500 ms, bula orienta suspensão. Corrigir hipocalemia/hipomagnesemia antes de iniciar; eletrólitos basais e periódicos. Monitorar sintomas extrapiramidais/discinesia, sedação, pressão arterial e resposta clínica.",
    "administration": "Somente VO na formulação HALOPIDOL solução 2 mg/mL AR. Identificar o frasco/dispositivo antes de administrar. Segundo a bula desse produto, frasco gotero: 1 gota = 0,1 mg, 10 gotas = 1 mg, 20 gotas = 2 mg; limite de 2 mg por alíquota gotejada conforme tabela. NÃO transportar gotas/mL para outros frascos, países ou marcas; preferir dispositivo validado pelo produto.",
    "preparation": "Solução pronta para uso VO. O prospecto AR permite misturar somente com água para facilitar a administração; ingerir imediatamente após a mistura. Não há preparo injetável validado neste dossiê.",
    "infusionProtocol": "NÃO APLICÁVEL ao produto HALOPIDOL solução oral 2 mg/mL: nenhum protocolo IV/IM, diluição ou velocidade de infusão foi validado para esta ficha. Manter rotas parenterais bloqueadas no motor.",
    "pregnancy": "AR: preferível evitar uso durante a gestação como medida de precaução; exposição no 3º trimestre pode causar sintomas extrapiramidais/abstinência neonatal e requer observação do recém-nascido. Não equivale a contraindicação absoluta universal. Decisão individual pelo médico.",
    "lactation": "AR: haloperidol é excretado no leite; informação insuficiente sobre efeitos no lactente. Bula orienta decidir entre interromper amamentação ou tratamento conforme benefícios para criança e mãe. NÃO classificar como contraindicação absoluta com base apenas nesta bula.",
    "specialPopulations": "Idosos: em indicações exceto demência, iniciar com metade da menor dose adulta; máximo de referência 5 mg/dia na bula AR, com exceções somente após reavaliação individual. Psicoses associadas à demência: mortalidade aumentada; AR tem indicação muito restrita, EUA não aprova. Corpos de Lewy e Parkinson: contraindicações AR. CYP2D6 lento + inibidor CYP3A4 exige cautela.",
    "patientEducation": "Explicar sonolência e risco ao dirigir/operar máquinas; evitar álcool. Informar imediatamente febre com rigidez/confusão, palpitações/síncope ou movimentos involuntários. Se esquecer dose, tomar a próxima normalmente, sem dobrar. Não suspender abruptamente sem orientação.",
    "clinicalPearls": "Alto risco de confusão entre bulas: US comprimidos descreve psicoses pediátricas 3–12 anos e regimes mg/kg/dia, mas bula ANMAT solução AR orienta esquizofrenia 13–17 anos e doses fixas por indicação; não combinar regimes. Diferenciar máximo por indicação, formulação e jurisdição; nunca usar 100 mg/dia como teto universal.",
    "guidelineRecommendations": "OMS/mhGAP 2023: antipsicóticos orais, incluindo haloperidol, devem ser oferecidos a adultos com transtornos psicóticos (incluindo esquizofrenia), equilibrando eficácia, efeitos adversos e preferência individual; recomenda-se usar a menor dose eficaz. Esta recomendação é independente/internacional e NÃO valida concentração, dose ou registro do produto HALOPIDOL solução oral 2 mg/mL da Argentina; o regime local continua dependente da bula ANMAT já documentada no dossiê.",
    "safetyFlags": "ALTO RISCO: prolongamento QT/torsades; SNM; discinesia tardia; mortalidade elevada em idosos com demência; dose pediátrica específica por indicação/país; concentração e gotas dependem do produto. NÃO habilitar cálculo automático antes de homologação clínica e testes.",
    "alerts": "CANDIDATO NÃO APROVADO. Escopo: HALOPIDOL solução oral 2 mg/mL ARGENTINA; texto PT é tradução da bula AR, NÃO autorização Anvisa. Registro ANMAT de 2024 cancelou HALOPIDOL comprimido 20 mg; não importar apresentações históricas. Guidelines independentes e apresentação brasileira pendentes. Bloquear publicação e motor de dose até aprovação médica + testes.",
    "references": [
      "ANMAT AR, Disposición 7840/2021, prospecto HALOPIDOL solución oral 2 mg/ml; secciones Composición, Indicaciones, Propiedades farmacológicas, Posología, Contraindicaciones, Advertencias, Interacciones, Embarazo/Lactancia, Reacciones adversas. Aprobación 18-10-2021; consultado 17-09-2026. https://boletin.anmat.gob.ar/octubre_2021/Dispo_7840-21.pdf",
      "ANMAT AR, Disposición 1262/2024, Certificado REM 29.571, HALOPIDOL; registro solución oral 2 mg/ml y cancelación de comprimidos de 20 mg. Fecha 06-02-2024; consultado 17-09-2026. https://boletin.anmat.gob.ar/febrero_2024/Dispo_1262-24.pdf",
      "DailyMed US, haloperidol tablets, etiqueta Upsher-Smith revisada 05-08-2026, secciones Indicaciones, Precauciones, Uso pediátrico, Posología, Embarazo/Lactancia: SOLO COMPARACIÓN, NO FUENTE DE DOSIS AR. Consultado 17-09-2026. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=afb3ac3e-7459-42d3-b5ca-e0d6d27ced73",
      "UK eMC, HALDOL oral solution 2 mg/ml SmPC, actualización registrada 06-11-2023, §§4.1–4.8 y 5.1–5.2: CONTROL CRUZADO, NO AUTORIZACIÓN AR/BR. Consultado 17-09-2026. https://www.medicines.org.uk/emc/product/15252/smpc"
    ],
    "ref": "https://boletin.anmat.gob.ar/octubre_2021/Dispo_7840-21.pdf"
  },
  "es": {
    "name": "Haloperidol — solución oral argentina HALOPIDOL 2 mg/ml (modelo; no incluye registro BR).",
    "class": "Antipsicótico típico de primera generación; derivado de la butirofenona; ATC N05AD01.",
    "pharmacologicClass": "Antagonista central potente de los receptores dopaminérgicos D2.",
    "commercialNames": "HALOPIDOL (marca registrada en Argentina para el producto documentado); marca en Brasil NO VERIFICADA.",
    "presentation": "Solución oral en frasco gotero; sólo vía oral en este dossier. Comprimidos e inyectables requieren fichas independientes.",
    "presentations": "ARGENTINA, HALOPIDOL: solución oral 2 mg/ml; frascos de 10, 15, 20, 30, 50 y 100 ml descritos en el registro de 2024. Verificar concentración y dispositivo del envase dispensado; no inferir disponibilidad comercial en tiempo real.",
    "mechanism": "Bloqueo central de receptores D2; la inhibición dopaminérgica mesolímbica se relaciona con el efecto antipsicótico.",
    "pharmacodynamics": "Bloqueo nigroestriatal asociado a efectos extrapiramidales (distonía, acatisia, parkinsonismo); el antagonismo dopaminérgico hipofisario eleva la prolactina. Baja actividad alfa-1 y sin actividad antihistamínica/anticolinérgica relevante a dosis recomendadas, según prospecto AR.",
    "pharmacokinetics": "VO: biodisponibilidad media 60–70%; pico plasmático 2–6 h; estado estacionario aproximadamente en 1 semana; unión a proteínas 88–92%; metabolismo hepático (glucuronidación, reducción de cetonas y CYP3A4/CYP2D6); semivida terminal media oral 24 h, con amplia variabilidad.",
    "indications": "ARGENTINA, solución oral: adultos — esquizofrenia/trastorno esquizoafectivo; delirium tras fracaso de medidas no farmacológicas; manía bipolar I moderada-grave; agitación psicomotora asociada a psicosis/manía; tics/Tourette refractarios; corea de Huntington si fallan alternativas; agresión/psicosis en demencia bajo condiciones restrictivas del prospecto. Pediatría: esquizofrenia 13–17 años tras fracaso/intolerancia; agresión grave con autismo/trastornos generalizados 6–17 años; tics/Tourette grave 10–17 años tras otras intervenciones. La indicación en demencia exige evaluación excepcional y tiene alerta de mortalidad; no está aprobada en el etiquetado estadounidense de comprimidos.",
    "dose": "SOLO AR, solución oral VO, adultos: esquizofrenia/esquizoafectivo 2–10 mg/día en 1–2 tomas; prospecto limita a 20 mg/día para esta indicación. Delirium tras fracaso no farmacológico 1–10 mg/día en 1–3 tomas, máximo 10 mg/día. Manía bipolar I 2–10 mg/día, máximo 15 mg/día. Agitación con psicosis/manía 5–10 mg VO y, si se requiere, repetir a las 12 h, máximo 20 mg/día. Tourette/tics 0,5–5 mg/día; Huntington 2–10 mg/día. TITULACIÓN, LÍMITES Y ELECCIÓN DE INDICACIÓN REQUIEREN REVISIÓN MÉDICA; no aplicar techo universal de 100 mg/día del prospecto estadounidense de comprimidos.",
    "pediatricDose": "ARGENTINA, solución oral 2 mg/ml, VO, pautas POR INDICACIÓN (no mg/kg): esquizofrenia 13–17 años tras otras opciones: 0,5–3 mg/día en 2–3 tomas; >3 mg/día exige reevaluar beneficio-riesgo; máximo recomendado 5 mg/día. Agresión grave con autismo/trastornos generalizados: 6–11 años, 0,5–3 mg/día; 12–17 años, 0,5–5 mg/día, en 2–3 tomas; reevaluar a las 6 semanas. Tics/Tourette graves 10–17 años: 0,5–3 mg/día en 2–3 tomas; reevaluar cada 6–12 meses. Por debajo de edades indicadas, seguridad/eficacia no establecidas. NO trasladar el rango estadounidense 3–12 años ni regímenes mg/kg/día a la presentación AR. No habilitar calculadora pediátrica sin revisión individual.",
    "renalDose": "AR: influencia de la insuficiencia renal no evaluada formalmente; el prospecto no recomienda ajuste rutinario, pero aconseja precaución. Insuficiencia grave puede requerir menor dosis inicial y titulación más lenta. NO hay tabla validada por eGFR/ClCr ni dosis para diálisis en esta fuente.",
    "hepaticDose": "AR, solución oral: metabolismo hepático extenso; prospecto recomienda reducir la dosis inicial a la mitad y titular con incrementos menores e intervalos mayores. No hay algoritmo Child-Pugh validado en esta fuente.",
    "commonAdverseEffects": "Frecuencias de ensayos agrupados citados en prospecto AR: trastorno extrapiramidal 34%; insomnio 19%; agitación 15%; hipercinesia 13%; cefalea 12%; temblor 8%; hipotensión ortostática 7%; distonía 6%; somnolencia 5%. Frecuencias de la población estudiada, no específicas de todas las presentaciones por separado.",
    "dangerousAdverseEffects": "Síndrome neuroléptico maligno; discinesia tardía potencialmente persistente; prolongación QTc/torsades de pointes y muerte súbita; arritmias ventriculares; convulsiones; reacciones hematológicas graves y anafilaxia descritas en el prospecto.",
    "adverseEffects": "Otras reacciones documentadas: hiperprolactinemia, galactorrea, amenorrea, ginecomastia, náuseas, constipación, boca seca, hipotensión, alteraciones de función hepática y reacciones cutáneas. Evaluar frecuencia por evento en la tabla original.",
    "contraindications": "AR, solución oral: hipersensibilidad; coma/depresión SNC; Parkinson; demencia con cuerpos de Lewy; parálisis supranuclear progresiva; QTc prolongado/QT largo congénito; IAM reciente; insuficiencia cardíaca descompensada; antecedentes de arritmia ventricular/torsades; hipopotasemia no corregida; asociación con fármacos que prolongan QT. Contraindicaciones del producto AR, no automáticamente del etiquetado de EE. UU.",
    "interactions": "AR: contraindica asociar con fármacos que prolongan QT (p. ej., amiodarona, sotalol, citalopram, determinados macrólidos; comprobar lista completa). Inhibidores CYP3A4/2D6 pueden elevar exposición; inductores CYP3A4 (p. ej., carbamazepina, rifampicina) pueden reducirla. Litio: informes de síndrome encefalopático/neurotoxicidad, causalidad no establecida; vigilar. Alcohol/depresores SNC potencian sedación; antagonismo de levodopa.",
    "monitoring": "AR: ECG basal recomendado; evaluar necesidad de ECG durante el tratamiento en todos los pacientes. Si se prolonga QTc, valorar reducción; si QTc >500 ms, el prospecto indica suspensión. Corregir hipopotasemia/hipomagnesemia antes de iniciar; electrolitos basales y periódicos. Vigilar efectos extrapiramidales/discinesia, sedación, presión arterial y respuesta clínica.",
    "administration": "Sólo VO para HALOPIDOL solución 2 mg/ml AR. Identificar frasco/dispositivo antes de administrar. Según prospecto de este producto, frasco gotero: 1 gota = 0,1 mg, 10 gotas = 1 mg, 20 gotas = 2 mg; máximo 2 mg por alícuota de gotero según tabla. NO trasladar gotas/ml a otros frascos, países ni marcas; utilizar dispositivo validado del producto.",
    "preparation": "Solución lista para uso VO. El prospecto AR permite mezclar sólo con agua para facilitar la administración; ingerir inmediatamente tras la mezcla. No hay preparación inyectable validada en este dossier.",
    "infusionProtocol": "NO APLICA al producto HALOPIDOL solución oral 2 mg/ml: no se validó protocolo IV/IM, dilución ni velocidad de infusión para esta ficha. Mantener rutas parenterales bloqueadas en el motor.",
    "pregnancy": "AR: como precaución, preferible evitar uso durante embarazo; exposición en tercer trimestre puede causar síntomas extrapiramidales/abstinencia neonatal y requiere observar al recién nacido. No equivale a contraindicación absoluta universal. Decisión individual médica.",
    "lactation": "AR: haloperidol se excreta en leche; información insuficiente sobre efectos en lactante. Prospecto indica decidir entre suspender lactancia o tratamiento según beneficios para niño y madre. NO clasificar como contraindicación absoluta basándose sólo en este prospecto.",
    "specialPopulations": "Mayores: en indicaciones distintas de demencia, iniciar con mitad de la dosis adulta más baja; máximo de referencia 5 mg/día en AR, con excepciones sólo tras reevaluación individual. Psicosis asociada a demencia: mortalidad aumentada; AR tiene indicación muy restringida, EE. UU. no aprueba. Lewy y Parkinson: contraindicaciones AR. Metabolizador lento CYP2D6 + inhibidor CYP3A4 requiere cautela.",
    "patientEducation": "Explicar somnolencia y riesgo al conducir/operar máquinas; evitar alcohol. Consultar de inmediato por fiebre con rigidez/confusión, palpitaciones/síncope o movimientos involuntarios. Ante olvido, tomar próxima dosis habitual, no duplicar. No suspender bruscamente sin indicación.",
    "clinicalPearls": "Alto riesgo de confusión entre prospectos: comprimidos EE. UU. describen psicosis pediátrica 3–12 años y mg/kg/día, mientras ANMAT solución AR indica esquizofrenia 13–17 años y dosis fijas por indicación; no combinar. Diferenciar máximos por indicación, formulación y jurisdicción; nunca usar 100 mg/día como techo universal.",
    "guidelineRecommendations": "OMS/mhGAP 2023: los antipsicóticos orales, incluido haloperidol, deben ofrecerse a adultos con trastornos psicóticos (incluida esquizofrenia), equilibrando eficacia, efectos adversos y preferencia individual; se recomienda usar la dosis eficaz mínima. Esta recomendación es independiente/internacional y NO valida concentración, dosis ni registro del producto HALOPIDOL solución oral 2 mg/mL de Argentina; el régimen local sigue dependiendo del prospecto ANMAT ya documentado en el dossier.",
    "safetyFlags": "ALTO RIESGO: prolongación QT/torsades; SNM; discinesia tardía; mayor mortalidad en adultos mayores con demencia; dosis pediátrica específica por indicación/país; concentración y gotas dependen del producto. NO habilitar cálculo automático antes de homologación clínica y pruebas.",
    "alerts": "CANDIDATO NO APROBADO. Alcance: HALOPIDOL solución oral 2 mg/ml ARGENTINA; el texto PT traduce prospecto AR, NO autorización Anvisa. Registro ANMAT 2024 canceló HALOPIDOL comprimido 20 mg; no importar presentaciones históricas. Guías independientes y presentación brasileña pendientes. Bloquear publicación y motor de dosis hasta aprobación médica + pruebas.",
    "references": [
      "ANMAT AR, Disposición 7840/2021, prospecto HALOPIDOL solución oral 2 mg/ml; secciones Composición, Indicaciones, Propiedades farmacológicas, Posología, Contraindicaciones, Advertencias, Interacciones, Embarazo/Lactancia, Reacciones adversas. Aprobación 18-10-2021; consultado 17-09-2026. https://boletin.anmat.gob.ar/octubre_2021/Dispo_7840-21.pdf",
      "ANMAT AR, Disposición 1262/2024, Certificado REM 29.571, HALOPIDOL; registro solución oral 2 mg/ml y cancelación de comprimidos de 20 mg. Fecha 06-02-2024; consultado 17-09-2026. https://boletin.anmat.gob.ar/febrero_2024/Dispo_1262-24.pdf",
      "DailyMed US, haloperidol tablets, etiqueta Upsher-Smith revisada 05-08-2026, secciones Indicaciones, Precauciones, Uso pediátrico, Posología, Embarazo/Lactancia: SOLO COMPARACIÓN, NO FUENTE DE DOSIS AR. Consultado 17-09-2026. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=afb3ac3e-7459-42d3-b5ca-e0d6d27ced73",
      "UK eMC, HALDOL oral solution 2 mg/ml SmPC, actualización registrada 06-11-2023, §§4.1–4.8 y 5.1–5.2: CONTROL CRUZADO, NO AUTORIZACIÓN AR/BR. Consultado 17-09-2026. https://www.medicines.org.uk/emc/product/15252/smpc"
    ],
    "ref": "https://boletin.anmat.gob.ar/octubre_2021/Dispo_7840-21.pdf"
  }
};})();
/* GOLD33_SELECTIVE:haloperidol:END */
/* GOLD33_SELECTIVE:levomepromazina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="levomepromazina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:levomepromazina:"+matches.length);drug=matches[0];}else{drug=db&&db["levomepromazina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:levomepromazina");}drug.mcGoldClinicalV1={
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
    "name": "Levomepromazina",
    "class": "Antipsicótico fenotiazínico sedativo",
    "pharmacologicClass": "Antipsicótico fenotiazínico sedativo",
    "commercialNames": "br: Neozine; Levomepromazina Cristália; ar: Nozinan; Levomepromazina Northia",
    "presentation": "Comprimido 25 mg; Comprimido 100 mg; Gotas 40 mg/mL; Ampola 25 mg/mL",
    "presentations": "Comprimido 25 mg; Comprimido 100 mg; Gotas 40 mg/mL; Ampola 25 mg/mL",
    "mechanism": "Antagonista D2 com forte bloqueio H1, alfa-1, muscarínico e serotoninérgico; perfil muito sedativo e hipotensor.",
    "pharmacodynamics": "Antagonista D2 com forte bloqueio H1, alfa-1, muscarínico e serotoninérgico; perfil muito sedativo e hipotensor.",
    "pharmacokinetics": "Vida média aproximada: 15–30 horas.",
    "indications": "Agitação psicomotora; Psicose aguda com insônia/agitação; Esquizofrenia; Mania aguda; Insônia grave em contexto psiquiátrico selecionado; Náuseas e vômitos refratários; Sedação e controle de sintomas em cuidados paliativos",
    "dose": "adulto: Agitação/psicose: iniciar 25–50 mg VO à noite ou 2–3x/dia, conforme sedação e resposta.; paliativo: Cuidados paliativos/náuseas/agitação: doses baixas individualizadas conforme protocolo.; maxDose: Dose máxima depende da indicação; titular com cautela pelo alto risco de sedação e hipotensão.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência intensa; Hipotensão ortostática; Boca seca; Constipação; Tontura; Ganho de peso; Visão turva",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Depressão respiratória quando associada a sedativos; Prolongamento QT e arritmias; Delirium anticolinérgico; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Sedação, hipotensão ortostática, boca seca e constipação.; QT/arrítmia, síndrome neuroléptica maligna, agranulocitose e depressão respiratória.",
    "contraindications": "Hipersensibilidade às fenotiazinas; Depressão grave do SNC ou coma; Hipotensão grave; Insuficiência respiratória grave sem suporte; Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade",
    "interactions": "Álcool; Opioides e benzodiazepínicos: maior depressão do SNC; Anti-hipertensivos: maior hipotensão; Anticolinérgicos: maior risco de retenção urinária, constipação e delirium; Fármacos que prolongam QT",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; NOZINAN maleato oral e cloridrato injetável diferem em sal, concentração e via; confirmar bula e apresentação do país. Não usar dose oral como referência direta para injetável ou pediatria.; Nozinan oral (maleato) e injetável (cloridrato) têm sais, vias e bulas distintas; não converter doses/formulações automaticamente. Confirmar apresentação local.; Antipsicótico muito sedativo; titular lentamente.; Monitorar pressão arterial e risco de quedas.; Cuidado em combinação com opioides, benzodiazepínicos ou álcool.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes com risco de QT.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "QT/arrítmia, síndrome neuroléptica maligna, agranulocitose e depressão respiratória.",
    "alerts": "QT/arrítmia, síndrome neuroléptica maligna, agranulocitose e depressão respiratória.; SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; NOZINAN maleato oral e cloridrato injetável diferem em sal, concentração e via; confirmar bula e apresentação do país. Não usar dose oral como referência direta para injetável ou pediatria.; Nozinan oral (maleato) e injetável (cloridrato) têm sais, vias e bulas distintas; não converter doses/formulações automaticamente. Confirmar apresentação local.; Antipsicótico muito sedativo; titular lentamente.; Monitorar pressão arterial e risco de quedas.; Cuidado em combinação com opioides, benzodiazepínicos ou álcool.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes com risco de QT.",
    "references": [
      "Fonte primária/oficial - https://www.medicines.org.uk/emc/product/1428/smpc"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/1428/smpc"
  },
  "es": {
    "name": "Levomepromazina",
    "class": "Antipsicótico fenotiazínico sedativo",
    "pharmacologicClass": "Antipsicótico fenotiazínico sedativo",
    "commercialNames": "br: Neozine; Levomepromazina Cristália; ar: Nozinan; Levomepromazina Northia",
    "presentation": "Comprimido 25 mg; Comprimido 100 mg; Gotas 40 mg/mL; Ampola 25 mg/mL",
    "presentations": "Comprimido 25 mg; Comprimido 100 mg; Gotas 40 mg/mL; Ampola 25 mg/mL",
    "mechanism": "Antagonista D2 con forte bloqueio H1, alfa-1, muscarínico y serotoninérgico; perfil muito sedativo y hipotensor.",
    "pharmacodynamics": "Antagonista D2 con forte bloqueio H1, alfa-1, muscarínico y serotoninérgico; perfil muito sedativo y hipotensor.",
    "pharmacokinetics": "Vida média aproximada: 15–30 horas.",
    "indications": "Agitação psicomotora; Psicose aguda con insônia/agitação; Esquizofrenia; Mania aguda; Insônia grave em contexto psiquiátrico selecionado; Náuseas y vômitos refratários; Sedação y controle de sintomas em cuidados paliativos",
    "dose": "adulto: Agitação/psicose: iniciar 25–50 mg VO à noite ou 2–3x/dia, conforme sedação y resposta.; paliativo: Cuidados paliativos/náuseas/agitação: dosiss baixas individualizadas conforme protocolo.; maxDose: Dose máxima depende da indicação; titular con cautela pelo alto riesgo de sedação y hipotensão.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência intensa; Hipotensão ortostática; Boca seca; Constipação; Tontura; Ganho de peso; Visão turva",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Depressão respiratória quando associada a sedativos; Prolongamento QT y arritmias; Delirium anticolinérgico; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Sedação, hipotensão ortostática, boca seca y constipação.; QT/arrítmia, síndrome neuroléptica maligna, agranulocitose y depressão respiratória.",
    "contraindications": "Hipersensibilidade às fenotiazinas; Depressão grave do SNC ou coma; Hipotensão grave; Insuficiência respiratória grave sem suporte; Doença de Parkinson ou demência con corpos de Lewy, salvo extrema necessidade",
    "interactions": "Álcool; Opioides y benzodiazepínicos: maior depressão do SNC; Anti-hipertensivos: maior hipotensão; Anticolinérgicos: maior riesgo de retenção urinária, constipação y delirium; Fármacos que prolongam QT",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; NOZINAN maleato oral y cloridrato injetável diferem em sal, concentração y via; confirmar bula y apresentação do país. No usar dosis oral como referência direta para injetável ou pediatria.; Nozinan oral (maleato) y injetável (cloridrato) têm sais, vias y bulas distintas; no converter dosiss/formulações automaticamente. Confirmar apresentação local.; Antipsicótico muito sedativo; titular lentamente.; Monitorar pressão arterial y riesgo de quedas.; Cuidado em combinação con opioides, benzodiazepínicos ou álcool.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes con riesgo de QT.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "QT/arrítmia, síndrome neuroléptica maligna, agranulocitose y depressão respiratória.",
    "alerts": "QT/arrítmia, síndrome neuroléptica maligna, agranulocitose y depressão respiratória.; SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; NOZINAN maleato oral y cloridrato injetável diferem em sal, concentração y via; confirmar bula y apresentação do país. No usar dosis oral como referência direta para injetável ou pediatria.; Nozinan oral (maleato) y injetável (cloridrato) têm sais, vias y bulas distintas; no converter dosiss/formulações automaticamente. Confirmar apresentação local.; Antipsicótico muito sedativo; titular lentamente.; Monitorar pressão arterial y riesgo de quedas.; Cuidado em combinação con opioides, benzodiazepínicos ou álcool.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes con riesgo de QT.",
    "references": [
      "Fonte primária/oficial - https://www.medicines.org.uk/emc/product/1428/smpc"
    ],
    "ref": "https://www.medicines.org.uk/emc/product/1428/smpc"
  }
};})();
/* GOLD33_SELECTIVE:levomepromazina:END */
/* GOLD33_SELECTIVE:lurasidona:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="lurasidona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:lurasidona:"+matches.length);drug=matches[0];}else{drug=db&&db["lurasidona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:lurasidona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "048",
    "requiredFieldCount": 33,
    "approvedSha256": "31106a5e151f08bd2d807a5d1d0d90483780bc660c307b2c8833463be27e37b7",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Lurasidona",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Latuda; Lurasidona; ar: Latuda; Lurasidona",
    "presentation": "Comprimido 20 mg; Comprimido 40 mg; Comprimido 60 mg; Comprimido 80 mg; Comprimido 120 mg",
    "presentations": "Comprimido 20 mg; Comprimido 40 mg; Comprimido 60 mg; Comprimido 80 mg; Comprimido 120 mg",
    "mechanism": "Antagonista D2 e 5HT2A, antagonista 5HT7 e agonista parcial 5HT1A; perfil metabólico relativamente favorável.",
    "pharmacodynamics": "Antagonista D2 e 5HT2A, antagonista 5HT7 e agonista parcial 5HT1A; perfil metabólico relativamente favorável.",
    "pharmacokinetics": "Vida média aproximada: 18 horas.",
    "indications": "Esquizofrenia; Depressão bipolar tipo I; Depressão bipolar em monoterapia; Depressão bipolar como adjuvante a lítio ou valproato; Psicose com preocupação metabólica; Transtorno esquizoafetivo em casos selecionados",
    "dose": "adulto: Esquizofrenia: iniciar 40 mg VO 1x/dia com alimento.; depressaoBipolar: Depressão bipolar: iniciar 20 mg VO 1x/dia com alimento; usual 20–120 mg/dia.; maxDose: Dose máxima usual: 160 mg/dia em esquizofrenia; 120 mg/dia em depressão bipolar.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "LATUDA oral (bula FDA): ClCr 30–<50 ou <30 mL/min: iniciar 20 mg/dia; máximo 80 mg/dia. Conferir indicação, idade e interações CYP3A4 antes de selecionar dose.",
    "hepaticDose": "LATUDA oral (bula FDA): Child-Pugh 7–9 iniciar 20 mg/dia, máximo 80 mg/dia; Child-Pugh 10–15 iniciar 20 mg/dia, máximo 40 mg/dia. Não inferir gravidade a partir do booleano hepatopatia.",
    "commonAdverseEffects": "Náuseas; Sonolência; Acatisia; Parkinsonismo; Tontura; Insônia",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Reação extrapiramidal intensa; Hiperglicemia/dislipidemia, embora menos frequente que olanzapina",
    "adverseEffects": "Acatisia, sintomas extrapiramidais, sonolência e náusea.; Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia e ideação suicida em jovens.",
    "contraindications": "Hipersensibilidade à lurasidona; Uso com inibidores fortes de CYP3A4; Uso com indutores fortes de CYP3A4; Demência com psicose sem avaliação especializada",
    "interactions": "Cetoconazol, claritromicina, ritonavir: contraindicado/aumenta níveis; Carbamazepina, rifampicina, fenitoína: contraindicado/reduz níveis; Suco de toranja/grapefruit: pode aumentar níveis; Álcool e depressores do SNC; Levodopa e agonistas dopaminérgicos; Fármacos que prolongam QT",
    "monitoring": "LATUDA VO: administrar com alimento de pelo menos 350 kcal. Dose máxima depende de indicação, idade, função renal/hepática e interações CYP3A4; sem cálculo universal.; Administrar sempre com alimento para absorção adequada.; Evitar grapefruit/toranja.; Contraindicada com inibidores ou indutores fortes de CYP3A4.; Monitorar acatisia e sintomas extrapiramidais.; Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia e lipídios.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica e alimentos.",
    "preparation": "Confirmar concentração, diluição e estabilidade no produto; não inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização e protocolo da bula; caso contrário não aplicável.",
    "pregnancy": "Avaliar risco fetal, indicação e bula.",
    "lactation": "Avaliar excreção e risco-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação e disfunção orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme e não interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações e combinações não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia e ideação suicida em jovens.",
    "alerts": "Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia e ideação suicida em jovens.; LATUDA VO: administrar com alimento de pelo menos 350 kcal. Dose máxima depende de indicação, idade, função renal/hepática e interações CYP3A4; sem cálculo universal.; Administrar sempre com alimento para absorção adequada.; Evitar grapefruit/toranja.; Contraindicada com inibidores ou indutores fortes de CYP3A4.; Monitorar acatisia e sintomas extrapiramidais.; Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia e lipídios.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lurasidone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/200603s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lurasidone"
  },
  "es": {
    "name": "Lurasidona",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Latuda; Lurasidona; ar: Latuda; Lurasidona",
    "presentation": "Comprimido 20 mg; Comprimido 40 mg; Comprimido 60 mg; Comprimido 80 mg; Comprimido 120 mg",
    "presentations": "Comprimido 20 mg; Comprimido 40 mg; Comprimido 60 mg; Comprimido 80 mg; Comprimido 120 mg",
    "mechanism": "Antagonista D2 y 5HT2A, antagonista 5HT7 y agonista parcial 5HT1A; perfil metabólico relativamente favorável.",
    "pharmacodynamics": "Antagonista D2 y 5HT2A, antagonista 5HT7 y agonista parcial 5HT1A; perfil metabólico relativamente favorável.",
    "pharmacokinetics": "Vida média aproximada: 18 horas.",
    "indications": "Esquizofrenia; Depressão bipolar tipo I; Depressão bipolar em monoterapia; Depressão bipolar como adjuvante a lítio ou valproato; Psicose con preocupação metabólica; Transtorno esquizoafetivo em casos selecionados",
    "dose": "adulto: Esquizofrenia: iniciar 40 mg VO 1x/dia con alimento.; depressaoBipolar: Depressão bipolar: iniciar 20 mg VO 1x/dia con alimento; usual 20–120 mg/dia.; maxDose: Dose máxima usual: 160 mg/dia em esquizofrenia; 120 mg/dia em depressão bipolar.",
    "pediatricDose": "Requer tabela completa por idade/peso; automação pediátrica bloqueada.",
    "renalDose": "LATUDA oral (bula FDA): ClCr 30–<50 ou <30 mL/min: iniciar 20 mg/dia; máximo 80 mg/dia. Conferir indicação, idade y interações CYP3A4 antes de selecionar dosis.",
    "hepaticDose": "LATUDA oral (bula FDA): Child-Pugh 7–9 iniciar 20 mg/dia, máximo 80 mg/dia; Child-Pugh 10–15 iniciar 20 mg/dia, máximo 40 mg/dia. No inferir gravidade a partir do booleano hepatopatia.",
    "commonAdverseEffects": "Náuseas; Sonolência; Acatisia; Parkinsonismo; Tontura; Insônia",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Reação extrapiramidal intensa; Hiperglicemia/dislipidemia, embora menos frequente que olanzapina",
    "adverseEffects": "Acatisia, sintomas extrapiramidais, sonolência y náusea.; Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia y ideação suicida em jovens.",
    "contraindications": "Hipersensibilidade à lurasidona; Uso con inibidores fortes de CYP3A4; Uso con indutores fortes de CYP3A4; Demência con psicose sem avaliação especializada",
    "interactions": "Cetoconazol, claritromicina, ritonavir: contraindicado/aumenta níveis; Carbamazepina, rifampicina, fenitoína: contraindicado/reduz níveis; Suco de toranja/grapefruit: pode aumentar níveis; Álcool y depressores do SNC; Levodopa y agonistas dopaminérgicos; Fármacos que prolongam QT",
    "monitoring": "LATUDA VO: administrar con alimento de pelo menos 350 kcal. Dose máxima depende de indicação, idade, función renal/hepática y interações CYP3A4; sem cálculo universal.; Administrar sempre con alimento para absorção adequada.; Evitar grapefruit/toranja.; Contraindicada con inibidores ou indutores fortes de CYP3A4.; Monitorar acatisia y sintomas extrapiramidais.; Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia y lipídios.",
    "administration": "Usar somente via/formulação rotulada; respeitar técnica y alimentos.",
    "preparation": "Confirmar concentração, diluição y estabilidade no produto; no inferir.",
    "infusionProtocol": "Quando IV, usar bomba/monitorização y protocolo da bula; caso contrário no aplicável.",
    "pregnancy": "Avaliar riesgo fetal, indicação y bula.",
    "lactation": "Avaliar excreção y riesgo-benefício.",
    "specialPopulations": "Individualizar em idosos, comorbidades, gestação y disfunción orgânica.",
    "patientEducation": "Orientar adesão, sinais de alarme y no interromper abruptamente quando aplicável.",
    "clinicalPearls": "Formulações y combinações no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Usar conforme diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia y ideação suicida em jovens.",
    "alerts": "Síndrome neuroléptica maligna, discinesia tardia, alterações metabólicas, leucopenia y ideação suicida em jovens.; LATUDA VO: administrar con alimento de pelo menos 350 kcal. Dose máxima depende de indicação, idade, función renal/hepática y interações CYP3A4; sem cálculo universal.; Administrar sempre con alimento para absorção adequada.; Evitar grapefruit/toranja.; Contraindicada con inibidores ou indutores fortes de CYP3A4.; Monitorar acatisia y sintomas extrapiramidais.; Perfil metabólico mais favorável, mas ainda requer controle de peso, glicemia y lipídios.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lurasidone",
      "Fonte primária/oficial - https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/200603s026lbl.pdf"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lurasidone"
  }
};})();
/* GOLD33_SELECTIVE:lurasidona:END */
/* GOLD33_SELECTIVE:olanzapina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="olanzapina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:olanzapina:"+matches.length);drug=matches[0];}else{drug=db&&db["olanzapina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:olanzapina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "057",
    "requiredFieldCount": 33,
    "approvedSha256": "10e4153c730685e713321ea7b52895190ead372a4456ac2d3d58ef2b2e090bf2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Olanzapina oral/ação imediata",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, orodispersíveis e injeção IM de ação rápida em forças específicas.",
    "presentations": "Comprimidos, orodispersíveis e injeção IM de ação rápida em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância e exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo e eliminação na fonte primária.",
    "indications": "Esquizofrenia e episódios do transtorno bipolar conforme idade e formulação.",
    "dose": "Adultos: início frequente 5-10 mg VO uma vez/dia; alvo e máximo dependem da indicação. Não aplicar este esquema à formulação LAI nem à injeção IM de ação rápida.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Não inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "Não inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Ganho de peso, sonolência, aumento do apetite, constipação e hipotensão ortostática.",
    "dangerousAdverseEffects": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna e maior mortalidade em idosos com psicose da demência.",
    "adverseEffects": "Ganho de peso, sonolência, aumento do apetite, constipação e hipotensão ortostática.; Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna e maior mortalidade em idosos com psicose da demência.",
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
    "safetyFlags": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna e maior mortalidade em idosos com psicose da demência.",
    "alerts": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna e maior mortalidade em idosos com psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina"
  },
  "es": {
    "name": "Olanzapina oral/ação imediata",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "Marcas variam por país.",
    "presentation": "Comprimidos, orodispersíveis y injeção IM de ação rápida em forças específicas.",
    "presentations": "Comprimidos, orodispersíveis y injeção IM de ação rápida em forças específicas.",
    "mechanism": "Mecanismo específico conforme fonte primária.",
    "pharmacodynamics": "Efeito farmacodinâmico dependente da substância y exposição.",
    "pharmacokinetics": "Revisar absorção, metabolismo y eliminação na fonte primária.",
    "indications": "Esquizofrenia y episódios do transtorno bipolar conforme idade y formulação.",
    "dose": "Adultos: início frequente 5-10 mg VO uma vez/dia; alvo y máximo dependem da indicação. No aplicar este esquema à formulação LAI nem à injeção IM de ação rápida.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "No inferir ajuste; aplicar somente tabela/conduta da fonte específica.",
    "hepaticDose": "No inferir ajuste; aplicar somente recomendação da fonte específica.",
    "commonAdverseEffects": "Ganho de peso, sonolência, aumento do apetite, constipação y hipotensão ortostática.",
    "dangerousAdverseEffects": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna y maior mortalidade em idosos con psicose da demência.",
    "adverseEffects": "Ganho de peso, sonolência, aumento do apetite, constipação y hipotensão ortostática.; Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna y maior mortalidade em idosos con psicose da demência.",
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
    "safetyFlags": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna y maior mortalidade em idosos con psicose da demência.",
    "alerts": "Síndrome metabólica, hiperglicemia, discinesia tardia, síndrome neuroléptica maligna y maior mortalidade em idosos con psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina"
  }
};})();
/* GOLD33_SELECTIVE:olanzapina:END */
/* GOLD33_SELECTIVE:olanzapina_lai:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="olanzapina_lai";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:olanzapina_lai:"+matches.length);drug=matches[0];}else{drug=db&&db["olanzapina_lai"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:olanzapina_lai");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "057",
    "requiredFieldCount": 33,
    "approvedSha256": "10e4153c730685e713321ea7b52895190ead372a4456ac2d3d58ef2b2e090bf2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Olanzapina pamoato de depósito",
    "class": "Antipsicótico atípico de longa ação",
    "pharmacologicClass": "Antipsicótico atípico de longa ação",
    "commercialNames": "br: Zyprexa Relprevv; Olanzapina pamoato; ar: Zypadhera; Olanzapina pamoato",
    "presentation": "Frasco 210 mg; Frasco 300 mg; Frasco 405 mg",
    "presentations": "Frasco 210 mg; Frasco 300 mg; Frasco 405 mg",
    "mechanism": "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A e D2, com bloqueio H1, muscarínico e alfa-1.",
    "pharmacodynamics": "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A e D2, com bloqueio H1, muscarínico e alfa-1.",
    "pharmacokinetics": "Liberação prolongada por semanas; administração a cada 2 ou 4 semanas conforme esquema.",
    "indications": "Esquizofrenia em manutenção; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Pacientes previamente respondedores à olanzapina oral; Psicose crônica com necessidade de formulação depot; Alternativa LAI quando outros antipsicóticos foram mal tolerados",
    "dose": "adulto: Esquizofrenia em manutenção: 150–300 mg IM a cada 2 semanas ou 300–405 mg IM a cada 4 semanas, conforme dose oral prévia e protocolo.; conversao: A dose depende da dose oral prévia de olanzapina e da resposta clínica.; maxDose: Dose máxima usual: 300 mg a cada 2 semanas ou 405 mg a cada 4 semanas.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Ganho de peso importante; Sonolência; Aumento do apetite; Dislipidemia; Hiperglicemia; Dor no local da injeção",
    "dangerousAdverseEffects": "Síndrome pós-injeção com delirium/sedação; Síndrome metabólica grave; Diabetes mellitus ou descompensação glicêmica; Síndrome neuroléptica maligna; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Ganho de peso, sonolência, aumento do apetite e reação no local.; Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM e eventos metabólicos graves.",
    "contraindications": "Hipersensibilidade à olanzapina; Ausência de tolerância prévia à olanzapina oral; Incapacidade de realizar observação pós-injeção obrigatória; Demência com psicose sem avaliação especializada",
    "interactions": "Álcool e depressores do SNC: maior sedação; Benzodiazepínicos: maior sedação e hipotensão; Tabagismo: pode reduzir níveis por CYP1A2; Fluvoxamina/ciprofloxacino: podem aumentar níveis por CYP1A2; Levodopa e agonistas dopaminérgicos: antagonismo",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; ZYPREXA RELPREVV: após CADA injeção, bula FDA vigente exige observação profissional contínua por pelo menos 3 horas em serviço certificado, avaliação antes da alta e acompanhante na saída; não dirigir no restante do dia. Checar regras locais.; ZYPREXA RELPREVV/pamoato: síndrome de delírio/sedação pós-injeção exige observação por pelo menos 3 horas em serviço habilitado segundo bula EUA atual; REMS deste produto NÃO é o REMS da clozapina. Verificar regras locais.; Exige observação pós-injeção por risco de síndrome pós-injeção com sedação/delirium.; Confirmar tolerância oral antes de iniciar.; Monitorar peso, cintura, glicemia/HbA1c, lipídios e pressão arterial.; Orientar paciente a não dirigir após aplicação conforme protocolo local.; Registrar data, dose, lote e local de aplicação.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM e eventos metabólicos graves.",
    "alerts": "Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM e eventos metabólicos graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina+lai",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina+lai"
  },
  "es": {
    "name": "Olanzapina pamoato de depósito",
    "class": "Antipsicótico atípico de longa ação",
    "pharmacologicClass": "Antipsicótico atípico de longa ação",
    "commercialNames": "br: Zyprexa Relprevv; Olanzapina pamoato; ar: Zypadhera; Olanzapina pamoato",
    "presentation": "Frasco 210 mg; Frasco 300 mg; Frasco 405 mg",
    "presentations": "Frasco 210 mg; Frasco 300 mg; Frasco 405 mg",
    "mechanism": "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A y D2, con bloqueio H1, muscarínico y alfa-1.",
    "pharmacodynamics": "Pamoato de olanzapina de liberação prolongada; antagonista 5HT2A y D2, con bloqueio H1, muscarínico y alfa-1.",
    "pharmacokinetics": "Liberação prolongada por semanas; administração a cada 2 ou 4 semanas conforme esquema.",
    "indications": "Esquizofrenia em manutenção; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Pacientes previamente respondedores à olanzapina oral; Psicose crônica con necessidade de formulação depot; Alternativa LAI quando outros antipsicóticos foram mal tolerados",
    "dose": "adulto: Esquizofrenia em manutenção: 150–300 mg IM a cada 2 semanas ou 300–405 mg IM a cada 4 semanas, conforme dosis oral prévia y protocolo.; conversao: A dosis depende da dosis oral prévia de olanzapina y da resposta clínica.; maxDose: Dose máxima usual: 300 mg a cada 2 semanas ou 405 mg a cada 4 semanas.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Ganho de peso importante; Sonolência; Aumento do apetite; Dislipidemia; Hiperglicemia; Dor no local da injeção",
    "dangerousAdverseEffects": "Síndrome pós-injeção con delirium/sedação; Síndrome metabólica grave; Diabetes mellitus ou descompensação glicêmica; Síndrome neuroléptica maligna; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Ganho de peso, sonolência, aumento do apetite y reação no local.; Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM y eventos metabólicos graves.",
    "contraindications": "Hipersensibilidade à olanzapina; Ausência de tolerância prévia à olanzapina oral; Incapacidade de realizar observação pós-injeção obrigatória; Demência con psicose sem avaliação especializada",
    "interactions": "Álcool y depressores do SNC: maior sedação; Benzodiazepínicos: maior sedação y hipotensão; Tabagismo: pode reduzir níveis por CYP1A2; Fluvoxamina/ciprofloxacino: podem aumentar níveis por CYP1A2; Levodopa y agonistas dopaminérgicos: antagonismo",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; ZYPREXA RELPREVV: após CADA injeção, bula FDA vigente exige observação profissional contínua por pelo menos 3 horas em serviço certificado, avaliação antes da alta y acompanhante na saída; no dirigir no restante do dia. Checar regras locais.; ZYPREXA RELPREVV/pamoato: síndrome de delírio/sedação pós-injeção exige observação por pelo menos 3 horas em serviço habilitado segundo bula EUA atual; REMS deste produto NÃO é o REMS da clozapina. Verificar regras locais.; Exige observação pós-injeção por risco de síndrome pós-injeção con sedação/delirium.; Confirmar tolerância oral antes de iniciar.; Monitorar peso, cintura, glicemia/HbA1c, lipídios y pressão arterial.; Orientar paciente a no dirigir após aplicação conforme protocolo local.; Registrar data, dosis, lote y local de aplicação.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM y eventos metabólicos graves.",
    "alerts": "Síndrome de delírio/sedação pós-injeção, depressão cardiorrespiratória, SNM y eventos metabólicos graves.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina+lai",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=olanzapina+lai"
  }
};})();
/* GOLD33_SELECTIVE:olanzapina_lai:END */
/* GOLD33_SELECTIVE:paliperidona:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="paliperidona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:paliperidona:"+matches.length);drug=matches[0];}else{drug=db&&db["paliperidona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:paliperidona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "059",
    "requiredFieldCount": 33,
    "approvedSha256": "9a0e252a1c2c2244940c697a28cf89c57a5f37b8c8221ac511f5e465ff69013f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Paliperidona oral",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Invega; Invega Sustenna; Invega Trinza; Paliperidona; ar: Invega; Xeplion; Trevicta; Paliperidona",
    "presentation": "Comprimido de liberação prolongada 3 mg; Comprimido de liberação prolongada 6 mg; Comprimido de liberação prolongada 9 mg; Comprimido de liberação prolongada 12 mg",
    "presentations": "Comprimido de liberação prolongada 3 mg; Comprimido de liberação prolongada 6 mg; Comprimido de liberação prolongada 9 mg; Comprimido de liberação prolongada 12 mg",
    "mechanism": "Metabólito ativo da risperidona; antagonista D2 e 5HT2A, com risco relevante de hiperprolactinemia.",
    "pharmacodynamics": "Metabólito ativo da risperidona; antagonista D2 e 5HT2A, com risco relevante de hiperprolactinemia.",
    "pharmacokinetics": "Vida média VO aproximada: 23 horas; formulações LAI têm duração mensal ou trimestral.",
    "indications": "Esquizofrenia; Transtorno esquizoafetivo; Manutenção antipsicótica com formulação LAI; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Psicose crônica com necessidade de estabilidade plasmática",
    "dose": "adulto: Esquizofrenia: iniciar 6 mg VO 1x/dia pela manhã; usual 3–12 mg/dia.; esquizoafetivo: Transtorno esquizoafetivo: 3–12 mg/dia conforme resposta e tolerabilidade.; maxDose: Dose máxima VO usual: 12 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "INVEGA oral de liberação prolongada (bula FDA): ClCr 50–<80 mL/min: iniciar 3 mg 1x/dia, máximo 6 mg/dia; ClCr 10–<50: iniciar 3 mg em dias alternados, máximo 3 mg 1x/dia após reavaliação; ClCr <10: uso não recomendado. Não aplicar a LAI nem a outros produtos.",
    "hepaticDose": "INVEGA oral de liberação prolongada (bula FDA): Child-Pugh A/B sem ajuste; insuficiência hepática grave não estudada. Não generalizar para palmitato injetável.",
    "commonAdverseEffects": "Hiperprolactinemia; Ganho de peso; Sonolência; Acatisia; Parkinsonismo; Tontura; Reação no local da injeção",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Eventos cerebrovasculares em idosos com demência; Hiperglicemia e dislipidemia; Acúmulo em insuficiência renal",
    "adverseEffects": "Sintomas extrapiramidais, acatisia, taquicardia, sonolência e hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica e maior mortalidade em idosos com psicose da demência.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; Insuficiência renal grave para algumas formulações; Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade",
    "interactions": "Levodopa e agonistas dopaminérgicos: antagonismo; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool e depressores do SNC",
    "monitoring": "INVEGA comprimidos de liberação prolongada: ajuste por ClCr específico do produto, inclusive limitação em insuficiência grave; não converter esquema oral para palmitato mensal/trimestral.; Ajustar dose pela função renal.; Monitorar prolactina se sintomas clínicos.; Monitorar peso, glicemia, lipídios e pressão arterial.; Não partir nem mastigar comprimidos de liberação prolongada.; Formulações LAI exigem protocolo específico de início e manutenção.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica e maior mortalidade em idosos com psicose da demência.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica e maior mortalidade em idosos com psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona"
  },
  "es": {
    "name": "Paliperidona oral",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Invega; Invega Sustenna; Invega Trinza; Paliperidona; ar: Invega; Xeplion; Trevicta; Paliperidona",
    "presentation": "Comprimido de liberação prolongada 3 mg; Comprimido de liberação prolongada 6 mg; Comprimido de liberação prolongada 9 mg; Comprimido de liberação prolongada 12 mg",
    "presentations": "Comprimido de liberação prolongada 3 mg; Comprimido de liberação prolongada 6 mg; Comprimido de liberação prolongada 9 mg; Comprimido de liberação prolongada 12 mg",
    "mechanism": "Metabólito ativo da risperidona; antagonista D2 y 5HT2A, con risco relevante de hiperprolactinemia.",
    "pharmacodynamics": "Metabólito ativo da risperidona; antagonista D2 y 5HT2A, con risco relevante de hiperprolactinemia.",
    "pharmacokinetics": "Vida média VO aproximada: 23 horas; formulações LAI têm duração mensal ou trimestral.",
    "indications": "Esquizofrenia; Transtorno esquizoafetivo; Manutenção antipsicótica con formulação LAI; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Psicose crônica con necessidade de estabilidade plasmática",
    "dose": "adulto: Esquizofrenia: iniciar 6 mg VO 1x/dia pela manhã; usual 3–12 mg/dia.; esquizoafetivo: Transtorno esquizoafetivo: 3–12 mg/dia conforme resposta y tolerabilidade.; maxDose: Dose máxima VO usual: 12 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "INVEGA oral de liberação prolongada (bula FDA): ClCr 50–<80 mL/min: iniciar 3 mg 1x/dia, máximo 6 mg/dia; ClCr 10–<50: iniciar 3 mg em dias alternados, máximo 3 mg 1x/dia após reavaliação; ClCr <10: uso no recomendado. No aplicar a LAI nem a outros produtos.",
    "hepaticDose": "INVEGA oral de liberação prolongada (bula FDA): Child-Pugh A/B sem ajuste; insuficiência hepática grave no estudada. No generalizar para palmitato injetável.",
    "commonAdverseEffects": "Hiperprolactinemia; Ganho de peso; Sonolência; Acatisia; Parkinsonismo; Tontura; Reação no local da injeção",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Eventos cerebrovasculares em idosos con demência; Hiperglicemia y dislipidemia; Acúmulo em insuficiência renal",
    "adverseEffects": "Sintomas extrapiramidais, acatisia, taquicardia, sonolência y hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica y maior mortalidade em idosos con psicose da demência.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; Insuficiência renal grave para algumas formulações; Demência con corpos de Lewy ou Parkinson grave, salvo extrema necessidade",
    "interactions": "Levodopa y agonistas dopaminérgicos: antagonismo; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool y depressores do SNC",
    "monitoring": "INVEGA comprimidos de liberação prolongada: ajuste por ClCr específico do produto, inclusive limitação em insuficiência grave; no converter esquema oral para palmitato mensal/trimestral.; Ajustar dosis pela función renal.; Monitorar prolactina se sintomas clínicos.; Monitorar peso, glicemia, lipídios y pressão arterial.; No partir nem mastigar comprimidos de liberação prolongada.; Formulações LAI exigem protocolo específico de início y manutenção.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica y maior mortalidade em idosos con psicose da demência.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica y maior mortalidade em idosos con psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona"
  }
};})();
/* GOLD33_SELECTIVE:paliperidona:END */
/* GOLD33_SELECTIVE:paliperidona_mensal:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="paliperidona_mensal";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:paliperidona_mensal:"+matches.length);drug=matches[0];}else{drug=db&&db["paliperidona_mensal"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:paliperidona_mensal");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "059",
    "requiredFieldCount": 33,
    "approvedSha256": "9a0e252a1c2c2244940c697a28cf89c57a5f37b8c8221ac511f5e465ff69013f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Paliperidona palmitato mensal",
    "class": "Antipsicótico atípico injetável de longa ação",
    "pharmacologicClass": "Antipsicótico atípico injetável de longa ação",
    "commercialNames": "br: Invega Sustenna; ar: Xeplion",
    "presentation": "Seringa preenchida 39 mg; Seringa preenchida 78 mg; Seringa preenchida 117 mg; Seringa preenchida 156 mg; Seringa preenchida 234 mg",
    "presentations": "Seringa preenchida 39 mg; Seringa preenchida 78 mg; Seringa preenchida 117 mg; Seringa preenchida 156 mg; Seringa preenchida 234 mg",
    "mechanism": "Palmitato de paliperidona com liberação prolongada mensal; antagonista D2 e 5HT2A.",
    "pharmacodynamics": "Palmitato de paliperidona com liberação prolongada mensal; antagonista D2 e 5HT2A.",
    "pharmacokinetics": "Meia-vida aparente prolongada, aproximadamente 25–49 dias.",
    "indications": "Esquizofrenia; Transtorno esquizoafetivo; Manutenção antipsicótica de longa ação; Baixa adesão ao tratamento oral; Prevenção de recaídas psicóticas; Ponte para paliperidona trimestral após estabilização",
    "dose": "adulto: Esquema inicial comum: 234 mg IM deltoide no dia 1 e 156 mg IM deltoide no dia 8; depois manutenção mensal.; manutencao: Manutenção usual: 39–234 mg IM 1x/mês conforme resposta e tolerabilidade.; maxDose: Dose máxima usual: 234 mg IM mensal.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "ClCr ≥80 mL/min: seguir esquema de bula específico da indicação/produto; checar função renal antes da primeira dose.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Dor ou reação no local da injeção; Hiperprolactinemia; Ganho de peso; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT; Hiperglicemia e dislipidemia; Eventos cerebrovasculares em idosos com demência; Acúmulo em insuficiência renal",
    "adverseEffects": "Reação no local, sintomas extrapiramidais, ganho de peso e hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica e erro de intervalo/via.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; ClCr <50 mL/min; Demência com psicose sem avaliação especializada",
    "interactions": "Levodopa e agonistas dopaminérgicos; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool e depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; INVEGA SUSTENNA: sem ClCr válido não presumir função normal. Bula FDA: ClCr 50–<80 usa início renal específico 156 mg dia 1/117 mg dia 8 e manutenção inicial 78 mg mensal (máx. 156 mg/mês); ClCr <50: não recomendado. Não copiar números para Xeplion sem verificar unidades.; INVEGA SUSTENNA é palmitato IM mensal: esquema de início, ajuste renal e unidades dependem da bula e do mercado. Xeplion EMA apresenta unidades de rotulagem distintas. Não intercambiar números diretamente.; Confirmar tolerância prévia à risperidona ou paliperidona antes do LAI.; Ajustar pela função renal.; Monitorar prolactina se sintomas clínicos.; Monitorar peso, glicemia, lipídios e pressão arterial.; Registrar data e local da aplicação para evitar erro de intervalo.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica e erro de intervalo/via.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica e erro de intervalo/via.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+mensal",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+mensal"
  },
  "es": {
    "name": "Paliperidona palmitato mensal",
    "class": "Antipsicótico atípico injetável de longa ação",
    "pharmacologicClass": "Antipsicótico atípico injetável de longa ação",
    "commercialNames": "br: Invega Sustenna; ar: Xeplion",
    "presentation": "Seringa preenchida 39 mg; Seringa preenchida 78 mg; Seringa preenchida 117 mg; Seringa preenchida 156 mg; Seringa preenchida 234 mg",
    "presentations": "Seringa preenchida 39 mg; Seringa preenchida 78 mg; Seringa preenchida 117 mg; Seringa preenchida 156 mg; Seringa preenchida 234 mg",
    "mechanism": "Palmitato de paliperidona con liberação prolongada mensal; antagonista D2 y 5HT2A.",
    "pharmacodynamics": "Palmitato de paliperidona con liberação prolongada mensal; antagonista D2 y 5HT2A.",
    "pharmacokinetics": "Meia-vida aparente prolongada, aproximadamente 25–49 dias.",
    "indications": "Esquizofrenia; Transtorno esquizoafetivo; Manutenção antipsicótica de longa ação; Baixa adesão ao tratamento oral; Prevenção de recaídas psicóticas; Ponte para paliperidona trimestral após estabilização",
    "dose": "adulto: Esquema inicial comum: 234 mg IM deltoide no dia 1 y 156 mg IM deltoide no dia 8; depois manutenção mensal.; manutencao: Manutenção usual: 39–234 mg IM 1x/mês conforme resposta y tolerabilidade.; maxDose: Dose máxima usual: 234 mg IM mensal.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "ClCr ≥80 mL/min: seguir esquema de bula específico da indicação/produto; checar función renal antes da primeira dosis.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Dor ou reação no local da injeção; Hiperprolactinemia; Ganho de peso; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT; Hiperglicemia y dislipidemia; Eventos cerebrovasculares em idosos con demência; Acúmulo em insuficiência renal",
    "adverseEffects": "Reação no local, sintomas extrapiramidais, ganho de peso y hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica y erro de intervalo/via.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; ClCr <50 mL/min; Demência con psicose sem avaliação especializada",
    "interactions": "Levodopa y agonistas dopaminérgicos; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool y depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; INVEGA SUSTENNA: sem ClCr válido no presumir función normal. Bula FDA: ClCr 50–<80 usa início renal específico 156 mg dia 1/117 mg dia 8 y manutenção inicial 78 mg mensal (máx. 156 mg/mês); ClCr <50: no recomendado. No copiar números para Xeplion sem verificar unidades.; INVEGA SUSTENNA é palmitato IM mensal: esquema de início, ajuste renal y unidades dependem da bula y do mercado. Xeplion EMA apresenta unidades de rotulagem distintas. No intercambiar números diretamente.; Confirmar tolerância prévia à risperidona ou paliperidona antes do LAI.; Ajustar pela función renal.; Monitorar prolactina se sintomas clínicos.; Monitorar peso, glicemia, lipídios y pressão arterial.; Registrar data y local da aplicação para evitar erro de intervalo.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica y erro de intervalo/via.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica y erro de intervalo/via.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+mensal",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+mensal"
  }
};})();
/* GOLD33_SELECTIVE:paliperidona_mensal:END */
/* GOLD33_SELECTIVE:paliperidona_trimestral:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="paliperidona_trimestral";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:paliperidona_trimestral:"+matches.length);drug=matches[0];}else{drug=db&&db["paliperidona_trimestral"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:paliperidona_trimestral");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "059",
    "requiredFieldCount": 33,
    "approvedSha256": "9a0e252a1c2c2244940c697a28cf89c57a5f37b8c8221ac511f5e465ff69013f",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Paliperidona palmitato trimestral",
    "class": "Antipsicótico atípico injetável de longa ação trimestral",
    "pharmacologicClass": "Antipsicótico atípico injetável de longa ação trimestral",
    "commercialNames": "br: Invega Trinza; ar: Trevicta",
    "presentation": "Seringa preenchida 175 mg; Seringa preenchida 263 mg; Seringa preenchida 350 mg; Seringa preenchida 525 mg",
    "presentations": "Seringa preenchida 175 mg; Seringa preenchida 263 mg; Seringa preenchida 350 mg; Seringa preenchida 525 mg",
    "mechanism": "Metabólito ativo da risperidona; antagonista D2 e 5HT2A com liberação prolongada por aproximadamente 3 meses.",
    "pharmacodynamics": "Metabólito ativo da risperidona; antagonista D2 e 5HT2A com liberação prolongada por aproximadamente 3 meses.",
    "pharmacokinetics": "Meia-vida aparente prolongada, variando aproximadamente 2–4 meses conforme local de aplicação.",
    "indications": "Esquizofrenia em fase de manutenção; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Pacientes estabilizados com paliperidona mensal; Psicose crônica com necessidade de estabilidade plasmática prolongada; Redução de internações por abandono terapêutico",
    "dose": "adulto: Aplicar IM a cada 3 meses após estabilização prévia com paliperidona mensal.; conversao: Dose trimestral geralmente corresponde a 3,5 vezes a última dose mensal estabilizada.; maxDose: Dose máxima usual: 525 mg IM a cada 3 meses.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "ClCr ≥80 mL/min: confirmar ≥4 meses de manutenção mensal e últimas duas doses iguais antes de converter; não converter unidades entre marcas automaticamente.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Reação no local da injeção; Ganho de peso; Hiperprolactinemia; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT; Eventos cerebrovasculares em idosos com demência; Hiperglicemia e dislipidemia; Efeito adverso persistente pela longa duração do depósito",
    "adverseEffects": "Reação no local, ganho de peso, sintomas extrapiramidais e hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica e exposição prolongada após erro de dose.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; Insuficiência renal moderada/grave com ClCr <50 mL/min; Paciente não estabilizado previamente com paliperidona mensal; Demência com psicose sem avaliação especializada",
    "interactions": "Levodopa e agonistas dopaminérgicos; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool e depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; INVEGA TRINZA (referência FDA): somente após pelo menos 4 meses com SUSTENNA; recomenda-se que as duas últimas doses mensais sejam iguais. Se ClCr <50 não recomendado; ClCr ausente não equivale a normal. Trevicta pode ter unidades diferentes: não converter automaticamente.; Trevicta trimestral: apenas manutenção após estabilização com paliperidona mensal, segundo bula EMA. Não calcular equivalência entre doses rotuladas em mg de base e mg de palmitato nem fazer troca automática de produtos.; Não usar para início de tratamento.; Usar apenas após estabilização com paliperidona mensal.; Ajustar decisão pela função renal.; Monitorar prolactina, peso, glicemia e lipídios.; Eventos adversos podem persistir por meses.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica e exposição prolongada após erro de dose.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica e exposição prolongada após erro de dose.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+trimestral",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+trimestral"
  },
  "es": {
    "name": "Paliperidona palmitato trimestral",
    "class": "Antipsicótico atípico injetável de longa ação trimestral",
    "pharmacologicClass": "Antipsicótico atípico injetável de longa ação trimestral",
    "commercialNames": "br: Invega Trinza; ar: Trevicta",
    "presentation": "Seringa preenchida 175 mg; Seringa preenchida 263 mg; Seringa preenchida 350 mg; Seringa preenchida 525 mg",
    "presentations": "Seringa preenchida 175 mg; Seringa preenchida 263 mg; Seringa preenchida 350 mg; Seringa preenchida 525 mg",
    "mechanism": "Metabólito ativo da risperidona; antagonista D2 y 5HT2A con liberação prolongada por aproximadamente 3 meses.",
    "pharmacodynamics": "Metabólito ativo da risperidona; antagonista D2 y 5HT2A con liberação prolongada por aproximadamente 3 meses.",
    "pharmacokinetics": "Meia-vida aparente prolongada, variando aproximadamente 2–4 meses conforme local de aplicação.",
    "indications": "Esquizofrenia em fase de manutenção; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Pacientes estabilizados con paliperidona mensal; Psicose crônica con necessidade de estabilidade plasmática prolongada; Redução de internações por abandono terapêutico",
    "dose": "adulto: Aplicar IM a cada 3 meses após estabilização prévia con paliperidona mensal.; conversao: Dose trimestral geralmente corresponde a 3,5 vezes a última dosis mensal estabilizada.; maxDose: Dose máxima usual: 525 mg IM a cada 3 meses.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "ClCr ≥80 mL/min: confirmar ≥4 meses de manutenção mensal y últimas duas dosiss iguais antes de converter; no converter unidades entre marcas automaticamente.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Reação no local da injeção; Ganho de peso; Hiperprolactinemia; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT; Eventos cerebrovasculares em idosos con demência; Hiperglicemia y dislipidemia; Efeito adverso persistente pela longa duração do depósito",
    "adverseEffects": "Reação no local, ganho de peso, sintomas extrapiramidais y hiperprolactinemia.; SNM, discinesia tardia, QT, síndrome metabólica y exposição prolongada após erro de dosis.",
    "contraindications": "Hipersensibilidade à paliperidona ou risperidona; Insuficiência renal moderada/grave con ClCr <50 mL/min; Paciente no estabilizado previamente con paliperidona mensal; Demência con psicose sem avaliação especializada",
    "interactions": "Levodopa y agonistas dopaminérgicos; Fármacos que prolongam QT; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool y depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; INVEGA TRINZA (referência FDA): somente após pelo menos 4 meses con SUSTENNA; recomenda-se que as duas últimas dosiss mensais sejam iguais. Se ClCr <50 no recomendado; ClCr ausente no equivale a normal. Trevicta pode ter unidades diferentes: no converter automaticamente.; Trevicta trimestral: apenas manutenção após estabilização con paliperidona mensal, segundo bula EMA. No calcular equivalência entre dosiss rotuladas em mg de base y mg de palmitato nem fazer troca automática de produtos.; No usar para início de tratamento.; Usar apenas após estabilização con paliperidona mensal.; Ajustar decisão pela función renal.; Monitorar prolactina, peso, glicemia y lipídios.; Eventos adversos podem persistir por meses.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, QT, síndrome metabólica y exposição prolongada após erro de dosis.",
    "alerts": "SNM, discinesia tardia, QT, síndrome metabólica y exposição prolongada após erro de dosis.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+trimestral",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=paliperidona+trimestral"
  }
};})();
/* GOLD33_SELECTIVE:paliperidona_trimestral:END */
/* GOLD33_SELECTIVE:periciazina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="periciazina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:periciazina:"+matches.length);drug=matches[0];}else{drug=db&&db["periciazina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:periciazina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "061",
    "requiredFieldCount": 33,
    "approvedSha256": "21d5764126222a27dd58e4de5b088bbd5ba7f893ec49f94e5861cb58d2022403",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Periciazina",
    "class": "Antipsicótico fenotiazínico",
    "pharmacologicClass": "Antipsicótico fenotiazínico",
    "commercialNames": "br: Neuleptil; Periciazina; ar: Neuleptil; Periciazina",
    "presentation": "Comprimido 10 mg; Comprimido 25 mg; Gotas 10 mg/mL; Gotas 40 mg/mL",
    "presentations": "Comprimido 10 mg; Comprimido 25 mg; Gotas 10 mg/mL; Gotas 40 mg/mL",
    "mechanism": "Antagonista dopaminérgico D2 com ação sedativa, antiadrenérgica e anticolinérgica moderada.",
    "pharmacodynamics": "Antagonista dopaminérgico D2 com ação sedativa, antiadrenérgica e anticolinérgica moderada.",
    "pharmacokinetics": "Vida média variável; efeito clínico pode persistir por várias horas.",
    "indications": "Esquizofrenia; Psicose crônica; Agitação psicomotora; Agressividade e impulsividade em casos selecionados; Distúrbios graves de comportamento; Irritabilidade intensa em contexto psiquiátrico; Mania aguda como adjuvante",
    "dose": "adulto: Psicose/agitação: iniciar 5–10 mg/dia VO; titular gradualmente conforme resposta.; comportamento: Distúrbios de comportamento: doses baixas divididas em 1–3 tomadas/dia conforme tolerabilidade.; maxDose: Dose máxima depende da indicação; titular com cautela por sedação, hipotensão e efeitos extrapiramidais.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Hipotensão ortostática; Boca seca; Constipação; Ganho de peso; Sintomas extrapiramidais",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT e arritmias; Delirium anticolinérgico; Convulsões em predispostos",
    "adverseEffects": "Sedação, boca seca, constipação, hipotensão e sintomas extrapiramidais.; QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose e depressão respiratória.",
    "contraindications": "Hipersensibilidade às fenotiazinas; Depressão grave do SNC ou coma; Doença de Parkinson ou demência com corpos de Lewy, salvo extrema necessidade; QT prolongado significativo; Insuficiência hepática grave",
    "interactions": "Álcool e depressores do SNC; Opioides e benzodiazepínicos; Fármacos que prolongam QT; Anticolinérgicos; Anti-hipertensivos; Levodopa e agonistas dopaminérgicos",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; Periciazina: bula de xarope 10 mg/5 mL NÃO valida gotas ou comprimidos. Para criança, confirmar indicação, idade, peso e concentração exata da apresentação local antes de calcular dose.; A bula Pericyazine xarope 10 mg/5 mL refere-se somente a esse produto; doses pediátricas dependem de peso, indicação e idade. Não converter para gotas ou comprimidos sem bula própria.; Monitorar sedação, pressão arterial e sintomas extrapiramidais.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes com risco de QT.; Evitar associação com álcool e outros sedativos.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose e depressão respiratória.",
    "alerts": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose e depressão respiratória.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=periciazina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=periciazina"
  },
  "es": {
    "name": "Periciazina",
    "class": "Antipsicótico fenotiazínico",
    "pharmacologicClass": "Antipsicótico fenotiazínico",
    "commercialNames": "br: Neuleptil; Periciazina; ar: Neuleptil; Periciazina",
    "presentation": "Comprimido 10 mg; Comprimido 25 mg; Gotas 10 mg/mL; Gotas 40 mg/mL",
    "presentations": "Comprimido 10 mg; Comprimido 25 mg; Gotas 10 mg/mL; Gotas 40 mg/mL",
    "mechanism": "Antagonista dopaminérgico D2 con ação sedativa, antiadrenérgica y anticolinérgica moderada.",
    "pharmacodynamics": "Antagonista dopaminérgico D2 con ação sedativa, antiadrenérgica y anticolinérgica moderada.",
    "pharmacokinetics": "Vida média variável; efeito clínico pode persistir por várias horas.",
    "indications": "Esquizofrenia; Psicose crônica; Agitação psicomotora; Agressividade y impulsividade em casos selecionados; Distúrbios graves de comportamento; Irritabilidade intensa em contexto psiquiátrico; Mania aguda como adjuvante",
    "dose": "adulto: Psicose/agitação: iniciar 5–10 mg/dia VO; titular gradualmente conforme resposta.; comportamento: Distúrbios de comportamento: dosiss baixas divididas em 1–3 tomadas/dia conforme tolerabilidade.; maxDose: Dose máxima depende da indicação; titular con cautela por sedação, hipotensão y efeitos extrapiramidais.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Hipotensão ortostática; Boca seca; Constipação; Ganho de peso; Sintomas extrapiramidais",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT y arritmias; Delirium anticolinérgico; Convulsões em predispostos",
    "adverseEffects": "Sedação, boca seca, constipação, hipotensão y sintomas extrapiramidais.; QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose y depressão respiratória.",
    "contraindications": "Hipersensibilidade às fenotiazinas; Depressão grave do SNC ou coma; Doença de Parkinson ou demência con corpos de Lewy, salvo extrema necessidade; QT prolongado significativo; Insuficiência hepática grave",
    "interactions": "Álcool y depressores do SNC; Opioides y benzodiazepínicos; Fármacos que prolongam QT; Anticolinérgicos; Anti-hipertensivos; Levodopa y agonistas dopaminérgicos",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; Periciazina: bula de xarope 10 mg/5 mL NÃO valida gotas ou comprimidos. Para criança, confirmar indicação, idade, peso y concentração exata da apresentação local antes de calcular dosis.; A bula Pericyazine xarope 10 mg/5 mL refere-se somente a esse produto; dosiss pediátricas dependem de peso, indicação y idade. No converter para gotas ou comprimidos sem bula própria.; Monitorar sedação, pressão arterial y sintomas extrapiramidais.; Evitar em idosos frágeis quando possível.; Considerar ECG em pacientes con risco de QT.; Evitar associação con álcool y outros sedativos.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose y depressão respiratória.",
    "alerts": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia, agranulocitose y depressão respiratória.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=periciazina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=periciazina"
  }
};})();
/* GOLD33_SELECTIVE:periciazina:END */
/* GOLD33_SELECTIVE:pimozida:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="pimozida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:pimozida:"+matches.length);drug=matches[0];}else{drug=db&&db["pimozida"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:pimozida");}drug.mcGoldClinicalV1={
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
    "name": "Pimozida",
    "class": "Antipsicótico difenilbutilpiperidínico",
    "pharmacologicClass": "Antipsicótico difenilbutilpiperidínico",
    "commercialNames": "br: Orap; Pimozida; ar: Orap; Pimozida",
    "presentation": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 4 mg",
    "presentations": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 4 mg",
    "mechanism": "Antagonista dopaminérgico D2 potente; reduz tiques e sintomas psicóticos, mas tem risco relevante de QT prolongado.",
    "pharmacodynamics": "Antagonista dopaminérgico D2 potente; reduz tiques e sintomas psicóticos, mas tem risco relevante de QT prolongado.",
    "pharmacokinetics": "Vida média aproximada: 55 horas.",
    "indications": "Síndrome de Tourette; Tiques motores crônicos; Tiques vocais crônicos; Transtorno delirante em casos selecionados; Psicose crônica em pacientes previamente respondedores; Coreia ou movimentos hipercinéticos selecionados sob especialista",
    "dose": "adulto: Tourette/tics: iniciar 1–2 mg/dia VO; titular lentamente conforme resposta e ECG.; manutencao: Manutenção: menor dose efetiva, geralmente 2–10 mg/dia.; maxDose: Dose máxima usual: 10 mg/dia ou conforme limite regulatório local; exige monitorização de QT.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Sem ajuste renal habitual, mas usar cautela em pacientes frágeis.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Acatisia; Parkinsonismo medicamentoso; Rigidez; Boca seca; Hiperprolactinemia",
    "dangerousAdverseEffects": "Prolongamento QT; Torsades de pointes; Morte súbita cardíaca em pacientes predispostos; Síndrome neuroléptica maligna; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Sonolência, sintomas extrapiramidais, boca seca e constipação.; QT/torsades, morte súbita, síndrome neuroléptica maligna e discinesia tardia.",
    "contraindications": "QT longo congênito ou QT prolongado significativo; História de arritmia ventricular grave; Hipocalemia ou hipomagnesemia não corrigidas; Uso concomitante com fármacos que prolongam QT; Uso com inibidores fortes de CYP3A4 ou CYP2D6; Uso com ISRS como fluoxetina, paroxetina, sertralina ou escitalopram/citalopram conforme risco de QT/interação",
    "interactions": "Macrolídeos, quinolonas e antiarrítmicos: risco de QT; Azólicos, ritonavir e outros inibidores fortes de CYP3A4; Fluoxetina, paroxetina e outros inibidores de CYP2D6; Citalopram/escitalopram: risco adicional de QT; Levodopa e agonistas dopaminérgicos; Álcool e depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; Pimozida: antes de usar, revisar ECG/QT, potássio/magnésio e lista de interações CYP/QT da bula; indicação e dose para tiques não devem ser transpostas a outras condições. Sem cálculo pediátrico automático.; Bula FDA para tiques de Tourette após resposta inadequada a tratamento padrão: riscos de QT e interações contraindicam combinações específicas (inclusive vários inibidores CYP). Conferir ECG, eletrólitos e lista completa antes de prescrever.; Obrigatório avaliar risco de QT antes de iniciar.; Realizar ECG basal e durante titulação em pacientes de risco.; Corrigir potássio e magnésio antes de usar.; Evitar combinação com fármacos que prolongam QT.; Reservar para indicações específicas, especialmente Tourette/tics refratários.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "QT/torsades, morte súbita, síndrome neuroléptica maligna e discinesia tardia.",
    "alerts": "QT/torsades, morte súbita, síndrome neuroléptica maligna e discinesia tardia.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pimozida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pimozida"
  },
  "es": {
    "name": "Pimozida",
    "class": "Antipsicótico difenilbutilpiperidínico",
    "pharmacologicClass": "Antipsicótico difenilbutilpiperidínico",
    "commercialNames": "br: Orap; Pimozida; ar: Orap; Pimozida",
    "presentation": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 4 mg",
    "presentations": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 4 mg",
    "mechanism": "Antagonista dopaminérgico D2 potente; reduz tiques y sintomas psicóticos, mas tem risco relevante de QT prolongado.",
    "pharmacodynamics": "Antagonista dopaminérgico D2 potente; reduz tiques y sintomas psicóticos, mas tem risco relevante de QT prolongado.",
    "pharmacokinetics": "Vida média aproximada: 55 horas.",
    "indications": "Síndrome de Tourette; Tiques motores crônicos; Tiques vocais crônicos; Transtorno delirante em casos selecionados; Psicose crônica em pacientes previamente respondedores; Coreia ou movimentos hipercinéticos selecionados sob especialista",
    "dose": "adulto: Tourette/tics: iniciar 1–2 mg/dia VO; titular lentamente conforme resposta y ECG.; manutencao: Manutenção: menor dosis efetiva, geralmente 2–10 mg/dia.; maxDose: Dose máxima usual: 10 mg/dia ou conforme limite regulatório local; exige monitorização de QT.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "Sem ajuste renal habitual, mas usar cautela em pacientes frágeis.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Acatisia; Parkinsonismo medicamentoso; Rigidez; Boca seca; Hiperprolactinemia",
    "dangerousAdverseEffects": "Prolongamento QT; Torsades de pointes; Morte súbita cardíaca em pacientes predispostos; Síndrome neuroléptica maligna; Discinesia tardia; Convulsões em predispostos",
    "adverseEffects": "Sonolência, sintomas extrapiramidais, boca seca y constipação.; QT/torsades, morte súbita, síndrome neuroléptica maligna y discinesia tardia.",
    "contraindications": "QT longo congênito ou QT prolongado significativo; História de arritmia ventricular grave; Hipocalemia ou hipomagnesemia no corrigidas; Uso concomitante con fármacos que prolongam QT; Uso con inibidores fortes de CYP3A4 ou CYP2D6; Uso con ISRS como fluoxetina, paroxetina, sertralina ou escitalopram/citalopram conforme risco de QT/interação",
    "interactions": "Macrolídeos, quinolonas y antiarrítmicos: risco de QT; Azólicos, ritonavir y outros inibidores fortes de CYP3A4; Fluoxetina, paroxetina y outros inibidores de CYP2D6; Citalopram/escitalopram: risco adicional de QT; Levodopa y agonistas dopaminérgicos; Álcool y depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; Pimozida: antes de usar, revisar ECG/QT, potássio/magnésio y lista de interações CYP/QT da bula; indicação y dosis para tiques no devem ser transpostas a outras condições. Sem cálculo pediátrico automático.; Bula FDA para tiques de Tourette após resposta inadequada a tratamento padrão: riscos de QT y interações contraindicam combinações específicas (inclusive vários inibidores CYP). Conferir ECG, eletrólitos y lista completa antes de prescrever.; Obrigatório avaliar risco de QT antes de iniciar.; Realizar ECG basal y durante titulação em pacientes de risco.; Corrigir potássio y magnésio antes de usar.; Evitar combinação con fármacos que prolongam QT.; Reservar para indicações específicas, especialmente Tourette/tics refratários.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "QT/torsades, morte súbita, síndrome neuroléptica maligna y discinesia tardia.",
    "alerts": "QT/torsades, morte súbita, síndrome neuroléptica maligna y discinesia tardia.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pimozida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pimozida"
  }
};})();
/* GOLD33_SELECTIVE:pimozida:END */
/* GOLD33_SELECTIVE:quetiapina:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="quetiapina";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:quetiapina:"+matches.length);drug=matches[0];}else{drug=db&&db["quetiapina"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:quetiapina");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "066",
    "requiredFieldCount": 33,
    "approvedSha256": "bc4a2f74a71f4210ae66618c848d36a28722e9fead8cb93c0dc91f0629254307",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Quetiapina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Seroquel; Quetros; Quetipin; Quetiapina EMS; ar: Seroquel; Quetiapina Bagó; Quetiapina Gador; Quetiapina Richmond",
    "presentation": "Comprimido 25 mg; Comprimido 100 mg; Comprimido 200 mg; Comprimido 300 mg; Comprimido XR 50 mg; Comprimido XR 200 mg; Comprimido XR 300 mg",
    "presentations": "Comprimido 25 mg; Comprimido 100 mg; Comprimido 200 mg; Comprimido 300 mg; Comprimido XR 50 mg; Comprimido XR 200 mg; Comprimido XR 300 mg",
    "mechanism": "Antagonista 5HT2A e D2, com forte bloqueio H1 e alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.",
    "pharmacodynamics": "Antagonista 5HT2A e D2, com forte bloqueio H1 e alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.",
    "pharmacokinetics": "Vida média aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas.",
    "indications": "Esquizofrenia; Transtorno bipolar — mania aguda; Transtorno bipolar — depressão bipolar; Manutenção no transtorno bipolar; Adjuvante no transtorno depressivo maior; Insônia em contexto psiquiátrico selecionado off-label; Agitação psicótica com necessidade de perfil menos extrapiramidal",
    "dose": "adulto: Esquizofrenia: titular gradualmente até 300–800 mg/dia.; bipolar: Depressão bipolar: geralmente 300 mg VO à noite após titulação.; insoniaOffLabel: Insônia off-label: doses baixas são usadas, mas não é primeira escolha pelo risco metabólico e sedativo.; maxDose: Dose máxima usual: 800 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "QUETIAPINA comprimidos de liberação imediata (bula FDA): em insuficiência hepática, iniciar 25 mg VO/dia e titular em incrementos de 25–50 mg/dia conforme resposta/tolerabilidade. Não extrapolar a XR.",
    "commonAdverseEffects": "Sonolência; Tontura; Boca seca; Hipotensão ortostática; Ganho de peso; Constipação; Dislipidemia",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Hiperglicemia e síndrome metabólica; Prolongamento QT em predispostos; Quedas por hipotensão/sedação; Discinesia tardia; Neutropenia rara",
    "adverseEffects": "Sonolência, tontura, boca seca, constipação e ganho de peso.; Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia e maior mortalidade em idosos com psicose da demência.",
    "contraindications": "Hipersensibilidade à quetiapina; Uso com inibidores fortes de CYP3A4 sem ajuste/avaliação; Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade",
    "interactions": "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina e ritonavir: aumentam níveis; Indutores CYP3A4 como carbamazepina, fenitoína e rifampicina: reduzem níveis; Álcool e depressores do SNC: maior sedação; Anti-hipertensivos: maior hipotensão; Fármacos que prolongam QT; Levodopa e agonistas dopaminérgicos: antagonismo",
    "monitoring": "Comprimidos de liberação imediata e SEROQUEL XR têm bulas e esquemas distintos. Não reutilizar automaticamente titulação IR em XR ou tratar uso para insônia off-label como indicação aprovada.; Risco importante de sedação e hipotensão ortostática no início.; Monitorar peso, glicemia/HbA1c, lipídios e pressão arterial.; Não usar apenas como hipnótico de rotina sem avaliar risco-benefício.; Titular lentamente, especialmente em idosos e hepatopatas.; Cuidado com interações por CYP3A4.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia e maior mortalidade em idosos com psicose da demência.",
    "alerts": "Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia e maior mortalidade em idosos com psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=quetiapina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=quetiapina"
  },
  "es": {
    "name": "Quetiapina",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Seroquel; Quetros; Quetipin; Quetiapina EMS; ar: Seroquel; Quetiapina Bagó; Quetiapina Gador; Quetiapina Richmond",
    "presentation": "Comprimido 25 mg; Comprimido 100 mg; Comprimido 200 mg; Comprimido 300 mg; Comprimido XR 50 mg; Comprimido XR 200 mg; Comprimido XR 300 mg",
    "presentations": "Comprimido 25 mg; Comprimido 100 mg; Comprimido 200 mg; Comprimido 300 mg; Comprimido XR 50 mg; Comprimido XR 200 mg; Comprimido XR 300 mg",
    "mechanism": "Antagonista 5HT2A y D2, con forte bloqueio H1 y alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.",
    "pharmacodynamics": "Antagonista 5HT2A y D2, con forte bloqueio H1 y alfa-1; metabólito norquetiapina contribui para efeito antidepressivo.",
    "pharmacokinetics": "Vida média aproximada: quetiapina 6 horas; norquetiapina cerca de 12 horas.",
    "indications": "Esquizofrenia; Transtorno bipolar — mania aguda; Transtorno bipolar — depressão bipolar; Manutenção no transtorno bipolar; Adjuvante no transtorno depressivo maior; Insônia em contexto psiquiátrico selecionado off-label; Agitação psicótica con necessidade de perfil menos extrapiramidal",
    "dose": "adulto: Esquizofrenia: titular gradualmente até 300–800 mg/dia.; bipolar: Depressão bipolar: geralmente 300 mg VO à noite após titulação.; insoniaOffLabel: Insônia off-label: dosiss baixas são usadas, mas no é primeira escolha pelo risco metabólico y sedativo.; maxDose: Dose máxima usual: 800 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "QUETIAPINA comprimidos de liberação imediata (bula FDA): em insuficiência hepática, iniciar 25 mg VO/dia y titular em incrementos de 25–50 mg/dia conforme resposta/tolerabilidade. No extrapolar a XR.",
    "commonAdverseEffects": "Sonolência; Tontura; Boca seca; Hipotensão ortostática; Ganho de peso; Constipação; Dislipidemia",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Hiperglicemia y síndrome metabólica; Prolongamento QT em predispostos; Quedas por hipotensão/sedação; Discinesia tardia; Neutropenia rara",
    "adverseEffects": "Sonolência, tontura, boca seca, constipação y ganho de peso.; Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia y maior mortalidade em idosos con psicose da demência.",
    "contraindications": "Hipersensibilidade à quetiapina; Uso con inibidores fortes de CYP3A4 sem ajuste/avaliação; Demência con corpos de Lewy ou Parkinson grave, salvo extrema necessidade",
    "interactions": "Inibidores fortes de CYP3A4 como cetoconazol, claritromicina y ritonavir: aumentam níveis; Indutores CYP3A4 como carbamazepina, fenitoína y rifampicina: reduzem níveis; Álcool y depressores do SNC: maior sedação; Anti-hipertensivos: maior hipotensão; Fármacos que prolongam QT; Levodopa y agonistas dopaminérgicos: antagonismo",
    "monitoring": "Comprimidos de liberação imediata y SEROQUEL XR têm bulas y esquemas distintos. No reutilizar automaticamente titulação IR em XR ou tratar uso para insônia off-label como indicação aprovada.; Risco importante de sedação y hipotensão ortostática no início.; Monitorar peso, glicemia/HbA1c, lipídios y pressão arterial.; No usar apenas como hipnótico de rotina sem avaliar risco-benefício.; Titular lentamente, especialmente em idosos y hepatopatas.; Cuidado con interações por CYP3A4.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia y maior mortalidade em idosos con psicose da demência.",
    "alerts": "Síndrome metabólica, hipotensão, QT, síndrome neuroléptica maligna, discinesia tardia y maior mortalidade em idosos con psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=quetiapina",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=quetiapina"
  }
};})();
/* GOLD33_SELECTIVE:quetiapina:END */
/* GOLD33_SELECTIVE:risperidona:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="risperidona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:risperidona:"+matches.length);drug=matches[0];}else{drug=db&&db["risperidona"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:risperidona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "069",
    "requiredFieldCount": 33,
    "approvedSha256": "5ca57bc9e149b3613d10e8c8deca51d2bf54f6a6f9e42b6dd145cae4f9dd11b2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Risperidona oral",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Risperdal; Riss; Risperidon; Risperidona EMS; ar: Risperdal; Risperin; Risperidona Bagó; Risperidona Gador",
    "presentation": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 3 mg; Solução oral 1 mg/mL",
    "presentations": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 3 mg; Solução oral 1 mg/mL",
    "mechanism": "Antagonista serotoninérgico 5HT2A e dopaminérgico D2; em doses maiores aumenta bloqueio D2 e risco extrapiramidal.",
    "pharmacodynamics": "Antagonista serotoninérgico 5HT2A e dopaminérgico D2; em doses maiores aumenta bloqueio D2 e risco extrapiramidal.",
    "pharmacokinetics": "Vida média aproximada: risperidona 3–20 h; metabólito ativo 9-hidroxirisperidona 20–24 h.",
    "indications": "Esquizofrenia; Transtorno bipolar — mania aguda; Manutenção no transtorno bipolar; Irritabilidade associada ao transtorno do espectro autista; Agitação psicótica; Transtorno esquizoafetivo; Agressividade grave em casos selecionados",
    "dose": "adulto: Esquizofrenia: iniciar 1–2 mg/dia VO; usual 2–6 mg/dia.; mania: Mania aguda: 1–2 mg/dia; titular conforme resposta.; maxDose: Dose máxima usual: 6 mg/dia; doses maiores aumentam EPS e raramente agregam benefício.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "RISPERIDONA comprimidos VO (bula FDA): se ClCr <30 mL/min em adultos, iniciar 0,5 mg VO a cada 12 h; aumentar com cautela conforme bula e tolerabilidade. Não aplicar este esquema a LAI.",
    "hepaticDose": "RISPERIDONA comprimidos VO (bula FDA): insuficiência hepática grave, Child-Pugh 10–15, em adultos: iniciar 0,5 mg a cada 12 h e titular conforme bula. Um indicador booleano de hepatopatia não determina Child-Pugh.",
    "commonAdverseEffects": "Sonolência; Ganho de peso; Hiperprolactinemia; Acatisia; Parkinsonismo em doses maiores; Tontura; Disfunção sexual",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em pacientes predispostos; Hiperglicemia e dislipidemia; Eventos cerebrovasculares em idosos com demência; Convulsões em predispostos",
    "adverseEffects": "Sonolência, sintomas extrapiramidais, hiperprolactinemia e ganho de peso.; SNM, discinesia tardia, síndrome metabólica, QT e maior mortalidade na demência.",
    "contraindications": "Hipersensibilidade à risperidona ou paliperidona; Demência com corpos de Lewy ou Parkinson grave, salvo extrema necessidade; Histórico de síndrome neuroléptica maligna relacionada ao fármaco",
    "interactions": "Levodopa e agonistas dopaminérgicos: antagonismo; Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool e depressores do SNC; Fármacos que prolongam QT",
    "monitoring": "Bula risperidona VO: dose e faixa etária variam por esquizofrenia, mania e irritabilidade associada ao autismo; disfunção renal/hepática grave exige início específico. Não transferir pauta VO para LAI.; Monitorar peso, glicemia, lipídios e pressão arterial.; Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.; EPS aumentam com doses maiores.; Evitar uso rotineiro em psicose associada à demência.; Considerar ECG se risco cardiovascular ou associação com fármacos que prolongam QT.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, síndrome metabólica, QT e maior mortalidade na demência.",
    "alerts": "SNM, discinesia tardia, síndrome metabólica, QT e maior mortalidade na demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona"
  },
  "es": {
    "name": "Risperidona oral",
    "class": "Antipsicótico atípico",
    "pharmacologicClass": "Antipsicótico atípico",
    "commercialNames": "br: Risperdal; Riss; Risperidon; Risperidona EMS; ar: Risperdal; Risperin; Risperidona Bagó; Risperidona Gador",
    "presentation": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 3 mg; Solução oral 1 mg/mL",
    "presentations": "Comprimido 1 mg; Comprimido 2 mg; Comprimido 3 mg; Solução oral 1 mg/mL",
    "mechanism": "Antagonista serotoninérgico 5HT2A y dopaminérgico D2; em dosiss maiores aumenta bloqueio D2 y risco extrapiramidal.",
    "pharmacodynamics": "Antagonista serotoninérgico 5HT2A y dopaminérgico D2; em dosiss maiores aumenta bloqueio D2 y risco extrapiramidal.",
    "pharmacokinetics": "Vida média aproximada: risperidona 3–20 h; metabólito ativo 9-hidroxirisperidona 20–24 h.",
    "indications": "Esquizofrenia; Transtorno bipolar — mania aguda; Manutenção no transtorno bipolar; Irritabilidade associada ao transtorno do espectro autista; Agitação psicótica; Transtorno esquizoafetivo; Agressividade grave em casos selecionados",
    "dose": "adulto: Esquizofrenia: iniciar 1–2 mg/dia VO; usual 2–6 mg/dia.; mania: Mania aguda: 1–2 mg/dia; titular conforme resposta.; maxDose: Dose máxima usual: 6 mg/dia; dosiss maiores aumentam EPS y raramente agregam benefício.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "RISPERIDONA comprimidos VO (bula FDA): se ClCr <30 mL/min em adultos, iniciar 0,5 mg VO a cada 12 h; aumentar con cautela conforme bula y tolerabilidade. No aplicar este esquema a LAI.",
    "hepaticDose": "RISPERIDONA comprimidos VO (bula FDA): insuficiência hepática grave, Child-Pugh 10–15, em adultos: iniciar 0,5 mg a cada 12 h y titular conforme bula. Um indicador booleano de hepatopatia no determina Child-Pugh.",
    "commonAdverseEffects": "Sonolência; Ganho de peso; Hiperprolactinemia; Acatisia; Parkinsonismo em dosiss maiores; Tontura; Disfunción sexual",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em pacientes predispostos; Hiperglicemia y dislipidemia; Eventos cerebrovasculares em idosos con demência; Convulsões em predispostos",
    "adverseEffects": "Sonolência, sintomas extrapiramidais, hiperprolactinemia y ganho de peso.; SNM, discinesia tardia, síndrome metabólica, QT y maior mortalidade na demência.",
    "contraindications": "Hipersensibilidade à risperidona ou paliperidona; Demência con corpos de Lewy ou Parkinson grave, salvo extrema necessidade; Histórico de síndrome neuroléptica maligna relacionada ao fármaco",
    "interactions": "Levodopa y agonistas dopaminérgicos: antagonismo; Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6; Carbamazepina: pode reduzir níveis; Anti-hipertensivos: maior hipotensão; Álcool y depressores do SNC; Fármacos que prolongam QT",
    "monitoring": "Bula risperidona VO: dosis y faixa etária variam por esquizofrenia, mania y irritabilidade associada ao autismo; disfunción renal/hepática grave exige início específico. No transferir pauta VO para LAI.; Monitorar peso, glicemia, lipídios y pressão arterial.; Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunción sexual.; EPS aumentam con dosiss maiores.; Evitar uso rotineiro em psicose associada à demência.; Considerar ECG se risco cardiovascular ou associação con fármacos que prolongam QT.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, síndrome metabólica, QT y maior mortalidade na demência.",
    "alerts": "SNM, discinesia tardia, síndrome metabólica, QT y maior mortalidade na demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona"
  }
};})();
/* GOLD33_SELECTIVE:risperidona:END */
/* GOLD33_SELECTIVE:risperidona_lai:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="risperidona_lai";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:risperidona_lai:"+matches.length);drug=matches[0];}else{drug=db&&db["risperidona_lai"];if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:risperidona_lai");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "069",
    "requiredFieldCount": 33,
    "approvedSha256": "5ca57bc9e149b3613d10e8c8deca51d2bf54f6a6f9e42b6dd145cae4f9dd11b2",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Risperidona injetável de longa ação",
    "class": "Antipsicótico atípico de depósito",
    "pharmacologicClass": "Antipsicótico atípico de depósito",
    "commercialNames": "br: Risperdal Consta; ar: Risperdal Consta",
    "presentation": "Frasco/seringa 25 mg; Frasco/seringa 37,5 mg; Frasco/seringa 50 mg",
    "presentations": "Frasco/seringa 25 mg; Frasco/seringa 37,5 mg; Frasco/seringa 50 mg",
    "mechanism": "Antagonista D2 e 5HT2A em formulação depot de microesferas, com liberação prolongada.",
    "pharmacodynamics": "Antagonista D2 e 5HT2A em formulação depot de microesferas, com liberação prolongada.",
    "pharmacokinetics": "Liberação prolongada por semanas; administração habitual a cada 14 dias.",
    "indications": "Esquizofrenia em manutenção; Transtorno bipolar em manutenção em alguns protocolos; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Psicose crônica com necessidade de LAI; Transtorno esquizoafetivo em casos selecionados",
    "dose": "adulto: Dose inicial usual: 25 mg IM profunda a cada 2 semanas.; suplementacao: Manter antipsicótico oral por cerca de 3 semanas após a primeira aplicação.; maxDose: Dose máxima usual: 50 mg IM a cada 2 semanas.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "ClCr informado ≥60 mL/min: confirmar tolerância oral e fatores individuais antes de iniciar CONSTA.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Dor no local da injeção; Hiperprolactinemia; Ganho de peso; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Hiperglicemia e dislipidemia; Eventos cerebrovasculares em idosos com demência; Efeito adverso persistente pela formulação depot",
    "adverseEffects": "Reação no local, acatisia, ganho de peso e hiperprolactinemia.; SNM, discinesia tardia, síndrome metabólica, QT e erro de intervalo/via.",
    "contraindications": "Hipersensibilidade à risperidona ou paliperidona; Ausência de tolerância prévia à risperidona/paliperidona; Demência com psicose sem avaliação especializada",
    "interactions": "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6; Carbamazepina: pode reduzir níveis; Levodopa e agonistas dopaminérgicos; Fármacos que prolongam QT; Álcool e depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; RISPERDAL CONSTA (microesferas): cobertura oral por 3 semanas após 1ª aplicação; disfunção renal/hepática requer titulação VO prévia. ClCr não informado deve aparecer como desconhecido, não como 100 mL/min. Não aplicar regras de outros LAI de risperidona.; RISPERDAL CONSTA (microesferas): tolerância oral prévia e cobertura oral por 3 semanas após início, conforme bula desse produto. Não transferir a regra para outros LAI de risperidona.; Confirmar tolerância oral antes de iniciar LAI.; Manter cobertura oral por aproximadamente 3 semanas após primeira aplicação.; Aplicação IM profunda a cada 2 semanas.; Monitorar prolactina, EPS, peso, glicemia e lipídios.; Registrar data de aplicação para evitar falhas no intervalo.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, síndrome metabólica, QT e erro de intervalo/via.",
    "alerts": "SNM, discinesia tardia, síndrome metabólica, QT e erro de intervalo/via.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona+lai",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona+lai"
  },
  "es": {
    "name": "Risperidona injetável de longa ação",
    "class": "Antipsicótico atípico de depósito",
    "pharmacologicClass": "Antipsicótico atípico de depósito",
    "commercialNames": "br: Risperdal Consta; ar: Risperdal Consta",
    "presentation": "Frasco/seringa 25 mg; Frasco/seringa 37,5 mg; Frasco/seringa 50 mg",
    "presentations": "Frasco/seringa 25 mg; Frasco/seringa 37,5 mg; Frasco/seringa 50 mg",
    "mechanism": "Antagonista D2 y 5HT2A em formulação depot de microesferas, con liberação prolongada.",
    "pharmacodynamics": "Antagonista D2 y 5HT2A em formulação depot de microesferas, con liberação prolongada.",
    "pharmacokinetics": "Liberação prolongada por semanas; administração habitual a cada 14 dias.",
    "indications": "Esquizofrenia em manutenção; Transtorno bipolar em manutenção em alguns protocolos; Prevenção de recaídas psicóticas; Baixa adesão ao tratamento oral; Psicose crônica con necessidade de LAI; Transtorno esquizoafetivo em casos selecionados",
    "dose": "adulto: Dose inicial usual: 25 mg IM profunda a cada 2 semanas.; suplementacao: Manter antipsicótico oral por cerca de 3 semanas após a primeira aplicação.; maxDose: Dose máxima usual: 50 mg IM a cada 2 semanas.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "ClCr informado ≥60 mL/min: confirmar tolerância oral y fatores individuais antes de iniciar CONSTA.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Dor no local da injeção; Hiperprolactinemia; Ganho de peso; Acatisia; Parkinsonismo; Sonolência",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT em predispostos; Hiperglicemia y dislipidemia; Eventos cerebrovasculares em idosos con demência; Efeito adverso persistente pela formulação depot",
    "adverseEffects": "Reação no local, acatisia, ganho de peso y hiperprolactinemia.; SNM, discinesia tardia, síndrome metabólica, QT y erro de intervalo/via.",
    "contraindications": "Hipersensibilidade à risperidona ou paliperidona; Ausência de tolerância prévia à risperidona/paliperidona; Demência con psicose sem avaliação especializada",
    "interactions": "Fluoxetina/paroxetina: podem aumentar níveis por CYP2D6; Carbamazepina: pode reduzir níveis; Levodopa y agonistas dopaminérgicos; Fármacos que prolongam QT; Álcool y depressores do SNC",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; RISPERDAL CONSTA (microesferas): cobertura oral por 3 semanas após 1ª aplicação; disfunción renal/hepática requer titulação VO prévia. ClCr no informado deve aparecer como desconhecido, no como 100 mL/min. No aplicar regras de outros LAI de risperidona.; RISPERDAL CONSTA (microesferas): tolerância oral prévia y cobertura oral por 3 semanas após início, conforme bula desse produto. No transferir a regra para outros LAI de risperidona.; Confirmar tolerância oral antes de iniciar LAI.; Manter cobertura oral por aproximadamente 3 semanas após primeira aplicação.; Aplicação IM profunda a cada 2 semanas.; Monitorar prolactina, EPS, peso, glicemia y lipídios.; Registrar data de aplicação para evitar falhas no intervalo.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "SNM, discinesia tardia, síndrome metabólica, QT y erro de intervalo/via.",
    "alerts": "SNM, discinesia tardia, síndrome metabólica, QT y erro de intervalo/via.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona+lai",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=risperidona+lai"
  }
};})();
/* GOLD33_SELECTIVE:risperidona_lai:END */
/* GOLD33_SELECTIVE:sulpirida:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="sulpirida";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:sulpirida:"+matches.length);drug=matches[0];}else{drug=db&&db["sulpirida"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="sulpirida";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:sulpirida:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:sulpirida");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "074",
    "requiredFieldCount": 33,
    "approvedSha256": "e9b3ea066f53ad90d7ad404876665df335ef2228c99da56d6c095db44a62ce95",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Sulpirida",
    "class": "Antipsicótico benzamídico antagonista dopaminérgico",
    "pharmacologicClass": "Antipsicótico benzamídico antagonista dopaminérgico",
    "commercialNames": "br: Dogmatil; Equilid; Sulpirida; ar: Dogmatil; Sulpirida; Sulpirida Gador",
    "presentation": "Cápsula/comprimido 50 mg; Comprimido 200 mg; Solução oral/gotas; Ampola 100 mg/2 mL",
    "presentations": "Cápsula/comprimido 50 mg; Comprimido 200 mg; Solução oral/gotas; Ampola 100 mg/2 mL",
    "mechanism": "Antagonista seletivo dopaminérgico D2/D3, com ação antipsicótica em doses altas e efeitos dopaminérgicos diferenciados em doses baixas.",
    "pharmacodynamics": "Antagonista seletivo dopaminérgico D2/D3, com ação antipsicótica em doses altas e efeitos dopaminérgicos diferenciados em doses baixas.",
    "pharmacokinetics": "Vida média aproximada: 6–9 horas; eliminação principalmente renal.",
    "indications": "Esquizofrenia; Psicose aguda; Psicose crônica; Sintomas negativos em esquizofrenia em casos selecionados; Ansiedade somatizada em doses baixas; Vertigem/labirintopatias em alguns protocolos; Dispepsia funcional ou sintomas gastrointestinais funcionais em alguns países",
    "dose": "adulto: Psicose/esquizofrenia: 400–800 mg/dia VO em doses divididas; titular conforme resposta.; doseBaixa: Sintomas ansiosos/somatização/vertigem: doses baixas, geralmente 50–150 mg/dia conforme indicação local.; maxDose: Dose máxima usual em psicose: até 1200 mg/dia em casos selecionados.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "ClCr informado ≥60 mL/min: verificar produto, idade e indicação antes da seleção da dose.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Hiperprolactinemia; Galactorreia; Amenorreia; Disfunção sexual; Sintomas extrapiramidais; Ganho de peso",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Prolongamento QT e arritmias; Discinesia tardia; Convulsões em predispostos; Acúmulo e toxicidade em insuficiência renal",
    "adverseEffects": "Sonolência, hiperprolactinemia, sintomas extrapiramidais e ganho de peso.; QT/torsades, síndrome neuroléptica maligna, discinesia tardia e agranulocitose.",
    "contraindications": "Hipersensibilidade à sulpirida ou benzamidas; Feocromocitoma; Tumores prolactino-dependentes; Doença de Parkinson grave, salvo indicação especializada; QT prolongado significativo ou arritmias graves",
    "interactions": "Levodopa e agonistas dopaminérgicos: antagonismo; Fármacos que prolongam QT; Álcool e depressores do SNC; Anti-hipertensivos: maior hipotensão; Lítio: possível neurotoxicidade com antipsicóticos",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; Sulpirida comprimidos 200 mg: sem ClCr válido não afirmar função renal normal. Ajustes dependem de função renal, idade e apresentação; não extrapolar a solução nem usar dose adulta como dose pediátrica.; SmPC 200 mg comprimidos: experiência insuficiente em menores de 14 anos; idosos com disfunção renal requerem redução individualizada. Não extrapolar outras indicações ou solução a este produto.; Ajustar dose pela função renal.; Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunção sexual.; Considerar ECG em pacientes com risco de QT.; Evitar em tumores prolactino-dependentes.; Monitorar sintomas extrapiramidais.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia e agranulocitose.",
    "alerts": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia e agranulocitose.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sulpirida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sulpirida"
  },
  "es": {
    "name": "Sulpirida",
    "class": "Antipsicótico benzamídico antagonista dopaminérgico",
    "pharmacologicClass": "Antipsicótico benzamídico antagonista dopaminérgico",
    "commercialNames": "br: Dogmatil; Equilid; Sulpirida; ar: Dogmatil; Sulpirida; Sulpirida Gador",
    "presentation": "Cápsula/comprimido 50 mg; Comprimido 200 mg; Solução oral/gotas; Ampola 100 mg/2 mL",
    "presentations": "Cápsula/comprimido 50 mg; Comprimido 200 mg; Solução oral/gotas; Ampola 100 mg/2 mL",
    "mechanism": "Antagonista seletivo dopaminérgico D2/D3, con ação antipsicótica em dosiss altas y efeitos dopaminérgicos diferenciados em dosiss baixas.",
    "pharmacodynamics": "Antagonista seletivo dopaminérgico D2/D3, con ação antipsicótica em dosiss altas y efeitos dopaminérgicos diferenciados em dosiss baixas.",
    "pharmacokinetics": "Vida média aproximada: 6–9 horas; eliminação principalmente renal.",
    "indications": "Esquizofrenia; Psicose aguda; Psicose crônica; Sintomas negativos em esquizofrenia em casos selecionados; Ansiedade somatizada em dosiss baixas; Vertigem/labirintopatias em alguns protocolos; Dispepsia funcional ou sintomas gastrointestinais funcionais em alguns países",
    "dose": "adulto: Psicose/esquizofrenia: 400–800 mg/dia VO em dosiss divididas; titular conforme resposta.; dosisBaixa: Sintomas ansiosos/somatização/vertigem: dosiss baixas, geralmente 50–150 mg/dia conforme indicação local.; maxDose: Dose máxima usual em psicose: até 1200 mg/dia em casos selecionados.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "ClCr informado ≥60 mL/min: verificar produto, idade y indicação antes da seleção da dosis.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Sonolência; Hiperprolactinemia; Galactorreia; Amenorreia; Disfunción sexual; Sintomas extrapiramidais; Ganho de peso",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Prolongamento QT y arritmias; Discinesia tardia; Convulsões em predispostos; Acúmulo y toxicidade em insuficiência renal",
    "adverseEffects": "Sonolência, hiperprolactinemia, sintomas extrapiramidais y ganho de peso.; QT/torsades, síndrome neuroléptica maligna, discinesia tardia y agranulocitose.",
    "contraindications": "Hipersensibilidade à sulpirida ou benzamidas; Feocromocitoma; Tumores prolactino-dependentes; Doença de Parkinson grave, salvo indicação especializada; QT prolongado significativo ou arritmias graves",
    "interactions": "Levodopa y agonistas dopaminérgicos: antagonismo; Fármacos que prolongam QT; Álcool y depressores do SNC; Anti-hipertensivos: maior hipotensão; Lítio: possível neurotoxicidade con antipsicóticos",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; Sulpirida comprimidos 200 mg: sem ClCr válido no afirmar función renal normal. Ajustes dependem de función renal, idade y apresentação; no extrapolar a solución nem usar dosis adulta como dosis pediátrica.; SmPC 200 mg comprimidos: experiência insuficiente em menores de 14 anos; idosos con disfunción renal requerem redução individualizada. No extrapolar outras indicações ou solución a este produto.; Ajustar dosis pela función renal.; Monitorar prolactina se galactorreia, amenorreia, infertilidade ou disfunción sexual.; Considerar ECG em pacientes con risco de QT.; Evitar em tumores prolactino-dependentes.; Monitorar sintomas extrapiramidais.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia y agranulocitose.",
    "alerts": "QT/torsades, síndrome neuroléptica maligna, discinesia tardia y agranulocitose.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sulpirida",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sulpirida"
  }
};})();
/* GOLD33_SELECTIVE:sulpirida:END */
/* GOLD33_SELECTIVE:tiotixeno:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="tiotixeno";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotixeno:"+matches.length);drug=matches[0];}else{drug=db&&db["tiotixeno"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="tiotixeno";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:tiotixeno:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:tiotixeno");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "077",
    "requiredFieldCount": 33,
    "approvedSha256": "ce11000d7409bd2f6564d0db46214d97e19a6b5303cba03406aa668caf890a5b",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "LIBERADA_COM_RESTRICOES_GRANULARES",
    "ownerPublicationAuthorization": "lote002-owner-confirmed"
  },
  "pt": {
    "name": "Tiotixeno",
    "class": "Antipsicótico típico tioxanteno",
    "pharmacologicClass": "Antipsicótico típico tioxanteno",
    "commercialNames": "br: Navane; Tiotixeno; ar: Navane; Tiotixeno",
    "presentation": "Cápsula 1 mg; Cápsula 2 mg; Cápsula 5 mg; Cápsula 10 mg",
    "presentations": "Cápsula 1 mg; Cápsula 2 mg; Cápsula 5 mg; Cápsula 10 mg",
    "mechanism": "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.",
    "pharmacodynamics": "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.",
    "pharmacokinetics": "Vida média aproximada: 20–40 horas.",
    "indications": "Esquizofrenia; Psicose crônica; Psicose aguda em casos selecionados; Agitação psicótica; Transtorno esquizoafetivo em casos selecionados; Manutenção antipsicótica em pacientes previamente respondedores",
    "dose": "adulto: Esquizofrenia: iniciar 2 mg VO 3x/dia ou 5 mg VO 2x/dia; titular conforme resposta.; manutencao: Manutenção: geralmente 15–30 mg/dia em doses divididas.; maxDose: Dose máxima usual: 60 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação e formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Acatisia; Parkinsonismo medicamentoso; Distonia aguda; Sonolência; Boca seca; Hipotensão ortostática",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT e arritmias; Convulsões em predispostos; Depressão importante do SNC se associado a sedativos",
    "adverseEffects": "Sonolência, boca seca, constipação, acatisia e parkinsonismo.; Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em idosos com psicose da demência.",
    "contraindications": "Hipersensibilidade ao tiotixeno ou tioxantenos; Depressão grave do SNC ou coma; Doença de Parkinson grave; Demência com corpos de Lewy, salvo extrema necessidade; QT prolongado significativo",
    "interactions": "Álcool e depressores do SNC; Opioides e benzodiazepínicos; Fármacos que prolongam QT; Levodopa e agonistas dopaminérgicos; Anti-hipertensivos: maior hipotensão",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda não possui dose pediátrica estruturada e validada para produto e indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica e avaliação especializada.; Tiotixeno cápsulas: bula citada não recomenda uso em menores de 12 anos pela falta de segurança estabelecida. Confirmar apresentação e idade; não gerar esquema pediátrico a partir da dose adulta.; Bula Thiothixene cápsulas: uso em menores de 12 anos não recomendado por segurança não estabelecida. Não inferir dose pediátrica a partir da adulta.; Monitorar sintomas extrapiramidais desde o início.; Considerar ECG em pacientes com risco cardiovascular ou QT.; Evitar em idosos com demência quando possível.; Evitar associação com álcool e outros sedativos.; Reduzir gradualmente se uso prolongado.",
    "administration": "Usar somente via e formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição e estabilidade; não inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal e bula aplicável; não usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção e risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades e função orgânica.",
    "patientEducation": "Orientar adesão, administração correta e sinais de alarme.",
    "clinicalPearls": "Formulações e vias não são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação e jurisdição.",
    "safetyFlags": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em idosos com psicose da demência.",
    "alerts": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose e maior mortalidade em idosos com psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotixeno",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotixeno"
  },
  "es": {
    "name": "Tiotixeno",
    "class": "Antipsicótico típico tioxanteno",
    "pharmacologicClass": "Antipsicótico típico tioxanteno",
    "commercialNames": "br: Navane; Tiotixeno; ar: Navane; Tiotixeno",
    "presentation": "Cápsula 1 mg; Cápsula 2 mg; Cápsula 5 mg; Cápsula 10 mg",
    "presentations": "Cápsula 1 mg; Cápsula 2 mg; Cápsula 5 mg; Cápsula 10 mg",
    "mechanism": "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.",
    "pharmacodynamics": "Antagonista dopaminérgico D2, reduzindo sintomas psicóticos positivos; possui risco extrapiramidal relevante.",
    "pharmacokinetics": "Vida média aproximada: 20–40 horas.",
    "indications": "Esquizofrenia; Psicose crônica; Psicose aguda em casos selecionados; Agitação psicótica; Transtorno esquizoafetivo em casos selecionados; Manutenção antipsicótica em pacientes previamente respondedores",
    "dose": "adulto: Esquizofrenia: iniciar 2 mg VO 3x/dia ou 5 mg VO 2x/dia; titular conforme resposta.; manutencao: Manutenção: geralmente 15–30 mg/dia em dosiss divididas.; maxDose: Dose máxima usual: 60 mg/dia.",
    "pediatricDose": "Automação pediátrica bloqueada sem tabela completa por idade, peso, indicação y formulação.",
    "renalDose": "Sem ajuste renal habitual.",
    "hepaticDose": "Sem ajuste hepático habitual.",
    "commonAdverseEffects": "Acatisia; Parkinsonismo medicamentoso; Distonia aguda; Sonolência; Boca seca; Hipotensão ortostática",
    "dangerousAdverseEffects": "Síndrome neuroléptica maligna; Discinesia tardia; Prolongamento QT y arritmias; Convulsões em predispostos; Depressão importante do SNC se associado a sedativos",
    "adverseEffects": "Sonolência, boca seca, constipação, acatisia y parkinsonismo.; Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose y maior mortalidade em idosos con psicose da demência.",
    "contraindications": "Hipersensibilidade ao tiotixeno ou tioxantenos; Depressão grave do SNC ou coma; Doença de Parkinson grave; Demência con corpos de Lewy, salvo extrema necessidade; QT prolongado significativo",
    "interactions": "Álcool y depressores do SNC; Opioides y benzodiazepínicos; Fármacos que prolongam QT; Levodopa y agonistas dopaminérgicos; Anti-hipertensivos: maior hipotensão",
    "monitoring": "SEGURANÇA PEDIÁTRICA: esta ficha ainda no possui dosis pediátrica estruturada y validada para produto y indicação. Nunca extrapolar a posologia adulta para menores de 18 anos; confirmar bula específica y avaliação especializada.; Tiotixeno cápsulas: bula citada no recomenda uso em menores de 12 anos pela falta de seguridad estabelecida. Confirmar apresentação y idade; no gerar esquema pediátrico a partir da dosis adulta.; Bula Thiothixene cápsulas: uso em menores de 12 anos no recomendado por seguridad no estabelecida. No inferir dosis pediátrica a partir da adulta.; Monitorar sintomas extrapiramidais desde o início.; Considerar ECG em pacientes con risco cardiovascular ou QT.; Evitar em idosos con demência quando possível.; Evitar associação con álcool y outros sedativos.; Reduzir gradualmente se uso prolongado.",
    "administration": "Usar somente via y formulação documentadas; respeitar técnica específica.",
    "preparation": "Confirmar concentração, reconstituição, diluição y estabilidade; no inferir.",
    "infusionProtocol": "Aplicável somente às apresentações parenterais documentadas; manter bloqueado sem protocolo completo.",
    "pregnancy": "Avaliar risco fetal y bula aplicável; no usar linguagem categórica sem fonte.",
    "lactation": "Avaliar excreção y risco-benefício conforme fonte.",
    "specialPopulations": "Individualizar por idade, comorbidades y función orgânica.",
    "patientEducation": "Orientar adesão, administração correta y sinais de alarme.",
    "clinicalPearls": "Formulações y vias no são automaticamente intercambiáveis.",
    "guidelineRecommendations": "Aplicar diretriz oficial da indicação y jurisdição.",
    "safetyFlags": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose y maior mortalidade em idosos con psicose da demência.",
    "alerts": "Síndrome neuroléptica maligna, discinesia tardia, QT/arrítmia, agranulocitose y maior mortalidade em idosos con psicose da demência.; revisão clínica obrigatória.",
    "references": [
      "Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotixeno",
      "Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files"
    ],
    "ref": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tiotixeno"
  }
};})();
/* GOLD33_SELECTIVE:tiotixeno:END */
/* GOLD33_SELECTIVE:ziprasidona:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="ziprasidona";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:ziprasidona:"+matches.length);drug=matches[0];}else{drug=db&&db["ziprasidona"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="ziprasidona";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:ziprasidona:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:ziprasidona");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "090",
    "requiredFieldCount": 33,
    "approvedSha256": "866ce87ad26117645b0eb2df7da1d6ac28cde2b4f89b6efdc9f70789277e5033",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed",
    "packageRestrictions": {
      "clinical_exceptions_from_reviewer": [],
      "restricoes_granulares_preservadas": [
        "Fontes EUA/Reino Unido nao comprovam registro, disponibilidade ou equivalencia Brasil/Argentina.",
        "Nao converter doses entre apresentacoes, vias, concentracoes, acetato/depot, liberacao imediata/prolongada ou jurisdicoes.",
        "Dose pediatrica, calculo em mL/gotas e ajustes nao expressamente documentados continuam bloqueados conforme cada ficha.",
        "Zuclopentixol: bloquear conversao automatica entre comprimido, acetato IM e decanoato IM.",
        "Adenosina: escopo e bolus IV rapido para TSV; nao e protocolo de infusao.",
        "Ziprasidona: escopo oral; IM exige fonte e esquema proprios."
      ],
      "technical_pending": [
        "INTEGRACAO_TECNICA=NAO_INICIADA",
        "PUBLICACAO=BLOQUEADA",
        "SAFE_SYNC_MECHANISM=PENDENTE_DE_IMPLEMENTACAO",
        "Nenhum commit, push, merge, deploy ou alteracao de repositorio foi realizado."
      ]
    }
  },
  "pt": {
    "name": "Ziprasidona",
    "class": "Antipsicotico atipico",
    "pharmacologicClass": "Antagonista dopaminergico/serotoninergico",
    "commercialNames": "Nome comercial nao revisado; escopo e capsula oral generica",
    "presentation": "Capsulas orais",
    "presentations": "20, 40, 60 e 80 mg; produto EUA. IM excluida desta ficha.",
    "mechanism": "Antagonismo de receptores D2 e 5-HT2A, com outras afinidades receptoras descritas em bula.",
    "pharmacodynamics": "Efeito antipsicotico; pode prolongar QT/QTc. Absorcao aumenta ate duas vezes com alimento.",
    "pharmacokinetics": "Administrar com alimento para exposicao adequada; metabolizacao inclui CYP3A4, conforme bula.",
    "indications": "Esquizofrenia; episodios maniacos/mistos agudos do transtorno bipolar I; manutencao bipolar I como adjuvante a litio ou valproato.",
    "dose": "Esquizofrenia: iniciar 20 mg VO 2x/dia com alimento; ajustar ate 80 mg 2x/dia. Mania/misto bipolar I: 40 mg 2x/dia, podendo 60-80 mg 2x/dia no dia 2 conforme tolerancia.",
    "pediatricDose": "Seguranca e eficacia pediatrica nao estabelecidas na bula revisada.",
    "renalDose": "Sem ajuste oral especifico nesta fonte; avaliar comorbidades e medicacao concomitante.",
    "hepaticDose": "Exposicao pode aumentar em disfuncao hepatica; requer avaliacao clinica individual, sem percentual universal nesta ficha.",
    "commonAdverseEffects": "Sonolencia, tontura, acatisia, sintomas extrapiramidais, astenia, vomito e alteracao visual.",
    "dangerousAdverseEffects": "Prolongamento QT/arrtmia, SNM, DRESS/SCAR, discinesia tardia, hiperglicemia e AVC/mortalidade em idosos com psicose relacionada a demencia.",
    "adverseEffects": "Hipotensao ortostatica, quedas, leucopenia/neutropenia, convulsoes, disfagia, priapismo e hiperprolactinemia.",
    "contraindications": "QT prolongado conhecido, IAM agudo recente, insuficiencia cardiaca descompensada, fármacos que prolongam QT e hipersensibilidade.",
    "interactions": "Nao associar a outros fármacos com QT prolongado; revisar inibidores/indutores e depressores SNC.",
    "monitoring": "Risco QT (historia, eletrolitos, ECG quando indicado), peso, glicemia, lipidos, sintomas extrapiramidais e hemograma em pacientes de risco.",
    "administration": "VO com alimento; nao substituir por IM nem omitir a condicao alimentar.",
    "preparation": "Nao aplicavel a esta apresentacao oral; nao inferir preparo parenteral.",
    "infusionProtocol": "Nao aplicavel a esta apresentacao; nao converter para esquema de infusao.",
    "pregnancy": "Exposicao no terceiro trimestre pode causar sintomas extrapiramidais/abstinencia neonatal; avaliar beneficio-risco.",
    "lactation": "Requer avaliacao especializada; nao foi validada recomendacao de uso nesta ficha.",
    "specialPopulations": "Nao aprovada para psicose relacionada a demencia; maior cautela cardiovascular e em predisposicao a QT.",
    "patientEducation": "Tomar com alimento; nao dirigir ate conhecer o efeito; procurar atendimento por sincope, palpitacao, febre/rigidez ou rash.",
    "clinicalPearls": "A obrigatoriedade de alimento e o risco QT sao elementos centrais; o esquema oral nao valida ziprasidona IM.",
    "guidelineRecommendations": "Nenhuma diretriz terapeutica adicional foi validada neste pacote. O revisor deve confrontar com protocolo local e diretriz vigente antes de uso clinico.",
    "safetyFlags": "ALTO RISCO CARDIACO: revisar QT, eletrolitos e co-medicacoes antes de prescrever.",
    "alerts": "Candidato documental para revisao humana. Fonte estrangeira nao comprova registro, disponibilidade ou equivalencia no Brasil ou Argentina.",
    "references": [
      "DailyMed (EUA): ziprasidone hydrochloride capsules 20, 40, 60 e 80 mg, pagina atualizada em 12 jan 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c227a618-1274-2b4d-e053-2a95a90a74fb"
    ],
    "ref": "DailyMed (EUA): ziprasidone hydrochloride capsules 20, 40, 60 e 80 mg, pagina atualizada em 12 jan 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c227a618-1274-2b4d-e053-2a95a90a74fb"
  },
  "es": {
    "name": "Ziprasidona",
    "class": "Antipsicotico atipico",
    "pharmacologicClass": "Antagonista dopaminergico/serotoninergico",
    "commercialNames": "Nombre comercial no revisado; el alcance es capsula oral generica",
    "presentation": "Capsulas orales",
    "presentations": "20, 40, 60 y 80 mg; producto EUA. IM excluida de esta ficha.",
    "mechanism": "Antagonismo de receptores D2 y 5-HT2A, con otras afinidades receptoras descritas en el rotulo.",
    "pharmacodynamics": "Efecto antipsicotico; puede prolongar QT/QTc. La absorcion aumenta hasta dos veces con alimento.",
    "pharmacokinetics": "Administrar con alimento para exposicion adecuada; el metabolismo incluye CYP3A4, conforme al rotulo.",
    "indications": "Esquizofrenia; episodios maniacos/mixtos agudos del trastorno bipolar I; mantenimiento bipolar I como adyuvante de litio o valproato.",
    "dose": "Esquizofrenia: iniciar 20 mg VO 2 veces/dia con alimentos; ajustar hasta 80 mg 2 veces/dia. Mania/mixto bipolar I: 40 mg 2 veces/dia, pudiendo 60-80 mg 2 veces/dia el dia 2 segun tolerancia.",
    "pediatricDose": "La seguridad y eficacia pediatrica no estan establecidas en el rotulo revisado.",
    "renalDose": "Sin ajuste oral especifico en esta fuente; evaluar comorbilidades y medicacion concomitante.",
    "hepaticDose": "La exposicion puede aumentar en disfuncion hepatica; requiere evaluacion clinica individual, sin porcentaje universal en esta ficha.",
    "commonAdverseEffects": "Somnolencia, mareo, acatisia, sintomas extrapiramidales, astenia, vomitos y alteracion visual.",
    "dangerousAdverseEffects": "Prolongacion QT/arritmia, SNM, DRESS/SCAR, discinesia tardia, hiperglucemia y ACV/mortalidad en ancianos con psicosis relacionada con demencia.",
    "adverseEffects": "Hipotension ortostatica, caidas, leucopenia/neutropenia, convulsiones, disfagia, priapismo e hiperprolactinemia.",
    "contraindications": "QT prolongado conocido, IAM agudo reciente, insuficiencia cardiaca descompensada, farmacos que prolongan QT e hipersensibilidad.",
    "interactions": "No asociar con otros farmacos con QT prolongado; revisar inhibidores/inductores y depresores del SNC.",
    "monitoring": "Riesgo QT (historia, electrolitos, ECG cuando corresponde), peso, glucemia, lipidos, sintomas extrapiramidales y hemograma en pacientes de riesgo.",
    "administration": "VO con alimentos; no sustituir por IM ni omitir la condicion alimentaria.",
    "preparation": "No aplicable a esta presentacion oral; no inferir preparacion parenteral.",
    "infusionProtocol": "No aplicable a esta presentacion; no convertir a esquema de infusion.",
    "pregnancy": "La exposicion en el tercer trimestre puede causar sintomas extrapiramidales/abstinencia neonatal; evaluar beneficio-riesgo.",
    "lactation": "Requiere evaluacion especializada; no se valido recomendacion de uso en esta ficha.",
    "specialPopulations": "No aprobada para psicosis relacionada con demencia; mayor precaucion cardiovascular y ante predisposicion a QT.",
    "patientEducation": "Tomar con alimentos; no conducir hasta conocer el efecto; buscar atencion por sincope, palpitaciones, fiebre/rigidez o erupcion.",
    "clinicalPearls": "La obligacion de alimento y el riesgo QT son elementos centrales; el esquema oral no valida ziprasidona IM.",
    "guidelineRecommendations": "No se valido una guia terapeutica adicional en este paquete. El revisor debe confrontar con protocolo local y guia vigente antes de uso clinico.",
    "safetyFlags": "ALTO RIESGO CARDIACO: revisar QT, electrolitos y comedicaciones antes de prescribir.",
    "alerts": "Candidato documental para revision humana. La fuente extranjera no prueba registro, disponibilidad ni equivalencia en Brasil o Argentina.",
    "references": [
      "DailyMed (EUA): ziprasidone hydrochloride capsules 20, 40, 60 e 80 mg, pagina atualizada em 12 jan 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c227a618-1274-2b4d-e053-2a95a90a74fb"
    ],
    "ref": "DailyMed (EUA): ziprasidone hydrochloride capsules 20, 40, 60 e 80 mg, pagina atualizada em 12 jan 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c227a618-1274-2b4d-e053-2a95a90a74fb"
  }
};})();
/* GOLD33_SELECTIVE:ziprasidona:END */
/* GOLD33_SELECTIVE:zuclopentixol:START */
;(function(){var db=window.PSICOFARMACOS_DRUGS_DB,drug;if(Array.isArray(db)){var matches=db.filter(function(item){return item&&item.id==="zuclopentixol";});if(matches.length!==1)throw new Error("GOLD33_CANONICAL_CARDINALITY:zuclopentixol:"+matches.length);drug=matches[0];}else{drug=db&&db["zuclopentixol"];if(!drug&&db){var keys=Object.keys(db).filter(function(key){return key.toLowerCase()==="zuclopentixol";});if(keys.length>1)throw new Error("GOLD33_CANONICAL_CARDINALITY:zuclopentixol:"+keys.length);if(keys.length===1)drug=db[keys[0]];}if(!drug)throw new Error("GOLD33_MISSING_CANONICAL:zuclopentixol");}drug.mcGoldClinicalV1={
  "meta": {
    "schema": "mc-gold-clinical-v1",
    "lote": "090",
    "requiredFieldCount": 33,
    "approvedSha256": "866ce87ad26117645b0eb2df7da1d6ac28cde2b4f89b6efdc9f70789277e5033",
    "calculationAuthorized": false,
    "publicationAuthorized": true,
    "clinicalPackagePublicationState": "BLOQUEADA",
    "ownerPublicationAuthorization": "lote002-owner-confirmed",
    "packageRestrictions": {
      "clinical_exceptions_from_reviewer": [],
      "restricoes_granulares_preservadas": [
        "Fontes EUA/Reino Unido nao comprovam registro, disponibilidade ou equivalencia Brasil/Argentina.",
        "Nao converter doses entre apresentacoes, vias, concentracoes, acetato/depot, liberacao imediata/prolongada ou jurisdicoes.",
        "Dose pediatrica, calculo em mL/gotas e ajustes nao expressamente documentados continuam bloqueados conforme cada ficha.",
        "Zuclopentixol: bloquear conversao automatica entre comprimido, acetato IM e decanoato IM.",
        "Adenosina: escopo e bolus IV rapido para TSV; nao e protocolo de infusao.",
        "Ziprasidona: escopo oral; IM exige fonte e esquema proprios."
      ],
      "technical_pending": [
        "INTEGRACAO_TECNICA=NAO_INICIADA",
        "PUBLICACAO=BLOQUEADA",
        "SAFE_SYNC_MECHANISM=PENDENTE_DE_IMPLEMENTACAO",
        "Nenhum commit, push, merge, deploy ou alteracao de repositorio foi realizado."
      ]
    }
  },
  "pt": {
    "name": "Zuclopentixol",
    "class": "Antipsicotico tipico",
    "pharmacologicClass": "Tioxanteno; antagonista dopaminergico D2",
    "commercialNames": "Clopixol, Clopixol Acuphase e Clopixol Depot (produtos-fonte UK)",
    "presentation": "Comprimidos orais; solucao IM de acetato; solucao IM depot de decanoato",
    "presentations": "Comprimido 2 mg (fonte citada); acetato IM e decanoato IM 200 mg/mL sao formulacoes distintas.",
    "mechanism": "Antagonismo D2, com atividade em receptores serotoninergicos, alfa-adrenergicos e histaminicos; produz efeito antipsicotico/sedativo.",
    "pharmacodynamics": "Controla sintomas psicoticos; pode causar sintomas extrapiramidais, sedacao e hipotensao.",
    "pharmacokinetics": "Acetato IM e curta acao; decanoato IM e deposito de acao prolongada. A farmacocinetica determina intervalos distintos e impede conversao direta.",
    "indications": "Comprimidos: psicoses/esquizofrenia conforme SmPC. Acetato IM: fase aguda de agitacao psicotica. Decanoato: manutencao. Confirmar indicacao e rotulo local.",
    "dose": "NAO UNIFICAR. Comprimidos, acetato IM e decanoato IM exigem seus proprios esquemas e titulação no SmPC; este PDF nao autoriza conversao entre produtos.",
    "pediatricDose": "Nao recomendada para menores; seguranca/eficacia pediatrica nao estabelecida nos SmPCs citados.",
    "renalDose": "Nao ha esquema universal de ajuste confirmado nesta sintese; usar avaliacao clinica e SmPC especifico.",
    "hepaticDose": "Usar cautela e menor dose inicial/titulacao lenta em hepatopatia; confirmar produto e gravidade.",
    "commonAdverseEffects": "Sedacao, boca seca, constipacao, tontura, acatisia, parkinsonismo, tremor e hipotensao ortostatica.",
    "dangerousAdverseEffects": "SNM, discinesia tardia, QT/arritmias, convulsoes, tromboembolismo venoso, agranulocitose e AVC/mortalidade em demencia.",
    "adverseEffects": "Hiperprolactinemia, disfuncao sexual, aumento de peso, alteracoes termorregulatorias e fotossensibilidade.",
    "contraindications": "Coma, depressao aguda por alcool/barbituricos/opioides, colapso circulatorio, discrasias sanguineas e hipersensibilidade; confirmar cada SmPC.",
    "interactions": "Alcool e depressores SNC aumentam sedacao; fármacos QT, levodopa/agonistas dopaminergicos, anti-hipertensivos e medicamentos que alteram eletrolitos exigem revisao.",
    "monitoring": "Estado mental, sintomas extrapiramidais, PA, ECG/riscos QT, eletrolitos, peso/metabolismo e hemograma quando indicado.",
    "administration": "Comprimido por VO; acetato e decanoato exclusivamente IM profunda, cada um com produto e tecnica propria.",
    "preparation": "Confirmar no SmPC a concentracao e tecnica do produto IM; nao misturar, diluir ou usar via IV.",
    "infusionProtocol": "NAO APLICAVEL: produtos IM, nao por infusao IV.",
    "pregnancy": "Uso no fim da gestacao pode causar sintomas extrapiramidais/abstinencia no RN; avaliar risco-beneficio.",
    "lactation": "Pode ser excretado no leite; exigir avaliacao especializada e fonte regional.",
    "specialPopulations": "Idosos com demencia nao devem receber como uso rotineiro; cautela em doenca cardiovascular, Parkinson e epilepsia.",
    "patientEducation": "Evitar alcool e dirigir ate conhecer efeito; buscar ajuda por febre/rigidez, desmaio, movimentos involuntarios ou dispneia/dor de perna.",
    "clinicalPearls": "O erro critico e confundir acetato IM de crise com decanoato depot. A troca exige plano especializado, nao conversao automatica.",
    "guidelineRecommendations": "Nenhuma diretriz terapeutica adicional foi validada neste pacote. O revisor deve confrontar com protocolo local e diretriz vigente antes de uso clinico.",
    "safetyFlags": "ALTO RISCO DE FORMULACAO: bloquear qualquer conversao oral-IM, acetato-decanoato ou IM-IV sem prescricao e SmPC do produto.",
    "alerts": "Candidato documental para revisao humana. Fonte estrangeira nao comprova registro, disponibilidade ou equivalencia no Brasil ou Argentina.",
    "references": [
      "electronic Medicines Compendium / SmPC (Reino Unido): Clopixol tablets 2 mg; Clopixol Acuphase (zuclopenthixol acetate) injection; Clopixol Depot (zuclopenthixol decanoate) 200 mg/mL. https://www.medicines.org.uk/emc/product/994/smpc | https://www.medicines.org.uk/emc/product/993/smpc | https://www.medicines.org.uk/emc/product/6414/smpc"
    ],
    "ref": "electronic Medicines Compendium / SmPC (Reino Unido): Clopixol tablets 2 mg; Clopixol Acuphase (zuclopenthixol acetate) injection; Clopixol Depot (zuclopenthixol decanoate) 200 mg/mL. https://www.medicines.org.uk/emc/product/994/smpc | https://www.medicines.org.uk/emc/product/993/smpc | https://www.medicines.org.uk/emc/product/6414/smpc"
  },
  "es": {
    "name": "Zuclopentixol",
    "class": "Antipsicotico tipico",
    "pharmacologicClass": "Tioxanteno; antagonista dopaminergico D2",
    "commercialNames": "Clopixol, Clopixol Acuphase y Clopixol Depot (productos-fuente UK)",
    "presentation": "Comprimidos orales; solucion IM de acetato; solucion IM depot de decanoato",
    "presentations": "Comprimido 2 mg (fuente citada); acetato IM y decanoato IM 200 mg/mL son formulaciones distintas.",
    "mechanism": "Antagonismo D2, con actividad en receptores serotoninergicos, alfa-adrenergicos e histaminicos; produce efecto antipsicotico/sedante.",
    "pharmacodynamics": "Controla sintomas psicoticos; puede causar sintomas extrapiramidales, sedacion e hipotension.",
    "pharmacokinetics": "El acetato IM es de accion corta; el decanoato IM es deposito de accion prolongada. La farmacocinetica determina intervalos distintos e impide conversion directa.",
    "indications": "Comprimidos: psicosis/esquizofrenia conforme SmPC. Acetato IM: fase aguda de agitacion psicotica. Decanoato: mantenimiento. Confirmar indicacion y rotulo local.",
    "dose": "NO UNIFICAR. Comprimidos, acetato IM y decanoato IM exigen sus propios esquemas y titulacion en el SmPC; este PDF no autoriza conversion entre productos.",
    "pediatricDose": "No recomendada para menores; seguridad/eficacia pediatrica no establecida en los SmPC citados.",
    "renalDose": "No hay esquema universal de ajuste confirmado en esta sintesis; usar evaluacion clinica y SmPC especifico.",
    "hepaticDose": "Usar precaucion y menor dosis inicial/titulacion lenta en hepatopatia; confirmar producto y gravedad.",
    "commonAdverseEffects": "Sedacion, boca seca, constipacion, mareo, acatisia, parkinsonismo, temblor e hipotension ortostatica.",
    "dangerousAdverseEffects": "SNM, discinesia tardia, QT/arritmias, convulsiones, tromboembolismo venoso, agranulocitosis y ACV/mortalidad en demencia.",
    "adverseEffects": "Hiperprolactinemia, disfuncion sexual, aumento de peso, alteraciones termorregulatorias y fotosensibilidad.",
    "contraindications": "Coma, depresion aguda por alcohol/barbituricos/opioides, colapso circulatorio, discrasias sanguineas e hipersensibilidad; confirmar cada SmPC.",
    "interactions": "Alcohol y depresores del SNC aumentan sedacion; farmacos QT, levodopa/agonistas dopaminergicos, antihipertensivos y medicamentos que alteran electrolitos exigen revision.",
    "monitoring": "Estado mental, sintomas extrapiramidales, PA, ECG/riesgos QT, electrolitos, peso/metabolismo y hemograma cuando corresponde.",
    "administration": "Comprimido por VO; acetato y decanoato exclusivamente IM profunda, cada uno con producto y tecnica propia.",
    "preparation": "Confirmar en el SmPC la concentracion y tecnica del producto IM; no mezclar, diluir ni usar via IV.",
    "infusionProtocol": "NO APLICABLE: productos IM, no por infusion IV.",
    "pregnancy": "El uso al final del embarazo puede causar sintomas extrapiramidales/abstinencia en el RN; evaluar riesgo-beneficio.",
    "lactation": "Puede excretarse en leche; exigir evaluacion especializada y fuente regional.",
    "specialPopulations": "Ancianos con demencia no deben recibirlo como uso rutinario; precaucion en enfermedad cardiovascular, Parkinson y epilepsia.",
    "patientEducation": "Evitar alcohol y conducir hasta conocer el efecto; buscar ayuda por fiebre/rigidez, sincope, movimientos involuntarios o disnea/dolor de pierna.",
    "clinicalPearls": "El error critico es confundir acetato IM de crisis con decanoato deposito. El cambio exige plan especializado, no conversion automatica.",
    "guidelineRecommendations": "No se valido una guia terapeutica adicional en este paquete. El revisor debe confrontar con protocolo local y guia vigente antes de uso clinico.",
    "safetyFlags": "ALTO RIESGO DE FORMULACION: bloquear toda conversion oral-IM, acetato-decanoato o IM-IV sin prescripcion y SmPC del producto.",
    "alerts": "Candidato documental para revision humana. La fuente extranjera no prueba registro, disponibilidad ni equivalencia en Brasil o Argentina.",
    "references": [
      "electronic Medicines Compendium / SmPC (Reino Unido): Clopixol tablets 2 mg; Clopixol Acuphase (zuclopenthixol acetate) injection; Clopixol Depot (zuclopenthixol decanoate) 200 mg/mL. https://www.medicines.org.uk/emc/product/994/smpc | https://www.medicines.org.uk/emc/product/993/smpc | https://www.medicines.org.uk/emc/product/6414/smpc"
    ],
    "ref": "electronic Medicines Compendium / SmPC (Reino Unido): Clopixol tablets 2 mg; Clopixol Acuphase (zuclopenthixol acetate) injection; Clopixol Depot (zuclopenthixol decanoate) 200 mg/mL. https://www.medicines.org.uk/emc/product/994/smpc | https://www.medicines.org.uk/emc/product/993/smpc | https://www.medicines.org.uk/emc/product/6414/smpc"
  }
};})();
/* GOLD33_SELECTIVE:zuclopentixol:END */
