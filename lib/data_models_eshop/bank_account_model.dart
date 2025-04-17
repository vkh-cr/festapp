import 'package:fstapp/data_models_eshop/tb_eshop.dart';

class BankAccountModel {
  final int? id;
  final DateTime? createdAt;
  final String? accountNumberHumanReadable;
  final int? secret;
  final String? accountNumber;
  final String? title;
  final String? type;
  final int? minFetchWaitSeconds;
  final DateTime? lastFetchTime;
  final bool? isFetchEnabled;
  final List<String>? supportedCurrencies;

  const BankAccountModel({
    this.id,
    this.createdAt,
    this.accountNumberHumanReadable,
    this.secret,
    this.accountNumber,
    this.title,
    this.type,
    this.minFetchWaitSeconds,
    this.lastFetchTime,
    this.isFetchEnabled,
    this.supportedCurrencies,
  });

  factory BankAccountModel.fromJson(Map<String, dynamic> json) {
    return BankAccountModel(
      id: json[TbEshop.bank_accounts.id],
      createdAt: json[TbEshop.bank_accounts.created_at] != null
          ? DateTime.parse(json[TbEshop.bank_accounts.created_at])
          : null,
      accountNumberHumanReadable: json[TbEshop.bank_accounts.account_number_human_readable],
      secret: json[TbEshop.bank_accounts.secret],
      accountNumber: json[TbEshop.bank_accounts.account_number],
      title: json[TbEshop.bank_accounts.title],
      type: json[TbEshop.bank_accounts.type],
      minFetchWaitSeconds: json[TbEshop.bank_accounts.min_fetch_wait_seconds],
      lastFetchTime: json[TbEshop.bank_accounts.last_fetch_time] != null
          ? DateTime.parse(json[TbEshop.bank_accounts.last_fetch_time])
          : null,
      isFetchEnabled: json[TbEshop.bank_accounts.is_fetch_enabled],
      supportedCurrencies: json[TbEshop.bank_accounts.supported_currencies] != null
          ? List<String>.from(json[TbEshop.bank_accounts.supported_currencies])
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    TbEshop.bank_accounts.id: id,
    TbEshop.bank_accounts.created_at: createdAt?.toIso8601String(),
    TbEshop.bank_accounts.account_number_human_readable: accountNumberHumanReadable,
    TbEshop.bank_accounts.secret: secret,
    TbEshop.bank_accounts.account_number: accountNumber,
    TbEshop.bank_accounts.title: title,
    TbEshop.bank_accounts.type: type,
    TbEshop.bank_accounts.min_fetch_wait_seconds: minFetchWaitSeconds,
    TbEshop.bank_accounts.last_fetch_time: lastFetchTime?.toIso8601String(),
    TbEshop.bank_accounts.is_fetch_enabled: isFetchEnabled,
    TbEshop.bank_accounts.supported_currencies: supportedCurrencies,
  };
}
