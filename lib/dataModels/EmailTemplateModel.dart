import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataModels/Tb.dart';

/// Represents a substitution definition for an email template.
class EmailTemplateSub {
  final String code;
  final String description;
  final String defaultValue;

  const EmailTemplateSub({
    required this.code,
    required this.description,
    required this.defaultValue,
  });

  @override
  String toString() {
    return "$code: $description";
  }
}

class EmailTemplateModel {
  int? id;
  String? html;
  int? occasion;
  String? subject;
  int? organization;
  String? code;
  int? unit;

  EmailTemplateModel({
    this.id,
    this.html,
    this.occasion,
    this.subject,
    this.organization,
    this.code,
    this.unit,
  });

  factory EmailTemplateModel.fromJson(Map<String, dynamic> json) {
    return EmailTemplateModel(
      id: json[Tb.email_templates.id],
      html: json[Tb.email_templates.html],
      occasion: json[Tb.email_templates.occasion],
      subject: json[Tb.email_templates.subject],
      organization: json[Tb.email_templates.organization],
      code: json[Tb.email_templates.code],
      unit: json[Tb.email_templates.unit],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      Tb.email_templates.id: id,
      Tb.email_templates.html: html,
      Tb.email_templates.occasion: occasion,
      Tb.email_templates.subject: subject,
      Tb.email_templates.organization: organization,
      Tb.email_templates.code: code,
      Tb.email_templates.unit: unit,
    };
  }

  // Common substitution definitions (codes are now without '{{' and '}}'):
  static const EmailTemplateSub userNameSub = EmailTemplateSub(
    code: 'userName',
    description: 'The name of the user',
    defaultValue: 'Jan Novák',
  );

  static const EmailTemplateSub resetLinkSub = EmailTemplateSub(
    code: 'resetLink',
    description: 'The link to reset the password',
    defaultValue: 'https://live.festapp.net/reset',
  );

  static const EmailTemplateSub signInCodeSub = EmailTemplateSub(
    code: 'signInCode',
    description: 'The sign-in code',
    defaultValue: '123456',
  );

  static const EmailTemplateSub occasionTitleSub = EmailTemplateSub(
    code: 'occasionTitle',
    description: 'The title of the occasion',
    defaultValue: 'Festival of Creaky Music',
  );

  static const EmailTemplateSub amountSub = EmailTemplateSub(
    code: 'amount',
    description: 'The remaining amount',
    defaultValue: '100 CZK',
  );

  static const EmailTemplateSub accountNumberSub = EmailTemplateSub(
    code: 'accountNumber',
    description: 'The bank account number',
    defaultValue: '2502719268/2010',
  );

  static const EmailTemplateSub variableSymbolSub = EmailTemplateSub(
    code: 'variableSymbol',
    description: 'The payment identifier',
    defaultValue: '9654',
  );

  static const EmailTemplateSub deadlineSub = EmailTemplateSub(
    code: 'deadline',
    description: 'The payment deadline',
    defaultValue: '30. 2. 2026',
  );

  static const EmailTemplateSub fullOrderSub = EmailTemplateSub(
    code: 'fullOrder',
    description: 'Full order details',
    defaultValue: 'Order details here',
  );

  /// Mapping of template codes to their available substitutions.
  static final Map<String, List<EmailTemplateSub>> substitutionDefinitions = {
    'RESET_PASSWORD': [
      userNameSub,
      resetLinkSub,
    ],
    'SIGN_IN_CODE': [
      userNameSub,
      signInCodeSub,
    ],
    'TICKET_ORDER_CONFIRMATION': [
      occasionTitleSub,
      amountSub,
      accountNumberSub,
      variableSymbolSub,
      deadlineSub,
      fullOrderSub,
    ],
    'TICKET_ORDER_PAYMENT_DONE': [
      occasionTitleSub,
    ],
    'TICKET_ORDER_PAYMENT_REMINDER': [
      occasionTitleSub,
    ],
    'TICKET_ORDER_STORNO': [
      occasionTitleSub,
      amountSub,
    ],
  };

  /// Returns usage details based on the template code.
  /// The returned map includes:
  /// - 'title': A translated title for the template.
  /// - 'description': A translated description of what the template is used for.
  /// - 'subs': A list of [EmailTemplateSub] objects for available substitutions.
  Map<String, dynamic> getUsageDetails() {
    switch (code) {
      case 'RESET_PASSWORD':
        return {
          'title': 'Reset Password'.tr(),
          'description': 'This template is used for sending password reset instructions.'.tr(),
          'subs': substitutionDefinitions['RESET_PASSWORD'] ?? [],
        };
      case 'SIGN_IN_CODE':
        return {
          'title': 'Sign In Code'.tr(),
          'description': 'This template is used for sending sign-in codes.'.tr(),
          'subs': substitutionDefinitions['SIGN_IN_CODE'] ?? [],
        };
      case 'TICKET_ORDER_CONFIRMATION':
        return {
          'title': 'Order Confirmation'.tr(),
          'description': 'This template is used to confirm ticket orders.'.tr(),
          'subs': substitutionDefinitions['TICKET_ORDER_CONFIRMATION'] ?? [],
        };
      case 'TICKET_ORDER_PAYMENT_DONE':
        return {
          'title': 'Order Payment Done'.tr(),
          'description': 'This template is used to confirm successful ticket order payments.'.tr(),
          'subs': substitutionDefinitions['TICKET_ORDER_PAYMENT_DONE'] ?? [],
        };
      case 'TICKET_ORDER_PAYMENT_REMINDER':
        return {
          'title': 'Order Payment Reminder'.tr(),
          'description': 'This template is used to remind users about pending ticket order payments.'.tr(),
          'subs': substitutionDefinitions['TICKET_ORDER_PAYMENT_REMINDER'] ?? [],
        };
      case 'TICKET_ORDER_STORNO':
        return {
          'title': 'Order Cancellation'.tr(),
          'description': 'This template is used to notify users about ticket order cancellations.'.tr(),
          'subs': substitutionDefinitions['TICKET_ORDER_STORNO'] ?? [],
        };
      default:
        return {
          'title': 'Unknown Template'.tr(),
          'description': ''.tr(),
          'subs': [],
        };
    }
  }
}