import 'package:fstapp/data_models/information_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_information.dart';
import 'package:fstapp/data_services/db_places.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_models/user_info_model.dart';
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
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
            "${Tb.user_group_info.title},"
            "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}),"
            "${Tb.places.table}(*),"
            "${Tb.user_group_info.description},"
            "${Tb.user_group_info.type},"
            "${Tb.user_group_info.data},"
            "${Tb.user_groups.table}(${Tb.user_info_public.table}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}))")
    .eq(Tb.user_group_info.occasion, RightsService.currentOccasionId!)
    .filter(Tb.user_group_info.type, type == null ? "is" : "eq", type);

    var toReturn = List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));

    if(type == InformationModel.gameType) {
      var gameDef = await DbInformation.getAllInformationForDataGrid(InformationModel.gameType);
      Map<int, String> dict = Map.fromIterable(
        gameDef,
        key: (item) => item.id!,       // Set the key as the "id"
        value: (item) => item.title!,   // Set the value as the "title"
      );
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
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
            "${Tb.user_group_info.title},"
            "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}),"
            "${Tb.places.table}(*),"
            "${Tb.user_group_info.description},"
            "${Tb.user_groups.table}(${Tb.user_info_public.table}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}))")
        .eq(Tb.user_group_info.id, id)
        .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return UserGroupInfoModel.fromJson(data);
  }

  static updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(RightsService.isEditor() || model.leader!.id == AuthService.currentUserId())) {
      throw Exception("Must be leader or admin to change the group.");
    }

    Map<String, dynamic> upsertObj = {
      Tb.user_group_info.title: model.title,
      Tb.user_group_info.leader: model.leader?.id,
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
      upsertObj.addAll({Tb.user_group_info.occasion: RightsService.currentOccasionId!});
      eventData = await _supabase.from(Tb.user_group_info.table).insert(upsertObj).select().single();
    }

    var updated = UserGroupInfoModel.fromJson(eventData);
    await updateUserGroupParticipants(updated, model.participants!);
  }

  static updateUserGroupParticipants(UserGroupInfoModel group, Set<UserInfoModel> participants) async {
    await _supabase
        .from(Tb.user_groups.table)
        .delete()
        .eq(Tb.user_groups.group, group.id!);

    for(var p in participants) {
      await _supabase
          .from(Tb.user_groups.table)
          .insert({
        Tb.user_groups.group:group.id,
        Tb.user_groups.user:p.id
      });
    }
  }

  static deleteUserGroupInfo(UserGroupInfoModel model) async {
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
        .rpc('game_get_correctly_guessed_checkpoints', params: {'oc': RightsService.currentOccasionId});
    if (response == null || response["code"] != 200) {
      return [];
    }
    List<int> checkPoints = List<int>.from(response["data"].map((entry) => entry['check_point']));

    return checkPoints;
  }

  static Future<List<UserGroupInfoModel>> getUserGroups() async {
    List<UserGroupInfoModel> userGroups = [];
    final response = await _supabase.rpc('groups_get_user_groups');
    if (response != null) {
      for (var groupJson in response['data']) {
        userGroups.add(UserGroupInfoModel.fromJson(groupJson));
      }
    }
    return userGroups;
  }
}
