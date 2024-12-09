import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridAction.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/components/dataGrid/SingleTableDataGrid.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdministrationOccasion/ColumnHelper.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/UserManagementHelper.dart';

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
    UserColumns.ADMINISTRATOR,
    UserColumns.EDITOR,
    UserColumns.APPROVER,
    UserColumns.APPROVED,
    UserColumns.INVITED
  ];

  List<UserInfoModel>? _allUsers; // Initialize as null to indicate loading state
  Key refreshKey = UniqueKey(); // Initialize the refresh key

  @override
  void initState() {
    super.initState();
    loadUsers();
  }

  Future<void> loadUsers() async {
    _allUsers = await DbUsers.getAllUsersBasics();
    setState(() {
      refreshKey = UniqueKey(); // Update the key to force a full rebuild
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_allUsers == null) {
      return Center(child: CircularProgressIndicator()); // Show loading indicator if users are not loaded yet
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
          DataGridAction(name: "Add existing".tr(), action: (SingleTableDataGrid p0, [_]) => _addExisting(p0)),
          DataGridAction(name: "Invite".tr(), action: (SingleTableDataGrid p0, [_]) => _invite(p0), isEnabled: RightsService.canUpdateUsers),
          DataGridAction(name: "Change password".tr(), action: (SingleTableDataGrid p0, [_]) => _setPassword(p0), isEnabled: RightsService.canUpdateUsers),
          DataGridAction(name: "Add to group".tr(), action: (SingleTableDataGrid p0, [_]) => _addToGroup(p0)),
        ],
        columns: UserColumns.generateColumns(columnIdentifiers),
      ).DataGrid(),
    );
  }

  // Actions (import, invite, change password, add to group, add existing)
  Future<void> _import(SingleTableDataGrid dataGrid) async {
    await UserManagementHelper.import(context);
    await loadUsers();
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
    if (_allUsers == null) return;
    var nonAdded = _allUsers!.where((u) => !_getCheckedUsers(dataGrid).any((cu) => cu.user == u.id)).toList();
    DialogHelper.chooseUser(context, (chosenUser) async {
      if (chosenUser != null) {
        await DbUsers.addUserToOccasion(chosenUser.id, RightsService.currentOccasion!);
        ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item": chosenUser.toString()}));
        await loadUsers(); // Reload users and force rebuild
      }
    }, nonAdded, "Add".tr());
  }

  List<OccasionUserModel> _getCheckedUsers(SingleTableDataGrid dataGrid) {
    return List<OccasionUserModel>.from(
      dataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OccasionUserModel.fromPlutoJson(row.toJson())),
    );
  }

  Future<void> _invite(SingleTableDataGrid dataGrid) async {
    var users = _getCheckedUsers(dataGrid);
    if (users.isEmpty) return;

    // Separate already invited users
    var alreadyInvitedUsers = users.where((user) => user.data![Tb.occasion_users.data_isInvited] == true).toList();
    var newUsers = users.where((user) => user.data![Tb.occasion_users.data_isInvited] != true).toList();

    if (alreadyInvitedUsers.isNotEmpty) {
      // Ask the user if they want to reinvite already invited users
      var reinviteConfirm = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Invite".tr(),
        "Some users have already been invited. Do you want to invite them again and send a new sign-in code?".tr(),
      );

      // If the user chooses not to reinvite, exclude already invited users
      if (!reinviteConfirm) {
        await _processInvites(newUsers);
        await loadUsers(); // Ensure data is updated
        return;
      }
    }

    // Proceed with inviting both new and previously invited users (if reinvite confirmed)
    await _processInvites(users);
    await loadUsers(); // Ensure data is updated
  }

  Future<void> _processInvites(
      List<OccasionUserModel> users,
      {int retryLimit = 3}
      ) async {
    var confirm = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Invite".tr(),
        "${"Users will get a sign-in code via e-mail.".tr()} (${users
            .length}):\n${users.map((u) => u.toBasicString()).join(",\n")}"
    );

    if (confirm) {
      Map<OccasionUserModel, int> retryAttempts = {
        for (var user in users) user: 0
      };

      List<Future<void> Function()> inviteFutures = users.map((user) {
        return () async {
          while (retryAttempts[user]! < retryLimit) {
            try {
              // Uncomment this line to send the actual sign-in code
              await AuthService.sendSignInCode(user);

              // Show success toast
              ToastHelper.Show(
                context,
                "Invited: {user}.".tr(namedArgs: {
                  "user": user.data![Tb.occasion_users.data_email]
                }),
              );
              return; // Exit retry loop on success
            } catch (e) {
              retryAttempts[user] = retryAttempts[user]! + 1;

              if (retryAttempts[user]! >= retryLimit) {
                ToastHelper.Show(
                  context,
                  "Failed to invite {user}. Number of retries: ({retries}).".tr(
                      namedArgs: {
                        "retries": retryLimit.toString(),
                        "user": user.data![Tb.occasion_users.data_email]
                      }),
                  severity: ToastSeverity.NotOk,
                );
                print(
                    "Failed to invite user: ${user.data![Tb.occasion_users.data_email]}. Error: $e");
              } else {
                print(
                    "Retrying to invite user: ${user.data![Tb.occasion_users.data_email]}. Attempt: ${retryAttempts[user]}");
              }
              await Future.delayed(Duration(milliseconds: 500));
            }
          }
        };
      }).toList();

      // Show progress dialog while processing
      await DialogHelper.showProgressDialogAsync(
        context,
        "Invite".tr(), inviteFutures.length,
        futures: inviteFutures,
        delay: Duration(milliseconds: 500)
      );
    }
  }
}