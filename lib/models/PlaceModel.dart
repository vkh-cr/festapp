class PlaceModel {
  dynamic latLng;
  final int id;
  String title;
  String? description;
  String? type;

  static const String WithouPlace = "---";

  factory PlaceModel.fromJson(Map<String, dynamic> json) {
    return PlaceModel(
    latLng: json.containsKey("coordinates") ? json["coordinates"]["latLng"] : null,
    id: json["id"],
    title: json["title"],
    description: json.containsKey("description") ? json["description"] : null,
    type: json.containsKey("type") ? json["type"] : null,
  );
  }

  PlaceModel({
    this.latLng,
    required this.id,
    required this.title,
    required this.description,
    required this.type});

  String toPlutoSelectString() => "$id:$title";
}