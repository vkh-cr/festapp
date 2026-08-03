# Client sync v1 release and kill-switch runbook

The repository implementation is additive. Do not enable `client_sync_v1` until
all gates below are recorded for the target occasion.

## Release gate

Start with `node automation/check_client_sync_registry.mjs`. It verifies that
every registry writer exists in repository SQL, generic writer names are
absent, v1 mutation names stay inside typed command adapters, and structural
component materialization is reachable only through the shared finalizer.

## Known pre-activation blockers (production state 2026-08-03)

The repository registry has 39 rows and no unresolved `boundary` disposition.
Ordinary-role direct DML grants are global across occasions, so they must not be
revoked while a supported legacy editor still depends on them. For the CSM 2026
cutover the owner confirmed on 2026-08-03 that only the auto-updated web client
has been released, so there is no unupgradable native legacy binary.

The owner also explicitly declined a paid external Supabase Log Drain on
2026-08-03. This is a conscious exception to the original external-retention
gate: hosted pgaudit write logging and source fingerprint reconciliation remain
enabled, but privileged audit evidence is not independently retained outside
Supabase. Use `--audit-risk-accepted`, not `--audit-gate-confirmed`, for this
specific cutover evidence.

1. Verify a restorable database backup and record the legacy request baseline.
2. Apply the expansion migration with its bounded lock and statement timeouts.
   It is additive and leaves the capability and every registry readiness row
   off.
3. Verify hosted PostgreSQL pgaudit write events. Prefer an externally retained
   drain; if the owner explicitly declines it, record the residual risk and use
   the guarded `--audit-risk-accepted` cutover confirmation.
4. Produce a supported-client writer inventory from Flutter, Edge/JS, SQL,
   cron and operational scripts. Every registry writer must be either routed
   through its named canonical command or tied to a measured external legacy
   contract with an owner and retirement condition. Force-upgrade every
   supported client that still performs direct PostgREST DML.
5. Run `node automation/release/client_sync_cutover.mjs`. Its default dry-run
   reports the target, registry, pgaudit configuration and remaining ordinary
   direct-DML tables without writing.
6. Deploy the publisher with one active instance, generate every required
   component, and verify immutable object SHA-256 and byte lengths. Supply
   `R2_BUCKET` and `SYNC_ASSET_ORIGIN` from the target deployment configuration;
   the publisher has no production bucket/origin fallback.
7. Deploy `sync-worker`, bind only `festapp-public`, attach
   `sync.festapp.net`, and verify ETag/304 plus zero Supabase subrequests.
8. Deploy the transition client with `client_sync_v1` off. Run privacy, 5,000
   client polling, offline cold-start, reconnect, identity-isolation and
   commit-audit gates. The private production-like handshake gate uses a
   legitimate, occasion-scoped test account without logging its token:

   ```bash
   FESTAPP_TEST_ACCESS_TOKEN='<session JWT>' \
     node automation/release/client_sync_private_load.mjs <occasion-id>
   ```

   The harness warms one complete private response, spreads 5,000 unchanged
   handshakes over 60 seconds, reports p50/p95/p99, and verifies that the test
   user's receipts, commits and private revision state did not change.
9. Run the reviewed cutover command with `--apply`, the applicable audit
   confirmation, the legacy-writer confirmation
   and `--confirm=<occasion-link>`. It derives the table set from the latest
   registry and atomically revokes ordinary DML, marks that registry ready,
   enables the configured occasion and verifies v219. Never replace these
   confirmations with a hardcoded production ID. Immediately smoke
   online/offline/resume/login/logout/mutation/audit.

## Monitoring

Monitor edge hit/304 and R2 read rates, public/live publication lag, projection
drift, private RPC latency/error/57014 and request rate, DB CPU/locks, CDN 404
and bytes, local atomic-commit failures, commit capture latency and legacy use
by platform/version.

## Kill switch

Disable `client_sync_v1` for new sessions. Do not delete additive schema or the
last verified artifacts. Active sessions finish on the mode selected at their
context bootstrap; require a context restart if an immediate switch is needed.
The guarded command is:

```bash
node automation/release/client_sync_cutover.mjs \
  --disable --confirm="$(sed -n 's/^FORCE_OCCASION_LINK=//p' automation/project.conf)"
```

## Visibility contraction

When an occasion becomes hidden/private, stop publication, remove its public
head, delete its artifact prefix after the rollback window, and purge CDN
caches. A permanently offline copy cannot be revoked, so no private field may
ever enter an artifact.
