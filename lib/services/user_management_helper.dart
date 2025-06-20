import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/features/import_feature.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/import_helper.dart';
import 'package:fstapp/services/toast_helper.dart';

class UserManagementHelper{
  static Future<void> import(BuildContext context) async {

    final importFeature = FeatureService.getFeatureDetails(FeatureConstants.import) as ImportFeature?;
    if (importFeature == null || !importFeature.isEnabled) return;


    var choice = await DialogHelper.showImportDialog(
        context,
        "Import".tr(),
        showCsvImport: importFeature.importFromCsv,
        showTicketImport: importFeature.importFromTickets
    );

    if (choice == null) return;

    if (choice.fromFile != null)
    {
      var file = choice.fromFile!;
      var users = await ImportHelper.getUsersFromFile(file);
      var addOrUpdateUsers = users.where((element) => element[Tb.occasion_users.data_text4]?.toLowerCase() != "storno");
      var deleteUsers = users.where((element) => element[Tb.occasion_users.data_text4]?.toLowerCase() == "storno");

      var proceed = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Import users from CSV".tr(),
        "${"Users".tr()} (${users.length}):\n${users.map((value) => value[Tb.occasion_users.data_email]).toList().join(",\n")}",
        confirmButtonMessage: "Proceed".tr(),
      );

      if (!proceed) return;

      var existingUsers = await DbUsers.getOccasionUsers();
      var toBeCreated = _getUsersToBeCreated(users, existingUsers);
      var toBeUpdated = _getUsersToBeUpdated(users, existingUsers);
      var toBeDeleted = _getUsersToBeDeleted(deleteUsers, addOrUpdateUsers, existingUsers);

      await _handleCreateUsers(context, toBeCreated);
      await _handleUpdateUsers(context, toBeUpdated, existingUsers);
      await _handleDeleteUsers(context, toBeDeleted);
    }
    else if(choice.fromTickets)
    {
      var confirm = await DialogHelper.showConfirmationDialogAsync(
          context,
          FeaturesStrings.importFromTicketsTitle,
          FeaturesStrings.importFromTicketsConfirm
      );

      if(confirm) {
        try {
          var result = await DbUsers.importUsersFromTickets(RightsService.currentOccasionId()!);

          if (result == null) {
            ToastHelper.Show(context, "${FeaturesStrings.importFromTicketsError}: No response from server.");
            return;
          }

          final Map<String, dynamic> resultMap = result['data'] as Map<String, dynamic>;
          final List<dynamic> insertedUsersRaw = resultMap['inserted'] ?? [];
          final List<dynamic> updatedUsersRaw = resultMap['updated'] ?? [];

          final List<Map<String, dynamic>> insertedUsers = insertedUsersRaw.map((e) => e as Map<String, dynamic>).toList();
          final List<Map<String, dynamic>> updatedUsers = updatedUsersRaw.map((e) => e as Map<String, dynamic>).toList();

          final int insertedCount = insertedUsers.length;
          final int updatedCount = updatedUsers.length;

          final insertedEmails = insertedUsers.map((u) => "- ${u['email']}").join("\n");
          final updatedEmails = updatedUsers.map((u) => "- ${u['email']}").join("\n");

          String message = "${FeaturesStrings.importFromTicketsCompleted}\n\n"
              "${FeaturesStrings.createdUsers} ($insertedCount):\n"
              "${insertedUsers.isEmpty ? FeaturesStrings.none : insertedEmails}\n\n"
              "${FeaturesStrings.updatedUsers} ($updatedCount):\n"
              "${updatedUsers.isEmpty ? FeaturesStrings.none : updatedEmails}";

          await DialogHelper.showConfirmationDialogAsync(
            context,
            FeaturesStrings.importResultsTitle,
            message,
            confirmButtonMessage: FeaturesStrings.ok,
          );
        } catch (e) {
          ToastHelper.Show(context, "${FeaturesStrings.importFromTicketsError}: $e");
        }
      }
    }
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

    var proceed = await DialogHelper.showConfirmationDialogAsync(
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

    var proceed = await DialogHelper.showConfirmationDialogAsync(
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

    var proceed = await DialogHelper.showConfirmationDialogAsync(
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

  static Future<bool> unsafeChangeUserPassword(BuildContext context, OccasionUserModel user) async {
    if(user.data?[Tb.occasion_users.data_email] == null)
    {
      throw Exception("User must have an e-mail!");
    }
    if(user.user == null)
    {
      throw Exception("User must be created first.");
    }
    var pw = await DialogHelper.showPasswordInputDialog(context, "Password".tr(), "Insert here".tr());
    if(pw==null || pw.isEmpty)
    {
      throw Exception("Password has not been set.");
    }
    try{
      await AuthService.unsafeChangeUserPassword(user, pw);
    } catch (e){
      ToastHelper.Show(context, e.toString());
    }
    return true;
  }
}
