# CSM Ostrava App Privacy questionnaire

Status: manually entered and published in App Store Connect on 2026-08-04,
with visual and network readback. Apple returned HTTP 201 for the new Phone
Number usage and the App Privacy page then reported “Published a few seconds
ago”. The questionnaire remains a manual App Store Connect workflow because
the public App Store Connect API does not expose the required relationship.

## Published data-type answers

| Apple data type | Collected / linked | Purpose | Evidence |
|---|---|---|---|
| Name and email address | Yes / linked | App functionality | Participant account/profile, occasion participation and transactional email. |
| Phone number | Yes / linked | App functionality | The canonical participant profile and registration forms store a phone number. Tracking is No. |
| Other user contact info | Yes / linked | App functionality | Additional participant contact/profile fields. |
| Other user content | Yes / linked | App functionality | Feedback, reports, registrations and personal schedule are associated with the signed-in account. |
| User ID | Yes / linked | App functionality | Supabase UUID and OneSignal external ID. OneSignal's bundled privacy manifest separately declares an unlinked User ID for app functionality. |
| Product interaction | Yes / not linked | App functionality and analytics | Published disclosure and bundled OneSignal privacy manifests. |
| Tracking | No | — | No advertising/ATT flow or cross-company tracking purpose was found. All inspected SDK privacy manifests declare tracking false. |

Photos/videos, Device ID, precise/coarse location, purchases and diagnostics
are not selected in the published disclosure. Reassess them before a future
release if the attendee feature set or production provider configuration
changes; admin-only upload surfaces and on-device map location are not enough
on their own to declare attendee data collection.

## Processors and deletion

Processors/recipients requiring legal confirmation: Supabase, OneSignal, the
configured email provider, Cloudflare/web edge, and Apple distribution.

Account deletion is self-service: a one-time email link is validated first and
deletion happens only after the final destructive confirmation. First-party
account/profile/participation data and the associated OneSignal user are
deleted; any legally retained transaction fact must be de-identified under the
approved matrix. No password or credential is requested by email.

## Live disclosure URLs

- Privacy policy: `https://csmostrava.festapp.net/privacy`
- Privacy choices: `https://csmostrava.festapp.net/privacy/choices`
- Account deletion: `https://csmostrava.festapp.net/delete-account`
- Terms: `https://csmostrava.festapp.net/terms`
- Support: `https://csmostrava.festapp.net/support`

All five endpoints returned HTTP 200 on 2026-08-04. Privacy Policy and Privacy
Choices were also written to App Store Connect and verified by API readback.
