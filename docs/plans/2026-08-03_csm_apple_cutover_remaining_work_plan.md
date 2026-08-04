# CSM Ostrava Apple cutover: verified remaining-work plan

Date: 2026-08-03
Status: Ready for staged execution
Verification: standard

## Outcome

Finish the in-place Apple cutover of existing App Store app `6745415882`
(`festapp.jm2025`) to CSM Ostrava without repeating work already present in the
working tree. The finished release has a reproducible signed iOS archive,
consumes the finished App Store screenshot sets delivered by the dedicated
screenshot session, has an operationally proven and isolated OneSignal audience,
and has a verified self-service deletion flow that creates, seeds and then
actually deletes a disposable user.

This plan is a continuation and current-state correction of
`docs/plans/2026-08-03_jm2025_to_csmostrava_apple_cutover_plan.md`. The original
plan remains the product/architecture rationale; this file is authoritative for
what remains to be executed from the current working tree.

## Scope

### In scope

- Preserve and validate the already implemented brand, release, installation
  cutover, account-deletion, legal/AASA and notification changes.
- Fix the current iOS archive blocker at its dependency/configuration source.
- Accept and validate the finished iPhone 6.9-inch and iPad 13-inch App Store
  screenshot sets delivered by the separate screenshot session.
- Separate OneSignal subscription tagging from authenticated identity login so
  both anonymous and authenticated CSM installations can receive only the
  intended broadcasts.
- Prove OneSignal targeting against new CSM, upgraded JM and excluded legacy-JM
  installations before enabling CSM broadcasts.
- Run an end-to-end disposable-account lifecycle: create Auth user, seed related
  domain rows, request deletion, follow the email confirmation contract, delete
  Auth/domain/OneSignal identity, and prove idempotent replay.
- Re-establish read-only App Store Connect evidence, then stage binary, metadata,
  screenshots, review submission and manual release behind separate approvals.

### Out of scope

- Creating a new App Store record, bundle identifier or OneSignal application.
- Reimplementing completed cutover modules merely because they are uncommitted.
- Capturing, composing, selecting, redacting or visually revising screenshots;
  the dedicated screenshot session owns that work and its content approval.
- Deleting the historical JM occasion or disabling old binaries before the
  bounded compatibility window is deliberately closed.
- Google Play release, production deployment, App Store mutation, submission,
  release, commit or push without separate authority.

## Constraints

- Read `docs/architecture/ai_context.md`; preserve the heavily modified working
  tree and never reset or overwrite unrelated user work.
- Keep Apple ID `6745415882`, bundle ID `festapp.jm2025`, team `8WKBB6L8LT`, the
  notification extension relationship and the existing OneSignal app.
- Do not edit `ios/Runner/GeneratedPluginRegistrant.m`; it is generated output.
- Do not make CSM broadcasts unfiltered as a fallback. Safe rollback disables
  broadcasts while direct `external_id` notifications remain available.
- Do not delete on `GET`, accept a caller-supplied deletion identity, expose
  secrets/PII in logs, or reuse the manager-oriented `delete_user` RPC.
- Production migrations, Edge/web/email/OneSignal changes and a destructive
  disposable production-like deletion each require explicit authorization.
- This execution must not redo screenshot work. It consumes only the finished,
  reviewed files delivered into the manifest-declared device directories and
  verifies their machine contract before upload.
- The App Store private key must never be committed or embedded as multiline
  content in an environment file. A gitignored environment file may persist only
  its identifier, issuer and stable filesystem path to the permission-restricted
  `.p8` file.

## Already present — do not redo by default

The following is the accepted implementation baseline. Execution starts by
confirming it is still present, then changes it only when a wave's validation
finds a concrete defect:

- `automation/release/app_store_config.json`, split Fastlane lanes, store
  checklist/privacy/review/legal artifacts and local preflight.
- `InstallationCutoverService` plus targeted installation-cutover tests.
- Dedicated account-deletion migration, request/confirm Edge Functions, Flutter
  service/UI, SQL contract test and disposable-user integration script.
- OneSignal external-ID deletion adapter and generation/occasion filters in
  `supabase/functions/notify/index.ts`.
- Runtime/Web OneSignal generation tags for authenticated users.
- CSM branding, AASA/legal routes, iOS plist/entitlement work and source captures
  in `repo-data/store-screenshots/csm-2026/source/`.
- Removal of the old credential-by-email deletion instructions, unfiltered
  broadcast path, monolithic publish/submit/release lane and visible legacy brand
  references already covered by the cutover absence checks.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| Thirteen source phone captures already exist. | `repo-data/store-screenshots/csm-2026/source/01-program.png` through `13-counseling-availability.png`; `file` reports 1179x2556. | Review and reuse them; do not recapture indiscriminately. |
| Final upload sets were not present during this plan's reconnaissance. | No files were then present under `automation/release/fastlane/screenshots/` or `repo-data/store-screenshots/csm-2026/rendered/{iphone69,ipad13}`. | A separate session will deliver finished assets. This plan validates and uploads them but does not create or visually revise them. |
| Source capture provenance is documented. | `repo-data/store-screenshots/csm-2026/README.md` records a 393x852 @3x production-web capture and marks the first AI concept as non-shipping. | This is context only; visual/content decisions belong to the screenshot session. |
| The iOS simulator app exists, but there is no IPA. | Build artifacts contain `.app` only; the unsigned release archive failed. | Archive repair precedes signing/TestFlight work. |
| The archive failure is deterministic; its original cause description is corrected by 2026-08-03 execution evidence. | `GeneratedPluginRegistrant.m` invokes `MapLibrePlugin`. Current upstream `maplibre_ios 0.3.5` is still latest and declares both `dartPluginClass` and native `pluginClass`; contrary to the earlier premise, the package contains `MapLibrePlugin.swift`, but omits that class from its pre-generated `MapLibreIos.h` compatibility header used before the dynamic Swift header exists. The attempted app-level prefix-header import failed; a separate public shim caused either a duplicate declaration or a Swift-module import cycle. | Use the repository-pinned 0.3.5 package with the missing declaration added to its existing guarded compatibility header and remove the failed app-level/shim workarounds. Never patch generated output, Pods or build products. |
| Broadcast filtering is implemented server-side. | `supabase/functions/notify/index.ts:80-86` requires `app_generation=csm_ostrava_2026_v1` AND the current occasion link. | Preserve exact two-tag filtering and add negative audience tests. |
| Subscription tagging is login-gated. | `NotificationHelper.login():129-145` returns when unauthenticated, then performs both `OneSignal.login` and `addTags`. | Anonymous opted-in CSM installations currently cannot be relied on to enter the broadcast audience. |
| Web auth does not establish notification identity. | `web_client/src/services/auth_service.js:84-92` only comments about `NotificationHelper.login`. | Bound web work to the actual shipping notification surface and explicitly prove or exclude it from the Apple broadcast contract. |
| Account deletion has a real disposable fixture. | `web_client/scripts/account_deletion_disposable_integration.mjs` creates an Auth user and occasion, seeds organization/occasion/event/feedback rows, confirms deletion and tests replay. | Run it against disposable local infrastructure; fix failures instead of inventing another flow. |
| Local deletion execution is currently blocked by tooling. | Supabase CLI was unavailable during the last validation pass. | Install/use the repository-supported CLI before claiming end-to-end deletion proof. |
| Read-only ASC evidence was refreshed during execution on 2026-08-03. | The existing key was recovered at gitignored `automation/release/AuthKey_YDHHRL6ZVG.p8`, validated, and copied byte-for-byte with mode `0600` to `~/.appstoreconnect/private_keys/AuthKey_YDHHRL6ZVG.p8`. `fastlane ios asc_check` then reported Apple ID `6745415882`, bundle `festapp.jm2025`, live `0.14.25`, and no editable version. | Use the explicit canonical key path for later gated operations. Retain the original gitignored copy until its owner explicitly authorizes removal. |
| Targeted local code validation has already passed. | Four cutover Flutter tests, ten Deno tests, Edge typecheck, plist/JSON/shell/diff checks and browser smoke with zero axe violations passed in the prior execution. | Do not rerun these until affected code changes; validate by changed wave. |

## Target architecture and invariants

### Canonical owners and contracts

- `automation/release/app_store_config.json` owns the pinned Apple identity,
  target version, URLs, screenshot classes and manual release policy.
- The MapLibre package resolution owns native plugin registration; Flutter's
  generated registrant is disposable output, not an edit point.
- `NotificationHelper` owns two independent operations:
  `tagCurrentSubscription()` for every supported opted-in CSM subscription and
  `loginCurrentUser()` for an authenticated Supabase UUID. Logging out removes
  the external-ID association without removing the CSM installation tags.
- `notify` owns broadcast selection with the conjunction of generation and
  occasion tags. Recipient notifications continue to use `external_id`.
- The dedicated account-deletion module remains the only self-service deletion
  owner. Its observable proof is a disposable lifecycle, not merely unit tests.
- Fastlane's split lanes remain the only release mutation entry points; read-only
  inspection, build, asset upload, submission and release stay separate.

### Invariants

1. No new Apple or OneSignal app is created, and the main bundle ID does not change.
2. A generated iOS file is never hand-patched to make an archive pass.
3. Every opted-in CSM subscription receives the exact generation and occasion
   tags regardless of authentication; only logged-in users receive an external ID.
4. CSM broadcasts reach the intersection of both tags and exclude a legacy JM
   subscription even if it shares the historical OneSignal app.
5. Account deletion requires authenticated request plus explicit email-confirmed
   `POST`; `GET` is non-destructive and replay is idempotent.
6. The deletion test actually creates and removes a disposable Auth user and
   representative owned rows; the pre-existing screenshot account is never used.
7. The screenshot session hands off final assets with content approval; this
   plan verifies manifest dimensions, naming and directory placement and never
   substitutes concepts or source captures.
8. Binary, metadata, screenshots, submission and manual release are independently
   observable and independently authorized.

### Forbidden bypasses

- Direct OneSignal `Subscribed Users` broadcasts for CSM.
- Tagging only after login or deriving the broadcast audience from external ID.
- Manual edits to generated registrants, Pods or build products.
- Alternate deletion RPCs/routes/scripts, deletion on link preview, or cleanup
  that silently skips OneSignal.
- Recreating or visually modifying screenshots owned by the separate screenshot
  session, or uploading source/concept images in place of its final deliverables.
- Reading private-key contents into logs, committing a `.p8`, or placing the
  private key body directly in `.env.local`/`.set_appstore_env.sh`.
- Restoring the old automatic submit/automatic release lane.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** This is a remaining-work plan. Existing artifacts are preserved and
  only reopened on failed evidence.
- **D2:** Pin a repository-owned copy of upstream `maplibre_ios 0.3.5` that adds
  only a stable public Objective-C declaration for the existing Swift plugin.
  Remove the pin when an upstream release exposes the class before Runner
  registrant compilation. Never edit generated code, Pods or build products.
- **D3:** Tag the push subscription during supported notification initialization
  or opt-in; perform `OneSignal.login(UUID)` separately when authenticated.
- **D4:** Screenshot production is owned by a separate session. This plan accepts
  its completed `iphone69`/`ipad13` handoff and performs only contract/preflight
  validation. Any visual defect is returned to that owner instead of repaired here.
- **D5:** Recover the existing ASC `.p8` if available, but keep it as a standalone
  permission-restricted file. Persist `APP_STORE_CONNECT_KEY_ID`,
  `APP_STORE_CONNECT_ISSUER_ID` and `APP_STORE_CONNECT_KEY_PATH` in the existing
  gitignored `automation/release/.set_appstore_env.sh`; update Fastlane to consume
  the explicit path. Never serialize private-key contents into an env file.
- **D6:** Local disposable deletion is mandatory before any production-like test.
  A production-like disposable test is a separately approved destructive gate.
- **D7:** Failure to establish a safe OneSignal audience blocks broadcasts and
  submission readiness; it never triggers a broad fallback.

### Assumptions

- **A1:** The existing OneSignal app is still bound to the shipping iOS app and
  notification extension; impact if false: release is blocked, not cloned;
  resolve by: dashboard/API read-only inventory and a TestFlight delivery test.
- **A2:** The screenshot-session handoff includes named confirmation that visible
  data is fictional/non-sensitive and the final images are approved; impact if
  absent: asset upload is blocked and returned to that session, not repaired here.
- **A3:** The App Store record still has live version `0.14.25` and may lack an
  editable version; impact if false: version staging changes only; resolve by:
  restored `asc_check` immediately before any ASC mutation.
- **A4:** Anonymous installed-app users are intended recipients of general CSM
  news; impact if false: tagging may be narrowed by an explicit product decision,
  while remaining independent of accidental login state.

### Blockers

- **B1 resolved 2026-08-03:** The App Store Connect private key was recovered
  from the gitignored release directory, copied with mode `0600` to the explicit
  canonical path, and the read-only ASC check passed.
- **B2:** Supabase CLI/local stack is unavailable for the real disposable-user
  deletion test.
- **B3:** Production OneSignal app configuration, tag population and deployed
  function versions are unverified external state.
- **B4:** Legal/privacy approval, DSA/seller data, reviewer credentials and all
  production/App Store mutations require their named owners/authorities.

## Deletion and closure ledger

| Artifact or gap | Current role | Final action | Closure proof |
|---|---|---|---|
| Invalid native `pluginClass` registration from `maplibre_ios 0.3.5` | Breaks archive | Replace dependency metadata/version at source | Clean generated registrant has no invalid call and unsigned archive passes |
| Login-gated subscription tags | Omits anonymous audience | Split tag and identity operations; migrate startup/opt-in/login callers | Tests plus dashboard/device tag observation |
| Missing final screenshot directories | External input owned by screenshot session | Accept its reviewed `iphone69` and `ipad13` sets without visual rework | Handoff approval exists and preflight passes dimensions/count/naming |
| `marketing-concept-search-v1.png` | Archived AI concept | Retain only as explicitly non-shipping source or delete; never copy to Fastlane | Upload manifest contains no concept file |
| Unverified account-deletion implementation | Code exists without full runtime proof | Execute the existing disposable lifecycle and fix only demonstrated gaps | Created UUID and seeded rows are absent afterward; replay succeeds |
| Local-only OneSignal deletion mock | Deterministic test boundary | Retain only behind the bounded local-host guard | Production configuration cannot activate mock; real disposable vendor deletion observed |
| Stale ASC observation | Previous planning evidence | Replace with dated read-only output | Successful `fastlane ios asc_check` captured in checklist |
| Any direct `included_segments` CSM broadcast | Unsafe legacy behavior | Keep absent | Focused source search and negative integration test |
| Old monolithic publish/auto-release lane | Superseded release path | Keep absent | Fastfile search and lane inventory |
| Old deletion instructions/legacy self-delete route | Superseded UX | Keep absent | Focused source search and UI smoke |

## Execution waves

### Wave 1 — Freeze the verified baseline and restore external read access

**Goal**

Make the checklist reflect current facts without modifying external systems.

**Changes**

- Record HEAD, dirty paths relevant to this cutover, manifest values, existing
  validation evidence and the presence/status of the screenshot-session handoff.
- Search bounded likely locations for `AuthKey_YDHHRL6ZVG.p8` (including
  `~/Downloads`, Desktop/Documents and approved password/secret storage) without
  printing file contents. If found, copy it into
  `~/.appstoreconnect/private_keys/`, restrict it to the user (`chmod 600`) and
  retain the original until the read-only check succeeds.
- Add `APP_STORE_CONNECT_KEY_PATH` to the gitignored
  `automation/release/.set_appstore_env.sh` beside the existing key and issuer
  IDs. Update `Fastfile#target_app!` and release preflight to use and validate
  that explicit path. Do not place the key contents in any `.env` file.
- Run the existing read-only `asc_check`; record current live/editable versions
  only. After success, report the duplicate original key location so its owner
  can explicitly decide whether to remove it.
- Inventory the existing OneSignal app read-only: iOS bundle/APNs configuration,
  extension, current SDK/app ID, generation/occasion tag counts and deployed
  notification/deletion function revisions. Record booleans/IDs, never API keys.
- Update `automation/release/APP_STORE_CHECKLIST.md` with dated evidence and exact
  blockers. Do not convert an unverified prior observation into a checked item.

**Validation**

- `fastlane ios asc_check` — proves the existing Apple record and editable state.
- Read-only OneSignal subscription/tag query or dashboard export — proves the
  reused app and establishes the pre-cutover audience baseline.

**Exit condition**

Apple and OneSignal current state is dated and reproducible, or each unavailable
fact remains an explicit blocker with an owner; no external state was mutated.

### Wave 2 — Produce a reproducible iOS archive

**Goal**

Remove the MapLibre registration defect and generate the release binary from
source without weakening map behavior.

**Changes**

- Compare the pinned package with the current upstream package metadata/changelog.
  Prefer a compatible corrected release; otherwise pin a minimal repository-owned
  package/fork that removes only the nonexistent native registration and documents
  upstream removal criteria.
- Regenerate dependency and CocoaPods state normally. Do not edit
  `GeneratedPluginRegistrant.m`, Pods or `.symlinks`.
- Keep the archive/upload script separated from screenshot completeness: binary
  build validation may run before assets are final, while any ASC upload still
  requires the full store preflight.
- Inspect the archive for bundle IDs, signing team/extension, entitlements,
  permission strings and privacy manifest report.

**Failure and compatibility**

- If a MapLibre upgrade changes the Dart API or rendered map, stop at the smallest
  pinned correction and run the existing map tests/smoke; do not silently fall
  back to the legacy renderer.

**Validation**

- `fvm flutter pub get` followed by the repository-supported iOS dependency step.
- `fvm flutter build ipa --release --no-codesign` — must produce an archive/IPA
  stage without undeclared `MapLibrePlugin`.
- Targeted MapLibre tests and one iOS simulator map smoke only if dependency code
  changed.

**Exit condition**

A cleanly regenerated unsigned release archive exists and its inspected identity,
extension, entitlements and privacy inputs match the cutover manifest.

### Wave 3 — Complete and prove the OneSignal cutover

**Goal**

Create an operationally isolated CSM broadcast audience while preserving direct
notifications and deletion by Supabase UUID.

**Changes**

- Refactor `lib/services/notification_helper.dart` so supported notification
  initialization/opt-in applies `app_generation=csm_ostrava_2026_v1` and
  `occasion=csmostrava2026` independently of auth. Keep `OneSignal.login(UUID)`
  and logout as identity-only operations.
- Locate every initialization, opt-in, login, restored-session and logout caller;
  migrate them to the split contract. Add equivalent web behavior only if the web
  client is a declared OneSignal consumer for this app; otherwise document it as
  excluded and remove misleading dead comments/glue.
- Keep `notify` broadcast filters as an exact AND. Add tests for correct CSM tags,
  missing generation, wrong occasion, legacy subscription and direct recipient.
- Verify the production OneSignal app configuration without creating a new app.
  After separately authorized deployment, install three test states: legacy JM,
  upgraded JM→CSM and fresh CSM (anonymous and authenticated where applicable).
  Observe subscription tags/external IDs and send only test-audience pushes.
- Run the real OneSignal delete-user call for a disposable non-production/test
  identity and prove 404/idempotent retry behavior without logging credentials.

**Failure and compatibility**

- Partial deployment keeps CSM broadcasts disabled. Old binaries remain readable
  but cannot enter the new generation-tag audience. Direct UUID notifications
  remain unchanged.

**Validation**

- Targeted Flutter notification tests and Deno `notify`/account-deletion adapter
  tests.
- Dashboard/API observation plus device receipt matrix: fresh/upgraded CSM receives;
  legacy JM and wrong-tag subscriptions do not.

**Exit condition**

Both anonymous and authenticated intended CSM subscriptions carry the correct
tags, legacy JM is excluded, direct delivery still works and a disposable vendor
identity has been observably deleted.

### Wave 4 — Prove actual account creation, seeding and deletion locally

**Goal**

Demonstrate the self-service contract against a real disposable Auth record and
representative relational data, not mocks alone.

**Changes**

- Install/use the repository-supported Supabase CLI and start a disposable local
  stack; apply `20260803120000_csm_account_deletion.sql` from a clean migration
  state and deploy/serve the two local Edge Functions.
- Run the SQL account-deletion contract test.
- Run `web_client/scripts/account_deletion_disposable_integration.mjs`. It must
  create its unique Auth user, seed `user_info`, organization/occasion/event and
  feedback ownership, request deletion, read the local confirmation email, prove
  confirmation `GET` is non-destructive, perform explicit `POST`, and test replay.
- Expand the existing fixture only when a current FK/retention inventory identifies
  a representative owned table not covered. Use the bounded local OneSignal mock.
- Assert deletion/audit status contains no raw email/token and that the client-sync
  deletion marker prevents the removed profile from being resurrected.

**Failure and compatibility**

- Keep fixture IDs unique and always clean up in `finally`. A failure must leave
  enough non-sensitive status to diagnose but never target an existing account.

**Validation**

- `node web_client/scripts/run_db_tests.js database/tests/account_deletion_contract.sql`
- The documented local disposable integration command from its script/checklist.
- Targeted request/confirm Deno tests and Flutter account-deletion UI/service test
  only if their code changed.

**Exit condition**

The run logs a newly created disposable UUID, completes email-confirmed deletion,
and queries prove Auth identity and deletable seeded rows are gone, retained audit
data is approved/minimized, OneSignal mock cleanup ran and token replay is safe.

### Wave 5 — Accept the completed screenshot-session handoff

**Goal**

Consume the already completed screenshot work without recreating or revising it.

**Changes**

- Receive the screenshot session's final numbered PNGs and its content/privacy
  approval note in the canonical paths declared by `app_store_config.json`.
- Confirm that both `iphone69` (1320x2868) and `ipad13` (2064x2752) sets exist,
  are non-empty and contain no source-only or archived concept files.
- Do not open a new visual review or alter pixels/copy/selection in this plan. If
  the files or approval note are missing, or machine validation fails, report the
  exact handoff defect to the screenshot session and keep the upload blocked.

**Validation**

- `automation/release/store_preflight.sh` — proves dimensions, required sets,
  identity metadata and legacy-string absence.
- Presence of the screenshot session's named product/privacy approval note.

**Exit condition**

Both delivered final sets pass preflight, their approval handoff is present and
no concept/source-only file is uploadable; no screenshot was recreated here.

### Wave 6 — Deploy prerequisites and run a production-like deletion rehearsal

**Goal**

Move the proven contracts to controlled external environments before ASC upload.

**Changes**

- With separate authority, apply the account-deletion migration, deploy the
  request/confirm and `notify` functions, configure approved email templates,
  OneSignal credentials and public AASA/privacy/legal routes in staging then
  production.
- Run read-only smoke checks after each deployment. Enable no broad broadcasts.
- With explicit destructive-test approval, create a uniquely named disposable
  production-like user, seed only approved representative rows, execute the same
  email-confirmed flow and prove Auth/domain/OneSignal deletion. Never reuse
  `test@test.com` or a screenshot/demo account.
- Record deployment revisions, migration version and deletion evidence without
  raw identifiers or secrets.

**Validation**

- Public route status/MIME/content checks, Edge health/type contracts, migration
  inventory and sanitized disposable lifecycle evidence.

**Exit condition**

Production prerequisites match tested revisions and the approved disposable
lifecycle succeeds end to end, or submission remains blocked by a named gap.

### Wave 7 — TestFlight upgrade, store staging and review readiness

**Goal**

Prove the actual installed-app cutover and stage the existing App Store record
without accidental submission or release.

**Changes**

- Rerun `asc_check`; create/select the next editable version only with authority.
- Build/sign with the approved profiles, upload the binary through `upload_build`,
  wait for processing and select it explicitly. Upload metadata and screenshots
  through their separate lanes; do not submit.
- On a real iPhone, install live JM `0.14.25`, establish representative cached,
  offline and notification state, then update to the CSM TestFlight build. Verify
  no stale JM content, safe session handling, correct CSM tags and push routing.
- Test a fresh install and iPad layout. Complete privacy answers, age rating,
  export compliance, DSA/seller status, legal approval and reviewer credentials.

**Validation**

- `submission_check` plus the checklist; real-device upgrade/fresh-install matrix;
  processed build identity and uploaded asset preview in ASC.

**Exit condition**

The correct processed build and reviewed assets are attached to the existing app,
all review fields are complete, upgrade behavior is proven and nothing is yet
submitted or automatically released.

### Wave 8 — Submit, manually release and close legacy reachability

**Goal**

Release through explicit gates and prove the public result.

**Changes**

- With a distinct approval, run `submit_for_review` only after Wave 7 is green.
- Resolve review feedback without changing pinned app identity or weakening the
  deletion/notification contracts.
- With a later distinct approval, manually release the approved version.
- Verify the public product page, install/update, privacy/support links, AASA,
  account deletion, notification isolation and crash/Edge/OneSignal telemetry.
- Keep old-binary backend compatibility for the named observation window; close
  it only through a follow-up plan based on adoption evidence.

**Validation**

- Public App Store and URL checks, production smoke, OneSignal negative audience
  test and monitored error/crash baseline.

**Exit condition**

CSM Ostrava is live as the existing app, manual release is recorded, deletion and
push isolation work in production, and every ledger item is removed or retained
only at its named compatibility boundary.

## Rollout and rollback

Local implementation and tests (Waves 2–5) precede every production mutation.
Backend migration/functions and subscription tagging deploy before any CSM
broadcast. TestFlight upgrade proof precedes review submission. Submission and
release use two different approvals.

Rollback may disable CSM broadcasts, stop further asset/build uploads, withdraw
an unsubmitted version or ship a corrected build. It must not restore unfiltered
broadcasts, credential-by-email deletion, stale JM cache display or automatic
release. A deployed additive deletion schema remains dormant if its UI/Edge
entry point is disabled; never down-migrate user lifecycle data during an incident.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Invalid iOS plugin registration | Generated archive | `fvm flutter build ipa --release --no-codesign` |
| Map remains functional | Map component boundary | Targeted map tests plus one simulator smoke after dependency change |
| Anonymous/auth subscription tagging | Notification helper and device subscription | Flutter tests plus OneSignal tag observation |
| Legacy JM exclusion | Server filter and device matrix | Deno negative tests plus test-audience delivery |
| Real deletion lifecycle | Local Supabase/Auth/mail/Edge/DB | DB contract test plus disposable integration script |
| Vendor deletion | OneSignal adapter/API | Unit retry tests plus disposable external-ID absence |
| Existing-install safety | Live-to-TestFlight update | Real-device online/offline upgrade matrix |
| Final screenshots | External screenshot-session handoff | Approval note plus `automation/release/store_preflight.sh` |
| Existing App Store identity | ASC read-only/staged state | `fastlane ios asc_check`, then `submission_check` |
| Legacy-path absence | Source/release contract | Focused `rg` for old instructions, unfiltered segment and auto-release lane |

Do not rerun an already passing validation until its covered code or artifact
changes. At the end of each wave, run its smallest listed validation batch; use
the repository's full release gates only when release verification is explicitly
authorized.

## Definition of complete

- [ ] The iOS release archive builds from regenerated source/dependencies without
      a hand-edited plugin registrant.
- [ ] The separate screenshot session delivered both approved final device sets;
      this execution did not recreate them and store preflight passes.
- [ ] OneSignal tags all intended CSM subscriptions independently of login,
      excludes legacy JM broadcasts, preserves direct delivery and deletes a
      disposable external identity.
- [ ] A newly created, representative disposable Auth user was actually deleted
      locally and in an authorized production-like rehearsal; replay is safe.
- [ ] A live JM installation upgrades to TestFlight CSM without stale data and
      with the correct notification audience.
- [ ] ASC evidence is current, the existing app identity is unchanged, and
      binary/metadata/screenshots/submission/manual release used separate gates.
- [ ] Every ledger entry is closed or explicitly retained at its named boundary.
- [ ] No production mutation, submission, release, commit or push occurred without
      its separate authority.

## Residual risks

- App Store/OneSignal state can change outside the repository; their read-only
  checks must be repeated immediately before the corresponding mutation.
- A corrected MapLibre release may require a narrow temporary pin/fork until
  upstream metadata is fixed; ownership and removal criteria must be documented.
- The exact legal retention/anonymization matrix remains subject to AKSM legal/data
  owner approval even after technical deletion succeeds.
