import 'dart:convert';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataModelsEshop/OrderModel.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class EshopColumns {
  // Column identifier constants
  static const String TICKET_ID = "ticketId";
  static const String TICKET_SYMBOL = "ticketSymbol";
  static const String TICKET_STATE = "ticketState";
  static const String TICKET_NOTE = "ticketNote";
  static const String TICKET_NOTE_HIDDEN = "ticketNoteHidden";
  static const String TICKET_TOTAL_PRICE = "ticketTotalPrice";
  static const String TICKET_PRODUCTS = "ticketProducts";
  static const String TICKET_CREATED_AT = "ticketCreatedAt";
  static const String TICKET_SPOT = "ticketSpot";

  static const String ORDER_ID = "orderId";
  static const String ORDER_PRICE = "orderPrice";
  static const String ORDER_STATE = "orderState";

  static const String PRODUCT_ID = "productId";
  static const String PRODUCT_TITLE = "productTitle";
  static const String PRODUCT_PRICE = "productPrice";

  static const String PAYMENT_INFO_AMOUNT = "paymentInfoAmount";
  static const String PAYMENT_INFO_PAID = "paymentInfoPaid";
  static const String PAYMENT_INFO_RETURNED = "paymentInfoReturned";
  static const String PAYMENT_INFO_VARIABLE_SYMBOL = "paymentInfoVariableSymbol";
  static const String PAYMENT_INFO_DEADLINE = "orderDataDeadline";

  static const String ORDER_SYMBOL = "orderSymbol";
  static const String ORDER_DATA = "orderData";
  static const String ORDER_DATA_NOTE = "orderDataNote";
  static const String ORDER_NOTE_HIDDEN = "orderDataNoteHidden";
  static const String ORDER_HISTORY = "orderHistory";

  // Define columns
  static Map<String, dynamic> columnBuilders(BuildContext context) => {
    TICKET_ID: [
      PlutoColumn(
        hide: true,
        readOnly: true,
        enableEditingMode: false,
        title: "Id".tr(),
        field: TbEshop.tickets.id,
        type: PlutoColumnType.number(defaultValue: -1),
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    TICKET_SYMBOL: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Ticket Symbol".tr(),
        field: TbEshop.tickets.ticket_symbol,
        type: PlutoColumnType.text(),
        width: 120,
      ),
    ],
    TICKET_STATE: [
      PlutoColumn(
        cellPadding: EdgeInsets.zero,
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.tickets.state,
        type: PlutoColumnType.select(
          OrderModel.statesToDataGridFormat(),
        ),
        renderer: (renderer) => DataGridHelper.backgroundFromText(renderer, OrderModel.dataGridStateToColor, OrderModel.statesDataGridToUpper),
        width: 120,
        textAlign: PlutoColumnTextAlign.center,
      ),
    ],
    TICKET_TOTAL_PRICE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TicketModel.metaPrice,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_CREATED_AT: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Created".tr(),
        field: TbEshop.tickets.created_at,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_PRODUCTS: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Products".tr(),
        field: TicketModel.metaTicketsProducts,
        type: PlutoColumnType.text(),
        width: 300,
      ),
    ],
    TICKET_NOTE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Note".tr(),
        field: TbEshop.tickets.note,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_NOTE_HIDDEN: [
      PlutoColumn(
        enableAutoEditing: true,
        title: "Hidden note".tr(),
        field: TbEshop.tickets.note_hidden,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_SPOT: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Spot".tr(),
        field: TicketModel.metaSpot,
        type: PlutoColumnType.text(),
        width: 60,
      ),
    ],
    ORDER_ID: [
      PlutoColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.orders.id,
        type: PlutoColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    ORDER_SYMBOL: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Order Symbol".tr(),
        field: TbEshop.orders.order_symbol,
        type: PlutoColumnType.text(),
        width: 120,
      ),
    ],
    ORDER_PRICE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TbEshop.orders.price,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
    ORDER_STATE: [
      PlutoColumn(
        cellPadding: EdgeInsets.zero,
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.orders.state,
        type: PlutoColumnType.select(
          OrderModel.statesToDataGridFormat(),
        ),
        renderer: (renderer) => DataGridHelper.backgroundFromText(renderer, OrderModel.dataGridStateToColor, OrderModel.statesDataGridToUpper),
        textAlign: PlutoColumnTextAlign.center,
        width: 120,
      ),
    ],
    ORDER_DATA: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Customer".tr(),
        field: TbEshop.orders.data,
        type: PlutoColumnType.text(),
        width: 250,
      ),
    ],
    ORDER_DATA_NOTE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Note".tr(),
        field: TbEshop.orders.data_note,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_NOTE_HIDDEN: [
      PlutoColumn(
        enableAutoEditing: true,
        title: "Hidden note".tr(),
        field: TbEshop.orders.note_hidden,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_HISTORY: [
      PlutoColumn(
        enableAutoEditing: true,
        title: "History".tr(),
        field: TbEshop.orders_history.table,
        type: PlutoColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              var id = rendererContext.row.cells[TbEshop.orders.id]!.value;
              var history = await DbEshop.getOrderHistory(id);
              String prettyFormattedHistory = "";

              // Create a DateFormat object to format the datetime
              DateFormat dateFormat = DateFormat('yyyy-MM-dd HH:mm:ss');

              for (var item in history) {
                // Format the 'created_at' datetime to a more readable format
                String createdAt = item['created_at'];
                DateTime parsedDate = DateTime.parse(createdAt).toLocal(); // Parse the string into a DateTime object
                String formattedDate = dateFormat.format(parsedDate); // Format the DateTime object

                prettyFormattedHistory += "$formattedDate\n";
                prettyFormattedHistory += '-' * 50 + "\n"; // Separator line

                // Pretty print each history item with indentation for better readability
                String formattedItem = const JsonEncoder.withIndent('  ').convert(item);
                prettyFormattedHistory += "$formattedItem\n";

                // Add a separator line between items to make them more distinct
                prettyFormattedHistory += '-' * 50 + "\n";
              }
              await DialogHelper.showInformationDialog(context, "History".tr(), prettyFormattedHistory);
            },
            child: Row(
              children: [
                const Icon(Icons.history),
                Padding(
                  padding: const EdgeInsets.all(6),
                  child: Text("History".tr()),
                ),
              ],
            ),
          );
        },
      ),
    ],
    PRODUCT_ID: [
      PlutoColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.products.id,
        type: PlutoColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    PRODUCT_TITLE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Title".tr(),
        field: TbEshop.products.title,
        type: PlutoColumnType.text(),
        width: 200,
      ),
    ],
    PRODUCT_PRICE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TbEshop.products.price,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_AMOUNT: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Amount".tr(),
        field: TbEshop.payment_info.amount,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_PAID: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Paid".tr(),
        field: TbEshop.payment_info.paid,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_RETURNED: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Returned".tr(),
        field: TbEshop.payment_info.returned,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_VARIABLE_SYMBOL: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Variable symbol".tr(),
        field: TbEshop.payment_info.variable_symbol,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_DEADLINE: [
      PlutoColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Deadline".tr(),
        field: TbEshop.payment_info.deadline,
        type: PlutoColumnType.text(),
        textAlign: PlutoColumnTextAlign.end,
        width: 100,
      ),
    ],
  };

  /// Generates columns based on a list of column identifiers.
  /// Optional `data` map is used for columns that require extra configuration.
  static List<PlutoColumn> generateColumns(BuildContext context, List<String> identifiers, {Map<String, dynamic>? data}) {
    var columns = columnBuilders(context);
    return identifiers
        .where((id) => columns.containsKey(id))
        .expand((id) {
      var columnEntry = columns[id];
      if (columnEntry is List<PlutoColumn>) {
        return columnEntry; // Static columns
      } else if (columnEntry is Function) {
        return (columnEntry(data ?? {}) as List<PlutoColumn>);
      }
      return <PlutoColumn>[];
    }).toList();
  }
}
