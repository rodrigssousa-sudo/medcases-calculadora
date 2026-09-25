# MEDCASES_PRE_REVIEW_FARMACOS_PAYWALL_HOTFIX_V1_R1

## Auditoria read-only anterior ao patch

- Owner nativo: `MedCases/lib/screens/drugs_screen.dart`, `_DrugsScreenState._open`, lista `ListTile.onTap` e detalhe `CanonicalDrugDocumentView`. `showDrugDetailSheet` delega aos entrypoints canônicos de navegação. A autorização precede `showUpgradeScreen`.
- Owner embutido: `index.html`, `hmOpenDrug` → `openFarmacoDetail`. O cadeado R8.2 (`mc-r8-2-free60-premium-lock-owner`) intercepta as quatro famílias de linhas e protege `hmOpenDrug`; o R8.5 (`mc-r8-5-early-premium-paywall-capture`) captura antes dos handlers legados.
- Callback: R8.5 `openNativePaywall`, R8.2 `onCapturedEvent` → `requestUpgrade` → `MCUpgrade.postMessage` / bridge do parent Web. No app, `_CalculadoraScreenState._openDrugUpgradePaywall` e `_CalcuWebFrameState._handlePremiumBridgeMessage` chegam a `showUpgradeScreen`.
- Navegação: `showUpgradeScreen` usa `ModalBottomSheetRoute`, `Navigator.push` e aguarda `route.completed`. O guard global `PaywallPresentationGuard` já adquire sincronicamente antes do primeiro await e libera em `finally`, inclusive na remoção do Navigator. O WebView nativo também tem guard local até fechamento completo e bloqueio de input. Nenhum desses arquivos precisou de mudança de produção.
- Scroll/gestos: R8.5 abria em `pointerdown`, `touchstart`, `mousedown` e `click`; R8.2 também abria nos eventos de contato, além de click/teclado. Ambos usavam debounce de 700 ms, sem representar intenção de ativação. O início de um drag disparava o paywall e cancelava o comportamento padrão do gesto.
- Listeners de scroll do WebView: normalização do viewport/teclado e apresentação do detalhe; não chamam paywall diretamente. Não há `VisibilityDetector` nesses owners. `endOfFrame` em `_openDrugUpgradePaywall` espera remover a WebView antes da apresentação; não cria novas intenções. Não foi encontrado `postFrameCallback` de abertura automática nesses owners.
- Build: não chama o paywall. A inicialização pode abrir o `initialDrugId` uma vez; rebuild não repete `_initialize`. Entitlement invalida documento/contexto ou atualiza a sessão do bridge, sem abrir paywall.
- Subscriptions: listener de entitlement registrado em init e removido em dispose; bridge Web/auth idem. R8.2 tem um MutationObserver protegido por `S.observer`; alterações do DOM reaplicam cadeados, sem chamar paywall. Dois interceptadores sobrepostos foram identificados, mas `stopImmediatePropagation` impede que ambos tratem o mesmo evento. Não foi encontrada subscription duplicada.

```text
FARMACOS_PAYWALL_OWNER=R8.5/R8.2 no HTML → bridge → showUpgradeScreen no Flutter
FARMACOS_PAYWALL_TRIGGER=eventos de contato e ativação sobre linha bloqueada
DUPLICATE_TRIGGER_CAUSE=contato inicial de scroll tratado como ativação; debounce permite repetição
DUPLICATE_TRIGGER_REPRODUCED=YES
```

Reprodução anterior: execução do script R8.5 original em Node VM, com quatro eventos `pointerdown` sobre linha Premium, separados por 1 segundo, sem qualquer click, produziu quatro chamadas `MCUpgrade.postMessage`. Trata-se de reprodução dos disparos indevidos, não de quatro modais simultâneos em aparelho físico. Os 10 testes existentes do guard Flutter passaram antes do patch.

## Patch mínimo na origem

- `index.html` e `public/index.html`: os dois interceptadores mantêm a supressão dos handlers legados nos eventos de contato, preservando o scroll nativo. Somente click ou ativação explícita por teclado abre paywall. Repetição automática de tecla não ativa novamente.
- Debounces de abertura removidos. A instância única continua sob o guard de ciclo de vida já existente no Flutter; ação explícita após fechar não precisa esperar 700 ms.
- `manifest-offline.json` e `public/manifest-offline.json`: apenas identidade/hash do HTML e identidade agregada atualizados pelo gerador oficial; lista de arquivos e conteúdo clínico preservados.
- `tests/farmacos-paywall-reentrancy.test.cjs`: executa os scripts reais, em ordem, cobrindo os dois owners combinados e R8.2 isolado, scroll, rebuild, teclado, Free, Premium, política assíncrona e parent Web.
- `MedCases/test/screens/farmacos_paywall_reentrancy_test.dart`: usa DrugsScreen, autorização, biblioteca, Navigator e paywall reais com dados de teste; cobre concorrência, rolagem, rebuild/notificação de entitlement, fechamento, reabertura, Free e Premium.

Nenhuma mudança em IA, EntitlementService, regras Free/Premium, RevenueCat, preços/trials, conteúdo do paywall, dados clínicos, backend, Firebase, Functions ou Rules.

## Resultado

24 testes focados passaram (11 Node + 3 novos Flutter + 10 existentes do guard). Mais 3 verificações de regressão passaram (2 testes de superfícies comerciais + contrato R8.2/Free60). As falhas iniciais dos novos testes Flutter eram timers da fixture descartados tarde; o descarte foi corrigido apenas no teste, e a execução final passou.

```sh
# medcases-calculadora
node --test tests/farmacos-paywall-reentrancy.test.cjs
node --test tests/commercial-surfaces.test.cjs
node gateway/test/r8_2_free60_lock_paywall_test.cjs
node --check tests/farmacos-paywall-reentrancy.test.cjs
git diff --check

# MedCases (executados em cópia temporária com os mesmos arquivos de produção)
flutter test --no-pub test/screens/farmacos_paywall_reentrancy_test.dart test/screens/paywall_presentation_lock_test.dart
dart analyze test/screens/farmacos_paywall_reentrancy_test.dart test/screens/paywall_presentation_lock_test.dart lib/screens/upgrade_screen.dart lib/screens/drugs_screen.dart
```

Analyzer: 0 erros, 0 warnings; 34 infos preexistentes nos owners de produção, não modificados. A execução em VM compila os dois scripts inline do HTML. Não houve E2E em dispositivo físico nem acesso a compras/serviços de produção.

```text
BUILD_ID=MEDCASES_PRE_REVIEW_FARMACOS_PAYWALL_HOTFIX_V1_R1
DUPLICATE_TRIGGER_CAUSE=pointerdown/touchstart/mousedown abriam paywall ao iniciar scroll
PAYWALL_SINGLE_INSTANCE_GUARD=PaywallPresentationGuard existente; aquisição síncrona até route.completed; finally libera
SCROLL_REOPENS_PAYWALL=NO
REBUILD_REOPENS_PAYWALL=NO
FAST_CALLBACKS_STACK_PAYWALL=NO
EXPLICIT_ACTION_AFTER_CLOSE_CAN_REOPEN=YES
ENTITLEMENT_CHANGED=NO
REVENUECAT_CHANGED=NO
PAYWALL_CONTENT_CHANGED=NO
CLINICAL_CONTENT_CHANGED=NO
BACKEND_CHANGED=NO
FOCUSED_TESTS_PASS=24
FOCUSED_TESTS_FAIL=0
ANALYZER_ERRORS=0
ANALYZER_WARNINGS=0
GIT_DIFF_CHECK=PASS
READY_FOR_COMBINED_HOTFIX_FREEZE=YES
RESULT=PASS_LOCAL
```

Sem commit, push ou deploy. Este patch da calculadora e o teste adicional do app devem acompanhar o hotfix de IA já existente, sem alterar seus arquivos. Encerrado após validação local.
