import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/data_models/language_model.dart';

class AppConfig {
  static const String supabaseUrl = 'https://hvtsoseaywurkmhywdbd.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dHNvc2VheXd1cmttaHl3ZGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwMzk1MDYsImV4cCI6MjAzMTYxNTUwNn0.LIFBDLrSxTrI4z_Wwnt_5mS5SW2FC9ysVIhJ3m7FD10';
  static const String appName = 'Slunovrat 2025';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = false;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const bool isUsersImportSupported = false;
  static const String oneSignalAppId = '4c5b7280-510f-4628-8fb8-b4bdd4fed1b2';

  static const int organization = 1;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = false;

  static const String webLink = "https://app.festivalslunovrat.cz";
  static const String appStoreLink = "https://apps.apple.com/us/app/festival-slunovrat/id6481703402";
  static const String playStoreLink = "";
  static const String playStoreLaunchLink = "";
  static const String desktopAppLink = "";
  static bool isProLicense = true;
  static const int imagesMaxWidth = 1200;
  static const int imagesMaxBytes = 800000;

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
    LanguageModel(const Locale("pl"), "Polski"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }

  static List<String> compatibleUrls() => [
    AppConfig.webLink
  ];
}