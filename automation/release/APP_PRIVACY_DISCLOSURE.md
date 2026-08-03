# CSM Ostrava privacy disclosure evidence

Status: implementation evidence assembled; AKSM approval and App Store Connect readback remain external gates.

| Data class | Collected / linked | Purpose and observed owner | Deletion treatment |
|---|---|---|---|
| Contact information | Yes, linked | Account, event participation and transactional email via Supabase and configured SMTP provider | Delete profile/contact data; legally retained transaction facts must be de-identified under the approved matrix |
| User content | Yes, linked where authenticated | Profile, schedule, registrations, feedback, reports and administrative content | Delete private participation/content; retained public/admin authorship is detached from identity |
| User identifier | Yes, linked | Supabase UUID; OneSignal external ID for authentication and push routing | Hard-delete Auth identity and OneSignal user after confirmed request |
| Usage / diagnostics | Limited | Service operation, delivery and error records; no credentials or raw deletion tokens may be logged | Expire under provider/log schedules; deletion workflow keeps only non-PII operational state |
| Precise location | On-device feature only, verification pending | Map position/navigation while in use | Not persisted by the account-deletion module; network/device verification required before ASC entry |
| Device / push data | Yes, linked by vendor | OneSignal notification delivery and generation/occasion targeting | OneSignal Delete User by Supabase UUID; device permission remains under OS control |
| Tracking across companies | No observed product use | No advertising or cross-company tracking purpose found | Re-verify merged SDK privacy report before submission |

Processors/recipients requiring final legal confirmation: Supabase, OneSignal, the configured email provider, Cloudflare/web edge, and Apple distribution. The canonical policy is generated from `legal/privacy-policy.cs.md`.
