import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/app_management/language_model.dart';
import 'package:fstapp/components/occasion/admin_page.dart';

class AppConfig {
  static const String supabaseUrl = 'https://rehearsal-api.festapp.net';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzg3OTA4NjQyLCJleHAiOjE5NDU1ODg2NDJ9.uE20X1ueXZlul4F1fRfV5wXFVlGd8QKBFUHMIo1XD4M';
  static const String effectiveSupabaseUrl = String.fromEnvironment(
    'FESTAPP_SUPABASE_URL',
    defaultValue: supabaseUrl,
  );
  static const String effectiveSupabaseAnonKey = String.fromEnvironment(
    'FESTAPP_SUPABASE_ANON_KEY',
    defaultValue: anonKey,
  );
  static const String appName = 'CSM Ostrava';
  static String get mapTitle => CommonStrings.map;
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isWebNotificationsSupported = true;
  static const String oneSignalAppId = '7140cfd2-280d-4971-a81a-b78503e99e6e';
  static const String pushAppGeneration = 'selfhost_rehearsal_20260828_v1';
  static const String effectivePushAppGeneration = String.fromEnvironment(
    'FESTAPP_PUSH_APP_GENERATION',
    defaultValue: pushAppGeneration,
  );
  static const String logoAsset = 'assets/icons/fstapplogo.png';
  static const String darkLogoAsset = 'assets/icons/fstapplogo.png';
  static const String programLogoAsset = 'assets/icons/fstapplogo_program.png';
  static const String defaultAdministrationRoute = AdminPage.ROUTE;

  static const int organization = 12;
  //setup occasion id to force occasion
  static const String? forceOccasionLink = "csmostrava2026";
  static const bool isPublicNotificationSendingDisabled = false;
  static const bool isAllUnit = false;
  static const bool isAppSupported = true;
  static const bool isWebclientSupported = true;
  static const bool isContractFeatureEnabled = false;
  static const bool showBankSupportRole = false;

  static const String webLink = "https://festapp-rehearsal-client.pages.dev";
  static const String privacyUrl = "https://festapp-rehearsal-client.pages.dev/privacy/";
  static const String privacyChoicesUrl = "https://festapp-rehearsal-client.pages.dev/privacy/choices/";
  static const String termsUrl = "https://festapp-rehearsal-client.pages.dev/terms/";
  static const String supportUrl = "https://festapp-rehearsal-client.pages.dev/support/";
  static const String deleteAccountUrl = "https://festapp-rehearsal-client.pages.dev/delete-account/";
  static const String syncHeadOrigin = "https://sync.festapp.net";
  static const String syncAssetOrigin = "https://assets.festapp.net";
  static const String imageApiUrl = 'https://image-api.festapp.net';
  static const String imageProjectId = 'a';
  static bool isProLicense = true;
  static const int imagesMaxWidth = 780;
  static const int imagesMaxBytes = 800000;

  static const int daySplitHour = 4;

  static const bool areAllVolunteersApprovers = false;

  static const bool isFeedbackEnabled = true;
  static const String feedbackEmail = "info@festapp.net";

  static bool isNotificationsCurrentlySupported() {
    if (kIsWeb) {
      return isNotificationsSupported && isWebNotificationsSupported;
    }
    return isNotificationsSupported;
  }

  static List<LanguageModel> availableLanguages() => [
        LanguageModel(const Locale("cs"), "Čeština"),
      ];

  /// This is the single definition place for the prefix structure.
  /// It combines the organization ID and the separator (e.g., "2+").
  static String get _prefixBase => "$organization+";

  static String getUserPrefix(String email) {
    return "$_prefixBase$email";
  }

  static String removeUserPrefix(String emailWithPrefix) {
    if (emailWithPrefix.startsWith(_prefixBase)) {
      return emailWithPrefix.substring(_prefixBase.length);
    }
    return emailWithPrefix;
  }

  static List<String> compatibleUrls() => [AppConfig.webLink];
}
