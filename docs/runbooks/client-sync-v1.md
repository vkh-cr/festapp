# Client sync v1 release and kill-switch runbook

The repository implementation is additive. Do not enable `client_sync_v1` until
all gates below are recorded for the target occasion.

## Release gate

Start with `node automation/check_client_sync_registry.mjs`. It verifies that
every registry writer exists in repository SQL, generic writer names are
absent, v1 mutation names stay inside typed command adapters, and structural
component materialization is reachable only through the shared finalizer.

## Known pre-activation blockers (repository state 2026-08-03)

The registry deliberately contains five `boundary` rows, so capability
activation cannot pass yet:

- `private_profile/public.occasion_users`: cancellation, account deletion and
  other cross-domain writers must advance every affected private scope.
  Ticket-profile import and service deletion are already receipted;
- the four `private_inventory` commerce sources (`spots`, `products`, product
  contexts and ticket-product links): order, form, blueprint, allocation, cron,
  duplication and cancellation roots must advance the affected users' private
  inventory revisions in their owning transactions. Spot-assignment batches
  and product-context replacement already use the shared transactional helper.

Unit-scoped receipts/commits, visible-occasion fan-out, occasion
duplicate/delete and anonymous/authenticated feedback are repository-complete
and no longer registry boundaries.

Do not mark these rows ready merely because their function names are known.
Each root needs a scope/owner resolver, lock-order test, exactly-one revision
effect and a measured production usage/retirement decision. The retained
cleaning-report handler and other legacy facades also require the supported
client usage gate before grants can be revoked.

1. Verify a restorable database backup and record the legacy request baseline.
2. Verify externally retained PostgreSQL privileged-DML audit events end to end.
   `pg_stat_statements` does not satisfy this gate.
3. Produce a supported-client writer inventory from Flutter, Edge/JS, SQL,
   cron and operational scripts. Every registry writer must be either routed
   through its named canonical command or tied to a measured external legacy
   contract with an owner and retirement condition. Force-upgrade every
   supported client that still performs direct PostgREST DML.
4. Verify from `information_schema.role_table_grants` and `pg_proc` that
   `anon`/`authenticated` have no direct DML path to canonical source tables.
   Record the query output with the release evidence; any unclassified grant or
   dynamically registered writer blocks the cutover.
   In the same reviewed transaction that records this evidence, mark every row
   of the latest `client_sync_component_sources` registry `cutover_ready=true`.
   `get_app_config_v219` otherwise keeps the capability off even if occasion
   configuration was changed accidentally.
5. Apply the expansion migration with its bounded lock and statement timeouts.
6. Deploy the publisher with one active instance, generate every required
   component, and verify immutable object SHA-256 and byte lengths. Supply
   `R2_BUCKET` and `SYNC_ASSET_ORIGIN` from the target deployment configuration;
   the publisher has no production bucket/origin fallback.
7. Deploy `sync-worker`, bind only `festapp-public`, attach
   `sync.festapp.net`, and verify ETag/304 plus zero Supabase subrequests.
8. Deploy the transition client with `client_sync_v1` off. Run privacy, 5,000
   client polling, offline cold-start, reconnect, identity-isolation and
   commit-audit gates.
9. Enable the capability for `csmostrava2026` in one atomic configuration
   change. Immediately smoke online/offline/resume/login/logout/mutation/audit.

## Monitoring

Monitor edge hit/304 and R2 read rates, public/live publication lag, projection
drift, private RPC latency/error/57014 and request rate, DB CPU/locks, CDN 404
and bytes, local atomic-commit failures, commit capture latency and legacy use
by platform/version.

## Kill switch

Disable `client_sync_v1` for new sessions. Do not delete additive schema or the
last verified artifacts. Active sessions finish on the mode selected at their
context bootstrap; require a context restart if an immediate switch is needed.

## Visibility contraction

When an occasion becomes hidden/private, stop publication, remove its public
head, delete its artifact prefix after the rollback window, and purge CDN
caches. A permanently offline copy cannot be revoked, so no private field may
ever enter an artifact.
