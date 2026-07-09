import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Thrown when delete_icon reports the icon is still referenced (HTTP 409).
class IconInUseException implements Exception {
  final int places;
  final int pathGroups;
  final int placeTypes;
  IconInUseException(this.places, this.pathGroups, this.placeTypes);
}

class DbIcons {
  static final _supabase = Supabase.instance.client;
  static const int maxBytes = 51200; // 50 KB

  /// Icons visible in this context: the current unit's icons plus legacy
  /// org-wide icons (unit IS NULL). Mirrors the deployed PostgREST filter.
  static Future<List<IconModel>> getManagedIcons() async {
    final unitId = RightsService.currentUnit()?.id;
    final org = AppConfig.organization;
    final query = _supabase.from(Tb.icons.table).select();
    final data = unitId != null
        ? await query.or(
            '${Tb.icons.unit}.eq.$unitId,'
            'and(${Tb.icons.unit}.is.null,${Tb.icons.organization}.eq.$org)')
        : await query.eq(Tb.icons.organization, org);
    return data.map<IconModel>((x) => IconModel.fromJson(x)).toList();
  }

  /// Inserts a new SVG icon owned by the current unit. RLS enforces
  /// created_by = auth.uid() and unit membership.
  static Future<IconModel> insertIcon({
    required String link,
    required String svgData,
  }) async {
    final unitId = RightsService.currentUnit()?.id;
    if (unitId == null) {
      throw Exception('no_unit');
    }
    final row = await _supabase
        .from(Tb.icons.table)
        .insert({
          Tb.icons.link: link,
          Tb.icons.data: svgData,
          Tb.icons.unit: unitId,
          Tb.icons.organization: AppConfig.organization,
          Tb.icons.created_by: AuthService.currentUserId(),
        })
        .select()
        .single();
    return IconModel.fromJson(row);
  }

  /// Deletes an icon via the delete_icon RPC (handles permission + ref checks).
  static Future<void> deleteIcon(int iconId) async {
    final res =
        await _supabase.rpc('delete_icon', params: {'p_icon_id': iconId});
    final code = (res is Map) ? res['code'] : null;
    if (code == 200) return;
    if (code == 409) {
      final refs = (res['refs'] as Map?) ?? const {};
      throw IconInUseException(
        (refs['places'] as num?)?.toInt() ?? 0,
        (refs['path_groups'] as num?)?.toInt() ?? 0,
        (refs['place_types'] as num?)?.toInt() ?? 0,
      );
    }
    throw Exception('delete_icon failed: $code');
  }
}
