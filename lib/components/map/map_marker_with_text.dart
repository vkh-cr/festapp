import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:latlong2/latlong.dart';

class MapMarkerWithText extends Marker {
  LatLng? oldPoint;
  final MapPlaceModel place;
  Function(MapMarkerWithText marker)? editAction;
  Widget? icon;

  MapMarkerWithText({
    required BuildContext context,
    required super.point,
    required this.place,
    super.key,
    super.width,
    super.height,
    super.rotate,
    super.alignment,
    this.icon,
    this.editAction,
    LatLng? oldPoint,
  }) : super(
    child: icon ?? Icon(Icons.location_pin, size: 36, color: ThemeConfig.mapPinColor(context)),
  );

  MapMarkerWithText cloneWithNewPoint(BuildContext context, LatLng point) {
    return MapMarkerWithText(
      context: context,
      oldPoint: oldPoint,
      place: place,
      point: point,
      width: width,
      height: height,
      icon: child,
      alignment: alignment,
      editAction: editAction,
    );
  }
}
