import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/blueprint/blueprint_seat.dart';
import 'field_holder.dart';

class FormTicketModel {
  BlueprintSeat? seat;
  final List<FieldHolder> ticketValues;
  final GlobalKey<FormBuilderState> ticketKey;

  FormTicketModel({
    required this.ticketValues,
    required this.ticketKey,
    this.seat,
  });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FormTicketModel &&
          runtimeType == other.runtimeType &&
          seat!.item!.id! == other.seat!.item!.id!;

  @override
  int get hashCode => seat!.item!.id!.hashCode;
}
