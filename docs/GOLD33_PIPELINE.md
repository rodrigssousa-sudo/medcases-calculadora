# Pipeline Gold33 seletivo

## Estado

O pipeline valida pacotes homologados, testa sincronização seletiva em sandbox e
produz releases de staging local separados em árvores pública e privada. Ele não
executa `deploy.sh`, o exportador clínico global, GitHub ou deploy de produção.

## Sincronização

```sh
npm run gold33:package-gate -- /caminho/lote.zip
npm run gold33:sync -- --zip /caminho/lote.zip
npm run gold33:sync -- --zip /caminho/lote.zip --apply
```

Sem `--apply`, o comando somente apresenta o plano e hashes. A aplicação exige:

1. pacote e manifesto válidos;
2. homologação clínica explícita;
3. `INTEGRACAO_TECNICA=LIBERADA` no contrato de restrições;
4. 60 IDs exatos na allowlist e na fronteira pública;
5. revisão da decisão arquitetural representada por
   `.gold33-architecture-approved` na raiz do checkout.

O marcador do item 5 não deve ser criado automaticamente. Ele registra a decisão
humana sobre a coexistência entre a identidade clínica global histórica e lotes
seletivos. O exportador global continua proibido pelo R30.

O sincronizador monta todas as saídas antes da primeira escrita, grava arquivos
temporários no mesmo filesystem, renomeia-os e restaura os bytes originais se
qualquer etapa falhar. Premium nunca é copiado para `public/`. Uma cópia Free60
só é atualizada quando a restrição individual contém `PUBLICACAO=LIBERADA`.

## Testes

```sh
GOLD33_TEST_ZIP=/caminho/lote.zip npm run test:gold33-pipeline
npm run test:gold33-sync
npm run test:gold33-runtime
npm run test:gold33-staging
node scripts/verify-public-boundary.cjs
```

O gate `test:gold33-pipeline` também carrega os módulos reais na ordem declarada pela aplicação e compara cada payload Gold33 em runtime ao documento privado, incluindo IDs, hashes e bloqueio de cálculo. O teste `test:gold33-runtime` permite executar essa verificação isoladamente.

Os dados sintéticos usam marcadores sem conteúdo clínico e são criados em pasta
temporária. Nenhum medicamento real é alterado pelos testes.

## Staging e rollback

O staging requer um commit limpo e fixado:

```sh
npm run gold33:stage-release -- \
  --root /checkout/testado \
  --staging-root /staging/medcases \
  --release release-001 \
  --commit SHA_TESTADO

npm run gold33:stage-release -- \
  --root /checkout/testado \
  --staging-root /staging/medcases \
  --rollback release-anterior
```

Cada release contém `public/` e `private/` separados. O ponteiro `current` é
trocado atomicamente e cada evento é registrado em `logs/events.log`.

## Produção

Produção permanece bloqueada. O repositório não contém contrato verificável da
plataforma Publish, DigitalOcean, gateway de produção, health check remoto ou
procedimento de rollback remoto. `deploy.sh` mistura Git e publicação e é
rejeitado por `gold33:deploy-gate`.

Antes de habilitar produção é necessário documentar e testar em staging remoto:

- identificador e destino do serviço público;
- destino privado do gateway e persistência de `data/drugs`;
- autenticação sem segredo no repositório;
- health/version endpoint pós-deploy;
- promoção de artefato pelo SHA testado;
- rollback para release conhecida;
- retenção e consulta de logs.
