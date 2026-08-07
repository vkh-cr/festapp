# Execute: canonical CSM PWA storage lifecycle and recovery readiness

Work in `/Users/miakh/source/festapp` and follow repository instructions with
`verification: standard`.

Read and execute the authoritative plan in full:

`docs/plans/2026-08-07_csm_storage_recovery_safety_plan.md`

Preserve all unrelated existing worktree changes. Execute the waves and commit
boundaries in dependency order. The architectural result must be a canonical
cutover, not coexistence:

1. one shared PWA resource-manifest module consumed by worker generation and
   the storage budget;
2. both Flutter and `web_client` entry points reporting exact build versions;
3. one service-worker reconcile function serving inspection, automatic
   maintenance and explicit guarded prune;
4. no production window path directly deleting `festapp-app-shell-*` and no
   obsolete parallel retention calculation;
5. a typed Flutter storage port whose adapters contain transport only;
6. one config-driven recovery-readiness composer reusing canonical target and
   client-sync health seams.

Retain exactly the current shell and shells referenced by live known clients.
Do not introduce permanent rollback-shell retention. Unknown clients, missing
live caches, timeouts and API errors must fail closed with zero deletion. Never
delete or inspect payloads from font cache, Sembast/IndexedDB, auth, cookies,
local/session storage, receipts or offline user data. Diagnostics must use
browser aggregate estimates and worker metadata, not read every cached response
body.

Treat `clearLegacyFlutterCaches()` only as the explicitly bounded pre-Festapp
compatibility adapter and localhost cleanup only as a development boundary.
Keep their guards and removal conditions visible. Replace tests for migrated
behavior at the deep interface; do not retain shallow tests or helpers that only
exercise deleted implementations. Finish with the reachability and absence
proof required by the plan.

Recovery code is read-only evidence collection. It must not accept arbitrary
SQL, expose secrets or row payloads, perform restore/DML/compaction, enable PITR
or imply that audit is an event-sourced backup. Record that database backups do
not include Storage objects and that isolated restore/clone and PITR remain
separately authorized operational decisions.

If repository evidence contradicts the plan, update the authoritative plan
with the evidence before adapting the implementation; never silently weaken a
preservation or single-owner invariant.

Run the targeted standard validation named by each wave, then the repository's
required direct-Cloudflare release checks only if a separate release request is
given. Do not use GitHub Actions. Do not commit, push, deploy, modify production,
enable PITR, restore data or delete real browser/production data without
separate explicit authority.

At handoff report: changed canonical seams, deleted obsolete paths, exact cache
deletion allowlist, measured core/known budgets, preservation and absence proof,
recovery limitations, validation results and every unapplied production
decision.
