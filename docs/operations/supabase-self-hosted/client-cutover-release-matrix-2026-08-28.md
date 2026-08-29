# Client cutover release matrix — updated 2026-08-29

This is the authoritative client scope for the canonical Supabase cutover. It
defines release lanes, not historic binaries: each active mobile identity needs
one new transition release, and each active web deployment needs one regenerated
transition deployment. Older writers must then be excluded by enforced minimum
version/adoption evidence or by the maintenance freeze.

## Mobile release lanes

| Product / production refs | iOS bundle / observed lower bound | Android package / observed lower bound | Required disposition |
| --- | --- | --- | --- |
| Festapp (`prod/festapp`, `prod/festapptickets`) | `festapp.festapp` / `>388` | `fstapp.fstapp` / `>388` | Publish and prove the canonical transition release on both stores. Resolve the duplicate web deployment owner separately. |
| CSM and Jubileum (`prod/csmostrava2026`, `prod/jubileum2025`) | `festapp.jm2025` / `>450` | `fstapp.jm2025` / `>450` | One store identity is shared by both refs; publish/prove the newest transition artifact and verify both tenant entry paths. |
| Hvězda Mořská (`prod/hvezdamorska`) | `festapp.hvezdamorska` / `>451` | `fstapp.hvezdamorska` / `>451` | Publish and prove transition build on both stores. |
| Festival Slunovrat (`prod/festivalslunovrat`, `prod/slunovratopava`) | `festapp.festivalslunovrat` / `>208` | `fstapp.slunovratopava` / `>208` | Publish and prove transition build on both stores. Android signed build is deliberately deferred to the independent Windows workstation. |
| Absolventský Velehrad (`prod/absolventskyvelehrad`) | `festapp.absolventskyvelehrad` / `>243` | `fstapp.AV25` / `>243` | **Open:** publish/prove both transition lanes, or record store/traffic evidence that the individual lane is absent or read-only. |
| Člověk a víra (`prod/cavfotofest`) | `festapp.cavfotofest` / `>243` | `fstapp.cav` / `>243` | **Open:** publish/prove both transition lanes, or record store/traffic evidence that the individual lane is absent or read-only. |
| Do O BiS Cup (`prod/doobiscup`) | `festapp.doobiscup` / `>243` | `fstapp.diecezkodoo` / `>243` | **Open:** publish/prove both transition lanes, or record store/traffic evidence that the individual lane is absent or read-only. |
| AKSM (`prod/aksmcz`) | `festapp.aksmcz` / observed through build `270` on several legacy refs | `fstapp.csa` / `>230` | **Open:** inventory both listings. The reused iOS identity must be reconciled with Farnost Opava/Festapp legacy refs before choosing release versus retirement. |
| Farnost Opava (`prod/farnostopava`) | `festapp.aksmcz` / `>259` (shared legacy identity) | `fstapp.fstapp` / `>259` (shared Festapp identity) | **Open:** prove this is a web-only tenant of the shared binaries, or verify the shared transition binary routes it correctly; do not create a duplicate store upload blindly. |
| AVApp (`prod/avapp`) | `festapp.festapp` / `>45` (collides with current Festapp identity) | `vkhcr.avapp` / `>45` | **Open:** reconcile the iOS identity collision and classify each listing as transition release or retired/read-only. |
| TicketOnline (`prod/ticketonline`) | `festapp.aksmcz` / `>236` (shared legacy identity) | `fstapp.fstapp` / `>236` (shared Festapp identity) | **Open:** prove web-only/shared-binary behavior or classify the historic listing as retired/read-only. |

The table is deliberately conservative: every distinct identity or ambiguous
identity reuse found in `origin/prod/*` is represented. A shared bundle/package
is one store lane but may have several tenant entry paths that all need canaries.
The observed build numbers are lower bounds from repository release state, not
authority to reuse a number. App Store Connect and Play Console readback must
confirm the actual listing and next number before upload. iOS and Android are independent lanes:
success on one platform never closes the other. We do not republish every old
version. We publish one compatible transition version per active identity and
prove that an older cloud-writing version cannot remain an accepted writer at
cutover.

Each mobile row closes only when its private evidence records all of:

- shared source commit and tenant overlay commit;
- release-manifest SHA-256 and pinned activation-document SHA-256;
- legacy and mapped canonical organization IDs plus the canonical cache-generation proof;
- bundle/package ID, semantic version and build/version code read back from the
  signed IPA/AAB;
- signed artifact SHA-256, signing identity and store listing match;
- store state plus active-build/minimum-version adoption evidence;
- legacy-phase cold start and write canary;
- canonical-phase full-process restart, refresh/session canary and write canary;
- confirmation that warm foreground alone does not claim to switch a running
  Supabase singleton.

Ordinary retained accounts should not need to log in again: the stable storage
namespace and imported refresh token are exchanged against canonical Auth. The
five approved Slunovrat identity merges are the recorded exception because
their superseded source sessions were intentionally not imported; those five
accounts may require ordinary reauthentication.

## Web deployment lanes

The following production refs have an identified generated configuration and
must be regenerated from the shared transition source, deployed atomically and
verified by completed-bundle inspection:

| Production ref | Public site | Source family |
| --- | --- | --- |
| `prod/absolventskyvelehrad` | `app.absolventskyvelehrad.cz` | `a` |
| `prod/cavfotofest` | `clovekavira.festapp.net` | `a`, organization `3→6` |
| `prod/csmostrava2026` | `csmostrava.festapp.net` | `a`, organization `9→12` |
| `prod/doobiscup` | `biscup.netlify.app` | `a` |
| `prod/farnostopava` | `rezervace.farnostopava.cz` | `a` |
| `prod/festapp` | `live.festapp.net` | `default` |
| `prod/festapptickets` | `vstupenky.online` | `default`; canonical ticket-web deployment owner |
| `prod/hvezdamorska` | `hvezdamorska.festapp.net` | `a`, organization `4→7` |
| `prod/jubileum2025` | `jubileum2025.netlify.app` | `a` |

Four legacy refs currently lack `automation/project.conf` and therefore cannot
be assumed releasable: `prod/aksmcz`, `prod/avapp`,
`prod/slunovratopava`, and `prod/ticketonline`.
Each must receive exactly one documented disposition before cutover: restore a
canonical tenant overlay and deploy it, enforce read-only behavior, or prove
from hosting/DNS/traffic/write telemetry that it is retired. Branch age is not
retirement evidence.

The active Cloudflare web lanes were regenerated from main through
`a17e4c39d3310274526c74e247e451b74b5ac9e1` on 2026-08-29. All use Flutter
`3.47.2` and semantic version `0.19.93`: CSM Ostrava and Clovek a vira use
build `465`; Hvezda Morska uses build `466`; the ticket web uses build `464`; and
`live.festapp.net` uses build `470`. Build numbers are monotonic within each
release lane and are not expected to be identical across unrelated store/web
identities. The three source-a web overlays remain deliberately in `legacy`
activation phase while carrying their mapped canonical organization and
`api.festapp.net` configuration, so the final activation document can switch
them after the full-freeze gate without rebuilding the bundle. Festapp `470`
now carries the equivalent source-default transition profile for canonical
organization `1`, while its public activation document remains in `legacy`.

The Festapp `470` production smoke passes the canonical root-to-program
redirect, both legacy `get_events` reads, a program detail with its full HTML
description, detail back-navigation to `/conference2024/event`, the public
login route and the Flutter admin route. `backend-activation.json` is served as
JSON with `no-store, max-age=0`; internal application links and the iOS
associated-domain input now use `live.festapp.net`, not the separate
`vstupenky.online` tenant. The stable legacy Auth storage namespace is retained,
so installing this transition web build does not itself sign users out.

Festival Slunovrat now has a canonical version-93 overlay on
`prod/festivalslunovrat`, a successful Cloudflare candidate at
`festivalslunovrat.pages.dev`, complete canonical client RPC/Edge/relation
coverage and a published 28.4 MiB immutable offline-map v2 bundle. Its custom
domain, final native offline acceptance, iOS build-only signing proof, Android
Windows build and backend activation remain gated. The historic
`prod/slunovratopava` ref is not a second release source and still needs an
explicit archival/retirement disposition before cutover.

The Hvezda Morska `466` production smoke passes the all-unit catalogue root,
occasion detail, reservation handoff to `/form/povyseni2026`, and the Flutter
`/admin` handoff. On 2026-08-29 an authorized OneSignal dashboard session
changed the app's saved web origin from `https://hvezdamorska.netlify.app` to
`https://hvezdamorska.festapp.net`. A cold production check then completed the
OneSignal initialization without an origin error, and the custom
`/push/OneSignalSDKWorker.js` returned JavaScript. The old Netlify root and a
deep `/form/rijnovapout26` URL both return HTTP 301 to the same path on the new
origin. This closes the Hvezda web-push origin gate. Browser subscriptions
cannot be transferred between origins, so users must opt in on the new origin;
that expected re-subscription does not require another bundle build.

Each web row requires source SHA, generated config digest, deployed bundle
digest, public activation document with `no-store`, cold-load legacy and
canonical canaries, refresh/session evidence, and confirmation that service
worker/CDN caching cannot retain the legacy activation. Web/admin surfaces not
represented by a production ref must be added before they write.

## Non-client writers

Edge Functions, cron jobs, callbacks, workers, manual scripts and direct SQL
clients close under the write-authority matrix rather than a store release.
Their endpoint, credential owner, DML/journal coverage and freeze behavior must
all be known. Store approval or a successful client build cannot compensate for
an unknown non-client writer.

## Gate

The cutover gate passes only when every lane is one of:

1. transition artifact deployed and adopted with both phase canaries passing;
2. technically enforced read-only for the entire freeze/cutover window; or
3. proven unreachable/retired using deployment, DNS and write telemetry.

“Uploaded”, “approved”, “probably unused” and “works on one platform” are not
closed states. Android compilation/signing evidence is completed later through
the approved Windows build workstation; all source, manifest and preflight
inputs must be fixed before that command is sent.
