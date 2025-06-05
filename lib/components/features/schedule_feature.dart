import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

import 'feature.dart';
import 'feature_constants.dart';
import 'features_strings.dart'; // Import the new strings file

/// Feature for schedule with a type of "basic" or "advanced".
class ScheduleFeature extends Feature {
  static const String metaScheduleType = "schedule_type";
  static const String metaSchedule = "schedule";
  static const String scheduleTypeBasic = "basic";
  static const String scheduleTypeAdvanced = "advanced";

  // New constants for break definitions
  static const String metaBreakDefinition = "break_definition";
  static const String metaAfternoonBreak = "afternoon_break_time";
  static const String metaEveningBreak = "evening_break_time";
  static const String breakDefinitionTime = "time";
  static const String breakDefinitionPlace = "place";

  String? scheduleType;
  String breakDefinition;
  TimeOfDay afternoonBreakTime;
  TimeOfDay eveningBreakTime;


  ScheduleFeature({
    super.code = metaSchedule,
    super.isEnabled = true,
    super.title,
    super.description,
    this.scheduleType,
    this.breakDefinition = breakDefinitionTime,
    TimeOfDay? afternoonBreakTime,
    TimeOfDay? eveningBreakTime,
  }) : afternoonBreakTime = afternoonBreakTime ?? const TimeOfDay(hour: 12, minute: 0),
        eveningBreakTime = eveningBreakTime ?? const TimeOfDay(hour: 18, minute: 0);


  factory ScheduleFeature.fromJson(Map<String, dynamic> json) {
    // Helper to parse time from "HH:mm" string
    TimeOfDay timeFromString(String? timeString, TimeOfDay defaultTime) {
      if (timeString == null) return defaultTime;
      try {
        final parts = timeString.split(':');
        return TimeOfDay(hour: int.parse(parts[0]), minute: int.parse(parts[1]));
      } catch (e) {
        return defaultTime;
      }
    }

    return ScheduleFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? true,
      scheduleType: json[metaScheduleType] ?? scheduleTypeAdvanced,
      breakDefinition: json[metaBreakDefinition] ?? breakDefinitionTime,
      afternoonBreakTime: timeFromString(json[metaAfternoonBreak], const TimeOfDay(hour: 12, minute: 0)),
      eveningBreakTime: timeFromString(json[metaEveningBreak], const TimeOfDay(hour: 18, minute: 0)),
    );
  }

  @override
  Map<String, dynamic> toJson() {
    // Helper to format TimeOfDay to "HH:mm" string
    String timeToString(TimeOfDay time) {
      final hour = time.hour.toString().padLeft(2, '0');
      final minute = time.minute.toString().padLeft(2, '0');
      return '$hour:$minute';
    }

    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      metaBreakDefinition: breakDefinition,
    };
    if (scheduleType != null) {
      data[metaScheduleType] = scheduleType!;
    }
    // Only include time values if the definition is time-based
    if (breakDefinition == breakDefinitionTime) {
      data[metaAfternoonBreak] = timeToString(afternoonBreakTime);
      data[metaEveningBreak] = timeToString(eveningBreakTime);
    }
    return data;
  }

  /// Builds the form field for this feature in FeatureForm.
  Widget buildFormField(BuildContext context) {
    return _ScheduleFeatureForm(feature: this);
  }
}

/// A stateful widget to manage the form's UI state.
class _ScheduleFeatureForm extends StatefulWidget {
  final ScheduleFeature feature;

  const _ScheduleFeatureForm({required this.feature});

  @override
  State<_ScheduleFeatureForm> createState() => _ScheduleFeatureFormState();
}

class _ScheduleFeatureFormState extends State<_ScheduleFeatureForm> {
  late String _scheduleType;
  late String _breakDefinition;
  late TimeOfDay _afternoonBreakTime;
  late TimeOfDay _eveningBreakTime;

  @override
  void initState() {
    super.initState();
    _scheduleType = widget.feature.scheduleType ?? ScheduleFeature.scheduleTypeBasic;
    _breakDefinition = widget.feature.breakDefinition;
    _afternoonBreakTime = widget.feature.afternoonBreakTime;
    _eveningBreakTime = widget.feature.eveningBreakTime;
  }

  Future<void> _selectTime(BuildContext context, TimeOfDay initialTime, ValueChanged<TimeOfDay> onTimeChanged) async {
    final TimeOfDay? picked = await showTimePicker(
      context: context,
      initialTime: initialTime,
    );
    if (picked != null && picked != initialTime) {
      setState(() {
        onTimeChanged(picked);
      });
    }
  }

  String _getTranslatedScheduleOption(String value) {
    switch (value) {
      case ScheduleFeature.scheduleTypeBasic:
        return FeaturesStrings.optionBasic;
      case ScheduleFeature.scheduleTypeAdvanced:
        return FeaturesStrings.optionAdvanced;
      default:
        return value;
    }
  }

  String _getTranslatedBreakOption(String value) {
    switch (value) {
      case ScheduleFeature.breakDefinitionTime:
        return FeaturesStrings.optionTime;
      case ScheduleFeature.breakDefinitionPlace:
        return FeaturesStrings.optionPlace;
      default:
        return value;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        DropdownButtonFormField<String>(
          value: _scheduleType,
          decoration: InputDecoration(labelText: FeaturesStrings.labelScheduleType),
          items: <String>[ScheduleFeature.scheduleTypeBasic, ScheduleFeature.scheduleTypeAdvanced]
              .map((value) => DropdownMenuItem(
            value: value,
            child: Text(_getTranslatedScheduleOption(value)),
          ))
              .toList(),
          onChanged: (val) {
            if (val != null) {
              setState(() => _scheduleType = val);
            }
          },
          onSaved: (val) => widget.feature.scheduleType = val,
        ),
        const SizedBox(height: 16),
        DropdownButtonFormField<String>(
          value: _breakDefinition,
          decoration: InputDecoration(labelText: FeaturesStrings.labelBreakDefinition),
          items: <String>[ScheduleFeature.breakDefinitionTime, ScheduleFeature.breakDefinitionPlace]
              .map((value) => DropdownMenuItem(
            value: value,
            child: Text(_getTranslatedBreakOption(value)),
          ))
              .toList(),
          onChanged: (val) {
            if (val != null) {
              setState(() => _breakDefinition = val);
            }
          },
          onSaved: (val) => widget.feature.breakDefinition = val ?? ScheduleFeature.breakDefinitionTime,
        ),

        // Conditionally display time pickers
        if (_breakDefinition == ScheduleFeature.breakDefinitionTime) ...[
          const SizedBox(height: 24),
          Text(FeaturesStrings.titleTimeBasedBreaks, style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          _buildTimePickerField(
            context: context,
            label: FeaturesStrings.labelAfternoonTime,
            time: _afternoonBreakTime,
            onTap: () => _selectTime(context, _afternoonBreakTime, (newTime) {
              _afternoonBreakTime = newTime;
              widget.feature.afternoonBreakTime = newTime;
            }),
          ),
          const SizedBox(height: 16),
          _buildTimePickerField(
            context: context,
            label: FeaturesStrings.labelEveningTime,
            time: _eveningBreakTime,
            onTap: () => _selectTime(context, _eveningBreakTime, (newTime) {
              _eveningBreakTime = newTime;
              widget.feature.eveningBreakTime = newTime;
            }),
          ),
        ]
      ],
    );
  }

  Widget _buildTimePickerField({
    required BuildContext context,
    required String label,
    required TimeOfDay time,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      child: InputDecorator(
        decoration: InputDecoration(
          labelText: label,
        ),
        child: Text(
          time.format(context),
          style: Theme.of(context).textTheme.titleMedium?.copyWith(height: 1.5),
        ),
      ),
    );
  }
}