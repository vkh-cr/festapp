import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String appName = 'Diecézko DOO';
  static String mapTitle = "Mapa BISCUP 2024";
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = false;
  static const bool isOwnProgramSupported = false;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const bool isUsersImportSupported = true;
  static const String oneSignalAppId = '8ba73a49-1190-4b5a-a7e2-4edc344c4c5e';

  static const int organization = 2;

  static const String webLink = "https://biscup.netlify.app";
  static const String appStoreLink = "https://apps.apple.com/cz/app/biscup/id6472435824";
  static const String playStoreLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;

  static const bool isEventTimeUtc = true;

  static const int daySplitHour = 4;

  static const primaryColor = 0xFFFFA33C;
  static const backgroundColor = Color(0xFF1e1e1e);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFFB15EFF);
  static const color3 = Color(0xFF3D30A2);
  static const color4 = Color(0xFFFFFB73);
  static const attentionColor = Color(0xFF8B0000);

  static const timelineSplitLabelColor = color1;
  static const timelineTabLabelColor = color1;
  static const timelineTabIndicatorColor = color1;
  static const timelineColor = color1;
  static const timelineTextColor = color1;
  static const mapPinColor = color1;
  static const newsPageColor = backgroundColor;
  static const infoPageColor = backgroundColor;

  static const profileButtonColor = color1;

  static const bottomNavBackgroundColor = Colors.black;
  static const bottomNavSelectedItemColor = color1;
  static const bottomNavUnselectedItemColor = Colors.grey;

  static const timetableColor = color1;
  static const timetableSelectedColor = color2;
  static const timetableTimeSplitColor = Colors.red;
  static const timetableBackground1 = Colors.white60;
  static const timetableBackground2 = Colors.white;
  static const double timetableTimeSplitOpacity = 0.15;

  static const button1Color = color1;
  static const button2Color = color3;
  static const button3Color = color2;
  static const button4Color = color4;

  static const defaultHtmlViewColor = Colors.white;

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
    return color1;
  }

  static List<LanguageModel> availableLanguages = [
    LanguageModel(const Locale("cs"), "Čeština"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }
}