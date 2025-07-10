import 'package:fstapp/data_models/tb.dart';

class InventoryPoolModel {
  int? id;
  String? title;
  int? sellableCapacity;
  int? occasionId;
  bool isAutoResourceAssignment;

  InventoryPoolModel({
    this.id,
    this.title,
    this.sellableCapacity,
    this.occasionId,
    this.isAutoResourceAssignment = true,
  });

  factory InventoryPoolModel.fromJson(Map<String, dynamic> json) {
    final t = Tb.inventory_pools;
    final data = json[t.data];
    bool isOneOffValue = true;

    // Use the new constant to access the property
    if (data is Map<String, dynamic> && data[t.data_is_auto_resource_assignment] is bool) {
      isOneOffValue = data[t.data_is_auto_resource_assignment];
    }

    return InventoryPoolModel(
      id: json[t.id],
      title: json[t.title],
      sellableCapacity: json[t.sellable_capacity],
      occasionId: json[t.occasion],
      isAutoResourceAssignment: isOneOffValue,
    );
  }

  Map<String, dynamic> toJson() {
    final t = Tb.inventory_pools;
    return {
      t.id: id,
      t.title: title,
      t.sellable_capacity: sellableCapacity,
      t.occasion: occasionId,
      t.data: {
        t.data_is_auto_resource_assignment: isAutoResourceAssignment,
      },
    };
  }
}