import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'feature.dart';
import 'feature_constants.dart';
import 'features_strings.dart';

/// Feature for importing users from different sources.
class ImportFeature extends Feature {
  static const String metaImportFromCsv = "import_from_csv";
  static const String metaImportFromTickets = "import_from_tickets";

  bool importFromCsv;
  bool importFromTickets;

  ImportFeature({
    super.code = FeatureConstants.import,
    super.isEnabled = true, // Enabled by default
    super.title,
    super.description,
    this.importFromCsv = false,
    this.importFromTickets = false,
  });

  /// Creates an ImportFeature from a JSON object.
  factory ImportFeature.fromJson(Map<String, dynamic> json) {
    return ImportFeature(
      code: json[FeatureConstants.metaCode] ?? FeatureConstants.import,
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? true, // Enabled by default
      title: json[FeatureConstants.metaTitle],
      description: json[FeatureConstants.metaDescription],
      importFromCsv: json[metaImportFromCsv] ?? false,
      importFromTickets: json[metaImportFromTickets] ?? false,
    );
  }

  /// Converts the feature to a JSON object.
  @override
  Map<String, dynamic> toJson() {
    return {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
      metaImportFromCsv: importFromCsv,
      metaImportFromTickets: importFromTickets,
    };
  }

  /// Builds the form field widget for this feature.
  @override
  Widget buildFormField(BuildContext context) {
    return _ImportFeatureForm(feature: this);
  }
}

/// A stateful widget to manage the form's UI state for the ImportFeature.
class _ImportFeatureForm extends StatefulWidget {
  final ImportFeature feature;

  const _ImportFeatureForm({required this.feature});

  @override
  State<_ImportFeatureForm> createState() => _ImportFeatureFormState();
}

class _ImportFeatureFormState extends State<_ImportFeatureForm> {
  late bool _importFromCsv;
  late bool _importFromTickets;

  @override
  void initState() {
    super.initState();
    _importFromCsv = widget.feature.importFromCsv;
    _importFromTickets = widget.feature.importFromTickets;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SwitchListTile(
          title: Text(FeaturesStrings.labelImportFromCsv.tr()),
          value: _importFromCsv,
          onChanged: (bool value) {
            setState(() {
              _importFromCsv = value;
              widget.feature.importFromCsv = value;
            });
          },
        ),
        SwitchListTile(
          title: Text(FeaturesStrings.labelImportFromTickets.tr()),
          value: _importFromTickets,
          onChanged: (bool value) {
            setState(() {
              _importFromTickets = value;
              widget.feature.importFromTickets = value;
            });
          },
        ),
      ],
    );
  }
}
