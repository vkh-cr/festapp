// ticket_feature.dart
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_services/db_images.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/image_compression_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/widgets/image_area.dart';
import 'feature.dart';
import 'feature_constants.dart';

/// Feature for tickets with extra UI color fields.
class TicketFeature extends Feature {
  String? ticketLightColor;
  String? ticketDarkColor;
  String? ticketBackground;
  String? ticketType;

  TicketFeature({
    required super.code,
    super.isEnabled,
    super.title,
    super.description,
    this.ticketLightColor,
    this.ticketDarkColor,
    this.ticketBackground,
    this.ticketType,
  });

  factory TicketFeature.fromJson(Map<String, dynamic> json) {
    return TicketFeature(
      code: json[FeatureConstants.metaCode],
      isEnabled: json[FeatureConstants.metaIsEnabled] ?? false,
      ticketLightColor: json[FeatureConstants.ticketLightColor],
      ticketDarkColor: json[FeatureConstants.ticketDarkColor],
      ticketBackground: json[FeatureConstants.ticketBackground],
      ticketType: json[FeatureConstants.ticketType],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    final data = {
      FeatureConstants.metaCode: code,
      FeatureConstants.metaIsEnabled: isEnabled,
    };
    if (ticketLightColor != null) data[FeatureConstants.ticketLightColor] = ticketLightColor!;
    if (ticketDarkColor  != null) data[FeatureConstants.ticketDarkColor]  = ticketDarkColor!;
    if (ticketBackground != null) data[FeatureConstants.ticketBackground] = ticketBackground!;
    if (ticketType       != null) data[FeatureConstants.ticketType]       = ticketType!;
    return data;
  }

  /// Builds the ticket UI block.
  /// will need to be updated to include `occasionId` in this method's signature.
  @override
  Widget buildFormField(BuildContext context) {
    return StatefulBuilder(builder: (ctx, setLocal) {
      final lightCtrl = TextEditingController(text: ticketLightColor ?? 'FFFFFF');
      final darkCtrl  = TextEditingController(text: ticketDarkColor  ?? '000000');

      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          DropdownButtonFormField<String>(
            value: ticketType ?? 'named',
            decoration: InputDecoration(labelText: 'Ticket Type'.tr()),
            items: ['named','wide']
                .map((v) => DropdownMenuItem(value: v, child: Text(v)))
                .toList(),
            onChanged: (val) => setLocal(() {
              ticketType = val;
            }),
            onSaved: (val) => ticketType = val,
          ),

          if (ticketType == 'wide') ...[
            const SizedBox(height: 16),
            TextFormField(
              controller: lightCtrl,
              decoration: InputDecoration(labelText: 'Background color'.tr()),
              onSaved: (val) => ticketLightColor = val,
            ),
            const SizedBox(height: 16),
            TextFormField(
              controller: darkCtrl,
              decoration: InputDecoration(labelText: 'Font color'.tr()),
              onSaved: (val) => ticketDarkColor = val,
            ),
            const SizedBox(height: 16),
            ImageArea(
              hint: '(1600x900 px)'.tr(),
              imageUrl: ticketBackground,
              onFileSelected: (file) async {
                try {
                  final bytes = await file.readAsBytes();
                  var compressedImageData = await ImageCompressionHelper.compress(bytes, 1600);
                  final url = await DbImages.uploadImage(compressedImageData, RightsService.currentOccasionId(), null);
                  setLocal(() => ticketBackground = url);
                  ToastHelper.Show(context, 'File uploaded successfully.'.tr());
                } catch (e) {
                  ToastHelper.Show(context, "Failed to upload image.".tr());
                }
              },
              onRemove: () async {
                final imageUrl = ticketBackground;
                if (imageUrl != null && imageUrl.isNotEmpty) {
                  final confirmation = await DialogHelper.showConfirmationDialog(
                    context,
                    "Confirm removal".tr(),
                    "Are you sure you want to delete this image?".tr(),
                  );
                  if (confirmation == true) {
                    try {
                      await DbImages.removeImage(imageUrl);
                      setLocal(() => ticketBackground = null);
                      ToastHelper.Show(context, "Image removed successfully.".tr());
                    } catch (e) {
                      ToastHelper.Show(context, "Failed to remove image.".tr());
                    }
                  }
                }
              },
            ),
          ],
        ],
      );
    });
  }
}