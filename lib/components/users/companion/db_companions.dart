import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_projection.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/components/users/companion/companion_model.dart';
import 'package:fstapp/components/users/companion/companion_commands.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbCompanions {
  static final _supabase = Supabase.instance.client;
  static CompanionCommands get _commands =>
      SupabaseCompanionCommands(_supabase);

  static Future<List<CompanionModel>> getAllCompanions() async {
    if (ClientSyncRuntime.isV1Selected) {
      return ClientSyncProjection.companions();
    }
    var data = await _supabase.rpc("get_user_companions_data");
    var companions = List<CompanionModel>.from(
        data["data"].map((x) => CompanionModel.fromJson(x)));
    return companions;
  }

  static Future<void> signIn(
      BuildContext context, int eventId, CompanionModel companion) async {
    await DbEvents.signInToEvent(context, eventId,
        UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> signOut(
      BuildContext context, int eventId, CompanionModel companion) async {
    await DbEvents.signOutFromEvent(context, eventId,
        UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> create(String name) async {
    if (ClientSyncRuntime.isV1Selected) {
      await _commands.create(RightsService.currentOccasionId()!, name);
      return;
    }
    await _supabase.rpc("create_companion_in_organization", params: {
      'org': AppConfig.organization,
      'oc': RightsService.currentOccasionId(),
      'usr': RightsService.currentOccasionUser()!.user!,
      'c_name': name,
    });
  }

  static Future<void> delete(CompanionModel companion) async {
    if (ClientSyncRuntime.isV1Selected) {
      await _commands.delete(
        RightsService.currentOccasionId()!,
        companion.id,
      );
      return;
    }
    await DbUsers.deleteUser(companion.id, RightsService.currentOccasionId()!);
  }
}
