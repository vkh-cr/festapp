import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'BlueprintObjectModel.dart';
import 'ProductModel.dart';
import 'OrderModel.dart';

class TicketModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? ticketSymbol;
  String? state;
  int? occasion;
  String? note;

  // Relating spots and products directly to the ticket
  List<BlueprintObjectModel>? relatedSpots;
  List<ProductModel>? relatedProducts;

  // Relating order directly to the ticket
  OrderModel? relatedOrder;

  static const String orderedState = "ordered";
  static const String activeState = "active";
  static const String usedState = "used";
  static const String stornoState = "storno";

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
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.tickets.id: id,
    TbEshop.tickets.created_at: createdAt?.toIso8601String(),
    TbEshop.tickets.updated_at: updatedAt?.toIso8601String(),
    TbEshop.tickets.ticket_symbol: ticketSymbol,
    TbEshop.tickets.state: state,
    TbEshop.tickets.occasion: occasion,
    TbEshop.tickets.note: note,
  };

  String toBasicString() => ticketSymbol ?? id.toString();

  TicketModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.ticketSymbol,
    this.state,
    this.occasion,
    this.note,
    this.relatedSpots,
    this.relatedProducts,
    this.relatedOrder,
  });
}
