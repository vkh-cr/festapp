import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/seatReservation/utils/SeatState.dart';
import 'package:fstapp/dataModelsEshop/BlueprintGroup.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:collection/collection.dart';

class BlueprintObjectModel {
  static const String metaX = "x";
  static const String metaY = "y";
  static const String metaSpot = "spot";
  static const String metaType = "type";
  static const String metaState = "state";
  static const String metaTitle = "title";
  static const String metaId = "id";
  static const String metaGroupId = "group";

  static const String orderedType = "ordered";
  static const String usedType = "used";
  static const String selectedType = "selected";
  static const String selectedByMeType = "selected_by_me";
  static const String blackType = "black";
  static const String availableType = "available";

  static Map<SeatState, String> statesMap = {
    SeatState.black: blackType,
    SeatState.available: availableType,
    SeatState.selected: selectedType,
    SeatState.selected_by_me: selectedByMeType,
    SeatState.ordered: orderedType,
    SeatState.used: usedType,
  };

  @override
  toString() {
    return "Stůl ${group?.title}, Sedadlo $title";
  }

  toShortString() {
    return "${group?.title ?? ""}${title ?? ""}";
  }

  int? x;
  int? y;
  int? id;
  int? groupId;
  int? orderProductTicket;
  String? type;
  String? state;
  String? title;
  ProductModel? product;
  int? spotProduct;
  BlueprintGroupModel? group;
  SeatState? stateEnum;
  BlueprintModel? blueprint;

  factory BlueprintObjectModel.fromJson(Map<String, dynamic> json) {
    return BlueprintObjectModel(
      x: json[metaX],
      y: json[metaY],
      id: json[metaId],
      groupId: json[metaGroupId],
      orderProductTicket: json[TbEshop.spots.order_product_ticket],
      type: json[metaType],
      state: json[metaState],
      title: json[metaTitle],
      spotProduct: json[TbEshop.spots.product],
    );
  }

  Map<String, dynamic> toJson() => {
    metaX: x,
    metaY: y,
    metaType: type,
    metaTitle: title,
    if (id != null) metaId: id,
    if (group?.id != null) metaGroupId: group?.id,
    if (spotProduct != null || product != null) TbEshop.spots.product: spotProduct ?? product?.id,
  };

  BlueprintObjectModel({
    this.x,
    this.y,
    this.id,
    this.groupId,
    this.orderProductTicket,
    this.type,
    this.state,
    this.stateEnum,
    this.title,
    this.spotProduct,
    this.product,
    this.blueprint,
  });

  String blueprintTooltip(BuildContext context) {
    // Find the matching order product ticket
    var opt = blueprint?.orderProductTickets?.firstWhereOrNull((t) => t.id == orderProductTicket);

    if (opt != null) {
      // Find the corresponding ticket
      var ticket = blueprint?.tickets?.firstWhereOrNull((t) => t.id == opt.ticketId);

      if (ticket != null) {
        // Get other products associated with the ticket
        var otherProducts = blueprint?.orderProductTickets
            ?.where((o) => o.ticketId == ticket.id)
            .map((t) => t.productId)
            .toList();

        // Generate string for other products
        var productsString = otherProducts
            ?.where((p) => p != product?.id)
            .map((op) {
          var pr = blueprint?.products?.firstWhere((p) => p.id == op);
          return pr?.title ?? "";
        })
            .where((title) => title.isNotEmpty)
            .join("\n") ?? "";

        // Get the order details
        var order = blueprint?.orders?.firstWhere((p) => p.id == opt.orderId);
        var orderNote = order?.toCustomerNote() ?? "";
        if(orderNote.isNotEmpty){
          orderNote = "\n$orderNote";
        }
        var orderString = order != null
            ? "\n${order.toCustomerData()}$orderNote"
            : "";

        // Add ticket note if available
        var ticketNoteString = ticket.note != null && ticket.note!.isNotEmpty ? "\n${ticket.note}" : "";

        return "${product?.title} ${title ?? ""}\n${"Ticket".tr()} ${ticket.ticketSymbol}$ticketNoteString\n$productsString$orderString";
      }
    }

    // Fallback for when no matching ticket or order product ticket is found
    return "${product?.title} ${title ?? ""}\n${"Price".tr()}: ${Utilities.formatPrice(context, product?.price ?? 0)}";
  }

  bool isOrdered(){
    return orderProductTicket != null;
  }
}
