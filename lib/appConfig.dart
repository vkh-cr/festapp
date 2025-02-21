import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://jxagtmxojljlkabacgcj.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4YWd0bXhvamxqbGthYmFjZ2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MTIxNTMsImV4cCI6MjA1NTM4ODE1M30.I9s25yl_dFBGFFGa3De9vbM3xlxkMzWRKPeg65oDsUo';
  static const String appName = 'Absolventský Velehrad';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = '73f77f22-961a-4ded-9647-e33a7ac14f90';

  static const int organization = 4;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = null;
  static const bool isPublicNotificationSendingDisabled = true;

  static const String webLink = "https://avtest.netlify.app";
  static const String appStoreLink = "";
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
    LanguageModel(const Locale("cs"), "Čeština"),
  ];

  static String getUserPrefix(String email){
      return "$organization+$email";
  }

  static List<String> compatibleUrls() => [
    AppConfig.webLink
  ];
}