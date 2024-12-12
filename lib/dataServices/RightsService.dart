import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/LinkModel.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsService{
  static final _supabase = Supabase.instance.client;
  static OccasionUserModel? currentUserOccasion;
  static int? currentOccasion;
  static String? currentLink;
  static bool? isAdminField;

  static Future<bool> updateOccasionData([String? link]) async {
    if (currentOccasion == null || link != currentLink) {
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

      RouterService.currentOccasionLink = currentLink!;
      var globalSettings = await SynchroService.loadOrInitOccasionSettings();
      await OfflineDataService.saveGlobalSettings(globalSettings);

      SynchroService.refreshOfflineData();
    }
    return true;
  }



  static Future<bool> getIsAdmin() async {
    var data = await _supabase.rpc("get_is_admin_on_occasion",
        params: {"oc": RightsService.currentOccasion!});
    return data;
  }

  static bool canSeeAdmin(){
    return isEditor() || isManager() || isAdmin();
  }

  static bool canUpdateUsers() {
    return isManager() || isAdmin();
  }

  static bool canSignInOutUsersFromEvents() {
    return currentUserOccasion?.isEditor??false;
  }

  static bool isAdmin() {
    return isAdminField??false;
  }

  static bool isEditor() {
    return currentUserOccasion?.isEditor??false;
  }

  static bool isManager() {
    return currentUserOccasion?.isManager??false;
  }

  static bool isApprover() {
    return currentUserOccasion?.isApprover??false;
  }
}