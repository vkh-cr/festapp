import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:fstapp/components/map/MapLocationPinHelper.dart';
import 'package:latlong2/latlong.dart';

class MapMarkerWithText extends Marker {
  LatLng? oldPoint;
  final MapPlaceModel place;
  Function(MapMarkerWithText marker)? editAction;

  MapMarkerWithText(
      {required super.point,
        required this.place,
        super.key,
        super.width,
        super.height,
        super.rotate,
        super.alignment,
        required super.child,
        AlignmentGeometry? rotateAlignment,
        this.editAction,
        LatLng? oldPoint})
      : super();

  MapMarkerWithText cloneWithNewPoint(LatLng point) {
    return MapMarkerWithText(
      oldPoint: oldPoint,
      place: place,
      point: point,
      width: width,
      height: height,
      child: child,
      alignment: alignment,
      editAction: editAction,
    );
  }
}
