import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String appName = 'CSA 2024';
  static String mapTitle = "Map".tr();
  static const bool showPWAInstallOption = true;
  static const bool isOwnProgramSupportedWithoutSignIn = true;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isUsersImportSupported = true;
  static const String oneSignalAppId = '5aeb8117-54fc-43fc-8bab-e8a01ecda2a6';
  static const String generatedPasswordPrefix = "fa";
  static const String defaultLink = "csa2024";

  static const primaryColor = 0xFF2c366f;
  static const backgroundColor = Color(0xFFE3E2D3);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF5f689b);
  static const color3 = Color(0xFFc4caec);
  static const color4 = Color(0xFF233182);
  static const attentionColor = Color(0xFF8B0000);

  static const timelineTabLabelColor = color1;
  static const timelineTabIndicatorColor = color1;
  static const timelineColor = color1;
  static const mapPinColor = color1;
  static const profileButtonColor = color1;
  static const button1Color = color1;
  static const button2Color = color2;
  static const button3Color = color3;
  static const button4Color = color4;

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
}