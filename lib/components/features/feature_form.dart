import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/widgets/ImageArea.dart';
import 'package:fstapp/themeConfig.dart';

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
  TextEditingController? lightColorController;
  TextEditingController? darkColorController;
  String? backgroundUrl;
  TextEditingController? companionsController;
  late bool useExternalForm;
  TextEditingController? externalFormLinkController;
  TextEditingController? externalPriceController;
  TextEditingController? reserveButtonTitleController;

  // Controllers for MapFeature (Online Map Layer)
  TextEditingController? zoomController;
  TextEditingController? latController;
  TextEditingController? lngController;
  TextEditingController? mapLogoController;
  TextEditingController? mapTextController;
  TextEditingController? mapLogoLinkController;
  TextEditingController? mapTextLinkController;
  TextEditingController? mapLayerLinkController;

  // Controllers for MapFeature (Offline Map Layer Basic Properties)
  TextEditingController? offlineMapLogoController;
  TextEditingController? offlineMapTextController;
  TextEditingController? offlineMapLogoLinkController;
  TextEditingController? offlineMapTextLinkController;
  // (Offline Map Layer URL is hidden)

  // Controllers for MapFeature (Offline Map Layer Extra Fields)
  TextEditingController? mapOfflineMapPackageURLController;
  TextEditingController? mapOfflineMapStyleURLController;
  TextEditingController? mapOfflineMapLayerNameController;
  bool autoDownloadOfflineMap = false;

  // New controller for WorkshopsFeature startTime
  TextEditingController? startTimeController;

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature.isEnabled;

    if (widget.feature is TicketFeature) {
      final ticketFeature = widget.feature as TicketFeature;
      ticketFeature.ticketLightColor ??= 'FFFFFF';
      ticketFeature.ticketDarkColor ??= '000000';
      backgroundUrl = ticketFeature.ticketBackground;
      lightColorController = TextEditingController(text: ticketFeature.ticketLightColor);
      darkColorController = TextEditingController(text: ticketFeature.ticketDarkColor);
    } else if (widget.feature is CompanionsFeature) {
      final companionsFeature = widget.feature as CompanionsFeature;
      companionsFeature.companionsMax ??= 1;
      companionsController = TextEditingController(text: companionsFeature.companionsMax.toString());
    } else if (widget.feature is FormFeature) {
      final formFeature = widget.feature as FormFeature;
      useExternalForm = formFeature.formUseExternal ?? false;
      externalFormLinkController = TextEditingController(text: formFeature.formExternalLink ?? '');
      externalPriceController = TextEditingController(text: formFeature.formExternalPrice ?? '');
      reserveButtonTitleController = TextEditingController(text: formFeature.reserveButtonTitle ?? '');
    } else if (widget.feature is MapFeature) {
      final mapFeature = widget.feature as MapFeature;
      // Initialize zoom, lat and lng controllers with default values
      zoomController = TextEditingController(text: mapFeature.defaultMapZoom.toString());
      latController = TextEditingController(text: mapFeature.defaultMapLocation.lat.toString());
      lngController = TextEditingController(text: mapFeature.defaultMapLocation.lng.toString());

      // Online Map Layer controllers
      mapLogoController = TextEditingController(text: mapFeature.onlineMapLayer.logo);
      mapTextController = TextEditingController(text: mapFeature.onlineMapLayer.text);
      mapLogoLinkController = TextEditingController(text: mapFeature.onlineMapLayer.logoLink);
      mapTextLinkController = TextEditingController(text: mapFeature.onlineMapLayer.textLink);
      mapLayerLinkController = TextEditingController(text: mapFeature.onlineMapLayer.layerLink);

      // Offline Map Layer basic property controllers (using same titles as online)
      offlineMapLogoController = TextEditingController(text: mapFeature.offlineMapLayer.logo);
      offlineMapTextController = TextEditingController(text: mapFeature.offlineMapLayer.text);
      offlineMapLogoLinkController = TextEditingController(text: mapFeature.offlineMapLayer.logoLink);
      offlineMapTextLinkController = TextEditingController(text: mapFeature.offlineMapLayer.textLink);
      // Offline Map Layer URL is kept hidden.

      // Offline Map Layer extra field controllers
      mapOfflineMapPackageURLController =
          TextEditingController(text: mapFeature.offlineMapLayer.offlineMapPackageURL);
      mapOfflineMapStyleURLController =
          TextEditingController(text: mapFeature.offlineMapLayer.offlineMapStyleURL);
      mapOfflineMapLayerNameController =
          TextEditingController(text: mapFeature.offlineMapLayer.offlineMapLayerName);
      autoDownloadOfflineMap = mapFeature.offlineMapLayer.autoDownloadOfflineMap;
    } else if (widget.feature is WorkshopsFeature) {
      // Initialize with an empty string. The formatted value will be set in didChangeDependencies.
      startTimeController = TextEditingController(text: "");
    } else {
      useExternalForm = false;
    }
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.feature is WorkshopsFeature) {
      final workshopsFeature = widget.feature as WorkshopsFeature;
      if (workshopsFeature.startTime != null && startTimeController!.text.isEmpty) {
        startTimeController!.text = DateFormat.yMd(context.locale.toString()).add_jm().format(workshopsFeature.startTime!.toLocal());
      }
    }
  }

  @override
  void dispose() {
    lightColorController?.dispose();
    darkColorController?.dispose();
    companionsController?.dispose();
    externalFormLinkController?.dispose();
    externalPriceController?.dispose();
    reserveButtonTitleController?.dispose();
    zoomController?.dispose();
    latController?.dispose();
    lngController?.dispose();
    mapLogoController?.dispose();
    mapTextController?.dispose();
    mapLogoLinkController?.dispose();
    mapTextLinkController?.dispose();
    mapLayerLinkController?.dispose();
    offlineMapLogoController?.dispose();
    offlineMapTextController?.dispose();
    offlineMapLogoLinkController?.dispose();
    offlineMapTextLinkController?.dispose();
    mapOfflineMapPackageURLController?.dispose();
    mapOfflineMapStyleURLController?.dispose();
    mapOfflineMapLayerNameController?.dispose();
    startTimeController?.dispose();
    super.dispose();
  }

  Future<void> _removeBackgroundImage() async {
    if (backgroundUrl != null && backgroundUrl!.isNotEmpty) {
      final confirmation = await DialogHelper.showConfirmationDialogAsync(
        context,
        "Confirm removal".tr(),
        "Are you sure you want to delete this image?".tr(),
      );
      if (confirmation == true) {
        try {
          await DbImages.removeImage(backgroundUrl!);
          setState(() {
            backgroundUrl = "";
            if (widget.feature is TicketFeature) {
              (widget.feature as TicketFeature).ticketBackground = "";
            }
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
    List<Widget> fields = [];

    if (widget.feature is TicketFeature) {
      final ticketFeature = widget.feature as TicketFeature;
      fields.add(TextFormField(
        controller: lightColorController,
        decoration: InputDecoration(labelText: "Background color".tr()),
        onSaved: (val) => ticketFeature.ticketLightColor = val,
      ));
      fields.add(const SizedBox(height: 16));
      fields.add(TextFormField(
        controller: darkColorController,
        decoration: InputDecoration(labelText: "Font color".tr()),
        onSaved: (val) => ticketFeature.ticketDarkColor = val,
      ));
      fields.add(const SizedBox(height: 16));
      fields.add(ImageArea(
        hint: "(1600x900 px)".tr(),
        imageUrl: backgroundUrl,
        onFileSelected: (file) async {
          Uint8List imageData = await file.readAsBytes();
          try {
            final publicUrl = await DbImages.uploadImage(imageData, widget.occasion, null);
            setState(() {
              backgroundUrl = publicUrl;
              ticketFeature.ticketBackground = publicUrl;
            });
            ToastHelper.Show(context, "File uploaded successfully.".tr());
          } catch (e) {
            ToastHelper.Show(context, "Failed to upload image.".tr());
          }
        },
        onRemove: _removeBackgroundImage,
      ));
    } else if (widget.feature is CompanionsFeature) {
      final companionsFeature = widget.feature as CompanionsFeature;
      fields.add(TextFormField(
        controller: companionsController,
        decoration: InputDecoration(labelText: "Max".tr()),
        keyboardType: TextInputType.number,
        validator: (value) {
          if (value == null || value.isEmpty) return "Max Companions is required";
          final intValue = int.tryParse(value);
          if (intValue == null || intValue < 1) return "Enter a number greater than 0";
          return null;
        },
        onSaved: (val) => companionsFeature.companionsMax = int.tryParse(val ?? '1') ?? 1,
      ));
    } else if (widget.feature is FormFeature) {
      final formFeature = widget.feature as FormFeature;
      fields.add(const Divider());
      fields.add(SwitchListTile(
        title: Text("Use external form".tr()),
        value: useExternalForm,
        onChanged: (value) {
          setState(() {
            useExternalForm = value;
            formFeature.formUseExternal = value;
          });
        },
      ));
      if (useExternalForm) {
        fields.add(TextFormField(
          controller: externalFormLinkController,
          decoration: InputDecoration(
            labelText: "Reservation Link".tr(),
            helperText: "Reservation will be done via this external link.".tr(),
          ),
          onSaved: (val) => formFeature.formExternalLink = val,
        ));
        fields.add(const SizedBox(height: 16));
        fields.add(TextFormField(
          controller: externalPriceController,
          decoration: InputDecoration(
            labelText: "Price".tr(),
            helperText: "The price will be displayed on the events page.".tr(),
          ),
          onSaved: (val) => formFeature.formExternalPrice = val,
        ));
      }
      fields.add(const SizedBox(height: 16));
      fields.add(ExpansionTile(
        title: Text("Advanced Settings".tr()),
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: TextFormField(
              controller: reserveButtonTitleController,
              decoration: InputDecoration(labelText: "Reserve Button Title".tr()),
              onSaved: (val) => formFeature.reserveButtonTitle = val,
            ),
          ),
        ],
      ));
    } else if (widget.feature is MapFeature) {
      final mapFeature = widget.feature as MapFeature;
      // Map zoom field
      fields.add(TextFormField(
        controller: zoomController,
        decoration: InputDecoration(labelText: "Map Zoom".tr()),
        keyboardType: TextInputType.numberWithOptions(decimal: true),
        onSaved: (val) => mapFeature.defaultMapZoom = double.tryParse(val ?? "17") ?? 17,
      ));
      // Latitude and Longitude row
      fields.add(const SizedBox(height: 16));
      fields.add(Row(
        children: [
          Expanded(
            child: TextFormField(
              controller: latController,
              decoration: InputDecoration(labelText: "Latitude".tr()),
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              onSaved: (val) {
                double lat = double.tryParse(val ?? "") ?? mapFeature.defaultMapLocation.lat;
                mapFeature.defaultMapLocation = MapLocation(lat: lat, lng: mapFeature.defaultMapLocation.lng);
              },
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: TextFormField(
              controller: lngController,
              decoration: InputDecoration(labelText: "Longitude".tr()),
              keyboardType: TextInputType.numberWithOptions(decimal: true),
              onSaved: (val) {
                double lng = double.tryParse(val ?? "") ?? mapFeature.defaultMapLocation.lng;
                mapFeature.defaultMapLocation = MapLocation(lat: mapFeature.defaultMapLocation.lat, lng: lng);
              },
            ),
          ),
        ],
      ));
      // Online Map Layer Advanced Settings
      fields.add(const SizedBox(height: 16));
      fields.add(ExpansionTile(
        title: Text("Map Layer Settings".tr()),
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                TextFormField(
                  controller: mapLogoController,
                  decoration: InputDecoration(labelText: "Map Layer Logo".tr()),
                  onSaved: (val) => mapFeature.onlineMapLayer.logo = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapTextController,
                  decoration: InputDecoration(labelText: "Map Layer Text".tr()),
                  onSaved: (val) => mapFeature.onlineMapLayer.text = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapLogoLinkController,
                  decoration: InputDecoration(labelText: "Map Layer Logo Link".tr()),
                  onSaved: (val) => mapFeature.onlineMapLayer.logoLink = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapTextLinkController,
                  decoration: InputDecoration(labelText: "Map Layer Text Link".tr()),
                  onSaved: (val) => mapFeature.onlineMapLayer.textLink = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapLayerLinkController,
                  decoration: InputDecoration(labelText: "Map Layer URL".tr()),
                  onSaved: (val) => mapFeature.onlineMapLayer.layerLink = val ?? "",
                ),
              ],
            ),
          ),
        ],
      ));
      // Offline Map Layer Advanced Settings
      fields.add(const SizedBox(height: 16));
      fields.add(ExpansionTile(
        title: Text("Offline Map Layer Settings".tr()),
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Offline basic properties (using same titles as online)
                TextFormField(
                  controller: offlineMapLogoController,
                  decoration: InputDecoration(labelText: "Map Layer Logo".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.logo = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: offlineMapTextController,
                  decoration: InputDecoration(labelText: "Map Layer Text".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.text = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: offlineMapLogoLinkController,
                  decoration: InputDecoration(labelText: "Map Layer Logo Link".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.logoLink = val ?? "",
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: offlineMapTextLinkController,
                  decoration: InputDecoration(labelText: "Map Layer Text Link".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.textLink = val ?? "",
                ),
                const SizedBox(height: 16),
                // Extra offline settings (without showing offline map layer URL)
                SwitchListTile(
                  title: Text("Auto-download offline map".tr()),
                  value: autoDownloadOfflineMap,
                  onChanged: (value) {
                    setState(() {
                      autoDownloadOfflineMap = value;
                      mapFeature.offlineMapLayer.autoDownloadOfflineMap = value;
                    });
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapOfflineMapPackageURLController,
                  decoration: InputDecoration(labelText: "Offline Map Package URL".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.offlineMapPackageURL = val ?? "",
                  validator: (value) {
                    final package = mapOfflineMapPackageURLController?.text.trim() ?? "";
                    final style = mapOfflineMapStyleURLController?.text.trim() ?? "";
                    final layer = mapOfflineMapLayerNameController?.text.trim() ?? "";
                    if ((package.isNotEmpty || style.isNotEmpty || layer.isNotEmpty) &&
                        (package.isEmpty || style.isEmpty || layer.isEmpty)) {
                      return "Fill all offline fields or leave all empty.".tr();
                    }
                    if (autoDownloadOfflineMap && package.isEmpty) {
                      return "All offline fields are required when offline maps are enabled.".tr();
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapOfflineMapStyleURLController,
                  decoration: InputDecoration(labelText: "Offline Map Style URL".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.offlineMapStyleURL = val ?? "",
                  validator: (value) {
                    final package = mapOfflineMapPackageURLController?.text.trim() ?? "";
                    final style = mapOfflineMapStyleURLController?.text.trim() ?? "";
                    final layer = mapOfflineMapLayerNameController?.text.trim() ?? "";
                    if ((package.isNotEmpty || style.isNotEmpty || layer.isNotEmpty) &&
                        (package.isEmpty || style.isEmpty || layer.isEmpty)) {
                      return "Fill all offline fields or leave all empty.".tr();
                    }
                    if (autoDownloadOfflineMap && style.isEmpty) {
                      return "All offline fields are required when offline maps are enabled.".tr();
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 8),
                TextFormField(
                  controller: mapOfflineMapLayerNameController,
                  decoration: InputDecoration(labelText: "Offline Map Layer Name".tr()),
                  onSaved: (val) => mapFeature.offlineMapLayer.offlineMapLayerName = val ?? "",
                  validator: (value) {
                    final package = mapOfflineMapPackageURLController?.text.trim() ?? "";
                    final style = mapOfflineMapStyleURLController?.text.trim() ?? "";
                    final layer = mapOfflineMapLayerNameController?.text.trim() ?? "";
                    if ((package.isNotEmpty || style.isNotEmpty || layer.isNotEmpty) &&
                        (package.isEmpty || style.isEmpty || layer.isEmpty)) {
                      return "Fill all offline fields or leave all empty.".tr();
                    }
                    if (autoDownloadOfflineMap && layer.isEmpty) {
                      return "All offline fields are required when offline maps are enabled.".tr();
                    }
                    return null;
                  },
                ),
              ],
            ),
          ),
        ],
      ));
    } else if (widget.feature is WorkshopsFeature) {
      final workshopsFeature = widget.feature as WorkshopsFeature;
      fields.add(
        TextFormField(
          controller: startTimeController,
          decoration: InputDecoration(
            labelText: "Workshop Registration Start Time".tr(),
            hintText: "Select start time".tr(),
          ),
          readOnly: true,
          onTap: () async {
            final initialLocal = workshopsFeature.startTime?.toLocal() ?? DateTime.now();
            DateTime? date = await showDatePicker(
              context: context,
              initialDate: initialLocal,
              firstDate: DateTime(2000),
              lastDate: DateTime(2100),
              locale: context.locale,
            );
            if (date != null) {
              TimeOfDay? time = await showTimePicker(
                context: context,
                initialTime: TimeOfDay.fromDateTime(initialLocal),
              );
              if (time != null) {
                final selectedLocal = DateTime(
                  date.year,
                  date.month,
                  date.day,
                  time.hour,
                  time.minute,
                );
                final dateFormat = DateFormat.yMd(context.locale.toString()).add_jm();
                final formattedTime = dateFormat.format(selectedLocal);
                print('Selected time: $formattedTime');  // Debug print
                setState(() {
                  startTimeController!.text = formattedTime;
                });
              }
            }
          },
          onSaved: (val) {
            if (val != null && val.isNotEmpty) {
              final dateFormat = DateFormat.yMd(context.locale.toString()).add_jm();
              final parsedLocal = dateFormat.parse(val);
              workshopsFeature.startTime = parsedLocal.toUtc();
            }
          },
        ),
      );
    }

    return fields;
  }
}