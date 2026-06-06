/* ============================================================
   MedCases Pro — Módulo: REUMATOLOGIA
   Expõe: window.REUMATOLOGIA_DRUGS_DB
   Categorias previstas: DMARDs, Biológicos, Corticoides Sistêmicos,
                         Anti-gotosos, AINEs Reumatológicos
   Formato de cada entrada:
   {
     id, name, class,
     category: { pt: '...', es: '...' },
     color, colorTxt, icon,
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
   }
============================================================ */

window.REUMATOLOGIA_DRUGS_DB = [];
