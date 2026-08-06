import 'package:flutter/widgets.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/map/map_scene.dart';
import 'package:fstapp/components/map/map_viewport_controller.dart';
import 'package:latlong2/latlong.dart';

/// Interaction zoom limits. Offline vector maps may safely overzoom their
/// highest native tile level; the online raster source keeps its existing cap.
abstract final class MapZoomLimits {
  static const double onlineMaximum = 18;
  static const double offlineMaximum = 22;

  static double legacyMaximum({required bool offline}) =>
      offline ? offlineMaximum : onlineMaximum;
}

/// Renderer-neutral input shared by both concrete map surface adapters.
final class MapSurfaceModel {
  final MapScene scene;
  final List<IconModel> icons;
  final LatLng initialCenter;
  final double initialZoom;
  final MapViewportCoordinator viewport;
  final ValueChanged<LatLng> onMapTap;
  final ValueChanged<int> onPlaceTap;
  final VoidCallback? onCameraReady;
  final VoidCallback? onCameraChanged;
  final ValueChanged<double>? onZoomChanged;

  const MapSurfaceModel({
    required this.scene,
    required this.icons,
    required this.initialCenter,
    required this.initialZoom,
    required this.viewport,
    required this.onMapTap,
    required this.onPlaceTap,
    this.onCameraReady,
    this.onCameraChanged,
    this.onZoomChanged,
  });
}
