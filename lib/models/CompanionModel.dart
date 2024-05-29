class CompanionModel {
  final String id;
  final String name;
  bool isSignedIn;

  CompanionModel({required this.id, required this.name, this.isSignedIn = false});

  factory CompanionModel.fromJson(Map<String, dynamic> json){
    return CompanionModel(id: json["id"], name: json["name"], isSignedIn: json["is_signed_in"]);
  }
}