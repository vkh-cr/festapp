import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/dataModels/ServiceItemModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:trina_grid/trina_grid.dart';

class UserColumns {
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
  static const String EDITOR_ORDER = "editorOrder";
  static const String EDITOR_ORDER_VIEW = "editorOrderView";
  static const String UNIT_MANAGER = "unitManager";
  static const String UNIT_EDITOR = "unitEditor";
  static const String UNIT_EDITOR_VIEW = "unitEditorView";
  static const String APPROVER = "approver";
  static const String APPROVED = "approved";
  static const String INVITED = "invited";
  static const String FOOD = "food";

  static Map<String, dynamic> get columnBuilders => {
    ID: [
      TrinaColumn(
        hide: true,
        title: "Id".tr(),
        field: Tb.occasion_users.user,
        type: TrinaColumnType.text(),
        readOnly: true,
        width: 50,
      ),
    ],
    UNIT: [
      TrinaColumn(
        hide: true,
        title: "Unit".tr(),
        field: Tb.unit_users.unit,
        type: TrinaColumnType.number(),
        readOnly: true,
        width: 50,
      ),
    ],
    EMAIL: [
      TrinaColumn(
        title: "E-mail".tr(),
        field: Tb.occasion_users.data_email,
        type: TrinaColumnType.text(),
        checkReadOnly: (row, cell) => row.cells[Tb.occasion_users.user]?.value != null,
        width: 200,
      ),
    ],
    NAME: [
      TrinaColumn(
        title: "Name".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.name,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    SURNAME: [
      TrinaColumn(
        title: "Surname".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.surname,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    SEX: [
      TrinaColumn(
        title: "Sex".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info_public.sex,
        type: TrinaColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
        formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
        applyFormatterInEditing: true,
        width: 100,
      ),
    ],
    PHONE: [
      TrinaColumn(
        title: "Phone".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_phone,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    BIRTHDAY: [
      TrinaColumn(
        title: "Birthday".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_birthDate,
        type: TrinaColumnType.date(defaultValue: DateTime.now()),
        width: 140,
      ),
    ],
    ROLE: [
      TrinaColumn(
        title: "Role".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.user_info.role,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT1: [
      TrinaColumn(
        title: "Text1".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text1,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT2: [
      TrinaColumn(
        title: "Text2".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text2,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT3: [
      TrinaColumn(
        title: "Číslo týmu (hra)",
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_text3,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    NOTE: [
      TrinaColumn(
        title: "Note".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_note,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    DIET: [
      TrinaColumn(
        title: "Diet".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: Tb.occasion_users.data_diet,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    FOOD: (Map<String, dynamic> data) {
      if(data[FOOD] == null){
        return <TrinaColumn>[];
      }
      var columns = <TrinaColumn>[];
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
        TrinaColumn(
            title: "Accommodation".tr(),
            field: DbOccasions.serviceTypeAccommodation,
            type: TrinaColumnType.select(select),
            applyFormatterInEditing: true,
            enableEditingMode: RightsService.canUpdateUsers(),
            width: 100
        )];
    },
    MANAGER: [_statusColumn("Administrator".tr(), Tb.occasion_users.is_manager)],
    EDITOR: [_statusColumn("Editor".tr(), Tb.occasion_users.is_editor)],
    EDITOR_VIEW: [_statusColumn("Read only".tr(), Tb.occasion_users.is_editor_view)],
    EDITOR_ORDER: [_statusColumn("Edit Orders".tr(), Tb.occasion_users.is_editor_order)],
    EDITOR_ORDER_VIEW: [_statusColumn("Read Orders".tr(), Tb.occasion_users.is_editor_order_view)],
    UNIT_MANAGER: [_statusColumn("Administrator".tr(), Tb.occasion_users.is_manager, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR: [_statusColumn("Editor".tr(), Tb.occasion_users.is_editor, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR_VIEW: [_statusColumn("Read only".tr(), Tb.occasion_users.is_editor_view, canUpdateUser: RightsService.canUpdateUnitUsers)],
    APPROVER: [_statusColumn("Approver".tr(), Tb.occasion_users.is_approver)],
    APPROVED: [_statusColumn("Approved".tr(), Tb.occasion_users.is_approved)],
    INVITED: [_statusColumn("Invited".tr(), Tb.occasion_users.data_isInvited)],
  };

  static List<TrinaColumn> generateColumns(List<String> identifiers, {Map<String, dynamic>? data}) {
    return identifiers
        .where((id) => columnBuilders.containsKey(id))
        .expand((id) {
      var columnEntry = columnBuilders[id];
      if (columnEntry is List<TrinaColumn>) {
        return columnEntry;
      } else if (columnEntry is Function) {
        return (columnEntry(data ?? {}) as List<TrinaColumn>);
      }
      return <TrinaColumn>[];
    }).toList();
  }

  static TrinaColumn _statusColumn(String title, String field, {bool Function()? canUpdateUser}) {
    return TrinaColumn(
      title: title,
      field: field,
      type: TrinaColumnType.text(),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      width: 100,
      renderer: (rendererContext) =>
          DataGridHelper.checkBoxRenderer(rendererContext, field, canUpdateUser ?? RightsService.canUpdateUsers),
    );
  }

  static TrinaColumn _foodColumn(String title, String field) {
    return TrinaColumn(
      title: title,
      field: field,
      type: TrinaColumnType.select([]),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      cellPadding: EdgeInsets.all(0),
      width: 100,
      renderer: (rendererContext) =>
          DataGridHelper.foodCheckBoxRenderer(rendererContext, field, RightsService.canUpdateUsers),
    );
  }
}
