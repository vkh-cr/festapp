# Kanonická orchestrace teplé veřejné mapy

Date: 2026-08-07
Status: Ready for execution
Verification: standard

## Outcome

Každý veřejný vstup do mapy — program, detail události, profil/ubytování,
vyhledávání, úklid/WC i přímý odkaz — aktivuje tutéž retained („teplou“)
veřejnou mapu occasion. Po aktivaci je požadované místo skutečně ve scéně,
viditelné, vycentrované a zobrazené v cílovém zoomu. Stisk aplikačního tlačítka
Zpět vrátí uživatele na přesně stejnou obrazovku jako před optimalizací mapy a
teprve tehdy se dokončí `Future` vrácený volajícímu.

Řešení nepoužívá časové odhady, řetězce post-frame callbacků ani opakované
„zkus ještě jednou“ přesuny. Jediný stavový automat vlastní požadavek, aktivaci,
readiness, data i potvrzení kamery. Warm retention a aktivní renderování jsou
oddělené: mapa zůstává v paměti, ale neaktivní nativní renderer zůstává
pozastavený/omezený stejně jako dnes.

## Scope

### In scope

- Interní navigace na veřejné místo přes `MapNavigation.openPlace`.
- Cold deep link `/map/:id` a veřejný category intent `map?placeType=…`.
- Jedna retained mapa uvnitř `AutoTabsRouter` a zachování její kamery/scény.
- Webový Legacy (`flutter_map`), nativní Legacy a nativní MapLibre adapter.
- Back/history kontrakt a jednotná semantika vráceného `Future`.
- Explicitní latest-wins souběh, renderer/catalog epochs, chyby a retry.
- Deterministické testy lifecycle kombinací a produkční smoke matrix.
- Pozorovatelnost requestu od vstupu až po potvrzenou kameru.

### Out of scope

- Redesign mapy, markerů, popupů, filtrů nebo cílového zoomu 18.
- Změna offline assetů, downloaderu, SVG rasterizace nebo tile providerů.
- PWA update prompt/service worker; test musí pouze prokázat běžící build.
- Změny funkčnosti admin place/path editoru jsou out of scope. Jeho route
  identity a callers se však v rámci cutoveru oddělí do `MapEditorRoute`, aby
  editor nemohl vstoupit do public session. Editor může mít samostatnou mapovou
  instanci a zachová dnešní edit behavior.
- Odstranění Legacy rendereru. Dva renderer adaptery jsou záměrný produktový
  kontrakt podle mapového renderer plánu.
- Produkční deploy, commit nebo push bez samostatného pokračovacího pokynu.

## Constraints

- Neprovádět rollback mapových rendererů ani warm-map optimalizace. Jde o úplné
  nahrazení orchestrace, ne návrat ke cold mapě.
- Zachovat jedno nativní mapové view na veřejnou mapovou session occasion.
- Aplikační Back i systémový/browser Back musí nadále používat router history;
  session nesmí emulovat Back vlastní historií.
- Offline-first katalog míst je autoritativně použitelný bez sítě. Online
  refresh nesmí zrušit již potvrzený focus ani obnovit default camera.
- Renderer může být vyměněn při změně online/offline konfigurace. Readiness a
  camera acknowledgement vždy patří konkrétnímu `surfaceId/styleEpoch`.
- Zdrojový strom je rozsáhle rozpracovaný a staged. Realizace nesmí zahodit,
  resetovat ani přepsat nesouvisející změny.
- Produkce aktuálně servíruje `0.19.85+432`. Nepublikovaný experiment 433 byl
  po změně zadání odstraněn; zdrojové změny opět odpovídají staged 432.

## Canonical cutover brief

- **Seam:** veřejný tok „otevři mapu na místě/kategorii“ od UI commandu přes
  router, retained tab, katalog a renderer až po focus/presentation a Back.
- **Canonical owner:** jedna occasion-scoped instance `PublicMapSession`.
- **Contract:** `openPlace/openCategory` přijmou intent a vrátí typed
  `MapVisitResult`: `returned(MapFocusOutcome)` po pop/Back,
  `resolvedInPlace(MapFocusOutcome)` nad už aktivní mapou, `cancelled` nebo
  `navigationFailed`. `MapFocusOutcome` rozlišuje applied/unavailable/failed,
  případně cancelled při Back před dokončením, aniž by předčasně ukončil route
  visit. Interně session publikuje právě jeden latest request, vydává effects
  pouze připravenému hostu a dokončí focus jen podle typed actual-camera a
  presentation výsledku.
- **Invariants:** jeden public session, nejvýše jeden public surface, jeden
  visibility writer, jeden request reducer, jeden router/history writer,
  actual-state acknowledgement, latest-wins a bounded retry.
- **Removal set:** `MapSessionController`, `MapSessionScope`,
  `MapPlaceFocusCoordinator`, duplicate MapPage lifecycle fields/listeners,
  one-shot `_mapReady`, fire-and-forget required camera/presentation,
  `JSInterop.changeUrl` map path, overloaded public/edit `MapRoute`, recursive
  public child focus orchestration, obsolete generated args/tests/comments/docs.
- **Compatibility policy:** veřejné URL `/map`, `/map/:id` a
  `/map?placeType=…` zůstávají jako permanentní tenké router adapters do
  jediného `MapIntent` protokolu. Nezůstává za nimi druhá business
  implementace. Admin editace dostane samostatnou typed route a sdílí jen
  renderer/data primitives, nikoli public session.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| Produkční 432 aktivuje map tab, změní URL na `/map` a zvýrazní správný marker, ale kamera zůstane v širokém overview zoomu. | Čerstvý production smoke 2026-08-07: event „OTEVÍRACÍ CEREMONIÁL“ → „Černá louka-hlavní stage“, po explicitním PWA Reload na potvrzenou 432. | Routing, place id, katalog a scene focus dojdou až do mapy. Neprokázaná část je camera effect/acknowledgement. |
| Totéž selhalo po přidání raw `moveTo` ve 431 a po zrušení pending animací ve 432. | `lib/components/map/map_viewport_controller.dart:MapViewportController.moveTo`; `lib/components/map/legacy_map_surface.dart:LegacyMapViewportController.moveTo`; produkční smoky 431/432. | Hypotéza „problém je jen TickerMode/animace“ byla vyvrácena. Další timer nebo camera retry bez modelu není oprávněný. |
| Warm a fallback větev `MapNavigation.openPlace` mají rozdílnou `Future` semantiku. | `lib/components/map/map_navigation.dart:MapNavigation.openPlace`; session větev po `session.openPlace` ihned vrátí, fallback vrací `RouterService.navigateOccasion`, jehož route future se dokončí až po pop. Flutter `Navigator.push` má stejný pop-completion kontrakt. | `.then(loadData)` se na warm cestě spustí během aktivace, zatímco dříve až po návratu. To je přímá behaviorální regrese. |
| Nejméně tři veřejní callers spoléhají na completion pro reload po návratu. | `lib/components/schedule/event_page.dart:_placeItem`; `schedule_page.dart:_showPlace`; `my_schedule_page.dart:_showPlace` volají `MapNavigation.openPlace(...).then(loadData)`. | Nová session musí vrátit typed `MapVisitResult`; caller reloaduje pouze po `returned`, ne při activation, in-place focus nebo failure. |
| Ne-UI lookup session je omylem reaktivní. | `lib/components/map/map_session.dart:MapSessionScope.maybeOf` používá `dependOnInheritedWidgetOfExactType`; volá se z tap handleru v `MapNavigation.openPlace`. `EventPage.didChangeDependencies` volá `loadData`. | Klikající detail se přihlásí k `InheritedNotifier`; session notify může během přechodu vyvolat další `loadData`, souběžně s `.then(loadData)`. Lookup pro command musí být non-listening. |
| Route aktivace není součástí ovladatelného kontraktu. | `MapSessionController` drží `VoidCallback _activateMap`; `OccasionHomePage` uvnitř callbacku volá `unawaited(RouterService.navigateOccasion(...))`. | Session nezná úspěch/selhání push, okamžik tab visibility ani route future pro Back. |
| Aktivita mapy má více writerů. | `TabsRouter.activeIndex`; `OccasionHomePage` post-frame volá `MapSessionController.setMapActive`; `MapPage` současně poslouchá `TabsRouter` a `MapSessionController` a drží `_isMapTabActive`. | Tři kopie stejného faktu dovolují pořadí, která unit testy nepokrývají. Shell musí být jediný writer visibility eventu. |
| Destination má více částečných kopií. | `MapSessionController.destination/revision`; `MapPlaceFocusCoordinator.pending/inFlight`; `MapPage._placeId`, `_forcedVisiblePlaceId`, `focusedPlace`. | Není jeden request id ani jeden terminální stav; stale completion lze rozlišit jen na jedné z několika vrstev. |
| Readiness je bool bez identity a je zdvojená. | `MapViewportCoordinator._isReady`; jednorázový `MapPage._mapReady` completer; `_isMapTabActive`. `MapViewportCoordinator` readiness při attach resetuje, `_mapReady` už nikdy ne. | Po renderer swapu může nový povrch sdílet staré „ready“. Readiness musí obsahovat surface/style/layout epoch. |
| Focus se označí jako handled před dokončením kamery. | `MapPage._tryOpenPendingPlace` zavolá `_showMapPlace`; ta spustí `_setMapToCoordinate` přes `unawaited`, poté `_placeFocus.complete(... handled: true)`. | Session zahodí jediný durable request ještě před výsledkem camera commandu. |
| Camera interface nemá potvrzení výsledku. | `MapViewportController.moveTo/animateTo` vrací `Future<void>`; coordinator nezná requested/actual camera, rejection ani stale surface. | `Future<void>` dokládá pouze ukončení volání adapteru, ne zobrazený cíl. Potřebný je typed acknowledgement s actual camera a surface tokenem. |
| URL má druhého writera mimo router. | `MapPage._setMapTabActive` používá post-frame callback, pevný delay 100 ms a `JSInterop.changeUrl`. | Router a imperativní history mutation mohou nesouhlasit; časový delay není lifecycle signal. |
| Sync může záměrně překlíčovat celý tab child. | `OccasionHomePage` obaluje `child` do `KeyedSubtree(ValueKey(ClientSyncRuntime.projectionEpoch))`. | Je nutné charakterizačním testem prokázat, zda epoch update retained mapu remountuje. Pokud ano, přesunout reaktivní refresh dovnitř tabů bez změny identity map surface. |
| Veřejná a edit mapová cesta jsou dnes smíchané v jedné 2206řádkové třídě. | `lib/components/map/map_page.dart`; public session, data load, renderer lifecycle, camera, popupy, filtry, editace a kreslení jsou v `_MapPageState`. | Modul je mělký: callers musí znát pořadí několika interních lifecycle detailů. Orchestrace se musí přesunout za malou interface. |
| AutoRoute je určen k zachování offstage tab state. | `auto_route 11.1.0`; [AutoTabsRouter dokumentace](https://pub.dev/packages/auto_route#tab-navigation) uvádí preserved offstage state a default lazy loading. | Warm map má být vlastnost tab hostu, ne ručně simulovaná druhou routou nebo cache controllerů. |
| Frame callback není potvrzení widget/renderer readiness. | [Flutter `SchedulerBinding.endOfFrame`](https://api.flutter.dev/flutter/scheduler/SchedulerBinding/endOfFrame.html) pouze dokončí frame; [`flutter_map` controller docs](https://docs.fleaflet.dev/usage/programmatic-interaction) rozlišují controller attachment přes `onMapReady` a upozorňují na lifecycle. | `addPostFrameCallback`, `Future.delayed` ani `endOfFrame` nesmí být business stav `ready`. |
| Push future není activation future. | [Flutter `NavigatorState.push`](https://api.flutter.dev/flutter/widgets/NavigatorState/push.html) dokončí future až při pop; route callbacks mohou nastat před dokončením transition ([`RouteAware.didPushNext`](https://api.flutter.dev/flutter/widgets/RouteAware/didPushNext.html)). | Router adapter musí oddělit „požádal jsem o push“, visibility event a „uživatel se vrátil“. |
| Veřejná a edit route sdílejí jeden nullable argument bag. | `lib/app_router.dart` registruje `MapRoute` pro `/map` i child `:id`; `app_router.gr.dart:MapRouteArgs` obsahuje `id`, `place`, `editPathGroup`, `placeType`; admin callers jsou `places_content.dart`, `path_groups_content.dart`, `user_groups_tab.dart`. | Public host lze omylem vytvořit v edit režimu nebo naopak. Cutover musí rozdělit route identity a odstranit nullable mode kombinace. |
| Category vstup obchází `MapNavigation`. | `lib/components/cleaning/cleaning_page.dart` přímo pushuje `"${MapPage.ROUTE}?placeType=…"`. | `openCategory` není hotový, dokud cleaning caller nepřejde na canonical owner. |
| Historické návody stále doporučují direct `map/:id` a odstraněný focus symbol. | `docs/plans/2026-07-10_uklidova_sluzba_plan.md` odkazuje na direct `RouterService.navigateOccasion` a `setMapToOnePlaceAndShowPopup`; `global_search_dialog.dart` komentuje `place -> map/<id>`. | Cutover musí aktualizovat/supersede misleading docs/comments, ne pouze kód. |

### Reprezentativní současný tok

```text
Event/Profile/Search
  │
  ├─ MapNavigation.openPlace(context, placeId)
  │    ├─ dependOnInheritedWidget(...)  ← caller se nechtěně přihlásí
  │    └─ MapSession.openPlace()
  │         ├─ uloží destination/revision
  │         ├─ void activateMap()
  │         │    └─ unawaited pushPath("/map")
  │         └─ notifyListeners()
  │
  ├─ Future se dokončí ihned           ← .then(loadData) během přechodu
  │
  └─ shell build → postFrame active
       └─ MapPage listener + TabsRouter listener
            └─ claim pending place
                 ├─ fire-and-forget popup/focus
                 ├─ fire-and-forget camera move
                 └─ pending = complete  ← bez camera acknowledgement
```

Tento tok nemá jednu race, ale distribuovaný protokol bez explicitního
protokolu: pořadí je rozloženo mezi router, inherited rebuild, frame scheduler,
data load a dva renderer adaptery.

## Reachability and cutover matrix

| Artifact / entry point | Classification | Cutover action | Proof |
|---|---|---|---|
| `MapNavigation.openPlace` | keep/deepen | Zachovat jako jedinou repository facade; non-listening read a jednotný completion contract. | Všechny public place callers nalezené přes `rg` míří sem. |
| `event_page.dart`, `schedule_page.dart`, `my_schedule_page.dart` | migrate | Zachovat reload až po pop; přidat contract tests na nulový reload během activation. | Caller-specific tests + reachability search. |
| `user_page.dart` (3 vstupy), `user_stay_page.dart`, `counseling_picker.dart`, `global_search_dialog.dart`, cleaning place action | migrate | Přesměrovat na canonical place intent; odstranit přímou znalost route/session. | `rg "MapNavigation.openPlace"` a UI contract matrix. |
| `cleaning_page.dart` category route | migrate | Nahradit direct `RouterService.navigateOccasion("map?placeType=…")` za `MapNavigation.openCategory`. | Focused search nenajde public category route bypass. |
| `/map`, `/map/:id`, `/map?placeType=…` | boundary | Permanentní external compatibility parser → `MapIntent`; žádná camera/data business logika v routeru. | Cold deep-link integration tests + route table inspection. |
| `OccasionHomePage` + `AutoTabsRouter` | keep/deepen | Vlastnit session, single-flight navigation adapter a jediný visibility event; zachovat retained state. | Lifecycle identity/Back tests. |
| `MapRendererHost`, `MapScene`, renderer-neutral scene primitives | keep | Zůstanou canonical renderer selection/data seam. | Renderer host parity tests. |
| `MapViewportController` | keep/deepen | Kosmetické metody ponechat; required focus změnit na typed actual-state acknowledgement. | Legacy/MapLibre contract tests. |
| Legacy a MapLibre surfaces | boundary | Mechanické host adapters; nesmějí vlastnit latest request/retry policy. | Adapter tests + absence search na session typy v surfaces. |
| `MapSessionController`, `MapPlaceFocusCoordinator` | delete | Úplně nahradit jedním `PublicMapSession`; žádný compatibility wrapper. | Symbol absence + odstraněné tests/files. |
| `MapPage` public lifecycle fields a direct deep-link focus | delete/migrate | Přesunout orchestration do session; public page jen publikuje catalog/host events a renderuje state. | Symbol and behavior absence proofs. |
| `MapRoute` s nullable public/edit args a rekurzivním child `MapRoute` | delete/split | Vytvořit `PublicMapRoute` a `MapEditorRoute`; odstranit starý generated args bag a regenerovat router. | `app_router.dart/.gr.dart` inspection + generated diff + symbol absence. |
| `places_content.dart`, `path_groups_content.dart`, `user_groups_tab.dart` | boundary/migrate | Používat výhradně typed `MapEditorRoute`; nikdy public session. | Direct route reachability test/search. |
| `KeyedSubtree(ValueKey(projectionEpoch))` | investigate then keep/delete | Characterize identity; pokud remountuje mapu, přesunout refresh na granular listeners. | Surface id test přes epoch increment. |
| Map-specific `JSInterop.changeUrl` + 100 ms delay | delete | Router zůstane jediný URL/history writer. | Focused absence search v map module. |
| Old shallow session/focus tests | delete/replace | Nahradit tests na canonical interface, adaptery a observable behavior. | Test inventory neimportuje odstraněné typy. |
| `app_router.gr.dart` | generated migrate | Regenerovat až po finální route split; ručně needitovat. | `fvm dart run build_runner build --delete-conflicting-outputs`; clean second generation/diff. |
| `global_search_dialog.dart` route comment a staré úklidové plan snippets | migrate docs | Aktualizovat comment; historický plán označit superseded pro direct map navigation a odkázat na tento plán. | Focused doc search neprezentuje starý bypass jako aktuální návod. |

Runtime registrace mimo Flutter router, worker/API writers ani persistentní
map-session storage nebyly nalezeny. Katalog/offline storage je producer scene
dat, nikoli navigační orchestrátor, a zůstává mimo cutover; jeho revision event
je pouze vstupem do canonical session.

## Target architecture and invariants

### Canonical owner and contract

Vznikne hluboký modul `PublicMapSession`, vlastněný jednou instancí
`OccasionHomePage` pro lifetime occasion shellu.

Jeho malá interface:

```text
PublicMapSession.openPlace(int placeId) -> Future<MapVisitResult>
PublicMapSession.openCategory(String placeType) -> Future<MapVisitResult>
```

- `openPlace` synchronně vytvoří monotónní `requestId` a uloží latest intent
  ještě před router push.
- Při přechodu z jiné route se future dokončí výsledkem `returned` až při Back.
  Je-li mapa už aktivní (například hledání nad mapou), nevznikne duplicitní
  history entry a výsledek je `resolvedInPlace(focusOutcome)` po vyřešení
  intentu. Missing place nebo renderer failure aktualizují `MapFocusOutcome` a
  failure UI, ale pushed visit zůstane otevřený do Back. Očekávané cancellation
  a navigation failure jsou typed hodnoty, ne unhandled async exceptions.
  Neočekávaný exception se zachytí na session seam, loguje a přeloží na
  `navigationFailed`.
- `MapNavigation.openPlace(context, id)` zůstane jediným repository-wide UI
  boundary adapterem: provede non-listening lookup a deleguje přímo na
  `PublicMapSession`, případně aktivuje cold external route. Nedrží stav ani
  neopakuje business rozhodnutí. Callers neznají tab index, renderer, readiness,
  frame ani data loading. Samostatný pass-through navigation interface
  nevznikne.
- Cold deep link se při bootstrapu přeloží na stejný `MapIntent`; nevytváří
  paralelní load/focus implementaci.

Uvnitř modulu je jedna event-driven state machine a dva skutečné internal
seams:

1. `MapTabNavigationAdapter` — production adapter nad AutoRoute a fake adapter
   v contract testech. Umí push veřejného map tabu a poskytne route-lifetime
   future; shell posílá autoritativní visibility event.
2. `PublicMapHost` — Legacy a MapLibre adapter plus fake adapter. Hlásí
   `surfaceId`, renderer/style epoch, active layout readiness, catalog revision
   a skutečnou kameru. Přijme focus effect a vrátí typed výsledek.

`MapPage` je view/host adapter. Nesmí redukovat session state, číst tab router,
měnit browser URL ani vlastnit retry pořadí.

Public a edit route budou mít rozdílnou identitu:

- `PublicMapRoute/PublicMapPage` — jediný retained browse host napojený na
  `PublicMapSession`; public path compatibility adapters překládají URL na
  `MapIntent`.
- `MapEditorRoute/MapEditorPage` — admin place/path editace s explicitním
  sealed edit mode; nikdy se nepřipojí k public session.
- Sdílené scene, catalog a renderer primitives zůstanou interní moduly. Nesmí
  vzniknout druhá kopie public navigation/focus logiky uvnitř editoru.

### Stavový automat

```text
openPlace(id) ──► requested(requestId, id)
                      │
                      ├─ tab inactive ────────────────┐
                      ├─ host not active/laid out ────┤ waiting
                      └─ place not in catalog ────────┘
                                                       │ explicit events
                                                       ▼
              applyingFocus(requestId, surfaceId, catalogEpoch)
                    │                         │
        stale request/surface          CameraApplyResult
                    │                         │
                    └─ ignored         ┌──────┴─────────┐
                                      ▼                ▼
                                  focused          retryable/failed
                              (actual camera)      (typed reason)
```

Reducer je jediný writer session phase. Effects jsou idempotentní a nesou
`requestId + surfaceId + catalogEpoch`. Výsledek staršího requestu nebo
odpojeného rendereru se ignoruje. Novější request má latest-wins semantiku;
není možné, aby completion A vymazal pending B.

Router activation je single-flight. První intent z neaktivní mapy vytvoří jednu
history entry a jeden activation operation. Další intent před visibility ack
nepushuje druhou `/map` route: pouze nahradí latest request a sdílí stejný
route-lifetime future objekt. Nevytváří per-caller completer list. Při pop se
sdílený future dokončí jedním `returned(latestFocusOutcome)`. Session
dispose/occasion switch jej dokončí typed cancellation cestou bez pozdějšího
effectu do nové occasion.

### Camera acknowledgement

`MapViewportController` se pro povinnou navigaci změní z neověřitelného
`Future<void> moveTo(...)` na interní typed kontrakt přibližně tohoto významu:

```dart
Future<CameraApplyResult> applyCamera(CameraCommand command);
```

Úspěch znamená, že:

- adapter stále patří stejnému `surfaceId`;
- viewport má nenulový layout, aplikace je foreground a tab je aktivní;
- actual center odpovídá cíli v definované toleranci;
- actual renderer-normalized zoom odpovídá 18 v definované toleranci;
- výsledek je zaznamenán po relevantním camera eventu/idle nebo synchronním
  ověření actual camera, nikoli po pouhém odeslání příkazu.

`LegacyMapViewportAdapter` používá `flutter_map` camera/map eventy.
`MapLibreViewportAdapter` používá native camera/idle event. Animace je až
následný vizuální detail; povinný stav nesmí záviset na tickeru. Retry nastane
jen po explicitním novém readiness/layout/surface eventu, nikdy podle času.

Retry je bounded kombinací `(requestId, surfaceId, catalogEpoch,
readinessEpoch)`: stejná kombinace se neaplikuje dvakrát. Nový pokus povolí jen
nový explicitní epoch/event. Non-retryable adapter error a chybějící place
končí typed failure UI; nevznikne nekonečný spinner ani CPU loop.

Place presentation (marker focus, popup nebo modal detail podle existující
policy) je samostatný request-scoped effect spuštěný až pro aktuální aktivní
host. Nese stejné tokeny jako camera effect. Back, superseding request nebo
surface detach jej zneplatní; stale async dialog se po návratu nesmí otevřít.
Router nadále vlastní modal i page history a Wave 1 uzamkne současné pořadí
Back pro short description, long description/events a WC popup.

### Invariants

1. Pro jednu occasion existuje nejvýše jedna mounted veřejná mapa a jeden
   `PublicMapSession`; edit mapy jsou explicitně jiný režim.
2. Všechny veřejné callers používají `MapNavigation`; žádný nepushuje
   `MapRoute` nebo `map/:id` přímo.
3. `openPlace` z jiné route vrátí `MapVisitResult.returned` až po Back/pop.
   Caller reloaduje pouze pro tento výsledek; intent nad už aktivní mapou vrátí
   `resolvedInPlace` a nevytvoří duplicate history.
4. Lookup session z command handleru nikdy nevytváří inherited dependency.
5. Shell je jediný writer map tab visibility. `MapPage` nečte `TabsRouter`.
6. Session request je complete pouze po `CameraApplyResult.applied` pro aktuální
   request/surface/catalog epoch a po potvrzení viditelnosti cílového markeru
   i existující place presentation policy (focus/popup/dialog).
7. Neaktivní nebo layout-zero host command nepřijme; vrátí typed retryable
   důvod a request zůstane durable.
8. Novější request vždy vítězí. Stará data, renderer callback ani camera idle
   nesmí změnit novější focus.
9. Catalog refresh může vyměnit place model, ale place id zůstává identita.
   Chybějící místo má terminální typed stav; spinner neběží nekonečně.
10. Router je jediný writer URL/history. Session ani `MapPage` nevolají
    `JSInterop.changeUrl` ani časový delay.
11. Projection refresh nesmí změnit identitu veřejného map surface. Scene data
    se aktualizují uvnitř retained hostu.
12. MapLibre `active` je odvozen výhradně z shell visibility a lifecycle;
    inactive renderer zachová současné Android pause / iOS 1 FPS omezení.
13. Bottom-tab otevření mapy bez intentu zachová warm camera. Place intent ji
    přepíše až jedním potvrzeným focus effectem.
14. App Back, system Back a browser Back popnou stejný router entry a vrátí
    původní detail/profil včetně jeho state.
15. Při běžném přepínání zůstává surface warm. Při systémovém memory pressure
    smí neaktivní host surface uvolnit; durable session/request zůstane a nový
    attach dostane nové `surfaceId`, bez stale completion ze starého povrchu.
16. Aktivace routeru je single-flight. Rapid A→B před zviditelněním vytvoří
    jednu `/map` history entry, latest B focus a jeden sdílený visit future.
17. Stejný readiness tuple vyvolá nejvýše jeden camera/presentation attempt;
    retry vyžaduje nový explicitní epoch.
18. Session dispose, occasion switch nebo Back invalidují všechny in-flight
    effects. Žádný stale popup, dialog, camera event ani data completion nesmí
    zasáhnout novou route/session.
19. Public route nemá nullable edit arguments; editor route nemá přístup k
    public session command interface.

### Entry points and forbidden bypasses

- `MapNavigation.openPlace` a `openCategory` jsou jediné veřejné command
  vstupy.
- Přímý URL parser smí pouze vytvořit `MapIntent`; nesmí volat camera nebo
  `loadData(placeId:)` jako druhý orchestrátor.
- `MapPage` nesmí poslouchat `TabsRouter`, `MapSessionScope` ani ručně měnit URL.
- Caller nesmí znát `requestId`, `surfaceId`, catalog epoch nebo camera retry.
- Renderer adapters nesmí samy rozhodovat, který place request je aktuální.
- `Future.delayed`, `addPostFrameCallback` a `endOfFrame` nesmějí určovat
  business přechod `ready`; frame callback lze použít pouze uvnitř adapteru k
  získání layout metriky, jejíž výsledek se explicitně nahlásí.

### Scale and resource behavior

- Session drží O(1) navigační stav: právě jeden latest intent, jednu
  single-flight activation a jeden sdílený visit future. Nevede per-caller
  completer list, neomezenou command queue ani historii requestů.
- Duplicate readiness/data/camera events jsou idempotentní podle epoch tuple;
  počet effect calls neroste s počtem rebuildů nebo platform callbacks.
- Callers nejsou listenery session. Počet event/profile/search obrazovek proto
  nezvyšuje fan-out rebuildů při map requestu.
- Catalog/scene refresh aktualizuje data uvnitř jednoho hostu; nereloaduje style,
  base map ani native platform view.
- Jeden public surface je warm, když je paměť dostupná. Memory pressure dovolí
  O(1) detach a pozdější reattach bez ztráty latest intentu.
- Structured telemetry používá bounded outcome/reason enum a renderer/platform;
  request id slouží ke korelaci lokálního toku, ne jako dlouhodobý high-cardinality
  metric label.
- Adaptery neposílají každý marker jako orchestration event. Session pracuje s
  place id/catalog revision a jeden scene update zůstává odpovědností existující
  renderer-neutral map vrstvy.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** Jde o complete cutover na `PublicMapSession`, ne další vrstvu nad
  `MapSessionController + MapPlaceFocusCoordinator`.
- **D2:** Použije se single-writer event-driven state machine s monotónním
  request id, explicitními effects a typed acknowledgements. To je standardní
  ochrana proti stale async completion, nikoli pořadí callbacků „odhadnuté“
  časem.
- **D3:** Warm retention zůstane odpovědností `AutoTabsRouter`; session vlastní
  pouze intent a orchestration state. Retention a renderer activity jsou dvě
  různé vlastnosti.
- **D4:** Public navigation vrací `MapVisitResult`. Historickou pop/back
  semantiku reprezentuje výhradně `returned`; callers s reloadem testují tuto
  hodnotu. Interní focus completion zůstává zvláštní state/effect.
- **D5:** Actual camera je součást úspěšného výsledku. `Future<void>` není
  dostatečný interface pro povinný uživatelský stav.
- **D6:** `MapNavigation` lookup bude non-reactive. Reaktivní state session
  smí sledovat jen map host/view přes explicitní listenable nebo event.
- **D7:** Router history zůstane jediný mechanismus Back. Nebude vznikat
  vlastní stack v session ani přímé JS history mutation.
- **D8:** Characterization a state-machine tests vzniknou před migrací callers.
  Produkční deploy začne až po deterministickém warm-tab testu, ne na základě
  dalšího live pokusu.
- **D9:** Existing `MapViewportController` renderer-neutral seam se zachová,
  ale povinná camera metoda se prohloubí typed výsledkem; kosmetické
  `animateTo/fitCoordinates` mohou zůstat pro uživatelské interakce.
- **D10:** `KeyedSubtree(projectionEpoch)` se nesmí odstranit naslepo. Wave 1
  nejdřív prokáže lifecycle; pokud remountuje mapu, refresh seam se přemístí bez
  změny ostatních tabů.
- **D11:** Pokud je veřejná mapa už aktivní, nový place/category intent
  nepřidává duplicitní `/map` history entry. Completion takového volání znamená
  `resolvedInPlace(MapFocusOutcome)`; přechod z jiné route vrátí
  `returned` až po Back.
- **D12:** Warm retention je výchozí politika, ne neomezený RAM slib. Explicitní
  memory-pressure eviction neaktivního rendereru je povolená a pro reducer má
  stejné chování jako renderer swap.
- **D13:** Public a admin edit route se rozdělí typově i registrací. Pouhá
  hodnota `MapMode` v dnešním `MapRouteArgs` není dostatečný cutover, protože by
  zachovala nullable veřejný bypass a generated surface.
- **D14:** Activation je single-flight a request latest-wins. Route pushes se
  nefrontují po každém intentu; všechny callers téže aktivace sdílejí její pop
  completion.
- **D15:** Retry budget není časový počet pokusů. Je to nejvýše jeden attempt na
  explicitní readiness tuple; tím se řešení škáluje bez polling loopu.
- **D16:** Popup/dialog je request-scoped presentation effect. Nesmí se spouštět
  přes samostatné `unawaited(_onPlaceTap)` mimo session lifecycle.

### Assumptions

- **Wave 1/5 route evidence (updated 2026-08-08):** AutoRoute 11.1.0
  nepodporuje volitelný segment zápisem `:id?` a odmítá dvě page registrace se
  stejným route name. Samostatný `PublicMapDeepLinkRoute` však není členem
  pevného `AutoTabsRouter` tab setu, takže čistý webový vstup `/map/:id` skončil
  na prvním tabu a zkracující nested redirect propadl při root segment-count
  validaci do wildcardu. Jeden `PublicMapRoute` proto používá segment
  `map/:destination`: `/map/:id` matchuje přímo a `/map` je kompatibilní alias
  na `map/overview`. Page pouze přeloží číselný segment na `MapPlaceIntent` a
  renderuje jeden canonical public host.

- **Wave 3 tab-history evidence (2026-08-07):** `pushPath` z occasion shellu
  hledá `StackRouter` a pro absolutní occasion cestu vytvoří druhý shell, takže
  intent z původní session nemůže zaostřit nový host. `navigatePath` sice
  aktivuje retained mapu, ale znovu vyřeší hierarchii a zahodí vnořený origin
  stack (`event/:id`). Dokonce i typed `TabsRouter.navigate` nahradí page pro
  cílový tab a remountuje native platform view. Kanonický adapter proto vybírá
  už registrovaný tab přes `setActiveIndex`, drží route-lifetime do visibility
  `true -> false` a stejným routerem obnoví zachovaný origin index. Jediný
  `MapPage` host je hoisted ve stabilním shell `Stack` mimo route projection;
  `/map` a `/map/:id` jsou pouze intent adaptery. Android debug telemetry tím
  prokázala jeden mount/surface/platform-view přes první i druhou návštěvu a
  žádný build-phase notifier assert.

- **A1:** `AutoTabsRouter` 11.1.0 při stabilní route konfiguraci drží offstage
  `MapPage` state; impact if false: warm-map požadavek nelze splnit jen tímto
  hostem; resolve by: lifecycle test s identity counterem ve Wave 1.
- **A2:** Legacy `flutter_map` i MapLibre vydají nebo dovolí přečíst camera stav
  po programmatic move; impact if false: adapter musí potvrdit stav přes
  synchronní camera getter po renderer-specific layout eventu; resolve by:
  adapter contract spike bez změny veřejné session.
- **A3:** Cílový zoom zůstává renderer-normalized 18; impact if product chce
  jinou hodnotu: mění se jediná `MapFocusPolicy`, ne orchestrace.
- **A4:** Přímý `/map/:id` musí být podporován, ale nemusí do URL interní warm
  navigace zapisovat id; impact if SEO/share vyžaduje id: router adapter může
  projektovat intent do URL bez změny reduceru. Resolve by: zachovat současné
  veřejné chování `/map` pro interní přechod a otestovat cold deep link.

### Blockers

- **B1:** None pro lokální implementaci a testy.
- **B2:** Produkční deploy a smoke po dokončení vyžadují nový explicitní pokyn;
  tato plánovací fáze předchozí deploy loop zastavila.

## Failure matrix

| Failure / race | Canonical response | Forbidden response |
|---|---|---|
| Rapid A→B před tab visibility | Jeden push/shared visit future, latest B request, stale A effects ignored. | Dva `/map` pushes, fronta obou kamer nebo orphaned A completer. |
| Route push selže/guard odmítne | `MapVisitResult.navigationFailed`, activation cleared, typed telemetry. | Pending spinner, swallowed unawaited error nebo fallback na druhou route implementaci. |
| Back před renderer/catalog readiness | Visit vrátí `returned(cancelled)`, request/effects invalidovány. | Pozdější camera move/dialog na skryté mapě. |
| Místo není v offline ani refreshed katalogu | `MapFocusOutcome.unavailable`, konečný disabled/error state; visit zůstane do Back. | Nekonečný loading nebo online-only side load bypass. |
| Catalog refresh nahradí scene během focusu | Nový catalog epoch; starý effect stale, latest intent se aplikuje nejvýše jednou na nový tuple. | Focus default mapy nebo opakovaný polling. |
| Renderer attach bez layoutu/style | Waiting snapshot; žádný effect do nového readiness epochu. | Timer, post-frame business guess nebo zahazování intentu. |
| Renderer swap/offline toggle | Nový `surfaceId/styleEpoch`, old result ignored, latest intent durable. | Použití one-shot old `_mapReady` nebo command do detached controlleru. |
| Camera command vrátí actual mismatch | Typed retryable/non-retryable result; retry pouze na nový readiness tuple. | Označit request complete po `Future<void>` nebo neomezeně opakovat move. |
| Async popup/dialog doběhne po supersede/Back | Request token neplatí, presentation se neotevře/uzavře bez změny nové session. | Stale dialog nad origin/novou occasion. |
| App jde background během effectu | Host inactive epoch, effect invalidován; resume vytvoří nový readiness event. | Aktivní native render loop nebo camera work na pozadí. |
| Memory pressure evictne inactive surface | Detach, nový surface id při reattach, latest request zachován. | Držet neomezeně RAM nebo považovat starý controller za ready. |
| Occasion switch/session dispose | Shared activation dokončená `cancelled`, všechny old tokens invalidní. | Cross-occasion focus, dangling listener/completer. |
| Projection epoch se změní | Scene refresh bez změny surface identity; pokud současný key remountuje, Wave 4 jej odstraní. | Cold style/map reconstruction při každém sync update. |
| Produkční browser drží starý PWA build | Smoke nezačne bez potvrzené runtime verze; jeden standardní Reload. | Diagnostika výsledku proti neznámé generaci nebo force-cache workaround v business kódu. |

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| `lib/components/map/map_session.dart:MapSessionController/MapSessionScope` | Částečně vlastní destination, active bool a void activator. | Nahradit `PublicMapSession` a non-listening scope/interface; staré typy smazat. | `rg "MapSessionController|MapSessionScope|MapPlaceDestination" lib test` nic nenajde. |
| `lib/components/map/map_place_focus_coordinator.dart` | Druhý pending/in-flight automat bez route, catalog/surface identity a camera ack. | Sloučit do reduceru `PublicMapSession`; soubor a jeho interní testy smazat. | `rg "MapPlaceFocusCoordinator" lib test` nic nenajde. |
| `MapPage._isMapTabActive`, `_tabsRouter`, `_tabsRouterListener`, `_handledMapDestinationRevision`, `_initialLoadInProgress` orchestration | Třetí kopie visibility/request/lifecycle state. | Přesunout za session interface; view přijímá host state/commands. | Jmenované symboly nejsou v `map_page.dart`; MapPage neimportuje `auto_route` kvůli tab lifecycle. |
| `MapPage._mapReady` one-shot completer | Globální ready bez surface epoch. | Nahradit host readiness eventem s `surfaceId/styleEpoch/layout`. | `rg "_mapReady" lib/components/map` nic nenajde. |
| `MapViewportController.moveTo -> Future<void>` pro povinný focus | Fire-and-forget command bez výsledku. | Nahradit interním `applyCamera -> CameraApplyResult`; ostatní kosmetické metody ponechat. | Interface test vyžaduje actual camera a surface token; žádný public focus caller nevolá `moveTo`. |
| `unawaited(_onPlaceTap)` jako deep-link presentation | Popup/dialog může doběhnout po Back nebo novějším requestu. | Nahradit request-scoped presentation effectem a typed completion/cancellation. | Focused search nenajde fire-and-forget presentation v public focus cestě; stale-dialog test. |
| `MapPage._setMapTabActive` web delay + `JSInterop.changeUrl` | Druhý URL writer. | Smazat; URL/history vlastní AutoRoute adapter. | `rg "changeUrl|Duration\(milliseconds: 100\)" lib/components/map/map_page.dart` nic nenajde. |
| Reaktivní `MapSessionScope.maybeOf` command lookup | Přihlašuje caller k session. | Oddělit `read` (non-listening) od interního view watch; command path používá pouze `read`. | Widget test: openPlace nezavolá caller `didChangeDependencies` ani rebuild. |
| Paralelní direct-route focus v `loadData(placeId:)` | Cold deep link řeší focus jiným tokem. | Route param převést jednou na `MapIntent`; catalog load pouze publikuje data event. | Jeden reducer test pokrývá warm i cold intent; `loadData` nevolá camera/focus. |
| Overloaded `MapRoute/MapRouteArgs(id, place, editPathGroup, placeType)` | Jedna generated route zaměňuje public browse, deep link a dva edit režimy. | Rozdělit na public a editor route, odstranit starý typ/args po migraci callers a regenerovat. | `rg "class MapRoute|MapRouteArgs|MapRoute\(" lib/app_router.gr.dart lib/components` vrací jen záměrně pojmenovaný survivor, nebo nic podle finálního unversioned názvu; žádné nullable edit args v public route. |
| Rekurzivní `AutoRoute(page: MapRoute.page, children: [MapRoute.page :id])` | Cold deep link může stavět druhou instanci téže page identity. | Nahradit jedním public route hostem a thin compatibility parsingem intentu. | Router integration test pro `/map/:id` hlásí jeden public surface/mount. |
| Direct cleaning category `RouterService.navigateOccasion("map?placeType=…")` | Public category bypass. | Migrovat na `MapNavigation.openCategory`. | Focused search nenajde direct public category push. |
| `KeyedSubtree(ValueKey(projectionEpoch))` kolem celého tab child, pokud test prokáže remount | Hrubý refresh všech tabů. | Nahradit granular projection listenery/data update bez identity změny map hostu. | Lifecycle test zachová stejný `surfaceId` přes epoch increment; removal závisí na Wave 1 důkazu. |
| Staré testy pouze jednotlivých shallow tříd | Ověřují lokální booleany, ne end-to-end invariant. | Po vzniku interface testů smazat/nahradit testy session/focus coordinatoru; renderer parity testy ponechat. | Test suite obsahuje permutation tests přes `PublicMapSession` interface, ne interní claim/complete. |
| Old generated router output | Obsahuje odstraněný route/args kontrakt. | Regenerovat build_runnerem po route cutover; nevytvářet ruční alias. | Druhý build_runner průchod nevytvoří diff; old symbols absent. |
| Misleading source comments and historical direct-navigation instructions | Udržují bypass jako doporučený postup. | Aktualizovat source comment a starý plán označit v relevantní sekci jako superseded tímto canonical planem. | `rg` nenajde starý direct snippet jako aktivní instrukci bez superseded označení. |

## Implementation waves

### Wave 1 — Charakterizace uzamkne skutečné lifecycle a kontrakty

**Goal**

Bez další produkční změny existuje deterministický test, který reprodukuje
warm přechod a prokáže, kde se ztrácí camera command. Současně je uzamčena
historická pop-completion semantika a identita retained surface.

**Changes**

- `test/components/map/map_navigation_contract_test.dart` — widget harness s
  callerem, `didChangeDependencies` counterem a route future; prokáže současné
  nežádoucí immediate completion i inherited subscription, poté bude sloužit
  jako acceptance test cílového kontraktu.
- `test/components/map/warm_map_lifecycle_test.dart` — minimální
  `AutoTabsRouter`/shell harness: program detail → map → Back → map podruhé;
  zaznamená mount/dispose, visibility, layout size, surface id, camera calls,
  rychlý A→B a počet router pushes.
- `test/components/map/map_deep_link_route_identity_test.dart` — `/map/:id`
  vytvoří právě jeden public map host; zaznamená current recursive route
  behavior před split cutoverem.
- `test/components/map/map_place_presentation_contract_test.dart` — uzamkne
  dnešní presentation/Back pořadí pro empty/short description, long
  description/events a WC popup, včetně Back před dokončením async dialogu.
- `test/components/occasion/occasion_projection_retention_test.dart` — zvýší
  `projectionEpoch` a ověří, zda se map host remountuje.
- `lib/components/map/` — přidat pouze dočasně ohraničené debug eventy za
  compile-time/test sinkem, ne produkční `print`: request, route, visibility,
  attach/ready/layout, catalog epoch, camera requested/actual/result.
- Zaznamenat falsifikované hypotézy 430–432 v test fixture/plan comments tak,
  aby realizace znovu nepřidávala animation/timer patch bez důkazu.

**Migration/deletion**

- Žádná runtime architektura se zatím nemění.
- Dočasný event sink bude ve Wave 5 odstraněn nebo nahrazen bounded telemetry.

**Failure and compatibility**

- Test nesmí používat live Supabase ani browser coordinates; seeduje fake
  catalog a fake/Legacy host deterministicky.
- Pokud `projectionEpoch` mapu neremountuje, deletion-ledger položka se označí
  jako retained boundary a plán se aktualizuje tímto důkazem.

**Validation**

- `fvm flutter test test/components/map/map_navigation_contract_test.dart test/components/map/warm_map_lifecycle_test.dart test/components/occasion/occasion_projection_retention_test.dart`
  doplněný route-identity a presentation contract testy — prokáže completion,
  subscription, lifecycle, modal Back ordering a reprodukovaný camera gap.

**Exit condition**

Test jednoznačně rozlišuje request published, tab visible, host active+laid out,
camera command sent a actual camera; selhání je reprodukovatelné bez produkce a
surface identity přes warm přechod, deep link a projection epoch je známá.

### Wave 2 — Hluboký `PublicMapSession` získá jediný stavový model

**Goal**

Pure reducer a effect runner vyřeší všechna pořadí eventů bez Flutter frame
časování. Externí interface zůstane `openPlace/openCategory`.

**Changes**

- `lib/components/map/public_map_session.dart` — immutable state, monotónní
  request id, latest-wins reducer, typed phases/failures a effect runner.
- `lib/components/map/map_navigation.dart` — non-listening lookup a delegace;
  vracet `Future<MapVisitResult>` a očekávané failure/cancellation reprezentovat
  hodnotou, ne unhandled exceptionem.
- `lib/components/map/public_map_host.dart` — interní host snapshot, surface
  token a typed `CameraApplyResult`; nevystavovat je callerům.
- `test/components/map/public_map_session_test.dart` — tabulkové permutation
  testy: request před/po hostu, inactive/active, catalog před/po rendereru,
  rapid A→B, stale camera A, renderer swap, offline hit, missing place, retryable
  layout, background/resume, memory-pressure detach/reattach, již aktivní mapa
  bez duplicate history, dvě callers během single-flight activation, opakovaný
  stejný readiness tuple, route push failure, Back před focus completion,
  dispose/occasion switch a stale presentation completion.
- Fake navigation a host adapters budou internal test seams, ne součást externí
  interface.

**Migration/deletion**

- Zatím nemigrovat production callers; modul běží přes test adapters.
- Jakmile permutation tests pokryjí staré chování, odstranit případné duplicate
  reducer prototypes, neudržovat V1/V2 session.

**Failure and compatibility**

- Effect exception se přeloží na typed retryable/terminal result; reducer nikdy
  nezůstane v in-flight bez eventu.
- Stale result je no-op a je pozorovatelný v trace, nikoli error toast.
- Jeden readiness tuple má jeden attempt. Test používá call counter a prokáže,
  že duplicate event nevytváří retry/CPU loop.
- Single-flight activation vlastní a uklidí jediný shared visit completer při
  pop, push failure i session dispose; test končí bez pending activation.

**Validation**

- `fvm flutter test test/components/map/public_map_session_test.dart`
  — prokáže state machine invariants nezávisle na Flutter UI.

**Exit condition**

Všechny relevantní event permutations končí deterministicky ve `focused`,
`waiting` nebo typed `failed`; neexistuje timer ani unawaited effect, který může
request označit za hotový.

### Wave 3 — Router a host adaptery získají explicitní acknowledgement

**Goal**

AutoRoute, Legacy a MapLibre přeloží své lifecycle do jediného session
protokolu a povinný focus je potvrzen actual camera.

**Changes**

- `lib/components/occasion/occasion_home_page.dart` — vlastnit
  `PublicMapSession`; vytvořit AutoRoute adapter, publikovat jediný visibility
  event z `TabsRouter`/tab observeru a vracet push/pop future. Odstranit
  post-frame `setMapActive` a rebinding callbacku v každém build. Adapter
  coalescuje concurrent activation do jedné push operation.
- `lib/components/map/map_viewport_controller.dart` — přidat typed camera
  command/result a surface identity; readiness je snapshot, ne bool.
- `lib/components/map/legacy_map_surface.dart` — reportovat attached,
  active-layout-ready, camera event/actual state a deterministic apply result;
  zastavit staré kosmetické animace před povinným commandem, ale úspěch založit
  na actual camera.
- `lib/components/map/maplibre/maplibre_map_surface.dart` a
  `maplibre_viewport_controller.dart` — totéž nad style ready/native camera idle;
  activity state stále řídí Android pause a iOS FPS.
- Public map view — aplikovat request-scoped presentation až po current host
  validation; modal/popup completion vrátit session a ignorovat po Back,
  supersede nebo detach.
- `test/components/map/legacy_map_focus_contract_test.dart` — actual
  `FlutterMap` pod inactive/active tabem, první i druhý warm focus, actual zoom.
- `test/components/map/maplibre_focus_contract_test.dart` — fake platform
  controller/adapter contract; skutečný plugin se ověří integračně ve Wave 5.

**Migration/deletion**

- Odstranit `MapPage` tab router listener, session listener a web URL delay.
- Odstranit `_mapReady` a bool readiness.

**Failure and compatibility**

- Renderer attach bez layoutu publikuje waiting; nesmí command zahodit.
- Renderer swap invaliduje pouze effects se starým surface tokenem; latest
  intent zůstane pending a aplikuje se na nový povrch.
- Camera/presentation adapters jsou mechanické: nesmějí plánovat retry,
  přepisovat latest request ani pushovat route.

**Validation**

- `fvm flutter test test/components/map/legacy_map_focus_contract_test.dart test/components/map/maplibre_focus_contract_test.dart test/components/map/warm_map_lifecycle_test.dart`
  — prokáže host parity a warm focus bez frame guessingu.

**Exit condition**

Oba adaptery vracejí `applied` pouze s actual target camera; inactive/layout
zero a stale surface mají explicitní výsledky a pending intent se neztratí.

### Wave 4 — Migrovat všechny veřejné vstupy a odstranit paralelní cestu

**Goal**

Každý veřejný vstup používá jednu session; cold deep link i warm navigation
sdílejí reducer a Back completion.

**Changes**

- Migrovat a otestovat callers nalezené přes `rg "MapNavigation.openPlace"`:
  `event_page.dart`, `schedule_page.dart`, `my_schedule_page.dart`,
  `user_page.dart`, `user_stay_page.dart`, `counseling_picker.dart`,
  `cleaning_page.dart`, `global_search_dialog.dart`.
- `event_page.dart`, `schedule_page.dart` a `my_schedule_page.dart` — nahradit
  bezpodmínečné `.then(loadData)` explicitním reloadem pouze pro
  `MapVisitResult.returned`; ostatní výsledky nesmějí spustit origin reload.
- `lib/components/cleaning/cleaning_page.dart` — category action převést na
  `MapNavigation.openCategory`; nezachovat direct route fallback uvnitř calleru.
- `lib/app_router.dart` — zavést oddělený `PublicMapRoute` pro `/map` a thin
  compatibility parsing `/map/:id`/query do intentu; zavést `MapEditorRoute`
  pro admin editaci. Odstranit recursive child se stejnou page identity.
- Public page constructor nesmí obsahovat `place` ani `editPathGroup`.
  `MapEditorRoute` přijímá sealed typed edit mode, takže neexistují neplatné
  nullable kombinace.
- Spustit `fvm dart run build_runner build --delete-conflicting-outputs` až po
  finálním route/caller cutoveru; generated file ručně needitovat. Druhý čistý
  generation průchod nesmí vytvořit diff.
- `MapPage.loadData` — pouze publikuje catalog snapshot/revision a scene;
  nevolá focus ani camera podle `placeId`.
- Category route (`placeType`) převést na `openCategory`; forced visibility a
  default filter jsou jeden intent policy, ne zvláštní URL race.
- `places_content.dart`, `path_groups_content.dart`, `user_groups_tab.dart` —
  migrovat na `MapEditorRoute`; editor nikdy nečte public session scope.
- `global_search_dialog.dart` comment a relevantní direct-navigation snippet v
  `docs/plans/2026-07-10_uklidova_sluzba_plan.md` aktualizovat/označit
  superseded canonical plánem.

**Migration/deletion**

- Smazat `MapSessionController`, `MapPlaceFocusCoordinator`, jejich testy a
  všechny duplicate fields/callbacks podle deletion ledgeru.
- Smazat public direct `MapRoute` bypassy; edit bypassy zůstanou pouze na
  jmenované typed `MapEditorRoute` hranici.
- Nahradit shallow tests interface tests; neponechat V1/V2 aliasy.
- Smazat starý `MapRouteArgs` generated kontrakt, recursive registration,
  obsolete imports/comments a nepoužívaný mapový `JSInterop` field/import.

**Failure and compatibility**

- Caller `.then(loadData)` se znovu spustí až po Back. Testy musí zachytit i
  chování při terminal missing-place failure a uživatelském okamžitém Back.
- Cold deep link bez cached místa čeká na catalog event nebo skončí typed
  unavailable; nesmí nekonečně spinnerovat.

**Validation**

- `rg "MapSessionController|MapSessionScope|MapPlaceFocusCoordinator|_mapReady|_handledMapDestinationRevision" lib test`
  — absence starého protokolu.
- `rg "MapRouteArgs|MapRoute\(place:|MapRoute\(editPathGroup:|map\?placeType" lib test docs`
  — žádný starý public/edit args bag ani public category bypass; případné
  historical docs match musí být explicitně označený superseded.
- Zaznamenat `shasum -a 256 lib/app_router.gr.dart` po první finální generaci,
  spustit `fvm dart run build_runner build --delete-conflicting-outputs`
  podruhé a porovnat hash — generated route graph je idempotentní a stabilní.
- Targeted Flutter test batch pro session, callers, router, Legacy a MapLibre
  contracts.

**Exit condition**

Všechny veřejné callers procházejí `PublicMapSession`; stará orchestrace je
nedosažitelná a odstraněná, edit režimy jsou jediná dokumentovaná samostatná
mapová hranice.

### Wave 5 — Warm/Back/performance acceptance na webu a nativně

**Goal**

Deterministické testy i reálné platformy prokážou uživatelský výsledek,
retention a výkon před jakýmkoli produkčním deployem.

**Changes**

- Přidat repository integration/smoke scénář se seeded offline catalogem:
  program → místo A → mapa → app Back → profil/místo B → stejná mapa.
- Ověřit `surfaceId` stejné mezi průchody, actual zoom 18 a center A/B; Back
  vrací konkrétní origin state.
- Android emulator + iOS Simulator: stejný smoke na MapLibre; Android navíc
  profiler/log counter pro active vs inactive render activity.
- Ověřit background/resume během pending focusu a memory-pressure eviction
  přes host test hook: po reattachi existuje nový surface id a latest intent se
  dokončí právě jednou.
- Web localhost: Legacy smoke přes `agent-browser` na potvrzeném lokálním buildu;
  nepoužívat live produkci jako debugger.
- Odstranit test-only trace sink; ponechat pouze bounded structured telemetry:
  request id, renderer, outcome, latency a typed failure bez osobních dat.

**Migration/deletion**

- Odstranit dočasnou instrumentation a případné spike adapters.
- Pokud projection key remountuje mapu, dokončit jeho granular náhradu a
  absence proof.

**Failure and compatibility**

- Simulátory prokazují funkci, ne fyzický výkon. Pro finální Android výkon
  použít stejný fyzický telefon, na kterém byl pozorován původní problém.
- Jediné selhání warm second pass, Back nebo surface identity blokuje deploy.

**Validation**

- Targeted Flutter tests z předchozích waves.
- Repository-approved integration command pro Android/iOS; nevynucovat přímý
  Playwright bypass.
- `agent-browser` localhost smoke se screenshoty first/warm second focus.
- Profile/release měření: jedna native surface instance, inactive renderer bez
  aktivního 60 FPS loopu, žádný opakovaný style/scene cold init.

**Exit condition**

Web, Android emulator a iOS Simulator projdou first + second warm focus a Back;
fyzický Android potvrdí retained surface a přijatelný inactive CPU/GPU profil.

### Wave 6 — Oddělený autorizovaný rollout a produkční důkaz

**Goal**

Teprve po lokální acceptance se vytvoří release build, nasadí a jednou ověří
na produkci bez dalšího live-debug loopu.

**Changes**

- Po novém explicitním pokynu zvýšit verzi, aplikovat config a spustit
  repository release/deploy gates.
- Deploy Cloudflare Pages standardním projektem/branchí.
- Na čerstvé/aktualizované session nejprve potvrdit skutečný main build, potom
  smoke: event A → location → actual detail zoom; app Back; profile/event B →
  warm actual detail zoom.
- Zaznamenat verzi, request outcome a screenshoty; browser session zavřít.

**Migration/deletion**

- Žádný rollback na cold map ani starý session protokol. Při selhání rollout
  zastavit a použít structured trace proti lokálně reprodukovatelnému testu.

**Failure and compatibility**

- PWA update banner se vyřeší jedním potvrzeným Reload; test nezačne, dokud
  běžící main build neodpovídá nasazené verzi.
- Produkční chyba neautorizuje další ad-hoc deploy. Nejdřív musí vzniknout
  lokální reprodukce nebo být aktualizován tento plán s novým důkazem.

**Validation**

- `automation/verify_web_build.mjs` / repository build verification.
- `automation/verify_web_deployment.mjs` a přímý `festapp-version.json` probe.
- Exact production first/warm/back smoke.

**Exit condition**

Produkce servíruje potvrzenou verzi a oba warm průchody zobrazí správné místo v
detailním zoomu; Back vrací origin a telemetry nehlásí retry/terminal failure.

## Rollout and rollback

1. Produkce zůstává na 432 po dobu Waves 1–5. Build 433 se nenasazuje.
2. Implementace je complete cutover v jednom zdrojovém stromu; nepřidává se
   feature flag, V2 session ani runtime fallback na starý protokol.
3. Jednotlivé waves jsou lokálně validovatelné, ale staré runtime typy se
   odstraní v téže implementační sérii před release.
4. Produkční deploy je samostatný autorizovaný krok až po platform acceptance.
5. Rollback release artefaktu je provozní možnost při kritické chybě, ale další
   vývoj nesmí obnovit distribuovaný callback/timer protokol. Oprava pokračuje
   v jednom `PublicMapSession` modelu.
6. MapLibre renderer configuration a offline assety se nemění; renderer rollback
   není součástí tohoto plánu.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Warm/cold přechod z jiné route má stejný Back kontrakt | `MapNavigation` interface + fake router | Navigation contract widget test; caller reload count před/po Back; active-map intent bez duplicate history |
| Command lookup nerebuildí caller | Non-listening scope read | `didChangeDependencies`/build counter v caller harnessu |
| Event ordering neztratí request | Pure `PublicMapSession` reducer | Tabulkové permutation tests včetně rapid A→B a stale ack |
| Concurrent callers nevytvoří route/completer leak | Single-flight navigation adapter | Dvě intents před visibility → jeden push, latest focus, identický shared visit future/result, po pop žádná pending activation |
| Retry se nezacyklí | Reducer attempt key | Duplicate readiness tuple nezvýší adapter call count; nový epoch povolí právě jeden pokus |
| Camera je skutečně aplikována | `PublicMapHost.applyCamera` result | Actual center/zoom/surface token assertion |
| Inactive host command nezahodí | Host readiness contract | inactive/layout-zero → retryable; active event → applied |
| Renderer swap je bezpečný | Surface epoch | Stale old-surface result ignorován, latest intent aplikován novým hostem |
| Projection refresh zachová warm surface | Shell lifecycle harness | Stejný mount/surface id přes epoch increment |
| Direct link a warm caller mají jeden tok | Router/session integration | `/map/:id` a `openPlace(id)` skončí stejným reducer outcome |
| Public a edit route se nemohou zaměnit | Generated router + typed constructors | Public route bez edit args; editor route bez session binding; jeden public host pro deep link |
| Back zůstane beze změny | AutoRoute integration | App/system/browser Back vrátí origin route/state |
| Stale presentation se neotevře | Request-scoped presentation adapter | Back/supersede/detach před async completion → žádný popup/dialog |
| Native výkon se nezhorší | Retained MapLibre view + profiler | Jedna surface; inactive Android paused, iOS low FPS; žádný style reload |
| Memory pressure neztratí intent | Session + host detach/reattach | Nový surface id, stale old ack ignored, latest request applied once |
| Web stale build neznehodnotí smoke | Version endpoint + runtime confirmation | Main version potvrzena před interakcí |

## Definition of complete

- [x] Existuje jeden `PublicMapSession` a jeden mounted public map surface na
      occasion.
- [x] Všechny veřejné entry points používají `MapNavigation` a jeden intent
      reducer; cold deep link není paralelní implementace.
- [x] Warm i cold `openPlace` z jiné route vrátí `returned` až po Back/pop;
      intent nad aktivní mapou nepřidá duplicate history a vrátí
      `resolvedInPlace(MapFocusOutcome)`.
- [x] Caller při command lookupu nezíská inherited dependency a během přechodu
      se nespouští duplicitní reload.
- [x] Visibility, renderer readiness, catalog readiness a camera ack mají
      jediného writera a explicitní epoch/token.
- [x] Focus se označí complete pouze při actual center/zoom na aktuálním
      surface.
- [x] Latest-wins a stale async výsledky jsou pokryté permutation tests.
- [x] `MapSessionController`, `MapPlaceFocusCoordinator`, bool readiness,
      `_mapReady`, tab listener v `MapPage` a JS URL delay jsou odstraněné.
- [x] Activation je single-flight, rapid A→B vytvoří jednu history entry a
      všechny activation futures vrátí deterministický typed výsledek a jsou
      uklizené při pop/error/dispose.
- [x] Retry je bounded readiness tuplem; duplicate event nevytváří polling ani
      opakovaný camera/presentation effect.
- [x] Public a editor route mají rozdílné generated typy; public constructor
      nemá nullable edit arguments a cold deep link vytvoří jeden public host.
- [x] Stale camera, popup a dialog completion po Back/supersede/detach jsou
      ignorované.
- [x] Projection update neremountuje public map surface.
- [x] App/system/browser Back zachová současný původní návrat.
- [x] Web, Android emulator a iOS Simulator prošly first + warm second smoke.
- [ ] Fyzický Android potvrdí výkon mimo softwarově renderovaný emulátor.
- [x] Produkce byla nasazena až po samostatné autorizaci a exact smoke prokázal
      verzi i actual zoom.
- [x] Nezůstaly V1/V2 aliasy, timer fallbacky, speculative retries ani obsolete
      testy/dokumentace v tomto scope.
- [x] Generated router je po cutoveru regenerovaný a stabilní; source comments
      ani aktivní docs nedoporučují odstraněný direct-navigation bypass.

## Residual risks

- Přesný bezprostřední mechanismus, který ve 432 odmítá/přepisuje camera zoom,
  zatím není pozorovatelný. Wave 1 jej musí rozlišit před implementací adapteru;
  plán jej záměrně nepředstírá jako potvrzený TickerMode problém.
- Finální AutoRoute shape pro permanentní `/map/:id` compatibility adapter se
  musí řídit Wave 1 route-identity testem. Povolené varianty však musí splnit
  pevný výsledek: jeden `PublicMapPage`, jeden session intent a žádný recursive
  same-page child host.
- Skutečný výkon nativní MapLibre mapy nelze uzavřít simulátorem. Finální gate
  zůstává fyzický Android telefon.
- `MapPage` zůstane i po tomto plánu velký view/data/edit modul. Tento plán z něj
  vyjme kritickou veřejnou orchestration seam; další rozdělení filtrů/editace je
  samostatná práce, pokud nebude nutné pro dodržení zde uvedené interface.
