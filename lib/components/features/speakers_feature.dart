import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/speakers/speakers_strings.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/services/time_helper.dart';

import 'feature.dart';
import 'feature_constants.dart';

/// Speakers + counseling feature configuration (plan section 3).
///
/// Config (occasions.features element):
///   counseling_enabled       — offer the counseling entry flow (rozcestník)
///   counseling_event_type    — event type code used for generated slots
///   registration_start_time  — own booking window for counseling slots
///   max_active_bookings      — max future counseling reservations per user
///                              (default 1, 0 = unlimited)
class SpeakersFeature extends Feature {
  bool counselingEnabled;
  String counselingEventType;
  DateTime? registrationStartTime;
  int maxActiveBookings;

  SpeakersFeature({
    super.code = FeatureConstants.speakers,
    super.isEnabled = false,
    super.title,
    super.description,
    this.counselingEnabled = true,
    this.counselingEventType = FeatureConstants.counselingDefaultEventType,
    this.registrationStartTime,
    this.maxActiveBookings = 1,
  });

  factory SpeakersFeature.fromJson(Map<String, dynamic> json) {
    DateTime? parsed;
    final rawStart = json[FeatureConstants.speakersRegistrationStartTime];
    if (rawStart != null) {
      parsed = DateTime.parse(rawStart as String).toUtcFromOccasionTime();
    }
    final rawType = json[FeatureConstants.speakersCounselingEventType] as String?;
    return SpeakersFeature(
      code: json[FeatureConstants.metaCode] as String? ??
          FeatureConstants.speakers,
      isEnabled: json[FeatureConstants.metaIsEnabled] as bool? ?? false,
      counselingEnabled:
          json[FeatureConstants.speakersCounselingEnabled] as bool? ?? true,
      counselingEventType: (rawType != null && rawType.isNotEmpty)
          ? rawType
          : FeatureConstants.counselingDefaultEventType,
      registrationStartTime: parsed,
      maxActiveBookings:
          (json[FeatureConstants.speakersMaxActiveBookings] as num?)?.toInt() ??
              1,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      FeatureConstants.speakersCounselingEnabled: counselingEnabled,
      FeatureConstants.speakersCounselingEventType: counselingEventType,
      FeatureConstants.speakersMaxActiveBookings: maxActiveBookings,
    };
    if (registrationStartTime != null) {
      data[FeatureConstants.speakersRegistrationStartTime] =
          registrationStartTime!.toIso8601String();
    }
    return data;
  }

  @override
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(
      builder: (ctx, setLocalState) {
        final locale = context.locale.toString();
        final dateFmt = DateFormat.yMd(locale).add_jm();
        final displayStart = registrationStartTime != null
            ? dateFmt.format(registrationStartTime!.toOccasionTime())
            : '';

        final startController = TextEditingController(text: displayStart);
        final typeController =
            TextEditingController(text: counselingEventType);
        final maxController =
            TextEditingController(text: maxActiveBookings.toString());

        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SwitchListTile(
              contentPadding: EdgeInsets.zero,
              title: Text(SpeakersStrings.counselingEnabled),
              value: counselingEnabled,
              onChanged: (v) => setLocalState(() => counselingEnabled = v),
            ),
            const SizedBox(height: 8),
            TextFormField(
              controller: typeController,
              decoration: InputDecoration(
                labelText: SpeakersStrings.counselingEventType,
              ),
              onSaved: (val) {
                counselingEventType = (val != null && val.trim().isNotEmpty)
                    ? val.trim()
                    : FeatureConstants.counselingDefaultEventType;
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: maxController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(
                labelText: SpeakersStrings.maxActiveBookings,
              ),
              onSaved: (val) {
                maxActiveBookings = int.tryParse(val?.trim() ?? '') ?? 1;
                if (maxActiveBookings < 0) maxActiveBookings = 0;
              },
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: startController,
              decoration: InputDecoration(
                labelText: SpeakersStrings.registrationStartTime,
                hintText: FeaturesStrings.selectStartTime,
              ),
              readOnly: true,
              onTap: () async {
                final now = DateTime.now();
                final initial = registrationStartTime?.toOccasionTime() ?? now;
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
                    date.year, date.month, date.day, time.hour, time.minute);
                setLocalState(() {
                  registrationStartTime = selectedLocal.toUtcFromOccasionTime();
                  startController.text = dateFmt.format(selectedLocal);
                });
              },
              onSaved: (val) {
                if (val != null && val.isNotEmpty) {
                  final parsedLocal = dateFmt.parse(val);
                  registrationStartTime = parsedLocal.toUtcFromOccasionTime();
                }
              },
            ),
          ],
        );
      },
    );
  }
}
