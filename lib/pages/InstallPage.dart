import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:pwa_install/pwa_install.dart';
import 'package:flutter/services.dart';
import '../services/js/js_interop.dart';

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

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    platform = InstallPage.jsInterop.getOSInsideWeb();
    loadSettings();
    setState(() {});
  }

  Future<void> loadSettings() async {
    bool isAppInstalled = SynchroService.isPwaInstalledOrNative();

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
          padding: const EdgeInsets.all(16.0),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                buildInstallSection(
                  context,
                  "Install for Apple".tr(),
                  Icons.apple,
                  AppConfig.appStoreLink,
                  platform == "ios",
                  isApple: true,
                ),
                buildInstallSection(
                  context,
                  "Install for Android".tr(),
                  Icons.android,
                  AppConfig.playStoreLink,
                  platform == "android",
                ),
                buildInstallSection(
                  context,
                  "Install for PC/Mac".tr(),
                  Icons.desktop_windows,
                  AppConfig.desktopAppLink,
                  platform == "web",
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
      bool initiallyExpanded, {
        bool isApple = false,
        String? notice,
      }) {
    return ExpansionTile(
      initiallyExpanded: initiallyExpanded,
      title: Row(
        children: [
          Icon(icon),
          const SizedBox(width: 10),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
      children: [
        if (notice != null) ...[
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Text(
              notice,
              style: TextStyle(color: Colors.grey[800]),
            ).tr(),
          ),
          const SizedBox(height: 10),
        ],
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: Column(
            children: [
              ButtonsHelper.bigButton(
                label: isApple ? "Download App".tr() : "Install App".tr(),
                onPressed: isApple ? () => InstallPage.jsInterop.openLinkInNewTab(link) : _canInstallPWA ? handleInstallButtonPress : null,
                color: isApple || _canInstallPWA ? ThemeConfig.color1 : Colors.grey,
                textColor: Colors.white,
              ),
              if (_isAppInstalled)
                Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Text(
                    "The app is already installed.",
                    style: TextStyle(fontSize: 16, color: ThemeConfig.color1),
                    textAlign: TextAlign.center,
                  ).tr(),
                ),
              if (!isApple && _installFailed)
                Padding(
                  padding: const EdgeInsets.only(top: 8.0),
                  child: Column(
                    children: [
                      const Text(
                        "Installation failed. Please try opening this link in Chrome, Edge, or a different browser.",
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
                          IconButton(
                            icon: Icon(Icons.copy),
                            onPressed: () {
                              Clipboard.setData(ClipboardData(text: _urlController.text));
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(content: Text('Copied to clipboard')),
                              );
                            },
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
