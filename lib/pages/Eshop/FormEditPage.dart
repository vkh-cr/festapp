import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/components/dataGrid/AdminPageHelper.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/pages/Eshop/FormPage.dart';
import 'package:fstapp/pages/LoginPage.dart';

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
    AdminTabDefinition.tickets,
    AdminTabDefinition.blueprint,
    AdminTabDefinition.form,
    AdminTabDefinition.report,
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
        appBar: AdminPageHelper.buildAdminAppBar(context, activeTabs, _tabController, "Admin".tr()),
        body: TabBarView(
          controller: _tabController,
          physics: const NeverScrollableScrollPhysics(),
          children: activeTabs.map((tab) => tab.widget).toList(),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            RouterService.navigate(
                context, "${FormPage.ROUTE}/${widget.formLink}");
          },
          child: const Icon(Icons.remove_red_eye_rounded),
        ),
      ),
    );
  }
}

