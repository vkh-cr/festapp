import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/AdminPageHelper.dart';


@RoutePage()
class AdminPage extends StatefulWidget {
  static const ROUTE = "admin";
  const AdminPage({super.key});

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
    AdminTabDefinition.users,
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
        appBar: AdminPageHelper.buildAdminAppBar(context, activeTabs, _tabController, "Admin".tr()),
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