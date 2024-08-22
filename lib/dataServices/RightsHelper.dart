import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
import 'package:fstapp/dataModels/OccasionUserModel.dart';
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class RightsHelper{
  static final _supabase = Supabase.instance.client;
  static OccasionUserModel? currentUserOccasion;
  static int? currentOccasion;
  static String? currentLink;

  static Future<bool> ensureAccessProcedure(BuildContext context) async {
    if(currentOccasion==null || RouterService.currentOccasionLink != currentLink) {
      if(!await RouterService.checkOccasionLinkAndRedirect(context)){
        throw Exception("Cannot continue.");
      }
      var globalSettings = await DataService.loadOrInitGlobalSettings();
      await OfflineDataHelper.saveGlobalSettings(globalSettings);

      DataService.refreshOfflineData();
    }
    return true;
  }

  static Future<bool> getIsAdmin() async {
    var data = await _supabase.rpc("get_is_admin_on_occasion",
        params: {"oc": RightsHelper.currentOccasion!});
    return data;
  }

  static bool canSeeAdmin(){
    return (currentUserOccasion?.isEditor??false) || (currentUserOccasion?.isManager??false) || isAdmin();
  }

  static bool canUpdateUsers() {
    return currentUserOccasion?.isManager??false;
  }

  static bool canSignInOutUsersFromEvents() {
    return currentUserOccasion?.isEditor??false || isAdmin();
  }

  static bool isAdmin() {
    var containsAdminField = _supabase.auth.currentUser?.appMetadata.containsKey("is_admin");
    return containsAdminField != null && _supabase.auth.currentUser!.appMetadata["is_admin"] == true;
  }

  static bool isEditor() {
    return currentUserOccasion?.isEditor??false;
  }

  static bool isApprover() {
    return currentUserOccasion?.isApprover??false;
  }
}