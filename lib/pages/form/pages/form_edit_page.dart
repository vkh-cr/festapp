import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/components/single_data_grid/admin_page_helper.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/user/login_page.dart';

@RoutePage()
class FormEditPage extends StatefulWidget {
  static const ROUTE = "formEdit";
  String? formLink;

  FormEditPage({super.key, @pathParam this.formLink});

  @override
  _FormEditPageState createState() => _FormEditPageState();
}

class _FormEditPageState extends State<FormEditPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // List of active tabs by name
  final List<String> activeTabNames = [
    AdminTabDefinition.orders,
    if(FeatureService.isFeatureEnabled(FeatureConstants.ticket))
    AdminTabDefinition.tickets,
    if(FeatureService.isFeatureEnabled(FeatureConstants.blueprint))
    AdminTabDefinition.blueprint,
    AdminTabDefinition.form,
    AdminTabDefinition.report,
    AdminTabDefinition.emailTemplates,
    AdminTabDefinition.users,
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
      child: Scaffold(
        appBar: AdminPageHelper.buildAdaptiveAdminAppBar(context, activeTabs, _tabController),
        body: TabBarView(
          controller: _tabController,
          physics: const NeverScrollableScrollPhysics(),
          children: activeTabs.map((tab) => tab.widget).toList(),
        ),
      ),
    );
  }
}

