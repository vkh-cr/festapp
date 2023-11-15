import 'package:flutter/material.dart';
import 'package:cross_file/cross_file.dart';
import 'package:search_page/search_page.dart';

import '../models/UserInfoModel.dart';
import '../widgets/DropFile.dart';

class DialogHelper{

  static void chooseUser(BuildContext context, void onPressedAction(UserInfoModel), List<UserInfoModel> _allUsers, String setText) {
    showSearch(
        context: context,
        delegate: SearchPage<UserInfoModel>(
          showItemsOnEmpty: true,
          items: _allUsers,
          searchLabel: 'Hledat účastníky',
          suggestion: const Center(
            child: Text(
                "Najdi účastníka podle jména, příjmení nebo e-mailu."),
          ),
          failure: const Center(
            child: Text("Nikdo nebyl nalezen."),
          ),
          filter: (person) => [
            person.name,
            person.surname,
            person.email,
          ],
          builder: (person) => ListTile(
            title: Text(person.name!),
            subtitle: Text(person.surname!),
            trailing: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                ElevatedButton(
                    onPressed: () {
                      onPressedAction(person);
                    },
                    child: Text(setText)),
                Text(person.email!),
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
      String textMessage,
  {
    String confirmButtonMessage = "Ok",
    String cancelButtonMessage = "Storno"
}
      ) async {
    bool result = false;
    await showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(titleMessage),
            content: SingleChildScrollView(child: Text(textMessage)),
            actions: [
              ElevatedButton(
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
        });
    return result;
  }

  static Future<String?> showPasswordInputDialog(
      BuildContext context,
      String titleMessage,
      String hint,
      String confirmButtonMessage,
      String cancelButtonMessage,
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
}