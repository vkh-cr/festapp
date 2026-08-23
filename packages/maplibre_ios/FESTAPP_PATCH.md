# Festapp patch for `maplibre_ios` 0.3.5

This repository pin adds the missing `MapLibrePlugin` declaration to upstream's
pre-generated public Swift compatibility header, `MapLibreIos.h`. Upstream
0.3.5 declares `pluginClass: MapLibrePlugin` and implements the class in Swift,
but a clean Release build imports this compatibility header before the dynamic
Swift header exists, and upstream omitted the plugin class from it.

It also preserves the explicit pixel ratio supplied by the patched shared
style-image interface when constructing `UIImage`, keeping Retina sprites sharp
without changing their logical map size.

Retained inactive maps reduce their display-link rate and suspend user-location
sampling through the shared `MapLibreMap.active` contract, keeping the map warm
without full-speed background rendering.

Remove this package and the root `dependency_overrides` entry once an upstream
release exposes `MapLibrePlugin` to the registrant during a clean unsigned iOS
archive and supports style-image pixel ratios. Validate removal with
`fvm flutter build ipa --release --no-codesign` and a Retina map-icon check.
