import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion_settings/occasion_settings_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/information/db_information.dart';
import 'package:fstapp/components/inventory/db_inventory_pools.dart';
import 'package:fstapp/components/news/db_news.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/occasion/link_model.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SynchroService {
  static final _supabase = Supabase.instance.client;
  static OccasionSettingsModel? globalSettingsModel = OccasionSettingsModel.defaultSettings;

  static Future<void> refreshOfflineData() async {
    if(AuthService.isLoggedIn() && RightsService.currentOccasionId() != null) {
      var userInfo = await AuthService.getFullUserInfo();
      await OfflineDataService.saveUserInfo(userInfo);
      var bundle = await DbEvents.getMyEventsAndActivities(RightsService.currentOccasionId()!, true);
      await OfflineDataService.saveAllActivities(bundle!.activities);
      var userInventoryBundle = await DbInventoryPools.getUserInventory();
      await OfflineDataService.saveUserInventoryBundle(userInventoryBundle);
    }
    else {
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

    if (PlatformHelper.isPwaInstalledOrNative())
    {
      var events = await DbEvents.getAllEvents(RightsService.currentOccasionId()!, true);
      await OfflineDataService.saveAllEvents(events);
    }

    await DbEvents.synchronizeMySchedule();
  }

  static Future<OccasionLinkModel> getAppConfig(LinkModel link) async {
    print(link.occasionLink);
    print(link.formLink);

    var data = await _supabase.rpc("get_app_config_v217",
        params: {"data_in": {
          "link": link.occasionLink,
          "form_link": link.formLink,
          "unit_id": link.unitId,
          "organization": AppConfig.organization,
          "platform": await PlatformHelper.getPlatform()
        }});
    print(data);

    return OccasionLinkModel.fromJson(data);
  }

}

