import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/pages/form/models/id_document_field_holder.dart';
import 'form_field_builders.dart';
import 'form_helper.dart';
import '../models/form_holder.dart';

class IdDocumentFieldBuilder extends StatefulWidget {
  final IdDocumentFieldHolder fieldHolder;
  final GlobalKey<FormBuilderState> formKey;
  final bool isCardDesign;

  const IdDocumentFieldBuilder({
    super.key,
    required this.fieldHolder,
    required this.formKey,
    required this.isCardDesign,
  });

  static Widget buildIdDocumentField({
    required BuildContext context,
    required IdDocumentFieldHolder fieldHolder,
    required GlobalKey<FormBuilderState> formKey,
    required FormHolder formHolder,
  }) {
    return IdDocumentFieldBuilder(
      fieldHolder: fieldHolder,
      formKey: formKey,
      isCardDesign: formHolder.isCardDesign,
    );
  }

  @override
  _IdDocumentFieldBuilderState createState() => _IdDocumentFieldBuilderState();
}

class _IdDocumentFieldBuilderState extends State<IdDocumentFieldBuilder> {
  late FocusNode _idNumberFocusNode;

  @override
  void initState() {
    super.initState();
    _idNumberFocusNode = FocusNode();
  }

  @override
  void dispose() {
    _idNumberFocusNode.dispose();
    super.dispose();
  }

  String get idNumberFieldName => widget.fieldHolder.id.toString();
  String get expiryDateFieldName => "${widget.fieldHolder.id}_expiry";

  @override
  Widget build(BuildContext context) {
    final dateFormat = DateFormat.yMd(context.locale.toString());

    // Determine the effective expiry date label
    final String effectiveExpiryDateLabel =
    widget.fieldHolder.expiryDateLabel?.trim().isEmpty ?? true
        ? 'Expiry Date'.tr()
        : widget.fieldHolder.expiryDateLabel!;

    Widget idNumberField = FormBuilderTextField(
      name: idNumberFieldName,
      focusNode: _idNumberFocusNode,
      decoration: InputDecoration(
        label: FormFieldBuilders.buildTitleWidget(
          widget.fieldHolder.title!,
          false,
          context,
          focusNode: _idNumberFocusNode,
        ),
      ),
      validator: FormBuilderValidators.compose([
        if (widget.fieldHolder.isRequired) FormBuilderValidators.required(),
      ]),
      valueTransformer: (value) => value?.trim(),
    );

    Widget? expiryDateField;
    if (widget.fieldHolder.showExpiryDate) {
      expiryDateField = FormBuilderDateTimePicker(
        name: expiryDateFieldName,
        inputType: InputType.date,
        format: dateFormat,
        fieldHintText: dateFormat.pattern,
        initialDatePickerMode: DatePickerMode.year,
        decoration: InputDecoration(
          label: FormFieldBuilders.buildTitleWidget(
            effectiveExpiryDateLabel, // Use the effective label here
            false,
            context,
          ),
          suffixIcon: const Icon(Icons.calendar_today),
        ),
        firstDate: DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day),
        validator: (value) {
          // If an expiry date is entered, it cannot be in the past.
          // If expiry date needs to be *required* when shown, add a separate bool in IdDocumentFieldHolder
          // and check it here with FormBuilderValidators.required().
          if (value != null) {
            final today = DateTime(DateTime.now().year, DateTime.now().month, DateTime.now().day);
            if (value.isBefore(today)) {
              return "Expiry date cannot be in the past.".tr();
            }
          }
          return null;
        },
      );
    }

    Widget fieldSetContent = Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        idNumberField,
        if (expiryDateField != null) ...[
          const SizedBox(height: 16),
          expiryDateField,
        ],
      ],
    );

    if (widget.isCardDesign || widget.fieldHolder.showExpiryDate) {
      bool idNumberHasError = widget.formKey.currentState?.fields[idNumberFieldName]?.hasError ?? false;
      bool expiryDateHasError = widget.fieldHolder.showExpiryDate && expiryDateField != null
          ? (widget.formKey.currentState?.fields[expiryDateFieldName]?.hasError ?? false)
          : false;
      bool overallHasError = idNumberHasError || expiryDateHasError;

      return FormHelper.buildCardWrapperDesign(
        context: context,
        fieldHolder: widget.fieldHolder,
        content: Padding(
          // Adjust padding if card wrapper adds its own, or if labels are part of the content.
          // If labels are part of the content, this padding might be 0.
          padding: const EdgeInsets.all(0),
          child: fieldSetContent,
        ),
        hasError: overallHasError,
      );
    }

    return fieldSetContent;
  }
}