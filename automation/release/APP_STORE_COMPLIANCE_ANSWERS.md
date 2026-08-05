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
| Social media | `false` | No social feed or redistribution, amplification, discovery or interaction with broadly distributed user-generated content. Published in ASC on 2026-08-04. |
| Social media disabled for users under 13 | `false` | Not applicable because the app has no social-media capability. Published in ASC on 2026-08-04. |
| Unrestricted web access | `false` | Keep the current readback. |
| User-generated content | `false` | Feedback/profile content is not publicly published to other users. |

Keep the legacy `medicalOrTreatmentInformation=NONE` answer unchanged. Programme
topics do not turn the event-guide app into a medical, treatment, health or
wellness product.

## DSA / trader information

The publisher and Apple Developer Account Holder is Michael Bujnovský under an
individual account. The product owner declares `NOT_TRADER`: the app is free,
contains no advertising or in-app purchases, and is not commercialized. In App
Store Connect select “This is not a trader account”. This declaration concerns
the publisher only; no organizer relationship or organizer contact belongs in
the DSA answer.

App Store Connect readback on 2026-08-04 shows this declaration as `Active`
for all 27 EU countries or regions, with the non-trader option selected. No
further DSA action is pending for this release.

## Country availability

The product owner approved excluding China mainland. App Store Connect now
reports 174 available countries or regions and China mainland as `Processing to
Not Available`. Automatic availability in new territories remains enabled.

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
