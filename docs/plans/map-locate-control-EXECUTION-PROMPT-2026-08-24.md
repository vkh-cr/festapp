# Execute: Standardní locate/recenter ovladač mapy

Work in `/Users/miakh/source/festapp` on canonical `main`.

Use the repository instructions and `verification: standard` recorded in the
plan. Do not run a local production Flutter build; native production artifacts
are built on the separate production workstation.

Implement the entire authoritative plan:

`docs/plans/map-locate-control-plan-2026-08-24.md`

Read it in full before editing. The outcome is one conventional, always
available locate/recenter control for every active Festapp map. A tap must obtain
one navigation-grade current position and center either Legacy or MapLibre
through the existing `MapViewportCoordinator`. Completion requires denied,
error, duplicate-tap and renderer-switch behavior, all translations, targeted
tests, and proof that no renderer-specific control, second persistent GPS stream
or direct concrete-controller bypass remains.

Execute the waves in dependency order using vertical TDD slices. Keep
`MapLocationAccuracy`, `MapPage`/the optional single locate coordinator, and
`MapViewportCoordinator` as the only policy, action and camera owners. Do not
add viewport polling, follow mode, platform branches, hardcoded tenant copy,
placeholders, speculative fallbacks or parallel implementations.

If current repository evidence invalidates a factual premise, update the
authoritative plan with that evidence before adapting the affected wave; do not
silently change the requested outcome. Run only the validation required by the
plan and repository rules. The final review required by the implementation
workflow must compare the completed diff against this plan and documented repo
standards.

Do not deploy Netlify/Cloudflare, create native production builds, mutate Google
Play/App Store state, or publish tenant overlays without separate authority.
At handoff report the canonical locate contract, exact callers changed, removed
bypasses, validation result, commit identity, and every unapplied production
step.
