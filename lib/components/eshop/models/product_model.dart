import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/models/product_inventory_context_model.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/components/eshop/models/product_type_model.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'package:fstapp/components/eshop/db_eshop.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:trina_grid/trina_grid.dart';

import '../eshop_columns.dart';

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
  List<ProductInventoryContextModel> includedInventories = [];
  bool? isDynamicallyAvailable;
  List<int> formIds;
  String? formTitles;

  static const String foodType = "food";
  static const String taxiType = "taxi";
  static const String spotType = "spot";
  static const String metaTypeField = "type";
  static const String metaProductTypeTitleStringField = "type_title";
  static const String metaOrderedCount = "ordered_count";
  static const String metaIsDynamicallyAvailable = "is_dynamically_available";
  static const String metaPaidCount = "paid_count";
  static const String metaSentCount = "sent_count";


  String? get shortTitle => data?[TbEshop.products.data_short_title];
  set shortTitle(String? value) {
    if (data == null) data = {};
    if (value == null || value.isEmpty) {
      data!.remove(TbEshop.products.data_short_title);
    } else {
      data![TbEshop.products.data_short_title] = value;
    }
  }

  Map<String, dynamic> get _surchargeMap {
    if (data != null && data![TbEshop.products.data_surcharge] is Map) {
      return Map<String, dynamic>.from(data![TbEshop.products.data_surcharge]);
    }
    return {};
  }

  double? get surchargeAmount {
    var val = _surchargeMap['amount'];
    double? result;
    if (val is num) result = val.toDouble();
    if (val is String) result = double.tryParse(val);
    
    if (result == 0) return null;
    return result;
  }

  set surchargeAmount(double? value) {
    if (data == null) data = {};
    if (data![TbEshop.products.data_surcharge] is! Map) {
      data![TbEshop.products.data_surcharge] = {};
    }
    var map = data![TbEshop.products.data_surcharge] as Map;
    if (value == null || value == 0) {
      map.remove('amount');
    } else {
      map['amount'] = value;
    }
    if (!map.containsKey('amount')) {
      data!.remove(TbEshop.products.data_surcharge);
    }
  }

  String? get surchargeCurrency {
    return _surchargeMap['currency']?.toString();
  }

  set surchargeCurrency(String? value) {
    if (data == null) data = {};
    if (data![TbEshop.products.data_surcharge] is! Map) {
      data![TbEshop.products.data_surcharge] = {};
    }
    var map = data![TbEshop.products.data_surcharge] as Map;
    if (value == null || value.isEmpty) {
      map.remove('currency');
    } else {
      map['currency'] = value;
    }
    
    if (map.isEmpty || !map.containsKey('amount')) {
      data!.remove(TbEshop.products.data_surcharge);
    }
  }


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
    this.productType,
    this.occasion,
    this.productTypeString,
    this.productTypeTitleString,
    this.order,
    this.maximum,
    this.orderedCount,
    this.paidCount,
    this.sentCount,
    this.currencyCode,
    List<ProductInventoryContextModel>? includedInventories,
    this.isDynamicallyAvailable,
    List<int>? formIds,
    this.formTitles,
  }) : includedInventories = includedInventories ?? [],
        formIds = formIds ?? [];

  factory ProductModel.fromJson(Map<String, dynamic> json) {
    Map<String, dynamic>? data = json[TbEshop.products.data];

    if (data != null && data[TbEshop.products.data_surcharge] is Map) {
      var map = data[TbEshop.products.data_surcharge] as Map;
      var amount = map['amount'];
      bool shouldRemove = false;
      if (amount == null) {
        shouldRemove = true;
      } else if (amount is num && amount == 0) {
        shouldRemove = true;
      } else if (amount is String) {
        if (double.tryParse(amount) == 0) shouldRemove = true;
      }
      
      if (shouldRemove) {
        // Create a copy of data to avoid mutating the original JSON map if it's reused
        // although usually json decode produces fresh maps. 
        // Better safe:
        data = Map<String, dynamic>.from(data);
        data.remove(TbEshop.products.data_surcharge);
      }
    }

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
      data: data,
      productTypeId: json[TbEshop.products.product_type],
      occasion: json[TbEshop.products.occasion],
      productTypeString: json[metaTypeField],
      productTypeTitleString: json[metaProductTypeTitleStringField],
      order: json[TbEshop.products.order],
      maximum: json[TbEshop.products.maximum],
      orderedCount: json[metaOrderedCount],
      paidCount: json[metaPaidCount],
      sentCount: json[metaSentCount],
      isDynamicallyAvailable: json[metaIsDynamicallyAvailable],
      formIds: List<int>.from(json['form_ids'] ?? []),
    );
  }

  static ProductModel fromPlutoJson(Map<String, dynamic> json) {
    var model = json[EshopColumns.PRODUCT_MODEL_REFERENCE] as ProductModel?;
    Map<String, dynamic>? data;
    if (model?.data != null) {
      data = Map.from(model!.data!);
    }
    if (json.containsKey(EshopColumns.PRODUCT_SHORT_TITLE)) {
      if (data == null) data = {};
      var val = json[EshopColumns.PRODUCT_SHORT_TITLE];
      if (val != null && val.toString().isNotEmpty) {
        data[TbEshop.products.data_short_title] = val.toString();
      } else {
        data.remove(TbEshop.products.data_short_title);
      }
    }

    // Handle Surcharge combined field from Grid
    if (json.containsKey(EshopColumns.PRODUCT_SURCHARGE)) {
      if (data == null) data = {};
      var surchargeMap = data[TbEshop.products.data_surcharge] is Map
          ? Map<String, dynamic>.from(data[TbEshop.products.data_surcharge])
          : <String, dynamic>{};

      var val = json[EshopColumns.PRODUCT_SURCHARGE];
      if (val != null && val.toString().isNotEmpty) {
        // Expected format: "100.00 CZK" or just "100"
        String raw = val.toString().trim();
        List<String> parts = raw.split(" ");
        if (parts.isNotEmpty) {
           double? amount = double.tryParse(parts[0]);
           if (amount != null && amount != 0) {
             surchargeMap['amount'] = amount;
           } else {
             surchargeMap.remove('amount');
           }
           
           if (parts.length > 1) {
             surchargeMap['currency'] = parts.sublist(1).join(" ");
           } else {
              surchargeMap.remove('currency');
           }
        }
      } else {
         surchargeMap.remove('amount');
         surchargeMap.remove('currency');
      }
      
      if (surchargeMap.containsKey('amount')) {
        data[TbEshop.products.data_surcharge] = surchargeMap;
      } else {
        data.remove(TbEshop.products.data_surcharge);
      }
    }

    return ProductModel(
      id: json[EshopColumns.PRODUCT_ID] == -1 ? null : json[EshopColumns.PRODUCT_ID],
      title: json[EshopColumns.PRODUCT_TITLE],
      isHidden: json[EshopColumns.PRODUCT_IS_HIDDEN] == 'true',
      data: data,
      description: json[EshopColumns.PRODUCT_DESCRIPTION],
      price: json[EshopColumns.PRODUCT_PRICE] != null
          ? double.tryParse(json[EshopColumns.PRODUCT_PRICE].toString())
          : null,
      currencyCode: json[EshopColumns.PRODUCT_CURRENCY_CODE],
      order: json[EshopColumns.PRODUCT_ORDER],
      maximum: json[EshopColumns.PRODUCT_MAXIMUM],
      includedInventories: model?.includedInventories ?? [],
      formIds: model?.formIds ?? [],
      formTitles: model?.formTitles,
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

  ProductModel copyWith({
    int? id,
    DateTime? createdAt,
    DateTime? updatedAt,
    String? title,
    bool? isHidden,
    String? description,
    double? price,
    Map<String, dynamic>? data,
    int? productTypeId,
    ProductTypeModel? productType,
    int? occasion,
    String? productTypeString,
    String? productTypeTitleString,
    int? order,
    int? maximum,
    int? orderedCount,
    int? paidCount,
    int? sentCount,
    String? currencyCode,
    List<ProductInventoryContextModel>? includedInventories,
    bool? isDynamicallyAvailable,
    List<int>? formIds,
    String? formTitles,
  }) {
    return ProductModel(
      id: id ?? this.id,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
      title: title ?? this.title,
      isHidden: isHidden ?? this.isHidden,
      description: description ?? this.description,
      price: price ?? this.price,
      data: data ?? (this.data != null ? Map<String, dynamic>.from(this.data!) : null),
      productTypeId: productTypeId ?? this.productTypeId,
      productType: productType ?? this.productType,
      occasion: occasion ?? this.occasion,
      productTypeString: productTypeString ?? this.productTypeString,
      productTypeTitleString: productTypeTitleString ?? this.productTypeTitleString,
      order: order ?? this.order,
      maximum: maximum ?? this.maximum,
      orderedCount: orderedCount ?? this.orderedCount,
      paidCount: paidCount ?? this.paidCount,
      sentCount: sentCount ?? this.sentCount,
      currencyCode: currencyCode ?? this.currencyCode,
      includedInventories: includedInventories ?? this.includedInventories,
      isDynamicallyAvailable: isDynamicallyAvailable ?? this.isDynamicallyAvailable,
      formIds: formIds ?? this.formIds,
      formTitles: formTitles ?? this.formTitles,
    );
  }

  /// Returns true if the product has capacity and is dynamically available.
  /// It checks static limits (`maximum` vs `orderedCount`) and the dynamic availability flag from the backend.
  /// If `isDynamicallyAvailable` is null, it's treated as true to ensure backward compatibility.
  bool get isAvailable =>
      ((maximum == null || maximum == 0) || ((orderedCount ?? 0) < (maximum ?? 0))) && (isDynamicallyAvailable ?? true);

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
      EshopColumns.PRODUCT_SHORT_TITLE: TrinaCell(value: shortTitle ?? ''),
      EshopColumns.PRODUCT_DESCRIPTION: TrinaCell(value: description ?? ''),
      EshopColumns.PRODUCT_PRICE: TrinaCell(
        value: price != null ? price?.toStringAsFixed(2) : '',
      ),
      EshopColumns.PRODUCT_CURRENCY_CODE: TrinaCell(value: currencyCode ?? ''),
      EshopColumns.PRODUCT_CURRENCY_CODE: TrinaCell(value: currencyCode ?? ''),
      EshopColumns.PRODUCT_SURCHARGE: TrinaCell(value: (surchargeAmount != null ? "${surchargeAmount} ${surchargeCurrency ?? ''}" : "").trim()),
      EshopColumns.PRODUCT_TYPE: TrinaCell(value: productType?.title ?? ''),
      EshopColumns.PRODUCT_ORDER: TrinaCell(value: order ?? 0),
      EshopColumns.PRODUCT_MAXIMUM: TrinaCell(value: maximum ?? 0),
      EshopColumns.PRODUCT_ORDERED_COUNT: TrinaCell(value: orderedCount),
      EshopColumns.PRODUCT_PAID_COUNT: TrinaCell(value: total),
      EshopColumns.PRODUCT_INCLUDED_INVENTORY: TrinaCell(value: getInventoryDisplayValue(this, context)),
      EshopColumns.PRODUCT_USED_IN_FORMS: TrinaCell(value: formTitles ?? ''),
      EshopColumns.PRODUCT_MODEL_REFERENCE: TrinaCell(value: this),
    });
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await ExceptionHandler.guardVoid(
      context,
      futureFunction: () async {
        var productId = await DbEshop.updateProduct(this);
        await DbEshop.updateProductInventoryContexts(productId, includedInventories);
      },
      defaultErrorMessage: "Failed to save product.".tr(),
      rethrowError: true,
    );
  }

  @override
  Future<void> deleteMethod(BuildContext context) async {
    if (id == null) return;
    await ExceptionHandler.guardVoid(
      context,
      futureFunction: () async {
        await DbEshop.deleteProduct(id!);
      },
      defaultErrorMessage: "Failed to delete product.".tr(),
      rethrowError: true,
    );
  }

  static String getInventoryDisplayValue(ProductModel product, BuildContext context) {
    if (product.includedInventories.isEmpty) {
      return "";
    }
    return product.includedInventories.map((link) {
      final quantityText = link.quantity > 1 ? " (x${link.quantity})" : "";
      // Use the populated object for its title, with a fallback to the ID.
      final title = link.inventoryContext?.getFullTitle(context) ?? link.inventoryContextId.toString();
      return "$title$quantityText";
    }).join(" | ");
  }

  String getFormattedProductTitle() {
    if (price != null) {
      final priceString = "${price!.toStringAsFixed(2)} ${currencyCode ?? ''}".trim();
      return "$title ($priceString)";
    }
    return title??"";
  }
}