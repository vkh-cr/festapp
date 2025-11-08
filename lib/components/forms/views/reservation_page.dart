import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart'; // Added for .tr() if you use it in the strip
import 'package:fstapp/components/_shared/app_panel_helper.dart';
import 'package:fstapp/components/_shared/red_strip_widget.dart'; // <-- 1. ADDED IMPORT
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/single_data_grid/admin_page_helper.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/user/login_page.dart';

@RoutePage()
class ReservationsPage extends StatefulWidget {
  static const ROUTE = "reservations";

  ReservationsPage({super.key});

  @override
  _ReservationsPageState createState() => _ReservationsPageState();
}

class _ReservationsPageState extends State<ReservationsPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // List of active tabs by name
  final List<String> activeTabNames = [
    AdminTabDefinition.orders,
    AdminTabDefinition.tickets,
    if(FeatureService.isFeatureEnabled(FeatureConstants.blueprint))
      AdminTabDefinition.blueprint,
    AdminTabDefinition.form,
    AdminTabDefinition.products,
    if(FeatureService.isFeatureEnabled(FeatureConstants.services))
      AdminTabDefinition.inventoryPools,
    AdminTabDefinition.report,
    AdminTabDefinition.emailTemplates,
    AdminTabDefinition.users,
    AdminTabDefinition.settings,
  ];

  @override
  Future<void> didChangeDependencies() async {
    if (!AuthService.isLoggedIn()) {
      await RouterService.navigate(context, LoginPage.ROUTE);
    }

    super.didChangeDependencies();
  }

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
      child: Column(
        children: [
          SafeArea(
            bottom: false,
            child: RedStripWidget(
            ),
          ),
          Expanded(
            child: Scaffold(
              appBar: AppPanelHelper.buildAdaptiveAdminAppBar(context, activeTabs: activeTabs, tabController: _tabController),
              body: SafeArea(
                top: false,
                child: TabBarView(
                  controller: _tabController,
                  physics: const NeverScrollableScrollPhysics(),
                  children: activeTabs.map((tab) => tab.widget).toList(),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}