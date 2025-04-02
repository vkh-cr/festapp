import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:trina_grid/trina_grid.dart';

class PlaceModel extends ITrinaRowModel {
  dynamic latLng;
  int? id;
  String? title;
  String? description;
  String? type;
  int? order;
  int? icon;
  bool isHidden = false;

  static const String WithouValue = "---";

  static const String placesOffline = "places";
  static const String placeObjectColumn = "placeObject";

  List<EventModel> events = [];

  double getLat() => latLng["lat"];
  double getLng() => latLng["lng"];

  factory PlaceModel.fromJson(Map<String, dynamic> json) {
    return PlaceModel(
    latLng: json.containsKey(Tb.places.coordinates) ? json[Tb.places.coordinates]["latLng"] : null,
    id: json[Tb.places.id],
    title: json.containsKey(Tb.places.title) ? json[Tb.places.title] : null,
    description: json.containsKey(Tb.places.description) ? json[Tb.places.description] : null,
    type: json.containsKey(Tb.places.type) ? json[Tb.places.type] : null,
    isHidden: json.containsKey(Tb.places.is_hidden) ? json[Tb.places.is_hidden] : false,
    order: json[Tb.places.order],
    icon: json[Tb.places.icon],
  );
  }

  static PlaceModel fromPlutoJson(Map<String, dynamic> json) {
    return PlaceModel(
      latLng: json[Tb.places.coordinates],
      id: json[Tb.places.id] == -1 ? null : json[Tb.places.id],
      title: json[Tb.places.title],
      description: json[Tb.places.description].isEmpty ? null : json[Tb.places.description],
      type: json[Tb.places.type] == WithouValue ? null : json[Tb.places.type],
      isHidden: json[Tb.places.is_hidden] == "true" ? true : false,
      order: json[Tb.places.order],
      icon: json[Tb.places.icon]
    );
  }

  Map toJson() =>
  {
    Tb.places.id: id,
    Tb.places.title: title,
    Tb.places.coordinates: {"latLng" : latLng },
    Tb.places.description: description,
    Tb.places.type: type,
    Tb.places.is_hidden: isHidden,
    Tb.places.order: order,
    Tb.places.icon: icon,
  };

  PlaceModel({
    this.latLng,
    required this.id,
    required this.title,
    required this.description,
    required this.type,
    this.order,
    this.icon,
    this.isHidden = false});

  String toPlutoSelectString() => "$id:$title";

  @override
  Future<void> deleteMethod() async {
    await DbPlaces.deletePlace(this);
  }

  @override
  String toBasicString() {
    return title.toString();
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      Tb.places.id: TrinaCell(value: id),
      Tb.places.title: TrinaCell(value: title),
      Tb.places.description: TrinaCell(value: description ?? ""),
      Tb.places.coordinates: TrinaCell(value: latLng),
      Tb.places.type: TrinaCell(value: type ?? WithouValue),
      Tb.places.is_hidden: TrinaCell(value: isHidden.toString()),
      Tb.places.order: TrinaCell(value: order),
      Tb.places.icon: TrinaCell(value: icon),
    });
  }

  @override
  Future<void> updateMethod() async {
    await DbPlaces.updatePlace(this);
  }
}