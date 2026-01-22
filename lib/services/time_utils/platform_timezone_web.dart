// lib/src/platform_timezone_setup_web.dart
import 'package:timezone/browser.dart' as tzb;
import 'package:timezone/timezone.dart' as tz;

class TimeZoneUniversal {
  Future<void> initializeTimeZonePlatform() async {
    await tzb.initializeTimeZone('assets/packages/timezone/data/latest.tzf');
  }

  void setTimeZoneLocationPlatform(tz.Location targetLocation) {
    tzb.setLocalLocation(targetLocation);
  }
}
