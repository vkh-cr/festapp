# Execute: CSM Ostrava Apple cutover remaining work

Work in `/Users/miakh/source/festapp`.

Read the repository instructions and `docs/architecture/ai_context.md`, then read
the authoritative remaining-work plan in full before editing:

`docs/plans/2026-08-03_csm_apple_cutover_remaining_work_plan.md`

Use its `standard` verification mode and execute waves in dependency order. This
is continuation work: preserve the substantial implementation already present
and reopen it only when the plan's current-state checks or wave validation finds
a concrete defect. The outcome is a reproducible iOS archive, validated use of
the finished screenshots delivered by their separate session, an operationally
isolated OneSignal audience, a genuinely created/
seeded/deleted disposable user, a proven live-JM-to-TestFlight-CSM upgrade, and a
manually gated release of existing Apple ID `6745415882`.

Completion requires closing every item in the plan's deletion ledger. Never
create a new App Store or OneSignal app, change `festapp.jm2025`, hand-edit
`GeneratedPluginRegistrant.m`, send an unfiltered CSM broadcast, tag subscriptions
only after login, delete on `GET`, use an existing/demo account for destructive
testing, restore automatic submission/release, recreate or visually revise the
screenshot session's deliverables, upload source/AI-concept images as final
screenshots, commit a `.p8`, or store its private-key body in an env file. Recover
the existing ASC key if possible, store it as a permission-restricted standalone
file, and persist only its ID, issuer and path in the gitignored release environment
file. Do not introduce placeholders, speculative fallbacks,
parallel deletion paths or compatibility aliases.

Preserve the dirty working tree. If current evidence invalidates a factual
premise, update the authoritative plan with that evidence and adapt the affected
wave without silently changing the outcome. Run only each wave's targeted
validation and repository-required gates; do not start an independent review or
subagent audit unless explicitly requested.

Do not apply production migrations, deploy Edge/web/email/OneSignal changes,
mutate App Store Connect, upload assets/builds, run a destructive production-like
user test, submit, release, commit or push without separate authority. At handoff,
report what was reused, the archive and OneSignal contracts, the disposable-user
deletion evidence, final screenshot state, removed legacy paths, validations and
every still-unapplied external step.
