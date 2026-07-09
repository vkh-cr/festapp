import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// CRUD for occasion place types (RLS: editors of the occasion). Insert/update
/// go through PostgREST directly; the single-default-per-occasion partial
/// unique index is enforced server-side.
class DbPlaceTypes {
  static final _supabase = Supabase.instance.client;

  static Future<List<PlaceTypeModel>> getPlaceTypes([int? occasionId]) async {
    final occ = occasionId ?? RightsService.currentOccasionId();
    final data = await _supabase
        .from(Tb.place_types.table)
        .select()
        .eq(Tb.place_types.occasion, occ!)
        .order(Tb.place_types.order, ascending: true);
    return data.map<PlaceTypeModel>((x) => PlaceTypeModel.fromJson(x)).toList();
  }

  static Future<PlaceTypeModel> upsert(PlaceTypeModel type) async {
    type.occasion ??= RightsService.currentOccasionId();
    final row = await _supabase
        .from(Tb.place_types.table)
        .upsert(type.toJson())
        .select()
        .single();
    return PlaceTypeModel.fromJson(row);
  }

  static Future<void> delete(int id) async {
    await _supabase.from(Tb.place_types.table).delete().eq(Tb.place_types.id, id);
  }
}
