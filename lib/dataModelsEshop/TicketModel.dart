import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbTickets.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'OrderModel.dart';
import 'BlueprintObjectModel.dart';
import 'ProductModel.dart';
import 'package:intl/intl.dart';

class TicketModel extends IPlutoRowModel {
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

  static const String metaRelatedOrder = "related_order";
  static const String metaTicketsProducts = "ticket_products";
  static const String metaPrice = "price";
  static const String metaSpot = "spot";

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
  PlutoRow toPlutoRow(BuildContext context) {
    return PlutoRow(cells: {
      TbEshop.tickets.id: PlutoCell(value: id ?? 0),
      TbEshop.tickets.created_at: PlutoCell(
          value: createdAt != null
              ? DateFormat('yyyy-MM-dd').format(createdAt!)
              : ""),
      TbEshop.tickets.ticket_symbol: PlutoCell(value: ticketSymbol ?? ""),
      TbEshop.tickets.state: PlutoCell(value: OrderModel.formatState(state ?? OrderModel.orderedState)),
      TbEshop.tickets.note: PlutoCell(value: note ?? ""),
      TbEshop.tickets.note_hidden: PlutoCell(value: noteHidden ?? ""),
      TbEshop.orders.order_symbol: PlutoCell(
          value: relatedOrder != null
              ? relatedOrder!.toBasicString()
              : ""),
      TbEshop.orders.data: PlutoCell(
          value: relatedOrder != null
              ? relatedOrder!.toCustomerData()
              : ""),
      metaTicketsProducts: PlutoCell(
          value: relatedProducts != null
              ? relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
      metaSpot: PlutoCell(
          value: relatedSpot != null
              ? relatedSpot?.toShortString()
              : ""),
      metaPrice: PlutoCell(value: totalPrice != null ? Utilities.formatPrice(context, totalPrice!) : ""),
    });
  }

  static TicketModel fromPlutoJson(Map<String, dynamic> json) {
    return TicketModel(
        id: json[TbEshop.tickets.id] == -1 ? null : json[TbEshop.tickets.id],
        noteHidden: json[TbEshop.tickets.note_hidden]
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
