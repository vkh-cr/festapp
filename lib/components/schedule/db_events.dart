import 'dart:collection';

import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/activities/activity_data_helper.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/workshop_feature.dart';
import 'package:fstapp/components/activities/activity_model.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/schedule/exclusive_group_model.dart';
import 'package:fstapp/database_tables/tb.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/data_extensions.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../map/place_model.dart';
import 'get_events_helper.dart';

class DbEvents {
  static final _supabase = Supabase.instance.client;

  static Future<HashSet<EventModel>> loadAllMySchedule() async {
    var dataEventUsersSaved = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
        "${Tb.events.type},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event},"
        "${Tb.event_users_saved.table}!inner(*)")
        .eq("${Tb.event_users_saved.table}.${Tb.event_users_saved.user}", AuthService.currentUserId())
        .eq(Tb.events.is_hidden, false)
        .eq(Tb.events.occasion, RightsService.currentOccasionId()!)
        .order(Tb.events.start_time, ascending: true)
        .order(Tb.events.max_participants, ascending: false);

    var remoteEvents = List<EventModel>.from(
        dataEventUsersSaved.map((x) => EventModel.fromJson(x)));
    for (var element in remoteEvents) {
      element.isInMySchedule = true;
    }
    var toReturn = EventModel.CreateEventModelSet();
    toReturn.addAll(remoteEvents);
    return toReturn;
  }

  static Future<HashSet<EventModel>> loadAllMyScheduleOffline() async {
    var events = await OfflineDataService.getMyScheduleData();
    var localData = await _supabase.from(Tb.events.table)
        .select("${Tb.events.id},"
        "${Tb.events.title},"
        "${Tb.events.start_time},"
        "${Tb.events.end_time},"
        "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
        "${Tb.events.type},"
        "${Tb.events.max_participants},"
        "${Tb.events.is_group_event}")
        .inFilter(Tb.events.id, events)
        .eq(Tb.events.is_hidden, false)
        .eq(Tb.events.occasion, RightsService.currentOccasionId()!)
        .order(Tb.events.start_time, ascending: true)
        .order(Tb.events.max_participants, ascending: false);
    var localEvents = List<EventModel>.from(
        localData.map((x) => EventModel.fromJson(x)));
    for (var element in localEvents) {
      element.isInMySchedule = true;
    }
    var toReturn = EventModel.CreateEventModelSet();
    toReturn.addAll(localEvents);
    return toReturn;
  }

  static Future<List<EventModel>> getAllEventsForDatagrid() async {
    final occasionId = RightsService.currentOccasionId();
    if (occasionId == null) {
      return [];
    }

    final data = await _supabase
        .rpc(
      'get_all_events_for_datagrid',
      params: {'p_occasion_id': occasionId},
    );

    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x as Map<String, dynamic>)));
  }

  static Future<EventModel> getEvent(int eventId, [bool withParent = false]) async {
    // with parents or children
    var withParentSelect = withParent ?
    "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_child}_fkey(${Tb.event_groups.event_parent})" :
    "${Tb.event_groups.table}!${Tb.event_groups.table}_${Tb.event_groups.event_parent}_fkey(${Tb.event_groups.event_child})";
    var data = await _supabase
        .from(Tb.events.table)
        .select(
            "${Tb.events.id},"
            "${Tb.events.updated_at},"
            "${Tb.events.occasion},"
            "${Tb.events.title},"
            "${Tb.events.description},"
            "${Tb.events.start_time},"
            "${Tb.events.end_time},"
            "${Tb.events.max_participants},"
            "${Tb.events.split_for_men_women},"
            "${Tb.events.is_group_event},"
            "${Tb.events.is_hidden},"
            "${Tb.events.type},"
            "${Tb.events.data},"
            "${Tb.places.table}(${Tb.places.id}, ${Tb.places.title}),"
            + withParentSelect
        )
        .eq(Tb.events.id, eventId)
        .single();
    var event = EventModel.fromJson(data);

    if(AuthService.isLoggedIn()) {
      event.isInMySchedule = await isEventSaved(event.id!);
      event.isSignedIn = await DbEvents.isCurrentUserSignedToEvent(event.id!);
    } else {
      event.isInMySchedule = await OfflineDataService.isEventSaved(event.id!);
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
          "${Tb.events.data},"
          "${Tb.event_users.table}(count)")
          .inFilter(Tb.events.id, event.childEventIds!)
          .eq(Tb.events.is_hidden, false);

      event.childEvents = List<EventModel>.from(
          childEventsData.map((x) => EventModel.fromJson(x))).sortEvents();

      if(AuthService.isLoggedIn())
      {
        await loadIsCurrentUserSignedIn(event.childEvents);
      }
    }
    if((event.isGroupEvent ?? false) && RightsService.hasGroup())
    {
      event.isMyGroupEvent = true;
    }

    return event;
  }

  static Future<void> loadIsCurrentUserSignedIn(List<EventModel> events) async {
    List<dynamic> currentUserStatePerEventData = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.event_users.table}!inner(count)")
        .eq("${Tb.event_users.table}.${Tb.event_users.user}", AuthService.currentUserId())
        .inFilter(Tb.events.id, events.map((e) => e.id).toList());

    Set<int> userSignedInEvents = currentUserStatePerEventData.where((c)=>c[Tb.event_users.table][0]["count"]>0).map((c)=>c["id"] as int).toSet();
    for(var e in events)
    {
      e.isSignedIn = userSignedInEvents.contains(e.id!) ? true : false;
    }
  }

  static Future<List<UserInfoModel>> getParticipantsPerEvent(int eventId) async {
    var data = await _supabase
        .from(Tb.event_users.table)
        .select(Tb.event_users.user)
        .eq(Tb.event_users.event, eventId);
    var listOfIds = List<String>.from(data.map((par) => par[Tb.event_users.user]));
    var users = await DbUsers.getUsersInfo(listOfIds);
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

  static Future<bool> isCurrentUserSignedToEvent(int eventId) async {
    var result = await _supabase
        .from(Tb.event_users.table)
        .select()
        .eq(Tb.event_users.event, eventId)
        .eq(Tb.event_users.user, AuthService.currentUserId())
        .count();
    return result.count > 0;
  }

  static Future<void> signInToEvent(BuildContext context, int eventId, [UserInfoModel? participant]) async {
    var userId = participant?.id ?? AuthService.currentUserId();

    var result = await _supabase.rpc("sign_user_to_event",
        params: {"ev": eventId, "usr": userId});

    switch(result["code"])
    {
      case 200: {
        if(participant == null) {
          var trPrefix = RightsService.currentUser()?.getGenderPrefix();
          ToastHelper.Show(context, "${trPrefix}You have been signed in.".tr());
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show(context, "$trPrefix{user} has been signed in.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      }
      case 100: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"Event is over.".tr()}", severity: ToastSeverity.NotOk); return;
      case 101: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"Event is full.".tr()}", severity: ToastSeverity.NotOk); return;
      case 102: {
        if(participant == null) {
          var trPrefix = RightsService.currentUser()?.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at an event of this type.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          var message = "$trPrefix{user} is already signed in at an event of this type.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 103: {
        if(participant == null) {
          var trPrefix = RightsService.currentUser()?.getGenderPrefix();
          var message = "${trPrefix}You are already signed in.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else {
          var trPrefix = participant.getGenderPrefix();
          var message = "$trPrefix{user} is already signed in.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 107: {
        if(participant == null) {
          var trPrefix = RightsService.currentUser()?.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at another event at the same time.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show(context, "$trPrefix{user} is already signed in at another event at the same time.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      }
      case 104: {
        String answerWhy = "It's too soon!".tr();
        if(result["events_registration_start"]!=null)
        {
          var start = DateTime.parse(result["events_registration_start"]).toOccasionTime();
          var datePart = DateFormat.MMMMEEEEd(context.locale.languageCode).format(start);
          var timePart = DateFormat.Hm(context.locale.languageCode).format(start);
          String startString = "$datePart $timePart";
          answerWhy = "You can sign in from {time}.".tr(namedArgs: {"time":startString});
        }

        var workshopsFeature = FeatureService.getFeatureDetails(FeatureConstants.workshops) as WorkshopsFeature;
        var message = workshopsFeature.registrationNotOpenMessage;
        if(message != null && message.isNotEmpty){
          answerWhy = workshopsFeature.registrationNotOpenMessage!;
          ToastHelper.Show(context, answerWhy,
              severity: ToastSeverity.NotOk); return;
        }

        ToastHelper.Show(context, "${"Cannot sign in!".tr()} $answerWhy",
            severity: ToastSeverity.NotOk); return;
      }
      case 105: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"There is already the maximum of men.".tr()}", severity: ToastSeverity.NotOk); return;
      case 106: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"There is already the maximum of women.".tr()}", severity: ToastSeverity.NotOk); return;
      //403, 108
      default:
        ToastHelper.Show(context, "Cannot sign in!".tr(), severity: ToastSeverity.NotOk);
        return;
    }
  }

  static Future<bool> isEventSaved(int id) async {
    var data = await _supabase
        .from(Tb.event_users_saved.table)
        .select()
        .eq(Tb.event_users_saved.event, id)
        .eq(Tb.event_users_saved.user, AuthService.currentUserId())
        .maybeSingle();
    return data != null;
  }

  static Future<void> removeFromMySchedule(BuildContext context, int id) async {
    if(AuthService.isLoggedIn()) {
      await _supabase
          .from(Tb.event_users_saved.table)
          .delete()
          .eq(Tb.event_users_saved.event, id)
          .eq(EventModel.eventUsersSavedUserColumn, AuthService.currentUserId());
    }
    await OfflineDataService.removeFromMySchedule(id);
    ToastHelper.Show(context, "Removed from My schedule.".tr());
  }

  static Future<bool> addToMySchedule(BuildContext context, int id) async {
    if(!AppConfig.isOwnProgramSupportedWithoutSignIn && !AuthService.isLoggedIn()) {
      ToastHelper.Show(context, "Before adding to 'My schedule', please sign in first.".tr());
      return false;
    }
    if(AuthService.isLoggedIn()) {
      await _supabase
          .from(Tb.event_users_saved.table)
          .insert({Tb.event_users_saved.event: id, EventModel.eventUsersSavedUserColumn: AuthService.currentUserId()});
    }
    await OfflineDataService.addToMySchedule(id);
    ToastHelper.Show(context, "Added to My schedule.".tr());
    return true;
  }

  static Future<void> synchronizeMySchedule({bool join = false, List<int>? currentIds})
  async {
    if(!AuthService.isLoggedIn() || !AppConfig.isOwnProgramSupported){
      return;
    }
    List<int> eventIdsToSynchronize = [];

    if(currentIds != null){
      eventIdsToSynchronize = currentIds;
    } else {
      // If currentIds are not provided, load remote events
      var remoteEvents = await loadAllMySchedule();
      eventIdsToSynchronize = remoteEvents.map((x) => x.id!).toList();
    }

    if (join) {
      var localEventsIds = await OfflineDataService.getMyScheduleData();
      eventIdsToSynchronize.addAll(localEventsIds);
      eventIdsToSynchronize = eventIdsToSynchronize.toSet().toList();
    }

    await OfflineDataService.saveMyScheduleData(eventIdsToSynchronize);

    if(!join){
      return;
    }

    await _supabase.rpc(
      'synchronize_my_schedule',
      params: {
        'p_event_ids': eventIdsToSynchronize,
        'p_join_mode': join,
      }
    );
  }

  static Future<EventModel> updateEvent(EventModel event) async
  {
    var upsertObj = event.toUpsertMap();

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
      upsertObj.addAll({Tb.events.occasion: RightsService.currentOccasionId()!});
      eventData = await _supabase.from(Tb.events.table).insert(upsertObj).select().single();
    }
    var updatedEvent = EventModel.fromJson(eventData);

    await removeEventFromEventGroups(updatedEvent);
    if(event.parentEventIds?.isNotEmpty ?? false) {
      var insert = [];
      for(var eParent in event.parentEventIds!)
      {
        insert.add({Tb.event_groups.event_child:updatedEvent.id, Tb.event_groups.event_parent:eParent});
      }
      await _supabase
          .from(Tb.event_groups.table)
          .insert(insert);
    }
    return updatedEvent;
  }

  static updateEventFromDataGrid(EventModel event) async {
    var updatedEvent = await updateEvent(event);

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

  static Future<List<ExclusiveGroupModel>> getAllExclusiveGroups() async {
    var data = await _supabase
        .from(Tb.exclusive_groups.table)
        .select(
        "${Tb.exclusive_groups.id}, "
        "${Tb.exclusive_groups.title}, "
        "${Tb.exclusive_events.table}(${Tb.exclusive_events.event})")
        .eq(Tb.exclusive_groups.occasion, RightsService.currentOccasionId()!);
    return List<ExclusiveGroupModel>.from(
        data.map((x) => ExclusiveGroupModel.fromJson(x)));
  }

  static updateExclusiveGroup(ExclusiveGroupModel model) async {
    Map<String, dynamic> upsertObj = {
      Tb.exclusive_groups.title: model.title,
    };

    dynamic eventData;
    if(model.id!=null) {
      upsertObj.addAll({Tb.exclusive_groups.id: model.id.toString()});
      eventData = await _supabase.from(Tb.exclusive_groups.table).update(upsertObj).eq(Tb.exclusive_groups.id, model.id!).select().single();
    }
    else
    {
      upsertObj.addAll({Tb.exclusive_groups.occasion: RightsService.currentOccasionId()!});
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

  static Future<void> signOutFromEvent(BuildContext? context, int eventId, [UserInfoModel? participant]) async {
    AuthService.ensureUserIsLoggedIn();
    var userId = participant?.id ?? AuthService.currentUserId();

    var result = await _supabase.rpc("sign_user_out_of_event",
        params: {"ev": eventId, "usr": userId});
    switch(result["code"]) {
      case 200:
        if(participant == null) {
          var trPrefix = RightsService.currentUser()?.getGenderPrefix();
          if(context!=null){
            ToastHelper.Show(context, "${trPrefix}You have been signed out.".tr());
          }
          return;
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          if(context!=null) {
            ToastHelper.Show(context,
                "$trPrefix{user} has been signed out.".tr(
                    namedArgs: {"user": participant.toString()}));
          }
        }
        return;
      case 201:
        if(context!=null) {
          ToastHelper.Show(context,
              "It is not possible to sign out from an event that has already taken place."
                  .tr(), severity: ToastSeverity.NotOk);
        }
        return;
    }
  }

  static Future<bool> hasEventAllowedRole(int eventId) async {
    var data = await _supabase.rpc("get_is_event_allowed",
        params: {"ev": eventId});
    return data;
  }

  static Future<List<EventModel>> getAllEvents(int occasionId, bool includeDescription) async {
    final response = await _supabase.rpc(
      'get_events',
      params: {
        'p_occasion': occasionId,
        'p_include_description': includeDescription,
      },
    );

    if (response['code'] != 200) return [];

    final json = response['data'] as Map<String, dynamic>;

    // root‐level arrays
    final eventsJson        = (json['events']           as List).cast<Map<String, dynamic>>();
    final placesList        = GetEventsHelper.parsePlaces(json);
    final groupsList        = GetEventsHelper.parseEventGroups(json);
    final rolesList         = GetEventsHelper.parseEventRoles(json);
    final usersCountList    = GetEventsHelper.parseEventUsers(json);
    final usersSavedList    = GetEventsHelper.parseEventUsersSaved(json);

    // build lookup maps
    final placeById    = { for (var p in placesList) p.id!: p };
    final groupsByParent = <int, List<EventGroupModel>>{};
    final parentsByChild = <int, List<EventGroupModel>>{};
    for (var g in groupsList) {
      groupsByParent.putIfAbsent(g.eventParent, () => []).add(g);
      parentsByChild.putIfAbsent(g.eventChild,    () => []).add(g);
    }
    final rolesByEvent = <int, List<int>>{};
    for (var r in rolesList) {
      rolesByEvent.putIfAbsent(r.eventId, () => []).add(r.roleId);
    }
    final usersByEvent     = { for (var u in usersCountList)     u.eventId: u.count };
    final savedByEvent     = { for (var s in usersSavedList)     s.eventId: s.count };

    // instantiate and populate each EventModel
    final events = <EventModel>[];
    for (var eJson in eventsJson) {
      final ev = EventModel.fromJson(eJson);
      // override place with full model if available
      if (ev.place?.id != null) {
        ev.place = placeById[ev.place!.id];
      }
      // assign child/parent IDs
      ev.childEventIds  = groupsByParent[ev.id!]?.map((g) => g.eventChild).toList();
      ev.parentEventIds = parentsByChild[ev.id!]?.map((g) => g.eventParent).toList();
      // assign roles and counts
      ev.eventRolesIds      = rolesByEvent[ev.id!];
      ev.currentParticipants = usersByEvent[ev.id!];
      ev.currentUsersSaved   = savedByEvent[ev.id!];
      events.add(ev);
    }
    
    for (var e in events){
      var children = events.where((ev) => ev.parentEventIds?.contains(e.id)??false).toList();
      e.childEvents = children;
    }

    // sort by start time, for example
    events.sort((a, b) => a.startTime.compareTo(b.startTime));
    return events;
  }

  // In YourServiceClass or relevant class containing getMyEventsAndActivities

  static Future<MyEventsBundle?> getMyEventsAndActivities(
      int occasionId,
      bool includeDescription
      ) async {
    final response = await _supabase.rpc(
      'get_my_events_and_activities', // Calling the updated SQL function
      params: {
        'p_occasion': occasionId,
        'p_include_description': includeDescription,
      },
    );

    if (response == null) {
      print('Failed to load my events bundle. Response was null.');
      return null;
    }

    if (response is! Map || response['code'] != 200) {
      final code = response is Map ? response['code'] : 'N/A';
      final message = response is Map ? response['message'] : response.toString();
      print('Failed to load my events bundle. Code: $code, Message: $message');
      return null;
    }

    final data = response['data'] as Map<String, dynamic>;

    // ---- EVENT PROCESSING (Main events) ----
    List<EventModel> events = GetEventsHelper.parseEvents(data);
    final List<PlaceModel> placesListForEvents = GetEventsHelper.parsePlaces(data);
    final List<EventUserCount> usersCountList = GetEventsHelper.parseEventUsers(data);
    final List<EventUserSavedCount> usersSavedList = GetEventsHelper.parseEventUsersSaved(data);
    final List<EventGroupModel> groupsList = GetEventsHelper.parseEventGroups(data);

    // build lookup maps
    final placeById    = { for (var p in placesListForEvents) p.id!: p };
    final groupsByParent = <int, List<EventGroupModel>>{};
    final parentsByChild = <int, List<EventGroupModel>>{};
    for (var g in groupsList) {
      groupsByParent.putIfAbsent(g.eventParent, () => []).add(g);
      parentsByChild.putIfAbsent(g.eventChild,    () => []).add(g);
    }

    final usersByEvent     = { for (var u in usersCountList)     u.eventId: u.count };
    final savedByEvent     = { for (var s in usersSavedList)     s.eventId: s.count };

    for (var ev in events) {
      if (ev.place?.id != null) {
        ev.place = placeById[ev.place!.id];
      }

      ev.childEventIds  = groupsByParent[ev.id!]?.map((g) => g.eventChild).toList();
      ev.parentEventIds = parentsByChild[ev.id!]?.map((g) => g.eventParent).toList();

      for (var e in events){
        var children = events.where((ev) => ev.parentEventIds?.contains(e.id)??false).toList();
        e.childEvents = children;
      }

      ev.currentParticipants = usersByEvent[ev.id!];
      ev.currentUsersSaved   = savedByEvent[ev.id!];
    }

    events = events.sortEvents();

    // ---- ACTIVITY PROCESSING ----
    final List<ActivityEventModel> activityRelatedEvents = ActivityDataHelper.parseEvents(data);
    final List<ActivityPlaceModel> activityRelatedPlaces = ActivityDataHelper.parsePlaces(data);
    final List<ActivityModel> activitiesList = ActivityDataHelper.parseActivities(data);
    final List<ActivityAssignmentModel> assignmentsList = ActivityDataHelper.parseActivityAssignments(data);
    final List<ActivityUserInfoModel> usersList = ActivityDataHelper.parseUsers(data);
    final userMapById = { for (var u in usersList) if (u.id != null) u.id!: u };

    final linkEventList = (data['assignment_events'] as List<dynamic>?)
        ?.map((item) => AssignmentEventLinkModel.fromJson(item as Map<String, dynamic>))
        .toList() ?? [];
    final linkPlaceList = (data['assignment_places'] as List<dynamic>?)
        ?.map((item) => AssignmentPlaceLinkModel.fromJson(item as Map<String, dynamic>))
        .toList() ?? [];

    final activityEventByIdMap = { for (var e in activityRelatedEvents) if (e.id != null) e.id!: e };
    final activityPlaceByIdMap = { for (var p in activityRelatedPlaces) if (p.id != null) p.id!: p };

    final eventsByAssignmentId = <String, List<int>>{};
    for (var link in linkEventList) {
      if (link.assignmentId != null && link.eventId != null) {
        eventsByAssignmentId.putIfAbsent(link.assignmentId!, () => []).add(link.eventId!);
      }
    }
    final placesByAssignmentId = <String, List<int>>{};
    for (var link in linkPlaceList) {
      if (link.assignmentId != null && link.placeId != null) {
        placesByAssignmentId.putIfAbsent(link.assignmentId!, () => []).add(link.placeId!);
      }
    }

    for (var assignment in assignmentsList) {
      final eventIdsForCurrentAssignment = eventsByAssignmentId[assignment.id] ?? [];
      assignment.events = eventIdsForCurrentAssignment
          .map((id) => activityEventByIdMap[id])
          .whereType<ActivityEventModel>()
          .toList();

      final placeIdsForCurrentAssignment = placesByAssignmentId[assignment.id] ?? [];
      assignment.places = placeIdsForCurrentAssignment
          .map((id) => activityPlaceByIdMap[id])
          .whereType<ActivityPlaceModel>()
          .toList();

      if (assignment.userInfo != null && userMapById.containsKey(assignment.userInfo)) {
        assignment.user = userMapById[assignment.userInfo!];
      }
    }

    // MODIFIED: The key of this map is changed from int to String to support UUIDs.
    final assignmentsByActivityId = <String, List<ActivityAssignmentModel>>{};
    for (var asg in assignmentsList) {
      final activityId = asg.activityId;
      if (activityId != null) {
        assignmentsByActivityId.putIfAbsent(activityId, () => []).add(asg);
      }
    }
    for (var activity in activitiesList) {
      activity.assignments = assignmentsByActivityId[activity.id] ?? [];
    }

    return MyEventsBundle(
      events: events,
      activities: activitiesList,
    );
  }
}

class MyEventsBundle {
  final List<EventModel> events;
  final List<ActivityModel> activities;

  MyEventsBundle({
    required this.events,
    required this.activities,
  });
}