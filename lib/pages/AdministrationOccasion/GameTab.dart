import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameCheckPointsContent.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameSettingsContent.dart';
import 'package:fstapp/pages/AdministrationOccasion/GameUserGroupsContent.dart';

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
            height: 40,
            alignment: Alignment.centerLeft,
            child: TabBar(
              controller: _tabController,
              isScrollable: true,
              tabs: [
                Row(
                  children: [
                    Icon(Icons.gamepad),
                    Padding(
                      padding: const EdgeInsets.all(12),
                      child: Text("Check Points".tr()),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Icon(Icons.groups),
                    Padding(
                      padding: const EdgeInsets.all(12),
                      child: Text("User Groups".tr()),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Icon(Icons.settings),
                    Padding(
                      padding: const EdgeInsets.all(12),
                      child: Text("Settings".tr()),
                    ),
                  ],
                ),
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
}



