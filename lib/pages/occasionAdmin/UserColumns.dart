import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class UserColumns {
  // Column identifier constants
  static const String ID = "id";
  static const String UNIT = "unit";
  static const String EMAIL = "email";
  static const String NAME = "name";
  static const String SURNAME = "surname";
  static const String SEX = "sex";
  static const String ACCOMMODATION = "accommodation";
  static const String PHONE = "phone";
  static const String BIRTHDAY = "birthday";
  static const String ROLE = "role";
  static const String TEXT1 = "text1";
  static const String TEXT2 = "text2";
  static const String TEXT3 = "text3";
  static const String NOTE = "note";
  static const String DIET = "diet";
  static const String MANAGER = "manager";
  static const String EDITOR = "editor";
  static const String EDITOR_VIEW = "editorView";
  static const String UNIT_MANAGER = "unitManager";
  static const String UNIT_EDITOR = "unitEditor";
  static const String UNIT_EDITOR_VIEW = "unitEditorView";
  static const String APPROVER = "approver";
  static const String APPROVED = "approved";
  static const String INVITED = "invited";
  static const String FOOD = "food";

  // Define columns statically or through functions if they need data
  static Map<String, dynamic> get columnBuilders => {
    ID: [
      PlutoColumn(
        hide: true,
        title: "Id".tr(),
        field: Tb.occasion_users.user,
        type: PlutoColumnType.text(),
        readOnly: true,
        width: 50,
      ),
    ],
    UNIT: [
      PlutoColumn(
        hide: true,
        title: "Unit".tr(),
        field: Tb.unit_users.unit,
        type: PlutoColumnType.text(),
        readOnly: true,
        width: 50,
      ),
    ],
    EMAIL: [
      PlutoColumn(
        title: "E-mail".tr(),
        field: Tb.occasion_users.data_email,
        type: PlutoColumnType.text(),
        checkReadOnly: (row, cell) => row.cells[Tb.occasion_users.user]?.value != null,
        width: 200,
      ),
    ],
    NAME: [
      PlutoColumn(
        title: "Name".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.name,
        type: PlutoColumnType.text(),
        width: 120,
      ),
    ],
    SURNAME: [
      PlutoColumn(
        title: "Surname".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.surname,
        type: PlutoColumnType.text(),
        width: 120,
      ),
    ],
    SEX: [
      PlutoColumn(
        title: "Sex".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.sex,
        type: PlutoColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
        formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
        applyFormatterInEditing: true,
        width: 100,
      ),
    ],
    PHONE: [
      PlutoColumn(
        title: "Phone".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_phone,
        type: PlutoColumnType.text(),
        width: 100,
      ),
    ],
    BIRTHDAY: [
      PlutoColumn(
        title: "Birthday".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_birthDate,
        type: PlutoColumnType.date(defaultValue: DateTime.now()),
        width: 140,
      ),
    ],
    ROLE: [
      PlutoColumn(
        title: "Role".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info.role,
        type: PlutoColumnType.text(),
        width: 100,
      ),
    ],
    TEXT1: [
      PlutoColumn(
        title: "Text1".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text1,
        type: PlutoColumnType.text(),
        width: 100,
      ),
    ],
    TEXT2: [
      PlutoColumn(
        title: "Text2".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text2,
        type: PlutoColumnType.text(),
        width: 100,
      ),
    ],
    TEXT3: [
      PlutoColumn(
        title: "Číslo týmu (hra)",
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text3,
        type: PlutoColumnType.text(),
        width: 100,
      ),
    ],
    NOTE: [
      PlutoColumn(
        title: "Note".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_note,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    DIET: [
      PlutoColumn(
        title: "Diet".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_diet,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    FOOD: (Map<String, dynamic> data) {
      if(data[FOOD] == null){
        return <PlutoColumn>[];
      }
      var columns = <PlutoColumn>[];
      for(var f in (data[FOOD]) as List<ServiceItemModel>){
        var cc = _foodColumn(f.title!, DbOccasions.serviceTypeFood+f.code);
        columns.add(cc);
      }

      return columns;
    },
    ACCOMMODATION: (Map<String, dynamic> data) {
      var select = data[DbOccasions.serviceTypeAccommodation]?.map((a)=>a.code).toList();
      select ??= [];
      select.add("");
      return [
        PlutoColumn(
        title: "Accommodation".tr(),
        field: DbOccasions.serviceTypeAccommodation,
        type: PlutoColumnType.select(select),
        applyFormatterInEditing: true,
        enableEditingMode: RightsService.canUpdateUsers(),
        width: 100
      )];
    },
    MANAGER: [_statusColumn("Administrator".tr(), Tb.occasion_users.is_manager)],
    EDITOR: [_statusColumn("Editor".tr(), Tb.occasion_users.is_editor)],
    EDITOR_VIEW: [_statusColumn("Read only".tr(), Tb.occasion_users.is_editor_view)],
    UNIT_MANAGER: [_statusColumn("Administrator".tr(), Tb.occasion_users.is_manager, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR: [_statusColumn("Editor".tr(), Tb.occasion_users.is_editor, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR_VIEW: [_statusColumn("Read only".tr(), Tb.occasion_users.is_editor_view, canUpdateUser: RightsService.canUpdateUnitUsers)],
    APPROVER: [_statusColumn("Approver".tr(), Tb.occasion_users.is_approver)],
    APPROVED: [_statusColumn("Approved".tr(), Tb.occasion_users.is_approved)],
    INVITED: [_statusColumn("Invited".tr(), Tb.occasion_users.data_isInvited)],
  };

  /// Generates columns based on a list of column identifiers.
  /// Optional `data` map is used for columns that require extra configuration.
  static List<PlutoColumn> generateColumns(List<String> identifiers, {Map<String, dynamic>? data}) {
    return identifiers
        .where((id) => columnBuilders.containsKey(id)) // Ensure the identifier exists in columnBuilders
        .expand((id) {
      var columnEntry = columnBuilders[id];
      if (columnEntry is List<PlutoColumn>) {
        return columnEntry; // Static columns
      } else if (columnEntry is Function) {
        return (columnEntry(data ?? {}) as List<PlutoColumn>); // Cast to List<PlutoColumn>
      }
      return <PlutoColumn>[]; // Return empty list if no match
    }).toList();
  }

  static PlutoColumn _statusColumn(String title, String field, {bool Function()? canUpdateUser}) {
    return PlutoColumn(
      title: title,
      field: field,
      type: PlutoColumnType.select([]),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      width: 100,
      renderer: (rendererContext) =>
          DataGridHelper.checkBoxRenderer(rendererContext, field, canUpdateUser ?? RightsService.canUpdateUsers),
    );
  }

  static PlutoColumn _foodColumn(String title, String field) {
    return PlutoColumn(
      title: title,
      field: field,
      type: PlutoColumnType.select([]),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      cellPadding: EdgeInsets.all(0),
      width: 100,
      renderer: (rendererContext) =>
          DataGridHelper.foodCheckBoxRenderer(rendererContext, field, RightsService.canUpdateUsers),
    );
  }
}
