import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/pages/form/models/birth_date_field_holder.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/pages/utility/html_editor_page.dart';

import 'form_message_widget.dart';

class BirthDateEditor {
  static Widget buildBirthDateReadOnly(BuildContext context, FormFieldModel field) {
    final data = field.data ?? {};
    final int? minAgeInt = data[BirthDateFieldHolder.metaMinYear] is int
        ? data[BirthDateFieldHolder.metaMinYear] as int
        : int.tryParse(data[BirthDateFieldHolder.metaMinYear]?.toString() ?? "");
    final int? maxAgeInt = data[BirthDateFieldHolder.metaMaxYear] is int
        ? data[BirthDateFieldHolder.metaMaxYear] as int
        : int.tryParse(data[BirthDateFieldHolder.metaMaxYear]?.toString() ?? "");
    if (minAgeInt == 0 || maxAgeInt == 0) {
      return Container();
    }
    final String minAge = minAgeInt?.toString() ?? "N/A";
    final String maxAge = maxAgeInt?.toString() ?? "N/A";
    final String message = data[BirthDateFieldHolder.metaMessage]?.toString() ?? "";
    final String defaultWarning = "Warning: Your age is not within the recommended range ({minAge}-{maxAge} years old)."
        .tr(namedArgs: {"minAge": minAge, "maxAge": maxAge});

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("${'Min Age'.tr()}: $minAge"),
        Text("${'Max Age'.tr()}: $maxAge"),
        Text("${'Validation Mode:'.tr()} ${data[BirthDateFieldHolder.metaIsHard] == true ? 'Strict'.tr() : 'Lenient'.tr()}"),
        if (data[BirthDateFieldHolder.metaIsHard] != true)
          FormMessageWidget(
            message: message,
            defaultMessage: defaultWarning,
          ),
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
                if (currentMax < currentMin) {
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
                if (newMax < currentMin) {
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
