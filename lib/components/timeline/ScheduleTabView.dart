import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/TimeHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'ScheduleTimeline.dart';

class ScheduleTabView extends StatefulWidget {
  final Function(int)? onEventPressed;
  final List<TimeBlockItem> events;
  final Function(BuildContext, List<TimeBlockGroup>, TimeBlockItem? parentEventId)? onAddNewEvent;
  final bool Function()? showAddNewEventButton;

  ScheduleTabView({
    super.key,
    required this.events,
    this.onAddNewEvent,
    this.showAddNewEventButton,
    this.onEventPressed,
  });

  @override
  _ScheduleTabViewState createState() => _ScheduleTabViewState();
}

class _ScheduleTabViewState extends State<ScheduleTabView> {
  List<TimeBlockGroup> datedEvents = [];

  @override
  Widget build(BuildContext context) {
    List<Widget> programLineChildren = [];

    // Group events by date
    datedEvents = TimeBlockHelper.splitTimeBlocksByDate(
      widget.events,
      context,
      AppConfig.daySplitHour,
    );

    for (var eventsByDay in datedEvents) {
      var eventGroups = TimeBlockHelper.splitTimeBlocks(eventsByDay.events);
      var timeline = ScheduleTimeline(
        eventGroups: eventGroups,
        onEventPressed: widget.onEventPressed,
        showAddNewEventButton: widget.showAddNewEventButton,
        onAddNewEvent: widget.onAddNewEvent,
      );
      programLineChildren.add(SingleChildScrollView(child: timeline));
    }

    return Container(
      constraints: const BoxConstraints(maxWidth: 400),
      child: DefaultTabController(
        initialIndex: getInitialIndex(),
        length: datedEvents.length,
        child: Scaffold(
          appBar: TabBar(
            isScrollable: datedEvents.length > 4,
            unselectedLabelColor: Colors.grey,
            labelColor: ThemeConfig.timelineTabLabelColor(context),
            indicatorColor: ThemeConfig.timelineTabIndicatorColor(context),
            indicatorWeight: 3.0,
            indicatorSize: TabBarIndicatorSize.label,
            indicatorPadding: const EdgeInsets.symmetric(vertical: 12.0),
            tabs: [
              for (var e in datedEvents)
                Tab(
                  child: Text(
                    StylesConfig.formatDateTimeForTab(context, e.dateTime!),
                    style: StylesConfig.timeLineTabNameTextStyle,
                    maxLines: 1,
                  ),
                )
            ],
          ),
          body: TabBarView(
            children: programLineChildren,
          ),
        ),
      ),
    );
  }

  int getInitialIndex() => TimeHelper.getIndexFromDays(
    datedEvents.map((e) => e.dateTime!.weekday),
  );
}
