import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class ItemModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  String? description;
  double? price;
  Map<String, dynamic>? data;
  int? itemType;
  int? occasion;

  static const String foodType = "food";
  static const String taxiType = "taxi";

  factory ItemModel.fromJson(Map<String, dynamic> json) {
    return ItemModel(
      id: json[TbEshop.items.id],
      createdAt: json[TbEshop.items.created_at] != null ? DateTime.parse(json[TbEshop.items.created_at]) : null,
      updatedAt: json[TbEshop.items.updated_at] != null ? DateTime.parse(json[TbEshop.items.updated_at]) : null,
      title: json[TbEshop.items.title],
      description: json[TbEshop.items.description],
      price: json[TbEshop.items.price] != null ? double.tryParse(json[TbEshop.items.price].toString()) : null,
      data: json[TbEshop.items.data],
      itemType: json[TbEshop.items.item_type],
      occasion: json[TbEshop.items.occasion],
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.items.id: id,
    TbEshop.items.created_at: createdAt?.toIso8601String(),
    TbEshop.items.updated_at: updatedAt?.toIso8601String(),
    TbEshop.items.title: title,
    TbEshop.items.description: description,
    TbEshop.items.price: price,
    TbEshop.items.data: data,
    TbEshop.items.item_type: itemType,
    TbEshop.items.occasion: occasion,
  };

  String toBasicString() => title ?? id.toString();

  ItemModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.description,
    this.price,
    this.data,
    this.itemType,
    this.occasion,
  });
}
