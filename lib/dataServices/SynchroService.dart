import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/OccasionLinkModel.dart';
import 'package:fstapp/dataModels/OccasionSettingsModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/DbNews.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/PlatformHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class SynchroService {
  static final _supabase = Supabase.instance.client;
  static OccasionSettingsModel? globalSettingsModel = OccasionSettingsModel.defaultSettings;

  static Future<OccasionSettingsModel> loadOrInitOccasionSettings() async {
    OccasionSettingsModel toReturn;
    if(RightsService.currentOccasionId == null) {
      toReturn =  OccasionSettingsModel.defaultSettings;
    }
    else{
      var data = await _supabase
          .from(Tb.occasions.table)
          .select("${Tb.occasions.data}, ${Tb.occasions.services}, ${Tb.occasions.start_time}, ${Tb.occasions.end_time}", )
          .eq(Tb.occasions.id, RightsService.currentOccasionId!)
          .single();

      toReturn = OccasionSettingsModel.fromJson(data);
    }

    globalSettingsModel = toReturn;
    return toReturn;
  }

  static Future<void> refreshOfflineData() async {
    if(AuthService.isLoggedIn()) {
      var userInfo = await AuthService.getFullUserInfo();
      await OfflineDataService.saveUserInfo(userInfo);
    }
    else {
      await OfflineDataService.deleteUserInfo();
    }

    var places = await DbPlaces.getAllPlaces();
    await OfflineDataService.saveAllPlaces(places);

    var icons = await DbPlaces.getAllIcons();
    await OfflineDataService.saveAllIcons(icons);

    var info = await DbInformation.getAllActiveInformation();
    await OfflineDataService.saveAllInfo(info);

    var messages = await DbNews.getAllNewsMessages();
    await OfflineDataService.saveAllMessages(messages);

    if (PlatformHelper.isPwaInstalledOrNative())
    {
      await DbEvents.updateEventDescriptions();
      await DbInformation.updateInfoDescription();
    }

    await DbEvents.synchronizeMySchedule();
  }

  static Future<OccasionLinkModel> getAppConfig({String? occasionLink, String? formLink}) async {
    print(occasionLink);
    print(formLink);

    var data = await _supabase.rpc("get_app_config_v2",
        params: {"data_in": {
          "link": occasionLink,
          "form_link": formLink,
          "organization": AppConfig.organization,
          "platform": await PlatformHelper.getPlatform()
        }});
    print(data);

    return OccasionLinkModel.fromJson(data);
  }

}

