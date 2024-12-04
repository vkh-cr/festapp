import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class ProductTypeModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  String? description;
  String? type;
  Map<String, dynamic>? data;
  int? occasion;
  List<ProductModel>? products;

  factory ProductTypeModel.fromJson(Map<String, dynamic> json) {
    return ProductTypeModel(
      id: json[TbEshop.product_types.id],
      createdAt: json[TbEshop.product_types.created_at] != null
          ? DateTime.parse(json[TbEshop.product_types.created_at])
          : null,
      updatedAt: json[TbEshop.product_types.updated_at] != null
          ? DateTime.parse(json[TbEshop.product_types.updated_at])
          : null,
      title: json[TbEshop.product_types.title],
      description: json[TbEshop.product_types.description],
      type: json[TbEshop.product_types.type],
      data: json[TbEshop.product_types.data],
      occasion: json[TbEshop.product_types.occasion],
      products: json[TbEshop.products.table] != null
          ? List<ProductModel>.from(
          json[TbEshop.products.table].map((p) => ProductModel.fromJson(p)))
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.product_types.id: id,
    TbEshop.product_types.created_at: createdAt?.toIso8601String(),
    TbEshop.product_types.updated_at: updatedAt?.toIso8601String(),
    TbEshop.product_types.title: title,
    TbEshop.product_types.description: description,
    TbEshop.product_types.type: type,
    TbEshop.product_types.data: data,
    TbEshop.product_types.occasion: occasion,
    TbEshop.products.table: products?.map((p) => p.toJson()).toList(),
  };

  String toBasicString() => title ?? id.toString();

  ProductTypeModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.description,
    this.type,
    this.data,
    this.occasion,
    this.products,
  });
}
