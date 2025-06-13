import 'package:flutter/material.dart';
import 'package:fstapp/theme_config.dart';

import 'feature.dart';
import 'feature_metadata.dart';

class FeatureForm extends StatefulWidget {
  final Feature feature;
  final int occasion;

  const FeatureForm({super.key, required this.feature, required this.occasion});

  @override
  _FeatureFormState createState() => _FeatureFormState();
}

class _FeatureFormState extends State<FeatureForm> {
  late bool isEnabled;

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature.isEnabled;
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      color: ThemeConfig.whiteColor(context),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
      margin: const EdgeInsets.symmetric(vertical: 4.0, horizontal: 0.0),
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Row with title, description and switch
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SelectableText(
                        FeatureMetadata.getTitle(widget.feature.code),
                        style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
                      ),
                      const SizedBox(height: 4),
                      SelectableText(
                        FeatureMetadata.getDescription(widget.feature.code),
                        style: TextStyle(fontSize: 14, color: ThemeConfig.grey700(context)),
                      ),
                    ],
                  ),
                ),
                Switch(
                  value: isEnabled,
                  onChanged: (value) {
                    setState(() {
                      isEnabled = value;
                      widget.feature.isEnabled = value;
                    });
                  },
                ),
              ],
            ),
            if (isEnabled) ..._buildFeatureFields(context),
          ],
        ),
      ),
    );
  }

  /// Builds additional fields based on the feature type.
  List<Widget> _buildFeatureFields(BuildContext context) {
    return [
      widget.feature.buildFormField(context),
    ];
  }
}
