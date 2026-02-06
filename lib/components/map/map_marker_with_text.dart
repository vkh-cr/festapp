import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:fstapp/components/map/map_place_model.dart';
import 'package:fstapp/theme_config.dart';
import 'package:latlong2/latlong.dart';

class MapMarkerWithText extends Marker {
  LatLng? oldPoint;
  final MapPlaceModel place;
  Function(MapMarkerWithText marker)? editAction;
  final Widget? icon;
  final bool showTitle;

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
    this.showTitle = false,
    this.oldPoint,
  }) : super(
          child: showTitle
              ? Stack(
                  clipBehavior: Clip.none,
                  alignment: Alignment.center,
                  children: [
                    icon ??
                        Icon(Icons.location_pin,
                            size: 36, color: ThemeConfig.mapPinColor(context)),
                    Positioned(
                      top:
                          0, // Adjust as needed for vertical alignment with the pin
                      left: 36, // Horizontal distance from the pin's anchor
                      child: IgnorePointer(
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                              horizontal: 6, vertical: 3),
                          decoration: BoxDecoration(
                            color: ThemeConfig.whiteColor(context).withOpacity(
                                0.85), // Slightly transparent background
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Stack(
                            children: <Widget>[
                              // Outline/stroke text
                              Text(
                                place.title,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  decoration: TextDecoration.none,
                                  foreground: Paint()
                                    ..style = PaintingStyle.stroke
                                    ..strokeWidth =
                                        1.5 // Adjust stroke width as needed
                                    ..color = ThemeConfig.whiteColor(
                                        context), // Outline color
                                ),
                              ),
                              // Fill text
                              Text(
                                place.title,
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.bold,
                                  decoration: TextDecoration.none,
                                  color: ThemeConfig.blackColor(
                                      context), // Fill color
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                )
              : icon ??
                  Icon(Icons.location_pin,
                      size: 36, color: ThemeConfig.mapPinColor(context)),
        );

  MapMarkerWithText cloneWithNewPoint(BuildContext context, LatLng point) {
    return MapMarkerWithText(
      context: context,
      oldPoint: this.point, // The current point becomes the oldPoint
      place: place,
      point: point,
      width: width,
      height: height,
      icon: icon,
      alignment: alignment,
      editAction: editAction,
      showTitle: showTitle,
    );
  }

  MapMarkerWithText cloneWithFocus(BuildContext context, bool isFocused) {
    return MapMarkerWithText(
      context: context,
      oldPoint: oldPoint,
      place: place,
      point: point,
      width: width,
      height: height,
      icon: icon,
      alignment: alignment,
      editAction: editAction,
      showTitle: isFocused,
    );
  }
}
