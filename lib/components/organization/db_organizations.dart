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
      final response = await _supabase
        .rpc('get_organization_admin', params: {'organization_id': id})
        .maybeSingle();
      
      if (response == null) return null;
      
      // The RPC returns specific columns. If it returns SETOF organizations, it returns row {id, title, data, ...}
      // We need to merge 'title' into 'data' or pass the whole thing if OrganizationModel handles it.
      // OrganizationModel.fromJson: title=json['title'], appName=json['APP_NAME'].
      // If json is the row: json['title'] is found. json['APP_NAME'] is NOT found (it's in json['data']['APP_NAME']).
      // We need to merge.
      
      Map<String, dynamic> data = Map<String, dynamic>.from(response['data'] ?? {});
      data['title'] = response['title'];
      // Add other columns if needed?
      
      return OrganizationModel.fromJson(data);
     } catch (e) {
       print("Failed to fetch admin organization: $e");
       return null;
     }
  }

  static Future<void> updateOrganization(int id, OrganizationModel organization) async {
    try {
      // Fetch existing data first to merge (using admin RPC)
      final existingModel = await getOrganizationAdmin(id);
      if (existingModel == null) throw Exception("Organization not found");

      // We need to merge the new model fields into the existing data map manually 
      // because getOrganizationAdmin returns a Model, not raw JSON.
      // But actually, we can just construct the new JSON from the model 
      // and let the RPC handle the update.
      // Wait, the RPC takes `data` as a whole JSONB object.
      // If we pass ONLY the fields present in `organization`, we might overwrite other fields if we don't merge.
      // `OrganizationModel.toJson` only includes non-null fields.
      // But what about fields NOT in OrganizationModel? (e.g. legacy fields).
      // We should preserve them.
      
      // Let's get the RAW data using a new secure method or by trusting getOrganizationAdmin returns everything?
      // getOrganizationAdmin returns OrganizationModel. It might LOSE data not in the model.
      // Example: 'legacy_field': 'value'. OrganizationModel won't map it.
      // So when we save back `existingModel.toJson()`, 'legacy_field' is gone.
      
      // Solution: The update RPC should probably do a jsonb_merge if possible, OR we update the RPC to accept specific keys?
      // No, JSONB merge is better.
      // `data = organizations.data || new_data` -> this merges top level keys.
      // If I send `{APP_NAME: "New"}` and existing is `{APP_NAME: "Old", OTHER: 1}`, result is `{APP_NAME: "New", OTHER: 1}`.
      // Postgres `||` operator does this for jsonb.
      
      // So I will update the RPC to use `data = organizations.data || update_organization_admin.data`.
      // And from Dart, I only send the fields I want to update.
      
      await _supabase.rpc('update_organization_admin', params: {
        'organization_id': id,
        'title': organization.title, // Pass title if changed, or null? Model has it.
        'data': organization.toJson(), // This only contains changed/non-empty fields.
      }).maybeSingle(); // Now that it returns rows, strictly consume it (expect 1 or 0)
      
    } catch (e) {
      print("Failed to update organization: $e");
      throw Exception("Failed to update organization: $e");
    }
  }
}