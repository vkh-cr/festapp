import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/widgets/MouseDetector.dart';

class TimeDateRangePicker extends StatelessWidget {
  final DateTime? start;
  final DateTime? end;
  final void Function(DateTime?) onStartChanged;
  final void Function(DateTime?) onEndChanged;
  final DateTime minDate;
  final DateTime maxDate;

  const TimeDateRangePicker({
    Key? key,
    required this.start,
    required this.end,
    required this.onStartChanged,
    required this.onEndChanged,
    required this.minDate,
    required this.maxDate,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isStartValid = start != null;
    final isEndValid = end != null && start != null && !end!.isBefore(start!);

    return MouseDetector(
      builder: (context, mouseIsConnected) {
        final timePickerMode = mouseIsConnected
            ? TimePickerEntryMode.input
            : TimePickerEntryMode.dial;
        final datePickerMode = DatePickerEntryMode.calendar;

        return Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: TextFormField(
                    readOnly: true,
                    decoration: InputDecoration(
                      labelText: "Start".tr(),
                      labelStyle: TextStyle(
                        color: isStartValid ? null : ThemeConfig.redColor(context),
                      ),
                    ),
                    controller: TextEditingController(
                      text: start != null ? TimeOfDay.fromDateTime(start!).format(context) : "",
                    ),
                    onTap: () async {
                      final pickedTime = await TimeHelper.showUniversalTimePicker(
                        context: context,
                        initialTime: start != null
                            ? TimeOfDay.fromDateTime(start!)
                            : TimeOfDay.now(),
                        initialEntryMode: timePickerMode,
                      );
                      if (pickedTime != null) {
                        final pickedDateTime = DateTime(
                          start?.year ?? DateTime.now().year,
                          start?.month ?? DateTime.now().month,
                          start?.day ?? DateTime.now().day,
                          pickedTime.hour,
                          pickedTime.minute,
                        );
                        onStartChanged(pickedDateTime);
                        if (end != null && pickedDateTime.isAfter(end!)) {
                          onEndChanged(DateTime(
                            pickedDateTime.year,
                            pickedDateTime.month,
                            pickedDateTime.day,
                            end!.hour,
                            end!.minute,
                          ));
                        }
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
                        color: isStartValid ? null : ThemeConfig.redColor(context),
                      ),
                    ),
                    controller: TextEditingController(
                      text: start != null ? DateFormat.yMd().format(start!) : "",
                    ),
                    onTap: () async {
                      final pickedDate = await showDatePicker(
                        context: context,
                        initialDate: start ?? DateTime.now(),
                        firstDate: minDate,
                        lastDate: maxDate,
                        initialEntryMode: datePickerMode,
                      );
                      if (pickedDate != null) {
                        final pickedDateTime = DateTime(
                          pickedDate.year,
                          pickedDate.month,
                          pickedDate.day,
                          start?.hour ?? 0,
                          start?.minute ?? 0,
                        );
                        onStartChanged(pickedDateTime);
                        if (end != null && pickedDateTime.isAfter(end!)) {
                          onEndChanged(DateTime(
                            pickedDate.year,
                            pickedDate.month,
                            pickedDate.day,
                            end!.hour,
                            end!.minute,
                          ));
                        }
                      }
                    },
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: TextFormField(
                    readOnly: true,
                    decoration: InputDecoration(
                      labelText: "End".tr(),
                      labelStyle: TextStyle(
                        color: isEndValid ? null : ThemeConfig.redColor(context),
                      ),
                    ),
                    controller: TextEditingController(
                      text: end != null ? TimeOfDay.fromDateTime(end!).format(context) : "",
                    ),
                    onTap: () async {
                      final pickedTime = await TimeHelper.showUniversalTimePicker(
                        context: context,
                        initialTime: end != null
                            ? TimeOfDay.fromDateTime(end!)
                            : TimeOfDay.now(),
                        initialEntryMode: timePickerMode,
                      );
                      if (pickedTime != null) {
                        final pickedDateTime = DateTime(
                          end?.year ?? DateTime.now().year,
                          end?.month ?? DateTime.now().month,
                          end?.day ?? DateTime.now().day,
                          pickedTime.hour,
                          pickedTime.minute,
                        );
                        onEndChanged(pickedDateTime);
                        if (start != null && pickedDateTime.isBefore(start!)) {
                          onStartChanged(DateTime(
                            pickedDateTime.year,
                            pickedDateTime.month,
                            pickedDateTime.day,
                            start!.hour,
                            start!.minute,
                          ));
                        }
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
                        color: isEndValid ? null : ThemeConfig.redColor(context),
                      ),
                    ),
                    controller: TextEditingController(
                      text: end != null ? DateFormat.yMd().format(end!) : "",
                    ),
                    onTap: () async {
                      final pickedDate = await showDatePicker(
                        context: context,
                        initialDate: end ?? DateTime.now(),
                        firstDate: minDate,
                        lastDate: maxDate,
                        initialEntryMode: datePickerMode,
                      );
                      if (pickedDate != null) {
                        final pickedDateTime = DateTime(
                          pickedDate.year,
                          pickedDate.month,
                          pickedDate.day,
                          end?.hour ?? 0,
                          end?.minute ?? 0,
                        );
                        onEndChanged(pickedDateTime);
                        if (start != null && pickedDateTime.isBefore(start!)) {
                          onStartChanged(DateTime(
                            pickedDate.year,
                            pickedDate.month,
                            pickedDate.day,
                            start!.hour,
                            start!.minute,
                          ));
                        }
                      }
                    },
                  ),
                ),
              ],
            ),
          ],
        );
      },
    );
  }
}
