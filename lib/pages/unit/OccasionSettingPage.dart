import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/pages/unit/FeatureForm.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HelpWidget.dart';
import 'package:fstapp/widgets/ImageArea.dart';
import 'package:fstapp/widgets/OccasionCard.dart';
import 'package:fstapp/widgets/TimeDataRangePicker.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/widgets/HtmlView.dart';

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
  String? _description;
  bool _isOpen = false; // new property for open setting

  @override
  void initState() {
    super.initState();
    _title = widget.occasion.title;
    _link = widget.occasion.link;
    _from = widget.occasion.startTime;
    _to = widget.occasion.endTime;
    _linkController = TextEditingController(text: _link);
    _description = widget.occasion.description ?? "";
    _isOpen = widget.occasion.isOpen ?? false; // initialize from model, defaulting to false

    // Get the default features
    final defaultFeatures = FeatureService.getDefaultFeatures();

    // Add missing default features
    for (var defaultFeature in defaultFeatures) {
      bool exists = widget.occasion.features.any(
              (f) => f[FeatureService.metaCode] == defaultFeature[FeatureService.metaCode]);
      if (!exists) {
        widget.occasion.features.add(defaultFeature);
      }
    }

    // Sort the features according to the order defined in defaultFeatures
    widget.occasion.features.sort((a, b) {
      final aIndex = defaultFeatures.indexWhere(
              (defaultFeature) => defaultFeature[FeatureService.metaCode] == a[FeatureService.metaCode]);
      final bIndex = defaultFeatures.indexWhere(
              (defaultFeature) => defaultFeature[FeatureService.metaCode] == b[FeatureService.metaCode]);
      return aIndex.compareTo(bIndex);
    });
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
      widget.occasion.description = _description;
      widget.occasion.isOpen = _isOpen;
      await DbOccasions.updateOccasion(widget.occasion);
      ToastHelper.Show(context, "${"Saved".tr()}: ${widget.occasion.title!}");
      Navigator.of(context).pop();
    }
  }

  Future<void> _deleteOccasion() async {
    await DbOccasions.deleteOccasion(widget.occasion.id!);
    ToastHelper.Show(context, "${"Deleted".tr()}: ${widget.occasion.title!}");
    Navigator.of(context).pop();
  }

  Future<void> _confirmDelete() async {
    bool? confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        insetPadding: const EdgeInsets.all(16.0),
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

  Future<void> _removeImage() async {
    final imageUrl = widget.occasion.data?[Tb.occasions.data_image];
    if (imageUrl != null) {
      final confirmation = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Confirm removal".tr(),
        "Are you sure you want to delete this image?".tr(),
      );
      if (confirmation == true) {
        try {
          await DbImages.removeImage(imageUrl);
          setState(() {
            widget.occasion.data?[Tb.occasions.data_image] = null;
          });
          ToastHelper.Show(context, "Image removed successfully.".tr());
        } catch (e) {
          ToastHelper.Show(context, "Failed to remove image.".tr());
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final imageUrl = widget.occasion.data?[Tb.occasions.data_image];
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
              const SizedBox(height: 16),
              Text("Intro Image".tr()),
              const SizedBox(height: 8),
              ImageArea(
                hint: "(${ "Image with ratio {width} : {height}".tr(
                  namedArgs: {
                    "width": kCardWidth.toString(),
                    "height": kCardHeight.toString(),
                  },
                )
                })",
                imageUrl: imageUrl,
                onFileSelected: (file) async {
                  Uint8List imageData = await file.readAsBytes();
                  try {
                    final publicUrl =
                    await DbImages.uploadImage(imageData, widget.occasion.id, null);
                    setState(() {
                      widget.occasion.data?[Tb.occasions.data_image] = publicUrl;
                    });
                    ToastHelper.Show(context, "File uploaded successfully.".tr());
                  } catch (e) {
                    ToastHelper.Show(context, "Failed to upload image.".tr());
                  }
                },
                onRemove: _removeImage,
              ),
              const SizedBox(height: 16),
              Text("Description".tr()),
              const SizedBox(height: 8),
              ClipRect(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxHeight: 400),
                  child: ShaderMask(
                    shaderCallback: (bounds) {
                      return LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [
                          Colors.white,
                          Colors.transparent,
                        ],
                        stops: const [0.9, 1.0],
                      ).createShader(bounds);
                    },
                    blendMode: BlendMode.dstIn,
                    child: HtmlView(
                      html: _description ?? "",
                      isSelectable: true,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 8),
              Center(
                child: ElevatedButton(
                  onPressed: () async {
                    RouterService.navigatePageInfo(
                      context,
                      HtmlEditorRoute(content: {HtmlEditorPage.parContent: _description}),
                    ).then((value) {
                      if (value != null) {
                        setState(() {
                          _description = value as String;
                        });
                      }
                    });
                  },
                  child: Text("Edit content".tr()),
                ),
              ),
              const SizedBox(height: 16),
              SwitchListTile(
                title: Row(
                  children: [
                    Expanded(child: Text("Public".tr())),
                    HelpWidget(title: "Public".tr(), content: "Determines whether event details (schedule, info, etc.) are available to the public.".tr())
                  ],
                ),
                value: _isOpen,
                onChanged: (value) {
                  setState(() {
                    _isOpen = value;
                  });
                },
              ),
              const SizedBox(height: 24),
              Text("Features".tr()),
              const SizedBox(height: 8),
              ...widget.occasion.features.map<Widget>((feature) {
                return FeatureForm(feature: feature, occasion: widget.occasion.id!);
              }),
              const SizedBox(height: 80),
              Center(
                child: TextButton(
                  onPressed: RightsService.isUnitManager() ? _confirmDelete : null,
                  child: Text(
                    "Delete Event".tr(),
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
