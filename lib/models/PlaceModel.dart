class PlaceModel {
  dynamic latLng;
  int? id;
  String? title;
  String? description;
  String? type;
  bool isHidden = false;

  static const String WithouPlace = "---";

  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";
  static const String isHiddenColumn = "is_hidden";
  static const String coordinatesColumn = "coordinates";
  static const String typeColumn = "type";

  static const String placeTable = "places";

  static const dynamic DefaultPosition =  {
      "lat": 49.10380239685228,
      "lng": 17.394781916404032
    };


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

  PlaceModel({
    this.latLng,
    required this.id,
    required this.title,
    required this.description,
    required this.type,
    this.isHidden = false});

  String toPlutoSelectString() => "$id:$title";
}