import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/data_models/place_model.dart';
import 'package:fstapp/data_models/tb.dart';

enum InventoryPoolType {
  accommodation,
  food,
  other,
}

extension InventoryPoolTypeUI on InventoryPoolType {
  IconData get icon {
    switch (this) {
      case InventoryPoolType.accommodation:
        return Icons.hotel;
      case InventoryPoolType.food:
        return Icons.restaurant_rounded;
      case InventoryPoolType.other:
        return Icons.category_rounded;
    }
  }

  String get displayName {
    switch (this) {
      case InventoryPoolType.accommodation:
        return InventoryStrings.typeAccommodation;
      case InventoryPoolType.food:
        return InventoryStrings.typeFood;
      case InventoryPoolType.other:
        return InventoryStrings.typeOther;
    }
  }
}

String? _inventoryPoolTypeToString(InventoryPoolType type) {
  switch (type) {
    case InventoryPoolType.accommodation:
      return 'accommodation';
    case InventoryPoolType.food:
      return 'food';
    case InventoryPoolType.other:
      return null;
  }
}

InventoryPoolType _stringToInventoryPoolType(String? s) {
  switch (s) {
    case 'accommodation':
      return InventoryPoolType.accommodation;
    case 'food':
      return InventoryPoolType.food;
    default:
      return InventoryPoolType.other;
  }
}

class InventoryPoolModel {
  int? id;
  String? title;
  int? sellableCapacity;
  int? occasionId;
  bool isAutoResourceAssignment;
  String? description;
  InventoryPoolType type;
  bool isEditableByUser;
  int? placeId;
  PlaceModel? place;

  InventoryPoolModel({
    this.id,
    this.title,
    this.sellableCapacity,
    this.occasionId,
    this.isAutoResourceAssignment = true,
    this.description,
    this.type = InventoryPoolType.other,
    this.isEditableByUser = false,
    this.placeId,
    this.place,
  });

  factory InventoryPoolModel.fromJson(Map<String, dynamic> json) {
    final t = Tb.inventory_pools;
    final data = json[t.data] as Map<String, dynamic>? ?? {};

    return InventoryPoolModel(
      id: json[t.id],
      title: json[t.title],
      sellableCapacity: json[t.sellable_capacity],
      occasionId: json[t.occasion],
      isAutoResourceAssignment: data[t.data_is_auto_resource_assignment] as bool? ?? true,
      description: json[t.description],
      type: _stringToInventoryPoolType(json[t.type]),
      placeId: data[t.data_place_id] as int?, // ADDED
    );
  }

  Map<String, dynamic> toJson() {
    final t = Tb.inventory_pools;
    return {
      t.id: id,
      t.title: title,
      t.sellable_capacity: sellableCapacity,
      t.occasion: occasionId,
      t.description: description,
      t.type: _inventoryPoolTypeToString(type),
      t.data: {
        t.data_is_auto_resource_assignment: isAutoResourceAssignment,
        t.data_place_id: place?.id ?? placeId,
      },
    };
  }
}