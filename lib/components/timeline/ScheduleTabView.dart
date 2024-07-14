import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';

import 'ScheduleTimeline.dart';

class ScheduleTabView extends StatefulWidget {
  Function(int)? onEventPressed;

  List<TimeBlockItem> events = [];

 ScheduleTabView({super.key, required this.events, this.onEventPressed});

  @override
  _ScheduleTabViewState createState() => _ScheduleTabViewState(events, onEventPressed);
}

class _ScheduleTabViewState extends State<ScheduleTabView> {

  List<TimeBlockGroup> datedEvents = [];
  final List<TimeBlockItem> events;
  Function(int)? onEventPressed;

_ScheduleTabViewState(this.events, this.onEventPressed);


  @override
  Widget build(BuildContext context) {

    List<Widget> programLineChildren = [];

    datedEvents = TimeBlockHelper.splitTimeBlocksByDate(events, context, AppConfig.daySplitHour);
    for (var eventsByDay in datedEvents)
    {
      var eventGroups = TimeBlockHelper.splitTimeBlocks(eventsByDay.events);
      var timeline = ScheduleTimeline(eventGroups: eventGroups, onEventPressed: onEventPressed, key: UniqueKey(),);
      programLineChildren.add(SingleChildScrollView(child: timeline));
    }
    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      child: DefaultTabController(
        initialIndex: getInitialIndex(),
        length: datedEvents.length,
        child: Scaffold(
          appBar: TabBar(
            isScrollable: datedEvents.length > 4 ? true : false,
            unselectedLabelColor: Colors.grey,
            labelColor: AppConfig.timelineTabLabelColor,
            indicatorColor: AppConfig.timelineTabIndicatorColor,
            indicatorWeight: 3.0,
            indicatorSize: TabBarIndicatorSize.label,
            indicatorPadding: const EdgeInsets.symmetric(vertical: 12.0),
            tabs: [
                for(var e in datedEvents)
                  Tab(child: Text(e.dateTime!.weekdayToString(context), style: timeLineTabNameTextStyle, maxLines: 1))
            ],
          ),
          body: TabBarView(
            children: programLineChildren,
          ),
        ),
      ),
    );
  }

  getInitialIndex() => TimeHelper.getIndexFromDays(datedEvents.map((e)=>e.dateTime!.weekday));
}