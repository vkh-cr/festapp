import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/map/places_content.dart';
import 'package:fstapp/components/map/path_groups_content.dart';
import 'package:fstapp/components/icons/icons_management_widget.dart';
import 'package:fstapp/components/icons/place_types_content.dart';
import 'package:fstapp/components/icons/icons_strings.dart';
import 'package:fstapp/theme_config.dart';

class PlacesTab extends StatefulWidget {
  const PlacesTab({super.key});

  @override
  _PlacesTabState createState() => _PlacesTabState();
}

class _PlacesTabState extends State<PlacesTab>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
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
                DataGridHelper.buildTab(context, Icons.place, "Places".tr()),
                DataGridHelper.buildTab(context, Icons.timeline, "Paths".tr()),
                DataGridHelper.buildTab(
                    context, Icons.category_outlined, IconsStrings.placeTypes),
                DataGridHelper.buildTab(
                    context, Icons.emoji_symbols_outlined, IconsStrings.icons),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: const [
                PlacesContent(),
                PathGroupsContent(),
                PlaceTypesContent(),
                IconsManagementWidget(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
