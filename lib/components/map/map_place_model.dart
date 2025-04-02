import 'package:fstapp/components/timeline/schedule_timeline_helper.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:latlong2/latlong.dart';

class MapPlaceModel {
  final int? id;
  final String title;
  final String? description;
  final String? type;
  final LatLng latLng;
  final int? icon;
  final List<TimeBlockItem>? events;

  MapPlaceModel({
    required this.id,
    required this.title,
    this.description,
    this.type,
    required this.latLng,
    this.icon,
    this.events,
  });

  factory MapPlaceModel.fromPlaceModel(PlaceModel place) {
    return MapPlaceModel(
      id: place.id,
      title: place.title!,
      description: place.description,
      type: place.type,
      latLng: LatLng(place.getLat(), place.getLng()),
      icon: place.icon,
      events: place.events != null ? List<TimeBlockItem>.from(place.events.map((e)=>TimeBlockItem.fromEventModel(e))) : null
    );
  }
}