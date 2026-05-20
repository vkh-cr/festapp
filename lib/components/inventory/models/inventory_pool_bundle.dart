import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';

import '../../map/place_model.dart';
import 'inventory_context_model.dart';
import 'inventory_pool_model.dart';
import 'product_inventory_context_model.dart';

class InventoryPoolBundle {
  final InventoryPoolModel pool;
  final OccasionModel? occasion;
  List<ResourceModel>? resources;
  List<InventoryContextModel>? contexts;
  List<PlaceModel>? places;
  List<ProductModel>? products;
  List<ProductInventoryContextModel>? productInventoryContexts;

  InventoryPoolBundle({
    required this.pool,
    this.occasion,
    this.resources,
    this.contexts,
    this.places,
    this.products,
    this.productInventoryContexts,
  });

  factory InventoryPoolBundle.fromJson(Map<String, dynamic> json) {
    // Helper to safely parse lists from JSON.
    List<T>? parseList<T>(
        String key, T Function(Map<String, dynamic>) fromJson) {
      if (json[key] is! List) return null;
      return (json[key] as List)
          .map((item) => fromJson(item as Map<String, dynamic>))
          .toList();
    }

    // 1. Parse all relevant lists from the JSON bundle.
    final List<InventoryContextModel>? contexts =
        parseList('contexts', (c) => InventoryContextModel.fromJson(c));
    final List<ProductModel>? products =
        parseList('products', (p) => ProductModel.fromJson(p));
    final List<ProductInventoryContextModel>? productContextLinks = parseList(
        'product_inventory_contexts',
        (pic) => ProductInventoryContextModel.fromJson(pic));

    // 2. Perform the "joins" in memory if all data is available.
    if (products != null && contexts != null && productContextLinks != null) {
      // Create a map for efficient product lookup using a standard for loop.
      final Map<int, ProductModel> productMap = {};
      for (final product in products) {
        if (product.id != null) {
          productMap[product.id!] = product;
        }
      }

      // Create a map for efficient context lookup using a standard for loop.
      final Map<int, InventoryContextModel> contextMap = {};
      for (final context in contexts) {
        if (context.id != null) {
          contextMap[context.id!] = context;
        }
      }

      // Iterate through the join table records (the links).
      for (final link in productContextLinks) {
        // Join #1: Find the parent product and add this link to its list.
        final ProductModel? parentProduct = productMap[link.productId];
        parentProduct?.includedInventories.add(link);

        // Join #2: Find the parent context and attach its full object to the link.
        link.inventoryContext = contextMap[link.inventoryContextId];
      }
    }

    // 3. Return the fully constructed and linked bundle.
    return InventoryPoolBundle(
      pool: InventoryPoolModel.fromJson(json['pool']),
      occasion: json['occasion'] != null
          ? OccasionModel.fromJson(json['occasion'])
          : null,
      resources: parseList('resources', (r) => ResourceModel.fromJson(r)),
      places: parseList('places', (p) => PlaceModel.fromJson(p)),
      contexts: contexts,
      products: products,
      productInventoryContexts: productContextLinks,
    );
  }

  /// Converts the bundle to a JSON object for updating data.
  Map<String, dynamic> toJson() {
    return {
      'pool': pool.toJson(),
      'contexts': contexts?.map((c) => c.toJson()).toList(),
    };
  }
}
