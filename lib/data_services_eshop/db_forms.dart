import 'package:collection/collection.dart';
import 'package:fstapp/data_models/form_field_model.dart';
import 'package:fstapp/data_models/form_response_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/components/blueprint/blueprint_model.dart';
import 'package:fstapp/components/eshop/models/bank_account_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/eshop/models/product_type_model.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:fstapp/data_models/form_model.dart';

// Bundle class to hold all related data for editing a form
class FormEditBundle {
  final FormModel form;
  final List<FormFieldModel> formFields;
  final List<ProductTypeModel> productTypes;
  final List<ProductModel> products;
  final List<BankAccountModel> availableBankAccounts;

  FormEditBundle({
    required this.form,
    required this.formFields,
    required this.productTypes,
    required this.products,
    required this.availableBankAccounts,
  });
}


class DbForms {
  static final _supabase = Supabase.instance.client;

  static Future<List<FormModel>> getAllFormsForOccasionOrUnit() async {
    final response = await _supabase.rpc('get_all_viewable_forms_for_copying');

    return List<FormModel>.from(
        response.map((f) => FormModel.fromJson(f)));
  }

  static Future<void> duplicateFormToOccasion({
    required int sourceFormId,
    required String targetOccasionLink,
  }) async {
    await _supabase.rpc(
      'duplicate_form_to_occasion',
      params: {
        'source_form_id': sourceFormId,
        'target_occasion_link': targetOccasionLink,
      },
    );
  }

  static Future<List<FormModel>> getAllFormsByOccasionLink(String occasionLink) async {
    final response = await _supabase.rpc(
        'get_forms_by_link',
        params: {'occasion_link': occasionLink}
    );

    return List<FormModel>.from(
        response.map((f) => FormModel.fromJson(f)));
  }

  /// Fetches all forms for a given occasion, including their nested form fields.
  static Future<List<FormModel>> getAllFormsWithFieldsViaOccasionLink(String occasionLink) async {
    final response = await _supabase.rpc(
        'get_all_forms_with_fields', // Calling the new function
        params: {'occasion_link': occasionLink}
    );

    if (response["code"] == 200) {
      // The FormModel.fromJson factory is expected to handle the 'fields' array
      return List<FormModel>.from(
          response["data"].map((f) => FormModel.fromJson(f)));
    }
    return [];
  }

  static Future<void> createNewForm({
    required String title,
    required String link,
    required String occasionLink,
  }) async {
    final response = await _supabase.rpc(
      'create_form_ws',
      params: {
        'input_data': {
          'title': title,
          'link': link,
          'occasion_link': occasionLink
        },
      },
    );

    if (response["code"] != 201) { // 201 Created
      throw Exception(response["message"]);
    }
  }

  static Future<void> updateForm(FormModel form) async {
    final response = await _supabase.rpc(
      'update_form',
      params: {
        'input_data': form.toEditedJson(),
      },
    );

    if (response["code"] != 200) {
      throw Exception(response["message"]);
    }
  }

  static Future<void> deleteForm(int formId) async {
    final response = await _supabase.rpc(
      'delete_form_ws',
      params: {'p_form_id': formId},
    );

    if (response["code"] != 200) {
      throw Exception(response["message"]);
    }
  }

  static Future<FormModel?> getFormFromLink(String link) async {
    final response = await _supabase
        .rpc('get_form_by_link', params: {'form_link': link});

    if(response["code"] == 200 || response["code"] == 400){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
  }

  static Future<FormEditBundle?> getFormForEdit(String link) async {
    final response = await _supabase
        .rpc('get_form_for_edit', params: {'form_link': link});

    if (response["code"] != 200) {
      // You can add more robust error handling here, e.g., logging or showing a toast.
      print("Failed to get form for edit: ${response['message']}");
      return null;
    }

    final data = response["data"];

    // 1. Parse all individual JSON lists into Dart models.
    final form = FormModel.fromJson(data['form']);
    final formFields = (data['form_fields'] as List)
        .map((e) => FormFieldModel.fromJson(e))
        .toList();
    final productTypes = (data['product_types'] as List)
        .map((e) => ProductTypeModel.fromJson(e))
        .toList();
    final products = (data['products'] as List)
        .map((e) => ProductModel.fromJson(e))
        .toList();
    final availableBankAccounts = (data['available_bank_accounts'] as List)
        .map((e) => BankAccountModel.fromJson(e))
        .toList();

    // 2. Interconnect the parsed models.
    // Create maps for efficient lookups.
    final productTypeMap = { for (var pt in productTypes) pt.id: pt };
    final productMap = groupBy(products, (ProductModel p) => p.productTypeId);

    // Link products to their parent product types.
    for (var pt in productTypes) {
      pt.products = productMap[pt.id] ?? [];
    }

    // Link product type data to the relevant form fields.
    for (var field in formFields) {
      if (field.productTypeId != null) {
        field.productType = productTypeMap[field.productTypeId];
      }
    }

    // Assign the fully populated fields list to the form.
    form.relatedFields = formFields;

    // Find and assign the selected bank account model to the form.
    if (availableBankAccounts.isNotEmpty) {
      if(form.bankAccountId != null) {
        form.bankAccount = availableBankAccounts.firstWhereOrNull(
                (ba) => ba.id == form.bankAccountId
        );
      } else {
        form.availableBankAccounts = availableBankAccounts;
      }
    }

    // 3. Create and return the final bundle.
    return FormEditBundle(
      form: form,
      formFields: formFields,
      productTypes: productTypes,
      products: products,
      availableBankAccounts: availableBankAccounts,
    );
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

  static Future<BlueprintModel?> getBlueprintForEdit(String occasionLink) async {

    final response = await _supabase.rpc(
      'get_blueprint_for_edit',
      params: {
        'occasion_link': occasionLink,
      },
    );

    if (response["code"] != 200) {
      return null;
    }

    var b = BlueprintModel.fromJson(response["data"]);
    b.assignAllSpotsWithBlueprint();
    return b;
  }

  static Future<void> updateBlueprint(BlueprintModel blueprint) async {
    final response = await _supabase.rpc(
      'update_blueprint',
      params: {
        'input_data': blueprint,
      },
    );

    if (response["code"] != 200) {
      throw Exception(response["message"]);
    }
  }

  static Future<List<FormResponseModel>> getAllResponses(String formLink) async {
    var allFields = await getAllFormFields(formLink);
    var ordersBundle = await DbOrders.getAllOrdersBundle(formLink: formLink, includeOrderDetails: true);
    var onlyFormOrders = ordersBundle.orders.where((o) => o.form?.link == formLink);
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

    List<FormFieldModel> formFields = [];
    formFields = List<FormFieldModel>.from(
      fieldsData.map((x) => FormFieldModel.fromJson(x)),
    );
    return formFields;
  }
}