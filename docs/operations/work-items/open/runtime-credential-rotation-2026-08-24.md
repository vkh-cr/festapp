# Work item: rotate exposed runtime credentials

Opened: 2026-08-24
Updated: 2026-08-28
Status: blocked
Verification: release

## Authoritative sources

- Cutover plan: [`../../../plans/unified-main-production-branches-cutover-plan-2026-08-23.md`](../../../plans/unified-main-production-branches-cutover-plan-2026-08-23.md)
- FestappSeed provisioning contract: repository `festapp-platform/FestappSeed`, commit `4e7adbdb`

## Outcome

Every credential formerly tracked in the three removed Supabase runtime env
files is replaced and revoked; provisioning uses FestappSeed without restoring
secret values to Festapp or Git.

## Fixed point

- FestappSeed removal/contract SHA: `4e7adbdbd30aa38bcaebdc4b6d308b9b3f8c4f9f`.
- Festapp boundary SHA: `5028473a466b7c318f0ca34c3ccb21e592a00203`.
- Secret rotation/revocation receipts: not yet recorded.

## Completed actions

- Tracked runtime env files were removed from FestappSeed HEAD.
- A versioned, tested provisioning contract and non-secret example were added.
- Festapp shared/tenant branches now document the external provisioning boundary.
- The OneSignal REST credential was removed from the Flutter organization model,
  editor and broad admin RPC contract. Migration
  `20260828110000_move_onesignal_credentials_server_side.sql` extracts existing
  values into a no-direct-grants server-only table, and delivery consumers use
  a service-role-only RPC. An isolated migration test moved 10/10 rows and left
  zero legacy JSON keys without recording any value.

## Next action

Using the authorized service consoles and FestappSeed process, inventory the
credential types from `supabase/aksmcz.env`, `supabase/festapp.env` and
`supabase/slunovratopava.env` without printing values; rotate each live value and
record only service, timestamp and revocation receipt.

For OneSignal specifically, provision the replacement only into the server-only
notification secret store, run notification plus account-deletion vendor
canaries, revoke the historical credential and prove its authentication fails.
Never put the replacement back into `organizations.data`.

## Remaining order

1. Provision replacements to every active consumer.
2. Verify replacement health without exposing values.
3. Revoke the historical values and verify denial.
4. Run a history-aware secret scan and close the incident ledger.

## Current blocker

Rotation requires authenticated external service access and destructive revocation authority.

## Authority gates

| Action | Required authority | State |
|---|---|---|
| Rotate and provision each service credential | Exact service/account and affected consumer confirmation | pending |
| Revoke historical credentials | Replacement health receipt and explicit revocation confirmation | pending |

## Rollback and recovery

- Keep old credentials valid only until replacement consumers pass health checks.
- Revocation is irreversible; recovery uses a newly issued credential, never restoration of the historical value.

## Definition of complete

- [ ] Every affected service has a replacement and healthy consumers.
- [ ] Every historical value is revoked and fails authentication.
- [ ] No secret value is present in current tracked files, logs or work items.
- [ ] Non-secret rotation receipts are recorded.
- [ ] This item is moved to `../completed/` and the index is updated.

## Operational log

| Date | Action | Receipt/evidence | Result |
|---|---|---|---|
| 2026-08-24 | Remove tracked runtime env files | FestappSeed `4e7adbdb` | HEAD clean; historical values still require rotation |
| 2026-08-28 | Remove OneSignal credential from client/admin JSON boundary | isolated server-only migration and SQL/Edge tests | code path complete; provider rotation and revocation still pending |
