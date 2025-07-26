import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/forms/views/form_editor_content.dart';
import 'package:fstapp/components/forms/views/form_responses_content.dart';
import 'package:fstapp/components/forms/views/form_settings_content.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/features/features_strings.dart';

class FormTab extends StatefulWidget {
  final String formLink;
  final VoidCallback? onActionCompleted;
  final VoidCallback? onDataUpdated;
  const FormTab({
    super.key,
    required this.formLink,
    this.onActionCompleted,
    this.onDataUpdated,
  });

  @override
  _FormTabState createState() => _FormTabState();
}

class _FormTabState extends State<FormTab> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          color: ThemeConfig.backgroundColor(context),
          alignment: Alignment.centerLeft,
          child: TabBar(
            controller: _tabController,
            isScrollable: true,
            tabs: [
              DataGridHelper.buildTab(context, Icons.data_object, FeaturesStrings.tabForm),
              DataGridHelper.buildTab(context, Icons.settings, "Settings".tr()),
              DataGridHelper.buildTab(context, Icons.list, FeaturesStrings.tabResponses),
            ],
          ),
        ),
        Expanded(
          child: TabBarView(
            controller: _tabController,
            physics: const NeverScrollableScrollPhysics(),
            children: [
              FormEditorContent(
                formLink: widget.formLink,
                onDataUpdated: widget.onDataUpdated,
              ),
              FormSettingsContent(
                formLink: widget.formLink,
                onActionCompleted: widget.onActionCompleted,
                onDataUpdated: widget.onDataUpdated,
              ),
              FormResponsesContent(formLink: widget.formLink),
            ],
          ),
        ),
      ],
    );
  }
}