import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models_eshop/product_type_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:intl/intl.dart';
import 'package:trina_grid/trina_grid.dart';

class ProductModel extends ITrinaRowModel {
  @override
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
  String? productTypeTitleString;
  int? order;
  int? maximum;
  int? orderedCount;
  int? paidCount;
  int? sentCount;
  String? currencyCode;

  static const String foodType = "food";
  static const String taxiType = "taxi";
  static const String spotType = "spot";
  static const String metaTypeField = "type";
  static const String metaProductTypeTitleStringField = "type_title";
  static const String metaOrderedCount = "ordered_count";
  static const String metaPaidCount = "paid_count";
  static const String metaSentCount = "sent_count";


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
    this.productTypeTitleString,
    this.order,
    this.maximum,
    this.orderedCount,
    this.paidCount,
    this.sentCount,
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
      productTypeTitleString: json[metaProductTypeTitleStringField],
      order: json[TbEshop.products.order],
      maximum: json[TbEshop.products.maximum],
      orderedCount: json[metaOrderedCount],
      paidCount: json[metaPaidCount],
      sentCount: json[metaSentCount],
    );
  }

  static ProductModel fromPlutoJson(Map<String, dynamic> json) {
    return ProductModel(
      id: json[EshopColumns.PRODUCT_ID] == -1 ? null : json[EshopColumns.PRODUCT_ID],
      title: json[EshopColumns.PRODUCT_TITLE],
      isHidden: json[EshopColumns.PRODUCT_IS_HIDDEN] == 'true',
      description: json[EshopColumns.PRODUCT_DESCRIPTION],
      price: json[EshopColumns.PRODUCT_PRICE] != null
          ? double.tryParse(json[EshopColumns.PRODUCT_PRICE].toString())
          : null,
      currencyCode: json[EshopColumns.PRODUCT_CURRENCY_CODE],
      order: json[EshopColumns.PRODUCT_ORDER],
      maximum: json[EshopColumns.PRODUCT_MAXIMUM],
    );
  }

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

  @override
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

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    final total = (paidCount ?? 0) + (sentCount ?? 0);
    return TrinaRow(cells: {
      EshopColumns.PRODUCT_ID: TrinaCell(value: id ?? 0),
      EshopColumns.PRODUCT_IS_HIDDEN: TrinaCell(value: isHidden.toString()),
      EshopColumns.PRODUCT_TITLE: TrinaCell(value: title ?? ''),
      EshopColumns.PRODUCT_DESCRIPTION: TrinaCell(value: description ?? ''),
      EshopColumns.PRODUCT_PRICE: TrinaCell(
        value: price != null ? price?.toStringAsFixed(2) : '',
      ),
      EshopColumns.PRODUCT_CURRENCY_CODE: TrinaCell(value: currencyCode ?? ''),
      EshopColumns.PRODUCT_TYPE: TrinaCell(value: productType?.title ?? ''),
      EshopColumns.PRODUCT_ORDER: TrinaCell(value: order ?? 0),
      EshopColumns.PRODUCT_MAXIMUM: TrinaCell(value: maximum ?? 0),
      EshopColumns.PRODUCT_ORDERED_COUNT: TrinaCell(value: orderedCount),
      EshopColumns.PRODUCT_PAID_COUNT: TrinaCell(value: total),
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DbEshop.deleteProduct(id!);
  }

  @override
  Future<void> updateMethod() async {
    await DbEshop.updateProduct(this);
  }
}
