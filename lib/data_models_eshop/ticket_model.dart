import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:trina_grid/trina_grid.dart';
import 'order_model.dart';
import '../components/blueprint/blueprint_object_model.dart';
import 'product_model.dart';
import 'package:intl/intl.dart';

class TicketModel extends ITrinaRowModel {
  @override
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? ticketSymbol;
  String? state;
  int? occasion;
  String? note;
  String? noteHidden;
  double? totalPrice;

  // Relating spots and products directly to the ticket
  BlueprintObjectModel? relatedSpot;
  List<ProductModel>? relatedProducts;

  // Relating order directly to the ticket
  OrderModel? relatedOrder;

  TicketModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.ticketSymbol,
    this.state,
    this.occasion,
    this.note,
    this.noteHidden,
    this.relatedSpot,
    this.relatedProducts,
    this.relatedOrder,
  });

  factory TicketModel.fromJson(Map<String, dynamic> json) {
    return TicketModel(
      id: json[TbEshop.tickets.id],
      createdAt: json[TbEshop.tickets.created_at] != null
          ? DateTime.parse(json[TbEshop.tickets.created_at])
          : null,
      updatedAt: json[TbEshop.tickets.updated_at] != null
          ? DateTime.parse(json[TbEshop.tickets.updated_at])
          : null,
      ticketSymbol: json[TbEshop.tickets.ticket_symbol],
      state: json[TbEshop.tickets.state],
      occasion: json[TbEshop.tickets.occasion],
      note: json[TbEshop.tickets.note],
      noteHidden: json[TbEshop.tickets.note_hidden],
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.tickets.state: state,
    TbEshop.tickets.note_hidden: noteHidden,
  };

  @override
  TrinaRow toTrinaRow(BuildContext context) {

    Map<String, TrinaCell> cells = {
      EshopColumns.TICKET_ID: TrinaCell(value: id ?? 0),
      EshopColumns.TICKET_CREATED_AT: TrinaCell(
          value: createdAt != null
              ? DateFormat('yyyy-MM-dd').format(createdAt!)
              : ""),
      EshopColumns.TICKET_SYMBOL: TrinaCell(value: ticketSymbol ?? ""),
      EshopColumns.TICKET_STATE: TrinaCell(value: OrderModel.formatState(state ?? OrderModel.orderedState)),
      EshopColumns.TICKET_NOTE: TrinaCell(value: note ?? ""),
      EshopColumns.TICKET_NOTE_HIDDEN: TrinaCell(value: noteHidden ?? ""),
      EshopColumns.ORDER_SYMBOL: TrinaCell(
          value: relatedOrder != null
              ? relatedOrder!.toBasicString()
              : ""),
      EshopColumns.ORDER_DATA: TrinaCell(
          value: relatedOrder != null
              ? relatedOrder!.toCustomerData()
              : ""),
      EshopColumns.TICKET_PRODUCTS: TrinaCell(
          value: relatedProducts != null
              ? relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
      EshopColumns.TICKET_SPOT: TrinaCell(
          value: relatedSpot != null
              ? relatedSpot?.toShortString()
              : ""),
      EshopColumns.TICKET_TOTAL_PRICE: TrinaCell(value: totalPrice != null ? Utilities.formatPrice(context, totalPrice!) : ""),
      EshopColumns.TICKET_PRODUCTS_EDIT: TrinaCell(value: ""),
    };

    final productCells = EshopColumns.generateProductTypeCells(relatedProducts ?? []);
    cells.addAll(productCells);
    return TrinaRow(cells: cells);
  }

  static TicketModel fromPlutoJson(Map<String, dynamic> json) {
    return TicketModel(
        id: json[EshopColumns.TICKET_ID] == -1 ? null : json[EshopColumns.TICKET_ID],
        noteHidden: json[EshopColumns.TICKET_NOTE_HIDDEN]
    );
  }

  @override
  Future<void> deleteMethod() async {
    // Implement your delete logic here
  }

  @override
  Future<void> updateMethod() async {
    await DbTickets.updateTicketNoteHidden(id!, noteHidden!);
  }

  @override
  String toBasicString() => ticketSymbol ?? id.toString();
}