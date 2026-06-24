/**
 * MedCases Pro — Banco de Dados de Interações Medicamentosas
 * Arquivo: database/interacoes.js
 * Versão: 3.0 — Arquitetura Fármaco-Cêntrica Bidirecional
 *              + DRUG_ALIASES (normalização por pseudônimos)
 *              + scoreClinico 1-5 (relevância clínica de plantão)
 *
 * REGRA DE CADASTRO:
 *   • Cada interação é cadastrada UMA única vez (em A→B ou B→A).
 *   • O motor JS varre os dois sentidos automaticamente (bidirecional).
 *   • Chaves em minúsculas, sem acentos, sem espaços (normalizado).
 *   • Aliases resolvem sinônimos antes da busca no dicionário.
 *
 * NÍVEIS DE GRAVIDADE:
 *   'contraindicada' → 🔴 Vermelho Escuro — Não associar de forma alguma
 *   'alta'           → 🔴 Laranja/Vermelho — Evitar ou exige monitorização ultra-estreita
 *   'moderada'       → 🟠 Amarelo         — Usar com cautela, monitorar e ajustar dose
 *   'leve'           → 🟡 Azul            — Monitorar se houver fatores de risco
 *
 * SCORE CLÍNICO (scoreClinico: 1-5):
 *   5 → Risco imediato de vida · intervenção urgente obrigatória
 *   4 → Risco grave · modificar conduta antes de prescrever
 *   3 → Risco moderado · monitorar parâmetros específicos
 *   2 → Risco baixo · orientar o paciente
 *   1 → Risco mínimo · apenas registro informativo
 */

/* ═══════════════════════════════════════════════════════════════
   TABELA DE ALIASES — Normalização de nomenclatura farmacológica
   Resolve sinônimos ANTES da busca no INTERACOES_DB.
   Mapeamento: chave_normalizada → chave_canônica_no_banco
═══════════════════════════════════════════════════════════════ */
const DRUG_ALIASES = {
  /* Ácido valproico e sais */
  "valproato_de_sodio":                 "acido_valproico",
  "divalproato":                        "acido_valproico",
  "divalproato_de_sodio":               "acido_valproico",

  /* Ferro */
  "suplemento_ferro":                   "ferro",
  "sulfato_ferroso":                    "ferro",
  "gluconato_ferroso":                  "ferro",

  /* Antiácidos */
  "antiacido_magnesio":                 "antiacido",
  "antiacido_aluminio_magnesio":        "antiacido",
  "hidroxido_de_aluminio":              "antiacido",
  "hidroxido_de_magnesio":              "antiacido",
  "bicarbonato_de_sodio":               "antiacido",

  /* Anticoncepcionais */
  "anticoncepcional_oral":              "anticoncepcional_hormonal",
  "anticoncepcional":                   "anticoncepcional_hormonal",
  "pilula":                             "anticoncepcional_hormonal",

  /* Álcool */
  "etanol":                             "alcool",
  "bebida_alcoolica":                   "alcool",

  /* Rifamicinas — agrupadas sob rifampicina para interações comuns */
  "rifabutina":                         "rifampicina",
  "rifapentina":                        "rifampicina",

  /* Carbapenêmicos — agrupados sob meropenem */
  "imipenem":                           "meropenem",
  "ertapenem":                          "meropenem",
  "imipenem_cilastatina":               "meropenem",
  "meropenem_vaborbactam":              "meropenem",
  "imipenem_cilastatina_relebactam":    "meropenem",
  "doripenem":                          "meropenem",

  /* Fluoroquinolonas — agrupadas sob levofloxacino */
  "ciprofloxacino":                     "levofloxacino",
  "moxifloxacino":                      "levofloxacino",
  "ofloxacino":                         "levofloxacino",
  "delafloxacino":                      "levofloxacino",
  "norfloxacino":                       "levofloxacino",
  "gemifloxacino":                      "levofloxacino",

  /* Antiarrítmicos classe III — agrupados sob amiodarona (prolongamento QT) */
  "sotalol":                            "amiodarona",
  "dofetilida":                         "amiodarona",

  /* Aminoglicosídeos — agrupados sob gentamicina */
  "amicacina":                          "gentamicina",
  "tobramicina":                        "gentamicina",
  "plazomicina":                        "gentamicina",
  "estreptomicina":                     "gentamicina",
  "neomicina":                          "gentamicina",

  /* Tetraciclinas — agrupadas sob tetraciclina */
  "doxiciclina":                        "tetraciclina",
  "minociclina":                        "tetraciclina",
  "omadaciclina":                       "tetraciclina",
  "eravaciclina":                       "tetraciclina",
  "tigeciclina":                        "tetraciclina",

  /* IECA — agrupados sob captopril */
  "enalapril":                          "captopril",
  "ramipril":                           "captopril",
  "lisinopril":                         "captopril",
  "perindopril":                        "captopril",
  "benazepril":                         "captopril",

  /* ARA-II — agrupados sob losartana */
  "valsartana":                         "losartana",
  "olmesartana":                        "losartana",
  "telmisartana":                       "losartana",
  "irbesartana":                        "losartana",
  "candesartana":                       "losartana",

  /* Sulfonamidas — aliases de nome */
  "cotrimoxazol":                       "sulfametoxazol_trimetoprima",
  "sulfametoxazol_trimetoprim":         "sulfametoxazol_trimetoprima",
  "smx_tmp":                            "sulfametoxazol_trimetoprima",
  "tmp_smx":                            "sulfametoxazol_trimetoprima",

  /* Nitrato — alias */
  "mononitrato_de_isossorbida":         "isossorbida",
  "dinitrato_de_isossorbida":           "isossorbida",
  "nitroglicerina":                     "isossorbida",

  /* Inibidores PDE5 — alias */
  "sildenafila":                        "tadalafila",
  "vardenafila":                        "tadalafila"
};

/* ═══════════════════════════════════════════════════════════════
   TEMPLATES REUTILIZÁVEIS — evitam repetição literal nos pares
═══════════════════════════════════════════════════════════════ */
const INTERACOES_MODELOS = {
  rifamicinas_anticoagulantes: {
    gravidade: "alta",
    scoreClinico: 4,
    descricao: {
      pt: "Indução enzimática potente do CYP3A4 e P-gp pelas rifamicinas reduz significativamente os níveis séricos do anticoagulante, aumentando o risco de eventos tromboembólicos.",
      es: "La inducción enzimática potente del CYP3A4 y la P-gp por las rifamicinas reduce significativamente los niveles séricos del anticoagulante, aumentando el riesgo de eventos tromboembólicos."
    },
    conduta: {
      pt: "Evitar associação. Se inevitável, monitorar rigorosamente a eficácia clínica ou considerar heparina.",
      es: "Evitar asociación. Si es inevitable, monitorear rigurosamente la eficacia clínica o considerar heparina."
    }
  }
};

/* ═══════════════════════════════════════════════════════════════
   ONTOLOGIA FARMACOLÓGICA — DRUG_CLASSES v1.0
   Mapeamento fármaco → classes farmacológicas (prefixo '$').
   Permite que INTERACOES_DB armazene entradas Droga×Droga,
   Droga×Classe ou Classe×Classe.
   O motor verifica os 3 níveis com early-return.
═══════════════════════════════════════════════════════════════ */
const DRUG_CLASSES = {

  /* AINEs — Anti-inflamatórios não esteroidais */
  "$classe_aines": [
    "ibuprofeno", "diclofenaco", "naproxeno", "cetoprofeno",
    "meloxicam", "celecoxibe", "piroxicam", "indometacina",
    "nimesulida", "etoricoxibe"
  ],

  /* Anticoagulantes orais — todos os mecanismos */
  "$classe_anticoagulantes": [
    "varfarina", "warfarina", "apixabana", "rivaroxabana",
    "dabigatrana", "edoxabana", "acenocumarol", "fenprocumona"
  ],

  /* ISRS — Inibidores Seletivos da Recaptação de Serotonina */
  "$classe_isrs": [
    "fluoxetina", "sertralina", "escitalopram", "citalopram",
    "paroxetina", "fluvoxamina", "vilazodona", "vortioxetina"
  ],

  /* IMAOs — Inibidores da Monoaminoxidase */
  "$classe_imaos": [
    "fenelzina", "tranilcipromina", "isocarboxazida", "selegilina",
    "rasagilina", "safinamida", "moclobemida"
  ],

  /* Antidepressivos Tricíclicos */
  "$classe_tricíclicos": [
    "amitriptilina", "nortriptilina", "imipramina", "clomipramina",
    "desipramina", "doxepina", "trimipramina"
  ],

  /* Benzodiazepínicos */
  "$classe_benzodiazepinicos": [
    "diazepam", "lorazepam", "alprazolam", "clonazepam",
    "midazolam", "bromazepam", "clobazam", "flunitrazepam",
    "nitrazepam", "temazepam", "triazolam"
  ],

  /* Opiáceos / Opioides */
  "$classe_opioides": [
    "morfina", "codeina", "tramadol", "fentanil", "oxicodona",
    "hidromorfona", "metadona", "buprenorfina", "tapentadol",
    "meperidina", "petidina"
  ],

  /* Estatinas — Inibidores da HMG-CoA redutase */
  "$classe_estatinas": [
    "atorvastatina", "sinvastatina", "rosuvastatina", "pravastatina",
    "fluvastatina", "lovastatina", "pitavastatina"
  ],

  /* Antipsicóticos */
  "$classe_antipsicóticos": [
    "haloperidol", "risperidona", "olanzapina", "quetiapina",
    "aripiprazol", "ziprasidona", "clozapina", "amisulprida",
    "paliperidona", "lurasidona", "clorpromazina", "levomepromazina"
  ],

  /* Fluoroquinolonas */
  "$classe_fluoroquinolonas": [
    "levofloxacino", "ciprofloxacino", "moxifloxacino", "norfloxacino",
    "ofloxacino", "gemifloxacino", "delafloxacino"
  ],

  /* Macrolídeos */
  "$classe_macrolídeos": [
    "claritromicina", "azitromicina", "eritromicina", "roxitromicina",
    "espiramicina", "fidaxomicina"
  ],

  /* Aminoglicosídeos */
  "$classe_aminoglicosídeos": [
    "gentamicina", "amicacina", "tobramicina", "netilmicina",
    "estreptomicina", "kanamicina"
  ],

  /* Rifamicinas */
  "$classe_rifamicinas": [
    "rifampicina", "rifabutina", "rifapentina", "rifaximina"
  ],

  /* IECAs — Inibidores da Enzima Conversora de Angiotensina */
  "$classe_ieca": [
    "captopril", "enalapril", "lisinopril", "ramipril",
    "perindopril", "quinapril", "fosinopril", "trandolapril",
    "benazepril", "cilazapril"
  ],

  /* BRAs — Bloqueadores do Receptor de Angiotensina */
  "$classe_ara_ii": [
    "losartana", "valsartana", "olmesartana", "telmisartana",
    "irbesartana", "candesartana", "azilsartana", "eprosartana"
  ],

  /* Beta-bloqueadores */
  "$classe_betabloqueadores": [
    "propranolol", "atenolol", "metoprolol", "bisoprolol",
    "carvedilol", "nebivolol", "esmolol", "labetalol",
    "acebutolol", "nadolol", "sotalol"
  ],

  /* Anticonvulsivantes / Antiepilépticos */
  "$classe_anticonvulsivantes": [
    "acido_valproico", "fenitoina", "carbamazepina", "oxcarbazepina",
    "lamotrigina", "levetiracetam", "topiramato", "gabapentina",
    "pregabalina", "fenobarbital", "primidona", "zonisamida",
    "vigabatrina", "lacosamida"
  ],

  /* Corticosteroides sistêmicos */
  "$classe_corticosteroides": [
    "prednisona", "prednisolona", "dexametasona", "hidrocortisona",
    "betametasona", "metilprednisolona", "budesonida", "triancinolona",
    "fludrocortisona", "deflazacorte"
  ],

  /* Azólicos antifúngicos */
  "$classe_azolicos": [
    "fluconazol", "itraconazol", "voriconazol", "posaconazol",
    "cetoconazol", "isavuconazol", "miconazol", "clotrimazol"
  ],

  /* Antirretrovirais (TARV) */
  "$classe_antirretrovirais": [
    "efavirenz", "nevirapina", "etravirina", "rilpivirina",
    "tenofovir", "abacavir", "emtricitabina", "lamivudina",
    "zidovudina", "atazanavir", "darunavir", "lopinavir",
    "ritonavir", "cobicistat", "raltegravir", "dolutegravir",
    "elvitegravir", "bictegravir", "maraviroc"
  ],

  /* Inibidores da Bomba de Prótons */
  "$classe_ibp": [
    "omeprazol", "pantoprazol", "lansoprazol", "rabeprazol",
    "esomeprazol", "dexlansoprazol"
  ],

  /* Nitratos e Nitritos */
  "$classe_nitratos": [
    "nitroglicerina", "isossorbida", "mononitrato_de_isossorbida",
    "dinitrato_de_isossorbida"
  ],

  /* Inibidores da Fosfodiesterase-5 */
  "$classe_ipde5": [
    "sildenafila", "tadalafila", "vardenafila", "avanafila"
  ],

  /* Carbapenêmicos */
  "$classe_carbapenemos": [
    "meropenem", "imipenem", "ertapenem", "doripenem"
  ],

  /* Tetraciclinas */
  "$classe_tetraciclinas": [
    "tetraciclina", "doxiciclina", "minociclina", "tigeciclina",
    "demeclociclina"
  ],

  /* ── Novas classes — Bloco Psicofármacos v3.2 ── */

  /* Antidepressivos Tricíclicos (alias sem acento — compatibilidade motor) */
  "$classe_triciclicos": [
    "amitriptilina", "nortriptilina", "imipramina", "clomipramina",
    "desipramina", "doxepina", "trimipramina"
  ],

  /* Serotoninérgicos — fármacos com atividade serotoninérgica clinicamente relevante */
  "$classe_serotoninergicos": [
    "tramadol", "fentanil", "meperidina", "petidina",
    "dextrometorfano", "litio", "triptofano",
    "metoclopramida", "ondansetrona", "granisetrona",
    "sumatriptana", "rizatriptana", "eletriptana",
    "buspirona", "mirtazapina", "venlafaxina", "duloxetina",
    "desvenlafaxina", "milnaciprana", "trazodona",
    "linezolida", "azul_de_metileno"
  ],

  /* Antiagregantes plaquetários */
  "$classe_antiagregantes": [
    "acido_acetilsalicilico", "aspirina", "clopidogrel", "ticagrelor",
    "prasugrel", "ticlopidina", "dipiridamol", "abciximabe",
    "eptifibatida", "tirofibana", "cilostazol"
  ],

  /* Triptanos — agonistas 5-HT1B/1D para enxaqueca */
  "$classe_triptanos": [
    "sumatriptana", "rizatriptana", "eletriptana", "naratriptana",
    "zolmitriptana", "almotriptana", "frovatriptana"
  ],

  /* Depressores do SNC — sedação aditiva */
  "$classe_depressoras_snc": [
    "diazepam", "lorazepam", "alprazolam", "clonazepam",
    "midazolam", "bromazepam", "zolpidem", "zopiclona",
    "fenobarbital", "morfina", "codeina", "tramadol",
    "fentanil", "oxicodona", "hidromorfona", "metadona",
    "haloperidol", "olanzapina", "quetiapina", "risperidona",
    "clozapina", "clorpromazina", "levomepromazina",
    "pregabalina", "gabapentina", "carisoprodol", "baclofeno",
    "tizanidina", "mirtazapina", "hidroxizina"
  ],

  /* Fármacos que prolongam QT — risco aditivo de torsades de pointes */
  "$classe_qt": [
    "amiodarona", "sotalol", "quinidina", "procainamida",
    "dronedarona", "ibutilida", "dofetilida",
    "haloperidol", "tioridazina", "pimozida", "ziprasidona",
    "quetiapina", "amisulprida", "clorpromazina",
    "metadona", "eritromicina", "claritromicina",
    "azitromicina", "moxifloxacino", "levofloxacino",
    "ciprofloxacino", "fluconazol", "voriconazol",
    "ondansetrona", "granisetrona", "domperidona",
    "hidroxicloroquina", "cloroquina"
  ],

  /* ── Novas classes — Bloco Psicofármacos v3.4 (ISRN) ── */

  /* Anti-hipertensivos — cobertura dos principais grupos para
     interação com ISRN (venlafaxina/desvenlafaxina elevam PA) */
  "$classe_antihipertensivos": [
    "enalapril", "lisinopril", "ramipril", "captopril", "perindopril",
    "benazepril", "quinapril", "fosinopril", "trandolapril",
    "losartana", "valsartana", "irbesartana", "olmesartana",
    "candesartana", "telmisartana", "azilsartana",
    "anlodipino", "nifedipino", "diltiazem", "verapamil",
    "felodipino", "lercanidipino", "nitrendipino",
    "hidroclorotiazida", "clortalidona", "indapamida",
    "furosemida", "espironolactona", "eplerenona",
    "metoprolol", "atenolol", "bisoprolol", "carvedilol",
    "nebivolol", "propranolol", "labetalol",
    "doxazosina", "prazosina", "terazosina",
    "clonidina", "metildopa", "rilmenidina",
    "hidralazina", "minoxidil", "nitroprussiato"
  ],

  /* ── Novas classes — Bloco Psicofármacos v3.5 (ISRN + ATC) ── */

  /* Anticolinérgicos — risco de efeitos parassimpatolíticos aditivos
     (retenção urinária, íleo paralítico, delirium, visão borrada) */
  "$classe_anticolinergicos": [
    "atropina", "escopolamina", "ipratropio", "tiotropio",
    "oxibutinina", "solifenacina", "tolterodina", "fesoterodina",
    "darifenacina", "mirabegrona",
    "biperideno", "triexifenidila", "benzatropina",
    "dimenidrinato", "difenidramina", "hidroxizina",
    "prometazina", "clorpromazina", "levomepromazina",
    "clozapina", "olanzapina", "quetiapina",
    "amitriptilina", "nortriptilina", "imipramina", "clomipramina",
    "desipramina", "doxepina", "trimipramina"
  ],

  /* Benzodiazepínicos — sedação e depressão do SNC */
  "$classe_benzodiazepinicos": [
    "diazepam", "lorazepam", "alprazolam", "clonazepam",
    "midazolam", "bromazepam", "clobazam", "nitrazepam",
    "triazolam", "temazepam", "oxazepam", "flurazepam",
    "clordiazepoxido", "flunitrazepam"
  ],

  /* Opioides — analgésicos opiáceos com risco de depressão respiratória */
  "$classe_opioides": [
    "morfina", "codeina", "tramadol", "fentanil",
    "oxicodona", "hidromorfona", "metadona", "petidina",
    "meperidina", "buprenorfina", "tapentadol", "nalbuphina",
    "pentazocina", "hidrocodona", "oximorfona"
  ],

  /* ── Novas classes — Bloco Psicofármacos v3.8 (Atípicos 1A: mirtazapina + bupropiona) ── */
  "$classe_antihistaminicos_sedativos": [
    "difenidramina", "prometazina", "clorfeniramina", "hidroxizina",
    "doxilamina", "ciclizina", "meclizina", "cetotifeno"
  ],

  "$classe_antipsicoticos_sedativos": [
    "quetiapina", "olanzapina", "clozapina", "clorpromazina",
    "levomepromazina", "tioridazina", "ziprasidona", "asenapina",
    "loxapina", "perfenazina"
  ],

  "$classe_farmacos_reduzem_limiar_convulsivo": [
    "tramadol", "clozapina", "teofilina", "anfetamina", "bupropiona",
    "metilfenidato", "ciclosporina", "imipenem", "ceftriaxona",
    "metronidazol", "isoniazida", "cloroquina", "mefloquina",
    "antidepressivos_triciclicos", "litio"
  ],

  "$classe_substratos_cyp2d6": [
    "desipramina", "nortriptilina", "imipramina", "amitriptilina",
    "clomipramina", "doxepina", "trimipramina", "venlafaxina",
    "duloxetina", "atomoxetina", "metoprolol", "carvedilol",
    "nebivolol", "propafenona", "flecainida", "haloperidol",
    "risperidona", "aripiprazol", "brexpiprazol", "tamoxifeno",
    "codeina", "tramadol", "oxicodona", "hidrocodona"
  ],

  /* ── Nova classe — Bloco Psicofármacos v3.10 (Atípicos 1C: agomelatina + vilazodona) ── */
  "$classe_hepatotoxicos": [
    "isoniazida", "rifampicina", "pirazinamida", "etambutol",
    "fluconazol", "itraconazol", "cetoconazol", "voriconazol",
    "amiodarona", "metotrexato", "leflunomida", "azatioprina",
    "mercaptopurina", "valproato", "carbamazepina", "fenitoina",
    "estatinas", "niacina", "sulfametoxazol_trimetoprima",
    "nitrofurantoina", "diclofenaco", "sulindaco",
    "allopurinol", "propiltiouracil", "flutamida",
    "terbinafina", "halotano", "disulfiram"
  ],

  /* ── Novas classes — Bloco Psicofármacos v3.11 (Atípico 1D + IMAOs 1–3) ── */
  "$classe_simpatomimeticos": [
    "anfetamina", "metanfetamina", "pseudoefedrina", "efedrina",
    "fenilefrina", "noradrenalina", "dopamina", "dobutamina",
    "metilfenidato", "atomoxetina", "lisdexanfetamina",
    "fenilpropanolamina", "oximetazolina", "nafazolina",
    "midodrina", "sibutramina"
  ],

  "$classe_isrn": [
    "venlafaxina", "desvenlafaxina", "duloxetina",
    "milnaciprano", "levomilnaciprano"
  ]

};

/* ═══════════════════════════════════════════════════════════════
   BANCO DE DADOS DE INTERAÇÕES — Fármaco-Cêntrico Bidirecional
   Organizado por nó raiz (fármaco A) → alvo (fármaco B)
   SUPORTE A ENTRADAS: Droga×Droga | Droga×Classe | Classe×Classe
═══════════════════════════════════════════════════════════════ */
const INTERACOES_DB = {

  /* ─────────────────────────────────────────────────────────────
     MEROPENEM (representa toda a classe carbapenêmica via alias)
  ───────────────────────────────────────────────────────────── */
  "meropenem": {
    "ganciclovir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de carbapenêmicos com ganciclovir pode aumentar o risco de neurotoxicidade e convulsões, especialmente em pacientes com disfunção renal ou predisposição neurológica.",
        es: "La asociación de carbapenémicos con ganciclovir puede aumentar el riesgo de neurotoxicidad y convulsiones, especialmente en pacientes con disfunción renal o predisposición neurológica."
      },
      conduta: {
        pt: "Monitorar estado neurológico rigorosamente, especialmente em idosos, pacientes com DRC ou histórico de epilepsia.",
        es: "Monitorear estado neurológico rigurosamente, especialmente en ancianos, pacientes con ERC o antecedente de epilepsia."
      }
    },
    "teofilina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação de carbapenêmicos com teofilina pode aumentar o risco de convulsões por redução do limiar convulsivo em pacientes suscetíveis.",
        es: "La asociación de carbapenémicos con teofilina puede aumentar el riesgo de convulsiones por reducción del umbral convulsivo en pacientes susceptibles."
      },
      conduta: {
        pt: "Monitorar sinais neurológicos. Considerar alternativa ao carbapenêmico em pacientes com epilepsia ou em uso de teofilina em doses altas.",
        es: "Monitorear signos neurológicos. Considerar alternativa al carbapenémico en pacientes con epilepsia o en uso de teofilina en dosis altas."
      }
    },
    "acido_valproico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Os carbapenêmicos reduzem drasticamente e de forma abrupta os níveis séricos do ácido valproico em até 60-90% em poucos dias, quebrando o limiar terapêutico e aumentando gravemente o risco de crises convulsivas refratárias.",
        es: "Los carbapenémicos reducen drásticamente y de forma abrupta los niveles séricos del ácido valproico entre un 60-90% en pocos días, rompiendo el umbral terapéutico y aumentando gravemente el riesgo de crisis convulsivas refractarias."
      },
      conduta: {
        pt: "Associação contraindicada de forma absoluta. Substituir o antibiótico por outra classe ou otimizar anticonvulsivante substituto imediatamente.",
        es: "Asociación contraindicada de forma absoluta. Sustituir el antibiótico por otra clase u optimizar un anticonvulsivo sustituto inmediatamente."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     RIFAMPICINA (representa toda a classe rifamicínica via alias)
  ───────────────────────────────────────────────────────────── */
  "rifampicina": {
    "apixabana": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potente indução do CYP3A4 e P-gp pelas rifamicinas reduz drasticamente os níveis séricos da apixabana, anulando a proteção anticoagulante e aumentando o risco tromboembólico.",
        es: "La potente inducción del CYP3A4 y P-gp por las rifamicinas reduce drásticamente los niveles séricos de apixabán, anulando la protección anticoagulante y aumentando el riesgo tromboembólico."
      },
      conduta: {
        pt: "Associação contraindicada. Evitar; se inevitável, considerar heparina como alternativa.",
        es: "Asociación contraindicada. Evitar; si es inevitable, considerar heparina como alternativa."
      }
    },
    "rivaroxabana": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Indução enzimática reduz os níveis séricos da rivaroxabana em até 50%, comprometendo a eficácia anticoagulante e expondo o paciente a risco trombótico.",
        es: "La inducción enzimática reduce los niveles séricos de rivaroxabán hasta un 50%, comprometiendo la eficacia anticoagulante y exponiendo al paciente a riesgo trombótico."
      },
      conduta: {
        pt: "Utilizar anticoagulante alternativo (heparina ou varfarina com monitoramento de RNI).",
        es: "Utilizar anticoagulante alternativo (heparina o warfarina con monitoreo de INR)."
      }
    },
    "edoxabana":    INTERACOES_MODELOS.rifamicinas_anticoagulantes,
    "dabigatrana":  INTERACOES_MODELOS.rifamicinas_anticoagulantes,
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Indução potente do CYP3A4 e P-gp pelas rifamicinas reduz significativamente os níveis séricos do tacrolimo, aumentando o risco de rejeição do enxerto.",
        es: "La inducción potente del CYP3A4 y P-gp por las rifamicinas reduce significativamente los niveles séricos de tacrolimus, aumentando el riesgo de rechazo del injerto."
      },
      conduta: {
        pt: "Monitorar rigorosamente os níveis séricos do tacrolimo e ajustar a dose. Pode ser necessário multiplicar a dose por 3 a 5 vezes durante o uso da rifamicina.",
        es: "Monitorear rigurosamente los niveles séricos de tacrolimus y ajustar la dosis. Puede ser necesario multiplicar la dosis por 3 a 5 veces durante el uso de la rifamicina."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Indução do CYP3A4 reduz os níveis de ciclosporina em 70-80%, comprometendo gravemente a imunossupressão e favorecendo a rejeição de transplante.",
        es: "La inducción del CYP3A4 reduce los niveles de ciclosporina en un 70-80%, comprometiendo gravemente la inmunosupresión y favoreciendo el rechazo del trasplante."
      },
      conduta: {
        pt: "Monitorar níveis séricos e ajustar dose. A associação é geralmente evitada em pacientes transplantados.",
        es: "Monitorear niveles séricos y ajustar dosis. La asociación generalmente se evita en pacientes trasplantados."
      }
    },
    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Indução do CYP3A4 e CYP2B6 reduz os níveis séricos da metadona em até 50%, podendo precipitar síndrome de abstinência grave em pacientes em tratamento de dependência.",
        es: "La inducción del CYP3A4 y CYP2B6 reduce los niveles séricos de metadona hasta un 50%, pudiendo precipitar síndrome de abstinencia grave en pacientes en tratamiento de dependencia."
      },
      conduta: {
        pt: "Monitorar sintomas de abstinência. Ajustar a dose da metadona e aumentar a frequência de monitoramento clínico durante todo o curso da rifamicina.",
        es: "Monitorear síntomas de abstinencia. Ajustar la dosis de metadona y aumentar la frecuencia de monitoreo clínico durante todo el curso de la rifamicina."
      }
    },
    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Indução do CYP3A4 reduz significativamente os níveis plasmáticos da quetiapina, podendo comprometer o controle psiquiátrico e precipitar reagudização.",
        es: "La inducción del CYP3A4 reduce significativamente los niveles plasmáticos de quetiapina, pudiendo comprometer el control psiquiátrico y precipitar reagudización."
      },
      conduta: {
        pt: "Monitorar resposta clínica antipsicótica. Pode ser necessário ajuste de dose substancial.",
        es: "Monitorear respuesta clínica antipsicótica. Puede ser necesario un ajuste de dosis sustancial."
      }
    },
    "levotiroxina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "As rifamicinas aumentam o metabolismo hepático da levotiroxina, podendo elevar a necessidade de reposição hormonal e precipitar hipotireoidismo.",
        es: "Las rifamicinas aumentan el metabolismo hepático de la levotiroxina, pudiendo aumentar la necesidad de reemplazo hormonal y precipitar hipotiroidismo."
      },
      conduta: {
        pt: "Monitorar TSH e T4 livre periodicamente. Ajustar a dose de levotiroxina conforme necessário durante e após o tratamento.",
        es: "Monitorear TSH y T4 libre periódicamente. Ajustar la dosis de levotiroxina según sea necesario durante y después del tratamiento."
      }
    },
    "haloperidol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A indução enzimática pelas rifamicinas pode reduzir significativamente os níveis séricos do haloperidol, comprometendo o controle dos sintomas psicóticos.",
        es: "La inducción enzimática por las rifamicinas puede reducir significativamente los niveles séricos de haloperidol, comprometiendo el control de los síntomas psicóticos."
      },
      conduta: {
        pt: "Monitorar a resposta clínica antipsicótica e ajustar a dose de haloperidol conforme necessário.",
        es: "Monitorear la respuesta clínica antipsicótica y ajustar la dosis de haloperidol según sea necesario."
      }
    },
    "lamotrigina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A indução do CYP hepático e da UGT pela rifampicina acelera o metabolismo da lamotrigina, podendo reduzir seus níveis séricos e comprometer o controle de crises ou estabilização do humor.",
        es: "La inducción del CYP hepático y de la UGT por rifampicina acelera el metabolismo de lamotrigina, pudiendo reducir sus niveles séricos y comprometer el control de crisis o estabilización del ánimo."
      },
      conduta: {
        pt: "Monitorar a resposta clínica (controle de crises ou estabilidade do humor). Pode ser necessário aumentar a dose de lamotrigina substancialmente durante o tratamento com rifampicina.",
        es: "Monitorear la respuesta clínica (control de crisis o estabilidad del ánimo). Puede ser necesario aumentar la dosis de lamotrigina sustancialmente durante el tratamiento con rifampicina."
      }
    },
    "prednisona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A rifampicina é um potente indutor do CYP3A4 e da P-gp, reduzindo substancialmente a exposição sistêmica à prednisona/prednisolona e comprometendo a eficácia do tratamento corticosteroide (ex.: em doenças autoimunes, tuberculose em pacientes transplantados).",
        es: "La rifampicina es un potente inductor del CYP3A4 y la P-gp, reduciendo sustancialmente la exposición sistémica a prednisona/prednisolona y comprometiendo la eficacia del tratamiento corticosteroide (ej.: en enfermedades autoinmunes, tuberculosis en pacientes trasplantados)."
      },
      conduta: {
        pt: "Monitorar a resposta clínica ao corticosteroide. Pode ser necessário aumentar a dose de prednisona em 2–3x durante o tratamento com rifampicina.",
        es: "Monitorear la respuesta clínica al corticosteroide. Puede ser necesario aumentar la dosis de prednisona 2–3 veces durante el tratamiento con rifampicina."
      }
    },
    "fluconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A rifampicina induz o metabolismo do fluconazol via CYP3A4 e CYP2C9, reduzindo significativamente seus níveis séricos e comprometendo a eficácia antifúngica — especialmente relevante no tratamento de candidemia e meningite criptocócica.",
        es: "La rifampicina induce el metabolismo de fluconazol vía CYP3A4 y CYP2C9, reduciendo significativamente sus niveles séricos y comprometiendo la eficacia antifúngica — especialmente relevante en el tratamiento de candidemia y meningitis criptocócica."
      },
      conduta: {
        pt: "Monitorar resposta clínica e laboratorial à terapia antifúngica. Considerar ajuste de dose do fluconazol ou substituição por voriconazol com monitoramento de níveis.",
        es: "Monitorear respuesta clínica y de laboratorio a la terapia antifúngica. Considerar ajuste de dosis de fluconazol o sustitución por voriconazol con monitoreo de niveles."
      }
    },
    "dolutegravir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A rifampicina induz o metabolismo do dolutegravir via UGT1A1/CYP3A4, reduzindo sua exposição em até 75% e podendo comprometer o controle virológico do HIV com risco de seleção de resistência.",
        es: "La rifampicina induce el metabolismo de dolutegravir vía UGT1A1/CYP3A4, reduciendo su exposición hasta en un 75% y pudiendo comprometer el control virológico del VIH con riesgo de selección de resistencia."
      },
      conduta: {
        pt: "Ajustar o esquema antirretroviral conforme protocolo de coinfecção HIV/TB. Habitualmente requer dose dobrada de dolutegravir (50mg 2x/dia) ou substituição da rifampicina por rifabutina.",
        es: "Ajustar el esquema antirretroviral según protocolo de coinfección VIH/TB. Generalmente requiere dosis doble de dolutegravir (50mg 2x/día) o sustitución de rifampicina por rifabutina."
      }
    },
    "efavirenz": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A interação entre rifampicina e efavirenz é bidirecional e complexa: a rifampicina reduz os níveis do efavirenz por indução do CYP2B6, enquanto o efavirenz também induz o metabolismo da rifampicina. O resultado líquido é variável entre pacientes.",
        es: "La interacción entre rifampicina y efavirenz es bidireccional y compleja: la rifampicina reduce los niveles de efavirenz por inducción del CYP2B6, mientras que el efavirenz también induce el metabolismo de rifampicina. El resultado neto es variable entre pacientes."
      },
      conduta: {
        pt: "Monitorar carga viral e eventos adversos (especialmente do SNC). Ajustar dose de efavirenz para 800mg/dia em pacientes >60kg conforme protocolo HIV/TB.",
        es: "Monitorear carga viral y eventos adversos (especialmente del SNC). Ajustar dosis de efavirenz a 800mg/día en pacientes >60kg según protocolo VIH/TB."
      }
    },

    /* ── Ontologia: Droga×Classe — RIFAMPICINA × toda a classe ANTICOAGULANTES ── */
    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A rifampicina é um dos indutores enzimáticos mais potentes do CYP2C9 (principal via metabólica da varfarina) e CYP3A4/P-gp (principal via dos NOACs: apixabana, rivaroxabana, dabigatrana, edoxabana). O efeito indutor inicia em 3–7 dias e pode reduzir os níveis plasmáticos dos anticoagulantes em 50–90%, com risco grave de eventos tromboembólicos (AVC, TEP, trombose de valva protética).",
        es: "La rifampicina es uno de los inductores enzimáticos más potentes del CYP2C9 (principal vía metabólica de la warfarina) y CYP3A4/P-gp (principal vía de los NOACs: apixabán, rivaroxabán, dabigatrán, edoxabán). El efecto inductor inicia en 3–7 días y puede reducir los niveles plasmáticos de los anticoagulantes en 50–90%, con grave riesgo de eventos tromboembólicos (ACV, TEP, trombosis de válvula protésica)."
      },
      conduta: {
        pt: "EVITAR associação. Para varfarina: se inevitável, aumentar dose significativamente, monitorar INR diariamente na fase de indução e após suspensão. Para NOACs (apixabana, rivaroxabana, dabigatrana, edoxabana): contraindicado pela FDA/EMA — substituir por heparina de baixo peso molecular.",
        es: "EVITAR asociación. Para warfarina: si es inevitable, aumentar dosis significativamente, monitorear INR diariamente en la fase de inducción y tras suspensión. Para NOACs: contraindicado por FDA/EMA — sustituir por heparina de bajo peso molecular."
      }
    },

    /* ── Ontologia: Droga×Classe — RIFAMPICINA × toda a classe ANTIPSICÓTICOS ── */
    "$classe_antipsicóticos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A rifampicina induz o CYP3A4 e CYP1A2, principais enzimas de metabolização de vários antipsicóticos (haloperidol, clozapina, quetiapina, risperidona, aripiprazol, olanzapina). Redução de 40–85% nas concentrações plasmáticas pode levar a falha terapêutica com descompensação psiquiátrica grave.",
        es: "La rifampicina induce el CYP3A4 y CYP1A2, principales enzimas de metabolización de varios antipsicóticos (haloperidol, clozapina, quetiapina, risperidona, aripiprazol, olanzapina). Reducción de 40–85% en las concentraciones plasmáticas puede llevar a falla terapéutica con descompensación psiquiátrica grave."
      },
      conduta: {
        pt: "Monitorar sintomas psiquiátricos rigorosamente. Considerar aumento de dose do antipsicótico com cautela. Reavaliar ao suspender rifampicina. Avaliar esquemas antituberculosos alternativos sem rifampicina em pacientes psiquiátricos estabilizados.",
        es: "Monitorear síntomas psiquiátricos rigurosamente. Considerar aumento de dosis del antipsicótico con cautela. Reevaluar al suspender rifampicina. Evaluar esquemas antituberculosos alternativos sin rifampicina en pacientes psiquiátricos estabilizados."
      }
    },

    /* ── Ontologia: Droga×Classe — RIFAMPICINA × toda a classe ESTATINAS ── */
    "$classe_estatinas": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A rifampicina induz CYP3A4 e OATP1B1, reduzindo dramaticamente (>70%) os níveis plasmáticos de estatinas (atorvastatina, sinvastatina, lovastatina, rosuvastatina, pravastatina). Falha na proteção cardiovascular e controle dislipidêmico.",
        es: "La rifampicina induce CYP3A4 y OATP1B1, reduciendo dramáticamente (>70%) los niveles plasmáticos de estatinas. Falla en la protección cardiovascular y control dislipidémico."
      },
      conduta: {
        pt: "Monitorar perfil lipídico. Considerar aumento de dose da estatina. Reavaliar lipidograma 4–6 semanas após início ou suspensão da rifampicina.",
        es: "Monitorear perfil lipídico. Considerar aumento de dosis de la estatina. Reevaluar lipidograma 4–6 semanas después del inicio o suspensión de rifampicina."
      }
    },

    /* ── Ontologia: Droga×Classe — RIFAMPICINA × toda a classe BENZODIAZEPÍNICOS ── */
    "$classe_benzodiazepinicos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A rifampicina é potente indutora do CYP3A4, principal enzima de metabolização dos benzodiazepínicos (diazepam, midazolam, alprazolam, triazolam, clonazepam). Redução de 80–95% nas concentrações plasmáticas pode levar a perda do efeito ansiolítico/sedativo/anticonvulsivante.",
        es: "La rifampicina es potente inductora del CYP3A4. Reducción de 80–95% en las concentraciones plasmáticas de benzodiazepinas puede llevar a pérdida del efecto ansiolítico/sedativo/anticonvulsivante, con riesgo de convulsiones en epilépticos."
      },
      conduta: {
        pt: "Monitorar eficácia clínica. Pode ser necessário aumentar dose do benzodiazepínico consideravelmente. O lorazepam (conjugação direta) é alternativa com menor interação.",
        es: "Monitorear eficacia clínica. Puede ser necesario aumentar dosis de la benzodiazepina considerablemente. El lorazepam (conjugación directa) es alternativa con menor interacción."
      }
    },

    /* ── Ontologia: Droga×Classe — RIFAMPICINA × toda a classe IBPs ── */
    "$classe_ibp": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "A rifampicina induz CYP2C19 e CYP3A4, aumentando o metabolismo de IBPs (omeprazol, pantoprazol, lansoprazol, esomeprazol, rabeprazol). Redução de 40–75% nos níveis de IBP pode comprometer o controle ácido gástrico.",
        es: "La rifampicina induce CYP2C19 y CYP3A4, aumentando el metabolismo de los IBPs. Reducción de 40–75% en los niveles puede comprometer el control ácido gástrico."
      },
      conduta: {
        pt: "Monitorar sintomas gástricos. Considerar aumento de dose do IBP. O rabeprazol (menor metabolização pelo CYP2C19) pode ser preferível.",
        es: "Monitorear síntomas gástricos. Considerar aumento de dosis del IBP. El rabeprazol puede ser preferible."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLARITROMICINA
  ───────────────────────────────────────────────────────────── */
  "claritromicina": {
    "sinvastatina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição potente do CYP3A4 pela claritromicina bloqueia o metabolismo da sinvastatina. Eleva drasticamente as concentrações plasmáticas da estatina, aumentando o risco de miopatia severa e rabdomiólise com insuficiência renal.",
        es: "Inhibición potente del CYP3A4 por claritromicina bloquea el metabolismo de simvastatina. Eleva drásticamente las concentraciones plasmáticas de la estatina, aumentando el riesgo de miopatía severa y rabdomiólisis con insuficiencia renal."
      },
      conduta: {
        pt: "Associação contraindicada. Suspender temporariamente a sinvastatina durante o curso do antibiótico macrolídeo.",
        es: "Asociación contraindicada. Suspender temporalmente la simvastatina durante el curso del antibiótico macrólido."
      }
    },
    "colchicina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A claritromicina inibe fortemente o CYP3A4 e a P-glicoproteína, vias responsáveis pela depuração da colchicina. Aumento importante dos níveis séricos de colchicina com risco de toxicidade potencialmente fatal (toxicidade neuromuscular e falência multiorgânica).",
        es: "La claritromicina inhibe fuertemente el CYP3A4 y la P-glicoproteína, vías responsables del aclaramiento de colchicina. Aumento importante de los niveles séricos de colchicina con riesgo de toxicidad potencialmente fatal (toxicidad neuromuscular y falla multiorgánica)."
      },
      conduta: {
        pt: "Não associar, especialmente em idosos e pacientes com insuficiência renal. Se inevitável, reduzir drasticamente a dose da colchicina e monitorar sinais de toxicidade (dor muscular, fraqueza, diarreia).",
        es: "No asociar, especialmente en ancianos y pacientes con insuficiencia renal. Si es inevitable, reducir drásticamente la dosis de colchicina y monitorear signos de toxicidad (dolor muscular, debilidad, diarrea)."
      }
    },
    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de prolongamento do QT e torsades de pointes por efeito aditivo sinérgico em canais de potássio cardíacos.",
        es: "Alto riesgo de prolongación del QT y torsades de pointes por efecto aditivo sinérgico en canales de potasio cardíacos."
      },
      conduta: {
        pt: "Evitar associação. Utilizar azitromicina com cautela como alternativa (menor inibição CYP3A4) ou antibiótico de outra classe.",
        es: "Evitar asociación. Utilizar azitromicina con cautela como alternativa (menor inhibición CYP3A4) o antibiótico de otra clase."
      }
    },
    "digoxina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição da P-gp e CYP3A4 pela claritromicina aumenta significativamente os níveis séricos de digoxina, elevando o risco de intoxicação digitálica.",
        es: "La inhibición de la P-gp y CYP3A4 por claritromicina aumenta significativamente los niveles séricos de digoxina, elevando el riesgo de intoxicación digitálica."
      },
      conduta: {
        pt: "Monitorar ECG, frequência cardíaca e níveis séricos de digoxina. Reduzir dose da digoxina preventivamente.",
        es: "Monitorear ECG, frecuencia cardíaca y niveles séricos de digoxina. Reducir preventivamente la dosis de digoxina."
      }
    },
    "varfarina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP2C9 pela claritromicina pode aumentar o INR e o risco hemorrágico.",
        es: "La inhibición del CYP2C9 por claritromicina puede aumentar el INR y el riesgo hemorrágico."
      },
      conduta: {
        pt: "Monitorar INR frequentemente durante o curso do antibiótico e ajustar dose de varfarina.",
        es: "Monitorear INR frecuentemente durante el curso del antibiótico y ajustar dosis de warfarina."
      }
    },
    "tacrolimo": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potente inibição do CYP3A4 aumenta significativamente os níveis séricos do tacrolimo, podendo causar nefrotoxicidade grave e neurotoxicidade.",
        es: "La potente inhibición del CYP3A4 aumenta significativamente los niveles séricos de tacrolimus, pudiendo causar nefrotoxicidad grave y neurotoxicidad."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, monitorar níveis séricos do tacrolimo diariamente e reduzir dose preventivamente.",
        es: "Evitar asociación. Si es indispensable, monitorear niveles séricos de tacrolimus diariamente y reducir dosis preventivamente."
      }
    },
    "ciclosporina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição do CYP3A4 aumenta significativamente os níveis séricos da ciclosporina, com risco de nefrotoxicidade grave e rejeição paradoxal por toxicidade.",
        es: "La inhibición del CYP3A4 aumenta significativamente los niveles séricos de ciclosporina, con riesgo de nefrotoxicidad grave y rechazo paradójico por toxicidad."
      },
      conduta: {
        pt: "Evitar associação. Monitorar níveis séricos rigorosamente se inevitável.",
        es: "Evitar asociación. Monitorear niveles séricos rigurosamente si es inevitable."
      }
    },
    "apixabana": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP3A4 e P-gp pela claritromicina pode aumentar significativamente os níveis séricos da apixabana e o risco hemorrágico.",
        es: "La inhibición del CYP3A4 y P-gp por claritromicina puede aumentar significativamente los niveles séricos de apixabán y el riesgo hemorrágico."
      },
      conduta: {
        pt: "Monitorar sinais de sangramento. Considerar redução de dose da apixabana ou antibiótico alternativo.",
        es: "Monitorear signos de sangrado. Considerar reducción de dosis de apixabán o antibiótico alternativo."
      }
    },
    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP3A4 aumenta os níveis plasmáticos da quetiapina, potencializando sedação, hipotensão e risco de QT prolongado.",
        es: "La inhibición del CYP3A4 aumenta los niveles plasmáticos de quetiapina, potenciando sedación, hipotensión y riesgo de QT prolongado."
      },
      conduta: {
        pt: "Monitorar sintomas neurológicos, pressão arterial e ECG. Considerar redução da dose de quetiapina.",
        es: "Monitorear síntomas neurológicos, presión arterial y ECG. Considerar reducción de dosis de quetiapina."
      }
    },
    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP3A4 pela claritromicina aumenta significativamente os níveis séricos da carbamazepina, elevando o risco de toxicidade neurológica (diplopia, ataxia, sonolência).",
        es: "La inhibición del CYP3A4 por claritromicina aumenta significativamente los niveles séricos de carbamazepina, elevando el riesgo de toxicidad neurológica (diplopía, ataxia, somnolencia)."
      },
      conduta: {
        pt: "Monitorar sinais de toxicidade neurológica e níveis séricos da carbamazepina. Considerar antibiótico alternativo.",
        es: "Monitorear signos de toxicidad neurológica y niveles séricos de carbamazepina. Considerar antibiótico alternativo."
      }
    },
    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "O sotalol (antiarrítmico classe III / beta-bloqueador) prolonga o QT por si só; a claritromicina adiciona efeito aditivo por inibição de canais IKr. Risco crítico de Torsades de Pointes e morte súbita cardíaca.",
        es: "El sotalol (antiarrítmico clase III / betabloqueante) prolonga el QT por sí solo; la claritromicina añade efecto aditivo por inhibición de canales IKr. Riesgo crítico de Torsades de Pointes y muerte súbita cardíaca."
      },
      conduta: {
        pt: "Associação contraindicada. Evitar. Se antibiótico macrolídeo for necessário, substituir por azitromicina com ECG de controle.",
        es: "Asociación contraindicada. Evitar. Si se necesita antibiótico macrólido, sustituir por azitromicina con ECG de control."
      }
    },
    "procainamida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito aditivo sinrégico no prolongamento do QT entre macrolídeo e antiarrítmico classe IA. Eleva criticamente o risco de Torsades de Pointes e fibrilhação ventricular.",
        es: "Efecto aditivo sinérgico en la prolongación del QT entre macrólido y antiarrítmico clase IA. Eleva críticamente el riesgo de Torsades de Pointes y fibrilación ventricular."
      },
      conduta: {
        pt: "Não associar. Utilizar antibiótico de outra classe ou considerar alternativas antiarrítmicas que não prolonguem o QT.",
        es: "No asociar. Utilizar antibiótico de otra clase o considerar alternativas antiarrítmicas que no prolonguen el QT."
      }
    },
    "lovastatina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A claritromicina inibe intensamente o CYP3A4, aumentando drasticamente os níveis plasmáticos da lovastatina e elevando o risco de miopatia grave e rabdomiólise com insuficiência renal aguda.",
        es: "La claritromicina inhibe intensamente el CYP3A4, aumentando drásticamente los niveles plasmáticos de lovastatina y elevando el riesgo de miopatía grave y rabdomiólisis con insuficiencia renal aguda."
      },
      conduta: {
        pt: "Suspender a lovastatina durante todo o curso de claritromicina. Substituir por pravastatina ou rosuvastatina se necessário manter terapia.",
        es: "Suspender la lovastatina durante todo el curso de claritromicina. Sustituir por pravastatina o rosuvastatina si es necesario mantener terapia."
      }
    },
    "midazolam": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A inibição do CYP3A4 pela claritromicina pode aumentar substancialmente os níveis plasmáticos do midazolam, causando sedação prolongada e depressão respiratória, especialmente em idosos ou pacientes críticos.",
        es: "La inhibición del CYP3A4 por claritromicina puede aumentar sustancialmente los niveles plasmáticos de midazolam, causando sedación prolongada y depresión respiratoria, especialmente en ancianos o pacientes críticos."
      },
      conduta: {
        pt: "Evitar a associação. Se necessário, reduzir a dose de midazolam e monitorar sedação em ambiente com suporte ventilatório disponível.",
        es: "Evitar la asociación. Si es necesario, reducir la dosis de midazolam y monitorear sedación en ambiente con soporte ventilatorio disponible."
      }
    },
    "alprazolam": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP3A4 pela claritromicina reduz o metabolismo do alprazolam, elevando seus níveis séricos e potencializando sedação, ataxia e depressão do SNC.",
        es: "La inhibición del CYP3A4 por claritromicina reduce el metabolismo del alprazolam, elevando sus niveles séricos y potenciando sedación, ataxia y depresión del SNC."
      },
      conduta: {
        pt: "Monitorar sedação excessiva e ajustar dose do benzodiazepínico. Considerar alternativa com menor dependência do CYP3A4 (ex.: lorazepam).",
        es: "Monitorear sedación excesiva y ajustar dosis de la benzodiazepina. Considerar alternativa con menor dependencia de CYP3A4 (ej.: lorazepam)."
      }
    },
    "prednisona": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A inibição do CYP3A4 pela claritromicina pode aumentar a exposição sistêmica à prednisona/prednisolona, potencializando efeitos adversos corticosteroides como hiperglicemia, retenção hídrica e imunossupressão excessiva.",
        es: "La inhibición del CYP3A4 por claritromicina puede aumentar la exposición sistémica a prednisona/prednisolona, potenciando efectos adversos corticosteroides como hiperglucemia, retención hídrica e inmunosupresión excesiva."
      },
      conduta: {
        pt: "Monitorar hiperglicemia, pressão arterial e edema durante a associação. Considerar redução de dose do corticosteroide se necessário.",
        es: "Monitorear hiperglucemia, presión arterial y edema durante la asociación. Considerar reducción de dosis del corticosteroide si es necesario."
      }
    },

    /* ── Ontologia: Droga×Classe — CLARITROMICINA × toda a classe ESTATINAS ── */
    "$classe_estatinas": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A claritromicina é inibidor potente do CYP3A4. Estatinas dependentes dessa via (sinvastatina, lovastatina, atorvastatina) têm seus níveis plasmáticos aumentados em 4–10 vezes durante o curso do macrolídeo, elevando substancialmente o risco de miopatia e rabdomiólise com mioglobinúria e insuficiência renal aguda.",
        es: "La claritromicina es inhibidor potente del CYP3A4. Las estatinas dependientes de esta vía (simvastatina, lovastatina, atorvastatina) tienen sus niveles plasmáticos aumentados 4–10 veces, elevando sustancialmente el riesgo de miopatía y rabdomiólisis."
      },
      conduta: {
        pt: "Suspender temporariamente sinvastatina e lovastatina durante o curso de claritromicina. Para atorvastatina: avaliar suspensão. Preferir rosuvastatina ou pravastatina se a estatina for indispensável. Monitorar CPK e função renal.",
        es: "Suspender temporalmente simvastatina y lovastatina durante el curso de claritromicina. Para atorvastatina: evaluar suspensión. Preferir rosuvastatina o pravastatina si la estatina es indispensable."
      }
    },

    /* ── Ontologia: Droga×Classe — CLARITROMICINA × toda a classe BENZODIAZEPÍNICOS ── */
    "$classe_benzodiazepinicos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A claritromicina inibe o CYP3A4, principal enzima que metaboliza benzodiazepínicos como midazolam, triazolam, alprazolam e diazepam. O aumento das concentrações plasmáticas pode causar sedação excessiva, depressão respiratória e amnésia prolongada.",
        es: "La claritromicina inhibe el CYP3A4. El aumento de las concentraciones plasmáticas de benzodiazepinas puede causar sedación excesiva, depresión respiratoria y amnesia prolongada."
      },
      conduta: {
        pt: "Reduzir dose do benzodiazepínico em 50–75%. Preferir lorazepam ou oxazepam (conjugação direta, sem CYP3A4). Monitorar nível de sedação.",
        es: "Reducir dosis de la benzodiazepina en 50–75%. Preferir lorazepam u oxazepam (conjugación directa, sin CYP3A4). Monitorear nivel de sedación."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     AZITROMICINA
  ───────────────────────────────────────────────────────────── */
  "azitromicina": {
    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização do prolongamento do intervalo QT por efeito aditivo. Ambos os fármacos bloqueiam canais de potássio (IKr), aumentando o risco de Torsades de Pointes.",
        es: "Potenciación de la prolongación del intervalo QT por efecto aditivo. Ambos fármacos bloquean canales de potasio (IKr), aumentando el riesgo de Torsades de Pointes."
      },
      conduta: {
        pt: "Monitorar ECG antes e durante o tratamento. Corrigir hipocalemia e hipomagnesemia.",
        es: "Monitorear ECG antes y durante el tratamiento. Corregir hipocalemia e hipomagnesemia."
      }
    },
    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Associação de dois agentes com potencial de prolongamento QT aumenta o risco de arritmias ventriculares graves.",
        es: "Asociación de dos agentes con potencial de prolongación del QT aumenta el riesgo de arritmias ventriculares graves."
      },
      conduta: {
        pt: "Monitorar intervalo QT com ECG. Evitar a combinação em pacientes com QT basal prolongado.",
        es: "Monitorear intervalo QT con ECG. Evitar la combinación en pacientes con QT basal prolongado."
      }
    },
    "ondansetrona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Combinação de macrolídeo e antagonista 5-HT3 com potencial de prolongamento QT. Risco aumentado de arritmias ventriculares, especialmente em pacientes com fatores predisponentes.",
        es: "Combinación de macrólido y antagonista 5-HT3 con potencial de prolongación del QT. Mayor riesgo de arritmias ventriculares, especialmente en pacientes con factores predisponentes."
      },
      conduta: {
        pt: "Monitorar ECG. Limitar dose de ondansetrona a 8 mg IV e corrigir eletrólitos séricos.",
        es: "Monitorear ECG. Limitar dosis de ondansetrón a 8 mg IV y corregir electrolitos séricos."
      }
    },
    "citalopram": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Ambos os fármacos prolongam o intervalo QTc. A combinação eleva o risco de arritmias ventriculares, especialmente em idosos, hipocalemia ou pacientes com cardiopatia de base.",
        es: "Ambos fármacos prolongan el intervalo QTc. La combinación eleva el riesgo de arritmias ventriculares, especialmente en ancianos, hipocalemia o pacientes con cardiopatía de base."
      },
      conduta: {
        pt: "Monitorar ECG em pacientes de risco. Corrigir eletrólitos séricos (K+, Mg2+) e evitar em pacientes com QT basal prolongado.",
        es: "Monitorear ECG en pacientes de riesgo. Corregir electrolitos séricos (K+, Mg2+) y evitar en pacientes con QT basal prolongado."
      }
    },
    "escitalopram": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O escitalopram prolonga o QT de forma dose-dependente; a azitromicina adiciona efeito aditivo. Risco aumentado de Torsades de Pointes, especialmente em idosos, mulheres, hipocalemia ou cardiopatas.",
        es: "El escitalopram prolonga el QT de forma dosis-dependiente; la azitromicina añade efecto aditivo. Mayor riesgo de Torsades de Pointes, especialmente en ancianos, mujeres, hipocalemia o cardiopatas."
      },
      conduta: {
        pt: "Corrigir eletrólitos séricos e realizar ECG de controle. Considerar alternativa antibiótica ou antidepressiva com menor risco de QT.",
        es: "Corregir electrolitos séricos y realizar ECG de control. Considerar alternativa antibiótica o antidepresiva con menor riesgo de QT."
      }
    },
    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Ambos os fármacos prolongam o intervalo QTc por bloqueio de canais IKr. A combinação eleva significativamente o risco de arritmias ventriculares graves, incluindo Torsades de Pointes, especialmente em pacientes com hipocalemia ou hipomagnesemia.",
        es: "Ambos fármacos prolongan el intervalo QTc por bloqueo de canales IKr. La combinación eleva significativamente el riesgo de arritmias ventriculares graves, incluyendo Torsades de Pointes, especialmente en pacientes con hipocalemia o hipomagnesemia."
      },
      conduta: {
        pt: "Monitorar ECG e corrigir eletrólitos séricos (K+, Mg²+) em pacientes de risco. Evitar a associação sempre que possível.",
        es: "Monitorear ECG y corregir electrolitos séricos (K+, Mg²+) en pacientes de riesgo. Evitar la asociación siempre que sea posible."
      }
    },
    "clorpromazina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Associação de dois fármacos com potencial de prolongamento do QTc por diferentes mecanismos. Aumenta o risco de Torsades de Pointes e morte súbita cardíaca, especialmente em pacientes com fatores de risco cardíaco.",
        es: "Asociación de dos fármacos con potencial de prolongación del QTc por diferentes mecanismos. Aumenta el riesgo de Torsades de Pointes y muerte súbita cardíaca, especialmente en pacientes con factores de riesgo cardíaco."
      },
      conduta: {
        pt: "Evitar em pacientes com cardiopatia de base ou QT prolongado. Monitorar ECG se associação for inevitável e corrigir eletrólitos.",
        es: "Evitar en pacientes con cardiopatía de base o QT prolongado. Monitorear ECG si la asociación es inevitable y corregir electrolitos."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     LEVOFLOXACINO (representa toda fluoroquinolonas via alias)
  ───────────────────────────────────────────────────────────── */
  "levofloxacino": {
    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito aditivo sinérgico no prolongamento do intervalo QTc do eletrocardiograma. Aumenta substancialmente o risco de arritmias ventriculares fatais, incluindo Torsades de Pointes.",
        es: "Efecto aditivo sinérgico en la prolongación del intervalo QTc del electrocardiograma. Aumenta sustancialmente el riesgo de arritmias ventriculares fatales, incluyendo Torsades de Pointes."
      },
      conduta: {
        pt: "Evitar a associação. Se estritamente necessário para o tratamento, realizar ECG basal e monitorização contínua do intervalo QTc e eletrólitos séricos.",
        es: "Evitar la asociación. Si es estrictamente necesario para el tratamiento, realizar ECG basal y monitoreo continuo del intervalo QTc y electrolitos séricos."
      }
    },
    "metformina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Alteração complexa na homeostase da glicose (disglicemia por quinolonas). Aumenta significativamente o risco de episódios de hipoglicemia severa em idosos ou hiperglicemia refratária.",
        es: "Alteración compleja en la homeostasis de la glucosa (disglicemia por quinolonas). Aumenta significativamente el riesgo de episodios de hipoglucemia severa en ancianos o hiperglucemia refractaria."
      },
      conduta: {
        pt: "Monitorar a glicemia capilar com maior frequência. Orientar a equipe sobre os sinais precoces de hipoglicemia.",
        es: "Monitorear la glucemia capilar con mayor frecuencia. Orientar al equipo sobre los signos precoces de hipoglucemia."
      }
    },
    "tizanidina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição do metabolismo da tizanidina via CYP1A2 pela fluoroquinolona. Causa elevação massiva dos níveis da tizanidina, resultando em hipotensão severa, sedação profunda e depressão psicomotora.",
        es: "Inhibición del metabolismo de tizanidina vía CYP1A2 por la fluoroquinolona. Causa elevación masiva de los niveles de tizanidina, resultando en hipotensión severa, sedación profunda y depresión psicomotora."
      },
      conduta: {
        pt: "Associação contraindicada. Não prescrever concomitantemente.",
        es: "Asociación contraindicada. No prescribir concomitantemente."
      }
    },
    "ibuprofeno": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A coadministração de fluoroquinolonas com anti-inflamatórios não esteroides (AINEs) pode aumentar o risco de estimulação do sistema nervoso central, reduzindo o limiar convulsivo por antagonismo GABA.",
        es: "La coadministración de fluoroquinolonas con antiinflamatorios no esteroideos (AINE) puede aumentar el riesgo de estimulación del sistema nervioso central, reduciendo el umbral convulsivo por antagonismo GABA."
      },
      conduta: {
        pt: "Usar com extrema cautela. Evitar a combinação em pacientes com histórico de epilepsia ou distúrbios neurológicos prévios.",
        es: "Usar con extrema precaución. Evitar la combinación en pacientes con historial de epilepsia o trastornos neurológicos previos."
      }
    },
    "haloperidol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito aditivo sinérgico no prolongamento do QTc. A combinação de fluoroquinolona (especialmente moxifloxacino) com haloperidol eleva criticamente o risco de Torsades de Pointes e morte súbita cardíaca.",
        es: "Efecto aditivo sinérgico en la prolongación del QTc. La combinación de fluoroquinolona (especialmente moxifloxacino) con haloperidol eleva críticamente el riesgo de Torsades de Pointes y muerte súbita cardíaca."
      },
      conduta: {
        pt: "Evitar a associação. Se indispensável, realizar ECG seriado com monitorização contínua do QTc.",
        es: "Evitar la asociación. Si es indispensable, realizar ECG seriado con monitoreo continuo del QTc."
      }
    },
    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização do prolongamento do intervalo QT. Risco aumentado de arritmias ventriculares graves, incluindo Torsades de Pointes.",
        es: "Potenciación de la prolongación del intervalo QT. Mayor riesgo de arritmias ventriculares graves, incluyendo Torsades de Pointes."
      },
      conduta: {
        pt: "Monitorar o intervalo QT com ECG seriado. Evitar a combinação sempre que possível.",
        es: "Monitorear el intervalo QT con ECG seriado. Evitar la combinación siempre que sea posible."
      }
    },
    "ondansetrona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Combinação de dois agentes com alto potencial de prolongamento do QTc. Eleva drasticamente o risco de arritmias ventriculares fatais (Torsades de Pointes), especialmente em pacientes com hipocalemia ou hipomagnesemia.",
        es: "Combinación de dos agentes con alto potencial de prolongación del QTc. Eleva drásticamente el riesgo de arritmias ventriculares fatales (Torsades de Pointes), especialmente en pacientes con hipocalemia o hipomagnesemia."
      },
      conduta: {
        pt: "Evitar a associação. Utilizar antieméticos alternativos sem risco de QT (ex.: metoclopramida).",
        es: "Evitar la asociación. Utilizar antieméticos alternativos sin riesgo de QT (ej.: metoclopramida)."
      }
    },
    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP1A2 pela fluoroquinolona (especialmente ciprofloxacino) aumenta significativamente os níveis séricos da clozapina, elevando o risco de sedação excessiva, convulsões e toxicidade cardíaca.",
        es: "La inhibición del CYP1A2 por la fluoroquinolona (especialmente ciprofloxacino) aumenta significativamente los niveles séricos de clozapina, elevando el riesgo de sedación excesiva, convulsiones y toxicidad cardíaca."
      },
      conduta: {
        pt: "Monitorar sedação, convulsões e ECG. Considerar redução da dose de clozapina durante o curso do antibiótico.",
        es: "Monitorear sedación, convulsiones y ECG. Considerar reducción de la dosis de clozapina durante el curso del antibiótico."
      }
    },
    "ropinirol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição do CYP1A2 pelo ciprofloxacino aumenta os níveis séricos do ropinirol, potencializando seus efeitos adversos dopaminérgicos (hipotensão ortostática, alucinações, discinesias).",
        es: "La inhibición del CYP1A2 por ciprofloxacino aumenta los niveles séricos de ropinirol, potenciando sus efectos adversos dopaminérgicos (hipotensión ortostática, alucinaciones, discinesias)."
      },
      conduta: {
        pt: "Monitorar hipotensão postural e efeitos adversos neurológicos. Reduzir a dose de ropinirol se necessário.",
        es: "Monitorear hipotensión postural y efectos adversos neurológicos. Reducir la dosis de ropinirol si es necesario."
      }
    },
    "cafeina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Inibição do CYP1A2 pela fluoroquinolona reduz o metabolismo da cafeína, elevando seus níveis plasmáticos e potencializando efeitos estimulantes (nervosismo, taquicardia, tremores, insônia).",
        es: "La inhibición del CYP1A2 por la fluoroquinolona reduce el metabolismo de la cafeína, elevando sus niveles plasmáticos y potenciando efectos estimulantes (nerviosismo, taquicardia, temblores, insomnio)."
      },
      conduta: {
        pt: "Orientar o paciente a reduzir consumo de cafeína (café, chás, energéticos) durante o tratamento.",
        es: "Orientar al paciente a reducir el consumo de cafeína (café, tés, energéticos) durante el tratamiento."
      }
    },
    "glibenclamida": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "As fluoroquinolonas desregulam a homeostase glicêmica, podendo tanto inibir a secreção de insulina quanto potencializá-la. Em uso concomitante com sulfonilureias, o risco de hipoglicemia grave é clinicamente relevante.",
        es: "Las fluoroquinolonas desregulan la homeostasis glucémica, pudiendo tanto inhibir la secreción de insulina como potenciarla. En uso concomitante con sulfonilureas, el riesgo de hipoglucemia grave es clínicamente relevante."
      },
      conduta: {
        pt: "Monitorar a glicemia capilar com maior frequência durante o tratamento. Orientar sinais de hipoglicemia ao paciente e considerar ajuste da sulfonilureia.",
        es: "Monitorear la glucemia capilar con mayor frecuencia durante el tratamiento. Orientar signos de hipoglucemia al paciente y considerar ajuste de la sulfonilurea."
      }
    },
    "glimepirida": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Mecanismo idêntico ao da glibenclamida. Fluoroquinolonas podem potencializar a hipoglicemia induzida por sulfonilureias, com risco de episódios graves especialmente em idosos.",
        es: "Mecanismo idéntico al de la glibenclamida. Las fluoroquinolonas pueden potenciar la hipoglucemia inducida por sulfonilureas, con riesgo de episodios graves especialmente en ancianos."
      },
      conduta: {
        pt: "Monitorar glicemia capilar com frequência. Manter paciente informado sobre sinais de hipoglicemia e acesso a carboidratos rápidos.",
        es: "Monitorear glucemia capilar con frecuencia. Mantener al paciente informado sobre signos de hipoglucemia y acceso a carbohidratos rápidos."
      }
    },
    "insulina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Fluoroquinolonas podem causar hipo ou hiperglicemia durante a antibioticoterapia por efeitos sobre a secreção pancreática de insulina, podendo interferir no controle em pacientes insulinodependentes.",
        es: "Las fluoroquinolonas pueden causar hipo o hiperglucemia durante la antibioticoterapia por efectos sobre la secreción pancreática de insulina, pudiendo interferir en el control en pacientes insulinodependientes."
      },
      conduta: {
        pt: "Reforçar o controle glicêmico durante o tratamento. Monitorar glicemia mais frequentemente e ajustar dose de insulina conforme necessário.",
        es: "Reforzar el control glucémico durante el tratamiento. Monitorear glucemia con mayor frecuencia y ajustar dosis de insulina según sea necesario."
      }
    },
    "zinco": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O zinco forma quelatos não absorvíveis com as fluoroquinolonas no trato gastrointestinal, reduzindo significativamente a biodisponibilidade oral do antibiótico (redução de até 70%).",
        es: "El zinc forma quelatos no absorbibles con las fluoroquinolonas en el tracto gastrointestinal, reduciendo significativamente la biodisponibilidad oral del antibiótico (reducción de hasta el 70%)."
      },
      conduta: {
        pt: "Separar a administração por pelo menos 2 horas antes ou 6 horas após a fluoroquinolona.",
        es: "Separar la administración al menos 2 horas antes o 6 horas después de la fluoroquinolona."
      }
    },
    "calcio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Cátions divalentes de cálcio formam quelatos com fluoroquinolonas, reduzindo sua absorção gastrointestinal em até 50–70%, comprometendo os níveis séricos e a eficácia antimicrobiana.",
        es: "Los cationes divalentes de calcio forman quelatos con fluoroquinolonas, reduciendo su absorción gastrointestinal hasta un 50–70%, comprometiendo los niveles séricos y la eficacia antimicrobiana."
      },
      conduta: {
        pt: "Evitar administração simultânea. Tomar a fluoroquinolona pelo menos 2 horas antes ou 6 horas após suplementos de cálcio ou laticínios ricos em cálcio.",
        es: "Evitar administración simultánea. Tomar la fluoroquinolona al menos 2 horas antes o 6 horas después de suplementos de calcio o lácteos ricos en calcio."
      }
    },
    "duloxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A inibição do CYP1A2 pelas fluoroquinolonas (especialmente ciprofloxacino) pode elevar significativamente os níveis plasmáticos da duloxetina, aumentando o risco de toxicidade serotoninérgica, hipertensão e efeitos adrenérgicos excessivos.",
        es: "La inhibición del CYP1A2 por las fluoroquinolonas (especialmente ciprofloxacino) puede elevar significativamente los niveles plasmáticos de duloxetina, aumentando el riesgo de toxicidad serotoninérgica, hipertensión y efectos adrenérgicos excesivos."
      },
      conduta: {
        pt: "Monitorar PA, agitação, tremor, taquicardia e sinais de toxicidade serotoninérgica. Considerar antibiótico alternativo.",
        es: "Monitorear PA, agitación, temblor, taquicardia y signos de toxicidad serotoninérgica. Considerar antibiótico alternativo."
      }
    },
    "olanzapina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A inibição do CYP1A2 pelas fluoroquinolonas pode aumentar os níveis séricos da olanzapina, potencializando sedação, hipotensão ortostática e efeitos extrapiramidais.",
        es: "La inhibición del CYP1A2 por las fluoroquinolonas puede aumentar los niveles séricos de olanzapina, potenciando sedación, hipotensión ortostática y efectos extrapiramidales."
      },
      conduta: {
        pt: "Monitorar sedação, pressão arterial e efeitos neurológicos. Considerar redução de dose da olanzapina durante o tratamento antibiótico.",
        es: "Monitorear sedación, presión arterial y efectos neurológicos. Considerar reducción de dosis de olanzapina durante el tratamiento antibiótico."
      }
    },
    "metotrexato": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "As fluoroquinolonas podem competir com o metotrexato pela secreção tubular renal, reduzindo sua eliminação e aumentando o risco de toxicidade hematológica (pancitopenia), mucosites e nefrotoxicidade.",
        es: "Las fluoroquinolonas pueden competir con el metotrexato por la secreción tubular renal, reduciendo su eliminación y aumentando el riesgo de toxicidad hematológica (pancitopenia), mucositis y nefrotoxicidad."
      },
      conduta: {
        pt: "Monitorar hemograma completo, creatinina e mucosite durante a associação. Evitar fluoroquinolonas em pacientes em uso de metotrexato em altas doses.",
        es: "Monitorear hemograma completo, creatinina y mucositis durante la asociación. Evitar fluoroquinolonas en pacientes en uso de metotrexato en dosis altas."
      }
    },
    "prednisona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de fluoroquinolonas com corticosteroides aumenta substancialmente o risco de tendinite e ruptura tendínea, especialmente do tendão de Aquiles, em idosos, transplantados ou pacientes com DRC.",
        es: "La asociación de fluoroquinolonas con corticosteroides aumenta sustancialmente el riesgo de tendinitis y ruptura tendinosa, especialmente del tendón de Aquiles, en ancianos, trasplantados o pacientes con ERC."
      },
      conduta: {
        pt: "Evitar a associação em pacientes de alto risco (idosos >60 anos, transplantados, DRC). Orientar o paciente a relatar imediatamente dor, inchaço ou rigidez tendinosa.",
        es: "Evitar la asociación en pacientes de alto riesgo (ancianos >60 años, trasplantados, ERC). Orientar al paciente a reportar inmediatamente dolor, hinchazón o rigidez tendinosa."
      }
    },
    "teofilina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Fluoroquinolonas podem inibir o CYP1A2, reduzindo o metabolismo da teofilina e aumentando seus níveis séricos com risco de toxicidade (nervosismo, taquicardia, arritmias e convulsões em casos graves).",
        es: "Las fluoroquinolonas pueden inhibir el CYP1A2, reduciendo el metabolismo de la teofilina y aumentando sus niveles séricos con riesgo de toxicidad (nerviosismo, taquicardia, arritmias y convulsiones en casos graves)."
      },
      conduta: {
        pt: "Monitorar sintomas de toxicidade e considerar dosagem sérica de teofilina. Reduzir dose de teofilina em 30–50% se necessário.",
        es: "Monitorear síntomas de toxicidad y considerar dosificación sérica de teofilina. Reducir dosis de teofilina en 30–50% si es necesario."
      }
    },
    "metadona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "As fluoroquinolonas (especialmente moxifloxacino) prolongam significativamente o intervalo QTc por bloqueio de canais IKr; a metadona adiciona efeito aditivo crítico. Risco elevado de Torsades de Pointes e morte súbita cardíaca.",
        es: "Las fluoroquinolonas (especialmente moxifloxacino) prolongan significativamente el intervalo QTc por bloqueo de canales IKr; la metadona añade efecto aditivo crítico. Alto riesgo de Torsades de Pointes y muerte súbita cardíaca."
      },
      conduta: {
        pt: "Evitar a associação. Substituir a fluoroquinolona por antibiótico de classe diferente. Se inevitável, monitorar ECG seriado e corrigir eletrólitos.",
        es: "Evitar la asociación. Sustituir la fluoroquinolona por antibiótico de clase diferente. Si es inevitable, monitorear ECG seriado y corregir electrolitos."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     GENTAMICINA (representa toda a classe aminoglicosídea via alias)
  ───────────────────────────────────────────────────────────── */
  "gentamicina": {
    "vancomicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito nefrotóxico aditivo sinérgico clássico. Promove lesão tubular renal aguda e declínio rápido da taxa de filtração glomerular.",
        es: "Efecto nefrotóxico aditivo sinérgico clásico. Promueve lesión tubular renal aguda y declive rápido de la tasa de filtración glomerular."
      },
      conduta: {
        pt: "Monitorar estritamente a função renal (creatinina, clearance), débito urinário e realizar dosagem sérica de pico e vale da vancomicina.",
        es: "Monitorear estrictamente la función renal (creatinina, aclaramiento), gasto urinario y realizar dosificación sérica de pico y valle de la vancomicina."
      }
    },
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de aminoglicosídeos com tacrolimo aumenta significativamente o risco de nefrotoxicidade, especialmente em pacientes transplantados.",
        es: "La asociación de aminoglucósidos con tacrolimus aumenta significativamente el riesgo de nefrotoxicidad, especialmente en pacientes trasplantados."
      },
      conduta: {
        pt: "Monitorar creatinina, débito urinário e níveis séricos do tacrolimo. Evitar associação prolongada.",
        es: "Monitorear creatinina, diuresis y niveles séricos de tacrolimus. Evitar asociación prolongada."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da nefrotoxicidade. O uso concomitante eleva o risco de lesão tubular aguda e insuficiência renal aguda.",
        es: "Potenciación de la nefrotoxicidad. El uso concomitante eleva el riesgo de lesión tubular aguda e insuficiencia renal aguda."
      },
      conduta: {
        pt: "Evitar associação prolongada. Monitorar função renal diariamente em pacientes críticos.",
        es: "Evitar asociación prolongada. Monitorear función renal diariamente en pacientes críticos."
      }
    },
    "anfotericina_b": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco elevado de lesão renal aguda por toxicidade tubular aditiva entre aminoglicosídeo e anfotericina B.",
        es: "Alto riesgo de lesión renal aguda por toxicidad tubular aditiva entre aminoglucósido y anfotericina B."
      },
      conduta: {
        pt: "Monitorar função renal diariamente em pacientes críticos. Preferir anfotericina lipossomal se disponível.",
        es: "Monitorear función renal diariamente en pacientes críticos. Preferir anfotericina liposomal si está disponible."
      }
    },
    "cisplatina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de aminoglicosídeos com cisplatina resulta em toxicidade renal e ototóxica aditiva grave. Ambos os fármacos causam lesão tubular proximal e dano coclear independentes, com risco cumulativo de insuficiência renal aguda e perda auditiva irreversível.",
        es: "La asociación de aminoglucósidos con cisplatino resulta en toxicidad renal y ototóxica aditiva grave. Ambos fármacos causan lesión tubular proximal y daño coclear independientes, con riesgo acumulativo de insuficiencia renal aguda y pérdida auditiva irreversible."
      },
      conduta: {
        pt: "Evitar a associação sempre que possível. Se inevitável, monitorar creatinina, audiometria formal e níveis séricos do aminoglicosídeo. Hidratação vigorosa obrigatória.",
        es: "Evitar la asociación siempre que sea posible. Si es inevitable, monitorear creatinina, audiometría formal y niveles séricos del aminoglucósido. Hidratación vigorosa obligatoria."
      }
    },
    "contraste_iodado": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A administração de contraste iodado em pacientes em uso de aminoglicosídeos aumenta o risco de lesão renal aguda induzida por contraste, pois ambos exercem toxicidade tubular proximal com mecanismos distintos e potencialmente aditivos.",
        es: "La administración de contraste yodado en pacientes en uso de aminoglucósidos aumenta el riesgo de lesión renal aguda inducida por contraste, ya que ambos ejercen toxicidad tubular proximal con mecanismos distintos y potencialmente aditivos."
      },
      conduta: {
        pt: "Monitorar creatinina e débito urinário antes e após o contraste. Hidratação adequada obrigatória. Evitar outros nefrotóxicos concomitantes.",
        es: "Monitorear creatinina y diuresis antes y después del contraste. Hidratación adecuada obligatoria. Evitar otros nefrotóxicos concomitantes."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TETRACICLINA (representa toda a classe tetraciclínica via alias)
  ───────────────────────────────────────────────────────────── */
  "tetraciclina": {
    "isotretinoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Ambos os fármacos estão associados ao desenvolvimento de hipertensão intracraniana benigna (pseudotumor cerebral). A coadministração potencializa esse risco de forma sinérgica.",
        es: "Ambos fármacos están asociados al desarrollo de hipertensión intracraniana benigna (pseudotumor cerebral). La coadministración potencia este riesgo de forma sinérgica."
      },
      conduta: {
        pt: "Associação contraindicada. Descontinuar a tetraciclina antes de iniciar o tratamento com isotretinoína.",
        es: "Asociación contraindicada. Descontinuar la tetraciclina antes de iniciar el tratamiento con isotretinoína."
      }
    },
    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A fenitoína (e outros indutores enzimáticos como carbamazepina e fenobarbital) induz o metabolismo hepático das tetraciclinas, reduzindo sua meia-vida e eficácia antimicrobiana.",
        es: "La fenitoína (y otros inductores enzimáticos como carbamazepina y fenobarbital) induce el metabolismo hepático de las tetraciclinas, reduciendo su vida media y eficacia antimicrobiana."
      },
      conduta: {
        pt: "Monitorar a resposta clínica. Considerar antibiótico alternativo em caso de falha terapêutica documentada.",
        es: "Monitorear la respuesta clínica. Considerar antibiótico alternativo en caso de falla terapéutica documentada."
      }
    },
    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A indução enzimática pela carbamazepina pode reduzir a meia-vida das tetraciclinas (especialmente doxiciclina) e comprometer a resposta clínica.",
        es: "La inducción enzimática por carbamazepina puede reducir la vida media de las tetraciclinas (especialmente doxiciclina) y comprometer la respuesta clínica."
      },
      conduta: {
        pt: "Monitorar eficácia antimicrobiana. Considerar ajuste de dose ou antibiótico alternativo.",
        es: "Monitorear eficacia antimicrobiana. Considerar ajuste de dosis o antibiótico alternativo."
      }
    },
    "fenobarbital": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indutor enzimático potente (CYP hepático), o fenobarbital acelera o metabolismo das tetraciclinas, reduzindo sua exposição sistêmica.",
        es: "Inductor enzimático potente (CYP hepático), el fenobarbital acelera el metabolismo de las tetraciclinas, reduciendo su exposición sistémica."
      },
      conduta: {
        pt: "Avaliar resposta clínica e considerar antibiótico alternativo se necessário.",
        es: "Evaluar respuesta clínica y considerar antibiótico alternativo si es necesario."
      }
    },
    "digoxina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A tigeciclina pode alterar a exposição sistêmica da digoxina em pacientes críticos, com risco de toxicidade em casos de acumulação.",
        es: "La tigeciclina puede alterar la exposición sistémica de digoxina en pacientes críticos, con riesgo de toxicidad en casos de acumulación."
      },
      conduta: {
        pt: "Monitorar frequência cardíaca, ECG e sinais de toxicidade digitálica.",
        es: "Monitorear frecuencia cardíaca, ECG y signos de toxicidad digitálica."
      }
    },
    "zinco": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Cátions de zinco reduzem a absorção gastrointestinal das tetraciclinas por formação de quelatos insolváveis, comprometendo os níveis séricos e a eficácia antimicrobiana.",
        es: "Los cationes de zinc reducen la absorción gastrointestinal de las tetraciclinas por formación de quelatos insolubles, comprometiendo los niveles séricos y la eficacia antimicrobiana."
      },
      conduta: {
        pt: "Separar a administração por pelo menos 2 a 4 horas entre a tetraciclina e o suplemento de zinco.",
        es: "Separar la administración al menos 2 a 4 horas entre la tetraciclina y el suplemento de zinc."
      }
    },
    "magnesio": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sais de magnésio formam quelatos com tetraciclinas no trato gastrointestinal, reduzindo significativamente a absorção oral do antibiótico.",
        es: "Las sales de magnesio forman quelatos con tetraciclinas en el tracto gastrointestinal, reduciendo significativamente la absorción oral del antibiótico."
      },
      conduta: {
        pt: "Separar os horários de administração por pelo menos 2 horas. Evitar antibióticos contendo magnésio simultâneos.",
        es: "Separar los horarios de administración al menos 2 horas. Evitar antibióticos que contengan magnesio simultáneos."
      }
    },
    "warfarina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "As tetraciclinas (especialmente doxiciclina) podem aumentar o efeito anticoagulante da varfarina/warfarina por supressão da flora intestinal produtora de Vitamina K e por inibição de fatores de coagulação dependentes de vitamina K. Risco de sangramento clínico.",
        es: "Las tetraciclinas (especialmente doxiciclina) pueden aumentar el efecto anticoagulante de la warfarina por supresión de la flora intestinal productora de Vitamina K e inhibición de factores de coagulación dependientes de vitamina K. Riesgo de sangrado clínico."
      },
      conduta: {
        pt: "Monitorar o INR/RNI durante o curso do antibiótico. Ajustar a dose de varfarina conforme valores e orientar o paciente sobre sinais de sangramento.",
        es: "Monitorear el INR/RNI durante el curso del antibiótico. Ajustar la dosis de warfarina según valores y orientar al paciente sobre signos de sangrado."
      }
    },
    "lactato_de_aluminio": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sais de alumínio (incluindo lactato de alumínio e hidróxido de alumínio) formam quelatos insolúveis com tetraciclinas no trato gastrointestinal, reduzindo significativamente a absorção oral do antibiótico e comprometendo sua eficácia.",
        es: "Las sales de aluminio (incluidas lactato de aluminio e hidróxido de aluminio) forman quelatos insolubles con tetraciclinas en el tracto gastrointestinal, reduciendo significativamente la absorción oral del antibiótico y comprometiendo su eficacia."
      },
      conduta: {
        pt: "Separar a administração por pelo menos 2 a 4 horas: tomar a tetraciclina antes do antiácido com alumínio.",
        es: "Separar la administración al menos 2 a 4 horas: tomar la tetraciclina antes del antiácido con aluminio."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     SULFAMETOXAZOL-TRIMETOPRIMA
  ───────────────────────────────────────────────────────────── */
  "sulfametoxazol_trimetoprima": {
    "metotrexato": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito antifolato aditivo severo e competição na secreção tubular renal. Aumenta drasticamente o risco de toxicidade hematológica grave por metotrexato, resultando em pancitopenia e supressão da medula óssea.",
        es: "Efecto antifolato aditivo severo y competición en la secreción tubular renal. Aumenta drásticamente el riesgo de toxicidad hematológica grave por metotrexato, resultando en pancitopenia y supresión de la médula ósea."
      },
      conduta: {
        pt: "Associação estritamente contraindicada. Utilizar alternativa antibiótica que não interfira na via do folato.",
        es: "Asociación estrictamente contraindicada. Utilizar alternativa antibiótica que no interfiera en la vía del folato."
      }
    },
    "varfarina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O cotrimoxazol inibe o metabolismo da varfarina via CYP2C9 e altera a flora intestinal produtora de Vitamina K. Dispara o RNI rapidamente, gerando alto risco de sangramentos fatais.",
        es: "El cotrimoxazol inhibe el metabolismo de la warfarina vía CYP2C9 y altera la flora intestinal productora de Vitamina K. Dispara el RNI rápidamente, generando alto riesgo de sangrados fatales."
      },
      conduta: {
        pt: "Evitar a associação se possível. Se necessário, reduzir preventivamente a dose de varfarina e monitorar o RNI a cada 24-48 horas.",
        es: "Evitar la asociación si es posible. Si es necesario, reducir preventivamente la dosis de warfarina y monitorear el RNI cada 24-48 horas."
      }
    },
    "losartana": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O cotrimoxazol bloqueia os canais ENaC tubulares renais (efeito poupador de potássio semelhante à amilorida), potencializando a hipercalemia induzida pelos ARA-II.",
        es: "El cotrimoxazol bloquea los canales ENaC tubulares renales (efecto ahorrador de potasio similar a la amilorida), potenciando la hiperpotasemia inducida por los ARA-II."
      },
      conduta: {
        pt: "Monitorar potássio sérico e função renal durante o curso. Evitar a combinação em pacientes com DRC ou hipercalemia prévia.",
        es: "Monitorear potasio sérico y función renal durante el curso. Evitar la combinación en pacientes con ERC o hiperpotasemia previa."
      }
    },
    "captopril": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito aditivo de retenção de potássio entre o cotrimoxazol (bloqueio ENaC) e os IECAs. Aumenta significativamente o risco de hipercalemia grave, especialmente em idosos e pacientes com DRC.",
        es: "Efecto aditivo de retención de potasio entre cotrimoxazol (bloqueo ENaC) y los IECA. Aumenta significativamente el riesgo de hiperpotasemia grave, especialmente en ancianos y pacientes con ERC."
      },
      conduta: {
        pt: "Monitorar K+ sérico em 3–5 dias após início. Evitar associação prolongada em populações de risco.",
        es: "Monitorear K+ sérico a los 3–5 días del inicio. Evitar asociación prolongada en poblaciones de riesgo."
      }
    },
    "digoxina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O cotrimoxazol pode aumentar os níveis séricos da digoxina por inibição da excreção tubular renal e eliminação da flora bacteriana intestinal que a metaboliza.",
        es: "El cotrimoxazol puede aumentar los niveles séricos de digoxina por inhibición de la excreción tubular renal y eliminación de la flora bacteriana intestinal que la metaboliza."
      },
      conduta: {
        pt: "Monitorar ECG e sinais de toxicidade digitálica (náuseas, bradicardia, distúrbios visuais). Considerar dosagem sérica de digoxina.",
        es: "Monitorear ECG y signos de toxicidad digitálica (náuseas, bradicardia, trastornos visuales). Considerar dosificación sérica de digoxina."
      }
    },
    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O cotrimoxazol inibe o metabolismo da fenitoína via CYP2C9, podendo aumentar significativamente seus níveis séricos e precipitar toxicidade neurológica.",
        es: "El cotrimoxazol inhibe el metabolismo de la fenitoína vía CYP2C9, pudiendo aumentar significativamente sus niveles séricos y precipitar toxicidad neurológica."
      },
      conduta: {
        pt: "Monitorar sinais de toxicidade (nistagmo, ataxia, letargia). Considerar dosagem sérica de fenitoína.",
        es: "Monitorear signos de toxicidad (nistagmo, ataxia, letargo). Considerar dosificación sérica de fenitoína."
      }
    },
    "eplerenona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "O cotrimoxazol bloqueia os canais ENaC tubulares renais com efeito poupador de potássio semelhante à amilorida; a eplerenona é um antagonista da aldosterona com potente efeito hipercalemiante. A combinação eleva criticamente o risco de hipercalemia grave ou fatal com parada cardíaca.",
        es: "El cotrimoxazol bloquea los canales ENaC tubulares renales con efecto ahorrador de potasio similar a amilorida; la eplerenona es un antagonista de la aldosterona con potente efecto hipercalémico. La combinación eleva críticamente el riesgo de hiperpotasemia grave o fatal con parada cardíaca."
      },
      conduta: {
        pt: "Evitar a associação. Se indispensável, monitorar K+ sérico a cada 24–48 horas e suspender imediatamente se K+ > 5,5 mEq/L.",
        es: "Evitar la asociación. Si es indispensable, monitorear K+ sérico cada 24–48 horas y suspender inmediatamente si K+ > 5,5 mEq/L."
      }
    },
    "amilorida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito poupador de potássio duplo e aditivo: o cotrimoxazol bloqueia ENaC tubular de forma idêntica à amilorida. A combinação resulta em hipercalemia grave com risco de parada cardíaca, especialmente em idosos, DRC ou diabéticos.",
        es: "Efecto ahorrador de potasio doble y aditivo: cotrimoxazol bloquea ENaC tubular de forma idéntica a amilorida. La combinación resulta en hiperpotasemia grave con riesgo de parada cardíaca, especialmente en ancianos, ERC o diabéticos."
      },
      conduta: {
        pt: "Não associar. Substituir um dos fármacos. Monitorar K+ urgentemente se exposição acidental ocorrer.",
        es: "No asociar. Sustituir uno de los fármacos. Monitorear K+ urgentemente si ocurre exposición accidental."
      }
    },
    "dapsona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de cotrimoxazol com dapsona aumenta o risco de toxicidade hematológica grave, incluindo anemia hemolítica (especialmente em pacientes com deficiência de G6PD) e meta-hemoglobinemia por mecanismo oxidativo aditivo.",
        es: "La asociación de cotrimoxazol con dapsona aumenta el riesgo de toxicidad hematológica grave, incluyendo anemia hemolítica (especialmente en pacientes con deficiencia de G6PD) y metahemoglobinemia por mecanismo oxidativo aditivo."
      },
      conduta: {
        pt: "Monitorar hemograma completo, sinais de hemólise (icterícia, palidez) e cianose (meta-hemoglobinemia). Evitar associação em pacientes com G6PD deficiente.",
        es: "Monitorear hemograma completo, signos de hemólisis (ictericia, palidez) y cianosis (metahemoglobinemia). Evitar asociación en pacientes con G6PD deficiente."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     METRONIDAZOL
  ───────────────────────────────────────────────────────────── */
  "metronidazol": {
    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito dissulfiram (antabuse). O metronidazol inibe a aldeído desidrogenase, acumulando acetaldeído no organismo após ingestão de álcool, provocando taquicardia, rubor facial, vômitos e hipotensão severa.",
        es: "Efecto disulfiram (antabuse). El metronidazol inhibe la aldehído deshidrogenasa, acumulando acetaldehído en el organismo tras la ingesta de alcohol, provocando taquicardia, rubor facial, vómitos e hipotensión severa."
      },
      conduta: {
        pt: "Bloqueio absoluto. Orientar o paciente a não consumir bebidas alcoólicas ou medicamentos contendo etanol durante o tratamento e até 72 horas após o término.",
        es: "Bloqueo absoluto. Orientar al paciente a no consumir bebidas alcohólicas o medicamentos que contengan etanol durante el tratamiento y hasta 72 horas después de terminarlo."
      }
    },
    "varfarina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição marcante do metabolismo do isômero ativo da varfarina via CYP2C9, estendendo consideravelmente o tempo de protrombina e elevando o risco hemorrágico.",
        es: "Inhibición marcada del metabolismo del isómero activo de la warfarina vía CYP2C9, extendiendo considerablemente el tiempo de protrombina y elevando el riesgo hemorrágico."
      },
      conduta: {
        pt: "Exige redução da dose de varfarina e controle diário do RNI durante o curso com o antimicrobiano.",
        es: "Exige reducción de la dosis de warfarina y control diario del RNI durante el curso con el antimicrobiano."
      }
    },
    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O metronidazol pode reduzir a eliminação renal do lítio por mecanismo não totalmente elucidado, elevando seus níveis séricos e aumentando o risco de toxicidade neurológica (tremor grosseiro, confusão, disartria, convulsões) e renal.",
        es: "El metronidazol puede reducir la eliminación renal de litio por mecanismo no totalmente elucidado, elevando sus niveles séricos y aumentando el riesgo de toxicidad neurológica (temblor grueso, confusión, disartria, convulsiones) y renal."
      },
      conduta: {
        pt: "Monitorar litemia, creatinina e sintomas neurológicos durante o tratamento. Considerar redução de dose do lítio e aumentar a frequência de dosagem sérica.",
        es: "Monitorear litemia, creatinina y síntomas neurológicos durante el tratamiento. Considerar reducción de dosis de litio y aumentar la frecuencia de dosificación sérica."
      }
    },
    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "O metronidazol pode inibir o metabolismo da fenitoína via CYP2C9, elevando seus níveis séricos e aumentando o risco de toxicidade neurológica (nistagmo, ataxia, diplopia, confusão).",
        es: "El metronidazol puede inhibir el metabolismo de la fenitoína vía CYP2C9, elevando sus niveles séricos y aumentando el riesgo de toxicidad neurológica (nistagmo, ataxia, diplopía, confusión)."
      },
      conduta: {
        pt: "Monitorar sinais de toxicidade da fenitoína e considerar dosagem sérica durante o curso de metronidazol. Ajustar dose se necessário.",
        es: "Monitorear signos de toxicidad de fenitoína y considerar dosificación sérica durante el curso de metronidazol. Ajustar dosis si es necesario."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CAPTOPRIL (representa toda a classe IECA via alias)
  ───────────────────────────────────────────────────────────── */
  "captopril": {
    "losartana": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Duplo bloqueio concomitante do sistema renina-angiotensina-aldosterona (IECA + ARA II). Não demonstra benefício clínico e eleva de forma crítica o risco de hipotensão refratária, hipercalemia severa e lesão renal aguda.",
        es: "Doble bloqueo concomitante del sistema renina-angiotensina-aldosterona (IECA + ARA II). No demuestra beneficio clínico y eleva de forma crítica el riesgo de hipotensión refractaria, hiperpotasemia severa y lesión renal aguda."
      },
      conduta: {
        pt: "Combinação contraindicada na prática clínica. Suspender um dos fármacos imediatamente.",
        es: "Combinación contraindicada en la práctica clínica. Suspender uno de los fármacos inmediatamente."
      }
    },
    "espironolactona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito aditivo de retenção eletrolítica (IECA + Poupador de K+). Alto risco de indução de hipercalemia severa com repercussão eletrocardiográfica e parada cardíaca.",
        es: "Efecto aditivo de retención electrolítica (IECA + Ahorrador de K+). Alto riesgo de inducción de hiperpotasemia severa con repercusión electrocardiográfica y paro cardíaco."
      },
      conduta: {
        pt: "Usar apenas sob indicação formal (Insuficiência Cardíaca). Exige monitorização rigorosa do potássio sérico e função renal (ClCr) em 3, 7 dias e mensalmente.",
        es: "Usar solo bajo indicación formal (Insuficiencia Cardíaca). Exige monitoreo riguroso del potasio sérico y función renal (ClCr) a los 3, 7 días y mensualmente."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     LINEZOLIDA
  ───────────────────────────────────────────────────────────── */
  "linezolida": {
    "sertralina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A linezolida atua como um inibidor não seletivo e reversível da monoamina oxidase (IMAO). A associação com um ISRS (sertralina) provoca um acúmulo massivo de serotonina nas fendas sinápticas, culminando na Síndrome Serotoninérgica (hipertermia, instabilidade autonômica, rigidez muscular e convulsões).",
        es: "La linezolida actúa como un inhibidor no selectivo y reversible de la monoaminooxidasa (IMAO). La asociación con un ISRS (sertralina) provoca un cúmulo masivo de serotonina en las hendiduras sinápticas, culminando en el Síndrome Serotoninérgico (hipertermia, inestabilidad autónoma, rigidez muscular y convulsiones)."
      },
      conduta: {
        pt: "Associação contraindicada. Suspender o antidepressivo pelo menos 14 dias antes de iniciar linezolida, ou utilizar alternativa antibiótica.",
        es: "Asociación contraindicada. Suspender el antidepresivo al menos 14 días antes de iniciar linezolida, o utilizar una alternativa antibiótica."
      }
    },
    "fluoxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição da MAO pela linezolida + inibição da recaptação de serotonina pela fluoxetina = acúmulo crítico de serotonina. Risco elevado de Síndrome Serotoninérgica grave com hipertermia, convulsões e instabilidade hemodinâmica.",
        es: "Inhibición de la MAO por linezolida + inhibición de la recaptación de serotonina por fluoxetina = cúmulo crítico de serotonina. Alto riesgo de Síndrome Serotoninérgico grave con hipertermia, convulsiones e inestabilidad hemodinámica."
      },
      conduta: {
        pt: "Associação contraindicada. Suspender a fluoxetina pelo menos 5 semanas antes de iniciar linezolida (meia-vida prolongada).",
        es: "Asociación contraindicada. Suspender la fluoxetina al menos 5 semanas antes de iniciar linezolida (semivida prolongada)."
      }
    },
    "escitalopram": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização do efeito serotoninérgico pela inibição simultânea da MAO (linezolida) e recaptação de serotonina (escitalopram). Síndrome Serotoninérgica com risco de vida iminente.",
        es: "Potenciación del efecto serotoninérgico por inhibición simultánea de la MAO (linezolida) y recaptación de serotonina (escitalopram). Síndrome Serotoninérgico con riesgo vital inminente."
      },
      conduta: {
        pt: "Não associar. Suspender o ISRS pelo menos 14 dias antes e utilizar alternativa antibiótica se possível.",
        es: "No asociar. Suspender el ISRS al menos 14 días antes y utilizar alternativa antibiótica si es posible."
      }
    },
    "duloxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição da MAO + bloqueio da recaptação de serotonina e noradrenalina (ISRSN) gera risco crítico de Síndrome Serotoninérgica grave ou crise hipertensiva.",
        es: "Inhibición de la MAO + bloqueo de la recaptación de serotonina y noradrenalina (IRSN) genera riesgo crítico de Síndrome Serotoninérgico grave o crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicação absoluta. Não administrar concomitantemente.",
        es: "Contraindicación absoluta. No administrar concomitantemente."
      }
    },
    "fentanil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O fentanil possui fraca atividade serotoninérgica. A combinação com linezolida (IMAO) pode elevar o risco de Síndrome Serotoninérgica, especialmente em doses altas ou infusão contínua.",
        es: "El fentanilo tiene débil actividad serotoninérgica. La combinación con linezolida (IMAO) puede elevar el riesgo de Síndrome Serotoninérgico, especialmente en dosis altas o infusión continua."
      },
      conduta: {
        pt: "Monitorar estado neurológico e sinais de toxicidade serotoninérgica. Utilizar doses mínimas eficazes e evitar infusões prolongadas.",
        es: "Monitorear estado neurológico y signos de toxicidad serotoninérgica. Utilizar dosis mínimas eficaces y evitar infusiones prolongadas."
      }
    },
    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A metadona possui atividade serotoninérgica intrínseca. A inibição da MAO pela linezolida potencializa esse efeito, aumentando o risco de Síndrome Serotoninérgica e prolongamento do QT.",
        es: "La metadona tiene actividad serotoninérgica intrínseca. La inhibición de la MAO por linezolida potencia este efecto, aumentando el riesgo de Síndrome Serotoninérgico y prolongación del QT."
      },
      conduta: {
        pt: "Monitorar rigorosamente. Realizar ECG basal e seriado. Ter baixo limiar para suspender uma das drogas.",
        es: "Monitorear rigurosamente. Realizar ECG basal y seriado. Tener bajo umbral para suspender uno de los fármacos."
      }
    },
    "paroxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A linezolida inibe a MAO de forma não seletiva e reversível. A paroxetina é um potente ISRS com meia-vida longa. A associação causa acúmulo crítico de serotonina nas fendas sinápticas, precipitando Síndrome Serotoninérgica grave com hipertermia, convulsões e instabilidade hemodinâmica.",
        es: "La linezolida inhibe la MAO de forma no selectiva y reversible. La paroxetina es un potente ISRS con semivida larga. La asociación causa acumulación crítica de serotonina en las hendiduras sinápticas, precipitando Síndrome Serotoninérgico grave con hipertermia, convulsiones e inestabilidad hemodinámica."
      },
      conduta: {
        pt: "Associação contraindicada. Suspender a paroxetina pelo menos 14 dias antes de iniciar linezolida. Utilizar alternativa antibiótica sempre que possível.",
        es: "Asociación contraindicada. Suspender la paroxetina al menos 14 días antes de iniciar linezolida. Utilizar alternativa antibiótica siempre que sea posible."
      }
    },
    "citalopram": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Combinação de inibição da MAO (linezolida) com ISRS (citalopram) gera risco crítico de Síndrome Serotoninérgica. Adicionalmente, o citalopram prolonga o QTc de forma dose-dependente, potencializando risco cardíaco.",
        es: "La combinación de inhibición de la MAO (linezolida) con ISRS (citalopram) genera riesgo crítico de Síndrome Serotoninérgico. Adicionalmente, el citalopram prolonga el QTc de forma dosis-dependiente, potenciando riesgo cardíaco."
      },
      conduta: {
        pt: "Não associar. Suspender citalopram pelo menos 14 dias antes. Monitorar ECG e estado neurológico se exposição acidental ocorrer.",
        es: "No asociar. Suspender citalopram al menos 14 días antes. Monitorear ECG y estado neurológico si ocurre exposición accidental."
      }
    },
    "amitriptilina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A amitriptilina inibe a recaptação de serotonina e noradrenalina; a linezolida (IMAO) potencializa o efeito serotoninérgico. Risco elevado de Síndrome Serotoninérgica e toxicidade do SNC (hiperreflexia, agitação, confusão, febre).",
        es: "La amitriptilina inhibe la recaptación de serotonina y noradrenalina; la linezolida (IMAO) potencia el efecto serotoninérgico. Alto riesgo de Síndrome Serotoninérgico y toxicidad del SNC (hiperreflexia, agitación, confusión, fiebre)."
      },
      conduta: {
        pt: "Evitar a associação. Monitorar hiperreflexia, febre, agitação e confusão. Ter baixo limiar para suspender um dos fármacos.",
        es: "Evitar la asociación. Monitorear hiperreflexia, fiebre, agitación y confusión. Tener bajo umbral para suspender uno de los fármacos."
      }
    },
    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A mirtazapina atua como antagonista de receptores serotoninérgicos e noradrenérgicos; em combinação com a inibição da MAO pela linezolida, pode elevar o tônus serotoninérgico e precipitar Síndrome Serotoninérgica.",
        es: "La mirtazapina actúa como antagonista de receptores serotoninérgicos y noradrenérgicos; en combinación con la inhibición de la MAO por linezolida, puede elevar el tono serotoninérgico y precipitar Síndrome Serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sinais de Síndrome Serotoninérgica (tremor, mioclonia, diaforese, confusão). Considerar suspensão de um dos fármacos se sintomas emergirem.",
        es: "Monitorear signos de Síndrome Serotoninérgico (temblor, mioclonía, diaforesis, confusión). Considerar suspensión de uno de los fármacos si aparecen síntomas."
      }
    },
    "pseudoefedrina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A pseudoefedrina é um simpaticomimético de ação indireta; a inibição da MAO pela linezolida impede a degradação das catecolaminas, resultando em potencial crise hipertensiva grave com cefaleia intensa, arritmias e risco de AVC.",
        es: "La pseudoefedrina es un simpaticomimético de acción indirecta; la inhibición de la MAO por linezolida impide la degradación de catecolaminas, resultando en potencial crisis hipertensiva grave con cefalea intensa, arritmias y riesgo de ACV."
      },
      conduta: {
        pt: "Evitar a associação. Orientar o paciente a não usar descongestionantes com pseudoefedrina durante o tratamento com linezolida.",
        es: "Evitar la asociación. Orientar al paciente a no usar descongestionantes con pseudoefedrina durante el tratamiento con linezolida."
      }
    },

    /* ── Ontologia: Droga×Classe — LINEZOLIDA × toda a classe ISRS ── */
    "$classe_isrs": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A linezolida possui atividade inibidora da MAO (IMAO reversível não-seletivo). A combinação com qualquer ISRS (fluoxetina, sertralina, escitalopram, paroxetina, citalopram, fluvoxamina) provoca acúmulo maciço de serotonina, com risco de síndrome serotoninérgica grave: hipertermia, rigidez muscular, mioclonias, instabilidade autonômica e coma. Risco de morte.",
        es: "La linezolida tiene actividad inhibidora de la MAO (IMAO reversible no selectivo). La combinación con cualquier ISRS (fluoxetina, sertralina, escitalopram, paroxetina, citalopram, fluvoxamina) provoca acumulación masiva de serotonina, con riesgo de síndrome serotoninérgico grave: hipertermia, rigidez muscular, mioclonías, inestabilidad autonómica y coma. Riesgo de muerte."
      },
      conduta: {
        pt: "ASSOCIAÇÃO CONTRAINDICADA. Suspender o ISRS pelo menos 14 dias antes de iniciar linezolida (5 semanas para fluoxetina). Se uso de linezolida for emergência, monitorar em UTI com suporte para síndrome serotoninérgica (ciproeptadina, resfriamento, benzodiazepínicos). Aguardar 24h após última dose de linezolida antes de reintroduzir ISRS.",
        es: "ASOCIACIÓN CONTRAINDICADA. Suspender el ISRS al menos 14 días antes de iniciar linezolida (5 semanas para fluoxetina). Si el uso de linezolida es una emergencia, monitorear en UCI con soporte para síndrome serotoninérgico (ciproheptadina, enfriamiento, benzodiazepinas). Esperar 24h después de la última dosis de linezolida antes de reintroducir el ISRS."
      }
    },

    /* ── Ontologia: Droga×Classe — LINEZOLIDA × toda a classe TRICÍCLICOS ── */
    "$classe_tricíclicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Antidepressivos tricíclicos (amitriptilina, nortriptilina, imipramina, clomipramina) inibem a recaptação de noradrenalina e serotonina. A linezolida, como IMAO fraco, potencializa esses efeitos levando a síndrome serotoninérgica e crise adrenérgica: hipertensão grave, hiperpirexia e convulsões.",
        es: "Los antidepresivos tricíclicos (amitriptilina, nortriptilina, imipramina, clomipramina) inhiben la recaptación de noradrenalina y serotonina. La linezolida, como IMAO débil, potencia estos efectos llevando a síndrome serotoninérgico y crisis adrenérgica: hipertensión grave, hiperpirexia y convulsiones."
      },
      conduta: {
        pt: "CONTRAINDICADO. Não associar. Washout de 14 dias do tricíclico antes de linezolida. Monitorar sinais vitais e estado neurológico rigorosamente se a associação for inadvertida.",
        es: "CONTRAINDICADO. No asociar. Washout de 14 días del tricíclico antes de linezolida. Monitorear signos vitales y estado neurológico rigurosamente si la asociación fue inadvertida."
      }
    },

    /* ── Ontologia: Droga×Classe — LINEZOLIDA × toda a classe IMAOS ── */
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Dupla inibição da MAO (linezolida + IMAO clássico: fenelzina, tranilcipromina, selegilina) resulta em inibição enzimática máxima, levando à crise serotoninérgica e hipertensiva fulminante. Combinação absolutamente contraindicada com elevado risco de morte.",
        es: "La doble inhibición de la MAO (linezolida + IMAO clásico: fenelzina, tranilcipromina, selegilina) resulta en inhibición enzimática máxima, llevando a crisis serotoninérgica e hipertensiva fulminante. Combinación absolutamente contraindicada con elevado riesgo de muerte."
      },
      conduta: {
        pt: "ABSOLUTAMENTE CONTRAINDICADO. Intervalo mínimo de 14 dias entre qualquer IMAO e linezolida (em qualquer sentido). Monitorar em UTI se exposição inadvertida; suporte hemodinâmico e uso de ciproeptadina.",
        es: "ABSOLUTAMENTE CONTRAINDICADO. Intervalo mínimo de 14 días entre cualquier IMAO y linezolida (en cualquier sentido). Monitorear en UCI si exposición inadvertida; soporte hemodinámico y uso de ciproheptadina."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TADALAFILA (representa inibidores PDE5 via alias)
  ───────────────────────────────────────────────────────────── */
  "tadalafila": {
    "isossorbida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização extrema e imprevisível dos efeitos hipotensores dos nitratos através da via do óxido nítrico/cGMP por inibição da PDE5. Pode induzir colapso hemodinâmico refratário fatal.",
        es: "Potenciación extrema e impredecible de los efectos hipotensores de los nitratos a través de la vía del óxido nítrico/cGMP por inhibición de la PDE5. Puede inducir colapso hemodinámico refractario fatal."
      },
      conduta: {
        pt: "Contraindicação absoluta. Não administrar nitratos se o paciente utilizou tadalafila nas últimas 48 horas.",
        es: "Contraindicación absoluta. No administrar nitratos si el paciente utilizó tadalafilo en las últimas 48 horas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     VARFARINA
  ───────────────────────────────────────────────────────────── */
  "varfarina": {
    "ceftriaxona": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Cefalosporinas de amplo espectro podem eliminar bactérias intestinais produtoras de Vitamina K, potencializando levemente o efeito anticoagulante da varfarina com potencial elevação do RNI.",
        es: "Cefalosporinas de amplio espectro pueden eliminar bacterias intestinales productoras de Vitamina K, potenciando levemente el efecto anticoagulante de la warfarina con potencial elevación del RNI."
      },
      conduta: {
        pt: "Monitorar o RNI durante o curso de antibióticos e ajustar a dose de varfarina se houver flutuações laboratoriais.",
        es: "Monitorear el RNI durante el curso de antibióticos y ajustar la dosis de warfarina si ocurren fluctuaciones laboratoriales."
      }
    },
    "clindamicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Distúrbio na flora intestinal bacteriana responsável pela síntese de fatores de coagulação dependentes de Vitamina K, aumentando a sensibilidade do paciente à varfarina.",
        es: "Disturbio en la flora intestinal bacteriana responsable de la síntesis de factores de coagulación dependientes de Vitamina K, aumentando la sensibilidad del paciente a la warfarina."
      },
      conduta: {
        pt: "Monitorização de rotina do RNI. Orientar o paciente a relatar sangramentos gengivais ou equimoses.",
        es: "Monitoreo de rutina del RNI. Orientar al paciente a reportar sangrados gingivales o equimosis."
      }
    },
    "nitrofurantoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Mecanismo farmacodinâmico indireto que altera a resposta hemostática, podendo elevar discretamente o INR em pacientes suscetíveis.",
        es: "Mecanismo farmacodinámico indirecto que altera la respuesta hemostática, pudiendo elevar discretamente el INR en pacientes susceptibles."
      },
      conduta: {
        pt: "Monitorar INR nos primeiros dias de associação.",
        es: "Monitorear el INR en los primeros días de asociación."
      }
    },

    /* ── Ontologia: Droga×Classe — VARFARINA × toda a classe AINEs ── */
    "$classe_aines": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Os AINEs (ibuprofeno, diclofenaco, naproxeno, cetoprofeno, meloxicam, celecoxibe, nimesulida) potencializam o efeito anticoagulante da varfarina por múltiplos mecanismos: inibição do TXA2 plaquetário (antiagregação), lesão da mucosa gástrica com risco de sangramento gastrointestinal, e alguns AINEs deslocam a varfarina de proteínas plasmáticas aumentando sua fração livre. O risco combinado de sangramento maior é aumentado em 3–4 vezes.",
        es: "Los AINEs (ibuprofeno, diclofenaco, naproxeno, ketoprofeno, meloxicam, celecoxib, nimesulida) potencian el efecto anticoagulante de la warfarina por múltiples mecanismos: inhibición del TXA2 plaquetario (antiagregación), lesión de la mucosa gástrica con riesgo de sangrado gastrointestinal, y algunos AINEs desplazan la warfarina de proteínas plasmáticas aumentando su fracción libre. El riesgo combinado de sangrado mayor aumenta 3–4 veces."
      },
      conduta: {
        pt: "Evitar a combinação sempre que possível. Preferir paracetamol como analgésico alternativo. Se inevitável, monitorar INR 2–3x por semana na fase inicial, proteger a mucosa gástrica com IBP, e orientar o paciente sobre sinais de sangramento. Considerar redução da dose de varfarina sob supervisão.",
        es: "Evitar la combinación siempre que sea posible. Preferir paracetamol como analgésico alternativo. Si es inevitable, monitorear INR 2–3 veces por semana en la fase inicial, proteger la mucosa gástrica con IBP, y orientar al paciente sobre señales de sangrado. Considerar reducción de la dosis de warfarina bajo supervisión."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     FOSFOMICINA
  ───────────────────────────────────────────────────────────── */
  "fosfomicina": {
    "antiacido": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "A administração concomitante com antiácidos contendo magnésio ou alumínio reduz a absorção gastrointestinal da fosfomicina, diminuindo suas concentrações urinárias.",
        es: "La administración concomitante con antiácidos que contienen magnesio o aluminio reduce la absorción gastrointestinal de la fosfomicina, disminuyendo sus concentraciones urinarias."
      },
      conduta: {
        pt: "Espaçar a administração dos fármacos. Tomar a fosfomicina pelo menos 2 horas antes ou 4 horas após o antiácido.",
        es: "Espaciar la administración de los fármacos. Tomar la fosfomicina al menos 2 horas antes o 4 horas después del antiácido."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFDINIR
  ───────────────────────────────────────────────────────────── */
  "cefdinir": {
    "ferro": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "O ferro forma um complexo de quelação não absorvível com o cefdinir no trato gastrointestinal, reduzindo a absorção do antibiótico em até 80%. Pode causar fezes avermelhadas.",
        es: "El hierro forma un complejo de quelación no absorbible con el cefdinir en el trato gastrointestinal, reduciendo la absorción del antibiótico hasta un 80%. Puede causar heces rojizas."
      },
      conduta: {
        pt: "Separar as tomadas por um intervalo mínimo de 2 horas.",
        es: "Separar las tomas por un intervalo mínimo de 2 horas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     VACINA
  ───────────────────────────────────────────────────────────── */
  "vacina": {
    "antibiotico": {
      gravidade: "leve",
      scoreClinico: 1,
      descricao: {
        pt: "Interação teórica. Antibióticos de amplo espectro podem inativar vacinas bacterianas vivas orais (como a vacina contra febre tifoide Ty21a) se administradas em conjunto.",
        es: "Interacción teórica. Antibióticos de amplio espectro pueden inactivar vacunas bacterianas vivas orales (como la vacuna contra la fiebre tifoidea Ty21a) si se administran en conjunto."
      },
      conduta: {
        pt: "Evitar a vacinação com agentes vivos bacterianos durante o curso de antibioticoterapia ativa.",
        es: "Evitar la vacunación con agentes vivos bacterianos durante el curso de antibioticoterapia activa."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TEDIZOLIDA
  ───────────────────────────────────────────────────────────── */
  "tedizolida": {
    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A tedizolida possui atividade inibitória da MAO semelhante à linezolida, porém de menor potência. A combinação com fluoxetina (ISRS) pode precipitar Síndrome Serotoninérgica, especialmente em pacientes idosos ou com doses elevadas.",
        es: "La tedizolida tiene actividad inhibitoria de la MAO similar a la linezolida, pero de menor potencia. La combinación con fluoxetina (ISRS) puede precipitar Síndrome Serotoninérgico, especialmente en pacientes mayores o con dosis elevadas."
      },
      conduta: {
        pt: "Evitar a associação sempre que possível. Monitorar sinais clínicos de toxicidade serotoninérgica (agitação, mioclonia, hipertermia, diaforeses).",
        es: "Evitar la asociación siempre que sea posible. Monitorear signos clínicos de toxicidad serotoninérgica (agitación, mioclonía, hipertermia, diaforesis)."
      }
    },
    "escitalopram": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencial risco serotoninérgico pela inibição parcial da MAO (tedizolida) somada ao bloqueio da recaptação de serotonina (escitalopram).",
        es: "Riesgo serotoninérgico potencial por inhibición parcial de la MAO (tedizolida) sumada al bloqueo de la recaptación de serotonina (escitalopram)."
      },
      conduta: {
        pt: "Monitorar clinicamente o paciente. Considerar alternativa antibiótica de menor risco se a seleção for possível.",
        es: "Monitorear clínicamente al paciente. Considerar alternativa antibiótica de menor riesgo si la selección es posible."
      }
    },
    "metadona": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Possível potencialização serotoninérgica discreta pela combinação de inibição parcial da MAO (tedizolida) com a fraca atividade serotoninérgica da metadona.",
        es: "Posible potenciación serotoninérgica discreta por la combinación de inhibición parcial de la MAO (tedizolida) con la débil actividad serotoninérgica de la metadona."
      },
      conduta: {
        pt: "Monitorar sintomas. Realizar ECG de controle dado o risco de QT prolongado pela metadona isoladamente.",
        es: "Monitorear síntomas. Realizar ECG de control dado el riesgo de QT prolongado por la metadona de forma aislada."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     VANCOMICINA
  ───────────────────────────────────────────────────────────── */
  "vancomicina": {
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da nefrotoxicidade. A vancomicina e o tacrolimo exercem toxicidade tubular renal aditiva, aumentando o risco de insuficiência renal aguda em pacientes transplantados.",
        es: "Potenciación importante de la nefrotoxicidad. La vancomicina y el tacrolimus ejercen toxicidad tubular renal aditiva, aumentando el riesgo de insuficiencia renal aguda en pacientes trasplantados."
      },
      conduta: {
        pt: "Monitorar creatinina diariamente, débito urinário e níveis séricos de vancomicina (AUC/CMI). Ajustar doses conforme função renal.",
        es: "Monitorear creatinina diariamente, diuresis y niveles séricos de vancomicina (AUC/CMI). Ajustar dosis según función renal."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Associação de dois nefrotóxicos com mecanismos complementares de lesão renal (tubulotoxicidade + vasoconstricção aferente). Aumenta substancialmente o risco de lesão renal aguda.",
        es: "Asociación de dos nefrotóxicos con mecanismos complementarios de lesión renal (tubulotoxicidad + vasoconstricción aferente). Aumenta sustancialmente el riesgo de lesión renal aguda."
      },
      conduta: {
        pt: "Monitorar função renal, débito urinário e níveis séricos de ciclosporina. Reduzir dose ou substituir antibiótico se creatinina elevada.",
        es: "Monitorear función renal, diuresis y niveles séricos de ciclosporina. Reducir dosis o sustituir antibiótico si la creatinina se eleva."
      }
    },
    "anfotericina_b": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Associação altamente nefrotóxica. A combinação de vancomicina com anfotericina B convencional resulta em risco crítico de insuficiência renal aguda grave, especialmente em pacientes críticos ou com função renal prévia comprometida.",
        es: "Asociación altamente nefrotóxica. La combinación de vancomicina con anfotericina B convencional resulta en riesgo crítico de insuficiencia renal aguda grave, especialmente en pacientes críticos o con función renal previa comprometida."
      },
      conduta: {
        pt: "Evitar a associação sempre que possível. Preferir anfotericina lipossomal se antifúngico for necessário. Monitorar função renal intensivamente.",
        es: "Evitar la asociación siempre que sea posible. Preferir anfotericina liposomal si el antifúngico es necesario. Monitorear función renal intensivamente."
      }
    },
    "colistina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização extrema da nefrotoxicidade. A colistina já possui nefrotoxicidade dose-dependente significativa; a adição de vancomicina multiplica o risco de lesão renal aguda grave e irreversível.",
        es: "Potenciación extrema de la nefrotoxicidad. La colistina ya posee nefrotoxicidad dosis-dependiente significativa; la adición de vancomicina multiplica el riesgo de lesión renal aguda grave e irreversible."
      },
      conduta: {
        pt: "Evitar a associação. Se indispensável para infecção por MDR, monitorar creatinina a cada 12 horas e débito urinário. Ajustar doses diariamente.",
        es: "Evitar la asociación. Si es indispensable para infección por MDR, monitorear creatinina cada 12 horas y diuresis. Ajustar dosis diariamente."
      }
    },
    "polimixina_b": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco extremamente elevado de lesão renal aguda grave por toxicidade tubular aditiva. A polimixina B já apresenta nefrotoxicidade intrínseca considerável.",
        es: "Riesgo extremadamente elevado de lesión renal aguda grave por toxicidad tubular aditiva. La polimixina B ya presenta nefrotoxicidad intrínseca considerable."
      },
      conduta: {
        pt: "Evitar uso concomitante. Monitorar função renal intensivamente se combinação for inevitável em infecções por microrganismos resistentes.",
        es: "Evitar uso concomitante. Monitorear función renal intensivamente si la combinación es inevitable en infecciones por microorganismos resistentes."
      }
    },
    "cisplatina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de vancomicina com cisplatina potencializa a nefrotoxicidade e ototoxicidade de ambos os fármacos. A cisplatina causa lesão tubular proximal e dano coclear; a vancomicina adiciona toxicidade tubular independente, elevando o risco de insuficiência renal aguda e perda auditiva irreversível.",
        es: "La asociación de vancomicina con cisplatino potencia la nefrotoxicidad y ototoxicidad de ambos fármacos. El cisplatino causa lesión tubular proximal y daño coclear; la vancomicina añade toxicidad tubular independiente, elevando el riesgo de insuficiencia renal aguda y pérdida auditiva irreversible."
      },
      conduta: {
        pt: "Monitorar função renal (creatinina diária), débito urinário, audiometria e níveis séricos de vancomicina (AUC/CMI). Hidratação agressiva obrigatória.",
        es: "Monitorear función renal (creatinina diaria), diuresis, audiometría y niveles séricos de vancomicina (AUC/CMI). Hidratación agresiva obligatoria."
      }
    },
    "contraste_iodado": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A administração de contraste iodado em pacientes em uso de vancomicina pode aumentar o risco de lesão renal aguda induzida por contraste, especialmente em pacientes com função renal prévia comprometida ou desidratados.",
        es: "La administración de contraste yodado en pacientes en uso de vancomicina puede aumentar el riesgo de lesión renal aguda inducida por contraste, especialmente en pacientes con función renal previa comprometida o deshidratados."
      },
      conduta: {
        pt: "Hidratar adequadamente antes e após o contraste. Monitorar creatinina e débito urinário. Avaliar risco-benefício do contraste em pacientes em vancomicina com função renal limítrofe.",
        es: "Hidratar adecuadamente antes y después del contraste. Monitorear creatinina y diuresis. Evaluar riesgo-beneficio del contraste en pacientes en vancomicina con función renal limítrofe."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TEICOPLANINA
  ───────────────────────────────────────────────────────────── */
  "teicoplanina": {
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A teicoplanina pode potencializar a nefrotoxicidade do tacrolimo, aumentando o risco de lesão tubular renal aguda em pacientes transplantados.",
        es: "La teicoplanina puede potenciar la nefrotoxicidad del tacrolimus, aumentando el riesgo de lesión tubular renal aguda en pacientes trasplantados."
      },
      conduta: {
        pt: "Monitorar creatinina, débito urinário e níveis séricos de tacrolimo. Ajustar doses conforme evolução da função renal.",
        es: "Monitorear creatinina, diuresis y niveles séricos de tacrolimus. Ajustar dosis conforme evolución de la función renal."
      }
    },
    "anfotericina_b": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da toxicidade renal pela combinação de glicopeptídeo com anfotericina B. Risco de lesão tubular progressiva.",
        es: "Potenciación de la toxicidad renal por la combinación de glucopéptido con anfotericina B. Riesgo de lesión tubular progresiva."
      },
      conduta: {
        pt: "Monitorar função renal diariamente. Preferir anfotericina lipossomal se disponível para reduzir toxicidade renal.",
        es: "Monitorear función renal diariamente. Preferir anfotericina liposomal si está disponible para reducir toxicidad renal."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     COLISTINA
  ───────────────────────────────────────────────────────────── */
  "colistina": {
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A colistina causa nefrotoxicidade dose-dependente intrínseca. A adição do tacrolimo potencializa o risco de lesão renal aguda, especialmente em pacientes transplantados com DRC prévia.",
        es: "La colistina causa nefrotoxicidad dosis-dependiente intrínseca. La adición de tacrolimus potencia el riesgo de lesión renal aguda, especialmente en pacientes trasplantados con ERC previa."
      },
      conduta: {
        pt: "Monitorar creatinina diariamente. Evitar outros nefrotóxicos concomitantes e ajustar dose de colistina pelo clearance de creatinina.",
        es: "Monitorear creatinina diariamente. Evitar otros nefrotóxicos concomitantes y ajustar dosis de colistina según el aclaramiento de creatinina."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da toxicidade renal entre dois agentes nefrotóxicos com mecanismos distintos de lesão tubular.",
        es: "Potenciación importante de la toxicidad renal entre dos agentes nefrotóxicos con mecanismos distintos de lesión tubular."
      },
      conduta: {
        pt: "Monitorização renal rigorosa. Ajustar doses e considerar substituição por agente menos nefrotóxico.",
        es: "Monitorización renal rigurosa. Ajustar dosis y considerar sustitución por agente menos nefrotóxico."
      }
    },
    "anfotericina_b": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Associação extremamente nefrotóxica. Dois dos agentes com maior potencial de lesão tubular renal combinados. Alto risco de insuficiência renal aguda irreversível.",
        es: "Asociación extremadamente nefrotóxica. Dos de los agentes con mayor potencial de lesión tubular renal combinados. Alto riesgo de insuficiencia renal aguda irreversible."
      },
      conduta: {
        pt: "Evitar associação sempre que possível. Se inevitável por infecção grave por MDR, usar anfotericina lipossomal e monitorar função renal a cada 12 horas.",
        es: "Evitar asociación siempre que sea posible. Si es inevitable por infección grave por MDR, usar anfotericina liposomal y monitorear función renal cada 12 horas."
      }
    },
    "cisplatina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A colistina apresenta nefrotoxicidade intrínseca dose-dependente por lesão tubular proximal. A cisplatina adiciona toxicidade renal e coclear independente. A combinação eleva substancialmente o risco de insuficiência renal aguda grave e perda auditiva irreversível.",
        es: "La colistina presenta nefrotoxicidad intrínseca dosis-dependiente por lesión tubular proximal. El cisplatino añade toxicidad renal y coclear independiente. La combinación eleva sustancialmente el riesgo de insuficiencia renal aguda grave y pérdida auditiva irreversible."
      },
      conduta: {
        pt: "Evitar a associação sempre que possível. Se necessária, monitorar função renal e audição rigorosamente, com ajuste de doses pela função renal.",
        es: "Evitar la asociación siempre que sea posible. Si es necesaria, monitorear función renal y audición rigurosamente, con ajuste de dosis por la función renal."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     POLIMIXINA B
  ───────────────────────────────────────────────────────────── */
  "polimixina_b": {
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumento significativo do risco de nefrotoxicidade pela associação de polimixina B com o imunossupressor tacrolimo.",
        es: "Aumento significativo del riesgo de nefrotoxicidad por la asociación de polimixina B con el inmunosupresor tacrolimus."
      },
      conduta: {
        pt: "Monitorar creatinina e função renal diariamente. Ajustar dose de polimixina B conforme clearance.",
        es: "Monitorear creatinina y función renal diariamente. Ajustar dosis de polimixina B según aclaramiento."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco aumentado de lesão renal aguda pela combinação de dois nefrotóxicos com mecanismos complementares.",
        es: "Mayor riesgo de lesión renal aguda por la combinación de dos nefrotóxicos con mecanismos complementarios."
      },
      conduta: {
        pt: "Monitorar função renal diariamente em pacientes críticos.",
        es: "Monitorear función renal diariamente en pacientes críticos."
      }
    },
    "anfotericina_b": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Toxicidade renal aditiva grave. A polimixina B e a anfotericina B convencional causam lesão tubular direta; a combinação eleva drasticamente o risco de insuficiência renal aguda grave.",
        es: "Toxicidad renal aditiva grave. La polimixina B y la anfotericina B convencional causan lesión tubular directa; la combinación eleva drásticamente el riesgo de insuficiencia renal aguda grave."
      },
      conduta: {
        pt: "Evitar uso concomitante. Usar anfotericina lipossomal como alternativa de menor toxicidade renal.",
        es: "Evitar uso concomitante. Usar anfotericina liposomal como alternativa de menor toxicidad renal."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     ERITROMICINA
  ───────────────────────────────────────────────────────────── */
  "eritromicina": {
    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A eritromicina inibe o CYP3A4, aumentando os níveis plasmáticos da quetiapina. Associação potencializa o prolongamento QT e o risco de arritmias ventriculares.",
        es: "La eritromicina inhibe el CYP3A4, aumentando los niveles plasmáticos de quetiapina. La asociación potencia la prolongación del QT y el riesgo de arritmias ventriculares."
      },
      conduta: {
        pt: "Monitorar ECG e sinais de sedação excessiva. Considerar macrolídeo alternativo com menor interação CYP3A4.",
        es: "Monitorear ECG y signos de sedación excesiva. Considerar macrólido alternativo con menor interacción CYP3A4."
      }
    },
    "haloperidol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Combinação de eritromicina (prolongamento QT + inibição CYP3A4) com haloperidol (QT intrínseco) gera risco crítico de Torsades de Pointes e parada cardíaca.",
        es: "La combinación de eritromicina (prolongación QT + inhibición CYP3A4) con haloperidol (QT intrínseco) genera riesgo crítico de Torsades de Pointes y parada cardíaca."
      },
      conduta: {
        pt: "Associação contraindicada. Substituir eritromicina por antibiótico alternativo ou haloperidol por antipsicótico sem risco de QT.",
        es: "Asociación contraindicada. Sustituir eritromicina por antibiótico alternativo o haloperidol por antipsicótico sin riesgo de QT."
      }
    },
    "lovastatina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A eritromicina inibe intensamente o CYP3A4, aumentando de forma crítica os níveis plasmáticos da lovastatina. O risco de miopatia grave e rabdomiólise é muito elevado, podendo evoluir para insuficiência renal aguda.",
        es: "La eritromicina inhibe intensamente el CYP3A4, aumentando de forma crítica los niveles plasmáticos de lovastatina. El riesgo de miopatía grave y rabdomiólisis es muy elevado, pudiendo evolucionar a insuficiencia renal aguda."
      },
      conduta: {
        pt: "Suspender a lovastatina durante o curso de eritromicina. Considerar pravastatina ou rosuvastatina como alternativas menos dependentes do CYP3A4.",
        es: "Suspender la lovastatina durante el curso de eritromicina. Considerar pravastatina o rosuvastatina como alternativas menos dependientes del CYP3A4."
      }
    },
    "midazolam": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A inibição do CYP3A4 pela eritromicina eleva os níveis séricos do midazolam, aumentando o risco de sedação excessiva e depressão respiratória em pacientes vulneráveis.",
        es: "La inhibición del CYP3A4 por eritromicina eleva los niveles séricos de midazolam, aumentando el riesgo de sedación excesiva y depresión respiratoria en pacientes vulnerables."
      },
      conduta: {
        pt: "Evitar a associação ou monitorar em ambiente com suporte ventilatório. Reduzir dose do midazolam se combinação for inevitável.",
        es: "Evitar la asociación o monitorear en ambiente con soporte ventilatorio. Reducir dosis de midazolam si la combinación es inevitable."
      }
    },
    "teofilina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A eritromicina inibe o CYP1A2, reduzindo o metabolismo da teofilina e elevando seus níveis séricos. Pode causar náuseas, vômitos, taquicardia, arritmias e convulsões em casos de toxicidade.",
        es: "La eritromicina inhibe el CYP1A2, reduciendo el metabolismo de la teofilina y elevando sus niveles séricos. Puede causar náuseas, vómitos, taquicardia, arritmias y convulsiones en casos de toxicidad."
      },
      conduta: {
        pt: "Monitorar os níveis séricos de teofilina e sinais de toxicidade. Considerar redução da dose de teofilina em 25–50% durante o tratamento.",
        es: "Monitorear los niveles séricos de teofilina y signos de toxicidad. Considerar reducción de la dosis de teofilina en 25–50% durante el tratamiento."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     ISONIAZIDA
  ───────────────────────────────────────────────────────────── */
  "isoniazida": {
    "acido_valproico": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A isoniazida inibe o metabolismo hepático do ácido valproico e pode potencializar hepatotoxicidade aditiva. Risco de elevação dos níveis do anticonvulsivante com toxicidade neurológica.",
        es: "La isoniazida inhibe el metabolismo hepático del ácido valproico y puede potenciar hepatotoxicidad aditiva. Riesgo de elevación de los niveles del anticonvulsivante con toxicidad neurológica."
      },
      conduta: {
        pt: "Monitorar transaminases hepáticas e níveis séricos do valproato. Estar atento a sinais de hepatotoxicidade e toxicidade neurológica.",
        es: "Monitorear transaminasas hepáticas y niveles séricos de valproato. Estar atento a signos de hepatotoxicidad y toxicidad neurológica."
      }
    },
    "benzodiazepinico": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A isoniazida pode inibir o metabolismo hepático de benzodiazepínicos metabolizados por CYP3A4 e CYP2C19 (como diazepam e triazolam), aumentando sedação e depressão do SNC.",
        es: "La isoniazida puede inhibir el metabolismo hepático de benzodiazepinas metabolizadas por CYP3A4 y CYP2C19 (como diazepam y triazolam), aumentando sedación y depresión del SNC."
      },
      conduta: {
        pt: "Monitorar sonolência excessiva, ataxia e depressão do SNC. Reduzir dose do benzodiazepínico se necessário.",
        es: "Monitorear somnolencia excesiva, ataxia y depresión del SNC. Reducir dosis de la benzodiazepina si es necesario."
      }
    },
    "diazepam": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A isoniazida inibe o CYP2C19, principal via de metabolismo do diazepam, reduzindo sua eliminação e elevando seus níveis séricos com maior risco de sedação prolongada e depressão do SNC.",
        es: "La isoniazida inhibe el CYP2C19, principal vía de metabolismo del diazepam, reduciendo su eliminación y elevando sus niveles séricos con mayor riesgo de sedación prolongada y depresión del SNC."
      },
      conduta: {
        pt: "Monitorar sedação excessiva e ajustar dose do diazepam conforme resposta clínica. Considerar benzodiazepínico com metabolismo independente do CYP (lorazepam, oxazepam).",
        es: "Monitorear sedación excesiva y ajustar dosis de diazepam según respuesta clínica. Considerar benzodiazepina con metabolismo independiente del CYP (lorazepam, oxazepam)."
      }
    },
    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A isoniazida inibe o CYP2C19 e CYP3A4, reduzindo o metabolismo da carbamazepina e elevando seus níveis séricos. O risco de toxicidade neurológica (diplopia, ataxia, sonolência, confusão) é clinicamente relevante.",
        es: "La isoniazida inhibe el CYP2C19 y CYP3A4, reduciendo el metabolismo de carbamazepina y elevando sus niveles séricos. El risco de toxicidad neurológica (diplopía, ataxia, somnolencia, confusión) es clínicamente relevante."
      },
      conduta: {
        pt: "Monitorar os níveis séricos de carbamazepina antes e após o início da isoniazida. Reduzir dose de carbamazepina se necessário e monitorar sinais de toxicidade.",
        es: "Monitorear los niveles séricos de carbamazepina antes y después del inicio de isoniazida. Reducir dosis de carbamazepina si es necesario y monitorear signos de toxicidad."
      }
    },
    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O consumo de álcool durante tratamento com isoniazida aumenta significativamente o risco de hepatotoxicidade por indução de enzimas hepáticas e produção de metabólitos tóxicos (hidrazina). O álcool também potencializa a neurotoxicidade da isoniazida por depleção de piridoxina.",
        es: "El consumo de alcohol durante el tratamiento con isoniazida aumenta significativamente el riesgo de hepatotoxicidad por inducción de enzimas hepáticas y producción de metabolitos tóxicos (hidrazina). El alcohol también potencia la neurotoxicidad de isoniazida por depleción de piridoxina."
      },
      conduta: {
        pt: "Orientar abstinência alcoólica completa durante todo o tratamento com isoniazida. Monitorar transaminases mensalmente e suplementar piridoxina (vitamina B6).",
        es: "Orientar abstinencia alcohólica completa durante todo el tratamiento con isoniazida. Monitorear transaminasas mensualmente y suplementar piridoxina (vitamina B6)."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFTRIAXONA
  ───────────────────────────────────────────────────────────── */
  "ceftriaxona": {
    "ciclosporina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A ceftriaxona pode aumentar discretamente o risco de disfunção renal em pacientes transplantados ou críticos, por mecanismo ainda não totalmente elucidado.",
        es: "La ceftriaxona puede aumentar discretamente el riesgo de disfunción renal en pacientes trasplantados o críticos, por mecanismo aún no totalmente aclarado."
      },
      conduta: {
        pt: "Monitorar creatinina e função renal durante o curso antibiótico em pacientes imunossuprimidos.",
        es: "Monitorear creatinina y función renal durante el curso antibiótico en pacientes inmunosuprimidos."
      }
    },
    "tacrolimo": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Associação pode potencializar discretamente a nefrotoxicidade em pacientes predispostos, como transplantados ou com função renal comprometida.",
        es: "La asociación puede potenciar discretamente la nefrotoxicidad en pacientes predispuestos, como trasplantados o con función renal comprometida."
      },
      conduta: {
        pt: "Monitorar função renal e níveis do imunossupressor se indicado clínicamente.",
        es: "Monitorear función renal y niveles del inmunosupresor si está indicado clínicamente."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFEPIME
  ───────────────────────────────────────────────────────────── */
  "cefepime": {
    "ganciclovir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode aumentar o risco de neurotoxicidade — confusão, encefalopatia, mioclonias e convulsões — especialmente em pacientes com insuficiência renal onde ambos os fármacos se acumulam.",
        es: "La asociación puede aumentar el riesgo de neurotoxicidad — confusión, encefalopatia, mioclonias y convulsiones — especialmente en pacientes con insuficiencia renal donde ambos fármacos se acumulan."
      },
      conduta: {
        pt: "Monitorar estado neurológico rigorosamente e ajustar doses de ambos os fármacos pela função renal.",
        es: "Monitorear estado neurológico rigurosamente y ajustar dosis de ambos fármacos por la función renal."
      }
    },
    "aciclovir": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Associação pode aumentar o risco de nefrotoxicidade e neurotoxicidade em pacientes vulneráveis, como idosos, desidratados ou com função renal comprometida.",
        es: "La asociación puede aumentar el riesgo de nefrotoxicidad y neurotoxicidad en pacientes vulnerables, como ancianos, deshidratados o con función renal comprometida."
      },
      conduta: {
        pt: "Monitorar creatinina, hidratação e sintomas neurológicos. Ajustar doses conforme função renal.",
        es: "Monitorear creatinina, hidratación y síntomas neurológicos. Ajustar dosis según función renal."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFTAZIDIMA
  ───────────────────────────────────────────────────────────── */
  "ceftazidima": {
    "aciclovir": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Associação pode aumentar o risco de nefrotoxicidade em pacientes desidratados, idosos ou com DRC, pois ambos os fármacos dependem de excreção renal.",
        es: "La asociación puede aumentar el riesgo de nefrotoxicidad en pacientes deshidratados, ancianos o con ERC, ya que ambos fármacos dependen de excreción renal."
      },
      conduta: {
        pt: "Garantir hidratação adequada e monitorar função renal durante o tratamento concomitante.",
        es: "Garantizar hidratación adecuada y monitorear función renal durante el tratamiento concomitante."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFOPERAZONA-SULBACTAM
  ───────────────────────────────────────────────────────────── */
  "cefoperazona_sulbactam": {
    "antiagregante_plaquetario": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A cefoperazona possui estrutura N-metiltiotetrazol que inibe a carboxilação de fatores de coagulação dependentes de vitamina K (II, VII, IX, X). O uso concomitante com antiagregantes plaquetários potencializa o risco hemorrágico.",
        es: "La cefoperazona posee estructura N-metiltetraziole que inhibe la carboxilación de factores de coagulación dependientes de vitamina K (II, VII, IX, X). El uso concomitante con antiagregantes plaquetarios potencia el riesgo hemorrágico."
      },
      conduta: {
        pt: "Monitorar sinais de sangramento (equimoses, hematomas, melena). Considerar suplementação de vitamina K em pacientes de alto risco ou com hepatopatia.",
        es: "Monitorear signos de sangrado (equimosis, hematomas, melena). Considerar suplementación de vitamina K en pacientes de alto riesgo o con hepatopatía."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CEFOTAXIMA
  ───────────────────────────────────────────────────────────── */
  "cefotaxima": {
    "aminoglicosideo": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Associação sinergística antimicrobiana clássica para infecções graves (meningite, endocardite), mas o aminoglicosídeo adiciona risco de nefrotoxicidade, especialmente em insuficiência renal.",
        es: "Asociación sinergística antimicrobiana clásica para infecciones graves (meningitis, endocarditis), pero el aminoglucósido añade riesgo de nefrotoxicidad, especialmente en insuficiencia renal."
      },
      conduta: {
        pt: "Monitorar função renal e ajustar doses de ambos os fármacos conforme clearance de creatinina.",
        es: "Monitorear función renal y ajustar dosis de ambos fármacos según aclaramiento de creatinina."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     PIPERACILINA-TAZOBACTAM
  ───────────────────────────────────────────────────────────── */
  "piperacilina_tazobactam": {
    "tacrolimo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de piperacilina-tazobactam com tacrolimo pode aumentar o risco de lesão renal aguda, especialmente em pacientes transplantados ou críticos. Mecanismo possivelmente relacionado a toxicidade tubular sinrégica.",
        es: "La asociación de piperacilina-tazobactam con tacrolimus puede aumentar el riesgo de lesión renal aguda, especialmente en pacientes trasplantados o críticos. Mecanismo posiblemente relacionado con toxicidad tubular sinérgica."
      },
      conduta: {
        pt: "Monitorar creatinina diariamente e níveis séricos de tacrolimo. Considerar monitoramento de AKI com biomarcadores precoces em UTI.",
        es: "Monitorear creatinina diariamente y niveles séricos de tacrolimus. Considerar monitoreo de AKI con biomarcadores precoces en UCI."
      }
    },
    "ciclosporina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização do risco de nefrotoxicidade pela combinação de beta-lactâmico de amplo espectro com imunossupressor nefrotóxico.",
        es: "Potenciación del riesgo de nefrotoxicidad por la combinación de beta-lactámico de amplio espectro con inmunosupresor nefrotóxico."
      },
      conduta: {
        pt: "Monitorar função renal rigorosamente e níveis séricos de ciclosporina.",
        es: "Monitorear función renal rigurosamente y niveles séricos de ciclosporina."
      }
    },
    "micofenolato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A piperacilina-tazobactam pode alterar a microbiota intestinal responsável pela recirculação entero-hepática do micofenolato, reduzindo sua exposição sistêmica e eficácia imunossupressora.",
        es: "La piperacilina-tazobactam puede alterar la microbiota intestinal responsable de la recirculación enterohepática del micofenolato, reduciendo su exposición sistémica y eficacia inmunosupresora."
      },
      conduta: {
        pt: "Em pacientes transplantados, monitorar sinais de rejeição e considerar contato com a equipe de transplante para ajuste do imunossupressor.",
        es: "En pacientes trasplantados, monitorear signos de rechazo y considerar contacto con el equipo de trasplante para ajuste del inmunosupresor."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     AMOXICILINA-CLAVULANATO
  ───────────────────────────────────────────────────────────── */
  "amoxicilina_clavulanato": {
    "micofenolato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A amoxicilina-clavulanato pode reduzir a recirculação entero-hepática do micofenolato por alteração da flora intestinal, diminuindo sua exposição sistêmica e potencial imunossupressor.",
        es: "La amoxicilina-clavulanato puede reducir la recirculación enterohepática del micofenolato por alteración de la flora intestinal, disminuyendo su exposición sistémica y potencial inmunosupresor."
      },
      conduta: {
        pt: "Monitorar a resposta clínica em pacientes transplantados. Contatar equipe de transplante se houver suspeita de rejeição.",
        es: "Monitorear la respuesta clínica en pacientes trasplantados. Contactar equipo de trasplante si se sospecha rechazo."
      }
    },
    "anticoncepcional_hormonal": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "A redução da eficácia contraceptiva pelo antibiótico não é esperada de forma relevante em condições normais, exceto se houver má absorção gastrointestinal por vômitos ou diarreia intensa.",
        es: "La reducción de la eficacia anticonceptiva por el antibiótico no se espera de forma relevante en condiciones normales, excepto si hay malabsorción gastrointestinal por vómitos o diarrea intensa."
      },
      conduta: {
        pt: "Orientar método contraceptivo adicional (barômetro) apenas se houver má absorção gastrointestinal durante o tratamento.",
        es: "Orientar método anticonceptivo adicional (barómetro) solo si hay malabsorción gastrointestinal durante el tratamiento."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     AMPICILINA-SULBACTAM
  ───────────────────────────────────────────────────────────── */
  "ampicilina_sulbactam": {
    "micofenolato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A alteração da flora intestinal pelo antibiótico pode diminuir a recirculação entero-hepática do micofenolato, reduzindo sua exposição sistêmica em pacientes transplantados.",
        es: "La alteración de la flora intestinal por el antibiótico puede disminuir la recirculación enterohepática del micofenolato, reduciendo su exposición sistémica en pacientes trasplantados."
      },
      conduta: {
        pt: "Monitorar pacientes transplantados ou imunossuprimidos com micofenolato. Consultar equipe de transplante se indicado.",
        es: "Monitorear pacientes trasplantados o inmunosuprimidos con micofenolato. Consultar equipo de trasplante si está indicado."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     OXACILINA
  ───────────────────────────────────────────────────────────── */
  "oxacilina": {
    "micofenolato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Antibióticos sistêmicos, incluindo penicilinas, podem reduzir a exposição ao micofenolato por alteração da microbiota intestinal. O risco clínico depende da intensidade da alteração da flora.",
        es: "Los antibióticos sistémicos, incluidas las penicilinas, pueden reducir la exposición al micofenolato por alteración de la microbiota intestinal. El riesgo clínico depende de la intensidad de la alteración de la flora."
      },
      conduta: {
        pt: "Monitorar evolução clínica e risco de falha imunossupressora. Contato com equipe de transplante se suspeita de rejeição.",
        es: "Monitorear evolución clínica y riesgo de falla inmunosupresora. Contacto con equipo de trasplante si se sospecha rechazo."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     NITROFURANTOINA
  ───────────────────────────────────────────────────────────── */
  "nitrofurantoina": {
    "antiacido_trissilicato_magnesio": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "O trissilicato de magnésio (antiácido) adsorve a nitrofurantoína no trato gastrointestinal, reduzindo significativamente sua absorção oral e, consequentemente, as concentrações urinárias necessárias para eficácia no tratamento de infecções do trato urinário.",
        es: "El trisilicato de magnesio (antiácido) adsorbe la nitrofurantoína en el tracto gastrointestinal, reduciendo significativamente su absorción oral y, en consecuencia, las concentraciones urinarias necesarias para la eficacia en el tratamiento de infecciones del tracto urinario."
      },
      conduta: {
        pt: "Evitar o uso simultâneo. Separar a administração por pelo menos 2 horas. Preferir antiácido alternativo que não interfira na absorção da nitrofurantoína.",
        es: "Evitar el uso simultáneo. Separar la administración al menos 2 horas. Preferir antiácido alternativo que no interfiera en la absorción de nitrofurantoína."
      }
    }
  },

  /* ═══════════════════════════════════════════════════════════════
     BLOCO ONTOLÓGICO — INTERAÇÕES DROGA × CLASSE e CLASSE × CLASSE
     Nota: as entradas Drug×Classe de linezolida, varfarina, rifampicina
     e claritromicina foram integradas diretamente nos nós raiz originais.
     Aqui ficam os nós raiz NOVOS (sem duplicata pré-existente).
  ═══════════════════════════════════════════════════════════════ */

  /* ─────────────────────────────────────────────────────────────
     AZÓLICOS × CLASSE ESTATINAS — nó raiz novo
     Inibição CYP3A4 → Miotoxicidade
  ───────────────────────────────────────────────────────────── */
  "fluconazol": {
    "$classe_estatinas": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O fluconazol inibe potentemente o CYP2C9 e moderadamente o CYP3A4. Para estatinas dependentes do CYP3A4 (atorvastatina, sinvastatina, lovastatina), a combinação eleva os níveis plasmáticos em 5–10 vezes, aumentando significativamente o risco de miopatia e rabdomiólise com falência renal aguda.",
        es: "El fluconazol inhibe potentemente el CYP2C9 y moderadamente el CYP3A4. Para estatinas dependientes del CYP3A4 (atorvastatina, simvastatina, lovastatina), la combinación eleva los niveles plasmáticos 5–10 veces, aumentando significativamente el riesgo de miopatía y rabdomiólisis con insuficiencia renal aguda."
      },
      conduta: {
        pt: "Evitar combinação de fluconazol com sinvastatina e lovastatina (contraindicado). Para atorvastatina: suspender temporariamente durante o curso de fluconazol. Para rosuvastatina e pravastatina (não dependentes de CYP3A4): risco menor, mas monitorar CPK. Manter hidratação adequada.",
        es: "Evitar combinación de fluconazol con simvastatina y lovastatina (contraindicado). Para atorvastatina: suspender temporalmente durante el curso de fluconazol. Para rosuvastatina y pravastatina (no dependientes de CYP3A4): riesgo menor, pero monitorear CPK. Mantener hidratación adecuada."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE AINEs × CLASSE ANTICOAGULANTES
     Caminho Class×Class — risco hemorrágico máximo
  ───────────────────────────────────────────────────────────── */
  "$classe_aines": {
    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A combinação de qualquer AINE (ibuprofeno, diclofenaco, naproxeno, meloxicam, cetoprofeno, nimesulida, celecoxibe) com qualquer anticoagulante oral (varfarina, apixabana, rivaroxabana, dabigatrana, edoxabana) eleva substancialmente o risco de sangramento maior. Os AINEs inibem a agregação plaquetária mediada por TXA2 (antiagregação) e lesam a mucosa gastrointestinal, criando portais de entrada para sangramento; concomitantemente, os anticoagulantes suprimem os fatores de coagulação. O efeito sinérgico aumenta o risco de sangramento gastrointestinal, intracraniano e retroperitoneal em 3–5 vezes.",
        es: "La combinación de cualquier AINE (ibuprofeno, diclofenaco, naproxeno, meloxicam, ketoprofeno, nimesulida, celecoxib) con cualquier anticoagulante oral (warfarina, apixabán, rivaroxabán, dabigatrán, edoxabán) eleva sustancialmente el riesgo de sangrado mayor. Los AINEs inhiben la agregación plaquetaria mediada por TXA2 (antiagregación) y lesionan la mucosa gastrointestinal, creando portales de entrada para sangrado; concomitantemente, los anticoagulantes suprimen los factores de coagulación. El efecto sinérgico aumenta el riesgo de sangrado gastrointestinal, intracraneal y retroperitoneal 3–5 veces."
      },
      conduta: {
        pt: "EVITAR a combinação. Substituir o AINE por paracetamol (alternativa analgésica/antipirética segura) ou opioide fraco se necessário. Se AINE for imprescindível: reduzir ao menor tempo possível, adicionar IBP para proteção gástrica, monitorar sinais de sangramento e, para varfarina, verificar INR com maior frequência. Coxibes têm risco GI menor, mas o risco hemorrágico global com anticoagulante persiste.",
        es: "EVITAR la combinación. Sustituir el AINE por paracetamol (alternativa analgésica/antipirética segura) u opioide débil si es necesario. Si el AINE es imprescindible: reducir al menor tiempo posible, añadir IBP para protección gástrica, monitorear señales de sangrado y, para warfarina, verificar INR con mayor frecuencia. Los coxibes tienen menor riesgo GI, pero el riesgo hemorrágico global con anticoagulante persiste."
      }
    },
    "$classe_ieca": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Os AINEs antagonizam o efeito anti-hipertensivo e cardioprotetor dos IECAs por inibir a síntese de prostaglandinas vasodilatadoras renais (PGE2, PGI2), retendo sódio e água e reduzindo o fluxo sanguíneo renal. Em pacientes com insuficiência cardíaca ou renal, a combinação pode precipitar descompensação aguda e hipercalemia grave.",
        es: "Los AINEs antagonizan el efecto antihipertensivo y cardioprotector de los IECAs al inhibir la síntesis de prostaglandinas vasodilatadoras renales (PGE2, PGI2), reteniendo sodio y agua y reduciendo el flujo sanguíneo renal. En pacientes con insuficiencia cardíaca o renal, la combinación puede precipitar descompensación aguda e hipercalemia grave."
      },
      conduta: {
        pt: "Evitar uso crônico combinado. Monitorar PA, função renal (creatinina, ureia) e potássio sérico a cada 1–2 semanas nas primeiras 4 semanas. Preferir paracetamol. Se AINE for necessário, usar a menor dose e pelo menor tempo. Hidratar adequadamente o paciente.",
        es: "Evitar uso crónico combinado. Monitorear PA, función renal (creatinina, urea) y potasio sérico cada 1–2 semanas en las primeras 4 semanas. Preferir paracetamol. Si el AINE es necesario, usar la menor dosis y por el menor tiempo. Hidratar adecuadamente al paciente."
      }
    },
    "$classe_ara_ii": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Mecanismo análogo ao da interação AINEs+IECAs: inibição de prostaglandinas renais pelos AINEs antagoniza o efeito natriurético e anti-hipertensivo dos BRAs (losartana, valsartana, olmesartana, telmisartana), podendo precipitar insuficiência renal aguda e hipercalemia, especialmente em idosos e pacientes com DRC.",
        es: "Mecanismo análogo al de la interacción AINEs+IECAs: la inhibición de prostaglandinas renales por los AINEs antagoniza el efecto natriurético y antihipertensivo de los ARAs II (losartán, valsartán, olmesartán, telmisartán), pudiendo precipitar insuficiencia renal aguda e hipercalemia, especialmente en ancianos y pacientes con ERC."
      },
      conduta: {
        pt: "Monitorar PA, eletrólitos e função renal. Evitar uso prolongado. Instruir o paciente a relatar edema, oligúria ou dispneia. A 'Dupla de Risco Renal' (IECA + BRA + AINE) é contraindicada.",
        es: "Monitorear PA, electrolitos y función renal. Evitar uso prolongado. Instruir al paciente a reportar edema, oliguria o disnea. La 'Doble de Riesgo Renal' (IECA + ARA II + AINE) está contraindicada."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE ISRS × CLASSE IMAOs
     Síndrome Serotoninérgica — Class×Class demo
  ───────────────────────────────────────────────────────────── */
  "$classe_isrs": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A combinação de qualquer ISRS com qualquer IMAO (reversível ou irreversível) é a interação medicamentosa de maior risco serotoninérgico da psicofarmacologia. Os IMAOs bloqueiam a degradação da serotonina pela MAO-A, enquanto os ISRS bloqueiam sua recaptação pré-sináptica — o resultado é acúmulo exponencial de serotonina na fenda sináptica. Síndrome serotoninérgica grave: tremores, mioclonias, hiperreflexia, hipertermia (>41°C), rabdomiólise, coagulação intravascular disseminada e morte. Onset em horas.",
        es: "La combinación de cualquier ISRS con cualquier IMAO (reversible o irreversible) es la interacción medicamentosa de mayor riesgo serotoninérgico en psicofarmacología. Los IMAOs bloquean la degradación de la serotonina por la MAO-A, mientras que los ISRS bloquean su recaptación presináptica — el resultado es acumulación exponencial de serotonina en la hendidura sináptica. Síndrome serotoninérgico grave: temblores, mioclonías, hiperreflexia, hipertermia (>41°C), rabdomiólisis, coagulación intravascular diseminada y muerte. Inicio en horas."
      },
      conduta: {
        pt: "ABSOLUTAMENTE CONTRAINDICADO. Washout mínimo obrigatório: 14 dias após suspender IMAO irreversível antes de iniciar ISRS; 14 dias após suspender ISRS antes de iniciar IMAO (exceto fluoxetina: 5 semanas). Moclobemida (IMAO reversível): washout de 24h após moclobemida, 1 dia após ISRS de meia-vida curta. Se síndrome ocorrer: suporte imediato, ciproeptadina 4–8mg VO/sonda, benzodiazepínicos para agitação e convulsões, resfriamento ativo para hipertermia.",
        es: "ABSOLUTAMENTE CONTRAINDICADO. Washout mínimo obligatorio: 14 días tras suspender IMAO irreversible antes de iniciar ISRS; 14 días tras suspender ISRS antes de iniciar IMAO (excepto fluoxetina: 5 semanas). Moclobemida (IMAO reversible): washout de 24h tras moclobemida, 1 día tras ISRS de vida media corta. Si síndrome ocurre: soporte inmediato, ciproheptadina 4–8mg VO/sonda, benzodiazepinas para agitación y convulsiones, enfriamiento activo para hipertermia."
      }
    },
    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Alguns opioides têm atividade serotoninérgica significativa (tramadol, meperidina/petidina, fentanil em menor grau). A combinação com ISRS pode precipitar síndrome serotoninérgica. Tramadol + ISRS é a combinação mais arriscada: tramadol inibe recaptação de serotonina E ativa receptores µ-opioides, com risco adicional de convulsões (redução do limiar convulsivante pelo ISRS e atividade pro-convulsivante do tramadol).",
        es: "Algunos opioides tienen actividad serotoninérgica significativa (tramadol, meperidina/petidina, fentanilo en menor grado). La combinación con ISRS puede precipitar síndrome serotoninérgico. Tramadol + ISRS es la combinación más riesgosa: tramadol inhibe recaptación de serotonina Y activa receptores µ-opioides, con riesgo adicional de convulsiones (reducción del umbral convulsivante por el ISRS y actividad proconvulsivante del tramadol)."
      },
      conduta: {
        pt: "Evitar tramadol + ISRS (preferir morfina, oxicodona ou codeína com cautela). Se necessário, usar menor dose efetiva e monitorar sinais de síndrome serotoninérgica (agitação, mioclonias, febre, sudorese). Monitorar nível de consciência. Ter naloxona disponível.",
        es: "Evitar tramadol + ISRS (preferir morfina, oxicodona o codeína con cautela). Si es necesario, usar la menor dosis efectiva y monitorear señales de síndrome serotoninérgico (agitación, mioclonías, fiebre, sudoración). Monitorear nivel de conciencia. Tener naloxona disponible."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE IPDe5 × CLASSE NITRATOS
     Colapso hemodinâmico — Class×Class contraindicado
  ───────────────────────────────────────────────────────────── */
  "$classe_ipde5": {
    "$classe_nitratos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibidores da fosfodiesterase-5 (sildenafila, tadalafila, vardenafila, avanafila) potencializam massivamente o efeito vasodilatador dos nitratos (nitroglicerina, isossorbida) por dupla amplificação do GMPc: nitratos aumentam a produção de GMPc via óxido nítrico, e os IPDe5 inibem sua degradação. O resultado é hipotensão grave e refratária, com risco de síncope, infarto por hipoperfusão coronariana e morte. Queda de PA de 50–60 mmHg documentada.",
        es: "Los inhibidores de la fosfodiesterasa-5 (sildenafilo, tadalafilo, vardenafilo, avanafilo) potencian masivamente el efecto vasodilatador de los nitratos (nitroglicerina, isosorbida) por doble amplificación del GMPc: los nitratos aumentan la producción de GMPc vía óxido nítrico, y los IPDe5 inhiben su degradación. El resultado es hipotensión grave y refractaria, con riesgo de síncope, infarto por hipoperfusión coronaria y muerte. Caída de PA de 50–60 mmHg documentada."
      },
      conduta: {
        pt: "ABSOLUTAMENTE CONTRAINDICADO. Para sildenafila e vardenafila: evitar nitratos por pelo menos 24 horas após última dose. Para tadalafila (meia-vida 17,5h): evitar nitratos por 48 horas. Se hipotensão grave ocorrer: posição Trendelenburg, SF 0,9% IV, fenilefrina ou noradrenalina (NÃO nitroprussiato). Pacientes com angina instável que usam nitratos NÃO devem usar IPDe5.",
        es: "ABSOLUTAMENTE CONTRAINDICADO. Para sildenafilo y vardenafilo: evitar nitratos por al menos 24 horas tras última dosis. Para tadalafilo (vida media 17,5h): evitar nitratos por 48 horas. Si hipotensión grave ocurre: posición Trendelenburg, SF 0,9% IV, fenilefrina o noradrenalina (NO nitroprusiato). Pacientes con angina inestable que usan nitratos NO deben usar IPDe5."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE IECA × CLASSE BRA-II
     Duplo Bloqueio do SRAA — nefrotoxicidade
  ───────────────────────────────────────────────────────────── */
  "$classe_ieca": {
    "$classe_ara_ii": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O duplo bloqueio do Sistema Renina-Angiotensina-Aldosterona (SRAA) com IECA + BRA (ex: enalapril + losartana) não demonstrou benefício cardiovascular adicional em estudos robustos (ONTARGET, VA NEPHRON-D) e aumentou significativamente os eventos adversos: hipotensão sintomática (risco 2x), hipercalemia grave (K+ > 5,5 mEq/L) e insuficiência renal aguda. O estudo ALTITUDE (aliscireno + IECAou BRA) foi interrompido precocemente por dano.",
        es: "El doble bloqueo del Sistema Renina-Angiotensina-Aldosterona (SRAA) con IECA + ARA II (ej: enalapril + losartán) no demostró beneficio cardiovascular adicional en estudios robustos (ONTARGET, VA NEPHRON-D) y aumentó significativamente los eventos adversos: hipotensión sintomática (riesgo 2x), hipercalemia grave (K+ > 5,5 mEq/L) e insuficiencia renal aguda. El estudio ALTITUDE (aliskiren + IECA o ARA II) fue interrumpido precozmente por daño."
      },
      conduta: {
        pt: "EVITAR duplo bloqueio. Usar apenas um agente por vez (IECA OU BRA). Se paciente em uso duplo, descontinuar um deles com monitoramento. Exceção clínica estreita: proteinúria nefrótica refratária (nefrologista). Monitorar função renal, K+ e PA a cada 2 semanas nas primeiras 8 semanas.",
        es: "EVITAR doble bloqueo. Usar solo un agente a la vez (IECA O ARA II). Si el paciente está en uso doble, discontinuar uno con monitoreo. Excepción clínica estrecha: proteinuria nefrótica refractaria (nefrólogo). Monitorear función renal, K+ y PA cada 2 semanas en las primeras 8 semanas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE FLUOROQUINOLONAS × CLASSE ANTIPSICÓTICOS
     Prolongamento QT — Class×Class
  ───────────────────────────────────────────────────────────── */
  "$classe_fluoroquinolonas": {
    "$classe_antipsicóticos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoroquinolonas (especialmente moxifloxacino e levofloxacino) e antipsicóticos (haloperidol, quetiapina, ziprasidona, clozapina, risperidona, clorpromazina) são fármacos que prolongam o intervalo QTc de forma independente. A combinação é aditiva e pode levar a QTc > 500ms, com risco de Torsades de Pointes (TdP) e fibrilação ventricular. Moxifloxacino + haloperidol é a combinação de maior risco.",
        es: "Las fluoroquinolonas (especialmente moxifloxacino y levofloxacino) y los antipsicóticos (haloperidol, quetiapina, ziprasidona, clozapina, risperidona, clorpromazina) son fármacos que prolongan el intervalo QTc de forma independiente. La combinación es aditiva y puede llevar a QTc > 500ms, con riesgo de Torsades de Pointes (TdP) y fibrilación ventricular. Moxifloxacino + haloperidol es la combinación de mayor riesgo."
      },
      conduta: {
        pt: "Verificar QTc basal antes de iniciar. Evitar moxifloxacino em pacientes em uso de antipsicóticos. Preferir ciprofloxacino (menor potencial de prolongamento QT). Corrigir hipocalemia e hipomagnesemia (que aumentam o risco de TdP). Monitorar ECG a cada 48–72h. Suspender se QTc > 500ms ou aumento > 60ms do basal.",
        es: "Verificar QTc basal antes de iniciar. Evitar moxifloxacino en pacientes en uso de antipsicóticos. Preferir ciprofloxacino (menor potencial de prolongación QT). Corregir hipocalemia e hipomagnesemia (que aumentan el riesgo de TdP). Monitorear ECG cada 48–72h. Suspender si QTc > 500ms o aumento > 60ms del basal."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     METOTREXATO × CLASSE AINEs
     Toxicidade de metotrexato — Droga×Classe
  ───────────────────────────────────────────────────────────── */
  "metotrexato": {
    "$classe_aines": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Os AINEs reduzem a excreção tubular renal do metotrexato por competição com transportadores OAT1/OAT3 e inibição das prostaglandinas que regulam o fluxo renal. Adicionalmente, alguns AINEs são inibidores de CYP que reduzem o metabolismo do metotrexato. O resultado é aumento de 2–5x nos níveis de metotrexato, com risco de toxicidade hematológica grave (pancitopenia), mucosites severas e nefrotoxicidade, especialmente em doses altas (> 15mg/semana para artrite reumatoide ou doses oncológicas).",
        es: "Los AINEs reducen la excreción tubular renal del metotrexato por competencia con transportadores OAT1/OAT3 e inhibición de las prostaglandinas que regulan el flujo renal. Adicionalmente, algunos AINEs son inhibidores de CYP que reducen el metabolismo del metotrexato. El resultado es aumento de 2–5x en los niveles de metotrexato, con riesgo de toxicidad hematológica grave (pancitopenia), mucositis severas y nefrotoxicidad, especialmente en dosis altas (> 15mg/semana para artritis reumatoide o dosis oncológicas)."
      },
      conduta: {
        pt: "EVITAR AINEs em pacientes em metotrexato oncológico (doses > 500mg/m²). Em doses baixas (artrite reumatoide, psoríase): evitar preferencialmente, mas se necessário, usar menor dose de AINE, monitorar hemograma, creatinina e transaminases semanalmente. Preferir paracetamol ou celecoxibe (menor interferência renal). Atenção após leucovorina (resgate).",
        es: "EVITAR AINEs en pacientes en metotrexato oncológico (dosis > 500mg/m²). En dosis bajas (artritis reumatoide, psoriasis): evitar preferentemente, pero si es necesario, usar menor dosis de AINE, monitorear hemograma, creatinina y transaminasas semanalmente. Preferir paracetamol o celecoxib (menor interferencia renal). Atención tras leucovorina (rescate)."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLASSE AMINOGLICOSÍDEOS × CLASSE CARBAPENÊMICOS
     Antagoismo farmacológico — desativação in vivo
  ───────────────────────────────────────────────────────────── */
  "$classe_aminoglicosídeos": {
    "$classe_carbapenemos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Carbapenêmicos (especialmente imipenem, em menor grau meropenem) podem inativar quimicamente aminoglicosídeos (gentamicina, amicacina, tobramicina) quando em altas concentrações in vitro. In vivo, o risco é clinicamente relevante em pacientes com insuficiência renal grave (acúmulo de ambos), podendo levar a subtherapeutic levels de aminoglicosídeo e falha antibiótica. Adicionalmente, o imipenem reduz a excreção tubular renal de alguns aminoglicosídeos.",
        es: "Los carbapenémicos (especialmente imipenem, en menor grado meropenem) pueden inactivar químicamente los aminoglucósidos (gentamicina, amicacina, tobramicina) cuando están en altas concentraciones in vitro. In vivo, el riesgo es clínicamente relevante en pacientes con insuficiencia renal grave (acumulación de ambos), pudiendo llevar a niveles subterapéuticos de aminoglucósido y falla antibiótica. Adicionalmente, el imipenem reduce la excreción tubular renal de algunos aminoglucósidos."
      },
      conduta: {
        pt: "Não misturar na mesma solução (incompatibilidade físico-química). Administrar separados no tempo. Monitorar níveis séricos de aminoglicosídeo (vale e pico). Em IRC grave: considerar monitoramento farmacocinético intensivo e ajuste de dose. A combinação pode ser sinérgica microbiologicamente — o risco é farmacológico, não clínico-microbiológico.",
        es: "No mezclar en la misma solución (incompatibilidad fisicoquímica). Administrar separados en el tiempo. Monitorear niveles séricos de aminoglucósido (valle y pico). En IRC grave: considerar monitoreo farmacocinético intensivo y ajuste de dosis. La combinación puede ser sinérgica microbiológicamente — el riesgo es farmacológico, no clínico-microbiológico."
      }
    }
  },

  /* ═══════════════════════════════════════════════════════════════
     BLOCO PSICOFÁRMACOS v3.2 — ISRS 1/2
     Inserido em: 2026-06-19
  ═══════════════════════════════════════════════════════════════ */

  /* ─────────────────────────────────────────────────────────────
     FLUOXETINA
     CYP2D6 inibidor forte · meia-vida longa (washout 5 semanas)
     Cobertura via classes: ~90 fármacos reais
  ───────────────────────────────────────────────────────────── */
  "fluoxetina": {

    /* ── Contraindicações absolutas ── */
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação de fluoxetina com IMAOs (fenelzina, tranilcipromina, selegilina, rasagilina, moclobemida) provoca acúmulo crítico de serotonina. Risco de síndrome serotoninérgica grave: hipertermia, rigidez, instabilidade autonômica, convulsões e morte.",
        es: "La asociación de fluoxetina con IMAOs (fenelzina, tranilcipromina, selegilina, rasagilina, moclobemida) provoca acumulación crítica de serotonina. Riesgo de síndrome serotoninérgico grave: hipertermia, rigidez, inestabilidad autonómica, convulsiones y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout de 5 semanas após fluoxetina antes de iniciar qualquer IMAO. Aguardar 14 dias após IMAO antes de iniciar fluoxetina.",
        es: "Contraindicado. Respetar washout de 5 semanas tras fluoxetina antes de iniciar cualquier IMAO. Esperar 14 días tras IMAO antes de iniciar fluoxetina."
      }
    },
    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível não-seletiva. A combinação com fluoxetina provoca acúmulo maciço de serotonina com risco de síndrome serotoninérgica grave, hipertermia, convulsões e morte.",
        es: "Linezolid posee actividad IMAO reversible no selectiva. La combinación con fluoxetina provoca acumulación masiva de serotonina con riesgo de síndrome serotoninérgico grave, hipertermia, convulsiones y muerte."
      },
      conduta: {
        pt: "Associação contraindicada. Suspender fluoxetina pelo menos 5 semanas antes de iniciar linezolida. Se emergência, monitorar em UTI com suporte para síndrome serotoninérgica.",
        es: "Asociación contraindicada. Suspender fluoxetina al menos 5 semanas antes de iniciar linezolid. Si es emergencia, monitorear en UCI con soporte para síndrome serotoninérgico."
      }
    },
    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno intravenoso possui atividade IMAO e pode precipitar síndrome serotoninérgica potencialmente fatal quando combinado com fluoxetina.",
        es: "El azul de metileno intravenoso posee actividad IMAO y puede precipitar síndrome serotoninérgico potencialmente fatal al combinarse con fluoxetina."
      },
      conduta: {
        pt: "Não associar. Usar alternativa ao azul de metileno quando possível. Se uso emergencial inevitável, suspender fluoxetina e monitorar.",
        es: "No asociar. Usar alternativa al azul de metileno cuando sea posible. Si uso emergencial inevitable, suspender fluoxetina y monitorear."
      }
    },
    "pimozida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e eleva os níveis plasmáticos de pimozida, aumentando o risco de prolongamento grave do intervalo QT e arritmias ventriculares fatais (torsades de pointes).",
        es: "Fluoxetina inhibe CYP2D6 y eleva los niveles plasmáticos de pimozida, aumentando el riesgo de prolongación grave del intervalo QT y arritmias ventriculares fatales (torsades de pointes)."
      },
      conduta: {
        pt: "Contraindicado. Não associar fluoxetina com pimozida.",
        es: "Contraindicado. No asociar fluoxetina con pimozida."
      }
    },
    "tioridazina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluoxetina pode elevar os níveis de tioridazina por inibição de CYP2D6, com risco elevado de prolongamento de QT, torsades de pointes e arritmias fatais.",
        es: "Fluoxetina puede elevar los niveles de tioridazina por inhibición de CYP2D6, con alto riesgo de prolongación de QT, torsades de pointes y arritmias fatales."
      },
      conduta: {
        pt: "Contraindicado. Respeitar intervalo de segurança após suspensão da fluoxetina (washout de 5 semanas).",
        es: "Contraindicado. Respetar intervalo de seguridad tras suspender fluoxetina (washout de 5 semanas)."
      }
    },
    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Tramadol tem atividade serotoninérgica intrínseca. A combinação com fluoxetina aumenta o risco de síndrome serotoninérgica e convulsões. Adicionalmente, fluoxetina inibe CYP2D6 e reduz a conversão do tramadol no metabólito analgésico ativo (O-desmetiltramadol), comprometendo a eficácia analgésica.",
        es: "El tramadol tiene actividad serotoninérgica intrínseca. La combinación con fluoxetina aumenta el riesgo de síndrome serotoninérgico y convulsiones. Además, fluoxetina inhibe CYP2D6 y reduce la conversión de tramadol en el metabolito analgésico activo (O-desmetiltramadol), comprometiendo la eficacia analgésica."
      },
      conduta: {
        pt: "Evitar associação. Preferir analgésico sem atividade serotoninérgica (ex: paracetamol, dipirona, opioides não serotoninérgicos com vigilância).",
        es: "Evitar asociación. Preferir analgésico sin actividad serotoninérgica (p.ej.: paracetamol, dipirona, opioides no serotoninérgicos con vigilancia)."
      }
    },
    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico (Erva de São João) aumenta atividade serotoninérgica central e pode precipitar síndrome serotoninérgica quando associado à fluoxetina.",
        es: "El hipérico (Hierba de San Juan) aumenta la actividad serotoninérgica central y puede precipitar síndrome serotoninérgico al asociarse con fluoxetina."
      },
      conduta: {
        pt: "Contraindicado. Investigar uso de fitoterápicos em todos os pacientes em uso de ISRS.",
        es: "Contraindicado. Investigar uso de fitoterapéuticos en todos los pacientes que usen ISRS."
      }
    },

    /* ── Interações de gravidade ALTA ── */
    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina reduz a função plaquetária por depleção de serotonina intraplaquetária, aumentando o risco de sangramento. Com varfarina, pode ocorrer elevação adicional do INR por inibição de CYP2C9, com risco hemorrágico grave.",
        es: "Fluoxetina reduce la función plaquetaria por depleción de serotonina intraplaquetaria, aumentando el riesgo de sangrado. Con warfarina, puede ocurrir elevación adicional del INR por inhibición de CYP2C9, con riesgo hemorrágico grave."
      },
      conduta: {
        pt: "Monitorar sinais de sangramento ativamente. Se varfarina: controlar INR após iniciar, ajustar ou suspender fluoxetina. Avaliar indicação de hemostático profilático.",
        es: "Monitorear signos de sangrado activamente. Si warfarina: controlar INR al iniciar, ajustar o suspender fluoxetina. Evaluar indicación de hemostático profiláctico."
      }
    },
    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de fluoxetina com outros fármacos serotoninérgicos (tramadol, fentanil, triptanos, lítio, triptofano, metoclopramida, linezolida) aumenta o risco de síndrome serotoninérgica, uma emergência potencialmente fatal.",
        es: "La asociación de fluoxetina con otros fármacos serotoninérgicos (tramadol, fentanilo, triptanes, litio, triptófano, metoclopramida, linezolid) aumenta el riesgo de síndrome serotoninérgico, una emergencia potencialmente fatal."
      },
      conduta: {
        pt: "Evitar combinações serotoninérgicas múltiplas. Monitorar agitação, hiperreflexia, clônus, tremor, febre, diarreia, taquicardia e confusão. Suspender e tratar com ciproeptadina se síndrome confirmada.",
        es: "Evitar combinaciones serotoninérgicas múltiples. Monitorear agitación, hiperreflexia, clonus, temblor, fiebre, diarrea, taquicardia y confusión. Suspender y tratar con ciproheptadina si síndrome confirmado."
      }
    },
    "$classe_triciclicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe fortemente CYP2D6 e pode elevar em 2 a 10 vezes os níveis plasmáticos de antidepressivos tricíclicos (amitriptilina, nortriptilina, imipramina, clomipramina). Risco aumentado de toxicidade anticolinérgica (retenção urinária, íleo, glaucoma), sedação excessiva, convulsões e arritmias cardíacas.",
        es: "Fluoxetina inhibe fuertemente CYP2D6 y puede elevar 2 a 10 veces los niveles plasmáticos de antidepresivos tricíclicos (amitriptilina, nortriptilina, imipramina, clomipramina). Riesgo aumentado de toxicidad anticolinérgica (retención urinaria, íleo, glaucoma), sedación excesiva, convulsiones y arritmias cardíacas."
      },
      conduta: {
        pt: "Reduzir dose do ATC se combinação necessária. Monitorar ECG, sinais anticolinérgicos, sedação e níveis séricos quando disponíveis.",
        es: "Reducir dosis del ATC si la combinación es necesaria. Monitorear ECG, signos anticolinérgicos, sedación y niveles séricos cuando estén disponibles."
      }
    },
    "tamoxifeno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina é inibidor potente de CYP2D6 e reduz significativamente a conversão do tamoxifeno em endoxifeno (metabólito ativo responsável pelo efeito antineoplásico), podendo comprometer a eficácia do tratamento oncológico.",
        es: "Fluoxetina es inhibidor potente de CYP2D6 y reduce significativamente la conversión de tamoxifeno en endoxifeno (metabolito activo responsable del efecto antineoplásico), pudiendo comprometer la eficacia del tratamiento oncológico."
      },
      conduta: {
        pt: "Evitar combinação. Preferir ISRS com menor inibição de CYP2D6 em pacientes oncológicas (escitalopram, citalopram ou venlafaxina em doses baixas, conforme discussão com oncologista).",
        es: "Evitar combinación. Preferir ISRS con menor inhibición de CYP2D6 en pacientes oncológicas (escitalopram, citalopram o venlafaxina en dosis bajas, según discusión con oncólogo)."
      }
    },
    "metoprolol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe fortemente CYP2D6, aumentando os níveis plasmáticos de metoprolol em até 4 vezes. Risco de bradicardia, hipotensão, broncoespasmo e fadiga excessiva.",
        es: "Fluoxetina inhibe fuertemente CYP2D6, aumentando los niveles plasmáticos de metoprolol hasta 4 veces. Riesgo de bradicardia, hipotensión, broncoespasmo y fatiga excesiva."
      },
      conduta: {
        pt: "Monitorar FC e PA. Considerar redução da dose do metoprolol ou substituição por betabloqueador não metabolizado por CYP2D6 (atenolol, bisoprolol).",
        es: "Monitorear FC y PA. Considerar reducción de dosis de metoprolol o sustitución por betabloqueante no metabolizado por CYP2D6 (atenolol, bisoprolol)."
      }
    },
    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e eleva significativamente os níveis de atomoxetina, aumentando risco de taquicardia, hipertensão, insônia, irritabilidade e eventos cardiovasculares.",
        es: "Fluoxetina inhibe CYP2D6 y eleva significativamente los niveles de atomoxetina, aumentando el riesgo de taquicardia, hipertensión, insomnio, irritabilidad y eventos cardiovasculares."
      },
      conduta: {
        pt: "Iniciar atomoxetina na dose mínima e titular lentamente. Monitorar PA, FC e eventos neuropsiquiátricos.",
        es: "Iniciar atomoxetina a la dosis mínima y titular lentamente. Monitorear PA, FC y eventos neuropsiquiátricos."
      }
    },
    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina pode elevar os níveis séricos de clozapina por inibição de CYP1A2/2D6, aumentando o risco de sedação excessiva, convulsões, hipotensão e toxicidade hematológica (agranulocitose).",
        es: "Fluoxetina puede elevar los niveles séricos de clozapina por inhibición de CYP1A2/2D6, aumentando el riesgo de sedación excesiva, convulsiones, hipotensión y toxicidad hematológica (agranulocitosis)."
      },
      conduta: {
        pt: "Monitorar sedação, convulsões, PA ortostática e hemograma. Considerar monitoramento de nível sérico de clozapina.",
        es: "Monitorear sedación, convulsiones, PA ortostática y hemograma. Considerar monitoreo de nivel sérico de clozapina."
      }
    },
    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina pode aumentar os níveis de haloperidol por inibição de CYP2D6, somando risco de sintomas extrapiramidais (SEP), sedação e prolongamento de QT.",
        es: "Fluoxetina puede aumentar los niveles de haloperidol por inhibición de CYP2D6, sumando riesgo de síntomas extrapiramidales (SEP), sedación y prolongación de QT."
      },
      conduta: {
        pt: "Monitorar rigidez muscular, acatisia, tremor, sedação excessiva e ECG em pacientes de risco cardíaco.",
        es: "Monitorear rigidez muscular, acatisia, temblor, sedación excesiva y ECG en pacientes con riesgo cardíaco."
      }
    },
    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina pode inibir o metabolismo da fenitoína via CYP2C9/2C19, elevando seus níveis séricos e causando toxicidade neurológica (nistagmo, ataxia, diplopia, sonolência, confusão).",
        es: "Fluoxetina puede inhibir el metabolismo de la fenitoína vía CYP2C9/2C19, elevando sus niveles séricos y causando toxicidad neurológica (nistagmo, ataxia, diplopía, somnolencia, confusión)."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína e sinais neurológicos ao iniciar, ajustar ou suspender fluoxetina.",
        es: "Monitorear niveles séricos de fenitoína y signos neurológicos al iniciar, ajustar o suspender fluoxetina."
      }
    },
    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina pode inibir o metabolismo da carbamazepina, elevando seus níveis e causando diplopia, ataxia, tontura, hiponatremia e sedação. A carbamazepina pode, por sua vez, induzir o metabolismo da fluoxetina, reduzindo sua eficácia antidepressiva.",
        es: "Fluoxetina puede inhibir el metabolismo de la carbamazepina, elevando sus niveles y causando diplopía, ataxia, mareos, hiponatremia y sedación. La carbamazepina puede, a su vez, inducir el metabolismo de fluoxetina, reduciendo su eficacia antidepresiva."
      },
      conduta: {
        pt: "Monitorar níveis séricos de carbamazepina, sódio sérico e sinais neurológicos. Ajustar dose se necessário.",
        es: "Monitorear niveles séricos de carbamazepina, sodio sérico y signos neurológicos. Ajustar dosis si es necesario."
      }
    },
    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A combinação de fluoxetina com lítio pode aumentar o risco de síndrome serotoninérgica e neurotoxicidade. A combinação é utilizada clinicamente para potencialização antidepressiva, mas exige monitoramento rigoroso.",
        es: "La combinación de fluoxetina con litio puede aumentar el riesgo de síndrome serotoninérgico y neurotoxicidad. La combinación se usa clínicamente para potenciación antidepresiva, pero requiere monitoreo riguroso."
      },
      conduta: {
        pt: "Monitorar litemia, tremor, confusão, hiperreflexia, febre e sintomas autonômicos. Manter litemia no alvo terapêutico inferior quando em combinação.",
        es: "Monitorear litemia, temblor, confusión, hiperreflexia, fiebre y síntomas autonómicos. Mantener litemia en el objetivo terapéutico inferior cuando en combinación."
      }
    },
    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6, elevando os níveis de dextrometorfano e aumentando o risco de síndrome serotoninérgica. O dextrometorfano presente em xaropes de tosse é uma fonte comum de exposição inadvertida.",
        es: "Fluoxetina inhibe CYP2D6, elevando los niveles de dextrometorfano y aumentando el riesgo de síndrome serotoninérgico. El dextrometorfano presente en jarabes para la tos es una fuente común de exposición inadvertida."
      },
      conduta: {
        pt: "Orientar paciente a evitar xaropes contendo dextrometorfano. Investigar automedicação.",
        es: "Orientar al paciente a evitar jarabes con dextrometorfano. Investigar automedicación."
      }
    },
    "carvedilol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Fluoxetina pode inibir CYP2D6 e aumentar a exposição ao carvedilol, potencializando bradicardia e hipotensão.",
        es: "Fluoxetina puede inhibir CYP2D6 y aumentar la exposición al carvedilol, potenciando bradicardia e hipotensión."
      },
      conduta: {
        pt: "Monitorar PA, FC e sintomas ortostáticos.",
        es: "Monitorear PA, FC y síntomas ortostáticos."
      }
    },

    /* ── Interações de gravidade MODERADA ── */
    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "ISRS depletam a serotonina intraplaquetária, inibindo a agregação. A associação com AINEs (que inibem a síntese de tromboxano) amplifica o risco de sangramento gastrointestinal, equimoses e hematomas.",
        es: "Los ISRS depletan la serotonina intraplaquetaria, inhibiendo la agregación. La asociación con AINEs (que inhiben la síntesis de tromboxano) amplifica el riesgo de sangrado gastrointestinal, equimosis y hematomas."
      },
      conduta: {
        pt: "Evitar uso prolongado e simultâneo. Considerar IBP profilático em pacientes com fatores de risco (idoso, antecedente de úlcera, anticoagulação concomitante).",
        es: "Evitar uso prolongado y simultáneo. Considerar IBP profiláctico en pacientes con factores de riesgo (anciano, antecedente de úlcera, anticoagulación concomitante)."
      }
    },
    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A depleção de serotonina plaquetária pela fluoxetina somada ao efeito antiagregante do AAS, clopidogrel ou ticagrelor aumenta o risco de sangramento espontâneo.",
        es: "La depleción de serotonina plaquetaria por fluoxetina sumada al efecto antiagregante del AAS, clopidogrel o ticagrelor aumenta el riesgo de sangrado espontáneo."
      },
      conduta: {
        pt: "Monitorar equimoses, epistaxe, melena. Considerar proteção gástrica. Não suspender antiagregante sem avaliação cardiológica.",
        es: "Monitorear equimosis, epistaxis, melena. Considerar protección gástrica. No suspender antiagregante sin evaluación cardiológica."
      }
    },
    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação de fluoxetina com triptanos (sumatriptana, rizatriptana, eletriptana) pode aumentar o risco de síndrome serotoninérgica, embora o risco seja considerado baixo a moderado com uso ocasional.",
        es: "La asociación de fluoxetina con triptanes (sumatriptán, rizatriptán, eletriptán) puede aumentar el riesgo de síndrome serotoninérgico, aunque el riesgo se considera bajo a moderado con uso ocasional."
      },
      conduta: {
        pt: "Orientar sinais de alerta da síndrome serotoninérgica (agitação, tremor, febre, confusão). Evitar doses frequentes ou combinações serotoninérgicas adicionais.",
        es: "Orientar signos de alerta del síndrome serotoninérgico (agitación, temblor, fiebre, confusión). Evitar dosis frecuentes o combinaciones serotoninérgicas adicionales."
      }
    },
    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação com depressores do SNC (benzodiazepínicos, opioides, antipsicóticos, Z-drugs) pode aumentar sedação, prejuízo psicomotor, risco de quedas e depressão respiratória.",
        es: "La asociación con depresores del SNC (benzodiazepinas, opioides, antipsicóticos, Z-drugs) puede aumentar sedación, deterioro psicomotor, riesgo de caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores. Orientar não dirigir. Monitorar sedação, quedas e respiração, especialmente em idosos.",
        es: "Evitar múltiples depresores. Orientar no conducir. Monitorear sedación, caídas y respiración, especialmente en ancianos."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     SERTRALINA
     CYP2D6 inibidor moderado · meia-vida ~26h (washout 14 dias)
     Cobertura via classes: ~85 fármacos reais
  ───────────────────────────────────────────────────────────── */
  "sertralina": {

    /* ── Contraindicações absolutas ── */
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com IMAOs (fenelzina, tranilcipromina, selegilina, rasagilina, moclobemida) precipita síndrome serotoninérgica grave com hipertermia, rigidez muscular, instabilidade autonômica, convulsões e risco de morte.",
        es: "La asociación con IMAOs (fenelzina, tranilcipromina, selegilina, rasagilina, moclobemida) precipita síndrome serotoninérgico grave con hipertermia, rigidez muscular, inestabilidad autonómica, convulsiones y riesgo de muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar intervalo mínimo de 14 dias entre IMAO e sertralina (nos dois sentidos).",
        es: "Contraindicado. Respetar intervalo mínimo de 14 días entre IMAO y sertralina (en ambos sentidos)."
      }
    },
    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível não-seletiva e pode precipitar síndrome serotoninérgica grave quando associada à sertralina.",
        es: "Linezolid posee actividad IMAO reversible no selectiva y puede precipitar síndrome serotoninérgico grave cuando se asocia con sertralina."
      },
      conduta: {
        pt: "Contraindicado. Se linezolida for indispensável, suspender sertralina e monitorar em ambiente hospitalar. Aguardar 24h após última dose de linezolida antes de reintroduzir sertralina.",
        es: "Contraindicado. Si linezolid es indispensable, suspender sertralina y monitorear en ambiente hospitalario. Esperar 24h tras la última dosis de linezolid antes de reintroducir sertralina."
      }
    },
    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno IV possui efeito IMAO e pode causar síndrome serotoninérgica grave em combinação com sertralina.",
        es: "Azul de metileno IV posee efecto IMAO y puede causar síndrome serotoninérgico grave en combinación con sertralina."
      },
      conduta: {
        pt: "Não associar. Usar alternativa quando possível.",
        es: "No asociar. Usar alternativa cuando sea posible."
      }
    },
    "pimozida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Sertralina pode inibir CYP2D6 e elevar os níveis de pimozida, aumentando o risco de prolongamento do QT e arritmias ventriculares fatais (torsades de pointes).",
        es: "Sertralina puede inhibir CYP2D6 y elevar los niveles de pimozida, aumentando el riesgo de prolongación del QT y arritmias ventriculares fatales (torsades de pointes)."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },
    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A combinação de sertralina com tramadol aumenta o risco de síndrome serotoninérgica e convulsões. O tramadol tem atividade serotoninérgica intrínseca e abaixa o limiar convulsivo.",
        es: "La combinación de sertralina con tramadol aumenta el riesgo de síndrome serotoninérgico y convulsiones. El tramadol tiene actividad serotoninérgica intrínseca y baja el umbral convulsivo."
      },
      conduta: {
        pt: "Evitar associação. Preferir analgesia com paracetamol, dipirona ou opioides sem atividade serotoninérgica.",
        es: "Evitar asociación. Preferir analgesia con paracetamol, dipirona u opioides sin actividad serotoninérgica."
      }
    },
    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico (Erva de São João) potencializa a atividade serotoninérgica e pode precipitar síndrome serotoninérgica. Adicionalmente, é indutor enzimático (CYP3A4/2C9) e pode reduzir os níveis séricos da sertralina, comprometendo a eficácia.",
        es: "El hipérico (Hierba de San Juan) potencia la actividad serotoninérgica y puede precipitar síndrome serotoninérgico. Además, es inductor enzimático (CYP3A4/2C9) y puede reducir los niveles séricos de sertralina, comprometiendo la eficacia."
      },
      conduta: {
        pt: "Contraindicado. Investigar uso de fitoterápicos. Orientar sobre o risco duplo (serotoninérgico + farmacocinético).",
        es: "Contraindicado. Investigar uso de fitoterapéuticos. Orientar sobre el riesgo doble (serotoninérgico + farmacocinético)."
      }
    },

    /* ── Interações de gravidade ALTA ── */
    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Sertralina reduz a função plaquetária por depleção serotoninérgica e aumenta o risco de sangramento com anticoagulantes. Com varfarina, pode haver alteração discreta do INR.",
        es: "Sertralina reduce la función plaquetaria por depleción serotoninérgica y aumenta el riesgo de sangrado con anticoagulantes. Con warfarina, puede haber alteración discreta del INR."
      },
      conduta: {
        pt: "Monitorar sinais de sangramento e INR se em uso de varfarina. Avaliar anticoagulação profilática gástrica em alto risco.",
        es: "Monitorear signos de sangrado e INR si usa warfarina. Evaluar anticoagulación profiláctica gástrica en alto riesgo."
      }
    },
    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A combinação de sertralina com outros agentes serotoninérgicos (lítio, opioides serotoninérgicos, triptanos, metoclopramida, triptofano) aumenta o risco de síndrome serotoninérgica.",
        es: "La combinación de sertralina con otros agentes serotoninérgicos (litio, opioides serotoninérgicos, triptanes, metoclopramida, triptófano) aumenta el riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar polifarmácia serotoninérgica. Monitorar agitação, hiperreflexia, clônus, tremor, febre e instabilidade autonômica.",
        es: "Evitar polifarmacia serotoninérgica. Monitorear agitación, hiperreflexia, clonus, temblor, fiebre e inestabilidad autonómica."
      }
    },
    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação de sertralina com lítio pode aumentar o risco de síndrome serotoninérgica e neurotoxicidade. Combinação usada para potencialização antidepressiva, mas com risco monitorável.",
        es: "La asociación de sertralina con litio puede aumentar el riesgo de síndrome serotoninérgico y neurotoxicidad. Combinación usada para potenciación antidepresiva, pero con riesgo monitoreable."
      },
      conduta: {
        pt: "Monitorar litemia, tremor, confusão, hiperreflexia e sintomas autonômicos. Manter litemia em alvo terapêutico inferior.",
        es: "Monitorear litemia, temblor, confusión, hiperreflexia y síntomas autonómicos. Mantener litemia en objetivo terapéutico inferior."
      }
    },
    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode aumentar o risco serotoninérgico (metadona tem fraca atividade inibitória de recaptação) e somar risco de prolongamento de QT em pacientes cardiopatas ou com hipocalemia.",
        es: "La asociación puede aumentar el riesgo serotoninérgico (metadona tiene débil actividad inhibidora de recaptación) y sumar riesgo de prolongación de QT en pacientes cardiópatas o con hipopotasemia."
      },
      conduta: {
        pt: "Monitorar sintomas serotoninérgicos, ECG e eletrólitos (K+, Mg2+) em pacientes de risco.",
        es: "Monitorear síntomas serotoninérgicos, ECG y electrolitos (K+, Mg2+) en pacientes de riesgo."
      }
    },
    "fentanil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "O fentanil possui fraca atividade serotoninérgica intrínseca. Em doses altas ou uso perioperatório prolongado com sertralina, o risco de síndrome serotoninérgica é clinicamente relevante.",
        es: "El fentanilo posee débil actividad serotoninérgica intrínseca. En dosis altas o uso perioperatorio prolongado con sertralina, el riesgo de síndrome serotoninérgico es clínicamente relevante."
      },
      conduta: {
        pt: "Monitorar estado neurológico, clônus, hiperreflexia e instabilidade autonômica em ambiente perioperatório ou de terapia intensiva.",
        es: "Monitorear estado neurológico, clonus, hiperreflexia e inestabilidad autonómica en ambiente perioperatorio o de terapia intensiva."
      }
    },
    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Sertralina inibe CYP2D6 de forma moderada e pode elevar os níveis de dextrometorfano, aumentando o risco de síndrome serotoninérgica, especialmente com automedicação.",
        es: "Sertralina inhibe CYP2D6 de forma moderada y puede elevar los niveles de dextrometorfano, aumentando el riesgo de síndrome serotoninérgico, especialmente con automedicación."
      },
      conduta: {
        pt: "Orientar evitar xaropes com dextrometorfano. Investigar automedicação.",
        es: "Orientar evitar jarabes con dextrometorfano. Investigar automedicación."
      }
    },

    /* ── Interações de gravidade MODERADA ── */
    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A depleção plaquetária serotoninérgica somada à inibição de tromboxano pelos AINEs amplifica o risco de sangramento gastrointestinal, equimoses e hematomas.",
        es: "La depleción plaquetaria serotoninérgica sumada a la inhibición de tromboxano por AINEs amplifica el riesgo de sangrado gastrointestinal, equimosis y hematomas."
      },
      conduta: {
        pt: "Evitar uso crônico e concomitante sem indicação. Considerar IBP em pacientes com fatores de risco.",
        es: "Evitar uso crónico y concomitante sin indicación. Considerar IBP en pacientes con factores de riesgo."
      }
    },
    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Efeito antiplaquetário aditivo entre sertralina e AAS/clopidogrel/ticagrelor aumenta o risco de sangramento espontâneo.",
        es: "Efecto antiplaquetario aditivo entre sertralina y AAS/clopidogrel/ticagrelor aumenta el riesgo de sangrado espontáneo."
      },
      conduta: {
        pt: "Monitorar sinais de sangramento. Considerar gastroproteção. Não suspender antiagregante sem avaliação médica.",
        es: "Monitorear signos de sangrado. Considerar gastroprotección. No suspender antiagregante sin evaluación médica."
      }
    },
    "$classe_triciclicos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sertralina pode inibir CYP2D6 moderadamente e elevar os níveis dos tricíclicos, com risco de toxicidade anticolinérgica, sedação e alteração da condução cardíaca.",
        es: "Sertralina puede inhibir CYP2D6 moderadamente y elevar los niveles de tricíclicos, con riesgo de toxicidad anticolinérgica, sedación y alteración de la conducción cardíaca."
      },
      conduta: {
        pt: "Monitorar sedação, sintomas anticolinérgicos e ECG em pacientes de risco.",
        es: "Monitorear sedación, síntomas anticolinérgicos y ECG en pacientes de riesgo."
      }
    },
    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação com triptanos pode aumentar o risco de síndrome serotoninérgica, especialmente com uso frequente ou combinações serotoninérgicas adicionais.",
        es: "La asociación con triptanes puede aumentar el riesgo de síndrome serotoninérgico, especialmente con uso frecuente o combinaciones serotoninérgicas adicionales."
      },
      conduta: {
        pt: "Orientar sinais de alerta (agitação, tremor, febre, confusão). Evitar triptanos de alta frequência.",
        es: "Orientar signos de alerta (agitación, temblor, fiebre, confusión). Evitar triptanes de alta frecuencia."
      }
    },
    "tamoxifeno": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sertralina pode inibir CYP2D6 de forma moderada e teoricamente reduzir a ativação do tamoxifeno em endoxifeno, embora o impacto seja menor que com fluoxetina ou paroxetina.",
        es: "Sertralina puede inhibir CYP2D6 de forma moderada y teóricamente reducir la activación de tamoxifeno en endoxifeno, aunque el impacto es menor que con fluoxetina o paroxetina."
      },
      conduta: {
        pt: "Considerar antidepressivo com menor impacto em CYP2D6 se discutido com oncologista (escitalopram, venlafaxina).",
        es: "Considerar antidepresivo con menor impacto en CYP2D6 si se discute con oncólogo (escitalopram, venlafaxina)."
      }
    },
    "metoprolol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sertralina pode inibir CYP2D6 de forma moderada e elevar discretamente os níveis de metoprolol, com risco de bradicardia em suscetíveis.",
        es: "Sertralina puede inhibir CYP2D6 de forma moderada y elevar discretamente los niveles de metoprolol, con riesgo de bradicardia en susceptibles."
      },
      conduta: {
        pt: "Monitorar FC, PA e tontura. Avaliar substituição por betabloqueador não dependente de CYP2D6 se bradicardia sintomática.",
        es: "Monitorear FC, PA y mareos. Evaluar sustitución por betabloqueante no dependiente de CYP2D6 si bradicardia sintomática."
      }
    },
    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sertralina pode alterar modestamente os níveis de fenitoína; em pacientes sensíveis, há risco de toxicidade neurológica.",
        es: "Sertralina puede alterar modestamente los niveles de fenitoína; en pacientes sensibles, hay riesgo de toxicidad neurológica."
      },
      conduta: {
        pt: "Monitorar níveis séricos e sinais como nistagmo, ataxia, sonolência ao iniciar ou ajustar sertralina.",
        es: "Monitorear niveles séricos y signos como nistagmo, ataxia, somnolencia al iniciar o ajustar sertralina."
      }
    },
    "diazepam": {
      gravidade: "moderada",
      scoreClinico: 2,
      descricao: {
        pt: "A sertralina pode aumentar discretamente a sedação e o prejuízo psicomotor com benzodiazepínicos, especialmente em idosos ou doses maiores.",
        es: "La sertralina puede aumentar discretamente la sedación y el deterioro psicomotor con benzodiazepinas, especialmente en ancianos o dosis mayores."
      },
      conduta: {
        pt: "Orientar não dirigir, evitar álcool, monitorar quedas. Preferir menor dose efetiva de BZD.",
        es: "Orientar no conducir, evitar alcohol, monitorear caídas. Preferir la menor dosis efectiva de BZD."
      }
    },
    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação com depressores do SNC aumenta sedação, risco de quedas e pode causar depressão respiratória, especialmente em idosos com polifarmácia.",
        es: "La asociación con depresores del SNC aumenta sedación, riesgo de caídas y puede causar depresión respiratoria, especialmente en ancianos con polifarmacia."
      },
      conduta: {
        pt: "Evitar múltiplos depressores. Monitorar sedação e orientar cuidados de segurança.",
        es: "Evitar múltiples depresores. Monitorear sedación y orientar cuidados de seguridad."
      }
    },
    "$classe_qt": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Sertralina tem baixo potencial de prolongamento de QT, mas em doses altas ou em pacientes com fatores de risco (hipocalemia, cardiopatia, outros fármacos QT-ativos) pode haver efeito aditivo.",
        es: "Sertralina tiene bajo potencial de prolongación de QT, pero en dosis altas o en pacientes con factores de riesgo (hipopotasemia, cardiopatía, otros fármacos QT-activos) puede haber efecto aditivo."
      },
      conduta: {
        pt: "Considerar ECG basal e correção de eletrólitos (K+, Mg2+) em pacientes de risco cardíaco.",
        es: "Considerar ECG basal y corrección de electrolitos (K+, Mg2+) en pacientes con riesgo cardíaco."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRS 3 — Escitalopram
     Cobertura: ~120 fármacos reais via ontologia
     Notas clínicas:
       • QT: alta (scoreClinico 4) — menos grave que citalopram
       • Tramadol: contraindicada (convulsões + serotonina)
       • Hipérico: contraindicada (síndrome serotoninérgica)
       • $classe_imaos: washout 14 dias
     Inserido em: 2026-06-19 · v3.3
  ───────────────────────────────────────────────────────────────── */
  "escitalopram": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com IMAO aumenta risco de síndrome serotoninérgica grave, hipertermia, rigidez, instabilidade autonômica e morte.",
        es: "La asociación con IMAO aumenta el riesgo de síndrome serotoninérgico grave, hipertermia, rigidez, inestabilidad autonómica y muerte."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias entre IMAO e escitalopram.",
        es: "No asociar. Respetar intervalo mínimo de 14 días entre IMAO y escitalopram."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode precipitar síndrome serotoninérgica grave.",
        es: "Linezolid posee actividad IMAO reversible y puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender escitalopram e monitorar em ambiente hospitalar.",
        es: "Evitar asociación. Si es indispensable, suspender escitalopram y monitorear en ambiente hospitalario."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno IV pode atuar como IMAO e causar síndrome serotoninérgica potencialmente fatal.",
        es: "El azul de metileno IV puede actuar como IMAO y causar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "pimozida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de prolongamento de QT e arritmias ventriculares graves.",
        es: "La asociación aumenta el riesgo de prolongación del QT y arritmias ventriculares graves."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar. Preferir analgésico não serotoninérgico.",
        es: "Evitar. Preferir analgésico no serotoninérgico."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico/Erva de São João aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico/Hierba de San Juan aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alto risco de prolongamento de QT e arritmias ventriculares por efeito aditivo.",
        es: "Alto riesgo de prolongación del QT y arritmias ventriculares por efecto aditivo."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, ECG e eletrólitos rigorosos.",
        es: "Evitar asociación. Si es inevitable, ECG y electrolitos estrictos."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de torsades de pointes por prolongamento aditivo do QT.",
        es: "Alto riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação com outros serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "La asociación con otros serotoninérgicos aumenta el riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar agitação, tremor, clônus, hiperreflexia, febre, diarreia e confusão.",
        es: "Monitorear agitación, temblor, clonus, hiperreflexia, fiebre, diarrea y confusión."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Escitalopram pode prolongar QT, especialmente com outros fármacos pró-arrítmicos, hipocalemia, hipomagnesemia ou cardiopatia.",
        es: "Escitalopram puede prolongar el QT, especialmente con otros fármacos proarrítmicos, hipopotasemia, hipomagnesemia o cardiopatía."
      },
      conduta: {
        pt: "Evitar combinações de alto risco. Considerar ECG e corrigir K+/Mg2+.",
        es: "Evitar combinaciones de alto riesgo. Considerar ECG y corregir K+/Mg2+."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação aumenta risco de sangramento por efeito plaquetário aditivo; com varfarina, pode exigir controle de INR.",
        es: "La asociación aumenta riesgo de sangrado por efecto plaquetario aditivo; con warfarina, puede requerir control de INR."
      },
      conduta: {
        pt: "Monitorar sangramentos, hemoglobina se indicado e INR se varfarina.",
        es: "Monitorear sangrados, hemoglobina si está indicado e INR si warfarina."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de síndrome serotoninérgica, especialmente em automedicação ou doses altas.",
        es: "Puede aumentar riesgo de síndrome serotoninérgico, especialmente en automedicación o dosis altas."
      },
      conduta: {
        pt: "Evitar xaropes com dextrometorfano ou orientar sinais de alerta.",
        es: "Evitar jarabes con dextrometorfano u orientar signos de alerta."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia, febre e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia, fiebre y litemia si está indicado."
      }
    },

    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar risco serotoninérgico e prolongamento de QT.",
        es: "Puede sumar riesgo serotoninérgico y prolongación del QT."
      },
      conduta: {
        pt: "Monitorar sintomas serotoninérgicos e ECG em pacientes de risco.",
        es: "Monitorear síntomas serotoninérgicos y ECG en pacientes de riesgo."
      }
    },

    "fentanil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode contribuir para síndrome serotoninérgica, principalmente em doses altas ou contexto perioperatório.",
        es: "Puede contribuir al síndrome serotoninérgico, principalmente en dosis altas o contexto perioperatorio."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, febre, agitação e instabilidade autonômica.",
        es: "Monitorear clonus, hiperreflexia, fiebre, agitación e inestabilidad autonómica."
      }
    },

    "buspirona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Associação serotoninérgica pode aumentar risco de síndrome serotoninérgica.",
        es: "Asociación serotoninérgica puede aumentar riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Usar com cautela e monitorar sintomas serotoninérgicos.",
        es: "Usar con precaución y monitorear síntomas serotoninérgicos."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de QT prolongado, sintomas extrapiramidais e sedação.",
        es: "Aumenta riesgo de QT prolongado, síntomas extrapiramidales y sedación."
      },
      conduta: {
        pt: "Monitorar ECG, rigidez, tremor e acatisia.",
        es: "Monitorear ECG, rigidez, temblor y acatisia."
      }
    },

    "fluconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de escitalopram e também somar risco de QT prolongado.",
        es: "Puede aumentar niveles de escitalopram y también sumar riesgo de QT prolongado."
      },
      conduta: {
        pt: "Evitar se alto risco de QT. Considerar ECG e dose menor.",
        es: "Evitar si alto riesgo de QT. Considerar ECG y dosis menor."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "ISRS podem aumentar risco de sangramento gastrointestinal quando associados a AINEs.",
        es: "Los ISRS pueden aumentar el riesgo de sangrado gastrointestinal cuando se asocian con AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado. Considerar gastroproteção em pacientes de risco.",
        es: "Evitar uso prolongado. Considerar gastroprotección en pacientes de riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento com antiagregantes plaquetários.",
        es: "Puede aumentar riesgo de sangrado con antiagregantes plaquetarios."
      },
      conduta: {
        pt: "Monitorar melena, epistaxe, equimoses e considerar proteção gástrica se alto risco.",
        es: "Monitorear melena, epistaxis, equimosis y considerar protección gástrica si alto riesgo."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico, embora raro, especialmente com múltiplos serotoninérgicos.",
        es: "Puede aumentar riesgo serotoninérgico, aunque raro, especialmente con múltiples serotoninérgicos."
      },
      conduta: {
        pt: "Orientar sinais de alerta: tremor, hiperreflexia, agitação, febre ou confusão.",
        es: "Orientar signos de alerta: temblor, hiperreflexia, agitación, fiebre o confusión."
      }
    },

    "$classe_triciclicos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode somar efeitos serotoninérgicos, sedativos, anticolinérgicos e pró-arrítmicos.",
        es: "Puede sumar efectos serotoninérgicos, sedativos, anticolinérgicos y proarrítmicos."
      },
      conduta: {
        pt: "Monitorar sedação, sintomas autonômicos e ECG se paciente de risco.",
        es: "Monitorear sedación, síntomas autonómicos y ECG si paciente de riesgo."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, prejuízo psicomotor, quedas e depressão respiratória.",
        es: "Puede aumentar somnolencia, deterioro psicomotor, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar sedação.",
        es: "Evitar múltiples depresores y monitorear sedación."
      }
    },

    "omeprazol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Omeprazol pode aumentar exposição ao escitalopram por inibição de CYP2C19, elevando risco de efeitos adversos e QT.",
        es: "Omeprazol puede aumentar exposición a escitalopram por inhibición de CYP2C19, elevando riesgo de efectos adversos y QT."
      },
      conduta: {
        pt: "Monitorar efeitos adversos e considerar menor dose em idosos ou alto risco de QT.",
        es: "Monitorear efectos adversos y considerar menor dosis en ancianos o alto riesgo de QT."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRS 4 — Citalopram
     Cobertura: ~130 fármacos reais via ontologia
     Notas clínicas:
       • QT: CONTRAINDICADA (scoreClinico 5) — prolongamento dose-dependente
         mais grave que escitalopram → maior risco de torsades de pointes
       • haloperidol: contraindicada (vs "alta" para escitalopram)
       • omeprazol: alta via CYP2C19 (vs "moderada" para escitalopram)
       • Tramadol: contraindicada (convulsões + serotonina)
       • Hipérico: contraindicada (síndrome serotoninérgica)
       • $classe_imaos: washout 14 dias
     Inserido em: 2026-06-19 · v3.3
  ───────────────────────────────────────────────────────────────── */
  "citalopram": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com IMAO aumenta risco de síndrome serotoninérgica grave e potencialmente fatal.",
        es: "La asociación con IMAO aumenta riesgo de síndrome serotoninérgico grave y potencialmente fatal."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias.",
        es: "No asociar. Respetar intervalo mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida pode precipitar síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Linezolid puede precipitar síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender citalopram e monitorar em hospital.",
        es: "Evitar asociación. Si es indispensable, suspender citalopram y monitorear en hospital."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar síndrome serotoninérgica grave por atividade IMAO.",
        es: "Puede causar síndrome serotoninérgico grave por actividad IMAO."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "pimozida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Contraindicado por aumento do risco de prolongamento de QT e arritmias ventriculares.",
        es: "Contraindicado por aumento del riesgo de prolongación del QT y arritmias ventriculares."
      },
      conduta: {
        pt: "Não associar.",
        es: "No associar."
      }
    },

    "$classe_qt": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Citalopram prolonga QT de forma dose-dependente; a associação com outros fármacos que prolongam QT aumenta risco de torsades de pointes, taquicardia ventricular e morte súbita.",
        es: "Citalopram prolonga el QT de forma dosis-dependiente; la asociación con otros fármacos que prolongan QT aumenta riesgo de torsades de pointes, taquicardia ventricular y muerte súbita."
      },
      conduta: {
        pt: "Evitar associação. Corrigir K+/Mg2+ e solicitar ECG se uso inevitável.",
        es: "Evitar asociación. Corregir K+/Mg2+ y solicitar ECG si el uso es inevitable."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de prolongamento de QT e torsades de pointes por efeito aditivo.",
        es: "Alto riesgo de prolongación del QT y torsades de pointes por efecto aditivo."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco importante de arritmia ventricular grave.",
        es: "Riesgo importante de arritmia ventricular grave."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "haloperidol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Ambos podem prolongar QT e aumentar risco de torsades de pointes.",
        es: "Ambos pueden prolongar QT y aumentar riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Evitar. Se inevitável, ECG seriado e eletrólitos.",
        es: "Evitar. Si es inevitable, ECG seriado y electrolitos."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Combinação de alto risco para prolongamento de QT.",
        es: "Combinación de alto riesgo para prolongación del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No associar."
      }
    },

    "moxifloxacino": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco aditivo de QT prolongado e arritmias ventriculares.",
        es: "Riesgo aditivo de QT prolongado y arritmias ventriculares."
      },
      conduta: {
        pt: "Escolher antibiótico alternativo quando possível.",
        es: "Elegir antibiótico alternativo cuando sea posible."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar.",
        es: "Evitar."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta atividade serotoninérgica e pode causar síndrome serotoninérgica.",
        es: "Aumenta actividad serotoninérgica y puede causar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Combinação com serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "Combinación con serotoninérgicos aumenta riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre, diarreia, agitação e confusão.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre, diarrea, agitación y confusión."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sangramento por efeito plaquetário aditivo.",
        es: "Aumenta riesgo de sangrado por efecto plaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar sangramentos; se varfarina, monitorar INR.",
        es: "Monitorear sangrados; si warfarina, monitorear INR."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar automedicação com xaropes contendo dextrometorfano.",
        es: "Evitar automedicación con jarabes que contengan dextrometorfano."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia y litemia si está indicado."
      }
    },

    "omeprazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Omeprazol pode aumentar níveis de citalopram por inibição de CYP2C19, elevando risco de QT prolongado.",
        es: "Omeprazol puede aumentar niveles de citalopram por inhibición de CYP2C19, elevando riesgo de QT prolongado."
      },
      conduta: {
        pt: "Considerar menor dose, alternativa ao PPI ou ECG em pacientes de risco.",
        es: "Considerar menor dosis, alternativa al IBP o ECG en pacientes de riesgo."
      }
    },

    "fluconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição ao citalopram e somar risco de QT prolongado.",
        es: "Puede aumentar exposición a citalopram y sumar riesgo de QT prolongado."
      },
      conduta: {
        pt: "Evitar em pacientes de alto risco; considerar ECG e eletrólitos.",
        es: "Evitar en pacientes de alto riesgo; considerar ECG y electrolitos."
      }
    },

    "metadona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Soma risco serotoninérgico e de QT prolongado.",
        es: "Suma riesgo serotoninérgico y de QT prolongado."
      },
      conduta: {
        pt: "Monitorar ECG e sintomas serotoninérgicos.",
        es: "Monitorear ECG y síntomas serotoninérgicos."
      }
    },

    "fentanil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, febre e confusão.",
        es: "Monitorear clonus, hiperreflexia, fiebre y confusión."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "ISRS podem aumentar risco de sangramento gastrointestinal com AINEs.",
        es: "Los ISRS pueden aumentar riesgo de sangrado gastrointestinal con AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado e considerar gastroproteção em pacientes de risco.",
        es: "Evitar uso prolongado y considerar gastroprotección en pacientes de riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "A associação pode aumentar risco de sangramentos.",
        es: "La asociación puede aumentar riesgo de sangrados."
      },
      conduta: {
        pt: "Monitorar epistaxe, equimoses, melena e queda de hemoglobina.",
        es: "Monitorear epistaxis, equimosis, melena y caída de hemoglobina."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico em combinações múltiplas.",
        es: "Puede aumentar riesgo serotoninérgico en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta e evitar múltiplos serotoninérgicos.",
        es: "Orientar signos de alerta y evitar múltiples serotoninérgicos."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, quedas e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Evitar múltiplos depressores do SNC.",
        es: "Evitar múltiples depresores del SNC."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRS 5 — Paroxetina
     Cobertura: ~110 fármacos reais via ontologia
     Notas clínicas:
       • Inibição CYP2D6 mais forte entre ISRS → tamoxifeno contraindicado
       • Beta-bloqueadores (metoprolol, carvedilol, nebivolol): alta
       • Atomoxetina, risperidona, haloperidol: alta (via CYP2D6)
       • Tramadol: contraindicada (síndrome serotoninérgica + convulsões)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.4
  ───────────────────────────────────────────────────────────────── */
  "paroxetina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta significativamente o risco de síndrome serotoninérgica grave e potencialmente fatal.",
        es: "La asociación aumenta significativamente el riesgo de síndrome serotoninérgico grave y potencialmente fatal."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode desencadear síndrome serotoninérgica.",
        es: "Linezolid posee actividad IMAO reversible y puede desencadenar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "tamoxifeno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e reduz a conversão do tamoxifeno em seu metabólito ativo (endoxifeno), comprometendo a eficácia antineoplásica.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y reduce la conversión de tamoxifeno en su metabolito activo (endoxifeno), comprometiendo la eficacia antineoplásica."
      },
      conduta: {
        pt: "Evitar associação. Preferir sertralina, venlafaxina ou citalopram como alternativa antidepressiva.",
        es: "Evitar asociación. Preferir sertralina, venlafaxina o citalopram como alternativa antidepresiva."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica e convulsões.",
        es: "Alto riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "metoprolol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar significativamente os níveis do metoprolol por inibição de CYP2D6, causando bradicardia e hipotensão.",
        es: "Puede aumentar significativamente los niveles de metoprolol por inhibición de CYP2D6, causando bradicardia e hipotensión."
      },
      conduta: {
        pt: "Monitorar FC e PA. Considerar reduzir dose do beta-bloqueador.",
        es: "Monitorar FC y PA. Considerar reducir dosis del betabloqueador."
      }
    },

    "carvedilol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar efeitos beta-bloqueadores por inibição do CYP2D6.",
        es: "Puede potenciar efectos betabloqueadores por inhibición del CYP2D6."
      },
      conduta: {
        pt: "Monitorar bradicardia e hipotensão.",
        es: "Monitorar bradicardia e hipotensión."
      }
    },

    "nebivolol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumento da exposição ao beta-bloqueador por inibição metabólica do CYP2D6.",
        es: "Aumento de la exposición al betabloqueador por inhibición metabólica del CYP2D6."
      },
      conduta: {
        pt: "Monitorar FC e sintomas de bradicardia.",
        es: "Monitorar FC y síntomas de bradicardia."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina aumenta significativamente os níveis de atomoxetina por inibição do CYP2D6.",
        es: "Paroxetina aumenta significativamente niveles de atomoxetina por inhibición del CYP2D6."
      },
      conduta: {
        pt: "Monitorar PA, FC e agitação. Considerar dose menor de atomoxetina.",
        es: "Monitorar PA, FC y agitación. Considerar dosis menor de atomoxetina."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode desencadear síndrome serotoninérgica por inibição do metabolismo e efeito serotoninérgico aditivo.",
        es: "Puede desencadenar síndrome serotoninérgico por inhibición del metabolismo y efecto serotoninérgico aditivo."
      },
      conduta: {
        pt: "Evitar automedicação com xaropes contendo dextrometorfano.",
        es: "Evitar automedicación con jarabes que contengan dextrometorfano."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis do antipsicótico por inibição do CYP2D6, elevando risco extrapiramidal e de QT.",
        es: "Puede aumentar niveles del antipsicótico por inhibición del CYP2D6, elevando riesgo extrapiramidal y de QT."
      },
      conduta: {
        pt: "Monitorar sintomas extrapiramidais e ECG se indicado.",
        es: "Monitorar síntomas extrapiramidales y ECG si está indicado."
      }
    },

    "risperidona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição à risperidona por inibição do CYP2D6, elevando risco de sedação e efeitos extrapiramidais.",
        es: "Puede aumentar exposición a risperidona por inhibición del CYP2D6, elevando riesgo de sedación y efectos extrapiramidales."
      },
      conduta: {
        pt: "Monitorar sedação e sintomas extrapiramidais.",
        es: "Monitorar sedación y síntomas extrapiramidales."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sangramento por efeito plaquetário aditivo; com varfarina, pode ser necessário ajuste de INR.",
        es: "Aumenta riesgo de sangrado por efecto plaquetario aditivo; con warfarina, puede requerir ajuste de INR."
      },
      conduta: {
        pt: "Monitorar sinais hemorrágicos e INR se varfarina.",
        es: "Monitorar signos hemorrágicos e INR si warfarina."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica por efeito aditivo.",
        es: "Puede precipitar síndrome serotoninérgico por efecto aditivo."
      },
      conduta: {
        pt: "Monitorar agitação, tremor, clônus, hiperreflexia, febre, diarreia e confusão.",
        es: "Monitorar agitación, temblor, clonus, hiperreflexia, fiebre, diarrea y confusión."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Risco aumentado de sangramento gastrointestinal pela combinação de inibição plaquetária do ISRS com irritação mucosa dos AINEs.",
        es: "Riesgo aumentado de sangrado gastrointestinal por la combinación de inhibición plaquetaria del ISRS con irritación mucosa de los AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado. Considerar gastroproteção com IBP em pacientes de risco.",
        es: "Evitar uso prolongado. Considerar gastroprotección con IBP en pacientes de riesgo."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, prejuízo psicomotor e risco de quedas.",
        es: "Puede aumentar somnolencia, deterioro psicomotor y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar múltiplos depressores do SNC e orientar cautela ao dirigir.",
        es: "Evitar múltiples depresores del SNC y orientar precaución al conducir."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRS 6 — Fluvoxamina
     Cobertura: ~120 fármacos reais via ontologia
     Notas clínicas:
       • Inibição potente de CYP1A2 e CYP2C19 → teofilina e tizanidina contraindicadas
       • clozapina, olanzapina (CYP1A2): alta
       • alprazolam, diazepam (CYP3A4): alta
       • cafeína (CYP1A2): alta — efeito prático relevante
       • warfarina (CYP2C9 parcial): alta — monitorar INR
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.4
  ───────────────────────────────────────────────────────────────── */
  "fluvoxamina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica por efeito IMAO reversível da linezolida.",
        es: "Alto riesgo de síndrome serotoninérgico por efecto IMAO reversible de linezolid."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "teofilina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluvoxamina inibe CYP1A2 e aumenta drasticamente os níveis séricos da teofilina, com risco de toxicidade grave (convulsões, arritmia, morte).",
        es: "Fluvoxamina inhibe CYP1A2 y aumenta drásticamente los niveles séricos de teofilina, con riesgo de toxicidad grave (convulsiones, arritmia, muerte)."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, reduzir dose de teofilina em até 50% e monitorar nível sérico e ECG.",
        es: "Evitar asociación. Si es indispensable, reducir dosis de teofilina hasta 50% y monitorear nivel sérico y ECG."
      }
    },

    "tizanidina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluvoxamina inibe CYP1A2 e aumenta intensamente os níveis de tizanidina, causando hipotensão grave, sedação profunda e colapso cardiovascular.",
        es: "Fluvoxamina inhibe CYP1A2 y aumenta intensamente los niveles de tizanidina, causando hipotensión grave, sedación profunda y colapso cardiovascular."
      },
      conduta: {
        pt: "Contraindicado. Substituir miorrelaxante por alternativa não dependente de CYP1A2.",
        es: "Contraindicado. Sustituir miorrelajante por alternativa no dependiente de CYP1A2."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina inibe CYP1A2 e pode elevar significativamente os níveis de clozapina, com risco de toxicidade (convulsões, agranulocitose, hipotensão).",
        es: "Fluvoxamina inhibe CYP1A2 y puede elevar significativamente niveles de clozapina, con riesgo de toxicidad (convulsiones, agranulocitosis, hipotensión)."
      },
      conduta: {
        pt: "Monitorar níveis séricos de clozapina e sinais de toxicidade. Ajustar dose se necessário.",
        es: "Monitorar niveles séricos de clozapina y signos de toxicidad. Ajustar dosis si es necesario."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina aumenta a exposição à olanzapina por inibição de CYP1A2, com risco de sedação intensa e hipotensão.",
        es: "Fluvoxamina aumenta la exposición a olanzapina por inhibición de CYP1A2, con riesgo de sedación intensa e hipotensión."
      },
      conduta: {
        pt: "Monitorar sedação e hipotensão. Considerar dose menor de olanzapina.",
        es: "Monitorar sedación e hipotensión. Considerar dosis menor de olanzapina."
      }
    },

    "cafeina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina reduz o metabolismo da cafeína via CYP1A2, podendo causar tremor, ansiedade, taquicardia e insônia.",
        es: "Fluvoxamina reduce el metabolismo de cafeína vía CYP1A2, pudiendo causar temblor, ansiedad, taquicardia e insomnio."
      },
      conduta: {
        pt: "Orientar redução do consumo de cafeína (café, chá preto, energéticos) durante o tratamento.",
        es: "Orientar reducción del consumo de cafeína (café, té negro, energéticos) durante el tratamiento."
      }
    },

    "ropinirol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina pode aumentar significativamente os níveis do agonista dopaminérgico via CYP1A2.",
        es: "Fluvoxamina puede aumentar significativamente niveles del agonista dopaminérgico vía CYP1A2."
      },
      conduta: {
        pt: "Monitorar hipotensão ortostática, alucinações e discinesias.",
        es: "Monitorar hipotensión ortostática, alucinaciones y discinesias."
      }
    },

    "warfarina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina pode aumentar o INR e risco hemorrágico por inibição do metabolismo da varfarina.",
        es: "Fluvoxamina puede aumentar el INR y riesgo hemorrágico por inhibición del metabolismo de la warfarina."
      },
      conduta: {
        pt: "Monitorar INR com frequência após início ou alteração de dose. Ajustar anticoagulação se necessário.",
        es: "Monitorar INR con frecuencia tras inicio o cambio de dosis. Ajustar anticoagulación si es necesario."
      }
    },

    "alprazolam": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação por redução do metabolismo do alprazolam.",
        es: "Puede aumentar sedación por reducción del metabolismo del alprazolam."
      },
      conduta: {
        pt: "Monitorar sonolência excessiva e depressão respiratória. Considerar dose menor.",
        es: "Monitorar somnolencia excesiva y depresión respiratoria. Considerar dosis menor."
      }
    },

    "diazepam": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta níveis séricos de diazepam e risco de sedação excessiva.",
        es: "Aumenta niveles séricos de diazepam y riesgo de sedación excesiva."
      },
      conduta: {
        pt: "Monitorar sedação do SNC. Preferir benzodiazepínico não metabolizado por CYP (ex.: lorazepam).",
        es: "Monitorar sedación del SNC. Preferir benzodiacepina no metabolizada por CYP (ej.: lorazepam)."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sangramento por efeito plaquetário e interação metabólica.",
        es: "Aumenta riesgo de sangrado por efecto plaquetario e interacción metabólica."
      },
      conduta: {
        pt: "Monitorar sinais hemorrágicos e INR se anticoagulante oral.",
        es: "Monitorar signos hemorrágicos e INR si anticoagulante oral."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica por efeito aditivo.",
        es: "Puede precipitar síndrome serotoninérgico por efecto aditivo."
      },
      conduta: {
        pt: "Monitorar agitação, tremor, clônus, hiperreflexia, febre, diarreia e confusão.",
        es: "Monitorar agitación, temblor, clonus, hiperreflexia, fiebre, diarrea y confusión."
      }
    },

    "clonazepam": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode potencializar sedação por efeito depressor aditivo do SNC.",
        es: "Puede potenciar sedación por efecto depresor aditivo del SNC."
      },
      conduta: {
        pt: "Monitorar sonolência e orientar cautela ao dirigir.",
        es: "Monitorar somnolencia y orientar precaución al conducir."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Risco aumentado de sangramento gastrointestinal.",
        es: "Riesgo aumentado de sangrado gastrointestinal."
      },
      conduta: {
        pt: "Considerar gastroproteção com IBP em uso prolongado ou pacientes de risco.",
        es: "Considerar gastroprotección con IBP en uso prolongado o pacientes de riesgo."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Potencialização de sedação e prejuízo psicomotor.",
        es: "Potenciación de sedación y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar SNC e evitar múltiplos depressores.",
        es: "Monitorar SNC y evitar múltiples depresores."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRN 1 — Venlafaxina
     Cobertura: ~130 fármacos reais via ontologia
     Notas clínicas:
       • Tramadol: contraindicada (síndrome serotoninérgica + convulsões)
       • Hipérico: contraindicada (síndrome serotoninérgica)
       • $classe_imaos + linezolida + azul_de_metileno: contraindicadas
       • Efeito noradrenérgico → elevação pressórica dose-dependente
       • atomoxetina/anfetamina: alta (noradrenalina aditiva)
       • bupropiona: alta (convulsões + noradrenalina)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.4
  ───────────────────────────────────────────────────────────────── */
  "venlafaxina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta muito o risco de síndrome serotoninérgica grave, crise hipertensiva, hipertermia, rigidez, convulsões e morte.",
        es: "La asociación aumenta mucho el riesgo de síndrome serotoninérgico grave, crisis hipertensiva, hipertermia, rigidez, convulsiones y muerte."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias entre IMAO e venlafaxina.",
        es: "No asociar. Respetar intervalo mínimo de 14 días entre IMAO y venlafaxina."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida tem efeito IMAO reversível e pode precipitar síndrome serotoninérgica grave.",
        es: "Linezolid tiene efecto IMAO reversible y puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender venlafaxina e monitorar em ambiente hospitalar.",
        es: "Evitar asociación. Si es indispensable, suspender venlafaxina y monitorear en ambiente hospitalario."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno IV pode atuar como IMAO e causar síndrome serotoninérgica potencialmente fatal.",
        es: "Azul de metileno IV puede actuar como IMAO y causar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar. Preferir analgésico não serotoninérgico.",
        es: "Evitar. Preferir analgésico no serotoninérgico."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico/Erva de São João aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico/Hierba de San Juan aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A combinação com outros serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "La combinación con otros serotoninérgicos aumenta riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar agitação, tremor, clônus, hiperreflexia, febre, diarreia e confusão.",
        es: "Monitorear agitación, temblor, clonus, hiperreflexia, fiebre, diarrea y confusión."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito noradrenérgico aditivo pode aumentar pressão arterial, frequência cardíaca, ansiedade e insônia.",
        es: "Efecto noradrenérgico aditivo puede aumentar presión arterial, frecuencia cardíaca, ansiedad e insomnio."
      },
      conduta: {
        pt: "Monitorar PA, FC, agitação e insônia.",
        es: "Monitorear PA, FC, agitación e insomnio."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco de hipertensão, taquicardia, agitação e toxicidade serotoninérgica/noradrenérgica.",
        es: "Riesgo de hipertensión, taquicardia, agitación y toxicidad serotoninérgica/noradrenérgica."
      },
      conduta: {
        pt: "Evitar doses altas e monitorar PA, FC e comportamento.",
        es: "Evitar dosis altas y monitorear PA, FC y comportamiento."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e efeitos noradrenérgicos como hipertensão e ansiedade.",
        es: "Puede aumentar riesgo de convulsiones y efectos noradrenérgicos como hipertensión y ansiedad."
      },
      conduta: {
        pt: "Usar cautela em epilepsia, TCE, álcool ou transtorno alimentar. Monitorar PA.",
        es: "Usar cautela en epilepsia, TCE, alcohol o trastorno alimentario. Monitorear PA."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões, sedação e efeitos cardiovasculares em pacientes vulneráveis.",
        es: "Puede aumentar riesgo de convulsiones, sedación y efectos cardiovasculares en pacientes vulnerables."
      },
      conduta: {
        pt: "Monitorar sedação, PA, convulsões e níveis de clozapina se disponíveis.",
        es: "Monitorear sedación, PA, convulsiones y niveles de clozapina si están disponibles."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação aumenta risco de sangramento por efeito plaquetário aditivo.",
        es: "La asociación aumenta riesgo de sangrado por efecto plaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar sangramentos; se varfarina, monitorar INR.",
        es: "Monitorear sangrados; si warfarina, monitorear INR."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica, especialmente em doses altas ou automedicação.",
        es: "Puede precipitar síndrome serotoninérgico, especialmente en dosis altas o automedicación."
      },
      conduta: {
        pt: "Evitar xaropes com dextrometorfano.",
        es: "Evitar jarabes con dextrometorfano."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia, febre e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia, fiebre y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico, especialmente com múltiplos fármacos serotoninérgicos.",
        es: "Puede aumentar riesgo serotoninérgico, especialmente con múltiples fármacos serotoninérgicos."
      },
      conduta: {
        pt: "Orientar sinais de alerta e monitorar se uso combinado.",
        es: "Orientar signos de alerta y monitorear si se usa combinado."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "ISRN podem aumentar risco de sangramento gastrointestinal quando associados a AINEs.",
        es: "Los ISRN pueden aumentar riesgo de sangrado gastrointestinal cuando se asocian con AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado e considerar gastroproteção em pacientes de risco.",
        es: "Evitar uso prolongado y considerar gastroprotección en pacientes de riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento por efeito antiplaquetário aditivo.",
        es: "Puede aumentar riesgo de sangrado por efecto antiplaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar melena, epistaxe, equimoses e queda de hemoglobina.",
        es: "Monitorear melena, epistaxis, equimosis y caída de hemoglobina."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Venlafaxina pode elevar pressão arterial de forma dose-dependente e dificultar o controle pressórico.",
        es: "Venlafaxina puede elevar presión arterial de forma dosis-dependiente y dificultar el control tensional."
      },
      conduta: {
        pt: "Monitorar PA antes e durante o tratamento, especialmente acima de 150 mg/dia.",
        es: "Monitorear PA antes y durante el tratamiento, especialmente por encima de 150 mg/día."
      }
    },

    "$classe_qt": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Venlafaxina pode contribuir para prolongamento de QT em doses altas, intoxicação ou pacientes predispostos.",
        es: "Venlafaxina puede contribuir a prolongación del QT en dosis altas, intoxicación o pacientes predispuestos."
      },
      conduta: {
        pt: "Considerar ECG em alto risco, hipocalemia, cardiopatia ou combinações pró-arrítmicas.",
        es: "Considerar ECG en alto riesgo, hipopotasemia, cardiopatía o combinaciones proarrítmicas."
      }
    },

    "metoprolol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Venlafaxina pode elevar pressão arterial e reduzir o benefício percebido do anti-hipertensivo; pode haver leve inibição do CYP2D6.",
        es: "Venlafaxina puede elevar presión arterial y reducir el beneficio percibido del antihipertensivo; puede haber leve inhibición del CYP2D6."
      },
      conduta: {
        pt: "Monitorar PA e FC, principalmente em doses altas de venlafaxina.",
        es: "Monitorear PA y FC, principalmente en dosis altas de venlafaxina."
      }
    },

    "metilfenidato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar PA, FC, ansiedade, insônia e risco de ativação.",
        es: "Puede aumentar PA, FC, ansiedad, insomnio y riesgo de activación."
      },
      conduta: {
        pt: "Monitorar PA/FC e sintomas ansiosos.",
        es: "Monitorear PA/FC y síntomas ansiosos."
      }
    },

    "haloperidol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode somar risco de QT, sedação e sintomas extrapiramidais em pacientes predispostos.",
        es: "Puede sumar riesgo de QT, sedación y síntomas extrapiramidales en pacientes predispuestos."
      },
      conduta: {
        pt: "Monitorar ECG se alto risco e sintomas extrapiramidais.",
        es: "Monitorear ECG si alto riesgo y síntomas extrapiramidales."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, quedas e prejuízo psicomotor quando combinada com depressores do SNC.",
        es: "Puede aumentar somnolencia, caídas y deterioro psicomotor cuando se combina con depresores del SNC."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e orientar cautela ao dirigir.",
        es: "Evitar múltiples depresores y orientar precaución al conducir."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRN 2 — Desvenlafaxina
     Cobertura: ~120 fármacos reais via ontologia
     Notas clínicas:
       • Metabólito ativo da venlafaxina; perfil semelhante, mas menor
         inibição de CYP2D6 → sem interações CYP2D6 de grau contraindicado
       • QT: leve (scoreClinico 2) — diferença importante em relação a citalopram
       • Efeito noradrenérgico: moderado (menor que venlafaxina em altas doses)
       • atomoxetina, anfetamina, bupropiona: alta (via noradrenalina)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.4
  ───────────────────────────────────────────────────────────────── */
  "desvenlafaxina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave e crise hipertensiva.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico grave y crisis hipertensiva."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias.",
        es: "No asociar. Respetar intervalo mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida pode precipitar síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Linezolid puede precipitar síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender desvenlafaxina e monitorar.",
        es: "Evitar asociación. Si es indispensable, suspender desvenlafaxina y monitorear."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode atuar como IMAO e precipitar síndrome serotoninérgica grave.",
        es: "Puede actuar como IMAO y precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco aumentado de síndrome serotoninérgica e convulsões.",
        es: "Mayor riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A combinação com serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "La combinación con serotoninérgicos aumenta riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre, diarreia, agitação e confusão.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre, diarrea, agitación y confusión."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito noradrenérgico aditivo pode causar hipertensão, taquicardia, ansiedade e insônia.",
        es: "Efecto noradrenérgico aditivo puede causar hipertensión, taquicardia, ansiedad e insomnio."
      },
      conduta: {
        pt: "Monitorar PA, FC e sintomas de ativação.",
        es: "Monitorear PA, FC y síntomas de activación."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco de hipertensão, taquicardia, agitação e toxicidade serotoninérgica/noradrenérgica.",
        es: "Riesgo de hipertensión, taquicardia, agitación y toxicidad serotoninérgica/noradrenérgica."
      },
      conduta: {
        pt: "Evitar altas doses e monitorar PA/FC.",
        es: "Evitar dosis altas y monitorear PA/FC."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e hipertensão.",
        es: "Puede aumentar riesgo de convulsiones e hipertensión."
      },
      conduta: {
        pt: "Usar cautela em pacientes com risco convulsivo e monitorar PA.",
        es: "Usar cautela en pacientes con riesgo convulsivo y monitorear PA."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e sedação em combinação com fármacos que reduzem limiar convulsivo.",
        es: "Puede aumentar riesgo de convulsiones y sedación en combinación con fármacos que reducen umbral convulsivo."
      },
      conduta: {
        pt: "Monitorar convulsões, sedação e estado mental.",
        es: "Monitorear convulsiones, sedación y estado mental."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sangramento por efeito plaquetário aditivo.",
        es: "Puede aumentar riesgo de sangrado por efecto plaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar sangramento; se varfarina, monitorar INR.",
        es: "Monitorear sangrado; si warfarina, monitorear INR."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar automedicação com xaropes contendo dextrometorfano.",
        es: "Evitar automedicación con jarabes que contengan dextrometorfano."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e risco serotoninérgico.",
        es: "Puede aumentar neurotoxicidad y riesgo serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de síndrome serotoninérgica em combinações múltiplas.",
        es: "Puede aumentar riesgo de síndrome serotoninérgico en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta.",
        es: "Orientar signos de alerta."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento gastrointestinal.",
        es: "Puede aumentar riesgo de sangrado gastrointestinal."
      },
      conduta: {
        pt: "Evitar uso prolongado e considerar gastroproteção em alto risco.",
        es: "Evitar uso prolongado y considerar gastroprotección en alto riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Aumenta risco de sangramentos por efeito antiplaquetário aditivo.",
        es: "Aumenta riesgo de sangrados por efecto antiplaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar epistaxe, equimoses, melena e anemia.",
        es: "Monitorear epistaxis, equimosis, melena y anemia."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Desvenlafaxina pode aumentar pressão arterial e dificultar controle pressórico em alguns pacientes.",
        es: "Desvenlafaxina puede aumentar presión arterial y dificultar control tensional en algunos pacientes."
      },
      conduta: {
        pt: "Monitorar PA antes e durante o tratamento.",
        es: "Monitorear PA antes y durante el tratamiento."
      }
    },

    "metilfenidato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar PA, FC, ansiedade e insônia.",
        es: "Puede aumentar PA, FC, ansiedad e insomnio."
      },
      conduta: {
        pt: "Monitorar pressão arterial e sintomas ansiosos.",
        es: "Monitorear presión arterial y síntomas ansiosos."
      }
    },

    "$classe_qt": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Risco de QT é geralmente baixo, mas pode ser relevante em intoxicação, hipocalemia ou múltiplos fármacos pró-arrítmicos.",
        es: "El riesgo de QT es generalmente bajo, pero puede ser relevante en intoxicación, hipopotasemia o múltiples fármacos proarrítmicos."
      },
      conduta: {
        pt: "Considerar ECG em pacientes de alto risco.",
        es: "Considerar ECG en pacientes de alto riesgo."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, quedas e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Evitar múltiplos depressores do SNC.",
        es: "Evitar múltiples depresores del SNC."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRN 3 — Duloxetina
     Cobertura: ~130 fármacos reais via ontologia
     Notas clínicas:
       • CYP1A2: fluvoxamina e ciprofloxacino elevam níveis → contraindicada/alta
       • Álcool: hepatotoxicidade aditiva — alta (scoreClinico 4)
       • Efeito noradrenérgico: elevação de PA, atomoxetina e anfetamina: alta
       • 5 contraindicadas: IMAOs, linezolida, azul_de_metileno, tramadol, hipérico + fluvoxamina
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.5
  ───────────────────────────────────────────────────────────────── */
  "duloxetina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta significativamente o risco de síndrome serotoninérgica grave, hipertermia, instabilidade autonômica, convulsões e morte.",
        es: "La asociación aumenta significativamente el riesgo de síndrome serotoninérgico grave, hipertermia, inestabilidad autonómica, convulsiones y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica potencialmente fatal.",
        es: "Puede precipitar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Atividade IMAO associada a alto risco de síndrome serotoninérgica.",
        es: "Actividad IMAO asociada a alto riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "fluvoxamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluvoxamina inibe CYP1A2 e pode elevar intensamente os níveis séricos de duloxetina, aumentando risco de toxicidade grave.",
        es: "Fluvoxamina inhibe CYP1A2 y puede elevar intensamente los niveles séricos de duloxetina, aumentando riesgo de toxicidad grave."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode desencadear síndrome serotoninérgica quando associada a outros serotoninérgicos.",
        es: "Puede desencadenar síndrome serotoninérgico cuando se asocia con otros serotoninérgicos."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre e agitação.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre y agitación."
      }
    },

    "ciprofloxacino": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Ciprofloxacino inibe CYP1A2 e pode aumentar significativamente os níveis de duloxetina, elevando risco de efeitos adversos.",
        es: "Ciprofloxacino inhibe CYP1A2 y puede aumentar significativamente los niveles de duloxetina, elevando riesgo de efectos adversos."
      },
      conduta: {
        pt: "Evitar associação ou monitorar toxicidade. Considerar antibiótico alternativo.",
        es: "Evitar asociación o monitorizar toxicidad. Considerar antibiótico alternativo."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco hemorrágico por efeito plaquetário aditivo.",
        es: "Puede aumentar riesgo hemorrágico por efecto plaquetario aditivo."
      },
      conduta: {
        pt: "Monitorar sangramentos. Se varfarina, monitorar INR.",
        es: "Monitorear sangrados. Si warfarina, monitorear INR."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização noradrenérgica com risco de hipertensão e taquicardia.",
        es: "Potenciación noradrenérgica con riesgo de hipertensión y taquicardia."
      },
      conduta: {
        pt: "Monitorar PA e FC.",
        es: "Monitorear PA y FC."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de hipertensão, taquicardia e toxicidade serotoninérgica/noradrenérgica.",
        es: "Aumenta riesgo de hipertensión, taquicardia y toxicidad serotoninérgica/noradrenérgica."
      },
      conduta: {
        pt: "Evitar altas doses e monitorar PA e FC.",
        es: "Evitar dosis altas y monitorear PA y FC."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e hipertensão.",
        es: "Puede aumentar riesgo de convulsiones e hipertensión."
      },
      conduta: {
        pt: "Usar cautela em epilepsia, TCE ou transtorno alimentar. Monitorar PA.",
        es: "Usar cautela en epilepsia, TCE o trastorno alimentario. Monitorear PA."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar automedicação com xaropes contendo dextrometorfano.",
        es: "Evitar automedicación con jarabes que contengan dextrometorfano."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Aumenta riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia y litemia si está indicado."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de hepatotoxicidade e depressão do SNC.",
        es: "Aumenta riesgo de hepatotoxicidad y depresión del SNC."
      },
      conduta: {
        pt: "Evitar consumo de álcool durante o tratamento.",
        es: "Evitar consumo de alcohol durante el tratamiento."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico em combinações múltiplas.",
        es: "Puede aumentar riesgo serotoninérgico en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta serotoninérgicos.",
        es: "Orientar signos de alerta serotoninérgicos."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Aumenta risco de sangramento gastrointestinal.",
        es: "Aumenta riesgo de sangrado gastrointestinal."
      },
      conduta: {
        pt: "Evitar uso prolongado. Considerar gastroproteção com IBP em pacientes de risco.",
        es: "Evitar uso prolongado. Considerar gastroprotección con IBP en pacientes de riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Aumenta risco de sangramento por efeito antiplaquetário.",
        es: "Aumenta riesgo de sangrado por efecto antiplaquetario."
      },
      conduta: {
        pt: "Monitorar sinais hemorrágicos.",
        es: "Monitorear signos hemorrágicos."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode elevar pressão arterial e reduzir controle pressórico.",
        es: "Puede elevar presión arterial y reducir control tensional."
      },
      conduta: {
        pt: "Monitorar PA periodicamente durante o tratamento.",
        es: "Monitorar PA periódicamente durante el tratamiento."
      }
    },

    "metilfenidato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar ansiedade, insônia e hipertensão.",
        es: "Puede aumentar ansiedad, insomnio e hipertensión."
      },
      conduta: {
        pt: "Monitorar sintomas cardiovasculares.",
        es: "Monitorear síntomas cardiovasculares."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar SNC e orientar cautela ao dirigir.",
        es: "Monitorear SNC y orientar precaución al conducir."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRN 4 — Milnaciprano
     Cobertura: ~100 fármacos reais via ontologia
     Notas clínicas:
       • Perfil ISRN com predomínio noradrenérgico (relação NE:5-HT ~3:1)
       • Sem inibição significativa de CYP → poucas interações metabólicas
       • Tramadol: contraindicada (síndrome serotoninérgica + convulsões)
       • atomoxetina, anfetamina, bupropiona: alta (noradrenalina aditiva)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.5
  ───────────────────────────────────────────────────────────────── */
  "milnaciprano": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica e crise hipertensiva.",
        es: "Alto riesgo de síndrome serotoninérgico y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica grave.",
        es: "Puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica por atividade IMAO.",
        es: "Alto riesgo de síndrome serotoninérgico por actividad IMAO."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica e convulsões.",
        es: "Alto riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica.",
        es: "Aumenta riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre e agitação.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre y agitación."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco hemorrágico por efeito plaquetário.",
        es: "Puede aumentar riesgo hemorrágico por efecto plaquetario."
      },
      conduta: {
        pt: "Monitorar sangramentos. Se varfarina, monitorar INR.",
        es: "Monitorear sangrados. Si warfarina, monitorear INR."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização noradrenérgica com risco de hipertensão e taquicardia.",
        es: "Potenciación noradrenérgica con riesgo de hipertensión y taquicardia."
      },
      conduta: {
        pt: "Monitorar PA e FC.",
        es: "Monitorear PA y FC."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco aumentado de hipertensão, taquicardia e toxicidade serotoninérgica/noradrenérgica.",
        es: "Riesgo aumentado de hipertensión, taquicardia y toxicidad serotoninérgica/noradrenérgica."
      },
      conduta: {
        pt: "Evitar altas doses e monitorar PA e FC.",
        es: "Evitar dosis altas y monitorear PA y FC."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões.",
        es: "Puede aumentar riesgo de convulsiones."
      },
      conduta: {
        pt: "Usar cautela em pacientes predispostos a convulsões.",
        es: "Usar cautela en pacientes predispuestos a convulsiones."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sinais neurológicos e litemia se indicado.",
        es: "Monitorear signos neurológicos y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico.",
        es: "Puede aumentar riesgo serotoninérgico."
      },
      conduta: {
        pt: "Orientar sinais de alerta serotoninérgicos.",
        es: "Orientar signos de alerta serotoninérgicos."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Aumenta risco de sangramento gastrointestinal.",
        es: "Aumenta riesgo de sangrado gastrointestinal."
      },
      conduta: {
        pt: "Considerar gastroproteção em uso prolongado ou pacientes de risco.",
        es: "Considerar gastroprotección en uso prolongado o pacientes de riesgo."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Aumenta risco de sangramento por efeito antiplaquetário.",
        es: "Aumenta riesgo de sangrado por efecto antiplaquetario."
      },
      conduta: {
        pt: "Monitorar sinais hemorrágicos.",
        es: "Monitorear signos hemorrágicos."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir controle pressórico por aumento noradrenérgico.",
        es: "Puede reducir control tensional por aumento noradrenérgico."
      },
      conduta: {
        pt: "Monitorar PA antes e durante o tratamento.",
        es: "Monitorear PA antes y durante el tratamiento."
      }
    },

    "metilfenidato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar ansiedade, hipertensão e insônia.",
        es: "Puede aumentar ansiedad, hipertensión e insomnio."
      },
      conduta: {
        pt: "Monitorar sintomas cardiovasculares.",
        es: "Monitorear síntomas cardiovasculares."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar SNC e orientar cautela ao dirigir.",
        es: "Monitorear SNC y orientar precaución al conducir."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ISRN 5 — Levomilnaciprano
     Cobertura: ~95 fármacos reais via ontologia
     Notas clínicas:
       • Enantiômero ativo do milnaciprano; predomínio noradrenérgico ainda maior
       • Sem inibição significativa de CYP → poucas interações metabólicas
       • atomoxetina, anfetamina, bupropiona: alta (noradrenalina aditiva)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.5
  ───────────────────────────────────────────────────────────────── */
  "levomilnaciprano": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta significativamente o risco de síndrome serotoninérgica grave, hipertermia, instabilidade autonômica e morte.",
        es: "La asociación aumenta significativamente el riesgo de síndrome serotoninérgico grave, hipertermia, inestabilidad autonómica y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica potencialmente fatal.",
        es: "Puede precipitar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Atividade IMAO associada a alto risco de síndrome serotoninérgica.",
        es: "Actividad IMAO asociada a alto riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode desencadear síndrome serotoninérgica quando associada a outros serotoninérgicos.",
        es: "Puede desencadenar síndrome serotoninérgico cuando se asocia con otros serotoninérgicos."
      },
      conduta: {
        pt: "Monitorar hiperreflexia, clônus, febre, tremor e confusão.",
        es: "Monitorear hiperreflexia, clonus, fiebre, temblor y confusión."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco hemorrágico por efeito serotoninérgico plaquetário.",
        es: "Aumenta riesgo hemorrágico por efecto serotoninérgico plaquetario."
      },
      conduta: {
        pt: "Monitorar sangramentos. Se varfarina, monitorar INR.",
        es: "Monitorear sangrados. Si warfarina, monitorear INR."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização noradrenérgica com hipertensão e taquicardia.",
        es: "Potenciación noradrenérgica con hipertensión y taquicardia."
      },
      conduta: {
        pt: "Monitorar PA e FC.",
        es: "Monitorear PA y FC."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode causar hipertensão significativa e agitação.",
        es: "Puede causar hipertensión significativa y agitación."
      },
      conduta: {
        pt: "Monitorar PA, FC e comportamento.",
        es: "Monitorear PA, FC y comportamiento."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de convulsões.",
        es: "Aumenta riesgo de convulsiones."
      },
      conduta: {
        pt: "Evitar em pacientes com risco convulsivo.",
        es: "Evitar en pacientes con riesgo convulsivo."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sinais neurológicos e litemia se indicado.",
        es: "Monitorear signos neurológicos y litemia si está indicado."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento gastrointestinal.",
        es: "Puede aumentar riesgo de sangrado gastrointestinal."
      },
      conduta: {
        pt: "Considerar gastroproteção com IBP em uso prolongado.",
        es: "Considerar gastroprotección con IBP en uso prolongado."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir resposta anti-hipertensiva e aumentar PA.",
        es: "Puede reducir respuesta antihipertensiva y aumentar PA."
      },
      conduta: {
        pt: "Monitorar pressão arterial.",
        es: "Monitorear presión arterial."
      }
    },

    "metilfenidato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar ansiedade, insônia e hipertensão.",
        es: "Puede aumentar ansiedad, insomnio e hipertensión."
      },
      conduta: {
        pt: "Monitorar sintomas cardiovasculares.",
        es: "Monitorear síntomas cardiovasculares."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar SNC e orientar cautela ao dirigir.",
        es: "Monitorear SNC y orientar precaución al conducir."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 1 — Amitriptilina
     Cobertura: ~145 fármacos reais via ontologia
     Notas clínicas:
       • Tricíclico com maior perfil de interações: QT, anticolinérgico,
         serotoninérgico, depressor SNC, anti-hipertensivos
       • $classe_qt: CONTRAINDICADA (scoreClinico 5) — amitriptilina prolonga QT
       • amiodarona + sotalol + ziprasidona: contraindicadas individualmente
       • $classe_anticolinergicos + biperideno + oxibutinina: alta (delirium/retenção)
       • $classe_benzodiazepinicos + $classe_opioides: alta (depressão SNC)
       • carbamazepina + fenitoína: alta (interação bidirecional metabólica)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.5
  ───────────────────────────────────────────────────────────────── */
  "amitriptilina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode provocar síndrome serotoninérgica, crise hipertensiva, hipertermia e morte.",
        es: "La asociación puede provocar síndrome serotoninérgico, crisis hipertensiva, hipertermia y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "$classe_qt": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Amitriptilina prolonga QT e pode aumentar risco de torsades de pointes quando associada a outros fármacos pró-arrítmicos.",
        es: "Amitriptilina prolonga QT y puede aumentar riesgo de torsades de pointes cuando se asocia a otros fármacos proarrítmicos."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, solicitar ECG e corrigir eletrólitos (K+, Mg2+).",
        es: "Evitar asociación. Si es inevitable, solicitar ECG y corregir electrolitos (K+, Mg2+)."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de arritmias ventriculares por prolongamento aditivo do QT.",
        es: "Alto riesgo de arritmias ventriculares por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de torsades de pointes por prolongamento aditivo do QT.",
        es: "Aumenta significativamente riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alto risco de torsades de pointes por prolongamento aditivo do QT.",
        es: "Alto riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Alto riesgo de síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de QT prolongado e arritmias ventriculares por efeito aditivo.",
        es: "Puede aumentar riesgo de QT prolongado y arritmias ventriculares por efecto aditivo."
      },
      conduta: {
        pt: "Monitorar ECG e corrigir eletrólitos em pacientes de risco.",
        es: "Monitorear ECG y corregir electrolitos en pacientes de riesgo."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de convulsiones y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sintomas neurológicos e serotoninérgicos.",
        es: "Monitorear síntomas neurológicos y serotoninérgicos."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre e agitação.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre y agitación."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de retenção urinária, íleo paralítico, delirium, constipação e visão borrada.",
        es: "Potenciación de retención urinaria, íleo paralítico, delirium, constipación y visión borrosa."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis. Monitorar delirium e retenção urinária.",
        es: "Evitar en ancianos y pacientes frágiles. Monitorear delirium y retención urinaria."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante de efeitos anticolinérgicos.",
        es: "Potenciación importante de efectos anticolinérgicos."
      },
      conduta: {
        pt: "Monitorar delirium e retenção urinária.",
        es: "Monitorear delirium y retención urinaria."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de delirium, retenção urinária e constipação.",
        es: "Aumenta riesgo de delirium, retención urinaria y constipación."
      },
      conduta: {
        pt: "Evitar em idosos. Preferir anticolinérgico mais seletivo se necessário.",
        es: "Evitar en ancianos. Preferir anticolinérgico más selectivo si es necesario."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir níveis da amitriptilina por indução de CYP3A4 e aumentar neurotoxicidade bidirecional.",
        es: "Puede reducir niveles de amitriptilina por inducción de CYP3A4 y aumentar neurotoxicidad bidireccional."
      },
      conduta: {
        pt: "Monitorar resposta clínica e níveis séricos se disponíveis.",
        es: "Monitorear respuesta clínica y niveles séricos si están disponibles."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Interação bidirecional com potencial toxicidade neurológica — fenitoína pode reduzir amitriptilina e amitriptilina pode alterar fenitoína.",
        es: "Interacción bidireccional con potencial toxicidad neurológica — fenitoína puede reducir amitriptilina y amitriptilina puede alterar fenitoína."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína e resposta clínica.",
        es: "Monitorear niveles séricos de fenitoína y respuesta clínica."
      }
    },

    "clonidina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Amitriptilina pode reduzir o efeito anti-hipertensivo da clonidina por antagonismo noradrenérgico.",
        es: "Amitriptilina puede reducir el efecto antihipertensivo de clonidina por antagonismo noradrenérgico."
      },
      conduta: {
        pt: "Monitorar PA. Considerar alternativa anti-hipertensiva.",
        es: "Monitorear PA. Considerar alternativa antihipertensiva."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa depressão do SNC, risco de sedação excessiva e overdose.",
        es: "Potencia depresión del SNC, riesgo de sedación excesiva y sobredosis."
      },
      conduta: {
        pt: "Evitar consumo de álcool durante o tratamento.",
        es: "Evitar consumo de alcohol durante el tratamiento."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, quedas, depressão respiratória e risco de overdose.",
        es: "Puede aumentar sedación, caídas, depresión respiratoria y riesgo de sobredosis."
      },
      conduta: {
        pt: "Monitorar SNC, função respiratória e quedas. Evitar em idosos.",
        es: "Monitorear SNC, función respiratoria y caídas. Evitar en ancianos."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação profunda e depressão respiratória.",
        es: "Aumenta riesgo de sedación profunda y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, consciência e saturação. Evitar em idosos ou fragilizados.",
        es: "Monitorear respiración, conciencia y saturación. Evitar en ancianos o fragilizados."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Potencialização de sonolência e prejuízo psicomotor.",
        es: "Potenciación de somnolencia y deterioro psicomotor."
      },
      conduta: {
        pt: "Orientar cautela ao dirigir e evitar múltiplos depressores do SNC.",
        es: "Orientar precaución al conducir y evitar múltiples depresores del SNC."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 2 — Nortriptilina
     Cobertura: ~130 fármacos reais via ontologia
     Notas clínicas:
       • Metabólito ativo da amitriptilina; perfil ATC mais seletivo
       • $classe_qt: ALTA (scoreClinico 4) — menor risco QT que amitriptilina/imipramina
       • amiodarona + sotalol + ziprasidona: contraindicadas individualmente
       • fluoxetina + paroxetina: alta via CYP2D6 (elevam níveis de nortriptilina)
       • $classe_anticolinergicos + biperideno + oxibutinina: alta (delirium)
       • $classe_benzodiazepinicos + $classe_opioides + alcool: alta (depressão SNC)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.6
  ───────────────────────────────────────────────────────────────── */
  "nortriptilina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode desencadear síndrome serotoninérgica, hipertermia, convulsões e crise hipertensiva potencialmente fatal.",
        es: "La asociación puede desencadenar síndrome serotoninérgico, hipertermia, convulsiones y crisis hipertensiva potencialmente fatal."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de torsades de pointes por prolongamento aditivo do QT.",
        es: "Aumenta significativamente el riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de arritmias ventriculares graves.",
        es: "Alto riesgo de arritmias ventriculares graves."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de torsades de pointes por efeito aditivo no QT.",
        es: "Alto riesgo de torsades de pointes por efecto aditivo en el QT."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Nortriptilina pode prolongar QT e aumentar risco de arritmias ventriculares quando associada a outros fármacos pró-arrítmicos.",
        es: "Nortriptilina puede prolongar QT y aumentar riesgo de arritmias ventriculares cuando se asocia a otros fármacos proarrítmicos."
      },
      conduta: {
        pt: "Monitorar ECG e corrigir K+/Mg2+ em pacientes de risco.",
        es: "Monitorear ECG y corregir K+/Mg2+ en pacientes de riesgo."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização do risco de QT prolongado.",
        es: "Potenciación del riesgo de QT prolongado."
      },
      conduta: {
        pt: "Monitorar ECG se uso combinado.",
        es: "Monitorear ECG si uso combinado."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e aumenta os níveis séricos de nortriptilina, podendo causar toxicidade.",
        es: "Fluoxetina inhibe CYP2D6 y aumenta los niveles séricos de nortriptilina, pudiendo causar toxicidad."
      },
      conduta: {
        pt: "Monitorar toxicidade tricíclica (sedação, hipotensão, boca seca, retenção). Considerar redução de dose.",
        es: "Monitorear toxicidad tricíclica (sedación, hipotensión, boca seca, retención). Considerar reducción de dosis."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e pode elevar significativamente os níveis de nortriptilina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y puede elevar significativamente los niveles de nortriptilina."
      },
      conduta: {
        pt: "Monitorar sedação, hipotensão e toxicidade anticolinérgica.",
        es: "Monitorear sedación, hipotensión y toxicidad anticolinérgica."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de convulsões e síndrome serotoninérgica.",
        es: "Aumenta riesgo de convulsiones y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Usar com extrema cautela. Preferir analgésico não serotoninérgico.",
        es: "Usar con extrema precaución. Preferir analgésico no serotoninérgico."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar hiperreflexia, clônus, tremor, febre e agitação.",
        es: "Monitorear hiperreflexia, clonus, temblor, fiebre y agitación."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de retenção urinária, delirium e constipação.",
        es: "Potenciación de retención urinaria, delirium y estreñimiento."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis.",
        es: "Evitar en ancianos y pacientes frágiles."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de delirium e retenção urinária.",
        es: "Aumenta riesgo de delirium y retención urinaria."
      },
      conduta: {
        pt: "Monitorar estado mental e diurese.",
        es: "Monitorear estado mental y diuresis."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização dos efeitos anticolinérgicos.",
        es: "Potenciación de los efectos anticolinérgicos."
      },
      conduta: {
        pt: "Evitar em idosos. Preferir anticolinérgico mais seletivo se necessário.",
        es: "Evitar en ancianos. Preferir anticolinérgico más selectivo si es necesario."
      }
    },

    "clonidina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir o efeito anti-hipertensivo da clonidina por antagonismo noradrenérgico.",
        es: "Puede reducir el efecto antihipertensivo de clonidina por antagonismo noradrenérgico."
      },
      conduta: {
        pt: "Monitorar PA. Considerar alternativa anti-hipertensiva.",
        es: "Monitorear PA. Considerar alternativa antihipertensiva."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir níveis séricos da nortriptilina por indução enzimática.",
        es: "Puede reducir niveles séricos de nortriptilina por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar resposta clínica e considerar ajuste de dose.",
        es: "Monitorear respuesta clínica y considerar ajuste de dosis."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Interação bidirecional com potencial neurotoxicidade.",
        es: "Interacción bidireccional con potencial neurotoxicidad."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína e resposta clínica.",
        es: "Monitorear niveles séricos de fenitoína y respuesta clínica."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação e risco de quedas.",
        es: "Potenciación de la sedación y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar SNC, função respiratória e quedas. Evitar em idosos.",
        es: "Monitorear SNC, función respiratoria y caídas. Evitar en ancianos."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória.",
        es: "Aumenta riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração e consciência.",
        es: "Monitorear respiración y conciencia."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sedação e risco de overdose.",
        es: "Potencia sedación y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar consumo de álcool.",
        es: "Evitar consumo de alcohol."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 3 — Imipramina
     Cobertura: ~140 fármacos reais via ontologia
     Notas clínicas:
       • TCA fundador da classe; maior potencial de prolongamento de QT
         (scoreClinico 5 para $classe_qt — análogo à amitriptilina)
       • amiodarona + sotalol + ziprasidona: contraindicadas individualmente
       • linezolida: contraindicada (síndrome serotoninérgica)
       • fluoxetina + paroxetina: alta via CYP2D6 (elevam níveis de imipramina)
       • $classe_anticolinergicos + biperideno + oxibutinina: alta
       • $classe_benzodiazepinicos + $classe_opioides + alcool: alta
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.6
  ───────────────────────────────────────────────────────────────── */
  "imipramina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode provocar síndrome serotoninérgica grave e crise hipertensiva.",
        es: "La asociación puede provocar síndrome serotoninérgico grave y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "$classe_qt": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Imipramina apresenta potencial significativo de prolongamento do QT; a associação com outros fármacos pró-arrítmicos aumenta risco de torsades de pointes.",
        es: "Imipramina presenta potencial significativo de prolongación del QT; la asociación con otros fármacos proarrítmicos aumenta riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Evitar associações pró-arrítmicas. Solicitar ECG e corrigir eletrólitos se uso inevitável.",
        es: "Evitar asociaciones proarrítmicas. Solicitar ECG y corregir electrolitos si el uso es inevitable."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de torsades de pointes por prolongamento aditivo do QT.",
        es: "Alto riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de arritmias ventriculares graves.",
        es: "Aumenta significativamente riesgo de arritmias ventriculares graves."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização importante do risco de QT prolongado e arritmias ventriculares.",
        es: "Potenciación importante del riesgo de QT prolongado y arritmias ventriculares."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Alto riesgo de síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco aumentado de arritmias ventriculares por prolongamento aditivo do QT.",
        es: "Riesgo aumentado de arritmias ventriculares por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Monitorar ECG.",
        es: "Monitorear ECG."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de convulsiones y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sintomas neurológicos e serotoninérgicos.",
        es: "Monitorear síntomas neurológicos y serotoninérgicos."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e pode aumentar os níveis séricos da imipramina, causando toxicidade.",
        es: "Fluoxetina inhibe CYP2D6 y puede aumentar los niveles séricos de imipramina, causando toxicidad."
      },
      conduta: {
        pt: "Monitorar toxicidade tricíclica. Considerar redução de dose.",
        es: "Monitorear toxicidad tricíclica. Considerar reducción de dosis."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e pode elevar expressivamente a exposição à imipramina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y puede elevar expresivamente la exposición a imipramina."
      },
      conduta: {
        pt: "Considerar redução de dose da imipramina e monitorar toxicidade.",
        es: "Considerar reducción de dosis de imipramina y monitorear toxicidad."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de delirium, retenção urinária e íleo paralítico.",
        es: "Potenciación de delirium, retención urinaria e íleo paralítico."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis.",
        es: "Evitar en ancianos y pacientes frágiles."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de toxicidade anticolinérgica.",
        es: "Aumenta riesgo de toxicidad anticolinérgica."
      },
      conduta: {
        pt: "Monitorar delirium e diurese.",
        es: "Monitorear delirium y diuresis."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização dos efeitos anticolinérgicos.",
        es: "Potenciación de efectos anticolinérgicos."
      },
      conduta: {
        pt: "Evitar associação prolongada, especialmente em idosos.",
        es: "Evitar asociación prolongada, especialmente en ancianos."
      }
    },

    "clonidina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode antagonizar o efeito anti-hipertensivo da clonidina.",
        es: "Puede antagonizar el efecto antihipertensivo de clonidina."
      },
      conduta: {
        pt: "Monitorar PA. Considerar alternativa anti-hipertensiva.",
        es: "Monitorear PA. Considerar alternativa antihipertensiva."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Reduz níveis séricos da imipramina por indução de CYP3A4.",
        es: "Reduce niveles séricos de imipramina por inducción de CYP3A4."
      },
      conduta: {
        pt: "Monitorar resposta clínica e ajustar dose se necessário.",
        es: "Monitorear respuesta clínica y ajustar dosis si es necesario."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar toxicidade neurológica por interação bidirecional.",
        es: "Puede aumentar toxicidad neurológica por interacción bidireccional."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína e resposta clínica.",
        es: "Monitorear niveles séricos de fenitoína y respuesta clínica."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação.",
        es: "Potenciación de la sedación."
      },
      conduta: {
        pt: "Monitorar SNC e função respiratória.",
        es: "Monitorear SNC y función respiratoria."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória.",
        es: "Aumenta riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, consciência e saturação.",
        es: "Monitorear respiración, conciencia y saturación."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da depressão do SNC e risco de overdose.",
        es: "Potenciación importante de la depresión del SNC y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar consumo de álcool durante o tratamento.",
        es: "Evitar consumo de alcohol durante el tratamiento."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 4 — Clomipramina
     Cobertura: ~145 fármacos reais via ontologia
     Notas clínicas:
       • TCA com maior potência serotoninérgica da classe (base do ISRS)
       • $classe_qt: CONTRAINDICADA (5) — prolonga QT de forma significativa
       • tramadol: CONTRAINDICADA (5) — síndrome serotoninérgica + convulsões
       • azul_de_metileno: CONTRAINDICADA (5) — atividade IMAO
       • fluoxetina + paroxetina: alta via CYP2D6 (elevam níveis)
       • litio: alta (neurotox + serotoninérgica)
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.7
  ───────────────────────────────────────────────────────────────── */
  "clomipramina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta drasticamente o risco de síndrome serotoninérgica grave, hipertermia, convulsões, crise hipertensiva e morte.",
        es: "La asociación aumenta drásticamente el riesgo de síndrome serotoninérgico grave, hipertermia, convulsiones, crisis hipertensiva y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica potencialmente fatal por efeito IMAO reversível.",
        es: "Puede precipitar síndrome serotoninérgico potencialmente fatal por efecto IMAO reversible."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Atividade IMAO associada a elevado risco de síndrome serotoninérgica.",
        es: "Actividad IMAO asociada a elevado riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "$classe_qt": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Clomipramina possui importante potencial de prolongamento do QT; a associação com fármacos pró-arrítmicos aumenta risco de torsades de pointes e morte súbita.",
        es: "Clomipramina posee importante potencial de prolongación del QT; la asociación con fármacos proarrítmicos aumenta riesgo de torsades de pointes y muerte súbita."
      },
      conduta: {
        pt: "Evitar associação com fármacos pró-arrítmicos. Solicitar ECG basal e corrigir K+/Mg2+.",
        es: "Evitar asociación con fármacos proarrítmicos. Solicitar ECG basal y corregir K+/Mg2+."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alto risco de torsades de pointes e morte súbita por prolongamento aditivo do QT.",
        es: "Alto riesgo de torsades de pointes y muerte súbita por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização importante do risco de arritmias ventriculares.",
        es: "Potenciación importante del riesgo de arritmias ventriculares."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de torsades de pointes.",
        es: "Aumenta significativamente el riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de QT prolongado e arritmias ventriculares.",
        es: "Puede aumentar riesgo de QT prolongado y arritmias ventriculares."
      },
      conduta: {
        pt: "Monitorar ECG.",
        es: "Monitorear ECG."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, hiperreflexia e estado mental.",
        es: "Monitorear temblor, hiperreflexia y estado mental."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da atividade serotoninérgica.",
        es: "Potenciación importante de la actividad serotoninérgica."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre e agitação.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre y agitación."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e pode aumentar significativamente os níveis séricos da clomipramina.",
        es: "Fluoxetina inhibe CYP2D6 y puede aumentar significativamente los niveles séricos de clomipramina."
      },
      conduta: {
        pt: "Monitorar toxicidade tricíclica e cardíaca. Considerar redução da dose.",
        es: "Monitorear toxicidad tricíclica y cardíaca. Considerar reducción de dosis."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e aumenta os níveis séricos da clomipramina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y aumenta los niveles séricos de clomipramina."
      },
      conduta: {
        pt: "Monitorar toxicidade cardíaca e neurológica.",
        es: "Monitorear toxicidad cardíaca y neurológica."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de retenção urinária, delirium, constipação e visão borrada.",
        es: "Potenciación de retención urinaria, delirium, estreñimiento y visión borrosa."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis.",
        es: "Evitar en ancianos y pacientes frágiles."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da toxicidade anticolinérgica.",
        es: "Potenciación importante de la toxicidad anticolinérgica."
      },
      conduta: {
        pt: "Monitorar delirium e retenção urinária.",
        es: "Monitorear delirium y retención urinaria."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar retenção urinária e confusão mental.",
        es: "Puede aumentar retención urinaria y confusión mental."
      },
      conduta: {
        pt: "Evitar associação prolongada, especialmente em idosos.",
        es: "Evitar asociación prolongada, especialmente en ancianos."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Reduz níveis da clomipramina por indução enzimática e pode aumentar risco de neurotoxicidade.",
        es: "Reduce niveles de clomipramina por inducción enzimática y puede aumentar riesgo de neurotoxicidad."
      },
      conduta: {
        pt: "Monitorar resposta clínica e ajustar dose se necessário.",
        es: "Monitorear respuesta clínica y ajustar dosis si es necesario."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Interação bidirecional com potencial toxicidade neurológica.",
        es: "Interacción bidireccional con potencial toxicidad neurológica."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína e resposta clínica.",
        es: "Monitorear niveles séricos de fenitoína y respuesta clínica."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação e risco de quedas.",
        es: "Potenciación de la sedación y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar SNC e função respiratória.",
        es: "Monitorear SNC y función respiratoria."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória.",
        es: "Aumenta riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar consciência e respiração.",
        es: "Monitorear conciencia y respiración."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 5 — Desipramina
     Cobertura: ~130 fármacos reais via ontologia
     Notas clínicas:
       • Metabólito ativo da imipramina; menos anticolinérgico, mais noradrenérgico
       • $classe_qt: alta (4) — menor risco que imipramina/clomipramina
       • fluoxetina + paroxetina: CONTRAINDICADAS (5) — CYP2D6 com elevação
         expressiva de níveis (diferença clínica importante em relação aos outros ATCs)
       • amiodarona + sotalol + ziprasidona: contraindicadas individualmente
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.7
  ───────────────────────────────────────────────────────────────── */
  "desipramina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode provocar síndrome serotoninérgica grave e crise hipertensiva.",
        es: "Puede provocar síndrome serotoninérgico grave y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de torsades de pointes.",
        es: "Aumenta significativamente el riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alto risco de arritmias ventriculares graves.",
        es: "Alto riesgo de arritmias ventriculares graves."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização do QT prolongado.",
        es: "Potenciación del QT prolongado."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "fluoxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluoxetina inibe fortemente CYP2D6 e eleva expressivamente os níveis séricos da desipramina, com risco de toxicidade cardíaca grave.",
        es: "Fluoxetina inhibe fuertemente CYP2D6 y eleva expresivamente los niveles séricos de desipramina, con riesgo de toxicidad cardíaca grave."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, reduzir dose significativamente e monitorar ECG.",
        es: "Evitar asociación. Si es indispensable, reducir dosis significativamente y monitorear ECG."
      }
    },

    "paroxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e provoca elevação importante da concentração sérica da desipramina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y provoca elevación importante de la concentración sérica de desipramina."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Desipramina pode prolongar QT e favorecer arritmias ventriculares.",
        es: "Desipramina puede prolongar QT y favorecer arritmias ventriculares."
      },
      conduta: {
        pt: "Monitorar ECG e corrigir K+/Mg2+ em pacientes de risco.",
        es: "Monitorear ECG y corregir K+/Mg2+ en pacientes de riesgo."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de QT prolongado e arritmias.",
        es: "Aumenta riesgo de QT prolongado y arritmias."
      },
      conduta: {
        pt: "Monitorar ECG.",
        es: "Monitorear ECG."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de convulsões e toxicidade serotoninérgica.",
        es: "Aumenta riesgo de convulsiones y toxicidad serotoninérgica."
      },
      conduta: {
        pt: "Usar com cautela extrema.",
        es: "Usar con extrema cautela."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização dos efeitos anticolinérgicos.",
        es: "Potenciación de los efectos anticolinérgicos."
      },
      conduta: {
        pt: "Monitorar retenção urinária e delirium.",
        es: "Monitorear retención urinaria y delirium."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de toxicidade anticolinérgica.",
        es: "Aumenta riesgo de toxicidad anticolinérgica."
      },
      conduta: {
        pt: "Monitorar estado mental e diurese.",
        es: "Monitorear estado mental y diuresis."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da retenção urinária e constipação.",
        es: "Potenciación de retención urinaria y estreñimiento."
      },
      conduta: {
        pt: "Evitar em idosos.",
        es: "Evitar en ancianos."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir níveis séricos da desipramina por indução enzimática.",
        es: "Puede reducir niveles séricos de desipramina por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar resposta terapêutica.",
        es: "Monitorear respuesta terapéutica."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e alterar níveis séricos.",
        es: "Puede aumentar neurotoxicidad y alterar niveles séricos."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína.",
        es: "Monitorear niveles séricos de fenitoína."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação.",
        es: "Potenciación de la sedación."
      },
      conduta: {
        pt: "Monitorar SNC e função respiratória.",
        es: "Monitorear SNC y función respiratoria."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória.",
        es: "Aumenta riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração.",
        es: "Monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da depressão do SNC.",
        es: "Potenciación de la depresión del SNC."
      },
      conduta: {
        pt: "Evitar consumo de álcool.",
        es: "Evitar consumo de alcohol."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 6 — Doxepina
     Cobertura: ~135 fármacos reais via ontologia
     Notas clínicas:
       • TCA com potente atividade anti-histamínica H1 (uso em insônia/prurido)
       • $classe_qt: alta (4) — prolonga QT, mas menos que amitriptilina/imipramina/clomipramina
       • amiodarona + sotalol + ziprasidona + linezolida: contraindicadas
       • fluoxetina + paroxetina: alta via CYP2D6 (elevam níveis)
       • $classe_anticolinergicos + alcool: alta
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.7
  ───────────────────────────────────────────────────────────────── */
  "doxepina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave, hipertermia, convulsões e crise hipertensiva.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico grave, hipertermia, convulsiones y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica grave por efeito IMAO reversível.",
        es: "Puede precipitar síndrome serotoninérgico grave por efecto IMAO reversible."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de torsades de pointes e morte súbita.",
        es: "Alto riesgo de torsades de pointes y muerte súbita."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização significativa do risco de arritmias ventriculares.",
        es: "Potenciación significativa del riesgo de arritmias ventriculares."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de torsades de pointes por prolongamento aditivo do QT.",
        es: "Aumenta riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Doxepina pode prolongar QT e aumentar risco de arritmias ventriculares quando associada a fármacos pró-arrítmicos.",
        es: "Doxepina puede prolongar QT y aumentar riesgo de arritmias ventriculares cuando se asocia con fármacos proarrítmicos."
      },
      conduta: {
        pt: "Monitorar ECG e corrigir K+/Mg2+ em pacientes de risco.",
        es: "Monitorear ECG y corregir K+/Mg2+ en pacientes de riesgo."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de QT prolongado e arritmias ventriculares.",
        es: "Puede aumentar riesgo de QT prolongado y arritmias ventriculares."
      },
      conduta: {
        pt: "Monitorar ECG.",
        es: "Monitorear ECG."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e pode elevar os níveis séricos da doxepina, causando toxicidade.",
        es: "Fluoxetina inhibe CYP2D6 y puede elevar los niveles séricos de doxepina, causando toxicidad."
      },
      conduta: {
        pt: "Monitorar toxicidade e considerar redução de dose.",
        es: "Monitorear toxicidad y considerar reducción de dosis."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e aumenta a exposição à doxepina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y aumenta la exposición a doxepina."
      },
      conduta: {
        pt: "Monitorar sedação e hipotensão.",
        es: "Monitorear sedación e hipotensión."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de convulsiones y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Usar com extrema cautela.",
        es: "Usar con extrema precaución."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de retenção urinária, delirium, constipação e visão borrada.",
        es: "Potenciación de retención urinaria, delirium, estreñimiento y visión borrosa."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis.",
        es: "Evitar en ancianos y pacientes frágiles."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de delirium e retenção urinária.",
        es: "Aumenta riesgo de delirium y retención urinaria."
      },
      conduta: {
        pt: "Monitorar estado mental.",
        es: "Monitorear estado mental."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante dos efeitos anticolinérgicos.",
        es: "Potenciación importante de los efectos anticolinérgicos."
      },
      conduta: {
        pt: "Evitar associação prolongada.",
        es: "Evitar asociación prolongada."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir níveis séricos da doxepina por indução enzimática.",
        es: "Puede reducir niveles séricos de doxepina por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar resposta clínica.",
        es: "Monitorear respuesta clínica."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Interação bidirecional com potencial neurotoxicidade.",
        es: "Interacción bidireccional con potencial neurotoxicidad."
      },
      conduta: {
        pt: "Monitorar níveis séricos de fenitoína.",
        es: "Monitorear niveles séricos de fenitoína."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação e risco de quedas.",
        es: "Potenciación de la sedación y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar SNC.",
        es: "Monitorear SNC."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória e sedação profunda.",
        es: "Aumenta riesgo de depresión respiratoria y sedación profunda."
      },
      conduta: {
        pt: "Monitorar respiração e consciência.",
        es: "Monitorear respiración y conciencia."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da depressão do SNC.",
        es: "Potenciación importante de la depresión del SNC."
      },
      conduta: {
        pt: "Evitar consumo de álcool.",
        es: "Evitar consumo de alcohol."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     BLOCO ATC 7 — Trimipramina
     Cobertura: ~125 fármacos reais via ontologia
     Notas clínicas:
       • TCA de uso mais restrito, com perfil sedativo e anti-histamínico marcante
       • $classe_qt: alta (4) — prolongamento moderado
       • amiodarona + sotalol + ziprasidona + linezolida: contraindicadas
       • fluoxetina + paroxetina: alta via CYP2D6
       • $classe_anticolinergicos + alcool: alta
       • washout IMAO: 14 dias
     Inserido em: 2026-06-19 · v3.7
  ───────────────────────────────────────────────────────────────── */
  "trimipramina": {
    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode causar síndrome serotoninérgica grave, hipertermia e crise hipertensiva.",
        es: "La asociación puede causar síndrome serotoninérgico grave, hipertermia y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado. Respeitar washout mínimo de 14 dias.",
        es: "Contraindicado. Respetar washout mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Alto riesgo de síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de torsades de pointes.",
        es: "Alto riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potencialização do risco de arritmias ventriculares graves.",
        es: "Potenciación del riesgo de arritmias ventriculares graves."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta significativamente risco de torsades de pointes.",
        es: "Aumenta significativamente el riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de QT prolongado e arritmias ventriculares.",
        es: "Puede aumentar riesgo de QT prolongado y arritmias ventriculares."
      },
      conduta: {
        pt: "Monitorar ECG em pacientes de risco.",
        es: "Monitorear ECG en pacientes de riesgo."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de QT prolongado e arritmias.",
        es: "Puede aumentar riesgo de QT prolongado y arritmias."
      },
      conduta: {
        pt: "Monitorar ECG.",
        es: "Monitorear ECG."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e pode aumentar os níveis séricos da trimipramina.",
        es: "Fluoxetina inhibe CYP2D6 y puede aumentar los niveles séricos de trimipramina."
      },
      conduta: {
        pt: "Monitorar toxicidade.",
        es: "Monitorear toxicidad."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina inibe fortemente CYP2D6 e eleva a exposição sistêmica à trimipramina.",
        es: "Paroxetina inhibe fuertemente CYP2D6 y eleva la exposición sistémica a trimipramina."
      },
      conduta: {
        pt: "Considerar ajuste de dose e monitorar toxicidade.",
        es: "Considerar ajuste de dosis y monitorear toxicidad."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de convulsões e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de convulsiones y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Usar com extrema cautela.",
        es: "Usar con extrema precaución."
      }
    },

    "$classe_anticolinergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de retenção urinária, delirium e constipação.",
        es: "Potenciación de retención urinaria, delirium y estreñimiento."
      },
      conduta: {
        pt: "Evitar em idosos e pacientes frágeis.",
        es: "Evitar en ancianos y pacientes frágiles."
      }
    },

    "biperideno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de toxicidade anticolinérgica.",
        es: "Aumenta riesgo de toxicidad anticolinérgica."
      },
      conduta: {
        pt: "Monitorar estado mental.",
        es: "Monitorear estado mental."
      }
    },

    "oxibutinina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização dos efeitos anticolinérgicos.",
        es: "Potenciación de los efectos anticolinérgicos."
      },
      conduta: {
        pt: "Evitar associação prolongada.",
        es: "Evitar asociación prolongada."
      }
    },

    "carbamazepina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode reduzir níveis séricos da trimipramina.",
        es: "Puede reducir niveles séricos de trimipramina."
      },
      conduta: {
        pt: "Monitorar resposta clínica.",
        es: "Monitorear respuesta clínica."
      }
    },

    "fenitoina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar neurotoxicidade e alterar níveis séricos.",
        es: "Puede aumentar neurotoxicidad y alterar niveles séricos."
      },
      conduta: {
        pt: "Monitorar níveis séricos.",
        es: "Monitorear niveles séricos."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização da sedação e risco de quedas.",
        es: "Potenciación de la sedación y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar SNC.",
        es: "Monitorear SNC."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de depressão respiratória.",
        es: "Aumenta riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração.",
        es: "Monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização importante da depressão do SNC.",
        es: "Potenciación importante de la depresión del SNC."
      },
      conduta: {
        pt: "Evitar consumo de álcool.",
        es: "Evitar consumo de alcohol."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     MIRTAZAPINA — Antidepressivo NaSSA (Atípico 1A)
     Mecanismo: antagonista α2, antagonista 5-HT2/5-HT3, anti-H1
     Perfil: sedativo, pró-apetite, menor risco serotoninérgico que ISRS/ISRN
     Linezolida e azul de metileno: alta(4) — não contraindicada
  ───────────────────────────────────────────────────────────── */
  "mirtazapina": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode aumentar risco de toxicidade serotoninérgica, instabilidade autonômica e eventos neurológicos graves.",
        es: "La asociación puede aumentar el riesgo de toxicidad serotoninérgica, inestabilidad autonómica y eventos neurológicos graves."
      },
      conduta: {
        pt: "Evitar associação. Respeitar intervalo de segurança ao trocar entre IMAO e mirtazapina.",
        es: "Evitar asociación. Respetar intervalo de seguridad al cambiar entre IMAO y mirtazapina."
      }
    },

    "linezolida": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode aumentar risco de toxicidade serotoninérgica ou autonômica.",
        es: "Linezolid posee actividad IMAO reversible y puede aumentar el riesgo de toxicidad serotoninérgica o autonómica."
      },
      conduta: {
        pt: "Evitar se possível. Se indispensável, monitorar febre, rigidez, hiperreflexia, confusão e instabilidade autonômica.",
        es: "Evitar si es posible. Si es indispensable, monitorear fiebre, rigidez, hiperreflexia, confusión e inestabilidad autonómica."
      }
    },

    "azul_de_metileno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Azul de metileno IV pode atuar como IMAO e aumentar risco de toxicidade serotoninérgica.",
        es: "El azul de metileno IV puede actuar como IMAO y aumentar el riesgo de toxicidad serotoninérgica."
      },
      conduta: {
        pt: "Evitar associação ou monitorar em ambiente hospitalar.",
        es: "Evitar asociación o monitorear en ambiente hospitalario."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Embora a mirtazapina não seja ISRS/ISRN, combinações com múltiplos serotoninérgicos podem aumentar risco de toxicidade serotoninérgica em pacientes vulneráveis.",
        es: "Aunque mirtazapina no es ISRS/ISRN, combinaciones con múltiples serotoninérgicos pueden aumentar el riesgo de toxicidad serotoninérgica en pacientes vulnerables."
      },
      conduta: {
        pt: "Monitorar agitação, tremor, hiperreflexia, clônus, febre e confusão.",
        es: "Monitorear agitación, temblor, hiperreflexia, clonus, fiebre y confusión."
      }
    },

    "tramadol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de toxicidade serotoninérgica, sedação e convulsões, especialmente em uso conjunto com outros antidepressivos.",
        es: "Puede aumentar el riesgo de toxicidad serotoninérgica, sedación y convulsiones, especialmente en uso conjunto con otros antidepresivos."
      },
      conduta: {
        pt: "Evitar se possível. Preferir analgésico não serotoninérgico.",
        es: "Evitar si es posible. Preferir analgésico no serotoninérgico."
      }
    },

    "litio": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e sintomas serotoninérgicos em combinações antidepressivas.",
        es: "Puede aumentar riesgo de neurotoxicidad y síntomas serotoninérgicos en combinaciones antidepresivas."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia y litemia si está indicado."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode potencializar sedação, prejuízo psicomotor, quedas e depressão respiratória em pacientes vulneráveis.",
        es: "La asociación puede potenciar sedación, deterioro psicomotor, caídas y depresión respiratoria en pacientes vulnerables."
      },
      conduta: {
        pt: "Usar menor dose efetiva e monitorar sonolência, quedas e respiração.",
        es: "Usar la menor dosis efectiva y monitorear somnolencia, caídas y respiración."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação profunda, confusão, quedas e depressão respiratória.",
        es: "Puede aumentar sedación profunda, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores do SNC. Monitorar consciência e frequência respiratória.",
        es: "Evitar múltiples depresores del SNC. Monitorear conciencia y frecuencia respiratoria."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sonolência, lentificação psicomotora, confusão e risco de quedas.",
        es: "Potenciación de somnolencia, enlentecimiento psicomotor, confusión y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar combinações sedativas desnecessárias, especialmente em idosos.",
        es: "Evitar combinaciones sedativas innecesarias, especialmente en ancianos."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Álcool potencializa sedação, prejuízo psicomotor e risco de acidentes.",
        es: "El alcohol potencia sedación, deterioro psicomotor y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar consumo de álcool durante tratamento.",
        es: "Evitar consumo de alcohol durante el tratamiento."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação excessiva, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta el riesgo de sedación excesiva, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar combinação rotineira. Se necessário, usar menor dose e orientar segurança noturna.",
        es: "Evitar combinación rutinaria. Si es necesario, usar menor dosis y orientar seguridad nocturna."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sonolência, quedas e prejuízo psicomotor.",
        es: "Puede potenciar somnolencia, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação e evitar álcool.",
        es: "Monitorear sedación y evitar alcohol."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode aumentar depressão do SNC e risco de quedas.",
        es: "La asociación puede aumentar depresión del SNC y riesgo de caídas."
      },
      conduta: {
        pt: "Usar cautela, especialmente em idosos.",
        es: "Usar precaución, especialmente en ancianos."
      }
    },

    "hidroxizina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação e risco de prejuízo psicomotor; hidroxizina também pode contribuir para QT em pacientes predispostos.",
        es: "Potenciación de sedación y riesgo de deterioro psicomotor; hidroxizina también puede contribuir a QT en pacientes predispuestos."
      },
      conduta: {
        pt: "Monitorar sedação e considerar ECG se alto risco de QT.",
        es: "Monitorear sedación y considerar ECG si alto riesgo de QT."
      }
    },

    "$classe_antihistaminicos_sedativos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência, boca seca, confusão e risco de quedas.",
        es: "Puede aumentar somnolencia, boca seca, confusión y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes com risco de queda.",
        es: "Evitar en ancianos o pacientes con riesgo de caída."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, tontura, risco de queda e depressão respiratória quando há outros depressores do SNC.",
        es: "Aumenta sedación, mareos, riesgo de caída y depresión respiratoria cuando hay otros depresores del SNC."
      },
      conduta: {
        pt: "Monitorar sedação e função respiratória em pacientes vulneráveis.",
        es: "Monitorear sedación y función respiratoria en pacientes vulnerables."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, tontura e depressão respiratória em combinação com outros depressores.",
        es: "Puede potenciar sedación, mareos y depresión respiratoria en combinación con otros depresores."
      },
      conduta: {
        pt: "Monitorar quedas, sonolência e respiração.",
        es: "Monitorear caídas, somnolencia y respiración."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode aumentar sedação, hipotensão ortostática, ganho ponderal e risco metabólico.",
        es: "La asociación puede aumentar sedación, hipotensión ortostática, aumento de peso y riesgo metabólico."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática, peso, glicemia e lipídios.",
        es: "Monitorear sedación, PA ortostática, peso, glucemia y lípidos."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação, aumento de apetite, ganho de peso e alterações metabólicas.",
        es: "Puede sumar sedación, aumento de apetito, aumento de peso y alteraciones metabólicas."
      },
      conduta: {
        pt: "Monitorar peso, glicemia, lipídios e sonolência.",
        es: "Monitorear peso, glucemia, lípidos y somnolencia."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão, risco metabólico e depressão do SNC.",
        es: "Puede aumentar sedación, hipotensión, riesgo metabólico y depresión del SNC."
      },
      conduta: {
        pt: "Monitorar sedação, PA, estado mental, peso e segurança respiratória.",
        es: "Monitorear sedación, PA, estado mental, peso y seguridad respiratoria."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, quedas e risco metabólico.",
        es: "Puede potenciar sedación, hipotensión ortostática, caídas y riesgo metabólico."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática e risco de queda.",
        es: "Monitorear sedación, PA ortostática y riesgo de caída."
      }
    },

    "$classe_qt": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Mirtazapina tem menor risco de QT que vários antidepressivos, mas combinações com fármacos pró-arrítmicos podem ser relevantes em pacientes predispostos.",
        es: "Mirtazapina tiene menor riesgo de QT que varios antidepresivos, pero combinaciones con fármacos proarrítmicos pueden ser relevantes en pacientes predispuestos."
      },
      conduta: {
        pt: "Considerar ECG se cardiopatia, hipocalemia, hipomagnesemia ou múltiplos fármacos de QT.",
        es: "Considerar ECG si cardiopatía, hipopotasemia, hipomagnesemia o múltiples fármacos de QT."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de mirtazapina e diminuir eficácia antidepressiva.",
        es: "La inducción enzimática puede reducir niveles de mirtazapina y disminuir eficacia antidepresiva."
      },
      conduta: {
        pt: "Monitorar resposta clínica e considerar ajuste.",
        es: "Monitorear respuesta clínica y considerar ajuste."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à mirtazapina por indução metabólica.",
        es: "Puede reducir exposición a mirtazapina por inducción metabólica."
      },
      conduta: {
        pt: "Monitorar resposta clínica.",
        es: "Monitorear respuesta clínica."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indutor enzimático potente; pode reduzir níveis de mirtazapina e comprometer eficácia.",
        es: "Inductor enzimático potente; puede reducir niveles de mirtazapina y comprometer eficacia."
      },
      conduta: {
        pt: "Monitorar resposta antidepressiva.",
        es: "Monitorear respuesta antidepresiva."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     BUPROPIONA — Antidepressivo IRSND / Atípico (Atípico 1A)
     Mecanismo: inibidor de recaptação de dopamina e noradrenalina; inibidor CYP2D6
     Perfil: pró-convulsivante dose-dependente; sem ação serotoninérgica direta
     IMAOs: reação hipertensiva (não serotoninérgica); tramadol: contraindicada(5)
  ───────────────────────────────────────────────────────────── */
  "bupropiona": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de reação hipertensiva grave.",
        es: "La asociación aumenta el riesgo de reacción hipertensiva grave."
      },
      conduta: {
        pt: "Contraindicado. Respeitar intervalo mínimo de 14 dias entre IMAO e bupropiona.",
        es: "Contraindicado. Respetar intervalo mínimo de 14 días entre IMAO y bupropión."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida tem atividade IMAO reversível e pode aumentar risco de reação hipertensiva.",
        es: "Linezolid tiene actividad IMAO reversible y puede aumentar el riesgo de reacción hipertensiva."
      },
      conduta: {
        pt: "Não iniciar bupropiona em paciente usando linezolida. Se inevitável, manejo hospitalar.",
        es: "No iniciar bupropión en paciente usando linezolid. Si es inevitable, manejo hospitalario."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno IV pode agir como IMAO e aumentar risco de reação hipertensiva.",
        es: "Azul de metileno IV puede actuar como IMAO y aumentar el riesgo de reacción hipertensiva."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Ambos reduzem limiar convulsivo; bupropiona também pode reduzir efeito analgésico do tramadol por inibição de CYP2D6.",
        es: "Ambos reducen el umbral convulsivo; bupropión también puede reducir el efecto analgésico de tramadol por inhibición de CYP2D6."
      },
      conduta: {
        pt: "Evitar associação. Preferir analgésico alternativo.",
        es: "Evitar asociación. Preferir analgésico alternativo."
      }
    },

    "$classe_farmacos_reduzem_limiar_convulsivo": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona reduz limiar convulsivo; o risco aumenta com fármacos pró-convulsivantes, álcool, TCE, epilepsia ou transtornos alimentares.",
        es: "Bupropión reduce el umbral convulsivo; el riesgo aumenta con fármacos proconvulsivantes, alcohol, TCE, epilepsia o trastornos alimentarios."
      },
      conduta: {
        pt: "Evitar em alto risco. Não exceder dose máxima e monitorar eventos neurológicos.",
        es: "Evitar en alto riesgo. No exceder dosis máxima y monitorear eventos neurológicos."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Ambos reduzem limiar convulsivo; pode haver aumento de sedação, convulsões e toxicidade neuropsiquiátrica.",
        es: "Ambos reducen el umbral convulsivo; puede haber aumento de sedación, convulsiones y toxicidad neuropsiquiátrica."
      },
      conduta: {
        pt: "Evitar se possível. Monitorar convulsões, sedação e níveis de clozapina se disponíveis.",
        es: "Evitar si es posible. Monitorear convulsiones, sedación y niveles de clozapina si están disponibles."
      }
    },

    "olanzapina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de convulsões em pacientes predispostos e somar efeitos no SNC.",
        es: "Puede aumentar riesgo de convulsiones en pacientes predispuestos y sumar efectos en SNC."
      },
      conduta: {
        pt: "Monitorar sintomas neurológicos e psiquiátricos.",
        es: "Monitorear síntomas neurológicos y psiquiátricos."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona inibe CYP2D6 e pode aumentar níveis de haloperidol, além de somar risco de convulsões e efeitos extrapiramidais.",
        es: "Bupropión inhibe CYP2D6 y puede aumentar niveles de haloperidol, además de sumar riesgo de convulsiones y efectos extrapiramidales."
      },
      conduta: {
        pt: "Monitorar rigidez, tremor, acatisia, sedação e convulsões.",
        es: "Monitorear rigidez, temblor, acatisia, sedación y convulsiones."
      }
    },

    "risperidona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição de CYP2D6 pode aumentar exposição à risperidona e risco de sintomas extrapiramidais, hiperprolactinemia e sedação.",
        es: "La inhibición de CYP2D6 puede aumentar exposición a risperidona y riesgo de síntomas extrapiramidales, hiperprolactinemia y sedación."
      },
      conduta: {
        pt: "Monitorar efeitos extrapiramidais, sedação e prolactina se indicado.",
        es: "Monitorear efectos extrapiramidales, sedación y prolactina si está indicado."
      }
    },

    "aripiprazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona pode aumentar níveis de aripiprazol por inibição de CYP2D6, elevando risco de acatisia, insônia e efeitos extrapiramidais.",
        es: "Bupropión puede aumentar niveles de aripiprazol por inhibición de CYP2D6, elevando riesgo de acatisia, insomnio y efectos extrapiramidales."
      },
      conduta: {
        pt: "Monitorar acatisia, inquietação e ajustar dose se necessário.",
        es: "Monitorear acatisia, inquietud y ajustar dosis si es necesario."
      }
    },

    "brexpiprazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição ao brexpiprazol por inibição de CYP2D6.",
        es: "Puede aumentar exposición a brexpiprazol por inhibición de CYP2D6."
      },
      conduta: {
        pt: "Monitorar sedação, acatisia e sintomas extrapiramidais.",
        es: "Monitorear sedación, acatisia y síntomas extrapiramidales."
      }
    },

    "$classe_substratos_cyp2d6": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona é inibidora de CYP2D6 e pode aumentar níveis de diversos substratos, incluindo antidepressivos, antipsicóticos, betabloqueadores e antiarrítmicos.",
        es: "Bupropión es inhibidor de CYP2D6 y puede aumentar niveles de diversos sustratos, incluyendo antidepresivos, antipsicóticos, betabloqueantes y antiarrítmicos."
      },
      conduta: {
        pt: "Considerar redução de dose do substrato e monitorar toxicidade.",
        es: "Considerar reducción de dosis del sustrato y monitorear toxicidad."
      }
    },

    "metoprolol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de metoprolol por inibição de CYP2D6, causando bradicardia, hipotensão, tontura e síncope.",
        es: "Puede aumentar niveles de metoprolol por inhibición de CYP2D6, causando bradicardia, hipotensión, mareos y síncope."
      },
      conduta: {
        pt: "Monitorar FC e PA. Considerar reduzir dose do betabloqueador.",
        es: "Monitorear FC y PA. Considerar reducir dosis del betabloqueante."
      }
    },

    "carvedilol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar exposição ao carvedilol e favorecer bradicardia ou hipotensão.",
        es: "Puede aumentar exposición a carvedilol y favorecer bradicardia o hipotensión."
      },
      conduta: {
        pt: "Monitorar FC, PA e sintomas ortostáticos.",
        es: "Monitorear FC, PA y síntomas ortostáticos."
      }
    },

    "nebivolol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Inibição de CYP2D6 pode aumentar efeito betabloqueador.",
        es: "La inhibición de CYP2D6 puede aumentar el efecto betabloqueante."
      },
      conduta: {
        pt: "Monitorar bradicardia e hipotensão.",
        es: "Monitorear bradicardia e hipotensión."
      }
    },

    "propafenona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de propafenona, elevando risco de bloqueios, bradicardia e arritmias.",
        es: "Puede aumentar niveles de propafenona, elevando riesgo de bloqueos, bradicardia y arritmias."
      },
      conduta: {
        pt: "Monitorar ECG e considerar ajuste.",
        es: "Monitorear ECG y considerar ajuste."
      }
    },

    "flecainida": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição à flecainida e risco de toxicidade cardíaca.",
        es: "Puede aumentar exposición a flecainida y riesgo de toxicidad cardíaca."
      },
      conduta: {
        pt: "Monitorar ECG, QRS e sintomas cardíacos.",
        es: "Monitorear ECG, QRS y síntomas cardíacos."
      }
    },

    "tamoxifeno": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona inibe CYP2D6 e pode reduzir ativação do tamoxifeno em endoxifeno, com possível perda de eficácia oncológica.",
        es: "Bupropión inhibe CYP2D6 y puede reducir activación de tamoxifeno a endoxifeno, con posible pérdida de eficacia oncológica."
      },
      conduta: {
        pt: "Evitar se possível em pacientes usando tamoxifeno. Discutir alternativa antidepressiva.",
        es: "Evitar si es posible en pacientes usando tamoxifeno. Discutir alternativa antidepresiva."
      }
    },

    "venlafaxina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de venlafaxina por inibição de CYP2D6 e somar risco de hipertensão, ansiedade e convulsões.",
        es: "Puede aumentar niveles de venlafaxina por inhibición de CYP2D6 y sumar riesgo de hipertensión, ansiedad y convulsiones."
      },
      conduta: {
        pt: "Monitorar PA, ansiedade, insônia e eventos neurológicos.",
        es: "Monitorear PA, ansiedad, insomnio y eventos neurológicos."
      }
    },

    "duloxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição à duloxetina e somar risco de hipertensão, náuseas, ansiedade e convulsões.",
        es: "Puede aumentar exposición a duloxetina y sumar riesgo de hipertensión, náuseas, ansiedad y convulsiones."
      },
      conduta: {
        pt: "Monitorar PA, efeitos adversos e risco convulsivo.",
        es: "Monitorear PA, efectos adversos y riesgo convulsivo."
      }
    },

    "desipramina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar marcadamente níveis de desipramina por inibição de CYP2D6.",
        es: "Puede aumentar marcadamente niveles de desipramina por inhibición de CYP2D6."
      },
      conduta: {
        pt: "Evitar ou reduzir dose do tricíclico. Monitorar ECG e toxicidade.",
        es: "Evitar o reducir dosis del tricíclico. Monitorear ECG y toxicidad."
      }
    },

    "nortriptilina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de nortriptilina, elevando risco de sedação, anticolinergia e arritmias.",
        es: "Puede aumentar niveles de nortriptilina, elevando riesgo de sedación, anticolinergia y arritmias."
      },
      conduta: {
        pt: "Monitorar toxicidade e considerar redução de dose.",
        es: "Monitorear toxicidad y considerar reducción de dosis."
      }
    },

    "imipramina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode elevar níveis de imipramina por inibição de CYP2D6.",
        es: "Puede elevar niveles de imipramina por inhibición de CYP2D6."
      },
      conduta: {
        pt: "Monitorar ECG, sedação e efeitos anticolinérgicos.",
        es: "Monitorear ECG, sedación y efectos anticolinérgicos."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de atomoxetina, elevando risco de hipertensão, taquicardia, irritabilidade e insônia.",
        es: "Puede aumentar niveles de atomoxetina, elevando riesgo de hipertensión, taquicardia, irritabilidad e insomnio."
      },
      conduta: {
        pt: "Monitorar PA, FC e sintomas de ativação.",
        es: "Monitorear PA, FC y síntomas de activación."
      }
    },

    "metilfenidato": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar efeitos estimulantes e reduzir limiar convulsivo, aumentando risco de hipertensão, insônia e ansiedade.",
        es: "Puede sumar efectos estimulantes y reducir umbral convulsivo, aumentando riesgo de hipertensión, insomnio y ansiedad."
      },
      conduta: {
        pt: "Monitorar PA, FC, ansiedade, insônia e eventos neurológicos.",
        es: "Monitorear PA, FC, ansiedad, insomnio y eventos neurológicos."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de hipertensão, taquicardia, agitação, insônia e convulsões.",
        es: "Puede aumentar riesgo de hipertensión, taquicardia, agitación, insomnio y convulsiones."
      },
      conduta: {
        pt: "Evitar doses altas. Monitorar PA, FC e comportamento.",
        es: "Evitar dosis altas. Monitorear PA, FC y comportamiento."
      }
    },

    "teofilina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Teofilina reduz limiar convulsivo; associação com bupropiona aumenta risco de convulsões.",
        es: "Teofilina reduce umbral convulsivo; la asociación con bupropión aumenta riesgo de convulsiones."
      },
      conduta: {
        pt: "Evitar em pacientes predispostos. Monitorar níveis de teofilina e sintomas neurológicos.",
        es: "Evitar en pacientes predispuestos. Monitorear niveles de teofilina y síntomas neurológicos."
      }
    },

    "levodopa_carbidopa": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode ocorrer toxicidade dopaminérgica com agitação, tremor, discinesia, confusão ou alucinações.",
        es: "Puede ocurrir toxicidad dopaminérgica con agitación, temblor, discinesia, confusión o alucinaciones."
      },
      conduta: {
        pt: "Monitorar sintomas neuropsiquiátricos e motores.",
        es: "Monitorear síntomas neuropsiquiátricos y motores."
      }
    },

    "amantadina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar toxicidade do SNC, incluindo agitação, insônia, tremor e confusão.",
        es: "Puede aumentar toxicidad del SNC, incluyendo agitación, insomnio, temblor y confusión."
      },
      conduta: {
        pt: "Monitorar estado mental e sintomas extrapiramidais.",
        es: "Monitorear estado mental y síntomas extrapiramidales."
      }
    },

    "digoxina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Bupropiona pode reduzir níveis plasmáticos de digoxina, com possível perda de eficácia.",
        es: "Bupropión puede reducir niveles plasmáticos de digoxina, con posible pérdida de eficacia."
      },
      conduta: {
        pt: "Monitorar sintomas cardíacos e digoxinemia se indicado.",
        es: "Monitorear síntomas cardíacos y digoxinemia si está indicado."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Uso excessivo ou retirada abrupta de álcool aumenta risco de convulsões e eventos neuropsiquiátricos com bupropiona.",
        es: "Uso excesivo o retirada abrupta de alcohol aumenta riesgo de convulsiones y eventos neuropsiquiátricos con bupropión."
      },
      conduta: {
        pt: "Evitar abuso de álcool e não iniciar em contexto de abstinência alcoólica aguda.",
        es: "Evitar abuso de alcohol y no iniciar en contexto de abstinencia alcohólica aguda."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TRAZODONA — Antidepressivo SARI (Atípico 1B)
     Mecanismo: antagonista 5-HT2A/2C, inibidor de recaptação de serotonina, anti-H1, anti-α1
     Perfil: sedativo, pró-hipotensão ortostática, risco de QT, priapismo
     tramadol e hipérico: contraindicados(5); amiodarona/sotalol/ziprasidona: contraindicados(5) por QT
  ───────────────────────────────────────────────────────────── */
  "trazodona": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave, hipertermia, instabilidade autonômica, convulsões e morte.",
        es: "La asociación aumenta el riesgo de síndrome serotoninérgico grave, hipertermia, inestabilidad autonómica, convulsiones y muerte."
      },
      conduta: {
        pt: "Contraindicado. Respeitar intervalo mínimo de 14 dias.",
        es: "Contraindicado. Respetar intervalo mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode precipitar síndrome serotoninérgica grave.",
        es: "Linezolid posee actividad IMAO reversible y puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender trazodona e monitorar em ambiente hospitalar.",
        es: "Evitar asociación. Si es indispensable, suspender trazodona y monitorear en ambiente hospitalario."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Azul de metileno IV pode atuar como IMAO e causar síndrome serotoninérgica potencialmente fatal.",
        es: "Azul de metileno IV puede actuar como IMAO y causar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Trazodona tem ação serotoninérgica; associação com outros serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "Trazodona tiene acción serotoninérgica; la asociación con otros serotoninérgicos aumenta el riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre, diarreia, agitação e confusão.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre, diarrea, agitación y confusión."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica, convulsões e sedação.",
        es: "Aumenta riesgo de síndrome serotoninérgico, convulsiones y sedación."
      },
      conduta: {
        pt: "Evitar. Preferir analgésico não serotoninérgico.",
        es: "Evitar. Preferir analgésico no serotoninérgico."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de síndrome serotoninérgica, especialmente em automedicação com xaropes.",
        es: "Puede aumentar riesgo de síndrome serotoninérgico, especialmente en automedicación con jarabes."
      },
      conduta: {
        pt: "Evitar uso de dextrometorfano sem avaliação médica.",
        es: "Evitar uso de dextrometorfano sin evaluación médica."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, confusão, hiperreflexia e litemia se indicado.",
        es: "Monitorear temblor, confusión, hiperreflexia y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico em combinações múltiplas.",
        es: "Puede aumentar riesgo serotoninérgico en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta: tremor, febre, rigidez, agitação ou confusão.",
        es: "Orientar signos de alerta: temblor, fiebre, rigidez, agitación o confusión."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico/Erva de São João aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico/Hierba de San Juan aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação e investigar fitoterápicos.",
        es: "Evitar asociación e investigar fitoterápicos."
      }
    },

    "$classe_qt": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Trazodona pode prolongar QT; associação com fármacos pró-arrítmicos aumenta risco de torsades de pointes.",
        es: "Trazodona puede prolongar QT; la asociación con fármacos proarrítmicos aumenta el riesgo de torsades de pointes."
      },
      conduta: {
        pt: "Considerar ECG, corrigir K+/Mg2+ e evitar combinações de alto risco.",
        es: "Considerar ECG, corregir K+/Mg2+ y evitar combinaciones de alto riesgo."
      }
    },

    "amiodarona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de prolongamento do QT e arritmias ventriculares por efeito aditivo.",
        es: "Alto riesgo de prolongación del QT y arritmias ventriculares por efecto aditivo."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "sotalol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de torsades de pointes por prolongamento aditivo do QT.",
        es: "Aumenta riesgo de torsades de pointes por prolongación aditiva del QT."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "haloperidol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar risco de QT prolongado, sedação e sintomas extrapiramidais.",
        es: "Puede sumar riesgo de QT prolongado, sedación y síntomas extrapiramidales."
      },
      conduta: {
        pt: "Monitorar ECG, sedação e sintomas extrapiramidais.",
        es: "Monitorear ECG, sedación y síntomas extrapiramidales."
      }
    },

    "ziprasidona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Combinação de alto risco para prolongamento do QT e torsades de pointes.",
        es: "Combinación de alto riesgo para prolongación del QT y torsades de pointes."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "claritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Claritromicina pode aumentar níveis de trazodona por inibição de CYP3A4 e também somar risco de QT.",
        es: "Claritromicina puede aumentar niveles de trazodona por inhibición de CYP3A4 y también sumar riesgo de QT."
      },
      conduta: {
        pt: "Evitar se possível. Monitorar sedação, hipotensão e ECG se alto risco.",
        es: "Evitar si es posible. Monitorear sedación, hipotensión y ECG si alto riesgo."
      }
    },

    "eritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de trazodona e risco de sedação, hipotensão e QT prolongado.",
        es: "Puede aumentar niveles de trazodona y riesgo de sedación, hipotensión y QT prolongado."
      },
      conduta: {
        pt: "Preferir antibiótico alternativo ou monitorar de perto.",
        es: "Preferir antibiótico alternativo o monitorear de cerca."
      }
    },

    "cetoconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição potente de CYP3A4 pode aumentar exposição à trazodona, elevando risco de sedação, hipotensão e síncope.",
        es: "La inhibición potente de CYP3A4 puede aumentar la exposición a trazodona, elevando riesgo de sedación, hipotensión y síncope."
      },
      conduta: {
        pt: "Evitar associação ou reduzir dose da trazodona.",
        es: "Evitar asociación o reducir dosis de trazodona."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar significativamente os níveis de trazodona por inibição de CYP3A4.",
        es: "Puede aumentar significativamente los niveles de trazodona por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Monitorar sedação, hipotensão, síncope e ajustar dose.",
        es: "Monitorear sedación, hipotensión, síncope y ajustar dosis."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de trazodona e comprometer eficácia.",
        es: "La inducción enzimática puede reducir niveles de trazodona y comprometer eficacia."
      },
      conduta: {
        pt: "Monitorar resposta clínica.",
        es: "Monitorear respuesta clínica."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à trazodona por indução metabólica.",
        es: "Puede reducir exposición a trazodona por inducción metabólica."
      },
      conduta: {
        pt: "Monitorar eficácia clínica.",
        es: "Monitorear eficacia clínica."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Rifampicina pode reduzir níveis de trazodona por indução enzimática.",
        es: "Rifampicina puede reducir niveles de trazodona por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar resposta terapêutica e considerar ajuste.",
        es: "Monitorear respuesta terapéutica y considerar ajuste."
      }
    },

    "$classe_benzodiazepinicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, prejuízo psicomotor, quedas e depressão respiratória em pacientes vulneráveis.",
        es: "Puede potenciar sedación, deterioro psicomotor, caídas y depresión respiratoria en pacientes vulnerables."
      },
      conduta: {
        pt: "Usar menor dose efetiva e monitorar sedação.",
        es: "Usar menor dosis efectiva y monitorear sedación."
      }
    },

    "$classe_opioides": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação profunda, confusão, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación profunda, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, consciência e risco de quedas.",
        es: "Monitorear respiración, conciencia y riesgo de caídas."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sonolência, lentificação psicomotora e risco de quedas.",
        es: "Potenciación de somnolencia, enlentecimiento psicomotor y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar múltiplos depressores do SNC, principalmente em idosos.",
        es: "Evitar múltiples depresores del SNC, principalmente en ancianos."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Álcool potencializa sedação, prejuízo psicomotor, hipotensão e risco de acidentes.",
        es: "El alcohol potencia sedación, deterioro psicomotor, hipotensión y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar álcool.",
        es: "Evitar alcohol."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Trazodona pode causar hipotensão ortostática; associação com anti-hipertensivos aumenta risco de tontura, quedas e síncope.",
        es: "Trazodona puede causar hipotensión ortostática; la asociación con antihipertensivos aumenta riesgo de mareos, caídas y síncope."
      },
      conduta: {
        pt: "Monitorar PA ortostática e quedas, especialmente no início do tratamento.",
        es: "Monitorear PA ortostática y caídas, especialmente al inicio del tratamiento."
      }
    },

    "nitratos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode haver hipotensão aditiva e síncope.",
        es: "Puede haber hipotensión aditiva y síncope."
      },
      conduta: {
        pt: "Monitorar pressão arterial, tontura e síncope.",
        es: "Monitorear presión arterial, mareos y síncope."
      }
    },

    "sildenafila": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de hipotensão e, raramente, priapismo em pacientes suscetíveis.",
        es: "Puede aumentar riesgo de hipotensión y, raramente, priapismo en pacientes susceptibles."
      },
      conduta: {
        pt: "Orientar hipotensão e procurar atendimento se ereção dolorosa/prolongada.",
        es: "Orientar hipotensión y consultar si erección dolorosa/prolongada."
      }
    },

    "tadalafila": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode somar hipotensão e há alerta clínico para priapismo com trazodona.",
        es: "Puede sumar hipotensión y existe alerta clínico para priapismo con trazodona."
      },
      conduta: {
        pt: "Orientar sinais de hipotensão e priapismo.",
        es: "Orientar signos de hipotensión y priapismo."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     VORTIOXETINA — Antidepressivo multimodal serotoninérgico (Atípico 1B)
     Mecanismo: inibidor de recaptação de serotonina + modulador de receptores
                5-HT1A (agonista), 5-HT1B (agonista parcial), 5-HT3/5-HT7 (antagonista)
     Perfil: baixo potencial de QT; substrato CYP2D6 (inibição → ↑exposição)
     $classe_depressoras_snc e $classe_qt: leve(2) — perfil favorável
  ───────────────────────────────────────────────────────────── */
  "vortioxetina": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave e potencialmente fatal.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico grave y potencialmente fatal."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias.",
        es: "No asociar. Respetar intervalo mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida pode precipitar síndrome serotoninérgica por efeito IMAO reversível.",
        es: "Linezolid puede precipitar síndrome serotoninérgico por efecto IMAO reversible."
      },
      conduta: {
        pt: "Evitar associação. Se indispensável, suspender vortioxetina e monitorar.",
        es: "Evitar asociación. Si es indispensable, suspender vortioxetina y monitorear."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar síndrome serotoninérgica por atividade IMAO.",
        es: "Puede causar síndrome serotoninérgico por actividad IMAO."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Vortioxetina modula vias serotoninérgicas; associação com outros serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "Vortioxetina modula vías serotoninérgicas; la asociación con otros serotoninérgicos aumenta riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre, diarreia, agitação e confusão.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre, diarrea, agitación y confusión."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica, especialmente em automedicação.",
        es: "Puede precipitar síndrome serotoninérgico, especialmente en automedicación."
      },
      conduta: {
        pt: "Evitar xaropes com dextrometorfano.",
        es: "Evitar jarabes con dextrometorfano."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico e neurotoxicidade.",
        es: "Puede aumentar riesgo serotoninérgico y neurotoxicidad."
      },
      conduta: {
        pt: "Monitorar tremor, hiperreflexia, confusão e litemia se indicado.",
        es: "Monitorear temblor, hiperreflexia, confusión y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico, principalmente em combinações múltiplas.",
        es: "Puede aumentar riesgo serotoninérgico, principalmente en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta e monitorar.",
        es: "Orientar signos de alerta y monitorear."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico/Erva de São João aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico/Hierba de San Juan aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar associação."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Fármacos serotoninérgicos podem aumentar risco de sangramento gastrointestinal com AINEs.",
        es: "Los fármacos serotoninérgicos pueden aumentar riesgo de sangrado gastrointestinal con AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado e considerar gastroproteção em alto risco.",
        es: "Evitar uso prolongado y considerar gastroprotección en alto riesgo."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sangramento por efeito plaquetário serotoninérgico.",
        es: "Puede aumentar riesgo de sangrado por efecto plaquetario serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sangramentos; se varfarina, monitorar INR.",
        es: "Monitorear sangrados; si warfarina, monitorear INR."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento com antiagregantes plaquetários.",
        es: "Puede aumentar riesgo de sangrado con antiagregantes plaquetarios."
      },
      conduta: {
        pt: "Monitorar epistaxe, equimoses, melena e anemia.",
        es: "Monitorear epistaxis, equimosis, melena y anemia."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Bupropiona inibe CYP2D6 e pode aumentar exposição à vortioxetina, elevando náuseas, tontura, insônia e risco serotoninérgico.",
        es: "Bupropión inhibe CYP2D6 y puede aumentar exposición a vortioxetina, elevando náuseas, mareos, insomnio y riesgo serotoninérgico."
      },
      conduta: {
        pt: "Considerar reduzir dose da vortioxetina e monitorar efeitos adversos.",
        es: "Considerar reducir dosis de vortioxetina y monitorear efectos adversos."
      }
    },

    "fluoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluoxetina inibe CYP2D6 e soma efeito serotoninérgico, podendo aumentar exposição e toxicidade da vortioxetina.",
        es: "Fluoxetina inhibe CYP2D6 y suma efecto serotoninérgico, pudiendo aumentar exposición y toxicidad de vortioxetina."
      },
      conduta: {
        pt: "Evitar sobreposição sem washout adequado. Monitorar efeitos adversos.",
        es: "Evitar superposición sin washout adecuado. Monitorear efectos adversos."
      }
    },

    "paroxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Paroxetina pode aumentar níveis de vortioxetina por forte inibição de CYP2D6.",
        es: "Paroxetina puede aumentar niveles de vortioxetina por fuerte inhibición de CYP2D6."
      },
      conduta: {
        pt: "Considerar reduzir dose da vortioxetina.",
        es: "Considerar reducir dosis de vortioxetina."
      }
    },

    "quinidina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibidor potente de CYP2D6; pode aumentar exposição à vortioxetina.",
        es: "Inhibidor potente de CYP2D6; puede aumentar exposición a vortioxetina."
      },
      conduta: {
        pt: "Monitorar efeitos adversos e considerar ajuste de dose.",
        es: "Monitorear efectos adversos y considerar ajuste de dosis."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de vortioxetina e comprometer eficácia.",
        es: "La inducción enzimática puede reducir niveles de vortioxetina y comprometer eficacia."
      },
      conduta: {
        pt: "Monitorar resposta antidepressiva.",
        es: "Monitorear respuesta antidepresiva."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à vortioxetina por indução metabólica.",
        es: "Puede reducir exposición a vortioxetina por inducción metabólica."
      },
      conduta: {
        pt: "Monitorar resposta clínica e considerar ajuste.",
        es: "Monitorear respuesta clínica y considerar ajuste."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de vortioxetina.",
        es: "La inducción enzimática puede reducir niveles de vortioxetina."
      },
      conduta: {
        pt: "Monitorar eficácia antidepressiva.",
        es: "Monitorear eficacia antidepresiva."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Pode haver aumento de tontura, sonolência ou prejuízo psicomotor em alguns pacientes.",
        es: "Puede haber aumento de mareos, somnolencia o deterioro psicomotor en algunos pacientes."
      },
      conduta: {
        pt: "Orientar cautela ao dirigir ou operar máquinas.",
        es: "Orientar precaución al conducir u operar máquinas."
      }
    },

    "$classe_qt": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Vortioxetina tem baixo potencial de QT, mas múltiplos fatores de risco podem justificar monitorização.",
        es: "Vortioxetina tiene bajo potencial de QT, pero múltiples factores de riesgo pueden justificar monitoreo."
      },
      conduta: {
        pt: "Considerar ECG apenas se alto risco clínico ou polifarmácia pró-arrítmica.",
        es: "Considerar ECG solo si alto riesgo clínico o polifarmacia proarrítmica."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     AGOMELATINA — Antidepressivo melatoninérgico / antagonista 5-HT2C (Atípico 1C)
     Mecanismo: agonista MT1/MT2, antagonista 5-HT2C; sem ação serotoninérgica de recaptação
     Perfil: hepatotóxico dose-dependente; metabolismo via CYP1A2 (principal) e CYP2C9
     Fluvoxamina / ciprofloxacino / enoxacino: contraindicados(5) — inibição CYP1A2
     Sem interação IMAO clinicamente relevante (não serotoninérgico)
  ───────────────────────────────────────────────────────────── */
  "agomelatina": {

    "fluvoxamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Fluvoxamina inibe fortemente CYP1A2 e pode aumentar muito os níveis de agomelatina, elevando risco de hepatotoxicidade.",
        es: "Fluvoxamina inhibe fuertemente CYP1A2 y puede aumentar mucho los niveles de agomelatina, elevando el riesgo de hepatotoxicidad."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "ciprofloxacino": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Ciprofloxacino é inibidor de CYP1A2 e pode elevar significativamente a exposição à agomelatina.",
        es: "Ciprofloxacino es inhibidor de CYP1A2 y puede elevar significativamente la exposición a agomelatina."
      },
      conduta: {
        pt: "Evitar associação. Escolher antibiótico alternativo quando possível.",
        es: "Evitar asociación. Elegir antibiótico alternativo cuando sea posible."
      }
    },

    "enoxacino": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição potente de CYP1A2 com aumento importante da concentração de agomelatina.",
        es: "Inhibición potente de CYP1A2 con aumento importante de la concentración de agomelatina."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "$classe_hepatotoxicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Agomelatina pode causar elevação de transaminases; associação com fármacos hepatotóxicos aumenta risco de lesão hepática.",
        es: "Agomelatina puede causar elevación de transaminasas; la asociación con fármacos hepatotóxicos aumenta el riesgo de lesión hepática."
      },
      conduta: {
        pt: "Monitorar função hepática. Evitar em hepatopatia ativa ou transaminases elevadas.",
        es: "Monitorear función hepática. Evitar en hepatopatía activa o transaminasas elevadas."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Álcool aumenta risco de hepatotoxicidade e pode piorar sintomas depressivos e sono.",
        es: "El alcohol aumenta riesgo de hepatotoxicidad y puede empeorar síntomas depresivos y sueño."
      },
      conduta: {
        pt: "Evitar consumo de álcool durante tratamento.",
        es: "Evitar consumo de alcohol durante el tratamiento."
      }
    },

    "paracetamol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Uso frequente ou em altas doses pode somar risco hepático com agomelatina.",
        es: "El uso frecuente o en dosis altas puede sumar riesgo hepático con agomelatina."
      },
      conduta: {
        pt: "Evitar doses altas/prolongadas. Monitorar transaminases se uso recorrente.",
        es: "Evitar dosis altas/prolongadas. Monitorear transaminasas si el uso es recurrente."
      }
    },

    "isoniazida": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A isoniazida é hepatotóxica e pode aumentar risco de lesão hepática quando associada à agomelatina.",
        es: "La isoniazida es hepatotóxica y puede aumentar el riesgo de lesión hepática cuando se asocia con agomelatina."
      },
      conduta: {
        pt: "Evitar se possível. Monitorar TGO/TGP e sintomas hepáticos.",
        es: "Evitar si es posible. Monitorear AST/ALT y síntomas hepáticos."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Rifampicina pode reduzir níveis de agomelatina por indução enzimática e também possui risco hepático próprio.",
        es: "Rifampicina puede reducir niveles de agomelatina por inducción enzimática y también posee riesgo hepático propio."
      },
      conduta: {
        pt: "Monitorar eficácia antidepressiva e função hepática.",
        es: "Monitorear eficacia antidepresiva y función hepática."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à agomelatina por indução enzimática e somar risco hepático.",
        es: "Puede reducir exposición a agomelatina por inducción enzimática y sumar riesgo hepático."
      },
      conduta: {
        pt: "Monitorar resposta clínica e transaminases.",
        es: "Monitorear respuesta clínica y transaminasas."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de agomelatina; fenitoína também pode causar toxicidade hepática.",
        es: "La inducción enzimática puede reducir niveles de agomelatina; fenitoína también puede causar toxicidad hepática."
      },
      conduta: {
        pt: "Monitorar eficácia e função hepática.",
        es: "Monitorear eficacia y función hepática."
      }
    },

    "fenobarbital": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir níveis de agomelatina por indução metabólica.",
        es: "Puede reducir niveles de agomelatina por inducción metabólica."
      },
      conduta: {
        pt: "Monitorar resposta antidepressiva.",
        es: "Monitorear respuesta antidepresiva."
      }
    },

    "estrogenos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Estrogênios podem inibir CYP1A2 de forma moderada e aumentar exposição à agomelatina.",
        es: "Los estrógenos pueden inhibir CYP1A2 de forma moderada y aumentar exposición a agomelatina."
      },
      conduta: {
        pt: "Monitorar eventos adversos e função hepática se houver fatores de risco.",
        es: "Monitorear eventos adversos y función hepática si hay factores de riesgo."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Pode haver aumento de sonolência ou tontura em alguns pacientes.",
        es: "Puede haber aumento de somnolencia o mareos en algunos pacientes."
      },
      conduta: {
        pt: "Orientar cautela ao dirigir no início do tratamento.",
        es: "Orientar precaución al conducir al inicio del tratamiento."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     VILAZODONA — Antidepressivo ISRS + agonista parcial 5-HT1A (Atípico 1C)
     Mecanismo: inibidor de recaptação de serotonina + agonista parcial 5-HT1A (buspirone-like)
     Perfil: substrato CYP3A4 (principal); perfil serotoninérgico similar a ISRS
     tramadol / hipérico: contraindicados(5); CYP3A4: cetoconazol/itraconazol/claritromicina/ritonavir→alta(4)
  ───────────────────────────────────────────────────────────── */
  "vilazodona": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação aumenta risco de síndrome serotoninérgica grave, hipertermia, rigidez, instabilidade autonômica e morte.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico grave, hipertermia, rigidez, inestabilidad autonómica y muerte."
      },
      conduta: {
        pt: "Não associar. Respeitar intervalo mínimo de 14 dias.",
        es: "No asociar. Respetar intervalo mínimo de 14 días."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode precipitar síndrome serotoninérgica grave.",
        es: "Linezolid posee actividad IMAO reversible y puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica potencialmente fatal.",
        es: "Puede precipitar síndrome serotoninérgico potencialmente fatal."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Vilazodona tem ação serotoninérgica; combinação com outros serotoninérgicos aumenta risco de síndrome serotoninérgica.",
        es: "Vilazodona tiene acción serotoninérgica; la combinación con otros serotoninérgicos aumenta el riesgo de síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar clônus, hiperreflexia, tremor, febre, diarreia, agitação e confusão.",
        es: "Monitorear clonus, hiperreflexia, temblor, fiebre, diarrea, agitación y confusión."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dextrometorfano": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica, especialmente em automedicação com xaropes.",
        es: "Puede precipitar síndrome serotoninérgico, especialmente en automedicación con jarabes."
      },
      conduta: {
        pt: "Evitar automedicação.",
        es: "Evitar automedicación."
      }
    },

    "litio": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de neurotoxicidade e síndrome serotoninérgica.",
        es: "Puede aumentar riesgo de neurotoxicidad y síndrome serotoninérgico."
      },
      conduta: {
        pt: "Monitorar tremor, hiperreflexia, confusão e litemia se indicado.",
        es: "Monitorear temblor, hiperreflexia, confusión y litemia si está indicado."
      }
    },

    "$classe_triptanos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco serotoninérgico, principalmente em combinações múltiplas.",
        es: "Puede aumentar riesgo serotoninérgico, principalmente en combinaciones múltiples."
      },
      conduta: {
        pt: "Orientar sinais de alerta.",
        es: "Orientar signos de alerta."
      }
    },

    "hiperico": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Hipérico/Erva de São João aumenta atividade serotoninérgica e pode precipitar síndrome serotoninérgica.",
        es: "Hipérico/Hierba de San Juan aumenta actividad serotoninérgica y puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar associação."
      }
    },

    "$classe_aines": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Fármacos serotoninérgicos podem aumentar risco de sangramento gastrointestinal quando associados a AINEs.",
        es: "Los fármacos serotoninérgicos pueden aumentar riesgo de sangrado gastrointestinal cuando se asocian con AINEs."
      },
      conduta: {
        pt: "Evitar uso prolongado e considerar gastroproteção em pacientes de risco.",
        es: "Evitar uso prolongado y considerar gastroprotección en pacientes de riesgo."
      }
    },

    "$classe_anticoagulantes": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sangramento por efeito plaquetário serotoninérgico.",
        es: "Puede aumentar riesgo de sangrado por efecto plaquetario serotoninérgico."
      },
      conduta: {
        pt: "Monitorar sangramentos; se varfarina, monitorar INR.",
        es: "Monitorear sangrados; si warfarina, monitorear INR."
      }
    },

    "$classe_antiagregantes": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar risco de sangramento com antiagregantes.",
        es: "Puede aumentar riesgo de sangrado con antiagregantes."
      },
      conduta: {
        pt: "Monitorar epistaxe, equimoses, melena e anemia.",
        es: "Monitorear epistaxis, equimosis, melena y anemia."
      }
    },

    "cetoconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibidor forte de CYP3A4 pode aumentar níveis de vilazodona e eventos adversos serotoninérgicos.",
        es: "Inhibidor fuerte de CYP3A4 puede aumentar niveles de vilazodona y eventos adversos serotoninérgicos."
      },
      conduta: {
        pt: "Considerar redução de dose da vilazodona e monitorar náuseas, tontura e agitação.",
        es: "Considerar reducción de dosis de vilazodona y monitorear náuseas, mareos y agitación."
      }
    },

    "itraconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição à vilazodona por inibição de CYP3A4.",
        es: "Puede aumentar exposición a vilazodona por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Monitorar efeitos adversos e considerar ajuste de dose.",
        es: "Monitorear efectos adversos y considerar ajuste de dosis."
      }
    },

    "claritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de vilazodona por inibição de CYP3A4.",
        es: "Puede aumentar niveles de vilazodona por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Preferir antibiótico alternativo ou monitorar toxicidade.",
        es: "Preferir antibiótico alternativo o monitorear toxicidad."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição potente de CYP3A4 pode aumentar significativamente exposição à vilazodona.",
        es: "La inhibición potente de CYP3A4 puede aumentar significativamente la exposición a vilazodona."
      },
      conduta: {
        pt: "Considerar redução de dose e monitorar efeitos adversos.",
        es: "Considerar reducción de dosis y monitorear efectos adversos."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução de CYP3A4 pode reduzir níveis de vilazodona e comprometer eficácia antidepressiva.",
        es: "La inducción de CYP3A4 puede reducir niveles de vilazodona y comprometer eficacia antidepresiva."
      },
      conduta: {
        pt: "Monitorar resposta clínica e considerar ajuste.",
        es: "Monitorear respuesta clínica y considerar ajuste."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à vilazodona por indução enzimática.",
        es: "Puede reducir exposición a vilazodona por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar eficácia clínica.",
        es: "Monitorear eficacia clínica."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indutor potente de CYP3A4; pode reduzir níveis de vilazodona e resposta antidepressiva.",
        es: "Inductor potente de CYP3A4; puede reducir niveles de vilazodona y respuesta antidepresiva."
      },
      conduta: {
        pt: "Monitorar resposta terapêutica.",
        es: "Monitorear respuesta terapéutica."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Pode haver aumento de tontura, sonolência ou prejuízo psicomotor em alguns pacientes.",
        es: "Puede haber aumento de mareos, somnolencia o deterioro psicomotor en algunos pacientes."
      },
      conduta: {
        pt: "Orientar cautela ao dirigir ou operar máquinas.",
        es: "Orientar precaución al conducir u operar máquinas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     REBOXETINA — Antidepressivo ISRN seletivo (Atípico 1D)
     Mecanismo: inibidor seletivo de recaptação de noradrenalina (NRI puro)
     Perfil: ativador, pró-hipertensivo, sem ação serotoninérgica; substrato CYP3A4
     IMAOs + linezo + azul: contraindicados(5); simpatomimeticos: alta(4)
  ───────────────────────────────────────────────────────────── */
  "reboxetina": {

    "$classe_imaos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação pode causar excesso noradrenérgico e serotoninérgico, com risco de crise hipertensiva, agitação, hipertermia e eventos cardiovasculares graves.",
        es: "La asociación puede causar exceso noradrenérgico y serotoninérgico, con riesgo de crisis hipertensiva, agitación, hipertermia y eventos cardiovasculares graves."
      },
      conduta: {
        pt: "Não associar. Respeitar washout adequado entre IMAO e reboxetina.",
        es: "No asociar. Respetar washout adecuado entre IMAO y reboxetina."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Linezolida possui atividade IMAO reversível e pode aumentar risco de hipertensão, agitação e toxicidade autonômica.",
        es: "Linezolid posee actividad IMAO reversible y puede aumentar el riesgo de hipertensión, agitación y toxicidad autonómica."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode atuar como IMAO e precipitar toxicidade autonômica grave.",
        es: "Puede actuar como IMAO y precipitar toxicidad autonómica grave."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_simpatomimeticos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode haver efeito noradrenérgico aditivo com aumento de pressão arterial, taquicardia, ansiedade e tremor.",
        es: "Puede haber efecto noradrenérgico aditivo con aumento de presión arterial, taquicardia, ansiedad y temblor."
      },
      conduta: {
        pt: "Monitorar PA, FC, ansiedade, tremor e insônia.",
        es: "Monitorear PA, FC, ansiedad, temblor e insomnio."
      }
    },

    "pseudoefedrina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar significativamente pressão arterial, taquicardia e risco de palpitações.",
        es: "Puede aumentar significativamente presión arterial, taquicardia y riesgo de palpitaciones."
      },
      conduta: {
        pt: "Evitar em hipertensos, cardiopatas ou pacientes ansiosos.",
        es: "Evitar en hipertensos, cardiópatas o pacientes ansiosos."
      }
    },

    "fenilefrina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização vasoconstritora pode causar hipertensão e taquicardia reflexa.",
        es: "Potenciación vasoconstrictora puede causar hipertensión y taquicardia refleja."
      },
      conduta: {
        pt: "Evitar uso sistêmico ou monitorar PA.",
        es: "Evitar uso sistémico o monitorear PA."
      }
    },

    "anfetamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito estimulante aditivo pode causar hipertensão, taquicardia, agitação e insônia intensa.",
        es: "Efecto estimulante aditivo puede causar hipertensión, taquicardia, agitación e insomnio intenso."
      },
      conduta: {
        pt: "Evitar doses altas. Monitorar PA, FC e comportamento.",
        es: "Evitar dosis altas. Monitorear PA, FC y comportamiento."
      }
    },

    "metilfenidato": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar pressão arterial, frequência cardíaca, ansiedade e risco de ativação.",
        es: "Puede aumentar presión arterial, frecuencia cardíaca, ansiedad y riesgo de activación."
      },
      conduta: {
        pt: "Monitorar PA e FC, especialmente no início ou ajuste de dose.",
        es: "Monitorear PA y FC, especialmente al inicio o ajuste de dosis."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Efeito noradrenérgico aditivo pode causar hipertensão, taquicardia, irritabilidade e insônia.",
        es: "Efecto noradrenérgico aditivo puede causar hipertensión, taquicardia, irritabilidad e insomnio."
      },
      conduta: {
        pt: "Evitar combinação ou monitorar PA/FC rigorosamente.",
        es: "Evitar combinación o monitorear PA/FC rigurosamente."
      }
    },

    "ketoconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibidores potentes de CYP3A4 podem aumentar níveis de reboxetina e efeitos adversos.",
        es: "Inhibidores potentes de CYP3A4 pueden aumentar niveles de reboxetina y efectos adversos."
      },
      conduta: {
        pt: "Monitorar taquicardia, insônia, boca seca, retenção urinária e hipertensão.",
        es: "Monitorear taquicardia, insomnio, boca seca, retención urinaria e hipertensión."
      }
    },

    "bupropiona": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode somar ativação noradrenérgica, ansiedade, insônia, hipertensão e risco convulsivo em predispostos.",
        es: "Puede sumar activación noradrenérgica, ansiedad, insomnio, hipertensión y riesgo convulsivo en predispuestos."
      },
      conduta: {
        pt: "Monitorar PA, ansiedade, insônia e eventos neurológicos.",
        es: "Monitorear PA, ansiedad, insomnio y eventos neurológicos."
      }
    },

    "venlafaxina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode somar efeito noradrenérgico e aumentar pressão arterial, palpitações e ansiedade.",
        es: "Puede sumar efecto noradrenérgico y aumentar presión arterial, palpitaciones y ansiedad."
      },
      conduta: {
        pt: "Monitorar PA e sintomas de ativação.",
        es: "Monitorear PA y síntomas de activación."
      }
    },

    "duloxetina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Associação pode aumentar efeito noradrenérgico e risco de hipertensão ou taquicardia.",
        es: "La asociación puede aumentar efecto noradrenérgico y riesgo de hipertensión o taquicardia."
      },
      conduta: {
        pt: "Monitorar PA, FC e ansiedade.",
        es: "Monitorear PA, FC y ansiedad."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Reboxetina pode elevar pressão arterial e dificultar controle pressórico em alguns pacientes.",
        es: "Reboxetina puede elevar presión arterial y dificultar control tensional en algunos pacientes."
      },
      conduta: {
        pt: "Monitorar PA antes e durante o tratamento.",
        es: "Monitorear PA antes y durante el tratamiento."
      }
    },

    "clonidina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode interferir no controle pressórico e somar risco de instabilidade autonômica.",
        es: "Puede interferir en el control tensional y sumar riesgo de inestabilidad autonómica."
      },
      conduta: {
        pt: "Monitorar pressão arterial e sintomas adrenérgicos.",
        es: "Monitorear presión arterial y síntomas adrenérgicos."
      }
    },

    "claritromicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar exposição à reboxetina por inibição de CYP3A4.",
        es: "Puede aumentar exposición a reboxetina por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Monitorar efeitos adversos noradrenérgicos.",
        es: "Monitorear efectos adversos noradrenérgicos."
      }
    },

    "ritonavir": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar níveis de reboxetina por inibição metabólica.",
        es: "Puede aumentar niveles de reboxetina por inhibición metabólica."
      },
      conduta: {
        pt: "Monitorar PA, FC e efeitos adversos.",
        es: "Monitorear PA, FC y efectos adversos."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de reboxetina e comprometer resposta clínica.",
        es: "La inducción enzimática puede reducir niveles de reboxetina y comprometer respuesta clínica."
      },
      conduta: {
        pt: "Monitorar eficácia antidepressiva.",
        es: "Monitorear eficacia antidepresiva."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir exposição à reboxetina por indução enzimática.",
        es: "Puede reducir exposición a reboxetina por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar resposta terapêutica.",
        es: "Monitorear respuesta terapéutica."
      }
    },

    "metoprolol": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Pode haver antagonismo clínico parcial por aumento noradrenérgico, com palpitações ou elevação de PA.",
        es: "Puede haber antagonismo clínico parcial por aumento noradrenérgico, con palpitaciones o elevación de PA."
      },
      conduta: {
        pt: "Monitorar PA, FC e sintomas.",
        es: "Monitorear PA, FC y síntomas."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "A reboxetina geralmente não é sedativa, mas pode causar tontura em alguns pacientes quando combinada com depressores do SNC.",
        es: "Reboxetina generalmente no es sedativa, pero puede causar mareos en algunos pacientes cuando se combina con depresores del SNC."
      },
      conduta: {
        pt: "Orientar cautela se houver tontura ou prejuízo psicomotor.",
        es: "Orientar precaución si hay mareos o deterioro psicomotor."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     FENELZINA — IMAO irreversível não-seletivo (IMAO 1)
     Mecanismo: inibição irreversível de MAO-A e MAO-B
     Perfil: múltiplas contraindicações críticas; dieta com restrição de tiramina obrigatória
     Meperidina: contraindicação clássica e absoluta (5)
     $classe_isrs / $classe_isrn / $classe_triciclicos / $classe_serotoninergicos: contraindicados(5)
  ───────────────────────────────────────────────────────────── */
  "fenelzina": {

    "$classe_isrs": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "IMAO irreversível associado a ISRS pode causar síndrome serotoninérgica grave, hipertermia, rigidez, instabilidade autonômica, convulsões e morte.",
        es: "IMAO irreversible asociado a ISRS puede causar síndrome serotoninérgico grave, hipertermia, rigidez, inestabilidad autonómica, convulsiones y muerte."
      },
      conduta: {
        pt: "Não associar. Respeitar washout adequado, especialmente com fluoxetina.",
        es: "No asociar. Respetar washout adecuado, especialmente con fluoxetina."
      }
    },

    "$classe_isrn": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com ISRN aumenta risco de síndrome serotoninérgica e crise hipertensiva.",
        es: "La asociación con ISRN aumenta riesgo de síndrome serotoninérgico y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "$classe_triciclicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica, crise hipertensiva, hipertermia e arritmias.",
        es: "Puede causar toxicidad serotoninérgica, crisis hipertensiva, hipertermia y arritmias."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A fenelzina inibe MAO e pode precipitar síndrome serotoninérgica grave quando combinada a serotoninérgicos.",
        es: "Fenelzina inhibe MAO y puede precipitar síndrome serotoninérgico grave cuando se combina con serotoninérgicos."
      },
      conduta: {
        pt: "Evitar associação. Monitorização hospitalar se exposição acidental.",
        es: "Evitar asociación. Monitoreo hospitalario si exposición accidental."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Ambos possuem atividade IMAO, com risco extremo de crise hipertensiva e toxicidade serotoninérgica.",
        es: "Ambos poseen actividad IMAO, con riesgo extremo de crisis hipertensiva y toxicidad serotoninérgica."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica e autonômica grave por efeito IMAO aditivo.",
        es: "Puede causar toxicidad serotoninérgica y autonómica grave por efecto IMAO aditivo."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de síndrome serotoninérgica, convulsões, hipertensão e depressão respiratória imprevisível.",
        es: "Riesgo de síndrome serotoninérgico, convulsiones, hipertensión y depresión respiratoria imprevisible."
      },
      conduta: {
        pt: "Não associar. Preferir analgésico não serotoninérgico.",
        es: "No asociar. Preferir analgésico no serotoninérgico."
      }
    },

    "meperidina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Associação clássica e perigosa com IMAO, podendo causar hipertermia, rigidez, colapso cardiovascular, coma e morte.",
        es: "Asociación clásica y peligrosa con IMAO, pudiendo causar hipertermia, rigidez, colapso cardiovascular, coma y muerte."
      },
      conduta: {
        pt: "Contraindicado absoluto.",
        es: "Contraindicado absoluto."
      }
    },

    "metadona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica e depressão do SNC/respiratória imprevisível.",
        es: "Puede causar toxicidad serotoninérgica y depresión del SNC/respiratoria imprevisible."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dextrometorfano": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica grave.",
        es: "Puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar xaropes contendo dextrometorfano.",
        es: "Evitar jarabes que contengan dextrometorfano."
      }
    },

    "$classe_simpatomimeticos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Simpatomiméticos podem causar crise hipertensiva grave quando associados a IMAO.",
        es: "Los simpaticomiméticos pueden causar crisis hipertensiva grave cuando se asocian a IMAO."
      },
      conduta: {
        pt: "Não associar. Evitar descongestionantes e estimulantes.",
        es: "No asociar. Evitar descongestionantes y estimulantes."
      }
    },

    "pseudoefedrina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de crise hipertensiva potencialmente fatal.",
        es: "Riesgo de crisis hipertensiva potencialmente fatal."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "fenilefrina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Vasoconstrição exagerada com risco de hipertensão grave, cefaleia intensa, AVC ou arritmia.",
        es: "Vasoconstricción exagerada con riesgo de hipertensión grave, cefalea intensa, ACV o arritmia."
      },
      conduta: {
        pt: "Evitar uso sistêmico e cautela até com formulações nasais.",
        es: "Evitar uso sistémico y precaución incluso con formulaciones nasales."
      }
    },

    "anfetamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco extremo de crise hipertensiva, hipertermia, agitação e eventos cardiovasculares.",
        es: "Riesgo extremo de crisis hipertensiva, hipertermia, agitación y eventos cardiovasculares."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "metilfenidato": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar hipertensão grave, taquicardia e agitação intensa.",
        es: "Puede causar hipertensión grave, taquicardia y agitación intensa."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "atomoxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Excesso noradrenérgico com risco de crise hipertensiva e taquiarritmias.",
        es: "Exceso noradrenérgico con riesgo de crisis hipertensiva y taquiarritmias."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "bupropiona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar reação hipertensiva grave e aumentar risco convulsivo.",
        es: "Puede causar reacción hipertensiva grave y aumentar riesgo convulsivo."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "levodopa_carbidopa": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar crise hipertensiva e agitação por excesso catecolaminérgico.",
        es: "Puede precipitar crisis hipertensiva y agitación por exceso catecolaminérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dopamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de resposta pressórica exagerada e arritmias.",
        es: "Riesgo de respuesta presora exagerada y arritmias."
      },
      conduta: {
        pt: "Usar apenas em emergência com monitorização intensiva se inevitável.",
        es: "Usar solo en emergencia con monitoreo intensivo si es inevitable."
      }
    },

    "tiramina_alimentos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alimentos ricos em tiramina podem causar crise hipertensiva grave durante uso de IMAO irreversível.",
        es: "Alimentos ricos en tiramina pueden causar crisis hipertensiva grave durante uso de IMAO irreversible."
      },
      conduta: {
        pt: "Orientar dieta com restrição de tiramina: queijos curados, embutidos, fermentados, vinho tinto e cervejas artesanais.",
        es: "Orientar dieta con restricción de tiramina: quesos curados, embutidos, fermentados, vino tinto y cervezas artesanales."
      }
    },

    "fentanil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de síndrome serotoninérgica e depressão respiratória em contexto perioperatório.",
        es: "Puede aumentar riesgo de síndrome serotoninérgico y depresión respiratoria en contexto perioperatorio."
      },
      conduta: {
        pt: "Evitar se possível. Se usado, monitorar em ambiente controlado.",
        es: "Evitar si es posible. Si se usa, monitorear en ambiente controlado."
      }
    },

    "adrenalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode haver resposta hipertensiva e arritmogênica aumentada.",
        es: "Puede haber respuesta hipertensiva y arritmogénica aumentada."
      },
      conduta: {
        pt: "Usar menor dose efetiva em emergência e monitorar ECG/PA.",
        es: "Usar menor dosis efectiva en emergencia y monitorear ECG/PA."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão e risco de crise hipertensiva se bebida contiver tiramina.",
        es: "Puede aumentar sedación, hipotensión y riesgo de crisis hipertensiva si la bebida contiene tiramina."
      },
      conduta: {
        pt: "Evitar álcool, especialmente bebidas fermentadas.",
        es: "Evitar alcohol, especialmente bebidas fermentadas."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão ortostática, quedas e prejuízo psicomotor.",
        es: "Puede aumentar sedación, hipotensión ortostática, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática e quedas.",
        es: "Monitorear sedación, PA ortostática y caídas."
      }
    },

    "$classe_antihipertensivos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode causar hipotensão ortostática aditiva ou instabilidade pressórica.",
        es: "Puede causar hipotensión ortostática aditiva o inestabilidad tensional."
      },
      conduta: {
        pt: "Monitorar PA sentada/em pé e quedas.",
        es: "Monitorear PA sentado/de pie y caídas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     TRANILCIPROMINA — IMAO irreversível não-seletivo (IMAO 2)
     Mecanismo: inibição irreversível de MAO-A e MAO-B; efeito anfetamínico residual
     Perfil: similar à fenelzina; dieta com restrição de tiramina obrigatória
     Perfil de contraindicações idêntico à fenelzina para classes maiores
  ───────────────────────────────────────────────────────────── */
  "tranilcipromina": {

    "$classe_isrs": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com ISRS pode causar síndrome serotoninérgica grave, hipertermia, rigidez, instabilidade autonômica, convulsões e morte.",
        es: "La asociación con ISRS puede causar síndrome serotoninérgico grave, hipertermia, rigidez, inestabilidad autonómica, convulsiones y muerte."
      },
      conduta: {
        pt: "Não associar. Respeitar washout adequado, especialmente com fluoxetina.",
        es: "No asociar. Respetar washout adecuado, especialmente con fluoxetina."
      }
    },

    "$classe_isrn": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com ISRN aumenta risco de síndrome serotoninérgica e crise hipertensiva.",
        es: "La asociación con ISRN aumenta riesgo de síndrome serotoninérgico y crisis hipertensiva."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "$classe_triciclicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica, crise hipertensiva, hipertermia, convulsões e arritmias.",
        es: "Puede causar toxicidad serotoninérgica, crisis hipertensiva, hipertermia, convulsiones y arritmias."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Tranilcipromina inibe MAO de forma irreversível; a combinação com serotoninérgicos pode ser fatal.",
        es: "Tranilcipromina inhibe MAO de forma irreversible; la combinación con serotoninérgicos puede ser fatal."
      },
      conduta: {
        pt: "Evitar associação. Monitorização hospitalar se exposição acidental.",
        es: "Evitar asociación. Monitoreo hospitalario si exposición accidental."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Ambos possuem atividade IMAO, com risco extremo de crise hipertensiva e toxicidade serotoninérgica.",
        es: "Ambos poseen actividad IMAO, con riesgo extremo de crisis hipertensiva y toxicidad serotoninérgica."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica e autonômica grave por efeito IMAO aditivo.",
        es: "Puede causar toxicidad serotoninérgica y autonómica grave por efecto IMAO aditivo."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco elevado de síndrome serotoninérgica, convulsões, hipertensão e depressão respiratória imprevisível.",
        es: "Alto riesgo de síndrome serotoninérgico, convulsiones, hipertensión y depresión respiratória imprevisible."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "meperidina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Associação clássica com IMAO que pode causar hipertermia, rigidez, colapso cardiovascular, coma e morte.",
        es: "Asociación clásica con IMAO que puede causar hipertermia, rigidez, colapso cardiovascular, coma y muerte."
      },
      conduta: {
        pt: "Contraindicado absoluto.",
        es: "Contraindicado absoluto."
      }
    },

    "metadona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar toxicidade serotoninérgica e depressão respiratória imprevisível.",
        es: "Puede causar toxicidad serotoninérgica y depresión respiratoria imprevisible."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dextrometorfano": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica grave.",
        es: "Puede precipitar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar xaropes contendo dextrometorfano.",
        es: "Evitar jarabes que contengan dextrometorfano."
      }
    },

    "$classe_simpatomimeticos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Simpatomiméticos podem causar crise hipertensiva grave quando associados a IMAO.",
        es: "Los simpaticomiméticos pueden causar crisis hipertensiva grave cuando se asocian a IMAO."
      },
      conduta: {
        pt: "Não associar. Evitar descongestionantes, estimulantes e anorexígenos.",
        es: "No asociar. Evitar descongestionantes, estimulantes y anorexígenos."
      }
    },

    "pseudoefedrina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de crise hipertensiva potencialmente fatal.",
        es: "Riesgo de crisis hipertensiva potencialmente fatal."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "fenilefrina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Vasoconstrição exagerada com risco de hipertensão grave, cefaleia intensa, AVC ou arritmia.",
        es: "Vasoconstricción exagerada con riesgo de hipertensión grave, cefalea intensa, ACV o arritmia."
      },
      conduta: {
        pt: "Evitar uso sistêmico e cautela com formulações nasais.",
        es: "Evitar uso sistémico y precaución con formulaciones nasales."
      }
    },

    "anfetamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco extremo de crise hipertensiva, hipertermia, agitação e eventos cardiovasculares graves.",
        es: "Riesgo extremo de crisis hipertensiva, hipertermia, agitación y eventos cardiovasculares graves."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "metilfenidato": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar hipertensão grave, taquicardia, agitação e arritmias.",
        es: "Puede causar hipertensión grave, taquicardia, agitación y arritmias."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "atomoxetina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Excesso noradrenérgico com risco de crise hipertensiva e taquiarritmias.",
        es: "Exceso noradrenérgico con riesgo de crisis hipertensiva y taquiarritmias."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "bupropiona": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar reação hipertensiva grave e aumentar risco convulsivo.",
        es: "Puede causar reacción hipertensiva grave y aumentar riesgo convulsivo."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "levodopa_carbidopa": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar crise hipertensiva e agitação por excesso catecolaminérgico.",
        es: "Puede precipitar crisis hipertensiva y agitación por exceso catecolaminérgico."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "dopamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de resposta pressórica exagerada e arritmias.",
        es: "Riesgo de respuesta presora exagerada y arritmias."
      },
      conduta: {
        pt: "Usar apenas em emergência com monitorização intensiva se inevitável.",
        es: "Usar solo en emergencia con monitoreo intensivo si es inevitable."
      }
    },

    "adrenalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode haver resposta hipertensiva e arritmogênica aumentada.",
        es: "Puede haber respuesta hipertensiva y arritmogénica aumentada."
      },
      conduta: {
        pt: "Usar menor dose efetiva em emergência e monitorar ECG/PA.",
        es: "Usar menor dosis efectiva en emergencia y monitorear ECG/PA."
      }
    },

    "tiramina_alimentos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Alimentos ricos em tiramina podem causar crise hipertensiva grave durante uso de IMAO irreversível.",
        es: "Alimentos ricos en tiramina pueden causar crisis hipertensiva grave durante uso de IMAO irreversible."
      },
      conduta: {
        pt: "Orientar restrição de tiramina: queijos curados, embutidos, fermentados, vinho tinto e cervejas artesanais.",
        es: "Orientar restricción de tiramina: quesos curados, embutidos, fermentados, vino tinto y cervezas artesanales."
      }
    },

    "alcool": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão e risco de crise hipertensiva se bebida contiver tiramina.",
        es: "Puede aumentar sedación, hipotensión y riesgo de crisis hipertensiva si la bebida contiene tiramina."
      },
      conduta: {
        pt: "Evitar álcool, especialmente bebidas fermentadas.",
        es: "Evitar alcohol, especialmente bebidas fermentadas."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão ortostática, quedas e prejuízo psicomotor.",
        es: "Puede aumentar sedación, hipotensión ortostática, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática e quedas.",
        es: "Monitorear sedación, PA ortostática y caídas."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     MOCLOBEMIDA — IMAO-A reversível seletivo (IMAO 3)
     Mecanismo: inibição reversível e seletiva de MAO-A (RIMA)
     Perfil: menor risco de crise hipertensiva vs. IMAOs irreversíveis;
             restrição alimentar de tiramina moderada (não absoluta)
             $classe_triciclicos → alta(4) [não contraindicada]
             $classe_simpatomimeticos → alta(4) [não contraindicada]
             tiramina_alimentos → moderada(3) [diferencial clínico chave]
  ───────────────────────────────────────────────────────────── */
  "moclobemida": {

    "$classe_isrs": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Mesmo sendo IMAO-A reversível, a associação com ISRS pode causar síndrome serotoninérgica grave.",
        es: "Aunque es IMAO-A reversible, la asociación con ISRS puede causar síndrome serotoninérgico grave."
      },
      conduta: {
        pt: "Evitar associação. Respeitar washout conforme fármaco anterior.",
        es: "Evitar asociación. Respetar washout según el fármaco previo."
      }
    },

    "$classe_isrn": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Associação aumenta risco de síndrome serotoninérgica e hipertensão.",
        es: "La asociación aumenta riesgo de síndrome serotoninérgico e hipertensión."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_triciclicos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar toxicidade serotoninérgica, noradrenérgica e cardiovascular.",
        es: "Puede aumentar toxicidad serotoninérgica, noradrenérgica y cardiovascular."
      },
      conduta: {
        pt: "Evitar associação ou fazer troca com washout e supervisão.",
        es: "Evitar asociación o hacer cambio con washout y supervisión."
      }
    },

    "$classe_serotoninergicos": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Moclobemida aumenta disponibilidade de monoaminas; associação com serotoninérgicos pode causar síndrome serotoninérgica.",
        es: "Moclobemida aumenta disponibilidad de monoaminas; asociación con serotoninérgicos puede causar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar combinação com múltiplos serotoninérgicos.",
        es: "Evitar combinación con múltiples serotoninérgicos."
      }
    },

    "linezolida": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Efeito IMAO aditivo com risco de síndrome serotoninérgica e hipertensão.",
        es: "Efecto IMAO aditivo con riesgo de síndrome serotoninérgico e hipertensión."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "azul_de_metileno": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar toxicidade serotoninérgica grave por efeito IMAO.",
        es: "Puede precipitar toxicidad serotoninérgica grave por efecto IMAO."
      },
      conduta: {
        pt: "Contraindicado.",
        es: "Contraindicado."
      }
    },

    "tramadol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta risco de síndrome serotoninérgica e convulsões.",
        es: "Aumenta riesgo de síndrome serotoninérgico y convulsiones."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "meperidina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode causar reação grave com hipertermia, toxicidade serotoninérgica e depressão do SNC.",
        es: "Puede causar reacción grave con hipertermia, toxicidad serotoninérgica y depresión del SNC."
      },
      conduta: {
        pt: "Contraindicado absoluto.",
        es: "Contraindicado absoluto."
      }
    },

    "dextrometorfano": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode precipitar síndrome serotoninérgica.",
        es: "Puede precipitar síndrome serotoninérgico."
      },
      conduta: {
        pt: "Evitar xaropes contendo dextrometorfano.",
        es: "Evitar jarabes con dextrometorfano."
      }
    },

    "anfetamina": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Risco de hipertensão grave, taquicardia, agitação e hipertermia.",
        es: "Riesgo de hipertensión grave, taquicardia, agitación e hipertermia."
      },
      conduta: {
        pt: "Não associar.",
        es: "No asociar."
      }
    },

    "$classe_simpatomimeticos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de hipertensão e taquicardia, especialmente com doses altas ou predisposição cardiovascular.",
        es: "Puede aumentar riesgo de hipertensión y taquicardia, especialmente con dosis altas o predisposición cardiovascular."
      },
      conduta: {
        pt: "Evitar estimulantes/descongestionantes sistêmicos ou monitorar PA rigorosamente.",
        es: "Evitar estimulantes/descongestionantes sistémicos o monitorear PA rigurosamente."
      }
    },

    "pseudoefedrina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode causar elevação importante da pressão arterial.",
        es: "Puede causar elevación importante de la presión arterial."
      },
      conduta: {
        pt: "Evitar em hipertensos e cardiopatas.",
        es: "Evitar en hipertensos y cardiópatas."
      }
    },

    "fenilefrina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode causar resposta pressórica aumentada.",
        es: "Puede causar respuesta presora aumentada."
      },
      conduta: {
        pt: "Evitar uso sistêmico e monitorar PA se inevitável.",
        es: "Evitar uso sistémico y monitorear PA si es inevitable."
      }
    },

    "metilfenidato": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar pressão arterial, frequência cardíaca e agitação.",
        es: "Puede aumentar presión arterial, frecuencia cardíaca y agitación."
      },
      conduta: {
        pt: "Evitar ou monitorar PA/FC rigorosamente.",
        es: "Evitar o monitorear PA/FC rigurosamente."
      }
    },

    "atomoxetina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Excesso noradrenérgico com risco de hipertensão, taquicardia e ansiedade intensa.",
        es: "Exceso noradrenérgico con riesgo de hipertensión, taquicardia y ansiedad intensa."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "bupropiona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de hipertensão, agitação e convulsões.",
        es: "Puede aumentar riesgo de hipertensión, agitación y convulsiones."
      },
      conduta: {
        pt: "Evitar em pacientes predispostos ou monitorar de perto.",
        es: "Evitar en pacientes predispuestos o monitorear de cerca."
      }
    },

    "levodopa_carbidopa": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de hipertensão, agitação e sintomas catecolaminérgicos.",
        es: "Puede aumentar riesgo de hipertensión, agitación y síntomas catecolaminérgicos."
      },
      conduta: {
        pt: "Monitorar PA e sintomas neuropsiquiátricos.",
        es: "Monitorear PA y síntomas neuropsiquiátricos."
      }
    },

    "tiramina_alimentos": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Moclobemida tem menor restrição alimentar que IMAO irreversíveis, mas grandes cargas de tiramina podem elevar pressão arterial.",
        es: "Moclobemida tiene menor restricción alimentaria que IMAO irreversibles, pero grandes cargas de tiramina pueden elevar presión arterial."
      },
      conduta: {
        pt: "Orientar evitar excesso de alimentos muito ricos em tiramina.",
        es: "Orientar evitar exceso de alimentos muy ricos en tiramina."
      }
    },

    "alcool": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão e piora do julgamento; bebidas fermentadas podem conter tiramina.",
        es: "Puede aumentar sedación, hipotensión y deterioro del juicio; bebidas fermentadas pueden contener tiramina."
      },
      conduta: {
        pt: "Evitar álcool ou usar com muita cautela.",
        es: "Evitar alcohol o usar con mucha precaución."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação, tontura, hipotensão ortostática e risco de quedas.",
        es: "Puede aumentar sedación, mareos, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação e PA ortostática.",
        es: "Monitorear sedación y PA ortostática."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     CLONAZEPAM — Benzodiazepínico (BZD 1)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo hepático via CYP3A4
     Perfil: longa meia-vida; anticonvulsivante + ansiolítico + hipnótico
     $classe_opioides + alcool: contraindicados(5) — depressão respiratória
  ───────────────────────────────────────────────────────────── */
  "clonazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação sempre que possível. Se inevitável, usar menor dose, menor tempo e monitorar respiração.",
        es: "Evitar asociación siempre que sea posible. Si es inevitable, usar menor dosis, menor tiempo y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa depressão do SNC, sedação, amnésia, quedas e depressão respiratória.",
        es: "El alcohol potencia depresión del SNC, sedación, amnesia, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Orientar evitar álcool durante uso de clonazepam.",
        es: "Orientar evitar alcohol durante uso de clonazepam."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de efeitos sedativos pode causar sonolência intensa, confusão, quedas e depressão respiratória.",
        es: "La suma de efectos sedativos puede causar somnolencia intensa, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores. Monitorar nível de consciência e risco de queda.",
        es: "Evitar múltiples depresores. Monitorear nivel de conciencia y riesgo de caída."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, confusão e quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática, confusión y caídas."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática e marcha.",
        es: "Monitorear sedación, PA ortostática y marcha."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, colapso, depressão respiratória e aspiração.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, colapso, depresión respiratoria y aspiración."
      },
      conduta: {
        pt: "Evitar início simultâneo ou titulação agressiva. Monitorar respiração, PA e sedação.",
        es: "Evitar inicio simultáneo o titulación agresiva. Monitorear respiración, PA y sedación."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, tontura, hipotensão ortostática e risco de quedas.",
        es: "Aumenta sedación, mareos, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação e risco de queda.",
        es: "Monitorear sedación y riesgo de caída."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar depressão do SNC, sonolência, hipotensão e prejuízo psicomotor.",
        es: "Puede aumentar depresión del SNC, somnolencia, hipotensión y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação e PA, especialmente em idosos.",
        es: "Monitorear sedación y PA, especialmente en ancianos."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sedação, sonolência diurna, quedas e prejuízo psicomotor.",
        es: "Potencia sedación, somnolencia diurna, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Usar cautela, especialmente à noite e em idosos.",
        es: "Usar precaución, especialmente por la noche y en ancianos."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação, hipotensão ortostática e risco de quedas.",
        es: "Puede sumar sedación, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sonolência, PA ortostática e quedas.",
        es: "Monitorear somnolencia, PA ortostática y caídas."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória, especialmente com opioides ou idosos.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria, especialmente con opioides o ancianos."
      },
      conduta: {
        pt: "Monitorar sedação e respiração. Reduzir doses se necessário.",
        es: "Monitorear sedación y respiración. Reducir dosis si es necesario."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar depressão do SNC e respiratória, especialmente em combinação com opioides.",
        es: "Puede potenciar depresión del SNC y respiratoria, especialmente en combinación con opioides."
      },
      conduta: {
        pt: "Monitorar respiração, sedação e quedas.",
        es: "Monitorear respiración, sedación y caídas."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação aumenta sedação, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "La asociación aumenta sedación, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, prejuízo psicomotor e risco de acidentes.",
        es: "Potenciación de sedación, deterioro psicomotor y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar uso conjunto, especialmente em idosos.",
        es: "Evitar uso conjunto, especialmente en ancianos."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar depressão do SNC, quedas e amnésia.",
        es: "Puede aumentar depresión del SNC, caídas y amnesia."
      },
      conduta: {
        pt: "Evitar combinação sem necessidade clara.",
        es: "Evitar combinación sin necesidad clara."
      }
    },

    "hidroxizina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, confusão e risco de quedas.",
        es: "Potenciación de sedación, confusión y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar ou alterar exposição ao clonazepam, com risco de sedação excessiva.",
        es: "Puede aumentar o alterar exposición a clonazepam, con riesgo de sedación excesiva."
      },
      conduta: {
        pt: "Monitorar sedação e considerar benzodiazepínico alternativo.",
        es: "Monitorear sedación y considerar benzodiazepina alternativa."
      }
    },

    "cetoconazol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Inibidores de CYP3A4 podem aumentar exposição ao clonazepam e sedação.",
        es: "Inhibidores de CYP3A4 pueden aumentar exposición a clonazepam y sedación."
      },
      conduta: {
        pt: "Monitorar sedação e considerar redução de dose.",
        es: "Monitorear sedación y considerar reducción de dosis."
      }
    },

    "claritromicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar níveis de clonazepam por inibição metabólica e intensificar sedação.",
        es: "Puede aumentar niveles de clonazepam por inhibición metabólica e intensificar sedación."
      },
      conduta: {
        pt: "Monitorar sonolência e depressão respiratória.",
        es: "Monitorear somnolencia y depresión respiratoria."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de clonazepam e diminuir efeito anticonvulsivante/ansiolítico.",
        es: "La inducción enzimática puede reducir niveles de clonazepam y disminuir efecto anticonvulsivante/ansiolítico."
      },
      conduta: {
        pt: "Monitorar controle de crises, ansiedade e sedação.",
        es: "Monitorear control de crisis, ansiedad y sedación."
      }
    },

    "fenitoina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode alterar níveis de anticonvulsivantes e sedação; há risco de perda de eficácia ou toxicidade.",
        es: "Puede alterar niveles de anticonvulsivantes y sedación; hay riesgo de pérdida de eficacia o toxicidad."
      },
      conduta: {
        pt: "Monitorar níveis séricos se indicado e controle de crises.",
        es: "Monitorear niveles séricos si está indicado y control de crisis."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     ALPRAZOLAM — Benzodiazepínico de alta potência (BZD 2)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo exclusivo por CYP3A4
     Perfil: alta potência, risco de dependência; interações CYP3A4 clinicamente críticas
     cetoconazol/itraconazol: contraindicados(5) — aumento intenso de exposição
  ───────────────────────────────────────────────────────────── */
  "alprazolam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação com opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación con opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, usar menor dose e monitorar respiração.",
        es: "Evitar asociación. Si es inevitable, usar menor dosis y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, depressão respiratória, comportamento desinibido e risco de overdose.",
        es: "El alcohol potencia sedación, amnesia, depresión respiratoria, conducta desinhibida y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar álcool completamente.",
        es: "Evitar alcohol completamente."
      }
    },

    "cetoconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição potente de CYP3A4 pode aumentar intensamente níveis de alprazolam e causar sedação profunda.",
        es: "La inhibición potente de CYP3A4 puede aumentar intensamente niveles de alprazolam y causar sedación profunda."
      },
      conduta: {
        pt: "Não associar. Preferir lorazepam/oxazepam se benzodiazepínico for necessário.",
        es: "No asociar. Preferir lorazepam/oxazepam si se necesita benzodiazepina."
      }
    },

    "itraconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta fortemente exposição ao alprazolam por inibição de CYP3A4.",
        es: "Aumenta fuertemente exposición a alprazolam por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressão do SNC aumenta sonolência, quedas, confusão e depressão respiratória.",
        es: "La suma de depresión del SNC aumenta somnolencia, caídas, confusión y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores.",
        es: "Evitar múltiples depresores."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática e risco de queda.",
        es: "Puede potenciar sedación, hipotensión ortostática y riesgo de caída."
      },
      conduta: {
        pt: "Monitorar sedação e PA ortostática.",
        es: "Monitorear sedación y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "A associação pode causar sedação profunda, hipotensão, colapso e depressão respiratória.",
        es: "La asociación puede causar sedación profunda, hipotensión, colapso y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar início simultâneo e monitorar respiração/PA.",
        es: "Evitar inicio simultáneo y monitorear respiración/PA."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, tontura, hipotensão ortostática e risco de quedas.",
        es: "Puede aumentar sedación, mareos, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação e quedas.",
        es: "Monitorear sedación y caídas."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa depressão do SNC e prejuízo psicomotor.",
        es: "Potencia depresión del SNC y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sonolência e função respiratória.",
        es: "Monitorear somnolencia y función respiratoria."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sonolência, lentificação psicomotora, quedas e risco de acidentes.",
        es: "Aumenta somnolencia, enlentecimiento psicomotor, caídas y riesgo de accidentes."
      },
      conduta: {
        pt: "Usar cautela e evitar álcool.",
        es: "Usar precaución y evitar alcohol."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação e hipotensão ortostática.",
        es: "Puede sumar sedación e hipotensión ortostática."
      },
      conduta: {
        pt: "Monitorar sedação e PA ortostática.",
        es: "Monitorear sedación y PA ortostática."
      }
    },

    "claritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar níveis de alprazolam, causando sedação excessiva, confusão e depressão respiratória.",
        es: "Puede aumentar niveles de alprazolam, causando sedación excesiva, confusión y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar ou reduzir dose. Monitorar sedação.",
        es: "Evitar o reducir dosis. Monitorear sedación."
      }
    },

    "eritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição de CYP3A4 pode elevar exposição ao alprazolam.",
        es: "La inhibición de CYP3A4 puede elevar exposición a alprazolam."
      },
      conduta: {
        pt: "Monitorar sonolência, confusão e quedas.",
        es: "Monitorear somnolencia, confusión y caídas."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode alterar intensamente metabolismo do alprazolam, com risco de sedação prolongada.",
        es: "Puede alterar intensamente metabolismo de alprazolam, con riesgo de sedación prolongada."
      },
      conduta: {
        pt: "Evitar se possível ou usar alternativa não dependente de CYP3A4.",
        es: "Evitar si es posible o usar alternativa no dependiente de CYP3A4."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar sedação e respiração.",
        es: "Monitorear sedación y respiración."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de efeitos depressores do SNC e risco de depressão respiratória.",
        es: "Suma de efectos depresores del SNC y riesgo de depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, quedas e sonolência.",
        es: "Monitorear respiración, caídas y somnolencia."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de amnésia, sedação excessiva, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta riesgo de amnesia, sedación excesiva, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, prejuízo psicomotor e risco de acidentes.",
        es: "Potenciación de sedación, deterioro psicomotor y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação e amnésia.",
        es: "Puede aumentar sedación y amnesia."
      },
      conduta: {
        pt: "Evitar uso conjunto se possível.",
        es: "Evitar uso conjunto si es posible."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução de CYP3A4 pode reduzir níveis de alprazolam e diminuir efeito ansiolítico.",
        es: "La inducción de CYP3A4 puede reducir niveles de alprazolam y disminuir efecto ansiolítico."
      },
      conduta: {
        pt: "Monitorar resposta clínica e sintomas de abstinência.",
        es: "Monitorear respuesta clínica y síntomas de abstinencia."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indutor potente de CYP3A4; pode reduzir significativamente níveis de alprazolam.",
        es: "Inductor potente de CYP3A4; puede reducir significativamente niveles de alprazolam."
      },
      conduta: {
        pt: "Monitorar perda de efeito ou abstinência.",
        es: "Monitorear pérdida de efecto o abstinencia."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     DIAZEPAM — Benzodiazepínico de longa ação (BZD 3)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo hepático via CYP2C19 + CYP3A4
     Perfil: meia-vida muito longa (com metabólito ativo nordazepam); acumulação em idosos
     fluvoxamina: alta(4) — inibição CYP2C19/CYP3A4 aumenta exposição
  ───────────────────────────────────────────────────────────── */
  "diazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar sempre que possível. Se inevitável, usar menor dose e monitorar respiração.",
        es: "Evitar siempre que sea posible. Si es inevitable, usar menor dosis y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, depressão respiratória, quedas e risco de overdose.",
        es: "El alcohol potencia sedación, amnesia, depresión respiratoria, caídas y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar álcool durante uso de diazepam.",
        es: "Evitar alcohol durante uso de diazepam."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sonolência, confusão, quedas e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta somnolencia, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar nível de consciência.",
        es: "Evitar múltiples depresores y monitorear nivel de conciencia."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, confusão e quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática, confusión y caídas."
      },
      conduta: {
        pt: "Monitorar sedação, marcha e PA ortostática.",
        es: "Monitorear sedación, marcha y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, colapso, aspiração e depressão respiratória.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, colapso, aspiración y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar titulação agressiva. Monitorar respiração, PA e sedação.",
        es: "Evitar titulación agresiva. Monitorear respiración, PA y sedación."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sedação, sonolência diurna e risco de quedas.",
        es: "Potencia sedación, somnolencia diurna y riesgo de caídas."
      },
      conduta: {
        pt: "Usar cautela, especialmente em idosos.",
        es: "Usar precaución, especialmente en ancianos."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação e hipotensão ortostática.",
        es: "Puede sumar sedación e hipotensión ortostática."
      },
      conduta: {
        pt: "Monitorar sonolência, PA ortostática e quedas.",
        es: "Monitorear somnolencia, PA ortostática y caídas."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar sedação e respiração.",
        es: "Monitorear sedación y respiración."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar depressão do SNC e respiratória, principalmente com opioides.",
        es: "Puede potenciar depresión del SNC y respiratoria, principalmente con opioides."
      },
      conduta: {
        pt: "Monitorar respiração, quedas e sonolência.",
        es: "Monitorear respiración, caídas y somnolencia."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação excessiva, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta riesgo de sedación excesiva, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "fluvoxamina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Fluvoxamina pode aumentar níveis de diazepam por inibição metabólica, elevando risco de sedação prolongada.",
        es: "Fluvoxamina puede aumentar niveles de diazepam por inhibición metabólica, elevando riesgo de sedación prolongada."
      },
      conduta: {
        pt: "Evitar ou reduzir dose. Preferir lorazepam/oxazepam se necessário.",
        es: "Evitar o reducir dosis. Preferir lorazepam/oxazepam si es necesario."
      }
    },

    "cetoconazol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição de CYP3A4 pode aumentar exposição ao diazepam e sedação.",
        es: "La inhibición de CYP3A4 puede aumentar exposición a diazepam y sedación."
      },
      conduta: {
        pt: "Monitorar depressão do SNC ou usar alternativa.",
        es: "Monitorear depresión del SNC o usar alternativa."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação por alteração do metabolismo do diazepam.",
        es: "Puede aumentar sedación por alteración del metabolismo de diazepam."
      },
      conduta: {
        pt: "Evitar se possível ou usar benzodiazepínico alternativo.",
        es: "Evitar si es posible o usar benzodiazepina alternativa."
      }
    },

    "omeprazol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir metabolismo do diazepam e prolongar sedação.",
        es: "Puede reducir metabolismo de diazepam y prolongar sedación."
      },
      conduta: {
        pt: "Monitorar sonolência e quedas.",
        es: "Monitorear somnolencia y caídas."
      }
    },

    "claritromicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar níveis de diazepam e intensificar sedação.",
        es: "Puede aumentar niveles de diazepam e intensificar sedación."
      },
      conduta: {
        pt: "Monitorar sonolência e quedas.",
        es: "Monitorear somnolencia y caídas."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir níveis de diazepam por indução enzimática.",
        es: "Puede reducir niveles de diazepam por inducción enzimática."
      },
      conduta: {
        pt: "Monitorar perda de efeito ansiolítico ou anticonvulsivante.",
        es: "Monitorear pérdida de efecto ansiolítico o anticonvulsivante."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir significativamente níveis de diazepam.",
        es: "Inducción enzimática puede reducir significativamente niveles de diazepam."
      },
      conduta: {
        pt: "Monitorar eficácia e sintomas de abstinência.",
        es: "Monitorear eficacia y síntomas de abstinencia."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     LORAZEPAM — Benzodiazepínico intermediário (BZD 4)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo por glucuronidação (UGT)
     Perfil: não depende de CYP — ausência de interações CYP3A4; preferido em hepatopatas e idosos
     valproato/probenecida: moderada(3) — interferência na glucuronidação [interações específicas do lorazepam]
  ───────────────────────────────────────────────────────────── */
  "lorazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, usar menor dose e monitorar respiração.",
        es: "Evitar asociación. Si es inevitable, usar menor dosis y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, quedas, depressão respiratória e risco de overdose.",
        es: "El alcohol potencia sedación, amnesia, caídas, depresión respiratoria y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar álcool completamente.",
        es: "Evitar alcohol completamente."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sonolência, confusão, quedas e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta somnolencia, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar sedação.",
        es: "Evitar múltiples depresores y monitorear sedación."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, lentificação psicomotora e quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática, enlentecimiento psicomotor y caídas."
      },
      conduta: {
        pt: "Monitorar sedação, marcha e PA ortostática.",
        es: "Monitorear sedación, marcha y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, colapso, aspiração e depressão respiratória.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, colapso, aspiración y depresión respiratória."
      },
      conduta: {
        pt: "Monitorar respiração, PA e nível de consciência.",
        es: "Monitorear respiración, PA y nivel de conciencia."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sonolência, hipotensão e prejuízo psicomotor.",
        es: "Puede aumentar somnolencia, hipotensión y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação e PA, especialmente em idosos.",
        es: "Monitorear sedación y PA, especialmente en ancianos."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, tontura e risco de quedas.",
        es: "Aumenta sedación, mareos y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar marcha e sonolência.",
        es: "Monitorear marcha y somnolencia."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sonolência, quedas e prejuízo psicomotor.",
        es: "Potencia somnolencia, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Usar cautela, principalmente à noite e em idosos.",
        es: "Usar precaución, principalmente por la noche y en ancianos."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação e hipotensão ortostática.",
        es: "Puede sumar sedación e hipotensión ortostática."
      },
      conduta: {
        pt: "Monitorar quedas e PA ortostática.",
        es: "Monitorear caídas y PA ortostática."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, queda e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caída y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar sedação e respiração.",
        es: "Monitorear sedación y respiración."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa depressão do SNC e respiratória, especialmente com opioides.",
        es: "Potencia depresión del SNC y respiratoria, especialmente con opioides."
      },
      conduta: {
        pt: "Monitorar respiração, quedas e sonolência.",
        es: "Monitorear respiración, caídas y somnolencia."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta sedación, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de sedação e prejuízo psicomotor.",
        es: "Suma de sedación y deterioro psicomotor."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar amnésia, sedação e risco de quedas.",
        es: "Puede aumentar amnesia, sedación y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar associação sem necessidade clara.",
        es: "Evitar asociación sin necesidad clara."
      }
    },

    "valproato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir depuração do lorazepam por interferência na glucuronidação, aumentando sedação.",
        es: "Puede reducir depuración de lorazepam por interferencia en glucuronidación, aumentando sedación."
      },
      conduta: {
        pt: "Considerar dose menor de lorazepam e monitorar sedação.",
        es: "Considerar dosis menor de lorazepam y monitorear sedación."
      }
    },

    "probenecida": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir eliminação do lorazepam e prolongar sedação.",
        es: "Puede reducir eliminación de lorazepam y prolongar sedación."
      },
      conduta: {
        pt: "Monitorar sonolência e ajustar dose se necessário.",
        es: "Monitorear somnolencia y ajustar dosis si es necesario."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     BROMAZEPAM — Benzodiazepínico de potência intermediária (BZD 5)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo hepático via CYP3A4
     Perfil: meia-vida intermediária; uso ansiolítico; risco sedativo em idosos
     $classe_opioides + alcool: contraindicados(5)
  ───────────────────────────────────────────────────────────── */
  "bromazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, usar menor dose possível e monitorar respiração.",
        es: "Evitar asociación. Si es inevitable, usar menor dosis posible y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, prejuízo psicomotor, quedas, depressão respiratória e risco de overdose.",
        es: "El alcohol potencia sedación, amnesia, deterioro psicomotor, caídas, depresión respiratoria y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar álcool completamente.",
        es: "Evitar alcohol completamente."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sonolência, confusão, quedas e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta somnolencia, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores. Monitorar sedação e respiração.",
        es: "Evitar múltiples depresores. Monitorear sedación y respiración."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, lentificação psicomotora e risco de quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática, enlentecimiento psicomotor y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação, marcha e PA ortostática.",
        es: "Monitorear sedación, marcha y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, colapso, aspiração e depressão respiratória.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, colapso, aspiración y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, PA e nível de consciência.",
        es: "Monitorear respiración, PA y nivel de conciencia."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, tontura, hipotensão ortostática e risco de quedas.",
        es: "Aumenta sedación, mareos, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação, PA ortostática e quedas.",
        es: "Monitorear sedación, PA ortostática y caídas."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar depressão do SNC, sonolência, hipotensão e prejuízo psicomotor.",
        es: "Puede aumentar depresión del SNC, somnolencia, hipotensión y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação e PA, especialmente em idosos.",
        es: "Monitorear sedación y PA, especialmente en ancianos."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sonolência, sedação diurna, quedas e prejuízo psicomotor.",
        es: "Potencia somnolencia, sedación diurna, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Usar cautela e evitar associação desnecessária.",
        es: "Usar precaución y evitar asociación innecesaria."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação, hipotensão ortostática e risco de quedas.",
        es: "Puede sumar sedación, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar PA ortostática, sonolência e quedas.",
        es: "Monitorear PA ortostática, somnolencia y caídas."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar sedação e respiração.",
        es: "Monitorear sedación y respiración."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar depressão do SNC e respiratória, especialmente em idosos ou com opioides.",
        es: "Puede potenciar depresión del SNC y respiratoria, especialmente en ancianos o con opioides."
      },
      conduta: {
        pt: "Monitorar sonolência, respiração e risco de queda.",
        es: "Monitorear somnolencia, respiración y riesgo de caída."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação excessiva, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta riesgo de sedación excesiva, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de sedação, prejuízo psicomotor e risco de acidentes.",
        es: "Suma de sedación, deterioro psicomotor y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar amnésia, sonolência e risco de quedas.",
        es: "Puede aumentar amnesia, somnolencia y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar associação sem necessidade clara.",
        es: "Evitar asociación sin necesidad clara."
      }
    },

    "hidroxizina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, confusão, boca seca e quedas.",
        es: "Potenciación de sedación, confusión, boca seca y caídas."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "ritonavir": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição a benzodiazepínicos metabolizados por CYP, com risco de sedação prolongada.",
        es: "Puede aumentar exposición a benzodiazepinas metabolizadas por CYP, con riesgo de sedación prolongada."
      },
      conduta: {
        pt: "Monitorar sedação e considerar alternativa como lorazepam/oxazepam.",
        es: "Monitorear sedación y considerar alternativa como lorazepam/oxazepam."
      }
    },

    "cetoconazol": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Inibidores de CYP3A4 podem aumentar exposição ao bromazepam e sedação.",
        es: "Inhibidores de CYP3A4 pueden aumentar exposición a bromazepam y sedación."
      },
      conduta: {
        pt: "Monitorar sonolência e considerar redução de dose.",
        es: "Monitorear somnolencia y considerar reducción de dosis."
      }
    },

    "claritromicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação por inibição metabólica.",
        es: "Puede aumentar sedación por inhibición metabólica."
      },
      conduta: {
        pt: "Monitorar sonolência, confusão e quedas.",
        es: "Monitorear somnolencia, confusión y caídas."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução enzimática pode reduzir níveis de bromazepam e diminuir efeito ansiolítico.",
        es: "La inducción enzimática puede reducir niveles de bromazepam y disminuir efecto ansiolítico."
      },
      conduta: {
        pt: "Monitorar resposta clínica e sintomas de abstinência.",
        es: "Monitorear respuesta clínica y síntomas de abstinencia."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode reduzir níveis de benzodiazepínicos por indução enzimática, diminuindo eficácia.",
        es: "Puede reducir niveles de benzodiazepinas por inducción enzimática, disminuyendo eficacia."
      },
      conduta: {
        pt: "Monitorar perda de efeito ansiolítico.",
        es: "Monitorear pérdida de efecto ansiolítico."
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────
     MIDAZOLAM — Benzodiazepínico de ultracurta ação (BZD 6)
     Mecanismo: potencialização GABAérgica (GABA-A); metabolismo exclusivo por CYP3A4
     Perfil: uso hospitalar/procedimentos; interações CYP3A4 com maior impacto clínico
     cetoconazol/itraconazol/posaconazol/voriconazol/ritonavir/cobicistate: contraindicados(5)
     diltiazem/verapamil → alta(4) — inibição moderada CYP3A4
  ───────────────────────────────────────────────────────────── */
  "midazolam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre midazolam e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre midazolam y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Usar apenas com indicação clara e monitorização respiratória. Ter suporte ventilatório disponível.",
        es: "Usar solo con indicación clara y monitoreo respiratorio. Tener soporte ventilatorio disponible."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação profunda, amnésia, depressão respiratória e risco de overdose.",
        es: "El alcohol potencia sedación profunda, amnesia, depresión respiratoria y riesgo de sobredosis."
      },
      conduta: {
        pt: "Contraindicar álcool.",
        es: "Contraindicar alcohol."
      }
    },

    "cetoconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição potente de CYP3A4 aumenta drasticamente níveis de midazolam, causando sedação prolongada e depressão respiratória.",
        es: "La inhibición potente de CYP3A4 aumenta drásticamente niveles de midazolam, causando sedación prolongada y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar associação. Se uso hospitalar for inevitável, reduzir dose e monitorar continuamente.",
        es: "Evitar asociación. Si uso hospitalario es inevitable, reducir dosis y monitorear continuamente."
      }
    },

    "itraconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Aumenta intensamente exposição ao midazolam por inibição de CYP3A4.",
        es: "Aumenta intensamente exposición a midazolam por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Não associar em uso ambulatorial. Monitorização intensiva se inevitável.",
        es: "No asociar en uso ambulatorio. Monitoreo intensivo si es inevitable."
      }
    },

    "posaconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibidor potente de CYP3A4; pode causar sedação profunda e prolongada.",
        es: "Inhibidor potente de CYP3A4; puede causar sedación profunda y prolongada."
      },
      conduta: {
        pt: "Evitar associação ou usar em ambiente monitorado com redução de dose.",
        es: "Evitar asociación o usar en ambiente monitoreado con reducción de dosis."
      }
    },

    "voriconazol": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Pode elevar níveis de midazolam e prolongar depressão do SNC.",
        es: "Puede elevar niveles de midazolam y prolongar depresión del SNC."
      },
      conduta: {
        pt: "Evitar associação fora de ambiente monitorado.",
        es: "Evitar asociación fuera de ambiente monitoreado."
      }
    },

    "ritonavir": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Inibição potente de CYP3A4 pode causar sedação extrema e depressão respiratória prolongada.",
        es: "La inhibición potente de CYP3A4 puede causar sedación extrema y depresión respiratoria prolongada."
      },
      conduta: {
        pt: "Evitar. Se necessário em ambiente crítico, reduzir dose e monitorar continuamente.",
        es: "Evitar. Si es necesario en ambiente crítico, reducir dosis y monitorear continuamente."
      }
    },

    "cobicistate": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Potente inibição de CYP3A4 aumenta muito os níveis de midazolam.",
        es: "Potente inhibición de CYP3A4 aumenta mucho los niveles de midazolam."
      },
      conduta: {
        pt: "Evitar associação.",
        es: "Evitar asociación."
      }
    },

    "claritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Claritromicina inibe CYP3A4 e pode aumentar níveis de midazolam, causando sedação excessiva e depressão respiratória.",
        es: "Claritromicina inhibe CYP3A4 y puede aumentar niveles de midazolam, causando sedación excesiva y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar ou reduzir dose. Monitorar saturação, FR e nível de consciência.",
        es: "Evitar o reducir dosis. Monitorear saturación, FR y nivel de conciencia."
      }
    },

    "eritromicina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição ao midazolam por inibição de CYP3A4.",
        es: "Puede aumentar exposición a midazolam por inhibición de CYP3A4."
      },
      conduta: {
        pt: "Monitorar sedação e depressão respiratória.",
        es: "Monitorear sedación y depresión respiratoria."
      }
    },

    "diltiazem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Inibição moderada de CYP3A4 pode aumentar sedação e duração do midazolam.",
        es: "La inhibición moderada de CYP3A4 puede aumentar sedación y duración de midazolam."
      },
      conduta: {
        pt: "Reduzir dose e monitorar sedação.",
        es: "Reducir dosis y monitorear sedación."
      }
    },

    "verapamil": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar exposição ao midazolam e causar sedação prolongada.",
        es: "Puede aumentar exposición a midazolam y causar sedación prolongada."
      },
      conduta: {
        pt: "Monitorar nível de consciência e respiração.",
        es: "Monitorear nivel de conciencia y respiración."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sedação profunda, confusão, quedas e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta sedación profunda, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar respiração.",
        es: "Evitar múltiples depresores y monitorear respiración."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão e depressão respiratória.",
        es: "Puede potenciar sedación, hipotensión y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar PA, sedação e respiração.",
        es: "Monitorear PA, sedación y respiración."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Risco aumentado de sedação profunda, hipotensão, colapso e depressão respiratória.",
        es: "Mayor riesgo de sedación profunda, hipotensión, colapso y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar em ambiente seguro.",
        es: "Monitorear en ambiente seguro."
      }
    },

    "propofol": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Associação anestésica/sedativa com risco de hipotensão, apneia e depressão respiratória.",
        es: "Asociación anestésica/sedativa con riesgo de hipotensión, apnea y depresión respiratoria."
      },
      conduta: {
        pt: "Usar apenas com monitorização cardiorrespiratória.",
        es: "Usar solo con monitoreo cardiorrespiratorio."
      }
    },

    "dexmedetomidina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação, bradicardia e hipotensão.",
        es: "Puede sumar sedación, bradicardia e hipotensión."
      },
      conduta: {
        pt: "Monitorar PA, FC e sedação.",
        es: "Monitorear PA, FC y sedación."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação e depressão respiratória, especialmente com outros depressores.",
        es: "Puede aumentar sedación y depresión respiratoria, especialmente con otros depresores."
      },
      conduta: {
        pt: "Monitorar respiração e nível de consciência.",
        es: "Monitorear respiración y nivel de conciencia."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa depressão do SNC e risco respiratório.",
        es: "Potencia depresión del SNC y riesgo respiratorio."
      },
      conduta: {
        pt: "Monitorar FR, SatO2 e sedação.",
        es: "Monitorear FR, SatO2 y sedación."
      }
    },

    "carbamazepina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indução de CYP3A4 pode reduzir níveis de midazolam e diminuir efeito sedativo.",
        es: "La inducción de CYP3A4 puede reducir niveles de midazolam y disminuir efecto sedativo."
      },
      conduta: {
        pt: "Monitorar resposta sedativa e necessidade de dose.",
        es: "Monitorear respuesta sedativa y necesidad de dosis."
      }
    },

    "rifampicina": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Indutor potente de CYP3A4; pode reduzir significativamente efeito do midazolam.",
        es: "Inductor potente de CYP3A4; puede reducir significativamente efecto de midazolam."
      },
      conduta: {
        pt: "Monitorar eficácia sedativa. Considerar alternativa.",
        es: "Monitorear eficacia sedativa. Considerar alternativa."
      }
    }
  },

  // ─── BZD 7: Oxazepam ───────────────────────────────────────────────────────
  // Glucuronidação direta (UGT) — sem metabolismo CYP significativo
  // Sem interações farmacocinéticas CYP; perfil seguro em hepatopatas leves
  // Diferencial: carbamazepina → leve(2) por farmacodinâmica (não farmacocinética)
  "oxazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, usar menor dose e monitorar respiração.",
        es: "Evitar asociación. Si es inevitable, usar menor dosis y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, quedas, depressão respiratória e risco de overdose.",
        es: "El alcohol potencia sedación, amnesia, caídas, depresión respiratoria y riesgo de sobredosis."
      },
      conduta: {
        pt: "Evitar álcool completamente.",
        es: "Evitar alcohol completamente."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sonolência, confusão, quedas e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta somnolencia, confusión, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar sedação.",
        es: "Evitar múltiples depresores y monitorear sedación."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática, lentificação psicomotora e quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática, enlentecimiento psicomotor y caídas."
      },
      conduta: {
        pt: "Monitorar sedação, marcha e PA ortostática.",
        es: "Monitorear sedación, marcha y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, colapso, aspiração e depressão respiratória.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, colapso, aspiración y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, PA e nível de consciência.",
        es: "Monitorear respiración, PA y nivel de conciencia."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sonolência, tontura, hipotensão ortostática e risco de quedas.",
        es: "Aumenta somnolencia, mareos, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação e quedas.",
        es: "Monitorear sedación y caídas."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar depressão do SNC, sonolência e prejuízo psicomotor.",
        es: "Puede aumentar depresión del SNC, somnolencia y deterioro psicomotor."
      },
      conduta: {
        pt: "Monitorar sedação e PA em idosos.",
        es: "Monitorear sedación y PA en ancianos."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sonolência, sedação diurna, quedas e prejuízo psicomotor.",
        es: "Potencia somnolencia, sedación diurna, caídas y deterioro psicomotor."
      },
      conduta: {
        pt: "Usar cautela e evitar associação desnecessária.",
        es: "Usar precaución y evitar asociación innecesaria."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode somar sedação e hipotensão ortostática.",
        es: "Puede sumar sedación e hipotensión ortostática."
      },
      conduta: {
        pt: "Monitorar PA ortostática, sonolência e quedas.",
        es: "Monitorear PA ortostática, somnolencia y caídas."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar sedação e respiração.",
        es: "Monitorear sedación y respiración."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar depressão do SNC e respiratória, principalmente em idosos ou com opioides.",
        es: "Puede potenciar depresión del SNC y respiratoria, principalmente en ancianos o con opioides."
      },
      conduta: {
        pt: "Monitorar sonolência, respiração e risco de queda.",
        es: "Monitorear somnolencia, respiración y riesgo de caída."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação excessiva, amnésia, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta riesgo de sedación excesiva, amnesia, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de sedação, prejuízo psicomotor e risco de acidentes.",
        es: "Suma de sedación, deterioro psicomotor y riesgo de accidentes."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar amnésia, sonolência e risco de quedas.",
        es: "Puede aumentar amnesia, somnolencia y riesgo de caídas."
      },
      conduta: {
        pt: "Evitar associação sem necessidade clara.",
        es: "Evitar asociación sin necesidad clara."
      }
    },

    "hidroxizina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, confusão, boca seca e quedas.",
        es: "Potenciación de sedación, confusión, boca seca y caídas."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "fenobarbital": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação importante de depressão do SNC, sedação e risco respiratório.",
        es: "Suma importante de depresión del SNC, sedación y riesgo respiratorio."
      },
      conduta: {
        pt: "Monitorar nível de consciência e respiração.",
        es: "Monitorear nivel de conciencia y respiración."
      }
    },

    "valproato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sedação por efeito depressor central aditivo.",
        es: "Puede aumentar sedación por efecto depresor central aditivo."
      },
      conduta: {
        pt: "Monitorar sonolência, coordenação e risco de quedas.",
        es: "Monitorear somnolencia, coordinación y riesgo de caídas."
      }
    },

    "carbamazepina": {
      gravidade: "leve",
      scoreClinico: 2,
      descricao: {
        pt: "Pode somar tontura e sedação, embora oxazepam tenha menor dependência de CYP.",
        es: "Puede sumar mareos y sedación, aunque oxazepam tiene menor dependencia de CYP."
      },
      conduta: {
        pt: "Monitorar sedação e resposta clínica.",
        es: "Monitorear sedación y respuesta clínica."
      }
    }
  },

  // ─── BZD 8: Temazepam ──────────────────────────────────────────────────────
  // Glucuronidação direta (UGT) — perfil farmacocinético similar ao oxazepam
  // Uso preferencial como hipnótico de curta/média ação
  // Diferencial: sem interações CYP3A4 relevantes (metabolismo via UGT)
  "temazepam": {

    "$classe_opioides": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "A associação entre benzodiazepínicos e opioides aumenta risco de sedação profunda, depressão respiratória, coma e morte.",
        es: "La asociación entre benzodiazepinas y opioides aumenta riesgo de sedación profunda, depresión respiratoria, coma y muerte."
      },
      conduta: {
        pt: "Evitar associação. Se inevitável, usar menor dose e monitorar respiração.",
        es: "Evitar asociación. Si es inevitable, usar menor dosis y monitorear respiración."
      }
    },

    "alcool": {
      gravidade: "contraindicada",
      scoreClinico: 5,
      descricao: {
        pt: "Álcool potencializa sedação, amnésia, quedas, depressão respiratória e overdose.",
        es: "El alcohol potencia sedación, amnesia, caídas, depresión respiratoria y sobredosis."
      },
      conduta: {
        pt: "Evitar álcool completamente.",
        es: "Evitar alcohol completamente."
      }
    },

    "$classe_depressoras_snc": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de depressores do SNC aumenta sonolência, confusão, quedas, amnésia e depressão respiratória.",
        es: "La suma de depresores del SNC aumenta somnolencia, confusión, caídas, amnesia y depresión respiratoria."
      },
      conduta: {
        pt: "Evitar múltiplos depressores e monitorar sedação.",
        es: "Evitar múltiples depresores y monitorear sedación."
      }
    },

    "$classe_antipsicoticos_sedativos": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar sedação, hipotensão ortostática e risco de quedas.",
        es: "Puede potenciar sedación, hipotensión ortostática y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sedação e PA ortostática.",
        es: "Monitorear sedación y PA ortostática."
      }
    },

    "clozapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar risco de sedação profunda, hipotensão, aspiração e depressão respiratória.",
        es: "Puede aumentar riesgo de sedación profunda, hipotensión, aspiración y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, PA e nível de consciência.",
        es: "Monitorear respiración, PA y nivel de conciencia."
      }
    },

    "quetiapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta sedação, tontura e risco de quedas.",
        es: "Aumenta sedación, mareos y riesgo de caídas."
      },
      conduta: {
        pt: "Monitorar sonolência e quedas.",
        es: "Monitorear somnolencia y caídas."
      }
    },

    "olanzapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sonolência, prejuízo psicomotor e depressão do SNC.",
        es: "Puede aumentar somnolencia, deterioro psicomotor y depresión del SNC."
      },
      conduta: {
        pt: "Monitorar sedação, especialmente em idosos.",
        es: "Monitorear sedación, especialmente en ancianos."
      }
    },

    "mirtazapina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencializa sonolência e risco de quedas durante a noite.",
        es: "Potencia somnolencia y riesgo de caídas durante la noche."
      },
      conduta: {
        pt: "Orientar segurança noturna e evitar álcool.",
        es: "Orientar seguridad nocturna y evitar alcohol."
      }
    },

    "trazodona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar sedação, hipotensão ortostática e quedas.",
        es: "Puede aumentar sedación, hipotensión ortostática y caídas."
      },
      conduta: {
        pt: "Monitorar PA ortostática e sonolência.",
        es: "Monitorear PA ortostática y somnolencia."
      }
    },

    "pregabalina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de sedação, tontura, quedas e depressão respiratória.",
        es: "Aumenta riesgo de sedación, mareos, caídas y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração e sedação.",
        es: "Monitorear respiración y sedación."
      }
    },

    "gabapentina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode potencializar depressão do SNC e respiratória.",
        es: "Puede potenciar depresión del SNC y respiratoria."
      },
      conduta: {
        pt: "Monitorar respiração, quedas e sonolência.",
        es: "Monitorear respiración, caídas y somnolencia."
      }
    },

    "zolpidem": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Aumenta risco de amnésia, sedação excessiva, quedas e comportamentos complexos durante o sono.",
        es: "Aumenta riesgo de amnesia, sedación excesiva, caídas y conductas complejas durante el sueño."
      },
      conduta: {
        pt: "Evitar associação rotineira.",
        es: "Evitar asociación rutinaria."
      }
    },

    "zopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação de sedação e prejuízo psicomotor.",
        es: "Suma de sedación y deterioro psicomotor."
      },
      conduta: {
        pt: "Evitar em idosos ou pacientes frágeis.",
        es: "Evitar en ancianos o pacientes frágiles."
      }
    },

    "eszopiclona": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Pode aumentar amnésia, sedação e quedas.",
        es: "Puede aumentar amnesia, sedación y caídas."
      },
      conduta: {
        pt: "Evitar associação sem necessidade clara.",
        es: "Evitar asociación sin necesidad clara."
      }
    },

    "hidroxizina": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Potencialização de sedação, confusão e quedas.",
        es: "Potenciación de sedación, confusión y caídas."
      },
      conduta: {
        pt: "Evitar em idosos.",
        es: "Evitar en ancianos."
      }
    },

    "fenobarbital": {
      gravidade: "alta",
      scoreClinico: 4,
      descricao: {
        pt: "Somação importante de sedação e depressão respiratória.",
        es: "Suma importante de sedación y depresión respiratoria."
      },
      conduta: {
        pt: "Monitorar nível de consciência e respiração.",
        es: "Monitorear nivel de conciencia y respiración."
      }
    },

    "valproato": {
      gravidade: "moderada",
      scoreClinico: 3,
      descricao: {
        pt: "Pode aumentar sonolência por efeito depressor central aditivo.",
        es: "Puede aumentar somnolencia por efecto depresor central aditivo."
      },
      conduta: {
        pt: "Monitorar sedação e quedas.",
        es: "Monitorear sedación y caídas."
      }
    }
  }

}; /* fim INTERACOES_DB */

/* ═══════════════════════════════════════════════════════════════
   EXPORTAÇÕES GLOBAIS — disponibiliza no escopo do navegador
   v3.14 — Bloco BZDs 7–8: oxazepam + temazepam (2026-06-19)
        oxazepam: glucuronidação direta (UGT) — sem interações CYP; perfil seguro em hepatopatas leves
                  $classe_opioides/alcool→contraindicada(5); fenobarbital→alta(4)
                  valproato→moderada(3) [depressão aditiva]; carbamazepina→leve(2) [farmacodinâmica]
        temazepam: glucuronidação direta (UGT) — hipnótico de curta/média ação; sem interações CYP3A4
                   $classe_opioides/alcool→contraindicada(5); fenobarbital→alta(4)
                   valproato→moderada(3) [depressão aditiva]
        (v3.13: bromazepam–midazolam · v3.12: clonazepam–alprazolam–diazepam–lorazepam)
═══════════════════════════════════════════════════════════════ */
window.DRUG_ALIASES    = DRUG_ALIASES;
window.DRUG_CLASSES    = DRUG_CLASSES;
window.INTERACOES_DB   = INTERACOES_DB;
