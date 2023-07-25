class InformationModel {
  int id;
  String title;
  String? description;
  bool isExpanded = false;


  factory InformationModel.fromJson(Map<String, dynamic> json) {
    return InformationModel(
    id: json["id"],
    title: json["title"],
    description: json.containsKey("description") ? json["description"] : null,
  );
  }

  InformationModel({
    required this.id,
    required this.title,
    required this.description});
}