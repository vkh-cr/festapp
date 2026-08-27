# Festapp self-hosted Supabase cutover runbook

This runbook is a fail-closed gate. Rehearsal completion does not authorize a
production cutover, DNS change, client activation or cloud deletion.

## 1. Release and writer adoption gate

Inventory every writer and reader: Flutter mobile builds, App Store and Google
Play releases, web tenants, admin surfaces, Edge Functions, cron jobs, payment
and bank callbacks, e-mail/image workers and manual scripts. For each entry,
record its deployed version, canonical endpoint capability, write path, owner
and rollback behavior.

Before cutover:

- approved iOS and Android builds must be published with canonical endpoint
  support before the migration window;
- the enforced minimum version must exclude every build that could write to an
  obsolete endpoint or bypass the journal;
- old builds may remain only if telemetry proves they are compatible and either
  read-only during the window or use the covered journaled RPC path;
- every web/admin/Function/worker deployment must be pinned and staged with the
  same endpoint contract;
- store approval alone is not adoption evidence: active-version telemetry and
  direct-DML telemetry must both pass;
- any unknown writer, unsupported active build or direct-DML bypass is a hard
  no-go. Choose a full maintenance freeze if journal coverage cannot be proven.

## 2. Freshness gate

The encrypted exports produced during rehearsal are test inputs only and must
never be promoted as final production state.

1. Take fresh independent backups of both cloud sources.
2. Freeze schema/config changes.
3. Start the approved maintenance freeze or record the source journal position.
4. Produce a new encrypted `default` export with source assertion and manifest.
5. Produce a new encrypted `a` snapshot at a recorded journal position.
6. Import using the exact twice-rehearsed immutable transformation version.
7. Replay `a` changes through the idempotent forwarder until the applied
   position equals the final source marker.
8. Under the final write freeze, verify zero journal lag, zero dead letters,
   zero old-owner transactions and matching table/tenant/business invariants.

If a journal is not complete for every writer, replace steps 3–8 with a full
write freeze lasting through both exports, import, validation and endpoint
activation. A best-effort delta query is not an acceptable substitute.

## 3. Activation order

1. Keep target side effects disabled during import and replay.
2. Verify Auth, rights, orders/tickets/QR, finance, Storage, Realtime, Functions,
   images and per-tenant isolation against the final data.
3. Switch server-side writers, callbacks and workers to the canonical endpoint.
4. Activate the already-published client configuration/minimum version.
5. Switch the Cloudflare front door only after origin health and credentials
   pass; Cloudflare does not become the relational write path.
6. Enable target side effects and run synthetic plus real canaries with receipt
   checks.
7. Open writes only after the final marker, validation and canaries pass.

## 4. Stop and rollback boundary

Stop before activation on any non-zero lag, dead letter, unresolved conflict,
orphan FK, missing Storage object, Auth outage, unsupported active client,
duplicate external effect, capacity breach or unknown writer.

Before target writes open, rollback means restoring routing to the still-frozen
cloud source. After target writes open, the target remains the single owner and
recovery uses target restore/forward repair; cloud writes must not be reopened.
Both clouds remain read-only for the approved retention window. Nothing is
deleted without a later explicit destructive approval and completed deletion
ledger.
