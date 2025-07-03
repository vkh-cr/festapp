import 'dart:convert';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/product_model.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/dialogs/products_dialog.dart';
import 'package:fstapp/dialogs/transactions_dialog.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/time_helper.dart';
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
  static const String TICKET_PRODUCTS_EXTENDED = "ticketProductsExtended";
  static const String TICKET_PRODUCTS_EDIT = "ticketProductsEdit";

  static const String TICKET_CREATED_AT = "ticketCreatedAt";
  static const String TICKET_SPOT = "ticketSpot";

  static const String ORDER_ID = "orderId";
  static const String ORDER_PRICE = "orderPrice";
  static const String ORDER_STATE = "orderState";

  static const String PRODUCT_ID = "productId";
  static const String PRODUCT_TITLE = "productTitle";
  static const String PRODUCT_PRICE = "productPrice";
  static const String PRODUCT_IS_HIDDEN = "productIsHidden";
  static const String PRODUCT_TYPE = "productType";
  static const String PRODUCT_ORDER = "productOrder";
  static const String PRODUCT_MAXIMUM = "productMaximum";
  static const String PRODUCT_ORDERED_COUNT = "productOrderedCount";
  static const String PRODUCT_PAID_COUNT = "productPaidCount";
  static const String PRODUCT_CURRENCY_CODE = "productCurrencyCode";
  static const String PRODUCT_DESCRIPTION = "productDescription";

  static const String PAYMENT_INFO_AMOUNT = "paymentInfoAmount";
  static const String PAYMENT_INFO_PAID = "paymentInfoPaid";
  static const String PAYMENT_INFO_RETURNED = "paymentInfoReturned";
  static const String PAYMENT_INFO_VARIABLE_SYMBOL = "paymentInfoVariableSymbol";
  static const String PAYMENT_INFO_DEADLINE = "orderDataDeadline";
  static const String PAYMENT_INFO_REMINDER_SENT = "isReminderSent";

  static const String ORDER_SYMBOL = "orderSymbol";
  static const String ORDER_DATA = "orderData";
  static const String ORDER_EMAIL = "orderEmail";
  static const String ORDER_CREATED_AT = "orderCreatedAt";
  static const String ORDER_DATA_NOTE = "orderDataNote";
  static const String ORDER_NOTE_HIDDEN = "orderDataNoteHidden";
  static const String ORDER_HISTORY = "orderHistory";
  static const String ORDER_TRANSACTIONS = "orderTransactions";

  static const String ORDER_FORM = "orderForm";

  static const String RESPONSES = "responses";

  // Define columns
  static Map<String, dynamic> columnBuilders(BuildContext context) => {
    PRODUCT_ID: [
      TrinaColumn(
        hide: true,
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridId,
        field: PRODUCT_ID,
        type: TrinaColumnType.number(defaultValue: -1),
        width: 50,
        renderer: (r) => DataGridHelper.idRenderer(r),
      ),
    ],
    PRODUCT_IS_HIDDEN: [
      TrinaColumn(
        title: FeaturesStrings.gridHide,
        field: PRODUCT_IS_HIDDEN,
        type: TrinaColumnType.text(),
        applyFormatterInEditing: true,
        enableEditingMode: false,
        width: 100,
        renderer: (ctx) =>
            DataGridHelper.checkBoxRenderer(ctx, PRODUCT_IS_HIDDEN),
      ),
    ],
    PRODUCT_TITLE: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridTitle,
        field: PRODUCT_TITLE,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    PRODUCT_PRICE: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridPrice,
        field: PRODUCT_PRICE,
        type: TrinaColumnType.number(negative: false, format: "#.##", locale: context.locale.languageCode),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PRODUCT_TYPE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridProductType,
        field: PRODUCT_TYPE,
        type: TrinaColumnType.text(),
        width: 250,
      ),
    ],
    PRODUCT_ORDER: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridOrder,
        field: PRODUCT_ORDER,
        type: TrinaColumnType.number(defaultValue: 0),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PRODUCT_MAXIMUM: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridMax,
        field: PRODUCT_MAXIMUM,
        formatter: (s) => s == 0 ? "" : s.toString(),
        applyFormatterInEditing: true,
        type: TrinaColumnType.number(defaultValue: 0, negative: false),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PRODUCT_ORDERED_COUNT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridOrdered,
        field: PRODUCT_ORDERED_COUNT,
        type: TrinaColumnType.number(defaultValue: 0),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    PRODUCT_PAID_COUNT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridPaid,
        field: PRODUCT_PAID_COUNT,
        type: TrinaColumnType.number(defaultValue: 0),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    PRODUCT_CURRENCY_CODE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridCurrency,
        field: PRODUCT_CURRENCY_CODE,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.center,
        width: 80,
      ),
    ],
    PRODUCT_DESCRIPTION: (Map<String, dynamic> data) => [
      TrinaColumn(
        title: FeaturesStrings.gridDescription,
        field:  PRODUCT_DESCRIPTION,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (ctx) {
          return DataGridHelper.buildHtmlEditorButton(
            context: context,
            occasionId: data[PRODUCT_DESCRIPTION],
            field:  PRODUCT_DESCRIPTION,
            title: ctx.row.cells[PRODUCT_TITLE]!.value,
            rendererContext: ctx,
            loadContent: () async =>
            ctx.row.cells[PRODUCT_DESCRIPTION]!.value,
          );
        },
      ),
    ],
    TICKET_ID: [
      TrinaColumn(
        hide: true,
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridId,
        field: TICKET_ID,
        type: TrinaColumnType.number(defaultValue: -1),
        width: 50,
        renderer: (rendererContext) => DataGridHelper.idRenderer(rendererContext),
      ),
    ],
    TICKET_SYMBOL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.itemSymbol,
        field: TICKET_SYMBOL,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    TICKET_STATE: [
      TrinaColumn(
        cellPadding: EdgeInsets.zero,
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridState,
        field: TICKET_STATE,
        type: TrinaColumnType.select(
          OrderModel.statesToDataGridFormat(),
        ),
        renderer: (renderer) => DataGridHelper.orderState(context, renderer, OrderModel.singleDataGridStateToColor, OrderModel.statesDataGridToUpper),
        width: 140,
        textAlign: TrinaColumnTextAlign.center,
      ),
    ],
    TICKET_TOTAL_PRICE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridPrice,
        field: TICKET_TOTAL_PRICE,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_CREATED_AT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridCreated,
        field: TICKET_CREATED_AT,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    TICKET_PRODUCTS: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridProducts,
        field: TICKET_PRODUCTS,
        type: TrinaColumnType.text(),
        width: 300,
      ),
    ],
    TICKET_NOTE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridNote,
        field: TICKET_NOTE,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_NOTE_HIDDEN: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridHiddenNote,
        field: TICKET_NOTE_HIDDEN,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    TICKET_SPOT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridSpot,
        field: TICKET_SPOT,
        type: TrinaColumnType.text(),
        width: 60,
      ),
    ],
    ORDER_ID: [
      TrinaColumn(
        hide: true,
        title: FeaturesStrings.gridId,
        field: ORDER_ID,
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
        title: FeaturesStrings.gridOrderSymbol,
        field: ORDER_SYMBOL,
        type: TrinaColumnType.text(),
        width: 120,
      ),
    ],
    ORDER_PRICE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridPrice,
        field: ORDER_PRICE,
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
        title: FeaturesStrings.gridState,
        field: ORDER_STATE,
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
        title: FeaturesStrings.gridCustomer,
        field: ORDER_DATA,
        type: TrinaColumnType.text(),
        width: 150,
      ),
    ],
    ORDER_EMAIL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridEmail,
        field: ORDER_EMAIL,
        type: TrinaColumnType.text(),
        width: 140,
      ),
    ],
    ORDER_CREATED_AT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridCreated,
        field: ORDER_CREATED_AT,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    ORDER_DATA_NOTE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridNote,
        field: ORDER_DATA_NOTE,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_NOTE_HIDDEN: [
      TrinaColumn(
        enableAutoEditing: true,
        title: FeaturesStrings.gridHiddenNote,
        field: ORDER_NOTE_HIDDEN,
        type: TrinaColumnType.text(),
        width: 200,
      ),
    ],
    ORDER_HISTORY: [
      TrinaColumn(
        enableAutoEditing: false,
        title: FeaturesStrings.gridHistory,
        field: ORDER_HISTORY,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              var id = rendererContext.row.cells[ORDER_ID]!.value;
              await _showOrderHistory(context, id);
            },
            child: Row(
              children: [
                const Icon(Icons.history),
                Padding(
                  padding: const EdgeInsets.all(6),
                  child: Text(FeaturesStrings.gridHistory),
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
        title: FeaturesStrings.gridTransactions,
        field: ORDER_TRANSACTIONS,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              var id = rendererContext.row.cells[ORDER_ID]!.value;
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
                  child: Text(FeaturesStrings.gridTransactions),
                ),
              ],
            ),
          );
        },
      ),
    ],
    TICKET_PRODUCTS_EDIT: (Map<String, dynamic> data) => [
      TrinaColumn(
        enableAutoEditing: false,
        title: FeaturesStrings.gridProducts,
        field: TICKET_PRODUCTS_EDIT,
        type: TrinaColumnType.text(),
        width: 150,
        renderer: (rendererContext) {
          return ElevatedButton(
            onPressed: () async {
              final ticketId = rendererContext.row.cells[TICKET_ID]!.value as int;
              final changed = await _showTicketProducts(context, ticketId);
              if (changed == true) {
                var afterFunction = data[TICKET_PRODUCTS_EDIT];
                if(afterFunction is Future<void> Function()?) {
                  afterFunction?.call();
                }
              }
            },
            child: Row(
              children: [
                Icon(Icons.category),
                Padding(
                  padding: const EdgeInsets.all(6),
                  child: Text(FeaturesStrings.gridProducts),
                ),
              ],
            ),
          );
        },
      ),
    ],
    PAYMENT_INFO_AMOUNT: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridAmount,
        field: PAYMENT_INFO_AMOUNT,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_PAID: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridPaid,
        field: PAYMENT_INFO_PAID,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_RETURNED: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridReturned,
        field: PAYMENT_INFO_RETURNED,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_VARIABLE_SYMBOL: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridVariableSymbol,
        field: PAYMENT_INFO_VARIABLE_SYMBOL,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 80,
      ),
    ],
    PAYMENT_INFO_DEADLINE: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: false,
        title: FeaturesStrings.gridDeadline,
        field: PAYMENT_INFO_DEADLINE,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.end,
        width: 100,
      ),
    ],
    PAYMENT_INFO_REMINDER_SENT: [
      TrinaColumn(
        title: FeaturesStrings.gridReminderSent,
        field: PAYMENT_INFO_REMINDER_SENT,
        type: TrinaColumnType.text(),
        enableEditingMode: false,
        width: 120,
        renderer: (rendererContext) => DataGridHelper.checkBoxRenderer(
          rendererContext,
          PAYMENT_INFO_REMINDER_SENT,
              () => false, // This makes the checkbox always read-only
        ),
      ),
    ],
    ORDER_FORM: [
      TrinaColumn(
        readOnly: true,
        enableEditingMode: true,
        title: FeaturesStrings.gridForm,
        field: ORDER_FORM,
        type: TrinaColumnType.text(),
        textAlign: TrinaColumnTextAlign.start,
        width: 120,
      ),
    ],
    TICKET_PRODUCTS_EXTENDED: (Map<String, dynamic> data) {
      if(data[TICKET_PRODUCTS_EXTENDED] == null){
        return <TrinaColumn>[];
      }
      var columns = <TrinaColumn>[];
      for(var f in (data[TICKET_PRODUCTS_EXTENDED]) as List<String>){
        var cc = genericTextColumn(ProductModel.typeToLocale(f), f, false);
        columns.add(cc);
      }
      return columns;
    },
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

  static TrinaColumn genericTextColumn(String title, String field, [bool alignToEnd = true]) {
    return TrinaColumn(
      readOnly: true,
      enableEditingMode: true,
      title: title,
      field: field,
      type: TrinaColumnType.text(),
      textAlign: alignToEnd ? TrinaColumnTextAlign.end : TrinaColumnTextAlign.start,
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
      DateTime parsedDate = DateTime.parse(createdAt).toOccasionTime(); // Parse the string into a DateTime object
      String formattedDate = dateFormat.format(parsedDate); // Format the DateTime object

      prettyFormattedHistory += "$formattedDate\n";
      prettyFormattedHistory += '-' * 50 + "\n"; // Separator line

      // Pretty print each history item with indentation for better readability
      String formattedItem = const JsonEncoder.withIndent('  ').convert(item);
      prettyFormattedHistory += "$formattedItem\n";

      // Add a separator line between items to make them more distinct
      prettyFormattedHistory += '-' * 50 + "\n";
    }
    await DialogHelper.showInformationDialog(context, FeaturesStrings.gridHistory, prettyFormattedHistory);
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

  static const List<String> productCategories = ["others"];

  static Map<String, TrinaCell> generateProductTypeCells(List<ProductModel> products) {
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

  static Future<bool?> _showTicketProducts(BuildContext context, int ticketId) {
    return showDialog<bool>(
      context: context,
      builder: (_) => ProductsDialog(ticketId: ticketId),
    );
  }
}