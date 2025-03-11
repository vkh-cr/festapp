import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';

class FormModel {
  int? id;
  DateTime? createdAt;
  Map<String, dynamic>? data;
  String? formKey;
  int? occasion;
  int? blueprint;
  String? type;
  int? bankAccount;
  int? deadlineDuration;
  bool? isOpen;
  String? accountNumber;
  String? secret;
  String? header;
  String? headerOff;
  String? link;
  List<FormFieldModel>? relatedFields;

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
      bankAccount: json[Tb.forms.bank_account],
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
          : null, // Parsing related fields from JSON
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
    Tb.forms.bank_account: bankAccount,
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
    Tb.forms.bank_account: bankAccount,
    Tb.forms.deadline_duration_seconds: deadlineDuration,
    Tb.forms.is_open: isOpen,
    Tb.forms.header: header,
    Tb.forms.header_off: headerOff,
    Tb.forms.link: link,
    Tb.form_fields.table: relatedFields,
  };
}
