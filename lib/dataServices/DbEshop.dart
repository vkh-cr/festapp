import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModelsEshop/BlueprintHelper.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/OrderProductTicketModel.dart';
import 'package:fstapp/dataModelsEshop/PaymentInfoModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabaseEshop = Supabase.instance.client.schema("eshop");
  static final _supabase = Supabase.instance.client;

  static Future<List<ProductTypeModel>> getProducts(BuildContext context, int currentOccasion) async {
    var data = await _supabaseEshop
        .from(TbEshop.product_types.table)
        .select(
        "${TbEshop.product_types.id},"
        "${TbEshop.product_types.type},"
        "${TbEshop.product_types.title},"
        "${TbEshop.products.table}(${TbEshop.products.id},${TbEshop.products.title},${TbEshop.products.price},${TbEshop.products.order})"
        )
        .eq(TbEshop.product_types.occasion, currentOccasion)
        .eq("${TbEshop.products.table}.${TbEshop.products.is_hidden}", false);

    var infoList = List<ProductTypeModel>.from(
        data.map((x) {
          var toReturn = ProductTypeModel.fromJson(x);
          toReturn.products = toReturn.products?.sortedBy((i) => i.title ?? "");
          toReturn.products = toReturn.products?.sortedBy<num>((i) => i.order ?? 0);
          for (ProductModel v in toReturn.products??[]){
            v.title = v.price != null && v.price! > 0 ? "${v.title} (${Utilities.formatPrice(context, v.price!)})" : v.title;
          }
          return toReturn;
        }));

    return infoList;
  }

  static Future<FunctionResponse> sendTicketOrder(Map<String, dynamic> data) async {
    return await _supabase.functions.invoke("send-ticket-ordert", body: {"orderDetails": data});
  }

  static Future<FunctionResponse> fetchTransactions(String formLink) async {
    return await _supabase.functions.invoke("fetch-transactions", body: {"formLink": formLink});
  }

  static Future<FormModel?> getFormFromLink(String link) async {
    final response = await _supabase
        .rpc('get_form_from_linkt', params: {'form_link': link});

    if(response["code"] == 200){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
  }

  static Future<String> getReportForOccasion(String link) async {
    final response = await _supabase
        .rpc('get_report_for_occasion_with_security', params: {'form_link': link});

    if(response["code"] == 200){
      return response["data"];
    }
    return "";
  }

  static Future<FormModel?> getFormForEdit(String formLink) async {
    var data = await _supabase
        .from(Tb.forms.table)
        .select()
        .eq(Tb.forms.link, formLink)
        .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return FormModel.fromJson(data);
  }

  static Future<void> updateForm(FormModel form) async {
    var upsertObj = form.toEditedJson();
    if(form.id!=null) {
      await _supabase.from(Tb.forms.table).update(upsertObj).eq(Tb.forms.id, form.id!);
    }
    else {
      upsertObj.remove(Tb.forms.id);
      upsertObj.addAll({Tb.forms.occasion: RightsService.currentOccasion!});
      await _supabase.from(Tb.forms.table).insert(upsertObj);
    }
  }

  static Future<BlueprintModel?> getBlueprint(String mySecret, String formKey, int blueprintId) async {
    final response = await _supabase.rpc(
      'get_blueprint',
      params: {
        'my_secret': mySecret,
        'form_key': formKey,
        'blueprint_id': blueprintId,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

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

  static Future<void> stornoOrder(int id) async {
    final response = await _supabase.rpc(
      'update_order_and_tickets_to_storno_with_security',
      params: {
        'order_id': id,
      },
    );

    if (response["code"] != 200) {
      throw Exception("Storno order failed: ${response['code']}: ${response['message']}");
    }

    await sendStornoTicketOrderEmail(orderId: id);
  }

  static Future<BlueprintModel?> getBlueprintForEdit(String formKey) async {

    final response = await _supabase.rpc(
      'get_blueprint_editor',
      params: {
        'form_link': formKey,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<bool> updateBlueprint(context, BlueprintModel blueprint) async {
    final response = await _supabase.rpc(
      'update_blueprint',
      params: {
        'input_data': blueprint,
      },
    );

    var code = response["code"];
    if (code != 200) {
      ToastHelper.Show(context, code.toString(), severity: ToastSeverity.NotOk);
      return false;
    }

    return true;
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

    final response = await _supabase.rpc(
      'get_orders',
      params: {
        'form_link': formLink,
      },
    );

    if (response["code"] != 200) {
      return [];
    }
    var json = response["data"];

    final List<BlueprintObjectModel>? spots = BlueprintHelper.parseSpots(json);
    final List<ProductModel>? products = BlueprintHelper.parseProducts(json);
    final List<TicketModel>? tickets = BlueprintHelper.parseTickets(json);
    final List<OrderModel> orders = BlueprintHelper.parseOrders(json)!;
    final List<PaymentInfoModel>? payments = BlueprintHelper.parsePaymentInfo(json);
    final List<OrderProductTicketModel>? orderProductTickets = BlueprintHelper.parseOrderProductTickets(json);

    for (var order in orders) {
      // Attach tickets related to the order via orderProductTickets
      final List<TicketModel> relatedTickets = tickets!.where((ticket) {
        return orderProductTickets!.any((opt) => opt.orderId == order.id && opt.ticketId == ticket.id);
      }).toList();
      order.relatedTickets = relatedTickets;

      for (var ticket in order.relatedTickets!) {
        // Relate spots to the ticket via orderProductTickets
        ticket.relatedSpot = spots!.firstWhereOrNull((spot) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.id == spot.orderProductTicket);
        });

        // Relate products to the ticket via orderProductTickets
        ticket.relatedProducts = products!.where((product) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.productId == product.id);
        }).toList();

        // Relate order to the ticket via orderProductTickets
        ticket.relatedOrder = orders!.firstWhereOrNull((order) {
          return orderProductTickets!.any((opt) => opt.ticketId == ticket.id && opt.orderId == order.id);
        });
      }


      // Attach spots related to the tickets
      final List<BlueprintObjectModel> relatedSpots = spots!.where((spot) {
        return relatedTickets.any((ticket) => ticket.id == spot.orderProductTicket);
      }).toList();

      // Attach products related to the tickets
      final List<ProductModel> relatedProducts = products!.where((product) {
        return relatedTickets.any((ticket) => ticket.id == product.id);
      }).toList();

      // Attach payment info
      final PaymentInfoModel? relatedPaymentInfo =
      payments!.firstWhereOrNull((payment) => payment.id == order.paymentInfo);

      // Update the order object
      order.relatedSpots = relatedSpots;
      order.relatedProducts = relatedProducts;
      order.paymentInfoModel = relatedPaymentInfo;
    }
    return orders.sortedBy((ou)=>ou.createdAt!).reversed.toList();
  }

  static Future<List<TicketModel>> getAllTickets(String formLink) async {
    var orders = await getAllOrders(formLink);
    List<TicketModel> toReturn = [];
    for(var o in orders){

      for(TicketModel t in o.relatedTickets??[]){
        var tckst = o.data?[TbEshop.tickets.table];
        t.totalPrice = tckst.isNotEmpty ? 0 : null;
        for(var tt in tckst){
          if(tt[TbEshop.tickets.ticket_symbol] != t.ticketSymbol){
            continue;
          }
          for(var p in tt[TbEshop.products.table]){
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
      "update_order_and_tickets_to_paid_with_security",
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

  static Future<TicketModel> getTicket(String scannedId) async {
    final response = await _supabase.rpc('get_ticket', params: {
      'scanned_id': scannedId,
    });

    if (response["code"] != 200) {
      throw Exception("Error retrieving ticket: ${response["message"]}");
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


}
