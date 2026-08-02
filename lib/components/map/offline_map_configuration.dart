import 'package:fstapp/components/features/map_feature.dart';

sealed class OfflineMapContract {
  const OfflineMapContract();
}

final class MapLibreOfflineMapContract extends OfflineMapContract {
  final String manifestUrl;

  const MapLibreOfflineMapContract({required this.manifestUrl});
}

final class LegacyOfflineMapContract extends OfflineMapContract {
  final String packageUrl;
  final String styleUrl;
  final String sourceName;

  const LegacyOfflineMapContract({
    required this.packageUrl,
    required this.styleUrl,
    required this.sourceName,
  });
}

sealed class OfflineMapStartupDecision {
  const OfflineMapStartupDecision();
}

final class OnlineMapStartup extends OfflineMapStartupDecision {
  final OfflineMapContract? availableOfflineContract;

  const OnlineMapStartup({required this.availableOfflineContract});
}

final class ReadyOfflineMapStartup extends OfflineMapStartupDecision {
  final OfflineMapContract contract;

  const ReadyOfflineMapStartup({required this.contract});
}

final class InvalidOfflineMapStartup extends OfflineMapStartupDecision {
  final OfflineMapRenderer renderer;

  const InvalidOfflineMapStartup({required this.renderer});
}

/// Typed snapshot of the offline portion of a map feature configuration.
///
/// It is the sole policy seam between raw occasion JSON and map startup. Both
/// renderer contracts can be retained for rollback, while callers only receive
/// the currently selected contract.
final class OfflineMapConfiguration {
  final OfflineMapRenderer renderer;
  final bool hasExplicitRenderer;
  final bool forceOffline;
  final MapLibreOfflineMapContract? mapLibre;
  final LegacyOfflineMapContract? legacy;

  const OfflineMapConfiguration._({
    required this.renderer,
    required this.hasExplicitRenderer,
    required this.forceOffline,
    required this.mapLibre,
    required this.legacy,
  });

  factory OfflineMapConfiguration.fromLayer(
    MapLayer layer, {
    OfflineMapRenderer? renderer,
  }) {
    final manifestUrl = _nonEmpty(layer.offlineMapBundleManifestURL);
    return OfflineMapConfiguration._(
      renderer: renderer ?? layer.offlineMapRenderer,
      hasExplicitRenderer: layer.hasExplicitOfflineMapRenderer,
      forceOffline: layer.forceOfflineMap,
      mapLibre: manifestUrl != null
          ? MapLibreOfflineMapContract(manifestUrl: manifestUrl)
          : null,
      legacy: switch ((
        _nonEmpty(layer.offlineMapPackageURL),
        _nonEmpty(layer.offlineMapStyleURL),
        _nonEmpty(layer.offlineMapLayerName),
      )) {
        (final packageUrl?, final styleUrl?, final sourceName?) =>
          LegacyOfflineMapContract(
            packageUrl: packageUrl,
            styleUrl: styleUrl,
            sourceName: sourceName,
          ),
        _ => null,
      },
    );
  }

  OfflineMapContract? get selectedContract => switch (renderer) {
        OfflineMapRenderer.maplibre => mapLibre,
        OfflineMapRenderer.legacy => legacy,
      };

  bool get shouldInitialize =>
      selectedContract != null || forceOffline || hasExplicitRenderer;

  OfflineMapStartupDecision resolveStartup({required bool hasConnection}) {
    final contract = selectedContract;
    if (contract == null) {
      return forceOffline || (hasExplicitRenderer && !hasConnection)
          ? InvalidOfflineMapStartup(renderer: renderer)
          : const OnlineMapStartup(availableOfflineContract: null);
    }
    return forceOffline || !hasConnection
        ? ReadyOfflineMapStartup(contract: contract)
        : OnlineMapStartup(availableOfflineContract: contract);
  }
}

String? _nonEmpty(String? value) {
  final normalized = value?.trim();
  return normalized == null || normalized.isEmpty ? null : normalized;
}
