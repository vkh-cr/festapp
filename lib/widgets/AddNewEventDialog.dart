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
import 'package:fstapp/widgets/MouseDetector.dart';
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
    TimeOfDay? startTime;
    TimeOfDay? endTime;
    int? placeId;
    List<PlaceModel>? places;
    final eventDayRangeTolerance = 7;
    DateTime? minDate;
    DateTime? maxDate;
    bool isFormValid = true;
    bool isEndTimeInvalid = false; // Tracks if the end time is invalid compared to the start time

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
    startTime = TimeOfDay.fromDateTime(defaultStartTime);
    endTime = TimeOfDay.fromDateTime(defaultEndTime);
    placeId = defaultPlaceId;

    // Load places
    places = await DbPlaces.getAllPlaces();

    await showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return MouseDetector(
          builder: (context, mouseIsConnected) {
            final timePickerMode = mouseIsConnected
                ? TimePickerEntryMode.input
                : TimePickerEntryMode.dial;
            final datePickerMode = DatePickerEntryMode.calendar;

            return StatefulBuilder(
              builder: (context, setState) {
                void validateForm() {
                  final startDateTime = DateTime(
                    startDate?.year ?? 0,
                    startDate?.month ?? 0,
                    startDate?.day ?? 0,
                    startTime?.hour ?? 0,
                    startTime?.minute ?? 0,
                  );
                  final endDateTime = DateTime(
                    endDate?.year ?? 0,
                    endDate?.month ?? 0,
                    endDate?.day ?? 0,
                    endTime?.hour ?? 0,
                    endTime?.minute ?? 0,
                  );

                  setState(() {
                    isEndTimeInvalid = endDateTime.isBefore(startDateTime);
                    isFormValid = title != null &&
                        title!.trim().isNotEmpty &&
                        startDate != null &&
                        endDate != null &&
                        startTime != null &&
                        endTime != null &&
                        !isEndTimeInvalid;
                  });
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
                              color: (title == null || title!.trim().isEmpty)
                                  ? Colors.red
                                  : null,
                            ),
                          ),
                          onChanged: (value) {
                            setState(() {
                              title = value;
                              validateForm();
                            });
                          },
                        ),
                        const SizedBox(height: 16),
                        // Start Time and Date
                        Row(
                          children: [
                            Expanded(
                              child: TextFormField(
                                readOnly: true,
                                decoration: InputDecoration(
                                  labelText: "Start".tr(),
                                  labelStyle: TextStyle(
                                    color: (startTime == null) ? Colors.red : null,
                                  ),
                                ),
                                controller: TextEditingController(
                                  text: startTime?.format(context),
                                ),
                                onTap: () async {
                                  final pickedTime = await TimeHelper.showUniversalTimePicker(
                                    context: context,
                                    initialTime: startTime ?? TimeOfDay.now(),
                                    initialEntryMode: timePickerMode,
                                  );
                                  if (pickedTime != null) {
                                    setState(() {
                                      startTime = pickedTime;
                                      validateForm();
                                    });
                                  }
                                },
                              ),
                            ),
                            const SizedBox(width: 16),
                            Expanded(
                              child: TextFormField(
                                readOnly: true,
                                decoration: InputDecoration(
                                  labelText: "Start date".tr(),
                                  labelStyle: TextStyle(
                                    color: (startDate == null) ? Colors.red : null,
                                  ),
                                ),
                                controller: TextEditingController(
                                  text: startDate != null ? DateFormat.yMd().format(startDate!) : "",
                                ),
                                onTap: () async {
                                  final pickedDate = await showDatePicker(
                                    context: context,
                                    initialDate: startDate ?? DateTime.now(),
                                    firstDate: minDate!,
                                    lastDate: maxDate!,
                                    initialEntryMode: datePickerMode,
                                  );
                                  if (pickedDate != null) {
                                    setState(() {
                                      startDate = pickedDate;
                                      validateForm();
                                    });
                                  }
                                },
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),
                        // End Time and Date
                        Row(
                          children: [
                            Expanded(
                              child: TextFormField(
                                readOnly: true,
                                decoration: InputDecoration(
                                  labelText: "End".tr(),
                                  labelStyle: TextStyle(
                                    color: (endTime == null || isEndTimeInvalid) ? Colors.red : null,
                                  ),
                                ),
                                controller: TextEditingController(
                                  text: endTime?.format(context),
                                ),
                                onTap: () async {
                                  final pickedTime = await TimeHelper.showUniversalTimePicker(
                                    context: context,
                                    initialTime: endTime ?? TimeOfDay.now(),
                                    initialEntryMode: timePickerMode,
                                  );
                                  if (pickedTime != null) {
                                    setState(() {
                                      endTime = pickedTime;
                                      validateForm();
                                    });
                                  }
                                },
                              ),
                            ),
                            const SizedBox(width: 16),
                            Expanded(
                              child: TextFormField(
                                readOnly: true,
                                decoration: InputDecoration(
                                  labelText: "End date".tr(),
                                  labelStyle: TextStyle(
                                    color: (endDate == null || isEndTimeInvalid) ? Colors.red : null,
                                  ),
                                ),
                                controller: TextEditingController(
                                  text: endDate != null ? DateFormat.yMd().format(endDate!) : "",
                                ),
                                onTap: () async {
                                  final pickedDate = await showDatePicker(
                                    context: context,
                                    initialDate: endDate ?? DateTime.now(),
                                    firstDate: minDate!,
                                    lastDate: maxDate!,
                                    initialEntryMode: datePickerMode,
                                  );
                                  if (pickedDate != null) {
                                    setState(() {
                                      endDate = pickedDate;
                                      validateForm();
                                    });
                                  }
                                },
                              ),
                            ),
                          ],
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
                            startTime: DateTime(
                              startDate!.year,
                              startDate!.month,
                              startDate!.day,
                              startTime!.hour,
                              startTime!.minute,
                            ),
                            endTime: DateTime(
                              endDate!.year,
                              endDate!.month,
                              endDate!.day,
                              endTime!.hour,
                              endTime!.minute,
                            ),
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
