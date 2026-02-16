import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

class ConfirmationDialogs {
  static Future<void> showInformationDialog(
      BuildContext context, String titleMessage, String textMessage,
      [String buttonMessage = "Ok"]) async {
    await showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(titleMessage),
            content: SelectableText(textMessage),
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

  static Future<bool> showScanTicketCode(
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
          content: Container(),
          actions: [
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

  static Future<bool> showConfirmationDialog(
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

  static Future<bool> showConfirmationDialogRichText(
    BuildContext context,
    String titleMessage,
    Text textMessage, {
    String confirmButtonMessage = "Ok",
    String cancelButtonMessage = "Storno",
  }) async {
    bool result = false;
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titleMessage),
          content: SingleChildScrollView(child: textMessage),
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

  static Future<bool> showConfirmationDialogRich({
    required BuildContext context,
    required String title,
    required Widget content,
    String confirmButtonText = "Ok",
    String cancelButtonText = "Storno",
  }) async {
    final result = await showDialog<bool>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(title),
          content: content,
          actions: [
            TextButton(
              child: Text(cancelButtonText),
              onPressed: () {
                Navigator.of(context).pop(false);
              },
            ),
            ElevatedButton(
              child: Text(confirmButtonText),
              onPressed: () {
                Navigator.of(context).pop(true);
              },
            ),
          ],
        );
      },
    );

    return result ?? false;
  }

  static Future<bool> showNotificationPermissionDialog(
      BuildContext context) async {
    bool result = false;
    await showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Notifications").tr(),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                const Text(
                        "Notifications will inform you about schedule changes and other selected news.")
                    .tr(),
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
}
