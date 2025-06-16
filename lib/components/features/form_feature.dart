// form_feature.dart
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'feature.dart';
import 'feature_constants.dart';

/// Feature for external form & custom button title.
class FormFeature extends Feature {
  bool?   formUseExternal;
  String? formExternalLink;
  String? formExternalPrice;
  String? reserveButtonTitle;

  FormFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.formUseExternal,
    this.formExternalLink,
    this.formExternalPrice,
    this.reserveButtonTitle,
  });

  factory FormFeature.fromJson(Map<String, dynamic> json) {
    return FormFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      formUseExternal:    json[FeatureConstants.formUseExternal],
      formExternalLink:   json[FeatureConstants.formExternalLink],
      formExternalPrice:  json[FeatureConstants.formExternalPrice],
      reserveButtonTitle: json[FeatureConstants.reserveButtonTitle],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode:       code,
      FeatureConstants.metaIsEnabled:  isEnabled,
    };
    if (formUseExternal    != null) data[FeatureConstants.formUseExternal]    = formUseExternal!;
    if (formExternalLink   != null) data[FeatureConstants.formExternalLink]   = formExternalLink!;
    if (formExternalPrice  != null) data[FeatureConstants.formExternalPrice]  = formExternalPrice!;
    if (reserveButtonTitle != null) data[FeatureConstants.reserveButtonTitle] = reserveButtonTitle!;
    return data;
  }

  /// Builds the form UI block.
  @override
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(builder: (ctx, setLocal) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Divider(),
          SwitchListTile(
            title: Text('Use external form'.tr()),
            value: formUseExternal ?? false,
            onChanged: (v) => setLocal(() => formUseExternal = v),
          ),
          if (formUseExternal ?? false) ...[
            TextFormField(
              initialValue: formExternalLink,
              decoration: InputDecoration(
                labelText: 'Reservation Link'.tr(),
                helperText: 'Reservation will be done via this external link.'.tr(),
              ),
              onSaved: (val) => formExternalLink = val,
            ),
            const SizedBox(height: 16),
            TextFormField(
              initialValue: formExternalPrice,
              decoration: InputDecoration(
                labelText: 'Price'.tr(),
                helperText: 'The price will be displayed on the events page.'.tr(),
              ),
              onSaved: (val) => formExternalPrice = val,
            ),
          ],
          const SizedBox(height: 16),
          ExpansionTile(
            title: Text('Advanced Settings'.tr()),
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  initialValue: reserveButtonTitle,
                  decoration: InputDecoration(labelText: 'Reserve Button Title'.tr()),
                  onSaved: (val) => reserveButtonTitle = val,
                ),
              ),
            ],
          ),
        ],
      );
    });
  }
}
