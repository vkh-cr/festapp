import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabaseUrl = 'https://kjdpmixlnhntmxjedpxh.supabase.co';
  static const String anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqZHBtaXhsbmhudG14amVkcHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5NDI5NzEsImV4cCI6MjAxNzUxODk3MX0.06nTXCL-i1GxLckfEyCNlVVwt62QTzKUezqmsYSR_MI';
  static const String appName = 'Festapp';
  static String mapTitle = "Map".tr();
  static const bool isOwnProgramSupported = true;
  static const bool isNotificationsSupported = true;
  static const bool isUsersImportSupported = true;
  static const String oneSignalAppId = '0b9c568e-1231-4a5d-a82e-06622def39f4';
  static const String generatedPasswordPrefix = "fa";
  static const String defaultLink = "conference2024";

  //frosty style
  static const primaryColor = 0xFF0D0D0D;
  static const backgroundColor = Color(0xFFFFFFFF);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFF4465A6);
  static const color3 = Color(0xFF80BDF2);
  static const color4 = Color(0xFF253759);
  static const attentionColor = Color(0xFF8B0000);

  static const timelineTabLabelColor = color1;
  static const timelineTabIndicatorColor = color1;
  static const timelineColor = color1;
  static const mapPinColor = color1;
  static const profileButtonColor = color1;
  static const button1Color = color1;
  static const button2Color = color3;
  static const button3Color = color2;
  static const button4Color = color4;

  static List<LanguageModel> availableLanguages = [
    LanguageModel(const Locale("en"), "English"),
    LanguageModel(const Locale("cs"), "Čeština"),
    LanguageModel(const Locale("sk"), "Slovenčina"),
    LanguageModel(const Locale("pl"), "Polski"),
    LanguageModel(const Locale("de"), "Deutsch"),
    LanguageModel(const Locale("uk"), "українська"),
  ];
}