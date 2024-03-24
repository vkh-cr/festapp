import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabase_url = 'https://lwfpdjxsdmkfyrzqbrlk.supabase.co';
  static const String anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3ZnBkanhzZG1rZnlyenFicmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjgwNDksImV4cCI6MjAyNjgwNDA0OX0.440P3yf8ZqNjOHEQTn9uJhkKyObhD_7PZ2NwaE9e4J0';
  static const String home_page = 'CSA 2024';
  static String map_page = "Map".tr();

  static const primaryColor = 0xFF2c366f;
  static const backgroundColor = Color(0xFFE3E2D3);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF5f689b);
  static const color3 = Color(0xFFc4caec);
  static const color4 = Color(0xFF233182);
  static const attentionColor = Color(0xFF8B0000);

  static const bool isServiceRoleSafety = false;
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const String OneSignalAppId = '0b9c568e-1231-4a5d-a82e-06622def39f4';

  static const String generatedPasswordPrefix = "fa";
  static const String welcomeEmailTemplate = "3zxk54v68jqgjy6v";

  static const String defaultLink = "csa2024";


  static List<LanguageModel> AvailableLanguages = [
    LanguageModel(const Locale("cs"), "Čeština"),
  ];
}