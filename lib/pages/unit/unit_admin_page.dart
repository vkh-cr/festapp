import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/app_panel_helper.dart';
import 'package:fstapp/components/_shared/red_strip_widget.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/app_config_service.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/unit/occasions_screen.dart';
import 'package:fstapp/pages/unit/quotes_tab.dart';
import 'package:fstapp/pages/unit/unit_users_screen.dart';
import 'package:fstapp/router_service.dart';
import 'package:package_info_plus/package_info_plus.dart';

import 'unit_page.dart';

@RoutePage()
class UnitAdminPage extends StatefulWidget {
  int? id;
  static const double contentMaxWidth = 1000.0;

  UnitAdminPage({@pathParam required this.id, super.key});

  @override
  _UnitAdminPageState createState() => _UnitAdminPageState();
}

class _UnitAdminPageState extends State<UnitAdminPage> {
  UnitModel? _currentUnit;
  Widget _currentScreen = const Center(child: CircularProgressIndicator());
  String _currentMenu = "";

  void _setCurrentScreen(Widget screen, String menu) {
    if (mounted) {
      setState(() {
        _currentScreen = screen;
        _currentMenu = menu;
      });
    }
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].params.getInt("id");
    }
    _loadOrganization();
  }

  Future<void> _loadOrganization() async {
    await AppConfigService.versionCheck(context);
    if (RightsService.currentUnit()?.id != widget.id!){
      await RightsService.updateAppData(unitId: widget.id!);
    }
    _currentUnit = await DbUsers.getCurrentUnit(widget.id!);
    if (_currentUnit != null) {
      _setCurrentScreen(OccasionsScreen(unit: _currentUnit!), "Occasions");
    } else if (mounted) {
      setState(() {
        _currentScreen = Center(child: Text("Failed to load unit data.".tr()));
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SafeArea(
          bottom: false,
          child: RedStripWidget(
            text: 'Došlo ke změně domény. Nadále využívejte <a href="https://vstupenky.online" style="text-decoration: underline;">vstupenky.online</a> místo <s>vstupenka.online</s>. Existující odkazy na formuláře není třeba měnit, vše bude fungovat bez změn.',
          ),
        ),
        Expanded(
          child: Scaffold(
            appBar: AppPanelHelper.buildAdaptiveAdminAppBar(context),
            body: SafeArea(
              top: false, // Top padding is now handled above
              child: Stack(
                children: [
                  Row(
                    children: [
                      const SizedBox(width: SideMenu.collapsedWidth),
                      Expanded(
                        // Conditionally apply the width constraint ONLY for the "Occasions" screen.
                        child: (_currentMenu == "Occasions")
                            ? Center(
                          child: ConstrainedBox(
                            constraints: const BoxConstraints(
                                maxWidth: UnitAdminPage.contentMaxWidth),
                            child: _currentScreen,
                          ),
                        )
                            : _currentScreen, // Other screens take the full available width.
                      ),
                    ],
                  ),
                  SideMenu(
                    onMenuItemSelected: _setCurrentScreen,
                    unit: _currentUnit,
                    currentMenu: _currentMenu,
                  ),
                ],
              ),
            ),
            floatingActionButton: FloatingActionButton(
              onPressed: () {
                RouterService.navigate(context, "${UnitPage.ROUTE}/${widget.id}")
                    .then((_) => _loadOrganization());
              },
              child: const Icon(Icons.remove_red_eye_rounded),
            ),
          ),
        ),
      ],
    );
  }
}

class SideMenu extends StatefulWidget {
  final Function(Widget, String) onMenuItemSelected;
  final UnitModel? unit;
  final String currentMenu;

  static const double collapsedWidth = 56.0;
  static const double expandedWidth = 220.0;

  const SideMenu({
    super.key,
    required this.onMenuItemSelected,
    required this.unit,
    required this.currentMenu,
  });

  @override
  State<SideMenu> createState() => _SideMenuState();
}

class _SideMenuState extends State<SideMenu> {
  bool _isExpanded = false;
  String _versionInfo = "";
  String? _hoveredLabel;

  @override
  void initState() {
    super.initState();
    _loadVersionInfo();
  }

  Future<void> _loadVersionInfo() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    if (mounted) {
      setState(() {
        _versionInfo = "${packageInfo.version}+${packageInfo.buildNumber}";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        if (!_isExpanded) setState(() => _isExpanded = true);
      },
      onExit: (_) {
        if (_isExpanded) setState(() => _isExpanded = false);
      },
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        curve: Curves.easeOut,
        width: _isExpanded ? SideMenu.expandedWidth : SideMenu.collapsedWidth,
        decoration: BoxDecoration(
          color: Theme.of(context).canvasColor,
          border: Border(
            right: BorderSide(
              color: Theme.of(context).dividerColor,
              width: 1.0,
            ),
          ),
        ),
        child: Column(
          children: [
            Expanded(
              child: ListView(
                padding: EdgeInsets.zero,
                children: [
                  _buildMenuItem(
                    context: context,
                    icon: Icons.calendar_month,
                    label: "Events".tr(),
                    isSelected: widget.currentMenu == "Occasions",
                    isExpanded: _isExpanded,
                    isHovered: _hoveredLabel == "Events".tr(),
                    onHover: (label) => setState(() => _hoveredLabel = label),
                    onTap: () {
                      if (widget.unit != null) {
                        widget.onMenuItemSelected(
                          OccasionsScreen(unit: widget.unit!),
                          "Occasions",
                        );
                      }
                    },
                  ),
                  _buildMenuItem(
                    context: context,
                    icon: Icons.people,
                    label: "Users".tr(),
                    isSelected: widget.currentMenu == "Users",
                    isExpanded: _isExpanded,
                    isHovered: _hoveredLabel == "Users".tr(),
                    onHover: (label) => setState(() => _hoveredLabel = label),
                    onTap: () {
                      if (widget.unit != null) {
                        widget.onMenuItemSelected(
                          UnitUsersScreen(unit: widget.unit!),
                          "Users",
                        );
                      }
                    },
                  ),
                  if (widget.unit != null &&
                      FeatureService.isFeatureEnabled(FeatureConstants.quotes,
                          features: widget.unit!.features))
                    _buildMenuItem(
                      context: context,
                      icon: Icons.format_quote,
                      label: "Quotes".tr(),
                      isSelected: widget.currentMenu == "Quotes",
                      isExpanded: _isExpanded,
                      isHovered: _hoveredLabel == "Quotes".tr(),
                      onHover: (label) => setState(() => _hoveredLabel = label),
                      onTap: () {
                        widget.onMenuItemSelected(
                          QuotesTab(unitId: widget.unit!.id!),
                          "Quotes",
                        );
                      },
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: AnimatedOpacity(
                duration: const Duration(milliseconds: 100),
                opacity: _isExpanded ? 1.0 : 0.0,
                child: Text(
                  _versionInfo,
                  style: const TextStyle(fontSize: 12),
                  maxLines: 1,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMenuItem({
    required BuildContext context,
    required IconData icon,
    required String label,
    required bool isSelected,
    required bool isExpanded,
    required bool isHovered,
    required VoidCallback onTap,
    required Function(String?) onHover,
  }) {
    final bool isHighlighted = isSelected || isHovered;

    final Color highlightColor;
    if (Theme.of(context).brightness == Brightness.dark) {
      highlightColor = Colors.white.withOpacity(0.15);
    } else {
      highlightColor = Theme.of(context).splashColor;
    }

    const double horizontalMargin = 4.0;
    const double iconSize = 22.0;
    final double iconHorizontalPadding =
        (SideMenu.collapsedWidth - (horizontalMargin * 2) - iconSize) / 2;

    return MouseRegion(
      onEnter: (_) => onHover(label),
      onExit: (_) => onHover(null),
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          margin: const EdgeInsets.symmetric(
              horizontal: horizontalMargin, vertical: 2.0),
          padding: const EdgeInsets.symmetric(vertical: 10.0),
          decoration: BoxDecoration(
            color: isHighlighted ? highlightColor : Colors.transparent,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            children: [
              Padding(
                padding: EdgeInsets.symmetric(horizontal: iconHorizontalPadding),
                child: Icon(icon, size: iconSize),
              ),
              Expanded(
                child: AnimatedOpacity(
                  duration: const Duration(milliseconds: 100),
                  opacity: isExpanded ? 1.0 : 0.0,
                  child: Text(
                    label,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight:
                      isSelected ? FontWeight.bold : FontWeight.normal,
                    ),
                    softWrap: false,
                    overflow: TextOverflow.clip,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}