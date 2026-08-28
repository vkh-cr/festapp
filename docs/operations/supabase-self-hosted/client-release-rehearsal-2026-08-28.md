# Self-hosted client release rehearsal — 2026-08-28

The client rehearsal used an isolated post-merge CSM overlay over shared source
commit `401db956b40587ef62404b27dc830da6f61f01aef`. It preserved the production
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

The CSM web profile `0.19.92+450` passed the canonical-cutover preflight, Flutter
release build, vanilla-client build, completed-bundle verifier and deployment
verifier. It is deployed only to the isolated Cloudflare Pages project at
`https://festapp-rehearsal-client.pages.dev`; the verifier passed three
consecutive probes. The production CSM Pages project was not changed.

## iOS

`automation/release/ios_build_candidate.sh` provides a build-only release path:
it has no Fastlane, Transporter or App Store Connect call. The signed App Store
IPA for `festapp.jm2025`, version `0.19.92 (450)`, passed bundle/version and
distribution-certificate inspection. The retained private artifact is
43,422,805 bytes with SHA-256
`5387a70f4d504578664c5bdbb89c8798972e146e0be8be655da4e38d33cecdc6`.
App Store Connect was not mutated.

## Auth, rights and idempotent write

The existing review account password was read from macOS Keychain and never
written to evidence. Against the public rehearsal origin, password login,
`/auth/v1/user`, and the rights RPC returned HTTP 200. An existing saved-program
row was sent through the public write RPC in idempotent `join` mode; the exact
before/after aggregate digest matched and zero target rows changed. The current
application is email-only: target Auth settings expose e-mail and keep Google
OAuth disabled, and the disabled-provider request was rejected with HTTP 400.

The private canary evidence is mode 0600 and has SHA-256
`d594aca5b2d6213bda4cd242cb65ab57496b5ca2c3225618ee18ad79014fc73c`.
Cloud sources, production DNS and external provider accounts were not mutated;
no row was deleted.

## Android

The bounded signed-AAB command is queued as control-channel command `1029`. It
requires the same exact shared source, CSM overlay, backend manifest, original
owner-supplied upload key and artifact/certificate hashes, and explicitly
forbids every Google Play edit or upload. The Mac master and stable tunnel are
healthy, but the paired Windows builder has not polled since 2026-08-10. The
command therefore remains queued, not falsely reported as a build. No
replacement key is generated and no unsigned artifact is accepted as the store
candidate.

The final production release still requires a fresh post-merge tenant overlay,
the production `api.festapp.net` manifest, store approval/adoption evidence and
the production full-freeze/final-marker gate.
