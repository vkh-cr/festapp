import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/components/users/db_users.dart';

class DataServiceTests {

  static Future<void> test_update_user()
  async {
    await AuthService.login("michael.bujnovsky@festapp.net", "");
    var oc = OccasionUserModel(isEditor: false, isManager: false, isApprover: false, isApproved: false, data: {"name":"Mikael"},
        user: "01f04ac5-bcc6-4067-b5c1-c52d99ba96c8", occasion: 1);
    await DbUsers.updateUserInfo(oc);
  }

  static Future<void> test_mail()
  async {
    await AuthService.resetPasswordForEmail("michael.bujnovsky@festapp.net");
  }

}
