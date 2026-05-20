import 'package:collection/collection.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/blueprint/seat_reservation/model/seat_model.dart';
import 'package:fstapp/components/forms/models/form_model.dart';
import 'package:fstapp/components/forms/models/form_option_product_model.dart';
import 'package:fstapp/components/forms/models/holder_models/form_ticket_model.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/components/forms/models/holder_models/form_holder.dart';
import 'package:fstapp/components/forms/models/holder_models/ticket_holder.dart';

class FormSession extends ChangeNotifier {
  final FormModel form;
  final FormHolder formHolder;
  final GlobalKey<FormBuilderState> formKey;

  double totalPrice = 0.0;
  int totalTickets = 0;
  int totalProducts = 0;
  String? currencyCode;

  // Snapshot for restoring state if selection is cancelled
  List<FormTicketModel>? _ticketSnapshot;

  FormSession({
    required this.form,
    required this.formHolder,
    required this.formKey,
  });

  // Getter for UI components that need the list of currently selected seats
  List<SeatModel> get currentSeats {
    final ticketHolder = formHolder.getTicket();
    if (ticketHolder == null) return [];
    return ticketHolder.tickets
        .where((t) => t.seat != null)
        .map((t) => t.seat!)
        .toList();
  }

  void startSeatSelection() {
    final ticketHolder = formHolder.getTicket();
    if (ticketHolder != null) {
      // Create a shallow copy of the list.
      // Note: FormTicketModel objects themselves are mutable, but we are primarily concerned
      // with the list composition here. If deep copy is needed, we'd need to implement it.
      // For now, assuming replacing the list reference in TicketHolder on restore is sufficient
      // if we don't mutate existing inner objects in a way that needs revert (SeatModel state is handled in blueprint controller possibly).
      // actually TicketHolder.updateTickets replaces the list.
      _ticketSnapshot = List.from(ticketHolder.tickets);
    }
  }

  void updateSeats(List<SeatModel> seats) {
    final ticketHolder = formHolder.getTicket();
    if (ticketHolder != null) {
      ticketHolder.updateTickets(seats);
      recalculateTotals();
    }
  }

  void confirmSeatSelection() {
    _ticketSnapshot = null;
    recalculateTotals();
  }

  void cancelSeatSelection() {
    final ticketHolder = formHolder.getTicket();
    if (ticketHolder != null && _ticketSnapshot != null) {
      ticketHolder.tickets = _ticketSnapshot!;
      _ticketSnapshot = null;
      recalculateTotals();
    }
  }

  void recalculateTotals() {
    String? currencyC;
    totalPrice = 0.0;
    totalTickets = 0;
    totalProducts = 0;

    for (var field in formHolder.fields) {
      if (field.fieldType == FormHelper.fieldTypeProductType) {
        var selectedOption = field.getValue(formHolder.controller!.globalKey);
        if (selectedOption is FormOptionProductModel) {
          totalPrice += selectedOption.price;
          currencyC ??= selectedOption.currencyCode;
        }
      }

      if (field is TicketHolder) {
        totalTickets = field.tickets.length;

        for (var s in field.tickets) {
          if (s.seat != null) {
            totalProducts++; // Should specific seats count as products? Original code did this.
            totalPrice += s.seat!.objectModel!.product!.price!;
            currencyC ??= s.seat!.objectModel!.product!.currencyCode;
          }
        }

        var tickets = FormHelper.getFieldData(formKey, field) ?? [];

        for (var ticketData in tickets) {
          for (var ticketField in ticketData[FormHelper.metaFields]) {
            for (var fValue in ticketField.values) {
              if (fValue is FormOptionProductModel) {
                totalProducts++;
                totalPrice += fValue.price;
                currencyC ??= fValue.currencyCode;
              } else if (fValue is Iterable) {
                var products = List<FormOptionProductModel>.from(fValue);
                totalProducts += products.length;
                totalPrice +=
                    products.fold(0, (sum, product) => sum + product.price);
                currencyC ??= products.firstOrNull?.currencyCode;
              }
            }
          }
        }
      }
    }
    currencyCode = currencyC;

    notifyListeners();
  }
}
