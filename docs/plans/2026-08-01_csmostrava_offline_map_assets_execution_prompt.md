# Execute: Offline vektorový podklad CSM Ostrava 2026 s veřejným R2 odkazem

Execution update (2026-08-01): the user subsequently and explicitly authorized
the direct production DB activation and required JM2025-equivalent
`forceOfflineMap=true`. This overrides this prompt's earlier canary and
Occasion-Settings-only gates for occasion 643 only; all other scope and safety
constraints remain in force.

Work in `/Users/miakh/source/festapp`.

Use all applicable repository instructions and `verification: standard` from
the authoritative plan:

`docs/plans/2026-08-01_csmostrava_offline_map_assets_plan.md`

Read it in full before editing. The outcome is a reproducibly built OSM
Shortbread MBTiles extract for the current `csmostrava2026` places and routes,
plus a validated immutable asset set ready for `assets.festapp.net`. Completion
requires the build/manifest contract, a user-approved interactive local browser
preview before any upload, bounded repository changes, public R2 asset
validation, exact occasion configuration, and successful Android+iOS cold-start
airplane-mode acceptance. PWA support and downloader refactoring are out of
scope; do not describe the local VersaTiles/MapLibre preview as Festapp Web
offline support.

Execute waves in dependency order. Do not leave placeholders, overwrite an
existing versioned R2 key, use Supabase or `img.festapp.net` as a parallel
hosting path, commit generated MBTiles, or bypass Occasion Settings with direct
SQL. Preserve all unrelated dirty-worktree changes. If current evidence
invalidates a factual premise, update the authoritative plan with the evidence
before adapting the affected wave; do not silently broaden the outcome.

Run only the validation required by the plan and repository rules. Do not start
an independent review or subagent audit unless explicitly requested.

Do not create/configure Cloudflare infrastructure, upload remote objects,
change the live occasion, commit, push, or activate `forceOfflineMap=true`
without separate user authority for the applicable step. At handoff, report the
asset contract, bounds/size/checksums, preview URL and approval state,
validation results, repository files changed, and every exact unapplied
production action or blocker.
