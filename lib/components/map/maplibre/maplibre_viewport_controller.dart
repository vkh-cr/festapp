import 'package:flutter/widgets.dart';
import 'package:fstapp/components/map/map_viewport_controller.dart';
import 'package:latlong2/latlong.dart';
import 'package:maplibre/maplibre.dart' as ml;

class MapLibreViewportController implements MapViewportController {
  final ml.MapController controller;

  MapLibreViewportController(this.controller);

  static ml.Geographic _toGeographic(LatLng point) =>
      ml.Geographic(lon: point.longitude, lat: point.latitude);

  static LatLng _toLatLng(ml.Geographic point) => LatLng(point.lat, point.lon);

  @override
  MapCameraState get camera {
    final current = controller.getCamera();
    return MapCameraState(
      center: _toLatLng(current.center),
      zoom: current.zoom,
    );
  }

  @override
  double get directionLayoutZoom => controller.getCamera().zoom;

  @override
  Future<void> animateTo(
    LatLng destination, {
    double? zoom,
    Curve curve = Curves.easeInOut,
  }) =>
      controller.animateCamera(
        center: _toGeographic(destination),
        zoom: zoom,
      );

  @override
  Future<void> fitCoordinates(
    List<LatLng> coordinates, {
    required EdgeInsets padding,
    Curve curve = Curves.easeInOut,
  }) {
    if (coordinates.isEmpty) return Future.value();
    return controller.fitBounds(
      bounds: ml.LngLatBounds.fromPoints(
        coordinates.map(_toGeographic).toList(growable: false),
      ),
      padding: padding,
    );
  }

  @override
  Offset coordinateToScreenPoint(LatLng coordinate) =>
      controller.toScreenLocation(_toGeographic(coordinate));

  @override
  LatLng screenPointToCoordinate(Offset point) =>
      _toLatLng(controller.toLngLat(point));
}
