# Android / Google Play release

The canonical package and expected release branch come from the exact private
manifest selected by `FESTAPP_RELEASE_MANIFEST`. Default operation remains local preflight;
the explicitly gated write operation publishes the verified build directly to
production. The Google identity may hold account-level release permission for
all apps, but this repository wrapper remains locked to the manifest package.

```powershell
$env:FESTAPP_RELEASE_MANIFEST = 'C:\path\to\private-release-listing\config.json'
$env:FESTAPP_CANONICAL_CUTOVER_RELEASE = '1' # required for the self-hosted cutover build
.\automation\release\android_release.ps1 -Preflight
.\automation\release\android_release.ps1 -Build
.\automation\release\android_release.ps1 -PlayCheck
```

The original upload keystore is configured only through ignored `android/key.properties`. Set `GOOGLE_PLAY_JSON_KEY` to a least-privilege service-account credential outside this repository. Never print either file.

Production upload requires the exact confirmation printed by the guarded lane:

```powershell
.\automation\release\android_release.ps1 -UploadProduction -Confirmation '<androidPackage>|<versionCode>|<sourceSHA>|production'
```

The read-only check creates a temporary Google Play edit because track reads are
edit-scoped, then always deletes/discards it. It never commits a release.
Production still fails closed unless package, source SHA, version code, signing
identity and exact confirmation match. Screenshot staging is deterministic and
validated locally, while the production lane skips all screenshot, image, and
listing mutations.
