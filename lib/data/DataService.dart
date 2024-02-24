import 'dart:collection';

import 'package:avapp/data/OfflineDataHelper.dart';
import 'package:avapp/models/GlobalSettingsModel.dart';
import 'package:avapp/models/Tb.dart';
import 'package:avapp/models/UserGroupInfoModel.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/models/InformationModel.dart';

import 'package:avapp/models/NewsModel.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/services/NotificationHelper.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/services/UserManagementHelper.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:avapp/appConfig.dart';
import 'package:html/parser.dart';

import '../models/EventModel.dart';
import '../models/ExclusiveGroupModel.dart';
import '../models/PlaceModel.dart';
import '../services/NavigationService.dart';

class DataService {
  static final _supabase = Supabase.instance.client;
  
  static SupabaseClient? _supabaseAdmin;
  static Future<SupabaseClient> GetSupabaseAdminClient() async {
    if(_supabaseAdmin != null)
    {
      return _supabaseAdmin!;
    }
    var result = await DialogHelper.showPasswordInputDialog(NavigationService.navigatorKey.currentContext!, "Input service_role key from supabase".tr(), "Input here".tr());
    if(result==null)
    {
      throw Exception("You must input service_role key.");
    }
    _supabaseAdmin = SupabaseClient(_supabase.supabaseUrl, result);
    return _supabaseAdmin!;
  }

  static final _secureStorage = FlutterSecureStorage();
  static const REFRESH_TOKEN_KEY = 'refresh';

  static Future<void> emailMailerSend(String recipient, String templateId, List<Map<String, String>> variables)
  async {
    await _supabase.rpc("send_email_mailersend",
        params: {"message": {
          "sender": "info@absolventskyvelehrad.cz",
          "recipient": recipient,
          "template_id": templateId
        }, "subs": variables});
  }

  static refreshSession() async {
    await _supabase.auth.refreshSession();
  }

  static Future<bool> tryAuthUser() async {
    if (!await _secureStorage.containsKey(key: REFRESH_TOKEN_KEY)) {
      return false;
    }
    var refresh = await _secureStorage.read(key: REFRESH_TOKEN_KEY);
    try{
      var result = await _supabase.auth.setSession(refresh.toString());
      if (result.user != null) {
        NotificationHelper.Login(DataService.currentUserId());
        await _secureStorage.write(
            key: REFRESH_TOKEN_KEY,
            value: _supabase.auth.currentSession!.refreshToken.toString());
        return true;
      } else {
        NotificationHelper.Logout();
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
    return _currentUser?.userGroup;
  }

  static hasGroup() {
    return _currentUser?.userGroup != null;
  }

  static isGroupLeader() {
    return hasGroup() && _currentUser?.userGroup?.leader?.id == currentUserId();
  }

  static String? currentUserEmail() {
    return _supabase.auth.currentUser?.email;
  }

  static String currentUserId() {
    return _supabase.auth.currentUser!.id;
  }

  static GlobalSettingsModel? globalSettingsModel = GlobalSettingsModel.DefaultSettings;

  static Future<GlobalSettingsModel> loadOrInitGlobalSettings() async {
    GlobalSettingsModel toReturn;
    var data = await _supabase
        .from(GlobalSettingsModel.globalSettingsTable)
        .select()
        .maybeSingle();

    if(data == null)
    {
      await _supabase
          .from(GlobalSettingsModel.globalSettingsTable)
          .insert(GlobalSettingsModel.DefaultSettings.toJson());
        toReturn = GlobalSettingsModel.DefaultSettings;
    }
    else{
      toReturn = GlobalSettingsModel.fromJson(data);
    }
    globalSettingsModel = toReturn;
    return toReturn;
  }

  static Future<UserInfoModel> getCurrentUserInfo() async {
    if(_currentUser == null){
      return await loadCurrentUserData();
    }
    return _currentUser!;
  }

  static bool isAdmin() {
    var containsAdminField = _supabase.auth.currentUser?.appMetadata.containsKey("is_admin");
    return containsAdminField != null && _supabase.auth.currentUser!.appMetadata["is_admin"] == true;
  }

  static bool isEditor() {
    var containsAdminField = _supabase.auth.currentUser?.appMetadata.containsKey("is_editor");
    return containsAdminField != null && _supabase.auth.currentUser!.appMetadata["is_editor"] == true;
  }

  static bool isReceptionAdmin() {
    return _currentUser != null && _currentUser!.isEditor!;
  }

  static Future<String> createUser(String email) async {
    var data = await (await GetSupabaseAdminClient()).auth.admin.createUser(AdminUserAttributes(email: email, emailConfirm: true));
    return data.user!.id;
  }

  static Future<void> updateUserPassword(UserInfoModel user, String password) async {
    if(AppConfig.isServiceRoleSafety){
      (await GetSupabaseAdminClient()).auth.admin.updateUserById(user.id!, attributes: AdminUserAttributes(password: password));
    }
    else{
      await unsafeChangeUserPassword(user.email!, password);
    }
  }

  static Future<void> deleteUser(String uuid) async {
    if(!AppConfig.isServiceRoleSafety)
    {
      throw Exception("Deleting user is not supported.");
    }
    var adminClient = await GetSupabaseAdminClient();
    await _supabase
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("user", uuid);
    await _supabase
        .from(Tb.event_users.table)
        .delete()
        .eq(Tb.event_users.user, uuid);
    await _supabase
        .from(Tb.user_news.table)
        .delete()
        .eq(Tb.user_news.user, uuid);
    await _supabase
        .from(UserInfoModel.userInfoTable)
        .delete()
        .eq(UserInfoModel.idColumn, uuid);
    adminClient.auth.admin.deleteUser(uuid);
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

  static Future<void> login(String email, String password) async {
    var data = await _supabase.auth
        .signInWithPassword(email: email, password: password);
    await _secureStorage.write(
        key: REFRESH_TOKEN_KEY, value: data.session!.refreshToken.toString());
    synchronizeMySchedule(true);
    refreshOfflineData();
    NotificationHelper.Login(currentUserId());
  }

  static Future<void> logout() async {
    await _supabase.auth.signOut();
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    _currentUser = null;
    OfflineDataHelper.clearUserData();
    NotificationHelper.Logout();
  }

  static UserInfoModel? _currentUser;
  static Future<UserInfoModel> loadCurrentUserData() async {
    ensureUserIsLoggedIn();
    var jsonUser = await _supabase
        .from(Tb.user_info.table)
        .select()
        .eq(Tb.user_info.id, _supabase.auth.currentUser!.id)
        .single();
    _currentUser = UserInfoModel.fromJson(jsonUser);
    _currentUser!.userGroup = await getCurrentUserGroup();
    return _currentUser!;
  }

  static String gText(String male, String female)
  {
    if(_currentUser?.sex != "male")
    {
      return female;
    }
    return male;
  }

  static Future<UserInfoModel> getFullUserInfo() async {
    var user = await getUserInfoWithAccommodation();
    var myGroup = await getCurrentUserGroup();
    if(myGroup!=null)
    {
      user.userGroup = await getUserGroupInfo(myGroup.id!);
    }
    return user;
  }

  static Future<UserInfoModel> getUserInfoWithAccommodation() async {
    var userInfo = await DataService.getCurrentUserInfo();
    if(userInfo.accommodation != null) {
      userInfo.place = await DataService.getUserAccommodation(userInfo.accommodation!);
    }
    return userInfo;
  }

  static Future<PlaceModel?> getUserAccommodation(
      String accommodationType) async {
    var data = await _supabase
        .from('accommodation_places')
        .select("${Tb.places.table}(id, title)")
        .eq("accommodation_type", accommodationType)
        .maybeSingle();
    if (data == null) {
      return null;
    }
    return PlaceModel.fromJson(data[Tb.places.table]);
  }

  static Future<List<UserInfoModel>> getUsers() async {
    var data = await _supabase.from(UserInfoModel.userInfoTable).select();
    return List<UserInfoModel>.from(data.map((x) => UserInfoModel.fromJson(x)));
  }

  static Future<UserInfoModel> getUser(String id) async {
    var data = await _supabase.from(UserInfoModel.userInfoTable).select().eq(UserInfoModel.idColumn, id).single();
    return UserInfoModel.fromJson(data);
  }

  static Future<String?> unsafeChangeUserPassword(String email, String pw) async {
    return await _supabase.rpc("set_user_password",
        params: {"user_email": email, "password": pw});
  }

  static Future<String?> unsafeCreateUser(String email, String pw) async {
    return await _supabase.rpc("create_user",
        params: {"email": email, "password": pw});
  }

  static updateUserAsJson(Map<String, dynamic> json) async {
    if(json[UserInfoModel.idColumn] == null)
    {
      if(AppConfig.isServiceRoleSafety){
        json[UserInfoModel.idColumn] = await DataService.createUser(json[UserInfoModel.emailReadonlyColumn]!);
      } else{
        json[UserInfoModel.idColumn] = await UserManagementHelper.unsafeCreateNewUser(json[UserInfoModel.emailReadonlyColumn]);
      }
    }
    await _supabase.from(UserInfoModel.userInfoTable).upsert(json);
  }

  static updateUser(UserInfoModel data) async {
    //todo change email individually
    if(!DataService.isAdmin())
    {
      await refreshSession();
      if(!DataService.isAdmin())
      {
        var errorText = "Elevated permission is required. Changes to user ${data.email} could not be saved.";
        throw Exception(errorText);
      }
    }

    if(data.id == null)
    {
      if(AppConfig.isServiceRoleSafety){
        data.id = await DataService.createUser(data.email!);
      } else{
        data.id = await UserManagementHelper.unsafeCreateNewUser(data.email);
      }
    }

    await _supabase.rpc("set_claim",
        params: {"uid": data.id, "claim": "is_editor", "value": data.isEditor});

    await _supabase.rpc("set_claim",
        params: {"uid": data.id, "claim": "is_admin", "value": data.isAdmin});


    if(data.isAdmin! && !data.isEditor!)
    {
      data.isEditor = true;
      await _supabase.rpc("set_claim",
          params: {"uid": data.id, "claim": "is_editor", "value": data.isEditor});
    }

    await _supabase.from(UserInfoModel.userInfoTable).upsert({
      UserInfoModel.idColumn: data.id,
      UserInfoModel.emailReadonlyColumn: data.email,
      UserInfoModel.nameColumn: data.name,
      UserInfoModel.surnameColumn: data.surname,
      UserInfoModel.sexColumn: data.sex,
      UserInfoModel.roleColumn: data.role,
      UserInfoModel.accommodationColumn: data.accommodation,
      UserInfoModel.phoneColumn: data.phone,
      UserInfoModel.birthDateColumn: data.birthDate?.toIso8601String(),
      UserInfoModel.isAdminReadOnlyColumn: data.isAdmin,
      UserInfoModel.isEditorReadOnlyColumn: data.isEditor,
    });

    if(data.id == currentUserId())
    {
      await refreshSession();
    }
  }

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.is_hidden, false);
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<List<PlaceModel>> getAllPlaces() async {
    var data = await _supabase.from(Tb.places.table).select();
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(Tb.user_group_info.table)
        .select("${UserGroupInfoModel.titleColumn}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.id, id).single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> deletePlace(PlaceModel placeModel) async {
    await _supabase.from(Tb.places.table).delete().eq(Tb.places.id, placeModel.id);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async
  {
    var json = placeModel.toJson();
    Map<String, dynamic> data;
    if(placeModel.id!=null) {
      data = await _supabase.from(Tb.places.table).update(json).eq(Tb.places.id, placeModel.id).select().single();
    }
    else
    {
      json.remove(Tb.places.id);
      data = await _supabase.from(Tb.places.table).insert(json).select().single();
    }
    return PlaceModel.fromJson(data);
  }

  static Future<List<InformationModel>> getAllInformation() async {
    var data = await _supabase.from(Tb.information.table).select();
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title.toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getAllActiveInformation() async {
    var data = await _supabase
        .from(Tb.information.table)
        .select()
        .eq(Tb.information.is_hidden, false);
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title.toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<void> loadEventsParticipantsAndStatus(List<EventModel> events)
  async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.event_users.table}(count)")
        .in_(Tb.events.id, events.map((e)=>e.id).toList());

    var eventList = List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));

    if(isLoggedIn())
    {
      await loadIsCurrentUserSignedIn(eventList);
    }

    for(var e in events)
    {
      var eq = eventList.firstWhere((element) => element.id == e.id);
      e.currentParticipants = eq.currentParticipants;
      e.isSignedIn = eq.isSignedIn;
    }

    if(AppConfig.isOwnProgramSupported)
    {
      await loadIsInMySchedule(events);
    }
  }

  static Future<void> loadIsInMySchedule(List<EventModel> events) async {
    var set = EventModel.CreateEventModelSet();
    var local = await loadAllMyScheduleOffline();
    set.addAll(local);
    if(isLoggedIn())
    {
      var remote = await loadAllMySchedule();
      set.addAll(remote);
    }

    for(var e in set)
    {
      var eq = events.firstWhere((element) => element.id == e.id);
      eq.isEventInMySchedule = e.isEventInMySchedule;
    }
  }

  static Future<List<EventModel>> getEventsForTimeline([bool onlyForSignedIn = false]) async {
    if(onlyForSignedIn)
    {
      List<EventModel> data = [];
      if(AppConfig.isOwnProgramSupported)
      {
        data = (await loadAllMyScheduleOffline()).toList();

        if(!isLoggedIn()) {
          return data.toList();
        }

        var remote = await loadAllMySchedule();
        data.addAll(remote);
      } else if(!isLoggedIn()) {
        return data;
      }

      var dataSignedIn = await _supabase
          .from(Tb.events.table)
          .select("${Tb.events.id},"
          "${Tb.events.title},"
          "${Tb.events.start_time},"
          "${Tb.events.end_time},"
          "${Tb.events.place},"
          "${Tb.events.max_participants},"
          "${Tb.events.is_group_event},"
          "${Tb.event_users.table}!inner(*)")
          .eq("${Tb.event_users.table}.${Tb.event_users.user}", currentUserId())
          .eq(Tb.events.is_hidden, false)
          .order(Tb.events.start_time, ascending: true)
          .order(Tb.events.max_participants, ascending: false);

      data.addAll(List<EventModel>.from(
          dataSignedIn.map((x) => EventModel.fromJson(x))));

      //join group events
      if(hasGroup())
      {
        var groupData = await _supabase
            .from(Tb.events.table)
            .select(
            "${Tb.events.id},"
            "${Tb.events.title},"
            "${Tb.events.start_time},"
            "${Tb.events.end_time},"
            "${Tb.events.place},"
            "${Tb.events.max_participants},"
            "${Tb.events.is_group_event}")
            .eq(EventModel.isGroupEventColumn, true)
            .eq(Tb.events.is_hidden, false)
            .order(Tb.events.start_time, ascending: true);
        data.addAll(List<EventModel>.from(
            groupData.map((x) => EventModel.fromJson(x))));
      }

      return data.toList();
    }
    var data = await _supabase
        .from(Tb.events.table)
        .select(
            "${Tb.events.id},"
            "${Tb.events.title},"
            "${Tb.events.start_time},"
            "${Tb.events.end_time},"
            "${Tb.events.place},"
            "${Tb.events.max_participants},"
            "${Tb.events.is_group_event}, "
            "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_parent}_fkey(${Tb.event_groups.event_child})")
        .eq(Tb.events.is_hidden, false)
        .order(Tb.events.start_time, ascending: true)
        .order(Tb.events.max_participants, ascending: false);

    var events = List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));

    return events;
  }

  static Future<HashSet<EventModel>> loadAllMySchedule() async {
    var dataEventUsersSaved = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.events.place},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event},"
        "event_users_saved!inner(*)")
        .eq("event_users_saved.user", currentUserId())
        .eq(Tb.events.is_hidden, false)
        .order(Tb.events.start_time, ascending: true)
        .order(Tb.events.max_participants, ascending: false);

    var remoteEvents = List<EventModel>.from(
        dataEventUsersSaved.map((x) => EventModel.fromJson(x)));
    for (var element in remoteEvents) {
      element.isEventInMySchedule = true;
    }
    var toReturn = EventModel.CreateEventModelSet();
    toReturn.addAll(remoteEvents);
    return toReturn;
  }

  static Future<HashSet<EventModel>> loadAllMyScheduleOffline() async {
    var events = OfflineDataHelper.getMyScheduleData();
    var localData = await _supabase.from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.events.place},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event}")
        .in_(Tb.events.id, events)
        .eq(Tb.events.is_hidden, false)
        .order(Tb.events.start_time, ascending: true)
        .order(Tb.events.max_participants, ascending: false);
    var localEvents = List<EventModel>.from(
        localData.map((x) => EventModel.fromJson(x)));
    for (var element in localEvents) {
      element.isEventInMySchedule = true;
    }
    var toReturn = EventModel.CreateEventModelSet();
    toReturn.addAll(localEvents);
    return toReturn;
  }

  static Future<List<EventModel>> getEventsWithPlaces() async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.is_hidden},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.events.max_participants},"
        "${Tb.events.split_for_men_women},"
        "${Tb.events.is_group_event},"
        "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
        "${Tb.event_groups.table}!event_groups_event_child_fkey(event_parent)")
        .order(Tb.events.start_time, ascending: true);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<EventModel>> getEventsDescription(List<int> ids) async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.events.updated_at}, ${Tb.events.description}")
        .in_(Tb.events.id, ids);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<EventModel>> getAllEventsMeta() async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.events.updated_at}");

    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo() async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
        "${UserGroupInfoModel.titleColumn},"
        "${Tb.user_info.table}!${Tb.user_group_info.leader}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}, ${Tb.user_info.email_readonly}),"
        "${Tb.places.table}(*),"
        "${Tb.user_group_info.description},"
        "${UserGroupInfoModel.userGroupsTable}(${Tb.user_info.table}(${Tb.user_info.id}, ${Tb.user_info.name}, ${Tb.user_info.surname}, ${Tb.user_info.email_readonly}))");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    var data = await _supabase
        .from(Tb.user_group_info.table)
        .select(
        "${Tb.user_group_info.id},"
            "${UserGroupInfoModel.titleColumn},"
            "${Tb.user_info_public.table}!${Tb.user_group_info.leader}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}),"
            "${Tb.places.table}(*),"
            "${Tb.user_group_info.description},"
            "${UserGroupInfoModel.userGroupsTable}(${Tb.user_info_public.table}(${Tb.user_info_public.id}, ${Tb.user_info_public.name}, ${Tb.user_info_public.surname}))")
    .eq(Tb.user_group_info.id, id)
    .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return UserGroupInfoModel.fromJson(data);
  }

  static Future<List<ExclusiveGroupModel>> getAllExclusiveGroups() async {
    var data = await _supabase
        .from(ExclusiveGroupModel.exclusiveGroupsTable)
        .select("${ExclusiveGroupModel.idColumn}, ${ExclusiveGroupModel.titleColumn}, exclusive_events(event)");
    return List<ExclusiveGroupModel>.from(
        data.map((x) => ExclusiveGroupModel.fromJson(x)));
  }

  static updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(isAdmin() || model.leader!.id == currentUserId()))
    {
      throw Exception("Must be leader or admin to change the group.");
    }

    var upsertObj = {
      UserGroupInfoModel.titleColumn: model.title,
      UserGroupInfoModel.leaderColumn: model.leader?.id,
    };

    if(model.description != null)
    {
      upsertObj.addAll({Tb.user_group_info.description: model.description});
    }
    if(model.place != null)
    {
      model.place = await DataService.updatePlace(model.place!);
      upsertObj.addAll({UserGroupInfoModel.placeColumn: model.place!.id.toString()});
    }
    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.user_group_info.id: model.id.toString()});
      eventData = await _supabase.from(Tb.user_group_info.table).upsert(upsertObj).eq(Tb.user_group_info.id, model.id).select().single();
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
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("group", group.id);

    for(var p in participants)
    {
      await _supabase
          .from(UserGroupInfoModel.userGroupsTable)
          .insert({"group":group.id, "user":p.id});
    }
  }

  static deleteUserGroupInfo(UserGroupInfoModel model) async {
    await _supabase
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("group", model.id);
    await _supabase
        .from(Tb.user_group_info.table)
        .delete()
        .eq("id", model.id);
    if(model.place!=null)
    {
      await _supabase
          .from(Tb.places.table)
          .delete()
          .eq(Tb.places.id, model.place!.id);
    }
  }

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    var upsertObj = {
      Tb.exclusive_groups.title: model.title,
    };

    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.exclusive_groups.id: model.id.toString()});
      eventData = await _supabase.from(Tb.exclusive_groups.table).update(upsertObj).eq(Tb.exclusive_groups.id, model.id).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.exclusive_groups.table).insert(upsertObj).select().single();
    }
    var updated = ExclusiveGroupModel.fromJson(eventData);

    await _supabase
        .from(Tb.exclusive_events.table)
        .delete()
        .eq(Tb.exclusive_events.group, updated.id);

    var insert = [];
    for(var e in model.events!)
    {
      insert.add(
          {Tb.exclusive_events.group:updated.id, 
            Tb.exclusive_events.event:e});
    }
    await _supabase
        .from(Tb.exclusive_events.table)
        .insert(insert)
        .select();
  }

  static Future<void> deleteExclusiveGroup(ExclusiveGroupModel data) async {
    await _supabase
        .from(ExclusiveGroupModel.exclusiveEventsTable)
        .delete()
        .eq(ExclusiveGroupModel.exclusiveEventsGroupColumn, data.id);
    await _supabase
        .from(ExclusiveGroupModel.exclusiveGroupsTable)
        .delete()
        .eq(ExclusiveGroupModel.idColumn, data.id);
  }

  static Future<EventModel> getEvent(int eventId) async {
    var data = await _supabase
        .from(Tb.events.table)
        .select(
            "${Tb.events.id},"
            "${Tb.events.updated_at},"
            "${Tb.events.title},"
            "${Tb.events.start_time},"
            "${Tb.events.end_time},"
            "${Tb.events.max_participants},"
            "${Tb.events.split_for_men_women},"
            "${Tb.events.is_group_event},"
            "${Tb.events.description},"
            "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
            "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_parent}_fkey(${Tb.event_groups.event_child})")
        .eq(Tb.events.id, eventId)
        .single();
    var event = EventModel.fromJson(data);
    if(isLoggedIn()) {
      event.isEventInMySchedule = await DataService.isEventSaved(event.id!);
    } else {
      event.isEventInMySchedule = OfflineDataHelper.isEventSaved(event.id!);
    }

    if(event.childEventIds!=null)
    {
      var childEventsData = await _supabase
          .from(Tb.events.table)
          .select("${Tb.events.id},"
                  "${Tb.events.title},"
                  "${Tb.events.start_time},"
                  "${Tb.events.end_time},"
                  "${Tb.events.max_participants},"
                  "${Tb.event_users.table}(count)")
          .in_(Tb.events.id, event.childEventIds!)
          .eq(Tb.events.is_hidden, false)
          .order(Tb.events.start_time, ascending: true)
          .order(Tb.events.title, ascending: true);

      event.childEvents = List<EventModel>.from(
          childEventsData.map((x) => EventModel.fromJson(x)));

      if(isLoggedIn())
      {
        await loadIsCurrentUserSignedIn(event.childEvents);
      }
    }
    if(event.isGroupEvent && hasGroup())
    {
      event.isMyGroupEvent = true;
    }

    return event;
  }

  static Future<void> loadIsCurrentUserSignedIn(List<EventModel> events) async {
    List<dynamic> currentUserStatePerEventData = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.event_users.table}!inner(count)")
        .eq("${Tb.event_users.table}.${Tb.event_users.user}", currentUserId())
        .in_(Tb.events.id, events.map((e) => e.id).toList());

    Set<int> userSignedInEvents = currentUserStatePerEventData.where((c)=>c[Tb.event_users.table][0]["count"]>0).map((c)=>c["id"] as int).toSet();
    for(var e in events)
    {
      e.isSignedIn = userSignedInEvents.contains(e.id!) ? true : false;
    }
  }

  static Future<UserGroupInfoModel?> getCurrentUserGroup() async {
    UserGroupInfoModel? group;
    var partOfGroup = await _supabase
    .from(Tb.user_group_info.table)
    .select("${Tb.user_group_info.id},"
        "${Tb.user_group_info.title},"
        "user_info!leader(id),"
        "${Tb.places.table}(${Tb.places.id})")
    .eq(UserGroupInfoModel.leaderColumn, currentUserId())
    .limit(1)
    .maybeSingle();
    if(partOfGroup!=null)
    {
      group = UserGroupInfoModel.fromJson(partOfGroup);
    }
    if(group==null)
    {
      partOfGroup = await _supabase
          .from(UserGroupInfoModel.userGroupsTable)
          .select("${Tb.user_group_info.table}(id, title)")
          .eq("user", currentUserId())
          .limit(1)
          .maybeSingle();
      if(partOfGroup!=null)
      {
        group = UserGroupInfoModel.fromJson(partOfGroup[Tb.user_group_info.table]);
      }
    }
    return group;
  }

  static Future<List<UserInfoModel>> getParticipantsPerEvent(int eventId) async {
    var data = await _supabase
      .from(Tb.event_users.table)
      .select(
        "${Tb.event_users.user},"
        "${Tb.event_users.event},"
        "${Tb.user_info_public.table}(*)")
      .eq(Tb.event_users.event, eventId);
    return List<UserInfoModel>.from(data.map((par) => UserInfoModel.fromJson(par[Tb.user_info_public.table])));
  }

  static Future<int> getParticipantsPerEventCount(int eventId) async {
    var result = await _supabase
        .from(Tb.event_users.table)
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq(Tb.event_users.event, eventId);
    return result.count;
  }

  static Future<List<EventModel>> getParticipantEventTimes(String id) async {
    var data = await _supabase
        .from(Tb.event_users.table)
        .select("${Tb.events.table}"
        "("
          "${Tb.events.id},"
          "${Tb.events.start_time},"
          "${Tb.events.end_time}"
        ")")
        .eq(Tb.event_users.user, id);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x[Tb.events.table])));
  }

  static Future<bool> isCurrentUserSignedToEvent(int eventId) async {
    ensureUserIsLoggedIn();
    var result = await _supabase
        .from(Tb.event_users.table)
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq(Tb.event_users.event, eventId)
        .eq(Tb.event_users.user, currentUserId());
    return result.count > 0;
  }

  static signInToEvent(int eventId, [UserInfoModel? participant]) async {
    ensureUserIsLoggedIn();
    var userId = participant?.id ?? currentUserId();
    //check for max participants
    var event = await getEvent(eventId);

    if (event.endTime.isBefore(DateTime.now())) {
      ToastHelper.Show("${"Cannot sign in!".tr()} ${"Event is over.".tr()}", severity: ToastSeverity.NotOk);
      return;
    }

    //check for similar times
    var userEvents = await getParticipantEventTimes(userId);
    for (var i = 0; i < userEvents.length; i++) {
      var e = userEvents[i];
      if (e.startTime.isBefore(event.endTime) &&
              e.startTime.isAfter(event.startTime) ||
          e.endTime.isBefore(event.endTime) &&
              e.endTime.isAfter(event.startTime) ||
          e.startTime.isAtSameMomentAs(event.startTime) ||
          e.endTime.isAtSameMomentAs(event.endTime)) {
        if(participant == null) {
          var trPrefix = _currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at another event at the same time.".tr();
          ToastHelper.Show("${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show("${trPrefix}{user} is already signed in at another event at the same time.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      }
    }

    int result = await _supabase.rpc("upsert_event_user",
        params: {"event_id": eventId, "user_id": userId});

    switch(result)
    {
      case 100: {
        if(participant == null) {
          var trPrefix = _currentUser!.getGenderPrefix();
          ToastHelper.Show("${trPrefix}You have been signed in.".tr());
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show("${trPrefix}{user} has been signed in.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      }
      case 101: ToastHelper.Show("${"Cannot sign in!".tr()} ${"Event is full.".tr()}", severity: ToastSeverity.NotOk); return;
      case 102: {
        if(participant == null) {
          var trPrefix = _currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at an event of this type.".tr();
          ToastHelper.Show("${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          var message = "${trPrefix}{user} is already signed in at an event of this type.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show("${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 103: {
        if(participant == null) {
          var trPrefix = _currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in.".tr();
          ToastHelper.Show("${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else {
          var trPrefix = participant.getGenderPrefix();
          var message = "${trPrefix}{user} is already signed in.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show("${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 104: ToastHelper.Show("${"Cannot sign in!".tr()} ${globalSettingsModel!.tooSoonMessage!}", severity: ToastSeverity.NotOk); return;
      case 105: ToastHelper.Show("${"Cannot sign in!".tr()} ${"There is already the maximum of men.".tr()}", severity: ToastSeverity.NotOk); return;
      case 106: ToastHelper.Show("${"Cannot sign in!".tr()} ${"There is already the maximum of women.".tr()}", severity: ToastSeverity.NotOk); return;
    }
  }

  static ensureUserIsLoggedIn(){
    if(!DataService.isLoggedIn())
    {
      throw Exception("User must be logged in.");
    }
  }

  static signOutFromEvent(EventModel event, [UserInfoModel? participant]) async {
    ensureUserIsLoggedIn();
    var finalId = participant?.id ?? _supabase.auth.currentUser?.id;

    if(!isAdmin() && DateTime.now().isAfter(event.endTime))
    {
      ToastHelper.Show("It is not possible to sign out from an event that has already taken place.", severity: ToastSeverity.NotOk);
      return;
    }

    await _supabase
        .from(Tb.event_users.table)
        .delete()
        .eq(Tb.event_users.event, event.id!)
        .eq(Tb.event_users.user, finalId);

    if(participant == null) {
      var trPrefix = _currentUser!.getGenderPrefix();
      ToastHelper.Show("${trPrefix}You have been signed out.".tr());
      return;
    }
    else{
      var trPrefix = participant.getGenderPrefix();
      ToastHelper.Show("${trPrefix}{user} has been signed out.".tr(namedArgs: {"user":participant.toString()}));
    }
  }

  static Future<EventModel> updateEvent(EventModel event) async
   {
    var upsertObj = {
      Tb.events.start_time: event.startTime.toIso8601String(),
      Tb.events.end_time: event.endTime.toIso8601String(),
      Tb.events.title: event.title,
      Tb.events.max_participants: event.maxParticipants,
      Tb.events.place: event.place?.id,
      Tb.events.split_for_men_women: event.splitForMenWomen,
      Tb.events.is_group_event: event.isGroupEvent,
      Tb.events.is_hidden: event.isHidden,
    };
    if(event.description!=null) {
      upsertObj.addAll({Tb.events.description: event.description});
    }
    dynamic eventData;
    if(event.id!=null) {
      upsertObj.addAll({Tb.events.id: event.id});
      eventData = await _supabase.from(Tb.events.table).update(upsertObj).eq(Tb.events.id, event.id).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.events.table).insert(upsertObj).select().single();
    }
    return EventModel.fromJson(eventData);
  }

  static updateEventAndParents(EventModel event) async {

    var updatedEvent = await updateEvent(event);
    await removeEventFromEventGroups(updatedEvent);

    var insert = [];
    for(var eParent in event.parentEventIds!)
    {
      insert.add({Tb.event_groups.event_child:updatedEvent.id, Tb.event_groups.event_parent:eParent});
    }
    await _supabase
        .from(Tb.event_groups.table)
        .insert(insert)
        .select();
  }

  static Future<void> removeEventFromSaved(EventModel updatedEvent) async {
    await _supabase
        .from(EventModel.eventUsersSavedTable)
        .delete()
        .eq(EventModel.eventUsersSavedEventColumn, updatedEvent.id);
  }

  static Future<void> removeEventFromEventGroups(EventModel updatedEvent) async {
    await _supabase
        .from(Tb.event_groups.table)
        .delete()
        .eq(Tb.event_groups.event_child, updatedEvent.id);
  }

  static Future<void> deleteEvent(EventModel data) async {
    await _supabase
        .from(Tb.events.table)
        .delete()
        .eq(Tb.events.id, data.id);
  }

  static Future<void> updateInformation(InformationModel info) async {
    if(info.id == null)
    {
      await _supabase.from(Tb.information.table).insert({
        Tb.information.title: info.title,
        Tb.information.description: info.description,
        Tb.information.type: info.type,
        Tb.information.is_hidden: info.isHidden,
        Tb.information.order: info.order
      });
      return;
    }
    await _supabase.from(Tb.information.table).upsert({
      Tb.information.title: info.title,
      Tb.information.id: info.id,
      Tb.information.description: info.description,
      Tb.information.type: info.type,
      Tb.information.is_hidden: info.isHidden,
      Tb.information.order: info.order
    }).select();
  }

  static Future<void> deleteInformation(InformationModel info) async {
    await _supabase
        .from(Tb.information.table)
        .delete()
        .eq(Tb.information.id, info.id);
  }

  static Future<List<UserInfoModel>> getAllUsersBasics() async {
    var data = await _supabase.from(UserInfoModel.userInfoTable)
        .select([UserInfoModel.idColumn,
                UserInfoModel.emailReadonlyColumn,
                UserInfoModel.nameColumn,
                UserInfoModel.surnameColumn].join(", "));
    return List<UserInfoModel>.from(
        data.map((x) => UserInfoModel.fromJson(x)));
  }

  static Future<List<UserInfoModel>> getAllUsersPublic() async {
    var data = await _supabase.from(UserInfoModel.userInfoPublicTable)
        .select([UserInfoModel.idColumn, UserInfoModel.emailReadonlyColumn, UserInfoModel.nameColumn, UserInfoModel.surnameColumn].join(", "));
    return List<UserInfoModel>.from(
        data.map((x) => UserInfoModel.fromJson(x)));
  }

  static Future<void> deleteNewsMessage(NewsModel message) async {

    var lastMes = await _supabase
        .from(Tb.news.table)
        .select(Tb.news.id)
        .lt(Tb.news.created_at, message.createdAt)
    // from some reason lower than is behaving like lower and equal than on web platform
    // therefore additional check
        .neq(Tb.news.id, message.id)
        .order(Tb.news.created_at)
        .limit(1)
        .maybeSingle();

    if(lastMes!=null) {
      var currentUsers = await _supabase
          .from(Tb.user_news.table)
          .select(Tb.user_news.user)
          .eq(Tb.user_news.news_id, message.id);

      List<Map<String, dynamic>> toBeUpdated = [];
      for(var u in currentUsers) {
        toBeUpdated.add({
          Tb.user_news.user: u[Tb.user_news.user],
          Tb.user_news.news_id: lastMes[Tb.news.id]
        });
      }

      await _supabase
        .from(Tb.user_news.table)
        .upsert(toBeUpdated).select();
    }
    else {
      await _supabase
          .from(Tb.user_news.table)
          .delete()
          .eq(Tb.user_news.news_id, message.id);
    }

    await _supabase
        .from(Tb.news.table)
        .delete()
        .eq(Tb.news.id, message.id);

    ToastHelper.Show("Message has been removed.".tr());
  }

  static Future<void> updateNewsMessage(NewsModel message) async {
    await _supabase
        .from(Tb.news.table)
        .update({Tb.news.message:message.message})
        .eq(Tb.news.id, message.id);
    ToastHelper.Show("Message has been changed.".tr());
  }

  static insertNewsMessage(String message, bool withNotification) async {
    await _supabase.from(Tb.news.table).insert(
        {Tb.news.message: message, Tb.news.created_by: currentUserId()}).select();

    if(withNotification)
    {
      String basicMessage = "";
      var document = parse(message);
      for(var child in document.getElementsByTagName("p")){
          var innerText = "${child.text}\n";
          if(innerText.trim().isEmpty)
          {
            continue;
          }
          basicMessage+=innerText;
      }
      basicMessage = basicMessage.trim();
      await _supabase.from("notification_records").insert(
          {"content": basicMessage, "heading": _currentUser!.name??AppConfig.home_page}).select();

      ToastHelper.Show("Message has been sent.".tr());
      return;
    }
    ToastHelper.Show("Message has been created.".tr());

  }

  static Future<int> countNewMessages() async {
    ensureUserIsLoggedIn();
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from(Tb.news.table)
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .gt(Tb.news.id, lastMessageId);
    return result.count;
  }

  static Future<int> getLastReadMessage() async {
    ensureUserIsLoggedIn();
    int lastMessageId = 0;
    var lastMessage = await _supabase
        .from(Tb.user_news.table)
        .select(Tb.user_news.news_id)
        .eq(Tb.user_news.user, currentUserId())
        .maybeSingle();
    if (lastMessage != null) {
      lastMessageId = lastMessage[Tb.user_news.news_id];
    }
    return lastMessageId;
  }

  static void setMessagesAsRead(int newsId) async {
    ensureUserIsLoggedIn();
    await _supabase
        .from(Tb.user_news.table)
        .upsert({Tb.user_news.user: currentUserId(), Tb.user_news.news_id: newsId}).select();
  }

  static Future<List<NewsModel>> getAllNewsMessages() async {
    int lastReadMessageId = 0;
    if (isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var data = await _supabase
        .from(Tb.news.table)
        .select(
            "${Tb.news.id},"
            "${Tb.news.created_at},"
            "${Tb.news.message},"
            "${Tb.user_info_public.table}(${Tb.user_info_public.name},${Tb.user_info_public.surname}),"
            "${Tb.user_news_views.table}(count)")
        .order(Tb.news.created_at);

    List<NewsModel> loadedMessages = List<NewsModel>.from(data.map((x) => NewsModel.fromJson(x)));

    int viewsAggregate = 0;
    for (var message in loadedMessages) {
      viewsAggregate += message.views;
      message.views = viewsAggregate;
      if (isLoggedIn()) {
        message.isRead = lastReadMessageId >= message.id;
      }
    }
    return loadedMessages;
  }

  //avoid loosing participant count by updating each event individually
  static Future<void> updateEvents(List<EventModel> events, [bool onlyForSignedIn = false]) async {
    var updatedEvents = await DataService.getEventsForTimeline(onlyForSignedIn);
    for (var e in updatedEvents) {
      var eventToChange =
          events.firstWhereOrNull((eve) => eve.id == e.id);
      if (eventToChange != null) {
        eventToChange.copyFromEvent(e);
      } else {
        events.add(e);
      }
    }
    var remove = events.where((d) => !updatedEvents.any((e)=>d.id == e.id)).toList();
    for(var r in remove)
    {
      events.remove(r);
    }

    //rewrite group names for group events
    for(var e in events)
    {
      if(e.isGroupEvent && hasGroup())
      {
        e.title = currentUserGroup()!.title;
        e.isMyGroupEvent = true;
      }
    }

    events.sort((a, b)
    {
      var cmp = a.startTime.compareTo(b.startTime);
      if (cmp == 0)
      {
        cmp = b.maxParticipantsNumber().compareTo(a.maxParticipantsNumber());
      }
      if (cmp == 0)
      {
        cmp = a.title!.compareTo(b.title!);
      }
      return cmp;
    });
  }

  static Future<void> saveLocation(int placeId, double lat, double lng) async {
    if(!(DataService.isEditor() || (DataService.isGroupLeader() && DataService.currentUserGroup()!.place!.id == placeId)))
    {
      throw Exception("You cannot change this place.");
    }
    await _supabase.from(Tb.places.table).update({
      Tb.places.coordinates: {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq(Tb.places.id, placeId);
    ToastHelper.Show("Place has been changed.".tr());
  }

  static Future<bool> isEventSaved(int id) async {
    var data = await _supabase
        .from(EventModel.eventUsersSavedTable)
        .select()
        .eq(EventModel.eventUsersSavedEventColumn, id)
        .eq(EventModel.eventUsersSavedUserColumn, currentUserId())
        .maybeSingle();
    return data != null;
  }

  static Future<void> removeFromMySchedule(int id) async {
    if(isLoggedIn()) {
      await _supabase
          .from(EventModel.eventUsersSavedTable)
          .delete()
          .eq(EventModel.eventUsersSavedEventColumn, id)
          .eq(EventModel.eventUsersSavedUserColumn, currentUserId());
    }
    OfflineDataHelper.removeFromMySchedule(id);
    ToastHelper.Show("Removed from My schedule.".tr());
  }

  static Future<void> addToMySchedule(int id) async {
    if(isLoggedIn()) {
        await _supabase
            .from(EventModel.eventUsersSavedTable)
            .insert({EventModel.eventUsersSavedEventColumn: id, EventModel.eventUsersSavedUserColumn: currentUserId()});
    }
    OfflineDataHelper.addToMySchedule(id);
    ToastHelper.Show("Added to My schedule.".tr());
  }
  
  static Future<void> synchronizeMySchedule([bool join = false])
  async {
    if(!isLoggedIn() || !AppConfig.isOwnProgramSupported){
      return;
    }
    HashSet<EventModel> data = EventModel.CreateEventModelSet();

    var remote = await loadAllMySchedule();
    var local = await loadAllMyScheduleOffline();

    if (join) {
      data.addAll(remote);
      data.addAll(local);
    }
    else {
      data = remote;
    }

    var currentUserEventIds = List<int>.from(data.map((x) => x.id));
    OfflineDataHelper.saveMyScheduleData(currentUserEventIds);

    var values = [];
    for(var v in currentUserEventIds)
    {
      values.add({
        EventModel.eventUsersSavedUserColumn: currentUserId(),
        EventModel.eventUsersSavedEventColumn: v
      });
    }
    if(join)
    {
      await _supabase.from(EventModel.eventUsersSavedTable)
          .upsert(values);
    }
  }

  static Future<void> refreshOfflineData() async {

    var globalSettings = await DataService.loadOrInitGlobalSettings();
    OfflineDataHelper.saveGlobalSettings(globalSettings);

    if(DataService.isLoggedIn()) {
      var userInfo = await getFullUserInfo();
      OfflineDataHelper.saveUserInfo(userInfo);
    }
    else {
      OfflineDataHelper.deleteUserInfo();
    }

    var places = await getAllPlaces();
    OfflineDataHelper.saveAllPlaces(places);

    var info = await getAllActiveInformation();
    OfflineDataHelper.saveAllInfo(info);

    var messages = await getAllNewsMessages();
    OfflineDataHelper.saveAllMessages(messages);

    var needsUpdate = <int>[];
    var allEventsMeta = await getAllEventsMeta();

    for(var e in allEventsMeta) {
      var oe = OfflineDataHelper.getEventDescription(e.id.toString());
      if(oe==null || oe.updatedAt==null || oe.updatedAt!.isBefore(e.updatedAt!)) {
          needsUpdate.add(e.id!);
      }
    }

    var fullEvents = await getEventsDescription(needsUpdate);
    for(var e in fullEvents) {
      OfflineDataHelper.saveEventDescription(e);
    }

    await DataService.synchronizeMySchedule();
  }

// static Future<List<ParticipantModel>> searchParticipants(String searchTerm) async {
//   List<ParticipantModel> toReturn = [];
//   var result = await _supabase
//       .from("user_info")
//       .select("email, name, surname")
//       .or('or(name.ilike.%$searchTerm%),or(surname.ilike.%$searchTerm%),or(email.ilike.%$searchTerm%)')
//       .limit(10);
//   for(var p in result)
//   {
//     toReturn.add(ParticipantModel(p["email"], p["name"], p["surname"]));
//   }
//   return toReturn;
// }
}
