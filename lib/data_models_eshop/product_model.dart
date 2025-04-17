import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:easy_localization/easy_localization.dart';

class ProductModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? title;
  bool? isHidden;
  String? description;
  double? price;
  Map<String, dynamic>? data;
  int? productTypeId;
  ProductTypeModel? productType;
  int? occasion;
  String? productTypeString;
  int? order;
  int? maximum;
  int? orderedCount;
  String? currencyCode;

  static const String foodType = "food";
  static const String taxiType = "taxi";
  static const String spotType = "spot";
  static const String metaTypeField = "type";
  static const String metaOrderedCount = "ordered_count";

  ProductModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.title,
    this.isHidden,
    this.description,
    this.price,
    this.data,
    this.productTypeId,
    this.occasion,
    this.productTypeString,
    this.order,
    this.maximum,
    this.orderedCount,
    this.currencyCode,
  });

  factory ProductModel.fromJson(Map<String, dynamic> json) {
    return ProductModel(
      id: json[TbEshop.products.id],
      createdAt: json[TbEshop.products.created_at] != null
          ? DateTime.parse(json[TbEshop.products.created_at])
          : null,
      updatedAt: json[TbEshop.products.updated_at] != null
          ? DateTime.parse(json[TbEshop.products.updated_at])
          : null,
      title: json[TbEshop.products.title],
      isHidden: json[TbEshop.products.is_hidden],
      description: json[TbEshop.products.description],
      price: json[TbEshop.products.price] != null
          ? double.tryParse(json[TbEshop.products.price].toString())
          : null,
      currencyCode: json[TbEshop.products.currency_code],
      data: json[TbEshop.products.data],
      productTypeId: json[TbEshop.products.product_type],
      occasion: json[TbEshop.products.occasion],
      productTypeString: json[metaTypeField],
      order: json[TbEshop.products.order],
      maximum: json[TbEshop.products.maximum],
      orderedCount: json[metaOrderedCount],
    );
  }

  // Convert the object to JSON
  Map<String, dynamic> toJson() => {
    TbEshop.products.id: id,
    TbEshop.products.title: title,
    TbEshop.products.is_hidden: isHidden,
    TbEshop.products.description: description,
    TbEshop.products.price: price,
    TbEshop.products.currency_code: currencyCode,
    TbEshop.products.data: data,
    TbEshop.products.product_type: productTypeId,
    TbEshop.products.occasion: occasion,
    TbEshop.products.order: order,
    TbEshop.products.maximum: maximum,
  };

  // Basic string representation for the product
  String toBasicString() => title ?? id.toString();

  static String typeToLocale(String type) {
    switch (type) {
      case foodType:
        return 'Food'.tr();
      case spotType:
        return 'Spot'.tr();
      default:
        return 'Products'.tr();
    }
  }
}