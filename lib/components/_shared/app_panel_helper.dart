import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/_shared/project_picker_widget.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/single_data_grid/admin_page_helper.dart';
import 'package:fstapp/data_models/occasion_model.dart';
import 'package:fstapp/data_models/unit_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/pages/form/pages/reservation_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/occasion_creation_helper.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/header/user_header_widget.dart';
import 'package:fstapp/widgets/logo_widget.dart';
import 'admin_strings.dart';

/// A simple, private helper class to neatly store information for our action menu.
class _ActionMenuItem {
  final String label;
  final IconData? icon;
  final VoidCallback onSelect;

  _ActionMenuItem({
    required this.label,
    this.icon,
    required this.onSelect,
  });

  // Override for correct comparison
  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is _ActionMenuItem &&
              runtimeType == other.runtimeType &&
              label == other.label;

  @override
  int get hashCode => label.hashCode;
}


class AppPanelHelper {
  /// This method returns a breadcrumb widget for navigating units and occasions.
  static Widget _buildBreadcrumbs(BuildContext context, {bool isMobile = false}) {
    final allUnits = RightsService.currentUser()?.units ?? [];
    final currentUnit = RightsService.currentUnit();
    final occasionsInCurrentUnit = RightsService.currentUser()?.occasions ?? [];
    final currentOccasion = RightsService.currentOccasion();

    final ScrollController? scrollController = isMobile ? ScrollController() : null;

    List<Widget> breadcrumbItems = [];

    // Unit Selector
    if (currentUnit != null) {
      breadcrumbItems.add(_buildBreadcrumbSegment<UnitModel>(
        context: context,
        title: currentUnit.title ?? '---',
        isBold: currentOccasion == null,
        items: allUnits,
        selectedItem: currentUnit,
        itemTitleBuilder: (item) => item.title ?? '---',
        onItemSelected: (item) async {
          await RouterService.navigateToUnit(context, item);
        },
        onCreateNew: null,
        onTitleTap: () async => await RouterService.navigateToUnit(context, currentUnit),
        searchHintText: AdministrationStrings.findUnitHint,
        createNewText: AdministrationStrings.newUnitButton,
      ));
    }

    // Separator, Occasion Selector, and new Action Selector
    if (currentUnit != null && currentOccasion != null) {
      final onAppBarColor = Theme.of(context).appBarTheme.foregroundColor ?? Colors.white;
      // Separator
      breadcrumbItems.add(Padding(
        padding: const EdgeInsets.symmetric(horizontal: 4.0),
        child: Text("/", style: TextStyle(fontSize: 16, color: onAppBarColor.withOpacity(0.4))),
      ));

      // Occasion Selector
      breadcrumbItems.add(_buildBreadcrumbSegment<OccasionModel>(
        context: context,
        title: currentOccasion.title ?? '---',
        isBold: true,
        items: occasionsInCurrentUnit,
        selectedItem: currentOccasion,
        itemTitleBuilder: (item) => item.title ?? '---',
        onItemSelected: (item) async {
          if (item.link != null) {
            await RouterService.navigateToOccasionByLink(context, item.link!);
          }
        },
        onCreateNew: !RightsService.isUnitEditor() ? null :
            () => OccasionCreationHelper.createNewOccasion(context, currentUnit, occasionsInCurrentUnit, () async {
          if (currentOccasion.link != null) {
            await RouterService.navigateToOccasionByLink(context, currentOccasion.link!);
          }
        }),
        onTitleTap: () async {
          if (currentOccasion.link != null) {
            await RouterService.navigateToOccasionByLink(context, currentOccasion.link!);
          }
        },
        searchHintText: AdministrationStrings.findOccasionHint,
        createNewText: AdministrationStrings.newOccasionButton,
      ));

      // Build the state-aware action menu
      if (AppConfig.isAppSupported) {
        final adminAction = _ActionMenuItem(
          label: 'Event management'.tr(),
          icon: Icons.admin_panel_settings,
          onSelect: () async => await RouterService.navigateOccasion(context, AdminPage.ROUTE),
        );

        final viewAppAction = _ActionMenuItem(
          label: AdministrationStrings.viewApp,
          icon: Icons.visibility,
          onSelect: () async => await RouterService.navigateOccasion(context, ""),
        );

        final reservationsAction = _ActionMenuItem(
          label: 'Reservations'.tr(),
          icon: Icons.shopping_cart,
          onSelect: () async => await RouterService.navigateOccasion(context, ReservationsPage.ROUTE),
        );

        final List<_ActionMenuItem> availableActions = [];
        if (FeatureService.isFeatureEnabled(FeatureConstants.form, features: currentOccasion.features)) {
          availableActions.add(reservationsAction);
        }
        availableActions.add(adminAction);
        availableActions.add(viewAppAction);

        final currentPath = context.routeData.path;
        _ActionMenuItem currentAction;

        if (currentPath.endsWith(ReservationsPage.ROUTE)) {
          currentAction = reservationsAction;
        } else if (currentPath.endsWith(AdminPage.ROUTE)) {
          currentAction = adminAction;
        } else {
          currentAction = viewAppAction;
        }

        if (availableActions.length > 1) {
          breadcrumbItems.add(Padding(
            padding: const EdgeInsets.symmetric(horizontal: 4.0),
            child: Text("/", style: TextStyle(fontSize: 16, color: onAppBarColor.withOpacity(0.4))),
          ));
          breadcrumbItems.add(_buildActionPickerSegment(
            context: context,
            currentAction: currentAction,
            availableActions: availableActions,
            iconOnly: isMobile,
          ));
        }
      }
    }

    if (isMobile && scrollController != null) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (scrollController.hasClients) {
          scrollController.jumpTo(scrollController.position.maxScrollExtent);
        }
      });
    }

    return SingleChildScrollView(
      controller: scrollController,
      scrollDirection: Axis.horizontal,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: breadcrumbItems,
      ),
    );
  }

  /// A dedicated builder for the final action picker segment.
  static Widget _buildActionPickerSegment({
    required BuildContext context,
    required _ActionMenuItem currentAction,
    required List<_ActionMenuItem> availableActions,
    bool iconOnly = false,
  }) {
    final theme = Theme.of(context);
    final onAppBarColor = theme.appBarTheme.foregroundColor ?? Colors.white;
    final textStyle = TextStyle(
        fontSize: 16,
        color: onAppBarColor,
        fontWeight: FontWeight.bold);
    final iconColor = onAppBarColor.withOpacity(0.7);
    final hoverColor = Colors.black.withOpacity(0.15);

    Widget visiblePart;
    if (iconOnly && currentAction.icon != null) {
      visiblePart = Padding(
        padding: const EdgeInsets.fromLTRB(6, 6, 2, 6),
        child: Icon(currentAction.icon, color: onAppBarColor, size: 24),
      );
    } else {
      visiblePart = Padding(
        padding: const EdgeInsets.fromLTRB(8, 6, 4, 6),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (currentAction.icon != null) ...[
              Icon(currentAction.icon, color: onAppBarColor, size: 18),
              const SizedBox(width: 6),
            ],
            Text(currentAction.label, style: textStyle),
          ],
        ),
      );
    }

    // The entire segment is now the trigger for the custom dialog
    return Builder(
        builder: (buttonContext) {
          return ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                hoverColor: hoverColor,
                borderRadius: BorderRadius.circular(6),
                onTap: () {
                  _showActionPicker(
                      buttonContext: buttonContext,
                      currentAction: currentAction,
                      availableActions: availableActions
                  );
                },
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    visiblePart,
                    Padding(
                      padding: const EdgeInsets.only(right: 4),
                      child: Icon(Icons.arrow_drop_down, color: iconColor, size: 22),
                    ),
                  ],
                ),
              ),
            ),
          );
        }
    );
  }

  /// Displays a custom rounded dialog for selecting an action.
  static void _showActionPicker({
    required BuildContext buttonContext,
    required _ActionMenuItem currentAction,
    required List<_ActionMenuItem> availableActions,
  }) {
    final overlay = Overlay.of(buttonContext);
    late OverlayEntry overlayEntry;

    final renderBox = buttonContext.findRenderObject() as RenderBox;
    final size = renderBox.size;
    final offset = renderBox.localToGlobal(Offset.zero);

    final menuActions = availableActions.where((action) => action != currentAction).toList();

    final theme = Theme.of(buttonContext);
    final isDarkMode = theme.brightness == Brightness.dark;
    final textColor = isDarkMode ? Colors.grey[300] : Colors.grey[800];
    final listIconColor = isDarkMode ? Colors.grey[400] : Colors.grey[600];
    final titleTextStyle = theme.textTheme.bodyMedium?.copyWith(color: textColor);

    overlayEntry = OverlayEntry(
      builder: (context) {
        return Stack(
          children: <Widget>[
            Positioned.fill(
              child: GestureDetector(
                onTap: () => overlayEntry.remove(),
                child: Container(color: Colors.transparent),
              ),
            ),
            Positioned(
              top: offset.dy + size.height + 8,
              left: offset.dx,
              child: Material(
                elevation: 4.0,
                // MODIFICATION: Use exact color logic from _showPicker
                color: theme.brightness == Brightness.dark
                    ? const Color(0xFF2D2D2D)
                    : Colors.white,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0)
                ),
                child: SizedBox(
                  width: 240,
                  child: ListView(
                    padding: const EdgeInsets.symmetric(vertical: 4.0),
                    shrinkWrap: true,
                    children: menuActions.map((action) {
                      return ListTile(
                        dense: true,
                        contentPadding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 0),
                        leading: action.icon != null
                            ? Icon(action.icon, size: 20, color: listIconColor)
                            : null,
                        title: Text(
                          action.label,
                          style: titleTextStyle,
                        ),
                        onTap: () {
                          overlayEntry.remove();
                          action.onSelect();
                        },
                      );
                    }).toList(),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );

    overlay.insert(overlayEntry);
  }


  /// Builds a single, hoverable segment of the breadcrumb.
  static Widget _buildBreadcrumbSegment<T>({
    required BuildContext context,
    required String title,
    required List<T> items,
    required T selectedItem,
    required String Function(T) itemTitleBuilder,
    required Function(T) onItemSelected,
    required VoidCallback? onCreateNew,
    required VoidCallback onTitleTap,
    required String searchHintText,
    required String createNewText,
    bool isBold = false,
  }) {
    final theme = Theme.of(context);
    final onAppBarColor = theme.appBarTheme.foregroundColor ?? Colors.white;
    final textStyle = TextStyle(
        fontSize: 16,
        color: onAppBarColor,
        fontWeight: isBold ? FontWeight.bold : FontWeight.normal);
    final iconColor = onAppBarColor.withOpacity(0.7);
    final hoverColor = Colors.black.withOpacity(0.15);

    if (items.length <= 1 && onCreateNew == null) {
      return InkWell(
        onTap: onTitleTap,
        hoverColor: hoverColor,
        borderRadius: BorderRadius.circular(6),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 6.0),
          child: Text(title, style: textStyle, overflow: TextOverflow.ellipsis),
        ),
      );
    }

    return ClipRRect(
      borderRadius: BorderRadius.circular(6),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          InkWell(
            onTap: onTitleTap,
            hoverColor: hoverColor,
            child: Padding(
              padding: const EdgeInsets.only(left: 8, right: 6, top: 6, bottom: 6),
              child: Text(title, style: textStyle),
            ),
          ),
          Builder(
            builder: (BuildContext inkWellContext) {
              return InkWell(
                onTap: () {
                  _showPicker<T>(
                    context: inkWellContext,
                    items: items,
                    selectedItem: selectedItem,
                    itemTitleBuilder: itemTitleBuilder,
                    onItemSelected: onItemSelected,
                    onCreateNew: onCreateNew,
                    searchHintText: searchHintText,
                    createNewText: createNewText,
                  );
                },
                hoverColor: hoverColor,
                child: Padding(
                  padding: const EdgeInsets.only(left: 2, right: 4, top: 6, bottom: 6),
                  child: Transform.scale(
                    scaleY: 0.8,
                    child: Icon(Icons.unfold_more_rounded, size: 20, color: iconColor),
                  ),
                ),
              );
            },
          ),
        ],
      ),
    );
  }

  /// Displays the custom picker using a direct Overlay for precise positioning and dismissibility.
  static void _showPicker<T>({
    required BuildContext context,
    required List<T> items,
    required T selectedItem,
    required String Function(T) itemTitleBuilder,
    required Function(T) onItemSelected,
    required VoidCallback? onCreateNew,
    required String searchHintText,
    required String createNewText,
  }) {
    final overlay = Overlay.of(context);
    late OverlayEntry overlayEntry;

    final renderBox = context.findRenderObject() as RenderBox;
    final size = renderBox.size;
    final offset = renderBox.localToGlobal(Offset.zero);
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;
    final pickerTopPosition = offset.dy + size.height + 8;
    // Calculate available height, leaving some padding at the bottom.
    final availableHeight = screenHeight - pickerTopPosition - 16;

    const pickerWidth = 300.0;
    const screenPadding = 8.0;
    double finalLeft = offset.dx;

    // Adjust horizontal position to keep the picker on screen
    if (finalLeft + pickerWidth > screenWidth) {
      finalLeft = screenWidth - pickerWidth - screenPadding;
    }
    if (finalLeft < screenPadding) {
      finalLeft = screenPadding;
    }

    overlayEntry = OverlayEntry(
      builder: (context) {
        return FocusScope(
          node: FocusScopeNode(),
          autofocus: true,
          child: RawKeyboardListener(
            focusNode: FocusNode(),
            onKey: (RawKeyEvent event) {
              if (event.logicalKey == LogicalKeyboardKey.escape) {
                overlayEntry.remove();
              }
            },
            child: Stack(
              children: <Widget>[
                Positioned.fill(
                  child: GestureDetector(
                    onTap: () => overlayEntry.remove(),
                    child: Container(color: Colors.transparent),
                  ),
                ),
                Positioned(
                  left: finalLeft,
                  top: pickerTopPosition,
                  child: ConstrainedBox(
                    constraints: BoxConstraints(
                      // Ensure a minimum height but don't overflow the screen.
                      maxHeight: availableHeight < 150 ? 150 : availableHeight,
                    ),
                    child: Material(
                      elevation: 4.0,
                      color: Theme.of(context).brightness == Brightness.dark
                          ? const Color(0xFF2D2D2D)
                          : Colors.white,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8.0)),
                      child: ProjectPicker<T>(
                        onDismiss: () => overlayEntry.remove(),
                        items: items,
                        selectedItem: selectedItem,
                        itemTitleBuilder: itemTitleBuilder,
                        onItemSelected: onItemSelected,
                        onCreateNew: onCreateNew,
                        hintText: searchHintText,
                        createNewText: createNewText,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );

    overlay.insert(overlayEntry);
  }

  /// This method returns an adaptive AppBar based on the screen width.
  static PreferredSizeWidget buildAdaptiveAdminAppBar(
      BuildContext context,
      {List<AdminTabDefinition>? activeTabs,
        TabController? tabController}
      ) {
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 600) {
      return buildMobileAdminAppBar(context, activeTabs, tabController);
    } else {
      return buildDesktopAdminAppBar(context, activeTabs, tabController);
    }
  }

  /// Desktop/Tablet version of the AppBar.
  static PreferredSizeWidget buildDesktopAdminAppBar(
      BuildContext context,
      List<AdminTabDefinition>? activeTabs,
      TabController? tabController,
      ) {
    return AppBar(
      toolbarHeight: 60,
      leadingWidth: 140,
      titleSpacing: 16.0,
      title: Align(
        alignment: Alignment.centerLeft,
        child: _buildBreadcrumbs(context),
      ),
      leading: Align(
        alignment: Alignment.centerLeft,
        child: GestureDetector(
          onTap: () async {
            final currentUnit = RightsService.currentUnit();
            if (currentUnit != null && RightsService.canUserSeeUnitWorkspace()) {
              await RouterService.navigateToUnit(context, currentUnit);
            }
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: LogoWidget(height: 40, forceDark: true),
          ),
        ),
      ),
      actions: [
        Padding(
            padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 12),
            child: UserHeaderWidget(
              appBarIconColor: ThemeConfig.lllBackground,
            ))
      ],
      bottom: (activeTabs == null) ? null : PreferredSize(
        preferredSize: const Size.fromHeight(40),
        child: Align(
          alignment: Alignment.centerLeft,
          child: TabBar(
            controller: tabController,
            isScrollable: true,
            tabs: activeTabs.map((tab) {
              return Row(
                children: [
                  Icon(tab.icon),
                  Padding(
                    padding: const EdgeInsets.all(12),
                    child: Text(tab.label),
                  ),
                ],
              );
            }).toList(),
          ),
        ),
      ),
    );
  }

  /// Mobile version of the AppBar.
  static PreferredSizeWidget buildMobileAdminAppBar(
      BuildContext context,
      List<AdminTabDefinition>? activeTabs,
      TabController? tabController,
      ) {
    return AppBar(
      automaticallyImplyLeading: false,
      leading: null,
      leadingWidth: 0,
      titleSpacing: 0,
      toolbarHeight: kToolbarHeight,
      title: Row(
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 8.0),
            child: GestureDetector(
              onTap: () async {
                final currentUnit = RightsService.currentUnit();
                if (currentUnit != null && RightsService.canUserSeeUnitWorkspace()) {
                  await RouterService.navigateToUnit(context, currentUnit);
                }
              },
              child: LogoWidget(height: 40, forceDark: true),
            ),
          ),
          Expanded(
            child: Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: const EdgeInsets.only(left: 8.0),
                child: _buildBreadcrumbs(context, isMobile: true),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(right: 12.0),
            child: UserHeaderWidget(appBarIconColor: ThemeConfig.lllBackground),
          ),
        ],
      ),
      bottom:
      (activeTabs == null) ? null :
      PreferredSize(
        preferredSize: const Size.fromHeight(40),
        child: TabBar(
          controller: tabController,
          isScrollable: true,
          tabs: activeTabs.map((tab) {
            return Row(children: [
              Icon(tab.icon),
              Padding(
                padding: const EdgeInsets.all(12),
                child: Text(tab.label),
              ),
            ]);
          }).toList(),
        ),
      ),
    );
  }
}