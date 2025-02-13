import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/dataGrid/DataGridHelper.dart';
import 'package:fstapp/dataServices/featureService.dart';
import 'package:fstapp/pages/occasionAdmin/InformationContent.dart';
import 'package:fstapp/pages/occasionAdmin/SongbookContent.dart';
import 'package:fstapp/themeConfig.dart';

class InformationTab extends StatefulWidget {
  const InformationTab({Key? key}) : super(key: key);

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
                if(FeatureService.isFeatureEnabled(FeatureService.songbook))
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
                if(FeatureService.isFeatureEnabled(FeatureService.songbook))
                SongbookContent(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
