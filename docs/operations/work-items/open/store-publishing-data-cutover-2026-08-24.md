# Work item: complete store publishing data cutover

Opened: 2026-08-24
Updated: 2026-08-24
Status: blocked
Verification: standard

## Authoritative sources

- Architecture: [`../../../architecture/ai_context.md`](../../../architecture/ai_context.md)
- Public implementation branch: `cleanup/store-assets-private-cutover`
- Private owner: `rawen-dev/festappseed`, path
  `release/store-listings/csm-ostrava-2026`

## Outcome

Festapp contains reusable, fail-closed release tooling only. CSM Apple/Google
identity, metadata, screenshots, artwork and operational decisions have exactly
one owner: FestappSeed.

## Fixed point

- Private repository: `rawen-dev/festappseed` `main`; the exact consolidation
  SHA is recorded when its staged change is committed.
- Public base: `prod/csmostrava2026` at `4429055d1`.
- Public cleanup branch: `cleanup/store-assets-private-cutover`, at the commit containing this work item.

## Completed actions

- Canonical Apple and Google publishing assets are staged byte-identically in
  FestappSeed after credential-pattern and filename scans.
- The private manifest owns both bundle IDs, Android package, release branch and target version.
- Public release consumers now fail closed without the exact generic
  `FESTAPP_RELEASE_MANIFEST` pointer; no public script contains a tenant path.
- Public duplicate metadata, screenshots, artwork and app-specific manifests are removed on the cleanup branch.

## Next action

Wait for production Windows command `1027` to finish, then verify its signed AAB
receipt before changing the CSM production branch tip.

## Remaining order

1. Commit the reviewed FestappSeed consolidation.
2. Integrate the cleanup through `main`, then regenerate the CSM tenant branch deterministically.
3. Run release preflight with the FestappSeed checkout and prove no public duplicate/reachability remains.
4. Remove the superseded `festapp-release-internal` checkout only after its
   unique content and Git reachability are proven unnecessary.

## Current blocker

The Windows workstation has not yet returned command `1027`; advancing the CSM
branch first would invalidate the requested artifact provenance.

## Authority gates

| Action | Required authority | State |
|---|---|---|
| Festapp commit | Explicit user confirmation after staging | granted 2026-08-24 |
| Advance CSM production branch | Completed Windows command `1027` plus deterministic overlay gate | pending |

## Rollback and recovery

- Public deletions remain recoverable from Git and the dated local preservation snapshot.
- Private canonical data remains preserved in both the source repo and the
  staged FestappSeed copy until the FestappSeed commit is verified.

## Definition of complete

- [ ] All release consumers use the private manifest or public runtime config as appropriate.
- [ ] No app-specific store data remains reachable in Festapp HEAD.
- [ ] Cleanup is integrated through canonical main and tenant generation.
- [ ] Superseded worktrees/branches are removed.
- [ ] This item is moved to `../completed/` and the index is updated.

## Operational log

| Date | Action | Receipt/evidence | Result |
|---|---|---|---|
| 2026-08-24 | Source asset/config consolidation | source commits `0093ff0`, `fa666c0`, `dc93da5` | 95 files copied byte-identically into the designated FestappSeed owner |
| 2026-08-24 | FestappSeed validation | 7 provisioning tests plus filename/content credential scan | passed; commit awaiting explicit confirmation |
