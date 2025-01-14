import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/dataGrid/PlutoAbstract.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintObjectModel.dart';
import 'package:fstapp/dataModelsEshop/PaymentInfoModel.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:intl/intl.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';

class OrderModel extends IPlutoRowModel {
  int? id;
  DateTime? createdAt;
  DateTime? updatedAt;
  double? price;
  String? state;
  Map<String, dynamic>? data;
  int? occasion;
  int? paymentInfo;
  int? form;
  String? currencyCode;
  String? noteHidden;

  // Relating tickets, spots, products, and payment info to the order
  List<TicketModel>? relatedTickets;
  List<BlueprintObjectModel>? relatedSpots;
  List<ProductModel>? relatedProducts;
  PaymentInfoModel? paymentInfoModel;

  static const String orderedState = "ordered";
  static const String paidState = "paid";
  static const String sentState = "sent";
  static const String usedState = "used";
  static const String stornoState = "storno";
  static const orderStates = [orderedState, paidState, sentState, usedState, stornoState];

  static String statesToLocale(String? state) {
    switch (state) {
      case orderedState:
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
        return '???';
    }
  }

  static String statesToUpper(String? state) {
    return statesToLocale(state).toUpperCase();
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
    this.form,
    this.currencyCode,
    this.relatedTickets,
    this.relatedSpots,
    this.relatedProducts,
    this.paymentInfoModel,
    this.noteHidden,
  });

  factory OrderModel.fromJson(Map<String, dynamic> json) {
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
      state: json[TbEshop.orders.state],
      data: json[TbEshop.orders.data],
      occasion: json[TbEshop.orders.occasion],
      paymentInfo: json[TbEshop.orders.payment_info],
      currencyCode: json[TbEshop.orders.currency_code],
      noteHidden: json[TbEshop.orders.note_hidden],
    );
  }

  static OrderModel fromPlutoJson(Map<String, dynamic> json) {
    return OrderModel(
        id: json[TbEshop.orders.id] == -1 ? null : json[TbEshop.orders.id],
        noteHidden: json[TbEshop.orders.note_hidden]);
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
  PlutoRow toPlutoRow(BuildContext context) {
    return PlutoRow(cells: {
      TbEshop.orders.id: PlutoCell(value: id ?? 0),
      TbEshop.orders.order_symbol: PlutoCell(value: id ?? 0),
      TbEshop.orders.price: PlutoCell(value: price != null ? Utilities.formatPrice(context, price!) : ""),
      TbEshop.orders.state: PlutoCell(value: state ?? orderedState),
      TbEshop.payment_info.amount: PlutoCell(value: paymentInfoModel?.amount != null ? Utilities.formatPrice(context, paymentInfoModel!.amount!) : ""),
      TbEshop.payment_info.paid: PlutoCell(value: paymentInfoModel?.paid != null ? Utilities.formatPrice(context, paymentInfoModel!.paid!) : ""),
      TbEshop.payment_info.variable_symbol: PlutoCell(value: paymentInfoModel?.variableSymbol ?? 0),
      TbEshop.payment_info.deadline: PlutoCell(
        value: paymentInfoModel?.deadline != null
            ? DateFormat('yyyy-MM-dd').format(paymentInfoModel!.deadline!)
            : "",
      ),
      TbEshop.orders.data: PlutoCell(value: toCustomerData()),
      TbEshop.orders.data_note: PlutoCell(value: toCustomerNote()),
      TbEshop.orders.note_hidden: PlutoCell(value: noteHidden ?? ""),
    });
  }

  @override
  Future<void> deleteMethod() async {
    await DbEshop.deleteOrder(this);
  }

  @override
  Future<void> updateMethod() async {
    await DbEshop.updateOrderNoteHidden(id!, noteHidden!);
  }

  @override
  String toBasicString() => "Order #$id";

  String toCustomerData() => "${data?["name"]} ${data?["surname"]} (${data?["email"]})";

  String toCustomerNote() => "${data?["note"] ?? ""}";
  String toCustomerNoteHidden() => "${data?["note_hidden"] ?? ""}";
}
