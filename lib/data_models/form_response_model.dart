import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/eshop_columns.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:trina_grid/trina_grid.dart';

import '../components/forms/models/id_document_data.dart';
import '../data_services_eshop/db_orders.dart';

class FormResponseModel extends ITrinaRowModel {
  @override
  int? id;
  OrderModel? order;
  Map<String, dynamic>? fields;
  List<FormFieldModel>? allFields;

  FormResponseModel({
    this.id,
    this.order,
    this.fields,
    this.allFields,
  });

  static FormResponseModel fromPlutoJson(Map<String, dynamic> json) {
    final int? orderId = json[EshopColumns.ORDER_ID] as int?;
    final Map<String, dynamic> responseFields = {};

    for (var entry in json.entries) {
      // Check if the key is a numeric string
      if (int.tryParse(entry.key) != null) {
        responseFields[entry.key] = entry.value;
      }
    }

    return FormResponseModel(
      id: orderId,
      fields: responseFields,
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    Map<String, TrinaCell> cells = {
      EshopColumns.ORDER_ID: TrinaCell(value: id),
      EshopColumns.ORDER_SYMBOL: TrinaCell(value: order!.toBasicString()),
      EshopColumns.ORDER_STATE: TrinaCell(value: order!.state),
      EshopColumns.TICKET_PRODUCTS: TrinaCell(
          value: order!.relatedProducts != null
              ? order!.relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
    };

    final productCells = EshopColumns.generateProductTypeCells(order!.relatedProducts ?? []);
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
      else if (f.type == FormHelper.fieldTypeIdDocument) {
        var val = fields![f.id.toString()];
        if(val != null){
          val = IdDocumentData.fromJson(val);
        }
        cells[f.id.toString()] = TrinaCell(
            value: val?.toString() ?? "");
        continue;
      }
      else if (f.type == FormHelper.fieldTypeBirthDate) {
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
      Utilities.removeTabsAndNewLines((fields![f.id.toString()] ?? "").toString());
      cells[f.id.toString()] = TrinaCell(value: rValue);
    }

    return TrinaRow(cells: cells);
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
  Future<void> deleteMethod(BuildContext context) async {
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await DbOrders.updateOrderResponses(this);
  }

  @override
  String toBasicString() {
    return order.toString();
  }

}