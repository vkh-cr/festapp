import 'dart:collection';

import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/ExclusiveGroupModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class DbEvents {
  static final _supabase = Supabase.instance.client;

  static Future<void> loadEventsParticipantsAndStatus(List<EventModel> events)
  async {
    var data = await _supabase
        .from(Tb.events.table)
        .select("${Tb.events.id}, ${Tb.event_users.table}(count)")
        .inFilter(Tb.events.id, events.map((e)=>e.id).toList());

    var eventList = List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));

    if(AuthService.isLoggedIn())
    {
      await DbEvents.loadIsCurrentUserSignedIn(eventList);
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
    if(AuthService.isLoggedIn())
    {
      var remote = await loadAllMySchedule();
      set.addAll(remote);
    }

    for(var e in set)
    {
      var eq = events.firstWhereOrNull((element) => element.id == e.id);
      if(eq == null) {
        continue;
      }
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

        if(!AuthService.isLoggedIn()) {
          return data.toList();
        }

        var remote = await loadAllMySchedule();
        data.addAll(remote);
      } else if(!AuthService.isLoggedIn()) {
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
          .eq("${Tb.event_users.table}.${Tb.event_users.user}", AuthService.currentUserId())
          .eq(Tb.events.is_hidden, false)
          .eq(Tb.events.occasion, RightsService.currentOccasion!)
          .order(Tb.events.start_time, ascending: true)
          .order(Tb.events.max_participants, ascending: false);

      data.addAll(List<EventModel>.from(
          dataSignedIn.map((x) => EventModel.fromJson(x))));

      //join group events
      if(AuthService.hasGroup())
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
            .eq(Tb.events.occasion, RightsService.currentOccasion!)
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
        .eq(Tb.events.occasion, RightsService.currentOccasion!)
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
        .eq("${Tb.event_users_saved.table}.${Tb.event_users_saved.user}", AuthService.currentUserId())
        .eq(Tb.events.is_hidden, false)
        .eq(Tb.events.occasion, RightsService.currentOccasion!)
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
    var events = await OfflineDataService.getMyScheduleData();
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
        .eq(Tb.events.occasion, RightsService.currentOccasion!)
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
        .eq(Tb.events.occasion, RightsService.currentOccasion!)
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

  static Future<List<EventModel>> getAllEventsMeta() async {
    var data = await _supabase
        .from(Tb.events.table)
        .select(
        "${Tb.events.id},"
        "${Tb.events.updated_at}")
        .eq(Tb.events.is_hidden, false)
        .eq(Tb.events.occasion, RightsService.currentOccasion!);

    return List<EventModel>.from(
        data.map((x) => EventModel.fromJson(x)));
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

    var cachedEvent = await OfflineDataService.getEventDescription(eventId.toString());
    if(cachedEvent?.updatedAt!.isBefore(event.updatedAt!)??true) {
      var descrEvent = await getEventsDescription([event.id!]);
      event.description = descrEvent[0].description;
    } else {
      event.description = cachedEvent?.description;
    }

    if(AuthService.isLoggedIn()) {
      event.isEventInMySchedule = await isEventSaved(event.id!);
      event.isSignedIn = await DbEvents.isCurrentUserSignedToEvent(event.id!);
    } else {
      event.isEventInMySchedule = await OfflineDataService.isEventSaved(event.id!);
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

      if(AuthService.isLoggedIn())
      {
        await loadIsCurrentUserSignedIn(event.childEvents);
      }
    }
    if(event.isGroupEvent && AuthService.hasGroup())
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

  static signInToEvent(BuildContext context, int eventId, [UserInfoModel? participant]) async {
    var userId = participant?.id ?? AuthService.currentUserId();

    var result = await _supabase.rpc("sign_user_to_event",
        params: {"ev": eventId, "usr": userId});

    switch(result["code"])
    {
      case 200: {
        if(participant == null) {
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          ToastHelper.Show(context, "${trPrefix}You have been signed in.".tr());
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show(context, "${trPrefix}{user} has been signed in.".tr(namedArgs: {"user":participant.toString()}));
        }
        return;
      }
      case 403:
        ToastHelper.Show(context, "Cannot sign in!".tr(), severity: ToastSeverity.NotOk);
        return;
      case 100: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"Event is over.".tr()}", severity: ToastSeverity.NotOk); return;
      case 101: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"Event is full.".tr()}", severity: ToastSeverity.NotOk); return;
      case 102: {
        if(participant == null) {
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at an event of this type.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          var message = "${trPrefix}{user} is already signed in at an event of this type.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 103: {
        if(participant == null) {
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else {
          var trPrefix = participant.getGenderPrefix();
          var message = "${trPrefix}{user} is already signed in.".tr(namedArgs: {"user":participant.toString()});
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        return;
      }
      case 107: {
        if(participant == null) {
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          var message = "${trPrefix}You are already signed in at another event at the same time.".tr();
          ToastHelper.Show(context, "${"Cannot sign in!".tr()} $message", severity: ToastSeverity.NotOk);
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          ToastHelper.Show(context, "${trPrefix}{user} is already signed in at another event at the same time.".tr(namedArgs: {"user":participant.toString()}));
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

        ToastHelper.Show(context, "${"Cannot sign in!".tr()} $answerWhy",
            severity: ToastSeverity.NotOk); return;
      }
      case 105: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"There is already the maximum of men.".tr()}", severity: ToastSeverity.NotOk); return;
      case 106: ToastHelper.Show(context, "${"Cannot sign in!".tr()} ${"There is already the maximum of women.".tr()}", severity: ToastSeverity.NotOk); return;
    }
  }

  //avoid loosing participant count by updating each event individually
  static Future<void> updateEvents(List<EventModel> events, [bool onlyForSignedIn = false]) async {
    var updatedEvents = await getEventsForTimeline(onlyForSignedIn);
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
      if(e.isGroupEvent && AuthService.hasGroup())
      {
        e.title = AuthService.currentUserGroup()!.title;
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

  static Future<void> synchronizeMySchedule([bool join = false])
  async {
    if(!AuthService.isLoggedIn() || !AppConfig.isOwnProgramSupported){
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
    await OfflineDataService.saveMyScheduleData(currentUserEventIds);

    var values = [];
    for(var v in currentUserEventIds)
    {
      values.add({
        EventModel.eventUsersSavedUserColumn: AuthService.currentUserId(),
        Tb.event_users_saved.event: v
      });
    }
    if(join)
    {
      await _supabase.from(Tb.event_users_saved.table)
          .upsert(values);
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
      upsertObj.addAll({Tb.events.occasion: RightsService.currentOccasion!});
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

  static Future<List<ExclusiveGroupModel>> getAllExclusiveGroups() async {
    var data = await _supabase
        .from(Tb.exclusive_groups.table)
        .select(
        "${Tb.exclusive_groups.id}, "
        "${Tb.exclusive_groups.title}, "
        "${Tb.exclusive_events.table}(${Tb.exclusive_events.event})")
        .eq(Tb.exclusive_groups.occasion, RightsService.currentOccasion!);
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
      upsertObj.addAll({Tb.exclusive_groups.occasion: RightsService.currentOccasion!});
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
          var trPrefix = AuthService.currentUser!.getGenderPrefix();
          if(context!=null){
            ToastHelper.Show(context, "${trPrefix}You have been signed out.".tr());
          }
          return;
        }
        else{
          var trPrefix = participant.getGenderPrefix();
          if(context!=null) {
            ToastHelper.Show(context,
                "${trPrefix}{user} has been signed out.".tr(
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

  static Future<void> updateEventDescriptions() async {
    var needsUpdate = <int>[];
    var allEventsMeta = await DbEvents.getAllEventsMeta();

    for(var e in allEventsMeta) {
      var oe = await OfflineDataService.getEventDescription(e.id.toString());
      if(oe==null || oe.updatedAt==null || oe.updatedAt!.isBefore(e.updatedAt!)) {
        needsUpdate.add(e.id!);
      }
    }

    var fullEvents = await DbEvents.getEventsDescription(needsUpdate);
    for(var e in fullEvents) {
      await OfflineDataService.saveEventDescription(e);
    }
  }

  static Future<bool> hasEventAllowedRole(int eventId) async {
    var data = await _supabase.rpc("get_is_event_allowed",
        params: {"ev": eventId});
    return data;
  }
}
