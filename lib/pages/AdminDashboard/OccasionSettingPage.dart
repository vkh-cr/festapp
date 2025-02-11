import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/AdminDashboard/FeatureForm.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
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
  late TextEditingController _linkController;
  @override
  void initState() {
    super.initState();
    _title = widget.occasion.title;
    _link = widget.occasion.link;
    _from = widget.occasion.startTime;
    _to = widget.occasion.endTime;
    _linkController = TextEditingController(text: _link);
    List<Map<String, dynamic>> defaultFeatures = [
      {FeatureService.metaCode: FeatureService.form, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.ticket, "color": "000000", "background": "", FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.songbook, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.game, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.services, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.userGroups, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.entryCode, FeatureService.metaIsEnabled: false},
      {FeatureService.metaCode: FeatureService.companions, FeatureService.metaIsEnabled: false},
    ];
    for (var defaultFeature in defaultFeatures) {
      bool exists = widget.occasion.features.any((f) => f[FeatureService.metaCode] == defaultFeature[FeatureService.metaCode]);
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
      await DbUsers.updateOccasion(widget.occasion);
      ToastHelper.Show(context, "${"Saved".tr()}: ${widget.occasion.title!}");
      Navigator.of(context).pop();
    }
  }
  Future<void> _deleteOccasion() async {
    await DbUsers.deleteOccasion(widget.occasion.id!);
    ToastHelper.Show(context, "${"Deleted".tr()}: ${widget.occasion.title!}");
    Navigator.of(context).pop();
  }
  Future<void> _confirmDelete() async {
    bool? confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        insetPadding: EdgeInsets.all(16.0),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
        title: Text("Delete Event".tr()),
        content: Text("Are you sure you want to delete this event? All the event data will be lost.".tr()),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text("Storno".tr()),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: Text("Delete".tr()),
          ),
        ],
      ),
    );
    if (confirm == true) {
      await _deleteOccasion();
    }
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
        padding: const EdgeInsets.all(8.0),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              TextFormField(
                initialValue: _title,
                decoration: InputDecoration(
                  labelText: "Title".tr(),
                ),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(errorText: 'Title is required'.tr()),
                ]),
                onSaved: (val) {
                  _title = val;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _linkController,
                decoration: InputDecoration(
                  labelText: "Link".tr(),
                ),
                validator: FormBuilderValidators.compose([
                  FormBuilderValidators.required(errorText: 'Link is required'.tr()),
                ]),
                onChanged: (val) {
                  final fixed = Utilities.sanitizeFullUrl(val);
                  if (fixed != val) {
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
                  _link = _linkController.text;
                },
              ),
              const SizedBox(height: 16),
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
              Text("Features".tr()),
              const SizedBox(height: 8),
              ...widget.occasion.features.map<Widget>((feature) {
                return FeatureForm(feature: feature);
              }),
              const SizedBox(height: 80),
              Center(
                child: TextButton(
                  onPressed: RightsService.isUnitManager() ? _confirmDelete : null,
                  child: Text(
                    "${"Delete".tr()}: ${widget.occasion.title}",
                    style: TextStyle(color: ThemeConfig.redColor(context)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
        color: Theme.of(context).appBarTheme.backgroundColor ?? Theme.of(context).primaryColor,
        child: Row(
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
      ),
    );
  }
}
