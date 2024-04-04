import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://kluhpargrjwxiqlxlkdu.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdWhwYXJncmp3eGlxbHhsa2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNDc1NDEsImV4cCI6MjAyNzgyMzU0MX0.gA7QtEvLNoQf-eztGBdeJFczqlENAw8veHC6h3nVKxs';
  static const String appName = 'Festival Slunovrat';
  static String mapTitle = "Map".tr();
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isUsersImportSupported = false;
  static const String oneSignalAppId = 'e9c1ac36-4d81-4bd9-9641-18b130f656cb';
  static const String generatedPasswordPrefix = "fa";
  static const String defaultLink = "2024";

  //frosty style
  static const primaryColor = 0xFF0D0D0D;
  static const backgroundColor = Color(0xFFFFFFFF);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF4465A6);
  static const color3 = Color(0xFF80BDF2);
  static const color4 = Color(0xFF253759);
  static const attentionColor = Color(0xFF8B0000);

  static List<LanguageModel> availableLanguages = [
    LanguageModel(const Locale("en"), "English"),
    LanguageModel(const Locale("cs"), "Čeština"),
    LanguageModel(const Locale("sk"), "Slovenčina"),
    LanguageModel(const Locale("pl"), "Polski"),
    LanguageModel(const Locale("de"), "Deutsch"),
    LanguageModel(const Locale("uk"), "українська"),
  ];
}