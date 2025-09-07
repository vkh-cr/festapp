import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/blueprint/blueprint_object_model.dart';
import 'package:fstapp/components/eshop/eshop_columns.dart';
import 'package:fstapp/components/eshop/models/payment_info_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:trina_grid/trina_grid.dart';

import 'order_data_ticket_model.dart';
import 'orders_history_model.dart';

class OrderModel extends ITrinaRowModel {
  @override
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  double? price;
  String? state;
  Map<String, dynamic>? data;
  int? occasion;
  int? paymentInfo;
  String? formKey;
  String? currencyCode;
  String? noteHidden;

  // Relating to top-level DB tables
  FormModel? form;
  List<TicketModel>? relatedTickets;
  List<BlueprintObjectModel>? relatedSpots;
  List<ProductModel>? relatedProducts;
  PaymentInfoModel? paymentInfoModel;
  List<OrderHistoryModel>? relatedHistory;
  // Parsed from the 'data' JSON field
  List<OrderDataTicketModel>? dataTickets;

  static const String expiredState = "expired";
  static const String orderedState = "ordered";
  static const String paidState = "paid";
  static const String sentState = "sent";
  static const String usedState = "used";
  static const String stornoState = "storno";
  static const orderStates = [expiredState, orderedState, paidState, sentState, usedState, stornoState];

  static String stateToLocale(String? state) {
    if (state == null || state.isEmpty) return "Not Set".tr();
    switch (state) {
      case orderedState:
      case expiredState:
        return 'Ordered'.tr();
      case paidState:
        return 'Paid'.tr();
      case sentState:
        return 'Sent'.tr();
      case usedState:
        return 'Used'.tr();
      case stornoState:
        return 'Storno'.tr();
      default:
        return state; // Return the key itself if not found
    }
  }

  static String statesDataGridToUpper(String state) {
    String firstPart = state.split(";")[0];
    return stateToLocale(firstPart).toUpperCase();
  }

  static List<String> statesToDataGridFormat() {
    return OrderModel.orderStates.map(formatState).toList();
  }

  static String formatState(String state) {
    return "$state;${OrderModel.stateToLocale(state)}";
  }

  bool isExpired() {
    if (state != orderedState || paymentInfoModel == null || paymentInfoModel!.deadline == null) {
      return false;
    }
    // Create date-only objects for now and for the deadline.
    final nowDate = DateTime(TimeHelper.now().year, TimeHelper.now().month, TimeHelper.now().day);
    final deadlineDate = DateTime(paymentInfoModel!.deadline!.year, paymentInfoModel!.deadline!.month, paymentInfoModel!.deadline!.day);
    return nowDate.isAfter(deadlineDate);
  }

  static Color singleDataGridStateToColor(String state) {
    Color color;
    String firstPart = state.split(";")[0];
    switch (firstPart) {
      case expiredState:
      case orderedState:
        color = Colors.green[100]!; // Blue for ordered
        break;
      case paidState:
        color = Colors.green[300]!; // A darker shade of green for paid
        break;
      case sentState:
        color = Colors.green[800]!; // Orange for sent
        break;
      case usedState:
        color = Colors.blue[600]!; // A darker shade of grey for used
        break;
      case stornoState:
        color = Colors.grey[700]!; // A lighter shade of green for canceled (storno)
        break;
      default:
        color = Colors.black; // Black for unknown states
    }

    // Apply global opacity to all colors
    return color.withValues(alpha: 0.6);
  }

  OrderModel({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.price,
    this.state,
    this.data,
    this.occasion,
    this.paymentInfo,
    this.formKey,
    this.currencyCode,
    this.noteHidden,
    this.form,
    this.relatedTickets,
    this.relatedSpots,
    this.relatedProducts,
    this.paymentInfoModel,
    this.relatedHistory,
    this.dataTickets,
  });

  factory OrderModel.fromJson(Map<String, dynamic> json) {
    // Logic to parse the nested tickets from the 'data' field
    List<OrderDataTicketModel>? parsedDataTickets;
    final orderData = json[TbEshop.orders.data];
    if (orderData is Map<String, dynamic> && orderData['tickets'] is List) {
      parsedDataTickets = (orderData['tickets'] as List)
          .map((t) => OrderDataTicketModel.fromJson(t as Map<String, dynamic>))
          .toList();
    }

    return OrderModel(
      id: json[TbEshop.orders.id],
      createdAt: json[TbEshop.orders.created_at] != null
          ? DateTime.parse(json[TbEshop.orders.created_at])
          : null,
      updatedAt: json[TbEshop.orders.updated_at] != null
          ? DateTime.parse(json[TbEshop.orders.updated_at])
          : null,
      price: json[TbEshop.orders.price] != null
          ? double.tryParse(json[TbEshop.orders.price].toString())
          : null,
      currencyCode: json[TbEshop.orders.currency_code],
      state: json[TbEshop.orders.state],
      formKey: orderData is Map<String, dynamic> ? orderData[TbEshop.orders.data_form] : null,
      data: orderData,
      occasion: json[TbEshop.orders.occasion],
      paymentInfo: json[TbEshop.orders.payment_info],
      noteHidden: json[TbEshop.orders.note_hidden],
      dataTickets: parsedDataTickets,
    );
  }

  static OrderModel fromPlutoJson(Map<String, dynamic> json) {
    return OrderModel(
        id: json[EshopColumns.ORDER_ID] == -1 ? null : json[EshopColumns.ORDER_ID],
        noteHidden: json[EshopColumns.ORDER_NOTE_HIDDEN]);
  }

  Map<String, dynamic> toJson() => {
    TbEshop.orders.id: id,
    TbEshop.orders.created_at: createdAt?.toIso8601String(),
    TbEshop.orders.updated_at: updatedAt?.toIso8601String(),
    TbEshop.orders.price: price,
    TbEshop.orders.state: state,
    TbEshop.orders.data: data,
    TbEshop.orders.occasion: occasion,
    TbEshop.orders.payment_info: paymentInfo,
    TbEshop.orders.currency_code: currencyCode,
    TbEshop.orders.note_hidden: noteHidden,
  };

  @override
  TrinaRow toTrinaRow(BuildContext context) {
    return TrinaRow(cells: {
      EshopColumns.ORDER_ID: TrinaCell(value: id ?? 0),
      EshopColumns.ORDER_SYMBOL: TrinaCell(value: id ?? 0),
      EshopColumns.ORDER_PRICE: TrinaCell(value: price != null ? Utilities.formatPrice(context, price!, currencyCode: currencyCode) : ""),
      EshopColumns.ORDER_STATE: TrinaCell(value: OrderModel.formatState(state ?? orderedState)),
      EshopColumns.PAYMENT_INFO_AMOUNT: TrinaCell(value: paymentInfoModel?.amount != null ? Utilities.formatPrice(context, paymentInfoModel!.amount!, currencyCode: paymentInfoModel!.currencyCode) : ""),
      EshopColumns.PAYMENT_INFO_PAID: TrinaCell(value: paymentInfoModel?.paid != null ? Utilities.formatPrice(context, paymentInfoModel!.paid!, currencyCode: paymentInfoModel!.currencyCode) : ""),
      EshopColumns.PAYMENT_INFO_RETURNED: TrinaCell(value: paymentInfoModel?.returned != null ? Utilities.formatPrice(context, paymentInfoModel!.returned!, currencyCode: paymentInfoModel!.currencyCode) : ""),
      EshopColumns.PAYMENT_INFO_VARIABLE_SYMBOL: TrinaCell(value: paymentInfoModel?.variableSymbol ?? 0),
      EshopColumns.PAYMENT_INFO_DEADLINE: TrinaCell(
        value: paymentInfoModel?.deadline != null
            ? DateFormat('yyyy-MM-dd').format(paymentInfoModel!.deadline!)
            : "",
      ),
      EshopColumns.ORDER_CREATED_AT: TrinaCell(
          value: createdAt != null
              ? DateFormat('yyyy-MM-dd').format(createdAt!)
              : ""),
      EshopColumns.ORDER_DATA: TrinaCell(value: toCustomerData()),
      EshopColumns.ORDER_EMAIL: TrinaCell(value: data?[TbEshop.orders.data_email]),
      EshopColumns.TICKET_PRODUCTS: TrinaCell(
          value: relatedProducts != null
              ? relatedProducts!.map((p)=>p.toBasicString()).join(" | ")
              : ""),
      EshopColumns.ORDER_DATA_NOTE: TrinaCell(value: toCustomerNote()),
      EshopColumns.ORDER_NOTE_HIDDEN: TrinaCell(value: noteHidden ?? ""),
      EshopColumns.ORDER_HISTORY: TrinaCell(value: ""),
      EshopColumns.ORDER_TRANSACTIONS: TrinaCell(value: ""),
      EshopColumns.ORDER_FORM: TrinaCell(value: form?.toString() ?? ""),
      EshopColumns.PAYMENT_INFO_REMINDER_SENT: TrinaCell(value: paymentInfoModel!.isReminderSent.toString()),
    });
  }

  @override
  Future<void> deleteMethod(BuildContext context) async {
    await DbOrders.deleteOrder(this);
  }

  @override
  Future<void> updateMethod(BuildContext context) async {
    await DbOrders.updateOrderNoteHidden(id!, noteHidden!);
  }

  @override
  String toBasicString() => "Order #$id";

  String toCustomerData() => "${data?["name"]} ${data?["surname"]}";

  String toCustomerNote() => "${data?["note"] ?? ""}";
  String toCustomerNoteHidden() => "${data?["note_hidden"] ?? ""}";
}