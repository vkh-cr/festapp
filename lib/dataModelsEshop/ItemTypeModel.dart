import 'package:fstapp/dataModelsEshop/ItemModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class ItemTypeModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  Map<String, dynamic>? data;
  int? occasion;
  List<ItemModel>? items; // Embedded list of items

  factory ItemTypeModel.fromJson(Map<String, dynamic> json) {
    return ItemTypeModel(
      id: json[TbEshop.item_types.id],
      createdAt: json[TbEshop.item_types.created_at] != null
          ? DateTime.parse(json[TbEshop.item_types.created_at])
          : null,
      updatedAt: json[TbEshop.item_types.updated_at] != null
          ? DateTime.parse(json[TbEshop.item_types.updated_at])
          : null,
      title: json[TbEshop.item_types.title],
      description: json[TbEshop.item_types.description],
      type: json[TbEshop.item_types.type],
      data: json[TbEshop.item_types.data],
      occasion: json[TbEshop.item_types.occasion],
      items: json[TbEshop.items.table] != null
          ? List<ItemModel>.from(
          json[TbEshop.items.table].map((item) => ItemModel.fromJson(item)))
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.item_types.id: id,
    TbEshop.item_types.created_at: createdAt?.toIso8601String(),
    TbEshop.item_types.updated_at: updatedAt?.toIso8601String(),
    TbEshop.item_types.title: title,
    TbEshop.item_types.description: description,
    TbEshop.item_types.type: type,
    TbEshop.item_types.data: data,
    TbEshop.item_types.occasion: occasion,
    TbEshop.items.table: items?.map((item) => item.toJson()).toList(),
  };

  String toBasicString() => title ?? id.toString();

  ItemTypeModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.data,
    this.occasion,
    this.items,
  });
}
