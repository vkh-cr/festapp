import 'package:av_app/models/UserGroupInfoModel.dart';
import 'package:av_app/models/UserInfoModel.dart';
import 'package:av_app/models/InformationModel.dart';

import 'package:av_app/models/NewsMessage.dart';
import 'package:av_app/services/DialogHelper.dart';
import 'package:av_app/services/ToastHelper.dart';
import 'package:collection/collection.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/EventModel.dart';
import '../models/ExclusiveGroupModel.dart';
import '../models/ParticipantModel.dart';
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
      var result = await DialogHelper.showStringInputDialog(NavigationService.navigatorKey.currentContext!, "Zadejte service_role key ze supabase", "vložte zde", "Storno", "Ok");
    _supabaseAdmin = SupabaseClient(_supabase.supabaseUrl, result!);
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

  static Future<UserInfoModel> getCurrentUserInfo() async {
    if(_currentUser == null){
      return await loadCurrentUserData();
    }
    return _currentUser!;
  }

  static bool isAdmin() {
    return _currentUser != null && _currentUser!.isAdmin!;
  }

  static bool isReceptionAdmin() {
    return _currentUser != null && _currentUser!.isReceptionAdmin!;
  }

  static Future<String> createUser(String email) async {
    var data = await (await GetSupabaseAdminClient()).auth.admin.createUser(AdminUserAttributes(email: email, emailConfirm: true));
    return data.user!.id;
  }

  static Future<void> updateUserPassword(String uuid, String password) async {
    (await GetSupabaseAdminClient()).auth.admin.updateUserById(uuid, attributes: AdminUserAttributes(password: password));
  }

  static Future<void> deleteUser(String uuid) async {
    ensureCanDeleteCritical();
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
  }

  static Future<void> logout() async {
    _secureStorage.delete(key: REFRESH_TOKEN_KEY);
    _currentUser = null;
    await _supabase.auth.signOut();
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

  static updateUser(UserInfoModel data) async {
    if (!DataService.isLoggedIn()) {
      return;
    }
    //todo change email individually
    await _supabase.from(UserInfoModel.userInfoTable).upsert({
      UserInfoModel.idColumn: data.id,
      UserInfoModel.emailColumn: data.email,
      UserInfoModel.nameColumn: data.name,
      UserInfoModel.surnameColumn: data.surname,
      UserInfoModel.sexColumn: data.sex,
      UserInfoModel.roleColumn: data.role,
      UserInfoModel.accommodationColumn: data.accommodation,
      UserInfoModel.phoneColumn: data.phone,
      UserInfoModel.isAdminColumn: data.isAdmin,
      UserInfoModel.isReceptionAdminColumn: data.isReceptionAdmin,

    });
  }

  static Future<List<PlaceModel>> getMapPlaces() async {
    var data = await _supabase.from('places').select().eq("is_hidden", false);
    return List<PlaceModel>.from(data.map((x) => PlaceModel.fromJson(x)));
  }

  static Future<List<UserGroupInfoModel>> getGroupsWithPlaces() async {
    var data = await _supabase.from(UserGroupInfoModel.userGroupInfoTable)
        .select("${UserGroupInfoModel.titleColumn}, ${PlaceModel.placeTable}(*)");
    return List<UserGroupInfoModel>.from(data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<PlaceModel> getPlace(int id) async {
    var data = await _supabase.from('places').select().eq("id", id).single();
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
          .order('start_time', ascending: true);

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
        .order('start_time', ascending: true);

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

  static Future<List<UserGroupInfoModel>> getUserGroupInfoList() async {
    var data = await _supabase
        .from(UserGroupInfoModel.userGroupInfoTable)
        .select(
        "${UserGroupInfoModel.idColumn},"
        "${UserGroupInfoModel.titleColumn},"
        "user_info!leader(id, name, surname, email),"
        "${PlaceModel.placeTable}(*),"
        "${UserGroupInfoModel.descriptionColumn},"
        "${UserGroupInfoModel.userGroupsTable}(user_info(id, name, surname, email))");
    return List<UserGroupInfoModel>.from(
        data.map((x) => UserGroupInfoModel.fromJson(x)));
  }

  static Future<UserGroupInfoModel?> getUserGroupInfo(int id) async {
    var data = await _supabase
        .from(UserGroupInfoModel.userGroupInfoTable)
        .select(
        "${UserGroupInfoModel.idColumn},"
            "${UserGroupInfoModel.titleColumn},"
            "user_info!leader(id, name, surname, email),"
            "${PlaceModel.placeTable}(*),"
            "${UserGroupInfoModel.descriptionColumn},"
            "${UserGroupInfoModel.userGroupsTable}(user_info(id, name, surname, email))")
    .eq(UserGroupInfoModel.idColumn, id)
    .maybeSingle();
    if(data==null)
    {
      return null;
    }
    return UserGroupInfoModel.fromJson(data);
  }

  static Future<List<ExclusiveGroupModel>> getExclusiveGroups() async {
    var data = await _supabase
        .from(ExclusiveGroupModel.exclusiveGroupsTable)
        .select("${ExclusiveGroupModel.idColumn}, ${ExclusiveGroupModel.titleColumn}, exclusive_events(event)");
    return List<ExclusiveGroupModel>.from(
        data.map((x) => ExclusiveGroupModel.fromJson(x)));
  }

  static updateUserGroupInfo(UserGroupInfoModel model) async {
    if(!(isAdmin() || model.leader!.id == currentUserId()))
    {
      ToastHelper.Show("Must be leader or admin to change the group.", severity: ToastSeverity.NotOk);
      return;
    }
    if(model.leader == null)
    {
      throw Exception("Cannot save group without leader");
    }
    var upsertObj = {
      UserGroupInfoModel.titleColumn: model.title,
      UserGroupInfoModel.leaderColumn: model.leader!.id,
    };

    if(model.description != null)
    {
      upsertObj.addAll({UserGroupInfoModel.descriptionColumn: model.description});
    }
    if(model.place != null)
    {
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

    await _supabase
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("group", updated.id);

    for(var p in model.participants)
    {
      await _supabase
          .from(UserGroupInfoModel.userGroupsTable)
          .insert({"group":updated.id, "user":p.id});
    }
  }

  static deleteUserGroupInfo(UserGroupInfoModel model) async {
    ensureIsAdmin();
    await _supabase
        .from(UserGroupInfoModel.userGroupsTable)
        .delete()
        .eq("group", model.id);
    await _supabase
        .from(UserGroupInfoModel.userGroupInfoTable)
        .delete()
        .eq("id", model.id);
    await _supabase
        .from(PlaceModel.placeTable)
        .delete()
        .eq("id", model.place!.id);
  }

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    ensureIsAdmin();
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
    ensureIsAdmin();
    await _supabase
        .from(ExclusiveGroupModel.exclusiveGroupsTable)
        .delete()
        .eq("id", data.id);
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
    UserGroupInfoModel? id;
    var partOfGroup = await _supabase
    .from(UserGroupInfoModel.userGroupInfoTable)
    .select("id, title, user_info!leader(id), places(id)")
    .eq(UserGroupInfoModel.leaderColumn, currentUserId())
    .maybeSingle();
    if(partOfGroup!=null)
    {
      id = UserGroupInfoModel.fromJson(partOfGroup);
    }
    if(id==null)
    {
      partOfGroup = await _supabase
          .from(UserGroupInfoModel.userGroupsTable)
          .select("${UserGroupInfoModel.userGroupInfoTable}(id, title)")
          .eq("user", currentUserId())
          .maybeSingle();
      if(partOfGroup!=null)
      {
        id = UserGroupInfoModel.fromJson(partOfGroup[UserGroupInfoModel.userGroupInfoTable]);
      }
    }
    return id;
  }

  static Future<List<ParticipantModel>> getParticipantsPerEvent(int eventId) async {
    var data = await _supabase
      .from('event_users')
      .select("user, event, user_info(email, name, surname)")
      .eq("event", eventId);
    return List<ParticipantModel>.from(data.map((par) => ParticipantModel(
        par["user"],
        par["user_info"]["email"],
        par["user_info"]["name"],
        par["user_info"]["surname"])));
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

  static signInToEvent(int eventId, [ParticipantModel? participant]) async {
    ensureUserIsLoggedIn();
    var userId = participant?.id ?? currentUserId();
    //check for max participants
    var event = await getEvent(eventId);

    if (event.endTime.isBefore(DateTime.now())) {
      ToastHelper.Show("Nelze přihlásit! Událost už proběhla.", severity: ToastSeverity.NotOk);
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
          ToastHelper.Show(
              "Nelze přihlásit! Už jsi ${gText("přihlášen", "přihlášena")} na jiné události ve stejném čase.", severity: ToastSeverity.NotOk);
        }
        else{
          ToastHelper.Show(
              "Nelze přihlásit! $participant je přihlášen na jiné události ve stejném čase.", severity: ToastSeverity.NotOk);
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
          ToastHelper.Show("${gText("Byl", "Byla")} jsi ${gText("přihlášen", "přihlášena")}.");
        }
        else{
          ToastHelper.Show("Přihlášen $participant.");
        }
        return;
      }
      case 101: ToastHelper.Show("Nelze přihlásit! Událost byla zaplněna.", severity: ToastSeverity.NotOk); return;
      case 102: {
        if(participant == null) {
          ToastHelper.Show("Nelze přihlásit! Už jsi ${gText("přihlášen", "přihlášena")} na události tohoto typu.", severity: ToastSeverity.NotOk);
        }
        else{
          ToastHelper.Show("Nelze přihlásit! $participant už je přihlášen na události tohoto typu.", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 103: {
        if(participant == null) {
          ToastHelper.Show("Nelze přihlásit! Už jsi ${gText("přihlášen", "přihlášena")}.", severity: ToastSeverity.NotOk); return;
        }
        else{
          ToastHelper.Show("Nelze přihlásit! $participant už je přihlášen.", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 104: ToastHelper.Show("Nelze přihlásit! Přihlašovat se můžeš od čtvrtku 17.8.2023 9:00.", severity: ToastSeverity.NotOk); return;
      case 105: ToastHelper.Show("Nelze přihlásit! Na událost už je přihlášeno maximum mužů.", severity: ToastSeverity.NotOk); return;
      case 106: ToastHelper.Show("Nelze přihlásit! Na událost už je přihlášeno maximum žen.", severity: ToastSeverity.NotOk); return;
    }
  }

  static ensureUserIsLoggedIn(){
    if(!DataService.isLoggedIn())
    {
      throw Exception("User must be logged in.");
    }
  }

  static ensureIsAdmin(){
    if(!DataService.isAdmin())
    {
      throw Exception("User must be admin.");
    }
  }

  static var canDeleteListEmails = ["bujnmi@gmail.com", "konarovae@gmail.com", "anezkazavadilova@seznam.cz", "anezkazavadilova@seznam.cz", "milijany@seznam.cz"];
  static ensureCanDeleteCritical(){
    if(!canDeleteListEmails.contains(currentUserEmail()))
    {
      throw Exception("You cannot delete.");
    }
  }

  static signOutFromEvent(EventModel event, [ParticipantModel? participant]) async {
    ensureUserIsLoggedIn();
    var finalId = participant?.id ?? _supabase.auth.currentUser?.id;

    if(!isAdmin() && DateTime.now().isAfter(event.endTime))
    {
      ToastHelper.Show("Není možné se odhlásit z události, která už proběhla.", severity: ToastSeverity.NotOk);
      return;
    }

    await _supabase
        .from('event_users')
        .delete()
        .eq("event", event.id!)
        .eq("user", finalId);

    if(participant == null) {
      ToastHelper.Show("${gText("Byl", "Byla")} jsi ${gText("odhlášen", "odhlášena")}.", severity: ToastSeverity.NotOk); return;
    }
    else{
      ToastHelper.Show("Odhlášen $participant.");
    }
  }

  static Future<EventModel> updateEvent(EventModel event) async
   {
    ensureIsAdmin();
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
    ensureIsAdmin();
    ensureCanDeleteCritical();
    await _supabase
        .from('events')
        .delete()
        .eq("id", data.id);
  }

  static Future<PlaceModel> updatePlace(PlaceModel model) async {
    ensureIsAdmin();
    if(model.id == null)
    {
      var data = await _supabase.from(PlaceModel.placeTable).insert({
        PlaceModel.titleColumn: model.title,
        PlaceModel.descriptionColumn: model.description,
        PlaceModel.isHiddenColumn: model.isHidden,
        PlaceModel.coordinatesColumn: {"latLng" : model.latLng},
        PlaceModel.typeColumn: model.type,
      }).select().single();
      return PlaceModel.fromJson(data);
    }
    var data = await _supabase.from(PlaceModel.placeTable).upsert({
      PlaceModel.idColumn: model.id,
      PlaceModel.titleColumn: model.title,
      PlaceModel.descriptionColumn: model.description,
      PlaceModel.isHiddenColumn: model.isHidden,
      PlaceModel.coordinatesColumn: {"latLng" : model.latLng},
      PlaceModel.typeColumn: model.type,
    }).select().single();
    return PlaceModel.fromJson(data);
  }

  static Future<void> updateInformation(InformationModel info) async {
    ensureIsAdmin();
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
    ensureIsAdmin();
    ensureCanDeleteCritical();
    await _supabase
        .from(InformationModel.informationTable)
        .delete()
        .eq(InformationModel.idColumn, info.id);
  }

  static Future<List<ParticipantModel>> getAllParticipants() async {
    List<ParticipantModel> toReturn = [];
    var result =
        await _supabase.from(UserInfoModel.userInfoTable)
            .select([UserInfoModel.idColumn, UserInfoModel.emailColumn, UserInfoModel.nameColumn, UserInfoModel.surnameColumn].join(", "));
    for (var p in result) {
      toReturn.add(ParticipantModel(p[UserInfoModel.idColumn], p[UserInfoModel.emailColumn], p[UserInfoModel.nameColumn], p[UserInfoModel.surnameColumn]));
    }
    return toReturn;
  }

  static Future<List<UserInfoModel>> getAllUsersBasics() async {
    var data = await _supabase.from(UserInfoModel.userInfoTable)
        .select([UserInfoModel.idColumn, UserInfoModel.emailColumn, UserInfoModel.nameColumn, UserInfoModel.surnameColumn].join(", "));
    return List<UserInfoModel>.from(
        data.map((x) => UserInfoModel.fromJson(x)));
  }

  static Future<void> deleteNewsMessage(NewsMessage message) async {
    ensureIsAdmin();
    await _supabase
        .from('user_news')
        .delete()
        .eq("news_id", message.id);
    await _supabase
        .from('news')
        .delete()
        .eq("id", message.id);
    ToastHelper.Show("Ohláška byla smazána.");
  }

  static Future<void> updateNewsMessage(NewsMessage message) async {
    ensureIsAdmin();
    await _supabase
        .from('news')
        .update({"message":message.message})
        .eq("id", message.id);
    ToastHelper.Show("Ohláška byla změněna!.");
  }

  static insertNewsMessage(String message) async {
    ensureIsAdmin();
    await _supabase.from('news').insert(
        {"message": message, "created_by": currentUserId()}).select();
    ToastHelper.Show("Zpráva byla odeslána!");
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

  static Future<List<NewsMessage>> getNewsMessages() async {
    int lastReadMessageId = 0;
    if (isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var messagesData = await _supabase
        .from('news')
        .select('id, created_at, message, user_info(name, surname)')
        .order("created_at");
    List<NewsMessage> loadedMessages = [];

    for (var row in messagesData) {
      DateTime createdAt = DateTime.parse(row['created_at']);
      String message = row['message'];
      var name = row[UserInfoModel.userInfoTable] != null ? row['user_info']['name'] : "";
      NewsMessage newsMessage = NewsMessage(
          createdAt: createdAt,
          message: message,
          createdBy: name,
          id: row['id']);
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
        cmp = a.title!.compareTo(b.title!);
      }
      return cmp;
    });
  }

  static Future<void> SaveLocation(int placeId, double lat, double lng) async {
    if(!(DataService.isAdmin() || (DataService.isGroupLeader() && DataService.currentUserGroup()!.place!.id == placeId)))
    {
      ToastHelper.Show("You do have no rights to change this position.", severity: ToastSeverity.NotOk);
      return;
    }
    await _supabase.from("places").update({
      "coordinates": {
        "latLng": {"lat": lat, "lng": lng}
      }
    }).eq("id", placeId);
    ToastHelper.Show("Pozice změněna!");
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
