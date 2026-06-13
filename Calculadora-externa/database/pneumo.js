/* ============================================================
   MedCases Pro — Módulo: PNEUMOLOGIA
   Expõe: window.PNEUMO_DRUGS_DB
   Categorias previstas: Broncodilatadores, Corticoides Inalatórios,
                         Antiasmáticos, Mucolíticos, Antifibróticos
   Formato de cada entrada:
   {
     id, name, class,
     category: { pt: '...', es: '...' },
     color, colorTxt, icon,
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
   }
============================================================ */

window.PNEUMO_DRUGS_DB = [];
