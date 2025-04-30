// lib/pages/form/models/ticket_holder.dart

import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/seat_reservation/model/seat_model.dart';
import 'field_holder.dart';
import 'form_ticket_model.dart';

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

    // Build the new list of tickets.
    final List<FormTicketModel> updatedTickets = [];

    for (var seat in seats) {
      if (existingTicketsMap.containsKey(seat.objectModel!.id!)) {
        // Use the existing ticket if it matches the seat.
        updatedTickets.add(existingTicketsMap[seat.objectModel!.id!]!);
      } else {
        // Create a new ticket if none exists for the seat.
        updatedTickets.add(
          FormTicketModel(
            ticketValues: fields,
            ticketKey: GlobalKey<FormBuilderState>(),
            seat: seat,
          ),
        );
      }
    }

    // Replace the old tickets with the updated list.
    tickets = updatedTickets;
  }
}
