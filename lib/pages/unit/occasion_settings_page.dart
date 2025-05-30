import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
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
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/help_widget.dart';
import 'package:fstapp/widgets/image_area.dart';
import 'package:fstapp/widgets/occasion_card.dart';
import 'package:fstapp/widgets/time_data_range_picker.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/widgets/html_view.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:timezone/timezone.dart' as tz;

class OccasionSettingsPage extends StatefulWidget {
  final OccasionModel occasion;
  const OccasionSettingsPage({super.key, required this.occasion});

  @override
  _OccasionSettingsPageState createState() => _OccasionSettingsPageState();
}

class _OccasionSettingsPageState extends State<OccasionSettingsPage> {
  final _formKey = GlobalKey<FormState>();
  late String? _title;
  late String? _linkValue; // To store link from controller on save
  DateTime? _from;
  DateTime? _to;
  late TextEditingController _linkController;
  String? _description;
  bool _isOpen = false;
  bool _isHidden = false;

  // Timezone
  String? _selectedTimezone;
  List<String> _allTimezones = [];
  // TextEditingController for Autocomplete is managed internally by the Autocomplete widget if initialValue is used.
  // We will use the controller provided by fieldViewBuilder.

  // Feature search
  String _featureSearchQuery = "";
  late TextEditingController _featureSearchController;

  bool _advancedSettingsExpanded = false;

  @override
  void initState() {
    super.initState();
    _title = widget.occasion.title;
    _linkValue = widget.occasion.link;
    _linkController = TextEditingController(text: _linkValue);
    _from = widget.occasion.startTime;
    _to = widget.occasion.endTime;
    _description = widget.occasion.description ?? "";
    _isOpen = widget.occasion.isOpen;
    _isHidden = widget.occasion.isHidden;
    _featureSearchController = TextEditingController();

    // Initialize timezone
    _allTimezones = TimeHelper.getAvailableTimezoneNames();
    _selectedTimezone = widget.occasion.data?[Tb.occasions.data_timezone] as String? ?? tz.local.name;

    if (!_allTimezones.contains(_selectedTimezone) && _allTimezones.isNotEmpty) {
      _selectedTimezone = _allTimezones.contains("Europe/Prague") ? "Europe/Prague" : _allTimezones.first;
    }
    // If _selectedTimezone is still null after this (e.g. _allTimezones is empty), Autocomplete will handle it.

    final defaultFeatures = FeatureService.getDefaultFeatures();
    for (var defaultFeature in defaultFeatures) {
      bool exists = widget.occasion.features.any((f) => f.code == defaultFeature.code);
      if (!exists) {
        widget.occasion.features.add(defaultFeature);
      }
    }

    widget.occasion.features.sort((a, b) {
      final aIndex = defaultFeatures.indexWhere((defaultFeature) => defaultFeature.code == a.code);
      final bIndex = defaultFeatures.indexWhere((defaultFeature) => defaultFeature.code == b.code);
      return aIndex.compareTo(bIndex);
    });
  }

  @override
  void dispose() {
    _linkController.dispose();
    _featureSearchController.dispose();
    super.dispose();
  }

  Future<void> _saveSettings() async {
    if (_formKey.currentState?.validate() ?? false) {
      _formKey.currentState!.save(); // This will call onSaved for TextFormField if defined.
      // For Autocomplete, selection is managed by _selectedTimezone.
      widget.occasion.title = _title;
      widget.occasion.link = _linkValue; // Use _linkValue which is updated by controller's listener or onSaved
      widget.occasion.startTime = _from;
      widget.occasion.endTime = _to;
      widget.occasion.description = _description;
      widget.occasion.isOpen = _isOpen;
      widget.occasion.isHidden = _isHidden;

      widget.occasion.data ??= {};
      widget.occasion.data![Tb.occasions.data_timezone] = _selectedTimezone;

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
            widget.occasion.data ??= {};
            widget.occasion.data![Tb.occasions.data_image] = null;
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

    final filteredFeatures = widget.occasion.features.where((feature) {
      final title = FeatureMetadata.getTitle(feature.code).toLowerCase();
      final description = FeatureMetadata.getDescription(feature.code).toLowerCase();
      final query = _featureSearchQuery.toLowerCase();
      return query.isEmpty || title.contains(query) || description.contains(query);
    }).toList();

    final enabledFeatures = filteredFeatures.where((f) => f.isEnabled).toList();
    final disabledFeatures = filteredFeatures.where((f) => !f.isEnabled).toList();

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
      body: SafeArea(
        child: Align(
          alignment: Alignment.topCenter,
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(8.0),
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
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
                        "width": OccasionCard.kCardWidth.toString(),
                        "height": OccasionCard.kCardHeight.toString(),
                      },
                    )})",
                    imageUrl: imageUrl,
                    onFileSelected: (file) async {
                      Uint8List imageData = await file.readAsBytes();
                      try {
                        var compressedImageData = await ImageCompressionHelper.compress(imageData, 900);
                        final publicUrl = await DbImages.uploadImage(compressedImageData, widget.occasion.id, null);
                        setState(() {
                          widget.occasion.data ??= {};
                          widget.occasion.data![Tb.occasions.data_image] = publicUrl;
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
                            colors: [ Colors.white, Colors.transparent,],
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
                          HtmlEditorRoute(
                              content: {HtmlEditorPage.parContent: _description},
                              occasionId: widget.occasion.id
                          ),
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
                        HelpWidget(
                            title: "Public".tr(),
                            content: "Determines whether event details (schedule, info, etc.) are available to the public.".tr()
                        )
                      ],
                    ),
                    value: _isOpen,
                    onChanged: (value) {
                      setState(() { _isOpen = value; });
                    },
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
                    onChanged: (value) {
                      setState(() { _isHidden = value; });
                    },
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
                                    _linkValue = fixed;
                                  });
                                },
                                onSaved: (val){ // Also on save
                                  _linkValue = Utilities.sanitizeFullUrl(val ?? "");
                                }
                            ),
                            const SizedBox(height: 24),

                            // Timezone Autocomplete
                            if (_allTimezones.isNotEmpty)
                              Autocomplete<String>(
                                initialValue: _selectedTimezone != null && _allTimezones.contains(_selectedTimezone)
                                    ? TextEditingValue(text: _selectedTimezone!)
                                    : null, // Use TextEditingValue for initialValue
                                optionsBuilder: (TextEditingValue textEditingValue) {
                                  if (textEditingValue.text.isEmpty) {
                                    return _allTimezones.take(50); // Show some initial options or an empty iterable
                                  }
                                  return _allTimezones.where((String option) {
                                    return option.toLowerCase().contains(textEditingValue.text.toLowerCase());
                                  });
                                },
                                onSelected: (String selection) {
                                  setState(() {
                                    _selectedTimezone = selection;
                                  });
                                  // The fieldViewBuilder's controller will be updated by Autocomplete
                                },
                                fieldViewBuilder: (BuildContext context,
                                    TextEditingController fieldTextEditingController,
                                    FocusNode fieldFocusNode,
                                    VoidCallback onFieldSubmitted) {
                                  return TextFormField(
                                    controller: fieldTextEditingController,
                                    focusNode: fieldFocusNode,
                                    decoration: InputDecoration(
                                      labelText: "Timezone".tr(),
                                      border: const OutlineInputBorder(),
                                      suffixIcon: fieldTextEditingController.text.isNotEmpty
                                          ? IconButton(
                                        icon: const Icon(Icons.clear),
                                        onPressed: () {
                                          fieldTextEditingController.clear();
                                          setState(() {
                                            _selectedTimezone = null;
                                          });
                                          // fieldFocusNode.requestFocus(); // Optionally re-focus
                                        },
                                      )
                                          : null,
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return 'Timezone is required'.tr();
                                      }
                                      if (!_allTimezones.contains(value)) {
                                        // If _selectedTimezone is set (by onSelected) and matches, it's fine.
                                        // Otherwise, the typed text isn't a valid option.
                                        if (_selectedTimezone != value) {
                                          return 'Please select or type a valid timezone'.tr();
                                        }
                                      }
                                      // If value is in allTimezones, it means user typed it correctly
                                      // or it was set by onSelected. In either case, update _selectedTimezone.
                                      if(_allTimezones.contains(value) && _selectedTimezone != value) {
                                        // This syncs if user types a full valid name without selecting
                                        // Needs setState to be effective for validation pass
                                        WidgetsBinding.instance.addPostFrameCallback((_) {
                                          if (mounted) { // Check if widget is still in the tree
                                            setState(() { _selectedTimezone = value; });
                                          }
                                        });
                                      }
                                      return null;
                                    },
                                    onFieldSubmitted: (_) => onFieldSubmitted(),
                                  );
                                },
                                optionsViewBuilder: (BuildContext context,
                                    AutocompleteOnSelected<String> onSelected, Iterable<String> options) {
                                  return Align(
                                    alignment: Alignment.topLeft,
                                    child: Material(
                                      elevation: 4.0,
                                      child: ConstrainedBox(
                                        constraints: BoxConstraints(
                                            maxHeight: 300, // Limit dropdown height
                                            // Ensure width matches field or is reasonable
                                            maxWidth: MediaQuery.of(context).size.width - 40 > 0 ? MediaQuery.of(context).size.width - 40 : 300
                                        ),
                                        child: ListView.builder(
                                          padding: EdgeInsets.zero,
                                          itemCount: options.length,
                                          shrinkWrap: true,
                                          itemBuilder: (BuildContext context, int index) {
                                            final String option = options.elementAt(index);
                                            return InkWell(
                                              onTap: () {
                                                onSelected(option);
                                              },
                                              child: Padding(
                                                padding: const EdgeInsets.all(16.0),
                                                child: Text(option),
                                              ),
                                            );
                                          },
                                        ),
                                      ),
                                    ),
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

                  Container( // Features Section
                    padding: const EdgeInsets.all(12.0),
                    decoration: BoxDecoration(
                      border: Border.all(color: Theme.of(context).dividerColor),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text("Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _featureSearchController,
                          decoration: InputDecoration(
                            labelText: "Search features".tr(),
                            prefixIcon: const Icon(Icons.search),
                            border: const OutlineInputBorder(),
                            suffixIcon: _featureSearchQuery.isNotEmpty
                                ? IconButton(
                              icon: const Icon(Icons.clear),
                              onPressed: () {
                                _featureSearchController.clear();
                                setState(() {
                                  _featureSearchQuery = "";
                                });
                              },
                            )
                                : null,
                          ),
                          onChanged: (value) {
                            setState(() {
                              _featureSearchQuery = value;
                            });
                          },
                        ),
                        const SizedBox(height: 16),
                        if (enabledFeatures.isNotEmpty) ...[
                          Text("Enabled Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold)),
                          const SizedBox(height: 8),
                          ...enabledFeatures.map((feature) =>
                              FeatureForm(feature: feature, occasion: widget.occasion.id!)
                          ),
                        ],
                        if (disabledFeatures.isNotEmpty) ...[
                          const SizedBox(height: 16),
                          Text("Other Features".tr(), style: const TextStyle(fontWeight: FontWeight.bold)),
                          const SizedBox(height: 8),
                          ...disabledFeatures.map((feature) =>
                              FeatureForm(feature: feature, occasion: widget.occasion.id!)
                          ),
                        ],
                        if (filteredFeatures.isEmpty && _featureSearchQuery.isNotEmpty)
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Text("No features match your search.".tr()),
                          ),
                      ],
                    ),
                  ),
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