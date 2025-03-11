// lib/pages/form/models/form_holder.dart

import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/seatReservation/model/SeatModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'field_holder.dart';
import 'ticket_holder.dart';
import 'birth_date_field_holder.dart'; // Import the new holder.
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';

class FormHolderController {
  final String? secret;
  final int? blueprintId;
  final GlobalKey<FormBuilderState> globalKey;
  final String? formKey;
  void Function()? updateTotalPrice;
  Future<List<SeatModel>?> Function(List<SeatModel>)? showSeatReservation;
  void Function(List<SeatModel>?)? onCloseSeatReservation;

  FormHolderController({
    this.secret,
    this.blueprintId,
    required this.globalKey,
    this.formKey,
    this.updateTotalPrice,
    this.showSeatReservation,
    this.onCloseSeatReservation,
  });
}

class FormHolder {
  static const String metaFields = "fields";

  FormHolderController? controller;
  final List<FieldHolder> fields;
  final bool isCardDesign;

  TicketHolder? getTicket() =>
      fields.firstWhereOrNull((f) => f is TicketHolder) as TicketHolder?;

  FormHolder({required this.fields, required this.isCardDesign});

  factory FormHolder.fromFormFieldModel(FormModel formModel) {
    // Extract and sort ticket child fields.
    final ticketChildFields = formModel.relatedFields!
        .where((f) => f.isTicketField == true)
        .toList()
      ..sort((a, b) => (a.order ?? 0).compareTo(b.order ?? 0));

    // Process non-ticket fields.
    final otherFields = formModel.relatedFields!
        .where((f) => f.isTicketField != true)
        .map((f) => createFieldHolder(f))
        .toList();

    // Find the ticket field, if any.
    TicketHolder? ticket = otherFields.firstWhereOrNull(
            (f) => f.fieldType == FormHelper.fieldTypeTicket)
    as TicketHolder?;
    if (ticket != null) {
      ticket.fields.addAll(ticketChildFields.map((f) => createFieldHolder(f)));
    }
    return FormHolder(fields: otherFields, isCardDesign: formModel.data?[FormModel.metaIsCardDesign]??false);
  }

  /// Creates a [FieldHolder] instance based on the provided [FormFieldModel].
  static FieldHolder createFieldHolder(FormFieldModel ffm) {
    final fieldType = ffm.type;
    if (fieldType == FormHelper.fieldTypeTicket) {
      return TicketHolder(
        id: ffm.id!,
        fieldType: ffm.type!,
        maxTickets: ffm.data != null
            ? ffm.data[FormHelper.metaMaxTickets] ?? 1
            : 1,
        fields: [],
        isRequired: true,
      );
    } else if (fieldType == FormHelper.fieldTypeSelectOne ||
        fieldType == FormHelper.fieldTypeSelectMany) {
      // Safely extract the options list from ffm.data.
      List<dynamic> optionsData = ffm.data[FormHelper.metaOptions] ?? [];

      // Convert each option to a FormOptionModel.
      List<FormOptionModel> formOptions = optionsData
          .mapIndexed((index, o) {
        String value = '';
        if (o is Map<String, dynamic> &&
            o.containsKey(FormOptionModel.metaValue)) {
          value = o[FormOptionModel.metaValue]?.toString() ?? '';
        }
        String description = '';
        if (o is Map<String, dynamic> &&
            o.containsKey(FormOptionModel.metaDescription)) {
          description =
              o[FormOptionModel.metaDescription]?.toString() ?? '';
        }
        return FormOptionModel(index.toString(), value,
            description: description);
      })
          .toList();

      return OptionsFieldHolder(
        id: ffm.id!,
        fieldType: ffm.type!,
        isRequired: ffm.isRequired ?? false,
        options: formOptions,
        title: ffm.title ?? "",
      );
    } else if (fieldType == FormHelper.fieldTypeProductType) {
      return OptionsFieldHolder(
        id: ffm.id!,
        fieldType: ffm.type!,
        isRequired: ffm.isRequired ?? false,
        options: ffm.productType!.products!
            .map((p) => FormOptionModel(
          p.id.toString(),
          p.title!,
          price: p.price ?? 0,
          type: ffm.type!,
          description: p.description,
        ))
            .toList(),
        title: ffm.productType!.title ?? "",
      );
    } else if (fieldType == FormHelper.fieldTypeBirthDate) {
      // Use constants from BirthDateFieldHolder instead of hardcoded strings.
      return BirthDateFieldHolder(
        id: ffm.id!,
        fieldType: ffm.type!,
        isRequired: ffm.isRequired ?? false,
        defaultValue: ffm.data?['value'],
        title: ffm.title,
        description: ffm.description,
        maxYear: ffm.data?[BirthDateFieldHolder.metaMaxYear],
        minYear: ffm.data?[BirthDateFieldHolder.metaMinYear],
        isHard: ffm.data?[BirthDateFieldHolder.metaIsHard] ?? false,
        message: ffm.data?[BirthDateFieldHolder.metaMessage] ?? '',
      );
    } else {
      return FieldHolder(
        id: ffm.id!,
        fieldType: ffm.type!,
        isRequired: ffm.isRequired ?? false,
        title: ffm.title,
        description: ffm.description,
      );
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
