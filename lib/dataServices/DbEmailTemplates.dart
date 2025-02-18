import 'package:fstapp/dataModels/EmailTemplateModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEmailTemplates {
  static final _supabase = Supabase.instance.client;

  static Future<List<EmailTemplateModel>> getAllEmailTemplates(int oc) async {
    final response = await _supabase.rpc("get_all_email_templates", params: {"p_context": { "occasion":oc }});
    return List<EmailTemplateModel>.from(
        (response as List).map((x) => EmailTemplateModel.fromJson(x))
    );
  }

  static Future<List<EmailTemplateModel>> getAllEmailTemplatesViaFormLink(String link) async {
    final response = await _supabase.rpc("get_all_email_templates_via_form_link", params: {"form_link": link});
    return List<EmailTemplateModel>.from(
        (response as List).map((x) => EmailTemplateModel.fromJson(x))
    );
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
