import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/LanguageModel.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
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
    LanguageModel? currentLanguage = AppConfig.availableLanguages.firstWhere((language) => language.locale.languageCode == currentLocale.languageCode);
    bool isAppInstalled = SynchroService.isPwaInstalledOrNative();
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
        title: const Text("Settings").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrInitial(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (AppConfig.availableLanguages.length > 1) ...[
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
                      child: const Text(
                        "Failed to enable notifications.",
                        style: TextStyle(color: Colors.red),
                        textAlign: TextAlign.center,
                      ).tr(),
                    ),],
                const SizedBox(height: 24),
                const Text("Theme Settings", style: TextStyle(fontSize: 20)).tr(),
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
                  children: const [
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 12.0),
                      child: Text("Dark"),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 12.0),
                      child: Text("Auto"),
                    ),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 12.0),
                      child: Text("Light"),
                    ),
                  ],
                ),
                const SizedBox(height: 24),
                if (kIsWeb) // Only show if running on web
                  Center(
                    child: Column(
                      children: [
                        ButtonsHelper.bigButton(
                          context: context,
                          label: "Install App".tr(),
                          onPressed: _canInstallPWA ? handleInstallButtonPress : null,
                          color: _canInstallPWA ? ThemeConfig.blackColor(context) : Colors.grey,
                          textColor: Colors.white,
                        ),
                        if (!_isPlatformSupported)
                          Padding(
                            padding: const EdgeInsets.only(top: 8.0),
                            child: const Text(
                              "This platform or browser does not support the PWA install prompt or the app is already installed.",
                              style: TextStyle(color: Colors.red),
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
