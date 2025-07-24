import 'dart:typed_data';
import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/features/feature_metadata.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';
import 'package:fstapp/components/features/feature_form.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/help_widget.dart';
import 'package:fstapp/widgets/image_area.dart';
import 'package:fstapp/widgets/occasion_card.dart';
import 'package:fstapp/widgets/time_data_range_picker.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:timezone/timezone.dart' as tz;

class OccasionSettingsTab extends StatefulWidget {
  const OccasionSettingsTab({super.key});

  @override
  _OccasionSettingsTabState createState() => _OccasionSettingsTabState();
}

class _OccasionSettingsTabState extends State<OccasionSettingsTab> {
  final _formKey = GlobalKey<FormState>();

  // Data
  OccasionModel? occasion;
  String? occasionLink;
  bool _isLoading = true;
  bool _isSaving = false;

  // Form fields state
  late String? _title;
  late String? _linkValue;
  DateTime? _from;
  DateTime? _to;
  late TextEditingController _linkController;
  String? _description;
  bool _isOpen = false;
  bool _isHidden = false;
  String? _selectedTimezone;
  List<String> _allTimezones = [];
  String _featureSearchQuery = "";
  late TextEditingController _featureSearchController;
  bool _advancedSettingsExpanded = false;

  @override
  void initState() {
    super.initState();
    _linkController = TextEditingController();
    _featureSearchController = TextEditingController();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (occasionLink == null && context.routeData.params.isNotEmpty) {
      occasionLink = context.routeData.params.getString(AppRouter.linkFormatted);
      _loadData();
    }
  }

  @override
  void dispose() {
    _linkController.dispose();
    _featureSearchController.dispose();
    super.dispose();
  }

  Future<void> _loadData() async {
    if (occasionLink == null) return;
    setState(() { _isLoading = true; });

    final fetchedOccasion = await DbOccasions.getOccasionByLink(occasionLink!);

    if (mounted && fetchedOccasion != null) {
      setState(() {
        occasion = fetchedOccasion;
        _initializeFormState();
        _isLoading = false;
      });
    } else if (mounted) {
      setState(() { _isLoading = false; });
      ToastHelper.Show(context, "Failed to load event data.".tr());
    }
  }

  void _initializeFormState() {
    if (occasion == null) return;

    _title = occasion!.title;
    _linkValue = occasion!.link;
    _linkController.text = _linkValue ?? "";
    _from = occasion!.startTime;
    _to = occasion!.endTime;
    _description = occasion!.description ?? "";
    _isOpen = occasion!.isOpen;
    _isHidden = occasion!.isHidden;

    _allTimezones = TimeHelper.getAvailableTimezoneNames();
    _selectedTimezone = occasion!.data?[Tb.occasions.data_timezone] as String? ?? tz.local.name;

    if (!_allTimezones.contains(_selectedTimezone) && _allTimezones.isNotEmpty) {
      _selectedTimezone = _allTimezones.contains("Europe/Prague") ? "Europe/Prague" : _allTimezones.first;
    }

    final defaultFeatures = FeatureService.getDefaultFeatures();
    for (var defaultFeature in defaultFeatures) {
      bool exists = occasion!.features.any((f) => f.code == defaultFeature.code);
      if (!exists) {
        occasion!.features.add(defaultFeature);
      }
    }

    occasion!.features.sort((a, b) {
      final aIndex = defaultFeatures.indexWhere((defaultFeature) => defaultFeature.code == a.code);
      final bIndex = defaultFeatures.indexWhere((defaultFeature) => defaultFeature.code == b.code);
      return aIndex.compareTo(bIndex);
    });
  }

  Future<void> _saveSettings() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;

    setState(() { _isSaving = true; });

    _formKey.currentState!.save();
    occasion!.title = _title;
    occasion!.link = _linkValue;
    occasion!.startTime = _from;
    occasion!.endTime = _to;
    occasion!.description = _description;
    occasion!.isOpen = _isOpen;
    occasion!.isHidden = _isHidden;

    occasion!.data ??= {};
    occasion!.data![Tb.occasions.data_timezone] = _selectedTimezone;

    await DbOccasions.updateOccasion(occasion!);

    if(occasionLink != null) {
      await RightsService.updateAppData(
        link: occasionLink!,
        force: true,
        refreshOffline: false,
      );
    }

    if(mounted) {
      setState(() { _isSaving = false; });
      ToastHelper.Show(context, "${"Saved".tr()}: ${occasion!.title!}");
    }
  }

  Future<void> _deleteOccasion() async {
    await DbOccasions.deleteOccasion(occasion!.id!);
    ToastHelper.Show(context, "${"Deleted".tr()}: ${occasion!.title!}");
    Navigator.of(context).pop();
  }

  Future<void> _confirmDelete() async {
    bool? confirm = await DialogHelper.showConfirmationDialog(
        context,
        "Delete Event".tr(),
        "Are you sure you want to delete this event? All the event data will be lost.".tr());
    if (confirm == true) {
      await _deleteOccasion();
    }
  }

  Future<void> _removeImage() async {
    final imageUrl = occasion!.data?[Tb.occasions.data_image];
    if (imageUrl != null) {
      final confirmation = await DialogHelper.showConfirmationDialog(
        context,
        "Confirm removal".tr(),
        "Are you sure you want to delete this image?".tr(),
      );
      if (confirmation == true) {
        try {
          await DbImages.removeImage(imageUrl);
          setState(() {
            occasion!.data ??= {};
            occasion!.data![Tb.occasions.data_image] = null;
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
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (occasion == null) {
      return Center(child: Text("Event not found.".tr()));
    }

    final bool isEditingEnabled = RightsService.isUnitEditor();
    final imageUrl = occasion!.data?[Tb.occasions.data_image];

    final filteredFeaturesBySearch = occasion!.features.where((feature) {
      final title = FeatureMetadata.getTitle(feature.code).toLowerCase();
      final description = FeatureMetadata.getDescription(feature.code).toLowerCase();
      final query = _featureSearchQuery.toLowerCase();
      return query.isEmpty || title.contains(query) || description.contains(query);
    }).toList();

    final featuresToShow = AppConfig.isAppSupported
        ? filteredFeaturesBySearch
        : filteredFeaturesBySearch
        .where((f) => !FeatureService.appSupportedFeatures.contains(f.code))
        .toList();

    final enabledFeatures = featuresToShow.where((f) => f.isEnabled).toList();
    final disabledFeatures = featuresToShow.where((f) => !f.isEnabled).toList();

    return Scaffold(
      backgroundColor: Colors.transparent,
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(16.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  TextFormField(
                    initialValue: _title,
                    enabled: isEditingEnabled,
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
                  TimeDateRangePicker(
                    start: _from,
                    end: _to,
                    enabled: isEditingEnabled,
                    onStartChanged: (dateTime) {
                      setState(() { _from = dateTime; });
                    },
                    onEndChanged: (dateTime) {
                      setState(() { _to = dateTime; });
                    },
                  ),
                  const SizedBox(height: 16),
                  Text("Intro Image".tr()),
                  const SizedBox(height: 8),
                  ImageArea(
                    enabled: isEditingEnabled,
                    hint: "(${ "Image with ratio {width} : {height}".tr(
                      namedArgs: {
                        "width": OccasionCard.kCardWidth.toString(),
                        "height": OccasionCard.kCardHeight.toString(),
                      },
                    )})",
                    imageUrl: imageUrl,
                    onFileSelected: (file) async {
                      Uint8List imageData = await file.readAsBytes();
                      try {
                        var compressedImageData = await ImageCompressionHelper.compress(imageData, 900);
                        final publicUrl = await DbImages.uploadImage(compressedImageData, occasion!.id, null);
                        setState(() {
                          occasion!.data ??= {};
                          occasion!.data![Tb.occasions.data_image] = publicUrl;
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
                        shaderCallback: (bounds) => LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: [Colors.white, Colors.transparent],
                          stops: const [0.9, 1.0],
                        ).createShader(bounds),
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
                      onPressed: isEditingEnabled ? () async {
                        RouterService.navigatePageInfo(
                          context,
                          HtmlEditorRoute(
                              content: {HtmlEditorPage.parContent: _description},
                              occasionId: occasion!.id
                          ),
                        ).then((value) {
                          if (value != null) {
                            setState(() { _description = value as String; });
                          }
                        });
                      } : null,
                      child: Text("Edit content".tr()),
                    ),
                  ),
                  const SizedBox(height: 16),
                  if (AppConfig.isAppSupported)
                    SwitchListTile(
                      title: Row(
                        children: [
                          Expanded(child: Text("Public".tr())),
                          HelpWidget(
                              title: "Public".tr(),
                              content: "Determines whether event details (schedule, info, etc.) are available to the public.".tr()
                          )
                        ],
                      ),
                      value: _isOpen,
                      onChanged: isEditingEnabled ? (value) {
                        setState(() { _isOpen = value; });
                      } : null,
                    ),
                  const SizedBox(height: 16),
                  SwitchListTile(
                    title: Row(
                      children: [
                        Expanded(child: Text("Hide".tr())),
                        HelpWidget(
                          title: "Hide".tr(),
                          content: "This determines whether this event is hidden from list views.".tr(),
                        ),
                      ],
                    ),
                    value: _isHidden,
                    onChanged: isEditingEnabled ? (value) {
                      setState(() { _isHidden = value; });
                    } : null,
                  ),
                  const SizedBox(height: 16),
                  ExpansionTile(
                    title: Text(
                      "Advanced Settings".tr(),
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                    ),
                    initiallyExpanded: _advancedSettingsExpanded,
                    onExpansionChanged: (bool expanded) {
                      setState(() => _advancedSettingsExpanded = expanded);
                    },
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            TextFormField(
                                controller: _linkController,
                                enabled: isEditingEnabled,
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
                                  setState(() { _linkValue = fixed; });
                                },
                                onSaved: (val){
                                  _linkValue = Utilities.sanitizeFullUrl(val ?? "");
                                }
                            ),
                            const SizedBox(height: 24),
                            if (_allTimezones.isNotEmpty)
                              Autocomplete<String>(
                                initialValue: _selectedTimezone != null && _allTimezones.contains(_selectedTimezone)
                                    ? TextEditingValue(text: _selectedTimezone!)
                                    : null,
                                optionsBuilder: (TextEditingValue textEditingValue) {
                                  if (!isEditingEnabled || textEditingValue.text.isEmpty) {
                                    return const Iterable<String>.empty();
                                  }
                                  return _allTimezones.where((String option) {
                                    return option.toLowerCase().contains(textEditingValue.text.toLowerCase());
                                  });
                                },
                                onSelected: (String selection) {
                                  setState(() { _selectedTimezone = selection; });
                                },
                                fieldViewBuilder: (BuildContext context,
                                    TextEditingController fieldTextEditingController,
                                    FocusNode fieldFocusNode,
                                    VoidCallback onFieldSubmitted) {
                                  return TextFormField(
                                    controller: fieldTextEditingController,
                                    focusNode: fieldFocusNode,
                                    enabled: isEditingEnabled,
                                    decoration: InputDecoration(
                                      labelText: "Timezone".tr(),
                                      border: const OutlineInputBorder(),
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return 'Timezone is required'.tr();
                                      }
                                      if (!_allTimezones.contains(value)) {
                                        if (_selectedTimezone != value) {
                                          return 'Please select a valid timezone'.tr();
                                        }
                                      }
                                      return null;
                                    },
                                  );
                                },
                              )
                            else
                              Padding(
                                padding: const EdgeInsets.symmetric(vertical: 12.0),
                                child: Text("Timezones loading or unavailable...".tr()),
                              ),
                            const SizedBox(height: 16),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  Opacity(
                    opacity: isEditingEnabled ? 1.0 : 0.5,
                    child: AbsorbPointer(
                      absorbing: !isEditingEnabled,
                      child: Container(
                        padding: const EdgeInsets.all(12.0),
                        decoration: BoxDecoration(
                            border: Border.all(color: Colors.grey.shade300),
                            borderRadius: BorderRadius.circular(8)
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text("Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                            const SizedBox(height: 8),
                            TextField(
                              controller: _featureSearchController,
                              enabled: isEditingEnabled,
                              decoration: InputDecoration(
                                labelText: "Search features".tr(),
                                prefixIcon: const Icon(Icons.search),
                                border: const OutlineInputBorder(),
                              ),
                              onChanged: (value) {
                                setState(() { _featureSearchQuery = value; });
                              },
                            ),
                            const SizedBox(height: 16),
                            if (enabledFeatures.isNotEmpty) ...[
                              Text("Enabled Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold)),
                              const SizedBox(height: 8),
                              ...enabledFeatures.map((feature) =>
                                  FeatureForm(feature: feature, occasion: occasion!.id!)
                              ),
                            ],
                            if (disabledFeatures.isNotEmpty) ...[
                              const SizedBox(height: 16),
                              Text("Other Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold)),
                              const SizedBox(height: 8),
                              ...disabledFeatures.map((feature) =>
                                  FeatureForm(feature: feature, occasion: occasion!.id!)
                              ),
                            ],
                            if (featuresToShow.isEmpty && _featureSearchQuery.isNotEmpty)
                              Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text("No features match your search.".tr()),
                              ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 24),
                  if (RightsService.isUnitManager())
                    Center(
                      child: TextButton(
                        onPressed: isEditingEnabled ? _confirmDelete : null,
                        child: Text(
                          "Delete Event".tr(),
                          style: TextStyle(color: isEditingEnabled ? ThemeConfig.redColor(context) : Colors.grey),
                        ),
                      ),
                    ),
                  const SizedBox(height: 80), // Padding for bottom nav bar
                ],
              ),
            ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
        color: Theme.of(context).appBarTheme.backgroundColor,
        padding: const EdgeInsets.all(10),
        child: SafeArea(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              TextButton(
                onPressed: _isSaving || !isEditingEnabled ? null : _loadData,
                child: Text("Storno".tr()),
              ),
              const SizedBox(width: 16),
              ElevatedButton.icon(
                icon: _isSaving ? const SizedBox.shrink() : const Icon(Icons.save, size: 18),
                label: _isSaving
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                    : Text("Save".tr()),
                onPressed: _isSaving || !isEditingEnabled ? null : _saveSettings,
              ),
            ],
          ),
        ),
      ),
    );
  }
}