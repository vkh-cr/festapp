import 'package:flutter/widgets.dart';
import 'package:latlong2/latlong.dart';

class MapCameraState {
  final LatLng center;
  final double zoom;

  const MapCameraState({required this.center, required this.zoom});
}

/// Camera contract used by page-level feature logic, independent of the
/// concrete map renderer.
abstract interface class MapViewportController {
  MapCameraState get camera;

  /// Zoom normalized to MapLibre's 512px world-tile convention.
  double get directionLayoutZoom;

  Future<void> animateTo(
    LatLng destination, {
    double? zoom,
    Curve curve = Curves.easeInOut,
    Duration? duration,
  });

  Future<void> fitCoordinates(
    List<LatLng> coordinates, {
    required EdgeInsets padding,
    Curve curve = Curves.easeInOut,
  });

  Offset coordinateToScreenPoint(LatLng coordinate);

  LatLng screenPointToCoordinate(Offset point);
}

/// Stable controller owned by MapPage. A renderer surface attaches its own
/// adapter without exposing the concrete controller to feature logic.
class MapViewportCoordinator implements MapViewportController {
  MapViewportController? _delegate;

  bool get isAttached => _delegate != null;

  void attach(MapViewportController controller) => _delegate = controller;

  void detach(MapViewportController controller) {
    if (identical(_delegate, controller)) _delegate = null;
  }

  MapViewportController get _active =>
      _delegate ??
      (throw StateError('The map viewport is not attached to a surface.'));

  @override
  MapCameraState get camera => _active.camera;

  @override
  double get directionLayoutZoom => _active.directionLayoutZoom;

  @override
  Future<void> animateTo(
    LatLng destination, {
    double? zoom,
    Curve curve = Curves.easeInOut,
    Duration? duration,
  }) =>
      _active.animateTo(
        destination,
        zoom: zoom,
        curve: curve,
        duration: duration,
      );

  @override
  Future<void> fitCoordinates(
    List<LatLng> coordinates, {
    required EdgeInsets padding,
    Curve curve = Curves.easeInOut,
  }) =>
      _active.fitCoordinates(
        coordinates,
        padding: padding,
        curve: curve,
      );

  @override
  Offset coordinateToScreenPoint(LatLng coordinate) =>
      _active.coordinateToScreenPoint(coordinate);

  @override
  LatLng screenPointToCoordinate(Offset point) =>
      _active.screenPointToCoordinate(point);
}
