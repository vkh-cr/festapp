# Write-authority matrix — discovery and RPC-seam state

Evidence SHA-256: `75c58d5e99d4fd7052fde2fa99d2e96dc60263a1bd6a0ee82012635f9220de0b`

The deterministic repository scan found 68 runtime candidates: 61 files with
RPC calls, 12 with direct DML, 3 Storage mutators, 3 cron definitions, 2 database
webhook definitions, one explicit e-mail side-effect implementation and one push
side-effect implementation. A file can belong to multiple categories.

This is a candidate inventory, not an approved hybrid matrix. Deployed versions,
production branch overlays, provider callbacks, Cloudflare workers and manual
operator scripts must be reconciled with traffic evidence. Until every row has
one owner, the hybrid gate is closed.

## Direct DML requiring disposition

| Path | Initial classification | Required disposition before hybrid |
|---|---|---|
| `lib/components/groups/db_groups.dart` | production Flutter | explicit journaled RPC |
| `lib/components/icons/db_icons.dart` | production Flutter | explicit journaled RPC |
| `lib/components/icons/db_place_types.dart` | production Flutter | explicit journaled RPC |
| `lib/components/information/db_information.dart` | production Flutter | explicit journaled RPC |
| `lib/components/map/db_places.dart` | production Flutter | explicit journaled RPC |
| `lib/components/news/db_news.dart` | production Flutter + notification ledger | explicit journaled RPC and side-effect ownership |
| `lib/components/occasion/db_occasions.dart` | production Flutter + Storage cleanup | explicit journaled RPC; Storage remains separately owned |
| `lib/components/schedule/db_events.dart` | production Flutter | explicit journaled RPC |
| `lib/components/users/db_users.dart` | production Flutter | explicit journaled RPC |
| `supabase/functions/_shared/emailDelivery.ts` | Edge e-mail durable log | journal/effect boundary decision; replay must never send |
| `supabase/functions/send-reset-password-link/index.ts` | Edge Auth token state | journal/Auth ownership decision; never replay a link send |
| `web_client/scripts/account_deletion_disposable_integration.mjs` | disposable integration fixture | prove unreachable from production; exclude from runtime matrix |

## Existing RPC seam decision

The nine Flutter paths above are not nine independent domain implementations.
Each contains a legacy PostgREST fallback selected when
`ClientSyncRuntime.isV1Selected` is false, plus a typed command adapter selected
for `client_sync_v1`. The repository policy in
`automation/hetzner-supabase/merge/write-authority-policy.json` associates those
nine adapters with command modules containing 41 explicit domain RPC names.
This is partial static seam evidence, not proof that every legacy DML operation
has a complete equivalent. All 41 names are present in source `a`, but each
operation and permission contract still requires explicit classification.

The migration therefore reuses this existing deep module and attaches the
temporary merge journal at PostgreSQL mutation finalization. It must not add a
generic Worker mutation dispatcher or nine parallel pass-through RPC families.
RPC and journal execution remain one database transaction; the target replay
will consume durable state without re-running external effects.

Cloudflare remains the edge and object-delivery adapter: DNS/WAF/proxy for
`api.festapp.net`, and the existing image Worker/R2 path. Hyperdrive can connect
a Worker to PostgreSQL, but placing it in this write path would introduce an
extra network hop, another privileged runtime, and a second implementation of
authorization/idempotency without making the database write and journal append
more atomic. It is therefore not the write owner for this migration.

The current immutable evidence is
`/tmp/festapp-wave0-approved.hsng4B/hybrid-readiness-v3.json` (outside Git). It
is expected to remain blocked: source `a` has 41/41 ready registry rows and
all 41 expected RPC names, but 37 callable signatures do not satisfy the exact
required `SECURITY DEFINER` plus `search_path = public, extensions` contract.
Only 1/48 occasions currently selects `client_sync_v1`.
The other 47 require deployment/adoption evidence or an explicit proof that no
runtime can write them. Eight grant groups remain across the `anon` and
`authenticated` roles on four legacy tables: `exclusive_events`,
`exclusive_groups`, `information_hidden`, and `unit_users`. No grant has been
changed by this inventory.

The report SHA-256 is
`ff94db27537d5fc3dcecf30f8ad4c56418a7a97ac17ac1fd8ebfd2da7384b47b`.
The separate production-config inventory found 14 remote `prod/*` refs: seven
point to source `a`, two to `default`, and five legacy refs no longer contain
`automation/project.conf`. Five of the seven `a` configurations have no forced
occasion and therefore remain broad entrypoints. This makes per-occasion
reachability/adoption evidence mandatory; the 47 disabled occasions cannot be
declared historical merely from their dates.

This report is intentionally scoped to the Flutter RPC seam and can never
authorize hybrid activation. Edge Functions, cron, webhooks, payments, e-mail,
push, image paths, manual writers, deployed versions and traffic remain in the
global write-authority gate.

## Required columns for final approval

Each candidate receives: source project, tenant/cohort, deployed entrypoint,
mutating contract, current role/grant, write owner before/during/after cutover,
journal command type/version, replay target RPC, side-effect owner, adoption
evidence, rollback boundary and deletion-ledger row. `not-applicable` requires a
reachability proof; it is not a default.
