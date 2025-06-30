import 'package:collection/collection.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_models/unit_user_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_occasions.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class OccasionEditorData {
  final List<OccasionUserModel> users;
  final List<FormModel> forms;
  OccasionEditorData({required this.users, required this.forms});
}

class DbUsers {
  static final _supabase = Supabase.instance.client;

  static const String formIdKey = 'form_id';
  static const String orderCreatedAtKey = 'order_created_at';
  static const String lastSignInAtKey = 'last_sign_in_at';


  static Future<UserInfoModel> getUser(String id) async {
    var data = await _supabase.from(Tb.user_info.table).select().eq(Tb.user_info.id, id).single();
    return UserInfoModel.fromJson(data);
  }

  static Future<List<OccasionUserModel>> getOccasionEditorData() async {
    var result = await _supabase.rpc(
        'get_occasion_users_for_edit',
        params: {'p_occasion_id': RightsService.currentOccasionId()!}
    );

    if (result != null && result["code"] == 200) {
      var data = result["data"];
      var users = List<OccasionUserModel>.from(
          data["occasion_users"].map((x) => OccasionUserModel.fromJson(x))
      );
      var forms = List<FormModel>.from(
          data["forms"].map((x) => FormModel.fromJson(x))
      );

      // Create a lookup map for forms using their UUID key.
      final formMap = { for (var form in forms) form.key : form };

      // Link each user to their corresponding form object.
      for (final user in users) {
        if (user.formId != null && formMap.containsKey(user.formId)) {
          user.form = formMap[user.formId];
        }
      }

      // Sort the list of users
      users.sort((a, b) {
        // Determine if a user has special privileges.
        bool isAPrivileged = a.isPrivileged();
        bool isBPrivileged = b.isPrivileged();

        // Primary sort: privileged users come first.
        if (isAPrivileged && !isBPrivileged) return -1;
        if (!isAPrivileged && isBPrivileged) return 1;

        // Secondary sort: by date, if privilege status is the same.
        // Use orderCreatedAt if available, otherwise fall back to createdAt.
        final dateA = a.orderCreatedAt ?? a.createdAt;
        final dateB = b.orderCreatedAt ?? b.createdAt;

        // Handle cases where one or both dates might be null, sorting nulls to the end.
        if (dateA == null && dateB == null) return 0;
        if (dateA == null) return 1;
        if (dateB == null) return -1;

        // Compare the effective dates in ascending order (oldest first).
        return dateA.compareTo(dateB);
      });

      return users;
    }
    if (result != null && result["code"] == 403) {
      print("Authorization error: ${result['message']}");
    }
    return [];
  }

  static Future<List<UserInfoModel>> getUsersInfo(List<String> userIds) async {
    var result = await _supabase.rpc("get_user_info_for_users",
        params: {"oc": RightsService.currentOccasionId(), "user_ids": userIds});
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
        params: {"oc": RightsService.currentOccasionId()});
    if(result["code"] == 200) {
      var t = List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<List<UserInfoModel>> getAllUsersBasicsForUnit() async {
    var result = await _supabase.rpc("get_all_user_basics_from_occasion_unit",
        params: {"oc": RightsService.currentOccasionId()});
    if(result["code"] == 200) {
      var t = List<UserInfoModel>.from(result["data"].map((x) => UserInfoModel.fromJson(x)));
      return t;
    }
    return [];
  }

  static Future<List<UnitUserModel>> getAllUsersFromUnit(int unitId) async {
    var result = await _supabase.rpc("get_all_users_from_unit",
        params: {"unit_id": unitId});
    if(result["code"] == 200) {
      var t = List<UnitUserModel>.from(result["data"].map((x) => UnitUserModel.fromJson(x)));
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
    await addUserToOccasion(newId, occasion);
    return newId;
  }

  static Future<UnitModel?> getCurrentUnit(int unit) async {
    var result = await _supabase.rpc("get_unit_for_edit",
        params: {"unit_id": unit});

    if (result != null && result["code"] == 200) {
      return UnitModel.fromJson(result["data"]);
    }
    return null;
  }

  static Future<UnitModel?> getCurrentOrganization() async {
    var result = await _supabase.rpc("get_current_organization_data");

    if (result != null && result["code"] == 200) {
      return UnitModel.fromJson(result["data"]);
    } else if (result != null && result["code"] == 403) {
      print("User is not authorized or found (admin rights required)");
    }

    // Return null if no organization data is found or unauthorized
    return null;
  }

  static Future<void> updateUnitUser(UnitUserModel uum) async {
    await _supabase.rpc("update_unit_user",
        params:
        {
          "input_data": uum,
        });
  }

  static Future<void> updateOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);

    final response = await _supabase.rpc("update_user",
        params: {"input_data":{"occasion": oum.occasion!, "user": oum.user, "data": oum.data}});

    var code = response['code'];
    if(code != 200 && code != 201){
      throw Exception(response['message']);
    }

    oum.user ??= response['user'];
    await addUserToOccasion(oum.user!, oum.occasion!);

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

  static Future<void> addUserToUnit(String id, int unit) async {
    await _supabase.rpc("add_user_to_unit",
        params:
        {
          "usr": id,
          "unit_id": unit,
        });
  }

  static Future<void> updateExistingImportedOccasionUser(OccasionUserModel oum) async {
    await AuthService.ensureCanUpdateUsers(oum);
    await _supabase.from(Tb.occasion_users.table).upsert(
        oum.toImportedUpdateJson()
    );
    await DbUsers.updateUserInfo(oum);

  }

  static Future<void> deleteUnitUser(String user, int unit) async {
    await _supabase.rpc("delete_unit_user",
        params:
        {
          "usr": user,
          "unit_id": unit
        });
  }

  static Future<void> deleteOccasionUser(String user, int occasion) async {
    await _supabase.rpc("delete_occasion_user_ws",
        params:
        {
          "usr": user,
          "oc": occasion
        });
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

  static Future<OccasionUserModel> getOccasionUser(String id) async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.user, id).limit(1).single();
    return OccasionUserModel.fromJson(data);
  }

  static Future<List<OccasionUserModel>> getOccasionUsers() async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasionId()!);
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<List<OccasionUserModel>> getOccasionUsersServiceTab() async {
    var allFood = await DbOccasions.getAllServices("food");
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsService.currentOccasionId()!);
    for(var ou in data){
      for(var f in allFood) {
        if(ou[Tb.occasion_users.services] == null){
          ou[Tb.occasion_users.services] = {DbOccasions.serviceTypeFood:{}};
        }
        if(ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood] == null){
          ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood] = {};
        }
        if(ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood][f.code] == null) {
          ou[Tb.occasion_users.services][DbOccasions.serviceTypeFood][f.code] =
              DbOccasions.serviceNone;
        }
      }
    }
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

  static Future<dynamic> importUsersFromTickets(int occasionId) async {
    return await _supabase.rpc(
        'import_users_from_tickets_ws',
        params: {'p_occasion_id': occasionId});
  }
}
