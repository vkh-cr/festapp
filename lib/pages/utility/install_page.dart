import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:flutter/services.dart';
import '../../services/js/js_interop.dart';

@RoutePage()
class InstallPage extends StatefulWidget {
  static final JSInterop jsInterop = JSInterop();
  static const ROUTE = "install";
  const InstallPage({super.key});

  @override
  _InstallPageState createState() => _InstallPageState();
}

class _InstallPageState extends State<InstallPage> {
  bool _isAppInstalled = false;
  bool _isPromptEnabled = false;
  bool _installFailed = false;
  String platform = "";
  final TextEditingController _urlController = TextEditingController();
  final List<ExpansionTileController> _controllers = [
    ExpansionTileController(),
    ExpansionTileController(),
    ExpansionTileController(),
  ];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    platform = InstallPage.jsInterop.getOSInsideWeb();
    loadSettings();
    setState(() {});
  }

  Future<void> loadSettings() async {
    bool isAppInstalled = PlatformHelper.isPwaInstalledOrNative();

    setState(() {
      _isAppInstalled = isAppInstalled;
      _isPromptEnabled = true;
    });
  }

  Future<void> handleInstallButtonPress() async {
    try {
      PWAInstall().promptInstall_();
    } catch (e) {
      setState(() {
        _installFailed = true;
        _urlController.text = RouterService.getCurrentUri().toString();
        _urlController.selection = TextSelection(baseOffset: 0, extentOffset: _urlController.text.length);
      });
    }
    await loadSettings();
  }

  bool get _canInstallPWA => !_isAppInstalled && !_installFailed && _isPromptEnabled;

  void _handleExpansion(int index) {
    setState(() {
      for (int i = 0; i < _controllers.length; i++) {
        if (i == index) {
          _controllers[i].expand();
        } else {
          _controllers[i].collapse();
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Install App").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrInitial(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: Padding(
          padding: const EdgeInsets.all(32.0),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // App Icon and Explanation
                Center(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Container(
                        width: 64,
                        height: 64,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12.0),
                          image: DecorationImage(
                            image: AssetImage('assets/icons/fstappicon.png'),
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                      const SizedBox(width: 22),
                      Expanded(
                        child: Text(
                          "Install {title} to get notifications, offline functionality, and a quick launch icon.".tr(namedArgs: {"title":AppConfig.appName}),
                          style: TextStyle(
                            fontSize: 16,
                            color: ThemeConfig.blackColor(context),
                          ),
                        ).tr(),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 48),
                // Install Sections
                buildInstallSection(
                  context,
                  "Install for Apple".tr(),
                  Icons.apple,
                  AppConfig.appStoreLink,
                  0,
                  isApple: true,
                ),
                buildInstallSection(
                  context,
                  "Install for Android".tr(),
                  Icons.android,
                  AppConfig.playStoreLink,
                  1,
                  notice: "Open this website on your Android phone in a browser like Chrome or Edge and hit the Install Now button.".tr(),
                ),
                buildInstallSection(
                  context,
                  "Install for PC/Mac".tr(),
                  Icons.desktop_windows,
                  AppConfig.desktopAppLink,
                  2,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildInstallSection(
      BuildContext context,
      String title,
      IconData icon,
      String link,
      int index, {
        bool isApple = false,
        String? notice,
      }) {
    return ExpansionTile(
      controller: _controllers[index],
      initiallyExpanded: platform == "ios" && index == 0 || platform == "android" && index == 1 || platform == "web" && index == 2,
      title: Row(
        children: [
          Icon(icon, size: 24),
          const SizedBox(width: 10),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
      onExpansionChanged: (expanded) {
        if (expanded) {
          _handleExpansion(index);
        }
      },
      children: [
        if (notice != null) ...[
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Text(
              notice,
              style: TextStyle(color: ThemeConfig.blackColor(context).withOpacity(0.8)),
            ).tr(),
          ),
          const SizedBox(height: 10),
        ],
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Column(
            children: [
              ButtonsHelper.bigButton(
                context: context,
                label: isApple ? "Download App".tr() : "Install Now".tr(),
                onPressed: isApple ? () => InstallPage.jsInterop.openLinkInNewTab(link) : _canInstallPWA ? handleInstallButtonPress : null,
                color: isApple || _canInstallPWA ? ThemeConfig.seed1 : Colors.grey,
                textColor: Colors.white,
              ),
              if (_isAppInstalled)
                Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Text(
                    "The app is already installed.",
                    style: TextStyle(fontSize: 16, color: ThemeConfig.seed1),
                    textAlign: TextAlign.center,
                  ).tr(),
                ),
              if (!isApple && _installFailed)
                Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Column(
                    children: [
                      const Text(
                        "Installation failed. Please open this link in your device's default system browser (e.g., Mi Browser or Chrome). Note: Some devices may not support installing web applications.",
                        style: TextStyle(color: Colors.red),
                        textAlign: TextAlign.center,
                      ).tr(),
                      const SizedBox(height: 8.0),
                      Row(
                        children: [
                          Expanded(
                            child: TextFormField(
                              controller: _urlController,
                              readOnly: true,
                            ),
                          ),
                          const SizedBox(width: 8.0),
                          TextButton.icon(
                            onPressed: () {
                              Clipboard.setData(ClipboardData(text: _urlController.text));
                              ToastHelper.Show(context, "Copied to clipboard".tr());
                            },
                            icon: Icon(Icons.copy),
                            label: Text("Copy Link").tr(),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
            ],
          ),
        ),
        const SizedBox(height: 16),
      ],
    );
  }
}
