import 'package:flutter/cupertino.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/RightsHelper.dart';
import 'package:fstapp/models/CompanionModel.dart';
import 'package:fstapp/models/UserInfoModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class CompanionHelper {
  static final _supabase = Supabase.instance.client;

  static Future<List<CompanionModel>> getAllCompanions(int eventId) async {
    var data = await _supabase
        .rpc("get_user_companions", params: {"event_id": eventId});
    var companions = List<CompanionModel>.from(
        data["data"].map((x) => CompanionModel.fromJson(x)));
    return companions;
  }

  static Future<void> signIn(
      BuildContext context, int eventId, CompanionModel companion) async {
    await DataService.signInToEvent(context, eventId,
        UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> signOut(int eventId, CompanionModel companion) async {
    await DataService.signOutFromEvent(
        eventId, UserInfoModel(name: companion.name, id: companion.id));
  }

  static Future<void> create(String name) async {
    await _supabase.rpc("create_companion", params: {
      'oc': RightsHelper.currentOccasion,
      'usr': RightsHelper.currentUserOccasion!.user!,
      'c_name': name,
    });
  }

  static Future<void> delete(CompanionModel companion) async {
    await DataService.deleteUser(companion.id, RightsHelper.currentOccasion!);
  }
}
