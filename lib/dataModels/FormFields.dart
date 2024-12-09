import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/services/FormHelper.dart';

class FieldHolder {
  static const String metaIsRequired = "is_required";
  static const String metaType = "type";
  static const String metaValue = "value";

  final bool isRequired;
  final String fieldType;
  dynamic defaultValue;

  dynamic getValue(GlobalKey<FormBuilderState> formKey) =>
      FormHelper.getFieldData(formKey, this);

  String getFieldTypeValue() => FormHelper.getFieldTypeValue(this);

  String? label;

  FieldHolder(
      {required this.fieldType,
      required this.isRequired,
      this.defaultValue,
      this.label});

  factory FieldHolder.fromJson(Map<String, dynamic> json) {
    return FieldHolder(
      isRequired: json[metaIsRequired] ?? false,
      fieldType: json[metaType],
      defaultValue: json[metaValue],
    );
  }

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
  static const String metaLabel = "label";
  static const String metaOptionsType = "optionsType";
  static const String metaOptions = "options";

  final String optionsType;
  final List<FormOptionModel> options;

  OptionsFieldHolder({
    required String fieldType,
    dynamic value,
    required this.options,
    required this.optionsType,
    required label,
  }) : super(
            fieldType: fieldType,
            defaultValue: value,
            isRequired: true,
            label: label);

  factory OptionsFieldHolder.fromJson(Map<String, dynamic> json) {
    return OptionsFieldHolder(
      fieldType: json[FieldHolder.metaType],
      value: json[FieldHolder.metaValue],
      label: json[metaLabel],
      options: List<FormOptionModel>.from(
          json[metaOptions].map((o) => FormOptionModel.fromJson(o))),
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

  List<FormTicketModel> tickets = [];

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
              .toList() ??
          [],
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
  String toString() => 'TicketHolder(fields: $fields)';

  /// Updates the tickets based on the provided list of [seats].
  void updateTickets(List<SeatModel> seats) {
    // Create a map of existing tickets for fast lookup.
    final existingTicketsMap = {
      for (var ticket in tickets) ticket.seat.objectModel!.id!: ticket
    };

    // New list of tickets to build.
    final List<FormTicketModel> updatedTickets = [];

    for (var seat in seats) {
      if (existingTicketsMap.containsKey(seat.objectModel!.id!)) {
        // Keep the existing ticket if it matches the seat.
        updatedTickets.add(existingTicketsMap[seat.objectModel!.id!]!);
      } else {
        // Add a new ticket for the seat if it does not exist.
        updatedTickets.add(
          FormTicketModel(
            seat,
            fields,
            GlobalKey<FormBuilderState>(),
          ),
        );
      }
    }

    // Replace the tickets list with the updated tickets.
    tickets = updatedTickets;
  }
}

class FormHolderController {
  final String? secret;
  final int? blueprintId;
  final GlobalKey<FormBuilderState> globalKey;
  final String? formKey;
  void Function()? updateTotalPrice;
  Future<List<SeatModel>?> Function(List<SeatModel>)? showSeatReservation;
  void Function(List<SeatModel>?)? onCloseSeatReservation;

  FormHolderController(
      {this.secret,
      this.blueprintId,
      required this.globalKey,
      this.formKey,
      this.updateTotalPrice,
      this.showSeatReservation,
      this.onCloseSeatReservation});
}

class FormHolder {
  static const String metaFields = "fields";

  FormHolderController? controller;
  final List<FieldHolder> fields;

  TicketHolder? getTicket() =>
      fields.firstWhereOrNull((f) => f is TicketHolder) as TicketHolder;

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

  @override
  String toString() => 'FormHolder(fields: $fields)';
}

class FormTicketModel {
  final SeatModel seat;
  final List<FieldHolder> ticketValues;
  final GlobalKey<FormBuilderState> ticketKey;

  FormTicketModel(this.seat, this.ticketValues, this.ticketKey);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FormTicketModel &&
          runtimeType == other.runtimeType &&
          seat.objectModel!.id! == other.seat.objectModel!.id!;

  @override
  int get hashCode => seat.objectModel!.id!.hashCode;
}
