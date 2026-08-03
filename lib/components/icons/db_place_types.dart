import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/map/map_commands.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// CRUD for occasion place types (RLS: editors of the occasion). Insert/update
/// go through PostgREST directly; the single-default-per-occasion partial
/// unique index is enforced server-side.
class DbPlaceTypes {
  static final _supabase = Supabase.instance.client;
  static final MapCommands _commands = SupabaseMapCommands(_supabase);

  static Future<List<PlaceTypeModel>> getPlaceTypes([int? occasionId]) async {
    final occ = occasionId ?? RightsService.currentOccasionId();
    if (ClientSyncRuntime.isV1Selected) {
      final response = await _supabase.rpc('get_map_editor_bundle_v1', params: {
        'p_occasion': occ!,
      });
      final bundle = (response as Map).cast<String, dynamic>();
      return ((bundle['placeTypes'] as List?) ?? const [])
          .map((x) =>
              PlaceTypeModel.fromJson((x as Map).cast<String, dynamic>()))
          .toList();
    }
    final data = await _supabase
        .from(Tb.place_types.table)
        .select()
        .eq(Tb.place_types.occasion, occ!)
        .order(Tb.place_types.order, ascending: true);
    return data.map<PlaceTypeModel>((x) => PlaceTypeModel.fromJson(x)).toList();
  }

  static Future<PlaceTypeModel> upsert(PlaceTypeModel type) async {
    type.occasion ??= RightsService.currentOccasionId();
    if (ClientSyncRuntime.isV1Selected) {
      final result = await _commands.savePlaceType(type.occasion!, type);
      if (result.status == MapCommandStatus.conflict) {
        throw StateError('Place type was changed by another editor');
      }
      if (result.status == MapCommandStatus.rejected || result.entity == null) {
        throw StateError('Place type save was rejected');
      }
      return result.entity!;
    }
    final row = await _supabase
        .from(Tb.place_types.table)
        .upsert(type.toJson())
        .select()
        .single();
    return PlaceTypeModel.fromJson(row);
  }

  static Future<void> delete(PlaceTypeModel type) async {
    if (ClientSyncRuntime.isV1Selected) {
      final result = await _commands.deletePlaceType(
          type.occasion ?? RightsService.currentOccasionId()!, type);
      if (result.status == MapCommandStatus.conflict) {
        throw StateError('Place type was changed by another editor');
      }
      if (result.status == MapCommandStatus.rejected) {
        throw StateError('Place type delete was rejected');
      }
      return;
    }
    await _supabase
        .from(Tb.place_types.table)
        .delete()
        .eq(Tb.place_types.id, type.id!);
  }
}
