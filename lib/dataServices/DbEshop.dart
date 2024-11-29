import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/dataModels/FormModel.dart';
import 'package:fstapp/dataModelsEshop/ItemModel.dart';
import 'package:fstapp/dataModelsEshop/ItemTypeModel.dart';
import 'package:fstapp/dataModelsEshop/TbEshop.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEshop {
  static final _supabaseEshop = Supabase.instance.client.schema("eshop");
  static final _supabase = Supabase.instance.client;

  static Future<List<ItemTypeModel>> getItems(BuildContext context, int currentOccasion) async {
    var data = await _supabaseEshop
        .from(TbEshop.item_types.table)
        .select(
        "${TbEshop.item_types.id},"
        "${TbEshop.item_types.type},"
        "${TbEshop.item_types.title},"
        "${TbEshop.items.table}(${TbEshop.items.id},${TbEshop.items.title},${TbEshop.items.price})"
        )
        .eq(TbEshop.item_types.occasion, currentOccasion);

    var infoList = List<ItemTypeModel>.from(
        data.map((x) {
          var toReturn = ItemTypeModel.fromJson(x);
          toReturn.items = toReturn.items?.sortedBy((i) => i.title ?? "");
          toReturn.items = toReturn.items?.sortedBy<num>((i) => i.price ?? 0);
          for (ItemModel v in toReturn.items??[]){
            v.title = v.price != null && v.price! > 0 ? "${v.title} (${Utilities.formatPrice(context, v.price!)})" : v.title;
          }
          return toReturn;
        }));

    return infoList;
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

}
