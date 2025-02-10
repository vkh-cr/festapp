import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UnitModel.dart';
import 'package:fstapp/dataModels/UnitUserModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/pages/AdministrationOccasion/UserColumns.dart';
import 'package:fstapp/pages/AdministrationOccasion/UsersTabHelper.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/UserManagementHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class UnitUsersScreen extends StatefulWidget {
  final UnitModel unit;

  const UnitUsersScreen({super.key, required this.unit});

  @override
  _UnitUsersScreenState createState() => _UnitUsersScreenState();
}

class _UnitUsersScreenState extends State<UnitUsersScreen> {
  static const List<String> columnIdentifiers = [
    UserColumns.ID,
    UserColumns.UNIT,
    UserColumns.EMAIL,
    UserColumns.NAME,
    UserColumns.SURNAME,
    UserColumns.SEX,
    UserColumns.UNIT_MANAGER,
    UserColumns.UNIT_EDITOR,
    UserColumns.UNIT_EDITOR_VIEW,
  ];

  List<UnitUserModel>? _allUsers;
  Key refreshKey = UniqueKey();

  @override
  void initState() {
    super.initState();
    loadUsers();
  }

  Future<void> loadUsers() async {
    _allUsers = await DbUsers.getAllUsersFromUnit(widget.unit.id!);
    setState(() {
      refreshKey = UniqueKey();
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_allUsers == null) {
      return Center(child: CircularProgressIndicator());
    }

    return KeyedSubtree(
      key: refreshKey,
      child: SingleTableDataGrid<UnitUserModel>(
        context,
         () => DbUsers.getAllUsersFromUnit(widget.unit.id!),
        UnitUserModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndCheck,
        Tb.occasion_users.user,
        actionsExtended: DataGridActionsController(
            areAllActionsEnabled: RightsService.canUpdateUnitUsers),
        headerChildren: [
          if (RightsService.isUnitManager())
            DataGridAction(
              name: "Add existing".tr(),
              action: (SingleTableDataGrid p0, [_]) => UsersTabHelper.addExistingToUnit(
                  context, p0, _allUsers!, DbUsers.getAllUsersBasicsForUnit, widget.unit.id!),
            ),
          DataGridAction(
              name: "Change password".tr(),
              action: (SingleTableDataGrid p0, [_]) =>
                  UsersTabHelper.setPassword(context, p0),
              isEnabled: RightsService.canUpdateUnitUsers),
          // DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) => UsersTabHelper.addToGroup(context, p0)),
        ],
        columns: UserColumns.generateColumns(columnIdentifiers),
      ).DataGrid(),
    );
  }
}
