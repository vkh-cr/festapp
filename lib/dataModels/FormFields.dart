import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';

class FieldHolder {
  static const String metaIsRequired = "is_required";
  static const String metaType = "type";
  static const String metaValue = "value";

  final bool isRequired;
  final String fieldType;
  dynamic value;

  FieldHolder({
    required this.fieldType,
    required this.isRequired,
    this.value,
  });

  factory FieldHolder.fromJson(Map<String, dynamic> json) {
    return FieldHolder(
      isRequired: json[metaIsRequired] ?? false,
      fieldType: json[metaType],
      value: json[metaValue],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      metaIsRequired: isRequired,
      metaType: fieldType,
      metaValue: value,
    };
  }

  @override
  String toString() => 'FieldHolder(type: $fieldType, value: $value)';
}

class OptionsFieldHolder extends FieldHolder {
  static const String metaLabel = "label";
  static const String metaOptionsType = "optionsType";
  static const String metaOptions = "options";

  final String label;
  final String optionsType;
  final List<FormOptionModel> options;

  OptionsFieldHolder({
    required String fieldType,
    dynamic value,
    required this.options,
    required this.label,
    required this.optionsType,
  }) : super(fieldType: fieldType, value: value, isRequired: true);

  factory OptionsFieldHolder.fromJson(Map<String, dynamic> json) {
    return OptionsFieldHolder(
      fieldType: json[FieldHolder.metaType],
      value: json[FieldHolder.metaValue],
      label: json[metaLabel],
      options: List<FormOptionModel>.from(json[metaOptions].map((o)=>FormOptionModel.fromJson(o))),
      optionsType: json[metaOptionsType],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return super.toJson()
      ..addAll({
        metaLabel: label,
        metaOptionsType: optionsType,
      });
  }

  @override
  String toString() =>
      'OptionsFieldHolder(fieldType: $fieldType, id: $label, name: $optionsType)';
}

class TicketHolder extends FieldHolder {
  static const String metaFields = "fields";
  static const String metaTicket = "ticket";
  static const String metaMaxTickets = "max_tickets";

  List<List<FieldHolder>> ticketValues = [];
  List<GlobalKey<FormBuilderState>> ticketKeys = [];

  final int maxTickets;
  final List<FieldHolder> fields;

  TicketHolder({
    required super.fieldType,
    required this.maxTickets,
    required this.fields,
    super.isRequired = true,
  });

  factory TicketHolder.fromJson(Map<String, dynamic> json) {
    return TicketHolder(
      maxTickets: json[metaMaxTickets] ?? 1,
      fieldType: json[FieldHolder.metaType],
      fields: (json[metaFields] as List<Map<String, dynamic>>?)
          ?.map((e) => FormHolder.determineFieldType(e))
          .toList() ?? [],
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return super.toJson()
      ..addAll({
        metaFields: fields.map((e) => e.toJson()).toList(),
      });
  }

  @override
  String toString() =>
      'TicketHolder(fields: $fields)';
}

class FormHolderController{
  final String? secret;
  final int? blueprintId;
  final GlobalKey<FormBuilderState> globalKey;
  final String? formKey;
  void Function()? updateTotalPrice;

  FormHolderController({this.secret, this.blueprintId, required this.globalKey, this.formKey, this.updateTotalPrice});
}

class FormHolder {
  static const String metaFields = "fields";

  FormHolderController? controller;
  final List<FieldHolder> fields;

  TicketHolder? getTicket() => fields.firstWhereOrNull((f)=>f is TicketHolder) as TicketHolder;

  FormHolder({required this.fields});

  factory FormHolder.fromJson(Map<String, dynamic> json) {
    return FormHolder(
      fields: (json[metaFields] as List<Map<String, dynamic>>?)
          ?.map((e) => determineFieldType(e))
          .toList() ??
          [],
    );
  }

  static FieldHolder determineFieldType(Map<String, dynamic> json) {
    final fieldType = json[FieldHolder.metaType];
    if (fieldType == TicketHolder.metaTicket) {
      return TicketHolder.fromJson(json);
    } else if (fieldType == OptionsFieldHolder.metaOptions) {
      return OptionsFieldHolder.fromJson(json);
    } else {
      return FieldHolder.fromJson(json);
    }
  }

  Map<String, dynamic> toJson() {
    return {
      metaFields: fields.map((e) => e.toJson()).toList(),
    };
  }

  void addField(FieldHolder field) {
    fields.add(field);
  }

  void addTicket(TicketHolder ticket) {
    fields.add(ticket);
  }

  @override
  String toString() => 'FormHolder(fields: $fields)';
}
