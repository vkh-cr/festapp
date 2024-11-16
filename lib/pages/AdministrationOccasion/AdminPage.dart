import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/InformationTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/PlacesTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ScheduleTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ServiceTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UserGroupsTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/UsersTab.dart';

@RoutePage()
class AdminPage extends StatefulWidget {
  static const ROUTE = "admin";
  const AdminPage({Key? key}) : super(key: key);

  @override
  _AdminPageState createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // List of active tabs by name
  final List<String> activeTabNames = [
    AdminTabDefinition.info,
    AdminTabDefinition.events,
    AdminTabDefinition.places,
    AdminTabDefinition.groups,
    AdminTabDefinition.game,
    AdminTabDefinition.service,
    AdminTabDefinition.users
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: activeTabNames.length);
  }

  @override
  Widget build(BuildContext context) {
    final activeTabs = activeTabNames.map((name) => AdminTabDefinition.availableTabs[name]!).toList();

    return DefaultTabController(
      length: _tabController.length,
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Admin").tr(),
          leading: BackButton(
            onPressed: () => RouterService.popOrHome(context),
          ),
          bottom: PreferredSize(
            preferredSize: const Size.fromHeight(40),
            child: Align(
              alignment: Alignment.centerLeft,
              child: TabBar(
                controller: _tabController,
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
        ),
        body: TabBarView(
          controller: _tabController,
          physics: const NeverScrollableScrollPhysics(),
          children: activeTabs.map((tab) => tab.widget).toList(),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }
}

// Definition for each tab
class AdminTabDefinition {
  final String label;
  final IconData icon;
  final Widget widget;

  AdminTabDefinition({required this.label, required this.icon, required this.widget});

  // Tab labels as static const strings
  static const String info = "Info";
  static const String events = "Events";
  static const String places = "Places";
  static const String exclusivity = "Exclusivity";
  static const String groups = "Groups";
  static const String service = "Service";
  static const String users = "Users";
  static const String game = "Game";

  // Available tabs defined in a dictionary
  static Map<String, AdminTabDefinition> get availableTabs => {
    info: AdminTabDefinition(label: "Info".tr(), icon: Icons.info, widget: InformationTab()),
    events: AdminTabDefinition(label: "Schedule".tr(), icon: Icons.calendar_month, widget: ScheduleTab()),
    places: AdminTabDefinition(label: "Places".tr(), icon: Icons.pin_drop, widget: PlacesTab()),
    groups: AdminTabDefinition(label: "Groups".tr(), icon: Icons.groups, widget: UserGroupsTab()),
    service: AdminTabDefinition(label: "Service".tr(), icon: Icons.food_bank, widget: ServiceTab()),
    users: AdminTabDefinition(label: "Users".tr(), icon: Icons.people, widget: UsersTab()),
    game: AdminTabDefinition(label: "Game".tr(), icon: Icons.gamepad, widget: GameTab()),
  };
}
