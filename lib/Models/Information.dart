import 'package:av_app/models/ValidationResult.dart';

class Information {
  final int id;
  final String title;
  final String description;

  static const String idColumn = "id";
  static const String titleColumn = "title";
  static const String descriptionColumn = "description";

  Information({this.id = -1, required this.title, required this.description});

  ValidationResult Validate(){
    title.trim();
    var validationResult = ValidationResult();

    if(title.isEmpty || title.length > 50){
      validationResult.errorMessage = "Popis musí být delší než 1 znak a kratší než 50.\n";
      validationResult.hasError = true;
    }

    return validationResult;
  }

  Map<String, String> toInsertMap() {
    return {titleColumn: title, descriptionColumn: description};
  }

  Map<String, String> toUpdateMap() {
    return {idColumn : id.toString(), titleColumn: title, descriptionColumn: description};
  }

  static Information fromInsertMap(Map<String, String> map) {
    return Information(title: map[titleColumn]!, description: map[descriptionColumn]!);
  }

  static Information fromMap(Map<String, String> map) {
    return Information(id: -1, title: map[titleColumn]!, description: map[descriptionColumn]!);
  }

  static Information fromDynamic(dynamic map) {
    return Information(id: map[idColumn], title: map[titleColumn]!, description: map[descriptionColumn]!);
  }
}