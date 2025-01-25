import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/services/FormHelper.dart';

class FieldHolder {
  static const String metaIsRequired = "is_required";
  static const String metaType = "type";
  static const String metaValue = "value";

  final int id;
  final bool isRequired;
  final String fieldType;
  dynamic defaultValue;

  dynamic getValue(GlobalKey<FormBuilderState> formKey) =>
      FormHelper.getFieldData(formKey, this);

  String? title;
  String? description;

  FieldHolder(
    {
      required this.fieldType,
      required this.isRequired,
      required this.id,
      this.defaultValue,
      this.title,
      this.description
    });

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

  final List<FormOptionModel> options;

  OptionsFieldHolder({
    required super.fieldType,
    dynamic value,
    required this.options,
    required id,
    required title,
  }) : super(
            defaultValue: value,
            isRequired: true,
            title: title,
            id: id);

  @override
  String toString() =>
      'OptionsFieldHolder(fieldType: $fieldType, title: $title)';
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
    required super.id,
  });

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
      for (var ticket in tickets) ticket.seat!.objectModel!.id!: ticket
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
            ticketValues: fields,
            ticketKey: GlobalKey<FormBuilderState>(),
            seat: seat,
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

  factory FormHolder.fromFormFieldModel(List<FormFieldModel> list) {
    final ticketChildFields = list.where((f) => f.isTicketField == true).toList()..sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));
    final otherFields = list.where((f) => f.isTicketField != true).map((f) => createFieldHolder(f)).toList();
    TicketHolder? ticket = otherFields.firstWhereOrNull((f) => f.fieldType == FormHelper.fieldTypeTicket) as TicketHolder?;
    if(ticket != null){
      ticket.fields.addAll(ticketChildFields.map((f) => createFieldHolder(f)));
    }
    return FormHolder(fields: otherFields);
  }

  static FieldHolder createFieldHolder(FormFieldModel ffm) {
    final fieldType = ffm.type;
    if (fieldType == FormHelper.fieldTypeTicket) {
      return TicketHolder(
          id: ffm.id!,
          fieldType: ffm.type!,
          maxTickets: ffm.data != null ? ffm.data[FormHelper.metaMaxTickets] ?? 1 : 1,
          fields: [],
          isRequired: true);
    } else if (fieldType == FormHelper.fieldTypeSelectOne) {
      // Safely extract the options list from ffm.data
      List<dynamic> optionsData = ffm.data[FormHelper.metaOptions] ?? [];

      // Ensure that optionsData is a List of Maps with 'value' keys
      List<FormOptionModel> formOptions = optionsData
          .mapIndexed((index, o) {
        // Safely access the 'value' key
        String value = '';
        if (o is Map<String, dynamic> && o.containsKey('value')) {
          value = o['value']?.toString() ?? '';
        }
        return FormOptionModel(index.toString(), value);
      })
          .toList();

      return OptionsFieldHolder(
        id: ffm.id,
        fieldType: ffm.type!,
        options: formOptions,
        title: ffm.title,
      );
    } else if (fieldType == FormHelper.fieldTypeProductType) {
      return OptionsFieldHolder(
          id: ffm.id,
          fieldType: ffm.type!,
          options: ffm.productType!.products!.map((p) => FormOptionModel(p.id.toString(), p.title!, price: p.price ?? 0, type: ffm.type!)).toList(),
          title: ffm.productType!.title,
      );
    } else {
      return FieldHolder(
          id: ffm.id!,
          fieldType: ffm.type!,
          isRequired: ffm.isRequired!,
          title: ffm.title,
          description: ffm.description);
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
  SeatModel? seat;
  final List<FieldHolder> ticketValues;
  final GlobalKey<FormBuilderState> ticketKey;

  FormTicketModel({required this.ticketValues, required this.ticketKey, this.seat});

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FormTicketModel &&
          runtimeType == other.runtimeType &&
          seat!.objectModel!.id! == other.seat!.objectModel!.id!;

  @override
  int get hashCode => seat!.objectModel!.id!.hashCode;
}
