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

Auth continuity is a separate hard gate. Every imported user UUID and
`encrypted_password` value must match the fresh source snapshot exactly; hashes
must never be re-created or replaced with temporary passwords. Provider
identities, MFA records, sessions and refresh tokens must also reconcile with
zero missing or changed rows. Exercise password, OAuth and refresh-token login
canaries against the target before routing users. A mismatch for one account is
a no-go. Existing access-JWT continuity must be tested independently because a
JWT signing-key change can invalidate an already-issued access token even when
the password hash and refresh token are preserved perfectly.

### Client release contract

The release source remains on the cloud endpoint until a separately reviewed
tenant configuration changes it. A self-hosted client release must set all four
values together in `automation/project.conf`:

- `SUPABASE_URL=https://api.festapp.net` (or the isolated rehearsal origin);
- the matching public `SUPABASE_ANON_KEY`;
- a non-empty, never-before-released `PUSH_APP_GENERATION` so Flutter clears
  legacy ID caches before reading the new canonical database;
- an explicit `SUPABASE_AUTH_STORAGE_KEY` retained from the previous release.
  The stable key is intentional: the web client exchanges the preserved refresh
  token against the new Auth service before any rights or business query, then
  stores the newly signed access token under the same namespace.

Run `automation/apply_config.sh` in a clean release worktree and then run:

```bash
FESTAPP_RELEASE_MANIFEST=/private/path/config.json \
FESTAPP_CANONICAL_CUTOVER_RELEASE=1 \
  node automation/release/client_cutover_preflight.mjs --require-canonical-cutover
```

For a self-hosted release, the private manifest must contain a `backend` object
with `mode: "self-hosted"`, `releaseIntent: "canonical-cutover"`,
`supabaseOrigin`, `anonKeySha256`, `installationGeneration`, and
`authStorageKey`, the post-merge `organizationId`, plus `authSiteUrl`, the exact browser-first
`authRedirectUrls`, and `allowedWebOrigins`. Only the public origins, key
digest, generation, and storage namespace are recorded; the public key itself
is not copied into evidence.
The same object must contain `sessionTransition` with the fixed
`refresh-or-reauth` strategy, rejection of legacy access tokens after cutover,
local sign-out on a terminal refresh failure, explicit permission for the
source-a cohort to reauthenticate normally, and the SHA-256 of a private
refresh-canary evidence file. This contract is necessary because the two legacy
cloud projects used different HS256 secrets and their old tokens have no `kid`;
one canonical GoTrue endpoint cannot verify both access-token families without
reintroducing a second trust path. Imported refresh tokens are exchanged first.
Only `refresh_token_not_found` or `refresh_token_already_used` clears the local
session; network failures remain retryable and preserve offline identity.
The organization ID is equally mandatory because deterministic merge allocation
can remap it; carrying the cloud ID into a target client returns a semantically
valid HTTP 200 with the wrong organization or a 404.
Set `FESTAPP_CANONICAL_CUTOVER_RELEASE=1` for the web, Android and iOS release
builders. That flag rejects a syntactically valid legacy-cloud manifest. The
same preflight runs before compilation in all three builders. The completed web
bundle verifier additionally proves that the vanilla client, Flutter bundle,
and auth bridge contain the exact configured origin/key/namespace and no stale
Supabase Cloud origin.

For a signed iOS rehearsal artifact without an App Store mutation, run the
build-only path in a clean release worktree:

```bash
FESTAPP_RELEASE_MANIFEST=/private/path/config.json \
FESTAPP_IOS_SIGNING_DIR=/private/path/signing \
FESTAPP_CANONICAL_CUTOVER_RELEASE=1 \
  automation/release/ios_build_candidate.sh
```

It verifies bundle/version/certificate and artifact SHA-256 and contains no
upload implementation. Store upload and release remain separate approvals.

The native callback contract remains browser-first during this migration:
password recovery and transfer complete on the deployed HTTPS web origin.
Neither a Supabase hostname nor an unverified Android App Link is treated as a
native callback. Adding native Android/iOS callback routing is a separate public
contract requiring matching `assetlinks.json`, AASA, store builds, and device
proof; it is not silently enabled by the database cutover.

The public `send-reset-password-link` Function is deployed only after migration
`20260828090000_harden_password_reset_delivery.sql`. Its runtime must receive
`FESTAPP_ALLOWED_WEB_ORIGINS` equal to the manifest allowlist. The canonical
proxy must overwrite the client-IP forwarding headers and prevent direct-origin
bypass; the Function then enforces atomic 15-minute source and account limits,
returns non-enumerating responses, and writes reset tokens atomically.

## 2. Freshness gate

The encrypted exports produced during rehearsal are test inputs only and must
never be promoted as final production state.

1. Take fresh independent backups of both cloud sources.
2. Freeze schema/config changes.
3. Start the approved maintenance freeze or record the source journal position.
4. Before acquiring the final Auth snapshot, freeze or route the old web/Auth
   refresh traffic so it cannot rotate a cloud refresh token. This gate must be
   active before snapshot acquisition starts and remain active until target
   activation or rollback.
5. Produce a new encrypted `default` export with source assertion and manifest.
6. Produce a new encrypted `a` snapshot at a recorded journal position.
7. Import using the exact twice-rehearsed immutable transformation version.
8. Replay `a` changes through the idempotent forwarder until the applied
   position equals the final source marker.
9. Under the final write freeze, verify zero journal lag, zero dead letters,
   zero old-owner transactions and matching table/tenant/business invariants.

If a journal is not complete for every writer, replace steps 3–9 with a full
write freeze lasting through both exports, import, validation and endpoint
activation. A best-effort delta query is not an acceptable substitute.

The mode is fail-closed and is recorded twice, before snapshot acquisition and
again at the final marker. Run
`automation/hetzner-supabase/merge/cutover-mode-gate.mjs` with a private,
fresh evidence file and `--phase=pre-snapshot`, then with
`--phase=final-marker`. `journal-hybrid` is accepted only from a global writer
inventory with 100% journal coverage; the existing Flutter-only seam report can
never authorize it. `full-freeze` requires application, Auth refresh, Storage,
Functions, cron, webhook and manual writer lanes to be blocked, zero active
mutating source sessions, target writes and external effects disabled, and the
snapshot timestamp after both write and Auth-refresh freezes. The final-marker
gate additionally requires both source markers and passing conflict/FK
validation. Decision files are append-only private evidence outside Git; the
gate itself performs no production mutation.

For this migration, `full-freeze` is the selected production mode unless a new
global writer inventory later proves the stricter hybrid contract. The final
marker cannot be generated honestly before the real production freeze; passing
the synthetic gate tests is tooling proof, not cutover authorization.

## 3. Activation order

1. Keep target side effects disabled during import and replay.
2. Verify Auth, rights, orders/tickets/QR, finance, Storage, Realtime, Functions,
   images and per-tenant isolation against the final data.
   Verify notification credentials are absent from organization JSON/admin RPC,
   present only behind the service-role delivery-config RPC, and backed by a
   completed provider rotation/revocation receipt.
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
