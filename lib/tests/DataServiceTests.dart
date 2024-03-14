import 'package:festapp/data/DataService.dart';

class DataServiceTests {
  static Future<void> test_check_occasion_link()
  async {
    await DataService.login("bujnmi@gmail.com", "");
    var tstData = await DataService.checkOccasionLink("conference2024");
  }
}
