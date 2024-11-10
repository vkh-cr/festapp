import 'package:fstapp/dataModels/LanguageModel.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/appConfig.dart';

import 'package:flutter/material.dart';
import 'package:cross_file/cross_file.dart';
import 'package:search_page/search_page.dart';
import 'package:select_dialog/select_dialog.dart';

import '../widgets/DropFile.dart';

class DialogHelper{

  static void chooseUser(BuildContext context, void onPressedAction(UserInfoModel), List<UserInfoModel> _allUsers, String setText) {
    showSearch(
        context: context,
        delegate: SearchPage<UserInfoModel>(
          showItemsOnEmpty: true,
          items: _allUsers,
          searchLabel: "Search participants".tr(),
          suggestion: Center(
            child: const Text(
                "Find participants by name, surname or e-mail.").tr(),
          ),
          failure: Center(
            child: const Text("No results.").tr(),
          ),
          filter: (person) => [
            person.name,
            person.surname,
            person.email,
          ],
          builder: (person) => ListTile(
            title: Text(person.name!),
            subtitle: Text(person.surname??""),
            trailing: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                ElevatedButton(
                    onPressed: () {
                      onPressedAction(person);
                    },
                    child: Text(setText)),
                Text(person.email??""),
              ],
            ),
          ),
        ));
  }


  static Future<void> showInformationDialogAsync(
      BuildContext context,
      String titleMessage,
      String textMessage,
      [String buttonMessage = "Ok"]) async{
    await showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(titleMessage),
            content: Text(textMessage),
            actions: [
              ElevatedButton(
                child: Text(buttonMessage),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
  }

  static Future<bool> showConfirmationDialogAsync(
      BuildContext context,
      String titleMessage,
      String textMessage, {
        String confirmButtonMessage = "Ok",
        String cancelButtonMessage = "Storno",
      }) async {
    bool result = false;
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titleMessage),
          content: SingleChildScrollView(child: Text(textMessage)),
          actions: [
            TextButton(
              child: Text(cancelButtonMessage),
              onPressed: () {
                result = false;
                Navigator.of(context).pop();
              },
            ),
            ElevatedButton(
              child: Text(confirmButtonMessage),
              onPressed: () {
                result = true;
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
    return result;
  }


  static Future<UserGroupInfoModel?> showAddToGroupDialogAsync(
      BuildContext context,
      List<UserGroupInfoModel> userGroups,
      ) async {
    UserGroupInfoModel? selectedGroup;
    await SelectDialog.showModal<UserGroupInfoModel>(
      context,
      label: "Add to group".tr(),
      items: userGroups,
      searchBoxDecoration: InputDecoration(hintText: "Search".tr()),
      selectedValue: selectedGroup,
      itemBuilder:
          (BuildContext context, UserGroupInfoModel item, bool isSelected) {
        return Container(
          decoration: !isSelected
              ? null
              : BoxDecoration(
            borderRadius: BorderRadius.circular(5),
            color: Colors.white,
            border: Border.all(
              color: Theme.of(context).primaryColor,
            ),
          ),
          child: TextButton(onPressed: null, child: Text(item.title),),
        );
      },
      onChange: (selected) {
        selectedGroup = selected;
      },
    );
    return selectedGroup;
  }

  static Future<LanguageModel?> chooseLanguage(
      BuildContext context,
      ) async {
    var locales = AppConfig.availableLanguages;
    LanguageModel? selectedLocale;
    await SelectDialog.showModal<LanguageModel>(
      context,
      label: "Choose language".tr(),
      items: locales,
      showSearchBox: false,
      selectedValue: selectedLocale,
      itemBuilder:
          (BuildContext context, LanguageModel item, bool isSelected) {
        return Container(
          decoration: !isSelected
              ? null
              : BoxDecoration(
            borderRadius: BorderRadius.circular(5),
            color: Colors.white,
            border: Border.all(
              color: Theme.of(context).primaryColor,
            ),
          ),
          child: TextButton(onPressed: null, child: Text(item.name),),
        );
      },
      onChange: (selected) {
        selectedLocale = selected;
      },
    );
    if(selectedLocale!=null)
    {
      context.setLocale(selectedLocale!.locale);
      ToastHelper.Show(context, "Language was set to {language}.".tr(namedArgs: {"language":selectedLocale!.name}));
    }
    return selectedLocale;
  }

  static Future<String?> showPasswordInputDialog(
      BuildContext context,
      String titleMessage,
      String hint,
      [String confirmButtonMessage = "Ok",
      String cancelButtonMessage = "Storno"]
      ) async {
    final TextEditingController _messageController = TextEditingController();
    String? result;
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titleMessage),
          content: SingleChildScrollView(
            child: Column(
              children: [
                TextField(
                  controller: _messageController,
                  obscureText: true,
                  decoration: InputDecoration(hintText: hint),
                  onChanged: (str){ result = str;},
                )
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(cancelButtonMessage),
            ),
            TextButton(
              onPressed: () async {
                result = _messageController.text;
                _messageController.clear();
                Navigator.pop(context);
              },
              child: Text(confirmButtonMessage),
            ),
          ],
        );
      },
    );
    return result;
  }

  static Future<XFile?>  dropFilesHere(
      BuildContext context,
      String titleMessage,
      String confirmButtonMessage,
      String cancelButtonMessage,
      ) async {
    XFile? filePath;
    Widget dropFile = DropFile(onFilePathChanged: (f) => filePath = f);
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titleMessage),
          content: SingleChildScrollView(
            child: dropFile,
          ),
          actions: [
            TextButton(
              onPressed: () {
                filePath = null;
                Navigator.pop(context);
              },
              child: Text(cancelButtonMessage),
            ),
            TextButton(
              onPressed: () async {
                Navigator.pop(context);
              },
              child: Text(confirmButtonMessage),
            ),
          ],
        );
      },
    );
    return filePath;
  }


  static Future<bool> showNotificationPermissionDialog(BuildContext context) async {
    bool result = false;
    await showDialog(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Notifications").tr(),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                const Text("Notifications will inform you about schedule changes and other selected news.").tr(),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: Text("Disable").tr(),
              onPressed: () {
                result = false;
                Navigator.of(context).pop();
              },
            ),
            ElevatedButton(
              child: Text("Enable").tr(),
              onPressed: () async {
                result = true;
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
    return result;
  }

  static Future<void> showProgressDialogAsync(
      BuildContext context,
      String title,
      int total,
      ValueNotifier<int> progressNotifier,
      ) async {
    await showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return ValueListenableBuilder<int>(
          valueListenable: progressNotifier,
          builder: (context, progress, _) {
            return AlertDialog(
              title: Text(title),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text("${"Progress".tr()}: $progress/$total"),
                  SizedBox(height: 20),
                  LinearProgressIndicator(value: total > 0 ? progress / total : 0),
                ],
              ),
            );
          },
        );
      },
    );
  }
}