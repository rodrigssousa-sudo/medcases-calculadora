# Validação das calculadoras de eletrólitos

Registro da rodada de interface encerrada em 19/09/2026, identificada nos
assets como `646-osmolality-ui-review`. Este documento distingue a aprovação
técnica da interface da homologação clínica dos cálculos e condutas.

## Estados de homologação

| Calculadora | Estado registrado nesta rodada |
| --- | --- |
| Sódio | Homologado no gate anterior; nova dependência clínica pendente, descrita abaixo |
| Potássio | Homologado |
| Cloro | Homologado |
| Cálcio | Homologado no gate final 640 |
| Magnésio | PASS técnico; homologação clínica suspensa |
| Fósforo | PASS técnico; homologação clínica suspensa |
| Bicarbonato | PASS técnico; homologação clínica suspensa |
| Glicose | PASS técnico; homologação clínica suspensa |
| Albumina | PASS técnico; homologação clínica suspensa |
| Ânion Gap | PASS técnico; homologação clínica suspensa |
| Osmolaridade | PASS técnico; homologação clínica suspensa |

Suspensão significa ausência de homologação clínica, não desativação da tela.
As sete calculadoras suspensas não devem ser apresentadas como clinicamente
validadas por esta entrega. Os estados anteriores de Sódio, Potássio e Cloro
foram preservados; não houve nova homologação dessas telas nesta etapa.

## Pendências que exigem revisão clínica própria

- **Magnésio:** concluir a revisão independente dos protocolos, preparo e
  ajustes relacionados à função renal antes de homologar.
- **Fósforo:** revisar unidades das doses, produto/concentração, critérios
  renais, escolha do sal e coerência entre volume, tempo e velocidade.
- **Bicarbonato:** revisar indicação que não incorpora a gasometria informada,
  definição de excesso de base, diluente e parâmetros de infusão.
- **Glicose:** revisar volume/concentração, escolha da via por sintomas e
  instruções de administração e manutenção.
- **Albumina:** a prescrição genérica não verifica a indicação específica;
  correções matemáticas não validam a necessidade de reposição.
- **Ânion Gap:** a classificação do valor sem correção pode permanecer normal
  com valor corrigido elevado. A interface explicita a distinção, mas isso
  não resolve a pendência de interpretação clínica.
- **Osmolaridade:** o campo Ureia em mg/dL utiliza divisor correspondente a
  BUN. Também é necessário distinguir osmolaridade total calculada de
  tonicidade. A fórmula foi preservada nesta rodada de interface.

**Dependência de Sódio:** `Formulas.calcOsmolaridade` também é consumida pela
calculadora de Sódio. O achado Ureia/BUN exige revalidação clínica dessa
dependência. A homologação anterior de Sódio não resolve esse achado novo.

## Escopo técnico e evidências

A rodada aprimorou entradas, validação numérica, limpeza e atualização dos
resultados, cópia, precisão de apresentação e layout responsivo. Os arquivos
HTML, CSS e JavaScript mantêm espelhos idênticos em `public/`.

Nas cinco etapas finais (Bicarbonato a Osmolaridade), foram aprovados 332
casos funcionais de interface em temas claro/escuro e tamanhos 414 × 844 e
1280 × 900, com verificações de foco, digitação, cópia e limpeza. Houve 180
comparações de preservação de renderização por delta, totalizando 900.
Essas contagens são técnicas e não representam aprovação de casos clínicos.
A revisão independente foi de código/controller e estática; a inspeção
visual e a operação da interface foram realizadas pelo executor.

Contra o snapshot 641, a seção de fórmulas compartilhadas foi preservada.
Somente Ânion Gap e Osmolaridade receberam normalização decimal local na
lógica clínica antes das comparações, sem trocar fórmulas ou limiares.
No Ânion Gap, a apresentação também impede interpretar delta/delta fora
do domínio previsto.

Verificações de encerramento: sintaxe do JavaScript e scripts inline,
paridade raiz/public, limite de conteúdo público e `git diff --check`.
Os scripts e relatórios temporários da auditoria não integram o projeto;
este registro resume seus resultados e não constitui uma suíte permanente
de testes nem um protocolo clínico. A retomada clínica requer decisões
documentadas e nova auditoria específica.
