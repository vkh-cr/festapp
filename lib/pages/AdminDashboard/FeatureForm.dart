import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

///
/// A helper widget that renders the form for an individual feature.
///
class FeatureForm extends StatefulWidget {
  final Map<String, dynamic> feature;

  const FeatureForm({Key? key, required this.feature}) : super(key: key);

  @override
  _FeatureFormState createState() => _FeatureFormState();
}

class _FeatureFormState extends State<FeatureForm> {
  late bool isEnabled;
  TextEditingController? lightColorController;
  TextEditingController? darkColorController;
  TextEditingController? backgroundController;

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature['is_enabled'] ?? false;

    if (widget.feature['code'] == 'ticket') {
      widget.feature['lightColor'] ??= 'FFFFFF';
      widget.feature['darkColor'] ??= '000000';
      widget.feature['background'] ??= '';

      lightColorController =
          TextEditingController(text: widget.feature['lightColor']);
      darkColorController =
          TextEditingController(text: widget.feature['darkColor']);
      backgroundController =
          TextEditingController(text: widget.feature['background']);
    }
  }

  @override
  void dispose() {
    lightColorController?.dispose();
    darkColorController?.dispose();
    backgroundController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 8.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Feature header (displaying the code)
            Text(
              widget.feature['code']?.toString().toUpperCase() ?? 'UNKNOWN',
            ),
            // The basic is_enabled switch.
            SwitchListTile(
              title: Text("Enabled".tr()),
              value: isEnabled,
              onChanged: (value) {
                setState(() {
                  isEnabled = value;
                  widget.feature['is_enabled'] = value;
                });
              },
            ),
            // Additional fields are shown only when the feature is enabled.
            if (isEnabled) ..._buildFeatureFields(context),
          ],
        ),
      ),
    );
  }

  /// Build the additional fields for a feature.
  List<Widget> _buildFeatureFields(BuildContext context) {
    List<Widget> fields = [];

    if (widget.feature['code'] == 'ticket') {
      fields.add(
        TextFormField(
          controller: lightColorController,
          decoration: InputDecoration(
            labelText: "Light Color",
          ),
          onSaved: (val) {
            widget.feature['lightColor'] = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 16));
      fields.add(
        TextFormField(
          controller: darkColorController,
          decoration: InputDecoration(
            labelText: "Dark Color",
          ),
          onSaved: (val) {
            widget.feature['darkColor'] = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 16));
      fields.add(
        TextFormField(
          controller: backgroundController,
          decoration: InputDecoration(
            labelText: "Background URL",
          ),
          onSaved: (val) {
            widget.feature['background'] = val;
          },
        ),
      );
    }
    return fields;
  }
}
