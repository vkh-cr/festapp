import 'dart:async';

import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:auto_route/auto_route.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/pages/occasion/occasion_home_page.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/time_travel_widget.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  debugProfileBuildsEnabled = true;
  await initializeEverything();
  runApp(
    EasyLocalization(
        supportedLocales:
        AppConfig.availableLanguages().map((e) => e.locale).toList(),
        path: "assets/translations",
        fallbackLocale: AppConfig.availableLanguages().map((e) => e.locale).first,
        useOnlyLangCode: true,
        saveLocale: true,
        child: MyApp()),
  );
}

Future<void> initializeEverything() async {
  print('Initialization started');
  //GoRouter.optionURLReflectsImperativeAPIs = true;
  WidgetsFlutterBinding.ensureInitialized();
  print('Widgets binding initialized');

  try {
    PWAInstall().setup();
    print('PWA setup completed');
  } catch (e) {
    print('PWA setup failed: $e');
  }

  try {
    await initializeDateFormatting();
    print('Date formatting initialized');
  } catch (e) {
    print('Date formatting initialization failed: $e');
  }

  try {
    await EasyLocalization.ensureInitialized();
    print('EasyLocalization initialized');
  } catch (e) {
    print('EasyLocalization initialization failed: $e');
  }

  try {
    await Supabase.initialize(
      url: AppConfig.supabaseUrl,
      anonKey: AppConfig.anonKey,
    ).timeout(const Duration(seconds: 2));
    print('Supabase initialized');
    if (!AuthService.isLoggedIn()) {
      await AuthService.refreshSession().timeout(const Duration(seconds: 2));
      print('Session refreshed');
    }
  } catch (e) {
    print('Supabase initialization failed: $e');
  }

  try {
    var settings = await OfflineDataService.getGlobalSettings();
    if (settings != null) {
      SynchroService.globalSettingsModel = settings;
      print('Global settings loaded');
    }
  } catch (e) {
    print('Offline data helper initialization failed: $e');
  }

  try {
    await RightsService.updateOccasionData();
    print('Occasion loaded');
  } catch (e) {
    print('Occasion loading failed: $e');
    RightsService.useOfflineVersion = true;
  }

  print('Notification helper initializing');

  NotificationHelper.initialize().then(
          (f){ print('Notification helper initialized'); },
          onError: (e){ print('Notification helper initialization failed: $e'); });

  print('Initialization completed');
}

class MyApp extends StatefulWidget {
  bool isTimeTravelVisible = false;

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Offset _offset = Offset.zero;

  @override
  Widget build(BuildContext context) {
    TimeHelper.toggleTimeTravel = () {
      setState(() {
        widget.isTimeTravelVisible = !widget.isTimeTravelVisible;
      });
    };

    var baseTheme = ThemeConfig.baseTheme();
    return AdaptiveTheme(
      light: ThemeConfig.baseTheme(),
      dark: ThemeConfig.isDarkModeEnabled ? ThemeConfig.darkTheme(baseTheme) : baseTheme,
      initial: ThemeConfig.isDarkModeEnabled ? AdaptiveThemeMode.system : AdaptiveThemeMode.light,
      builder: (theme, darkTheme) => MaterialApp.router(
        routerConfig: RouterService.router.config(navigatorObservers: () => [RoutingObserver()]),
        debugShowCheckedModeBanner: false,
        builder: (context, child) {
          return Stack(
            children: [
              child!,
              Positioned(
                left: _offset.dx,
                top: _offset.dy,
                child: GestureDetector(
                  onPanUpdate: (d) => setState(() => _offset += Offset(d.delta.dx, d.delta.dy)),
                  child: Visibility(
                    visible: widget.isTimeTravelVisible,
                    child: TimeTravelWidget(),
                  ),
                ),
              ),
            ],
          );
        },
        localizationsDelegates: [
          ...context.localizationDelegates,
          FormBuilderLocalizations.delegate,
        ],
        supportedLocales: context.supportedLocales,
        locale: context.locale,
        title: OccasionHomePage.homePageTitle,
        theme: theme,
        darkTheme: darkTheme,
      ).animate().fadeIn(
        duration: 300.ms,
      ),
    );
  }
}
