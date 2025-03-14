import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModels/FormOptionProductModel.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';

class FieldHolder {
  static const String metaIsRequired = "is_required";
  static const String metaType = "type";
  static const String metaValue = "value";

  final int id;
  final bool isRequired;
  final String fieldType;
  dynamic defaultValue;

  String? title;
  String? description;

  FieldHolder({
    required this.fieldType,
    required this.isRequired,
    required this.id,
    this.defaultValue,
    this.title,
    this.description,
  });

  /// Retrieves the field's value from the provided [formKey].
  dynamic getValue(GlobalKey<FormBuilderState> formKey) =>
      FormHelper.getFieldData(formKey, this);

  Map<String, dynamic> toJson() {
    return {
      metaIsRequired: isRequired,
      metaType: fieldType,
      metaValue: defaultValue,
    };
  }

  @override
  String toString() => 'FieldHolder(type: $fieldType, value: $defaultValue)';
}

class OptionsFieldHolder extends FieldHolder {
  final List<FormOptionModel> options;

  OptionsFieldHolder({
    required super.fieldType,
    dynamic value,
    required this.options,
    required super.id,
    required super.title,
    required super.isRequired,
    super.description,
  }) : super(defaultValue: value);

  @override
  String toString() =>
      'OptionsFieldHolder(fieldType: $fieldType, title: $title)';
}

/// New class that extends OptionsFieldHolder to work with product options.
/// It holds a list of FormOptionProductModel instances.
class OptionsFieldProductHolder extends OptionsFieldHolder {
  OptionsFieldProductHolder({
    required super.fieldType,
    super.value,
    required List<FormOptionProductModel> productOptions,
    required super.id,
    required String super.title,
    required super.isRequired,
    super.description,
  }) : super(
    options: productOptions,
  );

  @override
  String toString() =>
      'OptionsFieldProductHolder(fieldType: $fieldType, title: $title, options: $options)';
}
