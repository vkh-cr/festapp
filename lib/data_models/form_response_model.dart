import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/utilities.dart';
import 'package:trina_grid/trina_grid.dart';

class FormResponseModel extends ITrinaRowModel {
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
  TrinaRow toTrinaRow(BuildContext context) {
    // Initialize the cells with fixed fields
    Map<String, TrinaCell> cells = {
      TbEshop.orders.id: TrinaCell(value: id),
      TbEshop.orders.order_symbol: TrinaCell(value: order!.id),
      TbEshop.orders.state: TrinaCell(value: order!.state),
      TicketModel.metaTicketsProducts: TrinaCell(
          value: order!.relatedProducts != null
              ? order!.relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
    };

    for (var f in allFields!) {
      if(fields == null) {
        cells[f.id.toString()] = TrinaCell(value: '');
        continue;
      }
      if(f.type == FormHelper.fieldTypeSex){
        cells[f.id.toString()] = TrinaCell(value: UserInfoModel.sexToLocale(fields![f.id.toString()]));
        continue;
      }
      if (f.type == FormHelper.fieldTypeBirthDate) {
        // Parse the ISO datetime string into a DateTime object.
        var dt = DateTime.tryParse(fields![f.id.toString()] ?? "");

        // Format the DateTime into a "year-month-day" string.
        String formattedDate = dt == null ? "" : '${dt.year}-${dt.month.toString().padLeft(2, '0')}-${dt.day.toString().padLeft(2, '0')}';

        // Assign the formatted date string to the cell.
        cells[f.id.toString()] = TrinaCell(value: formattedDate);
        continue;
      }
      var rValue = Utilities.removeTabsAndNewLines(fields![f.id.toString()] ?? "");
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
