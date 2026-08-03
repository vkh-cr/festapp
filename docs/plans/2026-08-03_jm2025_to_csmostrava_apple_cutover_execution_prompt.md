# Execute: JM 2025 → CSM Ostrava existing-App Apple cutover

Work in `/Users/miakh/source/festapp`.

Read `AGENTS.md`/repository instructions and `docs/architecture/ai_context.md`,
then read the authoritative plan in full before editing:

`docs/plans/2026-08-03_jm2025_to_csmostrava_apple_cutover_plan.md`

Use the plan's `standard` verification mode. Implement the waves in dependency
order. The target is a complete in-place update of existing Apple ID `6745415882`
and bundle ID `festapp.jm2025` to the visible product CSM Ostrava, including safe
existing-install migration, secure email-confirmed account deletion, accurate
privacy/legal surfaces, generation-targeted notifications, versioned store
artifacts, and gated release automation.

Completion requires both the canonical CSM behavior and removal or explicitly
bounded retention of every item in the plan's deletion ledger. Never create a
new App Store app, change the main bundle ID, delete on GET, reuse the legacy
`delete_user` RPC for self-service, log credentials/tokens/PII, leave an
unfiltered CSM push broadcast, or keep the monolithic auto-submit/auto-release
path. Do not introduce placeholders, parallel deletion implementations,
speculative fallbacks, compatibility aliases, or visible JM branding.

The worktree already contains substantial user changes. Preserve and integrate
with them; do not reset, overwrite or reformat unrelated work. If current
evidence invalidates a factual premise, update the authoritative plan with the
evidence and adapt the affected wave without silently changing the requested
outcome.

Run only the targeted validation required by the plan and repository rules. Do
not start an independent review or subagent audit unless explicitly requested.

Do not apply production migrations, deploy Edge/web/email/OneSignal changes,
mutate App Store Connect, upload a build or assets, submit for review, release,
commit, or push without separate authority. Treat legal approval, DSA/seller
verification, reviewer credentials and destructive disposable-account tests as
the explicit gates recorded in the plan.

At handoff, report the canonical contracts, existing-install migration,
first-/third-party deletion behavior, migrated callers/artifacts, deleted legacy
paths, validation results, retained compatibility boundaries and every exact
unapplied external or production step.
