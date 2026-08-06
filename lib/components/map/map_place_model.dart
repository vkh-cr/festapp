import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:latlong2/latlong.dart';

import 'place_model.dart';

class MapPlaceModel {
  final int? id;
  final String title;
  final String? description;
  final String? type;
  final LatLng latLng;
  final int? icon;
  final bool isHidden;
  final List<TimeBlockItem>? events;
  int aggregateVersion;

  MapPlaceModel({
    required this.id,
    required this.title,
    this.description,
    this.type,
    required this.latLng,
    this.icon,
    this.isHidden = false,
    this.events,
    this.aggregateVersion = 0,
  });

  factory MapPlaceModel.fromPlaceModel(PlaceModel place) {
    return MapPlaceModel(
        id: place.id,
        title: place.title!,
        description: place.description,
        type: place.type,
        latLng: LatLng(place.getLat(), place.getLng()),
        icon: place.icon,
        isHidden: place.isHidden,
        aggregateVersion: place.aggregateVersion,
        events: List<TimeBlockItem>.from(
            place.events.map((e) => TimeBlockItem.fromEventModelAsChild(e))));
  }
}
