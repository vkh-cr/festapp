import 'package:flutter/foundation.dart';
import 'package:fstapp/components/features/map_feature.dart';

class MapRendererBenchmarkOverride {
  static const environmentKey = 'FESTAPP_MAP_RENDERER_BENCHMARK';
  static const _environmentValue = String.fromEnvironment(environmentKey);

  static OfflineMapRenderer resolve(
    OfflineMapRenderer configuredRenderer, {
    String value = _environmentValue,
    bool isRelease = kReleaseMode,
  }) {
    if (isRelease || value.isEmpty) return configuredRenderer;
    return switch (value) {
      'legacy' => OfflineMapRenderer.legacy,
      'maplibre' => OfflineMapRenderer.maplibre,
      _ => throw ArgumentError.value(value, environmentKey),
    };
  }
}
