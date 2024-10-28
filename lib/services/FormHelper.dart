import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';

class FormHelper {
  static String nameLabel() => "Name".tr();
  static String surnameLabel() => "Surname".tr();
  static String cityLabel() => "City".tr();
  static String emailLabel() => "E-mail".tr();
  static String sexLabel() => "I'm".tr();
  static String birthYearLabel() => "Birth year".tr();
  static String emailInvalidMessage() => "E-mail is not valid!".tr();
  static String maleLabel() => "Male".tr();
  static String femaleLabel() => "Female".tr();

  static List<Widget> getFormFields(dynamic fields) {
    List<Widget> toReturn = [];
    for (var field in fields["fields"]) {
      toReturn.add(getFormField(field));
    }
    return toReturn;
  }

  static Map<String, dynamic> getDataFromForm(GlobalKey<FormBuilderState> key, dynamic fields) {
    Map<String, dynamic> toReturn = {};
    for (var k in fields) {
      toReturn[k["type"]] = getValueFromTypeField(key, k["type"]);
    }
    return toReturn;
  }

  static dynamic getValueFromTypeField(GlobalKey<FormBuilderState> formKey, String type) {
    switch (type) {
      case "name":
        return formKey.currentState?.fields["name"]!.value.trim();
      case "surname":
        return formKey.currentState?.fields["surname"]!.value.trim();
      case "city":
        return formKey.currentState?.fields["city"]!.value.trim();
      case "email":
        return formKey.currentState?.fields["email"]!.value.trim();
      case "sex":
        var option = formKey.currentState?.fields["sex"]!.value as FormOptionModel;
        return option.code;
      case "birthYear":
        return int.parse(formKey.currentState?.fields["birthYear"]!.value);
    }
  }

  static Widget getFormField(dynamic field) {
    Widget toReturn = const SizedBox.shrink();
    switch (field["type"]) {
      case "name":
        return getSimpleTextField("name", nameLabel(), true, [AutofillHints.givenName]);
      case "surname":
        return getSimpleTextField("surname", surnameLabel(), true, [AutofillHints.familyName]);
      case "city":
        return getSimpleTextField("city", cityLabel(), false, [AutofillHints.addressCity]);
      case "email":
        return getEmailField();
      case "sex":
        return getSexField("sex", sexLabel());
      case "birthYear":
        return getBirthYear("birthYear", birthYearLabel());
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

  static FormBuilderRadioGroup getSexField(String name, String title, [bool required = true]) {
    var sexOptions = [
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[0], maleLabel())),
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[1], femaleLabel()))
    ];
    return FormBuilderRadioGroup(
      name: name,
      decoration: InputDecoration(labelText: title),
      validator: required == true ? FormBuilderValidators.required() : null,
      options: sexOptions,
    );
  }

  static FormBuilderTextField getEmailField() {
    return FormBuilderTextField(
      autofillHints: const [AutofillHints.email],
      name: "email",
      decoration: InputDecoration(labelText: emailLabel()),
      validator: FormBuilderValidators.compose([
        FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: emailInvalidMessage()),
      ]),
    );
  }

  static FormBuilderTextField getBirthYear(String name, String title, [bool required = true, Iterable<String>? autofillHints]) {
    return FormBuilderTextField(
      autofillHints: autofillHints,
      name: name,
      decoration: InputDecoration(labelText: title),
      validator: FormBuilderValidators.compose([
        FormBuilderValidators.required(),
        FormBuilderValidators.numeric(),
        FormBuilderValidators.min(1900),
        FormBuilderValidators.max(DateTime.now().year - 12),
      ]),
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
