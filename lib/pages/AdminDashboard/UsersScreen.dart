import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/RightsHelper.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/UserManagementHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class UsersScreen extends StatefulWidget {
  const UsersScreen({super.key});

  @override
  _UsersScreenState createState() => _UsersScreenState();
}

class _UsersScreenState extends State<UsersScreen> {
  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<OccasionUserModel>(
      context,
      DataService.getOccasionUsers,
      OccasionUserModel.fromPlutoJson,
      DataGridFirstColumn.deleteAndCheck,
      Tb.occasion_users.user,
      actionsExtended: DataGridExtendedActions(
        saveAction: DataGridAction(
          action: (datagrid, [action]) async {
            await action!();
          },
        ),
        areAllActionsEnabled: RightsHelper.canUpdateUsers,
      ),
      headerChildren: [
        DataGridAction(
          name: "Change password".tr(),
          action: (SingleTableDataGrid p0, [_]) {
            _setPassword(p0);
          },
          isEnabled: RightsHelper.canUpdateUsers,
        ),
      ],
      columns: [
        PlutoColumn(
          hide: true,
          title: "Id".tr(),
          field: Tb.user_info.id,
          type: PlutoColumnType.text(),
          readOnly: true,
          width: 50,
        ),
        PlutoColumn(
          title: "E-mail".tr(),
          field: Tb.user_info.email_readonly,
          type: PlutoColumnType.text(),
          checkReadOnly: (row, cell) {
            final id = row.cells[Tb.user_info.id]?.value as String?;
            return id != null && id.isNotEmpty;
          },
          width: 200,
        ),
        PlutoColumn(
          title: "Name".tr(),
          field: Tb.user_info.name,
          type: PlutoColumnType.text(),
          width: 200,
        ),
        PlutoColumn(
          title: "Surname".tr(),
          field: Tb.user_info.surname,
          type: PlutoColumnType.text(),
          width: 200,
        ),
        PlutoColumn(
          title: "Sex".tr(),
          field: Tb.user_info.sex,
          type: PlutoColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
          formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
          applyFormatterInEditing: true,
          width: 100,
        ),
      ],
    ).DataGrid();
  }

  Future<void> _setPassword(SingleTableDataGrid dataGrid) async {
    var users = List<OccasionUserModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => OccasionUserModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.user != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Change password".tr(), "${"Change password to users".tr()} (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Proceed".tr());
    if (!really) {
      return;
    }

    try {
      for (var u in users) {
        await UserManagementHelper.unsafeChangeUserPassword(u);
        ToastHelper.Show("Password has been changed.".tr());
      }
    } on Exception catch (e) {
      ToastHelper.Show(e.toString(), severity: ToastSeverity.NotOk);
      return;
    }
  }
}
