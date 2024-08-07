import 'dart:collection';

import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/CompanionHelper.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
import 'package:fstapp/dataServices/RightsHelper.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/OccasionLinkModel.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/OccasionSettingsModel.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserGroupInfoModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataModels/InformationModel.dart';

import 'package:fstapp/dataModels/NewsModel.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:fstapp/appConfig.dart';
import 'package:html/parser.dart';


class DataService {
  static final _supabase = Supabase.instance.client;

  static const _secureStorage = FlutterSecureStorage();
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

  static OccasionSettingsModel? globalSettingsModel = OccasionSettingsModel.DefaultSettings;

  static Future<OccasionSettingsModel> loadOrInitGlobalSettings() async {
    OccasionSettingsModel toReturn;
    if(RightsHelper.currentOccasion == null) {
      toReturn =  OccasionSettingsModel.DefaultSettings;
    }
    else{
      var data = await _supabase
          .from(Tb.occasions.table)
          .select(Tb.occasions.data)
          .eq(Tb.occasions.id, RightsHelper.currentOccasion!)
          .single();

      toReturn = OccasionSettingsModel.fromJson(data[Tb.occasions.data]);
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

  static Future<void> login(String email, String password) async {
    var data = await _supabase.auth
        .signInWithPassword(email: email, password: password);
    await _secureStorage.write(
        key: REFRESH_TOKEN_KEY, value: data.session!.refreshToken.toString());
    synchronizeMySchedule(true);
    refreshOfflineData();
    await NotificationHelper.login();
  }

  static Future<void> logout() async {
    await NotificationHelper.logout().timeout(const Duration(seconds: 2));
    await OfflineDataHelper.clearUserData();
    await _supabase.auth.signOut(scope: SignOutScope.local);
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    _currentUser = null;
  }

  static Future<dynamic> resetPasswordForEmail(String email) async {
    return await _supabase.functions.invoke("email", body: {"email": email});
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
    var user = await DataService.getCurrentUserInfo();
    if(RightsHelper.currentUserOccasion?.role != null) {
      user.roleString = await DataService.getRoleInfo(RightsHelper.currentUserOccasion!.role!);
    }
    var myGroup = await getCurrentUserGroup();
    if(myGroup!=null) {
      user.userGroup = await getUserGroupInfo(myGroup.id!);
    }
    if(globalSettingsModel!.isEnabledEntryCode??false) {
      user.companions = await CompanionHelper.getAllCompanions();
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

  static Future<List<OccasionUserModel>> getOccasionUsers() async {
    var data = await _supabase.from(Tb.occasion_users.table).select().eq(Tb.occasion_users.occasion, RightsHelper.currentOccasion!);
    return List<OccasionUserModel>.from(data.map((x) => OccasionUserModel.fromJson(x))).sortedBy((ou)=>ou.createdAt!);
  }

  static Future<OccasionModel> getOccasion(int id) async {
    var data = await _supabase.from(Tb.occasions.table).select().eq(Tb.occasions.id, id).single();
    return OccasionModel.fromJson(data);
  }

  static Future<UserInfoModel> getUser(String id) async {
    var data = await _supabase.from(Tb.user_info.table).select().eq(Tb.user_info.id, id).single();
    return UserInfoModel.fromJson(data);
  }

  static Future<List<UserInfoModel>> getUsersInfo(List<String> userIds) async {
    var result = await _supabase.rpc("get_user_info_for_users",
        params: {"oc": RightsHelper.currentOccasion, "user_ids": userIds});
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

  static Future<String?> unsafeChangeUserPassword(OccasionUserModel occasionUserModel, String pwd) async {
    return await _supabase.rpc("set_user_password",
      params:
      {
        "usr": occasionUserModel.user,
        "oc": occasionUserModel.occasion??RightsHelper.currentOccasion,
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

  static Future<String?> unsafeCreateUser(int occasion, String email, String pw, dynamic data) async {
    var newId = await _supabase.rpc("create_user_with_data",
        params: {"oc": occasion, "email": email, "password": pw, "data": data});
    if (newId==null)
    {
      throw Exception("Creating of user has failed.");
    }
    return newId;
  }

  static updateOccasionUser(OccasionUserModel oum) async {
      await ensureCanUpdateUsers(oum);
      if (oum.user == null) {
        oum.user = await DataService.unsafeCreateUser(oum.occasion!, oum.data?[Tb.occasion_users.data_email], "", oum.data);
      } else {
        await _supabase.rpc("update_user",
            params: {"oc": oum.occasion!, "usr": oum.user!, "data": oum.data!});
        await addUserToCurrentOccasion(oum.user!, oum.occasion!);
      }

      if(oum.user!=null){
        await _supabase.from(Tb.occasion_users.table).upsert(
            oum.toUpdateJson()
        );
      }
  }

  static Future<void> addUserToCurrentOccasion(String id, int occasion) async {
    await _supabase.rpc("add_user_to_occasion",
      params:
      {
        "usr": id,
        "oc": occasion,
      });
  }

  static updateExistingImportedOccasionUser(OccasionUserModel oum) async {
    await ensureCanUpdateUsers(oum);
    await _supabase.from(Tb.occasion_users.table).upsert(
        oum.toImportedUpdateJson()
    );
    await updateUserInfo(oum);

  }

  static Future<void> ensureCanUpdateUsers(OccasionUserModel oum) async {
    if(!RightsHelper.canUpdateUsers())
    {
      await refreshSession();
      if(!RightsHelper.canUpdateUsers())
      {
        var errorText = "Elevated permission is required. Changes to user ${oum.data?[Tb.occasion_users.data_email]} could not be saved.";
        throw Exception(errorText);
      }
    }
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

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.is_hidden, false);
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces(false);
    return toReturn;
  }

  static Future<List<PlaceModel>> getAllPlaces() async {
    var data = await _supabase.from(Tb.places.table).select();
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<PlaceModel>> getPlacesIn(List<int> ids) async {
    var data = await _supabase.from(Tb.places.table)
        .select()
        .inFilter(Tb.places.id, ids);
    var toReturn = List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
    toReturn.sortPlaces();
    return toReturn;
  }

  static Future<List<IconModel>> getAllIcons() async {
    var data = await _supabase.from(Tb.icons.table).select();
    var toReturn = List<IconModel>.from(data.map((x) => IconModel.fromJson(x)));
    return toReturn;
  }

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(Tb.user_group_info.table)
        .select("${Tb.user_group_info.title}, ${Tb.places.table}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from(Tb.places.table).select().eq(Tb.places.id, id).single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> deletePlace(PlaceModel placeModel) async {
    await _supabase.from(Tb.places.table).delete().eq(Tb.places.id, placeModel.id!);
  }

  static Future<PlaceModel> updatePlace(PlaceModel placeModel) async
  {
    var json = placeModel.toJson();
    Map<String, dynamic> data;
    if(placeModel.id!=null) {
      data = await _supabase.from(Tb.places.table).update(json).eq(Tb.places.id, placeModel.id!).select().single();
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
    infoList.sortBy((element) => element.title??"".toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<List<InformationModel>> getAllActiveInformation() async {
    var data = await _supabase
        .from(Tb.information.table)
        .select(
          "${Tb.information.id},"
          "${Tb.information.updated_at},"
          "${Tb.information.order},"
          "${Tb.information.type},"
          "${Tb.information.title},"
          "${Tb.information.id}"
        )
        .eq(Tb.information.is_hidden, false);

    var infoList = List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
    infoList.sortBy((element) => element.title??"".toLowerCase());
    infoList.sort((a,b) => (a.getOrder().compareTo(b.getOrder())));
    return infoList;
  }

  static Future<void> loadEventsParticipantsAndStatus(List<EventModel> events)
  async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.event_users.table}(count)")
        .inFilter(Tb.events.id, events.map((e)=>e.id).toList());

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
          "${Tb.events.type},"
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
            "${Tb.events.type},"
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
            "${Tb.events.type},"
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
        "${Tb.events.type},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event},"
        "${Tb.event_users_saved.table}!inner(*)")
        .eq("${Tb.event_users_saved.table}.${Tb.event_users_saved.user}", currentUserId())
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
    var events = await OfflineDataHelper.getMyScheduleData();
    var localData = await _supabase.from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.events.place},"
        "${Tb.events.type},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event}")
        .inFilter(Tb.events.id, events)
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

  static Future<List<EventModel>> getAllEventsForDatagrid() async {
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
        "${Tb.events.type},"
        "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
        "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_child}_fkey(${Tb.event_groups.event_parent}),"
        "${Tb.event_roles.table}!${Tb.event_roles.event}(${Tb.event_roles.role}),"
        "${Tb.event_users_saved.table}(count),"
        "${Tb.event_users.table}(count)")
        .order(Tb.events.start_time, ascending: true);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<EventModel>> getEventsDescription(List<int> ids) async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.events.updated_at}, ${Tb.events.description}")
        .inFilter(Tb.events.id, ids);
    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<InformationModel>> getInfosDescription(Iterable<int> ids) async {
    var data = await _supabase
        .from(Tb.information.table)
        .select("${Tb.information.id}, ${Tb.information.updated_at}, ${Tb.information.description}")
        .inFilter(Tb.information.id, ids.toList());
    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
  }

  static Future<List<EventModel>> getAllEventsMeta() async {
    var data = await _supabase
        .from(Tb.events.table)
        .select(
            "${Tb.events.id},"
            "${Tb.events.updated_at}"
        );

    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
  }

  static Future<List<InformationModel>> getAllInfoMeta() async {
    var data = await _supabase
        .from(Tb.information.table)
        .select(
          "${Tb.information.id},"
          "${Tb.information.updated_at}"
    );

    return List<InformationModel>.from(
        data.map((x) => InformationModel.fromJson(x)));
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

  static Future<List<ExclusiveGroupModel>> getAllExclusiveGroups() async {
    var data = await _supabase
        .from(Tb.exclusive_groups.table)
        .select("${Tb.exclusive_groups.id}, ${Tb.exclusive_groups.title}, ${Tb.exclusive_events.table}(${Tb.exclusive_events.event})");
    return List<ExclusiveGroupModel>.from(
        data.map((x) => ExclusiveGroupModel.fromJson(x)));
  }

  static updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(RightsHelper.isEditor() || model.leader!.id == currentUserId()))
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
      model.place = await DataService.updatePlace(model.place!);
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

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    var upsertObj = {
      Tb.exclusive_groups.title: model.title,
    };

    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.exclusive_groups.id: model.id.toString()});
      eventData = await _supabase.from(Tb.exclusive_groups.table).update(upsertObj).eq(Tb.exclusive_groups.id, model.id!).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.exclusive_groups.table).insert(upsertObj).select().single();
    }
    var updated = ExclusiveGroupModel.fromJson(eventData);

    await _supabase
        .from(Tb.exclusive_events.table)
        .delete()
        .eq(Tb.exclusive_events.group, updated.id!);

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
        .from(Tb.exclusive_events.table)
        .delete()
        .eq(Tb.exclusive_events.group, data.id!);
    await _supabase
        .from(Tb.exclusive_groups.table)
        .delete()
        .eq(Tb.exclusive_groups.id, data.id!);
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
            "${Tb.events.is_hidden},"
            "${Tb.events.type},"
            "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
            "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_parent}_fkey(${Tb.event_groups.event_child})")
        .eq(Tb.events.id, eventId)
        .single();
    var event = EventModel.fromJson(data);

    var cachedEvent = await OfflineDataHelper.getEventDescription(eventId.toString());
    if(cachedEvent?.updatedAt!.isBefore(event.updatedAt!)??true) {
      var descrEvent = await getEventsDescription([event.id!]);
      event.description = descrEvent[0].description;
    } else {
      event.description = cachedEvent?.description;
    }

    if(isLoggedIn()) {
      event.isEventInMySchedule = await DataService.isEventSaved(event.id!);
      event.isSignedIn = await isCurrentUserSignedToEvent(event.id!);
    } else {
      event.isEventInMySchedule = await OfflineDataHelper.isEventSaved(event.id!);
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
          .inFilter(Tb.events.id, event.childEventIds!)
          .eq(Tb.events.is_hidden, false);

      event.childEvents = List<EventModel>.from(
          childEventsData.map((x) => EventModel.fromJson(x))).sortEvents();

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
        .inFilter(Tb.events.id, events.map((e) => e.id).toList());

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

  static Future<List<UserInfoModel>> getParticipantsPerEvent(int eventId) async {
    var data = await _supabase
      .from(Tb.event_users.table)
      .select(Tb.event_users.user)
      .eq(Tb.event_users.event, eventId);
    var listOfIds = List<String>.from(data.map((par) => par[Tb.event_users.user]));
    var users = await getUsersInfo(listOfIds);
    return users;
  }

  static Future<int> getParticipantsPerEventCount(int eventId) async {
    var result = await _supabase
        .from(Tb.event_users.table)
        .select()
        .eq(Tb.event_users.event, eventId)
        .count();
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
        .select()
        .eq(Tb.event_users.event, eventId)
        .eq(Tb.event_users.user, currentUserId())
        .count();
    return result.count > 0;
  }

  static signInToEvent(BuildContext context, int eventId, [UserInfoModel? participant]) async {
    ensureUserIsLoggedIn();
    var userId = participant?.id ?? currentUserId();

    var result = await _supabase.rpc("sign_user_to_event",
        params: {"ev": eventId, "usr": userId});

    switch(result["code"])
    {
      case 200: {
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
      case 403:
        ToastHelper.Show("Cannot sign in!".tr(), severity: ToastSeverity.NotOk);
        return;
      case 100: ToastHelper.Show("${"Cannot sign in!".tr()} ${"Event is over.".tr()}", severity: ToastSeverity.NotOk); return;
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
      case 107: {
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
      case 104: {
        String answerWhy = "It's too soon!".tr();
        if(result["events_registration_start"]!=null)
        {
          var start = DateTime.parse(result["events_registration_start"]).toLocal();
          var datePart = DateFormat.MMMMEEEEd(context.locale.languageCode).format(start);
          var timePart = DateFormat.Hm(context.locale.languageCode).format(start);
          String startString = "$datePart $timePart";
          answerWhy = "You can sign in from {time}.".tr(namedArgs: {"time":startString});
        }

        ToastHelper.Show("${"Cannot sign in!".tr()} $answerWhy",
          severity: ToastSeverity.NotOk); return;
      }
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

  static Future<void> signOutFromEvent(int eventId, [UserInfoModel? participant]) async {
    ensureUserIsLoggedIn();
    var userId = participant?.id ?? currentUserId();

    var result = await _supabase.rpc("sign_user_out_of_event",
        params: {"ev": eventId, "usr": userId});
    switch(result["code"]) {
      case 200:
        if(participant == null) {
          var trPrefix = _currentUser!.getGenderPrefix();
          ToastHelper.Show("${trPrefix}You have been signed out.".tr());
          return;
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show("${trPrefix}{user} has been signed out.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      case 201:
        ToastHelper.Show("It is not possible to sign out from an event that has already taken place.".tr(), severity: ToastSeverity.NotOk);
        return;
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
      Tb.events.type: event.type,
    };
    if(event.description!=null) {
      upsertObj.addAll({Tb.events.description: event.description});
    }
    dynamic eventData;
    if(event.id!=null) {
      upsertObj.addAll({Tb.events.id: event.id});
      eventData = await _supabase.from(Tb.events.table).update(upsertObj).eq(Tb.events.id, event.id!).select().single();
    }
    else
    {
      eventData = await _supabase.from(Tb.events.table).insert(upsertObj).select().single();
    }
    return EventModel.fromJson(eventData);
  }

  static updateEventFromDataGrid(EventModel event) async {
    var updatedEvent = await updateEvent(event);
    await removeEventFromEventGroups(updatedEvent);

    var insert = [];
    for(var eParent in event.parentEventIds!)
    {
      insert.add({Tb.event_groups.event_child:updatedEvent.id, Tb.event_groups.event_parent:eParent});
    }
    await _supabase
        .from(Tb.event_groups.table)
        .insert(insert);

    var insertRoles = [];
    for(var eParent in event.eventRolesIds!)
    {
      insertRoles.add({Tb.event_roles.event:updatedEvent.id, Tb.event_roles.role:eParent});
    }

    await _supabase
        .from(Tb.event_roles.table)
        .delete()
        .eq(Tb.event_roles.event, updatedEvent.id!);

    await _supabase
        .from(Tb.event_roles.table)
        .insert(insertRoles);
  }

  static Future<void> removeEventFromSaved(EventModel updatedEvent) async {
    await _supabase
        .from(Tb.event_users_saved.table)
        .delete()
        .eq(Tb.event_users_saved.event, updatedEvent.id!);
  }

  static Future<void> removeEventFromEventGroups(EventModel updatedEvent) async {
    await _supabase
        .from(Tb.event_groups.table)
        .delete()
        .eq(Tb.event_groups.event_child, updatedEvent.id!);
  }

  static Future<void> deleteEvent(EventModel data) async {
    await _supabase
        .from(Tb.events.table)
        .delete()
        .eq(Tb.events.id, data.id!);
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
        .eq(Tb.information.id, info.id!);
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

  static Future<void> deleteNewsMessage(NewsModel message) async {
    var lastMes = await _supabase
        .from(Tb.news.table)
        .select(Tb.news.id)
        .lt(Tb.news.created_at, message.createdAt!)
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

  static insertNewsMessage(String? heading, String headingDefault, String message, bool addToNews, bool withNotification, List<String>? to) async {
    if (addToNews) {
      var messageForNews = heading != null ? "<strong>$heading</strong><br>$message" : message;
      await _supabase.from(Tb.news.table).insert(
          {
            Tb.news.message: messageForNews,
            Tb.news.created_by: currentUserId()
          }
      ).select();
    }

    if (withNotification) {
      String basicMessage = "";
      var document = parse(message);
      for (var child in document.getElementsByTagName("p")) {
        var innerText = "${child.text}\n";
        if (innerText.trim().isEmpty) {
          continue;
        }
        basicMessage += innerText;
      }
      basicMessage = basicMessage.trim();
      await _supabase.from(Tb.log_notifications.table)
          .insert(
          {
            Tb.log_notifications.to: to,
            Tb.log_notifications.content: basicMessage,
            Tb.log_notifications.heading: heading ?? headingDefault
          }
      );

      ToastHelper.Show("Message has been sent.".tr());
      return;
    }

    if (addToNews) {
      ToastHelper.Show("Message has been created.".tr());
    }
  }

  static Future<int> countNewMessages() async {
    ensureUserIsLoggedIn();
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from(Tb.news.table)
        .select()
        .gt(Tb.news.id, lastMessageId)
        .count();
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
    if(!(RightsHelper.isEditor() || (DataService.isGroupLeader() && DataService.currentUserGroup()!.place!.id == placeId)))
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
        .from(Tb.event_users_saved.table)
        .select()
        .eq(Tb.event_users_saved.event, id)
        .eq(Tb.event_users_saved.user, currentUserId())
        .maybeSingle();
    return data != null;
  }

  static Future<void> removeFromMySchedule(int id) async {
    if(isLoggedIn()) {
      await _supabase
          .from(Tb.event_users_saved.table)
          .delete()
          .eq(Tb.event_users_saved.event, id)
          .eq(EventModel.eventUsersSavedUserColumn, currentUserId());
    }
    await OfflineDataHelper.removeFromMySchedule(id);
    ToastHelper.Show("Removed from My schedule.".tr());
  }

  static Future<bool> addToMySchedule(int id) async {
    if(!AppConfig.isOwnProgramSupportedWithoutSignIn && !isLoggedIn()) {
      ToastHelper.Show("Before adding to 'My schedule', please sign in first.".tr());
      return false;
    }
    if(isLoggedIn()) {
        await _supabase
            .from(Tb.event_users_saved.table)
            .insert({Tb.event_users_saved.event: id, EventModel.eventUsersSavedUserColumn: currentUserId()});
    }
    await OfflineDataHelper.addToMySchedule(id);
    ToastHelper.Show("Added to My schedule.".tr());
    return true;
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
    await OfflineDataHelper.saveMyScheduleData(currentUserEventIds);

    var values = [];
    for(var v in currentUserEventIds)
    {
      values.add({
        EventModel.eventUsersSavedUserColumn: currentUserId(),
        Tb.event_users_saved.event: v
      });
    }
    if(join)
    {
      await _supabase.from(Tb.event_users_saved.table)
          .upsert(values);
    }
  }

  static Future<void> refreshOfflineData() async {
    if(DataService.isLoggedIn()) {
      var userInfo = await getFullUserInfo();
      await OfflineDataHelper.saveUserInfo(userInfo);
    }
    else {
      await OfflineDataHelper.deleteUserInfo();
    }

    var places = await getAllPlaces();
    await OfflineDataHelper.saveAllPlaces(places);

    var icons = await getAllIcons();
    await OfflineDataHelper.saveAllIcons(icons);

    var info = await getAllActiveInformation();
    await OfflineDataHelper.saveAllInfo(info);

    var messages = await getAllNewsMessages();
    await OfflineDataHelper.saveAllMessages(messages);

    if (isPwaInstalledOrNative() )
    {
      await updateEventDescriptions();
      await updateInfoDescription();
    }

    await DataService.synchronizeMySchedule();
  }

  static bool isPwaInstalledOrNative() => !const bool.fromEnvironment('dart.library.js_util') || PWAInstall().launchMode!.installed ;

  static Future<void> updateEventDescriptions() async {
    var needsUpdate = <int>[];
    var allEventsMeta = await getAllEventsMeta();

    for(var e in allEventsMeta) {
      var oe = await OfflineDataHelper.getEventDescription(e.id.toString());
      if(oe==null || oe.updatedAt==null || oe.updatedAt!.isBefore(e.updatedAt!)) {
          needsUpdate.add(e.id!);
      }
    }

    var fullEvents = await getEventsDescription(needsUpdate);
    for(var e in fullEvents) {
      await OfflineDataHelper.saveEventDescription(e);
    }
  }

  static Future<void> updateInfoDescription([List<int>? infoIds]) async {
    var needsUpdate = <int>[];
    var allMeta = await getAllInfoMeta();

    List<InformationModel> infosToCheck;
    if (infoIds != null) {
      infosToCheck = allMeta.where((e) => infoIds.contains(e.id)).toList();
    } else {
      infosToCheck = allMeta;
    }

    await _checkForUpdates(infosToCheck, needsUpdate);

    if (needsUpdate.isNotEmpty) {
      var fullEvents = await getInfosDescription(needsUpdate);
      for (var e in fullEvents) {
        await OfflineDataHelper.saveInfoDescription(e);
      }
    }
  }

  static Future<void> _checkForUpdates(List<InformationModel> infosToCheck, List<int> needsUpdate) async {
    for (var infoMeta in infosToCheck) {
      var oe = await OfflineDataHelper.getInfoDescription(infoMeta.id.toString());
      if (oe == null || oe.updatedAt == null || oe.updatedAt!.isBefore(infoMeta.updatedAt!)) {
        needsUpdate.add(infoMeta.id!);
      }
    }
  }


  static Future<OccasionLinkModel> checkOccasionLink(String link) async {
    var data = await _supabase.rpc("check_occasion_link",
        params: {"link_txt": link});
    return OccasionLinkModel.fromJson(data);
  }
  static Future<bool> hasEventAllowedRole(int eventId) async {
    var data = await _supabase.rpc("get_is_event_allowed",
        params: {"ev": eventId});
    return data;
  }

  static Future<void> ImportFromSingleToMultipleEventType() async {
    var data = await _supabase.from(Tb.user_info.table).select();
    var allUsers = List<UserInfoModel>.from(data.map((x) => UserInfoModel.fromJson(x)));
    List<OccasionUserModel> insertOu = [];
    var ou = await getOccasionUsers();
    for(var userInfo in allUsers){
      if(!ou.any((element) => element.user==userInfo.id))
      {
        insertOu.add(
            OccasionUserModel(
              user: userInfo.id,
              isEditor: userInfo.isEditor!,
              isManager: false,
              isApprover: false,
              isApproved: false,
              occasion: 1,
              data:{
                Tb.occasion_users.data_email: userInfo.email,
                Tb.occasion_users.data_sex: userInfo.sex,
                Tb.occasion_users.data_name: userInfo.name,
                Tb.occasion_users.data_surname: userInfo.surname,
                Tb.occasion_users.data_phone: userInfo.phone,
                Tb.occasion_users.data_accommodation: userInfo.accommodation,
                Tb.occasion_users.data_birthDate: userInfo.birthDate?.toIso8601String(),
                Tb.occasion_users.data_isInvited: true,
              }
            )
        );
      }
    }
    for(var usr in insertOu){
      await _supabase.from(Tb.occasion_users.table).insert(usr.toUpdateJson());
    }

  }

  static Future<Map<String, dynamic>> register(Map<String, dynamic> data) async {
    var resp = await _supabase.functions.invoke("register", body: data);
    return resp.data;
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
