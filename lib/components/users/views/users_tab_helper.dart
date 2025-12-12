import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/import/import_dialog_helper.dart';
import 'package:fstapp/components/single_data_grid/i_has_id.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/components/single_data_grid/single_data_grid_controller.dart';
import 'package:fstapp/components/groups/group_participant_model.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/groups/db_groups.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/users/user_management_helper.dart';

class UsersTabHelper {
  /// Calls the import routine and then reloads users via the provided callback.
  static Future<void> importUsers(
      BuildContext context, Future<void> Function() reloadUsers) async {
    await ImportDialogHelper.import(context);
    await reloadUsers();
  }

  /// Returns the list of checked OccasionUserModel items from the data grid.
  static List<OccasionUserModel> getCheckedUsers(
      SingleDataGridController singleDataGrid) {
    return List<OccasionUserModel>.from(
      singleDataGrid.stateManager.refRows.originalList
          .where((row) => row.checked == true)
          .map((row) => OccasionUserModel.fromPlutoJson(row.toJson())),
    );
  }

  /// Changes passwords for all checked users.
  static Future<void> setPassword(
      BuildContext context, SingleDataGridController singleDataGrid) async {
    var users = getCheckedUsers(singleDataGrid);
    if (users.isEmpty) return;

    List<String> errorMessages = [];
    for (var u in users) {
      try {
        await UserManagementHelper.unsafeChangeUserPassword(context, u);
        ToastHelper.Show(context, "Password has been changed.".tr());
      } catch (e) {
        String errorMessage = "Failed for user ${u.data?[Tb.occasion_users.data_email] ?? '[no email]'}: ${e.toString()}".tr();
        ToastHelper.Show(context, errorMessage, severity: ToastSeverity.NotOk);
        errorMessages.add(errorMessage);
      }
    }
  }

  /// Opens the add-to-group dialog and updates the group with checked users.
  static Future<void> addToGroup(
      BuildContext context, SingleDataGridController singleDataGrid) async {
    var users = getCheckedUsers(singleDataGrid);
    var chosenGroup = await DialogHelper.showAddToGroupDialogAsync(
        context, await DbGroups.getAllUserGroupInfo());
    if (chosenGroup != null) {
      chosenGroup.participants!
          .addAll(users.map((u) => GroupParticipantModel(userInfo: UserInfoModel(id: u.id))));
      await DbGroups.updateUserGroupParticipants(
          chosenGroup, chosenGroup.participants!);
      ToastHelper.Show(context, "Updated {item}.".tr(
          namedArgs: {"item": chosenGroup.title}));
    }
  }

  /// Adds an existing user (from those not already added) to the occasion.
  /// [currentUsers] are the users already added in the current state.
  /// [reloadUsers] is a callback to trigger reloading the user list.
  static Future<void> addExisting(BuildContext context,
      SingleDataGridController singleDataGrid, List<IHasId> currentUsers,
      Future<void> Function() reloadUsers) async {
    var existing = await DbUsers.getAllUsersBasicsForUnit();
    var nonAdded =
    existing.where((u) => !currentUsers.any((cu) => cu.id == u.id)).toList();
    DialogHelper.chooseUser(context, (chosenUser) async {
      await DbUsers.addUserToOccasion(
          chosenUser.id!, RightsService.currentOccasionId()!);
      ToastHelper.Show(context, "Updated {item}.".tr(
          namedArgs: {"item": chosenUser.toString()}));
      await reloadUsers();
        }, nonAdded, "Add".tr());
  }

  static Future<void> addExistingToUnit(BuildContext context,
      SingleDataGridController singleDataGrid, List<ITrinaRowModel> currentUsers,
      Future<void> Function() reloadUsers, int unit) async {
    var existing = await DbUsers.getAllUsersBasicsForUnit();
    var nonAdded =
    existing.where((u) => !currentUsers.any((cu) => cu.id == u.id)).toList();
    DialogHelper.chooseUser(context, (chosenUser) async {
      await DbUsers.addUserToUnit(
          chosenUser.id!, unit);
      ToastHelper.Show(context, "Updated {item}.".tr(
          namedArgs: {"item": chosenUser.toString()}));
      await reloadUsers();
        }, nonAdded, "Add".tr());
  }

  /// Invites the checked users.
  /// [reloadUsers] is a callback to trigger reloading the user list.
  static Future<void> invite(
      BuildContext context, SingleDataGridController singleDataGrid,
      Future<void> Function() reloadUsers) async {
    var users = getCheckedUsers(singleDataGrid);
    if (users.isEmpty) return;

    var alreadyInvitedUsers = users
        .where((user) => user.data![Tb.occasion_users.data_isInvited] == true)
        .toList();
    var newUsers = users
        .where((user) => user.data![Tb.occasion_users.data_isInvited] != true)
        .toList();

    if (alreadyInvitedUsers.isNotEmpty) {
      var reinviteConfirm = await DialogHelper.showConfirmationDialog(
        context,
        "Invite".tr(),
        "Some users have already been invited. Do you want to invite them again and send a new sign-in code?"
            .tr(),
      );
      if (!reinviteConfirm) {
        await processInvites(context, newUsers);
        await reloadUsers();
        return;
      }
    }
    await processInvites(context, users);
    await reloadUsers();
  }

  /// Processes sending sign-in codes to the given users.
  static Future<void> processInvites(
      BuildContext context, List<OccasionUserModel> users,
      {int retryLimit = 3}) async {
    var confirm = await DialogHelper.showConfirmationDialog(
      context,
      "Invite".tr(),
      "${"Users will get a sign-in code via e-mail.".tr()} (${users.length}):\n${users.map((u) => u.toBasicString()).join(",\n")}",
    );

    if (confirm) {
      Map<OccasionUserModel, int> retryAttempts = {
        for (var user in users) user: 0
      };

      List<Future<void> Function()> inviteFutures = users.map((user) {
        return () async {
          while (retryAttempts[user]! < retryLimit) {
            try {
              await AuthService.sendSignInCode(user);
              ToastHelper.Show(
                context,
                "Invited: {user}.".tr(namedArgs: {
                  "user": user.data![Tb.occasion_users.data_email]
                }),
              );
              return;
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

      await DialogHelper.showProgressDialogAsync(
        context,
        "Invite".tr(),
        inviteFutures.length,
        futures: inviteFutures,
        delay: Duration(milliseconds: 500),
      );
    }
  }
}
