import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class ProductTypeModel {
  final int? id;
  String? title;
  String? description;
  final String? type;
  Map<String, dynamic>? data;
  final int? occasion;
  List<ProductModel>? products;

  ProductTypeModel({
    this.id,
    this.title,
    this.description,
    this.type,
    this.data,
    this.occasion,
    this.products,
  });

  factory ProductTypeModel.fromJson(Map<String, dynamic> json) {
    return ProductTypeModel(
      id: json[TbEshop.product_types.id],
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
    TbEshop.product_types.title: title,
    TbEshop.product_types.description: description,
    TbEshop.product_types.type: type,
    TbEshop.product_types.data: data,
    TbEshop.product_types.occasion: occasion,
    TbEshop.products.table: products,
  };

  String toBasicString() => title ?? id.toString();
}
