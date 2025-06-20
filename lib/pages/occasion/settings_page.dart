import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/language_model.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/notification_helper.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:flutter/foundation.dart';

@RoutePage()
class SettingsPage extends StatefulWidget {
  static const ROUTE = "settings";
  const SettingsPage({super.key});

  @override
  _SettingsPageState createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool _notificationsEnabled = false;
  bool _isAppInstalled = false;
  bool _isPromptEnabled = false;
  bool _isPlatformSupported = true;
  bool _notificationError = false;
  LanguageModel? _currentLanguage;
  AdaptiveThemeMode? _themeMode;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    loadSettings();
  }

  Future<void> loadSettings() async {
    bool isEnabled = await NotificationHelper.isNotificationOnOff();
    Locale currentLocale = context.locale;
    LanguageModel? currentLanguage = AppConfig.availableLanguages().firstWhere((language) => language.locale.languageCode == currentLocale.languageCode);
    bool isAppInstalled = PlatformHelper.isPwaInstalledOrNative();
    var themeMode = await AdaptiveTheme.getThemeMode();
    setState(()  {
      _themeMode = themeMode;
      _notificationsEnabled = isEnabled;
      _currentLanguage = currentLanguage;
      _isAppInstalled = isAppInstalled;
      _isPromptEnabled = true; //PWAInstall().installPromptEnabled;
    });
  }

  Future<void> handleInstallButtonPress() async {
    try {
      PWAInstall().promptInstall_();
    } catch (e) {
      setState(() {
        _isPlatformSupported = false;
      });
    }
    await loadSettings();
  }

  bool get _canInstallPWA => !_isAppInstalled && _isPlatformSupported && _isPromptEnabled;

  void _setThemeMode(AdaptiveThemeMode mode) {
    setState(() {
      _themeMode = mode;
      AdaptiveTheme.of(context).setThemeMode(mode);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Settings", style: TextStyle(color: ThemeConfig.appBarColorNegative())).tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrInitial(context),
          color: ThemeConfig.appBarColorNegative(),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (AppConfig.availableLanguages().length > 1) ...[
                  const Text("Language Settings", style: TextStyle(fontSize: 20)).tr(),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Current Language: {language}".tr(namedArgs: {"language":_currentLanguage?.name ?? '---'}),
                        style: const TextStyle(fontSize: 16),
                      ),
                      IconButton(
                        onPressed: () async {
                          await DialogHelper.chooseLanguage(context);
                          await loadSettings();
                        },
                        icon: const Icon(Icons.translate),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                ],
                if (AppConfig.isNotificationsCurrentlySupported()) ...[
                  const Text("Notification Settings", style: TextStyle(fontSize: 20)).tr(),
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text("Enable Notifications", style: TextStyle(fontSize: 16)).tr(),
                      Switch(
                        value: _notificationsEnabled,
                        onChanged: (value) async {
                          bool success;
                          if (value) {
                            success = await NotificationHelper.turnNotificationOn();
                          } else {
                            await NotificationHelper.turnNotificationOff();
                            success = true;
                          }
                          if (!success) {
                            setState(() {
                              _notificationError = true;
                            });
                          }
                          await loadSettings();
                        },
                      ),
                    ],
                  ),
                  if (_notificationError)
                    Padding(
                      padding: const EdgeInsets.only(top: 8.0),
                      child: Text(
                        "Failed to enable notifications.",
                        style: TextStyle(color: ThemeConfig.redColor(context)),
                        textAlign: TextAlign.center,
                      ).tr(),
                    ),],
                const SizedBox(height: 24),
                if(ThemeConfig.isDarkModeEnabled)
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text("Appearance", style: TextStyle(fontSize: 20)).tr(),
                    const SizedBox(height: 16),
                    ToggleButtons(
                      isSelected: [
                        _themeMode == AdaptiveThemeMode.dark,
                        _themeMode == AdaptiveThemeMode.system,
                        _themeMode == AdaptiveThemeMode.light,
                      ],
                      onPressed: (int index) {
                        if (index == 0) {
                          _setThemeMode(AdaptiveThemeMode.dark);
                        } else if (index == 1) {
                          _setThemeMode(AdaptiveThemeMode.system);
                        } else if (index == 2) {
                          _setThemeMode(AdaptiveThemeMode.light);
                        }
                      },
                      borderRadius: BorderRadius.circular(8.0),
                      children:  [
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 12.0),
                          child: const Text("Dark").tr(),
                        ),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 12.0),
                          child: Text("Auto").tr(),
                        ),
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 12.0),
                          child: Text("Light").tr(),
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),
                  ],
                ),
                if (kIsWeb) // Only show if running on web
                  Center(
                    child: Column(
                      children: [
                        ButtonsHelper.bigButton(
                          context: context,
                          label: "Install App".tr(),
                          onPressed: _canInstallPWA ? handleInstallButtonPress : null,
                          color: _canInstallPWA ? ThemeConfig.blackColor(context) : Colors.grey,
                          textColor: ThemeConfig.whiteColor(context),
                        ),
                        if (!_isPlatformSupported)
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Text(
                              "This platform or browser does not support the PWA install prompt or the app is already installed.",
                              style: TextStyle(color: ThemeConfig.redColor(context)),
                              textAlign: TextAlign.center,
                            ).tr(),
                          ),
                        if (_isAppInstalled || !_isPromptEnabled)
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: Text(
                              "The app is already installed.",
                              style: TextStyle(fontSize: 16, color: ThemeConfig.blackColor(context)),
                              textAlign: TextAlign.center,
                            ).tr(),
                          ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
