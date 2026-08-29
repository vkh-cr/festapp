# Slunovrat client release readiness — 2026-08-28

Slunovrat client releases must be generated from current canonical `main` plus
the narrow `festivalslunovrat` tenant overlay. The old
`origin/prod/festivalslunovrat` branch is a historical data/config reference,
not a merge source for shared application code.

Verified configuration inputs:

- canonical backend origin: `https://api.festapp.net` (activate only at final
  cutover);
- mapped organization: `19`, not legacy source ID `1`;
- web origin and associated domain: `app.festivalslunovrat.cz`;
- iOS bundle ID `festapp.festivalslunovrat`, team `8WKBB6L8LT`, and app group
  `group.festapp.festivalslunovrat` subject to renewed provisioning proof;
- Android application ID `fstapp.slunovratopava` as configuration only; the
  signed build remains deferred to the independent Windows workstation;
- languages `cs,en,pl`, brand colors `#53707f`, `#f8c04f`, `#de703e`,
  `#e9dabb`, and font `Agrandir-Narrow`;
- a unique auth-storage namespace retaining the old project-ref suffix and a
  new push-app generation.

The main-owned overlay schema, path allowlist, config generator and matrix tests
now recognize `festivalslunovrat`. A production overlay must be created only
after these changes land on canonical `main`, recording that exact main SHA.
It must include a private canonical release manifest with the public-key digest,
organization `19`, Auth/reset/CORS origins, session-transition evidence and
deployment generation.

Completed after the initial readiness inventory:

- the canonical public-key digest is recorded in the private tenant release
  manifest; no secret key is committed;
- canonical Auth, reset and Edge Function allowlists include the Slunovrat
  production origin with constrained callback paths;
- all 259 current client RPC names, 14 invoked Edge Functions and 48 directly
  used relations are present on the canonical target;
- the version-93 Cloudflare candidate is deployed at
  `festivalslunovrat.pages.dev`; Program, event detail, in-app back navigation,
  Map and canonical REST/RPC reads were exercised successfully;
- the existing OneSignal application retained the production
  `app.festivalslunovrat.cz` web origin, and a zero-recipient provider canary
  succeeded without sending a notification;
- compact offline-map schema 3 is implemented on canonical `main` without
  changing the existing schema-2 dual-renderer contract. Immutable Slunovrat
  `festivalslunovrat/v2` is publicly verified with 12 assets / 29,783,342 bytes
  (28.4 MiB), down from 79,999,911 bytes. It contains PMTiles plus Latin,
  Latin-Extended and General-Punctuation glyphs, no duplicate MBTiles payload,
  and has manifest SHA-256
  `95f8ceec864f1b2464ea4c414f9a8c3cc5c785f9de2a9ef14f22e590d556456f`;
- encrypted canonical backup and isolated restore verification passed.

Remaining external/final-cutover gates:

1. point `app.festivalslunovrat.cz` at the prepared Cloudflare Pages project and
   verify TLS, OneSignal service-worker scope and provider delivery on that real
   origin;
2. point the build-only Slunovrat candidate at the verified offline-map v2
   manifest and complete native cold-start/airplane-mode acceptance before
   setting `forceOfflineMap=true`; the manifest is published but intentionally
   not yet activated for older installed clients;
3. create and validate a build-only iOS candidate with the existing App ID,
   distribution certificate, provisioning profile, app group and OneSignal
   extension; do not submit the final App Store release yet;
4. prepare the Android configuration, but defer the signed build to the
   independent Windows workstation;
5. perform the production write freeze, final delta import and zero-lag audit,
   then publish the backend activation generation and verify session continuity;
6. only after those gates, authorize custom-domain production activation and
   later the mobile store releases.

No App Store upload, Google Play upload, Android build, production freeze,
production write-authority switch or global backend activation was performed by
this rehearsal.
