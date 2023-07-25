class PlaceModel {
  dynamic latLng;
  final int placeId;
  String title;
  String? description;
  String? type;

  factory PlaceModel.fromJson(Map<String, dynamic> json) {
    return PlaceModel(
    latLng: json.containsKey("coordinates") ? json["coordinates"]["latLng"] : null,
    placeId: json["id"],
    title: json["title"],
    description: json.containsKey("description") ? json["description"] : null,
    type: json.containsKey("type") ? json["type"] : null,
  );
  }

  PlaceModel({
    this.latLng,
    required this.placeId,
    required this.title,
    required this.description,
    required this.type});
}