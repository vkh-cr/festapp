# Client sync v1 implementation status — 2026-08-03

## Repository-complete work

- one public/private revision protocol, receipt/audit kernel and aggregate
  version store;
- immutable public artifact publisher, edge worker, local content-addressed
  store, atomic manifest activation, foreground polling and capability gate;
- public projections for occasion, program, map, content, unit and live state;
- private projections for program, profile (including companions), inventory,
  activities, news and feedback;
- permission-gated online commit history with keyset pagination and redacted
  details;
- typed command ports and explicit transactional RPCs for events, attendance,
  saved program, activities, map/icon, information/news, speakers/topics,
  groups/imports, profiles, cleaning, inventory pools/resources, occasion
  config, counseling, game guesses, exclusive groups and companions;
- unit-scoped receipts/commits with atomic catalog fan-out, plus receipted unit
  editing and occasion duplicate/delete lifecycle commands;
- stable anonymous-client feedback receipts and authenticated feedback
  revisions;
- shared private-profile/private-inventory completion helpers used by ticket
  imports, service deletion, spot assignment and product-context replacement;
- one transaction for combined news publication and notification-log enqueue;
- registry and contract checks that reject missing writer names, generic
  dispatchers, misplaced v1 mutation strings and public snapshot construction
  outside the shared finalizer.

Large public catalogs are not embedded into mutation receipts. Exact private
replacement receipts remain bounded: 4 MiB command data and 8 MiB complete
response, sized above the accepted activities/inventory DTOs and subject to the
release payload/load gate.

## Intentionally disabled

`get_app_config_v219` must keep `client_sync_v1` off while any registry row is
not `cutover_ready`. Five rows are intentionally `boundary`; their rationale
and release requirements are listed in [client-sync-v1.md](client-sync-v1.md).
No migration, worker, capability or configuration change from this work has
been applied to production.

## Validation boundary

Repository checks:

```bash
node automation/check_client_sync_registry.mjs
node automation/client_sync_preflight.mjs
fvm flutter test
```

The expansion migration can be syntax-parsed locally, but semantic SQL tests
require an isolated PostgreSQL/Supabase test database with the complete schema.
Do not point the SQL test runner at production. Release-only evidence still
includes production `pg_catalog`/grants and privileged-DML audit inventory,
Cloudflare/R2 provisioning, representative payload and concurrency load tests,
backup/restore proof, deployment, smoke and the atomic enablement decision.

## Validation recorded 2026-08-03

- complete Flutter suite: 283 tests passed;
- web client suite: 155 tests passed;
- sync publisher: 5 tests passed and TypeScript typecheck passed;
- sync edge worker: 3 tests passed and TypeScript typecheck passed;
- targeted Dart analyzer: no issues;
- registry check: 39 source rows, five explicit boundaries, no missing writer,
  generic dispatcher, misplaced v1 mutation string or structural materializer;
- repository preflight: passed in repo-only mode;
- PostgreSQL parser: expansion, ordered overlay migrations, contract test and
  changed source functions (17 files) parsed successfully;
- `git diff --check`: passed.

Parser success is not a substitute for executing the migration and pgTAP
contract against an isolated full-schema database.
