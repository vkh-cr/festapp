import 'package:collection/collection.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbGroups.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class AuthService {
  static final _supabase = Supabase.instance.client;
  static const _secureStorage = FlutterSecureStorage();
  static const REFRESH_TOKEN_KEY = 'refresh';
  static const metaLang = 'lang';

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
    RightsService.currentOccasionUser = null;
    RightsService.currentUnitUser = null;
    RightsService.currentUnitUser = null;
  }

  static Future<dynamic> resetPasswordForEmail(String email) async {
    return await _supabase.functions.invoke("send-reset-password-link", body: {"email": email, "organization": AppConfig.organization});
  }

  static Future<dynamic> sendSignInCode(OccasionUserModel ou) async {
    return await _supabase.functions.invoke("send-sign-in-code", body: {"oc": ou.occasion, "usr": ou.user,});
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

    currentUser!.userGroups = await DbGroups.getUserGroups();
    var eUserGroup = currentUser!.userGroups!.firstWhereOrNull((g)=>g.type == null);
    if(eUserGroup!=null) {
      currentUser!.eventUserGroup = await DbGroups.getUserGroupInfo(eUserGroup.id!);
    }
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
    var user = UserInfoModel();
    user.occasionUser = await DbUsers.getOccasionUser(AuthService.currentUserId());
    if(RightsService.currentOccasionUser?.role != null) {
      user.roleString = await getRoleInfo(RightsService.currentOccasionUser!.role!);
    }
    user.userGroups = await DbGroups.getUserGroups();
    var eUserGroup = user.userGroups!.firstWhereOrNull((g)=>g.type == null);
    if(eUserGroup!=null) {
      user.eventUserGroup = await DbGroups.getUserGroupInfo(eUserGroup.id!);
    }
    if(FeatureService.isFeatureEnabled(FeatureConstants.companions)) {
      user.companions = await DbCompanions.getAllCompanions();
    }
    var place = SynchroService.globalSettingsModel!.getReferenceToService(DbOccasions.serviceTypeAccommodation, user.occasionUser?.services);
    if(place!=null){
      user.accommodationPlace = PlaceModel(id: place.reference, title: place.title, description: "", type: "");
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
    return currentUser?.eventUserGroup;
  }

  static hasGroup() {
    return currentUser?.eventUserGroup != null;
  }

  static isGroupLeader() {
    return hasGroup() && currentUser?.eventUserGroup?.leader?.id == currentUserId();
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
    data["organization"] = AppConfig.organization;
    var resp = await _supabase.functions.invoke("register", body: data);
    return resp.data;
  }

  static Future<String?> unsafeChangeUserPassword(OccasionUserModel occasionUserModel, String pwd) async {
    return await _supabase.rpc("set_user_password",
        params:
        {
          "usr": occasionUserModel.user,
          "oc": occasionUserModel.occasion??RightsService.currentOccasionId,
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
