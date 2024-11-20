import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameCheckPointsContent.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameSettingsContent.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameUserGroupsContent.dart';
import 'package:fstapp/themeConfig.dart';

class GameTab extends StatefulWidget {
  const GameTab({Key? key}) : super(key: key);

  @override
  _GameTabState createState() => _GameTabState();
}

class _GameTabState extends State<GameTab> with SingleTickerProviderStateMixin {
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
                buildTab(Icons.gamepad, "Check points".tr()),
                buildTab(Icons.groups, "Groups".tr()),
                buildTab(Icons.settings, "Settings".tr()),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                GameCheckPointsContent(),  // Game Check Points content
                GameUserGroupsContent(),   // Game User Groups content
                GameSettingsContent(),     // Game Settings content for start and end times
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget buildTab(IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, color: ThemeConfig.blackColor(context)),
        Padding(
          padding: const EdgeInsets.all(10),
          child: Text(
            text,
            style: TextStyle(color: ThemeConfig.blackColor(context)),
          ),
        ),
      ],
    );
  }
}



