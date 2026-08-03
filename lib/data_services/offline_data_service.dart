import 'dart:convert';
import 'dart:core';

import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/inventory/models/user_inventory_bundle.dart'; // Added for UserInventoryBundle
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/speakers/speakers_bundle.dart';
import 'package:fstapp/components/map/icon_model.dart';
import 'package:fstapp/components/icons/place_type_model.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/components/news/news_model.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_model.dart';
import 'package:fstapp/components/map/path_group_model.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/services/storage_helper.dart';
import 'package:fstapp/data_services/client_sync/client_sync_runtime.dart';
import 'package:fstapp/data_services/client_sync/client_sync_projection.dart';
import 'package:fstapp/data_services/client_sync/client_sync_protocol.dart';

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
  static const String speakersOfflineStorage = "speakers";
  static const String cleaningStatusOfflineStorage = "cleaningStatus";
  static const String eventFeedbackOfflineStorage = "eventFeedback";

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
    if (ClientSyncRuntime.isV1Selected) {
      final program = await ClientSyncRuntime.readPrivate(
        ClientSyncComponent.privateProgram,
      );
      return program is Map &&
          ((program['saved'] as List?) ?? const []).contains(id);
    }
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
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.news()
          : getAllOffline(NewsModel.newsOffline, NewsModel.fromJson);

  static Future<void> saveAllPlaces(List<PlaceModel> toSave) =>
      saveAllOffline(PlaceModel.placesOffline, toSave);

  static Future<void> saveAllPathGroups(List<PathGroupsModel> toSave) =>
      saveAllOffline(PathGroupsModel.pathsOffline, toSave);

  static Future<void> saveAllIcons(List<IconModel> toSave) =>
      saveAllOffline(IconModel.iconsOffline, toSave);

  static Future<void> saveAllPlaceTypes(List<PlaceTypeModel> toSave) =>
      saveAllOffline(PlaceTypeModel.placeTypesOffline, toSave);

  static Future<List<PlaceModel>> getAllPlaces() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.places()
          : getAllOffline(PlaceModel.placesOffline, PlaceModel.fromJson);

  static Future<List<PathGroupsModel>> getAllPathGroups() => ClientSyncRuntime
          .isV1Selected
      ? ClientSyncProjection.paths()
      : getAllOffline(PathGroupsModel.pathsOffline, PathGroupsModel.fromJson);

  static Future<List<IconModel>> getAllIcons() => ClientSyncRuntime.isV1Selected
      ? ClientSyncProjection.icons()
      : getAllOffline(IconModel.iconsOffline, IconModel.fromJson);

  static Future<List<PlaceTypeModel>> getAllPlaceTypes() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.placeTypes()
          : getAllOffline(
              PlaceTypeModel.placeTypesOffline, PlaceTypeModel.fromJson);

  /// Timestamp of the last completed refreshOfflineData run — one stamp for
  /// the whole bundle, shown by the offline banner.
  static const String lastSyncedAtOffline = "lastSyncedAt";

  static Future<void> saveLastSyncedAt(DateTime time) async {
    final normalized = time.toUtc();
    final stored = await StorageHelper.get(lastSyncedAtOffline);
    final previous = stored == null ? null : DateTime.tryParse(stored)?.toUtc();
    if (previous != null && previous.isAfter(normalized)) return;
    await StorageHelper.set(lastSyncedAtOffline, normalized.toIso8601String());
  }

  static Future<DateTime?> getLastSyncedAt() async {
    final raw = await StorageHelper.get(lastSyncedAtOffline);
    return resolveOfflineBannerTimestamp(
      legacyTimestamp: raw == null ? null : DateTime.tryParse(raw),
      clientSyncTimestamp: ClientSyncRuntime.latestLastSuccess,
    )?.toLocal();
  }

  /// Last place-type filter selected on the map, restored on the next visit.
  static const String selectedPlaceTypeOffline = "selectedPlaceType";

  static Future<void> saveSelectedPlaceType(String code) =>
      StorageHelper.set(selectedPlaceTypeOffline, code);

  static Future<String?> getSelectedPlaceType() =>
      StorageHelper.get(selectedPlaceTypeOffline);

  static Future<void> saveInfoDescription(InformationModel toSave) =>
      saveOffline(toSave.id!.toString(), toSave, informationOfflineStorage);

  static Future<InformationModel?> getInfoDescription(String id) =>
      getOffline(id, InformationModel.fromJson, informationOfflineStorage);

  static Future<void> saveUserInfo(UserInfoModel toSave) =>
      saveOffline(UserInfoModel.userInfoOffline, toSave);

  static Future<void> deleteUserInfo() =>
      deleteOffline(UserInfoModel.userInfoOffline);

  static Future<UserInfoModel?> getUserInfo() => ClientSyncRuntime.isV1Selected
      ? ClientSyncProjection.userInfo()
      : getOffline(UserInfoModel.userInfoOffline, UserInfoModel.fromJson);

  static Future<void> saveGlobalSettings(OccasionSettingsModel toSave) =>
      saveOffline(OccasionSettingsModel.globalSettingsOffline, toSave);

  static Future<OccasionSettingsModel?> getGlobalSettings() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.occasionSettings()
          : getOffline(OccasionSettingsModel.globalSettingsOffline,
              OccasionSettingsModel.fromJson);

  static Future<void> saveAllEvents(List<EventModel> toSave) =>
      saveAllOffline(eventsOfflineStorage, toSave);

  static Future<List<EventModel>> getAllEvents() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.events()
          : getAllOffline(eventsOfflineStorage, EventModel.fromJson);

  static Future<void> saveSpeakers(SpeakersBundle toSave) =>
      saveOffline(speakersOfflineStorage, toSave);

  static Future<SpeakersBundle?> getSpeakers() => ClientSyncRuntime.isV1Selected
      ? ClientSyncProjection.speakers()
      : getOffline(speakersOfflineStorage, SpeakersBundle.fromJson);

  /// Caches the public per-toilet cleaning statuses together with the time
  /// they were fetched. Public data only — not part of [clearUserData].
  static Future<void> saveCleaningStatus(
          List<CleaningPlaceStatus> places, DateTime fetchedAt) =>
      saveOffline(cleaningStatusOfflineStorage, {
        "places": places.map((p) => p.toJson()).toList(),
        "fetchedAt": fetchedAt.toUtc().toIso8601String(),
      });

  /// The cached cleaning statuses with their fetch time, or null when the
  /// cache is empty or unreadable.
  static Future<({List<CleaningPlaceStatus> places, DateTime fetchedAt})?>
      getCleaningStatus() async {
    if (ClientSyncRuntime.isV1Selected) {
      return (
        places: await ClientSyncProjection.cleaningStatus(),
        fetchedAt: ClientSyncRuntime.lastSuccess(SyncFreshnessClass.live) ??
            DateTime.fromMillisecondsSinceEpoch(0),
      );
    }
    final json = await getOffline<Map<String, dynamic>>(
        cleaningStatusOfflineStorage, (j) => j);
    if (json == null) return null;
    final fetchedAt = DateTime.tryParse(json["fetchedAt"]?.toString() ?? "");
    if (fetchedAt == null) return null;
    final places = ((json["places"] as List?) ?? const [])
        .map((e) =>
            CleaningPlaceStatus.fromJson((e as Map).cast<String, dynamic>()))
        .toList();
    return (places: places, fetchedAt: fetchedAt.toLocal());
  }

  static Future<void> saveAllInfo(List<InformationModel> toSave) =>
      saveAllOffline(InformationModel.informationOffline, toSave);

  static Future<List<InformationModel>> getAllInfo() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.information()
          : getAllOffline(
              InformationModel.informationOffline, InformationModel.fromJson);

  static Future<void> saveAllActivities(List<ActivityModel> toSave) =>
      saveAllOffline(activitiesOfflineStorage, toSave);

  static Future<List<ActivityModel>> getAllActivities() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.activities()
          : getAllOffline(activitiesOfflineStorage, ActivityModel.fromJson);

  /// Caches "my feedback" for one event (one `{eventId: feedbackJson}` object
  /// for all events) so the widget can show the submitted state offline.
  /// Per-user data — cleared by [clearUserData]. A null [json] removes the
  /// event's entry (feedback deleted).
  static Future<void> saveMyEventFeedback(
      int eventId, Map<String, dynamic>? json) async {
    final all = await getOffline<Map<String, dynamic>>(
            eventFeedbackOfflineStorage, (j) => j) ??
        <String, dynamic>{};
    if (json == null) {
      all.remove(eventId.toString());
    } else {
      all[eventId.toString()] = json;
    }
    await saveOffline(eventFeedbackOfflineStorage, all);
  }

  /// The cached "my feedback" json for an event, or null when none is cached.
  static Future<Map<String, dynamic>?> getMyEventFeedback(int eventId) async {
    final all = await getOffline<Map<String, dynamic>>(
        eventFeedbackOfflineStorage, (j) => j);
    final entry = all?[eventId.toString()];
    return entry is Map ? entry.cast<String, dynamic>() : null;
  }

  /// **Saves the entire `UserInventoryBundle` to offline storage.**
  static Future<void> saveUserInventoryBundle(UserInventoryBundle toSave) =>
      saveOffline(userInventoryBundleOffline, toSave);

  /// **Retrieves the `UserInventoryBundle` from offline storage.**
  static Future<UserInventoryBundle?> getUserInventoryBundle() =>
      ClientSyncRuntime.isV1Selected
          ? ClientSyncProjection.userInventory()
          : getOffline(
              userInventoryBundleOffline, UserInventoryBundle.fromJson);

  /// **Deletes the `UserInventoryBundle` from offline storage.**
  static Future<void> deleteUserInventoryBundle() =>
      deleteOffline(userInventoryBundleOffline);

  /// **Clears all user-specific data from offline storage.**
  static Future<void> clearUserData() async {
    await deleteOffline(UserInfoModel.userInfoOffline);
    await deleteOffline(myScheduleOffline);
    await deleteOffline(activitiesOfflineStorage);
    await deleteOffline(userInventoryBundleOffline);
    await deleteOffline(eventFeedbackOfflineStorage);
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

DateTime? resolveOfflineBannerTimestamp({
  required DateTime? legacyTimestamp,
  required DateTime? clientSyncTimestamp,
}) {
  if (legacyTimestamp == null) return clientSyncTimestamp;
  if (clientSyncTimestamp == null) return legacyTimestamp;
  return clientSyncTimestamp.isAfter(legacyTimestamp)
      ? clientSyncTimestamp
      : legacyTimestamp;
}
