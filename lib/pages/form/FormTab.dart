import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/pages/form/FormEditorContent.dart';
import 'package:fstapp/pages/form/FormResponsesContent.dart';
import 'package:fstapp/themeConfig.dart';

class FormTab extends StatefulWidget {
  const FormTab({Key? key}) : super(key: key);

  @override
  _FormTabState createState() => _FormTabState();
}

class _FormTabState extends State<FormTab> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: _tabController.length,
      child: Column(
        children: [
          Container(
            color: ThemeConfig.backgroundColor(context),
            alignment: Alignment.centerLeft,
            child: TabBar(
              controller: _tabController,
              isScrollable: true,
              tabs: [
                DataGridHelper.buildTab(context, Icons.data_object, "Form".tr()),
                DataGridHelper.buildTab(context, Icons.list, "Responses".tr()),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                FormEditorContent(),
                FormResponsesContent(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}



