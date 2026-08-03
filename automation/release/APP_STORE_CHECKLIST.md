# CSM Ostrava App Store checklist

Target: existing Apple ID `6745415882`, bundle ID `festapp.jm2025`, version `0.19.82` (333). No new app may be created. Release is manual after approval.

| Gate | Status | Owner | Evidence / required action |
|---|---|---|---|
| Numeric app, bundle and team identity | locally pinned; ASC readback blocked 2026-08-03 | Release engineer | `app_store_cutover.json`; configured ASC key was not found in Downloads, Desktop, Documents or `~/.appstoreconnect`; recover it, then run read-only `fastlane ios asc_check` |
| Reproducible unsigned archive | passed 2026-08-03 | Release engineer | Clean dependency/Pods regeneration plus `fvm flutter build ipa --release --no-codesign`; `Runner.xcarchive` reports CSM Ostrava `0.19.82` (333), `festapp.jm2025`, and the existing OneSignal extension bundle |
| Isolated OneSignal audience contract | local code proof passed; external observation pending | Release + backend owner | Subscription tags are independent of login; exact generation+occasion AND and legacy/wrong-tag negative tests pass. Production dashboard/device matrix and disposable vendor deletion still require separate authority |
| Editable existing-app version | pending external | App Store Account Holder | Create version `0.19.82` only on Apple ID `6745415882` |
| AKSM privacy/retention/minors approval | pending external | AKSM legal/data owner | Approve versioned legal sources and deletion matrix before submission |
| DSA trader/seller relationship | pending external | App Store Account Holder | Verify displayed trader/contact and Michael Bujnovsk–AKSM relationship |
| App Privacy answers | pending ASC entry | Privacy owner | Apply approved answers from `APP_PRIVACY_DISCLOSURE.md` and save readback |
| Age rating/content rights/category/availability | pending ASC entry | Product owner | Reconcile against the shipped binary |
| Standard EULA | selected, approval pending | AKSM legal | Apple standard EULA; no custom EULA upload |
| Export compliance | locally evidenced | Release engineer | `ITSAppUsesNonExemptEncryption=false`; confirm archive value |
| Reviewer access | pending secret fixture | Product owner | Create and test a non-privileged disposable CSM account; never commit credentials |
| Final screenshots | pending external handoff | Screenshot-session owner | Reviewed `iphone69` and `ipad13` sets plus named product/privacy approval are absent; do not substitute source captures or the archived concept |
| Live-JM to TestFlight-CSM upgrade | pending external | QA owner | Online and first-launch-offline device checklist |
| Disposable account deletion | local proof passed 2026-08-03; deployed test pending | Privacy + QA owner | Repository-local Supabase CLI ran the SQL contract and a unique create/seed/email/GET/POST/replay lifecycle; Auth/profile/occasion/event/request leftovers were all zero. Production-like rehearsal still needs separate destructive authority |
| Submit for review | blocked until explicit authority | App Store Account Holder | Exact gate: Apple ID + bundle + target version |
| Public release | blocked until separate authority | App Store Account Holder | Manual release only after approval |

Old-binary compatibility owner: backend owner. Review date: 2026-10-01 or after an approved adoption threshold, whichever is later.
