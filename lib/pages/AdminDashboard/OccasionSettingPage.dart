import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/pages/AdminDashboard/FeatureForm.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/widgets/TimeDataRangePicker.dart';

class OccasionSettingsPage extends StatefulWidget {
  final OccasionModel occasion;

  const OccasionSettingsPage({Key? key, required this.occasion}) : super(key: key);

  @override
  _OccasionSettingsPageState createState() => _OccasionSettingsPageState();
}

class _OccasionSettingsPageState extends State<OccasionSettingsPage> {
  final _formKey = GlobalKey<FormState>();

  late String? _title;
  late String? _link;
  DateTime? _from;
  DateTime? _to;

  // Controller for the link text field.
  late TextEditingController _linkController;

  @override
  void initState() {
    super.initState();
    _title = widget.occasion.title;
    _link = widget.occasion.link;
    _from = widget.occasion.startTime;
    _to = widget.occasion.endTime;
    _linkController = TextEditingController(text: _link);

    // Ensure the features list is initialized.
    // Always add default features if they are not already part of occasion.features.
    List<Map<String, dynamic>> defaultFeatures = [
      {
        "code": "form",
        "is_enabled": false,
      },
      {
        "code": "ticket",
        "color": "000000",
        "background": "",
        "is_enabled": false,
      },
      {
        "code": "songbook",
        "is_enabled": false,
      },
      {
        "code": "game",
        "is_enabled": false,
      },
    ];

    // If the features list is null or empty, it will already be an empty list by model default.
    for (var defaultFeature in defaultFeatures) {
      bool exists = widget.occasion.features.any((f) => f['code'] == defaultFeature['code']);
      if (!exists) {
        widget.occasion.features.add(defaultFeature);
      }
    }
  }

  @override
  void dispose() {
    _linkController.dispose();
    super.dispose();
  }

  Future<void> _saveSettings() async {
    if (_formKey.currentState?.validate() ?? false) {
      _formKey.currentState!.save();
      widget.occasion.title = _title;
      widget.occasion.link = _link;
      widget.occasion.startTime = _from;
      widget.occasion.endTime = _to;
      // The feature fields are saved via their onSaved callbacks.
      await DbUsers.updateOccasion(widget.occasion);
      ToastHelper.Show(context, "${"Saved".tr()}: ${widget.occasion.title!}");
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Using an AppBar with a close icon.
      appBar: AppBar(
        title: Text("Settings".tr()),
        automaticallyImplyLeading: false,
        actions: [
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              // Title field
              TextFormField(
                initialValue: _title,
                decoration: InputDecoration(
                  labelText: "Title".tr(),
                ),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(
                    errorText: 'Title is required'.tr(),
                  ),
                ]),
                onSaved: (val) {
                  _title = val;
                },
              ),
              const SizedBox(height: 16),
              // Link field with automatic diacritics removal
              TextFormField(
                controller: _linkController,
                decoration: InputDecoration(
                  labelText: "Link".tr(),
                ),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(
                    errorText: 'Link is required'.tr(),
                  ),
                ]),
                onChanged: (val) {
                  // Remove diacritics from the entered text immediately
                  final fixed = Utilities.sanitizeFullUrl(val);
                  if (fixed != val) {
                    // Update the controller text while preserving the cursor position
                    _linkController.value = _linkController.value.copyWith(
                      text: fixed,
                      selection: TextSelection.collapsed(offset: fixed.length),
                    );
                  }
                  setState(() {
                    _link = fixed;
                  });
                },
                onSaved: (val) {
                  // Use the already fixed value from the controller
                  _link = _linkController.text;
                },
              ),
              const SizedBox(height: 16),
              // Date range picker for From (start time) and To (end time)
              TimeDateRangePicker(
                start: _from,
                end: _to,
                onStartChanged: (dateTime) {
                  setState(() {
                    _from = dateTime;
                  });
                },
                onEndChanged: (dateTime) {
                  setState(() {
                    _to = dateTime;
                  });
                },
              ),
              const SizedBox(height: 24),
              // FEATURES SECTION
              Text(
                "Features".tr(),
              ),
              const SizedBox(height: 8),
              // Build a FeatureForm widget for each feature.
              ...widget.occasion.features.map<Widget>((feature) {
                return FeatureForm(feature: feature);
              }),
              const SizedBox(height: 24),
              // Action buttons
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  TextButton(
                    onPressed: () => Navigator.of(context).pop(),
                    child: Text("Storno".tr()),
                  ),
                  const SizedBox(width: 8),
                  ElevatedButton(
                    onPressed: _saveSettings,
                    child: Text("Save".tr()),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
