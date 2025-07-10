import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:intl/intl.dart';
import 'package:flutter/material.dart';

import 'inventory_pool_model.dart';

class InventoryContextModel {
  int? id;
  int inventoryPoolId;
  DateTime? blockDate;
  String? title;
  int? order;
  InventoryPoolModel? inventoryPool;

  InventoryContextModel({
    this.id,
    required this.inventoryPoolId,
    this.blockDate,
    this.title,
    this.order,
    this.inventoryPool,
  });

  factory InventoryContextModel.fromJson(Map<String, dynamic> json) {
    final t = Tb.inventory_contexts;
    return InventoryContextModel(
      id: json[t.id],
      inventoryPoolId: json[t.inventory_pool],
      blockDate: json[t.block_date] != null ? DateTime.parse(json[t.block_date]) : null,
      title: json[t.title],
      order: json[t.order],
    );
  }

  Map<String, dynamic> toJson() {
    final t = Tb.inventory_contexts;
    return {
      t.id: id,
      t.inventory_pool: inventoryPoolId,
      t.block_date: blockDate?.toIso8601String().substring(0, 10), //YYYY-MM-DD
      t.title: title,
      t.order: order,
    };
  }

  /// Creates a new instance with updated fields.
  InventoryContextModel copyWith({
    int? id,
    int? inventoryPoolId,
    DateTime? blockDate,
    String? title,
    int? order,
    InventoryPoolModel? inventoryPool,
  }) {
    return InventoryContextModel(
      id: id ?? this.id,
      inventoryPoolId: inventoryPoolId ?? this.inventoryPoolId,
      blockDate: blockDate ?? this.blockDate,
      title: title ?? this.title,
      order: order ?? this.order,
      inventoryPool: inventoryPool ?? this.inventoryPool,
    );
  }

  String getContextTitle(BuildContext context) {
    if (title != null && title!.isNotEmpty) {
      return title!;
    }
    if (blockDate != null) {
      final String locale = Localizations.localeOf(context).toString();
      final String datePart = DateFormat('d.M.', locale).format(blockDate!);
      final String dayOfWeekPart = DateFormat('E', locale).format(blockDate!).toUpperCase();
      return '$dayOfWeekPart $datePart';
    }
    return InventoryStrings.contextDefaultTitle;
  }

  String getFullTitle(BuildContext context) => "${inventoryPool?.title ?? InventoryStrings.poolDefaultTitle} - ${getContextTitle(context)}";
}