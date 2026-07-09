// companions_feature.dart
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'feature.dart';
import 'feature_constants.dart';

/// Feature for companions with a max count.
class CompanionsFeature extends Feature {
  int? companionsMax;

  CompanionsFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.companionsMax,
  });

  factory CompanionsFeature.fromJson(Map<String, dynamic> json) {
    return CompanionsFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      companionsMax: json[FeatureConstants.companionsMax],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
    if (companionsMax != null)
      data[FeatureConstants.companionsMax] = companionsMax!;
    return data;
  }

  /// Builds the companions UI block.
  @override
  Widget buildFormField(BuildContext context) {
    return TextFormField(
      initialValue: companionsMax?.toString(),
      decoration: InputDecoration(labelText: CommonStrings.max),
      keyboardType: TextInputType.number,
      validator: (val) {
        final n = int.tryParse(val ?? '');
        if (n == null || n < 1) {
          return FeaturesStrings.enterNumberGreaterThanZero;
        }
        return null;
      },
      onSaved: (val) =>
          companionsMax = int.tryParse(val ?? '') ?? companionsMax,
    );
  }
}
