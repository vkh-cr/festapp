import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:trina_grid/trina_grid.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/dataModels/Tb.dart';

class UnitUserModel extends ITrinaRowModel {
  int? unit;
  String? user;
  String? name;
  String? surname;
  String? sex;
  String? emailReadonly;
  bool? isManager;
  bool? isEditor;
  bool? isEditorView;
  Map<String, dynamic>? data;

  UnitUserModel({
    this.unit,
    this.user,
    this.name,
    this.surname,
    this.sex,
    this.emailReadonly,
    this.isManager,
    this.isEditor,
    this.isEditorView,
    this.data,
  });

  factory UnitUserModel.fromJson(Map<String, dynamic> json) {
    return UnitUserModel(
      unit: json[Tb.unit_users.unit],
      user: json[Tb.occasion_users.user],
      name: json[Tb.occasion_users.data_name]?.toString().trim(),
      surname: json[Tb.occasion_users.data_surname]?.toString().trim(),
      sex: json[Tb.occasion_users.data_sex]?.toString().trim(),
      emailReadonly: json[Tb.user_info.email_readonly]?.toString().trim(),
      isManager: json[Tb.occasion_users.is_manager] == true ||
          json[Tb.occasion_users.is_manager]?.toString().toLowerCase() == 'true',
      isEditor: json[Tb.occasion_users.is_editor] == true ||
          json[Tb.occasion_users.is_editor]?.toString().toLowerCase() == 'true',
      isEditorView: json[Tb.occasion_users.is_editor_view] == true ||
          json[Tb.occasion_users.is_editor_view]?.toString().toLowerCase() == 'true',
      data: json[Tb.occasion_users.data] is Map<String, dynamic>
          ? Map<String, dynamic>.from(json[Tb.occasion_users.data])
          : {},
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    final Map<String, TrinaCell> cells = {
      "id": TrinaCell(value: user),
      Tb.unit_users.user: TrinaCell(value: user),
      Tb.unit_users.unit: TrinaCell(value: unit),
      Tb.occasion_users.data_name: TrinaCell(value: name ?? ""),
      Tb.occasion_users.data_surname: TrinaCell(value: surname ?? ""),
      Tb.occasion_users.data_sex: TrinaCell(value: sex ?? ""),
      Tb.occasion_users.data_email: TrinaCell(value: emailReadonly ?? ""),
      Tb.occasion_users.is_manager: TrinaCell(value: isManager.toString()),
      Tb.occasion_users.is_editor: TrinaCell(value: isEditor.toString()),
      Tb.occasion_users.is_editor_view: TrinaCell(value: isEditorView.toString()),
    };

    return TrinaRow(cells: cells);
  }

  factory UnitUserModel.newRow(int unitId) {
    return UnitUserModel(unit: unitId);
  }

  static UnitUserModel fromPlutoJson(Map<String, dynamic> json) {
    return UnitUserModel(
        unit: json[Tb.unit_users.unit],
        user: json["id"],
        name: json[Tb.occasion_users.data_name],
        surname: json[Tb.occasion_users.data_surname],
        sex: json[Tb.occasion_users.data_sex],
        emailReadonly: json[Tb.occasion_users.data_email],
        isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
        isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
        isEditorView: json[Tb.occasion_users.is_editor_view] == "true" ? true : false,
        data: json[Tb.occasion_users.data]
    );
  }

  Map toJson() => {
    Tb.unit_users.user: user,
    Tb.unit_users.unit: unit,
    Tb.user_info.name: name,
    Tb.user_info.surname: surname,
    Tb.user_info.sex: sex,
    Tb.occasion_users.data_email: emailReadonly,
    Tb.unit_users.is_manager: isManager,
    Tb.unit_users.is_editor: isEditor,
    Tb.unit_users.is_editor_view: isEditorView,
    Tb.unit_users.data: data,
  };

  @override
  Future<void> deleteMethod() async {
    await DbUsers.deleteUnitUser(user!, unit!);
  }

  @override
  Future<void> updateMethod() async {
    await DbUsers.updateUnitUser(this);
  }

  @override
  String toBasicString() => emailReadonly ?? "";

  @override
  get id => user;
}
