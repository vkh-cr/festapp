# CSM: bezpečné PWA úložiště a ověřitelná obnova dat

Date: 2026-08-07
Status: Ready for execution; produkční operace zůstávají samostatně blokované
Verification: standard

## Outcome

CSM Ostrava získá jeden kanonický a fail-closed životní cyklus versionovaných
PWA app shellů. Oba webové vstupy reportují workeru svou přesnou verzi, worker
jako jediný rozhoduje o zachování a odstranění shellů a diagnostika i běžný
úklid používají tentýž výpočet. Lze odstranit jen starý shell, který není
aktuální a nepoužívá jej žádný živý klient. Pokud chybí úplná informace, nic se
nemaže.

Fonty, přihlášení, Sembast/IndexedDB, cookies, local/session storage a ostatní
offline data zůstávají mimo deletion contract. Velikost buildu hlídá jeden
sdílený manifest resource setů, takže gate nemůže měřit jiná data než worker.

Samostatný recovery modul vytvoří pouze sanitizovaný, read-only přehled správného
CSM cíle, databázových backupů, PITR, auditního pokrytí a sync zdraví. Obnova
vychází ze zálohy/PITR; redigovaný audit slouží k vymezení a porovnání incidentu,
nikoliv jako event-sourced záloha.

## Scope a autorita

### In scope

- `festapp-app-shell-*` lifecycle vlastněný generovaným service workerem.
- Jednotný version-reporting contract pro Flutter vstup i samostatný
  `web_client`.
- Sanitizovaná diagnostika přes browser aggregate a metadata workeru.
- Explicitní guarded prune se stejnou policy jako automatická údržba workeru.
- Jeden zdroj pravdy pro seznam core/known PWA resources a jejich raw-byte
  budget.
- Config-driven read-only recovery readiness a incidentní runbook.
- Samostatná rozhodovací brána pro PITR/RPO/RTO.

### Out of scope

- Mazání/reset `default.db`, `client_sync_v1.db`, Supabase auth storage, cookies,
  local/session storage, receipts nebo uživatelských offline dat.
- Automatické mazání stabilní cache `festapp-used-fonts-v1`.
- Nativní MBTiles/PMTiles offline mapy; web/PWA je nestahuje.
- Bundle splitting; `deferredLoading: false` je současné vědomé rozhodnutí.
- Produkční restore, zapnutí PITR, změna retention, DML, compaction nebo jiné
  produkční write operace.
- GitHub Actions. CSM se sestavuje lokálně a nasazuje přímo do Cloudflare;
  GitHub je pouze úložiště kódu.
- Commit, push nebo deploy bez samostatného pokynu.

## Current-state evidence

| Evidence | Důsledek pro návrh |
|---|---|
| `automation/generate_pwa_service_worker.mjs` generuje `festapp-app-shell-{version}`, sleduje klientské verze a obsahuje `deleteUnusedShellsWhenSafe()`. | Worker je správný vlastník, ale stávající policy se má nahradit jednou hlubší reconcile funkcí. |
| `web/festapp_update_prompt.js` reportuje `FESTAPP_CLIENT_VERSION`. | Flutter vstup už má část požadovaného adapter contractu. |
| `web_client/index.html` registruje stejný worker, ale svoji `APP_VERSION` mu nereportuje. | Otevřený formulářový klient je pro worker neznámý a může blokovat odstranění všech starých shellů. Před změnou retention se musí migrovat. |
| `web/festapp_update_prompt.js:recoverFailedCutover()` přímo maže `festapp-app-shell-*` a `flutter-app-cache*`. | Jde o produkčně dosažitelný bypass kanonického vlastníka; versionované shell delete musí z window kódu zmizet. |
| `clearLegacyFlutterCaches()` odstraňuje pouze předchozí Flutter worker/cache. | Je to dočasná kompatibilní hranice pro pre-Festapp instalace, ne druhý běžný vlastník Festapp shellů. |
| `web/index.html:prepareFestappLocalDevelopment()` čistí cache pouze na localhostu. | Lze zachovat jako explicitní vývojový boundary s testem localhost guardu. |
| Generátor sám vlastní `shouldPrecache`, `collectFiles`, URL normalizaci a rozdělení core/known resources. | Budget nesmí zpětně parsovat vygenerovaný worker; generátor i gate mají použít společný manifest modul. |
| Produkční core měl 12 souborů / 21,2 MiB a `main.dart.js` 22 175 578 B; celý known set 128 souborů / 57,0 MiB (měření 2026-08-07). | Desítky MiB jsou současný očekávaný základ. Počáteční budget 25/60 MiB je těsná regresní mez, ne cíl pro automatické mazání. |
| `festapp-used-fonts-v1` je stabilní a ukládá pouze použité font resources. | Fonty se mezi releasy znovu používají a nikdy nejsou součástí běžného cleanupu. |
| `ClientSyncStore` omezuje blob cache na 16 položek / 8 MiB a atomicky nahrazuje generace. | Sync data mají vlastního vlastníka; PWA cleanup je neotevírá ani nemaže. |
| CSM target je `lwfpdjxsdmkfyrzqbrlk`, occasion `csmostrava2026` / ID 643. Dne 2026-08-07 bylo sedm dokončených daily backupů a PITR bylo vypnuté. | Recovery command musí target odvodit z canonical configu, fail-closed ověřit occasion a pravdivě ukázat omezené RPO. |
| Sync health byl bez driftu/revision lag/stuck receipts; audit měl 5 098 commitů od 2026-08-03 10:13:26+00. | Není znám aktivní incident. Audit pokrývá jen dobu po cutoveru a neobsahuje plné before/after rows. |
| Browser Cache Storage nemá transakční multi-delete ani zrušení již odeslaného `caches.delete()`. | Preflight timeout/chyba musí znamenat nula delete calls. Apply proto maže nejvýše jeden již schválený shell na reconcile; timeout po dispatchi pravdivě hlásí neznámý výsledek místo nepravdivého tvrzení o nulové mutaci. Zachování current/live shellů tím není oslabeno. |

Přesná velikost původního Chrome profilu zůstává neznámá, dokud uživatel
neautorizuje konkrétní tab nebo neposkytne DevTools export. To neblokuje opravu
architektury ani přidání diagnostiky; blokuje pouze tvrzení, že konkrétní profil
má leak.

## Architectural decision frame

Browser storage a databázová obnova jsou dvě nezávislé domény. Sdílejí tento
umbrella plán kvůli jednomu uživatelskému požadavku, ale nemají společný runtime,
deploy gate ani oprávnění. Implementují a commitují se v oddělených coherent
changes.

### Deep module 1: PWA shell lifecycle

Kanonickým vlastníkem lifecycle je generovaný worker. Jeho vnitřní operace
`reconcileShellCaches({apply})` (název je závazný koncept, implementace může
zvolit repo-style ekvivalent) musí:

1. získat živé window klienty a jejich explicitně reportované verze;
2. vypočítat `current`, `live`, `unknown`, `retained`, `deletable` a blocker;
3. při `apply: false` pouze vrátit sanitizovaný inspection result;
4. při `apply: true` smazat jen vypočtené `deletable` cache;
5. při neznámém klientovi, chybějící požadované live cache nebo preflight API
   chybě fail-closed vrátit blocker a nula delete calls; timeout již odeslaného
   delete označit jako neznámý výsledek a zablokovat další mutace po celou
   životnost workeru.

Retained set je přesně current shell plus shelly používané živými reportovanými
klienty. Neexistuje permanentní „rollback shell“. Atomická instalace chrání
probíhající cutover; po jeho dokončení je návratem opravený vyšší release, nikoli
trvalá druhá runtime cesta na zařízení.

Worker nabízí malý message contract:

- `FESTAPP_CLIENT_VERSION` — registrace přesné verze klienta;
- `FESTAPP_INSPECT_SHELLS` — read-only výsledek stejného reconcile výpočtu;
- `FESTAPP_PRUNE_UNUSED_SHELLS` — stejný výpočet s `apply: true`.

Oba frontendové entry pointy jsou mechanické adaptéry stejného contractu.
Flutter adapter žije u update promptu; `web_client` používá `APP_VERSION` ze
`web_client/src/version.js`. Lifecycle rozhodnutí, seznam cache prefixů ani
retention policy se v adaptérech neopakují.

Flutter UI používá typed port v `lib/services/pwa_storage/` s web a unsupported
adapterem. Nemá znát cache API ani stringly interop detaily. Obecný
`JSInterop.callFutureMethod` se nerozšiřuje o další lifecycle pravidla.

### Deep module 2: PWA resource manifest a budget

`automation/lib/pwa_shell_manifest.mjs` bude jediný zdroj pravdy pro:

- resource discovery a `shouldPrecache` policy;
- normalizované deployment URL;
- `coreResources`, `knownResources` a raw byte totals.

`generate_pwa_service_worker.mjs` i nový budget check tento modul importují.
Gate nesmí regexem parsovat již vygenerované `CORE_URLS`/`PRECACHE_URLS`.
Počáteční limity jsou explicitní branch config, přednostně v
`automation/project.conf`:

- `PWA_CORE_CACHE_BUDGET_BYTES=26214400` (25 MiB);
- `PWA_KNOWN_CACHE_BUDGET_BYTES=62914560` (60 MiB).

Měří se raw build/response bytes, protože právě response bodies zabírají Cache
Storage. Změna limitu je vědomá config změna s vysvětlenou novou baseline.

### Deep module 3: recovery readiness

`automation/release/recovery_readiness.mjs` je config-driven composer, nikoli
CSM-only kopie existujících health dotazů. Znovu použije:

- target/config parsing z `automation/lib/supabase_management.mjs`;
- nově exportovaný `collectClientSyncHealth(target)` z
  `automation/release/client_sync_health.mjs`;
- injektovatelný read-only backup-inventory adapter;
- injektovatelný fixed-query aggregate reader pro testy.

Veřejný příkaz nepřijímá libovolné SQL. Používá pouze fixní SELECT/read endpoint
cesty a vrací project/occasion identity, backup/PITR metadata, count/min/max a
coverage agregáty, schema availability a sync health. Management credential
nelze jen na základě skriptu označit za permission-level read-only; garantuje se
omezená read-only code path a žádné mutační endpointy. Secret, user rows, order
payloady ani audit payloady se nevypisují.

## Invariants

1. Versionované shell cache maže pouze worker.
2. Current shell a každý shell živého známého klienta vždy zůstávají.
3. Neznámý klient, neúplná live-cache informace nebo preflight chyba znamenají
   nula delete calls. Protože Cache Storage neumí transakční/cancelable delete,
   apply odešle nejvýše jeden již bezpečně vypočtený název; timeout po dispatchi
   hlásí `status unknown`, nikdy ne nepravdivé `deleted: []` jako jistý výsledek,
   a latchem zablokuje všechny další delete pokusy po životnost workeru.
4. Automatický lifecycle cleanup a explicitní Settings prune používají stejnou
   reconcile funkci; neexistují dvě policy.
5. Běžný cleanup nikdy nemaže `festapp-used-fonts-v1`, `flutter-app-cache*`,
   IndexedDB/Sembast, auth, cookies ani local/session storage.
6. Diagnostics nečte cache response bodies ani perzistentní payloady. Použije
   `navigator.storage.estimate()` a volitelné browser `usageDetails`, plus názvy,
   verze, counts a blockers vrácené workerem.
7. URL s query stringem a uložené hodnoty se do reportu nedostanou.
8. Worker manifest a build budget používají stejný resource model.
9. Recovery readiness odmítne target/occasion mismatch a nic nezapisuje.
10. Audit, receipts a doménové histories jsou evidence/diff pomůcky, ne náhrada
    backupu.
11. Restore, PITR enablement a production forward repair nejsou skryté v
    preflightu ani v browser-storage releasu.

## Canonical cutover reachability map

| Reachable path/artifact | Classification | Final state / exit condition |
|---|---|---|
| Worker `deleteUnusedShellsWhenSafe()` | **migrate → delete** | Jeho chování převezme jediná `reconcileShellCaches`; stará funkce ani paralelní retention výpočet nezůstane. |
| Flutter `FESTAPP_CLIENT_VERSION` reporting | **migrate** | Mechanický adapter sdíleného message contractu, bez policy. |
| `web_client` worker registration bez version reportu | **migrate** | Každý service-worker-controlled vstup reportuje `APP_VERSION` při ready/controllerchange/focus podle stejného contractu. |
| `recoverFailedCutover()` přímý delete `festapp-app-shell-*` | **delete** | Window už versionované shelly nemaže; recovery provede cache-busted navigation/re-registration a pozdější worker reconciliation. |
| `clearLegacyFlutterCaches()` | **boundary** | Dočasně pouze pro `flutter_service_worker.js`/`flutter-app-cache*`; odstranit po zdokumentovaném minimum-supported-installed-version nebo telemetry/rollout gate. Nesmí se rozšířit na Festapp shelly. |
| Localhost `prepareFestappLocalDevelopment()` cleanup | **boundary** | Zachovat pouze s prokazatelným localhost guardem; není produkčně dosažitelný. |
| Settings inspect/prune | **keep as adapter** | Typed volání workeru; nula vlastních cache pravidel nebo delete calls. |
| `festapp-used-fonts-v1` | **keep** | Oddělený stabilní vlastník; negativní test absence z deletion setu. |
| Generátor-local resource discovery | **migrate → delete duplicate** | Přesunout do `pwa_shell_manifest.mjs`; generátor je consumer. |
| Budget parsing generated worker arrays | **blocked/deleted design** | Neimplementovat; budget je druhý consumer manifest modulu. |
| CSM-only kopie health/config logic | **blocked/deleted design** | Neimplementovat; recovery composer používá exportované existující seams. |
| `StorageHelper`, `ClientSyncStore`, `InstallationCutoverService`, logout cleanup | **keep** | Beze změny; žádný nový caller ani reuse pro PWA cleanup. |

Cutover je dokončen pouze tehdy, když reachability a absence testy prokážou, že
produkční window kód nemůže smazat `festapp-app-shell-*`, všechny workerem řízené
entry pointy reportují verzi a v repozitáři existuje právě jeden runtime výpočet
retained/deletable setu.

## Recovery truth and limitations

- Supabase daily backup/PITR je autoritativní databázový restore source.
- Database backup neobsahuje samotné Storage objects, pouze jejich databázová
  metadata. Runbook proto vede samostatný object inventory/backup gap pro
  Supabase Storage a případné R2 objekty.
- Restore do stejného projektu znamená nedostupnost během operace a vyžaduje
  samostatnou produkční autoritu.
- Preferovaný drill/analýza je restore/clone do nového izolovaného projektu,
  pokud je daný typ backupu a tarif podporuje. Clone je database-only a ostatní
  služby/configuration se rekonfigurují ručně.
- Po obnově do izolovaného cíle se před analýzou vypnou external-effect
  extensions/jobs (`pg_cron`, `pg_net`, wrappers a obdobné integrations), aby
  kopie nevolala produkční okolí.
- Forward repair jde přes canonical UI/RPC. Přímé SQL je samostatně autorizovaný
  break-glass postup, ne běžná větev runbooku.

Autoritativní omezení jsou popsána v oficiálních dokumentech Supabase:
[Database backups](https://supabase.com/docs/guides/platform/backups),
[Restore to a new project](https://supabase.com/docs/guides/platform/clone-project)
a [PITR usage/pricing](https://supabase.com/docs/guides/platform/manage-your-usage/point-in-time-recovery).

## Implementation waves

### Wave 1 — Charakterizace a canonical resource manifest

**Goal:** uzamknout dnešní chování a vytvořit jeden resource model bez změny
runtime mazání.

**Changes**

- Rozšířit `automation/tests/pwa_offline.test.mjs` o charakterizační fixture pro
  Flutter klienta, neznámý `web_client`, více verzí a font cache.
- Rozšířit `automation/tests/update_prompt_behavior.test.mjs` tak, aby zachytil
  dnešní přímý failed-cutover delete před jeho pozdější náhradou.
- Extrahovat `automation/lib/pwa_shell_manifest.mjs`; přepojit na něj generátor.
- Přidat budget consumer a testy nad manifest interface, ne nad regexem
  vygenerovaného workeru.
- Zapojit budget do `automation/cloudflare_build.sh` s limity z canonical configu.

**Failure/exit:** manifest fixture musí dokazovat shodu URL/resource množin s
dosavadním workerem. Build vypíše core/known raw bytes a failne nad limitem.
Žádný runtime cache deletion contract se v této wave nemění.

### Wave 2 — Všichni klienti na jednom lifecycle contractu a read-only inspect

**Goal:** odstranit neznámý legitimní frontend dříve, než se zpřísní cleanup.

**Changes**

- Zcentralizovat worker message typy/shape v generátoru a přidat read-only
  reconcile inspection bez delete calls.
- Upravit Flutter update-prompt adapter bez přidání policy.
- Doplnit `web_client` adapter používající canonical `APP_VERSION`; reportovat
  při service-worker ready, `controllerchange` a znovu při návratu klienta do
  aktivního stavu podle existujícího Flutter lifecycle contractu.
- Přidat `web/festapp_pwa_bridge.js` pouze jako UI/worker transport.
- Přidat hluboký typed Dart modul `lib/services/pwa_storage/` s `inspect()` a
  později `pruneUnusedShells()`, web/unsupported adapterem a typed resulty.
- Settings zobrazí na explicitní tap aggregate z `navigator.storage.estimate()`
  (včetně volitelného `usageDetails`) a worker shell metadata/blocker. Nečte
  response bodies, IndexedDB records ani auth values.

**Failure/exit:** unsupported browser vrací partial report. Testy dokazují nula
mutací, sanitizaci a version report ze všech production entry pointů. Neznámý
externí klient stále fail-closed blokuje cleanup.

### Wave 3 — Atomic canonical cutover shell cleanupu

**Goal:** přepnout všechny běžné cleanup vstupy na jedinou reconcile policy a
ve stejném coherent change odstranit staré cesty.

**Changes**

- Nahradit `deleteUnusedShellsWhenSafe()` jedinou worker reconcile funkcí.
- Automatickou activate/message údržbu i `FESTAPP_PRUNE_UNUSED_SHELLS` napojit
  na tentýž výpočet.
- Přidat Settings potvrzení „Uvolnit nepoužívané verze“; dialog výslovně uvede,
  že přihlášení, offline data a fonty zůstávají.
- Z `recoverFailedCutover()` odstranit přímé mazání `festapp-app-shell-*` a
  nahradit jej nedestruktivním recovery tokem. Nesmí vzniknout druhý worker
  message s odlišnou deletion policy.
- Zachovat `clearLegacyFlutterCaches()` jen jako označený compatibility boundary
  a localhost cleanup jen jako dev boundary.
- Aktualizovat existující tests: testy přesunutého chování nahradit, ne vrstvit
  shallow regex testy vedle worker VM harnessu.

**Failure/exit:** unknown client, missing live shell nebo preflight timeout/Cache
API chyba = nula delete calls. Timeout již odeslaného delete = pravdivý
`status unknown` a latched zákaz dalších mutací. VM matrix dokazuje přesná
deleted names, ochranu current/live/fontů a cold offline start. `rg` absence
prokáže nula produkčních window delete cest pro `festapp-app-shell-*` a nula
staré policy funkce.

### Wave 4 — Config-driven recovery readiness a runbook

**Goal:** reprodukovatelně sebrat incidentní evidence bez možnosti změnit
produkci.

**Changes**

- Refaktorovat `client_sync_health.mjs` tak, aby CLI i recovery používaly jeden
  exportovaný collector; zachovat existující CLI contract.
- Implementovat `automation/release/recovery_readiness.mjs` s injected backup a
  aggregate-reader adapters a fixed read-only queries.
- Testovat target/occasion mismatch, backup/PITR on/off, audit coverage,
  chybějící schema, sanitizaci a zákaz arbitrary SQL/write endpointů.
- Přidat `docs/runbooks/csm-data-recovery.md`: preserve evidence → incident
  window → backup/PITR point → isolated clone/restore → disable side effects →
  compare aggregates/domain evidence → forward repair přes UI/RPC → sync/audit
  verification.
- Zdokumentovat Storage/R2 object gap, clone limitations, downtime stejného
  projektu a skutečnost, že audit není event-sourced backup.

**Failure/exit:** target mismatch a chybějící autoritativní backup jsou hard
failure; PITR off je explicitní RPO warning. Jeden příkaz vytvoří pouze
sanitizovaný report a test spy vidí jen povolené read paths.

### Wave 5 — Absence proof a dokumentační kontrakce

**Goal:** uzavřít cutover odstraněním obsolete znalosti, nikoliv jen přidáním
nové cesty.

**Changes/exit**

- `rg` + behavior tests prokážou jediný retained/deletable výpočet.
- Žádný production window kód nemaže `festapp-app-shell-*`.
- Každý production entry point registrující Festapp worker reportuje verzi.
- Budget i worker importují stejný manifest module; žádný array parser nezůstane.
- `docs/architecture/SERVICES.md` a `docs/architecture/database.md` popisují
  skutečné canonical owners a odkazují na runbook.
- Odstranit zastaralé test fixtures/helpers/imports vzniklé přesunem. Legacy a
  localhost boundaries mají explicitní komentář, test a exit condition.

### Wave 6 — Samostatná PITR/RPO/RTO brána

Bez samostatné autority se nic nemění. Vlastník porovná business RPO/RTO s
aktuální daily-backup mezerou a s aktuální cenou/retention PITR. Při schválení se
PITR aktivuje oficiální cestou a následuje samostatně naplánovaný izolovaný
restore drill. Při neschválení runbook explicitně přijme residual gap. Tato wave
není součástí browser storage deploye.

## Commit boundaries

Doporučené malé, buildable commity:

1. charakterizační testy + canonical manifest + budget;
2. oba client adapters + read-only worker inspect + typed Settings diagnostics;
3. worker reconcile cutover + Settings prune + odstranění direct-delete bypassu;
4. recovery collector/composer tests;
5. recovery runbook + architecture/absence cleanup.

Commity se nevytvářejí v rámci plánování. Před zahájením implementace se
zachovají existující nesouvisející změny ve worktree.

## Verification strategy

Použije se repository `standard` validation, protože změna zasahuje production
PWA lifecycle a recovery boundary.

| Kontrakt | Primární důkaz |
|---|---|
| Jediná shell policy, current/live/unknown safety | `automation/tests/pwa_offline.test.mjs` VM harness |
| Žádný window bypass | `automation/tests/update_prompt_behavior.test.mjs` + absence scan |
| Oba frontend vstupy reportují verzi | lifecycle fixtures pro Flutter a `web_client` |
| Diagnostika je read-only a bounded | bridge fixtures + targeted Flutter service/UI tests |
| Font/auth/IDB/local/session preservation | exact delete allowlist + before/after fixtures |
| Offline cold start po prune | existující PWA offline harness; cílený browser smoke pouze když je dostupný bezpečný profil |
| Manifest/gate shoda | interface tests nad `pwa_shell_manifest.mjs` |
| Recovery target/sanitizace/read-only | injected-adapter tests pro `recovery_readiness.mjs` |
| Build integrace | `./automation/cloudflare_build.sh`; žádné GitHub Actions |

Po každé wave stačí její cílené testy; před přímým Cloudflare deploymentem se
spustí repo release gates jen na explicitní release pokyn. Plán samotný nic
nenasazuje.

## Definition of complete

- [ ] Existuje právě jeden worker reconcile výpočet pro inspect, automatic
      maintenance i explicit prune.
- [ ] Flutter i `web_client` reportují přesnou build verzi stejným contractem.
- [ ] Production window kód nemůže přímo smazat `festapp-app-shell-*`.
- [ ] Current/live shelly vždy zůstávají; unknown/missing/error stav nemaže nic.
- [ ] Neexistuje permanentní rollback-shell retention ani paralelní fallback
      runtime cesta.
- [ ] Fonty, auth, cookies, local/session, Sembast/IndexedDB a offline data jsou
      mimo deletion set a mají negativní test.
- [ ] Diagnostika nečte cache bodies ani persistent payloady.
- [ ] Worker a budget sdílejí jeden resource manifest; 25/60 MiB gate je config.
- [ ] Recovery readiness reuseuje canonical config/health seams, nepřijímá
      arbitrary SQL a je prokazatelně read-only.
- [ ] Runbook pravdivě rozlišuje DB backup/PITR, Storage objects, audit a
      doménové evidence a preferuje izolovaný restore.
- [ ] Legacy Flutter a localhost hranice jsou explicitně omezené a mají removal
      condition; obsolete cesty, testy a helpery jsou odstraněné.
- [ ] CSM build/deploy nepoužívá GitHub Actions.
- [ ] Targeted standard validation projde a žádná produkční operace není
      provedena bez nové autority.

## Residual risks

- Chrome může vykazovat HTTP/code cache mimo Cache Storage, kterou aplikace
  neumí přesně kategorizovat ani spravovat.
- Dlouho otevřený starý nebo cizí klient může oprávněně blokovat cleanup. To je
  bezpečnostní vlastnost; UI musí ukázat blocker místo návrhu factory resetu.
- Bez PITR zůstává mezera mezi daily backupy a redigovaný audit nemusí obsahovat
  staré hodnoty potřebné k přesné rekonstrukci.
- Supabase DB backup nechrání samotná Storage/R2 object data. Jejich externí
  inventura/backup potřebuje vlastní retention, encryption a autoritu.
- Restore/clone podporované poskytovatelem nemusí být dostupné pro konkrétní typ
  backupu nebo tarif; runbook proto nesmí předstírat ověřený drill bez jeho
  skutečného provedení.
