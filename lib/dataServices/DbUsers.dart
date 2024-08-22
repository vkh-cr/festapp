import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbUsers {
  static final _supabase = Supabase.instance.client;

  static Future<UserInfoModel> getUser(String id) async {
    var data = await _supabase.from(Tb.user_info.table).select().eq(Tb.user_info.id, id).single();
    return UserInfoModel.fromJson(data);
  }

  static Future<List<UserInfoModel>> getUsersInfo(List<String> userIds) async {
    var result = await _supabase.rpc("get_user_info_for_users",
        params: {"oc": RightsService.currentOccasion, "user_ids": userIds});
    if(result["code"] == 200) {
      return List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
    }
    return [];
  }

  static Future<UserInfoModel?> getUserInfo(String userId) async {
    var list = await getUsersInfo([userId]);
    if(list.length == 1){
      return list[0];
    }
    return null;
  }

  static Future<List<UserInfoModel>> getAllUsersBasics() async {
    var data = await _supabase.from(Tb.user_info_public.table)
        .select([Tb.user_info_public.id,
      Tb.user_info_public.name,
      Tb.user_info_public.surname,
      Tb.user_info.sex].join(", "));
    return List<UserInfoModel>.from(
        data.map((x) => UserInfoModel.fromJson(x)));
  }
}