import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://kjdpmixlnhntmxjedpxh.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZHBtaXhsbmhudG14amVkcHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDI5NzEsImV4cCI6MjAxNzUxODk3MX0.06nTXCL-i1GxLckfEyCNlVVwt62QTzKUezqmsYSR_MI';
  static const String appName = 'Fstapp';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const bool isUsersImportSupported = true;
  static const String oneSignalAppId = '73f77f22-961a-4ded-9647-e33a7ac14f90';
  static const String defaultLink = "conference2024";

  static const String webLink = "https://live.festapp.net";
  static const String appStoreLink = "https://apps.apple.com/us/app/festapp/id6474078383";
  static const String playStoreLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;

  static const bool isEventTimeUtc = true;

  static const int daySplitHour = 4;

  //frosty style
  static const primaryColor = 0xFF0D0D0D;
  static const backgroundColor = Color(0xFFFFFFFF);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF4465A6);
  static const color3 = Color(0xFF80BDF2);
  static const color4 = Color(0xFF253759);
  static const attentionColor = Color(0xFF8B0000);

  static const timelineSplitLabelColor = color1;
  static const timelineTabLabelColor = color1;
  static const timelineTabIndicatorColor = color1;
  static const timelineColor = color1;
  static const mapPinColor = color1;
  static const newsPageColor = backgroundColor;
  static const infoPageColor = backgroundColor;

  static const profileButtonColor = color1;

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
    return AppConfig.timetableSelectedColor;
  }

  static List<LanguageModel> availableLanguages = [
    LanguageModel(const Locale("en"), "English"),
    LanguageModel(const Locale("cs"), "Čeština"),
    LanguageModel(const Locale("sk"), "Slovenčina"),
    LanguageModel(const Locale("pl"), "Polski"),
    LanguageModel(const Locale("de"), "Deutsch"),
    LanguageModel(const Locale("uk"), "українська"),
  ];
}