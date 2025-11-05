// feature.dart
import 'package:flutter/material.dart';
import 'companion_feature.dart';
import 'feature_constants.dart';
import 'feature_metadata.dart';
import 'form_feature.dart';
import 'import_feature.dart';
import 'map_feature.dart';
import 'schedule_feature.dart';
import 'ticket_feature.dart';
import 'workshop_feature.dart';

/// Base abstract class for all features.
abstract class Feature {
  final String code;
  bool isEnabled;
  String title;
  String description;

  Feature({
    required this.code,
    this.isEnabled = false,
    String? title,
    String? description,
  })  : title = title ?? FeatureMetadata.getTitle(code),
        description = description ?? FeatureMetadata.getDescription(code);

  /// A getter to determine if the UI should allow this feature to be disabled.
  /// By default, features can be disabled.
  /// This will be overridden by FormFeature.
  bool get canBeDisabled => true;

  /// Factory constructor to create a feature from JSON.
  factory Feature.fromJson(Map<String, dynamic> json) {
    final code = json[FeatureConstants.metaCode];
    switch (code) {
      case FeatureConstants.ticket:
        return TicketFeature.fromJson(json);
      case FeatureConstants.form:
        return FormFeature.fromJson(json);
      case FeatureConstants.companions:
        return CompanionsFeature.fromJson(json);
      case FeatureConstants.map:
        return MapFeature.fromJson(json);
      case ScheduleFeature.metaSchedule:
        return ScheduleFeature.fromJson(json);
      case FeatureConstants.workshops:
        return WorkshopsFeature.fromJson(json);
      case FeatureConstants.import:
        return ImportFeature.fromJson(json);
      default:
        return SimpleFeature.fromJson(json);
    }
  }

  /// Converts the feature to JSON.
  Map<String, dynamic> toJson();

  /// Builds the form field widget for this feature.
  /// This should be implemented by features that have configurable settings.
  Widget buildFormField(BuildContext context);
}

/// A simple feature without extra properties and no settings form.
class SimpleFeature extends Feature {
  SimpleFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
  });

  factory SimpleFeature.fromJson(Map<String, dynamic> json) {
    return SimpleFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
  }

  @override
  Widget buildFormField(BuildContext context) {
    return Container();
  }
}
