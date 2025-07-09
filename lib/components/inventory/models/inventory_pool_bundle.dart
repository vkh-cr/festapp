import 'package:fstapp/components/inventory/models/resource_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';

import 'inventory_context_model.dart';
import 'inventory_pool_model.dart';

class InventoryPoolBundle {
  final InventoryPoolModel pool;
  final OccasionModel? occasion;
  List<ResourceModel>? resources;
  List<InventoryContextModel>? contexts;

  InventoryPoolBundle({
    required this.pool,
    this.occasion,
    required this.resources,
    required this.contexts,
  });

  factory InventoryPoolBundle.fromJson(Map<String, dynamic> json) {
    return InventoryPoolBundle(
      pool: InventoryPoolModel.fromJson(json['pool']),
      occasion: OccasionModel.fromJson(json['occasion']),
      resources: (json['resources'] as List)
          .map((r) => ResourceModel.fromJson(r))
          .toList(),
      contexts: (json['contexts'] as List)
          .map((c) => InventoryContextModel.fromJson(c))
          .toList(),
    );
  }

  /// Converts the bundle to a JSON object for the update function.
  Map<String, dynamic> toJson() {
    return {
      'pool': pool,
      'contexts': contexts,
    };
  }
}