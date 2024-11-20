import 'dart:async';

import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:flutter/services.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/AppRouter.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/pages/OccasionHomePage.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/TimeTravelWidget.dart';
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
      dark: ThemeConfig.darkTheme(baseTheme),
      initial: AdaptiveThemeMode.system,
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
        title: OccasionHomePage.HOME_PAGE,
        theme: theme,
        darkTheme: darkTheme,
      ).animate().fadeIn(
        duration: 300.ms,
      ),
    );
  }
}
