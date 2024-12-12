import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/MouseDetector.dart';
import 'package:fstapp/widgets/TimeDataRangePicker.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';

class AddNewEventDialog {
  static Future<void> showAddEventDialog(
      BuildContext context,
      List<TimeBlockGroup> timelineItems,
      [TimeBlockItem? parentEvent]
      ) async {
    final _formKey = GlobalKey<FormState>();
    String? title;
    DateTime? startDate;
    DateTime? endDate;
    int? placeId;
    List<PlaceModel>? places;
    final eventDayRangeTolerance = 7;
    DateTime? minDate;
    DateTime? maxDate;
    bool isFormValid = false;
    bool hasTitleBeenEdited = false;

    minDate = SynchroService.globalSettingsModel!.eventStartTime!.add(Duration(days: -eventDayRangeTolerance));
    maxDate = SynchroService.globalSettingsModel!.eventEndTime!.add(Duration(days: eventDayRangeTolerance));

    // Determine default values
    final lastEventGroup = timelineItems.isNotEmpty ? timelineItems.last : null;
    final lastEvent = lastEventGroup?.events
        .sorted((a, b) => a.startTime.compareTo(b.startTime))
        .lastOrNull;

    final defaultStartTime = parentEvent?.startTime ?? lastEvent?.endTime ?? SynchroService.globalSettingsModel!.eventStartTime!;
    final defaultEndTime = parentEvent?.endTime ?? defaultStartTime.add(Duration(hours: 1));
    final defaultPlaceId = lastEvent?.timeBlockPlace?.id;

    // Initialize defaults
    startDate = defaultStartTime;
    endDate = defaultEndTime;
    placeId = defaultPlaceId;

    // Load places
    places = await DbPlaces.getAllPlaces();

    await showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return MouseDetector(
          builder: (context, mouseIsConnected) {
            return StatefulBuilder(
              builder: (context, setState) {
                void validateForm() {
                  isFormValid = title != null &&
                      title!.trim().isNotEmpty &&
                      startDate != null &&
                      endDate != null &&
                      !endDate!.isBefore(startDate!);
                }

                return AlertDialog(
                  title: Text("Add To Schedule").tr(),
                  content: Form(
                    key: _formKey,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        // Title field with validation
                        TextFormField(
                          initialValue: title,
                          decoration: InputDecoration(
                            labelText: "Title".tr(),
                            labelStyle: TextStyle(
                              color: (hasTitleBeenEdited && (title == null || title!.trim().isEmpty))
                                  ? ThemeConfig.redColor(context)
                                  : null,
                            ),
                          ),
                          onChanged: (value) {
                            setState(() {
                              title = value;
                              if (!hasTitleBeenEdited) {
                                hasTitleBeenEdited = true;
                              }
                              validateForm();
                            });
                          },
                        ),
                        const SizedBox(height: 16),
                        TimeDateRangePicker(
                          start: startDate,
                          end: endDate,
                          onStartChanged: (dateTime) {
                            setState(() {
                              startDate = dateTime;
                              validateForm();
                            });
                          },
                          onEndChanged: (dateTime) {
                            setState(() {
                              endDate = dateTime;
                              validateForm();
                            });
                          },
                          minDate: minDate!,
                          maxDate: maxDate!,
                        ),
                        const SizedBox(height: 16),
                        // Place selection
                        DropdownButtonFormField<PlaceModel?>(
                          value: places?.firstWhereOrNull((p) => p.id == placeId),
                          items: [
                            DropdownMenuItem<PlaceModel?>(
                              value: null,
                              child: Text("---"),
                            ),
                            if (places != null)
                              ...places.map((place) {
                                return DropdownMenuItem<PlaceModel?>(
                                  value: place,
                                  child: Text(place.title ?? "???"),
                                );
                              }),
                          ],
                          onChanged: (selectedPlace) {
                            setState(() {
                              placeId = selectedPlace?.id;
                            });
                          },
                          decoration: InputDecoration(
                            labelText: "Place".tr(),
                          ),
                        ),
                      ],
                    ),
                  ),
                  actions: [
                    TextButton(
                      onPressed: () => Navigator.of(context).pop(),
                      child: Text("Storno").tr(),
                    ),
                    ElevatedButton(
                      onPressed: isFormValid
                          ? () async {
                        if (_formKey.currentState!.validate()) {
                          _formKey.currentState!.save();
                          final newEvent = EventModel(
                            title: title,
                            place: places?.firstWhereOrNull(
                                    (place) => place.id == placeId),
                            startTime: startDate!,
                            endTime: endDate!,
                            isHidden: false,
                            splitForMenWomen: false,
                            isSignedIn: false,
                            isGroupEvent: false,
                            parentEventIds:
                            parentEvent != null ? [parentEvent.id] : null,
                          );
                          await DbEvents.updateEvent(newEvent);
                          Navigator.of(context).pop();
                        }
                      }
                          : null,
                      child: Text("Add").tr(),
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
}
