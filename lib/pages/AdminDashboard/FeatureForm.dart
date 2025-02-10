import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';

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
  TextEditingController? companionsController;

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature['is_enabled'] ?? false;

    // For the 'ticket' feature, initialize color fields.
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
    // For the 'companions' feature, initialize the max_companions field.
    else if (widget.feature['code'] == 'companions') {
      // Set a default value of 1 if not provided.
      widget.feature['max_companions'] ??= 1;
      companionsController = TextEditingController(
          text: widget.feature['max_companions'].toString());
    }
  }

  @override
  void dispose() {
    lightColorController?.dispose();
    darkColorController?.dispose();
    backgroundController?.dispose();
    companionsController?.dispose();
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
            // Feature header (displaying the feature code)
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
            // Show additional fields only when the feature is enabled.
            if (isEnabled) ..._buildFeatureFields(context),
          ],
        ),
      ),
    );
  }

  /// Builds additional form fields for the feature based on its code.
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
    else if (widget.feature['code'] == 'companions') {
      fields.add(
        TextFormField(
          controller: companionsController,
          decoration: InputDecoration(
            labelText: "Max",
          ),
          keyboardType: TextInputType.number,
          validator: (value) {
            if (value == null || value.isEmpty) {
              return "Max Companions is required".tr();
            }
            final intValue = int.tryParse(value);
            if (intValue == null || intValue < 1) {
              return "Enter a number greater than 0".tr();
            }
            return null;
          },
          onSaved: (val) {
            widget.feature['max_companions'] = int.tryParse(val ?? '1') ?? 1;
          },
        ),
      );
    }
    // You can add other feature-specific fields here if needed.

    return fields;
  }
}
