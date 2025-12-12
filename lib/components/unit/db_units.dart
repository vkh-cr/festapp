import 'package:fstapp/components/unit/unit_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../occasion/occasion_model.dart';

class DbUnits {
  static final _supabase = Supabase.instance.client;

  /// Fetches a unit and its public occasions, or all occasions for an organization.
  ///
  /// [organizationId]: The ID of the organization (required).
  /// [unitId]: The ID of the specific unit (optional). If null, fetches all
  ///           occasions for the given [organizationId].
  static Future<UnitModel> getPublicOccasions(
      int organizationId, int? unitId) async {
    try {
      final result = await _supabase.rpc(
        "get_public_occasions",
        params: {
          'p_organization_id': organizationId,
          'p_unit_id': unitId, // This will be 'null' if unitId is null
        },
      );

      return UnitModel.fromJson(result);

    } catch (e) {
      // You can re-throw, log, or handle the error as needed.
      // For example:
      // if (e is PostgrestException) {
      //   print("Error fetching public occasions: ${e.message}");
      // }
      rethrow;
    }
  }
  static Future<void> updateUnit(UnitModel unit) async {
    await _supabase.rpc(
      "update_unit",
      params: {
        'p_unit_id': unit.id,
        'p_title': unit.title,
        'p_data': unit.data,
      },
    );
  }

  static Future<UnitEditDataBundle> getUnitEditData(int unitId) async {
    final response = await _supabase.rpc('get_unit_edit_data', params: {
      'p_unit_id': unitId,
    });

    if (response == null) {
      throw Exception("Failed to load unit edit data.");
    }

    final unit = UnitModel.fromJson(response['unit']);
    final occasions = (response['occasions'] as List)
        .map((x) => OccasionModel.fromJson(x))
        .toList();

    return UnitEditDataBundle(unit: unit, occasions: occasions);
  }
}

class UnitEditDataBundle {
  final UnitModel unit;
  final List<OccasionModel> occasions;

  UnitEditDataBundle({required this.unit, required this.occasions});
}