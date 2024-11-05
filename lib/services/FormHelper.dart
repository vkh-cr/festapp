import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';

class FormHelper {
  // Field Type Constants
  static const String fieldTypeName = "name";
  static const String fieldTypeSurname = "surname";
  static const String fieldTypeCity = "city";
  static const String fieldTypeEmail = "email";
  static const String fieldTypeSex = "sex";
  static const String fieldTypeBirthYear = "birth_year";

  // Field Attribute Constants
  static const String IS_REQUIRED = "is_required";

  // Labels and messages
  static String nameLabel() => "Name".tr();
  static String surnameLabel() => "Surname".tr();
  static String cityLabel() => "City".tr();
  static String emailLabel() => "E-mail".tr();
  static String sexLabel() => "I'm".tr();
  static String birthYearLabel() => "Birth year".tr();
  static String emailInvalidMessage() => "E-mail is not valid!".tr();
  static String maleLabel() => "Male".tr();
  static String femaleLabel() => "Female".tr();

  // Public method to generate form fields from configuration
  static List<Widget> getFormFields(dynamic fields) {
    return fields.map<Widget>((field) => createFormField(field)).toList();
  }

  // Retrieve form data by iterating over defined fields
  static Map<String, dynamic> getDataFromForm(GlobalKey<FormBuilderState> key, dynamic fields) {
    Map<String, dynamic> toReturn = {};
    for (var k in fields) {
      toReturn[k["type"]] = getFieldData(key, k["type"]);
    }
    return toReturn;
  }

  // Determine the correct data from the form based on type
  static dynamic getFieldData(GlobalKey<FormBuilderState> formKey, String fieldType) {
    var fieldValue = formKey.currentState?.fields[fieldType]?.value;
    if (fieldType == fieldTypeSex) {
      if(fieldValue == null){
        return null;
      }
      return (fieldValue as FormOptionModel).code;
    } else if (fieldType == fieldTypeBirthYear) {
      return (fieldValue != null && fieldValue.isNotEmpty) ? int.tryParse(fieldValue) : null;
    }
    return fieldValue?.trim();
  }

  // Create individual form field widget based on configuration
  static Widget createFormField(Map<String, dynamic> field) {
    final bool isRequiredField = field[IS_REQUIRED] ?? false;
    switch (field["type"]) {
      case fieldTypeName:
        return buildTextField(fieldTypeName, nameLabel(), isRequiredField, [AutofillHints.givenName]);
      case fieldTypeSurname:
        return buildTextField(fieldTypeSurname, surnameLabel(), isRequiredField, [AutofillHints.familyName]);
      case fieldTypeCity:
        return buildTextField(fieldTypeCity, cityLabel(), isRequiredField, [AutofillHints.addressCity]);
      case fieldTypeEmail:
        return buildEmailField(isRequiredField);
      case fieldTypeSex:
        return buildRadioField(fieldTypeSex, sexLabel(), isRequiredField);
      case fieldTypeBirthYear:
        return buildBirthYearField(fieldTypeBirthYear, birthYearLabel(), isRequiredField);
      default:
        return const SizedBox.shrink();
    }
  }

  // Build a simple text field with optional validation
  static FormBuilderTextField buildTextField(String name, String label, bool isRequired, [List<String>? autofillHints]) {
    return FormBuilderTextField(
      name: name,
      autofillHints: autofillHints,
      decoration: InputDecoration(labelText: label),
      validator: isRequired ? FormBuilderValidators.required() : null,
    );
  }

  // Build an email field with validation for format and required status
  static FormBuilderTextField buildEmailField(bool isRequired) {
    return FormBuilderTextField(
      name: fieldTypeEmail,
      autofillHints: [AutofillHints.email],
      decoration: InputDecoration(labelText: emailLabel()),
      validator: FormBuilderValidators.compose([
        if (isRequired) FormBuilderValidators.required(),
        FormBuilderValidators.email(errorText: emailInvalidMessage()),
      ]),
    );
  }

  // Build a radio group for selecting sex
  static FormBuilderRadioGroup buildRadioField(String name, String label, bool isRequired) {
    var options = [
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[0], maleLabel())),
      FormBuilderFieldOption(value: FormOptionModel(UserInfoModel.sexes[1], femaleLabel()))
    ];
    return FormBuilderRadioGroup(
      name: name,
      decoration: InputDecoration(labelText: label),
      validator: isRequired ? FormBuilderValidators.required() : null,
      options: options,
    );
  }

  static FormBuilderTextField buildBirthYearField(String name, String label, bool isRequired) {
    return FormBuilderTextField(
      name: name,
      decoration: InputDecoration(labelText: label),
      validator: FormBuilderValidators.compose([
        if (isRequired) FormBuilderValidators.required(),
        // Allow empty for optional field; validate only if non-empty
            (value) {
          if (value == null || value.isEmpty) {
            return null;
          }
          if (int.tryParse(value) == null) {
            return NumericValidator().translatedErrorText; // uses default numeric error message
          }
          final numericValue = int.parse(value);
          if (numericValue < 1900 || numericValue > DateTime.now().year - 12) {
            return RangeValidator(DateTime.now().year - 12, 1900).translatedErrorText;
          }
          return null;
        },
      ]),
      keyboardType: TextInputType.number,
    );
  }
}

class FormOptionModel {
  FormOptionModel(this.code, this.name);
  final String name;
  final String code;

  @override
  String toString() => name;
}