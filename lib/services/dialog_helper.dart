import 'dart:async' as dialog_helper;

import 'package:cross_file/cross_file.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/data_models/language_model.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/services/responsive_service.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/drop_file.dart';
import 'package:fstapp/widgets/password_field.dart';
import 'package:search_page/search_page.dart';
import 'package:select_dialog/select_dialog.dart';

class ImportDialogChoice {
  final bool fromTickets;
  final XFile? fromFile;
  ImportDialogChoice({this.fromTickets = false, this.fromFile});
}

class DialogHelper{

  static Future<ImportDialogChoice?> showImportDialog(
      BuildContext context,
      String titleMessage,
      {
        required bool showCsvImport,
        required bool showTicketImport,
        String confirmButtonMessage = "Ok",
        String cancelButtonMessage = "Storno",
      }) async {
    XFile? filePath;
    ImportDialogChoice? result;

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        // Using a stateful builder to handle button state
        return StatefulBuilder(
          builder: (context, setState) {
            final dropFileWidget = DropFile(
              onFilePathChanged: (file) {
                setState(() {
                  filePath = file;
                });
              },
            );

            return AlertDialog(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              title: Text(titleMessage),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    if (showCsvImport) dropFileWidget,
                    if (showCsvImport && showTicketImport) ...[
                      const SizedBox(height: 32),
                    ],
                    if (showTicketImport)
                      SizedBox(
                        width: double.infinity,
                        child: ElevatedButton(
                          onPressed: () {
                            result = ImportDialogChoice(fromTickets: true);
                            Navigator.pop(context);
                          },
                          child: Text(FeaturesStrings.importFromTicketsTitle),
                        ),
                      ),
                  ],
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () {
                    result = null;
                    Navigator.pop(context);
                  },
                  child: Text(cancelButtonMessage),
                ),
                if (showCsvImport)
                  ElevatedButton(
                    onPressed: filePath != null
                        ? () {
                      result = ImportDialogChoice(fromFile: filePath);
                      Navigator.pop(context);
                    }
                        : null, // Disable if no file is selected
                    child: Text(FeaturesStrings.labelImportFromCsv),
                  ),
              ],
            );
          },
        );
      },
    );
    return result;
  }

  static Future<void> chooseUser(BuildContext context, void onPressedAction(UserInfoModel), List<UserInfoModel> allUsers, String setText) async {
    showSearch(
        context: context,
        delegate: SearchPage<UserInfoModel>(
          showItemsOnEmpty: true,
          items: allUsers,
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

  static dialog_helper.Future<void> showInformationDialog(
      BuildContext context,
      String titleMessage,
      String textMessage,
      [String buttonMessage = "Ok"]) async{
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

  static dialog_helper.Future<bool> showScanTicketCode(
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
          content: Container(

          ),
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

  static dialog_helper.Future<bool> showConfirmationDialogAsync(
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

  static dialog_helper.Future<UserGroupInfoModel?> showAddToGroupDialogAsync(
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

  static dialog_helper.Future<LanguageModel?> chooseLanguage(
      BuildContext context,
      ) async {
    var locales = AppConfig.availableLanguages();
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

  static dialog_helper.Future<String?> showPasswordInputDialog(
      BuildContext context,
      String titleMessage,
      String hint, [
        String confirmButtonMessage = "Ok",
        String cancelButtonMessage = "Storno",
      ]) async {
    final TextEditingController messageController = TextEditingController();
    String? result;

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(titleMessage),
          content: SingleChildScrollView(
            child: Column(
              children: [
                PasswordField(
                  label: hint,
                  controller: messageController,
                  passwordType: AutofillHints.password,
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(cancelButtonMessage),
            ),
            ElevatedButton(
              onPressed: () {
                result = messageController.text;
                messageController.clear();
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

  static dialog_helper.Future<XFile?> dropFilesHere(
      BuildContext context,
      String titleMessage,
      String confirmButtonMessage,
      String cancelButtonMessage,
      ) async {
    XFile? filePath;
    final dropFileWidget = DropFile(
      onFilePathChanged: (file) => filePath = file,
    );

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          title: Text(
            titleMessage,
          ),
          content: SingleChildScrollView(
            child: dropFileWidget,
          ),
          actions: [
            TextButton(
              onPressed: () {
                filePath = null;
                Navigator.pop(context);
              },
              child: Text(cancelButtonMessage),
            ),
            ElevatedButton(
              onPressed: () {
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

  static dialog_helper.Future<bool> showNotificationPermissionDialog(BuildContext context) async {
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

  static dialog_helper.Future<bool> showProgressDialogAsync(
      BuildContext context,
      String title,
      int total, {
        List<dialog_helper.Future<void> Function()>? futures,
        Duration? delay,
        bool isBasic = false, // New isBasic option
      }) async {
    final completer = dialog_helper.Completer<bool>();
    final progressNotifier = ValueNotifier<int>(0);
    final isCancelled = ValueNotifier<bool>(false); // Track cancellation state
    final statusMessage = ValueNotifier<String>(""); // Track status message
    final isStornoActive = ValueNotifier<bool>(!isBasic); // Storno button state depends on isBasic
    final isOkActive = ValueNotifier<bool>(false); // Ok button state
    final hasError = ValueNotifier<bool>(false); // Track if any error occurred

    // Show the dialog
    showDialog(
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
                  SizedBox(height: 20),
                  ValueListenableBuilder<String>(
                    valueListenable: statusMessage,
                    builder: (context, message, _) {
                      return Text(
                        message,
                        style: TextStyle(
                          color: hasError.value
                              ? ThemeConfig.redColor(context)
                              : ThemeConfig.blackColor(context),
                        ),
                        textAlign: TextAlign.center,
                      );
                    },
                  ),
                  ValueListenableBuilder<bool>(
                    valueListenable: hasError,
                    builder: (context, errorOccurred, _) {
                      if (!isBasic || errorOccurred) {
                        return Column(
                          children: [
                            SizedBox(height: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center, // Center the row
                              children: [
                                ValueListenableBuilder<bool>(
                                  valueListenable: isStornoActive,
                                  builder: (context, isActive, _) {
                                    return SizedBox(
                                      width: 100, // Equal width for both buttons
                                      child: ElevatedButton(
                                        onPressed: isActive
                                            ? () {
                                          isCancelled.value = true; // Mark as cancelled
                                          isStornoActive.value = false; // Disable Storno
                                          isOkActive.value = true; // Enable Ok button
                                          statusMessage.value =
                                              "The processing has been cancelled.".tr(); // Update status
                                        }
                                            : null,
                                        child: Text("Storno".tr()),
                                      ),
                                    );
                                  },
                                ),
                                SizedBox(width: 20), // Space between buttons
                                ValueListenableBuilder<bool>(
                                  valueListenable: isOkActive,
                                  builder: (context, isActive, _) {
                                    return SizedBox(
                                      width: 100, // Equal width for both buttons
                                      child: ElevatedButton(
                                        onPressed: isActive
                                            ? () {
                                          Navigator.of(context).pop();
                                          completer.complete(false); // Cancel or error result
                                        }
                                            : null,
                                        child: Text("Ok".tr()),
                                      ),
                                    );
                                  },
                                ),
                              ],
                            ),
                          ],
                        );
                      } else {
                        return SizedBox.shrink();
                      }
                    },
                  ),
                ],
              ),
            );
          },
        );
      },
    );

    // Execute futures sequentially
    if (futures != null && futures.isNotEmpty) {
      for (var future in futures) {
        if (isCancelled.value) break; // Stop execution if cancelled
        try {
          statusMessage.value = "Processing...".tr(); // Update processing message
          await future.call(); // Wait for each future to finish
          progressNotifier.value++;
          if (delay != null) {
            await dialog_helper.Future.delayed(delay);
          }
        } catch (e) {
          // On error: Stop further execution and display the error
          statusMessage.value = "$e";
          isCancelled.value = true; // Stop further processing
          isStornoActive.value = false; // Disable Storno button
          isOkActive.value = true; // Enable Ok button
          hasError.value = true; // Mark that an error occurred
          break;
        }
      }
    }

    // Mark actions as completed
    isOkActive.value = true; // Enable Ok button after actions are completed
    isStornoActive.value = false; // Disable Storno button whenever Ok is enabled
    if (hasError.value) {
      statusMessage.value = "The processing has finished with error.".tr();
    } else if (isCancelled.value) {
      statusMessage.value = "The processing has been cancelled.".tr();
    } else {
      statusMessage.value = "The processing has completed successfully.".tr();
      if (isBasic && !hasError.value) {
        Navigator.of(context).pop(); // Automatically close dialog for basic mode
        completer.complete(true); // Success result
      }
    }

    // Await the completer if not already completed
    if (!completer.isCompleted) {
      completer.complete(!hasError.value && !isCancelled.value); // Return result based on state
    }

    return completer.future;
  }

  static dialog_helper.Future<String?> showInputDialog({
    required BuildContext context,
    String? initialValue,
    required String dialogTitle,
    required String labelText,
  }) async {
    final TextEditingController controller = TextEditingController(text: initialValue);

    return await showDialog<String>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(dialogTitle),
          content: TextField(
            controller: controller,
            decoration: InputDecoration(labelText: labelText),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context), // Cancel button
              child: const Text("Storno").tr(),
            ),
            TextButton(
              onPressed: () {
                Navigator.pop(context, controller.text.trim()); // Return the input
              },
              child: const Text("Save").tr(),
            ),
          ],
        );
      },
    );
  }

  static dialog_helper.Future<T?> showCustomDialog<T>({
    required BuildContext context,
    required Widget child,
    bool barrierDismissible = true,
  }) {
    return showDialog<T>(
      context: context,
      barrierDismissible: barrierDismissible,
      builder: (context) {
        return Dialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12.0),
          ),
          insetPadding:
          const EdgeInsets.symmetric(horizontal: 16.0, vertical: 24.0),
          child: Container(
            constraints: BoxConstraints(
              maxWidth: ResponsiveService.isDesktop(context)
                  ? StylesConfig.formMaxWidth
                  : double.infinity,
            ),
            padding: const EdgeInsets.all(16.0),
            child: child,
          ),
        );
      },
    );
  }
}
