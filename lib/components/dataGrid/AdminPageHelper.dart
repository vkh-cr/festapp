import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/InformationTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/PlacesTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ScheduleTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ServiceTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UserGroupsTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UsersTab.dart';
import 'package:fstapp/pages/Eshop/BlueprintEditorTab.dart';
import 'package:fstapp/pages/Eshop/FormTab.dart';
import 'package:fstapp/pages/Eshop/OrdersTab.dart';
import 'package:fstapp/pages/Eshop/ReportTab.dart';
import 'package:fstapp/pages/Eshop/TicketsTab.dart';

class AdminPageHelper {
  static PreferredSizeWidget buildAdminAppBar(
      BuildContext context,
      List<AdminTabDefinition> activeTabs,
      TabController tabController,
      String title,
      ) {
    return AppBar(
      title: Text(title),
      leading: BackButton(
        onPressed: () => RouterService.goBack(context),
      ),
      actions: [
        if (RightsService.canUserSeeUnitWorkspace())
          Padding(
            padding: EdgeInsets.all(12),
            child: ElevatedButton(
              onPressed: () => RouterService.navigate(
                  context, "unit/${RightsService.currentUnitUser?.unit}/edit"),
              child: Text(
                "Events Overview".tr(),
              ),
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

  // Tab labels as static const strings
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

  // Available tabs defined in a dictionary
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
