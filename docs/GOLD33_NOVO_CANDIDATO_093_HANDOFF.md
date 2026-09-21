# Novo candidato 093 — homologação documental

Parecer aplicado por autorização explícita do usuário: Dra Eugenia Marques, revisão de 20-09-2026, resultado **Aprovado integralmente**, sem exceções.

O ZIP final está em `generated/gold33-nova-lista/lote093-homologado/GOLD33_NOVO_CANDIDATO_093_HOMOLOGADO_CODEX.zip`. O relatório externo está no mesmo diretório, em `VALIDACAO_HANDOFF.json`.

São 10 fichas com 33 campos canônicos. Os valores clínicos, o candidato original e o PDF/JSON do parecer foram preservados. Apenas o derivado de handoff recebeu os estados administrativos de homologação. Propostas de alias permanecem sem ativação. Textos históricos de pendência dentro dos campos clínicos permanecem congelados; a aprovação atual consta nos metadados `HOMOLOGACAO` e `STATES`.

O parecer recebido não continha hash do payload. O arquivo `12_VINCULO_DA_APROVACAO.json` registra expressamente o vínculo da versão local confirmado pelo usuário, sem atribuir esse hash ao parecer original. A homologação histórica do lote 093 não se transfere ao novo candidato.

- Candidato revisado SHA-256: `d37488285baa1b0343e2232153a4554cdb1bc88ae828d2c0550331644ba0d84b`.
- ZIP final SHA-256: `e29687c1f949e39a4eeb2ce764d444bf840900034fe78da29de2a8770755e98f`.
- Manifesto, CRC, conteúdo congelado e handoff: **PASS**.
- Cinco testes específicos, incluindo tentativas de alteração clínica e de autorização com manifesto recalculado: aprovados.
- Sete testes de regressão do importador NOVA_LISTA: aprovados.
- Segunda geração: ZIP idêntico byte a byte.

Validação reproduzível:

```sh
python3 scripts/homologate-gold33-093.py --validate generated/gold33-nova-lista/lote093-homologado/GOLD33_NOVO_CANDIDATO_093_HOMOLOGADO_CODEX.zip
python3 tests/gold33-093-homologation.test.py
```

O resultado PRONTO refere-se ao handoff documental. Cálculo automático e publicação permanecem não autorizados, integração técnica não iniciada e integração ao runtime não realizada. O candidato original continua preservado como evidência histórica, sem alteração de seu estado original. Nenhum push ou deploy foi realizado.
