# Execute: CSM Ostrava Android release from Windows

You are running in Windows 11. If Git is missing, install Git for Windows first.
Work in a fresh `C:\src\festapp` checkout of
`https://github.com/vkh-cr/festapp.git` on branch `prod/csmostrava2026`; if that
path already contains dirty work, preserve it and use a new directory/worktree.

After fetching the current remote tip, read all applicable `AGENTS.md`,
`docs/architecture/ai_context.md`, `CONTRIBUTING.md`, and then the complete
authoritative plan:

`docs/plans/csm-android-windows-release-plan-2026-08-06.md`

Execute the plan in order with `verification: standard`. The outcome is a
reproducible, signed CSM Ostrava Android App Bundle plus deterministic Google Play
metadata/screenshots and safe API automation for the existing package
`fstapp.jm2025`.

Pin exactly the repository-declared stack: Flutter/FVM 3.44.8, JDK 17, Android
API 36, NDK 28.2.13676358, Gradle wrapper 8.14, AGP 8.11.1, Kotlin 2.2.20 and
fastlane 2.237.0. Enforce tracked lockfiles; do not upgrade dependencies or
accept Android Studio migrations. Use the original upload keystore only and keep
all passwords, keystores, `android/key.properties` and Play service-account JSON
outside Git and output. Never ask for secrets in chat or print them.

If the original upload key or Play service-account access is unavailable, finish
all safe setup/scaffolding possible and stop at the exact blocker. Never generate
a replacement key, create a new Play app, change package identity, or use broad
permissions as a fallback. Read Play track version codes before choosing a build
code. Reuse the tracked Czech listing and final Google phone/tablet screenshots;
do not overwrite icon/feature graphic without exact approved assets.

Do not upload to an internal/draft track, commit/push new implementation, or make
any production Play change without separate explicit authority. Production must
remain a distinct exact-gated lane. If current repository evidence invalidates a
fact in the plan, update the plan with evidence without silently changing the
requested outcome.

At handoff report the source SHA, exact installed versions, lock hashes, package,
version, upload-certificate fingerprint, AAB/mapping/symbol paths and SHA-256,
validation results, Play read-only result, staged screenshot counts, and every
remaining owner/operational blocker.
