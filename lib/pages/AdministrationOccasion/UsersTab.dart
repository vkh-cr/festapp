import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
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
  static const List<String> columnIdentifiers = [
    ID,
    EMAIL,
    NAME,
    SURNAME,
    SEX,
    ACCOMMODATION,
    PHONE,
    BIRTHDAY,
    ROLE,
    ADMINISTRATOR,
    EDITOR,
    APPROVER,
    APPROVED,
    INVITED
  ];

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
        DataGridAction(name: "Import".tr(), action: (SingleTableDataGrid p0, [_]) => _import(p0)),
        DataGridAction(name: "Add existing".tr(), action: (SingleTableDataGrid p0, [_]) => _addExisting(p0)),
        DataGridAction(name: "Invite".tr(), action: (SingleTableDataGrid p0, [_]) => _invite(p0)),
        DataGridAction(name: "Change password".tr(), action: (SingleTableDataGrid p0, [_]) => _setPassword(p0)),
        DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) => _addToGroup(p0)),
      ],
      columns: _generateColumns(),
    ).DataGrid();
  }

  // Column identifier constants
  static const String ID = "id";
  static const String EMAIL = "email";
  static const String NAME = "name";
  static const String SURNAME = "surname";
  static const String SEX = "sex";
  static const String ACCOMMODATION = "accommodation";
  static const String PHONE = "phone";
  static const String BIRTHDAY = "birthday";
  static const String ROLE = "role";
  static const String ADMINISTRATOR = "administrator";
  static const String EDITOR = "editor";
  static const String APPROVER = "approver";
  static const String APPROVED = "approved";
  static const String INVITED = "invited";

  // Map of column builders based on the identifier
  Map<String, PlutoColumn> get columnBuilders => {
    ID: PlutoColumn(
      hide: true,
      title: "Id".tr(),
      field: Tb.occasion_users.user,
      type: PlutoColumnType.text(),
      readOnly: true,
      width: 50,
    ),
    EMAIL: PlutoColumn(
      title: "E-mail".tr(),
      field: Tb.occasion_users.data_email,
      type: PlutoColumnType.text(),
      checkReadOnly: (row, cell) => row.cells[Tb.occasion_users.user]?.value != null,
      width: 200,
    ),
    NAME: PlutoColumn(
      title: "Name".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.user_info_public.name,
      type: PlutoColumnType.text(),
      width: 200,
    ),
    SURNAME: PlutoColumn(
      title: "Surname".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.user_info_public.surname,
      type: PlutoColumnType.text(),
      width: 200,
    ),
    SEX: PlutoColumn(
      title: "Sex".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.user_info_public.sex,
      type: PlutoColumnType.select(UserInfoModel.sexes, defaultValue: UserInfoModel.sexes.first),
      formatter: (value) => DataGridHelper.textTransform(value, UserInfoModel.sexes, UserInfoModel.sexToLocale),
      applyFormatterInEditing: true,
      width: 100,
    ),
    ACCOMMODATION: PlutoColumn(
      title: "Accommodation".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.occasion_users.data_accommodation,
      type: PlutoColumnType.text(),
      width: 150,
    ),
    PHONE: PlutoColumn(
      title: "Phone".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.occasion_users.data_phone,
      type: PlutoColumnType.text(),
      width: 200,
    ),
    BIRTHDAY: PlutoColumn(
      title: "Birthday".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.occasion_users.data_birthDate,
      type: PlutoColumnType.date(defaultValue: DateTime.now()),
      width: 140,
    ),
    ROLE: PlutoColumn(
      title: "Role".tr(),
      enableEditingMode: RightsService.canUpdateUsers(),
      field: Tb.user_info.role,
      type: PlutoColumnType.text(),
      width: 100,
    ),
    ADMINISTRATOR: _statusColumn("Administrator".tr(), Tb.occasion_users.is_manager),
    EDITOR: _statusColumn("Editor".tr(), Tb.occasion_users.is_editor),
    APPROVER: _statusColumn("Approver".tr(), Tb.occasion_users.is_approver),
    APPROVED: _statusColumn("Approved".tr(), Tb.occasion_users.is_approved),
    INVITED: _statusColumn("Invited".tr(), Tb.occasion_users.data_isInvited),
  };

  List<PlutoColumn> _generateColumns() {
    return columnIdentifiers.map((identifier) => columnBuilders[identifier]!).toList();
  }

  PlutoColumn _statusColumn(String title, String field) {
    return PlutoColumn(
      title: title,
      field: field,
      type: PlutoColumnType.select([]),
      applyFormatterInEditing: true,
      enableEditingMode: false,
      width: 100,
      renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(rendererContext, field, RightsService.canUpdateUsers),
    );
  }

  // Actions (import, invite, change password, add to group, add existing)
  Future<void> _import(SingleTableDataGrid dataGrid) async {
    await UserManagementHelper.import(context);
    await dataGrid.reloadData();
  }

  Future<void> _invite(SingleTableDataGrid dataGrid) async {
    var users = _getCheckedUsers(dataGrid);
    if (users.isEmpty) return;
    await _processInvites(users, dataGrid);
  }

  Future<void> _setPassword(SingleTableDataGrid dataGrid) async {
    var users = _getCheckedUsers(dataGrid);
    if (users.isEmpty) return;
    for (var u in users) await UserManagementHelper.unsafeChangeUserPassword(context, u);
    ToastHelper.Show(context, "Password has been changed.".tr());
  }

  Future<void> _addToGroup(SingleTableDataGrid dataGrid) async {
    var users = _getCheckedUsers(dataGrid);
    var chosenGroup = await DialogHelper.showAddToGroupDialogAsync(context, await DbGroups.getAllUserGroupInfo());
    if (chosenGroup != null) {
      chosenGroup.participants!.addAll(users.map((u) => UserInfoModel(id: u.user)));
      await DbGroups.updateUserGroupParticipants(chosenGroup, chosenGroup.participants!);
      ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item": chosenGroup.title}));
    }
  }

  Future<void> _addExisting(SingleTableDataGrid dataGrid) async {
    if (_allUsers.isEmpty) _allUsers = await DbUsers.getAllUsersBasics();
    var nonAdded = _allUsers.where((u) => !_getCheckedUsers(dataGrid).any((cu) => cu.user == u.id)).toList();
    DialogHelper.chooseUser(context,  (chosenUser) async {
      if (chosenUser != null) {
          await DbUsers.addUserToOccasion(chosenUser.id, RightsService.currentOccasion!);
          ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item": chosenUser.toString()}));
      }
    }, nonAdded, "Add".tr());

    await dataGrid.reloadData();
  }

  List<OccasionUserModel> _getCheckedUsers(SingleTableDataGrid dataGrid) {
    return List<OccasionUserModel>.from(
      dataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OccasionUserModel.fromPlutoJson(row.toJson())),
    );
  }

  Future<void> _processInvites(List<OccasionUserModel> users, SingleTableDataGrid dataGrid) async {
    var confirm = await DialogHelper.showConfirmationDialogAsync(context, "Invite".tr(), "${"Users will get invitation via e-mail.".tr()} (${users.length}):\n${users.map((u) => u.toBasicString()).join(",\n")}");
    if (confirm) {
      for (var user in users) {
        await AuthService.resetPasswordForEmail(user.data![Tb.occasion_users.data_email]);
        user.data![Tb.occasion_users.data_isInvited] = true;
        await DbUsers.updateOccasionUser(user);
        ToastHelper.Show(context, "Invited: {user}.".tr(namedArgs: {"user": user.data![Tb.occasion_users.data_email]}));
      }
      await dataGrid.reloadData();
    }
  }
}
