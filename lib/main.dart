import 'dart:async';

import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:fstapp/config/url_strategy_noop.dart'
    if (dart.library.html) 'package:fstapp/config/url_strategy_web.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/app_router.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/occasion/occasion_link_model.dart';
import 'package:fstapp/components/occasion/occasion_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services/synchro_service.dart';
import 'package:fstapp/components/occasion/occasion_home_page.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/web_styles_helper.dart';
import 'package:fstapp/services/app_logger.dart';
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
        fallbackLocale:
            AppConfig.availableLanguages().map((e) => e.locale).first,
        useOnlyLangCode: true,
        saveLocale: true,
        child: MyApp()),
  );
}

Future<void> initializeEverything() async {
  AppLogger.debug('Initialization started');

  configureUrlStrategy();

  WidgetsFlutterBinding.ensureInitialized();
  AppLogger.debug('Widgets binding initialized');

  SynchroService.configure(
    isLoggedIn: AuthService.isLoggedIn,
    getFullUserInfo: AuthService.getFullUserInfo,
    getCurrentOccasionId: RightsService.currentOccasionId,
  );

  try {
    PWAInstall().setup();
    AppLogger.debug('PWA setup completed');
  } catch (e) {
    AppLogger.error('PWA setup failed: $e');
  }

  try {
    await initializeDateFormatting();
    AppLogger.debug('Date formatting initialized');
  } catch (e) {
    AppLogger.error('Date formatting initialization failed: $e');
  }

  try {
    await EasyLocalization.ensureInitialized();
    AppLogger.debug('EasyLocalization initialized');
  } catch (e) {
    AppLogger.error('EasyLocalization initialization failed: $e');
  }

  try {
    await Supabase.initialize(
      url: AppConfig.supabaseUrl,
      anonKey: AppConfig.anonKey,
    ).timeout(const Duration(seconds: 2));
    AppLogger.debug('Supabase initialized');
    if (!AuthService.isLoggedIn()) {
      await AuthService.refreshSession().timeout(const Duration(seconds: 2));
      AppLogger.debug('Session refreshed');
    }
  } catch (e) {
    AppLogger.error('Supabase initialization failed: $e');
  }

  try {
    await TimeHelper.initializeTimeZone().timeout(const Duration(seconds: 2));
    AppLogger.debug('Tz setup completed');
  } catch (e) {
    AppLogger.error('Tz setup failed: $e');
  }

  try {
    var settings = await OfflineDataService.getGlobalSettings();
    if (settings != null) {
      SynchroService.globalSettingsModel = settings;
      RightsService.occasionLinkModelNotifier.value = OccasionLinkModel(
          occasion: OccasionModel(
              features: settings.features,
              isOpen: true,
              isHidden: false,
              isPromoted: false,
              data: settings.data));
      TimeHelper.setTimeZoneLocation(
          RightsService.currentOccasion()?.data?["timezone"]);
      AppLogger.debug('Global settings loaded');
    }
  } catch (e) {
    AppLogger.error('Offline data helper initialization failed: $e');
  }

  try {
    await RightsService.updateAppData();
    AppLogger.debug('Occasion loaded');
  } catch (e) {
    AppLogger.error('Occasion loading failed: $e');
    RightsService.useOfflineVersion = true;
  }

  AppLogger.debug('Notification helper initializing');

  NotificationHelper.initialize().then((f) {
    AppLogger.debug('Notification helper initialized');
  }, onError: (e) {
    AppLogger.error('Notification helper initialization failed: $e');
  });

  AppLogger.debug('Initialization completed');

  WebStylesHelper.setBodyBackgroundColor(ThemeConfig.appBarColor());
  WebStylesHelper.setMetaThemeColor(ThemeConfig.seed1);
}

class MyApp extends StatefulWidget {
  bool isTimeTravelVisible = false;

  MyApp({super.key});

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
      dark: ThemeConfig.isDarkModeEnabled
          ? ThemeConfig.darkTheme(baseTheme)
          : baseTheme,
      initial: ThemeConfig.isDarkModeEnabled
          ? AdaptiveThemeMode.system
          : AdaptiveThemeMode.light,
      builder: (theme, darkTheme) => MaterialApp.router(
        routerConfig: RouterService.router
            .config(navigatorObservers: () => [RoutingObserver()]),
        debugShowCheckedModeBanner: false,
        builder: (context, child) {
          return Stack(
            children: [
              child!,
              Positioned(
                left: _offset.dx,
                top: _offset.dy,
                child: GestureDetector(
                  onPanUpdate: (d) =>
                      setState(() => _offset += Offset(d.delta.dx, d.delta.dy)),
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
