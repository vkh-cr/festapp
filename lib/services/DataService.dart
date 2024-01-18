import 'package:avapp/models/GlobalSettingsModel.dart';
import 'package:avapp/models/UserGroupInfoModel.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/models/InformationModel.dart';

import 'package:avapp/models/NewsMessage.dart';
import 'package:avapp/services/DialogHelper.dart';
import 'package:avapp/services/NotificationHelper.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/services/UserManagementHelper.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:avapp/config.dart';
import 'package:html/parser.dart';

import '../models/EventModel.dart';
import '../models/ExclusiveGroupModel.dart';
import '../models/PlaceModel.dart';
import 'NavigationService.dart';

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
    if(config.isServiceRoleSafety){
      (await GetSupabaseAdminClient()).auth.admin.updateUserById(user.id!, attributes: AdminUserAttributes(password: password));
    }
    else{
      await unsafeChangeUserPassword(user.email!, password);
    }
  }

  static Future<void> deleteUser(String uuid) async {
    if(!config.isServiceRoleSafety)
    {
      throw Exception("Deleting user is not supported.");
    }
    var adminClient = await GetSupabaseAdminClient();
    await _supabase
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("user", uuid);
    await _supabase
        .from("event_users")
        .delete()
        .eq("user", uuid);
    await _supabase
        .from("user_news")
        .delete()
        .eq("user", uuid);
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
    NotificationHelper.Login(currentUserId());
  }

  static Future<void> logout() async {
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    _currentUser = null;
    await _supabase.auth.signOut();
    NotificationHelper.Logout();
  }

  static UserInfoModel? _currentUser;
  static Future<UserInfoModel> loadCurrentUserData() async {
    ensureUserIsLoggedIn();
    var jsonUser = await _supabase
        .from(UserInfoModel.userInfoTable)
        .select()
        .eq(UserInfoModel.idColumn, _supabase.auth.currentUser!.id)
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

  static Future<PlaceModel?> getUserAccommodation(
      String accommodationType) async {
    var data = await _supabase
        .from('accommodation_places')
        .select("places(id, title)")
        .eq("accommodation_type", accommodationType)
        .maybeSingle();
    if (data == null) {
      return null;
    }
    return PlaceModel.fromJson(data["places"]);
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
      if(config.isServiceRoleSafety){
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
      if(config.isServiceRoleSafety){
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
      UserInfoModel.isAdminReadOnlyColumn: data.isAdmin,
      UserInfoModel.isEditorReadOnlyColumn: data.isEditor,
    });

    if(data.id == currentUserId())
    {
      await refreshSession();
    }
  }

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase.from(PlaceModel.placeTable).select().eq(PlaceModel.isHiddenColumn, false);
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<List<PlaceModel>> getPlaces() async {
    var data = await _supabase.from(PlaceModel.placeTable).select();
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(UserGroupInfoModel.userGroupInfoTable)
        .select("${UserGroupInfoModel.titleColumn}, ${PlaceModel.placeTable}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from(PlaceModel.placeTable).select().eq("id", id).single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> deletePlace(PlaceModel placeModel) async {
    await _supabase.from(PlaceModel.placeTable).delete().eq("id", placeModel.id);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async
  {
    var json = placeModel.toJson();
    Map<String, dynamic> data;
    if(placeModel.id!=null) {
      data = await _supabase.from(PlaceModel.placeTable).update(json).eq("id", placeModel.id).select().single();
    }
    else
    {
      json.remove(PlaceModel.idColumn);
      data = await _supabase.from(PlaceModel.placeTable).insert(json).select().single();
    }
    return PlaceModel.fromJson(data);
  }

  static Future<List<InformationModel>> getInformation() async {
    var data = await _supabase.from(InformationModel.informationTable).select();
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title.toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getActiveInformation() async {
    var data = await _supabase
        .from(InformationModel.informationTable)
        .select()
        .eq(InformationModel.isHiddenColumn, false);
    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title.toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<void> loadEventsParticipantsAndStatus(List<EventModel> events)
  async {
    var data = await _supabase
        .from('events')
        .select("id, event_users(count)")
        .in_("id", events.map((e)=>e.id).toList());

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
  }

  static Future<List<EventModel>> getEventsForTimeline([bool onlyForSignedIn = false]) async {
    dynamic data;
    if(onlyForSignedIn)
    {
      data = await _supabase
          .from('events')
          .select("id, title, start_time, end_time, max_participants, is_group_event, event_users!inner(*)")
          .eq("event_users.user", currentUserId())
          .order('start_time', ascending: true)
          .order('max_participants', ascending: false);

      //join group events
      if(hasGroup())
      {
        var data2 = await _supabase
            .from('events')
            .select("id, title, start_time, end_time, max_participants, is_group_event")
            .eq(EventModel.isGroupEventColumn, true)
            .order('start_time', ascending: true);
        data.addAll(data2);
      }

      return List<EventModel>.from(
          data.map((x) => EventModel.fromJson(x)));
    }
    data = await _supabase
        .from('events')
        .select("id, title, start_time, end_time, max_participants, is_group_event")
        .order('start_time', ascending: true)
        .order('max_participants', ascending: false);

    var events = List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
    var groupData = await _supabase
        .from('event_groups')
        .select("event_child");

    var groups = List.from(groupData.map((gd)=>gd["event_child"]));
    List<EventModel> filtered = [];
    for(var e in events)
    {
      if(!groups.contains(e.id))
      {
        filtered.add(e);
      }
    }
    return filtered;
  }

  static Future<List<EventModel>> getEventsWithPlaces() async {
    var data = await _supabase
        .from('events')
        .select("id, title, start_time, end_time, max_participants, split_for_men_women, is_group_event, places(id, title), event_groups!event_groups_event_child_fkey(event_parent)")
        .order('start_time', ascending: true);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getAllUserGroupInfo() async {
    var data = await _supabase
        .from(UserGroupInfoModel.userGroupInfoTable)
        .select(
        "${UserGroupInfoModel.idColumn},"
        "${UserGroupInfoModel.titleColumn},"
        "user_info!leader(id, name, surname, email_readonly),"
        "${PlaceModel.placeTable}(*),"
        "${UserGroupInfoModel.descriptionColumn},"
        "${UserGroupInfoModel.userGroupsTable}(user_info(id, name, surname, email_readonly))");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    var data = await _supabase
        .from(UserGroupInfoModel.userGroupInfoTable)
        .select(
        "${UserGroupInfoModel.idColumn},"
            "${UserGroupInfoModel.titleColumn},"
            "user_info_public!leader(id, name, surname),"
            "${PlaceModel.placeTable}(*),"
            "${UserGroupInfoModel.descriptionColumn},"
            "${UserGroupInfoModel.userGroupsTable}(user_info_public(id, name, surname))")
    .eq(UserGroupInfoModel.idColumn, id)
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
      upsertObj.addAll({UserGroupInfoModel.descriptionColumn: model.description});
    }
    if(model.place != null)
    {
      model.place = await DataService.updatePlace(model.place!);
      upsertObj.addAll({UserGroupInfoModel.placeColumn: model.place!.id.toString()});
    }
    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({"id": model.id.toString()});
      eventData = await _supabase.from(UserGroupInfoModel.userGroupInfoTable).upsert(upsertObj).eq("id", model.id).select().single();
    }
    else
    {
      eventData = await _supabase.from(UserGroupInfoModel.userGroupInfoTable).insert(upsertObj).select().single();
    }
    var updated = UserGroupInfoModel.fromJson(eventData);
    await updateUserGroupParticipants(updated, model.participants);
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
        .from(UserGroupInfoModel.userGroupInfoTable)
        .delete()
        .eq("id", model.id);
    if(model.place!=null)
    {
      await _supabase
          .from(PlaceModel.placeTable)
          .delete()
          .eq("id", model.place!.id);
    }
  }

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    var upsertObj = {
      "title": model.title,
    };

    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({"id": model.id.toString()});
      eventData = await _supabase.from(ExclusiveGroupModel.exclusiveGroupsTable).update(upsertObj).eq("id", model.id).select().single();
    }
    else
    {
      eventData = await _supabase.from(ExclusiveGroupModel.exclusiveGroupsTable).insert(upsertObj).select().single();
    }
    var updated = ExclusiveGroupModel.fromJson(eventData);

    await _supabase
        .from('exclusive_events')
        .delete()
        .eq('group', updated.id);

    var insert = [];
    for(var e in model.events!)
    {
      insert.add({"group":updated.id, "event":e});
    }
    await _supabase
        .from('exclusive_events')
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
        .from('events')
        .select(
            "id, title, start_time, end_time, max_participants, split_for_men_women, is_group_event, description, places(id, title), event_groups!event_groups_event_parent_fkey(event_child)")
        .eq("id", eventId)
        .single();
    var event = EventModel.fromJson(data);
    if(event.childEventIds!=null)
    {
      var childEventsData = await _supabase
          .from('events')
          .select("id, title, start_time, end_time, max_participants, event_users(count)")
          .in_("id", event.childEventIds!)
          .order('start_time', ascending: true)
          .order('title', ascending: true);

      event.childEvents = List<EventModel>.from(
          childEventsData.map((x) => EventModel.fromJson(x)));

      if(isLoggedIn())
      {
        await loadIsCurrentUserSignedIn(event.childEvents);
      }
    }
    return event;
  }

  static Future<void> loadIsCurrentUserSignedIn(List<EventModel> events) async {
    List<dynamic> currentUserStatePerEventData = await _supabase
        .from('events')
        .select("id, event_users!inner(count)")
        .eq("event_users.user", currentUserId())
        .in_("id", events.map((e) => e.id).toList());

    Set<int> userSignedInEvents = currentUserStatePerEventData.where((c)=>c["event_users"][0]["count"]>0).map((c)=>c["id"] as int).toSet();
    for(var e in events)
    {
      e.isSignedIn = userSignedInEvents.contains(e.id!) ? true : false;
    }
  }

  static Future<UserGroupInfoModel?> getCurrentUserGroup() async {
    UserGroupInfoModel? group;
    var partOfGroup = await _supabase
    .from(UserGroupInfoModel.userGroupInfoTable)
    .select("id, title, user_info!leader(id), places(id)")
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
          .select("${UserGroupInfoModel.userGroupInfoTable}(id, title)")
          .eq("user", currentUserId())
          .limit(1)
          .maybeSingle();
      if(partOfGroup!=null)
      {
        group = UserGroupInfoModel.fromJson(partOfGroup[UserGroupInfoModel.userGroupInfoTable]);
      }
    }
    return group;
  }

  static Future<List<UserInfoModel>> getParticipantsPerEvent(int eventId) async {
    var data = await _supabase
      .from('event_users')
      .select("user, event, user_info_public(*)")
      .eq("event", eventId);
    return List<UserInfoModel>.from(data.map((par) => UserInfoModel.fromJson(par["user_info_public"])));
  }

  static Future<int> getParticipantsPerEventCount(int eventId) async {
    var result = await _supabase
        .from('event_users')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq("event", eventId);
    return result.count;
  }

  static Future<List<EventModel>> getParticipantEventTimes(String id) async {
    var data = await _supabase
        .from('event_users')
        .select("events(id, start_time, end_time)")
        .eq("user", id);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x["events"])));
  }

  static Future<bool> isCurrentUserSignedToEvent(int eventId) async {
    ensureUserIsLoggedIn();
    var result = await _supabase
        .from('event_users')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .eq("event", eventId)
        .eq("user", currentUserId());
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
          ToastHelper.Show("${trPrefix}{user} is already signed in at other event at the same time.".tr(namedArgs: {"user":participant.toString()}));
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
        .from('event_users')
        .delete()
        .eq("event", event.id!)
        .eq("user", finalId);

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
      "start_time": event.startTime.toIso8601String(),
      "end_time": event.endTime.toIso8601String(),
      "title": event.title,
      "max_participants": event.maxParticipants,
      "place": event.place?.id,
      "split_for_men_women": event.splitForMenWomen,
      "is_group_event": event.isGroupEvent,
    };
    if(event.description!=null) {
      upsertObj.addAll({"description": event.description});
    }
    dynamic eventData;
    if(event.id!=null) {
      upsertObj.addAll({"id": event.id});
      eventData = await _supabase.from('events').update(upsertObj).eq("id", event.id).select().single();
    }
    else
    {
      eventData = await _supabase.from('events').insert(upsertObj).select().single();
    }
    return EventModel.fromJson(eventData);
  }

  static updateEventAndParents(EventModel event) async {

    var updatedEvent = await updateEvent(event);
    await removeEventFromEventGroups(updatedEvent);

    var insert = [];
    for(var eParent in event.parentEventIds!)
    {
      insert.add({"event_child":updatedEvent.id, "event_parent":eParent});
    }
    await _supabase
        .from('event_groups')
        .insert(insert)
        .select();
  }

  static Future<void> removeEventFromEventGroups(EventModel updatedEvent) async {
    await _supabase
        .from('event_groups')
        .delete()
        .eq('event_child', updatedEvent.id);
  }

  static Future<void> deleteEvent(EventModel data) async {
    await _supabase
        .from('events')
        .delete()
        .eq("id", data.id);
  }

  static Future<void> updateInformation(InformationModel info) async {
    if(info.id == null)
    {
      await _supabase.from(InformationModel.informationTable).insert({
        InformationModel.titleColumn: info.title,
        InformationModel.descriptionColumn: info.description,
        InformationModel.isHiddenColumn: info.isHidden,
        InformationModel.orderColumn: info.order
      });
      return;
    }
    await _supabase.from(InformationModel.informationTable).upsert({
      InformationModel.titleColumn: info.title,
      InformationModel.idColumn: info.id,
      InformationModel.descriptionColumn: info.description,
      InformationModel.isHiddenColumn: info.isHidden,
      InformationModel.orderColumn: info.order
    }).select();
  }

  static Future<void> deleteInformation(InformationModel info) async {
    await _supabase
        .from(InformationModel.informationTable)
        .delete()
        .eq(InformationModel.idColumn, info.id);
  }

  static Future<List<UserInfoModel>> getAllUsersBasics() async {
    var data = await _supabase.from(UserInfoModel.userInfoTable)
        .select([UserInfoModel.idColumn, UserInfoModel.emailReadonlyColumn, UserInfoModel.nameColumn, UserInfoModel.surnameColumn].join(", "));
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
        .from("news")
        .select("id")
        .lt("created_at", message.createdAt)
        .order("created_at")
        .limit(1)
        .maybeSingle();

    if(lastMes!=null) {
      var currentUsers = await _supabase
          .from("user_news")
          .select("user")
          .eq("news_id", message.id);

      List<Map<String, dynamic>> toBeUpdated = [];
      for(var u in currentUsers) {
        toBeUpdated.add({
          "user": u["user"],
          "news_id": lastMes["id"]
        });
      }

      await _supabase
        .from('user_news')
        .upsert(toBeUpdated).select();
    }
    else {
      await _supabase
          .from('user_news')
          .delete()
          .eq("news_id", message.id);
    }

    await _supabase
        .from('news')
        .delete()
        .eq("id", message.id);

    ToastHelper.Show("Message has been removed.".tr());
  }

  static Future<void> updateNewsMessage(NewsModel message) async {
    await _supabase
        .from('news')
        .update({"message":message.message})
        .eq("id", message.id);
    ToastHelper.Show("Message has been changed.".tr());
  }

  static insertNewsMessage(String message, bool withNotification) async {
    await _supabase.from('news').insert(
        {"message": message, "created_by": currentUserId()}).select();

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
          {"content": basicMessage, "heading": _currentUser!.name??config.home_page}).select();

      ToastHelper.Show("Message has been sent.".tr());
      return;
    }
    ToastHelper.Show("Message has been created.".tr());

  }

  static Future<int> countNewMessages() async {
    ensureUserIsLoggedIn();
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from('news')
        .select('*', const FetchOptions(count: CountOption.exact, head: true))
        .gt("id", lastMessageId);
    return result.count;
  }

  static Future<int> getLastReadMessage() async {
    ensureUserIsLoggedIn();
    int lastMessageId = 0;
    var lastMessage = await _supabase
        .from("user_news")
        .select("news_id")
        .eq("user", currentUserId())
        .maybeSingle();
    if (lastMessage != null) {
      lastMessageId = lastMessage["news_id"];
    }
    return lastMessageId;
  }

  static void setMessagesAsRead(int newsId) async {
    ensureUserIsLoggedIn();
    await _supabase
        .from('user_news')
        .upsert({"user": currentUserId(), "news_id": newsId}).select();
  }

  static Future<List<NewsModel>> getNewsMessages() async {
    int lastReadMessageId = 0;
    if (isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var messagesData = await _supabase
        .from('news')
        .select('id, created_at, message, user_info_public(name, surname), user_news_views(count)')
        .order("created_at");
    List<NewsModel> loadedMessages = [];

    int viewsAggregate = 0;
    for (var row in messagesData) {
      DateTime createdAt = DateTime.parse(row['created_at']);
      String message = row['message'];
      var name = row[UserInfoModel.userInfoPublicTable] != null ? row['user_info_public']['name'] : "";
      NewsModel newsMessage = NewsModel(
          createdAt: createdAt,
          message: message,
          createdBy: name,
          id: row['id']);

      int views = row["user_news_views"].isEmpty ? 0 : row["user_news_views"][0]["count"];
      viewsAggregate+=views;
      newsMessage.views = viewsAggregate;
      if (isLoggedIn()) {
        newsMessage.isRead = lastReadMessageId >= newsMessage.id;
      }
      loadedMessages.add(newsMessage);
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

  static Future<void> SaveLocation(int placeId, double lat, double lng) async {
    if(!(DataService.isEditor() || (DataService.isGroupLeader() && DataService.currentUserGroup()!.place!.id == placeId)))
    {
      throw Exception("You cannot change this place.");
    }
    await _supabase.from("places").update({
      "coordinates": {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq("id", placeId);
    ToastHelper.Show("Place has been changed.".tr());
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
