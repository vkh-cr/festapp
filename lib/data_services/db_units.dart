import 'package:fstapp/data_models/unit_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbUnits {
  static final _supabase = Supabase.instance.client;

  static Future<UnitModel> getUnit(int unitId) async {
    var result = await _supabase.rpc("get_unit", params: {
      'unit_id': unitId,
    });
    return UnitModel.fromJson(result["data"]);
  }

}
