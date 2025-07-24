import 'package:collection/collection.dart';
import 'package:flutter/foundation.dart';
import 'package:fstapp/data_models/occasion_link_model.dart';
import 'package:fstapp/data_models/occasion_settings_model.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/app_config_service.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/services/link_model.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsService{
  static final _supabase = Supabase.instance.client;

  // The model is now wrapped in a ValueNotifier.
  static final occasionLinkModelNotifier = ValueNotifier<OccasionLinkModel?>(null);
  static OccasionLinkModel? get occasionLinkModel => occasionLinkModelNotifier.value;

  // All getters now read from the notifier's current value.
  static UserInfoModel? currentUser() => occasionLinkModelNotifier.value?.userInfo;
  static OccasionUserModel? currentOccasionUser() => occasionLinkModelNotifier.value?.occasionUser;
  static OccasionUserModel? currentUnitUser() => occasionLinkModelNotifier.value?.unitUser;
  static int? currentOccasionId() => occasionLinkModelNotifier.value?.occasion?.id;
  static OccasionModel? currentOccasion() => occasionLinkModelNotifier.value?.occasion;
  static UnitModel? currentUnit() => occasionLinkModelNotifier.value?.unit;

  static String? currentLink;
  static bool useOfflineVersion = false;

  static List<int>? bankAccountAdmin() => occasionLinkModelNotifier.value?.bankAccountsAdmin;

  static Future<bool> updateAppData({int? unitId, String? link, bool force = false, bool refreshOffline = true}) async {
    // Check if an update is needed
    if (occasionLinkModelNotifier.value?.occasion?.id == null || link != currentLink || force) {
      LinkModel model = LinkModel(occasionLink: link, unitId: unitId);
      if(unitId == null){
        var occasionLink = link ?? RouterService.currentOccasionLink;
        if (occasionLink.isEmpty) {
          model = LinkModel.extractOccasionLink(Uri.base.toString());
          print(Uri.base.toString());
        }
      }

      if(AppConfig.forceOccasionLink != null) {
        model.occasionLink = AppConfig.forceOccasionLink;
      }

      // Get the new data
      var checkedObject = await SynchroService.getAppConfig(model);

      // Update global state from the fetched object
      RightsService.currentLink = checkedObject.occasion?.link;
      AppConfigService.versionRecommended = checkedObject.versionRecommended;
      AppConfigService.versionLink = checkedObject.versionLink;

      // Handle access denied or not found cases
      if(checkedObject.isAccessDenied() || checkedObject.isNotFound()){
        occasionLinkModelNotifier.value = checkedObject; // Update with error state to notify UI
        throw Exception("Cannot continue. Access denied or not found.");
      }

      // This is the key change: update the notifier's value,
      // which will automatically alert any listening widgets.
      occasionLinkModelNotifier.value = checkedObject;

      // Update other dependent services
      TimeHelper.setTimeZoneLocation(RightsService.currentOccasion()?.data?["timezone"]);
      RouterService.currentOccasionLink = currentLink ?? "";

      if(occasionLinkModel?.occasion != null){
        var globalSettings = OccasionSettingsModel.fromOccasion(occasionLinkModel!.occasion!);
        SynchroService.globalSettingsModel = globalSettings;
        await OfflineDataService.saveGlobalSettings(globalSettings);
        if(refreshOffline){
          await SynchroService.refreshOfflineData();
        }
      } else {
        SynchroService.globalSettingsModel = OccasionSettingsModel.defaultSettings;
      }
    }
    return true;
  }

  static Future<bool> getIsAdmin() async {
    var data = await _supabase.rpc("get_is_admin_on_occasion",
        params: {"oc": RightsService.currentOccasionId()!});
    return data;
  }

  static bool canSeeAdmin(){
    return isEditor() || isManager() || isUnitEditorView() || isAdmin();
  }

  static bool canUpdateUsers() {
    return isManager() || isAdmin() || isUnitEditor();
  }
  static bool canUpdateOrders() {
    return isEditorOrder() || isAdmin() || isUnitEditor();
  }

  static bool canUpdateUnitUsers() {
    return isUnitManager() || isAdmin();
  }

  static bool canEditOccasion() {
    return isManager() || isEditor();
  }

  static bool canSignInOutUsersFromEvents() {
    return currentOccasionUser()?.isEditor??false;
  }

  static bool isAdmin() {
    return occasionLinkModelNotifier.value?.isAdmin??false;
  }

  static bool isEditor() {
    return occasionLinkModelNotifier.value?.occasionUser?.isEditor??false;
  }

  static bool isOrderEditor() {
    return occasionLinkModelNotifier.value?.occasionUser?.isEditorOrder??false;
  }

  static bool isUnitEditor() {
    return occasionLinkModelNotifier.value?.unitUser?.isEditor??false;
  }

  static bool isUnitEditorView() {
    return occasionLinkModelNotifier.value?.unitUser?.isEditorView??false;
  }

  static bool isEditorOrderView() {
    return occasionLinkModelNotifier.value?.occasionUser?.isEditorOrderView??false;
  }

  static bool isEditorOrder() {
    return occasionLinkModelNotifier.value?.occasionUser?.isEditorOrder??false;
  }

  static bool canUserSeeUnitWorkspace() {
    return isUnitEditor() || isUnitManager() || isUnitEditorView();
  }

  static bool isManager() {
    return occasionLinkModelNotifier.value?.occasionUser?.isManager??false;
  }

  static bool isUnitManager() {
    return occasionLinkModelNotifier.value?.unitUser?.isManager??false;
  }

  static bool isApprover() {
    return occasionLinkModelNotifier.value?.occasionUser?.isApprover??false;
  }

  static bool hasGroup() {
    return (currentUser()?.userGroups?.length ?? 0) > 0;
  }

  static bool isGroupAdmin() {
    return currentUser()?.userGroups?.any((g) => g.isAdmin ?? false) ?? false;
  }

  static UserGroupInfoModel? currentUserGroup() {
    return currentUser()?.userGroups?.firstWhereOrNull((g) => g.type == null);
  }
}