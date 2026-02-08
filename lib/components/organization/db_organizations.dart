import 'package:fstapp/components/organization/organization_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbOrganizations {
  static final _supabase = Supabase.instance.client;

  static Future<List<PlatformModel>> getAvailablePlatforms(
      {required int organizationId}) async {
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

  static Future<OrganizationModel?> getOrganization(int organizationId) async {
    try {
      final response = await _supabase
          .from('organizations')
          .select()
          .eq('id', organizationId)
          .single();
      return OrganizationModel.fromJson(response);
    } catch (e) {
      print("Failed to fetch organization: $e");
      return null;
    }
  }

  static Future<int?> getMyAdminOrganizationId() async {
    try {
      return await _supabase.rpc('get_my_admin_organization_id');
    } catch (e) {
      print("Failed to fetch my admin organization id: $e");
      return null;
    }
  }

  static Future<OrganizationModel?> getOrganizationAdmin(int id) async {
    try {
      final response = await _supabase.rpc('get_organization_admin',
          params: {'organization_id': id}).maybeSingle();

      if (response == null) return null;

      // Merge 'title' into 'data' as getOrganizationAdmin returns a Model not raw JSON.

      Map<String, dynamic> data =
          Map<String, dynamic>.from(response['data'] ?? {});
      data['title'] = response['title'];
      data['PHONE_PREFIXES'] = response['phone_prefixes']; // Add phone_prefixes column to data for parsing

      return OrganizationModel.fromJson(data);
    } catch (e) {
      print("Failed to fetch admin organization: $e");
      return null;
    }
  }

  static Future<void> updateOrganization(
      int id, OrganizationModel organization) async {
    try {
      // Fetch existing data first to merge (using admin RPC)
      final existingModel = await getOrganizationAdmin(id);
      if (existingModel == null) throw Exception("Organization not found");



      final jsonData = organization.toJson();
      jsonData.remove('PHONE_PREFIXES'); // Store only in column, not in data jsonb

      await _supabase.rpc('update_organization_admin', params: {
        'organization_id': id,
        'title':
            organization.title, // Pass title if changed, or null? Model has it.
        'phone_prefixes': organization.phonePrefixes,
        'data': jsonData, // This only contains changed/non-empty fields.
      }).maybeSingle(); // Now that it returns rows, strictly consume it (expect 1 or 0)
    } catch (e) {
      print("Failed to update organization: $e");
      throw Exception("Failed to update organization: $e");
    }
  }
}
