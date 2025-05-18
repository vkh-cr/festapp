import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

import 'feature.dart';
import 'feature_constants.dart';

/// Feature for schedule with a type of "basic" or "advanced".
class ScheduleFeature extends Feature {
  static const String metaScheduleType = "schedule_type";
  static const String metaSchedule = "schedule";
  static const String scheduleTypeBasic = "basic";
  static const String scheduleTypeAdvanced = "advanced";

  String? scheduleType;

  ScheduleFeature({
    super.code = metaSchedule,
    super.isEnabled = true,
    super.title,
    super.description,
    this.scheduleType,
  });

  factory ScheduleFeature.fromJson(Map<String, dynamic> json) {
    return ScheduleFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? true,
      scheduleType: json[metaScheduleType] ?? scheduleTypeAdvanced,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
    if (scheduleType != null) {
      data[metaScheduleType] = scheduleType!;
    }
    return data;
  }

  /// Builds the form field for this feature in FeatureForm.
  Widget buildFormField(BuildContext context) {
    return DropdownButtonFormField<String>(
      value: scheduleType ?? scheduleTypeBasic,
      decoration: InputDecoration(labelText: 'Schedule Type'.tr()),
      items: <String>[scheduleTypeBasic, scheduleTypeAdvanced]
          .map((value) => DropdownMenuItem(
        value: value,
        child: Text(value),
      ))
          .toList(),
      onChanged: (val) => scheduleType = val,
      onSaved: (val) => scheduleType = val,
    );
  }
}