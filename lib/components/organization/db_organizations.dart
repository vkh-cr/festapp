import 'package:fstapp/components/organization/organization_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbOrganizations {
  static final _supabase = Supabase.instance.client;

  static Future<List<PlatformModel>> getAvailablePlatforms({required int organizationId}) async {
    try {
      final response = await _supabase.rpc(
        'get_available_platforms',
        params: {
          'organization_id': organizationId,
        },
      );

      if (response == null || response is! List) {
        return [];
      }

      final List<dynamic> data = response;

      final platforms = data
          .whereType<Map<String, dynamic>>()
          .map((item) => PlatformModel.fromJson(item))
          .toList();

      return platforms;

    } catch (e) {
      print("Failed to fetch available platforms: $e");
      throw Exception("Failed to fetch available platforms: $e");
    }
  }
}