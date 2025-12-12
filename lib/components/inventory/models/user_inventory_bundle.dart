import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/inventory/models/inventory_context_model.dart';
import 'package:fstapp/components/inventory/models/inventory_pool_model.dart';
import 'package:fstapp/components/inventory/models/product_inventory_context_model.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';

import '../../map/place_model.dart';

// An abstract interface can help ensure all models have an 'id' for serialization.
// This is good practice but not strictly required for the solution to work.
abstract class Identifiable {
  dynamic get id;
  Map<String, dynamic> toJson();
}

// Assume your models like ProductModel, PlaceModel, etc., implement Identifiable.
// For example: class ProductModel implements Identifiable { ... }

class UserInventoryBundle {
  final List<InventoryContextModel> inventoryContexts;
  final List<InventoryPoolModel> inventoryPools;
  final List<ResourceModel> resources;
  final List<ProductModel> products;
  final List<ProductInventoryContextModel> productInventoryContexts;
  final List<PlaceModel> places;

  UserInventoryBundle({
    required this.inventoryContexts,
    required this.inventoryPools,
    required this.resources,
    required this.products,
    required this.productInventoryContexts,
    required this.places,
  });

  /// **Creates a `UserInventoryBundle` from JSON using high-performance lookups.**
  factory UserInventoryBundle.fromJson(Map<String, dynamic> json) {
    // Helper to parse a JSON map into a Map<String, T> lookup.
    // Using String keys is the most direct mapping from JSON and avoids parsing.
    Map<String, T> _parseLookup<T>(String key, T Function(Map<String, dynamic>) fromJson) {
      if (json[key] == null) return {};
      final items = json[key] as Map<String, dynamic>;
      return items.map((key, value) => MapEntry(key, fromJson(value as Map<String, dynamic>)));
    }

    // Helper to parse a JSON map into a simple list.
    List<T> _parseList<T>(String key, T Function(Map<String, dynamic>) fromJson) {
      if (json[key] == null) return [];
      final items = json[key] as Map<String, dynamic>;
      return items.values.map((item) => fromJson(item as Map<String, dynamic>)).toList();
    }

    // 1. Create String-keyed maps for efficient lookups.
    final poolMap = _parseLookup('inventory_pools', InventoryPoolModel.fromJson);
    final resourceMap = _parseLookup('resources', ResourceModel.fromJson);
    final productMap = _parseLookup('products', ProductModel.fromJson);
    final contextMap = _parseLookup('inventory_contexts', InventoryContextModel.fromJson);
    final placeMap = _parseLookup('places', PlaceModel.fromJson);
    final productInventoryContextsList = _parseList('product_inventory_contexts', ProductInventoryContextModel.fromJson);

    // 2. Link objects together. Lookups now require converting the integer ID to a string.
    for (final link in productInventoryContextsList) {
      productMap[link.productId.toString()]?.includedInventories.add(link);
      link.inventoryContext = contextMap[link.inventoryContextId.toString()];
    }

    for (final context in contextMap.values) {
      context.inventoryPool = poolMap[context.inventoryPoolId.toString()];
      if (context.productId != null) {
        context.product = productMap[context.productId.toString()];
      }
      if (context.spots != null) {
        for (final spot in context.spots!) {
          if (spot.resourceId != null) {
            spot.resource = resourceMap[spot.resourceId.toString()];
          }
          if (spot.productId != null) {
            spot.product = productMap[spot.productId.toString()];
          }
          spot.inventoryContext = context;
        }
      }
    }

    for (final pool in poolMap.values) {
      if (pool.placeId != null) {
        pool.place = placeMap[pool.placeId.toString()];
      }
    }

    // 3. Construct the final bundle with lists for the public API.
    return UserInventoryBundle(
      inventoryContexts: contextMap.values.toList(),
      inventoryPools: poolMap.values.toList(),
      resources: resourceMap.values.toList(),
      products: productMap.values.toList(),
      productInventoryContexts: productInventoryContextsList,
      places: placeMap.values.toList(),
    );
  }

  Map<String, dynamic> toJson() {
    // Helper to convert a list of objects into a lookup map.
    // It uses dynamic types to work with any model that has an 'id'.
    // The `toJsonFunc` parameter allows for custom serialization logic.
    Map<String, dynamic> _listToLookup(List<dynamic> list, {Map<String, dynamic> Function(dynamic)? toJsonFunc}) {
      if (list.isEmpty) return {};

      // Use the provided serialization function, or default to item.toJson().
      final serializer = toJsonFunc ?? (item) => item.toJson();

      return { for (final item in list) item.id.toString(): serializer(item) };
    }

    return {
      'inventory_contexts': _listToLookup(inventoryContexts, toJsonFunc: (x) => x.toJsonWithSpots()),
      'inventory_pools': _listToLookup(inventoryPools),
      'resources': _listToLookup(resources),
      'products': _listToLookup(products),
      'product_inventory_contexts': _listToLookup(productInventoryContexts),
      'places': _listToLookup(places),
    };
  }
}