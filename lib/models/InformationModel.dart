import 'package:av_app/services/DataService.dart';
import 'package:pluto_grid/pluto_grid.dart';

import 'PlutoAbstract.dart';


class InformationModel extends IPlutoRowModel {
  int? id;
  String title;
  String? description;
  bool isExpanded = false;

  static const String idColumn = "idColumn";
  static const String titleColumn = "titleColumn";
  static const String descriptionColumn = "descriptionColumn";
  static const String informationTable = "informationTable";

  factory InformationModel.fromJson(Map<String, dynamic> json) {
    return InformationModel(
      id: json["id"],
      title: json["title"],
      description: json.containsKey("description") ? json["description"] : null,
    );
  }

  static InformationModel fromPlutoJson(Map<String, dynamic> json) {
    return InformationModel(
      id: json[idColumn],
      title: json[titleColumn],
      description: json[descriptionColumn],
    );
  }


  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      idColumn: PlutoCell(value: id),
      titleColumn: PlutoCell(value: title),
      descriptionColumn: PlutoCell(value: description)
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DataService.deleteInformation(this);
  }

  @override
  Future<void> updateMethod() async {
    await DataService.updateInformation(this);
  }

  @override
  String toBasicString() => title;

  InformationModel({
    required this.id,
    required this.title,
    required this.description});
}