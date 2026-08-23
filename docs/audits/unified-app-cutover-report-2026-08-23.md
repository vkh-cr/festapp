# Unified application cutover report — 2026-08-23

## Current state

The canonical main candidate is assembled in
`cutover/unified-main-prod-branches-20260823` from main
`d071cdd16be4e500b8c1fa16ac2ad070cbf60fe7`. It contains the retained shared
CSM and HM capabilities, tenant-neutral runtime contracts, main-owned overlay
policy, and the complete divergent-commit ledger.

No Festapp commit, push, production migration, deployment, store release,
backup-ref push, force push, or production write has been performed. The final
main, CSM, and HM SHAs do not exist yet because repository policy requires
explicit approval before the first commit. Production-branch cutover therefore
remains blocked on that approved main commit.

## Source results

- All 450 divergent commits are classified exactly once: 260 CSM and 190 HM.
- The original dirty CSM worktree remains untouched. Its external recovery
  snapshot is `/tmp/festapp-unified-cutover.p9Dm64`, including a tracked patch
  checksum and checksums for all 15 untracked paths.
- `main` is the sole owner of shared Flutter, web, SQL/RPC, Edge Function,
  worker, PWA, map, release-tooling, account-deletion, product-description, and
  order-agreement implementations.
- Tenant branches are constrained to the source paths in main-owned overlay
  manifests plus the exact generated write-set. Synthetic tamper tests reject
  shared-source drift, generated-output drift, policy replacement, and base-SHA
  spoofing.
- The historical `generate-hvezdamorska-agreement` source path and caller are
  absent. `generate-order-agreement` is the canonical endpoint and reads its
  tenant contract from `AGREEMENT_PDF` external-service configuration.
- The colliding CSM migration was preserved as the new idempotent forward
  migration `20260823120000_reconcile_reception_manual_login_code.sql`; main's
  historical `20260806142000_manage_occasion_users_permission.sql` remains
  unchanged.

## Verification evidence

| Gate | Result |
|---|---|
| Commit-ledger generation and exact coverage | pass, 450/450 |
| Tenant config matrix, idempotence, and cross-tenant checks | pass |
| Main-owned tenant drift and adversarial tamper fixtures | pass |
| Web client tests | pass, 165 passed / 0 failed |
| Web client production build | pass |
| Flutter tests | pass, 571 passed / 0 failed |
| Flutter web production build | pass; existing wasm dry-run warnings remain |
| Edge/Deno tests | pass, 80 passed / 0 failed, including DB integrations |
| Automation suite | pass, including private-input schema and PWA contracts |
| Disposable local database baseline and migrations | pass via temporary Colima runtime; 32 forward migrations applied |
| Database tests | pass, 76 passed / 0 failed |
| PowerShell parser/readback | skipped: `pwsh` unavailable; scripts were generalized and inspected |
| Production readback/deploy/release | pending separate authorization |

The Flutter suite initially exposed one CSM-specific expectation in the
canonical startup test. The test was made tenant-neutral and the full suite
then passed. The first database run exposed a later reception migration that
had narrowed the already-correct manager/admin QR contract; the forward
migration was reconciled with the canonical source, the disposable database
was rebuilt, the focused regression passed, and the complete 76-test DB gate
then passed. Colima was started only for this local gate and stopped afterward;
no remote database was used.

## External boundaries and blockers

- The FestappSeed locator and its approved secret-manager instructions were not
  available. No locator was guessed, no private value was copied into Festapp,
  and no cross-repository write was attempted. The public input and external
  service schemas are present in Festapp, but tenant provisioning/readback
  remains an explicit blocker.
- Required-check branch protection and other GitHub policy are external state.
  The workflow contains the main-owned drift job, but it must not be described
  as unbypassable until separately authorized external readback confirms branch
  protection.
- Production migrations in
  `unified-production-database-deployment-manifest-2026-08-23.json` are ordered
  and marked `apply: false`. They remain unapplied.
- The CSM and HM forward-only tree cutovers require the approved main commit as
  their base. Their final drift proofs and final branch SHAs are therefore
  pending.

## Next authorized transition

After the staged candidate is reviewed, obtain explicit approval for the main
commit. Only then create the main commit and construct each production branch
as the verified main tree plus its allowed overlay. Backup-ref pushes, branch
pushes, production deployment, database writes, and store releases each remain
separately authorized operations.
