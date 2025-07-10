import 'package:fstapp/components/inventory/models/spot_management_bundle.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbSpots {
  static final _supabase = Supabase.instance.client;

  /// Fetches a bundle of spots and all related data for a given inventory pool.
  static Future<SpotManagementBundle> getSpotManagementBundle(int inventoryPoolId) async {
    final response = await _supabase.rpc(
      'get_spot_management_bundle',
      params: {'p_inventory_pool_id': inventoryPoolId},
    );

    // Handle potential errors from the RPC call
    if (response is Map && response.containsKey('code') && response['code'] != 200) {
      throw Exception("Failed to fetch spot bundle: ${response['message']}");
    }

    // The RPC returns a single JSON object which is the bundle.
    final bundle = SpotManagementBundle.fromJson(response);

    // Create maps for efficient lookups.
    final contextMap = { for (var c in bundle.inventoryContexts) c.id: c };
    final resourceMap = { for (var r in bundle.resources) r.id: r };
    final slotMap = { for (var s in bundle.resourceSlots) s.id: s };
    final orderProductTicketMap = { for (var opt in bundle.orderProductTickets) opt.id: opt };
    final orderMap = { for (var o in bundle.orders) o.id: o };

    // Link orderProductTickets to their parent orders first for efficiency.
    for (final opt in bundle.orderProductTickets) {
      if (opt.orderId != null) {
        opt.order = orderMap[opt.orderId];
      }
    }

    // Iterate through the spots and link all related models.
    for (final spot in bundle.spots) {
      // Link inventory data
      if (spot.inventoryContextId != null) {
        spot.inventoryContext = contextMap[spot.inventoryContextId];
      }
      if (spot.resourceId != null) {
        spot.resource = resourceMap[spot.resourceId];
      }
      if (spot.resourceSlotId != null) {
        spot.resourceSlot = slotMap[spot.resourceSlotId];
      }

      // Link order data using the pre-processed map
      if (spot.orderProductTicketId != null) {
        spot.orderProductTicket = orderProductTicketMap[spot.orderProductTicketId];
        // The order is already linked to the orderProductTicket, so we just assign it.
        if (spot.orderProductTicket != null) {
          spot.order = spot.orderProductTicket!.order;
        }
      }
    }

    return bundle;
  }

  /// NEW: Updates a batch of spot assignments in a single transaction.
  /// This is more efficient than calling updateSpot multiple times.
  static Future<void> updateSpotAssignments(List<Map<String, dynamic>> changes) async {
    if (changes.isEmpty) {
      return;
    }

    // The RPC function `update_spot_assignments` will handle errors internally
    // and throw a PSQLException, which Supabase will catch and re-throw as a PostgrestException.
    // The default behavior of the Supabase client will handle this exception,
    // so we don't need to check the response body for a custom error code here.
    await _supabase.rpc(
      'update_spot_assignments',
      params: {'p_changes': changes},
    );
  }
}
