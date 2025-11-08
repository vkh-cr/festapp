import 'package:timezone/data/latest.dart' as tzs;
import 'package:timezone/timezone.dart' as tz;

class TimeZoneUniversal {
  /// Initializes the timezone database for non-web platforms.
  Future<void> initializeTimeZonePlatform() async {
    tzs.initializeTimeZones();
  }

  /// Sets the local timezone location for non-web platforms.
  void setTimeZoneLocationPlatform(tz.Location targetLocation) {
    tz.setLocalLocation(targetLocation);
  }
}
