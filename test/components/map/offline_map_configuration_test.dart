import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/features/map_feature.dart';
import 'package:fstapp/components/map/offline_map_configuration.dart';

void main() {
  test('exposes only the selected renderer contract', () {
    final configuration = OfflineMapConfiguration.fromLayer(
      MapLayer(
        offlineMapRenderer: OfflineMapRenderer.maplibre,
        offlineMapBundleManifestURL: 'https://maps.test/v2/manifest.json',
        offlineMapPackageURL: 'https://maps.test/v1/map.mbtiles',
        offlineMapStyleURL: 'https://maps.test/v1/style.json',
        offlineMapLayerName: 'versatiles-shortbread',
      ),
    );

    expect(
      configuration.selectedContract,
      isA<MapLibreOfflineMapContract>(),
    );
    expect(
      (configuration.selectedContract as MapLibreOfflineMapContract)
          .manifestUrl,
      'https://maps.test/v2/manifest.json',
    );
  });

  test('disconnected explicit invalid configuration surfaces an error', () {
    final configuration = OfflineMapConfiguration.fromLayer(
      MapLayer(
        offlineMapRenderer: OfflineMapRenderer.maplibre,
        hasExplicitOfflineMapRenderer: true,
      ),
    );

    expect(
      configuration.resolveStartup(hasConnection: false),
      isA<InvalidOfflineMapStartup>(),
    );
  });

  test('configured renderer uses offline mode only when required', () {
    OfflineMapConfiguration configuration({bool forceOffline = false}) =>
        OfflineMapConfiguration.fromLayer(
          MapLayer(
            offlineMapRenderer: OfflineMapRenderer.maplibre,
            offlineMapBundleManifestURL: 'https://maps.test/v2/manifest.json',
            forceOfflineMap: forceOffline,
          ),
        );

    expect(
      configuration().resolveStartup(hasConnection: true),
      isA<OnlineMapStartup>(),
    );
    expect(
      configuration().resolveStartup(hasConnection: false),
      isA<ReadyOfflineMapStartup>(),
    );
    expect(
      configuration(forceOffline: true).resolveStartup(hasConnection: true),
      isA<ReadyOfflineMapStartup>(),
    );
  });

  test('initialization is skipped only for an untouched online-only layer', () {
    final untouched = OfflineMapConfiguration.fromLayer(MapLayer());
    final explicit = OfflineMapConfiguration.fromLayer(
      MapLayer(
        offlineMapRenderer: OfflineMapRenderer.maplibre,
        hasExplicitOfflineMapRenderer: true,
      ),
    );

    expect(untouched.shouldInitialize, isFalse);
    expect(explicit.shouldInitialize, isTrue);
  });

  test('online startup retains the selected Legacy contract for instant switch',
      () {
    final configuration = OfflineMapConfiguration.fromLayer(
      MapLayer(
        offlineMapRenderer: OfflineMapRenderer.legacy,
        offlineMapPackageURL: 'https://maps.test/v1/map.mbtiles',
        offlineMapStyleURL: 'https://maps.test/v1/style.json',
        offlineMapLayerName: 'versatiles-shortbread',
      ),
    );

    final startup = configuration.resolveStartup(hasConnection: true);

    expect(startup, isA<OnlineMapStartup>());
    expect(
      (startup as OnlineMapStartup).availableOfflineContract,
      isA<LegacyOfflineMapContract>(),
    );
  });
}
