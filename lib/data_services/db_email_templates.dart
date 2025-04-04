import 'package:fstapp/data_models/email_template_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEmailTemplates {
  static final _supabase = Supabase.instance.client;

  static Future<List<EmailTemplateModel>> getAllEmailTemplates(int oc) async {
    final response = await _supabase.rpc("get_all_email_templates", params: {"p_context": { "occasion":oc }});
    return List<EmailTemplateModel>.from(
        (response as List).map((x) => EmailTemplateModel.fromJson(x))
    );
  }

  static Future<EmailTemplatesResponse> getAllEmailTemplatesViaFormLink(String link) async {
    final response = await _supabase.rpc(
        "get_all_email_templates_via_form_link",
        params: {"form_link": link}
    );
    return EmailTemplatesResponse.fromJson(response);
  }

  static Future<EmailTemplatesResponse> getAllEmailTemplatesViaOccasionLink(String link) async {
    final response = await _supabase.rpc(
        "get_all_email_templates_via_occasion_link",
        params: {"occasion_link": link}
    );
    return EmailTemplatesResponse.fromJson(response);
  }

  static Future<void> updateEmailTemplate(EmailTemplateModel template) async {
    await _supabase.rpc('update_email_template', params: {"p_data": template});
  }

  static Future<FunctionResponse> sendCustomEmail(
      EmailTemplateModel template,
      Map<String, String> subs,
      String email,
      ) async {
    final body = {
      "template": template.toJson(),
      "subs": subs,
      "email": email,
    };

    final response = await _supabase.functions.invoke(
      "send-custom-email",
      body: body,
    );
    return response;
  }

}

class EmailTemplatesResponse {
  final OccasionModel occasion;
  final UnitModel unit;
  final UnitModel organization;
  final List<EmailTemplateModel> templates;

  EmailTemplatesResponse({
    required this.occasion,
    required this.unit,
    required this.organization,
    required this.templates,
  });

  factory EmailTemplatesResponse.fromJson(Map<String, dynamic> json) {
    return EmailTemplatesResponse(
      occasion: OccasionModel.fromJson(json['occasion']),
      unit: UnitModel.fromJson(json['unit']),
      organization: UnitModel.fromJson(json['organization']),
      templates: (json['templates'] as List)
          .map((x) => EmailTemplateModel.fromJson(x))
          .toList(),
    );
  }

}
