import 'package:flutter/material.dart';
import 'package:auto_route/auto_route.dart';
import 'package:fstapp/components/dataGrid/AdminPageHelper.dart';
import 'package:easy_localization/easy_localization.dart';

@RoutePage()
class FormEditPage extends StatefulWidget {
  static const ROUTE = "formEdit";
  String? formKey;

  FormEditPage({super.key, @pathParam this.formKey});

  @override
  _FormEditPageState createState() => _FormEditPageState();
}

class _FormEditPageState extends State<FormEditPage> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // List of active tabs by name
  final List<String> activeTabNames = [
    AdminTabDefinition.form,
    AdminTabDefinition.blueprint
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
}

