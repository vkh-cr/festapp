import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class FormResponseModel extends IPlutoRowModel {
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
    return FormResponseModel(
        order: json[TbEshop.orders.order_symbol]);
  }

  @override
  PlutoRow toPlutoRow(BuildContext context) {
    // Initialize the cells with fixed fields
    Map<String, PlutoCell> cells = {
      TbEshop.orders.id: PlutoCell(value: id),
      TbEshop.orders.order_symbol: PlutoCell(value: order!.id),
      TbEshop.orders.state: PlutoCell(value: order!.state),
    };

    for (var f in allFields!) {
      if(fields == null) {
        cells[f.id.toString()] = PlutoCell(value: '');
        continue;
      }
      var rValue = fields![f.id.toString()];
      cells[f.id.toString()] = PlutoCell(value: rValue ?? '');
    }

    return PlutoRow(cells: cells);
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
