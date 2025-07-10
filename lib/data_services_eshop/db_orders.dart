import 'package:collection/collection.dart';
import 'package:fstapp/components/blueprint/get_orders_helper.dart';
import 'package:fstapp/components/inventory/models/inventory_context_model.dart';
import 'package:fstapp/components/inventory/models/inventory_pool_bundle.dart';
import 'package:fstapp/components/inventory/models/inventory_pool_model.dart';
import 'package:fstapp/components/inventory/models/product_inventory_context_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/order_product_ticket_model.dart';
import 'package:fstapp/data_models_eshop/product_edit_bundle.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class ReservationsBundle {
  final List<OrderModel> orders;
  final List<FormModel> forms;

  ReservationsBundle({
    required this.orders,
    required this.forms,
  });
}

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

  static Future<ReservationsBundle> getAllOrdersBundle({
    String? occasionLink,
    String? formLink,
    bool includeOrderDetails = false,
    bool includeSpots = false,
  }) async {
    assert(occasionLink != null || formLink != null, 'Either occasionLink or formLink must be provided.');

    // Build a map of options based on the function parameters.
    final options = <String, bool>{};
    if (includeOrderDetails == true) {
      options['include_full_order_data'] = true;
    }
    if (includeSpots == true) {
      options['include_spots'] = true;
    }

    // Conditionally build the final parameters map for the RPC call.
    final params = <String, dynamic>{
      'p_occasion_link': occasionLink,
      'p_form_link': formLink,
      if (options.isNotEmpty) 'p_options': options,
    };

    final response = await _supabase.rpc('get_orders', params: params);

    if (response["code"] != 200) {
      throw Exception("${response['code']}: ${response['message']}");
    }

    final json = response["data"];

    final spots = GetOrdersHelper.parseSpots(json);
    final products = GetOrdersHelper.parseProducts(json);
    final productTypes = GetOrdersHelper.parseProductTypes(json);
    final tickets = GetOrdersHelper.parseTickets(json);
    final orders = GetOrdersHelper.parseOrders(json)!;
    final payments = GetOrdersHelper.parsePaymentInfo(json);
    final forms = GetOrdersHelper.parseForms(json);
    final orderProductTickets = GetOrdersHelper.parseOrderProductTickets(json);

    final ticketMap = { for (var t in tickets!) t.id: t };
    final productMap = { for (var p in products!) p.id: p };
    final paymentMap = { for (var p in payments!) p.id: p };
    final spotByOptId = { for (var s in spots!) s.orderProductTicket: s };

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
      order.form = forms?.firstWhereOrNull((f) => f.key == order.formKey);

      for (var ticket in relatedTickets) {
        final ticketOpts = ticketToOpt[ticket.id] ?? [];
        for (var opt in ticketOpts) {
          if (spotByOptId.containsKey(opt.id)) {
            ticket.relatedSpot = spotByOptId[opt.id];
            break;
          }
        }
        final productIds = ticketOpts.map((opt) => opt.productId).toSet();
        ticket.relatedProducts = productIds.map((pid) => productMap[pid]).whereType<ProductModel>().toList();
        ticket.relatedOrder = order;
      }

      final ticketIdsForOrder = relatedTickets.map((t) => t.id).toSet();
      order.relatedSpots = spots.where((s) => ticketIdsForOrder.contains(s.orderProductTicket)).toList();

      final orderProductIds = <int>{};
      for (var ticket in relatedTickets) {
        if (ticket.relatedProducts != null) {
          orderProductIds.addAll(ticket.relatedProducts!.map((p) => p.id!));
        }
      }
      order.relatedProducts = products.where((p) => orderProductIds.contains(p.id)).toList();
      order.paymentInfoModel = paymentMap[order.paymentInfo];

      if (order.isExpired()) {
        order.state = OrderModel.expiredState;
        for(var t in order.relatedTickets!.where((t)=>t.state == OrderModel.orderedState)){
          t.state = order.state;
        }
      }
    }

    orders.sort((a, b) => b.createdAt!.compareTo(a.createdAt!));

    return ReservationsBundle(orders: orders, forms: forms ?? []);
  }

  // MODIFIED: Fetches the bundle and performs client-side joins
  static Future<ProductsEditBundle> getProductsAndTypesForOccasion(String occasionLink) async {
    final response = await _supabase.rpc(
      'get_products_and_types_for_edit',
      params: {'occasion_link': occasionLink},
    );

    // Parse all data lists from the response
    final types = (response['product_types'] as List)
        .map((t) => ProductTypeModel.fromJson(t))
        .toList();
    final products = (response['products'] as List)
        .map((p) => ProductModel.fromJson(p))
        .toList();
    final pools = (response['inventory_pools'] as List)
        .map((p) => InventoryPoolModel.fromJson(p))
        .toList();
    final contexts = (response['inventory_contexts'] as List)
        .map((c) => InventoryContextModel.fromJson(c))
        .toList();
    final productContextLinks = (response['product_inventory_contexts'] as List)
        .map((pc) => ProductInventoryContextModel.fromJson(pc))
        .toList();

    // Create maps for efficient lookups
    final typesMap = {for (var t in types) t.id: t};
    final poolsMap = {for (var p in pools) p.id: p};
    final contextsMap = {for (var c in contexts) c.id: c};

    // Join inventory pools to inventory contexts
    for (var context in contexts) {
      context.inventoryPool = poolsMap[context.inventoryPoolId];
    }

    // Join inventory contexts to the link table models
    for (var link in productContextLinks) {
      link.inventoryContext = contextsMap[link.inventoryContextId];
    }

    // Group links by product ID
    final productLinksMap = groupBy(productContextLinks, (link) => link.productId);

    // Join everything to the final product models
    for (var product in products) {
      product.productType = typesMap[product.productTypeId];
      product.includedInventories = (productLinksMap[product.id] ?? [])
          .where((link) => link.inventoryContext != null)
          .toList();
    }

    products.sort((a, b) {
      final aType = a.productTypeId ?? 0;
      final bType = b.productTypeId ?? 0;
      if (aType != bType) return aType.compareTo(bType);
      final aOrder = a.order ?? 0;
      final bOrder = b.order ?? 0;
      return aOrder.compareTo(bOrder);
    });

    return ProductsEditBundle(
      products: products,
      productTypes: types,
      inventoryPools: pools,
      inventoryContexts: contexts,
    );
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
      "code": "TICKET_ORDER_STORNO",
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