import 'package:collection/collection.dart';
import 'package:fstapp/data_models/occasion_link_model.dart';
import 'package:fstapp/data_models/occasion_settings_model.dart';
import 'package:fstapp/data_models/user_group_info_model.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_models/occasion_user_model.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/services/link_model.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsService{
  static final _supabase = Supabase.instance.client;
  static OccasionLinkModel? occasionLinkModel;
  
  static UserInfoModel? currentUser() => occasionLinkModel?.userInfo;
  static OccasionUserModel? currentOccasionUser() => occasionLinkModel?.occasionUser;
  static OccasionUserModel? currentUnitUser() => occasionLinkModel?.unitUser;
  static int? currentOccasionId() => occasionLinkModel?.occasion?.id;
  static OccasionModel? currentOccasion() => occasionLinkModel?.occasion;
  static UnitModel? currentUnit() => occasionLinkModel?.unit;

  static String? currentLink;
  static bool useOfflineVersion = false;

  static List<int>? bankAccountAdmin() => occasionLinkModel?.bankAccountsAdmin;

  static Future<bool> updateAppData({int? unitId, String? link, bool force = false, bool refreshOffline = true}) async {
    if (currentOccasionId() == null || link != currentLink || force) {
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

      if (!await RouterService.updateAppData(model)) {
        throw Exception("Cannot continue.");
      }
      TimeHelper.setTimeZoneLocation(RightsService.currentOccasion()?.data?["timezone"]);

      RouterService.currentOccasionLink = currentLink??"";
      if(occasionLinkModel?.occasion != null){
        var globalSettings = OccasionSettingsModel.fromOccasion(occasionLinkModel!.occasion!);
        SynchroService.globalSettingsModel = globalSettings;
        await OfflineDataService.saveGlobalSettings(globalSettings);
        if(refreshOffline){
          SynchroService.refreshOfflineData();
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
    return occasionLinkModel?.isAdmin??false;
  }

  static bool isEditor() {
    return currentOccasionUser()?.isEditor??false;
  }

  static bool isOrderEditor() {
    return currentOccasionUser()?.isEditorOrder??false;
  }

  static bool isUnitEditor() {
    return currentUnitUser()?.isEditor??false;
  }

  static bool isUnitEditorView() {
    return currentUnitUser()?.isEditorView??false;
  }

  static bool isEditorOrderView() {
    return currentOccasionUser()?.isEditorOrderView??false;
  }

  static bool isEditorOrder() {
    return currentOccasionUser()?.isEditorOrder??false;
  }

  static bool canUserSeeUnitWorkspace() {
    return isUnitEditor() || isUnitManager() || isUnitEditorView();
  }

  static bool isManager() {
    return currentOccasionUser()?.isManager??false;
  }

  static bool isUnitManager() {
    return currentUnitUser()?.isManager??false;
  }

  static bool isApprover() {
    return currentOccasionUser()?.isApprover??false;
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