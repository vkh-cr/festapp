import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsService{
  static final _supabase = Supabase.instance.client;
  static OccasionUserModel? currentUserOccasion;
  static int? currentOccasion;
  static String? currentLink;
  static bool? isAdminField;

  static Future<bool> updateOccasionData([String? link]) async {
    if (currentOccasion == null || link != currentLink) {
      var toUpdate = link ?? RouterService.currentOccasionLink;
      if (toUpdate.isEmpty) {
        toUpdate = extractOccasionLink(Uri.base.toString());

        var rootLinks = AppRouter.getRootLinks();
        if (rootLinks.any((rootLink) => toUpdate == rootLink)) {
          toUpdate = "";
        }
      }

      if (!await RouterService.updateOccasionFromLink(toUpdate)) {
        throw Exception("Cannot continue.");
      }

      RouterService.currentOccasionLink = currentLink!;
      var globalSettings = await SynchroService.loadOrInitOccasionSettings();
      await OfflineDataService.saveGlobalSettings(globalSettings);

      SynchroService.refreshOfflineData();
    }
    return true;
  }

  static String extractOccasionLink(String url) {
    // Use a regular expression to match the pattern after the hash sign (#)
    final regex = RegExp(r'#\/([^\/]+)');
    final match = regex.firstMatch(url);

    if (match != null && match.groupCount > 0) {
      return match.group(1)!;
    }

    return '';
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
    return true;
    return currentUserOccasion?.isEditor??false;
  }

  static bool isManager() {
    return currentUserOccasion?.isManager??false;
  }

  static bool isApprover() {
    return currentUserOccasion?.isApprover??false;
  }
}