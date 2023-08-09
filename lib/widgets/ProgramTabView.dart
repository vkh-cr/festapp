  import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import '../models/EventModel.dart';
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

    final List<TimeLineItem> events;
    List<TimeLineItem> events0 = [];
    List<TimeLineItem> events1 = [];
    List<TimeLineItem> events2 = [];
    List<TimeLineItem> events3 = [];
    Function(int)? onEventPressed;

  _ProgramTabViewState(this.events, this.onEventPressed);


    @override
    Widget build(BuildContext context) {
      events0.clear();
      events0.addAll(events.where((element) => element.startTime.weekday == DateTime.thursday));
      events1.clear();
      events1.addAll(events.where((element) => element.startTime.weekday == DateTime.friday));
      events2.clear();
      events2.addAll(events.where((element) => element.startTime.weekday == DateTime.saturday));
      events3.clear();
      events3.addAll(events.where((element) => element.startTime.weekday == DateTime.sunday));
      return Container(
        constraints: BoxConstraints(maxWidth: 400),
        child: DefaultTabController(
          initialIndex: getInitialIndex(),
          length: 4,
          child: Scaffold(
            appBar: const TabBar(
              unselectedLabelColor: Colors.grey,
              labelColor: primaryBlue2,
              indicatorColor: primaryBlue2,
              indicatorWeight: 3.0,
              indicatorSize: TabBarIndicatorSize.label,
              indicatorPadding: EdgeInsets.symmetric(vertical: 12.0),
              tabs: [
                Tab(child: Text("čtvrtek")),
                Tab(child: Text("pátek")),
                Tab(child: Text("sobota")),
                Tab(child: Text("neděle"))
              ],
            ),
            body: TabBarView(
              children: [
                ProgramTimeline(events: events0, onEventPressed: onEventPressed),
                ProgramTimeline(events: events1, onEventPressed: onEventPressed),
                ProgramTimeline(events: events2, onEventPressed: onEventPressed),
                ProgramTimeline(events: events3, onEventPressed: onEventPressed),
              ],
            ),
          ),
        ),
      );
    }

  getInitialIndex() {
      switch(DateTime.now().weekday)
      {
        case DateTime.thursday: return 0;
        case DateTime.friday: return 1;
        case DateTime.saturday: return 2;
        case DateTime.sunday: return 3;
        default: return 0;
      }
  }
  }