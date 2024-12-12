import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class OrderProductTicketModel {
  int? id;
  DateTime? createdAt;
  int? orderId;
  int? productId;
  int? ticketId;

  factory OrderProductTicketModel.fromJson(Map<String, dynamic> json) {
    return OrderProductTicketModel(
      id: json[TbEshop.order_product_ticket.id],
      createdAt: json[TbEshop.order_product_ticket.created_at] != null
          ? DateTime.parse(json[TbEshop.order_product_ticket.created_at])
          : null,
      orderId: json[TbEshop.order_product_ticket.order],
      productId: json[TbEshop.order_product_ticket.product],
      ticketId: json[TbEshop.order_product_ticket.ticket],
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.order_product_ticket.id: id,
    TbEshop.order_product_ticket.created_at: createdAt?.toIso8601String(),
    TbEshop.order_product_ticket.order: orderId,
    TbEshop.order_product_ticket.product: productId,
    TbEshop.order_product_ticket.ticket: ticketId,
  };

  String toBasicString() => "OrderProductTicket #${id ?? ''}";

  OrderProductTicketModel({
    this.id,
    this.createdAt,
    this.orderId,
    this.productId,
    this.ticketId,
  });
}
