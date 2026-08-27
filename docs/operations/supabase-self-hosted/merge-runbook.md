# Merge runbook

## Wave 0: read-only inventory

1. Create a private `0700` evidence directory outside the repository.
2. Run `inventory.mjs` for `default` and `a`; preserve each `0600` inventory and
   sibling evidence manifest. Inventory manifests remain blocked and unsigned
   until all evidence below is attached and the approved signing step runs.
3. Generate the schema drift report with `schema-fingerprint.mjs`.
4. Generate the read-only migration history report with
   `migration-history-inventory.mjs`. Treat history rows as provenance clues,
   not schema truth. If either source has missing, extra or renamed versions,
   do not apply a timestamp catch-up to production. Build the repository
   baseline in rehearsal and compare catalog effects instead.
5. Add provider metrics for 30/90-day database and Storage growth, WAL rate and
   peak connections. The catalog snapshot intentionally cannot infer history.
6. Complete the write-authority matrix for every client, Function, cron,
   webhook, payment/bank callback, image worker and manual script.
7. Perform the separately approved private identity/Storage collision pass.
   Never place identities, mappings or object listings in Git.
   Apply `resolve-auth-collisions.mjs` only when every collision is the approved
   verified-email/default-UUID case; any ambiguity remains a blocker.
8. Resolve every schema drift and collision, and assign an owner to every manual
   decision.
9. Select a source-compatible PostgreSQL major and pinned Supabase release.
10. Size DB, Storage, WAL, staging and restore workspace with at least 50% disk
   headroom after all are included.

Stop immediately on an unknown writer, source mismatch, unexplained schema drift,
unresolved collision or missing source credential.

## Wave 0 approval gate

Infrastructure provisioning is prohibited until all of these are attached to a
signed inventory manifest and explicitly approved:

- both source fingerprints and schema drift disposition;
- all-tenant write-authority matrix;
- table classification and embedded-reference registry;
- Auth/provider/MFA and Storage collision disposition;
- combined sizing, PostgreSQL major and runtime pin;
- RPO, RTO, cloud retention, DNS owner, secret owner and on-call owner;
- decision between journaled hybrid and full maintenance freeze.
