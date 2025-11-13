import 'dart:typed_data';

import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
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

import '../_shared/common_strings.dart';
import 'occasion_settings_strings.dart';

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
  late TextEditingController _replyToEmailController;
  String? _description;
  bool _isOpen = true;
  bool _isHidden = false;
  bool _isPromoted = false;
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
    _replyToEmailController = TextEditingController();
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
    _replyToEmailController.dispose();
    _featureSearchController.dispose();
    super.dispose();
  }

  Future<void> _loadData() async {
    if (occasionLink == null) return;
    setState(() { _isLoading = true; });

    final fetchedOccasion = await DbOccasions.getOccasionByLink(occasionLink!);

    if (mounted) {
      setState(() {
        occasion = fetchedOccasion;
        _initializeFormState();
        _isLoading = false;
      });
    } else if (mounted) {
      setState(() { _isLoading = false; });
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
    _isPromoted = occasion!.isPromoted;

    // Initialize reply-to email
    _replyToEmailController.text = occasion!.data?[FormHelper.metaReplyTo] as String? ?? '';

    // Initialize timezone
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
    // 1. Validate the form. If it's not valid, do nothing.
    if (!(_formKey.currentState?.validate() ?? false)) return;

    // 2. Set the state to "saving" to show a loading indicator on the button.
    setState(() { _isSaving = true; });

    // 3. Save the form fields to update the local state variables.
    _formKey.currentState!.save();

    // 4. Update the occasion model with the new values from the form.
    occasion!.title = _title;
    occasion!.link = _linkValue;
    occasion!.startTime = _from;
    occasion!.endTime = _to;
    occasion!.description = _description;
    occasion!.isOpen = _isOpen;
    occasion!.isHidden = _isHidden;
    occasion!.isPromoted = _isPromoted;

    // <-- MODIFIED (Safety check, though UI logic should prevent this) -->
    final imageUrl = occasion!.data?[Tb.occasions.data_image];
    final bool hasImage = (imageUrl as String?)?.isNotEmpty ?? false;
    if (_isPromoted && !hasImage) {
      occasion!.isPromoted = false;
    }
    // <-- END MODIFICATION -->

    occasion!.data ??= {};

    // Save Reply-To Email
    final trimmedEmail = _replyToEmailController.text.trim();
    if (trimmedEmail.isEmpty) {
      occasion!.data!.remove(FormHelper.metaReplyTo);
    } else {
      occasion!.data![FormHelper.metaReplyTo] = trimmedEmail;
    }

    // Save Timezone
    occasion!.data![Tb.occasions.data_timezone] = _selectedTimezone;

    // 5. Persist the changes to the database.
    await DbOccasions.updateOccasion(occasion!);

    final newLink = occasion!.link;

    // 6. Check if the component is still mounted and the new link is valid.
    if (mounted && newLink != null) {
      // Show a success message.
      ToastHelper.Show(context, "${CommonStrings.saved}: ${occasion!.title!}");

      // 7. Trigger the full page refresh.
      // This router method handles updating RightsService with the new link
      // and then navigates to the correct administration page (AdminPage or
      // ReservationsPage). This is crucial, especially if the event link
      // itself has been changed.
      await RouterService.navigateToOccasionAdministration(
        context,
        occasionLink: newLink,
      );
    }

    // 8. Reset the saving state.
    if (mounted) {
      setState(() { _isSaving = false; });
    }
  }

  Future<void> _deleteOccasion() async {
    await DbOccasions.deleteOccasion(occasion!.id!);
    ToastHelper.Show(context, "${CommonStrings.deleted}: ${occasion!.title!}");
    Navigator.of(context).pop();
  }

  Future<void> _confirmDelete() async {
    bool? confirm = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        insetPadding: const EdgeInsets.all(16.0),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8.0)),
        title: Text(OccasionSettingsStrings.deleteEvent),
        content: Text(OccasionSettingsStrings.deleteEventConfirmation),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            child: Text(CommonStrings.storno),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pop(true),
            child: Text(CommonStrings.delete),
          ),
        ],
      ),
    );
    if (confirm == true) {
      await _deleteOccasion();
    }
  }

  Future<void> _removeImage() async {
    final imageUrl = occasion!.data?[Tb.occasions.data_image];
    if (imageUrl != null) {
      final confirmation = await DialogHelper.showConfirmationDialog(
        context,
        OccasionSettingsStrings.confirmRemoval,
        OccasionSettingsStrings.deleteImageConfirmation,
      );
      if (confirmation == true) {
        try {
          await DbImages.removeImage(imageUrl);
          setState(() {
            occasion!.data ??= {};
            occasion!.data![Tb.occasions.data_image] = null;

            // <-- MODIFIED (Added) -->
            // If the image is removed, it can no longer be promoted.
            if (_isPromoted) {
              _isPromoted = false;
            }
            // <-- END MODIFICATION -->
          });
          ToastHelper.Show(context, OccasionSettingsStrings.imageRemovedSuccess);
        } catch (e) {
          ToastHelper.Show(context, OccasionSettingsStrings.imageRemovedFail);
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    final bool isEditingEnabled = RightsService.isUnitEditor();
    final imageUrl = occasion!.data?[Tb.occasions.data_image];

    // <-- MODIFIED (Added) -->
    // Check if a valid image URL exists.
    final bool hasImage = (imageUrl as String?)?.isNotEmpty ?? false;
    // Determine if the promotion switch can be changed.
    // It can be changed if:
    // 1. It's already promoted (to allow turning it OFF).
    // 2. It's not promoted, but it HAS an image (to allow turning it ON).
    final bool canChangePromotion = _isPromoted || hasImage;
    // <-- END MODIFICATION -->

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
                      labelText: OccasionSettingsStrings.title,
                    ),
                    validator: FormBuilderValidators.compose([
                      FormBuilderValidators.required(errorText: OccasionSettingsStrings.titleIsRequired),
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
                  Text(OccasionSettingsStrings.introImage),
                  const SizedBox(height: 8),
                  ImageArea(
                    enabled: isEditingEnabled,
                    hint: "(${OccasionSettingsStrings.imageRatioHint(
                      OccasionCard.kCardWidth.toString(),
                      OccasionCard.kCardHeight.toString(),
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
                        ToastHelper.Show(context, OccasionSettingsStrings.fileUploadedSuccess);
                      } catch (e) {
                        ToastHelper.Show(context, OccasionSettingsStrings.failedToUploadImage);
                      }
                      return null;
                    },
                    onRemove: _removeImage,
                  ),
                  const SizedBox(height: 16),
                  Text(OccasionSettingsStrings.description),
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
                      child: Text(OccasionSettingsStrings.editContent),
                    ),
                  ),
                  const SizedBox(height: 16),
                  if (AppConfig.isAppSupported)
                    SwitchListTile(
                      title: Row(
                        children: [
                          Expanded(child: Text(OccasionSettingsStrings.public)),
                          HelpWidget(
                              title: OccasionSettingsStrings.public,
                              content: OccasionSettingsStrings.publicHelp
                          )
                        ],
                      ),
                      value: _isOpen,
                      onChanged: isEditingEnabled ? (value) {
                        setState(() { _isOpen = value; });
                      } : null,
                    ),
                  if (AppConfig.isAppSupported)
                    const SizedBox(height: 16),
                  SwitchListTile(
                    title: Row(
                      children: [
                        Expanded(child: Text(OccasionSettingsStrings.hide)),
                        HelpWidget(
                          title: OccasionSettingsStrings.hide,
                          content: OccasionSettingsStrings.hideHelp,
                        ),
                      ],
                    ),
                    value: _isHidden,
                    onChanged: isEditingEnabled ? (value) {
                      setState(() { _isHidden = value; });
                    } : null,
                  ),
                  const SizedBox(height: 16),

                  SwitchListTile(
                    title: Row(
                      children: [
                        Expanded(child: Text(OccasionSettingsStrings.promoted)),
                        HelpWidget(
                          title: OccasionSettingsStrings.promoted,
                          content: OccasionSettingsStrings.promotedHelp,
                        ),
                      ],
                    ),
                    value: _isPromoted,
                    // <-- MODIFIED (Updated onChanged logic) -->
                    // Only allow changing the switch if:
                    // 1. Editing is enabled AND
                    // 2. canChangePromotion is true (meaning it's already ON, or it's OFF but has an image)
                    onChanged: isEditingEnabled && canChangePromotion ? (value) {
                      setState(() { _isPromoted = value; });
                    } : null,
                    // <-- END MODIFICATION -->
                  ),

                  const SizedBox(height: 16),
                  ExpansionTile(
                    title: Text(
                      OccasionSettingsStrings.advancedSettings,
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
                                  labelText: OccasionSettingsStrings.link,
                                ),
                                validator: FormBuilderValidators.compose([
                                  FormBuilderValidators.required(errorText: OccasionSettingsStrings.linkIsRequired),
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

                            TextFormField(
                              controller: _replyToEmailController,
                              enabled: isEditingEnabled,
                              decoration: InputDecoration(
                                labelText: OccasionSettingsStrings.labelReplyToEmail,
                                border: const OutlineInputBorder(),
                                helperText: OccasionSettingsStrings.helperReplyToEmail,
                                helperMaxLines: 3,
                              ),
                              keyboardType: TextInputType.emailAddress,
                              validator: FormBuilderValidators.compose([
                                FormBuilderValidators.email(errorText: OccasionSettingsStrings.validationEmailInvalid),
                              ]),
                            ),

                            const SizedBox(height: 16),

                            if (_allTimezones.isNotEmpty)
                              Autocomplete<String>(
                                initialValue: _selectedTimezone != null && _allTimezones.contains(_selectedTimezone)
                                    ? TextEditingValue(text: _selectedTimezone!)
                                    : null, // Use TextEditingValue for initialValue
                                optionsBuilder: (TextEditingValue textEditingValue) {
                                  if (!isEditingEnabled) {
                                    return const Iterable<String>.empty();
                                  }
                                  if (textEditingValue.text.isEmpty) {
                                    return _allTimezones.take(50); // Show some initial options
                                  }
                                  return _allTimezones.where((String option) {
                                    return option.toLowerCase().contains(textEditingValue.text.toLowerCase());
                                  });
                                },
                                onSelected: (String selection) {
                                  setState(() {
                                    _selectedTimezone = selection;
                                  });
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
                                      labelText: OccasionSettingsStrings.timezone,
                                      border: const OutlineInputBorder(),
                                      suffixIcon: fieldTextEditingController.text.isNotEmpty && isEditingEnabled
                                          ? IconButton(
                                        icon: const Icon(Icons.clear),
                                        onPressed: () {
                                          fieldTextEditingController.clear();
                                          setState(() {
                                            _selectedTimezone = null;
                                          });
                                        },
                                      )
                                          : null,
                                    ),
                                    validator: (value) {
                                      if (value == null || value.isEmpty) {
                                        return OccasionSettingsStrings.timezoneIsRequired;
                                      }
                                      if (!_allTimezones.contains(value)) {
                                        if (_selectedTimezone != value) {
                                          return OccasionSettingsStrings.invalidTimezone;
                                        }
                                      }
                                      if(_allTimezones.contains(value) && _selectedTimezone != value) {
                                        WidgetsBinding.instance.addPostFrameCallback((_) {
                                          if (mounted) {
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
                                            maxHeight: 300,
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
                                child: Text(OccasionSettingsStrings.timezonesLoading),
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
                            Text(OccasionSettingsStrings.features, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
                            const SizedBox(height: 8),
                            TextField(
                              controller: _featureSearchController,
                              enabled: isEditingEnabled,
                              decoration: InputDecoration(
                                labelText: OccasionSettingsStrings.searchFeatures,
                                prefixIcon: const Icon(Icons.search),
                                border: const OutlineInputBorder(),
                                suffixIcon: _featureSearchQuery.isNotEmpty && isEditingEnabled
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
                                setState(() { _featureSearchQuery = value; });
                              },
                            ),
                            const SizedBox(height: 16),
                            if (enabledFeatures.isNotEmpty) ...[
                              Text(OccasionSettingsStrings.enabledFeatures, style: const TextStyle(fontWeight: FontWeight.bold)),
                              const SizedBox(height: 8),
                              ...enabledFeatures.map((feature) =>
                                  FeatureForm(feature: feature, occasion: occasion!.id!)
                              ),
                            ],
                            if (disabledFeatures.isNotEmpty) ...[
                              const SizedBox(height: 16),
                              Text(OccasionSettingsStrings.otherFeatures, style: const TextStyle(fontWeight: FontWeight.bold)),
                              const SizedBox(height: 8),
                              ...disabledFeatures.map((feature) =>
                                  FeatureForm(feature: feature, occasion: occasion!.id!)
                              ),
                            ],
                            if (featuresToShow.isEmpty && _featureSearchQuery.isNotEmpty)
                              Padding(
                                padding: const EdgeInsets.all(8.0),
                                child: Text(OccasionSettingsStrings.noFeaturesFound),
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
                          OccasionSettingsStrings.deleteEvent,
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
                child: Text(CommonStrings.storno),
              ),
              const SizedBox(width: 16),
              ElevatedButton.icon(
                icon: _isSaving ? const SizedBox.shrink() : const Icon(Icons.save, size: 18),
                label: _isSaving
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                    : Text(CommonStrings.save),
                onPressed: _isSaving || !isEditingEnabled ? null : _saveSettings,
              ),
            ],
          ),
        ),
      ),
    );
  }
}