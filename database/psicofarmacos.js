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
