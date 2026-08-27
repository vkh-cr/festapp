# Write-authority matrix — discovery state

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

## Required columns for final approval

Each candidate receives: source project, tenant/cohort, deployed entrypoint,
mutating contract, current role/grant, write owner before/during/after cutover,
journal command type/version, replay target RPC, side-effect owner, adoption
evidence, rollback boundary and deletion-ledger row. `not-applicable` requires a
reachability proof; it is not a default.
