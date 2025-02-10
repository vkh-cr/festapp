import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModels/Tb.dart';

class UnitUserModel extends IPlutoRowModel {
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
  PlutoRow toPlutoRow(BuildContext context) {
    final Map<String, PlutoCell> cells = {
      "id": PlutoCell(value: user),
      Tb.unit_users.user: PlutoCell(value: user),
      Tb.unit_users.unit: PlutoCell(value: unit),
      Tb.occasion_users.data_name: PlutoCell(value: name ?? ""),
      Tb.occasion_users.data_surname: PlutoCell(value: surname ?? ""),
      Tb.occasion_users.data_sex: PlutoCell(value: sex ?? ""),
      Tb.occasion_users.data_email: PlutoCell(value: emailReadonly ?? ""),
      Tb.occasion_users.is_manager: PlutoCell(value: isManager.toString()),
      Tb.occasion_users.is_editor: PlutoCell(value: isEditor.toString()),
      Tb.occasion_users.is_editor_view: PlutoCell(value: isEditorView.toString()),
    };

    return PlutoRow(cells: cells);
  }

  static UnitUserModel fromPlutoJson(Map<String, dynamic> json) {
    return UnitUserModel(
        unit: json[Tb.unit_users.unit],
        user: json["id"],
        isManager: json[Tb.occasion_users.is_manager] == "true" ? true : false,
        isEditor: json[Tb.occasion_users.is_editor] == "true" ? true : false,
        isEditorView: json[Tb.occasion_users.is_editor_view] == "true" ? true : false,
        data: json[Tb.occasion_users.data]
    );
  }

  Map toJson() => {
    Tb.unit_users.user: user,
    Tb.unit_users.unit: unit,
    Tb.unit_users.is_manager: isManager,
    Tb.unit_users.is_editor: isEditor,
    Tb.unit_users.is_editor_view: isEditorView,
    Tb.unit_users.data: data,
  };

  @override
  Future<void> deleteMethod() async {}

  @override
  Future<void> updateMethod() async {
    await DbUsers.updateUnitUser(this);
  }

  @override
  String toBasicString() => emailReadonly ?? "";

  @override
  get id => user;
}
