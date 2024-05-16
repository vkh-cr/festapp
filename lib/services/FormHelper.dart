import 'package:easy_localization/easy_localization.dart';
import 'package:festapp/models/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
//import 'package:form_builder_validators/form_builder_validators.dart';

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
      case "sex":
        return getSexField("sex", "I'm");
      case "birthYear":
        return getBirthYear("birthYear", "Year".tr());
    }
    return toReturn;
  }

  static FormBuilderTextField getSimpleTextField(String name, String title, [bool required = true, Iterable<String>? autofillHints]) {
    return FormBuilderTextField(
      autofillHints: autofillHints,
      name: name,
      decoration: InputDecoration(labelText: title),
      //validator: required == true ? FormBuilderValidators.required() : null,
    );
  }

  static FormBuilderRadioGroup getSexField(String name, String title, [bool required = true]) {
    var sexOptions = [
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[0], "Male".tr())),
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[1], "Female".tr()))
    ];
    return FormBuilderRadioGroup(
      name: name,
      decoration: InputDecoration(labelText: title),
      //validator: required == true ? FormBuilderValidators.required() : null,
      options: sexOptions,
    );
  }

  static FormBuilderTextField getEmailField() {
    return FormBuilderTextField(
      autofillHints: const [AutofillHints.email],
      name: "email",
      decoration: InputDecoration(labelText: "E-mail".tr()),
      // validator: FormBuilderValidators.compose([
      //   FormBuilderValidators.required(),
      //   FormBuilderValidators.email(errorText: "E-mail is not valid!".tr()),
      // ])
    );
  }

  static FormBuilderTextField getBirthYear(String name, String title, [bool required = true, Iterable<String>? autofillHints]) {
    return FormBuilderTextField(
      autofillHints: autofillHints,
      name: name,
      decoration: InputDecoration(labelText: title),
      // validator: FormBuilderValidators.compose([
      //   FormBuilderValidators.numeric(),
      //   FormBuilderValidators.min(1900),
      //   FormBuilderValidators.max(DateTime.now().year-12),
      // ]),
    );
  }
}

class FormOptionModel {
  FormOptionModel(this.code, this.name);
  String name;
  String code;
  @override
  String toString() {
    return name;
  }
}
