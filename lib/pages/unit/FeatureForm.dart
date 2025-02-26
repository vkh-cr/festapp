import 'dart:typed_data';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataServices/DbImages.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/widgets/ImageArea.dart';

class FeatureForm extends StatefulWidget {
  final Map<String, dynamic> feature;
  final int occasion;

  const FeatureForm({Key? key, required this.feature, required this.occasion})
      : super(key: key);

  @override
  _FeatureFormState createState() => _FeatureFormState();
}

class _FeatureFormState extends State<FeatureForm> {
  late bool isEnabled;
  TextEditingController? lightColorController;
  TextEditingController? darkColorController;
  // Removed backgroundController – use backgroundUrl instead.
  String? backgroundUrl;
  TextEditingController? companionsController;
  late bool useExternalForm;
  TextEditingController? externalFormLinkController;
  TextEditingController? externalPriceController;

  @override
  void initState() {
    super.initState();
    isEnabled = widget.feature[FeatureService.metaIsEnabled] ?? false;

    if (widget.feature[FeatureService.metaCode] == FeatureService.ticket) {
      widget.feature[FeatureService.ticketLightColor] ??= 'FFFFFF';
      widget.feature[FeatureService.ticketDarkColor] ??= '000000';
      backgroundUrl = widget.feature[FeatureService.ticketBackground];

      lightColorController = TextEditingController(
          text: widget.feature[FeatureService.ticketLightColor]);
      darkColorController = TextEditingController(
          text: widget.feature[FeatureService.ticketDarkColor]);
    } else if (widget.feature[FeatureService.metaCode] ==
        FeatureService.companions) {
      widget.feature[FeatureService.companionsMax] ??= 1;
      companionsController = TextEditingController(
          text: widget.feature[FeatureService.companionsMax].toString());
    }

    useExternalForm =
        widget.feature[FeatureService.formUseExternal] ?? false;
    externalFormLinkController = TextEditingController(
      text: widget.feature[FeatureService.formExternalLink] ?? '',
    );
    externalPriceController = TextEditingController(
      text: widget.feature[FeatureService.formExternalPrice] ?? '',
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
            widget.feature[FeatureService.ticketBackground] = "";
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
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.feature[FeatureService.metaCode]
                  ?.toString()
                  .toUpperCase() ??
                  'UNKNOWN',
            ),
            SwitchListTile(
              title: Text("Enabled".tr()),
              value: isEnabled,
              onChanged: (value) {
                setState(() {
                  isEnabled = value;
                  widget.feature[FeatureService.metaIsEnabled] = value;
                });
              },
            ),
            if (isEnabled) ..._buildFeatureFields(context),
          ],
        ),
      ),
    );
  }

  /// Builds additional fields based on the feature code.
  List<Widget> _buildFeatureFields(BuildContext context) {
    List<Widget> fields = [];

    if (widget.feature[FeatureService.metaCode] == FeatureService.ticket) {
      fields.add(
        TextFormField(
          controller: lightColorController,
          decoration: InputDecoration(
            labelText: "Background color".tr(),
          ),
          onSaved: (val) {
            widget.feature[FeatureService.ticketLightColor] = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 16));
      fields.add(
        TextFormField(
          controller: darkColorController,
          decoration: InputDecoration(
            labelText: "Font color".tr(),
          ),
          onSaved: (val) {
            widget.feature[FeatureService.ticketDarkColor] = val;
          },
        ),
      );
      fields.add(const SizedBox(height: 16));
      // Replace the background URL field with an ImageArea widget.
      fields.add(
        ImageArea(
          hint: "(1600x900 px)".tr(),
          imageUrl: backgroundUrl,
          onFileSelected: (file) async {
            Uint8List imageData = await file.readAsBytes();
            try {
              final publicUrl = await DbImages.uploadImage(
                  imageData, widget.occasion, null);
              setState(() {
                backgroundUrl = publicUrl;
                widget.feature[FeatureService.ticketBackground] = publicUrl;
              });
              ToastHelper.Show(
                  context, "File uploaded successfully.".tr());
            } catch (e) {
              ToastHelper.Show(context, "Failed to upload image.".tr());
            }
          },
          onRemove: _removeBackgroundImage,
        ),
      );
    } else if (widget.feature[FeatureService.metaCode] ==
        FeatureService.companions) {
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
            widget.feature[FeatureService.companionsMax] =
                int.tryParse(val ?? '1') ?? 1;
          },
        ),
      );
    } else if (widget.feature[FeatureService.metaCode] == FeatureService.form) {
      // External form option
      fields.add(const Divider());
      fields.add(
        SwitchListTile(
          title: Text("Use external form".tr()),
          value: useExternalForm,
          onChanged: (value) {
            setState(() {
              useExternalForm = value;
              widget.feature[FeatureService.formUseExternal] = value;
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
              helperText:
              "Reservation will be done via this external link.".tr(),
            ),
            onSaved: (val) {
              widget.feature[FeatureService.formExternalLink] = val;
            },
          ),
        );
        fields.add(const SizedBox(height: 16));
        fields.add(
          TextFormField(
            controller: externalPriceController,
            decoration: InputDecoration(
              labelText: "Price".tr(),
              helperText:
              "The price will be displayed on the events page.".tr(),
            ),
            onSaved: (val) {
              widget.feature[FeatureService.formExternalPrice] = val;
            },
          ),
        );
      }
    }

    // Add other feature-specific fields here if needed.
    return fields;
  }
}