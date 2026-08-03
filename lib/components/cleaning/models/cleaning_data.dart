import 'package:fstapp/components/cleaning/models/cleaning_place_status.dart';
import 'package:fstapp/components/cleaning/models/cleaning_report.dart';

/// Whether cached cleaning data should carry the offline warning.
bool shouldShowCleaningOfflineBanner({
  required DateTime? cacheFetchedAt,
  required bool isOffline,
}) =>
    cacheFetchedAt != null && isOffline;

/// Bundle of everything a single Cleaning page load fetches, so the page can
/// swap it into state in one setState.
class CleaningData {
  final List<CleaningPlaceStatus> places;
  final List<CleaningReport> reports;
  final bool isBlocked;
  final bool notificationsMuted;
  CleaningData(
      this.places, this.reports, this.isBlocked, this.notificationsMuted);
}
