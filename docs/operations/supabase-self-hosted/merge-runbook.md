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

## Isolated canonical-schema rehearsal

The already approved empty rehearsal host may build the repository-owned schema
without copying source rows. Transfer the current Festapp checkout to the host,
verify its commit, and run as root:

```bash
FESTAPP_REHEARSAL_ACK=canonical-schema-only \
  automation/hetzner-supabase/rehearsal/build-canonical-schema.sh
```

The builder refuses any hostname other than
`festapp-supabase-rehearsal-01`, any PostgreSQL major other than 17, and any
target that already has a business relation in `public` or `eshop`. It first
stores a root-only schema snapshot, applies the canonical baseline and only the
later repository migrations, and records aggregate evidence proving that Auth
and Storage still contain zero source rows. It never runs `supabase/seed.sql`.

If a migration fails, stop. Do not repair the partially applied target by hand
and do not add a force/overwrite mode. Recreate the empty rehearsal foundation
through the separately reviewed restore procedure, preserve the failed evidence,
then rerun the exact automated sequence.

## Empty private merge staging

After the canonical schema evidence passes, prepare the locked staging ledger:

```bash
FESTAPP_REHEARSAL_ACK=prepare-empty-private-merge-staging \
  automation/hetzner-supabase/rehearsal/prepare-merge-staging.sh
```

The script is additive and single-use. It refuses any host except the exact
rehearsal hostname, any PostgreSQL major except 17, a migration ledger other
than 101, non-empty Auth or Storage, or an existing `festapp_merge` schema. The
schema is inaccessible to `anon`, `authenticated` and `service_role` and starts
with zero rows.

Rows which cannot satisfy the canonical contract must be inserted into
`festapp_merge.quarantined_rows`, never silently discarded. A quarantined row
keeps the rehearsal run blocked until an explicit `repair` decision or an
`omit-with-ledger` decision names the checksum of private evidence. The two
known orphan `default.user_companions` rows therefore remain preserved and
blocked; this step does not import them or mutate either cloud source.

## Encrypted read-only source snapshot

Never write a plaintext production dump. Prepare a private `0700` output
directory outside the repository, provide the exact source database URL only in
the process environment, and encrypt the `pg_dump` stream directly to a native
age recipient or an existing SSH Ed25519 public key:

```bash
FESTAPP_SOURCE_DATABASE_URL='postgresql://...' \
FESTAPP_EXPORT_AGE_RECIPIENT='age1...' \
  node automation/hetzner-supabase/merge/export-source.mjs \
  default /private/evidence/default.dump.age
```

Repeat with alias `a` and that project's URL. The exporter accepts only the two
hard-coded approved project refs, requires TLS, keeps the password out of child
process arguments, refuses a group/world-accessible directory, never overwrites
an artifact, and writes a sibling `0600` checksum manifest. A failed stream is
preserved for diagnosis and must not be mistaken for a complete artifact because
it has no manifest.

For the rehearsal, use `rehearsal-export-clouds.mjs`. It creates a unique
one-hour export role separately in each approved project, grants only
read access to `public`, `eshop`, `auth` and `storage` plus `BYPASSRLS`, streams
both encrypted snapshots, and then sets the role to `NOLOGIN NOBYPASSRLS` and
revokes every temporary schema/table/sequence grant. It does not drop the
disabled role, so the run leaves an auditable non-destructive record.

```bash
node automation/hetzner-supabase/merge/rehearsal-export-clouds.mjs \
  /private/evidence/root ~/.ssh/id_ed25519.pub
```
