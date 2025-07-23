import 'package:fstapp/data_models/group_participant_model.dart';
import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbGroups {
  static final _supabase = Supabase.instance.client;

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.title}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo([String? type]) async {
    final response = await _supabase.rpc(
      'get_all_user_groups',
      params: {
        'p_occasion_id': RightsService.currentOccasionId()!,
        'p_type': type,
      },
    );

    final List<dynamic> groupData = response['groups'];
    final Map<String, dynamic>? gameDefsData = response['game_definitions'];

    var toReturn = List<UserGroupInfoModel>.from(
        groupData.map((x) => UserGroupInfoModel.fromJson(x)));

    if (type == InformationModel.gameType && gameDefsData != null) {
      Map<int, String> dict = gameDefsData.map((key, value) =>
          MapEntry(int.parse(key), value as String));

      for(var u in toReturn){
        u.checkpointTitlesDict = dict;
      }
    }

    toReturn.sort((a, b) {
      return Utilities.naturalCompare(a.title, b.title);
    });

    return toReturn;
  }

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    final response = await _supabase.rpc(
      'get_user_group_info_with_users',
      params: {
        'p_group_id': id,
      },
    );

    return UserGroupInfoModel.fromJson(response);
  }

  static Future<void> updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(RightsService.isEditor() || (model.isAdmin ?? false))) {
      throw Exception("Must be leader or admin to change the group.");
    }

    Map<String, dynamic> upsertObj = {
      Tb.user_group_info.title: model.title,
    };

    if(model.type != null) {
      upsertObj.addAll({Tb.user_group_info.type: model.type});
    }
    if(model.description != null) {
      upsertObj.addAll({Tb.user_group_info.description: model.description});
    }
    if(model.place != null) {
      model.place = await DbPlaces.updatePlace(model.place!);
      upsertObj.addAll({Tb.user_group_info.place: model.place!.id.toString()});
    }
    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.user_group_info.id: model.id.toString()});
      eventData = await _supabase.from(Tb.user_group_info.table).update(upsertObj).eq(Tb.user_group_info.id, model.id!).select().single();
    } else {
      upsertObj.addAll({Tb.user_group_info.occasion: RightsService.currentOccasionId()!});
      eventData = await _supabase.from(Tb.user_group_info.table).insert(upsertObj).select().single();
    }

    var updated = UserGroupInfoModel.fromJson(eventData);
    await updateUserGroupParticipants(updated, model.participants!);
  }

  static Future<void> updateUserGroupParticipants(UserGroupInfoModel group, Set<GroupParticipantModel> participants) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, group.id!);

    for(var p in participants) {
      await _supabase
          .from(Tb.user_groups.table)
          .insert({
        Tb.user_groups.group:group.id,
        Tb.user_groups.user:p.userInfo!.id,
        Tb.user_groups.is_admin: p.isAdmin ?? false
      });
    }
  }

  static Future<void> deleteUserGroupInfo(UserGroupInfoModel model) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, model.id!);
    await _supabase
        .from(Tb.user_group_info.table)
        .delete()
        .eq(Tb.user_group_info.id, model.id!);

    if(model.place!=null) {
      await _supabase
          .from(Tb.places.table)
          .delete()
          .eq(Tb.places.id, model.place!.id!);
    }
  }

  static Future<List<int>> getCorrectlyGuessedCheckpoints() async {

    var response = await await _supabase
        .rpc('game_get_correctly_guessed_checkpoints', params: {'oc': RightsService.currentOccasionId()});
    if (response == null || response["code"] != 200) {
      return [];
    }
    List<int> checkPoints = List<int>.from(response["data"].map((entry) => entry['check_point']));

    return checkPoints;
  }

  static Future<Set<UserGroupInfoModel>> getUserGroups() async {
    final response = await _supabase.rpc('get_user_groups', params: {'p_occasion_id': RightsService.currentOccasionId()!});
    return Set.from(response.values
        .map((groupJson) => UserGroupInfoModel.fromJson(groupJson as Map<String, dynamic>)));
  }
}
