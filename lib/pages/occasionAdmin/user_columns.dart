import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/data_models/service_item_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/rights_service.dart';
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
  static const String IS_VOLUNTEER = "isVolunteer";
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
  static const String FORM = "form";
  static const String ORDERED_AT = "ordered_at";

  static Map<String, dynamic> get columnBuilders => {
    ID: [
      TrinaColumn(
        hide: true,
        title: "Id".tr(),
        field: ID,
        type: TrinaColumnType.text(),
        readOnly: true,
        width: 50,
      ),
    ],
    UNIT: [
      TrinaColumn(
        hide: true,
        title: "Unit".tr(),
        field: UNIT,
        type: TrinaColumnType.number(),
        readOnly: true,
        width: 50,
      ),
    ],
    EMAIL: [
      TrinaColumn(
        title: "E-mail".tr(),
        field: EMAIL,
        type: TrinaColumnType.text(),
        checkReadOnly: (row, cell) => row.cells[ID]?.value != null,
        width: 200,
      ),
    ],
    NAME: [
      TrinaColumn(
        title: "Name".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: NAME,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    SURNAME: [
      TrinaColumn(
        title: "Surname".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: SURNAME,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    SEX: [
      TrinaColumn(
        title: "Sex".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: SEX,
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
        field: PHONE,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    BIRTHDAY: [
      TrinaColumn(
        title: "Birthday".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: BIRTHDAY,
        type: TrinaColumnType.date(defaultValue: DateTime.now()),
        width: 140,
      ),
    ],
    ROLE: [
      TrinaColumn(
        title: "Role".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: ROLE,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT1: [
      TrinaColumn(
        title: "Type".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: TEXT1,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT2: [
      TrinaColumn(
        title: "Přípravný tým".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: TEXT2,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    TEXT3: [
      TrinaColumn(
        title: "Číslo týmu (hra)",
        enableEditingMode: RightsService.canUpdateUsers(),
        field: TEXT3,
        type: TrinaColumnType.text(),
        width: 100,
      ),
    ],
    NOTE: [
      TrinaColumn(
        title: "Note".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: NOTE,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    DIET: [
      TrinaColumn(
        title: "Diet".tr(),
        enableEditingMode: RightsService.canUpdateUsers(),
        field: DIET,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    FORM: [
      TrinaColumn(
        title: "Form".tr(),
        field: FORM,
        type: TrinaColumnType.text(),
        readOnly: true,
        width: 200,
      ),
    ],
    ORDERED_AT: [
      TrinaColumn(
        title: "Created".tr(),
        field: ORDERED_AT,
        type: TrinaColumnType.date(),
        readOnly: true,
        width: 140,
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
            field: ACCOMMODATION,
            type: TrinaColumnType.select(select),
            applyFormatterInEditing: true,
            enableEditingMode: RightsService.canUpdateUsers(),
            width: 100
        )];
    },
    IS_VOLUNTEER: [_statusColumn("Volunteer".tr(), IS_VOLUNTEER)],
    MANAGER: [_statusColumn("Administrator".tr(), MANAGER)],
    EDITOR: [_statusColumn("Editor".tr(), EDITOR)],
    EDITOR_VIEW: [_statusColumn("Read only".tr(), EDITOR_VIEW)],
    EDITOR_ORDER: [_statusColumn("Edit Orders".tr(), EDITOR_ORDER)],
    EDITOR_ORDER_VIEW: [_statusColumn("Read Orders".tr(), EDITOR_ORDER_VIEW)],
    UNIT_MANAGER: [_statusColumn("Administrator".tr(), UNIT_MANAGER, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR: [_statusColumn("Editor".tr(), UNIT_EDITOR, canUpdateUser: RightsService.canUpdateUnitUsers)],
    UNIT_EDITOR_VIEW: [_statusColumn("Read only".tr(), UNIT_EDITOR_VIEW, canUpdateUser: RightsService.canUpdateUnitUsers)],
    APPROVER: [_statusColumn("Approver".tr(), APPROVER)],
    APPROVED: [_statusColumn("Approved".tr(), APPROVED)],
    INVITED: [_statusColumn("Invited".tr(), INVITED)],
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
      type: TrinaColumnType.text(),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      cellPadding: EdgeInsets.all(0),
      width: 100,
      renderer: (rendererContext) =>
          DataGridHelper.foodCheckBoxRenderer(rendererContext, field, RightsService.canUpdateUsers),
    );
  }
}
