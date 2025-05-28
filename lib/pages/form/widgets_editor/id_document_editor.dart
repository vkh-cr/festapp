import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/pages/form/models/id_document_field_holder.dart';

class IdDocumentEditor {
  static String get _defaultExpiryDateLabelText => "Expiry Date".tr();

  static Widget buildIdDocumentReadOnly(BuildContext context, FormFieldModel field) {
    final data = field.data ?? {};
    final bool showExpiry = data[IdDocumentFieldHolder.metaShowExpiryDate] as bool? ?? false;
    final String expiryDateLabel = data[IdDocumentFieldHolder.metaExpiryDateLabel]?.toString() ?? _defaultExpiryDateLabelText;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("${"Show Expiry Date".tr()}: ${showExpiry ? 'Yes'.tr() : 'No'.tr()}"),
        if (showExpiry) Text("${"Expiry Date Label".tr()}: $expiryDateLabel"),
      ],
    );
  }

  static Widget buildIdDocumentEditor(BuildContext context, FormFieldModel field, int? occasionId) {
    field.data ??= {}; // Ensure data map exists

    String initialExpiryLabel = field.data![IdDocumentFieldHolder.metaExpiryDateLabel]?.toString() ?? "";
    bool initialShowExpiry = field.data![IdDocumentFieldHolder.metaShowExpiryDate] as bool? ?? false;

    // Ensure that field.data is populated with these initial/default values if they were missing.
    // This helps in persisting defaults if the editor for a new field is opened and saved without changes.
    field.data![IdDocumentFieldHolder.metaShowExpiryDate] ??= initialShowExpiry;
    if (initialShowExpiry) {
      field.data![IdDocumentFieldHolder.metaExpiryDateLabel] ??= initialExpiryLabel;
    }

    final TextEditingController expiryDateLabelController = TextEditingController(text: initialExpiryLabel);

    // Use a local state variable for the switch's current state within StatefulBuilder
    bool currentShowExpiryState = initialShowExpiry;

    return StatefulBuilder(
      builder: (BuildContext context, void Function(void Function()) setState) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Text("Show Expiry Date".tr()),
                Switch(
                  value: currentShowExpiryState,
                  onChanged: (value) {
                    setState(() {
                      currentShowExpiryState = value;
                      field.data![IdDocumentFieldHolder.metaShowExpiryDate] = value;
                      if (value) {
                        // If turning on, ensure expiryDateLabel in data & controller is populated
                        String? existingLabel = field.data![IdDocumentFieldHolder.metaExpiryDateLabel]?.toString() ?? "";
                        expiryDateLabelController.text = existingLabel;
                        field.data![IdDocumentFieldHolder.metaExpiryDateLabel] = existingLabel;
                      }
                    });
                  },
                ),
              ],
            ),
            if (currentShowExpiryState) ...[
              const SizedBox(height: 8),
              TextFormField(
                controller: expiryDateLabelController,
                decoration: InputDecoration(
                  labelText: "Expiry Date Label".tr(),
                ),
                onChanged: (value) {
                  var toSave = value.trim().isEmpty ? null : value;
                  field.data![IdDocumentFieldHolder.metaExpiryDateLabel] = toSave;
                },
              ),
            ],
          ],
        );
      },
    );
  }
}