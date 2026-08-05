// lib/src/platform_timezone_setup_web.dart
import 'package:timezone/data/latest.dart' as tzs;
import 'package:timezone/timezone.dart' as tz;

class TimeZoneUniversal {
  /// Initializes the timezone database on web from data compiled into the app
  /// bundle (identical to the native path).
  ///
  /// The previous implementation fetched `latest.tzf` (~326 KB) over the network
  /// via `timezone/browser.dart`. Combined with the 2-second timeout in
  /// `main.dart`, a slow fetch left the timezone database uninitialized, which
  /// made every event-time parse (`toOccasionTime()`) throw and individual event
  /// pages render blank. Using the embedded data initializes synchronously and
  /// can never time out or fail on a slow connection.
  Future<void> initializeTimeZonePlatform() async {
    tzs.initializeTimeZones();
  }

  void setTimeZoneLocationPlatform(tz.Location targetLocation) {
    tz.setLocalLocation(targetLocation);
  }
}
