import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart' as fm;
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/features/map_feature.dart';
import 'package:fstapp/components/map/legacy_map_surface.dart';
import 'package:fstapp/components/map/map_renderer_host.dart';
import 'package:fstapp/components/map/map_scene.dart';
import 'package:fstapp/components/map/map_viewport_controller.dart';
import 'package:latlong2/latlong.dart';

void main() {
  MapSurfaceModel model() => MapSurfaceModel(
        scene: const MapScene(),
        icons: const [],
        initialCenter: const LatLng(49.8, 18.2),
        initialZoom: 14,
        viewport: MapViewportCoordinator(),
        onMapTap: (_) {},
        onPlaceTap: (_) {},
      );

  LegacyMapConfiguration legacy() => LegacyMapConfiguration.online(MapLayer());

  test('web always resolves to the legacy Live View renderer', () {
    expect(
      MapRendererHost.resolveRenderer(
        configuredRenderer: OfflineMapRenderer.maplibre,
        isOffline: true,
        isWeb: true,
      ),
      OfflineMapRenderer.legacy,
    );
  });

  testWidgets('selects exactly the configured renderer', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MapRendererHost(
        renderer: OfflineMapRenderer.maplibre,
        isOffline: true,
        model: model(),
        legacy: legacy(),
        mapLibre: const MapLibreMapConfiguration(
          style: null,
          unavailable: Text('maplibre'),
        ),
      ),
    ));

    expect(find.text('maplibre'), findsOneWidget);
    expect(find.text('legacy'), findsNothing);
  });

  testWidgets('keeps offline Legacy as an explicit supported renderer',
      (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MapRendererHost(
        renderer: OfflineMapRenderer.legacy,
        isOffline: true,
        model: model(),
        legacy: LegacyMapConfiguration.offlineUnavailable(MapLayer()),
      ),
    ));

    expect(find.byType(LegacyMapSurface), findsOneWidget);
    final map = tester.widget<fm.FlutterMap>(find.byType(fm.FlutterMap));
    expect(map.options.maxZoom, MapZoomLimits.interactionMaximum);
  });

  testWidgets('does not silently fall back when MapLibre is unavailable',
      (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MapRendererHost(
        renderer: OfflineMapRenderer.maplibre,
        isOffline: true,
        model: model(),
        legacy: legacy(),
      ),
    ));

    expect(tester.takeException(), isStateError);
    expect(find.byType(LegacyMapSurface), findsNothing);
  });

  test('online maps resolve to the legacy Live View renderer', () {
    expect(
      MapRendererHost.resolveRenderer(
        configuredRenderer: OfflineMapRenderer.maplibre,
        isOffline: false,
        isWeb: false,
      ),
      OfflineMapRenderer.legacy,
    );
  });

  test('map renderers allow the maximum supported interaction zoom', () {
    expect(MapZoomLimits.interactionMaximum, 24);
  });

  testWidgets('online Legacy overzooms without requesting deeper raster tiles',
      (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MapRendererHost(
        renderer: OfflineMapRenderer.legacy,
        isOffline: false,
        model: model(),
        legacy: legacy(),
      ),
    ));

    final map = tester.widget<fm.FlutterMap>(find.byType(fm.FlutterMap));
    final tiles = tester.widget<fm.TileLayer>(find.byType(fm.TileLayer));
    expect(map.options.maxZoom, MapZoomLimits.interactionMaximum);
    expect(tiles.maxZoom, MapZoomLimits.interactionMaximum);
    expect(tiles.maxNativeZoom, MapZoomLimits.onlineRasterNativeMaximum);

    await tester.pumpWidget(const SizedBox.shrink());
    await tester.pump(const Duration(seconds: 1));
  });
}
