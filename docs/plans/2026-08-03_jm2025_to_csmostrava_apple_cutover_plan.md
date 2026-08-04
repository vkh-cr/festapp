# JM 2025 → CSM Ostrava: existing-App Apple cutover

Date: 2026-08-03
Status: Ready for execution
Verification: standard

## Outcome

The existing App Store app with Apple ID `6745415882` and bundle identifier
`festapp.jm2025` ships a large update that is presented everywhere to users as
**CSM Ostrava**. Existing installations update in place; no new App Store app,
bundle identifier, signing identity, or OneSignal app is created.

The observable end state is:

- the App Store product page, installed app, emails, public web/legal pages,
  screenshots, review notes, push messages, and support links describe CSM
  Ostrava and contain no unintended JM 2025 branding;
- an existing JM 2025 installation upgrades safely without displaying stale JM
  occasion data, while retaining only a backend-compatible authenticated session;
- a user can initiate full account deletion in the app, verify it through a
  branded one-time email flow, receive an unambiguous result, and have deletable
  first- and third-party data removed;
- privacy disclosures, in-app legal links, App Store privacy answers, permission
  prompts, age rating, DSA information, and reviewer access match the shipped
  binary;
- release metadata and screenshots are repository artifacts, validated by a
  read-only preflight, and uploaded through explicit non-submitting lanes;
- submission and production rollout remain separately authorized actions.

This is a complete visible-brand and release-process cutover, not an additive
CSM variant. The immutable App Store identity is the intentional external
compatibility boundary.

## Scope

### In scope

- Updating the existing App Store record, never creating a new record.
- Preserving Apple ID `6745415882`, bundle ID `festapp.jm2025`, Apple signing
  team `8WKBB6L8LT`, the current App Group/notification extension relationship,
  and the existing OneSignal application unless a preflight proves one is
  misconfigured.
- CSM Ostrava branding across iOS, Flutter, shared web assets, PWA metadata,
  App Store metadata, screenshots, emails, support and legal surfaces.
- Existing-install upgrade behavior: stale cache invalidation, forced occasion
  selection, session compatibility, private-cache cleanup, OneSignal retagging,
  and an upgrade test from the live JM 2025 binary.
- Secure, email-confirmed, self-service deletion of the entire Festapp account
  and associated deletable data.
- A deletion inventory and explicit treatment of transaction/audit records that
  must be retained or anonymized rather than silently preventing deletion.
- Deletion of the OneSignal user identified by the Supabase UUID.
- Public app-specific privacy policy, in-app privacy/EULA/support links, and an
  App Store privacy-disclosure matrix.
- Least-privilege iOS usage descriptions, associated domains/AASA, privacy
  manifests, export-compliance declaration, age rating, DSA and review data.
- Deterministic store-artifact and release automation with destructive gates.
- iPhone 6.9-inch and iPad 13-inch Czech screenshot sets made from the shipped
  app experience and containing fictional/non-sensitive user data.

### Out of scope

- Creating, cloning, transferring, or renumbering the App Store application.
- Changing `festapp.jm2025` merely because the string contains the old campaign;
  it is immutable external identity, not visible product branding.
- Migrating JM 2025 participant/event data into CSM Ostrava. A valid auth account
  does not imply CSM participation.
- Deleting the historical JM occasion, its database records, old binaries, old
  web deployment, or offline-map artifacts while live old-version clients may
  still depend on them.
- Google Play submission. Shared brand/legal assets may improve Android, but a
  Google Play cutover requires its own externally authorized release step.
- Inventing event attendance rules, parental-consent wording, statutory retention
  periods, or a custom EULA without approval from AKSM's legal/data owner.
- Deploying Edge Functions, applying migrations, changing production App Store
  Connect/OneSignal/Cloudflare state, submitting for review, releasing, committing,
  or pushing without separate authority.

## Constraints

- `docs/architecture/ai_context.md` is mandatory context. Business rules belong
  in explicit SQL/RPC/service boundaries; persistent application triggers are
  forbidden.
- Every `SECURITY DEFINER` function is created in `public`, sets
  `search_path = public, extensions`, performs explicit authorization, and has
  grants/revokes recorded in the migration.
- Auth, privacy, destructive data operations, migrations, public contracts, and
  production operations require standard verification.
- The working tree is already heavily modified. Execution must preserve and
  integrate with those changes, especially the in-progress client-sync/profile
  cutover; it must not reset or overwrite unrelated work.
- `automation/project.conf` remains the project configuration source of truth;
  `./automation/apply_config.sh` must produce a clean, reproducible brand/version
  state.
- Existing installed iOS apps keep their sandbox, secure-storage refresh token,
  Sembast databases, notification permission, and OneSignal subscription.
- App Store name changes happen on a new editable version of the existing app.
  There is currently no editable version, so code automation cannot assume one.
- A mail-link `GET` must never delete an account. Security scanners and mail
  clients follow links automatically; deletion requires an explicit final `POST`.
- A deletion request must derive the user from a validated JWT, never accept a
  caller-supplied user ID or email as authority.
- Raw deletion tokens, passwords, refresh tokens, service-role keys, App Store
  private keys, OneSignal API keys, or complete email addresses must not appear
  in logs or committed artifacts.
- Apple requires account deletion for apps that support account creation and
  allows verification through the existing email address. See
  <https://developer.apple.com/support/offering-account-deletion-in-your-app/>.
- Apple requires an App Store privacy URL and an easily accessible in-app privacy
  link, with disclosures including integrated third parties. See
  <https://developer.apple.com/app-store/review/guidelines/> and
  <https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy/>.
- Since 2026-04-28, uploads must use Xcode 26/iOS 26 SDK or newer. The current
  machine has Xcode 26.6, but the final archive records the actual SDK used.
- The final App Store submission is manually released after approval. Automatic
  release from a general build/upload lane is forbidden for this cutover.

## Current-state evidence

| Claim | Evidence | Consequence |
|---|---|---|
| The target is an existing live app. | Read-only `fastlane ios asc_check` on 2026-08-03: `APP: JM 2025 (festapp.jm2025) id=6745415882`, live `0.14.25`, locale `cs`. | Pin Apple ID and bundle ID in every release preflight; never call app-creation APIs. |
| No editable App Store version exists. | The same read-only check reports `NO EDITABLE VERSION`. | Creating the next version is an explicit App Store Connect operation before uploads. |
| CSM metadata already exists in the repository. | `automation/release/fastlane/metadata/cs/*.txt`; `STORE_LISTING.md`. | Harden these files as the canonical localized metadata rather than retyping ASC fields. |
| The existing publish lane skips metadata and screenshots, disables precheck, submits immediately, and enables automatic release. | `automation/release/fastlane/Fastfile:13-21,92-103`. | Replace the monolithic lane with inspectable prepare/upload/submit/release steps. |
| The public product page still presents JM 2025 and links to the old policy. | Apple public listing `id6745415882` on 2026-08-03. | Store record cutover is incomplete until post-release public verification. |
| Existing installations are forced to the CSM occasion in current source. | `lib/app_config.dart: forceOccasionLink = "csmostrava2026"`; `RightsService._doUpdateAppData`. | Preserve this as the new-runtime canonical occasion, but migrate stale local state before it is read. |
| Legacy offline data uses global, unscoped Sembast keys. | `OfflineDataService` keys such as `events`, `newsOffline`, `globalSettingsOffline`, `mySchedule`, `user_info`. | An in-place update can render JM data if first launch is offline; introduce a one-time installation-generation migration. |
| The new client-sync store is occasion/user scoped. | `ClientSyncStore`: `pointer/$scope/...`; `SyncContext` in `ClientSyncRuntime`. | Preserve valid CSM-scoped generations; remove only obsolete JM scopes/private identity on cutover. |
| A refresh token survives the update. | `AuthService.REFRESH_TOKEN_KEY` in `FlutterSecureStorage`. | Validate the recovered account against the current backend/organization; do not equate a JM session with CSM participation. |
| Current account deletion is informational only. | `UserPage` opens `deleteAccountInstructions`; Czech text asks the user to email credentials to `info@festapp.net`. | Replace the entire self-delete UI/text path; never ask users to transmit credentials. |
| Existing `delete_user(usr, oc)` is not a self-delete contract. | It authorizes a manager/admin or companion owner; `DbUsers.deleteUser` is called by companion management. | Do not expose or repurpose it as the user confirmation endpoint. Keep companion/admin behavior isolated while building a dedicated account-deletion owner. |
| Existing deletion cleanup is incomplete against current schema. | `user_info` is referenced by cleaning, organization, unit, event, activity, bank/audit and feedback tables; several FKs lack `ON DELETE` actions. | Build a complete dependency/retention matrix and make deletion succeed for representative populated users. |
| Password-reset token storage is raw and has no expiry. | `public.user_reset_token`; `send-reset-password-link`. | Do not reuse it. Account deletion gets a separate hashed-token, expiring, single-use contract. |
| Email delivery has a canonical templating boundary. | `_shared/emailDelivery.ts` resolves `email_templates` through `get_email_template_and_wrapper`. | Use new template codes and the existing wrapper/inheritance system; do not embed production HTML in Edge Functions. |
| OneSignal associates users by Supabase UUID. | `NotificationHelper.login()` calls `OneSignal.login(AuthService.currentUserId())`; `notify` targets `external_id`. | Full deletion must call OneSignal Delete User by `external_id`; upgrade rollout can tag the preserved subscription by app generation/occasion. |
| Broadcast notifications currently target all subscribed users. | `supabase/functions/notify/index.ts` uses `included_segments: ["Subscribed Users"]` when no recipient is specified. | Gate CSM broadcast notifications by a CSM generation/occasion tag before enabling them, otherwise old JM binaries receive CSM messages. |
| The AASA content and entitlement do not describe the shipping bundle/domain pair. | `Runner.entitlements` uses `applinks:live.festapp.net`; both live AASA files report `8WKBB6L8LT.festapp.festapp`; `csmostrava/.well-known` currently returns Flutter HTML. | Fix the current domain, exact app ID, `.well-known` route, MIME type, and no-redirect behavior before relying on deletion/legal universal links. |
| The public `/privacy` path is not a policy. | `curl https://csmostrava.festapp.net/privacy` returns Flutter application HTML. | Ship a deterministic static privacy response and assert its content, status and MIME type. |
| The draft privacy policy contains false/incomplete statements. | It says the password is encrypted and deletion occurs directly in app; processors omit the email and edge/CDN path. | Legal source must be reconciled with implementation and approved before store submission. |
| iOS requests more permission descriptions than observed behavior needs. | `Info.plist` contains Always location and a microphone description saying the microphone is not required. | Remove unused declarations and keep only reachable, accurately explained permission prompts. |
| App SDK privacy manifests are not represented by a canonical app-level review artifact. | Pod manifests exist for OneSignal, MapLibre, image libraries; no `Runner/PrivacyInfo.xcprivacy` was found. | Generate and review the final archive privacy report; add app-level declarations only for app-owned required-reason API use. |
| Current screenshots are source captures, not final store artifacts. | `repo-data/store-screenshots/csm-2026/README.md` says the marketing image is a concept; only 1179x2556 phone sources exist. | Produce final 1320x2868 iPhone and 2064x2752 iPad sets, with exact CSM SVG and fictional data. |
| A PWA manifest still contains the old brand. | `web/site.webmanifest` says `Jubileum mládeže 2025`. | Add it to the brand deletion ledger and configuration automation. |
| The configured version and generated sources are out of sync in the working tree. | `project.conf` has `0.19.82+333`; `pubspec.yaml` and web build stamp show `+332`. | Run config propagation once during implementation and assert clean generated outputs before archive. |

### Representative current flows

**Existing-install startup:** iOS retains secure/local storage → Supabase session is
recovered → cached global settings may be loaded before online CSM configuration
→ `forceOccasionLink` eventually selects CSM → OneSignal logs in the retained
UUID. The risk window is the cached read before a successful online refresh.

**Current delete affordance:** Profile → `Smazat účet` → informational dialog
→ user is told to email credentials → no server request, verification, status,
or completion evidence exists.

**Current iOS release:** build IPA → upload binary → wait for processing →
look up editable version → update only `whatsNew` → submit automatically with
metadata/screenshots/precheck skipped → automatic release. With no editable
version, the lane cannot safely complete.

## Target architecture and invariants

### Cutover seam

**Seam:** the installed app identity, public/store brand, persisted JM state,
legal disclosures, notification audience, account lifecycle, and App Store
submission path being converted from JM 2025 to CSM Ostrava.

**Compatibility boundary retained:** Apple ID `6745415882`, bundle ID
`festapp.jm2025`, signing team, notification extension identifiers required by
the existing app, and read-only old-binary backend compatibility for a bounded
adoption window.

**Removal set:** visible JM/Jubileum names, old URLs/policy, old PWA manifest,
stale JM cache consumption by the new binary, unscoped broadcast audience,
email-the-credentials deletion instructions, false privacy statements,
monolithic auto-submit release behavior, placeholder screenshot assets, and
incorrect AASA app IDs/domains.

### Canonical owners and contracts

#### 1. Product/release identity

`automation/release/app_store_config.json` is the machine-readable release
identity manifest. It pins:

- existing Apple ID and bundle ID;
- source live version/name for this cutover and target version/name;
- signing team and expected extension bundle ID;
- canonical locale, privacy/support/marketing URLs;
- required screenshot device classes and accepted dimensions;
- allowed legacy identity strings (bundle/package identifiers and explicitly
  historical documentation only);
- manual external gates and release mode.

`automation/project.conf` remains the runtime brand/version source. A preflight
must fail if the two sources disagree about target product name/version/domain.

#### 2. Existing-install migration

A new `InstallationCutoverService` owns a monotonic installation-generation
marker such as `csm_ostrava_2026_v1`. Before cached occasion data or recovered
private projections are presented, it:

1. detects a missing/older generation marker;
2. atomically deletes known unscoped occasion/public/private JM cache keys and
   old JM-scoped client-sync pointers/generations;
3. preserves the secure refresh token, locale, theme, and notification permission;
4. records the new generation only after cleanup succeeds;
5. allows CSM configuration/bootstrap to repopulate data;
6. if offline on the first post-update launch, shows a branded empty/offline
   migration state rather than stale JM content.

After Supabase recovery, the session is preserved only if the backend recognizes
the account for organization 9. CSM occasion participation is separately derived;
no JM membership or cached profile is copied. Invalid/cross-organization sessions
are logged out locally and their private cache/OneSignal alias is cleared.

#### 3. Account deletion

The canonical owner is a dedicated account-deletion module consisting of:

- `public.account_deletion_requests` for lifecycle state;
- explicit `public` RPCs with service-role-only or authenticated grants;
- `request-account-deletion` and `confirm-account-deletion` Edge Functions;
- `AccountDeletionService` in Dart;
- a Profile deletion dialog and a public confirmation route;
- `ACCOUNT_DELETION_CONFIRM` and `ACCOUNT_DELETION_COMPLETE` email template codes;
- a vendor-cleanup step for OneSignal.

The public contract is:

```text
POST request-account-deletion
Authorization: Bearer <current user JWT>
body: {}                         # no authoritative user/email fields
success: 202 {status: "email_sent", maskedEmail, expiresAt}
errors: 401 unauthenticated; 429 cooldown; generic 5xx without PII

GET /delete-account?token=<opaque token>
side effects: none              # renders/validates only; never deletes

POST confirm-account-deletion
body: {token: <opaque token>}
success: 200 {status: "completed" | "already_completed"}
errors: 400 invalid; 410 expired; generic 5xx/retryable status
```

Token and state rules:

- token: at least 256 bits from a cryptographic RNG;
- database stores only SHA-256 token hash, never the bearer token;
- 24-hour TTL, one active request per account, five-minute resend cooldown;
- resend revokes the prior active token;
- `GET`/inspection returns at most validity, expiry and masked email;
- final confirmation is a `POST` from a deliberate button;
- token consumption and the database deletion state transition are single-use
  and retry-safe;
- the request/job row survives removal of `auth.users` and `user_info`: it must
  not have a cascading foreign key to either identity row, and after confirmation
  it retains only the opaque request ID, workflow state, timestamps, retry
  counters and coarse error class needed to finish/operate the deletion;
- claiming a valid confirmation atomically marks the account `deletion_pending`;
  every authenticated domain/RPC entry point rejects that identity from then on,
  refresh sessions are revoked server-side where supported, and the client is
  signed out immediately; an already-issued access JWT must not restore access;
- expired/revoked/used responses reveal no account identity;
- logs contain request ID, state and coarse error class, never token/email/UUID.

Deletion lifecycle:

```text
active session
  → request validated from JWT
  → hashed request persisted
  → branded confirmation email delivered
  → public page opened (no deletion)
  → explicit final confirmation
  → DB cleanup/anonymization
  → Supabase Auth hard-delete through server-side admin API
  → OneSignal Delete User by external_id
  → completion state/page/email
```

The implementation must settle the exact failure ordering with a local Supabase
integration test before coding the destructive step. Preferred owner split:

- SQL transaction removes/anonymizes public-domain records according to the
  approved retention matrix and records a durable deletion job state;
- the Edge Function calls `supabase.auth.admin.deleteUser(userId, false)` using
  the service role and deletes the OneSignal user using the organization-held
  app/API credentials;
- each side effect is idempotent and state-backed so a retry cannot resurrect
  data or report success before mandatory deletion is complete;
- the durable workflow record is intentionally independent of the deleted Auth
  and public profile rows, so an authorized retry/worker can resume after a
  partial Auth, Storage, email or vendor failure without retaining user PII;
- a permanent OneSignal `404` means already absent/success; `429`/`5xx` is
  retried with bounded backoff; completion is not claimed while a required
  vendor deletion remains pending;
- if an Auth user owns Storage objects, the cleanup inventory deletes or
  reassigns them before `admin.deleteUser` as required by Supabase.

The deletion matrix classifies every `user_info`/`auth.users` reference as:

- **delete:** personal participation, saved schedule, feedback/private profile,
  companions, group membership, notification/user cache, reset/deletion tokens;
- **anonymize:** authored public/admin content that must remain, by setting actor
  references to null and stripping PII;
- **retain by approved rule:** statutory transaction/audit facts, with direct
  identity removed or replaced by a non-reversible tombstone where possible;
- **block:** unresolved legal ownership/retention relation. No release while an
  ordinary populated account still fails deletion through an FK.

#### 4. Legal/privacy surface

The canonical legal sources are versioned repository documents under
`automation/release/legal/`, approved by an AKSM owner and rendered into static
public HTML by a deterministic build script. Routes:

- `/privacy` — app-specific policy;
- `/privacy/choices` — deletion/privacy choices and expected timing;
- `/terms` — a short product page linking to Apple's standard EULA unless AKSM
  separately approves a custom EULA.

The app exposes Privacy, Terms/EULA, Support, and Delete Account from Settings
or Profile. Signup displays a privacy notice/link before submission. Privacy is
notice, not a fabricated consent checkbox; any required event-terms acceptance
is a separate, versioned business requirement.

The privacy policy must accurately cover at least:

- controller/operator and seller/developer relationship;
- account/profile, participation, schedule, feedback/report and push data;
- device/network/operational data and local offline storage;
- location behavior (on-device only if network inspection confirms that);
- Supabase, OneSignal, MailerSend/current email provider, Cloudflare/current web
  edge/CDN, Apple distribution, and any other observed recipient/processor;
- purposes and legally approved bases, not the current ambiguous "consent when
  creating an account" statement;
- category-specific retention and statutory exceptions;
- children/minors wording approved for CSM;
- access, correction, objection, export and deletion paths;
- hashed-password wording and the fact that plaintext credentials are never
  requested by email;
- OneSignal/vendor deletion and backup/log expiry limitations;
- consistent AKSM support/privacy contact.

Apple's standard EULA remains the default decision; no custom App Store EULA is
uploaded unless AKSM legal explicitly replaces this decision. Record the link
<https://www.apple.com/legal/internet-services/itunes/dev/stdeula/> in the legal
surface and checklist.

#### 5. Store artifacts and automation

Repository artifacts become:

```text
automation/release/app_store_config.json
automation/release/APP_STORE_CHECKLIST.md
automation/release/APP_PRIVACY_DISCLOSURE.md
automation/release/APP_REVIEW_NOTES.md
automation/release/legal/privacy-policy.cs.md
automation/release/legal/privacy-choices.cs.md
automation/release/legal/terms.cs.md
automation/release/fastlane/metadata/cs/*.txt
automation/release/fastlane/screenshots/cs/*.png
repo-data/store-screenshots/csm-2026/source/{iphone,ipad}/...
repo-data/store-screenshots/csm-2026/rendered/{iphone69,ipad13}/...
automation/release/store_preflight.mjs
```

The exact checked-in screenshot directories may be adjusted to Fastlane's
recognized layout, but there is one canonical rendered set, not manual copies.

Fastlane lanes are explicit and non-overlapping:

- `asc_check`: read-only identity/version/status inspection;
- `store_preflight`: local/read-only checks only;
- `create_version` or documented manual step: existing app only, guarded by
  Apple ID and bundle ID;
- `upload_build`: upload and wait for processing, never submit;
- `upload_metadata`: metadata only, never submit;
- `upload_screenshots`: screenshots only, never submit;
- `submission_check`: read-only completeness report/precheck;
- `submit_for_review`: destructive external action requiring an exact typed/env
  confirmation containing Apple ID, bundle ID and target version;
- `release_approved_version`: separate manual-release action, never invoked by
  build or submit.

Every mutating lane first prints and asserts existing Apple ID `6745415882`,
bundle `festapp.jm2025`, target version, current app name/status and operation.
No lane can call `produce`, create a new application, or infer a target by name.

### Invariants

1. Apple ID `6745415882` and bundle ID `festapp.jm2025` are preserved.
2. A CSM build cannot upload to any other Apple ID/bundle/signing team.
3. No new binary reads or presents JM cache before CSM cutover migration.
4. A retained session never grants CSM participation from JM membership.
5. No account is deleted by `GET`, link preview, email scanner, caller-supplied
   UUID/email, expired token, replayed token, or token from another request.
6. The user is never asked to email a password, login code, token, or credentials.
7. The normal delete path works for a user with representative CSM profile,
   schedules, registrations, feedback, groups, reports and push identity.
8. Retained records contain only the identity/fields approved by the retention
   matrix; deletion is not blocked by undocumented FKs or Storage ownership.
9. A confirmed account loses domain access immediately. Completion is reported
   only after all mandatory first-party and OneSignal deletion steps are
   terminally complete; a durably queued retry remains visibly `processing`,
   with the approved timeframe, and is never presented as completed.
10. Privacy copy, in-app behavior and App Store privacy answers describe the same
    released binary and integrated SDKs.
11. New CSM broadcast notifications target only the CSM app generation/occasion,
    never the unfiltered legacy "Subscribed Users" segment.
12. `/privacy`, `/privacy/choices`, `/terms` and both AASA paths return the
    intended static content/status/MIME type without a Flutter fallback or redirect.
13. Store screenshots use actual shipped UI, exact project SVG branding,
    approved text, valid dimensions, no alpha, and fictional/non-sensitive data.
14. Metadata and screenshot uploads do not submit or release the app.
15. App Review submission and public release are separate authorized operations.
16. Visible/runtime brand absence checks allow `jm2025` only in pinned external
    identifiers and explicitly historical artifacts.

### Entry points and forbidden bypasses

- Intended deletion request entry: authenticated `AccountDeletionService` →
  `request-account-deletion` only.
- Intended confirmation entry: tokenized public page → explicit POST →
  `confirm-account-deletion` only.
- Intended email delivery: `deliverEmail` plus inherited template/wrapper.
- Intended user targeting: OneSignal `external_id = auth UUID` and CSM generation
  tags through one notification abstraction.
- Intended legal content: generated static pages from versioned legal source.
- Intended App Store target: numeric Apple ID plus bundle assertion.
- Forbidden: direct client writes to deletion tables, raw auth-schema deletes from
  the client, reusing `delete_user`, token in logs, delete-on-GET, generic
  OneSignal broadcast, hard-coded production email HTML, manual untracked ASC
  copy, and any app-creation API.

## Decisions, assumptions, and blockers

### Decisions

- **D1:** This is an update of Apple ID `6745415882`, not a new app. Preserve
  `festapp.jm2025` even though it contains the old campaign name.
- **D2:** CSM Ostrava is the only visible/current product identity after cutover.
  JM survives only as immutable identifiers and bounded old-binary/history data.
- **D3:** Use Apple's standard EULA. Terms are not a blocker for a free app with
  no subscriptions/IAP; custom terms require separate legal approval.
- **D4:** Use emailed one-time confirmation, but require a final POST button on a
  branded page. Email link traversal alone has zero destructive side effects.
- **D5:** Store only token hashes, use a 24-hour TTL, revoke on resend, enforce a
  cooldown, and make confirmation idempotent.
- **D6:** Account deletion means the whole auth account, not only CSM occasion
  membership. The UI explicitly distinguishes "leave/remove CSM participation"
  from "delete account" if both actions exist.
- **D7:** Use Supabase Admin delete API server-side for Auth, not client access or
  a new direct dependency on mutable `auth` internals. SQL owns public-domain
  cleanup and durable operation state.
- **D8:** Delete the OneSignal User by `external_id`; client `logout()` alone is
  insufficient for a privacy deletion.
- **D8a:** Confirmation atomically blocks further domain access and creates a
  non-PII durable job that survives deletion of Auth/profile rows. Vendor/Auth
  retries remain `processing`; only all-terminal mandatory erasure becomes
  `completed`.
- **D9:** Preserve a valid organization-compatible session across the update;
  never migrate JM participation. Invalid sessions are logged out cleanly.
- **D10:** Add a monotonic installation-generation migration and fail closed to a
  blank/offline CSM state when first launch cannot fetch CSM data.
- **D11:** Reuse the existing OneSignal application/subscription permission, but
  tag/target the new CSM generation before any CSM broadcast.
- **D12:** Refactor release automation into prepare/upload/check/submit/release
  gates. Build/upload never implies submission or automatic release.
- **D13:** Version all legal/store/review/privacy artifacts and validate them
  locally; manual ASC-only declarations have a checked checklist with evidence.
- **D14:** Generate final phone and tablet screenshot artifacts deterministically
  from native/simulator CSM UI and exact project SVG assets.
- **D15:** Remove Always-location and microphone usage descriptions unless a
  concrete reachable feature proves they are required. Retain Photo Library only
  after confirming a shipped user flow actually requests it.

### Assumptions

- **A1:** The App Store account permits renaming the existing app to `CSM Ostrava`;
  impact if false: target name must change without creating a new app; resolve by:
  create the editable existing-app version and validate the name before metadata upload.
- **A2:** Apple ID `6745415882`, team `8WKBB6L8LT`, bundle ID and notification
  extension are the intended production identity; impact if false: upload could
  target the wrong developer asset; resolve by: numeric ASC/certificate/profile
  comparison before any mutating lane.
- **A3:** The current OneSignal App ID is the JM live app's production OneSignal
  application; impact if false: existing subscriptions cannot be safely reused;
  resolve by: compare the live binary/config, OneSignal dashboard platforms and
  notification extension before implementing generation tags.
- **A4:** A Festapp auth UUID belongs to one organization in `user_info`; impact if
  false: whole-account deletion affects multiple controllers/organizations;
  resolve by: production-safe cardinality query and legal ownership decision
  before finalizing cleanup.
- **A5:** CSM registration/account creation remains enabled for the submitted
  binary; impact if false: self-delete remains useful but App Review paths/notes
  differ; resolve by: inspect production organization/occasion config immediately
  before screenshots and review notes.
- **A6:** No IAP, subscription or paid digital content exists in the iOS binary;
  impact if false: StoreKit terms, purchase disclosure and deletion UI expand;
  resolve by: dependency/runtime/ASC IAP preflight.
- **A7:** A server-side OneSignal Delete User endpoint is available for the
  account's plan/API key; impact if false: vendor deletion needs a documented
  manual/queued fallback; resolve by: non-production test user API exercise.
- **A8:** `info@aksm.cz` is the canonical privacy/support contact; impact if false:
  legal, UI, email and ASC fields must use the approved alternative; resolve by:
  AKSM owner approval.
- **A9:** Existing JM users should not automatically become CSM participants;
  impact if false: a participant-data migration becomes a separate privacy/data
  project; resolve by: product owner confirmation plus production membership
  overlap counts, never copying data by default.
- **A10:** The historical JM backend can remain read-compatible during adoption;
  impact if false: old binaries may break immediately; resolve by: inventory old
  RPC/config dependencies and keep the minimum bounded compatibility surface.

### Blockers

- **B1:** AKSM legal/data owner must approve the privacy text, controller/seller
  relationship, minors wording, data-retention/anonymization matrix, canonical
  contact and standard-EULA decision before submission.
- **B2:** Account Holder/Admin must verify DSA trader status/contact data and the
  individual seller (`Michael Bujnovsk`) versus AKSM operator/licence relationship.
- **B3:** App Store Connect requires an editable version of the existing app and
  completed updated age-rating/privacy/compliance fields before submission.
- **B4:** A valid, non-privileged CSM reviewer account and any sample QR/data must
  be created and tested; credentials remain external secrets, not committed files.
- **B5:** Destructive production migrations, Edge/web deployments, OneSignal
  changes, App Store uploads/submission and public release each need separate authority.

## Deletion ledger

| Artifact | Current role | Final action | Removal proof |
|---|---|---|---|
| Public App Store name/description/screenshots/support/privacy for JM 2025 | Live product page | Replace on the new version of Apple ID `6745415882` | Public product-page snapshot after release contains CSM fields and no old URLs |
| `festapp.jm2025` main/extension bundle IDs | Immutable existing-app identity | Retain as named external boundary | ASC/build identity preflight |
| `fstapp.jm2025` Android namespace/application ID | Existing Google identity, outside Apple cutover | Retain; do not treat as visible brand | Allowlisted absence scan |
| `CFBundleName = festapp.jm2025` | Internal bundle name and current IPA filename assumption | Change to neutral `CSMOstrava`/build product name; make release script discover the IPA rather than depend on legacy name | Archive plist plus absence scan |
| `web/site.webmanifest` Jubileum title/description | Installed PWA visible brand | Generate/update from `project.conf` | Manifest assertion |
| Old privacy URL/policy | Live listing and incomplete legal surface | Replace with app-specific CSM URL/content | HTTP content test + ASC readback |
| `/privacy` Flutter fallback | Incorrect public legal route | Replace with explicit static legal response | `curl` status/MIME/body assertion |
| `web/apple-app-site-association` app ID `festapp.festapp` | Incorrect universal-link association | Replace with `8WKBB6L8LT.festapp.jm2025`; serve at root and `.well-known` | AASA CDN/device validation |
| `Runner.entitlements` only `live.festapp.net` | Old/incorrect associated domain | Add/replace with `applinks:csmostrava.festapp.net`; retain `live` only if a real consumer remains | Signed-entitlements inspection |
| Global unscoped offline keys containing JM data | Existing-install cache | Delete once before CSM cached reads; migrate future storage to occasion scope where feasible | Upgrade integration test |
| JM-scoped client-sync pointers/private generations | New store may coexist locally | Delete only JM scopes at generation cutover | Store test and key absence |
| Current `deleteAccountInstructions` email-credentials copy | Only user-facing deletion behavior | Delete in all locales and replace with request/confirmation states | Translation/search absence + UI test |
| `UserPage` informational delete button | Non-compliant flow | Migrate to `AccountDeletionService` and destructive confirmation UI | Widget/integration test |
| `delete_user(usr, oc)` as a tempting deletion shortcut | Manager/companion-specific RPC | Do not expose for self-delete; retain only for proven admin/companion caller, or rename in a separate compatible migration | Caller/grant map |
| Raw `user_reset_token` for deletion | Password-reset-only table | Never reuse; account deletion uses separate hashed lifecycle | Schema/function absence check |
| Unfiltered OneSignal `Subscribed Users` CSM broadcast | Reaches legacy binaries/anonymous users | Replace CSM occasion broadcast with canonical generation/occasion targeting | Edge test + OneSignal test audience |
| User's OneSignal external-ID record after account deletion | Third-party linked data | Delete via OneSignal User API | mocked contract test + non-prod API observation |
| Privacy draft's encrypted-password/direct-delete claims | False statements | Correct and legal-approve | copy/behavior matrix |
| Unused Always-location and microphone descriptions | Overbroad permission surface | Delete unless reachable use is proven | plist scan + on-device permission smoke |
| Manual metadata/screenshot copies | Drift-prone release input | Replace by canonical Fastlane artifact paths | preflight checksum/readback |
| Monolithic `publish_ipa` auto-submit/auto-release | Unsafe release coupling | Delete/replace with explicit lanes | Fastfile test/search |
| `fastlane_setup.sh` embedded stale Fastfile template | Can recreate unsafe automation | Update to install/copy canonical files or remove generator | regenerated-file diff test |
| Historical README link, JM occasion, map history, old binary backend | Historical/old-client compatibility | Retain intentionally with owner and sunset review date | Compatibility ledger/read-only old-client smoke |
| Prepared screenshot concept with AI-interpreted mark | Design exploration | Retain as source reference or remove from final upload path; never upload | final set checksum/dimension inventory |

## Implementation waves

### Wave 0 — Freeze the target and collect external decisions

**Goal**

Establish a reproducible existing-app target, approved legal ownership decisions,
and a data-retention inventory before destructive implementation.

**Changes**

- Add `automation/release/app_store_config.json` with pinned identity, version,
  locale, URLs, dimensions, release mode and legacy allowlist.
- Add `APP_STORE_CHECKLIST.md`, `APP_PRIVACY_DISCLOSURE.md`, and
  `APP_REVIEW_NOTES.md` with status/evidence/owner fields rather than unchecked prose.
- Inventory all production-schema FKs, Storage ownership, email provider,
  OneSignal app configuration, current App Privacy labels, age rating, DSA state,
  category, availability, content rights and agreements.
- Record AKSM approval of the retention matrix and standard EULA; do not commit
  reviewer credentials or legal-signoff secrets.
- Read-only ASC preflight must print Apple ID `6745415882`, live `0.14.25`, bundle
  ID and whether the existing-app editable version exists.

**Migration/deletion**

- None. This wave is read-only except repository artifacts.

**Failure and compatibility**

- If identity fields differ, stop all Apple mutation. Do not create a replacement app.
- If one auth UUID spans controllers/organizations, expand the legal/technical
  deletion boundary before implementation.

**Validation**

- `node automation/release/store_preflight.mjs --local --read-only` — manifest,
  metadata and identity consistency.
- Read-only schema query lists every FK to `user_info`/`auth.users` and is attached
  or summarized in the privacy/deletion matrix.

**Exit condition**

- Existing app identity is pinned; unresolved legal/retention/DSA decisions have
  named owners; no destructive wave depends on an unstated assumption.

### Wave 1 — Canonical brand/config and existing-install migration

**Goal**

The new binary has one visible CSM identity and cannot show stale JM data on an
in-place update.

**Changes**

- Extend `project.conf`/`apply_config.sh` to generate iOS display/internal names,
  PWA name/description, version stamps, legal URLs, and any shared brand fields.
- Keep bundle identifiers pinned and add an automated assertion that config
  propagation cannot rewrite them.
- Add `InstallationCutoverService` before cached settings/session-derived private
  data are rendered in `initializeEverything()`.
- Enumerate and clear the legacy global keys and JM client-sync scopes atomically;
  preserve refresh token, locale/theme and OS notification permission.
- Validate recovered session organization; clear invalid private state and
  OneSignal alias through the normal logout boundary.
- Set CSM OneSignal generation/occasion tags on updated-client startup before the
  client is eligible for occasion broadcasts.
- Update PWA manifest, icons, launch assets, display names and visible support
  strings from exact CSM sources.

**Migration/deletion**

- Remove visible JM/Jubileum runtime and web brand strings.
- Remove the new binary's ability to fall back to JM cache/occasion.

**Failure and compatibility**

- Migration marker is written last. A crash reruns idempotent cleanup.
- Offline first launch shows CSM shell/migration notice with no old content.
- Old binary backend paths remain read-compatible and are not imported into the
  new client's canonical routing.

**Validation**

- Flutter unit/integration test seeded with representative JM Sembast keys,
  client-sync scopes and secure-session fakes.
- Install public JM 0.14.25 on a test device/simulator, populate cache/login/push,
  then install the new archive over it and exercise online/offline startup.
- Focused `rg` against the manifest allowlist proves absence of unintended old brand.

**Exit condition**

- Fresh install and live-binary upgrade both display only CSM; offline upgrade
  displays no JM data; valid sessions are handled by the stated policy.

### Wave 2 — Expand the account-deletion persistence and domain contract

**Goal**

Create the secure, testable deletion lifecycle without exposing it to the UI or
production mail yet.

**Changes**

- Add forward migration and source schema for `account_deletion_requests` with
  status, token hash, expiry, cooldown timestamps, attempt/error state, minimal
  audit timestamps and indexes; RLS on, no direct anon/authenticated writes.
- Add explicit request/inspect/claim/cleanup/finalize RPCs, or a smaller cohesive
  set preserving the same invariants. Revoke public execution and grant only the
  intended authenticated/service-role boundaries.
- Create the approved table-by-table deletion/anonymization implementation.
- Normalize FKs to `CASCADE`/`SET NULL` only where that action is the durable
  domain rule; do not hide business retention decisions in blanket cascades.
- Cover Storage ownership and all in-progress/new tables such as event feedback
  and client-sync state.
- Keep admin/companion deletion behavior separately authorized and tested.

**Migration/deletion**

- Remove any dependency on `delete_user` for self-service deletion.
- Do not rewrite applied migrations; add one forward migration and update source SQL.

**Failure and compatibility**

- Public cleanup and durable operation state are transactional.
- Vendor/Auth steps are idempotent and resume from persisted state.
- A failed FK or vendor step remains retryable and never returns false completion.

**Validation**

- `node web_client/scripts/run_db_tests.js database/tests/account_deletion_contract_test.sql`.
- Test unauthenticated/other-user access, expiry, resend/revocation, token replay,
  concurrent confirm, populated user graph, retained/anonymized records, Storage
  ownership, manager/companion non-regression and no residual PII references.

**Exit condition**

- A representative populated test account reaches the expected DB terminal
  state; unauthorized or replayed operations cause zero data changes.

### Wave 3 — Email/Edge orchestration and vendor erasure

**Goal**

Deliver a branded, rate-limited, retry-safe email confirmation flow that removes
Supabase Auth and OneSignal identity without leaking credentials.

**Changes**

- Add `request-account-deletion` with explicit JWT validation via shared auth
  helper, request body rejection for user/email authority, rate limiting and
  generic error responses.
- Generate token in Edge, persist only hash via canonical RPC, and call
  `deliverEmail` with `ACCOUNT_DELETION_CONFIRM`.
- If delivery fails, revoke the newly active token or leave it safely retryable
  according to the state contract; never claim `email_sent` on failure.
- Add `confirm-account-deletion`: validate/claim hash, run public cleanup state,
  call Supabase Admin hard delete, call OneSignal Delete User by `external_id`,
  finalize state and send completion email using a pre-deletion address snapshot.
- On claim, atomically set the deletion block checked by authenticated domain
  entry points, revoke refresh sessions where supported, and return a state that
  makes the app clear secure credentials/private caches immediately. Treat any
  still-valid access JWT as blocked by deletion state, not as authorization.
- Keep the non-PII deletion job independently addressable after Auth/profile
  removal so a trusted retry worker can finish transient vendor failures.
- Add bounded retries for OneSignal `429`/`5xx`; treat not-found as idempotent success.
- Seed organization-level confirmation/completion templates and available
  substitutions through the existing template inheritance system.
- Update Edge Function documentation/deployment inventory.

**Migration/deletion**

- Delete the credentials-by-email instruction in all locales.
- No raw hard-coded production email HTML remains in the Edge Functions.

**Failure and compatibility**

- Link scanners perform GET only and cannot delete.
- Duplicate POST returns the stable terminal result.
- If completion email fails after mandatory deletion, deletion remains complete;
  record/monitor notification failure without recreating the account.
- JWT expiry after Auth deletion is expected; server endpoints must reject the
  deleted user even if a cached JWT has not yet expired.

**Validation**

- Deno unit/contract tests with mocked email, Supabase Admin and OneSignal HTTP.
- Local Supabase integration flow through request → email capture → inspect →
  confirm → replay, including transient vendor failure and retry.
- Non-production OneSignal user deletion observation by external ID.

**Exit condition**

- A test user receives branded mail, is deleted only after explicit confirmation,
  disappears from Auth/domain/OneSignal as designed, and replay is harmless.

### Wave 4 — User-facing deletion and legal experience

**Goal**

Expose an Apple-compliant, understandable deletion flow and accurate legal links
in native/web UI.

**Changes**

- Add `AccountDeletionService` methods and typed result/error states.
- Replace Profile delete text with a destructive dialog explaining scope,
  retained legal records/timeframe, masked destination, resend and cancellation.
- Add progress, email-sent, expired, invalid, retryable and completed states.
- Add public `DeleteAccountConfirmationPage`; GET is inspection/render only and
  final button performs POST.
- On completion, clear secure refresh token, private/offline cache and app user
  state; return to signed-out CSM shell. Best-effort client OneSignal logout is
  supplemental to the server deletion.
- Add Privacy, Privacy Choices, standard EULA and Support links to Settings/Profile.
- Add privacy notice/link adjacent to Signup submit without treating notice as
  consent; add separate terms acceptance only if B1 approves/mandates it.
- Add localized Czech/English UI strings. Do not snapshot-test full prose.

**Migration/deletion**

- Remove `deleteAccountInstructions` and all references to sending credentials or
  `info@festapp.net` for account deletion.

**Failure and compatibility**

- Closing the dialog or page performs no deletion.
- An expired link guides the signed-in user to request a new mail.
- A deleted session cannot leave private cached content visible.

**Validation**

- Flutter service and widget tests for discovery, request, no-delete-on-open,
  final confirmation, error/retry and local cleanup.
- Browser smoke of the public confirmation route at mobile/desktop breakpoints.
- Accessibility snapshot verifies labels, destructive semantics and focus order.

**Exit condition**

- A reviewer can find and complete account deletion without support contact,
  while every non-final action is non-destructive.

### Wave 5 — Publish legal pages and reconcile privacy/permissions

**Goal**

The binary, legal pages, App Privacy matrix and iOS permissions tell the same
approved story.

**Changes**

- Create approved Markdown legal sources and deterministic HTML renderer.
- Add Cloudflare worker/static asset routing for `/privacy`, `/privacy/choices`,
  `/terms` and AASA root/`.well-known` without SPA fallback.
- Correct AASA app ID to `8WKBB6L8LT.festapp.jm2025`, associated domain to
  `csmostrava.festapp.net`, MIME and no-redirect behavior.
- Update metadata privacy/support/marketing URLs to the canonical endpoints.
- Complete `APP_PRIVACY_DISCLOSURE.md` from code/network/SDK/archive evidence;
  explicitly classify Contact Info, User Content, Identifiers, Usage/Diagnostics,
  location and tracking/linkage/purposes.
- Remove inaccurate privacy statements and unneeded Info.plist usage descriptions.
- Generate/review Xcode's merged privacy report and add app-owned
  `PrivacyInfo.xcprivacy` only where required by app-owned required-reason APIs.
- Record `ITSAppUsesNonExemptEncryption=false` evidence, standard EULA, DSA,
  content-rights and updated age-rating answers in the checklist.

**Migration/deletion**

- Remove temporary AKSM-general privacy URL from final metadata.
- Remove obsolete/wrong AASA identifiers and overbroad permission descriptions.

**Failure and compatibility**

- Legal pages are cacheable documents but must update with a visible effective
  date/version. Do not let an old service worker mask an updated policy.
- Legal approval blocks store submission, not local implementation/testing.

**Validation**

- HTTP assertions for 200, canonical URL, body marker, charset/MIME, cache policy
  and no redirect on every legal/AASA endpoint.
- Signed archive entitlements/plist/privacy-report inspection.
- On-device smoke confirms only expected OS permission dialogs occur.

**Exit condition**

- Approved policy is public and reachable in-app; App Privacy/checklist answers
  are evidence-backed; permission and universal-link checks pass.

### Wave 6 — Final store assets and safe release automation

**Goal**

Make the entire existing-app update reproducible and reviewable before any
submission is possible.

**Changes**

- Finalize CSM name, subtitle, promotional text, keywords, description and
  release notes; explicitly explain the transformation from JM 2025 to CSM
  Ostrava in `whatsNew` and App Review notes.
- Include reviewer instructions for public mode, account-required features,
  deletion flow, notifications, location/camera, offline map download/size and
  sample QR if applicable.
- Capture source UI from the exact release candidate on iPhone 16 Pro Max and
  iPad Pro 13-inch simulators/devices using fictional data.
- Render deterministic final Czech sets at 1320x2868 and 2064x2752, using exact
  CSM SVG/logo, no alpha and no third-party/real-user personal data.
- Refactor Fastlane into the explicit lanes defined above; update/remove the
  stale generated Fastfile embedded in `fastlane_setup.sh`.
- Implement `store_preflight.mjs` checks: metadata lengths/encoding, URL status,
  screenshot count/dimensions/alpha, icon 1024/no-alpha, version monotonicity,
  bundle/team/Apple ID, legal approval markers, reviewer checklist and forbidden
  old-brand strings.
- Make `ios_build_and_upload.sh` non-interactive for artifacts and stop after
  upload; never auto-submit/release.

**Migration/deletion**

- Remove placeholder/concept images from Fastlane upload path.
- Remove implicit `skip_metadata`, `skip_screenshots`, disabled precheck and
  automatic release from the default release path.

**Failure and compatibility**

- Mutating lanes require exact identity confirmation and abort on missing editable
  existing-app version.
- Re-running metadata/screenshots is idempotent before submission.
- No credentials, p8 files or reviewer secrets are committed.

**Validation**

- `node automation/release/store_preflight.mjs --local --read-only`.
- Fastlane lane tests/dry run and read-only `asc_check`.
- `fvm flutter build ipa --release --no-codesign` during implementation; signed
  archive/upload validation remains a separately authorized release gate.

**Exit condition**

- One command validates all local artifacts; each upload lane changes only its
  named ASC surface; submission remains impossible without the final gate.

### Wave 7 — Authorized backend/web rollout and TestFlight upgrade proof

**Goal**

Deploy backward-compatible prerequisites and prove the real live-app upgrade
before App Review submission.

**Changes**

- With explicit authority, apply the forward DB migration and verify grants/RLS.
- Deploy request/confirm Edge Functions, templates/config/secrets and legal/AASA web.
- Configure OneSignal CSM generation targeting but keep production CSM broadcasts
  disabled until intended.
- Create the editable next version on Apple ID `6745415882` and upload build,
  metadata and screenshots through separate lanes.
- Install public JM 0.14.25, establish representative session/cache/push state,
  then update via TestFlight to the RC. Test online, first-launch offline,
  notification tagging, permission prompts, legal links and deletion using a
  disposable test account.
- Run App Store submission precheck/readback and save a redacted evidence summary.

**Migration/deletion**

- No historical JM production data deletion.

**Failure and compatibility**

- DB/Edge/web rollout is forward-compatible with the live old binary.
- A failed RC is replaced by a higher build; do not revert backend to an insecure
  email-deletion path.
- Keep CSM broadcasts gated during review/testing.

**Validation**

- Targeted production-safe smoke: legal/AASA endpoints, disposable deletion user,
  OneSignal test audience, ASC readback, TestFlight upgrade checklist.
- Repository's normal targeted SQL/Deno/Flutter checks for affected seams.

**Exit condition**

- RC upgrade from the actual live app passes; required services are live; ASC
  shows the correct existing app/version/build/metadata/screenshots and no submit
  has occurred.

### Wave 8 — Authorized submission, manual release and legacy contraction

**Goal**

Submit and manually release the existing-app update, then prove public cutover
without prematurely breaking old binaries.

**Changes**

- Account Holder/App Manager confirms checklist, legal approval, DSA, age rating,
  privacy labels, content rights, availability, review account and release mode.
- Run gated `submit_for_review` only after explicit authority.
- Respond to review using `APP_REVIEW_NOTES.md` evidence; fix forward on rejection.
- After approval and a separate release authorization, manually release the
  approved version.
- Enable CSM generation-targeted notifications according to event operations.
- Verify public product page, install/update path, metadata, screenshots, privacy
  link, support link, seller/DSA presentation and version.
- Monitor auth deletion failures, Edge errors, OneSignal delete retries, upgrade
  migration failures, crashes and notification targeting without logging PII.
- Set and document an old-binary compatibility review date/adoption threshold.
  At that later gate, remove only backend compatibility proven unreachable; do
  not delete historical JM records as part of this release.

**Migration/deletion**

- Public old store metadata/screenshots become unreachable through the live page.
- Remove any temporary release-only flags and credentials after release.

**Failure and compatibility**

- Before public release, rollback means reject/remove the RC or upload a fixed
  higher build; it does not restore old insecure deletion architecture.
- After public release, rollback is forward-only via a new app update. Backend
  remains compatible with the released CSM binary and bounded old JM clients.

**Validation**

- Public App Store and API readback; clean install and in-place update on physical
  iPhone/iPad; production health/privacy/deletion monitors; old-brand absence scan.

**Exit condition**

- CSM Ostrava is live as an update of Apple ID `6745415882`; existing users can
  update in place; deletion/privacy paths work; no unfiltered CSM push reaches
  legacy audience; all deletion-ledger items are removed or intentionally bounded.

## Rollout and rollback

### Authorized ordering

1. Implement and validate locally through Wave 6.
2. Obtain AKSM legal/data and Apple account decisions.
3. Deploy additive DB/Edge/email/legal/AASA changes; do not break old clients.
4. Apply OneSignal generation tagging/targeting and keep CSM broadcast gated.
5. Create the next version on the existing Apple ID, upload artifacts separately.
6. Prove public-JM → TestFlight-CSM upgrade with retained sandbox state.
7. Submit with manual release selected.
8. After approval, obtain release authorization and release manually.
9. Verify public state and monitor.
10. Review old-client compatibility after an explicit adoption/sunset interval.

### Rollback limits

- Before DB deployment: normal code rollback; no state exists.
- After additive DB/Edge deployment: old binary continues to work; disable the
  new UI/endpoint exposure only by a forward fix, preserving request audit state.
- During TestFlight/App Review: replace the build with a higher fixed build or
  remove submission; never create a new app.
- After App Store release: installed clients cannot be downgraded. Ship a forward
  update and retain safe backend compatibility.
- Do not roll back to email-with-credentials deletion, raw tokens, unfiltered
  broadcasts, stale JM cache fallback, or false privacy copy.
- Account deletion and vendor erasure are irreversible. Test only with disposable
  accounts and require explicit production authority.

## Verification strategy

| Risk or invariant | Verification seam | Command/observation |
|---|---|---|
| Existing app targeted, no new app | ASC numeric identity | `fastlane ios asc_check`; manifest assertion |
| Version/config consistency | Config generation | `./automation/apply_config.sh` followed by clean focused diff and preflight |
| No unintended JM brand | Allowlisted search | `rg` across runtime/release/web/iOS/Android with manifest allowlist |
| Existing-install migration | Storage/session integration | seeded Sembast/client-sync/secure-storage test plus live→TestFlight upgrade |
| No stale data offline | Startup behavior | first post-update launch with network disabled |
| Request authorization | Edge/SQL contract | missing/invalid JWT and body-injected UUID/email tests |
| Token secrecy/single use | DB/Edge contract | hashed storage, expiry, resend, scanner GET, replay and concurrency tests |
| Complete public cleanup | SQL integration | `database/tests/account_deletion_contract_test.sql` with populated dependencies |
| Auth deletion | Local Supabase | Admin hard-delete and cached-JWT rejection observation |
| OneSignal erasure | HTTP adapter | mocked retries/404 plus disposable non-production user deletion |
| No false completion | State machine | transient Auth/OneSignal failures and resume tests |
| UI discoverability/safety | Flutter widget/integration | Profile discovery, explicit final action, local cleanup, accessibility |
| Legal routes static/correct | HTTP | `curl` headers/body/no-redirect for privacy/choices/terms |
| Universal links | AASA + signed entitlement | both AASA paths, MIME, app ID and physical-device link test |
| Privacy disclosure accurate | Evidence matrix | Xcode privacy report, dependency/network inventory, ASC readback |
| Least privilege prompts | iOS device | permission smoke; plist absence/presence assertions |
| Screenshot validity | Store preflight | count, exact dimensions, no alpha, checksum, fictional-data signoff |
| Metadata validity | Store preflight/Fastlane | length, encoding, URLs, existing editable version and readback |
| No accidental submit/release | Fastlane contract | lane dry run/search; upload lanes report non-submitting state |
| Review access | Disposable reviewer fixture | login and protected/public feature walkthrough |
| Public cutover | App Store/device | product page/API readback, clean install, in-place update |

Do not run the repository-wide release suite after every wave. Run targeted
checks per wave, then one normal affected-seam batch before TestFlight. The
signed archive, TestFlight upgrade, App Store precheck and physical-device checks
are release gates tied to separately authorized external actions.

## Definition of complete

- [ ] Apple ID `6745415882`, bundle ID `festapp.jm2025` and intended signing team
      are preserved and asserted by automation.
- [ ] No new App Store application was created.
- [ ] The new binary and all visible/store/legal/email/push surfaces use CSM Ostrava.
- [ ] Fresh install and live JM → CSM upgrade pass online and first-launch-offline.
- [ ] JM cache/private projections cannot appear in the new binary.
- [ ] Retained auth sessions follow the organization/participation policy.
- [ ] Account deletion is discoverable, email-verified, explicit, single-use,
      retry-safe and never requires credentials by email.
- [ ] Public data, Auth, Storage and OneSignal deletion/anonymization match the
      approved retention matrix for a populated account.
- [ ] Privacy, choices, terms and support are public and linked in-app.
- [ ] App Privacy, privacy manifest/report, permission prompts, age rating, DSA,
      encryption, content rights and legal owner approvals are complete.
- [ ] Correct AASA is served for the shipping bundle/domain and verified on device.
- [ ] Final iPhone 6.9-inch and iPad 13-inch Czech screenshots are versioned,
      valid and uploaded from canonical paths.
- [ ] Metadata, reviewer notes and release notes accurately describe the major update.
- [ ] Upload lanes cannot submit or release; submit and release require separate gates.
- [ ] TestFlight upgrade from the public JM binary passes before submission.
- [ ] CSM broadcast notifications are generation/occasion targeted.
- [ ] Public App Store page shows CSM Ostrava after manual release.
- [ ] Deletion-ledger items are removed or retained only as named external/history
      boundaries with owner and review date.
- [ ] Targeted standard verification and release-specific external gates pass.
- [ ] Production actions are verified complete or explicitly reported as pending.

## Residual risks

- Apple's review may question a complete event rebrand under an existing listing.
  Mitigation: transparent release/review notes, same platform/function family,
  accurate metadata and no attempt to obscure the update.
- Existing users who never update remain on JM code and may require historical
  backend compatibility longer than expected. Mitigation: tagged push audience,
  adoption monitoring and an explicit sunset review rather than immediate deletion.
- Supabase JWTs issued before hard deletion can remain cryptographically valid
  until expiry. Mitigation: all privileged/domain operations must also depend on
  current user/profile existence; test the deleted-session behavior.
- Legal retention/minors/controller wording cannot be established from code alone.
  Submission remains blocked on B1/B2 approval.
- The dirty working tree contains overlapping auth/profile/client-sync work.
  Execution must integrate at current HEAD and update this plan if the owning
  contracts change before implementation.
