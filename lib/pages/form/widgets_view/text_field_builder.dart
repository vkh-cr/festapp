import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/pages/form/models/field_holder.dart';
import 'package:fstapp/pages/form/widgets_view/form_field_builders.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';

class TextFieldBuilder extends StatelessWidget {
  final FieldHolder fieldHolder;
  final Iterable<String> autofillHints;
  final bool isEmail;
  final bool isPhone;

  const TextFieldBuilder({
    super.key,
    required this.fieldHolder,
    this.autofillHints = const [],
    this.isEmail = false,
    this.isPhone = false,
  });

  @override
  Widget build(BuildContext context) {
    FocusNode focusNode = FocusNode();
    List<String? Function(String?)> validators = [];

    if (fieldHolder.isRequired) {
      validators.add(FormBuilderValidators.required());
    }

    if (isEmail) {
      validators.add(FormBuilderValidators.email(
        errorText: FormHelper.emailInvalidMessage(),
      ));
    }

    // Add phone number validator if required.
    if (isPhone) {
      validators.add(FormBuilderValidators.phoneNumber(regex: RegExp(r'^\+?[1-9]\d{9,12}$')));
    }

    return FormBuilderTextField(
      maxLines: null,
      name: fieldHolder.id.toString(),
      focusNode: focusNode,
      autofillHints: autofillHints,
      autovalidateMode: isEmail || isPhone
          ? AutovalidateMode.onUnfocus
          : AutovalidateMode.onUserInteraction,
      decoration: InputDecoration(
        label: FormFieldBuilders.buildTitleWidget(
          fieldHolder.title!,
          fieldHolder.isRequired,
          context,
          focusNode: focusNode,
        ),
      ),
      validator: validators.isNotEmpty
          ? FormBuilderValidators.compose(validators)
          : null,
    );
  }
}
