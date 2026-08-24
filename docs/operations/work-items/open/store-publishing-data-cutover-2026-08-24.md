# Work item: complete store publishing data cutover

Opened: 2026-08-24
Updated: 2026-08-24
Status: blocked
Verification: standard

## Authoritative sources

- Architecture: [`../../../architecture/ai_context.md`](../../../architecture/ai_context.md)
- Public implementation branch: `cleanup/store-assets-private-cutover`
- Private owner: `festapp-platform/festapp-release-internal`

## Outcome

Festapp contains reusable, fail-closed release tooling only. CSM Apple/Google
identity, metadata, screenshots, artwork and operational decisions have exactly
one owner: the private release repository.

## Fixed point

- Private repository: `main` at `dc93da5`.
- Public base: `prod/csmostrava2026` at `4429055d1`.
- Public cleanup branch: `cleanup/store-assets-private-cutover`, at the commit containing this work item.

## Completed actions

- Canonical Apple and Google publishing assets are committed in the private repo.
- The private manifest owns both bundle IDs, Android package, release branch and target version.
- Public release consumers now fail closed without the exact generic
  `FESTAPP_RELEASE_MANIFEST` pointer; no public script contains a tenant path.
- Public duplicate metadata, screenshots, artwork and app-specific manifests are removed on the cleanup branch.

## Next action

Wait for production Windows command `1027` to finish, then verify its signed AAB
receipt before changing the CSM production branch tip.

## Remaining order

1. Integrate the cleanup through `main`, then regenerate the CSM tenant branch deterministically.
2. Run release preflight with the private checkout and prove no public duplicate/reachability remains.
3. Remove superseded local store-assets worktrees and branches.

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
- Private canonical data is preserved at `dc93da5`; a bad public integration can be reverted without changing store state.

## Definition of complete

- [ ] All release consumers use the private manifest or public runtime config as appropriate.
- [ ] No app-specific store data remains reachable in Festapp HEAD.
- [ ] Cleanup is integrated through canonical main and tenant generation.
- [ ] Superseded worktrees/branches are removed.
- [ ] This item is moved to `../completed/` and the index is updated.

## Operational log

| Date | Action | Receipt/evidence | Result |
|---|---|---|---|
| 2026-08-24 | Private asset/config consolidation | private commits `0093ff0`, `fa666c0` | private canonical owner complete |
| 2026-08-24 | Generic manifest contract | private commit `dc93da5` | paths/locales selected by manifest; no tenant constants in public tooling |
