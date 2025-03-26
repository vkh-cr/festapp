import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataModels/UnitModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/LinkModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsService{
  static final _supabase = Supabase.instance.client;
  static UserInfoModel? currentUser;
  static OccasionUserModel? currentOccasionUser;
  static OccasionUserModel? currentUnitUser;
  static int? currentOccasionId;
  static OccasionModel? currentOccasion;
  static UnitModel? currentUnit;

  static String? currentLink;
  static bool useOfflineVersion = false;

  static bool? isAdminField;
  static List<int>? bankAccountAdmin;


  static Future<bool> updateOccasionData([String? link]) async {
    if (currentOccasionId == null || link != currentLink) {
      LinkModel model = LinkModel(occasionLink: link);
      var occasionLink = link ?? RouterService.currentOccasionLink;
      if (occasionLink.isEmpty) {
        model = LinkModel.extractOccasionLink(Uri.base.toString());
        print(Uri.base.toString());
      }

      if(AppConfig.forceOccasionLink != null) {
        model.occasionLink = AppConfig.forceOccasionLink;
      }

      if (!await RouterService.updateOccasionFromLink(model)) {
        throw Exception("Cannot continue.");
      }

      RouterService.currentOccasionLink = currentLink??"";
      var globalSettings = await SynchroService.loadOrInitOccasionSettings();
      await OfflineDataService.saveGlobalSettings(globalSettings);

      if(RightsService.currentOccasion?.id != null){
        SynchroService.refreshOfflineData();
      }
    }
    return true;
  }



  static Future<bool> getIsAdmin() async {
    var data = await _supabase.rpc("get_is_admin_on_occasion",
        params: {"oc": RightsService.currentOccasionId!});
    return data;
  }

  static bool canSeeAdmin(){
    return isEditor() || isManager() || isUnitEditorView() || isAdmin();
  }

  static bool canUpdateUsers() {
    return isManager() || isAdmin() || isUnitEditor();
  }

  static bool canUpdateUnitUsers() {
    return isUnitManager() || isAdmin();
  }

  static bool canEditOccasion() {
    return isManager() || isEditor();
  }

  static bool canSignInOutUsersFromEvents() {
    return currentOccasionUser?.isEditor??false;
  }

  static bool isAdmin() {
    return isAdminField??false;
  }

  static bool isEditor() {
    return currentOccasionUser?.isEditor??false;
  }

  static bool isUnitEditor() {
    return currentUnitUser?.isEditor??false;
  }

  static bool isUnitEditorView() {
    return currentUnitUser?.isEditorView??false;
  }

  static bool canUserSeeUnitWorkspace() {
    return isUnitEditor() || isUnitManager() || isUnitEditorView();
  }

  static bool isManager() {
    return currentOccasionUser?.isManager??false;
  }

  static bool isUnitManager() {
    return currentUnitUser?.isManager??false;
  }

  static bool isApprover() {
    return currentOccasionUser?.isApprover??false;
  }
}