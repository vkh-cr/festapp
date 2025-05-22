import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/language_model.dart';

class AppConfig {
  static const String supabaseUrl = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String appName = 'Absolventský Velehrad';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = '7837e2c3-6e5e-463c-9672-4db6c55888da';

  static const int organization = 5;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = false;
  static const bool isAllUnit = false;

  static const String webLink = "https://app.absolventskyvelehrad.cz";
  static const String appStoreLink = "";
  static const String playStoreLink = "";
  static const String playStoreLaunchLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;
  static const int imagesMaxWidth = 1100;
  static const int imagesMaxBytes = 800000;

  static const int daySplitHour = 4;

  static const bool isSplitByPlace = false;

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