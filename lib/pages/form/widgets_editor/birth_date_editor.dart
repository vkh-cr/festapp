import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/pages/form/models/birth_date_field_holder.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/pages/utility/HtmlEditorPage.dart';
import 'package:fstapp/widgets/HtmlView.dart';

class BirthDateEditor {
  static Widget buildBirthDateReadOnly(BuildContext context, FormFieldModel field) {
    final data = field.data ?? {};
    final maxAge = data[BirthDateFieldHolder.metaMaxYear]?.toString() ?? "N/A";
    final minAge = data[BirthDateFieldHolder.metaMinYear]?.toString() ?? "N/A";
    final isStrict = data[BirthDateFieldHolder.metaIsHard] == true;
    final message = data[BirthDateFieldHolder.metaMessage]?.toString() ?? "";
    final defaultWarning = "Warning: Your age is not within the recommended range ({minAge}-{maxAge} years old)."
        .tr(namedArgs: {"minAge": minAge, "maxAge": maxAge});
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text("Min Age: $minAge"),
        Text("Max Age: $maxAge"),
        Text("${"Validation Mode:".tr()} ${isStrict ? "Strict".tr() : "Lenient".tr()}"),
        if (!isStrict)
          Padding(
            padding: const EdgeInsets.only(top: 8),
            child: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey),
                borderRadius: BorderRadius.circular(4),
              ),
              child: HtmlView(
                fontSize: 14,
                html: message.isNotEmpty ? message : defaultWarning,
                isSelectable: false,
              ),
            ),
          ),
      ],
    );
  }

  static Widget buildBirthDateEditor(BuildContext context, FormFieldModel field) {
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
                labelText: "Min Age".tr(),
              ),
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              onChanged: (value) {
                field.data ??= {};
                // Update the min age value as integer if possible.
                field.data![BirthDateFieldHolder.metaMinYear] = int.tryParse(value) ?? value;
                // Also check if max age is now lower than the updated min age.
                final currentMax = int.tryParse(maxAgeController.text) ?? 0;
                final currentMin = int.tryParse(value) ?? 0;
                if (currentMax < currentMin) {
                  maxAgeError = "Max age cannot be lower than min age.".tr();
                } else {
                  maxAgeError = null;
                }
                // Trigger rebuild without breaking field focus.
                setState(() {});
              },
            ),
            const SizedBox(height: 8),
            // Second: Max Age Field
            TextFormField(
              controller: maxAgeController,
              decoration: InputDecoration(
                labelText: "Max Age".tr(),
                errorText: maxAgeError,
              ),
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              onChanged: (value) {
                field.data ??= {};
                final newMax = int.tryParse(value) ?? 0;
                // Retrieve current min value from the min age field.
                final currentMin = int.tryParse(minAgeController.text) ?? 0;
                if (newMax < currentMin) {
                  maxAgeError = "Max age cannot be lower than min age.".tr();
                } else {
                  maxAgeError = null;
                  field.data![BirthDateFieldHolder.metaMaxYear] = newMax;
                }
                // Trigger a rebuild so that the default warning in the HtmlView is updated.
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
              Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey),
                          borderRadius: BorderRadius.circular(4),
                        ),
                        child: HtmlView(
                          fontSize: 14,
                          html: currentMessage.isNotEmpty ? currentMessage : defaultWarning,
                          isSelectable: false,
                        ),
                      ),
                    ),
                    IconButton(
                      icon: const Icon(Icons.edit),
                      onPressed: () async {
                        final result = await RouterService.navigatePageInfo(
                          context,
                          HtmlEditorRoute(content: {HtmlEditorPage.parContent: currentMessage}),
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
                ),
              ),
          ],
        );
      },
    );
  }
}