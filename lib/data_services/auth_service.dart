import 'package:collection/collection.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/users/companion/db_companions.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/groups/db_groups.dart';
import 'package:fstapp/components/occasion/db_occasions.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../components/map/place_model.dart';

class AuthService {
  static final _supabase = Supabase.instance.client;
  static const _secureStorage = FlutterSecureStorage();
  static const REFRESH_TOKEN_KEY = 'refresh';
  static const metaLang = 'lang';

  static Future<void> login(String email, String password) async {
    var data = await _supabase.auth
        .signInWithPassword(email: email, password: password);
    if (!await validateCurrentOrganization()) {
      throw Exception('Account is not available for this organization.');
    }
    await _secureStorage.write(
        key: REFRESH_TOKEN_KEY, value: data.session!.refreshToken.toString());
    if (AppConfig.isAppSupported) {
      if (ClientSyncRuntime.isV1Selected) {
        await RightsService.updateAppData(force: true, refreshOffline: false);
        await ClientSyncRuntime.identityChanged();
        await ClientSyncRuntime.refresh(SyncReason.login,
            privateConsumer: true);
      } else {
        DbEvents.synchronizeMySchedule(join: true);
        SynchroService.refreshOfflineData();
      }
    }
    await NotificationHelper.loginCurrentUser();
  }

  static Future<void> logout() async {
    await NotificationHelper.logoutCurrentUser()
        .timeout(const Duration(seconds: 2));
    await OfflineDataService.clearUserData();
    await _supabase.auth.signOut(scope: SignOutScope.local);
    await ClientSyncRuntime.identityChanged();
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    RightsService.occasionLinkModel?.occasionUser = null;
    RightsService.occasionLinkModel?.unitUser = null;
    RightsService.occasionLinkModel?.userInfo = null;
  }

  static Future<dynamic> resetPasswordForEmail(String email) async {
    return await _supabase.functions.invoke("send-reset-password-link",
        body: {"email": email, "organization": AppConfig.organization});
  }

  static Future<dynamic> sendSignInCode(OccasionUserModel ou) async {
    return await _supabase.functions.invoke("send-sign-in-code", body: {
      "oc": ou.occasion,
      "usr": ou.user,
    });
  }

  static Future<UserInfoModel> getFullUserInfo() async {
    final participation =
        await DbUsers.getOccasionUser(AuthService.currentUserId());
    var user = (RightsService.currentUser() ?? UserInfoModel())
        .withOccasionParticipation(participation);
    if (RightsService.currentOccasionUser()?.role != null) {
      user.roleString =
          await getRoleInfo(RightsService.currentOccasionUser()!.role!);
    }
    user.userGroups = await DbGroups.getUserGroups();
    var eUserGroup = user.userGroups!.firstWhereOrNull((g) => g.type == null);
    if (eUserGroup != null) {
      user.eventUserGroup = await DbGroups.getUserGroupInfo(eUserGroup.id!);
    }
    if (FeatureService.isFeatureEnabled(FeatureConstants.companions)) {
      user.companions = await DbCompanions.getAllCompanions();
    }
    var oc = RightsService.currentOccasion()!;
    var place = oc.getReferenceToService(
        DbOccasions.serviceTypeAccommodation, user.occasionUser?.services);
    if (place != null) {
      user.accommodationPlace = PlaceModel(
          id: place.reference, title: place.title, description: "", type: "");
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
    if (response.session != null) {
      return true;
    }
    if (await tryAuthUser()) {
      return true;
    }
    return false;
  }

  static Future<bool> tryAuthUser() async {
    if (!await _secureStorage.containsKey(key: REFRESH_TOKEN_KEY)) {
      return false;
    }
    var refresh = await _secureStorage.read(key: REFRESH_TOKEN_KEY);
    try {
      var result = await _supabase.auth.setSession(refresh.toString());
      if (result.user != null) {
        await _secureStorage.write(
            key: REFRESH_TOKEN_KEY,
            value: _supabase.auth.currentSession!.refreshToken.toString());
        return true;
      } else {
        await NotificationHelper.logoutCurrentUser();
      }
    } catch (e) {
      //invalid refresh token
    }
    return false;
  }

  /// Rejects a recovered identity that belongs to a different Festapp tenant.
  /// A network failure is not treated as proof of mismatch: the cutover has
  /// already removed private cache, so the session can be revalidated online.
  static Future<bool> validateCurrentOrganization() async {
    final user = _supabase.auth.currentUser;
    if (user == null) return true;
    Map<String, dynamic>? profile;
    try {
      profile = await _supabase
          .from(Tb.user_info.table)
          .select(Tb.user_info.id)
          .eq(Tb.user_info.id, user.id)
          .eq(Tb.user_info.organization, AppConfig.organization)
          .maybeSingle();
    } catch (_) {
      return true;
    }
    if (profile != null) return true;
    try {
      await logout();
    } catch (_) {
      await _supabase.auth.signOut(scope: SignOutScope.local);
      await _secureStorage.delete(key: REFRESH_TOKEN_KEY);
      await OfflineDataService.clearUserData();
    }
    return false;
  }

  static bool isLoggedIn() {
    return _supabase.auth.currentSession != null;
  }

  static String currentUserId() {
    return _supabase.auth.currentUser!.id;
  }

  static void ensureUserIsLoggedIn() {
    if (!AuthService.isLoggedIn()) {
      throw Exception("User must be logged in.");
    }
  }

  static Future<void> ensureCanUpdateUsers(OccasionUserModel oum) async {
    if (!RightsService.canUpdateUsers()) {
      await AuthService.refreshSession();
      if (!RightsService.canUpdateUsers()) {
        var errorText =
            "Elevated permission is required. Changes to user ${oum.data?[Tb.occasion_users.data_email]} could not be saved.";
        throw Exception(errorText);
      }
    }
  }

  static Future<Map<String, dynamic>> register(
      Map<String, dynamic> data) async {
    data["organization"] = AppConfig.organization;
    var resp = await _supabase.functions.invoke("register", body: data);
    return resp.data;
  }

  static Future<void> unsafeChangeUserPassword(
      OccasionUserModel occasionUserModel, String pwd) async {
    var data = await _supabase.rpc("reset_user_password",
        params: {"p_user_id": occasionUserModel.user, "p_password": pwd});
    if (data["code"] != 200) {
      throw Exception(data["message"]);
    }
  }

  static Future<void> changeMyPassword(String pw) async {
    await _supabase.auth.updateUser(UserAttributes(
      password: pw,
    ));
  }

  static Future<dynamic> changePassword(String token, String pw) async {
    return await _supabase.rpc("set_user_password_token", params: {
      "token": token,
      "password": pw,
    });
  }

  static Future<void> recoverSession(String refreshToken) async {
    final response = await _supabase.auth.setSession(refreshToken);
    if (response.session != null) {
      await _secureStorage.write(
          key: REFRESH_TOKEN_KEY,
          value: response.session!.refreshToken.toString());
    }
  }
}
