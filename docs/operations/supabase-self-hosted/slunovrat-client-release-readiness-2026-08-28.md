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

Remaining external release gates:

1. confirm the canonical public anon key and write only its digest to evidence;
2. confirm the existing Apple App ID, distribution certificate, provisioning
   profiles and OneSignal extension/app-group relationship;
3. create a build-only iOS IPA and isolated canonical web preview, then run the
   release/deployment probes;
4. add the Slunovrat web/reset origin to canonical Auth and Edge Function
   allowlists;
5. rotate/provision notification provider credentials privately and perform the
   delivery canary;
6. obtain separate authorization for production web/DNS/App Store activation.

No production Netlify deployment, DNS mutation, App Store upload, Google Play
upload or Android build was performed by this rehearsal.
