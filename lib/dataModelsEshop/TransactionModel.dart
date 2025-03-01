import 'package:flutter/cupertino.dart';
import 'package:fstapp/components/single_data_grid/pluto_abstract.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServicesEshop/DbEshop.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:pluto_grid_plus/pluto_grid_plus.dart';
import 'package:intl/intl.dart';

class TransactionModel extends IPlutoRowModel {
  int? id;
  int? transactionId;
  DateTime? date;
  double? amount;
  String? currency;
  String? counterAccount;
  String? bankCode;
  String? bankName;
  String? ks;
  String? vs;
  String? ss;
  String? userIdentification;
  String? transactionType;
  String? performedBy;
  String? comment;
  int? commandId;
  int? bankAccountId;
  int? paymentInfo;
  DateTime? createdAt;
  String? messageForRecipient;
  String? counterAccountName;

  // Relationships (if any)
  // For example, you might have related BankAccountModel or PaymentInfoModel
  // Uncomment and define these if applicable
  // BankAccountModel? relatedBankAccount;
  // PaymentInfoModel? relatedPaymentInfo;

  static const String metaRelatedBankAccount = "related_bank_account";
  static const String metaRelatedPaymentInfo = "related_payment_info";

  TransactionModel({
    this.id,
    this.transactionId,
    this.date,
    this.amount,
    this.currency,
    this.counterAccount,
    this.bankCode,
    this.bankName,
    this.ks,
    this.vs,
    this.ss,
    this.userIdentification,
    this.transactionType,
    this.performedBy,
    this.comment,
    this.commandId,
    this.bankAccountId,
    this.paymentInfo,
    this.createdAt,
    this.messageForRecipient,
    this.counterAccountName,
    // this.relatedBankAccount,
    // this.relatedPaymentInfo,
  });

  /// Factory constructor to create a TransactionModel from JSON.
  factory TransactionModel.fromJson(Map<String, dynamic> json) {
    return TransactionModel(
      id: json[TbEshop.transactions.id],
      transactionId: json[TbEshop.transactions.transaction_id],
      date: json[TbEshop.transactions.date] != null
          ? DateTime.parse(json[TbEshop.transactions.date])
          : null,
      amount: json[TbEshop.transactions.amount]?.toDouble(),
      currency: json[TbEshop.transactions.currency],
      counterAccount: json[TbEshop.transactions.counter_account],
      bankCode: json[TbEshop.transactions.bank_code],
      bankName: json[TbEshop.transactions.bank_name],
      ks: json[TbEshop.transactions.ks],
      vs: json[TbEshop.transactions.vs],
      ss: json[TbEshop.transactions.ss],
      userIdentification: json[TbEshop.transactions.user_identification],
      transactionType: json[TbEshop.transactions.transaction_type],
      performedBy: json[TbEshop.transactions.performed_by],
      comment: json[TbEshop.transactions.comment],
      commandId: json[TbEshop.transactions.command_id],
      bankAccountId: json[TbEshop.transactions.bank_account_id],
      paymentInfo: json[TbEshop.transactions.payment_info],
      createdAt: json[TbEshop.transactions.created_at] != null
          ? DateTime.parse(json[TbEshop.transactions.created_at]).toLocal()
          : null,
      messageForRecipient: json[TbEshop.transactions.message_for_recipient],
      counterAccountName: json[TbEshop.transactions.counter_account_name],
      // relatedBankAccount: json[TbEshop.transactions.bank_account_id] != null
      //     ? BankAccountModel.fromJson(jsonRelatedBankAccount)
      //     : null,
      // relatedPaymentInfo: json[TbEshop.transactions.payment_info] != null
      //     ? PaymentInfoModel.fromJson(jsonRelatedPaymentInfo)
      //     : null,
    );
  }


  /// Converts the TransactionModel instance to a PlutoRow for the data grid.
  @override
  PlutoRow toPlutoRow(BuildContext context) {
    return PlutoRow(cells: {
      TbEshop.transactions.id: PlutoCell(value: id ?? 0),
      TbEshop.transactions.transaction_id:
      PlutoCell(value: transactionId ?? 0),
      TbEshop.transactions.date: PlutoCell(
          value: date != null
              ? DateFormat('yyyy-MM-dd HH:mm:ss').format(date!)
              : ""),
      TbEshop.transactions.amount:
      PlutoCell(value: amount != null ? Utilities.formatPrice(context, amount!) : ""),
      TbEshop.transactions.currency:
      PlutoCell(value: currency ?? ""),
      TbEshop.transactions.counter_account:
      PlutoCell(value: counterAccount ?? ""),
      TbEshop.transactions.bank_code:
      PlutoCell(value: bankCode ?? ""),
      TbEshop.transactions.bank_name:
      PlutoCell(value: bankName ?? ""),
      TbEshop.transactions.ks: PlutoCell(value: ks ?? ""),
      TbEshop.transactions.vs: PlutoCell(value: vs ?? ""),
      TbEshop.transactions.ss: PlutoCell(value: ss ?? ""),
      TbEshop.transactions.user_identification:
      PlutoCell(value: userIdentification ?? ""),
      TbEshop.transactions.transaction_type:
      PlutoCell(value: transactionType ?? ""),
      TbEshop.transactions.performed_by:
      PlutoCell(value: performedBy ?? ""),
      TbEshop.transactions.comment:
      PlutoCell(value: comment ?? ""),
      TbEshop.transactions.command_id:
      PlutoCell(value: commandId ?? 0),
      TbEshop.transactions.bank_account_id:
      PlutoCell(value: bankAccountId ?? 0),
      TbEshop.transactions.payment_info:
      PlutoCell(value: paymentInfo ?? 0),
      TbEshop.transactions.created_at: PlutoCell(
          value: createdAt != null
              ? DateFormat('yyyy-MM-dd HH:mm:ss').format(createdAt!)
              : ""),
      TbEshop.transactions.message_for_recipient:
      PlutoCell(value: messageForRecipient ?? ""),
      TbEshop.transactions.counter_account_name:
      PlutoCell(value: counterAccountName ?? ""),
      // Add related entities if necessary
      // metaRelatedBankAccount: PlutoCell(
      //     value: relatedBankAccount != null
      //         ? relatedBankAccount!.toBasicString()
      //         : ""),
      // metaRelatedPaymentInfo: PlutoCell(
      //     value: relatedPaymentInfo != null
      //         ? relatedPaymentInfo!.toBasicString()
      //         : ""),
    });
  }

  /// Factory method to create a TransactionModel from a PlutoRow JSON.
  static TransactionModel fromPlutoJson(Map<String, dynamic> json) {
    return TransactionModel(
      id: json[TbEshop.transactions.id] == -1 ? null : json[TbEshop.transactions.id],
      transactionId: json[TbEshop.transactions.transaction_id],
      amount: (json[TbEshop.transactions.amount] ?? 0).toDouble(),
      currency: json[TbEshop.transactions.currency],
      counterAccount: json[TbEshop.transactions.counter_account],
      bankCode: json[TbEshop.transactions.bank_code],
      bankName: json[TbEshop.transactions.bank_name],
      ks: json[TbEshop.transactions.ks],
      vs: json[TbEshop.transactions.vs],
      ss: json[TbEshop.transactions.ss],
      userIdentification: json[TbEshop.transactions.user_identification],
      transactionType: json[TbEshop.transactions.transaction_type],
      performedBy: json[TbEshop.transactions.performed_by],
      comment: json[TbEshop.transactions.comment],
      commandId: json[TbEshop.transactions.command_id],
      bankAccountId: json[TbEshop.transactions.bank_account_id],
      paymentInfo: json[TbEshop.transactions.payment_info],
      messageForRecipient: json[TbEshop.transactions.message_for_recipient],
      counterAccountName: json[TbEshop.transactions.counter_account_name],
      // relatedBankAccount: json[TbEshop.transactions.bank_account_id] != null
      //     ? BankAccountModel.fromJson(jsonRelatedBankAccount)
      //     : null,
      // relatedPaymentInfo: json[TbEshop.transactions.payment_info] != null
      //     ? PaymentInfoModel.fromJson(jsonRelatedPaymentInfo)
      //     : null,
    );
  }

  /// Deletes the transaction using the DbEshop service.
  @override
  Future<void> deleteMethod() async {
    throw Exception("Not implemented.");
  }

  /// Updates the transaction using the DbEshop service.
  @override
  Future<void> updateMethod() async {
    throw Exception("Not implemented.");
  }

  /// Returns a basic string representation of the transaction.
  @override
  String toBasicString() => "Transaction #$transactionId";
}
