# Infusão R68 — verificação técnica, 20/09/2026

Estado: implementação local. Não publicada; homologação clínica integral não concluída.

Correções: análise estrita de decimais PT/ES; mg e UI separados; 11 unidades;
conversão dose/vazão sem arredondamento intermediário; dependência de peso;
limpeza de resultados e bloqueio de cópia inválida; mudança de idioma sem
reescrever dose; remoção de aplicação automática de dose por preset;
resultado visível e controles com tamanho de toque adequado.

Os 16 fármacos continuam disponíveis. Os preparos são editáveis e não constituem
prescrições. A base clínica geral não foi alterada. Recomendações contextuais
legadas desta aba e categorias gestacionais desatualizadas foram retiradas;
gestação/pediatria exibem indicação de conferência específica. Não há ajuste
renal/hepático automático nem certificação de compatibilidade/estabilidade.

## Evidências

`node tests/infusion-math.test.cjs`: passa nos 11 pares de conversão direta/reversa,
parsing decimal, entradas inválidas, ausência de peso, incompatibilidade mg/UI e
consistência dimensional dos 16 registros. Os valores de dose dos testes são
vetores matemáticos, não recomendações terapêuticas.

Interface local completa: seleção de noradrenalina; peso 70 kg; 4 mg em volume
final de 250 mL; 0,05 mcg/kg/min produz 13,125 mL/h. Edição reversa para
26,25 mL/h produz 0,1 mcg/kg/min. Resultado inspecionado visualmente.

`npm run build`: manifesto offline e limites de exposição pública aprovados.
`git diff --check`: aprovado.

## Referências consultadas para os problemas identificados

- Vasopressina em unidades/minuto, não microgramas: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cce1a220-3178-49ec-b046-f0cb134cf051
- Heparina 25.000 unidades/250 mL: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cb1c1e7a-c9ca-4a07-8833-e45ce436d287
- Insulina regular em unidades/mL: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b519bd83-038c-4ec5-a231-a51ec5cc291f
- Amiodarona em mg/min: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0c9ee15a-5741-4aaa-8d80-c7bd2e45822e
- Nitroprussiato: a recomendação legada de 10 mcg/kg/min por 72 h foi removida;
  referência limita a taxa máxima a 10 minutos: https://www.dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=a8c5d04b-c6cb-46e6-b90c-e858a0a52406&type=pdf

## Limites da aprovação

Necessária revisão clínica dos preparos por apresentação e protocolo local,
compatibilidade, estabilidade, populações especiais e limites de dose.
Testes técnicos não permitem declarar ausência absoluta de erros clínicos.
Não foi realizada bateria de dispositivos físicos nem homologação integral PT/ES.
