# Second canonical merge rehearsal — 2026-08-28

The second complete merge used newly exported encrypted snapshots and a new
isolated target database, `festapp_rehearsal_20260828234500`. It did not replace
the first rehearsal database, its restore drills, or either cloud source.

## Fresh inputs and repeatability corrections

The direct PostgreSQL export path ran from the approved Hetzner host over IPv6
and streamed into age encryption without a plaintext dump. The fresh raw
staging databases contained 70 default relations / 69,942 rows and 100 source-a
relations / 1,047,159 rows. Managed Auth/Storage exports contained 55,332 and
802,124 rows respectively.

The second run removed snapshot cardinalities from the import preconditions.
Row totals, identity collisions, refresh-token mappings, Storage buckets and
objects, embedded references, and derived-state epochs are now derived from the
verified staging data. Raw and managed artifacts are bound through a private
provenance ledger containing their exact artifact and manifest SHA-256 values;
operators no longer supply snapshot timestamps by hand.

Two failed empty foundations and two failed staging attempts were retained as
diagnostic evidence. The successful foundation preserved Supabase runtime ACLs,
Auth/Storage migration ledgers, and the Realtime control-plane ledgers required
for a same-cluster isolated database. Nothing was deleted.

## Validated merged state

The final isolated target contains:

- 7,198 Auth users, 7,191 identities, 13,751 sessions, and 234,274 refresh
  tokens;
- 1,199 Storage metadata objects / 521,859,566 metadata bytes, with all 1,199
  physical payloads reverified against the encrypted source snapshots;
- one activated default companion relationship and two unclassifiable legacy
  rows preserved privately, with zero invented relationships;
- 13 approved identity merges with the default profiles and password hashes
  unchanged;
- all registered scalar, polymorphic, JSON, transaction, URL and embedded
  references converged;
- 714 visible occasion/component materializations, all six enabled components
  within budget, exact private vectors, and zero production R2 writes.

Both import runs are `validated`; all 19 validation rows present at completion
were `pass`. The fresh data includes real drift from the first rehearsal,
including 38 additional refresh tokens and new business log/history rows,
which proves the pipeline no longer succeeds only for the first snapshot.

## Runtime switch correction

The first runtime switch implementation recreated Auth, REST, Realtime, Meta,
Functions, and Studio but omitted the Storage API database connection. Review
correctly classified that as a split-brain blocker: an HTTP 200 from Storage
proved process health, not that Storage metadata came from the new database.

The canonical override and switch workflow now include Storage as the seventh
database client. The Storage container was recreated with
`DATABASE_URL` ending in `festapp_rehearsal_20260828234500`, all 12 containers
remained running (11 health-checked services healthy), and a public object
selected from the target metadata returned HTTP 200 with the exact expected
108,892 bytes. Auth and REST returned 200 and Realtime completed a 101 upgrade.
The active `.env` retains the new target with a root-only timestamped rollback
copy.

The guarded switch script was then exercised in both directions on the final
configuration: canonical target → `postgres` → canonical target. Each switch
recreated exactly seven database-facing services, inspected every effective
database environment value, and passed public Auth/REST/Storage `200` plus
Realtime WebSocket `101`. The final evidence is
`runtime-switch-20260828T013909Z`; production DNS was not changed and no
database or path was deleted.

## Recovery and remaining gates

The first backup/restore of this target proved database and aggregate Storage
counts. Review then strengthened the recovery contract: subsequent recovery
points preserve owners/ACLs, require an explicit write freeze plus before/after
mutation proof, hash the complete Storage tree, include the database-target
Compose override and Caddyfile, and validate the extracted runtime configuration
and ownership/ACL equivalence during restore.

The final coordinated recovery point is encrypted run `20260828T012130Z`.
The backup mechanically stopped all seven database-facing services, verified
zero remaining client sessions and stable database/Storage state, completed in
452 seconds, and restarted every service healthy. Its independent restore used
a new network-isolated Supabase PostgreSQL container and new PGDATA path,
applied `globals.sql` as the image bootstrap superuser, and restored database,
Storage and runtime without consulting the live cluster's roles. Attempt
`20260828T012130Z-20260828T013039Z` passed in 416 seconds with RPO 0: 7,198
Auth users, 1,199 Storage metadata rows, 762 public scopes, two validated
imports, and exactly 1,463 files / 606,950,851 bytes. Complete role membership,
attributes and password-hash digest plus complete object owner/ACL digest
matched. The clean container was stopped and retained; the live target was not
mutated. An earlier clean-cluster attempt that exposed the required
`supabase_admin` globals-restore identity was likewise retained as diagnostic
evidence.

This completes two full **snapshot restore and canonical data-merge**
rehearsals. It does not claim the two complete journal catch-up/cutover
rehearsals required by the production plan, and it does not authorize
production cutover. Remaining gates are the journal/forwarder/final-marker
implementation and two zero-lag catch-up proofs, compatible web/Android/iOS releases,
password/OAuth/refresh-token and rights/write canaries, the final fresh
freeze/journal snapshot with zero lag, `api.festapp.net` activation and the four
legacy Storage URL rewrites, followed by the final single-write-authority gate.
