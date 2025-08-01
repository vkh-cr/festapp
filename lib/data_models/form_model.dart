import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/components/eshop/models/bank_account_model.dart';

/// Represents the statistics for a form's responses.
class FormStatsModel {
  final int total;
  final int storno;
  final int paidOrSent;
  final int ordered;

  FormStatsModel({
    this.total = 0,
    this.storno = 0,
    this.paidOrSent = 0,
    this.ordered = 0,
  });

  /// Creates an instance from a JSON map.
  factory FormStatsModel.fromJson(Map<String, dynamic> json) {
    return FormStatsModel(
      total: json['total'] ?? 0,
      storno: json['storno'] ?? 0,
      paidOrSent: json['paid_or_sent'] ?? 0,
      ordered: json['ordered'] ?? 0,
    );
  }
}

class FormModel {
  int? id;
  DateTime? createdAt;
  String? title;
  Map<String, dynamic>? data;
  String? key;
  int? occasionId;
  OccasionModel? occasionModel;
  int? blueprint;
  String? type;
  BankAccountModel? bankAccount;
  int? bankAccountId;
  int? deadlineDurationSeconds;
  bool? isOpen;
  String? accountNumber;
  String? secret;
  String? header;
  String? headerOff;
  String? link;
  // UPDATED: Now non-nullable.
  List<FormFieldModel> relatedFields;
  List<BankAccountModel>? availableBankAccounts;
  FormStatsModel? stats;
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
    this.occasionId,
    this.occasionModel,
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
    List<FormFieldModel>? relatedFields,
    this.availableBankAccounts,
    this.stats,
    this.isReminderEnabled,
  }) : relatedFields = relatedFields ?? [];

  factory FormModel.fromJson(Map<String, dynamic> json) {
    OccasionModel? parsedOccasionModel;
    int? parsedOccasionId;

    final occasionData = json[Tb.forms.occasion];
    if (occasionData is Map<String, dynamic>) {
      parsedOccasionModel = OccasionModel.fromJson(occasionData);
      parsedOccasionId = parsedOccasionModel.id;
    } else if (occasionData is int) {
      parsedOccasionId = occasionData;
    }

    return FormModel(
      id: json[Tb.forms.id],
      createdAt: json[Tb.forms.created_at] != null
          ? DateTime.parse(json[Tb.forms.created_at])
          : null,
      title: json[Tb.forms.title],
      data: json[Tb.forms.data],
      key: json[Tb.forms.key],
      occasionId: parsedOccasionId,
      occasionModel: parsedOccasionModel,
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
          : [],
      availableBankAccounts: json['available_bank_accounts'] != null
          ? (json['available_bank_accounts'] as List)
          .map((account) => BankAccountModel.fromJson(account))
          .toList()
          : null,
      stats: json['stats'] != null
          ? FormStatsModel.fromJson(json['stats'])
          : null,
      isReminderEnabled: json['is_reminder_feature_enabled'],
    );
  }

  Map<String, dynamic> toJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.title: title,
    Tb.forms.data: data,
    Tb.forms.key: key,
    Tb.forms.occasion: occasionId,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds: deadlineDurationSeconds,
    Tb.forms.is_open: isOpen,
    'account_number': accountNumber,
    'secret': secret,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    'fields': relatedFields,
    // The 'stats' and 'occasionModel' objects are calculated/retrieved fields, so they're not included in toJson.
  };

  Map<String, dynamic> toEditedJson() => {
    Tb.forms.id: id,
    Tb.forms.created_at: createdAt?.toIso8601String(),
    Tb.forms.title: title,
    Tb.forms.data: data,
    Tb.forms.key: key,
    Tb.forms.occasion: occasionId,
    Tb.forms.blueprint: blueprint,
    Tb.forms.type: type,
    Tb.forms.bank_account: bankAccount?.id,
    Tb.forms.deadline_duration_seconds: deadlineDurationSeconds,
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