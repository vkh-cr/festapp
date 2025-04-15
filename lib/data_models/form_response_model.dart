import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/pages/eshop/eshop_columns.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:trina_grid/trina_grid.dart';

class FormResponseModel extends ITrinaRowModel {
  @override
  int? id;
  OrderModel? order;
  Map<String, dynamic>? fields;
  List<FormFieldModel>? allFields;

  //last field is automatic if previous categories are not contained
  static const List<String> productCategories = ["others"];

  FormResponseModel({
    this.id,
    this.order,
    this.fields,
    this.allFields,
  });

  static FormResponseModel fromPlutoJson(Map<String, dynamic> json) {
    return FormResponseModel(
        order: json[TbEshop.orders.order_symbol]);
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    Map<String, TrinaCell> cells = {
      TbEshop.orders.id: TrinaCell(value: id),
      TbEshop.orders.order_symbol: TrinaCell(value: order!.id),
      TbEshop.orders.state: TrinaCell(value: order!.state),
      TicketModel.metaTicketsProducts: TrinaCell(
          value: order!.relatedProducts != null
              ? order!.relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
    };

    final productCells = generateProductTypeCells(order!.relatedProducts ?? []);
    cells.addAll(productCells);

    // Process additional form fields.
    for (var f in allFields!) {
      if (fields == null) {
        cells[f.id.toString()] = TrinaCell(value: '');
        continue;
      }
      if (f.type == FormHelper.fieldTypeSex) {
        cells[f.id.toString()] = TrinaCell(
            value: UserInfoModel.sexToLocale(fields![f.id.toString()]));
        continue;
      }
      if (f.type == FormHelper.fieldTypeBirthDate) {
        // Parse ISO datetime string into a DateTime object.
        var dt = DateTime.tryParse(fields![f.id.toString()] ?? "");
        // Format the DateTime into a "year-month-day" string.
        String formattedDate = dt == null
            ? ""
            : '${dt.year}-${dt.month.toString().padLeft(2, '0')}-${dt.day.toString().padLeft(2, '0')}';
        cells[f.id.toString()] = TrinaCell(value: formattedDate);
        continue;
      }
      var rValue =
      Utilities.removeTabsAndNewLines(fields![f.id.toString()] ?? "");
      cells[f.id.toString()] = TrinaCell(value: rValue);
    }

    return TrinaRow(cells: cells);
  }

  Map<String, TrinaCell> generateProductTypeCells(List<ProductModel> products) {
    // Get the allowed product categories.
    final List<String> allowedCategories = productCategories;

    // Initialize a map with each allowed category mapped to an empty list.
    final Map<String, List<ProductModel>> groupedProducts = {
      for (var category in allowedCategories) category: [],
    };

    // Group products by their type.
    // If the product type is not in allowedCategories,
    // assign it to the last category in the allowed list.
    for (var product in products) {
      final String productType = product.productTypeString ?? "";
      final String categoryKey = allowedCategories.contains(productType)
          ? productType
          : allowedCategories.last;
      groupedProducts[categoryKey]!.add(product);
    }

    // Build a cell for each allowed category; if no products are present, set an empty value.
    final Map<String, TrinaCell> productCells = {};
    for (var category in allowedCategories) {
      final String cellValue = groupedProducts[category]!.isNotEmpty
          ? groupedProducts[category]!
          .map((p) => p.toBasicString())
          .join(" | ")
          : "";
      productCells[category] = TrinaCell(value: cellValue);
    }

    return productCells;
  }

  factory FormResponseModel.fromOrder(OrderModel order, List<FormFieldModel> allFields) {
    // Extract the order symbol. Adjust this based on how orderSymbol is defined in OrderModel.
    String? extractedOrderSymbol = order.id?.toString();

    var fieldsData = order.data?[FormHelper.metaFields];

    Map<String, dynamic>? extractedFields;

    if (fieldsData != null && fieldsData is List) {
      // Transform the list of maps into a single map
      extractedFields = {
        for (var f in fieldsData)
          if (f is Map<String, dynamic>)
            for (var entry in f.entries)
              entry.key: entry.value,
      };
    } else {
      extractedFields = null;
    }

    return FormResponseModel(
      id: order.id,
      order: order,
      fields: extractedFields,
      allFields: allFields
    );
  }

  @override
  Future<void> deleteMethod() async {
  }

  @override
  Future<void> updateMethod() async {
  }

  @override
  String toBasicString() {
    return order.toString();
  }

}
