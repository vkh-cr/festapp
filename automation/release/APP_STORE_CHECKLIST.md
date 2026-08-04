# CSM Ostrava App Store checklist

Target: existing Apple ID `6745415882`, bundle ID `festapp.jm2025`, version `0.19.84` (368). No new app may be created. Release is manual after approval. Canonical app-specific values live in `app_store_config.json`.

| Gate | Status | Owner | Evidence / required action |
|---|---|---|---|
| Numeric app, bundle and team identity | passed 2026-08-04 | Release engineer | API readback: Apple ID `6745415882`, bundle `festapp.jm2025`, editable `0.19.84`, state `PREPARE_FOR_SUBMISSION`; live version remains `0.14.25` |
| Reproducible release archive | intentionally deferred | Release engineer | Signing inputs are prepared, but per product-owner direction no `0.19.84` (368) IPA is being built yet |
| Release signing | prepared 2026-08-04 | Release engineer | One Apple Distribution certificate plus active App Store profiles for `festapp.jm2025` and its OneSignal extension; dedicated local gitignored keychain is prepared for later build |
| Isolated OneSignal audience contract | local code proof passed; external observation pending | Release + backend owner | Subscription tags are independent of login; exact generation+occasion AND and legacy/wrong-tag negative tests pass. Production dashboard/device matrix and disposable vendor deletion still require separate authority |
| Editable existing-app version | passed 2026-08-04 | Release engineer | Gated API lane created `0.19.84` only on Apple ID `6745415882`; readback is `PREPARE_FOR_SUBMISSION` |
| Store metadata and public URLs | passed 2026-08-04 | Release engineer | Czech name/description metadata uploaded. Privacy, Privacy Choices, Support and Marketing URLs match the manifest by API readback; Privacy/Choices/Terms/Support/Delete Account all return HTTP 200 |
| AKSM privacy/retention/minors approval | pending external | AKSM legal/data owner | Approve versioned legal sources and deletion matrix before submission |
| DSA trader/seller relationship | pending external | App Store Account Holder | Verify displayed trader/contact and Michael Bujnovsk–AKSM relationship |
| App Privacy answers | questionnaire prepared; approval/ASC entry pending | Privacy owner | Approve the exact proposed matrix and confirm location, purchase history, device ID and provider diagnostics in `APP_PRIVACY_DISCLOSURE.md`; then enter it in ASC and save readback |
| Age rating/content rights/category/availability | passed 2026-08-04 | Product owner | ASC readback matches the canonical config: inherited Travel + Education, third-party content yes, automatic availability in new territories, all legacy frequencies none, and all newer questions false including health/wellness |
| Standard EULA | selected, approval pending | AKSM legal | Apple standard EULA; no custom EULA upload |
| Export compliance | locally evidenced | Release engineer | `ITSAppUsesNonExemptEncryption=false`; confirm archive value |
| Reviewer access | passed 2026-08-04 | Product owner | ASC readback matches Apple-visible login `test@test.com`; the app adds organization prefix `9+` and authenticates as `9+test@test.com`. The effective account is Jan Novák in organization 9 / CSM occasion 643: approved attendee, no admin/editor/manager flags, 6 registered and 3 saved program items, password login 200 and logout 204. Reviewer password remains in macOS Keychain service `festapp-csm-reviewer` |
| Final screenshots | passed locally and in ASC 2026-08-04 | Screenshot-session owner | Seven iPhone and six iPad PNGs selected by the product owner; dimensions/alpha passed locally and API readback confirms exact counts after removal of two retry-created identical duplicates |
| Live-JM to CSM upgrade | pending external | QA owner | Online and first-launch-offline device checklist against the uploaded App Store build; TestFlight is not part of this release path |
| Disposable account deletion | local proof passed 2026-08-03; deployed test pending | Privacy + QA owner | Repository-local Supabase CLI ran the SQL contract and a unique create/seed/email/GET/POST/replay lifecycle; Auth/profile/occasion/event/request leftovers were all zero. Production-like rehearsal still needs separate destructive authority |
| Submit for review | blocked until explicit authority | App Store Account Holder | Exact gate: Apple ID + bundle + target version |
| Public release | blocked until separate authority | App Store Account Holder | Manual release only after approval |

Old-binary compatibility owner: backend owner. Review date: 2026-10-01 or after an approved adoption threshold, whichever is later.
