import 'package:flutter/cupertino.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/form_response_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbForms {
  static final _supabase = Supabase.instance.client;

  static Future<FormModel?> getFormFromLink(String link) async {
    final response = await _supabase
        .rpc('get_form_from_link', params: {'form_link': link});

    if(response["code"] == 200 || response["code"] == 400){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
  }

  static Future<FormModel?> getFormForEdit(String link) async {
    final response = await _supabase
        .rpc('get_form_from_link_for_edit', params: {'form_link': link});

    if(response["code"] == 200){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
  }

  static Future<void> updateForm(BuildContext context, FormModel form) async {
    final response = await _supabase.rpc(
      'update_form',
      params: {
        'input_data': form.toEditedJson(),
      },
    );

    if (response["code"] != 200) {
      ToastHelper.Show(context, response["message"], severity: ToastSeverity.NotOk);
      throw Exception(response);
    }
  }

  static Future<BlueprintModel?> getBlueprint(String mySecret, String formKey, int blueprintId) async {
    final response = await _supabase.rpc(
      'get_blueprint',
      params: {
        'my_secret': mySecret,
        'form_key': formKey,
        'blueprint_id': blueprintId,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<BlueprintModel?> getBlueprintForEdit(String formKey) async {

    final response = await _supabase.rpc(
      'get_blueprint_editor',
      params: {
        'form_link': formKey,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<bool> updateBlueprint(context, BlueprintModel blueprint) async {
    final response = await _supabase.rpc(
      'update_blueprint',
      params: {
        'input_data': blueprint,
      },
    );

    var code = response["code"];
    if (code != 200) {
      ToastHelper.Show(context, code.toString(), severity: ToastSeverity.NotOk);
      return false;
    }

    return true;
  }

  static Future<List<FormResponseModel>> getAllResponses(String formLink) async {
    var allFields = await getAllFormFields(formLink);
    var orders = await DbOrders.getAllOrders(formLink);
    var onlyFormOrders = orders.where((o) => o.form?.link == formLink);
    return List<FormResponseModel>.from(
      onlyFormOrders.map((x) => FormResponseModel.fromOrder(x, allFields)),
    );
  }

  static Future<List<FormFieldModel>> getAllFormFields(String formLink) async {
    final formResponse = await _supabase
        .from(Tb.forms.table)
        .select(Tb.forms.id)
        .eq(Tb.forms.link, formLink)
        .single();

    final int formId = formResponse[Tb.forms.id] as int;

    final fieldsData = await _supabase
        .from(Tb.form_fields.table)
        .select(
        "${Tb.form_fields.id},"
            "${Tb.form_fields.created_at},"
            "${Tb.form_fields.title},"
            "${Tb.form_fields.description},"
            "${Tb.form_fields.data},"
            "${Tb.form_fields.type},"
            "${Tb.form_fields.is_required},"
            "${Tb.form_fields.form},"
            "${Tb.form_fields.is_hidden},"
            "${Tb.form_fields.order},"
            "${Tb.form_fields.product_type},"
            "${Tb.form_fields.is_ticket_field}"
    )
        .eq(Tb.form_fields.form, formId)
        .eq(Tb.form_fields.is_ticket_field, false)
        .neq(Tb.form_fields.type, FormHelper.fieldTypeTicket)
        .order(Tb.form_fields.order, ascending: true);

    // Step 3: Map the retrieved data to a list of FormFieldModel instances
    List<FormFieldModel> formFields = [];
    formFields = List<FormFieldModel>.from(
      fieldsData.map((x) => FormFieldModel.fromJson(x)),
    );
    return formFields;
  }

}
