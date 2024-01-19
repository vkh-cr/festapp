import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'models/LanguageModel.dart';

class AppConfig {
  static const String supabase_url = 'https://hncyhpgunboyzsafjtqs.supabase.co';
  static const String anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuY3locGd1bmJveXpzYWZqdHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NjM4NDcsImV4cCI6MjAxNTUzOTg0N30.BEPwUcGIjev-ux-tVDNkbjiKjWHRdeEJuD8IIpv-8Qo';
  static const String home_page = 'BISCUP';
  static const String map_page = 'Mapa BISCUP 2023';

  static const primaryColor = 0xFF1C6758;
  static const backgroundColor = Color(0xFFF5F5F5);
  static const color1 = Color(primaryColor);
  static const color2 = Color(0xFFD6CDA4);
  static const color3 = Color(0xFF3D8361);
  static const color4 = Color(0xFF115448);
  static const attentionColor = Color(0xFF8B0000);

  static const bool isServiceRoleSafety = false;
  static const bool isOwnProgramSupported = false;
  static const bool isNotificationsSupported = true;
  static const String OneSignalAppId = '8ba73a49-1190-4b5a-a7e2-4edc344c4c5e';

  static const String generatedPasswordPrefix = "biscup";
  static const String welcomeEmailTemplate = "3z0vklonmv747qrx";

  static List<LanguageModel> AvailableLanguages = [
    LanguageModel(const Locale("cs"), "Čeština"),
  ];
}