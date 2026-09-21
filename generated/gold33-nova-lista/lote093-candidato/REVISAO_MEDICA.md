# Lote 093 — novo candidato para revisão médica

Este arquivo NÃO é o candidato original aprovado. A autorização do usuário permite preparar conteúdo; a homologação histórica não foi transferida.

Dez fichas com contrato de 33 campos PT/ES. Campos herdados do cadastro têm origem identificada, mas precisam ser revistos quanto à formulação e ao escopo. Campos novos têm links de bula. A presença de 33 campos não equivale a validação clínica integral.

Nada deste diretório é carregado pela calculadora, pelo gateway ou pelo manifesto offline. Publicação e cálculos permanecem bloqueados.

| ID solicitado | Base usada | Situação |
|---|---|---|
| diclofenaco_gotas | data/drugs/diclofenaco.json | Nova ficha em revisão |
| diclofenaco_supositorio | data/drugs/diclofenaco.json | Nova ficha em revisão |
| cetoprofeno_gotas | data/drugs/cetoprofeno.json | Nova ficha em revisão |
| salbutamol_spray | data/drugs/salbutamol_nebulizacao.json | Nova ficha em revisão |
| salbutamol_solucao_inalatoria | data/drugs/salbutamol_nebulizacao.json | Proposta de alias; não duplicar |
| fenoterol_solucao_inalatoria | data/drugs/fenoterol_gotas.json | Proposta de alias; não duplicar |
| ipratropio_solucao_inalatoria | data/drugs/brometo_de_ipratropio_nebulizacao.json | Proposta de alias; não duplicar |
| prednisolona_solucao_oral | data/drugs/prednisolona.json | Nova ficha em revisão |
| dexametasona_elixir | data/drugs/dexametasona.json | Nova ficha em revisão |
| budesonida_suspensao_inalatoria | data/drugs/budesonida.json | Nova ficha em revisão |

## diclofenaco_gotas

Fontes específicas:
- [Fonte 1](https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf)
- [Fonte 2](https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, indications, dose, pediatricDose, administration, preparation, infusionProtocol, lactation, clinicalPearls.

Campos herdados a conferir: class, pharmacologicClass, pharmacodynamics, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, pregnancy, specialPopulations, patientEducation, alerts, mechanism, pharmacokinetics, renalDose, hepaticDose.

### name

**PT:** Diclofenaco resinato — gotas 15 mg/mL

**ES:** Diclofenaco resinato — gotas 15 mg/mL

### class

**PT:** AINE

**ES:** AINE

### pharmacologicClass

**PT:** Inibição de COX e síntese de prostaglandinas

**ES:** Inhibición de COX y síntesis de prostaglandinas

### pharmacodynamics

**PT:** Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.

**ES:** Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.

### commonAdverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e cefaleia.

**ES:** Dispepsia, náusea, dolor abdominal, edema y cefalea.

### dangerousAdverseEffects

**PT:** Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.

**ES:** Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.

### adverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e cefaleia. Graves: Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.

**ES:** Dispepsia, náusea, dolor abdominal, edema y cefalea. Graves: Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.

### contraindications

**PT:** Alergia a AINE/asma por aspirina, perioperatório de CABG, sangramento GI ativo; outras por produto.

**ES:** Alergia a AINE/asma por aspirina, perioperatorio de CABG, sangrado GI activo; otras por producto.

### interactions

**PT:** Anticoagulantes/antiagregantes, outros AINE, lítio, metotrexato, IECA/ARA2/diuréticos e CYP2C9.

**ES:** Anticoagulantes/antiagregantes, otros AINE, litio, metotrexato, IECA/ARA2/diuréticos y CYP2C9.

### monitoring

**PT:** Dor, PA, edema, GI/sangramento, hemograma, rim, potássio e fígado.

**ES:** Dolor, PA, edema, GI/sangrado, hemograma, riñón, potasio e hígado.

### pregnancy

**PT:** Evitar a partir de 20 semanas se possível e contraindicado no 3º trimestre conforme alerta regulatório.

**ES:** Evitar desde 20 semanas si es posible y contraindicado en tercer trimestre según alerta regulatoria.

### lactation

**PT:** A bula desaconselha durante amamentação.

**ES:** El prospecto desaconseja durante lactancia.

### specialPopulations

**PT:** Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.

**ES:** Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.

### patientEducation

**PT:** Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.

**ES:** Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.

### alerts

**PT:** Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.

**ES:** Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.

### mechanism

**PT:** Inibição de COX e síntese de prostaglandinas. O efeito deve ser interpretado por indicação, formulação e exposição.

**ES:** Inhibición de COX y síntesis de prostaglandinas. El efecto debe interpretarse por indicación, formulación y exposición.

### pharmacokinetics

**PT:** Metabolismo hepático CYP2C9; alta ligação proteica e eliminação renal/biliar de metabólitos.

**ES:** Metabolismo hepático CYP2C9; alta unión proteica y eliminación renal/biliar de metabolitos.

### indications

**PT:** Artrite juvenil crônica; adultos: dor/inflamação aguda. Febre isolada não é indicação.

**ES:** Artritis juvenil crónica; adultos: dolor/inflamación aguda. Fiebre aislada no es indicación.

### presentation

**PT:** Suspensão oral; frasco 20 mL.

**ES:** Suspensión oral; frasco 20 mL.

### dose

**PT:** Adultos: inicialmente 100–150 mg/dia, divididos em 2–3 tomadas.

**ES:** Adultos: inicialmente 100–150 mg/día, divididos en 2–3 tomas.

### pediatricDose

**PT:** ≥1 ano: 0,5–2 mg/kg/dia em 2–3 tomadas; artrite juvenil até 3 mg/kg/dia. Máximo 150 mg/dia.

**ES:** ≥1 año: 0,5–2 mg/kg/día en 2–3 tomas; artritis juvenil hasta 3 mg/kg/día. Máximo 150 mg/día.

### renalDose

**PT:** Evitar em doença renal avançada; monitorar creatinina, volume e potássio.

**ES:** Evitar en enfermedad renal avanzada; controlar creatinina, volumen y potasio.

### hepaticDose

**PT:** Contraindicado em insuficiência hepática grave em vários rótulos; monitorar transaminases, especialmente 4–8 semanas.

**ES:** Contraindicado en insuficiencia hepática grave en varias fichas; controlar transaminasas, especialmente 4–8 semanas.

### administration

**PT:** Via oral, preferencialmente nas refeições; contar em colher.

**ES:** Vía oral, preferentemente con comidas; contar en cuchara.

### preparation

**PT:** Agitar por 1 minuto; suspensão não solúvel em água/leite/suco.

**ES:** Agitar 1 minuto; suspensión no soluble en agua/leche/jugo.

### infusionProtocol

**PT:** Não aplicável à apresentação oral.

**ES:** No aplicable a la presentación oral.

### clinicalPearls

**PT:** Não intercambiar sais, concentrações ou conta-gotas.

**ES:** No intercambiar sales, concentraciones ni goteros.

### references

- 1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac
- 2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid
- https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf
- https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Paciente.pdf

### commercialNames

**PT:** Cataflam; bula brasileira consultada.

**ES:** Cataflam; prospecto brasileño consultado.

### presentations

**PT:** 15 mg/mL; aproximadamente 0,5 mg/gota, expressos como diclofenaco potássico.

**ES:** 15 mg/mL; aproximadamente 0,5 mg/gota, expresados como diclofenaco potásico.

### ref

**PT:** https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf

**ES:** https://portal.novartis.com.br/medicamentos/wp-content/uploads/2021/10/Bula-CATAFLAM-Suspensao-Gotas-Medico.pdf

## diclofenaco_supositorio

Fontes específicas:
- [Fonte 1](https://www.medicines.org.uk/emc/product/1044/smpc)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, indications, dose, pediatricDose, administration, preparation, infusionProtocol, contraindications, clinicalPearls.

Campos herdados a conferir: class, pharmacologicClass, pharmacodynamics, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, interactions, monitoring, pregnancy, lactation, specialPopulations, patientEducation, alerts, mechanism, pharmacokinetics, renalDose, hepaticDose.

### name

**PT:** Diclofenaco sódico — supositório

**ES:** Diclofenaco sódico — supositorio

### class

**PT:** AINE

**ES:** AINE

### pharmacologicClass

**PT:** Inibição de COX e síntese de prostaglandinas

**ES:** Inhibición de COX y síntesis de prostaglandinas

### pharmacodynamics

**PT:** Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.

**ES:** Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.

### commonAdverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e cefaleia.

**ES:** Dispepsia, náusea, dolor abdominal, edema y cefalea.

### dangerousAdverseEffects

**PT:** Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.

**ES:** Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.

### adverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e cefaleia. Graves: Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia.

**ES:** Dispepsia, náusea, dolor abdominal, edema y cefalea. Graves: Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia.

### contraindications

**PT:** Proctite; úlcera/hemorragia GI; falência renal/hepática; doença cardiovascular estabelecida; alergia a AINE; terceiro trimestre.

**ES:** Proctitis; úlcera/hemorragia GI; falla renal/hepática; enfermedad cardiovascular establecida; alergia a AINE; tercer trimestre.

### interactions

**PT:** Anticoagulantes/antiagregantes, outros AINE, lítio, metotrexato, IECA/ARA2/diuréticos e CYP2C9.

**ES:** Anticoagulantes/antiagregantes, otros AINE, litio, metotrexato, IECA/ARA2/diuréticos y CYP2C9.

### monitoring

**PT:** Dor, PA, edema, GI/sangramento, hemograma, rim, potássio e fígado.

**ES:** Dolor, PA, edema, GI/sangrado, hemograma, riñón, potasio e hígado.

### pregnancy

**PT:** Evitar a partir de 20 semanas se possível e contraindicado no 3º trimestre conforme alerta regulatório.

**ES:** Evitar desde 20 semanas si es posible y contraindicado en tercer trimestre según alerta regulatoria.

### lactation

**PT:** Baixa passagem; preferir menor dose/tempo e evitar tópico no mamilo.

**ES:** Bajo paso; preferir mínima dosis/tiempo y evitar tópico en pezón.

### specialPopulations

**PT:** Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.

**ES:** Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.

### patientEducation

**PT:** Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.

**ES:** Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.

### alerts

**PT:** Infarto/AVC, sangramento/perfuração GI, lesão renal/hepática, SCAR e anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.

**ES:** Infarto/ACV, sangrado/perforación GI, lesión renal/hepática, SCAR y anafilaxia. Dose bloqueada sem indicação, formulação, risco CV/GI/renal/hepático, gestação e total diário de todos os AINE.

### mechanism

**PT:** Inibição de COX e síntese de prostaglandinas. O efeito deve ser interpretado por indicação, formulação e exposição.

**ES:** Inhibición de COX y síntesis de prostaglandinas. El efecto debe interpretarse por indicación, formulación y exposición.

### pharmacokinetics

**PT:** Metabolismo hepático CYP2C9; alta ligação proteica e eliminação renal/biliar de metabólitos.

**ES:** Metabolismo hepático CYP2C9; alta unión proteica y eliminación renal/biliar de metabolitos.

### indications

**PT:** Dor/inflamação; pediatria: artrite juvenil e dor pós-operatória nas idades autorizadas.

**ES:** Dolor/inflamación; pediatría: artritis juvenil y dolor posoperatorio en edades autorizadas.

### presentation

**PT:** Supositório retal.

**ES:** Supositorio rectal.

### dose

**PT:** Adultos: 75–150 mg/dia fracionados; máximo total 150 mg/dia.

**ES:** Adultos: 75–150 mg/día divididos; máximo total 150 mg/día.

### pediatricDose

**PT:** 1–12 anos, artrite: 1–3 mg/kg/dia em 2–3 doses. 6–12 anos, pós-operatório: 1–2 mg/kg/dia, até 4 dias; somente 12,5/25 mg.

**ES:** 1–12 años, artritis: 1–3 mg/kg/día en 2–3 dosis. 6–12 años, posoperatorio: 1–2 mg/kg/día, hasta 4 días; solo 12,5/25 mg.

### renalDose

**PT:** Evitar em doença renal avançada; monitorar creatinina, volume e potássio.

**ES:** Evitar en enfermedad renal avanzada; controlar creatinina, volumen y potasio.

### hepaticDose

**PT:** Contraindicado em insuficiência hepática grave em vários rótulos; monitorar transaminases, especialmente 4–8 semanas.

**ES:** Contraindicado en insuficiencia hepática grave en varias fichas; controlar transaminasas, especialmente 4–8 semanas.

### administration

**PT:** Via retal após evacuação; não ingerir.

**ES:** Vía rectal tras evacuar; no ingerir.

### preparation

**PT:** Supositório pronto para administração retal.

**ES:** Supositorio listo para administración rectal.

### infusionProtocol

**PT:** Não aplicável.

**ES:** No aplicable.

### clinicalPearls

**PT:** 50/100 mg não indicados para crianças.

**ES:** 50/100 mg no indicados para niños.

### references

- 1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=diclofenac
- 2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaid-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic-fluid
- https://www.medicines.org.uk/emc/product/1044/smpc

### commercialNames

**PT:** Voltarol; Reino Unido.

**ES:** Voltarol; Reino Unido.

### presentations

**PT:** 12,5; 25; 50; 100 mg.

**ES:** 12,5; 25; 50; 100 mg.

### ref

**PT:** https://www.medicines.org.uk/emc/product/1044/smpc

**ES:** https://www.medicines.org.uk/emc/product/1044/smpc

## cetoprofeno_gotas

Fontes específicas:
- [Fonte 1](https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html)
- [Fonte 2](https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, dose, pediatricDose, renalDose, hepaticDose, administration, preparation, pregnancy, infusionProtocol.

Campos herdados a conferir: class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, indications, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, lactation, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Cetoprofeno — gotas 20 mg/mL

**ES:** Ketoprofeno — gotas 20 mg/mL

### class

**PT:** AINE derivado do ácido propiônico

**ES:** AINE derivado del ácido propiónico

### pharmacologicClass

**PT:** Inibição não seletiva de COX

**ES:** Inhibición no selectiva de COX

### commercialNames

**PT:** Genérico Eurofarma, Brasil.

**ES:** Genérico Eurofarma, Brasil.

### presentation

**PT:** Solução oral em gotas.

**ES:** Solución oral en gotas.

### presentations

**PT:** 20 mg/mL; 20 gotas/mL; 1 mg/gota.

**ES:** 20 mg/mL; 20 gotas/mL; 1 mg/gota.

### mechanism

**PT:** Inibição não seletiva de COX. O efeito deve ser interpretado por indicação, formulação e exposição.

**ES:** Inhibición no selectiva de COX. El efecto debe interpretarse por indicación, formulación y exposición.

### pharmacodynamics

**PT:** Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.

**ES:** Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.

### pharmacokinetics

**PT:** Alta ligação proteica; metabolismo hepático; eliminação renal de conjugados.

**ES:** Alta unión proteica; metabolismo hepático; eliminación renal de conjugados.

### indications

**PT:** Dor e inflamação musculoesquelética; indicações e apresentações variam regionalmente.

**ES:** Dolor e inflamación musculoesquelética; indicaciones y presentaciones varían regionalmente.

### dose

**PT:** Adultos: 50 gotas a cada 6–8 h; máximo 300 mg/dia.

**ES:** Adultos: 50 gotas cada 6–8 h; máximo 300 mg/día.

### pediatricDose

**PT:** >1 ano: 1 gota/kg a cada 6–8 h. 7–11 anos: 25 gotas a cada 6–8 h. Não extrapolar para <1 ano.

**ES:** >1 año: 1 gota/kg cada 6–8 h. 7–11 años: 25 gotas cada 6–8 h. No extrapolar a <1 año.

### renalDose

**PT:** Reduzir dose inicial; manter mínima eficaz. Insuficiência grave: contraindicado.

**ES:** Reducir dosis inicial; mantener mínima eficaz. Insuficiencia grave: contraindicado.

### hepaticDose

**PT:** Monitorar; menor dose eficaz. Insuficiência grave: contraindicado.

**ES:** Monitorizar; menor dosis eficaz. Insuficiencia grave: contraindicado.

### commonAdverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e tontura.

**ES:** Dispepsia, náusea, dolor abdominal, edema y mareo.

### dangerousAdverseEffects

**PT:** IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR.

**ES:** IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR.

### adverseEffects

**PT:** Dispepsia, náusea, dor abdominal, edema e tontura. Graves: IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR.

**ES:** Dispepsia, náusea, dolor abdominal, edema y mareo. Graves: IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR.

### contraindications

**PT:** Alergia a AINE/AAS, CABG, sangramento GI ativo e insuficiência renal grave.

**ES:** Alergia a AINE/AAS, CABG, sangrado GI activo e insuficiencia renal grave.

### interactions

**PT:** Anticoagulantes, AAS/outros AINE, IECA/BRA/diuréticos, lítio e metotrexato.

**ES:** Anticoagulantes, AAS/otros AINE, IECA/ARA-II/diuréticos, litio y metotrexato.

### monitoring

**PT:** Dor, PA, GI, rim, fígado, edema e risco CV.

**ES:** Dolor, PA, GI, riñón, hígado, edema y riesgo CV.

### administration

**PT:** Somente via oral.

**ES:** Solo vía oral.

### preparation

**PT:** Usar conta-gotas do produto; 1 gota=1 mg.

**ES:** Usar gotero del producto; 1 gota=1 mg.

### infusionProtocol

**PT:** Não aplicável à formulação oral.

**ES:** No aplicable a formulación oral.

### pregnancy

**PT:** Evitar uso sem avaliação obstétrica; contraindicado no terceiro trimestre.

**ES:** Evitar uso sin evaluación obstétrica; contraindicado en tercer trimestre.

### lactation

**PT:** Cautela; preferir alternativas com melhor documentação.

**ES:** Precaución; preferir alternativas mejor documentadas.

### specialPopulations

**PT:** Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.

**ES:** Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.

### patientEducation

**PT:** Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.

**ES:** Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.

### clinicalPearls

**PT:** Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.

**ES:** Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.

### alerts

**PT:** IAM/AVC, sangramento/perfuração GI, lesão renal, hepatotoxicidade, broncoespasmo e SCAR. Uso bloqueado sem produto/formulação, indicação, risco GI/CV, rim/fígado, gestação e anticoagulantes.

**ES:** IAM/ACV, sangrado/perforación GI, lesión renal, hepatotoxicidad, broncoespasmo y SCAR. Uso bloqueado sem produto/formulação, indicação, risco GI/CV, rim/fígado, gestação e anticoagulantes.

### references

- 1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=ketoprofen
- 2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/non-steroidal-anti-inflammatory-drugs-nsaids
- https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html
- https://eurofarma.com.br/produtos/bulas/view/patient/pt/bula-cetoprofeno-solucao-oral-gotas.html

### ref

**PT:** https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html

**ES:** https://eurofarma.com.br/produtos/bulas/view/healthcare/pt/bula-cetoprofeno-solucao-oral-gotas.html

## salbutamol_spray

Fontes específicas:
- [Fonte 1](https://www.medicines.org.uk/emc/product/850/smpc)
- [Fonte 2](https://www.medicines.org.uk/emc/files/pil.850.pdf)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, indications, pharmacokinetics, dose, pediatricDose, administration, preparation, infusionProtocol, clinicalPearls, safetyFlags, alerts.

Campos herdados a conferir: class, pharmacologicClass, mechanism, pharmacodynamics, renalDose, hepaticDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, pregnancy, lactation, specialPopulations, patientEducation.

### name

**PT:** Salbutamol — aerossol 100 microgramas/acionamento

**ES:** Salbutamol — aerosol 100 microgramos/actuación

### class

**PT:** Broncodilatador beta2-agonista de curta acao

**ES:** Broncodilatador agonista beta2 de corta accion

### pharmacologicClass

**PT:** Agonista beta2-adrenergico SABA

**ES:** Agonista beta2-adrenergico SABA

### mechanism

**PT:** Estimula beta2 em musculo liso bronquico, aumentando cAMP e promovendo broncodilatacao.

**ES:** Estimula beta2 en musculo liso bronquial, aumentando cAMP y produciendo broncodilatacion.

### pharmacodynamics

**PT:** Broncodilatacao rapida; doses excessivas podem causar taquicardia e hipocalemia.

**ES:** Broncodilatacion rapida; dosis excesivas pueden causar taquicardia e hipopotasemia.

### pharmacokinetics

**PT:** 10–20% da dose inalada alcança vias inferiores; eliminação principalmente urinária.

**ES:** 10–20% de dosis inhalada alcanza vías inferiores; eliminación principalmente urinaria.

### indications

**PT:** Alívio/prevenção do broncoespasmo; adultos e crianças ≥4 anos no escopo escolhido.

**ES:** Alivio/prevención del broncoespasmo; adultos y niños ≥4 años en el alcance elegido.

### commercialNames

**PT:** Ventolin Evohaler, Reino Unido.

**ES:** Ventolin Evohaler, Reino Unido.

### presentation

**PT:** Inalador pressurizado dosimetrado.

**ES:** Inhalador presurizado dosificado.

### presentations

**PT:** 100 microgramas/acionamento; 200 acionamentos.

**ES:** 100 microgramos/actuación; 200 actuaciones.

### dose

**PT:** Alívio adulto: 1–2 jatos. Demanda: máximo 8 jatos/24 h; necessidade crescente exige reavaliação.

**ES:** Alivio adulto: 1–2 inhalaciones. Demanda: máximo 8/24 h; necesidad creciente exige reevaluación.

### pediatricDose

**PT:** 4–11 anos: 1 jato; até 2 se necessário. ≥12 anos: dose adulta. <4 anos: revisão específica.

**ES:** 4–11 años: 1 inhalación; hasta 2 si precisa. ≥12 años: dosis adulta. <4 años: revisión específica.

### renalDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### hepaticDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### commonAdverseEffects

**PT:** Tremor, nervosismo, taquicardia, cefaleia e palpitações.

**ES:** Temblor, nerviosismo, taquicardia, cefalea y palpitaciones.

### dangerousAdverseEffects

**PT:** Broncoespasmo paradoxal, taquiarritmias, hipocalemia e acidose lactica em uso excessivo/intenso.

**ES:** Broncoespasmo paradojico, taquiarritmias, hipopotasemia y acidosis lactica con uso excesivo/intenso.

### adverseEffects

**PT:** Tosse, irritacao de garganta e nausea podem ocorrer.

**ES:** Pueden ocurrir tos, irritacion de garganta y nausea.

### contraindications

**PT:** Hipersensibilidade ao albuterol/salbutamol ou componentes.

**ES:** Hipersensibilidad a albuterol/salbutamol o componentes.

### interactions

**PT:** Beta-bloqueadores antagonizam; diureticos, xantinas e outros simpaticomimeticos podem aumentar efeitos/hipocalemia; MAOI/TCA exigem cautela.

**ES:** Beta-bloqueantes antagonizan; diureticos, xantinas y otros simpaticomimeticos pueden aumentar efectos/hipopotasemia; IMAO/TCA requieren precaucion.

### monitoring

**PT:** Resposta, FC, tremor e potassio em uso intensivo; aumento da necessidade de resgate exige reavaliacao.

**ES:** Respuesta, FC, temblor y potasio en uso intensivo; aumento de necesidad de rescate exige reevaluacion.

### administration

**PT:** Inalação oral; coordenar acionamento/inspiração. Espaçador quando necessário.

**ES:** Inhalación oral; coordinar actuación/inspiración. Espaciador cuando necesario.

### preparation

**PT:** Dispositivo pronto; não diluir nem nebulizar.

**ES:** Dispositivo listo; no diluir ni nebulizar.

### infusionProtocol

**PT:** Não aplicável; não injetar.

**ES:** No aplicable; no inyectar.

### pregnancy

**PT:** Usar conforme beneficio-risco; asma descontrolada tambem traz risco.

**ES:** Usar segun beneficio-riesgo; asma no controlada tambien implica riesgo.

### lactation

**PT:** Dados limitados; uso inalatorio tende a menor exposicao sistemica.

**ES:** Datos limitados; uso inhalado tiende a menor exposicion sistemica.

### specialPopulations

**PT:** Doenca cardiaca, hipertiroidismo e risco de hipocalemia exigem cautela.

**ES:** Enfermedad cardiaca, hipertiroidismo y riesgo de hipopotasemia requieren precaucion.

### patientEducation

**PT:** Se a dose habitual deixar de aliviar, procurar avaliacao urgente; nao aumentar frequencia por conta propria.

**ES:** Si dosis habitual deja de aliviar, buscar evaluacion urgente; no aumentar frecuencia por cuenta propia.

### clinicalPearls

**PT:** Na asma, SABA não deve ser tratamento único; associar terapia anti-inflamatória.

**ES:** En asma, SABA no debe ser tratamiento único; asociar terapia antiinflamatoria.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. AEROSSOL_DOSIMETRADO; SEM_CONVERSAO_DE_NEBULIZACAO; BETA2; HIPOCALEMIA.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. AEROSOL_DOSIFICADO; SIN_CONVERSION_DE_NEBULIZACION; BETA2; HIPOPOTASEMIA.

### alerts

**PT:** Não transferir volumes, doses ou cortes de peso da solução nebulizada para o aerossol.

**ES:** No transferir volúmenes, dosis ni límites de peso de solución nebulizada al aerosol.

### references

- DailyMed/NLM EUA - Albuterol Sulfate Inhalation Solution 0.083% 2.5 mg/3 mL, active 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d
- https://www.medicines.org.uk/emc/product/850/smpc
- https://www.medicines.org.uk/emc/files/pil.850.pdf

### ref

**PT:** https://www.medicines.org.uk/emc/product/850/smpc

**ES:** https://www.medicines.org.uk/emc/product/850/smpc

## salbutamol_solucao_inalatoria

Fontes específicas:
- [Fonte 1](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d)

Campos adaptados/pesquisados: .

Campos herdados a conferir: name, class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, indications, commercialNames, presentation, presentations, dose, pediatricDose, renalDose, hepaticDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, administration, preparation, infusionProtocol, pregnancy, lactation, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Salbutamol (albuterol) 0,083% - 2,5 mg/3 mL nebulizacao

**ES:** Salbutamol (albuterol) 0,083% - 2,5 mg/3 mL nebulizacion

### class

**PT:** Broncodilatador beta2-agonista de curta acao

**ES:** Broncodilatador agonista beta2 de corta accion

### pharmacologicClass

**PT:** Agonista beta2-adrenergico SABA

**ES:** Agonista beta2-adrenergico SABA

### mechanism

**PT:** Estimula beta2 em musculo liso bronquico, aumentando cAMP e promovendo broncodilatacao.

**ES:** Estimula beta2 en musculo liso bronquial, aumentando cAMP y produciendo broncodilatacion.

### pharmacodynamics

**PT:** Broncodilatacao rapida; doses excessivas podem causar taquicardia e hipocalemia.

**ES:** Broncodilatacion rapida; dosis excesivas pueden causar taquicardia e hipopotasemia.

### pharmacokinetics

**PT:** Efeito predominantemente pulmonar por nebulizacao; parte e deglutida/absorvida sistemicamente.

**ES:** Efecto predominantemente pulmonar por nebulizacion; parte se deglute/absorbe sistemicamente.

### indications

**PT:** Prevencao/alivio de broncoespasmo em adultos e criancas 2-12 anos conforme rotulo 0,083%.

**ES:** Prevencion/alivio de broncoespasmo en adultos y niños 2-12 anos segun rotulo 0,083%.

### commercialNames

**PT:** Albuterol Sulfate Inhalation Solution, EUA; equivalente farmacologico de salbutamol.

**ES:** Albuterol Sulfate Inhalation Solution, EE.UU.; equivalente farmacologico de salbutamol.

### presentation

**PT:** Vial dose unitaria para nebulizacao.

**ES:** Vial dosis unitaria para nebulizacion.

### presentations

**PT:** 0,083% = 2,5 mg/3 mL.

**ES:** 0,083% = 2,5 mg/3 mL.

### dose

**PT:** Adultos e criancas 2-12 anos com >=15 kg: 2,5 mg = 1 vial por nebulizacao, 3-4x/dia. Doses mais frequentes/altas nao recomendadas no rotulo.

**ES:** Adultos y niños 2-12 anos con >=15 kg: 2,5 mg = 1 vial por nebulizacion, 3-4 veces/dia. Dosis mas frecuentes/altas no recomendadas en rotulo.

### pediatricDose

**PT:** 2-12 anos e >=15 kg: 2,5 mg 3-4x/dia. <15 kg que necessite <2,5 mg/dose: usar solucao 0,5% em vez de fracionar vial 0,083%. <2 anos nao coberto por este rotulo.

**ES:** 2-12 anos y >=15 kg: 2,5 mg 3-4 veces/dia. <15 kg que requiera <2,5 mg/dosis: usar solucion 0,5% en vez de fraccionar vial 0,083%. <2 anos no cubierto por este rotulo.

### renalDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### hepaticDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### commonAdverseEffects

**PT:** Tremor, nervosismo, taquicardia, cefaleia e palpitações.

**ES:** Temblor, nerviosismo, taquicardia, cefalea y palpitaciones.

### dangerousAdverseEffects

**PT:** Broncoespasmo paradoxal, taquiarritmias, hipocalemia e acidose lactica em uso excessivo/intenso.

**ES:** Broncoespasmo paradojico, taquiarritmias, hipopotasemia y acidosis lactica con uso excesivo/intenso.

### adverseEffects

**PT:** Tosse, irritacao de garganta e nausea podem ocorrer.

**ES:** Pueden ocurrir tos, irritacion de garganta y nausea.

### contraindications

**PT:** Hipersensibilidade ao albuterol/salbutamol ou componentes.

**ES:** Hipersensibilidad a albuterol/salbutamol o componentes.

### interactions

**PT:** Beta-bloqueadores antagonizam; diureticos, xantinas e outros simpaticomimeticos podem aumentar efeitos/hipocalemia; MAOI/TCA exigem cautela.

**ES:** Beta-bloqueantes antagonizan; diureticos, xantinas y otros simpaticomimeticos pueden aumentar efectos/hipopotasemia; IMAO/TCA requieren precaucion.

### monitoring

**PT:** Resposta, FC, tremor e potassio em uso intensivo; aumento da necessidade de resgate exige reavaliacao.

**ES:** Respuesta, FC, temblor y potasio en uso intensivo; aumento de necesidad de rescate exige reevaluacion.

### administration

**PT:** Somente por nebulizador; administrar vial completo no produto 0,083%.

**ES:** Solo por nebulizador; administrar vial completo en producto 0,083%.

### preparation

**PT:** Vial unitario 3 mL pronto para nebulizacao.

**ES:** Vial unitario 3 mL listo para nebulizacion.

### infusionProtocol

**PT:** NAO APLICAVEL.

**ES:** NO APLICA.

### pregnancy

**PT:** Usar conforme beneficio-risco; asma descontrolada tambem traz risco.

**ES:** Usar segun beneficio-riesgo; asma no controlada tambien implica riesgo.

### lactation

**PT:** Dados limitados; uso inalatorio tende a menor exposicao sistemica.

**ES:** Datos limitados; uso inhalado tiende a menor exposicion sistemica.

### specialPopulations

**PT:** Doenca cardiaca, hipertiroidismo e risco de hipocalemia exigem cautela.

**ES:** Enfermedad cardiaca, hipertiroidismo y riesgo de hipopotasemia requieren precaucion.

### patientEducation

**PT:** Se a dose habitual deixar de aliviar, procurar avaliacao urgente; nao aumentar frequencia por conta propria.

**ES:** Si dosis habitual deja de aliviar, buscar evaluacion urgente; no aumentar frecuencia por cuenta propia.

### clinicalPearls

**PT:** A apresentacao 0,083% nao serve para doses <2,5 mg. Para criancas <15 kg que necessitam <2,5 mg, o rotulo orienta a solucao 0,5%.

**ES:** La presentacion 0,083% no sirve para dosis <2,5 mg. Para niños <15 kg que requieren <2,5 mg, rotulo indica solucion 0,5%.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. NEBULIZACAO; 2_5MG_3ML; PESO_15KG; BETA2; HIPOCALemia.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. NEBULIZACION; 2_5MG_3ML; PESO_15KG; BETA2; HIPOPOTASEMIA.

### alerts

**PT:** Crianca <15 kg que precise <2,5 mg: nao usar fracao do vial 0,083%; selecionar solucao 0,5% conforme rotulo.

**ES:** Niño <15 kg que necesite <2,5 mg: no usar fraccion de vial 0,083%; seleccionar solucion 0,5% segun rotulo.

### references

- DailyMed/NLM EUA - Albuterol Sulfate Inhalation Solution 0.083% 2.5 mg/3 mL, active 2026. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d

### ref

**PT:** https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d

**ES:** https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b72742df-1a6b-4483-aff3-3e79db5e015d

## fenoterol_solucao_inalatoria

Fontes específicas:
- [Fonte 1](https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file)

Campos adaptados/pesquisados: .

Campos herdados a conferir: name, class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, indications, commercialNames, presentation, presentations, dose, pediatricDose, renalDose, hepaticDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, administration, preparation, infusionProtocol, pregnancy, lactation, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Bromidrato de fenoterol 5 mg/mL gotas - Brasil

**ES:** Bromhidrato de fenoterol 5 mg/mL gotas - Brasil

### class

**PT:** Broncodilatador beta2-agonista de curta acao

**ES:** Broncodilatador agonista beta2 de corta accion

### pharmacologicClass

**PT:** Agonista beta2-adrenergico

**ES:** Agonista beta2-adrenergico

### mechanism

**PT:** Agonismo beta2 relaxa musculo liso bronquico. Esta descricao e consistente com a bula profissional historica do produto.

**ES:** Agonismo beta2 relaja musculo liso bronquial. Esta descripcion es consistente con ficha profesional historica del producto.

### pharmacodynamics

**PT:** Broncodilatacao rapida; pode causar taquicardia, tremor e hipocalemia.

**ES:** Broncodilatacion rapida; puede causar taquicardia, temblor e hipopotasemia.

### pharmacokinetics

**PT:** 

**ES:** 

### indications

**PT:** Produto 5 mg/mL aparece em listagem regulatoria/precos Anvisa vigente em 2026 para solucao em gotas. Indicacoes e posologia atuais nao foram confirmadas em bula primaria atual nesta execucao.

**ES:** Producto 5 mg/mL aparece en listado regulatorio/precios Anvisa vigente en 2026 como solucion en gotas. Indicaciones y posologia actuales no fueron confirmadas en ficha primaria actual en esta ejecucion.

### commercialNames

**PT:** BEROTEC aparece em listagens publicas brasileiras; marcas genericas tambem existem.

**ES:** BEROTEC aparece en listados publicos brasileños; tambien existen marcas genericas.

### presentation

**PT:** Solucao 5 mg/mL em frasco conta-gotas 20 mL conforme listagens brasileiras.

**ES:** Solucion 5 mg/mL en frasco gotero 20 mL segun listados brasileños.

### presentations

**PT:** 5 mg/mL, 20 mL.

**ES:** 5 mg/mL, 20 mL.

### dose

**PT:** 

**ES:** 

### pediatricDose

**PT:** 

**ES:** 

### renalDose

**PT:** 

**ES:** 

### hepaticDose

**PT:** 

**ES:** 

### commonAdverseEffects

**PT:** Tremor, taquicardia, palpitações, cefaleia e nervosismo sao descritos para beta2-agonistas/fenoterol.

**ES:** Temblor, taquicardia, palpitaciones, cefalea y nerviosismo se describen para agonistas beta2/fenoterol.

### dangerousAdverseEffects

**PT:** Hipocalemia, taquiarritmia, broncoespasmo paradoxal e eventos cardiovasculares podem ocorrer.

**ES:** Hipopotasemia, taquiarritmia, broncoespasmo paradojico y eventos cardiovasculares pueden ocurrir.

### adverseEffects

**PT:** Tosse, irritacao e nausea podem ocorrer.

**ES:** Pueden ocurrir tos, irritacion y nausea.

### contraindications

**PT:** 

**ES:** 

### interactions

**PT:** Xantinas, corticosteroides e diureticos podem aumentar hipocalemia; beta-bloqueadores antagonizam broncodilatacao. Baseado em bula profissional historica, pendente de confirmacao primaria atual.

**ES:** Xantinas, corticoides y diureticos pueden aumentar hipopotasemia; beta-bloqueantes antagonizan broncodilatacion. Basado en ficha profesional historica, pendiente de confirmacion primaria actual.

### monitoring

**PT:** Resposta broncodilatadora, FC/ritmo e potassio em uso intensivo/alto risco.

**ES:** Respuesta broncodilatadora, FC/ritmo y potasio en uso intensivo/alto riesgo.

### administration

**PT:** O produto brasileiro e solucao em gotas para uso oral/inalatorio historicamente; neste candidato, nenhuma via/dose automatica e liberada sem bula primaria atual.

**ES:** Producto brasileño es solucion en gotas para uso oral/inhalatorio historicamente; en este candidato, ninguna via/dosis automatica se habilita sin ficha primaria actual.

### preparation

**PT:** 

**ES:** 

### infusionProtocol

**PT:** NAO APLICAVEL.

**ES:** NO APLICA.

### pregnancy

**PT:** 

**ES:** 

### lactation

**PT:** 

**ES:** 

### specialPopulations

**PT:** Doenca cardiaca e risco de hipocalemia exigem cautela.

**ES:** Enfermedad cardiaca y riesgo de hipopotasemia requieren precaucion.

### patientEducation

**PT:** Nao aumentar numero de gotas por conta propria; procurar avaliacao se necessidade de resgate aumenta ou surgem palpitações intensas.

**ES:** No aumentar numero de gotas por cuenta propia; buscar evaluacion si aumenta necesidad de rescate o aparecen palpitaciones intensas.

### clinicalPearls

**PT:** A concentracao 5 mg/mL esta confirmada em listagens brasileiras atuais; a posologia atual nao foi promovida sem bula primaria verificavel.

**ES:** Concentracion 5 mg/mL confirmada en listados brasileños actuales; posologia actual no se promovio sin ficha primaria verificable.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. BETA2_AGONISTA; DOSE_BLOQUEADA; VIA_BLOQUEADA; HIPOCALemia; TAQUIARRITMIA.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. BETA2_AGONISTA; DOSIS_BLOQUEADA; VIA_BLOQUEADA; HIPOPOTASEMIA; TAQUIARRITMIA.

### alerts

**PT:** DOSE/PEDIATRIA/PREPARO permanecem BLOQUEADOS ate confirmar bula primaria atual do produto 5 mg/mL.

**ES:** DOSIS/PEDIATRIA/PREPARACION permanecen BLOQUEADOS hasta confirmar ficha primaria actual del producto 5 mg/mL.

### references

- ANVISA/CMED - listagem de precos 2026 contendo bromidrato de fenoterol 5 mg/mL gotas/BEROTEC. https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file
- Bula profissional historica do bromidrato de fenoterol, hospedada por consorcio publico; usada apenas para sinais farmacologicos/interacoes, nao para liberar dose atual. https://www.conims.pr.gov.br/arquivo_usu/documentoanexo/conims-20200828-140719.pdf
- https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file

### ref

**PT:** https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file

**ES:** https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos/anos-anteriores/arquivos/5333json-file-1/%40%40download/file

## ipratropio_solucao_inalatoria

Fontes específicas:
- [Fonte 1](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b)

Campos adaptados/pesquisados: .

Campos herdados a conferir: name, class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, indications, commercialNames, presentation, presentations, dose, pediatricDose, renalDose, hepaticDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, administration, preparation, infusionProtocol, pregnancy, lactation, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Brometo de ipratropio 0,02% solucao para nebulizacao

**ES:** Bromuro de ipratropio 0,02% solucion para nebulizacion

### class

**PT:** Broncodilatador anticolinergico

**ES:** Broncodilatador anticolinergico

### pharmacologicClass

**PT:** Antagonista muscarinico de curta acao

**ES:** Antagonista muscarinico de corta accion

### mechanism

**PT:** Bloqueia receptores muscarinicos em vias aereas e reduz broncoconstricao vagal.

**ES:** Bloquea receptores muscarinicos en vias aereas y reduce broncoconstriccion vagal.

### pharmacodynamics

**PT:** Broncodilatacao principalmente local, com pouca absorcao sistemica.

**ES:** Broncodilatacion principalmente local, con poca absorcion sistemica.

### pharmacokinetics

**PT:** Composto quaternario com absorcao sistêmica baixa por inalacao.

**ES:** Compuesto cuaternario con absorcion sistemica baja por inhalacion.

### indications

**PT:** Broncodilatacao de manutencao em COPD conforme rotulo da solucao 0,02%.

**ES:** Broncodilatacion de mantenimiento en EPOC segun rotulo de solucion 0,02%.

### commercialNames

**PT:** Ipratropium Bromide Inhalation Solution, EUA.

**ES:** Ipratropium Bromide Inhalation Solution, EE.UU.

### presentation

**PT:** Solucao de dose unitaria para nebulizador.

**ES:** Solucion de dosis unitaria para nebulizador.

### presentations

**PT:** 500 mcg em 2,5 mL = 0,02%.

**ES:** 500 mcg en 2,5 mL = 0,02%.

### dose

**PT:** 500 mcg = 1 vial por nebulizacao, 3-4x/dia, com 6-8 h entre doses, conforme rotulo COPD.

**ES:** 500 mcg = 1 vial por nebulizacion, 3-4 veces/dia, con 6-8 h entre dosis, segun rotulo EPOC.

### pediatricDose

**PT:** Este rotulo especifico nao estabelece dose pediatrica. AUTOMATIZACAO_PEDIATRICA=BLOQUEADA.

**ES:** Este rotulo especifico no establece dosis pediatrica. AUTOMATIZACION_PEDIATRICA=BLOQUEADA.

### renalDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### hepaticDose

**PT:** Sem ajuste numerico especifico.

**ES:** Sin ajuste numerico especifico.

### commonAdverseEffects

**PT:** Boca seca, cefaleia, nausea, tosse e irritacao de garganta.

**ES:** Boca seca, cefalea, nausea, tos e irritacion de garganta.

### dangerousAdverseEffects

**PT:** Broncoespasmo paradoxal, retencao urinaria e precipitacao/piora de glaucoma de angulo fechado se atingir os olhos.

**ES:** Broncoespasmo paradojico, retencion urinaria y precipitacion/empeoramiento de glaucoma de angulo cerrado si alcanza ojos.

### adverseEffects

**PT:** Tontura, constipacao e palpitacoes podem ocorrer.

**ES:** Pueden ocurrir mareo, estrenimiento y palpitaciones.

### contraindications

**PT:** Hipersensibilidade a ipratropio/atropinicos conforme rotulo.

**ES:** Hipersensibilidad a ipratropio/atropinicos segun rotulo.

### interactions

**PT:** Outros anticolinergicos podem somar efeitos.

**ES:** Otros anticolinergicos pueden sumar efectos.

### monitoring

**PT:** Resposta broncodilatadora, sintomas anticolinergicos e exposicao ocular acidental.

**ES:** Respuesta broncodilatadora, sintomas anticolinergicos y exposicion ocular accidental.

### administration

**PT:** Somente inalacao por nebulizador; evitar vazamento da mascara para os olhos.

**ES:** Solo inhalacion por nebulizador; evitar fuga de mascarilla hacia ojos.

### preparation

**PT:** Conteudo completo de 1 vial no reservatorio; pode ser misturado com albuterol se usado dentro de 1 h segundo rotulo.

**ES:** Contenido completo de 1 vial en reservorio; puede mezclarse con albuterol si se usa dentro de 1 h segun rotulo.

### infusionProtocol

**PT:** NAO APLICAVEL.

**ES:** NO APLICA.

### pregnancy

**PT:** Usar conforme beneficio-risco.

**ES:** Usar segun beneficio-riesgo.

### lactation

**PT:** Dados sistemicos limitados; absorcao inalatoria e baixa.

**ES:** Datos sistemicos limitados; absorcion inhalatoria es baja.

### specialPopulations

**PT:** Glaucoma de angulo fechado e retencao urinaria/hiperplasia prostatica exigem cautela.

**ES:** Glaucoma de angulo cerrado y retencion urinaria/hiperplasia prostatica requieren precaucion.

### patientEducation

**PT:** Nao ingerir/injetar; proteger os olhos e procurar avaliacao se broncoespasmo piorar.

**ES:** No ingerir/inyectar; proteger ojos y buscar evaluacion si broncoespasmo empeora.

### clinicalPearls

**PT:** A solucao 0,02% rotulada e 500 mcg/2,5 mL; nao confundir com frascos multidose de outras concentracoes.

**ES:** La solucion 0,02% rotulada es 500 mcg/2,5 mL; no confundir con frascos multidosis de otras concentraciones.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. NEBULIZACAO; ANTICOLINERGICO; OLHOS_GLAUCOMA; NAO_INJETAR; PEDIATRIA_BLOQUEADA.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. NEBULIZACION; ANTICOLINERGICO; OJOS_GLAUCOMA; NO_INYECTAR; PEDIATRIA_BLOQUEADA.

### alerts

**PT:** Pediatria nao automatizar com este rotulo. Uso e exclusivamente inalatorio.

**ES:** Pediatria no automatizar con este rotulo. Uso exclusivamente inhalatorio.

### references

- DailyMed/NLM EUA - Ipratropium Bromide Inhalation Solution 0.02%, active 2026. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b

### ref

**PT:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b

**ES:** https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3249aea8-a395-f09f-e063-6294a90a2d8b

## prednisolona_solucao_oral

Fontes específicas:
- [Fonte 1](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9)
- [Fonte 2](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, mechanism, pharmacodynamics, pharmacokinetics, dose, pediatricDose, renalDose, hepaticDose, contraindications, interactions, monitoring, administration, preparation, infusionProtocol, pregnancy, lactation.

Campos herdados a conferir: class, pharmacologicClass, indications, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Prednisolona fosfato sódico — solução oral 15 mg/5 mL

**ES:** Prednisolona fosfato sódico — solución oral 15 mg/5 mL

### class

**PT:** Glicocorticoide sistêmico

**ES:** Glicocorticoide sistêmico

### pharmacologicClass

**PT:** Glicocorticoide sistêmico

**ES:** Glicocorticoide sistêmico

### commercialNames

**PT:** Produto genérico PAI, EUA.

**ES:** Producto genérico PAI, EE.UU.

### presentation

**PT:** Solução oral.

**ES:** Solución oral.

### presentations

**PT:** 15 mg de base/5 mL; não confundir com massa do sal.

**ES:** 15 mg de base/5 mL; no confundir con masa de sal.

### mechanism

**PT:** Atividade glicocorticoide: modula inflamação e imunidade.

**ES:** Actividad glucocorticoide: modula inflamación e inmunidad.

### pharmacodynamics

**PT:** Anti-inflamatória; hiperglicemia e supressão adrenal dependem da exposição.

**ES:** Antiinflamatoria; hiperglucemia y supresión adrenal dependen de exposición.

### pharmacokinetics

**PT:** Absorção oral rápida; ligação proteica 70–90%; meia-vida 2–4 h; metabolismo hepático.

**ES:** Absorción oral rápida; unión proteica 70–90%; semivida 2–4 h; metabolismo hepático.

### indications

**PT:** Condições inflamatórias, alérgicas, autoimunes e outras indicações conforme via e protocolo.

**ES:** Condições inflamatórias, alérgicas, autoimunes y outras indicações conforme via y protocolo.

### dose

**PT:** Inicial 5–60 mg/dia, individualizada pela doença/resposta; não é esquema universal.

**ES:** Inicial 5–60 mg/día, individualizada por enfermedad/respuesta; no es esquema universal.

### pediatricDose

**PT:** Faixa inicial geral: 0,14–2 mg/kg/dia em 3–4 doses; escolher protocolo por indicação, não automatizar a faixa.

**ES:** Rango inicial general: 0,14–2 mg/kg/día en 3–4 dosis; elegir protocolo por indicación, no automatizar el rango.

### renalDose

**PT:** Sem tabela numérica; cautela com retenção hidrossalina.

**ES:** Sin tabla numérica; precaución por retención hidrosalina.

### hepaticDose

**PT:** Individualizar; efeitos podem aumentar na cirrose.

**ES:** Individualizar; efectos pueden aumentar en cirrosis.

### commonAdverseEffects

**PT:** Aumento do apetite, dispepsia, insônia, alteração de humor e hiperglicemia.

**ES:** Aumento do apetite, dispepsia, insônia, alteração de humor y hiperglicemia.

### dangerousAdverseEffects

**PT:** Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.

**ES:** Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.

### adverseEffects

**PT:** Aumento do apetite, dispepsia, insônia, alteração de humor e hiperglicemia.; Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.

**ES:** Aumento do apetite, dispepsia, insônia, alteração de humor y hiperglicemia.; Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.

### contraindications

**PT:** Micose sistêmica; hipersensibilidade.

**ES:** Micosis sistémica; hipersensibilidad.

### interactions

**PT:** Indutores/inibidores enzimáticos, anticoagulantes, AINEs, diuréticos e vacinas.

**ES:** Inductores/inhibidores enzimáticos, anticoagulantes, AINEs, diuréticos y vacunas.

### monitoring

**PT:** Crescimento, pressão, glicose, infecção, olhos e supressão adrenal.

**ES:** Crecimiento, presión, glucosa, infección, ojos y supresión adrenal.

### administration

**PT:** Via oral; após tratamento prolongado, retirada gradual.

**ES:** Vía oral; tras tratamiento prolongado, retirada gradual.

### preparation

**PT:** Solução pronta; confirmar 3 mg de base/mL.

**ES:** Solución lista; confirmar 3 mg de base/mL.

### infusionProtocol

**PT:** Não aplicável.

**ES:** No aplicable.

### pregnancy

**PT:** Avaliar benefício/risco fetal.

**ES:** Evaluar beneficio/riesgo fetal.

### lactation

**PT:** Excreção no leite; avaliar risco infantil.

**ES:** Excreción en leche; evaluar riesgo infantil.

### specialPopulations

**PT:** Individualizar por idade, comorbidades e função orgânica.

**ES:** Individualizar por idade, comorbidades y función orgânica.

### patientEducation

**PT:** Orientar adesão, administração correta e sinais de alarme.

**ES:** Orientar adesão, administração correta y sinais de alarme.

### clinicalPearls

**PT:** Formulações e vias não são automaticamente intercambiáveis.

**ES:** Formulações y vias no são automaticamente intercambiáveis.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.

### alerts

**PT:** Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose e toxicidade ocular.; revisão clínica obrigatória.

**ES:** Infecção grave, supressão adrenal, psicose, sangramento gastrointestinal, osteonecrose y toxicidade ocular.; revisão clínica obrigatória.

### references

- Fonte primária/oficial - https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prednisolona
- Fonte primária/oficial - https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7262fc84-3db2-4475-8ae4-6bec4477cb81

### ref

**PT:** https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9

**ES:** https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a0d74ae0-7b2d-4d36-9211-c76f5063b5a9

## dexametasona_elixir

Fontes específicas:
- [Fonte 1](https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, dose, pediatricDose, administration, preparation, infusionProtocol, clinicalPearls.

Campos herdados a conferir: class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, indications, renalDose, hepaticDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, pregnancy, lactation, specialPopulations, patientEducation, alerts.

### name

**PT:** Dexametasona — elixir 0,5 mg/5 mL

**ES:** Dexametasona — elixir 0,5 mg/5 mL

### class

**PT:** Corticosteroide sistêmico

**ES:** Corticosteroide sistémico

### pharmacologicClass

**PT:** Agonista glicocorticoide potente

**ES:** Agonista glucocorticoide potente

### commercialNames

**PT:** Produto Marlex, EUA.

**ES:** Producto Marlex, EE.UU.

### presentation

**PT:** Elixir oral.

**ES:** Elixir oral.

### presentations

**PT:** 0,5 mg/5 mL; contém álcool 5%.

**ES:** 0,5 mg/5 mL; contiene alcohol 5%.

### mechanism

**PT:** Agonista glicocorticoide potente. O efeito deve ser interpretado por indicação, formulação e exposição.

**ES:** Agonista glucocorticoide potente. El efecto debe interpretarse por indicación, formulación y exposición.

### pharmacodynamics

**PT:** Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.

**ES:** Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.

### pharmacokinetics

**PT:** Longa duração biológica, metabolismo hepático e excreção renal de metabólitos.

**ES:** Larga duración biológica, metabolismo hepático y excreción renal de metabolitos.

### indications

**PT:** Condições inflamatórias, alérgicas, autoimunes, edema cerebral, oncologia e outras indicações específicas.

**ES:** Enfermedades inflamatorias, alérgicas, autoinmunes, edema cerebral, oncología y otras indicaciones específicas.

### dose

**PT:** Inicial 0,75–9 mg/dia conforme doença; titular individualmente.

**ES:** Inicial 0,75–9 mg/día según enfermedad; titular individualmente.

### pediatricDose

**PT:** Sem regime pediátrico universal nesta preparação; não extrapolar faixa adulta.

**ES:** Sin régimen pediátrico universal en esta preparación; no extrapolar rango adulto.

### renalDose

**PT:** Sem ajuste rotineiro, mas retenção, glicemia e infecção exigem monitorização.

**ES:** Sin ajuste rutinario, pero retención, glucemia e infección requieren control.

### hepaticDose

**PT:** Sem tabela fixa; cautela em hepatopatia.

**ES:** Sin tabla fija; precaución en hepatopatía.

### commonAdverseEffects

**PT:** Hiperglicemia, insônia, dispepsia, alterações de humor e retenção.

**ES:** Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención.

### dangerousAdverseEffects

**PT:** Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.

**ES:** Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.

### adverseEffects

**PT:** Hiperglicemia, insônia, dispepsia, alterações de humor e retenção. Graves: Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal.

**ES:** Hiperglucemia, insomnio, dispepsia, cambios de ánimo y retención. Graves: Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal.

### contraindications

**PT:** Infecção fúngica sistêmica; vacina viva em dose imunossupressora; hipersensibilidade.

**ES:** Infección fúngica sistémica; vacuna viva con dosis inmunosupresora; hipersensibilidad.

### interactions

**PT:** CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos e vacinas.

**ES:** CYP3A4, AINE, anticoagulantes, antidiabéticos, diuréticos y vacunas.

### monitoring

**PT:** Glicemia, PA, eletrólitos, infecção, humor, olho, osso e eixo adrenal.

**ES:** Glucemia, PA, electrolitos, infección, ánimo, ojo, hueso y eje suprarrenal.

### administration

**PT:** Via oral; retirada gradual após uso prolongado.

**ES:** Vía oral; retirada gradual tras uso prolongado.

### preparation

**PT:** Pronto; medir volume correspondente à prescrição.

**ES:** Listo; medir volumen correspondiente a prescripción.

### infusionProtocol

**PT:** Não aplicável; elixir não injetável.

**ES:** No aplicable; elixir no inyectable.

### pregnancy

**PT:** Usar menor dose eficaz; risco fetal/neonatal depende de exposição.

**ES:** Usar mínima dosis eficaz; riesgo fetal/neonatal depende de exposición.

### lactation

**PT:** Passa ao leite; altas doses podem reduzir produção.

**ES:** Pasa a leche; dosis altas pueden reducir producción.

### specialPopulations

**PT:** Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.

**ES:** Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.

### patientEducation

**PT:** Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.

**ES:** Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.

### clinicalPearls

**PT:** Considerar álcool e excipientes; não reutilizar preparo IV.

**ES:** Considerar alcohol y excipientes; no reutilizar preparación IV.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.

### alerts

**PT:** Infecção grave, psicose, sangramento GI, osteonecrose, glaucoma e crise adrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.

**ES:** Infección grave, psicosis, sangrado GI, osteonecrosis, glaucoma y crisis suprarrenal. Dose/infusão bloqueadas sem indicação, gravidade, idade/peso, produto, via, infecção, glicemia e plano de desmame.

### references

- 1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=dexamethasone
- 2. Fonte regulatória primária consultada em 2026-09-18: https://www.fda.gov/drugsatfda
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541

### ref

**PT:** https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541

**ES:** https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7b51ffce-ec64-4b49-8870-b9666537c541

## budesonida_suspensao_inalatoria

Fontes específicas:
- [Fonte 1](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee)

Campos adaptados/pesquisados: name, commercialNames, presentation, presentations, indications, dose, pediatricDose, hepaticDose, administration, preparation, infusionProtocol.

Campos herdados a conferir: class, pharmacologicClass, mechanism, pharmacodynamics, pharmacokinetics, renalDose, commonAdverseEffects, dangerousAdverseEffects, adverseEffects, contraindications, interactions, monitoring, pregnancy, lactation, specialPopulations, patientEducation, clinicalPearls, alerts.

### name

**PT:** Budesonida — suspensão para nebulização

**ES:** Budesonida — suspensión para nebulización

### class

**PT:** Corticosteroide inalatório

**ES:** Corticosteroide inhalado

### pharmacologicClass

**PT:** Agonista glicocorticoide anti-inflamatório local

**ES:** Agonista glucocorticoide antiinflamatorio local

### commercialNames

**PT:** Budesonide Inhalation Suspension, EUA.

**ES:** Budesonide Inhalation Suspension, EE.UU.

### presentation

**PT:** Suspensão inalatória em ampolas.

**ES:** Suspensión inhalatoria en ampollas.

### presentations

**PT:** 0,25 mg/2 mL; 0,5 mg/2 mL.

**ES:** 0,25 mg/2 mL; 0,5 mg/2 mL.

### mechanism

**PT:** Agonista glicocorticoide anti-inflamatório local. O efeito deve ser interpretado por indicação, formulação e exposição.

**ES:** Agonista glucocorticoide antiinflamatorio local. El efecto debe interpretarse por indicación, formulación y exposición.

### pharmacodynamics

**PT:** Resposta e toxicidade dependem da exposição e população; consultar dose e monitorização.

**ES:** Respuesta y toxicidad dependen de exposición y población; consultar dosis y monitorización.

### pharmacokinetics

**PT:** Alta depuração de primeira passagem; CYP3A4; meia-vida ~2-3 h.

**ES:** Alto aclaramiento de primer paso; CYP3A4; semivida ~2-3 h.

### indications

**PT:** Manutenção da asma: 12 meses–8 anos; não trata broncoespasmo agudo.

**ES:** Mantenimiento del asma: 12 meses–8 años; no trata broncoespasmo agudo.

### dose

**PT:** Escopo pediátrico; não importar dose de inalador em pó.

**ES:** Alcance pediátrico; no importar dosis de inhalador en polvo.

### pediatricDose

**PT:** Broncodilatador prévio: 0,25 mg 2x/dia. Corticoide inalatório prévio: 0,25–0,5 mg 2x/dia. Corticoide oral prévio: 0,5 mg 2x/dia.

**ES:** Broncodilatador previo: 0,25 mg 2/día. Corticoide inhalado previo: 0,25–0,5 mg 2/día. Corticoide oral previo: 0,5 mg 2/día.

### renalDose

**PT:** Sem ajuste formal; exposição sistêmica usualmente baixa.

**ES:** Sin ajuste formal; exposición sistémica habitualmente baja.

### hepaticDose

**PT:** Metabolismo hepático; monitorar por possível acúmulo.

**ES:** Metabolismo hepático; monitorizar por posible acumulación.

### commonAdverseEffects

**PT:** Candidíase oral, disfonia, tosse e cefaleia.

**ES:** Candidiasis oral, disfonía, tos y cefalea.

### dangerousAdverseEffects

**PT:** Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.

**ES:** Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.

### adverseEffects

**PT:** Candidíase oral, disfonia, tosse e cefaleia. Graves: Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção.

**ES:** Candidiasis oral, disfonía, tos y cefalea. Graves: Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección.

### contraindications

**PT:** Hipersensibilidade; não usar como tratamento primário de crise/estado de mal asmático.

**ES:** Hipersensibilidad; no usar como tratamiento primario de crisis/estado asmático.

### interactions

**PT:** Inibidores fortes CYP3A4 aumentam exposição sistêmica.

**ES:** Inhibidores fuertes CYP3A4 aumentan exposición sistémica.

### monitoring

**PT:** Controle, resgate, técnica, crescimento infantil, candidíase, olhos e eixo adrenal em altas doses.

**ES:** Control, rescate, técnica, crecimiento infantil, candidiasis, ojos y eje suprarrenal con dosis altas.

### administration

**PT:** Nebulizador a jato; não ultrassônico; enxaguar boca.

**ES:** Nebulizador de chorro; no ultrasónico; enjuagar boca.

### preparation

**PT:** Não presumir compatibilidade para misturas.

**ES:** No presumir compatibilidad para mezclas.

### infusionProtocol

**PT:** Não injetável.

**ES:** No inyectable.

### pregnancy

**PT:** Experiência em asma é ampla; usar menor dose eficaz.

**ES:** Experiencia en asma amplia; usar mínima dosis eficaz.

### lactation

**PT:** Exposição infantil baixa; geralmente compatível.

**ES:** Exposición infantil baja; generalmente compatible.

### specialPopulations

**PT:** Ver pediatria, função renal/hepática, gestação, lactação e idosos; individualizar fragilidade e polifarmácia.

**ES:** Ver pediatría, función renal/hepática, embarazo, lactancia y ancianos; individualizar fragilidad y polifarmacia.

### patientEducation

**PT:** Explicar indicação, administração, adesão e sinais de alarme; não alterar dose sem orientação.

**ES:** Explicar indicación, administración, adherencia y signos de alarma; no cambiar dosis sin indicación.

### clinicalPearls

**PT:** Confirmar produto, concentração, via, indicação, peso e função orgânica antes de calcular ou administrar.

**ES:** Confirmar producto, concentración, vía, indicación, peso y función orgánica antes de calcular o administrar.

### guidelineRecommendations

**PT:** Esta preparação usa bulas e texto de referência preexistente; não foi feita validação independente de diretrizes.

**ES:** Esta preparación usa prospectos y texto de referencia preexistente; no se realizó validación independiente de guías.

### safetyFlags

**PT:** CANDIDATO NOVO: revisão médica pendente; cálculos e publicação bloqueados. CANDIDATO NÃO HOMOLOGADO. Revisão médica obrigatória antes de integração.

**ES:** CANDIDATO NUEVO: revisión médica pendiente; cálculos y publicación bloqueados. CANDIDATO NO HOMOLOGADO. Revisión médica obligatoria antes de integración.

### alerts

**PT:** Broncoespasmo paradoxal, supressão adrenal, redução do crescimento, glaucoma/catarata e infecção. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.

**ES:** Broncoespasmo paradójico, supresión suprarrenal, menor crecimiento, glaucoma/catarata e infección. Dose bloqueada sem idade, gravidade, terapia prévia, produto/dispositivo e força exatos.

### references

- 1. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=54234b7d-3bcc-4809-1881-1d21484856a0
- 2. Fonte regulatória primária consultada em 2026-09-18: https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=human&query=budesonide+inhalation+suspension
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee

### ref

**PT:** https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee

**ES:** https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=1d139a25-9c17-4b3e-8ffd-b2d562cc00ee
