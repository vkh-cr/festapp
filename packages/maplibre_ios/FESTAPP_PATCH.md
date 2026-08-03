# Festapp patch for `maplibre_ios` 0.3.5

This repository pin adds the missing `MapLibrePlugin` declaration to upstream's
pre-generated public Swift compatibility header, `MapLibreIos.h`. Upstream
0.3.5 declares `pluginClass: MapLibrePlugin` and implements the class in Swift,
but a clean Release build imports this compatibility header before the dynamic
Swift header exists, and upstream omitted the plugin class from it.

Remove this package and the root `dependency_overrides` entry once an upstream
release exposes `MapLibrePlugin` to the registrant during a clean unsigned iOS
archive. Validate removal with `fvm flutter build ipa --release --no-codesign`.
