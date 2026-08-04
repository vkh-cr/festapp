# CSM Ostrava App Store compliance answers

Prepared from repository evidence, product-owner decisions and App Store Connect
readback on 2026-08-04. The canonical values were uploaded and matched readback.

## Current App Store Connect readback

- Primary category: `TRAVEL`; secondary category: `EDUCATION` — keep the
  inherited values unchanged.
- Content rights: `USES_THIRD_PARTY_CONTENT` — keep the inherited value.
- Availability: keep automatic availability in new territories enabled.
- Existing age-rating frequency fields are `NONE`; gambling and loot boxes are
  false; unrestricted web access is false.

## Newer age-rating questions

| Question | Prepared answer | Evidence / required confirmation |
|---|---|---|
| Advertising | `false` | Approved product answer; no ad SDK or advertising flow found. |
| Age assurance | `false` | Approved product answer; no age-verification service found. |
| Gambling | `false` | No gambling functionality found. |
| Health or wellness topics | `false` | Approved product answer: the app is an event guide and does not provide health or wellness functionality. |
| Loot boxes | `false` | No game economy found. |
| Messaging and chat | `false` | Feedback/reports are not user-to-user chat. |
| Parental controls | `false` | No parental-control feature found. |
| Unrestricted web access | `false` | Keep the current readback. |
| User-generated content | `false` | Feedback/profile content is not publicly published to other users. |

Keep the legacy `medicalOrTreatmentInformation=NONE` answer unchanged. Programme
topics do not turn the event-guide app into a medical, treatment, health or
wellness product.

## DSA / trader information

The official AKSM site identifies Asociace křesťanských spolků mládeže, z. s.,
IČ 67775861, Thákurova 676/3, 160 00 Praha 6–Dejvice,
`kancelar@aksm.cz`, +420 220 181 739 / +420 731 625 720. The Apple signing
certificate identifies Michael Bujnovsk. The Account Holder must confirm the
seller/trader status, which contact Apple should display, and Michael
Bujnovsk's authority/relationship to AKSM. Automation must not assert it.

## Reviewer information

- Contact: Michael Bujnovský, `bujnmi@gmail.com`.
- Phone: `+420792759379`.
- The reviewer enters `test@test.com`; the app adds organization prefix `9+` and
  authenticates the regular attendee fixture `9+test@test.com`, verified as Jan
  Novák in organization 9 / CSM occasion 643. It is approved and has no
  administrative/editor/manager flags. Its reviewer password is stored in
  macOS Keychain service `festapp-csm-reviewer` and the Fastlane reviewer lane
  reads it without committing or logging it.
- Confirmation that the reviewer notes accurately cover public mode, login-only
  programme registration, account deletion, QR/camera, map/location and optional
  notifications.
