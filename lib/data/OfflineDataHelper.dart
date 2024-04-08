import 'dart:convert';
import 'dart:core';

import 'package:festapp/models/EventModel.dart';
import 'package:festapp/models/InformationModel.dart';
import 'package:festapp/models/NewsModel.dart';
import 'package:festapp/models/OccasionSettingsModel.dart';
import 'package:festapp/models/PlaceModel.dart';
import 'package:festapp/models/UserInfoModel.dart';
import 'package:festapp/services/StorageHelper.dart';

class OfflineDataHelper {
  static const String myScheduleOffline = "mySchedule";
  static const String eventsOfflineStorage = "events";

  static void saveMyScheduleData(List<int> offlineData) {
    var encoded = jsonEncode(offlineData);
    StorageHelper.Set(myScheduleOffline, encoded);
  }

  static List<int> getMyScheduleData() {
    var eventData = StorageHelper.Get(myScheduleOffline);
    if (eventData == null) {
      return <int>[];
    }
    List<dynamic> offlineData = json.decode(eventData);
    return List<int>.from(offlineData.map((x) => x));
  }

  static void addToMySchedule(int id) {
    var offlineData = getMyScheduleData();
    offlineData.add(id);
    saveMyScheduleData(offlineData);
  }

  static void addAllToMySchedule(List<int> ids) {
    var offlineData = getMyScheduleData();
    offlineData.addAll(ids);
    saveMyScheduleData(offlineData);
  }

  static void removeFromMySchedule(int id) {
    var offlineData = getMyScheduleData();
    offlineData.remove(id);
    saveMyScheduleData(offlineData);
  }

  static bool isEventSaved(int id) {
    var offlineData = getMyScheduleData();
    return offlineData.contains(id);
  }

  static void updateEventsWithMySchedule(Iterable<EventModel> events) {
    var myScheduleIds = getMyScheduleData();
    for (var e in events) {
      if (myScheduleIds.contains(e.id!)) {
        e.isEventInMySchedule = true;
      }
      else{
        e.isEventInMySchedule = false;
      }
    }
  }

  static void updateEventsWithGroupName(Iterable<EventModel> events) {
    var me = getUserInfo();
    if(me?.userGroup!=null) {
      for (var e in events) {
        if (e.isGroupEvent) {
          e.title = me!.userGroup!.title;
          e.isMyGroupEvent = true;
        }
      }
    }
  }

  static void saveAllMessages(List<NewsModel> toSave) =>
      saveAllOffline(NewsModel.newsOffline, toSave);

  static List<NewsModel> getAllMessages() =>
      getAllOffline(NewsModel.newsOffline, NewsModel.fromJson);

  static void saveAllPlaces(List<PlaceModel> toSave) =>
      saveAllOffline(PlaceModel.placesOffline, toSave);

  static List<PlaceModel> getAllPlaces() =>
      getAllOffline(PlaceModel.placesOffline, PlaceModel.fromJson);

  static void saveEventDescription(EventModel toSave) =>
      saveOffline(toSave.id!.toString(), toSave, eventsOfflineStorage);

  static EventModel? getEventDescription(String id) =>
      getOffline(id, EventModel.fromJson, eventsOfflineStorage);

  static void saveUserInfo(UserInfoModel toSave) =>
      saveOffline(UserInfoModel.userInfoOffline, toSave);

  static void deleteUserInfo() =>
      deleteOffline(UserInfoModel.userInfoOffline);

  static UserInfoModel? getUserInfo() =>
      getOffline(UserInfoModel.userInfoOffline, UserInfoModel.fromJson);

  static void saveGlobalSettings(OccasionSettingsModel toSave) =>
      saveOffline(OccasionSettingsModel.globalSettingsOffline, toSave);

  static OccasionSettingsModel? getGlobalSettings() =>
      getOffline(OccasionSettingsModel.globalSettingsOffline, OccasionSettingsModel.fromJson);

  static void saveAllEvents(List<EventModel> toSave) =>
      saveAllOffline(eventsOfflineStorage, toSave);

  static List<EventModel> getAllEvents() =>
      getAllOffline(eventsOfflineStorage, EventModel.fromJson);

  static void saveAllInfo(List<InformationModel> toSave) =>
      saveAllOffline(InformationModel.informationOffline, toSave);

  static List<InformationModel> getAllInfo() => getAllOffline(
      InformationModel.informationOffline, InformationModel.fromJson);

  static void clearUserData() {
    deleteOffline(UserInfoModel.userInfoOffline);
    deleteOffline(myScheduleOffline);
  }

  static void saveAllOffline<T>(String offlineTable, List<T> toSave) {
    var encoded = jsonEncode(toSave);
    StorageHelper.Set(offlineTable, encoded);
  }

  static void deleteOffline<T>(String id, [String? storage]) {
    StorageHelper.Remove(id, storage);
  }

  static void saveOffline<T>(String id, T toSave, [String? storage]) {
    var encoded = jsonEncode(toSave);
    StorageHelper.Set(id, encoded, storage);
  }

  static T? getOffline<T>(
      String id, T Function(Map<String, dynamic>) fromJson, [String? storage]) {
    T? toReturn;
    try {
      var data = StorageHelper.Get(id, storage);
      if (data == null) {
        return toReturn;
      }
      var js = json.decode(data);
      return fromJson(js);
    } catch (e) {
      //catch incompatibility fails
    }
    return toReturn;
  }

  static List<T> getAllOffline<T>(
    String offlineTable, T Function(Map<String, dynamic>) fromJson) {
    List<T> toReturn = [];

    try {
      var data = StorageHelper.Get(offlineTable);
      if (data == null) {
        return toReturn;
      }
      var offlineData = json.decode(data);
      toReturn.addAll(List<T>.from(offlineData.map((o) => fromJson(o))));
    } catch (e) {
      //catch incompatibility fails
    }
    return toReturn;
  }

  static Future<void> initialize() async {
    await StorageHelper.Initialize();
    await StorageHelper.Initialize(eventsOfflineStorage);
  }
}
