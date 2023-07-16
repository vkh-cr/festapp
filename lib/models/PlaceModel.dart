class PlaceModel {
  dynamic latLng;
  final int placeId;
  String title;
  String? description;
  String? type;

  factory PlaceModel.fromJson(Map<String, dynamic> json) => PlaceModel(
    latLng: json["coordinates"]["latLng"],
    placeId: json["place_id"],
    title: json["title"],
    description: json["description"],
    type: json["type"]
  );

  PlaceModel({
    this.latLng,
    required this.placeId,
    required this.title,
    required this.description,
    required this.type});

}