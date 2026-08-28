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
