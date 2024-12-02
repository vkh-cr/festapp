import 'package:fstapp/dataModels/Tb.dart';

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
      accountNumber: json['account_number'], // Assuming it's added to the RPC response
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
    'account_number': accountNumber, // Including in serialization
  };
}
