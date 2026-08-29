# Slunovrat canonical rehearsal — 2026-08-28

The legacy `slunovratopava` Supabase project is PostgreSQL 15.1 and has no
trustworthy migration ledger. It was therefore treated only as a read-only
source. No canonical migration was replayed against the cloud project.

The encrypted snapshot was restored into isolated raw and managed staging and
merged forward into `festapp_rehearsal_20260828234500`, the PostgreSQL 17
canonical target already containing the validated `default` and `a` sources.
The run is now `validated` with zero non-pass gates:

- 2,455 source Auth users; 2,450 inserted and five approved identity mappings;
- canonical password hashes unchanged and old merged sessions deliberately not
  imported, requiring ordinary reauthentication for those five accounts;
- 254 Storage metadata objects and 689,596,476 physical bytes copied and
  independently rehashed; total canonical Storage is 1,453 objects /
  1,211,456,042 bytes;
- five mapped occasions and 30 source-scoped public client-sync scopes;
- 91 legacy rows preserved privately: five merged profiles, 81 ambiguous
  companion relationships, three duplicate normalized profile e-mails and two
  rows from a removed old e-mail-template table;
- no previous-source client scope, aggregate version, metadata row or password
  hash changed; no row or file was deleted and no production R2 write occurred.

The public rehearsal endpoint returned `Slunovrat 2026` at mapped occasion ID
`1072557` with exactly 132 events; Auth and Storage health returned HTTP 200.
All 228 remaining legacy Supabase Storage URLs have a copied object. Rewriting
their host, production DNS/write authority, and client release activation remain
separate final-cutover gates.

## Legacy-client compatibility audit — 2026-08-29

The encrypted source snapshot contains 219 distinct public function names. The
archived Slunovrat client referenced 56 RPC names and 55 are present in that
snapshot; its occasion-settings writer already referenced the absent
`update_occasion_203`, so the old cloud is not a trustworthy target for further
schema evolution.

The current shared client references 54 RPC names not present in the source
snapshot. Most belong to disabled modules or to the newer administration
surface (speakers/counseling, Client Sync activity, the atomic event/map
editors, reception, cleaning, feedback and entity-level e-mail templates). The
enabled public Slunovrat flow was exercised on the Cloudflare staging build:
startup, program, event detail/description, browser back, map, news, information
and login all completed against the legacy source. `get_speakers` is an
intentional optional read for pre-speaker tenants and returns an empty bundle
only for the exact missing-function response.

`set_saved_program` was the one newly reachable public write missing from the
legacy source. The transition client now keeps a narrow compatibility adapter:
it attempts the RPC first and, only for PostgREST `PGRST202`, performs the old
RLS-protected single-event join/remove followed by an authoritative readback.
Permission, connectivity and server errors are not hidden, and non-atomic bulk
replacement is rejected. Its removal condition is activation of the canonical
`set_saved_program_client_sync_v1` path for every tenant.

This does not certify the complete modern administration UI against the old
cloud. That surface is a cutover gate, not a request to back-port dozens of
canonical SQL functions into an unledgered PostgreSQL 15 source. Until the
final delta import and canonical activation pass, the Cloudflare deployment is
a public-client candidate and the existing production administration path must
remain available. After activation, the canonical PostgreSQL 17 schema owns
both public and administration contracts.

Client release work must start from current canonical `main` plus a narrow
`festivalslunovrat` tenant overlay. The old production branch is not mergeable:
it predates the overlay policy and contains obsolete shared application code.
Web and iOS require new build-only candidates and private release manifests.
Android configuration can be prepared here, but the signed build remains
deferred to the independent Windows workstation.

## Coordinated three-source recovery point

After the Slunovrat merge, coordinated encrypted backup
`20260828T122654Z` stopped all database-facing runtime writers, proved zero
remaining client sessions, and recorded identical before/after database and
Storage state. Its append-only manifest contains 9,648 Auth users, 1,453
Storage metadata objects, 792 public scopes and all three validated imports.

The backup was restored into clean isolated database
`festapp_restore_2026082812265420260828124702` and a separate Storage path.
The drill matched exactly 1,717 physical files / 1,296,547,327 bytes and the
ordered Storage tree digest. Role attributes, password hashes, memberships,
object owners and normalized effective non-owner ACLs also matched. The only
declared cluster exception is `pg_cron`, which remains confined to the live
`postgres` database. RPO was zero and measured RTO was 790 seconds. The clean
restore cluster was stopped after validation; no cloud source or live target
was mutated and no retained path was deleted.

Retaining every prior successful and failed restore target has now exhausted
the 40 GB rehearsal disk: only about 304 MB remained after this proof. This is
an operational no-go for another rehearsal or production cutover until an
explicit retention cleanup or disk expansion is approved. Backup archives and
validation ledgers are off-host and must remain retained regardless of that
decision.
