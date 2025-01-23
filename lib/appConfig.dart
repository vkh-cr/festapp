import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://kjdpmixlnhntmxjedpxh.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZHBtaXhsbmhudG14amVkcHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDI5NzEsImV4cCI6MjAxNzUxODk3MX0.06nTXCL-i1GxLckfEyCNlVVwt62QTzKUezqmsYSR_MI';
  static const String appName = 'Festapp';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = '73f77f22-961a-4ded-9647-e33a7ac14f90';

  static const int organization = 3;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = false;

  static const String webLink = "https://live.festapp.net";
  static const String appStoreLink = "https://apps.apple.com/us/app/festapp/id6474078383";
  static const String playStoreLink = "";
  static const String playStoreLaunchLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;

  static const bool isEventTimeUtc = true;

  static const int daySplitHour = 4;


  static const bool isSplitByPlace = false;

  static const int offsetHours = -1;

  static bool isNotificationsCurrentlySupported() {
    if(kIsWeb) {
      return isNotificationsSupported && isWebNotificationsSupported;
    }
    return isNotificationsSupported;
  }

  static List<LanguageModel> availableLanguages() => [
    LanguageModel(const Locale("en"), "English"),
    LanguageModel(const Locale("cs"), "Čeština"),
    LanguageModel(const Locale("sk"), "Slovenčina"),
    LanguageModel(const Locale("pl"), "Polski"),
    LanguageModel(const Locale("de"), "Deutsch"),
    LanguageModel(const Locale("uk"), "українська"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }

  static List<String> compatibleUrls() => [
    AppConfig.webLink
  ];
}