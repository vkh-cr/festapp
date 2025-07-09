import 'package:fstapp/components/inventory/models/inventory_pool_bundle.dart';
import 'package:fstapp/components/inventory/models/inventory_pools_list_bundle.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbInventoryPools {
  static final _supabase = Supabase.instance.client;

  /// Fetches a bundle containing the occasion, all its inventory pools,
  /// and all related contexts and spots, with objects interlinked.
  static Future<InventoryPoolsListBundle> getInventoryPoolsByOccasionLink(String occasionLink) async {
    final response = await _supabase.rpc(
      'get_inventory_pools_by_occasion_link',
      params: {'p_occasion_link': occasionLink},
    );

    if (response is Map && response.containsKey('code') && response['code'] != 200) {
      throw Exception("Failed to fetch inventory pools: ${response['message']}");
    }

    // 1. Deserialize the flat lists from the JSON response.
    final bundle = InventoryPoolsListBundle.fromJson(response);

    // 2. Create maps for efficient lookups.
    final poolMap = { for (var p in bundle.pools) p.id: p };
    final contextMap = { for (var c in bundle.inventoryContexts) c.id: c };

    // 3. Link the objects together for convenient access.
    // Link inventory contexts to their parent pool.
    for (final context in bundle.inventoryContexts) {
      context.inventoryPool = poolMap[context.inventoryPoolId];
        }

    // Link spots to their parent inventory context.
    for (final spot in bundle.spots) {
      if (spot.inventoryContextId != null) {
        spot.inventoryContext = contextMap[spot.inventoryContextId];
      }
    }

    return bundle;
  }

  /// Fetches the entire configuration bundle for a given inventory pool.
  static Future<InventoryPoolBundle> getInventoryPoolBundle(int poolId) async {
    final response = await _supabase.rpc(
      'get_inventory_pool_bundle',
      params: {'p_inventory_pool_id': poolId},
    );

    if (response is Map && response.containsKey('code') && response['code'] != 200) {
      throw Exception("Failed to fetch inventory pool bundle: ${response['message']}");
    }

    return InventoryPoolBundle.fromJson(response);
  }

  /// Creates or updates an InventoryPool and all its related data in a single transaction.
  static Future<InventoryPoolBundle> updateInventoryPoolBundle(InventoryPoolBundle bundle) async {
    final response = await _supabase.rpc(
      'update_inventory_pool_bundle',
      params: {'p_bundle_data': bundle },
    );

    return InventoryPoolBundle.fromJson(response);
  }

  /// Deletes an InventoryPool, with a safety check for existing reservations.
  static Future<void> deleteInventoryPool(int poolId) async {
    await _supabase.rpc(
      'delete_inventory_pool',
      params: {'p_inventory_pool_id': poolId},
    );
  }

  /// Deletes a resource by its ID.
  static Future<void> deleteResource(int resourceId) async {
    await _supabase.rpc(
      'delete_resource',
      params: {'p_resource_id': resourceId},
    );
  }

  static Future<void> updateResource(ResourceModel resource) async {
    await _supabase.rpc(
      'update_resource',
      params: {'p_input': resource.toJson()},
    );
  }
}