import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';

class FormHelper{

  static List<Widget> getFormFields(dynamic fields) {
    List<Widget> toReturn = [];
    for(var field in fields["fields"]) {
      toReturn.add(getFormField(field));
    }
    return toReturn;
  }

  static Widget getFormField(dynamic field) {
    Widget toReturn = const SizedBox.shrink();
    switch (field["type"]) {
      case "name":
        return getSimpleTextField("name", "Name".tr(), true, [AutofillHints.givenName]);
      case "surname":
        return getSimpleTextField("surname", "Surname".tr(), true, [AutofillHints.familyName]);
      case "city":
        return getSimpleTextField("city", "City".tr(), false, [AutofillHints.addressCity]);
      case "email":
        return getEmailField();
    }
    return toReturn;
  }

  static FormBuilderTextField getSimpleTextField(String name, String title, [bool required = true, Iterable<String>? autofillHints]) {
    return FormBuilderTextField(
      autofillHints: autofillHints,
      name: name,
      decoration: InputDecoration(labelText: title),
      validator: required == true ? FormBuilderValidators.required() : null,
    );
  }

  static FormBuilderTextField getEmailField() {
    return FormBuilderTextField(
      autofillHints: const [AutofillHints.email],
      name: "email",
      decoration: InputDecoration(labelText: "E-mail".tr()),
      validator: FormBuilderValidators.compose([
        FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: "E-mail is not valid!".tr()),
      ])
    );
  }
}
