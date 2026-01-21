import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/app_panel_helper.dart';
import 'package:fstapp/components/_shared/red_strip_widget.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/unit/unit_model.dart';
import 'package:fstapp/data_services/update_service.dart';
import 'package:fstapp/components/unit/db_units.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/unit/views/occasions_screen.dart';
import 'package:fstapp/components/unit/views/quotes_tab.dart';
import 'package:fstapp/components/unit/views/unit_users_screen.dart';
import 'package:fstapp/router_service.dart';

import 'package:fstapp/components/unit/views/unit_settings_screen.dart';
import 'package:fstapp/components/email_templates/views/email_templates_tab.dart';
import '../../occasion/occasion_model.dart';
import 'unit_page.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

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
  List<OccasionModel>? _occasions;
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
  void initState() {
    super.initState();
    RightsService.occasionLinkModelNotifier.addListener(_onRightsChanged);
  }

  @override
  void dispose() {
    RightsService.occasionLinkModelNotifier.removeListener(_onRightsChanged);
    super.dispose();
  }

  void _onRightsChanged() {
    if (RightsService.currentUnit()?.id == widget.id) {
      _loadOrganization(force: false);
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

  Future<void> _loadOrganization({bool force = false}) async {
    await UpdateService.versionCheck(context);
    if (RightsService.currentUnit()?.id != widget.id! || force) {
      await RightsService.updateAppData(unitId: widget.id!, force: force);
    }
    try {
      final bundle = await DbUnits.getUnitEditData(widget.id!);
      _currentUnit = bundle.unit;
      _occasions = bundle.occasions;
    } catch (e) {
      // Fallback or error handling
      print("Error loading unit edit data: $e");
    }

    if (_currentUnit != null) {
      // If we are already on a screen, keep it, otherwise default to Occasions
      if (_currentMenu.isEmpty) {
        _setCurrentScreen(OccasionsScreen(unit: _currentUnit!, initialOccasions: _occasions), "Occasions");
      } else {
        // Refresh the current screen if needed, or just let the user stay where they are.
        // For Settings, we might want to re-inject the updated unit.
        if (_currentMenu == "Settings") {
          _setCurrentScreen(
              UnitSettingsScreen(
                  unit: _currentUnit!,
                  onUnitUpdated: _handleUnitUpdate
              ),
              "Settings"
          );
        } else if (_currentMenu == "Occasions") {
             // Refresh occasions screen with new data if we are forcing reload
             _setCurrentScreen(OccasionsScreen(unit: _currentUnit!, initialOccasions: _occasions), "Occasions");
        } else if (_currentMenu == "EmailTemplates") {
          _setCurrentScreen(EmailTemplatesTab(unitId: _currentUnit!.id!), "EmailTemplates");
        }
      }
    } else if (mounted) {
      setState(() {
        _currentScreen = Center(child: Text("Failed to load unit data.".tr()));
      });
    }
  }

  void _handleUnitUpdate() {
    _loadOrganization(force: true);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SafeArea(
          bottom: false,
          child: RedStripWidget(
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
                      onUnitUpdated: _handleUnitUpdate,
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
  final VoidCallback onUnitUpdated;

  static const double collapsedWidth = 56.0;
  static const double expandedWidth = 220.0;

  const SideMenu({
    super.key,
    required this.onMenuItemSelected,
    required this.unit,
    required this.currentMenu,
    required this.onUnitUpdated,
  });

  @override
  State<SideMenu> createState() => _SideMenuState();
}

class _SideMenuState extends State<SideMenu> {
  bool _isExpanded = false;
  String? _hoveredLabel;

  @override
  void initState() {
    super.initState();
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
                    label: CommonStrings.events,
                    isSelected: widget.currentMenu == "Occasions",
                    isExpanded: _isExpanded,
                    isHovered: _hoveredLabel == CommonStrings.events,
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
                  if (RightsService.canSeeUnitUsers())
                    _buildMenuItem(
                      context: context,
                      icon: Icons.people,
                      label: CommonStrings.users,
                      isSelected: widget.currentMenu == "Users",
                      isExpanded: _isExpanded,
                      isHovered: _hoveredLabel == CommonStrings.users,
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
                    if (RightsService.canSeeUnitUsers())
                      _buildMenuItem(
                        context: context,
                        icon: Icons.email,
                        label: "Email Templates".tr(),
                        isSelected: widget.currentMenu == "EmailTemplates",
                        isExpanded: _isExpanded,
                        isHovered: _hoveredLabel == "Email Templates".tr(),
                        onHover: (label) => setState(() => _hoveredLabel = label),
                        onTap: () {
                          if (widget.unit != null) {
                            widget.onMenuItemSelected(
                              EmailTemplatesTab(unitId: widget.unit!.id!),
                              "EmailTemplates",
                            );
                          }
                        },
                      ),
                    if (RightsService.canSeeUnitUsers())
                      _buildMenuItem(
                        context: context,
                        icon: Icons.settings,
                        label: CommonStrings.settings,
                        isSelected: widget.currentMenu == "Settings",
                        isExpanded: _isExpanded,
                        isHovered: _hoveredLabel == CommonStrings.settings,
                        onHover: (label) => setState(() => _hoveredLabel = label),
                        onTap: () {
                          if (widget.unit != null) {
                            widget.onMenuItemSelected(
                              UnitSettingsScreen(
                                unit: widget.unit!,
                                onUnitUpdated: widget.onUnitUpdated,
                              ),
                              "Settings",
                            );
                          }
                        },
                      ),
                ],
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