// lib/pages/form/models/field_holder.dart

import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
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
    required int id,
    required String title,
    required bool isRequired,
  }) : super(
    defaultValue: value,
    isRequired: isRequired,
    title: title,
    id: id,
  );

  @override
  String toString() =>
      'OptionsFieldHolder(fieldType: $fieldType, title: $title)';
}
