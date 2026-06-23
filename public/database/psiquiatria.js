/* ============================================================
   MedCases Pro — Módulo: PSIQUIATRIA
   Expõe: window.PSIQUIATRIA_DRUGS_DB
   Categorias previstas: Antidepressivos, Antipsicóticos,
                         Ansiolíticos, Estabilizadores de Humor
   Formato de cada entrada:
   {
     id, name, class,
     category: { pt: '...', es: '...' },
     color, colorTxt, icon,
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
   }
============================================================ */

window.PSIQUIATRIA_DRUGS_DB = [];
