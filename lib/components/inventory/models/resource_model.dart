import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/components/inventory/views/resource_editor_view.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:trina_grid/trina_grid.dart';
import 'package:fstapp/data_services/db_inventory_pools.dart';

class ResourceModel implements ITrinaRowModel {
  @override
  int? id;
  String? title;
  int? capacity;
  Map<String, dynamic>? bookingRules;
  int inventoryPoolId;

  ResourceModel({
    this.id,
    this.title,
    this.capacity = 1,
    this.bookingRules,
    required this.inventoryPoolId,
  });

  // All other methods (fromJson, toJson, etc.) remain the same...
  factory ResourceModel.fromJson(Map<String, dynamic> json) {
    final t = Tb.resources;
    return ResourceModel(
      id: json[t.id],
      title: json[t.title],
      capacity: json[t.capacity] ?? 1,
      bookingRules: json[t.booking_rules],
      inventoryPoolId: json[t.inventory_pool],
    );
  }

  static ResourceModel fromPlutoJson(Map<String, dynamic> json) {
    return ResourceModel(
      id: json[ResourceEditorView.RESOURCE_ID] == -1
          ? null
          : json[ResourceEditorView.RESOURCE_ID],
      title: json[ResourceEditorView.RESOURCE_TITLE] as String?,
      capacity: json[ResourceEditorView.RESOURCE_CAPACITY],
      inventoryPoolId: json[ResourceEditorView.INVENTORY_POOL_ID_FIELD] as int,
    );
  }

  Map<String, dynamic> toJson() {
    final t = Tb.resources;
    return {
      t.id: id,
      t.title: title,
      t.capacity: capacity,
      t.booking_rules: bookingRules,
      t.inventory_pool: inventoryPoolId,
    };
  }

  ResourceModel copyWith({
    int? id,
    String? title,
    int? capacity,
    Map<String, dynamic>? bookingRules,
    int? inventoryPoolId,
  }) {
    return ResourceModel(
      id: id ?? this.id,
      title: title ?? this.title,
      capacity: capacity ?? this.capacity,
      bookingRules: bookingRules ?? this.bookingRules,
      inventoryPoolId: inventoryPoolId ?? this.inventoryPoolId,
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      ResourceEditorView.RESOURCE_ID: TrinaCell(value: id),
      ResourceEditorView.RESOURCE_TITLE: TrinaCell(value: title),
      ResourceEditorView.RESOURCE_CAPACITY: TrinaCell(value: capacity),
      ResourceEditorView.INVENTORY_POOL_ID_FIELD:
      TrinaCell(value: inventoryPoolId),
    });
  }

  @override
  Future<void> deleteMethod(BuildContext context) async {
    if (id == null) return;
    await ExceptionHandler.guard(
      context,
      futureFunction: () => DbInventoryPools.deleteResource(id!),
      defaultErrorMessage: "Failed to delete resource.",
      rethrowError: true,
    );
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await ExceptionHandler.guard(
      context,
      futureFunction: () => DbInventoryPools.updateResource(this),
      defaultErrorMessage: "Failed to save resource.",
      rethrowError: true,
    );
  }

  @override
  String toBasicString() {
    return title ?? InventoryStrings.resourceDefaultTitle(id.toString());
  }
}