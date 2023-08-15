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
    latLng: json.containsKey("coordinates") ? json["coordinates"]["latLng"] : null,
    id: json["id"],
    title: json.containsKey("title") ? json["title"] : null,
    description: json.containsKey("description") ? json["description"] : null,
    type: json.containsKey("type") ? json["type"] : null,
    isHidden: json.containsKey("is_hidden") ? json["is_hidden"] : false,
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