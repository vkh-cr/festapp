import 'package:fstapp/dataModelsEshop/TbEshop.dart';

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

  factory PaymentInfoModel.fromJson(Map<String, dynamic> json) {
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
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.payment_info.id: id,
    TbEshop.payment_info.created_at: createdAt?.toIso8601String(),
    TbEshop.payment_info.bank_account: bankAccount,
    TbEshop.payment_info.variable_symbol: variableSymbol,
    TbEshop.payment_info.amount: amount,
    TbEshop.payment_info.paid: paid,
    TbEshop.payment_info.returned: returned,
    TbEshop.payment_info.deadline: deadline?.toIso8601String(),
    TbEshop.payment_info.currency_code: currencyCode,
  };

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
  });
}
