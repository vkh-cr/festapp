fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios asc_check

```sh
[bundle exec] fastlane ios asc_check
```

Read-only numeric identity and version inspection

### ios signing_check

```sh
[bundle exec] fastlane ios signing_check
```

Read-only signing certificate and provisioning profile inventory

### ios refresh_notification_extension_profile

```sh
[bundle exec] fastlane ios refresh_notification_extension_profile
```

Regenerate only the notification-extension App Store profile after capability changes

### ios bootstrap_signing

```sh
[bundle exec] fastlane ios bootstrap_signing
```

Create the first release certificate and exact App Store profiles

### ios create_version

```sh
[bundle exec] fastlane ios create_version
```

Create the target version on the existing app only

### ios upload_build

```sh
[bundle exec] fastlane ios upload_build
```

Upload one already-built IPA; never submit or release

### ios upload_metadata

```sh
[bundle exec] fastlane ios upload_metadata
```

Upload canonical metadata only; never submit or release

### ios upload_review_information

```sh
[bundle exec] fastlane ios upload_review_information
```

Upload reviewer contact, demo credentials and notes from external secrets

### ios review_information_check

```sh
[bundle exec] fastlane ios review_information_check
```

Read-only reviewer-contact and demo-account audit against the canonical manifest

### ios upload_privacy_urls

```sh
[bundle exec] fastlane ios upload_privacy_urls
```

Upload the two privacy URLs not fully covered by deliver metadata

### ios listing_check

```sh
[bundle exec] fastlane ios listing_check
```

Read-only App Store listing, privacy URL and screenshot audit

### ios compliance_check

```sh
[bundle exec] fastlane ios compliance_check
```

Read-only category, age-rating, content-rights and availability audit

### ios upload_store_classification

```sh
[bundle exec] fastlane ios upload_store_classification
```

Upload canonical age-rating answers after preserving inherited classification fields

### ios deduplicate_screenshots

```sh
[bundle exec] fastlane ios deduplicate_screenshots
```

Delete retry-created screenshot duplicates only

### ios upload_screenshots

```sh
[bundle exec] fastlane ios upload_screenshots
```

Upload canonical screenshots only; never submit or release

### ios submission_check

```sh
[bundle exec] fastlane ios submission_check
```

Read-only submission completeness summary

### ios submit_for_review

```sh
[bundle exec] fastlane ios submit_for_review
```

Explicitly gated submission with automatic release after Apple approval

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
