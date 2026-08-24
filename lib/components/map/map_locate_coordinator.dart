import 'dart:math' as math;

import 'package:fstapp/components/map/map_location_accuracy.dart';
import 'package:fstapp/components/map/map_surface_model.dart';
import 'package:fstapp/components/map/map_viewport_controller.dart';
import 'package:geolocator/geolocator.dart';
import 'package:latlong2/latlong.dart';

enum MapLocateResult { recentered, denied, ignored }

class MapLocateCoordinator {
  static const double minimumZoom = 16;

  final MapViewportCoordinator _viewport;
  final Future<Position?> Function() _currentPosition;
  bool _isLocating = false;

  bool get isLocating => _isLocating;

  MapLocateCoordinator({
    required MapViewportCoordinator viewport,
    Future<Position?> Function() currentPosition =
        MapLocationAccuracy.currentPosition,
  })  : _viewport = viewport,
        _currentPosition = currentPosition;

  Future<MapLocateResult> recenter({
    required bool Function() isActive,
  }) async {
    if (_isLocating || !isActive() || !_viewport.isReady) {
      return MapLocateResult.ignored;
    }
    _isLocating = true;
    final surfaceId = _viewport.surfaceId;
    try {
      late final Position? position;
      try {
        position = await _currentPosition();
      } catch (_) {
        if (!_remainsCurrent(surfaceId, isActive)) {
          return MapLocateResult.ignored;
        }
        rethrow;
      }
      if (!_remainsCurrent(surfaceId, isActive)) return MapLocateResult.ignored;
      if (position == null) return MapLocateResult.denied;
      final zoom = math.min(
        math.max(_viewport.camera.zoom, minimumZoom),
        MapZoomLimits.interactionMaximum,
      );
      await _viewport.animateTo(
        LatLng(position.latitude, position.longitude),
        zoom: zoom,
      );
      return MapLocateResult.recentered;
    } finally {
      _isLocating = false;
    }
  }

  bool _remainsCurrent(String surfaceId, bool Function() isActive) =>
      isActive() && _viewport.isReady && surfaceId == _viewport.surfaceId;
}
