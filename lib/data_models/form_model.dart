import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models_eshop/bank_account_model.dart';

class FormModel {
  int? id;
  DateTime? createdAt;
  String? title; // New field for the form's title.
  Map<String, dynamic>? data;
  String? key; // Renamed from formKey for consistency with DB schema.
  int? occasion;
  int? blueprint;
  String? type;
  BankAccountModel? bankAccount;
  int? bankAccountId;
  int? deadlineDurationSeconds; // Renamed from deadlineDuration for clarity.
  bool? isOpen;
  String? accountNumber;
  String? secret;
  String? header;
  String? headerOff;
  String? link;
  List<FormFieldModel>? relatedFields;
  List<BankAccountModel>? availableBankAccounts;
  int? responseCount; // New field for the number of responses.
  bool? isReminderEnabled;

  static const String metaIsCardDesign = "is_card_design";
  static const String metaIsReminderEnabled = "is_reminder_enabled";
  static const String metaFields = "fields";

  FormModel({
    this.id,
    this.createdAt,
    this.title,
    this.data,
    this.key,
    this.occasion,
    this.blueprint,
    this.type,
    this.bankAccount,
    this.bankAccountId,
    this.deadlineDurationSeconds,
    this.isOpen,
    this.accountNumber,
    this.secret,
    this.header,
    this.headerOff,
    this.link,
    this.relatedFields,
    this.availableBankAccounts,
    this.responseCount,
    this.isReminderEnabled,
  });

  factory FormModel.fromJson(Map<String, dynamic> json) {
    return FormModel(
      id: json[Tb.forms.id],
      createdAt: json[Tb.forms.created_at] != null
          ? DateTime.parse(json[Tb.forms.created_at])
          : null,
      title: json[Tb.forms.title], // Added title parsing.
      data: json[Tb.forms.data],
      key: json[Tb.forms.key], // Updated to use 'key'.
      occasion: json[Tb.forms.occasion],
      blueprint: json[Tb.forms.blueprint],
      type: json[Tb.forms.type],
      bankAccountId: json[Tb.forms.bank_account],
      deadlineDurationSeconds: json[Tb.forms.deadline_duration_seconds],
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
      responseCount: json['response_count'], // Added response count parsing from JSON.
      isReminderEnabled: json['is_reminder_feature_enabled'],
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.title: title, // Added title.
    Tb.forms.data: data,
    Tb.forms.key: key, // Updated to use 'key'.
    Tb.forms.occasion: occasion,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds:
    deadlineDurationSeconds, // Updated property name.
    Tb.forms.is_open: isOpen,
    'account_number': accountNumber,
    'secret': secret,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    'fields': relatedFields,
    // responseCount is a calculated field, so it's typically not included in toJson for updates/inserts.
  };

  Map<String, dynamic> toEditedJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.title: title, // Added title.
    Tb.forms.data: data,
    Tb.forms.key: key, // Updated to use 'key'.
    Tb.forms.occasion: occasion,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds:
    deadlineDurationSeconds, // Updated property name.
    Tb.forms.is_open: isOpen,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    Tb.form_fields.table: relatedFields,
  };

  /// Returns a list of available supported currencies.
  List<String> getSupportedCurrencies() {
    if (bankAccount != null &&
        bankAccount!.supportedCurrencies != null &&
        bankAccount!.supportedCurrencies!.isNotEmpty) {
      return bankAccount!.supportedCurrencies!;
    } else if (availableBankAccounts != null) {
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

  @override
  String toString() {
    return title ?? link ?? "---";
  }
}
