import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/organization/organization_model.dart';
import 'package:fstapp/components/organization/db_organizations.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/js/js_interop.dart';
import 'package:fstapp/services/platform_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:pwa_install/pwa_install.dart';

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
  bool _isLoading = true;
  bool _didRunInitialLoad = false;
  String platform = "";
  List<PlatformModel> _platforms = [];
  final TextEditingController _urlController = TextEditingController();
  final List<ExpansibleController> _controllers = [
    ExpansibleController(),
    ExpansibleController(),
    ExpansibleController(),
  ];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (!_didRunInitialLoad) {
      _didRunInitialLoad = true;
      _loadInitialData();
    }
  }

  Future<void> _loadInitialData() async {
    platform = InstallPage.jsInterop.getOSInsideWeb();
    try {
      final platforms = await DbOrganizations.getAvailablePlatforms(
          organizationId: AppConfig.organization);
      if (mounted) {
        setState(() {
          _platforms = platforms;
        });
      }
    } catch (e) {
      print("Failed to load platforms: $e");
      if (mounted) {
        ToastHelper.Show(context, "Failed to load installation options.".tr(),
            severity: ToastSeverity.NotOk);
      }
    }
    await _loadPwaSettings();
    if (mounted) {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<void> _loadPwaSettings() async {
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
      final webLink =
          _platforms.firstWhereOrNull((p) => p.platform == 'web')?.link ??
              RouterService.getCurrentUri().toString();
      setState(() {
        _installFailed = true;
        _urlController.text = webLink;
        _urlController.selection = TextSelection(
            baseOffset: 0, extentOffset: _urlController.text.length);
      });
    }
    await _loadPwaSettings();
  }

  bool get _canInstallPWA =>
      !_isAppInstalled && !_installFailed && _isPromptEnabled;

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
    final appleLink =
        _platforms.firstWhereOrNull((p) => p.platform == 'ios')?.link;
    final androidLink =
        _platforms.firstWhereOrNull((p) => p.platform == 'droid')?.link;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Install App").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrInitial(context),
        ),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : Align(
              alignment: Alignment.topCenter,
              child: Padding(
                padding: const EdgeInsets.all(32.0),
                child: ConstrainedBox(
                  constraints:
                      BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
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
                                image: const DecorationImage(
                                  image:
                                      AssetImage('assets/icons/fstappicon.png'),
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            const SizedBox(width: 22),
                            Expanded(
                              child: Text(
                                "Install {title} to get notifications, offline functionality, and a quick launch icon."
                                    .tr(namedArgs: {
                                  "title": AppConfig.appName
                                }),
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
                      if (appleLink != null && appleLink.isNotEmpty)
                        buildInstallSection(
                          context,
                          "Install for Apple".tr(),
                          Icons.apple,
                          appleLink,
                          0,
                        ),
                      buildInstallSection(
                        context,
                        "Install for Android".tr(),
                        Icons.android,
                        androidLink,
                        1,
                        notice: androidLink == null || androidLink.isEmpty
                            ? "Open this website on your Android phone in a browser like Chrome or Edge and hit the Install Now button."
                                .tr()
                            : null,
                      ),
                      buildInstallSection(
                        context,
                        "Install for PC/Mac".tr(),
                        Icons.desktop_windows,
                        null,
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
    String? link,
    int index, {
    String? notice,
  }) {
    final bool hasNativeLink = link != null && link.isNotEmpty;
    return ExpansionTile(
      controller: _controllers[index],
      initiallyExpanded: platform == "ios" && index == 0 ||
          platform == "android" && index == 1 ||
          platform == "web" && index == 2,
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
              style: TextStyle(
                  color: ThemeConfig.blackColor(context).withOpacity(0.8)),
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
                label: hasNativeLink ? "Download App".tr() : "Install Now".tr(),
                onPressed: hasNativeLink
                    ? () => InstallPage.jsInterop.openLinkInNewTab(link)
                    : _canInstallPWA
                        ? handleInstallButtonPress
                        : null,
                color: (hasNativeLink || _canInstallPWA)
                    ? ThemeConfig.seed1
                    : Colors.grey,
                textColor: Colors.white,
              ),
              if (!hasNativeLink) ...[
                if (_isAppInstalled)
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      "The app is already installed.",
                      style: TextStyle(fontSize: 16, color: ThemeConfig.seed1),
                      textAlign: TextAlign.center,
                    ).tr(),
                  ),
                if (_installFailed)
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
                                Clipboard.setData(
                                    ClipboardData(text: _urlController.text));
                                ToastHelper.Show(
                                    context, "Copied to clipboard".tr());
                              },
                              icon: const Icon(Icons.copy),
                              label: const Text("Copy Link").tr(),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
              ]
            ],
          ),
        ),
        const SizedBox(height: 16),
      ],
    );
  }
}
