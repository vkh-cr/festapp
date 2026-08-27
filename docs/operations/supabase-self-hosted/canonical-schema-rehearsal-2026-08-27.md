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

The canonical target catalog was captured after the build. Its private catalog
artifact has SHA-256
`3fb3aef680b5c8fb5769b2d50f7226878a3cbe98193781e6e3db652f3ae5d139` and
the normalized target schema fingerprint is
`574e6ed0d6f3a7e0afad597fec7b20246a7267592d0bdd9944f5f54cb2ffd042`.

The first three-way comparison produced an important blocker:

| Source compared with repository target | Application-schema differences | Platform differences |
|---|---:|---:|
| `default` | 2,075 | 623 |
| `a` | 171 | 637 |

This does not authorize choosing `a` as the canonical data source. It proves
that the current repository baseline is structurally much closer to source `a`
than to `default`, while the approved data identity still starts from
`default`. A naive native `default` schema restore would therefore overwrite or
conflict with a large part of the repository-owned target. The differences must
now be classified as source-only legacy, target expansion or semantic mismatch,
and `default` data must be imported through a reviewed schema boundary rather
than assuming schema equivalence.

Private comparison evidence is stored as `canonical-drift-v2.json`, report
SHA-256 `5cc0f559d8b80d27fb276f4171ee7a528eaa1bc54a6744902899716d222fc38e`.
Importing source rows remains a separate step and must keep both production
sources read-only.

## Logical table-import readiness

The table-level pass narrows the broad catalog drift to the data-bearing import
surface:

| Source | Application tables | Shape-compatible | Blocked transform | Review-only |
|---|---:|---:|---:|---:|
| `default` | 70 | 66 | 2 | 2 |
| `a` | 100 | 100 | 0 | 0 |

No source application table is missing from the target. Source `default` needs
explicit transformations for four `activities` rows because target `order` is
non-null, and for three `user_companions` rows because target `occasion` and
`origin` are required. The `inventory_pools.order` and `log_emails.data` source
columns require an explicit preserve/archive/drop disposition; they may not be
silently discarded. Source `a` is table-shape compatible for logical staging,
but FK, identity, unique-key and embedded-reference transforms remain mandatory.

Private readiness reports are
`default-table-import-readiness-v2.json` (SHA-256
`525978b01c6bdc6b3d2daecf0a7244685482dcd3f03d461aaa3f2f520acb2141`)
and `a-table-import-readiness-v2.json` (SHA-256
`e3ac7e3414e0d259a63af9092afd008d133742be2c6b154b4a54036575748a00`).

A read-only aggregate profile resolved three of the four default transform
families. All four `activities.order` values are non-null, all three obsolete
`inventory_pools.order` values are null, and all 3,882 obsolete
`log_emails.data` values are null. These rules are now fail-closed in
`default-transform-policy.json`.

The remaining blocker is two of three `user_companions` rows. One pair has
exactly one common occasion and can use the repository migration rule. The
other two pairs have no common occasion membership at all and are therefore
legacy orphan relations under the target FK contract. They require an explicit
repair-or-omit deletion-ledger decision; no UUID or identity is stored in Git
and no source row was modified. An earlier exploratory aggregate incorrectly
counted 7 and 42 owner memberships as common memberships; that evidence was
rejected and replaced by the exact inner-match histogram `{0: 2, 1: 1}`.
