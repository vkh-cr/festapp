# Self-hosted client release rehearsal — 2026-08-28

The corrected client rehearsal used an isolated post-merge CSM overlay over
shared source commit `580dbb57a77488eff1bb1e62d0b0718151b346cb`. It preserved the production
mobile identities (`fstapp.jm2025` and `festapp.jm2025`) while pointing only to
`https://rehearsal-api.festapp.net`. Production DNS and store state were not
changed.

The final browser audit caught and corrected one release-contract gap: source
organization `9` is target organization `12`. The client preflight now binds
`ORGANIZATION_ID` to `backend.organizationId`, so an old cloud numeric ID cannot
survive a deterministic merge unnoticed. Web and mobile rehearsal candidates
must be rebuilt from that corrected contract; the earlier organization-9
artifacts are invalid evidence.

## Web

The corrected CSM web profile `0.19.92+450` was assembled at isolated overlay
commit `d79d3f0cf6d53b9960258f9f902560c0b3745d3d` with organization `12`. It
passed the canonical-cutover preflight, Flutter
release build, vanilla-client build, completed-bundle verifier and deployment
verifier. It is deployed only to the isolated Cloudflare Pages project at
`https://festapp-rehearsal-client.pages.dev`; the verifier passed three
consecutive probes. A browser canary on the actual Flutter occasion route
`/csmostrava2026` returned `get_app_config_v219` HTTP 200 and no access/not-found
state. Its private mode-0600 HAR has SHA-256
`e909fcb42767f4278709214dc9282b89a856d4eef930a39db863f35580ffff48`.
The production CSM Pages project was not changed.

## iOS

`automation/release/ios_build_candidate.sh` provides a build-only release path:
it has no Fastlane, Transporter or App Store Connect call. The signed App Store
organization-12 IPA for `festapp.jm2025`, version `0.19.92 (450)`, was built at
isolated overlay commit `74de7a0b9f0ff33f2b21c4cd05b673fd15ca3f3d` and passed
bundle/version and distribution-certificate inspection. The retained private
artifact is 43,422,527 bytes with SHA-256
`8cb9009e3f77fb48f181d2fc620b6b249557465fb376649207581f37fc5bd325`.
Its mode-0600 evidence has SHA-256
`dc70588d72c8735ec08e696322c298831b13d9a93aa4f1d70eb48db2527996e9`.
The earlier organization-9 IPA and its SHA are superseded and must never be
uploaded. App Store Connect was not mutated.

## Auth, rights and idempotent write

The existing review account password was read from macOS Keychain and never
written to evidence. Against the public rehearsal origin, password login,
`/auth/v1/user`, and the rights RPC returned HTTP 200. An existing saved-program
row was sent through the public write RPC in idempotent `join` mode; the exact
before/after aggregate digest matched and zero target rows changed. The current
application is email-only: target Auth settings expose e-mail and keep Google
OAuth disabled, and the disabled-provider request was rejected with HTTP 400.

This auth/rights/write evidence is independent of the superseded IPA. It is
mode 0600 and has SHA-256
`d594aca5b2d6213bda4cd242cb65ab57496b5ca2c3225618ee18ad79014fc73c`.
Cloud sources, production DNS and external provider accounts were not mutated;
no row was deleted.

## Android

Control-channel command `1029` is superseded because it was prepared before the
source organization `9` to target organization `12` correction. Any output it
may later produce is invalid and must not be uploaded. A replacement build-only
command will require organization `12`, the final pushed shared source and a
deterministically regenerated pushed CSM overlay. The Mac master and stable
tunnel are healthy, but the paired Windows builder has not polled since
2026-08-10. No replacement signing key is generated, no unsigned artifact is
accepted and no Google Play edit or upload is authorized.

## Notification delivery credential

The rehearsal audit found that the OneSignal REST credential historically lived
inside `organizations.data` and could therefore cross the admin-client DTO/RPC
boundary. Migration `20260828110000_move_onesignal_credentials_server_side.sql`
now extracts it into a no-direct-grants, RLS-enabled server-only table. The
admin RPC scrubs the legacy key, the admin update rejects attempts to restore
it, Flutter no longer models or edits it, and both delivery Functions use the
service-role-only configuration RPC. An isolated copy migrated 10/10 values,
left zero legacy JSON keys, and passed the SQL and Edge tests.

The provider credential itself must still be rotated through an authorized
OneSignal/FestappSeed session. Production activation remains blocked until the
replacement is provisioned, notification and account-deletion canaries pass,
and the historical key is rejected. No secret value is recorded in this
repository.

The final production release still requires a fresh post-merge tenant overlay,
the production `api.festapp.net` manifest, store approval/adoption evidence and
the production full-freeze/final-marker gate.
