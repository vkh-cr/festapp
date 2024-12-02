import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';

class BlueprintGroupModel {
  static const String metaTitle = "title";
  static const String metaItems = "items";

  String? title;
  List<int>? objectIds;
  List<BlueprintObjectModel> objects = [];

  BlueprintGroupModel({
    this.title,
    this.objectIds,
  });

  factory BlueprintGroupModel.fromJson(Map<String, dynamic> json) {
    return BlueprintGroupModel(
      title: json[metaTitle],
      objectIds: json[metaItems] != null
          ? List<int>.from(json[metaItems])
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    metaTitle: title,
    metaItems: objectIds,
  };

  List<String> alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  String getNextBoxName() {
    String getAlphabetName(int index) {
      String name = "";
      while (index >= 0) {
        name = alphabet[index % 26] + name;
        index = (index ~/ 26) - 1;
      }
      return name;
    }

    return "$title${getAlphabetName(objects.length)}";
  }
}