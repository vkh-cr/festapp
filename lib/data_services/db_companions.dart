import 'package:flutter/cupertino.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services/db_events.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_models/CompanionModel.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbCompanions {
  static final _supabase = Supabase.instance.client;

  static Future<List<CompanionModel>> getAllCompanions() async {
    var data = await _supabase
        .rpc("get_user_companions_data");
    var companions = List<CompanionModel>.from(
        data["data"].map((x) => CompanionModel.fromJson(x)));
    return companions;
  }

  static Future<void> signIn(
      BuildContext context, int eventId, CompanionModel companion) async {
    await DbEvents.signInToEvent(context, eventId,
        UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> signOut(BuildContext context, int eventId, CompanionModel companion) async {
    await DbEvents.signOutFromEvent(
        context, eventId, UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> create(String name) async {
    await _supabase.rpc("create_companion_in_organization", params: {
      'org': AppConfig.organization,
      'oc': RightsService.currentOccasionId,
      'usr': RightsService.currentOccasionUser!.user!,
      'c_name': name,
    });
  }

  static Future<void> delete(CompanionModel companion) async {
    await DbUsers.deleteUser(companion.id, RightsService.currentOccasionId!);
  }
}
