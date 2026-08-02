# Kanonický polling sync, offline revize a distribuční cache

Date: 2026-08-02

Status: Ready for execution

Verification: release pro jednu koordinovanou produkční migraci

## Outcome

Festapp po startu okamžitě zobrazí poslední lokálně potvrzená data. Je-li
aplikace v popředí, jediný koordinátor provede okamžitý sync handshake a potom
jej opakuje přibližně jednou za 60 sekund. Handshake pouze porovná revize. Když
se změnila veřejná komponenta, klient stáhne její novou immutable verzi z CDN;
malý volatilní stav a změněné soukromé komponenty dostane autorizovaně z RPC.

Nebude použit Supabase Realtime, Broadcast ani paralelní invalidační mechanismus.
Nebude existovat ani entity-level delta journal, tombstones nebo skládání
snapshotu s delta ocasem. Jedinou synchronizační jednotkou je úplná verzovaná
komponenta. Smazání entity se projeví její nepřítomností v nové komponentě.

Produkční přechod pro `csmostrava2026` proběhne jako jeden release: aditivní
backend, publisher, kompletní klient, audit a jeden capability cutover
`client_sync_v1`. Starší podporované aplikace dál používají nezměněná legacy
RPC na tenké compatibility hranici. Nový klient si při bootstrapu zvolí celý
legacy, nebo celý v1 režim; nikdy je nemíchá v jednom aktivním kontextu.

Admin získá online-only tab **Změny**. Od cutoveru v něm oprávněný správce uvidí
kdo, kdy, odkud a jak změnil sync-relevantní data, bezpečný diff a revize, do
kterých se změna propsala. Audit není offline cache ani technická sync fronta.

„Aktuální offline data“ znamenají poslední atomicky potvrzenou serverovou verzi
se zobrazeným časem. Zařízení bez sítě nemůže znát pozdější změny a UI to nesmí
prezentovat jako živý stav.

## Rozhodnutí, která návrh zjednodušují

1. **Polling je jediný mechanismus freshness.** Žádný Realtime fallback ani
   druhý timer v jednotlivých stránkách.
2. **Komponenta se vždy nahrazuje celá.** Žádné delty, tombstones, cursory,
   journal retention nebo konfliktní merge pravidla.
3. **Jeden klientský vlastník.** `ClientSyncService` vlastní lifecycle, síť,
   single-flight, lokální commit a stav pro UI.
4. **Jeden serverový handshake.** `get_client_sync_v1` je read-only, levný a při
   nezměněném stavu nic nezapisuje.
5. **Veřejné a soukromé doručení jsou oddělené.** Public data mohou do CDN;
   private data nikdy nedostanou veřejnou artifact URL.
6. **Snapshot a audit jsou dvě různé věci.** Snapshot říká aktuální stav; audit
   vysvětluje historii změn a má samostatnou retention i oprávnění.
7. **Compatibility je jen na hranici starých binárek.** Uvnitř nové aplikace po
   cutoveru nezůstane žádný alternativní loader ani skrytý fallback.

## Scope

### In scope

- Veřejná data akce: config, program, místa a jejich typy, trasy, informace,
  novinky, přednášející, veřejné skupiny a veřejný stav úklidu.
- Proměnlivý veřejný stav: počty účastníků/uložení, kapacity a malé odvozené
  hodnoty, které nemají nutit rebuild velkého programu.
- Soukromé komponenty: moje přihlášení a program, přečtené novinky, profil,
  skupina, ubytování/inventory, moje aktivity a stav feedbacku.
- Scoped Sembast cache s atomickým manifest pointerem a oddělenými public/private
  namespaces.
- Monotónní revize, immutable public artifacts, publisher a CDN.
- Centrální foreground polling, reconnect/resume sync, single-flight a backoff.
- Compatibility pro vydané klienty, kill switch a pozdější odstranění legacy.
- Append-only audit sync-relevantních změn a `Admin → Změny`.
- Release monitoring, load test, rollback a absence proofs.

### Out of scope

- Realtime, Broadcast, websocket invalidace a background polling.
- Entity-level delta API, tombstones a dlouhodobé klientské cursory.
- Offline fronta mutací. Kapacitní/konfliktní zápisy zůstávají online-only.
- Offline admin, velké admin bundle a univerzální audit všech tabulek Festappu.
- Automatické stažení PMTiles/MBTiles; `OfflineMapBundleManager` zůstává
  samostatný instalační kontrakt.
- Nahrazení Supabase jako zdroje pravdy nebo cachování autorizace v CDN.

## Current-state evidence

| Zjištění | Evidence | Dopad |
|---|---|---|
| Offline JSON je v Sembastu, ale klíče nejsou scoped podle organizace/akce/uživatele. | `lib/services/storage_helper.dart`; `lib/data_services/offline_data_service.dart` | Nové úložiště musí používat scoped generace a identity epoch. |
| `refreshOfflineData()` sériově stahuje mnoho datasetů a nastaví jediný timestamp. | `lib/data_services/synchro_service.dart` | Nelze poznat částečné selhání; sync musí mít per-component revize a atomický commit. |
| Program ručně kombinuje local, `get_events(false)` a `get_events(true)`. | `lib/components/schedule/schedule_page.dart` | Nový klient musí mít jeden stavový tok bez page-level loaderů. |
| `EventModel` míchá public katalog, počty i user flags. | `lib/components/schedule/event_model.dart` | Public artifact potřebuje vlastní DTO bez soukromých polí. |
| Logout nemaže events s uživatelskými příznaky. | `lib/data_services/offline_data_service.dart` | Public a private store musí být fyzicky oddělené. |
| Login spouští sync programu a celý offline refresh souběžně. | `lib/data_services/auth_service.dart`; `lib/data_services/synchro_service.dart` | Jeden koordinátor musí deduplikovat lifecycle požadavky. |
| Search je derived index nad několika offline datasety. | `lib/components/search/db_search.dart` | Index se váže na aktivní component manifest a rebuildne po jeho commitu. |
| Mapa už používá immutable version, SHA-256, staging a atomický pointer. | `lib/components/map/offline_map_bundle_manager.dart` | Stejný ověřený vzor lze použít pro JSON komponenty. |
| App config už posílá platform/version, ale klient a SQL mají drift `v217`/`v218`. | `lib/data_services/synchro_service.dart`; `database/functions/others/get_app_config.sql`; `web_client/src/services/rights_service.js` | Capability handshake vyžaduje předem ověřenou compatibility matici. |
| Neexistuje jednotný audit programu/mapy/obsahu/skupin/ubytování. | `eshop.orders_history`; `public.activity_history`; `public.cleaning_reports`; technické logy | Nový audit musí být vlastní modul; současné doménové historie se neruší. |

## Cílová architektura

```text
doménový write
  └─ stejná DB transakce
       ├─ změní source data
       ├─ zvýší revision dotčených komponent
       └─ zapíše redigovaný audit action/items/deliveries

publisher (interní periodický worker)
  └─ najde source_revision > published_revision
       ├─ sestaví úplnou public komponentu
       ├─ ověří schema + hash
       ├─ uloží immutable artifact do CDN
       └─ monotónně posune publication pointer

ClientSyncService (jediný foreground poller)
  └─ get_client_sync_v1(known manifest)
       ├─ unchanged → nic
       ├─ nové public revize → CDN download
       ├─ nové volatile/private revize → RPC replacement payload
       └─ atomický commit nového lokálního manifestu
```

Publisher poll není druhá klientská invalidace. Je to interní scheduler odvozené
cache a jediný způsob tvorby public artifacts. Klientská freshness má právě jeden
mechanismus: revision handshake.

### Kanonický klientský modul

Novým vlastníkem bude `lib/data_services/client_sync/ClientSyncService`:

```dart
Stream<ClientSyncState> open(SyncContext context);
Future<void> refresh({SyncReason reason});
Future<MutationResult> execute(ClientMutation mutation);
Future<void> closeContext();
```

Interní hranice:

- `SyncHandshakeRemote`: jediné RPC `get_client_sync_v1`.
- `PublicComponentRemote`: stáhne immutable artifact a ověří hash/schema.
- `ClientSyncStore`: staging komponent, component pointers, atomický manifest
  pointer, schema migrace a identity epoch.
- `SyncPollingPolicy`: jediný timer, jitter, single-flight a backoff.
- `SyncProjection`: skládá public component + volatile + private overlay do
  read modelu pro UI; nikdy je nezapisuje zpět jako smíšený blob.

UI nezná URL, Sembast klíče, RPC verze ani polling timer. Tab Program, Mapa,
Informace, Profil a Search pouze sledují `ClientSyncState`/repositories.

### Polling kontrakt

- Po cold startu, změně kontextu, login/logout, návratu do foregroundu a
  obnovení connectivity se požádá o okamžitý handshake.
- V popředí běží právě jeden interval: základ 60 sekund, s jitterem 0–10 sekund
  pro rozložení klientů. Interval není implementován v žádné stránce.
- V backgroundu se timer zastaví. Neexistuje background wake-up ani websocket.
- Souběžné důvody se sloučí do jednoho in-flight requestu. Pozdní odpověď ze
  starého user/occasion epoch se zahodí před zápisem.
- Po neúspěchu se zachová poslední zdravá generace; retry je 60, 120, 240 a
  maximálně 300 sekund. Úspěch resetuje backoff. Reconnect/resume smí vyvolat
  jeden okamžitý pokus, ale stále respektuje single-flight.
- Úspěšná vlastní mutace vrací autoritativní změněnou private/volatile komponentu
  nebo její novou revizi a aplikuje se okamžitě. UI nečeká na další poll ani
  nespouští full refresh.
- Ruční Refresh volá stejnou metodu `refresh`; nevytváří druhou síťovou cestu.
- Čas a scheduler jsou injectované, aby testy nepoužívaly reálné čekání.

Výchozí freshness SLO: vlastní potvrzená mutace okamžitě; cizí public/private
změna na aktivním online klientovi do 75 sekund p95 (publisher do 10 s, polling
včetně jitteru do 70 s, překryv se počítá). SLO se před cutoverem ověří load
testem; interval se nesmí zkrátit bez doložení DB kapacity.

### Serverový handshake

`get_client_sync_v1(p_context, p_known_manifest)` je `STABLE`, read-only a
autorizovaný. Čte jen několik indexovaných revision/publication řádků a
relevantní private revision vector. Nevkládá heartbeat, telemetry ani audit.

Odpověď obsahuje:

- protocol/schema verzi a server time;
- pro každou public komponentu pouze published revision, URL, hash a velikost,
  pokud se liší od klientského manifestu;
- `publicationPending`, pokud source revision předběhla poslední ověřený
  artifact; klient ponechá starou komponentu a zkusí příští poll;
- úplný replacement payload pouze pro změněné malé `volatile_public` a
  jednotlivé private komponenty;
- minimální podporovanou klientskou/schema verzi a explicitní error stav.

Příklad tvaru, který Wave 1 uzavře golden testem:

```json
{
  "protocol": 1,
  "serverTime": "2026-08-02T14:31:00Z",
  "public": {
    "program_catalog": {
      "revision": 93,
      "url": ".../program_catalog/93-<hash>.json.br",
      "sha256": "...",
      "bytes": 184220
    }
  },
  "pending": ["content_catalog"],
  "volatile": {"revision": 9812, "replace": {}},
  "private": {
    "program": {"revision": 47, "replace": {}},
    "groupProfile": {"revision": 12, "replace": {}}
  }
}
```

Nezměněné komponenty se v payloadu neopakují. Breaking změna vyžaduje protocol
v2 vedle v1; v1 pole jsou během compatibility additive-only.

### Komponenty a vlastnictví

| Komponenta | Obsah | Doručení | Nahrazení |
|---|---|---|---|
| `occasion_config` | features, timezone, public settings, map manifest ref | CDN | úplné |
| `program_catalog` | event core+description, place refs, groups/roles, cancellation; bez counts/user flags | CDN | úplné |
| `map_catalog` | places, place types, paths, deduplikované org icons | CDN | úplné |
| `content_catalog` | information, news, speakers, topics a vazby | CDN | úplné |
| `unit_catalog` | public/promoted occasions pro unit context | CDN | úplné |
| `volatile_public` | participant/saved counts, capacity, public cleaning state | RPC | úplné, malé |
| `private_program` | sign-ins a saved IDs | auth RPC | úplné |
| `private_profile` | profil, skupina a členové | auth RPC | úplné |
| `private_inventory` | vlastní ubytování/inventory | auth RPC | úplné |
| `private_activity` | moje activities a feedback state | auth RPC | úplné |
| `private_news` | read markers | auth RPC | úplné |
| `anonymous_program` | lokální saved IDs před loginem | device-only | explicitní jednorázový import |
| `search_index` | derived index nad aktivními public komponentami | local-only | rebuild |

Public eligibility je allowlist podle visibility a práv. Private/hidden occasion
nikdy nedostane public URL. Změna public → hidden zastaví publication, odstraní
pointer a spustí explicitní artifact delete + CDN purge runbook. Již staženou
kopii na trvale offline zařízení nelze fyzicky odvolat; proto public artifact
nesmí obsahovat nic, co není skutečně veřejné.

### Revize a publisher

- `client_sync_scopes` drží právě jednu `source_revision` pro component/scope.
- Sync-relevantní write zvýší každou dotčenou revision nejvýše jednou za SQL
  statement/bulk akci a ve stejné transakci vytvoří audit vazbu.
- Legacy direct writers jsou po dobu compatibility pokryty mechanickým capture
  triggerem. Trigger neurčuje doménová práva ani nevolá síť.
- `client_sync_publications` drží poslední ověřený immutable artifact a
  monotónní `published_revision`.
- Publisher polluje pouze dirty scopes (`source > published`), claimuje je přes
  `FOR UPDATE SKIP LOCKED` a koaleskuje burst změn do nejnovější revize.
- Source RPC sestaví komponentu v jednom konzistentním PostgreSQL statement
  snapshotu. Artifact obsahuje scope, revision, schema, generatedAt a hash.
- Starší nebo souběžně dokončený worker nesmí přepsat novější pointer; pointer
  update je podmíněný a monotónní.
- Selhání uploadu/validace pointer neposune. Klient dál používá poslední
  publikovanou komponentu a handshake hlásí pending.
- Periodická reconciliation porovná source/published revize a opraví ztracený
  dirty claim. Neprovádí full rebuild zdravých komponent.
- Retention public artifacts je počet ověřených verzí + minimální časové okno,
  ne sync cursor. Poslední published a verze potřebná pro rollback se nemažou.

### Lokální atomický commit

1. Zachovat aktivní manifest a zobrazovat jej po celý refresh.
2. Stáhnout pouze changed public komponenty do staging keys/files.
3. Ověřit HTTP status, limit velikosti, kompresi, hash, schema, scope a revizi.
4. Zapsat nové volatile/private replacements do identity-scoped staging.
5. Ověřit referenční konzistenci výsledného manifestu.
6. Jednou Sembast transakcí přepnout active manifest pointer.
7. Až potom publikovat nový `ClientSyncState`, rebuildnout search a později
   uklidit nedosažitelné staging generace.

Pád před bodem 6 ponechá starý manifest. Pád po bodu 6 načte nový manifest.
Klient nikdy neukáže směs public/private generací z různých identity epoch.
Po logoutu se zvýší epoch, zruší in-flight work a odstraní private namespace;
pozdní odpověď předchozí identity se nesmí commitnout.

## Admin audit

Audit pokrývá všechny změny, které od cutoveru mění některou komponentu
`client_sync_v1`; není retroaktivní ani univerzální pro všechny tabulky.

Datový model:

- `client_change_actions`: logická operace s UUID, occasion, časem, actor ID a
  display snapshotem, actor kind, source, change class, app/client version a
  correlation/idempotency ID.
- `client_change_items`: entity type/ID, operation, bezpečný label a pouze
  allowlisted `changed_fields`. Žádné raw row JSON, tokeny, emaily, telefony,
  private notes nebo neomezené HTML.
- `client_change_deliveries`: component/scope a source/published/private revize,
  aby UI rozlišilo „zapsáno“, „čeká na publication“ a „publikováno“.

Audit write proběhne ve stejné transakci jako doménový write a revision bump;
selhání povinného auditu fail-closed rollbackne celou změnu. Bulk statement má
jednu action a stránkované items. Human-readable text se skládá až při čtení,
ne drahými joiny ve write triggeru.

`get_client_change_actions_v1` a detail RPC jsou online-only, keyset stránkované
podle `(occurred_at, action_id)`, s limitem nejvýše 200. Přístup má pouze admin,
occasion manager nebo odpovídající unit manager; klientské role nemají přímý
SELECT/UPDATE/DELETE. Tab podporuje filtry čas, actor, source, component, typ
entity a operation; detail zobrazuje redigovaný diff a publication stav.

Existující orders/activity/cleaning histories zůstávají svými canonical moduly.

## Neměnné invarianty

1. DB je jediný autoritativní zdroj pro práva, kapacity a mutace.
2. Každá komponenta má právě jednoho vlastníka, scope a monotónní revizi.
3. Klient používá jediný sync coordinator a jediný polling timer.
4. Handshake je read-only; 60 unchanged pollů vytvoří nula DB writes.
5. Public artifact je immutable a neobsahuje user flags ani private data.
6. Private komponenta je autorizovaná při každém handshake a scoped identity
   epoch; nikdy není v CDN.
7. Nový manifest se aktivuje pouze po ověření všech changed komponent.
8. Delete nepotřebuje tombstone: úplný replacement je jediná semantika.
9. Vlastní mutation response se aplikuje lokálně bez následného full refresh.
10. Publisher může zaostávat, ale nikdy nezneplatní poslední zdravý artifact.
11. Starý klient dostává po compatibility dobu nezměněný contract.
12. Nový klient nikdy nekombinuje legacy a v1 data v jednom session contextu.
13. Každý sync-relevantní write vytvoří revision metadata a audit v jedné
    transakci, nejvýše jednou na logickou akci.
14. Audit je append-only, online-only, redigovaný a oddělený od snapshotů.
15. Page lifecycle, Realtime ani feature repository nesmějí vytvářet alternativní
    síťovou synchronizační cestu.

## Compatibility a canonical cutover

Před cutoverem transition klient při bootstrapu přečte capability:

- `client_sync_v1 = false`: celý session context používá existující legacy
  adapter;
- `client_sync_v1 = true`: celý session context používá `ClientSyncService`.

Přepnutí za běhu vyžaduje uzavření kontextu a nový bootstrap. Fallback uprostřed
refresh není dovolen. Kill switch se projeví v nové session; incidentní rollback
vrátí celý nový klientský režim na legacy, nikoli jednotlivé komponenty.

Po doloženém konci podpory starých binárek následuje contraction release:

- odstranit transition legacy adapter, `SynchroService`, page loaders, staré
  offline keys/import, fixtures a mrtvou dokumentaci;
- odstranit serverová legacy RPC pouze pokud writer/caller inventory neprokáže
  jiného podporovaného consumera;
- odstranit compatibility capture triggery až po migraci všech writerů;
- `rg`, call graph, DB function inventory a usage telemetry musí prokázat, že
  zůstala jedna canonical cesta nebo explicitně pojmenovaná externí hranice.

## Implementační vlny uvnitř jednoho releasu

### Wave 0 — Inventory, kontrakty a rozpočty

- Zmapovat všechny readers/writers pro každou komponentu v Flutteru, webu, SQL,
  Edge Functions a adminu; zahrnout relation-only delete a bulk importy.
- Změřit velikost komponent, p95/p99 private payload, současný počet requestů,
  DB time/rows/57014 a očekávaný počet foreground klientů.
- EXPLAINnout revision handshake a source snapshot RPC na reprezentativních
  datech. Load testovat 60s polling s jitterem a restart/reconnect burst.
- Uzavřít protocol golden JSON, DTO/schema a privacy allowlist/denylist.
- Ověřit `get_app_config_v217/v218` matici a deployment targety.
- Sepsat deletion ledger všech současných sync entry points.

Gate: nejhorší očekávaný polling load má rezervu; snapshoty jsou bounded;
všichni writeři mají capture strategii; žádný privacy blocker.

### Wave 1 — Aditivní revize, handshake a audit

- Přidat `client_sync_scopes`, `client_sync_publications` a tři audit tabulky s
  FK/indexy/RLS/grants. Nevytvářet `client_sync_changes` ani delta journal.
- Přidat mechanický statement-batched revision/audit capture pro legacy writery
  a explicitní helper pro canonical RPC.
- Implementovat read-only `get_client_sync_v1` a audit list/detail RPC s
  explicitním `search_path` a oprávněními.
- Bez historického audit backfillu inicializovat source revize současným stavem.
- Otestovat insert/update/delete, relation změny, bulk, concurrency, rollback,
  auth/privacy, hidden occasion a nula side effects při unchanged handshake.

Gate: každý sync writer bumpne správnou komponentu a audit právě jednou; legacy
RPC vracejí stejný contract; DDL proběhne s bounded lock/statement timeoutem.

### Wave 2 — Publisher a public CDN

- Implementovat source RPC pro každý public component jako jeden konzistentní
  JSON snapshot bez private fields.
- Implementovat idempotentní worker: dirty claim, build, compression, hash,
  immutable upload, ověření, monotónní pointer a reconciliation.
- Nastavit bucket/CDN headers a retention; URL obsahuje revision+hash.
- Přidat visibility stop/delete/purge runbook a test public eligibility.
- Generovat initial artifacts pro všechny required scopes a kryptograficky je
  ověřit před client cutoverem.

Gate: starší worker nepřepíše novější pointer; selhání nikam neposune pointer;
všechny required komponenty mají ověřený artifact.

### Wave 3 — Lokální store, poller a protokol

- Implementovat `ClientSyncStore`, staging/pointer, recovery, quota handling,
  scoped namespaces a one-time legacy cache migration.
- Implementovat handshake/CDN adaptéry, hash/schema validation a full component
  replacement.
- Implementovat jediný injected `SyncPollingPolicy`, lifecycle, jitter,
  single-flight, backoff a identity/context cancellation.
- Implementovat `SyncProjection` a per-component freshness/error state.
- Testovat fake clockem; žádné skutečné sleeps ani hardcoded produkční hodnoty.

Gate: crash-point testy dokazují old-or-new manifest; corrupt/404/quota zachová
starou generaci; login A → logout → login B nemůže commitnout odpověď A.

### Wave 4 — Consumers a mutations

- Přesměrovat Program, Mapu, Informace, News, Profil, Skupiny, Ubytování,
  Activities a Search na canonical projections.
- Odstranit jejich local-then-fast-then-full loadery a page-level refresh sítě.
- Rozdělit public DTO od private overlays; po logoutu není možné zobrazit user
  flags z public cache.
- Canonical mutation RPC vrací revision + autoritativní replacement relevantní
  komponenty; klient jej aplikuje stejným commit mechanismem.
- Anonymous saved program se při prvním loginu importuje právě jednou pomocí
  idempotency key; potom je server autoritativní.

Gate: každý consumer má právě jeden read path a každá vlastní mutace se projeví
okamžitě bez dalšího requestu.

### Wave 5 — Admin → Změny

- Přidat oprávněný online-only tab, repository, keyset pagination, filtry,
  detail redigovaného diffu a delivery/publication stav.
- Použít repo lokalizaci a společné test factories; assertions nesmějí stát na
  hardcoded UI stringu nebo produkčním ID.
- Otestovat 403, deleted actor/entity, shodné timestamps, souběžný insert mezi
  stránkami, velký bulk detail a timeout/retry.

Gate: preflight změny programu, místa, place type, obsahu, skupiny a ubytování
jsou právě jednou vidět pod správným aktérem a bez zakázaných polí.

### Wave 6 — Jediný produkční cutover

1. Ověřit backup/restore point, production targets a legacy baseline.
2. S bounded locks aplikovat aditivní DB migraci; při lock timeoutu ukončit
   transakci před deployem klienta.
3. Nasadit publisher, vygenerovat a ověřit všechny initial artifacts.
4. Nasadit kompletní transition klient s capability defaultně off.
5. Spustit jeden release preflight včetně auditu, offline/reconnect a load gate.
6. Atomicky zapnout `client_sync_v1` pro `csmostrava2026`.
7. Na vlastních účtech/zařízeních ihned ověřit online, offline cold start,
   resume/reconnect, login/logout, mutation a audit.
8. Sledovat handshake latency/error/57014, DB CPU/locks/rows, request rate,
   publication lag, CDN hit/404/bytes, local commit failures, audit latency a
   legacy usage podle platform/version.

Kill switch vypíná v1 pro nové session. Aditivní schema ani poslední artifacts
se při incidentu nemažou. Capability se nezapíná po komponentách.

### Wave 7 — Compatibility retirement

Po uplynutí rollback okna a doložení nulového podporovaného legacy trafficu
provést contraction podle deletion ledgeru. Toto je samostatný pozdější release,
protože staré vydané aplikace jsou externí compatibility hranice, nikoli druhá
interní architektura.

## Failure matrix

- unchanged polling, 5 000 klientů s jitterem a reconnect burst;
- timeout/57014, offline, flapping connectivity a opakovaný resume;
- publisher delay/failure, CDN 404, corrupt JSON, hash/schema mismatch;
- dva workers dokončené opačně a source změna během buildu;
- pád po každém staging kroku a těsně před/po manifest pointer commitu;
- plný disk, web private mode a cache schema upgrade/downgrade;
- login A, logout během requestu, login B a pozdní odpověď A;
- změna occasion během requestu a offline cold start v jiném contextu;
- insert/update/delete parentu i relation-only změna;
- public → private/hidden occasion a artifact purge;
- duplicate mutation, timeout po DB commitu, retry a unique conflict;
- starý klient proti novému serveru, capability off/on a final client bez
  legacy adapteru;
- audit actor user/system/service/unknown, deleted actor/entity, denylisted
  values, bulk action, rollback a stable keyset pagination;
- DDL lock timeout musí rollbacknout celou expansion migraci;
- 60 unchanged handshakes musí vytvořit nula heartbeat/log/audit writes.

## Verification

| Oblast | Důkaz |
|---|---|
| Handshake auth/privacy/read-only | targeted SQL contract test + side-effect assertion |
| Revision capture/audit/concurrency | SQL tests včetně concurrent harness |
| Snapshot consistency/eligibility | golden JSON, denylist, hash a visibility matrix |
| Polling load | production-like 5k foreground model s jitterem a burstem |
| Atomic cache/identity isolation | targeted Flutter store/service tests s fake clockem |
| Mutation idempotency | SQL + Dart integration tests |
| Consumer cutover | call graph + `rg` absence proofs + targeted widget tests |
| Offline UX | repository E2E; web smoke přes agent-browser; native/PWA checklist |
| Audit UI | SQL permission tests + repository/widget tests |
| Release | `./automation/test_all.sh` a repozitářem předepsané build/deploy gates |

Test data vznikají přes factories/SQL helpers a assertions používají vrácené
IDs/revize/doménové konstanty. Žádné hardcoded produkční hodnoty nebo náhodné
UI stringy.

## Definition of complete

- [ ] Existuje jediný `ClientSyncService`, jediný foreground timer a jediný
      read path pro každý migrovaný consumer.
- [ ] V kódu ani infrastruktuře v1 není Realtime/Broadcast invalidace, delta
      journal, tombstone merge ani page-level polling.
- [ ] Handshake je read-only, indexed a load gate při cílové concurrency prošel.
- [ ] Každá komponenta má scope, owner, source/published revision, freshness SLO
      a privacy klasifikaci.
- [ ] Public artifacts jsou immutable/hashované a nikdy obsahují private pole.
- [ ] Private components jsou izolované podle user/occasion/identity epoch.
- [ ] Klient atomicky aktivuje old-or-new manifest a po chybě zachová poslední
      zdravou generaci.
- [ ] Vlastní mutace se projeví z jedné RPC odpovědi bez full refresh.
- [ ] Offline UI ukazuje čas/revizi a nepředstírá živost bez sítě.
- [ ] Každý sync-relevantní write atomicky vytvoří revision a redigovaný audit.
- [ ] `Admin → Změny` je permission-gated, keyset paginated a online-only.
- [ ] Staré aplikace fungují na nezměněné explicitní compatibility hranici.
- [ ] Každá položka deletion ledgeru je odstraněná nebo pojmenovaná externí
      hranice s ownerem a retirement podmínkou.
- [ ] Release gate, immediate production smoke, monitoring a kill switch jsou
      prokazatelně funkční.

## Residual risks a jejich limity

- **Polling není okamžitý.** Aktivní klient může vidět cizí změnu až za přibližně
  75 sekund. Je to vědomá výměna za determinismus, jednodušší recovery a nulovou
  závislost na kvalitě websocketu.
- **Polling stále zatěžuje DB.** Handshake proto čte jen revision registry,
  nezapisuje telemetry, používá jitter a musí projít 5k load gate. Interval se
  bez měření nezkracuje.
- **Full replacement může být velký.** Komponentizace, komprese, velikostní
  budget a CDN přesouvají běžné čtení mimo DB. Překročení budgetu blokuje cutover
  a vede k rozdělení komponenty, ne k návratu delta protokolu bez nového ADR.
- **Compatibility dočasně drží starý backend.** Je izolovaný na bootstrap hranici
  starých/transition binárek; nový runtime nemá dual read. Retirement má měřené
  podmínky a deletion ledger.
- **Audit přidává write metadata.** Capture musí být statement-batched,
  allowlisted a bez drahých joinů; fail-closed riziko kryje write load test.
- **Audit začíná cutoverem.** Historii před migrací nelze spolehlivě dopočítat;
  existující doménové historie zůstávají autoritativní pro své oblasti.
- **Offline revokaci nelze okamžitě doručit.** Private payload je minimalizovaný,
  logout jej smaže a UI ukazuje stáří; zařízení bez sítě z principu změnu neví.

