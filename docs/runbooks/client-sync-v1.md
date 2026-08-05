# Client sync v1 production runbook

`client_sync_v1` / protocol 1 is the only client-sync path. Public clients read
`sync.festapp.net`; immutable payloads live under
`assets.festapp.net/client-sync/v1/`. The public Worker uses Cache API with a
canonical GET key and a five-second TTL. A cache hit, including a matching ETag
304, performs no R2 read.

## Read-only health and preflight

```bash
node automation/check_client_sync_registry.mjs
node automation/client_sync_preflight.mjs
node automation/release/client_sync_health.mjs --pretty
node automation/release/configure_client_sync_publisher_schedule.mjs --status
node automation/release/client_sync_cutover.mjs
```

The target project comes only from `SUPABASE_URL` in
`automation/project.conf`; the configured occasion link must exist there.
Health fails on registry/revision lag, dirty work older than two ticks, claims
older than their lease, live p95 above 25 seconds, structural p95 above 45
seconds, projection drift, stuck receipts, invalid current hashes or a pending
head.

## Publisher and scheduler

`ClientSyncPublisher.runOnce()` is the sole publisher. Its adapters are the
authenticated internal HTTP tick, the one-minute Cloudflare recovery tick and
authorized `npm run once`. The five-second named Supabase cron first performs
an indexed dirty-key `EXISTS` restricted to `SYNC_SCOPE_IDS`; an empty queue
causes no HTTP request. The wake endpoint and bearer token live in Cloudflare
secret/Vault, never repository vars or output.

Configure through `configure_client_sync_publisher_schedule.mjs`. It is
dry-run/read-only by default; apply and disable require the configured occasion
confirmation. Rotate the wake token Cloudflare first, Vault second, verify a
tick, then remove the old value. Never expose an unauthenticated fallback.

## Occasion lifecycle

`automation/release/client_sync_cutover.mjs` is the only enable/disable seam.
Create and duplicate force the flag false; save preserves the server flag;
enabled occasions cannot be hidden or deleted.

Enable order is preflight, audited full build, canonical publication,
protocol/hash/head verification, then flag true. Disable order is exact mutable
R2 head deletion, observed endpoint 404 after the bounded edge TTL, then flag
false. Any earlier failure leaves the flag true.

## Projection repair and retention

Health detects drift but never repairs it. The hardening migration contains one
generic audited rollout repair. Future repair is a separately reviewed forward
operation; do not add triggers or silent reconciliation.

`ClientSyncRetention.runOnce({apply})` is daily maintenance, not publication.
`SYNC_RETENTION_APPLY=false` is the default. Artifact age has one explicit
setting, `SYNC_ARTIFACT_RETENTION_DAYS`; candidate lookup and metadata recheck
use the same cutoff, with the plan's safety floor enforced in SQL. Current
descriptors, current/previous manifests and young objects are protected. Only
exact `client-sync/v1/` keys may be deleted; never use a bucket-wide lifecycle.

Completed mutation responses retain exact replay for 30 days, then become
permanent response-less `expired` tombstones returning deterministic 410. The
operational setting is `SYNC_RECEIPT_RETENTION_DAYS` and SQL enforces its safety
floor. Do
not enable first artifact deletion or first receipt compaction before their
observation windows and separate approvals.

## Rollout and rollback

Order: cache Worker, bounded client store, publisher with retention disabled,
secret/custom domain provisioning, forward migration/repair, five-second
scheduler, 24-hour observation, authorized load gate, delayed retention.

Rollback is forward-only: disable the exact cron for minute fallback, set
retention apply false, or roll back only the serving Worker code. Guarded
disable removes discovery. Never regress an R2 pointer; correct data with a
higher revision. Deploys, migrations, DNS/secrets, scheduler activation, 5k
tests, first deletion and first compaction each need separate authority.
