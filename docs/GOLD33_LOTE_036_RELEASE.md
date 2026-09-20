# Gold33 — integração pendente do lote 036

A auditoria dos lotes 001–083 identificou dez medicamentos existentes sem a atualização Gold33 do pacote 036. Esta alteração aplica exclusivamente o conteúdo aprovado desse pacote à fonte canônica e aos derivados privados, após confirmar que nenhum dos dez IDs possui homologação posterior nos pacotes disponíveis.

## Autorização e proveniência

Em 20/09/2026, após conhecer a pendência 036, o proprietário autorizou: “Sim, está autorizado fazer a auditoria do que tem pendente e atualizar de forma automática”. A tarefa de origem explicitou integração e publicação em GitHub/main e DigitalOcean. O usuário reiterou “aprovado” nesta tarefa.

O pacote original registra publicação não autorizada à época. Esse estado foi preservado como `clinicalPackagePublicationState=NAO_AUTORIZADA`, e a autorização atual do proprietário habilita a publicação. O valor `lote002-owner-confirmed` é o identificador legado aceito pelo sincronizador; não é a evidência de autorização desta publicação. A evidência atual é a autorização acima. O ZIP e os documentos de parecer e restrições não foram alterados.

- Base: `8a3eb781e01e56ae5928913a546543c4fd99fbec`.
- Pacote: `GOLD33_LOTE_036_HOMOLOGADO_CLINICAMENTE.zip`.
- SHA-256 do ZIP: `937121cad7c97aa436c836111de442b8be89a68b2d902ec6fac1204dc17e6aba`.
- Hash clínico aprovado, preservado: `c6145d4887f3525a184934302d2876e8e6a0206672c691f4b48588959dc5a435`.
- SHA-256 do documento de restrições: `9686b6b5f051c4ce243b905999e511bcd7a6aa36754d8184b2680b6ed12c8559`.
- IDs: fluocinolona, fluoxetina, flurazepam, fluticasona, fluticasona_salmeterol, fluticasona_umeclidinio_vilanterol, fluticasona_vilanterol, fluvastatina, fluvoxamina, fomepizol.

## Validação

PASS: pacote, simulação, aplicação seletiva, idempotência, identidade, build, bundle privado, pipeline/runtime, sincronização/rollback, staging, gateway, Free60/Free400, G01, entitlement, R30, paywall e fronteira pública.

O primeiro teste de gateway encontrou `listen EPERM` por bloqueio do sandbox à porta local. Foi reexecutado com a permissão necessária e passou, sem alteração de código para contornar o teste.

Os 33 campos PT/ES dos dez registros coincidem com o pacote aprovado. Os 828 documentos restantes são iguais aos da base, exceto `dataVersion` e `clinicalContentSha256`. O conteúdo preexistente de todos os módulos database é igual: apenas os dez blocos seletivos foram acrescentados. Runtime: 29 módulos, 827 registros Gold33, zero divergências. Bundle: 838 documentos; área pública: 60. Cálculo determinístico de IA permanece bloqueado.

## Limitações documentais remanescentes

Os originais 001–028 não foram localizados na busca por nomes em Downloads, Documents, Desktop, MedCases_Isolado e /tmp. A consulta ao Google Drive falhou com USER_NOT_LOGGED_IN; essa fonte não foi pesquisada com sucesso.

As duas cópias disponíveis de 040 têm os mesmos medicamentos, parecer, restrições e PDFs. A diferença do documento de dados se restringe ao gate técnico acrescentado na cópia corrigida. Ambas preservam a discrepância histórica entre o hash do PDF disponível e o checkpoint; sem o PDF do checkpoint, não é possível comprovar identidade binária com ele. Nenhum hash foi alterado para eliminar a ressalva.

Nenhum lote 084 ou posterior integra esta alteração. A implantação e as verificações de produção são registradas nos relatórios de publicação após o push.
