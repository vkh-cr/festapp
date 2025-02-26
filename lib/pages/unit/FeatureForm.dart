import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/services/features/Feature.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/features/FeatureMetadata.dart';
import 'package:fstapp/widgets/ImageArea.dart';

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

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature.isEnabled;

    if (widget.feature.code == FeatureConstants.ticket) {
      widget.feature.ticketLightColor ??= 'FFFFFF';
      widget.feature.ticketDarkColor ??= '000000';
      backgroundUrl = widget.feature.ticketBackground;

      lightColorController =
          TextEditingController(text: widget.feature.ticketLightColor);
      darkColorController =
          TextEditingController(text: widget.feature.ticketDarkColor);
    } else if (widget.feature.code == FeatureConstants.companions) {
      widget.feature.companionsMax ??= 1;
      companionsController =
          TextEditingController(text: widget.feature.companionsMax.toString());
    }

    useExternalForm = widget.feature.formUseExternal ?? false;
    externalFormLinkController = TextEditingController(
      text: widget.feature.formExternalLink ?? '',
    );
    externalPriceController = TextEditingController(
      text: widget.feature.formExternalPrice ?? '',
    );
  }

  @override
  void dispose() {
    lightColorController?.dispose();
    darkColorController?.dispose();
    companionsController?.dispose();
    externalFormLinkController?.dispose();
    externalPriceController?.dispose();
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
            widget.feature.ticketBackground = "";
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
      margin: const EdgeInsets.symmetric(vertical: 8.0),
      child: Padding(
        padding: const EdgeInsets.all(8.0), // reduced padding for a compact look
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ListTile(
              contentPadding: EdgeInsets.zero,
              title: Text(
                FeatureMetadata.getTitle(widget.feature.code),
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
              subtitle: Text(
                FeatureMetadata.getDescription(widget.feature.code),
                style: const TextStyle(fontSize: 13),
              ),
              trailing: Switch(
                value: isEnabled,
                onChanged: (value) {
                  setState(() {
                    isEnabled = value;
                    widget.feature.isEnabled = value;
                  });
                },
              ),
            ),
            if (isEnabled)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                child: Column(
                  children: _buildFeatureFields(context),
                ),
              ),
          ],
        ),
      ),
    );
  }

  /// Builds additional fields based on the feature type.
  List<Widget> _buildFeatureFields(BuildContext context) {
    List<Widget> fields = [];

    if (widget.feature.code == FeatureConstants.ticket) {
      fields.add(
        TextFormField(
          controller: lightColorController,
          decoration: InputDecoration(
            labelText: "Background color".tr(),
          ),
          onSaved: (val) {
            widget.feature.ticketLightColor = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 8));
      fields.add(
        TextFormField(
          controller: darkColorController,
          decoration: InputDecoration(
            labelText: "Font color".tr(),
          ),
          onSaved: (val) {
            widget.feature.ticketDarkColor = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 8));
      fields.add(
        ImageArea(
          hint: "(1600x900 px)".tr(),
          imageUrl: backgroundUrl,
          onFileSelected: (file) async {
            Uint8List imageData = await file.readAsBytes();
            try {
              final publicUrl =
              await DbImages.uploadImage(imageData, widget.occasion, null);
              setState(() {
                backgroundUrl = publicUrl;
                widget.feature.ticketBackground = publicUrl;
              });
              ToastHelper.Show(context, "File uploaded successfully.".tr());
            } catch (e) {
              ToastHelper.Show(context, "Failed to upload image.".tr());
            }
          },
          onRemove: _removeBackgroundImage,
        ),
      );
    } else if (widget.feature.code == FeatureConstants.companions) {
      fields.add(
        TextFormField(
          controller: companionsController,
          decoration: InputDecoration(
            labelText: "Max",
          ),
          keyboardType: TextInputType.number,
          validator: (value) {
            if (value == null || value.isEmpty) {
              return "Max Companions is required";
            }
            final intValue = int.tryParse(value);
            if (intValue == null || intValue < 1) {
              return "Enter a number greater than 0";
            }
            return null;
          },
          onSaved: (val) {
            widget.feature.companionsMax =
                int.tryParse(val ?? '1') ?? 1;
          },
        ),
      );
    } else if (widget.feature.code == FeatureConstants.form) {
      fields.add(const Divider());
      fields.add(
        SwitchListTile(
          dense: true,
          contentPadding: EdgeInsets.zero,
          title: Text("Use external form".tr()),
          value: useExternalForm,
          onChanged: (value) {
            setState(() {
              useExternalForm = value;
              widget.feature.formUseExternal = value;
            });
          },
        ),
      );
      if (useExternalForm) {
        fields.add(
          TextFormField(
            controller: externalFormLinkController,
            decoration: InputDecoration(
              labelText: "Reservation Link".tr(),
              helperText: "Reservation will be done via this external link.".tr(),
            ),
            onSaved: (val) {
              widget.feature.formExternalLink = val;
            },
          ),
        );
        fields.add(const SizedBox(height: 8));
        fields.add(
          TextFormField(
            controller: externalPriceController,
            decoration: InputDecoration(
              labelText: "Price".tr(),
              helperText: "The price will be displayed on the events page.".tr(),
            ),
            onSaved: (val) {
              widget.feature.formExternalPrice = val;
            },
          ),
        );
      }
    }

    // Add additional feature-specific fields as needed.
    return fields;
  }
}
