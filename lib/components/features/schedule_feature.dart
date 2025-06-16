import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

import 'feature.dart'; // Assuming this is your base Feature class
import 'feature_constants.dart';
import 'features_strings.dart'; // Ensure this file has the new strings

class _InternalThemeConfig {
  static Color get seed1 => ThemeConfig.seed1;
  static Color get seed2 => ThemeConfig.seed2;
  static Color get seed3 => ThemeConfig.seed3;
  static Color get seed4 => ThemeConfig.seed4;

  static Color? getSeedColorByName(String seedName) {
    switch (seedName.toLowerCase()) {
      case "seed1":
        return seed1;
      case "seed2":
        return seed2;
      case "seed3":
        return seed3;
      case "seed4":
        return seed4;
      default:
        return null;
    }
  }
}

/// Represents a configurable event type.
class EventType {
  String code;
  String title;
  String colorDefinition; // Can be a seed color name (e.g., "seed1") or a hex string (e.g., "#FF0000")

  EventType({
    required this.code,
    required this.title,
    required this.colorDefinition,
  });

  factory EventType.fromJson(Map<String, dynamic> json) {
    return EventType(
      code: json['code'] as String? ?? 'default_code',
      title: json['title'] as String? ?? 'Default Title',
      colorDefinition: json['colorDefinition'] as String? ?? 'seed1',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'code': code,
      'title': title,
      'colorDefinition': colorDefinition,
    };
  }

  /// Gets the actual Color based on the colorDefinition.
  Color getColor() {
    final seedColor = _InternalThemeConfig.getSeedColorByName(colorDefinition);
    if (seedColor != null) {
      return seedColor;
    }
    try {
      String hex = colorDefinition.toUpperCase().replaceAll("#", "");
      if (hex.length == 6) {
        hex = "FF$hex"; // Add alpha if missing
      }
      if (hex.length == 8) {
        return Color(int.parse("0x$hex"));
      }
    } catch (e) {
      // Fallback for invalid hex
    }
    return Colors.transparent; // Default or error color
  }
}

/// Feature for schedule with a type of "basic" or "advanced".
class ScheduleFeature extends Feature {
  static const String metaScheduleType = "schedule_type";
  static const String metaSchedule = "schedule";
  static const String scheduleTypeBasic = "basic";
  static const String scheduleTypeAdvanced = "advanced";

  static const String metaBreakDefinition = "break_definition";
  static const String metaAfternoonBreak = "afternoon_break_time";
  static const String metaEveningBreak = "evening_break_time";
  static const String breakDefinitionTime = "time";
  static const String breakDefinitionPlace = "place";

  static const String metaEventTypes = "event_types";

  String? scheduleType;
  String breakDefinition;
  TimeOfDay afternoonBreakTime;
  TimeOfDay eveningBreakTime;
  List<EventType> eventTypes;

  ScheduleFeature({
    super.code = metaSchedule,
    super.isEnabled = true,
    super.title,
    super.description,
    this.scheduleType,
    this.breakDefinition = breakDefinitionTime,
    TimeOfDay? afternoonBreakTime,
    TimeOfDay? eveningBreakTime,
    List<EventType>? eventTypes, // Added to constructor
  })  : afternoonBreakTime = afternoonBreakTime ?? const TimeOfDay(hour: 12, minute: 0),
        eveningBreakTime = eveningBreakTime ?? const TimeOfDay(hour: 18, minute: 0),
        eventTypes = eventTypes ?? []; // Initialize if null

  factory ScheduleFeature.fromJson(Map<String, dynamic> json) {
    TimeOfDay timeFromString(String? timeString, TimeOfDay defaultTime) {
      if (timeString == null) return defaultTime;
      try {
        final parts = timeString.split(':');
        return TimeOfDay(hour: int.parse(parts[0]), minute: int.parse(parts[1]));
      } catch (e) {
        return defaultTime;
      }
    }

    var eventTypesData = json[metaEventTypes] as List<dynamic>?;
    List<EventType> parsedEventTypes = eventTypesData
        ?.map((typeJson) => EventType.fromJson(typeJson as Map<String, dynamic>))
        .toList() ??
        [];

    return ScheduleFeature(
      code: json[FeatureConstants.metaCode] ?? metaSchedule,
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? true,
      title: json[FeatureConstants.metaTitle],
      description: json[FeatureConstants.metaDescription],
      scheduleType: json[metaScheduleType] ?? scheduleTypeAdvanced,
      breakDefinition: json[metaBreakDefinition] ?? breakDefinitionTime,
      afternoonBreakTime: timeFromString(json[metaAfternoonBreak], const TimeOfDay(hour: 12, minute: 0)),
      eveningBreakTime: timeFromString(json[metaEveningBreak], const TimeOfDay(hour: 18, minute: 0)),
      eventTypes: parsedEventTypes,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    String timeToString(TimeOfDay time) {
      final hour = time.hour.toString().padLeft(2, '0');
      final minute = time.minute.toString().padLeft(2, '0');
      return '$hour:$minute';
    }

    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      metaBreakDefinition: breakDefinition,
      metaEventTypes: eventTypes.map((type) => type.toJson()).toList(),
    };

    if (scheduleType != null) {
      data[metaScheduleType] = scheduleType!;
    }
    if (breakDefinition == breakDefinitionTime) {
      data[metaAfternoonBreak] = timeToString(afternoonBreakTime);
      data[metaEveningBreak] = timeToString(eveningBreakTime);
    }
    return data;
  }

  @override
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
  late List<EventType> _eventTypes; // State for managing event types

  // Available seed colors for dropdown
  final List<String> _seedColorOptions = ["seed1", "seed2", "seed3", "seed4", "custom"];


  @override
  void initState() {
    super.initState();
    _scheduleType = widget.feature.scheduleType ?? ScheduleFeature.scheduleTypeBasic;
    _breakDefinition = widget.feature.breakDefinition;
    _afternoonBreakTime = widget.feature.afternoonBreakTime;
    _eveningBreakTime = widget.feature.eveningBreakTime;
    // Deep copy event types for local editing
    _eventTypes = widget.feature.eventTypes.map((et) =>
        EventType(code: et.code, title: et.title, colorDefinition: et.colorDefinition)
    ).toList();
  }

  void _saveEventTypesToFeature() {
    widget.feature.eventTypes = List<EventType>.from(_eventTypes.map((et) =>
        EventType(code: et.code, title: et.title, colorDefinition: et.colorDefinition)
    ));
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
        return FeaturesStrings.optionBasic.tr();
      case ScheduleFeature.scheduleTypeAdvanced:
        return FeaturesStrings.optionAdvanced.tr();
      default:
        return value;
    }
  }

  String _getTranslatedBreakOption(String value) {
    switch (value) {
      case ScheduleFeature.breakDefinitionTime:
        return FeaturesStrings.optionTime.tr();
      case ScheduleFeature.breakDefinitionPlace:
        return FeaturesStrings.optionPlace.tr();
      default:
        return value;
    }
  }

  void _addEventType() {
    setState(() {
      _eventTypes.add(EventType(
          code: 'new_type_${_eventTypes.length + 1}',
          title: FeaturesStrings.eventTypeDefaultTitle.tr(), // Use a default translated title
          colorDefinition: 'seed1'));
    });
  }

  void _removeEventType(int index) {
    setState(() {
      _eventTypes.removeAt(index);
    });
  }

  // This method updates the specific event type in the _eventTypes list
  void _updateEventType(int index, EventType updatedType) {
    if (index >= 0 && index < _eventTypes.length) {
      setState(() {
        _eventTypes[index] = updatedType;
      });
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
            decoration: InputDecoration(labelText: FeaturesStrings.labelScheduleType.tr()),
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
            onSaved: (val) {
              widget.feature.scheduleType = val;
              _saveEventTypesToFeature(); // Save event types
            }
        ),
        const SizedBox(height: 16),
        DropdownButtonFormField<String>(
            value: _breakDefinition,
            decoration: InputDecoration(labelText: FeaturesStrings.labelBreakDefinition.tr()),
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
            onSaved: (val) {
              widget.feature.breakDefinition = val ?? ScheduleFeature.breakDefinitionTime;
              _saveEventTypesToFeature(); // Save event types
            }
        ),
        if (_breakDefinition == ScheduleFeature.breakDefinitionTime) ...[
          const SizedBox(height: 24),
          Text(FeaturesStrings.titleTimeBasedBreaks.tr(), style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          _buildTimePickerField(
            context: context,
            label: FeaturesStrings.labelAfternoonTime.tr(),
            time: _afternoonBreakTime,
            onTap: () => _selectTime(context, _afternoonBreakTime, (newTime) {
              _afternoonBreakTime = newTime;
              widget.feature.afternoonBreakTime = newTime;
            }),
          ),
          const SizedBox(height: 16),
          _buildTimePickerField(
            context: context,
            label: FeaturesStrings.labelEveningTime.tr(),
            time: _eveningBreakTime,
            onTap: () => _selectTime(context, _eveningBreakTime, (newTime) {
              _eveningBreakTime = newTime;
              widget.feature.eveningBreakTime = newTime;
            }),
          ),
        ],
        const SizedBox(height: 24),
        // Event Types Management UI - Now Collapsible
        ExpansionTile(
          title: Text(FeaturesStrings.titleEventTypes.tr(), style: Theme.of(context).textTheme.titleLarge),
          initiallyExpanded: false, // Collapsed on load
          tilePadding: const EdgeInsets.symmetric(horizontal: 0.0), // Adjust padding if needed for alignment with other fields
          childrenPadding: const EdgeInsets.only(left: 16.0, right: 16.0, bottom: 8.0), // Padding for the content inside
          children: <Widget>[
            if (_eventTypes.isEmpty)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: Text(FeaturesStrings.emptyEventTypes.tr(), style: Theme.of(context).textTheme.bodyMedium),
              ),
            ListView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: _eventTypes.length,
              itemBuilder: (context, index) {
                return _buildEventTypeFormItem(_eventTypes[index], index);
              },
            ),
            const SizedBox(height: 8), // Spacing before the button
            Align( // Align button if needed, e.g., to the right or center
              alignment: Alignment.centerLeft, // Or Alignment.center, Alignment.centerRight
              child: ElevatedButton.icon(
                icon: const Icon(Icons.add_circle_outline),
                onPressed: _addEventType,
                label: Text(FeaturesStrings.buttonAddEventType.tr()),
              ),
            ),
          ],
        ),
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
          time.format(context), // This automatically localizes time format.
          style: Theme.of(context).textTheme.titleMedium?.copyWith(height: 1.5),
        ),
      ),
    );
  }

  Widget _buildEventTypeFormItem(EventType eventType, int index) {
    // Determine if the current color definition is a custom hex or one of the seeds
    bool isCustom = !_seedColorOptions.contains(eventType.colorDefinition) || eventType.colorDefinition.toLowerCase() == "custom";
    String currentDropdownValue = isCustom ? "custom" : eventType.colorDefinition;

    // Controller for custom hex color input
    TextEditingController hexColorController = TextEditingController(
        text: isCustom && eventType.colorDefinition.toLowerCase() != "custom" ? eventType.colorDefinition : ""
    );
    // Ensure cursor is at the end for better UX
    hexColorController.selection = TextSelection.fromPosition(TextPosition(offset: hexColorController.text.length));


    return Card(
      margin: const EdgeInsets.symmetric(vertical: 6.0),
      elevation: 2.0,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            TextFormField(
              initialValue: eventType.code,
              decoration: InputDecoration(labelText: FeaturesStrings.labelEventTypeCode.tr(), filled: true),
              onChanged: (value) {
                _updateEventType(index, EventType(code: value, title: eventType.title, colorDefinition: eventType.colorDefinition));
              },
            ),
            const SizedBox(height: 10),
            TextFormField(
              initialValue: eventType.title,
              decoration: InputDecoration(labelText: FeaturesStrings.labelEventTypeTitle.tr(), filled: true),
              onChanged: (value) {
                _updateEventType(index, EventType(code: eventType.code, title: value, colorDefinition: eventType.colorDefinition));
              },
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Expanded(
                  child: DropdownButtonFormField<String>(
                    value: currentDropdownValue,
                    decoration: InputDecoration(labelText: FeaturesStrings.labelColorSource.tr(), filled: true),
                    items: _seedColorOptions.map((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value == "custom" ? FeaturesStrings.optionCustomColor.tr() : value),
                      );
                    }).toList(),
                    onChanged: (String? newValue) {
                      if (newValue != null) {
                        String newColorDef = newValue;
                        if (newValue == "custom") {
                          // If switching to custom, use current hex field value or default to a visible color
                          newColorDef = hexColorController.text.isNotEmpty && hexColorController.text.startsWith("#")
                              ? hexColorController.text
                              : "#A0A0A0"; // A default visible custom color
                          // Update controller if it was empty
                          if(hexColorController.text.isEmpty || !hexColorController.text.startsWith("#")) {
                            hexColorController.text = newColorDef;
                          }
                        }
                        _updateEventType(index, EventType(code: eventType.code, title: eventType.title, colorDefinition: newColorDef));
                      }
                    },
                  ),
                ),
                const SizedBox(width: 10),
                Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                      color: eventType.getColor(),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: Theme.of(context).dividerColor),
                      boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 2, offset: Offset(0,1))]
                  ),
                ),
              ],
            ),
            if (currentDropdownValue == "custom")
              Padding(
                padding: const EdgeInsets.only(top: 10.0),
                child: TextFormField(
                  controller: hexColorController,
                  decoration: InputDecoration(
                      labelText: FeaturesStrings.labelCustomColorHex.tr(),
                      hintText: "#RRGGBB or #AARRGGBB",
                      filled: true
                  ),
                  onChanged: (value) {
                    // No need to call _updateEventType on every char change for performance,
                    // but ensure valid hex for preview.
                    // Actual update can happen on field submission or focus loss for robustness.
                    // For live preview, this is okay.
                    _updateEventType(index, EventType(code: eventType.code, title: eventType.title, colorDefinition: value.startsWith("#") ? value : "#$value"));
                  },
                  onEditingComplete: () { // Update when user finishes editing
                    String finalHex = hexColorController.text;
                    if (!finalHex.startsWith("#")) finalHex = "#$finalHex";
                    _updateEventType(index, EventType(code: eventType.code, title: eventType.title, colorDefinition: finalHex));
                    FocusScope.of(context).unfocus(); // Dismiss keyboard
                  },
                ),
              ),
            const SizedBox(height: 4),
            Align(
              alignment: Alignment.centerRight,
              child: IconButton(
                icon: Icon(Icons.delete_outline, color: Theme.of(context).colorScheme.error, size: 28),
                tooltip: FeaturesStrings.tooltipRemoveEventType.tr(),
                onPressed: () => _removeEventType(index),
              ),
            ),
          ],
        ),
      ),
    );
  }
}