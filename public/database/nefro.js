/* ============================================================
   MedCases Pro — Módulo: NEFROLOGIA
   Expõe: window.NEFRO_DRUGS_DB
   Categorias previstas: Quelantes de Fósforo, Eritropoietinas,
                         Diuréticos Nefro, Imunossupressores Renais
   Formato de cada entrada:
   {
     id, name, class,
     category: { pt: '...', es: '...' },
     color, colorTxt, icon,
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
   }
============================================================ */

window.NEFRO_DRUGS_DB = [];
