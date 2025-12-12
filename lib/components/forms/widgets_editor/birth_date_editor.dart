import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/forms/models/form_field_model.dart';
import 'package:fstapp/components/forms/models/holder_models/birth_date_field_holder.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/html/html_editor_page.dart';

import 'form_message_widget.dart';

class BirthDateEditor {
  static Widget buildBirthDateReadOnly(BuildContext context, FormFieldModel field) {
    final data = field.data ?? {};
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    // Configuration Data
    final int? minAgeInt = data[BirthDateFieldHolder.metaMinYear] is int
        ? data[BirthDateFieldHolder.metaMinYear] as int
        : int.tryParse(data[BirthDateFieldHolder.metaMinYear]?.toString() ?? "");
    final int? maxAgeInt = data[BirthDateFieldHolder.metaMaxYear] is int
        ? data[BirthDateFieldHolder.metaMaxYear] as int
        : int.tryParse(data[BirthDateFieldHolder.metaMaxYear]?.toString() ?? "");
    final bool showAgeLimits = (minAgeInt ?? 0) > 0 || (maxAgeInt ?? 0) > 0;
    final bool isStrict = data[BirthDateFieldHolder.metaIsHard] as bool? ?? false;
    final String customMessage = data[BirthDateFieldHolder.metaMessage]?.toString() ?? "";
    final bool hasCustomMessage = customMessage.trim().isNotEmpty;

    // Custom adaptive colors for a subtle look that works in both light and dark themes.
    final Color fillColor = isDark ? Colors.white.withOpacity(0.05) : Colors.black.withOpacity(0.035);
    final Color borderColor = isDark ? Colors.white.withOpacity(0.1) : Colors.black.withOpacity(0.08);
    final Color contentColor = theme.colorScheme.onSurface.withOpacity(0.7);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // 1. Read-only preview of the input field
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 10.0),
          decoration: BoxDecoration(
              color: fillColor,
              borderRadius: BorderRadius.circular(8.0),
              border: Border.all(color: borderColor, width: 1.0)
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Birth Date".tr(),
                style: theme.textTheme.bodyMedium?.copyWith(
                  color: contentColor,
                ),
              ),
              Icon(
                Icons.calendar_today,
                size: 18,
                color: contentColor,
              ),
            ],
          ),
        ),

        // 2. Display for constraints and validation settings.
        if (showAgeLimits) ...[
          const SizedBox(height: 12.0),
          Text(
            "Constraints".tr().toUpperCase(),
            style: theme.textTheme.labelSmall,
          ),
          const Divider(height: 6, thickness: 0.5),
          Wrap(
            spacing: 16.0,
            runSpacing: 2.0,
            children: [
              Text("${'Min Age'.tr()}: $minAgeInt", style: theme.textTheme.bodySmall),
              Text("${'Max Age'.tr()}: $maxAgeInt", style: theme.textTheme.bodySmall),
            ],
          ),
          const SizedBox(height: 10.0),

          // 3. Clear indicator for Strict Validation status.
          if (isStrict)
            SizedBox(
              height: 24,
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(Icons.lock_outline, size: 15, color: theme.colorScheme.primary),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text.rich(
                      TextSpan(children: [
                        TextSpan(text: "${'Validation Mode'.tr()}: "),
                        TextSpan(
                          text: "Strict".tr(),
                          style: TextStyle(fontWeight: FontWeight.bold, color: theme.colorScheme.primary),
                        ),
                      ]),
                      style: theme.textTheme.bodySmall,
                    ),
                  ),
                ],
              ),
            ),

          // 4. Display for the custom message when validation is lenient.
          if (!isStrict && hasCustomMessage)
            FormMessageWidget(
              message: customMessage,
              defaultMessage: "", // Default is not needed as we only show if a custom one exists.
            ),
        ],
      ],
    );
  }

  static Widget buildBirthDateEditor(BuildContext context, FormFieldModel field, int? occasionId) {
    final TextEditingController minAgeController = TextEditingController(
      text: field.data != null && field.data![BirthDateFieldHolder.metaMinYear] != null
          ? field.data![BirthDateFieldHolder.metaMinYear].toString()
          : "",
    );
    final TextEditingController maxAgeController = TextEditingController(
      text: field.data != null && field.data![BirthDateFieldHolder.metaMaxYear] != null
          ? field.data![BirthDateFieldHolder.metaMaxYear].toString()
          : "",
    );
    bool isStrict = field.data != null && field.data![BirthDateFieldHolder.metaIsHard] == true;
    String currentMessage = field.data != null && field.data![BirthDateFieldHolder.metaMessage] != null
        ? field.data![BirthDateFieldHolder.metaMessage].toString()
        : "";

    // We use a local variable to hold a possible error message for max age.
    String? maxAgeError;

    // Define a helper function to compute the default warning.
    String getDefaultWarning() {
      final minAge = field.data?[BirthDateFieldHolder.metaMinYear]?.toString() ?? "";
      final maxAge = field.data?[BirthDateFieldHolder.metaMaxYear]?.toString() ?? "";
      return "Warning: Your age is not within the recommended range ({minAge}-{maxAge} years old)."
          .tr(namedArgs: {"minAge": minAge, "maxAge": maxAge});
    }

    return StatefulBuilder(
      builder: (BuildContext context, void Function(void Function()) setState) {
        final defaultWarning = getDefaultWarning();
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // First: Min Age Field
            TextFormField(
              controller: minAgeController,
              decoration: InputDecoration(
                labelText: "${'Min Age'.tr()}:",
              ),
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              onChanged: (value) {
                field.data ??= {};
                field.data![BirthDateFieldHolder.metaMinYear] = int.tryParse(value) ?? value;
                final currentMax = int.tryParse(maxAgeController.text) ?? 0;
                final currentMin = int.tryParse(value) ?? 0;
                if (currentMax > 0 && currentMax < currentMin) {
                  maxAgeError = "Max age cannot be lower than min age.".tr();
                } else {
                  maxAgeError = null;
                }
                setState(() {});
              },
            ),
            const SizedBox(height: 8),
            // Second: Max Age Field
            TextFormField(
              controller: maxAgeController,
              decoration: InputDecoration(
                labelText: "${'Max Age'.tr()}:",
                errorText: maxAgeError,
              ),
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              onChanged: (value) {
                field.data ??= {};
                final newMax = int.tryParse(value) ?? 0;
                final currentMin = int.tryParse(minAgeController.text) ?? 0;
                if (newMax > 0 && newMax < currentMin) {
                  maxAgeError = "Max age cannot be lower than min age.".tr();
                } else {
                  maxAgeError = null;
                  field.data![BirthDateFieldHolder.metaMaxYear] = newMax;
                }
                setState(() {});
              },
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                Text("Strict Validation".tr()),
                Switch(
                  value: isStrict,
                  onChanged: (value) {
                    isStrict = value;
                    field.data ??= {};
                    field.data![BirthDateFieldHolder.metaIsHard] = value;
                    setState(() {});
                  },
                ),
              ],
            ),
            if (!isStrict)
              FormMessageWidget(
                message: currentMessage,
                defaultMessage: defaultWarning,
                isEditable: true,
                onEdit: () async {
                  final result = await RouterService.navigatePageInfo(
                    context,
                    HtmlEditorRoute(
                        content: {HtmlEditorPage.parContent: currentMessage},
                        occasionId: occasionId
                    ),
                  );
                  if (result != null) {
                    currentMessage = result as String;
                    field.data ??= {};
                    field.data![BirthDateFieldHolder.metaMessage] = currentMessage;
                    setState(() {});
                  }
                },
              ),
          ],
        );
      },
    );
  }
}