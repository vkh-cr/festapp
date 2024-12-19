import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String appName = 'Hvězda mořská';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = 'b346485b-bfd0-4c06-a87c-861aaa00aa48';

  static const int organization = 4;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = true;

  static const String webLink = "https://hvezdamorska.netlify.app";
  static const String appStoreLink = "https://apps.apple.com/us/app/festapp/id6474078383";
  static const String playStoreLink = "";
  static const String playStoreLaunchLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = false;

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
    LanguageModel(const Locale("cs"), "Čeština"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }

  static List<String> compatibleUrls() => [
    AppConfig.webLink
  ];
}