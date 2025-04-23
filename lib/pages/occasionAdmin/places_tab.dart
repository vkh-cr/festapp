import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/pages/occasionAdmin/places_content.dart';
import 'package:fstapp/pages/occasionAdmin/path_groups_content.dart';
import 'package:fstapp/theme_config.dart';

class PlacesTab extends StatefulWidget {
  const PlacesTab({Key? key}) : super(key: key);

  @override
  _PlacesTabState createState() => _PlacesTabState();
}

class _PlacesTabState extends State<PlacesTab>
    with SingleTickerProviderStateMixin {
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
                DataGridHelper.buildTab(
                    context, Icons.place, "Places".tr()),
                DataGridHelper.buildTab(
                    context, Icons.timeline, "Paths".tr()),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: const [
                PlacesContent(),
                PathGroupsContent()
              ],
            ),
          ),
        ],
      ),
    );
  }
}
