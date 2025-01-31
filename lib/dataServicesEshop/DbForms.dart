import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormFieldModel.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModels/FormResponseModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServicesEshop/DbOrders.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
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
    return List<FormResponseModel>.from(
      orders.map((x) => FormResponseModel.fromOrder(x, allFields)),
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
        .from(TbEshop.form_fields.table)
        .select(
        "${TbEshop.form_fields.id},"
            "${TbEshop.form_fields.created_at},"
            "${TbEshop.form_fields.title},"
            "${TbEshop.form_fields.description},"
            "${TbEshop.form_fields.data},"
            "${TbEshop.form_fields.type},"
            "${TbEshop.form_fields.is_required},"
            "${TbEshop.form_fields.form},"
            "${TbEshop.form_fields.is_hidden},"
            "${TbEshop.form_fields.order},"
            "${TbEshop.form_fields.product_type},"
            "${TbEshop.form_fields.is_ticket_field}"
    )
        .eq(TbEshop.form_fields.form, formId)
        .eq(TbEshop.form_fields.is_ticket_field, false)
        .neq(TbEshop.form_fields.type, FormHelper.fieldTypeTicket)
        .order(TbEshop.form_fields.order, ascending: true);

    // Step 3: Map the retrieved data to a list of FormFieldModel instances
    List<FormFieldModel> formFields = [];
    formFields = List<FormFieldModel>.from(
      fieldsData.map((x) => FormFieldModel.fromJson(x)),
    );
    return formFields;
  }


}
