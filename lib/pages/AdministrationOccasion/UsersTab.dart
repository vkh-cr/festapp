import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdministrationOccasion/UserColumns.dart';
import 'package:fstapp/pages/AdministrationOccasion/UsersTabHelper.dart';

class UsersTab extends StatefulWidget {
  const UsersTab({Key? key}) : super(key: key);

  @override
  _UsersTabState createState() => _UsersTabState();
}

class _UsersTabState extends State<UsersTab> {
  static const List<String> columnIdentifiers = [
    UserColumns.ID,
    UserColumns.EMAIL,
    UserColumns.NAME,
    UserColumns.SURNAME,
    UserColumns.SEX,
    UserColumns.ACCOMMODATION,
    UserColumns.PHONE,
    UserColumns.BIRTHDAY,
    UserColumns.ROLE,
    UserColumns.MANAGER,
    UserColumns.EDITOR,
    UserColumns.EDITOR_VIEW,
    UserColumns.APPROVER,
    UserColumns.APPROVED,
    UserColumns.INVITED
  ];

  List<UserInfoModel>? _allUsers;
  Key refreshKey = UniqueKey();

  @override
  void initState() {
    super.initState();
    loadUsers();
  }

  Future<void> loadUsers() async {
    _allUsers = await DbUsers.getAllUsersBasics();
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
      child: SingleTableDataGrid<OccasionUserModel>(
        context,
        DbUsers.getOccasionUsers,
        OccasionUserModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndCheck,
        Tb.occasion_users.user,
        actionsExtended: DataGridActionsController(
            areAllActionsEnabled: RightsService.canUpdateUsers),
        headerChildren: [
          DataGridAction(name: "Import".tr(), action: (SingleTableDataGrid p0, [_]) => _import(p0), isEnabled: RightsService.canUpdateUsers),
          if (RightsService.isManager())
            DataGridAction(
              name: "Add existing".tr(),
              action: (SingleTableDataGrid p0, [_]) => UsersTabHelper.addExisting(
                  context, p0, _allUsers!.cast<IPlutoRowModel>(), loadUsers),
            ),
          DataGridAction(
              name: "Invite".tr(),
              action: (SingleTableDataGrid p0, [_]) =>
                  UsersTabHelper.invite(context, p0, loadUsers),
              isEnabled: RightsService.canUpdateUsers),
          DataGridAction(
              name: "Change password".tr(),
              action: (SingleTableDataGrid p0, [_]) =>
                  UsersTabHelper.setPassword(context, p0),
              isEnabled: RightsService.canUpdateUsers),
          // DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) => UsersTabHelper.addToGroup(context, p0)),
        ],
        columns: UserColumns.generateColumns(columnIdentifiers),
      ).DataGrid(),
    );
  }
}
