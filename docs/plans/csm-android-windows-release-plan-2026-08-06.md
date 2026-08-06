# CSM Ostrava Android release from a fresh Windows workstation

Date: 2026-08-06
Status: Ready for execution
Verification: standard

## Outcome

A fresh Windows 11 workstation can reproduce the CSM Ostrava Android toolchain,
check out the canonical `prod/csmostrava2026` branch, build a signed release AAB
for the existing Google Play application `fstapp.jm2025`, and stage the already
approved Czech listing text and phone/tablet screenshots for an inspectable
Google Play upload.

The observable end state is:

- source provenance, tool versions, dependency lock hash, AAB hash, signing
  certificate fingerprint and validation results are recorded;
- the AAB is signed by the existing upload key and targets the existing package;
- Google Play API access can read the existing application and track version
  codes through a least-privilege service account;
- release automation can validate or prepare an internal/draft edit, but cannot
  create a new app or publish production without a separate explicit gate;
- canonical Google phone and tablet screenshots are staged from tracked files,
  not recaptured or regenerated.

## Scope

### In scope

- Native Windows setup for Git, Flutter/FVM, Android Studio/SDK, JDK, Gradle,
  Android NDK, Ruby/Bundler and fastlane.
- Safe checkout/update of `origin/prod/csmostrava2026`.
- Reproducible Dart/Flutter packages through tracked `pubspec.lock`.
- Existing Android upload-key integration through ignored
  `android/key.properties`.
- Signed release App Bundle build, identity/signature inspection and hashes.
- Read-only Google Play API preflight and current version-code discovery.
- Repository-owned fastlane Android lanes and deterministic Play metadata staging.
- Existing Czech listing copy and approved Google phone/tablet screenshots.
- A separately gated internal/draft upload command and a separately gated
  production command.

### Out of scope

- Creating a new Google Play application or changing package identity.
- Generating or rotating the existing app's upload/app-signing key.
- Publishing, promoting, staged rollout or production release without separate
  explicit user authorization.
- Backend/database/OneSignal deployment, iOS release work or Shorebird rollout.
- Recreating screenshots, using AI-generated store art, or silently replacing an
  existing Play icon/feature graphic.
- Committing the unrelated local map/bootstrap work that was dirty during this
  plan's reconnaissance.

## Constraints

- Read `docs/architecture/ai_context.md`, `CONTRIBUTING.md` and applicable
  `AGENTS.md` before changing repository files.
- Use `fvm` for every Flutter/Dart project command.
- The canonical branch is `prod/csmostrava2026`; do not substitute `main`,
  `prod/hvezdamorska`, a backup branch or an old CSM recovery branch.
- Do not destroy or overwrite an existing dirty checkout. Use a fresh directory
  or a new worktree and report the source SHA.
- Preserve `ANDROID_APPLICATION_ID=fstapp.jm2025`. The historical identifier is
  the existing external store identity, not stale visible branding.
- Pin the repository-declared toolchain. Do not accept Android Studio migration
  prompts that rewrite Gradle, AGP, Kotlin, SDK or project DSL versions.
- The upload keystore, its passwords, `android/key.properties` and the Google
  service-account JSON stay outside Git and must never be printed in logs/chat.
- The existing upload key and Google Play API credential are independent. Both
  are required for automated publishing, but neither can replace the other.
- First-time setup requiring Play Console/Google Cloud owner actions is a user
  gate. Codex may guide and verify it; it must not widen permissions itself.
- Google Play mutations are operational actions. Read-only inspection is allowed;
  internal/draft upload and production release need distinct authorization.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| Canonical release branch was pushed through app commit `3b0ad025c`. | `git push origin prod/csmostrava2026` on 2026-08-06 moved the remote from `c1d4e209b` to `3b0ad025c`; this plan/lock commit is intentionally layered above it. | Windows must fetch the current remote tip and record its exact SHA before setup/build. |
| The product identity and version are CSM `0.19.85+417`. | `automation/project.conf`: `APP_NAME`, `VERSION`, `ANDROID_APPLICATION_ID`, `FORCE_OCCASION_LINK`; matching `pubspec.yaml`. | Build must refuse another package ID and must query Play before deciding whether build code 417 is uploadable. |
| Flutter is pinned to 3.44.8. | `.fvmrc`; `.github/workflows/deploy.yml`; local `fvm flutter --version` reported Flutter 3.44.8 / Dart 3.12.2. | Install/use exactly 3.44.8; do not upgrade to latest stable. |
| Android build versions are pinned. | `android/settings.gradle`: AGP 8.11.1, Kotlin 2.2.20; `android/gradle/wrapper/gradle-wrapper.properties`: Gradle 8.14; `android/app/build.gradle`: NDK 28.2.13676358. | Install matching SDK/NDK and let the wrapper supply Gradle. |
| Flutter 3.44.8 resolves Android API levels 36/36/24 and NDK 28.2.13676358. | `FlutterExtension.kt` in the pinned SDK: compileSdk 36, targetSdk 36, minSdk 24, NDK 28.2.13676358. | Install Android platform 36, build tools 36.x, platform tools, command-line tools and the exact NDK. |
| AGP 8.x requires JDK 17; AGP 8.11 requires at least Gradle 8.13. | Official Android JDK and AGP compatibility documentation; repository wrapper is 8.14. | Use Android Studio's bundled JBR/JDK 17 or another verified JDK 17; do not use Java 8/11/21 opportunistically. |
| Release signing expects a private local keystore configuration. | `android/app/build.gradle` loads `android/key.properties`; `android/.gitignore` excludes it and `*.jks`. No Android keystore is tracked. | A signed release cannot complete until the owner securely supplies the original upload key and passwords. |
| Exact Flutter packages were previously local-only. | Root `.gitignore` ignored `*.lock`; local `pubspec.lock` existed. `fvm flutter pub get --enforce-lockfile` passed on 2026-08-06 with SHA-256 `ad9a763315eac43c2f8921e5e20e1f202b2676abfdb51bc34f135ec84a3aaf62`. | Track this lock and use `--enforce-lockfile`; dependency upgrades are not part of release setup. |
| No Android Play release wrapper exists. | `automation/release` contains mature Apple fastlane lanes; repository search finds no Android `upload_to_play_store`/`supply` lane. | Add narrow Android lanes without weakening or duplicating Apple gates. |
| Google Play listing text is already tracked. | `automation/release/fastlane/metadata/googleplay/cs-CZ/{title,short_description,full_description}.txt`. | Stage these exact texts instead of pulling/rewriting copy. |
| Final Google screenshots are already tracked and documented. | `repo-data/store-screenshots/csm-2026/final/google-phone` (7 PNGs), `final/google-tablet` (6 PNGs), `final/manifest.json`, and the screenshot README. | Stage phone screenshots plus the same tablet set for 7-inch and 10-inch Play categories; verify dimensions/hashes before upload. |
| Approved icon/feature-graphic source is not established in the repository handoff. | `automation/release/fastlane/metadata/STORE_LISTING.md` says the Google icon/banner/logo remain on external Google Drive. | Do not overwrite current Play icon/feature graphic until exact approved assets are supplied and verified. |
| Google recommends a service account for server-to-server Publishing API access. | Official Google Play Developer API getting-started documentation. | Create/enable/invite a least-privilege account and keep JSON outside the repository. |

Representative flow:

`origin/prod/csmostrava2026` → exact clean checkout → pinned FVM/Flutter and
Android SDK/JDK → enforced `pubspec.lock` → original upload-key preflight →
signed `flutter build appbundle` → package/signature/hash inspection → read-only
Play identity/version inspection → deterministic metadata staging → separately
authorized internal/draft upload → separately authorized production action.

## Target architecture and invariants

### Canonical owner and contract

The repository owns tool/version declarations, release preflights, metadata
sources and upload gates. Windows-local secret storage owns the upload keystore,
passwords and Play service-account JSON. Google Play owns the immutable listing,
app-signing key, tracks and release state.

The release entry point should be an idempotent PowerShell wrapper under
`automation/release/` plus Android fastlane lanes in the existing release
configuration. Inputs are source SHA, expected branch, canonical version,
upload-key location, Play credential location and requested non-production or
production operation. Outputs are an AAB, mapping/native-symbol artifacts, a
manifest of hashes/versions, and an explicit API/build result. Failures are
fail-closed identity, signing, version, credential, dirty-tree and permission
errors.

### Invariants

1. Every AAB has application ID exactly `fstapp.jm2025`.
2. Every uploadable AAB is signed by the existing upload certificate; a newly
   generated key is never accepted as fallback.
3. Flutter is 3.44.8; Gradle is 8.14; AGP is 8.11.1; Kotlin is 2.2.20; JDK is
   17; compile/target SDK are 36; min SDK is 24; NDK is 28.2.13676358.
4. `pubspec.lock` is tracked, unchanged during release resolution, and enforced.
5. The selected version code is strictly greater than every relevant Play track
   code and matches recorded release provenance.
6. A clean checkout of the current canonical branch is used; no backup/recovery
   branch or unrelated dirty source enters the bundle.
7. Play API access resolves the existing package before any write.
8. Metadata staging is generated only from tracked canonical text/screenshots.
9. No secret content is committed, echoed, copied to artifacts or included in
   Codex transcripts.
10. Production publish/promotion requires a separate exact confirmation and is
    not implied by setup, build, credential validation or internal upload.

### Entry points and forbidden bypasses

- Intended: `automation/release/android_release.ps1` for setup preflight/build;
  `bundle exec fastlane android play_check` for read-only inspection; a gated
  `play_internal_draft` lane; a separately gated production lane.
- Forbidden: direct `gradlew publish`, an unguarded `supply` invocation, a lane
  defaulting to production/completed, `fastlane init` overwriting current Apple
  release files, debug signing, a new keystore, or manual upload before identity,
  version and certificate checks.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** Use a fresh native Windows checkout and FVM 3.44.8; no WSL is needed for
  the Android build.
- **D2:** Pin every repository-declared tool version and reject automatic upgrade
  suggestions during this release.
- **D3:** Track the verified root `pubspec.lock`; package upgrades are separate
  work.
- **D4:** Build an Android App Bundle, not an APK, because Play prefers AAB and
  the current Gradle config already defines release signing.
- **D5:** Reuse the existing upload key only. If unavailable, stop after unsigned
  environment/build preflight and report the blocker.
- **D6:** Use a dedicated least-privilege service account JSON outside Git for
  local Play automation. Prefer workload identity later for CI; do not place a
  long-lived JSON key in GitHub secrets unless explicitly designed and approved.
- **D7:** Add Android lanes to the established fastlane release surface, pinned
  through Bundler/`Gemfile.lock`; do not run interactive `fastlane init`.
- **D8:** Default Play write automation to an internal-track draft/non-completed
  state. Production is a separate lane with exact package/version/track
  confirmation.
- **D9:** Reuse the tracked Google phone/tablet images and Czech text. Do not
  upload icon/feature graphic until the approved external files are available.

### Assumptions

- **A1:** The current lock and source compile on Android under the pinned stack;
  impact if false: toolchain setup succeeds but release build needs a focused
  code/dependency fix; resolve by: first clean signed `fvm flutter build
  appbundle --release` on Windows without upgrading anything.
- **A2:** `fstapp.jm2025` is still the package of the existing Play listing;
  impact if false: upload could target the wrong product; resolve by: read-only
  API/Play Console identity check before signing/upload.
- **A3:** Build code 417 is not necessarily free on Play; impact if already used:
  Play rejects the AAB; resolve by: read all relevant track codes and choose a
  strictly greater canonical build number, then update `automation/project.conf`
  and run `automation/apply_config.sh` before committing/building.
- **A4:** The owner can obtain the original Android upload keystore and
  credentials; impact if false: existing-app upload is blocked; resolve through
  the documented Play upload-key reset/recovery process, never local key
  regeneration disguised as success.

### Blockers

- **B1:** Original Android upload keystore, alias and passwords must be supplied
  securely by the owner; they are intentionally absent from Git.
- **B2:** A Play Console/Google Cloud owner must enable the Google Play Developer
  API, create a service account, invite it to the existing app with minimum
  required app permissions, and securely provide the JSON credential (or choose
  an approved workload-identity design).
- **B3:** Current maximum Play version code is unknown until B2 permits read-only
  inspection.
- **B4:** Exact approved Google Play icon/feature graphic remain external. Existing
  listing graphics must be retained until those files are supplied.
- **B5:** Local map/bootstrap edits present on the planning Mac were not committed
  or pushed; they are not part of the remote Windows release source unless the
  owner separately finishes and commits them.

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| Root `*.lock` exclusion for `pubspec.lock`/`Gemfile.lock` | Prevents reproducible dependency handoff. | Retain generic ignore but add exact exceptions and track both release locks. | `git check-ignore` does not ignore either lock; clean checkout has both. |
| Ad-hoc direct Flutter/Gradle release commands | Easy to bypass identity/version/signing gates. | Replace as documented release entry point with the guarded PowerShell wrapper. | Release docs name only the wrapper; wrapper exercises all preflights. |
| Any future unguarded Play production lane | Could publish immediately. | Keep absent; production lane must require exact confirmation. | Source search plus negative lane invocation without confirmation. |
| Duplicate/generated Play staging tree | Could drift from approved assets. | Generate into ignored `build/release/google-play-metadata`, never hand-edit. | Clean rebuild matches manifest and leaves Git clean. |

## Implementation waves

### Wave 1 — Canonical source and reproducible dependency contract

**Goal**

Start from the current remote CSM branch in a clean directory and make exact
Flutter/Ruby dependency locks part of the release contract.

**Changes**

- Install Git if absent; clone `https://github.com/vkh-cr/festapp.git` directly
  at `prod/csmostrava2026`, or fetch that branch in an existing clean clone.
- Refuse to discard dirty state. Use a new directory/worktree when necessary.
- Record `git rev-parse HEAD`, `git status --porcelain`, remote URL and branch.
- Ensure `pubspec.lock` is tracked and passes `fvm flutter pub get
  --enforce-lockfile` without modification.
- Add root `Gemfile` pinned to fastlane 2.237.0 and a cross-platform
  `Gemfile.lock` including the Windows platform; do not update Apple release
  behavior.

**Migration/deletion**

- Remove release reliance on ignored/local-only package resolution.

**Failure and compatibility**

- If the remote branch has advanced, fetch and use the new current tip, then
  recheck declarations rather than resetting to the reconnaissance SHA.
- If an existing clone is dirty, do not stash/reset automatically.

**Validation**

- `git status --porcelain` — empty at the build fixed point.
- `git branch --show-current` and `git rev-parse origin/prod/csmostrava2026` —
  exact branch and remote parity.
- `fvm flutter pub get --enforce-lockfile` followed by a clean lock diff.

**Exit condition**

The source SHA and both lockfiles are reproducible from a clean clone.

### Wave 2 — Exact Windows Android toolchain

**Goal**

Install the pinned build stack without repository migrations.

**Changes**

- Install current Git for Windows and Android Studio through trusted installers.
- Install a bootstrap Flutter SDK in a user-writable path without spaces only as
  needed to activate FVM; install/use Flutter 3.44.8 from `.fvmrc` afterward.
- Use Android Studio's bundled JBR/JDK 17 (or a separately verified JDK 17) and
  set Flutter/Gradle to that JDK.
- Through SDK Manager/`sdkmanager`, install command-line tools, platform tools,
  `platforms;android-36`, matching 36.x build tools and
  `ndk;28.2.13676358`; accept licenses interactively.
- Let `android/gradle/wrapper/gradle-wrapper.properties` download Gradle 8.14.
- Install Ruby >=3.3 with Bundler for fastlane 2.237.0; use `bundle install`, not
  a floating global fastlane.
- Add `automation/release/android_release.ps1` with `-Preflight`, `-Build` and
  explicit gated upload modes. It must detect tools/versions and fail closed.

**Migration/deletion**

- None; do not let Android Studio migrate Gradle files.

**Failure and compatibility**

- `flutter doctor` may require Android Studio to be launched once and SDK
  licenses accepted. This is setup, not permission to alter project versions.
- Windows fastlane support is partial; keep build ownership in Flutter/Gradle and
  use fastlane only for Play API/listing operations. If Bundler cannot provide a
  stable Windows install, stop and propose a Linux CI/WSL publishing runner
  without changing the native Windows build contract.

**Validation**

- `fvm flutter --version`, `fvm dart --version`, `java -version`,
  `android/gradlew.bat --version`, SDK/NDK directory checks and `fvm flutter
  doctor -v`.
- Assertions against `.fvmrc`, Gradle wrapper/settings and Flutter SDK defaults.

**Exit condition**

All pinned versions are installed and `flutter doctor` has no Android toolchain
or license error.

### Wave 3 — Existing signing identity and safe version selection

**Goal**

Prove the bundle will update the existing application before release compilation.

**Changes**

- Place the owner-supplied original upload key under a private Windows directory
  such as `%USERPROFILE%\.festapp-secrets\`; never copy it into the repository.
- Create ignored `android/key.properties` without echoing passwords. Windows
  paths use escaped backslashes as required by Gradle properties.
- Use `keytool -list -v` to record only the certificate SHA-256 fingerprint and
  compare it with the Play Console upload certificate.
- Configure `GOOGLE_PLAY_JSON_KEY` as a path to the separately supplied service
  account JSON outside Git; validate readability/ACL without printing content.
- Implement read-only `fastlane android play_check`: validate the credential,
  resolve package `fstapp.jm2025`, read relevant track version codes and print a
  compact identity/version summary.
- If build code must change, update `VERSION` in `automation/project.conf`, run
  `automation/apply_config.sh` in Git Bash, verify only intended generated
  changes, commit and record the new fixed point before building.

**Migration/deletion**

- None. Never replace the existing upload key with a locally generated key.

**Failure and compatibility**

- Missing/mismatched upload key is a hard blocker.
- A 403 is resolved by the Play owner granting the minimum missing app
  permission; do not escalate to broad account admin by default.

**Validation**

- Upload certificate fingerprint matches the Play Console.
- `bundle exec fastlane android play_check` returns the expected existing package
  and track codes without creating/committing an edit.
- Chosen version code is greater than every returned relevant code.

**Exit condition**

Package, certificate and next version are proven before the release build.

### Wave 4 — Signed AAB and release evidence

**Goal**

Create and validate the exact signed artifact intended for Google Play.

**Changes**

- Run only the repository's standard targeted checks required by
  `CONTRIBUTING.md`, then `fvm flutter build appbundle --release` through the
  guarded wrapper.
- Preserve `build/app/outputs/bundle/release/app-release.aab`, R8 mapping and
  native debug symbols.
- Inspect the AAB manifest/package/version and signing certificate with Android
  bundle/build tools; assert canonical values.
- Produce an ignored release manifest containing source SHA, branch, clean-state
  assertion, declared/resolved tool versions, lock SHA, AAB SHA-256, artifact
  paths, package/version and certificate fingerprint. Include no secrets.

**Migration/deletion**

- Delete stale release output before the build so no previous AAB can be mistaken
  for the new artifact.

**Failure and compatibility**

- Do not solve build failures by upgrading dependencies/tooling. Diagnose once
  against the pinned stack and change code/config only with evidence.

**Validation**

- Targeted repository checks plus a successful signed appbundle build.
- Independent identity/version/certificate readback and SHA-256 manifest.

**Exit condition**

A newly produced AAB has the canonical identity, next version and matching upload
certificate, with complete non-secret provenance.

### Wave 5 — Deterministic Play listing staging and guarded automation

**Goal**

Prepare exact tracked listing content for API validation/upload without silently
changing store graphics or publishing.

**Changes**

- Add a deterministic staging script that creates
  `build/release/google-play-metadata/cs-CZ` in fastlane supply format.
- Copy title/short/full descriptions from
  `automation/release/fastlane/metadata/googleplay/cs-CZ`.
- Copy `final/google-phone/*.png` to `images/phoneScreenshots/`.
- Copy `final/google-tablet/*.png` to both
  `images/sevenInchScreenshots/` and `images/tenInchScreenshots/`.
- Derive a version-code changelog from the canonical release notes only after the
  version is fixed.
- Verify file counts, dimensions, ordering and hashes against
  `final/manifest.json`; reject extra/missing files.
- Keep icon/feature graphic absent from staging until exact approved files are
  supplied, so the existing Play graphics remain unchanged.
- Add `play_internal_draft` with explicit `track: internal`, non-completed/draft
  status, exact AAB path, `sync_image_upload: true`, and package/version gates.
- Add a distinct production lane requiring an exact confirmation string
  containing package, version code, source SHA and `production`; it must never be
  the default lane.
- Document copy-paste commands and the operational difference between read-only
  check, validation, internal draft, production upload and rollout/promotion.

**Migration/deletion**

- Generated staging data is rebuilt, not retained as a second editable source.

**Failure and compatibility**

- Supply cannot download existing Play screenshots. Treat repository screenshots
  as proposed replacements and require pre-upload preview/approval.
- Screenshot upload replaces the relevant listing sets. Do not run it merely to
  test credentials.

**Validation**

- Staging script is deterministic and leaves Git clean.
- Negative lane tests prove writes fail without the exact gate.
- `play_check` remains read-only; optional API validation uses `validate_only`
  only after separate authority and verifies no lasting edit/release.

**Exit condition**

The AAB and listing staging are ready, commands are documented, and no Play write
has occurred without an explicit gate.

## Rollout and rollback

1. Complete local setup, signing proof, build and listing preview first.
2. With separate authority, upload only to the internal track as draft/non-
   completed. Verify Play readback, downloadable artifact identity and device
   install/upgrade from the existing app.
3. Complete policy forms, data safety, content rating, reviewer access and any
   Play Console declarations manually where the Publishing API does not own the
   surface.
4. With a new explicit production authorization, promote/upload using the exact
   gated lane and chosen rollout strategy.

Rollback before upload deletes only local generated artifacts. After an internal
upload, halt/remove the draft or supersede it with a higher valid build; a version
code cannot be reused. After production rollout starts, halt the rollout where
supported; never change package/signing identity or attempt to restore an older
version code.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Wrong source branch/SHA | Git fixed point | branch, remote SHA and clean status assertions in wrapper |
| Toolchain drift | Repository declarations vs installed tools | version preflight and `fvm flutter doctor -v` |
| Package drift | Tracked lock | `fvm flutter pub get --enforce-lockfile`; unchanged lock hash |
| Wrong Play app | Manifest plus API identity | AAB package readback and `play_check` for `fstapp.jm2025` |
| Wrong signing key | Upload certificate | `keytool` fingerprint equals Play Console upload certificate |
| Reused version code | Play tracks | read-only maximum code check before build/upload |
| Broken release compile | Real signed boundary | targeted tests plus `fvm flutter build appbundle --release` |
| Wrong screenshots | Canonical manifest | counts/dimensions/hashes for 7 phone and 6 tablet images |
| Accidental store mutation | Fastlane gates | negative tests without confirmation; readback after authorized operation |
| Secret leakage | Git/status/log audit | ignored paths, staged-file scan and compact logs |

## Definition of complete

- [ ] Current `origin/prod/csmostrava2026` is checked out cleanly and SHA recorded.
- [ ] Exact Flutter/Android/JDK/Ruby/fastlane versions are installed and verified.
- [ ] `pubspec.lock` and `Gemfile.lock` are tracked and enforced.
- [ ] Existing upload certificate and Play package identity match.
- [ ] Next version code is proven against Play tracks and canonical config.
- [ ] Signed release AAB builds and passes independent identity/signature checks.
- [ ] AAB, mapping, symbols and non-secret provenance manifest are retained.
- [ ] Czech text plus 7 phone and 6 tablet screenshots stage deterministically.
- [ ] Play read-only check works through least-privilege credentials.
- [ ] Internal and production writes are separate exact-gated operations.
- [ ] No new app/key, secret commit, dependency upgrade or production release was
      performed as an implicit fallback.

## Residual risks

- Current Android compilation has not been rerun in this planning session because
  its Mac environment has no Java runtime; Windows execution owns the real signed
  build proof.
- Google Play Console policy/declaration surfaces may require manual completion
  even when binary/listing API automation succeeds.
- The approved external Play icon/feature graphic still needs owner-provided
  source files before those assets can be managed reproducibly.
- The separately dirty map/bootstrap work is not part of the pushed remote branch.

## Authoritative external references

- Flutter Windows/Android setup: https://docs.flutter.dev/platform-integration/android/setup
- Flutter Android signing and AAB release: https://docs.flutter.dev/deployment/android
- Android JDK requirements: https://developer.android.com/build/jdks
- Android Gradle compatibility: https://developer.android.com/build/releases/about-agp
- Google Play Developer API setup: https://developers.google.com/android-publisher/getting_started
- Google Play Publishing API: https://developers.google.com/android-publisher
- fastlane Android setup: https://docs.fastlane.tools/getting-started/android/setup/
- fastlane `upload_to_play_store`: https://docs.fastlane.tools/actions/upload_to_play_store/
