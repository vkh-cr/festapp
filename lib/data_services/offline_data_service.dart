import 'dart:convert';
import 'dart:core';

import 'package:fstapp/components/inventory/models/user_inventory_bundle.dart'; // Added for UserInventoryBundle
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/components/news/news_model.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_model.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/services/storage_helper.dart';

import 'package:fstapp/components/activities/activity_model.dart';

import '../components/map/place_model.dart';
import '../components/occasion/occasion_model.dart';

class OfflineDataService {
  static const String myScheduleOffline = "mySchedule";
  static const String eventsOfflineStorage = "events";
  static const String informationOfflineStorage = "information";
  static const String activitiesOfflineStorage = "activities";
  static const String userInventoryBundleOffline =
      "userInventoryBundle"; // Added key for inventory

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
    if (!offlineData.contains(id)) {
      // Avoid duplicates
      offlineData.add(id);
      await saveMyScheduleData(offlineData);
    }
  }

  static Future<void> addAllToMySchedule(List<int> ids) async {
    var offlineData = await getMyScheduleData();
    for (var id in ids) {
      if (!offlineData.contains(id)) {
        // Avoid duplicates
        offlineData.add(id);
      }
    }
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

  static Future<void> updateEventsWithMySchedule(
      Iterable<EventModel> events) async {
    var myScheduleIds = await getMyScheduleData();
    for (var e in events) {
      e.isInMySchedule = myScheduleIds.contains(e.id!);
    }
  }

  static Future<void> updateEventsWithGroupName(
      Iterable<EventModel> events) async {
    var me = await getUserInfo();
    if (me?.eventUserGroup != null) {
      for (var e in events) {
        if (e.isGroupEvent ?? false) {
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

  static Future<void> saveAllPathGroups(List<PathGroupsModel> toSave) =>
      saveAllOffline(PathGroupsModel.pathsOffline, toSave);

  static Future<void> saveAllIcons(List<IconModel> toSave) =>
      saveAllOffline(IconModel.iconsOffline, toSave);

  static Future<List<PlaceModel>> getAllPlaces() =>
      getAllOffline(PlaceModel.placesOffline, PlaceModel.fromJson);

  static Future<List<PathGroupsModel>> getAllPathGroups() =>
      getAllOffline(PathGroupsModel.pathsOffline, PathGroupsModel.fromJson);

  static Future<List<IconModel>> getAllIcons() =>
      getAllOffline(IconModel.iconsOffline, IconModel.fromJson);

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

  static Future<OccasionSettingsModel?> getGlobalSettings() => getOffline(
      OccasionSettingsModel.globalSettingsOffline,
      OccasionSettingsModel.fromJson);

  static Future<void> saveAllEvents(List<EventModel> toSave) =>
      saveAllOffline(eventsOfflineStorage, toSave);

  static Future<List<EventModel>> getAllEvents() =>
      getAllOffline(eventsOfflineStorage, EventModel.fromJson);

  static Future<void> saveAllInfo(List<InformationModel> toSave) =>
      saveAllOffline(InformationModel.informationOffline, toSave);

  static Future<List<InformationModel>> getAllInfo() => getAllOffline(
      InformationModel.informationOffline, InformationModel.fromJson);

  static Future<void> saveAllActivities(List<ActivityModel> toSave) =>
      saveAllOffline(activitiesOfflineStorage, toSave);

  static Future<List<ActivityModel>> getAllActivities() =>
      getAllOffline(activitiesOfflineStorage, ActivityModel.fromJson);

  /// **Saves the entire `UserInventoryBundle` to offline storage.**
  static Future<void> saveUserInventoryBundle(UserInventoryBundle toSave) =>
      saveOffline(userInventoryBundleOffline, toSave);

  /// **Retrieves the `UserInventoryBundle` from offline storage.**
  static Future<UserInventoryBundle?> getUserInventoryBundle() =>
      getOffline(userInventoryBundleOffline, UserInventoryBundle.fromJson);

  /// **Deletes the `UserInventoryBundle` from offline storage.**
  static Future<void> deleteUserInventoryBundle() =>
      deleteOffline(userInventoryBundleOffline);

  /// **Clears all user-specific data from offline storage.**
  static Future<void> clearUserData() async {
    await deleteOffline(UserInfoModel.userInfoOffline);
    await deleteOffline(myScheduleOffline);
    await deleteOffline(activitiesOfflineStorage);
    await deleteOffline(userInventoryBundleOffline);
  }

  static Future<void> saveAllOffline<T>(
      String offlineTable, List<T> toSave) async {
    var encoded =
        jsonEncode(toSave.map((item) => (item as dynamic).toJson()).toList());
    await StorageHelper.set(offlineTable, encoded);
  }

  static Future<void> deleteOffline<T>(String id, [String? storage]) async {
    await StorageHelper.remove(id, storage);
  }

  static Future<void> saveOffline<T>(String id, T toSave,
      [String? storage]) async {
    // The toJson method of T will be called automatically by jsonEncode
    var encoded = jsonEncode(toSave);
    await StorageHelper.set(id, encoded, storage);
  }

  static Future<T?> getOffline<T>(
      String id, T Function(Map<String, dynamic>) fromJson,
      [String? storage]) async {
    try {
      var data = await StorageHelper.get(id, storage);
      if (data == null) {
        return null;
      }
      var js = json.decode(data) as Map<String, dynamic>; // Ensure it's a Map
      return fromJson(js);
    } catch (e) {
      //catch incompatibility fails
      // Error in getOffline
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
      var offlineData =
          json.decode(data) as List<dynamic>; // Ensure it's a List
      toReturn.addAll(List<T>.from(
          offlineData.map((o) => fromJson(o as Map<String, dynamic>))));
    } catch (e) {
      //catch incompatibility fails
      // Error in getAllOffline
    }
    return toReturn;
  }
}
