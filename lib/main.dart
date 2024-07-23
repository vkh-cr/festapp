import 'dart:async';

import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/OfflineDataHelper.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/pages/HomePage.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/widgets/TimeTravelWidget.dart';
import 'package:go_router/go_router.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'styles/Styles.dart';

Future<void> main() async {
  debugProfileBuildsEnabled = true;
  await initializeEverything();
  runApp(
    EasyLocalization(
        supportedLocales:
            AppConfig.availableLanguages.map((e) => e.locale).toList(),
        path: "assets/translations",
        fallbackLocale: AppConfig.availableLanguages.map((e) => e.locale).first,
        useOnlyLangCode: true,
        saveLocale: true,
        child: MyApp()),
  );
}

Future<void> initializeEverything() async {
  print('Initialization started');
  GoRouter.optionURLReflectsImperativeAPIs = true;
  WidgetsFlutterBinding.ensureInitialized();
  print('Widgets binding initialized');

  try {
    PWAInstall().setup();
    print('PWA setup completed');
  } catch (e) {
    print('PWA setup failed: $e');
  }

  try {
    initializeDateFormatting();
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
    if (!DataService.isLoggedIn()) {
      await DataService.refreshSession();
      print('Session refreshed');
    }
  } catch (e) {
    print('Fetching current user info failed: $e');
  }

  try {
    if (DataService.isLoggedIn()) {
      await DataService.getCurrentUserInfo();
      print('Current user info fetched');
    }
  } catch (e) {
    print('Supabase initialization failed: $e');
  }

  try {
    var settings = await OfflineDataHelper.getGlobalSettings();
    if (settings != null) {
      DataService.globalSettingsModel = settings;
      print('Global settings loaded');
    }
  } catch (e) {
    print('Offline data helper initialization failed: $e');
  }

  try {
    NotificationHelper.initialize();
    if (DataService.isLoggedIn()) {
      await NotificationHelper.login(DataService.currentUserId());
    }
    print('Notification helper initialized');
  } catch (e) {
    print('Notification helper initialization failed: $e');
  }

  print('Initialization completed');
}

class MyApp extends StatefulWidget {
  bool isTimeTravelVisible = false;

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Offset _offset = Offset.zero;

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    TimeHelper.toggleTimeTravel = () {
      setState(() {
        widget.isTimeTravelVisible = !widget.isTimeTravelVisible;
      });
    };
    return MaterialApp.router(
      routerConfig: RouterService.router,
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
      title: HomePage.HOME_PAGE,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
          fontFamily: "Futura",
          useMaterial3: false,
          scaffoldBackgroundColor: AppConfig.backgroundColor,
          secondaryHeaderColor: const Color(0xFFBA5D3F),
          colorScheme: ColorScheme.fromSwatch(primarySwatch: primarySwatch)
              .copyWith(surface: AppConfig.backgroundColor)),
    ).animate().fadeIn(
      duration: 300.ms,
    );
  }
}
