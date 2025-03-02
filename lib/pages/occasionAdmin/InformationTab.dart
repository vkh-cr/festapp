import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/services/features/FeatureConstants.dart';
import 'package:fstapp/services/features/FeatureService.dart';
import 'package:fstapp/pages/occasionAdmin/InformationContent.dart';
import 'package:fstapp/pages/occasionAdmin/SongbookContent.dart';
import 'package:fstapp/themeConfig.dart';

class InformationTab extends StatefulWidget {
  const InformationTab({super.key});

  @override
  _InformationTabState createState() => _InformationTabState();
}

class _InformationTabState extends State<InformationTab> with SingleTickerProviderStateMixin {
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
                DataGridHelper.buildTab(context, Icons.info, "Information".tr()),
                if(FeatureService.isFeatureEnabled(FeatureConstants.songbook))
                DataGridHelper.buildTab(context, Icons.library_music, "Songbook".tr()),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                InformationContent(),
                if(FeatureService.isFeatureEnabled(FeatureConstants.songbook))
                SongbookContent(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
