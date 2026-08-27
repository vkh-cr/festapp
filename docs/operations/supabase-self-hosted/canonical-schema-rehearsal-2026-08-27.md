# Canonical schema rehearsal — 2026-08-27

The repository-owned canonical schema is now built on the isolated Hetzner
rehearsal host. This run did not copy production rows, identities or Storage
objects and did not change DNS or either cloud source.

## Applied state

| Item | Verified result |
|---|---:|
| Source commit | `f87dbf47e` |
| PostgreSQL | 17.6 |
| Recorded repository migrations | 101 |
| Public relations | 116 |
| Eshop relations | 40 |
| Auth users | 0 |
| Storage objects | 0 |
| Supabase services | 11/11 healthy |

Root-only evidence is stored on the host at
`/var/lib/festapp-rehearsal-evidence/canonical-schema-20260827T174339Z`.
The original pre-baseline schema snapshot from the first attempt is retained in
the immediately preceding evidence directory.

## Automation finding

The first execution applied the baseline completely, then stopped before the
migration ledger because `psql -c` does not expand the selected variable syntax.
No later migration or source row had been applied. Aggregate and sentinel checks
proved the exact resumable state: zero migration rows, zero Auth users, zero
Storage objects, the three terminal baseline relations present and 113/38
relations in `public`/`eshop`.

Commit `51206bb44` added a one-purpose resume gate and corrected ledger input;
commit `f87dbf47e` corrected PostgreSQL's textual boolean sentinel form. The
resume path accepts only that exact state and has no force, drop or overwrite
mode. It then applied every post-baseline migration and recorded all 101
repository migration versions.

## Capacity snapshot

Immediately after the migration run the 3.98 GB host had 2.16 GB available RAM,
24.22 GB available disk and no recent OOM event. Memory PSI was zero. CPU PSI
`some avg60` was 13.16%, which is recorded as a migration spike and is not a
steady-state pass; the defined acceptance measurement must be repeated after a
settled window and during realistic restore/merge load.

## Next gate

Generate a catalog inventory of this canonical target, classify the source
`default` and `a` differences against it, and prepare the reviewed logical
PG15-to-PG17 staging importer. Importing source rows remains a separate step and
must keep all production sources read-only.
