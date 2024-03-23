import 'dart:convert';

import 'package:festapp/data/DataService.dart';
import 'package:festapp/models/OccasionUserModel.dart';

class DataServiceTests {
  static Future<void> test_check_occasion_link()
  async {
    await DataService.login("bujnmi@gmail.com", "");
    var tstData = await DataService.checkOccasionLink("conference2024");
  }
  static Future<void> test_has_event_allowed_role()
  async {
    //await DataService.login("bujnmi@gmail.com", "");
    //var tstData = await DataService.hasEventAllowedRole(48);
  }
  static Future<void> test_update_user()
  async {
    await DataService.login("bujnmi@gmail.com", "");
    var oc = OccasionUserModel(isEditor: false, isManager: false, isApprover: false, isApproved: false, data: {"name":"Mikael"},
        user: "01f04ac5-bcc6-4067-b5c1-c52d99ba96c8", occasion: 1);
    await DataService.updateUserInfo(oc);
  }

}
