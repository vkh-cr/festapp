# Execute: Kanonický polling sync, offline revize a distribuční cache

Work in `/Users/miakh/source/festapp` and obey repository instructions.

Implement the authoritative plan:

`docs/plans/offline-sync-revision-cache-plan-2026-08-02.md`

Read it in full before editing. Deliver one coordinated release for
`csmostrava2026`: additive revision/audit backend, immutable full-component CDN
publisher, read-only revision handshake, atomically committed scoped local
generations, one foreground polling coordinator, complete consumer cutover,
isolated private replacements and online-only `Admin → Změny`.

The canonical v1 design has no Realtime/Broadcast/websocket invalidation, no
entity delta journal, no tombstones and no page-level polling. A changed
component is replaced in full. The only client freshness mechanism is
`ClientSyncService` calling `get_client_sync_v1`: immediately on lifecycle
events and then from one jittered foreground timer. Keep the handshake
read-only and single-flight. Own successful mutations must update local state
from their authoritative RPC response without a second request.

Keep old RPC contracts unchanged for supported released clients. The transition
client selects legacy or v1 once at context bootstrap and never mixes them.
Treat legacy as a thin, measured external compatibility boundary with a deletion
ledger and later retirement gate—not as a second internal architecture or an
unplanned fallback.

Do not expose private data in CDN artifacts, cache authorization decisions,
create an offline mutation queue, use raw row JSON as audit diff, or let a
sync-relevant write commit without its revision metadata and redacted audit.
The audit is append-only, online-only and separate from snapshot publication.

Execute Waves 0–6 in dependency order inside one release and do not activate
partial components in production. Wave 0 evidence may amend factual premises,
but any architectural divergence requires updating the authoritative plan and
recording the reason. Do not perform Wave 7 contraction until usage telemetry
proves every retirement criterion.

Use factories, returned IDs/revisions, injected clocks and domain constants in
tests; do not hardcode production-like values or UI strings. Preserve all
user-owned working-tree changes and do not stage the unrelated untracked
Shorebird plan files.

Production DB migration, storage/CDN provisioning, scheduler changes,
capability activation, deploy, commit and push require explicit authority. Once
authorized, follow the single cutover runbook: backup/baseline, additive DB,
verified initial artifacts, complete transition client with capability off, one
release preflight and load gate, atomic `client_sync_v1` enablement, immediate
online/offline/reconnect/login/mutation/audit smoke, then monitoring and a tested
kill switch.

At handoff report: gained invariants, migrated consumers, polling/load results,
snapshot/privacy checks, audit coverage, exact compatibility boundary, deletion
ledger status, release validation, production telemetry/kill-switch state and
all remaining blockers.
