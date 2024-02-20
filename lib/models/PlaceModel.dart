import 'package:avapp/data/DataService.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import '../dataGrids/PlutoAbstract.dart';

class PlaceModel extends IPlutoRowModel {
  dynamic latLng;
  int? id;
  String? title;
  String? description;
  String? type;
  bool isHidden = false;

  static const String WithouValue = "---";

  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";
  static const String isHiddenColumn = "is_hidden";
  static const String coordinatesColumn = "coordinates";
  static const String typeColumn = "type";

  static const String placeTable = "places";
  static const String timetablePlacesTable = "timetable_places";
  static const String timetablePlacesTablePlaceColumn = "place";
  static const String placesOffline = "places";
  static const String placeObjectColumn = "placeObject";


  double getLat() => latLng["lat"];
  double getLng() => latLng["lng"];

  factory PlaceModel.fromJson(Map<String, dynamic> json) {
    return PlaceModel(
    latLng: json.containsKey(coordinatesColumn) ? json[coordinatesColumn]["latLng"] : null,
    id: json[idColumn],
    title: json.containsKey(titleColumn) ? json[titleColumn] : null,
    description: json.containsKey(descriptionColumn) ? json[descriptionColumn] : null,
    type: json.containsKey(typeColumn) ? json[typeColumn] : null,
    isHidden: json.containsKey(isHiddenColumn) ? json[isHiddenColumn] : false,
  );
  }

  static PlaceModel fromPlutoJson(Map<String, dynamic> json) {
    return PlaceModel(
      latLng: json[coordinatesColumn],
      id: json[idColumn] == -1 ? null : json[idColumn],
      title: json[titleColumn],
      description: json[descriptionColumn].isEmpty ? null : json[descriptionColumn],
      type: json[typeColumn] == WithouValue ? null : json[typeColumn],
      isHidden: json[isHiddenColumn] == "true" ? true : false,
    );
  }

  Map toJson() =>
  {
    idColumn: id,
    titleColumn: title,
    coordinatesColumn: {"latLng" : latLng },
    descriptionColumn: description,
    typeColumn: type,
    isHiddenColumn: isHidden
  };

  PlaceModel({
    this.latLng,
    required this.id,
    required this.title,
    required this.description,
    required this.type,
    this.isHidden = false});

  String toPlutoSelectString() => "$id:$title";

  @override
  Future<void> deleteMethod() async {
    await DataService.deletePlace(this);
  }

  @override
  String toBasicString() {
    return title.toString();
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      descriptionColumn: PlutoCell(value: description ?? ""),
      coordinatesColumn: PlutoCell(value: latLng),
      typeColumn: PlutoCell(value: type ?? WithouValue),
      isHiddenColumn: PlutoCell(value: isHidden.toString()),
    });
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updatePlace(this);
  }
}