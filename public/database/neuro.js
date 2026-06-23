/* ============================================================
   MedCases Pro — Módulo: NEUROLOGIA
   Expõe: window.NEURO_DRUGS_DB
   Categorias previstas: Anticonvulsivantes, Antiparkinsonianos,
                         Antimigrânosos, Neuroprotettores
   Formato de cada entrada:
   {
     id, name, class,
     category: { pt: '...', es: '...' },
     color, colorTxt, icon,
     dose(patientData, lang) → { dose, freq, via, adj, duration, note }
   }
============================================================ */

window.NEURO_DRUGS_DB = [];
