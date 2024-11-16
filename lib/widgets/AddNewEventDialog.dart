import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/widgets/MouseDetector.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';

class AddNewEventDialog {
  static Future<void> showAddEventDialog(
      BuildContext context,
      List<TimeBlockGroup> timelineItems,
      ) async {
    final _formKey = GlobalKey<FormState>();
    String? eventTitle;
    DateTime? startDate;
    DateTime? endDate;
    TimeOfDay? startTime;
    TimeOfDay? endTime;
    int? placeId;
    List<PlaceModel>? places;

    // Determine default values
    final lastEventGroup = timelineItems.isNotEmpty ? timelineItems.last : null;
    final lastEvent = lastEventGroup?.events
        .sorted((a, b) => a.startTime.compareTo(b.startTime))
        .lastOrNull;

    final defaultStartTime = lastEvent?.endTime ?? DateTime.now();
    final defaultEndTime = defaultStartTime.add(Duration(hours: 1));
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
            final datePickerMode = mouseIsConnected
                ? DatePickerEntryMode.input
                : DatePickerEntryMode.calendar;

            return AlertDialog(
              title: Text("Add New Event").tr(),
              content: Form(
                key: _formKey,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    // Title field with validation
                    TextFormField(
                      autofocus: true,
                      decoration: InputDecoration(labelText: "Title".tr()),
                      validator: FormBuilderValidators.required(),
                      onSaved: (value) => eventTitle = value,
                    ),
                    const SizedBox(height: 16),
                    // Start Time and Date
                    buildRow(
                      context: context,
                      time: startTime,
                      onTimePicked: (pickedTime) => startTime = pickedTime,
                      date: startDate,
                      onDatePicked: (pickedDate) => startDate = pickedDate,
                      timePickerMode: timePickerMode,
                      datePickerMode: datePickerMode,
                      timeLabel: "Start".tr(),
                      dateLabel: "Start date".tr(),
                    ),
                    const SizedBox(height: 16),
                    // End Time and Date
                    buildRow(
                      context: context,
                      time: endTime,
                      onTimePicked: (pickedTime) => endTime = pickedTime,
                      date: endDate,
                      onDatePicked: (pickedDate) => endDate = pickedDate,
                      timePickerMode: timePickerMode,
                      datePickerMode: datePickerMode,
                      timeLabel: "End".tr(),
                      dateLabel: "End date".tr(),
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
                        placeId = selectedPlace?.id;
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
                // TextButton(
                //   onPressed: () {
                //     // Handle "More settings" logic here
                //   },
                //   child: Text("More settings").tr(),
                // ),
                ElevatedButton(
                  onPressed: () async {
                    if (_formKey.currentState!.validate()) {
                      _formKey.currentState!.save();
                      final newEvent = EventModel(
                        title: eventTitle,
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
                      );
                      await DbEvents.updateEvent(newEvent);
                      Navigator.of(context).pop();
                    }
                  },
                  child: Text("Add").tr(),
                ),
              ],
            );
          },
        );
      },
    );
  }

  static Widget buildRow({
    required BuildContext context,
    required TimeOfDay? time,
    required void Function(TimeOfDay?) onTimePicked,
    required DateTime? date,
    required void Function(DateTime?) onDatePicked,
    required TimePickerEntryMode timePickerMode,
    required DatePickerEntryMode datePickerMode,
    required String timeLabel,
    required String dateLabel,
  }) {
    return Row(
      children: [
        Expanded(
          child: TextFormField(
            readOnly: true,
            decoration: InputDecoration(labelText: timeLabel),
            controller: TextEditingController(
              text: time != null ? time.format(context) : "",
            ),
            onTap: () async {
              final pickedTime = await showTimePicker(
                context: context,
                initialTime: time ?? TimeOfDay.now(),
                initialEntryMode: timePickerMode,
              );
              onTimePicked(pickedTime);
            },
          ),
        ),
        const SizedBox(width: 16),
        Expanded(
          child: TextFormField(
            readOnly: true,
            decoration: InputDecoration(labelText: dateLabel),
            controller: TextEditingController(
              text: date != null ? DateFormat.yMd().format(date) : "",
            ),
            onTap: () async {
              final pickedDate = await showDatePicker(
                context: context,
                initialDate: date ?? DateTime.now(),
                firstDate: DateTime(2000),
                lastDate: DateTime(2100),
                initialEntryMode: datePickerMode,
              );
              onDatePicked(pickedDate);
            },
          ),
        ),
      ],
    );
  }
}
