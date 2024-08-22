import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthService {
  static final _supabase = Supabase.instance.client;
  static const _secureStorage = FlutterSecureStorage();
  static const REFRESH_TOKEN_KEY = 'refresh';

  static Future<void> login(String email, String password) async {
    var data = await _supabase.auth
        .signInWithPassword(email: email, password: password);
    await _secureStorage.write(
        key: REFRESH_TOKEN_KEY, value: data.session!.refreshToken.toString());
    DbEvents.synchronizeMySchedule(true);
    SynchroService.refreshOfflineData();
    await NotificationHelper.login();
  }

  static Future<void> logout() async {
    await NotificationHelper.logout().timeout(const Duration(seconds: 2));
    await OfflineDataService.clearUserData();
    await _supabase.auth.signOut(scope: SignOutScope.local);
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    currentUser = null;
  }

  static Future<dynamic> resetPasswordForEmail(String email) async {
    return await _supabase.functions.invoke("email", body: {"email": email});
  }

  static UserInfoModel? currentUser;
  static Future<UserInfoModel> loadCurrentUserData() async {
    ensureUserIsLoggedIn();
    var jsonUser = await _supabase
        .from(Tb.user_info.table)
        .select()
        .eq(Tb.user_info.id, _supabase.auth.currentUser!.id)
        .single();
    currentUser = UserInfoModel.fromJson(jsonUser);
    currentUser!.userGroup = await getCurrentUserGroup();
    return currentUser!;
  }

  static String gText(String male, String female)
  {
    if(currentUser?.sex != "male")
    {
      return female;
    }
    return male;
  }

  static Future<UserInfoModel> getFullUserInfo() async {
    var user = await DbUsers.getCurrentUserInfo();
    if(RightsService.currentUserOccasion?.role != null) {
      user.roleString = await getRoleInfo(RightsService.currentUserOccasion!.role!);
    }
    var myGroup = await getCurrentUserGroup();
    if(myGroup!=null) {
      user.userGroup = await DbGroups.getUserGroupInfo(myGroup.id!);
    }
    if(SynchroService.globalSettingsModel!.isEnabledEntryCode??false) {
      user.companions = await DbCompanions.getAllCompanions();
    }

    return user;
  }

  static Future<String> getRoleInfo(int role) async {
    var data = await _supabase
        .from(Tb.role_info.table)
        .select(Tb.role_info.title)
        .eq(Tb.role_info.id, role)
        .single();
    return data[Tb.role_info.title];
  }

  static Future<PlaceModel?> getUserAccommodation(
      String accommodationType) async {
    var data = await _supabase
        .from(Tb.accommodation_places.table)
        .select("${Tb.places.table}(${Tb.places.id}, ${Tb.places.title})")
        .eq(Tb.accommodation_places.accommodation_type, accommodationType)
        .maybeSingle();
    if (data == null) {
      return null;
    }
    return PlaceModel.fromJson(data[Tb.places.table]);
  }

  static Future<UserGroupInfoModel?> getCurrentUserGroup() async {
    UserGroupInfoModel? group;
    var partOfGroup = await _supabase
        .from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.id},"
        "${Tb.user_group_info.title},"
        "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info_public.id}),"
        "${Tb.places.table}(${Tb.places.id})")
        .eq(Tb.user_group_info.leader, currentUserId())
        .limit(1)
        .maybeSingle();
    if(partOfGroup!=null)
    {
      group = UserGroupInfoModel.fromJson(partOfGroup);
    }
    if(group==null)
    {
      partOfGroup = await _supabase
          .from(Tb.user_groups.table)
          .select("${Tb.user_group_info.table}(${Tb.user_group_info.id}, ${Tb.user_group_info.title})")
          .eq(Tb.user_groups.user, currentUserId())
          .limit(1)
          .maybeSingle();
      if(partOfGroup!=null)
      {
        group = UserGroupInfoModel.fromJson(partOfGroup[Tb.user_group_info.table]);
      }
    }
    return group;
  }

  static Future<bool> refreshSession() async {
    var response = await _supabase.auth.refreshSession();
    if(response.session!=null){
      return true;
    }
    if(await tryAuthUser()){
      return true;
    }
    return false;
  }

  static Future<bool> tryAuthUser() async {
    if (!await _secureStorage.containsKey(key: REFRESH_TOKEN_KEY)) {
      return false;
    }
    var refresh = await _secureStorage.read(key: REFRESH_TOKEN_KEY);
    try{
      var result = await _supabase.auth.setSession(refresh.toString());
      if (result.user != null) {
        await _secureStorage.write(
            key: REFRESH_TOKEN_KEY,
            value: _supabase.auth.currentSession!.refreshToken.toString());
        return true;
      } else {
        await NotificationHelper.logout();
      }
    }
    catch(e)
    {
      //invalid refresh token
    }
    return false;
  }

  static isLoggedIn() {
    return _supabase.auth.currentSession != null;
  }

  static UserGroupInfoModel? currentUserGroup() {
    return currentUser?.userGroup;
  }

  static hasGroup() {
    return currentUser?.userGroup != null;
  }

  static isGroupLeader() {
    return hasGroup() && currentUser?.userGroup?.leader?.id == currentUserId();
  }

  static String? currentUserEmail() {
    return _supabase.auth.currentUser?.email;
  }

  static String currentUserId() {
    return _supabase.auth.currentUser!.id;
  }

  static ensureUserIsLoggedIn(){
    if(!AuthService.isLoggedIn())
    {
      throw Exception("User must be logged in.");
    }
  }

  static Future<void> ensureCanUpdateUsers(OccasionUserModel oum) async {
    if(!RightsService.canUpdateUsers())
    {
      await AuthService.refreshSession();
      if(!RightsService.canUpdateUsers())
      {
        var errorText = "Elevated permission is required. Changes to user ${oum.data?[Tb.occasion_users.data_email]} could not be saved.";
        throw Exception(errorText);
      }
    }
  }

  static Future<Map<String, dynamic>> register(Map<String, dynamic> data) async {
    var resp = await _supabase.functions.invoke("register", body: data);
    return resp.data;
  }

  static Future<String?> unsafeChangeUserPassword(OccasionUserModel occasionUserModel, String pwd) async {
    return await _supabase.rpc("set_user_password",
        params:
        {
          "usr": occasionUserModel.user,
          "oc": occasionUserModel.occasion??RightsService.currentOccasion,
          "password": pwd
        });
  }

  static Future<void> changeMyPassword(String pw) async {
    await _supabase.auth.updateUser(
        UserAttributes(
          password: pw,
        ));
  }

  static Future<dynamic> changePassword(String token, String pw) async {
    return await _supabase.rpc("set_user_password_token",
        params:
        {
          "token": token,
          "password": pw,
        });
  }
}
