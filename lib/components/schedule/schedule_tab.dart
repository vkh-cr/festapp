import 'package:flutter/material.dart';
import 'package:fstapp/components/single_data_grid/data_grid_helper.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/schedule/exclusivity_content.dart';
import 'package:fstapp/components/schedule/schedule_strings.dart';
import 'package:fstapp/components/schedule/schedule_content.dart';
import 'package:fstapp/components/event_feedback/event_feedback_admin_content.dart';
import 'package:fstapp/components/event_feedback/event_feedback_strings.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/theme_config.dart';

class ScheduleTab extends StatefulWidget {
  const ScheduleTab({super.key});

  @override
  _ScheduleTabState createState() => _ScheduleTabState();
}

class _ScheduleTabState extends State<ScheduleTab>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  // Feedback subtab is present only when the EventFeedback feature is on —
  // matches the deployed ScheduleTab.
  late final bool _feedbackEnabled =
      FeatureService.isFeatureEnabled(FeatureConstants.eventFeedback);

  @override
  void initState() {
    super.initState();
    _tabController =
        TabController(length: _feedbackEnabled ? 3 : 2, vsync: this);
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
                    context, Icons.calendar_month, CommonStrings.schedule),
                DataGridHelper.buildTab(context, Icons.punch_clock_rounded,
                    ScheduleStrings.exclusivity),
                if (_feedbackEnabled)
                  DataGridHelper.buildTab(context,
                      Icons.sentiment_satisfied_alt, EventFeedbackStrings.featureTitle),
              ],
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              physics: const NeverScrollableScrollPhysics(),
              children: [
                ScheduleContent(),
                ExclusivityContent(),
                if (_feedbackEnabled) const EventFeedbackAdminContent(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
