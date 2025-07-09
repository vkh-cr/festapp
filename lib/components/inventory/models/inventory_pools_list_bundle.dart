import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models_eshop/spot_model.dart';
import 'package:fstapp/components/inventory/models/inventory_context_model.dart';
import 'inventory_pool_model.dart';

/// A data bundle containing the parent occasion, its associated inventory pools,
/// and all related spots and contexts.
class InventoryPoolsListBundle {
  final OccasionModel occasion;
  final List<InventoryPoolModel> pools;
  final List<InventoryContextModel> inventoryContexts;
  final List<SpotModel> spots;

  InventoryPoolsListBundle({
    required this.occasion,
    required this.pools,
    required this.inventoryContexts,
    required this.spots,
  });

  factory InventoryPoolsListBundle.fromJson(Map<String, dynamic> json) {
    return InventoryPoolsListBundle(
      occasion: OccasionModel.fromJson(json['occasion']),
      pools: (json['pools'] as List)
          .map((p) => InventoryPoolModel.fromJson(p))
          .toList(),
      inventoryContexts: (json['inventory_contexts'] as List)
          .map((c) => InventoryContextModel.fromJson(c))
          .toList(),
      spots: (json['spots'] as List)
          .map((s) => SpotModel.fromJson(s))
          .toList(),
    );
  }
}