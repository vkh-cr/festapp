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

Explicitly gated submission with manual release selected

### ios release_approved_version

```sh
[bundle exec] fastlane ios release_approved_version
```

Separate approval gate; release itself remains a manual ASC action

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
