import 'package:fstapp/services/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/appConfig.dart';

import 'ScheduleTimeline.dart';

  class ScheduleTabView extends StatefulWidget {
    Function(int)? onEventPressed;

    List<TimeLineItem> events = [];

   ScheduleTabView({super.key, required this.events, this.onEventPressed});

    @override
    _ScheduleTabViewState createState() => _ScheduleTabViewState(events, onEventPressed);
  }

  class _ScheduleTabViewState extends State<ScheduleTabView> {

    Map<int, List<TimeLineItem>> eventsMap = {};
    final List<TimeLineItem> events;
    Function(int)? onEventPressed;

  _ScheduleTabViewState(this.events, this.onEventPressed);


    @override
    Widget build(BuildContext context) {

      List<Widget> programLineChildren = [];

      eventsMap = events.groupListsBy((e)=>e.startTime.weekday);
      for(var eventsByDay in eventsMap.values)
      {
        var eventGroups = ScheduleTimelineHelper.splitEvents(eventsByDay);
        var timeline = ScheduleTimeline(eventGroups: eventGroups, onEventPressed: onEventPressed, key: UniqueKey(),);
        programLineChildren.add(SingleChildScrollView(child: timeline));
      }
      return Container(
        constraints: const BoxConstraints(maxWidth: 400),
        child: DefaultTabController(
          initialIndex: getInitialIndex(),
          length: eventsMap.length,
          child: Scaffold(
            appBar: TabBar(
              isScrollable: eventsMap.length > 4 ? true : false,
              unselectedLabelColor: Colors.grey,
              labelColor: AppConfig.timelineTabLabelColor,
              indicatorColor: AppConfig.timelineTabIndicatorColor,
              indicatorWeight: 3.0,
              indicatorSize: TabBarIndicatorSize.label,
              indicatorPadding: const EdgeInsets.symmetric(vertical: 12.0),
              tabs: [
                  for(var e in eventsMap.keys)
                    Tab(child: Text(indexToDay(e), style: timeLineTabNameTextStyle, maxLines: 1,))
              ],
            ),
            body: TabBarView(
              children: programLineChildren,
            ),
          ),
        ),
      );
    }

  getInitialIndex() => TimeHelper.getIndexFromDays(eventsMap.keys.toList());

  String indexToDay(int index)
  {
    var now = DateTime.now();
    var d = now.subtract(Duration(days: now.weekday - index));
    return DateFormat("EEEE", context.locale.languageCode).format(d);
  }

  }