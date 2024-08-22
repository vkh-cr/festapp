import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbGroups {
  static final _supabase = Supabase.instance.client;

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.title}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo() async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
            "${Tb.user_group_info.title},"
            "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}),"
            "${Tb.places.table}(*),"
            "${Tb.user_group_info.description},"
            "${Tb.user_groups.table}(${Tb.user_info_public.table}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}))");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
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
    if(!(RightsService.isEditor() || model.leader!.id == AuthService.currentUserId()))
    {
      throw Exception("Must be leader or admin to change the group.");
    }

    var upsertObj = {
      Tb.user_group_info.title: model.title,
      Tb.user_group_info.leader: model.leader?.id,
    };

    if(model.description != null)
    {
      upsertObj.addAll({Tb.user_group_info.description: model.description});
    }
    if(model.place != null)
    {
      model.place = await DbPlaces.updatePlace(model.place!);
      upsertObj.addAll({Tb.user_group_info.place: model.place!.id.toString()});
    }
    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.user_group_info.id: model.id.toString()});
      eventData = await _supabase.from(Tb.user_group_info.table).upsert(upsertObj).eq(Tb.user_group_info.id, model.id!).select().single();
    }
    else
    {
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

    for(var p in participants)
    {
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
    if(model.place!=null)
    {
      await _supabase
          .from(Tb.places.table)
          .delete()
          .eq(Tb.places.id, model.place!.id!);
    }
  }

}
