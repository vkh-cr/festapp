// lib/pages/form/models/form_ticket_model.dart

import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'field_holder.dart';

class FormTicketModel {
  SeatModel? seat;
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
              seat!.objectModel!.id! == other.seat!.objectModel!.id!;

  @override
  int get hashCode => seat!.objectModel!.id!.hashCode;
}
