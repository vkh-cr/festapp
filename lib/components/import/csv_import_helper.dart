// file: lib/helpers/csv_import_helper.dart

import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/users/import_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

class CsvImportHelper {
  static Future<void> importFromCsv(BuildContext context) async {
    // Replaced the direct file picker with a dialog that allows drag-and-drop.
    var file = await DialogHelper.dropFilesHere(
        context,
        FeaturesStrings.labelImportFromCsv,
        "Import".tr(),
        "Storno".tr()
    );

    if (file == null) return; // User canceled the dialog

    var users = await ImportHelper.getUsersFromFile(file);
    var addOrUpdateUsers = users.where((element) => element[Tb.occasion_users.data_text4]?.toLowerCase() != "storno").toList();
    var deleteUsers = users.where((element) => element[Tb.occasion_users.data_text4]?.toLowerCase() == "storno").toList();

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      FeaturesStrings.labelImportFromCsv,
      "${"Users".tr()} (${users.length}):\n${users.map((value) => value[Tb.occasion_users.data_email]).toList().join(",\n")}",
      confirmButtonMessage: "Proceed".tr(),
    );

    if (!proceed) return;

    var existingUsers = await DbUsers.getOccasionUsers();
    var toBeCreated = _getUsersToBeCreated(addOrUpdateUsers, existingUsers);
    var toBeUpdated = _getUsersToBeUpdated(addOrUpdateUsers, existingUsers);
    var toBeDeleted = _getUsersToBeDeleted(deleteUsers, addOrUpdateUsers, existingUsers);

    await _handleCreateUsers(context, toBeCreated);
    await _handleUpdateUsers(context, toBeUpdated, existingUsers);
    await _handleDeleteUsers(context, toBeDeleted);
  }

  // Helper to get users to be created
  static List<Map<String, dynamic>> _getUsersToBeCreated(
      Iterable<Map<String, dynamic>> users, List<OccasionUserModel> existingUsers) {
    return users.where((u) {
      return existingUsers.firstWhereOrNull(
            (e) => e.data?[Tb.occasion_users.data_email]?.toLowerCase() ==
            u[Tb.occasion_users.data_email]?.toLowerCase(),
      ) ==
          null;
    }).toList();
  }

  // Helper to get users to be updated
  static List<Map<String, dynamic>> _getUsersToBeUpdated(
      Iterable<Map<String, dynamic>> users, List<OccasionUserModel> existingUsers) {
    return users.where((u) {
      var existing = existingUsers.firstWhereOrNull(
            (e) => e.data?[Tb.occasion_users.data_email]?.toLowerCase() ==
            u[Tb.occasion_users.data_email]?.toLowerCase(),
      );
      return existing != null && !existing.importedEquals(u);
    }).toList();
  }

  // Helper to get users to be deleted
  static List<OccasionUserModel> _getUsersToBeDeleted(
      Iterable<Map<String, dynamic>> deleteUsers,
      Iterable<Map<String, dynamic>> addOrUpdateUsers,
      List<OccasionUserModel> existingUsers) {
    return deleteUsers.map((u) {
      var existing = existingUsers.firstWhereOrNull(
            (e) => e.data?[Tb.occasion_users.data_email] == u[Tb.occasion_users.data_email],
      );
      var duplicated = addOrUpdateUsers.firstWhereOrNull(
            (e) => e[Tb.occasion_users.data_email] == u[Tb.occasion_users.data_email],
      );
      return (existing != null && duplicated == null) ? existing : null;
    }).whereNotNull().toList();
  }

  // Handle creating users with progress dialog
  static Future<void> _handleCreateUsers(BuildContext context, List<Map<String, dynamic>> toBeCreated) async {
    if (toBeCreated.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      "Creating users".tr(),
      "New users found. Do you want to create them?".tr() +
          "\n" +
          "${"Users".tr()} (${toBeCreated.length}):\n${toBeCreated.map((u) => u[Tb.occasion_users.data_email]).join(",\n")}",
      confirmButtonMessage: "Proceed".tr(),
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      "Creating users".tr(),
      toBeCreated.length,
      futures: toBeCreated.map((u) => () async {
        await DbUsers.updateOccasionUser(OccasionUserModel.fromImportedJson(u));
        ToastHelper.Show(context, "Created {item}.".tr(namedArgs: {"item": u[Tb.occasion_users.data_email]}));
      }).toList(),
    );
  }

  // Handle updating users with progress dialog
  static Future<void> _handleUpdateUsers(
      BuildContext context, List<Map<String, dynamic>> toBeUpdated, List<OccasionUserModel> existingUsers) async {
    if (toBeUpdated.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      "Updating users".tr(),
      "These users have some changes. Do you want to update them?".tr() +
          "\n" +
          "${"Users".tr()} (${toBeUpdated.length}):\n${toBeUpdated.map((u) => u[Tb.occasion_users.data_email]).join(",\n")}",
      confirmButtonMessage: "Proceed".tr(),
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      "Updating users".tr(),
      toBeUpdated.length,
      futures: toBeUpdated.map((u) => () async {
        var existing = existingUsers.firstWhere(
              (e) => e.data?[Tb.occasion_users.data_email] == u[Tb.occasion_users.data_email],
        );
        var fromExisting = OccasionUserModel.fromImportedJson(u, existing);
        await DbUsers.updateExistingImportedOccasionUser(fromExisting);
        ToastHelper.Show(context, "Updated {item}.".tr(namedArgs: {"item": u[Tb.occasion_users.data_email]}));
      }).toList(),
    );
  }

  // Handle deleting users with progress dialog
  static Future<void> _handleDeleteUsers(BuildContext context, List<OccasionUserModel> toBeDeleted) async {
    if (toBeDeleted.isEmpty) return;

    var proceed = await DialogHelper.showConfirmationDialog(
      context,
      "Removing users".tr(),
      "These users have been removed, but they still exist in the application. Do you want to remove them?".tr() +
          "\n" +
          "${"Users".tr()} (${toBeDeleted.length}):\n${toBeDeleted.map((u) => u.toBasicString()).join(",\n")}",
      confirmButtonMessage: "Proceed".tr(),
    );

    if (!proceed) return;

    await DialogHelper.showProgressDialogAsync(
      context,
      "Removing users".tr(),
      toBeDeleted.length,
      futures: toBeDeleted.map((existing) => ()  async {
        await DbUsers.deleteOccasionUser(existing.user!, existing.occasion!);
        ToastHelper.Show(context, "Removed {item}.".tr(namedArgs: {"item": existing.toBasicString()}));
      }).toList(),
    );
  }
}