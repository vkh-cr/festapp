import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/UserManagementHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class UsersTab extends StatefulWidget {
  const UsersTab({Key? key}) : super(key: key);

  @override
  _UsersTabState createState() => _UsersTabState();
}

class _UsersTabState extends State<UsersTab> {
  List<UserInfoModel> _allUsers = [];

  @override
  void initState() {
    super.initState();
    loadUsers();
  }

  Future<void> loadUsers() async {
    _allUsers = await DbUsers.getAllUsersBasics();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return SingleTableDataGrid<OccasionUserModel>(
        context,
        DbUsers.getOccasionUsers,
        OccasionUserModel.fromPlutoJson,
        DataGridFirstColumn.deleteAndCheck,
        Tb.occasion_users.user,
        actionsExtended: DataGridExtendedActions(areAllActionsEnabled: RightsService.canUpdateUsers),
        headerChildren: [
          DataGridAction(name: "Import".tr(), action: (SingleTableDataGrid p0, [_]) { _import(p0); }, isEnabled: () => (AppConfig.isUsersImportSupported && RightsService.canUpdateUsers())),
          DataGridAction(name: "Add existing".tr(), action: (SingleTableDataGrid p0, [_]) { _addExisting(p0); }),
          DataGridAction(name: "Invite".tr(), action:  (SingleTableDataGrid p0, [_]) { _invite(p0); }, isEnabled: RightsService.canUpdateUsers),
          DataGridAction(name: "Change password".tr(), action: (SingleTableDataGrid p0, [_]) { _setPassword(p0); }, isEnabled: RightsService.canUpdateUsers),
          DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) { _addToGroup(p0); }),
        ],
        columns: [
          PlutoColumn(
              hide: true,
              title: "Id".tr(),
              field: Tb.occasion_users.user,
              type: PlutoColumnType.text(),
              readOnly: true,
              width: 50),
          PlutoColumn(
              title: "E-mail".tr(),
              field: Tb.occasion_users.data_email,
              type: PlutoColumnType.text(),
              checkReadOnly: (row, cell) {
                final id = row.cells[Tb.occasion_users.user]?.value as String?;
                return id != null && id.isNotEmpty;
              },
              width: 200
          ),
          PlutoColumn(
            title: "Name".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.user_info_public.name,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Surname".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.user_info_public.surname,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Sex".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.user_info_public.sex,
            type: PlutoColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
            formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
            applyFormatterInEditing: true,
            width: 100,
          ),
          PlutoColumn(
            title: "Accommodation".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.occasion_users.data_accommodation,
            type: PlutoColumnType.text(),
            readOnly: false,
            width: 150,
          ),
          PlutoColumn(
            title: "Phone".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.occasion_users.data_phone,
            type: PlutoColumnType.text(),
            width: 200,
          ),
          PlutoColumn(
            title: "Birthday".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.occasion_users.data_birthDate,
            type: PlutoColumnType.date(defaultValue: DateTime.now()),
            width: 140,
          ),
          PlutoColumn(
            title: "Role".tr(),
            enableEditingMode: RightsService.canUpdateUsers(),
            field: Tb.user_info.role,
            type: PlutoColumnType.text(),
            width: 100,
          ),
          PlutoColumn(
            title: "Administrator".tr(),
            field: Tb.occasion_users.is_manager,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.occasion_users.is_manager, RightsService.canUpdateUsers),
          ),
          PlutoColumn(
            title: "Editor".tr(),
            field: Tb.occasion_users.is_editor,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.occasion_users.is_editor, RightsService.canUpdateUsers),
          ),
          PlutoColumn(
            title: "Approver".tr(),
            field: Tb.occasion_users.is_approver,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.occasion_users.is_approver, RightsService.canUpdateUsers),
          ),
          PlutoColumn(
            title: "Approved".tr(),
            field: Tb.occasion_users.is_approved,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.occasion_users.is_approved, RightsService.canUpdateUsers),
          ),
          PlutoColumn(
            title: "Invited".tr(),
            field: Tb.occasion_users.data_isInvited,
            type: PlutoColumnType.select([]),
            applyFormatterInEditing: true,
            enableEditingMode: false,
            width: 100,
            renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, Tb.occasion_users.data_isInvited, ()=>false),
          )
        ]).DataGrid();
  }

  Future<void> _import(SingleTableDataGrid dataGrid) async {
    await UserManagementHelper.import(context);
    await dataGrid.reloadData();
  }

  Future<void> _invite(SingleTableDataGrid dataGrid) async {
    var users = List<OccasionUserModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => OccasionUserModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.user != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Invite".tr(), "${"Users will get invitation via e-mail.".tr()} (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Proceed".tr());
    if(!really) {
      return;
    }

    if(users.any((u) => u.data![Tb.occasion_users.data_isInvited]==true))
    {
      var reallyAll = await DialogHelper.showConfirmationDialogAsync(context, "Invite".tr(), "Invite users who have already been invited?".tr(), confirmButtonMessage: "Proceed".tr());
      if(!reallyAll) {
        users = users.where((element) => !element.data![Tb.occasion_users.data_isInvited]).toList();
      }
    }


    for(OccasionUserModel u in users) {
      await AuthService.resetPasswordForEmail(u.data![Tb.occasion_users.data_email]);
      u.data![Tb.occasion_users.data_isInvited] = true;
      await DbUsers.updateOccasionUser(u);
      ToastHelper.Show(context, "Invited: {user}.".tr(namedArgs: {"user":u.data![Tb.occasion_users.data_email]}));
    }
    await dataGrid.reloadData();
  }

  Future<void> _setPassword(SingleTableDataGrid dataGrid) async {
    var users = List<OccasionUserModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => OccasionUserModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.user != null).toList();
    var really = await DialogHelper.showConfirmationDialogAsync(context, "Change password".tr(), "${"Change password to users".tr()} (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}", confirmButtonMessage: "Proceed".tr());
    if(!really) {
      return;
    }

    try {
      for(var u in users) {
        await UserManagementHelper.unsafeChangeUserPassword(context, u);
        ToastHelper.Show(context, "Password has been changed.".tr());
      }
    } on Exception catch (e) {
      ToastHelper.Show(context, e.toString(), severity: ToastSeverity.NotOk);
      return;
    }
  }

  Future<void> _addToGroup(SingleTableDataGrid dataGrid) async {
    var users = List<OccasionUserModel>.from(dataGrid.stateManager.refRows.originalList.where((element) => element.checked == true).map((x) => OccasionUserModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.user != null).toList();
    var allGroups = await DbGroups.getAllUserGroupInfo();
    var chosenGroup = await DialogHelper.showAddToGroupDialogAsync(context, allGroups);
    if(chosenGroup == null)
    {
      return;
    }
    chosenGroup.participants!.addAll(users.map((e) => UserInfoModel(id: e.user)));
    await DbGroups.updateUserGroupParticipants(chosenGroup, chosenGroup.participants!);

    for (var value in dataGrid.stateManager.refRows.originalList) {
      value.setChecked(false);
    }

    ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item":chosenGroup.title}));
  }

  Future<void> _addExisting(SingleTableDataGrid dataGrid) async {
    var users = List<OccasionUserModel>.from(dataGrid.stateManager.refRows.originalList.map((x) => OccasionUserModel.fromPlutoJson(x.toJson())));
    users = users.where((element) => element.user != null).toList();

    if(_allUsers.isEmpty)
    {
      _allUsers = await DbUsers.getAllUsersBasics();
    }
    var nonAdded = _allUsers.where((a)=>!users.any((u)=>(u.user==a.id))).toList();
    DialogHelper.chooseUser(context, (person) async
    {
      await DbUsers.addUserToOccasion(person.id, RightsService.currentOccasion!);
      ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item":person.toString()}));
    }, nonAdded, "Add".tr());

    await dataGrid.reloadData();

  }
}