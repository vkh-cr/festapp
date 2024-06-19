import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/models/Tb.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

import '../dataGrids/PlutoAbstract.dart';


class InformationModel extends IPlutoRowModel {
  int? id;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  bool? isHidden;
  int? order;
  int getOrder()  => order??0;

  bool isExpanded = false;

  static const String informationOffline = "information";


  factory InformationModel.fromJson(Map<String, dynamic> json) {
    return InformationModel(
      id: json[Tb.information.id],
      title: json[Tb.information.title],
      description: json[Tb.information.description],
      type: json[Tb.information.type],
      isHidden: json[Tb.information.is_hidden],
      order: json[Tb.information.order]??0,
      updatedAt: json[Tb.occasions.updated_at]!=null ? DateTime.parse(json[Tb.occasions.updated_at]):null,
    );
  }

  Map toJson() =>
  {
    Tb.information.id: id,
    Tb.information.title: title,
    Tb.information.description: description,
    Tb.information.type: type,
    Tb.information.is_hidden: isHidden,
    Tb.information.order: order,
    Tb.information.updated_at: updatedAt?.toIso8601String()
  };

  static InformationModel fromPlutoJson(Map<String, dynamic> json) {
    return InformationModel(
      id: json[Tb.information.id] == -1 ? null : json[Tb.information.id],
      title: json[Tb.information.title],
      description: json[Tb.information.description],
      type: json[Tb.information.type],
      isHidden: json[Tb.information.is_hidden] == "true" ? true : false,
      order: json[Tb.information.order],
    );
  }

  @override
  PlutoRow toPlutoRow() {
    return PlutoRow(cells: {
      Tb.information.id: PlutoCell(value: id),
      Tb.information.title: PlutoCell(value: title),
      Tb.information.description: PlutoCell(value: description),
      Tb.information.type: PlutoCell(value: type ?? ""),
      Tb.information.is_hidden: PlutoCell(value: isHidden.toString()),
      Tb.information.order: PlutoCell(value: order),
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
  String toBasicString() => title??id!.toString();

  InformationModel({
    required this.id,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.isHidden,
    this.order});
}