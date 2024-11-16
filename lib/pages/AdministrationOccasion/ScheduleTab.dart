import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/pages/AdministrationOccasion/ScheduleContent.dart';
import 'package:fstapp/pages/AdministrationOccasion/ExclusivityContent.dart';
import 'package:fstapp/themeConfig.dart';

class ScheduleTab extends StatefulWidget {
  const ScheduleTab({Key? key}) : super(key: key);

  @override
  _ScheduleTabState createState() => _ScheduleTabState();
}

class _ScheduleTabState extends State<ScheduleTab> with SingleTickerProviderStateMixin {
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
                buildTab(Icons.calendar_month, "Schedule".tr()),
                buildTab(Icons.punch_clock_rounded, "Exclusivity".tr()),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                ScheduleContent(),  // Schedule-specific content
                ExclusivityContent(),  // Exclusivity-related content
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
          padding: const EdgeInsets.all(8),
          child: Text(
            text,
            style: TextStyle(color: ThemeConfig.blackColor(context)),
          ),
        ),
      ],
    );
  }
}
