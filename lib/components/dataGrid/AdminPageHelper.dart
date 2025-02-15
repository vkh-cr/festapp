import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/eshop/BlueprintEditorTab.dart';
import 'package:fstapp/pages/form/FormTab.dart';
import 'package:fstapp/pages/eshop/OrdersTab.dart';
import 'package:fstapp/pages/eshop/ReportTab.dart';
import 'package:fstapp/pages/eshop/TicketsTab.dart';
import 'package:fstapp/pages/occasionAdmin/GameTab.dart';
import 'package:fstapp/pages/occasionAdmin/InformationTab.dart';
import 'package:fstapp/pages/occasionAdmin/PlacesTab.dart';
import 'package:fstapp/pages/occasionAdmin/ScheduleTab.dart';
import 'package:fstapp/pages/occasionAdmin/ServiceTab.dart';
import 'package:fstapp/pages/occasionAdmin/UserGroupsTab.dart';
import 'package:fstapp/pages/occasionAdmin/UsersTab.dart';
import 'package:fstapp/widgets/LogoWidget.dart';

class AdminPageHelper {
  /// This method returns an adaptive AppBar based on the screen width.
  /// For both small screens (mobile) and larger screens, all tabs are shown.
  static PreferredSizeWidget buildAdaptiveAdminAppBar(
      BuildContext context,
      List<AdminTabDefinition> activeTabs,
      TabController? tabController,
      ) {
    final screenWidth = MediaQuery.of(context).size.width;
    if (screenWidth < 600) {
      // For mobile, we show only the occasion title.
      var title = RightsService.currentOccasion!.title!;
      return buildMobileAdminAppBar(context, title, activeTabs, tabController!);
    } else {
      // For larger screens, we show a more detailed title.
      var title =
          "${RightsService.currentUnit!.title!} - ${RightsService.currentOccasion!.title!}";
      return buildDesktopAdminAppBar(context, activeTabs, tabController!, title);
    }
  }

  /// Desktop/Tablet version of the AppBar: includes the logo, title,
  /// signed-in user info, and a TabBar.
  static PreferredSizeWidget buildDesktopAdminAppBar(
      BuildContext context,
      List<AdminTabDefinition> activeTabs,
      TabController tabController,
      String title,
      ) {
    final currentUser = RightsService.currentOccasionUser;

    return AppBar(
      toolbarHeight: 60,
      leadingWidth: 140,
      title: Text(title),
      leading: Align(
        alignment: Alignment.centerLeft,
        child: GestureDetector(
          onTap: () {
            // Navigate to the unit edit page if the user has rights.
            if (RightsService.canUserSeeUnitWorkspace()) {
              RouterService.navigate(
                context,
                "unit/${RightsService.currentUnitUser?.unit}/edit",
              );
            }
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: LogoWidget(height: 40, forceDark: true),
          ),
        ),
      ),
      actions: [
        if (currentUser != null)
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.person),
                const SizedBox(width: 8),
                Text(
                  "${currentUser.data?[Tb.occasion_users.data_name]} "
                      "${currentUser.data?[Tb.occasion_users.data_surname]} "
                      "(${currentUser.data?[Tb.occasion_users.data_email]})",
                ),
              ],
            ),
          ),
      ],
      bottom: PreferredSize(
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

  /// Mobile version of the AppBar: now also shows the TabBar with all tabs.
  static PreferredSizeWidget buildMobileAdminAppBar(
      BuildContext context,
      String title,
      List<AdminTabDefinition> activeTabs,
      TabController tabController,
      ) {
    final currentUser = RightsService.currentOccasionUser;

    return AppBar(
      toolbarHeight: 60,
      // The logo is shown as an IconButton.
      leading: Builder(
        builder: (context) {
          return IconButton(
            icon: LogoWidget(height: 40, forceDark: true,),
            onPressed: () {
              if (RightsService.canUserSeeUnitWorkspace()) {
                RouterService.navigate(
                  context,
                  "unit/${RightsService.currentUnitUser?.unit}/edit",
                );
              }
            },
          );
        },
      ),
      title: Text(title),
      actions: [
        if (currentUser != null)
          IconButton(
            icon: const Icon(Icons.person),
            onPressed: () {
              // Handle signed-in user actions (e.g., open a profile page or a popup).
            },
          ),
      ],
      // Added TabBar to the mobile AppBar
      bottom: PreferredSize(
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
}

class AdminTabDefinition {
  final String label;
  final IconData icon;
  final Widget widget;

  AdminTabDefinition({
    required this.label,
    required this.icon,
    required this.widget,
  });

  // Tab labels as static const strings.
  static const String info = "Info";
  static const String events = "Events";
  static const String places = "Places";
  static const String groups = "Groups";
  static const String service = "Service";
  static const String users = "Users";
  static const String game = "Game";

  static const String form = "Form";
  static const String blueprint = "Blueprint";
  static const String tickets = "Tickets";
  static const String orders = "Orders";
  static const String report = "Report";

  // Available tabs defined in a dictionary.
  static Map<String, AdminTabDefinition> get availableTabs => {
    info: AdminTabDefinition(
        label: "Info".tr(), icon: Icons.info, widget: InformationTab()),
    events: AdminTabDefinition(
        label: "Schedule".tr(),
        icon: Icons.calendar_month,
        widget: ScheduleTab()),
    places: AdminTabDefinition(
        label: "Places".tr(),
        icon: Icons.pin_drop,
        widget: PlacesTab()),
    groups: AdminTabDefinition(
        label: "Groups".tr(),
        icon: Icons.groups,
        widget: UserGroupsTab()),
    service: AdminTabDefinition(
        label: "Service".tr(),
        icon: Icons.food_bank,
        widget: ServiceTab()),
    users: AdminTabDefinition(
        label: "Users".tr(),
        icon: Icons.people,
        widget: UsersTab()),
    game: AdminTabDefinition(
        label: "Game".tr(),
        icon: Icons.gamepad,
        widget: GameTab()),
    form: AdminTabDefinition(
        label: "Form".tr(), icon: Icons.list, widget: FormTab()),
    blueprint: AdminTabDefinition(
        label: "Blueprint".tr(),
        icon: Icons.grid_on,
        widget: BlueprintTab()),
    tickets: AdminTabDefinition(
        label: "Tickets".tr(),
        icon: Icons.local_activity,
        widget: TicketsTab()),
    orders: AdminTabDefinition(
        label: "Orders".tr(),
        icon: Icons.shopping_cart,
        widget: OrdersTab()),
    report: AdminTabDefinition(
        label: "Report".tr(),
        icon: Icons.stacked_bar_chart,
        widget: ReportTab()),
  };
}
