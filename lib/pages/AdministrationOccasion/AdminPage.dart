import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/pages/AdministrationOccasion/EventsTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/ExclusivityTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/InformationTab.dart';
import 'package:fstapp/pages/AdministrationOccasion/PlacesTab.dart';
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
    AdminTabDefinition.exclusivity,
    AdminTabDefinition.groups,
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
                        child: Text(tab.label).tr(),
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

  // Available tabs defined in a dictionary
  static final Map<String, AdminTabDefinition> availableTabs = {
    info: AdminTabDefinition(label: info, icon: Icons.info, widget: InformationTab()),
    events: AdminTabDefinition(label: events, icon: Icons.calendar_month, widget: EventsTab()),
    places: AdminTabDefinition(label: places, icon: Icons.pin_drop, widget: PlacesTab()),
    exclusivity: AdminTabDefinition(label: exclusivity, icon: Icons.punch_clock_rounded, widget: ExclusivityTab()),
    groups: AdminTabDefinition(label: groups, icon: Icons.groups, widget: UserGroupsTab()),
    service: AdminTabDefinition(label: service, icon: Icons.food_bank, widget: ServiceTab()),
    users: AdminTabDefinition(label: users, icon: Icons.people, widget: UsersTab()),
  };
}
