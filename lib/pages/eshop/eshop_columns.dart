import 'dart:convert';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/dialogs/transactions_dialog.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:trina_grid/trina_grid.dart';
import 'package:fstapp/data_models_eshop/tb_eshop.dart';

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
  static const String ORDER_EMAIL = "orderEmail";
  static const String ORDER_CREATED_AT = "orderCreatedAt";
  static const String ORDER_DATA_NOTE = "orderDataNote";
  static const String ORDER_NOTE_HIDDEN = "orderDataNoteHidden";
  static const String ORDER_HISTORY = "orderHistory";
  static const String ORDER_TRANSACTIONS = "orderTransactions";

  static const String RESPONSES = "responses";

  // Define columns
  static Map<String, dynamic> columnBuilders(BuildContext context) => {
    TICKET_ID: [
      TrinaColumn(
        hide: true,
        readOnly: true,
        enableEditingMode: false,
        title: "Id".tr(),
        field: TbEshop.tickets.id,
        type: TrinaColumnType.number(defaultValue: -1),
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    TICKET_SYMBOL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Ticket Symbol".tr(),
        field: TbEshop.tickets.ticket_symbol,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    TICKET_STATE: [
      TrinaColumn(
        cellPadding: EdgeInsets.zero,
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.tickets.state,
        type: TrinaColumnType.select(
          OrderModel.statesToDataGridFormat(),
        ),
        renderer: (renderer) => DataGridHelper.backgroundFromText(renderer, OrderModel.singleDataGridStateToColor, OrderModel.statesDataGridToUpper),
        width: 120,
        textAlign: TrinaColumnTextAlign.center,
      ),
    ],
    TICKET_TOTAL_PRICE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TicketModel.metaPrice,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_CREATED_AT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Created".tr(),
        field: TbEshop.tickets.created_at,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_PRODUCTS: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Products".tr(),
        field: TicketModel.metaTicketsProducts,
        type: TrinaColumnType.text(),
        width: 300,
      ),
    ],
    TICKET_NOTE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Note".tr(),
        field: TbEshop.tickets.note,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_NOTE_HIDDEN: [
      TrinaColumn(
        enableAutoEditing: true,
        title: "Hidden note".tr(),
        field: TbEshop.tickets.note_hidden,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_SPOT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Spot".tr(),
        field: TicketModel.metaSpot,
        type: TrinaColumnType.text(),
        width: 60,
      ),
    ],
    ORDER_ID: [
      TrinaColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.orders.id,
        type: TrinaColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    ORDER_SYMBOL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Order Symbol".tr(),
        field: TbEshop.orders.order_symbol,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    ORDER_PRICE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TbEshop.orders.price,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    ORDER_STATE: [
      TrinaColumn(
        cellPadding: EdgeInsets.zero,
        readOnly: true,
        enableEditingMode: false,
        title: "State".tr(),
        field: TbEshop.orders.state,
        type: TrinaColumnType.select(
          OrderModel.statesToDataGridFormat(),
        ),
        renderer: (renderer) => DataGridHelper.orderState(context, renderer, OrderModel.singleDataGridStateToColor, OrderModel.statesDataGridToUpper),
        textAlign: TrinaColumnTextAlign.center,
        width: 140,
      ),
    ],
    ORDER_DATA: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Customer".tr(),
        field: TbEshop.orders.data,
        type: TrinaColumnType.text(),
        width: 150,
      ),
    ],
    ORDER_EMAIL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Email".tr(),
        field: TbEshop.orders.data_email,
        type: TrinaColumnType.text(),
        width: 140,
      ),
    ],
    ORDER_CREATED_AT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Created".tr(),
        field: TbEshop.orders.created_at,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    ORDER_DATA_NOTE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Note".tr(),
        field: TbEshop.orders.data_note,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_NOTE_HIDDEN: [
      TrinaColumn(
        enableAutoEditing: true,
        title: "Hidden note".tr(),
        field: TbEshop.orders.note_hidden,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_HISTORY: [
      TrinaColumn(
        enableAutoEditing: false,
        title: "History".tr(),
        field: TbEshop.orders_history.table,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              var id = rendererContext.row.cells[TbEshop.orders.id]!.value;
              await _showOrderHistory(context, id);
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
    ORDER_TRANSACTIONS: (Map<String, dynamic> data) => [
      TrinaColumn(
        enableAutoEditing: false,
        title: "Transactions".tr(),
        field: TbEshop.transactions.table,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              var id = rendererContext.row.cells[TbEshop.orders.id]!.value;
              await _showOrderTransactions(context, id);
              var transactionsAfterFunction = data[ORDER_TRANSACTIONS];
              if(transactionsAfterFunction is Future<void> Function()?) {
                transactionsAfterFunction?.call();
              }
            },
            child: Row(
              children: [
                const Icon(Icons.payment),
                Padding(
                  padding: const EdgeInsets.all(6),
                  child: Text("Transactions".tr()),
                ),
              ],
            ),
          );
        },
      ),
    ],
    PRODUCT_ID: [
      TrinaColumn(
        hide: true,
        title: "Id".tr(),
        field: TbEshop.products.id,
        type: TrinaColumnType.number(defaultValue: -1),
        readOnly: true,
        enableEditingMode: false,
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    PRODUCT_TITLE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Title".tr(),
        field: TbEshop.products.title,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    PRODUCT_PRICE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Price".tr(),
        field: TbEshop.products.price,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_AMOUNT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Amount".tr(),
        field: TbEshop.payment_info.amount,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_PAID: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Paid".tr(),
        field: TbEshop.payment_info.paid,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_RETURNED: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Returned".tr(),
        field: TbEshop.payment_info.returned,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_VARIABLE_SYMBOL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: "Variable symbol".tr(),
        field: TbEshop.payment_info.variable_symbol,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_DEADLINE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: "Deadline".tr(),
        field: TbEshop.payment_info.deadline,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    RESPONSES: (Map<String, dynamic> data) {
      if(data[RESPONSES] == null){
        return <TrinaColumn>[];
      }
      var columns = <TrinaColumn>[];
      for(FormFieldModel f in (data[RESPONSES]) as List<FormFieldModel>){
        var title = f.title?.trim();
        var cc = genericTextColumn((title == null || title.isEmpty ? FormHelper.fieldTypeToLocale(f.type!) : title), f.id.toString());
        columns.add(cc);
      }
      return columns;
    },
  };

  static TrinaColumn genericTextColumn(String title, String field) {
    return TrinaColumn(
      readOnly: true,
      enableEditingMode: true,
      title: title,
      field: field,
      type: TrinaColumnType.text(),
      textAlign: TrinaColumnTextAlign.end,
      width: 150,
    );
  }

  /// Generates columns based on a list of column identifiers.
  /// Optional `data` map is used for columns that require extra configuration.
  static List<TrinaColumn> generateColumns(BuildContext context, List<String> identifiers, {Map<String, dynamic>? data}) {
    var columns = columnBuilders(context);
    return identifiers
        .where((id) => columns.containsKey(id))
        .expand((id) {
      var columnEntry = columns[id];
      if (columnEntry is List<TrinaColumn>) {
        return columnEntry; // Static columns
      } else if (columnEntry is Function) {
        return (columnEntry(data ?? {}) as List<TrinaColumn>);
      }
      return <TrinaColumn>[];
    }).toList();
  }

  /// Shows the order history in a dialog.
  static Future<void> _showOrderHistory(BuildContext context, int orderId) async {
    var history = await DbOrders.getOrderHistory(orderId);
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
  }

  /// Shows the order transactions in a dialog.
  static Future<void> _showOrderTransactions(BuildContext context, int orderId) async {
    await showDialog(
      context: context,
      builder: (BuildContext context) {
        return TransactionsDialog(
          orderId: orderId,
        );
      },
    );
  }
}
