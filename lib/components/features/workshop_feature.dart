import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:intl/intl.dart';

import 'feature.dart';
import 'feature_constants.dart';

/// Feature for a workshop registration start time.
class WorkshopsFeature extends Feature {
  static const String metaStartTime = 'start_time';
  static const String metaWorkshops = 'workshops';

  DateTime? startTime;

  WorkshopsFeature({
    super.code = metaWorkshops,
    super.isEnabled = true,
    super.title,
    super.description,
    this.startTime,
  });

  factory WorkshopsFeature.fromJson(Map<String, dynamic> json) {
    DateTime? parsed;
    if (json[metaStartTime] != null) {
      parsed = DateTime.parse(json[metaStartTime] as String).toUtcFromOccasionTime();
    }
    return WorkshopsFeature(
      code: json[FeatureConstants.metaCode] as String? ?? metaWorkshops,
      isEnabled: json[FeatureConstants.metaIsEnabled] as bool? ?? true,
      startTime: parsed,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
    if (startTime != null) {
      data[metaStartTime] = startTime!.toIso8601String();
    }
    return data;
  }

  /// Builds the form field for this feature in FeatureForm.
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(
      builder: (ctx, setLocalState) {
        // Format existing startTime for display
        final locale = context.locale.toString();
        final dateFmt = DateFormat.yMd(locale).add_jm();
        final display = startTime != null
            ? dateFmt.format(startTime!.toOccasionTime())
            : '';

        final controller = TextEditingController(text: display);

        return TextFormField(
          controller: controller,
          decoration: InputDecoration(
            labelText: 'Workshop Registration Start Time'.tr(),
            hintText: 'Select start time'.tr(),
          ),
          readOnly: true,
          onTap: () async {
            final now = DateTime.now();
            final initial = startTime?.toOccasionTime() ?? now;
            final date = await showDatePicker(
              context: context,
              initialDate: initial,
              firstDate: DateTime(2000),
              lastDate: DateTime(2100),
              locale: context.locale,
            );
            if (date == null) return;

            final time = await showTimePicker(
              context: context,
              initialTime: TimeOfDay.fromDateTime(initial),
            );
            if (time == null) return;

            final selectedLocal = DateTime(
              date.year,
              date.month,
              date.day,
              time.hour,
              time.minute,
            );
            setLocalState(() {
              startTime = selectedLocal.toUtcFromOccasionTime();
              controller.text = dateFmt.format(selectedLocal);
            });
          },
          onSaved: (val) {
            if (val != null && val.isNotEmpty) {
              final parsedLocal = dateFmt.parse(val);
              startTime = parsedLocal.toUtcFromOccasionTime();
            }
          },
        );
      },
    );
  }
}
