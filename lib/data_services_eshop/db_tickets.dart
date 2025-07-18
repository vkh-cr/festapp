import 'package:collection/collection.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbTickets {
  static final _supabase = Supabase.instance.client;

  static Future<bool> stornoTicket(int ticketId) async {
    final response = await _supabase.rpc(
      'storno_ticket',
      params: {
        'ticket_id': ticketId,
      },
    );

    if (response["code"] != 200) {
      return false;
    }
    return true;
  }

  static Future<List<TicketModel>> getAllTickets(String occasionLink) async {
    var ordersBundle = await DbOrders.getAllOrdersBundle(occasionLink: occasionLink, includeOrderDetails: true, includeSpots: true);
    List<TicketModel> toReturn = [];
    for(var o in ordersBundle.orders){

      for(TicketModel t in o.relatedTickets??[]){
        var tckst = o.data?[TbEshop.tickets.table];
        t.totalPrice = tckst.isNotEmpty ? 0 : null;
        for(var tt in tckst){
          if(tt[TbEshop.tickets.ticket_symbol] != t.ticketSymbol){
            continue;
          }
          for(var p in tt[TbEshop.products.table]??[]){
            t.totalPrice = t.totalPrice! + (p[TbEshop.products.price] ?? 0);
          }
        }
      }
      toReturn.addAll(o.relatedTickets??[]);
    }
    toReturn = toReturn.sortedBy((ou)=>ou.createdAt!).reversed.toList();
    return toReturn;
  }

  static Future<FunctionResponse> sendTicketsToEmail({
    required int orderId,
    required String email,
  }) async {
    final body = {
      "orderId": orderId,
      "email": email,
    };

    try {
      final response = await _supabase.functions.invoke(
        "send-tickets",
        body: body,
      );

      return response;
    } catch (e) {
      print("Unexpected error in sendTicketsToEmail: $e");
      rethrow;
    }
  }

  static Future<void> updateTicketNoteHidden(int ticketId, String newNoteHidden) async {
    var response = await _supabase.rpc(
      "update_ticket_note_hidden",
      params: {
        "ticket_id": ticketId,
        "new_note_hidden": newNoteHidden,
      },
    );
    if (response["code"] != 200) {
      throw Exception("Saving of note has failed.");
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

  static Future<TicketModel?> scanTicket(String scannedId, String scannedCode) async {
    final response = await _supabase.rpc('scan_ticket', params: {
      'scanned_id': scannedId,
      'scanned_code': scannedCode,
    });

    if (response["code"] != 200) {
      return null;
    }

    // Parse the returned ticket JSON data.
    final ticketJson = response["ticket"] as Map<String, dynamic>;
    TicketModel ticket = TicketModel.fromJson(ticketJson);

    // Optionally, attach related order, products, and spot using the response data.
    if (response.containsKey("order") && response["order"] != null) {
      ticket.relatedOrder = OrderModel.fromJson(response["order"]);
    }

    if (response.containsKey("products") && response["products"] != null) {
      ticket.relatedProducts = (response["products"] as List)
          .map((p) => ProductModel.fromJson(p))
          .toList();
    }

    if (response.containsKey("spot") && response["spot"] != null) {
      ticket.relatedSpot = BlueprintObjectModel.fromJson(response["spot"]);
    }

    return ticket;
  }

  static Future<void> updateScanCode(String occasionLink, String scannedCode) async {
    final response = await _supabase.rpc('update_scan_code', params: {
      'occasion_link': occasionLink,
      'new_scan_code': scannedCode,
    });

    if (response["code"] != 200) {
      throw Exception("Error retrieving ticket: ${response["message"]}");
    }
  }

  static Future<bool> updateTicketToUsed(int ticketId, String scannedCode) async {
    final response = await _supabase.rpc('update_ticket_to_used', params: {
      'ticket_id': ticketId,
      'scan_code': scannedCode,
    });

    return response["code"] == 200;
  }

  static Future<String?> getScanCode(String occasionLink) async {
    final response = await _supabase.rpc('get_scan_code', params: {
      'occasion_link': occasionLink,
    });

    if (response["code"] != 200) {
      return null;
    }
    return response["scan_code"];
  }

}
