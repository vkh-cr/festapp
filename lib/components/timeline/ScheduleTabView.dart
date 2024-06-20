import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
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

    List<EventGroup> datedEvents = [];
    final List<TimeLineItem> events;
    Function(int)? onEventPressed;

  _ScheduleTabViewState(this.events, this.onEventPressed);


    @override
    Widget build(BuildContext context) {

      List<Widget> programLineChildren = [];

      datedEvents = ScheduleTimelineHelper.splitEventsByDate(events, context);
      for(var eventsByDay in datedEvents)
      {
        var eventGroups = ScheduleTimelineHelper.splitEvents(eventsByDay.events);
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
                    Tab(child: Text(indexToDay(e.dateTime!.weekday), style: timeLineTabNameTextStyle, maxLines: 1,))
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

  String indexToDay(int index)
  {
    var now = DateTime.now();
    var d = now.subtract(Duration(days: now.weekday - index));
    return DateFormat("EEEE", context.locale.languageCode).format(d);
  }

  }