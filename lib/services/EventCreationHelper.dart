import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/widgets/HtmlView.dart';

class EventCreationHelper {
  static Future<void> createNewEvent(
      BuildContext context, int organizationId, List<OccasionModel> existingOccasions, Function onEventCreated) async {
    String? title = "myfestival".tr();
    String? link = "myfestival${DateTime.now().add(Duration(days: 33)).year}";
    DateTime startDate = DateTime.now().add(Duration(days: 30));
    DateTime endDate = startDate.add(Duration(days: 3));
    bool isLinkManuallyChanged = false;
    String? linkError;

    final TextEditingController titleController = TextEditingController(text: title);
    final TextEditingController linkController = TextEditingController(text: link);
    final TextEditingController startDateController = TextEditingController(text: DateFormat.yMMMd().format(startDate));
    final TextEditingController endDateController = TextEditingController(text: DateFormat.yMMMd().format(endDate));

    ValueNotifier<String> htmlNotifier = ValueNotifier<String>(_generateHtml(link));

    void validateLink() {
      linkError = _validateLink(linkController.text, existingOccasions);
    }

    titleController.addListener(() {
      if (!isLinkManuallyChanged && titleController.text.isNotEmpty) {
        link = "${titleController.text.split(' ').first.toLowerCase()}${endDate.year}";
        linkController.text = link!;
        htmlNotifier.value = _generateHtml(link); // Update HTML with new link
        validateLink();
      }
    });

    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Add New Event').tr(),
          content: StatefulBuilder(
            builder: (BuildContext context, StateSetter setState) {
              return Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    controller: titleController,
                    decoration: InputDecoration(labelText: 'Title'.tr()),
                    onChanged: (value) {
                      setState(() {});
                    },
                  ),
                  TextField(
                    controller: linkController,
                    decoration: InputDecoration(
                      labelText: 'Link'.tr(),
                      errorText: linkError,
                    ),
                    onChanged: (value) {
                      link = value;
                      isLinkManuallyChanged = true;
                      validateLink();
                      htmlNotifier.value = _generateHtml(link);
                      setState(() {});
                    },
                  ),
                  TextField(
                    decoration: InputDecoration(labelText: 'Start Date'.tr()),
                    readOnly: true,
                    onTap: () async {
                      DateTime? selectedDate = await showDatePicker(
                        context: context,
                        initialDate: startDate,
                        firstDate: DateTime(2000),
                        lastDate: DateTime(2101),
                      );
                      if (selectedDate != null) {
                        setState(() {
                          startDate = selectedDate;
                          startDateController.text = DateFormat.yMMMd().format(startDate);
                          if (endDate.isBefore(startDate)) {
                            endDate = startDate.add(Duration(days: 3));
                            endDateController.text = DateFormat.yMMMd().format(endDate);
                          }
                          if (!isLinkManuallyChanged && titleController.text.isNotEmpty) {
                            link = "${titleController.text.split(' ').first.toLowerCase()}${endDate.year}";
                            linkController.text = link!;
                            htmlNotifier.value = _generateHtml(link); // Update HTML with new link
                            validateLink();
                            setState(() {}); // Trigger UI update
                          }
                        });
                      }
                    },
                    controller: startDateController,
                  ),
                  TextField(
                    decoration: InputDecoration(labelText: 'End Date'.tr()),
                    readOnly: true,
                    onTap: () async {
                      DateTime? selectedDate = await showDatePicker(
                        context: context,
                        initialDate: endDate,
                        firstDate: startDate,
                        lastDate: DateTime(2101),
                      );
                      if (selectedDate != null && selectedDate.isAfter(startDate)) {
                        setState(() {
                          endDate = selectedDate;
                          endDateController.text = DateFormat.yMMMd().format(endDate);
                          if (!isLinkManuallyChanged && titleController.text.isNotEmpty) {
                            link = "${titleController.text.split(' ').first.toLowerCase()}${endDate.year}";
                            linkController.text = link!;
                            htmlNotifier.value = _generateHtml(link); // Update HTML with new link
                            validateLink();
                            setState(() {}); // Trigger UI update
                          }
                        });
                      }
                    },
                    controller: endDateController,
                  ),
                  SizedBox(height: 16),
                  ValueListenableBuilder<String>(
                    valueListenable: htmlNotifier,
                    builder: (context, htmlContent, child) {
                      return HtmlView(
                        isSelectable: true,
                        fontSize: 12, // Smaller font size
                        html: htmlContent,
                      );
                    },
                  ),
                ],
              );
            },
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
              onPressed: () async {
                if (title!.isNotEmpty && startDate.isBefore(endDate) && linkError == null) {
                  OccasionModel newOccasion = OccasionModel(
                    title: title,
                    startTime: startDate,
                    endTime: endDate,
                    link: link,
                    isOpen: true,
                    isHidden: false,
                    organization: organizationId, // Add organization ID
                  );

                  await DbUsers.updateOccasion(newOccasion);
                  onEventCreated(); // Callback to refresh or reload the events
                  Navigator.of(context).pop();
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(content: Text('Please fix the errors before proceeding.').tr()),
                  );
                }
              },
            ),
          ],
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
    // Ensure link is web URL compatible and unique
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
