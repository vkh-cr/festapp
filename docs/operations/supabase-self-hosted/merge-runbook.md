# Merge runbook

## Wave 0: read-only inventory

1. Create a private `0700` evidence directory outside the repository.
2. Run `inventory.mjs` for `default` and `a`; preserve each `0600` inventory and
   sibling evidence manifest. Inventory manifests remain blocked and unsigned
   until all evidence below is attached and the approved signing step runs.
3. Generate the schema drift report with `schema-fingerprint.mjs`.
4. Add provider metrics for 30/90-day database and Storage growth, WAL rate and
   peak connections. The catalog snapshot intentionally cannot infer history.
5. Complete the write-authority matrix for every client, Function, cron,
   webhook, payment/bank callback, image worker and manual script.
6. Perform the separately approved private identity/Storage collision pass.
   Never place identities, mappings or object listings in Git.
7. Resolve every schema drift and collision, and assign an owner to every manual
   decision.
8. Select a source-compatible PostgreSQL major and pinned Supabase release.
9. Size DB, Storage, WAL, staging and restore workspace with at least 50% disk
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
