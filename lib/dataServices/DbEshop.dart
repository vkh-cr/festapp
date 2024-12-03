import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModelsEshop/BlueprintModel.dart';
import 'package:fstapp/dataModelsEshop/ProductModel.dart';
import 'package:fstapp/dataModelsEshop/ProductTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabaseEshop = Supabase.instance.client.schema("eshop");
  static final _supabase = Supabase.instance.client;

  static Future<List<ProductTypeModel>> getProducts(BuildContext context, int currentOccasion) async {
    var data = await _supabaseEshop
        .from(TbEshop.product_types.table)
        .select(
        "${TbEshop.product_types.id},"
        "${TbEshop.product_types.type},"
        "${TbEshop.product_types.title},"
        "${TbEshop.products.table}(${TbEshop.products.id},${TbEshop.products.title},${TbEshop.products.price})"
        )
        .eq(TbEshop.product_types.occasion, currentOccasion)
        .eq("${TbEshop.products.table}.${TbEshop.products.is_hidden}", false);

    var infoList = List<ProductTypeModel>.from(
        data.map((x) {
          var toReturn = ProductTypeModel.fromJson(x);
          toReturn.products = toReturn.products?.sortedBy((i) => i.title ?? "");
          toReturn.products = toReturn.products?.sortedBy<num>((i) => i.price ?? 0);
          for (ProductModel v in toReturn.products??[]){
            v.title = v.price != null && v.price! > 0 ? "${v.title} (${Utilities.formatPrice(context, v.price!)})" : v.title;
          }
          return toReturn;
        }));

    return infoList;
  }

  static Future<FunctionResponse> sendTicketOrder(Map<String, dynamic> data) async {
    return await _supabase.functions.invoke("send-ticket-order", body: {"orderDetails": data});
  }

  static Future<FormModel?> getForm(String formKey) async {
    final response = await _supabase
        .rpc('get_form', params: {'form_key': formKey});

    if(response["code"] == 200){
      var form = FormModel.fromJson(response["data"]);
      return form;
    }
    return null;
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

    return BlueprintModel.fromJson(response["data"]);
  }

  static Future<BlueprintModel?> getBlueprintForEdit(int blueprintId) async {

    final response = await _supabaseEshop
        .from(TbEshop.blueprints.table)
        .select()
        .eq(TbEshop.blueprints.id, blueprintId)
        .single();
    var spots = await _supabaseEshop.from(TbEshop.spots.table).select().eq(TbEshop.spots.occasion, RightsService.currentOccasion!);
    response[BlueprintModel.metaSpots] = spots;

    return BlueprintModel.fromJson(response);
  }

  static Future<void> updateBlueprint(BlueprintModel blueprint) async {
    var json = blueprint.toJson();
    if(blueprint.id==null) {
      await _supabaseEshop.from(TbEshop.blueprints.table).insert(json);
    } else {
      await _supabaseEshop.from(TbEshop.blueprints.table).update(json).eq(TbEshop.blueprints.id, blueprint.id!);
    }
  }
}
