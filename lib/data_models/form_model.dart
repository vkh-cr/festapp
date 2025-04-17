import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models_eshop/bank_account_model.dart';

class FormModel {
  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? formKey;
  int? occasion;
  int? blueprint;
  String? type;
  // Changed from int? to BankAccountModel? to support full JSON conversion.
  BankAccountModel? bankAccount;
  int? deadlineDuration;
  bool? isOpen;
  String? accountNumber;
  String? secret;
  String? header;
  String? headerOff;
  String? link;
  List<FormFieldModel>? relatedFields;
  List<BankAccountModel>? availableBankAccounts;

  static const String metaIsCardDesign = "is_card_design";

  FormModel({
    this.id,
    this.createdAt,
    this.data,
    this.formKey,
    this.occasion,
    this.blueprint,
    this.type,
    this.bankAccount,
    this.deadlineDuration,
    this.isOpen,
    this.accountNumber,
    this.secret,
    this.header,
    this.headerOff,
    this.link,
    this.relatedFields,
    this.availableBankAccounts,
  });

  factory FormModel.fromJson(Map<String, dynamic> json) {
    return FormModel(
      id: json[Tb.forms.id],
      createdAt: json[Tb.forms.created_at] != null
          ? DateTime.parse(json[Tb.forms.created_at])
          : null,
      data: json[Tb.forms.data],
      formKey: json[Tb.forms.key],
      occasion: json[Tb.forms.occasion],
      blueprint: json[Tb.forms.blueprint],
      type: json[Tb.forms.type],
      // Use the BankAccountModel conversion if the JSON value is not null.
      bankAccount: json[Tb.forms.bank_account] != null
          ? BankAccountModel.fromJson(json[Tb.forms.bank_account])
          : null,
      deadlineDuration: json[Tb.forms.deadline_duration_seconds],
      isOpen: json[Tb.forms.is_open],
      accountNumber: json['account_number'],
      secret: json['secret'],
      header: json[Tb.forms.header],
      headerOff: json[Tb.forms.header_off],
      link: json[Tb.forms.link],
      relatedFields: json['fields'] != null
          ? (json['fields'] as List)
          .map((field) => FormFieldModel.fromJson(field))
          .toList()
          : null,
      availableBankAccounts: json['available_bank_accounts'] != null
          ? (json['available_bank_accounts'] as List)
          .map((account) => BankAccountModel.fromJson(account))
          .toList()
          : null,
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.data: data,
    Tb.forms.key: formKey,
    Tb.forms.occasion: occasion,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds: deadlineDuration,
    Tb.forms.is_open: isOpen,
    'account_number': accountNumber,
    'secret': secret,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    'fields': relatedFields,
  };

  Map<String, dynamic> toEditedJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.data: data,
    Tb.forms.key: formKey,
    Tb.forms.occasion: occasion,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds: deadlineDuration,
    Tb.forms.is_open: isOpen,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    Tb.form_fields.table: relatedFields,
  };

  /// Returns a list of available supported currencies.
  ///
  /// If [bankAccount] is not null and contains supported currencies, its list is returned.
  /// Otherwise, the method aggregates supported currencies from all [availableBankAccounts] (unique values only).
  List<String> getSupportedCurrencies() {
    // Return supported currencies from the main bankAccount if available.
    if (bankAccount != null &&
        bankAccount!.supportedCurrencies != null &&
        bankAccount!.supportedCurrencies!.isNotEmpty) {
      return bankAccount!.supportedCurrencies!;
    } else if (availableBankAccounts != null) {
      // Use a Set to accumulate unique currencies from available bank accounts.
      final currencySet = <String>{};
      for (var account in availableBankAccounts!) {
        if (account.supportedCurrencies != null) {
          currencySet.addAll(account.supportedCurrencies!);
        }
      }
      return currencySet.toList();
    } else {
      return [];
    }
  }
}
