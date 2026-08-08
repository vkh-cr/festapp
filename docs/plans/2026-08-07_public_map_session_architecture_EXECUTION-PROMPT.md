# Execute: Kanonická orchestrace teplé veřejné mapy

Work in `/Users/miakh/source/festapp`.

Use the repository instructions in `AGENTS.md` and
`docs/architecture/ai_context.md`. Verification is `standard` because this
changes shared navigation, concurrency and production-facing map behavior.

Implement the entire authoritative plan:

`docs/plans/2026-08-07_public_map_session_architecture_plan.md`

Read it in full before editing. The target outcome is one retained public map
whose place intents are serialized by a single state machine, whose camera is
confirmed by actual renderer state, and whose Back/pop completion is identical
for warm and cold navigation from another route. Public navigation returns the
typed `MapVisitResult` defined by the plan, so origin reload occurs only for
`returned`. Completion requires migrating every public entry point and removing
every superseded artifact in the deletion ledger.

Treat this as a canonical cutover, not an additive refactor. Build and maintain
the plan's reachability matrix while executing: migrate all place/category/deep
link callers, split public and editor route identities, regenerate the router,
switch runtime registration once, then delete the old session, focus
coordinator, recursive route, nullable route args, URL writer, shallow tests and
misleading docs in the same coherent implementation series. Preserve only the
explicit external `/map`, `/map/:id` and query compatibility adapters; they must
translate into the one canonical intent path and contain no business fallback.

Start with Wave 1 characterization. Do not add another timer, post-frame
business transition, speculative camera retry, cold-map rollback, V2 session,
parallel focus path or compatibility fallback. If current evidence invalidates
a factual premise, update the authoritative plan with the evidence before
adapting the affected wave; do not silently change the requested outcome.

The cutover is not complete without single-flight activation, bounded
epoch-keyed retry, cancellation on Back/dispose/occasion switch, stale
camera/presentation suppression, one-host deep links, stable generated router
output, reachability proof and old-symbol/documentation absence proof.

Preserve all unrelated staged/worktree changes. Run only the validations named
by the plan and repository rules. Do not start an independent review or
subagent audit unless explicitly requested.

Do not deploy, commit or push without a new explicit authorization. At handoff,
report the canonical interface, migrated entry points, deleted legacy
orchestration, navigation/renderer test results, warm surface identity,
first/second focus behavior, Back behavior and any exact blocker.
