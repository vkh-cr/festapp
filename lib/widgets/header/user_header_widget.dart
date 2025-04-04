import 'package:adaptive_theme/adaptive_theme.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/language_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/user/login_page.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/responsive_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:flutter/material.dart';

class UserHeaderWidget extends StatefulWidget {
  final Color? appBarIconColor;
  const UserHeaderWidget({Key? key, this.appBarIconColor}) : super(key: key);

  @override
  _UserHeaderWidgetState createState() => _UserHeaderWidgetState();
}

class _UserHeaderWidgetState extends State<UserHeaderWidget> {
  final GlobalKey _settingsKey = GlobalKey();
  final GlobalKey _userKey = GlobalKey();
  AdaptiveThemeMode? _currentThemeMode;

  // Define the popover width as a constant.
  static const double _popoverWidth = 300;

  @override
  void initState() {
    super.initState();
    AdaptiveTheme.getThemeMode().then((mode) {
      setState(() {
        _currentThemeMode = mode;
      });
    });
  }

  /// Returns the first letter of the user's name in uppercase.
  String _getUserInitial() {
    final user = RightsService.currentUser;
    String fullName = user?.name ?? "U";
    return fullName.isNotEmpty ? fullName[0].toUpperCase() : "U";
  }

  /// Extracted widget for the settings content (language & appearance).
  Widget _buildSettingsContentInner(StateSetter setState) {
    List<LanguageModel> languages = AppConfig.availableLanguages();
    LanguageModel currentLanguage = languages.firstWhere(
          (lang) => lang.locale.languageCode == context.locale.languageCode,
      orElse: () => languages.first,
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (languages.length > 1) ...[
          Text("Language Settings",
              style: TextStyle(
                  fontSize: 16, color: ThemeConfig.blackColor(context)))
              .tr(),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Current Language: {language}"
                    .tr(namedArgs: {"language": currentLanguage.name}),
                style: TextStyle(
                    fontSize: 14, color: ThemeConfig.blackColor(context)),
              ),
              IconButton(
                onPressed: () async {
                  await DialogHelper.chooseLanguage(context);
                  setState(() {}); // refresh after language change
                },
                icon: Icon(
                  Icons.translate,
                  color: ThemeConfig.bottomNavSelectedItemColor(context),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
        ],
        Text("Appearance",
            style: TextStyle(
                fontSize: 16, color: ThemeConfig.blackColor(context)))
            .tr(),
        const SizedBox(height: 8),
        ToggleButtons(
          isSelected: [
            _currentThemeMode == AdaptiveThemeMode.dark,
            _currentThemeMode == AdaptiveThemeMode.system,
            _currentThemeMode == AdaptiveThemeMode.light,
          ],
          onPressed: (int index) {
            AdaptiveThemeMode mode;
            if (index == 0) {
              mode = AdaptiveThemeMode.dark;
            } else if (index == 1) {
              mode = AdaptiveThemeMode.system;
            } else {
              mode = AdaptiveThemeMode.light;
            }
            AdaptiveTheme.of(context).setThemeMode(mode);
            setState(() {
              _currentThemeMode = mode;
            });
          },
          borderRadius: BorderRadius.circular(8.0),
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12.0),
              child: Text("Dark",
                  style: TextStyle(
                      color: ThemeConfig.blackColor(context)))
                  .tr(),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12.0),
              child: Text("Auto",
                  style: TextStyle(
                      color: ThemeConfig.blackColor(context)))
                  .tr(),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 12.0),
              child: Text("Light",
                  style: TextStyle(
                      color: ThemeConfig.blackColor(context)))
                  .tr(),
            ),
          ],
        ),
      ],
    );
  }

  /// Common popover wrapper that applies constraints, decoration and places a cross button.
  Widget _buildPopoverWrapper(Widget content) {
    // Use a Builder so that we always have the current Theme.
    return Builder(
      builder: (context) {
        return Center(
          child: Stack(
            children: [
              Container(
                width: _popoverWidth,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  color: Theme.of(context).cardColor,
                ),
                child: content,
              ),
              Positioned(
                top: 4,
                right: 4,
                child: IconButton(
                  icon: Icon(
                    Icons.close,
                    size: 28,
                    color: ThemeConfig.blackColor(context),
                  ),
                  onPressed: () => Navigator.pop(context),
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  hoverColor: Colors.transparent,
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  /// Combined popover for signed in state.
  void _showSignedInPopover() {
    final RenderBox? button =
    _userKey.currentContext?.findRenderObject() as RenderBox?;
    if (button == null) return;
    final Offset offset = button.localToGlobal(Offset.zero);
    final Size size = button.size;
    showMenu(
      context: context,
      constraints: const BoxConstraints(maxWidth: _popoverWidth),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      position: RelativeRect.fromLTRB(
        offset.dx,
        offset.dy + size.height,
        offset.dx + size.width,
        offset.dy,
      ),
      items: [
        PopupMenuItem(
          enabled: false,
          child: StatefulBuilder(
            builder: (context, localSetState) {
              final user = RightsService.currentUser;
              final String fullName = user?.name ?? "User".tr();
              final String surname = user?.surname ?? "";
              final String email = user?.email ?? "";
              return _buildPopoverWrapper(
                Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Center(
                      child: Container(
                        width: 60,
                        height: 60,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: ThemeConfig.bottomNavSelectedItemColor(context),
                            width: 2,
                          ),
                          color: ThemeConfig.bottomNavSelectedItemColor(context),
                        ),
                        child: Center(
                          child: Text(
                            _getUserInitial(),
                            style: const TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 12),
                    Center(
                      child: Column(
                        children: [
                          SelectableText(
                            "$fullName $surname",
                            style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                                color: ThemeConfig.blackColor(context)),
                          ),
                          const SizedBox(height: 4),
                          SelectableText(
                            email,
                            style: TextStyle(
                                fontSize: 14,
                                color: ThemeConfig.blackColor(context)),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 32),
                    Builder(
                      builder: (context) {
                        final units = RightsService.currentUser?.getUnitsWithEditorAccess();
                        if (units == null || units.isEmpty) return SizedBox.shrink();
                        return Column(
                          children: units
                              .map<Widget>(
                                (unit) => ListTile(
                              title: Text(
                                unit.title ?? "---",
                                style: TextStyle(
                                    fontSize: 16,
                                    color: ThemeConfig.blackColor(context)),
                              ),
                              trailing: Icon(
                                Icons.chevron_right,
                                color: ThemeConfig.blackColor(context),
                              ),
                              onTap: () {
                                Navigator.pop(context);
                                RouterService.navigate(context, "unit/${unit.id}/edit");
                              },
                            ),
                          )
                              .toList(),
                        );
                      },
                    ),
                    const Divider(),
                    const SizedBox(height: 16),
                    _buildSettingsContentInner(localSetState),
                    const SizedBox(height: 16),
                    const Divider(),
                    ListTile(
                      leading: Icon(
                        Icons.logout,
                        color: Theme.of(context).primaryColor,
                      ),
                      title: Text(
                        "Sign out",
                        style: TextStyle(
                            fontSize: 16,
                            color: ThemeConfig.blackColor(context)),
                      ).tr(),
                      onTap: () async {
                        Navigator.pop(context);
                        var unit = RightsService.currentUnitUser?.unit;
                        await AuthService.logout();
                        await RouterService.goToUnit(context, unit);

                        if (mounted) setState(() {});
                      },
                    ),
                  ],
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  /// Popover for not-signed in state.
  void _showSettingsPopover() {
    final RenderBox? button =
    _settingsKey.currentContext?.findRenderObject() as RenderBox?;
    if (button == null) return;
    final Offset offset = button.localToGlobal(Offset.zero);
    final Size size = button.size;
    showMenu(
      context: context,
      constraints: const BoxConstraints(maxWidth: _popoverWidth),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      position: RelativeRect.fromLTRB(
        offset.dx,
        offset.dy + size.height,
        offset.dx + size.width,
        offset.dy,
      ),
      items: [
        PopupMenuItem(
          enabled: false,
          child: StatefulBuilder(
            builder: (context, localSetState) {
              return _buildPopoverWrapper(
                _buildSettingsContentInner(localSetState),
              );
            },
          ),
        ),
      ],
    );
  }

  /// Unified widget for signed-in state (same for mobile and desktop).
  Widget _buildSignedInWidget(Color iconColor) {
    return InkWell(
      key: _userKey,
      onTap: _showSignedInPopover,
      child: Container(
        width: 38,
        height: 38,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(
            color: ThemeConfig.bottomNavSelectedItemColor(context),
            width: 2,
          ),
          color: ThemeConfig.bottomNavSelectedItemColor(context),
        ),
        child: Center(
          child: Text(
            _getUserInitial(),
            style: const TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bool isSignedIn = AuthService.isLoggedIn();
    final bool isMobile = ResponsiveService.isMobile(context);
    final iconColor = widget.appBarIconColor ?? ThemeConfig.blackColor(context);

    if (isSignedIn) {
      // Return the same signed-in widget regardless of platform.
      return _buildSignedInWidget(iconColor);
    } else {
      // Non-signed in state remains platform-specific.
      if (isMobile) {
        return Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            IconButton(
              key: _userKey,
              constraints: const BoxConstraints(
                minWidth: 32,
                minHeight: 32,
              ),
              icon: Icon(
                Icons.person,
                size: 32,
                color: iconColor,
              ),
              tooltip: "Sign In".tr(),
              onPressed: () async {
                await RouterService.navigate(context, LoginPage.ROUTE);
                setState(() {});
              },
            ),
            const SizedBox(width: 8),
            IconButton(
              key: _settingsKey,
              constraints: const BoxConstraints(
                minWidth: 32,
                minHeight: 32,
              ),
              icon: Icon(
                Icons.settings,
                color: iconColor,
                size: 32,
              ),
              tooltip: "Settings".tr(),
              onPressed: _showSettingsPopover,
            ),
          ],
        );
      } else {
        return Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            OutlinedButton.icon(
              onPressed: () async {
                await RouterService.navigate(context, LoginPage.ROUTE);
                setState(() {}); // refresh after sign in
              },
              icon: Icon(
                Icons.person,
                color: iconColor,
              ),
              label: const Text("Sign in").tr(),
              style: OutlinedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(28),
                ),
                side: BorderSide(
                  color: iconColor,
                ),
                padding:
                const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
                textStyle: const TextStyle(fontSize: 16),
              ),
            ),
            const SizedBox(width: 16),
            IconButton(
              key: _settingsKey,
              onPressed: _showSettingsPopover,
              icon: Icon(
                Icons.settings,
                color: iconColor,
                size: 28,
              ),
              tooltip: "Settings".tr(),
            ),
          ],
        );
      }
    }
  }
}