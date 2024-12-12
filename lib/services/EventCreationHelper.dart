import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/widgets/MouseDetector.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/widgets/TimeDataRangePicker.dart';

class EventCreationHelper {
  static Future<void> createNewOccasion(
      BuildContext context, int organizationId, List<OccasionModel> existingOccasions, Function onEventCreated) async {
    final _formKey = GlobalKey<FormState>();
    String? title = "myfestival".tr();
    String? link = "myfestival${DateTime.now().add(Duration(days: 33)).year}";
    DateTime? startDate = DateTime.now().add(Duration(days: 30));
    DateTime? endDate = startDate.add(Duration(days: 3));
    bool isLinkManuallyChanged = false;
    String? linkError;
    bool isFormValid = true;

    final TextEditingController titleController = TextEditingController(text: title);
    final TextEditingController linkController = TextEditingController(text: link);

    ValueNotifier<String> htmlNotifier = ValueNotifier<String>(_generateHtml(link));

    void validateForm() {
      linkError = _validateLink(link ?? "", existingOccasions);
      isFormValid = title != null &&
          title!.trim().isNotEmpty &&
          linkError == null &&
          startDate != null &&
          endDate != null &&
          !endDate!.isBefore(startDate!);
    }

    void updateLinkAndHtml() {
      var processedTitle = Utilities.removeDiacritics(titleController.text);
      link = "${processedTitle.split(' ').first.toLowerCase()}${endDate!.year}";
      linkController.text = link!;
      htmlNotifier.value = _generateHtml(link);
      validateForm();
    }

    titleController.addListener(() {
      if (!isLinkManuallyChanged && titleController.text.isNotEmpty) {
        title = titleController.text;
        updateLinkAndHtml();
      }
    });

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return MouseDetector(
          builder: (context, mouseIsConnected) {
            return StatefulBuilder(
              builder: (BuildContext context, StateSetter setState) {
                void handleTitleChange(String value) {
                  setState(() {
                    title = value;
                    validateForm();
                  });
                }

                void handleLinkChange(String value) {
                  setState(() {
                    link = value;
                    isLinkManuallyChanged = true;
                    validateForm();
                    htmlNotifier.value = _generateHtml(link);
                  });
                }

                return AlertDialog(
                  title: Text('Add New Event').tr(),
                  content: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        // Title field with validation
                        TextFormField(
                          controller: titleController,
                          decoration: InputDecoration(
                            labelText: 'Title'.tr(),
                            labelStyle: TextStyle(
                              color: (title == null || title!.trim().isEmpty)
                                  ? ThemeConfig.redColor(context)
                                  : null,
                            ),
                          ),
                          onChanged: handleTitleChange,
                        ),
                        // Link field with validation
                        TextFormField(
                          controller: linkController,
                          decoration: InputDecoration(
                            labelText: 'Link'.tr(),
                            labelStyle: TextStyle(
                              color: linkError != null ? ThemeConfig.redColor(context) : null,
                            ),
                            errorText: linkError,
                          ),
                          onChanged: handleLinkChange,
                        ),
                        const SizedBox(height: 16),
                        TimeDateRangePicker(
                          start: startDate,
                          end: endDate,
                          onStartChanged: (pickedStart) {
                            setState(() {
                              startDate = pickedStart;
                              if (pickedStart != null && endDate != null && pickedStart.isAfter(endDate!)) {
                                endDate = DateTime(
                                  pickedStart.year,
                                  pickedStart.month,
                                  pickedStart.day,
                                  endDate!.hour,
                                  endDate!.minute,
                                );
                              }
                              validateForm();
                            });
                          },
                          onEndChanged: (pickedEnd) {
                            setState(() {
                              endDate = pickedEnd;
                              if (pickedEnd != null && startDate != null && pickedEnd.isBefore(startDate!)) {
                                startDate = DateTime(
                                  pickedEnd.year,
                                  pickedEnd.month,
                                  pickedEnd.day,
                                  startDate!.hour,
                                  startDate!.minute,
                                );
                              }
                              validateForm();
                            });
                          },
                          minDate: DateTime(2000),
                          maxDate: DateTime(2101),
                        ),
                        const SizedBox(height: 16),
                        ValueListenableBuilder<String>(
                          valueListenable: htmlNotifier,
                          builder: (context, htmlContent, child) {
                            return HtmlView(
                              isSelectable: true,
                              fontSize: 12,
                              html: htmlContent,
                            );
                          },
                        ),
                      ],
                    ),
                  ),
                  actions: [
                    TextButton(
                      child: Text('Cancel').tr(),
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                    ),
                    ElevatedButton(
                      child: Text('Create').tr(),
                      onPressed: isFormValid
                          ? () async {
                        if (_formKey.currentState!.validate()) {
                          final startDateTime = startDate!;
                          final endDateTime = endDate!;

                          OccasionModel newOccasion = OccasionModel(
                            title: title,
                            startTime: startDateTime,
                            endTime: endDateTime,
                            link: link,
                            isOpen: true,
                            isHidden: false,
                            organization: organizationId,
                          );

                          await DbUsers.updateOccasion(newOccasion);
                          onEventCreated();
                          Navigator.of(context).pop();
                        }
                      }
                          : null,
                    ),
                  ],
                );
              },
            );
          },
        );
      },
    );
  }

  static String _generateHtml(String? link) {
    return '''
      <p>${'This event will be available at'.tr()}:<br>
      <a href="${AppConfig.webLink}/#/$link">${AppConfig.webLink}/#/$link</a></p>
    ''';
  }

  static String? _validateLink(String link, List<OccasionModel> existingOccasions) {
    if (link.isEmpty) {
      return 'Link is required'.tr();
    }
    final urlPattern = r'^[a-zA-Z0-9-_]+$';
    final isValidFormat = RegExp(urlPattern).hasMatch(link);
    if (!isValidFormat) {
      return 'Invalid characters'.tr();
    }
    final isUnique = !existingOccasions.any((occasion) => occasion.link == link);
    if (!isUnique) {
      return 'Link already in use'.tr();
    }
    return null;
  }
}