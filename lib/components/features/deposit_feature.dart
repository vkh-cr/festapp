import 'package:flutter/material.dart';
import 'feature.dart';
import 'feature_constants.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_strings.dart';

class DepositFeature extends Feature {
  String? depositDeadline;
  int? depositDeadlineDays;

  DepositFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.depositDeadline,
    this.depositDeadlineDays,
  });

  factory DepositFeature.fromJson(Map<String, dynamic> json) {
    return DepositFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      depositDeadline: json[FeatureConstants.depositDeadline],
      depositDeadlineDays: json[FeatureConstants.depositDeadlineDays],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = <String, dynamic>{
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
    if (depositDeadline != null) {
      data[FeatureConstants.depositDeadline] = depositDeadline;
    }
    if (depositDeadlineDays != null) {
      data[FeatureConstants.depositDeadlineDays] = depositDeadlineDays;
    }
    return data;
  }

  @override
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(builder: (ctx, setLocal) {
      final daysController = TextEditingController(
        text: depositDeadlineDays?.toString() ?? '7',
      );

      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            OccasionSettingsStrings.depositDeadline,
            style: Theme.of(context)
                .textTheme
                .titleSmall
                ?.copyWith(fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 8),
          RadioListTile<String>(
            title: Text(OccasionSettingsStrings.depositDeadlineDaysBefore),
            value: "days_before",
            groupValue:
                depositDeadline == "on_site" ? "on_site" : "days_before",
            onChanged: (value) {
              setLocal(() {
                if (depositDeadlineDays == null) {
                  depositDeadlineDays = 7;
                  daysController.text = '7';
                }
                depositDeadline = null;
              });
            },
          ),
          if (depositDeadline != "on_site")
            Padding(
              padding: const EdgeInsets.only(left: 32.0, right: 16.0),
              child: TextFormField(
                controller: daysController,
                decoration: InputDecoration(
                  labelText: OccasionSettingsStrings.numberOfDays,
                  hintText: '7',
                  border: const OutlineInputBorder(),
                ),
                keyboardType: TextInputType.number,
                validator: (val) {
                  if (depositDeadline == "on_site") return null;
                  if (val == null || val.isEmpty) return null;
                  final intVal = int.tryParse(val);
                  if (intVal == null || intVal < 0) {
                    return OccasionSettingsStrings.invalidNumber;
                  }
                  return null;
                },
                onChanged: (val) {
                  depositDeadlineDays = int.tryParse(val);
                },
              ),
            ),
          RadioListTile<String>(
            title: Text(OccasionSettingsStrings.depositDeadlineOnSite),
            value: "on_site",
            groupValue:
                depositDeadline == "on_site" ? "on_site" : "days_before",
            onChanged: (value) {
              setLocal(() {
                depositDeadline = "on_site";
                depositDeadlineDays = null;
              });
            },
          ),
        ],
      );
    });
  }
}
