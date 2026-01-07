// FeatureConstants with a new constant for the ticket type.
class FeatureConstants {
  // Core keys
  static const String metaIsEnabled = "is_enabled";
  static const String metaCode = "code";
  static const String metaTitle = "title";
  static const String metaDescription = "description";

  // Feature codes
  static const String ticket = "ticket";
  static const String form = "form";
  static const String songbook = "songbook";
  static const String game = "game";
  static const String userGroups = "user_groups";
  static const String mySchedule = "my_schedule";
  static const String services = "services";
  static const String entryCode = "entry_code";
  static const String companions = "companions";
  static const String blueprint = "blueprint";
  static const String timetable = "timetable";
  static const String map = "map";
  static const String quotes = "quotes";
  static const String workshops = "workshops";
  static const String volunteers = "volunteers";
  static const String schedule = "schedule";
  static const String import = "import"; // New feature

  // Extra fields for ticket feature
  static const String ticketLightColor = "lightColor";
  static const String ticketDarkColor = "darkColor";
  static const String ticketBackground = "background";
  static const String ticketType = "ticket_type";
  static const String ticketCanScanManually = "can_scan_manually";

  // Extra fields for form feature
  static const String formUseExternal = "use_external_form";
  static const String formExternalLink = "external_form_link";
  static const String formExternalPrice = "external_price";
  static const String reserveButtonTitle = "reserve_button_title";
  static const String reminderIsEnabled = "reminder_is_enabled";
  static const String reminderIntervalSeconds = "reminder_interval_seconds";
  static const String deadlineDurationSeconds = "deadline_duration_seconds";


  // Extra field for companions feature
  static const String companionsMax = "max_companions";

  // Extra fields for map feature
  static const String onlineMapLayer = "map_layer";
  static const String offlineMapLayer = "map_layer_offline";
  static const String defaultMapZoom = "defaultMapZoom";
  static const String defaultMapLocation = "defaultMapLocation";

  // Offline map extra fields (for offline map layer)
  static const String offlineMapPackageURL = "offlineMapPackageURL";
  static const String offlineMapStyleURL = "offlineMapStyleURL";
  static const String offlineMapLayerName = "offlineMapLayerName";
  static const String forceOfflineMap = "forceOfflineMap";

  // MapLayer inner keys (for online map layer)
  static const String mapLogo = "logo";
  static const String mapText = "text";
  static const String mapLogoLink = "logo_link";
  static const String mapTextLink = "text_link";
  static const String mapLayerLink = "layer_link";

  // Import Feature
  static const String importAutoImport = "auto_import";
}