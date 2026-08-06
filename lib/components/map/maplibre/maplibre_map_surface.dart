import 'dart:async';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:fstapp/components/map/map_direction_marker.dart';
import 'package:fstapp/components/map/map_location_pin_helper.dart';
import 'package:fstapp/components/map/map_surface_model.dart';
import 'package:fstapp/components/map/maplibre/maplibre_scene_controller.dart';
import 'package:fstapp/components/map/maplibre/maplibre_native_performance.dart';
import 'package:fstapp/components/map/maplibre/maplibre_viewport_controller.dart';
import 'package:latlong2/latlong.dart';
import 'package:maplibre/maplibre.dart' as ml;
import 'package:fstapp/services/app_logger.dart';

class MapLibreMapSurface extends StatefulWidget {
  final String style;
  final MapSurfaceModel model;

  const MapLibreMapSurface({
    required this.style,
    required this.model,
    super.key,
  });

  @override
  State<MapLibreMapSurface> createState() => _MapLibreMapSurfaceState();
}

class _MapLibreMapSurfaceState extends State<MapLibreMapSurface> {
  ml.MapController? _controller;
  MapLibreViewportController? _viewportAdapter;
  MapLibreSceneController? _sceneController;
  final Set<String> _registeredIconKeys = {};

  @override
  void didUpdateWidget(covariant MapLibreMapSurface oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (!identical(oldWidget.model.viewport, widget.model.viewport) &&
        _viewportAdapter != null) {
      oldWidget.model.viewport.detach(_viewportAdapter!);
      widget.model.viewport.attach(_viewportAdapter!);
    }
    if (oldWidget.model.scene != widget.model.scene ||
        oldWidget.model.icons != widget.model.icons) {
      _updateSceneAndIcons();
    }
  }

  @override
  void dispose() {
    final adapter = _viewportAdapter;
    if (adapter != null) widget.model.viewport.detach(adapter);
    _controller = null;
    _viewportAdapter = null;
    _sceneController = null;
    _registeredIconKeys.clear();
    super.dispose();
  }

  void _onMapCreated(ml.MapController controller) {
    final oldAdapter = _viewportAdapter;
    if (oldAdapter != null) widget.model.viewport.detach(oldAdapter);
    _controller = controller;
    final adapter = MapLibreViewportController(controller);
    _viewportAdapter = adapter;
    widget.model.viewport.attach(adapter);
    unawaited(_configureNativePerformance());
  }

  Future<void> _configureNativePerformance() async {
    try {
      await MapLibreNativePerformance.configure();
    } catch (error) {
      AppLogger.error('MapLibre native performance setup failed: $error');
    }
  }

  Future<void> _onStyleLoaded(ml.StyleController style) async {
    _registeredIconKeys.clear();
    await _registerIcons(style);
    final sceneController = MapLibreSceneController(style);
    _sceneController = sceneController;
    await sceneController.register(widget.model.scene);
    await _enableLocationIfAllowed();
    widget.model.onZoomChanged?.call(_controller?.getCamera().zoom ?? 0);
    widget.model.onCameraReady?.call();
  }

  Future<void> _enableLocationIfAllowed() async {
    final controller = _controller;
    if (!widget.model.scene.showCurrentLocation ||
        controller == null ||
        !ml.MapController.userLocationIsSupported) {
      return;
    }
    var permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    if (permission == LocationPermission.whileInUse ||
        permission == LocationPermission.always) {
      await controller.enableLocation();
    }
  }

  Future<void> _registerIcons(ml.StyleController style) async {
    if (!mounted || !identical(_controller?.style, style)) return;
    final iconsToRegister = <String, _MapImageRegistration>{};
    for (final place in widget.model.scene.places) {
      if (_registeredIconKeys.contains(place.iconKey)) continue;
      final color = Color(place.pinColorValue);
      iconsToRegister[place.iconKey] = _MapImageRegistration(
        widget: MapLocationPinHelper.type2icon(
              context,
              place.place,
              widget.model.icons,
              pinColor: color,
            ) ??
            Icon(Icons.location_pin, size: 52, color: color),
        size: const Size(58, 52),
      );
    }
    for (final direction in widget.model.scene.directions) {
      if (_registeredIconKeys.contains(direction.iconKey)) continue;
      iconsToRegister[direction.iconKey] = _MapImageRegistration(
        widget: MapDirectionMarker(
          color: Color(direction.colorValue),
          bodyPixels: direction.bodyPixels,
        ),
        size: MapDirectionMarker.sizeFor(direction.bodyPixels),
      );
    }
    for (final icon in iconsToRegister.entries) {
      if (!mounted || !identical(_controller?.style, style)) return;
      await style.addImageFromWidget(
        id: icon.key,
        widget: icon.value.widget,
        logicalSize: icon.value.size,
        // maplibre_ios creates UIImage with scale=1 and therefore interprets
        // raw PNG pixels as logical points. Keep the registered raster at 1x;
        // Android applies its target density when decoding the same bytes.
        imageSize: icon.value.size,
      );
      _registeredIconKeys.add(icon.key);
    }
  }

  Future<void> _updateSceneAndIcons() async {
    final style = _controller?.style;
    final sceneController = _sceneController;
    if (style == null || sceneController == null) return;
    await _registerIcons(style);
    await sceneController.update(widget.model.scene);
  }

  void _onEvent(ml.MapEvent event) {
    if (event is ml.MapEventMoveCamera || event is ml.MapEventCameraIdle) {
      widget.model.onCameraChanged?.call();
    }
    final controller = _controller;
    if (event is ml.MapEventCameraIdle && controller != null) {
      widget.model.onZoomChanged?.call(controller.getCamera().zoom);
    }
    if (event is! ml.MapEventClick || controller == null) return;
    final features = controller.featuresAtPoint(
      event.screenPoint,
      layerIds: const [MapLibreSceneController.placeLayerId],
    );
    if (features.isNotEmpty) {
      final rawId = features.first.properties['place_id'];
      final placeId = rawId is num ? rawId.toInt() : int.tryParse('$rawId');
      if (placeId != null) {
        widget.model.onPlaceTap(placeId);
        return;
      }
    }
    widget.model.onMapTap(LatLng(event.point.lat, event.point.lon));
  }

  @override
  Widget build(BuildContext context) {
    return ml.MapLibreMap(
      // The current package has no disableLocation API. Recreating the native
      // view when visibility changes guarantees that leaving the map tab stops
      // the location layer instead of keeping it alive invisibly.
      key: ValueKey(
        'maplibre-location-${widget.model.scene.showCurrentLocation}',
      ),
      options: ml.MapOptions(
        initStyle: widget.style,
        initCenter: ml.Geographic(
          lon: widget.model.initialCenter.longitude,
          lat: widget.model.initialCenter.latitude,
        ),
        initZoom: widget.model.initialZoom,
        minZoom: 0,
        maxZoom: MapZoomLimits.offlineMaximum,
        // The feasibility benchmark selected Hybrid Composition without the
        // expensive texture mode. Keep this explicit; never inherit defaults.
        androidTextureMode: false,
        androidMode: ml.AndroidPlatformViewMode.hc,
      ),
      onMapCreated: _onMapCreated,
      onStyleLoaded: _onStyleLoaded,
      onEvent: _onEvent,
    );
  }
}

class _MapImageRegistration {
  final Widget widget;
  final Size size;

  const _MapImageRegistration({required this.widget, required this.size});
}
