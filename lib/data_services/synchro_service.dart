import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_model.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/information/db_information.dart';
import 'package:fstapp/components/inventory/db_inventory_pools.dart';
import 'package:fstapp/components/news/db_news.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/components/occasion/link_model.dart';
import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/components/search/db_search.dart';
import 'package:fstapp/components/speakers/db_speakers.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SynchroService {
  static final _supabase = Supabase.instance.client;
  static OccasionSettingsModel? globalSettingsModel =
      OccasionSettingsModel.defaultSettings;

  // Injected callbacks — configured once at startup to break circular imports.
  static bool Function() _isLoggedIn = () => false;
  static Future<UserInfoModel> Function() _getFullUserInfo =
      () => throw StateError('SynchroService not configured');
  static int? Function() _getCurrentOccasionId = () => null;

  static void configure({
    required bool Function() isLoggedIn,
    required Future<UserInfoModel> Function() getFullUserInfo,
    required int? Function() getCurrentOccasionId,
  }) {
    _isLoggedIn = isLoggedIn;
    _getFullUserInfo = getFullUserInfo;
    _getCurrentOccasionId = getCurrentOccasionId;
  }

  static Future<void> refreshOfflineData() async {
    final occasionId = _getCurrentOccasionId();
    if (_isLoggedIn() && occasionId != null) {
      var userInfo = await _getFullUserInfo();
      await OfflineDataService.saveUserInfo(userInfo);
      var bundle =
          await DbEvents.getMyEventsAndActivities(occasionId, true);
      await OfflineDataService.saveAllActivities(bundle!.activities);
      var userInventoryBundle = await DbInventoryPools.getUserInventory();
      await OfflineDataService.saveUserInventoryBundle(userInventoryBundle);
    } else {
      await OfflineDataService.deleteUserInfo();
    }

    var places = await DbPlaces.getAllPlaces();
    await OfflineDataService.saveAllPlaces(places);

    var paths = await DbPlaces.getAllPathGroups();
    await OfflineDataService.saveAllPathGroups(paths);

    var icons = await DbPlaces.getAllIcons();
    await OfflineDataService.saveAllIcons(icons);

    var info = await DbInformation.getAllActiveInformation();
    await OfflineDataService.saveAllInfo(info);

    var messages = await DbNews.getAllNewsMessages();
    await OfflineDataService.saveAllMessages(messages);

    if (occasionId != null &&
        FeatureService.isFeatureEnabled(FeatureConstants.speakers)) {
      final speakers = await DbSpeakers.getSpeakers(occasionId,
          includeDescription: true);
      await OfflineDataService.saveSpeakers(speakers);
    }

    if (PlatformHelper.isPwaInstalledOrNative()) {
      var events = await DbEvents.getAllEvents(occasionId!, true);
      await OfflineDataService.saveAllEvents(events);
    }

    await DbEvents.synchronizeMySchedule();

    // Refresh the GlobalSearch offline index from the freshly cached data.
    await DbSearch.rebuildOfflineIndex();
  }

  static Future<OccasionLinkModel> getAppConfig(LinkModel link) async {


    var data = await _supabase.rpc("get_app_config_v217", params: {
      "data_in": {
        "link": link.occasionLink,
        "form_link": link.formLink,
        "unit_id": link.unitId,
        "organization": AppConfig.organization,
        "platform": await PlatformHelper.getPlatform()
      }
    });


    return OccasionLinkModel.fromJson(data);
  }
}
