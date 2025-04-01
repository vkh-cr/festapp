import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormResponseModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/components/blueprint/blueprint_helper.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/OrderProductTicketModel.dart';
import 'package:fstapp/dataModelsEshop/PaymentInfoModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbOrders {
  static final _supabase = Supabase.instance.client;

  static Future<FunctionResponse> sendTicketOrder(Map<String, dynamic> data) async {
    return await _supabase.functions.invoke("send-ticket-order", body: {"orderDetails": data});
  }

  static Future<void> stornoOrder(int id) async {
    final response = await _supabase.rpc(
      'update_order_and_tickets_to_storno_ws',
      params: {
        'order_id': id,
      },
    );

    if (response["code"] != 200) {
      throw Exception("Storno order failed: ${response['code']}: ${response['message']}");
    }

    await sendStornoTicketOrderEmail(orderId: id);
  }

  static Future<bool> selectSpot(context, String formKey, String secret, int spotId, bool selecting) async {
    final response = await _supabase.rpc(
      'select_spot',
      params: {
        'form_key': formKey,
        'secret_id': secret,
        'spot_id': spotId,
        'selecting': selecting,
      },
    );

    var code = response["code"];
    var message = response["message"];

    if (code != 200) {
      ToastHelper.Show(context, message.toString(), severity: ToastSeverity.NotOk);
      return false;
    }
    return true;
  }

  static Future<List<OrderModel>> getAllOrders(String formLink) async {
    final response = await _supabase.rpc('get_orders', params: {'form_link': formLink});
    if (response["code"] != 200) return [];
    final json = response["data"];

    final spots = BlueprintHelper.parseSpots(json);
    final products = BlueprintHelper.parseProducts(json);
    final tickets = BlueprintHelper.parseTickets(json);
    final orders = BlueprintHelper.parseOrders(json)!;
    final payments = BlueprintHelper.parsePaymentInfo(json);
    final orderProductTickets = BlueprintHelper.parseOrderProductTickets(json);

    // Precompute maps
    final ticketMap = {for (var t in tickets!) t.id: t};
    final productMap = {for (var p in products!) p.id: p};
    final paymentMap = {for (var p in payments!) p.id: p};
    final spotByOptId = {for (var s in spots!) s.orderProductTicket: s};

    final Map<int, List<OrderProductTicketModel>> orderToOpt = {};
    final Map<int, List<OrderProductTicketModel>> ticketToOpt = {};
    for (var opt in orderProductTickets!) {
      orderToOpt.putIfAbsent(opt.orderId!, () => []).add(opt);
      ticketToOpt.putIfAbsent(opt.ticketId!, () => []).add(opt);
    }

    for (var order in orders) {
      final orderOpts = orderToOpt[order.id] ?? [];
      final ticketIds = orderOpts.map((opt) => opt.ticketId).toSet();
      final relatedTickets = ticketIds.map((id) => ticketMap[id]).whereType<TicketModel>().toList();
      order.relatedTickets = relatedTickets;

      for (var ticket in relatedTickets) {
        final ticketOpts = ticketToOpt[ticket.id] ?? [];
        for (var opt in ticketOpts) {
          if (spotByOptId.containsKey(opt.id)) {
            ticket.relatedSpot = spotByOptId[opt.id];
            break;
          }
        }
        final productIds = ticketOpts.map((opt) => opt.productId).toSet();
        ticket.relatedProducts =
            productIds.map((pid) => productMap[pid]).whereType<ProductModel>().toList();
        ticket.relatedOrder = order;
      }

      final ticketIdsForOrder = relatedTickets.map((t) => t.id).toSet();
      order.relatedSpots =
          spots!.where((s) => ticketIdsForOrder.contains(s.orderProductTicket)).toList();

      final orderProductIds = <int>{};
      for (var ticket in relatedTickets) {
        if (ticket.relatedProducts != null) {
          orderProductIds.addAll(ticket.relatedProducts!.map((p) => p.id!));
        }
      }
      order.relatedProducts =
          products!.where((p) => orderProductIds.contains(p.id)).toList();

      order.paymentInfoModel = paymentMap[order.paymentInfo];

      if (order.isExpired()) {
        order.state = OrderModel.expiredState;
      }
    }

    orders.sort((a, b) => b.createdAt!.compareTo(a.createdAt!));
    return orders;
  }


  static Future<void> deleteOrder(OrderModel model) async {
    final response = await _supabase.rpc(
      'delete_order',
      params: {
        'order_id': model.id,
      },
    );

    if (response["code"] != 200) {
      throw Exception("Deleting order failed: ${response['code']}: ${response['message']}");
    }
  }

  static Future<void> updateOrderNoteHidden(int orderId, String newNoteHidden) async {
    var response = await _supabase.rpc(
      "update_order_note_hidden",
      params: {
        "order_id": orderId,
        "new_note_hidden": newNoteHidden,
      },
    );
    if (response["code"] != 200) {
      throw Exception("Saving of note has failed.");
    }
  }

  static Future<void> updateOrderAndTicketsToPaid(int orderId) async {
    var response = await _supabase.rpc(
      "update_order_and_tickets_to_paid_ws",
      params: {
        "order_id": orderId,
      },
    );

    if (response["code"] != 200) {
      throw Exception("Failed to update order and tickets to 'paid'. Error: ${response['message']}");
    }

  }

  static Future<List<Map<String, dynamic>>> getOrderHistory(int orderId) async {
    final response = await _supabase.rpc('get_order_history', params: {
      'order_id': orderId,
    });

    if (response["code"] != 200) {
      throw Exception("Failed to fetch order history: ${response['message']}");
    }

    var data = response["data"];

    // Directly return the list of items without grouping by date
    return List<Map<String, dynamic>>.from(data);
  }

  static Future<FunctionResponse> sendStornoTicketOrderEmail({
    required int orderId,
  }) async {
    final body = {
      "templateCode": "TICKET_ORDER_STORNO",
      "data": { "orderId": orderId },
    };

    try {
      final response = await _supabase.functions.invoke(
        "send-email",
        body: body,
      );

      return response;
    } catch (e) {
      print("Unexpected error in sendTicketsToEmail: $e");
      rethrow;
    }
  }
}
