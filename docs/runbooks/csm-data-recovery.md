# CSM data recovery evidence and decision runbook

This runbook separates read-only incident evidence from every operation that
can change production. Start with:

```bash
node automation/release/recovery_readiness.mjs --pretty
```

The command resolves the project from `SUPABASE_URL` in
`automation/project.conf`, verifies the configured occasion in that same
project, and reports only backup metadata, fixed aggregate queries and existing
client-sync health. It accepts no SQL and performs no restore, DML, compaction,
PITR change or object read. A target mismatch or absence of a completed database
backup is a hard failure.

## Incident sequence

1. Preserve logs, timestamps, affected workflows and the first known bad/good
   observations. Avoid cleanup or repair until the evidence window is recorded.
2. Run recovery readiness and record the database backup/PITR inventory, audit
   coverage and client-sync health. Audit rows and receipts help bound and
   compare an incident; they are not an event-sourced backup and may not contain
   complete before/after values.
3. Select a backup or PITR point that precedes the incident. If PITR is disabled,
   explicitly accept the gap to the latest completed daily backup or obtain
   separate authorization to change the recovery product.
4. Prefer an isolated restore/clone into a new project when the backup type and
   plan support it. A clone is database-only; Auth settings, Edge Functions,
   secrets and other services require deliberate isolated configuration.
5. Before inspecting the isolated database, disable external-effect facilities
   such as `pg_cron`, `pg_net`, wrappers, webhooks and publisher jobs so the copy
   cannot call production systems.
6. Compare counts, time bounds and domain evidence against production. Do not
   expose user rows, order payloads, secrets or audit payloads in a readiness
   report.
7. Perform forward repair through canonical UI/RPC paths. Direct SQL is a
   separately authorized break-glass procedure, never an implied next step of
   this runbook.
8. Re-run client-sync and audit verification after an authorized repair.

## Recovery boundaries

Supabase database backups contain database data and Storage metadata, but not
the Supabase Storage object payloads themselves. R2 objects are also outside the
database backup. Both object stores need a separately owned inventory/backup,
retention and restore drill.

Restoring into the same project causes downtime and requires explicit production
authority. Enabling PITR, choosing its retention, doing an isolated restore or
clone, and setting the business RPO/RTO are separate operational decisions.
Nothing in the PWA storage release applies any of them.
