/* ============================================================
   MedCases Pro — Módulo: INFECTOLOGIA
   Expõe: window.INFECTOLOGIA_DRUGS_DB

   BUILD 336 — Lote 1 (Antifúngicos)
   Anfotericina B Lipossomal, Anfotericina B Desoxicolato, Anidulafungina
   ============================================================ */

(function () {
  'use strict';
  if (typeof window.INFECTOLOGIA_DRUGS_DB !== 'object' || Array.isArray(window.INFECTOLOGIA_DRUGS_DB)) {
    window.INFECTOLOGIA_DRUGS_DB = {};
  }

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

/* ── ANFOTERICINA B LIPOSSOMAL ──────────────────────────────────────── */
    "anfotericina_lipossomal": {
      name: { pt: 'Anfotericina B Lipossomal', es: 'Anfotericina B Liposomal' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Poliênico (Formulação Lipídica)', es: 'Antifúngico Poliénico (Formulación Lipídica)' },
      indications: {
        pt: ['Infecções fúngicas sistêmicas severas (Candidíase invasiva, Aspergilose, Mucormicose, Criptococose)', 'Meningite Criptocócica', 'Tratamento de Leishmaniose Visceral (Calazar) e Tegumentar'],
        es: ['Infecciones fúngicas sistémicas severas (Candidiasis invasiva, Aspergilosis, Mucormicosis, Criptococosis)', 'Meningitis Criptocócica', 'Tratamiento de Leishmaniasis Visceral (Kala-azar) y Tegumentaria']
      },
      commercialNames: { br: ['AmBisome'], ar: ['AmBisome'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg'], es: ['Vial liofilizado 50 mg'] },
      mechanism: {
        pt: 'Liga-se de forma irreversível ao Ergosterol, o principal componente da membrana celular dos fungos (e da Leishmania). Isso cria poros maciços na membrana celular, causando vazamento imediato de íons intracelulares e morte fúngica. O brilhantismo tecnológico: A Anfotericina B é encapsulada dentro de uma bolha de gordura (Lipossoma), que impede a droga de entrar em contato com os rins humanos, reduzindo a famosa nefrotoxicidade em mais de 60%. O lipossoma só explode quando engolfado por um macrófago no local da infecção.',
        es: 'Se une de forma irreversible al Ergosterol, el principal componente de la membrana celular de los hongos (y de la Leishmania). Esto crea poros masivos en la membrana celular, causando fuga inmediata de iones intracelulares y muerte fúngica. La brillantez tecnológica: La Anfotericina B se encapsula dentro de una burbuja de grasa (Liposoma), que impide que la droga entre en contacto con los riñones humanos, reduciendo la famosa nefrotoxicidad en más del 60%. El liposoma solo explota cuando es fagocitado por un macrófago en el sitio de la infección.'
      },
      dose: {
        adult: {
          pt: 'Geralmente 3 a 5 mg/kg/dia IV em infusão contínua. Mucormicose: 5 a 10 mg/kg/dia (doses maciças).',
          es: 'Generalmente 3 a 5 mg/kg/día IV en infusión continua. Mucormicosis: 5 a 10 mg/kg/día (dosis masivas).'
        },
        pediatric: {
          pt: '3 a 5 mg/kg/dia IV.',
          es: '3 a 5 mg/kg/día IV.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: Soro Glicosado a 5% (SG 5%). O uso de Soro Fisiológico (salina) destrói o lipossoma imediatamente, quebrando e precipitando a droga inteira.', 'Infundir lentamente (ao longo de 2 horas).'], es: ['DILUYENTE EXCLUSIVO: Suero Glucosado al 5% (SG 5%). El uso de Suero Fisiológico (salina) destruye el liposoma inmediatamente, rompiendo y precipitando toda la droga.', 'Infundir lentamente (a lo largo de 2 horas).'] },
      renalAdjustment: { required: true, message: { pt: 'A formulação lipossomal foi feita justamente para poupar os rins. Usar com cautela em DRC, mas é a opção mais segura de anfotericina.', es: 'La formulación liposomal fue hecha justamente para proteger los riñones. Usar con precaución en ERC, pero es la opción más segura de anfotericina.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Hipocalemia (Perda de potássio na urina)', 'Reações infusionais (febre e tremores, embora muito menores que a formulação clássica)'], es: ['Hipopotasemia (Pérdida de potasio en la orina)', 'Reacciones infusionales (fiebre y temblores, aunque mucho menores que la formulación clásica)'] },
      dangerousAdverseEffects: { pt: ['Nefrotoxicidade residual e Lesão Renal Aguda', 'Hepatotoxicidade (elevação de transaminases)', 'Hipomagnesemia grave'], es: ['Nefrotoxicidad residual y Lesión Renal Aguda', 'Hepatotoxicidad (elevación de transaminasas)', 'Hipomagnesemia grave'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave comprovada'], es: ['Hipersensibilidad grave comprobada'] },
        relative: { pt: ['Uso associado com outros nefrotóxicos severos (Polimixina B, Aminoglicosídeos)'], es: ['Uso asociado con otros nefrotóxicos severos (Polimixina B, Aminoglucósidos)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'ATENÇÃO AO PREÇO E DOSE: O custo da Lipossomal é estratosférico (milhares de dólares por dia). Logo, ela só é liberada se o paciente possuir fator de risco ou lesão renal aguda comprovada impedindo o uso da barata Anfotericina Desoxicolato.', es: 'ATENCIÓN AL PRECIO Y DOSIS: El costo de la Liposomal es estratosférico (miles de dólares por día). Por tanto, solo se libera si el paciente posee factor de riesgo o lesión renal aguda comprobada impidiendo el uso de la barata Anfotericina Desoxicolato.' }
      }
    },

/* ── ANFOTERICINA B DESOXICOLATO ────────────────────────────────────── */
    "anfotericina_desoxicolato": {
      name: { pt: 'Anfotericina B Desoxicolato', es: 'Anfotericina B Desoxicolato' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Poliênico (Formulação Clássica / Convencional)', es: 'Antifúngico Poliénico (Formulación Clásica / Convencional)' },
      indications: {
        pt: ['Infecções fúngicas invasivas severas em pacientes com função renal intacta (Hospitais públicos/escassez de lipossomal)'],
        es: ['Infecciones fúngicas invasivas severas en pacientes con función renal intacta (Hospitales públicos/escasez de liposomal)']
      },
      commercialNames: { br: ['Anforicin B', 'Fungizon'], ar: ['Fungizone'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg'], es: ['Vial liofilizado 50 mg'] },
      mechanism: {
        pt: 'Idêntico ao da lipossomal (liga-se ao ergosterol formando poros na membrana). CONTUDO, como não está protegida pelo lipossoma de gordura, essa molécula livre se liga também, por afinidade cruzada, ao COLESTEROL humano. A parede dos túbulos renais humanos é rica em colesterol, o que faz a droga destruir e necrosar diretamente os rins do paciente na forma de dano tubular maciço.',
        es: 'Idéntico al de la liposomal (se une al ergosterol formando poros en la membrana). SIN EMBARGO, como no está protegida por el liposoma de grasa, esta molécula libre se une también, por afinidad cruzada, al COLESTEROL humano. La pared de los túbulos renales humanos es rica en colesterol, lo que hace que la droga destruya y necrose directamente los riñones del paciente en forma de daño tubular masivo.'
      },
      dose: {
        adult: {
          pt: '0,5 a 1,5 mg/kg/dia IV. (ATENÇÃO: A dose é cerca de 3 VEZES MENOR que a da Lipossomal. Aplicar dose da lipossomal com desoxicolato mata o paciente).',
          es: '0,5 a 1,5 mg/kg/día IV. (ATENCIÓN: La dosis es cerca de 3 VECES MENOR que la de la Liposomal. Aplicar dosis de liposomal con desoxicolato mata al paciente).'
        },
        pediatric: {
          pt: '0,5 a 1 mg/kg/dia IV.',
          es: '0,5 a 1 mg/kg/día IV.'
        }
      },
      administration: { pt: ['DILUENTE EXCLUSIVO: Soro Glicosado a 5% (SG 5%).', 'A infusão dura 4 HORAS. O paciente requer Pré-Medicação obrigatória (Paracetamol, Hidrocortisona e Prometazina) 30 minutos antes para evitar a síndrome do "Shake and Bake".'], es: ['DILUYENTE EXCLUSIVO: Suero Glucosado al 5% (SG 5%).', 'La infusión dura 4 HORAS. El paciente requiere Premedicación obligatoria (Paracetamol, Hidrocortisona y Prometazina) 30 minutos antes para evitar el síndrome de "Shake and Bake".'] },
      renalAdjustment: { required: true, message: { pt: 'A nefrotoxicidade é a REGRA (ocorre em 80% dos casos). Suspender ou trocar para Lipossomal se a Creatinina subir muito ou a TFG cair < 40.', es: 'La nefrotoxicidad es la REGLA (ocurre en 80% de los casos). Suspender o cambiar a Liposomal si la Creatinina sube mucho o la TFG cae < 40.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste estrito.', es: 'Sin necesidad de ajuste estricto.' } },
      commonAdverseEffects: { pt: ['Síndrome "Shake and Bake" (Frio intenso, calafrios violentos batendo os dentes e febre alta 1h após iniciar a bomba)', 'Hipocalemia severa (Exige reposição diária de Cloreto de Potássio)', 'Flebite terrível (ideal cateter central)'], es: ['Síndrome "Shake and Bake" (Frío intenso, escalofríos violentos castañeteando los dientes y fiebre alta 1h tras iniciar la bomba)', 'Hipopotasemia severa (Exige reposición diaria de Cloruro de Potasio)', 'Flebitis terrible (ideal catéter central)'] },
      dangerousAdverseEffects: { pt: ['Lesão Renal Aguda Tubulotóxica (muitas vezes irreversível no uso prolongado)', 'Arritmias cardíacas (secundárias à hipocalemia induzida)', 'Agranulocitose / Supressão da medula óssea'], es: ['Lesión Renal Aguda Tubulotóxica (muchas veces irreversible en el uso prolongado)', 'Arritmias cardíacas (secundarias a la hipopotasemia inducida)', 'Agranulocitosis / Supresión de la médula ósea'] },
      contraindications: {
        absolute: { pt: ['Insuficiência Renal Aguda instalada (obriga a mudança para a Lipossomal)'], es: ['Insuficiencia Renal Aguda instalada (obliga al cambio a la Liposomal)'] },
        relative: { pt: ['Uso associado com Vancomicina, Aminoglicosídeos e Polimixina B'], es: ['Uso asociado con Vancomicina, Aminoglucósidos y Polimixina B'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'A "Amfo-Terrível". Para prevenir o colapso dos rins, DEVE-SE infundir 500 mL a 1 Litro de SF 0,9% (Soroterapia pré e pós) para lavar agressivamente os túbulos renais todos os dias do tratamento.', es: 'La "Anfo-Terrible". Para prevenir el colapso de los riñones, DEBE infundirse 500 mL a 1 Litro de SF 0,9% (Sueroterapia pre y pos) para lavar agresivamente los túbulos renales todos los días del tratamiento.' }
      }
    },

/* ── ANIDULAFUNGINA ─────────────────────────────────────────────────── */
    "anidulafungina": {
      name: { pt: 'Anidulafungina', es: 'Anidulafungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Candidemia e Candidíase invasiva do paciente crítico (Droga de Ouro inicial)', 'Candidíase esofágica severa refratária ao fluconazol'],
        es: ['Candidemia y Candidiasis invasiva del paciente crítico (Droga de Oro inicial)', 'Candidiasis esofágica severa refractaria a fluconazol']
      },
      commercialNames: { br: ['Eraxis'], ar: ['Eraxis'] },
      presentation: { pt: ['Frasco-ampola liofilizado 100 mg'], es: ['Vial liofilizado 100 mg'] },
      mechanism: {
        pt: 'Equinocandinas são a "penicilina dos fungos". Inibem a enzima Beta-(1,3)-D-glucano sintase. Isso impede a formação do polímero glucano, componente principal da PAREDE celular fúngica (uma estrutura que humanos não possuem). Sem a parede, o fungo morre por lise osmótica. Tem ação fungicida poderosa e rápida contra todas as espécies de Candida.',
        es: 'Equinocandinas son la "penicilina de los hongos". Inhiben la enzima Beta-(1,3)-D-glucano sintasa. Esto impide la formación del polímero glucano, componente principal de la PARED celular fúngica (una estructura que los humanos no poseen). Sin la pared, el hongo muere por lisis osmótica. Tiene acción fungicida poderosa y rápida contra todas las especies de Candida.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque: 200 mg IV no dia 1. Dose de Manutenção: 100 mg IV/dia.',
          es: 'Dosis de Ataque: 200 mg IV en el día 1. Dosis de Mantenimiento: 100 mg IV/día.'
        },
        pediatric: {
          pt: '3 mg/kg IV ataque, seguido de 1,5 mg/kg/dia.',
          es: '3 mg/kg IV ataque, seguido de 1,5 mg/kg/día.'
        }
      },
      administration: { pt: ['Infusão IV LENTA (taxa máxima de 1,1 mg/min) para evitar reações por liberação de histamina (vermelhidão/pressão baixa).'], es: ['Infusión IV LENTA (tasa máxima de 1,1 mg/min) para evitar reacciones por liberación de histamina (enrojecimiento/presión baja).'] },
      renalAdjustment: { required: false, message: { pt: 'Totalmente segura. NÃO DEPENDE DOS RINS.', es: 'Totalmente segura. NO DEPENDE DE LOS RIÑONES.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Fármaco maravilhoso na UTI: Sofre DEGRADAÇÃO QUÍMICA no plasma (espontânea) em pH neutro. Não passa por citocromo hepático. Segura na cirrose extrema e na diálise.', es: 'Fármaco maravilloso en la UCI: Sufre DEGRADACIÓN QUÍMICA en el plasma (espontánea) a pH neutro. No pasa por citocromo hepático. Segura en la cirrosis extrema y en diálisis.' } },
      commonAdverseEffects: { pt: ['Flebitis local', 'Cefaleia', 'Diarreia e alterações leves do potássio'], es: ['Flebitis local', 'Cefalea', 'Diarrea y alteraciones leves del potasio'] },
      dangerousAdverseEffects: { pt: ['Reação induzida pela infusão rápida (Hipotensão e Urticária mediada por histamina)', 'Hepatite medicamentosa (rara, mas monitorável)'], es: ['Reacción inducida por infusión rápida (Hipotensión y Urticaria mediada por histamina)', 'Hepatitis medicamentosa (rara, pero monitorizable)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave a equinocandinas'], es: ['Hipersensibilidad grave a equinocandinas'] },
        relative: { pt: ['Ausência de evidência fúngica (seu uso profilático empírico largo induz rápida resistência)'], es: ['Ausencia de evidencia fúngica (su uso profiláctico empírico largo induce rápida resistencia)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: false, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'É a opção mais LIMPA de interações medicamentosas e toxicidade orgânica do mundo fúngico (pois é degradada sozinha no sangue). Ouro para doentes sépticos polimedicados onde Caspofungina/Micafungina ou Anfotericina falhariam ou seriam tóxicas.', es: 'Es la opción más LIMPIA de interacciones medicamentosas y toxicidad orgánica del mundo fúngico (pues se degrada sola en la sangre). Oro para enfermos sépticos polimedicados donde Caspofungina/Micafungina o Anfotericina fallarían o serían tóxicas.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — BUILD 336 Lote 1 (anfotericina_lipossomal · anfotericina_desoxicolato · anidulafungina) */

})();

/* ─────────────────────────────────────────────────────────────────────────
   GRUPO 2 — Infectologia Antifúngicos (caspofungina · micafungina · fluconazol · itraconazol · voriconazol)
   BUILD 338 Lote 2
───────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  Object.assign(window.INFECTOLOGIA_DRUGS_DB, {

/* ── CASPOFUNGINA ───────────────────────────────────────────────────── */
    "caspofungina": {
      name: { pt: 'Caspofungina', es: 'Caspofungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Tratamento empírico de infecções fúngicas em neutropenia febril', 'Candidíase invasiva', 'Aspergilose invasiva refratária ou intolerante a outras terapias'],
        es: ['Tratamiento empírico de infecciones fúngicas en neutropenia febril', 'Candidiasis invasiva', 'Aspergilosis invasiva refractaria o intolerante a otras terapias']
      },
      commercialNames: { br: ['Cancidas'], ar: ['Cancidas'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg e 70 mg'], es: ['Vial liofilizado 50 mg y 70 mg'] },
      mechanism: {
        pt: 'Equinocandina clássica (a primeira aprovada). Inibe a síntese de Beta-(1,3)-D-glucano, destruindo a parede celular fúngica (fungicida contra Candida e fungistática contra Aspergillus). Ao contrário da Anidulafungina, a Caspofungina sofre hidrólise ativa no FÍGADO e depende de transporte mediado por carreadores hepáticos, o que a torna suscetível a interações medicamentosas.',
        es: 'Equinocandina clásica (la primera aprobada). Inhibe la síntesis de Beta-(1,3)-D-glucano, destruyendo la pared celular fúngica (fungicida contra Candida y fungistática contra Aspergillus). A diferencia de la Anidulafungina, la Caspofungina sufre hidrólisis activa en el HÍGADO y depende del transporte mediado por transportadores hepáticos, lo que la hace susceptible a interacciones medicamentosas.'
      },
      dose: {
        adult: {
          pt: 'Dose de Ataque: 70 mg IV no Dia 1. Manutenção: 50 mg IV/dia. (Aumentar para 70 mg/dia em pacientes > 80 kg).',
          es: 'Dosis de Ataque: 70 mg IV en el Día 1. Mantenimiento: 50 mg IV/día. (Aumentar a 70 mg/día en pacientes > 80 kg).'
        },
        pediatric: {
          pt: 'Ataque 70 mg/m² (máx 70mg). Manutenção 50 mg/m²/dia.',
          es: 'Ataque 70 mg/m² (máx 70mg). Mantenimiento 50 mg/m²/día.'
        }
      },
      administration: { pt: ['Não misturar ou diluir com Soro Glicosado (incompatibilidade química). Diluir APENAS em SF 0,9% ou Ringer Lactato.', 'Infundir lentamente ao longo de 1 hora.'], es: ['No mezclar o diluir con Suero Glucosado (incompatibilidad química). Diluir SOLO en SF 0,9% o Ringer Lactato.', 'Infundir lentamente a lo largo de 1 hora.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste na doença renal crônica ou hemodiálise.', es: 'Sin necesidad de ajuste en la enfermedad renal crónica o hemodiálisis.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Insuficiência hepática moderada (Child-Pugh B): Reduzir a manutenção para 35 mg/dia.', es: 'Insuficiencia hepática moderada (Child-Pugh B): Reducir el mantenimiento a 35 mg/día.' } },
      commonAdverseEffects: { pt: ['Febre e calafrios (reação infusional mediada por histamina)', 'Flebite no acesso', 'Hipocalemia'], es: ['Fiebre y escalofríos (reacción infusional mediada por histamina)', 'Flebitis en el acceso', 'Hipopotasemia'] },
      dangerousAdverseEffects: { pt: ['Anafilaxia severa', 'Hepatotoxicidade (elevação aguda de TGO/TGP)'], es: ['Anafilaxia severa', 'Hepatotoxicidad (elevación aguda de AST/ALT)'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade grave'], es: ['Hipersensibilidad grave'] },
        relative: { pt: ['Uso concomitante com Ciclosporina (exige monitoramento laboratorial rígido)'], es: ['Uso concomitante con Ciclosporina (exige monitorización de laboratorio rígida)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'Diferente da Anidulafungina, a Caspofungina interage ativamente com indutores hepáticos. Se o paciente usar Rifampicina ou Fenitoína, a dose de manutenção da Caspofungina DEVE ser aumentada para 70 mg/dia para não haver falha do tratamento.', es: 'A diferencia de la Anidulafungina, la Caspofungina interactúa activamente con inductores hepáticos. Si el paciente usa Rifampicina o Fenitoína, la dosis de mantenimiento de la Caspofungina DEBE aumentarse a 70 mg/día para evitar el fracaso del tratamiento.' }
      }
    },

/* ── MICAFUNGINA ────────────────────────────────────────────────────── */
    "micafungina": {
      name: { pt: 'Micafungina', es: 'Micafungina' },
      category: 'infectologia',
      class: { pt: 'Antifúngico (Equinocandina)', es: 'Antifúngico (Equinocandina)' },
      indications: {
        pt: ['Tratamento de Candidemia', 'Profilaxia de infecção fúngica em pacientes submetidos a Transplante de Células-Tronco Hematopoiéticas (TCTH)'],
        es: ['Tratamiento de Candidemia', 'Profilaxis de infección fúngica en pacientes sometidos a Trasplante de Células Madre Hematopoyéticas (TCMH)']
      },
      commercialNames: { br: ['Mycamine'], ar: ['Mycamine'] },
      presentation: { pt: ['Frasco-ampola liofilizado 50 mg e 100 mg'], es: ['Vial liofilizado 50 mg y 100 mg'] },
      mechanism: {
        pt: 'Equinocandina. Assim como as outras, inibe a síntese de glucano da parede celular. Apresenta um perfil farmacocinético intermediário: é metabolizada pelo fígado (como a caspofungina), porém através de enzimas diferentes (não usa o sistema citocromo P450), resultando em um perfil de interações medicamentosas muito menor.',
        es: 'Equinocandina. Al igual que las otras, inhibe la síntesis de glucano de la pared celular. Presenta un perfil farmacocinético intermedio: es metabolizada por el hígado (como la caspofungina), pero a través de enzimas diferentes (no usa el sistema citocromo P450), resultando en un perfil de interacciones medicamentosas mucho menor.'
      },
      dose: {
        adult: {
          pt: 'Candidemia: 100 mg IV/dia. (NÃO requer dose de ataque). Profilaxia TCTH: 50 mg IV/dia.',
          es: 'Candidemia: 100 mg IV/día. (NO requiere dosis de ataque). Profilaxis TCMH: 50 mg IV/día.'
        },
        pediatric: {
          pt: '2 a 4 mg/kg/dia IV (conforme peso e indicação).',
          es: '2 a 4 mg/kg/día IV (según peso e indicación).'
        }
      },
      administration: { pt: ['Infundir ao longo de 1 hora. Evitar exposição do frasco diluído à luz solar direta intensa.'], es: ['Infundir a lo largo de 1 hora. Evitar exposición del vial diluido a la luz solar directa intensa.'] },
      renalAdjustment: { required: false, message: { pt: 'Sem necessidade de ajuste.', es: 'Sin necesidad de ajuste.' } },
      hepaticAdjustment: { required: false, message: { pt: 'Não requer ajuste formal na insuficiência hepática leve a moderada, mas deve ser usada com cuidado em disfunção grave.', es: 'No requiere ajuste formal en la insuficiencia hepática leve a moderada, pero debe usarse con cuidado en disfunción grave.' } },
      commonAdverseEffects: { pt: ['Erupção cutânea maculopapular', 'Diarreia e Náuseas', 'Queda transitória de glóbulos brancos'], es: ['Erupción cutánea maculopapular', 'Diarrea y Náuseas', 'Caída transitoria de glóbulos blancos'] },
      dangerousAdverseEffects: { pt: ['Risco potencial de desenvolvimento de tumores hepáticos (observado em altas doses crônicas em ratos, vigilância no uso contínuo humano prolongado)', 'Hemólise intravascular e falência hepática isolada'], es: ['Riesgo potencial de desarrollo de tumores hepáticos (observado en altas dosis crónicas en ratas, vigilancia en uso continuo humano prolongado)', 'Hemólisis intravascular y fallo hepático aislado'] },
      contraindications: {
        absolute: { pt: ['Hipersensibilidade a equinocandinas'], es: ['Hipersensibilidad a equinocandinas'] },
        relative: { pt: ['Nenhuma destacável em cenário crítico.'], es: ['Ninguna destacable en escenario crítico.'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'A grande vantagem da Micafungina é NÃO precisar de dose de ataque e ser muito segura em pacientes hematológicos graves (transplantados de medula), sem as graves interações da Caspofungina.', es: 'La gran ventaja de la Micafungina es NO necesitar dosis de ataque y ser muy segura en pacientes hematológicos graves (trasplantados de médula), sin las graves interacciones de la Caspofungina.' }
      }
    },

/* ── FLUCONAZOL ─────────────────────────────────────────────────────── */
    "fluconazol": {
      name: { pt: 'Fluconazol', es: 'Fluconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 1ª Geração', es: 'Antifúngico Triazólico de 1ª Generación' },
      indications: {
        pt: ['Candidíase de mucosa (oral, esofágica, vaginal)', 'Candidemia em pacientes NÃO-críticos e NÃO-neutropênicos (onde C. albicans sensível é a suspeita)', 'Tratamento de consolidação e profilaxia de Meningite Criptocócica'],
        es: ['Candidiasis de mucosa (oral, esofágica, vaginal)', 'Candidemia en pacientes NO críticos y NO neutropénicos (donde C. albicans sensible es la sospecha)', 'Tratamiento de consolidación y profilaxis de Meningitis Criptocócica']
      },
      commercialNames: { br: ['Zoltec', 'Triazol'], ar: ['Mutum', 'Fluconazol'] },
      presentation: { pt: ['Cápsulas 150 mg', 'Bolsas prontas para IV 2 mg/mL (100 mL = 200mg)'], es: ['Cápsulas 150 mg', 'Bolsas listas para IV 2 mg/mL (100 mL = 200mg)'] },
      mechanism: {
        pt: 'Inibe a enzima fúngica 14-alfa-desmetilase, ligada ao citocromo P450 do fungo. Isso impede a conversão do lanosterol em ergosterol, enfraquecendo a membrana fúngica e travando seu crescimento. Possui ação FUNGISTÁTICA (freia o fungo para a imunidade matar). Problema: a enzima P450 fúngica é muito parecida com a hepática humana, gerando fortíssima interação e bloqueio medicamentoso no homem.',
        es: 'Inhibe la enzima fúngica 14-alfa-desmetilasa, unida al citocromo P450 del hongo. Esto impide la conversión de lanosterol a ergosterol, debilitando la membrana fúngica y deteniendo su crecimiento. Posee acción FUNGISTÁTICA (frena el hongo para que la inmunidad lo mate). Problema: la enzima P450 fúngica es muy parecida a la hepática humana, generando fortísima interacción y bloqueo medicamentoso en el hombre.'
      },
      dose: {
        adult: {
          pt: 'Candidemia: Ataque de 800 mg (dia 1), manutenção de 400 a 800 mg/dia. Candidíase Vulvovaginal: 150 mg VO dose ÚNICA.',
          es: 'Candidemia: Ataque de 800 mg (día 1), mantenimiento de 400 a 800 mg/día. Candidiasis Vulvovaginal: 150 mg VO dosis ÚNICA.'
        },
        pediatric: {
          pt: 'Invasiva: 6 a 12 mg/kg/dia.',
          es: 'Invasiva: 6 a 12 mg/kg/día.'
        }
      },
      administration: { pt: ['Possui 90% de biodisponibilidade oral. A via oral atinge os mesmos níveis da venosa (transição precoce é encorajada).'], es: ['Posee 90% de biodisponibilidad oral. La vía oral alcanza los mismos niveles que la venosa (transición precoz es alentada).'] },
      renalAdjustment: { required: true, message: { pt: 'Altamente excretado inalterado na urina (ótimo para ITU por candida). Se ClCr < 50 mL/min, reduzir a dose de manutenção pela METADE (50%).', es: 'Altamente excretado inalterado en la orina (ideal para ITU por candida). Si ClCr < 50 mL/min, reducir la dosis de mantenimiento a la MITAD (50%).' } },
      hepaticAdjustment: { required: true, message: { pt: 'Hepatotóxico. Monitorar transaminases, interromper se lesão aguda.', es: 'Hepatotóxico. Monitorizar transaminasas, interrumpir si hay lesión aguda.' } },
      commonAdverseEffects: { pt: ['Cefaleia', 'Náusea e dor abdominal', 'Aumento assintomático das enzimas hepáticas'], es: ['Cefalea', 'Náusea y dolor abdominal', 'Aumento asintomático de las enzimas hepáticas'] },
      dangerousAdverseEffects: { pt: ['Prolongamento letal do intervalo QT (Torsades de Pointes)', 'Necrose hepática tóxica', 'Síndrome de Stevens-Johnson'], es: ['Prolongación letal del intervalo QT (Torsades de Pointes)', 'Necrosis hepática tóxica', 'Síndrome de Stevens-Johnson'] },
      contraindications: {
        absolute: { pt: ['Gravidez (no 1º trimestre, doses >150mg são altamente teratogênicas, causando malformações craniofaciais)', 'Síndrome do QT Longo congênito'], es: ['Embarazo (en el 1º trimestre, dosis >150mg son altamente teratogénicas, causando malformaciones craneofaciales)', 'Síndrome del QT Largo congénito'] },
        relative: { pt: ['Pacientes em uso de dezenas de drogas dependentes de CYP3A4 (ex: psiquiatria, transplantes)'], es: ['Pacientes en uso de decenas de drogas dependientes del CYP3A4 (ej: psiquiatría, trasplantes)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'O Fluconazol NÃO COBRE espécies resistentes de candida (Candida krusei e Candida glabrata). Em UTIs modernas, Candida glabrata é muito comum. Usar Fluconazol empiricamente em um paciente séptico chocado na UTI é erro médico: use Equinocandinas.', es: 'El Fluconazol NO CUBRE especies resistentes de candida (Candida krusei y Candida glabrata). En UCIs modernas, Candida glabrata es muy común. Usar Fluconazol empíricamente en un paciente séptico chocado en la UCI es error médico: use Equinocandinas.' }
      }
    },

/* ── ITRACONAZOL ────────────────────────────────────────────────────── */
    "itraconazol": {
      name: { pt: 'Itraconazol', es: 'Itraconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 1ª Geração', es: 'Antifúngico Triazólico de 1ª Generación' },
      indications: {
        pt: ['Doenças endêmicas profundas (Paracoccidioidomicose, Histoplasmose, Esporotricose)', 'Onicomicose severa', 'Aspergilose invasiva (terapia de segunda linha / manutenção)'],
        es: ['Enfermedades endémicas profundas (Paracoccidioidomicosis, Histoplasmosis, Esporotricosis)', 'Onicomicosis severa', 'Aspergilosis invasiva (terapia de segunda línea / mantenimiento)']
      },
      commercialNames: { br: ['Sporanox', 'Itrafung'], ar: ['Sporanox'] },
      presentation: { pt: ['Cápsulas duras 100 mg', 'Solução oral 10 mg/mL'], es: ['Cápsulas duras 100 mg', 'Solución oral 10 mg/mL'] },
      mechanism: {
        pt: 'Mecanismo idêntico ao Fluconazol, porém sua molécula é gigantescamente lipofílica (ama gordura e tecidos com queratina). Ele se concentra na pele, unhas e tecidos pulmonares profundos de forma avassaladora, mas possui penetração NULA no líquor (NÃO serve para meningites). É um potente inibidor do citocromo CYP3A4.',
        es: 'Mecanismo idéntico al Fluconazol, pero su molécula es gigantescamente lipofílica (ama la grasa y tejidos con queratina). Se concentra en la piel, uñas y tejidos pulmonares profundos de forma abrumadora, pero posee penetración NULA en el líquido cefalorraquídeo (NO sirve para meningitis). Es un potente inhibidor del citocromo CYP3A4.'
      },
      dose: {
        adult: {
          pt: 'Micoses endêmicas graves: 200 mg VO a cada 8h por 3 dias (Ataque), seguido de 200 mg VO 1 a 2x/dia (Manutenção crônica por até 1 ano).',
          es: 'Micosis endémicas graves: 200 mg VO cada 8h por 3 días (Ataque), seguido de 200 mg VO 1 a 2 veces/día (Mantenimiento crónico por hasta 1 año).'
        },
        pediatric: {
          pt: 'Uso limitado, apenas infecções sistêmicas endêmicas severas (3 a 5 mg/kg/dia).',
          es: 'Uso limitado, solo infecciones sistémicas endémicas severas (3 a 5 mg/kg/día).'
        }
      },
      administration: { pt: ['MUITO IMPORTANTE: As CÁPSULAS exigem estômago cheio e ácido (tomar imediatamente APÓS refeição copiosa). A SOLUÇÃO ORAL exige estômago VAZIO e limpo (tomar em jejum). Inverter a regra causa falha terapêutica por má absorção.'], es: ['MUY IMPORTANTE: Las CÁPSULAS exigen estómago lleno y ácido (tomar inmediatamente DESPUÉS de comida copiosa). La SOLUCIÓN ORAL exige estómago VACÍO y limpio (tomar en ayunas). Invertir la regla causa fallo terapéutico por mala absorción.'] },
      renalAdjustment: { required: false, message: { pt: 'Evitar forma IV (que contém ciclodextrina) em ClCr < 30. A forma oral não requer ajuste renal.', es: 'Evitar forma IV (que contiene ciclodextrina) en ClCr < 30. La forma oral no requiere ajuste renal.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Extensamente metabolizado pelo fígado. Usar com muita cautela e reduzir dose em cirróticos.', es: 'Extensamente metabolizado por el hígado. Usar con mucha precaución y reducir dosis en cirróticos.' } },
      commonAdverseEffects: { pt: ['Desconforto gástrico severo e náuseas', 'Rash cutâneo', 'Edema periférico (inchaço das pernas)'], es: ['Molestia gástrica severa y náuseas', 'Rash cutáneo', 'Edema periférico (hinchazón de las piernas)'] },
      dangerousAdverseEffects: { pt: ['Insuficiência Cardíaca Congestiva nova ou agudizada (Inotropismo negativo documentado)', 'Hepatotoxicidade fatal', 'Neuropatia periférica crônica'], es: ['Insuficiencia Cardíaca Congestiva nueva o agudizada (Inotropismo negativo documentado)', 'Hepatotoxicidad fatal', 'Neuropatía periférica crónica'] },
      contraindications: {
        absolute: { pt: ['Pacientes com Disfunção Ventricular Esquerda (Fração de ejeção baixa) ou ICC ativa', 'Uso com sinvastatina, lovastatina, ergotamina ou midazolam oral'], es: ['Pacientes con Disfunción Ventricular Izquierda (Fracción de eyección baja) o ICC activa', 'Uso con simvastatina, lovastatina, ergotamina o midazolam oral'] },
        relative: { pt: ['Pacientes em uso de Inibidores de Bomba de Prótons (Omeprazol)'], es: ['Pacientes en uso de Inhibidores de Bomba de Protones (Omeprazol)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: false, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: false,
        warning: { pt: 'BOXED WARNING (FDA): O Itraconazol tem efeito inotrópico negativo direto no miocárdio. Se o paciente (ex: tratamento de fungo na unha) começar a ter falta de ar, inchaço na perna e cansaço, ele está desenvolvendo Insuficiência Cardíaca induzida pela droga. Parar imediatamente.', es: 'BOXED WARNING (FDA): El Itraconazol tiene efecto inotrópico negativo directo en el miocardio. Si el paciente (ej: tratamiento de hongo en la uña) empieza a tener falta de aire, hinchazón en la pierna y cansancio, está desarrollando Insuficiencia Cardíaca inducida por la droga. Parar inmediatamente.' }
      }
    },

/* ── VORICONAZOL ────────────────────────────────────────────────────── */
    "voriconazol": {
      name: { pt: 'Voriconazol', es: 'Voriconazol' },
      category: 'infectologia',
      class: { pt: 'Antifúngico Triazólico de 2ª Geração (Amplo Espectro)', es: 'Antifúngico Triazólico de 2ª Generación (Amplio Espectro)' },
      indications: {
        pt: ['Aspergilose Invasiva (Tratamento Ouro de Primeira Linha)', 'Candidemia severa por espécies resistentes ao Fluconazol (C. krusei)', 'Scedosporiose e Fusariose'],
        es: ['Aspergilosis Invasiva (Tratamiento Oro de Primera Línea)', 'Candidemia severa por especies resistentes al Fluconazol (C. krusei)', 'Scedosporiosis y Fusariosis']
      },
      commercialNames: { br: ['Vfend'], ar: ['Vfend'] },
      presentation: { pt: ['Frasco-ampola liofilizado 200 mg', 'Comprimidos 50 mg e 200 mg'], es: ['Vial liofilizado 200 mg', 'Comprimidos 50 mg y 200 mg'] },
      mechanism: {
        pt: 'Mecanismo azólico padrão (inibe desmetilase do ergosterol), mas sua estrutura modificada confere afinidade gigantesca pela enzima fúngica, destruindo moldes (mofos) como o Aspergillus de forma avassaladora e até matando espécies de Candida antes intocáveis. Cruza a barreira hematoencefálica com perfeição, cobrindo o cérebro.',
        es: 'Mecanismo azólico estándar (inhibe desmetilasa del ergosterol), pero su estructura modificada confiere afinidad gigantesca por la enzima fúngica, destruyendo mohos como el Aspergillus de forma abrumadora e incluso matando especies de Candida antes intocables. Cruza la barrera hematoencefálica con perfección, cubriendo el cerebro.'
      },
      dose: {
        adult: {
          pt: 'Ataque IV: 6 mg/kg a cada 12 horas no primeiro dia. Manutenção IV: 4 mg/kg a cada 12 horas. Manutenção VO: 200 a 300 mg a cada 12 horas.',
          es: 'Ataque IV: 6 mg/kg cada 12 horas en el primer día. Mantenimiento IV: 4 mg/kg cada 12 horas. Mantenimiento VO: 200 a 300 mg cada 12 horas.'
        },
        pediatric: {
          pt: 'Necessitam de doses maiores! Crianças clareiam voriconazol muito rápido. Ataque IV de 9 mg/kg 12/12h, manutenção de 8 mg/kg 12/12h.',
          es: '¡Necesitan dosis mayores! Los niños aclaran voriconazol muy rápido. Ataque IV de 9 mg/kg 12/12h, mantenimiento de 8 mg/kg 12/12h.'
        }
      },
      administration: { pt: ['Via oral: Tomar 1 hora antes ou 1 hora depois das refeições (em jejum).', 'Via IV: Infusão contínua em 1 a 2 horas (não fazer bolus rápido).'], es: ['Vía oral: Tomar 1 hora antes o 1 hora después de las comidas (en ayunas).', 'Vía IV: Infusión continua en 1 a 2 horas (no hacer bolo rápido).'] },
      renalAdjustment: { required: true, message: { pt: 'A droga em si não afeta os rins, mas a AMPOLA INTRAVENOSA contém SBECD (ciclodextrina) que acumula e intoxica os rins. Se ClCr < 50 mL/min, SUSPENDER VIA IV e usar via oral.', es: 'La droga en sí no afecta los riñones, pero la AMPOLLA INTRAVENOSA contiene SBECD (ciclodextrina) que acumula e intoxica los riñones. Si ClCr < 50 mL/min, SUSPENDER VÍA IV y usar vía oral.' } },
      hepaticAdjustment: { required: true, message: { pt: 'Em cirrose leve a moderada (Child A e B): MANTER dose de ataque, mas REDUZIR a dose de manutenção pela metade (50%).', es: 'En cirrosis leve a moderada (Child A y B): MANTENER dosis de ataque, pero REDUCIR la dosis de mantenimiento a la mitad (50%).' } },
      commonAdverseEffects: { pt: ['Distúrbios Visuais TRANSITÓRIOS em 30% dos pacientes (Fotofobia profunda, ver tudo com um halo borrado, percepção de cores alterada)', 'Erupção cutânea e Febre', 'Hepatotoxicidade'], es: ['Disturbios Visuales TRANSITORIOS en 30% de los pacientes (Fotofobia profunda, ver todo con un halo borroso, percepción de colores alterada)', 'Erupción cutánea y Fiebre', 'Hepatotoxicidad'] },
      dangerousAdverseEffects: { pt: ['Fototoxicidade irreversível crônica e Câncer de Pele (Espinocelular e Melanoma em exposição solar no uso longo)', 'Alucinações e Delirium', 'Prolongamento fatal do QT'], es: ['Fototoxicidad irreversible crónica y Cáncer de Piel (Espinocelular y Melanoma en exposición solar en el uso largo)', 'Alucinaciones y Delirium', 'Prolongación fatal del QT'] },
      contraindications: {
        absolute: { pt: ['Uso associado de anticonvulsivantes potentes (Carbamazepina), Rifampicina e Ritonavir', 'Co-administração com alcaloides do ergot ou sirolimo'], es: ['Uso asociado de anticonvulsivos potentes (Carbamazepina), Rifampicina y Ritonavir', 'Coadministración con alcaloides del ergot o sirolimus'] },
        relative: { pt: ['Gestação (teratogênico)'], es: ['Embarazo (teratogénico)'] }
      },
      safetyFlags: {
        bleedingRisk: false, renalHighRisk: true, hepaticCaution: true, antidoteAvailable: false, highAlertMedication: true,
        warning: { pt: 'CUIDADO DERMATOLÓGICO: O paciente que usa Voriconazol para aspergilose por muitos meses torna-se altamente suscetível aos raios UV. A exposição solar leve causa queimaduras de 3º grau e envelhecimento celular, precipitando câncer de pele rapidamente. Uso de protetor solar denso é obrigatório.', es: 'CUIDADO DERMATOLÓGICO: El paciente que usa Voriconazol para aspergilosis por muchos meses se vuelve altamente susceptible a los rayos UV. La exposición solar leve causa quemaduras de 3º grado y envejecimiento celular, precipitando cáncer de piel rápidamente. Uso de protector solar denso es obligatorio.' }
      }
    }

  }); /* fim Object.assign INFECTOLOGIA_DRUGS_DB — Grupo 2 (caspofungina · micafungina · fluconazol · itraconazol · voriconazol — BUILD 338 Lote 2) */

})();
