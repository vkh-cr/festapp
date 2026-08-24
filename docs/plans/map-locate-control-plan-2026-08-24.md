# Standardní locate/recenter ovladač mapy

Date: 2026-08-24
Status: Ready for execution
Verification: standard

## Outcome

Každá aktivní Festapp mapa, která zobrazuje aktuální polohu uživatele, má
standardní rohové tlačítko „moje poloha“. Tlačítko zůstává dostupné i po ručním
posunu mapy mimo uživatele. Po kliknutí jednorázově získá aktuální přesnou
polohu, plynule na ni vycentruje aktivní renderer a použije alespoň lokální
orientační zoom. Stejné chování platí pro online/web Legacy mapu i nativní
offline MapLibre mapu na Androidu a iOS.

## Scope

### In scope

- Jedno renderer-neutral locate/recenter tlačítko v `MapPage`.
- Jednorázové načtení polohy přes kanonickou `MapLocationAccuracy` politiku.
- Vycentrování přes existující `MapViewportCoordinator`, bez přímých volání
  konkrétního Legacy nebo MapLibre controlleru z UI.
- Standardní stavy tlačítka: připraveno, probíhá lokalizace, nedostupné.
- Přístupný tooltip/semantics label a lokalizovaná chyba pro všech šest jazyků.
- Widget a controller-contract testy, které nevyžadují skutečné GPS ani nativní
  map view.

### Out of scope

- Trvalý „follow me“/heading režim, rotace mapy podle kompasu nebo navigace po
  trase.
- Automatické sledování uživatele po prvním kliknutí.
- Podmíněné skrývání tlačítka podle toho, zda je uživatel právě uvnitř viewportu.
- Změna mapových providerů, offline balíčků, marker designu nebo oprávnění na
  pozadí.
- Lokální produkční Flutter build, Google Play/App Store upload nebo release.

## Constraints

- `docs/architecture/ai_context.md` a kořenový `CLAUDE.md` jsou závazné;
  Flutter/Dart příkazy používají `fvm`.
- `MapPage` už vlastní renderer-neutral `MapViewportCoordinator`; nový ovladač
  nesmí importovat ani větvit podle konkrétního rendereru.
- Android MapLibre už používá `PRIORITY_HIGH_ACCURACY`. iOS MapLibre a Legacy
  renderery jsou na `main` sjednocené přes commit `e1bac5de1` a
  `MapLocationAccuracy`; tato politika se nesmí duplikovat.
- Tlačítko nesmí zakládat druhý nepřetržitý position stream. MapLibre už má
  vlastní nativní location manager a Legacy už má stream pro marker.
- Produkční buildy se vytvářejí na jiném produkčním stroji; na tomto Macu se
  spouštějí pouze cílené testy/analyzátory, nikoli produkční app build.
- Změna ovlivňuje sdílené mapové chování a lokalizace, proto je verification
  `standard`.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| `MapPage` je společný vlastník mapového UI pro oba renderery. | `lib/components/map/map_page.dart: _MapPageState.build`; `lib/components/map/map_renderer_host.dart: MapRendererHost` | Locate ovladač patří do jednoho `Stack` v `MapPage`, ne do obou surfaces. |
| Oba renderery jsou připojené ke společnému viewport seam. | `lib/components/map/map_viewport_controller.dart: MapViewportCoordinator`; `LegacyMapViewportController`; `MapLibreViewportController` | Kliknutí používá pouze `animateTo`, takže nevznikne dvojí implementace centrování. |
| Sdílená politika již požaduje navigation-grade přesnost. | `lib/components/map/map_location_accuracy.dart: MapLocationAccuracy.settings` | Jednorázové `getCurrentPosition` musí znovu použít stejné `LocationSettings`. |
| Legacy marker už používá `MapLocationAccuracy.positionStream()`. | `lib/components/map/legacy_map_surface.dart: CurrentLocationLayer` | Locate tlačítko nesmí přidat druhý trvalý stream. |
| MapLibre location puck používá nativní location manager. | `lib/components/map/maplibre/maplibre_map_surface.dart: _enableLocationIfAllowed`; `packages/maplibre_android/lib/src/map_state.dart: enableLocation`; `packages/maplibre_ios/lib/src/map_state.dart: enableLocation` | Poloha pro jedno kliknutí se načte jednorázově v Dart vrstvě; puck se nepřepisuje. |
| Map UI už má rohové overlaye. | `map_page.dart: _buildMapLibreAttribution`; `map_download_indicator.dart: MapDownloadIndicator`; place filters v `MapPageHelper` | Locate control musí mít explicitní nekolidující umístění a SafeArea. |
| `MapStrings` je kanonický localization interface mapy. | `lib/components/map/map_strings.dart`; `assets/translations/{cs,en,de,pl,sk,uk}.json: FeatureMap` | Žádný uživatelský text nesmí být hardcoded ve widgetu. |

Representative flow:

1. `MapPage` sestaví `MapRendererHost` a konkrétní surface připojí svůj viewport
   adapter k `MapViewportCoordinator`.
2. Surface oznámí `onCameraReady`; coordinator se označí jako ready.
3. Uživatel klikne na locate control v `MapPage`.
4. `MapLocationAccuracy.currentPosition()` ověří/requestne oprávnění a provede
   jednorázový high-accuracy request.
5. `MapPage` převede `Position` na `LatLng` a zavolá jediný
   `_viewportController.animateTo(...)`.
6. Aktivní Legacy nebo MapLibre adapter provede animaci; ostatní mapová UI a
   marker/puck zůstávají beze změny.

## Target architecture and invariants

### Canonical owner and contract

- `MapLocationAccuracy` vlastní permission a accuracy politiku. Nová veřejná
  metoda `currentPosition()` vrací `Future<Position?>`: `null` znamená, že
  oprávnění nebylo uděleno; chyby location služby zůstávají výjimkou pro
  existující `ExceptionHandler`.
- `MapPage` vlastní user action a side effect. Metoda `_recenterOnCurrentUser()`
  deduplikuje souběžná kliknutí, zavolá location owner a poté jediný viewport
  interface.
- Nový malý vizuální module `MapLocateControl` vlastní vzhled, semantics,
  disabled/loading stav a rohové umístění. Nezná Geolocator ani map renderer.
- `MapViewportCoordinator.animateTo` zůstává jediným interface pro centrování.

### Invariants

1. Locate control je právě jednou v `MapPage`, bez kopie v Legacy/MapLibre
   surface.
2. Je viditelný pouze při aktivní, připravené mapě se zapnutou current-location
   funkcí; unavailable renderer jej nezobrazí.
3. Ovladač zůstává dostupný bez ohledu na to, zda je uživatel uvnitř viewportu.
4. Jedno kliknutí provede nejvýše jeden in-flight location request a jednu
   camera animaci.
5. Cíl je aktuální `LatLng`; výsledný zoom je `max(currentZoom, 16.0)` a nikdy
   nepřekročí `MapZoomLimits.interactionMaximum`.
6. Zamítnuté oprávnění, vypnutá location služba nebo plugin error neposune mapu
   a zobrazí lokalizovanou uživatelskou chybu.
7. Widget po dispose ani po výměně renderer surface nevolá starý controller.
8. Nevznikne nový nepřetržitý GPS stream, timer ani polling.
9. Všechen veřejný text jde přes `MapStrings` a existuje ve všech podporovaných
   překladech.

### Entry points and forbidden bypasses

- Intended entry point: `MapLocateControl.onPressed` v `MapPage`.
- Intended location owner: `MapLocationAccuracy.currentPosition()`.
- Intended camera owner: `MapViewportCoordinator.animateTo()`.
- Zakázáno: přímé `FlutterMap`/MapLibre controller volání z locate UI, samostatný
  renderer-specific button, vlastní permission logika v `MapPage`, trvalý
  position stream pro visibility heuristiku nebo hardcoded český label.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** Locate control je standardně trvale viditelný v aktivní mapě. Původní
  požadavek „když uživatel není ve výřezu“ je tím pokryt bez dalšího GPS streamu;
  upřesnění uživatele znělo „jak to bývá zvykem u mapových aplikací“.
- **D2:** Kliknutí je jednorázový recenter, ne follow mode. Je to nejmenší
  běžný mapový kontrakt a nezasahuje do stávajícího puku/markeru.
- **D3:** Použít `max(currentZoom, 16.0)` se stropem 22. Uživatel na světovém
  zoomu dostane užitečný lokální detail; již detailní mapu tlačítko neoddálí.
- **D4:** Locate UI je renderer-neutral overlay v `MapPage`. To maximalizuje
  locality a testuje se bez platform view.
- **D5:** Control bude v pravém horním sloupci pod existující attribution/download
  zónou (SafeArea, výchozí `top: 72`, `right: 16`), aby nekolidoval s bottom
  place-type filtrem ani draw/edit controls. Implementace před finalizací ověří
  320px viewport a případně použije sdílený konstantní offset, ne rendererovou
  výjimku.

### Assumptions

- **A1:** `Geolocator.getCurrentPosition(locationSettings: settings)` je
  podporovaný na všech současných cílech; impact if false: web compile/runtime
  by selhal; resolve by: cílený Flutter test/analyze a browser smoke bez
  skutečného udělení polohy.
- **A2:** Zoom 16 je přijatelný standardní lokální detail pro všechny tenanty;
  impact if false: tlačítko vycentruje správně, ale v nevhodném měřítku; resolve
  by: při implementaci ověřit současné default zoomy a ponechat hodnotu jako
  jednu pojmenovanou konstantu v locate module.
- **A3:** Pravý horní offset 72 dp nekoliduje s tenantovými map overlays;
  impact if false: ovladač může překrýt attribution/download badge; resolve by:
  widget test na úzkém viewportu a jeden interaktivní smoke obou stavů.

### Blockers

- None pro implementaci a cílené ověření.
- Native production build/release zůstává samostatný autorizovaný krok na
  produkčním stroji.

### Execution evidence update (2026-08-24)

- `LegacyMapSurface` subscribes to `MapLocationAccuracy.positionStream()` while
  rendering the current-location marker, and `MapLibreMapSurface` calls
  `MapLocationAccuracy.ensurePermission()` while enabling its puck. Therefore
  the pre-existing marker/puck can already trigger a permission request during
  surface initialization. The explicit-tap rule in Wave 3 applies to the new
  one-shot recenter request; changing the existing marker/puck permission timing
  would expand this plan beyond its additive locate-control scope.

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| Inline permission check v locate action | Potenciální duplicitní cesta při naivní implementaci | Nevytvářet; použít `MapLocationAccuracy.currentPosition()` | `rg "Geolocator\.(checkPermission|requestPermission|getCurrentPosition)" lib/components/map` ukáže permission/getCurrentPosition pouze v `map_location_accuracy.dart`. |
| Renderer-specific locate controls | Potenciální dvojí UI a chování | Nevytvářet; jeden `MapLocateControl` v `MapPage` | Search v `legacy_map_surface.dart` a `maplibre_map_surface.dart` neobsahuje locate button/handler. |
| Viewport-visibility polling/second stream | Zbytečný battery a lifecycle risk | Nevytvářet; persistent button + one-shot location | Search a test prokáží žádný Timer/nový stream v locate control. |
| Hardcoded locate/error copy | Obchází localization owner | Nepřipustit; přidat přesně dva `FeatureMap` klíče ve všech locale files | JSON parity test/search všech šesti překladů. |

## Implementation waves

### Wave 1 — Testovatelný one-shot location kontrakt

**Goal**

Získat aktuální navigation-grade pozici přes jeden existující policy owner.

**Changes**

- `test/components/map/map_location_accuracy_test.dart` — nejdřív přidat test
  veřejného one-shot kontraktu s fake `GeolocatorPlatform`: granted vrátí
  position a předá navigation-grade settings; denied vrátí `null` bez position
  requestu. Pokud verze Geolocator fake injekci nepodporuje bez testování
  privátní implementace, omezit test na veřejný výsledek a zaznamenat důvod v
  testu, ne přidávat produkční seam pouze pro mock.
- `lib/components/map/map_location_accuracy.dart` — přidat
  `currentPosition()`; znovu použít `ensurePermission()` a `settings`.

**Migration/deletion**

- Žádná data migrace. Nevytvářet druhou sadu accuracy konstant.

**Failure and compatibility**

- Denied/deniedForever vrací `null`. Service/plugin exceptions se nepolykají,
  aby je UI mohlo jednotně předat `ExceptionHandler`.

**Validation**

- `fvm flutter test test/components/map/map_location_accuracy_test.dart --reporter compact`

**Exit condition**

- One-shot public contract používá stejnou accuracy politiku jako stream a
  test rozlišuje denied od úspěšné polohy.

### Wave 2 — Jediný přístupný locate UI module

**Goal**

Zavést standardní tlačítko nezávislé na rendereru a GPS pluginu.

**Changes**

- `lib/components/map/map_locate_control.dart` — vytvořit stateless/presentation
  module s `enabled`, `loading`, `onPressed`; `Material`/`IconButton`, standardní
  location icon, 48dp touch target, `Tooltip` a `Semantics`, loading indicator.
  Umístění přes `Positioned` + `SafeArea` nebo vracet pouze control a umístit jej
  v `MapPage`; zvolit jednu variantu, ne dvě.
- `lib/components/map/map_strings.dart` — přidat `currentLocation` a
  `currentLocationUnavailable`.
- `assets/translations/cs.json`, `en.json`, `de.json`, `pl.json`, `sk.json`,
  `uk.json` — přidat oba `FeatureMap` klíče s přirozeným překladem.
- `test/components/map/map_locate_control_test.dart` — RED→GREEN widget test:
  tlačítko má přístupný label, tap zavolá callback jednou, loading ho zakáže a
  zobrazí progress. Testovat chování, ne pixel-perfect dekoraci.

**Migration/deletion**

- Žádná stará UI cesta neexistuje; absence renderer-specific controls je
  explicitní invariant.

**Failure and compatibility**

- Control nesmí absorbovat map gestures mimo svůj 48dp hit target.
- Barvy používají `Theme.of(context).colorScheme`; žádný tenant hardcode.

**Validation**

- `fvm flutter test test/components/map/map_locate_control_test.dart --reporter compact`
- `jq empty assets/translations/{cs,en,de,pl,sk,uk}.json`

**Exit condition**

- Samostatný control je ovladatelný klávesnicí/touch, lokalizovaný a nemá žádnou
  závislost na Legacy/MapLibre/Geolocator.

### Wave 3 — Renderer-neutral recenter v MapPage

**Goal**

Napojit standardní ovladač jednou na společný viewport seam.

**Changes**

- `lib/components/map/map_page.dart`:
  - přidat `_isLocatingCurrentUser` a pojmenovanou minimální zoom konstantu;
  - `onCameraReady` po `markReady()` bezpečně obnoví stav, aby se control zobrazil
    až nad skutečně připravenou surface;
  - přidat `_recenterOnCurrentUser()` s in-flight guardem;
  - snapshotnout `surfaceId` před await, po location requestu znovu ověřit
    `mounted`, aktivitu, readiness a stejný surface; při změně surface akci tiše
    ukončit;
  - získat current zoom, clampnout `max(zoom, 16)` do
    `MapZoomLimits.interactionMaximum` a zavolat pouze
    `_viewportController.animateTo`;
  - denied `null` zobrazí `MapStrings.currentLocationUnavailable` přes
    `ToastHelper` s `NotOk`; exceptions jdou přes `ExceptionHandler.guard` se
    stejnou default message;
  - přidat právě jeden `MapLocateControl` do body `Stack`, pouze když je mapa
    aktivní a coordinator ready.
- `test/components/map/map_viewport_coordinator_test.dart` nebo nový úzký
  `map_locate_recenter_test.dart` — fake `MapViewportController` ověří destination,
  zoom floor, zachování vyššího zoomu a že stale/unready surface nedostane
  animaci. Preferovat test přes veřejný locate handler/module; pokud je
  `MapPage` fixture neúměrná, vytáhnout orchestration do malého
  `MapLocateCoordinator` s jedním `recenter()` interface, ne zpřístupňovat
  privátní metodu jen kvůli testu.

**Migration/deletion**

- Žádné přímé controller větvení podle rendereru.
- Pokud testovatelnost vyžádá `MapLocateCoordinator`, přesunout do něj celou
  async orchestration; nenechat paralelní část logiky v `MapPage`.

**Failure and compatibility**

- Double tap během requestu je no-op.
- Výměna online/offline rendereru během permission dialogu nesmí animovat starou
  surface.
- Nový one-shot permission request smí vzniknout jen jako důsledek explicitního
  tapu na locate control. Stávající Legacy location marker a MapLibre puck už na
  `main` volají sdílený permission owner při inicializaci surface; jejich
  dosavadní prompt timing se v tomto additive recenter scope nemění.
- Web zůstává na Legacy a používá stejný action path.

**Validation**

- `fvm flutter test test/components/map/map_locate_control_test.dart test/components/map/map_location_accuracy_test.dart test/components/map/map_viewport_coordinator_test.dart --reporter compact`
- `fvm dart analyze lib/components/map/map_location_accuracy.dart lib/components/map/map_locate_control.dart` pokud CLI přijme file set; jinak analyzovat `lib/components/map` a odlišit pre-existing info lints.

**Exit condition**

- Jeden user tap vycentruje fake viewport na aktuální pozici se správným zoomem;
  denied, double tap a stale surface kameru nepohnou.

### Wave 4 — Absence proof a interaktivní smoke

**Goal**

Prokázat jednotnost, nekolidující UI a žádnou skrytou druhou implementaci.

**Changes**

- Pokud test odhalí kolizi, upravit jedinou sdílenou pozici controlu; nepřidávat
  rendererové offsety.
- Neprovádět další feature refactor ani produkční build.

**Migration/deletion**

- Odstranit každý dočasný test hook, TODO nebo duplicitní helper vzniklý během
  implementace.

**Failure and compatibility**

- Smoke bez udělené browser location ověřuje render, semantics a error state;
  skutečné GPS se nefalšuje placeným/cloud browserem.

**Validation**

- `rg -n "Geolocator\.(checkPermission|requestPermission|getCurrentPosition)" lib/components/map` — permission a one-shot request jsou pouze v `map_location_accuracy.dart`.
- `rg -n "MapLocateControl|_recenterOnCurrentUser|MapLocateCoordinator" lib/components/map` — právě jeden UI entry point a jeden orchestration owner.
- Spustit relevantní cílené Flutter testy jednou jako závěrečný batch.
- Pokud běží lokální dev server, `agent-browser` smoke na aktivní mapě v 320px a
  desktop viewportu; jinak tuto vizuální kontrolu uvést jako neprovedenou, ne
  spouštět produkční build.

**Exit condition**

- Locate control je renderer-neutral, přístupný, bez překryvu v ověřených
  viewports; absence search nenajde bypass ani duplicate GPS policy.

## Rollout and rollback

- Implementace je additive UI behavior bez datové migrace a bez feature flagu.
- Zdroj lze po cílených testech commitnout na `main`. Push, tenant overlay,
  Netlify deploy, native build a store release jsou oddělené kroky podle
  aktuální autority další session.
- Web změna může být vydána standardním tenant overlay/Netlify workflow bez
  lokálního produkčního buildu.
- Android/iOS změna vyžaduje nový native artifact na produkčním stroji; version
  code/build number se nerecykluje.
- Rollback případného UI problému odstraní locate overlay a one-shot metodu;
  nesmí vracet nižší přesnost nebo rozbíjet existující location marker/puck.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Jedna accuracy politika | `MapLocationAccuracy` public interface | `fvm flutter test test/components/map/map_location_accuracy_test.dart --reporter compact` |
| Přístupný a deduplikovaný control | `MapLocateControl` widget interface | `fvm flutter test test/components/map/map_locate_control_test.dart --reporter compact` |
| Správná camera destination/zoom | Fake `MapViewportController` přes shared seam | cílený locate/viewport test |
| Renderer switch během await | surface identity invariant | test stale surface bez animace |
| Translation completeness | `FeatureMap` keys ve všech locale JSON | `jq` + případný existující localization parity test |
| Žádná druhá GPS/controller cesta | absence search | dva `rg` příkazy z Wave 4 |
| Nekolidující layout | widget test + volitelný agent-browser smoke | 320px a desktop viewport |

## Definition of complete

- [ ] Jeden locate/recenter control je v aktivní připravené mapě pro Legacy i
      MapLibre.
- [ ] Kliknutí získá one-shot navigation-grade polohu a centruje přes
      `MapViewportCoordinator`.
- [ ] Zoom floor/strop, double-tap guard, denied, exception a stale-surface
      chování jsou pokrytá testy.
- [ ] Neexistuje druhý persistent location stream, renderer-specific button ani
      přímý concrete-controller bypass.
- [ ] Tooltip/error text je v `MapStrings` a ve všech šesti překladech.
- [ ] Cílený standard verification batch projde; pre-existing analyzátorové info
      lints jsou odděleně zaznamenané.
- [ ] Worktree obsahuje jen zamýšlené změny a žádné placeholdery/TODO.
- [ ] Produkční build/deploy/release je buď samostatně autorizovaný a doložený,
      nebo explicitně uveden jako neprovedený.

## Residual risks

- Skutečné chování OS permission dialogu a přesnost fyzického GPS lze plně
  ověřit až na Android/iOS zařízení; unit/widget testy ověřují pouze aplikační
  kontrakt.
- Web browser může přesnou polohu omezit podle svého permission modelu; control
  musí v takovém případě skončit ve standardním unavailable/error stavu.
