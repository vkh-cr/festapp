// lib/pages/form/builders/birth_date_field_builder.dart

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/pages/form/models/birth_date_field_holder.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:intl/intl.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/widgets/HtmlView.dart';

import 'form_field_builders.dart';
import 'form_helper.dart';

/// A builder widget for a birth date field using [BirthDateFieldHolder].
///
/// This widget accepts an optional [eventDate] used to compute the recommended age range.
/// The recommended range is determined by the minimum and maximum ages provided in the field holder.
/// If [BirthDateFieldHolder.isHard] is true, the validator will prevent submission if the selected birth date
/// does not result in an age within the recommended range (displaying the translated error message)
/// and the date picker is limited to that range.
/// If false, the picker is not limited, and only a warning is shown (via an HTML view) if the selected date
/// results in an age outside the recommended range.
class BirthDateFieldBuilder extends StatefulWidget {
  final BirthDateFieldHolder fieldHolder;
  final DateTime? eventDate;
  final GlobalKey<FormBuilderState> formKey;

  const BirthDateFieldBuilder({
    Key? key,
    required this.fieldHolder,
    this.eventDate,
    required this.formKey,
  }) : super(key: key);

  @override
  _BirthDateFieldBuilderState createState() => _BirthDateFieldBuilderState();
}

class _BirthDateFieldBuilderState extends State<BirthDateFieldBuilder> {
  DateTime? selectedDate;
  String? warningMessage;

  @override
  Widget build(BuildContext context) {
    // Determine effective event date (if provided, else now)
    final effectiveEventDate = widget.eventDate ?? DateTime.now();

    // Extract allowed ages from the holder; default if not provided.
    final int effectiveMinAge = widget.fieldHolder.minYear ?? 12;
    final int effectiveMaxAge = widget.fieldHolder.maxYear ?? 100;

    // Calculate recommended birth date range based on the event date and age limits.
    final recommendedEarliestDate = DateTime(
      effectiveEventDate.year - effectiveMaxAge,
      effectiveEventDate.month,
      effectiveEventDate.day,
    );
    final recommendedLatestDate = DateTime(
      effectiveEventDate.year - effectiveMinAge,
      effectiveEventDate.month,
      effectiveEventDate.day,
    );

    // Determine picker limits:
    // If isHard is true, limit selection to the recommended range.
    // Otherwise, allow a wide range (e.g. from 1900 to today).
    final pickerFirstDate = widget.fieldHolder.isHard ? recommendedEarliestDate : DateTime(1900);
    final pickerLastDate = widget.fieldHolder.isHard ? recommendedLatestDate : DateTime.now();

    // Localized date format (using easy_localization).
    final dateFormat = DateFormat.yMd(context.locale.toString());
    FocusNode focusNode = FocusNode();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FormBuilderDateTimePicker(
          focusNode: focusNode,
          name: widget.fieldHolder.id.toString(),
          inputType: InputType.date,
          initialDatePickerMode: DatePickerMode.year,
          format: dateFormat,
          fieldHintText: dateFormat.pattern,
          decoration: InputDecoration(
            label: FormFieldBuilders.buildTitleWidget(widget.fieldHolder.title ?? "Birth Date".tr(), widget.fieldHolder.isRequired, context, focusNode: focusNode),
          ),
          helpText: "Birth Date".tr(),
          firstDate: pickerFirstDate,
          lastDate: pickerLastDate,
          // Use calendar entry mode.
          initialEntryMode: DatePickerEntryMode.calendar,
          // Apply our custom input formatter.
          inputFormatters: [LocaleDateInputFormatter(dateFormat: dateFormat)],
          validator: (value) {
            if (widget.fieldHolder.isRequired && value == null) {
              return FormBuilderValidators.required()(value);
            }
            if (value != null) {
              // Validate against the recommended range (expressed via age).
              if (value.isBefore(recommendedEarliestDate) || value.isAfter(recommendedLatestDate)) {
                if (widget.fieldHolder.isHard) {
                  // Hard validation: return translated error message.
                  return widget.fieldHolder.message.isNotEmpty
                      ? widget.fieldHolder.message.tr(namedArgs: {
                    "minAge": effectiveMinAge.toString(),
                    "maxAge": effectiveMaxAge.toString()
                  })
                      : "You must be between {minAge} and {maxAge} years old."
                      .tr(namedArgs: {
                    "minAge": effectiveMinAge.toString(),
                    "maxAge": effectiveMaxAge.toString()
                  });
                } else {
                  // For non-hard, show warning message (expressed via age) but allow submission.
                  setState(() {
                    warningMessage = widget.fieldHolder.message.isNotEmpty
                        ? widget.fieldHolder.message.tr(namedArgs: {
                      "minAge": effectiveMinAge.toString(),
                      "maxAge": effectiveMaxAge.toString()
                    })
                        : "Warning: Your age is not within the recommended range ({minAge}-{maxAge} years old)."
                        .tr(namedArgs: {
                      "minAge": effectiveMinAge.toString(),
                      "maxAge": effectiveMaxAge.toString()
                    });
                  });
                }
              } else {
                setState(() {
                  warningMessage = null;
                });
              }
            }
            return null;
          },
          onChanged: (value) {
            setState(() {
              selectedDate = value;
              // Trigger field validation manually.
              widget.formKey.currentState!
                  .fields[widget.fieldHolder.id.toString()]?.validate();
            });
          },
        ),
        if (warningMessage != null && !widget.fieldHolder.isHard)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: HtmlView(
              html: warningMessage!,
              color: ThemeConfig.warningColor(context),
              fontSize: 13.0 * FormHelper.fontSizeFactor,
              isSelectable: true,
            ),
          ),
      ],
    );
  }
}

/// A custom [TextInputFormatter] that allows only digits and the separator characters
/// present in the localized date pattern.
///
/// Instead of enforcing a rigid mask, this formatter simply filters out unwanted characters.
class LocaleDateInputFormatter extends TextInputFormatter {
  final String pattern;
  final Set<String> allowedSeparators;

  LocaleDateInputFormatter({required DateFormat dateFormat})
      : pattern = dateFormat.pattern!,
        allowedSeparators = dateFormat.pattern!
            .replaceAll(RegExp(r'[0-9a-zA-Z]'), '')
            .split('')
            .toSet();

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    final filtered = newValue.text.split('').where((ch) {
      return RegExp(r'\d').hasMatch(ch) || allowedSeparators.contains(ch);
    }).join();
    return newValue.copyWith(text: filtered);
  }
}
