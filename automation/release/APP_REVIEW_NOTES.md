# CSM Ostrava App Review notes

This submission updates the existing JM 2025 application (Apple ID `6745415882`) in place into CSM Ostrava 2026. The bundle identifier intentionally remains `festapp.jm2025` so existing installations receive the update. The product remains an event guide platform; no new App Store record was created.

The first updated launch removes event-specific JM caches before any cached content is shown. A valid account session may remain, but no JM participation is copied into CSM.

Account deletion is available from Profile → Delete account. The signed-in user requests a one-time email. Opening the link only validates and displays it. Deletion occurs only after the user presses the final destructive button. The completed operation deletes first-party account data and the associated OneSignal user; approved statutory records are de-identified. No password or credential is requested by email.

Reviewer credentials, sample QR data and the exact tested scenario are maintained as external secrets and must be entered in App Store Connect immediately before submission. Public-mode functionality must also be tested without an account.

Permissions to exercise: camera for QR scanning, location only while using the map, and Photos only from the reachable profile-image upload flow. Notifications are optional and CSM broadcasts are generation/occasion targeted.
