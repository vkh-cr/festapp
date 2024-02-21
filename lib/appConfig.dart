import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabase_url = 'https://icdqmvvcvctrulmpucij.supabase.co';
  static const String anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZHFtdnZjdmN0cnVsbXB1Y2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MTc4OTAsImV4cCI6MjAxMjE5Mzg5MH0.appaX_mPTS-yxJVXoezP9Wo6viRV9KUQ9OIEahnTidE';
  static const String home_page = 'Člověk a Víra';
  static const String map_page = 'Mapa Duchovní obnovy 2024';

  static const primaryColor = 0xFF122640;
  static const backgroundColor = Color(0xFFFFFFFF);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFFBF8641);
  static const color3 = Color(0xFF593E25);
  static const color4 = Color(0xFF1B3659);
  static const attentionColor = Color(0xFF8B0000);

  static const bool isServiceRoleSafety = false;
  static const bool isOwnProgramSupported = false;
  static const bool isNotificationsSupported = true;
  static const String OneSignalAppId = '0b9c568e-1231-4a5d-a82e-06622def39f4';

  static const String generatedPasswordPrefix = "fa";
  static const String welcomeEmailTemplate = "3zxk54v68jqgjy6v";

  static List<LanguageModel> AvailableLanguages = [
    LanguageModel(const Locale("en"), "English"),
    LanguageModel(const Locale("cs"), "Čeština"),
    LanguageModel(const Locale("sk"), "Slovenčina"),
    LanguageModel(const Locale("pl"), "Polski"),
  ];
}