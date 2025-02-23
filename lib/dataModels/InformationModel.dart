import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';


class InformationModel extends IPlutoRowModel {
  static const String gameType = "game";
  static const String songType = "song";
  static const String quoteType = "quote";

  static const String data_date = "date";


  int? id;
  InformationHiddenModel? informationHidden;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  bool? isHidden;
  int? order;
  int? unit;
  Map<String, dynamic>? data;
  int getOrder()  => order ?? 0;

  bool isExpanded = false;

  static const String informationOffline = "information";


  factory InformationModel.fromJson(Map<String, dynamic> json) {
    return InformationModel(
        id: json[Tb.information.id],
        title: json[Tb.information.title],
        description: json[Tb.information.description],
        type: json[Tb.information.type],
        isHidden: json[Tb.information.is_hidden]??false,
        order: json[Tb.information.order]??0,
        unit: json[Tb.information.unit],
        updatedAt: json[Tb.occasions.updated_at]!=null ? DateTime.parse(json[Tb.occasions.updated_at]):null,
        data: json[Tb.information.data],
        informationHidden: json[Tb.information_hidden.table] != null ?
        InformationHiddenModel(
            id: json[Tb.information_hidden.table][Tb.information_hidden.id],
            data: json[Tb.information_hidden.table][Tb.information_hidden.data]) : null
    );
  }

  factory InformationModel.newRow(int unitId) {
    return InformationModel(unit: unitId);
  }

  Map toJson() =>
      {
        Tb.information.id: id,
        Tb.information.title: title,
        Tb.information.description: description,
        Tb.information.type: type,
        Tb.information.is_hidden: isHidden,
        Tb.information.order: order,
        Tb.information.unit: unit,
        Tb.information.updated_at: updatedAt?.toIso8601String(),
        Tb.information.information_hidden: informationHidden,
        Tb.information.data: data
      };

  static InformationModel fromPlutoJson(Map<String, dynamic> json) {
    return InformationModel(
      id: json[Tb.information.id] == -1 ? null : json[Tb.information.id],
      title: json[Tb.information.title],
      description: json[Tb.information.description],
      type: json[Tb.information.type],
      isHidden: json[Tb.information.is_hidden] == "true" ? true : false,
      order: json[Tb.information.order],
      unit: json[Tb.information.unit],
    );
  }

  static InformationModel fromPlutoJsonGame(Map<String, dynamic> json) {
    return InformationModel(
        id: json[Tb.information.id] == -1 ? null : json[Tb.information.id],
        title: json[Tb.information.title],
        description: json[Tb.information.description],
        type: InformationModel.gameType,
        isHidden: json[Tb.information.is_hidden] == "true" ? true : false,
        order: json[Tb.information.order],
        unit: json[Tb.information.unit],
        informationHidden: json[Tb.information.data_correct] != null ?
        InformationHiddenModel(
            data: {Tb.information.data_correct : json[Tb.information.data_correct]},
            id: json[Tb.information.data_correct_reference]) : null
    );
  }

  static InformationModel fromPlutoJsonType(Map<String, dynamic> json, String type) {
    return InformationModel(
      id: json[Tb.information.id] == -1 ? null : json[Tb.information.id],
      title: json[Tb.information.title],
      description: json[Tb.information.description],
      type: type,
      isHidden: json[Tb.information.is_hidden] == "true" ? true : false,
      order: json[Tb.information.order],
      unit: json[Tb.information.unit],
    );
  }

  @override
  PlutoRow toPlutoRow(BuildContext context) {
    return PlutoRow(cells: {
      Tb.information.id: PlutoCell(value: id ?? -1),
      Tb.information.title: PlutoCell(value: title ?? ""),
      Tb.information.description: PlutoCell(value: description),
      Tb.information.type: PlutoCell(value: type ?? ""),
      Tb.information.is_hidden: PlutoCell(value: isHidden.toString()),
      Tb.information.order: PlutoCell(value: order),
      Tb.information.unit: PlutoCell(value: unit),
      Tb.information.data_correct: PlutoCell(value: informationHidden?.data?[Tb.information.data_correct] ?? ""),
      Tb.information.data_correct_reference: PlutoCell(value: informationHidden?.id),
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DbInformation.deleteInformation(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbInformation.updateInformation(this);
  }

  @override
  String toBasicString() => title??id.toString();

  InformationModel({
    this.id,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.isHidden,
    this.order,
    this.unit,
    this.informationHidden,
    this.data});
}

class InformationHiddenModel{
  int? id;
  Map<String, dynamic>? data;

  InformationHiddenModel({this.id, this.data});
}