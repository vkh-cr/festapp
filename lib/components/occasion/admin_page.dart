import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/_shared/app_panel_helper.dart';
import 'package:fstapp/components/single_data_grid/admin_page_helper.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';

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
    if(!AppConfig.isAllUnit)
    AdminTabDefinition.events,
      AdminTabDefinition.places,
    if(FeatureService.isFeatureEnabled(FeatureConstants.userGroups))
      AdminTabDefinition.groups,
    if(FeatureService.isFeatureEnabled(FeatureConstants.game))
      AdminTabDefinition.game,
    if(FeatureService.isFeatureEnabled(FeatureConstants.services))
      AdminTabDefinition.service,
    if(FeatureService.isFeatureEnabled(FeatureConstants.volunteers))
      AdminTabDefinition.volunteers,
    AdminTabDefinition.emailTemplates,
    AdminTabDefinition.users,
    AdminTabDefinition.settings,
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
        appBar: AppPanelHelper.buildAdaptiveAdminAppBar(context, activeTabs: activeTabs, tabController: _tabController),
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