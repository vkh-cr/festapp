// lib/pages/form/models/birth_date_field_holder.dart

import 'field_holder.dart';

class BirthDateFieldHolder extends FieldHolder {
  static const String metaMaxYear = "max_year";
  static const String metaMinYear = "min_year";
  static const String metaIsHard = "is_hard";
  static const String metaMessage = "message";

  final int? maxYear;
  final int? minYear;
  final bool isHard;
  final String message;

  BirthDateFieldHolder({
    required int id,
    required String fieldType,
    required bool isRequired,
    dynamic defaultValue,
    String? title,
    String? description,
    this.maxYear,
    this.minYear,
    this.isHard = false,
    this.message = "",
  }) : super(
    id: id,
    fieldType: fieldType,
    isRequired: isRequired,
    defaultValue: defaultValue,
    title: title,
    description: description,
  );

  @override
  Map<String, dynamic> toJson() {
    return super.toJson()
      ..addAll({
        metaMaxYear: maxYear,
        metaMinYear: minYear,
        metaIsHard: isHard,
        metaMessage: message,
      });
  }

  @override
  String toString() =>
      'BirthDateFieldHolder(fieldType: $fieldType, maxYear: $maxYear, minYear: $minYear, isHard: $isHard, message: $message, defaultValue: $defaultValue)';
}
