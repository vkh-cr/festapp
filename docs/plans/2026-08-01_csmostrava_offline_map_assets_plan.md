# Offline vektorový podklad CSM Ostrava 2026 s veřejným R2 odkazem

Date: 2026-08-01
Status: In execution
Verification: standard

## Execution note — 2026-08-01

After public asset validation, the user explicitly changed the rollout decision:
CSM Ostrava must match JM2025 immediately, including automatic download and
`map_layer_offline.forceOfflineMap=true`. The user also explicitly authorized a
direct production database update after the authenticated Occasion Settings
session was unavailable. That narrow override was applied atomically only to
occasion 643's `map_layer_offline`; the online `map_layer` and every other
feature were preserved. Public RPC readback, an iOS cold relaunch, automatic
download, local file checksums, SQLite integrity, and rendered vector output
passed. Android cold-start/airplane-mode acceptance remains outstanding.

## Outcome

Pro `csmostrava2026` existuje verzovaný vektorový výřez Ostravy ve formátu
MBTiles, kompatibilní se současným nativním mapovým klientem Festappu. Balík,
styl a sprity jsou veřejně dostupné přes stabilní odkazy pod
`https://assets.festapp.net/csmostrava2026/v1/`; odkazy jsou ověřené stažením a
checksumem a následně zapsané do `map_layer_offline` živé occasion.

Ještě před prvním uploadem je přesný lokální MBTiles výřez interaktivně
vykreslen v prohlížeči přes lokální VersaTiles server a uživatel schválí jeho
pokrytí a vizuální obsah.

Uživatel Android/iOS aplikace může balík stáhnout při otevření mapy a po
restartu aplikace v letadlovém režimu vidí vektorový podklad, místa a trasy.

## Scope

### In scope

- Odvození geografického výřezu z živých míst a tras occasion 643.
- Stažení hotových OSM Shortbread vektorových dlaždic z oficiální distribuce
  VersaTiles a převod výřezu přímo do `.mbtiles`.
- Verzovaný styl a lokálně hostované sprite soubory kompatibilní s názvem
  zdroje `versatiles-shortbread`.
- Reprodukovatelný build skript, manifest a validace mapového balíku.
- Interaktivní browser preview lokálního MBTiles před uploadem a explicitní
  uživatelský approval gate.
- Obecný veřejný Cloudflare R2 bucket a neutrální custom domain
  `assets.festapp.net`.
- Stupňovaný zápis URL do `map_layer_offline` pro `csmostrava2026`.
- Nativní Android/iOS akceptační průchod online a v letadlovém režimu.

### Out of scope

- Offline podklad pro Flutter Web/PWA; současný MBTiles tok je nativní-only.
- Změna downloaderu, cache nebo mapového rendereru v aplikaci.
- Vlastní generování dlaždic ze syrového Geofabrik `.osm.pbf`; použijí se již
  sestavené Shortbread dlaždice.
- Změna online Mapy.cz vrstvy.
- Přesun nebo mazání historických JM2025 souborů v Supabase Storage.
- Veřejný upload map administrátorem z UI Festappu.

## Constraints

- Platí `docs/architecture/ai_context.md`; sdílený Flutter kód nesmí nově
  zavádět `dart:io`. V tomto plánu se Flutter kód nemění.
- Zdroj musí být skutečný vektorový OSM tileset, nikoli rastrové PNG z
  `tile.openstreetmap.org`.
- Festapp Web/PWA se pro preview nesmí vydávat za offline renderer. Preview
  poběží v browseru přes lokální HTTP vector-tile server; shodu se skutečným
  Flutter rendererem prokáže až nativní canary.
- Výstup musí být MBTiles s PBF dlaždicemi a zdroj stylu musí být přesně
  `versatiles-shortbread`, protože tento klíč mapuje
  `MbTilesVectorTileProvider` v `MapPage`.
- OSM attribution `© OpenStreetMap contributors` a odkaz na
  `https://www.openstreetmap.org/copyright` zůstávají viditelné.
- Publikované objekty jsou immutable. Nový obsah vždy dostane nový adresář
  `vN`; existující klíč se nepřepisuje.
- Vytvoření bucketu/domény, upload do R2 a změna živé occasion jsou produkční
  operace a vyžadují samostatnou autoritu uživatele.
- Pracovní strom obsahuje nesouvisející uživatelské změny. Realizace smí
  upravovat pouze soubory vyjmenované v tomto plánu a nesmí použít
  `git add -A`.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| JM2025 používá požadovaný mechanismus | Read-only RPC `get_occasion_by_link('jm2025')` dne 2026-08-01: `romax.mbtiles`, `en12.json`, `offlineMapLayerName=versatiles-shortbread`, `forceOfflineMap=true` | Nový balík zachová stejný kontrakt, neintrodukuje nový renderer. |
| Starý balík je skutečně vektorový | `sqlite3 romax.mbtiles`: `format=pbf`, `minzoom=0`, `maxzoom=14`, 624 tiles, velikost 18 505 728 B | Cílový balík použije PBF a zoom 0–14. |
| CSM offline vrstvu ještě nemá | Read-only RPC pro `csmostrava2026` (id 643): prázdné offline URL a `forceOfflineMap=false` | Nasazení je aditivní; rollback obnoví tento JSON. |
| Živý obsah určuje menší oblast než celé město | Read-only REST dne 2026-08-01: 189 míst, 8 tras, 1 047 volných bodů; sjednocené bounds `18.159173,49.785913,18.329743,49.863396` | Build použije bounds s rezervou, ne celý český dataset. |
| Klient vyžaduje tři hodnoty | `lib/components/map/map_page.dart:_isOfflineMapConfigured`, řádky 289–294 | Konfigurace musí atomicky obsahovat package URL, style URL a layer name. |
| Nativní klient otevírá MBTiles lokálně | `lib/components/map/map_page.dart:_initOfflineMap` a `_buildOfflineMap`, řádky 296–360 a 539–557 | Výstup musí projít SQLite/MBTiles validací před uploadem. |
| Offline mapa je vypnutá pro web | `lib/components/map/map_page.dart:didChangeDependencies`, řádky 255–258 | PWA není součástí definice hotovo. |
| MBTiles lze přesto před uploadem vykreslit v browseru | [VersaTiles CLI `serve`](https://github.com/versatiles-org/versatiles-rs) a [macOS local-server guide](https://docs.versatiles.org/guides/local_server_mac) | Lokální HTTP server zpřístupní vektorové tiles browserovému frontend rendereru bez změny Festapp Web. |
| Admin UI již umí všechna konfigurační pole | `lib/components/features/map_feature.dart:buildFormField`, řádky 238–268 | Živý JSON se mění existujícím autorizovaným entry pointem, ne přímým SQL. |
| Repo již používá Cloudflare R2 a Wrangler upload | `automation/image-migration/migrate-files.js:uploadToR2`; Wrangler 4.118.0 `r2 object put` podporuje content type a cache control | Nový mapový bucket lze spravovat stejným účtem a nástrojem. |
| Cloudflare účet je dostupný | Read-only `wrangler whoami` a `wrangler r2 bucket list` dne 2026-08-01; image pipeline používá `festapp-images`, obecný veřejný asset bucket chyběl | Produkční wave vytvoří `festapp-public`; image pipeline zůstává oddělená. |
| R2 custom domain podporuje Cloudflare Cache a R2 nemá poplatek za internetový egress | [Cloudflare public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/) a [R2 pricing](https://developers.cloudflare.com/r2/pricing/) | R2 je kanonický hosting; Supabase není paralelní produkční cesta. |
| VersaTiles umí regionální výřez vzdáleného tilesetu a zápis MBTiles | [VersaTiles download guide](https://docs.versatiles.org/guides/download_tiles) a [CLI README](https://github.com/versatiles-org/versatiles-rs) | Není nutné stáhnout 66GB planetu ani generovat tiles ze syrového OSM. |
| Zdroj je OSM Shortbread a vyžaduje OSM attribution | [VersaTiles tilesets](https://docs.versatiles.org/basics/tilesets) | Styl zůstane kompatibilní s JM2025 a uvede zákonnou atribuci. |

### Reprezentativní tok

`download.versatiles.org/osm.versatiles` → `versatiles convert` s bboxem a
zoomem → lokální `ostrava-z0-14.mbtiles` → SQLite/probe/checksum validace →
verzovaný upload do `festapp-public` → veřejné URL na `assets.festapp.net` →
existující administrační formulář occasion → `MapPage` stáhne soubory do
application documents → `MbTilesVectorTileProvider` vykreslí dlaždice.

## Target architecture and invariants

### Canonical owner and contract

- **Zdroj dlaždic:** oficiální
  `https://download.versatiles.org/osm.versatiles` (OSM Shortbread).
- **Build owner:** `automation/offline-map/build.sh` a
  `automation/offline-map/README.md`.
- **Build input:** occasion slug/id, explicitní bbox, zoom 0–14, URL zdroje a
  verze artefaktu.
- **Build output:** MBTiles, style JSON, 1x/2x sprite JSON+PNG a manifest s
  bboxem, verzemi nástrojů, velikostmi a SHA-256.
- **Publikační owner:** obecný veřejný R2 bucket `festapp-public`, veřejně
  dostupný přes `assets.festapp.net`; mapy jsou pouze jeden verzovaný prefix.
- **Runtime contract:** `map_layer_offline.offlineMapPackageURL`,
  `offlineMapStyleURL`, `offlineMapLayerName` a `forceOfflineMap` v map feature
  occasion 643.

### Invariants

1. MBTiles `PRAGMA integrity_check` vrací `ok`, metadata mají `format=pbf`,
   `minzoom=0`, `maxzoom=14` a bounds obsahují všechna živá místa i body tras.
2. Style JSON obsahuje právě zdroj `versatiles-shortbread`; všechny vrstvy
   odkazují pouze na existující Shortbread source layers.
3. Sprite URL ve stylu míří do stejného immutable adresáře na
   `assets.festapp.net`; cold-start offline test po předchozím stažení nevyžaduje
   externí sprite host.
4. Každý datový asset má SHA-256 v manifestu; checksum samotného
   `manifest.json` se kvůli nemožnosti sebereferenčního hashe zaznamená do
   rollout záznamu. Všech sedm publikovaných objektů má správný `Content-Type`
   a `Cache-Control: public, max-age=31536000, immutable`.
5. Produkční URL se před zapsáním do occasion ověří přes HEAD i úplný GET;
   stažený MBTiles musí mít shodný SHA-256.
6. Nová verze nikdy nepřepisuje `v1`; publikuje se pod `v2` a teprve potom se
   přepne konfigurace.
7. Online vrstva a historická JM2025 konfigurace zůstávají beze změny.
8. Wave 2 nesmí začít, dokud uživatel v interaktivním preview nepotvrdí, že
   výřez pokrývá požadovanou Ostravu a vizuální obsah je použitelný.

### Entry points and forbidden bypasses

- Build probíhá pouze přes verzovaný skript a vytvoří manifest; ručně stažený
  anonymní `.mbtiles` bez manifestu se nesmí publikovat.
- Upload probíhá přes Wrangler do `festapp-public`; image upload endpoint
  `img.festapp.net/upload` se pro mapy nepoužívá.
- Živá occasion se mění přes existující autorizovaný Occasion Settings /
  `update_occasion_203`; přímý SQL update je zakázaný bypass.
- `r2.dev` může sloužit pouze k dočasnému ověření objektu, nikdy jako URL v
  produkční konfiguraci.
- Supabase Storage není paralelní fallback. Pokud nelze zprovoznit R2 custom
  domain, realizace se zastaví a tento plán se aktualizuje před změnou cíle.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** Kanonický hosting je obecný veřejný Cloudflare R2 bucket
  `festapp-public` s `assets.festapp.net`. Mapové artefakty používají vlastní
  verzovaný prefix; image Worker a privátní data zůstávají mimo tento bucket.
- **D2:** Zdroj je předgenerovaný OSM Shortbread tileset VersaTiles. Geofabrik
  PBF + Planetiler je mimo scope, protože by pouze znovu generoval stejný
  kontrakt s výrazně vyšší režií.
- **D3:** Počáteční bbox je `18.13,49.76,18.36,49.89`. Obsahuje aktuální live
  bounds s přibližně dvoukilometrovou rezervou; `--bbox-border 3` přidá ještě
  okrajové tiles.
- **D4:** Zoom je 0–14, stejně jako JM2025 a oficiální OSM Shortbread balík.
  Zoom 15–18 v aplikaci používá overzoom.
- **D5:** První produkční konfigurace bude canary s `forceOfflineMap=false`.
  Po úspěšném Android+iOS airplane-mode testu se samostatným autorizovaným
  zásahem přepne na `true`.
- **D6:** Do repozitáře se necommitne MBTiles ani PNG build output. Commitne se
  skript, README, manifest bez lokálních cest a ignore pravidlo pro `out/`.
- **D7:** Pre-upload preview používá lokální `versatiles serve` a browserový
  VersaTiles/MapLibre frontend. Není to Festapp Web offline režim ani náhrada
  následného Android/iOS canary testu.
- **D8:** Textové vrstvy zděděné z JM2025 použijí výraz
  `coalesce(name, name_en)` namísto samotného `{name_en}`. Ostravská Shortbread
  data obsahují u většiny ulic a míst lokální `name`, ale ne `name_en`;
  původní styl proto nevykreslil názvy. Festapp má `vector_tile_renderer 5.2.1`,
  který podporuje `coalesce` od upstream merged PR #16, takže není potřeba
  měnit Flutter kód ani dependency.

### Assumptions

- **A1:** Všechna místa a trasy potřebná pro akci jsou nebo budou v occasion
  643; dopad, pokud ne: bbox může vynechat budoucí vzdálené místo; resolve by:
  těsně před buildem znovu spočítat bounds a zastavit se, pokud neleží uvnitř
  D3 s minimálně 1 km rezervou.
- **A2:** Stávající JM2025 `en12.json` je renderer-kompatibilní jako výchozí
  styl, ale jeho samotné `{name_en}` nevykreslí většinu ostravských názvů.
  Resolve: zachovat vzhled a vrstvy, přepsat sprite/source URL a textová pole
  `{name_en}` mechanicky změnit na `coalesce(name, name_en)`; ověřit preview a
  později v současné nativní aplikaci bez redesignu.
- **A3:** Doména `festapp.net` je ve stejném Cloudflare účtu a dovolí připojit
  R2 custom domain; dopad, pokud ne: produkční URL nelze vytvořit; resolve by:
  read-only kontrola zóny před vytvořením bucketu.
- **A4:** Cílová velikost balíku bude přiměřená mobilnímu stažení (očekávání pod
  30 MB); dopad, pokud ne: uživatelsky drahý download; resolve by: gate 30 MB.
  Nad limitem se zastavit a před změnou bboxu/zoomu vyžádat rozhodnutí.

### Blockers

- **B1:** Samostatná autorita k vytvoření `festapp-public`, připojení
  `assets.festapp.net`, uploadu objektů a nastavení cache.
- **B2:** Samostatná autorita ke změně živé occasion 643 a pozdějšímu přepnutí
  `forceOfflineMap=true`.

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| Lokální `automation/offline-map/out/*` | Velké build artefakty | Necommitovat; adresář ignorovat, lokální odstranění je volitelné a není součástí produkčního rollbacku | `git status --short` neukáže MBTiles/PNG. |
| Supabase `public-files/maps/romax.mbtiles` a `en12.json` | JM2025 produkční hranice | Záměrně ponechat beze změny | JM2025 RPC stále vrací původní URL. |
| `img.festapp.net` / `festapp-images` | Kanonický image hosting | Pro mapy nepoužívat, jinak ponechat | R2 key list neobsahuje `csmostrava2026/v1/*.mbtiles` v image bucketu. |
| Prázdný CSM `map_layer_offline` | Aktuální bezpečný rollback stav | Nahradit až po ověření veřejných URL; snapshot uložit do rollout záznamu | Read-only RPC po rollout vrací kompletní nový kontrakt. |
| Canary `forceOfflineMap=false` | Bezpečné pilotní nastavení | Po Android+iOS akceptaci změnit na `true` | RPC vrací `true` a čistá instalace automaticky nabídne/provede download dle současného chování. |

## Implementation waves

### Wave 1 — Reprodukovatelný a ohraničený build

**Goal**

Jeden příkaz vytvoří auditovatelný ostravský MBTiles balík a doprovodné assety,
aniž by se velké soubory dostaly do gitu.

**Changes**

- `automation/offline-map/build.sh` — přidat fail-fast skript s parametry
  `occasion`, `version`, `bbox`, `min_zoom`, `max_zoom`; ověřit dostupnost
  `versatiles`, `sqlite3`, `jq` a `shasum`; zaznamenat jejich verze.
- Skript spustí ekvivalent:

  ```bash
  versatiles convert \
    --compress gzip \
    --bbox-border 3 \
    --bbox "18.13,49.76,18.36,49.89" \
    --min-zoom 0 \
    --max-zoom 14 \
    https://download.versatiles.org/osm.versatiles \
    automation/offline-map/out/csmostrava2026/v1/ostrava-z0-14.mbtiles
  ```

- `automation/offline-map/style/` — uložit renderer-kompatibilní kopii
  JM2025 stylu a 1x/2x sprite JSON/PNG; ve výsledném stylu přepsat sprite base
  URL na `https://assets.festapp.net/csmostrava2026/v1/sprites/sprites`, zachovat
  source key `versatiles-shortbread` a pro původní `{name_en}` textová pole
  použít `coalesce(name, name_en)`.
- `automation/offline-map/README.md` — zdroj, licence, build, kontrola bounds,
  lokální preview, publikace, aktualizace `vN` a rollback.
- `.gitignore` — ignorovat pouze `automation/offline-map/out/`.
- Skript vytvoří `manifest.json` s bboxem, source URL/ETag/Last-Modified,
  tool versions, tile count, metadata, byte sizes a SHA-256 všech šesti
  datových assetů. SHA-256 samotného manifestu vypíše pro rollout záznam;
  manifest jej nemůže obsahovat, aniž by změnil vlastní obsah.
- Skript nebo README připraví lokální preview frontend archive v ignorovaném
  `out/` a spustí přesný vytvořený soubor pod stabilním source id:

  ```bash
  versatiles serve \
    -i 127.0.0.1 \
    -s automation/offline-map/out/frontend.br.tar.gz \
    "[versatiles-shortbread]automation/offline-map/out/csmostrava2026/v1/ostrava-z0-14.mbtiles"
  ```

  Interaktivní mapa bude dostupná na `http://localhost:8080`. Pokud frontend
  používá svůj vestavěný kompatibilní Shortbread styl, preview hodnotí obsah a
  pokrytí; produkční styl se samostatně validuje přes JSON/sprite kontroly a
  později přes nativní canary.

**Migration/deletion**

- Žádná data ani živá konfigurace se nemění.
- Build output zůstává mimo git; commitnutelné jsou pouze nástroje, stylové
  zdroje a manifest bez velkých binárních assetů.

**Failure and compatibility**

- Pokud live bounds přesahují bbox nebo mají rezervu menší než 1 km, skript
  skončí před downloadem.
- Původní 30 MiB gate zastavil první build na 41 041 920 B (39,14 MiB).
  Uživatel dne 2026-08-01 výslovně upřednostnil vizuální obsah před tímto
  limitem a přijal velikost přes 30 MiB. Pro `v1` proto platí ochranný strop
  45 MiB; jeho překročení znovu vyžaduje rozhodnutí.
- Source ETag/Last-Modified se ukládají kvůli reprodukovatelnosti; byte-identický
  rebuild není garantován, pokud upstream dataset mezitím změní data.

**Validation**

- `versatiles probe automation/offline-map/out/csmostrava2026/v1/ostrava-z0-14.mbtiles`
  — potvrdí vector tiles, zoomy a bounds.
- `sqlite3 automation/offline-map/out/csmostrava2026/v1/ostrava-z0-14.mbtiles 'pragma integrity_check; select name,value from metadata order by name;'`
  — potvrdí platný MBTiles kontrakt.
- Skriptová kontrola, že všech 189 míst a 1 047 aktuálních volných bodů leží
  uvnitř manifest bounds.
- `git status --short` — potvrdí absenci velkých artefaktů mezi untracked files.
- Otevřít `http://localhost:8080`, projít centrum i všechny čtyři okraje bboxu,
  ověřit názvy, komunikace a prázdná místa mimo pokrytí; uložit screenshot
  celého výřezu a detailu centra do rollout záznamu, nikoli do produkčního
  asset setu.
- Uživatel explicitně schválí preview nebo vrátí Wave 1 k úpravě bboxu/stylu.

**Exit condition**

Lokální `v1` sada má validní manifest, SHA-256, velikost ≤45 MiB, PBF zoom 0–14,
obsahuje veškerý aktuální živý obsah s rezervou a její interaktivní browser
preview uživatel výslovně schválil.

### Wave 2 — Samostatná veřejná R2 distribuční hranice

**Goal**

Assety jsou veřejně stažitelné pod stabilní custom domain bez závislosti na
Supabase nebo image Workeru. Tato wave začíná až po zaznamenaném approval gate
z Wave 1.

**Changes**

- Po samostatné autorizaci vytvořit bucket:
  `npx wrangler r2 bucket create festapp-public`.
- V Cloudflare připojit bucketu custom domain `assets.festapp.net`; nezapínat
  `r2.dev` jako produkční adresu.
- Nastavit Cache Rule pro `assets.festapp.net/*` na Cache Everything; MBTiles
  nemusí patřit mezi defaultně cachované přípony.
- Nahrát immutable klíče přes `wrangler r2 object put --remote`:
  - `csmostrava2026/v1/ostrava-z0-14.mbtiles`, content type
    `application/vnd.sqlite3`;
  - `csmostrava2026/v1/style.json`, `application/json`;
  - `csmostrava2026/v1/sprites/sprites.json` a `sprites@2x.json`,
    `application/json`;
  - `csmostrava2026/v1/sprites/sprites.png` a `sprites@2x.png`, `image/png`;
  - `csmostrava2026/v1/manifest.json`, `application/json`.
- Každému objektu nastavit
  `--cache-control 'public, max-age=31536000, immutable'`.

**Migration/deletion**

- Nic se nemaže ani nepřepisuje. Pokud upload stejného klíče již existuje,
  porovnat remote metadata/checksum; při rozdílu použít nové `vN`, nikoli
  `--force` na publikovaný klíč.

**Failure and compatibility**

- DNS/custom-domain chyba zastaví rollout před změnou occasion.
- Upload je po objektech; částečná sada není problém, protože konfigurace na ni
  zatím neukazuje.
- Bucket je veřejný záměrně; neobsahuje osobní ani neveřejná data.

**Validation**

- HEAD každého URL: 200, očekávaný content type, content length, ETag a
  immutable cache control.
- Úplný GET MBTiles do nového dočasného souboru, SHA-256 shodný s manifestem a
  `pragma integrity_check=ok`.
- GET stylu a všech čtyř sprite variant; `jq` ověří source key a sprite base URL.
- Druhý GET ověří `CF-Cache-Status` po nastavení cache rule; absence cache hitu
  neblokuje funkčnost, ale musí být zdokumentovaná jako provozní odchylka.

**Exit condition**

Všech sedm verzovaných URL je veřejně dostupných, byte-validních a žádná živá
occasion je zatím nepoužívá.

### Wave 3 — Canary konfigurace bez vynuceného přepnutí

**Goal**

CSM aplikace může nový balík explicitně stáhnout a přepnout, ale běžní
uživatelé nejsou při pilotu nuceni do downloadu.

**Changes**

- Read-only RPC uloží předzměnový map feature JSON do rollout záznamu spolu s
  timestampem a manifest SHA-256.
- Po samostatné autorizaci otevřít Occasion Settings pro occasion 643 a změnit
  pouze `map_layer_offline`:
  - `offlineMapPackageURL=https://assets.festapp.net/csmostrava2026/v1/ostrava-z0-14.mbtiles`
  - `offlineMapStyleURL=https://assets.festapp.net/csmostrava2026/v1/style.json`
  - `offlineMapLayerName=versatiles-shortbread`
  - `forceOfflineMap=false`
  - attribution text/link pro OpenStreetMap.
- Uložit existujícím `update_occasion_203` tokem.

**Migration/deletion**

- Prázdný offline kontrakt je nahrazen kompletním canary kontraktem. Online
  `map_layer` se nesmí změnit.

**Failure and compatibility**

- Všechna tři povinná pole se uloží v jednom formulářovém save; částečná
  konfigurace je nepřípustná.
- Pokud post-save RPC neodpovídá přesně zamýšlenému JSON, ihned obnovit snapshot.

**Validation**

- Read-only `get_occasion_by_link('csmostrava2026')` — přesná kontrola tří URL,
  layer name, attribution a `forceOfflineMap=false`; online map JSON beze změny.
- Na jednom nativním zařízení spustit mapu online, ručně přepnout offline mapu,
  sledovat kompletní download a vykreslení.

**Exit condition**

Canary zařízení vykreslí R2 MBTiles a produkční RPC ukazuje kompletní canary
konfiguraci bez změny online vrstvy.

### Wave 4 — Nativní offline akceptace a vynucené používání

**Goal**

Offline podklad je pro CSM 2026 prokazatelně použitelný na obou cílových
nativních platformách a produkční konfigurace zajistí jeho stažení.

**Changes**

- Android a iOS: čistá instalace/data, online otevření mapy, dokončení downloadu,
  zavření aplikace, letadlový režim, cold start a opětovné otevření mapy.
- V offline režimu vizuálně ověřit severní/jižní/východní/západní hraniční
  místo, běžné centrum, názvy/komunikace, vlastní markers a alespoň jednu trasu.
- Po obou úspěšných průchodech a samostatné autorizaci změnit pouze
  `forceOfflineMap` na `true`.

**Migration/deletion**

- Canary stav `false` zanikne; nevzniká druhá konfigurace ani feature flag.

**Failure and compatibility**

- Selhání jedné platformy blokuje `forceOfflineMap=true`; canary může zůstat
  zapnutý pro diagnostiku nebo se obnoví snapshot.
- Vzhledem k out-of-scope downloaderu se eviduje i chování při přerušeném
  downloadu, ale jeho oprava vyžaduje nový schválený plán.

**Validation**

- Dva podepsané/časované acceptance záznamy Android+iOS s verzí aplikace,
  manifest SHA-256 a výsledkem airplane-mode cold startu.
- Finální read-only RPC: `forceOfflineMap=true` a přesné `v1` URL.
- R2 access observation potvrzuje úspěšné 200 odpovědi pro MBTiles/style/sprites.

**Exit condition**

Android i iOS projdou cold-start airplane-mode scénářem a živá occasion 643
odkazuje pouze na kompletní immutable `v1` asset set s
`forceOfflineMap=true`.

## Rollout and rollback

1. Lokální build a validace jsou neprodukční a mohou proběhnout bez provozní
   změny.
2. Vytvoření bucketu/domény, cache rule a upload vyžadují samostatnou autoritu,
   ale stále nic nemění uživatelům.
3. Nejprve se zapíše `forceOfflineMap=false` a provede pilot.
4. `true` se nastaví pouze po obou nativních akceptacích.
5. Při problému se obnoví celý předzměnový `map_layer_offline` snapshot přes
   Occasion Settings. Online vrstva zůstává dostupná.
6. R2 objekty se během rollbacku nemažou: jsou immutable, mohou být v cache a
   jejich ponechání umožní diagnostiku. Případné pozdější odstranění je zvlášť
   schvalovaná destruktivní operace po retenční době.
7. Opravená mapa se publikuje jako `v2`; rollback nikdy nepřepisuje `v1`.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Výřez obsahuje všechna místa a trasy | Live REST + manifest bounds | Skriptová min/max a point-in-bounds kontrola před buildem |
| MBTiles je čitelný PBF balík | SQLite metadata a VersaTiles probe | `pragma integrity_check`, metadata query, `versatiles probe` |
| Asset nebyl po uploadu poškozen | Manifest SHA-256 vs. nový full GET | `shasum -a 256` obou souborů |
| Styl používá lokální provider key | Style JSON | `jq` kontrola `sources["versatiles-shortbread"]` a sprite URL |
| Výřez lze posoudit před uploadem | Lokální VersaTiles HTTP server | Interaktivní browser preview + dva screenshoty + explicitní user approval |
| Veřejné URL jsou stabilní | R2 custom domain | HEAD/GET každého immutable URL |
| Occasion update je atomický a omezený | Veřejný RPC výstup před/po | JSON diff pouze `map_layer_offline` |
| Offline cold start opravdu funguje | Nativní klient a filesystem cache | Android+iOS airplane-mode scénář po ukončení aplikace |
| PWA není omylem deklarována jako pokrytá | Platform guard | Potvrdit `PlatformHelper.isWeb` guard beze změny |

Repozitářové testy Flutter/SQL/JS nejsou pro asset-only změnu primární důkaz.
Pokud Wave 1 upraví pouze automation/docs/style assety, nejlevnější smysluplná
validace je spuštění build skriptu a jeho integračních kontrol. Pokud realizace
navzdory plánu změní Dart nebo Worker kód, plán musí být nejprve aktualizován a
doplněny příslušné targeted testy; nelze tuto změnu schovat do asset rollout.

## Definition of complete

- [ ] Build je reprodukovatelný z oficiálního OSM Shortbread zdroje jedním
      zdokumentovaným příkazem.
- [ ] Manifest dokládá bbox, zoom, tool/source verze, velikosti a SHA-256.
- [ ] MBTiles je PBF, SQLite-validní, ≤45 MiB a obsahuje všechna aktuální místa
      a trasy s rezervou.
- [ ] Lokální interaktivní preview bylo před uploadem zkontrolováno a výslovně
      schváleno uživatelem.
- [ ] `festapp-public` a `assets.festapp.net` jsou jediná produkční hranice pro nový
      mapový asset set.
- [ ] Všechny `v1` URL vrací správná data, content types a immutable cache
      metadata; remote MBTiles checksum souhlasí.
- [ ] Živá occasion obsahuje kompletní R2 kontrakt a nezměněnou online vrstvu.
- [ ] Android i iOS prošly cold-start testem v letadlovém režimu.
- [ ] `forceOfflineMap=true` bylo nastaveno až po akceptaci.
- [ ] JM2025 assety a image hosting zůstaly mimo změnu.
- [ ] V repozitáři není MBTiles ani jiný velký build output.
- [ ] Neexistuje paralelní Supabase URL, `r2.dev` produkční URL ani upload přes
      image endpoint.

## Residual risks

- Současný downloader drží celý download v paměti, neověřuje HTTP status ani
  checksum a cache stylu/spritů má známé slabiny. Tento plán je podle výslovně
  zúženého zadání nemění; standardní akceptace proto musí zahrnovat cold start a
  přerušené stažení se pouze eviduje. Pokud selže, `forceOfflineMap=true` se
  neaktivuje a vznikne samostatný downloader plán.
- Offline MBTiles tok nepokrývá PWA/web.
- Browser preview používá MapLibre/VersaTiles renderer, ne Flutter
  `vector_map_tiles`; může proto odhalit obsahové a stylové problémy, ale
  pixelovou/runtime kompatibilitu potvrzuje až nativní canary.
- Budoucí vzdálené místo mimo bbox vyžaduje nový verzovaný balík a přepnutí URL.
