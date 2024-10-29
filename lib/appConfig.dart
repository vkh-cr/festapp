import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String appName = 'CSA 2024';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const bool isUsersImportSupported = true;
  static const String oneSignalAppId = '5aeb8117-54fc-43fc-8bab-e8a01ecda2a6';

  static const int organization = 1;

  static const String webLink = "https://aksmcz.netlify.app";
  static const String appStoreLink = "https://apps.apple.com/us/app/csa-2024/id6479449613";
  static const String playStoreLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;

  static const bool isEventTimeUtc = true;

  static const int daySplitHour = 4;

  static const primaryColor = 0xFF2c366f;
  static const backgroundColor = Color(0xFFE3E2D3);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF5f689b);
  static const color3 = Color(0xFFc4caec);
  static const color4 = Color(0xFF233182);
  static const attentionColor = Color(0xFF8B0000);

  static const timelineSplitLabelColor = color1;
  static const timelineTabLabelColor = color1;
  static const timelineTabIndicatorColor = color1;
  static const timelineColor = color1;
  static const timelineTextColor = Colors.black;
  static const mapPinColor = color1;
  static const newsPageColor = backgroundColor;
  static const infoPageColor = backgroundColor;

  static const profileButtonColor = color1;

  static const bottomNavBackgroundColor = color1;
  static const bottomNavSelectedItemColor = backgroundColor;
  static const bottomNavUnselectedItemColor = Colors.grey;

  static const timetableColor = color1;
  static const timetableSelectedColor = color2;
  static const timetableTimeSplitColor = Colors.red;
  static const timetableBackground1 = Colors.white60;
  static const timetableBackground2 = Colors.white;
  static const double timetableTimeSplitOpacity = 0.15;

  static const button1Color = color1;
  static const button2Color = color2;
  static const button3Color = color3;
  static const button4Color = color4;

  static const defaultHtmlViewColor = Colors.black;

  static const bool isSplitByPlace = false;

  static const int offsetHours = -1;

  static bool isNotificationsCurrentlySupported() {
    if(kIsWeb) {
      return isNotificationsSupported && isWebNotificationsSupported;
    }
    return isNotificationsSupported;
  }

  static Color eventTypeToColor(String? type)
  {
    switch (type){
      case "music": return color2;
      case "talk": return color3;
      case "other": return color4;
    }
    return AppConfig.color1;
  }

  static List<LanguageModel> availableLanguages = [
    LanguageModel(const Locale("cs"), "Čeština"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }
}