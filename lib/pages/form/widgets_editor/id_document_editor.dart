import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/pages/form/models/id_document_field_holder.dart';

class IdDocumentEditor {
  static String get _defaultExpiryDateLabelText => "Expiry Date".tr();

  static Widget buildIdDocumentReadOnly(BuildContext context, FormFieldModel field) {
    final data = field.data ?? {};
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    // Configuration Data
    final bool showExpiry = data[IdDocumentFieldHolder.metaShowExpiryDate] as bool? ?? false;
    final bool hasCustomLabel = data[IdDocumentFieldHolder.metaExpiryDateLabel]?.toString().trim().isNotEmpty == true;
    final String expiryDateLabel = hasCustomLabel
        ? data[IdDocumentFieldHolder.metaExpiryDateLabel]
        : _defaultExpiryDateLabelText;

    // Custom adaptive colors for a subtle look in both light and dark themes.
    final Color fillColor = isDark ? Colors.white.withOpacity(0.05) : Colors.black.withOpacity(0.035);
    final Color borderColor = isDark ? Colors.white.withOpacity(0.1) : Colors.black.withOpacity(0.08);
    final Color contentColor = theme.colorScheme.onSurface.withOpacity(0.7);

    // A helper widget to build the styled read-only text fields, avoiding code repetition.
    Widget buildReadOnlyTextField(String label, IconData icon) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 10.0),
        decoration: BoxDecoration(
          color: fillColor,
          borderRadius: BorderRadius.circular(8.0),
          border: Border.all(color: borderColor, width: 1.0),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              label,
              style: theme.textTheme.bodyMedium?.copyWith(color: contentColor),
              overflow: TextOverflow.ellipsis,
            ),
            Icon(icon, size: 18, color: contentColor),
          ],
        ),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // --- VISUAL PREVIEW ---
        buildReadOnlyTextField("ID Card / Passport Number".tr(), Icons.badge_outlined),
        if (showExpiry) ...[
          const SizedBox(height: 8),
          buildReadOnlyTextField("Expiry Date".tr(), Icons.calendar_today),
        ],

        // --- CUSTOM LABEL DISPLAY ---
        // The "Configuration" block is removed.
        // We now only show the custom label itself, if it has been set.
        if (showExpiry && hasCustomLabel)
          Padding(
            padding: const EdgeInsets.only(top: 10.0),
            child: Text.rich(
              TextSpan(
                  children: [
                    // Using the string from the editor part as requested for the label.
                    TextSpan(text: "${"Expiry Date Label".tr()}: "),
                    TextSpan(
                      text: '"$expiryDateLabel"',
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ]
              ),
              style: theme.textTheme.bodySmall?.copyWith(color: theme.colorScheme.onSurfaceVariant),
            ),
          ),
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