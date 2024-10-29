import 'package:collection/collection.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/OrganizationModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
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
    var result = await _supabase.rpc("get_all_user_basics_from_occasion",
        params: {"oc": RightsService.currentOccasion});
    if(result["code"] == 200) {
      var t = List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<void> updateUserInfo(OccasionUserModel data) async {
    await _supabase.rpc("update_user",
        params:
        {
          "usr": data.user,
          "oc": data.occasion,
          "data": data.data
        });
  }

  static Future<String?> unsafeCreateUser(int occasion, String email, String pw, dynamic data) async {
    var newId = await _supabase.rpc("create_user_in_organization_with_data",
        params: {"org": AppConfig.organization, "email": email, "password": pw, "data": data});
    if (newId==null)
    {
      throw Exception("Creating of user has failed.");
    }
    await _supabase.rpc("add_user_to_occasion",
        params: {"oc": occasion, "usr": newId});
    return newId;
  }

  static Future<OrganizationModel?> getCurrentOrganization() async {
    var result = await _supabase.rpc("get_current_organization_data");

    if (result != null && result["code"] == 200) {
      return OrganizationModel.fromJson(result["data"]);
    } else if (result != null && result["code"] == 403) {
      print("User is not authorized or found (admin rights required)");
    }

    // Return null if no organization data is found or unauthorized
    return null;
  }

  static Future<List<OccasionModel>> getAllOccasions(int org) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.organization, org);
    var toReturn = List<OccasionModel>.from(data.map((x) => OccasionModel.fromJson(x)));
    return toReturn;
  }

  static Future<OccasionModel> updateOccasion(OccasionModel occasionModel) async {
    var json = occasionModel.toJson();
    Map<String, dynamic> data;

    if (occasionModel.id != null) {
      data = await _supabase
          .from(Tb.occasions.table)
          .update(json)
          .eq(Tb.occasions.id, occasionModel.id!)
          .select()
          .single();
    } else {
      json.remove(Tb.occasions.id);
      data = await _supabase
          .from(Tb.occasions.table)
          .insert(json)
          .select()
          .single();
    }

    return OccasionModel.fromJson(data);
  }

  static updateOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);
    if (oum.user == null) {
      oum.user = await unsafeCreateUser(oum.occasion!, oum.data?[Tb.occasion_users.data_email], "", oum.data);
    } else {
      await _supabase.rpc("update_user",
          params: {"oc": oum.occasion!, "usr": oum.user!, "data": oum.data!});
      await addUserToOccasion(oum.user!, oum.occasion!);
    }

    if(oum.user!=null){
      await _supabase.from(Tb.occasion_users.table).upsert(
          oum.toUpdateJson()
      );
    }
  }

  static Future<void> addUserToOccasion(String id, int occasion) async {
    await _supabase.rpc("add_user_to_occasion",
        params:
        {
          "usr": id,
          "oc": occasion,
        });
  }

  static updateExistingImportedOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);
    await _supabase.from(Tb.occasion_users.table).upsert(
        oum.toImportedUpdateJson()
    );
    await DbUsers.updateUserInfo(oum);

  }

  static Future<void> deleteUser(String user, int occasion) async {
    await _supabase.rpc("delete_user",
        params:
        {
          "usr": user,
          "oc": occasion
        });
  }

  static Future<String?> getUserByEmail(String email) async {
    var data = await _supabase.rpc("get_user_id_by_email",
        params: {"email": email.toLowerCase()}).maybeSingle();
    if(data == null)
    {
      return null;
    }
    return data["id"];
  }

  static Future<String?> getLastTimeSignIn(String id) async {
    var data = await _supabase.rpc("get_last_sign_in_at",
        params: {"user_id": id});
    return data;
  }

  static Future<List<OccasionUserModel>> getOccasionUsers() async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasion!);
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<OccasionModel> getOccasion(int id) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.id, id).single();
    return OccasionModel.fromJson(data);
  }

  static Future<UserInfoModel> getCurrentUserInfo() async {
    if(AuthService.currentUser == null){
      return await AuthService.loadCurrentUserData();
    }
    return AuthService.currentUser!;
  }
}