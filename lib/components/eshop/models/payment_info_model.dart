import 'package:fstapp/components/eshop/models/tb_eshop.dart';

class PaymentInfoModel {
  int? id;
  DateTime? createdAt;
  int? bankAccount;
  int? variableSymbol;
  double? amount;
  double? paid;
  double? returned;
  DateTime? deadline;
  String? currencyCode;
  Map<String, dynamic>? data;
  bool? isReminderSent;

  factory PaymentInfoModel.fromJson(Map<String, dynamic> json) {
    final data = json[TbEshop.payment_info.data] as Map<String, dynamic>?;
    return PaymentInfoModel(
      id: json[TbEshop.payment_info.id],
      createdAt: json[TbEshop.payment_info.created_at] != null
          ? DateTime.parse(json[TbEshop.payment_info.created_at])
          : null,
      bankAccount: json[TbEshop.payment_info.bank_account],
      variableSymbol: json[TbEshop.payment_info.variable_symbol],
      amount: json[TbEshop.payment_info.amount] != null
          ? double.tryParse(json[TbEshop.payment_info.amount].toString())
          : null,
      paid: json[TbEshop.payment_info.paid] != null
          ? double.tryParse(json[TbEshop.payment_info.paid].toString())
          : null,
      returned: json[TbEshop.payment_info.returned] != null
          ? double.tryParse(json[TbEshop.payment_info.returned].toString())
          : null,
      deadline: json[TbEshop.payment_info.deadline] != null
          ? DateTime.parse(json[TbEshop.payment_info.deadline])
          : null,
      currencyCode: json[TbEshop.payment_info.currency_code],
      data: data,
      isReminderSent: data?['current_version_reminded'] == true,
    );
  }

  String toBasicString() => id != null ? "Payment Info #$id" : "Payment Info";

  PaymentInfoModel({
    this.id,
    this.createdAt,
    this.bankAccount,
    this.variableSymbol,
    this.amount,
    this.paid,
    this.returned,
    this.deadline,
    this.currencyCode,
    this.data,
    this.isReminderSent = false,
  });
}
