# Work item: complete store publishing data cutover

Opened: 2026-08-24
Updated: 2026-08-24
Status: blocked
Verification: standard

## Authoritative sources

- Architecture: [`../../../architecture/ai_context.md`](../../../architecture/ai_context.md)
- Public implementation: `main` commit `056740617a338d16de62d0327b02346e62a7d952`
- Private owner: `rawen-dev/festappseed`, path
  `release/store-listings/csm-ostrava-2026`

## Outcome

Festapp contains reusable, fail-closed release tooling only. CSM Apple/Google
identity, metadata, screenshots, artwork and operational decisions have exactly
one owner: FestappSeed.

## Fixed point

- Private repository: `rawen-dev/festappseed` `main` at
  `ae91a9cba4b91e3bfbebbe77e750f36638cd76bc`.
- Public generic cleanup: `main` at `056740617a338d16de62d0327b02346e62a7d952`.
- Tenant deletion source: `cleanup/store-assets-private-cutover` at `9e049fd58`.

## Completed actions

- Canonical Apple and Google publishing assets are committed byte-identically
  in FestappSeed after credential-pattern and filename scans.
- The private manifest owns both bundle IDs, Android package, release branch and target version.
- Public release consumers now fail closed without the exact generic
  `FESTAPP_RELEASE_MANIFEST` pointer; no public script contains a tenant path.
- Public generic consumers and overlay policy are integrated in `main`; duplicate
  CSM metadata, screenshots, artwork and app-specific manifests are removed on
  the tenant deletion source and await deterministic tenant regeneration.

## Next action

Wait for production Windows command `1027` to finish, then verify its signed AAB
receipt before changing the CSM production branch tip.

## Remaining order

1. Integrate the cleanup through `main`, then regenerate the CSM tenant branch deterministically.
2. Run release preflight with the FestappSeed checkout and prove no public duplicate/reachability remains.
3. Remove the superseded `festapp-release-internal` checkout only after its
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
- Private canonical data remains preserved in FestappSeed commit `ae91a9c` and
  the source repo until final duplicate/reachability proof is complete.

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
| 2026-08-24 | FestappSeed consolidation | `ae91a9cba4b91e3bfbebbe77e750f36638cd76bc`; 7 provisioning tests plus filename/content credential scan | committed; canonical private owner ready |
