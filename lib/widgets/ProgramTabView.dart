  import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';

import '../styles/Styles.dart';
import 'ProgramTimeline.dart';

  class ProgramTabView extends StatefulWidget {
    Function(int)? onEventPressed;

    List<TimeLineItem> events = [];

   ProgramTabView({super.key, required this.events, this.onEventPressed});

    @override
    _ProgramTabViewState createState() => _ProgramTabViewState(events, onEventPressed);
  }

  class _ProgramTabViewState extends State<ProgramTabView> {

    Map<int, List<TimeLineItem>> eventsMap = {};
    final List<TimeLineItem> events;
    Function(int)? onEventPressed;

  _ProgramTabViewState(this.events, this.onEventPressed);


    @override
    Widget build(BuildContext context) {

      eventsMap = events.groupListsBy((e)=>e.startTime.weekday);
      return Container(
        constraints: const BoxConstraints(maxWidth: 400),
        child: DefaultTabController(
          initialIndex: getInitialIndex(),
          length: eventsMap.length,
          child: Scaffold(
            appBar: TabBar(
              unselectedLabelColor: Colors.grey,
              labelColor: primaryBlue2,
              indicatorColor: primaryBlue2,
              indicatorWeight: 3.0,
              indicatorSize: TabBarIndicatorSize.label,
              indicatorPadding: const EdgeInsets.symmetric(vertical: 12.0),
              tabs: [
                  for(var e in eventsMap.keys)
                    Tab(child: Text(indexToDay(e)))
              ],
            ),
            body: TabBarView(
              children: [
                for(var e in eventsMap.values)
                  ProgramTimeline(events: e, onEventPressed: onEventPressed)
              ],
            ),
          ),
        ),
      );
    }

  getInitialIndex() {
      switch(DateTime.now().weekday)
      {
        case DateTime.saturday: return 0;
        case DateTime.sunday: return 1;
        default: return 0;
      }
  }
  static String indexToDay(int index)
  {
    var now = DateTime.now();
    var d = now.subtract(Duration(days: now.weekday - index));
    return DateFormat("EEEE", "cs").format(d);
  }

  }