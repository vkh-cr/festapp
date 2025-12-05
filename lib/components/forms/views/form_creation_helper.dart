import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/widgets/html_view.dart';
import '../form_strings.dart';

class FormCreationHelper {
  static String _generateFormHtml(String? link) {
    if (link == null || link.isEmpty) return "";
    final fullUrl = "${AppConfig.webLink}/form/$link";
    return '''
       <p>${FormStrings.formAvailableAt}:<br>
       <a href="$fullUrl">$fullUrl</a></p>
     ''';
  }

  static Future<void> showCreateFormDialog(
      BuildContext context, {
        required String occasionLink,
        required Function onFormCreated,
      }) async {
    final formKey = GlobalKey<FormState>();

    String title = FormStrings.defaultFormTitle;
    String link = "${FormStrings.defaultFormTitle}${DateTime.now().year}";

    final titleController = TextEditingController(text: title);
    final linkController = TextEditingController(text: link);
    final htmlNotifier = ValueNotifier<String>(_generateFormHtml(link));

    bool isLinkManuallyChanged = false;
    String? linkError;
    bool isCreating = false;

    void validateLink(String? value) {
      if (value == null || value.isEmpty) {
        linkError = FormStrings.validationLinkRequired;
      } else if (!Utilities.isValidUrl(value)) {
        linkError = FormStrings.validationLinkInvalidChars;
      } else {
        linkError = null;
      }
    }

    void updateLink() {
      var processedTitle = Utilities.removeDiacritics(titleController.text);
      if(processedTitle.isEmpty) return;

      var firstWord = processedTitle.split(' ').first.toLowerCase();
      var currentYear = DateTime.now().year;

      link = "$firstWord$currentYear";
      linkController.text = link;
      htmlNotifier.value = _generateFormHtml(link);
    }

    titleController.addListener(() {
      if (!isLinkManuallyChanged) {
        updateLink();
      }
    });

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return StatefulBuilder(
          builder: (context, setState) {
            bool isFormValid() {
              validateLink(linkController.text);
              return titleController.text.trim().isNotEmpty && linkError == null;
            }

            return AlertDialog(
              title: Text(FormStrings.createNewForm),
              content: Form(
                key: formKey,
                child: SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                      TextFormField(
                        controller: titleController,
                        decoration: InputDecoration(
                          labelText: FormStrings.labelFormTitle,
                          border: const OutlineInputBorder(),
                        ),
                        onChanged: (value) {
                          setState(() { title = value; });
                        },
                        autofocus: true,
                      ),
                      const SizedBox(height: 16),
                      TextFormField(
                        controller: linkController,
                        decoration: InputDecoration(
                          labelText: FormStrings.labelFormLink,
                          border: const OutlineInputBorder(),
                          errorText: linkError,
                        ),
                        onChanged: (value) {
                          setState(() {
                            isLinkManuallyChanged = true;
                            link = value;
                            htmlNotifier.value = _generateFormHtml(value);
                            validateLink(value);
                          });
                        },
                      ),
                      const SizedBox(height: 16),
                      ValueListenableBuilder<String>(
                        valueListenable: htmlNotifier,
                        builder: (context, htmlContent, child) {
                          if (htmlContent.isEmpty) return const SizedBox.shrink();
                          return Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: HtmlView(
                              isSelectable: true,
                              fontSize: 12,
                              html: htmlContent,
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ),
              actions: <Widget>[
                TextButton(
                  onPressed: () => Navigator.of(context).pop(),
                  child: Text("Storno".tr()),
                ),
                ElevatedButton(
                  onPressed: isFormValid() && !isCreating
                      ? () async {
                    setState(() {
                      isCreating = true;
                      linkError = null;
                    });

                    title = titleController.text.trim();
                    link = linkController.text.trim();

                    try {
                      await DbForms.createNewForm(
                        title: title,
                        link: link,
                        occasionLink: occasionLink,
                      );

                      if (!context.mounted) return;
                      ToastHelper.Show(context, FormStrings.formCreatedSuccess, severity: ToastSeverity.Ok);
                      onFormCreated();
                      Navigator.of(context).pop();

                    } catch (e) {
                      if (!context.mounted) return;
                      setState(() {
                        linkError = e.toString().replaceFirst("Exception: ", "");
                      });
                    } finally {
                      if(context.mounted) {
                        setState(() {
                          isCreating = false;
                        });
                      }
                    }
                  }
                      : null,
                  child: isCreating
                      ? const SizedBox(
                    height: 20,
                    width: 20,
                    child: CircularProgressIndicator(strokeWidth: 2),
                  )
                      : Text("Create".tr()),
                ),
              ],
            );
          },
        );
      },
    );
  }
}