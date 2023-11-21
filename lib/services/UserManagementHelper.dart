import 'dart:math';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/services/DataService.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/services/ImportHelper.dart';
import 'package:avapp/services/MailerSendHelper.dart';
import 'package:avapp/services/NavigationService.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/config.dart';
import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:intl/intl.dart';

class UserManagementHelper{
  static Future<void> import(BuildContext context) async {
    var file = await DialogHelper.dropFilesHere(context, "Import uživatelů z CSV tabulky", "Potvrdit", "Storno");
    if(file==null) {
      return;
    }
    var users = await ImportHelper.getUsersFromFile(file);
    var addOrUpdateUsers = users.where((element) => element.accommodation!.toLowerCase() != "storno");
    var deleteUsers = users.where((element) => element.accommodation!.toLowerCase() == "storno");

    var really = await DialogHelper.showConfirmationDialogAsync(context,
        "Import uživatelů",
        "Uživatelé (${users.length}):\n${users.map((value) => value.toBasicString()).toList().join(",\n")}",
        confirmButtonMessage: "Potvrdit");

    if(!really)
    {
      return;
    }

    var existingUsers = await DataService.getUsers();

    List<UserInfoModel> toBeCreated = [];
    List<UserInfoModel> toBeUpdated = [];
    for(var u in addOrUpdateUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email!.toLowerCase() == u.email!.toLowerCase());
      if(existing == null) {
        toBeCreated.add(u);
        continue;
      }
      else if(existing.importedEquals(u)) {
        continue;
      }
      else{
        u.id = existing.id;
        toBeUpdated.add(u);
      }
    }

    if(toBeCreated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Vytvoření uživatelů",
          "Tito uživatelé jsou noví. Chcete je vytvořit?\n"
              "Uživatelé (${toBeCreated.length}):\n${toBeCreated.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(really) {
        toBeCreated.forEach((u) async {
          u.id = await DataService.createUser(u.email!);
          await DataService.updateUser(u);
          await UserManagementHelper.generateAndUpdatePasswordFromUser(u, true);
          ToastHelper.Show("Vytvořen ${u.email} a odeslán e-mail s vygenerovaným heslem.");
        });
      }
    }

    if(toBeUpdated.isNotEmpty) {
      var really = await DialogHelper.showConfirmationDialogAsync(context,
          "Úprava uživatelů",
          "Tito uživatelé byli upraveni. Chcete aktualizovat údaje?\n"
              "Uživatelé (${toBeUpdated.length}):\n${toBeUpdated.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(really) {
        toBeUpdated.forEach((u) async {
          await DataService.updateUser(u);
          ToastHelper.Show("Upraven ${u.toBasicString()}.");
        });
      }
    }

    List<UserInfoModel> toBeDeleted = [];
    for(var u in deleteUsers)
    {
      var existing = existingUsers.firstWhereOrNull((element) => element.email == u.email);
      var duplicated = addOrUpdateUsers.firstWhereOrNull((element) => element.email == u.email);

      if(existing != null && duplicated == null) {
        toBeDeleted.add(existing);
      }
    }

    if(toBeDeleted.isNotEmpty) {
      var reallyDelete = await DialogHelper.showConfirmationDialogAsync(context,
          "Vymazání uživatelů",
          "Tito uživatelé byli stornování, přesto stále existují v systému aplikace. Chcete je vymazat?\n"
              "Uživatelé (${toBeDeleted.length}):\n${toBeDeleted.map((value) => value.toBasicString()).toList().join(",\n")}",
          confirmButtonMessage: "Potvrdit");

      if(reallyDelete) {
        toBeDeleted.forEach((existing) async {
          await DataService.deleteUser(existing.id!);
          ToastHelper.Show("Smazán ${existing.toBasicString()}");
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
        ToastHelper.Show("Uživateli ${u.email} nebylo změněno heslo, protože už se s ním přihlásil.");
        return;
      }
    }

    var random = Random();
    var numberFormat = NumberFormat("####");

    var password = "${config.generatedPasswordPrefix}${numberFormat.format((random.nextInt(8999)+1000))}";
    await DataService.updateUserPassword(u, password);
    ToastHelper.Show("Uživateli ${u.email} bylo změněno heslo.");
    MailerSendHelper.sendPassword(u, password);
  }

  static Future<String> unsafeCreateNewUser(UserInfoModel user) async {
    if(user.email == null)
    {
      throw Exception("User must have an e-mail!");
    }

    var random = Random();
    var numberFormat = NumberFormat("####");
    var pw = "${config.generatedPasswordPrefix}${numberFormat.format((random.nextInt(8999)+1000))}";

    var newId = await DataService.unsafeCreateUser(user.email!, pw);
    if(newId==null)
    {
      throw Exception("Nepodařilo se vytvořit uživatele.");
    }
    MailerSendHelper.sendPassword(user, pw);
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
      throw Exception("Nepodařilo se změnit heslo.");
    }
    MailerSendHelper.sendPassword(user, pw);
    return newId;
  }

}