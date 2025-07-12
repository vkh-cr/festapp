import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/eshop_columns.dart';
import 'package:fstapp/components/eshop/models/order_data_ticket_model.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:trina_grid/trina_grid.dart';

import '../orders_strings.dart';
import 'order_data_product_model.dart';

// Helper class to bundle a product with its ticket context
class _ProductWithTicketContext {
  final OrderDataProductModel product;
  final String ticketSymbol;
  _ProductWithTicketContext({required this.product, required this.ticketSymbol});
}

// Helper class to hold the result of the diffing logic
class _OrderChanges {
  final List<_ProductWithTicketContext> added;
  final List<_ProductWithTicketContext> removed;
  final List<Map<String, _ProductWithTicketContext>> changed;
  _OrderChanges({required this.added, required this.removed, required this.changed});
}

class OrderHistoryModel extends ITrinaRowModel {
  @override
  int? id;
  DateTime? createdAt;
  double? price;
  String? state;
  Map<String, dynamic>? data;
  int? orderId;
  String? currencyCode;
  String? createdById;
  UserInfoModel? createdBy;

  OrderModel? orderModel;
  OrderHistoryModel? previousHistoryRecord;
  List<OrderDataTicketModel>? dataTickets;

  OrderHistoryModel({
    this.id,
    this.createdAt,
    this.price,
    this.state,
    this.data,
    this.orderId,
    this.currencyCode,
    this.createdById,
    this.createdBy,
    this.orderModel,
    this.previousHistoryRecord,
    this.dataTickets,
  });

  factory OrderHistoryModel.fromJson(Map<String, dynamic> json) {
    List<OrderDataTicketModel>? parsedDataTickets;
    final historyData = json[TbEshop.orders_history.data];
    if (historyData is Map<String, dynamic> && historyData['tickets'] is List) {
      parsedDataTickets = (historyData['tickets'] as List)
          .map((t) => OrderDataTicketModel.fromJson(t as Map<String, dynamic>))
          .toList();
    }
    return OrderHistoryModel(
      id: json[TbEshop.orders_history.id],
      createdAt: json[TbEshop.orders_history.created_at] != null ? DateTime.parse(json[TbEshop.orders_history.created_at]) : null,
      createdById: json[TbEshop.orders_history.created_by],
      price: json[TbEshop.orders_history.price] != null ? double.tryParse(json[TbEshop.orders_history.price].toString()) : null,
      state: json[TbEshop.orders_history.state],
      data: historyData,
      orderId: json[TbEshop.orders_history.order],
      currencyCode: json[TbEshop.orders_history.currency_code],
      dataTickets: parsedDataTickets,
    );
  }

  /// Creates an OrderHistoryModel from a TrinaGrid/PlutoGrid row.
  ///
  /// Since history records are immutable from the UI, this method simply retrieves
  /// the original, complete model object that was stored in the row's reference column.
  /// This avoids the complexity and potential errors of parsing formatted display strings.
  static OrderHistoryModel fromPlutoJson(Map<String, dynamic> json) {
    // The entire model is stored in a dedicated column to preserve the original data.
    // This is the most reliable way to get the model from a grid row.
    final model = json[EshopColumns.HISTORY_MODEL_REFERENCE] as OrderHistoryModel;

    // Because OrderHistoryModel is treated as immutable in the grid (update is disabled),
    // we simply return the original model reference. If fields were updatable,
    // their new values from the json map would be applied to the model here.
    return model;
  }


  factory OrderHistoryModel.fromOrderModel(OrderModel order) {
    return OrderHistoryModel(
      id: -1,
      createdAt: order.updatedAt,
      price: order.price,
      state: order.state,
      data: order.data,
      orderId: order.id,
      currencyCode: order.currencyCode,
      createdById: null,
      createdBy: null,
      orderModel: order,
      dataTickets: order.dataTickets,
    );
  }

  /// Performs the diffing logic and returns a structured result.
  _OrderChanges _calculateChanges() {
    final allCurrentProducts = dataTickets
        ?.expand((t) => t.products.map((p) => _ProductWithTicketContext(product: p, ticketSymbol: t.ticketSymbol ?? '')))
        .toList() ?? [];

    if (previousHistoryRecord == null) {
      return _OrderChanges(added: allCurrentProducts, removed: [], changed: []);
    }

    final allReferenceProducts = previousHistoryRecord!.dataTickets
        ?.expand((t) => t.products.map((p) => _ProductWithTicketContext(product: p, ticketSymbol: t.ticketSymbol ?? '')))
        .toList() ?? [];

    final added = <_ProductWithTicketContext>[];
    final removed = <_ProductWithTicketContext>[];
    final changed = <Map<String, _ProductWithTicketContext>>[];

    final currentProdsMutable = [...allCurrentProducts];
    final referenceProdsMutable = [...allReferenceProducts];

    // First pass: Find and remove identical products (same id and price)
    for (int i = currentProdsMutable.length - 1; i >= 0; i--) {
      final currentP = currentProdsMutable[i];
      final matchIndex = referenceProdsMutable.indexWhere((refP) => refP.product.id == currentP.product.id && refP.product.price == currentP.product.price);
      if (matchIndex > -1) {
        currentProdsMutable.removeAt(i);
        referenceProdsMutable.removeAt(matchIndex);
      }
    }

    // Second pass: From the remaining items, find products with the same ID but different prices
    for (int i = currentProdsMutable.length - 1; i >= 0; i--) {
      final currentP = currentProdsMutable[i];
      final matchIndex = referenceProdsMutable.indexWhere((refP) => refP.product.id == currentP.product.id);
      if (matchIndex > -1) {
        changed.add({'from': referenceProdsMutable[matchIndex], 'to': currentP});
        currentProdsMutable.removeAt(i);
        referenceProdsMutable.removeAt(matchIndex);
      }
    }

    // Final pass: Any remaining items are purely added or removed
    added.addAll(currentProdsMutable);
    removed.addAll(referenceProdsMutable);

    return _OrderChanges(added: added, removed: removed, changed: changed);
  }

  /// **NEW METHOD**
  /// Generates a single-line string summary of all changes for the data grid.
  String _generateChangesSummaryString(BuildContext context) {
    final changes = _calculateChanges();
    final changeStrings = <String>[];

    // Format added products
    for (var p in changes.added) {
      final product = p.product;
      final priceString = Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode);
      changeStrings.add("+ ${product.title} ($priceString)");
    }

    // Format removed products
    for (var p in changes.removed) {
      final product = p.product;
      final priceString = Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode);
      changeStrings.add("− ${product.title} ($priceString)");
    }

    // Format changed products
    for (var c in changes.changed) {
      final fromP = c['from']!.product;
      final toP = c['to']!.product;
      final oldPrice = Utilities.formatPrice(context, fromP.price!, currencyCode: fromP.currencyCode);
      final newPrice = Utilities.formatPrice(context, toP.price!, currencyCode: toP.currencyCode);
      changeStrings.add("~ ${toP.title}: $oldPrice → $newPrice");
    }

    if (changeStrings.isEmpty) {
      return OrdersStrings.noProductChanges;
    }

    // Join all changes with a separator
    return changeStrings.join(' | ');
  }

  /// Generates a single-line, horizontally scrollable widget for the data grid column.
  Widget generateSingleLineSummaryWidget(BuildContext context) {
    final changes = _calculateChanges();
    final defaultStyle = DefaultTextStyle.of(context).style;
    final changeSpans = <TextSpan>[];

    for (var p in changes.added) {
      final product = p.product;
      changeSpans.add(TextSpan(text: "+ ${product.title} (${Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode)})", style: TextStyle(color: ThemeConfig.greenColor(context), fontWeight: FontWeight.bold)));
    }
    for (var p in changes.removed) {
      final product = p.product;
      changeSpans.add(TextSpan(text: "− ${product.title} (${Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode)})", style: TextStyle(color: ThemeConfig.redColor(context), fontWeight: FontWeight.bold)));
    }
    for (var c in changes.changed) {
      final fromP = c['from']!.product;
      final toP = c['to']!.product;
      final oldPrice = Utilities.formatPrice(context, fromP.price!, currencyCode: fromP.currencyCode);
      final newPrice = Utilities.formatPrice(context, toP.price!, currencyCode: toP.currencyCode);
      changeSpans.add(TextSpan(text: "~ ${toP.title}: $oldPrice → $newPrice", style: TextStyle(color: Colors.orange.shade700, fontWeight: FontWeight.bold)));
    }

    if (changeSpans.isEmpty) {
      return Text(OrdersStrings.noProductChanges, style: TextStyle(color: defaultStyle.color?.withOpacity(0.6)));
    }

    final List<InlineSpan> changesWithSeparators = [];
    for (int i = 0; i < changeSpans.length; i++) {
      changesWithSeparators.add(changeSpans[i]);
      if (i < changeSpans.length - 1) {
        changesWithSeparators.add(const TextSpan(text: ' | '));
      }
    }

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: RichText(text: TextSpan(style: defaultStyle, children: changesWithSeparators)),
    );
  }

  /// Generates a multi-line, sectioned widget for the history dialog.
  Widget generateMultiLineSummaryWidget(BuildContext context) {
    final changes = _calculateChanges();
    final theme = Theme.of(context);

    if (changes.added.isEmpty && changes.removed.isEmpty && changes.changed.isEmpty) {
      return Text(OrdersStrings.noProductChanges, style: TextStyle(color: theme.textTheme.bodySmall?.color, fontStyle: FontStyle.italic));
    }

    // Group changes by ticket symbol
    final addedByTicket = groupBy(changes.added, (p) => p.ticketSymbol);
    final removedByTicket = groupBy(changes.removed, (p) => p.ticketSymbol);
    final changedByTicket = groupBy(changes.changed, (c) => c['to']!.ticketSymbol);

    // Get all unique ticket symbols that have changes
    final allTicketSymbols = {...addedByTicket.keys, ...removedByTicket.keys, ...changedByTicket.keys}.toList();

    final List<Widget> ticketWidgets = [];
    for (final ticketSymbol in allTicketSymbols) {
      final addedItems = addedByTicket[ticketSymbol] ?? [];
      final removedItems = removedByTicket[ticketSymbol] ?? [];
      final changedItems = changedByTicket[ticketSymbol] ?? [];

      // Find the note for this ticket from the current state's tickets
      final ticketNote = dataTickets?.firstWhereOrNull((t) => t.ticketSymbol == ticketSymbol)?.note;

      final List<Widget> changeRows = [];
      for (var p in addedItems) {
        final product = p.product;
        changeRows.add(_buildProductRow("+ ${product.title}", Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode), ThemeConfig.greenColor(context)));
      }
      for (var p in removedItems) {
        final product = p.product;
        changeRows.add(_buildProductRow("− ${product.title}", Utilities.formatPrice(context, product.price!, currencyCode: product.currencyCode), ThemeConfig.redColor(context)));
      }
      for (var c in changedItems) {
        final toProduct = c['to']!.product;
        final fromProduct = c['from']!.product;
        changeRows.add(_buildPriceChangeRow(context, toProduct.title!, fromProduct, toProduct));
      }

      ticketWidgets.add(_buildTicketChangeSection(context, ticketSymbol, ticketNote, changeRows));
    }

    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: ticketWidgets);
  }

  // Private helpers for generateMultiLineSummaryWidget
  Widget _buildTicketChangeSection(BuildContext context, String ticketSymbol, String? note, List<Widget> rows) {
    final theme = Theme.of(context);
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "${OrdersStrings.itemSingular} $ticketSymbol",
            style: theme.textTheme.titleSmall?.copyWith(fontWeight: FontWeight.bold),
          ),
          if (note != null && note.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 4.0, bottom: 4.0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(Icons.notes_rounded, size: 14, color: theme.textTheme.bodySmall?.color),
                  const SizedBox(width: 6),
                  Expanded(child: Text(note, style: theme.textTheme.bodySmall)),
                ],
              ),
            ),
          const SizedBox(height: 4),
          ...rows,
        ],
      ),
    );
  }

  Widget _buildProductRow(String title, String price, Color color) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 2.0, horizontal: 8.0),
      child: Row(children: [
        Expanded(child: Text(title, style: TextStyle(color: color))),
        Text(price, style: TextStyle(color: color, fontWeight: FontWeight.w500)),
      ]),
    );
  }

  Widget _buildPriceChangeRow(BuildContext context, String title, OrderDataProductModel from, OrderDataProductModel to) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 2.0, horizontal: 8.0),
      child: Row(children: [
        Expanded(child: Text("~ $title")),
        Row(children: [
          Text(Utilities.formatPrice(context, from.price!, currencyCode: from.currencyCode), style: TextStyle(decoration: TextDecoration.lineThrough, color: Theme.of(context).textTheme.bodySmall?.color)),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 4.0), child: Icon(Icons.arrow_forward, size: 16, color: Colors.orange.shade700)),
          Text(Utilities.formatPrice(context, to.price!, currencyCode: to.currencyCode), style: TextStyle(fontWeight: FontWeight.bold, color: Colors.orange.shade700)),
        ]),
      ]),
    );
  }

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    String priceText;
    // START of updated logic for total price
    // Check if there is a previous history record and if the total price has changed.
    if (previousHistoryRecord != null && price != previousHistoryRecord!.price) {
      // If the price changed, display it in "old → new" format.
      // Fallback to 0 if a price is null to prevent errors.
      final oldPrice = Utilities.formatPrice(context, previousHistoryRecord!.price ?? 0, currencyCode: previousHistoryRecord!.currencyCode);
      final newPrice = Utilities.formatPrice(context, price ?? 0, currencyCode: currencyCode);
      priceText = "$oldPrice → $newPrice";
    } else {
      // Otherwise, just display the current price.
      // If the price is null, show an empty string.
      priceText = price != null ? Utilities.formatPrice(context, price!, currencyCode: currencyCode) : "";
    }
    // END of updated logic for total price

    String stateCellFormat;
    if (previousHistoryRecord != null && state != previousHistoryRecord!.state) {
      final fromStateKey = previousHistoryRecord!.state ?? "";
      final toStateKey = state ?? "";
      stateCellFormat = "${fromStateKey};${OrderModel.stateToLocale(fromStateKey)} → ${toStateKey};${OrderModel.stateToLocale(toStateKey)}";
    } else {
      final stateKey = state ?? OrderModel.orderedState;
      stateCellFormat = OrderModel.formatState(stateKey);
    }

    return TrinaRow(
      cells: {
        EshopColumns.HISTORY_ID: TrinaCell(value: id ?? 0),
        EshopColumns.HISTORY_ORDER_SYMBOL: TrinaCell(value: orderId ?? 0),
        EshopColumns.ORDER_DATA: TrinaCell(value: orderModel?.toCustomerData() ?? ""),
        EshopColumns.ORDER_EMAIL: TrinaCell(value: orderModel?.data?[TbEshop.orders.data_email] ?? ""),
        EshopColumns.HISTORY_CHANGED_AT: TrinaCell(value: createdAt != null ? DateFormat('yyyy-MM-dd HH:mm').format(createdAt!.toOccasionTime()) : ""),
        EshopColumns.HISTORY_CHANGED_BY: TrinaCell(value: createdBy?.toFullNameString() ?? OrdersStrings.systemUser),
        EshopColumns.HISTORY_STATE: TrinaCell(value: stateCellFormat),
        EshopColumns.HISTORY_PRICE: TrinaCell(value: priceText),
        EshopColumns.HISTORY_CHANGES_SUMMARY: TrinaCell(value: _generateChangesSummaryString(context)),
        EshopColumns.ORDER_FORM: TrinaCell(value: orderModel?.form?.toString() ?? ""),
        EshopColumns.HISTORY_MODEL_REFERENCE: TrinaCell(value: this),
      },
    );
  }
  @override
  Future<void> deleteMethod(BuildContext context) async {
    await DbOrders.deleteOrderHistory(id!);
  }
  @override
  Future<void> updateMethod(BuildContext context) async => throw UnimplementedError();

  @override
  String toBasicString() => OrdersStrings.toBasicString(id ?? 0, orderId ?? 0);
}