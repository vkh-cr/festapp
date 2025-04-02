import 'dart:convert';
import 'dart:core';

import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/IconModel.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/NewsModel.dart';
import 'package:fstapp/dataModels/OccasionSettingsModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/services/StorageHelper.dart';

import '../dataModels/OccasionModel.dart';

class OfflineDataService {
  static const String myScheduleOffline = "mySchedule";
  static const String eventsOfflineStorage = "events";
  static const String informationOfflineStorage = "information";

  static Future<void> saveMyScheduleData(List<int> offlineData) async {
    var encoded = jsonEncode(offlineData);
    await StorageHelper.set(myScheduleOffline, encoded);
  }

  static Future<List<int>> getMyScheduleData() async {
    var eventData = await StorageHelper.get(myScheduleOffline);
    if (eventData == null) {
      return <int>[];
    }
    List<dynamic> offlineData = json.decode(eventData);
    return List<int>.from(offlineData.map((x) => x));
  }

  static Future<void> addToMySchedule(int id) async {
    var offlineData = await getMyScheduleData();
    offlineData.add(id);
    await saveMyScheduleData(offlineData);
  }

  static Future<void> addAllToMySchedule(List<int> ids) async {
    var offlineData = await getMyScheduleData();
    offlineData.addAll(ids);
    await saveMyScheduleData(offlineData);
  }

  static Future<void> removeFromMySchedule(int id) async {
    var offlineData = await getMyScheduleData();
    offlineData.remove(id);
    await saveMyScheduleData(offlineData);
  }

  static Future<bool> isEventSaved(int id) async {
    var offlineData = await getMyScheduleData();
    return offlineData.contains(id);
  }

  static Future<void> updateEventsWithMySchedule(Iterable<EventModel> events) async {
    var myScheduleIds = await getMyScheduleData();
    for (var e in events) {
      e.isEventInMySchedule = myScheduleIds.contains(e.id!);
    }
  }

  static Future<void> updateEventsWithGroupName(Iterable<EventModel> events) async {
    var me = await getUserInfo();
    if (me?.eventUserGroup != null) {
      for (var e in events) {
        if (e.isGroupEvent) {
          e.title = me!.eventUserGroup!.title;
          e.isMyGroupEvent = true;
        }
      }
    }
  }

  static Future<void> saveAllOccasions(List<OccasionModel> toSave) =>
      saveAllOffline(OccasionModel.occasionsOffline, toSave);

  static Future<List<OccasionModel>> getAllOccasions() =>
      getAllOffline(OccasionModel.occasionsOffline, OccasionModel.fromJson);

  static Future<void> saveAllMessages(List<NewsModel> toSave) =>
      saveAllOffline(NewsModel.newsOffline, toSave);

  static Future<List<NewsModel>> getAllMessages() =>
      getAllOffline(NewsModel.newsOffline, NewsModel.fromJson);

  static Future<void> saveAllPlaces(List<PlaceModel> toSave) =>
      saveAllOffline(PlaceModel.placesOffline, toSave);

  static Future<void> saveAllIcons(List<IconModel> toSave) =>
      saveAllOffline(IconModel.iconsOffline, toSave);

  static Future<List<PlaceModel>> getAllPlaces() =>
      getAllOffline(PlaceModel.placesOffline, PlaceModel.fromJson);

  static Future<List<IconModel>> getAllIcons() =>
      getAllOffline(IconModel.iconsOffline, IconModel.fromJson);

  static Future<void> saveEventDescription(EventModel toSave) =>
      saveOffline(toSave.id!.toString(), toSave, eventsOfflineStorage);

  static Future<EventModel?> getEventDescription(String id) =>
      getOffline(id, EventModel.fromJson, eventsOfflineStorage);

  static Future<void> saveInfoDescription(InformationModel toSave) =>
      saveOffline(toSave.id!.toString(), toSave, informationOfflineStorage);

  static Future<InformationModel?> getInfoDescription(String id) =>
      getOffline(id, InformationModel.fromJson, informationOfflineStorage);

  static Future<void> saveUserInfo(UserInfoModel toSave) =>
      saveOffline(UserInfoModel.userInfoOffline, toSave);

  static Future<void> deleteUserInfo() =>
      deleteOffline(UserInfoModel.userInfoOffline);

  static Future<UserInfoModel?> getUserInfo() =>
      getOffline(UserInfoModel.userInfoOffline, UserInfoModel.fromJson);

  static Future<void> saveGlobalSettings(OccasionSettingsModel toSave) =>
      saveOffline(OccasionSettingsModel.globalSettingsOffline, toSave);

  static Future<OccasionSettingsModel?> getGlobalSettings() =>
      getOffline(OccasionSettingsModel.globalSettingsOffline, OccasionSettingsModel.fromJson);

  static Future<void> saveAllEvents(List<EventModel> toSave) =>
      saveAllOffline(eventsOfflineStorage, toSave);

  static Future<List<EventModel>> getAllEvents() =>
      getAllOffline(eventsOfflineStorage, EventModel.fromJson);

  static Future<void> saveAllInfo(List<InformationModel> toSave) =>
      saveAllOffline(InformationModel.informationOffline, toSave);

  static Future<List<InformationModel>> getAllInfo() =>
      getAllOffline(InformationModel.informationOffline, InformationModel.fromJson);

  static Future<void> clearUserData() async {
    await deleteOffline(UserInfoModel.userInfoOffline);
    await deleteOffline(myScheduleOffline);
  }

  static Future<void> saveAllOffline<T>(String offlineTable, List<T> toSave) async {
    var encoded = jsonEncode(toSave);
    await StorageHelper.set(offlineTable, encoded);
  }

  static Future<void> deleteOffline<T>(String id, [String? storage]) async {
    await StorageHelper.remove(id, storage);
  }

  static Future<void> saveOffline<T>(String id, T toSave, [String? storage]) async {
    var encoded = jsonEncode(toSave);
    await StorageHelper.set(id, encoded, storage);
  }

  static Future<T?> getOffline<T>(
      String id, T Function(Map<String, dynamic>) fromJson, [String? storage]) async {
    try {
      var data = await StorageHelper.get(id, storage);
      if (data == null) {
        return null;
      }
      var js = json.decode(data);
      return fromJson(js);
    } catch (e) {
      //catch incompatibility fails
      return null;
    }
  }

  static Future<List<T>> getAllOffline<T>(
      String offlineTable, T Function(Map<String, dynamic>) fromJson) async {
    List<T> toReturn = [];

    try {
      var data = await StorageHelper.get(offlineTable);
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
}
