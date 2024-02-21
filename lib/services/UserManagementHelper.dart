import 'dart:math';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/data/DataService.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/services/ImportHelper.dart';
import 'package:avapp/services/MailerSendHelper.dart';
import 'package:avapp/services/NavigationService.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/appConfig.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';

class UserManagementHelper{
  static Future<void> import(BuildContext context) async {
    var file = await DialogHelper.dropFilesHere(context, "Import of users from CSV".tr(), "Ok".tr(), "Storno".tr());
    if(file==null) {
      return;
    }
    var users = await ImportHelper.getUsersFromFile(file);
    var addOrUpdateUsers = users.where((element) => element[UserInfoModel.accommodationColumn]?.toLowerCase() != "storno");
    var deleteUsers = users.where((element) => element[UserInfoModel.accommodationColumn]?.toLowerCase() == "storno");

    var really = await DialogHelper.showConfirmationDialogAsync(context,
        "Importing users".tr(),
        "${"Users".tr()} (${users.length}):\n${users.map((value) => value[UserInfoModel.emailReadonlyColumn]).toList().join(",\n")}",
        confirmButtonMessage: "Proceed".tr());

    if(!really)
    {
      return;
    }

    var existingUsers = await DataService.getUsers();

    List<Map<String, dynamic>> toBeCreated = [];
    List<Map<String, dynamic>> toBeUpdated = [];
    for(var u in addOrUpdateUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email!.toLowerCase() == u[UserInfoModel.emailReadonlyColumn]!.toLowerCase());
      if(existing == null) {
        toBeCreated.add(u);
        continue;
      }
      else if(existing.importedEquals(u)) {
        continue;
      }
      else{
        u[UserInfoModel.idColumn] = existing.id;
        toBeUpdated.add(u);
      }
    }

    if(toBeCreated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Creating users".tr(),
          "New users found. Do you want to create them?".tr() +
          "\n" +
          "${"Users".tr()} (${toBeCreated.length}):\n${toBeCreated.map((value) => value[UserInfoModel.emailReadonlyColumn]).toList().join(",\n")}",
          confirmButtonMessage: "Proceed".tr());

      if(really) {
        toBeCreated.forEach((u) async {
          await DataService.updateUserAsJson(u);
          ToastHelper.Show("Created {item}.".tr(namedArgs: {"item": u[UserInfoModel.emailReadonlyColumn]}));
        });
      }
    }

    if(toBeUpdated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Updating users".tr(),
          "These users have some changes. Do you want to update them?".tr() +
          "\n" +
          "${"Users".tr()} (${toBeUpdated.length}):\n${toBeUpdated.map((value) => value[UserInfoModel.emailReadonlyColumn]).toList().join(",\n")}",
          confirmButtonMessage: "Proceed".tr());

      if(really) {
        toBeUpdated.forEach((u) async {
          await DataService.updateUserAsJson(u);
          ToastHelper.Show("Updated {item}.".tr(namedArgs: {"item": u[UserInfoModel.emailReadonlyColumn]}));
        });
      }
    }

    List<UserInfoModel> toBeDeleted = [];
    for(var u in deleteUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email == u[UserInfoModel.emailReadonlyColumn]);
      var duplicated = addOrUpdateUsers.firstWhereOrNull((element) => element[UserInfoModel.emailReadonlyColumn] == u[UserInfoModel.emailReadonlyColumn]);

      if(existing != null && duplicated == null) {
        toBeDeleted.add(existing);
      }
    }

    if(toBeDeleted.isNotEmpty) {
      var reallyDelete = await DialogHelper.showConfirmationDialogAsync(context,
          "Removing users",
          "These users have been removed, but they still exist in the application. Do you want to remove them?".tr() +
              "\n" +
              "${"Users".tr()} (${toBeDeleted.length}):\n${toBeDeleted.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Proceed".tr());

      if(reallyDelete) {
        toBeDeleted.forEach((existing) async {
          await DataService.deleteUser(existing.id!);
          ToastHelper.Show("Removed {item}.".tr(namedArgs: {"item": existing.toBasicString()}));
        });
      }
    }
  }

  static Future<void> generateAndUpdatePasswordFromUser(UserInfoModel u, bool ignoreIfAlreadySignedIn)
  async {
    //ignore already signed users
    if(ignoreIfAlreadySignedIn)
    {
      var time = await DataService.getLastTimeSignIn(u.id!);
      if(time!=null)
      {
        ToastHelper.Show("Password from {user} was not changed because it was already used to sign in.".tr(namedArgs: {"user":u.email!}));
        return;
      }
    }

    var random = Random();
    var numberFormat = NumberFormat("####");

    var password = "${AppConfig.generatedPasswordPrefix}${numberFormat.format((random.nextInt(8999)+1000))}";
    await DataService.updateUserPassword(u, password);
    ToastHelper.Show("Password from {user} has been changed.".tr(namedArgs: {"user":u.email!}));
    await MailerSendHelper.sendPassword(u, password);
  }

  static Future<String> unsafeCreateNewUser(String? email) async {
    if(email == null)
    {
      throw Exception("User must have an e-mail!");
    }

    var random = Random();
    var numberFormat = NumberFormat("####");
    var pw = "${AppConfig.generatedPasswordPrefix}${numberFormat.format((random.nextInt(8999)+1000))}";

    var newId = await DataService.unsafeCreateUser(email, pw);
    if(newId==null)
    {
      throw Exception("Creating of user has failed.");
    }
    return newId;
  }

  static Future<String> unsafeChangeUserPassword(UserInfoModel user) async {
    if(user.email == null)
    {
      throw Exception("User must have an e-mail!");
    }
    if(user.id == null)
    {
      throw Exception("User must be created first.");
    }
    var pw = await DialogHelper.showPasswordInputDialog(NavigationService.navigatorKey.currentContext!, "Zadej heslo pro uživatele ${user.email}. Uživatel obdrží e-mail s přihlašovacími údaji.", "vlož zde", "Storno", "Ok");
    if(pw==null)
    {
      throw Exception("You must set password!");
    }

    var newId = await DataService.unsafeChangeUserPassword(user.email!, pw);
    if(newId==null)
    {
      throw Exception("Changing of the password has failed.");
    }
    return pw;
  }

}